# Hugging Face 热门模型日报 2026-10-01

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-01 04:49 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-10-01**

---

## 📊 今日速览

Qwen 生态全面爆发：**Qwen3.8-27B** 以 16,671 点赞、703 万下载统治榜单，其量化版、蒸馏版和社区微调占据多个席位。生成侧，**LTX-2.5** 视频模型和 **Qwen-Image-2.1** 图像模型双双走红，ComfyUI 生态持续扩张。音频领域出现 **Audio8-ASR-Infinite** 流式识别新秀，NVIDIA 也带来 Nemotron-3 说话人分离模型。整体看，27B 级多模态模型 + GSQ-RCO 量化方案成为本周社区主线。

---

## 🔥 热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen 官方 | 👍 16,671 | ⬇️ 7,038,259
  本周绝对王者：多模态对话旗舰，下载量与点赞数断层领先，是几乎所有社区微调与量化的基座。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — DeepSeek | 👍 3,940 | ⬇️ 721,211
  DeepSeek 新一代轻量多模态模型，延续高性价比路线，是开源侧挑战 Qwen 主力的主要竞争者。

- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)** — XingChen-AGI | 👍 1,819 | ⬇️ 47,613
  MoE 架构（29B 总参/4B 激活），以小激活参数量换取高效推理，性价比路线受关注。

- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)** — Altworld | 👍 793 | ⬇️ 8,524
  基于 Qwen3.8 的创意写作向微调，主打文学化文风，垂直写作场景热度上升。

- **[XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)** — 小米 | 👍 616 | ⬇️ 80,958
  小米 MiMo 系列强化学习版本，多模态推理能力增强，大厂持续押注开源。

- **[orcarouter/OrcaSAQ-2-27B](https://huggingface.co/orcarouter/OrcaSAQ-2-27B)** — orcarouter | 👍 230 | ⬇️ 2,456
  面向 SAQ 场景的 Qwen3.8 27B 微调，vLLM 优化部署。

---

### 🎨 多模态与生成（图像 / 视频 / 音频）

**视频：**
- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 👍 5,741 | ⬇️ 1,602,348
  点赞榜第二、下载超 160 万：图生视频/文生视频/视频编辑全能选手，本周生成侧最大赢家。

- **[akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA)** — akatz-ai | 👍 198 | ⬇️ 8,078
  MiniMax-H3 视频模型的角色替换 LoRA，视频编辑工具链热门组件。

**图像：**
- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Qwen 官方 | 👍 2,725 | ⬇️ 70,687
  Qwen 图像生成+编辑新旗舰，带动一整个微调/量化生态（见下方衍生模型）。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — abenzerps | 👍 2,595 | ⬇️ 1,232,685
  Qwen-Image-2.1 无审查 GGUF 版，ComfyUI 生态驱动下载破百万。

- **[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)** — Comfy-Org | 👍 869 | ⬇️ 5,032,483
  官方 ComfyUI 适配版，本周下载量第一（超 500 万），工作流生态的入口级模型。

- **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)** — Viggle | 👍 458 | ⬇️ 205,137
  蒸馏加速版，少步数出图，推理成本大幅下降。

- **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)** — Alissonerdx | 👍 1,060 | ⬇️ 168,110
  基于 Qwen-Image-Edit 的换脸 LoRA，消费级换脸需求的流量密码。

- **[inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design)** — inclusionAI | 👍 360 | ⬇️ 0
  蚂蚁系设计向图像模型，点赞先行、权重未放量，关注度高。

**音频：**
- **[Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite)** — Edge0 | 👍 1,966 | ⬇️ 26,749
  支持无限长流式 ASR，解决长音频转录痛点，音频赛道本周黑马。

- **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)** — NVIDIA | 👍 565 | ⬇️ 36,386
  帧级说话人分离/VAD，与 ASR 配套的语音处理管线刚需组件。

