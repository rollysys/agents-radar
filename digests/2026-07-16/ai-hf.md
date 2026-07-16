# Hugging Face 热门模型日报 2026-07-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-16 02:46 UTC

---

# Hugging Face 热门模型日报 (2026-07-16)

## 1. 今日速览
本期榜单呈现出“开源追赶闭源”的强劲势头，**Qwen** 家族继续在多模态和文本生成领域占据主导地位，多款高下载量模型均基于其架构。社区对**推理能力**和**端侧量化**的需求激增，1-bit/2-bit 极低比特量化模型进入视野，显示出降低部署成本的趋势。此外，OCR 技术取得新突破，视频生成与编辑类模型亦表现活跃，展现了多模态应用的多样化发展。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

*   **zai-org/GLM-5.2**
    *   **作者**: zai-org | **点赞**: 4,002 | **下载**: 489,611
    *   **说明**: 本期最受关注的基座模型之一，采用 MoE 架构，凭借强大的对话和生成能力获得极高的社区认可度。
*   **tencent/Hy3**
    *   **作者**: tencent | **点赞**: 801 | **下载**: 10,406
    *   **说明**: 腾讯发布的 Hunyuan 系列最新文本生成模型，代表了大厂在通用 LLM 领域的持续投入。
*   **deepreinforce-ai/Ornith-1.0-35B-GGUF**
    *   **作者**: deepreinforce-ai | **点赞**: 895 | **下载**: 1,533,354
    *   **说明**: 下载量惊人的一款 35B 规模模型，GGUF 格式表明其主要服务于高性价比的本地推理场景。
*   **nvidia/Nemotron-Labs-Audex-30B-A3B**
    *   **作者**: nvidia | **点赞**: 156 | **下载**: 1,332
    *   **说明**: 英伟达推出的 Nemotron 系列新成员，针对特定任务优化，展现了硬件厂商在模型层的布局。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **baidu/Unlimited-OCR**
    *   **作者**: baidu | **点赞**: 2,002 | **下载**: 1,715,301
    *   **说明**: 百度推出的 OCR 模型，以超高的下载量证明了 OCR 在多模态应用中的基础性地位。
*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
    *   **作者**: HauhauCS | **点赞**: 2,761 | **下载**: 2,443,871
    *   **说明**: 基于 Qwen3.6 的无审查多模态模型，因解除了内容限制且具备视觉能力，在社区引发巨大反响。
*   **thinkingmachines/Inkling**
    *   **作者**: thinkingmachines | **点赞**: 389 | **下载**: 0
    *   **说明**: 支持图像、文本和音频的全方位多模态模型，虽刚发布暂无下载，但高点赞数预示了极高期待。
*   **conradlocke/krea2-identity-edit**
    *   **作者**: conradlocke | **点赞**: 307 | **下载**: 0
    *   **说明**: 基于 Krea-2 的 LoRA 模型，专注于图像身份编辑，满足了用户对图像精细化控制的需求。
*   **robbyant/lingbot-world-v2-14b-causal-fast**
    *   **作者**: robbyant | **点赞**: 100 | **下载**: 0
    *   **说明**: 探索“世界模型”概念的视频生成模型，尝试用因果推理理解动态视觉内容。

### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**
    *   **作者**: yuxinlu1 | **点赞**: 1,198 | **下载**: 468,629
    *   **说明**: 专为 Agentic（智能体）和编程任务优化的 Gemma-4 衍生版，下载量极高，适合终端操作场景。
*   **Cactus-Compute/needle**
    *   **作者**: Cactus-Compute | **点赞**: 236 | **下载**: 571
    *   **说明**: 基于 JAX 的工具调用模型，专注于函数调用和工具集成，是构建 AI Agent 的关键组件。
*   **OpenMOSS-Team/MOSS-Transcribe-Diarize**
    *   **作者**: OpenMOSS-Team | **点赞**: 215 | **下载**: 65,109
    *   **说明**: 专注于音频转录与说话人分离的专用模型，在语音处理领域实用性极强。

### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
    *   **作者**: empero-ai | **点赞**: 2,217 | **下载**: 2,006,265
    *   **说明**: 本期爆款，基于 Qwen3.5 的微调版，主打推理能力，下载量破百万，是端侧部署的首选。
*   **prism-ml/Ternary-Bonsai-27B-gguf**
    *   **作者**: prism-ml | **点赞**: 477 | **下载**: 23
    *   **说明**: 探索性的 2-bit/三值量化模型，将模型压缩推向极致，代表了极致压缩的前沿尝试。
*   **unsloth/Qwen3.6-27B-NVFP4**
    *   **作者**: unsloth | **点赞**: 208 | **下载**: 1,599,150
    *   **说明**: Unsloth 团队推出的 NVFP4 量化版，专为 Nvidia 显卡优化，兼顾了性能与显存占用。
*   **froggeric/Qwen-Fixed-Chat-Templates**
    *   **作者**: froggeric | **点赞**: 918 | **下载**: 0
    *   **说明**: 修复了 Qwen 系列聊天模板问题的资源包，反映了社区对模型交互体验细节的重视。

---

## 3. 生态信号

**Qwen 家族统治力稳固**：从榜单看，Qwen3.5 及 Qwen3.6 已成为社区微调的绝对基石，无论是热门的 Qwythos 推理模型，还是 HauhauCS 的无审查版本，均基于此架构，显示出其在开源权重领域的霸主地位。

**量化走向两极化**：一方面，GGUF 格式依然是本地部署的主流（如 Ornith 和 Qwythos）；另一方面，极致量化技术（如 Ternary-Bonsai 的 1-bit/2-bit）开始登上热门榜，这预示着社区正在探索在极低资源消耗下运行大模型的可能性，可能是为了未来在手机或 IoT 设备上的普及做准备。

**推理与 Agent 成为新焦点**：带有 "Thinking"、"Reasoning"、"Agentic" 标签的模型（如 Qwythos 和 Gemma-4 微调版）深受欢迎，说明开源社区的关注点正从单纯的文本生成转向更深层的逻辑推理和工具使用能力，试图在本地复现 o1 级别的体验。

---

## 4. 值得探索

1.  **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   **理由**: 拥有本期最高的下载量之一，定位为“推理模型”。如果你想在本地体验类似闭源模型的深度思考能力，这是一个绝佳的尝试对象，且 9B 大小对显卡非常友好。

2.  **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
    *   **理由**: 极具实验性质的 2-bit 量化模型。虽然下载量不高，但代表了模型压缩的前沿探索。对于技术极客而言，研究其如何在极低精度下保持语言能力极具参考价值。

3.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **理由**: 百度出品，下载量超过 170 万。对于需要处理文档、截图或多模态 RAG 的开发者来说，这是一个不可或缺的工业级工具，值得在各类 Pipeline 中测试集成。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*