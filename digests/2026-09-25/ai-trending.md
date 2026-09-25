# AI 开源趋势日报 2026-09-25

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-25 04:00 UTC

---

# 《AI 开源趋势日报》2026-09-25

## 一、今日速览

今日 GitHub Trending 被 **Agent 基础设施**全面占领：Google 开源 Agent 编排运行时 ax、AWS strands-agents 推出 harness-sdk、vectorize-io 发布可学习的 Agent 记忆系统 hindsight，巨头与初创同日押注 Agent 中间层。**“Agent Harness（智能体外壳/宿主）”正成为新的品类词**，obra/superpowers 与 strands-agents/harness-sdk 均围绕“让 Agent 真正能干活”的工程方法论。中国团队（HKUDS、dream-num）持续高产，Univer 定位“AI Agent 的 Office 运行时”视角独特。总体看，社区焦点已从“造 Agent”转向“让 Agent 接入一切软件、拥有持久记忆、降低 token 成本”。

## 二、Trending 榜单 AI 相关性过滤

**排除（非 AI 项目）**：
- FxEmbed/FxEmbed（社交媒体嵌入修复工具）
- mvt-project/mvt（移动设备取证工具）
- julyx10/lap（离线照片管理器）

**保留 11 个 AI 相关项目**，分类如下。

---

## 三、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

| 项目 | Stars | 说明 |
|---|---|---|
| [google/ax](https://github.com/google/ax) [Go] | +1373 today | Google 开源的 Agent 编排运行时，Go 语言生态切入 Agent 基建，今日榜首级新增量，代表大厂对 Agent 运行时标准化的争夺 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) [Python] | +413 today | “让所有软件 Agent 化”，配套 CLI-Hub 生态，直指 Agent 接入现实软件的最后一公里 |
| [leejet/stable-diffusion.cpp](https://github.com/leejet/stable-diffusion.cpp) [C++] | +36 today | 纯 C/C++ 推理 SD/Flux/Wan/Qwen Image 等扩散模型，端侧部署刚需，长青项目 |
| [NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer) [Python] | +44 today | NVIDIA 统一模型压缩库（量化/蒸馏/剪枝/投机解码），对接 TensorRT-LLM 与 vLLM，推理降本核心工具 |
| [ollama/ollama](https://github.com/ollama/ollama) [Go] | ⭐181,655 | 本地大模型运行事实标准，搜索榜常青树 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) [Rust] | ⭐8,720 | Rust 生态模块化 LLM 应用框架，性能敏感场景新选择 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、记忆）

| 项目 | Stars | 说明 |
|---|---|---|
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) [Python] | **+1668 today（今日第一）** | “会学习的 Agent 记忆”，登顶今日热榜，Agent Memory 赛道热度持续兑现 |
| [obra/superpowers](https://github.com/obra/superpowers) [Shell] | +611 today | Agent 技能框架 + 软件开发方法论，"Skills"路线的社区标杆 |
| [strands-agents/harness-sdk](https://github.com/strands-agents/harness-sdk) [Python] | +455 today | AWS 系开源 Agent Harness SDK，端到端控制生产级 Agent，Python/TS 双栈 |
| [superdesigndev/treg](https://github.com/superdesigndev/treg) [Python] | +468 today | 自称“Agent 工具的 OpenRouter”——工具调用统一路由层，新品类雏形 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) [Python] | ⭐248,764 | “与你一起成长的 Agent”，开源 Agent 全网最高星项目之一 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) [JavaScript] | ⭐267,000 | Claude Code/Codex/Cursor 的 harness 性能优化系统（技能+记忆+安全） |

### 📦 AI 应用（垂直场景产品）

| 项目 | Stars | 说明 |
|---|---|---|
| [dream-num/univer](https://github.com/dream-num/univer) [TypeScript] | +1082 today | 表格/文档/幻灯/Canvas 一体化运行时，官方定位“The Office Harness for AI Agents”，Agent 操作办公文档的事实底座 |
| [anthropics/financial-services](https://github.com/anthropics/financial-services) [Python] | +509 today | Anthropic 官方金融服务行业方案库，大厂加速垂直行业 Agent 落地的信号 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) [Python] | +347 today | AI 工程从零实战教程（双榜交叉：搜索榜 ⭐56,699），AI 工程化学习需求旺盛 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) [Python] | ⭐56,312 | 文档/主题 → 原生 PPT 生成，生产力场景爆款 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) [Python] | ⭐125,552 | AI 短视频全自动生成，内容自动化长青应用 |

### 🧠 大模型/训练（模型、训练、评估）

| 项目 | Stars | 说明 |
|---|---|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) [Python] | ⭐62,496 | 2 小时从零训练 64M 参数 LLM，“人人可训模型”教育标杆 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) [Jupyter] | ⭐105,525 | PyTorch 逐步实现 ChatGPT 级 LLM，经典教材项目 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) [Python] | ⭐4,724 | 在 Apple Silicon 上手写迷你 vLLM，推理系统学习首选 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) [Python] | ⭐7,472 | 支持 100+ 数据集的 LLM 评测平台，模型评估基建 |
| [huggingface/transformers](https://github.com/huggingface/transformers) [Python] | ⭐166,620 | 模型定义框架基石，多模态训练/推理全覆盖 |

### 🔍 RAG/知识库（检索增强、向量库、记忆层）

| 项目 | Stars | 说明 |
|---|---|---|
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) [Python] | ⭐121,231 | 将代码库/文档转为可查询知识图谱，Claude Code 技能形态，“无向量库 RAG”路线代表 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) [Python] | ⭐65,960 | Agent 记忆层标准件，与今日 hindsight 爆火呼应——Memory 赛道全面升温 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) [Python] | ⭐73,740 | 上下文压缩代理：JSON 省 60-95% token，成本焦虑的直接回应 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) [Python] | ⭐35,845 | 无向量、推理式 RAG 的文档索引，RAG 范式革新方向 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) [Python] | ⭐12,961 | MLSys 2026 最佳论文，存储省 97%、本地隐私 RAG |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) [Go] | ⭐46,250 | 云原生向量数据库标杆 |

