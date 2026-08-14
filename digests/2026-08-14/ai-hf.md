# Hugging Face 热门模型日报 2026-08-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-14 02:06 UTC

---

# Hugging Face 热门模型日报 (2026-08-14)

## 1. 今日速览

本期榜单最引人注目的趋势是 **MiniMax-H3 视频生成模型生态的爆发**，其基座模型、微调版本及 LoRA 衍生品占据了榜单近三分之一席位，显示出极高的社区活跃度。语言模型方面，**Moonshot 的 Kimi-K3** 以超过 1 万的点赞数成为本周最受欢迎模型，**DeepSeek-V4** 系列则凭借超高的下载量证明了其在生产环境中的统治力。Meta 的新晋多模态模型 **Muse-Glimmer-30B** 空降榜首，预示着开源社区在图文理解领域迎来了新的强力竞争者。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
  - 作者: moonshotai | 👍 10,623 | ⬇️ 1,871,575
  - 说明：本期点赞数最高的模型，作为 Kimi 系列的最新迭代，展现了强大的图文理解与特征提取能力，备受社区瞩目。

- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**
  - 作者: deepseek-ai | 👍 3,323 | ⬇️ 1,431,587
  - 说明：DeepSeek-V4 的轻量级版本，兼顾性能与推理速度，下载量极高，是当前文本生成任务中的主流选择。

- **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)**
  - 作者: Qwen | 👍 790 | ⬇️ 1,012
  - 说明：通义千问系列的超大规模 MoE 模型，总参数量达 2.4T，激活参数 95B，代表了开源大模型参数规模的新高度。

- **[LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)**
  - 作者: LiquidAI | 👍 603 | ⬇️ 116,640
  - 说明：LiquidAI 推出的轻量级文本生成模型，以小体积实现了不俗的生成效果，适合端侧部署。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)**
  - 作者: meta-models | 👍 1,424 | ⬇️ 121,042
  - 说明：Meta 推出的 30B 参数级图文理解模型，支持多轮对话，填补了开源社区中等规模多模态模型的空白。

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
  - 作者: MiniMaxAI | 👍 3,827 | ⬇️ 1,605,940
  - 说明：本周最火的视频生成基座模型，支持文生视频与图生视频，画质与一致性显著提升，引发了生成社区的狂欢。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  - 作者: Lightricks | 👍 725 | ⬇️ 57,287
  - 说明：知名影像公司 Lightricks 推出的视频生成模型，支持图像到视频等多种模态转换，是视频创作领域的有力竞争者。

- **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)**
  - 作者: MiniMaxAI | 👍 340 | ⬇️ 25
  - 说明：MiniMax 在音频领域的最新探索，专注于文本到音乐生成，标志着该厂商向全模态生成的迈进。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[DavidAU/Qwen3.6-27B-Fable-Fusion...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
  - 作者: DavidAU | 👍 1,987 | ⬇️ 2,793,115
  - 说明：下载量最高的社区微调模型，基于 Qwen3.6 架构，主打“无审查”与创意写作，深受本地部署玩家喜爱。

- **[unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF)**
  - 作者: unsloth | 👍 389 | ⬇️ 352,023
  - 说明：由 Unsloth 优化的 GGUF 版本，让 30B 规模的多模态模型能够在消费级显卡上流畅运行。

- **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)**
  - 作者: Comfy-Org | 👍 1,291 | ⬇️ 10,365,210
  - 说明：下载量破千万的 ComfyUI 专用封装版本，直接证明了 MiniMax-H3 在工作流工具中的普及程度。

- **[fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA)**
  - 作者: fal | 👍 159 | ⬇️ 4,692
  - 说明：针对 MiniMax-H3 的人物写实风格 LoRA，解决了视频生成中人脸崩坏的问题，提升了商业可用性。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)**
  - 作者: nvidia | 👍 372 | ⬇️ 1,164
  - 说明：NVIDIA 推出的语音交互专用模型，针对实时语音对话场景进行了优化，具有低延迟优势。

- **[nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4)**
  - 作者: nvidia | 👍 229 | ⬇️ 44,859
  - 说明：NVIDIA 提供的高效量化模型，采用 NVFP4 格式，专为高性能推理场景设计。

---

## 3. 生态信号

本周模型生态呈现出明显的**“视频生成工具化”**与**“基座模型分层化”**趋势。

1.  **MiniMax 现象级爆发**：MiniMax-H3 不仅是一个模型，更形成了一个包含 Turbo 变体、风格 LoRA、Prompt 重写工具和 ComfyUI 封装的完整生态。超过千万次的 ComfyUI 封装下载量表明，视频生成模型正在快速融入创作者的工作流，开源社区对高质量 I2V（图生视频）的需求极其旺盛。
2.  **开源权重的“无审查”需求**：DavidAU 的 Qwen 微调版以近 300 万下载量独占鳌头，这反映了本地部署用户对模型“去安全护栏”和创意写作能力的强烈偏好，也展示了 Qwen 架构在社区微调中的统治地位。
3.  **多模态竞争升级**：Meta 的 Muse-Glimmer 与 Moonshot 的 Kimi-K3 在图文多模态领域双星闪耀。Kimi-K3 的超高点赞数显示出用户对强上下文理解能力的认可，而 Muse-Glimmer 则补齐了开源侧中等体量多模态模型的拼图。

---

## 4. 值得探索

1.  **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**：如果你想体验目前开源界最火的视频生成效果，这是首选。配合 Comfy-Org 的封装版，可以快速在本地搭建工作流。
2.  **[meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)**：对于多模态研究者而言，这是 Meta 系的新晋强者。30B 的参数量平衡了性能与部署难度，值得一试其在多轮图文对话中的表现。
3.  **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**：作为本周口碑之王（点赞破万），它在长上下文和特征提取上的表现可能代表了当前国产模型的新 SOTA，适合用于 RAG 或长文档分析场景。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*