# OpenClaw 生态日报 2026-06-04

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-06-04 04:18 UTC

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

# OpenClaw 项目动态日报 (2026-06-04)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，单日处理了超过 500 条 Issue 更新和 500 条 PR 更新，其中新开/活跃 Issue 384 条，合并/关闭 PR 94 条，显示出项目迭代速度极快。项目在今日连续发布了 3 个版本（v2026.6.1, v2026.6.1-beta.3, v2026.6.2-beta.1），重点改进了代理运行时的恢复能力和插件安装的安全性策略。社区讨论焦点集中在核心架构（SQLite 迁移）和稳定性问题上，尤其是会话状态管理和特定平台的回归 Bug。总体而言，项目处于快速演进期，但在会话持久化和多平台适配上仍面临挑战。

## 2. 版本发布
今日项目连续发布了 3 个版本，显示了高频的交付节奏：

*   **v2026.6.2-beta.1**
    *   **核心更新**：引入了全新的 **Operator Install Policy** 用于插件和技能安装，取代了旧有的危险代码扫描器路径。这为通过 CLI、ClawHub、Marketplace 等多种途径安装包提供了更清晰的诊断和故障排除界面，显著提升了安全性。
    *   **相关 PR**: #89516 (由 @joshavant 贡献)。
*   **v2026.6.1** & **v2026.6.1-beta.3**
    *   **核心更新**：大幅优化了代理和 CLI 运行时的**弹性恢复能力**。针对中断的工具调用、过期会话绑定、压缩交接和媒体交付重试等场景进行了修复。
    *   **平台稳定性**：提升了 Telegram, WhatsApp, iMessage, Slack 等多渠道消息交付的稳定性。

## 3. 项目进展
今日共有 94 个 PR 被合并或关闭，大量新的修复 PR 正在等待审核，重点推进了以下领域：

*   **架构重构**：PR #88504 提出了多槽内存角色架构，旨在解决内存插件互相冲突的问题，这是一个大型的架构变更。
*   **关键修复**：
    *   PR #89041 修复了 Discord WebSocket 连接因 `ws 8.21.0` 限制而断开的问题，防止网关连接被错误关闭。
    *   PR #87873 (已合并) 修复了源托管模型的环境变量标记信任问题，改善了密钥管理体验。
*   **安全与策略**：PR #90147 为节点配对请求增加了速率限制，防止潜在的滥用；PR #90145 保护了全局代理配置默认值不被非法修改。

## 4. 社区热点
今日讨论最活跃的议题反映了用户对核心架构和稳定性的高度关注：

