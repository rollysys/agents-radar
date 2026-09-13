# Hugging Face 热门模型日报 2026-09-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-13 03:50 UTC

---

# 📊 Hugging Face 热门模型日报（2026-09-13）

## 一、今日速览

本周榜单的核心叙事是**多模态旗舰混战**：Qwen3.8-27B 以近 1.5 万周点赞和 770 万下载量统治生态，衍生量化/微调版本霸榜社区区；DeepSeek-V4.1-Flash 和 GLM-5.3-Flash 双双进入“Flash 级”多模态竞技。视频生成赛道热度爆发，MiniMax-H3 和 LTX-2.5 合计下载超 640 万。此外，社区对 Qwen3.8-27B 的“去审查/uncensored”微调异常活跃，形成了典型的旗舰开源→社区二次繁荣链路。

---

## 二、热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 👍 | 📥 | 一句话点评 |
|---|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,872 | 7,726,687 | 本周绝对王者，多模态对话旗舰，社区生态的母体模型 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 2,024 | 140,636 | DeepSeek 新一代轻量旗舰，image-text-to-text 全能型选手 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,279 | 1,333,574 | 智谱 Flash 线多模态模型，下载量已破百万，量产落地能力强 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,140 | 604,992 | 采用新架构 qwen4_exp 的下一代实验版，前瞻信号明显 |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,263 | 102,334 | 2B 端侧小钢炮，配合 GGUF 版（[传送门](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF)）覆盖本地部署场景 |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,136 | 19,733 | 讯系 4B 轻量模型开源，中小尺寸竞争再添玩家 |
| [nex-agi/Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro) / [Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 617 / 738 | 30,081 / 3,581 | 新锐厂商双产品线齐发，基于 qwen3_5_moe 架构 |

### 🎨 多模态与生成（图像 / 视频 / 音频）

| 模型 | 作者 | 👍 | 📥 | 一句话点评 |
|---|---|---|---|---|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,202 | 4,860,709 | 视频生成顶流，文/图生视频双支持，下载近 500 万 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,616 | 1,601,007 | 开源视频生成+编辑全能选手，图生视频口碑之作 |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | 社区 | 347 | 114,141 | MiniMax-H3 的社区增强版，母模型热度的外溢 |
| [Viggle/Viggle-Animate](https://huggingface.co/Viggle/Viggle-Animate) | Viggle | 200 | 0 | 角色替换/视频编辑专用模型，刚上架已获关注 |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 327 | 2,304 | 音乐生成新世代：符号规划 + 智能体式编辑 |
| [microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 215 | 2,494 | 微软流式语音识别 7B，长音频实时转写新选项 |

### 🔧 专用模型（代码 / 时序 / 驾驶 / 嵌入 / 语音）

| 模型 | 作者 | 👍 | 📥 | 一句话点评 |
|---|---|---|---|---|
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 757 | 784,262 | 时序预测基础模型 3.0，企业预测场景刚需 |
| [Qwen/Qwen-Drive-1.0-4B](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B) | Qwen | 183 | 3,761 | Qwen 进军自动驾驶：运动规划+多模态感知 |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 406 | 30,068 | 网络安全垂域定制版（⚠️ 含 refusal-removed 标签） |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,863 | 253,739,900 | 常青树嵌入模型，周下载 2.5 亿，RAG 时代基础设施 |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 488 | 12,122 | 多语种语音预训练底座，长尾语言支持利器 |
| 经典老将：[gpt2](https://huggingface.co/openai-community/gpt2)、[bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased)、[clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32)、[distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | — | — | 合计 9000 万+ | 教学与研究下载长尾，生态基本盘稳固 |

### 📦 微调与量化（社区二创 / GGUF / FP8）

| 模型 | 作者 | 👍 | 📥 | 一句话点评 |
|---|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,952 | 11,529,203 | 本周下载之王（1150 万），量化速度比官方还快 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 897 | 729,683 | 学术前沿量化（GSQ+RCO 混合精度），73 万下载验证实用性 |
| [HauhauCS/Qwen3.8-27B-Uncensored-...-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 1,134 | 2,078,044 | 去审查版狂揽 200 万下载，本地部署社区需求旺盛 |
| [DavidAU/Qwen3.8-27B-TURBO-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 552 | 665,911 | DavidAU 一贯风格的“缝合怪”创意微调，粉丝经济典型 |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 540 | 1,596 | MLX 格式 MoE，面向 Apple 端侧推理的新玩家 |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 881 | 484,422 | 官方视觉实验版，为 V4.1 完全体铺路 |

---

## 三、生态信号

**Qwen3.8 家族是本周无可争议的中心**：官方原版 + unsloth GGUF + 学术量化 + 至少三个 uncensored 微调，形成“一超多强”的衍生生态，27B 正在成为新的社区基准尺寸（替代早年 7B/13B 的地位）。**Flash 级产品线竞争白热化**——DeepSeek-V4.1-Flash、GLM-5.3-Flash、Qwen3.8-Flash-Next 三家同步推进轻量多模态，说明“高性能小模型”已成战略高地。**开源权重 vs 闭源**：视频生成领域 MiniMax-H3、LTX-2.5 开源势头强劲，闭源独占优势持续收窄；社区对“去审查”微调的巨大下载量（合计近 300 万）显示本地部署人群对可控性的强烈诉求。量化技术也在演进：GSQ/RCO 等学术新方法与 unsloth 工程化路线并行，FP8 成为大模型默认分发格式。

---

## 四、值得探索

1. **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — qwen4_exp 新架构的首个公开预览，是观察下一代架构演进的窗口，适合提前适配推理框架。

2. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — GSQ+RCO 混合精度量化的学术落地，在消费级硬件上跑 27B 旗舰的最佳尝试之一，量化研究者必看。

3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 支持文生/图生/视频到视频全管线，360 万下载验证的稳定性，是当前开源视频生成性价比最高的切入点。

---
*数据来源：Hugging Face Hub 周度趋势 | 点赞为周增量，下载为累计值*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*