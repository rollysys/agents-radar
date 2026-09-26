# Hugging Face 热门模型日报 2026-09-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-26 04:05 UTC

---

# 📰 Hugging Face 热门模型日报
**日期：2026-09-26**

---

## 一、今日速览

- **Qwen 系两线开花**：`Qwen3.8-27B`（16,293 赞、657 万下载）持续霸榜，`Qwen3.8-Flash-Next`（5,704 赞）与 `Qwen-Image-2.1`（2,329 赞）接力引爆文本与图像两端生态。
- **视频生成迎来新爆款**：Lightricks 的 `LTX-2.5`（5,124 赞、160 万下载）成为本周最热视频模型。
- **量化社区极度活跃**：unsloth、ISTA-DASLab、DavidAU 等围绕 Qwen3.8-27B 的 GGUF/量化变体下载量均破百万。
- **"去审查"（Uncensored）微调持续走热**：Qwen-Image-2.1 的 Uncensored GGUF 获 71 万下载，显示社区对生成自由度的强烈需求。
- 语音赛道多点开花：ASR、说话人分离、流式识别均有新品上榜。

---

## 二、热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 / 下载 | 说明 |
|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,293 / 6,579,319 | 本期绝对王者，多模态旗舰 LLM，下载量与口碑双高，是社区量化和微调的基座首选。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,704 / 846,820 | 轻量高速版，面向生产部署的高性价比选择。 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,754 / 621,396 | DeepSeek 新一代多模态 Flash，延续“开源旗舰打闭源”的路线。 |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,687 / 42,950 | 29B-A4B 稀疏激活 MoE 架构，兼顾容量与推理成本。 |
| [XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 502 / 42,062 | RL 强化训练的多模态 Pro 版，小米 MiMo 家族持续迭代。 |
| [XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) | XiaomiMiMo | 465 / 20,473 | MiMo 系轻量 RL 版本，走量部署友好。 |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 677 / 4,978 | 基于 Qwen3.5 架构，主打长文风与写作能力。 |
| [yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base) | yandex | 333 / 2,911 | 80B-A3B 大 MoE 底座，俄语生态的重要开源底牌。 |

### 🎨 多模态与生成

| 模型 | 作者 | 点赞 / 下载 | 说明 |
|---|---|---|---|
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,124 / 1,598,133 | 本周生成类最热，支持文/图/视频到视频，ComfyUI 生态热门。 |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,329 / 42,469 | Qwen 图像生成/编辑新旗舰，衍生生态（量化、LoRA、ComfyUI）已全面铺开。 |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 1,054 / 9,498 | 视觉语言模型，主打空间推理，小尺寸高质量。 |
| [Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 621 / 2,853 | 流式无限时长 ASR，突破传统分段转录限制。 |
| [netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 413 / 5,827 | 网易有道基于 Qwen3-ASR 的 R2T2 语音识别模型。 |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 347 / 11,459 | NVIDIA 说话人分离模型，音频管线关键组件。 |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 240 / 47,873 | Qwen-Image-2.1 的 Turbo LoRA 加速版，生成速度显著提升。 |
| [inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) | inclusionAI | 241 / 0 | 蚂蚁系设计向图像生成模型，面向设计场景。 |
| [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 480 / 6,652 | 从 Qwen 蒸馏的多模态 9B，轻量 VLM 代表。 |

### 🔧 专用模型

| 模型 | 作者 | 点赞 / 下载 | 说明 |
|---|---|---|---|
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 3,709 / 0 | “校准决策”分类模型，榜单第一却零下载，疑似刷赞，需警惕。 |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 579 / 0 | 基于 Qwen3.5 的 NLI 跨编码器，同样零下载，存疑。 |
| [StarDoc-AI/TeleOCR](https://huggingface.co/StarDoc-AI/TeleOCR) | StarDoc-AI | 315 / 32,056 | 基于 Qwen2.5-VL 的 OCR 专用模型，下载量扎实。 |
| [akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni) | akhilaaa3 | 234 / 0 | Gemma4 架构统一分类模型，下载为零，可信度存疑。 |

### 📦 微调与量化

| 模型 | 作者 | 点赞 / 下载 | 说明 |
|---|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,626 / 6,938,321 | 本期下载量第一（近 700 万），unsloth 官方量化，本地部署标配。 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,707 / 1,510,016 | GSQ+RCO 混合精度量化，学术级压缩方案落地。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,182 / 1,546,398 | 典型 DavidAU 式“缝合怪”创意微调，融合去审查与代码能力，下载破百万。 |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 1,812 / 715,906 | 去审查版 Qwen 图像模型，下载 71 万，反映生成自由度需求。 |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,098 / 3,109,078 | 三值（2-bit）极端量化，310 万下载，极低资源运行的代表。 |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 737 / 3,266,380 | 官方 ComfyUI 单文件分发版，326 万下载，工作流生态入口。 |
| [unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF) | unsloth | 228 / 130,465 | 图像模型也进入 GGUF 量化时代。 |
| [pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF) | pottokao | 264 / 126,393 | 单独量化文本编码器，绕过图像模型审查的社区方案。 |

---

## 三、生态信号

**Qwen 是本周绝对核心**：文本端 Qwen3.8-27B、图像端 Qwen-Image-2.1 双线统治榜单，且其衍生生态（unsloth 量化、ComfyUI 适配、DavidAU 微调、去审查变体）占据半壁江山——一个“模型即平台”的格局正在形成。**开源权重持续压制闭源**：DeepSeek、Qwen、小米 MiMo、Yandex 全部开放权重，闭源 API 在社区热度上几乎失声。**量化活动高度活跃且下沉到图像领域**：三值量化（Ternary-Bonsai，310 万下载）、GSQ/RCO 学术量化、GGUF 图像模型纷纷涌现，显示“本地运行”是最大真实需求。**需警惕信号**：laya、openjev、Jev-Omni 三个高赞零下载模型疑似刷榜，社区治理压力上升。

---

## 四、值得探索

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 本周生成类最大亮点，文/图/视频多模态输入到视频输出，160 万下载验证了可用性，ComfyUI 工作流支持完善，适合视频创作者立即上手。

2. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — 本地部署首选，全尺寸量化档位齐备，近 700 万下载的社区共识之选；想研究更极限压缩可对比 [ISTA-DASLab 的 GSQ-RCO 版](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)。

3. **[Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite)** — 流式无限时长 ASR 是长期痛点，2,853 下载说明还处于早期，技术方案值得研究与抢先集成。

---
*数据来源：Hugging Face Hub 周榜（2026-09-26）| 本报告由 AI 生成，仅供研究参考。*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*