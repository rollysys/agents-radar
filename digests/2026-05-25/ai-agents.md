# OpenClaw 生态日报 2026-05-25

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-25 04:05 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 (2026-05-25)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，Issues 与 PR 更新量均达到 500 条，显示出社区互动与开发迭代的双重繁荣。项目刚刚发布了 v2026.5.24-beta.2，引入了 iMessage 交互式审批功能，同时底层架构正在经历重大重构（移除 Pi 依赖，内部化 Agent 运行时）。今日重点聚焦于稳定性修复与安全性增强，特别是针对长连接下的内存泄漏和 Telegram 频道的消息丢失问题进行了大量修复工作。整体来看，项目正处于架构优化与功能深水区，安全性与多平台适配是当前核心议题。

## 2. 版本发布
今日发布了 **v2026.5.24-beta.2**，主要更新如下：
- **iMessage 交互式审批支持**：新增支持拇指表情反应（Tapbacks）进行审批决策。用户发送 👍 会解析为 `allow-once`（允许一次），发送 👎 解析为 `deny`（拒绝）。此功能结合 `channels.imessage.allowFrom` 白名单配置，极大地优化了移动端的审批体验，无需输入文本即可完成操作。
- **前置版本 v2026.5.24-beta.1**：包含 Gateway 性能优化，复用进程稳定的频道目录读取，避免重复边界检查，并轮转网关监控 CPU 分析文件，防止长期运行产生无限增多的工件。

