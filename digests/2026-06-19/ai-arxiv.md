# ArXiv AI 研究日报 2026-06-19

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-06-19 04:42 UTC

---

# ArXiv AI 研究日报 (2026-06-19)

## 1. 今日速览
今日 ArXiv 投稿重点关注 **AI 智能体的安全性与可靠性**，多篇论文探讨了多轮对抗攻击防御、权限控制及状态一致性维护。在模型效率方面，针对智能体长上下文场景的 **KV Cache 量化**和**端侧推理优化**成为新热点。对齐研究开始深入细粒度信号，利用**眼动和鼠标轨迹等隐式反馈**进行偏好学习展现了巨大潜力。此外，**扩散模型的可解释性**及**多模态大模型的社会偏见归因**分析为理解模型内部机制提供了新视角。

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

*   **How Transparent is DiffusionGemma?**
    *   作者: J. Engels et al.
    *   链接: http://arxiv.org/abs/2606.20560v1
    *   一句话说明: 探讨扩散语言模型在连续潜在空间计算导致的“推理不透明”问题，为扩散 LLM 的机制可解释性敲响警钟。

*   **Your Mouse and Eyes Secretly Leak Your Preference: LLM Alignment using Implicit Feedback from Users**
    *   作者: H. Chang et al.
    *   链接: http://arxiv.org/abs/2606.20482v1
    *   一句话说明: 创新性地利用鼠标移动和眼动追踪等隐式生理信号作为反馈信号对齐 LLM，解决了显式反馈数据稀缺的问题。

*   **What Do Safety-Aligned LLMs Learn From Mixed Compliance Demonstrations?**
    *   作者: S. Dai, M. Patel
    *   链接: http://arxiv.org/abs/2606.20508v1
    *   一句话说明: 揭示了混合合规演示（良性/有害响应混杂）如何被模型误解，指出模型可能在上下文学习中对安全边界产生误判。

*   **Toward Calibrated Mixture-of-Experts Under Distribution Shift**
    *   作者: G. Wong et al.
    *   链接: http://arxiv.org/abs/2606.20544v1
    *   一句话说明: 针对分布偏移问题，提出在个体预测器层面强制校准以提升 MoE 集成模型的准确性与鲁棒性。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

*   **LLM agent safety, multi-turn red-teaming, jailbreak benchmarks, adversarial robustness, safety-critical systems (NRT-Bench)**
    *   作者: H. Lee et al.
    *   链接: http://arxiv.org/abs/2606.20408v1
    *   一句话说明: 提出了针对 LLM 智能体的多轮红队测试基准，填补了安全关键系统中持续自适应对抗压力下的评估空白。

*   **LedgerAgent: Structured State for Policy-Adherent Tool-Calling Agents**
    *   作者: M. Uddin et al.
    *   链接: http://arxiv.org/abs/2606.20529v1
    *   一句话说明: 引入账本式结构化状态管理，解决客服领域智能体在多轮工具调用中维护任务状态与遵守策略的难题。

*   **Probe-and-Refine Tuning of Repository Guidance for Coding Agents**
    *   作者: A. Shepard, J. Albrecht
    *   链接: http://arxiv.org/abs/2606.20512v1
    *   一句话说明: 提出一种调优框架，使编码智能体能自动获取并利用代码库的高层操作知识（如 AGENTS.md），提升复杂仓库任务的成功率。

*   **Beyond Global Replanning: Hierarchical Recovery for Cross-Device Agent Systems**
    *   作者: S. Yao et al.
    *   链接: http://arxiv.org/abs/2606.20487v1
    *   一句话说明: 针对跨设备智能体系统，提出分层恢复机制以应对动态运行时故障，避免了全局限重规划的高昂成本。

*   **Sovereign Execution Brokers: Enforcing Certificate-Bound Authority in Agentic Control Planes**
    *   作者: J. He, D. Yu
    *   链接: http://arxiv.org/abs/2606.20520v1
    *   一句话说明: 设计了主权执行代理架构，强制执行证书绑定权限，防止非确定性推理过程在生产环境中越权操作。

### 🔧 方法与框架（新技术、基准测试、效率优化）

*   **UltraQuant: 4-bit KV Caching for Context-Heavy Agents**
    *   作者: I. Chakrabarti et al.
    *   链接: http://arxiv.org/abs/2606.20474v1
    *   一句话说明: 专为重上下文智能体设计的 4-bit KV Cache 压缩方案，利用旋转和码本量化显著降低了显存占用并保持了高并发。

*   **Execution-State Capsules: Graph-Bound Execution-State Checkpoint and Restore**
    *   作者: L. Su
    *   链接: http://arxiv.org/abs/2606.20537v1
    *   一句话说明: 针对端侧物理 AI 服务，提出基于图的执行状态胶囊技术，实现了低延迟、小批量场景下的全状态快速恢复。

### 📊 应用（垂直领域、多模态、代码生成）

*   **Multi-LCB: Extending LiveCodeBench to Multiple Programming Languages**
    *   作者: M. Ivanova et al.
    *   链接: http://arxiv.org/abs/2606.20517v1
    *   一句话说明: 扩展 LiveCodeBench 至多语言环境，提供了抗污染的代码生成能力评估基准，填补了非英语编程评测的空白。

*   **StylisticBias: A Few Human Visual Cues Drive Most Social Biases in MLLMs**
    *   作者: S. Kolli et al.
    *   链接: http://arxiv.org/abs/2606.20527v1
    *   一句话说明: 发现多模态大模型中的社会偏见主要由少数视觉风格线索驱动，为理解模型偏见来源提供了细粒度归因分析。

## 3. 研究趋势信号
从今日论文可见，**Agent 可信度构建** 已超越单纯的能力提升，成为核心议题。研究者不再满足于 Agent 能否完成任务，而是转向关注其在多轮交互中的状态一致性、权限边界及抗攻击能力。同时，**数据效率与信号挖掘** 进入深水区，从传统的显式文本偏好转向挖掘眼动、鼠标轨迹等高信息密度的隐式信号。端侧与边缘计算场景下的**全状态推理优化**开始崭露头角，表明 AI 部署正从云端高吞吐向边缘低延迟场景下沉。

## 4. 值得精读

1.  **Your Mouse and Eyes Secretly Leak Your Preference** (http://arxiv.org/abs/2606.20482v1)
    *   **理由**: 该研究突破了依赖文本反馈的传统对齐范式，挖掘用户无意识的生理行为作为高质量的监督信号，为未来的人机交互（HCI）和对齐数据收集提供了极具想象力的方向。

2.  **UltraQuant: 4-bit KV Caching for Context-Heavy Agents** (http://arxiv.org/abs/2606.20474v1)
    *   **理由**: 随着 Agent 应用上下文长度的爆炸式增长，KV Cache 成为显存瓶颈的关键。该文提出的针对 Agent 特性的量化方案切中痛点，对于工程落地和系统优化具有极高的参考价值。

3.  **What Do Safety-Aligned LLMs Learn From Mixed Compliance Demonstrations?** (http://arxiv.org/abs/2606.20508v1)
    *   **理由**: 深入剖析了上下文学习中的安全盲点，揭示了模型在面对混合指令时的“认知失调”。对于理解大模型安全机制和构建更鲁棒的对齐策略具有重要理论意义。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*