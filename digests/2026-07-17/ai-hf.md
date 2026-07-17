# Hugging Face 热门模型日报 2026-07-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-17 02:49 UTC

---

# Hugging Face 热门模型日报
**日期：** 2026-07-17

---

## 1. 今日速览

今日 Hugging Face Hub 上最引人注目的是**智谱 AI 的 GLM-5.2** 发布，以超过 4000 的点赞数成为当日明星，展示了 MoE 架构在开源社区的强大吸引力。同时，**极低比特量化**浪潮席卷榜单，`prism-ml` 推出的 1-bit 和 2-bit 模型下载量惊人，显示出社区对端侧高效推理的强烈需求。**Qwen 系列**依然是微调生态的基石，涌现出大量多模态与推理增强变体。此外，多模态领域迎来 **Inkling** 和 **Unlimited-OCR** 等强力新秀，拓宽了视觉语言模型的应用边界。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型）

*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   **作者：** zai-org | **点赞：** 4,030 | **下载：** 513,061
    *   **说明：** 今日点赞数最高的模型，新一代 MoE 架构基座模型，引发了社区对高效对话生成的广泛关注。
*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
    *   **作者：** tencent | **点赞：** 813 | **下载：** 11,849
    *   **说明：** 腾讯发布的 Hunyuan 系列最新版本，作为强力基座模型迅速进入热门榜单。
*   **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
    *   **作者：** yuxinlu1 | **点赞：** 1,208 | **下载：** 506,068
    *   **说明：** 专为 Agentic（智能体）和 Coding 场景优化的 Gemma-4 变体，高下载量显示了开发者对 Agent 工具链的热情。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
    *   **作者：** thinkingmachines | **点赞：** 820 | **下载：** 4
    *   **说明：** 榜单排名第一的新晋热门模型，专注于图文理解与对话，虽下载量少但社区关注度极高。
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **作者：** baidu | **点赞：** 2,011 | **下载：** 1,852,722
    *   **说明：** 百度推出的 OCR 利器，下载量突破百万，解决了复杂的文字提取痛点，实用性极强。
*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
    *   **作者：** OpenMOSS-Team | **点赞：** 233 | **下载：** 75,105
    *   **说明：** 集成了语音转录与说话人分离功能，填补了开源音频处理的高需求空白。
*   **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**
    *   **作者：** Wan-AI | **点赞：** 92 | **下载：** 1,884
    *   **说明：** 图生视频领域的新尝试，显示出视频生成模型参数量正在向 10B+ 级别迈进。

### 🔧 专用模型（代码、智能体、OCR）

*   **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
    *   **作者：** InternScience | **点赞：** 568 | **下载：** 33,400
    *   **说明：** 基于 Qwen3.5 MoE 的智能体专用模型，强调了工具调用与多模态交互能力。
*   **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**
    *   **作者：** Cactus-Compute | **点赞：** 249 | **下载：** 733
    *   **说明：** 专注于 Function Calling 和 Tool Use 的小型模型，为 Agent 开发提供了轻量级选择。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
    *   **作者：** prism-ml | **点赞：** 343 | **下载：** 559,267
    *   **说明：** 令人震惊的 **1-bit** 量化模型，以极低的资源占用实现了 27B 模型的消费级运行，下载量极高。
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **作者：** HauhauCS | **点赞：** 2,787 | **下载：** 2,328,315
    *   **说明：** 社区微调杰作，结合了 MoE 架构与多模态能力，"去审查"特性使其在创意写作领域备受青睐。
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   **作者：** empero-ai | **点赞：** 2,239 | **下载：** 2,042,670
    *   **说明：** 融合 Claude 风格的推理增强模型，凭借优秀的逻辑表现获得了超 200 万次下载。
*   **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)**
    *   **作者：** unsloth | **点赞：** 216 | **下载：** 1,712,974
    *   **说明：** Unsloth 出品的高质量 FP4 量化版本，兼顾了显存节省与模型性能，是高参数模型的落地首选。

---

## 3. 生态信号

本周生态呈现出**“基座大模型迭代”与“极致压缩量化”**并行的趋势。

1.  **Qwen 家族统治力稳固：** 热门榜单中半数以上的微调模型（如 Qwythos, HauhauCS, Agents-A1）均基于 Qwen3.5 或 3.6 架构，证明其在开源社区已形成类似 Llama 早期的生态壁垒，尤其在多模态和 MoE 领域。
2.  **极低比特量化爆发：** `prism-ml` 的 1-bit/2-bit 模型（Bonsai 系列）登上下载量榜首，标志着用户对在消费级硬件（甚至移动端）运行大模型的渴望已超越了对单一基准测试性能的追求，实用主义至上。
3.  **MoE 成为主流：** 从 GLM-5.2 到各类微调模型，混合专家架构已成为高性能模型的标准配置，开源社区正从“拼参数量”转向“拼架构效率”。

---

## 4. 值得探索

1.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**：作为今日点赞王，它是国产大模型的重要里程碑，建议关注其 MoE 架构在长文本和工具调用上的表现。
2.  **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**：如果你想验证“1-bit 量化是否真的可用”，这是必测模型。其惊人的下载量暗示了在特定任务下，质量损失可能比预想的要小。
3.  **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**：对于开发者而言，这是构建 AI Agent 的优质基座，值得探索其在多模态工具调用方面的鲁棒性。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*