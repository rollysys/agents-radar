# Hugging Face 热门模型日报 2026-10-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-23 03:52 UTC

---

# 🤗 Hugging Face 热门模型日报（2026-10-23）

---

## 📰 今日速览

本周 Hugging Face 生态呈现出“多模态全面爆发”的格局：**Qwen3.8 系列**继续统治榜单，主模型周点赞超 1.8 万、下载近 780 万，Flash-Next 变体同步上榜。**MOSS-Image** 开源图像生成家族（Base/SFT + 社区蒸馏版）成为本周最热新星，吸引 Comfy-Org、lodestones 等多方跟进。视频生成方面 **LTX-2.5** 以近 8,900 点赞、205 万下载领跑生成类模型。此外，DeepSeek-V4.1-Flash 与 Meta Muse-Spark 开源版（816B-A42B）的发布进一步加剧了旗舰级开源模型的竞争。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 👍 18,220 | ⬇️ 7,758,670
  本周绝对王者，多模态对话旗舰，下载量断层第一，社区生态最成熟。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen | 👍 6,415 | ⬇️ 2,706,809
  轻量高速版前瞻模型，兼顾性能与推理成本，适合本地与高频调用场景。

- **[reflection/Beam-1.0-501B-A23B](https://huggingface.co/reflection/Beam-1.0-501B-A23B)** — reflection | 👍 229 | ⬇️ 3,984
  501B 参数 MoE 推理模型（激活 23B），主打深度推理与代码能力，开源重磅新作。

- **[LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B)** — LiquidAI | 👍 564 | ⬇️ 17,637
  24B-A2B 稀疏 MoE，激活仅 2B，极致效率架构的代表作。

- **[tencent/Hy-Memory-30B-A3B](https://huggingface.co/tencent/Hy-Memory-30B-A3B)** — tencent | 👍 289 | ⬇️ 2,966
  面向长上下文/记忆机制的新架构探索，激活仅 3B。

- **[RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint)** — RecursiveSI | 👍 560 | ⬇️ 420
  新晋开源对话模型，发布即带动 unsloth 社区 GGUF 量化跟进，热度起步迅猛。

- **[nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16)** — nvidia | 👍 166 | ⬇️ 3,375
  NVIDIA 实验室 4B 小模型，瞄准端侧与实验性研究场景。

- **[XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B)** / **[InternScience/Sage-A1.5](https://huggingface.co/InternScience/Sage-A1.5)** — 社区/机构 | 中小规模 LLM 尝试，榜尾观察区。

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 👍 8,913 | ⬇️ 2,054,990
  本周生成类之星，图生视频/文生视频全能，超 200 万下载印证生产力工具地位。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)** — facebook | 👍 4,930 | ⬇️ 1,864,206
  SAM 第三代分割模型，支持视频掩码生成，CV 基础设施级发布。

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)** — deepseek-ai | 👍 2,386 | ⬇️ 51,911
  DeepSeek 首个图文多模态 Flash 版，榜首位点起新发布。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)** / **[flux-3-image-klein](https://huggingface.co/black-forest-labs/flux-3-image-klein)** — BFL | 👍 1,313 / 637
  FLUX 3 小型图像编辑模型，ComfyUI 单文件版下载超 51 万，社区工作流适配极快。

- **[OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT)** / **[MOSS-Image-Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base)** — OpenMOSS | 👍 593 / 494
  本周最热开源文生图家族，Apache-2.0 许可引爆社区二次开发。

- **[meta-models/Muse-Spark-Open-816B-A42B](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)** — meta-models | 👍 661 | ⬇️ 3,163
  816B-A42B 开源多模态 MoE，Meta 开放权重的罕见大动作。

- **[fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3)** — fishaudio | 👍 921 | ⬇️ 16,305
  多说话人 TTS 模型，语音生成赛道持续活跃。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — google | 👍 2,847 | ⬇️ 185,259
  Google 新一代嵌入模型，RAG 检索基础设施刚需，上线即热。

- **[datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr)** — datalab-to | 👍 372 | ⬇️ 3,823
  ONNX/CPU 友好的 OCR 模型，文档处理刚需。

- **[mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M)** — mistralai | 👍 291 | ⬇️ 6,194
  Mistral 出人意料的时间序列预测基础模型，“一切皆可基础模型”的信号。

- **[orcarouter/OrcaCyber-Nano-1.0](https://huggingface.co/orcarouter/OrcaCyber-Nano-1.0)** — orcarouter | 👍 193 | ⬇️ 21,727
  网络安全垂类视觉语言小模型，逆向工程场景专用。

### 📦 微调与量化（社区微调、GGUF、FP8/FP4）

- **[abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized)** — 👍 4,838 | ⬇️ 2,665,585
  本周量化之王：去审查版 Qwen 图像模型 GGUF，下载量全榜第二。

- **[unsloth/flint-GGUF](https://huggingface.co/unsloth/flint-GGUF)** — unsloth | 👍 155 | ⬇️ 7,401
  unsloth 惯常的闪电式跟进，flint 发布即量化，验证社区热度传导链。

- **[nvidia/Qwen3.8-Flash-Next-FP4-Local](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-FP4-Local)** — nvidia | 👍 317 | ⬇️ 10,519
  NVIDIA ModelOpt 官方 FP4 量化版，本地部署友好的官方衍生。

- **[dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8)** — 👍 265 | ⬇️ 3,808
  DeepSeek 新模型的去审查 FP8 版，说明 V4.1 生态已开枝散叶。

- **[lodestones/MOSS-Image-SFT-8-steps-dmd](https://huggingface.co/lodestones/MOSS-Image-SFT-8-steps-dmd)** — 👍 202 | ⬇️ 75,389
  DMD 蒸馏 8 步推理版 MOSS-Image，生成速度大幅优化。

- **[Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image)** — 👍 370 | ⬇️ 1,463,386
  ComfyUI 官方打包版 MOSS-Image，下载超 146 万——开源发布 48 小时内即被工作流生态吸收的典型样本。

---

## 📊 生态信号

**Qwen 家族仍是生态中心**：Qwen3.8 三款模型（27B / Flash-Next / FP4 量化）合计下载超 1,000 万，社区衍生（去审查量化版）下载甚至超过许多官方模型，显示其已成为事实上的“开源基座标准”。**MOSS-Image 是本周最大黑马**：Apache-2.0 许可 + 快速的社区链路（官方 Base/SFT → Comfy-Org 打包 → lodestones DMD 蒸馏）展现了开源图像生成扩散的完整路径。**开源权重持续碾压闭源声量**：Meta Muse-Spark 816B 开源、DeepSeek V4.1 多模态化均属重磅。值得警惕的趋势是“**去审查（Uncensored）微调**”热度极高，量化分发（GGUF/FP4/FP8）仍是社区最活跃的参与方式。

---

## 🌟 值得探索

1. **[Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — 当前性价比最优的多模态主力，配合 nvidia FP4 版可低成本本地部署，生产与研究的稳妥选择。

2. **[OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT)** + **[8-steps-dMD 蒸馏版](https://huggingface.co/lodestones/MOSS-Image-SFT-8-steps-dmd)** — Apache-2.0 文生图全链路已就绪，ComfyUI 生态完整适配，是替代闭源图像 API 的最佳切入点。

3. **[reflection/Beam-1.0-501B-A23B](https://huggingface.co/reflection/Beam-1.0-501B-A23B)** — 501B MoE 开源推理模型激活仅 23B，若推理能力兑现，将是开源 reasoning 赛道的重要变量，值得早期跟踪评测。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*