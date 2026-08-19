# Hugging Face 热门模型日报 2026-08-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-19 01:21 UTC

---

# Hugging Face 热门模型日报 (2026-08-19)

## 1. 今日速览
本周 Hugging Face 最引人注目的趋势是 **Qwen3.8 系列模型的全面爆发**，其 27B 参数版本及相关量化、微调模型占据了榜单近半数席位，显示出极强的社区统治力。视频生成领域迎来新王者，**MiniMax-H3** 以超高的下载量成为开源视频生成的新标杆，且通过 ComfyUI 生态实现了极高渗透率。此外，DeepSeek V4 系列与 Moonshot 的 Kimi-K3 也在文本生成与多模态领域保持了强劲势头，开源模型在多模态与端侧部署上的竞争愈发激烈。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
    *   作者: Qwen | 👍 11,138 | ⬇️ 665,513
    *   **说明：** 本周绝对的主角，新一代 27B 参数旗舰模型，支持图像文本双模态，性能与效率平衡极佳，成为社区新基座。
*   **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)**
    *   作者: Qwen | 👍 1,066 | ⬇️ 11,212
    *   **说明：** 超大规模 MoE（混合专家）模型，拥有 2.4T 总参数，激活参数 95B，代表着 Qwen 在极限性能上的探索。
*   **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**
    *   作者: deepseek-ai | 👍 3,527 | ⬇️ 2,123,462
    *   **说明：** DeepSeek V4 系列的轻量级版本，下载量惊人，以其高性价比和推理速度深受开发者青睐。
*   **[deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)**
    *   作者: deepseek-ai | 👍 602 | ⬇️ 30,985
    *   **说明：** DeepSeek V4 的加强版/pro 版本，针对复杂任务进行了优化。
*   **[meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)**
    *   作者: meta-models | 👍 1,682 | ⬇️ 384,097
    *   **说明：** Meta 系新晋多模态模型，30B 参数规格，在图像理解与对话能力上表现出色。
*   **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
    *   作者: moonshotai | 👍 10,826 | ⬇️ 2,226,898
    *   **说明：** 月之暗面推出的 Kimi 第三代模型，支持特征提取与压缩张量，拥有极高的社区认可度，下载量破百万。
*   **[nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4)**
    *   作者: nvidia | 👍 322 | ⬇️ 269,372
    *   **说明：** 英伟达官方模型，专为 NVFP4 量化优化，展示了硬件厂商在模型层的深度布局。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
    *   作者: MiniMaxAI | 👍 4,144 | ⬇️ 2,855,539
    *   **说明：** 视频生成领域的当红炸子鸡，支持图生视频和文生视频，生成质量与连贯性备受好评。
*   **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
    *   作者: Lightricks | 👍 1,224 | ⬇️ 503,632
    *   **说明：** 来自 Lightricks 的高质量视频生成模型，支持多种视频转换任务。
*   **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)**
    *   作者: MiniMaxAI | 👍 962 | ⬇️ 11,745
    *   **说明：** MiniMax 在音频领域的力作，支持文本生成音乐，拓展了多模态生成的边界。
*   **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)**
    *   作者: Comfy-Org | 👍 1,426 | ⬇️ 14,641,908
    *   **说明：** MiniMax-H3 的 ComfyUI 适配版本，下载量高达 1400 万，证明了工作流生态对模型分发的决定性作用。
*   **[Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B)**
    *   作者: Gazingstars123 | 👍 249 | ⬇️ 24,893
    *   **说明：** 社区开发的文生图模型，主打 ComfyUI 集成，小参数级别适合轻量化部署。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
    *   作者: unsloth | 👍 1,823 | ⬇️ 3,561,466
    *   **说明：** Unsloth 出品的 GGUF 量化版，下载量极高，是本地部署玩家的首选版本。
*   **[DavidAU/Qwen3.6-27B-Fable-Fusion-711...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
    *   作者: DavidAU | 👍 2,142 | ⬇️ 3,020,528
    *   **说明：** 典型的“超长命名”社区微调版，主打无审查与风格化微调，深受特定玩法用户喜爱。
*   **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)**
    *   作者: orcarouter | 👍 530 | ⬇️ 45,465
    *   **说明：** Qwen3.8 的“无审查”FP8 版本，满足了对内容生成自由度的需求。
*   **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)**
    *   作者: JonathanColetti | 👍 411 | ⬇️ 558,767
    *   **说明：** 另一个热门的无审查 GGUF 版本，进一步证明了基座模型在社区的多样性需求。
*   **[unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4)**
    *   作者: unsloth | 👍 262 | ⬇️ 523,919
    *   **说明：** 专门针对 NVIDIA 最新显卡架构优化的 FP4 量化版本，下载量显示硬体优化的重要性。

---

## 3. 生态信号

本周数据揭示了三大关键趋势：

1.  **Qwen 生态霸权确立：** Qwen3.8 系列不仅仅是单一模型的发布，而是形成了“基座+MoE+量化+微调”的完整矩阵。榜单中近 40% 的模型直接基于 Qwen3.8-27B 衍生，这表明 Qwen 已成功接棒 Llama，成为当前开源社区最核心的“操作系统”级基座模型。
2.  **工作流工具决定分发量级：** `MiniMax-H3` 原生模型下载量为 280 万，而其 ComfyUI 适配版下载量高达 1400 万。这再次印证了在视频/图像生成领域，**不集成 ComfyUI 等工作流工具，就失去了 80% 的用户触达渠道**。
3.  **“无审查”与特定量化需求旺盛：** 社区微调版中，以 `Uncensored`（无审查）为标签的模型（如 DavidAU 和 JonathanColetti 的版本）占据了显著位置。同时，NVFP4 等**针对特定硬件架构的量化格式**下载量激增，预示着本地部署正在向消费级显卡的极致性能压榨演进。

## 4. 值得探索

*   **🏆 Qwen/Qwen3.8-27B**：作为当前最火的基座模型，无论是用于业务微调还是本地体验，它都是目前的必选项，FP8 版本更是兼顾了显存占用与精度。
*   **🎥 MiniMaxAI/MiniMax-H3**：开源视频生成领域的“顶流”，生成质量极高，配合 ComfyUI 工作流可以实现复杂的视频生产管线，建议通过 `Comfy-Org/MiniMax-H3` 链接快速上手。
*   **🎵 moonshotai/Kimi-K3**：虽然信息较少，但凭借极高的点赞与下载量，它代表了国产大模型在多模态和长文本领域的另一种技术路线，值得关注其独特的 `compressed-tensors` 特性。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*