# Hugging Face 热门模型日报 2026-10-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-14 04:02 UTC

---

# 🤗 Hugging Face 热门模型日报
**2026-10-14**

---

## 📰 今日速览

本周 Hugging Face 迎来多项重磅发布：**Qwen3.8-27B** 以 1.7 万点赞、711 万下载统治榜单，成为新一代开源旗舰基座。视频生成领域 **LTX-2.5**（点赞 7,661）热度爆发，图像生成方面 **Qwen-Image-2.1** 系列及大量社区量化版密集上榜，显示 text-to-image 生态空前活跃。此外，**baidu/Unlimited-OCR**、**facebook/sam3** 等垂直任务模型下载量均破百万，专用模型商业化落地信号明显。去审查（Uncensored）与极限量化（2-bit、GSQ、NVFP4）成为社区微调的两大关键词。

---

## 🔥 热门模型

### 🧠 语言模型

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 👍 17,649 | ⬇️ 7,119,569
  本周绝对霸主，多模态对话旗舰，下载与点赞双榜第一，社区微调生态围绕其展开。

- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)** | Aleph-Alpha | 👍 928 | ⬇️ 15,335
  欧洲厂商推出的推理型 MoE 模型，主打 vLLM 部署友好，差异化竞争开源市场。

- **[LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B)** | LiquidAI | 👍 189 | ⬇️ 2,565
  A2B 稀疏激活 MoE 架构，24B 参数仅激活 2B，面向边缘端高效推理。

- **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)** | Venastine-Research | 👍 710 | ⬇️ 58,000
  新兴 29B-A4B MoE 文本模型，原生提供 GGUF，本地部署社区关注度高。

### 🎨 多模态与生成

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 👍 7,661 | ⬇️ 1,724,548
  本周点赞最高的视频生成模型，支持文/图/视频到视频全任务，下载破 172 万。

- **[Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)** | Qwen | 👍 713 | ⬇️ 9,665
  Qwen-Image 2.1 的加速版，图像生成+编辑一体，与完整版 [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)（👍 3,283 | ⬇️ 147,995）共同构成本周生图主力。

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** / **[clef-flash](https://huggingface.co/Cloudflare/clef-flash)** | Cloudflare | 👍 2,145 / 807 | ⬇️ 17,173 / 24,809
  Cloudflare 进军开源 VLM 的首发之作，基于 Qwen3.5 架构，flash 版主打低延迟边缘推理。

- **[LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B)** | LiquidAI | 👍 382 | ⬇️ 13,190
  小型视觉语言模型，端侧多模态的新选项。

- **[pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA)** | pablodawson | 👍 419 | ⬇️ 15,540
  首尾帧到视频（FLF2V）LoRA，视频创作工作流热门插件。

### 🔧 专用模型

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 👍 4,617 | ⬇️ 1,175,446
  无限制分辨率 OCR，下载破百万，文档处理刚需，本周专用模型最大黑马。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)** | facebook | 👍 4,257 | ⬇️ 2,037,775
  Meta 分割模型第三代，支持视频掩码生成，CV 基础设施级工具。

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** | google | 👍 2,116 | ⬇️ 124,930
  Google 最新嵌入模型，本周发布即登顶趋势，RAG/检索场景标配候选。

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** | convaiinnovations | 👍 5,575 | ⬇️ 46,160
  “校准决策”文本分类模型（system-one 系），对话安全与判断类任务新方案。

- **[autotrust/JEV-35B](https://huggingface.co/autotrust/JEV-35B)**（含 [NVFP4 版](https://huggingface.co/autotrust/JEV-35B-NVFP4)）| autotrust | 👍 561 / 301 | ⬇️ 17,426 / 20,494
  基于 Qwen3.5-MoE 的分类专用模型，提供 NVFP4 量化，自动驾驶/安全评估场景。

- **[Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)** | Cactus-Compute | 👍 384 | ⬇️ 21,005
  端侧语音识别模型，主打 on-device 部署。

- **[canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning)** | canberkkkkkk | 👍 403 | ⬇️ 22,641
  土耳其语 TTS 模型，小语种语音合成代表。

- **[speridlabs/iris-3b](https://huggingface.co/speridlabs/iris-3b)** | speridlabs | 👍 234 | ⬇️ 889
  像素空间扩散文生图小模型，学术向新架构探索。

### 📦 微调与量化

- **[abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized)** | abenzerps | 👍 4,215 | ⬇️ 2,247,929
  去审查版 Qwen-Image 2.1 GGUF，下载 224 万，去审查需求之强可见一斑。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** | DavidAU | 👍 1,744 | ⬇️ 1,940,062
  典型 DavidAU 风格“融合魔法”微调，Heretic 去审查 + MTP，下载近 200 万。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** | ISTA-DASLab | 👍 855 | ⬇️ 4,675,423
  学术量化团队用 GSQ+RCO 混合精度压缩 Qwen3.8，下载 467 万，本周量化之星。

- **[AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF)** | AtomicChat | 👍 412 | ⬇️ 208,575
  Turbo 版的去审查 GGUF，ComfyUI 生态常用。

- **[unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF)** | unsloth | 👍 302 | ⬇️ 81,504
  EmbeddingGemma-2 的 GGUF/多模态嵌入版，紧跟官方发布，unsloth 响应速度示范。

- **[nerkyor/Qwen3.8-27B-Coder390-...-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2)** | nerkyor | 👍 310 | ⬇️ 83,887
  多源蒸馏 + SFT/RLOO 的高效思考微调，“名字即配方”的社区风格代表。

- **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)** | jialinyyzz | 👍 1,535 | ⬇️ 54,039
  基于 Gemma4 统一架构的“AI 文本人性化”微调，去除机器味，社区新热点方向。

- **[ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)** | ConwayResearch | 👍 428 | ⬇️ 269,829
  2-bit 极限量化 + 工具调用，面向低端硬件的 agent 部署。

- **[openbmb/MiniCPM-V-4.7-35B-A3B](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B)** / **[-1B](https://huggingface.co/openbmb/MiniCPM-V-4.7-1B)** | openbmb | 👍 477 / 289 | ⬇️ 630 / 263
  端侧 VLM 新版本，35B-A3B 与 1B 双规格发布，下载尚低但趋势上榜。

---

## 📊 生态信号

**Qwen 家族全面统治**：从 Qwen3.8-27B 基座到 Qwen-Image-2.1 生成、再到 JEV-35B 和 Cloudflare clef 均基于 Qwen 架构，Qwen 已成为事实上的开源基座标准。**开源权重势头强劲**：Cloudflare、baidu、facebook、google 等大厂密集开放权重，闭源壁垒进一步松动，开源与闭源的差距在多模态任务上持续缩小。**量化与去审查是社区主旋律**：GSQ/RCO 混合精度、2-bit、NVFP4 等极限量化百花齐放；Uncensored 变体下载量普遍数倍于原版，反映本地部署用户对内容策略的强烈偏好。**视频生成（LTX-2.5、MiniMax-H3 LoRA）与端侧模型（MiniCPM-V、LFM、whistle）** 是本周两条清晰的增长曲线。

---

## 💎 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周生态中心，无论直接使用还是作为微调基座，都是当前 27B 级别的事实标准，配套微调/量化资源最丰富。

2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 破百万下载的 OCR 专用模型，长文档/高分辨率场景刚需，企业文档管线集成成本低，实用价值极高。

3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 本周点赞王，支持 image-to-video、text-to-video、video-to-video 全模式，开源视频生成领域的最新标杆，值得创作者与研究者第一时间上手。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*