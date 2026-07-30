# Hugging Face 热门模型日报 2026-07-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-30 02:33 UTC

---

# Hugging Face 热门模型日报 (2026-07-30)

## 今日速览
今日 Hugging Face 榜单由 **Moonshot** 的 **Kimi-K3** 强势领跑，凭借其优秀的多模态处理能力获得最高点赞数。**百度**与**智谱** 等中国大模型厂商持续发力，开源了如 Unlimited-OCR 和 GLM-5.2 等高质量模型，下载量惊人。社区微调方面，基于 **Qwen3.6** 架构的“Uncensored（无审查）”版本模型在榜单上占据多个席位，显示出用户对个性化与去限制内容的强烈需求。技术趋势上，**极低比特量化**（如 ternary/1-bit）与 **GGUF** 格式的结合正成为本地部署的新宠。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型）

1.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 👍 4,644 | 📥 1,267,198
    *   **说明**：智谱开源的对话模型，下载量破百万，采用 MoE 架构，是当前最热门的通用底座模型之一。

2.  **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
    *   作者: Qwen | 👍 2,587 | 📥 6,158,876
    *   **说明**：通义千问系列旗舰 MoE 模型，下载量断层领先，是社区微调和应用落地的基础骨干。

3.  **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
    *   作者: poolside | 👍 827 | 📥 67,286
    *   **说明**：新兴强力文本生成模型，因社区迅速跟进 GGUF 版本而受到关注。

4.  **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
    *   作者: upstage | 👍 697 | 📥 4,804
    *   **说明**：Upstage 推出的 250B 参数超大模型，显示出大参数规模模型在企业级应用中的回归。

### 🎨 多模态与生成（图像、视频、音频）

1.  **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
    *   作者: moonshotai | 👍 8,677 | 📥 99,214
    *   **说明**：今日点赞数最高的模型，支持图文理解，标志着 Moonshot 在开源多模态领域的重大突破。

2.  **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
    *   作者: thinkingmachines | 👍 1,640 | 📥 39,052
    *   **说明**：专注于对话能力的多模态模型，受到社区开发者的热烈追捧。

3.  **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)**
    *   作者: owensong | 👍 290 | 📥 645
    *   **说明**：轻量级语音合成（TTS）模型，主打 CPU 和边缘设备友好，适合本地部署。

### 🔧 专用模型（代码、数学、OCR）

1.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   作者: baidu | 👍 3,517 | 📥 2,694,935
    *   **说明**：百度开源的 OCR 模型，下载量极高，解决了长图或复杂文档的识别痛点。

2.  **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**
    *   作者: Kwaipilot | 👍 318 | 📥 6,275
    *   **说明**：专为代码生成设计的模型，基于 Qwen3.5 MoE 架构，面向开发者工具链。

3.  **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**
    *   作者: ATH-MaaS | 👍 346 | 📥 47,129
    *   **说明**：结合了视觉语言模型能力的 OCR 专家模型。

### 📦 微调与量化（社区微调、GGUF）

1.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 👍 3,171 | 📥 1,855,505
    *   **说明**：基于 Qwen 的“无审查”激进微调版，下载量惊人，反映了社区对内容解禁的巨大需求。

2.  **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   作者: empero-ai | 👍 2,516 | 📥 1,262,662
    *   **说明**：融合了 Claude 风格的推理微调版，GGUF 格式使其在消费级显卡上极受欢迎。

3.  **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
    *   作者: prism-ml | 👍 1,096 | 📥 665,427
    *   **说明**：采用三进制（2-bit）极低比特量化技术，大幅降低显存占用，是量化技术前沿的代表。

4.  **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
    *   作者: DavidAU | 👍 947 | 📥 736,692
    *   **说明**：著名微调者 DavidAU 的作品，融合了多种数据集以增强创造性写作能力。

---

## 生态信号

**模型家族势头：** 本周榜单呈现出 **"Qwen 系称霸底座，Kimi/GLM 领涨原生应用"** 的格局。Qwen3.6（尤其是 35B MoE 版本）已成为社区微调的绝对首选底座，榜单中超过三分之一的微调模型基于此架构。同时，Kimi-K3 的发布标志着 Moonshot 正式加入开源混战，与 GLM-5.2 形成中国大模型开源的“双子星”局面。

**开源 vs 闭源：** 顶级厂商不仅开放权重，还带来了极具竞争力的专用模型（如百度 OCR），显示出通过开源抢占细分赛道入口的策略。**Unsloth** 等社区优化者通过提供 GGUF 等轻量化格式，极大地促进了这些大模型在消费级硬件上的普及。

**量化趋势：** 值得注意的是，**极低比特量化** 正在从实验走向实用。`Ternary-Bonsai` 和 `Bonsai-gguf` 的高下载量表明，用户对于在保持性能同时大幅降低推理成本（如 1-bit/2-bit 量化）的技术有着极高热情，边缘侧和本地部署需求正在倒逼模型压缩技术的成熟。

---

## 值得探索

1.  **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**：作为本周最耀眼的明星，这是 Moonshot 最新一代多模态模型，无论从架构创新还是多模态理解能力上都值得第一时间上手测试，看其是否能挑战现有的多模态霸主地位。

2.  **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**：如果你关注模型推理效率或需要在本地运行大参数模型，这款三进制量化模型提供了极佳的实验样本，它展示了极低比特量化后模型性能与成本的平衡点。

3.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：对于需要处理长文档或复杂图表的开发者，这款下载量近 300 万的模型解决了传统 OCR 在处理“无限”长度或复杂排版时的痛点，是极具实用价值的生产力工具。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*