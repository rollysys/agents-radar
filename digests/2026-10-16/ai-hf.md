# Hugging Face 热门模型日报 2026-10-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-16 03:40 UTC

---

# 📊 Hugging Face 热门模型日报
**日期：2026-10-16**

---

## 一、今日速览

今日榜单由 **Qwen3.8 系列强势领跑**，Qwen3.8-27B（1.78 万赞、736 万下载）与 Qwen3.8-Flash-Next（6,256 赞、229 万下载）成为绝对焦点，社区微调与量化版本随之井喷。**Lightricks LTX-2.5** 以 7,970 赞、187 万下载统治视频生成赛道，而 Qwen-Image-2.1 的多个 Uncensored/GGUF 衍生版显示社区对“无审查图像模型”需求旺盛。**DeepSeek-V4.1-Flash** 和 facebook/sam3 延续上周热度，LiquidAI 则以 MoE 架构新品持续发力小端侧市场。

---

## 二、热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  Qwen | 👍 17,795 | ⬇️ 7,363,968
  本周最热旗舰多模态语言模型，性能与生态兼容性俱佳，成为社区微调的新基座。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**
  Qwen | 👍 6,256 | ⬇️ 2,290,500
  轻量高速版本，qwen4_exp 新架构预览，下载量惊人，适合生产部署尝鲜。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)**
  DeepSeek | 👍 4,539 | ⬇️ 1,238,583
  V4.1 Flash 开源版本，性价比推理旗舰，与 Qwen 正面竞争。

- **[LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B)**（及 [GGUF 版](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B-GGUF)）
  LiquidAI | 👍 392 / 169 | ⬇️ 6,286 / 45,676
  24B 总参数、2B 激活的 MoE 模型，端侧部署新选择，GGUF 版下载反超说明本地运行需求大。

- **[ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)**
  ConwayResearch | 👍 499 | ⬇️ 344,177
  主打工具调用（tool-calling）的 2-bit 量化模型，Function Calling 细分赛道黑马。

- **[meta-models/Muse-Spark-Open-816B-A42B](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)**
  meta-models | 👍 282 | ⬇️ 402
  816B 总参、42B 激活的超 giant MoE 开源模型，象征意义大于实用性，下载量尚低。

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)**
  convaiinnovations | 👍 5,632 | ⬇️ 48,894
  "calibrated-decisions" 决策校准文本分类模型，点赞/下载比异常突出，社区讨论热度高。

### 🎨 多模态与生成（图像 / 视频 / 音频）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  Lightricks | 👍 7,970 | ⬇️ 1,866,657
  本周视频生成之王，支持文生/图生/视频生视频全链路，187 万下载碾压同类。

- **[openbmb/MiniCPM-V-4.7-35B-A3B](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B)** 与 **[MiniCPM-V-4.7-1B](https://huggingface.co/openbmb/MiniCPM-V-4.7-1B)**
  openbmb | 👍 799 / 362 | ⬇️ 9,278 / 5,274
  新一代高效多模态视觉模型，大杯+小杯双规格覆盖服务器与端侧。

- **[Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)**
  Qwen | 👍 887 | ⬇️ 15,315
  官方 Turbo 版图像生成/编辑模型，速度快、可编辑性强，是衍生版井喷的源头。

- **[black-forest-labs/flux-3-image-klein](https://huggingface.co/black-forest-labs/flux-3-image-klein)**（及 [comfy 版](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)）
  BFL | 👍 263 / 243 | ⬇️ 3,241 / 39
  FLUX-3 小尺寸版，ComfyUI 专用格式同步发布，图像编辑工作流新选项。

- **[speridlabs/iris-3b](https://huggingface.co/speridlabs/iris-3b)**
  speridlabs | 👍 287 | ⬇️ 1,257
  像素空间（pixel-space）扩散小模型，架构路线独特，值得关注。

- **[fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3)**
  fishaudio | 👍 486 | ⬇️ 4,048
  多说话人 TTS，主打戏剧化语音表现力，配音/播客场景利器。

- **[pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA)**
  pablodawson | 👍 475 | ⬇️ 18,202
  首尾帧生成视频（FLF2V）LoRA，为 MiniMax-H3 视频能力扩展社区插件。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)**
  facebook | 👍 4,443 | ⬇️ 2,034,602
  Meta 分割大模型第三代，支持视频分割（sam3_video），203 万下载的视觉基建级模型。

- **[Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)**
  Cactus-Compute | 👍 421 | ⬇️ 38,794
  端侧语音识别（ASR）模型，主打本地部署。

### 🔧 专用模型（嵌入 / OCR / 分类）

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)**
  google | 👍 2,415 | ⬇️ 144,280
  本周点赞榜首之一，Gemma 系嵌入模型迭代，RAG/检索场景刚需，14 万下载。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  baidu | 👍 4,707 | ⬇️ 1,163,009
  无限制分辨率/长度 OCR，116 万下载，文档理解刚需，表现强势。

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)**
  Cloudflare | 👍 2,181 | ⬇️ 19,314
  基于 Qwen3.5 架构的边缘多模态模型，云厂商下场做开源小模型的代表。

