# AI 开源趋势日报 2026-03-10

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-10 00:06 UTC

---

# AI 开源趋势日报 | 2026-03-10

---

## 第一步：AI 相关性筛选

**Trending 榜单筛选结果**：12 个项目中，**11 个为 AI 相关**，1 个非 AI 项目已排除：
- ❌ `Raphire/Win11Debloat` — Windows 系统优化脚本，与 AI 无关

---

## 第二步：项目分类

| 项目 | 主要分类 | 次要分类 |
|:---|:---|:---|
| openclaw/openclaw | 🔧 AI 基础工具 | 🤖 AI 智能体/工作流 |
| GoogleCloudPlatform/generative-ai | 🧠 大模型/训练 | 📦 AI 应用 |
| 666ghj/MiroFish | 🤖 AI 智能体/工作流 | 🧠 大模型/训练 |
| msitarzewski/agency-agents | 🤖 AI 智能体/工作流 | 📦 AI 应用 |
| karpathy/nanochat | 🧠 大模型/训练 | 🔧 AI 基础工具 |
| pbakaus/impeccable | 🔧 AI 基础工具 | 📦 AI 应用 |
| 666ghj/BettaFish | 📦 AI 应用 | 🤖 AI 智能体/工作流 |
| NousResearch/hermes-agent | 🤖 AI 智能体/工作流 | 🧠 大模型/训练 |
| alibaba/page-agent | 🤖 AI 智能体/工作流 | 🔧 AI 基础工具 |
| alirezarezvani/claude-skills | 🔧 AI 基础工具 | 🤖 AI 智能体/工作流 |
| teng-lin/notebooklm-py | 🔧 AI 基础工具 | 🔍 RAG/知识库 |

**主题搜索项目**按既定 topic 标签分类（llm/llm-model → 🔧/🧠, ai-agent → 🤖, rag → 🔍, vector-db → 🔍, ml → 🧠）

---

## 第三步：完整报告

---

### 1. 今日速览

