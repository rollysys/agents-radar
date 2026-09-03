/**
 * LLM invocation, file I/O, and GitHub issue creation helpers.
 */

import fs from "node:fs";
import path from "node:path";
import { type Lang, FOOTER } from "./i18n.ts";
import { sleep } from "./date.ts";

// ---------------------------------------------------------------------------
// LLM token budget constants
// ---------------------------------------------------------------------------

export const LLM_TOKENS_DEFAULT = 4096;
export const LLM_TOKENS_TRENDING = 6144;
export const LLM_TOKENS_WEB = 8192;
export const LLM_TOKENS_ROLLUP = 8192;
import { type LlmProvider, createProvider } from "./providers/index.ts";
import { DeepSeekProvider } from "./providers/deepseek.ts";

const provider: LlmProvider = createProvider();

const fallbackProvider: LlmProvider | null = (() => {
  const key = process.env["DEEPSEEK_API_KEY"];
  if (!key) return null;
  console.log("[providers] Fallback provider configured: deepseek");
  return new DeepSeekProvider(key);
})();

// ---------------------------------------------------------------------------
// Concurrency limiter — prevents rate-limit (429) errors when many LLM calls
// are fired in parallel. At most LLM_CONCURRENCY requests are in-flight at
// any given time; the rest queue and run as slots free up.
// ---------------------------------------------------------------------------

const LLM_CONCURRENCY = 5;
let llmSlots = LLM_CONCURRENCY;
const llmQueue: Array<() => void> = [];

function acquireSlot(): Promise<void> {
  if (llmSlots > 0) {
    llmSlots--;
    return Promise.resolve();
  }
  return new Promise((resolve) => llmQueue.push(resolve));
}

function releaseSlot(): void {
  const next = llmQueue.shift();
  if (next) {
    next();
  } else {
    llmSlots++;
  }
}

// ---------------------------------------------------------------------------
// LLM
// ---------------------------------------------------------------------------

const MAX_RETRIES = 3;
const RETRY_BASE_MS = 5_000; // 5 s, 10 s, 20 s

/** Narrow an unknown thrown value to its HTTP status code, if it carries one. */
function errorStatus(err: unknown): number | undefined {
  if (typeof err === "object" && err !== null && "status" in err && typeof err.status === "number") {
    return err.status;
  }
  return undefined;
}

export function is429(err: unknown): boolean {
  return errorStatus(err) === 429 || String(err).includes("429");
}

function is403(err: unknown): boolean {
  return errorStatus(err) === 403 || String(err).includes("permission_error");
}
/**
 * z.ai / Alibaba-style content moderation rejects the whole prompt with a 400
 * (code 1301, "sensitive content"). Narrow match so genuine client bugs
 * (bad params etc.) still surface instead of silently failing over.
 */
function isContentFilter(err: unknown): boolean {
  return errorStatus(err) === 400 && /1301|sensitive content/i.test(String(err));
}

export function shouldFallback(err: unknown): boolean {
  return is403(err) || isContentFilter(err);
}

export async function callLlm(prompt: string, maxTokens = LLM_TOKENS_DEFAULT): Promise<string> {
  for (let attempt = 0; ; attempt++) {
    await acquireSlot();
    let released = false;
    try {
      return await provider.call(prompt, maxTokens);
    } catch (err) {
      if (attempt < MAX_RETRIES && is429(err)) {
        releaseSlot();
        released = true;
        const wait = RETRY_BASE_MS * 2 ** attempt;
        console.error(`[llm] 429 — retry ${attempt + 1}/${MAX_RETRIES} in ${wait / 1000}s...`);
        await sleep(wait);
        continue;
      }
      if (shouldFallback(err) && fallbackProvider) {
        const reason = is403(err) ? "403 quota exceeded" : "content filter rejected prompt";
        console.error(`[llm] ${reason} — switching to fallback provider`);
        return await fallbackProvider.call(prompt, maxTokens);
      }
      throw err;
    } finally {
      if (!released) releaseSlot();
    }
  }
}

// ---------------------------------------------------------------------------
// File output
// ---------------------------------------------------------------------------

export function saveFile(content: string, ...segments: string[]): string {
  const filepath = path.join("digests", ...segments);
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, content, "utf-8");
  return filepath;
}

export function autoGenFooter(lang: Lang = "zh"): string {
  const digestRepo = process.env["DIGEST_REPO"] ?? "";
  if (!digestRepo) return "";
  return `\n\n---\n*${FOOTER.autoGen[lang]} [agents-radar](https://github.com/${digestRepo})${lang === "en" ? "." : " 自动生成。"}*`;
}
