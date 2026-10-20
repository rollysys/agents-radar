# OpenClaw 生态日报 2026-10-20

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-20 03:58 UTC

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

# OpenClaw 项目日报 — 2026-10-20

## 1. 今日速览

OpenClaw 今日保持高度活跃：过去 24 小时 Issues 更新 500 条（新开/活跃 393，关闭 107），PR 更新 500 条（待合并 214，已合并/关闭 286），并发布了 1 个 beta 版本。Issue 关闭率约 21%，PR 合并/关闭占比约 57%，处理吞吐健康。社区焦点集中在 **Windows 平台稳定性**、**subagent 完成投递链路**和**更新/迁移可靠性**三大主题，多位核心贡献者（@steipete、@roboclaw-bot 等）当日提交了大量重构与修复 PR。整体看项目处于快速迭代期，但 P0 级稳定性问题积压较多，需要关注。

---

## 2. 版本发布

### v2026.10.10-beta.2

- **主要内容**：Workspace 安全性修复 —— 多文件 `apply_patch` 在后续更新目标缺失或上下文不匹配时，会在改动任何文件**之前**整体拒绝该 patch，为下一次尝试保留原始工作区状态。提交时的 I/O 失败仍可能留下部分改动（已知残余风险）。
- **破坏性变更**：无。
- **迁移注意**：beta 用户可正常滚动升级；若依赖“部分应用 patch”的行为需注意新的提前拒绝语义。

