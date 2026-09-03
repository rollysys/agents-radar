# ArXiv AI 研究日报 2026-09-03

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-03 06:43 UTC

---

# 📰 ArXiv AI 研究日报 — 2026-09-03

## 一、今日速览

今日 50 篇 AI 论文中，**LLM 后训练与推理能力**仍是主线：从竞赛编程金牌级模型（#8）、过程奖励学习 Cliff（#12）到 LoRA 优化器几何化改进（#29、#45），显示后训练精细化竞争白热化。**效率与低成本**方向密集涌现：FP4 预训练稳定性（#9）、Leech 格 2-bit 量化解码（#41）、廉价智能体评估 EarlyEval（#16）共同指向“推理成本下降”这一产业核心诉求。**智能体落地**加速：Web Agent 判别式世界模型（#2）与 GitHub 仓库技能蒸馏 Repo-To-Skill（#23）代表 Agent 基础设施的双向深化。此外，**长上下文注意力自主控制**（#27）与**梯度下降下界理论突破 Nesterov**（#6）是今日最具思想冲击力的两篇。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1. **Post-Training Language Models for Gold-Medal Performance in Coding Competitions**（#8）
   http://arxiv.org/abs/2609.02849v1 — A. Ficek, S. Narenthiran, M. Samadi et al.
   端到端竞赛编程特化流水线（问题策展+合成推理轨迹），冲击 IOI/ICPC 金牌水平，是推理后训练的代表性工程成果。

2. **Cliff: Learning Process Rewards from the First Mistake**（#12）
   http://arxiv.org/abs/2609.02817v1 — P. Han, R. Wang, K. Ramaneti et al.
   从“第一个错误”处构建过程奖励，弥补 RLVR 结果奖励对中间推理的粗粒度缺陷。

3. **Language Models Can Control Their Own Attention**（#27）
   http://arxiv.org/abs/2609.02737v1 — N. Ho, H. Ahmad, W. Koh et al.
   让模型自主管理 KV 缓存检索、避免全局注意力扫描百万级上下文，长上下文效率的关键新范式。

4. **oHC: Orthogonal Hyper-Connections on SO(4) via Quaternions**（#39）
   http://arxiv.org/abs/2609.02672v1 — H. Guo, X. Chen, B. Ke et al.
   用四元数约束超连接残差混合矩阵于 SO(4)，解决残差流重缩放无界问题，架构级创新。

5. **DKL: Decoupled Knowledge Learning for Instruction-Tuned Language Models**（#39 相关，#35）
   http://arxiv.org/abs/2609.02685v1 — K. Bhushan, M. Pulivarthi et al.
   解耦知识学习，解决 RAG 检索错误/不完整时的幻觉问题。

6. **Door-in-the-Face Requests and Refusal Behaviour in Large Language Models**（#33）
   http://arxiv.org/abs/2609.02707v1 — T. Jordan
   经典社会心理学说服技术在 9 个生产级 LLM 上系统测试，揭示模型对操纵性请求的脆弱性。

7. **Dutch Books for Language Models**（#13）
   http://arxiv.org/abs/2609.02797v1 — I. Andrews, S. Sarkar
   用“荷兰赌”框架检验 LLM 概率预测的一致性，对高风险决策场景意义重大。

8. **LoRA-TSD: Tangent-Space Spectral Descent for LoRA via Muon-Style Updates**（#29）
   http://arxiv.org/abs/2609.02734v1 — D. Andriianov, A. Veprikov, A. Beznosikov
   将 LoRA 更新视为固定秩流形的切向量，Muon 式优化引入几何结构。

### 🤖 智能体与推理

9. **Discriminative World Models for Web Agents**（#2）
   http://arxiv.org/abs/2609.02885v1 — K. Li, D. Pendharkar, A. Pahilajani et al.
   将 Web Agent 世界模型从监督式下一状态预测改为判别式训练，提升测试时动作排序质量。

