# Hugging Face 热门模型日报 2026-10-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-02 04:40 UTC

---

# Hugging Face 热门模型日报（2026-10-02）

## 📰 今日速览

Qwen 生态全面爆发：Qwen3.8-27B 以 16,734 点赞、695 万下载断层领先，其社区量化版本（unsloth、ISTA-DASLab）同样霸榜。生成式内容方面，Qwen-Image-2.1 与 LTX-2.5 视频模型引发大量衍生创作（换脸 LoRA、ComfyUI 单文件版本下载均破百万）。DeepSeek-V4.1-Flash 作为新一代轻量旗舰多模态模型表现强劲。此外，三值量化（Ternary-Bonsai-2）与 GSQ-RCO 混合精度量化成为本周本地部署的两大技术热点。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen 官方 | 👍 16,734 | ⬇️ 6,950,834
  本周绝对王者，多模态对话旗舰，几乎决定了整个社区衍生生态的方向。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — DeepSeek | 👍 3,986 | ⬇️ 748,482
  轻量级多模态旗舰 Flash 版，高性价比路线延续，下载量持续攀升。

- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)** — 星辰 AGI | 👍 1,826 | ⬇️ 48,705
  29B 参数、A4B 激活的 MoE 对话模型，推理成本极低，国产开源新势力。

- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)** — Altworld | 👍 808 | ⬇️ 8,996
  基于 Qwen3.5 文本骨干的写作风格微调，主打文学化生成。

- **[orcarouter/OrcaSAQ-2-27B](https://huggingface.co/orcarouter/OrcaSAQ-2-27B)** — orcarouter | 👍 248 | ⬇️ 2,728
  Qwen3.8 的 vLLM 优化推理版本，面向高吞吐部署场景。

### 🎨 多模态与生成（图像、视频、音频）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 👍 5,872 | ⬇️ 1,588,619
  全能视频生成模型（文生视频/图生视频/视频编辑），本周点赞第一的生成模型。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Qwen | 👍 2,793 | ⬇️ 76,938
  官方图像生成+编辑双能力底座，衍生生态（LoRA、ComfyUI、GGUF）全面开花。

- **[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)** — Comfy-Org | 👍 891 | ⬇️ 5,376,977
  ComfyUI 官方打包版，下载量榜单前列，说明工作流用户基数巨大。

- **[XingChen-AGI/TeleOCR](https://huggingface.co/XingChen-AGI/TeleOCR)** — 星辰 AGI | 👍 1,235 | ⬇️ 31,584
  基于 Qwen2.5-VL 的专业 OCR 模型，垂直场景实用性拉满。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** — TaichuAI | 👍 2,571 | ⬇️ 12,194
  9B 视觉语言模型，主打空间推理，小尺寸强能力获社区高度认可。

- **[XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)** — 小米 | 👍 602 | ⬇️ 12,758
  MiMo V2.6 蒸馏到 Qwen 骨干的 9B 多模态模型，端侧推理友好。

- **[akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA)** — akatz-ai | 👍 222 | ⬇️ 10,031
  MiniMax-H3 视频模型的换脸 LoRA，视频编辑热门玩法。

- **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)** — Alissonerdx | 👍 1,077 | ⬇️ 173,323
  基于 Qwen-Image-2.1-Edit 的换脸 LoRA，社区图像编辑刚需体现。

### 🔧 专用模型

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations | 👍 4,871 | ⬇️ 0
  “System-One 校准决策”分类模型，周点赞第二但零下载，话题性大于实用性，值得留意。

- **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)** — NVIDIA | 👍 604 | ⬇️ 40,936
  说话人分离（diarization）模型，Nemotron 音频管线再扩充。

- **[fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide)** — fastino | 👍 291 | ⬇️ 38,386
  GLiNER 2.5 的意图/决策分类变体，零样本信息抽取工具链热门。

- **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)** — Contrastive-LM | 👍 628 | ⬇️ 2,720
  对比学习训练的 8B 验证器/重排器，RAG 与推理管线新选择。

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** — Cloudflare | 👍 382 | ⬇️ 18
  基于 Qwen3.5 的边缘推理多模态模型，Cloudflare 入局开源引人关注。

- **[SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1)** — SupersonicLabs | 👍 345 | ⬇️ 2,556
  多语言决策分类模型。

- **[PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE)** — PSRben | 👍 362 | ⬇️ 305
  学术研究（arXiv:2609.33325）图像分类模型。

### 📦 微调与量化

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth | 👍 4,794 | ⬇️ 6,271,224
  Qwen3.8-27B 标准量化包，本地部署首选，下载量逼近原版。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab | 👍 1,883 | ⬇️ 1,679,425
  GSQ+RCO 混合精度量化，前沿压缩技术落地代表。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — ISTA-DASLab | 👍 433 | ⬇️ 952,084
  同技术路线的 Flash-Next 剪枝量化版，权重瘦身研究热门。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF)** — ISTA-DASLab | 👍 184 | ⬇️ 148,142
  上述系列的 Coder 专精版本。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — prism-ml | 👍 2,335 | ⬇️ 3,766,691
  三值（2-bit）量化 27B 模型，极低显存跑大模型，下载量惊人。

- **[DavidAU/Qwen3.8-27B-TURBO-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU | 👍 1,339 | ⬇️ 1,817,224
  经典 DavidAU 风格“融合怪”微调：无审查+代码强化，社区口味依旧。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — abenzerps | 👍 2,720 | ⬇️ 1,303,476
  Qwen-Image-2.1 无审查 GGUF 版，ComfyUI 生态内需求巨大。

- **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)** — Viggle | 👍 504 | ⬇️ 217,638
  官方级 Turbo 加速 LoRA，大幅降低推理步数。

- **[orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF)** — orcarouter | 👍 235 | ⬇️ 8,412
  网络安全方向的无审查微调。

- **[ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ukisai/Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF)** — ukisai | 👍 190 | ⬇️ 231,149
  社区对 GSQ-RCO 技术的复刻应用。

---

## 📊 生态信号

**Qwen 家族统治力惊人**：榜单 30 席中约三分之二直接或间接基于 Qwen（3.8、3.5、Image-2.1、2.5-VL），Qwen 已成为事实上的开源底座标准，其发布节奏直接决定社区衍生滞后周期（本周边生品已密集落地）。

**量化技术进入新阶段**：传统 GGUF 之外，GSQ-RCO 混合精度和三值量化（Ternary-Bonsai-2，下载 376 万）成为研究热点，2-bit 级压缩让 27B 模型在消费级硬件可跑，本地部署门槛持续下降。

**开源权重持续主导**：DeepSeek、Qwen、Lightricks、NVIDIA、小米、Cloudflare 均以开放权重参与竞争，闭源优势进一步收窄；同时“无审查（Uncensored）”微调与换脸 LoRA 的高下载量，反映社区对内容边界自由度的持续需求。生成内容工具链（ComfyUI 下载 537 万）仍是最大流量入口。

---

## 💎 值得探索

1. **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 当前开源生态的中心节点，无论直接使用还是研究其量化/蒸馏路线，都是必看基准；配合 [unsloth GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) 可快速本地体验。

2. **[Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 三值量化是极端压缩的前沿方向，376 万下载证明其实用性，适合关注本地部署与模型压缩的研究者。

3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 覆盖文/图/视频全模态的视频生成模型，本周生成类点赞第一，内容创作者和工作流开发者的重点观察对象。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*