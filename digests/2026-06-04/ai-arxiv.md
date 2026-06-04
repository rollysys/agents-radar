# ArXiv AI 研究日报 2026-06-04

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-06-04 04:18 UTC

---

# ArXiv AI 研究日报 (2026-06-04)

## 1. 今日速览

今日 ArXiv 投稿重点聚焦于**大模型训练后的优化与归因**，出现了多篇关于训练数据归因（TDA）的研究，旨在解决 LLM 数据溯源与影响力分析的难题。**智能体能力边界**受到关注，新的基准测试探索了模型解决长周期自动化科研任务的能力。推理方面，研究者开始关注如何利用失败轨迹进行修正以及提升 OOD 鲁棒性。此外，**Diffusion LLM 的量化**与**全栈 GPU 代码生成**为模型效率提供了新的解决方案，而对基础模型研究方法论的反思则提示了当前评估中的潜在陷阱。

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1.  **STRIDE: Training Data Attribution via Sparse Recovery from Subset Perturbations**
    *   链接: http://arxiv.org/abs/2606.05165v1
    *   作者: R. Dagli et al.
    *   一句话说明: 提出一种基于稀疏恢复的 TDA 方法，无需昂贵重训练即可高效追溯 LLM 预测来源的数据样本。

2.  **Data Attribution in Large Language Models via Bidirectional Gradient Optimization**
    *   链接: http://arxiv.org/abs/2606.04928v1
    *   作者: F. Berdoz et al.
    *   一句话说明: 通过双向梯度优化提升 LLM 数据归因的精度，解决了影响力函数在大模型中的应用难题。

3.  **STaR-Quant: State-Time Consistent Post-Training Quantization for Diffusion Large Language Models**
    *   链接: http://arxiv.org/abs/2606.04945v1
    *   作者: X. Yan et al.
    *   一句话说明: 针对新兴的 Diffusion LLM 架构提出状态时间一致性量化方案，显著降低迭代去噪过程的显存与计算开销。

4.  **Fast & Faithful Function Vectors**
    *   链接: http://arxiv.org/abs/2606.05079v1
    *   作者: M. An Pham et al.
    *   一句话说明: 深入研究并改进了上下文学习中的“函数向量”定义，提升了其对 LLM 行为控制的忠实度与速度。

5.  **Sequential Data Poisoning in LLM Post-Training**
    *   链接: http://arxiv.org/abs/2606.04929v1
    *   作者: J. Sanderson et al.
    *   一句话说明: 揭示了 LLM 后训练流程（SFT 到 DPO）中的多阶段数据投毒风险，提出了新的安全威胁模型。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

6.  **AutoLab: Can Frontier Models Solve Long-Horizon Auto Research and Engineering Tasks?**
    *   链接: http://arxiv.org/abs/2606.05080v1
    *   作者: Z. Xu et al.
    *   一句话说明: 提出了评估模型在长周期、迭代式科研工程任务中表现的基准，挑战现有模型在真实实验流程中的自主性。

7.  **Failed Reasoning Traces Tell You What Is Fixable (But Not by Reading Them)**
    *   链接: http://arxiv.org/abs/2606.05145v1
    *   作者: N. Islah et al.
    *   一句话说明: 提出利用失败的推理轨迹作为信号来修正模型输出，而非简单增加采样重试，提升了推理效率。

8.  **Invariant Gradient Alignment for Robust Reasoning Distillation**
    *   链接: http://arxiv.org/abs/2606.05025v1
    *   作者: Z. Cheng et al.
    *   一句话说明: 针对推理蒸馏中的捷径学习问题，提出不变梯度对齐方法，显著提升了模型在 OOD 数据上的鲁棒性。

### 🔧 方法与框架（新技术、基准测试、效率优化）

9.  **Validity Threats for Foundation Model Research**
    *   链接: http://arxiv.org/abs/2606.05029v1
    *   作者: G. König et al.
    *   一句话说明: 系统性批判了当前基础模型研究中依赖代理实验和基准测试的有效性威胁，呼吁更严谨的实验设计。

10. **MusaCoder: Native GPU Kernel Generation with Full-Stack Training on Moore Threads GPU**
    *   链接: http://arxiv.org/abs/2606.04847v1
    *   作者: K. Cheng et al.
    *   一句话说明: 结合全栈训练与强化学习，实现高效的原生 GPU Kernel 生成，解决了 LLM 在底层系统代码生成的瓶颈。

11. **Reinforcement Learning from Rich Feedback with Distributional DAgger**
    *   链接: http://arxiv.org/abs/2606.05152v1
    *   作者: R. Agrawal et al.
    *   一句话说明: 扩展了 RL 训练范式，利用分布式的丰富反馈信号替代单一比特奖励，提升了推理模型的训练效果。

### 📊 应用（垂直领域、多模态、代码生成）

12. **Geometry Gaussians: Decoupling Appearance and Geometry in Gaussian Splatting**
    *   链接: http://arxiv.org/abs/2606.05124v1
    *   作者: H. Zhou et al.
    *   一句话说明: 在 3D Gaussian Splatting 中解耦外观与几何，解决了现有方法难以同时兼顾高质量渲染与几何精度的问题。

## 3. 研究趋势信号

今日投稿显示出三个显著趋势：
1.  **归因分析精细化**：随着 LLM 版权和监管需求增加，训练数据归因（TDA）正从理论走向高效实用的算法实现（如 STRIDE），不再局限于简单的重训练影响函数。
2.  **推理过程的价值重估**：研究者开始重视推理过程中的“失败案例”和“丰富反馈”，不再仅仅追求最终答案的正确率，而是挖掘中间过程的修正潜力，这代表了 Test-time Compute 范式的深化。
3.  **智能体长周期评估**：评估重心从单轮任务转向模拟真实科研流程的长周期任务，这要求智能体具备规划、容错和迭代优化的能力，标志着 Agent 研究进入“深水区”。

## 4. 值得精读

1.  **AutoLab: Can Frontier Models Solve Long-Horizon Auto Research and Engineering Tasks?**
    *   理由: 该论文提出了一个极具挑战性的新基准，不仅测试模型的代码能力，更考察其在模拟科研环境中进行多步迭代、实验反思的能力。这对于评估 AGI 路线图中的“自主科研”能力至关重要。

2.  **Validity Threats for Foundation Model Research**
    *   理由: 在模型能力飞速发展的当下，该论文冷静地审视了现有的评估体系。它指出了当前“刷榜”文化中潜在的科学有效性问题，对于研究人员如何正确设计与解读实验具有极高的指导意义。

3.  **Failed Reasoning Traces Tell You What Is Fixable (But Not by Reading Them)**
    *   理由: 该研究提供了一种反直觉但极具潜力的思路——利用失败轨迹而非仅仅依赖成功的思维链。这对于提升模型在资源受限情况下的推理能力提供了新视角。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*