**视觉理解：**
- **[XingChen-AGI/TeleOCR](https://huggingface.co/XingChen-AGI/TeleOCR)** — XingChen-AGI | 👍 1,107 | ⬇️ 30,383
  基于 Qwen2.5-VL 的 OCR 专精模型，文档数字化场景稳定走量。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** — TaichuAI | 👍 2,468 | ⬇️ 12,139
  中科院系视觉语言模型，主打空间推理，小尺寸 VLM 的精品路线。

---

### 🔧 专用模型

- **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)** — Contrastive-LM | 👍 577 | ⬇️ 2,392
  对比学习训练的验证器/重排序模型，面向 RLHF 与搜索场景的新范式尝试。

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations | 👍 4,699 | ⬇️ 0
  “校准决策”文本分类系统模型，点赞极高但零下载，疑似宣传期/权重未放，需观察。

- **[fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide)** — fastino | 👍 261 | ⬇️ 34,664
  零样本实体抽取 + 意图分类一体机，轻量 NLP 工具链持续迭代。

- **[SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1)** — SupersonicLabs | 👍 319 | ⬇️ 2,201
  多语言决策分类模型，“LLM 做判断题”这一新用途类别值得关注。

- **[PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE)** — PSRben | 👍 351 | ⬇️ 137
  学术背景（arXiv:2609.33325）的视觉分类模型，论文驱动的小众关注。

- **[akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni)** — akhilaaa3 | 👍 331 | ⬇️ 1,132
  基于 Gemma4 统一架构的分类实验模型，社区探索者作品。

---

### 📦 微调与量化

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab | 👍 1,860 | ⬇️ 1,679,903
  知名量化实验室出品的 GSQ-RCO 混合精度量化，下载近 170 万，本地部署首选。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF)** — ISTA-DASLab | 👍 150 | ⬇️ 33,259
  同系量化 + 剪枝的代码特化版，进一步压低编程助手门槛。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — prism-ml | 👍 2,308 | ⬇️ 3,676,692
  三值/2-bit 极限量化，27B 模型跑进消费级硬件，下载 367 万证明需求旺盛。

- **[ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF)** — ukisai | 👍 171 | ⬇️ 175,005
  Swift 训练框架产出的同款量化，量化配方正在社区标准化。

- **[orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF)** — orcarouter | 👍 200 | ⬇️ 7,186
  网络安全领域无审查微调 + GGUF，垂直安全场景私有化部署需求体现。

- **[XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)** — 小米 | 👍 584 | ⬇️ 12,085
  MiMo-Pro 能力蒸馏到 Qwen 9B 基座，官方下场做蒸馏是生态融合的有趣信号。

---

## 🌐 生态信号

**Qwen 家族主导地位进一步巩固**：30 个热门模型中，直接基于 Qwen 基座或衍生（量化、LoRA、蒸馏）的超过三分之一。Qwen3.8-27B 已成为事实上的“开源默认基座”，类似当年 Llama 的生态位。DeepSeek、MiMo、Xing 等竞争者则以差异化（Flash 轻量、蒸馏、MoE）切入。生成侧，Qwen-Image-2.1 + ComfyUI 形成“发布即出生态”的飞轮——官方、Comfy-Org、社区 GGUF/LoRA 三层结构在发布当周即完整。**量化趋势明显**：GSQ-RCO 正取代传统 GPTQ/AWQ 成为新宠，三值/2-bit 极限量化下载量巨大，本地跑 27B 已是主流需求。此外，“点赞高、下载为零”的模型（laya、Ming-Image）增多，反映发布前期营销化趋势，选型时应以实际下载与可复现性为准。

---

## 💎 值得探索

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 视频生成本周最强开源选项，文/图/视频到视频全覆盖，160 万下载验证了稳定性，适合立即上手做视频工作流。

2. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**（搭配 [GSQ-RCO 量化版](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) 或 [Ternary-Bonsai-2](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)）— 当前生态中心的中心：研究其原生能力，再按硬件条件选量化版本地部署，一条龙体验 27B 多模态旗舰。

3. **[Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) + [Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)** — 无限长流式 ASR + 说话人分离的组合，是长会议/播客转录管线的理想搭档，音频赛道被低估的机会点。

---

*数据来源：Hugging Face Hub（2026-10-01 周榜）| 点赞/下载为快照数据，仅供参考*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*