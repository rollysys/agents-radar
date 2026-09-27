# Hugging Face 热门模型日报 2026-09-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-27 04:20 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-09-27**

---

## 📰 今日速览

Qwen 生态全面爆发：**Qwen3.8-27B** 及其量化版以 16K+ 点赞、超 1300 万周下载量统治榜单，**Qwen-Image-2.1** 则引领文生图赛道，围绕它的 GGUF、ComfyUI、LoRA 衍生版本占据了近三分之一的热门席位。视频生成方面，Lightricks 的 **LTX-2.5** 表现强劲。研究性创新同样亮眼：三值量化（Ternary）、GSQ-RCO 混合精度量化等极限压缩方案下载量破百万。此外，多家中国厂商（小米、网易有道、TaichuAI、星尘）密集发布新一代多模态与推理模型。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 👍 / ⬇️ | 说明 |
|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,360 / 6,652,309 | 本周绝对王者，多模态指令模型，生态地位稳固 |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,729 / 43,947 | MoE 架构（29B 总参、4B 激活），高性价比对话模型 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | DeepSeek | 3,777 / 640,577 | V4.1 轻量版，兼顾文本与多模态，社区口碑佳 |
| [XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 530 / 74,497 | 小米 RL 训练的多模态旗舰 |
| [XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) | XiaomiMiMo | 480 / 23,000 | Pro 的轻量高速版 |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 712 / 5,590 | 基于 Qwen3.8 架构的社区模型，主打写作风格 |
| [yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base) | Yandex | 339 / 3,336 | 80B-A3B 大 MoE 基座，俄语生态重磅开源 |

### 🎨 多模态与生成（图像、视频、音频）

| 模型 | 作者 | 👍 / ⬇️ | 说明 |
|---|---|---|---|
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,407 / 48,361 | 本周图像生成焦点，生成+编辑一体 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,239 / 1,604,804 | 视频“瑞士军刀”：图生视频、文生视频、视频编辑全覆盖 |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 1,595 / 11,063 | 强空间推理的视觉语言模型 |
| [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 501 / 7,905 | MiMo 蒸馏到 Qwen 9B 的多模态小钢炮 |
| [Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 835 / 7,859 | 无限流式语音识别，长音频场景利器 |
| [apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B) | Apple | 229 / 1,432 | 苹果罕见开源视觉语言模型，Qwen3.5 架构 |
| [netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | 网易有道 | 427 / 7,155 | Qwen3-ASR 基座的新一代语音识别模型 |
| [inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) | inclusionAI | 257 / 0 | 面向设计场景的文生图新作 |

### 🔧 专用模型

| 模型 | 作者 | 👍 / ⬇️ | 说明 |
|---|---|---|---|
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)（及 [multilingual 版](https://huggingface.co/convaiinnovations/laya-multilingual)） | convaiinnovations | 3,918+296 / 0 | "calibrated-decisions" 决策校准分类器，点赞高但零下载，疑似刷量/社区事件 |
| [StarDoc-AI/TeleOCR](https://huggingface.co/StarDoc-AI/TeleOCR) | StarDoc-AI | 431 / 26,152 | 基于 Qwen2.5-VL 的专业 OCR |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | NVIDIA | 373 / 19,620 | 说话人分离/语音活动检测，音轨级任务 |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 299 / 434 | 对比学习验证器/重排序器，研究向新范式 |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) / [akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni) | 社区 | 598 / 258 | "Jev" 相关 NLI/分类模型，社区热点但下载极低 |

### 📦 微调与量化

| 模型 | 作者 | 👍 / ⬇️ | 说明 |
|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,657 / 6,832,629 | 本周下载王，本地部署首选 |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,145 / 3,247,527 | 三值（2-bit）极限量化，消费级硬件跑 27B |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,735 / 1,560,929 | 学术界混合精度量化前沿成果落地 |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 1,952 / 876,673 | 去审查版图像模型，GGUF 下载近百万 |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 781 / 3,641,785 | 官方 ComfyUI 单文件版，工作流生态标配 |
| [pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF) | pottokao | 282 / 137,283 | FP8 量化文本编码器，降低 ComfyUI 门槛 |
| [unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF) | unsloth | 249 / 170,469 | 图像模型 GGUF 化，本地生图又一选择 |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 297 / 101,512 | Turbo LoRA 加速蒸馏，推理步数大幅减少 |

---

## 📊 生态信号

**Qwen 家族一家独大**：从 27B 语言/多模态模型到图像生成，再到下游 GGUF、LoRA、蒸馏与量化，Qwen 已形成“基座—衍生—部署”的完整闭环，榜单 30 席中 Qwen 系直接相关者超过 15 个。**中国厂商集群式发力**：小米 MiMo V2.6 全系列、星尘 Xing4.0、TaichuAI、网易有道、蚂蚁 inclusionAI 同期上榜，开源权重仍是主旋律，且普遍拥抱 MoE 架构（A3B/A4B 激活比例成主流）。**量化技术进入深水区**：三值化（Ternary）和 GSQ-RCO 混合精度下载量均破百万，表明 2-bit 级压缩已从论文走向实用。**ComfyUI + GGUF 成为生成模型的默认分发形态**。⚠️ 另需警惕：laya、openjev 等模型高赞零下载，疑似营销刷量事件。

---

## 💎 值得探索

1. **[Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 三值量化跑 27B 模型且周下载 320 万，是评估 2-bit 推理质量与速度极限的最佳样本，本地部署爱好者必试。

2. **[LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 一套模型覆盖图生视频、文生视频、视频编辑全链路，开源视频生成当前性价比最高的选择之一。

3. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GSQ-GGUF)** — 学术团队的混合精度量化方法，与 unsloth 常规 GGUF 对比测试，可直观感受前沿量化研究的实际收益。

---

*数据来源：Hugging Face Hub 周榜（2026-09-27）。点赞与下载为周度数据。*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*