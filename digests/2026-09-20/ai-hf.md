# Hugging Face 热门模型日报 2026-09-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-20 03:59 UTC

---

# 📊 Hugging Face 热门模型日报
**日期：2026-09-20**

---

## 一、今日速览

Qwen3.8-27B 及其 Flash-Next 变体以近 1,500 万周下载量统治本周榜单，成为社区微调与量化的绝对核心底座。视频生成赛道爆发，MiniMax-H3 与 LTX-2.5 两款视频模型合计下载超 590 万。量化技术呈现新气象——ISTA-DASLab 的 GSQ-RCO 混合精度量化与 prism-ml 的三值（ternary）2-bit 方案双双冲上趋势榜。DeepSeek-V4.1-Flash 以 3,329 点赞显示开源多模态权重持续获社区热捧。

---

## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 👍 | 📥 | 一句话点评 |
|---|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,779 | 7,365,368 | 本周最具统治力的开源多模态底座，生态衍生模型数量第一 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,460 | 742,586 | Qwen 系新轻量旗舰（qwen4_exp 架构），高性价比之选 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,481 | 2,905,932 | GLM 5 代 Flash 版，多模态对话场景稳定输出 |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,600 | 389,555 | 2B 端侧小模型第五代，兼顾质量与部署成本 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,329 | 482,270 | DeepSeek 图文输入旗舰，社区“去对齐”微调已迅速跟进 |
| [meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,753 | 5,919,746 | 老牌长青模型，下载量依旧坚挺 |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 3,496 | 68,403 | 基于 Qwen3.5-MoE 的边缘推理专用模型，A3B 稀疏激活降低推理成本 |
| [TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B) | TokenRhythm | 969 | 11,692 | 面向 Agent 场景的 9B 微调模型，主打工具调用能力 |
| [internlm/Atria-Dawn-Preview](https://huggingface.co/internlm/Atria-Dawn-Preview) | internlm | 199 | 806 | 书生·新生代 GLM-MoE-DSA 架构预览，技术报告驱动（arXiv:2609.15818） |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 679 | 7,278 | 29B-A4B 稀疏 MoE 新架构试水作 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 👍 | 📥 | 一句话点评 |
|---|---|---|---|---|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,496 | 4,299,737 | 本周视频生成最大赢家，图文/文本到视频全能 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,457 | 1,607,815 | 图生视频/视频转视频主力模型，创作工具链生态成熟 |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 536 | 231,197 | 社区对 MiniMax-H3 的风格化增强版本 |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 884 | 15,446 | 音乐生成二代，新增符号化规划与 Agent 式编辑能力 |
| [tencent/AuK](https://huggingface.co/tencent/AuK) | tencent | 333 | 3,355 | 腾讯零样本 TTS + 声音克隆新品 |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 205 | 2,926 | 空间推理导向的轻量视觉语言模型 |

### 🔧 专用模型（代码、数学、医疗、嵌入、分类）

| 模型 | 作者 | 👍 | 📥 | 一句话点评 |
|---|---|---|---|---|
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 6,088 | 254,149,235 | 嵌入界“水电煤”，2.5 亿下载无人能敌 |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 605 | 0 | "system-one / calibrated-decisions"分类器，主打快速校准决策，关注度先于下载爆发 |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 226 | 0 | 基于 Qwen3.5 的 NLI 跨编码器新作 |
| [harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 442 | 0 | MLX 端侧结构化/并行解码实验模型，Apple Silicon 专用 |

### 📦 微调与量化（社区微调、GGUF、MLX）

| 模型 | 作者 | 👍 | 📥 | 一句话点评 |
|---|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,386 | 7,118,363 | unsloth 全量化档位 GGUF，本地部署首选 |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 1,257 | 1,516,960 | 三值 2-bit 极致压缩 27B 模型，本周周点赞第一，消费级硬件跑大模型的新范式 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 972 | 1,256,962 | DavidAU 一贯的"缝合怪"式去审查+代码增强混合微调，下载惊人 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,435 | 1,154,265 | 学术团队 GSQ-RCO 混合精度量化，1,435 点赞显示前沿压缩技术受追捧 |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 174 | 31,099 | 同一技术路线在 Flash-Next 上的复刻 |
| [ukisai/Swift-Qwen3.8-27B](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) / [GGUF 版](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 493 / 319 | 8,761 / 120,740 | "efficient-thinking" 微调，压缩推理链长度 |
| [prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit) | prism-ml | 258 | 23,111 | 三值方案 MLX 移植，Apple 端侧 27B 可行 |
| [dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 312 | 34,230 | DeepSeek 新旗舰发布即被去审查 FP8 量化 |
| [Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4](https://huggingface.co/Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4) | Mothersuperior | 155 | 0 | YuE2 配套音频 tokenizer 社区增强 LoRA |

---

## 三、生态信号

**Qwen3.8 家族**是本周无可争议的中心：官方两个版本 + unsloth GGUF + ISTA 量化 + DavidAU/ukisai/Edge0 等微调，衍生模型占据榜单近三分之一席位，已形成“官方发布 → 24 小时内量化 → 48 小时内社区微调”的成熟流水线。**视频生成**进入开源红利期，MiniMax-H3 与 LTX-2.5 下载量均破百万，说明开源视频模型的实用门槛已跨过。**量化技术**出现代际更迭信号：GSQ-RCO 混合精度与三值 2-bit 方案的高点赞（均超 1,200），表明社区不再满足于传统 GGUF/AWQ，极低比特推理成为新战场。开源权重阵营（Qwen、DeepSeek、GLM、MiniMax 全线开放）持续挤压闭源 API 的差异化空间，"去审查"微调仍是稳定的长尾需求。

---

## 四、值得探索

1. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 周点赞第一（1,257）。三值 2-bit 让 27B 模型跑进消费级硬件，若质量损失可控，可能是本地推理的规则改变者，值得对比测试。

2. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — 学术出身的混合精度量化方案，下载破 115 万。与 unsloth 标准 GGUF 做同比特率精度对比，是研究前沿压缩的绝佳样本。

3. **[m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)** — 音乐生成 + 符号化规划 + Agent 式编辑的组合在开源界罕见，3B 体量易上手，适合探索生成式音频工作流。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*