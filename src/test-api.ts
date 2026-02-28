/**
 * 单独测试 Minimax API
 */
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.MINIMAX_API_KEY || process.env.ANTHROPIC_API_KEY || "";
const BASE_URL = process.env.ANTHROPIC_BASE_URL || "https://api.minimaxi.com/anthropic";
const MODEL = process.env.ANTHROPIC_MODEL || "MiniMax-M2.5";

async function testMinimaxApi() {
  console.log("=== Minimax API 测试 ===");
  console.log("BASE_URL:", BASE_URL);
  console.log("MODEL:", MODEL);
  console.log("API_KEY length:", API_KEY.length);
  console.log("API_KEY prefix:", API_KEY.substring(0, 20) + "...");
  console.log("");

  const prompt = "Hello, please reply with a short greeting.";
  
  try {
    console.log("Sending request...");
    const response = await fetch(`${BASE_URL}/v1/messages`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 100,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    console.log("Response status:", response.status);
    console.log("Response headers:", Object.fromEntries(response.headers.entries()));
    
    const data = await response.json();
    console.log("\nResponse body:");
    console.log(JSON.stringify(data, null, 2));

    if (response.ok) {
      // Minimax 返回 content 数组，可能包含 thinking 和 text
      const textBlock = data.content?.find((c: any) => c.type === "text");
      const content = textBlock?.text || data.content?.[0]?.text;
      console.log("\n✅ API 调用成功！");
      console.log("Content:", content);
    } else {
      console.log("\n❌ API 调用失败:", data.error?.message || data);
    }
  } catch (error) {
    console.error("\n❌ 请求异常:", error);
  }
}

testMinimaxApi();