---

## 四、趋势信号分析

**1. Agent 中间层迎来爆发日。** 今日热榜前三（hindsight +1668、ax +1373、univer +1082）全部属于 Agent 基础设施，且分别对应三个新细分：可学习记忆、编排运行时、文档运行时。Agent 竞争已从应用层下沉至“记忆—编排—环境”三层基建。

**2. “Agent Harness / Agent-Native”成为品类关键词。** strands-agents/harness-sdk、obra/superpowers、affaan-m/ECC、HKUDS/CLI-Anything 共同指向同一命题：如何让 Agent 可靠操控真实软件与 CLI。这是对 2025 年“Vibe Coding”浪潮的工程化收口。

**3. Token 成本优化成显学。** headroom（上下文压缩）、caveman（穴居人式压缩省 65% token）、NVIDIA Model-Optimizer（模型压缩）在三个层面同向发力，长上下文模型的推理成本是当前最大痛点。

**4. 与行业事件关联：** Google 开源 ax 暗示 Agent 运行时标准之争开启；Anthropic 发布金融行业库延续“行业 Skills”打法；国内（HKUDS、阿里 zvec、OceanBase）在 Agent 工具化与向量基建两端持续卡位。

---

## 五、社区关注热点

- **[vectorize-io/hindsight](https://github.com/vectorize-io/hindsight)** — 今日之星（+1668）。Agent 记忆从“存取”进化到“学习”，与 mem0/cognee/claude-mem 构成完整赛道，值得追踪其记忆更新机制设计。
- **[google/ax](https://github.com/google/ax)** — Google 正式下场 Agent 运行时，Go 生态稀缺玩家，其 API 设计可能成为编排层事实标准候选。
- **[dream-num/univer](https://github.com/dream-num/univer)** — “Agent 的 Office 运行时”定位独特：与其让 Agent 学会用 Office，不如让 Office 原生服务 Agent，环境层创新值得关注。
- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** — 港大团队高频输出（nanobot、Vibe-Trading 后又一作），CLI-Hub 若成规模将定义“软件 Agent 化”接入标准。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** + **[NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer)** — 上下文与模型双重压缩组合拳，是所有 Agent 生产部署降本的直接方案。

---
*数据来源：GitHub Trending（2026-09-25）+ GitHub Search API（7 天活跃）。Trending 中 stars 总量字段缺失（显示为 0），以今日新增数为准。*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*