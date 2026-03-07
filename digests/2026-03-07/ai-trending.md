# AI 开源趋势日报 2026-03-07

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-07 02:09 UTC

---

# AI 开源趋势日报

**2026-03-07**

---

## 今日速览

今日 GitHub Trending 呈现**智能体与应用层双热**态势：11个热榜项目中 Agent/应用类占据8席，其中 `agency-agents` 狂揽 +2846 stars，AIRI 虚拟伴侣项目 +2562 stars，反映出社区对**多智能体协作**和**可交互AI Companion**的强烈兴趣。值得注意的是，OpenAI 官方 `skills` 技能市场首次登榜，标志着 AI Agent 正在从“工具”向“生态”演进。主题搜索端，RAG 与向量数据库仍是基础设施层主力，但“记忆层”（Memory Layer）相关项目增速明显，AI Agent 的持久化记忆能力正成为新竞争点。

---

## 各维度热门项目

### 🤖 AI 智能体/工作流

| 项目 | Stars | 说明 |
|------|-------|------|
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | ⭐0 (+2846) | 多智能体协作平台，涵盖前端、Reddit运营等垂直角色，**今日热度第一** |
| [QwenLM/Qwen-Agent](https://github.com/QwenLM/Qwen-Agent) | ⭐0 (+696) | 阿里 Qwen3.0 Agent 框架，支持 Function Calling、MCP、代码解释器 |
| [microsoft/hve-core](https://github.com/microsoft/hve-core) | ⭐0 (+273) | Hypervelocity Engineering 组件库，Copilot 工程化实践 |
| [openai/skills](https://github.com/openai/skills) | ⭐0 (+595) | **官方首次登榜**，Codex 技能目录，标志 AI Agent 生态走向标准化 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐29,208 | Agent 前端框架 + 生成式 UI，React/Angular 集成 |
| [trycua/cua](https://github.com/trycua/cua) | ⭐12,894 | 开源 Computer-Use Agent 基础设施，跨平台桌面控制 |

**洞察**：多智能体编排（Multi-Agent Orchestration）从概念走向产品化，Agent 角色专业化（运营/开发/安全）成为趋势。

### 📦 AI 应用

| 项目 | Stars | 说明 |
|------|-------|------|
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | ⭐0 (+2562) | 虚拟伴侣/waifu 容器，支持实时语音 + Minecraft/Factorio 游戏，**今日第二热** |
| [Ed1s0nZ/CyberStrikeAI](https://github.com/Ed1s0nZ/CyberStrikeAI) | ⭐0 (+106) | Go 编写的 AI 安全测试平台，集成 100+ 工具 |
| [lingfengQAQ/webnovel-writer](https://github.com/lingfengQAQ/webnovel-writer) | ⭐0 (+90) | 长篇网文辅助创作，解决 AI 遗忘和幻觉问题，支持 200 万字连载 |
| [TheCraigHewitt/seomachine](https://github.com/TheCraigHewitt/seomachine) | ⭐0 (+690) | Claude Code SEO 内容创作工作流 |
| [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | ⭐0 (+81) | AI 对冲基金团队，LLM 驱动的金融决策 |
| [aidenybai/react-grab](https://github.com/aidenybai/react-grab) | ⭐0 (+450) | 为 Coding Agent 提供的上下文选择组件 |

**洞察**：**AI Companion（虚拟伴侣/角色扮演）** 和 **垂直场景自动化**（安全测试、SEO、网文创作）是应用层两大爆发点，娱乐化与工具化并存。

### 🔧 AI 基础工具

| 项目 | Stars | 说明 |
|------|-------|------|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐164,297 | 本地 LLM 运行框架，支持 Kimi-K2.5、GLM-5、MiniMax、DeepSeek 等 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐72,268 | 高吞吐 LLM 推理服务引擎 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐88,937 | Web 数据提取 → LLM 可用 Markdown，**数据管道基础设施** |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐79,792 | 网站自动化访问，让 AI Agent 操控浏览器 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐67,984 | 百模统一微调框架，ACL 2024 |

### 🔍 RAG/知识库

| 项目 | Stars | 说明 |
|------|-------|------|
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐131,484 | 生产级 Agent 工作流开发平台 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐74,295 | RAG + Agent 融合引擎，上下文增强 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐48,924 | **AI Agent 通用记忆层**，跨会话持久化 |
| [memvid/memvid](https://github.com/memvid/memvid) | ⭐13,277 | Rust 实现的无服务器单文件记忆层 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐13,010 | 6 行代码实现 Agent 知识图谱记忆 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐29,337 | 高性能向量数据库，云原生 |

**洞察**：**Memory Layer（记忆层）** 概念正在崛起，RAG 从“检索”演进为“记忆+推理”一体化，说明 Agent 正在获得持久化人格。

### 🧠 大模型/训练

| 项目 | Stars | 说明 |
|------|-------|------|
| [inclusionAI/AReaL](https://github.com/inclusionAI/AReaL) | ⭐0 (+347) | Lightning-Fast RL for LLM Reasoning，**今日新秀** |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐6,725 | LLM 评估平台，覆盖 100+ 数据集 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐87,311 | PyTorch 从零实现 ChatGPT 风格 LLM |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐3,901 | Apple Silicon LLM 推理服务课程 |

---

## 趋势信号分析

**1. 多智能体协作平台爆发**：`agency-agents` 今日 +2846 stars 的爆发式增长，验证了社区对**多角色 Agent 团队**的需求。从单一 Agent 到 Agent 生态的转变，意味着 AI 开始承担组织化协作角色。

**2. AI Companion 成应用层新风口**：`moeru-ai/airi` +2562 stars 的高速增长，叠加此前虚拟角色项目的持续热度，表明**拟人化交互 AI**（虚拟伴侣、角色扮演）正在成为 C 端落地的重要场景，尤其在游戏化和实时语音技术成熟后。

**3. 记忆层基础设施崛起**：主题搜索中 `mem0`、`memvid`、`cognee` 等记忆层项目增速显著。RAG 正在从“外部知识检索”向“内部记忆系统”演进，这将是 Agent 具备连续人格的关键基础设施。

**4. OpenAI 官方入场 Agent 生态**：`openai/skills` 首次登榜标志着技能市场标准化，AI Agent 正从“自己写 prompt”走向“生态共享技能”。

**5. 垂直场景 Agent 爆发**：安全测试（CyberStrikeAI）、网文创作（webnovel-writer）、SEO（seomachine）、金融（ai-hedge-fund）等垂直场景 Agent 批量出现，说明 Agent 开始从通用走向行业深度定制。

---

## 社区关注热点

- **[moeru-ai/airi](https://github.com/moeru-ai/airi)** — 虚拟伴侣+实时语音+游戏集成，代表 AI Companion 落地新范式，值得关注多模态交互技术栈

- **[msitarzewski/agency-agents](今日最高增长)](https://github.com/msitarzewski/agency-agents)** — 多角色 Agent 协作平台，观察团队 Agent 产品化思路

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — Agent 记忆层基础设施，RAG 演进方向，**建议重点跟踪**

- **[openai/skills](https://github.com/openai/skills)** — 官方技能市场，可能定义 Agent 生态的“应用商店”模式

- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** + **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** — AI Agent 的数据获取能力组合（浏览器自动化 + Web 抓取），基础设施价值持续提升

---

*数据来源：GitHub Trending (2026-03-07) + Topic Search | 分析仅代表个人独立观点*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*