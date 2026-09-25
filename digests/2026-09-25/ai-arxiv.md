# ArXiv AI 研究日报 2026-09-25

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-25 04:00 UTC

---

# ArXiv AI 研究日报 · 2026-09-25

---

## 一、今日速览

今日 50 篇论文呈现出几条清晰主线：**Jev 系列决策模型**（#2、#41、#49）集中爆发，形成从训练、评测到安全对齐的完整研究脉络，值得高度关注。**自博弈预训练**（#21）提出零数据模型自我生成训练数据的范式，可能影响预训练经济学。**LLM 社会模拟的保真度审计**（#23、#29、#48）正成为评估方法论的新兴分支。此外，语音领域数据集（#46 YODAS v3 超 110 万小时）和低资源 ASR（#38、#39）持续活跃，多份共享任务系统报告（#43、#44）显示 NLP 竞赛生态繁荣。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

- **Self-Play Pretraining with Zero Data** — [arxiv.org/abs/2609.30063](http://arxiv.org/abs/2609.30063v1) | Cowsik et al.
  让模型学会生成对自身改进最有用的训练数据，摆脱外部数据策划依赖，是预训练范式的根本性探索。

- **Your Transformer Can Hold Two Thoughts at Once** — [arxiv.org/abs/2609.29845](http://arxiv.org/abs/2609.29845v1) | Tikhonov et al.
  证明 LLM 具有基础线性叠加性质：不同文本流的输入线性组合可产生各自 next-token 分布的叠加，为可解释性提供新视角。

- **Encoded but Not Decoded: Layer-Localized Evidence for a Three-Level Gap in LLM Syntax** — [arxiv.org/abs/2609.29848](http://arxiv.org/abs/2609.29848v1) | Lu et al.
  提出行为层/LM-head 读取层/内部表示层三级评估框架，区分“未编码”与“编码但未使用”两类句法失败。

- **Just Ask Jev: RL for Calibrated Decisions as a Zero-Shot AI Alignment Failure Detector** — [arxiv.org/abs/2609.29429](http://arxiv.org/abs/2609.29429v1) | Guo et al.
  用 RL 训练的校准决策模型 Jev 作为零样本对齐失败检测器，无需解码即评分，挑战生成式裁判范式。

- **JEV vs. LLMs as Rubric Judges** — [arxiv.org/abs/2609.29769](http://arxiv.org/abs/2609.29769v1) | Rao & Callison-Burch
  系统对比 Jev 与三款 flash 级 LLM 裁判：更便宜、更快，且在相同地方犯错——引发“是否需要 LLM 裁判”的讨论。

- **Cultural Divergence Preservation** — [arxiv.org/abs/2609.29928](http://arxiv.org/abs/2609.29928v1) | Chae et al.
  诊断 LLM 模拟跨国调查时的“扁平化”与“漫画化”失真，指出即使国内分布准确，跨文化差异也可能被抹平。

- **CORDIAL: Calibrating Ordinal LLM Outputs from Few Labels** — [arxiv.org/abs/2609.29807](http://arxiv.org/abs/2609.29807v1) | Wang et al.
  将 LLM 的序数输出建模为真实标签的含噪测量，用极少标注校准饱和、压缩与系统性偏置。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

- **JevOut: Natural Context Can Flip Decision Models** — [arxiv.org/abs/2609.30243](http://arxiv.org/abs/2609.30243v1) | Xu
  揭示自然上下文可翻转 Jev 类决策模型的输出——决策模型直接路由请求、触发动作时的安全隐忧。

- **IterSynth: Role-Decoupled Iterative Synthesis for Deep Search Agents** — [arxiv.org/abs/2609.29444](http://arxiv.org/abs/2609.29444v1) | Wu et al.
  解耦 ReAct 智能体的规划/检索/综合角色并迭代合成，解决角色耦合与上下文膨胀两大痛点。

- **ExplorationBench: Measuring AI Systems' Exploration in Verifiable Alien Worlds** — [arxiv.org/abs/2609.30199](http://arxiv.org/abs/2609.30199v1) | Zhang et al.
  在可验证的“外星世界”中测度 AI 的科学探索能力（假设生成、实验设计、迭代），填补科学发现评估空白。

- **GRASP: Strategic Planning with Agentic AI** — [arxiv.org/abs/2609.30147](http://arxiv.org/abs/2609.30147v1) | Srivastava et al.
  策略感知的多阶段规划框架，缓解 LLM 随任务复杂度增加的可靠性退化。

- **Agentic Detection of Online Conspiracies** — [arxiv.org/abs/2609.30250](http://arxiv.org/abs/2609.30250v1) | Biton & Tsur
  用智能体区分阴谋言论中的认同、担忧、批评、讽刺等语用立场，超越表层词汇检测。

### 🔧 方法与框架（新技术、基准测试、效率优化）

- **PoEM: Predicting RL Outcomes from Existing Policies** — [arxiv.org/abs/2609.30226](http://arxiv.org/abs/2609.30226v1) | Hamidieh et al. (MIT)
  从已有策略预测 RL 后训练结果，避免奖励模型变化时从头重跑昂贵训练。

- **MILO: Many-shot ICL with Block-wise Low-rank Compression** — [arxiv.org/abs/2609.29913](http://arxiv.org/abs/2609.29913v1) | Zhao et al.
  块级低秩压缩 KV cache，破解千例 many-shot ICL 的显存瓶颈。

- **Artificial Societies Benchmark** — [arxiv.org/abs/2609.30030](http://arxiv.org/abs/2609.30030v1) | Chidichimo et al.
  验证合成人口是否支持研究结论的框架——合成调查可复现均值却歪曲方差与因果响应。

### 📊 应用（垂直领域、多模态、代码生成）

- **YODAS v3: 110 万小时高带宽多语言语音** — [arxiv.org/abs/2609.29448](http://arxiv.org/abs/2609.29448v1) | Chen et al.
  迄今最大开源语音语料（147 种语言、48kHz 立体声、CC BY 3.0），里程碑级资源发布。

- **PUBG Ally: Conversational Embodied Agent as AI Teammate** — [arxiv.org/abs/2609.29837](http://arxiv.org/abs/2609.29837v1) | Kim et al.
  在 PUBG 中以语音协作的具身 AI 队友，融合实时感知、决策与语音交互。

- **VeriSpeak: Speech-Based Fact Checking** — [arxiv.org/abs/2609.30227](http://arxiv.org/abs/2609.30227v1) | Mazumder et al.
  首个面向语音事实核查的 RAG 探针基准，回应播客、政治演讲等口述 misinformation。

- **TimeBraid: Unifying Time Series and Language** — [arxiv.org/abs/2609.29792](http://arxiv.org/abs/2609.29792v1) | Wang et al.
  通过交错全局残差注意力对齐语言模型与时序基础模型，双通道继承知识与推理能力。

---

## 三、研究趋势信号

三个信号值得注意。**其一，“决策模型 vs. 生成式 LLM”之争成形**：Jev 相关三篇论文（#2、#41、#49）从鲁棒性、裁判替代、对齐检测多角度挑战“一切皆生成”的范式，非生成式校准分类器在成本与速度上的优势正被系统验证。**其二，合成社会模拟的“测量仪器批判”兴起**：#23、#29、#48 不约而同地质疑 LLM 模拟人类的结论是否为测量伪影，预示评估方法论的自我审视期到来。**其三，评测可复现性焦虑**：#19、#48 均聚焦小规模 prompt 集与排行榜结论的置信度问题。同时，语音 AI 继续向高保真、低资源、长音频纵深发展。

---

## 四、值得精读

1. **Self-Play Pretraining with Zero Data** — [2609.30063](http://arxiv.org/abs/2609.30063v1)
   若模型能自生成最有价值的训练数据，将改变预训练的数据经济学，是潜在的范式转移工作，需仔细审视其与现有课程学习/合成数据方法的差异及可扩展性证据。

2. **JEV vs. LLMs as Rubric Judges + Just Ask Jev** — [2609.29769](http://arxiv.org/abs/2609.29769v1) / [2609.29429](http://arxiv.org/abs/2609.29429v1)
   两篇配合阅读可完整理解校准决策模型替代 LLM 裁判与安全分类器的证据链，对评估基础设施和安全审核的实际部署都有直接参考价值。

3. **Cultural Divergence Preservation** — [2609.29928](http://arxiv.org/abs/2609.29928v1)
   指出跨文化分布保真这一被忽视的失效模式，任何使用 LLM 做合成调查或用户模拟的研究者都应了解其诊断方法与结论边界。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*