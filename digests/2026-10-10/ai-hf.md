# Hugging Face 热门模型日报 2026-10-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-10 04:55 UTC

---

# Hugging Face 热门模型日报（2026-10-10）

---

## 📰 今日速览

Qwen3.8 系列全面霸榜，27B 主模型与 Flash-Next 合计贡献超千万周下载，成为本周生态绝对中心。视频生成领域 LTX-2.5 以 7,082 点赞、168 万下载强势领跑生成类模型。量化社区异常活跃，ISTA-DASLab 的 GSQ-RCO 混合精度量化与三值 Ternary-Bonsai 下载量双双突破数百万，极端压缩技术正在走向主流。“Uncensored / abliterated”去审查微调围绕 Qwen3.8 家族密集出现，社区需求持续旺盛。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 👍 17,361 | ⬇️ 6,783,589
  本周点赞榜第一的多模态旗舰，Qwen3.8 家族的核心基座，生态衍生模型几乎全部围绕它展开。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen | 👍 6,061 | ⬇️ 1,751,752
  轻量高速版迭代，采用 qwen4_exp 架构，兼顾速度与多模态能力，是本地部署的热门选择。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — deepseek-ai | 👍 4,300 | ⬇️ 1,316,468
  DeepSeek V4.1 系列的快速版多模态模型，开源权重中的高性能推理代表。

- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)** — Aleph-Alpha | 👍 846 | ⬇️ 8,474
  欧洲厂商推出的 MoE 推理模型，主打 vLLM 部署友好，是欧洲开源生态的重要新玩家。

- **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)** — Venastine-Research | 👍 676 | ⬇️ 38,740
  MoE 架构（29B 总参 / 4B 激活）的新兴开源家族，激活参数少、本地运行成本低。

- **[ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)** — ConwayResearch | 👍 203 | ⬇️ 15,274
  2-bit 极限量化 + 工具调用能力，主打超低显存下的 Agent 应用。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 👍 7,082 | ⬇️ 1,687,531
  本周生成类之王，支持文生视频、图生视频、视频转视频全链路，168 万下载证明其生产力工具属性。

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** — Cloudflare | 👍 1,948 | ⬇️ 12,066
  Cloudflare 进军开源模型领域的图文理解模型，基础设施巨头下场备受关注。

- **[Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash)** — Cloudflare | 👍 716 | ⬇️ 18,971
  clef 的轻量快速版，适合边缘和 Worker 环境部署。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Qwen | 👍 3,164 | ⬇️ 122,311
  Qwen 图像生成主力版本，同时支持生成与编辑，是 ComfyUI 生态新宠。

- **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)** — Alissonerdx | 👍 1,341 | ⬇️ 245,270
  基于 Qwen-Image-2.1 的换脸 LoRA，下载量惊人，反映图像编辑 LoRA 的巨大社区需求。

- **[LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B)** — LiquidAI | 👍 239 | ⬇️ 7,302
  LiquidAI 的 LFM2 架构小型视觉语言模型，端侧多模态的有力竞争者。

- **[canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning)** — canberkkkkkk | 👍 323 | ⬇️ 12,118
  土耳其语 TTS 模型，小语种语音合成持续有社区爆款。

- **[FrancisRing/Prism](https://huggingface.co/FrancisRing/Prism)** — FrancisRing | 👍 135 | ⬇️ 0
  联合视频-音频生成的 diffusion transformer，方向前沿但尚在早期。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — google | 👍 1,373 | ⬇️ 29,185
  Google 新一代嵌入模型，位居趋势榜首，检索/RAG 基础设施的重要更新。

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations | 👍 5,430 | ⬇️ 41,468
  主打“校准决策”的文本分类模型，"system-one"概念引发大量关注。

- **[Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)** — Cactus-Compute | 👍 270 | ⬇️ 5,558
  端侧语音识别模型，Cactus 去中心化算力网络的配套模型。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth | 👍 4,986 | ⬇️ 6,452,782
  unsloth 官方 GGUF 量化，本周下载量最高的社区量化件，事实上的本地部署标准入口。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — prism-ml | 👍 2,574 | ⬇️ 4,389,072
  三值（ternary）量化 27B 模型，本周下载榜第一的社区模型，极端压缩技术成熟的标志。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — ISTA-DASLab | 👍 751 | ⬇️ 3,559,321
  学术实验室出品，GSQ-RCO 混合精度量化在 Flash-Next 上的实现，下载量超过多数原版模型。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab | 👍 2,097 | ⬇️ 1,490,741
  同一技术的 27B 版本，量化研究直接转化为海量下载。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — abenzerps | 👍 3,786 | ⬇️ 2,013,268
  去审查版 Qwen-Image-2.1，200 万下载显示图像模型的"uncensored"需求同样强劲。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-…-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU | 👍 1,614 | ⬇️ 2,000,216
  经典"调酒式”多层合并微调，融合 Heretic 去审查与 MTP，下载量常年坚挺。

- **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** — orcarouter | 👍 705 | ⬇️ 499,273
  Flash-Next 的 abliterated 版本，轻量+去审查的组合深受个人用户欢迎。

- **[orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF)** — orcarouter | 👍 490 | ⬇️ 21,406
  面向网络安全场景的去审查微调，垂类+Qwen 底座的典型打法。

- **[SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF)** — SC117 | 👍 175 | ⬇️ 684,487
  量化+去审查双重加工，体现社区工作流的“流水线化”。

- **[nerkyor/Qwen3.8-27B-Coder390-…-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2)** — nerkyor | 👍 139 | ⬇️ 8,873
  多源蒸馏合并的编码/推理混合体，名字即配方清单。

- **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)** — jialinyyzz | 👍 783 | ⬇️ 29,470
  基于 Gemma4 统一架构的“去 AI 味”文本风格化模型，反映 AI 文本人性化的新需求。

- **[unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF)** — unsloth | 👍 219 | ⬇️ 41,582
  EmbeddingGemma-2 的量化版，支持多模态嵌入的 llama.cpp 生态补全。

---

## 📊 生态信号

**Qwen3.8 是本周无可争议的中心**：原版、Flash、量化、去审查、编码合并等衍生模型占据榜单近半席位，形成“发布—量化—定制”的完整价值链，且 27B 与 Flash 双档位覆盖从工作站到笔记本的部署场景。**极端量化走向主流**是另一关键信号：三值 Ternary-Bonsai 下载 438 万、ISTA-DASLab 的 GSQ-RCO 学术量化直接拿下数百万下载，2-bit 级压缩已从实验走向生产。**去审查微调需求旺盛**，"uncensored/abliterated"标签横跨文本与图像模态。此外，Cloudflare、Cactus 等基础设施公司亲自下场发布开源模型，"边缘/端侧部署”正成为巨头新战场；LTX-2.5 与 Qwen-Image-2.1 则证明开源生成模型已具备商业级生产力。

---

## 💎 值得探索

1. **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周生态锚点。无论直接使用还是研究其衍生链（量化→去审查→合并），它都是理解当前开源 LLM 趋势的最佳样本。

2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 三值量化 27B 模型且下载量登顶，若质量达标，意味着消费级硬件跑 27B 的时代已到，值得实测评估其精度损失。

3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 全模态视频生成（文生/图生/视频转视频）+ 168 万下载的生产级验证，是目前开源视频生成最值得上手的工作流基座。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*