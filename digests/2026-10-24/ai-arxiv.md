# ArXiv AI 研究日报 2026-10-24

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-24 03:46 UTC

---

# 📰 ArXiv AI 研究日报 — 2026-10-24

## 一、今日速览

今日 50 篇 AI 相关论文呈现出几条鲜明主线：**推理与测试时计算优化**持续升温，从思维链剪枝、扩散语言模型去掩码策略到模型路由均有突破；**AI 安全与治理**成为高频主题，涵盖钓鱼攻击基准、缺失证据下的智能体安全、EU AI Act 合规仪表盘及工具性收敛实证检验；**模型效率**方向聚焦低比特量化（N-gram 嵌入、格点向量量化），推动 LLM 部署成本下降；此外，**多语言公平性**（越南语、巴什基尔语、跨文字系统）与**人类-AI 信任交互**研究涌现出多个高质量实证工作。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. [Direct Pass@k Optimization for Thought Pruning](http://arxiv.org/abs/2610.31667v1)** — Salmani et al.
直接优化 Pass@k 指标进行推理链剪枝，在测试时扩展中平衡候选解质量与多样性，直击推理成本痛点。

**2. [SQuAT: Spherical Lattice Vector Quantization-Aware Training](http://arxiv.org/abs/2610.31412v1)** — Loeschcke et al.
将格点向量量化感知训练扩展至十亿参数级 LLM，为低比特模型提供强率失真权衡，是模型压缩方向的规模化验证。

**3. [Low-Bit N-Gram Embeddings for Language Models](http://arxiv.org/abs/2610.31646v1)** — Chung & Du
对现代开源模型中日益流行的 N-gram 嵌入表做低位量化，大幅降低内存开销而不损失性能。

**4. [How Depth Growth and Looping Shape In-Context Learning](http://arxiv.org/abs/2610.31421v1)** — Kapl et al.
系统研究循环结构与深度增长如何塑造 ICL 的习得与保持，为“推理靠深度复用”提供机制性证据。

**5. [Causal Chain of Thought: Mitigating Attention Leakage](http://arxiv.org/abs/2610.31639v1)** — Dominici et al.
通过上下文隔离让 CoT 各步骤真正因果驱动最终答案，解决“伪推理链”问题。

**6. [Questioning Instrumental Convergence in RLVR](http://arxiv.org/abs/2610.31624v1)** — Alparslan et al.
基于 OLMo-3 checkpoint 证据检验“工具性收敛”假说在 RLVR 训练中的真实性，对齐研究的重要实证补充。

**7. [Multi-Token Prediction and Alternative Tokenization Improve Learning Latent Multi-Hop Graph Search](http://arxiv.org/abs/2610.31439v1)** — Frydenlund et al.
揭示多跳图搜索学习失败的双因：监督信号与 tokenization，并用多 token 预测修复规模化失效。

**8. [DIAL: Steerable Language Models with Distilled Instruction-Adherence Levels](http://arxiv.org/abs/2610.31438v1)** — Tran et al.
蒸馏出可控的指令遵循等级，让“保持简短”这类模糊指令获得细粒度、可靠的强度控制。

### 🤖 智能体与推理（规划、工具使用、安全）

**9. [AgentPhishing: A Benchmark of LLM Email Agents Under Adaptive Attack](http://arxiv.org/abs/2610.31404v1)** — Tan et al.
首个针对邮件智能体的自适应钓鱼攻击基准，不仅测识别恶意邮件，更测智能体的响应行为。

**10. [EpiSEM-Bench: Safety and Evidence Recovery under Missing Evidence](http://arxiv.org/abs/2610.31650v1)** — Zhang et al.
考察工具返回信息缺失时智能体如何执行被禁止的操作，填补了“遗漏证据”维度的安全评估空白。

**11. [Training Small Language Models for Transferable Tool Selection](http://arxiv.org/abs/2610.31483v1)** — Zhou et al.
针对万级工具库的可迁移工具选择训练，解决 SLM 智能体工具检索的关键瓶颈。

**12. [Simulated Control Evals](http://arxiv.org/abs/2610.31593v1)** — Olmo et al.
反思控制评估从专用环境到真实部署的外推有效性，是 AI 安全评估方法论的重要改进。

**13. [DuoCook: An Overcooked-Inspired Benchmark](http://arxiv.org/abs/2610.31511v1)** — Jiao et al.
基于 Unreal Engine 的双玩家视觉规划与协调基准，考察视觉语言智能体的实时状态追踪与资源分配。

### 🔧 方法与框架（效率、基准、蒸馏）

**14. [What Makes a Good Unmasking Policy?](http://arxiv.org/abs/2610.31576v1)** — Sakurai et al.
对扩散语言模型的学习式去掩码策略做受控对比研究，厘清监督信号、输入与容量对速度-精度权衡的影响。

**15. [Predictable Performance is Suboptimal, and What It Means for Model Routing](http://arxiv.org/abs/2610.31428v1)** — Zhang & Hardt
揭示性能可预测性与路由最优性之间的理论张力，对 LLM 路由系统的设计有直接指导意义。

**16. [When to Follow the Teacher: Advantage-Based On-Policy Distillation](http://arxiv.org/abs/2610.31563v1)** — Sabbaghi et al.
提出基于优势判断的 OPD，仅在教师指导优于学生自身探索时才跟随，改进在线蒸馏范式。

**17. [HERD: Harness-Evolving Recursive Distillation for Continual Learning](http://arxiv.org/abs/2610.31401v1)** — Sun et al.
通过递归蒸馏演化智能体外挂（harness）实现持续学习，绕开参数化方法的灾难性遗忘。

### 📊 应用与多模态

**18. [MoG-VLM: Motion-Guided Video Anomaly Detection](http://arxiv.org/abs/2610.31478v1)** — Dawoud et al.
以运动引导的动态帧采样替代均匀采样，让 VLM 视频异常检测接近实时部署。

**19. [FocusVLA: Future-Intent Guided Dynamic View Routing](http://arxiv.org/abs/2610.31423v1)** — Xu et al.
用未来意图引导 VLA 模型的动态视角路由，减少冗余观测提升机器人操控效率。

**20. [Would an LLM Match into a Residency?](http://arxiv.org/abs/2610.31586v1)** — Fernandez-de-Retana et al.
在西班牙 MIR 医学考试上评估开源模型的不确定性识别、推理与图像使用能力，面向真实医疗自部署场景。

**21. [Same Entity, Different Script](http://arxiv.org/abs/2610.31407v1)** — Gopal et al.
诊断同一人名在不同文字系统下的实体匹配失败，601 组审计数据揭示多语言模型的身份判断不一致问题。

---

## 三、研究趋势信号

今日投稿呈现三个值得跟踪的信号：**（1）“诚实性/可靠性”评估兴起**——多篇论文关注模型“知道自己何时错”（医学考试不确定性、成本感知弃权、TTS 评测中的 ASR 错误下限），表明社区正从准确率竞赛转向可靠性工程；**（2）智能体安全进入实证阶段**——钓鱼攻击、缺失证据、控制评估外推等基准标志着智能体安全研究从原则讨论走向可测量；**（3）扩散语言模型生态快速成型**——去掩码策略的受控研究与扩散模型用于对抗攻击相继出现，该架构正从 novelty 进入系统优化期。此外，多语言/低资源语言（越南语、巴什基尔语、斯洛伐克语、跨文字）工作密集出现，反映社区对英语中心偏见的持续纠偏。

---

## 四、值得精读

1. **[Direct Pass@k Optimization for Thought Pruning](http://arxiv.org/abs/2610.31667v1)** — 推理成本是测试时扩展落地的核心瓶颈，直接优化 Pass@k 而非单条轨迹质量是思路上的转变，对推理 infra 研究者必读。

2. **[Predictable Performance is Suboptimal](http://arxiv.org/abs/2610.31428v1)** — Moritz Hardt 组的理论工作，挑战“路由 = 性能预测”的默认假设，结论对生产级 LLM 路由系统设计有直接工程意义。

3. **[AgentPhishing](http://arxiv.org/abs/2610.31404v1)** — 随着邮件/桌面智能体商用加速，该基准定义了攻击面评估的新范式（识别 + 响应行为双维度），安全与智能体两个方向的研究者都应关注。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*