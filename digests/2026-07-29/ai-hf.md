# Hugging Face 热门模型日报 2026-07-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-29 02:48 UTC

---

# Hugging Face 热门模型日报 (2026-07-29)

## 1. 今日速览

本周 Hugging Face 榜单由 **Moonshot** 的 `Kimi-K3` 强势领跑，作为新一代多模态模型引发社区高度关注。**百度**的 `Unlimited-OCR` 凭借超过 269 万的下载量，成为实用性最强的工具型模型。**Qwen3.6** 系列基座模型继续展现强大的生态统治力，榜单中出现大量基于该模型的社区微调版本。同时，**poolside** 和 **Microsoft** 带来的新一代代码与图像模型，以及 **1-bit/2-bit** 极低比特量化技术的流行，标志着模型效率与性能的平衡正在达到新高度。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型）

*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 👍 4,608 | ⬇️ 1,267,198
    *   **说明**: 老牌强劲对话模型，下载量破百万，凭借稳定的对话能力和广泛的应用基础稳居主流地位。
*   **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
    *   作者: poolside | 👍 801 | ⬇️ 67,286
    *   **说明**: 知名 AI 公司发布的最新一代文本生成模型，性能强劲，引发社区热议。
*   **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)**
    *   作者: Nanbeige | 👍 530 | ⬇️ 18,933
    *   **说明**: 轻量级参数模型，适合资源受限场景，展现了小模型在特定任务下的竞争力。
*   **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
    *   作者: prism-ml | 👍 680 | ⬇️ 2,339,098
    *   **说明**: 创新的 1-bit 量化模型，下载量巨大，标志着极低比特量化技术进入实用化阶段。

### 🎨 多模态与生成

*   **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
    *   作者: moonshotai | 👍 8,074 | ⬇️ 99,214
    *   **说明**: 本周最耀眼的明星模型，支持图文双模态，点赞数断层领先，代表了国产多模态模型的新高度。
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   作者: baidu | 👍 3,423 | ⬇️ 2,694,935
    *   **说明**: 下载数据傲视群雄，解决了复杂的 OCR 任务，是生产环境中最受欢迎的工具之一。
*   **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)**
    *   作者: microsoft | 👍 418 | ⬇️ 2,007
    *   **说明**: 微软推出的文生图与编辑模型，挑战现有图像生成格局，技术前瞻性强。
*   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
    *   作者: Qwen | 👍 2,571 | ⬇️ 6,158,876
    *   **说明**: Qwen 系列旗舰级多模态基座模型，下载量惊人，是社区微调的"黄金"底座。
*   **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)**
    *   作者: owensong | 👍 268 | ⬇️ 645
    *   **说明**: 专注于端侧 CPU 的语音合成模型，展现了 AI 在边缘设备部署上的最新进展。

### 🔧 专用模型

*   **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**
    *   作者: Kwaipilot | 👍 289 | ⬇️ 6,275
    *   **说明**: 专为代码生成优化的模型，针对开发者场景进行了深度调优。
*   **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)**
    *   作者: fdtn-ai | 👍 223 | ⬇️ 7,666
    *   **说明**: 专注于安全领域的轻量级模型，填补了开源模型在安全合规方面的空白。

### 📦 微调与量化

*   **[DavidAU/Qwen3.6-27B-Fable-Fusion...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
    *   作者: DavidAU | 👍 857 | ⬇️ 736,692
    *   **说明**: 典型的"名字越长模型越强"系列，基于 Qwen 的无审查创意微调，深受发烧友喜爱。
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored...](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 👍 3,158 | ⬇️ 1,855,505
    *   **说明**: 激进风格的无审查微调版本，下载量极高，反映了社区对开放对话能力的渴求。
*   **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
    *   作者: prism-ml | 👍 1,085 | ⬇️ 665,427
    *   **说明**: 2-bit 三元量化模型，在保持可用性的同时将模型压缩到极致，是量化技术的前沿探索。
*   **[unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF)**
    *   作者: unsloth | 👍 232 | ⬇️ 129,601
    *   **说明**: Unsloth 团队快速跟进的高效量化版 Laguna，方便本地部署。

---

## 3. 生态信号

本周生态呈现出**"基座垄断，微调繁荣"**的特点。**Qwen3.6** 系列无疑是当前开源界的绝对霸主，不仅官方版本下载量巨大，榜单中约 30% 的热门模型都是基于 Qwen3.6 的社区微调版（Uncensored, Fable-Fusion 等），显示出其架构的优越性和社区活跃度。

**多模态与实用性**正在合流，`Kimi-K3` 和 `Unlimited-OCR` 的火爆证明，单纯文本生成已不足以满足市场需求，能解决 OCR、图表理解等实际痛点的模型更受青睐。

在部署层面，**极端量化**成为新趋势。`prism-ml` 的 1-bit/2-bit 模型（Bonsai, Ternary）排名靠前，意味着在硬件成本高昂的背景下，社区正积极寻找降低大模型运行门槛的"硬核"解决方案。

---

## 4. 值得探索

1.  **moonshotai/Kimi-K3**: 作为榜单冠军，它是国产多模态模型的新里程碑，值得深入研究其图文理解能力与长上下文表现。
2.  **baidu/Unlimited-OCR**: 如果你有文档处理需求，这是必试模型，惊人的下载量证明了其鲁棒性和工业级可用性。
3.  **prism-ml/Ternary-Bonsai-27B-gguf**: 对模型压缩技术感兴趣的研究者不应错过，它展示了如何在极低精度（2-bit）下保留模型智能。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*