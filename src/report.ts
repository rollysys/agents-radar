/**
 * LLM invocation, file I/O, and GitHub issue creation helpers.
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "node:fs";
import path from "node:path";

const MODEL = process.env["ANTHROPIC_MODEL"] ?? "claude-sonnet-4-6";
const API_KEY = process.env["ANTHROPIC_API_KEY"] ?? "";
const BASE_URL = process.env["ANTHROPIC_BASE_URL"];

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
    // 检测是否是 Minimax 端点（需要裸 token，不带 Bearer）
    const isMinimax = BASE_URL?.includes("minimax");
    
    if (isMinimax) {
      // Minimax: 使用裸 token，手动构造请求
      const response = await fetch(`${BASE_URL}/v1/messages`, {
        method: "POST",
        headers: {
          "Authorization": API_KEY, // 裸 token，不带 Bearer
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: maxTokens,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      
      if (!response.ok) {
        const error = await response.text();
        throw new Error(`API error: ${response.status} ${error}`);
      }
      
      const data = await response.json();
      const block = data.content?.[0];
      if (block?.type !== "text") throw new Error("Unexpected response type from LLM");
      return block.text;
    } else {
      // Anthropic 官方: 使用 SDK（自动加 Bearer）
      const client = new Anthropic();
      const message = await client.messages.create({
        model: MODEL,
        max_tokens: maxTokens,
        messages: [{ role: "user", content: prompt }],
      });
      const block = message.content[0];
      if (block?.type !== "text") throw new Error("Unexpected response type from LLM");
      return block.text;
    }
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
