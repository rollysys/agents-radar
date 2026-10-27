# ArXiv AI 研究日报 2026-10-27

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-27 04:11 UTC

---

# ArXiv AI 研究日报 — 2026-10-27

## 📰 今日速览

今日 50 篇投稿呈现三大热点：**扩散语言模型（dLLM）训练与加速**集中爆发，包括调度蒸馏、去噪 token 信用分配和并行化循环深度；**循环 Transformer 架构创新**（LoopFold、StateLoop）探索参数高效的计算复用；**智能体递归自我改进**（Skill∞、MiRL）成为通往 AGI 路径的新焦点。此外，LLM 评估方法学反思（同行评审偏见、内容分析可靠性、置信度校准）和多语言/文化资源建设（MATCHA、CAB-Igbo）也值得留意。

---

## 🔥 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. Learning When to Commit: Schedule Distillation for Fast Diffusion Language Models**
[2610.35804](http://arxiv.org/abs/2610.35804v1) | Aidar Myrzakhan, Zhiqiang Shen
提出调度蒸馏方法，学习 dLLM 解码时“何时提交 token”，实现自适应快速生成——扩散 LLM 效率优化的前沿工作。

**2. DTCA: Denoising Token Credit Assignment for RL in Diffusion Language Models**
[2610.35201](http://arxiv.org/abs/2610.35201v1) | Hongze Chen, Miao Pan et al.
针对 DLM 迭代去噪过程提出 token 级信用分配，解决 RL 应用于扩散语言模型时奖励归属模糊的核心难题。

**3. LoopFold: Parallelizing Recurrent Depth in Looped Transformers**
[2610.35556](http://arxiv.org/abs/2610.35556v1) | Feichen Song, Boyi Zeng et al.
将循环 Transformer 的串行循环折叠并行化，突破“加深循环必增延迟”的瓶颈。

**4. StateLoop: Persistent State for Looped Transformers**
[2610.35544](http://arxiv.org/abs/2610.35544v1) | Feichen Song, He Li et al.
（同团队姊妹篇）为循环 Transformer 引入跨迭代持久状态，让早期迭代信息可被后续复用。

**5. GPDPO: Learning from Reward Conflicts via Group Pareto-Dominance Policy Optimization**
[2610.35480](http://arxiv.org/abs/2610.35480v1) | Zixuan Xu, Haoxuan Chen et al.
用 Pareto 支配关系处理多奖励 RL 对齐中的信号冲突，避免奖励加权带来的模糊更新方向。

**6. S3AC: Stabilized, Selective, and Scalable Actor-Critic for LLM Reasoning**
[2610.35518](http://arxiv.org/abs/2610.35518v1) | Shuo Shen, Guangran Cheng et al.
为 RLVR 长链推理提供 token 级信用分配的有 critic 方案，摆脱对 grouped rollouts 的依赖。

**7. Quantitative Generalization Bounds for Multi-Layer Transformers**
[2610.35715](http://arxiv.org/abs/2610.35715v1) | Marius Henry, M. Rizvi-Martel, M. Hahn
理论工作：证明“少量长序列训练可胜过大量短序列”，为 Transformer 长度外推泛化提供定量界。

**8. Constrained Decoding: Harmful or Beneficial?**
[2610.35328](http://arxiv.org/abs/2610.35328v1) | N. T. H. Nguyen, A. Silva et al.
系统检验约束解码对推理的影响，发现其并非总有害，部分约束甚至有益——修正领域常见假设。

### 🤖 智能体与推理

**9. Skill∞: Recursive Self-Improvement for Agent Skill Optimization**
[2610.35434](http://arxiv.org/abs/2610.35434v1) | Wangcheng Tao, Zhanglu Yan et al.
将技能优化本身作为可被优化对象，实现真正的递归自我改进（RSI），AGI 路径上的重要探索。

**10. MiRL: Error-Targeted RL for Correcting Terminal Agent Misbehaviors**
[2610.35697](http://arxiv.org/abs/2610.35697v1) | Runchu Tian, Zaid Khan et al.
针对终端智能体的长程任务，研究“识别弱点→定点修复→验证”的可读性改进范式。

**11. Hierarchical Skill Evolution for Coding Agent**
[2610.35616](http://arxiv.org/abs/2610.35616v1) | Jun Gao, Yun Peng et al.
从纠缠于特定仓库的编码轨迹中蒸馏分层可迁移技能，不修改底层模型即可提升智能体。

### 🔧 方法与框架

**12. Quantifying Claim Smoothing by LLM Research Agents**
[2610.35793](http://arxiv.org/abs/2610.35793v1) | T. S. Roy, M. Wadhwa, G. Durrett
揭示深度研究 agent 报告中“结论被平滑”的现象：读起来自信的综合实际未能准确反映证据强度。

**13. Style over Substance? Linguistic Bias in LLM-based Peer Review**
[2610.35254](http://arxiv.org/abs/2610.35254v1) | S. S. M. Vasu, S. S. Joshi et al.
实证发现 LLM 辅助同行评审存在语言风格偏见，对审稿自动化政策有直接影响。

**14. From Self-Confidence to Statistical Accuracy: Scaling Human-in-the-Loop Evaluation**
[2610.35698](http://arxiv.org/abs/2610.35698v1) | Harine Choi, C. Kuai, Zihao Li et al.
结合模型自报置信度与 LLM-as-a-judge，设计统计上可扩展的人机协同评估管线。

### 📊 应用

**15. EXCISE: Locating and Excising Distracting Sentences in Medical QA**
[2610.35558](http://arxiv.org/abs/2610.35558v1) | Yerim Hong, S. Son et al.
不仅证明无关句子降低医学 QA 准确率，还定位其影响的模型内部位置并手术式移除。

**16. Preserve to Expand: Source-Aware Adaptation for Multilingual ASR**
[2610.35846](http://arxiv.org/abs/2610.35846v1) | Yuchen Zhang, H. Mouratidis, R. Shekhar
在 Speech LLM 连接器层面实现无源数据回放的新语言扩展，同时保护已有语言能力。

**17. MATCHA: A Chinese Multi-Disorder Mental Health Dataset**
[2610.35512](http://arxiv.org/abs/2610.35512v1) | Bingrui Jin, Baihan Li et al.
首个链接多障碍诊断的中文社媒心理健康数据集，打破英语/DSM-5 中心的资源垄断。

---

## 📈 研究趋势信号

今日信号最鲜明的是**扩散语言模型生态成型**：从解码调度（#4）、RL 信用分配（#46）到架构变体，dLLM 正在复现 AR-LM 曾经历的“训练—对齐—加速”完整发展轨迹，预示其工程化拐点临近。第二，**循环/递归架构复兴**：LoopFold 与 StateLoop 同日双发，加上 #31 的递归自我改进，表明“固定参数下增加计算深度”是效率叙事的重要分支。第三，**评估方法学的自我批判**加深：同行评审偏见、codebook 分析的“高分假象”、claim smoothing、置信度校准等论文集体质疑“高分=可靠”，提示社区正从能力竞赛转向可信性竞赛。最后，**非英语文化资源与安全评测**（Igbo、中文心理健康、DeepSeek 安全评测）显示研究地理版图持续扩大。

---

## 📖 值得精读

**1. Skill∞: Recursive Self-Improvement for Agent Skill Optimization**（[2610.35434](http://arxiv.org/abs/2610.35434v1)）
RSI 是 AI 安全与 AGI 讨论的核心命题，本文给出了首个基于技能库的具体实现路径，无论从能力还是治理视角都必读。

**2. Quantitative Generalization Bounds for Multi-Layer Transformers**（[2610.35715](http://arxiv.org/abs/2610.35715v1)）
长序列训练优于短序列的定量理论证明，对预训练数据配比（长文档 vs 切片）有直接工程指导意义。

**3. Quantifying Claim Smoothing by LLM Research Agents**（[2610.35793](http://arxiv.org/abs/2610.35793v1)）
深度研究 agent 正快速产品化，本文系统刻画其“自信但失真”的输出模式，是部署前必知的失败画像。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*