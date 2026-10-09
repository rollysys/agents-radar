# Hugging Face 热门模型日报 2026-10-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-09 05:10 UTC

---

# Hugging Face 热门模型日报（2026-10-09）

## 📰 今日速览

今日榜单由 **Qwen 生态全面主导**：[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) 以 17,297 点赞、684 万下载断层领先，围绕它的量化版（GSQ-RCO）、去审查版（abliterated/uncensored）衍生模型多达 5 款。**DeepSeek-V4.1-Flash** 正式上榜，多模态轻量路线竞争加剧。[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) 以近 7,000 点赞成为视频生成最热模型。同时出现一批新信号：**GSQ-RCO 混合精度量化**（ISTA-DASLab）下载量爆表，**Aleph-Alpha Kolibri-1** 与 **Cloudflare clef** 等非头部厂商发布引发关注。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 👍 17,297 | ⬇️ 6,841,660
  本周绝对王者，27B 多模态旗舰，下载量近 700 万，是社区微调与量化的核心底座。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen | 👍 6,048 | ⬇️ 1,640,938
  轻量高性能版本，"Flash-Next" 迭代引发大量二次开发，热度紧追旗舰。

- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)** — Aleph-Alpha | 👍 816 | ⬇️ 6,777
  欧洲厂商新发布的推理向 MoE 模型，主打 vLLM 部署，下载低但口碑型上榜。

- **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)** — Venastine-Research | 👍 669 | ⬇️ 36,481
  29B 总参 / 4B 激活的稀疏 MoE，原生提供 GGUF，本地部署友好。

- **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)** — jialinyyzz | 👍 641 | ⬇️ 23,439
  基于 Gemma4 的多模态“人性化改写”模型，让 AI 输出更自然，是小众刚需赛道。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 👍 6,965 | ⬇️ 1,688,807
  本周生成类最强：图生视频/文生视频/视频编辑全能，点赞与下载双高。

- **[autotrust/JEV-27B-VL](https://huggingface.co/autotrust/JEV-27B-VL)** — autotrust | 👍 3,056 | ⬇️ 1,533,034
  基于 Qwen3.5 架构的视觉语言模型，下载破 150 万，榜单第 1 位。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen/Qwen-Image-2.1)** — Qwen | 👍 3,129 | ⬇️ 116,957
  文生图+图像编辑双能力，图像生成赛道的新基准。

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** / **[clef-flash](https://huggingface.co/Cloudflare/clef-flash)** — Cloudflare | 👍 1,897 / 696 | ⬇️ 10,874 / 17,587
  Cloudflare 进军开源视觉模型，主打边缘部署，点赞/下载比极高，属战略级发布。

- **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)** — Alissonerdx | 👍 1,322 | ⬇️ 243,910
  基于 Qwen-Image-2.1 的换脸 LoRA，社区娱乐向需求旺盛。

- **[canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning)** — canberkkkkkk | 👍 304 | ⬇️ 9,467
  土耳其语 TTS 模型，小语种语音合成持续有社区活力。

- **[LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B)** — LiquidAI | 👍 201 | ⬇️ 5,370
  LiquidAI 的 3B 小型视觉语言模型，端侧多模态方向。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations | 👍 5,398 | ⬇️ 36,328
  "System-One" 类校准决策分类器，点赞极高，代表 LLM 路由/决策判别这一新范式。

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — google | 👍 1,220 | ⬇️ 21,148
  Google 官方新一代嵌入模型，检索/RAG 基础设施级更新。

- **[Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)** — Cactus-Compute | 👍 196 | ⬇️ 2,594
  端侧语音识别模型，主打本地 ASR 场景。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[autotrust/GEV-26B-Decide](https://huggingface.co/autotrust/GEV-26B-Decide)**（👍 1,907 | ⬇️ 903,866）及其 **[NVFP4 版](https://huggingface.co/autotrust/GEV-26B-Decide-NVFP4)**（👍 165 | ⬇️ 19,655）
  基于 Gemma4 的决策分类器，NVFP4 量化同步发布，官方自带量化策略。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — prism-ml | 👍 2,551 | ⬇️ 4,345,410
  三值化（2-bit）27B 模型，下载量全榜第 3，极端量化本地化需求爆发。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — 👍 726 | ⬇️ 3,405,442；**[Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — 👍 2,071 | ⬇️ 1,517,150
  学术量化团队的新混合精度方案（GSQ+RCO），两款合计下载近 500 万，本周最大量化事件。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — 👍 3,690 | ⬇️ 1,933,066
  去审查版文生图 + ComfyUI 生态支持，社区下载机器。

- **[DavidAU/Qwen3.8-27B-TURBO-…-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — 👍 1,572 | ⬇️ 2,037,446
  DavidAU 一贯风格的“缝合怪”式强化微调，编码+推理向，下载 200 万。

- **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)**（👍 681 | ⬇️ 492,022）、**[OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF)**（👍 472 | ⬇️ 20,613）、**[SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF)**（👍 158 | ⬇️ 612,411）
  去审查/abliterated 社区持续活跃，已出现“量化+去审查”二合一的复合衍生。

- **[unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF)** — 👍 204 | ⬇️ 29,692
  unsloth 快速跟进官方嵌入模型的 GGUF 版，多模态嵌入可本地跑。

- **[Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw)** — 👍 302 | ⬇️ 2,091
  GLM-5.3 的 EXL3 极低比特（3.0bpw）去审查版，显存极限压缩玩家最爱。

---

## 🌐 生态信号

**Qwen3.8 家族是本周绝对的生态中心**：官方双模型（27B + Flash-Next）之外，榜单上围绕它的衍生模型多达 7 款，覆盖 GSQ-RCO 量化、abliterated、Heretic 微调、EXL3 等全谱系，Qwen 已成为“开源界的 Llama 继任者”。**量化技术进入新阶段**：ISTA-DASLab 的 GSQ-RCO 混合精度方案下载量爆炸，加上 Ternary-Bonsai 的 2-bit 三值化，显示社区重心正从“有没有模型”转向“更小比特跑更大模型”。**开源权重持续压倒性供给**：本周 30 强全部为开放权重，连 Cloudflare、DeepSeek、Google 等大厂也以开放发布参与竞争。另一个新兴信号是 **"System-One"决策/路由分类器**（laya、GEV-Decide）的高点赞，预示 LLM 编排层正成为独立赛道。

---

## ⭐ 值得探索

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 本周生成类口碑之王，支持图生视频、文生视频、视频编辑全链路，且是开放权重的 diffusion 模型，创作者与研究者都不容错过。

2. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — GSQ+RCO 混合精度量化代表前沿压缩技术，想在消费级硬件上跑 27B 多模态模型的最佳入口。

3. **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — 校准决策分类器是 LLM 路由与智能体编排的关键组件，5,398 点赞说明社区对“模型之上的决策层”需求强烈，值得提前研究布局。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*