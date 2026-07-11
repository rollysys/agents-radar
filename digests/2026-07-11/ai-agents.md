# OpenClaw 生态日报 2026-07-11

> Issues: 432 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-07-11 02:49 UTC

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

# OpenClaw 项目动态日报 (2026-07-11)

## 1. 今日速览
OpenClaw 项目今日维持极高的社区活跃度，过去24小时内 Issues 更新达 432 条，PR 更新达 500 条。虽然无新版本发布，但项目处于高频迭代阶段，重点关注 **会话状态管理**、**内存泄漏修复** 以及 **多渠道集成优化**。目前待合并 PR 积压较多（325个），建议维护者关注合并节奏。社区核心痛点集中在长时间运行下的稳定性（OOM、会话中断）以及安全凭证管理。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
尽管没有版本发布，但多个关键 PR 正在积极推进，主要集中在提升系统稳定性与扩展能力：

*   **会话与安全机制增强**：PR #103148 正在修复父会话所有者权限校验问题，防止插件越权访问，这是影响 P0 级别的安全修复。
*   **Agent 执行环境稳定性**：PR #103263 提出在 Agent 运行期间锁定工作树，防止因垃圾回收导致运行中文件丢失，这将显著提升长时间任务的成功率。
*   **UI 交互革新**：PR #104012 旨在 Web 控制台中引入网关浏览器面板，打破仅 macOS 原生应用支持浏览器的限制，极大提升了跨平台体验。
*   **消息展示优化**：PR #103583 引入了可移植表格展示块，改善 Agent 在 Slack、Discord 等多渠道的结构化数据展示效果。
*   **Codex 集成修复**：PR #103868 修复了 Codex 遇到订阅限制时的模型回退逻辑，PR #103331 正在稳定 Computer Use 功能。

## 4. 社区热点
今日社区讨论最热烈的问题集中在 Agent 的“感知盲区”与系统稳定性：

