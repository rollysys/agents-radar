# Hugging Face 热门模型日报 2026-07-31

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-31 03:14 UTC

---

# Hugging Face 热门模型日报 (2026-07-31)

## 1. 今日速览

本周 Hugging Face 迎来了**moonshotai/Kimi-K3** 的重磅首发，以绝对优势占据点赞榜首，标志着国产大模型在多模态领域的持续突破。**Qwen3.6** 系列依然稳固其“基座霸主”地位，不仅原版模型下载量突破 600 万，其衍生的 Uncensored（无审查）微调版本在社区中热度极高。此外，**百度 Unlimited-OCR** 的上榜揭示了垂类工具模型在实际应用中的巨大需求。整体来看，MoE（混合专家）架构已成为主流，而针对消费级硬件的 GGUF 量化与“Unaligned”微调仍是社区最活跃的生态位。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型）

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  - 作者: Qwen | 点赞: 2,595 | 下载: 6,119,519
  - **说明**：本周下载量最高的基座模型，MoE 架构平衡了性能与效率，是当前开源界的“硬通货”。

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org | 点赞: 4,684 | 下载: 1,527,760
  - **说明**：点赞数极高，GLM 系列的最新迭代，采用了 MoE-DSA 架构，在对话能力上表现优异。

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
  - 作者: poolside | 点赞: 847 | 下载: 73,246
  - **说明**：知名 AI 编程公司 poolside 发布的文本生成模型，备受开发者社区关注。

- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
  - 作者: upstage | 点赞: 704 | 下载: 12,411
  - **说明**：Upstage 推出的 250B 参数巨量模型，展示了在大参数量级上的技术探索。

- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)**
  - 作者: Nanbeige | 点赞: 582 | 下载: 24,542
  - **说明**：国产 Nanbeige 系列小参数模型，适合轻量级部署场景。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
  - 作者: moonshotai | 点赞: 9,034 | 下载: 387,822
  - **说明**：本周最耀眼的明星，点赞数断层第一，支持图像文本双模态，展现了强大的多模态理解能力。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 作者: baidu | 点赞: 3,587 | 下载: 2,598,659
  - **说明**：下载量惊人，解决了 OCR 这一高频刚需，体现了工具类模型的极高实用价值。

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
  - 作者: thinkingmachines | 点赞: 1,654 | 下载: 45,658
  - **说明**： Thinking Machines 公司推出的多模态模型，主打对话与视觉理解。

- **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)**
  - 作者: microsoft | 点赞: 122 | 下载: 2,951
  - **说明**：微软推出的视觉语言模型，进一步丰富了多模态开源生态。

- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)**
  - 作者: owensong | 点赞: 322 | 下载: 1,100
  - **说明**：面向 CPU 和边缘设备的 TTS（语音合成）模型，主打本地化部署。

- **[microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet)**
  - 作者: microsoft | 点赞: 120 | 下载: 3,864
  - **说明**：结合了 BitNet 技术的语音识别模型，在低资源消耗方面具有潜力。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**
  - 作者: Kwaipilot | 点赞: 352 | 下载: 9,225
  - **说明**：专注于代码生成的专用模型，基于 Qwen3.5 MoE 改良，专为开发者设计。

- **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)**
  - 作者: fdtn-ai | 点赞: 240 | 下载: 9,820
  - **说明**：主打安全（Security）特性的微型模型，专注于内容风控与安全检测。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
  - 作者: DavidAU | 点赞: 1,043 | 下载: 955,767
  - **说明**：下载量极高的社区微调版，主打“Uncensored”（无审查）与创意写作，GGUF 格式方便本地运行。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 点赞: 3,191 | 下载: 1,803,090
  - **说明**：点赞与下载双高，基于 Qwen3.6 的激进风格微调版，反映了社区对个性化模型的强烈需求。

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
  - 作者: prism-ml | 点赞: 1,117 | 下载: 697,666
  - **说明**：采用三元（Ternary/2-bit）量化技术的模型，在极低显存占用下运行大模型，技术含金量高。

- **[unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF)**
  - 作者: unsloth | 点赞: 209 | 下载: 12,178
  - **说明**：Unsloth 团队迅速跟进的 Kimi-K3 量化版，降低了尝鲜顶级多模态模型的门槛。

---

## 3. 生态信号

本周趋势呈现出**“基座集中化，应用长尾化”**的特点。

1.  **Qwen 家族统治力加固**：榜单中约 1/3 的模型（尤其是微调与量化版）基于 Qwen3.5/3.6 架构。Qwen 已经成为继 Llama 之后，开源社区最依赖的基座模型来源，特别是在 MoE 架构上。
2.  **“ Uncensored ” 需求强劲**：榜单中出现大量带有 "Uncensored"、"Heretic" 标签的模型，且下载量极高（如 DavidAU 和 HauhauCS 的作品）。这表明用户对于模型审查机制的反感以及对创意自由度的追求，推动了“反审查”微调生态的繁荣。
3.  **极致量化技术落地**：`Ternary-Bonsai`（三元量化）和 `BitNet` 的上榜，标志着社区正在突破硬件限制。从 FP16 到 4-bit GGUF，再到如今的 Ternary/BitNet，模型轻量化正从“可用”向“极致压缩”演进，让大模型在消费级显卡甚至 CPU 上流畅运行成为常态。

---

## 4. 值得探索

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**：作为本周的“新王”，它是目前国产多模态模型的最强代表之一，无论是对话逻辑还是图文理解能力都值得深入测试，是替代 GPT-4o 类闭源产品的首选开源方案。

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**：如果你关注边缘计算或受限于显存，这个模型展示了最新的量化技术成果。它证明了在极低比特率（Ternary）下模型仍能保持可用的性能，是技术极客的必看项目。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：对于开发者而言，OCR 是最常见的痛点之一。该模型拥有惊人的 260 万下载量，意味着它已经经过了大量实战检验，是构建文档处理、多模态 RAG 应用的“瑞士军刀”。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*