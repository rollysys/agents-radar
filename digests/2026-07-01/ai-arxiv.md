# ArXiv AI 研究日报 2026-07-01

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-01 04:08 UTC

---

# ArXiv AI 研究日报
**日期：2026-07-01**

---

## 1. 今日速览

今天的 ArXiv 论文呈现出明显的**智能化与自主化**趋势。研究重点从单纯提升模型性能转向了**长时序任务的评估与监控**（如 QVal、FinPersona-Bench），以及智能体在复杂环境下的**自我修正与技能组合**。在模型架构层面，研究者开始反思 Transformer 的基础组件，提出了改进残差连接和量化传输的新方案。此外，**元认知**与**不确定性表达**成为提升大模型可信度的关键切入点，显示出社区对模型“自知之明”的重视。

---

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1. **[Introspective Coupling: Self-Explanation Training Tracks Behavioral Change Despite Fixed Supervision](http://arxiv.org/abs/2606.32038v1)**
   - 作者: Zifan C. Guo et al.
   - 一句话说明: 探讨了如何通过反事实行为分析训练 LLM 生成忠实的原因解释，而非表面模仿，显著提升了模型的可解释性。

2. **[Reinforcement Learning with Metacognitive Feedback Elicits Faithful Uncertainty Expression in LLMs](http://arxiv.org/abs/2606.32032v1)**
   - 作者: Gabrielle K. Liu et al.
   - 一句话说明: 引入元认知反馈机制，通过强化学习训练 LLM 准确表达不确定性，有效缓解了模型“不懂装懂”的幻觉问题。

3. **[Review Residuals: Update-Conditioned Residual Gating for Transformers](http://arxiv.org/abs/2606.31859v1)**
   - 作者: Kyle Kramer
   - 一句话说明: 借鉴“独立验证”原则，提出一种动态缩放子层更新的残差门控机制，打破了传统固定系数残差连接的限制。

4. **[CHERRY: Compressed Hierarchical Experts with Recurrent Representational Yield](http://arxiv.org/abs/2606.31796v1)**
   - 作者: Dohyeon Kwon et al.
   - 一句话说明: 结合选择性监督和循环表示，提出了一种高效的语言模型训练框架，在保持性能的同时大幅降低了计算成本。

5. **[AutoTrainess: Teaching Language Models to Improve Language Models Autonomously](http://arxiv.org/abs/2606.31551v1)**
   - 作者: Zhaojian Yu et al.
   - 一句话说明: 提出了一种让语言模型自主改进其他模型的框架，试图解决后训练阶段高度依赖人类干预的瓶颈问题。

6. **[Visual Semantic Entropy: Do Vision Language Models Recognize Visual Ambiguity?](http://arxiv.org/abs/2606.31407v1)**
   - 作者: Ta Duc Huy et al.
   - 一句话说明: 揭示了 VLM 在视觉歧义下的过度自信问题，并提出视觉语义熵指标来改进模型对模糊输入的识别能力。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

7. **[QVal: Cheaply Evaluating Dense Supervision Signals for Long-Horizon LLM Agents](http://arxiv.org/abs/2606.32034v1)**
   - 作者: Sergio Hernández-Gutiérrez et al.
   - 一句话说明: 针对长视野智能体任务中稀疏奖励的问题，提出了一种低成本评估中间动作质量的方法，为智能体训练提供了密集监督信号。

8. **[Generative Skill Composition for LLM Agents](http://arxiv.org/abs/2606.32025v1)**
   - 作者: Xinyu Zhao et al.
   - 一句话说明: 提出生成式技能组合框架，使 LLM 智能体能够动态组合模块化的技能包来解决复杂任务，提升了泛化能力。

9. **[MECoBench: A Systematic Study of Multimodal Agent Collaboration in Embodied Environments](http://arxiv.org/abs/2606.31966v1)**
   - 作者: Qingyun Liu et al.
   - 一句话说明: 构建了多模态具身智能协作基准测试，填补了多智能体在视觉落地环境中协作能力评估的空白。

10. **[Learning from Failure: Inference-Time Self-Improvement for Computer-Use Agents](http://arxiv.org/abs/2606.31270v1)**
    - 作者: Xueqiao Sun et al.
    - 一句话说明: 提出了一种推理时自我改进机制，让计算机使用智能体能够从失败轨迹中学习，显著减少了对大规模人工标注数据的依赖。

11. **[Theory of Mind and Persuasion Beyond Conversation: Assessing the Capacity of LLMs to Induce Belief States via Planning and Action](http://arxiv.org/abs/2606.31916v1)**
    - 作者: Ben Slater et al.
    - 一句话说明: 超越传统的问答形式，评估了 LLM 智能体通过规划和行动主动改变他人信念状态的能力，拓展了对心智理论的评测维度。

### 🔧 方法与框架（新技术、基准测试、效率优化）

12. **[RaBitQCache: Rotated Binary Quantization for KVCache in Long Context LLM Inference](http://arxiv.org/abs/2606.31519v1)**
    - 作者: Wenhao Li et al.
    - 一句话说明: 针对长上下文推理中的 KV Cache 瓶颈，提出旋转二值量化方法，显著降低了显存占用并提升了检索效率。

13. **[BlockPilot: Instance-Adaptive Policy Learning for Diffusion-based Speculative Decoding](http://arxiv.org/abs/2606.31315v1)**
    - 作者: Hao Zhang et al.
    - 一句话说明: 结合扩散模型与推测解码，提出实例自适应策略学习，进一步挖掘了并行生成的加速潜力。

14. **[STEB: Style Text Embedding Benchmark](http://arxiv.org/abs/2606.31741v1)**
    - 作者: Rafael Rivera Soto et al.
    - 一句话说明: 填补了风格嵌入评估的空白，建立了一个全面且开放的风格文本嵌入基准测试，统一了分散的评价标准。

### 📊 应用（垂直领域、多模态、代码生成）

15. **[FinPersona-Bench: A Benchmark for Longitudinal Psychometric Stability of Autonomous Financial Agents](http://arxiv.org/abs/2606.31522v1)**
    - 作者: Muhammad Usman Safder et al.
    - 一句话说明: 关注金融智能体的性格稳定性，提出了纵向心理测量基准，防止智能体在长期交互中偏离预设的风险偏好。

---

## 3. 研究趋势信号

从今日的论文可以看出，**Agent 的评估粒度正在变得极细**。研究者不再满足于任务最终成功率的统计，而是开始深入到长时序任务的中间步骤监督（QVal）、跨模态协作的稳定性以及性格特征的纵向一致性。
同时，**推理时的自我进化** 成为了新的热点，多篇论文探讨了如何在推理阶段利用失败案例或元认知反馈来提升表现，这标志着从“静态模型训练”向“动态模型适应”的范式转移。此外，针对 **Transformer 架构的微创新**（如残差门控、坐标传输）依然活跃，表明在 Scaling Law 放缓的背景下，架构层面的效率优化仍有挖掘空间。

---

## 4. 值得精读

1. **[Learning from Failure: Inference-Time Self-Improvement for Computer-Use Agents](http://arxiv.org/abs/2606.31270v1)**
   - **理由**: 智能体数据匮乏是当前痛点。该论文提出的“从失败中学习”机制，利用推理时的失败轨迹进行自我修正，为解决高质量轨迹数据稀缺问题提供了极具实用价值的方案，对 Agent 开发者有直接参考意义。

2. **[AutoTrainess: Teaching Language Models to Improve Language Models Autonomously](http://arxiv.org/abs/2606.31551v1)**
   - **理由**: 该研究触及了 AI 发展的终极目标之一——自我进化。它试图构建一个无需人类干预的模型迭代系统，虽然目前可能处于早期阶段，但其思路对于理解未来自动化 AI 研发具有重要启示。

3. **[Review Residuals: Update-Conditioned Residual Gating for Transformers](http://arxiv.org/abs/2606.31859v1)**
   - **理由**: 对 Transformer 核心组件（残差连接）的创新并不多见。该文提出“先审查再提交”的机制符合人类认知直觉，可能对解决深层网络的梯度问题和噪声累积提供新的架构思路，值得从理论层面深入探究。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*