*   **[#99241](https://github.com/openclaw/openclaw/issues/99241) [OPEN] Tool outputs sometimes render as image attachments...**
    *   **热度**：评论 20 条
    *   **分析**：在长会话或 ANSI 输出较多的工具调用中，输出结果意外被渲染为图片，导致 Agent 无法读取文本上下文，进而引发任务失败。这是典型的 Agent “感知断层”问题，严重影响了自动化工作流的可靠性。
*   **[#102175](https://github.com/openclaw/openclaw/issues/102175) [OPEN] [Bug]: embedded prompt cache breaks...**
    *   **热度**：评论 16 条
    *   **分析**：Prompt Cache 在跨越复杂边界（如房间事件、策略变更）时中断，导致长上下文能力失效，影响 Token 成本与响应连贯性。
*   **[#10659](https://github.com/openclaw/openclaw/issues/10659) [OPEN] Feature Request: Masked Secrets...**
    *   **热度**：评论 15 条 👍 4
    *   **分析**：用户强烈需求“掩码密钥”功能，允许 Agent 使用 API Key 但不可见明文，以防 Prompt 注入攻击窃取凭证。这是企业级安全部署的关键需求。
*   **[#63829](https://github.com/openclaw/openclaw/issues/63829) [CLOSED] [Feature]: Per-agent memory-wiki vault...**
    *   **热度**：评论 13 条 👍 10
    *   **分析**：多 Agent 隔离记忆库配置需求已关闭，意味着该功能可能已实现或被纳入主线，解决了多 Agent 共享记忆的冲突问题。

## 5. Bug 与稳定性
今日报告的高危 Bug 主要涉及内存管理与会话完整性：

*   **🔴 严重**：[#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway Memory Leak。RSS 从 350MB 增长至 15.5GB 导致 OOM 崩溃。长期未解决，建议优先处理。
*   **🔴 严重**：[#83959](https://github.com/openclaw/openclaw/issues/83959) Codex app-server 启动重试耗尽导致服务不可用。已有相关修复 PR #103263 提交。
*   **🟠 中等**：[#84569](https://github.com/openclaw/openclaw/issues/84569) WhatsApp 会话在长模型调用时停滞，无响应交付。
*   **🟠 中等**：[#103332](https://github.com/openclaw/openclaw/issues/103332) [CLOSED] GPT-5.6/Codex 运行回归错误。该 Issue 已关闭，可能已在主分支修复。
*   **🟠 中等**：[#99681](https://github.com/openclaw/openclaw/issues/99681) [CLOSED] Discord WebSocket 1006 断开后无法自动重连。已修复关闭。

## 6. 功能请求与路线图信号
结合 Issue 与 PR，项目路线图正向以下方向演进：

*   **安全与沙箱**：文件系统沙箱配置 (#7722) 和密钥掩码 (#10659) 显示出项目正在强化生产环境的安全边界。PR #101276 (执行审批黑名单) 也在推进中。
*   **多模态与渠道增强**：Slack Block Kit 支持 (#12602) 和 Web Push 广播优化 (PR #103607) 显示对富媒体交互的重视。
*   **开发者体验**：PR #104012 的 Web 端浏览器面板和 #10687 的动态模型发现功能，旨在降低运维门槛并提升灵活性。

## 7. 用户反馈摘要
*   **痛点**：用户在使用涉及长耗时任务（如 Codex、WhatsApp 长会话）时，普遍担心系统稳定性，容易出现“静默失败”或“连接中断”。
*   **场景**：多 Agent 协作场景下的资源隔离（memory-wiki）和会话隔离（parent session key）需求迫切，说明 OpenClaw 正被用于更复杂的自动化工作流。
*   **反馈**：用户对 OAuth 流程的健壮性（#8673 重试逻辑）和配置灵活性（#7669 开发通道分发）有具体改进建议。

## 8. 待处理积压
*   **PR 队列积压**：目前有 **325 个 PR 处于待合并状态**，部分关键修复 PR（如内存、安全类）已停留数日，建议维护者进行分批合并或打标签分流。
*   **长期 Issue**：[#10659](https://github.com/openclaw/openclaw/issues/10659) (Masked Secrets) 和 [#7722](https://github.com/openclaw/openclaw/issues/7722) (Filesystem Sandboxing) 涉及核心安全架构，虽讨论热烈但仍需官方定夺实现路径。

---

## 横向生态对比

# 2026-07-11 开源 AI 智能体生态横向对比分析报告

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从单点功能突破向企业级稳定性与多智能体架构演进**的关键时期。头部项目（如 OpenClaw、Hermes Agent）正集中攻坚长时间运行的内存泄漏与上下文压缩难题，显示出产品正从“能用”向“耐用”跨越。同时，多智能体协作（LobsterAI、PicoClaw）与模型供应商解耦成为核心竞争点，社区对本地模型（Ollama）与云端模型的无缝切换需求强烈。安全性问题（沙箱逃逸、权限隔离）日益凸显，成为生产环境部署的隐形门槛。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新 | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 432 | 500 | 无 | 🟡 高吞吐但积压严重（325 PR），核心稳定性问题突出 |
| **Hermes Agent** | 50 | 50 | 无 | 🟢 极其活跃，聚焦 Desktop 稳定性修复，响应迅速 |
| **CoPaw (QwenPaw)** | 43 | 45 | **v2.0.0** | 🟠 重大架构升级伴随严重回归 Bug，需谨慎升级 |
| **IronClaw** | 36 | 50 | 无 | 🟢 架构重构期，修复量大，演进速度快 |
| **Zeroclaw** | 19 | 50 | 无 | 🟢 高强度开发，聚焦协议兼容与底层修复 |
| **NanoBot** | - | 42 | 无 | 🟢 快速迭代，核心架构优化中 |
| **NanoClaw** | - | 26 | 无 | 🟢 架构解耦顺利，代码质量提升阶段 |
| **PicoClaw** | - | 18 | 无 | 🟢 稳健迭代，侧重安全与 IoT 场景 |
| **LobsterAI** | - | 17 | **v2026.7.10** | 🟢 新版本发布，多智能体功能受关注但存配置 Bug |
| **EasyClaw** | 0 | 0 | **v1.8.62** | 🟢 闭源开发模式，高频发布，企业级稳定输出 |
| **NullClaw** | 2 | 0 | 无 | 🔴 活跃度低，存在未修复的安全漏洞 |
| **Moltis** | 0 | 1 | 无 | 🟢 维护期，紧跟前沿模型支持 |
| **TinyClaw / ZeptoClaw** | 0 | 0 | 无 | ⚪ 暂无明显动态 |

## 3. OpenClaw 在生态中的定位

*   **核心参照与流量中心**：OpenClaw 是今日生态中活跃度最高的项目，拥有压倒性的 Issue 和 PR 吞吐量，是生态的“风向标”。
*   **优势**：**多渠道集成能力**领先（Web、Slack、Discord、WhatsApp），UI 交互革新引入网关浏览器面板，跨平台体验强于 Hermes Agent（侧重 Desktop）和 LobsterAI。
*   **技术路线差异**：相比 NanoBot 和 IronClaw 正在进行的底层架构重构，OpenClaw 目前处于**功能修补与性能调优**阶段，重点解决 OOM 和会话状态管理，而非推翻重建。
*   **隐患**：PR 积压量（325个）远超其他项目（如 Hermes 合并了 18 个），显示出代码审核瓶颈。长期 Issue（如 Gateway 内存泄漏）未解决可能影响其作为企业级底座的声誉。

## 4. 共同关注的技术方向

1.  **长期记忆与上下文管理**
    *   **涉及项目**：OpenClaw, NanoBot, Hermes Agent, IronClaw, NanoClaw.
    *   **具体诉求**：Prompt Cache 跨边界失效、上下文压缩导致的信息丢失、以及跨会话的持久化记忆是各项目面临的共性难题。社区迫切需要既能节省 Token 又不丢失关键信息的“两阶段压缩”或“记忆树”方案。

2.  **多智能体协作与隔离**
    *   **涉及项目**：LobsterAI, PicoClaw, NanoBot, OpenClaw.
    *   **具体诉求**：从单兵作战转向多智能体编排。LobsterAI 发布了子智能体委托功能，PicoClaw 正在构建 Agent 协作总线，OpenClaw 和 NanoBot 均在解决会话隔离与权限校验问题，显示出多 Agent 架构已成为标配。

3.  **安全与沙箱机制**
    *   **涉及项目**：OpenClaw, CoPaw, NullClaw, Hermes Agent, PicoClaw.
    *   **具体诉求**：Prompt 注入窃取凭证、沙箱逃逸（CoPaw 的 PowerShell 递归爆炸）、以及越权访问是高频出现的严重 Bug。企业级部署对“密钥掩码”和“文件系统沙箱”有刚性需求。

4.  **本地模型与边缘计算优化**
    *   **涉及项目**：NanoBot, PicoClaw, CoPaw.
    *   **具体诉求**：Ollama 集成中的高延迟（NanoBot 报告 60s 延迟）和显存瓶颈是主要痛点。PicoClaw 对 ARM 架构的支持显示了向 IoT 和边缘设备渗透的趋势。

## 5. 差异化定位分析

*   **功能侧重**：
    *   **OpenClaw & Zeroclaw**：侧重**网关与协议兼容**，致力于成为 AI 时代的“中间件”，连接各种 IM 渠道和 LLM 后端。
    *   **Hermes Agent & NanoBot**：侧重**开发者体验（DX）与 Desktop CLI**，打造极致的个人助手工具，交互细节打磨更精细。
    *   **LobsterAI & EasyClaw**：侧重**企业级 IM 集成**，深度适配钉钉、企微、飞书，解决国内办公场景的特定需求。
    *   **PicoClaw**：侧重**轻量化与边缘计算**，关注 Go 语言层面的性能优化与嵌入式场景。

*   **技术架构**：
    *   **CoPaw & IronClaw**：正在进行**激进的架构重构**（AgentScope 2.0 迁移，Reborn 架构），试图解决历史技术债，风险较高但收益大。
    *   **NanoClaw & OpenClaw**：采取**渐进式改良**，通过重构通道层和修复内存问题来维持稳定性。

## 6. 社区热度与成熟度

*   **快速迭代期**：**CoPaw (QwenPaw)**、**IronClaw**、**NanoClaw**。这些项目正处于架构调整或大版本发布后的震荡期，Issue 和 PR 活跃度高，但 Bug 频发，适合喜欢尝鲜的开发者。
*   **质量巩固期**：**Hermes Agent**、**Zeroclaw**、**OpenClaw**。虽然活跃度极高，但核心工作集中在修复 P0/P1 级 Bug 和提升稳定性，适合作为生产环境部署的候选对象，但需警惕内存泄漏等顽疾。
*   **稳定维护期**：**EasyClaw**、**LobsterAI**、**Moltis**。版本发布规律，功能相对成熟，主要针对特定场景（如企业办公、新模型支持）进行增量更新。
*   **停滞/低活跃期**：**NullClaw**、**TinyClaw**、**ZeptoClaw**。社区互动极少，存在未修复的安全或稳定性问题，不建议作为新项目的首选依赖。

## 7. 值得关注的趋势信号

1.  **“静默失败”成为最大痛点**：从 OpenClaw 的 OOM 到 Hermes 的 Desktop 假死，再到 NanoClaw 的旧群组缓存失效，社区反馈表明，Agent 在长时间运行或复杂链路中往往不报错而是“静默卡死”或“状态错误”。**建议开发者**：引入更细粒度的心跳检测和状态机可视化工具，而非仅依赖日志报错。
2.  **模型降级与混合路由成为刚需**：多个项目（OpenClaw, PicoClaw, NanoBot）均在处理模型回退、本地模型延迟或跨会话模型切换问题。**信号**：未来的 Agent 架构必须是“模型无关”的，甚至需要在单一工作流中动态编排大小模型（如 GPT-5.6 处理推理，本地模型处理隐私数据）。
3.  **企业级安全短板暴露**：CoPaw 的沙箱失控和 NullClaw 的越权访问表明，开源项目在安全性上普遍滞后于功能开发。**信号**：随着 Agent 权限增大（如操作 Shell、文件系统），基于“审批流”的安全框架将成为企业采购或部署的硬性准入标准。
4.  **即时通讯（IM）渠道体验优化**：WhatsApp、Telegram、飞书等渠道的连接稳定性（如 NullClaw 的假死）和富媒体渲染是用户高频吐槽点。**信号**：Agent 的竞争已不限于大脑（LLM），更在于“四肢”（IM 通道的健壮性），谁能率先解决“长连接保活”和“跨平台 UI 适配”，谁就能在 C 端市场胜出。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-07-11)

## 1. 今日速览
NanoBot 项目今日保持**极高的开发活跃度**，过去 24 小时内 PR 更新高达 42 条，其中 17 条已合并或关闭，显示出维护者正在积极整合社区贡献并进行功能迭代。重点推进方向集中在**核心架构优化**（如记忆系统 consolidation、Subagent 隔离）和**用户体验打磨**（WebUI 交互细节、CLI 兼容性）。值得注意的是，今日修复了多个影响用户体验的关键 Bug，并针对近期社区关注的 Ollama 性能瓶颈和安全漏洞问题展开了深入讨论。整体来看，项目正处于功能增强与稳定性修复并行的快速迭代期。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 17 个 PR 被合并或关闭，显著推进了以下领域：

*   **代码编辑与工具链增强**：PR #4635 已合并，针对 `edit_file` 工具引入了严格的 `line_hint` 一致性检查，解决了编辑错误位置的顽疾，直接回应了 Issue #4634 中提到的基准测试失败问题。
*   **WebUI 交互优化**：PR #4876 和 #4877 已合并，分别优化了排队消息的发送逻辑（双击 Enter 引导）和文件预览的语法高亮显示，显著提升了前端交互的细腻度。
*   **CLI 体验修复**：PR #4832 修复了特定终端下 Shift+Enter 键的输入回退问题，恢复了多行输入的兼容性。
*   **架构重构尝试**：PR #4622（Cron 模型预设）和 #4623（Subagent 模型覆盖）处于 Closed 状态，表明相关功能方向经过尝试后可能有调整或暂缓，需关注后续是否以新形式重新提出。
*   **正在进行的重要工作**：目前有 25 个待合并 PR，其中 #4626（记忆合并优化）、#4862（执行会话隔离）和 #4843（MCP 重连修复）正在接受审查，这些更新将显著提升系统的健壮性和安全性。

## 4. 社区热点
今日社区讨论焦点主要集中在性能瓶颈与功能灵活性上：

*   **[Issue #4867] Ollama 本地模型延迟严重**：用户反馈使用 Ollama 时每轮对话额外增加 60 秒延迟，导致在 32GB 显存环境下几乎不可用。讨论指出 Prompt 前缀处理可能是罪魁祸首，社区急需针对本地模型的缓存优化方案。
    *   链接: [HKUDS/nanobot Issue #4867](https://github.com/HKUDS/nanobot/issues/4867)
*   **[Issue #4253] 会话级模型切换支持**：用户强烈希望能根据隐私需求或任务紧急程度，在不同会话中灵活切换模型（如 OpenRouter 与本地 LlamaCpp），而非受限于全局设置。该需求已积累 6 条讨论。
    *   链接: [HKUDS/nanobot Issue #4253](https://github.com/HKUDS/nanobot/issues/4253)
*   **[Issue #4776] /restart 命令安全漏洞**：安全研究员指出 `/restart` 命令缺乏权限校验，任意配对用户均可发起 DoS 攻击导致 Bot 进程重启，严重程度较高，需尽快修补。
    *   链接: [HKUDS/nanobot Issue #4776](https://github.com/HKUDS/nanobot/issues/4776)

## 5. Bug 与稳定性
今日报告及修复的 Bug 按严重程度排列如下：

*   **[严重] 安全漏洞**：
    *   **Issue #4776**：`/restart` 命令无权限校验，允许任意用户重启 Bot 进程。
    *   **修复状态**：尚未有明确修复 PR 合并，建议维护者优先关注。
*   **[中等] 功能异常**：
    *   **Issue #4835**：WebUI 首条消息可能被错误发送到其他已存在的会话中，涉及并发队列处理逻辑，已由 PR 关闭，预计已修复。
    *   **Issue #4867**：Ollama 本地模型 Prompt 处理导致的严重延迟（性能问题）。
*   **[已修复] 关键修复**：
    *   **PR #4842**：修复了 MCP Server 关闭时的 `asyncio.CancelledError` 异常，防止进程崩溃。
    *   **PR #4635**：修复了 `edit_file` 可能修改错误代码位置的问题，提升了自动化编辑的可靠性。

## 6. 功能请求与路线图信号
*   **自动化与调度**：
    *   **Issue #4378** 请求 Cron 任务级别的模型预设功能。虽然 PR #4622 暂时关闭，但需求依然存在，预计该功能会在后续版本中重新规划。
    *   **Issue #4872** 建议 "Dream" 模式仅在产生实际改动时创建 Git Commit，以避免无效提交污染仓库。对应的 **PR #4873** 已经提出，正在审查中，有望很快合入。
*   **模型与代理灵活性**：
    *   **Issue #4231** 请求为 Subagent 的 `spawn` 工具增加模型参数覆盖能力，以实现大小模型协同工作。这是实现复杂 Agent 架构的关键特性。
*   **长任务管理**：
    *   **PR #4879** 提议将 "sustained-goal"（长任务持续追踪）功能设为默认关闭（需手动开启），这反映出社区在易用性与后台干扰之间寻求平衡的信号。

## 7. 用户反馈摘要
*   **痛点**：本地模型用户对性能极其敏感，尤其是 Prompt 前缀处理带来的显存与时间开销，认为当前的延迟水平“完全不可用”。
*   **场景**：用户普遍存在混合使用云端 API 和本地模型的场景，渴望在隐私（本地）与能力（云端）之间无缝切换。
*   **满意度**：开发者对 `edit_file` 的改进表示认可，但指出其在处理重复代码时仍有误判风险，今日的修复 PR #4635 直接回应了这一反馈。

## 8. 待处理积压
*   **Issue #4867 (Ollama 性能)**：该问题严重影响本地模型用户体验，目前尚未看到直接的修复 PR，建议维护者将其标记为高优先级。
*   **Issue #4776 (安全漏洞)**：涉及系统重启权限，存在高危风险，需尽快确认修复排期。
*   **PR #4588 (上下文 Token 优化)**：这是一个大型性能优化 PR，涉及工具输出压缩与剪枝，状态显示为 Open 且标记有冲突，可能需要较长时间审查，但对项目长期性能至关重要。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-07-11)

## 1. 今日速览
Zeroclaw 项目今日保持高强度的开发活跃度，共有 **19 条 Issue 更新** 和 **50 条 PR 更新**，虽然未发布新版本，但代码库正处于功能迭代与稳定性修复的关键阶段。核心关注点集中在**运行时稳定性修复**（解决 skill-review 导致的 SIGSEGV 崩溃）和**生态兼容性扩展**（OpenAI Chat Completions 协议支持）。大量待合并 PR（45 条）表明项目正在为下一个重要版本积蓄代码量，涉及网关重构、插件系统增强及多架构支持等核心模块。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 5 条 PR 更新状态（合并/关闭），项目在以下方面取得了实质性推进：

*   **运行时稳定性修复**：针对高危崩溃问题 [Issue #8654](zeroclaw-labs/zeroclaw Issue #8654)（skill-review fork 导致 SIGSEGV），修复 PR [PR #8680](zeroclaw-labs/zeroclaw PR #8680) 已提交并处于活跃状态，通过界定历史切片边界防止内存越界，解决了严重的进程崩溃问题。
*   **国际化与错误处理**：[PR #8957](zeroclaw-labs/zeroclaw PR #8957) 已关闭，完成了 `skills install` 错误路径的 Fluent 国际化重构，提升了 CLI 用户体验的一致性。
*   **Web 网关功能增强**：[Issue #8677](zeroclaw-labs/zeroclaw Issue #8677) 已关闭，Web 网关已添加 `uses_memory` 复选框，完善了自动化任务的内存管理 UI 交互。
*   **依赖与构建修复**：[PR #8938](zeroclaw-labs/zeroclaw PR #8938) 修复了 Rust 1.96+ 版本下 `cargo test --doc` 的构建失败问题，确保了 CI 流程的顺畅。

## 4. 社区热点
今日讨论最活跃、影响深远的议题主要集中在架构设计与协议兼容性：

*   **[RFC] 统一 WebSocket 协议**：[Issue #8798](zeroclaw-labs/zeroclaw Issue #8798) 提出将 `/ws/chat` 和 `/acp` 合并为单一 wire protocol。该 RFC 旨在解决当前网关双协议并行的复杂性，降低维护成本并提升前端一致性，引发了关于架构演进的深层讨论。
*   **OpenAI 兼容端点**：[PR #8486](zeroclaw-labs/zeroclaw PR #8486) 致力于为 Zeroclaw 添加 OpenAI Chat Completions HTTP 端点。这将允许 LangChain、OpenAI SDK 等主流工具直接接入 Zeroclaw，大幅降低集成门槛，是目前最受期待的功能之一。
*   **Web 端一键升级**：[PR #8173](zeroclaw-labs/zeroclaw PR #8173) 正在实现从 Web 仪表盘进行应用内升级的功能，旨在简化自托管用户的运维流程，是提升产品化体验的重要一环。

## 5. Bug 与稳定性
今日报告了多个严重影响用户体验的 Bug，主要集中在运行时崩溃和特定供应商兼容性：

*   **高危 (S1/S2)**:
    *   🚨 **[Issue #8654](zeroclaw-labs/zeroclaw Issue #8654)**：`skill-review` fork 发生越界切片导致守护进程 SIGSEGV 崩溃。**已有 Fix PR**: [PR #8680](zeroclaw-labs/zeroclaw PR #8680)。
    *   🔥 **[Issue #8934](zeroclaw-labs/zeroclaw Issue #8934)**：Gemini 模型在原生 Function Calling 时，因 `thought_signature` 丢失导致请求失败，严重阻塞工作流。
    *   ⚠️ **[Issue #8936](zeroclaw-labs/zeroclaw Issue #8936)**：`loop_detector::hash_value` 在每次工具调用时深度克隆整个参数树，导致长对话中出现严重的内存增长和性能劣化。
*   **中低危 (S2/S3)**:
    *   [Issue #8950](zeroclaw-labs/zeroclaw Issue #8950)：Telegram 机器人在命令超过 100 个时注册失败（BOT_COMMANDS_TOO_MUCH）。
    *   [Issue #8952](zeroclaw-labs/zeroclaw Issue #8952)：流式传输时 narration 文本在特定空白字符情况下出现重复。
    *   [Issue #8945](zeroclaw-labs/zeroclaw Issue #8945)：ZeroCode TUI 在 macOS 上阻止系统文本替换功能。

## 6. 功能请求与路线图信号
社区提出了多项关键功能请求，部分已对应活跃 PR，预示了 v0.8.3 及后续版本的方向：

*   **多客户端路由支持**：[Issue #8958](zeroclaw-labs/zeroclaw Issue #8958) 提出通过 `?agent=` 查询参数支持多智能体端点选择，以便第三方客户端（如 Thunderbird Thunderbolt）能够指定特定的 Agent 进行交互。
*   **多模态生成集成**：[Issue #6563](zeroclaw-labs/zeroclaw Issue #6563) 提议集成 ComfyUI/Comfy Cloud 作为媒体生成后端，为未来的 `gen_video` 工具铺路，显示出向多模态 Agent 扩展的趋势。
*   **可观测性增强**：[Issue #8933](zeroclaw-labs/zeroclaw Issue #8933) 建议在 OTel 导出中增加 `gen_ai.conversation.id`，以支持跨轮次的会话级关联分析，这对于生产环境调试至关重要。
*   **跨平台支持**：[PR #8954](zeroclaw-labs/zeroclaw PR #8954) 提交了多架构 Alpine/musl 镜像支持，显著改善了在 ARM 架构和嵌入式环境下的部署体验。

## 7. 用户反馈摘要
从 Issue 详情中提炼出以下真实用户痛点：

*   **Telegram 渠道体验受损**：用户反馈发送多张图片时 Agent 会重复响应 ([Issue #5514](zeroclaw-labs/zeroclaw Issue #5514))，且工具数量过多会导致 Bot 菜单注册失败，影响重度定制化用户的使用。
*   **文档滞后**：有用户指出 Telegram 示例文档存在错误 ([Issue #8810](zeroclaw-labs/zeroclaw Issue #8810))，这增加了新手的上手门槛。
*   **TUI 交互摩擦**：ZeroCode 终端用户遭遇鼠标选择文本被拦截的问题 ([Issue #8944](zeroclaw-labs/zeroclaw Issue #8944))，且无法使用系统级的文本替换，体验不够原生。
*   **Gemini 集成障碍**：使用 Gemini 模型的用户遇到了原生工具调用失败的问题，表明特定 LLM 供应商的适配仍需加强。

## 8. 待处理积压
以下重要 Issue 和 PR 长期未得到响应或处于关键阻塞状态，需维护者重点关注：

*   **僵尸进程泄漏**：[PR #8948](zeroclaw-labs/zeroclaw PR #8948) 修复了 stdio MCP 服务器进程退出后变为僵尸进程的问题。这是一个严重的资源泄漏问题，建议优先合并。
*   **长期未解决的 Telegram Bug**：[Issue #5514](zeroclaw-labs/zeroclaw Issue #5514)（多图片发送问题）自 4 月创建以来虽有活跃讨论但仍未解决，严重影响 Telegram 渠道的实用性。
*   **工具访问控制漏洞**：[PR #7960](zeroclaw-labs/zeroclaw PR #7960) 指出 `execute_pipeline` 绕过了 Agent 的工具访问策略，存在安全隐患，该 PR 自 6 月中旬提交以来处于停滞状态。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 (2026-07-11)

## 1. 今日速览
Hermes Agent 项目今日保持**极高的活跃度**，呈现出"高吞吐、重修复"的态势。过去24小时内，项目处理了 50 条 Issue 更新（其中 42 条为新增或活跃讨论）和 50 条 PR 更新，尽管没有发布新版本，但**核心团队显然在集中精力修复稳定性问题**。重点集中在 Desktop 客户端的多会话管理、上下文压缩机制的健壮性以及多供应商（OpenAI, xAI, Bedrock）的兼容性修复。今日社区反馈质量较高，多个关键 Bug 已提交修复 PR 并合并。

## 2. 版本发布
*   **无新版本发布**。尽管代码提交活跃，今日未监测到新的 Release 版本发布，预计当前大量修复将在后续版本（可能为 v0.18.3 或 v0.19.0）中集中发布。

## 3. 项目进展
今日共有 **18 个 PR 被合并或关闭**，主要解决了以下关键领域的问题：

*   **Desktop 会话稳定性重大修复**：针对 Desktop 应用中用户输入被错误路由到其他会话的严重 Bug ([#54527](https://github.com/NousResearch/hermes-agent/issues/54527))，核心维护者提交并关闭了修复 PR [#62413](https://github.com/NousResearch/hermes-agent/pull/62413)。该修复解决了草稿保存和提交时的竞态条件，确保了消息不会丢失或错乱。
*   **供应商兼容性增强**：
    *   **xAI**：PR [#62420](https://github.com/NousResearch/hermes-agent/pull/62420) 修复了旧版 xAI 会话重放加密内容导致的失败问题，增强了跨提供商切换的容错性。
    *   **Codex/OpenAI**：PR [#62422](https://github.com/NousResearch/hermes-agent/pull/62422) 优化了摘要配额耗尽时的处理逻辑，防止上下文丢失。
*   **安全与性能优化**：
    *   **安全性**：PR [#62346](https://github.com/NousResearch/hermes-agent/pull/62346) 修复了终端快照泄露敏感环境变量的问题，防止通过 `export -p` 泄露密钥。
    *   **CLI 体验**：PR [#62412](https://github.com/NousResearch/hermes-agent/pull/62412) 修复了 Kanban workers 等模式下模型覆盖设置失效的问题。

## 4. 社区热点
今日讨论最热烈的问题集中在**企业级部署需求**和**上下文管理策略**：

*   **[Issue #5454] Proxy support for LLM API calls** (评论: 8, 👍: 2)
    链接: https://github.com/NousResearch/hermes-agent/issues/5454
    **分析**：这是一个长期存在的痛点。企业用户在内网环境下无法通过 HTTP_PROXY 代理调用 OpenAI API。该 Issue 已关闭，表明可能已找到解决方案或合并了相关 PR，这对企业落地是重大利好。
*   **[Issue #513] Feature: Two-Phase Context Management** (评论: 4)
    链接: https://github.com/NousResearch/hermes-agent/issues/513
    **分析**：社区正在讨论引入类似 Kilocode 的两阶段上下文压缩机制（先清理工具输出，再进行摘要），以降低成本并提升效果。这反映了用户对 Agent 长期记忆和 Token 成本的极度关注。
*   **[Issue #27038] Codex Responses API rejects replayed assistant message items** (评论: 10)
    链接: https://github.com/NousResearch/hermes-agent/issues/27038
    **分析**：OpenAI Codex 接口对 ID 字段长度限制导致会话恢复失败。该 Bug 已关闭，说明核心的会话持久化机制得到了修复。

## 5. Bug 与稳定性
今日报告了多个影响体验的 Bug，部分已有修复方案：

*   **P1 - 严重**:
    *   **Desktop 会话消息串台/丢失** ([#54527](https://github.com/NousResearch/hermes-agent/issues/54527))：多窗口切换时输入内容可能丢失或发送到错误的会话。**状态：已修复 (PR #62413)**
    *   **Desktop NVIDIA 驱动崩溃** ([#40077](https://github.com/NousResearch/hermes-agent/issues/40077))：Ubuntu 24.04 下 NVIDIA 580+ 驱动导致 Electron 崩溃。**状态：Open，待排查。**
*   **P2 - 高优先级**:
    *   **TUI 界面假死** ([#54756](https://github.com/NousResearch/hermes-agent/issues/54756))：任务完成后 UI 仍显示 Busy 状态。**状态：Open**。
    *   **MCP 进程泄漏** ([#60385](https://github.com/NousResearch/hermes-agent/issues/60385))：重连时 MCP 服务进程未销毁，导致资源累积。**状态：Open**。
    *   **TUI 会话内容陈旧** ([#62170](https://github.com/NousResearch/hermes-agent/issues/62170))：切换会话后显示旧内容。**状态：Open**。
*   **P3 - 功能缺陷**:
    *   **技能自我改进循环失效** ([#62397](https://github.com/NousResearch/hermes-agent/issues/62397))：后台审查进程尝试修补技能时因"写前读"守卫而失败，导致学习丢失。**状态：已有修复 PR #62414**。

## 6. 功能请求与路线图信号
*   **上下文管理优化** ([#513](https://github.com/NousResearch/hermes-agent/issues/513))：用户迫切希望优化上下文压缩策略，不仅是减少 Token，更希望通过清理无用的工具输出来保留核心语义。结合今日对上下文压缩错误的修复，这可能是下一阶段的重点。
*   **子代理模型路由** ([#58731](https://github.com/NousResearch/hermes-agent/issues/58731))：请求支持在任务委托时为不同子代理指定不同模型。这对于构建复杂的 Multi-Agent 系统至关重要，结合 PR #62412 对 CLI 模型覆盖的修复，显示出项目正在完善多模型路由能力。
*   **企业级代理支持**：随着 Issue #5454 的关闭，项目对企业网络环境的支持迈出了关键一步。

## 7. 用户反馈摘要
*   **痛点：上下文压缩不可靠**：用户反馈在进行第二轮或第三轮压缩时，经常遇到 Jinja 模板错误导致会话损坏 ([#55677](https://github.com/NousResearch/hermes-agent/issues/55677))，且压缩机制有时会导致昂贵的 API 调用但效果不佳。
*   **痛点：Desktop 稳定性**：Desktop 版本在特定硬件（NVIDIA 580+）和特定操作（多会话切换、压缩状态显示）下表现不稳定，影响了作为日常主力工具的信心。
*   **正面反馈**：用户对新版引入的 Approval Hook 机制表示认可，但希望能支持更丰富的 Diff 展示 ([#61249](https://github.com/NousResearch/hermes-agent/issues/61249))。

## 8. 待处理积压
*   **[Issue #28156] Bedrock+Claude 认证与配置问题** (创建于 2026-05-18)：AWS Bedrock 的 IAM 认证流程与配置向导不一致，且 EU 区域配置存在问题。该 Issue 仍有活跃评论，但尚未彻底解决，影响云厂商用户接入。
*   **[Issue #48098] Desktop 状态显示残留** (创建于 2026-06-17)：线程压缩恢复后，UI 仍停留在 "Summarizing thread" 状态。该问题涉及 UI 与后端状态同步，尚未修复。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-07-11)

## 1. 今日速览
PicoClaw 项目今日呈现出较高的开发活跃度，社区贡献重点集中在**安全性加固**与**性能优化**方面。过去 24 小时内共有 18 个 PR 更新，其中绝大部分为待合并的新增功能与修复，显示项目正处于密集迭代期。值得注意的是，社区不仅关注新功能（如 WhatsApp 交互优化），还深入到底层依赖升级（Go 1.25.12）和内存分配优化，反映出项目对代码质量的高标准要求。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目进展主要集中在安全性修复、性能优化及通道功能增强，共有 1 个 PR 关闭/合并。

*   **安全性加固与依赖升级**：
    *   PR [#3248](https://github.com/sipeed/picoclaw/pull/3248) 将 Go 工具链升级至 1.25.12，修复了 `crypto/tls` 和 `os` 标准库中的安全漏洞，响应了 CI 中的 `govulncheck` 警告。
    *   PR [#3246](https://github.com/sipeed/picoclaw/pull/3246) 实施了多项安全加固，修复了 MQTT 通道默认跳过 TLS 验证的风险，并为 OAuth 刷新增加了超时机制。

*   **性能优化**：
    *   贡献者 @corporatepiyush 提交了一系列性能优化 PR（[#3243](https://github.com/sipeed/picoclaw/pull/3243), [#3244](https://github.com/sipeed/picoclaw/pull/3244), [#3245](https://github.com/sipeed/picoclaw/pull/3245)），主要针对 `seahorse` 和 `skills` 模块，通过使用 `strings.Builder` 和 `strings.NewReplacer` 替代低效的字符串拼接，显著降低了内存分配开销（从 O(n²) 优化至 O(n)）。

*   **通道功能增强**：
    *   PR [#3242](https://github.com/sipeed/picoclaw/pull/3242) 为 WhatsApp 原生回复添加了“正在输入...”状态显示，极大地提升了用户交互体验。
    *   PR [#3241](https://github.com/sipeed/picoclaw/pull/3241) 修复了 OAuth 刷新在不同提供商间的兼容性问题及并发安全问题。
    *   PR [#3205](https://github.com/sipeed/picoclaw/pull/3205) 增加了对 Linux ARMv7 架构的支持，并修复了 9router 网关响应解析问题，扩展了硬件兼容性。

## 4. 社区热点
今日讨论与活跃度最高的内容集中在**功能增强**与**架构改进**：

*   **Issue [#3240](https://github.com/sipeed/picoclaw/issues/3240) & PR [#3242](https://github.com/sipeed/picoclaw/pull/3242) (WhatsApp 交互体验)**：
    用户反馈在使用 WhatsApp 通道时，AI 回复期间缺乏反馈。作者 @greencabe 迅速响应并提交了 PR 实现了 "Typing Presence" 功能。这反映了用户对即时通讯类通道“实时反馈”的高敏感度需求。

*   **Issue [#3239](https://github.com/sipeed/picoclaw/issues/3239) & PR [#3241](https://github.com/sipeed/picoclaw/pull/3241) (OAuth 兼容性)**：
    指出了现有 OAuth 刷新机制对 OpenAI 等提供商的兼容性缺陷及并发风险。该问题的提出与修复 PR 几乎同步进行，显示了核心贡献者对系统底层健壮性的持续关注。

## 5. Bug 与稳定性
今日报告并处理的关键问题如下：

1.  **[高危] Go 标准库安全漏洞**
    *   **状态**：Fix PR [#3248](https://github.com/sipeed/picoclaw/pull/3248) 已提交。
    *   **详情**：涉及 `crypto/tls` 和 `os` 模块的已知漏洞，需升级至 Go 1.25.12。

2.  **[中危] OAuth 刷新机制存在竞态条件**
    *   **状态**：Fix PR [#3241](https://github.com/sipeed/picoclaw/pull/3241) 已提交。
    *   **详情**：Issue [#3239](https://github.com/sipeed/picoclaw/issues/3239) 指出 `auth.RefreshAccessToken` 在并发场景下存在隐患，且不兼容 OpenAI 的 JSON 格式要求。

3.  **[中危] MQTT 通道 TLS 验证缺失**
    *   **状态**：Fix PR [#3246](https://github.com/sipeed/picoclaw/pull/3246) 已提交。
    *   **详情**：原代码默认跳过证书验证，存在中间人攻击风险。

4.  **[已关闭] WhatsApp Websocket 超时**
    *   **状态**：Issue [#3178](https://github.com/sipeed/picoclaw/issues/3178) 已被关闭。
    *   **详情**：用户报告连接超时问题，该 Issue 被标记为 `stale` 后关闭。这可能是一个长期未解决的痛点，需关注是否有后续解决方案或确认为环境问题。

## 6. 功能请求与路线图信号
*   **模型降级链**：PR [#3200](https://github.com/sipeed/picoclaw/pull/3200) 提出增加可配置的默认模型降级链。这意味着用户希望主模型不可用时能自动切换到备用模型，提升服务可用性，是企业级部署的常见需求。
*   **Agent 协作总线**：PR [#2937](https://github.com/sipeed/picoclaw/pull/2937) 仍在活跃更新，引入了 Agent 间的持久化通信机制（邮箱、协作线程）。这预示着 PicoClaw 正在向多 Agent 协作架构演进，是一个极具战略意义的功能。
*   **Simplex 通道支持**：PR [#3193](https://github.com/sipeed/picoclaw/pull/3193) 正在增加 Simplex 通道类型，反映了社区对隐私友好通讯协议的支持需求。

## 7. 用户反馈摘要
*   **边缘计算与 IoT 场景**：从 Issue/PR #3205 可以看出，用户尝试在 Raspberry Pi 3B+ (ARMv7) 上部署 PicoClaw。用户反馈缺少 ARM 构建目标且特定网关解析失败，表明 PicoClaw 在边缘设备上的部署仍有优化空间。
*   **交互体验痛点**：用户对“静默处理”（发送消息后无反馈）感到困惑（Issue #3240），表明在即时通讯通道中，"Typing..." 状态是提升用户信任感的关键 UI/UX 元素。
*   **连接稳定性**：Issue #3178 虽已关闭，但反映了 Websocket 长连接保活仍是部分用户面临的实际难题。

## 8. 待处理积压
*   **长期未合并的大型 Feature PR**：PR [#2937](https://github.com/sipeed/picoclaw/pull/2937) (Agent Collaboration) 自 5 月开启至今，今日有更新但未合并。该 PR 涉及架构变动，建议维护者优先 review 以避免阻塞后续开发。
*   **文档迁移积压**：PR [#1951](https://github.com/sipeed/picoclaw/pull/1951) (安装脚本迁移) 自 3 月开启，今日有更新。此类文档/工程化改进建议尽快合入以改善新手体验。
*   **依赖更新积压**：存在多个 Dependabot 提起的依赖更新 PR（如 #3211, #3208），部分已标记 `stale`，建议定期批量处理以避免技术债务累积。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-07-11)

## 1. 今日速览
NanoClaw 今日保持高强度的开发迭代活力，过去 24 小时内 PR 更新量达 26 条，其中 11 条已合并/关闭，显示出核心团队正在积极推进架构重构与稳定性修复。今日重心集中在**通道架构解耦**与**时间戳标准化**两方面，多项核心重构落地显著提升了系统的可维护性。虽然无新版本发布，但 Issues 处理及时，2 个 Bug 已随相关 PR 的合并而关闭，整体项目健康度良好，处于快速演进阶段。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 11 个 PR 合并入主分支（或相关分支），标志着项目在架构治理和用户体验上迈出重要一步：

*   **通道架构重构落地**：合并了 [PR #3010](https://github.com/nanocoai/nanoclaw/pull/3010) 与 [PR #3011](https://github.com/nanocoai/nanoclaw/pull/3011)，将原本硬编码在核心逻辑中的通道行为（engage mode, threading 等）下放至各适配器声明。此举解耦了核心与通道逻辑，为后续适配新平台提供了更灵活的扩展性。同时，[PR #3009](https://github.com/nanocoai/nanoclaw/pull/3009) 将 WhatsApp 和 Slack 的格式化技能移出主干，减少了非必要资源的打包。
*   **时间戳标准化治理**：[PR #3006](https://github.com/nanocoai/nanoclaw/pull/3006)、[PR #3007](https://github.com/nanocoai/nanoclaw/pull/3007) 和 [PR #3005](https://github.com/nanocoai/nanoclaw/pull/3005) 完成了全仓库时间戳格式的统一（存储为 ISO UTC，显示为本地时间），修复了任务时间戳与聊天记录显示不一致的问题。
*   **开发者体验优化**：[PR #3004](https://github.com/nanocoai/nanoclaw/pull/3004) 新增了上下文预览工具，允许开发者精确模拟 Agent 视角的 Prompt，这对调试复杂场景极具价值。此外，[PR #3015](https://github.com/nanocoai/nanoclaw/pull/3015) 修复了实时进度条的渲染逻辑，解决了孤立任务卡和摘要丢失的问题。

## 4. 社区热点
尽管大部分活跃讨论发生在 PR Review 过程中（数据未显示具体评论数），但从提交频率和涉及模块来看，**Agent 记忆系统**与 **iMessage 通道统一**是当前最受关注的功能开发点：

*   **持久化记忆系统 ([PR #3012](https://github.com/nanocoai/nanoclaw/pull/3012), [PR #3013](https://github.com/nanocoai/nanoclaw/pull/3013))**：核心团队成员 @amit-shafnir 正在推动一套提供商无关的持久化记忆树，旨在让 Agent 在 session 重置后仍能保留记忆，这是向更智能 Agent 迈进的关键信号。
*   **iMessage 统一通道 ([PR #2999](https://github.com/nanocoai/nanoclaw/pull/2999))**：贡献者 @underthestars-zhy 提交了重构 PR，将本地与托管的 iMessage 后端统一为单一通道，简化了部署流程，预计将引起较多 Mac 用户的关注。

## 5. Bug 与稳定性
今日修复了两个关键的 CLI 创建流程 Bug，并发现了一个升级兼容性问题：

*   **[已修复] CLI 创建容器配置丢失 ([Issue #2415](https://github.com/nanocoai/nanoclaw/issues/2415))**：严重级。使用 `ncl groups create` 创建组后会导致首次 spawn 失败。该问题已随相关修复合并而关闭。
*   **[已修复] Wirings 消息静默丢弃 ([Issue #2389](https://github.com/nanocoai/nanoclaw/issues/2389))**：严重级。CLI 创建的 wirings 缺少 `agent_destinations` 记录，导致响应被静默吞掉。现已修复。
*   **[待修复] 旧版群组技能缓存阻塞 ([Issue #3001](https://github.com/nanocoai/nanoclaw/issues/3001))**：中等优先级。用户 @glifocat 报告称，在 4 月重构前创建的群组保留了过时的技能副本，导致新的托管符号链接失效，且无错误日志。目前该 Issue 处于 Open 状态，需开发者关注升级迁移逻辑。
*   **[待合并] 修复 Agent 消息发送边界检查 ([PR #3014](https://github.com/nanocoai/nanoclaw/pull/3014))**：修复了 `hasIdenticalSend` 的作用域绑定问题，防止错误的重复发送检查。

## 6. 功能请求与路线图信号
根据正在审查的大型 PR，下一阶段版本将重点发力以下领域：

*   **跨提供商记忆能力**：从 [PR #3012](https://github.com/nanocoai/nanoclaw/pull/3012) 看，项目正试图构建标准化的“长期记忆”层，这可能成为下一版本的核心卖点。
*   **任务投递架构改革**：[PR #2988](https://github.com/nanocoai/nanoclaw/pull/2988) 正在推行“单门投递”模式，强制所有任务会话通过 `send_message` 显式发送，这将大幅提升任务流的可控性与可观测性。
*   **通道能力增强**：Telegram 富文本渲染 ([PR #2877](https://github.com/nanocoai/nanoclaw/pull/2877)) 与 WhatsApp SKDM 修复 ([PR #3008](https://github.com/nanocoai/nanoclaw/pull/3008)) 表明项目正在补齐多平台通信的短板。

## 7. 用户反馈摘要
*   **CLI 工具稳健性不足**：Issues #2415 和 #2389 均指向 `bin/ncl` 命令行工具在创建资源时存在数据库写入不完整的情况（缺少配置行或目标行），导致运行时错误。这表明 CLI 层的业务逻辑测试覆盖率可能需要加强。
*   **升级体验痛点**：Issue #3001 反映了旧版本数据结构与新代码的兼容性问题。用户在生产环境中遇到“静默失败”，这通常比报错更令人沮丧，建议团队在文档中增加迁移指南或在代码中加入版本检测警告（如 [PR #3002](https://github.com/nanocoai/nanoclaw/pull/3002) 正在尝试做的）。

## 8. 待处理积压
*   **Issue #3001 (Open)**：旧群组技能缓存问题。这是一个典型的技术债/向后兼容性问题，若不处理将阻碍老用户的平滑升级。建议维护者尽快确认修复方案，或在 PR #3002 中增加自动清理逻辑。
*   **PR #2877 (Open)**：Telegram 富文本功能已停留较长时间（创建于 6 月 28 日），建议核心团队评估合并进度，以免功能过期。
*   **PR #2999 (Open)**：iMessage 统一通道重构，涉及架构变动，需重点 Review 以确保本地与云端双模式的稳定性。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 (2026-07-11)

## 1. 今日速览
NullClaw 项目今日整体活跃度较低，代码层面无合并 PR 或版本发布，重心主要集中在社区问题排查与安全漏洞披露。过去 24 小时内有 2 个 Issue 处于活跃状态，其中包含一个新提交的安全隐患 Bug，涉及 A2A 路由的权限隔离问题。项目当前处于维护修整阶段，建议密切关注安全相关的后续修复进展。

## 2. 版本发布
无。

## 3. 项目进展
今日无合并或关闭的 Pull Request，项目代码库无明显推进。开发活动暂时停滞，可能正处于新功能开发间隙或维护者处理积压问题的阶段。

## 4. 社区热点
今日讨论最活跃的 Issue 是 **[#972 [bug] telegram channel stop respond after some idle time](https://github.com/nullclaw/nullclaw/issues/972)**。
该问题自 6 月底提出以来持续有用户反馈，今日再次更新。讨论焦点在于 Telegram 频道在长时间空闲后“假死”，虽然后端日志显示 Agent 运行正常（如 memory plan resolved 正常），但前端无响应。这反映了社区对于即时通讯平台接入稳定性的强烈诉求，以及用户对后端存活但前端掉线这一“幽灵故障”的排查困扰。

## 5. Bug 与稳定性
今日报告/更新的 Bug 按严重程度排列如下：

*   **[高危] #974 [BUG] NullClaw shared bearer A2A route allows cross-caller task and context reuse**
    *   **链接**: [nullclaw/nullclaw Issue #974](https://github.com/nullclaw/nullclaw/issues/974)
    *   **详情**: 这是一个新报告的安全漏洞。虽然 A2A 路由使用了 Bearer Token 保护，但在任务选择和上下文验证环节存在逻辑缺陷。攻击者只要拥有有效的 Bearer Token，即可通过操纵 task id 和 contextId 读取其他用户的任务历史，甚至复用其上下文。这违反了多租户环境下的数据隔离原则，属于严重的权限控制缺失。
    *   **状态**: 尚无 Fix PR。

*   **[中危] #972 [bug] telegram channel stop respond after some idle time**
    *   **链接**: [nullclaw/nullclaw Issue #972](https://github.com/nullclaw/nullclaw/issues/972)
    *   **详情**: 涉及 Telegram Channel 连接稳定性。用户反馈在隔夜空闲后，客户端停止响应，但后端服务依然存活。此问题影响用户体验，可能导致关键消息丢失或服务不可用，但尚未确认根本原因（是连接超时、心跳缺失还是 API 限制）。
    *   **状态**: 尚无 Fix PR。

## 6. 功能请求与路线图信号
今日无新增功能请求。但从 #972 的讨论中可以看出，社区对 **连接保活机制** 和 **断线自动重连** 功能有隐含需求。未来版本若能增强 Channel 层的健康检查与自动恢复能力，将显著提升项目作为长期运行 Agent 的可靠性。

## 7. 用户反馈摘要
从 Issues 评论中提炼出以下用户痛点：
*   **连接维护痛点**: 用户在部署 NullClaw 作为长期服务时，频繁遭遇即时通讯通道断连问题，且缺乏有效的自愈手段，目前需要人工干预或重启服务。
*   **安全配置困惑**: #974 暴露出用户（或开发者）在配置多用户环境时，误以为 Bearer Token 足以保证隔离，忽略了上下文 ID 的越权风险。这表明文档或默认配置可能需要加强对多租户安全隔离的说明或限制。

## 8. 待处理积压
*   **Issue #972**: 该 Bug 已存在约 11 天，至今未关闭且今日仍有活跃更新。鉴于其影响 Telegram 这一主流接入渠道，建议维护者优先排查是否为底层 SDK 连接池管理问题，或补充临时的重启/重连解决方案。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-07-11)

## 1. 今日速览
IronClaw 项目今日保持极高活跃度，开发者正集中精力修复 "Reborn" 架构下的稳定性问题与用户体验缺陷。过去 24 小时内共有 36 条 Issue 更新（其中 28 条为新发现问题）和 50 条 PR 更新，显示出项目正处于快速迭代与排错阶段。尽管没有发布新版本，但核心贡献者合并了多个关键修复，解决了启动崩溃循环和上下文压缩失败等严重阻碍。同时，社区提交了多个大型功能 PR，标志着项目正在向更智能的记忆管理和工具检索能力演进。

## 2. 版本发布
无新版本发布。但在 PR #5598 中可见发布准备工作正在进行，预计下一版本将包含 `ironclaw_common` 和 `ironclaw_skills` 的 API 破坏性更新。

## 3. 项目进展
今日共有 15 个 PR 被合并/关闭，主要集中在运行时稳定性、Agent 逻辑优化及测试覆盖率提升：

*   **关键稳定性修复**：合并了 [PR #5967](https://github.com/nearai/ironclaw/pull/5967)，修复了托管环境下启动时的崩溃循环问题；合并了 [PR #5895](https://github.com/nearai/ironclaw/pull/5895)，解决了长时间 Tool 调用后的上下文压缩失败问题。
*   **Agent 能力增强**：合并了 [PR #5960](https://github.com/nearai/ironclaw/pull/5960)，将默认循环迭代上限从 32 提升至 256，大幅减少了复杂任务的意外中断；合并了 [PR #5844](https://github.com/nearai/ironclaw/pull/5844)，优化系统提示词，强制 Agent 使用工具进行计算而非“脑算”。
*   **架构清理**：合并了 [PR #5817](https://github.com/nearai/ironclaw/pull/5817)，修复了 Agent 错误识别小数为能力 ID 的逻辑缺陷。

## 4. 社区热点
今日讨论最活跃的 Issue 集中在扩展状态反馈与集成易用性上：

*   **[Issue #5948](https://github.com/nearai/ironclaw/issues/5948)**：Assistant 错误报告 GitHub 扩展状态。用户指出扩展仅处于“Installed”状态，但 Assistant 却声称已“Activated”，导致用户困惑。该 Issue 引发了 5 条评论讨论状态检查逻辑的缺失。
*   **[Issue #5747](https://github.com/nearai/ironclaw/issues/5947)**：Slack 集成无法解绑。用户反馈在内置 Slack mount 上无法取消配对，阻碍了账户重新连接流程。
*   **[Issue #5707](https://github.com/nearai/ironclaw/issues/5707)**：Routine 创建响应暴露内部实现细节。用户认为返回的信息包含了不应该暴露给普通开发者的 Trigger 名称和 Cron 语法，体验不友好。

## 5. Bug 与稳定性
今日报告了大量 Bug，部分已修复，部分仍待处理：

*   **P1 级别 (Critical)**：
    *   [Issue #5943](https://github.com/nearai/ironclaw/issues/5943)：Slack DM 动作错误发送到当前 Channel 而非私信，存在隐私泄露风险，目前**未修复**。
    *   [Issue #5966](https://github.com/nearai/ironclaw/issues/5966)：启动崩溃循环，**已由 PR #5967 修复**。
*   **P2 级别 (Major)**：
    *   [Issue #5836](https://github.com/nearai/ironclaw/issues/5836)：Routine 定时任务因无法附加 Thread 而持续失败，**未修复**。
    *   [Issue #5946](https://github.com/nearai/ironclaw/issues/5946)：Agent 在确认 Trigger 可用前就先修改了 Google Sheet，存在副作用风险，**未修复**。
    *   [Issue #5838](https://github.com/nearai/ironclaw/issues/5838)：上下文压缩错误导致任务失败，**已由 PR #5895 修复**。

## 6. 功能请求与路线图信号
社区与开发者正在推动 Agent 向更持久化和智能化的方向发展：

*   **记忆系统**：[PR #5974](https://github.com/nearai/ironclaw/pull/5974) 提出了跨会话摘要与回忆机制，旨在实现 Agent 的“情景记忆”，这是迈向长期个性化助手的关键一步。
*   **动态工具检索**：[PR #5972](https://github.com/nearai/ironclaw/pull/5972) 引入了 Per-turn 工具检索机制，试图通过动态匹配工具来降低 Prompt Token 消耗并提升相关性。
*   **架构清理**：[Issue #5935](https://github.com/nearai/ironclaw/issues/5935) 提议彻底移除旧的 v1 runtime (`src/` 代码)，标志着 Reborn 架构即将成为唯一主分支。

## 7. 用户反馈摘要
从 Issue 列表中可以看出用户在实际生产环境中的痛点：

*   **状态同步认知偏差**：用户对“安装”、“激活”、“配置”的状态混淆严重，UI 状态与 Agent 回复不一致是主要痛点（#5948）。
*   **静默失败**：多个 Issue（#5944, #5836）反映任务显示成功但实际未执行，或报错信息模糊（"model provider was unavailable"），用户难以排查。
*   **多步工作流受限**：用户尝试让 IronClaw 执行多步投资笔记编写时，因工具调用限制或 Agent 停滞而失败（#5955），显示出当前 Agent 在复杂任务规划上的不足。

## 8. 待处理积压
*   **重要待合并 PR**：[PR #5975](https://github.com/nearai/ironclaw/pull/5975) 提出了针对 Prompt-cache break 的检测机制，旨在解决长上下文导致的成本激增问题，建议优先 Review。
*   **长期未解问题**：[Issue #5741](https://github.com/nearai/ironclaw/issues/5741) 关于 `builtin.http.save` 在处理大响应时失败的问题，自 7 月 6 日提出后虽经讨论但尚未有关闭迹象，影响数据抓取类工作流。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-07-11)

## 1. 今日速览
今日 LobsterAI 项目保持**高度活跃**状态，团队刚刚发布了 `2026.7.10` 新版本，重点增强了多智能体协作能力与用户体验。过去 24 小时内，项目处理了 17 个 PR（合并 10 个），主要集中在修复版本迭代中发现的稳定性问题及 IM 集成兼容性。虽然新版本引入了子智能体协作功能，但社区随即反馈了关于多 Agent 配置文件覆盖的严重 Bug，需引起开发团队重视。整体来看，项目迭代速度加快，但在多实例配置隔离的测试覆盖上可能存在不足。

## 2. 版本发布
**[Release] LobsterAI 2026.7.10**
- **发布时间**：2026-07-10
- **更新亮点**：
  - **协作增强**：新增支持委托子智能体协作，允许 Agent 将任务分发给子 Agent 处理，标志着项目向多智能体编排迈出重要一步。
  - **交互优化**：增加了可最小化的权限提示，减少对用户工作流的打扰。
- **链接**：[LobsterAI 2026.7.10](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.10)

## 3. 项目进展
今日共有 **10 个 PR 合并入主分支**，项目整体质量与稳定性显著提升：

- **功能增强**：
  - [PR #2310](https://github.com/netease-youdao/LobsterAI/pull/2310)：支持将本地文件夹作为上下文附件发送，增强了 Agent 对代码库或文档目录的分析能力。
- **关键修复**：
  - [PR #2311](https://github.com/netease-youdao/LobsterAI/pull/2311)：修复了所有 Agent 的 FTS（全文搜索）索引迁移问题，解决了潜在的记忆检索故障。
  - [PR #2314](https://github.com/netease-youdao/LobsterAI/pull/2314) & [PR #2306](https://github.com/netease-youdao/LobsterAI/pull/2306)：集中修复了企业微信与钉钉群聊定时任务的路由及 ID 大小写兼容问题，提升了 IM 集成的鲁棒性。
  - [PR #2312](https://github.com/netease-youdao/LobsterAI/pull/2312)：修复了 AskUser 模块在最小化状态下的数据丢失问题。
  - [PR #2316](https://github.com/netease-youdao/LobsterAI/pull/2316)：修复了 Windows 端侧边栏折叠时标题栏 Logo 被压缩的 UI 问题。

## 4. 社区热点
今日社区讨论焦点主要集中在多智能体配置的独立性问题上：

- **[Issue #2293] 重启后，多个agent下的USER.md被覆盖替换的BUG？**
  - **链接**：[netease-youdao/LobsterAI Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293)
  - **分析**：该 Issue 报告了一个严重的数据逻辑错误。用户发现修改单个 Agent 的 `USER.md`（“关于你”设置）会导致所有 Agent 的该文件被同步覆盖，且重启后会被 Main Agent 的配置强制替换。这直接影响了多 Agent 场景下的核心使用体验，表明新版本在多实例配置隔离机制上存在缺陷，是当前最高优先级的反馈。

- **[Issue #1337] 会话列表缺少按时间分组功能**
  - **链接**：[netease-youdao/LobsterAI Issue #1337](https://github.com/netease-youdao/LobsterAI/issues/1337)
  - **分析**：用户长期呼吁对标 ChatGPT/Claude 的历史记录管理体验，建议增加“今天/昨天/本周”的时间分组，反映出用户对大量历史会话管理效率的痛点。

## 5. Bug 与稳定性
今日报告的 Bug 集中在数据持久化与 UI 交互层面：

- **🔴 严重**：
  - [Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293)：多 Agent 环境下 `USER.md` 配置互相覆盖，导致用户无法为不同 Agent 设定独立人设。**当前无关联 Fix PR**，建议立即排查。

- **🟡 已修复**：
  - **IM 集成**：企微/钉钉群聊 ID 大小写处理不当导致定时任务投递失败，已通过 [PR #2314](https://github.com/netease-youdao/LobsterAI/pull/2314) 修复。
  - **UI 渲染**：Windows 标题栏 Logo 压缩变形，已通过 [PR #2316](https://github.com/netease-youdao/LobsterAI/pull/2316) 修复。
  - **构建兼容**：空字节剥离逻辑不符合 ES2020 标准，已通过 [PR #2309](https://github.com/netease-youdao/LobsterAI/pull/2309) 修复。

## 6. 功能请求与路线图信号
根据 Issues 与活跃的陈旧 PR，发现以下明显的路线图信号：

- **会话管理优化**：[Issue #1337](https://github.com/netease-youdao/LobsterAI/issues/1337) 与 [PR #1338](https://github.com/netease-youdao/LobsterAI/pull/1338) 均提及“按时间分组展示会话”。虽然 PR 标记为 Stale，但今日有更新，表明社区对该功能的强烈需求，可能成为下一阶段 UX 改进的重点。
- **MCP 配置体验**：[PR #1336](https://github.com/netease-youdao/LobsterAI/pull/1336) 提出支持 JSON 粘贴导入 MCP 服务器配置，简化了复杂配置流程，符合降低用户使用门槛的趋势。
- **工作日定时任务**：[PR #1335](https://github.com/netease-youdao/LobsterAI/pull/1335) 增加了“工作日（周一至周五）”的定时任务选项，完善了自动化场景。

## 7. 用户反馈摘要
从 Issues 评论中提炼出以下真实用户声音：

- **多 Agent 场景痛点**：用户明确表达了需要“差异化配置 Agent”的需求。目前的配置覆盖机制使得多 Agent 系统名存实亡，用户无法在不同 Workspace 中维护独立的 Agent 人设。
- **历史记录管理困难**：随着使用时间增长，用户对会话列表的查找效率感到不满，希望有更清晰的时间维度划分（"今天"、"昨天"）。
- **IM 集成需求**：定时任务与企业微信/钉钉的打通是高频使用场景，用户对 ID 处理的细节敏感度较高。

## 8. 待处理积压
以下重要 Issue 或 PR 长期未获最终处理，建议维护者关注：

- **[PR #1276](https://github.com/netease-youdao/LobsterAI/pull/1276) & [PR #1275](https://github.com/netease-youdao/LobsterAI/pull/1275)**：Dependabot 提出的 CI 依赖更新（first-interaction, stale actions），自 4 月开启至今未合并，可能影响仓库维护工具链的安全性。
- **[Issue #1337](https://github.com/netease-youdao/LobsterAI/issues/1337)**：会话分组功能请求，长期未关闭，今日有活跃更新，建议重新评估优先级。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 (2026-07-11)

## 1. 今日速览
Moltis 项目今日整体活跃度较低，处于平稳迭代期。过去 24 小时内无新增 Issues 或版本发布，未收到新的用户故障报告。项目唯一的动态集中在代码贡献层面，有一个关于前沿模型支持的重要 PR正处于待审核状态。整体来看，项目运行平稳，核心维护方向紧跟大模型技术发展前沿。

## 2. 版本发布
无。

## 3. 项目进展
今日无已合并或关闭的 PR，代码库未发生实质性变更。项目当前处于功能审核阶段，待合并的 PR 预示着项目正在积极准备下一代模型支持的更新。

## 4. 社区热点
今日唯一的活跃动态来自 Pull Request #1146。
*   **动态**：**[PR #1146 Add GPT-5.6 model support](https://github.com/moltis-org/moltis/pull/1146)**
*   **分析**：该 PR 由核心贡献者 @PeterDaveHello 提交，旨在为 Moltis 接入 GPT-5.6 系列模型。这表明项目社区高度关注 AI 领域的最新进展，致力于在第一时间提供对新硬件/API 的兼容支持。该 PR 涉及更新配置文档和模型目录，属于关键功能更新，需维护者重点关注其 API 兼容性测试。

## 5. Bug 与稳定性
过去 24 小时内未收到新的 Bug 报告或崩溃反馈。项目当前稳定性良好，无阻塞性问题。

## 6. 功能请求与路线图信号
*   **信号源**：[PR #1146](https://github.com/moltis-org/moltis/pull/1146)
*   **分析**：贡献者直接提交了针对 GPT-5.6（包括 Sol, Terra, Luna 变体）的支持代码。这释放出明确的路线图信号：**项目下一阶段的重点之一是支持超大上下文窗口（1.05M context window）及最新的 OpenAI API 规范**。
*   **预测**：若该 PR 顺利合并，下个版本将极大概率包含对 GPT-5.6 系列模型的完整支持，巩固其作为前沿 AI 智能体框架的市场地位。

## 7. 用户反馈摘要
由于今日无新增 Issue 或评论数据，暂无具体的用户痛点或使用场景反馈可供提炼。

## 8. 待处理积压
*   **关键待处理 PR**：[PR #1146 Add GPT-5.6 model support](https://github.com/moltis-org/moltis/pull/1146)
    *   **状态**：Open（创建于 07-09，更新于 07-10）
    *   **提醒**：该 PR 已提交 2 天，处于待合并状态。鉴于其涉及核心模型支持的更新，建议维护者尽快进行代码审查与兼容性测试，以便及时纳入主线。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (QwenPaw) 项目动态日报 (2026-07-11)**

> **注**：用户输入项目名为 CoPaw，但提供的数据均指向 **QwenPaw** 仓库。本报告基于 QwenPaw 的实际数据生成。

### 1. 今日速览
今日是 QwenPaw 项目的里程碑日，**v2.0.0 正式版**已成功发布，标志着项目架构从 AgentScope 1.x 完成了向 2.0 的全面迁移。项目活跃度极高，共处理了 43 条 Issue 更新（关闭 23 条）和 45 条 PR 更新（合并/关闭 25 条），显示出团队在发布新版本时的极高执行力和社区响应速度。然而，随着 v2.0.0 的发布，部分用户报告了严重的回归问题，特别是 Windows 桌面端沙箱机制导致的资源耗尽问题，值得高度关注。

### 2. 版本发布
**v2.0.0 (Stable)** 正式发布，这是今日最重要的更新。
*   **核心变更**：重构了底层内核，基于 **AgentScope 2.0** 全新架构，带来 Runtime 2.0。
*   **破坏性变更**：后端依赖完全迁移至 AgentScope 2.0，旧版 API 和 Runtime 模型不再兼容。
*   **迁移注意事项**：社区已出现关于升级指南的请求 ([#5948](https://github.com/agentscope-ai/QwenPaw/issues/5948))，建议用户关注 Breaking Changes，特别是历史消息和记忆的兼容性问题。
*   **前置版本**：Beta.7 修复了 ReMe 记忆归档缺少 session_id 的问题 ([#5938](https://github.com/agentscope-ai/QwenPaw/pull/5938))；Beta.6 增加了单元测试覆盖。

### 3. 项目进展
今日共有 25 个 PR 被合并或关闭，主要集中在稳定性修复和 2.0 发布的收尾工作：
*   **发布准备**：PR [#5942](https://github.com/agentscope-ai/QwenPaw/pull/5942) 完成了版本号升级，PR [#5932](https://github.com/agentscope-ai/QwenPaw/pull/5932) 和 [#5940](https://github.com/agentscope-ai/QwenPaw/pull/5940) 更新了文档和官网文案，配合 2.0 发布。
*   **关键修复**：
    *   PR [#5938](https://github.com/agentscope-ai/QwenPaw/pull/5938)：修复了命令触发的记忆归档中 `session_id` 缺失问题，确保记忆溯源的准确性。
    *   PR [#5936](https://github.com/agentscope-ai/QwenPaw/pull/5936)：回滚了时间注入功能，解决了 UI 显示丑陋的问题，体现了团队对用户体验细节的把控。
*   **功能迭代**：
    *   PR [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) 正在推进记忆搜索的重排序功能。
    *   PR [#5726](https://github.com/agentscope-ai/QwenPaw/pull/5726) 实现了视觉降级功能，允许纯文本模型调用视觉模型处理图片。

### 4. 社区热点
今日社区讨论热度最高的话题集中在 v2.0 发布带来的新特性与问题：
*   **Issue [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) [CLOSED]**：关于迁移至 AgentScope 2.0 的 Breaking Change 讨论，随着 v2.0.0 的发布，此议题正式关闭，标志着迁移工作的阶段性完成。
*   **Issue [#5273](https://github.com/agentscope-ai/QwenPaw/issues/5273) [CLOSED]**：v2.0.0 预发布版本的问题跟踪帖，随着正式版发布，此类跟踪 Issue 已被清理。
*   **Issue [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) [CLOSED]**：前端控制台在渲染大量工具调用历史时崩溃的问题已修复，解决了复杂场景下的前端性能瓶颈。

### 5. Bug 与稳定性
v2.0.0 发布伴随若干严重 Bug，部分影响核心功能：
*   **P0 严重 (新)**：**Windows 桌面沙箱递归爆炸** ([#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951))。用户报告执行 shell 命令会导致 PowerShell 进程无限递归弹出，内存占用飙升至 20GB，且无法关闭沙箱。目前无修复 PR，建议用户暂时回退至 v1.1.12.post3。
*   **P1 高危 (新)**：**MCP 权限控制失效** ([#5947](https://github.com/agentscope-ai/QwenPaw/issues/5947))。v2.0.0 中 MCP 工具的 "拒绝/允许" 设置失效，Agent 仍可调用被禁用的子工具。已提交修复 PR [#5949](https://github.com/agentscope-ai/QwenPaw/pull/5949)。
*   **P1 高危 (新)**：**中文记忆索引截断错误** ([#5950](https://github.com/agentscope-ai/QwenPaw/issues/5950))。使用 Ollama + bge-m3 时，中文记忆文件因按字符而非 Token 截断导致 400 错误。
*   **P2 中危 (新)**：**WebUI 技能显示限制** ([#5955](https://github.com/agentscope-ai/QwenPaw/issues/5955))。前端仅显示 20 个激活技能，无法查看更多或已禁用技能。

### 6. 功能请求与路线图信号
*   **会话管理增强**：Issue [#5903](https://github.com/agentscope-ai/QwenPaw/issues/5903) 呼吁增加会话分组及导入导出功能，用户反馈强烈。已有相关设计提案 Issue [#5943](https://github.com/agentscope-ai/QwenPaw/issues/5943)，预计近期会有 PR 合并。
*   **权限模式优化**：Issue [#5955](https://github.com/agentscope-ai/QwenPaw/issues/5955) 中用户对新版的权限审批模式提出异议，建议增加 "工具白名单" 模式以减少重复审批，反映出用户对自动化与安全平衡的迫切需求。
*   **LaTeX 渲染支持**：Issue [#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453) 请求在桌面端支持 LaTeX 公式渲染，属于用户体验优化的常规需求。

### 7. 用户反馈摘要
*   **痛点**：v2.0.0 升级后的破坏性变更让部分用户措手不及，尤其是缺少明确的升级指南 ([#5948](https://github.com/agentscope-ai/QwenPaw/issues/5948))。Windows 桌面端的沙箱机制因无法关闭且导致系统卡死，引发用户强烈不满 ([#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951))。
*   **场景**：用户在处理大量工具历史记录、本地模型中文 Embedding、以及自动化流程（免审批调用工具）等场景下遇到了明显阻碍。
*   **满意度**：尽管存在回归 Bug，社区对 v2.0.0 的发布仍持积极态度，对 AgentScope 2.0 的新架构表示期待，但对文档滞后和桌面端稳定性表示担忧。

### 8. 待处理积压
*   **Issue [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951)**：Windows 沙箱严重崩溃问题，目前处于 Open 状态，严重影响桌面端用户，需立即响应。
*   **Issue [#5950](https://github.com/agentscope-ai/QwenPaw/issues/5950)**：Embedding 截断逻辑错误，影响本地模型用户的记忆功能，需代码层面的修正。
*   **Issue [#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952)**：自动记忆模块缺失 `agentscope.tool._builtin._scripts`，导致记忆总结任务全量失败。
*   **PR [#5949](https://github.com/agentscope-ai/QwenPaw/pull/5949)**：修复 MCP 权限失效的关键 PR，待合并。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目日报 (2026-07-11)

## 1. 今日速览
EasyClaw 项目今日呈现出“静默开发、高频发布”的态势。在过去 24 小时内，项目没有新的 Issue 提交或 Pull Request 活跃记录，社区交互暂时处于静默期。然而，核心团队保持高强度的开发节奏，连续发布了 3 个小版本更新（v1.8.60 至 v1.8.62），重点聚焦于中国网络环境下的 Windows 节点稳定性及飞书集成体验优化。整体来看，项目当前处于功能打磨与稳定性加固阶段，代码活跃度高，但社区反馈渠道暂无新增数据。

## 2. 版本发布
今日项目连续发布了三个版本，显示出团队正在快速迭代修复特定场景下的问题。

### v1.8.62 (Latest)
**发布链接：** [https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.62](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.62)
**更新重点：** 网络环境适配与稳定性
- **核心更新：** 针对中国网络环境，增强了 Windows 节点的 Node provisioning（节点配置）稳定性。
- **分析：** 此举表明项目正致力于解决跨区域网络基础设施差异带来的部署痛点，特别是针对中国用户的网络环境进行了专门的连接性与稳定性优化，对于提升国内用户的接入成功率至关重要。

### v1.8.61
**发布链接：** [https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.61](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.61)
**更新重点：** Agent 工具链与消息流
- **云端工具就绪保护：** Gate desktop agent tooling 增加了云端工具就绪状态的保护机制，防止在工具未准备好时进行无效调用。
- **飞书流式回复优化：** 修复并稳定了飞书 CardKit 的流式回复，确保内容更新在同一张卡片上完成，改善了用户在 IM 端的阅读体验。
- **持久化支持：** 支持远程持久化工具结果，改进了 Windows gateway 的任务处理逻辑。
- **分析：** 该版本显著增强了 Agent 工具调用的健壮性和远程协同能力，特别是飞书卡片的优化直接提升了终端用户的交互体验。

### v1.8.60
**发布链接：** [https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.60](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.60)
**更新重点：** 数据完整性与文档
- **数据完整性：** 在消息更新过程中增加了对飞书引用卡片内容的保留逻辑，防止信息丢失。
- **文档完善：** 完善了 agent 店铺中空字段的文档说明，降低了开发者的理解门槛。

---

*注：今日无活跃 Issues 与 PRs，故“项目进展”、“社区热点”、“Bug 与稳定性”、“功能请求与路线图信号”、“用户反馈摘要”及“待处理积压”部分省略。*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*