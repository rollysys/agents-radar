# Hugging Face 热门模型日报 2026-09-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-29 04:51 UTC

---

# 📰 Hugging Face 热门模型日报（2026-09-29）

## 一、今日速览

今日榜单由 **Qwen3.8-27B** 以绝对优势领跑（16,508 赞、684 万下载），其衍生生态（蒸馏、量化、微调）占据榜单近三分之一。**Qwen-Image-2.1** 发布引爆文生图社区，围绕它的 GGUF 量化、ComfyUI 适配和“去审查”微调版本集中上榜。视频生成方面 **LTX-2.5** 表现强劲（5,442 赞、159 万下载）。此外，一个新趋势值得关注：多个“决策/校准”类小模型（laya、Julia-1）以极高点赞进入榜单，暗示 LLM 系统层组件正在成为开源热点。

---

## 二、热门模型

### 🧠 语言模型

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  Qwen | 👍 16,508 | ⬇️ 6,844,348
  本周最热模型，多模态旗舰开源模型，下载量断崖式领先，是当前开源社区的新基准。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)**
  deepseek-ai | 👍 3,870 | ⬇️ 668,537
  DeepSeek 轻量级多模态旗舰，延续高性价比路线，与 Qwen 形成正面竞争。

- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)**
  XingChen-AGI | 👍 1,802 | ⬇️ 45,834
  MoE 架构（29B 总参数 / 4B 激活）对话模型，国产新势力以稀疏架构换取推理效率。

- **[XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)**
  XiaomiMiMo | 👍 587 | ⬇️ 76,518
  小米主打强化学习对齐的多模态旗舰，同系列 Flash-RL、Distill-Qwen-9B 也上榜。

- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)**
  Altworld | 👍 765 | ⬇️ 7,478
  基于 Qwen3.8 架构的社区创意写作模型，垂直文风微调的代表。

### 🎨 多模态与生成

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  Lightricks | 👍 5,442 | ⬇️ 1,595,377
  图生视频/文生视频/视频转视频全能模型，本周生成类最大赢家。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)**
  Qwen | 👍 2,602 | ⬇️ 58,693
  官方文生图+图像编辑模型，发布即引爆社区二创生态。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/Taichu-AGI/ZDTaichu5.0-9B)**
  TaichuAI | 👍 1,711 | ⬇️ 11,738
  9B 视觉语言模型，主打空间推理，多模态理解赛道的国产新玩家。

- **[Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite)**
  Edge0 | 👍 1,426 | ⬇️ 19,963
  支持无限长流式输入的 ASR 模型，解决长音频转写痛点。

- **[netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2)**
  网易有道 | 👍 448 | ⬇️ 9,336
  基于 Qwen3-ASR 架构的语音识别模型，国内大厂持续押注语音赛道。

- **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)**
  Viggle | 👍 389 | ⬇️ 175,907
  Qwen-Image-2.1 的 LoRA 加速版，生成速度显著提升，下载量远超点赞说明实用性强。

- **[inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design)**
  inclusionAI | 👍 330 | ⬇️ 0
  面向设计场景的文生图模型，刚发布已获关注，下载尚未起量。

### 🔧 专用模型

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)**
  convaiinnovations | 👍 4,347 | ⬇️ 0
  "System-One 校准决策"模型，本周点赞第二，代表 LLM 判断/决策组件这一新品类，热度远超下载，更多是概念性关注。

- **[XingChen-AGI/TeleOCR](https://huggingface.co/XingChen-AGI/TeleOCR)**
  XingChen-AGI | 👍 817 | ⬇️ 27,904
  基于 Qwen2.5-VL 的专用 OCR 模型，垂直场景（票据/文档）实用性强。

- **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)**
  nvidia | 👍 469 | ⬇️ 26,428
  NVIDIA 说话人分离/语音活动检测模型，企业级音频管线刚需组件。

- **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)**
  Contrastive-LM | 👍 491 | ⬇️ 1,271
  对比学习训练的验证器/重排序模型，面向推理链验证这一前沿方向。

