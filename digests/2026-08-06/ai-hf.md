# Hugging Face 热门模型日报 2026-08-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-06 02:44 UTC

---

# Hugging Face 热门模型日报
**日期**：2026-08-06

---

### 1. 今日速览

本周 Hugging Face 迎来了多款重磅级模型发布，**MoonshotAI 的 Kimi-K3** 以超百万下载量和万级点赞成为本周最耀眼的明星，展示了国产大模型在多模态领域的强劲实力。**DeepSeek-V4-Flash** 系列更新迭代，凭借轻量化架构继续霸榜文本生成下载量。视频生成领域迎来新玩家，**MiniMax-H3** 的发布及其与 ComfyUI 的无缝集成，引发了社区对视频生成工作流的新一轮探索。此外，开源社区对 **Qwen3.6** 系列的微调热情不减，"Uncensored"（无审查）版本及 GGUF 量化模型占据了榜单多个席位。

---

### 2. 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

*   **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
    *   **作者**：moonshotai | **点赞**：10,126 | **下载**：1,125,935
    *   **说明**：本周最热模型，作为新一代多模态大模型，其强大的图文理解能力与推理性能使其下载量断层领先，标志着 Kimi 系列开源生态的成熟。

*   **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**
    *   **作者**：deepseek-ai | **点赞**：2,504 | **下载**：433,284
    *   **说明**：DeepSeek-V4 系列的最新迭代版本，主打高效推理与对话能力，延续了该系列“高性能低门槛”的口碑，下载量极高。

*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   **作者**：zai-org | **点赞**：4,850 | **下载**：2,234,662
    *   **说明**：老牌劲旅 GLM 系列的 5.2 版本，凭借超高下载量证明其在实际生产环境中的广泛应用，集成了 MoE 架构，性能强劲。

*   **[LGAI-EXAONE/K-EXAONE-2.0-750B-A37B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B)**
    *   **作者**：LGAI-EXAONE | **点赞**：129 | **下载**：325
    *   **说明**：韩国 LG 发布的巨型 MoE 模型，总参数 750B 激活 37B，展现了国际大厂在开源超大模型上的持续投入。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
    *   **作者**：MiniMaxAI | **点赞**：2,514 | **下载**：10,841
    *   **说明**：本周视频生成领域的焦点，支持图生视频和文生视频，生成质量与连贯性获得社区高度认可。

*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **作者**：baidu | **点赞**：3,909 | **下载**：2,703,366
    *   **说明**：百度推出的 OCR 模型，以“Unlimited”为名，支持多种场景文字识别，下载量突破 270 万，是当之无愧的实用工具之王。

*   **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)**
    *   **作者**：microsoft | **点赞**：276 | **下载**：435,784
    *   **说明**：微软推出的多模态模型，在图文理解任务上表现优异，下载量稳定，显示了微软在开源多模态领域的持续布局。

*   **[Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)**
    *   **作者**：Audio8 | **点赞**：275 | **下载**：11,276
    *   **说明**：轻量级语音合成模型，参数仅 0.6B，适合边缘设备部署，为语音生成提供了新的开源选择。

#### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**
    *   **作者**：Kwaipilot | **点赞**：497 | **下载**：15,381
    *   **说明**：专为代码生成设计的模型，基于 Qwen 架构微调，针对开发场景优化，是开发者工具链中的热门选择。

*   **[mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B)**
    *   **作者**：mistralai | **点赞**：132 | **下载**：166
    *   **说明**：Mistral 推出的安全防护模型，用于检测和过滤有害内容，填补了开源安全护栏模型的空白。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
    *   **作者**：DavidAU | **点赞**：1,593 | **下载**：1,633,405
    *   **说明**：基于 Qwen3.6 的深度微调版本，主打“无审查”与创意写作，长命名与高下载量体现了社区对个性化、无限制模型的狂热需求。

*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **作者**：HauhauCS | **点赞**：3,319 | **下载**：1,930,898
    *   **说明**：另一款热门的 Qwen3.6 微调版，侧重于更“激进”的回复风格，点赞数极高，显示出特定风格化微调在社区中的受欢迎程度。

*   **[unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)**
    *   **作者**：unsloth | **点赞**：502 | **下载**：111,678
    *   **说明**：Unsloth 团队火速跟进的 GGUF 量化版，让消费级显卡也能快速运行最新的 DeepSeek V4 模型，下载量证明了其工具价值。

---

### 3. 生态信号

**模型家族势头分析**：
**Qwen3.6** 已成为开源社区微调的绝对核心底座。榜单中大量高下载量模型（如 DavidAU、HauhauCS 的版本）均基于 Qwen3.6，且多集中在“Uncensored（无审查）”和特定风格化方向，说明社区对基座模型的定制化需求已从“通用优化”转向“个性化表达”。与此同时，**DeepSeek-V4** 与 **GLM-5.2** 凭借官方基座的高下载量，稳固了其在生产级应用中的地位。

**开源趋势观察**：
视频生成领域正在复刻图像生成的路径，**MiniMax-H3** 结合 **ComfyUI** 的组合（Comfy-Org 版本）表明，开源工作流工具正在成为连接高端生成模型与用户的关键桥梁。此外，百度 **Unlimited-OCR** 的爆火揭示了“垂类工具模型”在海量数据处理场景下的刚需，实用主义模型依然是流量担当。

**量化动态**：
**GGUF** 格式仍是量化主流，Unsloth 等团队对热门模型（如 DeepSeek、Kimi）的跟进速度极快，极大地降低了用户尝试新模型的门槛，推动了模型从“发布”到“普及”的转化效率。

---

### 4. 值得探索

1.  **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
    *   **理由**：作为本周数据表现最夸张的模型，其在多模态理解和长文本处理上的能力代表了当前 SOTA 水平，无论是学术评测还是应用落地都极具研究价值。

2.  **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
    *   **理由**：视频生成是当前的流量高地，MiniMax-H3 的出现为开源视频生成提供了新的高质量选择，结合其 ComfyUI 生态，非常适合创意工作者进行实际测试。

3.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **理由**：如果你的工作流涉及大量文档处理，这款下载量超 270 万的模型是必备工具。其“Unlimited”的命名暗示了其在复杂场景下的鲁棒性，值得集成到现有 pipeline 中进行对比测试。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*