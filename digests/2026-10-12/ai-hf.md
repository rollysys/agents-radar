# Hugging Face 热门模型日报 2026-10-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-12 04:58 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-10-12**

---

## 📰 今日速览

本周榜单由 **Qwen3.8 家族全面霸榜**，主模型 27B 与 Flash-Next 版本合计拿下数千万下载，社区量化版（unsloth、ISTA-DASLab）同步爆发。生成侧同样火热：**LTX-2.5 视频模型**（7,335 赞）和 **Qwen-Image-2.1** 及其 Uncensored GGUF 衍生版（下载超 218 万）领跑图像/视频赛道。**去审查（Uncensored/Abliterated）微调**已形成稳定生态位，多个社区版本进入趋势榜。此外，Google 的 embeddinggemma-2 与 Facebook 的 sam3 显示大厂在嵌入与分割领域持续加码。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  作者：Qwen | 👍 17,517 | ⬇️ 6,843,108
  本周绝对王者，多模态对话旗舰，点赞与下载双榜第一。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**
  作者：Qwen | 👍 6,114 | ⬇️ 1,870,465
  轻量高效版旗舰，187 万下载证明其是日常部署的主力选择。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)**
  作者：deepseek-ai | 👍 4,366 | ⬇️ 1,382,367
  DeepSeek 最新 Flash 级多模态模型，是 Qwen 系最有力的开源挑战者。

- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)**
  作者：Aleph-Alpha | 👍 888 | ⬇️ 12,550
  欧洲厂商的推理型 MoE 模型，主打 vLLM 部署。

- **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)**
  作者：Venastine-Research | 👍 691 | ⬇️ 48,389
  稀疏激活 MoE 新秀，A4B 架构让 29B 模型可本地运行。

- **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)**
  作者：jialinyyzz | 👍 1,137 | ⬇️ 37,647
  基于 Gemma4 的“去 AI 味”文本润色模型，反映社区对自然文风的强需求。

- **[ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)**
  作者：ConwayResearch | 👍 327 | ⬇️ 108,900
  主打 2-bit 量化 + 工具调用，面向边缘设备的 Agent 场景。

### 🎨 多模态与生成（图像、视频、音频）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  作者：Lightricks | 👍 7,335 | ⬇️ 1,726,683
  本周生成类最大爆款，图生视频/文生视频全能，172 万下载。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)**
  作者：Qwen | 👍 3,230 | ⬇️ 136,103
  Qwen 图像生成与编辑主版本，社区衍生生态的基础底座。

- **[Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)**
  作者：Qwen | 👍 551 | ⬇️ 4,702
  官方加速版，刚发布即上榜，推理成本大幅降低。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)**
  作者：abenzerps | 👍 4,002 | ⬇️ 2,188,658
  去审查版图像模型，218 万下载，ComfyUI 生态顶流。

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** / **[clef-flash](https://huggingface.co/Cloudflare/clef-flash)**
  作者：Cloudflare | 👍 2,031 / 759 | ⬇️ 14,351 / 22,123
  Cloudflare 进军开源多模态模型，基于 Qwen3.5 架构，主打边缘部署。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)**
  作者：facebook | 👍 4,073 | ⬇️ 2,081,596
  SAM 系列第三代，支持视频分割，208 万下载显示 CV 基础模型需求旺盛。

- **[LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B)**
  作者：LiquidAI | 👍 301 | ⬇️ 10,843
  Liquid 架构小尺寸视觉语言模型，端侧多模态代表。

- **[canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning)**
  作者：canberkkkkkk | 👍 359 | ⬇️ 18,079
  土耳其语 TTS 模型，小语种语音合成持续活跃。

