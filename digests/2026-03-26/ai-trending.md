# AI 开源趋势日报 2026-03-26

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-26 02:37 UTC

---

你好！我是专注于 AI 开源生态的技术分析师。基于 2026-03-26 的 GitHub 数据，我为你整理了这份《AI 开源趋势日报》。

经过对 Trending 榜单和 Topic 搜索结果的深度清洗与融合，筛选出 **67 个** 高相关性 AI 项目。以下是今日的核心分析报告。

---

# 📅 AI 开源趋势日报 (2026-03-26)

## 1. 今日速览
今日 GitHub AI 领域最显著的特征是**“深度研究与长周期智能体”**的爆发。字节跳动开源的 **deer-flow** 以长周期 SuperAgent 的概念登顶热榜，展示了从单一对话向复杂任务流（分钟/小时级）进化的趋势。同时，**RuView** 引发的“非视觉感知”技术热潮（WiFi DensePose）表明 AI 正在突破传统摄像头限制，向环境隐式感知拓展。工具链层面，**Claude 生态**正在复刻当年的 OpenAI 路径，围绕其构建的编排平台、记忆层和 CLI 工具占据了今日增长的大半壁江山。

---

## 2. 各维度热门项目

### 🤖 AI 智能体/工作流
> **趋势要点**：Agent 正在从“聊天机器人”向“自主执行者”进化，重点在于多工具调用、长时记忆和自我纠错。

