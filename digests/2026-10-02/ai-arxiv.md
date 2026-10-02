# ArXiv AI 研究日报 2026-10-02

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-02 04:40 UTC

---

# 📰 ArXiv AI 研究日报（2026-10-02）

## 一、今日速览

今日 50 篇 AI 相关论文中，**LLM 后训练与优化理论**占据显著分量：SFT 泛化能力的理论再评估（#31）与多教师蒸馏机理分析（#20）挑战了“RL 优于 SFT”的常规认知。**具身智能与多机器人协作**方向密集产出，包括零样本协调（#23）、语义通信（#25）和人形机器人工具使用基准（#42）。**可验证 Agent 基准**持续升温，KaliBench（#2）与 Argo-Bench（#36）均采用可执行性验证来杜绝基准污染。机制可解释性方面出现了对“自我修复”现象（#22）与电路发现评估目标（#39）的批判性反思。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. Finetuning with Sampling: SFT Learns Better Than You Think**
🔗 http://arxiv.org/abs/2610.02140v1 | Karan, Chen, Du et al.
挑战“RL 才能泛化、SFT 导致遗忘”的教条，理论证明 SFT 在新能力习得上被低估，对后训练范式选择有直接指导意义。

**2. From Gradients to Capabilities: Understanding Multi-Teacher On-Policy Distillation**
🔗 http://arxiv.org/abs/2610.02179v1 | Zhu, Huang, Zhang et al.
以 Qwen3-1.7B 为对象，从梯度视角解析多教师蒸馏中教师信号如何转化为参数变化与能力组合，机制层面填补空白。

**3. Hierarchical Continuous Diffusion Language Models**
🔗 http://arxiv.org/abs/2610.02193v1 | Ren, Li, Liu et al.
针对离散扩散 LM 并行解码时 token 独立采样导致的全局一致性缺失，提出层次化连续扩散框架，是非 AR 生成路线的重要推进。

**4. Decoding Looped Transformers Better for (Almost) Free**
🔗 http://arxiv.org/abs/2610.02185v1 | Liu, Zheng, Chen et al.
利用循环 Transformer 早期环路中间表示进行免训练改进解码，以近乎零成本提升参数高效架构的推理质量。

**5. Every Ablation Is a Dose: Counterweights and the Semblance of Self-Repair**
🔗 http://arxiv.org/abs/2610.02173v1 | Ahmad, Seth, Sankarapu
指出消融实验中观察到的“自我修复”可能只是激活剂量效应的表象（反权重机制），对机制可解释性实验设计提出重要警示。

**6. Local Support Learning**
🔗 http://arxiv.org/abs/2610.02126v1 | Ben-Kish, Kumar, Glass et al.
将灾难性遗忘建模为权重矩阵输入空间的几何问题，推导出比梯度更新更优的保持目标，为持续学习提供新优化视角。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**7. VISTA: A Visual Harness for Reasoning in an Interactive World**
🔗 http://arxiv.org/abs/2610.02200v1 | Han, Hu, Qiu et al.
为通用多模态模型配备长时程视觉记忆的轻量框架，解锁其在多样交互环境中的推理能力，“harness 优于训练”思路的代表。

**8. AutoCompact: Learning When to Compact Context in Long-Horizon Coding Agents**
🔗 http://arxiv.org/abs/2610.02163v1 | Zhang, Zheng, Du et al.
学习何时压缩上下文而非仅防溢出，直击长程编码 Agent 的上下文管理痛点，实用价值高。

**9. Watch, Infer, Coordinate: Inferring Robot Partner Constraints for Zero-Shot Coordination**
🔗 http://arxiv.org/abs/2610.02170v1 | Ye, Zhang, Tadiparthi et al.
通过观察推断伙伴机器人因硬件退化产生的物理约束，实现零样本双臂协作，多智能体适应性的新范式。

**10. Causal Memory Policy: Making Memory Utility Identifiable by Intervening on Retrieval**
🔗 http://arxiv.org/abs/2610.02070v1 | Behnam, Wang
指出记忆型 LLM 的“从未被检索的记忆无法评估效用”的识别性问题，用检索层干预实现因果可识别的记忆保留策略。

**11. The Missing Primitive: Diagnosing and Repairing Mathematical Reasoning in LLMs**
🔗 http://arxiv.org/abs/2610.02191v1 | Xing, Dai, Qian et al.
系统诊断 LLM 缺失的结构性数学原语并尝试修复，为“数学能力是否真实存在”提供测量框架。

### 🔧 方法与框架（新技术、基准测试、效率优化）

