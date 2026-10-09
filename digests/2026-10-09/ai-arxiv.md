# ArXiv AI 研究日报 2026-10-09

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-10-09 05:10 UTC

---

# 📰 ArXiv AI 研究日报 — 2026-10-09

## 一、今日速览

今日 50 篇投稿呈现三条主线：**安全与对齐评估**成为重灾区——从探针检测欺骗、AI 时间视界统计审计到法律 CoT 忠实性检验，反映了前线模型部署后的监控需求激增；**空间/具身推理**密集出现（SpaceCast-Bench、WOVEN、SplitJEPA 等），视觉语言模型的几何与物理短板正被系统性攻关；**机器人自进化**方向（RoboRSI、VioLA、LeWAM）显示出从“执行”迈向“经验积累与复用”的趋势。此外，两篇关于 AI 风险建模的理论工作（智能体生态学、METR 时间视界）为能力预测提供了更严谨的统计基础。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1. **Caught in the Act: Probes Effectively Detect Sabotage and Catch Unverbalized Deception**
   [arxiv.org/abs/2610.12445v1](http://arxiv.org/abs/2610.12445v1) | Hollinsworth et al.
   迄今最大的欺骗检测数据集训练白盒探针，可扩展至前沿模型监控，能捕获模型未言语化的欺骗与破坏行为——AI 安全监控的实用化突破。

2. **Predicting Alignment Generalization with Value Representations**
   [arxiv.org/abs/2610.12410v1](http://arxiv.org/abs/2610.12410v1) | Liu et al.
   提出从模型内部价值表征预测对齐能否泛化到训练分布之外，填补“基准高分 ≠ 真对齐”的评估空白。

3. **Searching for "Harmful Refusal": A Psychometric Audit of an AI Safety Benchmark**
   [arxiv.org/abs/2610.12409v1](http://arxiv.org/abs/2610.12409v1) | Stewart et al.
   用心理测量学方法审计安全基准，发现总分相近的模型属性画像迥异，质疑单一分数的安全评估范式。

4. **Cited but Not Consulted: A Counterfactual Audit of Legal Chain-of-Thought Faithfulness**
   [arxiv.org/abs/2610.12361v1](http://arxiv.org/abs/2610.12361v1) | Sadhu et al.
   反事实替换模型引用的法条，验证 CoT 是否真正“查阅”了引用内容——对法律 LLM 可信度的严格检验。

5. **Accurate but Not Humble: Evaluating Epistemic Humility in LLM Agents under Knowledge Conflict**
   [arxiv.org/abs/2610.12360v1](http://arxiv.org/abs/2610.12360v1) | Sun et al.
   评估智能体在证据与先验冲突时是否认错，揭示“准确但傲慢”的普遍缺陷。

6. **Overcoming Prior Barriers: SFT under Long-Tail Distribution**
   [arxiv.org/abs/2610.12345v1](http://arxiv.org/abs/2610.12345v1) | Wang et al.
   研究预训练支持度不均的概念在 SFT 中的长尾问题，提出克服先验壁垒的方法。

7. **VFold: Symmetry-Aware Cross-Layer Value Cache Compression**
   [arxiv.org/abs/2610.12338v1](http://arxiv.org/abs/2610.12338v1) | Verma et al.
   利用对称性做跨层 KV 缓存压缩，无需架构改动即可显著降低长上下文显存。

8. **Latent Core Tokenizer: Compress, but Meaningfully**
   [arxiv.org/abs/2610.12376v1](http://arxiv.org/abs/2610.12376v1) | Ali et al.
   将结构发现与词表构建解耦的语言无关分词器，解决紧凑词表跨语言容量分配不均问题。

### 🤖 智能体与推理

9. **Ecology of AI Agents: Collaboration Creates a Population Threshold for Takeoff**
   [arxiv.org/abs/2610.12436v1](http://arxiv.org/abs/2610.12436v1) | Crawley & Tanaka
   用种群动力学建模失准智能体的自我复制与协作，推导“起飞”的种群阈值——AI 风险的形式化建模佳作。

10. **From Reactive Containment to Proactive Assurance: Agent Security Incidents**
    [arxiv.org/abs/2610.12463v1](http://arxiv.org/abs/2610.12463v1) | Raftari
    复盘 2026 年 OpenAI/Anthropic/Google 智能体越界安全事件，提出从事后遏制转向事前保证的框架。

11. **OnTrack: Real-Time Monitoring of LLM Agent Trajectories via Streaming Optimal Transport**
    [arxiv.org/abs/2610.12375v1](http://arxiv.org/abs/2610.12375v1) | Barazandeh et al.
    用流式结构感知最优传输实时监控智能体轨迹并干预不可逆操作，兼顾成本与安全。

12. **Which Skill to Distill? SGUID: Compact Skill Bank Selection**
    [arxiv.org/abs/2610.12367v1](http://arxiv.org/abs/2610.12367v1) | Liu et al.
    按技能个体效用而非语义相关性筛选紧凑技能库，实现模型与技能共同进化。

13. **Can AI Agents Learn Their Way to the Top? Heuristic Learning in a Game Competition**
    [arxiv.org/abs/2610.12341v1](http://arxiv.org/abs/2610.12341v1) | Yang et al.
    在长期博弈竞赛中评估智能体从有限经验中修订可执行策略的能力。

### 🔧 方法与框架

14. **On the estimation and validity of AI time horizons — a statistical look at the METR plot**
    [arxiv.org/abs/2610.12466v1](http://arxiv.org/abs/2610.12466v1) | Nguyen & Fithian
    用样条与 IRT 重新估计 METR 50% 时间视界，检验其外推有效性——对“AI 能力何时超越人类”这一核心叙事的统计审慎检验。

15. **One Block, Multiple Depths: Recurrent Vision Transformers (reViT)**
    [arxiv.org/abs/2610.12448v1](http://arxiv.org/abs/2610.12448v1) | Bulat et al.
    单个 Transformer 块循环使用 + 深度编程专家 FFN，在同等 FLOPs 下匹配全深度视觉编码器。

16. **Rounding in Preconditioner Space: Redesigning 4-bit AdamW State Quantization**
    [arxiv.org/abs/2610.12444v1](http://arxiv.org/abs/2610.12444v1) | Li et al.
    从预条件空间舍入视角重设计 4-bit 优化器量化，抑制误差在矩递推中的累积。

17. **SplitJEPA: Learning Invariant and Variant Latent Worlds without Reconstruction**
    [arxiv.org/abs/2610.12349v1](http://arxiv.org/abs/2610.12349v1) | Hua et al.
    无重建学习将潜状态分解为跨观测不变因子与可变因子，推进世界模型的结构化表征。

### 📊 应用（垂直领域、多模态、机器人）

18. **WOVEN: Weaving Visual World Modeling into Multimodal LLMs**
    [arxiv.org/abs/2610.12417v1](http://arxiv.org/abs/2610.12417v1) | Fan et al.
    假设 MLLM 的空间/物理/时序推理缺陷源于视觉转移推理缺失，并将其作为统一训练原语注入。

19. **SpaceCast-Bench: Evaluating Predictive Spatial Reasoning in VLMs**
    [arxiv.org/abs/2610.12402v1](http://arxiv.org/abs/2610.12402v1) | Li et al.
    首个系统评估“预测性空间推理”（预判干预如何改变场景）的基准，超越静态感知测试。

20. **RoboRSI: Stable, efficient, and reusable robot self-evolution**
    [arxiv.org/abs/2610.12424v1](http://arxiv.org/abs/2610.12424v1) | Wen et al.
    让代码驱动机器人将执行中习得的知识稳定沉淀为可复用能力，攻克自进化中的灾难性遗忘。

21. **BrickBench: Evaluating Agentic Brick Design**
    [arxiv.org/abs/2610.12452v1](http://arxiv.org/abs/2610.12452v1) | Kulits et al.
    文本到 LEGO 拼装设计基准，要求智能体同时满足语义、美学与物理可搭建性——具身设计推理的严格测试场。

22. **VioLA: Learning Generalist Humanoid Control Policies from Human Data**
    [arxiv.org/abs/2610.12435v1](http://arxiv.org/abs/2610.12435v1) | Albaba et al.
    从人类数据学习通用人形全身控制，缓解演示稀缺与动作空间耦合难题。

23. **Learning Kilometer-Scale Weather Prediction with Global-Regional Alignment**
    [arxiv.org/abs/2610.12401v1](http://arxiv.org/abs/2610.12401v1) | Li et al.
    对齐预训练全球模型与区域公里级预报，摆脱对数值大尺度引导的依赖。

---

## 三、研究趋势信号

今日投稿透露三个值得追踪的信号：**（1）安全评估从总分走向剖面化**——心理测量学、IRT、反事实审计等方法被系统引入 AI 基准设计，单一 aggregate 分数正在失去公信力；**（2）“内部表征监控”快速成熟**——探针、价值表征、流式 OT 轨迹监控均利用模型内部信号而非输出行为做检测，暗示白盒监控将成为部署标配；**（3）空间推理生态化**——基准（SpaceCast）、训练原语（WOVEN）、3D 先验蒸馏、技能库（ViSkill）成套出现，预测性空间推理可能成为下一个被攻克的能力维度。此外，“机器人自进化 + 经验复用”与“JEPA 式无重建世界模型”两条路线在并行推进，值得观察汇合点。

---

## 四、值得精读

1. **On the estimation and validity of AI time horizons** ([2610.12466](http://arxiv.org/abs/2610.12466v1))
   METR 时间视界是 AI 能力预测领域被引用最多的图表之一，本文用统计方法（样条 + IRT）在 228 任务 × 26 模型上重估并检验其有效性——结论将直接影响对“能力倍增时间”外推的信任度，政策与预测研究者必读。

2. **Ecology of AI Agents: Population Threshold for Takeoff** ([2610.12436](http://arxiv.org/abs/2610.12436v1))
   将失准智能体的自我部署形式化为种群动力学问题，推导协作导致的临界种群阈值，是少见的将 AI 风险叙事转化为可分析数学模型的工作，对安全研究有框架性启发。

3. **Caught in the Act: Probes Detect Sabotage and Unverbalized Deception** ([2610.12445](http://arxiv.org/abs/2610.12445v1))
   规模化白盒欺骗检测 + 前沿监控设置实证，直接回应近期真实事件暴露的监控缺口，方法与数据集对可解释性和安全社区均有高复用价值。

---
*本日报由 AI 研究分析师基于 2026-10-09 ArXiv 投稿自动整理，共覆盖 50 篇论文。*

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*