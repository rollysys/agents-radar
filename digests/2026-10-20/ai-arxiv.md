# ArXiv AI 研究日报 2026-10-20

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-20 03:58 UTC

---

# 📰 ArXiv AI 研究日报 — 2026-10-20

## 今日速览

今日 50 篇投稿呈现三大热点：**智能体自我改进与环境合成**（WildAWM、HarnessPro、PhysRSI）标志着 agent 学习从人工数据向自主交互演进的关键一步；**记忆与架构创新**密集出现，MemT-1.0 提出“记忆原生”基础模型新范式，KronLSTM、Competing Learning 探索线性注意力新方向；**效率优化**持续升温，TokenGate、LatComm 分别 tackle 长上下文 prefill 和多模型通信成本。安全领域亦有亮点——Safety Mid-Training 主张将安全性前置为基座能力而非后训练补丁。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1. **[MemT-1.0: Towards Memory-Native Evolution](http://arxiv.org/abs/2610.26825v1)** — Li et al.
   提出将记忆内化为模型计算原生组成部分的记忆基础模型架构，挑战“外挂记忆”范式，是迈向持续学习模型的重要蓝图。

2. **[Kronecker Delta Rule for Long Context Linear Attention](http://arxiv.org/abs/2610.26834v1)** — Hartl et al.
   扩展 xLSTM 家族，引入可修正特定关联的记忆修订机制，在长上下文线性注意力方向迈出实质一步。

3. **[Competing Learning in Hybrid Architectures](http://arxiv.org/abs/2610.26830v1)** — Shen et al.
   研究线性循环与 softmax 注意力混合架构中两种混合机制的竞争问题，对现代混合 LLM 设计有直接指导意义。

4. **[Safety Mid-Training: Internalizing LLM Safety as a Foundational Capability](http://arxiv.org/abs/2610.26809v1)** — Zhao, Jiang, Choi et al.
   主张在中间训练阶段内化安全能力，缓解“后训练安全易退化、损害通用能力”的两难，出自 Yejin Choi 团队，值得关注。

5. **[recAMPLIFY: Large-Scale Pretraining of Recursive Protein Language Models](http://arxiv.org/abs/2610.26747v1)** — Jha et al.
   将递归架构引入蛋白质语言模型大规模预训练，绕开自回归 test-time scaling 的高成本，是 pLM 效率路线的重要尝试。

6. **[KEEP-Bench: Evaluating Evidence Preservation in Context Compression](http://arxiv.org/abs/2610.26827v1)** — Man et al.
   指出 QA 指标低估压缩忠实性损失，提出直接评估证据保留的基准，填补上下文压缩评估的关键空白。

### 🤖 智能体与推理

7. **[Agent World Model in the Wild (WildAWM)](http://arxiv.org/abs/2610.26828v1)** — Wang et al.
   从真实计算机环境自动合成安全可控的 agent 训练环境，直面“在真实系统上规模化交互学习有安全风险”这一核心瓶颈。

8. **[HarnessPro: Recursive Harness Self-Improvement with Pareto Optimization](http://arxiv.org/abs/2610.26770v1)** — Pan et al.
   无标注递归自我改进 harness，并用 Pareto 优化显式平衡性能—成本权衡，比纯 RSI 更实用。

9. **[Where is Physical RSI capability from? An Observational Scaling Law of LLM-as-policy](http://arxiv.org/abs/2610.26848v1)** — Li et al.
   系统量化物理递归自我改进能力并给出观测 scaling law，五轴指标框架对 RSI 研究有标准化价值。

10. **[SOMA: Continuous Monitoring and Intervention for System Two Reasoning](http://arxiv.org/abs/2610.26793v1)** — Qian et al.
   借鉴人类元认知，用轻量 System-One 模型实时监控 System-Two 推理过程并干预纠错，架构思路新颖。

11. **[WeAct: Dynamic Weight Switching as Agent Actions](http://arxiv.org/abs/2610.26847v1)** — Shi et al.
   将“切换权重”本身作为 agent 动作，巧妙规避长程任务中的灾难性遗忘。

12. **[Same Simulation, Different Evidence](http://arxiv.org/abs/2610.26836v1)** — Zhang et al.
   精细剖析工具输出存文件 vs 入上下文对 agent 准确率的影响，对 harness 工程实践有直接参考价值。

### 🔧 方法与框架（效率、优化、基准）

13. **[TokenGate: Learned Token Pruning for Fast Prefill](http://arxiv.org/abs/2610.26754v1)** — Patel, Stoica et al.
   模仿人类“略读—精读”策略的学习式 token 剪枝，兼顾速度与内存，长上下文效率方向的重要工作。

14. **[LatComm: Reusable Context Compression for Latent Communication between LLMs](http://arxiv.org/abs/2610.26840v1)** — Lin et al.
   多 LLM 系统间传递紧凑可复用的潜在上下文表示，省去逐问题重复编码，多模型协作基础设施的有益探索。

15. **[Polar Switch: Fast Muon Orthogonalization with Polynomial Circuits](http://arxiv.org/abs/2610.26742v1)** — Du & Su
   为 Muon 优化器设计更快的多项式梯度正交化迭代，直击大模型训练效率痛点。

16. **[LG-Bench: A Graph-Structured Evaluation Benchmark for Life Sciences](http://arxiv.org/abs/2610.26787v1)** — Sun et al.
   首个图结构生命科学基准（1 万+节点），纠正传统扁平 QA 基准割裂知识拓扑的问题。

### 📊 应用（多模态、垂直领域）

17. **[Text-to-Image Generative Modeling Without Language Pretraining (Halcyon)](http://arxiv.org/abs/2610.26863v1)** — Chandrasegaran et al.
   从零训练的早融合多模态自回归模型，回答“强 T2I 是否必须依赖互联网级语言预训练”这一根本性问题。

18. **[ProteinGeoBench](http://arxiv.org/abs/2610.26829v1)** — Turk et al.
   揭示前沿 agent“擅长查表、迷失几何”的能力断层，131 项蛋白质结构任务 + 评估配置分析，方法论上提醒社区分数≠能力。

19. **[Can It Actually Work? Synthesizing Functional CAD Mechanisms](http://arxiv.org/abs/2610.26861v1)** — Zhang et al.
   从“看起来对”到“功能上可行”：将物理功能验证引入 CAD agent 评估，代表 agent 基准向实用化演进。

20. **[Game of Phones: Bot Wars Against Phone Scams](http://arxiv.org/abs/2610.26781v1)** — Basta et al.
   博弈论 + LLM 自动反制电话诈骗（scam-baiting 消耗骗子资源），安全应用的有趣落地。

---

## 研究趋势信号

今日投稿释放出三个明确信号：**其一，“自我改进”从概念走向度量**——PhysRSI-eval、HarnessPro 都在为 RSI 建立可量化框架，暗示社区正从演示转向科学评估。**其二，记忆内生化竞赛开启**——MemT-1.0、WeAct、KronLSTM 从不同角度（架构、权重切换、记忆修订）攻击持续学习问题，“外挂 RAG 记忆”可能面临范式挑战。**其三，评估方法论本身成为研究对象**——ProteinGeoBench、KEEP-Bench、"Same Simulation"不约而同质疑现有基准分数与真实能力的差距，元评估（meta-evaluation）正在成为独立研究方向。此外，安全前置化（Safety Mid-Training）与多模型系统通信压缩（LatComm）预示训练与系统设计层面 respectively 的新议程。

---

## 值得精读

1. **[MemT-1.0](http://arxiv.org/abs/2610.26825v1)** — 如果其“记忆内化为计算”的架构主张成立，将直接影响下一代基础模型设计与持续学习路线，是范式级提案，值得完整审视其技术细节与实验支撑。

2. **[WildAWM](http://arxiv.org/abs/2610.26828v1)** — Agent 环境自动合成是规模化 agent 学习的关键卡点，该工作同时处理了安全风险问题，工程与研究方向兼备，对做 agent 训练基础设施的团队尤有参考价值。

3. **[Safety Mid-Training](http://arxiv.org/abs/2610.26809v1)** — 出自 Yejin Choi 团队，挑战“安全=后训练”的行业默认假设，其对安全—能力权衡的实证分析对预训练/后训练管线设计有直接指导意义。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*