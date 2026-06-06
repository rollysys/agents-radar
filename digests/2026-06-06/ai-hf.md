# Hugging Face 热门模型日报 2026-06-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-06 03:44 UTC

---

# Hugging Face 热门模型日报 (2026-06-06)

## 1. 今日速览
本期榜单最受瞩目的事件是 **DeepSeek-V4** 系列的发布，其 Pro 和 Flash 版本以惊人的下载量（超 900 万）霸榜，确立了开源权重模型的新标杆。**NVIDIA** 展现了极强的生态掌控力，单日上榜 8 款模型，覆盖视觉定位、世界模型、ASR 和超分辨率等多个领域。**Google Gemma-4** 的发布引发了社区微调热潮，Unsloth 的 GGUF 版本迅速跟进。此外，**Qwen3.6** 的 MoE 架构在社区微调榜单上表现抢眼，显示出该架构极强的可玩性。

---

## 2. 热门模型

### 🧠 语言模型（LLM）

*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   作者: deepseek-ai | 👍 4,659 | 📥 5,562,821
    *   **说明**: DeepSeek V4 系列的旗舰版本，拥有超高的下载量和人气，代表了当前开源大模型的最强性能水平。

*   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
    *   作者: deepseek-ai | 👍 1,413 | 📥 3,473,265
    *   **说明**: 轻量级版本，主打高效推理，适合高频调用场景，下载量同样惊人。

*   **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
    *   作者: sapientinc | 👍 702 | 📥 159,014
    *   **说明**: 一款新兴的 1B 参数文本生成模型，可能因新颖的架构（HRM）或优异的小模型表现而受到关注。

*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *   作者: google | 👍 555 | 📥 142,851
    *   **说明**: Google 最新一代 Gemma 系列指令微调模型，支持多模态，是开源中小参数模型的强有力竞争者。

*   **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
    *   作者: LiquidAI | 👍 526 | 📥 82,709
    *   **说明**: LiquidAI 推出的 MoE 架构模型，激活参数仅为 1B，主打低延迟高效生成。

### 🎨 多模态与生成

*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   作者: nvidia | 👍 1,385 | 📥 101,823
    *   **说明**: 榜单点赞数第二高的模型，专注于图像-文本定位任务，展示了 NVIDIA 在视觉理解领域的深耕。

*   **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
    *   作者: SulphurAI | 👍 1,566 | 📥 1,691,633
    *   **说明**: 位列周榜点赞数第一的文生视频模型，基于 LTX-2.3 优化，高下载量显示其在视频生成领域的实用性。

*   **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
    *   作者: ideogram-ai | 👍 270 | 📥 1,246
    *   **说明**: Ideogram 最新一代文生图模型的 FP8 量化版，以优秀的文字渲染能力著称。

*   **[nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano)**
    *   作者: nvidia | 👍 177 | 📥 21,625
    *   **说明**: NVIDIA Cosmos 世界模型系列的轻量版，用于物理 AI 模拟与生成。

*   **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
    *   作者: stepfun-ai | 👍 333 | 📥 27,948
    *   **说明**: 阶跃星辰最新的视觉语言模型，主打快速响应的多模态理解。

### 🔧 专用模型

*   **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
    *   作者: JetBrains | 👍 225 | 📥 14,709
    *   **说明**: 专为代码生成设计的模型，引入 "Thinking" 推理机制，类似代码界的 O1 模型，开发者关注度极高。

*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   作者: nvidia | 👍 197 | 📥 597
    *   **说明**: 专为流式语音识别优化的超轻量模型，适合实时转录场景。

*   **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)**
    *   作者: PaddlePaddle | 👍 245 | 📥 6,881
    *   **说明**: 结合视觉语言模型的 OCR 工具，延续了 PaddleOCR 系列的高实用性。

### 📦 微调与量化

*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 👍 1,454 | 📥 2,687,304
    *   **说明**: 社区爆款微调版 Qwen3.6 MoE 模型，主打“无审查”与“激进”风格，下载量惊人，反映出社区对开源模型无限制能力的渴求。

*   **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
    *   作者: unsloth | 👍 382 | 📥 296,410
    *   **说明**: Unsloth 出品的 Gemma-4 量化版，以极快的下载速度响应 Google 的新品发布，是本地部署的首选。

*   **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
    *   作者: nvidia | 👍 191 | 📥 822,125
    *   **说明**: NVIDIA 官方出品的 Qwen3.6 MoE 量化版，使用自家 NVFP4 格式，针对 GPU 推理进行了极致优化。

---

## 3. 生态信号

本周生态呈现出 **"巨头对决，社区狂欢"** 的态势。

1.  **模型家族势头**：**DeepSeek-V4** 毫无疑问是当前流量之王，仅上线一日便在下载量上断层领先。**Qwen3.6** 架构展现出极强的生命力，特别是 MoE 版本，成为了社区微调者的首选底座。**NVIDIA** 正在构建从生成到感知的全栈模型矩阵，Cosmos3 和 Nemotron 系列正在填补物理模拟和语音领域的空白。

2.  **开源 vs 闭源**：DeepSeek 和 Google 的同步发力，证明了“开源权重”策略依然能引爆社区热情。DeepSeek-V4 的高下载量表明，即便在 2026 年，高性能开源模型依然是开发者的刚需。

3.  **量化与微调**：**NVFP4** 量化格式的出现，标志着 NVIDIA 正试图统一 GPU 端侧部署标准。同时，Unsloth 依然是 GGUF 领域的效率标杆，新模型 GGUF 版的上架速度几乎与原版同步。

---

## 4. 值得探索

*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **理由**: 作为榜单上下载量最高的社区模型，它验证了 MoE 架构在消费级硬件上微调的可行性，且其“Uncensored”特性具有极高的实用研究价值。

*   **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
    *   **理由**: 将 "Thinking"（慢思考）引入代码模型是一个有趣的方向，对于研究代码生成中的推理增强和错误修正非常有价值。

*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **理由**: NVIDIA 的新作，仅 3B 参数却在榜单高居榜首，可能代表了视觉定位任务的新 SOTA，适合边缘端视觉应用开发者尝试。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*