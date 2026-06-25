# Hugging Face 热门模型日报 2026-06-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-25 03:51 UTC

---

# Hugging Face 热门模型日报 (2026-06-25)

## 今日速览
本期榜单呈现出“巨头迭代”与“社区狂欢”并存的态势。**DeepSeek-V4-Pro** 以超过 5000 的点赞数稳居榜首，确立了新一代开源基座模型的霸主地位；Google 的 **Gemma-4** 系列与智谱的 **GLM-5.2** 也引发了热烈反响，尤其是社区针对这些基座模型的高质量量化版（GGUF）下载量惊人。多模态领域竞争激烈，百度推出的 **Unlimited-OCR** 和英伟达的 **LocateAnything-3B** 显示了工业界在垂类视觉任务上的强力布局。此外，“Agentic（智能体）”与“Uncensored（无审查）”成为社区微调的核心关键词。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

1.  **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   **作者**: deepseek-ai | **点赞**: 5,050 | **下载**: 2,052,463
    *   **一句话说明**: 本周绝对的明星模型，凭借强大的性能与开源策略，成为目前社区最受欢迎的基座模型。

2.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   **作者**: zai-org | **点赞**: 2,365 | **下载**: 57,186
    *   **一句话说明**: 智谱 AI 的新一代 MoE 架构模型，在文本生成与对话能力上表现出色，位列榜单第二。

3.  **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *   **作者**: google | **点赞**: 1,163 | **下载**: 2,114,441
    *   **一句话说明**: Google 最新发布的通用指令模型，下载量破百万，显示出极强的开发者基础。

4.  **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
    *   **作者**: MiniMaxAI | **点赞**: 1,228 | **下载**: 143,093
    *   **一句话说明**: MiniMax 推出的多模态大模型，兼顾文本与视觉能力，是国产模型中的佼佼者。

5.  **[poolside/Laguna-M.1](https://huggingface.co/poolside/Laguna-M.1)**
    *   **作者**: poolside | **点赞**: 95 | **下载**: 2,913
    *   **一句话说明**: 针对代码生成与推理优化的模型，支持 vllm 与 sglang 推理框架，潜力初显。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

1.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **作者**: nvidia | **点赞**: 2,349 | **下载**: 359,498
    *   **一句话说明**: 英伟达推出的视觉定位模型，精准解决“物体在哪里”的问题，下载量与热度双高。

2.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **作者**: baidu | **点赞**: 752 | **下载**: 45,687
    *   **一句话说明**: 百度发布的 OCR 利器，打破分辨率限制，在图文提取任务上表现卓越。

3.  **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    *   **作者**: google | **点赞**: 1,061 | **下载**: 1,036,328
    *   **一句话说明**: 结合了 Diffusion 与 LLM 的创新模型，兼具生成与理解能力，下载量极高。

4.  **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
    *   **作者**: krea | **点赞**: 195 | **下载**: 878
    *   **一句话说明**: Krea AI 推出的文生图模型，主打高质量与快速生成，适合创意设计场景。

5.  **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   **作者**: nvidia | **点赞**: 679 | **下载**: 47,208
    *   **一句话说明**: 专用于流式语音识别的小型化模型，低延迟特性使其非常适合实时应用。

### 🔧 专用模型（代码、数学、医疗、嵌入）

1.  **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    *   **作者**: WeiboAI | **点赞**: 692 | **下载**: 49,569
    *   **一句话说明**: 专注于数学推理的小参数模型，以 3B 体积实现强逻辑能力，性价比极高。

2.  **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
    *   **作者**: Qwen | **点赞**: 158 | **下载**: 223
    *   **一句话说明**: 通义千问专门针对 Agentic（智能体）场景优化的 MoE 模型，适合构建复杂工作流。

3.  **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)**
    *   **作者**: LiquidAI | **点赞**: 119 | **下载**: 11,471
    *   **一句话说明**: 轻量级文本嵌入模型，适合构建检索增强生成（RAG）系统。

4.  **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
    *   **作者**: moonshotai | **点赞**: 984 | **下载**: 480,013
    *   **一句话说明**: 月之暗面推出的代码专用模型，结合长文本优势，在代码补全与理解上表现优异。

### 📦 微调与量化（社区微调、GGUF、AWQ）

1.  **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   **作者**: yuxinlu1 | **点赞**: 2,302 | **下载**: 483,139
    *   **一句话说明**: 基于 Gemma-4 的代码与推理强化版，GGUF 格式使其成为本地部署的首选，下载量极高。

2.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **作者**: HauhauCS | **点赞**: 2,210 | **下载**: 3,769,369
    *   **一句话说明**: 榜单下载量之王，去除了安全审查的 Qwen3.6 微调版，满足了社区对无限制生成的强烈需求。

3.  **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
    *   **作者**: unsloth | **点赞**: 352 | **下载**: 76,971
    *   **一句话说明**: Unsloth 出品的高效量化版 GLM-5.2，大幅降低了部署门槛。

4.  **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   **作者**: empero-ai | **点赞**: 365 | **下载**: 63,637
    *   **一句话说明**: 融合了 Claude 风格的 Qwen 微调版，在推理与长文本表现上备受好评。

---

## 生态信号
**模型家族势头：** 本周属于 **DeepSeek-V4**、**Gemma-4** 与 **Qwen3.6** 三强争霸。DeepSeek 凭借 V4 确立了开源标杆地位；Google Gemma-4 迅速迭代，成为社区微调的首选基座；Qwen 系列则在长文本和智能体领域持续深耕。

**开源 vs 闭源趋势：** 开源权重模型正在全面侵蚀闭源市场。榜单前列几乎全为开源模型，且社区通过 GGUF 等量化格式迅速将这些大模型“平民化”，使得 12B-35B 参数量的模型成为个人开发者的“甜点区”。

**量化与微调活动：** “Uncensored（无审查）”和“Agentic（智能体）”是微调领域的两大核心需求。*HauhauCS* 的去审查版模型下载量突破 3000 万，显示出用户对无限制对话的巨大渴求；同时，针对编码能力的微调模型（如 gemma-4-coder）热度极高，说明开发者工具链仍是核心落地场景。

---

## 值得探索

1.  **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    *   **理由**: Google 将 Diffusion 模型与 Gemma 架构结合的大胆尝试，既做生成又做理解，这种架构融合可能在多模态生成任务上带来意想不到的效果，极具实验价值。

2.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **理由**: 既然下载量已超 370 万，说明其满足了某种特定的刚需。对于需要探索模型边界能力或进行无限制创意写作的开发者，这是目前最值得关注的社区版本。

3.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **理由**: 英伟达在视觉定位领域的力作，3B 的小体量意味着极高的推理速度，非常适合嵌入到机器人视觉或自动化测试流程中，实用性极强。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*