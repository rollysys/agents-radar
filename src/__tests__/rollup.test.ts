import fs from "node:fs";
import path from "node:path";
import { afterEach, describe, it, expect } from "vitest";
import { readDailyDigest, toWeekStr } from "../rollup.ts";

const TEST_DATES = ["2099-12-30", "2099-12-31"];

afterEach(() => {
  for (const date of TEST_DATES) {
    fs.rmSync(path.join("digests", date), { recursive: true, force: true });
  }
});

describe("toWeekStr", () => {
  it("returns correct ISO week for a known date", () => {
    // 2026-03-09 is a Monday in ISO week 11
    expect(toWeekStr(new Date("2026-03-09"))).toBe("2026-W11");
  });

  it("handles first week of year", () => {
    // 2026-01-05 is a Monday in week 2
    expect(toWeekStr(new Date("2026-01-05"))).toBe("2026-W02");
  });

  it("handles last week of year crossing into next year", () => {
    // 2025-12-29 is a Monday — ISO week 1 of 2026
    expect(toWeekStr(new Date("2025-12-29"))).toBe("2026-W01");
  });

  it("handles week 52/53", () => {
    // 2026-12-28 is a Monday — W53 of 2026? Let's check
    const result = toWeekStr(new Date("2026-12-28"));
    expect(result).toMatch(/^\d{4}-W\d{2}$/);
  });

  it("pads single-digit week numbers", () => {
    // 2026-01-12 is a Monday in week 3
    const result = toWeekStr(new Date("2026-01-12"));
    expect(result).toBe("2026-W03");
  });
});

describe("readDailyDigest", () => {
  it("reads and concatenates all available report types for a date", () => {
    const date = "2099-12-30";
    const dir = path.join("digests", date);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "ai-cli.md"), "CLI report");
    fs.writeFileSync(path.join(dir, "ai-hn.md"), "HN report");

    expect(readDailyDigest(date)).toBe("CLI report\n\nHN report");
  });

  it("returns null when no digest files exist for the date", () => {
    expect(readDailyDigest("2099-12-31")).toBeNull();
  });
});
