import { describe, it, expect } from "vitest";
import {
  MSG,
  CLI_REPORT,
  OPENCLAW_REPORT,
  WEB_REPORT,
  TRENDING_REPORT,
  HN_REPORT,
  WEEKLY_REPORT,
  MONTHLY_REPORT,
  ISSUE_LABELS,
  CLI_ISSUE_TITLE,
  OPENCLAW_ISSUE_TITLE,
  FOOTER,
  NOTIFY_LABELS,
} from "../i18n.ts";

// ---------------------------------------------------------------------------
// Static bilingual strings
// ---------------------------------------------------------------------------

describe("bilingual string maps", () => {
  const maps = [
    { name: "MSG.noActivity", obj: MSG.noActivity },
    { name: "MSG.summaryFailed", obj: MSG.summaryFailed },
    { name: "MSG.skillsFailed", obj: MSG.skillsFailed },
    { name: "MSG.trendingNoData", obj: MSG.trendingNoData },
    { name: "MSG.trendingFailed", obj: MSG.trendingFailed },
    { name: "CLI_REPORT.title", obj: CLI_REPORT.title },
    { name: "CLI_REPORT.skillsHeading", obj: CLI_REPORT.skillsHeading },
    { name: "CLI_REPORT.comparison", obj: CLI_REPORT.comparison },
    { name: "CLI_REPORT.detail", obj: CLI_REPORT.detail },
    { name: "OPENCLAW_REPORT.title", obj: OPENCLAW_REPORT.title },
    { name: "OPENCLAW_REPORT.deepDive", obj: OPENCLAW_REPORT.deepDive },
    { name: "WEB_REPORT.title", obj: WEB_REPORT.title },
    { name: "WEB_REPORT.firstCrawl", obj: WEB_REPORT.firstCrawl },
    { name: "TRENDING_REPORT.title", obj: TRENDING_REPORT.title },
    { name: "HN_REPORT.title", obj: HN_REPORT.title },
    { name: "WEEKLY_REPORT.title", obj: WEEKLY_REPORT.title },
    { name: "MONTHLY_REPORT.title", obj: MONTHLY_REPORT.title },
    { name: "FOOTER.autoGen", obj: FOOTER.autoGen },
  ];

  for (const { name, obj } of maps) {
    it(`${name} has both zh and en`, () => {
      expect(obj).toHaveProperty("zh");
      expect(obj).toHaveProperty("en");
      expect(obj.zh).toBeTruthy();
      expect(obj.en).toBeTruthy();
      expect(obj.zh).not.toBe(obj.en);
    });
  }
});

// ---------------------------------------------------------------------------
// Dynamic title functions
// ---------------------------------------------------------------------------

describe("issue title functions", () => {
  it("CLI_ISSUE_TITLE produces zh and en titles", () => {
    expect(CLI_ISSUE_TITLE("2026-03-12", "zh")).toContain("AI CLI");
    expect(CLI_ISSUE_TITLE("2026-03-12", "zh")).toContain("2026-03-12");
    expect(CLI_ISSUE_TITLE("2026-03-12", "en")).toContain("AI CLI Tools Digest");
  });

  it("OPENCLAW_ISSUE_TITLE produces zh and en titles", () => {
    expect(OPENCLAW_ISSUE_TITLE("2026-03-12", "zh")).toContain("OpenClaw");
    expect(OPENCLAW_ISSUE_TITLE("2026-03-12", "en")).toContain("OpenClaw Ecosystem Digest");
  });

  it("WEB_REPORT.issueTitle includes first crawl flag", () => {
    expect(WEB_REPORT.issueTitle("2026-03-12", true, "zh")).toContain("首次全量");
    expect(WEB_REPORT.issueTitle("2026-03-12", false, "zh")).not.toContain("首次全量");
    expect(WEB_REPORT.issueTitle("2026-03-12", true, "en")).toContain("First Crawl");
  });

  it("TRENDING_REPORT.issueTitle produces zh and en", () => {
    expect(TRENDING_REPORT.issueTitle("2026-03-12", "zh")).toContain("开源趋势");
    expect(TRENDING_REPORT.issueTitle("2026-03-12", "en")).toContain("Open Source Trends");
  });

  it("HN_REPORT.issueTitle produces zh and en", () => {
    expect(HN_REPORT.issueTitle("2026-03-12", "zh")).toContain("Hacker News");
    expect(HN_REPORT.issueTitle("2026-03-12", "en")).toContain("Hacker News");
  });

  it("WEEKLY_REPORT.issueTitle includes week string", () => {
    expect(WEEKLY_REPORT.issueTitle("2026-W11")).toContain("2026-W11");
  });

  it("MONTHLY_REPORT.issueTitle includes month string", () => {
    expect(MONTHLY_REPORT.issueTitle("2026-02")).toContain("2026-02");
  });
});

// ---------------------------------------------------------------------------
// Dynamic content functions
// ---------------------------------------------------------------------------

describe("dynamic content helpers", () => {
  it("CLI_REPORT.meta produces zh and en metadata", () => {
    const zh = CLI_REPORT.meta("12:00", 5, "zh");
    expect(zh).toContain("12:00");
    expect(zh).toContain("5 个");

    const en = CLI_REPORT.meta("12:00", 5, "en");
    expect(en).toContain("12:00");
    expect(en).toContain("Tools covered: 5");
  });

  it("WEB_REPORT.newContent formats count", () => {
    expect(WEB_REPORT.newContent(10, "zh")).toContain("10 篇");
    expect(WEB_REPORT.newContent(10, "en")).toContain("10 articles");
  });

  it("WEB_REPORT.generated formats timestamp", () => {
    expect(WEB_REPORT.generated("12:00", "zh")).toContain("12:00 UTC");
    expect(WEB_REPORT.generated("12:00", "en")).toContain("12:00 UTC");
  });
});

// ---------------------------------------------------------------------------
// ISSUE_LABELS
// ---------------------------------------------------------------------------

describe("ISSUE_LABELS", () => {
  it("maps report types to label names", () => {
    expect(ISSUE_LABELS.cli.zh).toBe("digest");
    expect(ISSUE_LABELS.cli.en).toBe("digest-en");
    expect(ISSUE_LABELS.openclaw.zh).toBe("openclaw");
    expect(ISSUE_LABELS.trending.en).toBe("trending-en");
    expect(ISSUE_LABELS.hn.en).toBe("hn-en");
  });
});

// ---------------------------------------------------------------------------
// NOTIFY_LABELS
// ---------------------------------------------------------------------------

describe("NOTIFY_LABELS", () => {
  it("covers all report types", () => {
    const expected = ["ai-cli", "ai-agents", "ai-web", "ai-trending", "ai-hn", "ai-weekly", "ai-monthly"];
    for (const key of expected) {
      expect(NOTIFY_LABELS[key]).toBeDefined();
      expect(NOTIFY_LABELS[key]!.zh).toBeTruthy();
      expect(NOTIFY_LABELS[key]!.en).toBeTruthy();
    }
  });
});
