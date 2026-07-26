# Hugging Face 热门模型日报 2026-07-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-26 03:14 UTC

---

# Hugging Face 热门模型日报 (2026-07-26)

## 今日速览
本期榜单最显著的特征是**多模态OCR**与**极端量化技术**的爆发。百度发布的 `Unlimited-OCR` 凭借超 250 万下载量占据榜首，确立了文档理解场景的统治地位。智谱 AI 的 `GLM-5.2` 以近 4500 点赞成为社区讨论度最高的基座模型。开源社区方面，`Qwen3.6` 系列依然是微调者的首选，大量高下载量的 Uncensored 版本证明了该基座的流行度。此外，`Prism-ML` 的 1-bit/2-bit 量化模型（Bonsai 系列）下载量惊人，显示出端侧大模型对极致压缩的迫切需求。

---

## 热门模型

### 🧠 语言模型（LLM）

1.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 👍 4,448 | ⬇️ 707,029
    *   **说明**：本期点赞数最高的模型，采用 MoE 架构，展现了智谱在开源基座上的持续迭代能力。

2.  **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
    *   作者: upstage | 👍 565 | ⬇️ 2,784
    *   **说明**：Upstage 发布的 250B 参数超大模型，冲击开源 SOTA，虽然下载量尚低，但社区关注度极高。

3.  **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
    *   作者: poolside | 👍 663 | ⬇️ 45,260
    *   **说明**：Poolside 发布的新一代代码生成基座，迅速引爆社区，并带动了相关量化版本的流行。

### 🎨 多模态与生成

1.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   作者: baidu | 👍 3,108 | ⬇️ 2,564,264
    *   **说明**：本期下载量冠军，专为解决复杂文档场景设计，证明了 OCR 依然是多模态落地的核心刚需。

2.  **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
    *   作者: thinkingmachines | 👍 1,572 | ⬇️ 31,575
    *   **说明**：主打对话式多模态交互，是一个高人气的图像-文本理解模型。

3.  **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)**
    *   作者: microsoft | 👍 277 | ⬇️ 1,156
    *   **说明**：微软发布的文生图与编辑模型，试图在 Stable Diffusion 生态外提供新的选择。

### 🔧 专用模型

1.  **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
    *   作者: moonshotai | 👍 1,277 | ⬇️ 749,449
    *   **说明**：月之暗面推出的代码特化版模型，下载量极高，显示出其在开发辅助场景的强大竞争力。

2.  **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
    *   作者: openbmb | 👍 175 | ⬇️ 607
    *   **说明**：具身智能新秀，专注于机器人操作任务，是 VLA（Vision-Language-Action）模型的典型代表。

3.  **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)**
    *   作者: microsoft | 👍 93 | ⬇️ 1,039
    *   **说明**：微软推出的 Computer Use 专用模型，旨在让 AI 能够像人类一样操作图形界面。

### 📦 微调与量化

1.  **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
    *   作者: prism-ml | 👍 638 | ⬇️ 2,114,963
    *   **说明**：1-bit 量化技术的里程碑作品，将 27B 模型压缩至极限，下载量突破 200 万，极适合端侧部署。

2.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 👍 3,093 | ⬇️ 1,988,680
    *   **说明**：基于 Qwen3.6 MoE 架构的高人气微调版，主打无审查与激进对话风格，下载量惊人。

3.  **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   作者: empero-ai | 👍 2,466 | ⬇️ 1,570,995
    *   **说明**：融合了 Claude 风格的推理模型，长上下文（1M）表现优秀，深受本地推理玩家喜爱。

---

## 生态信号

**Qwen3.6 确立开源霸主地位**：榜单中出现了大量基于 `Qwen3.6`（特别是 35B MoE 和 27B 版本）的微调模型，涵盖了从 Uncensored 到 Reasoning 的多种口味。这表明 Qwen3.6 已成功接棒 Llama，成为 2026 年社区微调的“新标准”。

**极端量化走向实用化**：`Prism-ML` 的 Bonsai 系列（1-bit/2-bit）不仅在榜单前列占据两席，下载量总和更是超过 300 万。这释放了一个强烈信号：随着端侧 AI（AI PC/手机）的普及，传统的 4-bit 量化已不能满足需求，1.x-bit 的极限压缩技术正迅速走向主流。

**智能体与具身智能崛起**：榜单中出现了 `MiniCPM-Robot`（机器人操作）和 `Fara1.5`（Computer Use），这标志着开源社区的焦点正从单纯的“文本生成”向“与世界交互”的 Agent 模型转移。

---

## 值得探索

1.  **prism-ml/Bonsai-27B-gguf**：如果你关注如何在消费级硬件上运行大模型，这是必看模型。其 1-bit 量化技术大幅降低了显存占用，是极低资源运行 27B 模型的最佳尝试。

2.  **baidu/Unlimited-OCR**：处理复杂文档、票据或截图的利器。作为本周下载量最高的模型，其实用价值已经过大规模验证，非常适合集成到文档处理工作流中。

3.  **openbmb/MiniCPM-RobotManip**：对于关注具身智能和机器人的开发者来说，这是一个高质量的 VLA（Vision-Language-Action）开源参考实现，代表了当前开源界在物理世界交互能力的上限。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*