## 3. 项目进展
今日共有 126 个 PR 合并或关闭，重点推进了以下关键模块：
- **架构重构**：PR [#85341](https://github.com/openclaw/openclaw/pull/85341) 正在进行大规模重构，旨在移除旧的 Pi 形状 Agent 运行时架构，将其功能重新整合为 OpenClaw 自有的核心、插件和 SDK 层面。这意味着 OpenClaw 将不再视 Pi 为嵌入依赖，而是拥有完全自主可控的执行核心，预计将大幅提升系统的可维护性。
- **内存泄漏修复**：PR [#86293](https://github.com/openclaw/openclaw/pull/86293) 修复了长运行 Gateway 守护进程中的内存泄漏问题（RSS 每小时增长 1GB），通过限制 `INDEX_CACHE` 生命周期解决了 OOM 问题。
- **WebChat 稳定性**：PR [#85956](https://github.com/openclaw/openclaw/pull/85956) 修复了实时转录运行状态的不稳定问题，确保外部频道的用户消息能在轮次结束前被正确镜像。
- **安全与策略**：PR [#85817](https://github.com/openclaw/openclaw/pull/85817) 实现了 Agent 作用域的策略覆盖，进一步细化了权限控制粒度。

## 4. 社区热点
今日讨论最活跃的议题主要集中在跨平台支持与安全性增强：
- **Linux/Windows 客户端需求**：Issue [#75](https://github.com/openclaw/openclaw/issue/75) 继续成为热议焦点（评论 106 条）。社区强烈呼吁官方支持 Linux 和 Windows 平台的桌面客户端，以补齐目前仅支持 macOS/iOS/Android 的缺口。
- **安全审批机制**：Issue [#10659](https://github.com/openclaw/openclaw/issue/10659)（评论 13 条）提出“掩码密钥”功能，要求 Agent 能够使用 API Key 但无法查看原始值，防止 Prompt 注入攻击窃取凭证，反映了用户对企业级安全管控的迫切需求。
- **模型推理超时配置**：Issue [#68596](https://github.com/openclaw/openclaw/issue/68596)（评论 13 条）针对 DeepSeek-R1 等长推理模型触发流式看门狗（30s 超时）的问题，呼吁提供可配置的超时阈值，反映了用户对接入新一代慢速推理模型的兼容性需求。

## 5. Bug 与稳定性
今日报告了多个影响核心功能的严重 Bug：
- **P1 严重：Codex App-Server 连接中断**：Issue [#86214](https://github.com/openclaw/openclaw/issue/86214) 报告在处理大型日志或图像请求时，客户端连接会在轮次中途关闭，导致无响应。目前已有相关修复 PR [#86216](https://github.com/openclaw/openclaw/pull/86216) 正在处理陈旧线程绑定问题。
- **P1 严重：Telegram 消息丢失**：Issue [#80520](https://github.com/openclaw/openclaw/issue/80520) 指出 Telegram 消息被静默丢弃，虽然 Gateway 收到了消息，但未调用发送 API，用户完全收不到回复。
- **P2 回归：控制 UI Raw 模式禁用**：Issue [#59330](https://github.com/openclaw/openclaw/issue/59330) 报告自 3.31 版本起，配置编辑器的 Raw 模式被强制禁用，导致无法编辑原始配置文件，原因是配置注入逻辑引入了未定义的键。
- **P2 安全：SSRF 防御误伤本地服务**：Issue [#81249](https://github.com/openclaw/openclaw/issue/81249) 指出开启代理后，无法连接本地 Ollama 嵌入服务，因为 SSRF 防御清空了 `NO_PROXY` 环境变量。

## 6. 功能请求与路线图信号
- **安全沙箱与权限**：Issue [#6731](https://github.com/openclaw/openclaw/issue/6731) 提议引入 Rust 风格的安全/不安全模式，建议在沙箱中运行以防止内存泄漏或未定义行为，这与当前的 Policy Overlay 架构重构（PR #85817）方向一致，预计未来版本将加强沙箱隔离能力。
- **Android 预编译包**：Issue [#9443](https://github.com/openclaw/openclaw/issue/9443) 请求提供预编译的 Android APK，以便普通用户更便捷地部署。这响应了跨平台客户端的需求（Issue #75）。
- **动态模型发现**：Issue [#10687](https://github.com/openclaw/openclaw/issue/10687) 要求支持 OpenRouter 等动态模型目录，摆脱静态模型列表的限制。这是一个长期需求，随着模型迭代加速，预计将被纳入路线图。

## 7. 用户反馈摘要
- **可靠性痛点**：用户在使用 Telegram/Discord 等频道时，对“消息丢失”和“无响应”极其敏感（Issue #80520, #86184），认为这严重损害了对 Agent 的信任度。
- **安全焦虑**：多位用户表达了对 API Key 泄露的担忧，希望能够限制 Agent 对敏感凭证的读取权限（Issue #10659, #45740）。
- **长推理模型兼容性差**：随着 DeepSeek-R1/Kimi 等推理模型的使用，默认的 30 秒流式超时已成为阻碍，用户感到“未被支持”（Issue #68596）。

## 8. 待处理积压
- **Issue #75 (Linux/Windows Apps)**：自 2026 年初创建至今未解决，评论数极高，是长期未响应的首要需求。
- **Issue #10659 (Masked Secrets)**：安全相关的高优先级请求，目前仍处于 Open 状态，建议维护者优先评估。
- **Issue #58514 (Google Chat Space 消息忽略)**：该 Bug 导致群组消息被忽略，影响多用户协作场景，长期未修复。

---

## 横向生态对比

# 2026-05-25 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
今日开源 AI 智能体生态呈现出**架构深水区与稳定性攻坚**的显著特征。头部项目（如 OpenClaw、Hermes Agent）正处于重构期，通过重写底层运行时或引入插件架构来换取长期的扩展性，但短期内面临严重的 PR 积压与稳定性挑战（如消息丢失、内存泄漏）。与此同时，安全性（API Key 掩码、沙箱逃逸）与长推理模型适配（DeepSeek-R1 超时处理）已成为全行业的共同技术痛点。腰部项目（如 Moltis、LobsterAI）则在细分领域展现出极高的交付效率，多智能体协作与精细化权限控制成为新的竞争高地。

## 2. 各项目活跃度对比

| 项目名称 | Issues 动态 | PRs 动态 | 版本发布 | 健康度评估 | 核心状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500+ | 500+ | v2026.5.24-beta.2 | ⚠️ 中等 | 架构重构，高互动高积压，稳定性承压 |
| **NanoBot** | 6 | 115 | 无 | ⚠️ 中等 | 研发密集，PR 积压严重 (108 pending) |
| **Zeroclaw** | 50 | 50 | 无 | 🔴 低 | 高输入低产出，严重 Bug 未决，配置信噪比低 |
| **Hermes Agent**| 50 | 50 | 无 | ⚠️ 中等 | 快速迭代，PR 积压明显 (46 pending)，多提供商兼容 |
| **PicoClaw** | 6 | 10 | Nightly | 🟢 良好 | 聚焦移动端与稳定性，修复启动崩溃 |
| **NanoClaw** | 1 | 8 | 无 | 🟢 良好 | 中等活跃，修复消息路由 Bug |
| **NullClaw** | 1 | 1 | 无 | 🟢 健康 | 低频高质量，核心架构去依赖化 |
| **IronClaw** | - | 50 | 无 | 🟡 观察中 | 安全漏洞修复中，重构期，发布滞后 |
| **LobsterAI** | 0 | 25 | 无 | 🟢 健康 | 高合并密度，子智能体架构成熟化 |
| **Moltis** | 8 (全关) | 10 (全关) | 无 | 🟢 极佳 | 零积压，即时响应，架构调整迅速 |
| **CoPaw** | 16 | 11 | 无 | 🟢 良好 | 侧重前端体验与数据安全，响应快 |
| **EasyClaw** | 0 | 0 | v1.8.15 | 🟢 稳定 | 低互动，聚焦企业客服场景交付 |

> *注：健康度评估基于 Issue/PR 处理比例、Bug 严重程度及社区反馈时效。*

## 3. OpenClaw 在生态中的定位

作为生态中的**核心参照项目**，OpenClaw 展现出"大而全"的平台化特征：
*   **体量优势**：单日 500+ 的 Issues/PRs 活跃度远超其他项目，显示出庞大的用户基数与社区活跃度。
*   **技术路线差异**：相比 NullClaw 的"轻量化原生"路线或 Hermes Agent 的"插件化兼容"路线，OpenClaw 正激进地推进**架构内部化**（移除 Pi 依赖，自研运行时），试图构建完全自主可控的 AGI 操作系统。
*   **优势与痛点**：其优势在于多渠道覆盖广，痛点在于**稳定性治理**。今日 Telegram 消息丢失、内存泄漏等 P1 级 Bug，以及社区对桌面端的强烈呼吁，反映出其在追求架构先进性的同时，基础体验仍需夯实，这与 Moltis 的"零积压"和 CoPaw 的"体验优化"形成对比。

## 4. 共同关注的技术方向

1.  **长推理模型适配**
    *   **涉及项目**：OpenClaw, CoPaw, LobsterAI, Hermes Agent。
    *   **诉求**：随着 DeepSeek-R1/Kimi 等模型的普及，默认的流式超时（30s）和 UI 解析成为瓶颈。OpenClaw 需配置超时阈值，CoPaw 需适配 Think 标签解析，LobsterAI 已先行支持 Thinking Block 展示。**"思考过程可视化"与"长连接稳定性"成为标配需求。**

2.  **安全沙箱与权限细粒度**
    *   **涉及项目**：OpenClaw, Moltis, IronClaw, PicoClaw。
    *   **诉求**：防止 Prompt 注入窃取密钥和沙箱逃逸是焦点。OpenClaw 社区呼吁掩码密钥，Moltis 已修复环境变量泄露给 LLM 的漏洞，IronClaw 正在重构审计通道，PicoClaw 正在调整安全守卫逻辑。**"最小权限原则"正在从配置向运行时强制转变。**

3.  **记忆系统的精细化治理**
    *   **涉及项目**：NullClaw, NanoBot, CoPaw。
    *   **诉求**：简单的 RAG 已无法满足需求。NullClaw 用户要求控制召回粒度，CoPaw 探索记忆总结机制，NanoBot 重构 Dream System。记忆系统正从"能存能取"向"可配置召回策略"演进。

## 5. 差异化定位分析

| 维度 | 架构理念 | 目标用户 | 竞争壁垒 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 全栈 AGI OS，自研运行时 | 开发者、极客、多平台重度用户 | 多渠道接入、架构自主化 |
| **Hermes Agent** | 连接器/网关，多模型适配 | 需要统一接入多 LLM 的用户 | 插件生态、模型兼容性 |
| **LobsterAI** | 可视化协作，多智能体编排 | 复杂工作流构建者 | 子智能体持久化、Deep Thinking UI |
| **Moltis** | 敏捷、安全、企业级 | 注重稳定与安全的商业用户 | 零积压维护、快速安全响应 |
| **EasyClaw** | 场景化垂直应用 | 企业客服场景 | 会话流转逻辑、业务集成 |

## 6. 社区热度与成熟度

*   **快速迭代/青春期**：
    *   **OpenClaw, Zeroclaw**：互动极高，但积压严重，Bug 频发。社区处于功能爆发期，架构正经历阵痛（如 OpenClaw 去 Pi 依赖），适合敢于尝鲜的极客用户。
    *   **Hermes Agent, NanoBot**：研发活跃，PR 堆积量大。显示出核心团队正在憋大招（如 NanoBot 的 Dream System），但社区反馈响应滞后。

*   **质量巩固/成熟期**：
    *   **Moltis, NullClaw, LobsterAI**：活跃度适中，但代码质量高，Bug 修复快，架构清晰。显示出项目已度过野蛮生长期，正步入精细化运营阶段，适合追求稳定性的开发者。

## 7. 值得关注的趋势信号

1.  **"静默失败"是用户体验最大杀手**：
    多个项目（Zeroclaw, NanoClaw, CoPaw）报告了消息静默丢弃、任务静默失败或配置不生效的问题。这表明 AI Agent 的**可观测性**已成为下一阶段的竞争核心。用户对"无响应"或"无报错"的容忍度极低，显式的错误反馈和审计日志将比功能堆砌更重要。

2.  **"慢速思考"倒逼基础设施升级**：
    DeepSeek-R1 等推理模型引发的流式超时、UI 渲染问题，揭示了现有 Agent 框架多为"快思考"设计。未来的 Agent 架构必须支持**长生命周期任务**、异步中断恢复及思考过程的流式可视化（如 LobsterAI 的做法）。

3.  **多智能体协作向"可视化"演进**：
    LobsterAI 合并的 Subagent 可视化 PR 指明了方向——多智能体不再只是后端的代码逻辑，前端需要提供类似"进程管理器"的界面来监控子 Agent 的状态、内存和工具调用，这对复杂任务编排至关重要。

4.  **安全合规从"配置"转向"运行时"**：
    IronClaw 的审计绕过修复和 Moltis 的环境变量隔离表明，单纯靠配置文件限制 Agent 行为已不足够。Agent 框架正在引入**运行时强校验**和**审计不可变日志**，以应对日益复杂的工具调用链风险。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-25)

## 1. 今日速览
NanoBot 项目今日呈现**高研发活跃度、低发布频率**的典型开发迭代特征。过去 24 小时内，项目经历了大规模的代码整合与重构，PR 更新量高达 115 条，显示出核心团队正为下一个重要版本进行密集的功能积累与架构优化。社区方面，Issues 活跃度适中，共有 6 条更新，其中包含 2 个新提交的 Bug 报告。值得注意的是，Dream System 的架构重构和 Agent 安全护栏成为今日开发的焦点。整体来看，项目处于稳健的快速迭代期，但大量的 Pending PR（108 条）提示维护者需关注代码审查的积压情况。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日项目核心进展集中在**架构重构**与**稳定性修复**两方面，共有 7 个 PR 被合并或关闭：

*   **核心架构优化**：PR #3990 提出了对 Dream System 的重大重构，计划将原本的两阶段内存合并流程简化为单阶段。此举旨在提升 Agent 的自进化效率，引入了更先进的 SNIP/MECE 提示词策略。虽然目前处于 Open 状态，但其作为核心架构变动，标志着项目在长期记忆与自我学习机制上的深度探索。
*   **Bug 修复**：Issue #3980 关于 `tool_call_id` 不一致的 Bug 已关闭，修复了与 OpenAI 兼容 API（如 GLM-4.7、Kimi 2.6）交互时的关键兼容性问题，提升了第三方模型接入的稳定性。
*   **功能增强**：Issue #3969（spawn 工具支持 temperature 参数）已关闭，意味着子代理现在可以独立配置采样温度，这将极大提升多 Agent 协作中不同任务（如精确任务 vs 创意任务）的执行效果。

## 4. 社区热点
今日社区讨论与关注焦点如下：

*   **[Issue #3995] PowerShell 终端严重刷屏问题**
    *   **链接**: [HKUDS/nanobot Issue #3995](https://github.com/HKUDS/nanobot/issues/3995)
    *   **分析**: 用户报告在 PowerShell 环境下，Agent 的思考流式输出存在渲染异常，导致终端界面严重刷屏。这是一个影响核心用户体验的 P0 级 UI/UX 问题，直接阻碍了 Windows 用户的正常使用，急需官方修复。
*   **[Issue #3973] Dream System 的“饥饿”与实时学习缺失**
    *   **链接**: [HKUDS/nanobot Issue #3973](https://github.com/HKUDS/nanobot/issues/3973)
    *   **分析**: 该 Issue 深入探讨了 Agent 自我进化机制的核心痛点，指出当前系统过度依赖 `history.jsonl`，缺乏实时学习新知识的能力（Hunger Problem）。这反映了高级用户对 Agent 智能化水平的高期待，可能与正在进行的 PR #3990 重构工作产生共鸣。
*   **[PR #2509] 多 Agent 系统自动路由**
    *   **链接**: [HKUDS/nanobot PR #2509](https://github.com/HKUDS/nanobot/pull/2509)
    *   **分析**: 该 PR 提出构建多 Agent 系统，根据用户意图自动路由到特化的子 Agent。这是社区高度期待的功能，标志着 NanoBot 从“单核智能”向“多专家协作”进化的关键一步。

## 5. Bug 与稳定性
今日新增/活跃的 Bug 报告显示项目在终端渲染和多模型兼容性上存在短板：

1.  **[高严重度] PowerShell 流式输出异常 (Issue #3995)**
    *   现象：流式响应在 PowerShell 中强制换行并重复打印，导致终端不可用。
    *   状态：Open，暂无关联 Fix PR。
2.  **[中严重度] Anthropic Provider 兼容性问题 (Issue #3993)**
    *   现象：Anthropic API 要求所有 content block 声明 type，当前代码在处理 bare dict 时可能报错。
    *   状态：Open，建议将非标准块强制转换为 text block。
3.  **[已修复] tool_call_id 不一致 (Issue #3980)**
    *   现象：在使用部分第三方模型（如 Kimi 2.6）时，Trace 记录的 ID 不匹配。
    *   状态：Closed。

## 6. 功能请求与路线图信号
结合今日 Issues 与活跃 PR，释放出以下明确的路线图信号：

*   **安全与护栏机制**:
    *   **需求**: Issue #3986 提出通用工具级循环检测与速率限制，防止 Agent 陷入“无效重试”死循环。
    *   **进展**: 现有 PR #2374 (ToolGuard 中间件) 和 PR #2414 (Tirith 命令扫描) 正在构建底层安全能力。预计这些安全机制将被整合进下一版本，作为 Agent 自主运行的“刹车系统”。
*   **多模态与语音交互**:
    *   **需求**: 用户对语音交互体验要求提升（如 Issue #3995 提及的输出体验）。
    *   **进展**: PR #819 (Speech System) 和 PR #2143 (QQ 语音解码) 持续活跃，表明多模态交互（特别是语音输入输出）是项目重点投入方向。
*   **配置灵活性**:
    *   **需求**: 用户希望更灵活地配置多后端和子代理参数。
    *   **进展**: PR #2198 (多重自定义配置) 和 PR #2368 (配置化子代理) 正在解决这一痛点，未来版本将支持更细粒度的 Agent 配置管理。

## 7. 用户反馈摘要
从 Issue 评论与描述中提炼出以下用户画像与痛点：

*   **Windows 用户体验受损**: Issue #3995 反映了 Windows 用户（尤其是 PowerShell 用户）在使用体验上的严重割裂感。流式输出的 Bug 表明项目在跨平台终端适配上仍有盲区。
*   **第三方模型接入需求强烈**: Issue #3980 和 #3969 涉及 GLM、Kimi 以及 Anthropic，说明用户并非只使用 OpenAI 模型，而是倾向于利用 NanoBot 作为统一网关接入多种 LLM 后端。
*   **对 Agent “死循环”感到沮丧**: Issue #3986 详细描述了模型反复执行失败命令的行为，用户迫切需要更智能的“异常恢复”或“主动停止”机制，而非无限制的资源消耗。

## 8. 待处理积压
以下重要 PR/Issues 长期未获最终合并或关闭，建议维护者优先关注：

*   **[PR #819] Speech System**: 自 2026-02-18 开启，已停滞超过 3 个月。该功能对多模态体验至关重要，但可能存在架构整合难点。
    *   链接: [HKUDS/nanobot PR #819](https://github.com/HKUDS/nanobot/pull/819)
*   **[PR #2509] Multi-agent System**: 自 3 月开启，是实现 Agent 自动路由的关键功能，目前处于 Open 状态，需推进 Review 进度。
    *   链接: [HKUDS/nanobot PR #2509](https://github.com/HKUDS/nanobot/pull/2509)
*   **[PR #1934] Event-driven Hook System**: 自 3 月中旬开启，涉及核心事件处理机制，对扩展性影响巨大，需避免长期悬而未决导致代码冲突。
    *   链接: [HKUDS/nanobot PR #1934](https://github.com/HKUDS/nanobot/pull/1934)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 - 2026-05-25

## 1. 今日速览
Zeroclaw 项目今日呈现高活跃度与高积压并存的状态。过去24小时内 Issues 更新量达 50 条（新开/活跃 47 条），PR 更新 50 条，但仅有 3 个 Issue 被关闭，6 个 PR 被合并或关闭，显示出维护者处理速度滞后于社区输入速度。目前暂无新版本发布。重点动向包括针对 Cron 任务、MCP 工具过滤及内存策略架构的重磅修复与重构，同时社区对多渠道接入（Mastodon, Twilio）和企业级数据库支持的讨论热度上升。整体来看，项目正处于功能扩展期，但稳定性（尤其是 Provider 兼容性和配置有效性）面临挑战。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 6 个 PR 被处理（含合并/关闭），主要集中在修复关键 Bug 和完善架构：

*   **架构重构与扩展**：
    *   PR [#6907](https://github.com/zeroclaw-labs/zeroclaw/pull/6907) 引入了 `MemoryStrategy` trait，旨在解耦高级内存生命周期策略与底层 CRUD 操作，为后续内存管理机制的灵活性打下基础。
    *   PR [#6893](https://github.com/zeroclaw-labs/zeroclaw/pull/6893) 提出了大型功能更新，支持 Postgres、Oracle、MySQL、Db2 等多数据库会话后端，旨在解决多智能体集群的会话状态共享问题，目前处于待合并状态。

*   **关键修复**：
    *   PR [#6746](https://github.com/zeroclaw-labs/zeroclaw/pull/6746) 修复了 WASM 插件安装路径与运行时扫描路径不一致的问题，解决了插件不可见的严重痛点。
    *   PR [#6892](https://github.com/zeroclaw-labs/zeroclaw/pull/6892) 恢复了旧版 Channel 启动回退机制，修复了 v0.8 版本中因 Agent Channel 绑定配置为空导致无法启动的回归问题。
    *   PR [#6897](https://github.com/zeroclaw-labs/zeroclaw/pull/6897) 修复了 Cron 任务交付失败时的状态持久化问题，防止错误地标记为 "ok"。

*   **构建优化**：
    *   PR [#6866](https://github.com/zeroclaw-labs/zeroclaw/pull/6866) 支持选择性构建 Channel 组件，允许更精简的二进制文件生成。

## 4. 社区热点
今日社区讨论主要集中在以下几个高互动 Issue，反映了用户对工作流治理和底层工具可靠性的强烈诉求：

*   **RFC: Work Lanes 与 Board Automation** ([#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808))
    *   **热度**：评论 6 条。
    *   **分析**：该提案旨在优化项目治理流程，通过轻量级 PR 通道和看板自动化来减轻维护者的手动管理负担。这表明随着项目规模扩大，现有的 Issue/PR 管理模式已成为瓶颈，社区亟需自动化工具介入。

*   **MCP 工具过滤失效与延迟加载冲突** ([#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699))
    *   **热度**：评论 6 条。
    *   **分析**：用户报告 `tool_filter_groups` 配置对真实 MCP 工具无效，这是一个 P1 级别的严重 Bug。这反映了当前 MCP（Model Context Protocol）集成中存在的前缀匹配与配置解析逻辑缺陷，直接影响到工具链的安全性和可用性。

*   **Channel 配置缺失与 Cron 输出路由问题** ([#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856), [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647))
    *   **热度**：评论 5 条 / 4 条。
    *   **分析**：用户在升级或使用过程中发现 Schema v3 缺少 `show_tool_calls` 配置，以及 Cron 任务无法输出到 Telegram。这暴露了版本迭代过程中配置 Schema 的向后兼容性不足以及异步任务路由逻辑的不稳定。

## 5. Bug 与稳定性
今日报告了大量 Bug，其中部分已由社区提交修复 PR：

### 严重等级 (P1 / High Risk)
1.  **Gateway 无法连接 Postgres** ([#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472))：运行时发生 Panic，错误提示 "Cannot start a runtime from within a runtime"，阻塞了使用 Postgres 作为存储后端的用户。**状态**：In-progress。
2.  **MCP stdio 子进程泄漏** ([#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903))：开启心跳检测时，每个 tick 会产生一个孤儿进程，长时间运行将导致系统资源耗尽。**状态**：Accepted。
3.  **Gemini Provider 400 错误** ([#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302))：历史记录序列化错误，Assistant tool_call 出现在 User turn 之前。**状态**：In-progress。
4.  **Web_fetch 安全绕过** ([#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122))：`allowed_private_hosts` 对解析为私有 IP 的域名无效，存在 SSRF 风险。**状态**：Accepted。

### 中等等级 (P2 / Medium Risk)
1.  **OpenAI Provider 超时配置无效** ([#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723))：`timeout_secs` 配置被忽略，硬编码为 120 秒。
2.  **Ollama Provider 工具调用失败** ([#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962))：需要工具支持时抛错，阻塞会话。**已有进展**：社区正积极讨论解决方案。

## 6. 功能请求与路线图信号
*   **企业级数据库支持**：PR [#6893](https://github.com/zeroclaw-labs/zeroclaw/pull/6893) 显示项目正在向企业级场景靠拢，引入 Oracle/Db2 等传统数据库支持，这可能预示着 Zeroclaw 将在商业部署场景发力。
*   **多渠道融合**：多个 Feature Request 处于开发中状态，包括 Mastodon ([#6423](https://github.com/zeroclaw-labs/zeroclaw/issues/6423))、Twilio SMS ([#6427](https://github.com/zeroclaw-labs/zeroclaw/issues/6427)) 和 Rocket.Chat ([#6435](https://github.com/zeroclaw-labs/zeroclaw/issues/6435))。这表明项目致力于成为全渠道 AI Agent 接入层。
*   **内存架构演进**：PR [#6907](https://github.com/zeroclaw-labs/zeroclaw/pull/6907) 的 MemoryStrategy 重构与 Issue [#4760](https://github.com/zeroclaw-labs/zeroclaw/issues/4760)（使用 tool-calling 进行 memory consolidation）相呼应，表明项目正在重构核心记忆模块，使其更具扩展性。

## 7. 用户反馈摘要
*   **配置系统信噪比低**：用户普遍反映许多配置项（如 `rerank_enabled`, `timeout_secs`, `show_tool_calls`）虽然能解析且文档中有记录，但实际并未生效或被代码忽略，导致调试困难。
*   **Provider 兼容性痛点**：在 Ollama、Gemini、Z.AI (zai-cn) 等非 OpenAI 原生 Provider 上遇到较多阻塞性问题（如上下文截断、消息格式错误），显示出项目对非主流 LLM 后端的兼容性测试不足。
*   **安全与运维担忧**：Issue [#5810](https://github.com/zeroclaw-labs/zeroclaw/issues/5810) 指出 OTP 安全配置静默接受未知操作名，以及 Issue [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) 的进程泄漏问题，表明生产环境下的健壮性仍需加强。

## 8. 待处理积压
*   **长期停滞的高优先级 Issue**：
    *   Issue [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) (Ollama Provider 调用失败)：自 4 月 21 日创建，至今未解决，严重影响本地模型用户。
    *   Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) (代码审计)：涉及 153 个提交的丢失恢复，标记为 `help wanted` 且 `risk: high`，需要核心维护者关注。
*   **PR 审核瓶颈**：目前有 **44 个 PR 处于待合并状态**，包括关键的安全修复和架构更新。建议维护者优先审核标记为 `priority:p1` 或 `risk: high` 的 PR，如 PR [#6882](https://github.com/zeroclaw-labs/zeroclaw/pull/6882) (Runtime 媒体标记处理修复)。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-25)

## 1. 今日速览
Hermes Agent 项目今日保持**极高的社区活跃度**，过去24小时内 Issues 与 PR 更新数均达到 50 条，显示出项目正处于快速迭代期。尽管今日无新版本发布，但社区修复了包括 xAI OAuth 权限、Claude CLI 集成在内的多个关键 Bug，并针对 Windows 平台兼容性和 Kanban 模块进行了稳定性修复。值得关注的是，待合并 PR 数量达到 46 条，积压迹象明显，主要集中在插件扩展、新提供商支持和代码重构方面，建议维护者关注 Review 节奏。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 **4 个 PR 合并/关闭**，**15 个 Issue 被关闭**，主要推进了以下方面：

*   **关键修复**：PR #29287 修复了 Telegram 适配器中严重的会话劫持回归问题，防止新 DM 被错误路由到旧会话；Issue #26847 和 #29125 分别解决了 xAI OAuth 权限校验错误和 Claude CLI 配置失败问题，改善了多模型提供商的接入体验。
*   **稳定性提升**：PR #31827 改进了 Discord 线程移交逻辑；Issue #30768 修复了 Windows 平台上 `/reset` 和 `/new` 命令导致的 TUI 冻结问题（P1 级别）。
*   **代码质量**：PR #31825、#31826、#31828 等一系列重构 PR 合并，优化了代码风格（Ruff auto-fix），提升了代码库的可维护性。

## 4. 社区热点
今日讨论最活跃的议题集中在**多提供商兼容性**与**记忆系统扩展**：

*   **[Issue #26847](https://github.com/NousResearch/hermes-agent/issues/26847)** (评论 33 条)：xAI OAuth 登录在标准 SuperGrok 订阅下返回 403 错误。社区热烈讨论后端鉴权逻辑与文档不一致的问题，反映出用户对分级订阅支持的高度关注。
*   **[Issue #29125](https://github.com/NousResearch/hermes-agent/issues/29125)** (评论 24 条)：Hermes 无法通过 Claude CLI 工作。作为核心竞品/集成方，Anthropic 模型的接入稳定性一直是用户痛点。
*   **[Issue #6323](https://github.com/NousResearch/hermes-agent/issues/6323)** (评论 20 条)：请求添加 `mempalace` 外部记忆模块。用户强烈希望能突破上下文窗口限制，实现跨会话的长期记忆，这是 Agent 走向自主化的关键需求。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，部分已有修复方案：

*   **P1 严重**：
    *   **[Issue #30768](https://github.com/NousResearch/hermes-agent/issues/30768)** [CLOSED]: Windows 下 `/reset` 命令导致 TUI 冻结，需强制终止进程。（已修复）
*   **P2 中等**：
    *   **[Issue #31435](https://github.com/NousResearch/hermes-agent/issues/31435)** [OPEN]: 插件工具返回 Dict 类型导致上游 API 报错 400，急需修复以符合 OpenAI 规范。
    *   **[Issue #24186](https://github.com/NousResearch/hermes-agent/issues/24186)** [OPEN]: 更新后 Kanban 模块加载失败 (401 Unauthorized)，影响任务管理功能。
    *   **[Issue #31771](https://github.com/NousResearch/hermes-agent/issues/31771)** [OPEN]: QQBot 适配器 WebSocket 重连失败导致 CPU 100% 死循环。
    *   **[Issue #22990](https://github.com/NousResearch/hermes-agent/issues/22990)** [OPEN]: Copilot 模型选择器使用静态列表，导致用户无法使用最新/特权模型。
*   **已有修复 PR**：
    *   [PR #31845](https://github.com/NousResearch/hermes-agent/pull/31845): 修复 xAI OAuth 辅助任务（如标题生成）失败的问题。
    *   [PR #31821](https://github.com/NousResearch/hermes-agent/pull/31821): 修复 Telegram 流式响应传输不完整的问题。

## 6. 功能请求与路线图信号
今日涌现多个高质量功能 PR 与请求，预示下一版本可能在**提供商生态**与**性能优化**上有大动作：

*   **新提供商支持**：[PR #31820](https://github.com/NousResearch/hermes-agent/pull/31820) 提议新增 Groq 作为内置提供商，并支持模型发现功能；[Issue #17923](https://github.com/NousResearch/hermes-agent/issues/17923) 请求支持 OpenRouter 免费模型过滤。
*   **性能与上下文**：[PR #31847](https://github.com/NousResearch/hermes-agent/pull/31847) 提出 TOON-lite 压缩编码，旨在系统提示词中通过去除结构冗余来提升信息密度；[Issue #29818](https://github.com/NousResearch/hermes-agent/issues/29818) 请求支持 Gemini 原生上下文缓存以降低成本。
*   **工具链集成**：[PR #31844](https://github.com/NousResearch/hermes-agent/pull/31844) 计划引入 Cursor SDK 委派插件，允许 Hermes 将编码任务委派给 Cursor 运行时，这将是 Agent 协同工作流的重要突破。
*   **企业级特性**：[Issue #31802](https://github.com/NousResearch/hermes-agent/issues/31802) 请求增加可配置的每分钟速率限制 (RPM)，以防止 API 返回 429 错误。

## 7. 用户反馈摘要
*   **痛点**：用户对 **OAuth 鉴权** 的敏感度极高，尤其是不同订阅层级导致的隐蔽权限错误（如 #26847）；**额度消耗** 也是关注焦点（#27228 提到 xAI 开发 15 分钟消耗 7% 月度额度）；Windows 平台的兼容性依然存在细节问题。
*   **场景**：用户越来越倾向于将 Hermes 作为统一前端接入多种后端（Claude, Grok, OpenAI, Groq），对**统一配置体验**和**实时模型目录同步**有强烈需求。
*   **满意点**：社区对 `mempalace` 和 `Cursor SDK` 等扩展性提案反应积极，表明用户认可 Hermes 的插件化架构设计。

## 8. 待处理积压
当前 **PR 待合并数量高达 46 个**，建议维护者优先处理以下积压：

*   **高危 Bug 修复**：[PR #30997](https://github.com/NousResearch/hermes-agent/pull/30997) (Jira Webhook 签名校验) 和 [PR #18544](https://github.com/NousResearch/hermes-agent/pull/18544) (Dashboard 会话恢复) 涉及核心功能稳定性，建议尽快合并。
*   **长期 Issue**：[Issue #3002](https://github.com/NousResearch/hermes-agent/issues/3002) (NeuTTS 安装失败) 自 3 月报告至今未解决，影响新用户体验；[Issue #7484](https://github.com/NousResearch/hermes-agent/issues/7484) (会话 ID 可预测性安全问题) 需维护者确认风险评估。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-25)

## 1. 今日速览
PicoClaw 项目今日保持高活跃度开发状态，共有 10 个 PR 更新和 6 个 Issue 更新。项目重点聚焦于系统稳定性修复与架构增强，特别是针对 PID 文件处理导致的崩溃循环问题进行了关键修复。社区方面，用户对本地模型连接和工具执行安全策略的反馈较为集中。今日发布了最新的 Nightly 构建版本，包含了多项尚未合并到主分支的社区贡献代码。

## 2. 版本发布
- **nightly: v0.2.9-nightly.20260525.ab6d3946**
  - **类型**: Nightly Build (自动构建)
  - **说明**: 这是一个自动化构建版本，包含最新的代码提交，可能存在不稳定性，建议测试人员谨慎使用。
  - **变更范围**: 对比 v0.2.9 版本，涵盖了主分支的最新进展。
  - **链接**: [Release Page](https://github.com/sipeed/picoclaw/releases)

## 3. 项目进展
今日共有 **2 个 PR 被合并/关闭**，主要解决了关键功能回归和安全性问题：

- **[MERGED] PR #2938**: 修复了 Cron 工具执行命令时因缺少 `action` 参数导致静默失败的问题，这是一个重要的功能回归修复。
  - 链接: [sipeed/picoclaw PR #2938](https://github.com/sipeed/picoclaw/pull/2938)
- **[MERGED] PR #2759**: 修复了 Seahorse 检索工具的作用域问题，将搜索范围限定在当前会话，防止猜测消息 ID 跨会话泄露数据，提升了安全性。
  - 链接: [sipeed/picoclaw PR #2759](https://github.com/sipeed/picoclaw/pull/2759)

此外，还有 **8 个活跃 PR** 正在审核中，重点推进以下领域：
- **架构增强**: PR #2937 提出了内部 Agent 协作总线架构，旨在实现持久的智能体间通信。
- **稳定性修复**: PR #2813 针对 PID 单例检查崩溃问题提交了修复，等待合并。
- **生态支持**: PR #2902 增加了 Android Termux 环境指南，PR #2935 增加了繁体中文支持。

## 4. 社区热点
今日讨论最活跃的 Issue 集中在用户接入与工具安全策略：

- **Issue #28 [OPEN]**: 用户请求更便捷的 LM Studio 连接方式。
  - **热度**: 👍 2, 评论 20
  - **分析**: 用户特别是 Android 平台用户在连接本地模型时存在门槛，社区正在讨论简化配置流程的必要性。
  - 链接: [sipeed/picoclaw Issue #28](https://github.com/sipeed/picoclaw/issues/28)
- **Issue #1042 [OPEN]**: `exec` 工具的安全守卫机制过于严格。
  - **热度**: 👍 2, 评论 13
  - **分析**: 用户报告在执行简单的 `curl` 命令时被误判为路径穿越攻击，反映出沙箱安全机制与实际使用便利性之间的冲突。
  - 链接: [sipeed/picoclaw Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)

## 5. Bug 与稳定性
今日报告的关键 Bug 主要涉及启动崩溃和 UI 显示问题：

- **[High] Issue #2720**: Gateway 启动崩溃循环。
  - **描述**: 当 PID 文件被其他无关进程（如 systemd-resolved）复用时，程序误判导致无法启动。
  - **状态**: **已有修复 PR #2813**，正在等待合并。
  - 链接: [sipeed/picoclaw Issue #2720](https://github.com/sipeed/picoclaw/issues/2720)
- **[Medium] Issue #2796**: 历史记录 UI 显示缺陷。
  - **描述**: 包含多条用户消息的对话在历史记录中仅显示最后一条消息。
  - **状态**: Open，待处理。
  - 链接: [sipeed/picoclaw Issue #2796](https://github.com/sipeed/picoclaw/issues/2796)

## 6. 功能请求与路线图信号
从 Issue 和 PR 动态来看，项目正朝以下方向演进：

- **多智能体协作**: PR #2937 正在构建内部 Agent 协作总线，表明项目正从单一助手向多智能体协同工作流转型。
- **细粒度权限控制**: Issue #2837 的关闭可能与相关功能实现有关，结合 PR #2936（自动跳过缺失二进制的技能），显示项目正在优化 Agent 的能力发现与权限管理机制。
- **移动端支持**: 随着Issue #28 中 Android 用户的声音以及 PR #2902 文档的加入，移动端 运行将成为下一个版本的亮点之一。

## 7. 用户反馈摘要
- **接入痛点**: 用户希望降低本地模型（如 LM Studio）的接入难度，特别是在移动设备上，现有的网络配置对非专业用户仍显复杂。
- **安全机制误伤**: 安全沙箱的正则匹配逻辑导致部分合法命令被拦截，用户呼吁调整判定逻辑以减少误报。
- **UI 体验**: 历史消息的显示逻辑（压缩/覆盖）与用户预期不符，用户希望保留完整的对话上下文视图。

## 8. 待处理积压
以下重要 Issue 长期未得到有效推进，建议维护者优先关注：

- **Issue #28**: LM Studio 连接请求，已标记为 Stale（陈旧），但仍有新评论，表明需求强烈。
  - 链接: [sipeed/picoclaw Issue #28](https://github.com/sipeed/picoclaw/issues/28)
- **Issue #1042**: `exec` 工具命令拦截问题，影响基本的命令行工具使用，需尽快调整正则策略。
  - 链接: [sipeed/picoclaw Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-25)

## 1. 今日速览
NanoClaw 项目今日整体活跃度较高，主要集中在代码维护与功能迭代上。过去 24 小时内共有 8 个 PR 更新，其中 3 个已关闭/合并，另有 1 个新 Issue 报告。社区贡献者正在积极解决构建错误、推进 CI 基础设施升级以及优化消息处理逻辑。值得关注的是，今日暴露了一个影响较大的 Bug（`engage_mode='always'` 导致消息丢失），目前尚在待修复状态，建议维护者优先排查。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日项目在代码质量和架构优化方面取得了实质性进展，主要体现在以下已关闭的 Pull Requests：

*   **构建修复与类型安全**：PR #2344 已关闭，修复了 `main` 分支上存在的 TypeScript 编译错误，确保了 `RoutableAgentMessage` 和 `Session` 类型的严格匹配，保障了主分支的构建通过率。
*   **端到端配置提案落地**：PR #1968 已关闭。该 PR 旨在实现“端到端 per-agent 提供商和模型配置”，涉及 5 个提交。该 PR 的关闭标志着该功能方向的决策点（可能是合并或方案调整），结束了长达一个月的审查周期。
*   **管理接口增强**：PR #2604 已关闭，新增了 `GET /admin/agent-activity` 批量端点。此举优化了管理后台的数据获取效率，解决了之前需要逐行请求聊天历史的问题，提升了运维监控能力。

## 4. 社区热点
今日社区活跃点主要集中在功能增强与兼容性修复的讨论上：

*   **[PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346)**：关于“将未知斜杠命令视为普通聊天”的修复。该讨论揭示了当前 Agent SDK 对非标准命令处理的缺陷（静默丢弃），该 PR 试图修正此行为，对改善用户交互体验至关重要。
*   **[PR #2345](https://github.com/nanocoai/nanoclaw/pull/2345)**：关于自动导入 `CLAUDE.role.md` 的功能讨论。这反映了高级用户对多 Agent 场景下上下文精细化管理的强烈需求，希望能根据 Group 自动加载不同的角色设定。

## 5. Bug 与稳定性
今日报告了一个严重级别的 Bug，可能影响核心消息流转：

*   **[严重] 消息静默丢失**：Issue [#2606](https://github.com/nanocoai/nanoclaw/issues/2606) 指出，当配置 `engage_mode='always'` 时，`src/router.ts` 中的 `evaluateEngage()` 函数未能正确处理该模式，导致所有消息被静默丢弃，原因为 `no_agent_engaged`。这是一个数据流层面的阻断性 Bug，目前暂无关联的 Fix PR。
*   **[中等] 命令解析异常**：PR [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) 修复了未知斜杠命令被错误分类导致响应被静默丢弃的问题。该修复已提交待合并。

## 6. 功能请求与路线图信号
从今日的 PR 活动中可以窥见项目近期的演进方向：

*   **权限继承机制**：PR [#2605](https://github.com/nanocoai/nanoclaw/pull/2605) 提出了通过 OneCLI 继承父级 Agent 权限的功能。这表明项目正在加强多层级 Agent 架构的安全性与管理便捷性，可能成为下一版本的重点特性。
*   **平台兼容性优化**：PR [#2607](https://github.com/nanocoai/nanoclaw/pull/2607) 修复了入站消息操作使用平台 ID 的问题，显示出项目对多平台集成（如 Slack/Discord 等 API 适配）的持续投入。
*   **CI/CD 现代化**：PR [#2608](https://github.com/nanocoai/nanoclaw/pull/2608) 提前将 GitHub Actions 升级至 Node 24/v5，以应对 2026 年 6 月的弃用期限，反映了维护者对项目长期健康度的重视。

## 7. 用户反馈摘要
根据 Issues 和 PR 描述提炼出的用户痛点：

*   **配置陷阱**：用户反馈 `engage_mode` 的配置项缺乏校验或逻辑缺失，导致预期行为与实际不符（配置了 'always' 却不生效且无报错），用户期望系统具有更强的容错或提示机制。
*   **静默失败痛点**：多个 Issues/PRs (#2346, #2606) 提及“Silently dropped”（静默丢弃）消息的问题。这表明用户非常反感系统在不报错的情况下忽略消息，显式的错误反馈比静默忽略更符合预期。
*   **管理效率**：管理后台用户希望能通过批量接口快速获取 Agent 活跃状态，反映出运维场景下对实时监控仪表盘的需求。

## 8. 待处理积压
*   **[重要] 消息路由 Bug**：Issue [#2606](https://github.com/nanocoai/nanoclaw/issues/2606) 目前处于 Open 状态且无评论，由于涉及消息丢失，建议维护者尽快响应。
*   **[长期] 功能 PR 积压**：PR [#2345](https://github.com/nanocoai/nanoclaw/pull/2345) 和 [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) 均创建于 5 月 8 日，至今已逾半月仍未合并，建议维护者评估合并进度，避免分支冲突或功能腐烂。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-25)

## 1. 今日速览
NullClaw 项目在过去 24 小时内呈现出“低频次、高质量”的开发维护状态。虽然整体 Issue 和 PR 的更新数量较少（各 1 条），但内容涉及底层架构重构与核心功能优化，显示出维护者正在积极推进代码现代化。社区方面，用户对现有内存检索（RAG）机制的灵活性提出了具体改进需求，表明项目正从功能可用性向精细化配置阶段过渡。整体项目健康度良好，核心代码正在摆脱对外部子进程的依赖。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目取得了一项重要的技术债务清理进展。Pull Request **#881** `refactor(http): remove runtime curl subprocesses` 已关闭。该 PR 移除了运行时对 `curl` 子进程的依赖，转而使用 Zig 语言原生的 `std.http` 封装。这一变更覆盖了 providers、channels、gateway、memory API 等核心路径，标志着 NullClaw 正在构建更自主、更轻量的 HTTP 通信层，预计将显著减少进程开销并提升网络交互的稳定性。

*   **链接**: [nullclaw/nullclaw PR #881](https://github.com/nullclaw/nullclaw/pull/881)

## 4. 社区热点
今日最受关注的讨论是 Issue **#919**。该 Issue 由用户 @weissfl 发起，指出当前系统在处理每一条传入消息时，都会强制执行 FTS5 + BM25 的自动记忆召回，且参数均被硬编码，无法由用户配置。该问题引发了关于性能开销与上下文管理灵活性的讨论，反映出进阶用户希望对 AI 的“记忆唤醒”机制拥有更细粒度的控制权，而非“一刀切”的全局召回。

*   **链接**: [nullclaw/nullclaw Issue #919](https://github.com/nullclaw/nullclaw/issues/919)

## 5. Bug 与稳定性
今日无新增严重 Bug 或崩溃报告。Issue #919 虽被标记为 Feature（功能请求），但其指出的硬编码参数导致的不可控行为，在某些高并发或特定上下文场景下可能引发性能瓶颈或上下文溢出风险，建议维护者关注其潜在的性能影响。

## 6. 功能请求与路线图信号
**精细化 RAG 控制成为新诉求**。
用户在 Issue #919 中请求“允许逐条消息禁用自动记忆召回”。这发出了一个明确的信号：NullClaw 的 RAG（检索增强生成）策略需要从“全自动”向“可配置”演进。结合今日合并的原生 HTTP 重构 PR，项目未来版本可能会在底层 API 稳定后，重点优化消息处理管道，引入类似 `skip_recall` 或 `custom_recall_limit` 的参数配置接口。

*   **相关链接**: [nullclaw/nullclaw Issue #919](https://github.com/nullclaw/nullclaw/issues/919)

## 7. 用户反馈摘要
从 Issue #919 的反馈中可以看出，用户对 NullClaw 的“记忆”功能既爱又恨。痛点在于：
1.  **硬编码限制**：用户无法根据对话场景调整召回数量（默认 5 条）或字节数限制（默认 4000 字节）。
2.  **缺乏开关**：在某些无需历史记忆的即时问答场景中，强制召回增加了不必要的 Token 消耗和延迟。

用户期望能有一个“开关”或更灵活的配置层，让 Agent 能够根据指令动态决定是否需要“回忆”历史数据。

## 8. 待处理积压
目前积压较少，但以下议题值得维护者跟进：

*   **Issue #919 [OPEN]**：自 5 月 18 日创建以来，虽有更新但尚未有明确排期或修复 PR。鉴于该问题涉及核心的消息处理逻辑 `enrichMessageWithRuntime()`，建议优先评估是否纳入下一迭代。
    *   **链接**: [nullclaw/nullclaw Issue #919](https://github.com/nullclaw/nullclaw/issues/919)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-25)

## 1. 今日速览
IronClaw 项目今日保持高活跃度，核心开发重心集中在 **Reborn 架构重构** 与 **工具执行安全性加固**。过去 24 小时内共有 50 个 PR 更新，但仅合并 1 个，显示当前处于大规模功能栈开发与审查阶段，存在一定的合并积压。安全方面，开发者针对 Issue #4017 发现的审计绕过问题迅速响应，发起了系列修复 PR（#4021-#4026），体现了项目对安全漏洞的快速反应能力。此外，社区对 crates.io 版本发布滞后的关注度上升，下游用户受到 CVE 漏洞修复滞后的影响。

## 2. 版本发布
**无新版本发布**。
⚠️ **注意**：Issue #3259 指出 `crates.io` 上的版本 (0.24.0) 严重滞后于 GitHub 发布版本 (0.27.0)，且旧版本包含未修复的 CVE 漏洞，下游依赖方被迫锁定旧版本，亟需维护者发布更新。

## 3. 项目进展
尽管今日合并数量极少，但多个关键功能的开发取得了实质性推进：

*   **安全审计通道修复**：针对 Issue #4017 提出的 "Interactive chat tool calls bypass ToolDispatcher" 严重安全问题，维护者 @zmanian 发起了 5 个层级的修复 PR 栈（#4021, #4023, #4024, #4025, #4026），旨在将所有工具执行路径统一收敛至审计通道，修复进度迅速。
*   **Reborn 架构 - GSuite 集成**：@henrypark133 提交了 GSuite 集成系列的 4 个阶段 PR（#3970-#3973），完成了从文档映射、OAuth 协议辅助到核心处理器的构建，为 Google Calendar/Gmail 的原生支持打下基础。
*   **Reborn 架构 - 子智能体**：子智能体生成机制的设计与实现正在推进中，相关 PR（#3868, #3869, #3870）处于 Draft 阶段，正在完善合约与集成逻辑。

## 4. 社区热点
*   **[Issue #3259] crates.io 发布滞后问题**：用户反馈 GitHub 已发布至 v0.27.0，但 crates.io 仍停留在 v0.24.0，导致下游用户无法获取安全补丁。这是今日用户痛点最集中的 Issue。
*   **[Issue #4017] 工具调度安全绕过**：核心贡献者 @zmanian 指出交互式聊天路径跳过了 `ToolDispatcher` 的审计记录，引发了关于系统安全不变量的深入讨论，直接推动了今日系列修复 PR 的诞生。
*   **[PR #1378] 频道级工具过滤**：该长期 PR 旨在引入按频道过滤 MCP 和内置工具的路由系统，今日仍有活跃更新，反映了多渠道部署对精细权限控制的强烈需求。

## 5. Bug 与稳定性
*   **🔴 严重 - 工具执行审计绕过 (Issue #4017)**
    *   描述：交互式聊天工具执行路径未经过 `ToolDispatcher`，导致缺乏 `ActionRecord` 审计记录和频道工具过滤。
    *   状态：**已有修复 PR** (#4021 - #4026)，正在逐步合并中。
*   **🟠 中等 - HTTP 响应错误导致运行中止 (PR #4022)**
    *   描述：PR #4014 引入回归，导致主机端 HTTP 响应错误意外中止整个 Agent 运行，而非作为可恢复错误处理。
    *   状态：**已有修复 PR** (#4022)。
*   **🟡 低 - 测试环境密钥弹窗 (PR #4027)**
    *   描述：macOS 上运行测试会弹出 Keychain 授权对话框。
    *   状态：**已有修复 PR** (#4027)。
*   **🟡 CI 失败 (Issue #3447)**
    *   描述：Nightly E2E 测试失败，尚未有人认领修复。

## 6. 功能请求与路线图信号
*   **API 契约标准化 (Issue #3953)**：建议为 Gateway、WebUI 等接口增加 OpenAPI/AsyncAPI 规范，提升第三方集成体验。这表明项目正在向标准化、易集成的方向演进。
*   **子智能体架构 (Issue #3798)**：设计文档与相关 PR 显示项目正致力于支持复杂的子智能体协作模式，这是 Reborn 架构的重要特性。

## 7. 用户反馈摘要
*   **依赖更新受阻**：用户 @dacoldest 指出，由于 crates.io 未及时同步最新版本，依赖方被迫使用包含已知漏洞的旧版本（0.24.0），且 wasmtime 28.x 系列存在 CVE 问题，急需维护者发布新版本。
*   **安全性与合规性关注**：从 Issue #4017 的讨论可见，核心用户和贡献者对系统审计踪迹的完整性极为敏感，要求“deny-by-default（默认拒绝）”的安全策略。

## 8. 待处理积压
*   **Issue #3259 (P0)**：**急需处理 crates.io 发布滞后问题**。这直接关系到下游用户的安全与生产环境稳定性，建议维护者优先发布 0.25.0-0.27.0 版本。
*   **PR #1378**：该特性 PR 已开启两个月，涉及多渠道工具过滤，体积较大（XL），建议尽快推进合并以解决多租户场景下的工具隔离需求。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-25)

## 1. 今日速览
LobsterAI 今日呈现出极高的开发活跃度与代码合并密度，过去 24 小时内共有 **25 个 PR 完成更新并关闭**，主要集中在子智能体架构深化与用户体验优化上。项目核心贡献者 @btc69m979y-dotcom 推动了大量功能迭代，显著增强了子智能体的可视化交互能力与模型配置灵活性。虽然无新版本发布，但大量功能性 PR 的合并预示着版本迭代即将完成。此外，项目今日清理了 4 月份遗留的 11 个过期 PR，显示出维护者对看板健康度的积极管理。

## 2. 版本发布
**无新版本发布**。尽管今日有大量功能合并，但尚未形成新的 GitHub Release，建议关注后续版本打包发布。

## 3. 项目进展
今日合并/关闭的 PR 主要围绕 **"子智能体独立化"** 与 **"模型控制精细化"** 两大主线展开，项目整体架构趋于成熟。

*   **子智能体架构全面升级 (核心进展)**：
    *   **独立视图与持久化**：[#2011](https://github.com/netease-youdao/LobsterAI/pull/2011) 实现了子智能体会话的侧边栏树形展示与独立详情页，[#2034](https://github.com/netease-youdao/LobsterAI/pull/2034) 将子智能体会话持久化到 SQLite，实现了本地缓存与即时加载，大幅提升了多智能体协作的可观测性。
    *   **渲染与交互优化**：[#2030](https://github.com/netease-youdao/LobsterAI/pull/2030) 重构了渲染管线，使子智能体复用主会话的渲染组件；[#2027](https://github.com/netease-youdao/LobsterAI/pull/2027) 优化了窗口拖拽与 Mac 端样式，修复了交互细节。
    *   **稳定性修复**：[#2029](https://github.com/netease-youdao/LobsterAI/pull/2029) 与 [#2033](https://github.com/netease-youdao/LobsterAI/pull/2033) 修复了工具调用丢失、重复覆盖及状态同步等关键 Bug，保障了多 Agent 运行的稳定性。

*   **模型能力与配置增强**：
    *   **深度思考支持**：[#2019](https://github.com/netease-youdao/LobsterAI/pull/2019) 新增 Thinking Block 展示，并支持模型自定义参数透传，为接入推理类模型（如 o1/deepseek-r1）做好准备。
    *   **上下文控制**：[#2013](https://github.com/netease-youdao/LobsterAI/pull/2013) 优化了 Context Window 滑块交互，支持吸附与 K/M 简写输入；[#2021](https://github.com/netease-youdao/LobsterAI/pull/2021) 支持套餐模型的自定义上下文窗口配置。

*   **跨平台体验修复**：
    *   [#2020](https://github.com/netease-youdao/LobsterAI/pull/2020) 修复了 Windows 多显示器 DPI 不一致导致的窗口变小问题，提升了跨设备兼容性。

*   **积压 PR 清理**：
    *   关闭了 11 个标记为 `[stale]` 的 4 月份 PR，涵盖设置页交互、定时任务、消息队列等功能，部分修复可能已被后续重构覆盖或不再适用当前架构。

## 4. 社区热点
今日无活跃的 Issues 讨论，评论互动主要集中在刚合并的 PR 中（数据未显示具体评论数）。但从代码合并趋势看，**子智能体相关的功能链路**是当前项目最核心的开发焦点，显示出团队正致力于完善 Agent 协作的可视化与数据闭环。

## 5. Bug 与稳定性
今日修复了多个影响用户体验与系统稳定性的 Bug，按严重程度排序如下：

*   **严重**:
    *   **网关启动崩溃**：[#2026](https://github.com/netease-youdao/LobsterAI/pull/2026) 移除了 Dreaming 配置中不支持的字段，解决了导致 Gateway 启动失败 (`must NOT have additional properties`) 的问题。
    *   **OpenClaw 配置校验失败**：[#1593](https://github.com/netease-youdao/LobsterAI/pull/1593) (旧 PR 关闭) 曾修复过类似的配置字段问题，本次修复进一步巩固了配置兼容性。

*   **中等**:
    *   **子智能体数据覆盖/丢失**：[#2029](https://github.com/netease-youdao/LobsterAI/pull/2029) 修复了相同 Agent ID 导致的数据覆盖及工具调用结果丢失问题。
    *   **Windows 窗口异常**：[#2020](https://github.com/netease-youdao/LobsterAI/pull/2020) 解决了跨 DPI 监视器下窗口尺寸计算错误的问题。

*   **轻微**:
    *   **UI 细节**：[#2027](https://github.com/netease-youdao/LobsterAI/pull/2027) 修复了 Mac 端按钮遮挡与侧边栏切换问题；[#2013](https://github.com/netease-youdao/LobsterAI/pull/2013) 优化了输入交互体验。

## 6. 功能请求与路线图信号
尽管无新开 Issues，但从合并的 PR 中可以洞察项目未来的路线图方向：

1.  **Deep Thinking 模型支持**：[#2019](https://github.com/netease-youdao/LobsterAI/pull/2019) 对 Thinking Block 的支持表明项目正积极适配具备长链推理能力的 AI 模型，这将是下一阶段的核心卖点。
2.  **多智能体协作可视化**：连续 6 个 PR 聚焦 Subagent Session 的展示、存储与交互，预示着 LobsterAI 将从一个简单的对话客户端转型为支持复杂工作流的 Agent 编排平台。
3.  **精细化管理需求**：Context Window 滑块与自定义参数透传功能的加入，反映了资深用户对模型调用细节控制的强烈需求。

## 7. 用户反馈摘要
由于今日无新增 Issues，反馈主要源于对 PR 修复内容的推断：
*   **痛点缓解**：Windows 用户在多显示器场景下的窗口缩放问题得到彻底解决；用户对 Context Window 的设置将不再需要手动输入长数字，操作更符合直觉。
*   **场景延伸**：支持 Subagent 详情查看与本地持久化，解决了多轮对话中子任务状态不可追踪的痛点，满足了长链路任务执行监控的需求。

## 8. 待处理积压
今日项目进行了大规模的积压清理，历史遗留的 4 月份 PR（如 #1585, #1588, #1590 等）均已被关闭。目前项目看板处于非常干净的状态，无明显陈旧积压，建议关注新合并功能的上线反馈。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-25)

## 1. 今日速览
Moltis 项目今日呈现出极高的维护效率与迭代速度，开发活跃度显著提升。过去 24 小时内，项目成功关闭了 8 个 Issue 并合并/关闭了 10 个 PR，实现了“零积压”的即时响应状态。主要进展集中在架构重构（Agent 作为能力边界）与安全性修复（MCP 环境变量泄露）上。虽然无新版本发布，但大量修复 PR 的合并预示着版本即将趋于稳定，项目健康度极佳。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 10 个 PR 被处理，项目整体在架构设计与用户体验稳定性上迈出了重要一步：

*   **架构重构 - Agent 能力边界**：PR [#1049](https://github.com/moltis-org/moltis/pull/1049) 实现了以 Agent 为核心能力边界（MCP、沙箱、技能）的架构调整，允许不同 Agent 预设控制模型与权限，为多用户/多场景隔离奠定基础。
*   **运行时控制增强**：PR [#1066](https://github.com/moltis-org/moltis/pull/1066) 引入了针对单个 Agent 的运行时限制（超时与迭代次数），解决了长期请求的功能需求 Issue [#553](https://github.com/moltis-org/moltis/issues/553)。
*   **安全性修复**：PR [#1063](https://github.com/moltis-org/moltis/pull/1063) 修复了 stdio MCP 配置中环境变量泄露给 LLM 的高危漏洞，显著提升了系统的安全性。
*   **用户体验与 UI 修复**：修复了包括聊天工具栏横向滚动溢出（PR [#1062](https://github.com/moltis-org/moltis/pull/1062)）、模型选择器适配长名称（PR [#1060](https://github.com/moltis-org/moltis/pull/1060)）以及自动标题生成失败未提示（PR [#1064](https://github.com/moltis-org/moltis/pull/1064)）等多个细节问题。

## 4. 社区热点
今日社区反馈的问题均得到了快速响应与解决，重点讨论集中在以下领域：

*   **安全性问题**：Issue [#1054](https://github.com/moltis-org/moltis/issues/1054) 报告了 MCP 服务器配置中的环境变量可能通过 `mcp_list` 暴露给 LLM，引发了对敏感信息泄露的担忧。该问题已在 PR [#1063](https://github.com/moltis-org/moltis/pull/1063) 中通过引入 `Secret<String>` 机制迅速解决。
*   **配置与兼容性**：Issue [#1051](https://github.com/moltis-org/moltis/issues/1051) 指出了 OpenAI 兼容提供商的 Base URL 验证缺失问题，导致错误难以排查。PR [#1061](https://github.com/moltis-org/moltis/pull/1061) 增强了验证逻辑与错误提示，提升了开发体验。
*   **遗留功能需求**：Issue [#553](https://github.com/moltis-org/moltis/issues/10553) 自 4 月提出以来，今日随着 PR [#1066](https://github.com/moltis-org/moltis/pull/1066) 的合并而关闭，标志着 Agent 级别的精细化控制功能正式落地。

## 5. Bug 与稳定性
今日报告并修复的 Bug 主要涉及安全、配置与 UI 交互，均已提交 Fix PR 并关闭：

| 严重程度 | Issue | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **高** | [#1054](https://github.com/moltis-org/moltis/issues/1054) | MCP 环境变量泄露给 LLM (Security) | ✅ 已修复 (PR [#1063](https://github.com/moltis-org/moltis/pull/1063)) |
| **中** | [#1051](https://github.com/moltis-org/moltis/issues/1051) | OpenAI 兼容端点 URL 构造错误无日志 | ✅ 已修复 (PR [#1061](https://github.com/moltis-org/moltis/pull/1061)) |
| **中** | [#1057](https://github.com/moltis-org/moltis/issues/1057) | 禁用外部 Agent 后选择器仍显示选项 | ✅ 已修复 (PR [#1059](https://github.com/moltis-org/moltis/pull/1059)) |
| **低** | [#1052](https://github.com/moltis-org/moltis/issues/1052) | 模型选择器无法完整显示长模型名 | ✅ 已修复 (PR [#1060](https://github.com/moltis-org/moltis/pull/1060)) |
| **低** | [#1055](https://github.com/moltis-org/moltis/issues/1055) | 聊天工具栏导致横向滚动条溢出 | ✅ 已修复 (PR [#1062](https://github.com/moltis-org/moltis/pull/1062)) |

## 6. 功能请求与路线图信号
*   **Agent 细粒度控制**：Issue [#553](https://github.com/moltis-org/moltis/issues/553) 的关闭与 PR [#1049](https://github.com/moltis-org/moltis/pull/1049) 的合并表明，项目正在向“多 Agent 实例隔离运行”的高级架构演进。这意味着 Moltis 正从单一的 AI 助手工具转型为支持多租户/多场景的 Agent 管理平台。
*   **日志与调试优化**：Issue [#1056](https://github.com/moltis-org/moltis/issues/1056) 关于沙箱构建日志刷屏的问题已通过 PR [#1065](https://github.com/moltis-org/moltis/pull/1065) 解决，显示出团队对开发者调试体验的重视。

## 7. 用户反馈摘要
从今日的 Issue 反馈来看，用户痛点主要集中在以下方面：
1.  **安全与隐私**：用户对配置文件中的敏感信息（如 API Key、Env Vars）是否暴露给模型极其敏感。
2.  **UI 细节体验**：长模型名称显示不全、意外出现的横向滚动条等细节问题影响使用体验，反映出用户对界面精致度的要求。
3.  **错误可观测性**：用户希望在网络请求失败或配置错误时能看到更明确的错误提示，而非静默失败。

## 8. 待处理积压
今日数据中无长期未响应的积压 Issue 或 PR。所有过去 24 小时内活跃的 Issue 均已被关闭，显示维护者对当前反馈的处理能力极强，项目处于非常健康的“零积压”状态。建议持续关注 PR [#1049](https://github.com/moltis-org/moltis/pull/1049) 架构重构后可能引发的后续兼容性调整。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-05-25)

## 1. 今日速览
CoPaw 项目今日保持中度活跃，社区反馈与代码迭代稳步推进。过去 24 小时内，项目处理了 16 条 Issue 动态与 11 条 PR 更新，其中 8 条 Issue 成功关闭，4 条 PR 完成合并/关闭，显示出维护团队较高的响应效率。今日重点聚焦于修复影响用户体验的关键 Bug（如聊天记录丢失）和优化前端控制台的视觉一致性。此外，社区贡献者提交了包含“编程模式”和“数据分析插件”在内的重要 PR，预示着项目正在向更深度的工具集成方向发展。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 4 条 PR 更新至关闭状态，主要解决了前端样式、功能修复及后端记忆增强，项目整体稳定性得到提升。

*   **前端体验优化**：
    *   PR #4657 与 PR #4654 已关闭，成功修复了控制台 UI 风格不一致的问题（如环境变量页面上移动画、页头样式对齐），显著提升了界面的专业度。
    *   PR #4566 已关闭，修复了 macOS 版本聊天页面超链接无法打开本地文件的问题，并改善了 Markdown 表格换行显示。

*   **后端功能增强**：
    *   PR #4658 已关闭，为记忆检索功能增加了前置摘要能力，有助于提升 Agent 的上下文理解准确性。

*   **社区贡献推进**：
    *   PR #4578 (Coding Mode) 和 PR #4622 (DataPaw Plugin) 目前处于活跃评审状态，虽然尚未合并，但已引起社区关注，是未来版本的重要储备功能。

## 4. 社区热点
今日讨论最热烈的问题集中在数据安全与模型兼容性上：

*   **聊天记录丢失问题 ([#4620](https://github.com/agentscope-ai/QwenPaw/issues/4620))**：
    该 Issue 评论数达 12 条，是今日最热门话题。用户反馈切换会话时历史记录偶发消失，维护者迅速响应并关闭了该 Issue，表明该严重问题已在主分支修复，极大安抚了用户情绪。

*   **DeepSeek 模型 Think 内容解析 ([#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051))**：
    针对 DeepSeek v4 flash 模型的思考链解析异常问题，经过 10 条评论的讨论已确认为解析逻辑问题并关闭 Issue，反映了项目对主流模型兼容性的快速迭代。

*   **定时任务与用户消息冲突 ([#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653))**：
    用户深入探讨了 Session 共享导致 Cron 任务中断的机制，该讨论揭示了当前架构在并发处理上的局限性，引发了关于调度系统重构的思考。

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及数据持久化、任务调度及模型兼容性，部分已修复。

*   **严重**:
    *   [已修复] **聊天记录消失 ([#4620](https://github.com/agentscope-ai/QwenPaw/issues/4620))**：切换会话时无法加载历史消息，影响核心功能，已通过 PR 关闭确认修复。
    *   [未修复] **定时任务被中断 ([#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653))**：Cron 任务与用户消息共享 Session 导致任务非正常停止，目前仍在讨论方案。

*   **中等**:
    *   [未修复] **GLM-5.1 思维链不显示 ([#4650](https://github.com/agentscope-ai/QwenPaw/issues/4650))**：OpenAI 兼容接口下特定模型推理内容无法在 UI 渲染，疑似前端解析问题。
    *   [未修复] **Ghost 定时任务 ([#4649](https://github.com/agentscope-ai/QwenPaw/issues/4649))**：更新配置后旧的 Cron 任务未清理，导致幽灵任务无限执行。

*   **轻微**:
    *   [已修复] Markdown 表格换行失效 ([#4497](https://github.com/agentscope-ai/QwenPaw/issues/4497))。

## 6. 功能请求与路线图信号
社区提出了多个深度优化请求，结合现有 PR 分析，项目正从“对话工具”向“智能体操作系统”演进。

*   **记忆系统重构信号**：Issue [#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) 提出建立“总结-关联-提醒”机制，解决当前记忆系统“只记录不学习”的痛点。这与今日合并的记忆检索增强 PR (#4658) 方向一致，预计下个版本将继续深化 RAG 能力。
*   **编程模式**：PR [#4578](https://github.com/agentscope-ai/QwenPaw/pull/4578) 提出的内嵌 IDE 功能，响应了用户对 Agent 直接操作代码环境的强烈需求。
*   **数据分析集成**：PR [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) 提交的 DataPaw 插件，表明项目正在扩展 BI 技能，可能在未来版本中作为官方插件首发。

## 7. 用户反馈摘要
*   **痛点**：
    *   **数据安全感缺失**：多日关于“聊天记录丢失”的反馈（#4620）表明用户对本地/云端会话持久化的可靠性极其敏感。
    *   **模型适配繁琐**：不同模型（DeepSeek, GLM）的 Think 标签解析需频繁调整（#4051, #4650），用户期望开箱即用的兼容性。
    *   **并发处理不足**：定时任务与即时对话的冲突（#4653）反映了个人助手在“后台静默运行”场景下的体验缺失。

*   **满意度**：
    *   用户对 UI 风格的统一性提出了较高要求（#4593），维护者迅速关闭相关修复 PR 显示了对用户体验细节的重视，获得了正面反馈。

## 8. 待处理积压
*   **PR #4601 (语音输入后端配置)**：作为首次贡献者提交的 PR，涉及 Whisper 转录后端配置的修复，目前处于 Open 状态，建议维护者优先 Review 以完善多模态输入体验。
*   **Issue #4656 (OpenCode 模型筛选)**：针对 OpenCode Provider 的模型列表过滤问题，已有对应 PR (#4660) 提交，建议尽快合并以修复配置逻辑。
*   **Issue #3290 (技能更新功能)**：自 4 月提出的技能更新功能请求已于今日关闭，但需确认是否已完全实现或纳入后续迭代，避免需求遗漏。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-05-25)

**项目地址**：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. 今日速览
EasyClaw 项目今日整体处于**低互动、高交付**状态。虽然社区侧的 Issues 和 PRs 讨论归于平静，但项目核心团队发布了重要的 `v1.8.15` 版本，标志着项目在客服场景下的会话管理与流转逻辑上取得了关键进展。过去 24 小时内无新增活跃 Issue 或 PR，项目维护重心侧重于版本迭代与功能内审，整体健康度稳定，显示出维护者正专注于内部功能打磨而非外部协作处理。

### 2. 版本发布
**新版本**：[v1.8.15: RivonClaw v1.8.15](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.15)

本次更新重点优化了客服智能体的会话生命周期管理与流转机制，具体内容如下：

*   **显式会话结束机制**：新增允许客服智能体显式结束会话的功能。这解决了以往对话在工作完成后无法自动 cleanly close 的痛点，有助于释放资源并提升对话结束的确定性。
*   **流转与分发逻辑增强**：
    *   改进了升级与分发处理逻辑。
    *   提供了更清晰的会话快照。
    *   优化了提示词路由机制的安全性。
    *   提升了会话状态更新的可靠性。
*   **体验优化**：对客服工作空间进行了整体润色。

**分析与建议**：
本次更新涉及会话状态核心逻辑。虽然未明确标注 Breaking Changes，但“更可靠的会话状态更新”和“显式结束会话”可能改变了原有的事件流转时序。**建议开发者重点关注**：
1.  现有会话流程中关于“结束对话”逻辑的兼容性测试。
2.  Escalation（升级/转人工）流程的状态快照是否影响上下文传递。

### 3. 项目进展
过去 24 小时内，项目在代码合并与 Issue 处理方面无公开记录。
*   **PR 动态**：无待合并或已合并的 PR。
*   **进展评估**：虽然未见 PR 流水，但 `v1.8.15` 的发布表明项目内部代码库已有实质性推进。目前的静默期可能意味着项目正处于新功能的发布后观察期，或正在筹备下一阶段的功能开发。

### 4. 社区热点
过去 24 小时内，Issues 与 PRs 区均无新增或活跃讨论。
*   **状态分析**：社区互动暂时停滞，可能受周末或节假日因素影响，也可能是因为上一版本刚发布，用户尚处于体验与测试阶段。目前无高频讨论话题。

### 5. Bug 与稳定性
*   **今日报告**：过去 24 小时内未收到新的 Bug 报告或崩溃反馈。
*   **稳定性评估**：当前版本 `v1.8.15` 刚刚发布，尚无足够的使用数据来判断是否存在回归问题。鉴于更新涉及核心状态机，建议后续密切关注关于“会话无法关闭”或“状态同步延迟”的潜在反馈。

### 6. 功能请求与路线图信号
*   **今日动态**：无新功能请求。
*   **路线图前瞻**：从 `v1.8.15` 的更新内容推断，项目近期路线图明确聚焦于 **企业级客服场景**。特别是“Escalation（升级流转）”和“Workspace（工作空间）”的优化，暗示项目正朝着更完善的“人机协作”方向发展，未来可能会进一步增强多智能体协作或人工介入的无缝衔接能力。

### 7. 用户反馈摘要
由于今日无活跃 Issues 评论，暂无具体的用户反馈摘要。
*   **隐含信号**：无反馈通常意味着没有重大阻塞性问题。建议维护者关注后续 24-48 小时内用户升级后的适配情况反馈。

### 8. 待处理积压
*   **当前状态**：今日无新增长期未响应的 Issue 或 PR。
*   **维护建议**：鉴于今日社区互动为零，建议维护者利用此空窗期主动检查旧版本文档的准确性，特别是针对 `v1.8.15` 新增的会话结束 API 编写更新日志或迁移指南，以便用户更快上手新特性。

---

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*