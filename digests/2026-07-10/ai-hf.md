# Hugging Face 热门模型日报 2026-07-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-10 03:34 UTC

---

# Hugging Face 热门模型日报 (2026-07-10)

## 1. 今日速览

本周 Hugging Face 呈现“巨头基座更新”与“社区微调狂欢”并存的态势。**Qwen3.5/3.6 系列模型**展现出极强的统治力，不仅下载量惊人，更成为社区微调的首选基座，尤其是结合“Claude-Mythos”和“Fable”风格的推理增强模型热度极高。大厂方面，**DeepSeek-V4** 正式登场，**腾讯**与**百度**分别发力底层文本模型与 OCR 垂类。此外，**英伟达**密集发布的量化与专用模型（NVFP4、LocateAnything）显示出其在软硬结合生态上的强势布局。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - **作者**: zai-org | **点赞**: 3,732 | **下载**: 362,300
  - **说明**: 国产开源模型的重要迭代，采用 MoE 架构，本周点赞数位居榜首，展示了强劲的对话与生成能力。

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
  - **作者**: tencent | **点赞**: 617 | **下载**: 5,572
  - **说明**: 腾讯发布的新一代基座模型（Hy3/Hunyuan系列），标签显示其专注于文本生成，引发社区高度关注。

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
  - **作者**: deepseek-ai | **点赞**: 459 | **下载**: 29,230
  - **说明**: DeepSeek V4 版本发布，延续其在文本生成领域的优势，社区期待其性能对标闭源模型。

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
  - **作者**: InternScience | **点赞**: 437 | **下载**: 23,112
  - **说明**: 专注于 Agent 任务的开源模型，基于 Qwen3.5 MoE 构建，标志着开源模型在 Agent 智能体领域的探索。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - **作者**: baidu | **点赞**: 1,904 | **下载**: 1,246,042
  - **说明**: 百度推出的 OCR 利器，下载量破百万，解决了图文转换的痛点，实用性极强。

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - **作者**: nvidia | **点赞**: 2,687 | **下载**: 1,447,244
  - **说明**: 英伟达推出的视觉定位模型，下载量惊人，显示出多模态基础工具的巨大需求。

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
  - **作者**: krea | **点赞**: 570 | **下载**: 157,302
  - **说明**: 备受关注的文生图模型 Krea-2 的加速版本，在图像生成质量与速度间取得了良好平衡。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
  - **作者**: google | **点赞**: 330 | **下载**: 16,374
  - **说明**: Google 针对表格数据的基础模型，支持零样本分类与回归，为企业数据分析提供了新的 AI 路径。

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
  - **作者**: OpenMOSS-Team | **点赞**: 75 | **下载**: 2,537
  - **说明**: 专注于语音转录与说话人分离的模型，填补了开源音频处理工具链的空白。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - **作者**: HauhauCS | **点赞**: 2,599 | **下载**: 2,716,428
  - **说明**: 本周下载量最高的模型之一，基于 Qwen3.6 的无审查 MoE 微调版，反映了社区对开放内容生成的强烈需求。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  - **作者**: empero-ai | **点赞**: 1,938 | **下载**: 1,875,602
  - **说明**: 结合 Qwen 架构与 Claude 风格数据的推理模型，GGUF 格式使其在本地部署极受欢迎。

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  - **作者**: unsloth | **点赞**: 1,025 | **下载**: 2,894,918
  - **说明**: Unsloth 出品的高效量化版本，下载量近 300 万，是本地运行中大型模型的标准选择。

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
  - **作者**: yuxinlu1 | **点赞**: 2,670 | **下载**: 703,735
  - **说明**: 基于 Gemma-4 的代码专用微调版，融合了 Fable 推理链，点赞数极高，显示其代码能力获社区认可。

- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)**
  - **作者**: nvidia | **点赞**: 333 | **下载**: 748,054
  - **说明**: 英伟达官方推出的 NVFP4 量化版，优化了显存占用，为消费者级显卡运行大模型提供了官方支持。

---

## 3. 生态信号

本周生态呈现出三大显著趋势：
1.  **Qwen 家族的全面统治**：从榜单看，Qwen3.5/3.6 已取代 Llama 成为本季度社区微调的“绝对基座”。无论是 Uncensored 版、推理增强版还是量化版，Qwen 系占据了热门榜单的半壁江山。
2.  **"Mythos" 与 "Fable" 数据集效应**：多款高热度模型（如 Qwythos, Fable-traces）均提及这些数据集，暗示社区正在从单纯的指令微调转向“深度推理链”与“风格化数据”的挖掘，旨在提升模型的逻辑表现力。
3.  **量化门槛的进一步降低**：英伟达（NVFP4）与 Unsloth 的双向发力，使得 27B-35B 级别的模型在消费级硬件上的部署变得更加普及和高效，下载量动辄百万级证明了本地化部署的巨大市场。

---

## 4. 值得探索

1.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**: 作为榜单中点赞数最高的基座模型，GLM-5.2 的 MoE 架构表现值得深入测试，特别是在中文语境下的长文本处理能力，看其是否能挑战 Qwen 的地位。
2.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored...](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**: 如果你关注本地模型的“创造力”与“抗审查”能力，这款拥有近 300 万下载量的模型是目前的社区标杆，是研究社区偏好与基座模型能力边界的最佳案例。
3.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: 视觉定位是连接 LLM 与现实世界的关键一环。该模型体积小（3B）但下载量极高，非常适合作为多模态 Agent 的视觉组件进行集成开发。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*