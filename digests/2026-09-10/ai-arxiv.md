# ArXiv AI 研究日报 2026-09-10

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-10 03:41 UTC

---

# ArXiv AI 研究日报 — 2026-09-10

## 📰 今日速览

今日 50 篇 AI 论文呈现出几条清晰主线：**LLM 服务与推理效率**成为热点，KV 缓存跨上下文复用（KVShareArena）、私有可验证推理（Maverick）、视觉 token 自适应剪枝等工作直指部署成本问题；**智能体记忆与遗忘**方向出现两篇互补论文，探讨持久化智能体应如何管理经验；**评测方法学**持续深化，从“按服务路由而非模型 ID 测量企业 AI 系统”（IBIB）到“预训练熟悉度能否在无污染留出集上存活”的质疑，都指向更严谨的评估范式。此外，RAG 降本（LiteRAG）、法律领域声明级审计（GANDR）和 LLM 基础设施工程基准（Φ-Bench）展示了应用落地的成熟度提升。

---

## 🔍 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1. **IBIB: 按服务路由而非模型 ID 测量企业 AI 系统** — [arxiv.org/abs/2609.10494](http://arxiv.org/abs/2609.10494v1) | Stenstrom et al.
   指出全部 18 个被审计基准只评“模型 ID”而忽略 serving route、精度与 harness，将其视为可报告的测量误差并提出修正协议——对基准评测方法学有根本性启发。

