# Hugging Face 热门模型日报 2026-09-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-25 04:00 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-09-25**

---

## 📰 今日速览

Qwen 系家族今日全面霸榜：[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) 以 16,228 点赞、676 万下载成为本周绝对王者，衍生量化/微调版本多达 5 款上榜。图像生成方面，[Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) 与 Lightricks 的 [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) 分别点燃文生图和图生视频两条赛道。极致量化成为新焦点：prism-ml 的三值（2-bit）模型下载近 300 万，ISTA-DASLab 的 GSQ-RCO 量化方案也获百万级下载。此外，DeepSeek、小米 MiMo、网易有道、Yandex 等中外厂商均有重磅发布。

---

## 🔥 热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 👍 16,228 | ⬇️ 6,765,008
  多模态旗舰文本模型，本周生态绝对核心，几乎所有量化/微调热点都围绕它展开。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen | 👍 5,683 | ⬇️ 830,208
  Qwen3.8 轻量快线预览版（qwen4_exp 架构），83 万下载显示社区对新架构尝鲜热情极高。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — deepseek-ai | 👍 3,725 | ⬇️ 606,028
  DeepSeek V4.1 轻量多模态版本，开源权重大厂持续跟进，60 万下载说明部署需求旺盛。

- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)** — XingChen-AGI | 👍 1,647 | ⬇️ 41,923
  29B 参数 A4B 激活的 MoE 对话模型，稀疏架构带来高性价比推理。

- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)** — Altworld | 👍 637 | ⬇️ 4,541
  基于 Qwen3.5 架构的社区模型，名字暗示主打写作风格方向。

- **[yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base)** — yandex | 👍 321 | ⬇️ 2,678
  Yandex 开源 80B-A3B MoE 基座模型，俄罗斯科技巨头的重量级开源动作。

- **[Cactus-Compute/needle3](https://huggingface.co/Cactus-Compute/needle3)** — Cactus-Compute | 👍 227 | ⬇️ 69,655
  主打工具调用/函数调用的端侧小模型，下载量远超点赞，实用价值突出。

### 🎨 多模态与生成（图像 / 视频 / 音频）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 👍 5,022 | ⬇️ 1,637,601
  全能视频生成模型（文生/图生/视频生视频），163 万下载，本周生成赛道最大赢家之一。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Qwen | 👍 2,215 | ⬇️ 37,618
  Qwen 官方文生图/图像编辑新版本，催生大量社区 GGUF 与微调版本。

- **[m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)** — m-a-p | 👍 995 | ⬇️ 23,703
  音乐生成模型，支持符号规划与智能体式编辑，开源音乐生成的稀缺供给。

- **[Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite)** — Edge0 | 👍 353 | ⬇️ 347
  支持无限流式输入的语音识别模型，面向实时场景。

- **[netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2)** — 网易有道 | 👍 395 | ⬇️ 4,930
  基于 Qwen3-ASR 的语音识别模型，国内大厂语音赛道新选手。

- **[inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design)** — inclusionAI | 👍 229 | ⬇️ 0
  蚂蚁系 inclusionAI 的设计向文生图模型，刚发布即上榜。

### 🔧 专用模型

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations | 👍 3,430 | ⬇️ 0
  主打“校准决策”（calibrated-decisions）的系统级文本分类模型，零下载高点赞，话题性极强。

- **[AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev)** — AlexWortega | 👍 559 | ⬇️ 0
  基于 Qwen3.5 的 NLI 交叉编码器，推理与判定类任务专用。

- **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)** — nvidia | 👍 284 | ⬇️ 4,282
  NVIDIA 说话人分离/语音活动检测模型，音频流水线的关键组件。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** — TaichuAI | 👍 1,041 | ⬇️ 8,313
  强调空间推理的视觉语言模型，国内多模态空间能力赛道的探索。

### 📦 微调与量化

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — prism-ml | 👍 2,043 | ⬇️ 2,991,233
  三值（2-bit）量化 27B 模型，近 300 万下载，极致压缩引爆端侧部署需求。

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth | 👍 4,588 | ⬇️ 7,063,930
  unsloth 官方 GGUF 量化，706 万下载，GGUF 生态分发效率的最佳例证。

- **[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)** — Comfy-Org | 👍 692 | ⬇️ 2,858,923
  Qwen-Image-2.1 的 ComfyUI 单文件版本，286 万下载，工作流工具链的官方级适配。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab | 👍 1,659 | ⬇️ 1,465,429
  学术团队 GSQ-RCO 混合精度量化方案，前沿压缩研究直接进入实用。

- **[DavidAU/Qwen3.8-27B-TURBO-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU | 👍 1,160 | ⬇️ 1,502,387
  命名狂野的社区混合微调版（无审查 + 代码强化 + MTP），DavidAU 式配方仍有巨大市场。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — abenzerps | 👍 1,651 | ⬇️ 575,697
  Qwen-Image-2.1 无审查 GGUF 版，生成模型“去审查”需求持续旺盛。

- **[pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF)** — pottokao | 👍 243 | ⬇️ 103,226
  FP8 量化的文生图文本编码器，ComfyUI 低显存用户刚需组件。

- **[prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit)** — prism-ml | 👍 368 | ⬇️ 51,644
  三值模型的 MLX 版本，Apple Silicon 端侧部署配套跟上。

- **[harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD)** — harshatheg | 👍 566 | ⬇️ 0
  MLX 约束解码/并行解码实验模型，1B 小模型的解码研究样本。

- **[XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)** / **[Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)** / **[Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)** — XiaomiMiMo | 👍 482/447/436
  小米 MiMo V2.6 全家桶：RL 训练旗舰版、轻量版与 Qwen 蒸馏版齐发。

---

## 📊 生态信号

**Qwen 家族一统天下**：榜单 30 席中超过一半直接基于 Qwen（Qwen3.8、Qwen-Image-2.1、Qwen3.5 架构衍生），Qwen3.8-27B 及其量化版本合计下载超 1,600 万，已成为事实上的开源生态标准底座。**开源权重仍是主流叙事**：DeepSeek、小米、Yandex、网易有道等大厂持续投放高质量权重，闭源模型在 Hub 上几无存在感。**量化进入“极致压缩”时代**：2-bit 三值模型、GSQ-RCO、FP8 等方案下载量动辄百万级，端侧与低显存部署是最真实的需求驱动。**微调文化依然狂野**：无审查版（Uncensored）、DavidAU 式“混合配方”、ComfyUI 生态适配构成活跃的社区二创层。

---

## 💎 值得探索

1. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 27B 模型压到 2-bit 三值还能有近 300 万下载，是研究极致量化的最佳样本；配合 [MLX 版](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit) 可直接在 Mac 上跑。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 一个模型覆盖文生/图生/视频生视频全链路，163 万下载验证了其在 ComfyUI 视频工作流中的地位，视频创作者首选。

3. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — 学术团队的 GSQ-RCO 混合精度量化，代表压缩研究的实用化前沿，适合想深入了解下一代量化技术的开发者。

---

*数据来源：Hugging Face Hub（2026-09-25 周榜）*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*