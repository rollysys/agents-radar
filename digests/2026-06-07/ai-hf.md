# Hugging Face 热门模型日报 2026-06-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-07 04:11 UTC

---

# Hugging Face 热门模型日报 (2026-06-07)

## 1. 今日速览
本周 Hugging Face 迎来 **DeepSeek-V4-Pro** 的统治级表现，以超 550 万下载量稳居开源 LLM 王座。Google 正式发布 **Gemma-4-12B** 系列，原生支持“任意到任意”多模态任务，引发社区热烈反响。Nvidia 展现全栈实力，从视觉定位模型 **LocateAnything** 到物理世界模型 **Cosmos3** 全面开花。社区微调方面，基于 Qwen3.6 的无审查版本受到热捧，显示出对开放对话模型的强劲需求。此外，视频生成与音频模型如 **Sulphur-2** 和 **Magenta-Realtime-2** 也呈现出多元化发展趋势。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,682 | ⬇️ 5,510,611
  - 说明: 本周绝对明星，拥有超高的点赞与惊人的下载量，代表了当前开源大模型的顶尖性能。

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 1,421 | ⬇️ 3,436,213
  - 说明: V4 系列的高效轻量版，兼顾速度与性能，下载量同样突破百万，适合高频部署。

- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
  - 作者: google | 👍 625 | ⬇️ 315,131
  - 说明: Google 最新发布的指令微调模型，支持多模态，在同尺寸模型中竞争力极强。

- **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
  - 作者: openbmb | 👍 775 | ⬇️ 100,575
  - 说明: 面向端侧设备的超轻量模型，新一代 MiniCPM 在保持体积优势的同时提升了性能。

- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
  - 作者: sapientinc | 👍 712 | ⬇️ 161,627
  - 说明: 专注于文本生成的小型模型，因特定任务的高效表现而受到关注。

- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
  - 作者: LiquidAI | 👍 534 | ⬇️ 95,440
  - 说明: LiquidAI 推出的 MoE 架构模型，主打流动性与高效生成。

### 🎨 多模态与生成（图像、视频、音频）

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 👍 1,461 | ⬇️ 111,078
  - 说明: Nvidia 推出的视觉定位模型，能精准理解图像内容并定位物体，位居点赞榜首。

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 1,581 | ⬇️ 1,704,964
  - 说明: 开源视频生成模型新秀，下载量极高，基于 LTX 架构，视频生成质量备受期待。

- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
  - 作者: ideogram-ai | 👍 311 | ⬇️ 2,818
  - 说明: Ideogram 4 代图像生成模型的 fp8 高效版本，以出色的文字渲染能力著称。

- **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
  - 作者: stepfun-ai | 👍 343 | ⬇️ 38,716
  - 说明: 阶跃星辰最新的视觉语言模型，主打快速响应和多模态理解。

- **[nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano)**
  - 作者: nvidia | 👍 183 | ⬇️ 24,820
  - 说明: Nvidia 面向物理 AI 的世界基础模型，用于生成物理合理的视频与状态。

- **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**
  - 作者: ByteDance | 👍 151 | ⬇️ 223
  - 说明: 字节跳动推出的图像/文本到视频生成模型，刚刚发布即引发好奇。

- **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)**
  - 作者: google | 👍 112 | ⬇️ 9,394
  - 说明: Google 实时音频生成模型，适用于音乐创作与交互式音频应用。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
  - 作者: JetBrains | 👍 240 | ⬇️ 16,395
  - 说明: 专为代码生成设计的模型，引入“Thinking”推理机制，解决复杂编程任务。

- **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)**
  - 作者: PaddlePaddle | 👍 258 | ⬇️ 8,365
  - 说明: 结合视觉语言模型的 OCR 工具，提升了文档理解和文字提取的准确率。

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  - 作者: nvidia | 👍 221 | ⬇️ 1,380
  - 说明: 专为流式语音识别设计的小型模型，适合实时转写场景。

- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
  - 作者: bosonai | 👍 157 | ⬇️ 2,184
  - 说明: 高质量语音合成模型，结合了多模态技术以生成自然语音。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 1,491 | ⬇️ 2,771,843
  - 说明: 基于 Qwen3.6 MoE 的无审查微调版，下载量惊人，反映了社区对无限制模型的渴望。

- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
  - 作者: unsloth | 👍 424 | ⬇️ 458,174
  - 说明: Unsloth 快速跟进的 Gemma-4 量化版，大幅降低了本地部署门槛。

- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
  - 作者: nvidia | 👍 198 | ⬇️ 1,015,381
  - 说明: Nvidia 官方提供的 Qwen 模型 NVFP4 量化版，专为 Nvidia GPU 优化推理。

- **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)**
  - 作者: ideogram-ai | 👍 216 | ⬇️ 2,671
  - 说明: 官方推出的 NF4 量化版，在保持画质的同时降低了显存需求。

---

## 3. 生态信号

本周生态呈现出**巨头全能化**与**社区极客化**并存的趋势。
1. **模型家族格局：** DeepSeek V4 系列已形成“Pro+Flash”的组合拳，彻底统治了开源 LLM 的下载榜单；Google Gemma-4 的发布则标志着中型模型正式进入“原生多模态”时代。
2. **Nvidia 的硬件壁垒：** Nvidia 不仅发布模型，更通过 `NVFP4` 量化格式和 `LocateAnything` 等专用模型，构建软硬件闭环，强化其在部署端的生态壁垒。
3. **社区微调风向：** `HauhauCS/Qwen3.6` 的无审查版下载量高达 277 万，证明基于 MoE 架构的 Qwen 系列正成为社区微调的新主力，且“Uncensored”标签依然是流量的强力保证。

---

## 4. 值得探索

1. **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
   - 理由: Google 开源系列的最新力作，原生支持图像、视频、音频输入，是测试“Any-to-Any”多模态能力的最佳切入点。

2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   - 理由: 视觉定位是当前多模态应用落地的关键瓶颈，该模型以 3B 的小体积登上热门榜首，值得研究人员探索其在机器人、自动驾驶等场景的潜力。

3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - 理由: 如果你想体验当前社区最活跃、最强大的非官方微调模型，这个基于 MoE 架构的版本提供了极佳的对话体验和下载支持。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*