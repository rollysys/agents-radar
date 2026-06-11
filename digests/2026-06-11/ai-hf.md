# Hugging Face 热门模型日报 2026-06-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-11 04:12 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-06-11

## 1. 今日速览
今日 Hugging Face 迎来 **Google Gemma-4** 系列的全面爆发，凭借其强大的 Any-to-Any（任意模态转换）能力，原版模型及社区量化版迅速霸榜。**DeepSeek-V4-Pro** 以单周近 5000 点赞和超 400 万下载量稳居“流量之王”，展示了开源权重模型在开发者生态中的统治力。社区侧，**Unsloth** 的 GGUF 量化与 **OBLITERATUS** 的去审查版微调紧跟上游发布，满足了用户对本地部署与无限制使用的双重需求。此外，Nvidia 在专业领域多点开花，从视觉定位到流式语音识别均有热门模型上榜。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
  - 作者: google | 👍 892 | ⬇️ 675,936
  - **说明：** Google 最新发布的 12B 参数指令微调模型，支持多模态输入输出，凭借高下载量和社区热度登顶榜首。

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,763 | ⬇️ 4,061,006
  - **说明：** 本周点赞数最高的模型，拥有极高的社区认可度，代表了当前开源 LLM 的顶尖水平。

- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
  - 作者: sapientinc | 👍 741 | ⬇️ 134,752
  - **说明：** 紧凑型文本生成模型，以小参数量获得高关注度，适合轻量级部署场景。

- **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)**
  - 作者: nvidia | 👍 189 | ⬇️ 59,066
  - **说明：** Nvidia 推出的 550B 超大参数 MoE 模型，激活参数仅 55B，兼顾了超大知识库与推理效率。

- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
  - 作者: CohereLabs | 👍 265 | ⬇️ 1,859
  - **说明：** Cohere 实验室推出的轻量级代码生成模型，针对编程任务进行了优化。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 👍 1,811 | ⬇️ 131,794
  - **说明：** 本周点赞数排名第二，Nvidia 出品的视觉定位模型，展现了多模态细分领域的极高热度。

- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
  - 作者: ideogram-ai | 👍 475 | ⬇️ 7,170
  - **说明：** Ideogram 4.0 的 fp8 量化版本，以较低显存需求提供高质量的文本生成图像能力。

- **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**
  - 作者: ByteDance | 👍 213 | ⬇️ 305
  - **说明：** 字节跳动推出的图像/文本到视频生成模型，兼顾了生成质量与动态效果。

- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
  - 作者: bosonai | 👍 326 | ⬇️ 19,948
  - **说明：** 高性能文本转语音模型，下载量表现优异，可能具备出色的声音克隆或情感表现力。

- **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
  - 作者: stepfun-ai | 👍 363 | ⬇️ 50,187
  - **说明：** 阶跃星辰的新一代视觉语言模型，强调快速响应，适合实时多模态交互。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  - 作者: nvidia | 👍 351 | ⬇️ 4,965
  - **说明：** 专用于流式自动语音识别的小型模型，低延迟特性使其适合实时转录场景。

- **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
  - 作者: JetBrains | 👍 281 | ⬇️ 18,273
  - **说明：** JetBrains 推出的编程专用模型，引入“Thinking”机制，可能针对复杂代码推理进行了增强。

- **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)**
  - 作者: google | 👍 174 | ⬇️ 19,806
  - **说明：** Google 的实时音频生成项目更新，专注于低延迟音乐或音效创作。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
  - 作者: unsloth | 👍 551 | ⬇️ 711,706
  - **说明：** 本周下载量最高，Unsloth 快速跟进发布的 Gemma-4 GGUF 版本，为本地部署首选。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 1,638 | ⬇️ 3,057,541
  - **说明：** 社区点赞数极高，基于 Qwen3.6 的去审查激进版微调，反映了用户对无限制对话的强需求。

- **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)**
  - 作者: OBLITERATUS | 👍 218 | ⬇️ 14,838
  - **说明：** 针对 Gemma-4 的“洗白”版本，移除了安全对齐，体现了开源社区对模型可操控性的追求。

- **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)**
  - 作者: unsloth | 👍 191 | ⬇️ 148,252
  - **说明：** 采用 QAT（量化感知训练）技术的版本，在低比特量化下保持更好精度的尝试。

---

## 3. 生态信号

本周生态呈现明显的**“巨头发布引领，社区即时响应”**特征。
1.  **Gemma-4 家族势头正旺：** Google 的 Gemma-4 系列迅速占据了榜单前列，其 Any-to-Any 的定位显示了开源模型正从单一文本向全模态融合加速。
2.  **MoE 架构普及化：** 从 DeepSeek-V4-Pro 到 Nemotron-Ultra，再到社区模型 Higgs-Audio 和 Nex-N2，混合专家架构已成为高性能模型的标准配置。
3.  **“去审查”微调需求高涨：** 榜单中出现多个带有“Uncensored”或“Obliterated”标签的模型（如 HauhauCS 和 OBLITERATUS 的作品），且点赞下载双高，表明本地部署用户对模型内容安全限制的敏感度极高。
4.  **量化工具链成熟：** Unsloth 等团队在新模型发布后极短时间内推出高质量 GGUF 版本，下载量甚至超过原版，证明本地化、低门槛运行仍是开发者的核心痛点。

## 4. 值得探索

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**：作为口碑与热度双丰收的标杆模型，是测试当前开源 SOTA 能力的必选项，适合研究大参数 MoE 的性能表现。
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：视觉定位领域的热门模型，3B 的小体积结合高热度，意味着它可能有极佳的端侧部署潜力和任务泛化能力，值得 CV 开发者关注。
- **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**：JetBrains 专为代码设计的模型引入了“Thinking”概念，对于探索代码生成与推理能力的结合非常有参考价值。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*