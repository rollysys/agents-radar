# Hugging Face 热门模型日报 2026-07-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-27 03:23 UTC

---

# Hugging Face 热门模型日报 (2026-07-27)

## 1. 今日速览

本期榜单呈现明显的“实用性”与“极致压缩”双重趋势。百度发布的 **Unlimited-OCR** 以超 250 万下载量霸榜，显示了端到端多模态技术在文档处理领域的统治力。**Qwen3.6** 系列成为社区微调的新基底模型之王，榜单中涌现出大量基于该架构的 Uncensored 及 MoE 变体。此外，**Poolside** 的 Laguna 模型与 **Prism-ML** 的 1-bit/Ternary 量化模型引发关注，标志着开源社区在代码生成与边缘侧极低比特量化上的持续突破。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org | 👍 4,481 | ⬇️ 827,191
  - **说明**: 本周热度最高的基座模型，凭借 MoE 架构带来的高性价比，在对话和生成任务中表现优异，下载量极高。

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
  - 作者: poolside | 👍 704 | ⬇️ 56,445
  - **说明**: 知名 AI 编程公司发布的最新模型，引发了社区对其代码生成能力的强烈兴趣，多种量化版本同步上榜。

- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
  - 作者: upstage | 👍 599 | ⬇️ 3,305
  - **说明**: 韩国 Upstage 推出的 250B 参数巨型模型，显示了在开源超大参数模型上的持续探索。

- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)**
  - 作者: Nanbeige | 👍 450 | ⬇️ 14,049
  - **说明**: 国产小参数模型新星，主打轻量级与高效部署，适合资源受限的端侧场景。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 作者: baidu | 👍 3,217 | ⬇️ 2,593,460
  - **说明**: 榜单下载量冠军，解决了复杂场景下的文字识别痛点，是企业级 RAG 和文档自动化流程的首选工具。

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
  - 作者: thinkingmachines | 👍 1,581 | ⬇️ 34,511
  - **说明**: 专注于多模态对话的新秀模型，在图像与文本的交互理解上表现出色，点赞数位居前列。

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
  - 作者: moonshotai | 👍 1,298 | ⬇️ 730,129
  - **说明**: 月之暗面推出的代码多模态模型，融合了压缩张量技术，兼具视觉理解与代码生成能力。

- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)**
  - 作者: microsoft | 👍 339 | ⬇️ 1,375
  - **说明**: 微软发布的图像生成与编辑模型，支持指令级修改，展现了 Diffusion 模型在精细化编辑上的进步。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**
  - 作者: Kwaipilot | 👍 198 | ⬇️ 3,764
  - **说明**: 专为开发场景优化的代码模型，集成了 MoE 架构，在代码补全与生成任务中针对性极强。

- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)**
  - 作者: owensong | 👍 180 | ⬇️ 298
  - **说明**: 极低资源的 TTS（语音合成）模型，专为 CPU 和边缘设备设计，填补了本地语音交互的空白。

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
  - 作者: openbmb | 👍 177 | ⬇️ 643
  - **说明**: 具身智能代表作，实现了视觉语言到动作（VLA）的直接映射，是机器人控制领域的重要尝试。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 3,114 | ⬇️ 1,927,138
  - **说明**: 社区微调爆款，基于 Qwen3.6 MoE 架构，以“去审查”和激进风格著称，下载量惊人。

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
  - 作者: prism-ml | 👍 1,052 | ⬇️ 631,970
  - **说明**: 极低比特量化（Ternary/三进制）的代表，大幅降低显存需求，让 27B 模型在消费级显卡上运行更流畅。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  - 作者: empero-ai | 👍 2,480 | ⬇️ 1,410,054
  - **说明**: 融合了 Claude 风格的长上下文推理模型，1M 上下文窗口和 GGUF 格式使其成为本地长文本处理利器。

---

## 3. 生态信号

本周生态呈现 **"Qwen 全面渗透，量化走向极限"** 的鲜明特征。

首先，**Qwen3.6 架构确立了开源基座的主导地位**。榜单中大量高热度模型（如 HauhauCS、DavidAU、LuffyTheFox 的作品）均基于 Qwen3.6 进行微调，特别是在 MoE（Mixture of Experts）变体和 Uncensored（去审查）版本上，社区活跃度远超 Llama 系列。

其次，**量化技术向 1-bit 与 NVFP4 进军**。`prism-ml` 的 Ternary（三进制）量化模型和 `poolside` 的 NVFP4 版本表明，随着硬件算力的提升，社区不再满足于传统的 INT4/INT8，开始探索更激进的压缩比，旨在让大模型在边缘设备（如手机、机器人）上流畅运行。

最后，**端到端多模态实用性增强**。百度的 Unlimited-OCR 和 MiniCPM 的机器人模型虽然领域不同，但都体现了模型从“对话玩具”向“生产力工具”和“物理世界交互”的跨越，高下载量验证了市场对实用型多模态模型的渴望。

---

## 4. 值得探索

1.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    如果你的工作流涉及文档解析或 RAG 检索，这是必试模型。其极高的下载量证明了其在处理复杂排版、手写体或多语言文档时的鲁棒性，能显著提升文本提取的准确率。

2.  **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
    对于本地部署爱好者极具研究价值。它展示了如何通过极低比特量化（1.x bit）保留模型智力，是测试“压缩极限与性能平衡”的绝佳案例，适合在显存较小的消费级显卡上体验 27B 级别模型的性能。

3.  **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
    作为 AI 编程领域的新晋热门，该模型可能代表了当前代码生成的 SOTA 水平。结合其同步发布的 GGUF 和 NVFP4 版本，开发者可以全方位评估其在实际辅助编程任务中的表现。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*