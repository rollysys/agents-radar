# Hugging Face 热门模型日报 2026-10-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-30 04:53 UTC

---

# 📰 Hugging Face 热门模型日报（2026-10-30）

## 今日速览

今日榜单由 **Qwen3.8-27B** 以近 1.9 万点赞、750 万下载的碾压性数据领跑，多模态方向持续火热。**LTX-2.5** 视频生成模型和 Meta 的 **SAM3** 分割模型分别拿下近 1 万点赞与 5,400+ 点赞，生成式视觉赛道竞争白热化。**DeepSeek-V4.1-Flash** 衍生生态爆发——GSQ 量化、abliterated、去审查 FP8 等社区版本齐齐上榜，显示其已成为本地部署的新晋“底模之王”。此外，OCR 赛道迎来百度 Unlimited-OCR-2 与 MiniCPM-OCR 双雄并进。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  作者：Qwen | 👍 18,693 | ⬇️ 7,509,924
  本周绝对王者，27B 多模态对话模型，性能与体量平衡出色，下载量断层领先。

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)**
  作者：deepseek-ai | 👍 3,889 | ⬇️ 131,062
  DeepSeek 最新 Flash 版 VLM，速度快、社区衍生版本众多，正快速成为本地部署首选基座。

- **[Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B)**
  作者：Nanbeige | 👍 782 | ⬇️ 9,655
  国产 33B Llama 架构语言模型，中等规模实用性获社区认可。

- **[RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint)**
  作者：RecursiveSI | 👍 1,246 | ⬇️ 16,598
  新兴对话模型，点赞/下载比亮眼，社区口碑驱动上榜。

- **[LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B)**
  作者：LiquidAI | 👍 494 | ⬇️ 15,885
  超轻量级文本模型，Liquid 架构代表，适合端侧部署。

- **[XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B)**
  作者：XHToken | 👍 912 | ⬇️ 10,163
  4B 小钢炮 LLM，性价比路线，GGUF 版本同样上榜。

- **[mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B)**
  作者：mistralai | 👍 1,236 | ⬇️ 278
  1T 参数 MoE 巨兽（激活 52B），下载低但热度高，属“看多下少”的旗舰型发布。

- **[Diffuspace/Clover-35B-A3B-Preview](https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview)**
  作者：Diffuspace | 👍 149 | ⬇️ 1,030
  新兴 MoE 架构预览版（35B-A3B），值得关注早期生态。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  作者：Lightricks | 👍 9,876 | ⬇️ 2,269,999
  今日点赞榜首之一，图生视频/文生视频全能选手，下载超 227 万，开源视频生成里程碑。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)**
  作者：facebook | 👍 5,440 | ⬇️ 1,884,719
  Meta 第三代分割模型，支持视频掩码生成，视觉基础工具级发布。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)**
  作者：black-forest-labs | 👍 2,062 | ⬇️ 832,197
  FLUX 3 小尺寸图像生成/编辑模型，专为 ComfyUI 优化，本地生图新宠。

- **[fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3)**
  作者：fishaudio | 👍 1,107 | ⬇️ 28,162
  多说话人 TTS 模型，情感表现力强，配音场景刚需。

- **[OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT)**
  作者：OpenMOSS-Team | 👍 827 | ⬇️ 14,950
  复旦 MOSS 团队文生图 SFT 模型，国产学术力量回流图像生成。

- **[nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B)**（语音）
  作者：nvidia | 👍 425 | ⬇️ 4,276
  MoE 语音转写模型（30B-A4B），Nemotron 家族向 ASR 垂域扩张的信号。

- **[LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B)** / **[LiquidAI/LFM3-VL-2B](https://huggingface.co/LiquidAI/LFM3-VL-2B)**
  作者：LiquidAI | 👍 211 / 169 | ⬇️ 1,814 / 4,193
  LFM3 全模态与视觉语言小模型，端侧 omni 方向早期布局。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2)**
  作者：baidu | 👍 415 | ⬇️ 18,141
  “无限制”OCR 模型，长文档/复杂版式处理能力突出。

