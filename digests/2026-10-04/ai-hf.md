# Hugging Face 热门模型日报 2026-10-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-04 04:53 UTC

---

# Hugging Face 热门模型日报（2026-10-04）

## 📰 今日速览

Qwen 生态全面爆发：[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) 以 16,890 点赞、690 万下载领跑榜单，其衍生的量化版、微调版、去审查版占据多席。图像生成方面，Qwen-Image-2.1 发布即引爆社区，去审查 GGUF 版下载量已达 145 万。[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) 则以 6,153 点赞成为视频生成领域焦点。此外，GSQ/RCO 量化与三值（2-bit）压缩等极端量化技术成为本周显著趋势，语音处理（说话人分离、ASR）也有新品值得关注。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 👍 16,890 | ⬇️ 6,895,117
  本周绝对王者，旗舰级多模态对话模型，下载量与点赞数断层领先。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen | 👍 5,864 | ⬇️ 1,404,413
  Qwen3.8 系列的轻量快速版本，高频使用场景的主力模型。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — deepseek-ai | 👍 4,062 | ⬇️ 787,841
  DeepSeek V4.1 系列轻量版，多模态能力+高性价比，下载表现强劲。

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations | 👍 5,085 | ⬇️ 0
  主打“校准决策”（calibrated-decisions）的分类/决策模型，点赞高但下载为零，热度来源存疑，建议谨慎观察。

- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)** — Aleph-Alpha | 👍 262 | ⬇️ 0
  德系厂商的 MoE 推理模型，主打 reasoning 能力。

- **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)** — Venastine-Research | 👍 197 | ⬇️ 11,013
  29B 总参/A4B 激活的 MoE 文本模型 GGUF 版，适合本地部署。

- **[NaiveAI/Naive-N0.5-Flash](https://huggingface.co/NaiveAI/Naive-N0.5-Flash)** — NaiveAI | 👍 145 | ⬇️ 1,497
  面向代码与长上下文的 MoE 研究型模型。

### 🎨 多模态与生成（图像、视频、音频）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 👍 6,153 | ⬇️ 1,629,984
  图生视频/文生视频/视频编辑全能选手，本周生成领域最热模型。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Qwen | 👍 2,909 | ⬇️ 85,895
  官方图像生成+编辑模型，发布即成为社区二创生态的新基座。

- **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)** — Viggle | 👍 570 | ⬇️ 257,298
  基于 Qwen-Image-2.1 的加速 LoRA，下载量显示实用价值高。

- **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)** — Alissonerdx | 👍 1,151 | ⬇️ 193,270
  Qwen-Image-2.1 上的换脸 LoRA，反映去审查/编辑类需求旺盛。

- **[akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA)** — akatz-ai | 👍 273 | ⬇️ 13,258
  MiniMax-H3 视频角色替换 LoRA，视频编辑工具链持续繁荣。

- **[pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA)** — pablodawson | 👍 163 | ⬇️ 4,924
  首尾帧控视频生成 LoRA，面向运镜/环绕镜头创作。

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** 与 **[clef-flash](https://huggingface.co/Cloudflare/clef-flash)** — Cloudflare | 👍 1,015 / 367
  基于 Qwen3.5 架构的视觉理解模型，Cloudflare 进军开源 VLM 的信号。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** — TaichuAI | 👍 2,781 | ⬇️ 12,483
  强调空间推理的 9B 视觉语言模型，点赞表现亮眼。

- **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)** — nvidia | 👍 652 | ⬇️ 48,784
  NVIDIA 说话人分离模型，音频处理基础设施级工具。

- **[FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2)** — FermionResearch | 👍 174 | ⬇️ 2,361
  面向 Apple Silicon 的 MLX 语音识别模型。

### 🔧 专用模型（排序、分类、视觉任务）

- **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)** — Contrastive-LM | 👍 693 | ⬇️ 3,190
  对比学习训练的验证器/重排序模型，RAG 与推理搜索场景新选手。

- **[fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide)** — fastino | 👍 351 | ⬇️ 50,402
  零样本实体抽取+意图分类轻量模型，下载量证明生产采用度高。

- **[PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE)** — PSRben | 👍 392 | ⬇️ 1,338
  学术论文（arXiv:2609.33325）配套图像分类模型。

- **[SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1)** — SupersonicLabs | 👍 401 | ⬇️ 3,251
  多语言决策/文本分类模型。

### 📦 微调与量化（社区微调、GGUF、压缩）

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — abenzerps | 👍 2,951 | ⬇️ 1,455,921
  去审查版 Qwen-Image-2.1，下载量超官方原版 17 倍，本地 ComfyUI 生态刚需。

- **[ISTA-DASLab](https://huggingface.co/ISTA-DASLab) 量化三件套**：
  - [Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)（👍 520 | ⬇️ 1,474,719）
  - [Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)（👍 1,943 | ⬇️ 1,674,292）
  - [Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF)（👍 241 | ⬇️ 303,256）
  前沿 GSQ/RCO 混合精度量化研究，下载量证明社区对极致压缩的渴求。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — prism-ml | 👍 2,395 | ⬇️ 3,969,867
  三值（2-bit）量化 27B 模型，近 400 万下载，极端量化的标杆之作。

- **[DavidAU/Qwen3.8-27B-TURBO-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU | 👍 1,399 | ⬇️ 2,116,212
  典型 DavidAU 风格“融合+去审查”实验微调，社区长盛不衰的玩法。

- **[Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw)** — Infatoshi | 👍 185 | ⬇️ 520
  GLM-5.3 的 3.0bpw EXL3 极限量化去审查版。

- **[orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF)** — orcarouter | 👍 323 | ⬇️ 11,585
  面向网络安全领域的 Qwen3.8 去审查微调。

---

## 📊 生态信号

**Qwen 家族一家独大**：榜单 30 席中约三分之一直接基于 Qwen（Qwen3.8、Qwen-Image-2.1、Qwen3.5 衍生），涵盖原版、Flash、量化、去审查、领域微调全链条，已形成类似 Llama 时代的一级开源生态。DeepSeek、GLM、MiniMax 构成第二梯队。**开源权重持续主导本地部署场景**：GGUF/llama.cpp/ComfyUI 生态依然是下载量的主要来源——去审查版下载量普遍数倍于官方版，说明本地用户对内容策略敏感。**量化技术前沿活跃**：ISTA-DASLab 的 GSQ/RCO、三值 Bonsai、EXL3 低 bpw 表明社区正将 27B 级模型压进消费级显卡。另需注意 laya 等模型点赞与下载严重背离，可能存在刷赞行为。

---

## 💎 值得探索

1. **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 当前生态的事实基座，无论评估前沿能力还是作为微调起点，都是必测项；显存有限可直接试 [GSQ-RCO 量化版](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 视频生成领域本周最热，支持图生视频、文生视频、视频编辑全模式，是开源视频工作流的最新核心组件。

3. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 2-bit 三值量化 27B 模型且近 400 万下载，代表极端压缩的实用化里程碑，值得研究其质量-压缩权衡，适合低端硬件部署探索。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*