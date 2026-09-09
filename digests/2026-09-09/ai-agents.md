# OpenClaw 生态日报 2026-09-09

> Issues: 482 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-09 03:43 UTC

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

# OpenClaw 项目动态日报 — 2026-09-09

## 1. 今日速览

OpenClaw 今日保持高度活跃：过去 24 小时内 Issues 更新 482 条（新开/活跃 259、关闭 223），PR 更新 500 条（待合并 233、已合并/关闭 267），并发布了新版本 **v2026.9.3**。社区讨论焦点集中在 **2026.9.x 升级链路的稳定性**（更新卡死、Gateway 无法启动、插件版本漂移）和 **消息投递回归**（reply 快照丢失、Slack "mute" 误标）。Issue 关闭率（46%）与 PR 吞吐量均处于健康水平，但多个 P0 升级阻塞类问题尚未有 fix PR，值得维护者优先关注。

## 2. 版本发布

### v2026.9.3（openclaw 2026.9.3）

- **更安全的更新机制**：核心与插件变更在激活前于隔离的 candidate state 中演练（rehearse），支持符合条件的 2026.9.2 迁移，并可恢复被遗弃的 update 记录而不中断健康的匹配 Gateway。关联 [#136997](https://github.com/openclaw/openclaw/issues/136997)，落地 PR 包括 #138839、#141109、#141175、#1415xx。
- **迁移注意**：此版本明显针对 2026.9.1/9.2 升级中暴露的 update 卡死类问题（见 #139714、#141617、#139485），建议受影响用户升级后运行 `openclaw status` 确认 update_runs 不再悬挂。

## 3. 项目进展

今日合入/推进的重点方向：

- **升级可靠性**：[#142811](https://github.com/openclaw/openclaw/pull/142811) 让 updater 兼容性测试覆盖同版本 candidate，配合 v2026.9.3 的 rehearse 机制，形成对升级链路的系统性加固。
- **Android 实时通话（realtime Talk）**：三个大型 PR 推进中 —— 原生 WebRTC 媒体传输 [#142296](https://github.com/openclaw/openclaw/pull/142296)（XL）、realtime 响应与 transcript 状态协调 [#142297](https://github.com/openclaw/openclaw/pull/142297)、清理期间保留实时通话 [#142298](https://github.com/openclaw/openclaw/pull/142298)，以及恢复聊天中已完成工具活动展示 [#142810](https://github.com/openclaw/openclaw/pull/142810)。Android 端能力正在快速逼近 Web 端。
- **CI 安全**：[#142791](https://github.com/openclaw/openclaw/pull/142791) 阻止 candidate ref 控制生产工作流的 setup 步骤（关联 CodeQL 告警 #721/#722/#795/#848），属于重要的供应链安全修复。
- **可观测性**：[#142776](https://github.com/openclaw/openclaw/pull/142776)（XL）暴露 Slack ingress 各准备阶段的卡顿状态，便于运维定位事件停留在哪一步。
- **macOS Gateway 发现安全**：[#121622](https://github.com/openclaw/openclaw/pull/121622)（XL）防止 Bonjour 发现的 Gateway 继承凭据，处于 maintainer review。
- **消息投递修复**：[#142470](https://github.com/openclaw/openclaw/pull/142470)（XL，已附 Telegram e2e 证明）修复排队 follow-up 丢失隐式回复目标。

整体看，项目本周在**升级基础设施、移动端、CI 安全**三条线上同时推进，节奏稳定。

## 4. 社区热点

| Issue | 热度 | 焦点 |
|---|---|---|
| [#135111](https://github.com/openclaw/openclaw/issues/135111)（已关闭） | 23 评论 | v2026.8.1 上 claude-sonnet-5 间歇性 "malformed JSON arguments" 回归，影响 auth-provider 路径，社区复现讨论热烈 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 15 评论 | hook/工具子进程未被 reap，僵尸进程累积导致运行时退化——长期运行用户的核心痛点，仍 OPEN |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 14 评论 | 多 agent 并发编排不稳定（config 覆写、session-lock 失败），已挂 linked PR，是高级用户群体的关键诉求 |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 14 评论 | 同步持久化阻塞 Gateway 事件循环，讨论已进入落地修复追踪阶段（#140231、#138984） |
| [#85251](https://github.com/openclaw/openclaw/issues/85251) | 13 评论 | Codex app-server "turn/started 后静默"，会话被卡死 360s 才强制中止 |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | 12 评论（P0） | Codex OAuth 刷新超 10s 导致 cron/heartbeat 全部失败 |
| [#137813](https://github.com/openclaw/openclaw/issues/137813)（已关闭） | 12 评论 | Windows 2026.9.1 更新后 `--task-supervisor` 静默退出、Gateway 不启动 |

诉求分析：热点高度集中于 **provider/OAuth 集成可靠性** 与 **Windows/升级路径体验**，说明核心聊天能力已成熟，摩擦点转移到运维与集成层。

## 5. Bug 与稳定性（按严重程度）

### P0 / 发布阻塞

- [#141617](https://github.com/openclaw/openclaw/issues/141617) — 2026.9.2 npm 更新永久卡在 requested/running，修复无效。**暂无 fix PR**（v2026.9.3 的 rehearse 机制或即应对）。
- [#140908](https://github.com/openclaw/openclaw/issues/140908) — systemd `--user` 账户下 `doctor --fix` 因 systemctl EACCES 失败，**阻塞所有升级后迁移**。无 fix PR。
- [#136203](https://github.com/openclaw/openclaw/issues/136203) — Windows de-DE 2026.8.2 升级后 Doctor 维护被阻塞。标记 queueable-fix。
- [#115642](https://github.com/openclaw/openclaw/issues/115642) — 计费冷却固定 ~5 小时且无法手动重置，故障恢复后仍拒绝服务，等 product-decision。
- [#89278](https://github.com/openclaw/openclaw/issues/89278) — Codex OAuth 10s 刷新超时使 cron 全挂（见上）。

### P1 回归（2026.9.2）

- [#141252](https://github.com/openclaw/openclaw/issues/141252) / [#139847](https://github.com/openclaw/openclaw/issues/139847) — "Reply operation has no active tool authority snapshot"：busy/排队回复失败、reply 进行中的消息被丢弃。均已标记 fix-shape-clear / queueable-fix。
- [#142037](https://github.com/openclaw/openclaw/issues/142037) — Slack 顶层入站合成 currentThreadTs 导致 message-tool 回复被误记为 "mute"。queueable-fix。
- [#142336](https://github.com/openclaw/openclaw/issues/142336) — 新核心 `/dashboard` 命令与 Telegram Mini App 插件命令冲突。

### P1 稳定性

- [#97616](https://github.com/openclaw/openclaw/issues/97616) — 僵尸进程泄漏（OPEN，长期）。
- [#136183](https://github.com/openclaw/openclaw/issues/136183) — 命令执行器 spawn ssh 挂起（2026.8.1 回归）。
- [#136311](https://github.com/openclaw/openclaw/issues/136311) — memory-core reindex 锁永不释放，累积 19GB 孤儿临时 DB。
- [#139485](https://github.com/openclaw/openclaw/issues/139485) — 托管升级期间 Gateway 长时间离线（OCM 只能快照回滚恢复）。

### 安全相关

- [#137927](https://github.com/openclaw/openclaw/issues/137927)（已关闭）— 内部上下文块泄漏到 Telegram 可见文本，含安全影响。
- [#115367](https://github.com/openclaw/openclaw/issues/115367) — 读取门只信任 `origin: bundled`，而所有主流渠道插件已外置，读取被过度限制。

## 6. 功能请求与路线图信号

- **插件发现/安装统一**（[#142782](https://github.com/openclaw/openclaw/pull/142782)，XL）——聊天中问"能装 whatsapp 吗"将直接给出 ClawHub 列表与安装路径，已在推进，预计近期合入。
- **Android chat-first 界面**（[#46058](https://github.com/openclaw/openclaw/issues/46058)）——独立 fork 作者寻求定向上游化，结合本周密集的 Android realtime PR，移动端显然是路线图重点。
- **运维能力增强**：Slack ingress 可观测性（#142776）、doctor 启动竞态修复（[#142497](https://github.com/openclaw/openclaw/pull/142497)）显示团队在补运维短板。
- **计费冷却可恢复性**（#115642）有明确产品诉求（probe-based recovery、手动 reset 命令），但仍在等产品决策。
- **升级体验**（[#107930](https://github.com/openclaw/openclaw/issues/107930)，Node 版本变更时的平滑升级）与 v2026.9.3 方向吻合，可能被纳入后续版本。

## 7. 用户反馈摘要

**满意点**
- 社区贡献踊跃：多数热点 PR 附带截图/e2e 证明（#139782、#142639、#142581），审查流转标注（ready for maintainer look / automerge armed）体系运转良好。
- 升级安全的"先演练后激活"设计（v2026.9.3）获得关注，直击近期痛点。

**痛点**
- **升级即事故**：Windows 用户反复报告升级后 Gateway 不启动、Doctor 卡死、需手动干预甚至快照回滚（#137813、#136203、#139485、#141617）。
- **静默失败最伤信任**：cron 静默失败（#87109）、Telegram 子 agent 无存活通知（#101656）、Feishu 工具被静默丢弃（#140971）——用户普遍反馈"没有任何错误提示"比崩溃更难排查。
- **错误文案误导**：fallback 回复硬编码"无法连接后端"（#141694，已关闭）、系统被杀却提示 `openclaw onboard`（#139710），浪费用户排障时间。
- **长期运行退化**：内存增长、僵尸进程、索引锁死等慢性问题困扰 7×24 部署用户。

## 8. 待处理积压

| 条目 | 状态 | 提醒 |
|---|---|---|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) 僵尸进程泄漏 | OPEN 自 2026-06-29，P1 | 长期运行稳定性核心问题，无 fix PR |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) 多 agent 编排不稳定 | OPEN 自 2026-03-11，P1 | 已有 linked PR，需推进 review |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) 计费冷却不可恢复 | OPEN 自 2026-07-29，P0 | 等产品决策半年未动 |
| [#115367](https://github.com/openclaw/openclaw/issues/115367) 读取门与外置插件矛盾 | OPEN，P1 | 架构级决策，影响所有渠道插件 |
| [#120157](https://github.com/openclaw/openclaw/issues/120157) 子 agent yield 后父会话不唤醒 | OPEN，已挂 PR | PR 未合并 |
| [#94716](https://github.com/openclaw/openclaw/issues/94716) claude-cli 过期 user-agent | OPEN 自 2026-06-19，P1 | linked PR 未落地 |
| [#121622](https://github.com/openclaw/openclaw/pull/121622) macOS Gateway 凭据隔离 | XL PR，review 中 | 安全边界类，建议优先合入 |
| [#122436](https://github.com/openclaw/openclaw/pull/122436) CLI resolution 参数校验 | stale，review 中 | 小改动，可快速处理 |

**健康度小结**：项目吞吐与社区参与度优秀，v2026.9.3 及时回应升级可靠性问题；主要风险在于 2026.9.x 升级链路的多个 P0 尚无直接 fix PR，以及安全/产品决策类积压的响应周期偏长。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告
**数据窗口：2026-09-08 至 2026-09-09**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入**功能趋同后的可靠性攻坚期**：以 OpenClaw 为核心参照，周边形成了从 6MB 单二进制、边缘 IoT 到企业级多租户托管 MCP 的完整梯度格局。各项目的核心聊天能力普遍成熟，社区摩擦点已集体转移到**升级/迁移链路、长期运行的资源治理、多渠道消息投递可靠性**等运维层议题。同时，**prompt caching 成本、MCP 插件安全边界、跨会话持久记忆**成为新兴的三大共同技术议题。生态整体呈“一家独大、多点开花”形态：OpenClaw 吞吐量约占整个生态的一半，其余项目依靠差异化定位（轻量、中文 IM 生态、企业托管）维持健康活跃。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 482（关 223，关闭率 46%） | 500（合并 267） | ✅ v2026.9.3 | 🟢 优秀。吞吐量生态第一，但多个 P0 升级问题无 fix PR |
| **CoPaw** | 26（关 12） | 46（合并 25） | ✅ v2.2.1-beta.1 | 🟢 良好。issue→fix 闭环快，首发贡献者漏斗健康 |
| **Hermes Agent** | 50（关 8，关闭率仅 16%） | 50（合并 11） | ❌ | 🟡 活跃但有积压。Windows 更新链连续回归，安全类 PR 滞留偏久 |
| **Zeroclaw** | 32（**0 关闭**） | 50（仅 2 合并，48 积压） | ❌ | 🟡 活跃但拥堵。RFC 决策队列迭代 5-10 版仍未投票，维护者带宽是瓶颈 |
| **NanoBot** | 2（全关） | 36（合并 11） | ❌ | 🟢 良好。所有 bug 均有 fix PR，但 conflict 积压集中在 8 月后的 PR |
| **NanoClaw** | 2 | 9（合并 2） | ❌ | 🟢 良好。除 #3735 外全部闭环，OpenCode provider 双 PR 推进中 |
| **IronClaw** | 2 | 11（合并 5*） | ❌ | 🟢 良好。*关闭多为架构重定形（旧 PR 批量被新方案取代），hosted-MCP 安全加固进行中 |
| **PicoClaw** | 4 | 7（**0 合并**） | ❌ | 🟡 中等。贡献质量高但维护带宽不足，多条 stale |
| **LobsterAI** | **0** | 11（合并 10） | ❌ | 🟡 单点冲刺。全部围绕 OpenClaw v2026.8.1 兼容修复，社区零活跃 |
| **ZeptoClaw** | 4 | 2（合并 1） | ❌ | 🟢 良好。安全修复集中落地（#673 已合并、#674 待审） |
| **EasyClaw** | 0 | 0 | ✅ v1.9.7 + v1.9.8（双版本） | 🟡 静默发布。零社区交互但工程节奏稳定 |
| NullClaw / TinyClaw / Moltis | 0 | 0 | ❌ | ⚪ 无活动 |

**分层小结**：OpenClaw 是唯一“高吞吐+高关闭率+周期性发版”三高的头部项目；CoPaw/NanoBot 处于“活跃且闭环健康”第二梯队；Zeroclaw/Hermes 活跃度高但消化积压有压力；PicoClaw/LobsterAI/EasyClaw 属于窄域冲刺型。

---

## 3. OpenClaw 在生态中的定位

**社区规模**：OpenClaw 日均 482 条 Issue + 500 条 PR 更新，约为第二梯队项目（Zeroclaw/Hermes/CoPaw，约 50 条量级）的 **10 倍**，是 NanoBot 的 15 倍、PicoClaw 的 40 倍以上。它已具备生态标准制定者地位——LobsterAI 的整个开发周期完全围绕 OpenClaw 版本适配运转（v2026.8.1 升级引发的 9 个修复 PR），OpenClaw 的 plugin-sdk 变更（如 `emptyPluginConfigSchema` 移除）直接决定下游项目的可用性。

**技术路线差异**：
- OpenClaw 走**全栈网关 + 插件外置分发**路线，能力覆盖 Web/Android/桌面/多渠道，升级采用“先演练后激活”的候选态机制，工程复杂度最高；
- Zeroclaw 选择**架构先行**——重大变更必须经 RFC 多版本迭代与社区投票，代价是决策周期长；
- Hermes/IronClaw 分别在自动化委托与 hosted-MCP 多租户方向建立深度；
- ZeptoClaw/PicoClaw 以轻量 footprint 为差异化（6MB 二进制、50ms 启动）。

**优势**：release 节奏稳定（2026.9.3 及时回应升级痛点）、贡献审查体系成熟（e2e 证明、automerge armed 标注）、移动端快速逼近 Web 端。**短板**：2026.9.x 升级链多个 P0（#141617、#140908）无直接 fix PR；僵尸进程（#97616）、多 agent 编排（#43367）等长期 issue 积压；其升级破坏性对下游生态（LobsterAI 案例）构成系统性风险。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **Prompt caching / 成本治理** | Zeroclaw、Hermes、OpenClaw、IronClaw | Zeroclaw #10674 历史裁剪击穿缓存（已有低水位修复）；Hermes PR #103476 thinking 块剥离破坏缓存前缀重复计费；IronClaw #8082 PDF 指针模式避免每份 25k tokens 重复计费。这是当前**跨项目密度最高**的新兴议题 |
| **长期运行资源治理** | NanoBot、NanoClaw、PicoClaw、OpenClaw、Zeroclaw | 内存泄漏类 bug 集中爆发：NanoBot“内存边界三连”PR、NanoClaw #3735 归档无限增长、PicoClaw #3343 Telegram API 22.8 万次循环调用、OpenClaw #97616 僵尸进程 |
| **多渠道消息投递可靠性** | OpenClaw、NanoBot、NanoClaw、Hermes | reply 快照丢失、Slack mute 误标、cron 死投递目标、线程路由错乱——所有做 IM 集成的项目都在修这类问题 |
| **MCP 安全与隔离** | IronClaw、Zeroclaw、Hermes、OpenClaw | IronClaw 多租户跨用户元数据暴露（#6778）；Zeroclaw shell 权限策略与 WASM 沙箱 RFC；Hermes OAuth refresh_token 覆盖；OpenClaw CI 供应链修复 |
| **跨会话持久记忆** | ZeptoClaw、NanoBot、CoPaw、Hermes | ZeptoClaw #666 事务性记忆写入设计；NanoBot Honcho 集成（积压 6 个月）；CoPaw 记忆后端插件化；Hermes mem0 OSS 集成 |
| **升级/迁移链路可靠性** | OpenClaw、Hermes、CoPaw、LobsterAI、NanoClaw | “升级即事故”是全生态最大共同痛点（详见第 7 节） |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Zeroclaw | Hermes | ZeptoClaw / PicoClaw | CoPaw | LobsterAI | IronClaw | EasyClaw |
|---|---|---|---|---|---|---|---|---|
| **功能侧重** | 全栈个人助手网关 | 架构严谨的运行时 + RFC 治理 | 长时自动化/委托/cron | 极轻量嵌入式 | 桌面多模态 + 插件化记忆 | 中文 IM（钉钉/飞书/QQ）适配层 | 企业 hosted-MCP 多租户 | TK 联盟营销 + 客服 |
| **目标用户** | 全平台重度用户 | 架构敏感的开发者社区 | 7×24 自动化运维用户 | 边缘/IoT/资源受限 | 本地大模型/桌面用户 | 国内企业 IM 用户 | B 端托管服务商 | 电商运营 |
| **架构特征** | 网关 + 外置插件 + 候选态升级 | RFC 驱动、沙箱策略、WASM 插件 | delegate 子代理体系 | Go/Rust 单二进制 | 插件化记忆 + PawPort 迁移 | OpenClaw 下游发行版 | per-caller 归因 + 可计费扩展 | 垂直 SaaS 化 |

值得注意的定位信号：ZeptoClaw 用户在 #675 中明确表述选择它的原因是“6MB、50ms、无容器环境”——轻量派与 OpenClaw 重栈派已形成清晰的用户分流；LobsterAI 则证明了“OpenClaw 生态下游发行版”是一种可行的商业模式。

---

## 6. 社区热度与成熟度分层

- **快速迭代/扩张期**：**CoPaw**（v2.2.1-beta，首发贡献者持续涌入）、**NanoBot**（贡献者梯队成型，4 名高频提交者）、**IronClaw**（MCP 生态架构重定形中）
- **规模领先、质量巩固期**：**OpenClaw**（核心能力成熟，重心转向升级可靠性与运维可观测性）、**Zeroclaw**（功能强但被 RFC 治理流程拖慢，处于“制度化阵痛期”）
- **活跃但有结构性风险**：**Hermes Agent**（Issue 关闭率仅 16%，Windows 短板 + 安全 PR 滞留）、**PicoClaw**（高质量贡献但 0 合并，维护带宽告急）
- **窄域冲刺/静默期**：**LobsterAI、EasyClaw**（单向产出、社区互动缺失；LobsterAI 连续零 Issue 活跃值得核查反馈渠道）、**ZeptoClaw**（小而精，安全修复节奏良好）
- **休眠**：NullClaw、TinyClaw、Moltis

---

## 7. 值得关注的趋势信号

**① “升级即事故”是当前生态第一信任杀手。** OpenClaw Windows 用户反复遭遇升级后 Gateway 不启动、Doctor 卡死（#137813、#136203、#141617）；Hermes 0.21.1 更新链连续回归；LobsterAI 整个迭代周期在修 OpenClaw 升级破坏；CoPaw v1→v2 迁移工具大面积失败。**对开发者的启示**：升级路径需要一等公民级的测试基建（OpenClaw v2026.9.3 的 rehearse 候选态机制是当前最佳实践），且下游生态的兼容性断裂成本极高。

**② 静默失败比崩溃更伤信任。** 多个项目用户独立表达同一观点：“没有任何错误提示”比崩溃更难排查（OpenClaw cron 静默失败、Hermes kanban 假成功、CoPaw 运行时静默回滚、PicoClaw api_keys 静默丢弃）。可观测性与显式失败设计应作为 agent 框架的核心特性而非附加项。

**③ Prompt caching 正在成为用户直接感知的钱包问题。** 历史裁剪策略、thinking 块处理、附件编码方式都会击穿缓存前缀，重度用户已开始做逐会话成本审计（Zeroclaw #10700 按会话拆分开销的诉求）。**框架设计者必须把缓存稳定性作为架构约束**，而非优化后手。

**④ AI 代理参与社区协作开始常态化。** CoPaw 出现 AI 代笔 issue、Hermes 有机器人看门狗持续上报（#66616，181 条评论）、NanoBot 需要过滤 AI 批量生成的推广 issue。项目维护者需要建立 AI 生成内容的甄别与治理机制。

**⑤ 长期运行（7×24 常驻）是主流使用模式。** 资源泄漏、僵尸进程、索引锁死、磁盘无限增长在所有项目上集中出现——agent 框架的下一个质量分水岭是**无人值守运行一年不出事**。

**⑥ 中国社区是不可忽视的力量。** LobsterAI（网易）、CoPaw（阿里系）、PicoClaw（Sipeed）、ZeptoClaw 构成中文 IM 生态集群，飞书/钉钉/QQ 适配是海外项目普遍缺失的能力，同时中文文档缺失被反复提出为接入门槛。

---

*报告基于 2026-09-09 各项目 GitHub 公开动态生成，供技术选型与生态观察参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-09-09

## 1. 今日速览

NanoBot 今日保持高活跃度：过去 24 小时共更新 **36 条 PR**（待合并 25，已合并/关闭 11），Issues 更新 2 条（全部关闭），无新版本发布。社区贡献以修复类 PR 为主，聚焦 WebUI、Telegram 渠道、内存资源边界和流式输出稳定性等方向，其中多名贡献者（@Shizoqua、@Naster17、@chengyongru、@gary23w）在近 48 小时内连续提交高质量 PR，显示贡献者梯队健康。整体节奏呈“快速吸收修复 + 大特性 PR 长期排队”的典型活跃开源项目形态。

## 2. 版本发布

今日无新版本发布（最新数据中 Releases 为空）。

## 3. 项目进展

今日合并/关闭的 PR 共 11 条（数据仅展示部分关闭项），代表性进展：

- **#5712（已关闭）**：修复 WebUI 流式渲染数学公式时因 `<` 字符被截断导致 KaTeX 报错及后续内容丢失的问题（`fix(webui): preserve less-than comparisons in streaming math`）。
- **#5709（已关闭）**：刷新 OpenAI Codex 模型目录，将客户端版本从 0.144.0 提升至 0.153.4，使 GPT-6-Astra 出现在模型选择器中。
- 其余关闭项集中在小修复与陈旧 PR 清理。

仍在排队的重要待合并 PR（25 条）：

- **#5704**：WebUI 设置面板扩展至 41 个配置项并支持自动保存（[@chengyongru](https://github.com/HKUDS/nanobot/pull/5704)）
- **#5664 / #5665 / #5663**：@Shizoqua 的“内存边界三连”——idle summary 缓存、MCP OAuth flow、Mattermost 线程上下文缓存全部加上界
- **#5708**：长时执行会话流式输出 UTF-8 跨 chunk 解码修复
- **#5711 / #5707 / #5706**：@Naster17 的 Telegram 渠道命令与体验系列修复
- **#2183**：Honcho 长期记忆集成（存在冲突，3 月至今）
- **#5234**（P1）：mst-python 元搜索 provider 集成（存在冲突）

总体看，项目在**稳定性/资源治理**与**渠道体验**两条线上稳步推进。

## 4. 社区热点

- **Issue [#5693](https://github.com/HKUDS/nanobot/issues/5693)**（3 条评论，已关闭）：建议支持无人零售/IoT 边缘场景的轻量化自托管部署。注意该 Issue 由“AI 军团·笔芯秘书”自动提交，属于营销/引流性质内容，维护者关闭处理合理，但**“更轻量的边缘部署方案 + 中文文档”诉求本身有参考价值**。
- **Issue [#5696](https://github.com/HKUDS/nanobot/issues/5696)**（1 条评论，已关闭）：首次贡献者寻求 beginner-friendly issue，具备 Python/LangChain/RAG 背景。建议项目维护 `good first issue` 标签池承接此类流量。

今日无高评论量 PR 热点（数据中评论数多为空），讨论热度整体集中在 PR 队列本身。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | [#5708](https://github.com/HKUDS/nanobot/pull/5708) 长时执行会话中 UTF-8 字符跨 4KB 读取边界被替换为非法字符标记，污染工具输出 | 已有 fix PR（OPEN） |
| 高 | [#5664](https://github.com/HKUDS/nanobot/pull/5664) 被弃用会话导致 idle summary 缓存无限增长（内存泄漏类） | 已有 fix PR |
| 中 | [#5665](https://github.com/HKUDS/nanobot/pull/5665) 快速重启下 MCP OAuth flow 注册表无限增长 | 已有 fix PR |
| 中 | [#5663](https://github.com/HKUDS/nanobot/pull/5663) Mattermost 线程上下文集合无淘汰机制 | 已有 fix PR |
| 中 | [#5712](https://github.com/HKUDS/nanobot/pull/5712) WebUI 流式数学公式截断 | ✅ 已修复关闭 |
| 中 | [#5590](https://github.com/HKUDS/nanobot/pull/5590)（回归）超大 JSON 工具结果预览丢失根级字段 | fix PR 排队中 |
| 低 | [#5711](https://github.com/HKUDS/nanobot/pull/5711) / [#5707](https://github.com/HKUDS/nanobot/pull/5707) Telegram 连字符命令不可点击、/compact 等命令被静默丢弃 | 已有 fix PR |
| 低 | [#5638](https://github.com/HKUDS/nanobot/pull/5638) Copilot OAuth token 存储在容器内不可持久化路径 | 已有 fix PR |

**亮点**：所有已报告 Bug 均有对应 fix PR，无一处于“无响应”状态，缺陷响应链路健康。

## 6. 功能请求与路线图信号

- **长期记忆**：PR [#2183](https://github.com/HKUDS/nanobot/pull/2183)（Honcho opt-in 集成）直接对应路线图 issue #39，是“长期记忆”方向最成熟的候选，但已排队近 6 个月且标记 conflict，需维护者推动 rebase。
- **搜索生态扩张**：[#5437](https://github.com/HKUDS/nanobot/pull/5437)（Serply/Google SERP）与 [#5234](https://github.com/HKUDS/nanobot/pull/5234)（mst 元搜索，P1）表明 web search provider 正在成为社区贡献热点，预计会有更多 provider 进入下一版本。
- **WebUI 配置体验**：#5704（41 项设置 + 自动保存）+ #5710（项目/侧边栏重组）+ #5498（TUI onboarding 统一），呈现“配置面板产品化”的明确路线信号。
- **边缘/轻量部署**：#5693 的 IoT 诉求暂无对应 PR，属未覆盖方向。

## 7. 用户反馈摘要

- **企业/自托管用户**关注容器部署持久化（#5638）与自建网关（#4919 Telegram 自定义 Bot API），说明自托管场景用户占相当比例。
- **Telegram 重度用户**对命令可用性与消息噪音敏感（#5711、#5707、#5706：压缩通知合并为单条编辑消息），反映 Telegram 是核心使用渠道之一。
- **中文社区**存在（#5693、@dajiaohuang 等贡献者），但缺乏中文文档的痛点被明确提出。
- 自动提交的推广类 Issue（#5693）提示维护者可能需要识别和过滤 AI 批量生成的功能建议。

## 8. 待处理积压

以下长期未合并的重要 PR 需要维护者关注，多数已标记 `conflict`：

- **[#2183](https://github.com/HKUDS/nanobot/pull/2183)** — Honcho 长期记忆集成（2026-03-17 开启，~6 个月），路线图核心项
- **[#5234](https://github.com/HKUDS/nanobot/pull/5234)** — mst 元搜索 provider（P1，8 月初，conflict）
- **[#5387](https://github.com/HKUDS/nanobot/pull/5387)** — Telegram 贴纸复用回复（8/13，conflict）
- **[#5437](https://github.com/HKUDS/nanobot/pull/5437)** — Serply 搜索 provider（8/19，conflict）
- **[#5590](https://github.com/HKUDS/nanobot/pull/5590)** — JSON 工具结果预览修复（8/28，conflict）
- **[#4919](https://github.com/HKUDS/nanobot/pull/4919)** — Telegram 自定义 Bot API（7/14，近 2 个月）

**建议**：conflict 标记集中在 8 月中下旬的 PR，可能与一次较大的主干重构有关；维护者可考虑批量组织一次 rebase sprint，避免社区贡献持续流失。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-09-09

## 1. 今日速览

Zeroclaw 今日保持高度活跃：过去 24 小时内 Issues 更新 32 条（全部为新开/活跃，0 关闭），PR 更新 50 条（48 条待合并，2 条合并/关闭），无新版本发布。项目当前正处于**架构 RFC 密集讨论期**，多个高风险架构提案（会话历史、WASM 插件、沙箱策略）处于维护者评审或投票准备阶段， Revision 迭代频繁。同时围绕 OpenAI Responses 适配器（异步工具、steering、推理状态保持）出现一波集中式功能提案权。整体健康度良好，但 PR 积压（48 个待合并）和 RFC 决策队列的处理速度值得维护者关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日仅 2 个 PR 合并/关闭，整体处于**大批量 PR 评审消化阶段**，主要进展体现在新开 PR 的质量上：

- **今日新开重点 PR：**
  - [#10724 feat(providers): configurable cache_ttl for Anthropic prompt-cache markers](https://github.com/zeroclaw-labs/zeroclaw/pull/10724)（@Audacity88）— 为 Anthropic prompt-cache 标记增加可配置的 `cache_ttl`（`5m`/`1h` 枚举，解析期校验），与缓存相关的 Issue 群（#10674/#10701/#10662）形成呼应。
- **持续推进中的大型 PR（今日仍有更新）：**
  - [#10610 feat(security): shell V1 权限策略（RFC #7155 Phase 0+1）](https://github.com/zeroclaw-labs/zeroclaw/pull/10610) — 五个单一关注点 commit 实现已接受的统一工具权限策略。
  - [#10591 feat(bootstrap): MCP launcher 及跨平台分发](https://github.com/zeroclaw-labs/zeroclaw/pull/10591)、[#10592 feat(relay): `relay claim` 自助注册](https://github.com/zeroclaw-labs/zeroclaw/pull/10592) — 安全域基础设施持续推进。
  - [#10696 fix(runtime): 历史裁剪改为低水位目标](https://github.com/zeroclaw-labs/zeroclaw/pull/10696) — 直接修复 P1 级 #10674，避免每几轮重新裁剪击穿 prompt caching。

## 4. 社区热点

| Issue | 评论数 | 热点分析 |
|---|---|---|
| [#9487 RFC: Runtime-owned 会话与传输适配器](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)（Rev 5） | 35 | 最高热度。已迭代至第 5 版，Rev 4 的反对投票不延续，需重开讨论窗口——反映出**runtime/channel 职责边界**争议是社区核心分歧点。 |
| [#9488 RFC: 统一文件与附件架构](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)（Rev 10） | 28 | 迭代至第 10 版，说明多渠道（Web/Telegram/ACP/Matrix）附件语义统一极其复杂，社区投入了大量打磨精力。 |
| [#6996 RFC: 细粒度沙箱文件系统策略](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | 26 | 应用层路径准入与 OS 沙箱（Bubblewrap/Landlock/Seatbelt）长期漂移，安全模型收敛诉求强烈。 |
| [#8692 维护者决策队列 Tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 15 | 今日更新（少数 09-09 更新的 Issue 之一），大量 RFC 堆积在待决策状态，**维护者带宽已成为瓶颈的直接证据**。 |
| [#10076 RFC: 可组合 WASM 插件运行时](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | 11 | Rev 已将 7.3 节会话历史决策剥离给 #10526，体现 RFC 之间的职责重新划分。 |

诉求共性：社区（尤其 @NiuBlibing、@Audacity88）在推动**架构级重构文档化与投票流程规范**，同时 [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) 提出简化 RFC 投票流程（取消强制讨论窗口），说明流程摩擦本身已成为议题。

## 5. Bug 与稳定性

按严重程度排列：

- **S1（工作流阻断）** [#9333 ACP 失败回合在切换会话后消失](https://github.com/zeroclaw-labs/zeroclaw/issues/9333)（P1，risk:high，in-progress）— 失败回合的完整 transcript 丢失，尚无明确 fix PR。
- **P1（已接受，有 fix PR）** [#10674 历史裁剪每几轮重复触发，击穿 prompt caching](https://github.com/zeroclaw-labs/zeroclaw/issues/10674) — 已由 [#10696](https://github.com/zeroclaw-labs/zeroclaw/pull/10696) 修复（低水位裁剪），待合并；关联 follow-up [#10702](https://github.com/zeroclaw-labs/zeroclaw/issues/10702)（token-budget 裁剪同样问题）。
- **P2 今日新报：**
  - [#10720 zerocode v0.8.5 回复在聊天窗渲染两次](https://github.com/zeroclaw-labs/zeroclaw/issues/10720)（S3，与 [#10667](https://github.com/zeroclaw-labs/zeroclaw/issues/10667) 流式重复渲染疑为同族问题）
  - [#10721 `knowledge.db_path` 波浪号全局替换导致 knowledge 工具静默失效](https://github.com/zeroclaw-labs/zeroclaw/issues/10721)（S2，今日新开，尚无 fix PR）
  - [#10700 成本记录使用 daemon 生命周期 session_id，无法按会话拆分开销](https://github.com/zeroclaw-labs/zeroclaw/issues/10700)
  - [#10723 cached-input 零回退抑制定价缺失告警](https://github.com/zeroclaw-labs/zeroclaw/issues/10723)
- **P3 值得注意** [#10316 SOP 步骤预算耗尽将已接受的取消覆盖为 Failed](https://github.com/zeroclaw-labs/zeroclaw/issues/10316)（risk:high）

## 6. 功能请求与路线图信号

**OpenAI Responses 适配器功能群**（@IftekharUddin 集中提出，均为 P2/risk:high）：
- [#10704 异步函数工具](https://github.com/zeroclaw-labs/zeroclaw/issues/10704)（已接受）
- [#10706 保留不透明推理状态](https://github.com/zeroclaw-labs/zeroclaw/issues/10706)（已接受）
- [#10707 有界程序化工具调用](https://github.com/zeroclaw-labs/zeroclaw/issues/10707)（待维护者评审）
- [#10708 WebSocket 主动响应 steering](https://github.com/zeroclaw-labs/zeroclaw/issues/10708)（待维护者评审）
- [#10705 compatible 模型支持 `max` 推理档位](https://github.com/zeroclaw-labs/zeroclaw/issues/10705)

已接受的 #10704/#10706 极可能进入下一版本；配套 [#10636 zerocode effort 控件 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10636) 也在推进。

**其他信号：**
- [#10641 Web cron 按字段输入组件](https://github.com/zeroclaw-labs/zeroclaw/issues/10641)（已接受，help wanted — 适合外部贡献者上手）
- [#10679 Keenable 网络搜索提供商 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10679)（外部公司 @ilya-bogin-keenable 提交，生态合作信号）
- [#10725 ZeroCode 结构化工具输入可读渲染](https://github.com/zeroclaw-labs/zeroclaw/issues/10725)（今日新开）

## 7. 用户反馈摘要

- **多模态体验是痛点高发区**：Telegram 多图被拆成多轮（#5514，#8955 修复中）、非视觉模型收到 `[media attachment]` 字面占位符（[#10625](https://github.com/zeroclaw-labs/zeroclaw/issues/10625)）、图片附件使整个缓存前缀失效（[#10701](https://github.com/zeroclaw-labs/zeroclaw/issues/10701)）——用户在多渠道使用图像时体验割裂。
- **成本可观测性不足**：#10700 反映用户希望按会话/agent 精确核算花费，当前数据模型粒度不够。
- **缓存效率直接关系钱包**：#10674 社区反馈工具密集会话反复 trim 导致缓存命中率暴跌，用户对 prompt caching 的重视度很高。
- **zerocode 显示层缺陷影响信任**：回复重复渲染（#10720/#10667）虽不影响正确性，但被用户视为"诡异体验"。
- **配置陷阱**：`~` 全局替换（#10721）这类静默失败类 bug 对新用户尤其不友好。

## 8. 待处理积压

- **RFC 决策队列拥堵**：[#8692 决策 Tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) 中大量 RFC（#9487、#9488、#10076、#10526、#10549 等）标记 `needs-maintainer-review`，多个已迭代 5–10 个 Revision 仍未投票，建议维护者优先处理投票窗口安排。
- **PR 积压 48 个待合并**，其中 8+ 个 XL 体量 PR（#8955、#10480、#10591、#10610、#10615、#10636、#10640、#10679）长期 Open；#8955 已存在近 2 个月且标记 `needs-author-action`。
- **标记 `needs-author-action` 的 PR**：[#8955](https://github.com/zeroclaw-labs/zeroclaw/pull/8955)、[#10608](https://github.com/zeroclaw-labs/zeroclaw/pull/10608)、[#10615](https://github.com/zeroclaw-labs/zeroclaw/pull/10615) 需作者跟进。
- **长期 Issue**：#5514（4 月开报，修复 PR #8955 仍在评审）、#10316（8 月开报、risk:high 的取消语义 bug）无明确修复指派。

---

*数据来源：GitHub API（zeroclaw-labs/zeroclaw），统计窗口 2026-09-08 至 2026-09-09。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-09-09

## 1. 今日速览

Hermes Agent 今日保持高活跃度：24 小时内 Issues 更新 50 条（新开/活跃 42，关闭 8），PR 更新 50 条（待合并 39，合并/关闭 11），无新版本发布。社区新增多个高质量 bug 报告，集中在 **0.21.1 Windows 桌面更新链路**、**异步委托唤醒失败** 和 **消息投递可靠性** 三大主题。PR 侧贡献活跃，今天就有约 8 个新 PR 提交，覆盖 CLI、gateway、cron、desktop 等多个组件，显示项目处于健康的迭代节奏中，但 Windows 更新链的连续回归值得维护者警惕。

## 2. 版本发布

今日无新版本发布。最新稳定 tag 仍为 v2026.8.31（v0.21.0）/ v0.21.1，其中 v2026.8.31 存在打包缺失问题（见下文 #101865）。

## 3. 项目进展

今日合并/关闭 PR 共 11 个，代表性进展：

- **#106240 [已关闭] fix(kanban): 加固看板隔离与订阅**（AlexandercSchumacher）：测试前对操作看板路径 fail-closed（含 symlink 解析），并将当前 managed-config 状态与 last-known-good 分离，通知路由需当前用户同意 —— 安全边界收紧。
- **#106238 [已关闭] fix(cron): 抑制确认死亡投递目标**（Gabrielnkl）：cron 实时投递接入 `DeadTargetRegistry`，避免向已删除群/被踢 bot 反复重试。与长期 PR #64915 同一方向，说明 cron 投递可靠性问题正在被系统性解决。
- **#105145 / #105587 / #106097 [已关闭]**：三个 Windows 桌面更新后验证失败（exit 8 / "executable missing" / cwd 错误）的 P1-P2 issue 今日集中关闭，Windows 更新链路的修复已落地。
- **#62333 [已关闭]**：MCP OAuth refresh_token 被覆盖导致服务器 1 小时后失效的安全边界 bug 修复关闭 —— 这是本周较重要的 MCP 稳定性修复。
- **#104679 [已关闭]**：Dashboard 无法对话且零反馈的 blocker 已关闭。

整体看，今天推进了 **cron/看板投递可靠性**、**Windows 更新链路**、**MCP OAuth** 三条主线，约 8 个 P1-P2 级用户痛点得到闭环。

## 4. 社区热点

- **#66616 — Skills index 陈旧告警（181 条评论，OPEN）**：自动化探针报告 `/docs/api/skills-index.json` 已 29.8h 未刷新（阈值 26h），由 [@nousbot-eng](https://github.com/NousResearch/hermes-agent/issues/66616) 机器人持续上报。181 条评论说明此看门狗 issue 长期未根治，是文档站/Skills Hub 基础设施的头号健康隐患。
- **#105145 — Windows 桌面更新误报 FAILED（16 条评论，已关闭）**：更新实际成功但验证步骤解析错误工作目录导致 exit 8，用户 @rickykan 报告详尽。今日关闭，配套 issue #105587、#106097 同日关闭，Windows 用户群关注度高。
- **#101865 — 稳定 tag 缺失 Tavily 插件（👍3）**：v2026.8.31 打包遗漏 `plugins/web/tavily/`，导致 tavily 用户 web_search 直接不可用，属于发版流程回归，社区反应强烈。
- **#41225 — 后台进程被 SIGTERM 误杀（P1）**：`terminal(background=true)` 启动的进程在会话结束/上下文压缩/错误恢复时被杀，长期 P1 未解。

## 5. Bug 与稳定性（按严重程度）

| 级别 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| P1 | [#41225](https://github.com/NousResearch/hermes-agent/issues/41225) | agent lifecycle `release()` 时 SIGTERM 误杀后台进程 | 未见到直接 fix PR |
| P2 安全 | [#59293](https://github.com/NousResearch/hermes-agent/issues/59293) | `hermes config set` 可绕过 system-config 写保护，Agent 能关闭审批层 | needs-decision，尚无 PR |
| P2 | [#106202](https://github.com/NousResearch/hermes-agent/issues/106202) | 0.21.1 异步委托完成后父会话不唤醒，任务看似卡死 2h16m | 相关 PR #106242（terminalize 子会话状态）今日提交 |
| P2 | [#105771](https://github.com/NousResearch/hermes-agent/issues/105771) | 截断 tool-call 重试的 max_tokens 提升是空操作，放弃路径无日志 | 无 PR |
| P2 | [#101865](https://github.com/NousResearch/hermes-agent/issues/101865) | 稳定 tag 缺 Tavily 插件目录 | 已关闭（打包修复） |
| P2 | [#106066](https://github.com/NousResearch/hermes-agent/issues/106066) | WhatsApp 引用解析丢失 ephemeralMessage 内文本 | 无 PR |
| P2 | [#106182](https://github.com/NousResearch/hermes-agent/issues/106182) | 配置含 YAML 时间戳导致 TUI 子进程退出（datetime 无法 JSON 序列化） | 无 PR |
| P2 | [#101007](https://github.com/NousResearch/hermes-agent/issues/101007) | `mcp_servers.lazy` 永不生效，schema cache `ttl_ms:0` 被判过期 | 无 PR |
| P2 | [#82502](https://github.com/NousResearch/hermes-agent/issues/82502) | 微信适配器把 `prepare failed` 误判为限流打开熔断器 | 无 PR |
| P3 | [#106195](https://github.com/NousResearch/hermes-agent/issues/106195) | `kanban promote --force` 报成功但不改状态（假成功） | 相关 PR #73188 长期在途 |
| P3 | [#106235](https://github.com/NousResearch/hermes-agent/issues/106235) | mem0 OSS 嵌入 500 时静默丢长对话 | fix PR #37427 长期在途 |

**P0 信号**：PR [#103476](https://github.com/NousResearch/hermes-agent/pull/103476)（teknium1）修复 Claude keep-all 模型每轮剥离 thinking 块导致缓存前缀字节不稳定、重复计费的问题 —— 属于成本/缓存正确性关键修复，建议优先评审。

## 6. 功能请求与路线图信号

- **#46027 Delegate 子代理卫生改进**（6 月提出）→ 今日 PR [#106246](https://github.com/NousResearch/hermes-agent/pull/106246) 实现最后一项 `delegation.suppress_memory_notify`，该路线图即将完结。
- **#106192 + PR #106196**：将 CI 的 `ty invalid-method-override` 诊断从 advisory 升级为 blocking，同日 issue-PR 成对出现，工程质量门槛在收紧，大概率近期合入。
- **#102765 统一包管理器 `pm/`**（大 PR，标签极多含 needs-decision）：统一工具安装/依赖/自包含打包/更新器所有权，是安装更新架构的重大重构信号。
- **#79198 跨平台会话组**：Discord/Telegram 共享同一会话上下文的配置驱动方案，用户呼声高（多个平台适配相关 issue 呼应）。
- **#87943 按 model 覆盖压缩阈值**、**#46041 每会话独立 Docker 容器**：中长期路线图候选。

## 7. 用户反馈摘要

- **Windows 桌面用户是当前最痛的群体**：更新误报失败（#105145/#105587/#106097）、ACP 客户端下 terminal 阻塞 330 秒（#80952）、Python 3.14 兼容（#83992）——多为中国与桌面用户贡献的详尽报告，反映 Windows 支持为短板但社区参与度高。
- **运维自动化用户关注“假成功”**：kanban promote 报成功实际未执行（#106195）、异步委托不唤醒（#106202）——用户在用 Hermes 跑长时自动化任务，静默失败比崩溃更伤信任。
- **成本敏感**：Claude 缓存前缀被破坏导致重复写费用（PR #103476）、截断重试空转（#105771）说明有重度用户在做成本审计。
- **本地/自托管场景活跃**：Ollama 本地嵌入（#106235）、LAN 端点被误标 stale（#106228）、mem0 OSS，自托管用户群在增长。
- **满意度正面信号**：issue 报告质量普遍很高（带复现、版本、日志），多语言社区（中文、俄语、西语用户）参与，说明项目国际用户基础扎实。

## 8. 待处理积压

| 项目 | 说明 | 呼吁 |
|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index 看门狗，181 条评论，持续 degraded | 维护者需根治 CI 索引流水线 |
| [#41225](https://github.com/NousResearch/hermes-agent/issues/41225) | P1 后台进程误杀，6 月开至今 | 高优先级无 fix PR |
| [#59293](https://github.com/NousResearch/hermes-agent/issues/59293) | 安全：CLI 绕过审批层写保护，needs-decision | 需维护者决策，建议提升优先级 |
| [#101007](https://github.com/NousResearch/hermes-agent/issues/101007) | MCP lazy 加载完全失效 | 影响所有 HTTP MCP 用户 |
| PR [#64915](https://github.com/NousResearch/hermes-agent/pull/64915) | cron 死目标投递，7 月中旬至今 | 今日已有同方向 PR 关闭，此 PR 需对齐避免重复 |
| PR [#73026](https://github.com/NousResearch/hermes-agent/pull/73026) | cron LLM 回复泄露 secrets，7 月底至今 | 安全相关，建议加速评审 |
| PR [#87520](https://github.com/NousResearch/hermes-agent/pull/87520) | 审批无响应者时 fail-closed | 安全默认值改进，长期未合 |

**健康度小结**：issue 关闭率（8/50）与 PR 合并率（11/50）显示消化能力尚可但有积压倾向；安全类 PR（#73026、#87520、#59293）滞留时间偏长，是当前最需要维护者投入的方向。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-09-09

## 1. 今日速览

PicoClaw 今日保持中高活跃度：过去 24 小时共有 13 条 Issue/PR 更新，其中 4 条新开 Issue、7 条活跃 PR，无新版本发布。值得注意的是贡献者 **@sting8k** 单日提交了 2 个高质量 Bug 报告（#3373、#3374）并配套 2 个修复 PR（#3375、#3372）和 1 个功能 PR（#3371），形成“报告即修复”的良性贡献模式。整体看，社区贡献重心集中在**配置安全性与渠道（Telegram/飞书/deltachat）健壮性**上，但多条 Issue/PR 已进入 stale 状态，维护者响应速度值得关注。

## 2. 版本发布

今日无新版本发布。用户侧最新可用仍为 nightly 构建（如 #3355 中提到的 `nightly-50-gbbf6893c`）。

## 3. 项目进展

今日无 PR 合并；关闭了长期搁置的增强类 PR **#714**（skills install/reinstall CLI 重构，[链接](https://github.com/sipeed/picoclaw/pull/714)），该 PR 自 2026-02-24 开启后历经 6 个多月未合并，最终被关闭，显示 skills CLI 方向可能有新的实现规划或被放弃，值得跟进。

仍待合并的重要 PR：
- **#3375** [fix(config)](https://github.com/sipeed/picoclaw/pull/3375) — 修复敏感数据缓存并发初始化竞态，与 Issue #3374 直接对应，建议优先审查
- **#3372** [fix(config)](https://github.com/sipeed/picoclaw/pull/3372) — 使 reaction 工具可配置化
- **#3371** [feat(providers)](https://github.com/sipeed/picoclaw/pull/3371) — 新增 opencode-go provider，含 session header 支持
- **#3357 / #3356** [fix(telegram)](https://github.com/sipeed/picoclaw/pull/3357) — 回复隐式 @mention 与引用文档重附，体验类修复
- **#3344** — Build Remote Agent 手机配对适配器（gbr/1 协议），扩展多端生态

## 4. 社区热点

- **#3265**（3 评论，👍1，已关闭）[Gateway 启动失败：deltachat unknown type](https://github.com/sipeed/picoclaw/issues/3265) — 用户在未配置 deltachat 时网关无法启动，最终关闭，与 PR #3222 的 deltachat 大清理相关，说明渠道注册逻辑曾有不严格的默认加载问题。
- **#3343**（3 评论，仍开放）[Telegram 动画无限 editMessageText](https://github.com/sipeed/picoclaw/issues/3343) — 一次失败的 agent turn 导致连续多日每 3 秒调用一次 Telegram API（超 22.8 万次），触发服务端限流。这是今日**影响最大**的用户报告，反映缺少“动画生命周期终止”兜底机制，背后诉求是长时间无人值守运行的可靠性。
- **#3355**（飞书配置字段报错）— 反映 nightly 版本配置 schema 与文档/示例脱节，中文用户群组是重要用户来源。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#3373](https://github.com/sipeed/picoclaw/issues/3373) | `SaveConfig` 静默丢弃第一个之后的所有 `api_keys`，并残留悬空 fallback 引用——**静默数据丢失** | 暂无 |
| 🔴 高 | [#3343](https://github.com/sipeed/picoclaw/issues/3343) | 工具反馈动画无限循环调用 Telegram API，触发服务端限流 | 暂无 |
| 🟠 中 | [#3374](https://github.com/sipeed/picoclaw/issues/3374) | `initSensitiveCache` 数据竞态可返回 nil replacer 并致 `FilterSensitiveData` panic | ✅ [#3375](https://github.com/sipeod/picoclaw/pull/3375) |
| 🟡 低 | [#3355](https://github.com/sipeed/picoclaw/issues/3355) | 飞书配置字段校验报错（app_id 不被识别），疑似配置 schema 变更未同步文档 | 暂无 |

## 6. 功能请求与路线图信号

- **配置持久化安全**：#3373（api_keys 丢失）是强信号，配合 @sting8k 密集的 config 模块贡献（#3372/#3375），预计 config 健壮性修复将在下一版本集中落地。
- **Provider 扩展**：#3371（opencode-go）表明社区对多样化 LLM 接入有持续需求，方向与项目多 provider 架构一致，合并概率较高。
- **多端/远程体验**：#3344（手机配对旁观桌面 agent）代表“个人 AI 助手随身化”趋势，若维护者认可 gbr 协议生态，可能成为差异化功能。
- **Telegram 群组体验**：#3356/#3357 均为对话连续性修复，属于低风险高价值，建议尽快合入。

## 7. 用户反馈摘要

- **痛点：无人值守可靠性**——#3343 中用户让 agent 运行数天后遭遇 Telegram 限流，暴露“turn 失败后资源未回收”类问题，长时运行场景（个人助理常驻）是核心使用模式。
- **痛点：配置系统脆弱**——#3373 的静默 key 丢失和 #3355 的字段校验报错，说明用户频繁手改 config.json，而配置的校验、迁移、文档一致性不足。
- **痛点：渠道接入门槛**——飞书、deltachat 用户在配置阶段即失败，非英语社区用户依赖示例配置，容错与错误提示需更友好。
- **正面信号**：社区贡献者能深入到并发竞态级别的代码分析（#3374 含精确代码行定位），说明代码可读性和社区技术水位较高。

## 8. 待处理积压

以下条目已被标记 stale 且长期无维护者响应，建议关注：

- **#3222**（PR，7 月开）[deltachat 清理 -200LOC](https://github.com/sipeed/picoclaw/pull/3222) — 涉及破坏性配置变更（secrets 迁移至 jsonrpc），需维护者表态
- **#3343**（8 月开）Telegram 动画无限循环 — 高影响 Bug 无 fix PR，建议排期
- **#3344**（8 月开）Build Remote Agent 适配器 — 大型新功能，需架构评审
- **#3356 / #3357**（9 月开）Telegram 修复 PR — 已 stale，作者 @hugodeco 等待 review
- **#3355**（9 月开）飞书配置报错 — 中文社区入口问题，影响新用户转化

---

**健康度小结**：今日社区贡献质量高（3 个新 PR 含 2 个即时报修即修），但 **0 合并、0 发布 + 多条 stale** 表明维护带宽是当前瓶颈；config 模块的数据完整性问题（#3373）应在下个版本前优先处理。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 · 2026-09-09

## 1. 今日速览

NanoClaw 过去 24 小时保持中高活跃度：共 2 条 Issue 更新（1 开 1 关）、9 条 PR 更新（7 待合并、2 合并/关闭），无新版本发布。开发重心集中在 **OpenCode 提供商集成**（两条大型 feature PR 持续推进）和 **线程消息路由修复**（两个相关 fix PR 并行）。社区侧新增一个生产级隐患报告（conversations 归档无限增长），值得关注。整体节奏为典型的“功能迭代 + 稳定性打磨”并行阶段，核心团队主导开发，外部贡献者开始补位修复。

## 2. 版本发布

过去 24 小时无新版本发布。（Issue #3735 提及的 2.1.53 为近期版本，未在本周期发布。）

## 3. 项目进展

**已合并/关闭：**

- **PR #3729（已关闭）** — [feat(setup): connect the host to its community cell and manage perks in the browser](https://github.com/nanocoai/nanoclaw/pull/3729)：将 Echo 与 Slack 设置迁移到社区门户，实现浏览器内一次完成配置并保持主机与账户 cell 关联。该 PR 活跃 3 天后关闭，setup 流程向“零命令行”方向演进。
- **PR #3441（已关闭）** — [fix(setup): preserve files when git show fails](https://github.com/nanocoai/nanoclaw/pull/3441)：修复 setup 拷贝步骤中 `git show` 失败时破坏文件的问题，采用临时文件 + 原子移动策略，shell 与 TS 路径统一。历经 17 天终于收尾，setup 健壮性提升。
- **Issue #3744（已关闭）** — v1→v2 迁移中 `migrate-v2.sh` 未安装 5/6 渠道的问题已确认处理完毕。

**待合并的重要进展：**

- **PR #3733 / #3747（OpenCode 集成两连击）**：[#3733](https://github.com/nanocoai/nanoclaw/pull/3733) 实现提供商契约与主机认证（runtime、MCP、压缩、恢复全适配），[#3747](https://github.com/nanocoai/nanoclaw/pull/3747) 完成安装期集成与 host assistance 路由。OpenCode 作为新 provider 即将落地。
- **PR #3746** — [fix: preserve provider cancellation, failure delivery, and skill files](https://github.com/nanocoai/nanoclaw/pull/3746)：修复取消信号穿透、失败回合状态与 skill 文件保护。

整体看，今日推进了 1 个新 provider 集成的主体工作 + setup 体验重构 + 多项 runner 级修复，进展扎实。

## 4. 社区热点

- **[Issue #3735](https://github.com/nanocoai/nanoclaw/issues/3735)**（2 条评论，今日最活跃）：用户报告 `archiveTranscriptFile()` 每次压缩都向 `conversations/` 写入 markdown 归档，**无保留策略、无上限**，agent group 生命周期内无限增长，且已在生产 fleet 中造成实际影响。诉求明确：需要 retention/rotation/cap 机制。这是典型的“长期运行部署”用户反馈，预计会较快获得响应。
- **PR #3733 / #3747**（OpenCode 集成）：标签数量多、覆盖面广（agent-runner、containers、providers、skills），是当前路线图的最大工程。

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [Issue #3735](https://github.com/nanocoai/nanoclaw/issues/3735) conversations 归档无限增长，生产 fleet 磁盘风险 | 无 fix PR，需关注 |
| 🟠 中 | [PR #3750](https://github.com/nanocoai/nanoclaw/pull/3750) `/update-nanoclaw` 更新控制器无法加载（git archive 遗漏 `provider-contract-verifier.ts`） | ✅ 已有 fix PR |
| 🟠 中 | [PR #3749](https://github.com/nanocoai/nanoclaw/pull/3749) 同一处理窗口内多线程触发消息导致回复丢失 | ✅ 已有 fix PR |
| 🟡 中低 | [PR #3738](https://github.com/nanocoai/nanoclaw/pull/3738) `send_message`/`send_file` 回复落到主频道而非原线程 | ✅ 已有 fix PR |
| 🟡 中低 | [PR #3746](https://github.com/nanocoai/nanoclaw/pull/3746) 取消信号未穿透工具包装器、skill 文件丢失 | ✅ 已有 fix PR |

好消息：除 #3735 外，其余报告的 bug 均已有对应修复 PR 在途，响应闭环健康。

## 6. 功能请求与路线图信号

- **OpenCode provider**：#3733 + #3747 双 PR 表明这是当前最高优先级的新能力，核心团队（core-team 标签）主导，预计进入下一版本。
- **context-preview 工具复活**（[PR #3745](https://github.com/nanocoai/nanoclaw/pull/3745)）：让维护者/端到端测试无需拉起容器即可查看 agent 实际读取的上下文——调试体验的明显投入。
- **社区门户化 setup**（已关闭的 #3729）：setup 向浏览器自助化迁移的信号明确。
- **存储保留策略**（Issue #3735）：虽是 bug 报告形式，本质是 retention 功能缺口，长期运行用户刚需，建议纳入路线图。
- **v1 渠道迁移收尾**（已关闭的 #3744）：WhatsApp/iMessage/Resend/Discord 的 `nc:` 指令式 SKILL.md 安装路径已打通。

## 7. 用户反馈摘要

- **生产部署用户**（#3735）：多主机 fleet 运行，痛点是长期磁盘占用无治理，反映项目已被用于 7×24 常驻场景，运维属性需求上升。
- **迁移用户**（#3744）：从 v1 升级 v2 时渠道安装大面积失败，说明 v2 迁移工具链早期摩擦较大（现已修复），提示迁移文档与脚本测试覆盖需加强。
- **更新机制用户**（#3750）：依赖 `/update-nanoclaw` 自更新的用户遇到更新器本身损坏，暴露“自举类”代码路径测试薄弱。

## 8. 待处理积压

- **Issue #3735**（2026-09-07 开启，2 评论，尚无 fix PR）：唯一活跃未闭环的 Issue，涉及生产磁盘安全，建议维护者优先分派或给出临时 workaround（如 cron 清理）。
- **7 个 OPEN PR 待审**：其中 #3733/#3746/#3738 已开启 1–2 天且更新于今日，处于待 review 状态；PR #3441 曾积压 17 天才关闭，提示 review 吞吐有提升空间。
- 今日无长期（>30 天）无响应的 Issue/PR，整体积压健康。

---
*数据来源：NanoClaw GitHub 过去 24 小时 Issue/PR 活动。健康度总评：🟢 良好——开发活跃、bug 响应闭环快，需关注 #3735 存储治理缺口的优先级。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-09-09

## 1. 今日速览

IronClaw 过去 24 小时处于**高度活跃**状态：11 条 PR 更新（6 条待合并、5 条合并/关闭）、2 条 Issue 活跃（其中 1 条为新开）、无新版本发布。今日动态高度聚焦于 **Hosted-MCP 多租户安全问题**（Issue #6778 及配套 PR 链），贡献者 @kirikov 单日贡献了 7 条 PR，显示核心开发节奏密集。整体看，项目正围绕 MCP 扩展架构做一轮系统性的加固与演进，而非修修补补。

## 2. 版本发布

今日无新版本发布（无 Releases），可判断项目仍处于主线开发/迭代阶段。

## 3. 项目进展

今日关闭的 5 条 PR 多为“被更新实现取代”而非被合并落地：

- **[#8083](https://github.com/nearai/ironclaw/pull/8083)（已关闭）** — 修复 hosted-MCP 目录发现“最后写入者胜出”导致用户互相覆盖工具的问题。原方案是合并目录，已被按调用方（per-caller）键控的新方案 **[#8090](https://github.com/nearai/ironclaw/pull/8090)（OPEN）** 取代，架构思路升级。
- **[#8088](https://github.com/nearai/ironclaw/pull/8088)（已关闭）** — 区分“设为空字符串”与“未设置”的环境变量，修复操作员拼写错误被静默吞掉的问题。
- **[#8089](https://github.com/nearai/ironclaw/pull/8089)（已关闭）** — 打包 agent.market hosted-MCP 提供方包，与旧 PR #6760 同属“意图保留、实现重做”。
- **[#6760](https://github.com/nearai/ironclaw/pull/6760)、[#6759](https://github.com/nearai/ironclaw/pull/6759)（均关闭）** — 两条 7 月底的长龄 PR 正式关闭：marketplace 扩展改为一 crate 一包的新形态（后继 #8089）；SEP-414 归因改为严格 opt-in 并需要 rebase（后继 #8084）。

**评估**：项目完成了一轮“架构重定形”——旧 PR 批量关闭并以更干净的新实现重启，MCN/扩展体系正在向“每安装隔离、每调用方归因”的方向演进。

## 4. 社区热点

- **[Issue #6778](https://github.com/nearai/ironclaw/issues/6778)**（2 条评论，7 月底提出、今日随 #8090 重新活跃）— Hosted-MCP 工具目录仅按 extension id 发布，不按 installation 隔离，多租户服务器上存在**跨用户元数据暴露**风险。这是目前讨论最多的问题，且已有明确修复路径（#8090 + #8083 闭环）。
- **[PR #8090](https://github.com/nearai/ironclaw/pull/8090)** — 上述安全问题的核心修复，讨论焦点集中在“per-caller 键控”设计上。
- **[Issue #8086](https://github.com/nearai/ironclaw/issues/8086)**（今日新开）— `ironclaw skills list` 看不到运行时/agent 写入的技能，排障工具给出误导性空结果，直指**可观测性与一致性**痛点。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 / Fix PR |
|---|---|---|
| **高（安全）** | 多租户 hosted-MCP 服务器上跨用户工具目录暴露（[#6778](https://github.com/nearai/ironclaw/issues/6778)） | ✅ Fix PR [#8090](https://github.com/nearai/ironclaw/pull/8090) 已提交，待合并 |
| 中 | `FOO=` 空值环境变量被静默当作未设置，部署决策被吞（[#8088](https://github.com/nearai/ironclaw/pull/8088)，已关闭） | 已处理 |
| 中 | operator 安装的包可构建但不可用（manifest 校验与构造函数规则不一致，[#8085](https://github.com/nearai/ironclaw/pull/8085)，OPEN） | fix PR 已提交待合并 |
| 中 | CLI 看不到 agent/其他用户安装的 skills（[#8086](https://github.com/nearai/ironclaw/issues/8086)） | ⚠️ 尚无 fix PR |

## 6. 功能请求与路线图信号

从今日 PR 可读出明确的路线图方向：

- **MCP 深化**：SEP-414 调用方归因（[#8084](https://github.com/nearai/ironclaw/pull/8084)，opt-in `_meta` 标注）+ agent.market 第一方包（#8089），表明团队在建设**面向提供方的可计费、可归因 hosted-MCP 生态**。
- **上下文预算治理**：128k prompt 上下文上限改为可覆盖（[#8087](https://github.com/nearai/ironclaw/pull/8087)）+ 附件“指针模式”避免 PDF 内联吃掉 25k tokens/份（[#8082](https://github.com/nearai/ironclaw/pull/8082)）——两 PR 相互呼应，长上下文/多文档场景是明确的下一版本方向。
- **渠道扩展**：Telegram Bot 激活时自动注册命令菜单（[#8072](https://github.com/nearai/ironclaw/pull/8072)，@thisisjoshford），多渠道入口体验持续打磨。

## 7. 用户反馈摘要

- **多租户/多用户部署是核心场景**：#6778、#8090、#8086 反复出现“per-user installation”“cross-user exposure”表述，说明企业/托管部署用户是重要群体，且当前隔离边界不够清晰。
- **可观测性痛点**：#8086 中“排障工具指向错误问题”是典型的开发者体验抱怨——CLI 与 runtime 状态不同步。
- **运维友好度**：#8088、#8087 反映部署者希望“配置即生效、无需改源码”，环境变量和常量硬编码是摩擦点。
- **成本与上下文焦虑**：#8082 中“一份 PDF ≈ 25k tokens、每轮重复计费”直击长对话成本问题。

## 8. 待处理积压

- **[Issue #6778](https://github.com/nearai/ironclaw/issues/6778)**：安全级问题，自 7 月 28 日提出已 **43 天**，虽已有 #8090 修复 PR，但 0 👍、仅 2 评论，建议维护者优先评审合入。
- **[Issue #8086](https://github.com/nearai/ironclaw/issues/8086)**：今日新开，尚无维护者回应、无关联 fix PR，需确认修复归属。
- **待合并 PR 队列（6 条）**：#8090（安全修复，优先级最高）、#8087、#8084、#8085、#8082、#8072，均创建于近几日且尚无 👍/评论，提示评审带宽可能是当前瓶颈。

---
**健康度小结**：开发活跃度高、Issue→PR 响应链路完整（多数 Bug 当天即有 fix PR），但 PR 评审吞吐与安全修复的合入速度值得维护者关注。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-09-09）

## 1. 今日速览

今日 LobsterAI 呈现**高度活跃但集中于维护性工作**的状态：过去 24 小时 PR 更新 11 条（10 条已合并/关闭，1 条待合并），Issues 更 0 条，无新版本发布。所有活跃 PR 均围绕 **OpenClaw v2026.8.1 升级后的兼容性修复**展开，核心贡献者 @btc69m979y-dotcom 单日连续推进 #2625–#2633 系列修复，显示团队正处于大版本适配的收尾冲刺阶段。社区侧（Issue/评论）今日零活跃，反馈热度暂时沉寂。

## 2. 版本发布

今日无新版本发布。但 PR #2625–#2633 密集修复升级兼容问题，预示 OpenClaw v2026.8.1 适配完成后可能迎来一次集中发版，建议用户关注后续 Release。

## 3. 项目进展

今日合并/关闭 10 条 PR，主线为 **OpenClaw v2026.8.1 升级兼容性攻坚**，整体进展显著：

- **#2625**（已关闭）：修复升级后旧会话迁移、Agent 配置同步及打包网关启动问题，保留各 Agent 的 workspace、系统功能归属及 IM 路由，并缩减 Windows runtime 分发体积。这是本系列修复的基础性 PR。
- **#2626**（已关闭）：预装 8 个上游改为外部插件分发的外部模型供应商（如 Qwen），避免启动时因 `requires capability consent` 导致网关停止。
- **#2627**（已关闭）：适配新版 `ask_user` 的 `question.*` 协议，修复原生提问请求不再弹出桌面对话框的问题，并隐藏泄漏到确认按钮标签中的推荐后缀。
- **#2628 / #2629 / #2630**（已关闭）：系统性修复插件兼容性——钉钉（Windows Jiti loader 的 `import.meta` 报错）、飞书（SDK 根入口不再导出）、NIM 与网易小蜜蜂（`emptyPluginConfigSchema` 从 `openclaw/plugin-sdk` 移除导致 `ERR_PACKAGE_PATH_NOT_EXPORTED`）；#2630 进一步将钉钉升级到适配新版 SDK 的正式版并修复飞书运行时配置读取，恢复入站消息分发。
- **#2631**（已关闭）：修复定时任务历史与失败状态回归——同一 run 通过不同 session alias 获取时只导入一次；持久化回执创建前的失败现会记录错误结果而非停留在运行前状态。
- **#2632**（已关闭）：退出登录或模型未加载时保留已有非模型配置（IM 账号、Agent 路由、网关认证），并通过父子进程 IPC 让 Windows 网关优雅停止，避免被累积记为不洁退出、触发通道自动启动抑制。
- **#2624**（已关闭，@liuggang519）：修复 HTML 缩略图白屏与 Mermaid 预览渲染竞态，含代次校验、有界等待动画、缓存版本隔离及回归测试，工程质量较高。
- **#1159**（已关闭，stale）：cowork 会话分叉（Session Fork）功能 PR 因长期停滞被关闭，令人惋惜。

**待合并**：
- **#2633** [OPEN]：修复 Discord DM 配置——升级后旧 `dm.policy` / `dm.allowFrom` 被 schema 拒绝导致网关无法启动，改为输出顶层 `dmPolicy` / `allowFrom`。为目前唯一待合并 PR，是升级兼容系列的最后一块拼图。

## 4. 社区热点

今日 Issues 零新增、零活跃，PR 评论数据缺失（均为 undefined），**无明确的社区讨论热点**。相对而言，#2625 与 #2633 作为升级兼容系列的枢纽 PR（被多条后续 PR 引用），是技术侧的“隐性热点”，其顺利落地是多 IM 通道（QQ/钉钉/飞书/Discord）恢复可用的关键。

## 5. Bug 与稳定性

今日无新增 Issue 报 Bug，但合并的 PR 揭示并修复了大量升级回归，按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 严重 | 升级后网关无法启动（会话迁移 CLI 退出、配置被拒后无效重启、`requires capability consent`）| ✅ 已修复 #2625 / #2626；Discord DM 场景待合并 #2633 |
| 🔴 严重 | 钉钉/飞书/NIM/网易小蜜蜂插件加载失败或无法处理入站消息 | ✅ 已修复 #2628 / #2629 / #2630 |
| 🟠 中等 | 原生 `ask_user` 不再弹出桌面确认对话框 | ✅ 已修复 #2627 |
| 🟠 中等 | 退出登录/模型未加载时 IM 配置被清空；Windows 网关非优雅退出 | ✅ 已修复 #2632 |
| 🟡 一般 | 定时任务历史重复导入、准备阶段失败状态不落盘 | ✅ 已修复 #2631 |
| 🟡 一般 | HTML 缩略图白屏、Mermaid 渲染竞态 | ✅ 已修复 #2624 |

## 6. 功能请求与路线图信号

- 今日无新功能请求 Issue。
- 已关闭的 **#1159（cowork Session Fork）** 曾是有价值的功能方向（从会话详情分支实验），因长期未响应以 stale 关闭。若社区再度呼吁，或可作为路线图候选“复活”。
- #2626 预装 8 家外部模型供应商插件，暗示后续对多供应商开箱即用体验的持续投入。

## 7. 用户反馈摘要

今日无 Issue 评论数据可提炼。从 PR 描述侧面可推断用户实际痛点场景：**多 IM 通道（QQ、钉钉、飞书、Discord、NIM）接入后的升级脆弱性**——每次 OpenClaw 运行时升级都曾导致消息接收中断，是当前最影响可用性的体验问题，今日修复正是对此的集中回应。

## 8. 待处理积压

- **PR #2633**（OPEN）：Discord DM 配置 schema 修复，为升级兼容系列唯一遗留项，建议优先 review 合并。
- **PR #1159**：Session Fork 已因 stale 关闭，若维护者认可该能力，建议开启新的实现计划，避免社区贡献流失。
- 值得注意：过去 24 小时 Issue 侧完全静默（0 新开、0 活跃），若该趋势延续数日，建议核查 Issue 模板/入口是否正常，或社区反馈是否流向了其他渠道。

---
*数据来源：GitHub netease-youdao/LobsterAI，统计窗口 2026-09-08 至 2026-09-09。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-09-09）

## 1. 今日速览

CoPaw 过去 24 小时保持高活跃度：Issues 更新 26 条（新开/活跃 14，关闭 12），PR 更新 46 条（待合并 21，已合并/关闭 25），并于 9 月 8 日发布 **v2.2.1-beta.1** 测试版。社区反馈集中在 v2.2.0 正式版的稳定性（上下文丢失、多模态请求格式、UI 遮罩等）与本地运行时管理问题，同时多条高价值功能 PR（会话级模型覆盖、PawPort 迁移、记忆后端插件化）持续推进。整体呈“快速迭代 + 社区高频反馈”的健康态势，Issue 关闭率（约 46%）与 PR 处理速度均处于良好水平。

## 2. 版本发布

**v2.2.1-beta.1**（发布于 2026-09-08）
- [Release 页面](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.1-beta.1)

主要内容：
- **feat**: 新增 Agent 模型路由设置（agent model routing settings，PR #7501 by @zhaozhuang521）
- **fix(chat)**: 流式输出期间同步已 resolve 的会话
- **docs**: 更新 v2.2.0 网站（PR #7517）

注意事项：
- 无破坏性变更，属于 2.2.x 系列修复性 beta。
- 自动化发布验证 Issue [#7635](https://github.com/agentscope-ai/QwenPaw/issues/7635) 已完成闭环，配套修复 PR [#7641](https://github.com/agentscope-ai/QwenPaw/pull/7641)（release 产物下载重试与校验）正在评审，说明发布流水线本身也在加固。

## 3. 项目进展

**已合并/关闭的重要 PR：**
- [PR #7621](https://github.com/agentscope-ai/QwenPaw/pull/7621) — 文本-only 模型下将 PDF DataBlock 作为媒体处理，避免持久化历史中的 OpenAI file 块导致请求失败（对应 Issue #7617），后续扩展见 #7636。
- [PR #7610](https://github.com/agentscope-ai/QwenPaw/pull/7610) — 阻止聊天消息绕过队列，将附件提交路由进队列并串行化准入决策（直接解决 #7559 的 409 问题）。
- [PR #7631](https://github.com/agentscope-ai/QwenPaw/pull/7631) — Hub 本地沙箱内 CLI 命令携带 runtime token 认证（解决 #7612）。
- [PR #7638](https://github.com/agentscope-ai/QwenPaw/pull/7638) — 新增 Requesty 作为 OpenAI 兼容内置 provider（首次贡献者，已关闭待调整）。

**在途重要 PR：**
- [PR #7237](https://github.com/agentscope-ai/QwenPaw/pull/7237) — 冻结 Console 会话身份，修复切换会话时消息/停止操作路由错乱。
- [PR #7636](https://github.com/agentscope-ai/QwenPaw/pull/7636) — 对所有 OpenAI Chat Completions 请求剥离 PDF 块（vLLM/DeepSeek/智谱等均受益）。
- [PR #7616](https://github.com/agentscope-ai/QwenPaw/pull/7616) — ADBPG 与 PowerContext 迁移为记忆插件，完成记忆后端插件化。
- [PR #6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) — **PawPort**：从 Codex/Qoder 导入配置、技能、插件的完整迁移子系统。
- [PR #7637](https://github.com/agentscope-ai/QwenPaw/pull/7637) — 集成 QwenPaw-Data 0.3 数据分析引擎。
- [PR #7639](https://github.com/agentscope-ai/QwenPaw/pull/7639) — 性能优化：Scroll 历史完整性扫描去重。

**小结**：一日内消息队列、多模态请求兼容、沙箱认证三大类问题形成“issue → fix → follow-up”闭环，插件化/可移植性架构改造持续深化，项目向 2.2.1 稳定版稳步推进。

## 4. 社区热点

- [Issue #7579](https://github.com/agentscope-ai/QwenPaw/issues/7579)（8 评论）— 助手回复已持久化但后续请求中丢失，模型“看不到自己刚说的话”。高价值排查报告（PyInstaller 解包验证），反映用户对会话持久化一致性的强烈关注。
- [Issue #7597](https://github.com/agentscope-ai/QwenPaw/issues/7597)（6 评论，已关闭）— 工具返回图片/PDF 以裸 base64 发送触发 400。值得注意的是该 issue 由 AI agent 代笔，体现社区智能化协作趋势。
- [Issue #7363](https://github.com/agentscope-ai/QwenPaw/issues/7363)（5 评论）— Windows 上同步调用阻塞事件循环导致启动/发消息冻结 118–135 秒。
- [Issue #7559](https://github.com/agentscope-ai/QwenPaw/issues/7559)（5 评论，已关闭）— 任务执行中新发消息触发 409，用户期望排队而非报错（已由 PR #7610 解决）。
- [Issue #7633](https://github.com/agentscope-ai/QwenPaw/issues/7633)（3 评论）— llama.cpp v0.4.0-dev 新版本号格式解析失败，**静默回滚用户手动升级的运行时**，涉及用户信任问题。
- [Issue #7600](https://github.com/agentscope-ai/QwenPaw/issues/7600) — “红绿灯”状态指示灯功能请求，社区讨论多窗口工作流下的任务状态可见性。

## 5. Bug 与稳定性（按严重程度排列）

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579) | 模型回复从上下文丢失，产生空响应 | 待修复 |
| 🔴 高 | [#7633](https://github.com/agentscope-ai/QwenPaw/issues/7633) | 运行时静默回滚用户手动升级（版本号解析 bug） | 待修复 |
| 🟠 中高 | [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) | 事件循环阻塞、timeout 失效，桌面端冻结 2 分钟 | 待修复 |
| 🟠 中 | [#7625](https://github.com/agentscope-ai/QwenPaw/issues/7625) | Gemini 后台工具完成后 400 "Requests ending with a model turn" | 待修复 |
| 🟠 中 | [#7607](https://github.com/agentscope-ai/QwenPaw/issues/7607) | Cursor ACP Runner 违反 JSON-RPC 协议导致流崩溃 | 待修复 |
| 🟡 低 | [#7622](https://github.com/agentscope-ai/QwenPaw/issues/7622) | v2.2.0 后台弹窗遮罩失效（CSS 回归） | 待修复 |
| 🟡 低 | [#7634](https://github.com/agentscope-ai/QwenPaw/issues/7634) | ClawHub 同名技能安装失败 | ✅ [PR #7640](https://github.com/agentscope-ai/QwenPaw/pull/7640) |
| 🟡 低 | [#7619](https://github.com/agentscope-ai/QwenPaw/issues/7619) | Win11 + Qwen-35B-A3B-FP8 对话无故结束 | 排查中 |

**已闭环**：#7617（PDF 块破坏纯文本端点，PR #7621）、#7559（409 报错，PR #7610）、#7612（沙箱 CLI 认证，PR #7631）、#7554（Windows stdin 继承挂起）、#7572（异常栈被吞）。

## 6. 功能请求与路线图信号

有望纳入下一版本（已有对应 PR）：
- **未知斜杠命令本地反馈 + 拼写建议**：[#7479](https://github.com/agentscope-ai/QwenPaw/issues/7479) ← [PR #7632](https://github.com/agentscope-ai/QwenPaw/pull/7632)（首次贡献者）
- **会话级模型覆盖**：[PR #5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)，且 v2.2.1-beta.1 已落地 agent model routing，方向一致
- **聊天滚动锁定 / 工具调用卡片可隐藏**：[PR #7356](https://github.com/agentscope-ai/QwenPaw/pull/7356)、[PR #7357](https://github.com/agentscope-ai/QwenPaw/pull/7357)，与已关闭的 #2972（思考过程显示开关）诉求一致
- **技能版本与依赖校验**：[PR #7609](https://github.com/agentscope-ai/QwenPaw/pull/7609)，呼应 #7582 插件一键更新需求

尚无 PR、待规划：
- [#7600](https://github.com/agentscope-ai/QwenPaw/issues/7600) 任务状态“红绿灯”
- [#7583](https://github.com/agentscope-ai/QwenPaw/issues/7583) 与 AgentScope 社区联动（登录/信箱/快速反馈）
- [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) 上下文压缩按完整 provider 请求做预算感知
- [#7630](https://github.com/agentscope-ai/QwenPaw/issues/7630) 关闭 CPU 检测以支持虚拟机/云桌面（NumPy X86_V2 基线限制）

## 7. 用户反馈摘要

**痛点**：
- 多窗口/切页工作流下任务状态不可见（#7600），Console 切换会话时操作串台（#7237）
- 插件商店更新体验繁琐：多次点击、页面刷新丢位置、无更新通知（#7582）
- 本地大模型用户遭遇对话无故结束（#7619）与启动长时间冻结（#7363）
- 运维型用户对“静默回滚手动配置”极为敏感（#7633）
- 排障困难：工具层异常栈被吞（#7572，已关闭）、报错信息误导（#7620 MCP OAuth 误判）

**满意点**：
- 高质量 issue 报告频出（解包验证、最小复现），显示用户群体技术能力强、参与意愿高
- 409/排队问题、PDF 兼容性问题关闭迅速，社区对响应速度反馈积极
- 首次贡献者 PR 数量可观（#7632、#7638、#7613、#5992），贡献者漏斗健康

## 8. 待处理积压

- [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363)（8/27 提出，5 评论）— 事件循环阻塞冻结问题长期未关，影响 Windows 桌面可用性，建议优先排期。
- [#7479](https://github.com/agentscope-ai/QwenPaw/issues/7479)（9/01 提出）— 已有 fix PR #7632，建议尽快评审合并。
- [PR #5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)（7/12 提出）— 会话级模型覆盖悬置近两个月，与刚落地的模型路由功能强相关，建议给出明确决策。
- [PR #6399](https://github.com/agentscope-ai/QwenPaw/pull/6399)（7/23 提出）— ReMe 记忆 reranker UI 配置面板，等待与后端 PR 协同验收。
- [PR #6960](https://github.com/agentscope-ai/QwenPaw/pull/6960)（8/13 提出）— PawPort 大型功能 PR，需架构层面评审推进。

---
*数据来源：CoPaw GitHub 仓库过去 24 小时活动快照。注：原始数据中部分 issue/PR 文本混用 QwenPaw/CoPaw 名称，均指向同一仓库。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报（2026-09-09）

## 1. 今日速览

ZeptoClaw 今日整体活跃度中等偏低，共 4 条 Issue 更新（2 开 2 关）和 2 条 PR 更新（1 开 1 关），无新版本发布。核心动作集中在**安全加固**：#651、#652 两个安全相关 Issue 随 PR #673 合并落地而关闭，PR #674 进一步修复了 Panel WebSocket 凭证泄露问题（待合并）。同时社区贡献者 @putraperdana1207-pixel 提出了 OrcaRouter provider 集成的新需求（#675），显示项目生态吸引力在扩展。整体看，项目处于“安全补丁收尾 + 功能规划”阶段，维护者 @qhkm 响应及时，健康度良好。

## 2. 版本发布

本报告期内无新版本发布。建议关注安全修复（#673 已合并、#674 待合并）是否会在近期触发补丁版本发布。

## 3. 项目进展

- **PR #673 [已合并/关闭] fix(security): 加固密钥存储与依赖**（[链接](https://github.com/qhkm/zeptoclaw/pull/673)）
  修复了两个实质安全问题：密钥文件（config.toml、panel.token）以宽松 umask 权限写入、可被同机其他用户读取。本 PR 将密钥文件创建时强制 `0600`、ZeptoClaw 拥有的目录设为 `0700`，并在升级时自动修复旧版本产生的文件权限。同时一并处理依赖漏洞，对应关闭了 Issue #651（7 个 RustSec 通告：h2、quick-xml、lopdf、bcrypt、quinn-proto、crossbeam-epoch）和 #652。**这是今日最实质的进展，安全面显著收敛，CI 的零容忍 deny 任务应可恢复。**

- **PR #674 [待合并] fix(panel): WebSocket 认证改用一次性票据**（[链接](https://github.com/qhkm/zeptoclaw/pull/674)）
  此前面板 WebSocket 连接将长效 API token 或 JWT 放在 URL `?auth=` 参数中，会泄露到访问日志和浏览器历史。新方案通过带 CSRF 保护的已认证端点获取 30 秒单次有效票据，在 WebSocket 升级时消费，票据可重放防护。待 review 合并后，面板认证链路的安全短板基本补齐。

## 4. 社区热点

- **Issue #666 [OPEN] 跨会话持久记忆与事务性记忆写入**（[链接](https://github.com/qhkm/zeptoclaw/issues/666)，评论 1 条，本周内创建）
  维护者自己提出的架构级设计 Issue，讨论 ZeptoClaw 选择性检索（pinned 条目 + 2,000 字符预算内 ≤5 条匹配记忆）对比 Hermes 常驻 profile 的优劣。痛点在**变更/召回侧**的可靠性。这是记忆系统（Exec #8 + §2）的核心路线图信号。
- **Issue #675 [OPEN] OrcaRouter provider 支持**（[链接](https://github.com/qhkm/zeptoclaw/issues/675)，今日新开）
  外部贡献者提出的集成需求，帖子详细阐述了 ZeptoClaw 的差异化定位——~6MB Rust 二进制、~50ms 启动、可在无容器运行时的环境运行。诉求是扩展 provider 生态，同时保持轻量足迹。今日唯一的新增讨论点。

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#652](https://github.com/qhkm/zeptoclaw/issues/652) 密钥文件权限过宽（config.toml 明文 API key、panel.token） | ✅ 已由 PR #673 修复并关闭 |
| 🔴 高 | [#651](https://github.com/qhkm/zeptoclaw/issues/651) 7 个已知漏洞依赖，cargo-audit 零容忍策略失败 | ✅ 已由 PR #673 修复并关闭 |
| 🟠 中高 | Panel WebSocket `?auth=` URL 凭证泄露（[#674](https://github.com/qhkm/zeptoclaw/pull/674)） | 🔧 修复 PR 待合并 |

今日无新增崩溃/回归报告。安全问题集中爆发后集中修复，节奏良好。

## 6. 功能请求与路线图信号

- **OrcaRouter provider 集成（#675）**：来自社区的真实集成需求，与项目“多 provider + 极小足迹”定位契合，若实现成本低，有望较快纳入；需关注其对二进制体积的影响。
- **持久化记忆系统（#666，P2-high）**：维护者主导的设计 Issue，明确了保留选择性检索、补强跨会话召回与事务性写入的方向，是下一阶段的核心开发项。目前无对应 PR，处于设计阶段。
- **短期可期**：PR #674 合并后，可能促成一次以安全为主题的补丁版本。

## 7. 用户反馈摘要

- 社区认可 ZeptoClaw 的核心差异化价值：**单一 ~6MB 二进制承载 tools/memory/channels/providers/sandboxed autonomy，启动 ~50ms，可在无容器环境运行**（#675）——这是用户选择它而非其他 agent 框架的主要原因。
- 多用户机器场景下，本地凭证可被其他用户读取（#652）是明确的痛点，现已修复。
- 用户（含维护者自审）指出记忆系统在**跨会话持久性与写入原子性**上弱于竞品（#666），是当前体验短板。

## 8. 待处理积压

- **PR #674**（昨日提交，尚无评论）：安全修复，建议优先 review 合并，避免面板凭证泄露窗口期延长。
- **Issue #666**（P2-high，创建 4 天，评论仅 1 条）：记忆系统核心设计，需推进方案定稿并拆分实施任务。
- **Issue #675**（今日新开）：建议维护者尽快响应外部贡献者，明确是否接受及实现路径，维护社区热度。

---
*数据来源：GitHub API（过去 24 小时），由自动化分析生成。*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目日报 — 2026-09-09

## 1. 今日速览

今日 EasyClaw 仓库在 Issue 与 PR 层面无任何交互活动（新增/活跃/关闭均为 0），社区讨论进入短暂静默期。但项目保持稳定的发布节奏，24 小时内连续发布 2 个小版本（v1.9.7、v1.9.8），表明核心团队的开发推进并未放缓。总体看，项目处于“低讨论、高产出”状态，版本迭代以联盟营销工作台与客服系统可靠性为主要方向，健康度良好。

## 2. 版本发布

### v1.9.8 — TK Copilot（[Release 链接](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.9.8)）
- **联盟工作台增强**：新增达人（creator）与商品筛选器，修复筛选标签在换行时的对齐问题
- **性能优化**：商品目录搜索改为并发按需加载，搜索速度显著提升
- **可靠性改进**：Gateway 恢复后并行回放客服积压消息，并附带可选的堆内存快照（heap snapshot）能力，便于排查

### v1.9.7 — TK Copilot（[Release 链接](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.9.7)）
- **达人店铺视图**：新增达人店铺视图与受保护的工作台筛选
- **权限解耦**：人工客服（operator）的店铺访问权限不再依赖 Agent 激活状态，属于行为变更
- **消息体验**：达人消息头部优先展示店铺别名
- **去重机制**：联盟分发按快照（snapshot）去重，避免重复派发

**迁移注意**：两个版本均为增量式更新，Release Notes 未标注破坏性变更。但 v1.9.7 中“operator 店铺访问与 Agent 激活解耦”改变了权限判定逻辑，运维方若依赖旧的联动关系需重新审查访问控制配置。

## 3. 项目进展

今日无 PR 合并/关闭记录（0 条）。但从 Release 内容可推断，近期已落地的开发工作包括：

- 联盟工作台筛选体系（达人/商品维度）完成并随 v1.9.8 发布
- 客服系统容灾链路（Gateway 恢复后积压回放 + 堆快照诊断）已上线
- 联盟分发去重与权限模型调整已进入稳定版

项目整体在“达人/联盟运营 + 客服可靠性”两条主线持续小步快跑，迭代粒度约每日 1-2 个 patch 版本。

## 4. 社区热点

今日无活跃 Issue/PR 讨论（0 条评论/更新）。无热点可分析。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题。值得注意的是，v1.9.8 引入的“Gateway 恢复后积压回放 + 可选堆快照”表明团队正在主动加固客服链路在中断场景下的稳定性，属于预防性修复。

## 6. 功能请求与路线图信号

今日无新功能请求。从近期发布节奏推断的路线图信号：

- **联盟营销（Affiliate）方向**持续投入：筛选器、分发去重、并发加载均为该方向打磨，预计下版本继续深化
- **达人（Creator）运营工具**：店铺视图、店铺别名等迭代密集，达人管理可能成为近期主线之一
- **可观测性**：堆快照功能暗示后续可能在诊断/自愈能力上有更多投入

## 7. 用户反馈摘要

今日无 Issue 评论，无用户反馈可提炼。建议关注后续版本发布后的用户升级反馈，尤其是 v1.9.7 权限解耦变更的实际影响。

## 8. 待处理积压

今日数据显示无长期未响应的 Issue 或 PR（过去 24 小时无任何活跃或停滞条目）。当前积压压力低，维护者响应面干净。

---

**总结**：EasyClaw 今日呈现典型的“静默发布日”特征——社区零交互但连发两版，工程推进活跃。短期需关注 v1.9.7 权限模型变更的潜在影响及 v1.9.8 积压回放机制在生产环境的实际表现。

*数据来源：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*