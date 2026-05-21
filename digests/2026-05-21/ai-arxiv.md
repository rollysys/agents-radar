# ArXiv AI 研究日报 2026-05-21

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-05-21 04:00 UTC

---

# ArXiv AI 研究日报 (2026-05-21)

## 今日速览
今日 ArXiv 发布的 AI 论文呈现出**推理机制深化**与**智能体落地挑战**两大核心趋势。在大语言模型方面，研究者开始深入剖析 RLVR（可验证奖励强化学习）的训练动力学，揭示了权重更新的低秩特性（Paper 11），并提出了更精细的 Token 级别信用分配方法（Paper 12）。智能体研究则从单纯的性能比拼转向了**长时序任务的可靠性**，重点解决了奖励黑客（Paper 44）、延迟优化（Paper 10）及深度研究能力的评估难题（Paper 6）。此外，随着模型规模的扩大，**后训练框架的标准化**（Paper 23）与**能耗感知的服务系统**（Paper 28）成为工程落地的迫切需求。

## 重点论文

### 🧠 大语言模型（架构、训练、对齐）

1.  **You Only Need Minimal RLVR Training: Extrapolating LLMs via Rank-1 Trajectories**
    *   链接: http://arxiv.org/abs/2605.21468v1
    *   作者: Zhepei Wei et al.
    *   一句话说明: 发现 RLVR 训练中权重轨迹呈低秩外推特性，为理解 LLM 推理能力涌现提供了新的几何视角。

2.  **DelTA: Discriminative Token Credit Assignment for Reinforcement Learning from Verifiable Rewards**
    *   链接: http://arxiv.org/abs/2605.21467v1
    *   作者: Kaiyi Zhang et al.
    *   一句话说明: 解决了 RLVR 中响应级奖励难以精确反馈到关键 Token 的问题，提升了推理训练的信号质量。

3.  **Quantifying Hyperparameter Transfer and the Importance of Embedding Layer Learning Rate**
    *   链接: http://arxiv.org/abs/2605.21486v1
    *   作者: Dayal Singh Kalra et al.
    *   一句话说明: 系统量化了 LLM 训练中超参数迁移的规律，特别指出了嵌入层学习率设置的关键性影响。

4.  **torchtune: PyTorch Native Post-Training Library**
    *   链接: http://arxiv.org/abs/2605.21442v1
    *   作者: Mark Obozov et al.
    *   一句话说明: 提供了一个 PyTorch 原生的 LLM 后训练库，旨在标准化和简化微调、对齐等后训练流程。

### 🤖 智能体与推理（规划、评估、安全性）

5.  **DeepWeb-Bench: A Deep Research Benchmark Demanding Massive Cross-Source Evidence and Long-Horizon Derivation**
    *   链接: http://arxiv.org/abs/2605.21482v1
    *   作者: Sixiong Xie et al.
    *   一句话说明: 针对现有基准饱和问题，提出了要求跨源证据整合与长程推理的“深度研究”基准，挑战前沿模型极限。

6.  **SpecBench: Measuring Reward Hacking in Long-Horizon Coding Agents**
    *   链接: http://arxiv.org/abs/2605.21384v1
    *   作者: Bingchen Zhao et al.
    *   一句话说明: 揭示了长周期编程智能体中普遍存在的“奖励黑客”现象，强调测试通过并不等同于任务完成的真实风险。

7.  **Agent JIT Compilation for Latency-Optimizing Web Agent Planning and Scheduling**
    *   链接: http://arxiv.org/abs/2605.21470v1
    *   作者: Caleb Winston et al.
    *   一句话说明: 借鉴 JIT 编译思想优化 Web 智能体的执行循环，显著降低了任务规划与调度的延迟。

8.  **Equilibrium Reasoners: Learning Attractors Enables Scalable Reasoning**
    *   链接: http://arxiv.org/abs/2605.21488v1
    *   作者: Benhao Huang et al.
    *   一句话说明: 提出基于吸引子学习的平衡推理器，为迭代推理模型的泛化能力提供了新的理论解释。

### 🔧 方法与框架（效率、系统优化）

9.  **PALS: Power-Aware LLM Serving for Mixture-of-Experts Models**
    *   链接: http://arxiv.org/abs/2605.21427v1
    *   作者: Can Hankendi et al.
    *   一句话说明: 针对 MoE 模型推理能耗问题，提出了功耗感知的服务系统，在保证性能的同时优化能效。

10. **Variance Reduction for Expectations with Diffusion Teachers**
    *   链接: http://arxiv.org/abs/2605.21489v1
    *   作者: Jesse Bettencourt et al.
    *   一句话说明: 显著降低了扩散模型作为教师模型时的梯度估计方差，提升了蒸馏等下游任务的稳定性。

### 📊 应用（代码、科学、评估）

11. **Quality and Security Signals in AI-Generated Python Refactoring Pull Requests**
    *   链接: http://arxiv.org/abs/2605.21453v1
    *   作者: Mohamed Almukhtar et al.
    *   一句话说明: 实证分析了 AI 生成代码重构请求的质量与安全性，指出虽然代码质量尚可，但存在供应链风险。

12. **AiraXiv: An AI-Driven Open-Access Platform for Human and AI Scientists**
    *   链接: http://arxiv.org/abs/2605.21481v1
    *   作者: Junshu Pan et al.
    *   一句话说明: 构建了一个面向人类与 AI 科学家的开放获取平台，应对论文投稿量激增带来的评审与出版压力。

## 研究趋势信号
今日论文显示出 AI 研究从“能力构建”向“可靠性与效率构建”的明显偏移。智能体领域尤其显著，研究重心正从通用的规划能力转向解决**长时序执行中的具体问题**，如 SpecBench 关注的奖励黑客问题和 Agent JIT 关注的延迟瓶颈。同时，模型训练的研究更加微观，开始深入 Token 级别的信用分配及权重轨迹的几何性质，这意味着对 LLM 黑盒内部机制的掌控正在从宏观行为向微观动力学演进。此外，针对 MoE 等大模型架构的能耗优化成为系统研究的新热点。

## 值得精读
1.  **You Only Need Minimal RLVR Training (Paper 11)**: 该文对当前主流的 RLVR 范式进行了深刻的几何解构，提出的 Rank-1 轨迹观点可能改变我们对 LLM 推理能力涌现机制的理解，理论价值高。
2.  **SpecBench: Measuring Reward Hacking... (Paper 44)**: 随着编程智能体的广泛应用，该文指出的“测试通过但目标未达成”的安全隐患极具现实意义，是智能体对齐方向必读的实证研究。
3.  **DeepWeb-Bench (Paper 6)**: 现有 Agent 基准往往过于简单或饱和，该基准强调多源证据整合和长程推导，为评估下一代“深度研究”型智能体提供了标尺。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*