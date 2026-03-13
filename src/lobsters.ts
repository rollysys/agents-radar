/**
 * Lobste.rs data fetching for AI/ML-related stories.
 *
 * Strategy:
 *   - Fetch /hottest.json (public, no auth)
 *   - Filter by AI-related tags and title keywords
 *   - Sort by score descending
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface LobstersStory {
  shortId: string;
  title: string;
  url: string;
  score: number;
  commentCount: number;
  submitter: string;
  tags: string[];
  createdAt: string;
  commentsUrl: string;
  description: string;
}

export interface LobstersFetchResult {
  stories: LobstersStory[];
  totalFetched: number;
  errors: string[];
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const LOBSTERS_API = "https://lobste.rs";
const FETCH_TIMEOUT_MS = 10_000;

const AI_TAGS = new Set(["ai", "ml", "machinelearning", "compsci", "science"]);

const AI_TITLE_KEYWORDS = [
  /\bai\b/i,
  /\bllm\b/i,
  /\bgpt\b/i,
  /\bclaude\b/i,
  /\bopenai\b/i,
  /\banthropic\b/i,
  /\bmachine.?learn/i,
  /\bdeep.?learn/i,
  /\bneural/i,
  /\btransformer/i,
  /\bagent/i,
  /\blanguage.?model/i,
  /\bdiffusion/i,
  /\bembedding/i,
  /\bmultimodal/i,
  /\bllama\b/i,
  /\bmistral/i,
];

function isAIRelated(tags: string[], title: string): boolean {
  if (tags.some((t) => AI_TAGS.has(t.toLowerCase()))) return true;
  return AI_TITLE_KEYWORDS.some((re) => re.test(title));
}

// ---------------------------------------------------------------------------
// Lobsters JSON types
// ---------------------------------------------------------------------------

interface LobstersItem {
  short_id: string;
  title: string;
  url: string;
  score: number;
  comment_count: number;
  submitter_user: { username: string };
  tags: string[];
  created_at: string;
  comments_url: string;
  description: string;
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export async function fetchLobstersData(since: Date): Promise<LobstersFetchResult> {
  const errors: string[] = [];

  let items: LobstersItem[] = [];
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    try {
      // Fetch multiple pages for better coverage
      const [page1, page2] = await Promise.all([
        fetch(`${LOBSTERS_API}/hottest.json`, {
          headers: { "User-Agent": "agents-radar/1.0" },
          signal: controller.signal,
        }).then(async (r) => {
          if (!r.ok) throw new Error(`HTTP ${r.status}`);
          return (await r.json()) as LobstersItem[];
        }),
        fetch(`${LOBSTERS_API}/hottest.json?page=2`, {
          headers: { "User-Agent": "agents-radar/1.0" },
          signal: controller.signal,
        }).then(async (r) => {
          if (!r.ok) throw new Error(`HTTP ${r.status}`);
          return (await r.json()) as LobstersItem[];
        }),
      ]);
      items = [...page1, ...page2];
    } finally {
      clearTimeout(timer);
    }
  } catch (err) {
    errors.push(`[lobsters] ${err}`);
    return { stories: [], totalFetched: 0, errors };
  }

  const sinceTs = since.getTime();

  const filtered: LobstersStory[] = items
    .filter((s) => new Date(s.created_at).getTime() >= sinceTs && isAIRelated(s.tags, s.title))
    .map((s) => ({
      shortId: s.short_id,
      title: s.title,
      url: s.url || s.comments_url,
      score: s.score,
      commentCount: s.comment_count,
      submitter: s.submitter_user.username,
      tags: s.tags,
      createdAt: s.created_at,
      commentsUrl: s.comments_url,
      description: (s.description ?? "").slice(0, 300),
    }))
    .sort((a, b) => b.score - a.score);

  console.log(
    `  [lobsters] fetched: ${items.length}, ai-related: ${filtered.length}, errors: ${errors.length}`,
  );

  return { stories: filtered, totalFetched: items.length, errors };
}
