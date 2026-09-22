# ArXiv AI 研究日报 2026-09-22

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-22 03:54 UTC

---

# ArXiv AI 研究日报（2026-09-22）

## 📰 今日速览

今日 50 篇 AI 相关论文中，**智能体（Agent）研究占据绝对主导**：从训练方法（Critical-State RL）、自我改进（RRSI）到安全评估（罕见事件估计、事件报告框架）形成完整研究链条。**模型合并（Model Merging）** 成为小热点，三篇论文从秩分配、涌现能力等角度深入分析。此外，**时序预测基础模型**（t₀、自进化预测策略）和**持续学习**（Muon 优化器、信息邻近自蒸馏）表现活跃。评测方法论也有亮点：OSWorld-Pro 提出过程级 CUA 评估，Endless Exam 则瞄准超智能数学能力测量。

---

## 🔍 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

- **Complex KDA: Understanding and Enhancing the Expressivity of Kimi Delta Attention**（[arxiv.org/abs/2609.24797](http://arxiv.org/abs/2609.24797v1)）— Siems et al.
  通过复数扩展 delta-rule 线性 RNN 的表达力，突破低秩更新的表达瓶颈，是线性注意力架构演进的重要一步。

- **onPanda: Efficient Annotation of On-Policy Alignment Data for LLMs and Agents via Token-Level Correction**（[arxiv.org/abs/2609.24983](http://arxiv.org/abs/2609.24983v1)）— Yang et al.
  以 token 级修正为核心的交互式标注工具，大幅提升对齐数据和智能体轨迹的标注效率。

- **iSDFT: Information-Proximal Self-Distillation for Continual Learning in LLMs**（[arxiv.org/abs/2609.24646](http://arxiv.org/abs/2609.24646v1)）— Khamis et al.
  可控教师影响强度的自蒸馏微调，在学新技能与抗遗忘之间提供连续调节旋钮。

- **LoRA-generating hypernetworks for efficient on-device LLM generative personalization**（[arxiv.org/abs/2609.24979](http://arxiv.org/abs/2609.24979v1)）— Augenstein et al.
  用超网络动态生成 LoRA 实现端侧 LLM 个性化，绕开设备算力瓶颈，实用价值高。

- **Fathom-Vaidya: Advancing Medical Reasoning with Rubric-Based Rewards**（[arxiv.org/abs/2609.24480](http://arxiv.org/abs/2609.24480v1)）— Shah et al.
  用评分细则奖励同时优化诊断推理与临床推理两个维度，医疗 LLM 后训练的新范式。

- **VPRune: Efficient Training-free Pre-LLM Visual Token Pruning**（[arxiv.org/abs/2609.24485](http://arxiv.org/abs/2609.24485v1)）— Lv et al.
  系统诊断视觉 token 剪枝性能退化的三大因素，实现免训练的 LVLM 推理加速。

### 🤖 智能体与推理

- **Critical-State RL: Diagnosing Trainable States for Multi-Turn Tool Use**（[arxiv.org/abs/2609.24985](http://arxiv.org/abs/2609.24985v1)）— Chen et al.
  识别多轮工具使用中真正值得训练的“关键状态”，解决奖励方差无法归因到具体动作的难题。

- **RRSI: Regularized Recursive Self-Improvement of Agent Harnesses**（[arxiv.org/abs/2609.24972](http://arxiv.org/abs/2609.24972v1)）— Xia et al.
  带正则化的递归自我改进智能体外围（提示/工具/记忆），在自动 harness 优化中防退化。

- **OSWorld-Pro: Process-based Evaluation for Computer Use Agents**（[arxiv.org/abs/2609.24890](http://arxiv.org/abs/2609.24890v1)）— Wang et al.
  从最终产物评估转向过程级评估，透明揭示 CUA 在数百步任务中的失败模式。

- **Rare Event Estimation via Iterative Unalignment**（[arxiv.org/abs/2609.24969](http://arxiv.org/abs/2609.24969v1)）— Yang et al.
  通过“反去对齐”估计智能体输出轨迹上灾难性罕见事件的概率，直击安全部署核心问题。

- **Beyond Predictable Paths: Redefining AI Security Incident Reporting for Agents**（[arxiv.org/abs/2609.24515](http://arxiv.org/abs/2609.24515v1)）— Pustozerova et al.
  提出适配智能体攻击特征的 AI 安全事件报告新框架，治理与合规视角稀缺且及时。

### 🔧 方法与框架（效率、优化、合并、评测）

- **Not All Task Vectors Need Equal Rank: Energy-Proportional Allocation for Model Merging**（[arxiv.org/abs/2609.24517](http://arxiv.org/abs/2609.24517v1)）— Cho & Jang
  按任务更新能量按比例分配秩，改进谱合并方法，简单而有效。

- **On Emergent Capabilities and Model Merging**（[arxiv.org/abs/2609.24504](http://arxiv.org/abs/2609.24504v1)）— Zhou & Rodolà
  追问模型合并对涌现能力的影响——合并是“组装”能力还是破坏能力？理论视角新颖。

- **Muon Can Outperform Dedicated Continual Learning Methods**（[arxiv.org/abs/2609.24678](http://arxiv.org/abs/2609.24678v1)）— Sincari et al.
  惊人发现：Muon 优化器本身即可超越专门设计的持续学习方法，LoRA 场景下尤甚。

- **The Endless Exam: Mathematical Constructions from Today's Models toward Superintelligence**（[arxiv.org/abs/2609.24555](http://arxiv.org/abs/2609.24555v1)）— Zhang
  14 个参数化构造族的无尽数学基准，为通往超智能的能力测量提供相对评分框架。

### 📊 应用（时序、科学、医疗、多模态）

- **t₀: A Time-Series Foundation Model for Forecasting with Context**（[arxiv.org/abs/2609.24559](http://arxiv.org/abs/2609.24559v1)）— Meyer et al.
  开放权重时序基础模型家族（102M/256M），支持多变量上下文与协变量，时序版"Llama 时刻"。

- **When Tomorrow Becomes Today: Self-Evolving Policies for Agentic Time-Series Forecasting**（[arxiv.org/abs/2609.24862](http://arxiv.org/abs/2609.24862v1)）— Hu et al.
  时序智能体自进化策略，让预测系统适应底层机制漂移，与时序基础模型形成互补。

- **D-JEPA: A Decision-Aligned Latent World Model**（[arxiv.org/abs/2609.24749](http://arxiv.org/abs/2609.24749v1)）— Liu et al.
  发现“决策局部预测鸿沟”：预测准确不等于潜距离能反映可执行性，对世界模型落地很关键。

- **Augmented Hypothesis Testing with Persona-Based LLM Simulations**（[arxiv.org/abs/2609.24629](http://arxiv.org/abs/2609.24629v1)）— Benomar et al.
  用人格化 LLM 模拟作为先验增强 A/B 检验，统计推断与 LLM 的严谨结合。

---

## 📈 研究趋势信号

今日呈现三大趋势：**（1）智能体研究的“精耕化”**——从堆能力转向诊断性训练（Critical-State RL 的状态归因）、过程级评估（OSWorld-Pro）与安全量化（罕见事件估计、事件报告），研究重心从“能做”转向“做得可控、可解释、可审计”。**（2）模型合并从工程技巧走向科学问题**，秩分配、涌现能力保持等分析性工作涌现，预示合并正成为主流能力组装范式。**（3）时序预测进入“基础模型+智能体化”双轨演进**，t₀ 开源权重与自进化预测策略同日发布值得注意。此外，优化器（Muon）在持续学习中的意外优势提示：一些“专门方法”可能被更好的通用优化器悄然超越。

---

## ⭐ 值得精读

1. **Critical-State RL**（[2609.24985](http://arxiv.org/abs/2609.24985v1)）：多轮 RL 训练中最根本的信用分配问题之一——当奖励取决于后续交互时，如何判断哪次调用值得训练。方法论对整个 agentic RL 领域有直接参考价值。

2. **On Emergent Capabilities and Model Merging**（[2609.24504](http://arxiv.org/abs/2609.24504v1)）：随着 checkpoint/adapter 仓库爆炸，合并已成为最常见操作，但其对涌现能力的影响缺乏系统理解，该工作填补这一空白，具有前瞻性。

3. **OSWorld-Pro**（[2609.24890](http://arxiv.org/abs/2609.24890v1)）：CUA 评估从端态到过程的转变可能成为领域标准，且其失败模式分析对构建更可靠智能体极具工程参考价值。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*