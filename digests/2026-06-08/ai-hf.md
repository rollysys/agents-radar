# Hugging Face 热门模型日报 2026-06-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-08 04:16 UTC

---

# Hugging Face 热门模型日报 (2026-06-08)

## 1. 今日速览

今日 Hugging Face 迎来了多项重磅更新，**Nvidia** 凭借 `LocateAnything-3B` 和 `Cosmos3` 系列强势霸榜，展示了从视觉定位到世界模型的全方位布局。**Google** 发布的 `Gemma-4-12B` 系列以其 Any-to-Any 的多模态能力引发社区热议，迅速占据下载榜前列。**DeepSeek-V4** 系列继续展现统治力，Pro 与 Flash 版本下载量突破千万级，稳居开源权重模型顶流。此外，社区对于 **Uncensored（无审查）** 和 **MoE（混合专家）** 架构的热情持续高涨，推动 `Qwen3.6` 修改版下载量激增。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   作者: deepseek-ai | 👍 4,700 | ⬇️ 5,515,325
    *   **说明**: DeepSeek V4 系列的旗舰版本，凭借强大的推理能力和开源权重，持续领跑下载榜，是当前最强开源基座模型之一。

*   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
    *   作者: deepseek-ai | 👍 1,435 | ⬇️ 3,347,429
    *   **说明**: 轻量级高速版本，在保持优秀性能的同时大幅降低推理成本，适合高并发场景。

*   **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
    *   作者: sapientinc | 👍 719 | ⬇️ 162,822
    *   **说明**: 新晋小参数模型黑马，主打高效文本生成，以 1B 参数量实现惊人下载量，适合端侧部署。

*   **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
    *   作者: openbmb | 👍 779 | ⬇️ 114,329
    *   **说明**: MiniCPM 系列最新迭代，极限压缩的小钢炮模型，专为移动端和边缘设备优化。

*   **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
    *   作者: LiquidAI | 👍 541 | ⬇️ 118,326
    *   **说明**: 采用 MoE（混合专家）架构，总参数 8B 激活 1B，兼顾效率与性能，流体智能模型的新尝试。

*   **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)**
    *   作者: nvidia | 👍 157 | ⬇️ 49,784
    *   **说明**: Nvidia 发布的超大参数 MoE 模型，550B 总参数激活 55B，旨在挑战闭源 SOTA 模型能力。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   作者: nvidia | 👍 1,535 | ⬇️ 115,556
    *   **说明**: 今日点赞榜第一，专注于图像-文本定位任务，极大地提升了视觉语言模型的空间理解能力。

*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *   作者: google | 👍 700 | ⬇️ 434,969
    *   **说明**: Google Gemma 第四代，原生的 Any-to-Any 多模态指令微调模型，支持图像文本交互，下载量极高。

*   **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
    *   作者: SulphurAI | 👍 1,588 | ⬇️ 1,715,710
    *   **说明**: 视频生成领域的黑马模型，下载量惊人，基于 LTX-2.3 量化，社区热度极高。

*   **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
    *   作者: stepfun-ai | 👍 349 | ⬇️ 43,196
    *   **说明**: 阶跃星辰的最新视觉语言模型，主打快速响应的多模态交互。

*   **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
    *   作者: ideogram-ai | 👍 356 | ⬇️ 4,377
    *   **说明**: Ideogram 第四代文生图模型，以 FP8 精度发布，兼顾显存占用与生成质量，文字渲染能力强劲。

*   **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**
    *   作者: ByteDance | 👍 170 | ⬇️ 246
    *   **说明**: 字节跳动推出的图像/文本到视频渲染器，高质量视频生成的新势力。

*   **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
    *   作者: bosonai | 👍 200 | ⬇️ 7,557
    *   **说明**: 强大的端到端语音合成模型，4B 参数量保证了高质量的语音克隆与生成。

### 🔧 专用模型（代码、数学、医疗、嵌入、OCR）

*   **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
    *   作者: JetBrains | 👍 252 | ⬇️ 16,924
    *   **说明**: 专为代码生成优化的模型，具备 "Thinking"（思维链）能力，开发者工具集成的首选。

*   **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)**
    *   作者: PaddlePaddle | 👍 269 | ⬇️ 9,084
    *   **说明**: 结合视觉语言模型的 OCR 新版本，大幅提升复杂文档场景的文字识别与理解能力。

*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   作者: nvidia | 👍 262 | ⬇️ 3,439
    *   **说明**: Nvidia 推出的流式自动语音识别模型，超低延迟，适合实时转录场景。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 👍 1,523 | ⬇️ 2,923,564
    *   **说明**: 基于Qwen MoE 架构的无审查激进微调版，下载量突破百万，反映了社区对内容自由度的强烈需求。

*   **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
    *   作者: unsloth | 👍 459 | ⬇️ 568,158
    *   **说明**: Unsloth 迅速跟进的 Gemma-4 GGUF 版本，让消费级显卡也能运行最新的多模态模型。

*   **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
    *   作者: nvidia | 👍 201 | ⬇️ 1,185,362
    *   **说明**: Nvidia 官方出品的 NVFP4 量化版，针对 GPU 推理极致优化，下载量过百万。

*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *   作者: unsloth | 👍 687 | ⬇️ 1,150,295
    *   **说明**: 另一热门 Qwen 变体的 GGUF 版本，适配广泛，社区活跃度极高。

---

## 3. 生态信号

**模型家族势头分析**：
**Nvidia** 正在构建极其庞大的模型矩阵，从 `Nemotron` 系列的超大参数 LLM，到 `LocateAnything` 的细粒度视觉任务，再到 `Cosmos3` 的物理世界模拟，展现了硬件厂商向模型全栈渗透的野心。**Qwen (阿里)** 依然是目前开源社区最活跃的基础模型之一，其 3.6 版本（特别是 MoE 架构）被大量微调和量化，显示其在中文及多语言场景的统治力。

**开源 vs 闭源趋势**：
随着 **DeepSeek-V4** 和 **Gemma-4** 提供强大的开源权重，闭源模型的优势正被压缩到极小领域（如极其复杂的多步推理或超长上下文）。社区不再满足于单纯的文本生成，`Any-to-Any`（任意模态转换）已成为新一代开源模型的标配能力。

**量化与微调活动**：
**GGUF** 格式依然是消费级硬件部署的主流标准，Unsloth 的快速跟进能力使其成为连接前沿模型与本地部署的关键桥梁。同时，**NVFP4** 等硬件原生量化格式的出现，预示着未来量化将更加硬件绑定。值得注意的是，“Uncensored（无审查）”模型下载量巨大，表明企业级合规需求与社区个人偏好之间存在明显的分层。

---

## 4. 值得探索

*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: 
    **理由**: 视觉定位是连接大模型与物理世界的核心能力。该模型以 3B 的小体积斩获高点赞，意味着在机器人控制、UI 自动化等前沿领域具有极高的实用潜力。

*   **[google/gemma-4-12B-it](https://huggingface.co/google/gema-4-12B-it)**: 
    **理由**: 作为 Google 最新一代的开源模型，Gemma-4 全面转向 Any-to-Any 架构。它是研究大模型如何统一处理图像、文本模态，以及如何在中等参数规模下实现 SOTA 性能的最佳切入点。

*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**: 
    **理由**: 这是一个观察“社区文化如何塑造模型”的绝佳样本。MoE 架构带来的高性价比性能，加上激进的去审查训练，使其在创意写作和角色扮演领域极具研究价值。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*