# Hugging Face 热门模型日报 2026-05-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-24 03:53 UTC

---

# Hugging Face 热门模型日报 (2026-05-24)

## 1. 今日速览

本周 Hugging Face 迎来了多模态生成模型的大爆发，字节跳动的 **Lance** 以“任意到任意”的能力登顶趋势榜首，显示出多模态统一模型的巨大潜力。大语言模型（LLM）方面，**DeepSeek-V4** 与 **Qwen3.6** 系列持续领跑下载榜，证明了开源基座模型的强劲生命力。值得关注的是，腾讯本周集中发布了 **Hy-MT2** 翻译系列模型，在特定任务榜单上占据了多个席位。此外，GGUF 等量化格式依然热门，社区对端侧可运行的高性能模型需求不减。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,193 | ⬇️ 4,510,828
  - **说明**: DeepSeek-V4 系列的旗舰版本，拥有极高的点赞与下载量，代表了当前开源 LLM 的顶尖水平。

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 👍 2,748 | ⬇️ 10,289,284
  - **说明**: Google 最新一代 Gemma 系列模型，下载量突破千万，兼顾了性能与相对轻量的参数规模。

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  - 作者: Qwen | 👍 1,876 | ⬇️ 6,011,835
  - **说明**: 采用 MoE（混合专家）架构的 Qwen 模型，以较低激活参数量实现了高效推理，备受社区青睐。

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 👍 1,409 | ⬇️ 4,115,906
  - **说明**: 通义千问最新迭代版本，支持图文多模态，是目前综合能力最强的开源基础模型之一。

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 1,208 | ⬇️ 2,703,252
  - **说明**: 主打高效推理的轻量版 V4 模型，适合高并发场景，下载量稳居前列。

- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
  - 作者: sapientinc | 👍 260 | ⬇️ 78,771
  - **说明**: 仅 1B 参数的文本生成模型，下载量较高，显示出端侧小模型市场的活跃。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
  - 作者: bytedance-research | 👍 710 | ⬇️ 1,227
  - **说明**: 本周趋势榜第一，主打“Any-to-Any”多模态生成，展示了字节跳动在统一多模态架构上的最新突破。

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 1,307 | ⬇️ 1,286,075
  - **说明**: 热门文生视频基础模型，下载量惊人，社区对其视频生成质量反响热烈。

- **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
  - 作者: circlestone-labs | 👍 1,517 | ⬇️ 620,247
  - **说明**: 标注为 ComfyUI 兼容的 Diffusion 模型，点赞数极高，可能是二次元或特定风格图像生成的利器。

- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
  - 作者: openbmb | 👍 914 | ⬇️ 247,170
  - **说明**: MiniCPM 系列最新多模态版本，以小体积高性能著称，适合移动端部署。

- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
  - 作者: Supertone | 👍 618 | ⬇️ 40,368
  - **说明**: 语音合成（TTS）领域的佼佼者，提供高质量的语音生成能力。

- **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)**
  - 作者: TencentARC | 👍 197 | ⬇️ 0
  - **说明**: 图像生成 3D 模型的新秀，虽然下载量为 0（可能刚发布或文件巨大），但高点赞预示着高关注度。

- **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)**
  - 作者: ResembleAI | 👍 239 | ⬇️ 1,394
  - **说明**: 专注于戏剧化语音生成与克隆，丰富了音频生成的应用场景。

### 🔧 专用模型（翻译、代码、嵌入、工具）

- **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)**
  - 作者: tencent | 👍 454 | ⬇️ 2,564
  - **说明**: 腾讯混元翻译系列，小参数高性能，针对翻译任务专项优化。

- **[tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)**
  - 作者: tencent | 👍 292 | ⬇️ 970
  - **说明**: 混元翻译模型的大参数 MoE 版本，旨在提供更精准的翻译质量。

- **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)**
  - 作者: numind | 👍 96 | ⬇️ 9,918
  - **说明**: 专注于结构化信息提取的模型，是企业数据处理pipeline的实用工具。

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**
  - 作者: Cactus-Compute | 👍 128 | ⬇️ 335
  - **说明**: 针对函数调用和工具使用优化的模型，适合构建 Agent 应用。

### 📦 微调与量化（社区微调、GGUF）

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  - 作者: unsloth | 👍 438 | ⬇️ 597,584
  - **说明**: Unsloth 出品的 Qwen3.6 高质量 GGUF 量化版，便于本地 CPU 推理。

- **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)**
  - 作者: unsloth | 👍 350 | ⬇️ 507,644
  - **说明**: 针对 MoE 架构优化的量化版本，保留了专家模型的性能同时降低显存需求。

- **[Jackrong/Qwopus3.5-9B-Coder-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF)**
  - 作者: Jackrong | 👍 173 | ⬇️ 35,795
  - **说明**: 社区开发者融合 Qwen 与 Opus 特性微调的代码专用模型量化版。

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
  - 作者: froggeric | 👍 382 | ⬇️ 0
  - **说明**: 非模型文件，旨在修复 Qwen 模型的聊天模板问题，高点赞反映了开发者在实际部署中的痛点。

---

## 3. 生态信号

**模型家族势头：** **Qwen (通义千问)** 生态目前势头最旺，不仅基座模型下载量巨大，且社区微调版（如 Qwopus、Unsloth 版）遍地开花，显示出极强的社区粘性。**DeepSeek V4** 系列则稳固了其在开源基准测试中的统治地位。**腾讯** 本周密集发布 Hy-MT2 翻译模型，显示出大厂正在通过垂直领域（如翻译）切入细分市场。

**架构与格式：** MoE（混合专家）架构已成主流，Qwen3.6-35B-A3B 和 DeepSeek 系列均证明了其在性能与成本平衡上的优势。GGUF 格式依然是本地部署的首选，Unsloth 几乎垄断了高质量量化模型的发布。

**趋势分析：** 闭源 API 与开源权重的差距在缩小，特别是多模态领域，开源模型（如 Lance, Sulphur）开始覆盖复杂的视频和任意模态生成。社区关注点正从单纯的“文本能力”转向“多模态交互”与“端侧落地”，ComfyUI 兼容性和量化易用性成为模型传播的关键加分项。

---

## 4. 值得探索

1.  **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
    作为趋势榜首，其“Any-to-Any”的定位极具前瞻性。如果你关注多模态统一架构（如同时处理图像、视频、音频生成），这是目前最值得研究的新秀。

2.  **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
    推荐尝试该模型以体验 MoE 架构的优越性。它在保持较高推理能力的同时，激活参数较小，是搭建高性价比 AI 服务的理想基座。

3.  **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
    对于 AI 绘画爱好者或 ComfyUI 用户，Anima 的高人气值得深入体验。它代表了当前开源社区在特定风格化生成上的最高水平之一。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*