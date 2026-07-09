# Hugging Face 热门模型日报 2026-07-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-09 03:32 UTC

---

# Hugging Face 热门模型日报 (2026-07-09)

## 1. 今日速览
本日榜单呈现出鲜明的“代际更替”特征，**DeepSeek-V4**、**Gemma-4** 及 **Qwen3.6** 等新一代基座模型已全面接管社区热度。开源社区在本地化部署方面极其活跃，GGUF 量化版模型下载量惊人，显示出用户对高性能端侧模型的强烈需求。多模态领域，**Nvidia** 与 **Baidu** 推出的视觉模型不仅点赞高，下载量更是突破百万级，标志着视觉理解模型已具备极强的工业落地能力。此外，针对“Agentic（智能体）”和“Uncensored（无审查）”的微调模型成为今日社区探索的新宠。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org | 点赞: 3,671 | 下载: 281,584
  - **说明**: 本次榜单点赞数最高的基座模型，采用 MoE 架构，标志着 GLM 系列的重大更新，在对话和生成任务上表现优异。

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
  - 作者: deepseek-ai | 点赞: 439 | 下载: 15,538
  - **说明**: DeepSeek 第四代模型的高阶版本，伴随最新论文发布，显示出在推理成本与性能上的最新突破。

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
  - 作者: tencent | 点赞: 566 | 下载: 121
  - **说明**: 腾讯混元系列的最新迭代，虽然下载量尚低，但高点赞数显示社区对国产大模型新架构的高度关注。

- **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)**
  - 作者: mistralai | 点赞: 168 | 下载: 157
  - **说明**: Mistral 推出的超大规模参数模型，专为复杂任务设计，彰显了开源模型向千亿参数进军的趋势。

- **[poolside/Laguna-XS-2.1](https://huggingface.co/poolside/Laguna-XS-2.1)**
  - 作者: poolside | 点赞: 80 | 下载: 3,385
  - **说明**: 知名 AI 编程公司 poolside 发布的模型，针对代码生成任务进行了优化。

### 🎨 多模态与生成（图像、视频、音频）

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 点赞: 2,667 | 下载: 1,424,958
  - **说明**: Nvidia 推出的视觉定位模型，下载量破百万，精准解决了“是什么在哪里”的视觉难题，实用性极强。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 作者: baidu | 点赞: 1,875 | 下载: 1,084,945
  - **说明**: 百度发布的 OCR 模型，主打无限长文本或复杂场景识别，成为多模态应用的基础设施级工具。

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
  - 作者: krea | 点赞: 555 | 下载: 123,729
  - **说明**: 热门生图平台 Krea 的官方 Turbo 模型，兼顾生成速度与质量，在图像生成社区反响热烈。

### 🔧 专用模型（代码、数学、Agent）

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
  - 作者: InternScience | 点赞: 400 | 下载: 14,723
  - **说明**: 专为 Agentic 工作流设计的 MoE 模型，支持图文输入，是目前 Agent 领域值得关注的开源尝试。

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
  - 作者: google | 点赞: 314 | 下载: 9,458
  - **说明**: Google 针对表格数据处理的基础模型，支持零样本分类与回归，填补了结构化数据领域的空白。

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
  - 作者: yuxinlu1 | 点赞: 2,655 | 下载: 674,977
  - **说明**: 基于 Gemma-4 的代码专用微调版，社区热度极高，显示出开发者对轻量级高性能代码模型的渴求。

### 📦 微调与量化（社区微调、GGUF）

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  - 作者: empero-ai | 点赞: 1,864 | 下载: 1,683,711
  - **说明**: 榜单下载量冠军，融合了 Claude 风格的 Qwen 微调版，极小的参数量配合 GGUF 格式，引爆本地部署市场。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 点赞: 2,577 | 下载: 2,823,988
  - **说明**: 社区微调爆款，主打“无审查”与“激进”风格，下载量逼近 300 万，反映了社区对开放模型的特定偏好。

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  - 作者: unsloth | 点赞: 1,015 | 下载: 2,842,118
  - **说明**: Unsloth 出品的高效量化版本，不仅保持了高下载量，还引入了 MTP（可能是 Multi-Token Prediction）技术。

- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)**
  - 作者: nvidia | 点赞: 326 | 下载: 538,687
  - **说明**: Nvidia 官方推出的 FP4 量化版，针对 NVIDIA GPU 进行了极致优化，是企业级部署的首选。

---

## 3. 生态信号

**Qwen 系列统治力持续增强**：榜单中近 40% 的热门模型（包括微调和量化）均基于 Qwen3.5 或 Qwen3.6 架构。无论是作为基座模型（如 Agents-A1）还是社区魔改底座，Qwen 已成为开源 LLM 的事实标准之一。

**量化标准向 FP4 演进**：除了传统的 GGUF，Nvidia 推出的 NVFP4 量化模型下载量显著，这预示着随着新一代 GPU 的普及，更低位宽、硬件协同的量化方案正在取代传统的 AWQ/GPTQ。

**Agent 与 Reasoning 主题崛起**：模型名称中频繁出现 "Agentic"、"Reasoning"、"Composer" 等词汇，说明开源社区的关注点正从单纯的“对话能力”转向“工具使用”和“复杂任务规划”能力。

---

## 4. 值得探索

1.  **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
    *理由*：作为 DeepSeek 系列的最新旗舰，其“DSpark”后缀暗示了可能集成了类似 Spark 的分布式推理或新的稀疏注意力机制，代表了当前开源 SOTA 的技术水平。

2.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *理由*：仅 3B 参数却拥有百万级下载，证明了其在视觉定位任务上的高性价比。对于需要构建视觉 Agent（如 UI 自动化、机器人视觉）的开发者而言，是极佳的入场券。

3.  **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
    *理由*：这是榜单中少有的明确标示为 "Agents" 的全模态模型。如果你想研究如何让模型调用工具或处理多模态 Agentic 任务，这是一个不可错过的开源参考。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*