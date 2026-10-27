# Hugging Face 热门模型日报 2026-10-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-27 04:11 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-10-27**

---

## 📰 今日速览

本周榜单由 **Qwen3.8-27B**（18,469 赞）与 **LTX-2.5**（9,473 赞、超 211 万下载）双雄领跑，多模态生成持续爆发。DeepSeek-V4.1-Flash 发布仅十天便衍生出完整的量化（GSQ-RCO-GGUF 近 90 万下载）、去审查（abliterated/UNCENSORED）社区生态。视频生成方面 LTX-2.5 与 FastH3-Omni 双线走热，ComfyUI 工作流适配已成发布标配。此外，MOSS-Image 开源图像模型经 Comfy-Org 打包后下载量突破 244 万，是本周最亮眼的开源图像新秀。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 👍 / ⬇️ | 一句话点评 |
|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,469 / 7,608,285 | 本周绝对霸主，多模态对话旗舰，760 万下载印证 Qwen 系列统治级生态 |
| [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 605 / 2,787 | 国产 33B Llama 架构新秀，社区口碑发酵中 |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 929 / 8,470 | 新锐对话模型，发布即获 unsloth 官方 GGUF 跟进，热度认证 |
| [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 676 / 4,726 | 端侧小钢炮 4B 模型，配套 GGUF 同步上榜，本地部署友好 |
| [ornith-ai/Ornith-1.5-122B](https://huggingface.co/ornith-ai/Ornith-1.5-122B) | ornith-ai | 190 / 60,210 | Qwen3.5-MoE 架构 122B 大体量模型，下载量远超点赞，实用派 |
| [KRAFTON/Raon-1-mini-preview](https://huggingface.co/KRAFTON/Raon-1-mini-preview) | KRAFTON | 199 / 1,450 | 韩国游戏巨头 KRAFTON 的首个小模型预览版，跨界入场值得关注 |

### 🎨 多模态与生成（图像、视频、音频）

| 模型 | 作者 | 👍 / ⬇️ | 一句话点评 |
|---|---|---|---|
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 9,473 / 2,117,147 | 本周视频生成之王，图生视频/文生视频全能，211 万下载 |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | Meta | 5,172 / 1,849,633 | SAM3 支持 video 分割，视觉基础工具级发布 |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,109 / 2,207,486 | Qwen-Image 去审查量化版，220 万下载显示社区对图像“自由度”需求巨大 |
| [Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy-Org | 485 / 2,442,344 | MOSS-Image 官方 ComfyUI 打包版，下载榜冠军级别 |
| [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS | 763 / 12,114 | 复旦 MOSS 系开源文生图 SFT 版，与 Base 版双线上榜 |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein) | BFL | 1,710 / 700,652 | Flux 3 小尺寸版 ComfyUI 专用，轻量图像编辑利器 |
| [OpenMOSS-Team/MOSS-Image-Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base) | OpenMOSS | 572 / 8,080 | MOSS-Image 基座模型，开源社区微调的新起点 |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 1,041 / 23,216 | 多说话人 TTS 新旗舰，戏剧化语音表现力强 |
| [MiniMaxAI/MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) | MiniMaxAI | 388 / 8,782 | MiniMax 轻量多模态闪速版，主打高效推理 |
| [FastVideo/FastH3-Omni-Comfy](https://huggingface.co/FastVideo/FastH3-Omni-Comfy) | FastVideo | 164 / 264,401 | 参考图生视频 + ComfyUI 生态，下载表现抢眼 |
| [briaai/Fibo-2.0-dev](https://huggingface.co/briaai/Fibo-2.0-dev) | briaai | 167 / 1,267 | 商用安全图像编辑模型 dev 版，Comfy-Org 已跟进打包 |

### 🔧 专用模型

| 模型 | 作者 | 👍 / ⬇️ | 一句话点评 |
|---|---|---|---|
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | Google | 2,951 / 231,262 | Gemma 系嵌入模型二代，RAG 应用刚需，好评如潮 |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | DeepSeek | 3,213 / 95,889 | 图文多模态 + 文本生成双任务，本周衍生生态最活跃的基座 |
| [mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M) | Mistral | 400 / 10,971 | Mistral 出人意料的时序预测基础模型，开辟新赛道 |
| [HuggingFaceBio/Carbon-X](https://huggingface.co/HuggingFaceBio/Carbon-XBio) | HF Bio | 210 / 1,128 | Qwen3 架构 DNA 基因组模型，生命科学垂直方向 |
| [datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr) | datalab-to | 440 / 5,008 | CPU 友好的 ONNX OCR 模型，轻量文档处理实用之选 |
| [InternScience/Sage-A1.5](https://huggingface.co/InternScience/Sage-A1.5) | InternScience | 318 / 5,235 | MoE 架构科学推理模型，学术方向探索 |

### 📦 微调与量化

| 模型 | 作者 | 👍 / ⬇️ | 一句话点评 |
|---|---|---|---|
| [DavidAU/Qwen3.8-27B-TURBO-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,119 / 1,687,633 | DavidAU 一贯的“缝合怪”风格：Heretic 去审查 + 代码强化，168 万下载 |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) | ISTA-DASLab | 346 / 891,147 | GSQ-RCO 新型混合精度量化，学术实验室的极限压缩实践 |
| [unsloth/flint-GGUF](https://huggingface.co/unsloth/flint-GGUF) | unsloth | 272 / 125,188 | unsloth 火速跟进新模型的量化，flint 热度风向标 |
| [dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8) | dealignai | 391 / 7,557 | FP8 去审查版，对齐解除需求持续旺盛 |
| [orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF) | orcarouter | 239 / 9,022 | DeepSeek V4.1 abliterated 社区版，llama.cpp 本地运行 |
| [XHToken/Spark-X2.6-4B-GGUF](https://huggingface.co/XHToken/Spark-X2.6-4B-GGUF) | XHToken | 166 / 69,669 | 官方自发 GGUF，小模型量化下沉已成标配动作 |

---

## 🌡️ 生态信号

**Qwen 家族势头无可撼动**——Qwen3.8-27B 独占榜首，且榜单中 Ornith、Sage、Carbon-X、DavidAU 等至少 5 个模型直接基于 Qwen 架构微调，形成“基座—微调—量化”完整扩散链。**DeepSeek V4.1 发布即引爆社区**，一周内涌现 GSQ-RCO、abliterated、UNCENSORED-FP8 等多种量化与去审查变体，说明其基座质量获得本地社区高度认可。**开源权重持续压倒性优势**：本周 Top 30 全部为开放权重发布，ComfyUI 生态（MOSS-Image、Flux-3、Fibo、FastH3）单模型下载量动辄数十万至数百万，工作流工具已成分发第一入口。量化技术也在迭代——传统 GGUF 之外，GSQ-RCO、FP8 等新格式开始抢占货架。

---

## 💎 值得探索

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 本周最高赞 + 高下载双认证的视频生成模型，支持图生视频/视频转视频全模式，内容创作者与研究者都值得第一时间上手。

2. **[ISTA-DASLab/DeepSeek-V4.1-Flash-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)** — GSQ-RCO 混合精度量化代表前沿压缩技术，近 90 万下载，是研究“大模型如何在消费级硬件落地”的最佳样本。

3. **[mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M)** — 时序预测基础模型是罕见的新赛道，209M 轻量易跑，对金融、运维、供应链等场景的从业者可能是差异化利器。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*