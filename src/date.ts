/**
 * Date and timing utilities used across the pipeline.
 */

const CST_OFFSET_MS = 8 * 60 * 60 * 1000;

/** Convert a Date to a CST (UTC+8) date string like "2026-03-11". */
export function toCstDateStr(date: Date): string {
  return new Date(date.getTime() + CST_OFFSET_MS).toISOString().slice(0, 10);
}

/** Format a Date as a compact UTC string like "2026-03-11 00:00". */
export function toUtcStr(date: Date): string {
  return date.toISOString().slice(0, 16).replace("T", " ");
}

/** Promise-based delay. */
export function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}