10. **Repo-To-Skill: Distilling GitHub Repositories Into AI4AI Skills**（#23）
    http://arxiv.org/abs/2609.02749v1 — J. Chen, Y. Hu, H. Qian et al.
    将 GitHub 仓库蒸馏为可复用“操作技能”，填补自主 ML 研究 Agent 的领域知识层。

11. **Trace as State: Reasoning Traces as Conditional States for Long-Context Transformers**（#34）
    http://arxiv.org/abs/2609.02702v1 — X. Zou, J. Tang
    形式化“条件状态更新”任务：先给条件可使因果 Transformer 的最坏内存需求从指数降为多项式。

### 🔧 方法与框架（效率、基准、优化）

12. **UE5M3 FP4 Block Scaling for Stable Language Model Pretraining**（#9）
    http://arxiv.org/abs/2609.02846v1 — R. Hu, C. Luschi, P. Balanca
    超越 NVIDIA TE 的 FP4 预训练配方，降低随机 Hadamard 变换开销，4-bit 训练稳定性新方案。

13. **Unfolding the Leech Lattice: Fused Multi-Shell Decoding for 2-Bit LLM Weights**（#41）
    http://arxiv.org/abs/2609.02652v1 — P.-J. Malandrino
    补全 Leech 格量化的多壳解码器并实测服务成本，2-bit 推理的重要工程落地。

14. **EarlyEval: Cheaper Agent Evaluation via Early Outcome Prediction**（#16）
    http://arxiv.org/abs/2609.02783v1 — Y. Shi, Z. Sun, J. Dong et al.
    通过早期结果预测将智能体基准评估成本降低数量级，直击迭代开发痛点。

15. **Improved Gradient Descent Lower Bounds Beyond Nesterov**（#6）
    http://arxiv.org/abs/2609.02855v1 — Y. Ye, K. Liu
    突破经典 Ω(n⁻²) 一阶下界，证明预定步长的加速极限，优化理论的里程碑式进展。

### 📊 应用（垂直领域、多模态、安全）

16. **CodePoisonRAG: Knowledge Poisoning Attacks on Retrieval-Augmented Code Generation**（#18）
    http://arxiv.org/abs/2609.02774v1 — V. Gadey, Z. Marey, A. Dmitrienko
    首次系统研究 RACG 的知识投毒攻击面，代码生成供应链安全的新威胁模型。

---

## 三、研究趋势信号

今日投稿呈现三条清晰脉络：**(1) 推理成本的全面压缩**——FP4 训练、2-bit Leech 格量化、EarlyEval 廉价评估、注意力自主控制，从训练到推理到评估全链路降本，反映产业界对规模化部署的迫切需求；**(2) 后训练的精细化分工**——过程奖励（Cliff）、竞赛特化、LoRA 初始化/优化器几何（TaRA、LoRA-TSD）表明“预训练之后”的每个环节都在被独立优化；**(3) LLM 社会行为与安全审计兴起**——荷兰赌一致性、door-in-the-face 说服敏感性、知识投毒、语言不可读性安全风险，暗示社区正从能力评测转向对模型作为“社会行为体”的批判性检验。此外，Agent 世界模型与技能蒸馏的并行发展，预示 Agent 基础设施正在分层成熟。

---

## 四、值得精读

1. **Language Models Can Control Their Own Attention**（#27）
   http://arxiv.org/abs/2609.02737v1
   长上下文的根本瓶颈在全局注意力开销。让模型自己决定读哪些 KV 是范式级提案，可能直接影响未来长上下文架构设计。

2. **Improved Gradient Descent Lower Bounds Beyond Nesterov**（#6）
   http://arxiv.org/abs/2609.02855v1
   时隔数十年改写一阶优化下界，对理解“预定义步长加速的极限”具有基础理论价值，适合优化与理论方向研究者细读。

3. **Discriminative World Models for Web Agents**（#2）
   http://arxiv.org/abs/2609.02885v1
   将世界模型从“预测状态”转向“判别好坏”，呼应测试时扩展的大趋势，是 Agent 与判别式建模交叉的前沿工作。

---

*本报告基于 2026-09-02 发布于 ArXiv 的 50 篇 cs.AI / cs.CL / cs.LG 论文自动整理。*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*