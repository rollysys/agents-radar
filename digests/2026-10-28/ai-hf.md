# Hugging Face 热门模型日报 2026-10-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-28 04:40 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-10-28**

---

## 📰 今日速览

今日榜单由 **Qwen3.8-27B** 以 18,553 点赞、750 万+ 下载强势领跑，成为本周最受关注的旗舰开源模型。**DeepSeek-V4.1-Flash-1017** 系列形成“一超多强”格局——原版及其社区量化版（ISTA-DASLab GSQ-RCO-GGUF 下载量破百万）、去审查版共同占据多个席位。视频生成领域 **LTX-2.5** 持续爆发（216 万下载），**MOSS-Image** 与 **Qwen-Image-2.1** 量化版带动图像生成生态活跃。整体来看，本地化部署需求（GGUF 量化）与“去审查”微调是本周最显著的社区行为。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 👍 18,553 | ⬇️ 7,522,728
  今日榜首，Qwen 最新多模态旗舰，下载量断层领先，生态适配速度极快。

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)** — deepseek-ai | 👍 3,418 | ⬇️ 105,667
  DeepSeek V4.1 Flash 多模态版本，轻量高性能路线，衍生生态（量化、去审查）极为活跃。

- **[RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint)** — RecursiveSI | 👍 986 | ⬇️ 10,574
  新晋对话模型，上线即引发 unsloth 量化跟进，社区关注度快速攀升。

- **[Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B)** — Nanbeige | 👍 680 | ⬇️ 4,785
  国产 33B Llama 架构对话模型，中等规模开源权重持续获得社区认可。

- **[XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B)** — XHToken | 👍 812 | ⬇️ 6,191
  4B 轻量级 LLM，同步发布 GGUF 版（10 万+下载），端侧部署友好。

- **[InternScience/Sage-A1.5](https://huggingface.co/InternScience/Sage-A1.5)** — InternScience | 👍 347 | ⬇️ 6,613
  基于 Qwen3.5-MoE 架构的多模态 MoE 模型，走稀疏化高效路线。

- **[LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B)** — LiquidAI | 👍 213 | ⬇️ 6,311
  LiquidAI 第三代架构 1.7B 小模型，非 Transformer 架构探索的代表。

- **[nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB)** — nvidia | 👍 194 | ⬇️ 44,651
  NVIDIA 面向 4GB 显存的超小体积推理模型，边缘部署利器。

- **[KRAFTON/Raon-1-mini-preview](https://huggingface.co/KRAFTON/Raon-1-mini-preview)** — KRAFTON | 👍 218 | ⬇️ 2,208
  韩国 KRAFTON 首款开源小模型预览版，游戏厂商进军 LLM 的信号。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 👍 9,601 | ⬇️ 2,163,739
  今日生成类绝对王者，图像/文本到视频双向能力，216 万下载证明其已成为视频生成工作流标配。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)** — Meta | 👍 5,269 | ⬇️ 1,876,779
  SAM 第三代分割模型（含视频），CV 基础设施级发布，下载量巨大。

- **[abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized)** — abenzerps | 👍 5,205 | ⬇️ 2,201,569
  Qwen-Image 2.1 去审查 GGUF 量化版，ComfyUI 生态内爆发式传播。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)** — Black Forest Labs | 👍 1,873 | ⬇️ 750,694
  FLUX.3 klein 版 ComfyUI 专用文件，轻量图像编辑，75 万下载体现 BFL 的生态号召力。

- **[OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT)** — OpenMOSS | 👍 789 | ⬇️ 13,253
  复旦 MOSS 团队文生图模型，配合 Comfy-Org 官方打包版下载量破 270 万。

- **[MiniMaxAI/MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash)** — MiniMaxAI | 👍 423 | ⬇️ 11,075
  MiniMax 多模态视觉语言模型，与 DeepSeek Flash 同日竞技的国产轻量 VL。

- **[baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2)** — baidu | 👍 263 | ⬇️ 513
  百度 OCR 专用模型，长图/无限分辨率文档识别方向。

- **[fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3)** — fishaudio | 👍 1,068 | ⬇️ 24,996
  多说话人 TTS 模型，主打情感化/戏剧化语音生成。

