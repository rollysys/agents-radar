# Hugging Face 热门模型日报 2026-06-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-14 04:20 UTC

---

# Hugging Face 热门模型日报 (2026-06-14)

## 1. 今日速览
Google 重磅发布 **Gemma 4** 系列与实验性的 **DiffusionGemma**，迅速点燃社区热情，`gemma-4-12B-it` 下载量瞬时突破百万。**DeepSeek-V4-Pro** 依旧稳坐开源权重模型头把交椅，以超过 300 万的下载量展现统治级影响力。多模态领域热闹非凡，NVIDIA 的视觉定位模型与 Ideogram-4 的图像生成能力备受瞩目。社区层面，基于 Gemma 4 和 Qwen 的“Uncensored（无审查）”微调版本及 GGUF 量化模型发布速度极快，显示出开发者对本地部署高性能模型的高涨需求。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 点赞: 4,814 | 下载: 3,250,404
  - **说明**: 当之无愧的开源王者，下载量断层第一，代表了当前开源文本生成模型的顶尖水平。

- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
  - 作者: CohereLabs | 点赞: 356 | 下载: 6,533
  - **说明**: 专注于代码能力的 MoE 架构模型，显示出 Cohere 在垂直领域的持续深耕。

- **[prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B)**
  - 作者: prefeitura-rio | 点赞: 150 | 下载: 5,943
  - **说明**: 参数量高达 397B 的巨型 MoE 模型，基于 Qwen 架构，为极客提供了本地运行超大模型的可能。

- **[XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash)**
  - 作者: XiaomiMiMo | 点赞: 106 | 下载: 3,590
  - **说明**: 小米推出的轻量化文本生成模型，侧重 Agent 能力与端侧部署优化。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
  - 作者: google | 点赞: 995 | 下载: 1,005,883
  - **说明**: Gemma 4 系列旗舰，支持 Any-to-Any 多模态交互，是今日增长最快的模型之一。

- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
  - 作者: google | 点赞: 722 | 下载: 92,080
  - **说明**: Google 的大胆尝试，将扩散模型与 LLM 架构融合，用于图像文本生成，引发高度关注。

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 点赞: 1,967 | 下载: 69,443
  - **说明**: NVIDIA 推出的视觉定位模型，点赞数极高，解决了多模态理解中的细粒度定位痛点。

- **[ideogram-ai/ideogram-4-fp8](https://huggingface.com/ideogram-ai/ideogram-4-fp8)**
  - 作者: ideogram-ai | 点赞: 519 | 下载: 6,535
  - **说明**: 顶级文生图模型 Ideogram 4 的高效 FP8 版本，兼顾生成质量与显存占用。

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
  - 作者: moonshotai | 点赞: 526 | 下载: 1,689
  - **说明**: 月之暗面最新推出的多模态代码模型，在视觉与代码理解结合上表现优异。

- **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**
  - 作者: ByteDance | 点赞: 235 | 下载: 426
  - **说明**: 字节跳动推出的图像/文本到视频生成模型，进一步丰富了视频生成生态。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
  - 作者: bosonai | 点赞: 415 | 下载: 32,162
  - **说明**: 高性能语音合成模型，下载量惊人，显示出语音赛道的高活跃度。

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  - 作者: nvidia | 点赞: 403 | 下载: 3,975
  - **说明**: NVIDIA 推出的流式语音识别模型，专为低延迟实时转录场景优化。

- **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)**
  - 作者: google | 点赞: 189 | 下载: 7,331
  - **说明**: Google 在音频生成领域的探索，支持文本到音频的实时生成。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 点赞: 1,765 | 下载: 2,411,202
  - **说明**: 社区微调爆款，去除了审查机制，下载量极高，反映了社区对模型“无限制”能力的渴求。

- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
  - 作者: unsloth | 点赞: 582 | 下载: 872,895
  - **说明**: Unsloth 出品必属精品，Gemma 4 的 GGUF 版本让消费级显卡也能运行最新的多模态大模型。

- **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)**
  - 作者: OBLITERATUS | 点赞: 280 | 下载: 50,289
  - **说明**: 针对 Gemma 4 的强去审微调版本，紧跟官方发布节奏。

- **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)**
  - 作者: Jiunsong | 点赞: 820 | 下载: 98,892
  - **说明**: 针对大参数版本 Gemma 4 的去审量化版，填补了高端模型的空白。

## 3. 生态信号

**模型家族势头分析：**
今日榜单被 **Google Gemma 4** 与 **DeepSeek V4** 两大豪门家族主导。Gemma 4 凭借“Any-to-Any”的多模态统一架构迅速抢占榜单前列，其 12B 参数版本成为平衡性能与成本的“甜点区”。Qwen 系列依然是社区微调的基石，榜单中出现多款基于 Qwen 3.5/3.6 的微调模型，证明其架构在开源社区具有极高的可玩性。

**开源 vs 闭源趋势：**
开源权重模型正在向“更强、更大、更多模态”演进。虽然闭源模型在 API 市场占优，但在 Hugging Face 上，开源权重的多模态模型和特定垂直模型更受青睐。值得注意的是，**量化技术（GGUF/FQ8/FP8）** 已成为标配，Unsloth 等量化团队几乎与官方发布同步更新，极大降低了前沿模型的试用门槛。

**微调与量化活动：**
“Uncensored（去审查）”成为本周微调的关键词。社区对模型安全和审查机制的反弹在下载量上体现得淋漓尽致（如 HauhauCS 的模型下载量超 240 万）。此外，针对代码和 Agent 场景的微调模型数量正在增加，显示开源社区正从单纯的聊天机器人向生产力工具转型。

## 4. 值得探索

1. **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
   - **理由**: 这是一次架构上的大胆创新。将 Diffusion 扩散模型引入 LLM 架构，它在图像生成和文本理解的融合上表现如何？值得深入研究其“Image-Text-to-Text”的实际效果，这可能是下一代多模态模型的新方向。

2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   - **理由**: 虽然参数仅 3B，但它在榜单上获得了极高的点赞数（近 2000）。在多模态应用中，“定位”是连接感知与行动的关键，这个小巧但强大的模型可能是构建高级视觉 Agent 的理想基座。

3. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
   - **理由**: 作为下载量和点赞数双料冠军，它是目前开源文本生成的天花板。无论是用于基准测试，还是作为 RAG 系统的核心大脑，V4-Pro 的性能和生态适配度都是目前的最佳选择。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*