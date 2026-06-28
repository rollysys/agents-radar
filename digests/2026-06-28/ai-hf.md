# Hugging Face 热门模型日报 2026-06-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-28 04:04 UTC

---

# Hugging Face 热门模型日报 (2026-06-28)

## 1. 今日速览

本周 Hugging Face 迎来了开源社区的重磅更新，**百度发布的 Unlimited-OCR** 凭借强大的图文识别能力迅速登顶下载榜，而 **GLM-5.2** 则以超高人气领跑语言模型赛道。Qwen 系列生态持续爆发，Qwen3.6 的 MoE 架构与社区微调版本（如 HauhauCS 系列）展现出极强的长尾生命力。此外，Gemma-4 架构初露锋芒，针对代码和 Agentic 场景的量化版本备受开发者追捧，显示出端侧高效模型的巨大需求。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org | 👍 2,690 | ⬇️ 98,994
  - **说明**: 本周人气最高的基座模型，采用 MoE 架构，在对话和文本生成任务上表现优异，是 GLM 系列的最新力作。

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
  - 作者: deepseek-ai | 👍 132 | ⬇️ 0
  - **说明**: DeepSeek V4 系列的高端版本，虽下载量暂未起量，但作为头部厂商的前沿模型，备受技术社区关注。

- **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)**
  - 作者: LiquidAI | 👍 130 | ⬇️ 9,791
  - **说明**: 极小参数量（230M）的语言模型，展示了在资源受限环境下的生成能力，适合边缘设备部署。

- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
  - 作者: microsoft | 👍 366 | ⬇️ 6,447
  - **说明**: 微软推出的 4B 模型，侧重于长上下文处理与 SubAgent 任务，是企业级 Agent 开发的有力竞争者。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 作者: baidu | 👍 1,145 | ⬇️ 212,760
  - **说明**: 百度开源的 OCR 王牌，支持无限长文本识别，下载量破 20 万，是本周最实用的工具类模型。

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
  - 作者: krea | 👍 311 | ⬇️ 17,445
  - **说明**: Krea 推出的文生图加速版模型，侧重于高质量图像的快速生成，适合创意设计工作流。

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 👍 2,409 | ⬇️ 570,466
  - **说明**: 英伟达推出的轻量级视觉定位模型，点赞与下载双高，为视觉理解任务提供了高效解决方案。

- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
  - 作者: MiniMaxAI | 👍 1,253 | ⬇️ 182,714
  - **说明**: MiniMax 的多模态大模型，兼顾文本与视觉理解，下载量突破 18 万，是国产多模态模型的主力军。

### 🔧 专用模型（代码、数学、医疗、Agent）

- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
  - 作者: WeiboAI | 👍 742 | ⬇️ 57,521
  - **说明**: 专注于数学推理的 3B 小模型，以小博大，证明了精选数据微调在特定领域的高效性。

- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
  - 作者: Qwen | 👍 362 | ⬇️ 18,872
  - **说明**: 专为 Agentic 工作流优化的 Qwen 模型，适合构建复杂的自动化智能体系统。

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  - 作者: nvidia | 👍 719 | ⬇️ 61,857
  - **说明**: 英伟达推出的流式语音识别模型，参数仅 0.6B，兼顾低延迟与高精度，适合实时转写场景。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 2,279 | ⬇️ 3,331,475
  - **说明**: 社区爆款，下载量超 330 万！去除了审查限制的 Qwen3.6 MoE 版本，深受追求自由度的用户喜爱。

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
  - 作者: yuxinlu1 | 👍 2,430 | ⬇️ 536,130
  - **说明**: 针对 Gemma-4 架构的代码能力深度优化版，GGUF 格式便于本地部署，是开发者的新宠。

- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
  - 作者: nvidia | 👍 367 | ⬇️ 5,022,254
  - **说明**: 英伟达官方提供的 NVFP4 量化版本，极致压缩体积同时保持性能，下载量惊人，适合 GPU 推理。

- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
  - 作者: unsloth | 👍 427 | ⬇️ 125,230
  - **说明**: Unsloth 团队快速跟进的 GLM-5.2 量化版，显著降低了硬件门槛，让普通用户也能跑起大模型。

---

## 3. 生态信号

本周生态呈现出 **“开源闭源竞合加剧，量化微调双轨并行”** 的特征：

1.  **Qwen 与 Gemma 的社区统治力**：Qwen3.6 系列凭借 MoE 架构在下载榜占据绝对优势，尤其是 `HauhauCS` 的未审查版本下载量破 330 万，表明社区对模型“去限制化”有极高需求。同时，Gemma-4 的早期微调版本显示 Google 的新架构正在快速被开发者接纳。
2.  **硬件厂商深度绑定**：NVIDIA 不仅发布专用模型（LocateAnything, Nemotron），还迅速推出主流模型（Qwen, GLM）的 NVFP4 量化版，显示其正在通过软件生态锁定硬件销售。
3.  **实用主义回归**：百度 OCR 模型的火爆和 ASR 流式模型的高下载量，表明市场对解决具体问题（文档数字化、语音转写）的工具模型需求巨大，不仅是大语言模型，专精型小模型同样拥有广阔市场。

---

## 4. 值得探索

1.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    - **理由**: 作为一个下载量 20 万+ 的爆款工具，它解决了传统 OCR 对长图、复杂排版处理不佳的痛点，是构建 RAG 系统或文档处理流水线的必备组件。

2.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    - **理由**: 视觉定位是连接 LLM 与现实世界的桥梁。NVIDIA 出品的 3B 小模型兼顾了速度与精度，非常适合嵌入到视觉问答或机器人控制系统中。

3.  **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    - **理由**: 如果你是代码辅助工具的开发者，这是当前 Gemma-4 架构下最受好评的量化版本之一，兼顾了代码生成能力与本地运行效率，值得在本地 IDE 插件中尝试。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*