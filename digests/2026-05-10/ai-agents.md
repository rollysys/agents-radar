# OpenClaw 生态日报 2026-05-10

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-10 03:35 UTC

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

# OpenClaw 项目动态日报 (2026-05-10)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，过去 24 小时内共有 **500 条 Issue 更新** 和 **500 条 PR 更新**，其中 PR 合并/关闭数达 167 条，显示项目迭代速度极快。项目发布了 **v2026.5.9-beta.1** 版本，主要优化了聊天命令交互逻辑。社区讨论焦点集中在跨平台客户端支持、底层架构从文件存储向 SQLite 迁移的重构，以及 Docker 环境下的稳定性问题。整体来看，项目正处于架构重构的关键期，核心功能迭代与缺陷修复并行推进。

## 2. 版本发布
### v2026.5.9-beta.1
**更新内容**：
- **交互优化**：新增 `/think default` 和 `/fast default` 聊天命令，允许用户清除会话级的参数覆盖，恢复至配置文件或提供商的默认设置。这为临时调整模型推理模式后快速恢复默认状态提供了便利。
- **依赖更新**：刷新了工作区依赖锁定，主要包括 `@openai/codex` 升级至 `0.130.0`，`acpx` 升级至 `0.7.0`，以及 AWS SDK 更新至 `3.1044.0`。

**注意事项**：虽无破坏性变更，但依赖项的升级（特别是 OpenAI Codex 相关库）建议开发者关注兼容性测试。

## 3. 项目进展
今日共有 167 个 PR 被合并或关闭，项目在底层架构、多渠道适配和安全性方面取得显著进展。