**12. TACO: Ternary Absolute-max Column-wise One-sparse Optimizer for LLM Fine-Tuning**
🔗 http://arxiv.org/abs/2610.02199v1 | Jiang, McGee, Bergou et al.
三值列向一阶稀疏优化器，大幅压缩全参数微调的优化器状态显存，属于高效训练的实用突破。

**13. Trust the Direction, Search the Step: Zero-and-First-Order Methods for LLM Fine-Tuning**
🔗 http://arxiv.org/abs/2610.02190v1 | McGee, Bergou, Dutta
将步长选择与一阶方向解耦，用零阶搜索自动确定步长，缓解大模型优化中最敏感的超参问题。

**14. SoftServe: A Scalable Quasi-Newton Method for Deep Learning**
🔗 http://arxiv.org/abs/2610.02182v1 | Ko, Parshakova, Cai et al.
解决拟牛顿法的非凸与超大参数两大障碍，把经典二阶方法重新带回深度学习主战场。

**15. KaliBench: A Fine-Grained Benchmark for Cybersecurity Tool Use on Kali Linux**
🔗 http://arxiv.org/abs/2610.02206v1 | Li, Suryanto, Zhang et al.
以“可执行命令 + 免运行时验证奖励”直接度量 LLM 的安全工具调用能力，规避关键词匹配的假阳性陷阱（与 #30 呼应）。

### 📊 应用（垂直领域、多模态、代码生成）

**16. Argo-Bench: Evaluating Data Agents on Enterprise-Scale Workflows**
🔗 http://arxiv.org/abs/2610.02122v1 | Tomitsuka, Raayatsanati, Xing et al.
面向企业级多表分析工作流的数据 Agent 基准，超越 text-to-SQL 单查询评测，可执行验证设计严谨。

**17. Reconstruct, Practice, Go Real: Guided Self-Improvement for Embodied Agents**
🔗 http://arxiv.org/abs/2610.02204v1 | Wang, Jiang, Deng et al.
RPG 框架：从少量演示重建环境，在仿真中自主练习技能后迁移真机，减少真机数据与人工奖励设计依赖。

**18. GeoLatent: Geometry-Guided Latent Structuring with Routed Optimization for 3D Reasoning**
🔗 http://arxiv.org/abs/2610.02091v1 | Zhu, Bin, Ding et al.
用几何引导的路由化连续潜变量替代离散 token 表示 3D 空间关系，提升 VLM 的空间推理保真度。

**19. HumanoidToolBench: Benchmarking Humanoid Tool Use from Selection to Mobile Execution**
🔗 http://arxiv.org/abs/2610.02089v1 | Jang, Park, Kwon et al.
首个联合评测人形机器人“工具选择—操作—移动执行”全链条的基准，填补具身工具使用评测空白。

---

## 三、研究趋势信号

从今日投稿可观察到三个明显趋势：**（1）对基准可信度的集体反思**——KaliBench、Argo-Bench、MIRTO（#32）以及 #30 对关键词匹配假阳性的揭露，均转向“可执行、可验证”的评测设计，社区对 benchmark 污染的免疫意识在增强。**（2）后训练理论化**——SFT 泛化理论（#31）、多教师蒸馏梯度分析（#20）、数据选择元网络损失设计（#40）表明后训练正从工程试错转向机理研究。**（3）优化器创新回潮**——TACO、SoftServe、ZFO 步长搜索、Local Support Learning 同日涌现，显存与步长两大痛点成为 LLM 时代优化研究的核心抓手。此外，多机器人语义通信（#25）与因果化 Agent 记忆（#48）显示“Agent 基础设施因果化”正在萌芽。

---

## 四、值得精读

**1. Finetuning with Sampling: SFT Learns Better Than You Think（#31）**
🔗 http://arxiv.org/abs/2610.02140v1
直接动摇当前“RL 后训练至上”的行业默认假设。若其理论成立，将显著影响预训练→后训练的算力分配策略与开源模型的训练配方，是今天最具范式冲击力的论文。

**2. Every Ablation Is a Dose（#22）**
🔗 http://arxiv.org/abs/2610.02173v1
对机制可解释性领域广泛使用的消融方法论提出根本性质疑：所谓“自我修复”可能只是残差流中反权重补偿的剂量效应。所有从事 circuit analysis 的研究者都应读。

**3. KaliBench（#2）+ Keyword Harnesses Fail Open（#30）对照阅读**
🔗 http://arxiv.org/abs/2610.02206v1 | http://arxiv.org/abs/2610.02142v1
两篇论文一正一反构成完整证据链：小模型如何在工具使用基准上通过关键词匹配“骗分”，以及如何用廉价严格的诊断阶梯修复。对任何构建 Agent 评测的人都是必读的方法论教材。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*