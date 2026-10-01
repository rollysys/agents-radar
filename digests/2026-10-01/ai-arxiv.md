# ArXiv AI 研究日报 2026-10-01

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-01 04:49 UTC

---

# 📰 ArXiv AI 研究日报（2026-10-01）

## 一、今日速览

今日 50 篇 AI 论文中，最突出的主题是**智能体外壳优化**——多篇文章系统研究了如何在固定 LLM 的前提下自动化设计、进化 agent harness（#8、#16、#41），提示“模型冻结、外围进化”正成为新范式。其次是**Scaling Law 的精细化**：循环 MoE（#12）、预训练调度（#45）、AI 生成文本的数据价值（#17）均从理论层面重新审视扩展规律。此外，**扩散语言模型蒸馏**（#30）、**跨语言遗忘漏洞**（#21）以及**基准可信度审计**（#3、#37）揭示了当前评测体系中的深层问题。机器人领域出现了触觉驱动好奇心学习（#50）与自博弈技能发现（#49）等具身智能新方向。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

- **Scaling Laws for Looped Mixture of Experts**
  [arxiv.org/abs/2609.40316](http://arxiv.org/abs/2609.40316v1) | Yanbei Chen 等
  首次统一建模循环 Transformer 与 MoE 稀疏性的联合 Scaling Law，为“固定参数扩深度 vs 固定算力扩容量”给出理论权衡框架。

- **How Much Is an AI Token Worth? Scaling Laws for Wild AI-Generated Web Text**
  [arxiv.org/abs/2609.40295](http://arxiv.org/abs/2609.40295v1) | Jenna Russell 等
  实测 2026 年 6-8 月网页数据中 27.5%-31.1% 的 token 为 AI 生成，并给出其预训练价值评估——数据污染研究的重要实证。

- **Linguistic Loopholes in LLM Unlearning**
  [arxiv.org/abs/2609.40286](http://arxiv.org/abs/2609.40286v1) | Tyler Skow 等
  提出 174 种语言基准，揭示“英语遗忘≠全语言遗忘”的跨语言漏洞，并提出覆盖感知遗忘方法。

- **Distribution Matching Distillation for Continuous Diffusion Language Models**
  [arxiv.org/abs/2609.40235](http://arxiv.org/abs/2609.40235v1) | Paul Le Van Kiem 等
  将分布匹配蒸馏统一应用于连续扩散语言模型，大幅降低 NFE 需求，兼顾质量与多样性。

- **From Spectra to Joint Schedules in LLM Pre-training: 3+3(+2) Scaling-Law Regimes**
  [arxiv.org/abs/2609.40148](http://arxiv.org/abs/2609.40148v1) | Yichen Wang 等
  在随机特征 SGD 框架下精确刻画学习率/批大小调度对 Scaling Law 的改变，识别出 8 种扩展机制。

- **Is Weight Tying Still Beneficial for Decoder-Only LLMs Under DP-SGD?**
  [arxiv.org/abs/2609.40335](http://arxiv.org/abs/2609.40335v1) | Razan El Mais 等
  系统检验权重绑定在差分隐私微调下的利弊，对私有 LLM 训练实践有直接指导意义。

- **Cheap to Draw, Expensive to Trust: Certifying Test-Time Scaling Curves**
  [arxiv.org/abs/2609.40190](http://arxiv.org/abs/2609.40190v1) | Sohail 等
  指出 test-time scaling 曲线缺乏统计保证，提出认证方法——对依赖 TTS 做预算决策的团队是必读警示。

### 🤖 智能体与推理

- **Turbo Harness: Instance-Adaptive Harness Optimization**
  [arxiv.org/abs/2609.40330](http://arxiv.org/abs/2609.40330v1) | Tunyu Zhang 等
  挑战“单一全局 harness”假设，实现按任务实例自适应的外壳优化，是 agent 递归自我改进的关键拼图。

- **How Much of a Harness Does a Strong Agent Need for Autonomous ML Engineering?**
  [arxiv.org/abs/2609.40303](http://arxiv.org/abs/2609.40303v1) | Kirill Brilliantov 等
  实证研究强模型对复杂 harness 的真实依赖度，为“模型变强、脚手架变简”假说提供证据。

- **Learning from Research: Toward Lifelong Agent Harness Evolution**
  [arxiv.org/abs/2609.40169](http://arxiv.org/abs/2609.40169v1) | Jingbo Yang 等
  提出从持续积累的研究经验中终身进化 agent harness 的框架，与上述两篇构成 harness 研究三部曲。

- **Cogentic: Multi-Agent Orchestration for Automated Proof Discovery**
  [arxiv.org/abs/2609.40324](http://arxiv.org/abs/2609.40324v1) | Yang Cai 等
  多智能体协作探索竞争性猜想，将自动定理证明从单次生成推进到开放式研究问题。

- **PivotOPD: Learning to Recover from Pivotal Mistakes in Multi-Turn Agents**
  [arxiv.org/abs/2609.40285](http://arxiv.org/abs/2609.40285v1) | Yinghui He 等
  针对多轮交互中误差复合问题，在 on-policy 蒸馏中显式训练学生从关键错误中恢复。

- **PhantomEnvironments: Training LLM Agents in Fictional Worlds**
  [arxiv.org/abs/2609.40221](http://arxiv.org/abs/2609.40221v1) | Anmol Kabra 等
  用虚构世界提供可验证奖励、免于基准污染的廉价 RL 训练环境，直击 agent RL 的环境瓶颈。

- **EvoDuet: Bilevel Co-Evolution of Web Searching and Task Solving**
  [arxiv.org/abs/2609.40340](http://arxiv.org/abs/2609.40340v1) | Young-Jun Lee 等
  双层协同进化搜索策略与求解策略，解决 LLM 进化搜索因外部知识缺失而停滞的问题。

### 🔧 方法与框架

- **cua-speedrun: Standardized Benchmarking of the Speed of Computer-Use Agents**
  [arxiv.org/abs/2609.40284](http://arxiv.org/abs/2609.40284v1) | Pranjal Aggarwal 等
  首个聚焦 CUA 完成速度（而非仅成功率）的标准化基准，补齐部署评估的关键维度。

- **Provably Tractable NFA-Constrained Language Generation via HMMs**
  [arxiv.org/abs/2609.40185](http://arxiv.org/abs/2609.40185v1) | Jialiang Sun, Kuldeep Meel
  通过 HMM 构造给出 NFA 约束生成的可证高效且不扭曲分布的方案，理论上解决计数难题。

- **Policy Iteration Is Not Strongly Polynomial for Deterministic MDPs**
  [arxiv.org/abs/2609.409.../2609.40147](http://arxiv.org/abs/2609.40147v1) | Han Zhong, Yinyu Ye
  证明 Howard 策略迭代在确定性 MDP 上存在指数下界，解决经典理论开放问题。

### 📊 应用（垂直领域、多模态、具身）

- **Ranking-Aware Prompt Optimization for Multimodal Clinical Diagnosis**
  [arxiv.org/abs/2609.40361](http://arxiv.org/abs/2609.40361v1) | Tian Xia 等
  将临床多模态适配目标从准确率转向排序感知指标，直面类别失衡下“90% 准确率但临床无用”的问题。

- **Removing Timing Shortcuts Improves Non-Invasive Brain-to-Text**
  [arxiv.org/abs/2609.40359](http://arxiv.org/abs/2609.40359v1) | Dulhan Jayalath 等
  重要的负面结果：知名脑解码工作在无脑数据时仍可复现主要提升，提示时序捷径伪影。

- **Index-Translate: A Multilingual Translation Model Family**
  [arxiv.org/abs/2609.40181](http://arxiv.org/abs/2609.40181v1) | Tianjiao Li 等
  覆盖文本、语音、可控配音、长文档的 2B/9B 多规格开源翻译模型家族，实用价值高。

- **Tactile Curiosity Drives Robot Interaction**
  [arxiv.org/abs/2609.40134](http://arxiv.org/abs/2609.40134v1) | Klemens Iten 等
  用触觉信号驱动好奇心探索，将机器人 RL 预算集中于接触丰富的交互而非自由空间运动。

---

## 三、研究趋势信号

今日投稿呈现三条清晰趋势：**（1）Harness 工程成为一等研究对象**——至少 3 篇论文从实例自适应、最简依赖、终身进化角度系统化 agent 外壳设计，表明社区正从“调模型”转向“冻结模型、进化外围软件”。**（2）评测可信度审计升温**——脑解码可复现性质疑（#3）、test-time scaling 曲线认证（#37）、CUA 速度基准（#23）共同指向对现有 benchmark 统计效力的反思。**（3）理论 Scaling Law 走向精细化**——循环 MoE、预训练调度、野生 AI 文本估值等研究显示，单一的 Chinchilla 式幂律正被“调度依赖、架构依赖、数据来源依赖”的多机制模型取代。此外，触觉好奇心、自博弈技能发现预示具身智能的探索机制正从视觉主导向多模态内在动机扩展。

---

## 四、值得精读

1. **Scaling Laws for Looped Mixture of Experts**（#12）— 首次统一两个最重要的效率扩展维度（循环深度 × 专家稀疏），理论框架 + 实证验证，对下一代架构选型有直接指导价值。

2. **How Much of a Harness Does a Strong Agent Need for Autonomous ML Engineering?**（#16）— 与 #8、#41 互为对照，构成对“harness 到底值多少性能”这一问题的系统性回答，是判断 agent 基础设施投资方向的关键依据。

3. **Removing Timing Shortouts Improves Non-Invasive Brain-to-Text**（#3）— 高质量的可复现性质疑研究，方法论（去脑数据对照）可迁移到其他时序解码任务，对所有依赖神经时序信号的下游研究都是警示。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*