# Hugging Face 热门模型日报 2026-07-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-24 02:50 UTC

---

# Hugging Face 热门模型日报 (2026-07-24)

## 1. 今日速览

今日 Hugging Face 榜单呈现“多模态实用化”与“极限量化”两大核心趋势。百度发布的 **Unlimited-OCR** 凭借强大的文字理解能力登顶榜首，显示出文档智能处理需求的爆发。Google **Gemma-4** 和智谱 **GLM-5.2** 等基座大模型持续迭代，下载量与人气居高不下。值得注意的是，`prism-ml` 推出的 **1-bit/2-bit 极低比特量化模型**（Bonsai 系列）引发了社区对端侧部署效率的新一轮探索。此外，语音合成（TTS）与机器人控制模型的涌现，标志着 AI 正从数字世界向物理与感官交互纵深发展。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org | 点赞: 4,375 | 下载: 596,442
  - **说明**: 智谱 AI（Zhipu）最新的 MoE 架构大模型，兼具高性能与推理效率，是本周最受欢迎的国产开源基座模型之一。

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
  - 作者: poolside | 点赞: 519 | 下载: 13,285
  - **说明**: Poolside 发布的代码生成与推理模型，针对编程任务优化，引发了开发者的广泛关注。

- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
  - 作者: upstage | 点赞: 466 | 下载: 362
  - **说明**: Upstage 推出的 250B 参数级超大模型，试图在开源领域挑战闭源模型的性能天花板。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 作者: baidu | 点赞: 2,895 | 下载: 2,414,259
  - **说明**: 今日榜单冠军，提供无限分辨率支持的高精度 OCR 能力，解决了文档解析中的核心痛点，下载量惊人。

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 点赞: 3,347 | 下载: 12,666,488
  - **说明**: Google 最新一代多模态指令模型，下载量突破千万，凭借优异的综合表现成为社区最活跃的基座模型。

- **[Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice)**
  - 作者: Qwen | 点赞: 1,800 | 下载: 2,497,020
  - **说明**: 阿里巴巴推出的语音合成模型，支持自定义声音克隆，填补了开源高质量 TTS 模型的空白。

- **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)**
  - 作者: nvidia | 点赞: 102 | 下载: 28,493
  - **说明**: NVIDIA 面向边缘设备推出的物理 AI 与视频生成模型，为机器人与自动驾驶场景提供支持。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  - 作者: nvidia | 点赞: 926 | 下载: 750,118
  - **说明**: 专为实时流式语音识别设计的轻量级模型，在低延迟场景表现优异。

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
  - 作者: openbmb | 点赞: 165 | 下载: 408
  - **说明**: 面向机器人操作任务（VLA）的专用模型，展示了大模型在具身智能领域的落地应用。

- **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)**
  - 作者: fdtn-ai | 点赞: 121 | 下载: 2,747
  - **说明**: 专注于安全与防御的小型化模型，体现了开源社区对 AI 安全微调的重视。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
  - 作者: prism-ml | 点赞: 620 | 下载: 1,910,116
  - **说明**: 惊艳的 **1-bit 量化**模型，在极低资源消耗下维持了大模型能力，下载量极高。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 点赞: 3,033 | 下载: 2,027,080
  - **说明**: 基于 Qwen 架构的无审查版本，因满足特定场景下的自由生成需求而获得高赞。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  - 作者: empero-ai | 点赞: 2,440 | 下载: 2,126,755
  - **说明**: 强调长上下文与推理能力的社区微调版，融合了 Claude 风格，深受本地部署用户喜爱。

---

## 3. 生态信号

本周模型生态呈现出**“开源巨头对决”**与**“推理效率革命”**两大特征。Qwen 3.6 系列继续在微调市场占据统治地位，众多高下载量模型（如 HauhauCS、LuffyTheFox 版）均基于此架构，证明了其强大的可塑性与社区接受度。与此同时，Google Gemma-4 的强势加入让基座模型竞争更加白热化。

在部署端，量化技术正突破传统极限。`prism-ml` 带来的 **1-bit/2-bit 量化** 技术引发了轰动，近两百万的下载量表明，用户迫切希望在消费级硬件上运行 27B+ 级别的大模型，这可能预示着“小型化、极致压缩”将成为下半年的技术热点。此外，OCR、TTS 和机器人控制模型的集体上榜，标志着 AI 正从单一的文本生成向更广泛的“感知-行动”闭环迈进。

---

## 4. 值得探索

1.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：
    作为今日榜首，该模型解决了长文档和多张图片的 OCR 痛点，对于需要处理扫描件、票据或复杂排版的开发者极具实用价值，建议立即测试其极限分辨率表现。

2.  **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**：
    推荐给关注端侧部署的研究者。作为 1-bit 量化的代表作，它在极低显存占用下是否能保持足够的智能水平？这是验证“量化缩放定律”不可多得的素材。

3.  **[Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice)**：
    开源界少有的高质量语音合成模型，支持 CustomVoice（自定义声音）功能，非常适合用于构建个人语音助手或多语言配音应用。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*