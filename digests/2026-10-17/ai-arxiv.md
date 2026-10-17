# ArXiv AI 研究日报 2026-10-17

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-17 03:30 UTC

---

# 📰 ArXiv AI 研究日报（2026-10-17）

## 一、今日速览

今日 50 篇 AI 论文中，**LLM 智能体**仍是绝对主线：从 Minecraft 团队协作（Gemini 4 Argon 四智能体击败末影龙）、FDE 级真实交付评测（FDE-Gym）到自主机器学习工程，智能体研究正从玩具任务走向真实世界。**弱到强（weak-to-strong）协作**密集出现——LEASH、Disagreement-Guided Routing 等工作探索小模型为主、大模型按需接管的新范式。**扩散语言模型**方向持续升温，涵盖 Transformer 架构设计、few-shot 提示与拒绝采样加速。此外，**AI 安全评估的可信性**（评测意识、Agent 安全捷径偏差）与**世界模型**（机器人环境潜变量、3D 几何状态）形成两条值得关注的支线。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1. **Designing Transformers for Continuous Diffusion Language Models**
   [http://arxiv.org/abs/2610.22330v1](http://arxiv.org/abs/2610.22330v1) | Weijian Luo et al.
   首个针对连续扩散语言模型（CDLM）系统性重新设计 Transformer 架构的工作，突破直接套用因果 LLM 或 DiT 架构的局限，是扩散 LM 走向实用的关键一步。

2. **Rethinking Routing Exploration in Modern Mixture-of-Experts**
   [http://arxiv.org/abs/2610.22353v1](http://arxiv.org/abs/2610.22353v1) | Bingcong Li et al.
   重新审视细粒度专家 + 共享专家架构下的路由探索问题，指出经典探索策略在现代 MoE 中失效的原因，对大规模模型训练有直接指导意义。

3. **Knowledge That Is Linear Before Fine-Tuning Generalizes After It**
   [http://arxiv.org/abs/2610.22300v1](http://arxiv.org/abs/2610.22300v1) | Faridoun Mehri, H. Schütze
   提出“活跃事实 vs. 惰性事实”区分：微调前以线性形式表征的知识才能支持后续泛化，为持续学习和知识注入提供了可操作的判据。

4. **Towards Continual Learning: Mitigating Forgetting With Subspace Tuning**
   [http://arxiv.org/abs/2610.22293v1](http://arxiv.org/abs/2610.22293v1) | Arnav Chavan et al.
   将灾难性遗忘与微调移动权重的方向/幅度关联，提出子空间调优方法，是 LLM 持续学习方向的扎实进展。

5. **Evaluation Awareness Beyond English**
   [http://arxiv.org/abs/2610.22333v1](http://arxiv.org/abs/2610.22333v1) | Trizal Garg et al.
   首次系统研究非英语（印度语言）场景下的 LLM“评测意识”，发现模型在非英语安全评测中行为差异显著，暴露当前对齐评估的盲区。

6. **CAT-alyzing Honesty: Continuous Adversarial Training for Transferable LLM Honesty**
   [http://arxiv.org/abs/2610.22292v1](http://arxiv.org/abs/2610.22292v1) | Yuan-Chen Chang et al.
   通过持续对抗训练提升可迁移的 LLM 诚实性，而非仅针对特定评测集过拟合。

7. **BitSparse: Compact Activation Storage for ReLU Feed-Forward Networks**
   [http://arxiv.org/abs/2610.22256v1](http://arxiv.org/abs/2610.22256v1) | Max Zhu et al.
   利用 ReLU/ReLU² 激活的稀疏性实现**无损**激活压缩，为激活检查点之外提供第三条省内存路径，工程价值高。

### 🤖 智能体与推理（规划、工具使用、多智能体、监督）

8. **A team of Gemini 4 Argon agents beats Minecraft**
   [http://arxiv.org/abs/2610.22319v1](http://arxiv.org/abs/2610.22319v1) | Maxence Faldor, Satinder Singh, Roberta Raileanu
   四个 Gemini 4 Argon 智能体通过游戏内聊天和共享记忆自主分工协作击败末影龙——无需预分配角色，展示了前沿模型的涌现式团队协作能力，今日最具话题性。

9. **FDE-Gym: The Last Mile of AI Delivery**
   [http://arxiv.org/abs/2610.22350v1](http://arxiv.org/abs/2610.22350v1) | Dongxu Yang et al.
   首个模拟“前线部署工程师”真实工作流的智能体基准：模糊需求澄清、在线系统操作、隐性约束挖掘，直指智能体评测与真实交付之间的鸿沟。

10. **LEASH: Uncertainty-Aware Weak-to-Strong Escalation for Computer-Use Agents**
    [http://arxiv.org/abs/2610.22280v1](http://arxiv.org/abs/2610.22280v1) | Qingni Wang et al.
    不确定性感知的弱到强接管机制：小模型默认执行、大模型按需介入，在成本与成功率之间取得平衡，是 computer-use 智能体落地的关键设计。

11. **Disagreement-Guided Weak-to-Strong Routing**
    [http://arxiv.org/abs/2610.22245v1](http://arxiv.org/abs/2610.22245v1) | Sima Noorani et al.
    用模型间分歧信号决定何时将边缘部署的小模型请求路由至强模型，与 LEASH 形成同一趋势的呼应。

12. **Librarian Agents**
    [http://arxiv.org/abs/2610.22273v1](http://arxiv.org/abs/2610.22273v1) | Anikait Singh et al.
    训练 LLM 主动策划“面向未来查询”的长上下文工作区，将检索从被动反应式转为主动准备式，思路新颖。

13. **KnowGPO: Knowledge-Grouped Policy Optimization for Search Agents**
    [http://arxiv.org/abs/2610.22331v1](http://arxiv.org/abs/2610.22331v1) | Siqi Chen et al.
    针对深度搜索智能体的长程多轮交互，按知识分组分配信用，解决 outcome-based RL 单一终局奖励的信用分配难题。

14. **Learning Self-Orchestration in Decentralized Agent Swarms**
    [http://arxiv.org/abs/2610.22322v1](http://arxiv.org/abs/2610.22322v1) | Guowei Xu et al.
    让智能体群体在训练中同时学习个体能力与组织结构，打破固定编排框架的限制。

### 🔧 方法与框架（基准、效率、RL 后训练）

15. **MLExpert: Towards a Generalist Agentic Model for Autonomous ML Engineering**
    [http://arxiv.org/abs/2610.22344v1](http://arxiv.org/abs/2610.22344v1) | Shangheng Du et al.
    面向 AI4AI / 递归自我改进（RSI）的通用 ML 工程智能体，超出工作流驱动系统的能力边界。

16. **EliteReplay: Preserving Diverse Solutions in RL Post-Training**
    [http://arxiv.org/abs/2610.22290v1](http://arxiv.org/abs/2610.22290v1) | Hanane Nour Moussa et al.
    用 Quality-Diversity 搜索防止 RL 后训练“行为锐化”导致解空间坍缩，直击当前 RLVR 训练的核心痛点。

17. **Baselines and Score Centering in Policy Gradient Estimation**
    [http://arxiv.org/abs/2610.22263v1](http://arxiv.org/abs/2610.22263v1) | Shuo Han, Ziqing Hu
    系统分析 off-policy 场景（训练-推理失配、异步 staleness）下 baseline 与得分中心化的理论，对异步 RLHF 实施有直接参考价值。

18. **Shortcut Sensitivity in Agent-Safety Evaluations**
    [http://arxiv.org/abs/2610.22243v1](http://arxiv.org/abs/2610.22243v1) | H. Demirkiran, J. Ernstberger
    揭示智能体安全评测数据中的捷径线索可使守卫模型分数虚高而不反映真实安全性——方法论上对所有 guard 评测都有警示意义。

### 📊 应用（垂直领域、多模态、科学 AI）

19. **SurvICL: a Foundation Model for in-context Survival Analysis**
    [http://arxiv.org/abs/2610.22242v1](http://arxiv.org/abs/2610.22242v1) | Julie Alberge et al.
    发现现有表格基础模型在小样本删失数据上竟不敌 50 年前的 Cox 模型，并针对性提出生存分析基础模型，结论与方法都很有信息量。

20. **Discovering State-of-the-art Quantum Circuits with LLMs**
    [http://arxiv.org/abs/2610.22367v1](http://arxiv.org/abs/2610.22367v1) | Andi Gu et al.
    用 LLM 发现超越已有方法的 SOTA 量子电路，展示了 LLM 作为科学发现引擎在真实量子硬件上的可行性。

21. **Robust RL for Dynamic Treatment Regimes**
    [http://arxiv.org/abs/2610.22336v1](http://arxiv.org/abs/2610.22336v1) | Chengze Xie et al.
    将患者建模为隐藏上下文，使自适应治疗方案在生物标志物测量误差与疾病动态漂移下保持稳健，医疗 RL 的严谨工作。

22. **MindEval2: Clinically Grounded Patients and Rubrics for Mental Health Evaluation**
    [http://arxiv.org/abs/2610.22314v1](http://arxiv.org/abs/2610.22314v1) | John Mendonça et al.
    用临床接地的合成患者与评分标准改进心理健康 LLM 评测，弥补 LLM-as-a-judge 缺乏临床依据的问题。

---

## 三、研究趋势信号

今日投稿呈现三大信号：**(1) 弱到强协作规模化**——LEASH、Disagreement-Guided Routing 不约而同地以不确定性/分歧为触发器实现“小模型执行 + 大模型兜底”，成本感知推理正从单步路由扩展到长程智能体接管；**(2) 智能体评测的自我审视**——FDE-Gym、Shortcut Sensitivity、Evaluation Awareness 均在质疑现有评测生态的效度：真实交付、评测意识、数据捷径成为新的测量对象，评测方法论本身正在成为研究对象；**(3) 世界模型与扩散 LM 双线推进**——T2-z、GeoState、3DCodeVerse 将世界模型推向可编辑、可验证的代码化形态，而 CDLM 架构、多目标 few-shot、并行拒绝采样则显示扩散语言模型正从原理验证进入工程优化阶段。

---

## 四、值得精读

1. **A team of Gemini 4 Argon agents beats Minecraft**（[2610.22319](http://arxiv.org/abs/2610.22319v1)）
   前沿多智能体涌现协作的标志性实证：无预定义角色、仅靠聊天与共享记忆完成复杂生存目标，为“多智能体是否需要显式编排”提供了关键数据点，适合与 Learning Self-Orchestration 对照阅读。

2. **FDE-Gym**（[2610.22350](http://arxiv.org/abs/2610.22350v1)）
   罕见地从“AI 交付最后一公里”视角定义智能体任务，其模糊需求澄清与隐性约束挖掘的设计将影响下一波智能体基准的构造方式，对做 Agent 产品/评测的读者尤其实用。

3. **Knowledge That Is Linear Before Fine-Tuning Generalizes After It**（[2610.22300](http://arxiv.org/abs/2610.22300v1)）
   以简洁的“活跃/惰性知识”框架建立了线性表征与微调泛化之间的因果联系，理论上重要且可操作，对知识编辑、持续学习和 RAG 注入策略都有直接启示。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*