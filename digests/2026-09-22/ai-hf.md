# Hugging Face 热门模型日报 2026-09-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-22 03:54 UTC

---

# Hugging Face 热门模型日报（2026-09-22）

---

## 📰 今日速览

今日榜单由 **Qwen3.8-27B** 强势领跑（近 16K 点赞、超 700 万下载），其开源生态衍生出大量量化与微调版本，形成“一超多强”格局。视频生成赛道爆发，**MiniMax-H3** 与 **Lightricks LTX-2.5** 双双进入点赞榜前列。激进压缩技术成为焦点，ISTA-DASLab 的 GSQ-RCO 混合精度量化与 prism-ml 的三值 2-bit 方案下载量均破百万。此外，DeepSeek-V4.1-Flash 以 3,541 点赞成为本周口碑最高的多模态模型之一。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 点赞 / 下载 | 说明 |
|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,978 / 7,153,238 | 本周绝对王者，图像-文本多模态旗舰，下载量冠绝全榜 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,544 / 774,778 | Qwen3.8 系列轻量快速版本（qwen4_exp 架构），高吞吐场景首选 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,541 / 512,120 | DeepSeek V4.1 系列多模态 Flash 版，口碑下载双丰收 |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,643 / 460,533 | 端侧小模型新标杆，2B 参数量实现越级性能 |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,149 / 18,394 | 29B 参数 MoE（激活 4B），性价比路线的对话模型 |
| [XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 194 / 0 | 小米 MiMo 系列 RL 后训练旗舰，刚发布尚未放量 |
| [XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) | XiaomiMiMo | 211 / 0 | MiMo Pro 的轻量版本，同为新发布 |
| [yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base) | yandex | 208 / 676 | Yandex 开源 80B-A3B MoE 基座，俄语生态重要力量 |

### 🎨 多模态与生成（图像、视频、音频）

| 模型 | 作者 | 点赞 / 下载 | 说明 |
|---|---|---|---|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,575 / 4,046,917 | 点赞榜第一的视频生成模型，支持文/图/视频多模态输入生成视频 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,679 / 1,626,742 | 实时级视频生成/编辑模型，消费级显卡可用 |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 1,495 / 6,523 | 阿里新一代图像生成与编辑模型，原生发布即引爆社区二创 |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 457 / 535,365 | ComfyUI 官方适配版，单文件工作流接入，下载量远超原版 |
| [abenzerps/Qwen-Image-2.1-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-GGUF) | abenzerps | 679 / 33,232 | 社区 GGUF 量化版，低显存跑 Qwen-Image-2.1 |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 599 / 268,296 | MiniMax-H3 社区微调版，26 万下载显示视频微调需求旺盛 |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 951 / 18,759 | 3B 音乐生成模型，引入符号规划与 agentic 编辑能力 |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 220 / 5,078 | 视觉语言模型，主打空间推理 |

### 🔧 专用模型

| 模型 | 作者 | 点赞 / 下载 | 说明 |
|---|---|---|---|
| [netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 233 / 1,864 | 网易有道 Qwen3-ASR 架构语音识别模型 |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 1,876 / 0 | 面向“校准决策”的分类模型，点赞高但零下载，争议性上榜 |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 426 / 0 | 基于 Qwen3.5 的 NLI 交叉编码器，社区自研 |

### 📦 微调与量化

| 模型 | 作者 | 点赞 / 下载 | 说明 |
|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,476 / 7,039,006 | Qwen3.8-27B 官方级社区量化，下载量与原版几乎持平 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,539 / 1,292,471 | GSQ-RCO 混合精度量化，学术机构量化研究成果落地 |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 1,750 / 2,227,879 | 三值 2-bit 极限压缩 27B 模型，222 万下载证明端侧需求爆发 |
| [prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit) | prism-ml | 320 / 36,744 | 上述模型的 Apple Silicon MLX 版本 |
| [DavidAU/Qwen3.8-27B-TURBO-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,052 / 1,348,712 | 经典“fusion + uncensored”风格实验微调，社区下载量惊人 |
| [ukisai/Swift-Qwen3.8-27B](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) / [GGUF 版](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 534+346 / 160K+ | 主打"efficient-thinking"推理效率优化的社区微调 |
| [harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 520 / 0 | MLX 约束解码 + 并行解码实验，Apple 端侧研究向 |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 396 / 834 | 基于 Qwen3.5-text 的创意写作微调 |
| [TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B) | TokenRhythm | 994 / 12,260 | 主打 agentic 能力的 9B 微调 |

---

## 🌐 生态信号

**Qwen 家族已形成压倒性生态统治力**：榜单 30 席中约三分之一与 Qwen 直接相关（基座、量化、微调、衍生架构），Qwen3.8-27B 及其 unsloth/GGUF 版本下载量合计超 1,400 万。**开源权重持续扩张**：MiniMax-H3（视频）、DeepSeek-V4.1-Flash、Yandex AliceAI 等大厂均选择直接开放权重，闭源模型在趋势榜上几乎缺席。**量化活动呈现“更激进、更学术”趋势**：ISTA-DASLab 的 GSQ-RCO 混合精度与 prism-ml 的三值 2-bit 方案双双破百万下载，极限压缩正从实验走向主流。视频生成（MiniMax-H3、LTX-2.5）与端侧小模型（MiniCPM5-2B、MLX 生态）是本周增长最快的两个细分赛道。

---

## 💎 值得探索

1. **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周生态核心。无论直接部署还是作为微调基座，其社区配套（unsloth GGUF、GSQ-RCO 量化、ComfyUI 生态）已是全榜最完善，是当前性价比最高的通用选择。

2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 三值 2-bit 将 27B 模型压至消费级硬件可运行，222 万下载验证了实用性。对端侧部署和量化前沿研究都极具参考价值。

3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 支持 image-to-video、text-to-video、video-to-video 全模式，主打实时性与消费级显卡可用性，是与 MiniMax-H3 互补的轻量视频生成方案，适合快速上手实验。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*