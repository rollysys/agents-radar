# Hugging Face 热门模型日报 2026-05-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-29 03:54 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-05-29

---

### 1. 今日速览

本周 Hugging Face 迎来了生成式 AI 的双重高潮：**DeepSeek-V4** 系列以绝对优势霸榜，Pro 版本斩获 4,408 点赞，确立了开源文本生成的新 SOTA；**Qwen3.6** 系列则在端侧与社区微调领域大放异彩，特别是 MoE 架构的 Uncensored 版本下载量惊人。多模态领域竞争激烈，字节跳动的 **Lance** 和 **Sulphur-2-base** 分别在任意模态转换和视频生成上展现出强劲势头。此外，**pyannote** 的音频分割模型以近千万下载量证明了基础工具类模型的持久生命力。

---

### 2. 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 点赞: 4,408 | 下载: 5,281,601
  - 说明: 本周最热门模型，DeepSeek V4 系列的旗舰版，以强大的文本生成与对话能力引领开源榜单。

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 点赞: 1,281 | 下载: 3,327,898
  - 说明: 轻量级版本，兼顾速度与性能，下载量极高，适合大规模部署场景。

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 点赞: 1,511 | 下载: 4,790,806
  - 说明: 阿里 Qwen 系列最新迭代，支持图文双模态，下载量破千万，是当前最强基座模型之一。

- **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
  - 作者: openbmb | 点赞: 501 | 下载: 15,629
  - 说明: 面向端侧设备的极致轻量化模型，MiniCPM 系列延续高效特性，适合移动端部署。

- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
  - 作者: sapientinc | 点赞: 400 | 下载: 121,862
  - 说明: 专注于文本生成任务的新晋小参数模型，下载表现稳健。

- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
  - 作者: LiquidAI | 点赞: 121 | 下载: 0
  - 说明: LiquidAI 推出的 MoE 架构模型，刚发布即获关注，参数效率比高。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
  - 作者: bytedance-research | 点赞: 957 | 下载: 2,506
  - 说明: 字节跳动推出的 Any-to-Any 模型，支持图像、视频多模态生成，热度飙升。

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 点赞: 1,425 | 下载: 1,472,982
  - 说明: 文生视频领域的新秀，下载量超百万，显示出视频生成需求的持续火热。

- **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
  - 作者: circlestone-labs | 点赞: 1,580 | 下载: 704,160
  - 说明: 兼容 ComfyUI 的 Diffusion 模型，社区热度极高，侧重艺术风格生成。

- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
  - 作者: openbmb | 点赞: 1,047 | 下载: 388,525
  - 说明: 强力端侧多模态模型，图文理解能力强，延续 MiniCPM 系列的高效基因。

- **[stabilityai/stable-audio-3-medium](https://huggingface.co/stabilityai/stable-audio-3-medium)**
  - 作者: stabilityai | 点赞: 132 | 下载: 0
  - 说明: Stability AI 最新发布的音频生成模型，支持音乐与音效生成。

- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
  - 作者: Supertone | 点赞: 729 | 下载: 52,022
  - 说明: 顶级 TTS（语音合成）模型，声音表现力丰富，受到音频开发者追捧。

- **[nvidia/PiD](https://huggingface.co/nvidia/PiD)**
  - 作者: nvidia | 点赞: 163 | 下载: 335
  - 说明: NVIDIA 推出的图像超分辨率扩散模型，进一步提升图像细节生成质量。

#### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[pyannote/speaker-diarization-3.1](https://huggingface.co/pyannote/speaker-diarization-3.1)**
  - 作者: pyannote | 点赞: 2,044 | 下载: 9,845,884
  - 说明: 工业界标配的说话人分割工具，下载量逼近千万，音频处理流程必备。

- **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)**
  - 作者: tencent | 点赞: 1,080 | 下载: 14,600
  - 说明: 腾讯混元翻译模型，小参数大能量，精准解决多语言翻译需求。

- **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)**
  - 作者: numind | 点赞: 186 | 下载: 44,827
  - 说明: 专注于结构化信息提取的视觉语言模型，适合文档理解与处理。

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 点赞: 219 | 下载: 1,755
  - 说明: NVIDIA 推出的视觉定位模型，在图像特征提取任务上表现优异。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 点赞: 1,008 | 下载: 1,956,558
  - 说明: 基于 Qwen3.6 MoE 架构的 Uncensored 版本，下载量惊人，满足社区对无审查模型的巨大需求。

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  - 作者: unsloth | 点赞: 534 | 下载: 806,874
  - 说明: Unsloth 出品的高质量 GGUF 量化版，支持 MTP（Multi-Token Prediction），兼顾速度与精度。

- **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)**
  - 作者: unsloth | 点赞: 404 | 下载: 686,839
  - 说明: 针对 MoE 架构优化的量化版本，大幅降低显存门槛，适合消费级显卡运行大模型。

- **[Jackrong/Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF)**
  - 作者: Jackrong | 点赞: 151 | 下载: 65,968
  - 说明: 社区微调的 Qwen 变体，增强了特定任务能力，体现了开源社区的创新活力。

---

### 3. 生态信号

本周生态呈现“**基座双雄，社区分流**”的格局。**DeepSeek-V4** 与 **Qwen3.6** 彻底统治了榜单头部，前者主打通用性能，后者则通过 MoE 架构在端侧和社区微调市场占据统治地位。特别是 `Qwen3.6-35B-A3B` 的 Uncensored 版本下载量突破 190 万，显示出用户对**高性能且无审查**模型的强烈需求，这已成为开源社区的一股重要分支。GGUF 量化依然是本地部署的首选格式，Unsloth 团队的优化工作备受认可。多模态方面，视频生成和任意模态转换热度持续升温，字节跳动和 NVIDIA 等大厂的加入加剧了该赛道的竞争。

---

### 4. 值得探索

1. **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**：作为 Any-to-Any 模型的代表，它不仅是技术展示，更是迈向统一多模态大模型的重要尝试，适合研究多模态融合的前沿方向。
2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**：如果你关注模型对齐与反审查研究，或者需要一个不受限制的创意写作助手，这个模型是绝佳的切入点。
3. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**：作为本周点赞王，它是测试当前开源 SOTA 水平的基准模型，强烈建议用于复杂逻辑推理和长文本任务测试。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*