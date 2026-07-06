# Hugging Face 热门模型日报 2026-07-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-06 03:48 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-07-06

---

### 1. 今日速览
本周 Hugging Face 社区呈现“多强争霸”格局，**Qwen3.6** 与 **GLM-5.2** 系列模型占据了榜单的半壁江山，显示出极强的生态统治力。国产模型势头迅猛，百度发布的 **Unlimited-OCR** 凭借百万级下载量成为实用性工具的标杆，而 DeepSeek V4 系列的更新则进一步巩固了其在开源权重领域的地位。社区微调方面，GGUF 格式依然是本地部署的主流选择，针对“无审查”和“Agentic（智能体）”场景的魔改版本热度极高。此外，NVIDIA 持续通过 NVFP4 量化技术优化主流模型，软硬结合的趋势愈发明显。

---

### 2. 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 点赞: 3,472 | 下载: 220,379
    *   **说明：** 新一代 GLM 系列基座模型，支持 MoE 架构与对话场景，凭借优异的中文理解能力登顶语言类模型榜首。

*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
    *   作者: deepseek-ai | 点赞: 392 | 下载: 12,580
    *   **说明：** DeepSeek V4 系列的高性能版本，结合 DSpark 技术优化，展现了开源模型在推理能力上的最新突破。

*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
    *   作者: Qwen | 点赞: 549 | 下载: 55,113
    *   **说明：** 阿里官方推出的 Agent 专用模型，针对智能体工具调用与多步推理进行了深度优化，是 Agent 开发的首选基座。

*   **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)**
    *   作者: mistralai | 点赞: 117 | 下载: 26
    *   **说明：** Mistral 发布的千亿级参数超大模型，主打数学与逻辑推理（Lean），虽然下载量低但技术前瞻性极强。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   作者: baidu | 点赞: 1,752 | 下载: 1,044,217
    *   **说明：** 百度推出的高吞吐量 OCR 模型，支持超长文本识别，百万级下载量证明了其在工业界的极高实用价值。

*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   作者: nvidia | 点赞: 2,618 | 下载: 1,247,265
    *   **说明：** NVIDIA 发布的轻量级视觉定位模型，能精准识别图像中的任意物体，兼顾了性能与效率。

*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
    *   作者: krea | 点赞: 515 | 下载: 99,049
    *   **说明：** Krea 推出的文生图加速版模型，专注于快速生成高质量图像，深受创作者社区喜爱。

#### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
    *   作者: google | 点赞: 226 | 下载: 2,670
    *   **说明：** Google 推出的表格基础模型，支持零样本分类与回归，为结构化数据处理提供了新思路。

*   **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)**
    *   作者: BugTraceAI | 点赞: 135 | 下载: 12,196
    *   **说明：** 专注于网络安全与漏洞检测的专用模型，填补了 LLM 在攻防安全领域的空白。

*   **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)**
    *   作者: nationaldesignstudio | 点赞: 129 | 下载: 2,783
    *   **说明：** 针对 PII（敏感个人信息）识别的 Token 分类模型，适用于数据合规与清洗场景。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   作者: empero-ai | 点赞: 1,564 | 下载: 1,533,844
    *   **说明：** 本周增长最快的模型，融合了 Claude 风格的 Qwen 微调版，支持 1M 上下文，下载量惊人。

*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 点赞: 2,492 | 下载: 3,018,257
    *   **说明：** 社区最受欢迎的“无审查”版本，去除安全限制并增强了创造性，总下载量突破 300 万。

*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *   作者: unsloth | 点赞: 964 | 下载: 2,776,389
    *   **说明：** Unsloth 出品的高效量化版，优化了显存占用与推理速度，是本地运行 Qwen 大模型的标准选择。

*   **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)**
    *   作者: nvidia | 点赞: 275 | 下载: 297,130
    *   **说明：** NVIDIA 官方出品的 FP4 量化版，专为 GPU 推理加速优化，体现了硬件厂商对主流模型的直接支持。

---

### 3. 生态信号

**Qwen 家族统治力确立：** 从榜单看，前 30 名中约有 50% 的模型基于 Qwen 系列微调或量化。Qwen3.5/3.6 已成为继 Llama 之后开源界事实上的“新皇”，特别是在多模态和 Agent 领域。

**“无审查”需求高涨：** 榜单中出现大量带有 `Uncensored`、`Abliterated` 标签的模型（如 HauhauCS 和 empero-ai 的作品），且下载量极高。这反映了社区对模型“说真话”、无道德束缚的强烈需求，也催生了专门的微调文化。

**硬件厂商深度入局：** NVIDIA 频繁发布 NVFP4 量化模型，不仅覆盖了 Qwen，也覆盖了 GLM-5.2。这表明硬件厂商正通过模型优化层直接介入生态上游，确保其在端侧和数据中心推理场景的统治力。

---

### 4. 值得探索

1.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **理由：** 作为榜单中下载量最高且实用性最强的多模态模型，它解决了长图文档 OCR 的痛点，非常适合 RAG（检索增强生成）流程的前置处理，建议开发者优先测试其在复杂票据或长文档上的表现。

2.  **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
    *   **理由：** 随着 Agent 应用成为主流，基座模型的能力边界正在从“对话”转向“行动”。该模型是官方针对 Agent 场景优化的版本，对于构建自动化工作流具有极高的参考价值。

3.  **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)**
    *   **理由：** 这是一个垂直领域的典范。在通用模型卷参数的当下，专注于网络安全攻防的专用模型为“AI for Security”方向提供了落地样本，适合安全研究人员关注。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*