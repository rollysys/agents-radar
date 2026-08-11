# Hugging Face 热门模型日报 2026-08-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-11 01:53 UTC

---

# Hugging Face 热门模型日报
**日期：2026-08-11**

---

### 1. 今日速览

本周 Hugging Face 最引人注目的趋势是 **MiniMax-H3 视频生成模型的现象级爆发**，其原生模型及各类社区微调、量化版本占据了榜单近半数席位，显示出视频生成领域的极高热度。与此同时，**Moonshot 发布的 Kimi-K3** 以超高点赞数成为本周最受欢迎的 LLM，与下载量霸榜的 **DeepSeek-V4-Flash** 形成分庭抗礼之势。此外，百度推出的 **Unlimited-OCR** 模型凭借强大的文字识别能力，下载量突破 290 万，成为垂直领域的明星。总体来看，视频生成与多模态理解模型正在主导当前的社区注意力。

---

### 2. 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

*   **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
    *   作者: moonshotai | 点赞: 10,472 | 下载: 1,510,032
    *   **说明：** 本周点赞数最高的模型，Kimi 系列的最新多模态大模型，支持图文理解与特征提取，社区反响极其热烈。

*   **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**
    *   作者: deepseek-ai | 点赞: 3,061 | 下载: 954,441
    *   **说明：** DeepSeek V4 的轻量级版本，下载量接近百万，凭借优秀的性价比与推理速度，成为当前最受开发者欢迎的基座模型之一。

*   **[meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)**
    *   作者: meta-models | 点赞: 745 | 下载: 0
    *   **说明：** Meta 系的新作，30B 参数规模的多模态模型，虽下载量暂未起势，但高点赞数显示社区对其正式开源的高度期待。

*   **[LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)**
    *   作者: LiquidAI | 点赞: 490 | 下载: 89,680
    *   **说明：** Liquid Foundation Models 的小参数版本，主打端侧部署与高效生成，为资源受限场景提供新选择。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
    *   作者: MiniMaxAI | 点赞: 3,433 | 下载: 47,468
    *   **说明：** 本周最火爆的视频生成模型，支持文生视频与图生视频，画质与动态效果惊艳，引领了当前的生成式 AI 潮流。

*   **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)**
    *   作者: Comfy-Org | 点赞: 1,147 | 下载: 6,009,639
    *   **说明：** MiniMax-H3 的 ComfyUI 官方适配版本，下载量高达 600 万，证明该模型已迅速融入工作流生态。

*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   作者: baidu | 点赞: 4,002 | 下载: 2,921,751
    *   **说明：** 百度推出的强力 OCR 模型，下载量位居前列，解决了复杂场景下的文字识别痛点，实用性极强。

*   **[black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev)**
    *   作者: black-forest-labs | 点赞: 14,077 | 下载: 480,762
    *   **说明：** 常青树级别的文生图模型，总点赞量惊人，依然是图像生成领域的标杆。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
    *   作者: DavidAU | 点赞: 1,862 | 下载: 2,439,083
    *   **说明：** 基于 Qwen3.6 的“狂野”微调版，主打无审查与创意写作，GGUF 格式方便本地运行，下载量极高。

*   **[unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)**
    *   作者: unsloth | 点赞: 637 | 下载: 199,167
    *   **说明：** Unsloth 团队提供的高效 GGUF 量化版，让 DeepSeek V4 Flash 能在消费级显卡上流畅运行。

*   **[larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora)**
    *   作者: larryvrh | 点赞: 601 | 下载: 0
    *   **说明：** 针对 MiniMax-H3 的加速 LoRA，通过轻量级微调显著提升视频生成速度，紧跟热点发布。

#### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **[nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)**
    *   作者: nvidia | 点赞: 298 | 下载: 597
    *   **说明：** NVIDIA 推出的语音交互专用模型，针对实时对话场景优化，展现了硬件厂商在模型层的布局。

*   **[mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B)**
    *   作者: mistralai | 点赞: 222 | 下载: 6,343
    *   **说明：** Mistral 推出的安全护栏模型，用于检测和过滤 LLM 输出中的有害内容，企业级部署的重要组件。

---

### 3. 生态信号

本周模型生态呈现出明显的**“视频生成平民化”**与**“国产模型强势崛起”**两大特征。

1.  **MiniMax-H3 家族势头正旺**：从原生模型到 ComfyUI 适配、GGUF 量化以及 Turbo LoRA，MiniMax-H3 在一周内迅速形成了完整的工具链生态。这表明开源视频生成模型正在复刻 Stable Diffusion 的路径——通过工具链（如 ComfyUI）的整合，迅速降低使用门槛，从而引爆下载量。
2.  **国产力量主导榜单**：DeepSeek、Kimi、MiniMax 以及百度 OCR 几乎包揽了本周最活跃的模型席位。这显示出中国 AI 团队在开源权重上的策略非常成功：既有 DeepSeek 这样以“性价比+开源”收割开发者市场的 LLM，也有 Kimi 和 MiniMax 这样在多模态和视频生成领域冲击 SOTA 的模型。
3.  **量化与微调活跃**：针对 DeepSeek-V4 和 Qwen3 系列的 GGUF 量化及 Uncensored 微调版本下载量巨大，说明本地部署和去限制化微调依然是社区核心需求之一。

---

### 4. 值得探索

*   **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**：作为本周的风暴中心，它是目前开源界效果最接近商业级 Sora 的视频生成模型之一，配合 ComfyUI 工作流，非常适合视频创作者和技术极客尝鲜。
*   **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**：如果你关注多模态大模型的进步，Kimi-K3 值得深入研究。它在图文理解上的优异表现以及极高的社区认可度，使其成为处理复杂文档和多模态任务的有力竞争者。
*   **[lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo)**：对于需要实际应用视频生成的开发者，推荐尝试这个 Turbo 版本。它在保持画质的同时优化了推理速度，是生产环境落地的优选方案。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*