- **[FrancisRing/Prism](https://huggingface.co/FrancisRing/Prism)**
  作者：FrancisRing | 👍 162 | ⬇️ 0
  联合视频+音频生成的扩散 Transformer，靠新意上榜而非下载。

- **[speridlabs/iris-3b](https://huggingface.co/speridlabs/iris-3b)**
  作者：speridlabs | 👍 155 | ⬇️ 393
  像素空间扩散小模型，探索非潜空间路线。

### 🔧 专用模型

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)**
  作者：google | 👍 1,744 | ⬇️ 98,829
  Google 新一代嵌入模型，榜单第一，RAG/检索生态的基础设施级更新。

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)**
  作者：convaiinnovations | 👍 5,496 | ⬇️ 44,088
  "校准决策"文本分类模型，罕见地在分类任务上获得 5,000+ 赞。

- **[Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)**
  作者：Cactus-Compute | 👍 337 | ⬇️ 16,434
  端侧语音识别模型，on-device 语音赛道值得关注。

### 📦 微调与量化

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
  作者：unsloth | 👍 5,028 | ⬇️ 6,488,262
  Qwen3.8-27B 的社区量化标配，下载量逼近官方版。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**
  作者：prism-ml | 👍 2,633 | ⬇️ 4,549,911
  三值化（2-bit）量化路线代表，455 万下载验证极低比特量化的实用性。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** / **[Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**
  作者：ISTA-DASLab | 👍 802 / 2,155 | ⬇️ 4,189,006 / 1,489,676
  学术机构 GSQ+RCO 混合精度量化研究落地，Flash 版下载甚至超过官方原版。

- **[DavidAU/Qwen3.8-27B-TURBO-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  作者：DavidAU | 👍 1,659 | ⬇️ 2,016,567
  经典"Cold Fusion"多模型融合 + 去审查，命名风格一如既往。

- **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)**
  作者：orcarouter | 👍 763 | ⬇️ 614,193
  Abliteration 去审查版 Flash-Next，轻量+自由的组合需求明确。

- **[unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF)**
  作者：unsloth | 👍 259 | ⬇️ 59,274
  官方嵌入模型发布当天即出 GGUF，unsloth 跟进速度惊人。

- **[nerkyor/Qwen3.8-27B-...-SFT-RLOO-MTP-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2)**
  作者：nerkyor | 👍 242 | ⬇️ 56,525
  多源蒸馏 + 高效推理微调，社区"堆料式"微调的典型样本。

- **[AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF)**
  作者：AtomicChat | 👍 337 | ⬇️ 100,530
  图像生成去审查版，与 abenzerps 版本共同构成该生态。

---

## 📊 生态信号

**Qwen 家族呈压倒性统治力**：榜单 30 席中约三分之一与 Qwen3.8 / Qwen-Image-2.1 相关，官方发布后 24-48 小时内即有 unsloth、ISTA-DASLab 等社区量化跟进，量化版下载量甚至反超官方，说明 **“官方发布 → 社区量化 → GGUF 分发”** 的流水线已高度成熟。**开源权重仍是主流**，DeepSeek、Cloudflare、Facebook 等大厂均以开放权重参与竞争。值得注意的三个信号：① **2-bit / 三值量化**（Ternary-Bonsai、GSQ-RCO）下载量巨大，边缘部署需求爆发；② **去审查微调**已从文本扩展到图像生成；③ 非主流厂商（Aleph-Alpha、LiquidAI、Lightricks）借助细分差异化（MoE 推理、液态架构、视频生成）持续获得关注。

---

## 💎 值得探索

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 本周生成类口碑与热度双冠，支持图/文/视频多入口生成，是视频创作工作流的最新基础模型。

2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 三值化 27B 模型拿下 455 万下载，若想在消费级硬件跑大模型，这是极低比特量化的最佳实践样本。

3. **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — 嵌入模型罕见表态榜单第一，做 RAG / 检索系统的开发者应立即基准测试，配合 [unsloth GGUF 版](https://huggingface.co/unsloth/embeddinggemma-2-GGUF) 可低成本落地。

---
*数据来源：Hugging Face Hub 趋势榜（2026-10-12），按周点赞数排序。*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*