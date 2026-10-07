# Hugging Face 热门模型日报 2026-10-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-07 04:57 UTC

---

# 📰 Hugging Face 热门模型日报（2026-10-07）

---

## 一、今日速览

Qwen 生态今日全面爆发：**Qwen3.8-27B** 以 17,137 点赞、676 万下载领跑榜单，其 Flash-Next 版本及社区量化衍生版本占据多个席位。图像与视频生成赛道热度极高，**LTX-2.5** 视频模型与 **Qwen-Image-2.1** 及其衍生微调（去审查版、换脸 LoRA、加速版）形成完整生态链。ISTA-DASLab 的 GSQ-RCO 量化技术批量上榜，显示本地部署与极端量化仍是社区核心需求。

---

## 二、热门模型

### 🧠 语言模型

| 模型 | 作者 | 👍 / ⬇️ | 说明 |
|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,137 / 6,768,060 | 本日绝对王者，多模态对话旗舰，下载量近 700 万 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,992 / 1,589,145 | 轻量高速版，采用 qwen4_exp 新架构，性价比之选 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,193 / 1,160,332 | DeepSeek 新一代 Flash 模型，与 Qwen 系列正面竞争 |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 725 / 4,138 | 欧洲厂商的 MoE 推理模型，主打 reasoning 能力 |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 534 / 30,585 | MoE 稀疏激活（29B-A4B）文本模型，社区新势力 |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 744 / 3,904 | 对比学习训练的验证器/重排序器，方法学创新受关注 |

### 🎨 多模态与生成

| 模型 | 作者 | 👍 / ⬇️ | 说明 |
|---|---|---|---|
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 6,691 / 1,679,035 | 全能视频生成（文/图/视频到视频），本类目下载之王 |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,052 / 102,510 | 官方图像生成+编辑模型，衍生生态的母模型 |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 2,894 / 12,889 | 9B 级视觉语言模型，主打空间推理，小而美 |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) / [clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 1,709+610 / 合计 ~18k | 基于 Qwen3.5 的边缘侧多模态模型，Cloudflare 入局端侧推理 |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,461 / 1,721,760 | 去审查版图像模型 GGUF，ComfyUI 社区爆款 |
| [Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,258 / 219,575 | 基于 Qwen-Image-2.1 的换脸 LoRA，实用工具型爆火 |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 640 / 302,425 | 官方图像模型加速 LoRA，出图速度大幅提升 |
| [pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA) | pablodawson | 231 / 8,745 | 首尾帧到视频（FLF2V）LoRA，动画工作流利器 |
| [autotrust/JEV-27B-VL](https://huggingface.co/autotrust/JEV-27B-VL) | autotrust | 1,027 / 1,525,286 | 视觉语言模型，下载量超 150 万，企业级应用广泛 |

### 🔧 专用模型

| 模型 | 作者 | 👍 / ⬇️ | 说明 |
|---|---|---|---|
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 590 / 364 | Google 新一代嵌入模型，刚发布即上榜 |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,295 / 20,386 | 校准决策分类模型，“System-One"快速决策新范式 |
| [autotrust/GEV-26B-Decide](https://huggingface.co/autotrust/GEV-26B-Decide) | autotrust | 778 / 854,574 | 决策分类模型，下载 85 万，生产级采用明显 |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 730 / 58,703 | 说话人分离+语音活动检测，音频流水线刚需 |
| [FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2) | FermionResearch | 262 / 3,339 | MLX 优化的 ASR 模型，Apple Silicon 专属 |
| [PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE) | PSRben | 441 / 1,749 | 学术导向（arXiv:2609.33325）图像分类模型 |

### 📦 微调与量化

| 模型 | 作者 | 👍 / ⬇️ | 说明 |
|---|---|---|---|
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 2,011 / 1,589,314 | GSQ-RCO 混合精度量化，学术量化团队出品 |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 661 / 2,709,781 | Flash 版量化，下载量超 270 万，本地部署首选 |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 324 / 478,633 | 量化+剪枝的代码特化版 |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,497 / 4,193,836 | 三值化 2-bit 极端压缩，本榜单下载量第一的量化模型 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,515 / 2,125,779 | 著名“炼丹师”风格混合微调+去审查，社区流量密码 |
| [Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw) | Infatoshi | 272 / 1,660 | GLM-5.3 极低比特（3.0bpw）EXL3 量化，去审查 |
| [orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF) | orcarouter | 437 / 18,114 | 网络安全领域特化微调，去审查版 |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 408 / 15,134 | 文本人性化微调，让 AI 文本更难被检测 |

---

## 三、生态信号

**Qwen 家族统治级表现**：榜单 30 席中约 15 席直接基于 Qwen（Qwen3.8 系列官方 + GSQ 量化 + DavidAU/Orca 等微调），加上 Qwen-Image-2.1 的图像衍生链，Qwen 已成为事实上的开源底座标准。DeepSeek、Google、NVIDIA、Cloudflare 等大厂持续跟进开源权重发布，闭源模型在趋势榜上已无存在感——“开源权重 + 社区衍生”的飞轮效应愈发明显。量化方面出现两条路线：ISTA-DASLab 的学术化 GSQ-RCO 混合精度方案下载量惊人，prism-ml 的三值化 2-bit 将 27B 压到消费级可跑；“Uncensored”去审查微调持续高热度，横跨文本与图像模态。边缘侧（Cloudflare clef、MLX Phonon-2）是新增长点。

---

## 四、值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周生态核心，性能与下载双榜首，几乎所有量化/微调衍生都围绕它展开，值得作为基准模型试用与评估。

2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 430 万下载的三值化 2-bit 模型，代表了极端量化的实用化拐点，适合关注本地部署与低成本推理的研究者和开发者。

3. **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — 5,295 点赞但下载仅 2 万，典型的“学术热度 > 部署热度”模型，“System-One 校准决策”新范式值得研究者深入。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*