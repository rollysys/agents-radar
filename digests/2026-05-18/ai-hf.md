# Hugging Face 热门模型日报 2026-05-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-18 03:56 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-05-18

---

### 1. 今日速览
本周 Hugging Face 迎来了**DeepSeek-V4**系列的强势霸榜，其 Pro 与 Flash 版本以超高的下载量和点赞数确立了开源权重模型的新标杆。**Qwen3.6** 系列持续发力，特别是 MoE 架构（A3B）与量化版（GGUF）在社区中引发了广泛的部署热潮。多模态领域亮点频出，**MiniCPM-V-4.6** 展现了端侧多模态模型的强大潜力，而视频生成模型 **Sulphur-2-base** 则以近百万下载量证明了视频生成领域的火热。整体来看，模型生态正向更高效、更长上下文及多模态融合方向加速演进。

---

### 2. 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   作者: deepseek-ai | 👍 4,015 | 📥 3,140,341
    *   **说明：** 本周最受欢迎的模型，代表 DeepSeek 最新一代旗舰水平，强大的文本生成与对话能力使其成为开源界的性能王者。
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
    *   作者: google | 👍 2,672 | 📥 9,858,626
    *   **说明：** Google 最新发布的指令微调模型，下载量惊人，31B 参数量在性能与推理成本间取得了极佳平衡，适配性极强。
*   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
    *   作者: Qwen | 👍 1,801 | 📥 5,477,343
    *   **说明：** 采用 MoE（混合专家）架构，以 35B 的总参数量实现了高效的推理，下载量破 500 万，是当前最热门的高效基座模型之一。
*   **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
    *   作者: Qwen | 👍 1,315 | 📥 3,413,560
    *   **说明：** Qwen 系列稠密模型代表作，兼顾多模态能力与文本生成的稳健表现，社区活跃度极高。
*   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
    *   作者: deepseek-ai | 👍 1,133 | 📥 1,804,238
    *   **说明：** DeepSeek-V4 的高效轻量版，专为快速推理场景优化，是构建高并发应用的首选。
*   **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)**
    *   作者: Zyphra | 👍 525 | 📥 144,833
    *   **说明：** 基于 Reasoning-base 微调的新锐模型，主打推理能力，引起了社区的广泛讨论。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
    *   作者: openbmb | 👍 700 | 📥 56,518
    *   **说明：** 专为端侧部署设计的多模态模型，高效且小巧，随着移动端 AI 需求增加而备受关注。
*   **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
    *   作者: SulphurAI | 👍 1,076 | 📥 970,124
    *   **说明：** 文生视频基础模型，下载量逼近百万，显示出视频生成赛道的技术成熟度和应用需求正在爆发。
*   **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
    *   作者: circlestone-labs | 👍 1,376 | 📥 524,067
    *   **说明：** 结合 Diffusion 与 ComfyUI 工作流的热门模型，在图像生成社区拥有极高的人气。
*   **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)**
    *   作者: HiDream-ai | 👍 380 | 📥 14,285
    *   **说明：** 结合 Qwen3_VL 技术的图文生成模型，展示了图像编辑与理解的新范式。
*   **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)**
    *   作者: SeeSee21 | 👍 396 | 📥 14,991
    *   **说明：** 专注于动漫风格的文生图模型，二次元生成赛道的热门选择。
*   **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
    *   作者: Supertone | 👍 365 | 📥 20,208
    *   **说明：** 高质量语音合成模型，支持 ONNX 格式，便于在各种设备上部署。
*   **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)**
    *   作者: TencentARC | 👍 129 | 📥 0
    *   **说明：** 腾讯 ARC 团队推出的图生 3D 模型，刚发布即上榜，解决了 3D 资产生成的痛点。

#### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **[microsoft/Fara-7B](https://huggingface.co/microsoft/Fara-7B)**
    *   作者: microsoft | 👍 574 | 📥 17,170
    *   **说明：** 微软推出的多模态模型，基于 Qwen2_5_VL 架构，可能在特定领域（如文档理解）有优化。
*   **[jackxinning/Leanly_AI](https://huggingface.co/jackxinning/Leanly_AI)**
    *   作者: jackxinning | 👍 117 | 📥 9,383
    *   **说明：** 面向医疗问答领域的垂直模型，中英双语支持，适合医疗健康场景应用。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *   作者: unsloth | 👍 236 | 📥 185,303
    *   **说明：** Unsloth 提供的高效 GGUF 量化版，极大地降低了 Qwen3.6 的本地部署门槛。
*   **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)**
    *   作者: unsloth | 👍 218 | 📥 181,425
    *   **说明：** MoE 架构的量化版本，社区对高性能小参数模型的本地化需求依然旺盛。
*   **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)**
    *   作者: Jiunsong | 👍 620 | 📥 268,773
    *   **说明：** 去除审查限制的 Gemma4 微调版，高点赞量反映了社区对无限制内容生成的强烈需求。
*   **[antirez/deepseek-v4-gguf](https://huggingface.co/antirez/deepseek-v4-gguf)**
    *   作者: antirez | 👍 136 | 📥 283,772
    *   **说明：** 社区驱动的 DeepSeek-V4 量化版，让普通消费者也能运行顶级大模型。

---

### 3. 生态信号

本周生态呈现**“巨头对标，社区量化，端侧崛起”**三大特征。
1.  **模型家族：** **DeepSeek** 与 **Qwen** 已形成明显的双雄争霸格局。DeepSeek-V4 凭借 Pro/Flash 组合牢牢占据性能与应用头部，而 Qwen3.6 通过 MoE 架构在参数效率上取得突破，下载量屡创新高。**Gemma-4** 的加入让竞争更加白热化。
2.  **开源趋势：** 顶级开源权重的发布速度惊人，且迅速带动了 **GGUF** 等量化生态的繁荣。Unsloth 等量化团队几乎同步跟进，表明“即开即用”的本地化部署已成为刚需。
3.  **生成式 AI 扩展：** 视频生成不再是小众，下载量级已逼近文本模型；同时，针对动漫、语音克隆等垂直领域的微调模型热度上升，标志着开源模型正从“能跑”向“好用、好玩、专用”深化。

---

### 4. 值得探索

*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**：作为目前的榜单冠军，它是测试当前开源 SOTA 水平的最佳基准，无论是逻辑推理还是长文本处理都值得一试。
*   **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**：视频生成领域的“黑马”，高下载量意味着其在稳定性和生成质量上可能有质的飞跃，适合视频创作者研究。
*   **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**：如果你关注边缘计算或移动端 AI 应用，这个模型是极佳的切入点，展示了如何在有限算力下实现强大的多模态能力。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*