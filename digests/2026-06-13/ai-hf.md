# Hugging Face 热门模型日报 2026-06-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-13 04:02 UTC

---

# Hugging Face 热门模型日报 (2026-06-13)

## 1. 今日速览
今日 Hugging Face Hub 迎来了多项重磅更新，**DeepSeek-V4-Pro** 以超 330 万周下载量和近 5000 点赞展现了开源权重模型的统治力。Google **Gemma-4** 系列全面登场，不仅发布了基座和指令模型，更推出了结合扩散架构的 **DiffusionGemma**，引发社区热烈反响。社区微调方面，“Uncensored（无审查）”与“Abliterated（抹除对齐）”类模型热度飙升，**Qwen3.6** 与 **Gemma-4** 成为微调社区的首选基座。多模态领域，NVIDIA 的 **LocateAnything** 和字节跳动的 **Bernini-R** 展示了视觉定位与视频生成的新高度。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 点赞: 4,796 | 下载: 3,384,418
  - 说明: 本周绝对的流量之王，作为 DeepSeek V4 系列的高性能版本，其强大的生成能力与开源权重策略使其成为开源界的 SOTA 代表。

- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
  - 作者: google | 点赞: 970 | 下载: 911,544
  - 说明: Google 最新发布的 12B 参数指令微调模型，支持 Any-to-Any 多模态，凭借出色的性价比迅速占据下载榜前列。

- **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)**
  - 作者: nex-agi | 点赞: 225 | 下载: 2,551
  - 说明: 基于 Qwen3.5 MoE 架构的新一代模型，主打高效文本生成，展现了中小型 MoE 模型的潜力。

- **[XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash)**
  - 作者: XiaomiMiMo | 点赞: 97 | 下载: 2,607
  - 说明: 小米推出的端侧 Agent 模型，FP4 量化技术显著降低了推理门槛，适合在移动设备上部署。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
  - 作者: google | 点赞: 626 | 下载: 20,669
  - 说明: 谷歌大胆尝试将 Diffusion 架构融入 Gemma 生态，支持图像文本交互，是本日最具创新性的架构探索之一。

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 点赞: 1,928 | 下载: 149,206
  - 说明: NVIDIA 推出的视觉定位模型，虽然参数量仅 3B，但在图像特征提取任务中表现卓越，下载量极高。

- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
  - 作者: ideogram-ai | 点赞: 504 | 下载: 4,987
  - 说明: Ideogram 4.0 模型的 FP8 量化版，继承了其强大的文字渲染能力，显存占用更低。

- **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**
  - 作者: ByteDance | 点赞: 230 | 下载: 373
  - 说明: 字节跳动推出的图像/文本到视频生成模型，专注于高质量渲染，为开源视频生成领域注入新活力。

- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
  - 作者: bosonai | 点赞: 391 | 下载: 29,347
  - 说明: 强大的端到端语音合成模型，支持多模态输入，下载量证明其在语音社区的高实用性。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
  - 作者: moonshotai | 点赞: 363 | 下载: 0
  - 说明: Moonshot AI 最新发布的代码专用模型，预计将为编程助手领域带来新的竞争格局（刚发布暂无下载）。

- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
  - 作者: CohereLabs | 点赞: 335 | 下载: 4,054
  - 说明: Cohere 面向代码任务的轻量级 MoE 模型，旨在提供高效的代码生成体验。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 点赞: 1,729 | 下载: 2,393,894
  - 说明: 基于 Qwen3.6 的“去审查”激进微调版，下载量惊人，反映了社区对无限制模型的高需求。

- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
  - 作者: unsloth | 点赞: 570 | 下载: 836,531
  - 说明: Unsloth 团队迅速跟进的 Gemma-4 GGUF 量化版，极大地促进了个人开发者在本地运行最新模型。

- **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)**
  - 作者: OBLITERATUS | 点赞: 256 | 下载: 43,578
  - 说明: 针对安全对齐进行“抹除”的 Gemma-4 版本，此类模型在社区讨论度极高。

- **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)**
  - 作者: unsloth | 点赞: 215 | 下载: 17,666
  - 说明: 首个针对 DiffusionGemma 的 GGUF 量化尝试，让普通用户也能体验新型扩散架构。

---

## 3. 生态信号

**Gemma 家族爆发与“去审查”浪潮：** 随着 Google 发布 Gemma-4 和 DiffusionGemma，Hub 迅速被相关模型填满。Unsloth 的量化速度（GGUF/QAT）令人印象深刻，直接拉动了新模型的普及。与此同时，“Uncensored”和“Obliterated”类模型（如 Qwen3.6 和 Gemma-4 变体）的高下载量表明，开源社区对模型安全限制的逆向工程需求依然强劲。

**视觉任务细化与音频崛起：** NVIDIA 的 LocateAnything 热度高涨，显示出视觉任务正从通用识别向精细化定位发展。音频领域竞争加剧，从 TTS 到流式 ASR，Nemotron 和 Higgs-Audio 等模型的出现，标志着语音交互正成为继文本和图像后的下一个开源热点。

---

## 4. 值得探索

- **google/diffusiongemma-26B-A4B-it**: 首次将 Diffusion 架构引入 Gemma 生态的尝试，对于研究非自回归生成或多模态融合的开发者极具参考价值。
- **nvidia/LocateAnything-3B**: 小参数大能量，是构建高效视觉导航或机器人视觉系统的理想基座，值得深入研究其定位精度。
- **HauhauCS/Qwen3.6-35B-A3B-Uncensored...**: 如果你关注模型的对齐机制或需要测试极端边界条件，这是目前社区中最具代表性的基座模型微调案例。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*