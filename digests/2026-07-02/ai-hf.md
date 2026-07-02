# Hugging Face 热门模型日报 2026-07-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-02 03:49 UTC

---

# Hugging Face 热门模型日报 (2026-07-02)

## 1. 今日速览

2026年7月2日，Hugging Face 迎来了基座模型与 Agent 智能体的双重爆发。**zai-org/GLM-5.2** 以其强大的对话生成能力登顶语言模型热度榜，而百度发布的 **Unlimited-OCR** 则凭借突破性的长文本识别能力在多模态领域一骑绝尘。社区微调方面，**Gemma-4** 和 **Qwen3.6** 的衍生模型（如 Coder 和 Uncensored 版本）下载量惊人，显示出开发者对特定场景高性能模型的极度渴求。此外，NVIDIA 推出的 NVFP4 量化模型标志着软硬协同优化正在成为大模型落地的新常态。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org | 👍 3,177 | ⬇️ 159,967
  - 说明：本周最受欢迎的基座模型之一，基于 MoE 架构，在对话和文本生成任务上表现卓越，标志着 GLM 系列的重大更新。

- **[deepreinforce-ai/Ornith-1.0-35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B)**
  - 作者: deepreinforce-ai | 👍 293 | ⬇️ 135,452
  - 说明：新兴强力的 35B 参数模型，不仅登上了趋势榜，其 GGUF 版本下载量也极高，显示出中尺寸模型在性能与效率间的平衡优势。

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
  - 作者: deepseek-ai | 👍 279 | ⬇️ 7,629
  - 说明：DeepSeek V4 系列的高端版本，集成了 DSpark 技术，进一步强化了推理与文本生成能力，备受技术社区关注。

- **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)**
  - 作者: LiquidAI | 👍 182 | ⬇️ 21,935
  - 说明：极低参数（230M）的生成模型，刷新了端侧设备运行大模型能力的下限，适合资源极度受限的嵌入式场景。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 作者: baidu | 👍 1,583 | ⬇️ 630,246
  - 说明：百度推出的“无限”OCR 模型，支持高分辨率与长文档识别，本周下载量惊人，解决了多模态应用中的一大痛点。

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 👍 2,548 | ⬇️ 896,058
  - 说明：NVIDIA 发布的视觉定位模型，下载量近百万，能够精准识别图像中的任意物体，为机器人视觉和自动化提供了强大基础。

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
  - 作者: krea | 👍 439 | ⬇️ 56,953
  - 说明：Krea 2 代图像生成模型的加速版，兼顾质量与速度，是创意设计领域的热门工具。

- **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)**
  - 作者: fal | 👍 137 | ⬇️ 0
  - 说明：针对视频生成的 LoRA 模型，专注于生成高真实感的 3D 场景视频，拓展了视频生成的边界。

### 🔧 专用模型（代码、Agent、数学、医疗）

- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
  - 作者: Qwen | 👍 498 | ⬇️ 34,371
  - 说明：通义千问推出的 Agent 专用模型，参数规模适中，针对工具调用和世界模型推理进行了优化，是构建智能体的热门选择。

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
  - 作者: yuxinlu1 | 👍 2,556 | ⬇️ 597,090
  - 说明：基于 Gemma-4 的代码专用微调版本，下载量极高，证明代码生成依然是开源模型最核心的落地场景之一。

- **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)**
  - 作者: BugTraceAI | 👍 110 | ⬇️ 3,377
  - 说明：专注于网络安全和漏洞挖掘的专用模型，展示了大模型在“攻防安全”垂直领域的深度应用潜力。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  - 作者: empero-ai | 👍 1,169 | ⬇️ 1,113,871
  - 说明：融合了 Claude 风格的 Qwen 微调版，拥有百万级下载，以 9B 的小体积实现了接近大模型的对话体验，社区热度极高。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 2,380 | ⬇️ 3,055,962
  - 说明：本周下载量冠军（超 300 万），去除了安全审查限制的 Qwen3.6 微调版，满足了开发者对无审查模型的巨大需求。

- **[nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)**
  - 作者: nvidia | 👍 200 | ⬇️ 136,933
  - 说明：NVIDIA 官方发布的 GLM-5.2 量化版，采用 NVFP4 格式，在保持精度的同时大幅降低显存占用，体现了硬件厂商对生态的深度适配。

- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
  - 作者: unsloth | 👍 490 | ⬇️ 212,201
  - 说明：Unsloth 出品的高效 GGUF 量化版，帮助普通用户在消费级显卡上流畅运行最新的 GLM-5.2 模型。

---

## 3. 生态信号

本周生态呈现出明显的**“功能垂直化”**与**“硬件协同化”**趋势：

1.  **模型家族迭代加速**：GLM-5.2、DeepSeek-V4、Gemma-4、Qwen3.6 等新一代模型密集发布，开源模型的性能基准线被再次拉高，且发布频率显著缩短。
2.  **“Agent”与“Uncensored”双轨并行**：官方（如 Qwen）致力于发布 AgentWorld 等工具型模型，推动智能体落地；而社区（如 HauhauCS）则在“Uncensored（去审查）”方向上疯狂产出，下载量动辄百万，反映了社区对生成自由度的强烈偏好。
3.  **量化成为标配**：不仅社区 GGUF 下载量巨大，NVIDIA 等硬件厂商也主动下场提供 NVFP4 量化支持，表明“开箱即用、低显存占用”已成为模型竞争力的关键指标。

---

## 4. 值得探索

1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   - 理由：作为多模态领域的“刚需”工具，其“Unlimited”的特性解决了传统 OCR 对长图、复杂排版支持不足的问题，适合集成到文档处理流水线中。

2. **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
   - 理由：这是构建 AI Agent 的“瑞士军刀”，针对工具调用进行了专门优化。如果你正在研究 Agentic Workflow，这是目前最值得尝试的开源基座之一。

3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - 理由：极高的下载量证明了其社区统治力。对于需要进行创意写作、角色扮演或需要绕过敏感词限制的开发者，这是一个不可多得的高质量基座。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*