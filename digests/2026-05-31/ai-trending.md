# AI 开源趋势日报 2026-05-31

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-05-31 04:06 UTC

---

# AI 开源趋势日报 (2026-05-31)

## 1. 今日速览

今日 AI 开源生态呈现出**“Agent 基建标准化”**与**“多模态生成爆发”**的双重特征。Anthropic 官方推出的 `claude-code` 及 `skills` 定义了 Agent 开发的新范式，带动了一大批周边优化工具（如 ECC、Compound Plugin）的崛起，标志着 Agent 正从“对话”走向“工程化 Harness”。同时，视频生成工具 `MoneyPrinterTurbo` 单日斩获近 3000 Star，TTS 领域开源模型井喷，显示 AIGC 在内容生产层面的落地应用已极为成熟。此外，RAG 领域出现了挑战传统向量检索的新方案，基于推理的 `PageIndex` 值得关注。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎）

- **[ollama/ollama](https://github.com/ollama/ollama)** ⭐172,691  
  本地大模型推理的事实标准，支持最新主流模型，持续领跑基础设施层。
- **[run-llama/liteparse](https://github.com/run-llama/liteparse)** ⭐0 (+925 today)  
  LlamaIndex 团队推出的高性能文档解析器，解决 RAG 落地中非结构化数据清洗的痛点，今日热度极高。
- **[microsoft/markitdown](https://github.com/microsoft/markitdown)** ⭐0 (+2470 today)  
  微软开源的文件转 Markdown 工具，为 LLM 处理 Office 文档提供了极简方案，今日新增 Star 亮眼。
- **[anthropics/claude-code](https://github.com/anthropics/claude-code)** ⭐0 (+592 today)  
  Anthropic 官方发布的终端 Agentic 编码工具，支持自然语言操控 Git 和代码库，定义了 CLI Agent 的新交互标准。
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** ⭐81,453  
  高吞吐量 LLM 推理引擎，工业级部署的首选，社区活跃度持续高涨。

### 🤖 AI 智能体/工作流（Agent 框架、自动化）

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** ⭐199,429 (+908 today)  
  通用的 Agent Harness 性能优化系统，为 Claude Code、Cursor 等提供技能、记忆和安全加固，今日 Trending 热门。
- **[anthropics/skills](https://github.com/anthropics/skills)** ⭐0 (+454 today)  
  Anthropic 官方发布的 Agent Skills 仓库，旨在建立 Agent 能力调用的公共标准，具有里程碑意义。
- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** ⭐0 (+2768 today)  
  利用 AI 大模型一键生成短视频的工具，今日增长最快项目，体现了 Agent 在内容创作工作流中的巨大潜力。
- **[revfactory/harness](https://github.com/revfactory/harness)** ⭐0 (+55 today)  
  元技能设计平台，专注于自动生成特定领域的 Agent 团队和技能，展示了“Agent 工厂”的雏形。
- **[EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin)** ⭐0 (+349 today)  
  连接 Claude Code、Cursor 等多工具的复合工程插件，反映了跨平台 Agent 协作的强烈需求。
- **[langgenius/dify](https://github.com/langgenius/dify)** ⭐143,217  
  老牌 AI 工作流平台，持续迭代，稳居 Agent 开发平台头部地位。

### 📦 AI 应用（具体应用产品、垂直场景）

- **[OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM)** ⭐0 (+779 today)  
  无需 Tokenizer 的多语言语音生成模型，支持声音设计和克隆，技术路线新颖，今日备受关注。
- **[OpenMOSS/MOSS-TTS](https://github.com/OpenMOSS/MOSS-TTS)** ⭐0 (+62 today)  
  高保真、高表现力的开源语音生成模型家族，覆盖长语音和对话场景，国产开源力量在语音领域的突破。
- **[ruvnet/RuView](https://github.com/ruvnet/RuView)** ⭐0 (+655 today)  
  利用 WiFi 信号进行实时空间智能和生命体征监测，无需摄像头，展示了“非视觉 AI 感知”的创新应用。
- **[Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad)** ⭐0 (+469 today)  
  集成 AI 的离线生存计算机，体现了极端环境下边缘 AI 计算的应用探索。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

- **[galilai-group/stable-worldmodel](https://github.com/galilai-group/stable-worldmodel)** ⭐0 (+318 today)  
  面向可复现研究的世界模型平台，随着 LeCun 等人对世界模型的推崇，该方向正成为新的研究热点。
- **[FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch)** ⭐0 (+327 today)  
  从零训练 LLM 的完整教程，数据下载到文本生成全流程，适合开发者深入理解模型底座。
- **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)** ⭐71,730  
  统一的大模型微调框架，支持百种模型，是模型定制化训练的必备工具。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** ⭐32,347  
  提出“无向量、基于推理的 RAG”，试图颠覆传统向量检索范式，极具前瞻性。
- **[run-llama/llama_index](https://github.com/run-llama/llama_index)** ⭐49,786  
  领先的文档 Agent 和 OCR 平台，今日发布的 `liteparse` 进一步巩固了其生态壁垒。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐57,163  
  通用记忆层，解决 Agent 跨会话记忆难题，是 Agent 长期记忆的事实标准。
- **[memvid/memvid](https://github.com/memvid/memvid)** ⭐15,593  
  用单文件视频作为记忆层替代复杂 RAG 管道，为 Agent 记忆存储提供了低成本新思路。

---

## 3. 趋势信号分析

**1. Agent Harness 与 Skills 成为新焦点**
今日 Trending 榜单被 Anthropic 生态“承包”了。从官方的 `claude-code`、`skills` 到社区迅速跟进的 `ECC`（优化系统）、`Compound Engineering Plugin`（插件），清晰地显示出 AI 开发重心的转移：开发者不再仅仅关注模型能力，而是聚焦于**如何构建健壮、安全、可扩展的 Agent 框架**。Agent 正在从“单一智能体对话”向“多技能、多智能体协作系统”演进。

**2. RAG 技术栈的“自我革命”**
在 RAG 领域，出现了一个明显的反直觉信号。`PageIndex` 提出的“Vectorless RAG”和 `memvid` 的“视频即内存”方案，都在试图解决向量数据库维护成本高、检索精度受限的问题。这表明社区正在反思过去两年的 RAG 狂热，寻求更轻量或更符合 LLM 推理特性的检索方案。

**3. 多模态生成从“能用”到“好用”**
`MoneyPrinterTurbo` 的爆发式增长（单日 +2768）和 `VoxCPM`、`MOSS-TTS` 的上榜，标志着开源多模态工具已跨越“Demo 阶段”，进入实用与商业化落地的爆发期。特别是视频生成领域，一键生成、低成本、高质量的开源方案正在重塑短视频内容生产流程。

---

## 4. 社区关注热点

- **[anthropics/skills](https://github.com/anthropics/skills)**：**强烈推荐关注**。这是 Anthropic 建立的 Agent 技能标准库，预示着未来 Agent 开发可能类似于现在的 npm 生态，标准化技能调用将是关键。
- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)**：今日最火爆的 C 端生产力工具，对于关注 AI 视频变现和自动化工作流的开发者极具参考价值。
- **[run-llama/liteparse](https://github.com/run-llama/liteparse)**：RAG 系统的前置依赖，解决了“垃圾进，垃圾出”的数据清洗难题，基于 Rust 开发，性能优越，建议集成测试。
- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)**：如果你的 RAG 项目受困于向量检索的精度，这个“无向量”方案提供了一个全新的解题思路，适合架构师深入研究。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*