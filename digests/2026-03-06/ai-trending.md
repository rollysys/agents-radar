# AI 开源趋势日报 2026-03-06

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-06 00:13 UTC

---

# AI 开源趋势日报 | 2026-03-06

---

## 第一步：AI 相关性过滤

**Trending 榜单筛选结果（11→9个AI相关）**：
- ✅ 保留：agency-agents、seomachine、shannon、airi、AReaL、mcp-for-beginners、codebuff、MoneyPrinterV2、ReMe
- ❌ 排除：trivy（安全扫描工具）、hve-core（Hyper-V工程组件，非AI核心）

**主题搜索**：79个仓库均为AI相关，全部保留

---

## 第二步：多维分类

| 项目 | 主要分类 | 次要分类 |
|:---|:---|:---|
| agency-agents | 🤖 AI智能体/工作流 | 📦 AI应用 |
| seomachine | 📦 AI应用 | 🤖 AI智能体/工作流 |
| shannon | 🤖 AI智能体/工作流 | 📦 AI应用 |
| airi | 📦 AI应用 | 🤖 AI智能体/工作流 |
| AReaL | 🧠 大模型/训练 | |
| mcp-for-beginners | 🔧 AI基础工具 | 🤖 AI智能体/工作流 |
| codebuff | 🔧 AI基础工具 | 🤖 AI智能体/工作流 |
| MoneyPrinterV2 | 📦 AI应用 | |
| ReMe | 🔍 RAG/知识库 | 🤖 AI智能体/工作流 |
| dify/langchain/open-webui 等 | 🔧 AI基础工具 | 🤖 AI智能体/工作流 |
| mem0/claude-mem/cognee 等 | 🔍 RAG/知识库 | 🤖 AI智能体/工作流 |
| milvus/qdrant/chroma 等 | 🔍 RAG/知识库 | |
| ollama/vllm/transformers 等 | 🧠 大模型/训练 | 🔧 AI基础工具 |
| browser-use/OpenHands 等 | 🤖 AI智能体/工作流 | 🔧 AI基础工具 |

---

## 第三步：完整报告

### 1. 今日速览

