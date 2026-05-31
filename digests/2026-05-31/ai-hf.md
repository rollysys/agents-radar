# Hugging Face 热门模型日报 2026-05-31

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-31 04:06 UTC

---

# Hugging Face 热门模型日报 (2026-05-31)

## 1. 今日速览
本周 Hugging Face 热门榜单由 **DeepSeek-V4** 系列强势领跑，其 Pro 和 Flash 版本不仅收获了极高的点赞数，下载量更是突破千万级，显示出开源权重模型在性能与生态落地上的巨大统治力。多模态领域呈现爆发态势，从 **NVIDIA** 的定位模型到 **字节跳动** 的全模态生成，再到 **美团** 的视频 Avatar，多模态应用正加速向视频生成与精细化解构演进。社区微调方面，基于 **Qwen3.6** 的无审查及 GGUF 量化版本热度极高，反映出开发者对端侧部署和模型“去限制化”的强烈需求。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 点赞: 4,466 | 下载: 5,918,111
  - **说明**: 当周热度之王，DeepSeek-V4 的强力版本，凭借卓越的性能和开源策略，成为目前开源社区最受瞩目的文本生成基座模型。

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 点赞: 1,306 | 下载: 3,427,926
  - **说明**: DeepSeek-V4 的轻量高速版，兼顾性能与推理成本，下载量极高，适合高频并发场景。

- **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
  - 作者: openbmb | 点赞: 611 | 下载: 28,793
  - **说明**: 面向端侧设备的极致轻量化模型，MiniCPM 系列的新一代产品，以极小体积实现高效文本生成。

- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
  - 作者: LiquidAI | 点赞: 283 | 下载: 17,084
  - **说明**: 新兴架构模型，带有 MoE（混合专家）特征，为 8B 参数量级提供了新的性能基准选择。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 点赞: 1,539 | 下载: 4,971,730
  - **说明**: 阿里通义千问 3.6 版本，强大的视觉语言模型，在图文理解与对话任务中表现均衡，下载量破千万。

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 点赞: 1,456 | 下载: 1,557,858
  - **说明**: 专注于 Text-to-Video 的生成模型，热度飙升迅速，显示视频生成赛道依然是当前多模态的核心热点。

- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
  - 作者: openbmb | 点赞: 1,074 | 下载: 433,156
  - **说明**: MiniCPM 的多模态版本，专为端侧设备优化的视觉语言模型，兼具效率与多模态理解能力。

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 点赞: 507 | 下载: 18,327
  - **说明**: NVIDIA 推出的定位/指代模型，专注于图像中的物体检测与定位，体现了视觉任务向精细化发展的趋势。

- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
  - 作者: bytedance-research | 点赞: 981 | 下载: 2,856
  - **说明**: 字节跳动发布的 Any-to-Any 生成模型，支持图像与视频生成，展示了跨模态通用生成的探索方向。

- **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)**
  - 作者: meituan-longcat | 点赞: 411 | 下载: 0
  - **说明**: 美团推出的视频数字人生成模型，支持音视频驱动，专注于高质量的视频 Avatar 生成。

- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
  - 作者: Supertone | 点赞: 746 | 下载: 55,382
  - **说明**: 高质量语音合成（TTS）模型，语音生成生态的重要组成部分，用户关注度持续走高。

### 🔧 专用模型（代码、数学、医疗、嵌入、工具）

- **[pyannote/speaker-diarization-3.1](https://huggingface.co/pyannote/speaker-diarization-3.1)**
  - 作者: pyannote | 点赞: 2,073 | 下载: 9,771,170
  - **说明**: 语音分割领域的“常青树”模型，下载量近千万，是音频处理流水线中不可或缺的基础组件。

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
  - 作者: openai | 点赞: 1,570 | 下载: 304,691
  - **说明**: OpenAI 发布的隐私过滤工具，用于文本敏感信息识别，体现了数据安全与合规在模型生态中的重要性。

- **[tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)**
  - 作者: tencent | 点赞: 434 | 下载: 3,833
  - **说明**: 腾讯混元系列翻译模型，针对多语言翻译任务优化，展现了垂直领域大模型的专业能力。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 点赞: 1,114 | 下载: 2,227,885
  - **说明**: 基于通义千问的社区激进微调版，主打“无审查”，下载量惊人，反映了社区对模型内容自由的追求。

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  - 作者: unsloth | 点赞: 567 | 下载: 877,938
  - **说明**: Unsloth 团队出品的高效 GGUF 量化版，极大降低了 Qwen3.6-27B 的部署门槛。

- **[LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF)**
  - 作者: LiquidAI | 点赞: 124 | 下载: 23,685
  - **说明**: 新兴 LFM 模型的边缘量化版，适配 llama.cpp 生态，适合本地化部署尝鲜。

---

## 3. 生态信号

本周模型生态呈现出 **"开源基座双雄争霸，端侧与多模态齐飞"** 的格局。
1.  **模型家族势头**：**DeepSeek** 和 **Qwen** 无疑是目前开源界的两大巨头，DeepSeek-V4 凭借 SOTA 级性能霸榜，而 Qwen3.6 则成为了社区微调（特别是 GGUF 量化版）的首选基座，显示出强大的生态渗透力。
2.  **开源 vs 闭源**：榜单前列几乎被开源权重模型占据，且下载量远超闭源 API 调用量，表明企业级私有化部署需求依然旺盛。
3.  **微调与量化趋势**：GGUF 格式依然是端侧推理的主流标准（如 Unsloth 版本热度极高）。值得注意的是，社区对 **Uncensored（无审查）** 版本的巨大下载量（HauhauCS 版本）揭示了开发者对于模型“安全护栏”与“生成自由度”之间的博弈心态。

---

## 4. 值得探索

1.  **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
    字节跳动推出的 Any-to-Any 模型，支持图像和视频生成。在多模态正向生成（Text-to-X）日益成熟的当下，Lance 提供了探索跨模态统一生成的实验机会，适合研究多模态融合架构。

2.  **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
    OpenAI 鲜见地在 HF 上发布的工具模型，专注于 Token 级别的隐私检测。在数据合规日益严格的 2026 年，该模型为企业构建安全的 RAG（检索增强生成）系统提供了关键组件。

3.  **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
    作为非主流大厂出品的新架构模型（标签含 lfm2_moe），它在 8B 级别提供了独特的性能表现。对于厌倦了 Llama 架构变体的开发者来说，这是一个值得深入挖掘的差异化基座模型。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*