# Hugging Face 热门模型日报 2026-10-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-21 03:47 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-10-21**

---

## 📌 今日速览

本周 Qwen 家族全面霸榜，[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) 以 18,073 点赞、758 万下载领跑全站，配套的 Flash-Next 版本也表现强劲。开源图像生成赛道迎来 "MOSS-Image 生态爆发”——OpenMOSS 官方 Base/SFT 模型带动 ComfyUI 打包版、DMD 蒸馏版和社区微调版集体上榜。视频生成方面 [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) 下载量突破 200 万，成为本周最受欢迎的生成模型之一。此外，OCR/视觉理解专用模型（百度 Unlimited-OCR、SAM3）持续走热，端侧小模型（209M 的 Timestral）也占据一席之地。

---

## 🔥 热门模型

### 🧠 语言模型

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 👍 18,073 | ⬇️ 7,586,857
  本周绝对王者，多模态对话旗舰，下载量全站第一，是当前开源社区的事实标准基座。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 👍 6,364 | ⬇️ 2,530,599
  Qwen3.8 系列的轻量高速版本，性能与推理成本平衡出色，生产落地首选。

- **[LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B)** | LiquidAI | 👍 524 | ⬇️ 15,410
  MoE 架构（24B 总参/A2B 激活），Liquid 系列新旗舰，端侧高效推理路线代表。

- **[tencent/Hy-Memory-30B-A3B](https://huggingface.co/tencent/Hy-Memory-30B-A3B)** | tencent | 👍 253 | ⬇️ 2,145
  腾讯新开源的 30B-A3B MoE 对话模型，主打长记忆能力。

- **[reflection/Beam-1.0-501B-A23B](https://huggingface.co/reflection/Beam-1.0-501B-A23B)** | reflection | 👍 187 | ⬇️ 2,930
  501B-A23B 超大 MoE 推理/代码模型，Reflection 团队新作，走深度推理路线。

- **[nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16)** | nvidia | 👍 145 | ⬇️ 2,480
  NVIDIA 实验室 4B 小模型，面向端侧与研究实验。

### 🎨 多模态与生成

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 👍 8,635 | ⬇️ 2,039,447
  本周最热生成模型，支持图生视频/文生视频/视频编辑全任务，点赞与下载双高。

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)** | deepseek-ai | 👍 1,984 | ⬇️ 27,737
  DeepSeek V4.1 Flash 多模态迭代版，发布即登顶趋势，社区期待值极高。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)** | black-forest-labs | 👍 1,102 | ⬇️ 439,528
  FLUX 3 小尺寸图像编辑模型的 ComfyUI 单文件版，生态工具链加持下下载暴涨。

- **[black-forest-labs/flux-3-image-klein](https://huggingface.co/black-forest-labs/flux-3-image-klein)** | black-forest-labs | 👍 570 | ⬇️ 78,897
  同一模型的 diffusers 官方版，体现 FLUX 双格式发布策略。

- **[fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3)** | fishaudio | 👍 841 | ⬇️ 13,495
  多说话人情感 TTS 新作，语音表演（drama）方向开源标杆。

- **[meta-models/Muse-Spark-Open-816B-A42B](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)** | meta-models | 👍 612 | ⬇️ 2,592
  816B-A42B 巨型开源多模态 MoE，Meta 系“开放重拳”，象征意义大于实用下载量。

- **[OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT)** / **[MOSS-Image-Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base)** | OpenMOSS-Team | 👍 504 / 439 | ⬇️ 4,547 / 3,558
  本周新图像生成开源基座，SFT 版即开即用，已快速形成社区微调生态。

- **[Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen3.8-27B)（[正确链接](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)）** | Qwen | 👍 1,015 | ⬇️ 27,652
  Qwen 图像生成加速版，少步数高质量出图。

### 🔧 专用模型

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 👍 4,844 | ⬇️ 1,981,704
  百度 OCR 神器，近 200 万下载，“无限”分辨率文档识别刚需强烈。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)** | facebook | 👍 4,774 | ⬇️ 1,902,047
  SAM 系列第三代分割模型，新增视频能力，CV 工具链核心组件。

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** | google | 👍 2,773 | ⬇️ 172,474
  嵌入模型更新，RAG/检索场景标配，下载量稳步攀升。

