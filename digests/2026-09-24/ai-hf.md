# Hugging Face 热门模型日报 2026-09-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-24 03:45 UTC

---

# 📊 Hugging Face 热门模型日报
**日期：2026-09-24**

---

## 一、今日速览

今日榜单由 **Qwen 生态全面霸榜**：Qwen3.8-27B 及其 Flash-Next 变体持续吸赞，社区量化与微调衍生模型占据多个席位。**Qwen-Image-2.1** 引爆文生图社区，ComfyUI 适配版下载量突破 220 万。**LTX-2.5 视频模型**与 **MiniMax-H3** 展示了生成视频赛道的激烈竞争。此外，极端量化（三值/2-bit）与“Uncensored”微调仍是社区最活跃的两条主线。

---

## 二、热门模型

### 🧠 语言模型

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 👍 16,150 | ⬇️ 6.9M
  本周绝对王者，多模态对话旗舰，16K 点赞远超其他模型，是社区量化微调的“母体”。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 👍 5,644 | ⬇️ 807K
  轻量高速版前瞻发布，采用 qwen4_exp 架构，暗示下一代架构演进方向。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** | deepseek-ai | 👍 3,671 | ⬇️ 570K
  DeepSeek V4.1 快速版，图文理解+文本生成双任务，开源权重阵营的强力竞争者。

- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)** | XingChen-AGI | 👍 1,623 | ⬇️ 39K
  29B 参数 A4B 激活的 MoE 架构，兼顾性能与推理成本。

- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)** | Altworld | 👍 584 | ⬇️ 3.8K
  基于 Qwen3.5 架构的文本生成模型，主打文学化写作。

- **[yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base)** | yandex | 👍 297 | ⬇️ 2.3K
  Yandex 开源 80B MoE 基座（A3B 稀疏激活），俄语生态重要布局。

- **[XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)** / **[Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)** | XiaomiMiMo | 👍 452 / 429 | ⬇️ 4K / 13K
  小米 RL 训练多模态系列，Pro/Flash 双版本策略，端侧 AI 布局明显。

### 🎨 多模态与生成

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** | Qwen | 👍 2,057 | ⬇️ 28K
  本周文生图焦点，支持生成+编辑，衍生生态（GGUF/ComfyUI）全面开花。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 👍 4,915 | ⬇️ 1.6M
  全能视频生成模型（文/图/视频到视频），点赞榜前列、下载量极高。

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | MiniMaxAI | 👍 5,631 | ⬇️ 3.7M
  图文到视频旗舰，下载量 366 万，与 LTX-2.5 直接竞争视频赛道。

- **[m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)** | m-a-p | 👍 986 | ⬇️ 22K
  音乐生成模型，主打符号化规划与 agentic 编辑，音频赛道稀缺玩家。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** | TaichuAI | 👍 761 | ⬇️ 6.9K
  专注空间推理的视觉语言模型，差异化定位清晰。

### 🔧 专用模型

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** / **[laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual)** | convaiinnovations | 👍 3,149 / 223 | ⬇️ 0
  “校准决策”文本分类模型，零下载却高点赞，社区关注度与实用性暂不匹配。

- **[AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev)** | AlexWortega | 👍 529 | ⬇️ 0
  基于 Qwen3.5 的 NLI 交叉编码器，主打推理类分类任务。

- **[netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2)** | netease-youdao | 👍 360 | ⬇️ 3.7K
  网易有道 ASR 语音识别模型，垂直语音赛道代表。

- **[Cactus-Compute/needle3](https://huggingface.co/Cactus-Compute/needle3)** | Cactus-Compute | 👍 213 | ⬇️ 62K
  端侧工具调用/函数调用专用小模型，下载量证明实用需求旺盛。

### 📦 微调与量化

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** | unsloth | 👍 4,564 | ⬇️ 7.1M
  下载榜第一（713 万），Qwen3.8-27B 的官方级 GGUF 量化，本地部署首选。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** / **[mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit)** | prism-ml | 👍 1,959 / 358 | ⬇️ 2.8M / 48K
  三值（2-bit）极端量化，282 万下载证明消费级硬件跑大模型的需求爆发。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** | ISTA-DASLab | 👍 1,621 | ⬇️ 1.4M
  学术团队 GSQ+RCO 混合精度量化研究，压缩技术前沿落地。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** | abenzerps | 👍 1,460 | ⬇️ 350K
  Qwen-Image-2.1 无审查版 GGUF，ComfyUI 生态的高热度衍生品。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** | DavidAU | 👍 1,129 | ⬇️ 1.5M
  典型“融合怪”微调（创意+代码+无审查），社区玩家的极致实验。

- **[ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b)** / **[GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF)** | ukisai | 👍 561 / 386 | ⬇️ 18K / 169K
  "efficient-thinking"微调，压缩推理链长度，降低推理成本。

- **[harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD)** | harshatheg | 👍 559 | ⬇️ 0
  Apple Silicon（MLX）上的结构化生成小模型，RLCD 训练方法受关注。

- **[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)** | Comfy-Org | 👍 634 | ⬇️ 2.2M
  ComfyUI 官方打包版，222 万下载体现工作流生态的巨大流量入口地位。

- **[pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF)** | pottokao | 👍 207 | ⬇️ 74K
  仅量化文生图模型的文本编码器（FP8），ComfyUI 显存优化新玩法。

---

## 三、生态信号

**Qwen 家族统治力惊人**：榜单 30 席中约 15 个直接基于 Qwen 底座（Qwen3.8、Qwen-Image-2.1、Qwen3.5），从官方旗舰到三值量化到无审查微调，形成了“官方发布→量化→微调→工作流集成”的完整衍生链。**开源权重仍是主流叙事**：DeepSeek、MiniMax、Yandex、小米、网易有道等大厂均持续开放权重，竞争焦点转向视频生成与多模态。量化活动尤为活跃——2-bit/三值/GSQ 等极端压缩方案下载量动辄百万级，说明“消费级硬件跑 27B+”已成刚需；MLX/Apple Silicon 生态也在快速扩张。

---

## 四、值得探索

1. **[Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — qwen4_exp 标签暗示下一代架构预演，跟踪它可提前把握 Qwen 演进路线。
2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 三值量化 27B 模型下载近 300 万，是研究“极端压缩+可用性”权衡的最佳样本。
3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 全模态视频生成（文/图/视频互转），与 MiniMax-H3 对比测试可判断开源视频赛道当前天花板。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*