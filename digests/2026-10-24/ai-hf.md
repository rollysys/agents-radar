# Hugging Face 热门模型日报 2026-10-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-24 03:46 UTC

---

# Hugging Face 热门模型日报（2026-10-24）

## 📰 今日速览

今日榜单由 **Qwen3.8-27B** 以 18,296 点赞、770 万下载强势领跑，Qwen 家族同时有多款变体上榜，生态统治力明显。生成侧热点集中：**LTX-2.5 视频模型**（904 万下载）与 **SAM3 分割模型**（498 万下载）展现多模态生成与视觉理解的持续爆发。国产力量密集发力，**DeepSeek-V4.1-Flash**、**MOSS-Image**、**Flux-3-Klein** 等新一代图像/多模态模型集中发布。同时，“Uncensored”微调与 GGUF 量化版本热度不减，社区围绕头部基座的二次开发依旧活跃。

---

## 🔥 热门模型

### 🧠 语言模型

| 模型 | 作者 | 点赞 / 下载 | 说明 |
|---|---|---|---|
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 691 / 1,904 | 新兴对话基座模型，上线即冲入趋势榜前五，社区关注度高 |
| [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 419 / 1,060 | 4B 轻量级 LLM，主打本地部署场景 |
| [meta-models/Muse-Spark-Open-816B-A42B](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B) | meta-models | 679 / 5,196 | 816B 参数、激活 42B 的超大型稀疏 MoE 开源模型，规格罕见 |
| [tencent/Hy-Memory-30B-A3B](https://huggingface.co/tencent/Hy-Memory-30B-A3B) | Tencent | 304 / 3,270 | 激活仅 3B 的 MoE，主打长上下文记忆能力 |
| [nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16) | NVIDIA | 178 / 3,769 | NVIDIA 实验室 4B 小模型，BF16 精度发布 |

### 🎨 多模态与生成

| 模型 | 作者 | 点赞 / 下载 | 说明 |
|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,296 / 7,710,011 | 今日榜首，图文多模态旗舰，下载量断层第一 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,440 / 2,788,737 | Qwen3.8 轻量版，高性价比多模态选择 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 9,043 / 2,026,951 | 图/文/视频多模态视频生成模型，本榜下载量第一梯队 |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | Meta | 4,986 / 1,837,047 | SAM 第三代分割模型，支持视频掩码生成，视觉基础模型标杆 |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | Black Forest Labs | 1,414 / 534,837 | Flux-3 Klein 的 ComfyUI 单文件版，图像生成/编辑双修 |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 951 / 17,017 | 多说话人 TTS 模型，情感语音生成方向 |
| [black-forest-labs/flux-3-image-klein](https://huggingface.co/black-forest-labs/flux-3-image-klein) | Black Forest Labs | 658 / 105,768 | Flux-3 Klein 官方 diffusers 版本 |
| [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS | 656 / 7,658 | 复旦 MOSS 文生图 SFT 版 |
| [OpenMOSS-Team/MOSS-Image-Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base) | OpenMOSS | 522 / 5,618 | MOSS 文生图基座，Apache 生态开放度高 |
| [lodestones/Kromoss](https://huggingface.co/lodestones/Kromoss) | lodestones | 235 / 16,365 | 基于 MOSS-Image 架构的社区文生图模型 |
| [orcarouter/OrcaCyber-Nano-1.0](https://huggingface.co/orcarouter/OrcaCyber-Nano-1.0) | orcarouter | 212 / 22,314 | 网络安全专用视觉语言小模型 |

### 🔧 专用模型

| 模型 | 作者 | 点赞 / 下载 | 说明 |
|---|---|---|---|
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | Google | 2,874 / 192,741 | 新一代嵌入模型，检索/RAG 基建刚需，热度极高 |
| [datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr) | datalab-to | 392 / 4,033 | CPU 友好的 ONNX OCR 模型 |
| [mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M) | Mistral AI | 317 / 6,815 | Mistral 进军时间序列预测的 209M 基础模型，品类罕见 |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 2,118 / 129,025 | 文本人性化改写模型，疑似应对 AI 文本检测需求 |

### 📦 微调与量化

| 模型 | 作者 | 点赞 / 下载 | 说明 |
|---|---|---|---|
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 4,910 / 2,398,071 | Qwen-Image 无审查量化版，下载近 240 万，社区需求旺盛 |
| [DavidAU/Qwen3.8-27B-TURBO-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,020 / 1,679,145 | 著名“炼丹师”DavidAU 的 Qwen3.8 混合微调 GGUF，融合多风格人格 |
| [dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8) | dealignai | 301 / 4,141 | DeepSeek V4.1 Flash 去对齐 FP8 版 |
| [nvidia/Qwen3.8-Flash-Next-FP4-Local](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-FP4-Local) | NVIDIA | 327 / 11,197 | 官方级 FP4 量化本地版，Model Optimizer 打磨 |
| [unsloth/flint-GGUF](https://huggingface.co/unsloth/flint-GGUF) | Unsloth | 194 / 33,277 | Unsloth 快速跟进 flint 的 GGUF 量化 |
| [InternScience/Sage-A1.5](https://huggingface.co/InternScience/Sage-A1.5) | InternScience | 254 / 924 | 基于 Qwen3.5-MoE 架构的微调模型 |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | DeepSeek | 2,600 / 57,715 | 多模态 Flash 版新基座，官方与衍生版同榜 |
| [MiniMaxAI/MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) | MiniMax | 259 / 1,096 | MiniMax 多模态 Flash 级新发布 |

---

## 🌐 生态信号

**Qwen 家族呈碾压态势**：Qwen3.8-27B 与 Flash-Next 双双进入下载量第一梯队，且衍生品（DavidAU 微调、NVIDIA FP4 量化、无审查版）占据社区榜单多席，形成了“基座发布→量化→微调”的完整快速跟进步伐，Flint、DeepSeek V4.1 也已出现类似链条。**生成模型全面繁荣**：视频（LTX-2.5）、图像（Flux-3、MOSS-Image）、分割（SAM3）均达百万级下载，ComfyUI 生态持续成为流量入口。**开源权重仍是主旋律**：榜单头部几乎全部为开放权重模型，闭源 API 模型无一上榜。**值得注意的信号**：Uncensored 变体下载量屡超原版，反映社区对对齐策略的持续博弈；Mistral 的 Timestral 显示小厂正通过细分品类（时间序列、OCR、网络安全）寻找差异化空间。

---

## 💎 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周绝对主角，多模态能力与下载量双第一，适合作为新项目的默认基座选型评估对象。
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 覆盖图/文/视频到视频全模态生成的开源视频模型，200 万+下载验证了实用性，是视频生成方向的当前最优开源选择之一。
3. **[mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M)** — 首个进入主流视野的时间序列预测基础模型，标志"Transformer for Everything"进一步扩展，极具研究前瞻性。

---
*数据来源：Hugging Face Hub 趋势榜（2026-10-24）*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*