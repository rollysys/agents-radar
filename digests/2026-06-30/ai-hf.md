# Hugging Face 热门模型日报 2026-06-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-30 03:54 UTC

---

# Hugging Face 热门模型日报 (2026-06-30)

## 1. 今日速览

本期榜单最引人注目的是 **GLM-5.2** 的发布，凭借其全新的 MoE 架构迅速登顶语言模型热度前列，并获得 NVIDIA 官方量化支持。**Qwen** 系列依旧统治社区微调生态，不仅霸榜下载量，还在 Agent 和视觉领域展现出极强的统治力。多模态方面，百度的 **Unlimited-OCR** 和 NVIDIA 的 **LocateAnything** 显示出视觉基础模型向特定工具化发展的趋势。此外，社区对“Uncensored（无审查）”模型的需求激增，带动了相关微调版本的下载量暴涨。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 👍 2,952 | ⬇️ 133,350
    *   **说明**: 本周人气最高的基座模型，采用 `glm_moe_dsa` 架构，标志着 GLM 系列正式进入 MoE 时代，引发社区广泛关注。

*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
    *   作者: Qwen | 👍 440 | ⬇️ 26,223
    *   **说明**: 专为 Agentic 场景优化的大模型，展示了 Qwen 在构建智能体世界模型方面的最新探索。

*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
    *   作者: deepseek-ai | 👍 221 | ⬇️ 5,460
    *   **说明**: DeepSeek V4 系列的高性能版本，搭配 DSpark 架构，继续在推理和生成能力上突破。

*   **[deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)**
    *   作者: deepreinforce-ai | 👍 169 | ⬇️ 1,622
    *   **说明**: Ornith 系列的巨型 MoE 模型，参数量达 397B，尝试挑战开源模型的性能天花板。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   作者: baidu | 👍 1,383 | ⬇️ 362,945
    *   **说明**: 百度推出的强力 OCR 模型，支持无限分辨率输入，解决了传统 OCR 的痛点，下载量极高。

*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
    *   作者: krea | 👍 395 | ⬇️ 38,454
    *   **说明**: 顶级文生图模型 Krea-2 的 Turbo 加速版，兼顾生成质量与速度，深受创作者喜爱。

*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   作者: nvidia | 👍 2,483 | ⬇️ 728,320
    *   **说明**: NVIDIA 推出的轻量级视觉定位模型，下载量惊人，显示出端侧视觉任务的巨大需求。

*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   作者: nvidia | 👍 745 | ⬇️ 76,154
    *   **说明**: 专为流式语音识别设计的小参数模型，适合实时转录场景。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    *   作者: WeiboAI | 👍 750 | ⬇️ 63,449
    *   **说明**: 专注于数学推理的 3B 小模型，证明了小参数模型在特定逻辑任务上的潜力。

*   **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)**
    *   作者: Chunjiang-Intelligence | 👍 130 | ⬇️ 1,463
    *   **说明**: 基于 DeepSeek V4 微调的网络安全专用模型，针对防御性任务进行了优化。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 👍 2,333 | ⬇️ 3,089,944
    *   **说明**: 本周下载量之王，去除审查的 Qwen3.6 MoE 版本，反映了社区对无限制模型的极大渴求。

*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   作者: yuxinlu1 | 👍 2,504 | ⬇️ 561,577
    *   **说明**: Gemma-4 的代码专用微调版，点赞数极高，被认为是目前最强的中型代码模型之一。

*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   作者: empero-ai | 👍 959 | ⬇️ 907,682
    *   **说明**: 融合了 Claude 风格的 Qwen 混合专家模型，GGUF 格式使其在本地部署中极受欢迎。

*   **[nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4) & [nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
    *   作者: nvidia | 👍 171 / 378 | ⬇️ 81,944 / 5,392,518
    *   **说明**: NVIDIA 官方推出的 NVFP4 量化版，为最新旗舰模型提供了极致的显存压缩方案。

---

## 3. 生态信号

**模型家族势头：**
**Qwen** 系列已彻底统治开源社区的中坚层。从榜单可见，Qwen3.5/3.6 的衍生模型（AgentWorld, Ornith, Qwythos 等）覆盖了从 9B 到 397B 的各个尺寸，且在下载量上占据绝对优势。**GLM** 系列通过 5.2 版本的发布和 NVIDIA 的背书，正试图打破 Qwen 的垄断格局。

**量化与硬件趋势：**
**NVFP4** 量化格式的出现是一个重要信号。NVIDIA 通过 Model Optimizer 工具链深度介入模型生态，Qwen3.6-35B-NVFP4 超过 500 万的下载量表明，用户对能在消费级显卡上运行的大参数 MoE 模型有着近乎疯狂的需求。**GGUF** 格式依然是本地推理的标准，Unsloth 和社区开发者是其核心推动力。

**微调风向：**
“Uncensored（无审查）”成为本周微调模型的关键词。HauhauCS 的模型下载量突破 300 万，说明尽管大厂在安全对齐上投入巨大，但社区用户仍强烈追求回答无限制、更原生的模型版本。同时，**Agentic（智能体）** 和 **Coding（代码）** 是微调的两个主要方向。

---

## 4. 值得探索

1.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   **理由**: 作为本周热度最高的新架构模型，GLM-5.2 的 MoE 设计和对话能力值得深入研究，尤其是它与 Qwen 系列的性能对比将是接下来的社区热点。

2.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **理由**: 超过 70 万的下载量证明其实用性极高。对于需要视觉定位、目标检测的开发者来说，这是一个极具性价比的轻量级 SOTA 解决方案。

3.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **理由**: 作为一个现象级的社区微调模型，其惊人的下载量背后反映了用户对“无限制”模型的刚需。从工程角度看，它如何平衡 MoE 架构与去审查化也具有很高的研究价值。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*