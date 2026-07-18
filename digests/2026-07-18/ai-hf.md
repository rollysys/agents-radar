# Hugging Face 热门模型日报 2026-07-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-18 02:41 UTC

---

# Hugging Face 热门模型日报 (2026-07-18)

## 📰 今日速览
本期榜单最引人注目的是 **GLM-5.2** 的发布，以超过 4000 的点赞数稳居榜首，标志着智谱生态的持续强劲势头。**Qwen3.5/3.6** 系列依然是开源社区的绝对主力，衍生出的微调版、量化版（GGUF/MLX）占据了榜单近半数席位。极端量化技术受到热捧，**prism-ml** 推出的 1-bit/2-bit 模型下载量破百万，显示端侧部署需求已进入“极简主义”时代。多模态方面，百度 OCR 与腾讯 Hy3 模型的上榜，表明大厂在垂类能力与基座模型上的双重发力。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

1.  **zai-org/GLM-5.2**
    *   作者: zai-org | 👍 4,073 | ⬇️ 534,698
    *   一句话说明：本期点赞数冠军，新一代 GLM 基座模型，采用 MoE 架构，兼顾性能与推理成本。
    *   链接: https://huggingface.co/zai-org/GLM-5.2

2.  **tencent/Hy3**
    *   作者: tencent | 👍 820 | ⬇️ 12,719
    *   一句话说明：腾讯推出的最新文本生成模型，作为基座模型迅速获得了社区关注。
    *   链接: https://huggingface.co/tencent/Hy3

3.  **InternScience/Agents-A1**
    *   作者: InternScience | 👍 573 | ⬇️ 34,066
    *   一句话说明：基于 Qwen3.5 MoE 的智能体模型，专为复杂任务和图像文本交互设计。
    *   链接: https://huggingface.co/InternScience/Agents-A1

4.  **Cactus-Compute/needle**
    *   作者: Cactus-Compute | 👍 257 | ⬇️ 874
    *   一句话说明：主打工具调用和函数执行能力的 JAX 架构模型，适合 Agent 开发者研究。
    *   链接: https://huggingface.co/Cactus-Compute/needle

### 🎨 多模态与生成（图像、视频、音频、文本到X）

1.  **baidu/Unlimited-OCR**
    *   作者: baidu | 👍 2,020 | ⬇️ 1,992,355
    *   一句话说明：下载量高达 200 万的 OCR 利器，解决了长文档识别痛点，实用价值极高。
    *   链接: https://huggingface.co/baidu/Unlimited-OCR

2.  **thinkingmachines/Inkling**
    *   作者: thinkingmachines | 👍 962 | ⬇️ 7,870
    *   一句话说明：本周热门的图像文本交互模型，亮点在于优秀的对话式多模态理解能力。
    *   链接: https://huggingface.co/thinkingmachines/Inkling

3.  **Wan-AI/Wan-Dancer-14B**
    *   作者: Wan-AI | 👍 108 | ⬇️ 2,185
    *   一句话说明：专注于图像生成视频（I2V）的 14B 模型，针对人物动态生成进行了优化。
    *   链接: https://huggingface.co/Wan-AI/Wan-Dancer-14B

4.  **bottlecapai/ThinkingCap-Qwen3.6-27B**
    *   作者: bottlecapai | 👍 416 | ⬇️ 9,383
    *   一句话说明：基于 Qwen3.6 的大参数多模态模型，强化了思维链与视觉理解结合的能力。
    *   链接: https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B

### 🔧 专用模型（代码、数学、医疗、嵌入）

1.  **OpenMOSS-Team/MOSS-Transcribe-Diarize**
    *   作者: OpenMOSS-Team | 👍 249 | ⬇️ 83,160
    *   一句话说明：集语音转录与说话人分离于一体的专用模型，音频处理领域的开源佳作。
    *   链接: https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize

2.  **conradlocke/krea2-identity-edit**
    *   作者: conradlocke | 👍 348 | ⬇️ 0
    *   一句话说明：基于 Krea-2 的 LoRA 模型，专注于高保真的身份编辑功能，设计师新宠。
    *   链接: https://huggingface.co/conradlocke/krea2-identity-edit

### 📦 微调与量化（社区微调、GGUF、AWQ）

1.  **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   作者: HauhauCS | 👍 2,829 | ⬇️ 2,295,313
    *   一句话说明：本期下载量冠军，无审查版本的 Qwen3.6 大参数模型，深受社区欢迎。
    *   链接: https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive

2.  **prism-ml/Bonsai-27B-gguf**
    *   作者: prism-ml | 👍 397 | ⬇️ 1,045,182
    *   一句话说明：突破性的 1-bit 量化模型，将 27B 模型压缩至极致，下载量证明其端侧部署价值。
    *   链接: https://huggingface.co/prism-ml/Bonsai-27B-gguf

3.  **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   作者: empero-ai | 👍 2,275 | ⬇️ 2,096,147
    *   一句话说明：融合 Claude 风格的 Qwen 系微调版，兼顾了推理能力与 GGUF 格式的易用性。
    *   链接: https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF

4.  **prism-ml/Ternary-Bonsai-27B-gguf**
    *   作者: prism-ml | 👍 681 | ⬇️ 200,774
    *   一句话说明：Bonsai 的 2-bit 版本，相比 1-bit 提供了精度与速度的平衡选择。
    *   链接: https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf

5.  **GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF**
    *   作者: GnLOLot | 👍 273 | ⬇️ 154,762
    *   一句话说明：微型参数模型，植入类 Claude Opus 的思维模式，适合本地运行测试。
    *   链接: https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF

---

## 📈 生态信号

**Qwen 系 derivatives 统治力加强，极端量化成新宠**
从榜单来看，**Qwen 家族（3.5/3.6）** 依然是开源生态的“货币”，榜单中至少 30% 的模型基于 Qwen 改造，涵盖了从 9B 到 35B 的参数段，且多模态（Vision）能力已成为标配。值得注意的趋势是**“极限量化”的普及**，`prism-ml` 带来的 1-bit 和 2-bit 量化技术（Bonsai 系列）获得了惊人的百万级下载，这表明在边缘设备算力受限的背景下，模型体积的缩减比单纯追求精度更具吸引力。此外，社区对**“Uncensored（无审查）”**版本的需求依然旺盛，`HauhauCS` 的版本下载量高达 200 万+，反映了开源社区对模型输出自由度的强需求。

---

## 💡 值得探索

1.  **prism-ml/Bonsai-27B-gguf**
    *   理由：如果你想体验“1-bit 量化”如何在大模型上实现推理，这是最佳范例。虽然精度有损，但其在消费级硬件上的运行效率极具启发意义。

2.  **baidu/Unlimited-OCR**
    *   理由：极其实用的生产力工具。高达 200 万的下载量验证了其在文档数字化场景中的统治级表现，适合集成到 RAG 或文档处理工作流中。

3.  **zai-org/GLM-5.2**
    *   理由：作为本周人气最高的新基座模型，GLM-5.2 的 MoE 架构表现值得研究，特别是其长文本与中文理解能力，是 Llama 和 Qwen 之外的有力竞争者。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*