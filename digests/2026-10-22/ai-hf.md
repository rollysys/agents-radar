# Hugging Face 热门模型日报 2026-10-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-22 03:47 UTC

---

# 📰 Hugging Face 热门模型日报（2026-10-22）

---

## 一、今日速览

Qwen3.8-27B 以 18,150 周点赞、770 万下载量绝对领跑本周榜单，成为开源对话模型的标杆。多模态生成赛道异常火爆：Black Forest Labs 的 FLUX.3 klein、OpenMOSS 的 MOSS-Image 系列以及 Lightricks LTX-2.5 视频模型同时上榜，形成“图像+视频”双线爆发。DeepSeek-V4.1-Flash 与 Meta Muse-Spark-Open（816B-A42B）两个巨头开源发布，带动了一批社区量化与去审查微调版本。垂直领域出现亮点：百度 Unlimited-OCR、Facebook SAM3 和 Mistral 时序预测模型 Timestral 显示基础模型正在向专用任务渗透。

---

## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 |
|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,150 | 7,729,432 |
| [LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B) | LiquidAI | 551 | 16,939 |
| [tencent/Hy-Memory-30B-A3B](https://huggingface.co/tencent/Hy-Memory-30B-A3B) | tencent | 275 | 2,682 |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 283 | 0 |
| [reflection/Beam-1.0-501B-A23B](https://huggingface.co/reflection/Beam-1.0-501B-A23B) | reflection | 210 | 3,555 |
| [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 188 | 85 |
| [InternScience/Sage-A1.5](https://huggingface.co/InternScience/Sage-A1.5) | InternScience | 164 | 58 |

- **Qwen3.8-27B**：本周最强开源对话/多模态理解模型，下载量断层第一，社区生态全面铺开。
- **LFM2.5-24B-A2B**：LiquidAI 的 MoE 架构小激活模型，兼顾容量与推理效率。
- **Hy-Memory-30B-A3B**：腾讯的长记忆（Memory）方向 MoE 模型，主打上下文/记忆能力。
- **Beam-1.0-501B-A23B**：reflection 出品的 501B 参数推理+代码 MoE，走“开源大推理”路线。
- **flint / Spark-X2.6 / Sage-A1.5**：新兴小型社区模型，处于早期关注阶段。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 |
|---|---|---|---|
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 8,771 | 2,057,942 |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,848 | 1,906,176 |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 1,199 | 490,447 |
| [fishaudio/drama-3](https://huggingface.co/mistralai/Timestral-209M)¹ | fishaudio | 891 | 15,274 |
| [black-forest-labs/flux-3-image-klein](https://huggingface.co/black-forest-labs/flux-3-image-klein) | black-forest-labs | 604 | 92,604 |
| [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS-Team | 538 | 5,840 |
| [OpenMOSS-Team/MOSS-Image-Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base) | OpenMOSS-Team | 469 | 4,344 |
| [Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy-Org | 339 | 1,290,080 |
| [lodestones/Kromoss](https://huggingface.co/lodestones/Kromoss) | lodestones | 206 | 11,608 |

¹ 实际链接：https://huggingface.co/fishaudio/drama-3

- **LTX-2.5**：视频生成绝对王者，覆盖图生视频/文生视频/视频转视频全任务，下载超 200 万。
- **SAM3**：Meta 分割一切第三代，支持视频掩码生成，已是 CV 工具链基础设施。
- **FLUX.3 klein（Comfy 版）**：BFL 轻量图像编辑模型，ComfyUI 生态适配带来近 50 万下载。
- **MOSS-Image 系列**：OpenMOSS 首个文生图开源模型，Base/SFT 双发布 + Apache-2.0，社区（Comfy-Org、lodestones）跟进极快，衍生的 8-steps DMD 蒸馏版已有 6.8 万下载。
- **drama-3**：Fish Audio 多说话人 TTS，语音生成赛道持续升温。

### 🔧 专用模型（代码、数学、医疗、嵌入、OCR、安全）

| 模型 | 作者 | 点赞 | 下载 |
|---|---|---|---|
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/baidu-Unlimited-OCR)² | baidu | 4,858 | 2,127,860 |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 2,812 | 179,734 |
| [datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr) | datalab-to | 343 | 3,588 |
| [mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M) | mistralai | 264 | 5,488 |
| [orcarouter/OrcaCyber-Nano-1.0](https://huggingface.co/orcarouter/OrcaCyber-Nano-1.0) | orcarouter | 173 | 19,697 |

² 实际链接：https://huggingface.co/baidu/Unlimited-OCR

- **Unlimited-OCR**：百度“无限制”OCR 模型，210 万下载说明文档处理是刚需场景。
- **embeddinggemma-2**：Google 嵌入模型迭代，检索/RAG 生态的核心组件。
- **indra-ocr**：ONNX + CPU 友好的轻量 OCR，面向本地部署。
- **Timestral-209M**：Mistral 出人意料地推出时序预测基础模型，开辟“时序基础模型”新方向。
- **OrcaCyber-Nano**：网络安全/逆向工程专用小型 VLM，垂直安全赛道值得关注。

### 📦 微调与量化（社区微调、GGUF、FP4/FP8）

| 模型 | 作者 | 点赞 | 下载 |
|---|---|---|---|
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 4,778 | 2,738,344 |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 2,069 | 120,930 |
| [nvidia/Qwen3.8-Flash-Next-FP4-Local](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-FP4-Local) | nvidia | 294 | 9,340 |
| [meta-models/Muse-Spark-Open-816B-A42B-NVFP4](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B-NVFP4) | meta-models | 204 | 6,507 |
| [nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4) | nvidia | 202 | 12,910 |
| [dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8) | dealignai | 211 | 3,458 |
| [lodestones/MOSS-Image-SFT-8-steps-dmd](https://huggingface.co/lodestones/MOSS-Image-SFT-8-steps-dmd) | lodestones | 194 | 68,289 |

- **Qwen-Image-2.1 Uncensored GGUF**：去审查+量化双buff，274 万下载，ComfyUI GGUF 生态威力巨大。
- **humanizer**：基于 Gemma4 Unified 的“去 AI 味”文本模型，反映真实性与风格化需求上升。
- **官方 FP4/NVFP4 量化潮**：NVIDIA 与 Meta 均直接发布 NVFP4/FP4 版本，官方下场量化已成标配。
- **DeepSeek UNCENSORED-FP8**：新模型发布 24 小时内即出现去审查社区版，速度惊人。

---

## 三、生态信号

**模型家族**：Qwen 家族全面统治——Qwen3.8 本体、Qwen-Image-2.1、Qwen 架构衍生（Sage-A1.5）多点开花；FLUX 与 MOSS-Image 形成 10 月图像生成双雄；DeepSeek V4.1 Flash 延续高热度。**开源 vs 闭源**：Meta（Muse-Spark-Open 816B）、百度、腾讯、Google 均以开放权重入场，开源顶级参数规模已成巨头标配动作，闭源 API 模型在趋势榜上几无踪影。**量化与微调**：NVFP4/FP4 成为大模型（816B、501B、120B）官方发布即带的标准格式，配合 NVIDIA Model Optimizer 工具链；“去审查（Uncensored）”微调继续是社区最活跃方向，图像与文本模型均出现发布即破解的现象；8-step DMD 蒸馏则展示了生成模型推理加速的社区需求。

---

## 四、值得探索

1. **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周事实上的开源标杆，多模态对话 + 770 万下载验证的生态成熟度，适合作为新项目默认底座。
2. **[OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT)** + **[8-steps DMD 蒸馏版](https://huggingface.co/lodestones/MOSS-Image-SFT-8-steps-dmd)** — Apache-2.0 全开源 + 8 步极速出图，是本地文生图部署的最佳组合。
3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 覆盖图/文/视频全输入的视频生成模型，200 万下载的开源视频生成新基线，值得视频方向研究者第一时间上手。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*