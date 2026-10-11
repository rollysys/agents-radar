# Hugging Face 热门模型日报 2026-10-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-11 04:43 UTC

---

# Hugging Face 热门模型日报
**日期：2026-10-11**

---

## 📌 今日速览

本周榜单由 **Qwen 生态全面领跑**：Qwen3.8-27B 及其衍生量化/微调版本合计斩获超 1900 万下载，成为事实上的开源基座标准。视频生成领域 **LTX-2.5** 以 7,196 点赞登顶热度榜首，开源视频模型进入实用阶段。同时，**极端量化（2-bit / GSQ-RCO / 三值）** 和 **去审查微调** 持续活跃，社区在本地部署上的创新密度显著提升。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 / 下载 | 说明 |
|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,440 / 6,768,654 | 本周绝对王者，多模态对话旗舰，下载与点赞双榜第一 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,091 / 1,798,393 | 轻量高速版，成为社区量化与微调的首选底座 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,335 / 1,355,278 | DeepSeek 新一代 Flash，高性能开源对话模型，与 Qwen 正面竞争 |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 872 / 10,496 | 欧洲厂商推出的 MoE 推理模型，主打 vLLM 部署 |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 686 / 45,199 | 29B-A4B MoE 架构，激活参数少，本地推理友好 |
| [ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 285 / 59,191 | 主打 2-bit 量化 + 工具调用的小众实用型模型 |

### 🎨 多模态与生成（图像、视频、音频）

| 模型 | 作者 | 点赞 / 下载 | 说明 |
|---|---|---|---|
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 7,196 / 1,720,888 | 全能视频生成（文生/图生/视频编辑），本周热度第一 |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 2,003 / 13,579 | Cloudflare 进军开源多模态模型的标志性发布 |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 743 / 20,670 | clef 的高效版，面向边缘部署场景 |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,891 / 2,096,562 | 去审查图像生成，ComfyUI 生态爆款，下载量惊人 |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,201 / 128,839 | 官方图像生成+编辑基座，社区微调的核心底模 |
| [Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo) | Qwen | 468 / 2,138 | 官方 Turbo 加速版，刚刚发布即上榜 |
| [Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,363 / 248,475 | 基于 Qwen-Image-2.1 的换脸 LoRA，实用性驱动走红 |
| [LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B) | LiquidAI | 277 / 9,088 | LiquidAI 小型视觉语言模型，端侧多模态尝试 |
| [FrancisRing/Prism](https://huggingface.co/FrancisRing/Prism) | FrancisRing | 155 / 0 | 视频+音频联合生成 Diffusion Transformer，纯研究向新作 |
| [canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning) | canberkkkkkk | 345 / 15,710 | 土耳其语 TTS 模型，小语种语音合成代表 |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 979 / 33,664 | 基于 Gemma4 的“去 AI 味”文本风格化模型，切中真实需求 |

### 🔧 专用模型（嵌入、分类、语音识别）

| 模型 | 作者 | 点赞 / 下载 | 说明 |
|---|---|---|---|
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 1,535 / 45,605 | Google 新一代嵌入模型，RAG 生态刚需，发布即爆 |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,472 / 42,936 | 主打“校准决策”的分类模型，独特卖点引发关注 |
| [Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle) | Cactus-Compute | 316 / 12,816 | 端侧语音识别模型，主打本地部署 |

### 📦 微调与量化（社区微调、GGUF、极端压缩）

| 模型 | 作者 | 点赞 / 下载 | 说明 |
|---|---|---|---|
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,605 / 4,457,576 | 三值（ternary）量化 27B 模型，本周下载冠军之一 |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 5,010 / 6,449,020 | unsloth 官方量化，本地部署默认选择 |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 779 / 3,922,328 | 混合精度量化研究产出，下载量证明其实用价值 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 2,122 / 1,484,655 | 27B 版 GSQ-RCO 量化，学术团队的高影响力工程 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,643 / 1,960,274 | 经典“缝合怪”式混合微调，主打创意写作与去审查 |
| [unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF) | unsloth | 238 / 50,551 | EmbeddingGemma-2 的 GGUF 版，llama.cpp 生态嵌入方案 |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 739 / 520,450 | Flash-Next 去审查版，下载/点赞比极高 |
| [SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF) | SC117 | 196 / 765,376 | 量化 + abliterated 双重处理，典型社区组合技 |
| [nerkyor/Qwen3.8-27B-Coder390-...-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2) | nerkyor | 206 / 42,336 | 多模型蒸馏混合微调，主打高效推理与代码 |
| [AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF) | AtomicChat | 239 / 7,314 | 图像生成去审查量化版 |

---

## 📊 生态信号

**Qwen 家族呈压倒性优势**：30 个上榜模型中 15 个直接基于 Qwen（Qwen3.8 系列、Qwen-Image-2.1 及衍生），覆盖语言、多模态、图像生成三大方向，已形成“官方基座 → unsloth 量化 → 社区 abliterated/微调”的完整价值链。**极端量化成为最活跃的创新层**：GSQ-RCO、三值量化、2-bit 压缩持续产生数百万级下载，说明本地部署需求旺盛。**开源权重继续碾压**：上榜者全部为开源模型，DeepSeek、Google、Cloudflare 等大厂持续加码开放发布，闭源 API 模型在 Hub 生态中已无存在感。**“去审查”是一股不可忽视的暗流**，语言和图像两个模态均出现百万级下载的相关变体。

---

## 💎 值得探索

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 本周热度第一，图生视频/文生视频/视频编辑一体化，是开源视频生成实用化的标杆，值得实际跑一遍评估生成质量与显存需求。

2. **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — Google 官方嵌入模型，RAG / 检索系统的核心组件升级，建议在自有评测集上与现有嵌入模型对比召回表现。

3. **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — 学术团队的混合精度量化方案，近 400 万下载验证了质量损失极小。若你在做端侧部署，这是当前 27B 级模型本地化的最佳切入点。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*