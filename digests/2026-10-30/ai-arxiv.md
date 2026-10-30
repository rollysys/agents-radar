# ArXiv AI 研究日报 2026-10-30

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-30 04:53 UTC

---

# ArXiv AI 研究日报（2026-10-30）

## 一、今日速览

今天的 50 篇投稿呈现出几条清晰主线：**扩散语言模型（dLLM）推理优化**集中爆发，KV cache 量化、专用调度引擎等基础设施工作快速跟进，表明 dLLM 正从架构创新走向工程落地。**智能体训练基础设施**（沙箱服务、零标签搜索智能体）与**多智能体置信度校准**反映出 agentic RL 生态的成熟。安全与可靠性方面，激活探针小样本检测、持续学习中的“谎言防御”以及人格模拟中的知识泄漏测量，显示社区对模型可信性的关注正从能力评估转向深度审计。此外，不确定性量化与物理信息代理模型在科学计算领域持续活跃。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. [Attention, Dynamic Wave and Hybrid Sequence Mixers in Language Models](http://arxiv.org/abs/2610.39854v1)** — Babarytskyi et al.
形式化 Dynamic Wave 循环层，为长上下文的亚二次序列混合器提供与 MHA 系统对比的统一框架。

**2. [Turing LLM Post-Training: Calibrated Distillation and Efficient Dynamic-MoE Execution](http://arxiv.org/abs/2610.39876v1)** — He et al.
提出 C-MOPD 校准多教师蒸馏，解决动态 MoE 中独立优化专家的整合难题，兼顾整合效率与模型质量。

**3. [H²R: Hierarchical Hint-Based Reward for Mathematical Reasoning via RL](http://arxiv.org/abs/2610.39934v1)** — Tu et al.
为 RLVR 提供分层提示奖励，弥补复杂多步推理任务中缺失的中间监督信号。

**4. [The Role of Self-Concept In Language Models](http://arxiv.org/abs/2610.39795v1)** — Hao & Ho
追问 LLM 说“我”时指代什么，揭示自我概念的不同解释如何赋予同一事件截然相反的语义，对 AI 主体性与对齐研究有奠基意义。

**5. [Can LLMs Ignore What They Know? Measuring Knowledge Leakage in Persona-Based User Simulation](http://arxiv.org/abs/2610.39939v1)** — Lee et al.
实证测量人格模拟中的知识泄漏：即使人格设定“不知道”，模型知识仍持续影响输出，对用户模拟方法学是重要警示。

**6. [Activation Probes Are Reliable With a Handful of Positive Examples](http://arxiv.org/abs/2610.39766v1)** — Tyagi & Heimersheim
证明激活探针在“少量正例 vs. 大量负例”的非对称数据场景下依然可靠，为稀有失配监测提供实用方案。

**7. [Tokenizer Tokens Tell Training Tales](http://arxiv.org/abs/2610.39919v1)** — Jain et al.
巧妙发现 BPE 词表可反推候选数据集是否参与 tokenizer 训练，为训练数据审计提供低成本指纹方法。

### 🤖 智能体与推理（规划、工具使用、多智能体）

**8. [Sandman: Building and Operating Sandboxes for Agentic RL on Shared Kubernetes](http://arxiv.org/abs/2610.39711v1)** — Yan et al.（Amazon）
来自亚马逊生产环境的沙箱服务，应对 agentic RL 训练中数千环境的突发创建与集群共享问题，罕见的工业级基础设施报告。

**9. [Heterogeneous Co-Evolution Learning for Tool-Efficient Search Agents with Zero Labels](http://arxiv.org/abs/2610.39682v1)** — Luo et al.
零标签协同进化训练搜索智能体，同时优化问题生成与工具使用效率，突破固定问题集决定能力上限的瓶颈。

**10. [Learning Calibrated Confidence for Multi-Agent Collaboration](http://arxiv.org/abs/2610.39927v1)** — Fan et al.
针对多智能体多跳问答中上游答案的置信度校准，让下游智能体合理权衡中间证据。

**11. [How Much Should a VLA Trust Its Reasoning?](http://arxiv.org/abs/2610.40002v1)** — Seo & Joa
不问“推理对不对”而问“该信多少”：将步级指导建模为度量的动作价值函数，调控推理对 VLA 策略的引导强度。

**12. [Surprise Alone Learns Lies: Evidence-Gated Continual Learning for LLMs](http://arxiv.org/abs/2610.39840v1)** — Metales & Grabenheinrich
指出“惊讶驱动”持续学习在含谎流数据下不安全，提出证据门控机制，防止模型将谎言当作新知识吸收。

### 🔧 方法与框架（效率优化、理论）

**13. [KV Cache Quantization for Diffusion Language Models](http://arxiv.org/abs/2610.39853v1)** — Tai et al.
指出 dLLM 的 KV 状态复用打破因果注意力下的精确性假设，开辟针对扩散 LM 的量化新问题设定。

**14. [DWISE: Denoising Workload-Informed Scheduling Engine](http://arxiv.org/abs/2610.39852v1)** — Li et al.
专为 dLLM 并行去噪特性设计的调度引擎，突破为 AR 模型设计的 FIFO 调度局限。

**15. [When to Spend Privacy: Optimal Allocation in Private Learning](http://arxiv.org/abs/2610.39954v1)** — Biccari & Song
将 DP-SGD 的高斯噪声方差调度形式化为开环最优控制问题，回答“隐私预算如何在迭代间分配”这一被忽视的问题。

### 📊 应用（垂直领域、多模态）

**16. [GROME: GROunding Factorized MEmory into Video World Models](http://arxiv.org.39812v1 / http://arxiv.org/abs/2610.39812v1)** — Yu et al.
因子化记忆机制分离静态/动态内容并接地到视频世界模型，解决上下文窗口外的长时程一致性。

**17. [Event-SAMA: Language-Grounded Video Object Segmentation on Neuromorphic Event Streams](http://arxiv.org/abs/2610.39676v1)** — Fedorchenko et al.
发布 Event-SAMA-239K 数据集并构建事件流上的指代视频分割模型，填补神经形态视觉与语言结合的空白。

**18. [AI Cosmos: An Agentic Infra for Situated Learning](http://arxiv.org/abs/2610.40031v1)** — AI Cosmos Team
围绕情境化学习组织的智能体基础设施，直面“LLM 辅助学习增益 ≠ 学习者独立应用能力”这一教育 AI 核心矛盾。

---

## 三、研究趋势信号

今日投稿释放出三个值得追踪的信号。**其一，扩散语言模型进入工程化阶段**：KV 量化（#13）、专用调度（#14）、线性注意力状态量化（#11）等工作密集出现，表明 dLLM 的推理栈正被系统性重构，类似于 2023-24 年 AR 模型经历的优化浪潮，是 infra 研究者的窗口期。**其二，agentic RL 的瓶颈从算法转向基础设施与数据**：Sandman 的生产级沙箱、零标签搜索智能体协同进化，暗示“环境供给”与“问题生成”成为下一阶段竞争焦点。**其三，“审计与自省”类研究升温**：tokenizer 训练数据指纹、LLM 自我概念、人格模拟知识泄漏、小样本激活探针，共同指向对模型内部状态与数据来源的取证式分析，可能与即将到来的模型审计监管需求相关。

---

## 四、值得精读

**1. [KV Cache Quantization for Diffusion Language Models](http://arxiv.org/abs/2610.39853v1)** — 问题定义精准且及时：dLLM 打破了 AR 量化技术依赖的因果精确性假设，预示一整条新研究线的开端。做推理优化或 dLLM 方向的研究者必读。

**2. [The Role of Self-Concept In Language Models](http://arxiv.org/abs/2610.39795v1)** — 将“我”的指代问题引入 LLM 语义分析，触及 AI 主体性、身份连续性与对齐的哲学与技术交叉点，可能成为模型自我表征研究的引用锚点。

**3. [Activation Probes Are Reliable With a Handful of Positive Examples](http://arxiv.org/abs/2610.39766v1)** — 直接回应安全团队的现实约束（海量对齐样本、极少失配样本），结论务实且可立即落地到前沿模型的监测管线中。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*