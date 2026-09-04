# Hugging Face 热门模型日报 2026-09-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-04 03:31 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026-09-04**

---

## 📌 今日速览

Qwen3.8 家族全面爆发，[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) 以 13,842 点赞、525 万下载成为本周最受瞩目的开源模型，其 GGUF 量化版下载量更突破 955 万。智谱 [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) 系列同步上线，旗舰版与 Flash 版形成“主力+轻量”双线布局。视频生成领域迎来两强：[LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) 和 [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) 均获数百万下载。“去审查/abliterated”社区微调持续活跃，Qwen3.8 与 GLM-5.3 均已出现大量 Uncensored 变体。

---

## 🔥 热门模型

### 🧠 语言模型

| 模型 | 作者 | 点赞 / 下载 | 简介 |
|---|---|---|---|
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,842 / 5.25M | 本周现象级开源多模态 LLM，社区生态（量化、微调）最完整 |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,618 / 151K | 智谱旗舰 MoE 模型（glm_moe_dsa 架构），发布即上榜 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,020 / 518K | GLM-5.3 轻量版，下载量反超旗舰，说明“Flash”档位是实用主力 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,816 / 263K | 新一代 Flash 预览版（qwen4_exp 架构），高点赞预示下一代方向 |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 417 / 4.4K | 腾讯混元第四代预览版，关注度先行，下载待释放 |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 168 / 1.5K | 社区小参数 LLM，轻量本地部署选项 |

### 🎨 多模态与生成

| 模型 | 作者 | 点赞 / 下载 | 简介 |
|---|---|---|---|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,866 / 5.09M | 高人气文生视频/图生视频模型，本周下载冠军级生成模型 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,699 / 1.29M | 全能视频生成（图/文/视频到视频），开源生态最活跃的视频模型之一 |
| [DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 557 / 54.6K | DeepSeek V4 视觉实验版，抢先预览其多模态能力 |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 398 / 3.9K | 社区 TTS 新作，语音赛道持续有新鲜血液 |
| [openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,136 / 19.9M | 常青树零样本图像分类模型，工业界基础设施级存在 |

### 🔧 专用模型

| 模型 | 作者 | 点赞 / 下载 | 简介 |
|---|---|---|---|
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,461 / 246M | 嵌入领域事实标准，周下载 2.46 亿冠绝全站 |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 369 / 46.9K | 时序预测基础模型升级到 3.0，企业预测场景刚需 |
| [pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 208 / 11.5K | 面向语音对话代理的专用 LLM，实时语音 AI 赛道升温信号 |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 181 / 12.4K | Meta 多语言语音预训练模型，低资源语言覆盖广 |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) / [distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) / [gpt2](https://huggingface.co/openai-community/gpt2) | google-bert 等 | 2,910 / 58.6M；1,092 / 6.76M；3,606 / 14.1M | 经典模型仍为生产与教学主力 |

### 📦 微调与量化

| 模型 | 作者 | 点赞 / 下载 | 简介 |
|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,449 / 9.55M | 本站下载之王，本地部署 Qwen3.8 的首选量化版 |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 762 / 536K | Flash-Next 的抢先量化，速度惊人 |
| [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 348 / 75.2K | GLM-5.3 生态在发布数日内即完成量化跟进 |
| [HauhauCS/Qwen3.8-27B-Uncensored-...-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 900 / 1.34M | 去审查+MTP 加速的社区魔改版，下载破百万 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,060 / 849K | MLX+GGUF 双格式 abliterated 版，Mac 用户友好 |
| [orcarouter 三连](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)（[Flash-Next 版](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)、[GLM-5.3 版](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8)） | orcarouter | 685 / 262K；211 / 85K；165 / 4.5K | 系统性产出两大新模型家族的去审查版，形成“发布→去审查”流水线 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 248 / 100K | 学术前沿量化方案（GSQ+RCO 混合精度），研究价值高 |
| [DavidAU/...TURBO-Fable-Cold-Fusion...](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 139 / 39.6K | 典型 DavidAU 风格“融合+去审查+编码强化”实验微调 |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) / [FastVideo-FastH3-4-step](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | OpenVDN / FastVideo | 142 / 0；256 / 0 | MiniMax-H3 的社区微调与 4 步蒸馏加速版，视频生态微调刚起步 |

---

## 📊 生态信号

**家族格局**：本周呈现 Qwen3.8、GLM-5.3、MiniMax-H3 三足鼎立。Qwen3.8 生态最深——unsloth 量化、ISTA-DASLab 学术量化、orcarouter/DavidAU 去审查微调在一周内全部就位，堪称开源社区响应速度的教科书案例。GLM-5.3 发布数日即完成“旗舰+Flash+GGUF+FP8 去审查”全链路，国际社区对智谱的接纳度显著提升。

**趋势观察**：① 开源权重仍是主旋律，且“Flash/轻量档”下载普遍反超旗舰（GLM-5.3-Flash 518K vs 旗舰 151K），推理成本主导实际采用；② abliterated/uncensored 微调已从边缘玩法变成规模化产业，两大新模型均被快速“去审查”；③ 视频生成（MiniMax-H3、LTX-2.5）合计下载近 650 万，开源视频正复制去年开源 LLM 的爆发路径；④ 嵌入与经典模型（MiniLM 2.46 亿下载）仍是隐藏的生产底座。

---

## 💎 值得探索

1. **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周综合最强：多模态能力 + 最完整的量化/微调生态，无论研究、本地部署（配 [unsloth GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)）还是二次开发都是当前最佳起点。

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 开源视频生成的头部选手，且已有 [FastVideo 4 步加速版](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)可大幅降低推理成本，适合想低成本试水高质量视频生成的工作流。

3. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GS...)** — 若你关注量化前沿，GSQ+RCO 混合精度方案代表了超越传统 GGUF 量化精度的学术方向，值得一读代码。

---

*数据来源：Hugging Face Hub 周榜（2026-09-04）*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*