*   **[#88838](https://github.com/openclaw/openclaw/issues/88838) [17 评论] 核心会话 SQLite 迁移方案**：
    维护者 @jalehman 提议通过“抽象分支” seams 将核心会话/转录运行状态迁移至 SQLite。社区正在讨论如何避免一次性大规模重写带来的风险，这标志着项目底层存储架构的重大调整。
*   **[#65161](https://github.com/openclaw/openclaw/issues/65161) [14 评论] 心跳隔离模式失效问题**：
    长期存在的问题，用户报告心跳调度在隔离模式下停滞，且状态标记错误，导致系统误判。这反映了分布式/异步任务调度的复杂性。
*   **[#88312](https://github.com/openclaw/openclaw/issues/88312) [12 评论] Codex App-Server 回归 Bug**：
    用户报告在特定版本中，Codex 轮次确认经常性中断。这是一个高优先级的回归问题，直接影响了付费用户的核心体验。

## 5. Bug 与稳定性
今日报告了多个严重的稳定性问题，部分已确认有修复 PR：

*   **严重**:
    *   [OPEN] **Windows 客户端 UI 回归** ([#67035](https://github.com/openclaw/openclaw/issues/67035))：用户输入被吞没，流式回复不可见，严重影响 Windows 用户体验。
    *   [OPEN] **Mattermost 集成失效** ([#68113](https://github.com/openclaw/openclaw/issues/68113))：斜杠命令返回 503 错误，导致无法初始化。
    *   [OPEN] **Codex 回归** ([#88312](https://github.com/openclaw/openclaw/issues/88312))：多工具代理轮次中断。目前尚未见明确的修复 PR 合并至主分支。
*   **中等**:
    *   [FIX PR] **嵌入式会话消息丢失** ([#89039](https://github.com/openclaw/openclaw/pull/89039))：PR 正在尝试修复 OpenAI SDK 重试导致的会话锁释放问题。
    *   [OPEN] **会话上下文膨胀** ([#67419](https://github.com/openclaw/openclaw/issues/67419))：引导文件每轮注入导致 Token 浪费 20-30%。

## 6. 功能请求与路线图信号
*   **安全接口标准化** ([#72741](https://github.com/openclaw/openclaw/issues/72741))：建议增加外部安全/护栏检查的标准接口，以便集成第三方系统。结合今日 v2026.6.2-beta.1 对安装策略的更新，安全架构正在逐步完善。
*   **远程重排序端点支持** ([#64438](https://github.com/openclaw/openclaw/issues/64438))：请求支持外部 Reranker API，符合当前 RAG 架构的主流需求。
*   **多重索引嵌入内存** ([#63990](https://github.com/openclaw/openclaw/issues/63990))：提议支持多索引嵌入以提高生产可靠性，这与 PR #88504 的内存架构重构方向一致。

## 7. 用户反馈摘要
*   **痛点**：用户对**会话状态管理**（Session State）极度敏感，尤其是 "Stuck Session"（卡死会话）、消息丢失和上下文膨胀问题。许多 Bug 报告都集中在会话无法从错误状态中自动恢复。
*   **平台差异**：Windows 和 Mattermost 用户近期遇到了特定平台的破坏性更新，体验受损。
*   **开发体验**：插件开发者对于 `doctor` 命令和配置诊断的准确性要求很高（如 PR #90153, #90154 均在修复诊断相关的崩溃），说明 OpenClaw 作为一个平台，其可观测性对用户至关重要。

## 8. 待处理积压
以下重要议题长期未得到解决，需维护者关注：

*   **安全问题**：[#65624](https://github.com/openclaw/openclaw/issues/65624) - Mattermost 斜杠命令默认使用明文回调 URL 暴露令牌，已被标记为 High Severity，但仍需持续跟进修复进度。
*   **架构债务**：[#63216](https://github.com/openclaw/openclaw/issues/63216) - 会话上下文无限重置循环，导致 Agent 无法工作，该问题自 4 月初以来一直困扰部分用户。
*   **僵尸进程**：[#68691](https://github.com/openclaw/openclaw/issues/68691) - 沙箱模式下僵尸进程堆积直至 PID 耗尽，属于底层资源泄露问题。

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告 (2026-06-04)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从单体对话向多智能体协作、从通用功能向企业级安全合规演进的关键转型期**。头部项目（如 OpenClaw、IronClaw）保持极高迭代速度，核心焦点集中于解决**上下文管理、记忆持久化、工具调用稳定性**等架构债务；中腰部项目则在**安全沙箱、多模态交互、特定平台集成**等垂直领域寻求差异化突破。整体生态呈现出“功能爆发伴随阵痛”的特征，模型上下文协议（MCP）已逐步成为连接工具生态的事实标准，但跨平台兼容性和升级稳定性仍是普遍痛点。

## 2. 各项目活跃度对比

| 项目名称 | Issues (新增/活跃) | PRs (更新/合并) | 版本发布 | 健康度评估 | 核心状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 384+ | 500+ / 94 | 3 个 | ⚠️ 高压 | 核心架构重构，修复频繁，社区规模最大。 |
| **IronClaw** | 26 | 50 / 25 | v0.29.1 | 🟢 活跃 | Reborn 架构落地，Slack 集成攻坚。 |
| **CoPaw** | 44 | 45 / 22 | 无 | 🟢 活跃 | 吞吐量高，重点修复记忆与上下文压缩问题。 |
| **Hermes Agent** | 45 | 42 / 8 | 无 | 🔴 积压 | PR 积压严重，Windows/Docker 严重 Bug 待解。 |
| **Zeroclaw** | 25 | 50 / 4 | 无 | 🟡 开发中 | v0.9.0 前夕，功能开发活跃但合并率低。 |
| **LobsterAI** | - | 16 / 14 | v2026.6.3 | 🟢 高效 | 协作模块增强，迭代高效，运营问题初显。 |
| **Moltis** | 5 | 4 / 0 | 2 个 | 🟢 高效 | 快速修复，多渠道适配。 |
| **NanoBot** | - | - / 19 | 无 | 🟢 稳健 | 响应迅速，架构重构中。 |
| **PicoClaw** | 4 | 11 / 2 | 无 | 🟡 平稳 | 关键 Bug 修复 PR 待合并。 |
| **NanoClaw** | 1 | 9 / 0 | 无 | 🟡 积压 | 新增修复 PR 多，但评审停滞。 |
| **EasyClaw** | 0 | 0 / 0 | 2 个 | ⚪ 内部 | 闭门迭代，视觉能力增强。 |
| **ZeptoClaw** | 0 | 16 (Bot) / 0 | 无 | ⚪ 维护 | 依赖更新，功能冻结。 |
| **NullClaw** | 0 | 1 / 0 | 无 | ⚪ 低噪 | 核心优化，社区静默。 |
| **TinyClaw** | 0 | 0 / 0 | 无 | ⚪ 静默 | 无活动。 |

## 3. OpenClaw 在生态中的定位

*   **核心枢纽地位**：作为核心参照项目，OpenClaw 拥有最大的社区规模和最高的 Issue 吞吐量（单日 500+ PR 更新）。它不仅是功能的集大成者，也是生态中“压力测试”最充分的项目，许多共性问题（如会话持久化、插件安全）在此首先暴露。
*   **技术路线**：相比 NanoBot 的轻量级架构或 IronClaw 的 Reborn 激进重构，OpenClaw 选择了**渐进式架构演进**（如 SQLite 迁移的“抽象分支”策略），更注重兼容性与插件生态的稳定性。
*   **优势与挑战**：其优势在于多渠道支持和插件生态的成熟度；劣势在于庞大的历史包袱导致回归 Bug 频发（如 Windows UI 回归），且在多智能体架构上略滞后于 NanoBot 的布局。

## 4. 共同关注的技术方向

1.  **上下文与记忆管理瓶颈**
    *   **涉及项目**: OpenClaw, CoPaw, IronClaw, NanoBot。
    *   **具体诉求**: OpenClaw 与 CoPaw 均面临上下文膨胀导致的 Token 浪费和检索效率低下问题；NanoBot 与 CoPaw 正在重构内存模块以解决数据隐私和并发写入；IronClaw 则遭遇 HTTP 工具返回体过大撑爆上下文的问题。**如何实现无损压缩与高效检索是行业共性难题。**
2.  **安全与权限控制架构化**
    *   **涉及项目**: OpenClaw, Zeroclaw, Hermes Agent, NanoClaw。
    *   **具体诉求**: OpenClaw 引入 Operator Install Policy；Zeroclaw 计划实现安全执行层插件化；Hermes Agent 与 NanoClaw 暴露出沙箱逃逸和权限继承的漏洞。生态正从简单的“确认对话框”向细粒度的“策略即代码”演进。
3.  **MCP 协议的深度集成与修复**
    *   **涉及项目**: NanoBot, LobsterAI, Moltis。
    *   **具体诉求**: 多个项目报告了 MCP Server 连接中断、环境变量泄露或启动解析错误。这表明 MCP 虽已成为连接外部工具的主流标准，但其稳定性（特别是长连接与会话管理）仍需大量工程化修复。

## 5. 差异化定位分析

*   **企业级多渠道集成**: 这一领域由 OpenClaw 和 Moltis 主导，重点在于 Telegram/Slack/Discord 等多渠道消息的稳定交付与状态同步。
*   **多智能体协作框架**: 典型代表。这些项目正试图突破单体智能体限制，通过邮箱通道、子智能体控制平面等机制实现复杂任务的拆解与协作。
*   **端侧与嵌入式体验**: 侧重轻量级部署与端侧适配，关注进程守护与资源占用，适合边缘设备或个人 PC 常驻运行。
*   **安全与执行环境**: Zeroclaw 明确提出安全执行层插件化，专注于沙箱隔离与执行策略，适合高敏感场景。

## 6. 社区热度与成熟度

*   **快速迭代期**: 高频发布，功能激进，但也面临架构重构带来的阵痛。
*   **质量攻坚期**: OpenClaw, Hermes Agent。虽然热度极高，但被严重的平台回归 Bug（Windows 更新损坏、UI 回归）和架构债务困扰，目前处于“修 Bug 拓功能”的拉锯战。
*   **垂直深耕期**: Moltis, LobsterAI。在特定方向（如多渠道适配、协作写作）上高效打磨，Bug 修复迅速，产品化程度较高。
*   **静默维护期**: ZeptoClaw, NullClaw, EasyClaw。交互较少，主要进行依赖更新或内部闭门开发，社区反馈渠道不活跃。

## 7. 值得关注的趋势信号

1.  **记忆系统重构势在必行**：CoPaw 和 NanoBot 的动态显示，简单的向量库检索已无法满足 Agent 长期运行的稳定性（索引膨胀、崩溃），引入类似 SQLite 的结构化状态管理（OpenClaw 趋势）或原子写入机制将成为下一阶段标配。
2.  **Agent 权限治理从“开关”走向“策略”**：社区对简单的 `rm -rf` 确认框已不再满足，Zeroclaw 与 Hermes Agent 的讨论预示着未来将更多采用 OIDC 认证、细粒度策略配置和动态权限继承机制。
3.  **多智能体编排将成为下一竞争高地**：随着单体智能体能力趋于饱和，NanoBot 的邮箱通道、LobsterAI 的 Cowork 模块、IronClaw 的子智能体工具调用，均预示着**多智能体协作框架**将是下半年开源生态的核心竞争赛道。
4.  **部署体验的短板效应凸显**：Hermes Agent 的 Windows 更新损坏和 Docker 权限问题，以及多个项目报告的依赖冲突，表明对于非技术用户而言，**升级与部署的鲁棒性**已成为阻碍采用的最大门槛，而非模型能力本身。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-04)

## 1. 今日速览
NanoBot 今日保持极高的开发与维护活跃度，过去 24 小时内共有 **19 个 PR 被合并/关闭**，**7 个 Issue 得到解决**，显示出项目维护者对社区反馈的快速响应能力。核心进展集中在**架构重构**与**稳定性修复**，特别是内存模块的重构与 MCP 连接断连问题的修复，显著提升了系统的健壮性。社区讨论热点依旧聚焦于**多智能体协作架构**的缺失以及**安全性加固**的迫切需求。整体而言，项目正处于由单一智能体向多智能体框架演进的关键积累期。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目在核心架构、稳定性修复和功能增强方面取得了实质性突破：

*   **架构重构与安全性增强**：PR #4183 已合并，对内存模块进行了 6 项结构性改进，引入了 PII 脱敏和原子写入机制，解决了潜在的数据隐私与并发写入问题，显著加固了核心路径。
*   **稳定性修复**：针对近期反馈的 MCP Server 随机断连问题，PR #4171 已合并，引入了会话终止后的自动重连机制，修复了 "Session terminated" 导致的工具调用失败。
*   **功能完善**：
    *   PR #3221 合并，新增 `nanobot auth` 命令，支持 OAuth Device Flow，简化了用户配置默认模型提供商的流程。
    *   PR #3461 合并，引入基于文件系统的多智能体邮箱通道插件，为后续多智能体通信奠定了基础。
    *   PR #4180 修复了 QQ 频道未授权用户的配对码发送问题。
*   **代码优化**：PR #3990 简化了 Dream（潜意识）处理流程，移除了复杂的两阶段类，改用更简洁的 Cron + process_direct 模式。

## 4. 社区热点
今日社区讨论最激烈的议题反映了用户对**多智能体能力**的强烈诉求和对**安全边界**的担忧：

*   **多智能体架构呼声**：Issue #222 [Open] 以 10 条评论成为今日热点之首，用户希望官方支持多智能体编排并提供配置指南。Issue #4179 [Open] 进一步提出了 Agent-to-Agent (A2A) 原生编排的构想，显示出社区对多智能体框架化的迫切需求。
*   **安全边界争议**：Issue #979 [Closed] 讨论了 AI 绕过指令限制执行 `rm -rf` 的情况，引发了对 Agent 执行权限控制的担忧。Issue #143 [Open] 则严肃指出了文件系统工具未强制执行工作区限制的漏洞，建议维护者优先关注沙箱逃逸风险。

## 5. Bug 与稳定性
今日报告了数个关键 Bug，部分已得到修复：

*   **已修复**：
    *   **MCP 连接中断**：Issue #4168 报告 MCP Server 随机时间后无法连接。**已通过 PR #4171 修复**，增加了重连机制。
*   **待处理（高危）**：
    *   **文件系统沙箱逃逸**：Issue #143 [Open] 指出 `restrict_to_workspace` 配置未在部分文件工具中生效，存在安全隐患（严重性：高）。
    *   **内部信息泄露**：Issue #954 [Open] 报告进度流特性意外将内部工具调用细节泄露到用户聊天界面（严重性：中）。
*   **待处理（体验）**：
    *   Issue #1022 [Closed] 提及长时运行任务假死问题，建议关注任务执行的健壮性。

## 6. 功能请求与路线图信号
结合 Issue 与 PR 动态，项目下一阶段路线图信号明显：

*   **多智能体编排（高优先级）**：Issue #1006 提议增加子智能体控制平面，Issue #1012 建议支持子智能体配置画像。结合已合并的邮箱通道 (#3461)，**多智能体协作框架**极可能成为下一版本的核心特性。
*   **WebUI 体验优化**：Issue #4178 请求增加新建对话快捷键，已有 PR #4185 待合并，预计近期将上线。
*   **模型配置灵活性**：Issue #912 提议支持任务级模型配置（对话/工具/浏览器使用不同模型），这符合成本优化趋势，有望被纳入规划。

## 7. 用户反馈摘要
*   **真实痛点**：用户对 Agent 的**不可控性**（如误删文件 #979、长任务卡死 #1022）感到焦虑，认为沙箱隔离和稳定性是当前最大短板。同时，**Token 消耗** (#80) 也是用户关注的成本痛点。
*   **使用场景**：用户正尝试将 NanoBot 应用于自动化爬虫、多渠道客服（WhatsApp/Telegram）及团队协作场景，但受限于当前的单体架构，多账号/多智能体场景落地困难 (#222)。
*   **正面评价**：Issue #97 称赞 NanoBot 代码架构清晰轻量，这为社区贡献者参与改进提供了便利。

## 8. 待处理积压
以下重要 Issue 长期未获响应或解决，建议维护者关注：

*   **Issue #222** (Multi agents setup)：作为社区呼声最高的功能，自 2 月提出以来一直未获明确解决，建议作为下一阶段重点。
*   **Issue #143** (Filesystem Security)：涉及核心安全漏洞，需尽快修复 `restrict_to_workspace` 生效范围。
*   **Issue #954** (Privacy Leak)：工具调用泄露问题影响用户信任，建议尽快排期。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 (2026-06-04)

## 1. 今日速览
Zeroclaw 项目今日保持高度活跃，社区反馈与开发迭代双管齐下。过去 24 小时内新增/活跃 Issue 25 条，PR 更新高达 50 条，显示出项目正处于密集开发与功能完善阶段。重点动态集中在 **v0.9.0 架构规划**（安全插件化、OIDC 支持）与 **TUI (zerocode) 核心功能构建**。虽然无新版本发布，但大量修复 PR（如 Webhook 端口、OpenAI 模型兼容性）已提交待合并，项目正积极解决用户反馈的 Windows 平台兼容性与 Agent 执行循环等痛点。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
尽管今日仅有少量 PR 合并/关闭（共 4 条），但提交了 46 条待合并 PR，显示出开发团队正在为下一个里程碑积蓄力量：

*   **关键修复已就绪**：
    *   [PR #7193](https://github.com/zeroclaw-labs/zeroclaw/pull/7193): 修复了 Webhook Channel 端口配置缺失导致 Agent 启动失败的问题（Issue #7173），已补充默认端口 8090。
    *   [PR #7194](https://github.com/zeroclaw-labs/zeroclaw/pull/7194): 修复了 OpenAI `o1-mini` 等推理模型对 `temperature` 参数的兼容性问题，强制设为 1.0。
    *   [PR #7191](https://github.com/zeroclaw-labs/zeroclaw/pull/7191): 修复了 Web Chat 模型切换器的解析错误和超时问题。
*   **TUI (zerocode) 进展**：
    *   [PR #7190](https://github.com/zeroclaw-labs/zeroclaw/pull/7190): 实现了 TUI 的出站消息队列与侧边栏注入功能，这是实现非阻塞式交互的关键一步。
*   **安全增强**：
    *   [PR #7189](https://github.com/zeroclaw-labs/zeroclaw/pull/7189): 阻止 Cron 启动的 Agent Job 修改调度器本身，防止潜在的安全风险。
*   **已关闭提案**：
    *   [Issue #7168](https://github.com/zeroclaw-labs/zeroclaw/issues/7168) & [Issue #7167](https://github.com/zeroclaw-labs/zeroclaw/issues/7167): 关于“会话分支”功能的建议被关闭，可能暂不纳入近期路线图或与现有架构冲突。

## 4. 社区热点
今日讨论最热烈的话题集中在架构演进与安全性增强：

*   **[Issue #7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) [热议中]**: **安全执行层插件化**。作者 @singlerider 提议将安全执行层抽象为可插拔的 Provider 接口。这标志着 Zeroclaw 正向更模块化的安全架构演进，为后续支持更多沙箱后端铺路。
*   **[Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) [热议中]**: **OIDC 认证支持**。作为 v0.9.0 的目标之一，计划为 RPC/WSS 传输层增加 OIDC 认证提供商支持，这将显著提升企业级部署的安全性。
*   **[Issue #7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)**: **v0.8.0 发布阻塞清单**。该 Tracker 详细列出了正式版发布前需解决的配置、Schema 破坏性变更清理工作，是项目下一阶段稳定性的风向标。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，主要集中在 Windows 平台和 Web UI 交互：

*   **S1 - 工作流阻塞**:
    *   [Issue #7173](https://github.com/zeroclaw-labs/zeroclaw/issues/7173): Webhook 快速启动流程未提供端口输入，导致生成的 Agent 配置缺失 `port` 字段无法启动。**(已提交修复 PR #7193)**
*   **S2 - 体验降级**:
    *   [Issue #7197](https://github.com/zeroclaw-labs/zeroclaw/issues/7197): Windows 平台下 Web 工具栏加载缓慢且伴随黑框弹窗，严重影响 Windows 用户使用体验。
    *   [Issue #7151](https://github.com/zeroclaw-labs/zeroclaw/issues/7151): Chat 界面偶尔出现无法消失的 "unknown" 工具卡片，系遥测数据泄露至 WebSocket 所致。
    *   [Issue #7133](https://github.com/zeroclaw-labs/zeroclaw/issues/7133): 路径策略在处理引用命令时对 `~` 符号产生误报。
*   **S3 - 显示问题**:
    *   [Issue #7157](https://github.com/zeroclaw-labs/zeroclaw/issues/7157): 消息时间戳被渲染在气泡内部，而非独立元数据区域。

## 6. 功能请求与路线图信号
用户与开发者提出了一系列功能请求，反映了向精细化控制发展的趋势：

*   **安全与策略**:
    *   [Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155): 建议增加高危 Shell 命令的“单次确认”层级，并引入类似 Claude Code 的模式匹配策略。这表明用户希望对 Agent 的自主执行有更细粒度的“Ask/Allow/Deny”控制。
    *   [Issue #6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996): RFC 提案，建议在沙箱中增加细粒度的文件系统与网络限制配置。
*   **架构与集成**:
    *   [Issue #7131](https://github.com/zeroclaw-labs/zeroclaw/issues/7131): 建议将 Daemon RPC 接口发布为 OpenRPC 规范文档，便于第三方集成。
    *   [PR #7136](https://github.com/zeroclaw-labs/zeroclaw/pull/7136): 社区贡献了 **Kilo AI Gateway** 作为一级 Model Provider，扩展了模型路由的选择。

## 7. 用户反馈摘要
*   **Windows 用户痛点明显**：多个 Issue 提及 Windows 下的控制台弹窗（#7197）和路径处理问题，需重点关注跨平台兼容性。
*   **Agent 行为可控性需求强烈**：用户对 Agent 陷入循环执行同一命令（#7143）感到困扰，并希望通过更细致的策略（#7155）来限制 Agent 行为，而不仅仅是简单的开关。
*   **Webhook 集成受阻**：配置向导的遗漏字段（#7173）直接导致服务不可用，这是典型的“新手劝退”问题，修复优先级很高。

## 8. 待处理积压
*   **[长期未响应/重要]** [Issue #6702](https://github.com/zeroclaw-labs/zeroclaw/issues/6702): Dashboard 聊天气泡空白行累积问题已存在约 3 周，虽标记为 `priority:p3`，但影响 UI 美观度。
*   **[高风险/高优]** [Issue #7130](https://github.com/zeroclaw-labs/zeroclaw/issues/7130): 关于工作区全面禁止 `unsafe_code` 的提议，涉及底层安全架构，需要维护者进行细致审查。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-04)

## 1. 今日速览
Hermes Agent 项目今日处于**高并发迭代与社区反馈爆发期**。过去 24 小时内新增/活跃 Issue 高达 45 条，但仅关闭 5 条，显示用户反馈速度略快于维护团队的处理能力。PR 积压明显（待合并 42 条 vs 合并 8 条），表明项目正在经历大规模重构与功能扩充，评审压力较大。今日焦点集中在 **Windows 平台的更新稳定性**、**Docker 容器权限管理**以及**企业级安全审批机制**的完善。整体来看，项目生态活跃，但跨平台兼容性与升级流程的健壮性亟待提升。

## 2. 版本发布
**无新版本发布**。虽然今日有大量代码更新和修复，但尚未生成新的 Release Tag。考虑到目前积压的 PR 中包含大量关键修复（如 Windows 更新损坏、安全漏洞等），建议关注近期可能发布的补丁版本。

## 3. 项目进展
尽管没有发布新版本，但今日的合并/关闭活动解决了部分关键痛点，主要集中在代码重构与安全修复：

*   **代码重构与清理**：PR #38658 [CLOSED] 将冲突的 `github-code-review` skill 替换为统一的 `code-review` skill，解决了子智能体在 PR 审查时加载错误技能的问题，提升了 Agent 行为的一致性。
*   **关键 Bug 修复 (Docker/Matrix)**：Issue #25495 [CLOSED] 修复了官方 Docker 镜像中 Matrix/Synapse 网关启动失败的问题（卡在 "fixing ownership"），恢复了 Docker 用户的正常使用。
*   **Windows 设置修复**：Issue #37827 [CLOSED] 解决了 Windows 环境下 `git checkout main` 失败导致的启动错误，提升了 Windows 平台的首次部署成功率。

## 4. 社区热点
今日社区讨论最热烈的问题集中在部署体验与无障碍访问上：

*   **[Bug] Matrix/Synapse Docker 镜像故障** ([#25495](https://github.com/NousResearch/hermes-agent/issues/25495))
    *   **热度**：12 评论 | 👍 1
    *   **分析**：该 Issue 导致大量 Docker 用户无法启动服务。虽然今日已关闭，但大量用户反馈了相同的“卡住”现象，显示出官方镜像的回归测试需要加强。
*   **[Feature] 视障用户无障碍访问改进** ([#26689](https://github.com/NousResearch/hermes-agent/issues/26689))
    *   **热度**：8 评论 | 👍 0
    *   **分析**：一位全盲用户详细列举了 Hermes Desktop 与 macOS VoiceOver 的兼容性问题（如焦点管理混乱、TUI 读屏困难）。这反映了项目在包容性设计方面的缺失，社区对此表示高度关注。
*   **[Bug] Docker UID 映射权限问题** ([#27221](https://NousResearch/hermes-agent/issues/27221))
    *   **热度**：6 评论 | 👍 2
    *   **分析**：在 NAS 或自定义 UID 环境下，`entrypoint.sh` 未能正确修改所有必要目录的权限，导致网关无法写入数据。这是进阶用户在自托管场景下的常见痛点。

## 5. Bug 与稳定性
今日报告了多个严重的平台级 Bug，部分已有修复方案：

### 🔴 P1 严重级别
*   **Windows 更新导致安装损坏** ([#37881](https://github.com/NousResearch/hermes-agent/issues/37881))
    *   **问题**：执行 `hermes update` 时 venv 重建失败，导致环境彻底损坏，无法启动 CLI。
    *   **状态**：Open，影响所有 Windows 用户，属于破坏性更新 Bug。
*   **Docker 镜像 Matrix 网关损坏** ([#25495](https://github.com/NousResearch/hermes-agent/issues/25495))
    *   **状态**：**已修复 (Closed)**。

### 🟠 P2 高优先级
*   **安全：Slack 网关审批绕过漏洞** ([#38068](https://github.com/NousResearch/hermes-agent/issues/38068))
    *   **问题**：Slack 按钮交互忽略了配置的授权逻辑，CVSS 评分高达 8.0/8.6。
    *   **状态**：Open，存在安全风险。
*   **macOS 文件描述符耗尽** ([#30230](https://github.com/NousResearch/hermes-agent/issues/30230))
    *   **问题**：macOS 默认 fd 限制（256）无法满足多配置文件网关需求，导致 OSError。
    *   **状态**：Open，需优化资源管理。
*   **Desktop 更新后 Git Checkout 失败** ([#38407](https://github.com/NousResearch/hermes-agent/issues/38407))
    *   **问题**：Windows Desktop App 更新后因 Git 状态异常无法启动。
    *   **状态**：Open，已有相关 PR 待合并。

### 🟡 已有修复方案的 Bug
*   **Cron 脚本路径错误提示** ([#38693](https://github.com/NousResearch/hermes-agent/issues/38693)) -> 修复 PR: [#38695](https://github.com/NousResearch/hermes-agent/pull/38695)
*   **SSRF 防护在 Docker 终端下失效** ([#38690](https://github.com/NousResearch/hermes-agent/issues/38690)) -> 修复 PR: [#38697](https://github.com/NousResearch/hermes-agent/pull/38697)

## 6. 功能请求与路线图信号
社区正推动项目向更成熟的企业级工具演进：

*   **精细化权限控制** ([#33905](https://github.com/NousResearch/hermes-agent/issues/33905))：用户希望为每个工具或工具集单独设置审批策略，而不仅仅是针对 Shell 命令。结合 PR [#37771](https://github.com/NousResearch/hermes-agent/pull/37771)（审批委托机制），这表明 **Agent 的安全治理** 是下一阶段的核心路线。
*   **桌面端体验优化**：
    *   系统托盘后台运行 ([#38007](https://github.com/NousResearch/hermes-agent/issues/38007))：减少冷启动时间。
    *   远程工作区文件浏览 ([#38671](https://github.com/NousResearch/hermes-agent/issues/38671))：增强远程连接功能。
*   **平台扩展**：PR [#37215](https://github.com/NousResearch/hermes-agent/pull/37215) 正在增加 **Fluxer** 网关适配器，试图提供类似 Discord 但可自托管的聊天接口，显示出项目正在积极拓展集成平台。

## 7. 用户反馈摘要
从 Issue 评论中提炼出的用户核心痛点：

*   **升级流程脆弱**：多个 Issue (#37881, #38618, #38407) 反映 `hermes update` 在 Windows 上极不稳定，经常导致环境损坏或版本更新滞后，用户对升级产生恐惧感。
*   **Docker 权限管理复杂**：非 root 用户或特定 UID 映射场景下，Docker 容器内权限问题频发，影响了 NAS 用户的自托管体验。
*   **UI 交互细节不足**：
    *   Web UI 滚动条行为异常 (#38669)。
    *   Desktop 无法像 Web UI 那样按 Project ID 分组会话 (#38680)。
    *   离线安装困难 (#38684)，国内用户受网络限制影响大。
*   **安全性担忧**：用户发现了 OAuth 认证绕过、SSRF 防护失效等深层安全问题，表明项目在复杂网络环境下的安全性测试尚显不足。

## 8. 待处理积压
以下重要 Issue/PR 长期未得到有效解决或合并，建议维护者优先关注：

*   **PR [#37215](https://github.com/NousResearch/hermes-agent/pull/37215) (Fluxer 适配器)**：已挂起 2 天，这是扩展 Agent 应用场景的重要功能，需尽快评审。
*   **PR [#35127](https://github.com/NousResearch/hermes-agent/pull/35127) (i18n 国际化)**：已挂起 5 天，这是企业级落地的基础设施，对社区贡献者非常关键。
*   **Issue [#33905](https://github.com/NousResearch/hermes-agent/issues/33905) (精细化权限)**：创建于 5 月 28 日，至今仍 Open。这是 Agent 落地到生产环境的安全刚需，目前仅靠 Shell 审批无法满足需求。
*   **Issue [#26689](https://github.com/NousResearch/hermes-agent/issues/26689) (无障碍访问)**：涉及视障人士的使用权利，建议项目组将其纳入 Accessibility 审查清单。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-04)

## 1. 今日速览
PicoClaw 项目今日保持高度活跃，核心开发重心集中在系统稳定性修复与用户体验优化。过去24小时内共有 11 个 PR 更新与 4 个 Issue 活跃，显示出维护者正密集处理积压代码合并。虽然今日无新版本发布，但多个关键 Bug 修复 PR（如 PID 进程校验、会话历史异常）已处于待合并状态，预示着下一个 patch 版本即将到来。社区关注度最高的议题集中在 HTTP 流式请求配置与进程启动稳定性上。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日共有 **2 个 PR 已合并/关闭**，**9 个 PR 待合并**，项目在稳定性和代码质量方面取得实质性进展：

*   **依赖与安全更新**：PR [#2997](https://github.com/sipeed/picoclaw/pull/2997) 已关闭，成功将 Go 版本从 1.25.10 升级至 1.25.11，修复了 `net/textproto` 中的安全漏洞 (GO-2026-5039)，提升了项目基础安全性。
*   **MQTT 通道安全加固**：PR [#2899](https://github.com/sipeed/picoclaw/pull/2899) 已关闭，引入了可配置的 TLS 验证选项，修复了 MQTT 通道默认跳过验证导致易受 MITM 攻击的问题。
*   **关键修复待合并**：
    *   PR [#2992](https://github.com/sipeed/picoclaw/pull/2992) 修复了升级 v0.2.9 后 Web UI 新会话错误加载旧消息的历史记录提升问题。
    *   PR [#2996](https://github.com/sipeed/picoclaw/pull/2996) 增强了工具执行响应中 JSON 序列化的错误处理，避免了静默失败。
    *   PR [#2985](https://github.com/sipeed/picoclaw/pull/2985) 优化了 `/context` 指令的显示逻辑，解决了用户对阈值显示的困惑。

## 4. 社区热点
今日讨论热度最高的 Issue 为 **[#2404](https://github.com/sipeed/picoclaw/issues/2404)**（👍 1，评论 11）。
*   **诉求分析**：用户强烈希望在配置文件中增加 `"streaming": true` 选项，以支持向 LLM 后端发送流式 HTTP 请求。这反映出开发者希望通过 PicoClaw 更灵活地控制数据传输模式，特别是针对需要实时响应的 Python 客户端集成场景。该 Issue 自 4 月提出至今仍在活跃讨论，表明其是社区的高优先级需求。

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及系统启动、消息传输和兼容性，部分已有修复方案：

*   **[P0 Critical] 启动崩溃循环**：Issue [#2720](https://github.com/sipeed/picoclaw/issues/2720) 指出 PID 文件校验逻辑存在缺陷，当 PID 被系统复用时会导致 Gateway 无法启动。
    *   *状态*：已有修复 PR [#2955](https://github.com/sipeed/picoclaw/pull/2955) 和 [#2813](https://github.com/sipeed/picoclaw/pull/2813)，待合并。
*   **[P1 High] 工具调用丢失**：Issue [#2958](https://github.com/sipeed/picoclaw/issues/2958) 反映在连续请求中，后续的 `tool_calls` 消息未传递至 UI。
    *   *状态*：已有修复 PR [#2957](https://github.com/sipeed/picoclaw/pull/2957)，待合并。
*   **[P2 Medium] 兼容性问题**：Issue [#2954](https://github.com/sipeed/picoclaw/issues/2954) 报告不支持 32 位 Android 系统，目前尚在讨论中。

## 6. 功能请求与路线图信号
*   **流式传输支持**：Issue [#2404](https://github.com/sipeed/picoclaw/issues/2404) 提出的配置化流式请求支持是目前的强需求，尽管目前尚未有对应的 PR 提交，但高讨论量预示其极可能被纳入下一阶段路线图。
*   **MCP 动态头部转发**：PR [#2696](https://github.com/sipeed/picoclaw/pull/2696) 提出支持从通道上下文向 MCP 服务器转发动态 HTTP 头部（如 Authorization），这将极大增强 MCP 协议的扩展性与安全性，建议维护者优先 Review。

## 7. 用户反馈摘要
*   **配置体验**：用户对配置项的直观性有较高要求，如 Issue #2968（PR #2985 修复）中指出 `/context` 显示的阈值与实际逻辑不符，导致理解偏差。
*   **部署痛点**：多位用户在 Issue [#2720](https://github.com/sipeed/picoclaw/issues/2720) 中反馈在复杂环境（如 systemd 管理）下的进程残留检测问题，严重阻碍了服务的自动恢复能力。
*   **端侧支持**：社区对移动端（特别是 Termux 环境）的支持呼声渐起，Issue [#2954](https://github.com/sipeed/picoclaw/issues/2954) 标志着用户群体正向边缘设备扩展。

## 8. 待处理积压
以下重要 Issue 和 PR 虽有更新但仍标记为 `[stale]` 或长期未合并，需维护者重点关注：

*   **PR [#2813](https://github.com/sipeed/picoclaw/pull/2813) & [#2955](https://github.com/sipeed/picoclaw/pull/2955)**：两者均针对严重的 PID 启动崩溃问题提供了修复，存在功能重叠，建议维护者尽快评审并择优合并，以解决 P0 级故障。
*   **Issue [#2954](https://github.com/sipeed/picoclaw/issues/2954)**：32位 Android 不支持问题已标记 stale，需确认是否有计划支持或文档说明限制原因。
*   **PR [#2696](https://github.com/sipeed/picoclaw/pull/2696)**：MCP 动态头部功能对生态集成至关重要，长期未合并可能影响相关场景的落地，建议加快评审。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-04)

## 1. 今日速览
NanoClaw 项目今日呈现出**高提交、零合并**的待定状态，社区贡献主要集中在提升系统健壮性与修复边缘场景 Bug。过去 24 小时内共有 9 个新 PR 待审核，主要集中在调度模块的容错机制与系统集成兼容性修复，显示贡献者正致力于解决生产环境下的稳定性痛点。虽然无新版本发布且无 PR 合并，但 Issue #2680 曝光了加密家目录下服务启动失败的关键问题，并迅速获得修复提案，表明社区响应速度较快。整体来看，项目正处于功能迭代与稳定性加固阶段，但需关注 PR 积压情况。

## 2. 版本发布
无。

## 3. 项目进展
今日无 PR 合并或关闭，但有 9 个新 PR 提交，主要集中在**调度系统增强**与**环境兼容性修复**，预示着下一版本将显著提升稳定性。

*   **调度系统健壮性提升：** 贡献者 @yairixStudio 提交了系列 PR，旨在优化任务调度逻辑。
    *   [PR #2679](链接: nanocoai/nanoclaw PR #2679)：修复了永久失败的任务仅记录日志而不通知用户的问题，确保用户能感知任务异常。
    *   [PR #2678](链接: nanocoai/nanoclaw PR #2678)：修复了失败任务的循环重试逻辑，确保失败后能正确重新触发。
    *   [PR #2677](链接: nanocoai/nanoclaw PR #2677)：增加了预执行脚本失败后的重试与诊断机制。
*   **环境与集成修复：**
    *   [PR #2681](链接: nanocoai/nanoclaw PR #2681)：针对加密家目录导致服务启动失败的问题（Issue #2680）提出了修复方案，跳过特定环境下的 Linger 检查。
    *   [PR #2675](链接: nanocoai/nanoclaw PR #2675)：修复了 Slack 适配器因消息超过 3000 字符限制导致发送失败的问题。
*   **功能扩展：**
    *   [PR #2683](链接: nanocoai/nanoclaw PR #2683)：新增 QMD 容器技能，引入混合搜索（BM25 + vector）能力，增强 Agent 的知识检索能力。

## 4. 社区热点
今日最活跃的讨论围绕系统兼容性问题展开。

*   **[Issue #2680](链接: nanocoai/nanoclaw Issue #2680) Service doesn't start at boot when linger is enabled on an encrypted home directory**
    *   **热度：** 👍 1，评论 0
    *   **分析：** 该 Issue 报告了在采用用户级加密的家目录环境下，启用 linger 导致服务静默启动失败的问题。这反映了部分高级用户对隐私安全环境的重视，同时也暴露了 NanoClaw 在复杂系统环境下的适配短板。该问题直接关联 [PR #2681](链接: nanocoai/nanoclaw PR #2681)，虽然评论数不多，但因涉及核心功能（开机自启）且已有修复方案，是今日最具实质性进展的讨论。

## 5. Bug 与稳定性
今日报告了 1 个中等级别的 Bug，且已有对应修复 PR，响应及时。

*   **[Medium] 服务启动失败 (Issue #2680)**
    *   **描述：** 在非 LUKS 加密家目录环境下，服务在 boot 时因 linger 机制无法正确启动。
    *   **影响：** 导致特定安全配置用户无法正常使用开机自启功能。
    *   **状态：** **已有修复 PR** ([PR #2681](链接: nanocoai/nanoclaw PR #2681))，通过跳过加密环境下的 linger 检查来解决。
*   **[Medium] Slack 消息发送中断 (PR #2675)**
    *   **描述：** Vercel Chat SDK 构建的 Slack 消息块若超过 3000 字符会导致整个消息发送失败。
    *   **状态：** **已有修复 PR**，增加了长度截断处理。
*   **[Low] 调度任务静默失败**
    *   **描述：** 多个调度相关 PR (#2677, #2678, #2679) 指出当前版本在任务失败处理上存在逻辑缺陷（如重试失效、用户无感知）。

## 6. 功能请求与路线图信号
今日的新增 PR 反映了项目未来的演进方向。

*   **混合搜索能力 (RAG 增强)：** [PR #2683](链接: nanocoai/nanoclaw PR #2683) 提交了 QMD (Query Markdown Documents) 技能，显示项目正致力于增强本地知识库的检索精度，结合 BM25 与向量搜索，这可能成为下一阶段 Agent 记忆与知识库模块的核心功能。
*   **权限继承机制：** [PR #2605](链接: nanocoai/nanoclaw PR #2605) 于今日更新，提出了子 Agent 继承父 Agent 权限的特性。这表明项目正在向更复杂的多 Agent 协作架构演进，解决权限隔离带来的交互阻碍。

## 7. 用户反馈摘要
*   **痛点：** 用户 @glifocat 指出在追求隐私保护（加密家目录）的场景下，NanoClaw 的现有启动机制存在冲突，导致服务不可用。这提示开发团队需要考虑更广泛的 Linux 系统配置场景。
*   **诉求：** 社区期望 Agent 在执行长时间任务或后台任务时具备更强的“自理能力”，例如自动重试失败任务 (#2677) 和主动汇报失败情况 (#2679)，减少人工介入排查的需要。

## 8. 待处理积压
*   **PR 审核阻塞：** 今日新增 9 个 PR，但合并数为 0。虽然包含多个重要的稳定性修复，但均未合并。建议维护者优先审核 [PR #2681](链接: nanocoai/nanoclaw PR #2681) 和 [PR #2675](链接: nanocoai/nanoclaw PR #2675)，以尽快解决影响核心功能的 Bug。
*   **长期 PR：** [PR #2605](链接: nanocoai/nanoclaw PR #2605)（权限继承）创建于 10 天前，今日虽有更新但仍未合并，可能涉及较大的架构变动，需关注是否进入评审停滞期。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-06-04)

## 1. 今日速览
NullClaw 项目在过去 24 小时内整体呈现“低噪维护、内部优化”的状态。社区端无新增 Issue 或用户反馈，交互平静。开发活动集中于核心 Agent 逻辑的代码质量改进，提交了一个针对系统提示词工具过滤逻辑的修复 PR。目前暂无新版本发布，项目处于功能迭代与稳定性维护的平稳期，健康度良好。

## 2. 版本发布
**无**
过去 24 小时内无新版本发布。

## 3. 项目进展
今日无合并或关闭的 PR。目前有 **1 条待合并的 PR** 正在审核中，主要涉及核心 Agent 逻辑的优化：

*   **[OPEN] fix(agent): filter tools in system prompt text by tool_filter_groups** ([#946](https://github.com/nullclaw/nullclaw/pull/946))
    *   **内容概述**：该 PR 由 @vernonstinebaker 提交，旨在优化 Agent 系统提示词的构建逻辑。引入了 `filterToolsForPromptText` 函数，严格限制了写入文本形式系统提示词的工具范围。
    *   **技术细节**：现在仅内置工具和标记为 `always` 的 MCP 工具会被写入文本提示词中。动态分组的 MCP 工具将从文本中剔除，仅在触发关键词匹配时通过原生 API 调用发送。
    *   **推进意义**：此改动有望显著减少系统提示词的 Token 消耗，避免上下文窗口被低频工具定义占满，提升了 Agent 在复杂工具调用场景下的响应效率与准确性。

## 4. 社区热点
**无**
过去 24 小时内无活跃的 Issues 或带有热烈讨论的 PRs。

## 5. Bug 与稳定性
过去 24 小时内未收到新的 Bug 报告或崩溃反馈。

*   **潜在修复**：虽然无用户报告，但 PR [#946](https://github.com/nullclaw/nullclaw/pull/946) 从标题 "fix(agent)" 来看，可能修复了之前工具列表在提示词中过长或加载逻辑不严谨的隐性技术债，有助于提升系统在高负载工具集下的稳定性。

## 6. 功能请求与路线图信号
**无新的功能请求。**

*   **路线图信号**：从 PR [#946](https://github.com/nullclaw/nullclaw/pull/946) 的改动方向可以看出，项目正在精细化打磨 **MCP (Model Context Protocol) 工具的管理机制**。项目正从“单纯支持工具调用”向“智能化的工具上下文管理”演进，未来的版本可能会更侧重于 Token 效率优化和动态工具加载策略。

## 7. 用户反馈摘要
**无**
由于过去 24 小时无 Issue 更新或 PR 评论，暂无用户反馈数据。

## 8. 待处理积压
当前待处理积压较少，但需关注以下条目：

*   **待审核 PR**：[PR #946](https://github.com/nullclaw/nullclaw/pull/946) 目前处于 OPEN 状态。该改动涉及核心 Prompt 构建逻辑，建议维护者优先进行 Code Review 及测试，确认其对现有 Agent 行为无回归影响后尽快合并。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-04)

## 1. 今日速览
IronClaw 项目今日活跃度极高，共处理了 50 条 PR 更新和 26 条 Issue 动态，成功发布了 `v0.29.1` 版本。核心开发重心集中在 **Reborn 架构的 Slack 集成**与**自动化触发器**系统的完善上，合并了大量相关功能的代码。社区方面，开发者对 Reborn 架构下的**工具调用一致性**和**上下文管理**提出了深度的 Bug 报告和优化建议，显示出项目正处于功能快速迭代与稳定性攻坚并行的关键阶段。

## 2. 版本发布
**[ironclaw-v0.29.1](https://github.com/nearai/ironclaw/releases/tag/v0.29.1)** - 2026-06-04

本次更新为小型补丁版本，主要涉及 API 兼容性与特定场景修复：
*   **Added**: Web 端现在支持通过 Responses API 透传 `temperature` 参数 ([#3641](https://github.com/nearai/ironclaw/pull/3641))，增强了模型推理的可控性。
*   **Fixed**: 修复了 Engine v1 在频道对话中的历史记录作用域问题 ([#4320](https://github.com/nearai/ironclaw/pull/4320))，确保对话上下文隔离正确。
*   **CI**: 发布流程中增加了 WeCo 支持。

## 3. 项目进展
今日共有 25 个 PR 被合并或关闭，主要推进了以下核心模块：

*   **Slack 集成全面落地**: 合并了多个关键 PR，完成了 Slack 个人绑定服务 ([#4422](https://github.com/nearai/ironclaw/pull/4422))、参与者身份绑定 ([#4421](https://github.com/nearai/ironclaw/pull/4421)) 以及 Host-beta 路由对接 ([#4418](https://github.com/nearai/ironclaw/pull/4418))。这标志着 Slack MVP 功能的架构搭建已基本完成。
*   **自动化与触发器**: 新增了只读自动化 WebUI API ([#4380](https://github.com/nearai/ironclaw/pull/4380))，并完成了触发器轮询器的全路径集成测试 ([#4415](https://github.com/nearai/ironclaw/pull/4415))，提升了后台任务处理的可靠性。
*   **架构重构与修复**: 修复了 WebUI 实时投影游标恢复问题 ([#4417](https://github.com/nearai/ironclaw/pull/4417))，并优化了本地开发运行时作用域绑定 ([#4412](https://github.com/nearai/ironclaw/pull/4412))，解决了 SSO 与本地环境的行为差异。

## 4. 社区热点
今日讨论热度最高的议题集中在 Reborn 架构的健壮性与工具调用机制：

*   **Issue [#4424](https://github.com/nearai/ironclaw/issue/4424) - 子智能体工具调用缺失**: 开发者 @henrypark133 指出 `builtin.spawn_subagent` 在系统提示文本中被宣告，但在结构化工具数组中缺席，导致 OpenAI 兼容模型无法实际调用。该问题直指 Reborn 架构中提示词生成与工具暴露层的不一致，目前已提交修复 PR [#4434](https://github.com/nearai/ironclaw/pull/4434)。
*   **Issue [#4425](https://github.com/nearai/ironclaw/issue/4425) - HTTP 工具“上下文炸弹”**: 讨论 `builtin.http` 返回未经处理的大体积响应体（如 1.2MB 的 HTML），缺乏截断或清洗机制，极易撑爆上下文窗口。
*   **Issue [#4407](https://github.com/nearai/ironclaw/issue/4407) - 工具数量限制设计**: 随着宿主运行时能力的增强，暴露给模型的工具数组可能超出提供商（如 GPT-5.4-nano）的限制，引发了关于模型可见能力筛选机制的设计讨论。

## 5. Bug 与稳定性
今日报告了多个影响系统稳定性的关键 Bug，主要集中在 Reborn 内核与生产环境启动：

*   **P0 - 工具调用失效**: Issue [#4424](https://github.com/nearai/ironclaw/issue/4424) 导致模型“看得到用不了”，陷入死循环。修复 PR [#4434](https://github.com/nearai/ironclaw/pull/4434) 已提交。
*   **P1 - 上下文溢出风险**: Issue [#4425](https://github.com/nearai/ironclaw/issue/4425) 报告 HTTP 工具可能注入 10MB 级别的上下文，缺乏保护机制，可能导致 Token 消耗激增或崩溃。
*   **P1 - 生产环境启动失败**: Issue [#4400](https://github.com/nearai/ironclaw/issue/4400) 指出 IronClaw 可能因陈旧的 PID 文件导致实例重启失败，影响生产可用性。
*   **P2 - Trigger 策略失效**: Issue [#4420](https://github.com/nearai/ironclaw/issue/4420) 指出 `CompleteAfterFirstFire` 策略虽被存储但未被代码路径读取，导致触发器重复执行。

## 6. 功能请求与路线图信号
*   **OAuth 体验优化**: Issue [#4382](https://github.com/nearai/ironclaw/issue/4382) 提出为每个提供商设置默认 OAuth 账户，避免每次调用能力时重新鉴权，这将极大改善用户体验。
*   **模型可见能力筛选**: 针对 Issue [#4407](https://github.com/nearai/ironclaw/issue/4407) 提出的工具数组超限问题，社区建议设计一套模型可见能力的选择机制，以适应不同模型提供商的限制。
*   **Slack MVP**: 随着 Lane 10 相关 Issues 的关闭（如 [#3857](https://github.com/nearai/ironclaw/issue/3857)），Slack ProductAdapter MVP 已进入最终调整阶段，后续重点将转向 OAuth 流程优化。

## 7. 用户反馈摘要
*   **Reborn 可观测性不足**: 开发者反馈 Reborn 环境中循环退出原因不可见（Issue [#4427](https://github.com/nearai/ironclaw/issue/4427)），Prompt 重建导致缓存失效（Issue [#4429](https://github.com/nearai/ironclaw/issue/4429)），表明 Reborn 在调试友好度和性能细节上仍需打磨。
*   **运维痛点**: Issue [#4400](https://github.com/nearai/ironclaw/issue/4400) 中用户反馈 PID 文件残留导致的服务不可用，呼吁增强进程管理的鲁棒性。

## 8. 待处理积压
*   **Issue [#3283](https://github.com/nearai/ironclaw/issue/3283)**: 关于将 OpenAI 兼容 API 迁移至 Reborn 架构的任务，虽已提出多日，但目前仍有待推进，这是实现架构统一的重要一步。
*   **PR [#4315](https://github.com/nearai/ironclaw/pull/4315)**: 关于 Engine v2 视觉附件修复的 PR 自 6 月 2 日开启至今未合并，可能存在潜在的架构冲突或审核滞后，需维护者关注。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-04)

## 1. 今日速览
LobsterAI 今日保持高强度的开发迭代节奏，共处理了 16 个 PR，其中 14 个已合并/关闭，并发布了 **v2026.6.3** 新版本。项目重点聚焦于 **Cowork（协作）模块的功能增强**与 **MCP（模型上下文协议）的稳定性修复**，显著提升了用户在会话分叉、上下文引用及快捷键操作方面的体验。社区方面，出现了一则关于订阅积分清零的高优先级投诉，需引起运营与开发团队的重视。整体而言，项目活跃度极高，功能迭代迅速。

## 2. 版本发布
### **LobsterAI 2026.6.3**
- **发布时间**: 2026-06-04
- **主要更新**:
  - **MCP 启动优化**: 优化了 `npx` MCP 启动解析逻辑，并添加了首次响应计时日志，提升了插件系统的启动可靠性 ([PR #2091](https://github.com/netease-youdao/LobsterAI/pull/2091))。
  - **HTML 分享优化**: 改进了 HTML 分享功能的细节 ([PR #2092](https://github.com/netease-youdao/LobsterAI/pull/2092))。
  - **Cowork 功能扩展**: 根据 Release 标题推断，包含对 Cowork 模块的增量更新。

## 3. 项目进展
今日项目在功能交互与底层稳定性上取得了显著突破，共合并/关闭了 14 个 PR：

- **核心功能 - 会话与上下文**:
  - **本地会话分叉**: 合并 [PR #2085](https://github.com/netease-youdao/LobsterAI/pull/2085)，支持用户从历史消息创建新的本地会话分支，增强了对话探索的灵活性。
  - **上下文引用增强**: 合并 [PR #2098](https://github.com/netease-youdao/LobsterAI/pull/2098) 与 [PR #2101](https://github.com/netease-youdao/LobsterAI/pull/2101)，实现了从 Markdown/纯文本 Artifact 预览中选中文本并添加至当前聊天上下文的功能，打通了多模态交互的关键路径。

- **用户体验 - 快捷键与 UI**:
  - **快捷键重构**: 合并 [PR #2109](https://github.com/netease-youdao/LobsterAI/pull/2109)，重构了键盘快捷键系统，扩展了可用操作并优化了交互体验。
  - **UI 细节修复**: 修复了 Skills 弹窗溢出视口及关闭逻辑问题 ([PR #2106](https://github.com/netease-youdao/LobsterAI/pull/2106))，修复了搜索模态框标题栏关闭按钮缺失问题 ([PR #2097](https://github.com/netease-youdao/LobsterAI/pull/2097))。

- **稳定性 - MCP 与配置**:
  - **MCP 修复**: 解决了网关配置重载期间的会话超时问题 ([PR #2104](https://github.com/netease-youdao/LobsterAI/pull/2104))，修复了 MCP 远程服务器 URL 校验逻辑 ([PR #2103](https://github.com/netease-youdao/LobsterAI/pull/2103))，并确保托管安装感知 Node 环境 ([PR #2100](https://github.com/netease-youdao/LobsterAI/pull/2100))。
  - **配置保留**: 修复了用户配置的上下文窗口被覆盖的问题，并新增了 mimo v2.5 模型 ([PR #2102](https://github.com/netease-youdao/LobsterAI/pull/2102))。

## 4. 社区热点
### 🔥 热议 Issue: [订阅积分清零争议](https://github.com/netease-youdao/LobsterAI/issues/2081)
- **状态**: Open
- **评论数**: 2
- **内容分析**: 用户反馈购买的 5500 积分在月底未使用情况下被直接清零，质疑订阅规则的合理性。该问题涉及用户核心权益，尽管非代码 Bug，但对用户信任度影响较大。
- **诉求**: 建议项目方明确积分过期规则，或提供积分延期/找回机制，并加强到期提醒。

## 5. Bug 与稳定性
今日修复了多个影响体验的 Bug，未报告新的严重崩溃问题：
- **🔴 高优先级**:
  - **配置丢失风险**: [PR #2102](https://github.com/netease-youdao/LobsterAI/pull/2102) 修复了用户配置上下文窗口被意外覆盖的问题，影响模型行为一致性。
  - **MCP 连接中断**: [PR #2104](https://github.com/netease-youdao/LobsterAI/pull/2104) 修复了配置重载时的会话超时，确保插件连接稳定。
- **🟡 一般问题**:
  - UI 弹窗溢出与交互逻辑修复 ([PR #2106](https://github.com/netease-youdao/LobsterAI/pull/2106))。
  - HTML 分享链接复制逻辑优化 ([PR #2105](https://github.com/netease-youdao/LobsterAI/pull/2105))。

## 6. 功能请求与路线图信号
根据今日合并的 PR 分析，项目路线图呈现以下趋势：
1.  **深度协作**: Cowork 模块频繁更新，特别是“选中文本引用”和“会话分叉”功能的落地，表明 LobsterAI 正致力于打造更精细化的 AI 辅助写作与编程工作流。
2.  **分享与分发**: HTML 分享功能的完善 ([PR #2099](https://github.com/netease-youdao/LobsterAI/pull/2099)) 预示着项目将加强内容分享与协作成果展示的能力。
3.  **MCP 生态**: 持续修复 MCP 兼容性与启动问题，显示项目正积极适配外部工具链，致力于构建开放的 Agent 生态。

## 7. 用户反馈摘要
从 Issue #2081 提炼出的用户痛点：
- **积分/订阅机制**: 用户对“积分月底清零”机制感到困惑和不满。痛点在于：**未使用的资源被强制回收**。建议产品侧优化订阅权益说明，或调整清零策略以减少用户挫败感。

## 8. 待处理积压
以下 Issue/PR 长期未获响应，建议关注：
- **PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (Dependabot)**: Electron 依赖升级（v40.2.1 -> v42.3.1）。该 PR 创建于 4 月，涉及核心框架升级，建议尽快评估兼容性并合并或关闭。
- **PR [#1463](https://github.com/netease-youdao/LobsterAI/pull/1463) (Stale)**: 修复长模态标题溢出问题。该 PR 已标记为 Stale，可能需要维护者重新审视其价值或关闭。
- **Issue [#2081](https://github.com/netease-youdao/LobsterAI/issues/2081)**: 需要官方人员介入回复订阅积分问题，避免负面情绪发酵。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-06-04)

## 1. 今日速览
Moltis 项目今日保持高强度的迭代节奏，过去 24 小时内连续发布了 2 个新版本，且 Issue 关闭数量（9 个）远超新增数量（5 个），显示出维护团队在修复历史债务和推进功能落地方面的强大执行力。社区贡献活跃，今日新增 4 个 PR，重点解决了 Telegram 交互体验、浏览器工具兼容性等关键问题。总体来看，项目处于快速迭代上升期，稳定性和可用性显著增强。

## 2. 版本发布
今日检测到 2 个新版本发布，版本号分别为 `20260603.01` 和 `20260602.05`。
- **更新推断**：虽然没有详细的 Release Notes，但结合今日大量关闭的 Bug Issue（如 #1037, #1045, #1052, #1054），可以推断这两个版本主要包含稳定性修复、UI 适配优化以及 Docker 环境下的功能修正。
- **破坏性变更**：暂无明显破坏性变更报告。
- **迁移建议**：建议所有用户，特别是 Docker 用户，尽快升级至 `20260603.01` 以修复文件发送、代码高亮及安全相关的问题。

## 3. 项目进展
尽管今日无 PR 合并记录，但维护者关闭了大量 Issue，表明近期代码变更已通过验证并发布。
- **功能修复与完善**：成功关闭了关于 **Vault 密码设置** (#1046)、**Skills 启用/禁用逻辑** (#1083) 以及 **自动会话标题生成** (#1053) 的关键 Bug，显著提升了核心功能的稳定性。
- **安全与体验**：修复了 **MCP Server 环境变量泄露** (#1054) 的安全隐患，以及 **亮色模式下代码块无高亮** (#1045) 的体验问题。
- **待合并 PR**：目前有 4 个功能增强与修复类 PR 待审核，包括 Telegram 流式输出优化 (#1099) 和浏览器工具 Shadow DOM 支持 (#1100)，预示着下一版本将在多渠道适配上更进一步。

## 4. 社区热点
今日社区关注点主要集中在跨平台兼容性和多渠道适配上：
- **[Issue #1097] Telegram 流式输出混淆问题**：由 @s-salamatov 提交，指出 Telegram 端的“编辑式”流式输出会将中间过程混入最终回复，影响阅读体验。社区已迅速响应，对应的修复 PR (#1099) 已提交。
  - 链接: [moltis-org/moltis Issue #1097](https://github.com/moltis-org/moltis/issues/1097)
- **[Issue #1101] 新增 SMS 和 LINE 渠道支持**：由 @joeblew999 提出，希望扩展 Moltis 的消息接入能力。这是一个典型的平台扩展需求，反映了用户希望将 Moltis 作为全渠道 AI 后台的诉求。
  - 链接: [moltis-org/moltis Issue #1101](https://github.com/moltis-org/moltis/issues/1101)

## 5. Bug 与稳定性
今日报告的新 Bug 主要集中在容器化环境与模型适配，部分已有修复方案：

**严重程度：高**
- **[Issue #1096] Docker 环境下 Read/Write/Edit 工具失效**：核心工具链在 Docker 中不可用，严重影响容器化部署用户的体验。目前暂无关联 PR，需优先关注。
  - 链接: [moltis-org/moltis Issue #1096](https://github.com/moltis-org/moltis/issues/1096)

**严重程度：中**
- **[Issue #1095] Podman 兼容性问题**：Podman 无法通过 Moltis 工作，限制了用户的容器选择范围。
  - 链接: [moltis-org/moltis Issue #1095](https://github.com/moltis-org/moltis/issues/1095)
- **[Issue #1097] Telegram 流式输出混淆**：体验类 Bug，已有 Fix PR (#1099)，预计短期内解决。
  - 链接: [moltis-org/moltis Issue #1097](https://github.com/moltis-org/moltis/issues/1097)

**严重程度：低**
- **[Issue #1094] 模型偏好设置问题**：模型选择逻辑存在异常。

## 6. 功能请求与路线图信号
- **多渠道扩展**：用户明确提出对 SMS 和 LINE 渠道的需求 (#1101)，表明 Moltis 正从单一的 Web/Telegram 客户端向多渠道消息处理平台演进。
- **浏览器自动化增强**：PR #1100 提议支持 Shadow DOM 穿透，这表明 Moltis 的 Agent 正在强化其对复杂现代网页（如 Salesforce 等）的操作能力，是企业级落地的重要信号。
  - 链接: [moltis-org/moltis PR #1100](https://github.com/moltis-org/moltis/pull/1100)
- **内部知识库集成**：Issue #1028 (Closed) 提出的 "Agent 开箱即用访问 Moltis 文档" 功能已关闭，暗示官方正在完善 Agent 的自我认知和文档检索能力，这对于用户快速上手和降低幻觉有重要意义。

## 7. 用户反馈摘要
- **Docker 部署痛点**：从 Issue #1096 和 #1037 (Closed) 的反馈来看，Docker 环境下的文件操作（send_image/document）和核心工具一直是用户的高频痛点，建议项目组加强容器化环境的集成测试。
- **UI 细节敏感**：用户对界面的细节（如亮色模式代码高亮 #1045、模型选择器适配 #1052）关注度较高，反映出 Moltis 的用户群体对交互体验有较高要求。
- **安全性关注**：用户主动报告了 MCP 配置中环境变量泄露给 LLM 的风险 (#1054, Closed)，体现了社区对安全性的敏锐度。

## 8. 待处理积压
建议维护者优先处理以下待定事项，以疏通开发堵点：
- **[PR #1099] Telegram 流式输出修复**：解决了关键体验问题，建议尽快 Review 合并。
  - 链接: [moltis-org/moltis PR #1099](https://github.com/moltis-org/moltis/pull/1099)
- **[Issue #1096] Docker 核心工具失效**：该问题导致核心功能不可用，目前处于 Open 状态，建议排查优先级。
  - 链接: [moltis-org/moltis Issue #1096](https://github.com/moltis-org/moltis/issues/1096)
- **[PR #1093] 活动日志可见性设置**：增加了细粒度的日志控制，是一个完善治理功能的 PR，建议纳入下一版本规划。
  - 链接: [moltis-org/moltis PR #1093](https://github.com/moltis-org/moltis/pull/1093)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 - 2026-06-04

## 1. 今日速览
CoPaw (QwenPaw) 项目今日保持**高活跃度**，社区互动频繁。过去24小时内，Issues 更新量达 44 条，PR 更新量达 45 条，且关闭/合并数与新增数基本持平（Issues 关闭 21/活跃 23，PR 合并/关闭 22/待合并 23），显示出维护团队处理反馈的高效吞吐能力。今日重点集中在**稳定性修复**（特别是上下文压缩与记忆系统）和**插件生态增强**。虽然无新版本发布，但多个关键修复 PR 已合并，预示着下个版本将显著提升系统稳定性。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
今日共有 22 个 PR 被合并或关闭，重点推进了以下领域：

- **核心稳定性修复**：
    - 修复了上下文压缩中因非字典类型 `source` 对象导致的崩溃问题 ([PR #4933](https://github.com/agentscope-ai/QwenPaw/pull/4933))，解决了多条相关 Issue 报错。
    - 修复了 Dream Agent 在工作区切换时路径解析错误，导致覆盖其他工作区 `MEMORY.md` 的严重 Bug ([PR #4936](https://github.com/agentscope-ai/QwenPaw/pull/4936))。
    - 更新了 `reme-ai` 依赖至 0.3.1.10，修复了文件监控器的重启可靠性问题 ([PR #4935](https://github.com/agentscope-ai/QwenPaw/pull/4935))。

- **功能增强与体验优化**：
    - **技能市场**：增加了技能包下载文件的大小上限，解决了大体积技能包下载失败的问题 ([PR #4941](https://github.com/agentscope-ai/QwenPaw/pull/4941))。
    - **访问控制**：在访问控制系统中增加了 `username` 字段，优化了用户身份识别机制 ([PR #4897](https://github.com/agentscope-ai/QwenPaw/pull/4897))。
    - **插件系统**：合并了插件卸载钩子与验证器导入修复，为插件生态稳定性打下基础 ([PR #4794](https://github.com/agentscope-ai/QwenPaw/pull/4794))。

- **测试覆盖**：
    - 合并了 Channel 模块的测试框架与契约测试 ([PR #1837](https://github.com/agentscope-ai/QwenPaw/pull/1837))，显著提升了多通道接入的可靠性保障。

## 4. 社区热点
今日讨论最活跃的话题集中在**浏览器工具集成**与**记忆/进化机制**：

1.  **[Bug] browser_use 启动失败与浏览器闪退** ([Issue #4919](https://github.com/agentscope-ai/QwenPaw/issues/4919))
    - **热度**：评论 6 条。
    - **分析**：用户在使用 `browser_use` 工具时遭遇 CDP 超时和浏览器闪退，涉及 Playwright 版本兼容性及 Windows 环境配置问题。这反映了当前 Agent 接管浏览器的环境依赖复杂，用户急需更健壮的默认配置或更清晰的错误指引。

2.  **[Feature] 自我进化功能探讨** ([Issue #3470](https://github.com/agentscope-ai/QwenPaw/issues/3470), [Issue #3516](https://github.com/agentscope-ai/QwenPaw/issues/3516))
    - **热度**：评论 6 条 & 4 条。
    - **分析**：社区对 Agent 的“自我进化”能力（类似 Hermes Agent）抱有极高期待，希望模型能自主优化记忆和行为。维护者关闭了部分重复或规划中的 Issue，表明该方向已在路线图考量中，但尚未有具体落地时间表。

3.  **[Bug] ChromaDB Rust binding 崩溃与向量库膨胀** ([Issue #3854](https://github.com/agentscope-ai/QwenPaw/issues/3854), [Issue #4795](https://github.com/agentscope-ai/QwenPaw/issues/4795))
    - **热度**：评论 5 条 & 3 条。
    - **分析**：ChromaDB 的底层依赖导致进程直接 SIGSEGV 崩溃，以及向量索引无限膨胀至 37GB 的问题，严重影响了长期运行的稳定性。这是目前存储层最棘手的痛点。

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及记忆管理、上下文处理和桌面端体验，按严重程度排序如下：

- **严重 - 进程崩溃/数据风险**：
    - **ChromaDB Segfault**: Linux 下 Rust binding 导致整个 Agent 进程崩溃，无 Python 层异常捕获 ([Issue #3854](https://github.com/agentscope-ai/QwenPaw/issues/3854))。
    - **向量索引膨胀**: 长期使用后索引文件膨胀至 37GB 导致 `memory_search` 卡死崩溃 ([Issue #4795](https://github.com/agentscope-ai/QwenPaw/issues/4795))。
    - **Dream Agent 覆盖文件**: 已修复 ([PR #4936](https://github.com/agentscope-ai/QwenPaw/pull/4936))，此前版本可能导致非预期工作区的数据覆盖。

- **中等 - 功能不可用**：
    - **Tauri 桌面版插件加载器失效**: 插件系统初始化失败，导致无法安装/启用插件 ([Issue #4889](https://github.com/agentscope-ai/QwenPaw/issues/4889))。目前已有修复 PR 待合并 ([PR #4900](https://github.com/agentscope-ai/QwenPaw/pull/4900))。
    - **技能市场下载失败**: 大于 5MB 的技能包下载报错 422 ([Issue #4928](https://github.com/agentscope-ai/QwenPaw/issues/4928))。**已修复** ([PR #4941](https://github.com/agentscope-ai/QwenPaw/pull/4941))。

- **一般 - 逻辑错误**：
    - **上下文压缩失败**: 处理内联 `source` URL 时报错 `'str' object has no attribute 'get'` ([Issue #4811](https://github.com/agentscope-ai/QwenPaw/issues/4811), [Issue #4924](https://github.com/agentscope-ai/QwenPaw/issues/4924))。**已修复** ([PR #4933](https://github.com/agentscope-ai/QwenPaw/pull/4933))。
    - **`/compact` 忽略模型配置**: 手动压缩命令未读取模型设定的 512K 上下文限制，仍使用默认 128K ([Issue #4937](https://github.com/agentscope-ai/QwenPaw/issues/4937))。

## 6. 功能请求与路线图信号
- **记忆与上下文管理优化**：用户强烈请求**无损上下文压缩** ([Issue #4551](https://github.com/agentscope-ai/QwenPaw/issues/4551)) 和**图片/附件不占用上下文** ([Issue #4921](https://github.com/agentscope-ai/QwenPaw/issues/4921))。现有的压缩机制导致信息丢失过多，且 Base64 图片严重浪费 Token，这是当前 Agent 长期运行的主要瓶颈。
- **插件系统扩展**：新增 OpenSandbox 插件支持 ([PR #4934](https://github.com/agentscope-ai/QwenPaw/pull/4934))，表明项目正在加强 Agent 执行环境的安全隔离与灵活性。
- **会话管理改进**：请求支持**会话结束自动总结归档** ([Issue #4640](https://github.com/agentscope-ai/QwenPaw/issues/4640))，解决 Agent 任务结束后忘记记录的问题，目前已有相关讨论但无明确 PR。

## 7. 用户反馈摘要
- **痛点**：用户普遍反映**记忆系统（Memory）** 令人爱恨交织。一方面希望能记住更多，另一方面遭遇索引膨胀、崩溃和记忆文件管理混乱（如 Dream Agent 未正常沉淀）。
- **场景**：Windows 桌面端用户较多，遇到权限问题（备份失败）和路径限制（代码模式无法访问其他盘）。
- **满意度**：维护团队响应迅速，对于明确的 Bug（如上下文压缩报错、技能下载限制）能在当日或次日给出修复 PR，社区对此表示认可。

## 8. 待处理积压
以下重要 Issue 长期未得到有效解决或响应，建议维护者优先关注：

1.  **[Bug] ChromaDB 崩溃与内存泄漏** ([Issue #3854](https://github.com/agentscope-ai/QwenPaw/issues/3854)): 涉及底层依赖的稳定性，严重影响 Linux 用户体验。
2.  **[Bug] 向量索引无限膨胀** ([Issue #4795](https://github.com/agentscope-ai/QwenPaw/issues/4795)): 存储层面的重大缺陷，缺乏自动清理或压缩机制。
3.  **[Feature] 无损上下文压缩** ([Issue #4551](https://github.com/agentscope-ai/QwenPaw/issues/4551)): 长期对话场景的核心需求，目前尚无明确解决方案。
4.  **[Feature] 支持删除单条消息** ([Issue #4001](https://github.com/agentscope-ai/QwenPaw/issues/4001)): 前端交互的高频需求，自 5 月初提出至今未实现。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-06-04)

## 1. 今日速览
ZeptoClaw 项目今日整体处于**自动化维护模式**，人工参与度较低。过去 24 小时内，项目未产生新的人工提交、Issue 反馈或版本发布，所有活动均源自 `dependabot[bot]` 的自动化依赖更新。系统一次性提交了 **16 个依赖升级 PR**，覆盖了后端 Rust 核心、前端 Web 界面以及 CI/CD 工作流三大模块。虽然缺乏功能性迭代，但大规模的依赖同步表明项目正在积极消除技术债务，确保构建环境与上游生态保持一致。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日无合并或关闭的 PR，项目功能代码层面暂无实质性推进。所有进展集中在依赖库的版本迭代上，共有 16 个待合并的 PR 处于 Open 状态：

*   **核心基建升级**：
    *   Rust 工具链版本升级：准备从 `1.95-slim-trixie` 迁移至 `1.96-slim-trixie` ([PR #613](https://github.com/qhkm/zeptoclaw/pull/613))。
    *   异步运行时维护：Tokio 更新至 `1.52.3`，修复了潜在问题 ([PR #623](https://github.com/qhkm/zeptoclaw/pull/623))。
*   **前端生态更新**：
    *   UI 框架：React 相关包更新 ([PR #616](https://github.com/qhkm/zeptoclaw/pull/616))。
    *   样式工具：TailwindCSS 升级至 `4.3.0` ([PR #619](https://github.com/qhkm/zeptoclaw/pull/619))。
    *   文档站点：Astro 框架修复性更新至 `6.3.7` ([PR #615](https://github.com/qhkm/zeptoclaw/pull/615), [PR #614](https://github.com/qhkm/zeptoclaw/pull/614))。
*   **CI/CD 流程优化**：
    *   Docker 相关 Action 全线更新，包括 `login-action` ([PR #628](https://github.com/qhkm/zeptoclaw/pull/628))、`build-push-action` ([PR #622](https://github.com/qhkm/zeptoclaw/pull/622)) 等，旨在保障构建流程的安全性与稳定性。

## 4. 社区热点
今日无用户讨论或人工发起的 Issue/PR。所有动态均来自自动化机器人，缺乏社区互动数据。

## 5. Bug 与稳定性
今日无用户报告的新 Bug。但在依赖更新日志中包含以下稳定性修复信号，建议维护者关注：

*   **Tokio 修复** ([PR #623](https://github.com/qhkm/zeptoclaw/pull/623))：上游 `tokio` 版本更新日志提及了 "Fixed" 内容，合并此 PR 可能有助于提升异步任务的稳定性。
*   **rpassword 修复** ([PR #625](https://github.com/qhkm/zeptoclaw/pull/625))：更新日志显示修复了 "Unicode parsing" 问题，对于涉及密码输入的场景具有实际意义。
*   **serde_json 修正** ([PR #627](https://github.com/qhkm/zeptoclaw/pull/627))：新版本 Reject 了非字符串 enum object keys，属于严格的类型约束修正，需确保现有代码无此模式以防引入破坏性变更。

## 6. 功能请求与路线图信号
无。今日无功能请求相关的 Issues 或 PRs。

## 7. 用户反馈摘要
无。过去 24 小时内无 Issue 产生，暂无用户反馈可供分析。

## 8. 待处理积压
项目当前积压了 **16 个待合并的 Dependabot PR**。虽然这些大多属于低风险的补丁更新，但数量较多，建议维护者尽快分批处理：

*   **优先级推荐**：建议优先合并 `tokio` ([PR #623](https://github.com/qhkm/zeptoclaw/pull/623)) 与 `rust` 基础镜像 ([PR #613](https://github.com/qhkm/zeptoclaw/pull/613)) 的更新，以确保编译环境与核心依赖的稳定。随后处理前端与 CI 相关的低风险更新。
*   **风险提示**：`serde_json` 的更新 ([PR #627](https://github.com/qhkm/zeptoclaw/pull/627)) 涉及行为变更，建议在合并前运行完整测试套件，确认无破坏性影响。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-06-04)

## 1. 今日速览
EasyClaw 项目今日整体呈现“低交互、高迭代”的状态。过去 24 小时内，社区交互端（Issues 与 PR）保持静默，无新增或活跃的公开讨论；然而，代码端却并未停滞，维护者连续发布了 v1.8.28 和 v1.8.29 两个版本，显示出项目正处于密集的修复与优化周期。此次更新重点聚焦于 AI 模型视觉能力的 API 适配与客户端稳定性修复。总体而言，项目核心开发活跃度高，功能迭代紧贴技术前沿（多模态支持），但社区反馈渠道今日较为冷清。

**项目地址**：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

## 2. 版本发布
今日项目连续发布了两个重要更新版本，主要针对云模型调用与桌面端稳定性进行修复。

### v1.8.29: RivonClaw v1.8.29
**发布时间**：2026-06-04
**更新重点**：视觉能力修复与生产环境部署
*   **核心修复**：修正了 RivonClaw 云模型视觉输入的载荷格式，解决了图像感知请求无法正确路由的问题。
*   **客户端对齐**：确保桌面端云模型调用与最新的视觉 API 契约保持一致，修复了潜在的兼容性问题。
*   **部署优化**：刷新了桌面版发布元数据的签名，为生产环境自动更新做好准备。

**链接**：[v1.8.29 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.29)

### v1.8.28: RivonClaw v1.8.28
**发布时间**：2026-06-04
**更新重点**：数据同步、会话隔离与客服系统加固
*   **稳定性增强**：通过锚定消息 ID 重试机制，加固了客服待调度恢复逻辑，防止消息丢失或重复处理。
*   **启动修复**：修复了启动时的云模型同步问题，并确保桌面端会话在各次运行间完全隔离，提升隐私安全性。
*   **调试支持**：优化了客服会话状态处理，并引导 Telegram 调试媒体发送功能。

**链接**：[v1.8.28 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.28)

---

## 3. 项目进展
今日无公开的合并或关闭 PR 记录。
根据版本发布频率推测，项目当前的开发模式可能以内部审查或私有分支合并为主，随后直接发布 Release。尽管公开 PR 活动为 0，但从版本日志可以看出，项目在 **多模态 AI 交互**（视觉输入）和 **跨平台会话管理** 方面取得了实质性进展，核心功能正迅速趋于稳定。

---

## 4. 社区热点
今日无活跃的 Issues 或 Pull Requests。
社区端今日处于“静默期”，暂无热门讨论话题。这通常意味着当前版本满足大部分用户需求，或用户尚未对新发布的 v1.8.28/29 版本进行广泛测试反馈。

---

## 5. Bug 与稳定性
今日无用户提交的新 Bug 报告，但根据 Release Notes，维护者主动修复了以下关键问题：

| 问题类型 | 描述 | 严重程度 | 修复状态 |
| :--- | :--- | :--- | :--- |
| **功能缺陷** | RivonClaw 云模型视觉输入载荷格式错误，导致图像请求路由失败 | **高** (核心功能受阻) | **已修复** (v1.8.29) |
| **功能缺陷** | 启动时云模型同步失败 | 中 | **已修复** (v1.8.28) |
| **安全隐患** | 桌面端会话在多次运行间未完全隔离 | 中 | **已修复** (v1.8.28) |
| **逻辑缺陷** | 客服待调度恢复机制不稳定 | 中 | **已修复** (v1.8.28) |

---

## 6. 功能请求与路线图信号
今日无新增功能请求。
**从代码提交信号分析**：
*   **多模态能力深化**：v1.8.29 对“视觉输入”的紧急修复表明，项目正重点发力 AI Agent 的图像感知能力，未来版本可能会进一步优化多模态交互体验。
*   **企业级/客服场景**：v1.8.28 对客服调度和 Telegram 调试的支持，暗示 EasyClaw 正向更复杂的客服机器人或自动化助手场景拓展。

---

## 7. 用户反馈摘要
由于今日无 Issues 更新，暂无直接的用户反馈数据。建议关注未来 1-2 天内关于 v1.8.29 视觉功能修复后的用户实际体验反馈。

---

## 8. 待处理积压
今日无长期未响应的重要 Issue 或 PR 提醒。项目当前的维护重心显然集中在最近的两个版本发布上，积压风险较低。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*