# AI 开源趋势日报 2026-10-11

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-10-11 04:43 UTC

---

# 📰 AI 开源趋势日报（2026-10-11）

## 一、今日速览

今日热榜最显著的现象是「**Agent 工程化**」的全面爆发：以 [morluto/rea](https://github.com/morluto/rea)（+25,793 stars）为代表的 Agent 逆向工程工具单日狂揽 2.5 万 stars，领跑全榜。与此同时，「**Skills / Agent 配置资产**」成为新品类——[mattpocock/skills](https://github.com/mattpocock/skills)、[anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)、Karpathy 观察衍生的 CLAUDE.md 配置等项目密集上榜，说明社区重心正从「用什么 Agent」转向「**如何调教 Agent**」。上下文优化（context-mode、headroom、caveman、claude-mem）作为独立赛道已成型。传统 ML 基础设施（TensorFlow、PyTorch、Transformers）仅维持日常热度，榜单话语权已明显让位于应用层。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具）

| 项目 | Stars | 说明 |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | 182,679 | 本地 LLM 运行时事实标准，已支持 Kimi、GLM、MiniMax、gpt-oss、Qwen 等新一代开源模型 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 154,237 | 最流行的自托管 AI 界面，兼容 Ollama/OpenAI API |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 167,340 (+96 today) | 模型定义框架基石，多模态训练与推理的统一入口 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 104,181 (+84 today) | 深度学习训练框架核心，稳态运行 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 200,769 (+26 today) | 老牌 ML 框架，热度平稳但增长趋缓 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | 62,372 | YOLO27/26 系列持续迭代，CV 落地首选 |
| [Codewhale](https://github.com/codewhale-hq/Codewhale) | 41,081 | Rust 编写的开源 Agent 引擎 + 终端客户端，主打供应商自由选择与审批审计 |

### 🤖 AI 智能体/工作流

| 项目 | Stars | 说明 |
|---|---|---|
| [morluto/rea](https://github.com/morluto/rea) | +25,793 today 🔥 | 今日榜首：用 Agent 逆向工程任何东西——从 App 行为到原生二进制，Agent 能力边界的标志性探索 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 252,588 | "与你一起成长的 Agent"，累计 stars 极高，个人 Agent 赛道头部 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 117,589 | 让 Agent 操作浏览器，Web 自动化基础设施 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | 43,034 | 构建可靠 Agent 的图编排框架，生产级多 Agent 首选 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 37,920 | Agent 前端栈 + AG-UI 协议，Generative UI 方向代表 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 48,940 | 港大开源超轻量自托管个人 Agent 框架，WebUI + MCP + 多 Agent |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 47,334 | chatgpt-on-wechat 作者新作，可自我进化的个人 AI 助理 Harness |
| [mattpocock/skills](https://github.com/mattpocock/skills) | +1,736 today | TypeScript 知名教育者的 Agent Skills 集合，"Skills 即资产"的信号项目 |

### 📦 AI 应用

| 项目 | Stars | 说明 |
|---|---|---|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 276,607 | Agent Harness 性能优化系统（Skills/本能/记忆/安全），累计 stars 全场最高 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 190,259 | 面向 Agent 的网页数据获取引擎 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 59,646 (+461 today) | 今日上榜：文档/主题 → 原生 PowerPoint（原生图形、动画、图表、语音旁白），办公垂直应用标杆 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 52,525 | AI 生产力工作站，300+ 助手统一接入前沿模型 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | 73,995 | 本地运行的 AI 求职 Agent：JD 评分、简历定制、面试准备全流程 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 95,541 | 给 Agent 装上"互联网之眼"，免 API 费读取 Twitter/Reddit/YouTube/小红书等 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 129,508 | 一键生成高清短视频的成熟 AI 工作流应用 |

### 🧠 大模型/训练

| 项目 | Stars | 说明 |
|---|---|---|
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,508 | LLM 评测平台，覆盖 100+ 数据集，模型横评基础设施 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | 318 | 端侧 LLM 推理，X-Bit 量化技术，端侧方向值得关注 |
| [thinkwee/AwesomeOPD](https://github.com/thinkwee/AwesomeOPD) | 874 | On-Policy Distillation 论文清单——蒸馏新范式的研究热点追踪 |
| [thinkwee/AgentsMeetRL](https://github.com/thinkwee/AgentsMeetRL) | 1,863 | Agentic RL 论文合集，Agent × 强化学习交叉前沿 |
| [acon96/home-llm](https://github.com/acon96/home-llm) | 1,455 | 本地 LLM 控制智能家居的 Home Assistant 集成 |

### 🔍 RAG/知识库

| 项目 | Stars | 说明 |
|---|---|---|
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 147,571 | 定位已演化为 "Agent 工程平台" |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 125,341 | 代码库/文档/PDF → 可查询知识图谱，主打确定性 AST 解析、无需向量库，"去向量库 RAG"代表 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 99,333 | 跨会话持久化 Agent 记忆，兼容十余个主流 Coding Agent |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 91,979 | RAG + Agent 深度融合的引擎 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 74,965 | 工具输出/RAG 分块压缩，JSON 场景省 60-95% token |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 46,349 | 云原生向量数据库标杆 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 13,016 | MLSys2026 最佳论文：省 97% 存储的个人设备端 RAG |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 39,048 | "无向量、基于推理"的文档索引——与 Graphify 共同印证向量库替代路线 |

---

## 三、趋势信号分析

**1. Agent 调教资产成最大增量品类。** 今日热榜中 rea、mattpocock/skills、knowledge-work-plugins、karpathy-skills、context-mode 五个项目同属「让 Coding Agent 更好用」的配置/技能层。Anthropic 官方入场开源 Claude 插件，说明 Skills 生态已被平台方认可为战略资产。

**2. 上下文经济学（Context Economics）赛道成型。** headroom（压缩 60-95% token）、context-mode（沙箱化工具输出，降 98%）、caveman（省 65% token）、claude-mem（记忆持久化）从不同角度攻击同一问题——上下文窗口的成本与注意力稀缺。随着 Agent 长会话成为常态，这是确定性最强的工程方向。

**3. RAG 范式分化。** Graphify 与 PageIndex 均高举"无向量库"旗帜，用知识图谱或推理替代 embedding 检索；LEANN 则在存储端做激进优化。向量数据库并未衰落（Milvus/Qdrant 依旧强势），但"确定性检索 + 推理"路线已获得社区实质投票。

**4. 基础层与应用层热度倒挂加剧。** TensorFlow/PyTorch/Transformers 单日新增均不足 100，而 Agent 工具单日破千甚至破万——开源社区的创新重心已完全上移至应用与编排层，与近月 Agent-first 模型（gpt-oss、Kimi、GLM 等）密集发布直接相关。

---

## 四、社区关注热点

- **[morluto/rea](https://github.com/morluto/rea)**（+25,793 today）— 单日现象级项目，Agent 用于逆向工程开辟了全新用例方向，值得观察其可持续性。
- **[anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)**（+625 today）— Anthropic 官方开源知识工作者插件库，预示 Claude 生态的 Skills 标准化，平台信号强烈。
- **[headroom](https://github.com/headroomlabs-ai/headroom) + [context-mode](https://github.com/mksglu/context-mode)** — 上下文压缩双雄，任何在长会话 Agent 上烧 token 的团队都应评估。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)**（125k stars）— 无向量库的代码知识图谱方案，RAG 架构选型的新变量。
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)**（66k）— 零成本定时运行的 LLM 股票分析系统，"LLM + 个人自动化"在国内社区的爆款样本，可复用其多源数据编排模式。

---
*数据来源：GitHub Trending（今日）+ Topic Search（7 日活跃）；stars 总量以搜索接口为准，Trending 项今日新增为实时数据。*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*