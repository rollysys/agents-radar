# ArXiv AI 研究日报 2026-06-02

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-06-02 04:13 UTC

---

# ArXiv AI 研究日报 (2026-06-02)

## 1. 今日速览
今日研究的焦点明显向 **智能体的可靠性、安全性与隐私** 倾斜。多篇论文探讨了智能体在生产环境中的监控、对抗攻击（如技能注入、验证码破解）以及工具调用时的隐私泄露问题，标志着智能体研究从“能力构建”迈向“安全部署”阶段。多模态领域则聚焦于 **视频理解的精细化和持久化**，出现了针对瞬时视觉事件的诊断基准和解决视频冗余编码的新架构。此外，**扩散语言模型** 和 **持续学习** 方面的新方案为模型推理加速和长线适配提供了创新思路。

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐）

*   **From Layers to Submodules: Rethinking Granularity in Replacement-Based LLM Compression**
    *   链接: http://arxiv.org/abs/2606.02559v1
    *   作者: Elia Cunegatti et al.
    *   一句话说明: 挑战了传统的“整层”压缩粒度，提出更细粒度的子模块替换策略，为 LLM 压缩提供了更高的灵活性和性能保留度。

*   **SafeSteer: Localized On-Policy Distillation for Efficient Safety Alignment**
    *   链接: http://arxiv.org/abs/2606.02530v1
    *   作者: Hao Li et al.
    *   一句话说明: 提出了一种无需大量通用数据或奖励模型的局部策略蒸馏方法，旨在解决安全对齐通常伴随的“对齐税”（能力下降）问题。

*   **On the Scaling of PEFT: Towards Million Personal Models of Trillion Parameters**
    *   链接: http://arxiv.org/abs/2606.02437v1
    *   作者: Mind Lab, Song Cao et al.
    *   一句话说明: 重新定义了 PEFT 的角色，构想了一个基础模型共享能力、适配器承载个性化状态的“百万级模型”未来架构，极具前瞻性。

### 🤖 智能体与推理（规划、工具使用、安全）

*   **HLL: Can Agents Cross Humanity's Last Line of Verification?**
    *   链接: http://arxiv.org/abs/2606.02449v1
    *   作者: Xinhao Song et al.
    *   一句话说明: 直击自动化痛点，构建基准测试评估多模态智能体能否攻破验证码（CAPTCHA）等“人类最后一道防线”，对安全验证机制提出新挑战。

*   **Ghost Tool Calls: Issue-Time Privacy for Speculative Agent Tools**
    *   链接: http://arxiv.org/abs/2606.02483v1
    *   作者: Bardia Mohammadi et al.
    *   一句话说明: 揭示了智能体投机执行工具调用时的隐私泄露风险（即未确认的调用泄露意图），并提出“幽灵调用”机制以保护用户意图隐私。

*   **Monitoring Agentic Systems Before They're Reliable**
    *   链接: http://arxiv.org/abs/2606.02494v1
    *   作者: Marisa Ferrara Boston et al.
    *   一句话说明: 针对尚不成熟的智能体系统，提出在任务级错误检测不可行时，通过监控结构缺陷来实现生产环境下的可靠性监控。

*   **HERO'S JOURNEY: Testing Complex Rule Induction with Text Games**
    *   链接: http://arxiv.org/abs/2606.02556v1
    *   作者: Anshun Asher Zheng et al.
    *   一句话说明: 通过文本游戏构建基准，测试智能体从演示中归纳隐藏规则并多步执行的能力，填补了复杂逻辑推理测试的空白。

*   **ClinEnv: An Interactive Multi-Stage Long Horizon EHR Environment for Agents**
    *   链接: http://arxiv.org/abs/2606.02568v1
    *   作者: Yuxing Lu et al.
    *   一句话说明: 构建了模拟真实临床决策的交互式长视界环境，解决了现有医疗基准仅做选择题、无法评估序列决策能力的问题。

### 🔧 方法与框架（多模态、效率、评估）

*   **SimSD: Simple Speculative Decoding in Diffusion Language Models**
    *   链接: http://arxiv.org/abs/2606.02544v1
    *   作者: Junxia Cui et al.
    *   一句话说明: 针对新兴的扩散语言模型兼容投机解码，提出新框架解决了掩码建模与标准投机解码的不兼容问题，显著提升推理速度。

*   **Mitigating Perceptual Judgment Bias in Multimodal LLM-as-a-Judge**
    *   链接: http://arxiv.org/abs/2606.02578v1
    *   作者: Seojeong Park et al.
    *   一句话说明: 诊断了多模态模型在评判时“重文本叙事、轻视觉证据”的偏见，并提出通过感知扰动和奖励建模来纠正，提升了自动评估的可信度。

*   **AdaCodec: A Predictive Visual Code for Video MLLMs**
    *   链接: http://arxiv.org/abs/2606.02569v1
    *   作者: Haowen Hou et al.
    *   一句话说明: 针对视频帧间的时空冗余，提出预测性视觉编码器，不再独立编码每一帧，从而大幅减少视频 MLLM 的 Token 计算量。

### 📊 应用（垂直领域、数据生成）

*   **Moment-Video: Diagnosing Temporal Fidelity of Video MLLMs**
    *   链接: http://arxiv.org/abs/2606.02522v1
    *   作者: Xiaolin Liu et al.
    *   一句话说明: 揭示了视频 MLLM 在处理短暂关键视觉事件时的“瞬态盲区”，为长视频理解之外的瞬时感知能力提供了精准诊断基准。

*   **ODTQA-FoRe: An Open-Domain Tabular QA Dataset for Future Forecasting**
    *   链接: http://arxiv.org/abs/2606.02433v1
    *   作者: Zhensheng Wang et al.
    *   一句话说明: 突破了传统表格问答仅回答历史数据的限制，构建了面向未来数据预测和推理的新任务与数据集，极具实用价值。

## 3. 研究趋势信号
今日投稿显示出 **“智能体安全与生命周期管理”** 正成为独立的研究热点。从工具调用的隐私、对抗攻击的防御，到系统上线前的监控框架，研究重心正从构建功能完善的智能体转向构建可信、可控的智能体。同时，多模态研究正在经历 **“去冗余化”和“微观化”** 的转变：一方面通过预测编码去除视频数据天然的时间冗余（如 AdaCodec），另一方面深入挖掘短时、瞬态的视觉信息（如 Moment-Video），这表明多模态模型正试图突破效率与精度的双重瓶颈。扩散模型在语言建模中的应用也从架构创新转向推理优化，预示着该架构正加速走向实用化。

## 4. 值得精读
1.  **Ghost Tool Calls (Paper 32)**: 智能体在“推测执行”优化延迟时带来的隐私泄露是一个极易被忽视但后果严重的安全漏洞，该研究为智能体工具调用的安全性敲响了警钟，对 Agent 架构设计有直接影响。
2.  **On the Scaling of PEFT (Paper 45)**: 该文提出了一种极具野心的大模型应用愿景——将 PEFT 视为一种持久化的本地状态存储，这可能会改变目前“全量微调”或“RAG”主导的个性化落地路径，值得深入思考其架构可行性。
3.  **Mitigating Perceptual Judgment Bias (Paper 1)**: 随着 MLLM 越来越多地被用作自动评估器，其“幻觉”或“偏见”会污染整个训练链条。该文精准定位了“重文轻图”的缺陷并给出解决方案，是模型自监督学习领域的关键一环。

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*