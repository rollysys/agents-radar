/**
 * Hacker News data fetching via Algolia Search API.
 *
 * Strategy:
 *   - Search multiple AI + autonomous-driving keywords via Algolia
 *   - Server-side time filtering (created_at_i >= since)
 *   - Deduplicate across queries by story ID
 *   - Sort by score descending
 *   - ~20 requests vs 200+ with Firebase — much more efficient
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface HNStory {
  id: number;
  title: string;
  url: string;
  score: number;
  by: string;
  time: number;
  descendants: number;
  hnUrl: string;
}

export interface HNFetchResult {
  stories: HNStory[];
  totalFetched: number;
  errors: string[];
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const ALGOLIA_API = "https://hn.algolia.com/api/v1";
const FETCH_TIMEOUT_MS = 10_000;
const HITS_PER_QUERY = 50;

const QUERIES = [
  // AI (original)
  "AI",
  "LLM",
  "GPT",
  "Claude",
  "OpenAI",
  "Anthropic",
  "machine learning",
  "deep learning",
  "neural network",
  // Autonomous driving (new)
  "autonomous driving",
  "self-driving",
  "Tesla FSD",
  "Waymo",
  "robotaxi",
];

// ---------------------------------------------------------------------------
// Algolia response types
// ---------------------------------------------------------------------------

interface AlgoliaHit {
  objectID: string;
  title: string;
  url: string | null;
  points: number | null;
  num_comments: number | null;
  author: string;
  created_at_i: number;
}

interface AlgoliaResponse {
  hits: AlgoliaHit[];
}

// ---------------------------------------------------------------------------
// HTTP helper
// ---------------------------------------------------------------------------

async function algoliaSearch(query: string, sinceTs: number): Promise<AlgoliaResponse> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const params = new URLSearchParams({
      query,
      tags: "story",
      numericFilters: `created_at_i>${sinceTs}`,
      hitsPerPage: String(HITS_PER_QUERY),
    });
    const resp = await fetch(`${ALGOLIA_API}/search?${params}`, {
      signal: controller.signal,
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    return (await resp.json()) as AlgoliaResponse;
  } finally {
    clearTimeout(timer);
  }
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export async function fetchHackerNewsData(since: Date): Promise<HNFetchResult> {
  const errors: string[] = [];
  const sinceTs = Math.floor(since.getTime() / 1000);

  // Fire all search queries in parallel
  const results = await Promise.all(
    QUERIES.map(async (query) => {
      try {
        return await algoliaSearch(query, sinceTs);
      } catch (err) {
        errors.push(`[hn/search/${query}] ${err}`);
        return { hits: [] } as AlgoliaResponse;
      }
    }),
  );

  // Deduplicate by objectID across all queries
  const seen = new Set<string>();
  const allHits: AlgoliaHit[] = [];
  for (const result of results) {
    for (const hit of result.hits) {
      if (!seen.has(hit.objectID)) {
        seen.add(hit.objectID);
        allHits.push(hit);
      }
    }
  }

  // Map to HNStory
  const stories: HNStory[] = allHits
    .map((hit) => ({
      id: Number(hit.objectID),
      title: hit.title,
      url: hit.url ?? `https://news.ycombinator.com/item?id=${hit.objectID}`,
      score: hit.points ?? 0,
      by: hit.author,
      time: hit.created_at_i,
      descendants: hit.num_comments ?? 0,
      hnUrl: `https://news.ycombinator.com/item?id=${hit.objectID}`,
    }))
    .sort((a, b) => b.score - a.score);

  console.log(`  [hn] queries: ${QUERIES.length}, fetched: ${allHits.length}, errors: ${errors.length}`);

  return { stories, totalFetched: allHits.length, errors };
}
