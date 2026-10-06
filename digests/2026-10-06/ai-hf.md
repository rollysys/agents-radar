# Hugging Face 热门模型日报 2026-10-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-06 05:27 UTC

---

# 📊 Hugging Face 热门模型日报（2026-10-06）

## 今日速览

Qwen 生态全面爆发，[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) 以 17,049 点赞、676 万下载领跑全站，衍生微调与量化版本占据榜单近三分之一席位。视频生成持续升温，[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) 与 MiniMax-H3 LoRA 生态表现抢眼。“Uncensored（去审查）”社区微调依然是流量密码，多个去审查版本进入热门。极低比特量化（三值、GSQ）成为本周社区研究热点。

---

## 🧠 语言模型

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** | Qwen | 👍 17,049 | ⬇️ 6,758,884
  本周绝对王者，多模态旗舰对话模型，下载量与点赞数均断层领先。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** | Qwen | 👍 5,942 | ⬇️ 1,530,359
  Flash 系列下一代轻量旗舰，社区量化版本（ISTA-DASLab）同步走红，说明其推理生态已成熟。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** | deepseek-ai | 👍 4,137 | ⬇️ 869,321
  DeepSeek V4.1 系列轻量版，多模态文本生成，延续高性价比路线。

- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)** | Aleph-Alpha | 👍 643 | ⬇️ 2,453
  欧洲厂商推出的 MoE 推理模型，主打 reasoning 能力。

- **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)** | Venastine-Research | 👍 420 | ⬇️ 18,863
  29B 总参/A4B 激活的稀疏 MoE，本地部署友好，新晋社区热门。

---

## 🎨 多模态与生成

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** | Lightricks | 👍 6,521 | ⬇️ 1,645,444
  本周多模态最大亮点，支持图生视频/文生视频/视频编辑的全能视频生成模型。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** | Qwen | 👍 3,006 | ⬇️ 94,556
  官方图像生成与编辑新版本，围绕它的 LoRA、GGUF 生态已在榜单形成矩阵。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** | TaichuAI | 👍 2,876 | ⬇️ 12,782
  轻量视觉语言模型，主打空间推理，点赞/下载比异常高，社区口碑型爆款。

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** | Cloudflare | 👍 1,533 | ⬇️ 5,416
  Cloudflare 入局开源 VLM，配套 [clef-flash](https://huggingface.co/Cloudflare/clef-flash)（👍 539）覆盖轻量端。

- **[autotrust/JEV-27B-VL](https://huggingface.co/autotrust/JEV-27B-VL)** | autotrust | 👍 733 | ⬇️ 1,278,569
  基于 Qwen3.5 架构的视觉语言模型，下载量远超点赞，是实际生产中被大量调用的模型。

- **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)** | Viggle | 👍 619 | ⬇️ 286,885
  Qwen-Image-2.1 的加速 LoRA，面向实时生图场景。

- **[akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA)** | akatz-ai | 👍 311 | ⬇️ 18,138
  MiniMax-H3 视频角色替换 LoRA，视频编辑工作流热门组件。

- **[pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA)** | pablodawson | 👍 218 | ⬇️ 6,930
  首尾帧 360° 环绕运镜 LoRA，展示 MiniMax-H3 在可控运镜上的潜力。

- **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)** | Alissonerdx | 👍 1,218 | ⬇️ 212,575
  基于 Qwen-Image-2.1 的换脸 LoRA，社区创意工具流量大户。

- **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)** | nvidia | 👍 701 | ⬇️ 55,491
  NVIDIA 说话人分离模型，音频处理管线刚需组件。

- **[FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2)** | FermionResearch | 👍 235 | ⬇️ 3,063
  基于 Parakeet 架构的 MLX 语音识别模型，Apple Silicon 本地 ASR 优选。

---

## 🔧 专用模型

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** | convaiinnovations | 👍 5,247 | ⬇️ 11,733
  “校准决策”文本分类模型，点赞榜第二，Agent 决策系统的热门新方向。

- **[autotrust/GEV-26B-Decide](https://huggingface.co/autotrust/GEV-26B-Decide)** | autotrust | 👍 471 | ⬇️ 446,527
  基于 Gemma4 的决策分类模型，45 万下载显示已在工业界落地。

- **[SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1)** | SupersonicLabs | 👍 442 | ⬇️ 3,898
  多语言决策模型，与 Laya 同属“决策模型”新赛道。

- **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)** | Contrastive-LM | 👍 740 | ⬇️ 3,715
  对比学习验证器/重排序模型，面向 LLM 推理验证与 RAG 场景。

- **[PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE)** | PSRben | 👍 426 | ⬇️ 1,654
  图像分类研究模型（arXiv:2609.33325），学术社区关注度高。

---

## 📦 微调与量化

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** | abenzerps | 👍 3,284 | ⬇️ 1,638,838
  去审查版 Qwen-Image GGUF，163 万下载，ComfyUI 社区刚需。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** | prism-ml | 👍 2,461 | ⬇️ 4,120,718
  三值（2-bit）量化 27B 模型，410 万下载，极低比特量化的代表作品。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-…-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** | DavidAU | 👍 1,466 | ⬇️ 2,134,360
  DavidAU 一贯风格的“命名艺术”融合微调，创作+编码去审查混合版，下载量惊人。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** | ISTA-DASLab | 👍 622 | ⬇️ 2,244,732
  混合精度 GSQ 量化研究版本，另有 [Coder 变体](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF)（👍 295），学术界量化前沿。

- **[orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF)** | orcarouter | 👍 406 | ⬇️ 16,802
  面向网络安全领域的去审查 Qwen3.8 微调。

- **[Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw)** | Infatoshi | 👍 246 | ⬇️ 1,342
  GLM-5.3 去审查 EXL3 极低比特量化，ExLlamaV3 生态代表。

- **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)** | jialinyyzz | 👍 251 | ⬇️ 10,329
  基于 Gemma4 的“人性化改写”微调，用于消除 AI 文本痕迹。

---

## 生态信号

**Qwen 家族统治级表现**：30 个热门模型中 11 个基于 Qwen（Qwen3.8、Qwen-Image-2.1、Qwen3.5 衍生），从官方旗舰到 GGUF、LoRA、去审查版形成完整生态飞轮。**开源权重仍是社区主战场**：DeepSeek、Qwen、Gemma 持续开放，Cloudflare 等基建厂商亲自下场开源 VLM（clef 系列），进一步印证开放权重策略的商业价值。**三大技术趋势**值得注意：① 极低比特量化（三值 Bonsai、GSQ、EXL3 3bpw）下载量普遍破百万，显示本地推理需求爆发；② "Uncensored" 微调稳定占据流量高位；③ 新兴“决策模型”赛道（Laya、GEV-Decide、Julia-1）获得异常高的点赞，预示 Agent 决策组件可能是下一个微调热点。

---

## 值得探索

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 本周最强视频生成模型，覆盖 I2V/T2V/V2V 全任务，6,521 点赞证明社区认可，视频创作者首选。

2. **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** — 仅 9B 的空间推理 VLM，点赞/下载比全站最高，轻量高质，适合研究 VLM 空间能力上限。

3. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 三值量化让 27B 模型跑进消费级硬件，410 万下载的实证，是观察低比特量化实用化的最佳样本。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*