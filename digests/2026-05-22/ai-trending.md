# AI 开源趋势日报 2026-05-22

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-05-22 03:55 UTC

---

# AI 开源趋势日报 (2026-05-22)

## 1. 今日速览
今日 GitHub AI 领域最显著的趋势是 **“Agentic Skills（智能体技能）”与“Context Engineering（上下文工程）”的崛起**。随着 Claude Code 等智能体编程工具的普及，社区关注点正从单纯的模型能力转向如何为智能体配备高质量的工具、技能包及知识图谱。Anthropic 官方插件的发布标志着智能体插件生态的正式确立，而 “Andrej Karpathy Skills” 和 “Codegraph” 的爆火则反映了开发者对降低 Token 消耗、提升智能体认知能力的迫切需求。此外，将现有软件“Agent-Native 化”（如 CLI-Anything）正成为连接传统软件与 AI 智能体的关键桥梁。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、工具链）

- **[anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)** [Python] ⭐0 (+682 today)
  **说明**：Anthropic 官方管理的 Claude Code 插件目录，为 AI 编程智能体提供高质量、标准化的工具扩展，是构建 AI 软件工程师生态的基础设施。

- **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)** [TypeScript] ⭐0 (+151 today)
  **说明**：将 Chrome DevTools 暴露给编码智能体的接口，允许 AI 智能体直接通过 MCP 协议操控浏览器进行调试，实现了 AI 与 Web 环境的深度交互。

- **[can1357/oh-my-pi](https://github.com/can1357/oh-my-pi)** [TypeScript] ⭐0 (+500 today)
  **说明**：面向终端的 AI 编码智能体，具备哈希锚定编辑和优化的工具 harness，致力于提升命令行环境下的 AI 开发效率。

- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** [Python] ⭐0 (+656 today)
  **说明**：旨在将所有软件转化为 Agent-Native 形态，通过 CLI 接口让传统软件能被 AI 智能体直接调用，极大扩展了智能体的能力边界。

### 🤖 AI 智能体/工作流

- **[colbymchenry/codegraph](https://github.com/colbymchenry/codegraph)** [TypeScript] ⭐0 (+4294 today)
  **说明**：今日涨幅最大项目。为 Claude Code、Cursor 等提供预索引的代码知识图谱，显著减少 Token 消耗和工具调用次数，解决了大模型上下文窗口受限的痛点。

- **[multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)** ⭐0 (+2614 today)
  **说明**：将 AI 大神 Andrej Karpathy 关于 LLM 编程陷阱的观察转化为具体的 Claude Code 技能文件，通过“专家经验注入”提升智能体编码表现。

- **[obra/superpowers](https://github.com/obra/superpowers)** [Shell] ⭐0 (+1576 today)
  **说明**：一套智能体技能框架与软件开发方法论，定义了 AI 辅助开发的标准流程，强调智能体不仅要写代码，更要遵循工程规范。

- **[multica-ai/multica](https://github.com/multica-ai/multica)** [Go] ⭐0 (+534 today)
  **说明**：开源托管智能体平台，将编码智能体转化为可分配任务、追踪进度的队友，支持技能组合与任务编排，迈向自动化团队协作。

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐161,757 (total)
  **说明**：长期霸榜的智能体项目，主打“与你共同成长”的智能体理念，代表了当前开源社区在通用智能体探索上的最高热度。

### 📦 AI 应用（垂直场景、生产力）

- **[teng-lin/notebooklm-py](https://github.com/teng-lin/notebooklm-py)** [Python] ⭐0 (+186 today)
  **说明**：Google NotebookLM 的非官方 Python API 与智能体技能，解锁了网页端未开放的功能，为 AI 智能体提供了强大的笔记与知识处理能力。

- **[Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills)** [Python] ⭐0 (+2579 today)
  **说明**：专为学术研究设计的 Claude Code 技能包，覆盖从研究、撰写到审稿的全流程，展示了 AI 智能体在垂直专业领域的深度应用潜力。

- **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** [Python] ⭐0 (+1333 today)
  **说明**：从零构建 AI 应用的实战教程与资源库，随着 AI 工程化热度上升，此类系统性学习资源持续受到开发者追捧。

### 🔍 RAG/知识库

- **[Lum1104/Understand-Anything](https://github.com/Lum1104/Understand-Anything)** [TypeScript] ⭐0 (+666 today)
  **说明**：将任意代码转化为可交互知识图谱，支持搜索与问答，强调“教学型图谱”而非单纯展示，极大地增强了智能体理解复杂代码库的能力。

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Python] ⭐81,012 (total)
  **说明**：领先的开源 RAG 引擎，深度融合了 RAG 与 Agent 能力，为 LLM 提供了优越的上下文层，是企业级知识库搭建的首选方案。

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐56,391 (total)
  **说明**：为 AI 智能体提供通用记忆层，解决了智能体跨会话记忆丢失的问题，是构建长期记忆智能体的核心组件。

---

## 3. 趋势信号分析

今日热榜清晰地指向一个核心趋势：**AI 编程智能体正从“通用对话”向“技能化与专业化”演进**。

1.  **技能化**：`andrej-karpathy-skills` 和 `academic-research-skills` 的爆火表明，单纯依靠 LLM 的通用能力已无法满足复杂需求，开发者开始通过 Prompt Engineering 和 Skill Files 沉淀专家知识，将 AI 打造成特定领域的专家（如学术研究、.NET 开发）。
2.  **上下文工程崛起**：`codegraph` 单日斩获 4000+ star，揭示了当前智能体的核心瓶颈在于 Context。通过知识图谱预处理代码，减少对 LLM 上下文窗口的依赖，这种“外部挂载大脑”的模式正成为主流技术栈。
3.  **MCP 协议落地**：Anthropic 官方插件目录和 Chrome DevTools MCP 的上榜，标志着 MCP (Model Context Protocol) 正在成为连接 AI 智能体与外部世界（浏览器、IDE、CLI）的事实标准，推动了 Agent-Native 软件的爆发。

---

## 4. 社区关注热点

*   **[colbymchenry/codegraph](https://github.com/colbymchenry/codegraph)**：**强烈推荐关注**。它解决了 AI 编程“看不懂大项目”的痛点，利用知识图谱技术为智能体提供精准上下文，是提升 AI 编程质量的关键技术方向。
*   **[anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)**：Anthropic 官方背书的插件生态起点，意味着 AI IDE 的“App Store”时刻已来，开发者应关注其插件开发规范。
*   **[multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)**：极佳的学习案例。展示了如何将人类专家的隐性知识转化为 AI 可执行的显式技能，对于优化 Prompt 和构建自定义 Agent 极具参考价值。
*   **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)**：学术界（HKUDS）在 Agent 系统层面的尝试，提出了“让所有软件 Agent-Native”的愿景，值得跟进其技术实现路径。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*