今日AI开源领域呈现**"智能体工具链爆发"**态势：微软MCP教程登榜标志协议标准化加速；网络安全AI智能体Shannon以96%攻击成功率刷新自主渗透测试标杆；多智能体协作框架agency-agents单日获1468星，显示开发者对"AI团队"模式的强烈需求。与此同时，记忆层技术（ReMe、mem0）与Claude Code生态插件持续升温，AI编程助手正从"单点工具"向"全流程记忆增强系统"演进。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [microsoft/mcp-for-beginners](https://github.com/microsoft/mcp-for-beginners) | 新上榜 | +137 | 微软官方MCP入门课程，覆盖.NET/Java/TS/Rust/Python五语言，推动Model Context Protocol成为AI工具互操作标准 |
| [CodebuffAI/codebuff](https://github.com/CodebuffAI/codebuff) | 新上榜 | +275 | 终端代码生成工具，主打"自然语言→可运行代码"的极简交互 |
| [langgenius/dify](https://github.com/langgenius/dify) | 131,337 | - | 生产级Agent工作流开发平台，RAG+Agent双引擎驱动 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 128,372 | - | Agent工程平台事实标准，今日主题搜索仍居榜首 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 125,876 | - | 支持Ollama/OpenAPI的统一AI界面，本地化部署首选 |
| [ollama/ollama](https://github.com/ollama/ollama) | 164,200 | - | 本地大模型运行标杆，已支持Kimi-K2.5/GLM-5/DeepSeek等最新模型 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 72,137 | - | 高吞吐LLM推理引擎，生产环境部署核心基础设施 |

#### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | 新上榜 | **+1468** | "完整AI agency"多智能体系统，含前端专家、社区运营等角色化Agent，今日增速冠军 |
| [KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon) | 新上榜 | **+2930** | 全自主AI渗透测试工具，XBOW基准96.15%成功率，网络安全Agent新标杆 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 79,687 | - | 让AI Agent操控浏览器的核心基础设施，Web自动化领域头部项目 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 68,619 | - | AI驱动软件开发平台，"AI程序员"方向代表性开源方案 |
| [trycua/cua](https://github.com/trycua/cua) | 12,861 | - | 计算机使用Agent（Computer-Use Agent）开源基础设施，支持macOS/Linux/Windows桌面控制 |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 21,086 | - | 集成~400个MCP服务器的AI工作流自动化平台 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 29,186 | - | React/Angular前端Agent框架，专注生成式UI与嵌入式AI助手 |

#### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | 新上榜 | **+3006** | 自托管"虚拟伴侣"系统，支持实时语音、Minecraft/Factorio游戏交互，今日新增星标最高 |
| [TheCraigHewitt/seomachine](https://github.com/TheCraigHewitt/seomachine) | 新上榜 | +310 | Claude Code专用SEO长文工作区，垂直场景AI内容生产工具 |
| [FujiwaraChoki/MoneyPrinterV2](https://github.com/FujiwaraChoki/MoneyPrinterV2) | 新上榜 | +511 | "自动化在线赚钱"系统，AI驱动内容变现的争议性但高关注项目 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 40,820 | - | 300+助手的AI生产力工作室，统一接入主流LLM |
| [waoowaooAI/waoowaoo](https://github.com/waoowaooAI/waoowaoo) | 8,328 | - | 工业级AI影视生产平台，从短片到真人电影的好莱坞标准工作流 |
| [presenton/presenton](https://github.com/presenton/presenton) | 4,240 | - | 开源AI演示文稿生成器，Gamma/Beautiful AI替代方案 |

#### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [inclusionAI/AReaL](https://github.com/inclusionAI/AReaL) | 新上榜 | +173 | 轻量化RL训练框架，专注LLM推理与Agent能力强化，"简单灵活"定位 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 157,449 | - | 模型定义框架标准，覆盖文本/视觉/音频/多模态全领域 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 67,931 | - | 100+模型统一高效微调（ACL 2024），LoRA/QLoRA等方案集成 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 87,213 | - | 从零实现ChatGPT式LLM，PyTorch教学标杆 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 3,890 | - | Apple Silicon上的LLM推理服务课程，vLLM+Qwen实战 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 6,277 | - | Rust模块化LLM应用框架，系统级性能导向 |

#### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [agentscope-ai/ReMe](https://github.com/agentscope-ai/ReMe) | 新上榜 | +194 | Agent记忆管理工具包，"记住我、精炼我"的主动式记忆架构 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 48,832 | - | AI Agent通用记忆层，跨会话长期记忆的行业标准方案 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 33,046 | - | Claude Code会话记忆插件，AI压缩+上下文注入，编程场景深度优化 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 12,961 | - | 6行代码构建Agent记忆知识引擎，低门槛RAG新选择 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 74,241 | - | 开源RAG引擎+Agent能力融合，上下文层构建领先方案 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 43,150 | - | 云原生向量数据库，大规模ANN搜索基础设施 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 29,312 | - | 高性能向量搜索引擎，Rust实现，云原生架构 |

---

### 3. 趋势信号分析（约280字）

**智能体基础设施进入"协议标准化+垂直场景"双轨爆发期**。今日两大信号尤为关键：一是微软官方MCP教程登榜，标志着Model Context Protocol从社区提案走向企业级标准，AI工具互操作性难题有望系统性解决；二是网络安全AI智能体Shannon以96%攻击成功率刷新自主渗透测试能力边界，证明Agent在**高风险决策场景**的实用化突破。

**新兴技术栈方面**，Rust在AI基础设施层加速渗透——qdrant向量库、rig LLM框架、memvid记忆层均选用Rust，系统级性能与内存安全成为新刚需。同时，**"记忆层"（Memory Layer）**正从RAG的附属功能升级为独立架构：ReMe、claude-mem、cognee三项目同日活跃，显示开发者对Agent长期记忆、跨会话连贯性的迫切需求。

与行业事件关联上，Claude Code生态持续扩张（seomachine、claude-mem、everything-claude-code），Anthropic的编程Agent正形成插件化工具链；而AReaL的轻量RL框架则呼应了DeepSeek-R1引发的推理模型训练热潮。

---

### 4. 社区关注热点

- **🔥 [KeygraphHQ/shannon](https://github.com/KeygraphHQ/shannon)** — 网络安全Agent新标杆，96%自主渗透成功率证明AI在"红队测试"场景已具备实用价值，安全+AI交叉领域值得深耕

- **🔥 [moeru-ai/airi](https://github.com/moeru-ai/airi)** — "虚拟伴侣+游戏Agent"融合形态，支持Minecraft/Factorio实时交互，AI角色从对话工具向"数字生命"演进的风向标

- **🔥 [microsoft/mcp-for-beginners](https://github.com/microsoft/mcp-for-beginners)** — 微软背书MCP协议，五语言覆盖降低接入门槛，建议所有AI工具开发者关注以保障未来互兼容性

- **🔥 [agentscope-ai/ReMe](https://github.com/agentscope-ai/ReMe)** + **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — 记忆层工具同日爆发，Agent"遗忘问题"进入工程化解决阶段，长期记忆架构设计成为Agent开发核心技能

- **🔥 [inclusionAI/AReaL](https://github.com/inclusionAI/AReaL)** — 轻量RL训练框架，"推理模型"训练门槛降低的信号，跟进DeepSeek-R1技术路线的实用工具

---

*报告生成时间：2026-03-06 | 数据来源：GitHub Trending & Search API*

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*