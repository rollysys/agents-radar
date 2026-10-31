# ArXiv AI 研究日报 2026-10-31

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-31 04:38 UTC

---

# ArXiv AI 研究日报（2026-10-31）

## 📰 今日速览

今日 50 篇投稿中最引人注目的方向是**训练范式统一化**：Song et al. 提出“单一算法训练基础模型”，挑战预训练/SFT/RL 分阶段传统，堪称今日最具颠覆性的工作。**LLM 推理与推理效率**持续火热，涵盖循环 Transformer、投机解码能耗建模和 PD 分离路由。**具身智能与世界模型**方向出现多篇工作，包括跨本体连续动作世界模型与可扩展机器人仿真。此外，**生成式建模理论**（离散扩散 ODE 采样器、Feynman-Kac 组合修正）与**隐私/安全**（差分隐私过滤、持续遗忘）也有扎实进展。

---

## 🔥 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. Training Foundation Models with a Single Algorithm**（[2610.40564](http://arxiv.org/abs/2610.40564v1)）— Yuda Song, Fahim Tajwar et al.
将 RL 目标推导为最大似然形式，证明预训练/SFT/RL 的算法分离并非本质，可用单一算法贯穿全流程训练，是对当前分阶段训练范式的根本性挑战。

**2. How to Loop Your Transformer: Loop Scaling, Specialization, and Parallel Inference**（[2610.40325](http://arxiv.org/abs/2610.40325v1)）— C. Ekbote, A. Pagnoni, D. Sachan et al.
系统研究循环 Transformer 在模型大小、训练算力、推理效率三种约束下何时有利，并探讨并行推理，为“深度换参数”提供理论指南。

**3. SCARL: Sequence Confidence-Aligned Reinforcement Learning**（[2610.40407](http://arxiv.org/abs/2610.40407v1)）— Z. Ke, J. Zhou, H. Wu
指出 RLVR 中策略置信度与验证器判定脱节的问题，提出序列级置信度对齐的 RL 方法，直击推理模型校准痛点。

**4. How I Aligned Your Model: Scaling Up Multilingual Safety Training with Templates**（[2610.40516](http://arxiv.org/abs/2610.40516v1)）— M. Neuwinger, I. Schlag et al.
用区域本地化有害话题模板规模化构建多语言安全对齐数据，弥补低资源语言安全训练的严重缺口。

**5. Preserving Utility in Continual LLM Unlearning via Orthogonal Projections**（[2610.40483](http://arxiv.org/abs/2610.40483v1)）— J. Belieni, A. Erthal et al.
针对持续到达的遗忘请求，用正交投影在去除敏感数据影响的同时保持模型效用，解决真实运营中反复遗忘导致的性能退化。

**6. Latent Path Exploration via Potential-Guided Subtrajectory Balance**（[2610.40283](http://arxiv.org/abs/2610.40283v1)）— X. Zeng, Q. Zhang
在连续潜空间推理中引入势函数引导的子轨迹平衡，提升无显式思维链的潜在推理探索效率。

### 🤖 智能体与推理

**7. Gym-Anything for Robotics: Scaling physical simulations with digital agents**（[2610.40565](http://arxiv.org/abs/2610.40565v1)）— P. Aggarwal, S. Welleck
用数字智能体自动生成大规模真实机器人仿真环境，突破手工构建仿真覆盖面窄的瓶颈，是具身 AI 数据扩展的关键尝试。

**8. Continuous-Action World Models (CoAWM)**（[2610.40401](http://arxiv.org/abs/2610.40401v1)）— L. Li, Q. Liu
学习跨本体、跨执行频率的共享时空动力学先验，支持不同机器人平台间的动作迁移。

**9. Is It the Curriculum or Just the Easy Start? Benchmarking Unsupervised Environment Design on Quadrupeds**（[2610.40364](http://arxiv.org/abs/2610.40364v1)）— J. Gilewicz et al.
首次在四足机器人上系统性对比 14 种 UED / 课程学习方法，质疑课程设计的真实贡献，是重要的“祛魅”型基准工作。

### 🔧 方法与框架

**10. An ODE-based Sampler for Discrete Diffusion Models**（[2610.40618](http://arxiv.org/abs/2610.40618v1)）— S. Gourevitch, E. Moulines et al.
为离散扩散模型建立类似概率流 ODE 的确定性采样框架，为加速采样与一致性蒸馏奠定理论基础。

**11. Rimuru: Unified Memory Management for Modern LLM Serving via Elastic Expert Offloading**（[2610.40305](http://arxiv.org/abs/2610.40305v1)）— Z. Fang, D. Li et al.
统一管理模型权重与注意力状态的弹性内存系统，打破固定边界，显著提升资源受限场景下的 LLM 服务能力。

**12. A Unified Hessian-Guided Framework for Post-Training Quantization**（[2610.40345](http://arxiv.org/abs/2610.40345v1)）— M. Toftrups, M. Federici et al.
用 Hessian 信息统一优化量化范围、线性变换与权重舍入，此前这些决策彼此割裂。

**13. Your LR Schedule May Not Be Principled**（[2610.40362](http://arxiv.org/abs/2610.40362v1)）— Q. Yu, X. Ma et al.
揭示权重归一化训练的收益主要来自隐式的有效学习率轨迹，提出更原则化的 LR 调度设计，对预训练实践有直接指导意义。

### 📊 应用

**14. TRACER: a time-to-event EHR foundation model**（[2610.40536](http://arxiv.org/abs/2610.40536v1)）— M. Pleasure et al.
基于纵向电子病历的生存分析基础模型，可跨医疗系统预测多年后的疾病风险，迈向临床筛查实用化。

**15. Latent Prediction Yields Cross-Subject Alignable Representations in Sensory-Evoked fMRI**（[2610.40280](http://arxiv.org/abs/2610.40280v1)）— S. Jassim et al.
首次系统探索自监督学习在感觉诱发 fMRI 上的应用，发现潜在预测目标可产生跨被试可对齐的表征，连接 AI 与认知神经科学。

---

## 📈 研究趋势信号

今日投稿呈现三大信号：**（1）训练范式收敛**——多篇工作质疑分阶段训练与手工课程设计的必要性（#1、#9、#37），暗示社区正在寻求更统一、更少人工干预的训练理论。**（2）推理基础设施精细化**——LLM 服务研究从吞吐优化转向能耗（#45）、SLO 感知路由（#44）、弹性内存（#42）等运营级指标，反映大规模部署进入深水区。**（3）基础模型泛化到非语言模态**——EHR（#12）、动力系统滤波（#25）、贝叶斯世界模型（#5）纷纷出现"foundation model moment"式工作，预示预训练范式正加速渗透科学计算与垂直领域。

---

## 📖 值得精读

**1. Training Foundation Models with a Single Algorithm**（[2610.40564](http://arxiv.org/abs/2610.40564v1)）
若结论成立，将改写基础模型的训练流程设计。论文将 RL 目标统一为最大似然的形式化推导值得仔细审视，对预训练团队的实践有直接借鉴价值。

**2. Gym-Anything for Robotics**（[2610.40565](http://arxiv.org/abs/2610.40565v1)）
具身智能最大瓶颈是环境多样性而非算法。该工作用 LLM 智能体自动生成仿真环境，思路简洁且可扩展性强，其环境验证方法对自动数据生成研究有普遍参考意义。

**3. How to Loop Your Transformer**（[2610.40325](http://arxiv.org/abs/2610.40325v1)）
在“循环/权重共享”这一热点方向上提供了罕见的系统性分析——明确指出循环在何种资源约束下有优势。对关注高效推理架构（如 Universal Transformer 复兴）的研究者是必读参考。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*