# Hugging Face 热门模型日报 2026-10-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-18 03:37 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-10-18**

---

## 📰 今日速览

今日榜单被 **Qwen3.8 系列**全面霸榜——旗舰 27B 单周 17,916 赞、779 万下载，Flash-Next 版本同步爆火。**DeepSeek-V4.1-Flash** 双版本上榜，显示 Flash 轻量化路线已成主流策略。生成侧 **LTX-2.5** 视频模型（199 万下载）与 **Qwen-Image-2.1** 生态（含社区 Uncensored 量化版 257 万下载）表现强劲。值得注意的是 **facebook/sam3** 分割模型与 **baidu/Unlimited-OCR** 等感知类模型下载量突破百万，视觉理解需求正在爆发。

---

## 🔥 热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 👍 | 📥 | 一句话点评 |
|---|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,916 | 7,795,543 | 本周绝对霸主，多模态旗舰，开源生态核心底座 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,310 | 2,457,201 | 高性价比轻量旗舰，与 27B 组成双打组合 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,605 | 1,306,744 | DeepSeek V4.1 轻量版，多模态 + 文本生成通吃 |
| [deepseek-ai/DeepSeek-V4.1-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 1,016 | 0 | 昨日刚发布即上榜，下载量为零说明是纯新鲜度驱动 |
| [LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B) | LiquidAI | 448 | 11,926 | MoE 架构（24B 总参 / 2B 激活），端侧部署友好 |

### 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 👍 | 📥 | 一句话点评 |
|---|---|---|---|---|
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 8,241 | 1,993,003 | 本周生成类之王，图/文/视频多入口视频生成 |
| [autotrust/JEV-27B-VL](https://huggingface.co/autotrust/JEV-27B-VL) | autotrust | 6,806 | 1,704,732 | 基于 Qwen3_5 架构的视觉语言黑马，下载惊人 |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 669 | 224,108 | FLUX-3 Klein 的 ComfyUI 单文件版，社区工作流标配 |
| [Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 966 | 20,703 | 图像生成 Turbo 加速版，催生大量社区衍生 |
| [openbmb/MiniCPM-V-4.7-35B-A3B](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B) | openbmb | 908 | 36,252 | 35B 总参 / 3B 激活的高效多模态模型 |
| [black-forest-labs/flux-3-image-klein](https://huggingface.co/black-forest-labs/flux-3-image-klein) | black-forest-labs | 458 | 46,123 | FLUX-3 小杯版，diffusers 标准格式 |
| [pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA) | pablodawson | 501 | 22,625 | MiniMax-H3 首尾帧视频生成 LoRA |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 626 | 8,193 | 多说话人 TTS，面向戏剧化配音场景 |
| [speridlabs/iris-3b](https://huggingface.co/speridlabs/iris-3b) | speridlabs | 309 | 1,383 | 像素空间扩散的小型文生图，架构探索向 |

### 🔧 专用模型（OCR / 分割 / 嵌入 / 分类）

| 模型 | 作者 | 👍 | 📥 | 一句话点评 |
|---|---|---|---|---|
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,766 | 1,476,672 | 无限制分辨率 OCR，百万级下载的生产力刚需 |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,567 | 2,013,498 | SAM3 支持视频分割，计算机视觉基础模型级发布 |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 2,604 | 158,490 | Google 新一代嵌入模型，RAG 检索栈核心组件 |
| [vllm-sr/d3](https://huggingface.co/vllm-sr/d3) | vllm-sr | 232 | 4,263 | 基于 Qwen3_5 的零样本分类器 |
| [datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr) | datalab-to | 174 | 1,053 | ONNX + CPU 友好的轻量 OCR |

### 📦 微调与量化（社区衍生 / GGUF）

| 模型 | 作者 | 👍 | 📥 | 一句话点评 |
|---|---|---|---|---|
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 4,500 | 2,571,722 | 本周最大黑马：去审查 + 量化，下载量超原版百倍 |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 1,901 | 95,870 | 基于 Gemma4 的“去 AI 味”改写模型 |
| [ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 529 | 394,277 | 2-bit 极限量化 + 工具调用，主打低端硬件 |
| [AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF) | AtomicChat | 540 | 362,499 | 与上面呼应，GGUF 去审查版同样大爆 |
| [nerkyor/Qwen3.8-27B-Coder390-…-SFT-RLOO-MTP-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2) | nerkyor | 415 | 228,320 | 多源蒸馏“缝合怪”，名字即配方，社区实验精神代表 |
| [LiquidAI/LFM2.5-24B-A2B-GGUF](https://huggingface.co/LiquidAI/LiquidAI.5-24B-A2B-GGUF) | LiquidAI | 197 | 82,115 | 官方 GGUF，下载远超原版，llama.cpp 生态需求旺盛 |
| [nvidia/Qwen3.8-Flash-Next-FP4-Local](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-FP4-Next-FP4-Local) | nvidia | 181 | 3,110 | NVIDIA 官方 FP4 量化，本地部署优化 |

*注：Muse-Spark-Open-816B-A42B 与 MOSS-Image 系列为新发布，热度尚在爬坡期。*

---

## 📈 生态信号

**Qwen 家族统治力空前**：榜单中 Qwen3.8 原版、Flash、FP4 量化、去审查版、多源蒸馏版全面开花，已形成“官方发布 → 社区量化 → 微调衍生”的完整三级生态。**去审查量化成流量密码**：Qwen-Image-2.1-Uncensored 下载量（257 万）远超官方原版（2 万），社区对无限制版本的刚需清晰可见。**轻量化是共同主线**：Flash、Klein、Turbo、A2B、2-bit 等命名密集出现，MoE 稀疏激活 + 极限量化成为部署标配。**感知类模型崛起**：SAM3、OCR 类下载破百万，说明视觉理解（分割、文档解析）正成为继生成之后的下一个落地热点。开源权重阵营（Qwen、DeepSeek、FLUX、Liquid）持续碾压式增长，闭源模型在本榜几乎无存在感。

---

## 💎 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周现象级发布，近 780 万周下载 + 多模态能力，是当前开源界事实上的能力锚点，任何基准测试都绕不开它。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 支持 image-to-video / text-to-video / video-to-video 全模态入口，199 万下载验证了其易用性，视频创作者工作流的优先试验对象。

3. **[facebook/sam3](https://huggingface.co/facebook/sam3)** — 首个原生支持视频的 SAM 系列分割模型，201 万下载显示其基础模型地位，对标注、编辑、机器人感知等下游应用有直接价值。

---

*数据来源：Hugging Face Hub 周榜（2026-10-18）*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*