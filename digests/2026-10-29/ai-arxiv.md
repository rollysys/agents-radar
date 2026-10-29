# ArXiv AI 研究日报 2026-10-29

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-29 04:53 UTC

---

# ArXiv AI 研究日报 — 2026-10-29

## 📰 今日速览

今日 50 篇 AI 论文呈现出几条清晰主线：**智能体训练与评测基础设施**成为最热方向（TeamGym、Gym-Anything-RT、EnvSched、SynthAPI 等），从环境调度、rollout 效率到合成环境规模化全面展开。**LLM/智能体安全性**研究持续深化，涵盖提示注入防御（HoS）、微调数据导致的安全退化溯源（SimpleLoRIF）等。**长序列高效架构**方面出现 MSLA 二阶路由、GTFormer 线性外推等多个替代 Transformer 的方案。此外，**无监督 RLVR 的策略崩塌**与**点对点预训练知识追踪**为理解模型行为提供了重要理论视角。

---

## 🔍 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

- **[Multi-State Linear Attention with Generalized Second-Order Routing](http://arxiv.org/abs/2610.37645v1)** — Hwang et al.
  在 MSLA 基础上引入广义二阶路由机制，突破线性注意力的二次复杂度瓶颈，是长上下文扩展的关键架构创新。

- **[GTFormer: A Syntax-Free Graph Network Alternative to Transformers for 8192× Length Extrapolation](http://arxiv.org/abs/2610.37524v1)** — Fink
  以图网络替代自注意力实现线性时间的长度外推（8192 倍），挑战 Transformer 主导地位。

- **[MuonGS: Pretraining LLMs with Relaxed Weight-Norm Control](http://arxiv.org/abs/2610.37647v1)** — Glentis et al.
  基于 Muon 优化器全轨迹分析权重范数控制，为预训练中的 norm 约束提供统一理论理解。

- **[What Improves During Pretraining? Tracking Knowledge Acquisition with Point-in-Time Models](http://arxiv.org/abs/2610.37631v1)** — Su et al.
  利用不同年份网络快照训练的 point-in-time 模型，追踪通用与领域知识在预训练过程中的习得时序。

- **[Collective Dynamics of Self-Reinforcement: Policy Collapse in Unsupervised RLVR](http://arxiv.org/abs/2610.37553v1)** — Ding
  揭示无监督 RLVR 中跨任务耦合如何驱动策略崩塌——自评奖励趋于 1 而准确率下降，对 label-free 训练范式是重要警示。

- **[Follow the Gradient: Tracing Safety Degradation Back to Training Data](http://arxiv.org/abs/2610.37481v1)** — Reddy et al.
  提出 SimpleLoRIF，用梯度影响函数从看似无害的微调数据中溯源安全退化，填补内容过滤器的盲区。

- **[Heads of Security: Learned Attention Gates Improve Prompt Injection Robustness](http://arxiv.org/abs/2610.37657v1)** — Shilov et al.
  通过逐头学习的注意力门控实现指令-数据分离，为提示注入防御提供轻量方案。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

- **[Scaling Laws for Tool-Use Agents via Controllable Environment Synthesis](http://arxiv.org/abs/2610.37648v1)** — Szot et al.
  提出 SynthAPI 管线研究合成工具使用环境的数据配比对智能体训练的影响，是智能体版“缩放定律”研究。

- **[TeamGym: A Gym for Team Decision-Making by AI Agents with Distributed Information](http://arxiv.org/abs/2610.37571v1)** — Park et al.
  首个面向分布式信息团队决策的语言智能体训练与评测环境，将多智能体研究推向真实协作场景。

- **[Gym-Anything-RT: Scaling Real-Time Environments for Vision-Language Agents](http://arxiv.org/abs/2610.37567v1)** — Aggarwal & Welleck
  聚焦实时交互约束下的智能体能力，补齐了多数 benchmark 只测“慢思考”智能体的空白。

- **[EnvSched: Environment-Aware Scheduling for Rollout-Efficient Agent RL](http://arxiv.org/abs/2610.37609v1)** — Yang et al.
  在有限 rollout 预算下通过环境级数据管理提升智能体 RL 效率，直击 agentic RL 的成本痛点。

- **[GEPA-Curator: Curated Learning for Self Improving Agents](http://arxiv.org/abs/2610.37651v1)** — Yu et al.
  超越单纯反思式提示优化，区分提示缺陷与框架限制等多源失败原因进行策展式自我改进。

- **[Metacognitive Decoding: Efficient Inference for Diffusion Language Agents](http://arxiv.org/abs/2610.37642v1)** — Zhao et al.
  元认知控制器自适应调节扩散语言模型的算力分配与生成长度，是扩散式智能体推理的早期探索。

### 🔧 方法与框架（新技术、基准测试、效率优化）

- **[The Structure Gap: When More Data Cannot Replace Structured Reasoning](http://arxiv.org/abs/2610.37523v1)** — Patel & Soltanalian
  形式化定义 structure-encoded 问题类，论证数据规模无法替代结构化推理——“更大 ≠ 更通用”的理论注脚。

- **[When Should We Intervene at Test Time?](http://arxiv.org/abs/2610.37658v1)** — Zhang et al.
  指出平均精度掩盖测试时适应的批次级失败，为 TTA 干预时机提供细粒度分析框架。

- **[Timestral](http://arxiv.org/abs/2610.37585v1)** — Petralia et al.
  四参数量级（5M–209M）时间序列基础模型家族，在 GIFT-Eval、TIME、fev-bench 全面刷新 SOTA。

### 📊 应用（垂直领域、多模态、代码生成）

- **[VideoLVR: Latent Visual Reasoning over Grounded Video Evidence](http://arxiv.org/abs/2610.37613v1)** — Li et al.
  将推理链锚定在视觉证据上解决 MLLM 视频理解中的“视觉遗忘”问题。

- **[PerceptRL: Making Visual Perception Rewardable in MLLMs](http://arxiv.org/abs/2610.37471v1)** — Guan et al.
  让细粒度视觉感知在 MLLM 后训练中获得可验证奖励，突破感知错误对推理优化的制约。

- **[Pneuma: Large-Scale Real-World Benchmark for Aircraft Predictive Maintenance](http://arxiv.org/abs/2610.37563v1)** — Lin et al.
  首个公开的大规模商用飞机预测性维护数据集，补齐工业 AI 可复现性短板。

- **[Can LLMs Uncover Hidden Physical Laws through Free Exploration?](http://arxiv.org/abs/2610.37649v1)** — Yang et al.
  在物理定律被篡改的世界中测试 LLM 能否从异常观察出发自主发现规律，为 AI 科学发现提供新颖评测范式。

---

## 📈 研究趋势信号

今日投稿中，“**智能体基础设施工程化**”信号尤为强烈：环境调度（EnvSched）、实时 gym（Gym-Anything-RT）、团队协作环境（TeamGym）、合成环境缩放定律（SynthAPI）密集出现，表明 agentic RL 的瓶颈已从算法转向数据与环境经济学。第二条主线是**自我训练的稳定性危机**：无监督 RLVR 崩塌、安全退化溯源、测试时干预失败等论文共同指向“自我改进的边界”这一核心问题。第三，**挑战 Transformer 的线性架构**（GTFormer、MSLA）与**扩散语言模型推理效率**均在快速迭代，暗示 2027 年前后架构层面可能出现实质性分化。

---

## ⭐ 值得精读

1. **[Scaling Laws for Tool-Use Agents via Controllable Environment Synthesis](http://arxiv.org/abs/2610.37648v1)**（Szot et al.）
   首个系统研究工具使用智能体数据组成缩放规律的工作，SynthAPI 管线可复用于自家智能体训练，实用与理论价值兼备。

2. **[Collective Dynamics of Self-Reinforcement](http://arxiv.org/abs/2610.37553v1)**（Ding）
   无监督 RLVR 崩塌的动力学分析对所有 label-free 训练流水线都是必读的“避坑指南”，跨任务耦合视角具有普适解释力。

3. **[The Structure Gap](http://arxiv.org/abs/2610.37523v1)**（Patel & Soltanalian）
   用形式化方式回答“数据能否替代先验结构”这一根本性问题，对缩放定律乐观主义提供可检验的反例框架，影响超越单篇论文。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*