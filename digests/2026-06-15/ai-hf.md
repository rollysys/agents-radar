# Hugging Face 热门模型日报 2026-06-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-15 04:43 UTC

---

# Hugging Face 热门模型日报 (2026-06-15)

## 1. 今日速览
本周 Hugging Face 迎来了 **Google Gemma-4 系列的全面爆发**，不仅基础模型霸榜，其衍生的混合架构模型 `DiffusionGemma` 更是成为社区焦点，标志着扩散模型与 LLM 融合的新趋势。**DeepSeek-V4-Pro** 凭借超高的下载量持续巩固其在开源权重领域的霸主地位，显示出极强的生态统治力。社区层面，**Unsloth** 的 GGUF 量化版本和各类“Uncensored（无审查）”微调模型热度极高，表明本地部署与个性化微调仍是用户核心需求。此外，**Ideogram-4** 的发布引发了文生图领域的新一轮关注。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   作者: deepseek-ai | 👍 4,837 | ⬇️ 3,075,369
    *   **说明**: 本周互动量最高的模型，作为 DeepSeek 的第四代旗舰，其强大的通用生成能力使其成为开源界的“标准答案”。

*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *   作者: google | 👍 1,010 | ⬇️ 1,084,405
    *   **说明**: Google 最新发布的指令微调模型，支持 Any-to-Any，凭借紧凑的参数量和高性能迅速占领下载榜榜首。

*   **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
    *   作者: MiniMaxAI | 👍 509 | ⬇️ 6,643
    *   **说明**: MiniMax 推出的多模态模型，延续了该系列在长文本和语音交互上的优势，社区关注度较高。

*   **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
    *   作者: CohereLabs | 👍 371 | ⬇️ 9,932
    *   **说明**: 专注于代码生成的轻量级模型，针对开发者工具链进行了优化。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    *   作者: google | 👍 804 | ⬇️ 198,912
    *   **说明**: 本周最引人注目的新架构，将 Gemma 架构与扩散模型结合，用于图文生成任务，代表了 LLM 架构创新的探索方向。

*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   作者: nvidia | 👍 2,009 | ⬇️ 75,201
    *   **说明**: NVIDIA 推出的视觉定位模型，点赞数极高，显示出工业界对精细视觉理解任务的强烈需求。

*   **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
    *   作者: ideogram-ai | 👍 535 | ⬇️ 8,263
    *   **说明**: Ideogram 第四代文生图模型的 FP8 量化版，以优秀的文字渲染能力著称，是设计师的热门工具。

*   **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
    *   作者: bosonai | 👍 429 | ⬇️ 35,122
    *   **说明**: 高质量文本转语音模型，在语音自然度上取得了突破，下载量稳定。

*   **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)**
    *   作者: zai-org | 👍 176 | ⬇️ 0
    *   **说明**: 新兴的图像转视频模型，主打角色动画生成，虽下载量未起势但点赞数显示其潜力。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
    *   作者: moonshotai | 👍 648 | ⬇️ 15,145
    *   **说明**: 月之暗面推出的代码专用版模型，针对编程任务进行了深度优化，支持长上下文。

*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   作者: nvidia | 👍 413 | ⬇️ 4,505
    *   **说明**: 专为流式语音识别设计的小型模型，适合边缘端实时转录应用。

*   **[XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash)**
    *   作者: XiaomiMiMo | 👍 115 | ⬇️ 4,108
    *   **说明**: 小米推出的 Agent 专用模型，采用了特殊的 FP4 量化技术以适应端侧部署。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 👍 1,810 | ⬇️ 2,516,709
    *   **说明**: 下载量惊人的社区微调版，基于 Qwen3.6 MoE 架构，主打“无审查”，是目前开源社区最受欢迎的“大杀器”。

*   **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
    *   作者: unsloth | 👍 599 | ⬇️ 926,372
    *   **说明**: Unsloth 发布的 Gemma-4 GGUF 版本，让普通用户也能在本地高效运行最新模型。

*   **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)**
    *   作者: OBLITERATUS | 👍 305 | ⬇️ 60,949
    *   **说明**: 社区针对 Gemma-4 的去限制微调版本，满足用户对开放话题生成的需求。

*   **[DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)**
    *   作者: DavidAU | 👍 339 | ⬇️ 375,966
    *   **说明**: 拥有本次榜单最长名字的模型，融合了 Claude 风格与去审查微调，反映了社区对“思维链”和“无限制”融合的狂热追求。

---

## 3. 生态信号

本周生态呈现出明显的 **“新旧架构交替”** 与 **“实用主义至上”** 特征：

1.  **Gemma 4 生态爆发**：Google 的 Gemma-4 系列发布仅一周便占据榜单多席，不仅有官方的 Diffusion 变体，Unsloth 等社区的 GGUF 量化版也迅速跟进，显示出其开源策略的成功。
2.  **Moe 与 Uncensored 是流量密码**：榜单中下载量极高的模型（如 DeepSeek-V4、Qwen3.6 Uncensored）多采用 MoE 架构或去审查微调。用户对高性能、低显存占用且“无限制”的模型有着巨大需求，Qwen3.6 的社区微调版下载量甚至超过了部分官方模型。
3.  **量化技术下沉**：FP4、FP8、GGUF 等格式已成标配，特别是针对 12B-40B 参数量的模型，社区正在快速推进让大模型在消费级显卡上流畅运行的方案。

---

## 4. 值得探索

*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**：如果你对 LLM 架构创新感兴趣，这是必看模型。它尝试结合 Transformer 的推理能力和 Diffusion 的生成能力，可能代表了下一代多模态模型的方向。
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**：高达 250 万的下载量证明了其实力。作为 Qwen3.6 MoE 的激进微调版，它在创意写作和角色扮演上可能有惊人的表现，适合寻求高质量对话体验的开发者。
*   **[prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B)**：这是一个独特的模型，来自里约热内卢市政府。作为一个 397B 参数的巨型 MoE 模型，它的上榜暗示了公共部门在开源大模型领域的参与度正在提升，值得研究其针对葡萄牙语或特定公共事务的优化能力。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*