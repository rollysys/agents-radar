# Hugging Face 热门模型日报 2026-06-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-03 04:23 UTC

---

# Hugging Face 热门模型日报 (2026-06-03)

## 1. 今日速览
今日 Hugging Face 迎来多款重磅更新，**DeepSeek-V4** 系列以绝对优势霸榜，展现了开源权重模型在性能与下载量上的双重统治力。**NVIDIA** 矩阵式发力，推出了定位视觉任务的 **LocateAnything** 及 Cosmos3 系列生成模型，覆盖从定位到视频生成的全链路。社区方面，基于 **Qwen3.6** 架构的 MoE 微调模型（如 HauhauCS 版本）下载量突破 250 万，显示出“Uncensored（无审查）”与高效架构在端侧部署的巨大需求。此外，**LiquidAI** 的新架构模型与 **JetBrains** 的代码思考模型也引起了广泛关注。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,577 | 📥 5,829,042
  - **说明**: 今日榜单点赞数最高的模型，作为 DeepSeek V4 系列的旗舰版本，其在文本生成与对话能力上的突破使其成为当前开源界的“顶流”。

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 1,368 | 📥 3,525,218
  - **说明**: V4 系列的轻量化版本，兼顾速度与性能，下载量惊人，是当前开发者首选的高效推理基座模型。

- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
  - 作者: LiquidAI | 👍 445 | 📥 47,742
  - **说明**: LiquidAI 发布的全新 MoE 架构模型，主打液体神经网络特性，在保持 8B 体量下实现了优异的激活参数效率。

- **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
  - 作者: openbmb | 👍 737 | 📥 57,683
  - **说明**: 面向端侧设备的极致小参数模型，MiniCPM 系列迭代至第五代，在 1B 参数量级保持了极高的性价比。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 👍 1,002 | 📥 61,604
  - **说明**: 今日趋势榜眼，NVIDIA 推出的视觉定位模型，专注于图像文本理解与目标定位，小巧精悍，填补了特定视觉任务的空白。

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 1,513 | 📥 1,663,826
  - **说明**: 热度极高的文生视频基础模型，基于 LTX-2.3 改进，下载量超百万，是当前开源视频生成领域的热门选择。

- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
  - 作者: bytedance-research | 👍 1,014 | 📥 3,192
  - **说明**: 字节跳动推出的 Any-to-Any 多模态模型，支持图像与视频生成，展现了统一的生成架构潜力。

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 👍 1,579 | 📥 5,243,648
  - **说明**: 阿里通义千问 3.6 系列官方基座，支持图文双模态，下载量超 500 万，是当前多模态应用的标准基座之一。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
  - 作者: openai | 👍 1,595 | 📥 300,247
  - **说明**: OpenAI 开源的隐私过滤工具，用于 Token 分类任务，在数据合规日益重要的背景下备受关注。

- **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
  - 作者: JetBrains | 👍 145 | 📥 799
  - **说明**: 著名 IDE 开发商推出的代码模型，引入“Thinking”推理机制，专为编程辅助与复杂逻辑代码生成设计。

- **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)**
  - 作者: PaddlePaddle | 👍 190 | 📥 4,003
  - **说明**: 结合视觉语言模型的 OCR 升级版，增强了文档理解能力，是工业界 OCR 应用的首选工具。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 1,289 | 📥 2,573,320
  - **说明**: 今日下载量最高的社区模型，基于 Qwen3.6 的 MoE 架构微调，主打“无审查”与“激进”风格，深受开源社区玩家追捧。

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  - 作者: unsloth | 👍 611 | 📥 982,631
  - **说明**: Unsloth 提供的高效 GGUF 量化版本，适配 llama.cpp，极大地降低了本地部署 Qwen3.6 多模态模型的门槛。

- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
  - 作者: nvidia | 👍 139 | 📥 313,480
  - **说明**: NVIDIA 官方提供的 FP4 量化版 MoE 模型，针对 GPU 硬件优化，展示了软硬一体的推理加速方案。

---

## 3. 生态信号

1.  **DeepSeek 与 Qwen 的双寡头格局**：榜单前三名被 DeepSeek-V4 包揽，而 Qwen3.6 则在微调与量化版块占据绝对主导。这表明开源生态已形成 DeepSeek 主攻基座性能、Qwen 主攻生态衍生的格局。
2.  **MoE 架构平民化**：无论是 DeepSeek-V4、LiquidAI LFM2.5 还是 Qwen3.6 的衍生版，混合专家架构已成为标准配置。特别是 HauhauCS 的模型下载量破 250 万，证明用户对高性能、低推理成本的“Uncensored”模型有极强需求。
3.  **NVIDIA 的全栈渗透**：NVIDIA 不再仅提供算力，从 LocateAnything（视觉）到 Cosmos3（生成），再到 NVFP4 量化工具，正在通过模型层面对开发者生态进行深度绑定。

---

## 4. 值得探索

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - **理由**: 作为 NVIDIA 的新作，它可能预示着视觉大模型从通用识别向高精度“定位”任务的细分转移，对于 RAG、机器人控制等需要精细视觉反馈的场景极具价值。

- **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
  - **理由**: 将“Thinking（慢思考）”机制引入代码模型是一个有趣的尝试。对于开发者而言，模型不仅是补全工具，更可能成为能进行架构推理的编程伙伴，值得 IDE 插件开发者深入研究。

- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
  - **理由**: “Any-to-Any”是通往 AGI 的重要方向。Lance 模型统一了图像和视频生成，探索其在多模态转换任务上的表现，有助于预判下一代生成式模型的交互形态。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*