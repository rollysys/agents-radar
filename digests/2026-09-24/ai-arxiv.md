# ArXiv AI 研究日报 2026-09-24

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-24 03:45 UTC

---

# ArXiv AI 研究日报 — 2026-09-24

## 📌 今日速览

今日 50 篇 AI 相关论文中，**世界模型与具身智能**表现活跃：从 LLM Agent 的世界模型重构（Agent-Editing World Model）到机器人插入操作泛化，显示该方向正快速成熟。**模型架构创新**持续深入，包括对数深度循环语言建模、Memory Attention 和 Mamba-3 非交换状态跟踪等对 Transformer 范式的挑战。**AI 安全**议题升温，出现了关停破坏倾向实证研究和欧盟 AI Act 系统性风险仪表盘。此外，**推理效率**（扩散语言模型因果捷径、量化配置预测）和**垂直应用**（抑郁症预测、病理学基础模型）均有扎实进展。

---

## 🔍 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

- **[Log-Depth Recurrent Language Modeling](http://arxiv.org/abs/2609.28212v1)** — Wang et al.
  将平衡树递归算子扩展至序列建模，提出对数深度的循环架构，兼顾 Transformer 的可并行性与循环模型的深度优势，是架构层面的重要探索。

- **[Memory Attention](http://arxiv.org/abs/2609.28399v1)** — Kang
  研究以 token 索引的记忆替代专用 value projection，探索跨上下文复用隐藏状态内容，对降低注意力计算冗余有启发意义。

- **[When and Where to Trust the Teacher](http://arxiv.org/abs/2609.28385v1)** — Zhang et al.
  通过熵校准的信用分配统一 On-Policy Distillation 与 GRPO，解决 RLVR 中 token 级反馈稀疏与教师偏好不可靠的矛盾。

- **[Fine-Tuning LLMs for Translation](http://arxiv.org/abs/2609.28395v1)** — Scholz et al.
  发现通用遗忘缓解方法无法保留 MT 特定的指令遵循能力，为领域微调评估提供了关键警示。

- **[Complementary Roles of Activation and Parametric Memory](http://arxiv.org/abs/2609.28250v1)** — Niu et al.
  系统研究 KV cache（激活记忆）与参数化记忆在少样本学习中的互补作用，深化对 LLM 测试时学习机制的理解。

- **[Computation Over Geometry](http://arxiv.org/abs/2609.28290v1)** — Deng
  证明语义同一性不能由独立编码的句向量几何判定，而需两句共同计算，对 RAG 与检索系统的同义判定有直接实践影响。

### 🤖 智能体与推理（规划、工具使用、多智能体、安全）

- **[Agent-Editing World Model](http://arxiv.org/abs/2609.28416v1)** — Sun et al.
  反思“预测观测”式语言世界模型，转向可编辑的世界状态表示，避免重建高熵工具响应，是 Agent 世界建模的新范式。

- **[Shutdown Sabotage Propensities in Multi-Agent Systems](http://arxiv.org/abs/2609.28274v1)** — Knecht et al.
  实证测试 AI agent 是否会为规避人类关停而采取行动，首次将工具性自保全假说带入多智能体实证检验，安全研究必读。

- **[PASTABench](http://arxiv.org/abs/2609.28197v1)** — Sun et al.
  面向 Agent 安全的主动式多步轨迹评估基准，弥补单轮评估与步骤级风险监控的空白。

- **[COMPASS: Controlling Collectives of AI Agents in Reasoning Space](http://arxiv.org/abs/2609.28247v1)** — Vatnsdal et al.
  用 Spatial Transformer 在推理空间中控制大规模去中心化机器人集群，解决 LLM 多机协作随规模崩溃的问题。

- **[Can LLMs Reason About Runtime Behavior?](http://arxiv.org/abs/2609.28449v1)** — Taherkhani et al.
  仓库级动态执行推理基准，评估 LLM 对代码运行时行为的理解，超越静态代码 QA。

### 🔧 方法与框架（新技术、基准、效率优化）

- **[Towards Efficient Reasoning: Causal Shortcuts for Diffusion LMs](http://arxiv.org/abs/2609.28272v1)** — Jin et al.
  为扩散语言模型学习因果捷径，压缩双向注意力的指数级探索空间，直击 DLM 推理效率核心痛点。

- **[Predicting Quantization Price for PTQ Configurations](http://arxiv.org/abs/2609.28270v1)** — Qiu et al.
  在部署前预测量化配置的输出分布漂移，避免昂贵的试错式量化搜索。

- **[Even Sharper Bounds for Transductive Learning](http://arxiv.org/abs/2609.28459v1)** — Yang
  基于 Bernstein 型集中不等式给出直推学习更紧的局部复杂度界，理论贡献扎实。

- **[An Open Pipeline for Systemic-Risk Evidence under the EU AI Act](http://arxiv.org/abs/2609.28335v1)** — Emmerson et al.
  开源评估管道与仪表盘，将 AI 安全声明转化为透明可验证的证据，呼应监管落地需求。

### 📊 应用（垂直领域、多模态、机器人）

- **[StudentBench](http://arxiv.org/abs/2609.28470v1)** — Northcutt et al.
  发现 AI 与人类辅导产生等同的 GRE 学习增益，教育领域里程碑式的对照实证。

- **[Cross-Scale Transfer for Depression Severity Prediction](http://arxiv.org/abs/2609.28430v1)** — Feng et al.
  序列化 LoRA 协议实现跨量表（PHQ-8→HAMD-17）、跨语言、跨临床范式的迁移，数据稀缺医疗场景的实用方案。

- **[Generalizable Robotic Insertion with World Models](http://arxiv.org/abs/2609.28258v1)** — Hansen et al.
  用世界模型实现高混合场景下机器人插入任务泛化，摆脱逐任务专用策略。

- **[AnchorReasoning](http://arxiv.org/abs/2609.28366v1)** — Bao et al.
  长尾自动驾驶场景的视觉定位与因果推理数据集，连接决策关键视觉证据与规划。

- **[Frozen Flows Forget](http://arxiv.org/abs/2609.28414v1)** — Chen et al.
  诊断冻结潜空间流模型静默丢失运动信息的问题并提出修复，对潜空间世界模型是重要警示。

---

## 📈 研究趋势信号

今日投稿呈现三条清晰主线：**其一，世界模型成为 Agent 与机器人研究的交汇点**——从语言世界模型的可编辑重构，到视觉潜空间流、机械插入任务，学界正系统性审视“预测观测”范式的局限并转向结构化状态表示。**其二，模型记忆与状态机制创新密集**——Memory Attention、激活/参数记忆互补、Mamba-3 非交换状态跟踪均指向“如何高效存储与复用计算结果”这一核心问题。**其三，AI 安全从理论走向实证与合规基础设施**——关停破坏实验、PASTABench 与 EU AI Act 证据管道同日出现，表明安全研究正与监管实践深度耦合。此外，量化配置预测与扩散 LM 效率优化反映推理成本压力持续传导至研究议程。

---

## ⭐ 值得精读

1. **[Agent-Editing World Model](http://arxiv.org/abs/2609.28416v1)** — 提出世界建模的范式转换（预测观测 → 可编辑状态），代表当前 Agent 研究最前沿的反思方向，方法论与实验设计都值得深入研读。

2. **[Shutdown Sabotage Propensities in Multi-Agent Systems](http://arxiv.org/abs/2609.28274v1)** — 工具性趋同假说的首次大规模多智能体实证，无论结论如何，其实验设计与测量方法对 AI 安全后续研究具有奠基意义。

3. **[Log-Depth Recurrent Language Modeling](http://arxiv.org/abs/2609.28212v1)** — 在 Transformer 与线性 RNN 之争中提出对数深度折中方案，若扩展性好，可能影响下一代基础模型架构选型。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*