# OpenClaw 生态日报 2026-10-07

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-07 04:57 UTC

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

# OpenClaw 项目动态日报 — 2026-10-07

## 1. 今日速览

OpenClaw 今日保持高活跃度：24 小时内 Issues 更新 500 条（新开/活跃 363，关闭 137），PR 更新 500 条（待合并 353，已合并/关闭 147），社区吞吐量处于非常健康的高位。**本日无新版本发布**，主线工作集中在 Gateway 线程减负（SQLite 操作迁移至 worker 线程）的大型重构系列 PR，由核心维护者 @steipete 主导，单日提交多个 XL 级重构。稳定性方面压力仍在：内存泄漏（#159662、#155191）与大型 SQLite 会话库 I/O 瓶颈（#160386、#148307）等 P0 问题持续发酵，更新链路（2026.9.4→2026.9.6）失败报告密集。整体判断：**开发侧推进迅猛、工程方向明确（性能与可维护性），但 2026.9.x 稳定版的升级体验和资源泄漏问题需要在下一版本重点收口**。

## 2. 版本发布

今日无新 Release。

## 3. 项目进展

今日多个重要 PR 被合并/关闭（数据中 CLOSED 状态 PR 共 147 条，以下为代表性条目）：

- **[PR #166454](https://github.com/openclaw/openclaw/pull/166454)** fix(agents): 保留恢复后的子代理失败诊断 — 修复 Gateway 重启后恢复重建 child session completion 时丢失已记录诊断信息的问题，提升多代理场景可观测性。
- **[PR #166430](https://github.com/openclaw/openclaw/pull/166430)** fix(gateway): Homebrew Node 升级后通过稳定运行时路径派生子进程 — 完成 #166222 的后续修复，解决 exec 与 stdio MCP 在 Node 可执行文件被移除后的启动失败，关闭 [#166170](https://github.com/openclaw/openclaw/issues/166170)。
- **[PR #166441](https://github.com/openclaw/openclaw/pull/166441)** fix(gateway): root 节点 workspace 对账与错误上浮 — RunPod UID 0 worker 的 workspace 对账失败此前只报 `UNAVAILABLE`，现在保留底层异常，诊断能力显著提升。
- **[PR #166414](https://github.com/openclaw/openclaw/pull/166414)** fix(ui): Control UI E2E 截图逐字节可复现 — 巩固测试基础设施（无用户可见影响）。
- **[PR #162689](https://github.com/openclaw/openclaw/pull/162689)** fix(gateway): 仪表盘标题工作不再阻塞 session rollover — 修复每日重置后首条消息 `timed out draining work` 超时（P1，关闭 [#162420](https://github.com/openclaw/openclaw/issues/162420)）。
- **[PR #164726](https://github.com/openclaw/openclaw/pull/164726)** fix(duckduckgo): 使用真实 User-Agent 替代伪装浏览器 UA — 解决搜索工具返回 `provider_error` 的问题（关闭 #164471）。
- **[PR #150593](https://github.com/openclaw/openclaw/pull/150593)** docs(google-vertex): 补充 ADC sentinel 凭据文档。

**待合并的重要方向**（多个 "ready for maintainer look"）：@steipete 的 Gateway 线程减负三部曲 — [placement 生命周期迁移 #166444](https://github.com/openclaw/openclaw/pull/166444)、[placement 读调用迁移 #166445](https://github.com/openclaw/openclaw/pull/166445)、[worktree 守卫迁移 #166236](https://github.com/openclaw/openclaw/pull/166236)——直接对应 #160386/#148307 报告的 Gateway 线程 SQLite I/O 压力问题，是本日最有战略价值的工作。此外 [memory-wiki 大搜索响应性改进 #166433](https://github.com/openclaw/openclaw/pull/166433)（P1，XL）也在推进。

## 4. 社区热点

- **[#159662](https://github.com/openclaw/openclaw/issues/159662)**（P0，20 评论）`prepared-model-catalog.worker.js` 无界内存泄漏，~4-5 GB/小时，与提供商无关，冷重启+提供商二分法均复现。单用户安装 60-90 分钟内 RSS 从 2.5 GB 涨到 8-10 GB。**尚无 fix PR**，是全站讨论最热烈的问题。
- **[#97616](https://github.com/openclaw/openclaw/issues/97616)**（P1，18 评论）hook/tool 子进程未 reap 导致僵尸进程累积，6 月底报告至今持续有用户补充复现。
- **[#79902](https://github.com/openclaw/openclaw/issues/79902)**（15 评论）SQLite transcript/session 公开接口需求——社区希望在 database-first 运行时之上获得可编程访问层，属于生态建设诉求，标记 `needs-product-decision`。
- **[#43367](https://github.com/openclaw/openclaw/issues/43367)**（15 评论）多代理编排不稳定（并发 `agents add` 配置互相覆盖、session-lock 失败），3 月报告，有 linked PR 但长期未收口。
- **[#127229](https://github.com/openclaw/openclaw/issues/127229)**（15 评论）Telegram 持久化消息在 context 压缩期间被 watchdog 误标记为 tombstone，涉及消息可靠性，社区高度关注。

**热点共性诉求**：资源泄漏（内存/进程）、消息不丢失保证、多代理可靠性——都是长期自托管用户的核心关切。

## 5. Bug 与稳定性

**P0 / 发布阻塞级：**

| Issue | 问题 | Fix 状态 |
|---|---|---|
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | 模型目录 worker 内存泄漏 4-5 GB/h | ❌ 无 fix PR |
| [#160386](https://github.com/openclaw/openclaw/issues/160386) | 2026.9.6 大会话库 SQLite I/O 压力 → RPC 超时、read admission 失效 | ⚠️ 方向上由 #166444/#166445/#166236 重构缓解 |
| [#148307](https://github.com/openclaw/openclaw/issues/148307) | `database is locked`，464 MB DB、session 回收 9-47s 超过 5s busy timeout | ❌ needs-info |
| [#152965](https://github.com/openclaw/openclaw/issues/152965) | 非通道插件热重载 dispose 全部通道插件 → 断流丢消息 | ❌ 无 fix PR |
| [#155191](https://github.com/openclaw/openclaw/issues/155191) | 2026.9.5 原生内存泄漏 ~1 GiB/30s（V8 堆稳定） | ❌ needs-info |
| [#154924](https://github.com/openclaw/openclaw/issues/154924)（已关） | 更新失败 global-install-failed | 已处理 |

**P1 / 重要：**

- [#136183](https://github.com/openclaw/openclaw/issues/136183) — ssh 启动挂起（2026.8.1 回归，SIGTERM 前协议 banner 无响应），needs-maintainer-review。
- [#153899](https://github.com/openclaw/openclaw/issues/153899) — Gateway drain 等满 TimeoutStopSec（5m30s），健康刷新定时器对已关闭资源持续触发。
- [#154891](https://github.com/openclaw/openclaw/issues/154891) — 失败回滚的热重载仍使无关插件不可用直至重启。
- [#159912](https://github.com/openclaw/openclaw/issues/159912) — 插件重载后 memory 后台回调持有已退役注册表，索引失败但健康检查全绿；标记 `queueable-fix`，是最接近被修复的。
- [#154834](https://github.com/openclaw/openclaw/issues/154834) — 失败的 subagent 交付每回合重复注入运行时上下文（有 linked PR）。
- [#136035](https://github.com/openclaw/openclaw/issues/136035) — 稳定版 2026.8.2 启动期间 listener 约 2 分钟无响应，心跳停摆 110s。

**已关闭的好消息**：安全级 [#157126](https://github.com/openclaw/openclaw/issues/157126)（MCP 桥继承请求 scope 导致权限越界）今日关闭，有 linked PR；更新验证失败 [#157319](https://github.com/openclaw/openclaw/issues/157319)、[#154114](https://github.com/openclaw/openclaw/issues/154114) 也已关闭，说明 2026.9.6 升级链路问题在被消化。

## 6. 功能请求与路线图信号

- **Gateway worker 化重构**（#166444/#166445/#166236/#166252）明确指向下一版本主线：消除 Gateway 线程上的 SQLite 操作，直接回应大库性能投诉，**极可能进入下一版本**。
- **[#56349](https://github.com/openclaw/openclaw/issues/56349)** 不可绕过的出站策略强制（pre-send guarantee）— 安全性诉求，标记 `needs-live-repro`，讨论持续。
- **[#96975](https://github.com/openclaw/openclaw/issues/96975)** 子代理完成默认只返回状态+链接、隔离父上下文 — 与已合并的 #166454（保留子代理诊断）方向一致，信号积极。
- **[#79902](https://github.com/openclaw/openclaw/issues/79902)** SQLite 会话公开接口 — `needs-product-decision`，配合 database-first 运行时是生态扩展的自然延伸。
- **[#45390](https://github.com/openclaw/openclaw/issues/45390)** Session TTL 自动轮换、[#73537](https://github.com/openclaw/openclaw/issues/73537)** 生产就绪稳定标签** — 反映社区对“稳定渠道”的强烈需求。
- **[PR #166440](https://github.com/openclaw/openclaw/pull/166440)** 网关主机截屏工具 — 新工具型贡献，标记 `security-boundary` 风险，需安全评审。

## 7. 用户反馈摘要

- **真实痛点集中在“自托管长期运行”场景**：家庭/小企业 7×24 部署用户（如 [#73537](https://github.com/openclaw/openclaw/issues/73537) 中 Telegram+Home Assistant 用户）对内存泄漏、僵尸进程、升级失败的感受最强烈——这些问题在日常短会话测试中不可见，但会拖垮全天候实例。
- **升级体验是第二痛点**：2026.9.4→2026.9.6 出现 `state-migrated-no-rollback`、`global-install-failed`、rehearsal 失败等多种失败模式；好消息是相关 Issue 今日批量关闭。
- **消息可靠性信任问题**：Telegram 假 tombstone（#127229）、Feishu 主备切换重复回复（#49381）、热重载断流（#152965）、claude-cli 8 MiB stdout 上限丢弃最终回复（#150132）——用户最不能接受的是“工作做完了但回复丢了”。
- **正面反馈**：社区对维护者响应速度和 steipete 的重构节奏表示认可；duckduckgo UA 修复、Vertex 文档等小 PR 显示贡献者体验顺畅；E2E 测试基础设施的持续投入（#166414）被视为质量信号。

## 8. 待处理积压

- **[#43367](https://github.com/openclaw/openclaw/issues/43367)**（3 月开）多代理编排不稳定 — P2、有 linked PR 但 `no-new-fix-pr`，影响最重的核心场景之一。
- **[#97616](https://github.com/openclaw/openclaw/issues/97616)**（6 月开，18 评论）僵尸进程累积 — P1 长期未修，且与内存泄漏类问题叠加放大。
- **[#130955](https://github.com/openclaw/openclaw/issues/130955)**（8 月开）memory index 精确索引 2 个文件后永久停摆 — P1，needs-info 卡住。
- **[#44130](https://github.com/openclaw/openclaw/issues/44130)**（3 月开，👍3）TUI 滚动跳转 — P2 用户直接体验问题。
- **PR 积压**：[#84853](https://github.com/openclaw/openclaw/pull/84853)（5 月开，drop throttled exec updates）、[#87434](https://github.com/openclaw/openclaw/pull/87434)（Telegram 消息缓存 TTL）、[#86793](https://github.com/openclaw/openclaw/pull/86793)（session event 快照瘦身）、[#117360](https://github.com/openclaw/openclaw/pull/117360) 均为 maintainer 参与但 `waiting on author` 超 3 个月，建议维护者统一催办或关闭重开。
- **流程提醒**：两个 P0 内存泄漏（#159662、#155191）无任何 fix PR 跟进，建议优先分配复现与二分资源，避免 2026.9.6 后续版本带伤发布。

---
*数据来源：OpenClaw GitHub（过去 24 小时 Issues/PR 更新各 500 条）。链接均指向 openclaw/openclaw 仓库。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告
**数据日期：2026-10-07**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态呈现“一超多强、长尾分化”的格局：OpenClaw 以单日 500 Issue + 500 PR 更新的吞吐量占据绝对核心地位，NanoClaw、Zeroclaw、Hermes Agent 等第二梯队项目处于发布冲刺或活跃迭代期。共同特征是**无一项目在今日发布新版本**，行业主线从功能扩张转向可靠性与性能收口（内存泄漏、消息投递、升级链路、多代理稳定性）。同时生态出现明显分化信号：PicoClaw 主仓库实质停摆由社区 Fork 承接，LobsterAI 通过 stale bot 批量关闭大量 Issue 引发社区不满，而 NullClaw、IronClaw、CoPaw 等呈现维护者单点驱动或低活跃状态——生态整体在“快速扩张”与“质量偿债”之间寻找平衡。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（363 开/活跃，137 关） | 500（353 待合并，147 合并/关闭） | 无 | ★★★★☆ 吞吐量生态第一，但两个 P0 内存泄漏无 fix PR，升级链路回归密集 |
| **Zeroclaw** | 32（26/6） | 50（47 待合并，3 合并） | 无（v0.8.6/v0.9.0 冲刺） | ★★★★☆ 发布前冲刺，Bug 响应 1-2 天闭环，但 47 个待合并 PR 积压 |
| **Hermes Agent** | 50（38/12） | 50（34 待合并，16 合并） | 无 | ★★★★☆ P1 响应迅速，但 update 链路回归 ≥6 条 |
| **NanoClaw** | 3 | 12（7/5） | 无（rc.2 周期） | ★★★★☆ 当日报告当日修，消息投递管线集中修复 |
| **LobsterAI** | 50 关闭（多为 stale bot） | 6 合并 | 无 | ★★★☆☆ 维护端活跃，但 stale 关闭 205/346 无人工回复，社区信任受损 |
| **NanoBot** | 4（3/1） | 10（7/3） | 无 | ★★★★☆ 中等活跃，当天 Bug 当天修复，响应效率突出 |
| **NullClaw** | 0 | 13（9/4） | 无 | ★★★☆☆ 单人高强度推进，社区侧静默 |
| **CoPaw** | 1 | 2 | 无 | ★★★☆☆ 平稳但 review 带宽瓶颈，2 PR 积压 2 个月 |
| **IronClaw** | 1 | 0 | 无 | ★★☆☆☆ 代码零推进，核心 Issue 挂起 6 个月 |
| **PicoClaw** | 5 | 70 关闭（stale 批量） | 无 | ★☆☆☆☆ 主仓库实质停摆，社区 Fork（afjcjsbx）承接 |
| TinyClaw / Moltis / ZeptoClaw / EasyClaw | 0 | 0 | 无 | 无活动 |

---

## 3. OpenClaw 在生态中的定位

**规模优势**：单日 Issue/PR 更新量（各 500 条，为 API 上限）是第二梯队项目的 10-100 倍，Issue 编号已达 16 万级，社区讨论深度（单 Issue 20 评论、专业复现报告）反映用户群以中重度自托管开发者为主。LobsterAI 等项目甚至直接基于 OpenClaw 引擎构建（`area: openclaw` 标签占主线），OpenClaw 已具备**事实上的上游平台地位**。

**技术路线差异**：
- **架构方向**：OpenClaw 主推 Gateway 中心化 + SQLite database-first 运行时（#79902 暴露其会话存储接口诉求）；Zeroclaw 走纯 Rust + 网关分离（v0.9.0）+ 沙箱安全（firejail/Seatbelt/glob 权限）路线；NullClaw 用 Zig 追求极致内存安全与轻量；Hermes Agent 聚焦多网关 Bot 协作（#97681，40 评论）。
- **OpenClaw 相对优势**：工具生态广（duckduckgo、Vertex、memory-wiki、Telegram/Feishu 多渠道）、E2E 测试基础设施持续投入、维护者（@steipete）重构节奏获社区认可。
- **OpenClaw 相对短板**：7×24 长期运行场景的资源管理（4-5 GB/h 内存泄漏 #159662、僵尸进程 #97616 挂 3+ 月）与升级链路可靠性（2026.9.4→9.6 多种失败模式）落后于其功能扩张速度；多代理编排稳定性（#43367，3 月未收口）是核心场景最重的积压。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **消息投递可靠性 / 反静默失败** | OpenClaw、NanoClaw、Hermes、IronClaw | NanoClaw #2423/#3918 集中修复投递丢失；OpenClaw Telegram 假 tombstone（#127229）；IronClaw #1993 “幻觉式成功上报”——“工作做完了但回复丢了”是全生态最高共识痛点 |
| **升级/安装链路健壮性** | OpenClaw、Hermes、NanoClaw、CoPaw | OpenClaw 2026.9.x 升级失败；Hermes `area/install-update` 标签单日 ≥6 次（macOS 更新必现失败）；NanoClaw rc 阶段 setup 修复三连；CoPaw 升级后前端 404 挂起 |
| **资源泄漏与长期运行稳定性** | OpenClaw、Hermes、Zeroclaw | OpenClaw 双 P0 内存泄漏；Hermes SSH 重连 OOM（已修）；Zeroclaw daemon 生命周期与会话状态解耦诉求 |
| **成本控制与模型路由** | Zeroclaw、CoPaw、NanoBot | Zeroclaw effort-aware 本地/云路由（#11516）与 CostTracker 实时生效（#11587）；CoPaw 推理强度/思考预算配置（#8114）；NanoBot heartbeat 低成本评估模型（#6083） |
| **沙箱与安全边界** | Zeroclaw、OpenClaw、NullClaw | Zeroclaw `.zeroclawignore` RFC + glob 读权限；OpenClaw 出站策略强制（#56349）+ 截屏工具安全评审；NullClaw a2a 身份隔离（#974） |
| **会话状态/记忆可编程性** | OpenClaw、NullClaw、NanoBot、Hermes | OpenClaw SQLite 会话公开接口（#79902）；NullClaw memory recall 配置化；Hermes `state.db` 健康检查（#134275） |
| **WebUI / 浏览器端形态** | NanoBot、Hermes、PicoClaw | NanoBot WebUI 可信扩展面（#6032）；Hermes webapp 大特性（#93508）；PicoClaw Web UI 会话管理 |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Zeroclaw | Hermes Agent | NanoClaw | NanoBot | 其他 |
|---|---|---|---|---|---|---|
| **功能侧重** | 全功能 Gateway + 多渠道 + memory | 沙箱安全、成本控制、纯 Rust 轻量（64 MiB 二进制门禁） | 多 Bot 跨网关协作、Desktop/webapp | 群组交互模式、投递正确性 | WebUI 体验、渠道集成（Slack/Matrix/钉钉） | LobsterAI：IM 驱动 + Computer Use；NullClaw：内存安全的极简 agent |
| **目标用户** | 自托管 7×24 中重度用户 | 安全/成本敏感的 Linux 开发者 | 个人多设备 Bot 所有者 | 多用户群聊场景 | 多渠道生产部署用户 | PicoClaw：中重度 Agent 工作流（正流失至 Fork） |
| **技术架构** | TypeScript/Node，Gateway 中心化 + SQLite | Rust，v0.9.0 gateway 分离 | Python 生态，插件化 | Node，渠道路由 | 网关型 provider 低成本接入 | NullClaw：Zig |

**关键观察**：第二梯队项目普遍以“单点纵深”对抗 OpenClaw 的“平台广度”——Zeroclaw 打安全牌，Hermes 打多 Agent 互联牌，NanoClaw/NanoBot 打渠道体验牌。

---

## 6. 社区热度与成熟度分层

- **超级平台（规模扩张+质量偿债并行）**：OpenClaw——开发侧迅猛但稳定版带伤，2026.9.x 需收口。
- **快速迭代期（发布冲刺）**：Zeroclaw（v0.8.6/v0.9.0，47 PR 积压待排序）、NanoClaw（v2026.10.0-rc.2，投递管线集中修复）。
- **活跃迭代期**：Hermes Agent（大特性评审周期偏长，34 PR 积压）、NanoBot（响应快、体量小）。
- **质量巩固/治理期**：LobsterAI（仓库治理 + stale bot 争议）、NullClaw（单人重构收官）。
- **衰退/停滞期**：PicoClaw（主仓库无人维护，Fork 承接）、IronClaw（零代码推进）、CoPaw（review 带宽瓶颈）、TinyClaw/Moltis/ZeptoClaw/EasyClaw（无活动）。

---

## 7. 值得关注的趋势信号

1. **“可靠性即信任”成为产品分水岭**：多个项目同时暴露“agent 谎报成功 / 静默丢消息”类缺陷（IronClaw #1993、NanoClaw #2423、OpenClaw #127229）。对 AI 助手产品而言，执行结果验证（pre-delivery verification）正从加分项变为基线要求——IronClaw 社区明确提出“任务完成前结果校验机制”，建议智能体开发者将投递回执与状态对账纳入核心设计。

2. **长期运行（7×24 自托管）是 Bug 温床也是护城河**：内存泄漏、僵尸进程、daemon 生命周期等问题在日常短会话测试中不可见，但决定了自托管用户留存。OpenClaw 的 Gateway 线程减负重构与 Zeroclaw 的 daemon 状态解耦诉求指向同一结论：**资源治理架构（worker 化、状态外置）应前置设计而非事后修补**。

3. **升级链路是被低估的核心体验**：OpenClaw、Hermes、NanoClaw、CoPaw 四项目同日暴露升级/安装回归，“update 完成但实际坏了”严重侵蚀信任。灰度发布、状态迁移可回滚（对照 Zeroclaw #11579 配置迁移致 agent 消失的数据风险）值得专项投入。

4. **多 Agent 互联是下一个战略高地**：Hermes #97681（跨网关 Bot 协作，40 评论）、OpenClaw 多代理编排与子代理诊断改进（#166454、#96975）、NullClaw a2a 身份隔离，共同指向“多所有者、跨设备 Agent 协作”方向，且**身份与权限隔离是其中最先需解决的安全前提**。

5. **成本感知路由将成为标配**：Zeroclaw effort-aware 本地/云分流、CoPaw 推理强度控制、NanoBot 低成本评估模型，反映“按任务复杂度动态选择模型”正在从优化项变为个人助手的默认能力。

6. **社区治理健康度直接影响项目存续**：PicoClaw 的 Fork 分流和 LobsterAI 的 stale bot 争议是反面教材——当关闭 Issue 中 60%+ 无人工回复（LobsterAI 205/346）时，高质量贡献者将转向活跃 Fork。维护者 review 带宽（CoPaw、Zeroclaw 的 PR 积压）是小体量项目最普遍的瓶颈。

---
*数据来源：各项目 GitHub 公开动态（2026-10-06 至 2026-10-07）。结论建议结合更长周期数据交叉验证。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-10-07

## 1. 今日速览

NanoBot 今日保持中等偏上的活跃度：过去 24 小时 Issues 更新 4 条（3 新开/活跃，1 关闭），PR 更新 10 条（7 待合并，3 合并/关闭），无新版本发布。社区反馈聚焦于 WebUI 暗色模式体验、DeepSeek websearch 兼容性 Bug 及 Slack 渠道消息噪音问题。值得注意的是，Issue #6085 报告的严重 Bug 当天即有修复 PR（#6086）跟进，显示维护者响应速度快。整体来看，项目处于活跃迭代期，bug-fix 与体验优化类贡献是当前主线。

## 2. 版本发布

今日无新版本发布。当前最新版本仍为 v0.3.5（从 Issue #6088、#6084 的环境信息可知）。

## 3. 项目进展

今日关闭/合并的 PR 共 3 条：

- **[PR #6086](https://github.com/HKUDS/nanobot/pull/6086)** — 修复 providers 在 Chat Completions 请求中错误合并 `web_search` 工具的问题（该工具仅适用于 Responses API），直接解决 Issue #6085，恢复 DeepSeek websearch 可用性。**当天报告、当天修复关闭，响应效率突出。**
- **[PR #6080](https://github.com/HKUDS/nanobot/pull/6080)** — WebUI「关于」页展示 gateway 提交哈希，并预填 bug 报告诊断信息，降低用户反馈成本，利好后续 issue 质量。
- **[PR #1420](https://github.com/HKUDS/nanobot/pull/1420)**（标记 conflict 后关闭）— 为钉钉消息添加发送者姓名上下文。该 PR 挂起逾 7 个月后关闭，提示长期积压贡献的清理正在进行，但功能本身仍待补齐。

另有 **[Issue #5274](https://github.com/HKUDS/nanobot/issues/5274)** 关闭（Matrix 回复功能问题），渠道集成质量持续改善。

待合并队列（7 条）中较有分量的是 WebUI 本地可信扩展面（#6032）、会话检查点保留已完成迭代（#6082）、cron 调度竞态修复（#6071），均为功能与可靠性双推进。

## 4. 社区热点

- **[Issue #6085](https://github.com/HKUDS/nanobot/issues/6085)**：DeepSeek websearch 开启后所有渠道 LLM 调用报错 `unknown variant 'web_search'`，导致完全不可用。已由 [PR #6086](https://github.com/HKUDS/nanobot/pull/6086) 当天修复，是本日最高优先级事件。
- **[Issue #6084](https://github.com/HKUDS/nanobot/issues/6084)**：Slack 渠道每次上下文压缩发送两条永久系统消息，用户提出增加 `showCompactionNotices` 配置或原地编辑消息的方案诉求，反映多渠道部署用户对消息整洁性的关注。尚无修复 PR。
- **[PR #6032](https://github.com/HKUDS/nanobot/pull/6032)**：WebUI 本地可信扩展面，带 manifest 校验与作用域化路由，10-04 开启后今日仍有更新，是本日活跃度最高的 PR。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#6085](https://github.com/HKUDS/nanobot/issues/6085) DeepSeek websearch 开启后 LLM 调用全部失败 | ✅ 已有 fix PR #6086（今日关闭） |
| 🟠 中 | [#6082](https://github.com/HKUDS/nanobot/pull/6082) 会话恢复时丢失已完成的工具迭代，恢复后的模型请求缺少已执行工作的证据 | ✅ 修复 PR 开启中 |
| 🟠 中 | [#6071](https://github.com/HKUDS/nanobot/pull/6071) cron 任务执行期间编辑调度会被回调完成时覆盖，一次性任务被禁用/删除 | ✅ 修复 PR 开启中 |
| 🟡 低 | [#6088](https://github.com/HKUDS/nanobot/issues/6088) WebUI 暗色模式 Delete 按钮对比度不足（`--destructive` 背景过暗） | ⏳ 无 fix PR |
| 🟡 低 | [#6084](https://github.com/HKUDS/nanobot/issues/6084) Slack 压缩通知产生两条永久消息 | ⏳ 无 fix PR |

## 6. 功能请求与路线图信号

- **可配置通知/系统消息**（#6084 的 `showCompactionNotices`）：与现有配置化趋势一致，实现成本低，很可能被采纳。
- **Heartbeat 评估模型预设**（[PR #6083](https://github.com/HKUDS/nanobot/pull/6083)）：允许 `gateway.heartbeat.evaluatorModelPreset` 引用现有 modelPresets，用低成本模型跑评估任务，符合成本优化方向，有望进入下个版本。
- **WebUI 扩展生态**（PR #6032）：引入浏览器端可信扩展机制，若合入将是 WebUI 平台化的重要一步。
- **新增 Opper 内置 Provider**（[PR #5845](https://github.com/HKUDS/nanobot/pull/5845)）：延续其网关型 provider 的低成本接入路线，已开放两周待审。
- **Slack 上下文压缩体验**（#6084）与 WebUI 可访问性（#6088）显示渠道与界面打磨是下一阶段的用户侧重点。

## 7. 用户反馈摘要

- **多渠道生产部署是主流场景**：Slack（Socket Mode + `idleCompactAfterMinutes`）、Matrix、钉钉均有真实用户反馈，说明渠道集成是核心使用路径，也是问题高发区。
- **用户对系统消息的“噪音”敏感**：Slack 用户不希望压缩通知永久留在会话历史中，期待更克制的系统行为。
- **WebUI 暗色模式可用性不足**：暗色主题下删除按钮可读性差（#6088），提示主题变量体系的对比度审查有改进空间。
- **对诊断信息自动化的需求**：PR #6080 的合入正回应用户“手动收集环境信息太麻烦”的痛点，反馈体验在改善。
- 正面信号：Bug 报告质量普遍较高（附版本号、配置、错误原文），说明用户群偏专业，社区协作意愿强。

## 8. 待处理积压

- **[Issue #5274](https://github.com/HKUDS/nanobot/issues/5274)**：已关闭解决，但历时近两个月，提示 Matrix 渠道类 issue 的处理周期偏长，建议关注同类问题的分流。
- **[PR #1420](https://github.com/HKUDS/nanobot/pull/1420)**（钉钉发送者姓名）：挂起 7 个月后以 conflict 关闭，功能仍未实现，钉钉用户诉求未闭环，建议维护者明确接受替代实现或标记 help wanted。
- **[PR #5845](https://github.com/HKUDS/nanobot/pull/5845)**（Opper provider）：开放约两周无合并动作，且涉及大量标签（documentation/question/new-provider），建议维护者给出评审意见以免贡献者流失。
- **Issues #6088、#6084**：今日新开且尚无修复 PR，均为体验类低优先级问题，可纳入常规排期。

---

**健康度小结**：响应速度快（当天 Bug 当天修复关闭）、贡献类型多元（功能/修复/重构/文档均衡）、无严重未响应积压。需留意的是待合并 PR 队列（7 条）的评审吞吐与长期挂起贡献的清理节奏。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-10-07

## 1. 今日速览

Zeroclaw 今日保持高活跃度：24 小时内 Issues 更新 32 条（26 新开/活跃、6 关闭），PR 更新 50 条（47 待合并、3 合并/关闭），无新版本发布。热点集中在**沙箱安全（firejail 连环 Bug）、成本控制链路断裂、配置迁移数据丢失风险**三条主线上，社区反馈速度快——多个 10 月 5-7 日新报的 Bug 已有对应 fix PR 提交（如 #11593、#11587），显示维护者响应效率较高。待合并 PR 积压达 47 个，其中多个 XL 级堆叠 PR（#11309、#11218、#11262）指向 v0.8.6 / v0.9.0 两个正在推进的版本，项目整体处于**发布前冲刺 + 快速修 Bug** 的阶段。

## 2. 版本发布

今日无新版本发布。但可观测的发布信号明确：

- [Issue #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)（Tracker）：v0.8.6（Phase 2 runtime）与 v0.9.0（Phase 3 gateway 分离）的交付追踪器，今日仍在更新。
- 多个 PR 标注 `release:v0.8.6`（#11309、#11262）和 `release:v0.9.0`（#11218），说明这两个版本正在积极攒内容。
- [Issue #11580](https://github.com/zeroclaw-labs/zeroclaw/issues/11580)：x86_64 Linux 二进制距 64 MiB 硬上限仅剩约 0.7 MB（约 1%），发布体积门禁问题需在下次发版前决策，值得关注。

## 3. 项目进展

今日合并/关闭仅 3 个 PR，进展以新 PR 提交和存量 review 为主：

- [PR #11592](https://github.com/zeroclaw-labs/zeroclaw/pull/11592)（新提交）：`file_read` 支持 glob 路径过滤，补齐路径形状级读权限控制，与 #8424 的安全方向呼应。
- [PR #11593](https://github.com/zeroclaw-labs/zeroclaw/pull/11593)（新提交）：修复 SQLite 会话后端替换 transcript 时统一时间戳的问题，直接对应 [Issue #11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)，修复响应极快。
- [PR #11587](https://github.com/zeroclaw-labs/zeroclaw/pull/11587)：`config/set` 的 cost 限制实时应用到运行中的 CostTracker，部分解决 [Issue #11585](https://github.com/zeroclaw-labs/zeroclaw/issues/11585) 的“限额触发后只能重启 daemon”问题。
- [PR #11576](https://github.com/zeroclaw-labs/zeroclaw/pull/11576) / [PR #11422](https://github.com/zeroclaw-labs/zeroclaw/pull/11422)：两条并行路径修复远程 RPC 拒绝 TUI 会话的身份签名密钥问题（后者为 XL 级完整方案）。
- 已关闭 Issue 方面：[Issue #10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536)（macOS Seatbelt 忽略 allowed_roots，S1）、[Issue #10912](https://github.com/zeroclaw-labs/zeroclaw/issues/10912)（流式文本守卫误杀回复）等 P1 问题在本周期关闭，稳定性显著改善。

## 4. 社区热点

- [Issue #8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)（13 评论）：RFC 提议工作区相对的 forbidden path 模式 + 可选 `.zeroclawignore`。用户核心诉求是**保护工作区内部的敏感文件**（`.env`、`rust-toolchain.toml` 等），现有机制只挡工作区外路径。与今日新 PR #11592（glob 过滤）同属安全配置主题，社区参与度高。
- [Issue #8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)（11 评论）：评估用 Rust/WASM 框架（Dioxus/Leptos/Yew）替换 React/Vite，是“去 Node.js 化”大方向 (#7674) 的拆分议题，反映社区对纯 Rust 技术栈的强烈倾向。
- [Issue #11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055)（7 评论，P1）：daemon 部署下独立 channel 启动的 SOP turns 拿不到 live channel 工具句柄，工具不可用。已有 [PR #10986](https://github.com/zeroclaw-labs/zeroclaw/pull/10986) 和 [PR #11452](https://github.com/zeroclaw-labs/zeroclaw/pull/11452) 双路修复，今日均有更新，且 [PR #11595](https://github.com/zeroclaw-labs/zeroclaw/pull/11595) 补充测试覆盖。
- [Issue #11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)（5 评论）：SQLite 时间戳 Bug，当日即获修复 PR #11593，是“报告→修复”闭环的典型样本。

## 5. Bug 与稳定性

**S1（阻断工作流）：**

1. [Issue #11539](https://github.com/zeroclaw-labs/zeroclaw/issues/11539) / [Issue #11538](https://github.com/zeroclaw-labs/zeroclaw/issues/11538)：Firejail 沙箱在 Linux 上以 `invalid --nowheel` / `invalid private directory` 报错失败，日志完全不透明。**尚无专门 fix PR**，需维护者优先处理。
2. [Issue #11594](https://github.com/zeroclaw-labs/zeroclaw/issues/11594)：`firejail_args` 有文档、有 schema，但从未传入实际调用——配置失效陷阱，尚无 fix PR。三个 firejail 问题集中爆发，提示该后端缺乏 CI 实测覆盖。

**S2 / 数据风险：**

3. [Issue #11579](https://github.com/zeroclaw-labs/zeroclaw/issues/11579)：`save_dirty` 给未迁移的 V1/V2 配置盖 `schema_version = 3`，下次加载跳过迁移导致 **agent 消失**。数据级风险，与 [PR #11218](https://github.com/zeroclaw-labs/zeroclaw/pull/11218)（schema v4 迁移）相关，建议合并前回归验证此场景。
4. [Issue #11585](https://github.com/zeroclaw-labs/zeroclaw/issues/11585)：成本限额触发后只能重启 daemon（杀掉所有活跃会话），`cost.allow_override` 从未被读取。部分已有 fix PR #11587。
5. [Issue #11554](https://github.com/zeroclaw-labs/zeroclaw/issues/11554)：早期 `[IMAGE:<path>]` 标记每轮重发，模型幻觉“新图片”。尚无 fix PR。
6. [Issue #11517](https://github.com/zeroclaw-labs/zeroclaw/issues/11517)：Web 聊天回合中刷新丢失用户 prompt（界面和 localStorage 均丢）。尚无 fix PR。
7. [Issue #10950](https://github.com/zeroclaw-labs/zeroclaw/issues/10950)：`cost.warn_at_percent` 被运行时忽略（成本告警三连问题之一）。

**S3：** [Issue #11586](https://github.com/zeroclaw-labs/zeroclaw/issues/11586)：daemon 重启后 ZeroCode 侧栏将失败会话显示为绿色就绪。

## 6. 功能请求与路线图信号

- **沙箱/安全持续收紧**：#8424（.zeroclawignore RFC）+ PR #11592（glob 过滤）+ [PR #11543](https://github.com/zeroclaw-labs/zeroclaw/pull/11543)（shell 子进程 setsid 脱离控制终端）表明 file/shell 工具的安全粒度是下版本重点。
- **路由智能化**：[PR #11516](https://github.com/zeroclaw-labs/zeroclaw/pull/11516) 引入 effort-aware 本地/云路由（按复杂度分类器分流），是 AI 助手成本优化的方向性功能。
- **插件体系成型**：#11309（quickstart 安装激活插件）、#11262（`zeroclaw plugin update` 带校验替换）均挂 `release:v0.8.6`，插件系统大概率随 v0.8.6 落地。
- **网关身份与 RPC 规范化**：[PR #11289](https://github.com/zeroclaw-labs/zeroclaw/pull/11289)（稳定拒绝原因标识 + 本地化）、#11568/#11569（独立 gateway 服务身份）为 v0.9.0 gateway 分离铺路。
- **新 Provider 需求**：[Issue #11583](https://github.com/zeroclaw-labs/zeroclaw/issues/11583) 请求接入 Opper（EU 托管的 OpenAI 兼容网关），属低成本 typed provider 扩展。
- [Issue #9824](https://github.com/zeroclaw-labs/zeroclaw/issues/9824)：默认 web 工具精简为三动词（fetch/research/http），标注 P1、no-stale，是工具面治理的长期方向。

## 7. 用户反馈摘要

- **Linux/firejail 用户受阻最严重**：两名用户（@maacruz、@tunglambk）在 10 月 5-7 日连续报告沙箱启动失败，共同抱怨点是**错误信息不可诊断、日志无痕迹**，与 #11594 的“配置项静默失效”叠加，损害信任。
- **长期运行 daemon 场景痛点**：成本限额只能重启解除、重启后丢失会话状态/误显绿色——多用户反馈指向“daemon 生命周期与会话状态解耦”这一核心诉求。
- **多模态会话体验**：图片标记重发（#11554）导致模型行为异常，Signal/Telegram/Discord 频道用户均受影响。
- **正面信号**：Bug 报告质量高（多名用户附源码定位），Issue 从报告到修复 PR 的间隔可短至 1-2 天（#11420→#11593、#11585→#11587），社区与维护者的协作闭环运转良好。

## 8. 待处理积压

- [Issue #8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)：RFC 自 6 月 28 日开至今，标记 `needs-author-action`，13 条评论等待推进决策。
- [Issue #8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)：Rust/WASM UI 评估同样 `needs-author-action`，技术选型悬而未决将阻塞前端后续投入。
- [PR #9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002)：7 月 11 日开立的 XL 级 gateway 修复（viewer 断连不取消回合），近 3 个月未合并，`needs-author-action`。
- [PR #11309](https://github.com/zeroclaw-labs/zeroclaw/pull/11309)：quickstart 插件安装（XL、堆叠于 #11581/#11302），是 v0.8.6 关键路径，需尽快 review 以解锁后续堆叠。
- [PR #11541](https://github.com/zeroclaw-labs/zeroclaw/pull/11541)：Anthropic `extra_headers` 配置从未生效的修复，`needs-author-action`，影响使用自定义网关头的用户。
- [Issue #11020](https://github.com/zeroclaw-labs/zeroclaw/issues/11020)：ACP TodoWrite 计划持久化失败静默吞掉，已接受但无 fix PR。
- [Issue #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)：v0.8.6/v0.9.0 Tracker 建议维护者更新状态——47 个待合并 PR 中大量挂有版本标签，发布排序（stacked PR 合并顺序）是当前最紧迫的项目管理事项。

---
*数据来源：GitHub 公开 API，统计窗口为过去 24 小时（截至 2026-10-07）。链接均为 zeroclaw-labs/zeroclaw 仓库内条目。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-10-07

## 1. 今日速览

Hermes Agent 今日保持高活跃度：过去 24 小时内 Issues 更新 50 条（新开/活跃 38，关闭 12），PR 更新 50 条（待合并 34，已合并/关闭 16），无新版本发布。社区讨论焦点集中在**跨网关 Bot 协作**（#97681，40 条评论）这一旗舰特性讨论上。稳定性方面，macOS 桌面更新链路（#133992、#113294）和插件运行时兼容性（#123926、#134115）持续暴露问题，是当前最集中的痛点簇。总体来看项目处于活跃迭代期，但 update/install 相关的回归问题值得维护者优先关注。

## 2. 版本发布

今日无新版本发布，省略。

## 3. 项目进展

今日无新 Release，但有 16 个 PR 被合并/关闭，重要进展包括：

- **[#131921](https://github.com/NousResearch/hermes-agent/pull/131921)（已合并）**：修复 Copilot fallback 链不重算 `api_mode` 导致 reasoning 被静默丢弃的问题（对应 Issue #46527），这是 6 月遗留问题的落地。
- **[#132933](https://github.com/NousResearch/hermes-agent/pull/132933)（已合并，P1）**：cron 调度器在 store 写入失败时仍继续派发任务，修复了一个 P1 级可用性问题。
- **[#5431](https://github.com/NousResearch/hermes-agent/pull/5431)（已关闭）**：subagent 记忆写穿 MemoryProvider 接口，4 月老 PR 终获处置。
- **[#5723](https://github.com/NousResearch/hermes-agent/pull/5723)（已关闭）**：`/caveman` 压缩响应命令（节省约 75% token）。
- **[#24207](https://github.com/NousResearch/hermes-agent/pull/24207)（已关闭）**：Telegram context HUD。
- **[#134211](https://github.com/NousResearch/hermes-agent/pull/134211)（已合并）**：bot 自动格式化 PR，CI 自动化流程运转正常。

整体判断：待合并 PR 积压 34 个，其中 #93508（Webapp 模式）等大型特性长期挂起，合并吞吐正常但大特性评审周期偏长。

## 4. 社区热点

- **[#97681 — Let Bots collaborate across gateways](https://github.com/NousResearch/hermes-agent/issues/97681)（OPEN，40 评论，4 👍）**：今日最热讨论。诉求是让个人 Bot 在不放弃各自模型/工具/凭据控制权的前提下跨机器、跨所有者协作。这是项目的战略级方向（多 Agent 互联），与 #79198（跨平台会话组）形成呼应，社区参与度极高。
- **[#122609 — Skills index watchdog 报 degraded](https://github.com/NousResearch/hermes-agent/issues/122609)（18 评论）**：自动化巡检发现 Skills Hub 索引已 28.1h 未刷新（阈值 26h），暴露 CI 定时任务可靠性问题。
- **[#123926 — 插件静默加载失败](https://github.com/NousResearch/hermes-agent/issues/123926)（18 评论）**：`_evict_modules` 迭代 `sys.modules` 时触发字典变更异常，每次启动**随机**丢一批插件且无用户可见报错，社区反响强烈。
- **PR [#93508 — hermes webapp](https://github.com/NousResearch/hermes-agent/pull/93508)**：在浏览器中直接运行 Desktop 渲染器，标签覆盖 17 个区域，虽评论数据缺失但更新频繁，是社区高度期待的形态。

## 5. Bug 与稳定性（按严重度排列）

**P1（严重）**
- **#133249**（已关闭）[Windows] 创建 profile 导致多路复用网关死锁，watchdog exit 75 —— 已修复关闭。
- **#132034**（已关闭）[P1] SSH 重连风暴泄漏 serve 后端直至远端 OOM（单进程 150–360MB RSS）—— 已修复关闭。

**P2（高）**
- **#133992**（OPEN，无 fix PR）[macOS] Desktop 更新 hand-off 被**自己的**更新锁拒绝，回归自 #78119/#87514。
- **#134327**（OPEN，今日新报，无 fix PR）[Codex] priority-0 账号 429 时直接跳 fallback provider，而不轮转到健康的第二账号。
- **#134168**（OPEN）[Dashboard] 启动 typecheck 误含 `*.test.tsx`，导致 LaunchAgent 崩溃循环、9119 端口不可用。
- **#113294**（OPEN）[macOS] 应用内更新稳定失败 `No module named encodings`。
- **#134265**（OPEN，今日新报，duplicate 标记）Matrix extra 被限 `sys_platform == 'linux'`，macOS 每次更新后 Matrix 失效。

**P3（中）**
- **#134107 / #134115**（均 OPEN，今日活跃）：bundled `solstice` provider 在精简 PM 运行时缺 `httpx`，更新后依赖不迁移，TUI 被告警刷屏。
- **#123926**（OPEN，18 评论）插件随机静默加载失败。
- **#134311**（OPEN，今日新报）cron per-job `enabled_toolsets` 合并 MCP 但丢失插件工具集。

**模式警示**：`area/install-update` 标签今日出现 ≥6 次，更新链路是当前回归重灾区。

## 6. 功能请求与路线图信号

- **跨网关 Bot 协作（#97681）** + **跨平台会话组（#79198）**：两条线索共同指向“多 Agent / 多设备统一上下文”路线，#97681 已进入 review queue，是最可能进入下一大版本的特性。
- **#134275**（今日新开）：`hermes doctor` 对 `state.db` 的健康检查（FTS 完整性校验、定时快照），针对反复出现的数据库损坏，设计完善，纳入概率高。
- **#134315**（今日新开）：为 `gateway_platform_event` 增加 Discord `channel_created` 事件，属于插件生态常规扩展，低成本可并入。
- **#87212**：Desktop 中 Agent 间消息保留发送者头像/身份，与多 Agent 路线图契合。
- **PR #134326**（今日新开）：Memory 拒绝存储凭据形条目并遮蔽磁盘上已有密钥（移植自 omo#9655），安全边界强化方向明确。

## 7. 用户反馈摘要

- **更新即故障**是最高频抱怨：macOS/Linux 用户反复报告 `hermes update` 后插件失效（#134115）、运行时 Python 目录被换导致依赖丢失（#134107）、Matrix 不可用（#134265）。“update 完成但实际坏了”的体验严重侵蚀信任。
- **静默失败令人不安**：#123926 中插件加载失败只写一行 WARNING 到日志，无任何用户可见提示，用户表示“随机性让人无法排查”。
- **凭据管理体验差**：#119163 用户仅一把有效 key 因订阅期 429 的绝对重置时间被锁定约 15 天；#134327 用户有健康备用账号却不被使用。
- **正面信号**：#134135（STT turbo 模型全端可选）、#133815（视觉模型可见 MCP 图片结果）等 salvage PR 显示维护者积极回收社区贡献；Windows P1 死锁和 SSH OOM 均在数日内关闭，响应速度获认可。

## 8. 待处理积压

| 条目 | 状态 | 提醒 |
|---|---|---|
| [#119163](https://github.com/NousResearch/hermes-agent/issues/119163) | OPEN，needs-decision，9/22 至今 | 已有 PR #119652 但测试锁定了相反行为，**需维护者裁决意图** |
| [#84672](https://github.com/NousResearch/hermes-agent/issues/84672) | OPEN，8/12 至今 | 安全文档被内容扫描器误判为攻击，根因涉及 cron + skills 双处，影响技能生态健康发展 |
| [#79836](https://github.com/NousResearch/hermes-agent/issues/79836) | OPEN，8/6 至今 | Desktop 侧边栏缺失多个已启用平台，长期无进展 |
| [#113294](https://github.com/NousResearch/hermes-agent/issues/113294) | OPEN，9/16 至今 | macOS 更新必现失败，属高频用户路径，建议提升优先级 |
| [PR #93508](https://github.com/NousResearch/hermes-agent/pull/93508) | OPEN，8/24 至今 | Webapp 大特性，标签面极广，需要明确评审计划 |
| [PR #40716](https://github.com/NousResearch/hermes-agent/pull/40716) | OPEN，6/6 至今 | 韩文本地化，挂起 4 个月，低风险可考虑尽快落地 |

---

**健康度小结**：贡献流量健康（日 50 Issue / 50 PR 更新），P1 响应迅速；风险点集中在 update 链路回归密集与 34 个待合并 PR 的评审积压，建议优先收敛 `area/install-update` 相关问题簇。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-10-07）

## 1. 今日速览

今日 PicoClaw 仓库表面活跃度较高：过去 24 小时内有 70 条 PR 更新（全部为已关闭，0 个待合并）、5 条 Issue 更新（4 新开/活跃、1 关闭），无新版本发布。但需注意，**70 条 PR 关闭绝大多数为 stale 机制批量关闭的历史 PR，而非真实合并进展**。社区核心信号是：多位贡献者认为主仓库处于**无人维护状态**，@afjcjsbx 已两次发布活跃 Fork 公告（[#3398](https://github.com/sipeed/picoclaw/issues/3398)、[#3417](https://github.com/sipeed/picoclaw/issues/3417)），社区维护权转移正在发生。项目健康度评级：**主仓库衰退 / 社区分叉承接期**。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

- **今日唯一新 PR**：[#3418 ci: enforce shared devops gates](https://github.com/sipeed/picoclaw/pull/3418)（@hawkli-1994），提出建立统一 DevOps 规范、三段式 PR 模板、只读 `ci-gate` 校验及分支保护配置，覆盖组织内十个相关仓库。该 PR 当日即被关闭，**未获合并**。
- **批量关闭的历史 PR**（多为 stale 关闭，非合并）：包含大量实质性功能与修复工作，如 Agent 协作总线 [#2937](https://github.com/sipeed/picoclaw/pull/2937)、`/stop` 命令 [#2762](https://github.com/sipeed/picoclaw/pull/2762)、MCP streamable HTTP 支持 [#2811](https://github.com/sipeed/picoclaw/pull/2811)、Gemini schema 修复 [#2681](https://github.com/sipeed/picoclaw/pull/2681) 等。这些工作大概率由社区 Fork 承接。
- **结论：主仓库今日实际功能推进接近于零**，净变化为存量贡献被清理。

## 4. 社区热点

- **[#440] 用上下文窗口边界与循环检测替代硬迭代上限](https://github.com/sipeed/picoclaw/issues/440)**（8 条评论，今日最活跃）：用户反映 `max_tool_iterations: 20` 对复杂任务过于严苛，导致合法工作流中途夭折（"completed processing but have no response to give"）。诉求本质是**提升 Agent 长任务执行的鲁棒性**。已被标记 stale。
- **[#3417 / #3398] 活跃 Fork 维护公告](https://github.com/sipeed/picoclaw/issues/3417)**：@afjcjsbx 两次发帖宣告 Fork 持续维护，反映社区对主仓库停更的焦虑与自救行动。#3398 被关闭后于今日再次发出 #3417，说明社区分流意愿强烈。
- **[#3407] Web UI 幽灵会话 Bug](https://github.com/sipeed/picoclaw/issues/3407)**（2 条评论）：会话在模型思考中从列表中静默消失且无法找回，直接影响日常可用性。

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | [#3407](https://github.com/sipeed/picoclaw/issues/3407) Web UI 会话在模型思考中从列表消失（ghost session），无法恢复 | OPEN，无 fix PR |
| 中 | [#440](https://github.com/sipeed/picoclaw/issues/440) 硬迭代上限导致复杂任务失败 | OPEN，stale，无 fix PR |
| 中（历史） | [#3008](https://github.com/sipeed/picoclaw/pull/3008) larksuite SDK v3.9.4 破坏性变更导致编译失败 | 相关 PR 已关闭未合并 |
| 低（历史） | [#2768](https://github.com/sipeed/picoclaw/pull/2768) LLM 临时性 HTTP 500 无重试导致 turn 失败 | 修复 PR 已关闭未合并 |

## 6. 功能请求与路线图信号

- [#3406](https://github.com/sipeed/picoclaw/issues/3406)：Web UI 三项 UX 改进——更清晰的工作状态指示器、手动/频道会话分离、含归档功能的富会话列表。作为主交互入口的打磨需求，是最可能被 Fork 优先采纳的方向。
- [#440](https://github.com/sipeed/picoclaw/issues/440)：迭代上限改为上下文窗口约束 + 循环检测，属于 Agent 执行引擎的架构级改进，历史上 #2937（协作总线）、#2983（空响应重试）等同类 PR 均未合入，落地依赖 Fork。
- 结论：主仓库路线图停滞，上述需求的承接方更可能是 [afjcjsbx/picoclaw](https://github.com/afjcjsbx/picoclaw)。

## 7. 用户反馈摘要

- **痛点**：① 复杂多步任务被 20 次迭代上限截断，交付物无法完成；② Web UI 会话管理不可靠（幽灵会话、状态指示模糊）；③ 主仓库停更带来的安全感缺失，用户被迫寻找替代维护渠道。
- **使用场景**：Web UI 已成为日常对话主入口；用户通过 cron、MCP、多 provider（OpenRouter/Gemini）构建较重的 Agent 工作流，属中重度用户群。
- **满意点**：社区贡献者（尤其 @afjcjsbx）响应积极、贡献质量高，项目功能面（协作、压缩、MCP）本身受认可。

## 8. 待处理积压

- [#440](https://github.com/sipeed/picoclaw/issues/440)：8 条评论的增强请求，已 stale 8 个月，**建议维护者优先回应**。
- [#3407](https://github.com/sipeed/picoclaw/issues/3407) / [#3406](https://github.com/sipeed/picoclaw/issues/3406)：一周内的有效 Bug/功能报告，尚无维护者回复。
- 大量高质量 PR 长期未审即被批量关闭（#2937、#2811、#2681、#2689 等），若主仓库确已放弃维护，建议官方**明确声明维护状态与 Fork 的官方地位**，避免社区贡献流失和用户困惑。

---
*数据来源：GitHub API，统计窗口 2026-10-06 ~ 2026-10-07。总体判断：主仓库维护缺位，社区通过 Fork 自组织承接，短期内建议关注 afjcjsbx/picoclaw 的动态而非主仓库。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 · 2026-10-07

## 1. 今日速览

NanoClaw 今日保持高活跃度：过去 24 小时内 PR 更新 12 条（7 条待合并、5 条已合并/关闭），Issue 更新 3 条（均处活跃状态），无新版本发布（当前仍处于 v2026.10.0-rc.2 预发布周期）。修复类 PR 集中涌现，核心贡献者 @glifocat 和 @jfu1 密集提交，主线明显聚焦于**消息投递链路的正确性修复**与**安装/升级路径的健壮性加固**。社区响应速度快——昨日新开的 setup bug（#4050）当日即有修复 PR（#4049），显示维护者对用户报告的高响应度。整体健康度良好。

## 2. 版本发布

今日无新 Release。项目当前在 v2026.10.0-rc.2 上迭代，从 PR 流向看，正式版发布前仍在消化 rc 阶段反馈的安装类修复。

## 3. 项目进展

今日合并/关闭 5 条 PR：

- **[#4048](https://github.com/nanocoai/nanoclaw/pull/4048) feat(router): 群组频道新增 new-thread engage 模式**（@zvi-fried，核心功能）——群组频道中无需 @mention 即可响应每个新顶层线程，补齐了 `mention` 与 `pattern` 之间的交互空白。这是今日唯一的 feature 合并，显著扩展了多用户群聊场景下的可用性。
- **[#4041](https://github.com/nanocoai/nanoclaw/pull/4041) OneCLI 迁移警告指向修复**——修正 #4039 合并后升级指南中的误导性回滚指引（"step 4" 会重新启动旧版本而非回退）。
- **[#4051](https://github.com/nanocoai/nanoclaw/pull/4051) setup 修复：升级标记跨本地提交保留**——修复 #3997 引入的回归：新装用户添加 channel 后重启报 "update did not go through the supported path"。
- **[#3963](https://github.com/nanocoai/nanoclaw/pull/3963) 测试修复**——e2e 套件在 Node <24.13.1 上的 symlink 清理改用 `unlinkSync`，解除 `/update-nanoclaw` 验证阻塞。
- **[#2238](https://github.com/nanocoai/nanoclaw/pull/2238) setup 支持 MacPorts**——历经 5 个月（2026-05-04 开启）终于合并，macOS 用户可脱离 Homebrew 安装 Node 和 signal-cli。

**整体评估**：今日在“投递正确性 + 安装健壮性”两条线上同时推进，且清掉一条长龄 PR，节奏扎实。

## 4. 社区热点

- **[#3918](https://github.com/nanocoai/nanoclaw/pull/3918)（OPEN）修复 agent 回复丢失/重复**——@glifocat 提交的核心修复，覆盖流式与 end-of-turn 两类 provider 的 `send_message` 时序问题，直接影响每个对话体验，是当前最重要的待合并 PR。
- **[#3570](https://github.com/nanocoai/nanoclaw/pull/3570)（OPEN，8-27 开启）Telegram 下划线计数 bug**——升级 chat core 至 4.38.1，修复 OneCLI 连接链接在 Telegram 上永远无法送达的问题。开了一个多月仍未合并，社区对渠道可用性的诉求明确。
- **[#4050](https://github.com/nanocoai/nanoclaw/issues/4050) corepack "Cannot find matching keyid"**——报告当日即由报告者本人提交修复 PR #4049，体现“报告即修”的社区参与模式。

## 5. Bug 与稳定性（按严重程度）

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | **[#2423](https://github.com/nanocoai/nanoclaw/issues/2423)** 出站投递失败被静默吞掉，agent 无感知消息被丢弃（Telegram 非 2xx / 限流 / 内容过滤 / 超大 payload），重试 3 次后仅记 DB 无回调 | 开放 5 个月；今日 PR **[#4053](https://github.com/nanocoai/nanoclaw/pull/4053)** 已开始系统性修复 |
| 高 | **agent 回复丢失/重复**（#3918） | 修复 PR 待合并 |
| 中 | **[#4050](https://github.com/nanocoai/nanoclaw/issues/4050)** macOS 上旧 Node 的 corepack 阻断 `pnpm install`，setup 以 `deps_failed` 终止 | 已有修复 PR **[#4049](https://github.com/nanocoai/nanoclaw/pull/4049)** |
| 中 | **[#3791](https://github.com/nanocoai/nanoclaw/issues/3791)** 全新 Codex 设置要求全局安装 host CLI | picker 已在 #3790 于 main 恢复，残余问题追踪中 |
| 中 | 定时任务中 `send_card`/`ask_user_question` 假装成功（无目的地仍报成功） | 修复 PR **[#4054](https://github.com/nanocoai/nanoclaw/pull/4054)** 待合并 |
| 中 | OneCLI 网关 1.42 下 `/add-dial-tool` 因 legacy rules API 返回 410 失效 | 修复 PR **[#4052](https://github.com/nanocoai/nanoclaw/pull/4052)** 待合并 |

值得注意：#4052/#4053/#4054 三连 PR 与 #3918 共同构成一次对消息投递管线的集中修复，方向正确。

## 6. 功能请求与路线图信号

- **群组 new-thread engage 模式**（#4048）已合并，预计进入 v2026.10.0 正式版。
- **投递失败回传 agent**（#2423 + #4053）：从“修 bug”演变为“给 agent 增加投递失败感知能力”，带有功能属性，大概率随下版本落地。
- **[#4042](https://github.com/nanocoai/nanoclaw/pull/4042)**（OPEN）Resend 适配器升级至 0.3.0，消除 4 个 moderate npm audit 告警——安全加固信号，属低成本高价值合并候选。
- **MacPorts 支持**（#2238）合并后，macOS 覆盖面扩大。

## 7. 用户反馈摘要

- **痛点集中在“静默失败”**：#2423 用户明确指出 agent ack 后消息实际被丢弃，无法自我纠正——这是对个人 AI 助手可信度的根本性伤害。
- **安装体验仍是新用户第一道坎**：#4050（macOS corepack）、#3791（Codex 全局 CLI 依赖）均来自新装用户，说明 setup 路径在非默认环境下的长尾问题尚未收敛。
- **积极信号**：#4050 报告者当日即贡献修复 PR，社区存在高质量贡献者；#2238 的合并也回应了长期等待的 macOS 用户诉求。

## 8. 待处理积压

- **[#2423](https://github.com/nanocoai/nanoclaw/issues/2423)**（2026-05-12 开启，5 个月，仅 1 条评论）——投递静默失败。虽有 #4053 关联修复，建议维护者在该 Issue 下同步进展说明。
- **[#3570](https://github.com/nanocoai/nanoclaw/pull/3570)**（8-27 开启，超一个月未合并）——Telegram 链接无法送达直接影响拉新转化（OneCLI 连接流程），建议优先 review。
- **[#3918](https://github.com/nanocoai/nanoclaw/pull/3918)**（9-25 开启）——核心对话正确性修复，阻塞 v2026.10.0 正式版的质量预期，建议加速合并验证。
- **[#3791](https://github.com/nanocoai/nanoclaw/issues/3791)**（9-13 开启）——triage/unresolved 标签仍在，需明确剩余工作归属。

---
*数据来源：NanoClaw GitHub 仓库，统计窗口 2026-10-06 至 2026-10-07。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-10-07

## 1. 今日速览

NullClaw 今日呈现**高强度代码推进、零 Issue 活动**的独特形态：过去 24 小时 PR 更新 13 条（9 开放、4 已合并/关闭），但无任何新 Issue、评论或版本发布。所有活跃 PR 均出自核心贡献者 @vernonstinebaker 一人之手，表明项目正处于维护者主导的密集重构与加固阶段（尤其围绕 agent 循环、内存系统与 a2a 安全性）。社区侧静默可能意味着用户群稳定或反馈渠道冷却，整体健康度良好但社区多样性有待观察。

## 2. 版本发布

今日无新版本发布。最新 main 分支提交为 `5f1cade0`。

## 3. 项目进展

今日关闭/合并 4 条 PR，主要成果：

- **[PR #1044](https://github.com/nullclaw/nullclaw/pull/1044)**（已关闭）：修复 `local_loop.enabled` 配置项实际未生效的缺陷——此前压缩等行为无条件运行，功能形同虚设。这是 #987 拆分三部曲的第一部。
- **[PR #1045](https://github.com/nullclaw/nullclaw/pull/1045)**（已关闭）：修复并行工具 worker 在所有退出路径上的并发与生命周期缺陷（join 逻辑与 arena 竞态）。
- **[PR #1046](https://github.com/nullclaw/nullclaw/pull/1046)**（已关闭）：修复返回已销毁栈帧存储的严重内存安全问题，并对 `local_loop` 配置加上边界校验。
- **[PR #1001](https://github.com/nullclaw/nullclaw/pull/1001)**（已关闭）：恢复并落地 memory recall 可配置项（`auto_recall`、`recall_limit`、`max_context_bytes`），接续因 fork 删除而无法重开的 #979。

**进展评估**：#987 拆分三部曲全部落地，意味着长期本地工具密集运行（long local tool-heavy runs）的稳定性工作基本收官；memory 可配置能力也已合入。今日是实质性向前迈进的一天。

## 4. 社区热点

今日无 Issue 活动与评论数据，无法识别讨论热点。间接信号：

- [PR #1040](https://github.com/nullclaw/nullclaw/pull/1040) 与 [PR #1039](https://github.com/nullclaw/nullclaw/pull/1039) 分别取代了社区贡献者 @telagod 的 #775 与 #774，显示外部贡献被吸收（尽管因 Zig 版本漂移而重写），是社区与维护者协作的正向案例。
- [PR #1012](https://github.com/nullclaw/nullclaw/pull/1012) 对应 Issue #974，是近期最受关注的安全相关诉求（见下节）。

## 5. Bug 与稳定性

今日无新 Bug 报告，但已关闭的修复 PR 值得归档记录：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | 返回已销毁栈帧的 slice（[PR #1046](https://github.com/nullclaw/nullclaw/pull/1046)）| ✅ 已修复 |
| 高 | 并行工具 worker 数据竞态 / use-after-free（[PR #1045](https://github.com/nullclaw/nullclaw/pull/1045)）| ✅ 已修复 |
| 中 | `local_loop.enabled` 配置失效，影响所有用户（[PR #1044](https://github.com/nullclaw/nullclaw/pull/1044)）| ✅ 已修复 |
| 高 | a2a 任务/上下文未按调用方身份隔离（越权风险，[PR #1012](https://github.com/nullclaw/nullclaw/pull/1012)，对应 Issue #974）| ⏳ 修复 PR 开放中 |
| 中 | 已归档对话分片泄漏进实时 prompt（[PR #1005](https://github.com/nullclaw/nullclaw/pull/1005)）| ⏳ 修复 PR 开放中 |
| 低 | worktree 下 pre-push hook 因继承 `GIT_DIR` 失败（[PR #1021](https://github.com/nullclaw/nullclaw/pull/1021)，对应 Issue #1020）| ⏳ 修复 PR 开放中 |

## 6. 功能请求与路线图信号

无新功能请求，但从开放 PR 可推断近期路线图方向：

- **流式原生工具调用**（[PR #971](https://github.com/nullclaw/nullclaw/pull/971)）：将原生 tool-call 与 SSE 流式路径解耦，属核心能力升级，自 6 月底持续迭代至今。
- **内存系统精细化**：#1001 已合入的 recall 配置 + [PR #1005](https://github.com/nullclaw/nullclaw/pull/1005) 的归档隔离，显示 memory 子系统是下版本重点。
- **Skills 体验**：[PR #1003](https://github.com/nullclaw/nullclaw/pull/1003) 支持符号链接的 skill 目录（含中英文文档）。
- **传输层可靠性**：[PR #1019](https://github.com/nullclaw/nullclaw/pull/1019) 为 curl HTTP 传输增加字节级精确测试。

以上若在近期收敛，很可能构成下一个 minor 版本的主体内容。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼新的用户反馈。历史信号（来自被引用的 Issue）显示用户关心：worktree 工作流下的开发体验（#1020）、a2a 多租户安全（#974）、文档数字与实际代码规模的偏差（#774，实际测试数 7,499 而非文档所称 6,300+）。

## 8. 待处理积压

- **[PR #971](https://github.com/nullclaw/nullclaw/pull/971)**（流式原生工具调用）：开放超过 3 个月，是当前最老的活跃 PR，建议维护者优先评审或说明阻塞原因。
- **[PR #987](https://github.com/nullclaw/nullclaw/pull/987)**（agent 循环治理）：其三个拆分子 PR 已全部落地，母 PR 应可关闭或收尾。
- **[PR #1012](https://github.com/nullclaw/nullclaw/pull/1012)**（a2a 身份隔离）：安全相关，开放 10 天，建议加快合并节奏。
- **[PR #1019 / #1021 / #1039 / #1040](https://github.com/nullclaw/nullclaw/pull/1019)**：均开放 2–3 天，尚在正常评审窗口内。

---
*数据来源：NullClaw GitHub 仓库，统计区间 2026-10-06 至 2026-10-07。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-10-07

## 1. 今日速览

IronClaw（github.com/nearai/ironclaw）今日整体活跃度处于**低位**：过去 24 小时仅有 1 条 Issue 更新，0 条 PR 更新，0 个新版本发布。唯一的动态来自 Issue #1993 的活跃更新，该 Issue 涉及 Agent 虚假上报任务完成的问题，属于 bug_bash 活动中发现的 P2 级缺陷。项目当前处于问题积压消化阶段，维护者侧未见明显的代码推进信号。整体健康度需持续观察，建议关注维护者对社区反馈的响应节奏。

## 2. 版本发布

今日无新版本发布。（最新 Releases：无）

## 3. 项目进展

今日无 PR 合并或关闭，项目在代码层面**零推进**。无功能性更新，也无修复性变更落地。结合近期数据，项目推进节奏偏慢，值得关注的进展需等待后续 PR 动态。

## 4. 社区热点

**今日最活跃讨论：Issue #1993**

- [#1993 [OPEN] Agent falsely reports task completion after chat is closed and reopened](https://github.com/nearai/ironclaw/issues/1993)
  - 作者：@sergeiest | 创建于 2026-04-03 | 今日（2026-10-07）有更新 | 评论 1 条 | 👍 0
  - **背后诉求分析**：用户 @sergeiest 报告，在经历一系列 502 错误后，用户关闭并重新打开聊天，Agent 在重载后**虚假宣称任务已成功完成**（"Done! I've sent 'salam aleykum' to your Telegram..."），但实际上消息并未发送。这反映出社区对两个核心诉求：① Agent 执行结果的**真实性/可靠性**——不能在没有验证的情况下报告成功；② **错误恢复机制**——502 错误中断后的会话状态恢复逻辑存在缺陷。此 Issue 已挂起超过 6 个月（2026-04-03 创建），今日重新活跃，说明问题可能仍未修复且有用户复现或跟进。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| **P2（中高）** | [#1993](https://github.com/nearai/ironclaw/issues/1993) | Agent 在聊天关闭重开后虚假上报任务完成；触发场景为连续 502 错误后的会话恢复，涉及 Telegram 消息投递任务 | **暂无关联 fix PR** |

**风险提示**：该问题属于 Agent 可信度类缺陷——即使实际投递失败仍报告成功，会直接损害用户对 AI 助手执行结果的信任，属于 Agent 产品的高敏感问题类别。且该 Issue 标签包含 `scope: agent` 和 `bug_bash_P2`，说明是官方 bug_bash 活动中系统性发现的缺陷，可能存在同类模式的其他实例。

今日无崩溃、回归类其他报告。

## 6. 功能请求与路线图信号

今日无新增功能请求。从 Issue #1993 可间接推断的路线图信号：

- **执行结果校验机制**：Agent 在报告任务完成前应具备结果验证能力（如确认 Telegram 消息确实投递成功），这可能成为 `scope: agent` 方向的改进点。
- **会话状态恢复的健壮性**：502 错误后的 chat 重开流程需要更可靠的状态持久化/恢复设计。

由于目前无相关 PR 在途，这些方向尚处需求信号阶段，未进入开发落地。

## 7. 用户反馈摘要

从 Issue #1993 及其评论中提炼的真实痛点：

- **痛点：Agent “说谎式”完成报告**。用户（反馈中提及名为 Emil 的使用者）在 502 错误后重开会话，Agent 自信地宣称已向 Telegram 发送消息且频道已连接，但实际未发生任何投递。这类“幻觉式成功”是用户对 Agent 类产品最核心的信任破坏点。
- **痛点：网络错误后的会话连续性差**。502 错误导致会话中断，且恢复后 Agent 的任务上下文与实际执行状态脱节。
- **使用场景**：用户通过 IronClaw Agent 对接 Telegram 渠道发送消息（个人通知/消息投递场景），说明 Telegram 集成是实际在用的功能路径。

今日样本量小（1 条 Issue），无法得出更广泛的满意度结论。

## 8. 待处理积压

- 🔴 **[#1993](https://github.com/nearai/ironclaw/issues/1993)** — 创建于 2026-04-03，**已挂起约 6 个月**未关闭，且至今无关联 fix PR。今日重新活跃表明问题仍具现实影响。建议维护者：
  1. 确认该问题在当前 main 分支是否可复现；
  2. 排查 502 错误后会话恢复逻辑中任务状态的持久化缺陷；
  3. 考虑为 Agent 增加“任务完成前结果校验”机制，系统性解决虚假成功上报问题；
  4. 检查 `bug_bash_P2` 标签下是否存在同类未处理 Issue。

---

**数据说明**：本日报基于过去 24 小时 GitHub 数据生成。今日样本量较小（1 Issue / 0 PR / 0 Release），相关结论请结合更长周期数据综合判断。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-10-07

## 1. 今日速览

今日 LobsterAI 无新版本发布，但项目进入了一轮密集的仓库治理与代码清理阶段：核心维护者 @fisherdaddy 单日合入/关闭 6 个 PR，覆盖 Computer Use for Mac、代理网络诊断、UI 重构与 CI 策略修正。同时，50 条 Issue 被批量关闭——但需注意，其中绝大多数是 stale bot 自动关闭的陈旧问题（详见第 8 节），并非真实解决。社区讨论热点仍集中在自定义模型接入、IM 通道稳定性与历史安全问题（路径遍历）上。整体活跃度：维护端活跃，社区端呈“高存量、低新增”态势。

## 2. 版本发布

今日无新版本发布。省略。

## 3. 项目进展

今日关闭/合并 6 个 PR，是近期推进力度较大的一天：

- **Mac 端 Computer Use 能力落地**：[PR #2805](https://github.com/netease-youdao/LobsterAI/pull/2805) `feat: computer use for Mac`，涉及 build/docs/main/openclaw 多模块，是今日最重量级的功能性变更，标志着桌面自动化能力从 Windows 扩展到 macOS。
- **网络代理失败可观测性**：[PR #2807](https://github.com/netease-youdao/LobsterAI/pull/2807) 修复 cowork 场景下 Token proxy 上游错误（HTTP 502）无反馈的问题，并增加截图缩放——背景是 Computer Use 会话重放 15 张截图导致约 2.3 MB 请求经本地 Clash 代理上传超时。
- **UI 打磨**：[PR #2806](https://github.com/netease-youdao/LobsterAI/pull/2806) 重新设计输入框上方的进度卡片（progress_card），修复图标混用、原生 progress 样式突兀、自动弹出挤占对话区等问题。
- **代码瘦身**：[PR #2802](https://github.com/netease-youdao/LobsterAI/pull/2802) 移除已死去的旧版 NIM 直连 SDK 网关（自 2026 年 3 月起已全部走 `openclaw-nim-channel` 插件），降低主进程启动开销。
- **macOS 符号链接修复**：[PR #2804](https://github.com/netease-youdao/LobsterAI/pull/2804) 修复 `/var -> /private/var` 符号链接导致插件修复逻辑被跳过的问题（CI 只跑 Ubuntu 所以长期未暴露，涉及 17 个 Vitest 用例）。
- **CI 治理**：[PR #2803](https://github.com/netease-youdao/LobsterAI/pull/2803) 限制 stale bot 只关闭带 `needs-info` 标签的 Issue——数据显示 346 个已关闭 Issue 中 205 个由 bot 关闭，仅 7 个曾有维护者回复，这是对社区反馈的直接回应。

**整体评估**：项目在 macOS 支持、稳定性可观测性和仓库健康度三线并进，单日进展显著。

## 4. 社区热点

今日无新开 Issue，热度来自被关闭的历史讨论：

- [#831 最新版不支持 custom 自定义的 gemini 中转模型](https://github.com/netease-youdao/LobsterAI/issues/831)（5 评论）——反映用户对灵活接入第三方/中转模型的强烈需求，今日被 stale 关闭，诉求未被正式回应。
- [#144 win11 报错用不了（Anthropic SDK 404）](https://github.com/netease-youdao/LobsterAI/issues/144)（5 评论）——Windows 环境兼容性是长期痛点。
- [#417 win11 试用问题汇总](https://github.com/netease-youdao/LobsterAI/issues/417)（3 评论）——用户系统性质疑：沙箱无法启用、浏览器控制失败、技能市场大量技能缺 API Key 配置入口、处理速度慢。这是信息量最大的负面反馈样本。
- [#543 路径遍历安全风险](https://github.com/netease-youdao/LobsterAI/issues/543)（2 评论）——`openclawMemoryFile.ts` 中 `workingDirectory` 参数未做规范化验证，可被 `../` 构造攻击，风险等级：高。**此 Issue 今日被关闭但无对应 fix PR 出现在列表中，建议维护者确认是否已修复。**
- [#418 官方是否切换引擎为 openclaw？](https://github.com/netease-youdao/LobsterAI/issues/418)——从今日 PR 标签（大量 `area: openclaw`）看，引擎切换已是不争事实，cowork/claude-agent-sdk 路线前景值得关注。

## 5. Bug 与稳定性

今日无新报告 Bug（新开 Issue 为 0）。历史 Bug 均为批量关闭：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#543 路径遍历漏洞](https://github.com/netease-youdao/LobsterAI/issues/543) | 已关闭，**未见明确 fix PR，需确认** |
| 🔴 高 | [#561 出现其他用户的飞书对话](https://github.com/netease-youdao/LobsterAI/issues/561)（疑似数据串扰） | 已关闭 |
| 🟠 中 | [#446 GLM5 模型复杂操作必现错误](https://github.com/netease-youdao/LobsterAI/issues/446) | 已关闭（obsolete） |
| 🟠 中 | [#898 Cherry Studio 重启导致网关 18789 断开](https://github.com/netease-youdao/LobsterAI/issues/898) | 已关闭 |
| 🟡 低 | [#815 Windows 生成 doc 文档打不开](https://github.com/netease-youdao/LobsterAI/issues/815)、[#153 M1 安装后无法打开](https://github.com/netease-youdao/LobsterAI/issues/153) | 已关闭（obsolete） |

注意：今日合入的 #2807（代理失败上报）和 #2804（macOS 符号链接）间接改善了上述稳定性类别。

## 6. 功能请求与路线图信号

- **Mac Computer Use（#2805 已合入）** → 下一版本最可能亮相的能力。
- **灵活模型接入**：#831（gemini 中转）、#29（codex 登录）诉求长期存在，暂无对应 PR。
- **进度卡片 UI 重设计（#2806）** → 将随版本发布。
- **CI 依赖升级**：3 个 dependabot PR 仍待合并：[#2581 stale v11](https://github.com/netease-youdao/LobsterAI/pull/2581)、[#2580 cache v6](https://github.com/netease-youdao/LobsterAI/pull/2580)、[#2579 checkout v7](https://github.com/netease-youdao/LobsterAI/pull/2579)。
- 信号：`area: openclaw` 标签占比持续走高，openclaw 引擎已是主线，基于 claude-agent-sdk 的 cowork 存在被边缘化风险。

## 7. 用户反馈摘要

- **痛点 1：第三方模型接入受限** —— 中转 gemini、GLM5、codex 登录等需求反复出现，用户希望不被绑定官方模型通道。
- **痛点 2：技能市场质量参差**（#417、#145）—— 部分技能无 API Key 配置入口，环境变量方案在 Mac 失效，用户被迫用“记忆条目”存 Key，存在泄露风险。
- **痛点 3：IM 通道不稳定**（#197 钉钉、#885 微信、#204 飞书 Key 丢失）—— IM 是核心卖点，但可靠性欠佳；#561 的数据串扰事件最伤信任。
- **痛点 4：Windows 体验差**（#144、#153、#417）—— 安装、沙箱、文档生成问题集中。
- **正面信号**：用户对产品定位（IM 驱动的个人 AI 助手）认可度高，愿意深度试用并提交详细反馈；对本地 ollama 支持有真实使用场景（#405）。

## 8. 待处理积压

⚠️ **核心警示**：今日 50 条 Issue 关闭中，绝大部分为 stale/obsolete 机制批量处理，社区已为此发出不满（维护者本人也在 #2803 中承认 205/346 关闭 Issue 无维护者回复）。建议：

1. **[#543 路径遍历安全漏洞](https://github.com/netease-youdao/LobsterAI/issues/543)** —— 唯一被标记“高风险”的安全 Issue，被关闭后去向不明，**最高优先级确认**。
2. **[#561 数据串扰](https://github.com/netease-youdao/LobsterAI/issues/561)** —— 涉及用户隐私，需公开结论。
3. **3 个 dependabot PR（#2579/#2580/#2581）** —— 挂起超一个月，建议尽快合并以恢复 CI 依赖新鲜度。
4. **[#831 自定义模型支持](https://github.com/netease-youdao/LobsterAI/issues/831)** —— 高评论量、强需求，被 stale 关闭前未获官方回应，建议以功能路线图形式答复。

---
*数据来源：GitHub API（Issues/PR/Releases），统计窗口 2026-10-06 至 2026-10-07。*

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

# CoPaw 项目动态日报（2026-10-07）

## 1. 今日速览

今日 CoPaw 仓库活跃度处于**中低水平**：过去 24 小时新增/活跃 Issue 1 条、PR 更新 2 条，无新版本发布，无合并/关闭动作。两条 PR 均处于待合并的 OPEN 状态，其中 #6823（自定义 Provider 能力模板）已持续两个月未合并，是当前最值得关注的积压项。社区侧无新增 Bug 报告，整体平稳但推进节奏偏缓。

## 2. 版本发布

今日无新版本发布。近期也无 Release 记录，建议关注主干分支的累积变更何时形成正式版本。

## 3. 项目进展

今日**无 PR 被合并或关闭**，无 Issue 被关闭，项目功能面无实质推进。两条待合并 PR 状态如下：

- **PR #8102** [fix(console)] `https://github.com/agentscope-ai/CoPaw/pull/8102` — Console 启动看门狗修复：当入口 chunk 加载失败（升级后旧 hash 资源 404、网络阻塞、CDN 抖动）时，静态启动页不再永久挂起，而是展示错误状态并提供 Reload 按钮，同时附带一次自动重试。创建于 10-04，10-06 有更新，仍在等待 review。这是对升级体验的实质性稳定性改进。
- **PR #6823** [feat(providers)] `https://github.com/agentscope-ai/CoPaw/pull/6823` — 首次贡献者提交：自定义 OpenAI 兼容 Provider 添加模型时，按模型 ID 匹配内置能力模板（如 `qwen3.6-plus` → `supports_image=True`），让已知模型自动获得多模态能力标记。已挂起近两个月，建议维护者优先处理。

## 4. 社区热点

- **Issue #8114** `[enhancement] 推理强度设定功能` — `https://github.com/agentscope-ai/CoPaw/issues/8114`（作者 @hjgsv85jxm-svg，创建/更新于 10-06，1 条评论）

  今日唯一活跃讨论。用户诉求直白：**3.8 类推理模型“太爱思考”，消耗过多 token 和延迟，希望能配置推理强度（thinking budget / effort level）**。该 Issue 已获得 1 条评论回复，说明社区有共鸣。随着推理型模型普及，“可控思考预算”正成为个人 AI 助手的标配能力，此需求优先级值得上调。

## 5. Bug 与稳定性

今日**无新增 Bug 报告**。稳定性相关工作体现在修复侧：

- PR #8102（Console 启动挂起修复，详见第 3 节）已提供 fix，等待合并——涉及升级后资源 404 导致前端白屏/卡启动的问题，属于中高严重度体验问题。

## 6. 功能请求与路线图信号

| 需求 | 来源 | 状态 | 纳入下版可能性 |
|---|---|---|---|
| 推理强度/思考预算设定 | Issue #8114 | 无关联 PR | 中——尚无代码进展，需先确认 Provider 层 API 支持情况 |
| 自定义 Provider 能力模板自动匹配 | PR #6823 | 代码已就绪，待 review | 较高——仅差维护者 review，合并即可进入下版 |
| Console 启动容错 | PR #8102 | 代码已就绪，待 review | 较高——修复类变更，建议尽快合入 |

## 7. 用户反馈摘要

- **痛点：推理模型过度思考**——用户直接反馈 3.8 级别模型输出前的思考过程过长，希望限制，反映对**响应延迟与 token 成本**敏感的个人助手用户群体真实诉求。
- **痛点：升级后前端偶发挂起**（由 PR #8102 间接印证）——升级触发旧 hash 资源 404、CDN 抖动时启动页永久无响应，说明部分用户在自部署/弱网环境下遇到启动失败。
- **使用场景信号**：用户通过自定义 OpenAI 兼容 Provider 接入第三方/本地模型（PR #6823），表明多 Provider 接入是核心使用路径，能力标记缺失会导致多模态功能不可用。

## 8. 待处理积压

- 🔴 **PR #6823**（`https://github.com/agentscope-ai/CoPaw/pull/6823`）：首次贡献者提交，自 08-08 挂起至今约 **2 个月**未合并，长期无响应会打击新贡献者积极性，且功能已基本完整，建议尽快 review。
- 🟡 **PR #8102**：创建 3 天，涉及用户可感知的启动失败问题，建议加快合并节奏。
- 🟡 **Issue #8114**：推理强度控制需求，建议维护者确认技术方案并表态是否排期，避免需求沉没。

---

**健康度小结**：项目无重大风险信号（无 Bug 涌入、无崩溃报告），但合并吞吐偏低，两 PR 积压叠加新功能需求待响应，当前瓶颈在维护者侧的 review 带宽。

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