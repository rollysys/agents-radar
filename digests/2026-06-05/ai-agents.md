# OpenClaw 生态日报 2026-06-05

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-06-05 04:02 UTC

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

# OpenClaw 项目动态日报 (2026-06-05)

## 1. 今日速览
OpenClaw 项目今日呈现出**极高的社区活跃度与修复迭代速度**。过去 24 小时内共有 500 条 Issue 更新（新增 351 条）和 500 条 PR 更新，显示出社区反馈极为热烈。然而，Issue 新增数量远超关闭数量（351 vs 149），且待合并 PR 堆积达到 399 条，表明项目正处于功能密集开发与问题集中爆发的并行期。今日重心集中在 **SQLite 迁移架构讨论**、**新版本升级导致的数据丢失风险（Cron 状态）** 以及 **多渠道消息丢失/连接稳定性** 的修复上。

## 2. 版本发布
*   本日无新版本发布。

## 3. 项目进展
今日项目主要在**稳定性修复**与**架构重构**两个方面取得进展，ClawSweeper 机器人正在积极推进自动化合并：

*   **关键修复合并**：
    *   **Mattermost 集成修复**：PR [#90389](https://github.com/openclaw/openclaw/pull/90389) 已关闭，修复了 Slash commands 持续返回 503 "not yet initialized" 的严重回归问题。
    *   **OpenAI 流兼容性**：PR [#90399](https://github.com/openclaw/openclaw/pull/90399) 已关闭，解决了 ChatGPT Responses SSE 流因缺少 `content-type` 头导致的连接错误，保障了 GPT-5.x 接入的稳定性。
    *   **Node 24 崩溃修复**：Issue [#84820](https://github.com/openclaw/openclaw/issues/84820) 相关修复已合并，解决了 Node ≥ 24 环境下 Session 锁文件句柄未关闭导致的 Gateway 崩溃问题。

*   **架构与功能推进**：
    *   **SQLite 迁移方案落地**：Issue [#88838](https://github.com/openclaw/openclaw/issues/88838) 正在推进核心 Session/Transcript 向 SQLite 迁移的“抽象分支”策略，旨在降低大规模重写的风险。
    *   **自动化测试增强**：PR [#68433](https://github.com/openclaw/openclaw/pull/68433) 已关闭，引入了镜像出站会话预热机制，减少首次回调的冷启动延迟。

## 4. 社区热点
今日社区讨论集中在**连接稳定性**与**数据安全**两个核心痛点：

*   **[最热] Slack 连接静默丢失** ([#72808](https://github.com/openclaw/openclaw/issues/72808))：讨论数 20。
    *   **诉求**：用户反馈 Slack 连接会静默失效，导致消息无响应，需重启才能恢复。这直接影响了生产环境的可用性信任度。
*   **[高危] 升级导致 Cron 任务清空** ([#90072](https://github.com/openclaw/openclaw/issues/90072))：讨论数 5，新建 Issue。
    *   **诉求**：用户报告升级至 2026.6.1 版本时，SQLite 迁移过程静默清除了 44/45 个 Cron 任务。这是一个严重的破坏性变更，引发了社区对数据迁移安全性的强烈担忧。
*   **[架构] 运行时迁移 QA 测试床** ([#80171](https://github.com/openclaw/openclaw/issues/80171))：讨论数 15。
    *   **诉求**：维护者与社区正在构建 Codex-vs-Pi 运行时奇偶性测试框架，以应对未来核心 Runtime 的切换风险。
*   **[体验] Matrix 线程回复回归** ([#87307](https://github.com/openclaw/openclaw/issues/87307))：讨论数 13。
    *   **诉求**：Matrix 渠道的线程功能在 2026.5.22 版本中退化为普通回复，破坏了多轮对话的上下文完整性。

## 5. Bug 与稳定性
今日报告了多个影响核心功能的严重 Bug，部分已有修复方案：

*   **P1 级别 (严重)**：
    *   **OpenAI GPT-5.x 传输失败** ([#90083](https://github.com/openclaw/openclaw/issues/90083))：升级后 `openai-chatgpt-responses` 调用 `gpt-5.4/5.5` 时报错 `invalid_provider_content_type`。**状态**：已有 PR [#90533](https://github.com/openclaw/openclaw/pull/90533) 待合并。
    *   **Session 硬重置循环** ([#63216](https://github.com/openclaw/openclaw/issues/63216))：特定群组会话在高预留 Token 情况下仍反复触发硬重置，导致消息丢失。**状态**：Open，待修复。
    *   **Active-Memory 熔断污染** ([#90082](https://github.com/openclaw/openclaw/issues/90082))：内存插件熔断机制过于激进，且将错误提示注入到了主会话上下文中，影响模型理解。

*   **数据安全**：
    *   **Cron 任务迁移丢失** ([#90072](https://github.com/openclaw/openclaw/issues/90072))：SQLite 迁移逻辑缺陷导致计划任务被静默删除。**状态**：Open，需立即关注。

*   **体验回归**：
    *   **Telegram 话题回复被吞** ([#64810](https://github.com/openclaw/openclaw/issues/64810))：心跳/系统事件抢占并吞噬了用户的正常回复。

## 6. 功能请求与路线图信号
*   **敏感数据脱敏** ([#64046](https://github.com/openclaw/openclaw/issues/64046))：用户强烈请求在配置文件、日志及 UI 中对 API Key、Token 进行脱敏处理。目前配置文件为明文存储，存在安全隐患。
*   **多索引嵌入内存** ([#63990](https://github.com/openclaw/openclaw/issues/63990))：提议支持多索引嵌入以实现模型故障转移而不破坏向量空间，增强生产环境的容错能力。
*   **UI 插件化扩展** ([#71736](https://github.com/openclaw/openclaw/issues/71736))：RFC 提案正在讨论，旨在通过数据驱动的插槽机制支持 Plan Mode 等高级 UI 扩展。

## 7. 用户反馈摘要
*   **升级恐惧**：用户对近期版本升级表现出明显的抵触情绪，主要集中在“升级后配置迁移失败”和“数据（如 Cron 任务）丢失”的问题上。
*   **连接稳定性焦虑**：Slack 和 Telegram 频道的“静默丢失连接”或“回复被吞”是用户最痛恨的问题，因为这在生产环境中极难排查。
*   **Token 消耗增加**：部分用户反馈 Session Context 膨胀问题（[#67419](https://github.com/openclaw/openclaw/issues/67419)），Bootstrap 文件在多轮对话中重复注入，导致 Token 浪费严重。

## 8. 待处理积压
*   **高优先级积压**：
    *   Issue [#72808](https://github.com/openclaw/openclaw/issues/72808) (Slack 静默断连) 自 4 月底至今仍未解决，评论数极高，建议官方优先排期。
    *   Issue [#65161](https://github.com/openclaw/openclaw/issues/65161) (Heartbeat 隔离模式卡顿) 涉及核心执行逻辑，需 Maintainer 重点关注。
*   **PR 积压风险**：目前有 **399 个 PR 处于待合并状态**，建议团队在 ClawSweeper 自动化合并的基础上，增加人工 Review 力度，避免积压导致分支冲突加剧。

---

## 横向生态对比

# AI 智能体与个人助手开源生态日报 (2026-06-05)

## 1. 生态全景
个人 AI 助手与智能体开源生态正处于**从功能爆发向稳定性与架构重构转型的关键期**。头部项目面临规模化带来的连接稳定性与数据迁移风险，而中坚力量则在积极补齐企业级功能（RBAC、桌面端、沙箱执行）。多渠道适配仍是最易碎的环节，协议变更（如 WhatsApp LID）导致大量静默故障。总体而言，生态正经历"成长的阵痛"，重心正从单纯的能力接入转向架构健壮性与生产环境可用性。

## 2. 各项目活跃度对比

| 项目名称 | Issues 动态 | PRs 动态 | Release 情况 | 健康度评估 | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 新增 351 / 更新 500 | 更新 500 / 积压 399 | 无 | ⚠️ **高危** | 迁移风险、连接静默丢失、PR积压 |
| **NanoBot** | 新增 1 / 关闭 5 | 合并 59 / 更新 73 | 无 | ✅ **优秀** | 架构重构、桌面端、企业认证、高效率 |
| **Zeroclaw** | 更新 33 | 更新 50 / 合并 7 | 无 | 🟢 **良好** | Web Gateway、可观测性、Windows兼容 |
| **Hermes Agent** | 新增 47 / 关闭 3 | 待处理 41 | 无 | 🟡 **中等** | 桌面端崩溃、中文输入法、RBAC需求 |
| **PicoClaw** | 关闭 4 / 更新 7 | 合并 12 / 更新 22 | Nightly Build | 🟢 **良好** | PID崩溃修复、SDK适配、渠道路由 |
| **NanoClaw** | 新增 1 | 合并 3 / 更新 8 | 无 | 🟢 **良好** | WhatsApp LID、Signal修复、协议适配 |
| **IronClaw** | 更新 41 | 更新 50 / 合并 15 | 无 | 🟢 **良好** | 架构重构、子智能体、触发器生命周期 |
| **LobsterAI** | 新增 1 | 更新 16 / 清理 Stale | v2026.5.28 | 🟢 **良好** | Kit市场、MCP性能、代码清理 |
| **CoPaw** | 新增/活跃 16 / 关闭 17 | 合并 20 | v1.1.11-beta.1 | ✅ **优秀** | 子代理协作、沙箱执行、内存泄漏 |
| **Moltis** | 新增 1 | 更新 3 (未合并) | 无 | 🔵 **平稳** | 浏览器自动化、本地STT、Telegram体验 |
| **EasyClaw** | 无动态 | 无动态 | v1.8.30 | 🔵 **平稳** | 连接重连、媒体缓存、垂直场景 |

> **注**：健康度评估基于 Issue 解决速度、PR 积压情况及严重 Bug 的数量。

## 3. OpenClaw 在生态中的定位

作为生态中的**核心参照项目**，OpenClaw 展现出了典型的"规模化困境"特征。

*   **规模与复杂度**：OpenClaw 的 Issue 与 PR 活跃度远超其他项目（单日更新 500+），拥有最庞大的社区反馈与功能覆盖面。这使其成为行业事实上的功能基准，但也背负了沉重的历史包袱。
*   **技术路线对比**：相比于 NanoBot 的"高效重构"和 IronClaw 的"底层架构探索"，OpenClaw 目前正深陷于**数据库迁移** 与 **多渠道连接维护** 的泥潭。其 SQLite 迁移导致的数据丢失风险（Cron 任务清空）在社区引发了信任危机。
*   **社区现状**：虽然社区规模最大，但出现明显的"供需失衡"。399 个待合并 PR 表明维护者处理能力达到瓶颈，Issue 新增远超关闭数量显示社区焦虑在累积。相比之下，NanoBot 和 CoPaw 展现了更健康的社区响应速度。

**优势**：功能最全、生态最广、接入渠道最多。
**劣势**：迭代风险高（数据迁移问题）、连接稳定性存疑（Slack/Telegram 静默丢失）、PR 堆积严重。

## 4. 共同关注的技术方向

通过横向对比，识别出以下跨项目的技术共振点：

1.  **架构重构与持久化迁移**
    *   **涉及项目**：OpenClaw, IronClaw, NanoBot。
    *   **诉求**：OpenClaw 的 SQLite 迁移与 IronClaw 的 Reborn 运行时迁移表明，随着 Agent 状态复杂化，传统的存储与调度架构已无法满足需求。社区正致力于解决核心 Session/Transcript 的持久化与迁移风险。

2.  **多渠道连接的稳定性**
    *   **涉及项目**：OpenClaw, NanoClaw, PicoClaw, Hermes Agent。
    *   **诉求**：协议层的微小变更（如 WhatsApp LID 寻址、Telegram 流式响应、Slack 连接保持）极易导致"静默失败"或"消息丢失"。这是目前生产环境最大的痛点，所有涉及 IM 接入的项目都在为此付出大量维护成本。

3.  **企业级权限与安全控制**
    *   **涉及项目**：Hermes Agent, Zeroclaw, CoPaw。
    *   **诉求**：Hermes Agent 社区强烈呼吁 RBAC 权限分级，Zeroclaw 讨论高危命令确认机制，CoPaw 引入沙箱执行。这标志着 Agent 正从"个人玩具"向"企业工具"演进，安全边界成为必选项。

4.  **桌面端体验**
    *   **涉及项目**：NanoBot, Hermes Agent, Zeroclaw。
    *   **诉求**：NanoBot 正在构建桌面 Shell，Hermes Agent 却深陷桌面端崩溃与 IME 兼容性问题。这反映出项目方正试图通过独立客户端降低用户门槛，但跨平台兼容性仍是主要障碍。

## 5. 差异化定位分析

| 维度 | **OpenClaw** (生态核心) | **NanoBot / CoPaw** (高效迭代派) | **IronClaw / Zeroclaw** (架构探索派) | **PicoClaw / NanoClaw** (垂直轻量派) |
| :--- | :--- | :--- | :--- | :--- |
| **核心目标** | 全功能、大而全的平台 | 快速响应、功能闭环 | 底层架构创新、运行时优化 | 特定渠道/场景的高性能适配 |
| **技术侧重** | 广泛的 Channel 集成 | 多 Agent 协作、桌面端 | Reborn 架构、可观测性 | 协议适配、轻量级部署 |
| **主要痛点** | 数据迁移风险、PR 积压 | 模型路由灵活性、UI 细节 | API 兼容性、测试覆盖率 | 渠道协议变更、输入法兼容 |
| **适用场景** | 复杂的企业级集成环境 | 个人开发者、小型团队部署 | 实验性架构、高定制化需求 | 垂直 IM 场景、边缘设备 |

## 6. 社区热度与成熟度

*   **快速迭代期**：
    *   **NanoBot, CoPaw**：Issue 闭环率极高，PR 合并迅速，功能迭代快且风险可控，社区处于良性循环。
    *   **IronClaw**：处于深度重构期，虽然无版本发布，但核心架构更新频繁，属于技术积累阶段。

*   **风险治理期**：
    *   **OpenClaw**：活跃度极高，但处于"救火"状态。严重的数据丢失 Bug 和连接静默失效问题使其处于成熟度倒退的风险中。
    *   **Hermes Agent**：桌面端的发布质量受挫，大量 P1 级 Bug 报告显示其 QA 流程面临挑战。

*   **稳健维护期**：
    *   **LobsterAI, EasyClaw**：发布节奏稳定，主要集中在细节优化和垂直场景加固，社区反馈平稳。

## 7. 值得关注的趋势信号

1.  **"静默失败"成为生产环境最大杀手**：
    *   OpenClaw 的 Slack/Telegram 静默丢消息、NanoClaw 的 WhatsApp Ack 421 错误均难以排查。**建议开发者**：在 Agent 系统中必须引入应用层的"心跳确认"与"投递回执"机制，不能仅依赖底层协议的连接状态。

2.  **本地化与边缘部署需求抬头**：
    *   Moltis 的本地 STT 引擎请求、PicoClaw 的 Nightly Build、Zeroclaw 的 Windows 兼容性修复均指向**隐私优先**和**本地算力利用**。云端模型虽然强大，但低延迟和隐私场景正在推动 Agent 运行时向本地回归。

3.  **Agent 协作从概念走向落地**：
    *   CoPaw 的 `spawn_subagent` 和 NanoBot 的 Hook 生命周期重构表明，多 Agent 协作模式已进入工程化阶段。**建议开发者**：关注任务委托、上下文隔离与结果回传的标准接口设计。

4.  **数据迁移的信任危机**：
    *   OpenClaw 的 Cron 任务丢失事件给全生态敲响警钟。在涉及本地存储迁移时，**必须实现"非破坏性迁移"（保留旧数据副本）**，任何破坏性变更都应具有显式的用户确认与回滚机制。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-05)

## 1. 今日速览
NanoBot 项目今日保持**极高的开发活跃度**，共有 73 个 PR 发生更新，其中 59 个已合并或关闭，显示出团队强大的代码审查与合并能力。Issues 方面，关闭了 5 个问题，仅新增 1 个活跃讨论，项目处于“高效产出与维护期”。今日重点集中在**架构重构**（Agent Hooks 生命周期）、**企业级功能支持**（Azure AAD 认证）以及**桌面端布局**（Desktop Shell 准备），整体健康度优秀，迭代速度快。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 59 个 PR 被合并或关闭，显著推进了以下核心功能与修复：

*   **架构重构与稳定性提升**：
    *   **Agent Hook 生命周期重构**：合并了 [PR #4176](HKUDS/nanobot PR #4176) 与 [PR #4194](HKUDS/nanobot PR #4194)，引入了 Run-level 的 Hook 上下文与快照机制，解决了状态累积问题，提升了 Agent 运行时的可观测性与控制力。
    *   **确定性测试改进**：合并了 [PR #4189](HKUDS/nanobot PR #4189)，消除了单元测试中的时间等待依赖，提升了 CI/CD 的稳定性。

*   **企业级集成与 Provider 支持**：
    *   **Azure AAD 认证支持**：合并了 [PR #4126](HKUDS/nanobot PR #4126)，正式支持 Azure OpenAI 基于 Azure Identity 的认证方式，解决了企业订阅禁止 API Key 认证的痛点。
    *   **Tool Call 兼容性修复**：合并了 [PR #3984](HKUDS/nanobot PR #3984)，修复了 OpenAI 兼容 API（如 GLM-4, Kimi）工具调用 ID 不匹配的问题。

*   **部署与工具链修复**：
    *   **UV 环境兼容**：合并了 [PR #4164](HKUDS/nanobot PR #4164)，修复了在 `uv tool` 安装环境下 WebUI CLI App 安装失败的问题，改善了开发者的工具链体验。

*   **已拒绝的变更**：
    *   [PR #4186](HKUDS/nanobot PR #4186)（敏感信息脱敏与大重构）与 [PR #4163](HKUDS/nanobot PR #4163)（WebUI Fork 功能）被关闭，显示出维护者对核心架构变更持审慎态度，倾向于更精细化的改进。

## 4. 社区热点
今日社区讨论最集中的区域在于功能扩展与现有架构的局限性：

*   **[Issue #912] 支持任务特定模型配置**：该 Issue 创建于 2 月，今日再次活跃。用户强烈希望能为不同任务（对话/工具/浏览）配置独立模型，而非全局单一模型。这反映了 Agent 应用场景复杂化后的必然需求。
    *   链接: [HKUDS/nanobot Issue #912](HKUDS/nanobot Issue #912)
*   **[PR #4195] 桌面端 WebUI 打磨**：该 PR 提出了构建首个开源桌面界面的计划，引起了关注。这标志着 NanoBot 可能即将推出独立的桌面客户端，脱离纯 Web/命令行模式。
    *   链接: [HKUDS/nanobot PR #4195](HKUDS/nanobot PR #4195)

## 5. Bug 与稳定性
今日修复了多个关键 Bug，同时也暴露了部分边缘场景的隐患：

*   **已修复 (Critical/High)**：
    *   **LLM 超时未触发 Fallback**：[Issue #1121](HKUDS/nanobot Issue #1121) 指出主模型 503/Timeout 时 Fallback 机制失效，导致 Agent 直接报错。该问题已在今日处理流程中关闭（可能伴随相关修复合并）。
    *   **WebUI CLI 安装失败**：[Issue #4158](HKUDS/nanobot Issue #4158) 修复了 `uv tool` 环境下的 pip 模块缺失问题。
    *   **OpenAI 兼容性 ID 错位**：[PR #3984](HKUDS/nanobot PR #3984) 修复了工具调用 ID 被错误替换导致的执行失败。

*   **待处理 (Medium)**：
    *   **微信/Telegram 私聊配对失败**：[PR #4197](HKUDS/nanobot PR #4197) 指出并修复了 Channel 层面的 DM 配对逻辑缺陷，目前已提交修复代码待合并。
    *   **工具调用验证宽松**：[PR #4190](HKUDS/nanobot PR #4190) 提出需加强工具调用的验证严格度，防止“近似命中”或错误参数被执行。

*   **安全风险**：
    *   **符号链接逃逸风险**：[PR #4119](HKUDS/nanobot PR #4119) 仍在处理中，旨在防止通过相对符号链接跳出工作区目录，这是一个潜在的安全隐患。

## 6. 功能请求与路线图信号
*   **Desktop Client 路线图**：[PR #4195](HKUDS/nanobot PR #4195) 表明项目正在积极筹备桌面端应用，这将极大降低非技术用户的使用门槛。
*   **MCP 协议增强**：[PR #4192](HKUDS/nanobot PR #4192) 提议允许子代理继承主代理的 MCP 工具，这将大幅提升多 Agent 协作的灵活性，可能很快被合并。
*   **安全与脱敏**：虽然 [PR #4186](HKUDS/nanobot PR #4186) 被关闭，但“敏感信息脱敏”的需求依然存在，预计后续会有更模块化的 PR 提交。

## 7. 用户反馈摘要
*   **痛点：模型路由单一**：用户希望对成本敏感型任务（如简单对话）和性能敏感型任务（如代码生成/浏览）使用不同模型，目前的单模型配置限制了灵活性。
*   **痛点：企业认证限制**：部分企业用户受限于 Azure 订阅策略，无法使用 API Key，对 AAD 认证支持需求迫切（今日已满足）。
*   **场景：国产模型接入**：用户尝试接入火山引擎（豆包/Seedream）、Kimi、GLM 等，暴露了部分 Provider 兼容性细节问题（如 #4196, #3984）。
*   **满意度**：用户对 `uv` 工具的支持表示关注，社区对工具链的现代化持积极态度。

## 8. 待处理积压
*   **[Issue #912] 任务特定模型配置**：该请求活跃度高且逻辑清晰，长期未关闭表明可能需要较大架构调整，建议维护者优先排期。
    *   链接: [HKUDS/nanobot Issue #912](HKUDS/nanobot Issue #912)
*   **[PR #4190] 工具调用严格化**：作为提升系统鲁棒性的关键改进，建议尽快审查合并。
    *   链接: [HKUDS/nanobot PR #4190](HKUDS/nanobot PR #4190)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-05)

## 1. 今日速览
Zeroclaw 项目今日保持极高的开发活跃度，过去 24 小时内 Issues 更新达 33 条，PR 更新达 50 条，显示社区与核心团队正在紧锣密鼓地推进 v0.8.0 版本的前期工作。重点聚焦于 Web Gateway 的管理功能增强（MCP/Plugins 仪表板）以及系统稳定性修复，尤其是 Windows 平台的兼容性和会话管理逻辑。虽然无新版本发布，但多个功能性 PR 已提交待合并，项目正处于功能迭代与缺陷修复的并行阶段。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 7 个 PR 被合并或关闭，另有大量 PR 处于活跃审查中，主要推进如下：

*   **Web 管理界面增强**：PR #7229 提交了 MCP、Skills、Plugins 和 Providers 的 Dashboard 标签页，旨在让用户告别手动编辑配置文件，提升易用性；PR #7230 将 "Scheduled Jobs" 重命名为 "Automations" 以统一术语。
*   **可观测性重构**：PR #7233 针对 Issue #7232 提出的 RFC，实施了结构化可观测性增强，引入了 OTel Trace 关联，解决了遥测上下文稀疏的问题。
*   **关键稳定性修复**：PR #7222 修复了 Web UI "Clear all" 仅清除前端而未清除后端会话历史的缺陷；PR #7221 修复了 Observability 遥测数据泄漏到聊天 WebSocket 导致 UI 渲染 "unknown" 卡片的问题。
*   **平台兼容性**：PR #7214 修复了 Windows 平台上 Claude Code 执行失败的问题（环境变量缺失）；PR #7237 修复了 TUI 输入框光标消失的问题。

## 4. 社区热点
今日讨论最活跃的 Issues 集中在架构扩展与底层能力支持上：

*   **[Feature]: computer-use support (#6909)**
    *   **热度**：评论 5 条 | 👍 0
    *   **分析**：社区强烈呼吁对标 OpenAI Codex/Peekaboo，增加屏幕截图与键鼠控制能力，以实现真正的 Desktop Automation。这标志着 Zeroclaw 正从 Chatbot 向 Action Agent 进化。
*   **[Feature][interop]: A2A Protocol Support (#3566)**
    *   **热度**：评论 5 条 | 👍 7
    *   **分析**：用户高度期待 Zeroclaw 能作为 A2A 协议节点与其他 Agent 互通。该功能被标记为 `status:accepted` 但目前处于 `status:blocked`，显示出架构层面的审慎。
*   **[Bug]: Ollama Provider call failed (#5962)**
    *   **热度**：评论 6 条
    *   **状态**：已关闭 (CLOSED)
    *   **分析**：这是一个 S1 级阻塞 Bug，影响 Tool 调用场景下的 Ollama 用户。其关闭意味着核心 Provider 稳定性得到了修复。

## 5. Bug 与稳定性
今日报告了多个影响工作流的 Bug，部分已有修复方案：

*   **S1 - Workflow Blocked (严重)**
    *   **[Bug]: zerocode Quickstart hardcodes model-provider alias to `default` (#7227)**：导致与现有 Provider 冲突，阻断新用户配置流程。暂无 Fix PR。
    *   **[Bug]: TUI freezes when daemon disconnects (#7125)**：Daemon 断开后 TUI 卡死，需强制退出。暂无 Fix PR。
    *   **[Bug]: Incorrect workspace_dir passed (#7236)**：导致 Agent 无法加载 data/skills/ 下的技能。暂无 Fix PR。

*   **S2 - Degraded Behavior (中等)**
    *   **[Bug]: Web UI "Clear all" wipes frontend only (#7126)**：刷新后历史记录"复活"，PR #7222 已提交修复。
    *   **[Bug]: Observability leaks onto chat WS (#7151)**：导致 UI 出现永久加载的 "unknown" 工具卡片，PR #7221 已修复。
    *   **[Bug]: WhatsApp Web mention_only ignores replies (#7225)**：群聊中直接回复 Bot 的消息被错误丢弃。

*   **Windows 平台专项**
    *   **[Bug]: Shell tool mangles double quotes (#7083)**：已关闭，确认为已修复或无效。
    *   **[Fix PR #7214]**：修复 Windows 下系统环境变量缺失导致的子进程执行失败。

## 6. 功能请求与路线图信号
结合 Issue 与 PR 动态，识别到以下信号：

*   **安全性与控制**：Issue #7155 提出为高危 Shell 命令增加"每次执行确认"的中间层级，反映用户在生产环境中对 Agent 自主性的担忧，预计将在 v0.8.0 版本中加强策略配置。
*   **Web UI 功能补齐**：Issue #7138 请求在 Web Chat 中支持文件上传/选择；Issue #7137 请求支持斜杠命令（PR #7223 已实现）。Web Gateway 正在快速追赶 TUI 的功能体验。
*   **Provider 能力精细化**：Issue #7100 提出按模型配置 `vision` 和 `context_window`，表明随着模型种类增多，用户需要更细粒度的能力控制以优化 Token 消耗和上下文压缩。

## 7. 用户反馈摘要
*   **痛点：配置冲突**：用户反馈 Quickstart 向导硬编码 `default` 别名导致配置冲突 (#7227)，希望提供更灵活的配置入口。
*   **痛点：Windows 体验**：Windows 平台的 Shell 引号处理和环境变量问题依然困扰部分用户 (#7083, #7214)，Windows 兼容性仍是短板。
*   **痛点：内存/历史管理**：Web UI 的历史记录清理不彻底 (#7126) 和 RPC Session 10分钟超时被回收 (#7179) 引起了用户注意，后者被确认为预期行为，但用户希望有更长的保持时间。
*   **认可**：社区对 Rust 实现的轻量级 Agent 运行时表示认可 (#7143)，但在 Shell 工具的重复调用逻辑上需要优化以避免无限循环。

## 8. 待处理积压
*   **v0.8.0 Release Blockers (#7112)**：作为版本发布的协调中心，此 Issue 需要持续关注，目前仍有大量 P1/P2 级问题待解决。
*   **Bulk revert recovery (#6074)**：关于恢复 153 个被回滚提交的审计工作仍在进行中 (`status:in-progress`)，涉及大量历史代码找回，需要更多贡献者参与。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-05)

## 1. 今日速览
Hermes Agent 今日社区活跃度显著升高，Issue 新增量远超关闭量（47 vs 3），显示用户反馈涌入速度超过目前的项目维护消化速度。桌面端 的稳定性成为今日焦点，尤其是针对中文输入法 (IME) 的兼容性问题频发。此外，关于 Gateway 权限控制的架构级功能请求引发了深度讨论。整体来看，项目处于快速迭代与功能扩展期，但桌面端的用户体验质量亟需提升，目前有大量 PR（41个）处于待合并状态，积压明显。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
今日共有 **9 个 PR 合并/关闭**，主要集中在桌面端体验优化、文档完善及网关功能增强：
- **功能增强**：
  - [PR #8219](https://github.com/NousResearch/hermes-agent/pull/8219) 合并：实现了 Gateway 模式下 MCP 连接配置变更的自动重载，提升了网关运维便利性。
  - [PR #4756](https://github.com/NousResearch/hermes-agent/pull/4756) 合并：新增了查询 Nous Subscription 余额的技能。
  - [PR #39544](https://github.com/NousResearch/hermes-agent/pull/39544) 合并：桌面端模型列表展示数量由 5 个提升至 50 个。
- **修复与维护**：
  - [PR #38844](https://github.com/NousResearch/hermes-agent/pull/38844) 合并：修复了桌面端 OAuth 登录流程中过期的错误提示残留问题。
  - [PR #39270](https://github.com/NousResearch/hermes-agent/pull/39270) 合并：更新了桌面端安装路径的官方文档说明。
- **进行中**：飞书 SDK 迁移 ([PR #25705](https://github.com/NousResearch/hermes-agent/pull/25705)) 与中文国际化支持 ([PR #38241](https://github.com/NousResearch/hermes-agent/pull/38241)) 仍在活跃开发中，尚未合并。

## 4. 社区热点
- **[Issue #527](https://github.com/NousResearch/hermes-agent/issues/527) [Feature]: Gateway Permission Tiers**  
  **热度：👍 2 | 评论：10**  
  **分析**：这是今日讨论最深度的 Issue。作者 @teknium1 提议将目前的二元授权模型升级为基于角色的访问控制（RBAC），支持 Owner/Admin/User/Guest 四级权限。由于目前 Gateway 缺乏细粒度权限控制，社区对该需求反响强烈，该功能若实现将极大提升 Hermes 在多用户场景下的可用性与安全性。

- **[Issue #39534](https://github.com/NousResearch/hermes-agent/issues/39534) [Bug]: Hermes Desktop Windows 截断中文提示词**  
  **热度：评论：6**  
  **分析**：Windows 客户端在处理中文输入时出现严重显示 Bug，用户输入的长文本被异常截断。结合其他 IME 相关 Issue，反映出桌面端对 CJK（中日韩）语言环境的兼容性测试不足。

## 5. Bug 与稳定性
今日报告的 Bug 集中在 **桌面端启动崩溃** 与 **非英语语言输入体验**，严重程度较高：

### 严重 (P1/P2) - 阻碍使用
- **[Issue #39505](https://github.com/NousResearch/hermes-agent/issues/39505) Desktop app boot-loop**：桌面端首次启动陷入无限启动循环，原因是 `uvicorn.supervisors` 模块缺失。**状态：待修复**。
- **[Issue #39503](https://github.com/NousResearch/hermes-agent/issues/39503) Desktop app fails to start**：后端无法识别 `--tui` 参数导致启动失败。**状态：待修复**。
- **[Issue #39525](https://github.com/NousResearch/hermes-agent/issues/39525) Gateway failed after network change**：切换网络环境（如更换 WiFi）后 Gateway 失效，影响移动办公场景。**状态：待修复**。

### 中等 (P2/P3) - 体验受损
- **[Issue #38826](https://github.com/NousResearch/hermes-agent/issues/38826) Chinese IME input broken (macOS)**：macOS 下中文输入法按回车会提交空内容，需按 Shift+Enter 才能正常输入。**状态：待修复**。
- **[Issue #39418](https://github.com/NousResearch/hermes-agent/issues/39418) CLI freezes on /reload-mcp**：执行重载 MCP 命令会导致终端死锁。**状态：待修复**。
- **[Issue #39550](https://github.com/NousResearch/hermes-agent/issues/39550) False context exhaustion**：上下文压缩逻辑误判，导致对话错误中断。**状态：待修复**。

### 修复中/已有 PR
- [PR #39545](https://github.com/NousResearch/hermes-agent/pull/39545) 修复了 `hermes doctor` 在 WSL 环境下的权限崩溃问题 ([Issue #39540](https://github.com/NousResearch/hermes-agent/issues/39540))。
- [PR #39547](https://github.com/NousResearch/hermes-agent/pull/39547) 修复了流式传输检测的误报问题。

## 6. 功能请求与路线图信号
- **RBAC 权限系统** ([Issue #527](https://github.com/NousResearch/hermes-agent/issues/527))：社区对多级权限管理的需求迫切，这是 Hermes 从个人助手转向团队协作工具的关键一步。
- **国际化支持** ([PR #38241](https://github.com/NousResearch/hermes-agent/pull/38241))：简体中文支持 PR 的出现，响应了今日大量关于中文输入和显示的 Bug 报告，预计将很快合并。
- **Memory 细粒度控制** ([Issue #39492](https://github.com/NousResearch/hermes-agent/issues/39492))：用户请求在保留 memory provider 的前提下禁用内置 memory tool，以满足多用户网关下的隐私隔离需求。
- **安装流程优化** ([Issue #39529](https://github.com/NousResearch/hermes-agent/issues/39529))：建议在受限网络环境下优先使用 ZIP 下载而非 Git Clone，以解决国内用户安装困难。

## 7. 用户反馈摘要
- **中文用户痛点集中**：多个 Issue 反馈桌面端在 Windows 和 macOS 下对中文输入法支持极差，包括输入截断、无法回车发送、IME 状态栏干扰等。
- **桌面端稳定性受质疑**：多个用户反馈 v0.15.1 版本存在启动失败、白屏、死循环等问题，Electron 包与 Python 后端的集成似乎存在版本兼容或打包缺陷。
- **安装门槛**：部分用户反馈在特定网络环境下（如公司防火墙、国内网络）安装过程卡死，建议改进安装脚本的重试机制和下载源策略。
- **远程开发需求**：用户希望桌面端能更好地支持连接远程后端实例，解决文件浏览器和终端显示本地路径而非服务端路径的问题 ([Issue #39553](https://github.com/NousResearch/hermes-agent/issues/39553))。

## 8. 待处理积压
- **PR 积压严重**：目前有 **41 个 PR 处于 Open 状态**，其中包含飞书 SDK 重构 ([PR #25705](https://github.com/NousResearch/hermes-agent/pull/25705))、中文国际化 ([PR #38241](https://github.com/NousResearch/hermes-agent/pull/38241)) 等重要更新。建议维护者尽快进行 Code Review 以疏通发布管道。
- **长期未解决 Issue**：
  - [Issue #527](https://github.com/NousResearch/hermes-agent/issues/527) 关于 RBAC 的讨论虽活跃，但尚无官方明确的开发计划指派。
  - 上下文压缩逻辑问题 ([Issue #39550](https://github.com/NousResearch/hermes-agent/issues/39550)) 可能影响 Agent 长期记忆和对话连续性，需尽快确认修复方案。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-05)

## 1. 今日速览
PicoClaw 项目今日保持高度活跃的开发状态，核心团队专注于修复 v0.2.9 版本引入的稳定性问题与构建系统缺陷。过去 24 小时内项目共处理了 22 个 PR（其中 12 个已合并）和 7 个 Issue（4 个已关闭），显示出维护者对社区反馈的快速响应能力。今日重点工作包括修复严重的 PID 崩溃循环问题、适配 Lark SDK 的破坏性更新以及解决 OneBot 适配器的路由错误。项目发布了最新的 Nightly Build 版本，包含了关键的稳定性修复。

## 2. 版本发布
- **nightly: Nightly Build (v0.2.9-nightly.20260605.5224b9a4)**
  - **类型**: 自动化构建版本
  - **注意事项**: 官方提示此版本可能不稳定，建议谨慎用于生产环境。
  - **链接**: [Release Page](https://github.com/sipeed/picoclaw/releases/tag/nightly)
  - **变更范围**: 包含了今日合并的 PID 校验逻辑修复、Lark SDK 适配以及构建脚本优化。

## 3. 项目进展
今日共有 **12 个 PR 被合并**，项目在稳定性和兼容性方面取得了实质性进展：

- **核心稳定性修复**：PR #3000 修复了单例 PID 检查逻辑，解决了因 PID 复用导致的网关崩溃循环问题（关联 Issue #2720）。PR #2999 和 #2976 修复了构建脚本中处理 Go 版本字符串空格的问题，确保了编译流程的顺畅。
- **API 兼容性适配**：PR #3008 成功适配了 Lark SDK v3.9.4 的破坏性变更，修复了编译错误；PR #3007 修复了 Codex OAuth 流中工具调用丢失的问题。
- **功能增强与修复**：PR #2996 增强了工具执行响应中的 JSON 错误处理，避免了静默失败。依赖项也得到了及时更新（AWS SDK, SQLite 等）。

## 4. 社区热点
- **Issue #2720** [[LINK]](https://github.com/sipeed/picoclaw/issues/2720): **[Bug] Singleton PID check crash loop**
  - **热度**: 👍 0 | 评论 8
  - **分析**: 该问题导致了严重的崩溃循环，引发了社区高度关注。维护者与用户详细讨论了进程身份验证的缺失问题，最终通过 PR #3000 彻底解决了这一隐患。
- **Issue #2968** [[LINK]](https://github.com/sipeed/picoclaw/issues/2968): **[Bug] /context token display confusion**
  - **热度**: 👍 1 | 评论 5
  - **分析**: 用户对压缩阈值显示逻辑感到困惑。开发者已在 PR #2985 中响应，增加了摘要触发阈值的显示，提升了上下文管理的透明度。

## 5. Bug 与稳定性
按严重程度排序：

1.  **🔴 Critical (已修复)**: **Issue #2720** - PID 文件残留导致网关启动崩溃。
    - *状态*: 已关闭，修复已合并 (PR #3000)。
2.  **🔴 Critical (已修复)**: **Issue #3006** - Codex OAuth GPT-5.5 模式下工具调用丢失。
    - *状态*: 已关闭，修复已合并 (PR #3007)。
3.  **🟠 High (待合并)**: **Issue #3002** - OneBot 群聊回复错误调用私聊接口。
    - *状态*: Open，已有修复 PR #3009 等待合并。
    - *影响*: 导致 NapCat 等适配器报错，群聊功能不可用。
4.  **🟠 Medium (待合并)**: **Issue #2968** - 上下文显示逻辑混淆。
    - *状态*: Open，已有修复 PR #2985 等待合并。
5.  **🟡 Medium (新报修)**: **Issue #3012** - Evolution 模式开启后持续消耗 Token。
    - *状态*: Open，尚无修复 PR。
    - *影响*: 静默消耗用户额度。

## 6. 功能请求与路线图信号
- **文档更新需求**: Issue #2981 指出 v0.2.9 变更较大，说明书需同步更新，表明项目正处于功能快速迭代期，文档滞后成为痛点。
- **原生模式支持**: PR #2934 (WhatsApp native mode) 和 PR #3009 (OneBot routing) 显示项目正在加强多渠道（IM Platform）的底层适配能力，试图解决群组/私聊路由混淆等底层逻辑问题。
- **安全配置体验**: PR #2956 试图解决安全配置覆盖启用状态的问题，反映出项目正在优化配置管理逻辑以提升易用性。

## 7. 用户反馈摘要
- **痛点 (Token 消耗)**: 用户 @xpader 报告开启 Evolution 后每分钟持续消耗 Token (#3012)，引发了对后台静默任务的担忧。
- **痛点 (群聊路由)**: 用户 @Xuan-Xuann 指出 OneBot 适配器将群号误判为用户 ID，导致无法正常回复群消息 (#3002)，影响了中文社区用户的接入体验。
- **痛点 (UI 混乱)**: 用户反馈升级 v0.2.9 后 Web UI 历史消息混乱 (#2972)，虽然该 Issue 已关闭，但结合 Token 消耗问题，暗示新版本在状态管理上可能存在回归缺陷。
- **正面反馈**: 针对崩溃循环问题 (#2720)，社区通过详细的日志分析协助开发者快速定位了 PID 复用问题，体现了良好的社区协作氛围。

## 8. 待处理积压
- **PR #2947** [stale] [[LINK]](https://github.com/sipeed/picoclaw/pull/2947): 修复 Claude-Sonnet-4.6 模型 ID 错误。该 PR 自 5 月 26 日开启至今未合并，建议维护者尽快 Review，以免影响 Anthropic 模型用户的正常使用。
- **PR #2934** [stale] [[LINK]](https://github.com/sipeed/picoclaw/pull/2934): 支持 WhatsApp 原生模式。该 PR 同样长期未更新，可能阻碍了特定渠道用户的接入。
- **Issue #3012** [[LINK]](https://github.com/sipeed/picoclaw/issues/3012): Evolution 模式下的持续扣费问题。这是一个新提出的严重问题，建议维护者优先排查。

---
*数据来源: GitHub PicoClaw Repository | 分析时间: 2026-06-05*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-05)

## 1. 今日速览
NanoClaw 项目今日保持高度活跃，核心聚焦于多渠道通信的稳定性修复与技术债务清理。过去24小时内共有 8 次 PR 更新，其中 3 个 PR 已合并/关闭，显示出维护者对代码质量严格把控的节奏。社区方面，虽然仅新增 1 条 Issue，但提交的 PR 涉及关键的 WhatsApp 和 Signal 渠道修复，表明项目正处于深度优化多平台适配性的阶段。整体来看，项目健康度良好，正在积极解决底层通信协议变更带来的挑战。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 3 个 PR 关闭/合并，显著提升了代码健壮性与类型安全：

*   **[CLOSED] fix: replace `as any` casts with proper BoomError type** ([PR #104](https://github.com/nanocoai/nanoclaw/pull/104))
    *   **进展**：成功移除了代码中的 `as any` 强制类型转换，引入了适配 `@hapi/boom` 的 `BoomError` 接口。
    *   **意义**：这是一项重要的技术债务清理，增强了 TypeScript 的类型安全性，特别是在处理 Baileys 断开连接错误时，有助于减少运行时类型错误的风险。
*   **[CLOSED] Fix/whatsapp self destruct and shutdown auth wipe** ([PR #2633](https://github.com/nanocoai/nanoclaw/pull/2633))
    *   **进展**：修复了 WhatsApp 适配器在 Baileys 7.x 版本下的两个结构性 Bug，解决了会话自毁和认证擦除问题。
    *   **意义**：显著提高了 WhatsApp 渠道的稳定性，解决了用户在配置电话号码时遇到的会话不可靠问题。
*   **[CLOSED] [follows-guidelines] Trip agent** ([PR #2687](https://github.com/nanocoai/nanoclaw/pull/2687))
    *   **进展**：该技能相关 PR 已关闭，未合入主分支。

## 4. 社区热点
今日活跃度主要体现在 PR 的提交与讨论上，而非 Issue 讨论。

*   **[Issue #2686 Traveling](https://github.com/nanocoai/nanoclaw/issues/2686)**
    *   **分析**：这是今日唯一的新开 Issue，内容为 "I want to travel to Canada"。结合关闭的 PR #2687 (Trip agent)，这可能是一个测试性 Issue 或用户提出的特定场景需求，目前尚无评论互动，热度较低。
*   **[PR #2688 WhatsApp LID 群组修复](https://github.com/nanocoai/nanoclaw/pull/2688)**
    *   **分析**：由 @mcaldas 提交，针对 WhatsApp 迁移至 LID (LinkedID) 寻址机制导致的 Bot 回复静默失败问题。这反映了社区对即时通讯平台协议变更的高度敏感，维护者正在积极跟进底层协议变化。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在多平台消息路由与协议适配，严重程度较高，且已有活跃的修复 PR：

*   **[严重] WhatsApp 群组消息发送失败 (Ack 421)** - **已有 Fix PR**
    *   **描述**：在 LID 寻址的群组中，Bot 回复静默失败，Baileys 报告 ack error 421。
    *   **状态**：已提交 [PR #2688](https://github.com/nanocoai/nanoclaw/pull/2688)，通过修复 JID 转换逻辑解决。
*   **[严重] Signal DM 消息丢失** - **已有 Fix PR**
    *   **描述**：由于路由器仅在 `isMention` 为 true 时创建 `messaging_groups`，Signal DMs 未设置该标志导致首条消息静默丢失。
    *   **状态**：已提交 [PR #2689](https://github.com/nanocoai/nanoclaw/pull/2689)，修正了 DMs 的 `isMention` 标志及平台 ID 前缀。
*   **[中等] 模型压缩后输出格式错乱**
    *   **描述**：自动压缩后，模型经常丢弃 `<message to="…">` 包裹纪律，导致输出格式错误。
    *   **状态**：[PR #2405](https://github.com/nanocoai/nanoclaw/pull/2405) 正在处理中，旨在修复压缩后向单一目的地传递未包裹输出的问题。

## 6. 功能请求与路线图信号
*   **本地语音转录功能**
    *   [PR #2459](https://github.com/nanocoai/nanoclaw/pull/2459) 提议为 Discord 及其他 Chat SDK 桥接渠道增加本地 whisper.cpp 语音转录功能。该功能无需云端 API，完全本地运行，符合当前隐私优先和降低成本的趋势。该 PR 目前处于 Open 状态，可能被纳入下一阶段的功能规划。
*   **Signal 功能增强**
    *   [PR #2685](https://github.com/nanocoai/nanoclaw/pull/2685) 更新了 Signal 相关文档，提及群组输入指示器、出站反应和引用回复修复，预示着项目对 Signal 平台的支持将更加完善和人性化。

## 7. 用户反馈摘要
*   **痛点**：用户在使用 WhatsApp 时遭遇静默失败，错误码 421 难以排查，这表明底层库 的升级对现有用户造成了迁移困扰。
*   **场景**：Issue #2686 显示用户尝试使用 AI 进行旅行规划，反映了个人助手在生活场景中的应用需求。
*   **技术反馈**：贡献者对类型安全的重视（PR #104）反映了开发者社区对代码质量的高要求，倾向于移除不安全的 `any` 类型。

## 8. 待处理积压
*   **[重要] PR #2405 压缩循环修复**：该 PR 创建于 5 月中旬，今日虽有更新但尚未合并。由于涉及模型上下文压缩后的核心行为，建议维护者优先审查，以防止长对话场景下的消息丢失或格式错乱。
*   **[长期] PR #2459 语音转录**：作为一项备受期待的功能，该 PR 已开启近三周，建议社区关注其合并进度。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-05)

## 1. 今日速览
IronClaw 项目在过去 24 小时内保持了极高的开发活跃度，共处理了 41 条 Issue 更新和 50 条 PR 更新。项目核心正处于深度架构重构阶段，重点围绕 **Reborn 运行时迁移**、**子智能体持久化机制** 以及 **触发器生命周期修复** 展开。虽然无新版本发布，但多个核心功能的合并表明项目正在快速迭代以解决架构债务。社区对 Reborn 架构下的 API 兼容性与工具调用可见性问题表现出高度关注。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 15 个 PR 被合并，显著推进了 Reborn 架构的落地与 WebUI 体验优化：

*   **Slack 集成与权限重构**：合并了 [PR #4476](https://github.com/nearai/ironclaw/pull/4476) 和 [PR #4478](https://github.com/nearai/ironclaw/pull/4478)，实现了 Slack Actor/Subject 旅程分离，并在 Slack 提示中增加了认证设置链接，完善了多渠道集成的权限模型。
*   **WebUI v2 体验优化**：[PR #4477](https://github.com/nearai/ironclaw/pull/4477) 重构了 LLM 提供商设置面板，按配置状态分组展示；[PR #4480](https://github.com/nearai/ironclaw/pull/4480) 修复了提供商分组的交互反馈问题。
*   **核心 Bug 修复**：[PR #4467](https://github.com/nearai/ironclaw/pull/4467) 修复了模型可见的 HTTP 结果预算问题，防止工具调用结果过大导致的溢出；[PR #4440](https://github.com/nearai/ironclaw/pull/4440) 解决了压缩延迟范围的处理逻辑，避免了非致命错误中断流程。
*   **触发器机制完善**：[PR #4466](https://github.com/nearai/ironclaw/pull/4466) 引入了触发器创建生命周期钩子，修复了触发器创建时的配对问题，为后续的一次性触发功能打下基础。
*   **安全性更新**：[PR #3719](https://github.com/nearai/ironclaw/pull/3719) 合并，解决了多个依赖库的安全公告，包括 rustls-webpki 的 CRL 解析恐慌漏洞。

## 4. 社区热点
今日讨论最热烈的问题集中在 Reborn 架构的边界情况与工具定义一致性上：

*   **[Issue #3280](https://github.com/nearai/ironclaw/issues/3280) [OPEN]**: **Add ProductWorkflow and InboundTurnService facade**
    *   **热度**：评论 6 条。
    *   **分析**：这是 Reborn 架构迁移的核心 Issue，旨在构建 ProductAdapters 与底层 Host 服务之间的门面层。高讨论量反映了架构设计的复杂性与社区对 API 形状的重视。
*   **[Issue #4424](https://github.com/nearai/ironclaw/issues/4424) [CLOSED]**: **builtin.spawn_subagent advertised but absent**
    *   **热度**：评论 4 条。
    *   **分析**：模型被告知存在某个工具，但实际调用列表中缺失，导致模型陷入"叙述性死循环"。该 Issue 已通过相关修复关闭，反映了在 OpenAI 兼容层实现中 Schema 定义与 Prompt 文本一致性的重要性。

## 5. Bug 与稳定性
今日报告了多个影响系统可用性与正确性的 Bug，部分已修复：

*   **[严重] 子智能体结果投递丢失** ([Issue #4084](https://github.com/nearai/ironclaw/issues/4084) [CLOSED]): 后台子智能体完成后结果无法传递给父节点。现已通过 [PR #4440](https://github.com/nearai/ironclaw/pull/4440) 等修复。
*   **[严重] 触发器策略失效** ([Issue #4420](https://github.com/nearai/ironclaw/issues/4420) [CLOSED]): `CompleteAfterFirstFire` 策略被存储但未被代码路径执行，导致触发器无限重跑。现已修复。
*   **[中等] 循环退出原因不可见** ([Issue #4427](https://github.com/nearai/ironclaw/issues/4427) [OPEN]): `LoopFailureKind` 仅持久化未记录日志，导致运维人员无法通过 `RUST_LOG` 定位循环退出原因。
*   **[中等] 模型网关错误分类错误** ([Issue #4311](https://github.com/nearai/ironclaw/issues/4311) [OPEN]): 预算超限被错误映射为上下文溢出，可能导致错误的上下文压缩而非终止操作。
*   **[待修复] 回归测试缺失** ([Issue #4431](https://github.com/nearai/ironclaw/issues/4431) [OPEN]): 呼吁增加测试以确保 `visible_capabilities` 与 `tool_definitions` 的一致性，防止类似 #4424 的回归。

## 6. 功能请求与路线图信号
社区与开发者正在积极规划下一阶段的功能边界：

*   **API 兼容性迁移**：[Issue #3283](https://github.com/nearai/ironclaw/issues/3283) 和 [PR #4459](https://github.com/nearai/ironclaw/pull/4459) 正在推进将 OpenAI 兼容 API 迁移至 Reborn 合约层，这是实现产品层与运行时解耦的关键一步。
*   **架构解耦**：[Issue #4470](https://github.com/nearai/ironclaw/issues/4470) 提议将 `ironclaw_reborn_composition` 拆分为独立的 Crates，以解决单一文件职责过重（超过 3000 行）的问题。
*   **WebUI 新手引导**：[PR #4481](https://github.com/nearai/ironclaw/pull/4481) 正在实现首次运行时的 LLM 提供商选择与 NEAR AI 登录流程，旨在降低新用户的配置门槛。
*   **触发器一次性运行**：[Issue #4473](https://github.com/nearai/ironclaw/issues/4473) 已关闭（已实现或已有替代方案），未来将支持一次性触发任务。

## 7. 用户反馈摘要
从 Issue 反馈来看，用户在使用 IronClaw 构建复杂智能体时面临的主要痛点集中在：

*   **可观测性不足**：用户在调试时难以获知 Agent Loop 退出的具体原因（如 Issue #4427），只能依赖数据库状态而非实时日志。
*   **工具调用不一致**：模型"幻觉"出工具但无法调用（Issue #4424）严重影响了用户体验，这通常发生在系统提示词与实际工具定义不同步时。
*   **后台任务可靠性**：子智能体的结果投递（Issue #4084）一直是痛点，今天的修复表明团队正在努力提升异步任务的稳定性。

## 8. 待处理积压
以下重要 Issue 长期未合并或需要持续关注：

*   **[PR #3951](https://github.com/nearai/ironclaw/pull/3951) [OPEN]**: Hooks 第三方扩展激活功能已挂起近两周，涉及复杂的隔离模型设计，建议维护者尽快推进 Review。
*   **[Issue #3280](https://github.com/nearai/ironclaw/issues/3280) [OPEN]**: 作为 P0 级别的架构设计 Issue，仍需持续迭代，建议关注其对后续 API 合约迁移的影响。
*   **[Issue #4427](https://github.com/nearai/ironclaw/issues/4427) [OPEN]**: 日志追踪缺失问题尚未有修复 PR，建议优先处理以改善运维体验。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-05)

## 1. 今日速览
LobsterAI 项目今日表现出极高的维护活跃度，核心焦点在于**版本发布落地与代码库健康度治理**。过去 24 小时内，项目成功合并了 `2026.5.28` 版本的重磅更新（含 Kit 市场、Cowork 分叉等 73 个提交），并同步推进了 MCP 启动性能优化、OpenClaw 网关稳定性修复等关键工作。值得注意的是，项目组今日集中关闭了 16 个 Pull Requests，其中包含大量过期的 Stale PR，显示出团队正在清理技术债务并整理开发分支。虽然新开 Issue 数量较少，但关于 OpenClaw 网关启动失败的问题值得监控。

## 2. 版本发布
虽然 GitHub Releases 列表暂无更新，但根据 PR 记录，**2026.5.28 版本已正式合并至主分支**。

*   **版本号**: 2026.5.28
*   **关联 PR**: [#2090](https://github.com/netease-youdao/LobsterAI/pull/2090)
*   **核心更新**:
    *   **新功能**: 上线 **Kit 专家套件市场**，支持获取、安装、卸载及元信息展示；Cowork 会话支持本地分叉；插件支持手动更新。
    *   **稳定性**: 修复了 MCP、Gateway、Artifacts 相关的多个稳定性问题。
    *   **影响范围**: 这是一个功能性大版本更新，建议用户关注 MCP 配置迁移及 Kit 市场的使用体验。

## 3. 项目进展
今日共有 16 个 PR 更新，其中大部分为功能迭代与代码重构，少部分为 Stale 清理。

*   **性能与体验优化**
    *   **MCP 启动加速**: [#2091](https://github.com/netease-youdao/LobsterAI/pull/2091) 针对 `npx` 启动的 MCP 进行了预解析与本地安装优化，避免了每次会话的慢路径启动，显著提升首响速度。
    *   **语音模块重构**: [#2111](https://github.com/netease-youdao/LobsterAI/pull/2111) 将语音输入模块（ASR、WAV 编码、录音等）进行了拆解，解耦了 Cowork 组件，提升了代码可维护性。

*   **关键 Bug 修复**
    *   **大文件载荷防护**: [#2110](https://github.com/netease-youdao/LobsterAI/pull/2110) 修复了 OpenClaw 网关因图片载荷过大导致的发送失败问题，增加了预估与错误分类机制。
    *   **MiniMax 模型支持**: [#2093](https://github.com/netease-youdao/LobsterAI/pull/2093) 修复了 MiniMax-M3 模型硬编码不支持图片输入的问题，解锁了多模态能力。
    *   **MCP 环境修复**: [#2100](https://github.com/netease-youdao/LobsterAI/pull/2100) 修复了托管安装 MCP 时的 Node 环境路径注入问题，增强了兼容性。
    *   **安全性**: [#2103](https://github.com/netease-youdao/LobsterAI/pull/2103) 增加了对 MCP 远程服务器 URL 的校验，防止无效配置。

*   **技术债务清理**
    *   今日关闭了约 10 个标记为 `[stale]` 的 PR（如 [#367](https://github.com/netease-youdao/LobsterAI/pull/367), [#1536](https://github.com/netease-youdao/LobsterAI/pull/1536) 等），涉及通知、书签、标签系统等功能。这表明项目组正在进行严格的分支管理，未及时合并的社区贡献已被暂时回绝，需重新基于最新代码提交。

## 4. 社区热点
今日社区活跃度相对平静，新开 Issue 仅 1 条，无大规模讨论。

*   **热门 Issue**: [#769 OpenClaw 网关未能在规定时间内启动成功](https://github.com/netease-youdao/LobsterAI/issue/769)
    *   **状态**: Open
    *   **分析**: 用户反馈网关启动超时，并附带了截图。这可能与近期版本中引入的 OpenClaw 组件或 MCP 启动流程变更有关。虽然 PR #2091 优化了启动性能，但该 Issue 表明部分环境下仍存在稳定性瓶颈。

## 5. Bug 与稳定性
今日报告的问题较少，但主要集中在底层连接与启动环节。

*   **🔴 高优先级**
    *   **OpenClaw 网关启动超时**: [Issue #769](https://github.com/netease-youdao/LobsterAI/issue/769) 报告网关未能按时启动。目前尚未有官方回复或修复 PR 关联，建议开发团队关注。
*   **🟢 已修复**
    *   **图片发送失败**: PR [#2110](https://github.com/netease-youdao/LobsterAI/pull/2110) 解决了大尺寸图片导致的网关错误。
    *   **MCP 启动失败/慢**: PR [#2091](https://github.com/netease-youdao/LobsterAI/pull/2091) 和 [#2100](https://github.com/netease-youdao/LobsterAI/pull/2100) 分别从解析策略和环境变量角度修复了潜在的 MCP 启动问题。

## 6. 功能请求与路线图信号
从今日合并的 PR 和被关闭的 Stale PR 中，可以窥见项目的路线图走向：

*   **已纳入路线图**:
    *   **Kit 专家套件市场**: 已随 2026.5.28 版本发布，这是本周期最重要的功能增量。
    *   **MiniMax M3 多模态支持**: 技术层面已修复，未来版本将默认支持图片输入。
*   **暂缓/拒绝的功能** (基于 Stale PR 关闭情况):
    *   **Cowork 会话通知**: PR [#1536](https://github.com/netease-youdao/LobsterAI/pull/1536) 被关闭，任务完成通知功能暂未合入。
    *   **消息收藏/书签**: PR [#1538](https://github.com/netease-youdao/LobsterAI/pull/1538) 被关闭。
    *   **会话标签系统**: PR [#1542](https://github.com/netease-youdao/LobsterAI/pull/1542) 被关闭。
    *   *分析*: 上述社区贡献的功能（通知、书签、标签）因过期被清理，若社区有强烈需求，需重新发起 PR 或由官方团队重新规划实现。

## 7. 用户反馈摘要
*   **痛点**: 用户 [Issue #769] 遇到网关启动超时问题，反映了 OpenClaw 组件在某些环境下的兼容性或健壮性不足。
*   **场景**: 结合 PR 修复内容看，用户在处理大图片文件、配置远程 MCP 服务器 URL 时容易遇到阻断性错误，这在今日的修复中得到体现。
*   **满意度**: 随着新版本的发布，用户对 Kit 市场的期待较高，但对 MCP 配置的复杂性仍有抱怨（如 URL 校验、Node 环境依赖等）。

## 8. 待处理积压
*   **重要未响应 Issue**:
    *   [Issue #769](https://github.com/netease-youdao/LobsterAI/issue/769): OpenClaw 网关启动超时问题，目前仅有 1 条评论，尚需开发团队介入排查是否为回归问题。
*   **长期维护提醒**:
    *   今日清理了大量过期 PR，维护者应及时关注是否有社区贡献者愿意“复活”这些功能（如书签、标签系统），避免挫伤社区贡献积极性。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-06-05)

## 1. 今日速览
Moltis 项目今日整体呈现**开发活跃、社区互动平稳**的状态。虽然今日无新版本发布且无代码合并，但核心开发者 @s-salamatov 推进了 3 个重要的功能性 PR，显示出项目正在为下一阶段的稳定性和多平台适配（特别是 Telegram 和浏览器自动化）积蓄力量。社区方面，新增 1 条关于本地语音识别（STT）引擎的高质量功能请求，表明用户对低延迟、本地化语音交互有强烈诉求。整体来看，项目处于功能迭代与优化的关键开发期，代码库健康度良好。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日无合并或关闭的 PR，但有 3 个关键 PR 处于待合并状态，主要集中在**用户体验优化**与**底层稳定性增强**：

- **Telegram 交互体验优化**：PR [#1099](https://github.com/moltis-org/moltis/pull/1099) 提出将 Telegram 的流式进度消息与最终回复解耦。该改动旨在避免实时流式更新干扰最终答案的展示，通过“静默进度消息 -> 编辑更新 -> 删除”的机制，确保用户接收到更清晰的消息流。
- **浏览器自动化能力增强**：PR [#1103](https://github.com/moltis-org/moltis/pull/1103) 修复了浏览器快照和引用查找无法穿透 Shadow DOM 的问题。作为 PR #1100 的替代方案，该提交显著提升了 AI 智能体在复杂现代 Web 应用中的操作准确性。
- **内存管理稳定性修复**：PR [#1089](https://github.com/moltis-org/moltis/pull/1089) 针对会话历史重建时的工具结果进行了长度限制。此举旨在防止过长的工具返回值撑爆上下文窗口，覆盖了普通聊天、流式聊天、重试及内存压缩等多个场景，对系统稳定性至关重要。

## 4. 社区热点
今日最活跃的讨论来自新开的 Issue [#1102](https://github.com/moltis-org/moltis/issues/1102)。

- **议题**：Feature: Add FunASR/SenseVoice as local STT engine
- **分析**：用户 @LauraGPT 提议集成 FunASR 或 SenseVoice 作为本地语音转文字（STT）引擎。
- **诉求分析**：该请求反映出用户对**极致响应速度**（SenseVoice-Small 处理 10s 音频仅需 70ms）和**本地流式处理**的强烈需求。这表明目前的云端或内置 STT 方案在延迟和隐私方面可能无法满足部分高级用户的场景，社区正向更轻量、更高效的端侧语音能力演进。

## 5. Bug 与稳定性
今日未收到用户提交的崩溃或严重 Bug 报告。但通过待处理的 PR 可见开发者正在主动修复潜在的稳定性隐患：

- **中等风险**：Shadow DOM 查找失败（已提交 Fix PR [#1103](https://github.com/moltis-org/moltis/pull/1103)）。此前版本在处理包含 Shadow DOM 的网页时可能无法正确定位元素，影响 Web 自动化功能的可用性。
- **潜在风险**：上下文溢出（已提交 Fix PR [#1089](https://github.com/moltis-org/moltis/pull/1089)）。在工具返回大量数据时可能导致会话重建失败或 LLM 调用报错，现已通过内容封顶机制修复。

## 6. 功能请求与路线图信号
- **新增功能信号**：Issue [#1102](https://github.com/moltis-org/moltis/issues/1102) 提出的本地 STT 引擎集成，符合当前 AI 智能体“本地化、低延迟”的技术趋势。鉴于项目性质，该功能极有可能被纳入未来版本路线图。
- **潜在集成**：目前项目正在进行 Telegram 和浏览器自动化的深度优化（PR #1099, #1103），这预示着下一版本可能会重点强化**多平台适配能力**，特别是在复杂的 Web 交互和即时通讯软件体验上会有显著提升。

## 7. 用户反馈摘要
从 Issue #1102 的内容可以提炼出以下用户画像与痛点：
- **痛点**：现有方案延迟较高，无法满足实时互动需求。
- **场景**：需要离线/本地语音交互的场景，对隐私和速度敏感。
- **满意度**：用户评价项目为 "Great voice assistant project"，显示对项目整体架构持积极态度，但在核心语音能力上希望能有更多高性能选项。

## 8. 待处理积压
- **PR [#1089](https://github.com/moltis-org/moltis/pull/1089)**：该 PR 创建于 6 月 1 日，更新于 6 月 4 日，涉及核心的内存管理逻辑。建议维护者优先进行代码审查并合并，以解决潜在的长文本上下文崩溃问题。
- **PR [#1099](https://github.com/moltis-org/moltis/pull/1099)**：针对 Telegram 的流式体验修复，关联 Issue #1097。建议尽快合并以改善 Telegram 端用户的使用体验。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-06-05)

## 1. 今日速览
CoPaw 项目今日保持了高效的迭代节奏，发布了 **v1.1.11-beta.1** 版本，重点修复了配置管理 fallback 逻辑与定时任务推送机制。社区活跃度显著，Issue 闭环率极高（关闭 17 vs 新开/活跃 16），显示出维护者对社区反馈的快速响应能力。功能开发方面，今日合并了子代理执行工具 (`spawn_subagent`) 与 OpenSandbox 插件，大幅增强了 Agent 的任务委托与安全执行能力。同时，前端单元测试覆盖率里程碑也已达成，项目稳定性基础设施进一步完善。

## 2. 版本发布
**新版本：v1.1.11-beta.1**
- **修复**:
    - 增加了 `ProviderManager` 回退机制以获取模型最大输入长度，提升了不同模型配置下的兼容性。
- **重构**:
    - 优化了 Cron 定时任务逻辑，针对类型为 'agent' 的任务禁用了推送气泡，减少了对用户的干扰。

## 3. 项目进展
今日共有 **20 个 PR 被合并或关闭**，重点推进了以下功能模块：

- **Agent 协作能力增强**: 合并了 PR [#4806](https://github.com/agentscope-ai/QwenPaw/pull/4806)，新增 `spawn_subagent` 工具。该功能允许 Agent 在当前工作空间内委托临时子任务，支持“临时协作”、“继承历史”和“独立对话”三种模式，完善了多 Agent 协作生态。
- **安全执行环境**: 合并了 PR [#4934](https://github.com/agentscope-ai/QwenPaw/pull/4934)，新增 OpenSandbox 插件，支持在沙箱环境中执行 Shell 命令，显著提升了代码执行的安全性。
- **前端质量保障**: 关闭了 PR [#4332](https://github.com/agentscope-ai/QwenPaw/pull/4332)，完成了前端单元测试覆盖率的里程碑目标，新增约 100 个测试用例，覆盖了 constants、contexts 等核心模块。
- **MCP 兼容性修复**: 合并了 PR [#4958](https://github.com/agentscope-ai/QwenPaw/pull/4958)，修复了 MCP 工具名因包含特殊字符（如 `.`）导致 OpenAI 等模型校验失败的问题，通过别名重写机制增强了兼容性。

## 4. 社区热点
今日社区讨论最热烈的问题集中在前端交互体验与核心功能逻辑上：

- **[#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644) [CLOSED]**: **[Bug] Console UI 工具调用不显示**。
    - **热度**: 20 条评论。
    - **分析**: 这是一个影响用户体验的关键 Bug，用户反馈工具调用（除 `read_file` 外）在控制台中经常无法实时显示，需刷新页面。该问题已得到修复并关闭，反映了前端实时渲染机制的脆弱性，是近期修复的重点。
- **[#4796](https://github.com/agentscope-ai/QwenPaw/issues/4796) [CLOSED]**: **[Feature] 输入框 Skill 快捷补全**。
    - **热度**: 6 条评论。
    - **分析**: 用户希望输入 `/` 或 `/skills` 时能自动联想可用技能。该功能请求已关闭，可能已被纳入最新版本或通过其他方式解决，体现了用户对提升操作效率的强烈需求。
- **[#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) [CLOSED]**: **[Enhancement] 记忆系统优化**。
    - **热度**: 4 条评论。
    - **分析**: 用户指出当前记忆系统存在“只记录不学习”的痛点，建议增加总结、状态标记和智能提醒机制。这反映了社区对 Agent 长期记忆智能化、结构化的高期待。

## 5. Bug 与稳定性
今日报告了多个影响稳定性的关键 Bug，需重点关注：

- **[严重] 死循环无法退出**:
    - **Issue**: [#4967](https://github.com/agentscope-ai/QwenPaw/issues/4967) [OPEN]
    - **详情**: Agent 在执行过程中陷入死循环，用户无法中断。这是今日新建的高优先级问题，目前尚无修复 PR，建议开发者优先排查 Agent 的停止条件逻辑。
- **[严重] 内存泄漏导致 Fork 失败**:
    - **Issue**: [#4968](https://github.com/agentscope-ai/QwenPaw/issues/4968) [OPEN]
    - **详情**: 虚拟内存泄漏导致子进程创建失败。这是 v1.1.1 版本遗留的问题，在 v1.1.10 中仍复现，属于底层资源管理问题。
- **[中等] DeepSeek API 回复折叠**:
    - **Issue**: [#4962](https://github.com/agentscope-ai/QwenPaw/issues/4962) [OPEN]
    - **详情**: DeepSeek 模型的回复被错误地折叠在“思考过程”中，需手动展开才能看到。这影响了对推理模型的即时阅读体验。
- **[已修复] 上下文压缩崩溃**:
    - **Issue**: [#4956](https://github.com/agentscope-ai/QwenPaw/issues/4956) [CLOSED]
    - **详情**: 在 `pre_reasoning` 阶段触发 `AttributeError`，已通过相关修复解决。

## 6. 功能请求与路线图信号
结合 Issue 讨论与现有 PR，以下功能方向较为明确：

- **Token 可视化与上下文管理**:
    - **Issue**: [#4782](https://github.com/agentscope-ai/QwenPaw/issues/4782) 建议前端显示已用/总上下文大小。
    - **PR**: [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) 正在实现对话级别的 Token 使用量显示。
    - **预测**: 该功能极可能在下一版本落地，帮助用户主动管理上下文窗口。
- **自动更新与桌面版体验**:
    - **PR**: [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) 正在为 Tauri 桌面版增加自动更新功能，解决了桌面版维护难的问题。
- **模型提供商容错**:
    - **Issue**: [#4757](https://github.com/agentscope-ai/QwenPaw/issues/4757) 提出自动模型降级需求。
    - **Issue**: [#4181](https://github.com/agentscope-ai/QwenPaw/issues/4181) 提出模型故障自动转移需求。
    - **信号**: 社区强烈希望系统具备更高的容错性和服务连续性，这可能成为后端架构优化的重点。

## 7. 用户反馈摘要
- **痛点**:
    - **UI 响应与反馈**: 工具调用不实时显示（#4644）是最大的槽点，严重影响使用信心。
    - **记忆系统**: 用户认为目前的记忆机制过于机械（#4652），缺乏提炼和主动关联，导致“踩坑”现象重复发生。
    - **桌面版网络**: 局域网访问配置复杂，存在防火墙阻挡等问题（#4960）。
- **满意点**:
    - 用户对 `spawn_subagent` 等新功能表示期待，认为这填补了单 Agent 处理复杂任务的空白。
    - 对 OpenSandbox 插件的集成表示欢迎，认为解决了代码执行的安全顾虑。

## 8. 待处理积压
以下重要 Issue 长期未获解决或今日尚未响应，建议关注：

- **DeepSeek 前缀缓存命中率低**: Issue [#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891) 持续开启中。由于 DeepSeek 对缓存命中的计费差异巨大，该问题直接影响用户成本，建议优先排查 Prompt 构造逻辑。
- **执行中断机制缺失**: Issue [#4964](https://github.com/agentscope-ai/QwenPaw/issues/4964) 提出用户无法打断正在执行 Tool Call 的 Agent，导致错误操作无法及时止损。这是一个长期存在的交互痛点，目前尚无明确解决方案。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-06-05)

## 1. 今日速览
EasyClaw 项目今日整体活跃度较为平缓，社区交互端（Issues/PRs）无明显动态，但在版本迭代方面取得了实质性进展。维护者发布了 v1.8.30 版本，重点针对客服（CS）场景下的连接稳定性和上下文保持进行了深度优化。此次更新解决了订阅重连可能导致的数据丢失痛点，并引入了缓存代理机制以提升媒体加载的可靠性。整体来看，项目处于稳健的功能打磨与稳定性维护阶段，健康度良好。

## 2. 版本发布
**版本号：** [v1.8.30: RivonClaw v1.8.30](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.30)

**更新详情：**
本次更新主要聚焦于客服 Relay 模块的健壮性与媒体处理能力，无破坏性变更，建议所有使用 CS Relay 功能的用户升级。

*   **客服 Relay 生命周期优化：** 修复了客服店铺生命周期处理中的不稳定因素，确保服务流转更加顺滑。
*   **上下文保持机制：** 解决了订阅重连后客服店铺上下文丢失的问题。这对于长连接场景至关重要，避免了因网络波动导致的会话中断或状态丢失，显著提升了用户体验。
*   **媒体加载可靠性增强：** 新增通过缓存代理路由远程媒体的功能。此举旨在解决媒体附件加载失败或加载缓慢的问题，对于依赖图片/文件传输的 AI 助手场景是一个关键的稳定性提升。

**迁移建议：**
该版本主要为 Bug 修复与稳定性增强，API 层面无重大变更，可直接平滑升级。对于网络环境不稳定的部署环境，此版本将带来明显的性能改善。

## 3. 项目进展
今日无合并或关闭的 Pull Requests。项目的推进主要体现于 v1.8.30 版本的发布，说明近期提交的代码已经过验证并成功合入主干，重点解决了服务重连时的状态保持问题，项目在工程质量和稳定性上迈出了坚实的一步。

## 4. 社区热点
今日 Issues 与 Pull Requests 均无更新，社区讨论区较为沉寂。暂无热点话题或争议性讨论。

## 5. Bug 与稳定性
今日未收到新提交的 Bug 报告。

**稳定性改进（源自 v1.8.30）：**
*   **[已修复] 订阅重连导致上下文丢失：** 此前版本在订阅发生重连时，客服店铺的上下文信息可能丢失，v1.8.30 已修复该隐患。
*   **[已优化] 媒体附件加载不可靠：** 针对远程媒体加载不稳的问题，现已通过引入 cached proxy 机制进行缓解。

## 6. 功能请求与路线图信号
今日无新增功能请求。从 v1.8.30 的更新内容推断，项目当前的路线图重点在于夯实基础设施，特别是针对“客服 Relay”这一垂直场景的稳定性与数据一致性进行加强，而非激进的功能扩展。

## 7. 用户反馈摘要
由于今日无活跃 Issue 评论，暂无法从最新互动中提炼用户反馈。但从版本更新日志“Keep customer-service shop context intact”这一描述来看，维护者对实际生产环境中的断线重连痛点有深刻的理解，并正在积极回应这类隐性的用户需求。

## 8. 待处理积压
根据今日数据，过去 24 小时内无长期未响应的 Issue 产生新的动态。建议维护者在后续版本中继续保持对核心模块稳定性的关注。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*