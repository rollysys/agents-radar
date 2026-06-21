# Hugging Face 热门模型日报 2026-06-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-21 04:27 UTC

---

# Hugging Face 热门模型日报 (2026-06-21)

## 1. 今日速览
本周 Hugging Face 迎来了**DeepSeek-V4-Pro**的霸榜，以近 5000 点赞数证明了其在开源文本生成领域的统治力。Google **Gemma-4** 系列首发即引发热潮，特别是其多模态与编程微调版本，下载量迅速突破百万级。社区微调方面，**Qwen3.6** 与 **Gemma-4** 成为主力基座，涌现出大量针对推理、无审查和智能体的高质量 GGUF 模型。此外，多模态领域不仅有 NVIDIA 的视觉定位模型，还出现了如 DiffusionGemma 这类融合扩散与语言模型的新架构探索。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,987 | 📥 2,797,050
  - 说明：本期热度最高的模型，作为 DeepSeek 的最新一代旗舰，拥有极高的社区关注度与下载量，确立了开源 LLM 的新 SOTA。

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org | 👍 1,705 | 📥 19,683
  - 说明：智谱 AI 的最新力作，采用 MoE 架构，平衡了性能与推理成本，发布即登上周榜第二。

- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
  - 作者: google | 👍 1,107 | 📥 1,696,240
  - 说明：Google Gemma 系列第四代迭代版，支持 Any-to-Any 任务，下载量惊人，展现了谷歌生态的强大号召力。

- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
  - 作者: MiniMaxAI | 👍 1,164 | 📥 85,771
  - 说明：MiniMax 推出的多模态大模型，在图文理解任务上表现优异，是国产多模态模型的重要玩家。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
  - 作者: google | 👍 1,025 | 📥 673,464
  - 说明：结合了 Diffusion 与 Gemma 架构的创新模型，擅长多模态对话，下载量极高，代表了架构融合的新趋势。

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 👍 2,219 | 📥 235,606
  - 说明：NVIDIA 推出的轻量级视觉定位模型，点赞数高居前列，解决了细粒度图像理解与定位痛点。

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
  - 作者: moonshotai | 👍 932 | 📥 317,963
  - 说明：月之暗面出品的代码与多模态结合模型，在代码生成与视觉理解上兼具实力。

- **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)**
  - 作者: zai-org | 👍 241 | 📥 0
  - 说明：专注于角色动画与姿态驱动的视频生成模型，展示了视频生成垂直领域的最新进展。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
  - 作者: WeiboAI | 👍 517 | 📥 16,270
  - 说明：专注于数学推理的小参数模型，证明小模型在特定思维链任务上也能有优异表现。

- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
  - 作者: microsoft | 👍 246 | 📥 1,998
  - 说明：微软推出的针对长上下文优化的模型，标签显示其具备 Agent 能力，适合子任务处理。

- **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)**
  - 作者: LiquidAI | 👍 81 | 📥 6,128
  - 说明：轻量级文本嵌入模型，适合在资源受限环境下构建检索增强生成（RAG）系统。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
  - 作者: yuxinlu1 | 👍 1,994 | 📥 312,332
  - 说明：基于 Gemma-4 的编程特化版 GGUF 量化模型，下载量极高，是本地部署代码助手的优选。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 2,046 | 📥 3,812,636
  - 说明：本期下载量之王，无审查版本的 Qwen3.6 MoE 模型，深受社区喜爱，满足了对开放性内容的强需求。

- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
  - 作者: unsloth | 👍 207 | 📥 22,586
  - 说明：Unsloth 团队第一时间推出的 GLM-5.2 量化版，极大降低了本地运行大模型的门槛。

---

## 3. 生态信号

本周模型生态呈现出**"开源闭源界限模糊化"**与**"端侧模型能力增强"**两大特征。

1.  **模型家族势头**：**Qwen3.6** 毫无悬念地成为社区微调的"万能基座"，榜单中大量高下载量的 GGUF 模型（如 HauhauCS 版本）均基于此，证明了其架构的优越性与社区活跃度。同时，**Gemma-4** 作为新秀，迅速在代码和智能体微调领域占领高地。
2.  **开源权重趋势**：DeepSeek-V4-Pro 和 Gemma-4 的开源权重发布，极大地冲击了闭源模型的市场，尤其是 DeepSeek-V4-Pro 的高点赞数，显示出开发者对"开源 SOTA"的极度渴望。
3.  **量化与微调活动**：**Unsloth** 等团队对新模型（如 GLM-5.2, Kimi-K2.7）的跟进速度极快，GGUF 格式依然是本地部署的主流选择。微调方向从单纯的通用对话转向了更具功能性的 **Coding**（编程）、**Agentic**（智能体）和 **Uncensored**（无审查）方向。

---

## 4. 值得探索

1.  **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    - **理由**：作为当前榜单人气断层第一的模型，它是目前开源 LLM 性能的标杆，值得所有关注大模型前沿能力的开发者深入测试。

2.  **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    - **理由**：将 Diffusion 机制引入 LLM 的尝试非常新颖，这种架构融合可能在图像生成与多模态理解任务上带来全新的交互体验。

3.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    - **理由**：下载量超过 380 万的爆款模型，对于关注本地部署、模型微调效果以及无审查内容生成的开发者来说，是极具研究价值的案例。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*