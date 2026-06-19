# Hugging Face 热门模型日报 2026-06-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-19 04:42 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-06-19

---

### 📰 今日速览

今日 Hugging Face 迎来重磅发布潮，**DeepSeek-V4-Pro** 以近 5000 点赞稳居榜首，展现出开源权重模型的强大统治力。Google **Gemma-4** 系列全面爆发，不仅原生模型表现强劲，其社区微调版（如 Coder、GGUF）和创新的 DiffusionGemma 架构也霸榜多席。多模态领域竞争激烈，NVIDIA 的 **LocateAnything** 和 Moonshot 的 **Kimi-K2.7-Code** 凭借极高的下载量成为焦点。此外，Unsloth 等量化团队在新模型发布几小时内即跟进 GGUF 版本，显示出生态协同的高效性。

---

### 🔥 热门模型

#### 🧠 语言模型（LLM、对话模型）

1.  **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   **作者：** deepseek-ai | **点赞：** 4,957 | **下载：** 2,948,726
    *   **说明：** 本周最热模型，不仅是榜单点赞王，下载量也突破千万级，代表了当前开源 LLM 的顶尖水平，社区关注度极高。

2.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   **作者：** zai-org | **点赞：** 1,371 | **下载：** 4,307
    *   **说明：** GLM 系列的最新迭代，采用了 MoE 架构，作为重磅发布的新基座模型，迅速获得了社区的高点赞关注。

3.  **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
    *   **作者：** microsoft | **点赞：** 207 | **下载：** 957
    *   **说明：** 微软推出的轻量级模型，主打长上下文处理，适合作为 Agent 的子任务模型。

#### 🎨 多模态与生成（图像、视频、音频）

1.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **作者：** nvidia | **点赞：** 2,166 | **下载：** 183,093
    *   **说明：** 本周点赞数第二高的模型，NVIDIA 出品的视觉定位模型，虽然体量小但功能实用，下载转化率极高。

2.  **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    *   **作者：** google | **点赞：** 1,005 | **下载：** 527,080
    *   **说明：** Google 结合 Diffusion 与 LLM 架构的创新尝试，下载量惊人，标志着生成式模型架构的新探索方向。

3.  **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
    *   **作者：** MiniMaxAI | **点赞：** 1,104 | **下载：** 56,162
    *   **说明：** 国产多模态模型新作，支持图文输入，凭借强大的综合能力跻身榜单前列。

4.  **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
    *   **作者：** moonshotai | **点赞：** 889 | **下载：** 229,156
    *   **说明：** 月之暗面推出的代码专用多模态模型，下载量极高，显示出开发者在代码生成领域的强劲需求。

5.  **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
    *   **作者：** bosonai | **点赞：** 489 | **下载：** 57,380
    *   **说明：** 高质量语音合成模型，在音频生成赛道中表现突出，下载量稳定。

#### 🔧 专用模型（代码、数学、医疗、嵌入）

1.  **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    *   **作者：** WeiboAI | **点赞：** 411 | **下载：** 6,589
    *   **说明：** 专注于数学推理的小参数模型，展示了特定领域小模型的潜力。

2.  **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
    *   **作者：** CohereLabs | **点赞：** 450 | **下载：** 15,285
    *   **说明：** Cohere 推出的轻量级 MoE 代码模型，兼顾效率与性能。

3.  **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   **作者：** nvidia | **点赞：** 546 | **下载：** 13,033
    *   **说明：** 专为流式语音识别设计，超小参数（0.6B）适合端侧部署，点赞数在专用模型中表现优异。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

1.  **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   **作者：** yuxinlu1 | **点赞：** 1,726 | **下载：** 211,424
    *   **说明：** 榜单首位，基于 Gemma-4 的代码增强微调版，证明 Gemma-4 架构在代码任务上极具微调潜力。

2.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **作者：** HauhauCS | **点赞：** 1,973 | **下载：** 3,420,052
    *   **说明：** 全场下载量最高，去除审查的 Qwen3.6 微调版，"Uncensored" 标签极受社区追捧。

3.  **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
    *   **作者：** unsloth | **点赞：** 654 | **下载：** 918,431
    *   **说明：** Unsloth 出品的高质量 GGUF 量化版，是本地运行 Gemma-4 的首选，下载量近百万。

4.  **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)**
    *   **作者：** OBLITERATUS | **点赞：** 351 | **下载：** 96,805
    *   **说明：** 另一款热门的去审查微调模型，反映了社区对模型自由度的强烈需求。

---

### 📈 生态信号

1.  **Gemma-4 与 Qwen 系列主导微调市场：** 本周榜单中，Gemma-4 的新架构激发了社区极大的微调热情，尤其是代码方向和去审查方向。Qwen3.6 依然是微调界的“常青树”，MoE 架构的高效性使其在 35B 参数量级上实现了惊人的 300 万+ 下载量。
2.  **开源权重 vs. 闭源 API：** DeepSeek-V4-Pro 的统治级表现进一步模糊了开源与闭源的边界，证明了顶级开源模型在性能上已具备极强的竞争力。同时，NVIDIA 和 Google 等大厂更倾向于发布专用模型（如 ASR、LocateAnything）或创新架构，以占据特定生态位。
3.  **量化速度即是生命力：** Unsloth 几乎在基座模型发布的同时推出了 GGUF 版本（如 Gemma-4, GLM-5.2），这种“秒级”跟进已成为模型能否在消费级硬件普及的关键。FP8 等新量化格式（如 GLM-5.2-FP8）也开始崭露头角。

---

### 💎 值得探索

1.  **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    *   **理由：** 架构创新的代表，结合了 Diffusion 与 LLM 的优势。如果你关注生成式模型的前沿架构或需要高质量的图文生成，这是必试的实验性模型。

2.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **理由：** 极高点赞与下载比证明了其实用性。对于需要视觉定位、检测任务的开发者，这个 3B 模型提供了极佳的参数效率比，适合端侧部署。

3.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **理由：** 社区力量的体现。如果你在寻找拒绝率低、回答更直接的模型，或者想研究 MoE 模型在消费级显卡上的极限性能，这个版本值得深入研究。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*