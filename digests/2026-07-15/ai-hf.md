# Hugging Face 热门模型日报 2026-07-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-15 02:39 UTC

---

# Hugging Face 热门模型日报
**日期**：2026-07-15

---

### 1. 今日速览

本周 Hugging Face 热门榜呈现出 **"Qwen 系模型霸榜、国产基座崛起、极致量化受捧"** 的三大特征。Qwen3.5/3.6 系列凭借出色的综合性能，占据了榜单近三分之一的席位，尤其是在端侧 GGUF 量化版本上表现尤为突出。智谱 AI 的 **GLM-5.2** 与腾讯的 **Hy3** 强势入围，展示了国产大模型在开源生态中的强劲竞争力。技术层面，MoE（混合专家）架构与极低比特量化（如 1-bit/2-bit）成为新的技术探索焦点，旨在降低大模型部署成本。

---

### 2. 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 👍 3,949 | ⬇️ 489,611
    *   **点评**：国产开源模型的头部力量，支持对话与文本生成，点赞数高居榜首，显示出极高的社区认可度。
*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
    *   作者: tencent | 👍 782 | ⬇️ 10,406
    *   **点评**：腾讯混元系列最新版本，凭借大厂背书与优秀的基座能力，发布即登榜，值得关注。
*   **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
    *   作者: InternScience | 👍 539 | ⬇️ 30,539
    *   **点评**：基于 Qwen3.5 MoE 架构的智能体模型，专为 Agentic 任务优化，是构建 AI Agent 的热门选择。
*   **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
    *   作者: yuxinlu1 | 👍 1,189 | ⬇️ 468,629
    *   **点评**：Gemma-4 的深度微调版，专注于 Coding 与 Terminal 操作，下载量惊人，是开发者偏爱的工具型模型。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   作者: baidu | 👍 1,984 | ⬇️ 1,715,301
    *   **点评**：百度推出的 OCR 皇冠级模型，下载量破百万，凭借强大的图文提取能力成为多模态基础设施。
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 👍 2,734 | ⬇️ 2,443,871
    *   **点评**：基于 Qwen3.6 的 35B MoE 视觉语言模型，主打“无审查”与“激进”微调，在开源社区引发了极高的话题度。
*   **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**
    *   作者: Alissonerdx | 👍 141 | ⬇️ 0
    *   **点评**：针对视频生成中身份保持问题的 LoRA 模型，解决了 AI 视频生成的痛点需求。
*   **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)**
    *   作者: nineninesix | 👍 101 | ⬇️ 5,872
    *   **点评**：基于 Qwen3.5 的 TTS（文本转语音）模型，实现了高质量语音合成。

#### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
    *   作者: OpenMOSS-Team | 👍 190 | ⬇️ 65,109
    *   **点评**：集成了语音转录与说话人分离功能，实用性极强，是会议记录与语音处理的利器。
*   **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
    *   作者: froggeric | 👍 904 | ⬇️ 0
    *   **点评**：纯工具类资源，修复了 Qwen 系列的聊天模板问题，高点赞数反映了社区对细节体验的重视。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *   作者: unsloth | 👍 1,092 | ⬇️ 2,904,515
    *   **点评**：本周下载量冠军，Unsloth 出品的 GGUF 量化版，兼顾了性能与便携性，是本地部署的首选。
*   **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
    *   作者: prism-ml | 👍 171 | ⬇️ 23
    *   **点评**：探索性的“三进制/2-bit”极低比特量化模型，试图在极小体积下保留大模型能力，技术前瞻性极强。
*   **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)**
    *   作者: unsloth | 👍 172 | ⬇️ 55,222
    *   **点评**：DeepSeek V4 的社区量化版，让前沿的 DeepSeek 架构能快速在消费级显卡上运行。

---

### 3. 生态信号

1.  **模型家族格局**：Qwen 系列已稳坐开源界“安卓”地位，从基座到垂直应用（OCR、TTS、数学）均有覆盖；GLM 与 DeepSeek 作为国产第二梯队强势跟进；Gemma 4 在代码/Agent 领域展现潜力。
2.  **架构趋势**：**MoE（Mixture of Experts）常态化**。榜单中出现大量 A3B、MoE 标签的模型（如 Agents-A1, Qwen3.6-35B），说明在追求高性能的同时，推理成本控制已成为社区共识。
3.  **量化前沿**：社区不再满足于传统的 INT4/GGUF，开始向 **极低比特（1-bit/2-bit/Ternary）** 进军（如 Bonsai 系列），这预示着未来在手机端运行 30B+ 参数模型可能成为现实。
4.  **开源实用性**：OCR、语音转录、聊天模板修复等实用工具模型的高下载量表明，社区正在从“玩模型”向“用模型”务实转型。

---

### 4. 值得探索

*   **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
    *   **理由**：如果你关注模型压缩技术的边界，这是一个极佳的案例。尝试看看 2-bit 量化后的模型是否还能保持逻辑能力，这代表了未来端侧部署的极限方向。
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **理由**：作为下载量破百万的现象级产品，如果你想寻找一款开箱即用的 OCR 工具，它是目前开源界最可靠的选择之一。
*   **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
    *   **理由**：专为 Agent 任务设计，结合了 MoE 架构的高效性。对于正在构建 AI 智能体应用的开发者来说，这比通用基座模型更适合作为控制核心。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*