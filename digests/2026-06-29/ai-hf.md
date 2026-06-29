# Hugging Face 热门模型日报 2026-06-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-29 04:11 UTC

---

# Hugging Face 热门模型日报 (2026-06-29)

## 1. 今日速览

本周 Hugging Face 迎来了多项重磅更新，**百度**发布的 `Unlimited-OCR` 以强大的文字识别能力登顶热门，而 **智谱** 的 `GLM-5.2` 凭借近三千点赞成为本周最受关注的基座模型。**DeepSeek-V4** 系列与 **Qwen-AgentWorld** 的发布标志着开源模型在智能体与推理能力上进一步逼近闭源水平。社区方面，**HauhauCS** 的无审查微调版模型下载量突破 300 万，显示出用户对去限制化模型的巨大需求。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org | 👍 2,839 | 📥 118,651
  - **说明**: 本周点赞数最高的模型，新一代 MoE 架构基座模型，兼顾对话与生成能力。

- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
  - 作者: Qwen | 👍 404 | 📥 23,697
  - **说明**: 专为 Agent 任务优化的 Qwen 3.5 MoE 模型，适合构建复杂智能体工作流。

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
  - 作者: deepseek-ai | 👍 185 | 📥 373
  - **说明**: DeepSeek V4 系列的高端版本，支持分布式计算特性，企业级部署新选择。

- **[deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)**
  - 作者: deepreinforce-ai | 👍 148 | 📥 1,116
  - **说明**: 参数量高达 397B 的巨型模型，展现了开源社区在超大模型上的持续探索。

- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
  - 作者: microsoft | 👍 369 | 📥 6,779
  - **说明**: 微软推出的轻量化模型，专注于长上下文处理与子智能体任务。

- **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)**
  - 作者: LiquidAI | 👍 141 | 📥 12,384
  - **说明**: 极致轻量化的液态神经网络模型，适合边缘设备部署。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 作者: baidu | 👍 1,253 | 📥 295,064
  - **说明**: 榜单排名第一，百度推出的无限分辨率 OCR 模型，解决长图、复杂文档识别痛点。

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
  - 作者: krea | 👍 359 | 📥 27,631
  - **说明**: Krea 2.0 系列的快速生成版本，主打高质量文生图与设计辅助。

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 👍 2,438 | 📥 646,451
  - **说明**: 英伟达推出的视觉定位模型，点赞数极高，精准实现图像中任意物体的检测与分割。

- **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)**
  - 作者: fal | 👍 97 | 📥 0
  - **说明**: 面向视频生成的 LoRA 模块，专注于生成具有 3D 真实感的动态视频。

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  - 作者: nvidia | 👍 734 | 📥 67,419
  - **说明**: 英伟达 Nemotron 系列流式语音识别模型，低延迟适合实时转录场景。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
  - 作者: WeiboAI | 👍 743 | 📥 59,337
  - **说明**: 专注于数学推理的轻量级模型，小参数实现高水平的逻辑推理能力。

- **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)**
  - 作者: Chunjiang-Intelligence | 👍 124 | 📥 1,409
  - **说明**: 基于 DeepSeek V4 微调的专用模型，针对网络安全领域进行了增强。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 2,304 | 📥 3,248,724
  - **说明**: 本周下载量之最（超 300 万），无审查版本的 Qwen3.6 MoE，满足社区对开放对话的需求。

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
  - 作者: yuxinlu1 | 👍 2,477 | 📥 549,926
  - **说明**: 针对代码生成优化的 Gemma 4 微调版，GGUF 格式深受本地部署开发者喜爱。

- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
  - 作者: unsloth | 👍 444 | 📥 146,023
  - **说明**: Unsloth 团队第一时间推出的 GLM-5.2 量化版，大幅降低部署门槛。

- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
  - 作者: nvidia | 👍 371 | 📥 5,235,413
  - **说明**: 官方级 NVFP4 量化模型，下载量惊人，为消费级显卡运行大模型提供最佳性能。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  - 作者: empero-ai | 👍 812 | 📥 831,529
  - **说明**: 融合 Claude 风格的高质量微调模型，支持 100 万上下文，适合长文本角色扮演。

---

## 3. 生态信号

**模型家族势头分析**：本周属于 **Qwen (通义千问)** 和 **DeepSeek** 的大爆发期。Qwen 3.6 系列不仅官方推出了 AgentWorld 智能体模型，社区更是基于此产出了数百万下载量的“Uncensored”版本，证明了其架构的优越性与社区活跃度。同时，**DeepSeek-V4** 的发布进一步加剧了开源基座模型的竞争。

**开源 vs 闭源**：开源模型正在迅速填补能力 gaps。`Qwen-AgentWorld` 和 `DeepSeek-V4` 的发布显示，开源模型正在从单纯的“文本生成”向“复杂推理”和“智能体执行”进化，且提供了可本地部署的权重（如 NVFP4 量化版），这对闭源 API 构成了直接挑战。

**量化与微调趋势**：
1. **NVFP4 成为主流**：英伟达发布的 NVFP4 量化模型下载量极高，表明 FP4 精度在保持性能的同时显著降低显存占用，已成为硬件级优化的标准方向。
2. **Unsloth 速度优势**：Unsloth 对 GLM-5.2 等新模型的快速跟进，巩固了其在社区量化工具链中的核心地位。
3. **去审查化需求**：HauhauCS 的模型下载量断层领先，揭示了社区用户对“无限制”模型的真实且巨大的使用需求。

---

## 4. 值得探索

1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   - **理由**：作为本周热度第一的模型，它打破了传统 OCR 的分辨率限制。对于处理长票据、复杂图表或扫描文档的开发者来说，这是一个极具实用价值的 SOTA 工具，值得在 RAG 流程中测试集成。

2. **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
   - **理由**：这是少数明确标注为“Agent”优化的开源大模型。如果你正在构建需要工具调用、环境交互的 AI 智能体，该模型提供了 35B 参数下的最佳性价比尝试，且经过了专门的强化学习训练。

3. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   - **理由**：虽参数量仅 3B，但点赞数极高（排名前三）。在多模态应用中，精准的视觉定位是实现“指哪打哪”交互的关键，该模型极有可能是下一个视觉语言模型（VLM）开发的热门组件。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*