| 项目 | Stars | 说明 |
| :--- | :--- | :--- |
| **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** [Python] | ⭐0 (+3787) | **今日之星**。字节跳动开源的长周期 SuperAgent，具备沙箱、记忆和网关，能处理耗时数小时的复杂任务。 |
| **[ruvnet/ruflo](https://github.com/ruvnet/ruflo)** [TypeScript] | ⭐0 (+1174) | 专为 Claude 设计的智能体编排平台，支持分布式群智 和 RAG 集成。 |
| **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** [Python] | ⭐0 (+1341) | 极具实用价值的 Agent Skill，能跨 Reddit、X、YouTube 等平台自动调研并生成有据可依的总结。 |
| **[hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN)** [Python] | ⭐0 (+449) | 基于多智能体的中文金融交易框架，展示了 Agent 在高风控垂直领域的落地尝试。 |
| **[letta-ai/claude-subconscious](https://github.com/letta-ai/claude-subconscious)** [TypeScript] | ⭐0 (+71) | 为 Claude Code 赋予“潜意识”层，探索 Agent 在显性任务之外的隐性记忆与推理。 |

### 🔧 AI 基础工具
> **趋势要点**：Claude 生态的工具链（CLI, SDK）正迎来爆发期，同时隐私优先的本地化推理和感知技术备受关注。

| 项目 | Stars | 说明 |
| :--- | :--- | :--- |
| **[ruvnet/RuView](https://github.com/ruvnet/RuView)** [Rust] | ⭐0 (+1082) | **技术突破**。利用商用 WiFi 信号进行实时人体姿态估计和生命体征监测，无需任何摄像头视频流。 |
| **[BerriAI/litellm](https://github.com/BerriAI/litellm)** [Python] | ⭐0 (+301) | 统一的 LLM 网关，支持 100+ 模型 API，是构建多云、多模型 AI 架构的必备基础设施。 |
| **[supermemoryai/supermemory](https://github.com/supermemoryai/supermemory)** [TypeScript] | ⭐0 (+810) | AI 时代的记忆引擎，提供极快、可扩展的 API，解决 LLM 无状态的问题。 |
| **[usestrix/strix](https://github.com/usestrix/strix)** [Python] | ⭐0 (+102) | 开源的 AI 黑客工具，用于自动发现并修复应用漏洞，标志着“AI 攻防”自动化的起步。 |

### 📦 AI 应用
> **趋势要点**：离线生存、内容变现和影视工业化是当前应用层的三大热点。

| 项目 | Stars | 说明 |
| :--- | :--- | :--- |
| **[Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad)** [TypeScript] | ⭐0 (+1718) | 离线生存计算机，集成了关键工具、知识和 AI，旨在为极端环境提供信息支持。 |
| **[FujiwaraChoki/MoneyPrinterV2](https://github.com/FujiwaraChoki/MoneyPrinterV2)** [Python] | ⭐0 (+1065) | 自动化在线赚钱工具，反映了社区利用 AI 生成内容（AIGC）进行变现的强烈需求。 |
| **[saturndec/waoowaoo](https://github.com/saturndec/waoowaoo)** [TypeScript] | ⭐10.4k | 首家工业级全流程 AI 影视生产平台，支持从短片到真人秀的好莱坞标准工作流。 |
| **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** [TypeScript] | ⭐42.3k | AI 生产力工作室，集成了智能聊天和 300+ 助手，是典型的“AI PC”入口级应用。 |

### 🔍 RAG/知识库
> **趋势要点**：无向量化 和知识自动化是本月最受关注的技术方向。

| 项目 | Stars | 说明 |
| :--- | :--- | :--- |
| **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** [Python] | ⭐22.9k | **技术前沿**。基于推理而非向量的文档索引，挑战了传统的 RAG 范式，显著提升准确性。 |
| **[yichuan-w/LEANN](https://github.com/yichuan-w/LEANN)** [Python] | ⭐10.3k | [MLsys2026] 允许在任何设备上运行私有 RAG，且存储节省 97%，解决了端侧 RAG 的痛点。 |
| **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] | ⭐40.6k | Claude Code 的记忆插件，能自动压缩并注入上下文，显著提升编码 Agent 的连贯性。 |
| **[PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR)** [Python] | ⭐73.0k | 强大的 OCR 工具，作为 RAG 系统的“眼睛”，依然是文档智能化的基石。 |

---

## 3. 趋势信号分析

**1. Agent 任务的“长周期化”与“操作系统化”**
今日 ByteDance 的 `deer-flow` 和 `project-nomad` 的火爆，标志着 AI Agent 正在从“快思考”（对话生成）转向“慢思考”（长周期规划与执行）。开发者不再满足于简单的问答，而是要求 Agent 具备沙箱环境、长期记忆以及操作系统级的文件访问能力。**Sandbox（沙箱）** 和 **Message Gateway（消息网关）** 正成为 Agent 标准架构中的新核心组件。

**2. Claude 生态的“App Store 时刻”**
今日榜单中，`ruflo` (Orchestration), `claude-subconscious` (Memory), `everything-claude-code` (Optimization) 等项目集体爆发。这表明随着 Anthropic 模型能力的提升（特别是 Claude 3.7/4.0 的 Code 能力），社区正在迅速围绕 Claude 构建类似于早期 OpenAI 的丰富工具链。Claude 正在从一个模型转变为一个平台。

**3. 物理感知的“隐形化”**
`RuView` 的上榜令人瞩目。利用 WiFi 信号进行姿态估计（DensePose）打破了 AI 感知必须依赖摄像头的刻板印象。这种**非侵入式感知**技术在隐私敏感场景（如家庭、浴室、保密区域）具有巨大的应用潜力，可能催生新一代的“环境智能”硬件。

**4. 混合检索的兴起**
`PageIndex` 和 `LEANN` 的高关注度指出了向量数据库的局限性。纯粹的向量检索在精确度和资源消耗上存在短板。未来的 RAG 趋势将是**向量 + 关键词 + 推理**的混合模式，以及在端侧设备上的极致压缩与本地化运行。

---

## 4. 社区关注热点
*   🦌 **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)**：如果你在研究如何让 Agent 稳定运行数小时并调用系统工具，这是必读的架构参考。
*   📶 **[ruvnet/RuView](https://github.com/ruvnet/RuView)**：为物联网和智能家居开发者提供了全新的“无摄像头”视觉感知方案，极具创新性。
*   🧠 **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)**：挑战传统向量检索，适合对 RAG 准确率有极高要求的企业级开发者。
*   🎬 **[saturndec/waoowaoo](https://github.com/saturndec/waoowaoo)**：AI 视频生成已从“玩具”进入“工业级流水线”，值得影视/短视频从业者深入研究。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*