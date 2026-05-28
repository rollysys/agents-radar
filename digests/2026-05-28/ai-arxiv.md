# ArXiv AI 研究日报 2026-05-28

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-05-28 03:53 UTC

---

# ArXiv AI 研究日报 (2026-05-28)

## 1. 今日速览

今日的研究重点聚焦于**智能体的自我进化与动态记忆机制**，多篇论文探讨了如何让 Agent 在动态环境中自主改进推理策略并构建持续演化的记忆系统。**模型评估与对齐**领域出现深刻反思，研究者开始质疑现有基准（如 GSM-Symbolic）的有效性，并呼吁关注 PEFT 中的“可塑性-稳定性”权衡及 LLM 的语言置信度校准问题。此外，**多模态与具身智能**在 Sim-to-Real 迁移和模型压缩方面取得突破，特别是触觉表征的跨域迁移和 VLA 模型的量化部署。整体趋势显示，AI 研究正从静态能力构建转向动态适应性、鲁棒性及本质机制的探索。

---

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1.  **PEFT-Arena: Understanding Parameter-Efficient Finetuning from a Stability-Plasticity Perspective**
    *   链接: http://arxiv.org/abs/2605.28819v1
    *   作者: Y. Huang et al.
    *   **一句话说明**: 提出从“稳定性-可塑性”困境视角评估 PEFT 方法，揭示现有方法在适应新任务时易遗忘预训练能力的权衡问题。

2.  **The Importance of Being Statistically Earnest: A Critical Re-evaluation of GSM-Symbolic**
    *   链接: http://arxiv.org/abs/2605.28700v1
    *   作者: D. Długosz et al.
    *   **一句话说明**: 对 GSM-Symbolic 基准提出质疑，通过重新评估指出该基准关于 LLM 缺乏推理能力的结论存在统计学上的漏洞。

3.  **Human Label Variation as Stable Signal: Learning Annotator-Specific Explanation Behavior**
    *   链接: http://arxiv.org/abs/2605.28802v1
    *   作者: B. Chen et al.
    *   **一句话说明**: 将人类标注差异视为稳定信号而非噪声，通过跨标注者偏好优化，让 LLM 学习并复现特定标注者的解释行为。

4.  **Can LLMs Use Linguistic Uncertainty Markers to Reliably Reflect Intrinsic Confidence?**
    *   链接: http://arxiv.org/abs/2605.28778v1
    *   作者: G. Liu & A. Cohan
    *   **一句话说明**: 探究 LLM 是否能通过语言标记（如“可能”）准确反映其内在置信度，发现模型难以构建一致的自我置信度框架。

### 🤖 智能体与推理（规划、工具使用、记忆、思维链）

5.  **Self-Improving Language Models with Bidirectional Evolutionary Search**
    *   链接: http://arxiv.org/abs/2605.28814v1
    *   作者: G. Xu et al.
    *   **一句话说明**: 提出双向进化搜索算法，通过密集验证信号解决传统搜索方法的稀疏奖励问题，实现语言模型的自我改进。

6.  **Rethinking Memory as Continuously Evolving Connectivity**
    *   链接: http://arxiv.org/abs/2605.28773v1
    *   作者: J. Fang et al.
    *   **一句话说明**: 突破静态记忆库范式，将 Agent 记忆建模为动态演化的连接图，以适应反馈与任务变化。

7.  **LiveBrowseComp: Are Search Agents Searching, or Just Verifying What They Already Know?**
    *   链接: http://arxiv.org/abs/2605.28721v1
    *   作者: H. Fan et al.
    *   **一句话说明**: 揭示搜索 Agent 存在“内在知识依赖”现象，即便拥有工具也倾向于依赖内部记忆，而非真正进行探索性搜索。

8.  **Agent Explorative Policy Optimization for Multimodal Agentic Reasoning**
    *   链接: http://arxiv.org/abs/2605.28774v1
    *   作者: M. Kang et al.
    *   **一句话说明**: 针对多模态 Agent 推理中思考与工具使用的不对称性，提出探索性策略优化以提升外部工具调用的效率。

