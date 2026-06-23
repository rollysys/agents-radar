# Hugging Face 热门模型日报 2026-06-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-23 03:49 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-06-23

---

### 📰 今日速览

本周 Hugging Face 迎来了开源社区的“超级星期日”，**DeepSeek-V4-Pro** 以超 5000 点赞数断层领先，确立了新一代开源基座模型的霸主地位。多模态领域战火激烈，**Nvidia** 与 **Google** 分别凭借 LocateAnything 和 DiffusionGemma 刷榜，而 **MiniMax-M3** 的上榜则彰显了多模态理解的持续进化。社区微调方面，基于 **Qwen3.6** 和 **Gemma-4** 的“Uncensored（无审查）”及“Agentic（智能体）”变体下载量激增，显示出开发者对高性能、低限制本地模型的强烈需求。

---

### 🔥 热门模型

#### 🧠 语言模型（LLM）

1.  **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   作者: deepseek-ai | 👍 5,015 | 📥 2,421,858
    *   **点评**: 本周绝对的“王者”，凭借超高的点赞和下载量证明 DeepSeek V4 系列在开源界的统治力，适合作为各种下游任务的新基座。

2.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 👍 2,051 | 📥 33,589
    *   **点评**: GLM 系列最新迭代，采用 MoE 架构，支持对话与文本生成，开源权重进一步降低了顶级大模型的使用门槛。

3.  **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *   作者: google | 👍 1,140 | 📥 1,912,198
    *   **点评**: Google Gemma 第四代模型，Any-to-Any 任务支持，下载量破百万，是目前中小参数模型中兼顾性能与效率的首选。

4.  **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
    *   作者: microsoft | 👍 290 | 📥 3,498
    *   **点评**: 微软推出的轻量化模型，主打长上下文处理与 Agent 子任务能力，4B 参数极具边缘部署潜力。

#### 🎨 多模态与生成

1.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   作者: nvidia | 👍 2,294 | 📥 247,517
    *   **点评**: Nvidia 视觉定位领域的重磅模型，仅 3B 参数却拥有强大的图像特征提取能力，点赞数高居榜单第二。

2.  **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
    *   作者: MiniMaxAI | 👍 1,209 | 📥 119,967
    *   **点评**: MiniMax 最新多模态大模型，支持图文理解，表现强劲，是国产多模态模型的重要力量。

3.  **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    *   作者: google | 👍 1,050 | 📥 874,368
    *   **点评**: 结合 Diffusion 与 Gemma 架构的创新尝试，参数量大且支持多模态生成，下载量惊人。

4.  **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   作者: nvidia | 👍 631 | 📥 34,860
    *   **点评**: 专为流式语音识别设计的超轻量模型，适合实时转写场景。

#### 🔧 专用模型

1.  **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    *   作者: WeiboAI | 👍 616 | 📥 32,385
    *   **点评**: 专注于数学与推理能力的 3B 小模型，验证了小参数模型在特定逻辑任务上的潜力。

2.  **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
    *   作者: moonshotai | 👍 964 | 📥 412,778
    *   **点评**: Moonshot 出品的编程专用模型，集成了图像特征提取能力，代码生成质量备受期待。

3.  **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
    *   作者: CohereLabs | 👍 482 | 📥 21,078
    *   **点评**: Cohere 推出的 MoE 架构代码模型，专为编程任务优化，适合开发者集成。

4.  **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)**
    *   作者: LiquidAI | 👍 101 | 📥 8,822
    *   **点评**: 高效的文本嵌入模型，适合 RAG 和检索增强场景。

#### 📦 微调与量化

1.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 👍 2,119 | 📥 4,078,305
    *   **点评**: 本周下载量最高的模型！基于 Qwen3.6 的去审查版，兼具视觉能力与激进微调策略，社区热度极高。

2.  **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   作者: yuxinlu1 | 👍 2,177 | 📥 414,734
    *   **点评**: 针对代码能力优化的 Gemma-4 GGUF 版本，兼顾推理与编程，点赞数位列前茅。

3.  **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
    *   作者: unsloth | 👍 257 | 📥 41,846
    *   **点评**: Unsloth 出品的快速量化版 GLM-5.2，兼顾了速度与模型表现，适合本地部署。

---

### 📈 生态信号

本周生态呈现出**“基座模型三足鼎立，社区微调百家争鸣”**的态势。**DeepSeek-V4**、**GLM-5.2** 和 **Gemma-4** 构成了新一代开源基座的核心阵营。特别值得注意的是，**Qwen3.6** 虽然发布已久，但其社区微调版本（如 HauhauCS 版）下载量突破 400 万，显示出“Uncensored（无审查）”和“Agentic（智能体化）”是当下开发者最迫切的微调方向。此外，Nvidia 和 Google 在多模态细分领域（定位、生成、语音）的重磅投入，意味着开源模型正在从单纯的文本生成向全模态感知与操作演进，且更注重轻量化与端侧部署（如 3B、0.6B 级别模型）。

---

### 💡 值得探索

1.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored...](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **理由**: 这是一个现象级的社区微调模型，超过 400 万的下载量证明了其在实际应用中的价值。如果你需要一个“无限制”、具视觉能力且表现强悍的本地模型，这是首选。

2.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **理由**: Nvidia 在视觉定位领域的力作。对于需要图像理解、目标检测或视觉导航的开发者来说，这是一个参数极小但功能专精的高质量模型，非常适合在边缘设备上集成。

3.  **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    *   **理由**: 它代表了 Google 在生成式模型架构上的新探索（Diffusion + LLM）。对于研究者而言，探索这种混合架构在多模态生成任务上的表现极具参考价值。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*