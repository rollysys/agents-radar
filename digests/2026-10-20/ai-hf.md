# Hugging Face 热门模型日报 2026-10-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-20 03:58 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-10-20**

---

## 📌 今日速览

Qwen3.8 家族持续霸榜，主模型周赞 18K、下载超 740 万，Flash-Next 版本也拿下 6.3K 点赞，成为本周最强模型家族。Lightricks 的 LTX-2.5 视频生成模型以 8.5K 点赞、200 万下载领跑生成类赛道。Qwen-Image-2.1 的社区量化版（Uncensored-Quantized）下载量高达 273 万，显示 ComfyUI + GGUF 生态的旺盛需求。百度 Unlimited-OCR 与 Meta SAM3 两款感知类模型双双破 180 万下载，OCR 与分割任务热度显著上升。

---

## 🔥 热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 👍 18,015 | ⬇️ 7,458,401
  本周绝对王者：全能多模态对话模型，下载量断层第一，社区生态最活跃。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen | 👍 6,336 | ⬇️ 2,494,099
  Qwen3.8 轻量高速版，兼顾性能与推理成本，249 万下载证明其生产级实用性。

- **[LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B)** — LiquidAI | 👍 501 | ⬇️ 14,151
  MoE 架构（24B 总参、2B 激活），端侧友好，Liquid 架构拥趸的更新首选。

- **[tencent/Hy-Memory-30B-A3B](https://huggingface.co/tencent/Hy-Memory-30B-A3B)** — tencent | 👍 220 | ⬇️ 1,571
  腾讯新发的 MoE 记忆增强模型，主打长上下文/记忆能力，刚上架即上榜。

- **[reflection/Beam-1.0-501B-A23B](https://huggingface.co/reflection/Beam-1.0-501B-A23B)** — reflection | 👍 170 | ⬇️ 2,097
  501B 超大 MoE 推理模型，主打 reasoning + 代码，开源界少见的旗舰体量。

- **[ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)** — ConwayResearch | 👍 571 | ⬇️ 425,513
  主打 tool-calling 的 27B 模型，2-bit 量化 + llama.cpp，42 万下载显示函数调用是刚需场景。

### 🎨 多模态与生成（图像 / 视频 / 音频）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 👍 8,498 | ⬇️ 2,019,834
  本周生成类之星：图生视频/文生视频全能，200 万下载，视频工作流的新标杆。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — deepseek-ai | 👍 4,657 | ⬇️ 1,367,081
  DeepSeek V4.1 旗舰 Flash 版，多模态文本生成，136 万下载证明其性价比口碑。

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)** — deepseek-ai | 👍 1,723 | ⬇️ 17,924
  V4.1-Flash 的最新快照更新版，刚发布即冲上周榜前十。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein)** 系列两个版本：
  - [comfy 版](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)（👍 981 | ⬇️ 393,062）：ComfyUI 单文件格式，39 万下载体现 Comfy 生态统治力。
  - [diffusers 版](https://huggingface.co/black-forest-labs/flux-3-image-klein)（👍 530 | ⬇️ 62,006）：标准 diffusers 格式的图像生成/编辑小模型。

- **[fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3)** — fishaudio | 👍 776 | ⬇️ 11,795
  多说话人 TTS，“戏剧感”语音合成方向的新玩家，音频赛道稀缺的高赞模型。

- **[openbmb/MiniCPM-V-4.7-35B-A3B](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B)**（👍 1,069 | ⬇️ 76,410）与 **[MiniCPM-V-4.7-1B](https://huggingface.co/openbmb/MiniCPM-V-4.7-1B)**（👍 394 | ⬇️ 33,388）
  面壁最新视觉语言模型，35B-A3B MoE 与 1B 端侧版双发，覆盖云端到手机。

- **[Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)** — Qwen | 👍 1,001 | ⬇️ 25,033
  Qwen-Image 2.1 官方 Turbo 加速版，图像生成/编辑的低成本选择。

- **[OpenMOSS-Team/MOSS-Image-Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base)**（👍 371 | ⬇️ 2,774）/ **[SFT 版](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT)**（👍 414 | ⬇️ 3,336）
  复旦 MOSS 团队开源文生图底座 + SFT 版本，刚发布即引发社区打包（见 Comfy-Org 版本 67 万下载）。

- **[meta-models/Muse-Spark-Open-816B-A42B](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)**（👍 581 | ⬇️ 2,109）及 [NVFP4 量化版](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B-NVFP4)（👍 185 | ⬇️ 3,672）
  Meta 系 816B 超大开源多模态 MoE，体量惊人，NVFP4 版本让消费级硬件“可望可及”。

### 🔧 专用模型（OCR / 分割 / 嵌入 / 时序）

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu | 👍 4,825 | ⬇️ 1,799,825
  百度 OCR 通用模型，4.8K 赞 + 180 万下载，文档智能赛道的爆款。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)** — facebook | 👍 4,706 | ⬇️ 1,902,371
  SAM 第三代分割模型（含视频），4.7K 赞，标注/感知工作流核心组件。

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — google | 👍 2,733 | ⬇️ 167,750
  本周点赞第二高：Gemma 系嵌入模型二代，RAG/检索场景的轻量标配。

- **[datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr)** — datalab-to | 👍 248 | ⬇️ 2,433
  ONNX + CPU 友好的 OCR 模型，与 Unlimited-OCR 呼应，OCR 赛道明显升温。

- **[mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M)** — mistralai | 👍 197 | ⬇️ 2,601
  Mistral 209M 时序预测基础模型，罕见的新任务方向，标志 FM 范式向时序扩展。

### 📦 微调与量化（社区 / GGUF / FP4）

- **[abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized)** — abenzerps | 👍 4,640 | ⬇️ 2,739,572
  本周社区第一爆款：Qwen-Image 2.1 无审查 GGUF 量化版，下载量超官方 Turbo 版 100 倍。

- **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)** — jialinyyzz | 👍 1,992 | ⬇️ 109,937
  基于 Gemma4 的“去 AI 味”文风改写模型，个人开发者作品冲进周榜前十，需求痛点明确。

