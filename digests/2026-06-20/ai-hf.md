# Hugging Face 热门模型日报 2026-06-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-20 03:56 UTC

---

# Hugging Face 热门模型日报 (2026-06-20)

## 1. 今日速览
本期榜单呈现“巨头争霸与社区繁荣”并存的态势。**DeepSeek-V4-Pro** 以近 5000 点赞数断层领先，确立了开源权重模型的新标杆；Google **Gemma-4** 系列发布后迅速引爆社区，衍生出的各类微调版模型霸榜前列，特别是面向编程与智能体的版本。国产力量依旧强劲，智谱 **GLM-5.2** 与月之暗面 **Kimi-K2.7** 凭借架构创新与多模态能力占据高位。此外，NVIDIA 在语音识别与视觉定位领域的专用模型表现亮眼，显示端侧与垂直场景仍是竞争焦点。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   作者: deepseek-ai | 点赞: 4,969 | 下载: 3,015,772
    *   一句话说明: 榜单点赞数最高的基石模型，凭借强大的生成与推理能力，成为当前开源界最受瞩目的主力模型。

*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 点赞: 1,547 | 下载: 11,871
    *   一句话说明: 智谱 AI 最新一代模型，采用 `glm_moe_dsa` 架构，在对话与文本生成任务上展现出极高的效率与性能。

*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *   作者: google | 点赞: 1,096 | 下载: 1,590,882
    *   一句话说明: Google 官方发布的 Gemma 4 指令版，支持 Any-to-Any 任务，是本周社区微调热潮的核心基座。

*   **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
    *   作者: CohereLabs | 点赞: 459 | 下载: 17,693
    *   一句话说明: Cohere 面向代码生成的轻量级 MoE 模型，旨在提供高效的编程辅助能力。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   作者: nvidia | 点赞: 2,195 | 下载: 228,669
    *   一句话说明: NVIDIA 推出的视觉定位神器，点赞数极高，能精准实现图像特征提取与物体定位。

*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    *   作者: google | 点赞: 1,011 | 下载: 601,208
    *   一句话说明: 结合了 Diffusion 与 LLM 的创新模型，支持图文交互，下载量惊人，标志着生成式模型架构的新探索。

*   **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
    *   作者: MiniMaxAI | 点赞: 1,135 | 下载: 67,836
    *   一句话说明: MiniMax 的多模态力作，支持图文理解，展现出强劲的视觉语言处理能力。

*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
    *   作者: moonshotai | 点赞: 910 | 下载: 274,865
    *   一句话说明: 月之暗面推出的代码专用多模态模型，具备强大的压缩张量技术，在代码理解与生成上表现卓越。

*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   作者: nvidia | 点赞: 565 | 下载: 18,809
    *   一句话说明: 专为流式语音识别设计的小型模型，体现了 NVIDIA 在端侧语音交互领域的深耕。

*   **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
    *   作者: bosonai | 点赞: 493 | 下载: 69,143
    *   一句话说明: 高质量的语音合成模型，结合了多模态技术，下载量证明其在 TTS 领域的受欢迎程度。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    *   作者: WeiboAI | 点赞: 464 | 下载: 12,148
    *   一句话说明: 基于 Qwen2 架构的数学推理模型，以小参数量实现了优秀的逻辑思考能力。

*   **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
    *   作者: microsoft | 点赞: 233 | 下载: 1,437
    *   一句话说明: 微软推出的专注于长上下文处理的模型，标签显示其适用于 Explorer SubAgent 任务。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   作者: yuxinlu1 | 点赞: 1,858 | 下载: 268,102
    *   一句话说明: 榜单排名首位的社区微调模型，基于 Gemma 4 打造的编程利器，深受本地开发者喜爱。

*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 点赞: 2,010 | 下载: 3,730,978
    *   一句话说明: 下载量惊人的去审查版 Qwen3.6 微调模型，以“激进”的对话风格在社区爆火。

*   **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)**
    *   作者: OBLITERATUS | 点赞: 355 | 下载: 106,885
    *   一句话说明: 另一款热门的去审查版 Gemma 4 模型，满足用户对无限制对话生成的需求。

*   **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
    *   作者: unsloth | 点赞: 185 | 下载: 8,392
    *   一句话说明: Unsloth 团队迅速跟进的 GLM-5.2 量化版，显著降低了部署门槛。

---

## 3. 生态信号

本周生态呈现出鲜明的**“基座迭代，社区狂欢”**特征：
1.  **模型家族势头：** **Gemma 4** 与 **Qwen 3.6** 是本周绝对的主角。Gemma 4 凭借官方基座迅速催生出 Coder、Agentic 及 Uncensored 等多种变体，显示出社区对 Google 新架构的高度认可；Qwen 3.6 则继续统治高下载量榜单，特别是在 MoE 和 Uncensored 领域。
2.  **开源 vs 闭源：** DeepSeek-V4-Pro 的高赞高下载证明了高质量“开源权重”模型仍是社区核心驱动力。闭源模型 API 的优势正在被这些强力开源模型的迭代速度挑战。
3.  **量化与微调趋势：** **GGUF 格式**依然是本地部署的首选（如 `yuxinlu1` 的模型）。值得注意的是，**“Uncensored（去审查）”**标签在社区微调中热度飙升（如 `HauhauCS` 和 `OBLITERATUS`），反映出用户对模型生成自由度的强需求。同时，Unsloth 等团队对新模型（GLM-5.2, Kimi-K2.7）的量化响应速度极快，形成了“发布即量化”的成熟生态闭环。

---

## 4. 值得探索

*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   **理由：** 作为当前榜单的“流量之王”，其性能代表了当前开源大模型的天花板，无论是学术研究还是应用落地，都是绕不开的基准模型。

*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    *   **理由：** 将扩散模型与大语言模型结合的尝试非常前沿，这种架构融合可能为多模态生成任务带来新的范式，值得关注其技术原理与生成效果。

*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **理由：** 仅 3B 参数却在视觉定位任务上获得高赞，对于需要在端侧设备（如机器人、无人机）上集成视觉理解能力的开发者来说，这是一个极具性价比的选择。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*