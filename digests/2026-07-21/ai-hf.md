# Hugging Face 热门模型日报 2026-07-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-21 02:51 UTC

---

# Hugging Face 热门模型日报 (2026-07-21)

## 1. 今日速览
本周 Hugging Face 社区最引人注目的趋势是**极低比特量化技术的爆发**，以 `prism-ml/Bonsai` 系列为代表的 1-bit/2-bit 模型凭借惊人的下载量占据了流量榜首。**Qwen3.6 系列模型**持续引领开源社区微调潮，涌现出大量高性能 Uncensored 和 MoE 变体。大厂方面，Google Gemma-4 和百度 Unlimited-OCR 展示了多模态与 OCR 领域的工业界最新进展。此外，机器人具身智能和工具调用模型的出现，标志着开源模型正从对话向实体应用迈进。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org | 👍 4,228 | ⬇️ 531,947
  - 一句话说明: 国产 GLM 系列的最新迭代，采用 MoE 架构，兼顾性能与推理成本，是本周最受欢迎的通用基座模型之一。

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
  - 作者: tencent | 👍 848 | ⬇️ 13,698
  - 一句话说明: 腾讯混元系列的最新文本生成模型，备受关注的国产闭源/开源同源力作。

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
  - 作者: moonshotai | 👍 1,178 | ⬇️ 713,992
  - 一句话说明: 月之暗面推出的代码特化模型，支持长上下文，在编程任务中表现优异。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
  - 作者: thinkingmachines | 👍 1,274 | ⬇️ 13,462
  - 一句话说明: 本周点赞数排名第一的新晋多模态模型，主打图文理解与对话，社区热度极高。

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 👍 3,298 | ⬇️ 11,987,240
  - 一句话说明: Google Gemma 第四代模型，下载量断层领先，兼顾多模态能力与轻量化部署，社区采用率极高。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 作者: baidu | 👍 2,453 | ⬇️ 2,122,848
  - 一句话说明: 百度推出的强力 OCR 模型，支持无限分辨率输入，解决了传统 OCR 的痛点，实用性极强。

- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**
  - 作者: Wan-AI | 👍 145 | ⬇️ 2,408
  - 一句话说明: 专注于图像到视频生成的创意模型，适合动态内容创作。

### 🔧 专用模型（代码、数学、医疗、嵌入、机器人）

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
  - 作者: openbmb | 👍 135 | ⬇️ 0
  - 一句话说明: 面向机器人操控任务的 VLA（Vision-Language-Action）模型，开源社区在具身智能领域的重要尝试。

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
  - 作者: OpenMOSS-Team | 👍 293 | ⬇️ 87,533
  - 一句话说明: 复旦 MOSS 团队推出的语音转写与说话人分离模型，音频处理利器。

- **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)**
  - 作者: nvidia | 👍 87 | ⬇️ 61,708
  - 一句话说明: NVIDIA 推出的轻量级嵌入模型，适合构建 RAG 检索系统。

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**
  - 作者: Cactus-Compute | 👍 292 | ⬇️ 950
  - 一句话说明: 专注于函数调用和工具使用的新型模型，为 Agent 应用提供了新的开源选择。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
  - 作者: prism-ml | 👍 542 | ⬇️ 1,262,894
  - 一句话说明: **1-bit 量化模型**，下载量惊人，标志着极致量化在边缘设备部署上的巨大需求。

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
  - 作者: prism-ml | 👍 857 | ⬇️ 338,945
  - 一句话说明: 采用 2-bit 三值量化，在保持性能的同时大幅降低显存占用，社区热度极高。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 2,937 | ⬇️ 2,007,025
  - 一句话说明: 基于 Qwen3.6 的 Uncensored（无审查）激进版微调，高点赞与高下载量证明了社区对自由生成模型的渴望。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  - 作者: empero-ai | 👍 2,371 | ⬇️ 2,117,323
  - 一句话说明: 融合了 Claude 风格的 Qwen 微调版，主打长上下文与推理能力，深受个人开发者喜爱。

---

## 3. 生态信号

本周开源生态呈现出**"极限压缩"与"家族垄断"**两大特征。

首先，**Qwen3.6 系列已稳坐开源 LLM 头把交椅**。榜单中近三分之一的微调/量化模型均基于 Qwen3.6 架构，尤其是在 30B 左右的参数区间，Qwen 系列几乎垄断了社区微调市场，显示出其强大的基座能力与社区认可度。

其次，**量化技术进入"比特时代"**。`prism-ml` 带来的 1-bit 和 2-bit 模型不仅获得高点赞，下载量更是达到百万级别。这表明在模型参数量日益膨胀的今天，如何在消费级硬件上运行大模型是用户最核心的痛点，极低比特量化正成为打破"显存墙"的关键技术路径。

最后，**多模态应用走向垂直化**。除了通用的图文模型外，百度 Unlimited-OCR 和 MiniCPM 机器人模型的出现，说明开源社区正从泛用模型转向解决具体场景（如长图 OCR、机器人控制）的垂直领域，开源边界正在向物理世界和复杂文档处理延伸。

---

## 4. 值得探索

1. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
   - **理由**: 1-bit 量化技术的代表作。如果你关注如何在极低资源环境下运行大模型，或者对模型压缩后的性能保留感兴趣，这是必测的标杆模型。

2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   - **理由**: 解决了传统 OCR 模型对长图、复杂排版支持不足的问题。对于需要处理文档、票据或扫描件的开发者来说，这可能是目前的 SOTA 开源选择。

3. **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
   - **理由**: 本周榜单黑马，作为点赞数最高的新模型，其具体能力和评测表现尚未完全定型，是体验最新多模态前沿技术的好机会。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*