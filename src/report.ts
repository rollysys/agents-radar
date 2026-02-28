/**
 * LLM invocation, file I/O, and GitHub issue creation helpers.
 * Modified to support Minimax API (OpenAI compatible)
 */

import OpenAI from "openai";
import fs from "node:fs";
import path from "node:path";

// 支持 Minimax 或其他 OpenAI 兼容的 API
const MODEL = process.env["OPENAI_MODEL"] 
  ?? process.env["ANTHROPIC_MODEL"] 
  ?? "MiniMax-Text-01";

const BASE_URL = process.env["OPENAI_BASE_URL"] 
  ?? process.env["ANTHROPIC_BASE_URL"];

const API_KEY = process.env["OPENAI_API_KEY"] 
  ?? process.env["ANTHROPIC_API_KEY"];

// 创建 OpenAI 客户端（兼容 Minimax）
const client = new OpenAI({
  apiKey: API_KEY,
  baseURL: BASE_URL,
});

// ---------------------------------------------------------------------------
// Concurrency limiter — prevents rate-limit (429) errors when many LLM calls
// are fired in parallel. At most LLM_CONCURRENCY requests are in-flight at
// any given time; the rest queue and run as slots free up.
// ---------------------------------------------------------------------------

const LLM_CONCURRENCY = 5;
let llmSlots = LLM_CONCURRENCY;
const llmQueue: Array<() => void> = [];

function acquireSlot(): Promise<void> {
  if (llmSlots > 0) { llmSlots--; return Promise.resolve(); }
  return new Promise((resolve) => llmQueue.push(resolve));
}

function releaseSlot(): void {
  const next = llmQueue.shift();
  if (next) { next(); } else { llmSlots++; }
}

// ---------------------------------------------------------------------------
// LLM
// ---------------------------------------------------------------------------

export async function callLlm(prompt: string, maxTokens = 4096): Promise<string> {
  await acquireSlot();
  try {
    const response = await client.chat.completions.create({
      model: MODEL,
      messages: [{ role: "user", content: prompt }],
      max_tokens: maxTokens,
      temperature: 0.7,
    });
    
    const content = response.choices[0]?.message?.content;
    if (!content) throw new Error("Empty response from LLM");
    return content;
  } finally {
    releaseSlot();
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

export function autoGenFooter(): string {
  const digestRepo = process.env["DIGEST_REPO"] ?? "";
  return digestRepo
    ? `\n\n---\n*本日报由 [agents-radar](https://github.com/${digestRepo}) 自动生成。*`
    : "";
}
