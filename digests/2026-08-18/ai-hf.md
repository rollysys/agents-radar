# Hugging Face 热门模型日报 2026-08-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-18 01:19 UTC

---

# Hugging Face 热门模型日报 (2026-08-18)

## 1. 今日速览
本周 Hugging Face 迎来了**Qwen3.8 系列**的爆发式增长，其中 `Qwen3.8-27B` 以绝对优势占据榜首，同时参数规模高达 2.4T 的 MoE 超大模型 `Qwen3.8-2.4T-A95B` 亦引发社区热议。**MiniMax** 在多模态生成领域势头强劲，视频模型 `MiniMax-H3` 与音乐模型 `MiniMax-Music3` 均获得极高下载量。**Moonshot** 的 `Kimi-K3` 凭借超高点赞数成为本周最受关注的对话模型之一。此外，针对 Qwen 和 Muse 系列的 **GGUF 量化版**与**去审查微调版**在社区中持续流行，显示出本地部署需求的旺盛。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
    *   作者: Qwen | 点赞: 10,721 | 下载: 415,039
    *   **一句话说明：** 本周最热门的开源权重模型，支持图文输入，凭借强大的对话能力和适中的参数量成为新基准。

*   **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
    *   作者: moonshotai | 点赞: 10,802 | 下载: 2,163,953
    *   **一句话说明：** Moonshot 最新发布的 K3 模型，点赞数极高，显示其在长文本与多模态对话领域的强大号召力。

*   **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**
    *   作者: deepseek-ai | 点赞: 3,499 | 下载: 1,978,298
    *   **一句话说明：** DeepSeek V4 系列的轻量级版本，以下载量见长，主打高性价比的推理服务。

*   **[meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)**
    *   作者: meta-models | 点赞: 1,662 | 下载: 334,099
    *   **一句话说明：** 新兴竞争者，30B 参数规模，在图文理解任务上表现优异，正迅速获得社区认可。

*   **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)**
    *   作者: Qwen | 点赞: 1,041 | 下载: 9,465
    *   **一句话说明：** 参数量达 2.4T 的 MoE 巨无霸，激活参数 95B，代表了开源模型在极致规模上的探索。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
    *   作者: MiniMaxAI | 点赞: 4,088 | 下载: 2,403,238
    *   **一句话说明：** 本周下载量最高的生成模型，支持文生视频与图生视频，生成质量与动态效果备受好评。

*   **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
    *   作者: Lightricks | 点赞: 1,110 | 下载: 465,529
    *   **一句话说明：** Lightricks 推出的视频生成模型，在视频创作工具链中集成度高，下载量稳健。

*   **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)**
    *   作者: MiniMaxAI | 点赞: 906 | 下载: 10,375
    *   **一句话说明：** 高质量文本转音乐模型，标志着 MiniMax 正在构建完整的多模态生成矩阵。

*   **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)**
    *   作者: Comfy-Org | 点赞: 1,403 | 下载: 14,015,769
    *   **一句话说明：** MiniMax-H3 的 ComfyUI 适配版本，惊人的 1400 万下载量证明工作流集成的巨大价值。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **[LiquidAI/LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B)**
    *   作者: LiquidAI | 点赞: 162 | 下载: 6,816
    *   **一句话说明：** 仅有 3B 参数的小型多模态模型，适合边缘设备部署与低延迟场景。

*   **[dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev)**
    *   作者: dots-studio | 点赞: 207 | 下载: 633
    *   **一句话说明：** 针对特定笔记或文本任务的小型专用模型，显示了垂直领域的微调趋势。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
    *   作者: unsloth | 点赞: 1,633 | 下载: 2,727,609
    *   **一句话说明：** Qwen3.8-27B 的 GGUF 量化版，超高下载量反映了本地运行大模型的刚需。

*   **[DavidAU/Qwen3.6-27B-Fable-Fusion...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
    *   作者: DavidAU | 点赞: 2,120 | 下载: 3,033,928
    *   **一句话说明：** 极具个性的创意微调版，融合多种风格，下载量破百万，显示社区对个性化模型的喜爱。

*   **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)**
    *   作者: orcarouter | 点赞: 438 | 下载: 15,812
    *   **一句话说明：** 移除审查限制的 FP8 版本，满足了对模型回答自由度有特定要求的开发者。

---

## 3. 生态信号

**模型家族格局：** 本周榜单被 **Qwen**、**DeepSeek**、**MiniMax** 和 **Kimi** 四大势力主导，中国开源模型力量已占据绝对优势。特别是 Qwen 系列，从 27B 的通用模型到 2.4T 的 MoE 模型，展现了极强的技术迭代能力。

**开源 vs 闭源：** 开源权重模型在趋势榜上已完全压倒闭源 API 模型。Kimi-K3 和 DeepSeek-V4 等模型的开源，使得原本依赖 API 的能力现在可以被本地化部署，极大地推动了社区微调生态的繁荣。

**量化与微调趋势：** **GGUF** 格式依然统治本地推理市场，Unsloth 的量化工作依然是社区流量的中流砥柱。同时，“Uncensored（去审查）”和“Fusion（风格融合）”微调版本的高下载量表明，社区用户不仅仅满足于基础能力，更追求模型的可定制性与回答自由度。ComfyUI 在视频生成工作流中的地位不可撼动，MiniMax-H3 的 Comfy 版本下载量甚至远超原版。

---

## 4. 值得探索

*   **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)**
    *   **理由：** 探索混合专家架构的极限。虽然总参数 2.4T 巨大，但激活参数仅 95B，这为研究稀疏计算与超大模型的推理效率提供了绝佳样本。

*   **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
    *   **理由：** 当前视频生成领域的当红炸子鸡。配合 ComfyUI 的工作流，可以快速验证最新的文生视频创意，是目前多模态生成赛道不可错过的模型。

*   **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
    *   **理由：** 作为榜单上点赞数最高的模型之一，Kimi-K3 的实际对话体验和长文本处理能力备受期待，是构建高级 RAG 应用的强力候选。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*