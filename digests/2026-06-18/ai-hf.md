# Hugging Face 热门模型日报 2026-06-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-18 04:14 UTC

---

# Hugging Face 热门模型日报 (2026-06-18)

## 1. 今日速览
今日 Hugging Face 迎来了 **Google Gemma-4** 系列的发布热潮，官方模型与社区微调版迅速霸榜，显示出极强的生态统治力。**DeepSeek-V4-Pro** 依旧凭借数百万的下载量稳居开源权重模型的“流量之王”，而 **Qwen3.6** 系列则是社区微调者的最爱，涌现了大量高下载量的二创模型。多模态领域竞争白热化，**MiniMax**、**Moonshot** 和 **Ideogram** 均有重磅更新，覆盖了视觉理解、代码生成与图像生成。此外，模型量化（GGUF）与“去审查”微调依然是社区最活跃的两大主题。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   作者: deepseek-ai | 👍 4,926 | ⬇️ 2,804,646
    *   **说明**: 开源界的巨无霸，凭借强大的推理与对话能力，下载量断层领先，是当前最强开源基座之一。

*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *   作者: google | 👍 1,072 | ⬇️ 922,952
    *   **说明**: Google 最新发布的官方指令微调模型，Any-to-Any 的任务特性使其成为今日最受关注的新星。

*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 👍 1,063 | ⬇️ 666
    *   **说明**: GLM 系列的最新迭代，虽然下载量尚未起飞，但高点赞数显示了社区对其架构更新的期待。

*   **[prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B)**
    *   作者: prefeitura-rio | 👍 319 | ⬇️ 189,986
    *   **说明**: 惊人的 397B 参数量级模型，来自里约热内卢市政府，展示了公共部门在大模型领域的探索。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
    *   作者: Qwen | 👍 2,157 | ⬇️ 3,683,883
    *   **说明**: 阿里 Qwen 系列的王牌，MoE 架构实现了性能与效率的平衡，下载量极高，是当前多模态的主流选择。

*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    *   作者: google | 👍 980 | ⬇️ 460,173
    *   **说明**: Google 将 Diffusion 技术融入 Gemma 架构的创新尝试，在图像文本生成任务上表现抢眼。

*   **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
    *   作者: MiniMaxAI | 👍 1,066 | ⬇️ 42,198
    *   **说明**: MiniMax 最新推出的多模态模型，专注于 image-text-to-text 任务，具备强大的视觉理解能力。

*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
    *   作者: moonshotai | 👍 849 | ⬇️ 172,727
    *   **说明**: 月之暗面推出的代码专用多模态模型，结合了视觉与编程能力，深受开发者喜爱。

*   **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
    *   作者: ideogram-ai | 👍 569 | ⬇️ 15,477
    *   **说明**: 顶级图像生成模型 Ideogram 的第 4 代版本，fp8 格式大幅降低了部署门槛。

*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   作者: nvidia | 👍 2,141 | ⬇️ 130,389
    *   **说明**: NVIDIA 发布的视觉定位专用模型，点赞数极高，展示了细粒度视觉任务的市场需求。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    *   作者: WeiboAI | 👍 320 | ⬇️ 1,950
    *   **说明**: 微博 AI 推出的轻量级数学推理模型，专注于数学逻辑任务。

*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   作者: nvidia | 👍 524 | ⬇️ 7,195
    *   **说明**: NVIDIA 专为流式语音识别设计的微型模型，低延迟特性使其适合实时应用。

*   **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
    *   作者: bosonai | 👍 482 | ⬇️ 40,812
    *   **说明**: 高质量的语音合成模型，下载量表现稳健，是 TTS 领域的有力竞争者。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   作者: yuxinlu1 | 👍 1,506 | ⬇️ 146,784
    *   **说明**: 今日点赞榜冠军，基于 Gemma-4 的代码增强版微调，社区反响极其热烈。

*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 👍 1,941 | ⬇️ 2,876,624
    *   **说明**: 极高下载量的“去审查”版本，证明了市场对无限制模型的巨大需求。

*   **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
    *   作者: unsloth | 👍 646 | ⬇️ 579,224
    *   **说明**: Unsloth 团队快速跟进的量化版本，让普通用户也能在本地运行最新的 Gemma-4。

*   **[DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)**
    *   作者: DavidAU | 👍 384 | ⬇️ 427,359
    *   **说明**: 以超长命名闻名的混合微调模型，融合了多种先进特性，下载量惊人。

---

## 3. 生态信号

**模型家族势头分析：**
今日榜单最显著的特征是 **Gemma-4 系列的爆发**与 **Qwen3.6 的持续统治**。Google Gemma-4 刚一发布，社区微调版本便迅速跟进，尤其是代码增强版和 GGUF 量化版，显示出 Gemma 系列在开发者社区极高的号召力。与此同时，Qwen3.6 依靠 MoE 架构的高效性，成为了“去审查”和极限微调的首选基座。

**开源 vs 闭源趋势：**
开源权重的模型正在吞噬长尾市场。榜单前列的 DeepSeek、Qwen、Gemma 均提供开放权重，且社区能够迅速产出 GGUF 等本地化部署方案。这种“官方发布基座 + 社区极速微调”的模式，已大大缩短了模型从实验室到应用的周期，对闭源 API 形成了强力挤压。

**量化与微调动态：**
GGUF 格式依然是本地部署的绝对主流。值得注意的是，针对安全审查的对抗性微调极其活跃，`HauhauCS` 和 `OBLITERATUS` 等作者的模型下载量甚至超过了许多官方基座，反映了用户对模型“自由度”的强烈诉求。

---

## 4. 值得探索

1.  **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    *   **理由**: Google 将 Diffusion 机制引入 LLM 架构的大胆尝试，这种混合架构可能代表了下一代多模态模型的新方向，值得深入研究其生成机理。

2.  **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   **理由**: 作为今日热度最高的社区模型，它不仅验证了 Gemma-4 的可塑性，也是目前基于该架构最优秀的代码能力增强版之一，适合开发者立即上手测试。

3.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **理由**: NVIDIA 在视觉定位领域的轻量化力作，仅有 3B 参数却获得了极高评价，对于端侧设备或 Agent 具身智能应用具有极高的实用价值。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*