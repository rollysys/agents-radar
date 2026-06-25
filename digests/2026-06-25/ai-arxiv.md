# ArXiv AI 研究日报 2026-06-25

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-06-25 03:51 UTC

---

# ArXiv AI 研究日报 (2026-06-25)

## 1. 今日速览
今日的研究重点集中在**具身智能的训练范式突破**与**AI智能体的安全性架构**。Vision-Language-Action (VLA) 模型成为热点，多篇论文探讨了如何通过强化学习和先验知识克服模仿学习的瓶颈。在智能体安全方面，研究者提出了“不可撤销的安全内核”以解决传统护栏易被绕过的难题，并深入分析了工具使用强化学习中的崩溃现象。此外，关于大模型训练动态的研究揭示了自蒸馏可能导致多样性丧失，以及预训练中出现的“自然去顿悟”现象，为理解模型学习机制提供了新视角。

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

*   **On-Policy Self-Distillation with Sampled Demonstrations Reduces Output Diversity**
    *   链接: http://arxiv.org/abs/2606.26091v1
    *   作者: Andrei Liviu Nicolicioiu et al.
    *   一句话说明: 揭示了在策略自蒸馏虽能提升 pass@1 准确率，但会显著降低输出的多样性，这对依赖多样性探索的任务（如推理）具有潜在风险。

*   **Natural Ungrokking: Asymmetric Control of Which Rules Survive Pretraining**
    *   链接: http://arxiv.org/abs/2606.26050v1
    *   作者: Juliana Li, Diya Sreedhar
    *   一句话说明: 发现语言模型在预训练过程中会出现“自然去顿悟”现象，即某些已学会的规则在训练后期会突然被遗忘，挑战了对持续学习的认知。

*   **Same Evidence, Different Answer: Auditing Order Sensitivity in Multimodal Large Language Models**
    *   链接: http://arxiv.org/abs/2606.26079v1
    *   作者: Akshay Paruchuri et al.
    *   一句话说明: 提出了 Facet-Probe 基准，揭露了 MLLM 在面对相同证据但输入顺序不同时会产生截然不同的答案，指出了当前模型可靠性缺陷。

*   **Model Forensics: Investigating Whether Concerning Behavior Reflects Misalignment**
    *   链接: http://arxiv.org/abs/2606.26071v1
    *   作者: Aditya Singh et al.
    *   一句话说明: 提出模型取证方法，区分模型的不良行为是源于内在的“不对齐”还是良性的混淆，填补了安全评估中仅依赖行为检测的空白。

### 🤖 智能体与推理（规划、工具使用、多智能体）

*   **The Unfireable Safety Kernel: Execution-Time AI Alignment for AI Agents**
    *   链接: http://arxiv.org/abs/2606.26057v1
    *   作者: Seth Dobrin, Łukasz Chmiel
    *   一句话说明: 提出了一种位于智能体运行时之外的“不可撤销安全内核”，防止智能体通过修改系统提示或输出过滤器来逃避安全控制。

*   **Neglected Free Lunch from Post-training: Process Advantage for LLM Agents**
    *   链接: http://arxiv.org/abs/2606.26080v1
    *   作者: Changdae Oh et al.
    *   一句话说明: 针对智能体长序列交互难以标注的问题，提出利用后训练中的“过程优势”作为奖励信号，为智能体强化学习提供了高效的解决方案。

*   **Why Multi-Step Tool-Use Reinforcement Learning Collapses and How Supervisory Signals Fix It**
    *   链接: http://arxiv.org/abs/2606.26027v1
    *   作者: Yupu Hao et al.
    *   一句话说明: 诊断了多步工具使用中强化学习崩溃的原因，并证明了引入监督信号能有效稳定训练过程，提升模型工具调用能力。

*   **Agentic System as Compressor: Quantifying System Intelligence in Bits**
    *   链接: http://arxiv.org/abs/2606.25960v1
    *   作者: Zihan Qin, Hongrui Zhang
    *   一句话说明: 基于“压缩即智能”的理论视角，提出了一种量化智能体系统智能水平的新方法，通过信息论度量评估智能体在多轮交互中的表现。

### 🔧 方法与框架

*   **RevengeBench: Reverse Engineering Code-Space Policies from Behavioral Experiments**
    *   链接: http://arxiv.org/abs/2606.26094v1
    *   作者: Babak Rahmani et al.
    *   一句话说明: 提出了通过行为实验逆向工程智能体策略代码的基准测试，为理解黑盒智能体的内部机制提供了新工具。

### 📊 应用（垂直领域、多模态）

*   **Learning Action Priors for Cross-embodiment Robot Manipulation**
    *   链接: http://arxiv.org/abs/2606.26095v1
    *   作者: Dong Jing et al.
    *   一句话说明: 解决了 VLA 模型中动作模块需从头学习的低效问题，通过学习动作先验显著提升了跨具身机器人操作的数据效率。

*   **FORCE: Efficient VLA Reinforcement Fine-Tuning via Value-Calibrated Warm-up and Self-Distillation**
    *   链接: http://arxiv.org/abs/2606.26006v1
    *   作者: Shuyi Zhang et al.
    *   一句话说明: 针对 VLA 模型强化微调样本效率低的问题，提出了 FORCE 框架，结合价值校准预热和自蒸馏突破了模仿学习的性能上限。

*   **Real-Time Voice AI Hears but Does Not Listen**
    *   链接: http://arxiv.org/abs/2606.26083v1
    *   作者: Martijn Bartelds et al.
    *   一句话说明: 评估了 GPT Realtime 等主流实时语音 AI，发现它们虽能听清内容，却严重忽视了语调、停顿等副语言信息，导致理解偏差。

## 3. 研究趋势信号
今日投稿显示出两个明显的趋势信号：
1.  **VLA 模型训练范式的迭代**：学界正在从单纯的模仿学习转向更高效的强化学习微调（如 FORCE）和引入物理先验。这表明 VLA 正在经历类似于 LLM“预训练+对齐”的演进路径，试图解决动作空间数据稀缺的问题。
2.  **智能体安全的架构级防御**：针对 Agent 越狱和工具滥用，研究重点正从“提示词约束”转向“架构级约束”。多篇论文关注 Agent 行为的可解释性和不可篡改性，显示出对高自主性 AI 系统安全性的担忧正在转化为实际的工程解决方案。

## 4. 值得精读
1.  **The Unfireable Safety Kernel (http://arxiv.org/abs/2606.26057v1)**: 该文提出的“内核”概念极具启发性，它将安全控制权从 Agent 运行时中剥离，为解决日益严重的 Agent 安全问题提供了硬隔离思路，具有很高的工程参考价值。
2.  **Natural Ungrokking (http://arxiv.org/abs/2606.26050v1)**: “Grokking”（顿悟）是近年来的研究热点，而该文发现了反直觉的“去顿悟”现象，揭示了预训练过程中规则遗忘的动态机制，对于理解大模型的知识形成与遗忘过程至关重要。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*