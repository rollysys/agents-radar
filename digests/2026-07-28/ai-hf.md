# Hugging Face 热门模型日报 2026-07-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-28 02:41 UTC

---

# Hugging Face 热门模型日报 (2026-07-28)

## 1. 今日速览

今日 Hugging Face 榜单迎来了**MoonshotAI 的 Kimi-K3** 的霸榜，以超高点赞数成为焦点，显示出国产大模型在多模态领域的强劲势头。**Qwen3.6 系列**继续统治社区微调生态，衍生出多个高下载量的“Uncensored（无审查）”版本，证明了其基座模型的强大可塑性。**极端量化技术**（如 1-bit/2-bit）在保持性能的同时大幅降低推理成本，成为今日下载量的主力军。此外，**Poolside** 发布的代码模型 Laguna-S-2.1 和 **Microsoft** 的 Agent 专用模型 Fara，展示了 AI 在代码生成与自主代理方向的最新进展。

---

## 2. 热门模型

### 🧠 语言模型（LLM）

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
  - 作者: moonshotai | 👍 6,426 | ⬇️ 2,850
  - 说明: 今日榜首，新一代多模态大模型，支持图像文本理解，采用 compressed-tensors 技术，引发了社区极高关注。

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
  - 作者: poolside | 👍 758 | ⬇️ 63,605
  - 说明: 知名 AI 编程公司发布的最新代码生成模型，性能强劲，迅速吸引了开发者社区的目光。

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org | 👍 4,552 | ⬇️ 1,003,547
  - 说明: 经典对话模型的最新迭代，下载量突破百万，展现了其在对话和通用任务中的持久生命力。

- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
  - 作者: upstage | 👍 630 | ⬇️ 3,761
  - 说明: 韩国团队发布的 250B 参数巨型模型，显示了在大规模参数模型竞赛中的持续投入。

### 🎨 多模态与生成

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 作者: baidu | 👍 3,337 | ⬇️ 2,645,773
  - 说明: 今日下载量之王，百度推出的通用 OCR 模型，解决了复杂场景下的文字识别痛点，实用性极高。

- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)**
  - 作者: microsoft | 👍 392 | ⬇️ 1,691
  - 说明: 微软推出的文生图与编辑模型，集成了最新的 Diffusers 技术，为图像生成提供了新选择。

- **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)**
  - 作者: microsoft | 👍 154 | ⬇️ 1,406
  - 说明: 专为 "Computer-use"（计算机使用/代理）设计的多模态模型，标志着微软在 Agent 领域的开源布局。

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
  - 作者: thinkingmachines | 👍 1,606 | ⬇️ 36,196
  - 说明: 多模态对话模型，旨在提供更好的图像文本交互体验，获得了较高的社区认可。

### 🔧 专用模型

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**
  - 作者: Kwaipilot | 👍 243 | ⬇️ 5,312
  - 说明: 专为开发场景优化的代码模型，基于 Qwen 架构，强调代码生成与理解能力。

- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)**
  - 作者: owensong | 👍 225 | ⬇️ 483
  - 说明: 轻量级文本转语音（TTS）模型，专注于 CPU 和边缘设备推理，适合本地部署。

### 📦 微调与量化

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  - 作者: Qwen | 👍 2,548 | ⬇️ 6,187,853
  - 说明: 今日最强基座模型，下载量近 700 万，是无数社区微调版本的基石，MoE 架构平衡了性能与效率。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 3,133 | ⬇️ 1,894,395
  - 说明: 基于Qwen3.6的激进版无审查微调，下载量惊人，反映了社区对无限制模型的高需求。

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
  - 作者: prism-ml | 👍 1,069 | ⬇️ 648,938
  - 说明: 采用“三值（Ternary）”/2-bit 极端量化技术的模型，极大地降低了运行门槛，是端侧部署的热门选择。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  - 作者: empero-ai | 👍 2,491 | ⬇️ 1,336,263
  - 说明: 结合了 Claude 风格与 Mythos 角色扮演能力的长上下文微调版，深受创意写作社区喜爱。

---

## 3. 生态信号

**Qwen3.6 基础生态不可撼动，微调呈现“两极分化”。**
今日榜单中，Qwen/Qwen3.6-35B-A3B 以超 600 万下载量证明了其作为当前开源“基石”的地位。社区微调主要分化为两类：一是追求**去除审查**的版本，如 HauhauCS 和 DavidAU 的作品，虽然命名狂野，但下载量证明了用户对生成自由度的渴望；二是针对特定硬件的**极端量化**，如 prism-ml 的 1-bit/2-bit Bonsai 系列，显示在 2026 年，模型压缩技术已成为在消费级硬件上运行大模型的标配。

**多模态 OCR 与 Agent 成为巨头新战场。**
百度凭借 OCR 模型占据下载榜首，微软则通过 Mage-Flow（图像）和 Fara（Agent）布局，说明科技巨头的开源策略正从单纯的“聊天机器人”转向更具体的应用场景——数字化文档处理和自主代理交互。

**量化格式多样化。**
榜单中出现了 GGUF（兼容 CPU/llama.cpp）、NVFP4（适配 Nvidia GPU）和 compressed-tensors 等多种格式，意味着模型部署正变得更加细分，针对不同硬件环境的优化模型成为标准发布流程的一部分。

---

## 4. 值得探索

1.  **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
    作为今日点赞数最高的模型，它是 MoonshotAI 的最新力作。如果你想体验当前最前沿的国产多模态理解能力，或者研究 compressed-tensors 格式的推理优化，这是必看的模型。

2.  **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
    对于边缘计算爱好者来说，这是一个极佳的实验对象。它展示了在极低精度（2-bit）下模型性能的保留情况，是研究“模型瘦身”和本地部署的绝佳案例。

3.  **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)**
    如果你对 AI Agent（智能体）感兴趣，这个模型值得深入研究。它是少数明确标注为 "computer-use" 的开源模型，可能包含了微软对于 GUI 操作和自动化代理的独特训练数据或架构设计。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*