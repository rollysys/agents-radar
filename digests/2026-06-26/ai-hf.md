# Hugging Face 热门模型日报 2026-06-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-26 03:58 UTC

---

# Hugging Face 热门模型日报 (2026-06-26)

## 1. 今日速览
本周 Hugging Face 迎来了多项重磅更新，**GLM-5.2** 以 MoE 架构和强劲性能登顶榜首，显示出国产大模型持续发力的势头。**DeepSeek-V4-Pro** 依然保持着极高的社区热度，点赞数突破 5,000，巩固了其在开源权重模型中的顶尖地位。社区微调方面，基于 **Gemma-4** 和 **Qwen-3.6** 的变种模型呈现井喷式增长，特别是针对编程、智能体及“无审查”场景的优化版本，下载量动辄百万级，反映了开发者对垂直场景定制化的强烈需求。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org | 👍 2,491 | ⬇️ 67,107
  - **说明**: 本周榜首模型，采用 `glm_moe_dsa` 架构，专注于文本生成与对话，代表了 GLM 系列的最新技术进展。

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 5,064 | ⬇️ 1,878,217
  - **说明**: 社区呼声极高的旗舰模型，凭借强大的综合能力和开源策略，持续霸榜高下载量与高点赞。

- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
  - 作者: Qwen | 👍 251 | ⬇️ 3,389
  - **说明**: 专为 Agent 场景优化的 MoE 模型，展现了 Qwen 系在智能体工作流上的布局。

- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
  - 作者: microsoft | 👍 346 | ⬇️ 5,276
  - **说明**: 微软推出的轻量级模型，侧重于长上下文处理与探索性子代理任务。

- **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)**
  - 作者: LiquidAI | 👍 77 | ⬇️ 7,334
  - **说明**: 极小参数模型（230M），为资源受限设备提供了高效的文本生成方案。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 作者: baidu | 👍 905 | ⬇️ 70,743
  - **说明**: 百度推出的强力 OCR 模型，支持无限长文本识别，填补了多模态文档处理的刚需。

- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
  - 作者: MiniMaxAI | 👍 1,241 | ⬇️ 154,350
  - **说明**: MiniMax 最新多模态大模型，支持图文交互，凭借出色的生成质量获得高关注。

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 👍 2,365 | ⬇️ 407,838
  - **说明**: NVIDIA 发布的视觉定位模型，以 3B 小参数实现高精度图像特征提取，下载量惊人。

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
  - 作者: krea | 👍 248 | ⬇️ 2,996
  - **说明**: 面向高速生成的文生图模型，Krea-2 系列在艺术创作社区中备受期待。

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
  - 作者: moonshotai | 👍 992 | ⬇️ 502,106
  - **说明**: 月之暗面推出的多模态编程模型，兼具视觉理解与代码生成能力，下载量破 50 万。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
  - 作者: WeiboAI | 👍 716 | ⬇️ 51,717
  - **说明**: 专注于数学推理的 3B 模型，以小参数量挑战复杂数学任务，性价比极高。

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  - 作者: nvidia | 👍 697 | ⬇️ 50,553
  - **说明**: NVIDIA 面向流式语音识别优化的超轻量模型，适用于实时转录场景。

- **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)**
  - 作者: Chunjiang-Intelligence | 👍 94 | ⬇️ 646
  - **说明**: 基于 DeepSeek 架构的专用模型，针对网络安全领域进行了微调。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 2,241 | ⬇️ 3,520,206
  - **说明**: 本周下载量之王，去除审查的 Qwen3.6 MoE 版本，反映了社区对开放式对话的巨大需求。

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
  - 作者: yuxinlu1 | 👍 2,368 | ⬇️ 495,813
  - **说明**: 针对 Coding 场景深度优化的 Gemma-4 微调版，GGUF 格式极大降低了本地部署门槛。

- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
  - 作者: nvidia | 👍 343 | ⬇️ 4,602,255
  - **说明**: NVIDIA 官方提供的 NVFP4 量化版本，下载量超 400 万，是高性能推理的首选。

- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
  - 作者: unsloth | 👍 388 | ⬇️ 88,915
  - **说明**: Unsloth 团队快速跟进的 GLM-5.2 量化版，让消费级显卡也能运行最新的 MoE 模型。

---

## 3. 生态信号
**模型家族势头**：**Qwen (3.5/3.6)** 与 **Gemma-4** 已成为社区微调的“双子星”，不仅官方版本强劲，第三方变种更是覆盖了从代码、数学到无审查的各个角落。**GLM-5.2** 的发布标志着国产模型在 Hub 上的影响力进一步提升。

**开源 vs 闭源趋势**：开源权重的微调生态极其繁荣，尤其是 **Uncensored（无审查）** 类型的模型（如 HauhauCS 系列）下载量动辄数百万，显示出开发者对模型可操控性和内容自由度的强烈偏好。同时，**NVIDIA** 通过提供高质量的量化版本，在开源生态的底层优化中占据了核心地位。

**技术风向**：**MoE（混合专家）架构** 正在迅速普及，Qwen-AgentWorld、GLM-5.2 等均采用此技术以平衡性能与推理成本。此外，针对特定端侧场景（如 0.6B 的 ASR、3B 的 Vision 模型）的“小而美”模型正在成为新的增长点。

---

## 4. 值得探索

1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
   - **理由**：作为榜单中点赞数最高的模型，DeepSeek-V4-Pro 代表了当前开源大模型的顶尖水平，无论是作为基座模型还是用于评测对标，都极具研究价值。

2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - **理由**：该模型拥有超过 350 万的下载量，是目前最受欢迎的社区微调模型之一。如果你想了解社区微调如何突破基座限制以及“无审查”模型的真实表现，这是最佳案例。

3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   - **理由**：OCR 是多模态落地的痛点场景，百度推出的这款模型支持无限长度文本识别，对于文档处理、票据识别等实际业务场景具有极高的实用价值。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*