链接：[v2026.10.10-beta.2 Release](https://github.com/openclaw/openclaw/releases)

---

## 3. 项目进展

今日合并/关闭 PR 286 个，代表性进展：

- **[PR #177451](https://github.com/openclaw/openclaw/pull/177451)（已关闭）**：修复 2026.10.5 上 Discord 原生 `/status` 与活跃 `/steer` 失败问题，涉及保存的账号选择与会话预留冲突。P1 用户可见修复。
- **[PR #135056](https://github.com/openclaw/openclaw/pull/135056)（已关闭）**：`openclaw sessions --json` 输出补充存储的 `category` 字段，减少调用方二次查询。
- **[PR #174738](https://github.com/openclaw/openclaw/pull/174738)（已关闭）**：Control UI Agents 卡片与 Claws 卡片布局对齐，统一产品视觉。
- **待合并的重要修复**：
  - [PR #177577](https://github.com/openclaw/openclaw/pull/177577)（ready for review，P1）：修复 Codex 原生 follow-up 完成后父线程被 "thread is claimed by active work" 拒绝、无法冷恢复的问题，直接关联 [Issue #172837](https://github.com/openclaw/openclaw/issues/172837)。
  - [PR #163685](https://github.com/openclaw/openclaw/pull/163685)（P1，ready for review）：排队/中途 channel 回复保留其调用插件所有权，修复 Mattermost 新 Gateway 场景 block 回复丢失。
  - [PR #177812](https://github.com/openclaw/openclaw/pull/177812)：Daybreak 工作流与即将（10/28）退役的 Blue/Red 模型别名解耦，时间敏感。
- **架构清理**：@steipete 当日提交多个 XL 级重构（[#178002](https://github.com/openclaw/openclaw/pull/178002)、[#177829](https://github.com/openclaw/openclaw/pull/177829) 退役 13 个顶层 Plugin SDK 方法、[#177915](https://github.com/openclaw/openclaw/pull/177915)），持续收缩私有 API 面，为 SDK 稳定性铺路。
- **新能力**：[PR #175509](https://github.com/openclaw/openclaw/pull/175509) 新增 Bifrost provider 并支持匿名自托管 Gateway；[PR #178005](https://github.com/openclaw/openclaw/pull/178005) 修复 SQLite → PostgreSQL 稳定迁移路径并认证 PG 16–18。

整体节奏：修复与重构并重，移动端 UI（#176515、#176519）与 CLI 体验（#177999、#178007）均有实质推进。

---

## 4. 社区热点

| Issue | 评论 | 热点分析 |
|---|---|---|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) Gateway 捕获大型外部插件时阻塞数分钟（P0） | 35 | 2026.9.6 引入的插件生成捕获（#144252）回归，事件循环在启动和运行时重发布时被阻塞数分钟。用户对**新功能引入性能回归**的不满集中爆发，已标记 crash-loop，尚无 fix PR。 |
| [#164294](https://github.com/openclaw/openclaw/issues/164294) 状态 DB WAL checkpoint 永不完成 | 22 | 内部 reader 长期钉住 `openclaw.sqlite`，checkpoint 自启动以来从未成功，17091 帧 WAL 堆积。DB 运维健康问题，needs-maintainer-review。 |
| [#150635](https://github.com/openclaw/openclaw/issues/150635) 短期召回满 512 条导致 dreaming 深度阶段永不晋升 | 20 | 记忆系统核心诉求：用户希望“做梦”记忆固化真正生效，涉及产品决策。 |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) Codex-backed Telegram 回合反复超时（👍4） | 19 | 5 月报告至今未修的长尾可靠性问题，消息无法送达终态，用户流失风险高。 |
| [#121661](https://github.com/openclaw/openclaw/issues/121661) CLI-backed subagent 无工具运行、模型伪造工具调用输出（P1） | 17 | 涉及安全审查——模型虚构工具结果是信任边界的实质问题。 |
| [#120385](https://github.com/openclaw/openclaw/issues/120385) Code Mode 定时/cron 回合 MCP 工具目录不完整 | 16 | "Unknown tool id" 只以执行失败形式暴露，排障体验差。 |

**共性诉求**：可观测性（失败被静默吞掉）、多 agent 完成投递可靠性、记忆/dreaming 机制落地。

---

## 5. Bug 与稳定性（按严重度）

**P0 / Release Blocker**
- [#160959](https://github.com/openclaw/openclaw/issues/160959) 大插件捕获阻塞 Gateway 数分钟（crash-loop）— ❌ 无 fix PR
- [#170956](https://github.com/openclaw/openclaw/issues/170956) Windows：慢启动 + 插件非正常关闭 + schtasks 权限错误，重启/更新不可靠（ux-release-blocker）— ❌ 无 fix PR
- [#167406](https://github.com/openclaw/openclaw/issues/167406) Windows MSIX 启用 Codex 后主线程饿死，Gateway 反复就绪超时 — ❌ 无 fix PR
- [#157255](https://github.com/openclaw/openclaw/issues/157255) lane 超时后 turn claim 不释放，会话楔死 90+ 分钟 — ❌ 无 fix PR
- [#143334](https://github.com/openclaw/openclaw/issues/143334) subagent 完成投递丢失，requester 停滞并饿死排队用户消息 — ❌ 无 fix PR（部分相关：PR #177577 处理相邻路径）

**P1**
- [#166894](https://github.com/openclaw/openclaw/issues/166894) Windows 多 agent 安装重启挂起 30 分钟–2 小时 — ❌
- [#167557](https://github.com/openclaw/openclaw/issues/167557) 插件延迟数据/设置迁移永不收敛（"handoff lease database identity changed"）— ❌
- [#172837](https://github.com/openclaw/openclaw/issues/172837) Codex nativeSubagentAssignments 投递放弃后不清理，新父线程反复重发 — ✅ 关联 [PR #177577](https://github.com/openclaw/openclaw/pull/177577)（待合并）
- [#162637](https://github.com/openclaw/openclaw/issues/162637) Codex 完成交接在源提交前报 SESSION_WORK_START_CHANGED — ❌
- [#149239](https://github.com/openclaw/openclaw/issues/149239) settlement 关闭中止被喂入 model-fallback 循环，挤占新消息 — ❌
- [#169953](https://github.com/openclaw/openclaw/issues/169953) npm 更新 2026.9.4→2026.10.2 必败：candidate 挂在 config.auth 直到 canary 截止 — ❌（部分相关 PR #177708/#178009 改善 update 路径）
- [#139215](https://github.com/openclaw/openclaw/issues/139215) Cron 调度器自 2026.9.1 静默吞掉部分触发 — ❌
- [#156925](https://github.com/openclaw/openclaw/issues/156925) Webchat 带工具调用的回复被渲染两次（存储中确有两份）— ❌

**P2 值得关注**
- [#143632](https://github.com/openclaw/openclaw/issues/143632) iMessage 入站消息重复投递 2–3 次且携带内部 envelope，去重未生效 — ❌
- [#163566](https://github.com/openclaw/openclaw/issues/163566) 更新修复后每回合 session-resource-loader 烧 ~100s CPU — ❌
- [#144502](https://github.com/openclaw/openclaw/issues/144502) WhatsApp 无法播放 TTS 语音（48kHz + Lavf tag）— ❌

> 观察：热门 bug 中绝大多数仍处于 `clawsweeper:no-new-fix-pr` 状态，修复 PR 覆盖率偏低，是当前健康度的主要短板。

---

## 6. 功能请求与路线图信号

- **[Issue #138366](https://github.com/openclaw/openclaw/issues/138366)**：让 memory slot 插件驱动 Control UI 的 Dreams 页（`MemoryPluginCapability` 增加 `dreaming` provider）— 与 #150635 呼应，记忆/dreaming 是明确的路线图方向，needs-product-decision。
- **[Issue #59149](https://github.com/openclaw/openclaw/issues/59149)**：按 agent 粒度作用域 `agentToAgent` 与 session 可见性，已有 linked PR open，多租户安全边界在推进中。
- **[Issue #38568](https://github.com/openclaw/openclaw/issues/38568)**（已关闭）：系统提示注入上下文窗口占用百分比 — 小型 UX 改进已了结。
- **[Issue #153227](https://github.com/openclaw/openclaw/issues/153227)**：工具权限之上增加“后果绑定”的执行回执，安全设计讨论。
- **PR 信号**：[PR #175509](https://github.com/openclaw/openclaw/pull/175509)（Bifrost provider + 匿名自托管）、[PR #178005](https://github.com/openclaw/openclaw/pull/178005)（PostgreSQL 官方认证）显示**多 provider 接入与企业级存储**是下一个版本的重点方向；[PR #177829](https://github.com/openclaw/openclaw/pull/177829) 表明 Plugin SDK 收缩/稳定化由维护者主动驱动。

---

## 7. 用户反馈摘要

- **痛点一：失败被静默吞掉**。[#128916](https://github.com/openclaw/openclaw/issues/128916)（message-tool-only 回合三重静默失败）、[#144876](https://github.com/openclaw/openclaw/issues/144876)（dashboard 会话静默结束）反映用户反复强调“宁可报错也不要无声失败”。
- **痛点二：更新即惊魂**。多个用户报告跨版本 npm/MSIX/systemd 更新失败或迁移不收敛（#167557、#169953、#144447、#173082），Windows 用户尤其受影响（#170956、#166894、#167406）——Windows 一等公民化呼声明显。
- **痛点三：多 agent 协作不可靠**。subagent 完成投递、settle-wake、claim 释放等链路问题（#143334、#172837、#162637、#149239）是多 agent 重度用户（7+ agents 部署）的核心摩擦。
- **满意点**：Doctor/update 的分阶段设计（canary、repair）被认可方向正确但执行细节 bug 多；clawsweeper 自动分流标签体系使 issue 质量较高，多数含 source-repro。
- **典型使用场景**：Telegram/WhatsApp/iMessage/Discord 多渠道个人助理、语音（TTS/talk-back）、定时任务 + 记忆固化、移动端 Control UI。

---

## 8. 待处理积压（提醒维护者关注）

- **[#87744](https://github.com/openclaw/openclaw/issues/87744)**（5 月起，19 评论，👍4）：Codex-backed Telegram 超时 — 长达 5 个月的 P2 未修，用户可见度高。
- **[#160959](https://github.com/openclaw/openclaw/issues/160959)**（35 评论，P0）：插件捕获阻塞 — 热度第一却无修复动向。
- **[#121661](https://github.com/openclaw/openclaw/issues/121661)**（P1 + security review）：模型伪造工具输出 — 涉及安全叙事，建议优先排期。
- **[#139215](https://github.com/openclaw/openclaw/issues/139215)**：cron 静默丢触发 — 定时场景用户的信任基础，9 月至今未修。
- **[#149631](https://github.com/openclaw/openclaw/issues/149631)**：CI preflight 在 121 jobs 时超 120 上限直接红 — 阻塞贡献者，修复成本低、收益高。
- **[PR #172026](https://github.com/openclaw/openclaw/pull/172026)**（claude-cli cache-prefix churn，10/14 起 needs proof）与 **[PR #163685](https://github.com/openclaw/openclaw/pull/163685)**（P1，10/02 起）等 ready-for-review PR 积压超一周，建议维护者优先消审。

---

*数据来源：OpenClaw GitHub Issues/PRs/Releases（2026-10-20 抓取）。统计窗口为过去 24 小时。*

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告
**数据窗口：2026-10-20 | 基于 13 个开源项目社区动态**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**高速扩张与剧烈分化并存**的阶段：头部项目（OpenClaw、NanoClaw、CoPaw、Zeroclaw、NanoBot）日均 Issue/PR 更新达 30–500 条量级，进入“功能扩张 + 稳定化”并行期。生态技术栈快速收敛于几个共同主题——多通道 IM 接入（Telegram/WhatsApp/Discord/钉钉/QQ）、subagent 协作、MCP/插件生态、记忆固化（dreaming）与本地模型支持。同时，安全与信任问题（模型伪造工具输出、审批放行导致数据丢失、沙箱逃逸）首次集中爆发，成为生态级新焦点。项目间分化明显：既有日均合并 27+ PR 的高产出团队，也有主仓库停滞、社区启动 Fork 自救的案例。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（关闭率 21%） | 500（合并/关闭 57%） | ✅ 1 beta | 🟢 高活跃，但 P0 积压多（5 项无 fix PR） |
| **CoPaw** | 32 | 48（合并 15） | ❌ | 🟢 活跃，2.2.2 回归修复中，响应链路健康 |
| **Zeroclaw** | 50（仅关闭 2） | 50（待合并 41） | ❌（v0.8.7 筹备中） | 🟡 活跃但合并吞吐不足，S0 安全问题积压近 4 个月 |
| **Hermes Agent** | 50（**0 关闭**） | 50（待合并 48，合并≈0） | ❌ | 🔴 社区动能足但维护带宽为瓶颈，含数据丢失安全事故 |
| **NanoClaw** | 13 | 50（合并 27） | ❌ | 🟢 健康度高，Codex 修复链快速闭环 |
| **NanoBot** | 7 | 37（合并 17） | ❌ | 🟢 良好，小修快合，但存在 conflict 积压 |
| **LobsterAI** | 0 | 18（合并 10） | ❌（release/2026.10.19 分支冲刺） | 🟢 开发健康，社区互动为零，stale PR 积压 |
| **PicoClaw** | 5 | 2 | ❌ | 🔴 主仓库疑似无人维护，社区已公告活跃 Fork |
| **EasyClaw** | 0 | 0 | ✅ 2 个（v1.9.35/36） | 🟡 单人/小团队高频发布，社区零互动 |
| **Moltis** | 0 | 1 | ✅ 1 | 🟡 低活跃稳步推进 |
| **IronClaw** | 1 | 1 | ❌ | 🟢 稳态运行（评测基础设施定位） |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | ❌ | ⚪ 无活动 |

---

## 3. OpenClaw 在生态中的定位

**优势：**
- **生态规模断层领先**：日均 500 Issue/PR 更新，约为第二梯队（Zeroclaw/Hermes）10 倍、其他项目 15–70 倍，是事实上的生态参照标准（多个项目如 LobsterAI、NanoClaw 直接复用其传输层/流程设计）。
- **工程化成熟度最高**：canary 分阶段发布、clawsweeper 自动分流、Plugin SDK 主动收缩（#177829 退役 13 个 API）、PostgreSQL 官方认证（PG 16–18）——企业化方向明确。
- **贡献者结构深厚**：核心贡献者（@steipete 等）当日可提交多个 XL 级重构。

**技术路线差异：**
- OpenClaw 走“平台化 + 多渠道个人助理”路线（Telegram/WhatsApp/iMessage/Discord/语音/记忆固化），对标 NanoBot/CoPaw/PicoClaw 的同赛道；
- Zeroclaw/Hermes 更侧重本地/自托管运行时与多 provider 深度（含本地模型、Tailscale 网关）；
- NanoClaw 侧重 provider 集成与 skill 化交付；LobsterAI 是其之上的桌面发行版形态。

**短板**：Windows 一等公民化滞后（3 个 P0）、更新迁移可靠性（npm/MSIX 更新必败类问题）、subagent 投递链路完整性——这些恰是竞品正在追赶的缺口。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **静默失败治理** | OpenClaw、CoPaw、Zeroclaw、NanoClaw | 三重静默失败、cron 静默丢触发、QQ 消息静默丢失、mid-turn 消息静默丢弃——多项目用户共同喊出“宁可报错也不要无声失败” |
| **多通道 IM 适配与上游变更追追** | 几乎全部 | Telegram MarkdownV2 转义（PicoClaw、NanoClaw 同病）、QQ 接口变更（PicoClaw、CoPaw）、WhatsApp passkey 门槛（Zeroclaw）、钉钉降级（CoPaw） |
| **subagent/多 agent 完成投递可靠性** | OpenClaw、Hermes、Zeroclaw | 完成唤醒丢失、claim 不释放、delegate 白名单绕过——多 agent 重度部署（7+ agents）的核心摩擦 |
| **长会话/记忆膨胀** | OpenClaw、CoPaw、NanoBot | 512 条召回上限阻断 dreaming、48MB 请求体卡死会话、Dream 记忆文件无界注入——记忆固化机制的工程边界问题 |
| **Windows 平台支持** | OpenClaw、Zeroclaw、NanoBot、CoPaw | 慢启动/MSIX 主线程饿死/74 个测试失败/GBK 编码——“Windows 二等公民”是生态级痛点 |
| **安全与信任边界** | OpenClaw、Zeroclaw、Hermes、NanoBot、CoPaw | 模型伪造工具输出、smart 审批放行致数据丢失、symlink 逃逸、estop 无效、正则黑名单可绕过 |
| **Provider 多元化** | OpenClaw、NanoClaw、LobsterAI、CoPaw | Bifrost/pi/Cursor SDK/OpenAI Responses/Gemini 原生格式/MiniMax 预设 |
| **MCP OAuth 无感接入** | LobsterAI、CoPaw、Hermes | 远程 MCP 服务器 OAuth 2.1 登录、path prefix 匹配、OAuth 失败处理 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构特点 |
|---|---|---|---|
| **OpenClaw** | 全渠道个人助理 + 记忆/dreaming + 移动 Control UI | 重度多渠道个人助理用户、企业 | Gateway + Plugin SDK + 多 provider，正在收缩私有 API 面向 SDK 稳定化 |
| **Zeroclaw** | 自托管安全 + 插件 webhook 架构 + Goal Mode | 安全敏感的自治 agent 用户 | Rust 系、Tailscale 网关、shell 扫描器/熵检测等纵深安全机制 |
| **Hermes Agent** | 本地模型运行时 + Kanban 任务分解 + skills 生态 | 本地 llama.cpp / 多供应商高级用户 | llmOS 倾向，Desktop Electron + TUI + MCP/skill 插件化 |
| **NanoBot** | chat-only 工作流下 agent 自治能力 | 轻量长期运行助手用户 | WebUI/TUI 双端，小修快合的社区驱动模式 |
| **CoPaw** | 富媒体会话 + 插件生态 + 通道插件化 | 中文 IM 场景（钉钉/飞书/QQ/微信）用户 | Python，通道子进程隔离（#8187），鸿蒙原生支持探索 |
| **NanoClaw** | provider 集成 + skill 化交付 | Codex/多模型混合部署用户 | skill payload 分发、fork 友好架构 |
| **LobsterAI** | 桌面端体验（桌宠/Cowork） | 终端消费者 | Electron 发行版，复用 OpenClaw 底层 |
| **IronClaw** | benchmark 评测基础设施 | 模型评估团队 | 每日失败分类自动化，框架与模型质量归因分离 |
| **EasyClaw** | BD 达人管理垂直 SaaS | TikTok 商务团队 | 封闭式快速迭代，无社区协作 |

---

## 6. 社区热度与成熟度分层

- **快速迭代期**（高活跃、功能扩张为主）：**OpenClaw**（发布 beta + XL 重构密集）、**CoPaw**（2 个 XXXL 架构 PR 滚动）、**NanoClaw**（27 PR/日合并）、**Zeroclaw**（插件 webhook 四连 XL PR + Goal Mode 2/12）
- **活跃但吞吐受限**：**Hermes Agent**（0 关闭/0 合并/0 发布，维护带宽瓶颈典型）、**NanoBot**（conflict 积压）
- **质量巩固/发布冲刺期**：**LobsterAI**（release/2026.10.19 分支收尾，10 PR 合入）
- **低活跃稳态**：**IronClaw**（自动化运维）、**Moltis**（小步修复）
- **停滞/风险期**：**PicoClaw**（主仓库无人维护 + Fork 分裂）、**EasyClaw**（有发布无社区）、**NullClaw/TinyClaw/ZeptoClaw**（完全静默）

成熟度悖论：项目规模越大，P0/S0 级安全与稳定性积压反而越显性（OpenClaw 5 项 P0 无 fix、Zeroclaw 安全问题积压 4 个月）——是用户基数放大暴露面的必然结果。

---

## 7. 值得关注的趋势信号

1. **安全叙事从“功能”转向“信任”**：三起新型事件——模型伪造工具输出（OpenClaw #121661）、smart 审批放行 osascript 致数据丢失（Hermes #141346）、新凭证发往旧端点（Hermes #141832）——标志行业关注点从“能不能执行”转向“执行可不可信”。对开发者的启示：**不可逆操作护栏、审批粒度、工具输出验证**应成为智能体框架的默认能力。

2. **静默失败是生态第一大信任杀手**：至少 4 个项目的用户独立提出同一诉求。可观测性（失败显式上报、降级可感知）是低成本高回报的差异化方向。

3. **记忆/dreaming 从概念走向工程落地期**：OpenClaw 的 512 条召回阻断晋升、NanoBot 的 Dream 文件无界注入、CoPaw 的会话膨胀，说明长期记忆机制正被生产级使用推到边界，**记忆固化 + 上下文预算管理**将成为下一轮竞争点。

4. **Windows 是被系统性低估的市场**：五个项目同时暴露 Windows 支持短板，而 Windows 个人助理用户群庞大——率先做到 Windows 一等公民的项目将获得显著迁移红利。

5. **上游依赖变化频率加快**：Codex CLI 回归、WhatsApp passkey、QQ 接口变更、Gemini→Antigravity 迁移、Blue/Red 模型别名退役——**多通道/多 provider 框架需要“上游变更响应”作为一等工程能力**（回归测试、版本 pin 策略、别名解耦）。

6. **社区维护带宽成为项目存亡分水岭**：Hermes 的“高输入零合并”与 PicoClaw 的“Fork 自救”是同一问题的两个阶段。健康信号包括：明确的 triage SLA、ready-for-review PR 一周内消审、对长期积压 PR 给出里程碑归属。

7. **企业化与自托管需求上升**：PostgreSQL 认证（OpenClaw）、反向代理部署（CoPaw）、Bifrost 匿名自托管网关（OpenClaw）、OS 级沙箱（NanoBot #2569）——个人助手项目正在被当作生产系统部署，运维级特性（迁移、监控、签名收敛）价值凸显。

---

*报告基于各项目 2026-10-20 前 24 小时公开数据生成，仅供技术选型与生态观察参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-10-20

## 1. 今日速览

NanoBot 今日保持高活跃度：过去 24 小时内 Issues 更新 7 条（6 新开/活跃、1 关闭），PR 更新 37 条（20 待合并、17 已合并/关闭），无新版本发布。贡献集中于两个方向：以 @david-dev666 为代表的 agent 工具能力增强（cron 暂停/恢复、运行历史、web_fetch 续读、list_sessions 分页，均 Issue+PR 配套提交），以及 @chengyongru 主导的一批 WebUI/TUI 体验修复快速落地。值得注意的是多个 PR（#6280、#6046、#5437）处于 conflict 状态，合并队列存在一定积压。整体看，项目处于活跃迭代期，社区贡献流程规范（普遍带标签、测试与 Linear 关联），健康度良好。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日 17 个 PR 合并/关闭，主要落地内容：

- **WebUI 交互细节批量修复**（@chengyongru）：
  - [#6311](https://github.com/HKUDS/nanobot/pull/6311)（已关闭）：输入的 session handle 现在被正确识别为引用
  - [#6310](https://github.com/HKUDS/nanobot/pull/6310)（已关闭）：统一 provider 参数行排版（修复 NAN-265）
  - [#6309](https://github.com/HKUDS/nanobot/pull/6309)（已关闭）：合并连续 waiting 消息，修复连续引导输入被吞/乱序问题（NAN-285）
  - [#6275](https://github.com/HKUDS/nanobot/pull/6275)（已关闭）：CLI Apps 读取移入 worker 线程，避免阻塞事件循环拖慢无关 HTTP 请求
- **待合并的重要功能 PR**：
  - [#6321](https://github.com/HKUDS/nanobot/pull/6321)：WebUI/TUI 支持本地文件引用与视频附件
  - [#6320](https://github.com/HKUDS/nanobot/pull/6320)：TUI 中将 Mermaid 图渲染为终端图片（Pele 1.6.0）
  - [#6313](https://github.com/HKUDS/nanobot/pull/6313) / [#6319](https://github.com/HKUDS/nanobot/pull/6319)：cron 任务暂停/恢复与运行历史暴露给 agent
  - [#6262](https://github.com/HKUDS/nanobot/pull/6262)：在工具执行批次边界落 checkpoint，修复崩溃后状态不一致（关闭 #5747）

整体节奏是“小修快合、大功能排队”，WebUI 稳定性有明显推进。

## 4. 社区热点

- **[#6165](https://github.com/HKUDS/nanobot/issues/6165)** [bug] Docker 默认镜像无法开箱即用 + 上手文档不足（2 评论，今日关闭）。`git clone && docker compose up` 不能正常工作，是新用户留存的关键痛点，今日关闭说明已有处理，建议确认文档同步更新。
- **@david-dev666 的工具能力四连提案**：[#6318](https://github.com/HKUDS/nanobot/issues/6318)、[#6316](https://github.com/HKUDS/nanobot/issues/6316)、[#6314](https://github.com/HKUDS/nanobot/issues/6314)、[#6312](https://github.com/HKUDS/nanobot/issues/6312)，每个均当天配套 PR（#6319/#6317/#6315/#6313），诉求集中在“chat-only 工作流下 agent 自治能力不足”（无法查看 cron 历史、无法续读长网页、无法分页会话）。
- **[#2569](https://github.com/HKUDS/nanobot/issues/2569)** 请求通过 sandlock 引入 OS 级工具执行沙箱——指出当前正则黑名单 + 字符串路径检查可被绕过，是老牌安全诉求（3 月提出，今日仍有活动），反映安全敏感用户对执行隔离的持续关注。

## 5. Bug 与稳定性

按严重程度排列：

| 问题 | 严重度 | 状态 |
|---|---|---|
| [#6165](https://github.com/HKUDS/nanobot/issues/6165) Docker 镜像开箱不可用 | 高（影响新用户获取） | 已关闭，待验证文档修复情况 |
| [#6262](https://github.com/HKUDS/nanobot/pull/6262) 多工具执行中途崩溃导致 checkpoint 与实际状态不一致（#5747） | 高（数据一致性） | fix PR 待合并 |
| [#5630](https://github.com/HKUDS/nanobot/pull/5630) Dream 记忆文件（SOUL.md/USER.md/MEMORY.md）失去大小上限，无界注入每次请求 | 中高（性能回归，9/2 提出） | fix PR 待合并，积压近 7 周 |
| [#6308](https://github.com/HKUDS/nanobot/pull/6308) Chat Completions refusal 字段被丢弃，触发空响应重试 | 中 | fix PR 待合并 |
| [#6046](https://github.com/HKUDS/nanobot/pull/6046) 仅附件的排队引导消息被跳过 | 低 | fix PR 待合并，存在 conflict |

## 6. 功能请求与路线图信号

- **Agent 自治能力**：cron 暂停/恢复（#6312→PR #6313）、运行历史（#6318→PR #6319）、web_fetch 续读（#6316→PR #6317）、list_sessions 分页（#6314→PR #6315）——四项均已有实现 PR 且带完整测试，**极可能进入下一版本**。
- **多模态/客户端体验**：本地文件与视频附件（PR #6321）、TUI Mermaid 渲染（PR #6320）方向明确。
- **更新机制**：[#6168](https://github.com/HKUDS/nanobot/pull/6168) 应用内可恢复更新 + macOS Dock 集成，作者明确标注“尚未激活、勿合并”，是下一阶段的大特性。
- **安全沙箱**：#2569（sandlock OS 级沙箱）尚无关联 PR，短期纳入概率低，但值得纳入路线图讨论。
- **Windows 体验**：[#6111](https://github.com/HKUDS/nanobot/issues/6111) 工作区选择器增强（盘符列表、新建文件夹、常用位置）。

## 7. 用户反馈摘要

- **上手门槛**：Docker 一键启动失败（#6165）直指“Docker 本应 Just Works”的预期落差，且配套文档不足，说明新用户引导是薄弱环节。
- **重度 chat 用户诉求**：希望不离开对话即可完成运维操作（暂停定时任务、查历史错误、翻长网页、分页查会话），反映用户正把 NanoBot 当作长期运行的自治助手而非一次性聊天工具。
- **Windows 用户**：对原生体验细节（文件选择器）有较高要求。
- **安全意识用户**：对正则级命令拦截缺乏信心，期待真正的进程级隔离。

## 8. 待处理积压

- **[#2569](https://github.com/HKUDS/nanobot/issues/2569)**（3/27 提出，仅 1 评论）：OS 级沙箱请求悬置近 7 个月，建议维护者给出明确立场（纳入/ wontfix）。
- **[PR #5630](https://github.com/HKUDS/nanobot/pull/5630)**（9/2 提出）：Dream 记忆无界增长的性能回归修复，积压近 7 周，影响长期运行用户，建议优先评审。
- **[PR #5437](https://github.com/HKUDS/nanobot/pull/5437)**（8/19 提出）：Serply 搜索 provider，积压 2 个月且标记 conflict，需 rebase 后推进。
- **[PR #6046](https://github.com/HKUDS/nanobot/pull/6046)**、**[PR #6280](https://github.com/HKUDS/nanobot/pull/6280)**：均存在 conflict，建议及时 rebase 避免合并队列进一步堵塞。

---
*数据来源：HKUDS/nanobot GitHub，统计窗口 2026-10-19 至 2026-10-20。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-10-20

## 1. 今日速览

Zeroclaw 今日保持高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 48，关闭 2），PR 更新 50 条（待合并 41，已合并/关闭 9），无新版本发布。项目当前重心集中在三条主线：**插件 webhook 网关架构（plugins 系列 XL 级 PR 链）**、**Goal Mode V1 实施（proposal 2/12 已提交）**，以及持续积累的 Windows 平台兼容性修复。整体看，项目处于功能扩张与稳定化并行的阶段，但 P1 级安全与运行时 Bug 积压较多，值得维护者关注。

## 2. 版本发布

今日无新版本发布。最新稳定线仍为 v0.8.5（稳定化 tracker 见 [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)），PR #11833 已标注 `release:v0.8.7`，暗示 v0.8.7 发布准备正在进行中。

## 3. 项目进展

今日关闭 9 个 PR，以测试补强和小型修复为主：

- **#11726（已关闭）** — [tailscale gateway serve 进程监管与验证](https://github.com/zeroclaw-labs/zeroclaw/pull/11726)：修复 `tailscale serve|funnel` 子进程退出未被检测导致隧道静默失效的问题，提升远程网关可靠性。
- **#11154 / #11155 / #11157（已关闭）** — 来自 @Leon-SK668 的一批测试补强：[follow 日志流缺失回归测试](https://github.com/zeroclaw-labs/zeroclaw/pull/11154)、[browser 后端别名规范化测试](https://github.com/zeroclaw-labs/zeroclaw/pull/11155)、[Codex 空 prompt 参数测试](https://github.com/zeroclaw-labs/zeroclaw/pull/11157)。

**待合并的关键大型 PR（均在活跃推进）：**

- [#11319](https://github.com/zeroclaw-labs/zeroclaw/pull/11319) / [#11318](https://github.com/zeroclaw-labs/zeroclaw/pull/11318) / [#11322](https://github.com/zeroclaw-labs/zeroclaw/pull/11322) / [#11320](https://github.com/zeroclaw-labs/zeroclaw/pull/11320) — @IftekharUddin 的插件 webhook 四连 PR 链（core ingress → CI 覆盖 → RPC 转发 → 核心 dispatch），是当前最大的架构性工作，已进入 `needs-maintainer-review` / `needs-author-action` 阶段。
- [#11879](https://github.com/zeroclaw-labs/zeroclaw/pull/11879) — Goal Mode V1 proposal 2/12：休眠配置与命令文法（非可执行前缀），对应 tracker [#10341](https://github.com/zeroclaw-labs/zeroclaw/issues/10341)。
- [#11868](https://github.com/zeroclaw-labs/zeroclaw/pull/11868) — agent 循环重复调用拦截与收尾保留；[#11875](https://github.com/zeroclaw-labs/zeroclaw/pull/11875) — 修复多模态历史图片重复发送。
- [#11822](https://github.com/zeroclaw-labs/zeroclaw/pull/11822) — 安全修复：shell 扫描器在 `$(...)`、子 shell、反引号边界的命令切分（对应 #9247 类工作区边界问题）。

## 4. 社区热点

- **[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)（19 评论）** — Windows 上 74 个测试失败（Unix-only 命令、路径语义、GBK 控制台编码），CI 只跑 Linux 所以未被发现。这是 Windows 用户群的集中痛点，配套请求 [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)（三平台 CI 矩阵）已在推进中。
- **[#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101)（9 评论）** — v0.8.3 同时携带三套签名/溯源机制（cosign、GitHub attestation、slsa-generator），源于两个 26 小时内互不相知合并的 PR。社区在讨论收敛为单一签名方案、将 release 资产从 53 个减到约 20 个。
- **[#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486)（7 评论）** — 高熵检测器将 Solana 钱包地址误脱敏为 `[REDACTED_HIGH_ENTROPY_TOKEN]`，且 Telegram 通道路径上 `high_entropy_tokens=false` 不生效，阻断加密货币相关 agent 场景。
- **[#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519)（7 评论）** — cargo-audit/cargo-deny 忽略清单漂移与 wasmtime-wasi CVE 处置，安全供应链治理讨论。

## 5. Bug 与稳定性（按严重度）

**S0 — 安全风险（均无完整 fix PR）：**
- [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) — `delegate` 工具绕过父级工具白名单，子 agent 可调用被策略排除的工具。
- [#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) — shell 工具可通过 symlink 逃逸工作区边界（#11822 提供部分修复，待合并）。
- [#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) — 紧急停止（estop）仅为 CLI 状态文件，运行时路径不读取，安全文档承诺与现实不符。

**S1 — 工作流阻断：**
- [#9333](https://github.com/zeroclaw-labs/zeroclaw/issues/9333) — ACP 失败回合在切换会话后整体消失（in-progress）。
- [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) — 不完整终端响应被误报为成功（in-progress）。
- [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) — Cron agent 任务无墙钟超时，运行中锁仅在进程启动时清理。
- [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) — Web 仪表盘中途停止 agent 会擦除工具调用与思考上下文。
- [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) — WhatsApp Web 被 WhatsApp 新 passkey/SHORTCAKE 关联门槛阻断。

**S2 — 行为降级：**
- [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) — MCP/tool-schema 克隆导致 agent 循环 RSS 无界增长（P1，help wanted）。
- [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) — `flush_config` 可覆盖并发写入。
- [#9332](https://github.com/zeroclaw-labs/zeroclaw/issues/9332) — 图片密集请求的预算/上下文计量失真。
- 今日新报：[#11818](https://github.com/zeroclaw-labs/zeroclaw/issues/11818)（good first issue）— 配置目录过长时 CLI 报裸错误 "path must be shorter than SUN_LEN"。

## 6. 功能请求与路线图信号

- **Goal Mode**：[#10341](https://github.com/zeroclaw-labs/zeroclaw/issues/10341) tracker 活跃，[#11879](https://github.com/zeroclaw-labs/zeroclaw/pull/11879)（2/12）今日提交，V1 实施节奏明确，大概率进入下一版本线。
- **XMPP/Prosody 通道（含 OMEMO）**：[#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) XL 级 PR 已提交，社区对去中心化通道需求明显。
- **Antigravity CLI (agy_cli) 工具**：[#11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076) — Google 已将终端 Gemini 迁移至 Antigravity，Gemini CLI 停止服务多数账户，此集成有较强时效性。
- **SSH 传输复用**：[#11869](https://github.com/zeroclaw-labs/zeroclaw/pull/11869)（opt-in 任务级 SSH transport 复用）。
- **OpenRouter 余额展示**：[#11845](https://github.com/zeroclaw-labs/zeroclaw/pull/11845) / [#11846](https://github.com/zeroclaw-labs/zeroclaw/pull/11846)。
- **新 RFC**：[#11870](https://github.com/zeroclaw-labs/zeroclaw/issues/11870) — 浏览器登录按用户配对会话与 IdP 故障安全的 KB 委托，今日新开。
- **发布工程收敛**：[#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) 签名机制合并 + [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) 三平台 CI，均为 v0.8.7 前的强信号。

## 7. 用户反馈摘要

- **Windows 体验明显二等公民**：测试失败（#7462）、Ctrl+C 强退（#9028）、僵尸端口占用（#8800）、桌面端关窗后无法重开/退出（#11087，已关闭）——Windows 用户群（含中文用户 @NiuBlibing、@kouhe3）持续贡献高质量报告但修复缓慢。
- **加密货币/钱包场景被安全机制误伤**：Solana 用户（俄语社区）无法获取钱包地址（#9486），泄漏检测与业务可用性需要平衡。
- **可靠性多模态用户抱怨上下文计量和图片重复发送**（#9332、#11875），以及“不完整响应报成功”（#9421）侵蚀信任。
- **运维侧**：仪表盘中途停止丢失上下文（#8794）、Discord typing 卡死（#9198）反映 daemon 重载生命周期处理粗糙。
- 正面信号：社区贡献者（@Leon-SK668、@CastelloBrancoTecnologia、@tidux）持续高质量产出，标注规范（scope boundary / blast radius）体现了健康的工程文化。

## 8. 待处理积压（建议维护者关注）

| 条目 | 状态 | 说明 |
|---|---|---|
| [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) MCP 内存泄漏 | help wanted, P1 | OOM 相关长期痛点，6 月底至今未有关联 fix PR |
| [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) delegate 白名单绕过 | S0, 6 月下旬 | 安全问题积压近 4 个月 |
| [#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) estop 无效 | P1, help wanted | 安全文档与实现不符 |
| [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) WhatsApp 关联失效 | S1, 7 月初 | 受外部平台变更影响，需上游适配 |
| [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) 停止丢失上下文 | S1, 7 月初 | 用户直接痛点，仅 2 评论，疑似关注度不足 |
| [#11319–#11322](https://github.com/zeroclaw-labs/zeroclaw/pull/11319) 插件 webhook PR 链 | needs-maintainer-review，10 月 1 日提交 | 四个 XL 级 PR 相互依赖，久拖将增加 rebase 成本，建议尽快给出合并决策 |
| [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) v0.8.5 tracker | 8 月 30 日截止已过 | 稳定化线收尾状态需更新 |

---

*数据来源：GitHub（zeroclaw-labs/zeroclaw），统计窗口截至 2026-10-20。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-10-20

## 1. 今日速览

Hermes Agent 今日保持高活跃度：过去 24 小时内有 50 条 Issue 更新（全部为开放/活跃状态，无关闭）和 50 条 PR 更新（48 条待合并，2 条关闭），但**无任何新版本发布**、PR 合并数几乎为零。社区以问题报告为主，大量集中在 Desktop 客户端、会话管理（sessions）、网关（gateway）和本地模型运行时等模块。值得关注的是出现了一起**涉及数据丢失的安全问题**（#141346）以及一条 P1 级 PR（#139488）长期滞留待合并，维护者响应与合并节奏明显落后于社区贡献速度。

## 2. 版本发布

今日无新版本发布。（社区讨论中多次提及 v0.22.2 / v0.21.5 等既有版本，PR #141839 表明部分稳定通道安装仍被卡在 v0.22.2 无法升级。）

## 3. 项目进展

今日 PR 流以**新增提交**为主，合并进展有限（仅 2 条 PR 被关闭，其中一条为被替代的重复提交）：

- [#122479](https://github.com/NousResearch/hermes-agent/pull/122479)（CLOSED）修复 `exec(base64.b64decode(...))` 命令被 SentinelOne 误判为 Metasploit 载荷的问题，由后续 PR [#139927](https://github.com/NousResearch/hermes-agent/pull/139927) 接续（将代码改为通过 stdin 传输）。
- [#141508](https://github.com/NousResearch/hermes-agent/pull/141508)（CLOSED）打包修复 TUI 系列 13 项遗留问题（worktree 清理、语音停止、goal 实时重绘等），后续或拆分重提。
- 新提交中质量较高的修复包括：
  - [#141846](https://github.com/NousResearch/hermes-agent/pull/141846)：checkpoint 捕获前预检体积门槛 + git 超时后按进程树终止（起因是真实事故：1.2 TB VHDX 被误纳入 git add）。
  - [#141845](https://github.com/NousResearch/hermes-agent/pull/141845)：修正 guardrail 对结构化工具结果 `{"ok": false}` 的成功/失败误判。
  - [#141848](https://github.com/NousResearch/hermes-agent/pull/141848)：Windows LSP 原生 wrapper 优先级修复（WinError 193）。
  - [#141841](https://github.com/NousResearch/hermes-agent/pull/141841)：MCP 单工具反复失败时只暂停该工具而非整服务器。
  - [#139488](https://github.com/NousResearch/hermes-agent/pull/139488)（**P1**）：修复 Discord delegate_task 子任务完成唤醒因线程元数据漂移而丢失的问题——目前仍未合并，属高风险积压。

**整体判断**：社区修复动能充足，但合并吞吐不足，进展主要停留在“提交待审”阶段。

## 4. 社区热点

1. **[#131859](https://github.com/NousResearch/hermes-agent/issues/131859)**（46 评论，持续 17 天）— 贡献者 @kuehnberger 无法通过 API 向本仓库提 PR，报 CreatePullRequest 权限错误，且仅影响其账号，标记为 `cause/upstream`。这本身影响了外部贡献链路，建议维护者优先澄清。
2. **[#10421](https://github.com/NousResearch/hermes-agent/issues/10421)**（24 评论，👍 9，4 月提出）— 请求轮次级（turn-level）实时时间上下文，使 agent 具备稳定的“当前时间”感知。半年未落地，社区持续跟进，反映核心 agent 能力层面的真实缺口。
3. **[#141346](https://github.com/NousResearch/hermes-agent/issues/141346)**（13 评论，昨日新提）— **智能审批自动放行了 osascript 命令，导致用户未保存的 PPT 被关闭、导出文件被删除（不可恢复数据丢失）**。这是对 `approvals.mode: smart` 信任模型的直接冲击，今日讨论热烈，属安全类最高优先级事件。
4. **[#139818](https://github.com/NousResearch/hermes-agent/issues/139818)**（8 评论）— 远端后端桌面会话无法从本地恢复（`session.resume` 报 not_found），涉及会话持久化归属设计。
5. **[#126887](https://github.com/NousResearch/hermes-agent/issues/126887) / [#139568](https://github.com/NousResearch/hermes-agent/issues/139568)**（各 6 评论）— 分别为 macOS `ps` 输出转义导致 dashboard 状态遗漏，以及 MoA 参考模型在明令禁止的情况下仍伪造 tool-call 块。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 高（安全/数据丢失） | [#141346](https://github.com/NousResearch/hermes-agent/issues/141346) | smart 审批自动放行 osascript 致用户数据丢失（macOS） | ❌ 暂无 |
| 高（安全/配置） | [#141832](https://github.com/NousResearch/hermes-agent/issues/141832) | `config set auxiliary.*.provider` 残留旧 base_url，**新凭证被发往旧供应商端点** | ❌ 暂无 |
| P2 | [#141820](https://github.com/NousResearch/hermes-agent/issues/141820) | _mkm-integration 分支 HTTP 400/404 时陷入无限回退循环至不存在的 `gpt-6.1-sol` | ❌ |
| P2 | [#141826](https://github.com/NousResearch/hermes-agent/issues/141826) | Bot 会话使用创建时冻结的 provider 快照，新增 provider 永远解析失败 | ❌ |
| P2 | [#141819](https://github.com/NousResearch/hermes-agent/issues/141819) | Linux CUDA 引擎要求 GLIBC_2.38，Ubuntu 22.04/Debian 12/RHEL 9 NVIDIA 主机无法安装且不回退 Vulkan | ❌ |
| P2 | [#141574](https://github.com/NousResearch/hermes-agent/issues/141574) | Desktop Electron zygote 进程 GPU 启动失败后 CPU 占用 600%+ | ❌ |
| P2 | [#127917](https://github.com/NousResearch/hermes-agent/issues/127917) | 模型授权 400 错误将登录供应商静默 bench 365 天，`auth status` 无感知 | ❌ |
| P2 | [#141806](https://github.com/NousResearch/hermes-agent/issues/141806) | Discord 流式回复跳过 `extract_images`，markdown 图片显示为 `!alt` | ❌ |
| P2 | [#141758](https://github.com/NousResearch/hermes-agent/issues/141758) | 高负载下 kanban dispatcher 误判存活 worker 为 crashed 并 reaps，产生重复 reviewer | ❌ |
| P3 | [#141837](https://github.com/NousResearch/hermes-agent/issues/141837) / [#141855](https://github.com/NousResearch/hermes-agent/issues/141855) | 本地模型错配 Xiaomi provider 每轮 400；压缩合并致用户消息从 Desktop 转录消失 | ❌ |
| 性能 | [#136316](https://github.com/NousResearch/hermes-agent/issues/136316) / [#139384](https://github.com/NousResearch/hermes-agent/issues/139384) | git 调用每次重复 `pm.ensure("git")`（每次 208ms）；960 个 skill 扫描需 ~9s | 部分相关：#141846 |

已有对应修复 PR 的问题：MCP 整服务器暂停（#141841）、webui 会话历史授权拒绝（#141847）、稳定通道卡 v0.22.2（#141839）。

## 6. 功能请求与路线图信号

- **Turn-level 时间上下文**（[#10421](https://github.com/NousResearch/hermes-agent/issues/10421)，👍 9，官方标记 `needs-decision`）：呼声最高、周期最长的功能请求，涉及核心 agent 架构，需官方决策。
- **消息平台 2FA 支持**（[#141844](https://github.com/NousResearch/hermes-agent/issues/141844)）：请求在 Discord 等网关上支持 `browser_vault enter_code` 交互，配合消息网关的浏览器自动化是明确的方向。
- **TUI 可配置面板与皮肤对齐**（[#17977](https://github.com/NousResearch/hermes-agent/issues/17977)）：长期开放的美化/配置诉求。
- 新 PR 中的功能增量信号：LINE 原生文件发送（[#141850](https://github.com/NousResearch/hermes-agent/pull/141850)）、Webhook 生命周期事件发布给插件（[#127054](https://github.com/NousResearch/hermes-agent/pull/127054)）、Biver MCP 目录新增（[#141840](https://github.com/NousResearch/hermes-agent/pull/141840)）、deed-page 发布 skill（[#141791](https://github.com/NousResearch/hermes-agent/pull/141791)）——生态扩展（MCP/skills/平台适配）是明确的社区驱动路线。

## 7. 用户反馈摘要

- **痛点集中区**：① 多供应商/本地模型配置脆弱（#141832、#141837、#141826），用户频繁遭遇“换 provider 后旧端点残留/错配”；② Desktop 稳定性（CPU 飙升 #141574、启动失败 #140252、消息消失 #141855）影响日常使用信心；③ 老旧系统兼容性（macOS 12 #137512、GLIBC 2.38 #141819）使一部分用户完全无法使用新运行时。
- **信任与安全**：#141346 的数据丢失事件直指 smart 审批模式对 GUI 自动化（osascript）的放行粒度过粗，用户期望对不可逆操作有更强护栏。
- **满意点**：社区对 issue 模板与标签体系（P 级、comp、sweeper 风险标签）反馈良好，报告可追溯性强；skill/MCP 生态扩展（如 deed-page、Biver）获得积极响应，说明插件化路线受欢迎。
- **高频使用场景**：Kanban 自动任务分解、delegate_task 子代理、Discord/消息网关长驻 bot、本地 llama.cpp 模型——这些场景也是 bug 高发区。

## 8. 待处理积压

| 条目 | 状态 | 提醒 |
|---|---|---|
| [#139488](https://github.com/NousResearch/hermes-agent/pull/139488) **P1** Discord 完成唤醒丢失 | 待合并 5 天 | 涉及消息投递与会话状态双重风险标签，应优先评审 |
| [#131859](https://github.com/NousResearch/hermes-agent/issues/131859) 贡献者无法提 PR（46 评论） | 开放 17 天 | 阻塞外部贡献链路，需维护者介入澄清 |
| [#10421](https://github.com/NousResearch/hermes-agent/issues/10421) turn-level 时间上下文 | `needs-decision` 半年 | 高 👍，需官方架构决策 |
| [#79738](https://github.com/NousResearch/hermes-agent/issues/79738) Kanban 自动分解器重复提升被阻塞任务 | 开放 2.5 个月 | 自动化可靠性核心问题 |
| [#103521](https://github.com/NousResearch/hermes-agent/issues/103521) Gamma MCP OAuth 失败 | 开放 1.5 个月，`cause/upstream` | 需协调上游或调整 loopback 回调策略 |
| [#139927](https://github.com/NousResearch/hermes-agent/pull/139927) SentinelOne 误报修复 | 待合并 4 天 | 影响企业终端安装，与已关闭的 #122479 重复，尽快合并其一 |

**健康度小结**：Issue/PR 输入活跃、社区诊断质量高，但 0 关闭 / 0 合并 / 0 发布的单日节奏表明维护带宽是当前瓶颈；建议优先处理 P1 PR #139488、安全类 #141346 与 #141832，并疏通 PR 权限问题 #131859 以保住外部贡献者。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 📊 PicoClaw 项目日报 — 2026-10-20

## 1. 今日速览

PicoClaw（sipeed/picoclaw）过去 24 小时共产生 **5 条 Issue 更新（3 新开/活跃、2 关闭）和 2 条 PR 更新（1 待合并、1 关闭）**，无新版本发布。整体活跃度中等偏低，且关闭项多为 stale 机制自动处理而非真实修复，社区维护状态令人担忧。特别值得警惕的是，有社区成员公开宣布维护活跃 Fork（#3417），侧面印证主仓库维护响应放缓。今日新增的一条 Bug（#3445）涉及智能路由轻量模型空转导致千万级 token 消耗，属高严重性问题，建议优先关注。

## 2. 版本发布

无新版本发布。⚠️ 结合 #3417 的「主仓库疑似无人维护」表述，版本发布节奏已明显停滞，建议社区关注官方维护状态说明。

## 3. 项目进展

今日无 PR 合并，实质代码进展有限：

- **[PR #3381](https://github.com/sipeed/picoclaw/pull/3381)（已关闭）**：将 OpenAI provider 切换至 Responses API 的功能 PR，最终以 stale 状态被关闭。该 PR 曾附带 CLA 签名问题（见 #3392），关闭原因疑似为长期无维护者响应，属社区贡献流失。
- **[PR #3416](https://github.com/sipeed/picoclaw/pull/3416)（待合并）**：新增 Sendblue iMessage/SMS 通道，允许用户通过短信与 PicoClaw agent 对话。功能完整、文档齐全，但自 10-05 开放至今约 15 天无维护者评审。

**结论：项目当前处于停滞—分叉的关键节点，主仓库本月几乎无实质合并进展。**

## 4. 社区热点

- **[Issue #3417](https://github.com/sipeed/picoclaw/issues/3417) — 活跃 Fork 公告（最热讨论）**
  @afjcjsbx 宣布维护活跃 Fork `afjcjsbx/picoclaw`，明确指出主仓库"currently appears to be unmaintained"且社区需求仍旺盛。该 Issue 获持续讨论，反映社区对维护断层的焦虑，是本周最重要的项目治理信号。
- **[Issue #3394](https://github.com/sipeed/picoclaw/issues/3394)（已关闭）**：QQ 机器人接口变更导致 QQ 通道失效，用户希望修复，但以 stale 关闭，未解决根本诉求。
- **[Issue #3445](https://github.com/sipeed/picoclaw/issues/3445)**：今日新开，详实的 trace 数据引发对智能路由成本的讨论潜力。

## 5. Bug 与稳定性（按严重程度排列）

| 级别 | Issue | 摘要 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#3445](https://github.com/sipeed/picoclaw/issues/3445) | 智能路由单轮内轻量模型空转 **222 次 LLM 调用**，9 分钟消耗约 **1310 万输入 token**，无重复调用熔断、turn 中途不重判，最终手动中止 | ❌ 无 fix PR |
| 🟡 中 | [#3426](https://github.com/sipeed/picoclaw/issues/3426) | Telegram MarkdownV2 未转义链接标签与引用块文本，导致整条回复降级为纯文本 | ❌ 无 fix PR |
| 🟡 中 | [#3394](https://github.com/sipeed/picoclaw/issues/3394)（已 stale 关闭） | QQ 机器人上游接口更新后通道未同步 | ❌ 未修复即关闭 |
| 🟢 低 | [#3392](https://github.com/sipeed/picoclaw/issues/3392)（已关闭） | CLAassistant 无法检测签名，阻塞贡献流程 | ❌ 流程性问题 |

## 6. 功能请求与路线图信号

- **iMessage/SMS 通道**（[PR #3416](https://github.com/sipeed/picoclaw/pull/3416)）：代码与文档完备，是最接近落地的社区功能，但需维护者介入评审。若主仓库恢复维护，此 PR 应优先合并。
- **OpenAI Responses API 迁移**（[PR #3381](https://github.com/sipeed/picoclaw/pull/3381)，已关闭）：功能价值明确，关闭属损失；Fork 方向可能承接此工作。
- **QQ 通道接口适配**（#3394）：真实用户需求强烈，尚无对应 PR。
- **路由熔断 / 成本保护机制**（#3445 隐含需求）：社区需要迭代上限、token 预算熔断等护栏，可作为路线图候选。

## 7. 用户反馈摘要

- **成本失控是最大痛点**：#3445 用户附完整事故 trace（222 次调用、1310 万 token），表明已有用户在生产/重度场景使用智能路由，对缺乏熔断保护深感不满。
- **消息格式体验受损**：#3426 用户在意 Telegram 富文本格式保真，说明即时通讯通道的用户体验细节被高度关注。
- **国产生态适配诉求**：#3394 反映 QQ 通道用户群真实存在，且对上游 API 变更的响应速度敏感。
- **贡献者体验受挫**：#3392 的 CLA 签名问题与 #3381 的 stale 关闭叠加，显示外部贡献流程摩擦大，是维护流失的诱因之一。

## 8. 待处理积压

| 项目 | 状态 | 说明 |
|---|---|---|
| [PR #3416](https://github.com/sipeed/picoclaw/pull/3416) | 开放 ~15 天 | Sendblue 通道，功能完整却无人评审，建议维护者优先处理 |
| [Issue #3426](https://github.com/sipeed/picoclaw/issues/3426) | 开放 8 天 | Telegram MarkdownV2 Bug，2 条评论后无进展，濒临 stale |
| [Issue #3445](https://github.com/sipeed/picoclaw/issues/3445) | 今日新开 | 高严重性成本失控问题，0 评论，需立即响应 |
| [Issue #3417](https://github.com/sipeed/picoclaw/issues/3417) | 开放 14 天 | Fork 公告无官方回应，项目治理层面的悬而未决事项 |

**综合健康度评估**：⚠️ 主仓库维护响应明显不足，stale 机器人成为主要关闭手段，社区已启动 Fork 自救。短期内建议关注官方是否就维护状态发声，以及 #3417 所指 Fork 的发展动向。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：2026-10-20** | 数据来源：[nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw)

---

## 1. 今日速览

NanoClaw 今日保持高活跃度：过去 24 小时共 63 条动态（Issues 13 条、PR 50 条），PR 合并/关闭达 27 条，待合并 23 条，开发节奏紧凑。今日无新版本发布，但主线围绕 **pi provider 新增、Codex 修复系列落地、OneCLI 1.45 升级准备** 三条主线推进。社区贡献活跃，多位核心成员（@glifocat、@Z-Mackintosh、@amit-shafnir）密集提交。整体健康度良好，但 skill 刷新覆盖本地适配器（#3529）等长期未决问题值得维护者关注。

---

## 2. 版本发布

今日无新版本发布。最新 tag 为 `v2026.10.0`，#4149 已手工将该版本的加固镜像登记至 `agent-images.json`，暗示下一次发布流程依赖 #4010 的 CI 自动化尚未落地。

---

## 3. 项目进展

今日已合并/关闭的重要 PR（共 27 条合并/关闭，择要）：

- **[#4130](https://github.com/nanocoai/nanoclaw/pull/4130) fix(add-codex): Codex CLI 回退至 0.155.1** — 修复 ChatGPT 登录的 Codex agent 完全无响应的回归（`selected workspace missing from routing discovery`）。
- **[#4133](https://github.com/nanocoai/nanoclaw/pull/4133) fix(codex): gateway 替身注入真实 ChatGPT workspace id** — 使 Codex 0.162.1 在两类 credential gateway 下恢复可用，与 #4130 构成双路径修复。
- **[#4136](https://github.com/nanocoai/nanoclaw/pull/4136) fix(approvals): 审批卡片转义不可信文本** — 安全加固系列（#4090 后续）收尾，防注入。
- **[#4141](https://github.com/nanocoai/nanoclaw/pull/4141) fix(interactive): 问答卡片投递失败即返回错误** — 消除最长 300 秒的无谓等待。
- **[#4108](https://github.com/nanocoai/nanoclaw/pull/4108) feat(setup): 首次回复等待加长并显示阶段** — 改善本地模型首次加载时的安装体验。
- **[#4104](https://github.com/nanocoai/nanoclaw/pull/4104)（已关闭）add-codex 运行时改为随 skill payload 分发** — 摆脱 `providers` 分支依赖，fork 也能装 Codex。
- **[#3356](https://github.com/nanocoai/nanoclaw/pull/3356) Cursor Agent SDK provider payload** — 长期 PR（8 月开立）今日关闭，provider 生态再扩一员。

待合并的关键 PR：

- **[#4129](https://github.com/nanocoai/nanoclaw/pull/4129) feat: 新增 pi agent provider**（/add-pi skill），今日已衍生 3 个 follow-up issue（见 §6）。
- **[#4094](https://github.com/nanocoai/nanoclaw/pull/4094) / [#4095](https://github.com/nanocoai/nanoclaw/pull/4095)**：OneCLI 网关升至 1.45.0 + CLI 2.11.0，是迁移 2.x 前的必要步骤，并重建 agent 授权模型。

**整体评估**：Codex 修复链闭环 + provider 分发架构调整落地，项目今日在 provider 稳定性与供应链自主性上迈出实质一步。

---

## 4. 社区热点

- **[#3529](https://github.com/nanocoai/nanoclaw/issues/3529)（4 评论）**：update-nanoclaw 的 skill 刷新误判本地自写适配器为 skill 产物，导致校验失败或被覆盖，且无 opt-out。自 8 月活跃至今，是本地适配器开发者的核心痛点。
- **[#3569](https://github.com/nanocoai/nanoclaw/issues/3569)（已关闭）**：Telegram 适配器 pin 在 4.29.0，含上游 4.32.0 已修复的 MarkdownV2 奇数标记投递失败 bug——影响全部 Telegram 用户。今日关闭，推测 pin 已随 PR 更新。
- **[#4127](https://github.com/nanocoai/nanoclaw/issues/4127)（已关闭）**：transcript 超 ~512 MB（Node 字符串上限）后 dashboard 停止更新。关闭时间与 #4086 的 1 MB 分块读取方案及 [#4137](https://github.com/nanocoai/nanoclaw/issues/4137) 后续对齐。

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 概述 | 修复状态 |
|---|---|---|---|
| 🔴 高 | [#4142](https://github.com/nanocoai/nanoclaw/issues/4142) | Resend 邮件通道只能收不能发（null thread id 回退到适配器拒绝的平台 id） | 无 fix PR |
| 🔴 高 | [#4124](https://github.com/nanocoai/nanoclaw/issues/4124) | 安装时 AWS ECR 报 "no basic auth credentials"，部分镜像拉取失败 | 无 fix PR |
| 🟠 中 | [#4150](https://github.com/nanocoai/nanoclaw/issues/4150) | `ncl groups config add-mount` 无法创建读写挂载（v2026.10.0 字段写入逻辑缺陷） | 无 fix PR |
| 🟠 中 | [#4134](https://github.com/nanocoai/nanoclaw/issues/4134) | #4063 引入的回归：AnchoredDir 将 ENOSPC/EACCES 等运行时错误误判为“路径不安全”拒绝 | 无 fix PR |
| 🟡 中低 | [#4137](https://github.com/nanocoai/nanoclaw/issues/4137) | dashboard pusher 分块读取后仍存在若干无界输入（极端输入可致内存问题） | 跟进 #4086，无独立 PR |

已修复并关闭：#3569（Telegram pin）、#4127（512 MB transcript）、#1935（Apple Silicon launchd PATH 缺失 `/opt/homebrew/bin`）。

---

## 6. 功能请求与路线图信号

今日新增能力需求集中在 **pi provider 的完善**（均来自 @Z-Mackintosh，紧跟 PR #4129，说明该功能处于活跃打磨期，很可能随 #4129 一并或紧随其后落地）：

- [#4154](https://github.com/nanocoai/nanoclaw/issues/4154)：pi 的 provider 选择应为 group 级属性而非安装级环境变量。
- [#4153](https://github.com/nanocoai/nanoclaw/issues/4153)：pi 应支持 mid-turn 文本投递（当前 `textDelivery: 'result'` 静默丢弃工具调用前的消息）。
- [#4152](https://github.com/nanocoai/nanoclaw/issues/4152)：实现 `maybeRotateContinuation` 以轮转过大的长会话 continuation。

其他：

- [#4143](https://github.com/nanocoai/nanoclaw/issues/4143)：credential connections 支持同域多服务的 path prefix 匹配（多 MCP 服务单 ingress 场景），与刚合并的 #4106 生态配套，纳入概率较高。

---

## 7. 用户反馈摘要

- **本地适配器开发者受挫**（#3529）：自行维护 channel adapter 的用户在每次更新时被 skill 刷新机制阻塞或覆盖，强烈诉求 opt-out 机制。
- **生产级长会话场景暴露**（#4127、#4137、#4152）：多位重度用户跑到数百 MB transcript，暴露 Node 字符串上限、无界内存读取等工程边界，说明存在长时运行的生产部署。
- **安装体验仍是最常见卡点**（#4124、#4108）：AWS 凭证错误、首回复超时等问题集中在 setup 阶段；#4108 的分阶段等待改进直接回应了本地模型用户反馈。
- **多通道运维痛点**（#4142、#4100、#4102）：Resend、Google Chat、iMessage 等通道的安装/卸载流程细节问题频出，skill 化交付下的边界情况仍在收敛。
- **好评方向**：审批卡片的透明度改进（#4147 “始终显示完整 action”）和 300 秒等待消除（#4141）体现对交互确定性的重视。

---

## 8. 待处理积压

- **[#3529](https://github.com/nanocoai/nanoclaw/issues/3529)**（8/25 开立，近两个月未关闭，4 评论）：skill 刷新覆盖本地适配器且无 opt-out——影响扩展开发者群体，建议优先给出临时 workaround 或设计 opt-out 配置。
- **[#3156](https://github.com/nanocoai/nanoclaw/pull/3156)**（7/30 开立，今日仍有更新）：结构化附件传递至 provider（vision 场景核心能力），已挂 core-team 标签但近 3 个月未合并，建议推进 review。
- **[#4010](https://github.com/nanocoai/nanoclaw/pull/4010)**（10/3 开立）：agent-images.json 自动 PR 的 CI 工作流未落地，导致 #4149 需手工补录，发布流程存在自动化缺口。
- **[#4124](https://github.com/nanocoai/nanoclaw/issues/4124)、[#4142](https://github.com/nanocoai/nanoclaw/issues/4142)**：今日新开、尚无任何响应的安装阻塞级 bug，建议尽快 triage。

---

*本报告基于 24 小时窗口内的 GitHub 公开数据自动生成，链接均为 nanocoai/nanoclaw 仓库。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-10-20

## 1. 今日速览

IronClaw 今日整体活跃度较低，属于平稳运行状态。过去 24 小时仅有 1 条 Issue 更新（#8143）和 1 条 PR 更新（#8144），均为新开而非关闭/合并，无新版本发布。值得注意的是，唯一的新 Issue 来自自动化失败分类任务，属于项目自身的质量监控流程产出，显示项目在 benchmark 评估的持续化运营方面较为成熟。今日无人为发起的社区讨论或功能请求，外部贡献者参与度处于低位。

## 2. 版本发布

今日无新版本发布，Latest Release 无更新。省略详细说明。

## 3. 项目进展

今日**无任何 PR 被合并或关闭**，唯一活跃的 PR 是：

- **#8144** [OPEN] `chore(deps): bump postcss-selector-parser from 7.1.4 to 7.1.6 in /docs/internal/architecture-video`
  链接：[nearai/ironclaw PR #8144](https://github.com/nearai/ironclaw/pull/8144)
  这是 Dependabot 自动生成的依赖升级 PR，将 `docs/internal/architecture-video` 目录下的 `postcss-selector-parser` 从 7.1.4 升级到 7.1.6，属于文档站构建链的低风险维护性更新，对核心功能无影响。

**小结**：今日项目核心代码无实质推进，维护类活动（自动化质量报告 + 依赖机器人）是全部动态。

## 4. 社区热点

今日社区热度接近冰点，无高评论、高反应的讨论。

- 唯一活跃条目为 **#8143** [OPEN] *Daily ironclaw failure taxonomy — 2026-10-19*（作者 @pranavraja99，评论 0，👍 0）
  链接：[nearai/ironclaw Issue #8143](https://github.com/nearai/ironclaw/issues/8143)
  这是每日例行发布的失败分类报告，分析了 officeqa suite 中 57 个未通过任务，摘要指出这些失败几乎全部为 **DeepSeek-V4-Fla… 模型本身的质量错误**（非基础设施/框架问题）。该诉求反映了团队对评估结果归因分析（框架 bug vs. 模型能力）的持续关注，也间接说明 IronClaw 框架自身在该 suite 上运行稳定。

## 5. Bug 与稳定性

今日无用户报告的 Bug、崩溃或回归问题。

- 相关参考：#8143 的失败分类报告明确指出 officeqa 的 57 个 non-pass 任务“几乎全部为模型质量错误而非框架问题”，可视为对 IronClaw 框架自身稳定性的正面佐证。无 fix PR 需求。

## 6. 功能请求与路线图信号

今日无新功能请求或路线图相关讨论。Dependabot PR #8144 仅提示 docs 构建依赖需常规升级，不构成路线图信号。

## 7. 用户反馈摘要

今日无用户评论可提炼。间接信号：

- 来自 #8143 的自动化分析：在 officeqa 评测中，失败主要归因于底层模型（DeepSeek-V4 系列）能力，而非 IronClaw 工具链问题——说明评测基础设施的可信度和稳定性较好，但被测模型在该 benchmark 上仍有较大提升空间。

## 8. 待处理积压

- **PR #8144**（Dependabot 依赖升级）：今日新开，尚待维护者审查合并。虽为低风险变更，建议尽快处理以避免依赖积压。
- **Issue #8143**（每日失败分类）：属自动化日报性质，通常无需人工关闭，但建议维护者关注其中 officeqa 失败率（57 non-pass）是否呈持续趋势，必要时评估被测模型或任务集的调整。

---

**健康度小结**：今日 IronClaw 处于低活跃、稳态运行状态，动态全部来自自动化流程（失败分类日报 + Dependabot）。无阻塞问题、无回归、无版本风险。建议关注：① 及时合并 #8144；② 持续跟踪 #8143 反映的 officeqa 模型质量失败趋势。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-10-20

## 1. 今日速览

- 过去 24 小时 **PR 活动高度活跃（18 条更新，其中 10 条已合并/关闭、8 条待合并）**，Issues 更新为 0，无新版本发布。
- 活跃贡献者集中在 [@fisherdaddy](https://github.com/netease-youdao/LobsterAI/pulls?q=is:pr+author:fisherdaddy) 与 [@alison-xx](https://github.com/netease-youdao/LobsterAI/pulls?q=is:pr+author:alison-xx)，10 月 19 日当天即合并多条功能与修复 PR，节奏明显加快，疑似为 `release/2026.10.19` 版本线收尾（[#2900](https://github.com/netease-youdao/LobsterAI/pull/2900) 提及该分支）。
- 今日主线包括：远程 MCP 服务器 OAuth 登录、自定义 Provider 支持 OpenAI Responses / Gemini 格式、用户反馈与内容举报系统、配置同步保留用户覆写等。
- 社区侧（Issue）今日完全静默，互动热度全部集中在代码贡献层面。
- 综合评估：**开发健康度高、迭代速度快，但 9 月中旬遗留的一批 stale PR 积压值得关注。**

## 2. 版本发布

无新 Release。但从 [#2900](https://github.com/netease-youdao/LobsterAI/pull/2900) 可见存在 `release/2026.10.19` 发布分支，近期集中合入的 PR 很可能构成下一个版本内容，建议关注近期 Release 动态。

## 3. 项目进展

今日合并/关闭的 10 条 PR 按主题归类：

**🔐 MCP 与 Provider 生态**
- [#2905](https://github.com/netease-youdao/LobsterAI/pull/2905)（关闭了早先的 [#2874](https://github.com/netease-youdao/LobsterAI/pull/2874) 重复实现）：远程 MCP 服务器（Streamable HTTP / SSE）支持 MCP OAuth 2.1 登录，用户无需再到服务商控制台手动创建并粘贴 API Key。复用 OpenClaw v2026.8.1 的完整流程（发现、动态客户端注册、PKCE、回调、令牌刷新）。
- [#2897](https://github.com/netease-youdao/LobsterAI/pull/2897)：自定义模型 Provider 新增 **OpenAI Responses** 与原生 **Gemini (generateContent)** API 格式支持，与 OpenClaw 原生传输层复用，不引入 LobsterAI 侧协议代码。
- [#2904](https://github.com/netease-youdao/LobsterAI/pull/2904)：刷新 DeepSeek / Moonshot / Qwen / 智谱 / MiniMax / 小米的内置默认模型列表，全局默认模型从已退役的 `deepseek-reasoner` 切换为 `deepseek-v4-flash`（不覆盖用户已保存的配置）。

**🤝 Cowork / 桌面体验**
- [#2903](https://github.com/netease-youdao/LobsterAI/pull/2903)：IM 消息与定时任务触发的 Cowork 回合现在也会显示 turn credits 与 快速/旗舰 预设标签。
- [#2896](https://github.com/netease-youdao/LobsterAI/pull/2896)：配置同步不再覆盖用户对 `openclaw.user.json` 的手工修改（如增强插件开关），改用独立的用户覆写文件。
- [#2894](https://github.com/netease-youdao/LobsterAI/pull/2894)（仍 OPEN，今日有更新）：自定义桌宠皮肤（含 GIF 动图）、截图工具与追问交互增强。

**🐛 稳定性修复**
- [#2899](https://github.com/netease-youdao/LobsterAI/pull/2899)：修复 macOS 用户将 agent workspace 放在 OneDrive 后，符号链接重定向导致 `workspace path alias points to a different current target` 报错的问题。
- [#2902](https://github.com/netease-youdao/LobsterAI/pull/2902)：修复 Windows 可执行路径含空格时 Electron 43.5.0 开机自启项误报禁用的问题。
- [#2900](https://github.com/netease-youdao/LobsterAI/pull/2900)：测试修复——repair prune fixture 的 mtime 与真实时钟解耦，修复自 10-17 起的 CI 失败。

**📝 其他**
- [#2901](https://github.com/netease-youdao/LobsterAI/pull/2901)：新增设置与个人账户菜单中的用户反馈和 AI 内容举报入口，支持附图、预览、可选附带诊断日志（默认勾选并附隐私政策链接）。

> **整体评估**：单日合入 10 条覆盖 OAuth、多协议 Provider、反馈闭环、Windows/macOS 修复与测试稳定性，跨平台、跨模块推进明显，是发布分支冲刺期的典型高强度产出。

## 4. 社区热点

今日 Issues 完全无活动（0 新开 / 0 评论），无传统意义上的社区讨论热点。热度最高的活动均为维护者主导的 PR 更新，其中 [#2894](https://github.com/netease-youdao/LobsterAI/pull/2894)（自定义桌宠皮肤）与 [#2897](https://github.com/netease-youdao/LobsterAI/pull/2897)（Gemini/Responses 格式支持）属于用户呼声较高的能力，落地后预计将带动社区讨论回升。

## 5. Bug 与稳定性

今日无用户新报 Bug（Issues 为 0）。已处理的稳定性问题（均有 fix PR 并关闭）：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 高 | macOS + OneDrive workspace 符号链接导致主 agent 消息全部失败（[#2899](https://github.com/netease-youdao/LobsterAI/pull/2899)） | ✅ 已修复关闭 |
| 中 | Windows 含空格路径下开机自启误报失败（[#2902](https://github.com/netease-youdao/LobsterAI/pull/2902)） | ✅ 已修复关闭 |
| 中 | `openclaw.json` 手工修改在重启/同步后丢失（[#2896](https://github.com/netease-youdao/LobsterAI/pull/2896)） | ✅ 已修复关闭 |
| 低（仅测试） | repair prune 测试因 mtime 依赖真实时钟导致 CI 失败（[#2900](https://github.com/netease-youdao/LobsterAI/pull/2900)） | ✅ 已修复关闭 |

## 6. 功能请求与路线图信号

无新 Issue 需求，但从合并/活跃 PR 可推断近期路线图方向：

- **MCP OAuth 无感接入**（#2905 已关闭）与 **多协议 Provider**（#2897 已关闭）表明“降低自定义接入门槛”是当前主线，#2904 的默认模型刷新与之配套。
- **用户反馈系统**（#2901）上线后，后续版本可能建立更系统的用户声音收集闭环。
- **待合并信号**：[#2894](https://github.com/netease-youdao/LobsterAI/pull/2894)（自定义桌宠皮肤/GIF）与 [#2716](https://github.com/netease-youdao/LobsterAI/pull/2716)（Cowork Auto/Max 模型模式）若合入，将成为下个版本面向终端用户的亮点。
- [#2852](https://github.com/netease-youdao/LobsterAI/pull/2852)：Electron 43.5.0 → 44.8.0 升级仍待合并，注意 #2902 表明当前 43.5.0 存在 Windows login-item 行为差异，升级可能一并消化此类兼容补丁。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼直接用户声音。间接信号：

- [#2899](https://github.com/netease-youdao/LobsterAI/pull/2899) 源自一位 macOS 用户的日志反馈，显示**存在将 agent workspace 托管在 OneDrive 等云同步目录的真实使用场景**，团队响应迅速。
- [#2896](https://github.com/netease-youdao/LobsterAI/pull/2896) 反映**高阶用户有手工编辑 OpenClaw 配置（启用增强插件等）的习惯**，此前被配置同步覆盖是明确痛点。

## 8. 待处理积压

以下 PR 自 2026-09-18 起处于 stale 状态且今日有更新记录，建议维护者关注：

- [#2705](https://github.com/netease-youdao/LobsterAI/pull/2705)：备份恢复时跳过 Chromium Partitions（修复 `EBUSY` 回滚）——影响数据迁移核心功能。
- [#2708](https://github.com/netease-youdao/LobsterAI/pull/2708)：允许调用方应用挂起的延迟网关重启——影响 MCP 配置变更后的会话可用性。
- [#2712](https://github.com/netease-youdao/LobsterAI/pull/2712)：技能重复导入前确认覆盖——用户可感知的重复安装问题。
- [#2713](https://github.com/netease-youdao/LobsterAI/pull/2713)：市场标签显示结果计数——体验优化。
- [#2714](https://github.com/netease-youdao/LobsterAI/pull/2714)：付费图片/视频生成前确认用户意图——**涉及资费安全，优先级建议最高**。
- [#2716](https://github.com/netease-youdao/LobsterAI/pull/2716)：Cowork Auto/Max 模型模式——高价值功能，宜尽早定夺。

另有 Dependabot 的 [#2852](https://github.com/netease-youdao/LobsterAI/pull/2852)（Electron 44.8.0 升级）待评审。

---
*数据来源：GitHub（netease-youdao/LobsterAI），统计窗口 2026-10-19 至 2026-10-20。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-10-20

## 1. 今日速览

项目整体处于**低活跃但稳步推进**状态。过去 24 小时无 Issue 动态（新开 0、关闭 0），但有 1 条新 PR 提交、1 个新版本发布（`20261019.01`）。唯一活跃的 PR #1309 修复了 `web_fetch` 工具缺少默认 User-Agent 导致部分公共 API 返回 403 的问题，属于对既有 Issue #1305 的响应性修复，说明维护链路仍然畅通。

## 2. 版本发布

- **[20261019.01](https://github.com/moltis-org/moltis/releases)**（2026-10-19）
  - Release Notes 仅含版本号标题，未附详细变更日志，无法确认破坏性变更。建议升级前对比 tag diff，关注 `web_fetch` 相关 HTTP 客户端行为变化。

## 3. 项目进展

- 今日无已合并/关闭的 PR（0 合并 / 0 关闭）。
- 新提交 PR：**[#1309 fix(tools): send default User-Agent header in web_fetch requests](https://github.com/moltis-org/moltis/pull/1309)**（@Jishnu09-siuu）
  - 修复 #1305：`web_fetch` 自行构建 `reqwest::Client` 而未复用 `moltis_common::http_client::build_default_headers()`，导致对 `api.github.com` 等强制要求 `User-Agent` 的公共 API 返回 HTTP 403。
  - 意义：统一了 HTTP 客户端头部构建路径，减少行为不一致，提升工具调用的网络兼容性。属小范围缺陷修复，整体推进幅度有限但方向正确。

## 4. 社区热点

今日无评论/讨论动态。唯一值得关注的是 PR #1309（👍 0，评论 undefined），其背景 Issue #1305 反映的诉求是：**智能体工具在访问严格遵循 HTTP 规范的公共 API 时，需要标准化的请求头行为**。

## 5. Bug 与稳定性

| 问题 | 严重程度 | 状态 |
|---|---|---|
| [#1305] `web_fetch` 缺少 User-Agent，访问 GitHub API 等返回 403 | 中（影响工具可用性，非崩溃） | ✅ 已有 fix PR [#1309](https://github.com/moltis-org/moltis/pull/1309)，待审查合并 |

今日无崩溃/回归类报告。

## 6. 功能请求与路线图信号

今日无新增功能请求。从 PR #1309 可推断的隐含方向：**持续统一各工具的 HTTP 客户端基础设施**（复用 `build_default_headers()`），后续类似工具可能有同类整改需求，可视为小规模技术债清理信号。

## 7. 用户反馈摘要

今日 Issue 区无新评论。间接反馈（经 #1305）：用户在实际使用 `web_fetch` 调用 GitHub API 等场景中遭遇 403 阻断，痛点集中在**智能体联网工具对真实世界 API 兼容性不足**，期望开箱即用。

## 8. 待处理积压

- **PR #1309** 待合并，建议维护者优先审查——它阻塞着 #1305 的关闭，且改动小、风险低，是快速提升稳定性的低成本收益项。
- 当前数据窗口内无长期未响应 Issue，但 Issue 池整体为零活跃，建议关注是否为发布后的静默期，或是社区触达渠道需要激活。

---
*数据来源：Moltis GitHub 仓库过去 24 小时动态快照。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-10-20

---

## 1. 今日速览

CoPaw（QwenPaw）今日保持高活跃度：过去 24 小时 Issues 更新 32 条（新开/活跃 24，关闭 8），PR 更新 48 条（待合并 33，合并/关闭 15），无新版本发布。当前社区焦点集中在 **v2.2.2 引入的多媒体会话历史膨胀问题**（48MB 请求体、会话卡死）和**通道适配质量**（钉钉降级、QQ 群消息丢失、Telegram 引用丢失）。整体看，项目处于 2.2.2 发布后的密集修复期，Bug 报告流入速度高于修复速度，但 issue→PR 的响应链路健康，多个新报告当天即有对应 fix PR 提出。

---

## 2. 版本发布

今日无新 Release。（v2.2.2 仍为最新版本，社区反馈的回归问题集中在该版本，见第 5 节。）

---

## 3. 项目进展

今日关闭/合并的 PR 共 15 条，代表性进展：

**Console 与部署**
- [#8316](https://github.com/agentscope-ai/QwenPaw/pull/8316)（已关闭）：支持反向代理子路径部署，新增 `VITE_CONSOLE_BASENAME` 统一路由与静态资源配置，解决空白屏问题（对应 #8177）。
- [#8334](https://github.com/agentscope-ai/QwenPaw/pull/8334)：修复侧边栏 source-group 头部与首条会话重叠（#8333），小而快，当日提出当日关闭，流程健康。

**通道与媒体**
- [#8301](https://github.com/agentscope-ai/QwenPaw/pull/8301)（已关闭）：修复中文 Windows 压缩包文件名 CP437 乱码（对应 #8270），Skill 引用 `references/说明.txt` 可正常打开。
- [#8338](https://github.com/agentscope-ai/QwenPaw/pull/8338)：Telegram 通道携带 `reply_to_message` 引用上下文进入 Agent（对应 #8329），与其他通道行为对齐。

**Harness / 第三方后端**
- Issue-PR 连锁闭环：#8321（console 提供商列表硬编码）、#8323（登录 500）、#8324（USAGE 事件缺失）三连当日提出并关闭，说明 harness 体系正在快速迭代。

**仍在评审的大件 PR（33 条待合并中）**
- [#8332](https://github.com/agentscope-ai/QwenPaw/pull/8332)（XXXL）：Console UI/UX 一体化重构整合分支。
- [#8337](https://github.com/agentscope-ai/QwenPaw/pull/8337)：停止重放模型不再需要的媒体块——直接针对 48MB 请求体问题的核心修复。
- [#8336](https://github.com/agentscope-ai/QwenPaw/pull/8336)：MiniMax M3.1 Flash 预设与运行时刷新。
- [#8318](https://github.com/agentscope-ai/QwenPaw/pull/8318)：新增 `/steer` 命令，支持任务执行中途引导 Agent（#1775）。
- [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187)（XXXL）：通道插件化 + 子进程隔离，架构级改造。
- [#8266](https://github.com/agentscope-ai/QwenPaw/pull/8266)（已关闭）：QwenPaw Data 1.0.3，共享模型配置与用户级分析会话。

**评估**：今日净推进约 15 个闭环，覆盖部署、通道、console、harness 四条线；2 个 XXXL 级 PR（#8332、#8187）持续滚动更新，说明大重构进入集成收尾阶段。

---

## 4. 社区热点

1. **[#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278)（6 评论）**：钉钉通道 >3500 字符时整条静默降级为纯文本，表格/Markdown 全部失效，且未复用已有 `split_text` 分片机制。数据报表类场景受影响最大。诉求：**降级可感知 + 分片复用**。
2. **[#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)（5 评论）**：插件端主题语义 token 覆盖层——现有主题系统只服务终端用户，插件作者只有一个 `colorPrimary` 可调。诉求：**插件生态的视觉扩展点**。
3. **[#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171)（5 评论）**：LM Studio "At most 0 audio(s)" 拒绝形态未被音频降级分类器识别，会话永久卡死；这是 #7015 家族的第三种拒绝形态，已有 fix PR [#8215](https://github.com/agentscope-ai/QwenPaw/pull/8215) 与 [#7654](https://github.com/agentscope-ai/QwenPaw/pull/7654)（后者仍开放）。诉求：**分类器覆盖面系统性补齐而非逐个打补丁**。
4. **[#8288](https://github.com/agentscope-ai/QwenPaw/issues/8288)（3 评论）**：2.2.2 会话切换因阻塞式 ready-gate + 全量重渲染导致数十秒 UI 冻结（2.2.1 不受影响）——10-19 作者自我修正了根因（与流事件量/数据量无关），属于确定性产品回归。
5. **[#8335](https://github.com/agentscope-ai/QwenPaw/issues/8335)**：设计讨论帖——媒体在会话历史中导致的 48MB 请求体与会话永久卡死，是对 #8228/#8171 问题族的设计层追问，社区在要求一个系统性架构方案。

---

## 5. Bug 与稳定性（按严重程度）

| 级别 | Issue | 问题 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#8335](https://github.com/agentscope-ai/QwenPaw/issues/8335) / [#8228](https://github.com/agentscope-ai/QwenPaw/issues/8228)（已关） | 媒体 base64 持久化 → 48MB 请求体 → 会话永久卡死 | 有：[#8337](https://github.com/agentscope-ai/QwenPaw/pull/8337)、[#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034)（请求级媒体上限），均待合并 |
| 🔴 高 | [#8313](https://github.com/agentscope-ai/QwenPaw/issues/8313) | QQ 群消息静默丢失：网关发 `GROUP_MESSAGE_CREATE` 但事件规范只认 `GROUP_AT_MESSAGE_CREATE` | 暂无对应 PR |
| 🔴 高 | [#8288](https://github.com/agentscope-ai/QwenPaw/issues/8288) | 2.2.2 会话切换阻塞式冻结（回归） | 暂无 |
| 🟠 中 | [#8279](https://github.com/agentscope-ai/QwenPaw/issues/8279) | ReMe 长驻 watcher 耗尽 AnyIO 默认线程限制器，阻塞同步 HTTP 端点 | 暂无 |
| 🟠 中 | [#8315](https://github.com/agentscope-ai/QwenPaw/issues/8315) | 代理环境下飞书通道 426 Upgrade Required（缺 NO_PROXY） | 暂无 |
| 🟠 中 | [#8320](https://github.com/agentscope-ai/QwenPaw/issues/8320) | Desktop 2.2.2 make-skill 验证器因 `qwenpaw` 模块导入失败 | 暂无 |
| 🟠 中 | [#8265](https://github.com/agentscope-ai/QwenPaw/issues/8265) | 发行版补丁 Python 3.11 上 `importlib.invalidate_caches()` 抛异常中断插件热装 | 相关：[#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) 插件卸载/回滚重构 |
| 🟡 低 | [#8284](https://github.com/agentscope-ai/QwenPaw/issues/8284)、[#8333](https://github.com/agentscope-ai/QwenPaw/issues/8333)（已修 #8334）、[#8286](https://github.com/agentscope-ai/QwenPaw/issues/8286) | Console 滚动回弹、分组头重叠、滑块填充异常 | #8333 已修；其余待修 |
| 🟡 低 | [#8293](https://github.com/agentscope-ai/QwenPaw/issues/8293) | `<system-notification>` 等注入标记被当作回复文本发给通道用户 | 待修 |

**趋势判断**：媒体/会话历史膨胀是当前最高风险问题族（3 个 issue + 2 个 fix PR），建议优先合并 #8337/#8034。

---

## 6. 功能请求与路线图信号

- **[#8311](https://github.com/agentscope-ai/QwenPaw/issues/8311)**：鸿蒙原生 App 的本地插件宿主请求标准化 `window.QwenPaw` 契约 + 分发验签——与 [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) 插件主题扩展点同向，**插件生态是明确的下一阶段主题**（结合 #7565 插件热重载、#8187 通道插件化，信号强烈）。
- **[#8318](https://github.com/agentscope-ai/QwenPaw/pull/8318) `/steer` 中途引导命令**：已提 PR，很可能进入下一版本。
- **[#8336](https://github.com/agentscope-ai/QwenPaw/pull/8336) MiniMax M3.1 Flash**：providers 预设持续扩充。
- **[#7798](https://github.com/agentscope-ai/QwenPaw/pull/7798) Record & Replay**：macOS Desktop 录制回放工作流，XXXL 级新能力。
- **[#8182](https://github.com/agentscope-ai/QwenPaw/pull/8182)**：每会话审批级别服务端持久化（替代 localStorage），修复跨设备状态丢失。

---

## 7. 用户反馈摘要

- **痛点集中在“长会话 + 富媒体”场景**：微信截图密集会话膨胀至 10MB+ 甚至 48.9MB，用户被迫开新会话；这已成为高频差评来源。
- **静默失败最伤信任**：钉钉降级无信号（#8278）、QQ 群消息静默丢失（#8313）、Telegram 引用静默丢弃（#8329）、`reload_agent` 钩子静默丢失（#8281）——用户反复强调“宁可报错也不要悄悄坏掉”。
- **2.2.2 升级体验不佳**：#8288、#8313 均为 2.2.1→2.2.2 回归，且 #8288 作者指出最初归因（流事件量）是错的，社区对回归测试覆盖表达不满。
- **自托管/企业部署诉求上升**：反向代理子路径（#8177，已修）、自定义 IMAP/SMTP（#7791，已关）、代理环境（#8315）。
- **正面信号**：issue 报告质量普遍很高（附复现、根因定位甚至源码行号），harness 三连 issue 当日闭环，社区与维护者协作节奏良好。

---

## 8. 待处理积压

- **[#1453](https://github.com/agentscope-ai/QwenPaw/issues/1453)**（2026-03 开）：离线安装无法连接千问 3/3.5 但可连 DeepSeek R1——挂起 7 个月，涉及离线部署用户群。
- **[#1612](https://github.com/agentscope-ai/QwenPaw/issues/1612)**（2026-03 开）：Web UI 自定义通道数组/对象字段显示 `[object Object]`——长期未修的前端基础缺陷。
- **[#2882](https://github.com/agentscope-ai/QwenPaw/issues/2882)**（2026-04 开）：Matrix 配置粘贴自动加空格导致失败。
- **[#3361](https://github.com/agentscope-ai/QwenPaw/issues/3361)**（2026-04 开）：飞书对话中修改配置报 `Task was destroyed but it is pending`。
- **长龄 PR**：[#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565)（9 月开，XXXL 插件热重载）、[#7798](https://github.com/agentscope-ai/QwenPaw/pull/7798)、[#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034) 持续滚动但未合并——建议维护者给出明确的里程碑归属，降低社区预期不确定。

**健康度总评**：活跃度高、响应链路通畅；主要风险是 2.2.2 回归未出补丁版本，以及媒体膨胀问题族的多重 PR 需尽快收敛合并。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报

**日期：2026-10-20** | 数据来源：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

## 1. 今日速览

今日 EasyClaw（TK Copilot）发布节奏密集，24 小时内连续推出 **2 个新版本（v1.9.35、v1.9.36）**，均聚焦于 BD（商务拓展）达人管理场景的功能细化与体验优化。社区侧活跃度偏低：Issues 与 PR 均无新增或更新，呈“**开发推进活跃、社区互动静默**”的状态。整体判断：项目处于高频迭代期的稳定推进阶段，健康度良好，但社区反馈渠道有待激活。

---

## 2. 版本发布

### v1.9.36 — TK Copilot v1.9.36
🔗 [Release 链接](https://github.com/gaoyangz77/easyclaw/releases)

**新增/改进：**
- 支持**配置 BD 达人接收上限**，并可**限制认领受保护达人**，属于业务管控类功能增强，避免优质达人资源被无序认领。
- 优化 BD 负责人筛选、公共达人标签展示、人工工作台筛选布局——均为 UI/筛选效率类改进。

**破坏性变更：** 无
**迁移注意事项：** 无需特殊迁移，常规升级即可。

### v1.9.35 — TK Copilot v1.9.35
🔗 [Release 链接](https://github.com/gaoyangz77/easyclaw/releases)

**改进：**
- 刷新达人工作台、达人详情、会话和提案列表时**保留已加载的分页内容**，显著减少刷新导致的分页状态丢失，改善长列表操作体验。

**破坏性变更：** 无
**迁移注意事项：** 无。

> ⚠️ 备注：Release 安装说明中仍提示 macOS Gatekeeper 报 **"‘RivonClaw’ is damaged"** 的问题，建议关注打包签名配置是否与品牌/产品名（TK Copilot）保持一致。

---

## 3. 项目进展

- 今日**无 PR 合并/关闭记录**（0 条），但两版发布的节奏表明主干开发仍以维护者直接提交为主。
- 从功能内容看，本周进展集中在**达人资源管控（接收上限、保护机制）**与**工作台状态保持**两条主线，面向 BD 团队的实际运营痛点持续打磨，属渐进式迭代，单日推进幅度中等。

---

## 4. 社区热点

今日无活跃 Issue/PR，无讨论热点。社区互动数据为零，暂无法提炼用户集中诉求。

---

## 5. Bug 与稳定性

今日**无新增 Bug 报告**，无崩溃或回归问题，亦无待跟踪的 fix PR。

---

## 6. 功能请求与路线图信号

今日无新功能请求。从连续版本内容推断的隐性路线图信号：
- **达人资源管控体系**（接收上限 → 受保护达人认领限制）预计还会继续扩展，如配额统计、权限分级。
- **工作台状态持久化**（v1.9.35）可能延伸至更多页面。

---

## 7. 用户反馈摘要

今日 Issue 评论为零，无用户反馈可供提炼。历史 Release 说明采用中英双语，显示项目面向国际化用户群，建议关注后续反馈渠道（Discussions / Issues）的实际使用情况。

---

## 8. 待处理积压

今日数据中无长期未响应的 Issue 或 PR，积压清零。

**给维护者的提醒：**
1. 版本发布频繁但社区零互动，建议在 README/Release 中强化反馈入口引导；
2. 排查 Release 说明中遗留的 “RivonClaw” 旧品牌名与 Gatekeeper 提示，统一产品命名与签名配置。

---

*本报告基于 GitHub 公开数据自动生成，链接均指向项目仓库。*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*