- **[Comfy-Org/Fibo-2.0](https://huggingface.co/Comfy-Org/Fibo-2.0)** — Comfy-Org | 👍 215 | ⬇️ 170,383
  基于 Bria Fibo-2.0-dev 的图像编辑模型 ComfyUI 打包版。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — Google | 👍 2,979 | ⬇️ 256,852
  Gemma 系嵌入模型二代，检索/RAG 基础设施级更新，下载量稳固。

- **[mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M)** — Mistral AI | 👍 424 | ⬇️ 12,334
  Mistral 时间序列预测基础模型，罕见的专业领域扩张。

- **[HuggingFaceBio/Carbon-X](https://huggingface.co/HuggingFaceBio/Carbon-X)** — HuggingFaceBio | 👍 235 | ⬇️ 1,595
  基于 Qwen3 的 DNA/基因组语言模型，AI for Science 方向。

- **[tencent/Hy-SimulMT-30B-A3B-FP8](https://huggingface.co/tencent/Hy-SimulMT-30B-A3B-FP8)** — Tencent | 👍 175 | ⬇️ 93
  腾讯混合式同传翻译 MoE 模型（30B-A3B），刚刚发布，翻译质量与延迟兼顾。

- **[ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder)** — ccore | 👍 183 | ⬇️ 3,544
  面向 Three.js/3D 场景生成的代码专用微调，细分赛道代表。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU | 👍 2,174 | ⬇️ 1,713,544
  经典"赛博调酒”式多层微调 GGUF，171 万下载证明社区对激进 merge 的需求。

- **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)** — ISTA-DASLab | 👍 405 | ⬇️ 1,105,751
  GSQ 混合精度量化版，110 万下载——学术实验室量化研究的实用价值直接体现。

- **[unsloth/flint-GGUF](https://huggingface.co/unsloth/flint-GGUF)** — unsloth | 👍 299 | ⬇️ 149,888
  unsloth 对新模型 flint 的快速量化跟进，反应速度是榜单常青的关键。

- **[dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8)** — dealignai | 👍 427 | ⬇️ 8,282
  FP8 去审查版，与 orcarouter 的 abliterated 版共同反映本地化无审查需求。

- **[orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF)** — orcarouter | 👍 283 | ⬇️ 13,441
  消融法去审查 + GGUF，llama.cpp 本地运行友好。

- **[XHToken/Spark-X2.6-4B-GGUF](https://huggingface.co/XHToken/Spark-X2.6-4B-GGUF)** — XHToken | 👍 204 | ⬇️ 104,927
  Spark-X2.6 官方 GGUF，10 万下载印证小模型 + 量化 = 本地部署黄金组合。

---

## 📊 生态信号

**家族格局**：Qwen 仍是开源生态的绝对中枢——榜首 Qwen3.8-27B、Qwen-Image 2.1、以及 Carbon-X、3D-Coder 等微调均基于 Qwen 底座；DeepSeek V4.1 Flash 则展现了“官方轻量版 + 社区衍生”的典型扩散路径（原版 + 3 个量化/去审查衍生版同时上榜）。

**开源 vs 闭源**：头部闭源厂商（Meta SAM3、Mistral、NVIDIA、Google）持续向开源 Hub 投放高质量专业模型，开源权重仍是获取分发和生态影响力的主战场；ComfyUI 生态（MOSS-Image、FLUX、Fibo）作为图像/视频分发的“应用商店”效应愈发明显。

**量化与微调**：GSQ、FP8、GGUF 等量化方案下载量普遍超过原版 5-10 倍，说明实际使用以本地推理为主；“去审查”（abliterated/uncensored）微调在 LLM 与图像模型两端同时走热，是本周最值得关注的社区行为特征。

---

## 💎 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周事实上的开源标杆，多模态 + 750 万下载意味着工具链、微调、量化适配已最成熟，是当前最稳妥的生产级选择。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 视频生成领域的新默认选项，支持图生视频/文生视频/视频转视频多任务，216 万下载验证了其稳定性，值得集成进创作工作流。

3. **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)** — GSQ 混合精度量化是学术量化研究的前沿落地，比常规 Q4 更好的精度-体积权衡，本地部署玩家的必试之作。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*