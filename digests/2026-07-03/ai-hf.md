# Hugging Face 热门模型日报 2026-07-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-03 03:31 UTC

---

# Hugging Face 热门模型日报 (2026-07-03)

## 1. 今日速览

今日 Hugging Face Hub 迎来了多项重磅更新，**GLM-5.2** 以超 3000 点赞成为今日最受瞩目的基座模型，展现了强大的对话与生成能力。多模态领域竞争激烈，**NVIDIA 的 LocateAnything-3B** 与 **百度的 Unlimited-OCR** 凭借卓越的视觉理解与处理能力占据榜单前列。社区微调方面，基于 Qwen 3.6 和 Gemma 4 的量化版本（GGUF）继续统治下载榜，其中 **HauhauCS 的去审查版 Qwen** 模型下载量突破 300 万，显示出端侧用户对高性能无限制模型的巨大需求。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 点赞: 3,260 | 下载: 176,154
    *   **说明**: 今日点赞数最高的基座模型，基于 GLM 架构的最新迭代，支持对话与文本生成，引发社区热烈讨论。

*   **[deepseek-ai/DeepSeek-V4-Pro-DSPark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSPark)**
    *   作者: deepseek-ai | 点赞: 303 | 下载: 8,184
    *   **说明**: DeepSeek V4 系列的高级版本，集成了 Spark 架构特性，专注于高性能文本生成任务。

*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
    *   作者: Qwen | 点赞: 512 | 下载: 39,448
    *   **说明**: 通义千问推出的 Agent 专用模型，具备强大的智能体交互与任务执行能力。

*   **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)**
    *   作者: LiquidAI | 点赞: 193 | 下载: 26,357
    *   **说明**: 极轻量级的文本生成模型，适合资源受限的边缘设备部署。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   作者: nvidia | 点赞: 2,575 | 下载: 1,006,831
    *   **说明**: NVIDIA 推出的视觉定位模型，下载量破百万，能精准识别图像中的任意物体位置。

*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   作者: baidu | 点赞: 1,656 | 下载: 758,489
    *   **说明**: 百度发布的高精度 OCR 模型，支持无限长文本或复杂场景的文字提取，实用性极强。

*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
    *   作者: krea | 点赞: 463 | 下载: 69,788
    *   **说明**: 知名生成工具 Krea 的第二代 Turbo 模型，专注于高质量的文生图快速生成。

*   **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)**
    *   作者: fal | 点赞: 145 | 下载: 0
    *   **说明**: 针对 LTX 视频模型的 LoRA 微调，增强生成视频的 3D 真实感。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
    *   作者: google | 点赞: 120 | 下载: 89
    *   **说明**: Google 推出的表格基础模型，支持零样本表格分类与回归任务。

*   **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)**
    *   作者: BugTraceAI | 点赞: 121 | 下载: 8,037
    *   **说明**: 专为网络安全设计的模型，专注于漏洞检测与进攻性安全分析。

*   **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)**
    *   作者: nationaldesignstudio | 点赞: 107 | 下载: 790
    *   **说明**: 基于BERT的令牌分类模型，专门用于识别和脱敏 PII（个人身份信息）数据。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   作者: empero-ai | 点赞: 1,267 | 下载: 1,250,562
    *   **说明**: 榜单排名第一，基于 Qwen 3.5 的微调版，融合了 Claude 风格与长上下文能力，下载量极高。

*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 点赞: 2,399 | 下载: 3,078,904
    *   **说明**: 今日下载量之王，"Aggressive"去审查版 Qwen 3.6 模型，深受开发者欢迎。

*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   作者: yuxinlu1 | 点赞: 2,573 | 下载: 614,069
    *   **说明**: Gemma 4 的高质量代码微调版，结合了推理与编程能力优化。

*   **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
    *   作者: deepreinforce-ai | 点赞: 658 | 下载: 284,585
    *   **说明**: 新兴的 Ornith 系列模型量化版，强调强化学习对齐，提供 35B 与 9B 多种规格。

---

## 3. 生态信号

**模型家族势力分布**：今日榜单中 **Qwen (通义千问)** 系列依旧是生态核心，占据了微调榜单的半壁江山，尤其是 Qwen 3.6 的 MoE 架构衍生模型表现抢眼。同时，**GLM-5.2** 的发布为开源基座模型注入了新活力，点赞数登顶显示出其社区影响力正在回升。**Gemma 4** 的代码微调版也证明了小参数模型在特定领域的巨大潜力。

**开源与量化趋势**：GGUF 格式依然是端侧部署的绝对主流，榜单前几名几乎全为 GGUF 量化模型，且下载量级远超原版 safetensors。值得注意的是，"Uncensored"（去审查）模型下载量异常巨大（如 HauhauCS 版本突破 300 万），反映出开源社区对模型可控性、生成自由度的强烈偏好。

**新兴动向**：NVIDIA 与百度在视觉任务上的发力表明，多模态不仅是生成，理解与定位正在成为新的竞争高地。

---

## 4. 值得探索

1.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**：作为今日点赞最高的基座模型，GLM-5.2 在对话和推理上的表现值得深入测试，尤其是其 MoE 架构的效率与性能平衡。
2.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：仅需 3B 参数即实现百万级下载，该模型在视觉定位任务上的表现可能颠覆传统的目标检测流程，非常适合多模态应用开发者研究。
3.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**：如果你关注大模型在无限制条件下的生成能力或需要处理敏感话题的测试集，这是目前社区最热门的选择，下载量即是证明。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*