### 🔧 方法与框架（新技术、效率优化）

9.  **Thinking as Compression: Your Reasoning Model is Secretly a Context Compressor**
    *   链接: http://arxiv.org/abs/2605.28713v1
    *   作者: G. Ma et al.
    *   **一句话说明**: 创新性地提出“思维即压缩”观点，证明推理模型在生成过程中的思维链实际上起到了上下文压缩的作用。

10. **Extrapolative Weight Averaging Reveals Correctness-Efficiency Frontiers in Code RL**
    *   链接: http://arxiv.org/abs/2605.28751v1
    *   作者: K. Zheng et al.
    *   **一句话说明**: 发现外推权重平均法可以在无需额外训练的情况下，在代码生成的正确性与效率之间找到帕累托最优前沿。

### 📊 应用（垂直领域、多模态、机器人）

11. **Beyond Binary: Sim-to-Real Dexterous Manipulation with Physics-Grounded Contact Representation**
    *   链接: http://arxiv.org/abs/2605.28812v1
    *   作者: J. Pan et al.
    *   **一句话说明**: 引入物理接地接触表征，解决了灵巧操作中触觉数据 Sim-to-Real 迁移的模拟与现实差距难题。

12. **Ω-QVLA: Robust Quantization for Vision-Language-Action Models via Composite Rotation**
    *   链接: http://arxiv.org/abs/2605.28803v1
    *   作者: X. Wang et al.
    *   **一句话说明**: 针对视觉-语言-动作（VLA）模型提出的鲁棒量化方案，通过复合旋转和逐步缩放实现端侧高效部署。

13. **CaMBRAIN: Real-time, Continuous EEG Inference with Causal State Space Models**
    *   链接: http://arxiv.org/abs/2605.28792v1
    *   作者: A. Durgam et al.
    *   **一句话说明**: 利用因果状态空间模型处理超长序列 EEG 数据，实现实时、连续的脑电解码。

---

## 3. 研究趋势信号

今日投稿显示出**从静态构建向动态演化**的显著转向。在 Agent 系统中，记忆不再被视为静态数据库，而是演化中的连接图（#21），模型改进也不再依赖单一路径而是双向进化搜索（#3）。同时，**评估维度的深化**成为热点，研究者不再满足于单一准确率指标，而是深入探究模型的“稳定性-可塑性”权衡（#1）、置信度校准（#4）以及对基准测试本身有效性的反思（#50）。这表明 AI 研究正从单纯追求 SOTA 结果，转向对模型内在机制、鲁棒性及真实推理能力的精细化审视。

---

## 4. 值得精读

1.  **Rethinking Memory as Continuously Evolving Connectivity** (http://arxiv.org/abs/2605.28773v1)
    *   **理由**: 该论文提出的观点极具启发性，挑战了当前 RAG 和 Memory 模块的主流静态检索范式，为构建能够长期适应和演化的 Agent 系统提供了新的理论框架，对于下一代 Agent 架构设计有重要参考价值。

2.  **The Importance of Being Statistically Earnest: A Critical Re-evaluation of GSM-Symbolic** (http://arxiv.org/abs/2605.28700v1)
    *   **理由**: 在 LLM 推理能力评估备受争议的当下，这篇论文对近期高影响力基准 GSM-Symbolic 进行了严谨的批判性复现。它不仅指出了实验设计的潜在缺陷，更提醒社区在发布“震撼性”结论前需保持统计学严谨性，具有很高的方法论参考意义。

3.  **PEFT-Arena: Understanding Parameter-Efficient Finetuning from a Stability-Plasticity Perspective** (http://arxiv.org/abs/2605.28819v1)
    *   **理由**: PEFT 已成为 LLM 应用的标配，但业界长期忽视其对新旧知识的平衡问题。该文引入神经科学中的“稳定性-可塑性”概念，提供了一个更全面的评估体系，对于大模型微调策略的选择具有直接的工程指导意义。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*