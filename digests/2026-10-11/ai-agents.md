# OpenClaw 生态日报 2026-10-11

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-11 04:43 UTC

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

# OpenClaw 项目动态日报 — 2026-10-11

## 1. 今日速览

OpenClaw 今日继续保持高活跃度：24 小时内 Issues 更新 500 条（新开/活跃 366，关闭 134），PR 更新 500 条（待合并 386，已合并/关闭 114），社区参与热度在同类项目中处于第一梯队。今天发布了新版本 **v2026.10.1**，聚焦会话与内存子系统的稳定性修复。但值得警惕的是，**Windows 平台与更新器（updater）相关的 P0 级问题持续积压**，多条 release-blocker 标签的 Issue 仍无对应 fix PR。维护者 @steipete 今日提交了多个大型重构 PR（Solid 2 UI 迁移、会话 actor 架构），显示项目正处于深度架构演进期，短期合并风险与长期收益并存。

---

## 2. 版本发布

### v2026.10.1（openclaw 2026.10.1）

**Highlights：**
- **Sessions and memory：**
  - 在注册表（registry）变更时保留 usage 数据
  - 支持从远程工作区交付 worker 附件
  - 防止排队的取消操作和 transcript 别名阻塞活跃 turn
  - 保持 continuation 签名对齐
  - 迁移 embedding 缓存

**评估：** 本版本为会话/内存子系统的修复性小版本，无破坏性变更声明。但注意：从 2026.10.1 向后续 beta（如 2026.10.5-beta.1）升级的路径存在已知问题，社区已有配套 PR（见下文 #168883、#168849），升级前建议关注修复落地情况。

---

## 3. 项目进展

今日合并/关闭 114 条 PR，方向集中在以下几条主线：

