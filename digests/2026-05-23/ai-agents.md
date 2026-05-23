# OpenClaw 生态日报 2026-05-23

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-23 03:32 UTC

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

# OpenClaw 项目动态日报 (2026-05-23)

## 1. 今日速览

OpenClaw 今日处于高强度的开发迭代状态，社区活跃度异常火爆。过去 24 小时内，新增与活跃 Issues 达 **437 条**，仅关闭 63 条；Pull Requests 活跃度同样惊人，待合并 PR 高达 **378 条**，已合并/关闭 122 条。无新版本发布。数据表明，项目正处于功能快速扩张与问题集中暴露的阶段，核心团队面临巨大的评审与维护压力，积压问题急需疏通。

## 2. 版本发布

**无新版本发布。**

## 3. 项目进展

今日共有 122 个 PR 被合并或关闭，主要推进了稳定性修复与安全加固：

- **安全加固**：PR #81185 合并了 exec 工具结果负载的修订功能，防止敏感信息泄露；PR #85578 强化了包 URL 下载安全性，阻止不安全目标的请求。
- **核心修复**：PR #84152 修复了子代理模型优先级的回归问题；PR #85594 解决了 Anthropic API 在切换思考模式时的 `invalid_request_error`；PR #85586 修复了会话归档失败的问题。
- **功能增强**：PR #85606 为 `sessions_list` 工具增加了可恢复字段，优化了编排代理体验；PR #85096 增加了代理工作区一致性检查策略。

项目整体在安全性、会话管理及代理编排能力上取得了实质性进展。

## 4. 社区热点

今日讨论最热烈的议题集中在跨平台支持与安全模型上：

