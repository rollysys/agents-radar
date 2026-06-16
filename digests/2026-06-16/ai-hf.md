# Hugging Face 热门模型日报 2026-06-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-16 04:28 UTC

---

# Hugging Face 热门模型日报 (2026-06-16)

## 1. 今日速览

本周 Hugging Face 迎来了**Google Gemma-4** 系列与 **DiffusionGemma** 的强势登顶，标志着“原生多模态”与“扩散架构大模型”成为新的技术焦点。**DeepSeek-V4-Pro** 依旧稳坐开源权重模型的流量王座，展现了极强的长尾影响力。社区方面，基于 **Qwen3.6** 和 **Gemma-4** 的微调模型呈现爆发式增长，尤其是无审查版本与量化版本深受开发者追捧。总体来看，开源生态正快速向高参数量、多模态融合及本地化部署迈进。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,868 | 📥 2,934,763
  - **说明**: 开源界的“巨无霸”，凭借极高的下载量和点赞数稳居榜首，代表当前开源文本生成的顶尖水平。

- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
  - 作者: CohereLabs | 👍 392 | 📥 11,145
  - **说明**: Cohere 推出的轻量级代码专用模型，主打高效编程辅助，适合集成至开发环境。

- **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)**
  - 作者: nex-agi | 👍 288 | 📥 3,681
  - **说明**: 基于 Qwen3.5 MoE 架构的增强版模型，主打文本生成与智能体应用。

- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
  - 作者: microsoft | 👍 110 | 📥 13
  - **说明**: 微软推出的轻量级模型，专注于长上下文处理与快速推理，适合子任务代理场景。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
  - 作者: google | 👍 887 | 📥 311,788
  - **说明**: Google 创新性地将扩散模型与大语言模型结合，支持图像与文本的深度交互生成，位列本周榜首。

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 👍 2,061 | 📥 86,968
  - **说明**: NVIDIA 推出的视觉定位模型，点赞数极高，能精准理解图像内容并进行特征提取。

- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
  - 作者: MiniMaxAI | 👍 851 | 📥 14,312
  - **说明**: 国产大模型新势力，强大的多模态理解能力，支持图像与文本的复杂交互。

- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
  - 作者: google | 👍 1,038 | 📥 1,160,435
  - **说明**: Gemma 第四代核心模型，主打 Any-to-Any 任务，原生支持多模态，下载量惊人。

- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
  - 作者: ideogram-ai | 👍 548 | 📥 10,748
  - **说明**: Ideogram 最新文生图模型的高效 fp8 版本，以文字渲染精准和画质细腻著称。

- **[prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B)**
  - 作者: prefeitura-rio | 👍 303 | 📥 188,723
  - **说明**: 惊人的 397B 参数量模型，基于 Qwen 架构，专为多模态对话设计，下载量极高。

- **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)**
  - 作者: zai-org | 👍 191 | 📥 0
  - **说明**: 角色动画生成模型，支持姿态驱动，为视频生成领域带来新选择。

- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
  - 作者: bosonai | 👍 445 | 📥 38,429
  - **说明**: 高质量语音合成模型，结合了文本生成能力，可实现富有表现力的语音输出。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
  - 作者: moonshotai | 👍 752 | 📥 56,750
  - **说明**: 月之暗面推出的代码专精模型，具备多模态特征提取能力，在编程任务上表现优异。

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  - 作者: nvidia | 👍 423 | 📥 5,200
  - **说明**: NVIDIA 推出的轻量级流式语音识别模型，专注于低延迟实时转录场景。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 1,859 | 📥 2,697,882
  - **说明**: 本周最强社区爆款，下载量逼近 300 万，主打无审查与激进的回复风格，广受个人开发者欢迎。

- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
  - 作者: unsloth | 👍 618 | 📥 980,781
  - **说明**: 官方模型的优秀量化版，让普通消费级显卡也能跑得动最新的 Gemma-4 多模态模型。

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
  - 作者: yuxinlu1 | 👍 690 | 📥 20,207
  - **说明**: 社区针对 Gemma-4 进行深度优化的代码特化版，结合了推理与编程能力。

- **[DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)**
  - 作者: DavidAU | 👍 359 | 📥 369,526
  - **说明**: 著名的“名字很长”系列微调，融合了 Claude 风格思维链与代码能力，模型体积巨大但效果震撼。

- **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)**
  - 作者: OBLITERATUS | 👍 325 | 📥 70,732
  - **说明**: 针对新发布的 Gemma-4 进行的去限制微调版本，满足用户对开放性对话的需求。

---

## 3. 生态信号

1. **Gemma 4 与 DiffusionGemma 引领新浪潮**：Google 本周发布的 Gemma-4 系列迅速占据了生态位，尤其是支持多模态的 `gemma-4-12B-it` 和融合扩散技术的 `diffusiongemma`。这表明开源社区的兴趣正从纯文本 LLM 快速转向**多模态融合**与**新型生成架构**。

2. **社区对“无审查”与“个性化”的狂热**：`HauhauCS/Qwen3.6` 和 `OBLITERATUS/Gemma-4` 等模型的极高下载量揭示了开源用户的核心诉求——**可定制性**与**内容自由度**。Qwen3.6 和 Gemma-4 正迅速取代旧架构，成为社区微调的新基座。

3. **Unsloth 效应**：几乎每个头部模型发布后，Unsloth 的 GGUF 量化版本都会迅速上榜（如 Gemma-4, Kimi-K2.7）。这显示了**本地化部署** 需求依然旺盛，Unsloth 已成为连接大模型与个人硬件的关键桥梁。

---

## 4. 值得探索

1. **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
   - **理由**: 技术创新的先锋。它打破了传统自回归 LLM 的限制，尝试用扩散模型处理图文交互。如果你关注下一代生成式架构，这是必试的模型。

2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - **理由**: 社区力量的代表。下载量近 300 万的背后，是用户对高质量、无限制模型的巨大需求。如果你想体验不设防的强大 AI 助手，这是目前最热门的选择。

3. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   - **理由**: 垂类任务的惊喜。仅 3B 参数却获得了极高的点赞数，说明其在图像定位与特征提取任务上表现卓越，非常适合作为多模态应用中的视觉组件。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*