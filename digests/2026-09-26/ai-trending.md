# AI 开源趋势日报 2026-09-26

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-26 04:05 UTC

---

# 📰 AI 开源趋势日报 · 2026-09-26

## 一、今日速览

1. **Agent Harness 生态全面爆发**：今日热榜被“Agent 管理层”项目占据——[paperclip](https://github.com/paperclipai/paperclip)（+2109）、[hindsight](https://github.com/vectorize-io/hindsight)（+1653）、[google/ax](https://github.com/google/ax)（+1379）三强领跑，标志着社区关注点从“Agent 能不能跑”转向“Agent 如何被管理、记忆和编排”。
2. **Agent Skills 成为新标准**：[anthropics/skills](https://github.com/anthropics/skills)、[obra/superpowers](https://github.com/obra/superpowers)、[mattpocock/skills](https://github.com/mattpocock/skills) 同日登榜，围绕 Claude Code 插件体系的“技能包”生态正在快速成型。
3. **教育类项目持续吸金**：[ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) 今日 +1177，AI 工程化学习的刚需不减。
4. **Agent 专用基础设施兴起**：[univer](https://github.com/dream-num/univer) 定位“AI Agents 的 Office 运行时”，Agent 与传统办公文档的接口层成为新赛道。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 说明 |
|---|---|---|
| [google/ax](https://github.com/google/ax) | +1379 today | Google 官方开源的 Agentic 编排运行时，大厂正式下场 Agent 基础设施，今日最值得关注的新项目之一 |
| [NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer) | +359 today | 统一的 SOTA 模型压缩库（量化/蒸馏/剪枝/投机解码），面向 TensorRT-LLM、vLLM 等推理框架的部署优化 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐181.7k | 本地大模型运行事实标准，已覆盖 Kimi、GLM、DeepSeek、gpt-oss、Qwen 等主流开源模型 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐166.7k | 模型定义框架的行业基石，文本/视觉/多模态训练与推理全覆盖 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐153.2k | 最流行的自托管 AI 界面，支持 Ollama/OpenAI 等多后端 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8.7k | Rust 生态模块化 LLM 应用框架，代表新兴技术栈方向 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 说明 |
|---|---|---|
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | +2109 today | 今日榜首。“人人都在用的 Agent 工作管理应用”，Agent 管理层（Agent Ops）的标杆项目 |
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | +1653 today | “会学习的 Agent 记忆”，Agent Memory 赛道今日爆点 |
| [obra/superpowers](https://github.com/obra/superpowers) | +468 today | Agent 技能框架 + 软件开发方法论，将 Skills 上升为工程实践 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | +583 today | 知名 TS 教育者 Matt Pocock 的个人 Agent Skills 集合，社区 KOL 效应显著 |
| [anthropics/skills](https://github.com/anthropics/skills) | +189 today | Anthropic 官方 Agent Skills 仓库，配套 [claude-plugins-official](https://github.com/anthropics/claude-plugins-official)（+83）构成官方插件生态 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐249.0k | “与你共同成长的 Agent”，话题搜索中星数最高的 Agent 项目 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐267.6k | Agent Harness 性能优化系统：技能、本能、记忆、安全一体化 |
| [androoAGI/starnet](https://github.com/androoAGI/starnet) | +93 today | 本地优先的桌面 Agent Harness，BYOK + 可视化 Agent 运行，玩法新颖 |

### 📦 AI 应用（具体应用产品、垂直场景）

| 项目 | Stars | 说明 |
|---|---|---|
| [dream-num/univer](https://github.com/dream-num/univer) | +1050 today | 定位“AI Agents 的 Office 运行时”——表格/文档/幻灯/画布/数据库一体，为 Agent 提供办公操作界面 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | ⭐72.8k | 开源 AI 求职助手：扫描职位、结构化评估、定制简历，跑在 Claude Code/Codex 等 CLI 中 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐56.4k | AI 生成原生 PowerPoint（含动画、图表、音频旁白），垂直办公场景爆款 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐52.2k | 300+ 助手的 AI 生产力工作室，统一接入主流 LLM |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐108.7k | 多智能体 LLM 金融交易框架；同赛道还有 [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading)（⭐34k）、[shy3130/tick-stock-panel](https://github.com/shy3130/tick-stock-panel)（+44 today，A 股量化工作台） |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐125.9k | 一键生成高清短视频的自动化 AI 工作流 |

### 🧠 大模型/训练（模型、训练框架、教学）

| 项目 | Stars | 说明 |
|---|---|---|
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | ⭐57.6k / +1177 today | AI 工程从零学起，今日教育类最热 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐105.6k | PyTorch 从零实现 ChatGPT 级 LLM，经典教学标杆 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐62.6k | 2 小时从零训练 64M 参数 LLM，中文社区现象级项目 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐200.3k | 老牌训练框架常青树 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | ⭐51.0k | 《深入理解 AI Agent》开源书 + 配套代码，Agent 工程化系统教材 |

### 🔍 RAG/知识库（向量数据库、检索增强、记忆）

| 项目 | Stars | 说明 |
|---|---|---|
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐66.0k | Agent 记忆层基础设施，与今日爆火的 hindsight 形成“记忆赛道”共振 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐121.5k | 将代码库转为可查询知识图谱的 Claude Code/Cursor 技能，无向量库路线 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐94.7k | 跨会话持久化 Agent 上下文，覆盖所有主流编码 Agent |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐91.3k | RAG + Agent 融合引擎，RAG 引擎头部项目 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐35.9k | 无向量、推理式 RAG 文档索引，代表反向量数据库的新路线 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐46.3k | 云原生向量数据库标杆；Rust 轻量级赛道看 [lancedb](https://github.com/lancedb/lancedb)（⭐11.5k）、[qdrant](https://github.com/qdrant/qdrant)（⭐34.8k） |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐73.8k | LLM 输入压缩层（token 节省 20–95%），上下文经济学方向 |

*已过滤的非 AI 项目：kelseyhightower/kubernetes-the-hard-way、derv82/wifit3、openbao/openbao。*

---

## 三、趋势信号分析

**爆发性关注集中在“Agent 管理层”**：paperclip、hindsight、google/ax 三者合计今日新增超 5000 stars，共同指向同一命题——当编码 Agent 已普及，谁来管理 Agent 本身？记忆（hindsight、claude-mem、mem0）、编排（google/ax）、技能分发（anthropics/skills 生态）正在构成 Agent Ops 三件套。**Agent Skills 是明确的新兴标准**：Anthropic 官方插件目录、superpowers、mattpocock/skills 同日登榜，说明 Skills 已从 Claude Code 特性演化为跨 Harness 的通用插件格式（graphify、career-ops 均围绕其构建）。**Agent 与办公软件的接口层首次成型**：univer 以"Office Harness for AI Agents"定位拿下 +1050，暗示下一波应用创新在“Agent 操作结构化文档”。此外，token 成本优化（headroom、caveman）与无向量 RAG（PageIndex、graphify）反映社区对“上下文经济学”的务实转向。教育侧 ai-engineering-from-scratch 的热度表明 Agent 工程师仍是稀缺人才供给。

---

## 四、社区关注热点

- **[paperclip](https://github.com/paperclipai/paperclip)**（+2109）：Agent 管理层爆发的风向标，值得跟踪其产品形态能否定义新品类。
- **[google/ax](https://github.com/google/ax)**（+1379）：Google 官方 Agentic 运行时，大厂入场或将重塑编排层竞争格局（对标 LangChain/dify）。
- **[hindsight](https://github.com/vectorize-io/hindsight)**（+1653）+ [mem0](https://github.com/mem0ai/mem0)：Agent 记忆赛道今日双热点，长期记忆技术选型窗口期。
- **Anthropic Skills 生态**（[skills](https://github.com/anthropics/skills) + [claude-plugins-official](https://github.com/anthropics/claude-plugins-official) + [superpowers](https://github.com/obra/superpowers)）：Skill 开发可能成为下一个 "MCP 时刻"，早入场者红利明显。
- **[univer](https://github.com/dream-num/univer)**（+1050）：为 Agent 提供文档/表格操作运行时，是 “Agent + 办公” 应用开发的底层选项。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*