/**
 * Anthropic provider — wraps the @anthropic-ai/sdk.
 *
 * Env vars:
 *   ANTHROPIC_API_KEY   - API key (read automatically by the SDK)
 *   ANTHROPIC_BASE_URL  - endpoint override (read automatically by the SDK)
 *   ANTHROPIC_MODEL     - model name (default: claude-sonnet-4-6)
 */

import Anthropic from "@anthropic-ai/sdk";
import type { LlmProvider } from "./types.ts";

export class AnthropicProvider implements LlmProvider {
  readonly name = "anthropic";
  private readonly client: Anthropic;
  private readonly model: string;

  constructor(model?: string) {
    this.model = model ?? process.env["ANTHROPIC_MODEL"] ?? "claude-sonnet-4-6";
    this.client = new Anthropic();
  }

  async call(prompt: string, maxTokens: number): Promise<string> {
    const message = await this.client.messages.create({
      model: this.model,
      max_tokens: maxTokens,
      messages: [{ role: "user", content: prompt }],
    });
    const text = message.content
      .filter((b): b is Anthropic.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n");
    if (!text) throw new Error("No text content in Anthropic response");
    return text;
  }
}