- **[fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide)**
  fastino | 👍 232 | ⬇️ 24,250
  零样本实体抽取 + 意图分类轻量模型，NLP 工程师工具箱常客。

- **[apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B)**
  apple | 👍 262 | ⬇️ 1,840
  苹果开源的 9B 视觉语言模型，大厂开源动作持续引发关注。

- **[SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1)**
  SupersonicLabs | 👍 265 | ⬇️ 1,006
  多语言决策分类模型，与 laya 同属新兴“决策模型”品类。

- **[akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni) / [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev)**
  社区作者 | 👍 299 / 621 | ⬇️ 577 / 0
  社区驱动的"Jev"系列（基于 Gemma4 统一架构 / NLI 交叉编码器），独立开发者的实验生态。

### 📦 微调与量化

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)**
  abenzerps | 👍 2,295 | ⬇️ 1,062,921
  Qwen-Image-2.1 去审查 GGUF 版，超百万下载证明“无审查+本地部署”需求旺盛。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**
  prism-ml | 👍 2,237 | ⬇️ 3,457,124
  三值（2-bit）量化 27B 模型，本周下载量第一的量化作品，极致压缩的代表作。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**
  ISTA-DASLab | 👍 1,814 | ⬇️ 1,655,818
  学术量化团队对 Qwen3.8-27B 的混合精度 GSQ+RCO 量化，下载量印证“旗舰必被量化”定律。

- **[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)**
  Comfy-Org | 👍 830 | ⬇️ 4,351,753
  官方 ComfyUI 适配版，435 万下载反映节点式工作流已是图像生成主流消费方式。

- **[XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)**
  XiaomiMiMo | 👍 554 | ⬇️ 9,994
  将 MiMo-V2.6 能力蒸馏进 Qwen 9B 底座，小模型承载大能力的典型路径。

- **[unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF)** / **[pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF)**
  unsloth / pottokao | 👍 289 / 316 | ⬇️ 220,231 / 158,806
  unsloth 惯常第一时间跟进量化；Heretic 版本针对文本编码器微调，社区已深入到扩散模型的组件级改造。

- **[orcarouter/OrcaSAQ-2-27B](https://huggingface.co/orcarouter/OrcaSAQ-2-27B)**
  orcarouter | 👍 195 | ⬇️ 1,663
  基于 Qwen3.8 的 vLLM 优化路由模型，面向推理服务调度场景。

---

## 三、生态信号

**Qwen 家族统治力空前**：榜单 30 席中约 14 席直接基于 Qwen（Qwen3.8、Qwen-Image-2.1、Qwen3-ASR、蒸馏与各类量化微调），Qwen 已成为开源生态的事实基座，DeepSeek、小米、苹果等玩家在争夺第二梯队。**开源权重仍是主旋律**：中美大厂（Qwen、DeepSeek、NVIDIA、Apple、小米、网易有道）全部开放权重，社区在 48 小时内即完成量化与 ComfyUI 适配。**量化活动向极致演进**：三值/2-bit（Ternary-Bonsai）与混合精度 GSQ 下载量均破百万，说明端侧部署需求爆发。另一个值得注意的信号是 **“决策/校准小模型”（laya、Julia-1、CLM）** 集中涌现，点赞/下载比极高，预示 Agent 系统组件可能成为下一个热点品类。

---

## 四、值得探索

1. **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 当前开源多模态的事实标杆，无论做评测基线还是二次开发（蒸馏/量化/微调），都是绕不开的起点；配合 ISTA-DASLab 的 GGUF 版可在消费级硬件上运行。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 本周最实用的视频生成模型，支持图生视频、文生视频、视频转视频全管线，下载量已验证其工程质量，适合内容创作者即刻上手。

3. **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — “校准决策”新品类的代表，点赞第二但下载为零，说明社区正围观其概念。若其 System-One 决策范式成立，可能成为 Agent 工作流中的关键组件，值得研究者早期关注。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*