今日 AI 开源领域呈现**"智能体基建爆发"**态势：OpenClaw 以 9164 星单日增速登顶，成为继 Claude Code、Codex 后的第三极 AI 编程助手；多 Agent 协作框架密集涌现，`agency-agents` 和 `MiroFish` 分别代表"专业化 Agent 团队"与"群体智能预测"两条路线；Google Cloud 官方生成式 AI 示例库热度攀升，反映企业级落地需求；值得关注的是，**"技能插件化"**成为共识——`claude-skills` 和 `notebooklm-py` 均围绕主流 AI 工具构建扩展生态。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [**openclaw/openclaw**](https://github.com/openclaw/openclaw) | 0 → **+9,164** ⭐ | 跨平台个人 AI 助手，定位"Claude Code/Codex 的开源替代"，以"龙虾哲学"强调极致灵活性与用户主权，今日增速全场最高 |
| [**ollama/ollama**](https://github.com/ollama/ollama) | **164,661** ⭐ | 本地大模型运行的事实标准，新增支持 Kimi-K2.5、GLM-5、MiniMax 等国产模型，持续巩固端侧 AI 基础设施地位 |
| [**pbakaus/impeccable**](https://github.com/pbakaus/impeccable) | 0 → **+1,288** ⭐ | 专为 AI 工具优化的设计语言系统，解决"AI 生成界面审美疲劳"痛点，让 Agent 输出更专业的设计交付物 |
| [**alirezarezvani/claude-skills**](https://github.com/alirezarezvani/claude-skills) | 0 → **+259** ⭐ | 169 个生产级技能插件，覆盖工程、营销、合规、高管顾问等场景，直接对标 Claude Code 的 /plugin 生态 |
| [**teng-lin/notebooklm-py**](https://github.com/teng-lin/notebooklm-py) | 0 → **+457** ⭐ | Google NotebookLM 的非官方 Python API，暴露 Web UI 未开放的程序化能力，补全 Google 官方生态缺口 |
| [**langgenius/dify**](https://github.com/langgenius/dify) | **131,797** ⭐ | 企业级 Agentic 工作流开发平台，"生产就绪"定位精准切中 B 端需求，TypeScript 全栈架构 |
| [**open-webui/open-webui**](https://github.com/open-webui/open-webui) | **126,431** ⭐ | 最活跃的开源 LLM 交互界面，Ollama/OpenAI API 双兼容，社区驱动的功能迭代速度极快 |
| [**firecrawl/firecrawl**](https://github.com/firecrawl/firecrawl) | **90,229** ⭐ | 网站转 LLM-ready 数据的专用 API，RAG  pipeline 的标配组件，解决"网页数据脏、结构乱"的痛点 |

#### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [**msitarzewski/agency-agents**](https://github.com/msitarzewski/agency-agents) | 0 → **+4,415** ⭐ | "完整 AI  agency 在手边"——从前端开发到 Reddit 社区运营，每个 Agent 带人格、流程、可交付成果，今日增速第二 |
| [**666ghj/MiroFish**](https://github.com/666ghj/MiroFish) | 0 → **+2,294** ⭐ | 简洁通用的**群体智能引擎**，"预测万物"的野心指向 Swarm Intelligence 在通用任务上的落地，中文项目 |
| [**NousResearch/hermes-agent**](https://github.com/NousResearch/hermes-agent) | 0 → **+377** ⭐ | Nous Research 出品，强调"与你共同成长"的渐进式 Agent，延续该团队在技术人性化方面的探索 |
| [**alibaba/page-agent**](https://github.com/alibaba/page-agent) | 0 → **+465** ⭐ | 阿里开源的**页内 GUI Agent**，用自然语言控制网页界面，浏览器自动化赛道的新玩家 |
| [**zhayujie/chatgpt-on-wechat**](https://github.com/zhayujie/chatgpt-on-wechat) | **42,066** ⭐ | 国产 CowAgent 代表，支持多平台接入（微信、飞书、钉钉）和主动任务规划，长期记忆 + Skill 自进化 |
| [**CherryHQ/cherry-studio**](https://github.com/CherryHQ/cherry-studio) | **41,112** ⭐ | 300+ 助手的 AI 生产力工作室，统一接入前沿 LLM，国产开源客户端的标杆 |
| [**activepieces/activepieces**](https://github.com/activepieces/activepieces) | **21,147** ⭐ | ~400 个 MCP 服务器的 AI 自动化平台，MCP 协议生态的集大成者 |
| [**trycua/cua**](https://github.com/trycua/cua) | **12,949** ⭐ | 计算机使用 Agent（Computer-Use Agent）的开源基础设施，支持 macOS/Linux/Windows 全桌面控制 |

#### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [**666ghj/BettaFish**](https://github.com/666ghj/BettaFish) | 0 → **+514** ⭐ | **微舆**：零框架实现的多 Agent 舆情分析助手，"打破信息茧房，预测未来走向"，中文垂直场景创新 |
| [**saturndec/waoowaoo**](https://github.com/saturndec/waoowaoo) | **8,923** ⭐ | 首家工业级全流程 **AI 影视生产平台**，从短片到真人电影的好莱坞标准工作流，影视工业化方向 |
| [**Panniantong/Agent-Reach**](https://github.com/Panniantong/Agent-Reach) | **7,679** ⭐ | 给 Agent 装上"互联网眼睛"——零 API 费读取 Twitter/Reddit/YouTube/小红书等内容，信息获取成本归零 |
| [**presenton/presenton**](https://github.com/presenton/presenton) | **4,281** ⭐ | Gamma/Beautiful AI 的开源替代，AI 演示文稿生成器 + API，办公生产力赛道 |
| [**OpenBB-finance/OpenBB**](https://github.com/OpenBB-finance/OpenBB) | **62,751** ⭐ | 金融数据平台明确转向"for analysts, quants **and AI agents**"，金融垂直场景的 Agent 化基础设施 |

#### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [**karpathy/nanochat**](https://github.com/karpathy/nanochat) | 0 → **+355** ⭐ | Andrej Karpathy 新作，"100 美元能买到的最佳 ChatGPT"——极致成本优化的本地模型方案 |
| [**GoogleCloudPlatform/generative-ai**](https://github.com/GoogleCloudPlatform/generative-ai) | 0 → **+1,282** ⭐ | Google 官方生成式 AI 示例库，Gemini on Vertex AI 的企业级实践，云厂商生态竞争白热化 |
| [**huggingface/transformers**](https://github.com/huggingface/transformers) | **157,664** ⭐ | 模型定义框架的事实标准，持续覆盖文本/视觉/音频/多模态全领域 |
| [**hiyouga/LlamaFactory**](https://github.com/hiyouga/LlamaFactory) | **68,111** ⭐ | 100+ LLM/VLM 统一高效微调，ACL 2024 成果，国产训练框架的国际影响力 |
| [**rasbt/LLMs-from-scratch**](https://github.com/rasbt/LLMs-from-scratch) | **87,539** ⭐ | PyTorch 从零实现 ChatGPT 类模型，教育系统性的标杆教程 |
| [**vllm-project/vllm**](https://github.com/vllm-project/vllm) | **72,617** ⭐ | 高吞吐、内存高效的 LLM 推理引擎，生产部署的默认选择 |
| [**OpenHands/OpenHands**](https://github.com/OpenHands/OpenHands) | **68,835** ⭐ | AI 驱动开发（AI-Driven Development）平台，代码生成 Agent 的集成环境 |
| [**The-Pocket/PocketFlow**](https://github.com/The-Pocket/PocketFlow) | **10,167** ⭐ | 100 行代码的极简 LLM 框架，"让 Agent 构建 Agent"的元编程理念 |

#### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [**infiniflow/ragflow**](https://github.com/infiniflow/ragflow) | **74,578** ⭐ | RAG + Agent 融合引擎，"为 LLM 提供卓越上下文层"，深度文档理解的差异化路线 |
| [**run-llama/llama_index**](https://github.com/run-llama/llama_index) | **47,519** ⭐ | 文档 Agent 与 OCR 平台，从向量检索向"文档智能"演进 |
| [**mem0ai/mem0**](https://github.com/mem0ai/mem0) | **49,181** ⭐ | AI Agent 的通用记忆层，解决长期上下文与个性化问题 |
| [**VectifyAI/PageIndex**](https://github.com/VectifyAI/PageIndex) | **20,987** ⭐ | **无向量、基于推理的 RAG**，"PageIndex"直接挑战传统向量检索范式 |
| [**topoteretes/cognee**](https://github.com/topoteretes/cognee) | **13,089** ⭐ | 6 行代码构建 AI Agent 记忆的知识引擎，极低门槛的内存管理 |
| [**meilisearch/meilisearch**](https://github.com/meilisearch/meilisearch) | **56,252** ⭐ | 闪电般速度的搜索引擎 API，AI 驱动的混合搜索成为核心卖点 |
| [**milvus-io/milvus**](https://github.com/milvus-io/milvus) | **43,278** ⭐ | 云原生高性能向量数据库，可扩展 ANN 搜索的企业级方案 |
| [**khoj-ai/khoj**](https://github.com/khoj-ai/khoj) | **33,315** ⭐ | 自托管的"AI 第二大脑"，个人知识管理 + 自主研究 Agent 的完整方案 |

---

### 3. 趋势信号分析

**爆发性关注类别：AI 编程助手/Agent 基础设施**  
今日最大信号是 **OpenClaw 的 9164 星单日增速**，标志着开发者对"Claude Code/Codex 开源替代"的强烈需求。这并非简单的代码生成工具，而是强调"Any OS. Any Platform"的**个人 AI 主权**理念——用户完全掌控的本地 Agent。与此同时，`agency-agents`（4415 星）和 `claude-skills`（技能插件市场）共同指向一个趋势：**AI 工具正从"单体智能"向"模块化、可扩展的 Agent 生态"演进**。

**新兴技术栈：无向量 RAG 与群体智能**  
`VectifyAI/PageIndex` 提出的"无向量、基于推理的 RAG"和 `MiroFish` 的"群体智能引擎"代表两条前沿探索。前者挑战向量数据库的统治地位，后者将 Swarm Intelligence 从学术概念推向通用预测场景，均值得持续关注。

**行业事件关联**  
Google Cloud 官方仓库热度（+1282 星）与 Gemini 在企业市场的推广直接相关；`notebooklm-py` 补全 Google NotebookLM 的 API 缺口，反映开发者对 Google AI 工具链的实用主义态度——官方不够，社区来凑。阿里 `page-agent` 的发布则显示国内大厂在 GUI Agent 赛道的紧迫布局。

---

### 4. 社区关注热点

- **🔥 OpenClaw — "第三极"AI 编程助手**  
  9164 星单日增速验证市场对开源、跨平台、用户主权型 AI 助手的饥渴。需关注其与 Claude Code、Codex、Cursor 的差异化竞争策略。

- **🦞 MiroFish — 群体智能的中国方案**  
  "简洁通用的群体智能引擎，预测万物"的宏大叙事 + 2294 星增速，Swarm Intelligence 能否从优化算法跃升为通用 AI 范式？

- **🧩 技能插件化生态战争**  
  `claude-skills`（169 个插件）、`notebooklm-py`（Agentic skill）、`agency-agents`（专业化 Agent）共同构建"AI 工具的扩展经济"，插件市场可能成为下一个流量入口。

- **🎬 AI 影视工业化 — waoowaoo**  
  首家"好莱坞标准"AI 影视生产平台，从短视频到真人电影的全流程覆盖，AIGC 内容生产的工业化拐点信号。

- **📄 无向量 RAG — PageIndex**  
  "Vectorless, Reasoning-based RAG"直接挑战 Chroma/Milvus/Pinecone 等向量数据库，若技术路线验证成功，将重塑检索增强的技术栈。

---

*报告生成时间：2026-03-10*  
*数据来源：GitHub Trending & Search API*

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*