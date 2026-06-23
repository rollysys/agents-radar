# AI 开源趋势日报 2026-06-23

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-23 03:49 UTC

---

# AI 开源趋势日报 (2026-06-23)

## 1. 今日速览

今日 AI 开源生态呈现出**“Agentic Media Production（智能体媒体生产）”**爆发的鲜明特征。视频与音频生成类应用霸榜 Trending，OpenMontage 和 Palmier Pro 的热度表明 AI 正从单纯的“生成内容”向“全流程自动化视频制作工作室”演进。同时，**MCP（Model Context Protocol）生态**持续升温，以 `codebase-memory-mcp` 为代表的项目解决了智能体长期记忆与上下文理解的痛点，成为开发者新宠。此外，**Claude Code 相关的工具链**（Skills, Gstack）大受欢迎，显示出社区对构建特定领域 AI Agent 技能栈的强烈需求。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、工具）

- **[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)** ⭐0 (+1185 today)
  高性能代码智能 MCP 服务器，能将代码库索引为持久化知识图谱，大幅降低 LLM token 消耗，是提升 AI 编程助手上下文理解能力的关键基建。

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** ⭐137,479 (+615 today)
  坚实的 Web 数据抓取 API，为 AI Agent 提供高质量的网络数据输入，是 RAG 和 Agent 工具链中的核心组件。

- **[lyogavin/airllm](https://github.com/lyogavin/airllm)** ⭐0 (+193 today)
  突破性的推理优化项目，支持在单张 4GB GPU 上运行 70B 大模型，极大地降低了高性能模型的本地部署门槛。

- **[ollama/ollama](https://github.com/ollama/ollama)** ⭐174,755
  本地大模型运行的事实标准，支持最新的 Kimi、DeepSeek 等模型，是开发者本地调试 AI 应用的必备工具。

### 🤖 AI 智能体/工作流

- **[calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)** ⭐0 (+2938 today)
  全球首个开源 Agentic 视频生产系统，拥有 12 条管线和 500+ 技能，将 AI 编程助手转化为完整的视频工作室，今日热度断层第一。

- **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** ⭐73,378 (+738 today)
  字节跳动开源的长周期 SuperAgent 框架，擅长处理耗时数分钟的复杂任务，集成了沙箱、记忆和子智能体机制。

- **[mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)** ⭐0 (+956 today)
  专为 AI Agent 设计的结构化网络安全技能库，映射了 MITRE ATT&CK 等六大框架，标志着 AI Agent 在专业垂直领域（安全）的落地深化。

- **[mattpocock/skills](https://github.com/mattpoclock/skills)** ⭐0 (+2051 today)
  工程师视角的 AI 技能定义集合，展示了如何通过 Prompt 和工具配置让 AI 扮演 CEO、设计师等具体角色。

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** ⭐200,085
  高度受关注的通用智能体项目，强调与用户共同成长的 Agent 理念。

### 📦 AI 应用（垂直场景、具体产品）

- **[palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro)** ⭐0 (+2463 today)
  专为 AI 设计的 macOS 视频编辑器，顺应了“AI 原生内容创作”的浪潮，填补了 AI 生成视频后处理工具的空白。

- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** ⭐46,040 (+1557 today)
  LLM 驱动的多市场股票分析系统，实现了从数据获取到决策推送的全流程自动化，是 AI 量化交易方向的热门实践。

- **[jamiepine/voicebox](https://github.com/jamiepine/voicebox)** ⭐0 (+529 today)
  开源 AI 语音工作室，支持声音克隆与创作，补齐了开源社区在高质量音频生成工具上的短板。

- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** ⭐30,429
  从任意文档生成可编辑 PPT 的 AI 工具，解决了传统 AI 生成 PPT 难以二次编辑的痛点。

### 🔍 RAG/知识库

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐59,163
  通用 AI Agent 记忆层，为无状态的 LLM 提供持久化的上下文记忆能力，是构建长期运行 Agent 的核心组件。

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐83,384
  深度融合 Agent 能力的 RAG 引擎，擅长处理复杂文档解析，为企业级知识库提供了优越的上下文层。

- **[zilliztech/claude-context](https://github.com/zilliztech/claude-context)** ⭐11,927
  专为 Claude Code 设计的代码搜索 MCP，让整个代码库成为 LLM 的即时上下文，显著提升编程 Agent 的表现。

---

## 3. 趋势信号分析

**1. Agentic Video Production 的“元年”时刻**
今日 Trending 榜首被 `OpenMontage`（+2938 stars）和 `Palmier Pro`（+2463 stars）占据，这不仅是多模态技术的胜利，更是 **Agent 工作流在创意领域落地** 的里程碑。社区不再满足于单一的文生视频，而是追求“Agentic Video Production”——通过多管线、多技能的 Agent 协作，完成从脚本到剪辑的全流程自动化。这预示着 AI 视频生产正从“玩具”向工业化“工作室”转型。

**2. MCP 协议成为 Agent 记忆与感知的“标准接口”**
`codebase-memory-mcp` 和 `claude-context` 的高增长表明，**MCP (Model Context Protocol)** 正迅速成为连接 AI Agent 与外部数据/工具的标准接口。开发者正致力于解决 Agent 的“短期记忆”限制，通过 MCP 将本地代码库转化为知识图谱或向量索引，赋予 Agent “长期记忆”和“全局视角”。这反映了 Agent 技术栈正在从单纯的 Prompt Engineering 向更复杂的上下文工程演进。

**3. 技能定义成为 Agent 落地的新焦点**
随着基础模型能力的趋同，竞争焦点转向了“Skills”。`mattpocock/skills` 和 `Anthropic-Cybersecurity-Skills` 的流行表明，**将人类专家知识结构化为 AI 可调用的技能** 正在成为热门赛道。特别是网络安全领域的高标准化技能库，标志着 AI Agent 正从通用的“聊天机器人”进化为专业的“安全专家”，垂直领域的 Skills 市场潜力巨大。

---

## 4. 社区关注热点

- **[calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)**：如果你关注多模态 Agent，这是必看项目。它展示了如何将 52 种工具组合成复杂的视频工作流，是目前 Agentic Workflow 最激动人心的实践之一。
- **[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)**：AI 编程助手的“海马体”。对于希望提升 Copilot/Codeium 等工具上下文理解能力的开发者，这个 MCP 服务器提供了极佳的解决方案。
- **[mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)**：安全从业者的福音。它展示了如何将 NIST、MITRE 等专业框架映射给 AI，是构建垂直领域 Agent Skills 的优秀范本。
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)**：AI 金融分析的优秀落地案例，支持零成本定时运行，适合个人开发者参考如何构建端到端的自动化信息流系统。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*