- **[LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B)**
  LiquidAI | 👍 424 | ⬇️ 16,731
  3B 视觉语言小模型，端侧 VLM。

- **[vllm-sr/d3](https://huggingface.co/vllm-sr/d3)**
  vllm-sr | 👍 199 | ⬇️ 2,747
  零样本分类嵌入模型，推理加速生态配套。

- **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)**
  jialinyyzz | 👍 1,751 | ⬇️ 75,253
  "AI 文本人性化”模型，让生成文本更自然，反映社区对反 AI 检测/AIGC 痕迹淡化的需求。

### 📦 微调与量化（社区 / GGUF / 去审查）

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  DavidAU | 👍 1,802 | ⬇️ 1,856,283
  经典"厨房水槽"式多配方融合量化版，186 万下载证明 Qwen3.8 微调生态的恐怖流量。

- **[abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized)**
  abenzerps | 👍 4,393 | ⬇️ 2,415,278
  去审查版图像模型，241 万下载为本榜最高，ComfyUI GGUF 格式直击工作流用户。

- **[dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8)**
  dealignai | 👍 662 | ⬇️ 78,283
  DeepSeek V4.1 Flash 去审查 FP8 量化版。

- **[AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF)**
  AtomicChat | 👍 498 | ⬇️ 296,253
  又一 Qwen-Image 去审查量化版，与上方同源竞争。

- **[nerkyor/Qwen3.8-27B-Coder390-EfficientThink-...-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2)**
  nerkyor | 👍 368 | ⬇️ 148,660
  多模型蒸馏 + SFT/RLOO 混合训练的“高效思考”微调版，名字即配方表。

---

## 三、生态信号

**Qwen 家族呈碾压态势**：Qwen3.8-27B 与 Flash-Next 双双进入下载榜前列，且衍生微调/量化版（DavidAU、nerkyor 等）贡献了数百万额外下载，形成“官方发布→社区裂变”的飞轮。**去审查（Uncensored）需求爆发**是本周最显著信号——Qwen-Image-2.1 的多个 Uncensored 量化版合计下载超 300 万，社区对生成内容限制的规避已成稳定流量来源。**端侧与高效化并行**：MoE 架构（LFM2.5-24B-A2B、Muse-Spark-816B-A42B）、2-bit 量化、GGUF 格式下载量普遍高于原版，本地部署仍是核心驱动力。开源权重阵营（Qwen、DeepSeek、Meta SAM3）持续挤压闭源 API 空间，而 Cloudflare 等云厂商亲自下场发布开源模型，进一步模糊了“开源社区”与“商业基建”的边界。

---

## 四、值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周事实上的社区标准基座，无论直接使用还是作为微调起点，生态兼容性和工具链支持都是最佳选择。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 视频生成领域本周最强发布，全模态（文/图/视频→视频）支持，适合快速集成到内容生产工作流。

3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 解决了 OCR 长期以来分辨率与文档长度的硬限制，116 万下载验证了实用价值，文档处理管线升级首选。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*