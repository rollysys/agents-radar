# Hugging Face 热门模型日报 2026-07-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-22 02:49 UTC

---

# Hugging Face 热门模型日报 (2026-07-22)

## 📰 今日速览
本周 Hugging Face 平台呈现出“端侧爆发与多模态进阶”的双重态势。**Google Gemma-4** 与 **智谱 GLM-5.2** 凭借强大的基础能力霸榜，证明了开源基础模型的持久生命力。令人瞩目的是，**1-bit/2-bit 极致量化模型**（如 Bonsai 系列）下载量激增，显示出社区对低资源消耗运行大模型的强烈需求。此外，**百度 Unlimited-OCR** 和 **MiniCPM 机器人模型** 的上榜，标志着多模态应用正从“看图说话”向“专业识别”与“具身智能”纵深发展。

---

## 📊 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

1.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   **作者**：zai-org | **👍 点赞**：4,285 | **📥 下载**：545,109
    *   **点评**：智谱最新一代 MoE 架构模型，支持 DSA（动态扩容），凭借出色的长文本与推理能力获得本周最高点赞数，是开源社区的新晋王者。

2.  **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
    *   **作者**：google | **👍 点赞**：3,314 | **📥 下载**：12,113,203
    *   **点评**：Google 第四代 Gemma 模型，下载量断层领先，31B 参数兼顾了性能与消费级显卡适配，是多模态文本任务的首选基座。

3.  **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
    *   **作者**：poolside | **👍 点赞**：206 | **📥 下载**：3,056
    *   **点评**：新兴势力 poolside 发布的代码与推理模型，以出色的编程能力闯入榜单，备受开发者关注。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

1.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **作者**：baidu | **👍 点赞**：2,613 | **📥 下载**：2,237,351
    *   **点评**：百度推出的通用 OCR 模型，支持无限分辨率输入，解决了传统模型长图识别痛点，下载量极高，是当周最实用的工具模型。

2.  **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
    *   **作者**：thinkingmachines | **👍 点赞**：1,368 | **📥 下载**：16,441
    *   **点评**：本周黑马，主打“对话式图像理解”，不仅能识图还能基于图像进行深度多轮对话，点赞数飙升。

3.  **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**
    *   **作者**：Alissonerdx | **👍 点赞**：223 | **📥 下载**：0
    *   **点评**：基于 LTX 视频生成模型的 LoRA，专注于视频中的人脸 ID 保持，解决了 AI 视频生成中“人物一致性”难题。

### 🔧 专用模型（代码、数学、医疗、嵌入、机器人）

1.  **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
    *   **作者**：openbmb | **👍 点赞**：147 | **📥 下载**：58
    *   **点评**：具身智能领域的突破性模型，将视觉语言模型（VLA）用于机器人操控，标志着 AI 从数字世界走向物理世界。

2.  **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)**
    *   **作者**：nvidia | **👍 点赞**：96 | **📥 下载**：93,021
    *   **点评**：英伟达推出的小型嵌入模型，专为 RAG 和语义检索优化，以 1B 参数实现了极高的性价比。

3.  **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**
    *   **作者**：Cactus-Compute | **👍 点赞**：298 | **📥 下载**：1,068
    *   **点评**：专注于 Tool Use（工具调用）的模型，旨在解决大模型调用外部 API 的准确性问题，是企业级 Agent 开发的重要尝试。

### 📦 微调与量化（社区微调、GGUF、AWQ）

1.  **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
    *   **作者**：prism-ml | **👍 点赞**：900 | **📥 下载**：432,196
    *   **点评**：采用三值化技术的量化模型，将 27B 模型压缩至极低比特，下载量惊人，展示了端侧运行大模型的巨大需求。

2.  **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
    *   **作者**：prism-ml | **👍 点赞**：571 | **📥 下载**：1,404,962
    *   **点评**：1-bit 量化模型的代表作，虽然牺牲了一定精度，但大幅降低了内存门槛，是“平民级 AI”的典型代表。

3.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **作者**：HauhauCS | **👍 点赞**：2,971 | **📥 下载**：1,997,690
    *   **点评**：基于 Qwen3.6 的“狂野”微调版，去除了安全审查，下载量极高，反映了社区对无限制创意写作模型的刚需。

---

## 📈 生态信号

本周模型生态呈现出明显的**“两极化融合”**趋势。

1.  **量化技术的平民化革命**：`prism-ml` 系列模型（Bonsai）占据下载榜半壁江山，尤其是 1-bit 和 2-bit（Ternary）模型的流行，标志着**极低比特量化技术**已从实验室走向大众。用户宁愿牺牲部分精度也要换取在本地设备运行 27B+ 模型的能力。
2.  **Qwen 生态的统治力**：在微调榜单中，`Qwen3.6` 系列成为绝对的主力基座，几乎所有的热门微调模型（如 HauhauCS 和 DavidAU 的作品）均基于此。这表明 Qwen 已超越 Llama，成为社区微调的新一代“亲儿子”。
3.  **具身智能落地前夜**：`MiniCPM-RobotManip` 等模型的出现，意味着开源社区开始从纯文本/图像处理向**Vision-Language-Action (VLA)** 跨界，机器人控制模型正成为新的增长点。

---

## 💡 值得探索

1.  **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
    *   **理由**：如果你想在自己的笔记本电脑上体验 27B 参数级别的模型智能，这是必试之作。它代表了当前边缘端推理技术的最高水平。

2.  **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
    *   **理由**：对于关注 AI Agent 和物理世界交互的研究者，这是极少数公开可用的机器人操控 VLA 模型，是通往具身智能的一把钥匙。

3.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **理由**：解决了传统 OCR 模型对长图、复杂排版处理不佳的痛点，对于文档处理、票据识别等实际业务场景具有极高的实用价值。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*