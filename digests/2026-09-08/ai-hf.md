# Hugging Face 热门模型日报 2026-09-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-08 03:38 UTC

---

# 📰 Hugging Face 热门模型日报
**日期：2026-09-08**

---

## 一、今日速览

本周趋势榜被 **Qwen3.8 家族**全面刷屏，`Qwen3.8-27B` 以 14,281 点赞、641 万下载领跑，其社区量化与微调版本占据近三分之一席位。多模态生成方面，**MiniMax-H3**（497 万下载）与 **LTX-2.5** 视频生成模型表现强劲。中国厂商（Qwen、Zhipu、MiniMax、DeepSeek、OpenBMB）在 LLM 和生成模型双线发力，主导本周开源生态。此外，"Uncensored/Abliterated" 微调与 GSQ、NVFP4 等新量化格式成为社区活跃度的显著信号。

---

## 二、热门模型

### 🧠 语言模型

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  作者：Qwen | 👍 14,281 | ⬇️ 6,416,358
  本周最热旗舰，多模态对话模型，是整个衍生生态（量化、微调、蒸馏）的基座，霸榜级别表现。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**
  作者：Qwen | 👍 4,982 | ⬇️ 474,693
  高速推理导向的轻量变体，"Next" 实验版本预告下一代架构，社区抢先尝鲜热情高。

- **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** / **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)**
  作者：zai-org | 👍 2,135 / 1,753 | ⬇️ 784,005 / 442,064
  智谱 GLM-5.3 系列双版本上榜，Flash 版主打性价比推理，标准版采用 MoE-DSA 架构。

- **[deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)**
  作者：deepseek-ai | 👍 801 | ⬇️ 251,611
  DeepSeek V4 首个带视觉能力的实验版 Flash 模型，V4 前奏信号，关注度自然高涨。

- **[XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B)**
  作者：XHToken | 👍 747 | ⬇️ 7,216
  新兴小型 LLM，下载少但点赞极高，疑似备受期待的早期发布，社区口碑先行。

- **[openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B)**
  作者：openbmb | 👍 325 | ⬇️ 13
  OpenBMB 2B 端侧模型全新发布，下载刚起步，点赞速度显示端侧 LLM 持续受追捧。

- **[IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B)**
  作者：IFM | 👍 212 | ⬇️ 2,226
  K2 系列后续，36B 总参激活 4B 的 MoVA 架构，面向高性价比推理。

### 🎨 多模态与生成

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
  作者：MiniMaxAI | 👍 5,013 | ⬇️ 4,990,034
  本周生成模型最大赢家，文本到视频、图生视频全能，下载近 500 万。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  作者：Lightricks | 👍 3,090 | ⬇️ 1,584,382
  开源视频生成主力 LTX 的重大升级，支持图/文/视频多入口生成，生态适配广。

- **[OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3)**
  作者：OpenVDN | 👍 228 | ⬇️ 0
  基于 MiniMax-H3 的社区微调视频模型，刚发布即上榜，蹭上基座热度。

- **[WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity)**
  作者：WarmBloodAban | 👍 145 | ⬇️ 26,731
  MiniMax-H3 社区风格化微调，体现视频模型微调生态正在快速成型。

- **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)**
  作者：BreezeBlue | 👍 478 | ⬇️ 6,754
  新一代开源 TTS 模型，小团队出品点赞亮眼。

### 🔧 专用模型

- **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)**
  作者：google | 👍 581 | ⬇️ 271,713
  Google 时序预测基础模型大版本更新，企业预测场景刚需，下载量扎实。

- **[microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B)**
  作者：microsoft | 👍 140 | ⬇️ 1,144
  微软流式语音识别新发布，VibeVoice 家族从 TTS 扩展到 ASR。

- **[facebook/mms-300m](https://huggingface.co/facebook/mms-300m)**
  作者：facebook | 👍 266 | ⬇️ 12,213
  Meta 多语言语音新规模版本，wav2vec2 系常青树的延续。

- **[sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)**（嵌入）
  作者：sentence-transformers | 👍 5,577 | ⬇️ 251,367,312
  全站下载之王（2.5 亿+），RAG 应用的默认嵌入选择，长期霸榜。

- **常青经典**：[openai-community/gpt2](https://huggingface.co/openai-community/gpt2)（👍 3,716）、[google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased)（👍 2,992）、[openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32)（👍 1,212）、[distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased)（👍 1,156）
  教学、原型、基线场景的永恒支柱，周下载量持续数百万级。

### 📦 微调与量化

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
  作者：unsloth | 👍 3,645 | ⬇️ 10,479,045
  本周下载量第一（1048 万），本地部署用户的首选 GGUF 版本。

- **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)**
  作者：unsloth | 👍 829 | ⬇️ 868,243
  Flash-Next 的官方级量化配套，紧跟基座节奏。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**
  作者：ISTA-DASLab | 👍 568 | ⬇️ 403,292
  学术界出品的 GSQ+RCO 混合精度量化研究，代表下一代压缩技术前沿。

- **[nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4)**
  作者：nvidia | 👍 141 | ⬇️ 18,068
  NVIDIA 官方 NVFP4 量化，为 Blackwell 硬件优化，软硬协同信号明显。

- **Uncensored/Abliterated 阵营**：
  - [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)（👍 998 | ⬇️ 1,629,754）
  - [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)（👍 793 | ⬇️ 292,633）
  - [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)（👍 305 | ⬇️ 258,896）
  - [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8)（👍 276 | ⬇️ 18,602）
  去审查微调需求旺盛，Qwen3.8-27B 成为最热门“改造”对象，HauhauCS 版下载破 160 万。

- **[Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwen3.8-27B-Flash-GGUF)**
  作者：Jackrong | 👍 142 | ⬇️ 60,343
  Qwen 与 GLM（"Opus"）混合社区实验，模型融合玩法的代表。

---

## 三、生态信号

**Qwen3.8 家族毫无疑问是本周生态核心**——榜单 30 席中约 12 席与其直接相关，且覆盖“官方基座 → 大厂量化（NVIDIA FP4）→ 学术量化（GSQ-RCO）→ 社区微调（Uncensored、模型融合）”完整链条，这是典型的“新基座确立”信号。**中国厂商主导开源权重 LLM**（Qwen、GLM、MiniMax、DeepSeek、MiniCPM），闭源阵营在榜单上几乎缺席，开源权重已是默认策略。量化层面，GGUF 仍是本地部署主流，但 **NVFP4（NVIDIA）与 GSQ 混合精度** 显示量化正走向硬件绑定与更低位宽。另一个值得警惕的信号是 **Uncensored 微调的规模化**，HauhauCS 版 160 万下载说明去审查需求已成可观生态，安全与治理讨论将持续升温。

---

## 四、值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周绝对核心，无论是评估基线还是做下游微调，都是当前社区默认起点；配套 unsloth GGUF 可立即本地体验。

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 500 万下载的视频生成旗舰，多入口（文/图/视频）生成能力值得与 LTX-2.5 横向对比，其社区微调生态（Singularity、vdn 版本）也说明可控性和风格化空间大。

3. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — 学术界出品的混合精度量化实验，若你在意边缘部署的体积/质量平衡，这是观察下一代压缩技术走向的最佳样本。

---
*数据来源：Hugging Face Hub 周榜（2026-09-08）*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*