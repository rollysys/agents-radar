# AI 开源趋势日报 2026-03-08

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-08 02:27 UTC

---

# 🤖 AI 开源趋势日报（2026-03-08）

---

## 今日速览

今日 GitHub Trending 呈现 **AI Agent 爆发** 态势：多智能体协作框架 `agency-agents` 今日新增 stars 高达 +1,468，OpenAI Codex 技能库 `openai/skills` 紧随其后 (+948)。同时，阿里巴巴连入两元：`Qwen-Agent` 和 `page-agent` 分别代表模型层与应用层发力。向量数据库持续火热，Qdrant、Chroma 等新锐项目稳居主题搜索前列。值得关注的是，Elixir 语言首次出现 AI Agent 框架 `jido`，显示边缘计算与分布式 AI 的探索正在延伸至更多技术栈。

---

## 各维度热门项目

### 🔧 AI 基础工具

| 项目 | Stars | 一句话说明 |
|------|-------|------------|
| [ollama/ollama](https://github.com/ollama/ollama) | 164,380 | 本地 LLM 运行时，支持 Kimi-K2.5、GLM-5、Qwen 等主流模型一键部署 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 72,362 | 高吞吐、低显存 LLM 推理引擎，生产环境首选 |
| [microsoft/hve-core](https://github.com/microsoft/hve-core) | 今日+217 | Hypervelocity Engineering 组件库，面向 Copilot 生态的工程化提示词与技能集 |
| [openai/skills](https://github.com/openai/skills) | 今日+948 | Codex 技能目录，OpenAI 官方发布的可复用 AI 能力组件库 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 6,303 | Rust 语言构建模块化、可扩展 LLM 应用的框架 |

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 一句话说明 |
|------|-------|------------|
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | 今日+1,468 | **今日榜首**。全栈 AI Agency 框架，涵盖前端、Reddit 运营、创意注入等多类专业化 Agent |
| [QwenLM/Qwen-Agent](https://github.com/QwenLM/Qwen-Agent) | 今日+586 | 阿里 Qwen3.0+ Agent 框架，支持 Function Calling、MCP、代码解释器、RAG |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 79,863 | 让 AI 代理操控浏览器自动化执行网页任务的事实标准 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 68,731 | AI 驱动的软件工程代理，替代人类开发者完成编码任务 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 29,214 | 前端 Agent 开发框架，React/Angular 生态的生成式 UI 基础设施 |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | 今日+137 | 页面内 GUI 代理，用自然语言控制 Web 界面交互 |
| [trycua/cua](https://github.com/trycua/cua) | 12,910 | 开源计算机使用代理基础设施，支持 macOS/Linux/Windows 桌面控制 |

### 📦 AI 应用

| 项目 | Stars | 一句话说明 |
|------|-------|------------|
| [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | 今日+248 | AI 对冲基金团队，展示大模型在金融量化领域的应用原型 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 89,226 | Web 数据抓取 API，将整站转换为 LLM 可用的 Markdown/结构化数据 |
| [langgenius/dify](https://github.com/langgenius/dify) | 131,557 | 生产级 Agent 工作流开发平台，LLM 应用编排的事实标准 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 126,123 | 用户友好的本地 AI 界面，支持 Ollama、OpenAI API 等多后端 |
| [GoogleCloudPlatform/generative-ai](https://github.com/GoogleCloudPlatform/generative-ai) | 今日+384 | GCP 生成式 AI 示例与笔记本，Vertex AI Gemini 官方教程库 |
| [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | 今日+281 | 下一代知识库，融合计划、排序、创作，隐私优先的 Notion/Miro 替代品 |

### 🧠 大模型 / 训练

| 项目 | Stars | 一句话说明 |
|------|-------|------------|
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 68,015 | 统一高效微调 100+ LLM/VLM，ACL 2024 论文官方实现 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 87,363 | 手把手用 PyTorch 从零实现 ChatGPT 类 LLM 的教程项目 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 6,725 | 开源 LLM 评测平台，支持 100+ 数据集、Llama3/GPT-4/Qwen 等主流模型 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 128,568 | Agent 工程平台，LLM 应用开发的基础设施级框架 |

### 🔍 RAG / 知识库

| 项目 | Stars | 一句话说明 |
|------|-------|------------|
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | 56,217 | 闪电级搜索 API，支持 AI 混合搜索，向量与关键词融合检索 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 47,452 | 文档代理与 OCR 平台，RAG 场景的文档处理核心库 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 43,183 | 云原生高性能向量数据库，支持大规模 ANN 检索 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 29,355 | Rust 实现的高性能向量搜索引擎，RAG 场景新宠 |
| [chroma-core/chroma](https://github.com/chroma-core/chroma) | 26,502 | 开源 AI 检索数据库，嵌入向量管理的轻量选择 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 48,991 | AI Agent 通用记忆层，让代理拥有长期上下文 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 50,498 | 可视化构建 AI Agent 与 RAG 流程，低代码赋能开发者 |
| [khoj-ai/khoj](https://github.com/khoj-ai/khoj) | 33,263 | 自托管 AI 第二大脑，支持自定义 Agent 与自动化研究 |

---

## 趋势信号分析

今日 Trending 最显著的信号是 **AI Agent 框架的爆发式增长**。`agency-agents` 以单日 +1,468 stars 登顶，远超其他项目，反映社区对多 Agent 协作系统的强烈需求。OpenAI `skills` 项目的上榜 (+948) 表明技能化、模块化的 AI 能力复用正在成为共识——这与近期 Codex 能力增强密切相关。

从技术栈角度看，**Elixir 语言的 AI Agent 框架**（`jido`）首次出现在 Trending 中，释放了分布式、边缘 AI 部署的探索信号。阿里巴巴今日双点出击：`Qwen-Agent`（模型层 Agent 框架）和 `page-agent`（应用层 GUI 代理）分别代表从基础模型到终端交互的全链路布局。

向量数据库赛道持续稳固，Qdrant、Chroma、Weaviate 等项目在主题搜索中保持高频曝光，显示 **RAG 作为 LLM 应用标配** 的地位不可动摇。金融场景（`ai-hedge-fund`）和知识管理（`AFFiNE`）的入榜则表明 AI 应用正在向垂直领域加速渗透。

---

## 社区关注热点

- **`agency-agents`**：多 Agent 协作系统今日最佳，+1,468 stars，适合搭建企业级 AI Agency
- **`QwenLM/Qwen-Agent`**：阿里 Qwen3.0 原生 Agent 框架，MCP/Function Calling 能力完整，国内开发者首选
- **`browser-use`**：网页自动化领域事实标准，79k+ stars，AI Agent 操控浏览器的核心基础设施
- **`qdrant` / `chroma`**：向量数据库仍是 RAG 刚需，Rust 栈的 Qdrant 在性能与易用性上优势明显
- **`LlamaFactory`**：多 LLM 微调工具，68k stars，适合需要私有化模型定制的团队

---

*数据来源：GitHub Trending（2026-03-08）+ AI 主题搜索（7日内活跃）*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*