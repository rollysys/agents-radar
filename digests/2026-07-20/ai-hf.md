# Hugging Face 热门模型日报 2026-07-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-20 03:24 UTC

---

# Hugging Face 热门模型日报 (2026-07-20)

## 1. 今日速览

今日 Hugging Face 热榜迎来了基座模型的重磅更新，**Google Gemma-4** 与 **智谱 GLM-5.2** 同台竞技，展现了开源生态的强劲活力。极低比特量化技术成为新宠，**prism-ml** 推出的 1-bit/2-bit "Bonsai" 系列模型下载量突破百万，标志着端侧极简部署需求的爆发。多模态领域竞争激烈，**ThinkingMachines 的 Inkling** 登顶点赞榜，百度 **Unlimited-OCR** 则展示了垂类模型的实用价值。社区微调方面，基于 **Qwen3.5/3.6** 的变体依旧占据半壁江山，尤其是未审查版和多模态融合模型备受追捧。

---

## 2. 热门模型

### 🧠 语言模型（LLM）

*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
    *   作者: google | 点赞: 3,275 | 下载: 12,337,374
    *   **说明**: Google 最新一代开源旗舰模型，以超 1200 万的下载量霸榜，兼顾了性能与开源社区影响力。

*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 点赞: 4,172 | 下载: 536,177
    *   **说明**: 智谱最新发布的 MoE 架构模型，点赞数极高，显示出国内开源模型在国际社区的强大号召力。

*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
    *   作者: tencent | 点赞: 836 | 下载: 13,698
    *   **说明**: 腾讯推出的 Hy3 模型，主打文本生成，作为基座模型吸引了大量关注。

### 🎨 多模态与生成

*   **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
    *   作者: thinkingmachines | 点赞: 1,156 | 下载: 13,462
    *   **说明**: 今日点赞榜榜首，主打图文交互，作为新兴多模态模型引发了社区热烈的尝鲜讨论。

*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   作者: baidu | 点赞: 2,198 | 下载: 2,122,848
    *   **说明**: 百度推出的强力 OCR 模型，下载量惊人，填补了开源社区对高精度文字识别模型的刚需。

*   **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**
    *   作者: Wan-AI | 点赞: 128 | 下载: 2,408
    *   **说明**: 专注于图像到视频生成的垂直模型，展示了生成式 AI 在动态内容领域的持续探索。

### 🔧 专用模型

*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
    *   作者: OpenMOSS-Team | 点赞: 280 | 下载: 87,533
    *   **说明**: 专为语音转写与说话人分离设计，实用性极强，是音频处理领域的热门工具。

*   **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**
    *   作者: Cactus-Compute | 点赞: 279 | 下载: 955
    *   **说明**: 聚焦于 Function Calling 和 Tool Use，随着 Agent 应用落地，此类工具调用模型关注度上升。

### 📦 微调与量化

*   **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
    *   作者: prism-ml | 点赞: 501 | 下载: 1,262,894
    *   **说明**: 1-bit 极致量化模型，以极小的体积保留了较好的性能，下载量破百万，量化技术的里程碑。

*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 点赞: 2,902 | 下载: 2,084,530
    *   **说明**: 社区大神基于 Qwen3.6 的强力微调版，主打无审查与 MoE 架构，深受进阶玩家喜爱。

*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   作者: empero-ai | 点赞: 2,349 | 下载: 2,118,995
    *   **说明**: 融合了 Qwen 架构与 Claude 风格的高质量微调模型，兼具推理能力与对话流畅度。

---

## 3. 生态信号

本周模型生态呈现出**“基座更迭”与“极致压缩”**并行的态势。一方面，**Gemma-4** 和 **GLM-5.2** 的发布刷新了开源模型的 SOTA 水平，尤其是 MoE（混合专家）架构已逐渐成为大参数模型的主流选择。另一方面，**Qwen 系列** 依然是社区微调的绝对主力，衍生出的 35B 及 9B 版本在榜单中占据多数席位，显示出该系列强大的泛化能力。

值得注意的是，量化技术正在向极简方向突破。**prism-ml** 的 1-bit/2-bit 模型下载量极高，证明在边缘计算和移动端部署需求下，用户愿意牺牲部分精度换取极致的推理效率。此外，多模态正从“看图说话”向“生产工具”演变，OCR 和音视频转录类模型的实用性下载量远超一般模型，表明企业级落地需求正在主导生态下载。

---

## 4. 值得探索

1.  **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
    *   **理由**: 如果你对模型压缩技术或本地运行大模型感兴趣，这是必试之选。1-bit 量化技术让 27B 参数的模型能在极低资源环境下运行，是探索模型轻量化的绝佳案例。

2.  **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
    *   **理由**: 作为今日点赞榜第一的新模型，它代表了多模态交互的最新尝试。对于关注前沿架构和图文对齐技术的研究者来说，具有很高的研究价值。

3.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **理由**: 对于开发者而言，这是一款“拿来即用”的生产力工具。百万级下载量背书，适合直接集成到文档处理、数字化办公等实际应用场景中。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*