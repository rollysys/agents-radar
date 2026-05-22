# Hugging Face 热门模型日报 2026-05-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-22 03:55 UTC

---

# Hugging Face 热门模型日报 (2026-05-22)

## 1. 今日速览

今日 Hugging Face Hub 迎来了多项重磅更新，**DeepSeek-V4-Pro** 以超 4000 点赞和 400 万下载量霸榜，展现出开源大模型的强劲统治力。Google 发布的 **Gemma-4-31B-it** 迅速斩获 2700+ 点赞，成为社区新宠，而 **Qwen3.6** 系列凭借 MoE 架构和丰富的微调版本持续霸榜下载量前三。多模态领域同样热闹，字节跳动的 **Lance** 和腾讯的 **Pixal3D** 推动了 Any-to-Any 和 3D 生成技术的边界。此外，音频生成赛道异军突起，**Supertone** 和 **Dramabox** 等 TTS 模型引发了广泛关注。

---

## 2. 热门模型

### 🧠 语言模型（LLM）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,114 | ⬇️ 4,041,458
  - **说明**: DeepSeek V4 版本的开源主力模型，兼具强大的对话与生成能力，凭借极高的下载量和点赞数成为当之无愧的“顶流”。

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 👍 2,718 | ⬇️ 10,230,129
  - **说明**: Google 最新一代开源模型，下载量突破千万，31B 参数量级在性能与部署成本间取得了极佳平衡，社区反响热烈。

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  - 作者: Qwen | 👍 1,852 | ⬇️ 5,895,569
  - **说明**: 通义千问 3.6 版本的 MoE（混合专家）架构模型，以 35B 参数实现了高性能，下载量惊人，展示了 MoE 架构的主流化趋势。

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 👍 1,373 | ⬇️ 3,928,039
  - **说明**: Qwen 系列的稠密模型版本，作为通用基座模型，拥有极高的社区采用率。

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 1,177 | ⬇️ 2,425,002
  - **说明**: DeepSeek V4 的轻量高效版本，适合边缘侧或高频调用场景，延续了该系列的高人气。

- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
  - 作者: sapientinc | 👍 216 | ⬇️ 58,922
  - **说明**: 1B 级别的小参数文本生成模型，适合轻量化场景探索。

- **[FrontiersMind/Nandi-Mini-600M-Early-Checkpoint](https://huggingface.co/FrontiersMind/Nandi-Mini-600M-Early-Checkpoint)**
  - 作者: FrontiersMind | 👍 108 | ⬇️ 18,846
  - **说明**: 处于早期检查点的小型模型，通常用于特定任务的微调实验或研究。

### 🎨 多模态与生成

- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
  - 作者: bytedance-research | 👍 582 | ⬇️ 739
  - **说明**: 字节跳动推出的 Any-to-Any 多模态模型，支持图像、视频生成，技术前沿，是新晋趋势榜的焦点。

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 1,234 | ⬇️ 1,198,471
  - **说明**: 文本生成视频模型，下载量超百万，显示出视频生成在应用端的巨大需求。

- **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
  - 作者: circlestone-labs | 👍 1,472 | ⬇️ 591,834
  - **说明**: 结合 ComfyUI 的扩散模型，因其适配工作流且效果出色，获得了极高的社区点赞。

- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
  - 作者: openbmb | 👍 876 | ⬇️ 196,105
  - **说明**: 高效的图文多模态模型，在边缘设备部署方面极具竞争力。

- **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)**
  - 作者: HiDream-ai | 👍 417 | ⬇️ 21,558
  - **说明**: 图文生图模型，基于 Qwen3_vl，专注于高质量图像生成与编辑。

- **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)**
  - 作者: TencentARC | 👍 184 | ⬇️ 0
  - **说明**: 腾讯 ARC 实验室推出的图像转 3D 模型，尽管下载量尚未起量，但填补了 3D 生成的空白，备受瞩目。

- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
  - 作者: Supertone | 👍 541 | ⬇️ 34,965
  - **说明**: 高质量文本转语音（TTS）模型，下载量不俗，音频生成赛道的热门选手。

- **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)**
  - 作者: ResembleAI | 👍 216 | ⬇️ 1,287
  - **说明**: 专注于戏剧化语音克隆与生成的 TTS 模型，丰富了音频生成的应用场景。

- **[microsoft/Fara-7B](https://huggingface.co/microsoft/Fara-7B)**
  - 作者: microsoft | 👍 593 | ⬇️ 15,175
  - **说明**: 微软推出的多模态模型，基于 Qwen2_5_vl 架构，展现了大厂在多模态领域的持续跟进。

### 🔧 专用模型

- **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)**
  - 作者: numind | 👍 60 | ⬇️ 3,322
  - **说明**: 专注于图像到文本的结构化提取任务，为企业文档处理提供了高效工具。

- **[Jackrong/Qwopus3.5-9B-Coder-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF)**
  - 作者: Jackrong | 👍 150 | ⬇️ 24,412
  - **说明**: 基于 Qwen 微调的代码生成专用模型，并以 GGUF 格式发布，方便本地部署。

- **[Efficient-Large-Model/SANA-WM_bidirectional](https://huggingface.co/Efficient-Large-Model/SANA-WM_bidirectional)**
  - 作者: Efficient-Large-Model | 👍 76 | ⬇️ 0
  - **说明**: 专注于图像到视频及相机控制的专用模型，适合精细化视频生成研究。

### 📦 微调与量化

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  - 作者: unsloth | 👍 379 | ⬇️ 478,488
  - **说明**: Unsloth 团队发布的高效量化版本，下载量极高，是本地运行大模型的首选格式。

- **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)**
  - 作者: unsloth | 👍 315 | ⬇️ 421,542
  - **说明**: 针对 MoE 架构的量化版本，解决了显存占用痛点，极具实用价值。

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
  - 作者: froggeric | 👍 357 | ⬇️ 0
  - **说明**: 社区对 Qwen 模板问题的修复，虽无下载量，但高点赞数反映了开发者对易用性的迫切需求。

---

## 3. 生态信号

**模型家族势头分析**：本周榜单被 **DeepSeek-V4** 与 **Qwen3.6** 两大豪门牢牢占据。DeepSeek 在开源权重和推理速度（Flash 版本）上持续发力，而 Qwen 则通过 MoE 架构（A3B）和全面的参数规格（27B/35B）覆盖了从端侧到云端的各种需求。

**开源 vs 闭源趋势**：榜单前列几乎全为开源权重模型，且下载量动辄百万级，说明“开源即服务”已成为主流范式。同时，**Gemma-4** 的强势入局打破了中尺寸模型市场的平静，竞争加剧。

**微调与量化趋势**：**Unsloth** 依然是量化界的“版本答案”，其发布的 GGUF 版本下载量甚至超过部分基座模型。此外，针对 Chat Template 的修复登上热榜，显示出模型适配工具链的重要性正在上升。多模态模型（Lance, MiniCPM-V）的高热度预示着“Any-to-Any”将是下半年的核心竞争点。

---

## 4. 值得探索

1. **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
   - **理由**：作为字节跳动推出的“Any-to-Any”模型，它代表了多模态统一建模的前沿方向，值得研究人员关注其架构设计与跨模态迁移能力。

2. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
   - **理由**：千万级的下载量证明了其在 30B 参数级别的统治力。对于追求高性价比（性能/显存）的开发者，这是目前最值得尝试的基座模型之一。

3. **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)**
   - **理由**：Image-to-3D 领域目前仍是蓝海，腾讯 ARC 的作品通常质量极高，适合 3D 内容创作者和 AIGC 玩家尝鲜。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*