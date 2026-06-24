# Hugging Face 热门模型日报 2026-06-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-24 03:50 UTC

---

# Hugging Face 热门模型日报 (2026-06-24)

## 今日速览
本期榜单最大的亮点是 **DeepSeek-V4-Pro** 以超过 5000 的周点赞数断崖式领跑，展现了头部基座模型的统治力。社区微调方面，**Gemma-4** 和 **Qwen3.6** 成为了最活跃的“基座”，衍生出的代码增强版和无审查版本下载量极高。多模态领域竞争激烈，**NVIDIA** 和 **百度** 分别在视觉定位与 OCR 领域推出了重磅模型，而 Google 的 **DiffusionGemma** 则探索了生成式模型的新架构。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

1.  **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   **作者**: deepseek-ai | **点赞**: 5,032 | **下载**: 2,245,489
    *   **说明**: 本周人气之王，DeepSeek 最新一代 V4 系列的 Pro 版本，凭借强大的推理能力和开源权重，成为当前最受瞩目的基座模型。

2.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   **作者**: zai-org | **点赞**: 2,211 | **下载**: 40,127
    *   **说明**: GLM 系列的最新迭代，采用 MoE 架构，兼顾了对话能力与生成效率，是国产开源模型中的中坚力量。

3.  **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *   **作者**: google | **点赞**: 1,156 | **下载**: 1,991,703
    *   **说明**: Google 发布的通用指令微调模型，Any-to-Any 的任务标签显示了其向全模态发展的野心，下载量极具规模。

4.  **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
    *   **作者**: MiniMaxAI | **点赞**: 1,222 | **下载**: 131,057
    *   **说明**: MiniMax 推出的多模态大模型 M3，在图文理解任务上表现优异，进一步丰富了国产大模型的生态。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

1.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **作者**: nvidia | **点赞**: 2,322 | **下载**: 274,025
    *   **说明**: NVIDIA 出品的视觉定位模型，以轻量级 3B 参数实现了强大的图像特征提取与定位能力，热度极高。

2.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **作者**: baidu | **点赞**: 510 | **下载**: 8,396
    *   **说明**: 百度推出的 OCR 新秀，主打“Unlimited”特性，可能突破了传统 OCR 在分辨率或文本长度上的限制。

3.  **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    *   **作者**: google | **点赞**: 1,056 | **下载**: 948,996
    *   **说明**: Google 将 Gemma 架构与扩散模型结合的创新尝试，具备图文对话能力，下载量接近百万，备受开发者关注。

4.  **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
    *   **作者**: krea | **点赞**: 93 | **下载**: 84
    *   **说明**: 知名 AI 绘图工具 Krea 推出的官方 Turbo 模型，专为高速生图优化。

### 🔧 专用模型（代码、数学、医疗、嵌入）

1.  **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
    *   **作者**: moonshotai | **点赞**: 977 | **下载**: 447,920
    *   **说明**: 月之暗面推出的代码专用模型，Kimi K2.7 系列在代码生成与长上下文理解上具有显著优势。

2.  **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    *   **作者**: WeiboAI | **点赞**: 669 | **下载**: 41,170
    *   **说明**: 微博 AI 团队推出的轻量级数学推理模型，主打小参数大智慧，适合端侧部署。

3.  **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)**
    *   **作者**: LiquidAI | **点赞**: 115 | **下载**: 10,117
    *   **说明**: 专为句子相似度任务设计的嵌入模型，体量小巧，适合构建检索增强生成（RAG）系统。

4.  **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   **作者**: nvidia | **点赞**: 660 | **下载**: 41,050
    *   **说明**: NVIDIA 专为流式语音识别优化的超小模型，延迟极低，适合实时转录场景。

### 📦 微调与量化（社区微调、GGUF、AWQ）

1.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **作者**: HauhauCS | **点赞**: 2,163 | **下载**: 3,955,016
    *   **说明**: 本周下载量最高的模型之一，基于 Qwen3.6 MoE 的“无审查”激进微调版，极高的下载量反映了社区对去限制模型的强烈需求。

2.  **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   **作者**: yuxinlu1 | **点赞**: 2,247 | **下载**: 456,117
    *   **说明**: 社区大神基于 Gemma-4 打造的代码增强版 GGUF 模型，点赞数甚至超过了原版，是本地代码助手的优选。

3.  **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
    *   **作者**: unsloth | **点赞**: 308 | **下载**: 55,820
    *   **说明**: Unsloth 团队快速跟进的 GLM-5.2 量化版，为消费级显卡运行大模型提供了极致优化的方案。

---

## 生态信号

本周生态呈现出明显的**“基座巨头化，微调垂直化”**趋势。
1.  **模型家族**: **DeepSeek** 以绝对优势确立了 V4 时代的领导地位；**Gemma-4** 和 **Qwen3.6** 则成为了社区微调的首选“矿机”，尤其是 Qwen3.6 的 MoE 架构在平衡性能与成本上表现优异。
2.  **开源 vs 闭源**: 头部开源模型（如 DeepSeek-V4-Pro）的性能已具备极强的竞争力，促使社区迅速跟进各种变体。
3.  **微调风向**: “**Uncensored（无审查）**”和“**Agentic（智能体）**”是本周最热门的微调关键词。`HauhauCS` 的无审查版下载量逼近 400 万，证明了用户对模型输出自由度的渴求；同时，针对终端操作和代码能力的微调版本也备受青睐。

---

## 值得探索

1.  **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   **理由**: 作为本周的人气断层第一，它是目前开源界性能天花板的有力竞争者，无论是学术研究还是应用落地，都是必测的基准模型。

2.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **理由**: 如果你关注模型的真实对话能力和去限制化表现，这个拥有近 400 万下载量的模型是观察社区微调文化的最佳样本，适合作为高自由度的私人助手。

3.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **理由**: NVIDIA 在视觉领域的最新力作，3B 的小身材提供了强大的定位能力，非常适合集成到机器人视觉或自动标注流程中。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*