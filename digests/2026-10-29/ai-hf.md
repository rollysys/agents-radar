# Hugging Face 热门模型日报 2026-10-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-29 04:53 UTC

---

# 📰 Hugging Face 热门模型日报（2026-10-29）

## 一、今日速览

本周 Hugging Face 生态呈现“**多模态爆发 + 中文系新模型扎堆**”的格局。**Qwen3.8-27B** 以 18,631 点赞、751 万下载断层领跑，成为当之无愧的生态中心；视频生成领域 **LTX-2.5** 单周狂揽 223 万下载，证实 image-to-video 已进入实用普及期。**DeepSeek-V4.1-Flash-1017** 发布即引爆社区，量化版、去审查版（abliterated/uncensored）迅速跟进，衍生生态最活跃。此外，OCR（百度、MiniCPM）与语音（fishaudio、NVIDIA）等专用模型多点开花，垂直赛道竞争加剧。

---

## 二、热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 👍 | 📥 | 说明 |
|---|---|---|---|---|
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,631 | 7,515,620 | 本周绝对王者，多模态对话旗舰，下载与点赞双榜第一 |
| [Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 734 | 7,412 | 中文系新秀，33B Llama 架构通用大模型 |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 1,203 | 14,047 | 新架构对话模型，社区反响热烈，unsloth 已跟进量化 |
| [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 871 | 8,222 | 端侧 4B 小钢炮，GGUF 版下载 14.7 万，本地部署需求旺盛 |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 409 | 8,892 | Liquid 架构轻量模型，边缘部署路线代表 |
| [InternScience/Sage-A1.5](https://huggingface.co/InternScience/Sage-A1.5) | InternScience | 367 | 8,218 | 基于 qwen3_5_moe 的 MoE 多模态模型 |
| [nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB) | nvidia | 234 | 51,721 | NVIDIA 4GB 显存即可运行的 E4B 模型，端侧友好 |

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到X）

| 模型 | 作者 | 👍 | 📥 | 说明 |
|---|---|---|---|---|
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 9,749 | 2,234,788 | 点赞榜第二、下载近 224 万，视频生成全面爆发 |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,367 | 1,891,392 | Meta 分割系列第三代，含视频分割（sam3_video） |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,271 | 2,182,980 | 无审查文生图量化版，需求极其旺盛 |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein) | black-forest-labs | 1,972 | 798,943 | FLUX 系列轻量图像编辑版，深度绑定 ComfyUI |
| [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS-Team | 818 | 14,282 | 清华系开源文生图模型，Apache-2.0 协议 |
| [Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy-Org | 534 | 3,095,436 | MOSS-Image 官方 ComfyUI 适配版，**本周下载量第一** |
| [MiniMaxAI/MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) | MiniMaxAI | 466 | 13,247 | MiniMax 视觉理解轻量版 |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 1,094 | 26,740 | 多角色多说话人 TTS，配音/播客场景热门 |
| [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 342 | 8,357 | 百度无限长度 OCR，文档解析利器 |
| [LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B) | LiquidAI | 160 | 714 | any-to-any 全模态小模型 |

### 🔧 专用模型（语音 / 翻译 / 生物 / OCR）

| 模型 | 作者 | 👍 | 📥 | 说明 |
|---|---|---|---|---|
| [tencent/Hy-SimulMT-30B-A3B-FP8](https://huggingface.co/tencent/Hy-SimulMT-30B-A3B-FP8) | tencent | 403 | 165 | 同步机器翻译专用 MoE 模型，FP8 开箱即用 |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 227 | 338 | 语音转写专用，NeMo 生态最新成员 |
| [HuggingFaceBio/Carbon-X](https://huggingface.co/HuggingFaceBio/Carbon-X) | HuggingFaceBio | 258 | 2,305 | DNA/基因组学生物大模型 |
| [openbmb/MiniCPM-OCR-1.0](https://huggingface.co/openbmb/MiniCPM-OCR-1.0) | openbmb | 284 | 791 | 面壁智能端侧文档解析模型 |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 241 | 6,944 | Three.js 3D 代码生成专用微调 |

### 📦 微调与量化（社区微调 / GGUF / 压缩）

| 模型 | 作者 | 👍 | 📥 | 说明 |
|---|---|---|---|---|
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) | ISTA-DASLab | 449 | 1,377,570 | 学术机构 GSQ+RCO 混合精度压缩，下载 137 万+ |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,207 | 1,725,108 | 著名“缝合大师”Heretic 系无审查融合模型，172 万下载 |
| [unsloth/flint-GGUF](https://huggingface.co/unsloth/flint-GGUF) | unsloth | 327 | 178,000 | flint 快速量化跟进，unsloth 敏捷度依旧 |
| [orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF) | orcarouter | 316 | 27,056 | DeepSeek 新旗舰去审查 llama.cpp 版 |
| [dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8) | dealignai | 463 | 9,150 | FP8 无审查版，延续 dealign 系列路线 |
| [XHToken/Spark-X2.6-4B-GGUF](https://huggingface.co/XHToken/Spark-X2.6-4B-GGUF) | XHToken | 232 | 147,273 | 官方 GGUF，端侧生态一步到位 |
| [unsloth/NVIDIA-Nemotron-3.5-Bolt-E4B-GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3.5-Bolt-E4B-GGUF) | unsloth | 141 | 71,929 | Bolt-E4B 的 GGUF 补全本地部署链路 |

---

## 三、生态信号

**家族格局**：Qwen 系（Qwen3.8、Qwen-Image 2.1、qwen3_5 底座的 Sage/Carbon-X/3D-Coder）几乎渗透榜单每个角落，是事实上的开源底座标准；DeepSeek V4.1-Flash 发布即形成“官方 + 学术量化 + 社区无审查”三线衍生生态。

**生成赛道升温**：下载量前四名中三个是生成模型（MOSS-Image、LTX-2.5、Qwen-Image Uncensored），且 ComfyOrg/diffusion-single-file 格式成为扩散模型的标配发布渠道，说明**工作流工具（ComfyUI）已成生成模型的分发主入口**。

**开源权重持续强势**：Meta（sam3）、NVIDIA、腾讯、百度等大厂全部开放权重，闭源厂商在热门榜已无存在感。

**量化与微调动向**：unsloth 保持“新模型 24 小时内出 GGUF”的节奏；ISTA-DASLab 的 GSQ-RCO 学术压缩方案（137 万下载）显示**研究级量化技术正走向实用主流**；无审查（uncensored/abliterated）需求稳定且下载量巨大，是社区不可忽视的暗流。

---

## 四、值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周生态中心，性能与社区热度双高，无论直接使用还是作为微调底座都是首选。
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — image-to-video / video-to-video 全能力覆盖、下载 224 万，视频生成落地的当前最佳起点。
3. **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)** — GSQ+RCO 混合精度压缩的标杆案例，对研究高效量化或极限本地部署 DeepSeek 旗舰的用户极具价值。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*