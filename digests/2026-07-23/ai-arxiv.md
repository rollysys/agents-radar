# ArXiv AI 研究日报 2026-07-23

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-23 02:55 UTC

---

## ArXiv AI 研究日报 (2026-07-23)

### 1. 今日速览
今日 ArXiv 研究呈现出**“大小模型协同”与“理论安全落地”**两大核心趋势。在推理成本与效率方面，多篇论文探索了小模型（SLM）与大模型（LLM）的混合编排与测试时计算策略，试图打破单纯依赖大模型的算力瓶颈。在安全与可信度方面，研究重点从单纯的红队测试转向了更具数学严谨性的概率安全界限与遗忘算法。此外，具身智能正从实验室走向零售等真实场景，物理信息神经网络在科学计算中的应用也愈发成熟。

### 2. 重点论文

#### 🧠 大语言模型（架构、训练、对齐、评估）

*   **[Notes to Self: Can LLMs Benefit from Experiential Abstractions?](http://arxiv.org/abs/2607.20372v1)**
    *   **作者**: Chang Liu et al.
    *   **一句话说明**: 探索 LLM 是否能像人类一样从轨迹中提炼抽象经验（策略或警告）并复用，显著提升了复杂规划任务的表现。
*   **[Sound Probabilistic Safety Bounds for Large Language Models](http://arxiv.org/abs/2607.20286v1)**
    *   **作者**: Mahdi Nazeri et al.
    *   **一句话说明**: 提出基于 Clopper-Pearson 置信区间的框架，为 LLM 生成有害内容的概率提供了理论上可靠的 PAC 界限，填补了安全评估的理论空白。
*   **[PyroDash: Cost-Efficient Token-Level Small-Large Language Model Collaborative Inference](http://arxiv.org/abs/2607.20327v1)**
    *   **作者**: Niqi Lyu et al.
    *   **一句话说明**: 提出 token 级别的 SLM-LLM 协同推理框架，动态路由以大幅降低服务成本，解决了单一模型在成本与能力间的两难权衡。
*   **[Statistical Inference for Rank Allocation in Low-Rank Adaptation](http://arxiv.org/abs/2607.20205v1)**
    *   **作者**: Yihang Gao, Vincent Y. F. Tan
    *   **一句话说明**: 首次从统计推断角度为 LoRA 的秩分配提供理论依据，解决了在有限参数预算下如何最优分配秩的难题。
*   **[On Optimization Complexity of Second-Order Certified Unlearning](http://arxiv.org/abs/2607.20192v1)**
    *   **作者**: Nikita Doikov, Anastasia Koloskova
    *   **一句话说明**: 深入分析了二阶认证遗忘算法的优化复杂度，证明了同时实现认证遗忘与模型精度的理论下界，为隐私保护机器学习提供了坚实理论基础。

#### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

*   **[PoTRE: Test-Time Reasoning inspired by Cognitive Heterogeneity](http://arxiv.org/abs/2607.20268v1)**
    *   **作者**: Anmol Kankariya, Sercan Ö. Arık
    *   **一句话说明**: 受人类认知异质性启发，提出测试时推理框架，通过多样化的推理路径修正错误，突破了单一思维链的局限性。
*   **[Courteous Anticipation: Improving Long-Lived Task Planning in Persistent Shared Environments](http://arxiv.org/abs/2607.20289v1)**
    *   **作者**: Md Ridwan Hossain Talukder et al.
    *   **一句话说明**: 提出了考虑未来任务和他人约束的“礼貌”规划算法，解决了多智能体在共享环境中长期存在的状态冲突问题。

#### 🔧 方法与框架（新技术、基准测试、效率优化）

*   **[PG-KINN: A Physics-Informed Petrov-Galerkin Kolmogorov-Arnold Network](http://arxiv.org/abs/2607.20378v1)**
    *   **作者**: Amirhossein Sadr et al.
    *   **一句话说明**: 结合 Kolmogorov-Arnold Networks (KAN) 与 Petrov-Galerkin 方法求解偏微分方程，在精度和可解释性上显著优于传统 MLP。
*   **[ELSAA: Efficient Low-Rank and Sparse Attention Approximation](http://arxiv.org/abs/2607.20214v1)**
    *   **作者**: Mahdi Heidari et al.
    *   **一句话说明**: 针对长序列 Transformer，提出结合低秩近似与稀疏化的混合注意力机制，有效突破了 $O(N^2)$ 的计算瓶颈。
*   **[Test-Time Training for Modality Order Consistency in Vision-Language Models](http://arxiv.org/abs/2607.20351v1)**
    *   **作者**: Aditi Gupta, Yossi Gandelsman
    *   **一句话说明**: 揭示了 VLM 对“图文顺序”的敏感性偏见，并提出测试时训练策略来消除这种非语义偏差，提升模型鲁棒性。

#### 📊 应用（垂直领域、多模态、代码生成）

*   **[Closing the Lab-to-Store Gap: ... VLA Framework for Retail Humanoids](http://arxiv.org/abs/2607.20345v1)**
    *   **作者**: Roger Sala Sisó et al.
    *   **一句话说明**: 提出 DEED 框架，通过数据高效的后训练解决视觉-语言-动作（VLA）机器人在零售真实环境中的执行错误与分布偏移问题。
*   **[Small, Free, and Effective: Orchestrating Open-Weight Small Language Models ... for Malware Analysis](http://arxiv.org/abs/2607.20216v1)**
    *   **作者**: Adel ElZemity et al.
    *   **一句话说明**: 证明了通过编排开源小模型（无需调用昂贵的大模型 API）即可在恶意软件分析任务上超越单一 LLM，兼具成本效益与隐私保护。
*   **[OLEDLM: A Unified Language Model for OLED Molecular Design](http://arxiv.org/abs/2607.20194v1)**
    *   **作者**: Fukang Wen et al.
    *   **一句话说明**: 首次提出针对 OLED 分子设计的统一语言模型，有效应对了化学空间巨大且标注数据稀缺的挑战，加速新材料发现。

### 3. 研究趋势信号
从今日的投稿来看，**“混合智能”成为明显趋势**。研究者不再单纯追求参数规模的扩张，而是转向模型协同（如 PyroDash）、大小模型编排（如 Malware Analysis）以及人与智能体的协作规划。**AI 安全的研究深度也在增加**，从经验性的对抗攻击转向了概率性的安全界限和认证遗忘，意味着行业正从“能做”转向“敢用”。同时，**物理信息与 AI 的结合**正在从简单的 PINN 进化到更复杂的架构（如 KAN），显示出科学计算 AI 化的强劲势头。

### 4. 值得精读
推荐阅读以下两篇论文，分别代表了理论深度的突破与应用落地的关键探索：

1.  **[Sound Probabilistic Safety Bounds for Large Language Models](http://arxiv.org/abs/2607.20286v1)**
    *   **理由**: 随着大模型进入高安全需求领域（如医疗、自动驾驶），仅靠采样测试已无法满足合规要求。该文提出的 PAC 安全界限为模型安全认证提供了急需的统计学工具，具有重要的现实意义和理论价值。
2.  **[PG-KINN: A Physics-Informed Petrov-Galerkin Kolmogorov-Arnold Network](http://arxiv.org/abs/2607.20378v1)**
    *   **理由**: Kolmogorov-Arnold Networks (KAN) 是近期 AI 基础架构的重要创新。该文将 KAN 与经典的有限元方法结合，不仅解决了传统 MLP 在求解 PDE 时的频谱偏差问题，还提升了模型的可解释性，是“AI for Science”领域的代表性工作。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*