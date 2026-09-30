# Hugging Face 热门模型日报 2026-09-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-30 04:37 UTC

---

# Hugging Face 热门模型日报（2026-09-30）

## 📰 今日速览

今日榜单最耀眼的无疑是 [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)，以 16,572 点赞和超过 700 万下载量一骑绝尘，其社区衍生生态（量化版、微调版、蒸馏版）几乎占据榜单三分之一。视频生成领域 [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) 以 5,582 点赞登顶点赞榜，图像生成方向 Qwen-Image-2.1 全家桶（官方、GGUF、ComfyUI、LoRA）形成完整生态链。极端量化技术（三值 2-bit、GSQ-RCO）成为社区热点，音频赛道则涌现出流式 ASR、说话人分离等多个高质量模型。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  作者：Qwen | 👍 16,572 | ⬇️ 7,020,239
  多模态旗舰基座，本周下载量与点赞双冠，是当前开源生态事实上的中心模型。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)**
  作者：deepseek-ai | 👍 3,899 | ⬇️ 690,388
  DeepSeek 新一代轻量多模态模型，兼顾文本生成与图文理解，延续高性价比路线。

- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)**
  作者：XingChen-AGI | 👍 1,809 | ⬇️ 46,557
  29B 参数 MoE 架构（激活 4B）对话模型，低推理成本引关注。

- **[XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)**
  作者：XiaomiMiMo | 👍 602 | ⬇️ 78,135
  小米强化学习训练的多模态生成模型，RL 后训练策略是亮点。

- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)**
  作者：Altworld | 👍 773 | ⬇️ 7,880
  基于 Qwen3.8 架构的文本生成社区模型，疑似主打文学写作风格。

### 🎨 多模态与生成（图像、视频、音频）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  作者：Lightricks | 👍 5,582 | ⬇️ 1,589,098
  图生视频/文生视频全能模型，本周点赞第一，下载近 160 万，视频生成赛道领跑者。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)**
  作者：Qwen | 👍 2,665 | ⬇️ 64,362
  官方文生图+图像编辑双能力模型，催生了庞大的社区衍生生态。

- **[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)**
  作者：Comfy-Org | 👍 854 | ⬇️ 4,699,089
  ComfyUI 官方封装版，下载量 470 万，是工作流用户接入 Qwen-Image 的首选。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)**
  作者：TaichuAI | 👍 1,968 | ⬇️ 11,836
  9B 视觉语言模型，主打空间推理能力。

- **[XingChen-AGI/TeleOCR](https://huggingface.co/XingChen-AGI/XingChen-AGI/TeleOCR)**
  作者：XingChen-AGI | 👍 879 | ⬇️ 30,354
  基于 Qwen2.5-VL 架构的专业 OCR 模型。

- **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)**
  作者：Viggle | 👍 427 | ⬇️ 190,649
  Qwen-Image-2.1 的 Turbo 加速 LoRA，显著提升生成速度。

- **[akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA)**
  作者：akatz-ai | 👍 158 | ⬇️ 5,890
  MiniMax-H3 视频角色替换 LoRA，视频编辑垂直场景工具。

- **[Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite)**
  作者：Edge0 | 👍 1,548 | ⬇️ 23,674
  无限长度流式语音识别模型，长音频场景痛点方案。

- **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)**
  作者：nvidia | 👍 520 | ⬇️ 30,931
  NVIDIA 说话人分离模型，音频前处理管线核心组件。

- **[netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2)**
  作者：netease-youdao | 👍 469 | ⬇️ 10,482
  网易有道基于 Qwen3-ASR 的语音识别模型。

- **[apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B)**
  作者：apple | 👍 266 | ⬇️ 1,956
  苹果发布的 9B 视觉语言模型，基于 Qwen3.5 架构。

### 🔧 专用模型（分类、排序、决策、抽取）

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)**
  作者：convaiinnovations | 👍 4,531 | ⬇️ 0
  主打“校准决策”的系统级决策模型，点赞高但下载为 0，疑似刚发布或 gated 访问。

