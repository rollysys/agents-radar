# Hugging Face 热门模型日报 2026-06-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-27 03:40 UTC

---

# Hugging Face 热门模型日报 (2026-06-27)

## 1. 今日速览
本期榜单显示出**实用工具模型**与**高性能基座模型**并行的趋势。百度发布的 **Unlimited-OCR** 凭借强大的文字提取能力登顶下载与热度榜，显示文档处理需求依然旺盛。大模型方面，**GLM-5.2** 与 **Qwen-AgentWorld** 的发布标志着开源模型在 Agent 智能体和 MoE 架构上的进一步深耕。文生图领域，**Krea-2** 的开源为社区带来了新的高质量生成选择。此外，社区对 **Gemma-4** 和 **Qwen-3.6** 的微调与量化热情高涨，多模态和长上下文模型成为“新常态”。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org | 点赞: 2,609 | 下载: 83,589
  - 说明：最新一代开源 GLM 模型，采用 MoE 架构，兼顾对话与生成能力，是本周最受瞩目的基座模型之一。

- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
  - 作者: Qwen | 点赞: 325 | 下载: 13,186
  - 说明：专为 Agentic 场景优化的 Qwen 模型，具备强大的工具调用与规划能力，适合构建复杂智能体。

- **[deepreinforce-ai/Ornith-1.0-35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B)**
  - 作者: deepreinforce-ai | 点赞: 128 | 下载: 1,005
  - 说明：新兴的强推理能力模型，提供 9B 至 397B 多种规格，本周密集发布引发社区关注。

- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
  - 作者: microsoft | 点赞: 356 | 下载: 5,735
  - 说明：微软推出的轻量级模型，专注于长上下文处理与快速推理，适合资源受限环境。

- **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)**
  - 作者: LiquidAI | 点赞: 115 | 下载: 8,286
  - 说明：极低参数量模型，探索端侧设备的高效部署极限。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 作者: baidu | 点赞: 1,055 | 下载: 134,146
  - 说明：百度推出的强力 OCR 模型，支持无限分辨率与复杂文档解析，实用价值极高，登顶本周热度榜。

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
  - 作者: krea | 点赞: 287 | 下载: 8,721
  - 说明：Krea 2.0 系列的高效版本，提供极速文生图体验，平衡了质量与生成速度。

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 点赞: 2,386 | 下载: 494,756
  - 说明：英伟达推出的视觉定位模型，下载量惊人，能精准识别图像中任意物体位置。

- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
  - 作者: MiniMaxAI | 点赞: 1,248 | 下载: 169,951
  - 说明：强大的多模态大模型，支持图像与文本交互，综合能力均衡。

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  - 作者: nvidia | 点赞: 709 | 下载: 56,434
  - 说明：专为流式语音识别设计的小参数模型，延迟极低，适合实时转录场景。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
  - 作者: WeiboAI | 点赞: 735 | 下载: 54,638
  - 说明：专注于数学与逻辑推理的小参数模型，展现了小模型在特定领域的深度思考潜力。

- **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)**
  - 作者: Chunjiang-Intelligence | 点赞: 108 | 下载: 1,103
  - 说明：基于 DeepSeek v4 微调的网络安全专用模型，针对漏洞检测与代码审计进行了优化。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 点赞: 2,266 | 下载: 3,453,492
  - 说明：下载量爆炸的无审查微调版本，基于 Qwen3.6 MoE，以激进的对话风格和高性能著称。

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
  - 作者: yuxinlu1 | 点赞: 2,403 | 下载: 516,333
  - 说明：针对编程能力优化的 Gemma-4 量化版本，社区口碑极佳，是本地代码助手的优选。

- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-A3B-NVFP4)**
  - 作者: nvidia | 点赞: 362 | 下载: 4,812,629
  - 说明：官方发布的 NVFP4 精度量版本，大幅降低显存需求，下载量突破 480 万，显示出企业级部署对量化的渴求。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  - 作者: empero-ai | 点赞: 597 | 下载: 486,810
  - 说明：融合 Claude 风格的 Qwen 微调版，支持 1M 长上下文，兼顾推理与角色扮演。

- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
  - 作者: unsloth | 点赞: 413 | 下载: 107,553
  - 说明：Unsloth 团队快速跟进的 GGUF 版本，让最新 GLM 模型能迅速在消费级显卡上运行。

---

## 3. 生态信号

本周生态呈现出**“开源追赶闭源，量化加速普及”**的态势。**Qwen 系**依然是社区微调的绝对主力，榜单中大量基于 Qwen3.5/3.6 的 MoE 和 Uncensored 版本证明了其架构的优秀可塑性；**Gemma-4** 系列则在 Coding 和 Agentic 领域异军突起，成为开发者定制专用工具模型的新宠。

值得关注的是，**NVFP4** 等新型量化格式（如 nvidia/Qwen3.6-35B-NVFP4）下载量激增，显示出企业级用户对高效率部署方案的迫切需求已超过对原始模型权重的需求。此外，百度与英伟达在 OCR 和视觉定位（LocateAnything）上的发力，表明**多模态实用工具**正成为巨头争夺的新高地。

---

## 4. 值得探索

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   - **理由**：近 50 万下载量证明了其实用性。如果你从事 CV 领域或需要处理复杂的图像理解任务，这款轻量级且精准的视觉定位模型是不可多得的生产力工具。

2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - **理由**：百万级下载的现象级模型。它代表了当前开源社区对“无审查、强风格”模型的极高热情，适合研究人员探索模型对齐边界或开发者构建高自由度的角色扮演应用。

3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   - **理由**：榜单排名第一。OCR 是文档智能化的基石，该模型支持“无限”分辨率，解决了传统 OCR 处理长图、大图的痛点，极具落地价值。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*