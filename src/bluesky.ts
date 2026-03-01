/**
 * Bluesky social media data fetching for AI thought leaders and trending topics.
 *
 * Strategy:
 *   - Track a curated list of AI thought leaders via getAuthorFeed
 *   - Search trending AI keywords via searchPosts
 *   - Deduplicate by AT URI (author posts take priority)
 *   - Sort by engagement (likes + reposts) descending
 *   - All requests fired in parallel (17 total, well within 3000/5min limit)
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface BlueskyPost {
  /** AT URI — unique identifier for dedup */
  uri: string;
  authorHandle: string;
  authorDisplayName: string;
  text: string;
  createdAt: string;
  likes: number;
  reposts: number;
  replies: number;
  /** Engagement score = likes + reposts */
  engagement: number;
  url: string;
  /** "author" if from tracked author, or the search keyword */
  source: string;
}

export interface BlueskyFetchResult {
  posts: BlueskyPost[];
  authorPostCount: number;
  searchPostCount: number;
  errors: string[];
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

interface TrackedAuthor {
  handle: string;
  /** Category for context */
  category: string;
}

const TRACKED_AUTHORS: TrackedAuthor[] = [
  // AI Research
  { handle: "karpathy.bsky.social",          category: "AI Research" },
  { handle: "yann-lecun.bsky.social",         category: "AI Research" },
  { handle: "drfeifei.bsky.social",           category: "AI Research" },
  { handle: "melaniemitchell.bsky.social",    category: "AI Research" },
  // AI Engineering
  { handle: "simonwillison.net",              category: "AI Engineering" },
  { handle: "thomwolf.bsky.social",           category: "AI Engineering" },
  { handle: "swyx.io",                        category: "AI Engineering" },
  // AI Education
  { handle: "howard.fm",                      category: "AI Education" },
  { handle: "sebastianraschka.com",           category: "AI Education" },
  // AI Ethics
  { handle: "timnitgebru.bsky.social",        category: "AI Ethics" },
];

const SEARCH_KEYWORDS = [
  "LLM",
  "GPT",
  "Claude",
  "AI agent",
  "open source AI",
  "RAG",
  "fine-tuning",
];

const BLUESKY_API = "https://public.api.bsky.app";
const FETCH_TIMEOUT_MS = 10_000;

// ---------------------------------------------------------------------------
// HTTP helpers
// ---------------------------------------------------------------------------

async function bskyGet<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
  const url = new URL(`${BLUESKY_API}/xrpc/${endpoint}`);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const resp = await fetch(url.toString(), {
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}: ${await resp.text()}`);
    return (await resp.json()) as T;
  } finally {
    clearTimeout(timer);
  }
}

// ---------------------------------------------------------------------------
// AT URI → web URL
// ---------------------------------------------------------------------------

function atUriToUrl(uri: string, handle: string): string {
  // at://did:plc:xxx/app.bsky.feed.post/rkey → https://bsky.app/profile/handle/post/rkey
  const match = uri.match(/\/app\.bsky\.feed\.post\/(.+)$/);
  const rkey = match?.[1] ?? "";
  return `https://bsky.app/profile/${handle}/post/${rkey}`;
}

// ---------------------------------------------------------------------------
// Feed item → BlueskyPost
// ---------------------------------------------------------------------------

interface BskyFeedPost {
  post: {
    uri: string;
    author: { handle: string; displayName?: string };
    record: { text?: string; createdAt?: string };
    likeCount?: number;
    repostCount?: number;
    replyCount?: number;
  };
  reason?: { $type: string };
}

function feedItemToPost(item: BskyFeedPost, source: string): BlueskyPost | null {
  const p = item.post;
  const text = p.record?.text ?? "";
  const likes = p.likeCount ?? 0;
  const reposts = p.repostCount ?? 0;
  return {
    uri: p.uri,
    authorHandle: p.author.handle,
    authorDisplayName: p.author.displayName ?? p.author.handle,
    text,
    createdAt: p.record?.createdAt ?? "",
    likes,
    reposts,
    replies: p.replyCount ?? 0,
    engagement: likes + reposts,
    url: atUriToUrl(p.uri, p.author.handle),
    source,
  };
}

// ---------------------------------------------------------------------------
// Fetch author feed (filter reposts, only posts since cutoff)
// ---------------------------------------------------------------------------

async function fetchAuthorPosts(
  handle: string,
  since: Date,
): Promise<BlueskyPost[]> {
  const data = await bskyGet<{ feed: BskyFeedPost[] }>(
    "app.bsky.feed.getAuthorFeed",
    { actor: handle, limit: "30", filter: "posts_no_replies" },
  );

  const posts: BlueskyPost[] = [];
  for (const item of data.feed ?? []) {
    // Skip reposts (reason.$type === "app.bsky.feed.defs#reasonRepost")
    if (item.reason) continue;
    const createdAt = item.post.record?.createdAt;
    if (createdAt && new Date(createdAt) < since) continue;
    const post = feedItemToPost(item, "author");
    if (post) posts.push(post);
  }
  return posts;
}

// ---------------------------------------------------------------------------
// Search posts by keyword
// ---------------------------------------------------------------------------

interface BskySearchResult {
  posts: Array<{
    uri: string;
    author: { handle: string; displayName?: string };
    record: { text?: string; createdAt?: string };
    likeCount?: number;
    repostCount?: number;
    replyCount?: number;
  }>;
}

async function searchPosts(
  keyword: string,
  since: Date,
): Promise<BlueskyPost[]> {
  const sinceStr = since.toISOString().replace(/\.\d{3}Z$/, "Z");
  const data = await bskyGet<BskySearchResult>(
    "app.bsky.feed.searchPosts",
    { q: keyword, sort: "top", since: sinceStr, limit: "25" },
  );

  const posts: BlueskyPost[] = [];
  for (const p of data.posts ?? []) {
    const likes = p.likeCount ?? 0;
    const reposts = p.repostCount ?? 0;
    posts.push({
      uri: p.uri,
      authorHandle: p.author.handle,
      authorDisplayName: p.author.displayName ?? p.author.handle,
      text: p.record?.text ?? "",
      createdAt: p.record?.createdAt ?? "",
      likes,
      reposts,
      replies: p.replyCount ?? 0,
      engagement: likes + reposts,
      url: atUriToUrl(p.uri, p.author.handle),
      source: keyword,
    });
  }
  return posts;
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export async function fetchBlueskyData(since: Date): Promise<BlueskyFetchResult> {
  const errors: string[] = [];

  // Fire all requests in parallel
  const authorResults = await Promise.all(
    TRACKED_AUTHORS.map(async ({ handle }) => {
      try {
        return await fetchAuthorPosts(handle, since);
      } catch (err) {
        errors.push(`[bluesky/author/${handle}] ${err}`);
        return [];
      }
    }),
  );

  const searchResults = await Promise.all(
    SEARCH_KEYWORDS.map(async (keyword) => {
      try {
        return await searchPosts(keyword, since);
      } catch (err) {
        errors.push(`[bluesky/search/${keyword}] ${err}`);
        return [];
      }
    }),
  );

  // Flatten
  const authorPosts = authorResults.flat();
  const searchPostsFlat = searchResults.flat();

  // Deduplicate by AT URI — author posts take priority
  const seen = new Set<string>();
  const deduped: BlueskyPost[] = [];

  for (const post of authorPosts) {
    if (!seen.has(post.uri)) {
      seen.add(post.uri);
      deduped.push(post);
    }
  }
  for (const post of searchPostsFlat) {
    if (!seen.has(post.uri)) {
      seen.add(post.uri);
      deduped.push(post);
    }
  }

  // Sort by engagement descending
  deduped.sort((a, b) => b.engagement - a.engagement);

  for (const err of errors) console.error(`  ${err}`);
  console.log(
    `  [bluesky] authors: ${authorPosts.length}, search: ${searchPostsFlat.length}, ` +
    `deduped: ${deduped.length}, errors: ${errors.length}`,
  );

  return {
    posts: deduped,
    authorPostCount: authorPosts.length,
    searchPostCount: searchPostsFlat.length,
    errors,
  };
}