1.  **[Issue #75](https://github.com/openclaw/openclaw/issues/75)**：请求开发 Linux 和 Windows 原生应用。
    *   **热度**：评论 105 条，👍 76。
    *   **诉求**：用户希望在 macOS、iOS、Android 之外，补全 Linux 和 Windows 的原生客户端体验，实现全平台覆盖。
2.  **[Issue #25592](https://github.com/openclaw/openclaw/issues/25592)**：工具调用间的文本泄露至消息通道。
    *   **热度**：评论 26 条。
    *   **诉求**：这是一个严重的 UX 问题，代理在处理过程中的内部文本（如错误处理、确认信息）被错误地发送给用户，用户要求修复此路由逻辑。
3.  **[Issue #9443](https://github.com/openclaw/openclaw/issues/9443)**：请求提供预编译的 Android APK。
    *   **热度**：评论 24 条。
    *   **诉求**：简化 Android 端用户安装流程，避免从源码编译的复杂性。
4.  **[Issue #8719](https://github.com/openclaw/openclaw/issues/8719)**：提议 OpenClaw 安全配置文件 v1.1。
    *   **热度**：评论 7 条。
    *   **诉求**：设计一个以数据为中心、默认安全的模型，以降低钱包盗窃、数据库擦除等安全风险。

## 5. Bug 与稳定性

今日报告的严重 Bug 集中在会话管理、安全与并发处理上：

-   **P1 - 安全/数据泄露**：[Issue #25592](https://github.com/openclaw/openclaw/issues/25592) 工具调用间的内部文本泄露到消息通道。
-   **P1 - 崩溃/稳定性**：[Issue #22676](https://github.com/openclaw/openclaw/issues/22676) Signal 守护进程在重启时存在竞争条件，导致孤儿进程和发送失败。
-   **P1 - 数据丢失**：[Issue #44925](https://github.com/openclaw/openclaw/issues/44925) 子代理完成结果静默丢失，无重试或通知机制。
-   **P1 - 性能回归**：[Issue #85333](https://github.com/openclaw/openclaw/issues/85333) `openclaw doctor --fix` 在最新版本性能下降 4-5 倍。
-   **P1 - 内存溢出**：[Issue #55334](https://github.com/openclaw/openclaw/issues/55334) `sessions.json` 无限增长导致网关 OOM。
-   **P1 - 回归**：[Issue #58479](https://github.com/openclaw/openclaw/issues/58479) 控制台审批对话框成功但执行层未消费审批。
-   **Fix PRs**：大部分问题已有对应的修复 PR（如 #85594, #85586），但部分积压严重的问题（如 #25592）仍待处理。

## 6. 功能请求与路线图信号

社区提出了多项高质量功能请求，反映了向企业级安全与精细化控制发展的趋势：

-   **安全与权限**：
    -   [Issue #10659](https://github.com/openclaw/openclaw/issues/10659) (P1)：请求“掩码密钥”功能，允许代理使用但不查看 API 密钥。
    -   [Issue #13583](https://github.com/openclaw/openclaw/issues/13583) (P2)：请求响应前强制执行钩子，确保高风险操作前的合规检查。
    -   [Issue #7722](https://github.com/openclaw/openclaw/issues/7722) (P2)：文件系统沙箱配置。
-   **代理编排与体验**：
    -   [Issue #22438](https://github.com/openclaw/openclaw/issues/22438) (P2)：分层引导文件加载，优化上下文窗口预算。
    -   [Issue #12602](https://github.com/openclaw/openclaw/issues/12602) (P2)：支持 Slack Block Kit，提升交互体验。
-   **集成与运维**：
    -   [Issue #18160](https://github.com/openclaw/openclaw/issues/18160) (P2)：为 Cron 任务提供直接执行模式，绕过 LLM 提高可靠性。
    -   [Issue #13610](https://github.com/openclaw/openclaw/issues/13610) (P2)：集成 AWS Secrets Manager 等原生密钥管理。

**预测**：鉴于安全相关 Issue 的高优先级和讨论热度，下一版本极可能重点引入密钥管理增强（掩码/集成）和更细粒度的执行权限控制。

## 7. 用户反馈摘要

从 Issues 评论中可以提炼出以下核心反馈：

-   **痛点**：
    -   **安全性焦虑**：用户对代理拥有完整 API Key 权限感到不安，强烈要求“最小权限原则”和审计能力。
    -   **可靠性缺失**：子代理静默失败、会话丢失、内存溢出等问题影响了生产环境部署信心。
    -   **跨平台体验断裂**：缺乏 Windows/Linux 客户端导致部分用户无法完整体验产品。
-   **场景**：用户正在尝试将 OpenClaw 用于生产运维、金融量化交易等高敏感场景，这对系统的稳定性和安全性提出了极高要求。
-   **满意点**：用户对 OpenClaw 的扩展性和多通道集成能力表示认可，积极提出改进建议。

## 8. 待处理积压

当前待合并 PR (378) 与活跃 Issue (437) 数量巨大，建议重点关注：

1.  **长期未决的高优先级 Issue**：
    -   [Issue #75](https://github.com/openclaw/openclaw/issues/75) (Linux/Windows 客户端)：自 1 月创建，需明确是否纳入路线图。
    -   [Issue #25592](https://github.com/openclaw/openclaw/issues/25592) (消息泄露)：P1 安全问题，需尽快修复。
2.  **关键待审 PR**：
    -   [PR #81185](https://github.com/openclaw/openclaw/pull/81185) (Exec 工具结果修订)：涉及核心安全功能。
    -   [PR #85579](https://github.com/openclaw/openclaw/pull/85579) (Thinking 签名保留)：修复 Anthropic 接口兼容性问题。
    -   [PR #85569](https://github.com/openclaw/openclaw/pull/85569) (包管理器硬链接)：涉及更新逻辑，需确保兼容性。

建议维护者优先处理 P1 级别的安全和稳定性积压，并重新评估待合并 PR 的优先级以加快流转。

---

## 横向生态对比

# AI 智能体与个人助手开源生态日报 (2026-05-23 横向分析)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于从"单一对话工具"向"多模态、多智能体协作平台"跨越的关键期。核心项目普遍面临**安全性焦虑**与**稳定性挑战**，在扩展功能边界的同时不得不回过头修补基础设施漏洞。多渠道接入、多模型路由及子智能体编排成为标配能力，而针对生产环境的**权限控制**与**数据持久化**则成为今日各大项目重点攻坚的技术高地。

## 2. 各项目活跃度对比

| 项目名称 | Issue 动向 | PR 动向 | Release | 健康度评估 | 核心状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 新增/活跃 437 (仅关 63) | 待合并 378 (合并 122) | 无 | ⚠️ **高压** | 功能快速扩张，积压严重，维护压力巨大 |
| **NanoBot** | 活跃度高 | 更新 21 (合并 12) | 无 | ✅ **良好** | 多模态与 CLI 集成推进顺利，清理积压高效 |
| **Zeroclaw** | 更新 37 | 更新 50 (合并 14) | 无 | ✅ **活跃** | v0.8.0 前的最后冲刺，聚焦渠道修复与架构重构 |
| **Hermes Agent** | 更新活跃 (总数约 100) | 更新活跃 (合并 15) | 无 | ⚠️ **承压** | 安全补丁密集，Gateway 稳定性问题频发 |
| **PicoClaw** | 更新 30 | 合并 12 | v0.2.9-nightly | ✅ **稳健** | 聚焦渠道修复与边缘设备支持，节奏稳健 |
| **NanoClaw** | 新增 Apple Container 适配问题 | 更新 27 (合并 20) | 无 | ✅ **高效** | 快速迭代，Codex 支持与渠道增强落地 |
| **NullClaw** | 无新增 | 更新 4 (无合并) | 无 | ⏸️ **蓄势** | 代码持续提交，但合并节奏放缓，等待审核 |
| **IronClaw** | 更新 23 | 更新 50 (合并 12) | 无 | 🔥 **重构** | "Reborn"架构攻坚，安全与多租户并重 |
| **LobsterAI** | 新增架构建议 | 合并 11 | v2026.5.22 | ✅ **优质** | 子智能体架构体验重构，发布正式版 |
| **Moltis** | 新增 1，关闭 7 | 合并 9 | 无 | ✅ **优秀** | 高效修复 Docker 与语音痛点，维护极强 |
| **CoPaw** | 新增 5 | 合并 8 | 无 | ⚠️ **中等** | 多模型兼容性修复，存在严重历史丢失 Bug |
| **EasyClaw** | 无 | 无 | v1.8.14 | ⏸️ **静默** | 版本驱动，社区互动静止，垂直商业化特征明显 |

## 3. OpenClaw 在生态中的定位

*   **核心参照与流量中心**：OpenClaw 依然是生态中流量最大、讨论最热烈的核心项目。其单日 400+ Issue 的活跃度远超同类，是用户需求与技术趋势的风向标。
*   **优势**：生态覆盖广，用户对跨平台及全渠道覆盖的诉求强烈，社区对生产级部署尝试活跃。
*   **劣势**：项目正处于"成长的烦恼"期，积压的 378 个 PR 和大量未关闭 Issue 表明维护团队面临巨大的评审压力。相比 NanoBot 和 Moltis 的敏捷迭代，OpenClaw 在问题响应速度上略显滞后，安全与稳定性问题成为瓶颈。
*   **技术路线差异**：相比 Zeroclaw 的"梦境自主"探索和 IronClaw 的"多租户安全架构"，OpenClaw 目前更侧重于解决**现有功能的工程化落地**与**安全基线加固**，显得更为务实但也更为沉重。

## 4. 共同关注的技术方向

1.  **安全边界的重构**
    *   **涉及项目**：OpenClaw, Hermes Agent, IronClaw, NanoBot
    *   **具体诉求**：从单纯的"防泄露"转向"权限最小化"。OpenClaw 遇到了工具调用文本泄露问题，Hermes 修复了凭证读取漏洞，IronClaw 引入了安全审计 Sink。社区强烈要求"掩码密钥"、"沙箱文件系统"及"执行前钩子"，显示 AI 智能体正在经历从"可信环境"向"零信任架构"的演进。

2.  **多智能体协作与编排**
    *   **涉及项目**：OpenClaw, LobsterAI, PicoClaw, NanoBot
    *   **具体诉求**：子智能体不再是简单的工具调用，而是需要独立的上下文、记忆和参数配置。LobsterAI 发布了专门的子智能体 UI，PicoClaw 讨论一等公民通信，NanoBot 允许子代理设置独立 Temperature。这表明**多智能体工作流**已成为主流开发范式。

3.  **基础设施与部署体验**
    *   **涉及项目**：Moltis, NanoClaw, PicoClaw
    *   **具体诉求**：Docker 沙箱兼容性、Apple Container 支持、边缘设备（树莓派）编译。随着 AI 助手从云端走向本地和边缘，对复杂环境（LXC、Termux）的适配成为刚需。

## 5. 差异化定位分析

| 维度 | **通用型平台** | **垂直场景/架构创新** | **轻量级/实验性** |
| :--- | :--- | :--- | :--- |
| **代表项目** | OpenClaw, Hermes Agent | LobsterAI, Zeroclaw, IronClaw | NanoBot, NanoClaw |
| **核心价值** | 全能型助手，追求渠道覆盖与功能大而全。 | 聚焦特定痛点：LobsterAI 专攻桌面多智能体 UI，Zeroclaw 探索"梦境"自主性，IronClaw 重新定义安全多租户架构。 | 快速迭代，侧重 CLI 集成、多模态尝鲜，架构轻量化，适合开发者二次开发。 |
| **目标用户** | 企业级用户、全平台使用者。 | 极客、特定场景（电商客服、安全敏感型）用户。 | 开发者、技术人员。 |
| **成熟度** | 高，但伴随高维护成本。 | 中，部分处于架构重构期。 | 中低，功能迭代快但稳定性参差。 |

*注：EasyClaw 已转向纯商业化电商客服场景，与开源社区生态路径有所不同。*

## 6. 社区热度与成熟度

*   **爆发增长期**：**OpenClaw**。社区热度极高，Issues 爆炸，表明用户正大量涌入并尝试将其用于生产环境，同时也暴露出项目承压后的短板。
*   **快速迭代期**：**NanoBot, NanoClaw, Zeroclaw**。PR 合并效率高，功能更新快，社区与维护者互动紧密，处于功能补全与架构优化的上升通道。
*   **质量巩固期**：**Hermes Agent, Moltis, LobsterAI**。项目已有一定规模，目前重心在于修复严重 Bug（如 Gateway 崩溃、Docker 沙箱）和优化用户体验，代码质量较高。
*   **架构重构期**：**IronClaw**。正处于大规模底层改造阶段，致力于建立生产级安全标准，社区讨论偏向底层设计。

## 7. 值得关注的趋势信号

1.  **"自主性"需求的觉醒**：
    Zeroclaw 社区热议的"梦境模式"（Dream Mode）和 NullClaw 的 Cron 调度功能表明，用户不再满足于被动的问答助手，而是希望 Agent 能够**主动整理记忆、规划任务、自我迭代**。这是从 Copilot 向 Autopilot 演进的关键信号。

2.  **安全与控制权的下放**：
    多个项目出现的"掩码密钥"、"凭证隔离"需求显示，用户对 AI Agent 持有高权限密钥持有极大的不信任感。未来的趋势将是**权限粒度细化**（如 OpenClaw 的安全配置文件）和**执行过程审计**。

3.  **本地化与边缘化部署的阵痛**：
    从 PicoClaw 的 ARM 编译请求到 NanoClaw 的 Apple Container 适配危机，再到 Moltis 的 LXC 权限修复，说明用户正尝试将 AI 助手部署到各种异构环境中。**本地优先**正在成为刚需，这对项目的跨平台兼容性提出了极高要求。

4.  **多模态与实时交互的深化**：
    LobsterAI 的子智能体 UI、Moltis 的 Twilio 电话交互修复，显示 AI 助手正在突破纯文本交互，向语音通话、视频流处理等**实时多模态**场景渗透。

**分析师建议**：对于开发者而言，当前是介入 AI Agent 安全架构设计与多智能体编排协议的最佳窗口期；对于企业决策者，建议优先关注具备完善权限控制（如 IronClaw/Hermes 路线）或经过生产验证（如 OpenClaw/Moltis）的项目，并警惕单点依赖风险。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-23)

## 1. 今日速览
NanoBot 项目今日保持**高度活跃**状态，社区协作成效显著。过去24小时内共有 **21 个 PR 更新**，其中 12 个已成功合并，显示维护者正在高效清理积压并推进新功能。项目重点聚焦于**多模态能力扩展**（Ollama/OpenAI 图片生成）和**CLI 集成**（CLI-Anything），显著增强了工具的实用性。同时，安全性和稳定性修复（如 SSRF 漏洞修复）同步跟进，整体项目健康度良好，处于快速迭代上升期。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 12 个 PR 合并/关闭，主要推进了以下里程碑：

*   **多模态能力增强**：合并了 [PR #3946](https://github.com/HKUDS/nanobot/pull/3946) 和 [PR #3954](https://github.com/HKUDS/nanobot/pull/3954)，正式支持 Ollama 本地图片生成及 OpenAI/Codex 图片生成 Provider，补齐了多模态拼图的最后一块短板。
*   **CLI 生态集成**：[PR #3963](https://github.com/HKUDS/nanobot/pull/3963) 成功合并，引入基于 CLI-Anything 的 CLI Apps 能力，允许用户通过注册表安装和管理应用，极大扩展了 Agent 的工具边界。配套的 Windows CI 测试 [PR #3965](https://github.com/HKUDS/nanobot/pull/3965) 和 WebUI 渲染支持 [PR #3966](https://github.com/HKUDS/nanobot/pull/3966) 也已就绪。
*   **安全与稳定性修复**：修复了 `web_fetch` 重定向时的 SSRF 安全漏洞 ([PR #3928](https://github.com/HKUDS/nanobot/pull/3928))，解决了 Cron 任务自我复制的死循环问题 ([PR #2364](https://github.com/HKUDS/nanobot/pull/2364))，并修复了 Responses API 回放时的 ID 重复问题 ([PR #3961](https://github.com/HKUDS/nanobot/pull/3961))。
*   **架构优化**：[PR #3960](https://github.com/HKUDS/nanobot/pull/3960) 移除了 `apply_patch` 中已弃用的 diff 模式，简化了代码结构。

## 4. 社区热点
今日讨论最活跃的议题集中在功能增强与交互体验：

*   **[Issue #3846](https://github.com/HKUDS/nanobot/issues/3846) [enhancement]**：关于多轮对话中保持 Skill 内容的提案。社区热议如何在长对话中持久化 Skill 定义，避免重复加载，这反映了用户对**长上下文记忆管理**的深层需求。
*   **[Issue #3959](https://github.com/HKUDS/nanobot/issues/3959) [bug]**：关于 `/skill` 命令错误显示已禁用技能的问题。该问题迅速得到了 [PR #3968](https://github.com/HKUDS/nanobot/pull/3968) 的响应修复，体现了社区对**用户体验细节**的关注。
*   **[Issue #3969](https://github.com/HKUDS/nanobot/issues/3969) [enhancement]**：建议 `spawn` 工具支持 `temperature` 参数。用户希望为子代理分配不同的“性格”（精确 vs 创意），这显示进阶用户对**多代理协作精细度**有更高要求。

## 5. Bug 与稳定性
今日报告并处理的 Bug 主要集中在配置解析与安全性方面：

*   **高危 (已修复)**：`web_fetch` 模块存在 SSRF 风险，恶意重定向可能导致服务端请求伪造。已在 [PR #3928](https://github.com/HKUDS/nanobot/pull/3928) 中通过增加重定向目标验证修复。
*   **中等 (已修复)**：`/skill` 命令无视 `disabledSkills` 配置，仍列出被禁用的技能 ([Issue #3959](https://github.com/HKUDS/nanobot/issues/3959))。修复见 [PR #3968](https://github.com/HKUDS/nanobot/pull/3968)。
*   **低危 (已修复)**：Cron 任务可能因缺乏防递归指令导致自我复制死循环 ([PR #2364](https://github.com/HKUDS/nanobot/pull/2364))。

## 6. 功能请求与路线图信号
从新提出的 Issues 和 PR 趋势看，项目下一阶段可能侧重于**精细化控制**与**架构解耦**：

*   **子代理个性化**：[Issue #3969](https://github.com/HKUDS/nanobot/issues/3969) 提出的 Temperature 参数支持，与 [PR #1443](https://github.com/HKUDS/nanobot/pull/1443)（Heartbeat 推理解耦）共同指向了“让不同组件拥有独立思维链”的架构演进方向。
*   **提示词工程优化**：[PR #3865](https://github.com/HKUDS/nanobot/pull/3865) 提出的 BM25-lite Skill Router 旨在减少 60% 的 System Prompt Token 消耗，这是解决 Skill 膨胀问题的关键优化，极可能被纳入下个版本。
*   **易用性与诊断**：[PR #3776](https://github.com/HKUDS/nanobot/pull/3776) 提议增加 `nanobot doctor` 诊断命令，这将大幅降低新用户的排错门槛，是提升项目友好度的重要信号。

## 7. 用户反馈摘要
*   **痛点**：多轮对话中 Skill 上下文丢失 ([Issue #3846](https://github.com/HKUDS/nanobot/issues/3846))，以及 Token 消耗过大 ([PR #3865](https://github.com/HKUDS/nanobot/pull/3865)) 是当前高级用户的主要痛点。
*   **场景需求**：用户希望 NanoBot 能更深入地作为“调度中枢”，例如在 Issue #3969 中提到的“精确任务用低温度，创意任务用高温度”，表明用户正在将其用于复杂的自动化工作流。
*   **满意点**：社区对 CLI Apps 的引入反响积极，认为这解决了工具集成的碎片化问题。

## 8. 待处理积压
以下长期未决的 PR/Issue 值得维护者关注：

*   **[PR #1443](https://github.com/HKUDS/nanobot/pull/1443) [feat]**：Heartbeat 推理解耦。自 3 月开启，昨日有更新。这是一个涉及核心架构的变更，建议尽快 Review 或标记 Milestone。
*   **[PR #3568](https://github.com/HKUDS/nanobot/pull/3568) [feat]**：Manifest LLM Router 支持。开启近一个月，需确认是否与现有 Router 架构冲突。
*   **[Issue #3846](https://github.com/HKUDS/nanobot/issues/3846)**：Skill 多轮记忆问题。评论数较多且涉及核心体验，建议作为 Enhancement 纳入规划。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-23)

## 1. 今日速览
Zeroclaw 项目今日保持**高度活跃**状态，共更新 37 个 Issues 和 50 个 PRs，尽管未发布新版本，但代码库变动频繁。核心开发重心集中在**多渠道适配修复**（WhatsApp、Matrix、Signal）与**核心架构重构**（TUI 集成、Runtime RPC 层、梦境模式）。社区对高级功能（如“梦境模式”内存整合）表现出浓厚兴趣，同时多个 P1 级别的关键 Bug 已被识别并提交修复 PR。整体来看，项目正处于 v0.8.0 发布前的密集功能整合与稳定性修复阶段。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日共有 14 个 PR 被合并或关闭，显著推进了项目的稳定性与功能扩展：

*   **关键渠道修复落地**：PR [#6706](https://github.com/zeroclaw-labs/zeroclaw/pull/6706) 已合并，修复了 Issue [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) 中报告的 WhatsApp Web 协议升级导致的消息流中断问题，恢复了 WhatsApp 渠道的可用性。
*   **诊断与可观测性增强**：PR [#6838](https://github.com/zeroclaw-labs/zeroclaw/pull/6838) 修复了 `doctor models` 命令无法读取配置中的 API Key 的问题；PR [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) 增强了 OTel 工具调用的追踪语义属性，便于排查工具调用失败原因。
*   **架构调整**：PR [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) 正在进行中，旨在将 TUI 从 `crates/` 移动到 `apps/` 目录，这将分离应用层与库层，为后续独立发布做准备。
*   **修复 MCP 工具过滤失效**：针对 Issue [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) 提出的 MCP 工具过滤组失效问题，PR [#6861](https://github.com/zeroclaw-labs/zeroclaw/pull/6861) 已提交修复方案，重新实现了基于来源的 MCP 工具检测逻辑。

## 4. 社区热点
今日社区讨论焦点集中在高级功能设计与项目管理流程优化：

*   **[Feature]: Dream Mode (梦境模式)** - Issue [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)
    *   **热度**：评论数 11 条。
    *   **分析**：该议题提议在空闲时段进行内存整合与反思学习，被视为迈向 AGI 代理的关键一步。社区正热烈讨论其实现细节（如本地优先 vs LLM 辅助），显示出用户对“自主性”功能的高度期待。
*   **RFC: Work Lanes & Board Automation** - Issue [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)
    *   **热度**：评论数 4 条。
    *   **分析**：维护者提议引入轻量级 PR 泳道和自动化标签管理，以减轻人工维护负担。这反映了项目在规模扩大后，对工程化治理的迫切需求。
*   **MCP 工具过滤 Bug** - Issue [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)
    *   **热度**：评论数 6 条。
    *   **分析**：高风险 Bug，导致 `tool_filter_groups` 配置对真实 MCP 工具无效，影响了生产环境的安全策略配置。

## 5. Bug 与稳定性
今日报告并处理了多个影响工作流的 Bug，主要集中在配置、渠道和多模态处理：

*   **P1 - 稳定性/配置**：
    *   Issue [#6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841)：多模态配置下，`vision_provider` 被静默忽略，导致图片处理回退到 fallback 模型，影响视觉功能可用性。
    *   Issue [#6847](https://github.com/zeroclaw-labs/zeroclaw/issues/6847)：WhatsApp 渠道在配置时无法显示 QR 码，阻塞了用户接入。
    *   Issue [#6844](https://github.com/zeroclaw-labs/zeroclaw/issues/6844)：Slack bot_token 无法通过环境变量注入，必须写入配置文件，限制了容器化部署的灵活性。
*   **P1 - 已修复**：
    *   Issue [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246)：WhatsApp 消息流中断（已通过 PR #6706 修复）。
    *   Issue [#6704](https://github.com/zeroclaw-labs/zeroclaw/issues/6704)：Windows 非 UTF-8 控制台下 Shell 工具输出乱码（已修复）。
*   **P2 - 构建/部署**：
    *   Issue [#6836](https://github.com/zeroclaw-labs/zeroclaw/issues/6836)：Windows `setup.bat --minimal` 构建体积异常膨胀（26MB vs 预期 6MB）。

## 6. 功能请求与路线图信号
社区与开发者提出了多项重要功能请求，暗示了 v0.8.0 版本的演进方向：

*   **架构解耦与性能**：Issue [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) 提议引入 `MemoryStrategy` trait，解耦内存策略层与底层存储，这将允许用户自定义检索与整合策略，提升 Agent 的适应性。
*   **TUI 增强**：Issue [#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824) 正在推进终端聊天界面，配合 Issue [#6837](https://github.com/zeroclaw-labs/zeroclaw/issues/6837) 的 Runtime RPC 层改造，预示 Zeroclaw 将拥有更强大的本地 CLI 交互能力。
*   **协议扩展**：Issue [#6820](https://github.com/zeroclaw-labs/zeroclaw/issues/6820) 提议为 ACP 协议扩展 diff 显示与文件提案类型，旨在提升 Web 端和 TUI 端的代码修改审查体验。
*   **物联网集成**：PR [#6857](https://github.com/zeroclaw-labs/zeroclaw/pull/6857) 提交了 8Sleep Pod 智能床集成工具，表明项目正在向个人生活自动化场景拓展。

## 7. 用户反馈摘要
*   **痛点：配置复杂性与一致性**
    用户反馈配置文件的校验不够健壮（如 Issue [#6079](https://github.com/zeroclaw-labs/zeroclaw/issues/6079) 指出 `web_dist_dir` 不支持 `~` 路径），且不同渠道的配置方式不统一（如 Slack token 必须写在文件中），增加了部署成本。
*   **痛点：移动端/边缘设备支持**
    Issue [#6036](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) 再次被提及，用户在 Termux/Android 环境下遇到 Agent 无限循环问题，显示项目在非 x86 服务器环境下的稳定性仍有待提高。
*   **认可**
    Issue [#6847](https://github.com/zeroclaw-labs/zeroclaw/issues/6847) 中用户评价 "Best tool out there"，表明核心功能依然具有较高吸引力，即便存在个别渠道接入 Bug。

## 8. 待处理积压
以下重要议题长期未得到彻底解决或需持续关注：

*   **Android/Termux 无限循环 (P1)**：Issue [#6036](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) 状态为 `Blocked`，需要作者或社区提供更多复现信息，严重影响移动端用户体验。
*   **代码审计与恢复 (P2)**：Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 正在追踪 153 个在批量回滚中丢失的 commits，需持续关注功能恢复进度。
*   **自定义 Provider 流式错误 (P2)**：Issue [#6243](https://github.com/zeroclaw-labs/zeroclaw/issues/6243) 涉及自定义 HTTP Provider 的流式解码错误导致挂起，状态为 `Blocked`，等待复现。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-23)

## 1. 今日速览
Hermes Agent 项目今日保持**极高活跃度**，Issues 与 PRs 更新总数达 100 条，显示出社区与开发团队的紧密互动。今日重心集中在**安全性加固**，多个修复凭证泄露和权限校验的 PR 已合并，显著提升了项目的安全基线。然而，**Gateway 稳定性**问题频发，包括崩溃循环、数据库损坏及消息重复处理等 P1/P2 级 Bug，成为用户反馈的痛点。功能层面，社区对多模型动态路由和外部工具集成的需求日益强烈。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 15 个 PR 被合并或关闭，重点推进了安全性与系统健壮性：

*   **安全性修复 (P0/P1)**：
    *   [PR #30721](https://github.com/NousResearch/hermes-agent/pull/30721) 和 [PR #8055](https://github.com/NousResearch/hermes-agent/pull/8055) 合并，彻底阻断了 `read_file` 工具读取 `auth.json`、`.env` 等敏感凭证文件，修复了凭证泄露风险。
    *   [PR #30715](https://github.com/NousResearch/hermes-agent/pull/30715) 合并，修复了技能安装中的路径穿越漏洞，并增加了 `list_pending` 锁机制，防止并发冲突。
*   **功能优化与修复**：
    *   [PR #30510](https://github.com/NousResearch/hermes-agent/pull/30510) 合并，修复了官方技能索引元数据缺失导致的技能加载失败问题。
    *   [PR #30710](https://github.com/NousResearch/hermes-agent/pull/30710) 合并，为 Kanban 调度器增加了只读协调分类器，提升任务管理灵活性。
    *   [PR #30724](https://github.com/NousResearch/hermes-agent/pull/30724) 修复了 CLI 保存 API Key 时未引用导致特殊字符（如 `#`）丢失的问题。

## 4. 社区热点
*   **[Issue #26847](https://github.com/NousResearch/hermes-agent/issues/26847) [P3]**: **xAI OAuth 权限错误引发热议（评论 16 条）**。
    *   用户反馈标准 SuperGrok 订阅用户在进行 OAuth 认证时遭遇 HTTP 403，仅 Heavy 订阅用户可通过。这揭示了后端权限策略与公开文档的不一致性，引发社区对 xAI 集成权限分级的广泛讨论。
*   **[Issue #8287](https://github.com/NousResearch/hermes-agent/issues/8287) [P3]**: **Telegram 多 Bot 实例支持（👍 10）**。
    *   用户强烈希望能使用同一 Telegram 账号连接多个 Bot 会话以并行处理任务。该需求自 4 月提出，今日再次活跃，反映了高级用户对 Agent 并行处理能力的刚需。
*   **[PR #29943](https://github.com/NousResearch/hermes-agent/pull/29943)**: **Gateway 消息队列机制**。
    *   提议引入 `busy_text_mode` 队列，解决用户在 Agent 忙碌时连续发送消息导致的体验问题。该 PR 引发了关于交互逻辑的深入探讨。

## 5. Bug 与稳定性
今日报告了多个影响服务可用性的关键 Bug，需引起重视：

*   **[P1] Gateway 崩溃循环** [Issue #19471](https://github.com/NousResearch/hermes-agent/issues/19471): 使用 `--profile` 重启时 Event Loop 丢失，导致服务陷入死循环。
*   **[P1] Cron 导致的自毁循环** [Issue #30719](https://github.com/NousResearch/hermes-agent/issues/30719): Agent 可调度重启 Gateway 的 Cron 任务，导致进程自杀并在 systemd 保持存活下无限重启。
*   **[P1] 数据库损坏** [Issue #30636](https://github.com/NousResearch/hermes-agent/issues/30636): 高负载下 SIGTERM 导致 `state.db` 损坏，已确认为可复现问题。
*   **[P1] Oneshot 模式失效** [Issue #30623](https://github.com/NousResearch/hermes-agent/issues/30623): SSH/Cron 环境下（非 TTY），`hermes -z` 静默退出且不调用 API。
*   **[P2] BlueBubbles 消息重复** [Issue #30708](https://github.com/NousResearch/hermes-agent/issues/30708): 适配器缺乏去重机制，导致单条消息触发两个并行 Agent 会话。

## 6. 功能请求与路线图信号
*   **动态模型路由** [Issue #30652](https://github.com/NousResearch/hermes-agent/issues/30652): 用户建议根据任务复杂度（如“查天气” vs “架构设计”）自动路由到不同成本/性能的模型。这是 Agent 降本增效的关键方向。
*   **Cursor SDK 集成** [Issue #30640](https://github.com/NousResearch/hermes-agent/issues/30640): 提议将 Cursor Agent SDK 作为 Hermes 的子工具，通过 `cursor_agent` 委托代码编写任务。
*   **渠道级模型配置** [Issue #30703](https://github.com/NousResearch/hermes-agent/issues/30703): 请求在 Gateway 层面支持根据 Discord Channel 或房间自动选择不同模型，满足多场景部署需求。

## 7. 用户反馈摘要
*   **凭证安全担忧**：用户对 `read_file` 能读取本地凭证文件感到担忧，今日的修复 PR 大幅缓解了此焦虑。
*   **订阅权益混淆**：xAI 集成中 OAuth 报错让用户对 SuperGrok 与 Heavy 订阅的具体权益感到困惑，需文档或后端逻辑澄清。
*   **生产环境稳定性**：多位用户反馈 Gateway 在进程管理下的重启行为不可控，希望能优化信号处理和状态持久化机制。

## 8. 待处理积压
*   **[Issue #5254](https://github.com/NousResearch/hermes-agent/issues/5254)**: LM-Studio 模型下工具调用重复问题已存在近两个月，影响本地模型用户体验，亟待解决。
*   **[Issue #22110](https://github.com/NousResearch/hermes-agent/issues/22110)**: NixOS 平台 MCP Server 启动失败问题持续半月未响应，影响特定平台兼容性。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-23)

## 1. 今日速览
PicoClaw 项目今日保持高度活跃，共有 30 项 Issue/PR 更新，显示出项目迭代节奏稳健。核心开发团队重点修复了多渠道的消息处理与上下文保留问题，并合并了多项依赖更新以修复安全漏洞。今日发布了 `v0.2.9-nightly.20260523` 版本，包含了针对 Session API 和 Telegram/Matrix 渠道的多项重要修复。社区方面，用户对多智能体协作与特定硬件环境的构建支持关注度较高。

## 2. 版本发布
- **[nightly] Nightly Build (v0.2.9-nightly.20260523.f09a7d67)**
  - **更新说明**：自动化的 Nightly 构建，包含了主分支最新的代码变更。
  - **变更范围**：对比 `v0.2.9` 与 `main` 分支，主要包含了 Session 消息时间戳功能、Matrix 渠道过滤修复以及依赖库安全更新。
  - **注意事项**：官方提示此为自动构建版本，可能存在不稳定性，建议测试环境谨慎使用。
  - **链接**：[Release Page](https://github.com/sipeed/picoclaw/releases)

## 3. 项目进展
今日共有 **12 个 PR 被合并或关闭**，显著提升了系统的稳定性与安全性：

- **安全性修复**：合并了 PR [#2930](https://github.com/sipeed/picoclaw/pull/2930)，将 `golang.org/x/net` 升级至 v0.55.0，修复了 `govulncheck` 扫描出的潜在漏洞。
- **核心功能增强**：
    - PR [#2788](https://github.com/sipeed/picoclaw/pull/2788) 为 Session API 增加了每条消息的独立时间戳，解决了前端只能使用会话级时间戳的问题。
    - PR [#1838](https://github.com/sipeed/picoclaw/pull/1838) 修复了 `picoclaw onboard` 命令的提示词错误。
- **渠道修复**：
    - PR [#2827](https://github.com/sipeed/picoclaw/pull/2827) 修复了 Matrix 渠道 `allow_from` 过滤器失效导致消息误拦截的严重 Bug。
    - PR [#2791](https://github.com/sipeed/picoclaw/pull/2791) 与 [#2756](https://github.com/sipeed/picoclaw/pull/2756) 修复了 Telegram Topic 上下文丢失问题，确保回复能正确发送到对应的主题贴。
    - PR [#2822](https://github.com/sipeed/picoclaw/pull/2822) 优化了子代理工具反馈的清理逻辑，避免了通知栏的消息冗余。

## 4. 社区热点
- **[Feature] 提供带 WhatsApp 支持的预编译版本** ([Issue #2625](https://github.com/sipeed/picoclaw/Issue/2625))
  - **热度**：👍 1，评论 6 条。
  - **分析**：用户在 Raspberry Pi Zero 2 等受限设备上难以自行编译带有 WhatsApp 支持的版本，强烈呼吁官方提供预编译包。这反映了边缘设备用户对开箱即用的需求，目前该 Issue 仍处于 Open 状态，建议项目方考虑在 CI/CD 中增加此构建目标。

- **[Task] 增加一等公民级别的智能体间通信** ([Issue #2929](https://github.com/sipeed/picoclaw/Issue/2929))
  - **热度**：新开 Issue，引发了对多智能体协作架构的讨论。
  - **分析**：随着 PicoClaw 支持多智能体，用户不再满足于简单的 `spawn` 或 `delegate`，而是希望智能体之间能像同级一样通信。这预示着项目可能向多智能体编排平台演进。

## 5. Bug 与稳定性
今日处理的 Bug 主要集中在消息路由与渠道适配层，严重程度中等：

1.  **Matrix 渠道身份注入缺失** ([Issue #2816](https://github.com/sipeed/picoclaw/Issue/2816)) - **已关闭**
    - **现象**：Matrix 消息无法携带发送者身份信息，导致 Agent 无法识别消息来源。
    - **状态**：相关修复已合并，待验证。
2.  **Matrix `allow_from` 过滤器逻辑错误** ([Issue #2815](https://github.com/sipeed/picoclaw/Issue/2815)) - **已修复**
    - **现象**：任何非空配置都会拦截所有消息，导致功能完全不可用。
    - **修复**：已通过 PR [#2827](https://github.com/sipeed/picoclaw/pull/2827) 修复。
3.  **语音转录文本未传递给 LLM** ([Issue #2817](https://github.com/sipeed/picoclaw/Issue/2817)) - **已关闭**
    - **现象**：Groq Whisper 转录成功，但 LLM 仅收到 `[voice]` 占位符。
    - **状态**：Issue 已关闭 (stale)，可能已在其他提交中修复或无法复现。

## 6. 功能请求与路线图信号
- **DeepSeek 深度思考字段支持** ([PR #2928](https://github.com/sipeed/picoclaw/pull/2928))
  - **状态**：Open
  - **意义**：该 PR 旨在将 DeepSeek 的 `thinking` 字段映射到 OpenAI 兼容层，表明项目正在积极跟进前沿模型的高级特性（如思维链输出），有望在近期合并。
- **媒体附件支持** ([PR #2856](https://github.com/sipeed/picoclaw/pull/2856))
  - **状态**：Open
  - **意义**：旨在让 Agent 能够直接发送富媒体内容，而不仅仅是文本，这将极大扩展 Agent 的交互能力，是下一个版本的重要特性。

## 7. 用户反馈摘要
- **边缘设备部署难**：用户反馈默认的 ARM 构建版本缺少特定渠道支持（如 WhatsApp），导致在树莓派等设备上更新困难，需要手动编译，门槛较高。
- **时间戳混乱**：用户对 Session API 缺少单条消息时间戳表示困扰（Issue #2787），导致前端显示不准确。今日 PR #2788 的合并直接回应了这一痛点。
- **多渠道上下文丢失**：Telegram Topic 和 Matrix 用户反馈回复经常“跑偏”到默认话题或无法识别发送者，今日的几个修复 PR 主要针对此类上下文保持问题。

## 8. 待处理积压
- **Issue #2351** ([Link](https://github.com/sipeed/picoclaw/Issue/2351))：关于 Skill 二进制依赖验证的功能请求，防止 Agent 调用未安装的工具。该 Issue 自 4 月初开启至今未解决，建议维护者关注以提升工具调用的鲁棒性。
- **Issue #2625**：关于 WhatsApp 预编译版本的请求，长期未得到官方回应，建议纳入构建计划或给出变通方案。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-23)

## 1. 今日速览
NanoClaw 项目今日保持极高的开发活跃度，共处理了 **27 条 PR 更新**，其中高达 **20 条 PR 已合并/关闭**，显示出维护者对社区贡献的高效响应与清理积压工作的决心。虽然今日无新版本发布，但合并的代码涵盖了从核心 Agent Runner 稳定性修复、WhatsApp/Telegram 渠道增强到 Codex 集成支持等多个关键领域。Issues 方面，Apple Container 适配问题集中爆发，成为今日用户反馈的焦点，同时也有用户表达了对 Node.js 复杂依赖环境的强烈不满。整体来看，项目正处于快速迭代与功能完善阶段，但在多平台兼容性（特别是 Apple Container）和环境依赖管理上仍需打磨。

## 2. 版本发布
**今日无新版本发布。**

## 3. 项目进展
今日共有 20 个 PR 被合并，项目在功能扩展和稳定性修复上取得显著进展：

*   **AI 引擎支持扩展**：PR #2580 合并，正式引入了完整的 Codex-only 安装支持。这意味着 NanoClaw 现在可以脱离 Claude Code 单独运行，或使用 Codex 作为主力 Agent，并支持 OneCLI 管理凭证，极大地拓宽了用户选择范围。
*   **核心稳定性修复**：PR #2556 合并，修复了 Agent Runner 在批量处理消息时导致 Claude Agent SDK 返回合成响应而非调用 API 的严重 Bug（关联 Issue #2555）。PR #2586 合并，解决了长周期 Hub 会话导致磁盘 Transcript 文件无限增长的问题，防止内存溢出和性能下降。
*   **渠道集成增强**：
    *   **WhatsApp**：PR #2552 修复了出站消息中 `@` 提及无法渲染的 Bug；PR #2553 新增了 WhatsApp 格式化技能，确保 Agent 使用正确的提及语法。
    *   **Telegram**：PR #2578 合并，增加了 Telegram 频道 Claim 链接功能。
*   **安全与权限**：PR #2566 合并，收紧了频道注册审批流的权限范围，修复了 Scoped Admin 可能越权操作未授权群组的逻辑漏洞。
*   **开发者体验**：PR #2571 引入了 `/add-rtk` 技能，通过 CLI 代理为开发者节省 60-90% 的 Token 消耗。

## 4. 社区热点
今日社区讨论与反馈主要集中在以下领域：

*   **Apple Container 适配危机**：用户 @snymanpaul 连续提交了 3 个 Issue (#2587, #2588, #2589)，详细指出了 `skill/apple-container` 分支严重落后于主线、Dockerfile 构建失败以及微虚拟机内网络解析失败等问题。这表明目前 Apple Container 的支持已不可用，急需维护者重构该技能分支。
    *   [Issue #2588](https://github.com/nanocoai/nanoclaw/issues/2588)
    *   [Issue #2589](https://github.com/nanocoai/nanoclaw/issues/2589)
*   **Node.js 环境依赖痛点**：Issue #2590 中，用户 @whiletrue111 表达了对 Node 应用依赖地狱的强烈不满，指出在 Ubuntu 上调试困难，且项目对最新 Node 版本（如 Node 22）与 SQLite 包装器的兼容性存在问题。这反映了部分用户对项目底层技术栈（Node vs Bun）迁移期的困惑与阵痛。
    *   [Issue #2590](https://github.com/nanocoai/nanoclaw/issues/2590)

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在运行时环境与兼容性，部分已有修复方案：

*   **[严重] Agent Runner 数据库死循环** (Issue/PR #2597)：
    *   现象：Docker Desktop 环境下，`inbound.db` 损坏会导致 Agent Runner 陷入无限日志循环，阻塞消息投递。
    *   状态：**已有 PR #2597 提交修复**，增加了错误退出机制。
    *   链接：[PR #2597](https://github.com/nanocoai/nanoclaw/pull/2597)
*   **[严重] Apple Container 功能完全瘫痪** (Issues #2587, #2588, #2589)：
    *   现象：分支落后、构建脚本缺失、网络无法解析。
    *   状态：**待修复**，目前功能不可用。
*   **[中等] Signal Auth 认证失败** (Issue #2581)：
    *   现象：signal-cli >= 0.13 版本 JSON 字段变更导致认证失败。
    *   状态：Issue 已关闭，推测已在其他提交中修复或已确认修复方案。
*   **[中等] 本地配置加载失效** (PR #2598)：
    *   现象：无法加载 per-group 的 `CLAUDE.local.md` 配置。
    *   状态：**已有 PR #2598 待合并**。

## 6. 功能请求与路线图信号
*   **多渠道元数据增强**：PR #2521（目前仍 Open）提议在 XML 消息属性中添加 `from-channel` 和 `from-type`，以便用户构建多渠道监控仪表板。这反映了高级用户对可观测性工具的强烈需求。
*   **Token 成本优化**：RTK 工具的集成（PR #2571 已合并）标志着项目开始关注运行成本优化，未来可能会有更多针对 Token 节省的工具链集成。
*   **Codex 战略地位提升**：Codex 独立安装支持（PR #2580）表明项目正在向“多模型后端”架构转型，减少对单一模型提供商的依赖。

## 7. 用户反馈摘要
*   **痛点**：环境搭建复杂度高，特别是对于非 Node 开发者，依赖冲突（SQLite vs Node 版本）令人沮丧。
*   **场景**：用户正在尝试在最新的 macOS/Apple Silicon 环境中利用 Container 技术部署，但受挫于支持不完善。
*   **满意度**：尽管有抱怨，但大量 PR 的快速合并（如 Codex 支持、WhatsApp 修复）显示核心社区非常活跃，对功能性反馈响应迅速。用户 @snymanpaul 的高质量 Bug 报告（含详细排查）也体现了社区技术氛围较好。

## 8. 待处理积压
*   **Apple Container 支持修复**：Issues #2587, #2588, #2589 揭示了该分支处于严重过时状态，建议维护者优先处理分支同步与构建脚本更新。
*   **Agent Runner 稳定性 PR 审查**：PR #2597 针对数据库损坏死循环的修复至关重要，建议尽快审查合并。
*   **多渠道监控 PR**：PR #2521 已开启数日（05-17 创建），今日有更新但未合并，建议关注其进展，该功能对多渠道管理用户价值较高。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-23)

## 1. 今日速览
NullClaw 项目今日整体处于代码提交活跃但合并节奏放缓的状态。过去 24 小时内，项目未发布新版本，Issue 追踪器无新增或关闭记录，用户反馈渠道略显平静。然而，代码仓库仍有 4 个 Pull Requests 更新，主要集中在底层系统兼容性修复、网络错误处理优化以及新 AI 提供商接入。目前所有更新的 PR 均处于待合并状态，项目正在积蓄功能迭代能量，等待维护者审核合并。

## 2. 版本发布
无。

## 3. 项目进展
今日无合并或关闭的 PR，但以下待合并 PR 均有实质性更新，展示了项目在自动化调度与生态兼容性上的进展：

*   **自动化调度引擎演进**：PR [#783](https://github.com/nullclaw/nullclaw/pull/783) 持续推进 Cron 子智能体功能，引入了数据库支持的调度器与历史记录表，完善了 JSON 输出与安全加固。这标志着 NullClaw 正从单一响应式助手向具备自主任务调度能力的智能体平台转型。
*   **AI 生态扩展**：PR [#922](https://github.com/nullclaw/nullclaw/pull/922) 提出了集成 NEAR AI Cloud 的功能，补全了 API 密钥查找与模型目录解析逻辑，为项目接入去中心化 AI 算力网络铺平道路。
*   **底层稳定性修复**：PR [#891](https://github.com/nullclaw/nullclaw/pull/891) 与 PR [#878](https://github.com/nullclaw/nullclaw/pull/878) 分别针对网络探针错误抛出与 POSIX 线程休眠机制进行了底层修复，显著提升了系统在复杂网络环境与高并发场景下的鲁棒性。

## 4. 社区热点
由于今日无活跃 Issues 讨论，社区关注点主要集中在近期提交的功能 PR 上：

*   **NEAR AI 集成 ([PR #922](https://github.com/nullclaw/nullclaw/pull/922))**：由社区成员 @PierreLeGuen 发起，该 PR 引起了对新兴 AI 云服务商支持的关注。这反映出用户对于扩展 NullClaw 后端模型选择范围、特别是对接 Web3/AI 融合基础设施的强烈诉求。
*   **Cron 调度能力 ([PR #783](https://github.com/nullclaw/nullclaw/pull/783))**：该 PR 虽创建于 4 月，但持续更新至今，其引入的任务队列与 Operator 告警机制预示着项目将具备企业级自动化运维能力，可能是社区期待值较高的功能之一。

## 5. Bug 与稳定性
今日未报告新的 Bug 或崩溃问题，但现有 PR 揭示了已发现的稳定性隐患及其修复方案：

*   **关键修复（待合并）**：PR [#878](https://github.com/nullclaw/nullclaw/pull/878) 修复了 POSIX 系统下 `thread.sleep` 无法真正挂起 OS 线程的问题。此问题可能导致 NullClaw 在托管线程环境下调度精度下降，影响智能体响应时效。目前已有 Fix PR 待合并。
*   **诊断性修复（待合并）**：PR [#891](https://github.com/nullclaw/nullclaw/pull/891) 修复了网络探测时 Curl 传输失败信息被吞没的问题。修复后，DNS 错误、TLS 错误等将被精确抛出，有助于排查网络连接问题。目前已有 Fix PR 待合并。

## 6. 功能请求与路线图信号
从活跃的 PR 动向中可以识别出明确的路线图信号：

*   **原生任务调度**：PR [#783](https://github.com/nullclaw/nullclaw/pull/783) 表明项目即将支持原生的 Cron 任务调度，这响应了用户对于智能体“自主运行”、“定时任务”和“运行历史审计”的需求。预计该功能将在下一版本中作为核心亮点发布。
*   **多模型提供商支持**：PR [#922](https://github.com/nullclaw/nullclaw/pull/922) 显示项目正在降低接入新 AI 提供商的门槛。用户对于非 OpenAI 标准端点的兼容性需求增加，特别是针对 NEAR AI 这类新兴平台，暗示项目正向“多模型统一网关”方向演进。

## 7. 用户反馈摘要
今日无直接 Issue 评论数据。基于 PR 内容分析：
*   **运维需求强烈**：Cron 相关 PR 的持续推进暗示用户不仅满足于即时对话，更希望 NullClaw 能作为后台服务长期运行并执行计划任务。
*   **故障排查痛点**：针对 Curl 错误和线程休眠的修复 PR 提示，部分用户在部署 NullClaw 至生产环境（特别是 Linux 容器环境）时，曾遇到网络诊断困难和资源调度异常，目前亟待这些底层修复合入主线。

## 8. 待处理积压
*   **长期未合并的功能 PR**：[PR #783](https://github.com/nullclaw/nullclaw/pull/783) 自 4 月 7 日开启至今已逾一个月，涉及 Cron 引擎核心逻辑。建议维护者优先审查，确认是否存在设计分歧或测试覆盖不足，避免大量开发工作积压。
*   **基础兼容性修复滞后**：[PR #878](https://github.com/nullclaw/nullclaw/pull/878) 与 [PR #891](https://github.com/nullclaw/nullclaw/pull/891) 均属于影响系统稳定性的修复，虽已更新但尚未合并。建议维护者尽快介入，防止此类底层问题影响后续版本质量。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 (2026-05-23)

## 1. 今日速览
IronClaw 项目今日保持极高的开发活跃度，过去 24 小时内共有 50 个 PR 更新与 23 个 Issue 更新，显示出项目正处于 "Reborn" 架构重构的关键攻坚阶段。核心工作集中在安全审计机制、多租户隔离、以及 Host-Kernel 的能力扩展上。今日关闭了关键的认证组合 PR，并新开了多个针对安全边界和性能优化的 PR，表明项目在稳步构建生产级基础设施的同时，正积极修补潜在的安全短板。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 12 个 PR 合并或关闭，其中最为关键的是 **PR #3878**，它成功连接了 Reborn 产品层认证组合接缝，为产品级认证流程奠定了基础。此外，项目在以下领域取得显著进展：

*   **安全审计与加固**：**PR #3919** 引入了 `SecurityAuditSink` 原语，用于记录安全边界决策；**PR #3903** 修复了 Reborn 生产环境凭证边界的缺口，增强了凭证注入的安全性。
*   **沙箱与执行环境**：**PR #3900** 添加了 Docker 沙箱命令传输支持，提升了租户隔离的执行能力；**PR #3890** 补充了 Reborn 多租户隔离的契约测试，确保系统在并发环境下的数据隔离。
*   **架构优化与性能**：**PR #3899** 全面跟进 Reborn 预算系统的实现，解决了 Token 消耗统计等关键问题；**PR #3913** 优化了 Hooks 框架，推迟能力输入解析直至谓词需要时才执行，显著提升了性能。

## 4. 社区热点
今日讨论最活跃的议题集中在测试框架与底层架构设计：
*   **[Issue #3702] [reborn] Reborn: revise and implement binary-E2E test framework plan** (评论: 4)：该议题深入探讨了如何对齐 Rust 集成测试与 Reborn 架构，显示团队在重构同时高度重视测试覆盖率的同步演进。
*   **[Issue #2117] feat: ironclaw-bridge — local file/MCP bridge daemon** (👍: 1)：这是一个长期需求，旨在解决云端托管部署无法访问用户本地文件（如 Obsidian 库）的痛点。该议题再次活跃，表明混合云/本地场景仍是用户关注的核心功能。

## 5. Bug 与稳定性
今日报告了多个涉及安全与稳定性的重要问题，目前均已有对应的 PR 或正在处理中：
*   **[HIGH] [Issue #3447] Nightly E2E failed**：CI/CD 流水线失败，需尽快排查以保障代码质量。
*   **[MEDIUM] [Issue #3917] Question: kill RuntimeCredentialTarget::PathPlaceholder or harden it?**：发现凭证注入机制存在 URL 路径泄露风险，建议移除或加固此功能。
*   **[MEDIUM] [Issue #3915] Pattern: default-to-no-op guardrails get silently bypassed**：发现了 3 处安全防护机制可能被静默绕过的反模式，涉及生产环境语义降级风险。
*   **[MEDIUM] [Issue #3916] Harden LocalFilesystem**：指出文件系统检查点存储在持久化写入（fsync/原子重命名）方面的正确性缺口。

## 6. 功能请求与路线图信号
*   **定时触发器**：**Issue #3873** 提议增加 Trigger Loop，支持 Cron 定时触发 Agent 工作流（如每日摘要），这标志着 IronClaw 正从被动响应向主动自动化迈进。
*   **用户级工具安装**：**Issue #3905** 提出支持安全的用户级工具安装，完善 Reborn 的权限模型。
*   **子代理**：**Issue #3798** 及相关的 **Issue #3875** 显示团队正在攻克子代理生成的复杂逻辑，尽管在 E2E 测试中遇到了阻塞恢复的问题，但这是 Agent 自主性提升的关键一步。

## 7. 用户反馈摘要
从 Issue #2117 的持续活跃可以看出，**云端 Agent 访问本地资源**是用户最迫切的需求之一，用户希望在使用云端算力的同时保留对本地知识库（如 Obsidian）的访问能力。此外，近期关于 "Reborn" 架构的大量细粒度 Issue（如 #3905, #3891）反映出早期采用者或内部团队对**权限粒度控制**和**工具安全性**有较高要求，希望系统能提供类似操作系统级别的进程隔离与权限管理能力。

## 8. 待处理积压
*   **[Issue #3447] Nightly E2E failed**：自 5 月 10 日创建以来仍未解决，持续的 CI 失败可能阻碍代码合并效率，建议优先修复。
*   **[Issue #2117] ironclaw-bridge**：自 4 月 7 日创建，作为连接云端与本地环境的关键特性，虽有技术难度但用户期待值高，建议纳入近期迭代计划。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-23)

## 1. 今日速览
LobsterAI 今日表现出极高的开发活跃度，正式发布了 **v2026.5.22** 版本，核心聚焦于 **Subagent (子智能体) 架构的体验重构与稳定性增强**。项目在 24 小时内合并了 11 个 PR，密集修复了子智能体会话的持久化、UI 渲染及状态同步问题，显示出团队正致力于打磨多智能体协作的核心链路。此外，社区提出了关于 OpenClaw gateway 实时事件广播的深度优化建议，标志着项目正向更成熟的实时落盘与高可靠架构演进。

## 2. 版本发布
**Release: LobsterAI 2026.5.22**
- **链接**: [netease-youdao/LobsterAI Releases](https://github.com/netease-youdao/LobsterAI/releases/tag/untagged-2026.5.22)
- **更新亮点**:
    - **Subagent UX 升级**: 新增子智能体会话侧边栏与独立详情视图，复用主会话渲染管道，交互体验更一致。
    - **模型能力增强**: 支持模型自定义参数配置，新增思考块 显示功能，提升推理透明度。
    - **稳定性修复**: 解决了自定义模型切换错误及浏览器配置无效等问题。

## 3. 项目进展
今日共有 **11 个 PR 合并/关闭**，主要围绕 Subagent 功能闭环与依赖维护：

- **核心功能突破**:
    - **本地持久化**：[PR #2034](https://github.com/netease-youdao/LobsterAI/pull/2034) 实现了子智能体会话消息在首次网关获取后自动持久化至 SQLite，确保二次加载秒开，显著提升用户体验。
    - **渲染架构重构**：[PR #2030](https://github.com/netease-youdao/LobsterAI/pull/2030) 将会话渲染管道抽取为通用组件 `ConversationTurnsView`，实现了主会话与子智能体会话 UI 的代码复用，架构更加整洁。

- **关键缺陷修复**:
    - [PR #2033](https://github.com/netease-youdao/LobsterAI/pull/2033) 修复了子智能体同步时丢失工具结果及输入显示的问题，这是影响多智能体协作可靠性的关键修复。
    - [PR #2032](https://github.com/netease-youdao/LobsterAI/pull/2032) 解决了切换自定义模型时的报错问题，提升了模型生态兼容性。
    - [PR #2029](https://github.com/netease-youdao/LobsterAI/pull/2029) 修复了子智能体侧边栏重复追踪及工具结果缺失问题，优化了界面样式。

- **工程化改进**:
    - [PR #2027](https://github.com/netease-youdao/LobsterAI/pull/2027) 优化了子智能体页面的窗口拖拽与 Mac 端适配。

## 4. 社区热点
- **Issue #2036**: [给 OpenClaw gateway 提 issue 或 PR，增加 agent:turn 或 agent:loop 事件](https://github.com/netease-youdao/LobsterAI/issues/2036)
    - **分析**：作者 `@woxinsj` 提出了一个架构层面的改进建议。目前智能体主循环结束后缺乏自动广播机制，导致无法做到“实时落盘”。该 Issue 直指当前 AI 助手在长时运行或异常中断时可能丢失上下文数据的痛点，社区正在讨论通过增加 `agent:turn` 事件来解决此问题，对于提升 LobsterAI 的生产环境可靠性具有重要意义。

## 5. Bug 与稳定性
- **已修复**:
    - **严重逻辑缺陷**: 子智能体同步丢失工具结果 ([PR #2033](https://github.com/netease-youdao/LobsterAI/pull/2033))。
    - **功能阻断**: 自定义模型切换报错 ([PR #2032](https://github.com/netease-youdao/LobsterAI/pull/2032))。
    - **UI/UX 问题**: 侧边栏高亮状态错误、重复追踪、Mac 窗口控制重叠 ([PR #2029](https://github.com/netease-youdao/LobsterAI/pull/2029), [PR #2027](https://github.com/netease-youdao/LobsterAI/pull/2027))。
- **潜在风险**:
    - 待合并的依赖更新 PR 积压较多，包含 React 19、Vite 8、Electron 42 等大版本升级，需警惕破坏性变更带来的兼容性问题。

## 6. 功能请求与路线图信号
- **实时性与数据安全**: Issue #2036 揭示了用户对 **实时数据落盘** 的强烈需求。这暗示未来版本可能会在 OpenClaw 网关层引入更细粒度的事件钩子，以确保每轮对话数据的安全保存。
- **本地化统计分析**: 陈旧但活跃的 [PR #1533](https://github.com/netease-youdao/LobsterAI/pull/1533) 提议增加本地会话统计面板，这与“个人 AI 助手”的产品定位高度契合，有望在后续版本中纳入。

## 7. 用户反馈摘要
- **痛点**：用户目前对子智能体会话的“数据持久化”和“实时性”最为敏感。Issue #2036 反映出在复杂 Agent 工作流中，用户极度担心因缺乏中间状态广播而导致的数据丢失。
- **满意度**：开发团队对 Subagent UI 的反复打磨（侧边栏样式、回退逻辑、窗口拖拽）表明用户对多窗口/多会话管理的交互细节要求较高，团队响应迅速。

## 8. 待处理积压
以下长期未合并的 PR 涉及重大依赖升级与安全性加固，建议维护者优先 Review：

- **安全隐患**：
    - [PR #1534](https://github.com/netease-youdao/LobsterAI/pull/1534) 修复 API 代理日志泄露凭证的问题（创建于 4 月，仍未合并）。
    - [PR #1535](https://github.com/netease-youdao/LobsterAI/pull/1535) 为渲染进程 KV Store 增加键白名单，防止敏感数据被非法读写。
- **核心依赖升级**：
    - [PR #1764](https://github.com/netease-youdao/LobsterAI/pull/1764) React 升级至 19.2.6。
    - [PR #1766](https://github.com/netease-youdao/LobsterAI/pull/1766) Vite 升级至 8.0.13。
    - [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Electron 升级至 42.1.0。
    以上升级均由 Dependabot 发起，已停滞超过一个月，可能引入技术债务积累风险。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-23)

## 1. 今日速览
过去 24 小时内，Moltis 项目展现出极高的维护活跃度与迭代速度，核心开发者 @penso 进行了大量代码合并与问题修复。项目成功解决了包括 Docker 沙箱环境、语音合成（TTS）兼容性以及电话通信在内的多个关键 Bug，并显著增强了 Agent 的文档获取能力与 Web 端的交互体验。今日共有 9 个 PR 被合并，7 个 Issue 被关闭，仅新开 1 个 UI 显示问题的 Bug，整体项目健康度优秀，处于快速迭代稳定期。

## 2. 版本发布
*   **无新版本发布**：尽管有大量代码合并，今日暂未观测到正式的 Release 版本发布。

## 3. 项目进展
今日项目进展显著，主要集中在**容器化环境兼容性修复**、**语音功能完善**及**Agent 能力增强**三个方向：

*   **Docker 环境适配与修复**：
    *   PR [#1040](https://github.com/moltis-org/moltis/pull/1040) 和 PR [#1035](https://github.com/moltis-org/moltis/pull/1035) 彻底解决了 Docker 环境下沙箱媒体文件读取及挂载路径检测问题，修复了长期困扰用户的 `send_image` 和 `send_document` 失败问题。
    *   解决了 Issue [#977](https://github.com/moltis-org/moltis/issues/977) 中提到的 Docker (LXC) 环境下浏览器沙箱启动失败的问题。

*   **语音与通信功能增强**：
    *   PR [#1041](https://github.com/moltis-org/moltis/pull/1041) 修复了 OpenAI TTS 在 Speaches 等兼容服务下的格式不支持问题，改用 MP3 格式以提升兼容性。
    *   PR [#1043](https://github.com/moltis-org/moltis/pull/1043) 优化了 Piper TTS 的音频输出，增加了 WAV 元数据封装。
    *   PR [#1034](https://github.com/moltis-org/moltis/pull/1034) 修复了 Twilio 电话通话中 Agent 只问候不响应的严重交互故障。

*   **Agent 与 Web UI 功能扩展**：
    *   PR [#1044](https://github.com/moltis-org/moltis/pull/1044) 实现了 Agent 优先读取本地 Moltis 文档的功能，提升了 Agent 的自我认知与回答准确性（关闭 Issue [#1028](https://github.com/moltis-org/moltis/issues/1028)）。
    *   PR [#1042](https://github.com/moltis-org/moltis/pull/1042) 支持了 Web UI 任意文件附件的上传与处理，扩展了多模态交互场景。

*   **安全与配置**：
    *   PR [#1033](https://github.com/moltis-org/moltis/pull/1033) 新增了允许禁用静态数据 Vault 加密的功能，为特定安全需求场景提供了灵活性。

## 4. 社区热点
*   **Issue [#977](https://github.com/moltis-org/moltis/issues/977) [CLOSED]**: 该 Issue 自 5 月 6 日创建以来，引发了较多讨论（5 条评论）。问题聚焦于 Proxmox/LXC 环境下 Docker 挂载与沙箱权限的复杂冲突，今日终于得到彻底解决，反映了社区对复杂部署环境的高度关注。
*   **Issue [#1028](https://github.com/moltis-org/moltis/issues/1028) [CLOSED]**: 社区提出 Agent 应具备“开箱即用”读取项目文档的能力，这一需求在 2 天内即被实现并合并，体现了项目对提升 AI 智能体自主能力的重视。

## 5. Bug 与稳定性
今日修复了多个高优先级 Bug，仅新增 1 个 UI 级 Bug：

*   **已修复**:
    *   **[严重]** Docker 沙箱执行失败：涉及浏览器工具及文件读写功能，通过 PR [#1040](https://github.com/moltis-org/moltis/pull/1040) 修复。
    *   **[严重]** Twilio 通话交互中断：Agent 无法回应用户语音，通过 PR [#1034](https://github.com/moltis-org/moltis/pull/1034) 修复。
    *   **[中等]** OpenAI TTS 格式兼容性错误：导致使用 Speaches 等后端时报错，通过 PR [#1041](https://github.com/moltis-org/moltis/pull/1041) 修复。

*   **新增 Bug**:
    *   **[低]** Issue [#1045](https://github.com/moltis-org/moltis/issues/1045): 亮色模式下代码块无语法高亮。目前尚未有修复 PR。

## 6. 功能请求与路线图信号
*   **文档感知能力**: 通过 Issue [#1028](https://github.com/moltis-org/moltis/issues/1028) 的关闭，项目确立了 Agent 优先使用本地知识库的路线，这有助于减少幻觉并提高隐私安全性。
*   **多模态交互**: Issue [#1036](https://github.com/moltis-org/moltis/issues/1036) 请求支持任意文件上传，已通过 PR [#1042](https://github.com/moltis-org/moltis/pull/1042) 实现。这表明项目正从单纯的“聊天机器人”向“全能数字助手”演进，支持更复杂的文件处理任务。
*   **灵活安全策略**: Issue [#1033](https://github.com/moltis-org/moltis/pull/1033) 引入的 Vault 加密开关，暗示项目正在适配更广泛的企业级或个人轻量级部署场景，不再强制重度加密带来的性能开销。

## 7. 用户反馈摘要
*   **部署痛点**: 用户反馈在 Docker（尤其是 Proxmox/LXC 架构）中运行时，权限和挂载路径问题频发，主要集中在文件系统隔离导致的读写失败。
*   **TTS 兼容性**: 用户倾向于使用 OpenAI 兼容的 API 接口（如 Speaches），对默认音频格式（如 opus）的支持提出了更高要求。
*   **体验细节**: 用户对 UI 细节（如亮色模式高亮）有较高要求，同时也希望 Agent 能更“聪明”地利用项目自带文档进行自我学习。

## 8. 待处理积压
*   **UI 显示问题**: Issue [#1045](https://github.com/moltis-org/moltis/issues/1045) 为目前唯一待处理的活跃 Bug，虽然影响面较小（仅限亮色模式），但建议维护者尽快修复以提升用户体验。
*   **长期维护**: 今日核心贡献者 @penso 关闭了大量 Issue 和 PR，工作量巨大，建议项目方关注维护者负载，避免单点瓶颈。

---
*分析师注：Moltis 项目今日表现出了极强的执行力，特别是在 Docker 兼容性和语音通话稳定性方面解决了多个顽疾，项目正变得更加健壮。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 (2026-05-23)

## 1. 今日速览
CoPaw 项目今日保持较高的开发活跃度，PR 合并数量（8个）超过新增 Issue 数量（5个），显示出团队较强的维护能力。今日重点解决了多模型兼容性（Gemini、Gemma）及消息通道稳定性（微信、钉钉）问题。社区方面，用户对“聊天历史丢失”问题反响强烈，成为今日讨论焦点。同时，针对插件生命周期钩子和移动端适配的功能提案显示出社区对扩展性与多端支持的迫切需求。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **8 个 PR** 被合并或关闭，显著提升了系统稳定性与兼容性：

*   **模型兼容性修复**：PR [#4621](https://github.com/agentscope-ai/QwenPaw/pull/4621) 修复了 Gemini/Gemma 模型因 `max_tokens` 参数不匹配导致的崩溃问题，增强了非 Qwen 系模型的适配度。
*   **通道稳定性优化**：
    *   PR [#4627](https://github.com/agentscope-ai/QwenPaw/pull/4627) 优化了微信通道 Token 失效后的处理逻辑，解决了可能导致的进程阻塞问题。
    *   PR [#4600](https://github.com/agentscope-ai/QwenPaw/pull/4600) 修复了钉钉通道发送文件时中文文件名乱码的问题。
*   **UI/UX 改进**：PR [#4623](https://github.com/agentscope-ai/QwenPaw/pull/4623) 更新了技能市场页面；PR [#4626](https://github.com/agentscope-ai/QwenPaw/pull/4626) 修复了桌面宠物在连续对话中卡死的 Bug。
*   **安全性增强**：PR [#4395](https://github.com/agentscope-ai/QwenPaw/pull/4395) 增加了安全模块的单元测试覆盖率。

## 4. 社区热点
今日讨论最活跃的 Issue 为 **[#4620 [Bug]: Chat history disappeared](https://github.com/agentscope-ai/QwenPaw/issues/4620)**。
*   **热度数据**：评论数 12 条，新开 Issue。
*   **诉求分析**：多位用户反馈在切换会话时偶尔丢失聊天记录。该问题被标记为 Critical Bug 且“存在已久”，直接影响了用户对数据持久化的信任。用户 @duwey 指出即使滚动到底部也无法找回消息，引发社区共鸣。

此外，关于 **[#4474 ChatGPT-5.5 支持](https://github.com/agentscope-ai/QwenPaw/issues/4474)** 的讨论（评论 8 条）显示了用户对最新前沿模型的快速接入需求。

## 5. Bug 与稳定性
今日报告的关键 Bug 按严重程度排序如下：

1.  **[Critical] 聊天历史丢失**：Issue [#4620](https://github.com/agentscope-ai/QwenPaw/issues/4620)。严重的数据可见性问题，暂无关联 Fix PR，需优先排查数据库或前端状态管理逻辑。
2.  **[High] 代理配置失效**：Issue [#4607](https://github.com/agentscope-ai/QwenPaw/issues/4607)。环境变量 `NO_PROXY` 未生效，导致内网请求错误走代理，影响企业级部署。
3.  **[Medium] MiniMax 模型解析异常**：Issue [#4625](https://github.com/agentscope-ai/QwenPaw/issues/4625)。MiniMax-M2.5 模型思考过程返回 XML 格式导致指令执行中断。
4.  **[Medium] DeepSeek Think 标签解析**：Issue [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051)（已关闭，需确认修复情况）。DeepSeek V4 Flash 的思考内容未正常解析。

## 6. 功能请求与路线图信号
社区提出了多项具有建设性的功能请求，部分已有 PR 跟进：

*   **插件系统增强**：
    *   Issue [#4613](https://github.com/agentscope-ai/QwenPaw/issues/4613) 请求支持 `register_agent_hook`，以便插件介入 Agent 生命周期。
    *   **进展**：已有 PR [#4638](https://github.com/agentscope-ai/QwenPaw/pull/4638) 提交实现，建议重点关注合入进度。
*   **记忆自动化**：Issue [#4639](https://github.com/agentscope-ai/QwenPaw/issues/4639) 提出“会话结束自动总结机制”，旨在解决 Agent 忘记记录关键信息的问题，对提升长程记忆能力有重要意义。
*   **移动端支持**：Issue [#4635](https://github.com/agentscope-ai/QwenPaw/issues/4635) 建议开发移动端友好的 WebUI 或客户端，目前 WebUI 在移动端体验较差。
*   **精细化模型控制**：Issue [#4624](https://github.com/agentscope-ai/QwenPaw/issues/4624) 建议支持按单个模型独立配置重试与限流策略，反映了多模型混合部署场景下的高级配置需求。

## 7. 用户反馈摘要
*   **痛点**：
    *   **数据安全感**：用户对会话历史丢失极度敏感，认为是不可接受的严重 Bug。
    *   **多模型适配**：接入第三方模型（DeepSeek, MiniMax, Gemini）时常遇到参数校验错误或响应解析问题，用户希望开箱即用体验更顺畅。
    *   **工具链完整性**：用户反馈当前缺少可靠的多行文本写入工具（Issue [#4632](https://github.com/agentscope-ai/QwenPaw/issues/4632)），限制了 Skill 的开发效率。
*   **场景**：
    *   用户在生产环境中混合使用 MiniMax M2.7、DeepSeek V4 等多种模型，对 QPM 限制和并发控制有精细化管理需求。

## 8. 待处理积压
*   **Issue [#3984](https://github.com/agentscope-ai/QwenPaw/issues/3984)**（创建于 4-30）：关于上下文压缩导致聊天历史 UI 显示孤立消息的问题，至今未解决。该 Bug 影响用户体验，建议排期修复。
*   **PR [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)**（创建于 4-24）：Tauri 2.x 桌面端支持的大型重构 PR，已停滞一个月，需维护者评估合入计划。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-05-23)

## 1. 今日速览
EasyClaw 项目今日整体呈现“低互动、高交付”的状态。过去 24 小时内，社区侧的 Issue 与 PR 活跃度均为零，显示出社区反馈处于静默期。然而，项目团队在今日发布了重要的 v1.8.14 版本，带来了客服工作区与电商工作流的关键更新，表明项目开发主线依然活跃且聚焦于商业化场景落地。总体而言，项目核心功能迭代稳健，但社区参与度有待提升。

## 2. 版本发布
今日项目发布了 **v1.8.14 (RivonClaw v1.8.14)**，此次更新主要聚焦于桌面端应用能力的拓展与特定电商场景的优化。

*   **更新详情**：
    *   **新增客服工作区**：在桌面应用中原生集成了客服工作区，支持直接跟踪升级工单和对话状态，提升客服响应效率。
    *   **电商与联盟工作流增强**：优化了电商及联盟营销工作流，引入了更新的对话快照和更强的工作上下文感知能力；特别增加了 TikTok Shop 市场标签，强化了对跨境电商场景的支持。
    *   **应用瘦身**：移除了遗留的 "br" 模块（注：Release Note 此处截断，推测为移除了旧版分支或废弃功能），有助于减少应用体积和维护成本。
*   **迁移建议**：虽然 Release Note 未明确提及破坏性变更，但由于涉及遗留代码的移除，建议升级用户重点关注桌面端应用的自定义插件兼容性。
*   **链接**：[v1.8.14 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.14)

## 3. 项目进展
今日无合并或关闭的 Pull Requests。项目的主要进展集中体现在 v1.8.14 版本的代码发布上。该版本显示项目正从通用的 AI 助手工具向垂直领域的电商客服解决方案演进，特别是在 TikTok Shop 集成方面迈出了实质性一步，产品定位更加清晰。

## 4. 社区热点
过去 24 小时内，项目 Issue 区与 PR 区均无新增讨论或更新。暂无社区热点事件。这可能意味着当前版本处于相对稳定期，或用户反馈渠道主要集中于非 GitHub 平台。

## 5. Bug 与稳定性
过去 24 小时内未收到新的 Bug 报告或崩溃反馈。鉴于 v1.8.14 刚刚发布，建议维护者在接下来的 1-2 天内密切监控新版本中 "TikTok Shop 标签" 及 "客服工作区" 功能的稳定性，防范新功能引入的潜在回归问题。

## 6. 功能请求与路线图信号
今日无新增功能请求（Issue）。但从 v1.8.14 的发布内容可以反推出项目的隐性路线图：
*   **客服场景深化**：新增的客服工作区表明项目正试图解决 AI 助手在“人机协同”场景下的状态管理痛点。
*   **电商垂直化**：针对 TikTok Shop 的专项优化，释放了项目将重点转向电商营销自动化与客服自动化的强烈信号。

## 7. 用户反馈摘要
由于今日无 Issue 评论数据，暂无法提炼用户真实反馈。建议关注后续版本发布后用户关于桌面端新功能的体验反馈，特别是针对工作区切换流畅度和电商数据刷新准确性的评价。

## 8. 待处理积压
基于今日数据（0 条 Issue 更新），暂无近期活跃的积压问题。项目当前的 Issue 列表处于静态。建议维护者检查是否有长期未关闭的遗留 Issue，并在新版本发布后引导用户进行验证与清理，以保持 Issue 列表的时效性。

---
*分析师注：今日项目动态完全由 Release 驱动，缺乏社区互动数据。建议项目方加强 Release Note 的宣传，或在 Discussion 区发起关于新版本功能的讨论，以激活社区参与度。*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*