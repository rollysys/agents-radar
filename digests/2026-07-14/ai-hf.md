# Hugging Face 热门模型日报 2026-07-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-14 02:41 UTC

---

# Hugging Face 热门模型日报 (2026-07-14)

## 1. 今日速览
本周 Hugging Face 社区呈现出**Qwen 系模型全面开花**的态势，Qwen 3.5 与 3.6 版本在微调、量化及多模态榜单上占据主导地位。国内大厂动作频频，**腾讯发布 Hy3（混元）**，**百度 Unlimited-OCR** 凭借超高的下载量展示了其在实用工具领域的统治力。社区微调方面，**Uncensored（无审查）** 与 **Reasoning（推理增强）** 类模型持续受到追捧，其中 Qwythos 和 HauhauCS 的微调版本下载量均突破百万。此外，视频生成与 Agent 智能体模型开始崭露头角，显示出多模态应用正在向更复杂的交互形式演进。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 👍 3,902 | ⬇️ 464,914
    *   说明：智谱 AI 最新一代 GLM 模型，采用 MoE 架构，兼顾对话与生成，点赞数位居前列，是本周最受瞩目的基础模型之一。
*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
    *   作者: tencent | 👍 755 | ⬇️ 9,157
    *   说明：腾讯混元系列新作，作为基础文本生成模型发布，标志着大厂在开源生态的持续投入。
*   **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
    *   作者: InternScience | 👍 526 | ⬇️ 29,801
    *   说明：基于 Qwen3.5 MoE 的智能体模型，专为 Agentic 任务优化，显示了从 Chatbot 向 Agent 进化的趋势。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   作者: baidu | 👍 1,963 | ⬇️ 1,506,937
    *   说明：百度推出的无限 OCR 模型，下载量极高，精准击中了文档处理和海量数据提取的刚需。
*   **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**
    *   作者: conradlocke | 👍 257 | ⬇️ 0
    *   说明：基于 Krea-2 的身份编辑 LoRA，为 ComfyUI 用户提供高质量的人物编辑能力，是创意生成领域的热门工具。
*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
    *   作者: OpenMOSS-Team | 👍 162 | ⬇️ 39,509
    *   说明：复旦 MOSS 团队发布的语音转写与说话人分离模型，填补了高质量开源音频处理模型的空白。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
    *   作者: google | 👍 362 | ⬇️ 21,590
    *   说明：Google 推出的表格基础模型，支持零样本分类与回归，为结构化数据处理提供了强大的基座。
*   **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)**
    *   作者: SupraLabs | 👍 114 | ⬇️ 1,573
    *   说明：仅有 51M 参数的路由模型，专为混合专家系统设计，轻量且高效，适合端侧部署。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   作者: empero-ai | 👍 2,087 | ⬇️ 1,985,221
    *   说明：基于 Qwen3.5 的深度微调版，融合 Claude 风格与神话主题，下载量近两百万，是社区微调的明星。
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 👍 2,711 | ⬇️ 2,512,124
    *   说明：Qwen3.6 的 Uncensored 版本，下载量超 250 万，体现了社区对无审查、强生成能力模型的巨大需求。
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *   作者: unsloth | 👍 1,074 | ⬇️ 2,901,906
    *   说明：Unsloth 出品的高效量化版，下载量榜单第一，兼顾了性能与资源占用，是本地部署首选。
*   **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
    *   作者: froggeric | 👍 888 | ⬇️ 0
    *   说明：虽无下载量，但高点赞数表明社区迫切需要修复 Qwen 系列的聊天模板问题，是关键的实用性资源。

---

## 3. 生态信号

**Qwen 家族的“超级生态位”**：从榜单看，Qwen 3.5 和 3.6 已经形成了类似早年 LLaMA 的“模型树”，覆盖了从 9B 到 35B 的参数量，横跨对话、视觉、推理等多个领域。社区微调者正疯狂挖掘其潜力。

**开源与闭源的边界模糊**：虽然闭源 API 依然强大，但开源社区通过“Uncensored”和“Reasoning”特化模型找到了独特的生存空间。像 `HauhauCS` 和 `empero-ai` 这样的个人或小团队微调作品，在下载量上甚至超过了部分大厂原版模型，证明了“模型即服务”之后的“微调即艺术”时代的到来。

**量化格式的统治力**：GGUF 格式依然占据下载榜头部，显示绝大多数开发者和用户仍依赖消费级硬件运行模型，量化的普惠价值不可替代。

---

## 4. 值得探索

1.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   理由：作为下载量破百万的实用工具，它极有可能刷新当前开源 OCR 的 SOTA，对于文档处理、票据识别等工业场景具有极高的实战价值。
2.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   理由：作为国产大模型的另一极，GLM-5.2 的 MoE 架构表现值得关注，尤其是其在长文本对话和中文指令遵循上的表现，是否能挑战 Qwen 的地位？
3.  **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
    *   理由：表格数据处理一直是传统 ML 的痛点，Google 出品的 Zero-shot 表格模型可能为数据清洗和分析自动化带来全新解法。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*