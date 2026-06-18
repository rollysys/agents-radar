# ArXiv AI 研究日报 2026-06-18

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-06-18 04:14 UTC

---

# ArXiv AI 研究日报 (2026-06-18)

## 1. 今日速览

今日 ArXiv 投稿呈现出明显的**范式转移信号**：扩散模型不再局限于生成任务，而是开始挑战自回归模型在**复杂推理**（如定理证明和长链思考）中的主导地位。在 Agent 领域，研究重心从单一的提示工程转向了**博弈论框架**（如虚拟博弈）与**结构化概率推理**的结合，试图解决决策制定的可靠性问题。此外，个性化记忆机制通过模仿海马体的“痕迹”机制，为 LLM 的长短期记忆分离提供了新的架构思路。

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐）

1.  **Diffusion-Proof: Recipe for Formal Theorem Proving Beyond Auto-Regressive Generation**
    *   链接: http://arxiv.org/abs/2606.19315v1
    *   作者: Ruida Wang et al.
    *   一句话说明: 突破自回归模型限制，首次探索使用扩散模型进行形式化定理证明，为数学推理提供了新的生成范式。

2.  **DreamReasoner-8B: Block-Size Curriculum Learning for Diffusion Reasoning Models**
    *   链接: http://arxiv.org/abs/2606.19257v1
    *   作者: Zirui Wu et al.
    *   一句话说明: 提出基于块大小课程学习的扩散推理模型，验证了非自回归模型在长链推理任务中的可扩展性。

3.  **User as Engram: Internalizing Per-User Memory as Local Parametric Edits**
    *   链接: http://arxiv.org/abs/2606.19172v1
    *   作者: Bojie Li
    *   一句话说明: 受海马体启发，提出将用户记忆作为模型局部的参数化编辑，实现了内容存储与推理技能的有效解耦。

4.  **STARE: Surprisal-Guided Token-Level Advantage Reweighting for Policy Entropy Stability**
    *   链接: http://arxiv.org/abs/2606.19236v1
    *   作者: Haipeng Luo et al.
    *   一句话说明: 解决 RLVR（带可验证奖励的强化学习）训练中的策略熵崩塌问题，通过惊异度引导的重加权稳定了推理模型的训练过程。

5.  **Beyond Safe Data: Pretraining-Stage Alignment with Regular Safety Reflection**
    *   链接: http://arxiv.org/abs/2606.19168v1
    *   作者: Jinhan Li et al.
    *   一句话说明: 提出在预训练阶段引入“常规安全反思”机制，超越了单纯的数据清洗，实现了更深层次的安全对齐。

### 🤖 智能体与推理

6.  **Enhancing Decision-Making with Large Language Models through Multi-Agent Fictitious Play**
    *   链接: http://arxiv.org/abs/2606.19308v1
    *   作者: Leyang Shen et al.
    *   一句话说明: 将博弈论中的虚拟博弈引入多智能体系统，显著提升了 LLM 在复杂决策任务中的表现。

7.  **Data Intelligence Agents: Interpreting, Modeling, and Querying Enterprise Data via Autonomous Coding Agents**
    *   链接: http://arxiv.org/abs/2606.19319v1
    *   作者: Anoushka Vyas et al.
    *   一句话说明: 提出 DIA 系统，利用自主编码智能体解决企业数据集成中的发现、建模和查询瓶颈，实现了端到端的数据智能化。

8.  **Structured Inference with Large Language Gibbs**
    *   链接: http://arxiv.org/abs/2606.19264v1
    *   作者: Sanghyeok Choi et al.
    *   一句话说明: 提出 Large Language Gibbs 方法，利用 LLM 进行结构化的概率推理，解决了从语言模型中提取知识的相干性问题。

### 🔧 方法与框架

9.  **Explaining Attention with Program Synthesis**
    *   链接: http://arxiv.org/abs/2606.19317v1
    *   作者: Amiri Hayes et al.
    *   一句话说明: 通过程序合成来近似注意力头的行为，为深度学习的可解释性提供了可执行的符号化描述路径。

10. **Mechanism-Guided Selective Unlearning for RLVR-Induced Reasoning**
    *   链接: http://arxiv.org/abs/2606.19222v1
    *   作者: Chenyu Zhou et al.
    *   一句话说明: 提出针对 RLVR 强化后推理能力的“选择性遗忘”方法，在移除特定推理能力的同时最小化对模型其他性能的损害。

### 📊 应用

11. **Native Active Perception as Reasoning for Omni-Modal Understanding**
    *   链接: http://arxiv.org/abs/2606.19341v1
    *   作者: Zhenghao Xing et al.
    *   一句话说明: 摒弃被动全量处理，提出基于推理的原生主动感知框架，大幅降低了长视频理解的计算成本。

12. **TxBench-PP: Analyzing AI Agent Performance on Small-Molecule Preclinical Pharmacology**
    *   链接: http://arxiv.org/abs/2606.19245v1
    *   作者: Hannah Le et al.
    *   一句话说明: 发布针对临床前药理学的可验证基准测试，填补了 AI Agent 在药物发现领域决策能力评估的空白。

## 3. 研究趋势信号

今日的论文揭示了两个值得关注的趋势：
一是**扩散模型向高阶认知任务的渗透**。过去认为扩散模型擅长生成而弱于逻辑，但 `Diffusion-Proof` 和 `DreamReasoner` 表明，通过特定的训练策略（如课程学习），扩散模型在定理证明和长程推理中展现出替代自回归模型的潜力。
二是**智能体决策理论的深化**。简单的 Prompt 正在被严谨的数学框架取代，如将博弈论（Fictitious Play）和概率图模型引入智能体系统，这意味着 Agent 研究正从“工程堆叠”走向“理论支撑”的阶段。

## 4. 值得精读

1.  **Diffusion-Proof: Recipe for Formal Theorem Proving Beyond Auto-Regressive Generation** (http://arxiv.org/abs/2606.19315v1)
    *   **理由**: 这篇论文挑战了“推理=自回归”的固有观念。如果能证明扩散模型在形式化数学中有效，将改变我们对 LLM 推理架构的基础认知，可能开启非自回归推理的新流派。

2.  **User as Engram: Internalizing Per-User Memory as Local Parametric Edits** (http://arxiv.org/abs/2606.19172v1)
    *   **理由**: 个性化记忆一直是 RAG 和 Long Context 的痛点。该文提出的“痕迹”机制，模仿人脑海马体将记忆参数化而非上下文化，为解决 LLM 记忆容量限制提供了极具启发性的生物学启发方案。

3.  **Enhancing Decision-Making with Large Language Models through Multi-Agent Fictitious Play** (http://arxiv.org/abs/2606.19308v1)
    *   **理由**: 将经典博弈论算法与 LLM 结合，解决了多智能体协作中的决策复杂性难题。对于关注 Multi-Agent System 架构设计的研究者来说，这篇论文提供了将传统算法理论映射到 LLM 时代的优秀范本。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*