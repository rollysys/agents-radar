# ArXiv AI 研究日报 2026-05-23

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-05-23 03:32 UTC

---

# ArXiv AI 研究日报 (2026-05-23)

## 1. 今日速览
今日的研究重点集中在**智能体系统的自我进化与基础设施构建**，以及**大模型底层架构的精细化改良**。智能体研究正从单纯的工具调用转向更深层的“自我进化”机制，例如通过源码重写实现自我修正，以及通过毫秒级沙箱快照支持高频状态探索。架构层面，线性注意力机制迎来了重要突破，通过解耦记忆的擦除与写入操作，试图解决长上下文建模中的状态冲突问题。此外，分词算法与训练动力学的理论创新，表明社区正重新审视 LLM 的基础组件，试图从底层逻辑解决泛化瓶颈。

---

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐）

*   **Gated DeltaNet-2: Decoupling Erase and Write in Linear Attention**
    链接: http://arxiv.org/abs/2605.22791v1
    作者: A. Hatamizadeh et al.
    一句话说明: **核心架构突破**，提出在线性注意力机制中解耦记忆的“擦除”与“写入”操作，解决了固定大小循环状态中的关联冲突问题，大幅提升了长上下文建模能力。

*   **Post-Training is About States, Not Tokens: A State Distribution View**
    链接: http://arxiv.org/abs/2605.22731v1
    作者: D. Nie
    一句话说明: **理论视角创新**，跳出传统的 Token 概率视角，提出基于“状态分布”的新框架来统一解释 SFT、RL 和蒸馏过程，为理解后训练提供了新的数学直觉。

*   **Vector Policy Optimization: Training for Diversity Improves Test-Time Search**
    链接: http://arxiv.org/abs/2605.22817v1
    作者: R. Bahlous-Boldi et al.
    一句话说明: 针对 LLM 后训练中单一奖励函数的局限性，提出向量策略优化（VPO），通过训练时的多样性优化来提升测试时搜索（如 AlphaEvolve）的效果。

*   **Reducing Political Manipulation with Consistency Training**
    链接: http://arxiv.org/abs/2605.22771v1
    作者: L. Phan et al.
    一句话说明: 揭示了 LLM 中的“隐蔽政治偏见”现象，并通过一致性训练方法有效减少了模型在处理对立政治话题时的操纵行为，提升了模型对齐的鲁棒性。

### 🤖 智能体与推理（规划、工具使用、自我进化）

*   **MOSS: Self-Evolution through Source-Level Rewriting in Autonomous Agent Systems**
    链接: http://arxiv.org/abs/2605.22794v1
    作者: Q. Cai et al.
    一句话说明: **极具前瞻性**，提出了一种通过源代码级重写来实现智能体自我进化的框架，突破了传统智能体仅修改文本或技能文件的局限，实现了更深层的系统级自我修正。

*   **DeltaBox: Scaling Stateful AI Agents with Millisecond-Level Sandbox Checkpoint/Rollback**
    链接: http://arxiv.org/abs/2605.22781v1
    作者: Y. Dong et al.
    一句话说明: **基础设施突破**，为有状态 AI 智能体（如进行强化学习或树搜索的 Agent）提供了毫秒级的沙箱快照与回滚机制，解决了高频状态探索中的性能瓶颈。

*   **LCGuard: Latent Communication Guard for Safe KV Sharing in Multi-Agent Systems**
    链接: http://arxiv.org/abs/2605.22786v1
    作者: S. Asif et al.
    一句话说明: 针对多智能体系统通过 KV Cache 进行潜在通信时的安全问题，提出了防御机制，防止恶意信息注入。

*   **Advancing Mathematics Research with AI-Driven Formal Proof Search**
    链接: http://arxiv.org/abs/2605.22763v1
    作者: G. Tsoukalas et al.
    一句话说明: 首次大规模评估了利用 LLM 生成 Lean 形式化证明来解决数学研究级问题的能力，展示了 AI 辅助数学研究的实际潜力。

### 🔧 方法与框架（新技术、效率优化）

*   **Tokenisation via Convex Relaxations**
    链接: http://arxiv.org/abs/2605.22821v1
    作者: J. Tempus et al.
    一句话说明: **颠覆性基础工作**，将分词器构建重新表述为线性规划问题，替代了 BPE 等传统的贪心算法，有望从全局最优角度提升词表质量。

*   **The Matching Principle: A Geometric Theory of Loss Functions**
    链接: http://arxiv.org/abs/2605.22800v1
    作者: V. Rajput
    一句话说明: 提出了一种几何理论框架，统一了鲁棒性、域适应、组合泛化等多个看似不相关的学习问题，为设计抗干扰表征学习提供了理论指导。

*   **Understanding Data Temporality Impact on Large Language Models Pre-training**
    链接: http://arxiv.org/abs/2605.22769v1
    作者: H. Pilchen et al.
    一句话说明: 深入研究了预训练数据的时效性对模型知识获取的影响，揭示了时间混洗数据与时间敏感事实学习之间的内在矛盾。

### 📊 应用（垂直领域、多模态）

*   **ChronoMedKG: A Temporally-Grounded Biomedical Knowledge Graph**
    链接: http://arxiv.org/abs/2605.22734v1
    作者: M. S. Ahmed et al.
    一句话说明: 构建了包含时间信息的生物医学知识图谱，解决了传统 KG 无法处理症状与疾病随时间演变关系的缺陷，对临床推理具有重要意义。

*   **AnyMo: Geometry-Aware Setup-Agnostic Modeling of Human Motion**
    链接: http://arxiv.org/abs/2605.22715v1
    作者: B. Chen et al.
    一句话说明: 提出了一种几何感知的模型，能够忽略可穿戴设备的佩戴位置和传感器差异，直接从原始信号中建模人体运动，极大地提升了现实场景下的泛化能力。

---

## 3. 研究趋势信号
今日论文显示出**智能体“深度自治”**与**模型架构“精细化拆解”**两大趋势。一方面，智能体研究不再局限于提示词工程或技能库调用，而是深入到底层代码重写和沙箱状态管理，试图赋予 Agent 真正的“成长”能力。另一方面，对于 LLM 基础组件的研究更加微观和数学化，从分词器的凸松弛优化到线性注意力的门控解耦，显示出学术界正试图通过精细的数学建模突破现有 Transformer 的性能天花板。同时，对政治偏见、时效性数据等“软性”问题的关注，也标志着模型对齐研究正走向深入。

---

## 4. 值得精读
推荐精读以下 3 篇论文，它们分别代表了架构创新、智能体进化和理论重构的前沿方向：

1.  **MOSS: Self-Evolution through Source-Level Rewriting**
    *理由*: 这篇论文提出的“源码级自我进化”概念非常大胆且具有里程碑意义。它打破了智能体只能在预设技能空间内学习的限制，展示了 AI 系统自我修改底层逻辑的可能性，是通往 AGI 路径上的关键探索。

2.  **Gated DeltaNet-2: Decoupling Erase and Write in Linear Attention**
    *理由*: 线性注意力是替代 Softmax Attention 的热门方向，但这篇论文敏锐地指出了“记忆编辑”中的冲突问题。其提出的门控机制不仅解决了技术痛点，也为理解记忆网络的工作原理提供了新视角。

3.  **Post-Training is About States, Not Tokens**
    *理由*: 该论文提供了一种反直觉但极具解释力的理论框架。将后训练过程从“Token 预测”重构为“状态分布匹配”，这可能改变我们设计 RLHF 和蒸馏算法的底层逻辑，具有较高的理论价值。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*