- **[openbmb/MiniCPM-OCR-1.0](https://huggingface.co/openbmb/MiniCPM-OCR-1.0)**
  作者：openbmb | 👍 331 | ⬇️ 1,597
  面向文档解析的轻量 OCR，与百度模型形成 OCR 赛道对垒。

- **[ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder)**
  作者：ccore | 👍 287 | ⬇️ 12,237
  基于 Qwen3.5 的 Three.js/3D 代码专精模型，垂直代码方向新尝试。

- **[HuggingFaceBio/Carbon-X](https://huggingface.co/HuggingFaceBio/Carbon-X)**
  作者：HuggingFaceBio | 👍 271 | ⬇️ 2,808
  DNA/基因组语言模型，生物科学专用，Qwen3 架构迁移至生命科学。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)**
  作者：ISTA-DASLab | 👍 479 | ⬇️ 1,578,937
  GSQ+RCO 混合精度量化，下载近 158 万，本周量化圈最大赢家。

- **[abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized)**
  作者：abenzerps | 👍 5,324 | ⬇️ 2,172,670
  Qwen-Image 2.1 去审查量化版，GGUF + ComfyUI 组合引爆本地生图社区。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-…-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  作者：DavidAU | 👍 2,228 | ⬇️ 1,726,051
  经典“魔改全家桶”：创意写作 + 编码 + MTP，下载 172 万验证 DavidAU 流量号召力。

- **[orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF)** & **[dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8)**
  作者：orcarouter / dealignai | 👍 346 / 478 | ⬇️ 28,763 / 9,787
  DeepSeek V4.1 Flash 的“去对齐”双版本，社区对可定制性的持续需求。

- **[unsloth/NVIDIA-Nemotron-3.5-Bolt-E4B-GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3.5-Bolt-E4B-GGUF)** & **[nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB)**
  作者：unsloth / nvidia | 👍 150 / 259 | ⬇️ 90,640 / 57,228
  官方 + unsloth 双路径量化，4GB 即可跑的端侧模型。

- **[XHToken/Spark-X2.6-4B-GGUF](https://huggingface.co/XHToken/Spark-X2.6-4B-GGUF)**
  作者：XHToken | 👍 244 | ⬇️ 179,258
  Spark-X2.6 官方 GGUF，下载远超原版，llama.cpp 生态需求旺盛。

- **[LiconStudio/Minimax-H3-VBVR](https://huggingface.co/LiconStudio/Minimax-H3-VBVR)**
  作者：LiconStudio | 👍 142 | ⬇️ 6,189
  基于 MiniMax-H3 的视频推理 SFT 微调，视频推理数据集驱动的新方向。

---

## 🌐 生态信号

**Qwen 家族**依旧是开源生态的绝对中心：Qwen3.8-27B 霸榜，Qwen-Image 2.1 量化版和 Qwen3.5 微调衍生品多点开花，形成“原版引爆 → 量化/去审查/垂直微调接力”的完整传播链。**DeepSeek V4.1-Flash** 是本周第二大生态极——单个底模衍生出 GSQ 量化、abliterated、FP8 去审查等至少 4 个上榜变体，其 GSQ 版 158 万下载表明极致量化技术（GSQ/RCO 混合精度）已成为本地部署的关键竞争点。开源权重持续压倒性胜利：榜单前 30 几乎全部开放权重，闭源阵营缺席。值得注意的垂直趋势：OCR（百度 + MiniCPM）、视频推理 SFT（VBVR）、生物 DNA 模型（Carbon-X）显示开源社区正从通用能力转向垂直纵深。MoE 架构（Mistral 1T-A52B、Clover 35B-A3B、Nemotron 30B-A4B）密集上新，小激活量大总参数已成主流设计范式。

---

## 💡 值得探索

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 本周最强视频生成发布，图/文/视频多输入全能，227 万下载证明工程成熟度，做视频内容创作者值得第一时间上手。

2. **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)** — GSQ+RCO 代表量化技术前沿，如果你关注本地部署的精度-体积平衡，这是研究下一代量化方案的最佳样本。

3. **[facebook/sam3](https://huggingface.co/facebook/sam3)** — 视频级分割基础模型，工具属性极强，可无缝嵌入数据标注、视频编辑等流水线，188 万下载说明生态适配已就绪。

---

*数据来源：Hugging Face Hub 周榜（2026-10-30）*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*