**架构重构（维护者 @steipete 主导）：**
- [PR #168539](https://github.com/openclaw/openclaw/pull/168539) — 将 transcript 追加路由到 session actor（XL，涉及 gateway/memory-core/多插件），是会话写入路径的核心改造
- [PR #168592](https://github.com/openclaw/openclaw/pull/168592) — 降低 turn 完成时的数据库工作量，直接回应多个 SQLite 性能类 Issue
- [PR #168791](https://github.com/openclaw/openclaw/pull/168791)、[#168767](https://github.com/openclaw/openclaw/pull/168767)、[#168762](https://github.com/openclaw/openclaw/pull/168762)、[#168852](https://github.com/openclaw/openclaw/pull/168852) — Control UI 从 Lit 向 Solid 2 的迁移全面铺开（launcher、cloud workers、chat leaf、sidebar）
- [PR #168859](https://github.com/openclaw/openclaw/pull/168859) — 简化数据库与 worker 协调机制，移除多代“合成交错”协调代码

**关键修复：**
- [PR #168863](https://github.com/openclaw/openclaw/pull/168863)（P1）— 宿主机重启后恢复 worker 容量，防止原生 worker 永久占用
- [PR #168638](https://github.com/openclaw/openclaw/pull/168638)（P1）— 限制启动期 deletion-journal 读取，解决共享 state-read 池瞬时过载
- [PR #168849](https://github.com/openclaw/openclaw/pull/168849) / [#168883](https://github.com/openclaw/openclaw/pull/168883) — 修复从 stable 2026.10.1 出发的首次升级及 10.1 updater 清理队列问题
- [PR #168864](https://github.com/openclaw/openclaw/pull/168864) — 修复 partial-clone 缺失对象，恢复 worktree 快照能力
- [PR #168875](https://github.com/openclaw/openclaw/pull/168875) — 降低绑定 channel 的消息 schema 开销

**其他：**
- [PR #168346](https://github.com/openclaw/openclaw/pull/168346) — 准备 2026.9.33 维护版本（从 2026.9.9 + backport 审计），显示维护团队开始系统性回补 9.x 稳定线
- [PR #168832](https://github.com/openclaw/openclaw/pull/168832) — opt-in 的 Bun 运行时安装路径（macOS 系统 SQLite 兼容问题的替代方案）

**评估：** 项目在性能（SQLite 写入路径）、架构（session actor、Solid 2）、运维（更新器、Bun）三条线并行推进，节奏很快；但 XL 级重构 PR 密集且多带 🚨 merge-risk 标签，短期内合并队列压力较大。

---

## 4. 社区热点

| Issue | 评论 | 核心诉求 |
|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) SQLite WAL 增长至 1.4–2.8 GB 阻塞 Windows Gateway 启动 | **118** | Windows 单 gateway 场景 WAL 不做 checkpoint，已演变为长期悬而未决的 P0 头号痛点 |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) 大型 SQLite transcript 清理阻塞事件循环 | 21 | 会话归档在 gateway 线程做全量物化+压缩+I/O，与今日 #168592/#168801 直接相关 |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) steer 模式无法在 turn 中注入消息 | 20 | 交互式引导功能自 3 月起回归，用户期待真正的 mid-turn steering |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) 分层 bootstrap 文件加载 | 19 | token 成本优化的老牌 feature request，长期无产品决策 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) hook/tool 子进程泄漏导致僵尸进程堆积 | 18 | 长期运行稳定性 |

**分析：** 社区讨论焦点高度集中在**会话状态管理与 SQLite 存储层的可靠性/性能**，且多个高热度 Issue（#143524、#112423）与今日的 perf/refactor PR 主题吻合，说明维护者已在响应，但 #143524 至今 118 条评论仍无 fix PR，社区耐心值得注意。

---

## 5. Bug 与稳定性（按严重程度）

### P0（release-blocker / crash-loop）

| Issue | 问题 | Fix PR |
|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Windows WAL 无限增长阻塞 gateway 启动（118 评论） | ❌ 无 |
| [#167771](https://github.com/openclaw/openclaw/issues/167771) | 更新被 `update-recovery-pending` / handoff lease 永久阻塞，无修复路径 | ⚠️ 相关：#168849/#168883 部分覆盖 |
| [#167652](https://github.com/openclaw/openclaw/issues/167652) | Windows 2026.9.9 升级后 Gateway 挂起（Doctor 却报验证通过） | ❌ 无 |
| [#160521](https://github.com/openclaw/openclaw/issues/160521) | state DB read-admission seal → 未处理 rejection → Gateway 崩溃 | ❌ 无 |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 2026.9.6 回归：大插件捕获阻塞 Gateway 数分钟 | ❌ 无 |
| [#158390](https://github.com/openclaw/openclaw/issues/158390) | `plugin-captures` 临时目录永不 GC，磁盘无限增长 | ❌ 无 |
| [#164396](https://github.com/openclaw/openclaw/issues/164396) | 2026.9.8 Windows 全新安装无法连接本地 gateway | ❌ 无 |
| [#142821](https://github.com/openclaw/openclaw/issues/142821) | 默认开启的 transcript 脱敏污染重放上下文（data-loss + security） | ❌ 无 |
| [#91931](https://github.com/openclaw/openclaw/issues/91931) | 预置 SOUL.md 等导致 bootstrap 自动完成并删除用户 BOOTSTRAP.md | ❌ 无 |

### P1 精选

- [#162119](https://github.com/openclaw/openclaw/issues/162119) — Codex 模型切换后间歇性 403 owner 验证失败（auth）
- [#159094](https://github.com/openclaw/openclaw/issues/159094) — 2026.9.6 Gateway 与 worker 的 state-lifecycle lease 冲突
- [#125764](https://github.com/openclaw/openclaw/issues/125764) — Telegram 出站消息网络失败后单次即 dead-letter，静默丢失
- [#157617](https://github.com/openclaw/openclaw/issues/157617) — 会话写入队列因 agent DB 维护工作等待数分钟
- [#157630](https://github.com/openclaw/openclaw/issues/157630) — 显式 `--max-old-space-size` 静默击穿 worker resourceLimits
- [#157126](https://github.com/openclaw/openclaw/issues/157126)（已关闭）— MCP bridge 继承首次启动时的请求 scope，重启恢复后 owner 权限丢失（security）

**观察：** P0 集中在 **Windows 平台 + 更新器 + SQLite 存储**三大领域；已关闭的 #162047（Windows 升级 Doctor 39 分钟）和 #165860 说明部分升级路径问题正被逐步消化。

---

## 6. 功能请求与路线图信号

- **分层 bootstrap 加载**（[#22438](https://github.com/openclaw/openclaw/issues/22438)）：token 成本控制呼声高、存在时间长，但标签仍为 needs-product-decision，短期内无 PR 迹象。
- **重启后补收离线消息**（[#55792](https://github.com/openclaw/openclaw/issues/55792)，P1）：影响所有 channel 用户，已有 source-repro + linked PR，纳入下一版本概率较高。
- **保护配置的 owner 审批流**（[#77886](https://github.com/openclaw/openclaw/issues/77886)）：安全 + UX 双诉求，needs-security-review 中。
- **MCP env 支持 SecretRef**（[#76493](https://github.com/openclaw/openclaw/issues/76493)，👍4）：与安全最佳实践一致，实现成本低，是好的候选。
- **Memory dreaming 插件化**（[#138366](https://github.com/openclaw/openclaw/issues/138366)）：与 2026.10.1 的 memory 子系统投入方向一致，属路线图信号。
- **Tailscale 个人身份接入 iOS/Dashboard**（[PR #163765](https://github.com/openclaw/openclaw/pull/163765)）：原生身份体系（#162164 umbrella）的落地件，预示多客户端身份统一是近期主线。

---

## 7. 用户反馈摘要

**痛点：**
1. **Windows 用户挫败感明显**：升级挂起（#167652）、全新安装不可用（#164396）、WAL 膨胀（#143524）叠加，是当前流失风险最高的用户群。
2. **静默消息丢失**是反复出现的主题：Telegram dead-letter（#125764）、WhatsApp 群消息不入站（#107244）、gateway 重启丢消息（#55792）、LINE /status 无响应（#94626）。用户对“不知道消息丢了”比“消息慢”更不满。
3. **长期运行退化**：僵尸进程（#97616）、磁盘无限增长（#158390）、memory dreaming 阻塞主线程 10 分钟（#99910）——自托管/小 VPS 用户（如弃用 droplet 的 #88087）体验受损，有人因此放弃部署。
4. **大上下文场景性能差**：数千会话/GB 级 SQLite 用户（#157617、#112423）报告 gateway 事件循环阻塞数分钟。

**满意点：**
- Issue 模板纪律好（bug type、blocker 判定、复现信息齐全），社区诊断质量高，多份报告带 CPU profile / 源码级根因分析。
- 2026.10.1 对 sessions/memory 修复方向与用户痛点匹配，#162047、#157126、#120162 等问题的关闭显示闭环在发生。

---

## 8. 待处理积压（建议维护者优先关注）

| Issue/PR | 状态 | 说明 |
|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524)（P0，118 评论） | 开放，无 fix PR | 头号社区痛点，超过一个月无修复，needs-maintainer-review |
| [#160521](https://github.com/openclaw/openclaw/issues/160521)（P0） | needs-live-repro | Gateway 崩溃链条，需要维护者复现 |
| [#167771](https://github.com/openclaw/openclaw/issues/167771)（P0） | 10-09 新开 | 更新器死锁无逃生路径，建议与 #168849/#168883 一并评估覆盖面 |
| [#158390](https://github.com/openclaw/openclaw/issues/158390)（P0） | 无 fix PR | 磁盘填充类问题，修复成本低、用户收益高 |
| [#48003](https://github.com/openclaw/openclaw/issues/48003)（P1） | linked PR open 自 3 月 | steer 模式回归 7 个月未解决 |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | needs-product-decision 8 个月 | 需要明确产品表态 |
| [PR #156501](https://github.com/openclaw/openclaw/pull/156501) | needs proof，双 🚨 merge-risk | Codex 冷启动模型可用性，关联 #162119/#158922 一簇 auth 问题 |
| 多条 `stale` P1/P2（#88087、#48709、#107244、#55792） | stale | 消息可靠性类问题不应因 stale 沉底 |

**健康度总评：** 活跃度极高、修复节奏快、架构投资明确；主要风险在于 P0 积压（尤其 Windows + 更新器 + SQLite 三条线）与 XL 重构并发带来的合并风险。建议优先清理 9.x 维护线（2026.9.33 准备中）以缓解稳定版用户压力。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告
**数据日期：2026-10-11**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入**高频迭代与分化并存**的阶段：头部项目（OpenClaw、Hermes Agent、Zeroclaw）单日 Issue/PR 更新量均达 50 条级别，显示赛道竞争白热化。技术上，各项目不约而同地走向**多渠道接入（Telegram/Discord/WhatsApp/飞书）+ 持久化记忆 + 网关/会话架构重构**的收敛路线，但各自的工程质量瓶颈也高度相似地暴露在**会话状态管理、长会话资源治理、静默消息丢失**三个领域。中小型项目则呈现两种命运：要么凭借快速修复闭环建立差异化口碑（LobsterAI、NullClaw、CoPaw），要么陷入维护响应瓶颈导致社区贡献流失（PicoClaw、IronClaw）。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 活跃度 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（新开/活跃 366，关闭 134） | 500（待合并 386，合并 114） | ✅ v2026.10.1 | 极高 | ⚠️ 活跃度第一但 P0 积压严重（9 条无 fix PR），Windows/更新器/SQLite 三线风险 |
| **Hermes Agent** | 50（43 活跃 / 7 关闭） | 50（42 待合并 / 8 合并） | ❌（发布流程被阻塞） | 高 | ⚠️ 响应快但 compression/session-state bug 密集，发布流水线崩溃 |
| **Zeroclaw** | 19（17 活跃 / 2 关闭） | 50（43 待合并 / 7 合并） | ❌ | 高 | 良好但欠佳：当日 issue→fix 闭环优秀，S0 安全项与 XL PR 堆积是隐患 |
| **CoPaw** | 15（9 活跃 / 6 关闭） | 13（7 待合并 / 6 合并） | ❌ | 中高 | 良好：#8154 一次修复 4 个长期 Issue，但 #8153 RCE 判定透明度存疑 |
| **NanoBot** | 2 | 61（29 待合并 / 32 合并） | ❌ | 中高 | 良好：积压清理明显、发布流程文档化预示稳定版临近 |
| **LobsterAI** | 1 | 18（17 合并） | ❌（test channel 迭代中） | 中 | 优秀：单日 17 项合并，当日修复率 100% |
| **Moltis** | 2 | 1 | ❌ | 低 | 平稳：bug 修复迭代期，问题定位质量高 |
| **NanoClaw** | 0 | 6（5 待合并 / 1 关闭） | ❌ | 低 | 平稳但需警惕：零新 Issue 流入，4 个 PR 积压约 2 个月 |
| **NullClaw** | 2 | 1 | ❌ | 低 | 良好：报告→PR→增强提案链条完整，交付略滞后 |
| **IronClaw** | 2 | 0 | ❌ | 低 | ⚠️ 社区响应薄弱（#1047 七个月零回应后关闭） |
| **PicoClaw** | 1 | 2（均关闭） | ❌ | 极低 | ⚠️ 核心体验 bug 搁置 3 个月 + 社区贡献流失 |
| TinyClaw / ZeptoClaw / EasyClaw | 0 | 0 | ❌ | 无活动 | — |

---

## 3. OpenClaw 在生态中的定位

**规模绝对领先**：OpenClaw 单日 500 条 Issue + 500 条 PR 更新，是第二梯队（Hermes/Zeroclaw，约 50 条级）的 **10 倍**，社区参与热度处于生态第一梯队且断层式领先。

**核心优势：**
- **唯一保持正式版本节奏**的项目（v2026.10.1 当日发布），并系统性回补 9.x 维护线（2026.9.33 准备中）
- **架构投资最深**：session actor、Solid 2 UI 迁移、Bun 运行时备选，多线并行
- **社区诊断质量高**：Issue 报告常带 CPU profile 与源码级根因分析

**技术路线差异**：OpenClaw 走“gateway + 会话/内存子系统”的重架构路线，与 Zeroclaw 的 v0.9.0 网关 RPC 分离、Hermes 的 #106742 统一 Gateway 会话架构殊途同归——但 OpenClaw 已跑在更后面（XL 重构已进入合并期），其余项目仍在收尾对齐阶段。

**主要风险**：规模优势被 P0 积压侵蚀——9 条 P0 无 fix PR，头号痛点 #143524（Windows WAL 膨胀，118 条评论）超一个月无修复。对比之下，LobsterAI/Zeroclaw 的小体量反而实现了“当日报告当日修复”。**OpenClaw 是生态中“规模最大但单位问题响应最慢”的项目。**

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **长会话/上下文资源治理** | OpenClaw、NullClaw、Hermes、CoPaw | 历史无界加载（NullClaw #1053）、WAL/transcript 膨胀（OpenClaw #143524、#112423）、压缩过早触发/污染文件（Hermes #136350/#136349）——**全生态最普遍的工程质量缺口** |
| **静默消息丢失治理** | OpenClaw、Hermes、Zeroclaw、NanoClaw | Telegram 429 限流丢消息（Zeroclaw #11615）、网络抖动静默丢弃（Hermes #136412、OpenClaw #125764）、gateway 重启丢消息（OpenClaw #55792）。用户共识：**“不知道丢了”比“慢”更不可接受** |
| **网关/会话架构统一** | OpenClaw、Hermes、Zeroclaw、LobsterAI | 统一 Gateway 持有会话（Hermes #106742）、RPC 分离收尾（Zeroclaw #11176-11186）、session actor（OpenClaw #168539）——架构收敛的标志性信号 |
| **多渠道扩展** | NanoBot、Zeroclaw、NanoClaw、CoPaw、Moltis | WhatsApp 官方 Agent Platform（NanoBot #6152）、飞书（NanoBot #5930、CoPaw #8150）、Google Chat/Telegram 广播（NanoClaw）、Discord DM 信任模型（Moltis #1300） |
| **安全边界与权限隔离** | Zeroclaw、Hermes、NanoBot、CoPaw、LobsterAI | 跨 Agent 越权（Zeroclaw S0 #9646/#9647）、沙箱无内存上限（Hermes #136403）、tool_call 标记注入（NanoBot #6147）、MCP 命令注入（LobsterAI #2590）、RCE 争议（CoPaw #8153） |
| **更新器/升级可靠性** | OpenClaw、Hermes、NanoBot、LobsterAI | 更新死锁（OpenClaw #167771）、升级后 gateway 挂起（OpenClaw #167652、LobsterAI #2831）、发布流程崩溃（Hermes #136434）、自更新流程（NanoBot #5817） |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Zeroclaw | Hermes Agent | NanoBot / CoPaw | LobsterAI | 小型项目（NullClaw/Moltis 等） |
|---|---|---|---|---|---|---|
| **功能侧重** | 全栈个人助手（会话/内存/多渠道/云 worker） | 多 Agent 安全隔离 + 网关拆分 | 插件目录生态 + 桌面端 | Provider/WebUI 体验 + 多渠道 | Office/Artifacts 深度编辑体验 | 单点深耕（Zig 会话、Discord 信任模型） |
| **目标用户** | 重度自托管用户（含 Windows） | 多 Agent 生产部署 | 插件生态用户/桌面用户 | 一站式接入用户 | 内容创作/办公场景 | 极客/特定场景 |
| **技术架构** | TS/Node，gateway+SQLite，重构中 | Rust，强 ADR 治理，v0.9.0 RPC 分离 | Python 生态，统一 Gateway 推进中 | Python/TS，WebUI 优先 | 前端重投入（OpenClaw 引擎适配） | Zig（NullClaw）、Go（PicoClaw）等异构 |

**关键差异点**：OpenClaw 与 Zeroclaw 都在动网关架构，但 OpenClaw 由性能痛点（SQLite）驱动、Zeroclaw 由安全边界（per-agent 所有权）驱动；LobsterAI 是唯一以“Agent 编辑文件 → 用户实时预览”为核心体验卖点的项目，与办公场景深度绑定。

---

## 6. 社区热度与成熟度分层

- **快速迭代期**：OpenClaw（重构+发版并行）、Hermes（插件目录扩张）、LobsterAI（单日 17 合并）、CoPaw（Console 加固 + 鸿蒙客户端）
- **架构演进/质量巩固期**：Zeroclaw（v0.9.0 对齐收尾）、NanoBot（发布契约建立，稳定版临近）
- **稳态维护期**：NanoClaw、NullClaw、Moltis
- **停滞预警**：PicoClaw（贡献流失）、IronClaw（响应薄弱）、TinyClaw/ZeptoClaw/EasyClaw（零活动）

**成熟度悖论**：活跃度最高的 OpenClaw 与 Hermes 恰恰是 P0/P1 积压最重的两个项目；而 LobsterAI（17 合并/日）与 Zeroclaw（当日 issue→fix）展示了“中等规模 + 高修复周转”的健康模型。

---

## 7. 值得关注的趋势信号

1. **“会话状态管理”是全生态的阿喀琉斯之踵**：内存不落盘（NullClaw）、压缩污染（Hermes）、WAL 膨胀（OpenClaw）本质是同一类问题——**长生命周期会话的资源上限与压缩写回一致性**。对开发者的启示：在架构设计早期就应把“持久化 transcript 的有界治理”作为一等公民（NullClaw #1055 的 sequence-guard 方案值得借鉴）。

2. **静默失败正在取代崩溃成为头号信任杀手**：CoPaw 的“静默空完成/吞异常”系列、Hermes 的压缩标记泄漏进文件、多项目的静默丢消息——**可观测性与显式失败上报**是比修 individual bug 更高杠杆的投入方向。

3. **安全重心从“防外部”转向“防 Agent 间”**：Zeroclaw 的 S0 跨 Agent 越权、Hermes 的插件审批参数绑定、Moltis 的渠道信任模型，标志多 Agent 部署场景下 **per-agent 所有权隔离 + 操作员信任分级**将成为标配需求。外部安全团队（DefuzeX）已开始主动审计，负责任披露生态正在形成。

4. **Provider/渠道接入的商业化引力**：NanoBot 出现带 50/50 分成提议的厂商接入请求，Cheaper Inference 同时向 NanoBot 和 PicoClaw 投稿——**开源智能体项目的分发渠道价值已被 inference 网关厂商认可**，维护者需尽早建立官方审核标准（NanoBot 已现积压）。

5. **Windows 与非英文环境是被低估的市场**：OpenClaw（WAL/升级）、Hermes（中文用户名编码）、LobsterAI（文件锁 EPERM）均在 Windows 上暴露集中痛点——跨平台质量投入的 ROI 正在被用户流失数据验证。

6. **发布节奏制度化成为分水岭**：OpenClaw 的维护线回补、NanoBot 的发布契约 PR、Hermes 因流水线崩溃被阻塞发版——**发布工程本身已是竞争力**，小团队应优先建立 CI/发布自动化。

**一句话结论**：生态整体在向“多渠道 + 持久记忆 + 多 Agent 隔离”收敛，胜负手不在功能数量，而在**长会话工程可靠性、静默失败治理与安全响应透明度**——这三点恰是当前头部项目最薄弱、也给新进入者留下差异化空间的地方。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-10-11

## 1. 今日速览

NanoBot 今日整体活跃度**中高**：过去 24 小时 PR 更新达 61 条（待合并 29，已合并/关闭 32），Issues 更新 2 条，无新版本发布。核心维护者 @chengyongru 与 @Re-bin 持续高产，围绕 WebUI 体验、provider 兼容性和发布流程形成了一波集中提交。多个长周期 PR（如 #4919、#4819）今日被关闭，积压清理明显。项目处于功能迭代与稳定性打磨并行阶段，健康度良好。

## 2. 版本发布

今日无新版本发布。相关信号见第 6 节：稳定/预览发布流程正在文档化（#6146、#5817），下个稳定版可能临近。

## 3. 项目进展

今日合并/关闭 32 条 PR，主要进展：

- **[PR #4919](https://github.com/HKUDS/nanobot/pull/4919)**（已关闭）：Telegram 渠道支持自定义 Bot API base URL 与额外 headers（实现 #4702），历时近 3 个月的社区贡献，为自托管/企业网关场景铺路。
- **[PR #4819](https://github.com/HKUDS/nanobot/pull/4819)**（已关闭）：memory consolidation 锁从 `WeakValueDictionary` 改为普通 dict，修复 GC 周期导致锁身份不稳定的问题——稳定性修复落地。
- **[PR #6145](https://github.com/HKUDS/nanobot/pull/6145)**（已关闭）：模型与 provider 设置 UX 改进（可搜索模型字段、加载反馈、重试），是 #6148 的前置依赖。
- **PR #6091（Cua Driver 计算机使用）** 状态更新为 parked：维护者要求暂停，保留 draft 不合并。

整体看，今日在渠道扩展、WebUI 设置链路、内存稳定性三线均有实质推进。

## 4. 社区热点

- **[Issue #6123](https://github.com/HKUDS/nanobot/issues/6123)**（2 条评论）：Telegram 远程媒体 URL 因 query string 被误判为 document，导致连续远程图片无法正常发送。已在当日由 [PR #6149](https://github.com/HKUDS/nanobot/pull/6149) 提交修复（改用 path extension 判定），响应速度很快。
- **[PR #6152](https://github.com/HKUDS/nanobot/pull/6152)**：新增 WhatsApp 官方 Agent Platform 渠道（`whatsapp_agent`），是今日最受关注的新渠道贡献，反映用户对官方 WhatsApp API 接入的强需求。
- **[PR #5666](https://github.com/HKUDS/nanobot/pull/5666)**（aimlapi.com）与 **[PR #5915](https://github.com/HKUDS/nanobot/pull/5915)**（Cheaper Inference）：第三方网关厂商持续申请内置 provider，且带商业合作提议（50/50 分成），显示 NanoBot 分发渠道的商业价值被认可，但也带来维护者审核负担。

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 |
|---|---|---|
| **P1** | [PR #6147](https://github.com/HKUDS/nanobot/pull/6147)：assistant 文本中的 `<tool_call>` 标记可能被当作可执行工具调用（含引用示例），属安全回归；同时收紧 Responses/compaction 错误的兼容回退 | 已有 fix PR（含 regression、security 标签），待合并 |
| **P2** | [Issue #6123](https://github.com/HKUDS/nanobot/issues/6123)：Telegram 带 query string 的媒体 URL 误分类 | 已有 [fix PR #6149](https://github.com/HKUDS/nanobot/pull/6149) |
| 已修复 | [Issue #6122](https://github.com/HKUDS/nanobot/issues/6122)（已关闭）：DeepSeek provider 同时发送 `reasoning_effort="minimal"` 与 `thinking.type="disabled"` 矛盾指令 | 已关闭 |
| 已修复 | [PR #4819](https://github.com/HKUDS/nanobot/pull/4819)：consolidation 锁 GC 不稳定 | 已关闭 |
| 一般 | [PR #6143](https://github.com/HKUDS/nanobot/pull/6143)：`edit_file` 在 `old_text` 过度缩进时破坏文件缩进（AI batch PR） | fix PR 待合并 |

## 6. 功能请求与路线图信号

- **发布流程**：[PR #6146](https://github.com/HKUDS/nanobot/pull/6146) 定义稳定/预览发布契约（月度稳定 + 每日预览候选），与 [PR #5817](https://github.com/HKUDS/nanobot/pull/5817)（`nanobot update` 自更新流程）配套，预示即将建立正式的版本发布节奏。
- **WebUI 本地体验**：[PR #6150](https://github.com/HKUDS/nanobot/pull/6150)（WSL 下打印完整认证登录链接）与 [PR #6148](https://github.com/HKUDS/nanobot/pull/6148)（可删除的 provider 连接）延续 #6145 的设置链路重构，方向明确，大概率进入下个版本。
- **新渠道**：WhatsApp Agent Platform（#6152）、飞书 bot-to-bot 群消息（[PR #5930](https://github.com/HKUDS/nanobot/pull/5930)）待评审。
- **MCP 生态**：FXMacroData（#6068）、Keenable（#6014）两个 MCP preset 待合并，显示 Apps 侧生态在快速扩张。

## 7. 用户反馈摘要

- **WSL/headless 用户痛点**：自动打开浏览器失败后，用户面对无密码提示的登录页无从下手（#6150 背景诉求）；headless 服务器用户不清楚 bootstrap secret 位置（#5727）。
- **Telegram 用户**：远程图片因 URL query string 被降级为 document 发送，实际影响卡片类图片场景（#6123）。
- **DeepSeek 用户**：高级 reasoning 配置产生矛盾参数，说明 provider 适配层需要更严格的参数互斥校验（#6122）。
- **社区/厂商情绪积极**：多个第三方（aimlapi、Cheaper Inference、Keenable）主动完成全部技术工作申请接入，侧面反映用户对“一站式 provider 列表”价值的认可。

## 8. 待处理积压

- **[PR #6091](https://github.com/HKUDS/nanobot/pull/6091)**（10-07 开启）：Cua Driver 计算机使用功能已被维护者 park，需明确恢复时间表。
- **[PR #5776](https://github.com/HKUDS/nanobot/pull/5776)**（09-15）：ProviderPicker 搜索功能开启近一个月仍 open 且标记 conflict，建议优先 rebase。
- **[PR #5666](https://github.com/HKUDS/nanobot/pull/5666)**、**[PR #5915](https://github.com/HKUDS/nanobot/pull/5915)**：商业性 provider 接入请求长期 open，建议建立官方审核标准避免积压。
- **[PR #5930](https://github.com/HKUDS/nanobot/pull/5930)**（09-26）：飞书群 bot 消息功能标记 conflict，需 rebase 推进。
- 29 条待合并 PR 中多条带 `conflict` 标签，建议维护者安排一次集中 rebase/评审日。

---
*数据来源：GitHub API（过去 24 小时），生成时间 2026-10-11。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-10-11

## 1. 今日速览

Zeroclaw 今日保持高活跃度：24 小时内 Issues 更新 19 条（新开/活跃 17，关闭 2），PR 更新 50 条（待合并 43，合并/关闭 7），但无新版本发布。工作重心明显集中在两条主线上：**v0.9.0 网关分离/RPC 对齐**的系列大型 PR 持续推进，以及**安全类修复**（沙箱参数未生效、跨 Agent 权限越界、cron 输出泄漏）的密集提交。今日新增 Issue 中出现了内存子系统（consolidation 误隐藏无关记忆）和多渠道（Telegram 429、Web 配对输入框）的新问题，社区外部贡献者（DefuzeX、GaijinSystems 等）参与度显著上升，项目生态健康度良好。

## 2. 版本发布

今日无新版本发布。v0.8.6 与 v0.9.0 仍在推进中，可关注 [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) tracker 的进展。

## 3. 项目进展

今日 PR 合并/关闭 7 条，可见的关闭项包括：

- [#11652](https://github.com/zeroclaw-labs/zeroclaw/pull/11652)（docs, XS）：为有界委托的 ceiling carriage 在 ADR-016 持有 crate 例外表中补记一行，配合 XL 级主 PR [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) 的评审推进。该主 PR 旨在保持有界 delegate 的 workspace、工具上限与命令策略在 turn 之外持续生效，是委托安全边界的关键补强。

主线进展信号（仍开放但活跃更新）：

- **RPC/gateway 分离（v0.9.0 核心）**：JordanTheJet 的 RPC 系列 PR 集体更新——[#11176](https://github.com/zeroclaw-labs/zeroclaw/pull/11176)（cron/memory/skills/personality RPC 对齐）、[#11182](https://github.com/zeroclaw-labs/zeroclaw/pull/11182)（workspace/catalog/canvas/pairing 核心对齐）、[#11185](https://github.com/zeroclaw-labs/zeroclaw/pull/11185)（session 持有 turn、viewer 挂接）、[#11186](https://github.com/zeroclaw-labs/zeroclaw/pull/11186)（rpc-client 与进程内网关传输）。这些堆叠 PR 显示网关拆分已进入收尾对齐阶段。
- **会话所有权原子化**：[#10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412) 将 session 所有权 claim 提取为共享 SessionBackend 契约，直接回应 S0 级越权问题 [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646)，标记 breaking-change、p1，是安全架构的重要一步。

整体看，项目本周推进以“安全边界收口 + 架构拆分落地”为主，节奏稳健但大量 XL 级 PR 处于 needs-author-action 状态，合并吞吐受评审资源制约。

## 4. 社区热点

**评论最活跃：**

- [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)（10 评论）持久化内存对齐 Tracker：多 PR 协调的 epic，今日与 #10755、#11655 等内存问题联动更新，反映社区对“记忆子系统达到成熟 Agent 运行时对等水平”的强烈期待。
- [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)（6 评论）v0.8.6/v0.9.0 交付 Tracker：作为 RFC #5574 的唯一事实来源，持续吸引关注。
- [#11594](https://github.com/zeroclaw-labs/zeroclaw/issues/11594)（4 评论）firejail_args 未生效：S2 安全配置缺陷，当日即有对应 fix PR [#11656](https://github.com/zeroclaw-labs/zeroclaw/pull/11656) 提交，社区响应速度快。
- [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) / [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647)（各 4 评论）两个 S0 级跨 Agent 越权问题：多 Agent 用户对会话/知识图谱缺少所有权隔离的诉求集中且持续。
- [#11612](https://github.com/zeroclaw-labs/zeroclaw/issues/11612)（已关闭）：外部安全团队 DefuzeX 用其 KUMA SDK 发现的 ACP 会话中止问题，属第三方行为安全测试介入的典型案例，已闭环。

**背后诉求**：社区核心关切是“多 Agent 场景下的隔离与安全”以及“记忆子系统的可靠性与可解释性”。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 状态 | Fix PR |
|---|---|---|---|
| **S0 安全** | [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) 会话/频道工具无 per-agent 所有权校验 | OPEN | 相关：[#10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412) |
| **S0 安全** | [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) 知识图谱全局共享，任意 Agent 可读写他人知识 | OPEN | 尚无直接 fix |
| **S1 数据丢失** | [#11579](https://github.com/zeroclaw-labs/zeroclaw/issues/11579) save_dirty 给未迁移的 V1/V2 配置盖 schema_version=3，导致下次加载跳过迁移、Agent 消失（accepted, v0.9.0） | OPEN | 进行中 |
| **S1 工作流阻断** | [#11615](https://github.com/zeroclaw-labs/zeroclaw/issues/11615) Telegram 忽略 429 retry_after 立即重试，消息可能丢失 | OPEN | ✅ 两个竞态 fix：[#11651](https://github.com/zeroclaw-labs/zeroclaw/pull/11651)、[#11650](https://github.com/zeroclaw-labs/zeroclaw/pull/11650) |
| **S1 工作流阻断** | [#11648](https://github.com/zeroclaw-labs/zeroclaw/issues/11648) Web 配对输入框仍限 6 位数字，与 32 位字母数字默认策略不匹配 | OPEN | 待提交 |
| **S2 安全** | [#11594](https://github.com/zeroclaw-labs/zeroclaw/issues/11594) firejail_args 有 schema 有文档但从未传入调用 | OPEN | ✅ [#11656](https://github.com/zeroclaw-labs/zeroclaw/pull/11656) |
| **S2 内存** | [#11655](https://github.com/zeroclaw-labs/zeroclaw/issues/11655)（今日新报）默认无向量评分时，Core 冲突 supersede 会误隐藏无关记忆 | OPEN | 无 |
| **S2** | [#9506](https://github.com/zeroclaw-labs/zeroclaw/issues/9506) Email 渠道无法保留 CC/真正“全部回复” | OPEN | 无 |
| **S3** | [#11658](https://github.com/zeroclaw-labs/zeroclaw/issues/11658)（今日新报）Web 聊天回复结束后输入框不回焦 | OPEN | 无 |
| **S3** | [#11654](https://github.com/zeroclaw-labs/zeroclaw/issues/11654)（今日新报）JPEG admission 在内存上限检查前先复制并解析头 | OPEN | 相关：[#11637](https://github.com/zeroclaw-labs/zeroclaw/pull/11637) |

已修复闭环：[#11586](https://github.com/zeroclaw-labs/zeroclaw/issues/11586)（ZeroCode 侧栏 daemon 重启后失败会话变绿）、[#11612](https://github.com/zeroclaw-labs/zeroclaw/issues/11612)（ACP 会话中止）。

另有 PR 侧安全修复：[#11061](https://github.com/zeroclaw-labs/zeroclaw/pull/11061)（allowlist 中的高危命令仍可执行 `rm -rf` 类操作）、[#11644](https://github.com/zeroclaw-labs/zeroclaw/pull/11644)（cron shell 诊断信息泄漏到频道），均待合并。

## 6. 功能请求与路线图信号

- **[#11657](https://github.com/zeroclaw-labs/zeroclaw/issues/11657)**（今日新报）：可配置 turn consolidation 写入类别（`consolidation_category`），与内存 epic #8891 方向一致，有望被纳入内存路线图。
- **[#8409](https://github.com/zeroclaw-labs/zeroclaw/issues/8409)：cron shell 任务支持 raw stdout 输出**——已 accepted，配合 cron crate 抽取重构 [#10546](https://github.com/zeroclaw-labs/zeroclaw/issues/10546)，大概率随 v0.9.0 落地。
- **[#10325](https://github.com/zeroclaw-labs/zeroclaw/pull/10325)：pre-turn tool-elicitation hints**（默认关闭）已进入收尾，是 #7431 设计的最后一片。
- **[#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809)：单 provider profile 承载多模型**——用户呼声强烈的大功能，虽被标记 stale-candidate 但持续更新，需关注评审优先级。
- **[#11068](https://github.com/zeroclaw-labs/zeroclaw/pull/11068)：按发送者角色收窄频道 turn**（peer_groups 加 risk_profile），是 v0.9.0 多租户安全设计的一部分。
- **[#11580](https://github.com/zeroclaw-labs/zeroclaw/issues/11580)**：x86_64 Linux 二进制距 64 MiB 上限仅 0.7 MB，需决策容量政策——这是 v0.8.6 发布前的 release-gate 阻塞项。

## 7. 用户反馈摘要

- **多 Agent 用户**最痛的是隔离缺失：任一 Agent 可读/改其他 Agent 的会话历史与知识图谱（#9646/#9647），生产环境部署的直接障碍。
- **Telegram 用户**反映限流时消息彻底丢失（#11615），当日两个竞态 fix PR 也说明这是高频痛点。
- **升级用户**遭遇配置迁移陷阱（#11579）：“升级后 agent 消失”这类问题对信任伤害最大。
- **个性化记忆用户**希望 consolidation 更可控：写入类别可配（#11657）、偏好溯源保留（#10755）、无 embedding 时误隐藏记忆（#11655）——反映默认配置下记忆质量不稳定。
- **Web 端体验**有粗糙感：配对输入框不匹配（#11648）、输入焦点丢失（#11658），属小但高频的摩擦点。
- 正面信号：外部安全团队（DefuzeX）主动测试并负责任披露，说明项目已进入受关注的安全审计视野。

## 8. 待处理积压

需维护者关注：

- **[#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809)**：多模型 profile，8 月初提交、标记 stale-candidate，用户需求强，评审长期未决。
- **[#10599](https://github.com/zeroclaw-labs/zeroclaw/pull/10599)**：cron 静默失败可见性，status:blocked + do-not-merge，需解除阻塞路径。
- **[#10007](https://github.com/zeroclaw-labs/zeroclaw/pull/10007)**：preference 溯源修复，blocked/do-not-merge，且与 #10755、#11655 形成内存问题簇，建议统一规划。
- **[#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647)**：S0 级知识图谱越权，8 月报告至今无直接 fix PR。
- **[#11580](https://github.com/zeroclaw-labs/zeroclaw/issues/11580)**：发布体积 gate 决策，needs-maintainer-review，是 v0.8.6 发布的硬阻塞。
- **[#8409](https://github.com/zeroclaw-labs/zeroclaw/issues/8409) / [#9506](https://github.com/zeroclaw-labs/zeroclaw/issues/9506)**：均为 6-7 月 accepted/open 但无对应 PR 的功能项。

**健康度小结**： Issue→fix 响应链路（#11594 当日报告当日有 PR）表现优秀；主要风险在于大量 XL 级 PR 堆叠待评审、S0 安全项修复节奏偏慢、以及 v0.8.6 发布 gate 未决。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-10-11

## 1. 今日速览

Hermes Agent 今日活跃度**高位运行**：过去 24 小时 Issues 更新 50 条（新开/活跃 43、关闭 7），PR 更新 50 条（待合并 42、合并/关闭 8），无新版本发布。社区贡献呈现两个明显方向：一是维护者 @teknium1 集中提交了一批 [ci-reviewed] 修复与 Plugin Catalog 扩充 PR；二是用户侧报告了大量 **session 状态 / compression / Desktop 会话管理** 相关的回归问题（多个 issue 被 sweeper 打上 `risk-session-state` 标签）。Windows 平台兼容性问题（中文用户名、Python 3.14 计划任务）持续发酵。整体看，项目迭代速度极快，但核心会话状态管理模块的 bug 密度值得维护者警惕。

## 2. 版本发布

今日无新版本发布。注意：据 [PR #136434](https://github.com/NousResearch/hermes-agent/pull/136434)，自 v0.21.6 起**所有 Stable Release Publication 发布流程均在 sequencer 阶段崩溃**（`ValueError: v0.21.6 points at a different commit than rc.1-v0.21.6`），后续版本发布被阻塞——该修复 PR 今日已开出，建议优先合并。

## 3. 项目进展

今日合并/关闭 8 个 PR（数据未逐一列出合并明细），活跃待合并 PR 推进情况如下：

- **[PR #106742](https://github.com/NousResearch/hermes-agent/pull/106742)** — 超大型架构 PR：「单一 Gateway 拥有所有本地会话」，CLI/TUI/Desktop/ACP/API/bots/cron 全部接入同一活跃会话。标签覆盖几乎所有组件，持续推进中，是当前最具影响力的架构变更。
- **[PR #136447](https://github.com/NousResearch/hermes-agent/pull/136447) / [#136442](https://github.com/NousResearch/hermes-agent/pull/136442)** — @teknium1 集中修复 browser_exec：云端浏览器故障时回退本地 Chromium；localhost/LAN 页面经本地 sidecar 打开，避免私有 URL 泄露到云端。
- **[PR #136448](https://github.com/NousResearch/hermes-agent/pull/136448)** — 图像数量超限时不再锁死会话，自动学习路由图像上限并裁剪最旧图像（salvage #104914）。
- **Plugin Catalog 生态扩张**：[#136444](https://github.com/NousResearch/hermes-agent/pull/136444)（6 个官方插件迁入 hermes-official-plugins）、[#136440](https://github.com/NousResearch/hermes-agent/pull/136440)（Ace Data Cloud Media 17 个工具集）、[#136445](https://github.com/NousResearch/hermes-agent/pull/136445)（telegram-stickers）、[#135747](https://github.com/NousResearch/hermes-agent/pull/135747)（hermes-guide 诊断插件）。
- **修复类**：[#136427](https://github.com/NousResearch/hermes-agent/pull/136427) Telegram 静默丢消息修复（对应该日新开的 Issue #136412，响应速度很快）；[#136431](https://github.com/NousResearch/hermes-agent/pull/136431) profile 重命名后路径重定位；[#136434](https://github.com/NousResearch/hermes-agent/pull/136434) 发布流水线修复；[#135057](https://github.com/NousResearch/hermes-agent/pull/135057) Bedrock tool result ID 配对修复。

## 4. 社区热点

- **[Issue #131859](https://github.com/NousResearch/hermes-agent/issues/131859)**（25 评论）— 用户 @kuehnberger 报告从 fork 向主仓开 PR 遭遇 `CreatePullRequest` 权限错误（fork PR 和 issue 创建正常），标记 `blocked`。这实际是**仓库权限/流程问题而非代码问题**，25 条讨论说明影响面不小，值得维护者公开澄清。
- **[Issue #124583](https://github.com/NousResearch/hermes-agent/issues/124583)**（17 评论）— terminal 工具的后台提示引用了不存在的工具名 `process`（实际为 `process_manage`），暴露了文档提示与工具命名漂移的普遍问题。
- **[Issue #103410](https://github.com/NousResearch/hermes-agent/issues/103410)**（14 评论）— 外部上下文引擎（LCMEngine）配置热重载崩溃，反映插件化 context engine 的兼容性缺口。
- **[Issue #56004](https://github.com/NousResearch/hermes-agent/issues/56004)**（14 评论，7 👍，**今日关闭**）— Qwen 等思考模型在 OpenAI 兼容端点上丢失跨轮推理内容。该 7 月老 issue 终于关闭，可能是相关修复已落地，与今日 [#134943](https://github.com/NousResearch/hermes-agent/pull/134943)（reasoning 计费策略）方向一致。
- **[Issue #129993](https://github.com/NousResearch/hermes-agent/issues/129993)**（12 评论）— Desktop 回复气泡重复渲染，属高频用户可感知的 UI 问题。

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue | 摘要 | Fix PR |
|---|---|---|---|
| P1 | [#133856](https://github.com/NousResearch/hermes-agent/issues/133856) | `sk-ant-usr-` 前缀的 Anthropic API key 被误判为 OAuth token，影响计费/身份（5 👍） | 未见 |
| P2 | [#136403](https://github.com/NousResearch/hermes-agent/issues/136403) | `execute_code` 沙箱**无内存上限**，失控单元格吃掉 180GB 内存杀死后端与渲染进程，静默中断无人值守运行（安全边界风险） | 未见 |
| P2 | [#136412](https://github.com/NousResearch/hermes-agent/issues/136412) | Telegram gateway 网络抖动时**静默丢消息**（connect budget ≥ 整体 deadline） | ✅ [#136427](https://github.com/NousResearch/hermes-agent/pull/136427) 当日开出 |
| P2 | [#136350](https://github.com/NousResearch/hermes-agent/issues/136350) | 压缩阈值解析为 256000 而文档称默认 `null`，长会话 77 分钟被压缩 7-8 次，反复丢失上下文 | 未见 |
| P2 | [#136349](https://github.com/NousResearch/hermes-agent/issues/136349) | 压缩截断标记 `⟪HERMES-CONTEXT-COMPRESSION...⟫` **泄漏进 agent 写出的文件，构成数据损坏** | 未见 |
| P2 | [#131093](https://github.com/NousResearch/hermes-agent/issues/131093) | Windows 中文用户名下 `.cmd` 启动器 UTF-8/936 编码冲突导致命令不可用 | PR #122594、#126325 开放中未合并 |
| P2 | [#136390](https://github.com/NousResearch/hermes-agent/issues/136390) | Python 3.14 运行时下 Windows 计划任务登录自启**静默失败**（任务报成功） | 未见 |
| P2 | [#135065](https://github.com/NousResearch/hermes-agent/issues/135065) | Desktop 每次新建聊天报 "Session not found" 404（lazy-draft 竞态） | 未见 |
| P2 | [#108967](https://github.com/NousResearch/hermes-agent/issues/108967) | `GET /v1/skills` 恒返回 500（残留参数） | 未见 |
| P3 | [#94928](https://github.com/NousResearch/hermes-agent/issues/94928) | Desktop 运行一段时间后 terminal/read_file 持续返回空输出（FD_SETSIZE） | 未见 |

**信号**：压缩（compression）相关 bug 三连发（#136350、#136349、#103410），且多带 `risk-session-state` 标签——上下文压缩子系统疑似是当前最大的稳定性风险点。

## 6. 功能请求与路线图信号

- **[#79198](https://github.com/NousResearch/hermes-agent/issues/791198)** — 跨平台会话组（Discord↔Telegram 共享记忆），与进行中的 [PR #106742](https://github.com/NousResearch/hermes-agent/pull/106742)（统一 gateway 会话）高度互补，**很可能被纳入**统一会话架构落地后的下一阶段。
- **[#135039](https://github.com/NousResearch/hermes-agent/issues/135039)** — `MEMORY.md`/`USER.md` 写入时预算控制与验收管线（标记 `needs-decision`），方向与成本/延迟优化诉求一致，处于维护者决策阶段。
- **[#102811](https://github.com/NousResearch/hermes-agent/issues/102811)** — RFC：Skills 提示词强制「宁多勿少」加载导致过度加载（`needs-decision`），是性能敏感用户的明确诉求。
- **Plugin Catalog 持续扩张**（今日 4+ 个 catalog PR）表明官方插件生态仓库 `hermes-official-plugins` 是明确的路线图方向。

## 7. 用户反馈摘要

- **长会话/压缩体验差**是反复出现的痛点：用户报告压缩过早触发、上下文反复丢失、截断标记污染输出文件（#136350、#136349），影响无人值守长任务。
- **Windows 用户摩擦显著**：中文用户名路径、计划任务静默失败（#131093、#136390），且已有修复 PR 滞留未合并，用户明确表达不满。
- **多渠道用户希望记忆连续**：跨平台（Telegram/Discord）切换丢上下文是真实使用场景中的高频诉求（#791198）。
- **本地模型/思考模型用户**关注推理内容保留与用量计费准确性（#56004 已关闭、#134915、#122303 已关闭），显示该方向修复正在见效。
- **积极面**：Telegram 丢消息 issue 当日即获修复 PR，hermes-guide 等社区诊断插件说明生态自服务能力在增强。

## 8. 待处理积压

| 条目 | 状态 | 建议 |
|---|---|---|
| [#131859](https://github.com/NousResearch/hermes-agent/issues/131859)（25 评论） | `blocked`，8 天未解 | 涉及贡献者权限，维护者需尽快回应 |
| [#54572](https://github.com/NousResearch/hermes-agent/issues/54572) | 6 月底开出，patch 工具模糊匹配可改错区域，至今 OPEN | **数据损坏级 bug，长期积压，建议提优先级** |
| [#94928](https://github.com/NousResearch/hermes-agent/issues/94928) | 8 月底开出，FD 耗尽导致空输出 | 影响长期运行 Desktop 用户 |
| [PR #122594](https://github.com/NousResearch/hermes-agent/pull/122594) / [#126325](https://github.com/NousResearch/hermes-agent/pull/126325) | Windows 中文用户名修复，开放 2 周以上，已有独立用户复现验证（#131093） | 建议尽快 review 合并 |
| [PR #121005](https://github.com/NousResearch/hermes-agent/pull/121005) | 安全类：插件审批绑定最终工具参数，9 月底开出 | 安全修复不宜久拖 |
| [PR #106742](https://github.com/NousResearch/hermes-agent/pull/106742) | 9 月初开出，超大型架构 PR，影响面极广 | 建议公布合并时间线，降低社区重复开发风险 |

---
*数据来源：GitHub API（过去 24 小时窗口）。总体健康度：**活跃度高、社区响应快、发布流程受阻塞、compression/session-state 子系统风险聚集**。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-10-11）

## 📊 今日速览

今日项目整体活跃度偏低，共 3 条更新动态（1 Issue / 2 PR），无新版本发布。值得注意的是，两条 PR 均处于关闭状态而非合并，其中一条（#3393）被标记为 stale 后关闭，社区贡献的流失信号值得关注。唯一的活跃 Issue #3281（Web UI 输入卡顿）已积累 18 条评论和 2 个 👍，是当前用户反馈最集中的痛点。项目处于功能演进与社区维护并行的阶段，但维护者响应速度存在瓶颈。

## 🚀 版本发布

今日无新版本发布。当前最新提及版本为 0.3.1（来自 Issue #3281 的环境信息）。

## 🔀 项目进展

今日无 PR 合并，两条 PR 被关闭：

- **[#3393](https://github.com/sipeed/picoclaw/pull/3393) [CLOSED] feat(provider): add Cheaper Inference provider**
  由 @aiapienthusiast 于 9 月 25 日提交，意图将 Cheaper Inference（一个 OpenAI 兼容的多模型 LLM 网关，宣称比直连便宜 15–60%）作为新 provider 接入。该 PR 长期未获维护者响应，最终因 stale 被关闭。属于社区贡献流失，功能本身未进入主干。

- **[#3421](https://github.com/sipeed/picoclaw/pull/3421) [CLOSED] feat(apiserve): serve PicoClaw agents over HTTP**
  由 @hms58 提交并在同日（10 月 10 日）关闭，设计上提供独立服务，让内部服务通过一次 HTTP 调用驱动 agent（`POST /v1/messages` 等，Bearer API key 鉴权），且不触碰现有 channel/gateway/config 代码。当日即关闭，可能是作者主动撤回或维护者认为架构方向不合适，建议关注后续是否有替代方案。

**小结**：今日项目主干无实质代码推进，两条关闭的 PR 均为功能型贡献（provider 扩展 + HTTP API 服务化），反映社区对“更多模型接入”和“agent 服务化开放”两个方向有需求，但当前均未落地。

## 🔥 社区热点

- **[#3281](https://github.com/sipeed/picoclaw/issues/3281) [BUG] Web UI chat input is very laggy when history has a little bit long**
  👍 2 | 💬 18 条评论 | 创建于 2026-07-21，最近更新 2026-10-10，但已被标记 **stale**。
  这是当前讨论最热烈的问题：用户在会话历史稍长时，Web UI 输入框出现明显卡顿（环境：PicoClaw 0.3.1 + Go 1.25.11）。18 条评论说明受影响用户不在少数，普遍诉求是前端渲染性能优化（疑似每输入一个字符触发全量历史重渲染）。然而该 Issue 被标记 stale，与社区热度形成反差，**维护者应优先跟进**。

## 🐛 Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 中高（影响核心交互体验） | [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI 长会话历史下输入框严重卡顿 | OPEN（stale）| ❌ 暂无 |

今日无新增崩溃或回归类 Bug 报告。#3281 虽不致命，但直接影响 Web 端可用性，且长会话是 AI 助手的主流使用模式，实际影响面可能较广。

## 💡 功能请求与路线图信号

从今日动态中可提取两个明确的社区功能方向：

1. **更多 OpenAI 兼容 Provider 接入**（[#3393](https://github.com/sipeed/picoclaw/pull/3393)）：社区希望通过接入 LLM 网关类服务降低模型调用成本。该 PR 虽被关闭，但需求真实，若维护者认可，可引导贡献者以更规范方式重新提交。
2. **Agent HTTP 服务化**（[#3421](https://github.com/sipeed/picoclaw/pull/3421)）：将 PicoClaw agent 通过 `/v1/messages` 等 REST 接口暴露给内部服务调用，方向契合"AI 智能体平台化"趋势，与 OpenAI Agents/Anthropic API 生态对齐。该方向若进入路线图，将显著扩展 PicoClaw 的集成场景。

## 🗣️ 用户反馈摘要

- **痛点**：Web UI 性能在长对话会话下退化严重（#3281），用户反复测试复现并产生 18 条讨论，说明体验问题持续困扰用户约 3 个月未解。
- **使用场景**：用户主要通过 PicoClaw Web 渠道进行长会话交互，说明 Web 端是重要使用入口，前端性能投入有必要性。
- **满意度信号**：社区贡献者活跃（主动提交 provider 和 HTTP API 功能），显示项目对开发者有吸引力；但贡献被关闭/stale 处理，可能在挫伤社区积极性。

## ⏳ 待处理积压

| 条目 | 状态 | 积压时长 | 建议 |
|---|---|---|---|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI 输入卡顿 | OPEN + stale | 近 3 个月，18 评论 | 高优先级安排前端性能修复，至少回应社区讨论，避免自动关闭 |
| [#3393](https://github.com/sipeed/picoclaw/pull/3393) Cheaper Inference provider | CLOSED (stale) | 挂起约 2 周后关闭 | 若方向可接受，可开 tracking issue 邀请重提 |
| [#3421](https://github.com/sipeed/picoclaw/pull/3421) HTTP API 服务 | CLOSED | 当日关闭 | 建议维护者公开关闭原因，明确是否纳入架构规划 |

---

**健康度小结**：今日无代码合并、无版本发布，动态以关闭/停滞为主。项目面临两个信号：核心体验 Bug 长期未响应（#3281）+ 社区贡献流失（#3393、#3421）。建议维护者优先处理 #3281，并就 HTTP API 方向给出明确路线图表态。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-10-11

## 1. 今日速览

NanoClaw 今日无新 Issue、无新版本发布，社区提交侧完全静默；但 PR 活动保持活跃（6 条更新：5 条待合并、1 条关闭），主要贡献者 @wakqasahmed 的系列安全/渠道修复 PR 于今日集中获得更新，加上 @musashinm 的容器清理修复和 @gavrielc 的依赖升级 PR 被关闭，显示核心团队在持续推进维护性工作。整体属于**低强度、稳态维护**的一天，项目健康度平稳，但 5 个 PR 待合并且新 Issue 流入为零，需关注社区新鲜输入的持续性。

## 2. 版本发布

今日无新版本发布。（链接：无）

## 3. 项目进展

**今日关闭：**

- **[#4069](https://github.com/nanocoai/nanoclaw/pull/4069)**（CLOSED）`chore(container): bump Claude Code to 2.1.296, Agent SDK to 0.3.296, Codex to 0.162.1` — 作者 @gavrielc，核心团队标签齐全（core-team）。将 agent 容器升级至最新 Claude Code / Agent SDK / Codex，并使 **Claude Haiku 5.5 成为默认 Haiku 模型**。该 PR 于 10-10 创建并当日关闭（未标注 merged，可能被新版本迭代替代或合入主线），体现了上游模型依赖的快速跟进节奏。

**待合并推进中：**

- **[#4057](https://github.com/nanocoai/nanoclaw/pull/4057)**（OPEN）修复 Docker 驱动 `stop()` 在 `--rm` 自动清理尚未完成时误报 teardown 失败的问题，提升容器生命周期管理的可靠性，今日有更新。
- 多个 8 月由 @wakqasahmed 提交的 PR 于 10-10 集中更新（详见第 5 节），疑似迎来维护者 review 回合，是本周最值得关注的推进信号。

## 4. 社区热点

今日无评论数据（Issues 为 0、PR 评论 undefined），无法识别讨论热度最高的条目。从更新时间看，**@wakqasahmed 的 4 个 PR（#3446 / #3275 / #3276 / #3450）在 10-10 同日更新**，是当前活跃度最高的话题簇，诉求集中在：**渠道兼容性（Google Chat、Telegram 广播频道、Discord/Slack bot 身份识别）与安全门控的冲突**——安全机制（unknown-sender gate、attachment 路径校验）对平台特殊消息格式的误伤。

## 5. Bug 与稳定性

今日无新 Bug 报告。待合并的修复类 PR 按严重程度排列：

| 严重度 | 问题 | 状态 | PR |
|---|---|---|---|
| 高 | **#3276**：Google Chat 消息 ID 为资源路径（含 `/`），全部被 `isSafeAttachmentName` 拒绝，附件 staging 完全不可用 | 有 fix PR，待合并 | [链接](https://github.com/nanocoai/nanoclaw/pull/3276) |
| 高 | **#3446**（修 #3235）：bot/webhook 发送者触发 unknown-sender 审批门，产生永远无法通过的审批卡片 | 有 fix PR，待合并 | [链接](https://github.com/nanocoai/nanoclaw/pull/3446) |
| 中 | **#3450**（修 #2991）：Telegram 广播频道匿名帖子（`sender_chat`）被 sender_scope 门拒绝 | 有 fix PR，待合并 | [链接](https://github.com/nanocoai/nanoclaw/pull/3450) |
| 中 | **#3275**（修 #2355）：`/update-nanoclaw` 升级路径不刷新 `ncl` symlink | 有 fix PR（重提版），待合并 | [链接](https://github.com/nanocoai/nanoclaw/pull/3275) |
| 中 | **#4057**：Docker `--rm` 竞态导致 stop 误报失败 | 有 fix PR，待合并 | [链接](https://github.com/nanocoai/nanoclaw/pull/4057) |

## 6. 功能请求与路线图信号

- **上游模型追踪**：#4069 表明项目将 agent 容器内 Claude Code / Codex 版本作为常规升级项，且默认模型策略随上游切换（Haiku 5.5）。可预期后续持续出现此类 bump PR。
- **多渠道支持深化**：#3446、#3450、#3276 均指向 Google Chat / Telegram 广播频道等边缘渠道场景，说明“接入更多异构消息平台”是社区实际使用方向。
- **升级体验**：#3275 反映 `/update-nanoclaw` 升级路径的完整性问题，自更新（self-update）可靠性是潜在路线图项。

## 7. 用户反馈摘要

今日无 Issue/评论数据，无法提炼直接用户反馈。间接信号：待合并 PR 修复的问题（Google Chat 附件不可用、升级后命令丢失、Telegram 频道消息被拒）表明用户在**非主流渠道集成与升级路径**上遇到实际阻碍，且 #2355/#3235 等早期 Issue 长期悬置后才出现修复，反映这些边缘场景痛点持续存在。

## 8. 待处理积压

- **[#3446](https://github.com/nanocoai/nanoclaw/pull/3446)**（8-22 提交，~50 天）、**[#3450](https://github.com/nanocoai/nanoclaw/pull/3450)**（8-22 提交）、**[#3275](https://github.com/nanocoai/nanoclaw/pull/3275)**（8-16 提交，且是二次重提）、**[#3276](https://github.com/nanocoai/nanoclaw/pull/3276)**（8-16 提交）— 四个 PR 平均积压约 2 个月，虽 10-10 有更新迹象，建议维护者优先推进 review/合并，尤其是影响 Google Chat 可用性的 #3276。
- **#4057** 仅 3 天且已有维护者互动迹象，优先级正常。

> 注：今日数据中 Issue 评论数为空，社区互动维度信息有限，本报告以 PR 活动为主要依据。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-10-11

## 1. 今日速览

NullClaw 今日整体活跃度中等偏低：无新版本发布，无 PR 合并，但围绕**会话内存无界增长**这一问题形成了完整的“报告 → 修复 PR → 后续增强提案”链条，显示社区协作质量较高。过去 24 小时共 2 条 Issue 活跃（均由 @vermonstinebaker 提出，其中 #1055 为今日新建）、1 条待合并 PR。核心贡献者对长会话资源管理问题的跟进速度快、方案讨论充分，是今日最主要的动态。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 合并或关闭。唯一在途 PR 为：

- **PR #1054** [fix(session): bound restored history to max_history_messages](https://github.com/nullclaw/nullclaw/pull/1054)（OPEN，10-10 创建，今日仍有更新）
  - 会话从存储恢复时，仅加载最近 `max_history_messages` 条记录，修复了 #1053 报告的单请求上下文无界增长问题。
  - 验证充分：`zig build test` 7491/7500 通过，0 失败、0 内存泄漏。
  - 作者在 Notes 中明确指出 `persistTurn` 每轮持续追加记录，持久化存储本身仍未被限制——这直接催生了 Issue #1055。

**进展评估**：修复方案已就绪且测试完备，但尚未合并。若 #1054 在近期合入，长会话的上下文膨胀问题将得到第一层缓解；持久化层的上限治理仍待后续工作。

## 4. 社区热点

- **Issue #1053 — Session history is reloaded unbounded; auto-compaction cannot bound per-request context**（评论 3 条，今日最活跃）
  [链接](https://github.com/nullclaw/nullclaw/issues/1053)
  核心诉求：长期运行会话中，auto-compaction 和 `trimHistory` 只作用于内存 `agent.history`，压缩结果**从不写回会话存储**，而会话恢复时会重新加载全部历史。`max_history_messages` 配置形同虚设。这是影响长会话可靠性的根本性设计缺口，讨论已延伸出修复 PR（#1054）与增强提案（#1055）。

- **Issue #1055 — [enhancement] bound the persisted session transcript（带序列守卫的压缩写回）**（今日新建，评论 1 条）
  [链接](https://github.com/nullclaw/nullclaw/issues/1055)
  明确致谢 @O96a 的贡献，属于对 #1053/#1054 的系统化后续：不仅限制恢复时加载量，还要限制存储本身，通过序列守卫（sequence guard）实现压缩结果安全写回，避免竞态。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| **高** | [#1053](https://github.com/nullclaw/nullclaw/issues/1053) 长会话单请求上下文无界增长；压缩结果不落盘、恢复时全量重载 | 已有 fix PR [#1054](https://github.com/nullclaw/nullclaw/pull/1054)（待合并），但只修复"读"侧 |
| **中** | 同一问题链的"写"侧：`persistTurn` 每轮追加 user+assistant 记录，持久化转录无上限，磁盘占用随会话长度无限膨胀 | 仅有增强提案 [#1055](https://github.com/nullclaw/nullclaw/issues/1055)，尚无实现 PR |

无崩溃或回归类报告。整体看问题集中于**资源治理**而非功能正确性。

## 6. 功能请求与路线图信号

- **持久化会话转录上限 + 压缩写回（#1055）**：提出“compaction write-back with sequence guard”方案，是与 #1054 同一问题域的自然延伸，且已有清晰的方案讨论，是最有可能紧随 #1054 之后被纳入开发计划的项目。建议关注其是否转化为 PR 并与 #1054 合并节奏衔接。
- 信号解读：维护者正在系统性收敛“长会话资源管理”这一主题（读侧限制 → 写侧限制 → 写回一致性），可能形成一个小型专项路线。

## 7. 用户反馈摘要

从 #1053 的评论（3 条）及关联讨论可提炼：

- **痛点**：使用 NullClaw 进行长时间运行的智能体会话时，token 消耗和内存占用持续增长；用户配置了 `max_history_messages` 期望控制上下文，但实际未生效，产生配置失效的困惑。
- **使用场景**：长生命周期 session + 多轮对话 + 持久化恢复，属于个人 AI 助手的核心使用模式，影响面可能较广。
- **正面信号**：社区（@O96a 等）在 Issue 中直接贡献了方案细节，作者 @vermonstinebaker 提交的 PR 带完整测试（0 泄漏），反馈闭环质量高。

## 8. 待处理积压

- **PR #1054**：测试全绿、描述清晰，已提交超过一天仍未合并。建议维护者优先评审，尽快让读侧修复落地。
- **Issue #1055**：刚创建，暂不算积压，但它是 #1054 合并后防止“存储层继续膨胀”的必要后续，建议维护者在合并 #1054 时同步给出 #1055 的处理计划，避免问题链条半途停滞。

---

**健康度小结**：项目问题响应速度快、贡献者协作链路清晰，但今日零合并、零发布，交付节奏略有滞后于问题发现节奏。核心风险集中在长会话资源管理，修复路径已明确，待维护者推进合并。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-10-11

## 1. 今日速览

IronClaw 今日整体活跃度较低：过去 24 小时无 PR 更新、无新版本发布，仅 2 条 Issue 有动静（1 开 1 关）。新增 Issue [#8131](https://github.com/nearai/ironclaw/issues/8131) 对文档中宣称的 provider 支持能力提出质疑，反映出文档与实际体验可能存在差距。同时一条 3 月份的 DeepSeek 认证问题 [#1047](https://github.com/nearai/ironclaw/issues/1047) 被关闭，可能随近期改动得到解决或被视为过期。整体看项目处于平稳维护状态，无紧急稳定性风险信号。

## 2. 版本发布

今日无新版本发布。（可省略详情）

## 3. 项目进展

今日无 PR 被合并或关闭，无代码层面的可见推进。唯一的活动是关闭了长期悬挂的 Issue [#1047](https://github.com/nearai/ironclaw/issues/1047)（DeepSeek API key 认证失败），若系自动关闭而非实际修复，建议关注问题是否真正解决。

## 4. 社区热点

- **[#8131 "Is this a joke? (ironclaw onboard provider list)"](https://github.com/nearai/ironclaw/issues/8131)** — 今日新开，暂无评论。作者对文档宣称的“20+ 推理提供商目录（含 NEAR AI、Anthropic、OpenAI、Gemini、GitHub Copilot、Ollama、Bedrock 及任意 OpenAI 兼容端点）”表示强烈不满，暗示实际 onboarding 流程中 provider 列表与文档不符。标题措辞激烈，属于高情绪价值反馈，若不及时回应可能影响项目口碑。建议维护者尽快确认 onboard 流程的实际 provider 展示逻辑并回复。

- **[#1047（已关闭）](https://github.com/nearai/ironclaw/issues/1047)** — 老牌 DeepSeek 接入问题，今日关闭。该问题生命周期长达 7 个月且全程零评论，属于社区响应薄弱的典型信号。

## 5. Bug 与稳定性

今日新增疑似 Bug 1 条，无崩溃/回归报告，均无 fix PR：

1. **[中] [#8131](https://github.com/nearai/ironclaw/issues/8131)** — Onboard 流程 provider 列表与文档描述不符（具体失败细节待作者补充完整日志）。尚无 fix PR。
2. **[低/历史] [#1047](https://github.com/nearai/ironclaw/issues/1047)**（已关闭）— DeepSeek 401 认证错误、无法设置 API key。已关闭但无关联 PR，修复状态不明。

## 6. 功能请求与路线图信号

今日无明确新功能请求。间接信号：

- 用户强烈期望文档承诺的 **多 provider（尤其 OpenAI 兼容端点）开箱即用** 体验真实可用（[#8131](https://github.com/nearai/ironclaw/issues/8131)）。
- 自定义 provider 的 **API key 配置流程**（[#1047](https://github.com/nearai/ironclaw/issues/1047)）长期是痛点，若尚未彻底修复，建议纳入下一版本改进。

## 7. 用户反馈摘要

- **痛点**：文档宣传与实际功能不一致。用户依据文档预期可便捷接入 20+ provider，实际 onboard 体验落差明显，引发信任问题（[#8131](https://github.com/nearai/ironclaw/issues/8131)）。
- **痛点**：第三方 provider（DeepSeek）key 配置不直观，报错信息直接暴露 key 片段，体验粗糙（[#1047](https://github.com/nearai/ironclaw/issues/1047)）。
- **使用场景**：用户倾向于用 IronClaw 接入非官方主流 provider（如 DeepSeek、本地 Ollama），对 OpenAI 兼容端点灵活性需求明显。

## 8. 待处理积压

- **[#8131](https://github.com/nearai/ironclaw/issues/8131)**：今日新开、零回复，且情绪强烈，建议 48 小时内响应。
- **[#1047](https://github.com/nearai/ironclaw/issues/1047)**：虽已关闭，但 7 个月零官方回应后关闭，建议确认是否有真实修复，避免问题复发。
- 整体提醒：Issue 平均响应时长偏长（#1047 案例），建议建立 triage 机制，特别是 provider 接入类问题（当前社区关注度最高的领域）。

---
*数据来源：GitHub API（过去 24 小时窗口）。今日项目健康度：平稳但社区响应速度需改善。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-10-11）

## 1. 今日速览

过去 24 小时项目保持高度活跃：**18 条 PR 更新（17 条已合并/关闭，仅 1 条待处理）**，1 条新开 Issue。核心贡献者 @fisherdaddy 单日产出并合入了十余项修复与功能增强，覆盖渲染层、Artifacts、Office 编辑、OpenClaw 引擎适配等多个模块。整体节奏呈「高频小步快跑」特征，问题从用户报告到修复合入的周期非常短，项目健康度良好。

## 2. 版本发布

无新版本发布。从 PR #2831 中提及的 `2026.9.24 (test channel)` 推测，测试通道版本仍在迭代中，近期或有正式版发布。

## 3. 项目进展

### 功能增强
- **Word 编辑器支持插入表格与图片**（[#2833](https://github.com/netease-youdao/LobsterAI/pull/2833)）：工具栏新增 Word 式 10×8 网格选择器、悬停预览、方向键操作，插入位置规则与 Word 对齐，多步操作合并为一次撤销。直接响应了用户反馈的编辑能力缺口。

### 关键修复（均已合入/关闭）
- **Artifacts 预览体验三连修**：
  - [#2836](https://github.com/netease-youdao/LobsterAI/pull/2836)：Agent 原地编辑文件后各类型预览（SVG/代码/文本/图片/文档）实时刷新
  - [#2832](https://github.com/netease-youdao/LobsterAI/pull/2832)：后续回复重写文件时保持预览不关闭
  - [#2838](https://github.com/netease-youdao/LobsterAI/pull/2838)：保存文件时「我的文件」预览不再误刷新
- **引擎稳定性**：
  - [#2824](https://github.com/netease-youdao/LobsterAI/pull/2824)：配置恢复卡住时任务继续运行，不再全局禁用 composer
  - [#2825](https://github.com/netease-youdao/LobsterAI/pull/2825)：网关启动超时改为仅计唤醒时间，修复休眠唤醒后误判超时
  - [#2827](https://github.com/netease-youdao/LobsterAI/pull/2827)：steering 运行中的对话轮次不再中断
  - [#2830](https://github.com/netease-youdao/LobsterAI/pull/2830)：新任务计时从提交时刻算起，并标注引擎等待
- **跨平台兼容**：
  - [#2828](https://github.com/netease-youdao/LobsterAI/pull/2828)：Windows 下 Excel/WPS 独占文件时给出提示并在关闭后保存（修复 EPERM）
  - [#2831](https://github.com/netease-youdao/LobsterAI/pull/2831)：2026.9.4 → 2026.9.24 升级后网关无法启动的迁移失败
  - [#2835](https://github.com/netease-youdao/LobsterAI/pull/2835)：Computer Use 安装无需重启网关
- **UI/UX**：[#2837](https://github.com/netease-youdao/LobsterAI/pull/2837) 移除经常不准的 composer 上方进度卡片；[#2829](https://github.com/netease-youdao/LobsterAI/pull/2829) 侧边栏区分 agent 行与嵌套任务行；[#2826](https://github.com/netease-youdao/LobsterAI/pull/2826) 修复进度卡卡在「第 3/10 步」的问题
- **工程卫生**：[#2834](https://github.com/netease-youdao/LobsterAI/pull/2834) 阻止 `npm test` 污染已跟踪的日志文件

**小结**：单日合入 17 项 PR，Artifacts 预览链路和 Windows 兼容性得到系统性补强，项目在「Agent 编辑文件 → 用户实时看到结果」这一核心体验上前进明显。

## 4. 社区热点

- **[#2839](https://github.com/netease-youdao/LobsterAI/issues/2839)**（新开，已有 1 评论）：用户就网易有道双休率统计口径提出疑问（约 70% 双休率、平均下班 19:30）。⚠️ 该 Issue 与项目代码和技术内容无关，疑似职场信息讨论帖占用仓库 Issue 区，建议维护者评估是否关闭或转移。

整体看，今日社区讨论重心在 PR 侧（尤其 Office 编辑与引擎稳定性修复），Issue 区较沉寂。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | 升级 2026.9.24 后网关无法启动（auth-profiles 迁移失败）[#2831](https://github.com/netease-youdao/LobsterAI/pull/2831) | ✅ 已有 fix 并合入 |
| 🔴 高 | 配置恢复卡住导致任务/IM 全部拒接 [#2824](https://github.com/netease-youdao/LobsterAI/pull/2824) | ✅ 已合入 |
| 🟠 中 | Windows 下 Excel/WPS 独占文件导致保存 EPERM [#2828](https://github.com/netease-youdao/LobsterAI/pull/2828) | ✅ 已合入 |
| 🟠 中 | 引擎启动后首个任务耗时数分钟（第三方插件 nsp-clawguard 扫描约 1429 条）[#2830](https://github.com/netease-youdao/LobsterAI/pull/2830) | ✅ 已合入（计时标注） |
| 🟠 中 | 休眠唤醒后网关被误判超时中断 [#2825](https://github.com/netease-youdao/LobsterAI/pull/2825) | ✅ 已合入 |
| 🟡 低 | 进度卡停留在「本轮已结束」[#2826](https://github.com/netease-youdao/LobsterAI/pull/2826)、Word 预览误刷新 [#2838](https://github.com/netease-youdao/LobsterAI/pull/2838) | ✅ 已合入 |

今日报告的 Bug 基本全部当日修复，修复响应速度是项目突出优势。

## 6. 功能请求与路线图信号

- **Word 插入表格/图片**（源自用户反馈）已在 [#2833](https://github.com/netease-youdao/LobsterAI/pull/2833) 落地，可预期 Excel/PPT 编辑器后续会有同等深度的能力补齐。
- **移除进度卡片**（[#2837](https://github.com/netease-youdao/LobsterAI/pull/2837)）表明团队在 UI 上做减法，优先准确性而非信息量——方向信号值得关注。
- **Computer Use 免重启安装**（[#2835](https://github.com/netease-youdao/LobsterAI/pull/2835)）显示 Computer Use/工具套件是持续投入方向。

## 7. 用户反馈摘要

从今日 PR 的问题描述可还原真实用户痛点：
- **Office 场景真实存在**：用户实际在用 Word/Excel 编辑，并遇到文件被占用、编辑能力不足等问题——说明 Office 集成是高频使用路径。
- **Agent 编辑与预览脱节是核心痛点**：三个 PR 均源于「Agent 改了文件但用户看不到/预览被关闭」。
- **长任务可靠性**：评测类长任务中进度卡错乱、任务计时重启，说明重度用户在跑多小时任务。
- **Windows 与 macOS 行为差异**（文件锁、休眠）是稳定性投诉主要来源。

## 8. 待处理积压

- **[#2590](https://github.com/netease-youdao/LobsterAI/pull/2590)**（OPEN，9月1日创建）：社区提交的**安全加固 PR**——MCP stdio 命令注入防护与外部 URL 协议白名单。对执行第三方命令的桌面应用而言安全优先级高，已挂起 40 天，**强烈建议维护者优先评审**。
- 今日另有两个 stale PR（[#1660](https://github.com/netease-youdao/LobsterAI/pull/1660)、[#2452](https://github.com/netease-youdao/LobsterAI/pull/2452)）被机器人关闭，属正常清理。
- Issue 区无长期积压，但建议对 #2839 这类非技术 Issue 明确处置策略。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-10-11）

## 1. 今日速览

Moltis 今日保持轻量活跃状态：过去 24 小时新增 2 条 Issue、1 条 PR 更新，无新版本发布。两条新 Issue 均来自同一位贡献者 @texxronn，聚焦 Discord 渠道信任模型与运行时上下文缺陷，其中 #1300 与既有 PR #1295 高度相关，显示出社区正围绕「Discord DM 分类」这一主题形成集中修复方向。整体来看项目处于 bug 修复迭代期，无合并动作，节奏平稳。

## 2. 版本发布

今日无新版本发布。（无 Releases 记录）

## 3. 项目进展

今日无 PR 合并或 Issue 关闭。唯一活跃 PR 为：

- **PR #1295** [fix(discord): classify direct messages as direct chats](https://github.com/moltis-org/moltis/pull/1295)（@tomachianura，10-05 创建，10-10 更新，待合并）——将 Discord DM 从「一律视为 shared」改为正确识别为 direct chat，使 1:1 私聊可保留工具调用能力。该 PR 尚未合并，但与今日新开 Issue #1300 相互印证，问题确定性较强，合并概率高。

## 4. 社区热点

- **Issue #1300** [Discord: forward DM vs guild so operator DMs can be trusted](https://github.com/moltis-org/moltis/issues/1300)（@texxronn，1 条评论，今日最活跃）——诉求核心：`crates/channels/src/chat_classification.rs` 中 `ChannelType::Discord | ChannelType::MsTeams | ...` 一律按 shared 处理，导致即使是 `operators` 名单内的用户在 DM 中也被剥离工具（fail-closed）。用户希望区分 DM 与 guild 频道，让操作员的私聊指令可被信任。这与 PR #1295 形成互补：PR 解决分类，Issue 进一步要求按操作员身份放行工具。

## 5. Bug 与稳定性

按严重程度排列：

1. **#1299** [runtime datetime never injected（host context `time: None`, `today` unset）](https://github.com/moltis-org/moltis/issues/1299)——**高**。`runtime_datetime_message()` 预期前置注入 `[The current user datetime is …]`，但因宿主运行时上下文构建时 `time: None`、`today` 未设置而永不触发，Agent 完全无法回答日期/时间类问题。属核心运行时功能失效，**尚无 fix PR**。
2. **#1300 / PR #1295** Discord DM 被强制视为 shared、工具被剥离——**中高**。功能性/安全策略缺陷，已有 **fix PR #1295** 在途，但操作员信任语义（#1300）可能需要额外设计决策。

## 6. 功能请求与路线图信号

- #1300 实质上包含一个**信任模型改进**：按操作员身份（`operators` 名单）而非仅频道类型决定工具放行。这是对 PR #1295 的增强信号，可能在 #1295 合并后作为后续迭代纳入。
- 若 #1295 + #1300 的方案落地，MsTeams、Matrix 等其他渠道（代码中同样被硬编码为 shared）或成为下一步修复对象，值得维护者在路线图中统一规划「渠道会话分类 + 操作员信任」体系。

## 7. 用户反馈摘要

- **痛点一（工具失效）**：Discord 操作员在 DM 中与机器人 1:1 交互时，工具始终被剥离，即 fail-closed 策略误伤合法操作员场景（#1300、PR #1295）。
- **痛点二（基础能力缺失）**：Agent 无法回答“现在几点/今天几号”，用户对时间注入机制形同虚设感到困惑（#1299）。
- 用户（@texxronn）反馈带有具体代码定位，说明反馈者具备 Rust 代码级排查能力，Issue 质量较高，利于快速修复。

## 8. 待处理积压

- **PR #1295**：创建已 6 天，昨日有更新但仍待合并，且与今日新 Issue #1300 产生联动，建议维护者尽快 review，避免分类逻辑与信任模型改动冲突。
- **Issue #1299**：今日新开、0 评论、无关联 PR，属核心功能失效，建议优先确认并指派修复。
- 提醒：今日两条 Issue 均指向 `chat_classification.rs` / 运行时上下文构建，建议维护者做一次相关模块的整体排查。

---
*数据来源：Moltis GitHub 仓库过去 24 小时活动统计。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-10-11

> 数据来源：agentscope-ai/CoPaw（Issue/PR 活动统计周期为过去 24 小时）

---

## 1. 今日速览

- 项目保持**高活跃度**：过去 24 小时 Issues 更新 15 条（新开/活跃 9，关闭 6），PR 更新 13 条（待合并 7，已合并/关闭 6），无新版本发布。
- 主题高度集中：**Console 前端稳定性**成为本周主战场，#8154 已合并，一次性修复 4 个页面加载失败相关的长期 Issue（#8120 / #8094 / #7815 / #7074）。
- 今日新开 Issue 质量较高，多名用户提交了带完整复现路径的深度 Bug 报告（Codex 重连断裂、ProviderManager 静默吞异常等）。
- 社区贡献活跃：HarmonyOS 原生客户端 PR（#8164，size/XXXL）进入待合并队列，是本周期最大体量的新功能贡献。
- 一条被标记 invalid 的安全报告（#8153，MCP Driver RCE）值得关注，虽以 invalid 关闭，但涉及生产环境入侵事件。

---

## 2. 版本发布

今日无新版本发布。Console 稳定性修复已进入 main 分支，预计将随下一个版本（2.2.x 系列后续）发布。

---

## 3. 项目进展

今日合并/关闭的重要 PR：

| PR | 内容 | 影响 |
|---|---|---|
| [#8154](https://github.com/agentscope-ai/QwenPaw/pull/8154) (XXL, 已合并) | **Console chunk 错误恢复与诊断改进**，一次性修复 #8120、#8094、#7815、#7074 | 本周期最重要合并，解决困扰用户近两个月的“页面加载失败/需刷新”高发问题 |
| [#8169](https://github.com/agentscope-ai/QwenPaw/pull/8169) (XS) | Hub 尊重管理员 token 能力覆盖 | 权限配置修复 |
| [#8168](https://github.com/agentscope-ai/QwenPaw/pull/8168) (XS) | Console/Hub 校验使用解析后的模型上下文限制 | 修复 qwen3.8-max 等大上下文模型（1M token）被错误拒绝的问题 |
| [#7889](https://github.com/agentscope-ai/QwenPaw/pull/7889) (XXXL, 关闭) | DOM 渲染错误恢复 | 由 rebase 后的 [#8170](https://github.com/agentscope-ai/QwenPaw/pull/8170) 接替 |
| [#7132](https://github.com/agentscope-ai/QwenPaw/pull/7132) (关闭) | 侧边栏聊天图标置顶 | 因侧边栏已重构而被取代 |
| [#7096](https://github.com/agentscope-ai/QwenPaw/pull/7096) (关闭) | PEP 563 注解解析 | main 已通过锁定 agentscope 2.0.9 解决 |

**整体评估**：#8154 的合并标志着 Console 前端稳定性工作告一段落（从 #7815 首报算起近一个月），配套的 #8170 rebase 说明后续加固仍在推进。今日还完成了两个 Hub/模型校验的快速修复（当日提交当日合并），小型修复周转速度良好。

---

## 4. 社区热点

**🔥 讨论最活跃：[#8162](https://github.com/agentscope-ai/QwenPaw/issues/8162)（7 评论，已关闭）— OpenAI Responses API 流式空响应**
用户 @xiaohushi512 报告旧版流解析器只处理增量事件，导致会话运行 1-3 步即静默中断。已有对应修复 PR [#8165](https://github.com/agentscope-ai/QwenPaw/pull/8165)（待合并），针对部分 provider 仅在 terminal 事件发送完整输出的场景。

**🔥 高关注安全事件：[#8153](https://github.com/agentscope-ai/QwenPaw/issues/8153)（已关闭，invalid）— MCP Driver 配置接口 root RCE**
用户提交了完整的入侵证据链：攻击者通过 MCP Driver 配置接口以 root 执行命令，植入 SSH 公钥和挖矿木马。被官方标记 invalid 关闭，但报告中含 IOC 信息。**建议官方公开说明 invalid 的判定依据**（是否为部署配置问题而非产品漏洞），否则容易引发社区对安全响应透明度的质疑。

**🔥 高频痛点：[#8120](https://github.com/agentscope-ai/QwenPaw/issues/8120)（5 评论，已关闭）— 频繁页面加载失败**
多台设备复现，严重影响体验，诉求强烈。已由 #8154 修复关闭。

---

## 5. Bug 与稳定性（按严重程度排序）

| 严重度 | Issue | 状态 | 修复进展 |
|---|---|---|---|
| 🔴 高（安全） | [#8153](https://github.com/agentscope-ai/QwenPaw/issues/8153) MCP Driver root RCE + 挖矿木马 | 已关闭(invalid) | ⚠️ 无修复 PR，判定存疑 |
| 🔴 高 | [#8173](https://github.com/agentscope-ai/QwenPaw/issues/8173) Codex 后端热重载后连接断裂，僵尸 running 记录阻塞所有恢复路径，仅手动 API 可救 | 新开 | 未修复 |
| 🔴 高 | [#8162](https://github.com/agentscope-ai/QwenPaw/issues/8162) Responses API 流式空响应致会话静默中断 | 已关闭 | ✅ PR [#8165](https://github.com/agentscope-ai/QwenPaw/pull/8165) 待合并 |
| 🟠 中高 | [#8172](https://github.com/agentscope-ai/QwenPaw/issues/8172) Console 聊天间歇性静默空完成，模型从未被调用 | 活跃 | 未修复 |
| 🟠 中高 | [#7311](https://github.com/agentscope-ai/QwenPaw/issues/7311) v2.1.1b2 缺失 `_qwenpaw_remote_backend`，所有工具失效 | 长期未关 | ⚠️ 开放超 1.5 个月 |
| 🟠 中 | [#8175](https://github.com/agentscope-ai/QwenPaw/issues/8175) `ProviderManager.active_model` 启动不加载 + 静默 `except: pass`，dream cron 每晚必失败 | 新开 | 未修复 |
| 🟡 中 | [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171) LM Studio 音频 400 错误使会话永久卡死（#7015 家族第三种形态） | 新开 | 部分 PR #7654 仍开放 |
| 🟡 中 | [#8150](https://github.com/agentscope-ai/QwenPaw/issues/8150) 飞书入站图文混排中图片被静默丢弃 | 活跃 | 未修复 |
| 🟡 中 | [#8163 → #8167](https://github.com/agentscope-ai/QwenPaw/pull/8167) Windows 长路径致 Creator 审核决策不可恢复 | 新 PR | ✅ PR #8167 待合并 |

**趋势观察**：多个新 Bug 共同指向“**静默失败**”模式（空输出、无警告、吞异常），建议项目在错误上报与可观测性上做系统性改进，而非逐例修复。

---

## 6. 功能请求与路线图信号

| 请求 | Issue | 纳入可能性 |
|---|---|---|
| 鸿蒙原生客户端 | PR [#8164](https://github.com/agentscope-ai/QwenPaw/pull/8164)（XXXL，待合并） | 高，代码已完成、无服务端改动，正在评审 |
| Tavily 自有 API key 配置入口 | [#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174) | 中高，诉求明确且实现成本低 |
| 模型目录补 Aliyun Token Plan 的 `thinking_param_style` 声明 | [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) | 高，仅需更新 model_catalog.json |
| Heartbeat 运行时语义文档 | [#8082](https://github.com/agentscope-ai/QwenPaw/issues/8082) | 极高，配套 docs PR [#8166](https://github.com/agentscope-ai/QwenPaw/pull/8166) 已提交 |
| 插件干净卸载 + 回滚安全热重载 | PR [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565)（XXXL，开放超 1 个月） | 中，仍在评审 |
| CLI `--agent-id` 文档指南 | PR [#7127](https://github.com/agentscope-ai/QwenPaw/pull/7127) | 中，first-time-contributor，开放近 2 个月 |

---

## 7. 用户反馈摘要

- **最大痛点正在缓解**：多个用户（@henryliuwork、@felix118、@wjt0321）长期反馈的“页面加载失败/频繁崩溃需刷新”问题随 #8154 合并得到解决，用户对官方响应慢于问题首发（#7074 于 8 月中即报）略有微词。
- **桌面端体验偏差**：Windows 用户贡献了较多深度 Bug（长路径、WebView2 缓存、模块缺失），Desktop 版本质量仍是短板。
- **高级用户满意度高**：从 #8173、#8175 等报告可见，存在重度自部署用户（Docker/NAS、6 workspace 多 agent、接 LM Studio/OpenAI 兼容网关），报告质量极高、附完整溯源，是项目的核心资产。
- **渠道生态诉求**：飞书用户希望入站富文本消息完整支持（#8150），移动端用户期待鸿蒙客户端落地。

---

## 8. 待处理积压（提醒维护者关注）

| 项 | 开放时长 | 风险 |
|---|---|---|
| [#7311](https://github.com/agentscope-ai/QwenPaw/issues/7311) 缺失 `_qwenpaw_remote_backend` 致所有工具失效 | 08-26 至今，1.5+ 个月 | 高，用户重装无效、无 workaround 回复 |
| PR [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) 插件热重载（XXXL） | 09-04 至今 | 中，阻塞插件系统可靠性演进 |
| PR [#7127](https://github.com/agentscope-ai/QwenPaw/pull/7127) CLI 文档（first-time-contributor） | 08-19 至今 | 低，但拖延首贡献者有社区友善度风险 |
| PR [#8164](https://github.com/agentscope-ai/QwenPaw/pull/8164) 鸿蒙客户端（XXXL） | 新提交 | 评审资源需求大，建议明确排期 |
| [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) 模型目录 thinking 声明 | 09-25 至今 | 低成本可快速关闭 |

**健康度小结**：Issue 关闭率与 PR 周转速度均属健康，小修复当日闭环能力突出；主要风险在于超大 PR（XXXL）评审积压、#8153 安全判定的透明度，以及“静默失败”类 Bug 的系统性治理。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*