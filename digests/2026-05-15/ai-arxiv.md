# ArXiv AI 研究日报 2026-05-15

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-05-15 03:42 UTC

---

# ArXiv AI 研究日报 (2026-05-15)

## 1. 今日速览
今日研究重点呈现出**从生成到物理一致性**、**从静态评估到动态适应**的显著转向。视频生成领域不再局限于画质，而是通过 EntityBench 和几何一致性评估推动其向“世界模型”演进。智能体研究聚焦于长时程任务，涌现出异步工具调用、自适应评估模拟及自我蒸馏强化学习等新范式，显著提升了复杂任务的执行效率。此外，安全领域揭示了量化后门与“反遗忘”等底层隐患，呼吁超越单纯的行为测试，建立更严谨的治理机制。

## 2. 重点论文

### 🧠 大语言模型（架构、训练、推理）
1.  **MeMo: Memory as a Model**
    *   链接: http://arxiv.org/abs/2605.15156v1
    *   作者: Ryan Quek et al.
    *   **一句话说明**: 提出将记忆机制视为模型本身而非外部存储，为 LLM 高效融入新知识提供了新范式。

2.  **TFGN: Task-Free, Replay-Free Continual Pre-Training Without Catastrophic Forgetting at LLM Scale**
    *   链接: http://arxiv.org/abs/2605.15053v1
    *   作者: Anurup Ganguli
    *   **一句话说明**: 解决了 LLM 在异构文本域持续预训练时的灾难性遗忘问题，无需回放缓冲区或任务标签，具有极高实用价值。

3.  **Concurrency without Model Changes: Future-based Asynchronous Function Calling for LLMs**
    *   链接: http://arxiv.org/abs/2605.15077v1
    *   作者: Guangyu Feng et al.
    *   **一句话说明**: 引入 Future 机制实现异步工具调用，打破智能体工作流的同步阻塞瓶颈，显著降低端到端延迟。

4.  **Dual-Dimensional Consistency: Balancing Budget and Quality in Adaptive Inference-Time Scaling**
    *   链接: http://arxiv.org/abs/2605.15100v1
    *   作者: Rongman Xu et al.
    *   **一句话说明**: 优化推理时的计算扩展策略，在采样预算与推理质量之间实现了更优的权衡。

### 🤖 智能体与推理（规划、工具、评估）
5.  **FutureSim: Replaying World Events to Evaluate Adaptive Agents**
    *   链接: http://arxiv.org/abs/2605.15188v1
    *   作者: Shashwat Goel et al.
    *   **一句话说明**: 提出通过按时间顺序重放真实世界事件来构建模拟环境，解决了动态开放环境中智能体适应能力评估难的问题。

6.  **Self-Distilled Agentic Reinforcement Learning**
    *   链接: http://arxiv.org/abs/2605.15155v1
    *   作者: Zhengxi Lu et al.
    *   **一句话说明**: 利用策略自蒸馏为长时程智能体交互提供密集的 Token 级监督，缓解了传统 RL 奖励信号稀疏的瓶颈。

7.  **OpenDeepThink: Parallel Reasoning via Bradley--Terry Aggregation**
    *   链接: http://arxiv.org/abs/2605.15177v1
    *   作者: Shang Zhou et al.
    *   **一句话说明**: 突破单一推理链深度的限制，通过并行采样与 Bradley-Terry 聚合实现推理的“广度扩展”。

8.  **Pelican-Unified 1.0: A Unified Embodied Intelligence Model for Understanding, Reasoning, Imagination and Action**
    *   链接: http://arxiv.org/abs/2605.15153v1
    *   作者: Yi Zhang et al.
    *   **一句话说明**: 首个将理解、推理、想象和行动映射到统一语义空间的具身智能基础模型。

### 🛡️ 安全、对齐与评估
9.  **Position: Behavioural Assurance Cannot Verify the Safety Claims Governance Now Demands**
    *   链接: http://arxiv.org/abs/2605.15164v1
    *   作者: Pratinav Seth et al.
    *   **一句话说明**: 尖锐指出当前的行为测试无法满足 AI 治理的安全声明要求，呼吁建立更深层的可验证机制。

10. **MetaBackdoor: Exploiting Positional Encoding as a Backdoor Attack Surface in LLMs**
    *   链接: http://arxiv.org/abs/2605.15172v1
    *   作者: Rui Wen et al.
    *   **一句话说明**: 揭示了位置编码可作为新的后门攻击面，攻击者无需修改输入内容即可触发恶意行为，隐蔽性极强。

11. **Forgetting That Sticks: Quantization-Permanent Unlearning via Circuit Attribution**
    *   链接: http://arxiv.org/abs/2605.15138v1
    *   作者: Saisab Sadhu et al.
    *   **一句话说明**: 发现量化过程会逆转传统机器遗忘的效果，并提出了一种即使在量化后仍能保持遗忘效果的鲁棒方法。

### 📊 应用与多模态
12. **EntityBench: Towards Entity-Consistent Long-Range Multi-Shot Video Generation**
    *   链接: http://arxiv.org/abs/2605.15199v1
    *   作者: Ruozhen He et al.
    *   **一句话说明**: 针对多镜头视频生成中角色、物体一致性难题提出了新的评估基准，推动视频生成向长叙事发展。

13. **Quantitative Video World Model Evaluation for Geometric-Consistency**
    *   链接: http://arxiv.org/abs/2605.15185v1
    *   作者: Jiaxin Wu et al.
    *   **一句话说明**: 填补了视频生成模型作为世界模型时缺乏物理几何一致性定量评估的空白。

## 3. 研究趋势信号
今日论文反映了 AI 系统正在经历**从“能力构建”向“可靠性验证”的深化**。
1.  **世界模型的落地化评估**：视频生成研究正迅速收敛于“一致性”和“几何物理合理性”，这表明生成式 AI 正试图从视觉逼真跨越到逻辑自洽，为具身智能提供模拟基础。
2.  **智能体动态适应性**：FutureSim 等工作表明，静态数据集已不足以评估智能体，基于真实事件流的动态模拟成为新趋势。
3.  **底层安全与持久性**：安全研究不再局限于输入层面的对抗攻击，而是深入到位置编码、量化压缩等模型生命周期的基础环节，显示出安全与系统架构深度融合的倾向。

## 4. 值得精读
1.  **MeMo: Memory as a Model** (http://arxiv.org/abs/2605.15156v1)
    *   **理由**: 突破了 RAG 或微调的传统思路，将记忆机制内化为模型结构的一部分，对于解决大模型知识更新滞后、幻觉等核心问题具有重要的启发性，可能是下一代模型架构演进的关键方向。

2.  **FutureSim: Replaying World Events to Evaluate Adaptive Agents** (http://arxiv.org/abs/2605.15188v1)
    *   **理由**: 智能体评估一直是领域痛点，该文提出的“重放世界事件”范式极具创新性，为构建可复现、高保真的智能体测试环境提供了理论依据和方法论，对智能体研究有重要参考价值。

3.  **Position: Behavioural Assurance Cannot Verify the Safety Claims Governance Now Demands** (http://arxiv.org/abs/2605.15164v1)
    *   **理由**: 随着 AI 监管日益严格，这篇立场文章深刻剖析了当前主流“行为测试”的局限性，指出了治理要求与技术验证能力之间的断层，对于理解未来 AI 安全治理方向和科研伦理具有重要指导意义。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*