2. **A Later Test Set Is Not a New Domain: 预训练熟悉度在无污染留出集上依然存活** — [arxiv.org/abs/2609.10357](http://arxiv.org/abs/2609.10357v1) | Naser Moghadasi & Ghaderi
   用 13 个时间序列预测器证明“测试集晚于预训练”不足以消除记忆效应，对时间序列基础模型评估提出尖锐质疑。

3. **DiSCo: 分布优先的文化偏好偏置评测与调控框架** — [arxiv.org/abs/2609.10253](http://arxiv.org/abs/2609.10253v1) | Arora et al.
   超越单题打分的文化基准，从分布层面测量并干预 LLM 的文化先验偏置，服务于全球化部署的公平性。

4. **RiLM: 基于测地解码的参数高效语言建模** — [arxiv.org/abs/2609.10305](http://arxiv.org/abs/2609.10305v1) | Li
   针对 <1M 参数的边缘部署语言模型，用黎曼几何解码压缩占约三分之一容量的输出矩阵，小模型方向少见的工作。

5. **Building Multilingual Bridges: 数据混合作为语内推理泛化的支柱** — [arxiv.org/abs/2609.10445](http://arxiv.org/abs/2609.10445v1) | Mofakhami et al.
   系统研究数据混合策略如何让推理型模型摆脱“用英语思考”的局限，实现真正的语内推理。

6. **KVShareArena: 跨上下文与模型检查点的 KV 缓存复用** — [arxiv.org/abs/2609.10266](http://arxiv.org/abs/2609.10266v1) | Shi & Lou
   突破“复用文本必须在 prompt 开头”的限制，面向 RAG 与多智能体两大工作负载的 KV 缓存共享，直击服务成本。

7. **A Dominant Diffuse Phase in the Sparse Autoencoder Phase Diagram** — [arxiv.org/abs/2609.10299](http://arxiv.org/abs/2609.10299v1) | Plascencia
   回应 MAIS-O43 开放问题，刻画 SAE 特征吸收/合并的“扩散相”，对可解释性研究中特征恢复的可靠性有理论价值。

### 🤖 智能体与推理

8. **What Should an Agent Forget? 分离存储与使用** — [arxiv.org/abs/2609.10263](http://arxiv.org/abs/2609.10263v1) | Li & Li
   提出训练无关的 RD-Forget 框架，区分“被取代的事实会误导当前状态问答但对历史查询仍必要”，是智能体记忆管理的精细思考。

9. **TRACE: 合成奖励训练因果探索推理智能体** — [arxiv.org/abs/2609.10315](http://arxiv.org/abs/2609.10315v1) | Sun et al.
   将 RLVR 从数学/代码扩展到缺乏可验证答案的诊断推理领域，用合成奖励建立因果验证闭环。

10. **From Symbolic Perception to Logical Deduction: 几何推理框架** — [arxiv.org/abs/2609.10335](http://arxiv.org/abs/2609.10335v1) | Dai et al.
    展示纯 LLM 结合符号化感知即可完成平面几何推理，无需计算密集的多模态模型，探索“符号接口 vs. 端到端视觉”的路线之争。

11. **A-JIT: 智能体即时软件构造** — [arxiv.org/abs/2609.10248](http://arxiv.org/abs/2609.10248v1) | Marron & Barr
    提出用可持续演化的动态软件系统取代静态二进制，是对软件交付范式的激进重构。

### 🔧 方法与框架

12. **Maverick: 矩阵向量乘法委托实现实用化私有可验证 LLM 推理** — [arxiv.org/abs/2609.10264](http://arxiv.org/abs/2609.10264v1) | Merbaum et al.
    兼顾隐私与可验证性，让资源受限用户能安全外包大模型推理，密码学与 ML 交叉的落地性工作。

13. **A positive resolution of the gap-entropy conjecture** — [arxiv.org/abs/2609.10529](http://arxiv.org/abs/2609.10529v1) | Aronow, Kallus & Lopatto
    证明固定置信度最优臂识别的 gap-entropy 猜想，bandit 理论的标志性进展。

14. **Algorithmic stability via ensembling** — [arxiv.org/abs/2609.10428](http://arxiv.org/abs/2609.10428v1) | Barber & Samworth
    建立量化任意集成策略稳定性的通用框架，为集成方法的理论分析提供统一工具。

### 📊 应用

15. **GANDR: 可验证法律答案生成的声明级审计** — [arxiv.org/abs/2609.10293](http://arxiv.org/abs/2609.10293v1) | Qian et al.
    将整体答案打分细化为逐声明审计，直面高风险法律领域中“正确结论建立在捏造依据上”的问题。

16. **Φ-Bench: LLM 能否工程化驱动它们自身的基础设施？** — [arxiv.org/abs/2609.10226](http://arxiv.org/abs/2609.10226v1) | Ding et al.
    超越孤立 kernel 评测，测试 LLM 开发其自身推理基础设施的能力，“自我工程”命题新颖。

17. **LiteRAG: 低成本图检索增强生成** — [arxiv.org/abs/2609.10239](http://arxiv.org/abs/2609.10239v1) | Coll Tejeda et al.
    用轻量机制替代昂贵的检索时 LLM 控制，解决图 RAG 查询成本高、上下文冗余两大痛点。

---

## 📈 研究趋势信号

今日投稿中，三个信号尤为突出。**其一，“评测的对象是什么”正在被重新定义**：IBIB 主张评“系统路由”而非“模型 ID”，时间序列污染研究质疑“晚于训练的测试集”这一补救措施本身——评测方法学正从“跑分”走向“测量科学”。**其二，智能体的记忆生命周期管理**兴起：RD-Forget 与 Layer-Selective Unlearning 同日出现，从“存什么”到“何时忘、忘哪一层”，遗忘正成为一等公民问题。**其三，推理服务经济学**持续吸金：KV 缓存跨上下文复用、视觉 token 按样本路由剪枝、矩阵乘法外包的私有推理、图 RAG 降本——效率创新的粒度正从模型架构下沉到缓存、路由与密码学协议层面。

---

## ⭐ 值得精读

1. **IBIB**（[2609.10494](http://arxiv.org/abs/2609.10494v1)）：对所有做 LLM 评测的人都构成前提性挑战——你测的到底是什么？其“测量误差”框架可能改变未来基准报告的规范。

2. **KVShareArena**（[2609.10266](http://arxiv.org/abs/2609.10266v1)）：RAG 与多智能体工作负载正在瓦解现有 KV 缓存复用的前提条件，该工作直接面向真实服务场景，工程与科研价值兼备。

3. **What Should an Agent Forget?**（[2609.10263](http://arxiv.org/abs/2609.10263v1)）：随着持久化智能体成为主流形态，“存储与使用的分离”这一概念框架很可能成为该方向的奠基性表述，值得完整阅读其问题形式化部分。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*