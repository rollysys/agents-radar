# AI 开源趋势日报 2026-06-11

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-11 04:12 UTC

---

# AI 开源趋势日报 (2026-06-11)

## 1. 今日速览
今日 AI 开源社区最显著的趋势是 **“智能体技能化”**。多个与 AI Agent Skills（技能）、Prompts（提示词）及工作流定义相关的项目霸榜 GitHub Trending，如 `last30days-skill` 和 `superpowers` 单日 Star 增长均破千，表明开发者正从构建 Agent 框架转向沉淀可复用的具体能力模块。在应用层，AI 视频生成与垂直领域解决方案（如医疗 `OpenMed`）持续保持高热度。此外，系统提示词泄露与分析项目的高关注度，反映出社区对顶尖 AI 产品“黑盒”机制的强烈探索欲。

---

## 2. 各维度热门项目

### 🤖 AI 智能体/工作流
今日最热类别，聚焦于 Agent 的技能定义、框架与自动化执行。

- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** [Python] ⭐2,535 (+2,535 today)
  - **说明**：今日增速最高的项目。一个能够跨 Reddit、X、YouTube 等平台自动调研并合成摘要的 Agent Skill，展示了 Agent 在信息聚合场景的强大潜力。
- **[obra/superpowers](https://github.com/obra/superpowers)** [Shell] ⭐1,104 (+1,104 today)
  - **说明**：一个新兴的“代理技能框架”，提供了一套软件工程方法论，旨在让 AI Agent 具备生产级的开发能力。
- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** [Shell] ⭐821 (+821 today)
  - **说明**：由知名开发者 Addy Osmani 发起，专注于为编码类 AI Agent 提供“生产级”的工程技能库。
- **[phuryn/pm-skills](https://github.com/phuryn/pm-skills)** ⭐804 (+804 today)
  - **说明**：针对产品经理（PM）场景的 Agent 技能市场，包含从发现到增长的全流程技能插件。
- **[google/skills](https://github.com/google/skills)** [Python] ⭐211 (+211 today)
  - **说明**：Google 官方推出的 Agent Skills 库，针对其产品和技术栈进行了优化，具有极高的参考价值。
- **[activeloopai/hivemind](https://github.com/activeloopai/hivemind)** [TypeScript] ⭐64 (+64 today)
  - **说明**：旨在为所有 Agent 提供统一的“大脑”和记忆层，解决多 Agent 协作中的上下文孤岛问题。

### 📦 AI 应用
视频生成、空间智能与垂直行业应用持续落地。

- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] ⭐1,389 (+1,389 today)
  - **说明**：利用大模型一键生成高清短视频的工具，极大降低了视频内容生产的门槛，社区热度持续不减。
- **[maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed)** [Python] ⭐527 (+527 today)
  - **说明**：开源医疗 AI 项目，尝试在高度专业的医疗领域构建可用的 AI 辅助系统。
- **[ruvnet/RuView](https://github.com/ruvnet/RuView)** [Rust] ⭐420 (+420 today)
  - **说明**：利用 WiFi 信号进行实时空间智能和生命体征监测，无需摄像头，展示了 AI 在非视觉感知领域的创新。
- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** [TypeScript] ⭐47,187 (Total)
  - **说明**：集成了智能聊天和自主 Agent 的 AI 生产力工作室，支持多模型接入。

### 🔧 AI 基础工具
提示词工程、开发工具与视觉基础设施。

- **[x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools)** ⭐393 (+393 today)
  - **说明**：汇集了主流 AI 工具（如 Cursor, Devin, Perplexity 等）的系统提示词和模型细节，是研究 Agent 构造的宝贵资料库。
- **[roboflow/supervision](https://github.com/roboflow/supervision)** [Python] ⭐695 (+695 today)
  - **说明**：可复用的计算机视觉工具库，为 AI 视觉应用提供底层支持，稳居工具类热榜。
- **[luongnv89/claude-howto](https://github.com/luongnv89/claude-howto)** [Python] ⭐211 (+211 today)
  - **说明**：针对 Claude Code 的可视化指南，提供了从基础到高级 Agent 的实战模板。

### 🧠 大模型/训练
模型训练、推理与底层框架。

- **[FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch)** [Python] ⭐247 (+247 today)
  - **说明**：从数据下载到文本生成的全流程 LLM 训练教程，适合希望深入理解模型原理的开发者。
- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐173,812 (Total)
  - **说明**：最流行的本地大模型运行工具，支持最新模型，是本地 AI 开发的基础设施。

### 🔍 RAG/知识库
检索增强生成与向量数据库技术。

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Python] ⭐82,426 (Total)
  - **说明**：领先的深度文档理解 RAG 引擎，解决了传统 RAG 对复杂文档解析不足的痛点。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐58,296 (Total)
  - **说明**：为 AI Agent 提供持久化的记忆层，是构建长期记忆 Agent 的关键组件。

---

## 3. 趋势信号分析

**“技能定义”成为 Agent 落地的新焦点**
今日 Trending 榜单被 `agent-skills`、`pm-skills`、`superpowers` 等项目占据，且 Star 增长极快（如 `last30days-skill` 单日暴涨 2500+）。这标志着 AI Agent 开发进入了“技能沉淀期”。开发者不再满足于通用的 Agent 框架，而是开始致力于将具体的工程能力、产品管理流程封装为标准化的“Skill”，供 Agent 调用。这降低了普通用户使用 Agent 的门槛，也从“如何构建 Agent”转向了“Agent 能做什么”。

**提示词工程与逆向工程持续发烧**
`system-prompts-and-models-of-ai-tools` 项目的热度揭示了社区对“黑盒”内部机制的好奇心。通过分析顶尖 AI 产品（如 Devin, Cursor）的系统提示词，开发者试图解构成功产品的“思维链”和指令设计，这将推动 Prompt Engineering 向更深层次的 System Design 演进。

**多模态与边缘智能的创新**
`RuView` 项目利用 WiFi 信号进行空间感知，打破了 AI 感知必须依赖摄像头的刻板印象，为隐私敏感场景下的 AI 应用提供了新思路。结合 `MoneyPrinterTurbo` 在视频生成领域的持续火爆，说明多模态 AI 正在向更广泛的物理信号和内容创作领域渗透。

---

## 4. 社区关注热点

-   **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)**：如果你对 AI 自动化信息收集和研报生成感兴趣，这个项目提供了绝佳的实战案例，展示了 Agent 如何整合多源异构数据。
-   **[obra/superpowers](https://github.com/obra/superpowers)**：对于 Agent 开发者，关注该项目可以学习如何为 Agent 设计一套规范化、可扩展的技能开发框架。
-   **[x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools)**：强烈建议提示词工程师和架构师参考，其中包含了 Cursor, Devin 等明星产品的真实 Prompt，极具学习价值。
-   **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)**：内容创作者和短视频运营者应重点关注，它是目前开源界实现“文生视频”自动化程度较高的工具之一。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*