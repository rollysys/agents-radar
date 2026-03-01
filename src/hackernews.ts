/**
 * Hacker News data fetching for AI-related stories.
 *
 * Strategy:
 *   - Fetch top + best story IDs
 *   - Batch-fetch story details (parallel, capped)
 *   - Filter by AI-related keywords in title
 *   - Sort by score descending
 *   - Public Firebase API, zero auth required
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

const HN_API = "https://hacker-news.firebaseio.com/v0";
const FETCH_TIMEOUT_MS = 10_000;

/** Max stories to fetch details for (top + best combined, deduped). */
const MAX_STORY_IDS = 200;

/** Concurrency for fetching individual story details. */
const BATCH_SIZE = 30;

const AI_KEYWORDS = [
  /\bai\b/i, /\bllm\b/i, /\bgpt\b/i, /\bclaude\b/i, /\bgemini\b/i,
  /\bopenai\b/i, /\banthropic\b/i, /\bmachine.?learn/i, /\bdeep.?learn/i,
  /\bneural.?net/i, /\btransformer/i, /\bdiffusion\b/i, /\bfine.?tun/i,
  /\brag\b/i, /\bagent/i, /\bchatbot/i, /\bcopilot/i, /\bautonomous/i,
  /\breinforcement.?learn/i, /\bembedding/i, /\bvector.?db/i,
  /\blanguage.?model/i, /\bprompt/i, /\bmistral/i, /\bllama\b/i,
  /\bstable.?diffusion/i, /\bmultimodal/i, /\bvision.?model/i,
];

function isAIRelated(title: string): boolean {
  return AI_KEYWORDS.some((re) => re.test(title));
}

// ---------------------------------------------------------------------------
// HTTP helper
// ---------------------------------------------------------------------------

async function hnGet<T>(path: string): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const resp = await fetch(`${HN_API}/${path}`, {
      signal: controller.signal,
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    return (await resp.json()) as T;
  } finally {
    clearTimeout(timer);
  }
}

// ---------------------------------------------------------------------------
// Fetch story details in batches
// ---------------------------------------------------------------------------

interface HNItem {
  id: number;
  type?: string;
  title?: string;
  url?: string;
  score?: number;
  by?: string;
  time?: number;
  descendants?: number;
}

async function fetchStoryBatch(ids: number[]): Promise<HNItem[]> {
  const results = await Promise.all(
    ids.map(async (id) => {
      try {
        return await hnGet<HNItem>(`item/${id}.json`);
      } catch {
        return null;
      }
    }),
  );
  return results.filter((r): r is HNItem => r !== null && r.type === "story");
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export async function fetchHackerNewsData(since: Date): Promise<HNFetchResult> {
  const errors: string[] = [];
  const sinceTs = Math.floor(since.getTime() / 1000);

  let topIds: number[] = [];
  let bestIds: number[] = [];

  try {
    [topIds, bestIds] = await Promise.all([
      hnGet<number[]>("topstories.json"),
      hnGet<number[]>("beststories.json"),
    ]);
  } catch (err) {
    errors.push(`[hn/ids] ${err}`);
    return { stories: [], totalFetched: 0, errors };
  }

  // Merge & deduplicate, cap total
  const seenIds = new Set<number>();
  const allIds: number[] = [];
  for (const id of [...topIds, ...bestIds]) {
    if (!seenIds.has(id) && allIds.length < MAX_STORY_IDS) {
      seenIds.add(id);
      allIds.push(id);
    }
  }

  // Fetch in batches
  const allStories: HNItem[] = [];
  for (let i = 0; i < allIds.length; i += BATCH_SIZE) {
    const batch = allIds.slice(i, i + BATCH_SIZE);
    const items = await fetchStoryBatch(batch);
    allStories.push(...items);
  }

  // Filter: AI-related + within time window
  const filtered: HNStory[] = allStories
    .filter((s) => s.time! >= sinceTs && s.title && isAIRelated(s.title))
    .map((s) => ({
      id: s.id,
      title: s.title!,
      url: s.url ?? `https://news.ycombinator.com/item?id=${s.id}`,
      score: s.score ?? 0,
      by: s.by ?? "unknown",
      time: s.time!,
      descendants: s.descendants ?? 0,
      hnUrl: `https://news.ycombinator.com/item?id=${s.id}`,
    }))
    .sort((a, b) => b.score - a.score);

  console.log(
    `  [hn] fetched: ${allStories.length}, ai-related: ${filtered.length}, errors: ${errors.length}`,
  );

  return { stories: filtered, totalFetched: allStories.length, errors };
}
