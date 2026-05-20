# Hugging Face 热门模型日报 2026-05-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-20 03:51 UTC

---

# Hugging Face 热门模型日报 (2026-05-20)

## 1. 今日速览

本期榜单最引人注目的趋势是**DeepSeek-V4 系列的霸榜**，其 Pro 和 Flash 版本以惊人的下载量证明了开源权重模型在基座能力上的强大统治力。**视频生成领域迎来新高潮**，Sulphur-2-base 登顶点赞榜，显示出社区对高质量视频生成模型的迫切需求。**Qwen3.6 生态持续繁荣**，尤其是 MoE 架构（A3B）和 Unsloth 的量化版本，成为开发者在端侧和本地部署的首选。此外，音频生成（TTS/音频克隆）领域竞争加剧，多款新模型进入视野。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,070 | 📥 3,622,763
  - **说明**: DeepSeek V4 系列的旗舰版本，拥有极高的下载量，代表了当前开源文本生成模型的顶尖水平。

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 1,160 | 📥 1,998,112
  - **说明**: V4 系列的轻量高效版，兼顾速度与性能，是生产环境部署的热门选择。

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  - 作者: Qwen | 👍 1,827 | 📥 5,711,500
  - **说明**: Qwen 最新 MoE 架构模型，以 35B 参数量实现高性能，下载量突破 500 万，成为本周最受欢迎的开源基座之一。

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 👍 2,698 | 📥 10,045,599
  - **说明**: Google 最新一代 Gemma 模型，下载量惊人，凭借 31B 的黄金尺寸和指令微调，成为兼顾消费级硬件与性能的标杆。

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 👍 1,347 | 📥 3,681,887
  - **说明**: Qwen3.6 系列的 Dense 版本，平衡了推理成本与模型效果，社区活跃度极高。

- **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)**
  - 作者: Zyphra | 👍 539 | 📥 146,253
  - **说明**: 专注于推理能力的 8B 模型，在小参数量级中表现出色，适合特定逻辑任务。

- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
  - 作者: sapientinc | 👍 128 | 📥 884
  - **说明**: 面向文本生成的 1B 轻量级模型，主打边缘设备部署场景。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 1,179 | 📥 1,114,657
  - **说明**: 本期点赞榜首，强大的文本生成视频基座模型，下载量超百万，视频生成赛道的新星。

- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
  - 作者: openbmb | 👍 807 | 📥 144,826
  - **说明**: 高效的端侧多模态模型，支持图文理解，因在移动端的高适配性而备受关注。

- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
  - 作者: Supertone | 👍 474 | 📥 28,681
  - **说明**: 新一代 TTS 模型，提供高质量语音合成，在声音克隆和情感表达上表现优异。

- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
  - 作者: bytedance-research | 👍 332 | 📥 171
  - **说明**: 字节跳动推出的 Any-to-Any 多模态生成模型，支持图像与视频生成的统一架构。

- **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)**
  - 作者: HiDream-ai | 👍 402 | 📥 15,822
  - **说明**: 图文生图模型，结合了 Qwen3 VL 的视觉能力，专注于高质量图像编辑与生成。

- **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)**
  - 作者: SeeSee21 | 👍 418 | 📥 15,794
  - **说明**: 专注于动漫风格的文生图模型，风格化强烈，深受 ACG 社区喜爱。

- **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)**
  - 作者: ResembleAI | 👍 185 | 📥 1,118
  - **说明**: 主打戏剧化表现力的 TTS 模型，具备强大的声音克隆能力。

- **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)**
  - 作者: TencentARC | 👍 155 | 📥 0
  - **说明**: 腾讯 ARC 出品的图像转 3D 模型，解决了 3D 资产生成的痛点。

