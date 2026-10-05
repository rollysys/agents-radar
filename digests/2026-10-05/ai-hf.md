# Hugging Face 热门模型日报 2026-10-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-05 04:41 UTC

---

# 🤗 Hugging Face 热门模型日报（2026-10-05）

## 📰 今日速览

Qwen 家族继续统治榜单：[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) 以近 1.7 万点赞、680 万下载断层领先，其 Flash-Next 版本同样高热。视频生成赛道 [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) 表现亮眼，Qwen-Image-2.1 衍生出完整的 LoRA/量化/去审查生态。ISTA-DASLab 的 GSQ-RCO 量化系列下载量惊人，社区对极致压缩的需求持续升温。此外，"决策类"小模型（laya、Julia-1）作为新兴品类首次集体上榜，值得关注。

---

## 🔥 热门模型

### 🧠 语言模型

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen/Qwen3.8-27B)** | Qwen | 👍 16,949 | ⬇️ 6,821,761
  本周绝对王者，多模态对话旗舰，生态衍生模型最多的“母体”。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** | deepseek-ai | 👍 4,098 | ⬇️ 798,422
  DeepSeek 最新 Flash 轻量多模态模型，高性价比路线延续。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 👍 5,901 | ⬇️ 1,480,842
  基于 qwen4_exp 架构的迭代版，下载量证明其已成为生产级主力。

- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)** | Aleph-Alpha | 👍 421 | ⬇️ 1,135
  欧洲厂商的 MoE 推理模型，主打 reasoning 能力，vLLM 开箱即用。

- **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)** | Venastine-Research | 👍 313 | ⬇️ 14,361
  MoE 稀疏激活架构（29B 总参/A4B 激活），本地部署友好。

### 🎨 多模态与生成

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 👍 6,333 | ⬇️ 1,626,951
  本周视频生成之星，支持文/图/视频到视频全链路转换。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** | Qwen | 👍 2,954 | ⬇️ 90,003
  图像生成+编辑双能力底座，本周多个上榜 LoRA 均基于它。

- **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)** | Viggle | 👍 589 | ⬇️ 272,896
  官方级加速版图像生成，turbo 蒸馏带来数倍推理提速。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** | TaichuAI | 👍 2,860 | ⬇️ 12,638
  主打空间推理的视觉语言模型，点赞/下载比极高，口碑型新作。

- **[akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA)** | akatz-ai | 👍 292 | ⬇️ 15,800
  MiniMax-H3 视频角色替换 LoRA，视频编辑热门玩法。

- **[pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA)** | pablodawson | 👍 187 | ⬇️ 5,742
  360° 环绕运镜 LoRA，首尾帧到视频创作利器。

- **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)** | Alissonerdx | 👍 1,186 | ⬇️ 203,086
  基于 Qwen-Image-2.1-Edit 的换脸 LoRA，社区需求旺盛（合规使用需注意）。

- **[lilylilith/QI_2.1_AnyAngle](https://huggingface.co/lilylilith/QI_2.1_AnyAngle)** | lilylilith | 👍 127 | ⬇️ 0
  任意角度图像变换 LoRA，刚发布即上榜的新鲜作品。

- **[FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2)** | FermionResearch | 👍 203 | ⬇️ 2,635
  面向 Apple Silicon 的 MLX 语音识别模型，Parakeet 架构。

### 🔧 专用模型

- **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)** | nvidia | 👍 675 | ⬇️ 53,014
  NVIDIA 官方说话人分离模型，音频管线刚需组件。

- **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)** | Contrastive-LM | 👍 718 | ⬇️ 3,445
  对比学习训练的验证器/重排序模型，RAG 管线新选择。

- **[fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide)** | fastino | 👍 369 | ⬇️ 53,625
  零样本实体抽取+意图分类轻量模型，企业抽取场景热门。

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** | convaiinnovations | 👍 5,168 | ⬇️ 3,752
  "校准决策”分类模型，点赞异常高，system-one 概念引发讨论。

- **[SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1)** | SupersonicLabs | 👍 419 | ⬇️ 3,657
  多语言决策模型，与 laya 同属新兴"decision-model"品类。

- **[PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE)** | PSRben | 👍 405 | ⬇️ 1,516
  学术论文配套视觉分类模型（arXiv:2609.33325）。

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** / **[clef-flash](https://huggingface.co/Cloudflare/clef-flash)** | Cloudflare | 👍 1,243 / 437 | ⬇️ 4,214 / 6,372
  基于 Qwen3.5 的边缘侧图像理解模型，基础设施厂商入局端侧 AI 的信号。

### 📦 微调与量化

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** | 👍 1,960 | ⬇️ 1,636,747
  GSQ-RCO 混合精度量化，下载量超原版，量化技术成为流量入口。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** | 👍 560 | ⬇️ 1,886,975
  同系列 Flash-Next 版，本周下载量 Top 3。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF)** | 👍 261 | ⬇️ 351,230
  剪枝+量化的 Coder 特化版。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** | 👍 2,421 | ⬇️ 4,045,810
  三值化（2-bit）27B 模型，405 万下载证明低比特推理已成主流。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** | 👍 3,154 | ⬇️ 1,553,744
  去审查图像模型 GGUF 版，ComfyUI 用户首选，下载量惊人。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** | 👍 1,426 | ⬇️ 2,164,143
  DavidAU 一贯风格的“堆料式"创意微调，社区热度不减。

- **[Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw)** | 👍 217 | ⬇️ 946
  GLM-5.3 去审查 EXL3 极限压缩版。

- **[orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF)** | 👍 365 | ⬇️ 14,195
  网络安全领域特化的去审查微调。

---

## 📊 生态信号

**Qwen 帝国化**：榜单 30 席中约 15 个直接基于 Qwen（3.8 系列 + Image-2.1 + Qwen3.5 架构衍生），从官方旗舰到社区量化、LoRA、去审查版本形成完整金字塔，Qwen 已成为开源生态的事实基座。**量化即流量**：ISTA-DASLab 的 GSQ-RCO 系列和 Ternary-Bonsai 三值化模型下载量均破百万，说明用户实际部署需求集中在低比特、本地化推理，llama.cpp/ComfyUI/MLX 等端侧工具链是主要消费场景。**开源权重持续碾压**：本周上榜全部为开源权重模型，闭源 API 无缘趋势榜；DeepSeek、Qwen、MiniMax 等中国厂商 + Cloudflare/NVIDIA/Lightricks 等基础设施商构成主要供给方。**新品类萌芽**：laya、Julia-1 等"校准决策模型”以极低下载量斩获高点赞，显示社区对 LLM 之外新型架构（判别式/决策式）的好奇心正在聚集。

---

## 💎 值得探索

1. **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** — 空间推理专项的 9B VLM，点赞/下载比全场最高，技术方向差异化明显，适合评估 VLM 空间智能上限。

2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 三值化 27B 模型能跑出 405 万下载，值得实测 2-bit 下的质量保持率，代表本地部署的极限方向。

3. **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)** — 生成式 LLM 之外的对撞路线：对比学习验证器/重排序器，若效果好可能改变 RAG 评审层的技术选型。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*