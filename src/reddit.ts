/**
 * Reddit data fetching for AI-related subreddits.
 *
 * Strategy:
 *   - Fetch hot posts from curated AI subreddits via old.reddit.com .json API
 *   - No auth required (public JSON endpoints)
 *   - Graceful degradation on 429/403 (Reddit rate limits aggressively)
 *   - Filter by time window, sort by score
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface RedditPost {
  id: string;
  title: string;
  subreddit: string;
  author: string;
  score: number;
  numComments: number;
  url: string;
  selftext: string;
  createdUtc: number;
  permalink: string;
}

export interface RedditFetchResult {
  posts: RedditPost[];
  totalFetched: number;
  errors: string[];
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const SUBREDDITS = [
  "MachineLearning",
  "LocalLLaMA",
  "artificial",
  "ChatGPT",
  "ClaudeAI",
  "singularity",
  "SelfDrivingCars",
  "waymo",
  "TeslaAutoPilot",
];

const FETCH_TIMEOUT_MS = 10_000;
const POSTS_PER_SUB = 50;

// ---------------------------------------------------------------------------
// HTTP helper
// ---------------------------------------------------------------------------

async function redditGet<T>(url: string): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const resp = await fetch(url, {
      headers: {
        "User-Agent": "agents-radar/1.0 (AI digest bot)",
        Accept: "application/json",
      },
      signal: controller.signal,
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    return (await resp.json()) as T;
  } finally {
    clearTimeout(timer);
  }
}

// ---------------------------------------------------------------------------
// Reddit JSON types (minimal)
// ---------------------------------------------------------------------------

interface RedditListing {
  data: {
    children: Array<{
      data: {
        id: string;
        title: string;
        subreddit: string;
        author: string;
        score: number;
        num_comments: number;
        url: string;
        selftext: string;
        created_utc: number;
        permalink: string;
        stickied: boolean;
      };
    }>;
  };
}

// ---------------------------------------------------------------------------
// Fetch subreddit
// ---------------------------------------------------------------------------

async function fetchSubreddit(subreddit: string, since: Date): Promise<RedditPost[]> {
  const sinceTs = Math.floor(since.getTime() / 1000);
  const data = await redditGet<RedditListing>(
    `https://old.reddit.com/r/${subreddit}/hot.json?limit=${POSTS_PER_SUB}&raw_json=1`,
  );

  return data.data.children
    .filter((c) => !c.data.stickied && c.data.created_utc >= sinceTs)
    .map((c) => ({
      id: c.data.id,
      title: c.data.title,
      subreddit: c.data.subreddit,
      author: c.data.author,
      score: c.data.score,
      numComments: c.data.num_comments,
      url: c.data.url,
      selftext: c.data.selftext.slice(0, 500),
      createdUtc: c.data.created_utc,
      permalink: `https://reddit.com${c.data.permalink}`,
    }));
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export async function fetchRedditData(since: Date): Promise<RedditFetchResult> {
  const errors: string[] = [];

  // Sequential to avoid Reddit rate limiting (they block parallel requests aggressively)
  const allPosts: RedditPost[] = [];
  for (const sub of SUBREDDITS) {
    try {
      const posts = await fetchSubreddit(sub, since);
      allPosts.push(...posts);
    } catch (err) {
      errors.push(`[reddit/r/${sub}] ${err}`);
    }
  }

  // Deduplicate by id (cross-posts)
  const seen = new Set<string>();
  const deduped = allPosts.filter((p) => {
    if (seen.has(p.id)) return false;
    seen.add(p.id);
    return true;
  });

  // Sort by score descending
  deduped.sort((a, b) => b.score - a.score);

  console.log(`  [reddit] fetched: ${allPosts.length}, deduped: ${deduped.length}, errors: ${errors.length}`);

  return { posts: deduped, totalFetched: allPosts.length, errors };
}