- **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)**
  作者：Contrastive-LM | 👍 531 | ⬇️ 1,910
  对比学习训练的验证器/重排序模型，面向 RAG 与推理评估场景。

- **[fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide)**
  作者：fastino | 👍 243 | ⬇️ 29,199
  零样本实体抽取 + 意图分类多用途小模型，下载表现稳健。

- **[SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1)**
  作者：SupersonicLabs | 👍 297 | ⬇️ 1,725
  多语言决策分类模型。

- **[akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni)**
  作者：akhilaaa3 | 👍 312 | ⬇️ 923
  基于 Gemma4 统一架构的全模态分类模型。

### 📦 微调与量化（GGUF、社区微调、极端量化）

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**
  作者：ISTA-DASLab | 👍 1,831 | ⬇️ 1,678,861
  混合精度 GSQ-RCO 量化，学术界量化研究落地代表作。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**
  作者：prism-ml | 👍 2,274 | ⬇️ 3,581,027
  三值 2-bit 极端量化，358 万下载证明超低比特量化的实用价值。

- **[DavidAU/Qwen3.8-27B-TURBO-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  作者：DavidAU | 👍 1,283 | ⬇️ 1,726,231
  经典 DavidAU 式“疯狂融合”微调，去审查 + 编码强化，社区下载量惊人。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)**
  作者：abenzerps | 👍 2,453 | ⬇️ 1,152,523
  Qwen-Image-2.1 去审查 GGUF 版，115 万下载，本地生图社区刚需。

- **[unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF)**
  作者：unsloth | 👍 300 | ⬇️ 251,937
  unsloth 官方量化版，本地部署首选之一。

- **[pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF)**
  作者：pottokao | 👍 323 | ⬇️ 168,249
  针对 Qwen-Image 文本编码器的 Heretic FP8 量化，细化到组件级。

- **[XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)**
  作者：XiaomiMiMo | 👍 573 | ⬇️ 11,131
  MiMo-V2.6 蒸馏到 Qwen 9B 的轻量版。

- **[orcarouter/OrcaSAQ-2-27B](https://huggingface.co/orcarouter/OrcaSAQ-2-27B)**
  作者：orcarouter | 👍 212 | ⬇️ 2,143
  基于 Qwen3.5 的自量化（SAQ）实验模型，vLLM 友好。

- **[inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design)**
  作者：inclusionAI | 👍 347 | ⬇️ 0
  面向设计场景的文生图模型，尚处早期发布阶段。

---

## 📊 生态信号

**Qwen 家族霸榜**：Qwen3.8-27B 及 Qwen-Image-2.1 形成双引擎，榜单 30 席中约 15 席直接基于 Qwen 架构或衍生，叠加 ComfyUI、unsloth、ISTA-DASLab 等社区力量，Qwen 已成为开源生态的事实标准。

**量化技术走向极端化**：三值 2-bit（Ternary-Bonsai）、GSQ-RCO 混合精度等新量化方案下载量均破百万，表明端侧部署需求旺盛，社区不再满足于传统 4-bit/8-bit。

**开源权重持续强势**：Qwen、DeepSeek、小米 MiMo、网易有道、苹果等中外厂商同台竞技，视频（LTX-2.5、MiniMax-H3）与音频（ASR、Diarization）垂直赛道供给爆发。

**值得警惕的信号**：laya 等模型点赞高但下载为 0，可能存在营销式点赞，需谨慎评估真实可用性。

---

## 🌟 值得探索

1. **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 当前开源生态的锚点模型，无论直接使用还是研究其衍生生态（量化、蒸馏、微调版本）都是必选项。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 本周点赞冠军，支持图生视频/文生视频/视频转视频全模式，视频生成领域的开源新标杆。

3. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 三值 2-bit 量化实现 358 万下载，对研究极端压缩与端侧推理的人来说是绝佳样本。

---
*数据来源：Hugging Face Hub 周榜（2026-09-30）*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*