- **架构重构（核心进展）**：由维护者 @steipete 提交的超大体积 PR **#78595** 正在推进将运行时状态迁移至 SQLite 数据库。此举旨在解决现有 JSON/JSONL 分散存储带来的状态管理难题，目前已进入后期完善阶段（关联 PR #79971），预计将大幅提升多会话并发与状态恢复的可靠性。
- **渠道集成修复**：合并了 Telegram 渠道的多项修复，包括处理选择回调的安全逻辑 (**PR #79816**) 和非流模式下媒体附件去重 (**PR #78420**)，显著改善了 Telegram 机器人的交互体验。
- **安全与策略**：新增了 World ID AgentKit 的 HITL（Human-in-the-loop）审批支持 (**PR #78583**)，增强了敏感操作的安全性验证。
- **安装体验优化**：针对网站安装脚本进行了跨平台验证与同步 (**PR #80067**)，修复了 macOS 和 Windows 下的安装脚本潜在问题。

## 4. 社区热点
今日社区讨论最热烈的话题依然围绕平台覆盖与架构性能展开：

1.  **[Issue #75] Linux/Windows Clawdbot Apps**
    - **热度**：104 评论 | 👍 74
    - **诉求**：这是长期霸榜的热门 Issue。用户强烈呼吁补齐 Linux 和 Windows 的原生客户端，以实现与 macOS/iOS 一致的功能体验。目前缺乏官方回应的具体时间表，用户对此表示焦急。
    - **链接**：[openclaw/openclaw Issue #75](https://github.com/openclaw/openclaw/issues/75)

2.  **[Issue #14593] Skill install fails in Docker**
    - **热度**：29 评论 | 👍 17
    - **诉求**：用户在 Docker 容器中运行 `openclaw onboard` 时，因缺少 `brew` 导致技能安装失败。由于官方 Docker 镜像未预装 brew，这阻碍了容器化部署的顺畅度。
    - **链接**：[openclaw/openclaw Issue #14593](https://github.com/openclaw/openclaw/issues/14593)

3.  **[Issue #9443] Prebuilt Android APK releases**
    - **热度**：24 评论 | 👍 1
    - **诉求**：用户希望官方能直接提供预编译的 Android APK 下载，而非强制用户自行编译源码，以降低移动端的使用门槛。
    - **链接**：[openclaw/openclaw Issue #9443](https://github.com/openclaw/openclaw/issues/9443)

4.  **[Issue #10659] Masked Secrets**
    - **热度**：12 评论 | 👍 4
    - **诉求**：安全领域的强需求。用户希望 Agent 能“使用”API Key 但无法“看见”明文，以防止 Prompt 注入攻击导致密钥泄露。
    - **链接**：[openclaw/openclaw Issue #10659](https://github.com/openclaw/openclaw/issues/10659)

## 5. Bug 与稳定性
今日报告了多个影响生产环境的 Bug，主要集中在容器化部署和模型兼容性上。

### 严重
- **[Issue #71127] 会话卡死无法自动恢复**
    - **现象**：诊断系统检测到会话处理卡死并发出警告，但运行时无自动恢复机制，导致会话永久冻结，需人工重启 Gateway。
    - **状态**：待修复。
    - **链接**：[openclaw/openclaw Issue #71127](https://github.com/openclaw/openclaw/issues/71127)

- **[Issue #79794] Discord Gateway READY 事件失效**
    - **现象**：升级至 2026.5.7 后，Bot 虽显示在线，但无法接收 Guild 频道消息，为回归问题。
    - **状态**：待修复。
    - **链接**：[openclaw/openclaw Issue #79794](https://github.com/openclaw/openclaw/issues/79794)

### 高
- **[Issue #14593] Docker 环境缺少 brew 导致安装失败** (见社区热点)
- **[Issue #32473] Web UI 强制要求安全上下文**
    - **现象**：在非 localhost 或非 HTTPS 环境下访问控制台时报错 `control ui requires device identity`，影响 VPS 部署。
    - **链接**：[openclaw/openclaw Issue #32473](https://github.com/openclaw/openclaw/issues/32473)
- **[Issue #79492] Claude Opus 4.7 返回空响应**
    - **现象**：使用 `anthropic/claude-opus-4-7` 时运行时返回空响应，但 CLI 测试正常，疑似运行时处理缺陷。
    - **链接**：[openclaw/openclaw Issue #79492](https://github.com/openclaw/openclaw/issues/79492)

### 已有修复 PR
- 针对 Telegram 回调处理和媒体去重的问题已有合并的 PR (#79816, #78420)。
- 针对配置向导挂起的问题 (**Issue #39223**)，目前尚在排查中。

## 6. 功能请求与路线图信号
社区正在推动项目向更安全、更易用的方向发展，部分需求已有相关 PR 铺垫：

- **SQLite 架构重构**：Issue **#79902** 提出的“SQLite 会话接口”需求与正在进行的 PR **#78595** 高度契合。这表明下一版本将重点解决大规模上下文管理和会话持久化问题。
- **安全模型增强**：Issue **#13583** 提出的“硬性关卡”请求，希望 Agent 在执行敏感操作前强制调用特定工具，而不仅依赖提示词。这呼应了安全第一的设计理念。
- **Context 优化**：Issue **#22438** 建议分层加载 Bootstrap 文件以节省 Token，显示出用户对长上下文场景下的成本控制需求日益增长。

## 7. 用户反馈摘要
- **部署痛点**：Docker 用户频繁遭遇环境和权限问题（如 brew 缺失、挂载失败），反映出官方容器镜像的预配置可能不够完善。
- **移动端渴求**：Android APK 和 Linux/Windows 客户端是用户呼声最高的功能，显示项目正从“极客玩具”向“大众工具”过渡，现有的平台覆盖不足限制了用户群扩展。
- **安全焦虑**：用户对密钥明文存储在 Agent 可见的上下文中表示担忧，希望尽快引入密钥屏蔽或沙箱隔离机制。
- **性能担忧**：部分用户反馈 Context Window 消耗过快，希望优化文件加载策略。

## 8. 待处理积压
- **[Issue #75] Linux/Windows 客户端支持**：作为点赞数最高的 Issue，长期未得到“Started”标签，建议维护者明确路线图。
- **[Issue #71127] 卡死会话恢复机制**：该 Bug 影响服务可用性，需尽快纳入修复排期。
- **[Issue #32473] VPS 访问受限问题**：影响云端部署体验，涉及 HTTPS 证书和设备身份验证逻辑，需官方提供最佳实践指南或修复。

---

## 横向生态对比

# AI 智能体与个人助手开源生态日报 (2026-05-10 横向对比分析)

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正处于**架构重构与功能深水区**。头部项目正集体从单体脚本向**多智能体协作平台**与**数据库驱动架构**演进，SQLite 正在替代文件存储成为主流状态管理方案。同时，生态呈现出明显的**应用层分化**：一端是以多模态、Artifacts 和桌面端体验为核心的终端用户产品，另一端是以 SOP 引擎、调度器和持久化存储为核心的基础设施框架。社区对**稳定性与原生体验**的诉求日益强烈，Docker 部署与跨平台客户端成为用户痛点最集中的领域。

## 2. 各项目活跃度对比

| 项目名称 | Issues 动态 | PRs 动态 | Release 情况 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 条更新 | 500 条更新 (167 合并) | v2026.5.9-beta.1 | **极高**。迭代极快，架构重构期，社区热度最高，痛点与亮点并存。 |
| **CoPaw** | 33 条处理 (15 关闭) | 26 条处理 (18 合并) | v1.1.6 | **极高**。修复关键内存泄漏，发布新版本，迭代迅速，稳定性提升中。 |
| **IronClaw** | 未详 (EPIC 讨论 44 条) | 35 条更新 (22 待合并) | 无 (筹备 v0.28.0) | **极高**。底层架构重构，PR 堆积量大，处于功能密集开发阶段。 |
| **NanoClaw** | 未详 | 17 条更新 (10 合并) | 无 | **高**。架构深化，技能生态扩展，但存在严重回归 Bug。 |
| **PicoClaw** | 13 条更新 | 26 条更新 (10 合并) | v0.2.8-nightly | **高**。多智能体导向链修复，快速迭代中。 |
| **Hermes Agent** | 100 条数据 (Issue+PR) | 7 条合并 | 无 | **高**。多模态视觉重构完成，转向平台兼容性修复。 |
| **Zeroclaw** | 44 条新增/活跃 | 13 条合并 | 无 | **高**。v0.8.0 架构推进，严重 Bug 较多，社区反馈热烈。 |
| **NanoBot** | 未详 | 23 条更新 (15 合并) | 无 | **中高**。核心循环重构完成，稳定性优化为主。 |
| **LobsterAI** | 未详 | 10 条合并 | 2026.5.9 | **中**。发布功能性版本，解决关键 MCP 打包问题。 |
| **Moltis** | 无新增 | 3 条更新 (2 合并) | 无 | **中**。前端交互打磨，稳健迭代。 |
| **NullClaw** | 1 个严重 Bug | 2 条合并 | nightly-20260509 | **中**。功能迭代平稳，但存在关键 DNS 回归问题。 |
| **ZeptoClaw** | 无 | 1 条 Open | 无 | **低**。维护状态，仅微观优化。 |
| **TinyClaw / EasyClaw** | 无活动 | 无活动 | 无 | **静默**。 |

## 3. OpenClaw 在生态中的定位

作为生态的核心参照项目，OpenClaw 展现出了**最庞大的社区规模**与**最快的迭代速度**。

*   **优势**：社区活跃度断层领先（单日 500+ Issue/PR 更新），功能覆盖最全（跨平台、多渠道、多模态）。其 SQLite 架构迁移（PR #78595）直接引领了生态向数据库驱动架构转型的趋势。
*   **技术路线差异**：相比 NanoBot 的“极简状态机”和 Zeroclaw 的“SOP 引擎”，OpenClaw 采取**功能大而全**的路线，集成了大量渠道（Telegram/Discord/WhatsApp）和 Skill 插件。
*   **社区对比**：OpenClaw 的用户痛点集中在“生产环境可用性”（Docker 稳定性、客户端缺失），而 NanoBot/Hermes 等项目的讨论更多聚焦于“架构先进性”与“模型能力挖掘”。OpenClaw 正在经历从极客玩具向大众工具转型的阵痛期。

## 4. 共同关注的技术方向

1.  **存储架构迁移**：
    *   **项目**：OpenClaw, NanoClaw, IronClaw。
    *   **诉求**：为解决并发与状态恢复问题，项目正集体抛弃文件存储。OpenClaw 迁移至 SQLite，NanoClaw 迁移配置源至数据库，IronClaw 引入持久化加密存储。

2.  **多智能体协作与隔离**：
    *   **项目**：Zeroclaw, PicoClaw, LobsterAI, IronClaw。
    *   **诉求**：生态重心从单一 Agent 转向多 Agent 编排。Zeroclaw 实现 Agent 工作空间隔离，PicoClaw 引入导向链发现机制，LobsterAI 支持独立工作目录，IronClaw 构建多租户安全架构。

3.  **模型兼容性与原生推理支持**：
    *   **项目**：Hermes Agent, PicoClaw, IronClaw, CoPaw。
    *   **诉求**：社区对非 OpenAI 模型的适配需求激增。Hermes 推动 Ollama 原生支持，IronClaw 适配 DeepSeek 推理模式，CoPaw 兼容火山引擎/DashScope，PicoClaw 增加 xAI 支持。

4.  **安全性与权限控制**：
    *   **项目**：OpenClaw, Zeroclaw, NanoClaw。
    *   **诉求**：Agent 权限边界成为关注焦点。OpenClaw 引入 World ID HITL 审批，Zeroclaw 修复 Shell 权限绕过，NanoClaw 讨论 OAuth 代理合规性。

## 5. 差异化定位分析

*   **功能侧重**：
    *   **OpenClaw & CoPaw**：侧重**全平台终端体验**，强调桌面端/WebUI 易用性及多渠道接入（微信/企业微信/Telegram）。
    *   **Zeroclaw & IronClaw**：侧重**企业级基础设施**，关注多租户、SOP 引擎、调度器及数据治理，更像 Agent 操作系统。
    *   **NanoBot & Hermes Agent**：侧重**模型能力原生集成**，关注状态机可观测性、多模态原生处理及 Gateway 模式。
    *   **PicoClaw & NanoClaw**：侧重**协议与插件生态**，深耕 MCP 协议、技能安装及多智能体路由。

*   **目标用户**：
    *   **终端用户导向**：OpenClaw, LobsterAI, CoPaw, Moltis。目标是成为“个人 AI 助手”产品。
    *   **开发者/企业导向**：IronClaw, Zeroclaw, NanoBot, Hermes Agent。目标是成为“Agent 开发框架/平台”。

## 6. 社区热度与成熟度

*   **快速迭代期（活跃度高，问题多）**：
    *   **OpenClaw**：处于架构重构的关键路口，Issue 积压较多，社区对跨平台客户端的呼声极高。
    *   **IronClaw**：正处于 "Reborn" 重构期，PR 堆积量大，核心架构变动频繁，适合核心贡献者参与。
    *   **PicoClaw & NanoClaw**：功能扩展迅速，但伴随严重 Bug（如路由失败、数据丢失），处于功能与稳定性的磨合期。

*   **质量巩固期（稳定性提升）**：
    *   **CoPaw**：刚刚修复了严重的 MCP 内存泄漏问题，v1.1.6 版本标志着项目进入稳定性优化阶段。
    *   **Hermes Agent**：完成了视觉能力重构，正在修补 Windows 兼容性与 CLI 交互回归问题。
    *   **LobsterAI**：解决了关键的 MCP 打包失效问题，Artifacts 功能落地，产品成熟度显著提升。

*   **静默/维护期**：
    *   **TinyClaw, EasyClaw, ZeptoClaw**：活动极低，处于维护或停滞状态。

## 7. 值得关注的趋势信号

1.  **“记忆”正在从 RAG 转向结构化持久化**：
    *   社区对 RAG 的讨论热度下降，取而代之的是对 SQLite 数据库迁移（OpenClaw）、持久化记忆技能（NanoClaw `/add-mnemon`）和长期记忆工具优化（ZeptoClaw）的关注。这表明 Agent 架构正在追求更高的一致性和状态可靠性，而非单纯依赖检索增强。

2.  **WebUI 功能正在追赶 CLI**：
    *   Zeroclaw 和 CoPaw 的社区反馈均指出 Web Dashboard 功能缺失（如审批弹窗、配置同步）。用户不再满足于 CLI 的强大，要求 Web 端具备同等的控制力，这对前端架构提出了全栈要求。

3.  **Docker 部署成为“隐形杀手”**：
    *   OpenClaw 和 CoPaw 均收到大量关于 Docker 环境的反馈（权限、依赖缺失、配置覆盖）。随着用户尝试将 Agent 部署至服务器，容器化体验的优劣将成为留存关键。

4.  **推理模型的适配挑战**：
    *   IronClaw (DeepSeek) 和 PicoClaw (OpenRouter) 遇到了推理模型特有的问题，如 `reasoning_content` 流式回传和 Thinking 泄露。随着 DeepSeek-R1 等模型的普及，支持推理过程的原生传输将成为下一阶段框架的必修课。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-10)

## 1. 今日速览
NanoBot 项目今日保持**高活跃度**，核心开发重心明显向**架构重构与稳定性优化**倾斜。过去 24 小时内共有 23 个 PR 更新，其中 15 个已合并/关闭，显示维护者对代码库的清理和新特性的推进速度极快。虽然无新版本 Release，但多项核心重构（如状态机改造、配置加载中心化）已落地，为后续的模型预设功能和性能优化打下基础。社区方面，用户对上下文记忆持久化及多模态处理提出了更高要求，开发者社区已快速响应部分 Bug 并提交修复。

## 2. 版本发布
**无新版本发布。**
尽管无正式 Release，但大量已合并的 PR（如 #3708, #3715, #3719）预示着正在为下一个版本积累重要的架构更新和 Bug 修复。

## 3. 项目进展
今日共有 15 个 PR 合并/关闭，项目在代码质量和架构设计上取得了显著进展：

*   **架构重构与优化**：
    *   **核心循环重构**：PR [#3715](https://github.com/HKUDS/nanobot/pull/3715) 将核心的 `_process_message` 方法重构为显式的函数式状态机 (`RESTORE → COMPACT → COMMAND → BUILD → RUN → SAVE → RESPOND`)，显著提升了可读性与可维护性。
    *   **配置加载中心化**：PR [#3708](https://github.com/HKUDS/nanobot/pull/3708) 引入 `AgentLoop.from_config()`，统一了 CLI 和 Facade 的初始化逻辑，为即将到来的模型预设功能铺平道路。
*   **Bug 修复**：
    *   PR [#3719](https://github.com/HKUDS/nanobot/pull/3719) 修复了 Issue [#3716](https://github.com/HKUDS/nanobot/issues/3716) 中报告的“无效列表切片导致的死代码”问题。
    *   PR [#3705](https://github.com/HKUDS/nanobot/pull/3705) 修复了 CLI 交互模式下重试等待消息导致的终端输出错乱问题。
    *   PR [#3680](https://github.com/HKUDS/nanobot/pull/3680) 增加了对损坏会话文件的健壮性检查，防止历史消息丢失。
*   **WebUI 增强**：
    *   PR [#3709](https://github.com/HKUDS/nanobot/pull/3709) 在 WebUI 中增加了 BYOK (Bring Your Own Key) 的网页搜索设置，提升了用户体验。

## 4. 社区热点
今日讨论最活跃的话题集中在**功能扩展的边界**与**Agent 认知架构**：

*   **Issue [#3724](https://github.com/HKUDS/nanobot/issues/3724)**: 用户发表长文感谢并探讨 Agent 的“认知姿态”，指出当前的 System Prompt 和 Toolset 固化导致 Agent 容易陷入“复读机”模式，失去涌现能力。这引发了关于如何让 NanoBot 动态演化认知库的深层讨论。
*   **Issue [#3692](https://github.com/HKUDS/nanobot/issues/3692)**: 关于飞书群组 Topic 隔离功能的配置开关请求。用户反馈新功能的强制隔离导致多文件处理流程受阻，希望增加开关以适应不同的工作流。该 Issue 获得了 👍1，显示了较强的用户共鸣。

## 5. Bug 与稳定性
今日报告并处理了多个影响用户体验的 Bug：

*   **严重 (Critical) - 上下文丢失**：
    *   Issue [#3689](https://github.com/HKUDS/nanobot/issues/3689): 用户报告在打断 Agent 执行循环后，上一轮会话记录丢失。这影响了连续对话的连贯性，目前尚无修复 PR。
*   **中等 - 流式输出缺陷**：
    *   Issue [#3718](https://github.com/HKUDS/nanobot/issues/3718): Cron 定时提醒的消息流式输出缺少 `streamid`，导致客户端无法正确处理。
    *   **修复状态**：PR [#3720](https://github.com/HKSDS/nanobot/pull/3720) 已提交修复，正待合并。
*   **已修复**：
    *   Issue [#3716](https://github.com/HKUDS/nanobot/issues/3716): 工具函数中的死代码逻辑错误，已通过 PR [#3719](https://github.com/HKUDS/nanobot/pull/3719) 修复。
    *   Issue [#3674](https://github.com/HKUDS/nanobot/issues/3674): WebSocket 频道静默丢弃媒体文件，现已关闭（可能已修复或确认无效）。

## 6. 功能请求与路线图信号
结合 Issue 与 PR 趋势，以下功能极有可能纳入下一阶段路线图：

1.  **模型预设与动态切换**：PR [#3714](https://github.com/HKUDS/nanobot/pull/3714) 提出增加 `ModelPresetConfig`，允许运行时原子切换模型配置，响应了用户对多模型负载均衡的需求。
2.  **本地语音支持**：PR [#3723](https://github.com/HKUDS/nanobot/pull/3723) 提出集成 `faster-whisper` 实现本地语音转文字，旨在降低对第三方 API 的依赖及成本。
3.  **钩子系统增强**：PR [#3564](https://github.com/HKUDS/nanobot/pull/3564) 正在构建基于类型化事件的 HookCenter，这将极大提升插件系统的扩展性。

## 7. 用户反馈摘要
*   **痛点：会话持久化**：多用户反馈在任务中断或长时运行后，Agent 容易“失忆”或引用不存在的上下文（Issue #3689, #3711）。PR #3711 正尝试通过将归档摘要移入系统提示词来优化 KV Cache 稳定性。
*   **痛点：多模态处理**：WebSocket 和飞书渠道的多模态（文件/图片）处理仍存在丢包或隔离逻辑不当的问题（Issue #3674, #3692）。
*   **满意度**：开发者对 NanoBot 的极简架构表示认可（Issue #3724），认为其适合作为二次开发的基座，但希望核心架构能更灵活地支持“动态认知”。

## 8. 待处理积压
*   **PR [#3564](https://github.com/HKUDS/nanobot/pull/3564) (HookCenter 重构)**：此 PR 自 4 月 30 日开启至今未合并，涉及底层架构改动，需要维护者重点审查以确保兼容性。
*   **Issue [#3689](https://github.com/HKUDS/nanobot/issues/3689) (会话中断丢失上下文)**：该问题严重影响用户体验，目前尚未有明确 assigned 解决方案，建议优先排查。
*   **Issue [#2709](https://github.com/HKUDS/nanobot/issues/2709)**：关于长耗时任务流式传输的错误报告虽已关闭，但此类 LLM 接口超时问题仍是用户接入复杂业务时的常见阻碍，建议文档加强引导。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-10)

## 1. 今日速览
Zeroclaw 项目今日保持**高活跃度**，社区反馈与开发迭代速度显著加快。过去24小时内，新增/活跃 Issues 高达 **44 条**，显示用户测试热情高涨；开发团队响应迅速，合并/关闭了 **13 个 PRs**，主要聚焦于运行时安全性增强、配置路径修复及文档完善。目前项目重心正向 **v0.8.0 多智能体运行时架构** 迁移，同时 v0.7.6 版本的 Skills 功能正在稳步推进。虽无新版本发布，但核心功能的修复与重构为下一阶段的多人协作功能奠定了基础。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **13 个 PRs** 合并或关闭，项目整体在稳定性与安全性上取得实质性进展，修复了多个影响用户体验的关键 Bug。

*   **安全与权限修复**：PR [#6539](https://github.com/zeroclaw-labs/zeroclaw/pull/6539) 修复了直接会话中 Shell 权限审批绕过的问题，强制要求非交互式审批流程，显著提升了 Web Dashboard 的安全性。
*   **核心 Bug 修复**：PR [#6533](https://github.com/zeroclaw-labs/zeroclaw/pull/6533) 解决了多实例部署下配置路径覆盖的问题，现在 `ZEROCLAW_CONFIG_DIR` 优先级高于默认路径。PR [#6534](https://github.com/zeroclaw-labs/zeroclaw/pull/6534) 修复了 `SopEngine` 启动时未加载 SOPs 的严重遗漏。
*   **多智能体架构推进 (v0.8.0)**：PR [#6545](https://github.com/zeroclaw-labs/zeroclaw/pull/6545) 开启了备受期待的多智能体运行时特性，实现了完全隔离的 Agent 工作空间与身份管理，这是 v0.8.0 版本的核心基石。
*   **文档与体验优化**：PR [#6542](https://github.com/zeroclaw-labs/zeroclaw/pull/6542) 新增了用户侧的 Skills 指南，填补了技能系统文档的空白；PR [#6546](https://github.com/zeroclaw-labs/zeroclaw/pull/6546) 优化了无工具可用时的 Prompt 拼接，减少了对小模型的干扰。

## 4. 社区热点
今日社区讨论主要集中在 Discord 生态兼容性与 Web 端权限管理上，反映出用户对多渠道接入和精细化控制的强烈需求。

*   **Discord 机器人限制响应频道**：Issue [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) 获得 5 条评论。用户强烈希望能够像 Matrix/Nextcloud 一样限制 Bot 仅在特定 Discord 频道响应，避免在非相关频道产生干扰。该需求已被标记为 `accepted`，属于高频痛点。
*   **Web Dashboard 权限审批缺失**：Issue [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) 和 [#6522](https://github.com/zeroclaw-labs/zeroclaw/issues/6522) 引发热议。用户指出在 Web 端使用监督模式时，工具调用审批弹窗从未出现，导致流程卡死。这暴露了前后端 WebSocket 协议实现的不一致，目前后端协议已就绪，急需前端跟进。

## 5. Bug 与稳定性
今日报告了多个严重影响工作流的 Bug，部分已提供修复方案，部分仍待处理。

*   **S0 - 数据丢失/安全风险**：
    *   Issue [#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419)：WorkspaceManager 在运行时启动时无法加载 Profiles，导致配置丢失。
*   **S1 - 工作流阻塞**：
    *   Issue [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361)：**OpenAI 兼容提供商（如 MiniMax）上下文压缩严重 Bug**，会完全丢弃 `tool_calls` 导致智能体陷入死循环。目前有 PR [#6362](https://github.com/zeroclaw-labs/zeroclaw/pull/6362) 正在尝试修复。
    *   Issue [#6551](https://github.com/zeroclaw-labs/zeroclaw/issues/6551)：部分 OpenAI 兼容接口不支持非首位的 `system` 消息，导致崩溃。已有 PR [#6552](https://github.com/zeroclaw-labs/zeroclaw/pull/6552) 提交修复。
    *   Issue [#6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556)：Discord 频道媒体收发完全损坏，入站图片无法处理，出站类型丢失。
*   **已修复的高危 Bug**：
    *   Issue [#5605](https://github.com/zeroclaw-labs/zeroclaw/issues/5605) (多实例配置路径覆盖) 已通过 PR [#6533](https://github.com/zeroclaw-labs/zeroclaw/pull/6533) 解决。
    *   Issue [#5863](https://github.com/zeroclaw-labs/zeroclaw/issues/5863) (Skills 文档缺失) 已通过 PR [#6542](https://github.com/zeroclaw-labs/zeroclaw/pull/6542) 解决。

## 6. 功能请求与路线图信号
结合 Issue 与 PR 动态，v0.8.0 版本的雏形已现，重点在于架构解耦与生态扩展。

*   **多智能体运行时 (已立项)**：Issue [#6272](https://github.com/zeroclaw-labs/zeroclaw/issues/6272) 提出的“每个 Alias 独立工作空间与权限”已在 PR [#6545](https://github.com/zeroclaw-labs/zeroclaw/pull/6545) 中落地实现，这是迈向多 Agent 协作的关键一步。
*   **自定义提供商一等支持**：Issue [#6518](https://github.com/zeroclaw-labs/zeroclaw/issues/6518) 呼吁对 Kimi K2.5 等 OpenAI 兼容模型提供原生支持，避免复杂的配置 Hack。这表明用户对非标准 OpenAI API 的兼容性需求日益增长。
*   **Web 端交互增强**：Issue [#6522](https://github.com/zeroclaw-labs/zeroclaw/issues/6522) 提出的“Web 端工具审批 UI”已被标记为 `priority:p1`，预计很快会有前端 PR 跟进，解决目前 Web 端无法控制 Agent 执行敏感操作的问题。

## 7. 用户反馈摘要
*   **痛点：多实例部署配置混乱**：用户反馈在多实例部署时，硬编码的 `~/.zeroclaw/` 路径导致配置相互覆盖，今日的修复 PR [#6533](https://github.com/zeroclaw-labs/zeroclaw/pull/6533) 正中痛点。
*   **痛点：兼容性边缘情况**：用户在使用 MiniMax、Gemini CLI、Moonshot 等非主流或特定版本模型时频繁遇到崩溃或参数错误（如 [#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530), [#6520](https://github.com/zeroclaw-labs/zeroclaw/issues/6520)），反映出项目在长尾模型适配测试上仍有欠缺。
*   **期待：Web UI 完整性**：多位用户提及 Web Dashboard 功能缺失（如审批弹窗、日志流），希望 Web 端能尽快追平 CLI 的功能体验。

## 8. 待处理积压
*   **Matrix 构建失败 (Blocked)**：Issue [#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530) 报告了 `matrix-sdk v0.16.0` 导致的构建溢出问题，状态为 `blocked`，可能需要等待上游依赖更新或深度重构，是当前唯一阻塞性的构建问题。
*   **审计历史提交**：Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 正在追踪之前因批量回滚丢失的 153 个提交，虽然优先级为 P2，但对于代码库的历史完整性和特性恢复至关重要。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 (2026-05-10)

## 1. 今日速览
Hermes Agent 项目今日保持**极高活跃度**，共有 100 条数据更新（Issues + PRs），显示项目正处于密集开发与维护阶段。虽然无新版本发布，但社区贡献集中在**多模态视觉能力重构**、**CLI/TUI 稳定性修复**以及**Windows 平台兼容性**优化。共有 11 个 Issue 被关闭，主要集中在视觉功能增强与核心 Bug 修复，表明维护团队正在积极清理积压。今日最显著的趋势是多模态模型的原生视觉支持已基本落实（多个相关 Issue 关闭），重点正转向细化体验与平台适配。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 **7 个 PR 被合并/关闭**，重点推进了以下领域：

*   **多模态视觉能力里程碑**：随着 Issue #13065、#15288、#16862 和 #7641 的关闭，项目正式确立了**原生视觉支持** 的路线。现在系统支持将图像直接传递给具备视觉能力的模型（如 GPT-4o），而非强制经过独立的视觉分析工具，这将显著降低延迟并提升多模态交互体验。
*   **核心稳定性修复**：PR #22431 修复了会话轮转时内存提交通知缺失的问题，这对长期运行的 Gateway 模式至关重要；PR #22625 修复了 Telegram 网关表格渲染的格式错误。
*   **任务调度优化**：PR #22942 修正了 Kanban 任务运行时长的计算逻辑，确保统计数据的准确性。

## 4. 社区热点
今日讨论最热烈的话题集中在性能优化与功能增强：

1.  **Ollama 原生集成优化** ([Issue #4505](https://github.com/NousResearch/hermes-agent/issues/4505))
    *   **热度**：评论 10 条
    *   **诉求**：作者建议放弃使用 OpenAI 兼容接口 `/v1/chat/completions`，转而使用 Ollama 原生 `/api/chat` 接口，以获得真正的增量流式传输 能力。社区正在权衡 API 标准化与原生性能优势。
2.  **一等公民原生视觉支持** ([Issue #13065](https://github.com/NousResearch/hermes-agent/issues/13065))
    *   **热度**：评论 10 条
    *   **诉求**：讨论确认了即使主模型具备视觉能力，Hermes 之前仍强制调用辅助视觉模型的问题。该 Issue 的关闭标志着这一痛点已解决，大幅提升了多模态场景的效率。
3.  **Gateway 模式 IMAP 错误** ([Issue #18106](https://github.com/NousResearch/hermes-agent/issues/18106))
    *   **热度**：评论 4 条
    *   **诉求**：用户报告在处理 iCloud 邮件时遇到 `'int' object has no attribute 'decode'` 错误，涉及 Email 平台的底层解析逻辑。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的关键 Bug，部分已有修复方案：

*   **Critical (平台兼容性)**:
    *   **Windows TUI 构建失败**: `chmod` 命令在 Windows 下无效导致 TUI 无法启动。([Issue #22952](https://github.com/NousResearch/hermes-agent/issues/22952))
    *   **Windows CLI/TUI 命令失效**: `/sessions` 命令在经典 REPL 模式下提示 "Unknown command"。([Issue #22951](https://github.com/NousResearch/hermes-agent/issues/22951)) -> **已有修复 PR** ([PR #22948](https://github.com/NousResearch/hermes-agent/pull/22948))
*   **Major (交互体验)**:
    *   **CLI 输入回归**: Shift+Enter 无法换行，严重干扰多行文本输入。([Issue #22908](https://github.com/NousResearch/hermes-agent/issues/22908))
    *   **WebUI 显示混淆**: `vision_analyze` 工具的返回结果被错误标记为 "user" 角色，导致对话历史阅读困难。([Issue #22961](https://github.com/NousResearch/hermes-agent/issues/22961))
    *   **配置丢失**: `display.show_reasoning=false` 设置在 TUI 模式下失效，推理过程泄露。([Issue #22894](https://github.com/NousResearch/hermes-agent/issues/22894)) -> **已有修复 PR** ([PR #22953](https://github.com/NousResearch/hermes-agent/pull/22953))
*   **Moderate (配置与权限)**:
    *   **NixOS 配置路径错误**: `nixosModule` 将文件安装到工作目录而非 `$HERMES_HOME`。([Issue #21341](https://github.com/NousResearch/hermes-agent/issues/21341))
    *   **NixOS 权限覆盖**: Memory 写入操作未保留原有文件权限。([Issue #22889](https://github.com/NousResearch/hermes-agent/issues/22889))

## 6. 功能请求与路线图信号
*   **Kanban 增强与自省能力**:
    *   用户请求 Kanban 受指派人应改为下拉选择而非自由输入，以减少错误 ([Issue #21506](https://github.com/NousResearch/hermes-agent/issues/21506)，已关闭)。
    *   请求在 Kanban 分发任务前验证 Worker 是否具备所需工具集，避免“盲派”导致任务失败 ([Issue #22922](https://github.com/NousResearch/hermes-agent/issues/22922))。这反映了用户正在将 Hermes 用于更复杂的生产环境调度。
*   **智能体验证机制**:
    *   开发者提议增加“响应前验证钩子”，用于在 Agent 声称具备某项能力前进行自动化验证 ([Issue #22956](https://github.com/NousResearch/hermes-agent/issues/22956))。这标志着 Agent 可信度机制的提升。
*   **API 容错**:
    *   建议在同一 Provider 下支持多 Auth Profile 的自动轮换，以应对 Rate Limit ([Issue #22916](https://github.com/NousResearch/hermes-agent/issues/22916))。

## 7. 用户反馈摘要
*   **多模态体验改善**：用户对“原生视觉支持”表示欢迎，不再需要强制等待视觉分析工具的耗时调用。
*   **CLI/TUI 痛点**：近期对 CLI 底层库（PTY/Ink）的修改引发了一系列回归问题（按键失效、命令丢失），导致部分开发者在使用经典模式时受阻，用户呼吁加强多平台（特别是 Windows）的自动化测试。
*   **配置复杂度**：Dashboard 对配置项的暴露不全（如 Telegram 平台特定设置不可见），迫使用户手动修改 YAML，增加了使用门槛。

## 8. 待处理积压
*   **长期未解决**：Issue #4505 (Ollama 优化) 自 4 月 1 日开启至今，虽热度不减，但尚未有 PR 合并。
*   **高优待审 PR**：
    *   [PR #13564](https://github.com/NousResearch/hermes-agent/pull/13564): 修复 SMTP/IMAP 连接问题（支持 465 端口与 ID 扩展），对邮件网关用户至关重要。
    *   [PR #22887](https://github.com/NousResearch/hermes-agent/pull/22887): 运行时安全加固，涉及 Shell 钩子策略，需维护者重点审查。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-10)

## 1. 今日速览
PicoClaw 项目今日保持高度活跃，过去 24 小时内共有 **26 次 PR 更新**与 **13 次 Issues 更新**，开发迭代节奏紧凑。核心贡献者 @bogdanovich 集中攻坚了多智能体架构下的“导向链”消息处理与子智能体协作逻辑，提交了多项关键修复与功能增强。项目已发布最新的 **Nightly Build (v0.2.8)** 版本，包含了对 xAI 兼容性及多智能体发现机制的支持。整体来看，项目正处于功能快速迭代期，重点在于优化多智能体交互体验与底层协议兼容性。

## 2. 版本发布
- **nightly: Nightly Build**
  - 版本号: `v0.2.8-nightly.20260510.6e6293e5`
  - 说明: 自动化构建版本，可能存在不稳定因素，仅供测试尝鲜。
  - 变更日志: [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

## 3. 项目进展
今日共有 10 个 PR 被合并或关闭，显著推进了多智能体功能与 Provider 兼容性：

- **多智能体架构增强**：
  - PR [#2158](https://github.com/sipeed/picoclaw/pull/2158) 已合并，引入 Layer 1 多智能体发现机制，允许智能体通过注入的注册表发现其他智能体，这是迈向复杂 Agent 协作的关键一步。
  - PR [#2790](https://github.com/sipeed/picoclaw/pull/2790) 已合并，修复了 `spawn` 工具的路由问题，确保子任务能正确调用目标智能体的模型与工具。
  - PR [#2793](https://github.com/sipeed/picoclaw/pull/2793) 已合并，修复了工具注册表克隆时的浅拷贝缺陷，解决了子智能体工具发现混乱的问题。

- **Provider 生态扩展**：
  - PR [#2260](https://github.com/sipeed/picoclaw/pull/2260) 已合并，新增 **xAI 兼容性支持**，用户现可通过 OpenAI 兼容路径使用 xAI 模型。
  - PR [#2163](https://github.com/sipeed/picoclaw/pull/2163) 已合并，修复了 Google Antigravity (Cloud Code Assist) 会话令牌刷新后的权限丢失问题。

- **用户体验修复**：
  - PR [#2630](https://github.com/sipeed/picoclaw/pull/2630) 已合并，Web 端聊天界面现在会显示完整的回复时间（YYYY-MM-DD HH:mm），解决了之前仅显示模糊时间的问题。

## 4. 社区热点
今日讨论最活跃的议题集中在渠道扩展与协议兼容性：

- **Issue [#2421](https://github.com/sipeed/picoclaw/issues/2421) [Feature]: Add email as native channel**
  - **热度**：评论 5 条 | 👍 1
  - **分析**：用户强烈建议将 Email 作为原生渠道，特别是在企业、科研等依赖邮件沟通的场景。这反映了 PicoClaw 从“即时通讯助手”向“全渠道统一助手”演进的社区诉求。

- **Issue [#2674](https://github.com/sipeed/picoclaw/issues/2674) Codex OAuth: empty assistant response**
  - **热度**：评论 2 条 | 👍 3
  - **分析**：用户在使用 OpenAI Codex OAuth 后端时遇到空响应问题，涉及流式数据解析逻辑，是当前 Provider 模块中亟待解决的稳定性痛点。

- **Issue [#2782](https://github.com/sipeed/picoclaw/issues/2782) MCP client should support Streamable HTTP transport**
  - **热度**：评论 1 条
  - **分析**：用户指出 PicoClaw 的 MCP 客户端目前仅支持 SSE，无法连接仅支持 Streamable HTTP 的新一代 MCP 服务器。这是协议层面的技术债务，影响生态互通。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在消息处理流与 Provider 兼容性，部分已有修复方案：

- **严重**：
  - Issue [#2674](https://github.com/sipeed/picoclaw/issues/2674)：ChatGPT 后端流式传输导致空响应。
    - 状态：Open，暂无关联 Fix PR。
- **中等**：
  - Issue [#2839](https://github.com/sipeed/picoclaw/issues/2839)：导向链最终回复错误地编辑了占位符消息而非发送新消息。
    - 状态：Open，已有修复 PR [#2840](https://github.com/sipeed/picoclaw/pull/2840) 待合并。
  - Issue [#2745](https://github.com/sipeed/picoclaw/issues/2745)：OpenRouter 推理模型泄露思考过程。
    - 状态：Open，Stale，建议重新关注。
- **安全相关**：
  - PR [#2836](https://github.com/sipeed/picoclaw/pull/2836)：修复 PowerShell 编码绕过 IEX 注入漏洞。
    - 状态：Open，建议优先审查并合并。

## 6. 功能请求与路线图信号
结合 Issues 与 PRs，识别出以下明确的功能演进信号：

- **明确的工具权限控制**：Issue [#2837](https://github.com/sipeed/picoclaw/issues/2837) 提议在 `AGENT.md` 中支持 `allow/deny/glob` 策略，PR [#2838](https://github.com/sipeed/picoclaw/pull/2838) 已提交实现。这表明项目将加强对多智能体环境下的工具调用权限管理，提高安全性。
- **增强的异步结果处理**：PR [#2830](https://github.com/sipeed/picoclaw/pull/2830) 引入了异步结果投递策略，避免子智能体结果被错误回注给父智能体。这将优化复杂任务的解耦能力，预计在下一版本中合并。
- **Web UI 配置增强**：PR [#2770](https://github.com/sipeed/picoclaw/pull/2770) 添加了 MCP 配置界面，意味着项目致力于降低用户的配置门槛，从“纯代码配置”向“可视化配置”迁移。

## 7. 用户反馈摘要
- **痛点**：用户在使用特定 Provider（如 OpenRouter、ChatGPT Backend）时，对流式解析的稳定性非常敏感，容易遇到格式错误或内容泄露（Thinking 泄露）。
- **场景**：多智能体编排场景下的上下文管理问题凸显，用户希望通过配置文件精细控制每个智能体的能力边界（Issue #2837）。
- **迁移困扰**：Issue [#2834](https://github.com/sipeed/picoclaw/issues/2834) 显示部分用户在版本升级时缺乏明确的指引，希望能提供更清晰的源码更新教程。

## 8. 待处理积压
- **Issue [#2745](https://github.com/sipeed/picoclaw/issues/2745) [BUG] OpenRouter reasoning model leaks thinking**：该问题已标记为 Stale，但随着推理模型的普及，泄露思考过程会严重影响体验，建议维护者重新激活。
- **Issue [#2546](https://github.com/sipeed/picoclaw/issues/2546) [Feature] Support OAuth 2.1 + PKCE for MCP servers**：请求从 Dashboard 直接添加 OAuth 保护的 MCP 服务器，该功能对非技术用户极为重要，目前尚未有明确排期。
- **PR [#2758](https://github.com/sipeed/picoclaw/pull/2758) fix(telegram): media group album handling**：Telegram 相册处理修复已提交 6 天，尚未合并，建议尽快 Review 以提升端侧稳定性。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-10)

## 1. 今日速览
NanoClaw 项目今日呈现出**高频迭代与架构深化**的特征，开发活跃度显著提升。过去24小时内共有 17 个 PR 更新，其中 10 个已顺利合并，涵盖了从底层数据库架构迁移、核心模型上下文扩展到丰富技能生态的关键更新。然而，随着系统复杂度的增加，社区反馈了几个严重的回归问题，特别是 WhatsApp 适配器的附件挂载缺失和高负载下的代理行为异常，需引起维护者高度重视。整体而言，项目正处于功能扩展与稳定性磨合的关键阶段。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **10 个 PR 合并**，主要推进了以下核心能力：

*   **架构重构与稳定性**：PR #2351 将容器配置源从文件系统迁移至数据库，显著提升了配置管理的可靠性；PR #2364 完成了 `claude-code` 依赖的批量升级（2.1.116 → 2.1.128），引入了新的 CLI 特性支持。
*   **模型能力扩展**：PR #2280 修复了 1M 上下文长度的模型标签问题，确保了长上下文场景下的可靠性；PR #2233 增加了针对特定群组的模型和力度覆盖配置，提升了多租户场景的灵活性。
*   **技能生态丰富**：合并了 PR #2318（持久化语义记忆 `/add-mnemon`）和 PR #2319（AWS CLI 访问支持），显著增强了代理的工具调用与记忆能力。
*   **缺陷修复**：PR #2352 将构建超时时间延长至 15 分钟，解决了弱网环境下的构建失败问题；PR #2372 修复了 COO 简报生成的准确性问题。

## 4. 社区热点
*   **[#2369 Destinations-addendum compliance degrades past N tools](https://github.com/nanocoai/nanoclaw/issues/2369)**  
    该 Issue 反映了在加载大量 MCP 工具（>32个）时，代理行为出现退化，导致其“叙述”委托而非执行消息发送。这触及了多工具调度与提示词工程的边界问题，是当前反馈中最具技术深度的议题。
*   **[#1669 Does Credential Proxy implementation risk Anthropic account bans?](https://github.com/nanocoai/nanoclaw/issues/1669)**  
    用户对凭证代理实现是否符合 Anthropic 服务条款表示担忧，尤其是关于 OAuth 反向代理的合规性风险。这是自 4 月以来的长期关注点，今日再次活跃，显示用户对安全合规的高度敏感。

## 5. Bug 与稳定性
今日报告了多个影响使用的严重 Bug，按严重程度排列如下：

*   **严重 - 数据丢失风险**：
    *   [Issue #2370](https://github.com/nanocoai/nanoclaw/issues/2370)：WhatsApp 入站附件下载后未挂载到代理容器中，导致代理无法“看到”用户发送的文件，直接影响多模态交互功能。
    *   [Issue #2360](https://github.com/nanocoai/nanoclaw/issues/2360)：安装脚本静默删除现有的 `groups/*/CLAUDE.md` 配置文件且无备份，导致用户自定义代理人格丢失。

*   **严重 - 路由失败**：
    *   [Issue #2194](https://github.com/nanocoai/nanoclaw/issues/2194)：WhatsApp LID 到电话 JID 的映射在服务重启后丢失，导致基于 LID 的发送者消息路由失败。

*   **中等等级 - 性能与逻辑**：
    *   [Issue #2369](https://github.com/nanocoai/nanoclaw/issues/2369)：高负载工具下的代理指令遵循能力下降。

    *(注：Issue #2196 关于数据库只读崩溃的问题已于今日关闭)*

## 6. 功能请求与路线图信号
从待合并的 PR 中可以清晰看出项目下一步的路线图方向：

*   **插件化与自修改能力**：PR #2368（代理自安装/卸载插件）和 PR #2365（通过 container.json 配置插件市场）展示了项目正在构建类似操作系统的“应用商店”模式，允许代理自主扩展能力。
*   **持久化状态管理**：PR #2366 提议为每个群组增加 `SKILL_DATA_DIR` 持久化挂载，结合今日已合并的 `/add-mnemon` 技能，表明项目正致力于解决代理“无状态”带来的记忆断层问题。
*   **运营商级功能**：PR #2367 引入了七种运营商级别的管理技能，预示着 NanoClaw 正从单一代理框架向多租户管理平台演进。

## 7. 用户反馈摘要
*   **痛点**：用户对**静默覆盖配置文件**（#2360）表现出强烈不满，这是自动化脚本设计中典型的“反人类”行为；此外，WhatsApp 适配器的稳定性（路由映射、附件挂载）仍是用户投诉的重灾区。
*   **关注点**：技术型用户开始深入探讨**大规模工具集对模型注意力机制的影响**（#2369），这表明社区正在将 NanoClaw 应用于复杂的生产环境，而非仅限于简单的 Demo。
*   **建议**：针对 OAuth 代理的合规性讨论（#1669）显示企业级用户对账户安全的高敏感度，建议官方文档明确说明实现原理与合规边界。

## 8. 待处理积压
*   **[Issue #1669](https://github.com/nanocoai/nanoclaw/issues/1669)**：关于凭证代理封号风险的讨论已持续一个月，虽有相关 PR (#2363) 尝试修复令牌刷新，但官方仍未对合规性问题给出明确答复，建议维护者尽快澄清技术实现细节以消除社区疑虑。
*   **[Issue #2194](https://github.com/nanocoai/nanoclaw/issues/2194)**：WhatsApp LID 映射持久化问题自 5 月 2 日开启至今未解决，影响核心消息路由功能，需提升优先级。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-10)

## 1. 今日速览
NullClaw 项目今日保持稳健的开发节奏，成功发布了最新的 Nightly 构建版本。项目重点集中在提升部署灵活性与 CI 基础设施建设上，合并了包括 HTTP 端点白名单配置及 Nix 构建工作流在内的两项重要 PR。然而，社区报告了一项关键的回归 Bug，涉及 2026.5.x 版本在网络解析层面的兼容性问题，需引起维护者高度重视。整体来看，项目功能迭代向前推进，但稳定性监控面临新挑战。

## 2. 版本发布
- **版本号**: `nightly-20260509-5d533da`
- **发布时间**: 2026-05-09 03:34:22 UTC
- **更新说明**: 自动化 Nightly 构建，包含截至 `5d533da` 提交的最新代码。
- **注意**: 该版本可能包含了导致 Issue #902 报告的 DNS/HTTP 客户端重构代码，建议用户在升级前关注相关 Bug 进展。
- **链接**: [GitHub Release](https://github.com/nullclaw/nullclaw/releases/tag/nightly-20260509-5d533da)

## 3. 项目进展
今日共有 2 个 PR 成功关闭/合并，1 个 PR 处于待合并状态，项目在功能配置与构建系统上取得实质性进展：

- **[CLOSED] feat: add config to whitelist insecure http endpoints** ([PR #903](https://github.com/nullclaw/nullclaw/pull/903))
  - **进展**: 该功能已合入主分支。
  - **意义**: 新增 `http_request.allowed_insecure_domains` 配置项，解决了 Docker-compose 容器栈内 Agent 间通信的内网直连需求，增强了本地开发和私有化部署的灵活性。

- **[CLOSED] ci: add Nix flake build workflow** ([PR #796](https://github.com/nullclaw/nullclaw/pull/796))
  - **进展**: CI 工作流已添加。
  - **意义**: 引入 Nix flake 构建与冒烟测试，完善了对 NixOS 生态的支持，提升了项目在不同系统环境下的构建一致性。

- **[OPEN] feat(memory): Add NullClaw Data Governance Layer** ([PR #885](https://github.com/nullclaw/nullclaw/pull/885))
  - **状态**: 持续更新中。
  - **意义**: 由 Hackathon 团队贡献的数据治理层功能，涉及数据安全与合规，属于重大功能更新，目前仍在审核阶段。

## 4. 社区热点
今日社区关注度最高的动态为回归问题报告：

- **[Bug] 2026.5.x: HostResolutionFailed when using siliconflow provider** ([Issue #902](https://github.com/nullclaw/nullclaw/issues/902))
  - **分析**: 该 Issue 由用户 @agiminds 发起，指出从 2026.4.9 升级至 2026.5.x 后 `siliconflow` provider 不可用。这直接反映了近期 HTTP/DNS 客户端重构对特定 Provider 兼容性的影响。由于涉及核心网络层变动，预计将引发社区对网络配置及 Provider 适配性的讨论。

## 5. Bug 与稳定性
今日报告 1 起严重级别的 Bug，涉及核心网络功能：

- **[严重] HostResolutionFailed 导致 Provider 失效** ([Issue #902](https://github.com/nullclaw/nullclaw/issues/902))
  - **现象**: 使用 `siliconflow` provider 时报错 `Error: error.HostResolutionFailed`。
  - **回归分析**: 开发者在 2026.5.x 中重构了内置 DNS 客户端，导致解析失败。
  - **影响范围**: 所有使用 `siliconflow` provider 的用户，且可能波及其他使用类似网络配置的 Provider。
  - **状态**: 尚未有关联的 Fix PR 提交，属于待修复状态。

## 6. 功能请求与路线图信号
- **数据治理**: PR #885 显示项目正在向企业级特性靠拢，团队正在集成 "NullClaw Data Governance Layer"，这表明项目路线图中数据隐私和治理将是下一阶段的重点。
- **内网部署优化**: PR #903 的合并表明项目对私有化部署场景的支持正在加强，未来可能会看到更多关于内网服务发现与安全通信的配置选项。

## 7. 用户反馈摘要
- **升级痛点**: 用户反馈明确指出 "Exact same config, token, network works perfectly in 2026.4.9"，这提示开发团队在进行底层网络库重构时，可能未充分考虑到存量配置的兼容性，导致破坏性变更。
- **场景多样化**: PR #903 的提交反映了部分用户正在使用 NullClaw 进行复杂的容器化编排，对非安全 HTTP 端点的连接有刚需。

## 8. 待处理积压
- **PR #885 (Data Governance Layer)**: 该 Hackathon 项目体量较大，涉及核心架构调整，目前处于 Open 状态，建议维护者尽快进行 Code Review 以推动合并。
- **Issue #902 (DNS Regression)**: 作为阻塞性问题，该 Bug 严重影响了特定版本的用户升级体验，建议优先排查 `5d533da` 提交中的 DNS 客户端重构逻辑。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-10)

## 1. 今日速览
IronClaw 项目今日处于**极高活跃度**状态，核心开发重心完全转向代号为 **"Reborn"** 的底层架构重构。过去 24 小时内共有 35 条 PR 更新（其中 22 条待合并），显示出核心团队正在进行大规模的代码集成与功能迭代。虽然没有正式版本发布，但已出现准备发布 `v0.28.0` 的 PR，预示着重大版本更新即将到来。项目今日修复了关键的多租户安全漏洞，并大力推进了持久化存储、调度器和能力目录等核心基础设施的落地。

## 2. 版本发布
无正式新版本发布。
**注意**：PR #3388 正在准备发布 `v0.28.0` 版本（当前为 `v0.24.0`），包含大量更新，请关注后续合并动态。

## 3. 项目进展
今日共有 **13 条 PR 合并/关闭**，主要集中在 "Reborn" 架构的基础设施建设与安全性修复：

*   **架构重构**:
    *   **PR #3426**: 实现了 Reborn 可见能力目录，增强了工具调用的权限与可见性过滤。
    *   **PR #3414**: 新增持久化加密密钥存储，支持 libSQL/Postgres，提升了密钥管理的安全性。
    *   **PR #3427**: 引入持久化资源调节器，支持事务性存储抽象，增强了资源配额管理能力。
    *   **PR #3099**: 合并了 Reborn 传输适配器契约，为新的传输层抽象奠定了基础。
    *   **PR #3398**: 完成了文本循环主机端口的组合，推进了 Loop 执行模型的实现。

*   **安全与修复**:
    *   **PR #3390**: **关键修复**。修复了多租户环境下的 SSE/WS 状态事件泄漏漏洞，防止跨租户数据干扰。
    *   **PR #3437 & #3430**: 修复了 E2E 测试中的认证竞态条件和覆盖率问题，提升了 CI/CD 流程的稳定性。

## 4. 社区热点
*   **Issue #2987 [EPIC] Track Reborn architecture landing**: 今日评论数高达 44 条，是目前最活跃的 Issue。该 Issue 追踪 "Reborn" 架构的整体落地计划，社区与开发者正在密集讨论如何通过分组 PR 策略平滑替换旧架构，避免巨大堆叠 PR 带来的审核困难。
*   **Issue #84 feat: Agent system advanced features**: 这是一个长期的功能请求，涉及多智能体路由、全局会话等高级特性。近期再次活跃，表明用户对多智能体协作能力的强烈需求。

## 5. Bug 与稳定性
今日报告了若干功能性与平台兼容性问题，部分已确认：

1.  **[高] DeepSeek API 兼容性问题** - **Issue #3436**
    *   描述：开启思考模式后，DeepSeek API 返回 400 错误，提示 `reasoning_content` 必须回传。
    *   状态：OPEN，暂无修复 PR。

2.  **[高] 平台安装脚本错误** - **Issue #2949**
    *   描述：官方安装脚本在 `x86_64-unknown-linux-gnu` 平台报错 "there isn't a download for your platform"。
    *   状态：OPEN，影响用户部署。

3.  **[中] 任务结果投递错误会话** - **Issue #3415**
    *   描述：Mission 功能将结果推送到了错误的会话中，导致数据混乱。

4.  **[中] 国际化键值未渲染** - **Issue #3425**
    *   描述：生产环境中间歇性出现 UI 显示原始 i18n 键（如 `auth.title`）而非翻译文本。

## 6. 功能请求与路线图信号
*   **Reborn 架构组件化**: 今日新增了大量以 `[Reborn]` 开头的 Issues（如 #3435, #3434, #3431 等），显示出项目正在将庞大的架构拆解为细粒度的生产级组件（如 `TurnRunWakeNotifier`, `InstructionBundleBuilder` 等）。
*   **DeepSeek 思考模式支持**: Issue #3436 反映了对 DeepSeek 推理模式的兼容需求，随着推理模型（如 DeepSeek-V4）的普及，支持 `reasoning_content` 流式回传将成为必要功能。

## 7. 用户反馈摘要
*   **部署痛点**: 用户反馈在 Linux 平台使用官方脚本安装失败，指出现有发布包与文档/脚本不匹配。
*   **模型提供商兼容性**: 用户在使用 DeepSeek 作为提供商时遇到了特定的 API 格式要求错误，表明项目对不同第三方 LLM 提供商的适配仍有提升空间。
*   **UI 稳定性**: 间歇性的 i18n 键显示问题影响了用户体验，暗示前端状态管理或资源加载存在竞态条件。

## 8. 待处理积压
*   **Issue #2949 (安装失败)**: 已提出数日，尚未有官方回复或修复 PR，建议优先处理以降低新用户准入门槛。
*   **Issue #3436 (DeepSeek 报错)**: 刚刚提出，涉及特定模型的思考模式，影响用户使用高级推理功能，建议尽快确认修复方案。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-10)

## 1. 今日速览
LobsterAI 项目今日呈现**高活跃度**状态，核心亮点是发布了 **2026.5.9 新版本**，标志着项目在多智能体协作与 artifacts 功能支持上迈出了重要一步。过去 24 小时内，项目成功合并了 10 个 Pull Requests，主要聚焦于 Artifacts 预览优化、IM 交互修复及 UI 细节打磨。同时，社区侧解决了一个关于 MCP 打包后失效的关键问题，整体项目健康度良好，迭代速度稳定。

## 2. 版本发布
**[Release 2026.5.9](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.9)**
本次更新属于功能性版本，带来了三项重要特性：
*   **独立工作目录**：每个 Agent 现在支持独立的工作目录，增强了多智能体环境下的文件隔离与安全性。
*   **Artifacts 功能**：引入了新的 Artifacts 功能模块，支持更丰富的人机交互内容展示。
*   **性能优化**：会话列表与消息历史实现了分页加载，解决了大量数据下的前端性能瓶颈。

## 3. 项目进展
今日共有 **10 个 PR 成功合并**，主要集中在 `release/2026.05.08` 分支的整合与功能完善：
*   **核心功能推进**：[PR #1938](https://github.com/netease-youdao/LobsterAI/pull/1938) 合并了 2026.05.08 的发布分支，带来了 Artifacts 预览（支持 PDF/Office）、协作分页及定时任务功能，显著提升了产品成熟度。
*   **Artifacts 增强**：[PR #1933](https://github.com/netease-youdao/LobsterAI/pull/1933) 修复了 HTML 预览 Bug，增加了文件列表的搜索/排序/去重功能，并支持了 Markdown 代码块的深色模式搜索。
*   **IM 与协作修复**：[PR #1936](https://github.com/netease-youdao/LobsterAI/pull/1936) 修复了 IM 频道聊天记录时间显示错误的问题，优化了展示方式。
*   **依赖更新**：[PR #1930](https://github.com/netease-youdao/LobsterAI/pull/1930) 升级了微信 SDK 版本至 2.4.3。

目前仍有 4 个 PR 处于待合并状态，其中包括批量删除任务的修复 [PR #1939](https://github.com/netease-youdao/LobsterAI/pull/1939) 及 Dependabot 提出的依赖升级（React 19, Vite 8 等）。

## 4. 社区热点
今日最受关注的事件是 **[Issue #820](https://github.com/netease-youdao/LobsterAI/issues/820) 的关闭**。
*   **内容**：该 Issue 报告了 MCP（Model Context Protocol）在开发阶段可用，但在打包后失效的问题。
*   **分析**：该问题自 3 月底被提出，终于在今日伴随新版本的发布得到解决。这反映了打包流程中的环境配置差异是用户痛点，维护者已在新版本中修复了路径或配置加载逻辑。

此外，[PR #857](https://github.com/netease-youdao/LobsterAI/pull/857)（关于 MCP HTTP streaming 支持）今日被关闭，标记为 `[stale]`。这表明该功能需求虽然存在，但因长期未更新或不符合当前架构被移出开发队列。

## 5. Bug 与稳定性
今日修复了多个影响用户体验的 Bug，无新增严重 Crash 报告：
*   **[已修复] MCP 打包后不可用**：[Issue #820](https://github.com/netease-youdao/LobsterAI/issues/820) 确认关闭，解决了生产环境 MCP 工具加载为 0 的严重问题。
*   **[已修复] IM 聊天时间异常**：[PR #1936](https://github.com/netease-youdao/LobsterAI/pull/1936) 修正了 IM 频道历史记录的时间显示错误。
*   **[已修复] Artifacts 预览问题**：[PR #1933](https://github.com/netease-youdao/LobsterAI/pull/1933) 解决了 HTML 预览的特定 Bug。
*   **[待处理] 批量删除失效**：[PR #1939](https://github.com/netease-youdao/LobsterAI/pull/1939) 已提交修复代码，目前处于 Open 状态，等待合并。

## 6. 功能请求与路线图信号
*   **Artifacts 生态完善**：从连续合并的 PR ([#1931](https://github.com/netease-youdao/LobsterAI/pull/1931), [#1933](https://github.com/netease-youdao/LobsterAI/pull/1933)) 来看，项目正在构建类似 Claude Artifacts 的能力，预计下一阶段将继续完善文件预览与交互体验。
*   **定时任务**：[PR #1938](https://github.com/netease-youdao/LobsterAI/pull/1938) 中提及了 Cron-based scheduled tasks，暗示 LobsterAI 正向“自动化智能体”方向演进，支持后台任务调度。
*   **前端框架升级信号**：Dependabot 提出的 [PR #1764](https://github.com/netease-youdao/LobsterAI/pull/1764) (React 19) 和 [PR #1766](https://github.com/netease-youdao/LobsterAI/pull/1766) (Vite 8) 目前仍处于 Open 状态，表明项目可能在近期进行大规模前端底层架构升级。

## 7. 用户反馈摘要
*   **痛点解决**：Issue #820 的反馈表明，用户在**开发环境与生产环境的差异**上遇到阻碍，特别是插件（MCP）的加载机制。该问题的解决将提升用户对打包发布的信心。
*   **需求方向**：用户对 MCP 的支持有更高期待（如 HTTP Streaming），但相关 PR #857 因陈旧被关闭，建议社区关注是否有替代方案或重新发起讨论。

## 8. 待处理积压
*   **依赖升级滞后**：[Dependabot 系列更新](https://github.com/netease-youdao/LobsterAI/pulls?q=is%3Aopen+is%3Apr+author%3Aapp%2Fdependabot)（特别是 React 19 和 Vite 8 的大版本跨越）已开启近 20 天未合并。这可能会带来潜在的安全风险或技术债务，建议维护者尽快评审并处理潜在的 Breaking Changes。
*   **功能修复待合并**：[PR #1939](https://github.com/netease-youdao/LobsterAI/pull/1939)（批量删除修复）已于昨日提交，需尽快合并以解决 Renderer 模块的相关问题。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-10)

## 1. 今日速览
Moltis 项目今日保持稳健的开发迭代节奏，虽然社区 Issue 讨论区暂无新增话题，但代码提交端表现活跃。共有 3 个 Pull Requests 发生更新，其中 2 个已顺利合并，主要聚焦于 Web 端聊天界面的交互重构与国际化优化。目前仍有 1 个关于文档站点架构升级的重要 PR 处于待合并状态。整体来看，项目正处于功能体验打磨与基础设施现代化的并行推进阶段，项目健康度良好。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日项目取得实质性进展，主要集中在前端体验优化与国际化完善：

*   **Web 聊天交互重构 (已合并):** PR #985 已关闭/合并。此次更新对 Web 端聊天输入框进行了彻底重构，引入了居中圆角设计风格的 Composer，并将模型选择、推理状态、附件、语音及发送按钮整合至底部控制栏。这一改进解决了 Token/上下文状态显示截断的问题，显著提升了用户在复杂对话场景下的交互体验。
    *   链接: [moltis-org/moltis PR #985](https://github.com/moltis-org/moltis/pull/985)
*   **国际化语言优化 (已合并):** PR #986 已关闭/合并。贡献者 @PeterDaveHello 对繁体中文进行了全面修订，统一了 "AI 助理" 等核心术语的翻译标准，提升了语言表达的准确性与一致性。
    *   链接: [moltis-org/moltis PR #986](https://github.com/moltis-org/moltis/pull/986)

## 4. 社区热点
今日社区互动主要集中在代码贡献层面，Issue 区暂无新增热议话题。

*   **文档架构升级提案 (关注度高):** PR #987 提议将现有的 mdBook 文档部署替换为 Astro 静态站点。该方案计划保留现有 Markdown 源文件的同时，引入侧边导航、TOC 目录、主题切换及响应式设计。虽然目前评论数为 0，但该变更涉及项目文档的基础设施迁移，属于重大架构调整，值得开发者重点关注。
    *   链接: [moltis-org/moltis PR #987](https://github.com/moltis-org/moltis/pull/987)

## 5. Bug 与稳定性
过去 24 小时内未收到新的 Bug 报告或崩溃反馈。今日合并的 PR #985 虽涉及 UI 重构，但主要针对交互逻辑优化，目前未引发相关问题反馈，系统稳定性维持良好。

## 6. 功能请求与路线图信号
虽然今日无新增功能请求 Issue，但从合并的 PR 动向中可捕捉到明确的路线图信号：

*   **多模态交互增强:** PR #985 中新增的显式附件选择器及语音控制入口，预示着项目正加速向支持多模态输入（文件、语音）的 AI 助理形态演进。
*   **文档体验现代化:** PR #987 的推进表明项目方有意通过 Astro 框架提升文档的可读性与搜索便捷性，反映出对开发者体验（DX）的重视。

## 7. 用户反馈摘要
由于今日无新增 Issue 或评论，暂无法提取直接的用户痛点反馈。但从 PR #986 的合并可以看出，用户群体（特别是繁体中文用户）对 UI 语言的标准化有较高要求，社区贡献者正积极修正翻译细节以满足本地化需求。

## 8. 待处理积压
*   **文档站点迁移待定:** PR #987 目前仍处于 Open 状态，作为一项基础设施变更，建议维护者尽快进行最终审核与合并，以便后续文档的维护与发布。
    *   链接: [moltis-org/moltis PR #987](https://github.com/moltis-org/moltis/pull/987)

---
*分析师注：今日数据反映出项目核心团队正专注于内部代码质量与架构优化，社区活跃度在代码贡献端表现平稳。建议关注 PR #987 的合并进度，这将是下一阶段文档体系建设的基石。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-05-10)

## 1. 今日速览
项目今日呈现出极高的活跃度与迭代速度，正式发布了 **v1.1.6** 版本，标志着项目在稳定性和系统诊断能力上迈出新一步。过去24小时内，项目处理了 33 条 Issue（关闭 15 条）和 26 条 PR（合并/关闭 18 条），社区互动频繁。重点关注领域包括 v1.1.6 版本引入的 Windows 环境诊断功能、针对 MCP（Model Context Protocol）生命周期的内存泄漏修复，以及多模型提供商（OpenCode、Volcano Engine、DashScope）的兼容性问题排查。

## 2. 版本发布
**v1.1.6** 已正式发布，主要更新如下：
- **新增功能**：
  - **Windows 诊断增强**：`qwenpaw doctor` 命令现在支持检测 Windows 特定环境问题，包括长路径支持状态、PowerShell 语言模式及工作目录路径长度 ([#4032](https://github.com/agentscope-ai/QwenPaw/pull/4032))。
  - **Agent Status API**：引入了 Agent 状态 API 接口（具体详情在 Release Note 中）。
- **优化与修复**：
  - 修复了命令调度中 channel 变量命名问题。
  - 优化了控制台非方向键输入时的聊天历史查找性能。

## 3. 项目进展
今日共有 18 个 PR 被合并或关闭，显著提升了系统稳定性与用户体验：
- **关键稳定性修复**：PR [#4152](https://github.com/agentscope-ai/QwenPaw/pull/4152) 修复了 MCP 客户端的生命周期任务泄漏问题，解决了 Issue [#4105](https://github.com/agentscope-ai/QwenPaw/issues/4105) 中报告的守护进程累积僵尸进程导致内存泄漏（高达 18GB）的严重问题。
- **配置持久化修复**：PR [#4157](https://github.com/agentscope-ai/QwenPaw/pull/4157) 解决了多智能体环境下运行配置无法正确保存的问题，关闭了 Issue [#4145](https://github.com/agentscope-ai/QwenPaw/issues/4145)。
- **前端体验优化**：PR [#4153](https://github.com/agentscope-ai/QwenPaw/pull/4153) 重构了二维码认证组件，修复了 Drawer 关闭时的轮询泄漏；PR [#4148](https://github.com/agentscope-ai/QwenPaw/pull/4148) 优化了关闭抽屉后立即停止轮询的状态管理。
- **功能增强**：PR [#4112](https://github.com/agentscope-ai/QwenPaw/pull/4112) 为企业微信（WeCom）渠道增加了交互式审批卡片功能，支持在聊天中直接批准/拒绝工具调用。

## 4. 社区热点
今日社区讨论主要集中在版本升级后的兼容性与性能问题：
- **[OPEN] Issue [#4133](https://github.com/agentscope-ai/QwenPaw/issues/4133)**：用户反馈升级到 v1.1.5.post2 后，OpenCode 模型提供商无法正常使用，报错 `MODEL_EXECUTION_FAILED`。该 Issue 评论数达 10 条，是目前最活跃的话题，用户迫切需要兼容性修复。
- **[OPEN] Issue [#4165](https://github.com/agentscope-ai/QwenPaw/issues/4165)**：关于 v1.1.6 版本中内置的火山引擎模型配置失败的问题，引发了 8 条评论讨论，涉及 API 连接测试失败的排查。
- **[OPEN] Issue [#4108](https://github.com/agentscope-ai/QwenPaw/issues/4108)**：用户抱怨新版本 WebUI 在生成回复时导致系统严重卡顿（Win11, 32G内存），体验退化明显，引发了对前端性能的讨论。

## 5. Bug 与稳定性
今日报告的 Bug 集中在提供商配置、内存管理和会话逻辑：
- **严重**：
  - **MCP 内存泄漏** ([#4105](https://github.com/agentscope-ai/QwenPaw/issues/4105))：长期运行导致大量孤儿进程占用内存。**状态**：已通过 PR [#4152](https://github.com/agentscope-ai/QwenPaw/pull/4152) 修复。
  - **提供商配置失效** ([#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159))：DashScope 配置正确但运行时 API Key 为空导致 401 错误。
- **中等**：
  - **WebUI 性能卡顿** ([#4108](https://github.com/agentscope-ai/QwenPaw/issues/4108))：生成内容时系统资源占用过高，影响多线程工作。
  - **定时任务上下文错误** ([#4162](https://github.com/agentscope-ai/QwenPaw/issues/4162))：删除会话后，关联的定时任务仍使用旧上下文，需删除定时任务重建。
  - **配置持久化失败** ([#4145](https://github.com/agentscope-ai/QwenPaw/issues/4145))：多智能体配置互相覆盖。**状态**：已通过 PR [#4157](https://github.com/agentscope-ai/QwenPaw/pull/4157) 修复。

## 6. 功能请求与路线图信号
- **长期记忆支持**：Issue [#2307](https://github.com/agentscope-ai/QwenPaw/issues/2307) 请求支持 ADBPG 长期记忆管理器。对应的 PR [#2308](https://github.com/agentscope-ai/QwenPaw/pull/2308) 已提交，目前状态为 Open，有望成为下一阶段的重要功能扩展。
- **时间感知能力**：Issue [#4166](https://github.com/agentscope-ai/QwenPaw/issues/4166) 提议在 `pre_reply` 中注入时间戳，帮助 Agent 感知真实时间。该 Issue 已被关闭，表明可能已被采纳或已在开发计划中。
- **桌面端重构**：Issue [#4158](https://github.com/agentscope-ai/QwenPaw/issues/4158) 抱怨客户端启动慢，呼吁重构打包方式。结合 PR [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)（Tauri 2.x 桌面应用支持）可以看出，社区正在推动更轻量级的桌面端实现。
- **多智能体路由**：Issue [#4160](https://github.com/agentscope-ai/QwenPaw/issues/4160) 提出了单端点多智能体路由的需求，这对于复杂 Agent 系统架构是一个重要的功能信号。

## 7. 用户反馈摘要
- **痛点**：
  - **版本升级风险**：多位用户反馈升级后出现模型提供商不可用的情况（OpenCode, DashScope），升级体验缺乏平滑性。
  - **资源占用**：WebUI 的资源消耗过高，甚至导致系统卡顿，严重影响日常使用。
  - **配置同步**：跨环境同步 Skill 文件夹后前端不刷新（Issue [#4079](https://github.com/agentscope-ai/QwenPaw/issues/4079)），用户对架构的实时性表示困惑。
- **认可**：部分用户对 `qwenpaw doctor` 新增的 Windows 诊断功能表示认可，认为这有助于解决环境配置难题。
- **场景**：用户正尝试将 QwenPaw 应用于更复杂的自动化场景（如定时任务、多智能体协作），但也因此暴露了会话管理和上下文隔离的 Bug。

## 8. 待处理积压
- **PR [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) (Tauri Desktop)**：作为解决桌面端启动慢和资源占用的关键 PR，目前仍处于 Open 状态，建议维护者优先评审。
- **PR [#2308](https://github.com/agentscope-ai/QwenPaw/pull/2308) (ADBPG Memory)**：长期记忆功能是 Agent 进化的关键，该 PR 已挂起较长时间，需要社区投入精力 review。
- **Issue [#3840](https://github.com/agentscope-ai/QwenPaw/issues/3840) (XiaoYi Channel)**：华为小艺渠道的协议连接问题仍未解决，长期未响应，影响了部分渠道的用户体验。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-05-10)

## 1. 今日速览
ZeptoClaw 项目今日整体活跃度处于低位，处于平稳维护状态。过去 24 小时内无新增 Issues、无新版本发布，亦无合并完成的代码变更。唯一的动态来自一个待合并的功能 PR，主要针对 AI 智能体的工具调用精准度进行优化。这表明项目当前的重心在于细化现有功能逻辑，而非大规模的功能扩展。整体项目健康度稳定，代码仓库较为安静。

## 2. 版本发布
*无*

## 3. 项目进展
今日无已合并或已关闭的 Pull Requests，项目主干代码未发生变更。

目前有 **1 个活跃 PR** 正在等待审核与合并，具体进展如下：
*   **PR #571 [OPEN]**: 优化 `longterm_memory` 工具描述，引入触发短语机制。
    *   **详情**：作者 @qhkm 提交了一项功能增强，重写了 `longterm_memory` 工具的 `description()` 方法。该更改引入了明确的“Use when”（何时使用）和“Do NOT use when”（何时不使用）触发短语，旨在对齐 Hermes Agent 的 `memory_tool.py` 模式。同时，作者新增了文档测试（doc-test）以确保未来的编辑不会破坏这些触发逻辑。
    *   **意义**：该 PR 旨在解决大模型在工具调用时的“幻觉”或误判问题，通过更精确的提示词引导模型正确决策何时检索长期记忆。这是提升 AI 智能体稳定性和准确性的关键微观优化。
    *   **链接**：[qhkm/zeptoclaw PR #571](https://github.com/qhkm/zeptoclaw/pull/571)

## 4. 社区热点
今日项目无新增评论或广泛讨论的话题，社区视线主要集中在待处理的 PR 上。

*   **焦点 PR**: **#571 [OPEN] feat(tools): trigger-phrase nudges in longterm_memory description**
    *   **分析**：虽然该 PR 暂无评论互动，但从其提交内容可以看出维护者对 **Prompt Engineering（提示工程）** 的重视。在 AI 智能体开发中，工具描述的精确性直接决定了 LLM 的调用成功率。此 PR 的出现信号表明项目正在从“功能可用”向“行为精准”阶段演进，试图减少智能体在长期记忆调用上的无效操作。

## 5. Bug 与稳定性
*   今日无新报告的 Bug、崩溃或回归问题。项目稳定性维持现状。

## 6. 功能请求与路线图信号
*   **信号来源**：PR #571 的提交内容。
*   **分析**：虽然没有直接的 Issue 提出功能请求，但代码变更暗示了项目路线图的微调方向：**规范化工具调用**。引入“Trigger Phrases”机制并编写测试用例保护，意味着未来的版本中，所有工具可能会逐步采用标准化的描述格式，以降低模型的混淆率。这可能是下一阶段版本更新的核心优化点之一。

## 7. 用户反馈摘要
*   过去 24 小时内无用户反馈（无新 Issues 或评论），暂无法提炼用户痛点或满意度变化。

## 8. 待处理积压
*   **PR #571** 已开启 7 天（创建于 2026-05-03，更新于 2026-05-09），目前仍处于 **OPEN** 状态。
    *   **建议**：该 PR 包含核心工具的逻辑优化及测试保护，建议维护者尽快进行 Code Review 并合并，以避免长期记忆功能在复杂场景下的调用偏差。长时间挂起的 PR 可能会导致后续功能分支合并冲突的风险增加。
    *   **链接**：[qhkm/zeptoclaw PR #571](https://github.com/qhkm/zeptoclaw/pull/571)

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*