# Hugging Face 热门模型日报 2026-08-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-17 01:22 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-08-17

---

### 📰 今日速览

本周 Hugging Face 迎来了**Qwen3.8系列**的全面爆发，其27B参数版本凭借卓越的性能与多模态能力占据榜首，而2.4T参数的MoE巨量模型更是展示了开源模型在参数规模上的新突破。视频生成领域，**MiniMax-H3** 借助 ComfyUI 生态实现了超千万次的下载量，成为当前最活跃的生成式工具。同时，**DeepSeek-V4** 与 **Moonshot Kimi-K3** 的强势入局，使得闭源巨头与开源社区在榜单上的竞争愈发激烈。社区侧，GGUF 格式与 Unsloth 的量化工作依然是本地化部署的绝对主流。

---

### 🔥 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

1.  **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
    *   **作者：** Qwen | **点赞：** 10,290 | **下载：** 267,725
    *   **说明：** 本周最受欢迎模型，作为全能型多模态底座，平衡了性能与尺寸，成为社区微调与推理的首选。

2.  **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
    *   **作者：** moonshotai | **点赞：** 10,768 | **下载：** 2,136,775
    *   **说明：** 月之暗面最新力作，下载量惊人，支持特征提取与压缩张量，展示了极强的工程落地能力。

3.  **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)**
    *   **作者：** Qwen | **点赞：** 1,012 | **下载：** 7,932
    *   **说明：** 拥有2.4万亿参数的MoE架构巨兽，激活参数仅95B，代表了开源模型在超大规模架构上的前沿探索。

4.  **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**
    *   **作者：** deepseek-ai | **点赞：** 3,462 | **下载：** 1,872,232
    *   **说明：** DeepSeek V4 系列的高效版本，下载量突破百万，以高性价比继续统治推理成本敏感型应用场景。

5.  **[deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)**
    *   **作者：** deepseek-ai | **点赞：** 536 | **下载：** 21,873
    *   **说明：** DeepSeek 最新一代旗舰模型，定位于处理复杂任务，虽上线不久已引发广泛关注。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

1.  **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
    *   **作者：** MiniMaxAI | **点赞：** 4,031 | **下载：** 2,307,541
    *   **说明：** 当前最火热的视频生成模型之一，支持文生视频与图生视频，生成质量与连贯性备受好评。

2.  **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)**
    *   **作者：** Comfy-Org | **点赞：** 1,388 | **下载：** 13,406,892
    *   **说明：** MiniMax-H3 的 ComfyUI 适配版本，下载量高达1300万，证明了工作流工具对模型普及的巨大推动力。

3.  **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
    *   **作者：** Lightricks | **点赞：** 1,028 | **下载：** 424,099
    *   **说明：** 视频生成领域的强劲竞争者，支持图/文/视频到视频的转换，在创意内容生成方面表现优异。

4.  **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)**
    *   **作者：** MiniMaxAI | **点赞：** 844 | **下载：** 8,639
    *   **说明：** 文本到音乐生成模型，延续了 MiniMax 在多模态生成领域的布局，填补了高质量开源音频生成的空白。

5.  **[meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)**
    *   **作者：** meta-models | **点赞：** 1,631 | **下载：** 292,973
    *   **说明：** 新兴的图像文本理解模型，作为30B级的多模态基座，为视觉问答提供了新选择。

#### 🔧 专用模型（代码、数学、医疗、嵌入）

1.  **[nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16)**
    *   **作者：** nvidia | **点赞：** 160 | **下载：** 66,253
    *   **说明：** NVIDIA 推出的高效推理模型，针对企业级应用优化，展示了硬件厂商在软件生态中的垂直整合能力。

2.  **[LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)**
    *   **作者：** LiquidAI | **点赞：** 647 | **下载：** 141,009
    *   **说明：** 小参数量模型中的佼佼者，适合边缘设备部署，下载量显示出市场对轻量级模型的需求依旧强劲。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

1.  **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
    *   **作者：** unsloth | **点赞：** 1,460 | **下载：** 1,945,635
    *   **说明：** Qwen3.8-27B 的 GGUF 版本，下载量接近200万，是本地运行大模型的必选项。

2.  **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
    *   **作者：** DavidAU | **点赞：** 2,096 | **下载：** 3,020,070
    *   **说明：** 社区疯狂微调的典型代表，不仅名称吸睛，且下载量破300万，主打无审查与创意写作。

3.  **[Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8)**
    *   **作者：** Qwen | **点赞：** 485 | **下载：** 352,971
    *   **说明：** 官方推出的 FP8 精度版本，兼顾了存储效率与推理精度，为生产环境部署提供了标准答案。

4.  **[unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4)**
    *   **作者：** unsloth | **点赞：** 202 | **下载：** 276,269
    *   **说明：** 针对 NVIDIA 新硬件优化的 FP4 量化版本，标志着社区正迅速跟进最新的底层硬件特性。

---

### 📈 生态信号

本周模型生态呈现出**"极大规模与极致轻量并存"**的态势。一方面，Qwen 以 2.4T 参数的 MoE 模型试探开源天花板，另一方面，Unsloth 和各类 GGUF 变体（如 NVFP4）的火爆证明了本地化、低门槛部署仍是社区核心需求。

**视频生成领域正在经历"ComfyUI化"**。MiniMax-H3 的原生版本下载量虽高，但 ComfyUI 封装版下载量却达到了惊人的 1300 万次，这表明在 AIGC 应用层，工作流节点的易用性已超越模型本身，成为决定模型传播广度的关键因素。

此外，榜单中出现了大量 **"Uncensored"（无审查）** 微调版本，显示社区用户对模型内容控制权的强需求，这一趋势与开源模型向娱乐、创作场景下沉的动向一致。

---

### 💎 值得探索

1.  **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)**：
    如果你想探究开源模型在"万亿参数"级别的极限能力，这个 MoE 架构的巨无霸是绝佳的研究对象，其激活参数效率值得深究。

2.  **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**：
    作为当前视频生成领域的当红炸子鸡，且配套 ComfyUI 工作流极度成熟，无论是用于视频创作研究还是实际产出，都是目前的最佳选择。

3.  **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**：
    国产模型新势力，其超高的下载量和点赞数验证了其长文本与多模态理解的实力，建议与 Qwen3.8 进行对比测试。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*