# Hugging Face 热门模型日报 2026-09-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-23 03:52 UTC

---

# 🤗 Hugging Face 热门模型日报（2026-09-23）

## 📌 今日速览

Qwen 生态全面开花：**Qwen3.8-27B** 以 16,078 点赞、707 万下载持续霸榜，其 Flash-Next 变体与社区量化/微调版本占据榜单多个席位。**MiniMax-H3** 与 **LTX-2.5** 领跑视频生成赛道，下载量均超百万。激进量化成为新热点：ISTA-DASLab 的 GSQ-RCO 混合精度方案与 prism-ml 的三值（2-bit）Bonsai 模型引发大量关注。整体来看，“官方大模型 + 社区量化/微调”的双层生态结构愈发清晰。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 👍 16,078 | ⬇️ 7,079,646
  本周绝对王者，多模态旗舰 LLM，下载与口碑双爆，是整个社区生态的底座。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen | 👍 5,610 | ⬇️ 787,525
  Qwen3.8 系列的轻量高速版，性价比路线，适合高频推理场景。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — deepseek-ai | 👍 3,618 | ⬇️ 542,014
  DeepSeek 新一代 Flash 多模态模型，延续了 V 系列的高性价比口碑。

- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)** — XingChen-AGI | 👍 1,403 | ⬇️ 30,627
  MoE 架构（总参 29B / 激活 4B），国产新势力社区首发即上热榜。

- **[TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B)** — TokenRhythm | 👍 1,009 | ⬇️ 12,574
  基于 Qwen3.5-text 的 agentic（智能体）微调，瞄准工具调用场景。

- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)** — Altworld | 👍 505 | ⬇️ 2,745
  Qwen3.5 文本底座的创意写作微调，主打叙事风格。

- **[yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base)** — yandex | 👍 279 | ⬇️ 1,516
  Yandex 开源 80B-A3B MoE 基座，俄语生态的重要开源事件。

- **[XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)** / **[Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)** — 小米 | 👍 396 / 391
  RL 后训练双子星，小参数多模态推理方向的持续迭代。

### 🎨 多模态与生成（图像、视频、音频）

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMaxAI | 👍 5,605 | ⬇️ 3,766,997
  图文生视频旗舰，下载量 376 万，本周生成类模型的流量中心。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 👍 4,809 | ⬇️ 1,630,125
  图/文/视频多入口视频生成，4,809 点赞居本周生成类榜首，社区口碑极佳。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen/Qwen-Image-2.1)** — Qwen | 👍 1,820 | ⬇️ 16,242
  图像生成+编辑双能力，与 ComfyUI 生态无缝衔接的新一代文生图底座。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — abenzerps | 👍 1,167 | ⬇️ 182,313
  Qwen-Image-2.1 无审查版 GGUF，18 万下载说明本地自由生成需求旺盛。

- **[WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity)** — WarmBloodAban | 👍 623 | ⬇️ 283,359
  MiniMax-H3 社区风格化微调，视频生成“官方+社区”模式的又一例证。

- **[m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)** — m-a-p | 👍 971 | ⬇️ 20,904
  音乐生成 + 符号规划 + agentic 编辑，小模型做专业音乐的新范式。

### 🔧 专用模型

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations | 👍 2,612 | ⬇️ 0
  “System-One 校准决策”分类器，话题度极高但零下载，更像研究型发布，值得关注但需验证。

- **[netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2)** — 网易有道 | 👍 277 | ⬇️ 2,729
  基于 Qwen3-ASR 架构的语音识别专用模型。

- **[Cactus-Compute/needle3](https://huggingface.co/Cactus-Compute/needle3)** — Cactus-Compute | 👍 189 | ⬇️ 54,528
  端侧工具/函数调用小模型，下载远超点赞，实用性驱动的典型。

- **[AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev)** — AlexWortega | 👍 486 | ⬇️ 0
  NLI / cross-encoder 开源模型，语义评估场景。

### 📦 微调与量化（GGUF、社区微调、本地部署）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth | 👍 4,526 | ⬇️ 7,019,401
  本地部署首选，700 万下载，unsloth 量化速度一如既往地快。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab | 👍 1,580 | ⬇️ 1,363,176
  GSQ + RCO 混合精度量化，学术机构出品，质量与体积的平衡标杆。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — ISTA-DASLab | 👍 243 | ⬇️ 67,988
  Flash-Next 的同款量化方案，轻量模型进一步压榨显存。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — prism-ml | 👍 1,893 | ⬇️ 2,569,604
  三值（2-bit）27B 模型，256 万下载，极低比特量化的破圈之作。

- **[prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit)** — prism-ml | 👍 338 | ⬇️ 43,477
  上述模型的 Apple Silicon（MLX）版本，Mac 本地跑 27B 的代表。

- **[DavidAU/Qwen3.8-27B-…Heretic-Uncensored…-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU | 👍 1,090 | ⬇️ 1,397,909
  命名狂魔的多配方融合微调，无审查+编码向，社区猎奇与实用并存。

- **[ukisai/Swift-Qwen3.8-27B](https://huggingface.co/ukisai/Swift-Qwen3.8-27b)** / **[GGUF 版](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF)** — ukisai | 👍 553 / 364
  “高效思考”微调，降低推理 token 消耗，GGUF 版 15 万下载。

- **[harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD)** — harshatheg | 👍 547 | ⬇️ 0
  MLX 端侧结构化生成/并行解码实验，1B 小模型 + 受限解码研究向。

- **[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)** — Comfy-Org | 👍 573 | ⬇️ 1,429,925
  官方镜像打包为 ComfyUI 单文件格式，143 万下载，工作流生态入口。

---

## 📡 生态信号

**Qwen 家族统治力最强**：榜单 30 席中约 14 席直接基于 Qwen（3.8 系列、Image 2.1、3.5/3.8 微调），官方首发 + unsloth/ISTA-DASLab/DavidAU/ukisai 等社区“量化-微调”流水线已高度成熟，同一底座可在数日内完成全格式覆盖。**开源权重仍是叙事主角**：DeepSeek、MiniMax、小米、网易有道、Yandex 等大小厂均以开放权重抢占生态位，闭源 API 未上榜但通过开源模型争夺部署入口。**量化技术迎来代际升级**：GSQ-RCO 混合精度与三值/2-bit 方案让 27B 级模型进入消费级硬件，MLX 生态（Apple Silicon）快速跟进。视频生成成为多模态新的流量高地。

---

## 💎 值得探索

1. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 三值量化的工程里程碑，2-bit 跑 27B 且下载 256 万，代表本地部署能力的边界突破，值得实测质量损失。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 本周口碑最佳的视频生成模型，支持图/文/视频多入口转换，创作工作流适配性强。

3. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — 学术机构出品的混合精度量化范本，若要在有限显存下跑旗舰 Qwen，这是比普通 Q4 更精细的选择。

---
*数据来源：Hugging Face Hub（2026-09-23），按周点赞排序。*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*