- **[nvidia/Qwen3.8-Flash-Next-FP4-Local](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-FP4-Local)** — nvidia | 👍 240 | ⬇️ 6,047
  NVIDIA 官方 FP4 量化 + Model Optimizer 打包，本地部署导向。

- **[nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)** — nvidia | 👍 171 | ⬇️ 9,322
  Nemotron 3.5 视觉 MoE 的 NVFP4 版，NVIDIA 持续押注 4-bit 生态。

- **[LiquidAI/LFM2.5-24B-A2B-GGUF](https://huggingface.co/LiquidAI/LiquidAI.5-24B-A2B-GGUF)**（[正确链接](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B-GGUF)）— LiquidAI | 👍 214 | ⬇️ 120,509
  LFM2.5 的 GGUF 版下载量是原版 8 倍，llama.cpp 用户群庞大。

- **[Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image)** — Comfy-Org | 👍 239 | ⬇️ 673,110
  MOSS-Image 的 ComfyUI 打包版，上架即 67 万下载，Comfy 官方渠道的分发能力极强。

---

## 📊 生态信号

**模型家族**：Qwen3.8 无疑是当前最强开源家族——旗舰 27B、Flash-Next、FP4 量化、Image 2.1 全线开花，且社区衍生（Uncensored 量化 274 万下载）远超官方小版本，说明其已被当作“基座标准”。DeepSeek V4.1、MOSS-Image、MiniCPM-V 4.7 均为发布首周上榜，中国团队发布节奏密集。

**开源 vs 闭源**：榜单被开源权重模型完全主导，且大厂（Google、Meta 系、百度、腾讯、NVIDIA）全部亲自下场发权重，开源已是大厂标配策略。816B、501B 级超大 MoE 开源成为新竞争维度。

**量化与微调**：两条清晰主线——① ComfyUI + GGUF 单文件生态爆发（flux-3、Qwen-Image、MOSS-Image 均有 comfy 版本且下载量反超原版）；② NVIDIA 主推 NVFP4 4-bit 格式，覆盖 Qwen、Nemotron、Muse-Spark。MoE + 低激活参数（A2B/A3B）成为端侧部署主流范式。

---

## 💎 值得探索

1. **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — 性价比与生态的黄金交点：6.3K 赞、249 万下载意味着工具链、微调教程、量化版本会快速齐备，适合作为新项目的默认底座。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 本周生成类口碑之王，文/图/视频多模态输入通吃，200 万下载背后是大量真实工作流验证，视频创作者值得第一时间上手。

3. **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — 检索/RAG 基础设施的高性价比升级选项，2.7K 周赞在嵌入类中极为罕见，若你在做搜索或 Agent 记忆系统，应立即跑分对比。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*