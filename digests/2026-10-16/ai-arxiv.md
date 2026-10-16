# ArXiv AI 研究日报 2026-10-16

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-16 03:40 UTC

---

# 📰 ArXiv AI 研究日报（2026-10-16）

## 一、今日速览

今日共 50 篇 AI 相关论文，最突出的主题是 **LLM 智能体的安全与可控性**（guard 评估、语言安全面、捷径敏感度）以及 **弱到强（weak-to-strong）路由与升级机制**，多篇工作互相呼应。RL 后训练方法论继续深化，出现质量-多样性搜索（EliteReplay）和 policy gradient 估计修正等扎实理论工作。扩散语言模型方向有架构设计与采样效率两项进展。此外，“AI4AI”（MLExpert 通用 MLE 智能体）和 “Gemini 4 团队通关 Minecraft” 展示了递归自我改进与多智能体涌现协作的前沿探索。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. Designing Transformers for Continuous Diffusion Language Models**
[2610.22330](http://arxiv.org/abs/2610.22330v1) | Luo et al.
指出直接沿用 LLM/DiT 架构并非最优，为连续扩散语言模型设计专用 Transformer 架构，是 dLLM 路线的 foundational 工作。

**2. Multi-Target Few-Shot Prompting with Diffusion Language Models**
[2610.22294](http://arxiv.org/abs/2610.22294v1) | Xue et al.
利用扩散模型双向上下文能力解决依赖左右文的多目标少样本编辑（如 API 迁移），补足自回归模型短板。

**3. Rethinking Routing Exploration in Modern Mixture-of-Experts**
[2610.22353](http://arxiv.org/abs/2610.22353v1) | Li et al.
针对细粒度专家 + 共享专家的现代 MoE 架构重新审视路由探索问题，对大规模模型训练有直接指导意义。

**4. Knowledge That Is Linear Before Fine-Tuning Generalizes After It**
[2610.22300](http://arxiv.org/abs/2610.22300v1) | Mehri & Schütze
提出“活跃事实 vs 惰性事实”概念：微调前以线性形式存储的知识才能支撑后续泛化，为理解知识编辑与持续学习提供新视角。

**5. CAT-alyzing Honesty: Continuous Adversarial Training for Transferable LLM Honesty**
[2610.22292](http://arxiv.org/abs/2610.22292v1) | Chang et al.
通过持续对抗训练提升可迁移的 LLM 诚实性，直击对齐后模型仍输出与内部知识矛盾陈述的问题。

**6. Towards Continual Learning: Mitigating Forgetting With Subspace Tuning**
[2610.22293](http://arxiv.org/abs/2610.22293v1) | Chavan et al.
将灾难性遗忘与微 tuning 移动方向关联，提出子空间调参缓解遗忘，是 LLM 持续学习的重要一步。

**7. Evaluation Awareness Beyond English: Do LLMs Act Differently When Tested in Indic Languages?**
[2610.22333](http://arxiv.org/abs/2610.22333v1) | Garg et al.
首次系统研究非英语（印度语系）环境下的“评估意识”，揭示安全评估在多语言场景的盲区。

### 🤖 智能体与推理

**8. A team of Gemini 4 Argon agents beats Minecraft**
[2610.22319](http://arxiv.org/abs/2610.22319v1) | Faldor, Singh & Raileanu
四个 Gemini 4 智能体通过游戏内聊天与共享记忆自主协作击败末影龙，无预设角色分配——多智能体涌现协作的标志性演示。

**9. Learning Self-Orchestration in Decentralized Agent Swarms**
[2610.22322](http://arxiv.org/abs/2610.22322v1) | Xu et al.
让智能体群同时学习个体能力与协调结构，打破固定编排范式的限制。

**10. LEASH: Uncertainty-Aware Weak-to-Strong Escalation and Oversight for Computer-Use Agents**
[2610.22280](http://arxiv.org/abs/2610.22280v1) | Wang et al.
基于不确定性的弱到强升级机制：小模型默认执行、大模型按需接管，兼顾成本与可靠性的计算机操作智能体方案。

**11. Disagreement-Guided Weak-to-Strong Routing**
[2610.22245](http://arxiv.org/abs/2610.22245v1) | Noorani et al.
与 LEASH 互补：用模型间分歧信号决定何时将边缘设备上的小模型请求路由至强模型，实用性强。

**12. Language Is a Security Surface for Agent Guards**
[2610.22244](http://arxiv.org/abs/2610.22244v1) | Demirkiran & Ernstberger
揭示英文训练的 agent 安全 guard 在多语言输入下可被绕过——语言本身即是攻击面，安全评估亟需多语言化。

**13. KnowGPO: Knowledge-Grouped Policy Optimization for Search Agents**
[2610.22331](http://arxiv.org/abs/2610.22331v1) | Chen et al.
按知识类型分组分配信用，解决深度搜索智能体长程多轮交互中的 RL 信用分配难题。

### 🔧 方法与框架

**14. EliteReplay: Preserving Diverse Solutions in RL Post-Training via Quality-Diversity Search**
[2610.22290](http://arxiv.org/abs/2610.22290v1) | Moussa et al.
用质量-多样性搜索对抗 RL 后训练导致的解空间收窄，保留模型解的多样性。

**15. Baselines and Score Centering in Policy Gradient Estimation**
[2610.22263](http://arxiv.org/abs/2610.22263v1) | Han & Hu
修正异步 RLHF 中 off-policy 失配下的 baseline 与分数中心化，理论扎实、直接可落地。

**16. FDE-Gym: The Last Mile of AI Delivery**
[2610.22350](http://arxiv.org/abs/2610.22350v1) | Yang et al.
模拟真实交付场景（模糊需求、生产系统、隐含约束）的智能体基准，弥合学术 benchmark 与落地的鸿沟。

**17. MLExpert: Towards a Generalist Agentic Model for Autonomous Machine Learning Engineering**
[2610.22344](http://arxiv.org/abs/2610.22344v1) | Du et al.
面向 AI4AI / 递归自我改进（RSI）的通用 MLE 智能体，自动化开发与改进 AI 系统本身。

### 📊 应用

**18. MindEval2: Clinically Grounded Patients and Rubrics for Evaluating Language Models in Mental Health Support**
[2610.22314](http://arxiv.org/abs/2610.22314v1) | Mendonça et al.
临床接地的合成患者与评分标准，提升心理健康支持 LLM 评估的可信度。

**19. AI Consilium: LLM Clinical Multidisciplinary Second Opinions 基准**
[2610.22298](http://arxiv.org/abs/2610.22298v1) | Bokov et al.
基于 300 例 NEJM-MedQA 病例的多维临床第二意见评估，覆盖事实性、安全性、可操作性。

**20. SurvICL: a Foundation Model for in-context Survival Analysis**
[2610.22242](http://arxiv.org/abs/2610.22242v1) | Alberge et al.
发现现有表格基础模型在小样本删失生存分析上不敌经典 Cox 模型，并提出针对性基础模型，诚实且有价值的负结果 + 解决方案。

**21. Discovering state-of-the-art quantum circuits with large language models**
[2610.22367](http://arxiv.org/abs/2610.22367v1) | Gu et al.
用 LLM 发现 SOTA 量子线路，展示 LLM 在科学发现中的实际突破能力。

---

## 三、研究趋势信号

今日论文释放出三个清晰信号：**(1) Agent 安全成为独立研究方向**——三篇论文（#12、#48 Shortcut Sensitivity）系统审视 guard 的评估方法论本身，从“造 guard”转向“如何可靠地评估 guard”，预示该领域正走向成熟。**(2) 弱到强编排（escalation/routing）范式成型**：LEASH 与 Disagreement-Guided Routing 不约而同探索小模型常驻 + 大模型按需介入的成本-能力权衡，可能成为部署标配。**(3) RL 后训练进入精细化阶段**：从粗放的 outcome RL 转向信用分配（KnowGPO）、解多样性保护（EliteReplay）、估计偏差修正（Baseline Centering）等细粒度方法学改进。此外，世界模型（T2-z、GeoState、3DCodeVerse）与机器人数据闭环（CoDA、DSP）持续升温。

---

## 四、值得精读

1. **A team of Gemini 4 Argon agents beats Minecraft**（[2610.22319](http://arxiv.org/abs/2610.22319v1)）
前沿模型多智能体涌现协作的标杆实验，无预定义角色分工即完成复杂长程任务，对理解大规模多智能体系统能力边界极具参考价值。

2. **Language Is a Security Surface for Agent Guards**（[2610.22244](http://arxiv.org/abs/2610.22244v1)）
提出的问题（英文 guard 的多语言绕过）对所有部署 agent 安全系统的团队都是即时且现实的风险，方法论与结论均需尽快吸收。

3. **Knowledge That Is Linear Before Fine-Tuning Generalizes After It**（[2610.22300](http://arxiv.org/abs/2610.22300v1)）
“活跃/惰性知识”的区分触及知识表征与泛化的核心机制，可能影响知识编辑、持续学习、RAG 等多个子领域的研究框架。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*