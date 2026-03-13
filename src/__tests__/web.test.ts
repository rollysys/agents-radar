import { describe, it, expect } from "vitest";
import {
  parseSitemapUrls,
  isSitemapIndex,
  extractTitle,
  extractText,
  urlCategory,
  titleFromUrl,
  emptyState,
} from "../web.ts";

// ---------------------------------------------------------------------------
// parseSitemapUrls
// ---------------------------------------------------------------------------

describe("parseSitemapUrls", () => {
  it("parses urls with loc and lastmod", () => {
    const xml = `
      <urlset>
        <url>
          <loc>https://example.com/page1</loc>
          <lastmod>2026-03-09</lastmod>
        </url>
        <url>
          <loc>https://example.com/page2</loc>
          <lastmod>2026-03-08</lastmod>
        </url>
      </urlset>`;
    const result = parseSitemapUrls(xml);
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({ loc: "https://example.com/page1", lastmod: "2026-03-09" });
    expect(result[1]).toEqual({ loc: "https://example.com/page2", lastmod: "2026-03-08" });
  });

  it("handles urls without lastmod", () => {
    const xml = `<urlset><url><loc>https://example.com/page</loc></url></urlset>`;
    const result = parseSitemapUrls(xml);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({ loc: "https://example.com/page", lastmod: undefined });
  });

  it("returns empty array for empty XML", () => {
    expect(parseSitemapUrls("")).toEqual([]);
    expect(parseSitemapUrls("<urlset></urlset>")).toEqual([]);
  });

  it("handles whitespace in loc/lastmod", () => {
    const xml = `<urlset><url><loc>  https://example.com/page  </loc><lastmod>  2026-03-09  </lastmod></url></urlset>`;
    const result = parseSitemapUrls(xml);
    expect(result[0]!.loc).toBe("https://example.com/page");
    expect(result[0]!.lastmod).toBe("2026-03-09");
  });
});

// ---------------------------------------------------------------------------
// isSitemapIndex
// ---------------------------------------------------------------------------

describe("isSitemapIndex", () => {
  it("detects sitemapindex tag", () => {
    expect(isSitemapIndex('<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')).toBe(true);
    expect(isSitemapIndex("<sitemapindex>")).toBe(true);
  });

  it("returns false for regular sitemap", () => {
    expect(isSitemapIndex('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// extractTitle
// ---------------------------------------------------------------------------

describe("extractTitle", () => {
  it("extracts og:title (property first)", () => {
    const html = `<meta property="og:title" content="My Title">`;
    expect(extractTitle(html)).toBe("My Title");
  });

  it("extracts og:title (content first)", () => {
    const html = `<meta content="My Title" property="og:title">`;
    expect(extractTitle(html)).toBe("My Title");
  });

  it("falls back to <title> tag", () => {
    const html = `<html><head><title>Page Title</title></head></html>`;
    expect(extractTitle(html)).toBe("Page Title");
  });

  it("prefers og:title over <title>", () => {
    const html = `<meta property="og:title" content="OG Title"><title>Fallback Title</title>`;
    expect(extractTitle(html)).toBe("OG Title");
  });

  it("returns empty string when no title found", () => {
    expect(extractTitle("<html><body></body></html>")).toBe("");
  });

  it("trims whitespace", () => {
    const html = `<title>  Spaced Title  </title>`;
    expect(extractTitle(html)).toBe("Spaced Title");
  });
});

// ---------------------------------------------------------------------------
// extractText
// ---------------------------------------------------------------------------

describe("extractText", () => {
  it("extracts text from <main> content", () => {
    const html = `<html><nav>Nav</nav><main><p>Main content</p></main><footer>Foot</footer></html>`;
    expect(extractText(html)).toBe("Main content");
  });

  it("falls back to <article> if no <main>", () => {
    const html = `<html><article><p>Article content</p></article></html>`;
    expect(extractText(html)).toBe("Article content");
  });

  it("strips script and style tags", () => {
    const html = `<main><script>alert('x')</script><style>.a{}</style><p>Clean</p></main>`;
    expect(extractText(html)).toBe("Clean");
  });

  it("decodes HTML entities", () => {
    const html = `<main>&amp; &lt; &gt; &quot; &#39; &nbsp;</main>`;
    const result = extractText(html);
    expect(result).toContain("&");
    expect(result).toContain("<");
    expect(result).toContain(">");
    expect(result).toContain('"');
    expect(result).toContain("'");
  });

  it("collapses whitespace", () => {
    const html = `<main><p>  Multiple   spaces   and\n\nnewlines  </p></main>`;
    expect(extractText(html)).toBe("Multiple spaces and newlines");
  });

  it("truncates to MAX_CONTENT_LENGTH (1500 chars)", () => {
    const html = `<main>${"A".repeat(2000)}</main>`;
    expect(extractText(html)).toHaveLength(1500);
  });
});

// ---------------------------------------------------------------------------
// urlCategory
// ---------------------------------------------------------------------------

describe("urlCategory", () => {
  it("returns first path segment", () => {
    expect(urlCategory("https://anthropic.com/news/some-article")).toBe("news");
    expect(urlCategory("https://openai.com/research/gpt-5")).toBe("research");
  });

  it("returns 'article' for root URLs", () => {
    expect(urlCategory("https://example.com/")).toBe("article");
    expect(urlCategory("https://example.com")).toBe("article");
  });

  it("returns 'article' for invalid URLs", () => {
    expect(urlCategory("not a url")).toBe("article");
  });
});

// ---------------------------------------------------------------------------
// titleFromUrl
// ---------------------------------------------------------------------------

describe("titleFromUrl", () => {
  it("converts slug to title case", () => {
    expect(titleFromUrl("https://example.com/blog/my-great-article")).toBe("My Great Article");
  });

  it("handles single-segment paths", () => {
    expect(titleFromUrl("https://example.com/about")).toBe("About");
  });

  it("returns URL for invalid input", () => {
    expect(titleFromUrl("not-a-url")).toBe("not-a-url");
  });
});

// ---------------------------------------------------------------------------
// emptyState
// ---------------------------------------------------------------------------

describe("emptyState", () => {
  it("returns valid empty state structure", () => {
    const state = emptyState();
    expect(state).toEqual({
      anthropic: { lastChecked: "", seenUrls: {} },
      openai: { lastChecked: "", seenUrls: {} },
    });
  });

  it("returns a new object each time", () => {
    const a = emptyState();
    const b = emptyState();
    expect(a).not.toBe(b);
    a.anthropic.lastChecked = "modified";
    expect(b.anthropic.lastChecked).toBe("");
  });
});