- **[RuneXX/LTX-2.3-Workflows](https://huggingface.co/RuneXX/LTX-2.3-Workflows)**
  - 作者: RuneXX | 👍 590 | 📥 0
  - **说明**: LTX 视频生成系列的工作流组件，提供了高效的视频处理管线。

### 🔧 专用模型（工具、架构、特定任务）

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**
  - 作者: Cactus-Compute | 👍 98 | 📥 268
  - **说明**: 专为工具使用和函数调用优化的编码器-解码器架构，提升了 Agent 的执行能力。

- **[FrontiersMind/Nandi-Mini-600M-Early-Checkpoint](https://huggingface.co/FrontiersMind/Nandi-Mini-600M-Early-Checkpoint)**
  - 作者: FrontiersMind | 👍 100 | 📥 18,458
  - **说明**: 超小参数量的文本生成模型早期检查点，适合研究极低资源环境下的模型表现。

- **[microsoft/Fara-7B](https://huggingface.co/microsoft/Fara-7B)**
  - 作者: microsoft | 👍 583 | 📥 14,464
  - **说明**: 微软推出的多模态模型，基于 Qwen2.5 VL 架构优化，专注于图文理解任务。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  - 作者: unsloth | 👍 331 | 📥 337,076
  - **说明**: Unsloth 优化版 Qwen3.6，GGUF 格式极大降低了本地部署门槛，下载量极高。

- **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)**
  - 作者: unsloth | 👍 272 | 📥 296,380
  - **说明**: MoE 架构的量化版本，让普通用户也能在消费级显卡上跑起 35B 级模型。

- **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)**
  - 作者: Jiunsong | 👍 629 | 📥 268,561
  - **说明**: 无审查版 Gemma4 微调模型，满足了社区对更自由、开放对话生成的需求。

- **[Jackrong/Qwopus3.5-9B-Coder-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF)**
  - 作者: Jackrong | 👍 124 | 📥 12,117
  - **说明**: 针对代码能力优化的 Qwen 变体，适合本地编程辅助场景。

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
  - 作者: froggeric | 👍 315 | 📥 0
  - **说明**: 修复了 Qwen 模型聊天模板问题的社区贡献，解决了开发者集成时的痛点。

---

## 3. 生态信号

**模型家族势头**：榜单被 **DeepSeek-V4** 和 **Qwen3.6** 两大巨头牢牢占据。DeepSeek 凭借强大的基座性能拿下了最高的下载量，证明了“开放权重+高性能”策略的成功；而 Qwen3.6 通过 MoE（A3B）和 Dense（27B）双轨并行，覆盖了从移动端到服务器端的广泛需求，特别是 MoE 架构因其推理成本优势，下载量已超 570 万。

**多模态趋势**：视频生成正在经历类似早期文生图的爆发期，**Sulphur-2** 的上位标志着视频生成模型正从“尝鲜”走向“实用”。同时，音频领域异军突起，**Supertone** 和 **Dramabox** 表明高保真 TTS 和声音克隆正成为新的竞争热点。

**开源 vs 闭源**：榜单前列几乎全为开源权重或开放模型，闭源 API 模型在 HF Hub 上的影响力相对较弱。社区对“可下载、可微调”模型的偏好依然强烈。

**量化与微调**：**Unsloth** 依然是量化领域的守门人，几乎所有热门大模型（Qwen, Gemma）都会迅速出现 Unsloth GGUF 版本。同时，“Uncensored”（无审查）微调版模型（如 supergemma4）持续获得高赞，反映了社区对模型输出限制解除的持续需求。

---

## 4. 值得探索

1.  **SulphurAI/Sulphur-2-base**: 作为本期点赞冠军，它是目前视频生成领域的新晋 SOTA 级开源模型，适合关注 AIGC 视频制作和创作工作流的开发者深入研究。
2.  **bytedance-research/Lance**: 这是一个“Any-to-Any”的统一生成模型，代表了多模态融合的前沿方向，对于研究单一模型处理多种模态任务的架构设计非常有价值。
3.  **Jiunsong/supergemma4-26b-uncensored-gguf-v2**: 如果你在寻找一个在本地运行、且对话限制较少的强力模型，这个 Gemma4 的微调版是一个极佳的尝试对象，结合了 Google 的基座性能与社区的微调自由度。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*