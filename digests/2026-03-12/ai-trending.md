# AI 开源趋势日报 2026-03-12

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-12 02:26 UTC

---

# 🤖 AI 开源趋势日报

**2026-03-12**

---

## 今日速览

今日 GitHub Trending 呈现**AI Agent 全面爆发**的态势——9个Trending项目中 **7个直接与Agent相关**，涵盖多智能体协作、GUI自动化、金融场景、即时通讯等垂直方向。值得关注的是，**promptfoo** 作为首个专注于AI提示词/Agent评测的工具登上热榜，标志着社区对AI系统质量保障的需求正在觉醒。传统大模型项目（Ollama、LangChain）热度稳定，但新进入者明显向**应用层**和**工具层**倾斜。

---

## 各维度热门项目

### 🔧 AI 基础工具

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) | ⭐0 | +718 | AI提示词/Agent红队测试框架，支持GPT/Claude/Gemini/Llama对比，CI/CD友好 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 72,874 | — | 高吞吐量LLM推理引擎，支持PagedAttention |
| [ollama/ollama](https://github.com/ollama/ollama) | 164,884 | — | 本地大模型运行工具，支持Kimi/Qwen/DeepSeek等 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 68,229 | — | 统一高效微调100+LLM/VLM框架 |

### 🤖 AI 智能体/工作流

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | ⭐0 | +6,167 | 多Agent协作系统，前端/社区运营/内容创作等专业化Agent团队 |
| [obra/superpowers](https://github.com/obra/superpowers) | ⭐0 | +1,483 | Agentic技能框架与软件工程方法论 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | ⭐0 | +1,215 | 自然语言控制Web界面的JavaScript GUI Agent |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐0 | +1,234 | 可成长的自适应Agent框架 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 29,293 | — | 前端Agent与生成式UI开发框架 |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 21,178 | — | 含400+MCP服务器的AI工作流自动化平台 |

### 📦 AI 应用

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | ⭐0 | +2,907 | 通用群体智能引擎，支持预测万物 |
| [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | ⭐0 | +636 | AI对冲基金团队，多Agent分工协作 |
| [fishaudio/fish-speech](https://github.com/fishaudio/fish-speech) | ⭐0 | +313 | SOTA开源TTS语音合成 |
| [AstrBotDevs/AstrBot](https://github.com/AstrBotDevs/AstrBot) | ⭐0 | +342 | Agentic即时通讯Chatbot基础设施 |
| [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) | 42,140 | — | 多平台接入的AI助手（飞书/钉钉/微信等） |

### 🔍 RAG/知识库

| 项目 | Stars | 说明 |
|------|-------|------|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 74,793 | RAG引擎+Agent融合的上下文层 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 47,599 | 文档Agent与OCR平台 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 49,467 | AI Agent通用记忆层 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 43,320 | 高性能云原生向量数据库 |

---

## 趋势信号分析

**1. Agent框架进入"工业化组装"阶段**

今日 Trending 7/9 项目围绕 Agent 构建——这与过去"单点模型"的热度模式显著不同。Agency-agents、superpowers、hermes-agent 均强调 **多Agent协作** 或 **可扩展技能体系**，表明社区正从"如何做一个Agent"转向"如何组织一群Agent"。

**2. 测试/安全工具首次登榜，释放质量信号**

Promptfoo 是首个专注于 **AI评测** 的Trending项目（含红队测试/漏洞扫描）。这一空白被填补，暗示随着Agent进入生产环境，**可靠性验证** 正在成为新的刚需。

**3. 垂直场景Agent正在爆发**

- 金融：ai-hedge-fund
- 语音：fish-speech（TTS）
- 通讯： AstrBot（IM Chatbot）
- GUI自动化：page-agent

**4. 群体智能新星**

MiroFish 以 2,907 星登顶语言类目，"群体智能引擎预测万物"的概念吸引了大量关注。

---

## 社区关注热点

- **[promptfoo/promptfoo](https://github.com/promptfoo/promptfoo)** — AI系统测试与安全评估正在成为基建层，建议加入技术栈
- **[alibaba/page-agent](https://github.com/alibaba/page-agent)** — 浏览器自动化Agent的开源实现值得关注
- **[fishaudio/fish-speech](https://github.com/fishaudio/fish-speech)** — 开源TTS领域的新SOTA，语音AI应用可关注
- **[666ghj/MiroFish](https://github.com/666ghj/MiroFish)** — 群体智能范式是否会成为下一代Agent方向，值得观察
- **[activepieces/activepieces](https://github.com/activepieces/activepieces)** — 400+MCP服务器的生态整合，Agent工作流开发者重点关注

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*