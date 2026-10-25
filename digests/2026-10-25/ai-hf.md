# Hugging Face 热门模型日报 2026-10-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-25 03:45 UTC

---

# 📰 Hugging Face 热门模型日报（2026-10-25）

## 一、今日速览

Qwen 系列持续统治榜单：[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) 以 18,353 点赞、785 万下载断层领先，[Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) 紧随其后。视觉生成领域竞争激烈：[LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) 视频模型与 [MOSS-Image](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base) 图像模型双双引爆下载量。[DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) 发布首周即带动一批去审查与量化衍生模型。此外，Meta 开源 [sam3](https://huggingface.co/facebook/sam3) 分割模型、Mistral 推出小众的时间序列基础模型 Timestral，均值得关注。

---

## 二、热门模型

### 🧠 语言模型

- **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 👍 18,353 | ⬇️ 7,851,161
  本周绝对王者，多模态对话旗舰，下载量与点赞双双登顶，社区生态最活跃。

- **[Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 👍 6,466 | ⬇️ 3,035,077
  采用全新 qwen4_exp 架构的轻量旗舰预览版，300 万下载显示其作为生产力首选的地位。

- **[Muse-Spark-Open-816B-A42B](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)** | meta-models | 👍 695 | ⬇️ 6,811
  816B 参数、激活仅 42B 的超大 MoE 开源模型，走“开源超大杯”路线对标闭源旗舰。

- **[RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint)** | RecursiveSI | 👍 782 | ⬇️ 4,795
  新晋开源对话模型，发布即获 unsloth 官方 GGUF 支持，社区热度上升迅速。

- **[Ornith-1.5-122B](https://huggingface.co/ornith-ai/Ornith-1.5-122B)** | ornith-ai | 👍 166 | ⬇️ 30,407
  基于 qwen3_5_moe 架构的 122B 大体量开源模型，下载表现稳健。

- **[KRAFTON/Raon-1-mini-preview](https://huggingface.co/KRAFTON/Raon-1-mini-preview)** | KRAFTON | 👍 174 | ⬇️ 917
  游戏巨头 KRAFTON 进军 LLM 的首款小模型预览版，入场信号意义大于模型本身。

- **[InternScience/Sage-A1.5](https://huggingface.co/InternScience/Sage-A1.5)** | InternScience | 👍 276 | ⬇️ 2,033
  MoE 多模态架构的新玩家，处于早期观察阶段。

### 🎨 多模态与生成

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 👍 9,197 | ⬇️ 2,087,721
  本周生成领域最大爆款，支持图生视频、文生视频、视频转视频全能管线。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)** | facebook | 👍 5,041 | ⬇️ 1,863,670
  Meta 开源第三代分割模型，支持视频分割，186 万下载证明其视觉基础工具属性。

- **[abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/deepseek-ai)** → [链接](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 👍 4,979 | ⬇️ 2,303,585
  去审查 + GGUF 量化版 Qwen 图像模型，230 万下载显示本地图像生成的巨大需求。

- **[Qwen3.8-27B / Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-27B)**（见语言模型分类，均为 image-text-to-text 多模态）

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)** | black-forest-labs | 👍 1,511 | ⬇️ 590,742
  FLUX 3 小版 ComfyUI 专用格式，近 60 万下载，本地图像编辑主力军。

- **[OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT)** / **[Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base)** | OpenMOSS-Team | 👍 701 / 542 | ⬇️ 9,717 / 6,943
  复旦 MOSS 团队进军文生图，Base + SFT 双版本齐发，配套 [Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image) 已达 194 万下载。

- **[fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3)** | fishaudio | 👍 992 | ⬇️ 19,831
  多说话人 TTS 模型，主打对话戏剧化语音表现。

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)** | deepseek-ai | 👍 2,808 | ⬇️ 73,215
  DeepSeek 首个多模态 Flash 版本，发布即成社区改编热点。

- **[black-forest-labs/flux-3-image-klein](https://huggingface.co/black-forest-labs/flux-3-image-klein)** | black-forest-labs | 👍 682 | ⬇️ 112,091
  FLUX 3 小版的 diffusers 官方版本。

### 🔧 专用模型

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** | google | 👍 2,902 | ⬇️ 206,909
  Google 第二代嵌入模型，检索/RAG 基础设施刚需，点赞榜第四。

- **[mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M)** | mistralai | 👍 348 | ⬇️ 8,731
  Mistral 剑走偏锋，推出时间序列预测基础模型，小众赛道布局。

- **[datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr)** | datalab-to | 👍 409 | ⬇️ 4,436
  面向 CPU/ONNX 的 OCR 模型，端侧文档处理实用之选。

- **[orcarouter/OrcaCyber-Nano-1.0](https://huggingface.co/orcarouter/OrcaCyber-Nano-1.0)** | orcarouter | 👍 236 | ⬇️ 27,054
  网络安全专用视觉语言模型，逆向工程场景，垂类差异化明显。

- **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)** | jialinyyzz | 👍 2,139 | ⬇️ 138,556
  基于 Gemma4 的“去 AI 味”文本人性化模型，14 万下载反映真实需求。

### 📦 微调与量化

- **[DavidAU/Qwen3.8-27B-TURBO-...-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** | DavidAU | 👍 2,064 | ⬇️ 1,679,051
  经典"魔改全家桶"式 Qwen 量化融合版，167 万下载证明此类模型流量惊人。

- **[dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8)** | dealignai | 👍 345 | ⬇️ 5,583
  DeepSeek V4.1 的去审查 FP8 版，蹭热点的速度极快。

- **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)** | ISTA-DASLab | 👍 214 | ⬇️ 32,479
  学术团队 GSQ/RCO 混合精度量化研究，量化前沿探索。

- **[unsloth/flint-GGUF](https://huggingface.co/unsloth/flint-GGUF)** | unsloth | 👍 230 | ⬇️ 78,891
  unsloth 一如既往快速跟进新模型的 GGUF 转换。

- **[lodestones/Kromoss](https://huggingface.co/lodestones/Kromoss)** | lodestones | 👍 254 | ⬇️ 21,143
  基于 MOSS-Image 的社区微调，新图像基座的衍生生态已起步。

- **[XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B)** | XHToken | 👍 456 | ⬇️ 2,537
  4B 小体量社区模型，主打本地部署场景。

- **[Comfy-Org/Fibo-2.0](https://huggingface.co/Comfy-Org/Fibo-2.0)** | Comfy-Org | 👍 169 | ⬇️ 111,611
  基于 briaai/Fibo 的 ComfyUI 打包版，商业可授权图像模型生态延伸。

---

## 三、生态信号

**模型家族格局：** Qwen3.8 系列是当前绝对中心——两个官方模型合计超千万下载，且衍生量化/微调（DavidAU 魔改版、Ornith、Sage 等）占据生态长尾，其 MoE 架构（qwen3_5_moe）已成为社区训练的事实标准底座。DeepSeek V4.1-Flash 发布一周内即出现去审查版与学术量化版，衍生速度创纪录。

**开源 vs 闭源：** Meta 开源 sam3、Google 开源 embeddinggemma-2、Mistral 探索时间序列基础模型，大厂在垂类基础设施层持续开源；同时 816B MoE（Muse-Spark）的开放表明“开源超大杯”竞争升级。

**量化与微调活动：** GGUF 生态高度活跃，图像模型量化（Qwen-Image GGUF 230 万下载）标志本地生成从文本扩展到视觉；ComfyUI 已成为视觉模型分发的重要渠道（Comfy-Org 三个打包版下载均超十万）；“Uncensored”类改编持续为下载量主力，反映本地化、可控性需求旺盛。

---

## 四、值得探索

1. **[Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — 采用尚未大规模铺开的 qwen4_exp 实验架构，是观察下一代 Qwen 技术方向的最佳窗口，性能/成本平衡适合直接投入生产。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 本周点赞之王，一站式视频生成（文/图/视频三输入），开源视频生成领域的新标杆，值得与闭源方案对比测试。

3. **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — 检索与 RAG 管线升级的低成本选项，20 万下载验证了实用性，建议在自有评测集上与当前嵌入模型对比。

---
*数据来源：Hugging Face Hub 周榜（2026-10-25）*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*