- **[datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr)** | datalab-to | 👍 299 | ⬇️ 3,111
  CPU/ONNX 端侧 OCR，轻量本地文档处理。

- **[mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M)** | mistralai | 👍 237 | ⬇️ 4,008
  Mistral 杀入时间序列预测基础模型赛道，仅有 209M，开辟新方向。

### 📦 微调与量化

- **[abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized)** | abenzerps | 👍 4,720 | ⬇️ 2,788,283
  本周下载冠军微调：去审查 + GGUF 量化 + ComfyUI 支持，社区“刚需三件套”齐活。

- **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)** | jialinyyzz | 👍 2,029 | ⬇️ 115,341
  基于 Gemma4 的“去 AI 味”文风改写模型，直击 AI 内容检测痛点。

- **[nvidia/Qwen3.8-Flash-Next-FP4-Local](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-FP4-Local)** | nvidia | 👍 269 | ⬇️ 7,345
  NVIDIA ModelOpt 官方 FP4 量化，端侧本地部署方案。

- **[nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)** | nvidia | 👍 189 | ⬇️ 11,459
  120B-A12B 视觉 MoE 的 NVFP4 版，超大规模模型的极致压缩示范。

- **[meta-models/Muse-Spark-Open-816B-A42B-NVFP4](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B-NVFP4)** | meta-models | 👍 195 | ⬇️ 5,553
  816B 模型的 NVFP4 量化版，让“巨兽”可在单机运行。

- **[Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image)** | Comfy-Org | 👍 300 | ⬇️ 924,574
  MOSS-Image 官方 ComfyUI 打包，下载近百万，工具链即流量。

- **[lodestones/MOSS-Image-SFT-8-steps-dmd](https://huggingface.co/lodestones/MOSS-Image-SFT-8-steps-dmd)** | lodestones | 👍 180 | ⬇️ 54,814
  DMD 蒸馏 8 步出图版，社区快速跟进优化出图速度。

- **[lodestones/Kromoss](https://huggingface.co/lodestones/Kromoss)** | lodestones | 👍 177 | ⬇️ 5,365
  MOSS-Image 生态的社区风格化微调。

- **[dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8)** | dealignai | 👍 194 | ⬇️ 2,803
  DeepSeek 新模型的 FP8 去审查版，发布当天即出，社区速度惊人。

---

## 📊 生态信号

**Qwen 家族势头无人能挡**：主模型 + Flash + 图像 + 量化形成完整产品矩阵，霸占下载与点赞双榜。**MOSS-Image 是本周最大黑马**——官方开源一周内即出现 ComfyUI 打包、DMD 蒸馏、风格化微调的完整生态链，Apache-2.0 许可证是关键推手。开源权重仍是绝对主流，闭源厂商（Meta、百度、腾讯、NVIDIA）持续以“开放重拳”投放大型 MoE 模型抢占开发者心智。量化活动高度活跃：NVFP4/FP4/FP8/GGUF 多格式并进，“去审查 + 量化 + ComfyUI”组合成为社区下载密码（Uncensored-Quantized 版下载 278 万即为例证）。OCR、分割、时间序列等专用模型崛起，显示生态正从“通用大模型独大”走向多样化。

---

## 💎 值得探索

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 视频生成全任务覆盖（图/文/视频输入），200 万下载验证的工业级质量，本周最值得上手体验的生成模型。

2. **[OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT)** — 全新 Apache-2.0 图像生成基座，生态爆发初期，适合早期跟进微调或研究其架构。

3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 近 200 万下载的文档识别利器，配合 [sam3](https://huggingface.co/facebook/sam3) 可搭建完整文档/视觉理解流水线，实用价值极高。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*