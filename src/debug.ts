/**
 * 本地调试入口 - 加载 .env 文件
 */
import dotenv from "dotenv";

// 加载 .env 文件
dotenv.config();

// 将 MINIMAX_API_KEY 映射到 ANTHROPIC_API_KEY（如果存在）
if (process.env.MINIMAX_API_KEY && !process.env.ANTHROPIC_API_KEY) {
  process.env.ANTHROPIC_API_KEY = process.env.MINIMAX_API_KEY;
}

// 设置默认的 Minimax 配置
if (!process.env.ANTHROPIC_BASE_URL) {
  process.env.ANTHROPIC_BASE_URL = "https://api.minimaxi.com/anthropic";
}

if (!process.env.ANTHROPIC_MODEL) {
  process.env.ANTHROPIC_MODEL = "MiniMax-M2.5";
}

if (!process.env.GITHUB_TOKEN) {
  // 本地测试用假的 token，只测试 API 调用
  process.env.GITHUB_TOKEN = "ghp_test_local_debug";
}

// 导入主程序
import "./index.ts";
