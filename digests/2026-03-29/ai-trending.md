# AI 开源趋势日报 2026-03-29

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-29 02:43 UTC

---

你好！我是 AI 开源生态技术分析师。基于 2026-03-29 的 GitHub 数据，我为你整理了今日的《AI 开源趋势日报》。

---

# 📰 AI 开源趋势日报 (2026-03-29)

## 1. 今日速览
今日 AI 开源领域呈现出**“全自动科研”与“垂直领域 Agent”**双重爆发的趋势。SakanaAI 发布的 *AI-Scientist-v2* 引爆了社区对“AI 自主发现科学规律”的讨论，标志着 Agentic 工作流从简单的任务执行向复杂逻辑推理迈进。同时，金融分析 Agent *dexter* 和金融数据平台 *OpenBB* 的热度居高不下，显示 AI 在高价值垂直场景的落地正在加速。此外，文档解析工具 *chandra* 的走红解决了多模态 RAG 的“最后一公里”难题，而 *Deep-Live-Cam* 的持续霸榜则证明实时生成式 AI 在消费端仍有巨大需求。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎）
> 重点：工具链正在向“Agent 原生”演进，不仅支持模型推理，更支持工具调用与沙箱运行。

| 项目 | Stars | 说明 |
| :--- | :--- | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐166,358 | **本地大模型运行标配**。支持最新 Kimi、DeepSeek 等模型，依然是开发者在本地验证模型的首选工具。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐74,588 | **高性能推理引擎**。生产级 LLM 服务端的性能基石，专注于高吞吐量和内存优化。 |
| [e2b-dev/E2B](https://github.com/e2b-dev/E2B) | ⭐11,483 (+148*) | **Agent 安全沙箱**。为 AI 代码执行提供隔离环境，是构建可靠 AI Engineer 的底层基础设施。 |
| [alibaba/OpenSandbox](https://github.com/alibaba/OpenSandbox) | ⭐9,464 | **国产 Agent 沙箱**。阿里推出的高性能沙箱运行时，强调安全与扩展性，适合企业级 Agent 部署。 |
| [jackwener/opencli](https://github.com/jackwener/opencli) | ⭐8,431 | **AI 原生 CLI 运行时**。将任意网站或工具转化为标准 CLI，专为 Agent 自动发现和调用工具而设计。 |

> *注：今日新增数据未完全提供，标 * 为基于热度的估算关注值。

### 🤖 AI 智能体/工作流
> 重点：从通用聊天转向“自主研究”与“系统控制”，Agent 开始具备长期规划能力。

| 项目 | Stars | 说明 |
| :--- | :--- | :--- |
| [SakanaAI/AI-Scientist-v2](https://github.com/SakanaAI/AI-Scientist-v2) | ⭐0 (+506 today) | **🔥 今日最热**。全自动科研 Agent，利用树搜索实现研讨会级别的科学发现，展示了 AI 的顶级推理能力。 |
| [virattt/dexter](https://github.com/virattt/dexter) | ⭐0 (+581 today) | **金融研究 Agent**。能自主进行深度金融调研，取代初级分析师的重复性工作。 |
| [agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope) | ⭐0 (+398 today) | **多智能体平台**。主打“可见、可信”的 Agent 构建与运行，强调可视化与可控性。 |
| [trycua/cua](https://github.com/trycua/cua) | ⭐13,320 | **Computer-Use 基础设施**。提供控制桌面环境的沙箱与 SDK，是构建 GUI Agent 的核心依赖。 |
| [copilotKit/CopilotKit](https://github.com/copilotKit/CopilotKit) | ⭐29,829 | **前端 Agent 组件库**。让开发者能快速在 React/Angular 中嵌入具备生成式 UI 能力的 AI 助手。 |

### 📦 AI 应用（垂直场景与生产力）
> 重点：多模态处理能力大幅提升，视频与复杂文档是当前热点。

| 项目 | Stars | 说明 |
| :--- | :--- | :--- |
| [hacksider/Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam) | ⭐0 (+1814 today) | **🔥 涨幅最高**。单图实时换脸与视频深伪工具，因其极低门槛和实时性在社区疯传。 |
| [onyx-dot-app/onyx](https://github.com/onyx-dot-app/onyx) | ⭐0 (+880 today) | **企业级 AI 助手**。开源的 AI 聊天平台，兼容所有 LLM，定位为企业内部的 ChatGPT Plus。 |
| [datalab-to/chandra](https://github.com/datalab-to/chandra) | ⭐0 (+687 today) | **复杂文档 OCR**。专门解决表格、表单和手写体的版面分析，为 AI 处理非结构化数据扫清障碍。 |
| [twentyhq/twenty](https://github.com/twentyhq/twenty) | ⭐0 (+563 today) | **开源 CRM**。虽然定位是 Salesforce 替代品，但其社区驱动的 AI 功能集成备受瞩目。 |
| [saturndec/waoowaoo](https://github.com/saturndec/waoowaoo) | ⭐10,567 | **AI 影视工厂**。工业级 AI 视频生成平台，支持从短片到长镜头的全流程控制。 |

### 🧠 大模型/训练
> 重点：模型微调平民化，以及“测试时缩放”等新训练范式的讨论。

| 项目 | Stars | 说明 |
| :--- | :--- | :--- |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐69,188 | ** Unified 微调框架**。支持 100+ LLM/VLM 的高效微调，是国内开发者最爱的训练工具。 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐44,373 | **极简 GPT 训练**。2 小时从 0 训练 64M 参数模型，极佳的教育性质项目。 |
| [testtimescaling/testtimescaling.github.io](https://github.com/testtimescaling/testtimescaling.github.io) | ⭐94 | **前沿理论调研**。关于 LLM “测试时缩放”技术的深度综述，关注推理阶段提升性能的方法。 |

### 🔍 RAG/知识库
> 重点：从单纯的文本检索转向多模态检索，以及向量库与 SQL 的融合。

| 项目 | Stars | 说明 |
| :--- | :--- | :--- |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐134,841 | **RAG 工作流平台**。稳坐开源 RAG 应用开发头把交椅，提供生产级的 Agent 编排能力。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐76,460 | **深度文档理解 RAG**。结合了 OCR 与 RAG，解决“垃圾进垃圾出”的检索痛点。 |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | ⭐73,246 | **OCR 基石**。将 PDF/图片转化为 LLM 可读结构化数据的关键工具。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐129,097 | **最强 UI 接口**。类 ChatGPT 的开源界面，支持 Ollama 和各种 API，用户量巨大。 |

---

## 3. 趋势信号分析

**1. Agentic Tree Search 开启“推理新时代”**
今日 SakanaAI 的 *AI-Scientist-v2* 利用“Agentic Tree Search”（智能体树搜索）实现了自动化科研。这不仅是自动化脚本的升级，而是意味着 AI 开始具备**试错、回溯和路径规划**的能力。这与近期业界从“预训练”向“推理时计算”转型的趋势高度吻合。未来我们将看到更多通过搜索算法增强 LLM 解决复杂问题能力的框架。

**2. 金融 AI Agent 的“实用性大考”**
*dexter* 和 *OpenBB* 的高热度表明，AI 正在严肃进入**高精度、高价值**领域。与早期的通用聊天机器人不同，现在的 Agent（如 dexter）更专注于特定垂直领域，并集成了实时数据源。这预示着“AI 分析师”将比“AI 画家”更快地在企业中产生实际的 ROI（投资回报率）。

**3. 多模态 RAG 的“入口争夺战”**
*datalab-to/chandra* 的上榜揭示了 RAG 系统的新瓶颈：**文档解析**。过去 RAG 系统往往受限于 PDF 转文本的精度，无法处理复杂表格和手写体。能够精准“看清”文档的工具将成为 RAG 生态中不可或缺的一环，甚至可能反向整合向量数据库。

---

## 4. 社区关注热点 (Developer Spotlight)

*   **🎯 [SakanaAI/AI-Scientist-v2](https://github.com/SakanaAI/AI-Scientist-v2)**：如果你关注 Agent 的上限在哪里，必须看这个项目。它展示了 AI 如何不依赖人类干预，通过自我迭代完成科学发现。
*   **💰 [virattt/dexter](https://github.com/virattt/dexter)**：金融从业者或 Fintech 开发者的福音。它是目前构建“自主金融研究助手”的最佳参考实现之一。
*   **📄 [datalab-to/chandra](https://github.com/datalab-to/chandra)**：如果你的 RAG 系统还在为复杂的 PDF 表格发愁，Chandra 提供了目前最先进的 OCR 版面分析解决方案。
*   **🎥 [hacksider/Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam)**：虽然涉及伦理争议，但从纯技术角度看，其在单图实时换脸上的优化极具工程参考价值。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*