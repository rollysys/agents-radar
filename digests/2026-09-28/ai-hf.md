# Hugging Face 热门模型日报 2026-09-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-28 04:20 UTC

---

# Hugging Face 热门模型日报（2026-09-28）

## 📰 今日速览

本周榜首为 [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)，以 4,123 点赞登顶但下载为 0，典型的“话题型”发布。绝对流量王者仍是 [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)（1.6 万点赞、672 万下载）。**Qwen-Image-2.1** 生态爆发，衍生模型占据榜单近六席。视频生成方面 [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) 以 5,346 点赞强势上榜。整体趋势：开源旗舰多模态 + 社区量化微调双轮驱动，1-bit/2-bit 极限量化成为新热点。

---

## 🔥 热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

**[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
- Qwen | 👍 16,434 | ⬇️ 6,727,629
- 本周绝对霸主，多模态对话旗舰，下载量与口碑双冠，几乎所有社区量化都以它为基底。

**[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)**
- deepseek-ai | 👍 3,817 | ⬇️ 651,078
- DeepSeek V4.1 轻量版，图文理解 + 文本生成一体，开源权重 + 高性价比路线延续。

**[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)**
- XingChen-AGI | 👍 1,785 | ⬇️ 45,028
- 29B MoE（激活 4B）架构，对话能力强，国产新玩家 XingChen 4.0 系列首发即热。

**[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)**
- Altworld | 👍 741 | ⬇️ 5,904
- 基于 Qwen3.5/Qwen3.8 架构的社区模型，写作风格化命名暗示主打文学性文本生成。

**[XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)** & **[MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)**
- XiaomiMiMo | 👍 558 / 493 | ⬇️ 75,079 / 25,661
- 小米 MiMo V2.6 系列强化学习版本，Pro 与 Flash 双规格覆盖多模态场景。

**[yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base)**
- yandex | 👍 349 | ⬇️ 3,456
- Yandex 开源 80B-A3B MoE 基座，俄语生态的重要开源动作。

### 🎨 多模态与生成（图像 / 视频 / 音频）

**[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)**
- convaiinnovations | 👍 4,123 | ⬇️ 0
- "System-One / 校准决策”分类模型，点赞爆表但零下载，争议性话题发布，本周最大谜团。另有 [laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual)（👍 306）。

**[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
- Lightricks | 👍 5,346 | ⬇️ 1,601,089
- 图生视频 / 文生视频 / 视频转视频全能选手，160 万下载证明视频生成需求旺盛。

**[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)**
- Qwen | 👍 2,507 | ⬇️ 52,804
- 本周图像生成“母模型”，编辑能力强，直接催生了一整个生态（见量化分类）。

**[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)**
- TaichuAI | 👍 1,684 | ⬇️ 11,612
- 9B 视觉语言模型，主打空间推理，中量级 VLM 的实力新秀。

**[Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite)**
- Edge0 | 👍 1,150 | ⬇️ 19,434
- 流式无限时长语音识别，解决长音频 ASR 的工程痛点。

**[XingChen-AGI/TeleOCR](https://huggingface.co/XingChen-AGI/TeleOCR)**
- XingChen-AGI | 👍 613 | ⬇️ 27,837
- 基于 Qwen2.5-VL 的 OCR 专精模型，垂直场景实用性强。

**[XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)** & **[apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B)**
- 👍 525 / 245 | ⬇️ 8,839 / 1,740
- 分别为 MiMo 蒸馏出的 9B 视觉模型和 Apple 开源的轻量 VLM。

**[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)** & **[netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2)**
- 👍 412 / 438 | ⬇️ 22,514 / 8,243
- NVIDIA 说话人分离（音频帧分类）与网易有道实时 ASR，音频 pipeline 组件级开源。

### 🔧 专用模型（判别 / 验证 / 结构化）

**[AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev)**
- AlexWortega | 👍 613 | ⬇️ 0
- 基于 Qwen3.5 的 NLI / cross-encoder，社区开源“Jev”系列判别模型。

**[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)**
- Contrastive-LM | 👍 413 | ⬇️ 766
- 对比学习 verifier / reranker，新范式（CLM）首发引起研究圈关注。

**[akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni)**
- akhilaaa3 | 👍 273 | ⬇️ 248
- Gemma4 统一架构的“Jev”变体，小型研究型发布。

**[fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide)**
- fastino | 👍 209 | ⬇️ 19,757
- GLiNER2.5 零样本实体抽取 + 意图分类，下载表现扎实的工具型模型。

### 📦 微调与量化（GGUF / LoRA / 压缩）

**[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)**
- Comfy-Org | 👍 811 | ⬇️ 3,987,373
- ComfyUI 官方打包的 Qwen-Image-2.1 单文件版，本周下载量第一（近 400 万）。

**[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**
- ISTA-DASLab | 👍 1,780 | ⬇️ 1,608,439
- 量化研究天团的新格式 GSQ+RCO 混合精度，160 万下载显示前沿量化已被主流接受。

**[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**
- prism-ml | 👍 2,199 | ⬇️ 3,343,748
- 三值（2-bit）27B 模型，334 万下载，极限压缩跑本地大模型的代表。

**[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)**
- abenzerps | 👍 2,109 | ⬇️ 964,220
- 去审查版 Qwen-Image GGUF，ComfyUI 生态直用，社区自由度需求缩影。

**[unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF)** & **[pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF)** & **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)**
- 👍 271 / 302 / 347 | ⬇️ 194,341 / 145,246 / 133,151
- unsloth 标准量化、社区魔改文本编码器（Heretic）、Viggle 加速 LoRA——Qwen-Image 生态三件套。

**[inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design)**
- inclusionAI | 👍 304 | ⬇️ 0
- 蚂蚁系设计向图像生成模型，刚发布、权重待放出，热度先行。

---

## 🌐 生态信号

**Qwen 系一家独大**：Qwen3.8-27B 是本周绝对中心（点赞、下载、衍生量化三榜制霸），Qwen-Image-2.1 则在图像侧复刻了同样的“母模型 → 社区生态”路径——ComfyUI 打包、unsloth 量化、去审查版、编码器魔改在一周内全部出现，生态响应速度极快。**开源权重仍是主旋律**：DeepSeek、Apple、Yandex、NVIDIA、Xiaomi 均以真实可下载权重上榜，闭源无踪影。**量化前沿值得注意**：ISTA-DASLab 的 GSQ-RCO 混合精度与 prism-ml 的三值 2-bit 压缩均获百万级下载，说明“极限压缩跑旗舰模型”已从研究走向大众。此外，多家中国厂商（XingChen、Taichu、网易有道、inclusionAI）集中发力，音频（ASR/说话人分离）和垂直 VLM（OCR、空间推理）是本周新增活跃赛道。

---

## 💡 值得探索

1. **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — 本周生态中心。想体验社区玩法可直接用 [Comfy-Org 打包版](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)（400 万下载的默认入口），研究编辑能力则用原版。

2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 2-bit 27B 且下载量 334 万，验证了极限量化的实用性，本地部署玩家的重点观察对象。

3. **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)** — 对比学习 verifier/reranker 的新范式首发，学术与 RAG 工程方向都值得跟进其后续版本。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*