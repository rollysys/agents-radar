# Hugging Face 热门模型日报 2026-05-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-30 03:40 UTC

---

# Hugging Face 热门模型日报 (2026-05-30)

## 1. 今日速览
本周 Hugging Face 迎来了生成式 AI 模型的集中爆发。**DeepSeek-V4** 系列以惊人的下载量和点赞数强势登顶，确立了其在开源文本生成领域的领先地位。**Qwen3.6** 系列不仅官方基座模型表现强劲，其社区微调版本（如 Uncensored 及 GGUF 格式）更是占据了半壁江山，显示出极高的人气。此外，多模态与视频生成领域亮点颇多，字节跳动的 **Lance** 和美团的 **LongCat** 展示了“任意模态生成”与“数字人”的前沿进展。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,439 | 📥 5,836,444
  - 说明：DeepSeek-V4 系列的旗舰级模型，拥有超高的下载量，代表了当前开源文本生成模型的顶尖水平。

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 1,295 | 📥 3,382,438
  - 说明：DeepSeek-V4 的轻量高效版本，兼顾性能与推理速度，适合大规模部署。

- **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
  - 作者: openbmb | 👍 569 | 📥 23,629
  - 说明：面壁智能最新的 1B 参数端侧模型，体积小巧但性能强劲，适合移动端场景。

- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
  - 作者: LiquidAI | 👍 224 | 📥 8,854
  - 说明：LiquidAI 推出的 MoE 架构模型，以 8B 参数量提供了优秀的文本生成能力。

- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
  - 作者: sapientinc | 👍 409 | 📥 131,828
  - 说明：专注于文本生成的小参数模型，下载量表现优异，展示了小模型在垂直领域的潜力。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 👍 1,522 | 📥 4,858,365
  - 说明：阿里通义千问 3.6 版本官方基座，强大的多模态能力使其成为本周最受欢迎的模型之一。

- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
  - 作者: bytedance-research | 👍 974 | 📥 2,738
  - 说明：字节跳动推出的“任意到任意”多模态生成模型，支持图像、视频等多种模态转换。

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 1,445 | 📥 1,528,838
  - 说明：开源文生视频模型，热度极高，下载量突破百万，社区对视频生成需求旺盛。

- **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)**
  - 作者: meituan-longcat | 👍 397 | 📥 0
  - 说明：美团推出的视频数字人生成模型，支持音频/文本到视频的驱动，关注度高。

- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
  - 作者: openbmb | 👍 1,064 | 📥 428,949
  - 说明：MiniCPM 的多模态版本，具备强大的图文理解能力，适合端侧部署。

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 👍 402 | 📥 7,861
  - 说明：英伟达推出的定位模型，实现了图像中任意物体的精准识别与定位。

- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
  - 作者: Supertone | 👍 738 | 📥 53,824
  - 说明：高质量语音合成（TTS）模型，展现了音频生成领域的最新进展。

- **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
  - 作者: stepfun-ai | 👍 118 | 📥 1,421
  - 说明：阶跃星辰的最新多模态模型，主打视觉语言理解与生成。

- **[microsoft/Lens](https://huggingface.co/microsoft/Lens) & [Lens-Turbo](https://huggingface.co/microsoft/Lens-Turbo)**
  - 作者: microsoft | 👍 144/128 | 📥 1,255/1,685
  - 说明：微软推出的文生图模型，包含标准版与加速版，专注于高质量图像生成。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)**
  - 作者: tencent | 👍 425 | 📥 3,084
  - 说明：腾讯混元系列的专用翻译模型，30B 参数保证了高质量的跨语言转换。

- **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)**
  - 作者: tencent | 👍 1,088 | 📥 15,753
  - 说明：轻量级翻译模型，适合对延迟敏感的应用场景，点赞数极高。

- **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)**
  - 作者: numind | 👍 196 | 📥 49,014
  - 说明：基于 Qwen3.5 微调的信息抽取模型，能够从图像文本中精准提取结构化数据。

- **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)**
  - 作者: PaddlePaddle | 👍 100 | 📥 1,171
  - 说明：飞桨团队推出的 OCR 视觉语言模型，结合了 ERNIE 能力，强化文档理解。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 1,057 | 📥 2,114,938
  - 说明：社区热门的 Qwen3.6 去审查版本，MoE 架构，下载量惊人，满足特定对话需求。

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  - 作者: unsloth | 👍 550 | 📥 841,068
  - 说明：Unsloth 优化版 GGUF 格式模型，方便本地 CPU/GPU 推理。

- **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)**
  - 作者: unsloth | 👍 415 | 📥 726,514
  - 说明：针对 Qwen3.6 MoE 版本的量化模型，兼顾了参数规模与推理效率。

- **[Jackrong/Qwopus3.6-27B-v2-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-GGUF)**
  - 作者: Jackrong | 👍 183 | 📥 29,306
  - 说明：社区优化的 Qwen3.6 视觉语言模型 GGUF 版本。

- **[OBLITERATUS/Qwen3.6-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.6-27B-OBLITERATED)**
  - 作者: OBLITERATUS | 👍 120 | 📥 16,849
  - 说明：激进去审查化的 Qwen3.6 版本，体现了社区对模型输出自由度的追求。

---

## 3. 生态信号
**Qwen3.6 与 DeepSeek-V4 双雄争霸**：本周榜单清晰地展示了“一超多强”的格局。DeepSeek-V4 凭借官方发布的 Pro 和 Flash 版本在下载量上占据绝对统治地位，证明了其在企业级应用中的受欢迎程度。与此同时，Qwen3.6 系列则是社区微调的宠儿，大量基于 Qwen3.6 的 GGUF 量化版、去审查版和 MoE 变体上榜，说明其在个人开发者和开源社区中拥有极高的粘性。

**MoE 架构下沉与端侧崛起**：除了大参数模型，MiniCPM5-1B 和 Hy-MT2-1.8B 的小模型热度极高，显示出端侧部署和特定任务（如翻译）的小模型正在成为新的增长点。同时，Qwen3.6-35B-A3B 等 MoE 模型的流行，验证了混合专家架构在平衡性能与推理成本上的优势已被广泛认可。

---

## 4. 值得探索

1.  **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
    - 理由：字节跳动推出的“Any-to-Any”模型，支持多模态生成。在单一模型中融合图像与视频生成能力，是目前通往通用多模态生成的重要探索方向，值得研究人员关注其架构设计。

2.  **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    - 理由：作为本周下载量和点赞数的双料冠军，它是目前开源 LLM 的性能标杆。无论是用于基准测试还是构建下游应用，都是绕不开的核心模型。

3.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    - 理由：下载量突破 200 万的社区微调模型。它结合了 MoE 架构的高效性与去审查的自由度，是体验社区“魔改”力量和探索开放对话能力的最佳案例。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*