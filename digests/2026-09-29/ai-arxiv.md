# ArXiv AI 研究日报 2026-09-29

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-29 04:51 UTC

---

# 📰 ArXiv AI 研究日报（2026-09-29）

## 一、今日速览

今日 50 篇论文呈现几个鲜明热点：**循环/嵌套架构（Looped Transformers）** 迎来小爆发，多篇论文探索循环 Transformer、Looped MoE 与测试时自适应深度的结合，显示“参数复用 + 推理时算力扩展”正成为新的架构效率范式。**智能体自我改进与反思机制** 是另一主线，从无 RL 的自我复盘训练到统一多模态模型的“原生反思”，再到失败透明性基准，Agent 可靠性研究日趋系统化。**RLVR/奖励建模的可信性** 受到严格审视——验证器错误、rubric 奖励的 IRT 化等论文揭示了奖励黑客攻击的深层机理。此外，蒸馏防御在 RL 后轻易失效的安全发现、以及面向长程上下文的高效注意力采样（SANTA++）也值得关注。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**2. [Telescopic Language Models](http://arxiv.org/abs/2609.35769v1)** — Guo et al.
一次训练得到嵌套容量的 Transformer 连续体，通过随机前缀监督让单一模型服务多个算力预算，解决“每个推理预算需单独训练/压缩”的部署痛点。

**3. [How to Loop MoE: Flatten the Experts, Untie the Attention](http://arxiv.org/abs/2609.35751v1)** — Wang et al.
将循环 Transformer 与稀疏 MoE 桥接：展平专家、解绑注意力，使固定参数模型通过多次复用获得更强表达能力，是参数效率的新设计点。

**4. [Improving Test-Time Scaling with Adaptive Looped Transformers](http://arxiv.org/abs/2609.35748v1)** — You et al.
首次系统研究循环结构是否改善测试时扩展（随输出长度增长投入更多计算），发现自适应循环带来持续的 test-time scaling 收益。

**5. [Verifier Errors in RLVR: Reward Hacking, Limits of Feedback, and Selective Control](http://arxiv.org/abs/2609.35677v1)** — Moya et al.
用梯度流刻画不完美验证器导致“奖励上升而正确性下降”的条件，并提出选择性控制策略，为 RLVR 的奖励黑客问题提供理论刻画。

**6. [Rubric Rewards from Item Response Theory](http://arxiv.org/abs/2609.35646v1)** — Yazdani et al.
用心理测量学的项目反应理论（IRT）替代简单求和来聚合 rubric 判定为标量奖励，为无标准答案任务的 RL 奖励设计提供更稳健的统计基础。

**7. [Rethinking Personalized Generation: Test-Time Alignment via Factorized Ranking Models](http://arxiv.org/abs/2609.35695v1)** — Ma et al.
实证揭示个性化生成存在巨大未被开发的空间，提出因子化排序模型实现测试时对齐，突破“单一用户”对齐范式的限制。

**8. [MeqMuon: Matrix-Equilibrating Muon for LLM Pretraining](http://arxiv.org/abs/2609.35701v1)** — Shi et al.
在 Muon 优化器基础上引入矩阵均衡归一化，进一步平衡更新幅度，降低大模型预训练成本。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**9. [Shockingly Simple Self-retrospection Improves Agentic Models Without RL](http://arxiv.org/abs/2609.35741v1)** — Light et al.
仅用模型对自身经验的自然语言解释进行微调（无需 RL 奖励），即可显著提升智能体未来表现，验证了“复盘式学习”的惊人效果。

**10. [Learning Native Reflection in Unified Models with Interleaved Reinforcement Learning](http://arxiv.org/abs/2609.35767v1)** — Fan et al.
让统一多模态模型通过交错式 RL 学会“原生反思”：诊断自己生成的图像、修订、再观察，实现自我修复式生成。

**11. [Failure-Transparent Agents: Benchmarking Post-Failure Reporting in Tool-Using Language Models](http://arxiv.org/abs/2609.35732v1)** — Zhu et al.
提出 FTA 基准，解耦“工具失败”与“错误报告成功”两种失败，直击工具智能体的可信性评估盲区。

**12. [Harness Learning Enables Generalizable Test-Time Adaptation](http://arxiv.org/abs/2609.35738v1)** — Zhang et al.
将 agent 的 harness（组织模型调用与工具流的执行程序）本身作为学习对象，利用任务反馈实现可泛化的测试时适配。

**13. [KV-streams for Efficient Compaction in Agentic Reinforcement Learning](http://arxiv.org/abs/2609.35750v1)** — Penaloza et al.
提出 KV-streams 上下文压缩，突破长程智能体 RL 的 GPU 显存瓶颈，避免重新 prefill 的开销。

### 🔧 方法与框架（新技术、基准、效率优化）

**14. [SANTA++: Sampling Attention through Representative Keys](http://arxiv.org/abs/2609.35629v1)** — Lee et al.
免训练的随机注意力方法，利用代表性 key 做内存高效的查询相关 token 选择，为长上下文推理提供新的稀疏化路径。

**15. [ScAn-Bench: Evaluating Scaling Analysis Methodology](http://arxiv.org/abs/2609.35707v1)** — Sermaxhaj et al.
首个系统性评估 scaling law 研究方法学的基准——“研究 scaling 的方法本身”也被审视了。

**16. [TokenCast: Forecasting Token Consumption During LLM Agent Execution](http://arxiv.org/abs/2609.35760v1)** — Ouyang et al.
预测智能体执行的 token 消耗（同任务可相差数量级），服务于成本预估与资源规划。

### 📊 应用（垂直领域、多模态、代码生成）

**17. [Distillation Defenses Easily Break After Reinforcement Learning](http://arxiv.org/abs/2609.35699v1)** — Javaheri et al.
重要安全发现：现有防蒸馏防御在模型经过 RL 训练后轻易失效，对闭源模型的 IP 保护构成新威胁。

**18. [Verifiable Visual Rewards Transfer from Synthetic Scenes to Natural Prompts](http://arxiv.org/abs/2609.35641v1)** — Li et al.
提出 VVR：在合成场景上构建可验证的视觉奖励，并能迁移到自然提示，改进图像生成的精确指令遵循（数量、空间关系）。

**19. [GPUPhysBench: Benchmarking Coding Agents for Correct and Efficient GPU Physics Simulation](http://arxiv.org/abs/2609.35639v1)** — Sun et al.
50 个 GPU 物理仿真任务，测试编码智能体在保持数值正确性的同时优化性能的能力，填补高效代码生成评估空白。

**20. [FinAutoRubric: Expert-Guided Automatic Rubric Generation for Evaluating Financial Research Agents](http://arxiv.org/abs/2609.35744v1)** — Lee et al.
面向金融研究智能体的专家引导式自动 rubric 生成，可编码机构自有评估标准。

---

## 三、研究趋势信号

**① 循环架构 + 稀疏化的融合**：今日至少 3 篇论文（TLM、Looped MoE、Adaptive Looped Transformers）围绕“层复用、嵌套容量、自适应深度”展开，且均指向测试时算力扩展——这可能是对“参数规模驱动性能”范式的系统性反思，即用结构复用换取推理弹性。**② Agent 的“元认知”能力**成为新焦点：自我复盘（无需 RL）、原生反思、失败透明性报告、harness 自适应——研究正从“任务完成能力”转向“知道自己何时出错”的可信智能体。**③ 奖励机制的科学化**：从梯度流分析验证器错误，到用 IRT 构建 rubric 奖励，RLVR 时代正在催生“奖励工程学”这一子领域。**④ 安全视角反向渗透**：蒸馏防御失效研究提示，RL 后训练可能系统性破坏已有防御，安全评估需覆盖训练全生命周期。

---

## 四、值得精读

**⭐ [Shockingly Simple Self-retrospection Improves Agentic Models Without RL](http://arxiv.org/abs/2609.35741v1)** — 用最简单的 SFT-on-explanations 挑战了“Agent 改进必须靠 RL”的默认假设。若结果扎实，将大幅降低智能体自我改进的成本门槛，其方法论对任何做 Agent 训练的团队都有直接借鉴意义。

**⭐ [Verifier Errors in RLVR: Reward Hacking, Limits of Feedback, and Selective Control](http://arxiv.org/abs/2609.35677v1)** — 在 RLVR 成为主流训练范式的当下，该文给出奖励上升但正确性下降的显式理论条件与可控干预，是理解奖励黑客本质、设计更可靠验证器的必读理论基础。

**⭐ [Telescopic Language Models](http://arxiv.org/abs/2609.35769v1)** — “一次训练、多预算部署”直面 LLM 服务的真实经济痛点。其随机前缀监督的嵌套容量设计与推理系统的结合，可能预示下一代弹性推理服务架构。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*