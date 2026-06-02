# Hugging Face 热门模型日报 2026-06-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-02 04:13 UTC

---

# Hugging Face 热门模型日报 (2026-06-02)

## 1. 今日速览
DeepSeek-V4 系列以惊人的下载量和点赞数稳居开源模型王者地位，显示出极强的生态统治力。Qwen3.6 系列持续爆发，不仅官方多模态版本表现优异，社区微调版（如 Uncensored 及 GGUF 格式）更是占据下载榜首，证明了其强大的社区活力。多模态领域竞争白热化，NVIDIA、字节跳动和快手等大厂纷纷布局视觉定位、视频生成及 Any-to-Any 模型。此外，模型量化与端侧部署依然是核心趋势，GGUF 格式和新型 MoE 架构（如 LiquidAI）备受关注。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,536 | 📥 5,851,826
  - **说明：** DeepSeek-V4 系列的旗舰版本，作为本周点赞数最高的模型，凭借其强大的生成能力和开源策略，成为当前开源 LLM 的标杆。

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 1,342 | 📥 3,511,636
  - **说明：** V4 系列的轻量化版本，兼顾速度与性能，下载量突破 300 万，是开发者构建高效应用的首选。

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 👍 1,568 | 📥 5,154,729
  - **说明：** 通义千问最新一代基础模型，支持图文双模态，下载量惊人，是当前中文开源社区最核心的基础模型之一。

- **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
  - 作者: openbmb | 👍 692 | 📥 45,698
  - **说明：** MiniCPM 系列迭代至第五代，1B 参数的小模型在端侧设备上具有极高的实用价值，热度攀升迅速。

- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
  - 作者: LiquidAI | 👍 401 | 📥 37,893
  - **说明：** 采用创新 `lfm2_moe` 架构，主打非 Transformer 的液态神经网络路线，为 LLM 架构演进提供了新思路。

- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
  - 作者: sapientinc | 👍 439 | 📥 149,543
  - **说明：** 新兴架构 HRM 的文本模型，虽仅 1B 参数但下载量表现不俗，显示市场对高效率小模型的渴望。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 👍 817 | 📥 35,783
  - **说明：** NVIDIA 推出的视觉定位模型，精准处理图文关系，显示出大厂在多模态细粒度理解上的最新突破。

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 1,492 | 📥 1,656,520
  - **说明：** 文生视频模型，下载量超 150 万且点赞数极高，预示着开源视频生成领域正迎来“GPT时刻”。

- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
  - 作者: openbmb | 👍 1,088 | 📥 459,188
  - **说明：** MiniCPM 的多模态版本，兼顾视觉与语言能力，在移动端多模态应用场景中潜力巨大。

- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
  - 作者: bytedance-research | 👍 1,002 | 📥 3,041
  - **说明：** 字节跳动推出的 Any-to-Any 生成模型，支持图像与视频生成，代表了统一多模态生成的技术前沿。

- **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)**
  - 作者: meituan-longcat | 👍 469 | 📥 0
  - **说明：** 专注于视频数字人生成，虽下载量为 0（可能刚发布或受限），但高点赞反映了社区对数字人技术的关注。

- **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
  - 作者: stepfun-ai | 👍 196 | 📥 9,256
  - **说明：** 阶跃星辰的视觉语言模型，Flash 版本主打快速推理，是多模态赛道的重要竞争者。

- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
  - 作者: Supertone | 👍 771 | 📥 57,627
  - **说明：** 高质量语音合成（TTS）模型，点赞数进入前十，音频生成赛道热度不减。

### 🔧 专用模型（代码、数学、医疗、嵌入、工具）

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
  - 作者: openai | 👍 1,579 | 📥 316,092
  - **说明：** OpenAI 发布的隐私过滤工具，用于敏感信息识别，高下载量反映了企业级应用对数据安全的刚需。

- **[pyannote/speaker-diarization-3.1](https://huggingface.co/pyannote/speaker-diarization-3.1)**
  - 作者: pyannote | 👍 2,108 | 📥 9,591,005
  - **说明：** 语音分割领域的“常青树”，下载量接近千万，是音频处理流水线中不可或缺的基础组件。

- **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)**
  - 作者: PaddlePaddle | 👍 157 | 📥 3,190
  - **说明：** 飞桨团队推出的 OCR 视觉语言模型，结合 ERNIE 能力，提升了文档理解的表现。

- **[nvidia/PiD](https://huggingface.co/nvidia/PiD)**
  - 作者: nvidia | 👍 240 | 📥 577
  - **说明：** 图像超分辨率模型，NVIDIA 在视觉增强领域的最新尝试。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 1,228 | 📥 2,533,393
  - **说明：** Qwen3.6 的社区无审查微调版，下载量极高，反映了社区对去限制模型的强烈需求。

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  - 作者: unsloth | 👍 596 | 📥 952,188
  - **说明：** Unsloth 出品的高效 GGUF 量化版，方便本地部署，是个人开发者的热门选择。

- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
  - 作者: nvidia | 👍 122 | 📥 171,588
  - **说明：** NVIDIA 官方针对 Qwen 的 MoE 版本进行 NVFP4 量化优化，凸显了软硬一体的优化趋势。

- **[LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF)**
  - 作者: LiquidAI | 👍 146 | 📥 55,212
  - **说明：** 液态架构模型的 GGUF 版，专为边缘设备设计，下载量表现稳健。

---

## 3. 生态信号
**模型家族势头：** 本周榜单被 **DeepSeek-V4** 和 **Qwen3.6** 两大巨头家族主导。DeepSeek 凭借 V4 系列确立了开源 LLM 的性能天花板，而 Qwen3.6 则展现了极强的“可玩性”，社区基于其微调的 MoE 和无审查版本下载量极高，证明其生态兼容性极佳。

**开源与闭源趋势：** 开源模型在性能和延迟上正在快速逼近闭源水平，特别是视频生成领域涌现出大量可用模型。

**量化与微调活动：** 量化已从“可选”变为“标配”，榜单中大量出现 GGUF 和 NVFP4 格式模型，显示端侧部署需求旺盛。社区微调方向鲜明，**Uncensored（去审查）** 和 **Aggressive（激进风格）** 的微调版本备受追捧，体现了个人用户对模型表达自由的追求。此外，MoE（混合专家）架构已深入小模型领域（如 35B-A3B），在保持参数规模的同时大幅降低了推理成本。

---

## 4. 值得探索

1.  **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
    - **理由：** 作为本周点赞和下载量双高的文生视频模型，它可能代表了当前开源界视频生成的最高水平，对于研究视频生成工作流的开发者极具参考价值。

2.  **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
    - **理由：** 摒弃了主流 Transformer 架构，采用 Liquid 神经网络技术。对于厌倦了 Transformer 同质化的研究者，这是探索下一代高效架构（特别是流式处理和边缘计算）的绝佳样本。

3.  **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
    - **理由：** OpenAI 鲜少在 HF 发布模型，这款专注于隐私过滤的工具模型显示了 OpenAI 对合规和企业级应用的布局。对于构建 RAG 或企业知识库的开发者，这是一个不可多得的数据清洗利器。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*