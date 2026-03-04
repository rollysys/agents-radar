/**
 * RSS Feed fetching for autonomous driving news sources.
 *
 * Strategy:
 *   - Fetch RSS XML from curated autonomous driving feeds
 *   - Lightweight regex parsing (no XML library dependency)
 *   - Filter by pubDate within 24h window
 *   - Deduplicate by URL
 *   - AbortController timeout protection
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface RSSArticle {
  title: string;
  url: string;
  source: string;
  pubDate: string;
  description: string;
}

export interface RSSFetchResult {
  articles: RSSArticle[];
  totalFetched: number;
  errors: string[];
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

interface RSSFeed {
  url: string;
  source: string;
}

const FEEDS: RSSFeed[] = [
  { url: "https://electrek.co/guides/autonomous-driving/feed/", source: "Electrek" },
  { url: "https://www.teslarati.com/tag/full-self-driving/feed/", source: "Teslarati" },
  { url: "https://techcrunch.com/tag/autonomous-vehicles/feed/", source: "TechCrunch" },
];

const FETCH_TIMEOUT_MS = 15_000;

// ---------------------------------------------------------------------------
// XML parsing helpers (regex-based, no library)
// ---------------------------------------------------------------------------

function extractItems(xml: string): string[] {
  const items: string[] = [];
  const re = /<item[\s>]([\s\S]*?)<\/item>/gi;
  let match;
  while ((match = re.exec(xml)) !== null) {
    items.push(match[1]!);
  }
  return items;
}

function extractTag(xml: string, tag: string): string {
  // Handle both <tag>value</tag> and <tag><![CDATA[value]]></tag>
  const re = new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/${tag}>`, "i");
  const match = xml.match(re);
  return match ? match[1]!.trim() : "";
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/<[^>]+>/g, ""); // strip any remaining HTML tags
}

// ---------------------------------------------------------------------------
// Fetch single feed
// ---------------------------------------------------------------------------

async function fetchFeed(feed: RSSFeed, since: Date): Promise<RSSArticle[]> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const resp = await fetch(feed.url, {
      headers: {
        "User-Agent": "agents-radar/1.0 (AI digest bot)",
        Accept: "application/rss+xml, application/xml, text/xml",
      },
      signal: controller.signal,
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const xml = await resp.text();

    const items = extractItems(xml);
    const articles: RSSArticle[] = [];

    for (const item of items) {
      const title = decodeHtmlEntities(extractTag(item, "title"));
      const link = extractTag(item, "link");
      const pubDateStr = extractTag(item, "pubDate");
      const description = decodeHtmlEntities(extractTag(item, "description")).slice(0, 500);

      if (!title || !link) continue;

      // Filter by date
      if (pubDateStr) {
        const pubDate = new Date(pubDateStr);
        if (!isNaN(pubDate.getTime()) && pubDate < since) continue;
      }

      articles.push({
        title,
        url: link,
        source: feed.source,
        pubDate: pubDateStr,
        description,
      });
    }

    return articles;
  } finally {
    clearTimeout(timer);
  }
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export async function fetchRSSData(since: Date): Promise<RSSFetchResult> {
  const errors: string[] = [];

  const results = await Promise.all(
    FEEDS.map(async (feed) => {
      try {
        return await fetchFeed(feed, since);
      } catch (err) {
        errors.push(`[rss/${feed.source}] ${err}`);
        return [];
      }
    }),
  );

  const allArticles = results.flat();

  // Deduplicate by URL
  const seen = new Set<string>();
  const deduped = allArticles.filter((a) => {
    if (seen.has(a.url)) return false;
    seen.add(a.url);
    return true;
  });

  // Sort by pubDate descending
  deduped.sort((a, b) => {
    const ta = new Date(a.pubDate).getTime() || 0;
    const tb = new Date(b.pubDate).getTime() || 0;
    return tb - ta;
  });

  console.log(
    `  [rss] feeds: ${FEEDS.length}, fetched: ${allArticles.length}, deduped: ${deduped.length}, errors: ${errors.length}`,
  );

  return { articles: deduped, totalFetched: allArticles.length, errors };
}
