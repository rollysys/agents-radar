# OpenClaw 生态日报 2026-09-23

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-23 03:52 UTC

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

# OpenClaw 项目动态日报 — 2026-09-23

## 1. 今日速览

OpenClaw 今日保持极高活跃度：过去 24 小时 Issues 更新 500 条（新开/活跃 478，仅关闭 22），PR 更新 500 条（待合并 362，已合并/关闭 138），无新版本发布。核心维护者 @steipete 与 @RomneyDa 今日集中提交了 CI 优化、性能改进与测试加固类 PR（#156158、#156055、#156131 等），显示工程重心在基础设施打磨与 2026.9.x 稳定性收敛。但 Issue 关闭数（22）远低于活跃数（478），大量 P0/P1 级稳定性问题（内存泄漏、WAL 膨胀、消息丢失）持续积压，社区对修复速度的不满情绪在多个高评论 Issue 中可见。整体判断：**贡献活跃度健康，但 bug 修复吞吐与报告量严重失衡，积压风险上升**。

## 2. 版本发布

今日无新版本发布。当前主线版本为 2026.9.5（据 Issue #152961 报告引用的 npm 发布版 ec9c1a1），但该版本已出现 WorkerThread CPU 满载 + RSS 增长的性能回归报告（见第 5 节）。

## 3. 项目进展

今日合并/关闭 138 个 PR（数据未逐条展开，以下为当日活跃的重要方向）：

- **性能优化**：[PR #156055](https://github.com/openclaw/openclaw/pull/156055) `perf(sessions): reuse prepared rows for chat history`（XL，ready for maintainer look）——聊天历史读取复用已准备行，减少 Gateway 主线程同步数据库工作，直接回应长期存在的 event-loop 饱和类投诉（#84983、#138139）。
- **CI 降本**：[PR #156158](https://github.com/openclaw/openclaw/pull/156158) 将受限测试类别路由到 RunsOn Spot，降低 Blacksmith 消耗。
- **测试加固**：[PR #156131](https://github.com/openclaw/openclaw/pull/156131)、[#156127](https://github.com/openclaw/openclaw/pull/156127)、[#155468](https://github.com/openclaw/openclaw/pull/155468) 分别加固 SQLite borrower 生命周期、worktree GC 断言、Control UI 重连连续性 QA。
- **安全修复待审**：[PR #115510](https://github.com/openclaw/openclaw/pull/115510) 在设备认证握手前对 Ed25519 验签输入做边界校验，防止攻击者构造超大 PEM 触发同步密码学解析——P1 安全项，ready for maintainer look，建议优先合并。
- **稳定性修复推进**：[PR #155994](https://github.com/openclaw/openclaw/pull/155994) 修复 Copilot 长 item ID 导致的加密推理内容损坏；[PR #156030](https://github.com/openclaw/openclaw/pull/156030)（已关闭）修复并发新 run 时 `tasks.list` 间歇失败。
- **长期 PR 收敛**：多个 8 月开启的 stale PR（#117074 cron 历史占位符回收、#116677 备份 staging 回收、#118307 Matrix 局部预览保留）仍在等待作者/维护者响应。

整体进展：以性能、测试、安全为主线的质量收敛明显，但高严重度 bug 修复 PR 出量不足。

## 4. 社区热点

1. **[Issue #143524](https://github.com/openclaw/openclaw/issues/143524)（55 评论，P0）**：Windows 单网关环境下 Agent SQLite WAL 无限增长至 2.8 GB，阻塞网关启动，`wal_autocheckpoint=1000` 形同虚设。手动 `wal_checkpoint(TRUNCATE)` 后数日复发。这是今日讨论最热烈的 Issue，涉及发布阻塞级 UX 影响，**尚无 fix PR**，已挂 needs-maintainer-review。
2. **[Issue #91588](https://github.com/openclaw/openclaw/issues/91588)（37 评论，P0）**：Gateway 内存泄漏——RSS 从 350 MB 涨到 15.5 GB，2-3 天被 OOM killer 杀死并进入 launchd 重启循环。自 6 月 9 日开贴至今 3 个半月未修复，是社区对稳定性失去耐心的标志性 Issue。
3. **[Issue #148707](https://github.com/openclaw/openclaw/issues/148707)（15 评论，P1）**：2026.9.4 回归——同会话第二个 run 顶替进行中的 turn 时，回复以 "no active tool authority snapshot" 报错整体丢失，无重试无并行交付。**新近回归且为 9.4 引入**，需优先排查。
4. **[Issue #68596](https://github.com/openclaw/openclaw/issues/68596)（17 评论，👍 8）**：深度推理模型（kimi-k2.5、DeepSeek-R1）长思考触发流式 watchdog 30s 误报，用户强烈要求可配置超时阈值——反映中文模型生态用户的真实痛点。
5. **[Issue #121617](https://github.com/openclaw/openclaw/issues/121617) / [#115546](https://github.com/openclaw/openclaw/issues/115546)（diamond lobster 评级）**：compaction 体系两个深层缺陷——"Already compacted" 守卫把"无可压缩内容"误判为终态失败；CLI-budget 压缩超时在 4.9s 就触发（远低于 180s 预算），大 session 100% 失败并进入 wake 死亡螺旋。compaction 可靠性已成社区最集中的不满主题。

## 5. Bug 与稳定性（按严重度）

**P0**
- [#143524](https://github.com/openclaw/openclaw/issues/143524) SQLite WAL 无限增长阻塞网关启动 — ❌ 无 fix PR
- [#119565](https://github.com/openclaw/openclaw/issues/119565) Codex 原生 hooks 下并发 MCP 调用近线性内存放大，可耗尽宿主 — ❌ 无 fix PR
- [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway 15.5 GB 内存泄漏 + OOM 循环 — ❌ 无 fix PR

**P1**
- [#148707](https://github.com/openclaw/openclaw/issues/148707) 2026.9.4 回归：turn 被顶替导致回复丢失 — ❌ 无 fix PR（needs-info）
- [#136183](https://github.com/openclaw/openclaw/issues/136183) 2026.8.1 回归：exec 派生 ssh 时卡在 banner 交换直至 SIGTERM — ❌ 无 fix PR
- [#131150](https://github.com/openclaw/openclaw/issues/131150) 多账号 Slack socket 模式下网关重启后 DM 全量静默丢弃 — ❌ 无 fix PR
- [#138139](https://github.com/openclaw/openclaw/issues/138139) 大模型目录下 `stableConfigStringify` 递归无缓存导致事件循环饥饿 — ❌ 无 fix PR（fix-shape-clear，可排队修复）
- [#84983](https://github.com/openclaw/openclaw/issues/84983) 单个 cron agent-turn 即可使网关全部聊天通道无响应数分钟 — ❌ 无 fix PR
- [#102534](https://github.com/openclaw/openclaw/issues/102534) cron 调度 timer 在大量超时后永久停摆，重启不恢复 — ❌ 无 fix PR
- [#118185](https://github.com/openclaw/openclaw/issues/118185) 单次模型运行被两个 writer 以不同规则写入 transcript 两次 — ❌ 无 fix PR
- [#152961](https://github.com/openclaw/openclaw/issues/152961)（已关闭）2026.9.5 WorkerThread 吃满一核 + 原生 RSS 增长 — 状态已关闭，建议确认是否真正修复

**已关闭/有 PR 跟进**
- [#94716](https://github.com/openclaw/openclaw/issues/94716) claude-cli 过期 user-agent 导致认证失败 — 已关闭（linked PR）
- [PR #155994](https://github.com/openclaw/openclaw/pull/155994) Copilot 推理密文损坏修复 — PR 开放中
- [PR #137489](https://github.com/openclaw/openclaw/pull/137489) Codex 超长 call_id 规范化 — ready for maintainer look
- [PR #137776](https://github.com/openclaw/openclaw/pull/137776) transcript transform 未保护 `.trim()` 崩溃 — PR 开放中

## 6. 功能请求与路线图信号

- **内存/压缩可靠性**：[#137613](https://github.com/openclaw/openclaw/issues/137613)（CLI 后端 pre-compaction memory flush 被门控禁用）已有对应实现 [PR #138144](https://github.com/openclaw/openclaw/pull/138144)（`memoryFlush.model` 显式覆盖 + fallback 链），**最可能进入下一版本**。[#56781](https://github.com/openclaw/openclaw/issues/56781)（compaction/LCM summaryModel fallback 链）与此同方向，预计配套纳入。
- **上下文管理**：[#22438](https://github.com/openclaw/openclaw/issues/22438) 分层 bootstrap 文件加载已有 linked PR；[#38568](https://github.com/openclaw/openclaw/issues/38568) 系统提示注入上下文窗口百分比，实现成本低，呼声稳定。
- **A2A/多代理**：[#44309](https://github.com/openclaw/openclaw/issues/44309) 单向 dispatch 模式、[#96975](https://github.com/openclaw/openclaw/issues/96975) 子代理完成态与父上下文隔离——均挂 needs-product-decision，需产品拍板而非代码缺口。
- **流式/长思考**：[#68596](https://github.com/openclaw/openclaw/issues/68568) watchdog 超时可配置（👍 8）、[#44965](https://github.com/openclaw/openclaw/issues/44965) 流式重复安全阀——用户诉求强烈，实现面小。
- **生态扩展**：[PR #116016](https://github.com/openclaw/openclaw/pull/116016) Telnyx 官方外部 Provider 注册已 ready for maintainer look，有望随下个版本落地；[#63930](https://github.com/openclaw/openclaw/issues/63930) Anthropic advisor tool 支持。
- **运营信号**：[#73537](https://github.com/openclaw/openclaw/issues/73537) 要求发布附带生产就绪稳定性标签，结合今日 P0 积压状况，建议维护团队正面回应。

## 7. 用户反馈摘要

- **生产部署用户受稳定性折磨**：多 Issue 反映网关需 30-90 分钟重启一次（#131150）、OOM 循环（#91588）、cron 停摆（#102534）——把 OpenClaw 当 7×24 家庭/企业助理跑的重度用户（如 #73537 的 Telegram+Home Assistant 场景）是投诉主力。
- **消息丢失是最伤信任的缺陷**：Slack DM 全量丢弃（#131150）、iMessage 静默丢弃无死信无重试（#112259）、turn 被顶替回复丢失（#148707）——用户反复强调"宁可报错也不要沉默"。
- **Compaction/记忆体系口碑分化**：memorial flush 被禁用（#137613）、dreaming 晋升忽略阈值（#112349）、memory-lancedb 工具注册但不可调用（#84242），让投入记忆功能的用户感到"半成品"。
- **非 Anthropic 模型用户体验差**：MiMo 重复生成（#108379）、DeepSeek/kimi watchdog 误报（#68596）、cron fallback 模型失败（#97335）——开源模型用户是被忽视的群体。
- **正面信号**：报告质量普遍极高（含源码级根因分析），社区工程能力强的用户在自行定位根因并提交 PR（如 #137613 作者同时给出实现 PR），显示核心用户粘性强。

## 8. 待处理积压（维护者关注提醒）

| Issue/PR | 年龄 | 状态 | 呼吁 |
|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) P0 内存泄漏 | ~3.5 个月 | 无 fix PR | 最高优先级，直接影响生产可用性 |
| [#84983](https://github.com/openclaw/openclaw/issues/84983) cron 饱和事件循环 | ~4 个月 | needs-live-repro | 与 #156055 性能方向相关，可协同处理 |
| [#53008](https://github.com/openclaw/openclaw/issues/53008) memoryFlush 阻塞主通道 10+ 分钟 | ~6 个月 | 无 fix PR | 挂 platinum hermit 高评级却长期无动静 |
| [#41165](https://github.com/openclaw/openclaw/issues/41165) Telegram DM 污染主会话 | ~6.5 个月 | linked PR open | PR 已存在，请推进评审 |
| [#55792](https://github.com/openclaw/openclaw/issues/55792) 重启后补拉错过的入站消息 | ~6 个月 | 已标 stale | 高价值可靠性功能，stale 处理会挫伤提议者 |
| [PR #115510](https://github.com/openclaw/openclaw/pull/115510) Ed25519 输入边界安全修复 | ~2 个月 | ready for review | 安全项不应积压 |
| [PR #117074](https://github.com/openclaw/openclaw/pull/117074) / [#116677](https://github.com/openclaw/openclaw/pull/116677) | ~8 周 | stale / waiting on author | 需明确去留，避免僵尸 PR |

**健康度小结**：今日关闭 Issue 仅 22 条 vs 活跃 478 条，比值约 1:22；P0 级（WAL 膨胀、双内存泄漏）均无 fix PR。建议维护团队在推进性能/QA 打磨的同时，设立稳定性专项（内存 + 消息投递可靠性），并优先评审已 ready-for-maintainer-look 的安全与 P1 修复 PR，防止社区信任随积压流失。

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告

**数据窗口：2026-09-23**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入**功能高速扩张与稳定性债务偿还并行的阶段**：以 OpenClaw 为核心的项目群（含 LobsterAI 等下游发行版）占据社区规模与讨论热度高地，但其 P0 级内存泄漏、WAL 膨胀等问题积压表明“7×24 常驻运行”仍是全生态未解的核心命题。第二梯队（NanoBot、Zeroclaw、CoPaw、Hermes Agent）呈现健康的修复吞吐与架构治理并行状态，RFC 密度上升标志着行业正从单 Agent 功能堆叠转向多 Agent 运行时治理。同时生态明显分化：维护停滞项目（PicoClaw、Moltis、ZeptoClaw）依赖机器人维持表象活跃，存在贡献者流失风险。

---

## 2. 各项目活跃度对比

| 项目 | Issue 活跃/关闭 | PR 活跃/合并 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 478 / 22（比值 1:22 ⚠️） | 362 / 138 | 无 | 🟡 活跃度高但修复吞吐严重失衡，P0 积压 |
| **Hermes Agent** | 46 / 4 | 47 / 3 | 无（v0.21.4） | 🟡 新 PR 涌入快，评审积压重（47 待合并） |
| **CoPaw** | 12 / 24 ✅ | 23 / 21 | 无（v2.2.2 在即） | 🟢 关闭>新增，质量收敛期，覆盖率达 73.79% |
| **Zeroclaw** | 19 / 15（关闭率 44%） | 32 / 18 | 无 | 🟢 架构治理活跃，但 S0 安全项待响应 |
| **NanoBot** | 3 / 0 | 13 / 15 | 无 | 🟢 p1 当天出修复，最健康的小型社区 |
| **NanoClaw** | 1 / 1 | 13 / 5 | 无 | 🟢 核心团队主导，路线图（CDSS/Iron Proxy）推进有序 |
| **LobsterAI** | 5 / 0 | 2 / 10 | ✅ 2026.9.22 | 🟢 日级发版 + 当日修复，Issue 处理滞后 |
| **IronClaw** | 0 / 0 | 3 / 0 | 无 | 🟡 社区 PR 待审，维护者带宽存疑 |
| **PicoClaw** | 0 / 2（stale） | 1 / 3（stale） | 无 | 🔴 stale 机器人系统性关闭有效贡献，贡献流失中 |
| **EasyClaw** | 0 / 0 | 0 / 0 | ✅ v1.9.20 | 🟡 交付持续但社区互动为零 |
| **Moltis / ZeptoClaw** | 0 / 0 | 依赖 PR 待审 | 无 | 🔴 仅靠 dependabot 维持，人工静默 |
| **NullClaw / TinyClaw** | — | — | — | ⚪ 无活动 |

---

## 3. OpenClaw 在生态中的定位

**优势：**
- **社区规模与质量断层领先**：单日 Issue 更新 500 条、PR 更新 500 条，约为第二梯队项目（30-50 条）的 10 倍以上；用户报告普遍含源码级根因分析，甚至附带实现 PR（如 #137613 → PR #138144）。
- **生态位类似“上游内核”**：LobsterAI 作为 OpenClaw 发行版存在（修 Windows 网关退出、nsp-clawguard 启动），大量项目的 Issue 编号空间（15 万+）也印证其历史体量。

**技术路线差异：**
- OpenClaw 走**全功能 Gateway 常驻架构**（cron、memory、compaction、多渠道消息），复杂度最高，稳定性债务也最重；
- Zeroclaw 走 **Rust + 架构 RFC 先行**路线（准入控制、投递回执、Agent 间消息原语），治理更前置；
- NanoBot/NanoClaw 走**轻量聚焦路线**（单一渠道体验 + 快速修复），Hermes Agent 侧重桌面端 + A2A。

**核心风险**：Issue 关闭比 1:22、三个 P0 内存/存储问题 3.5 个月无 fix PR，其“生态内核”地位正被社区耐心侵蚀——这正是 Zeroclaw、NanoBot 等替代方案的窗口期。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **上下文压缩可靠性** | OpenClaw（#121617 compaction 守卫误判、4.9s 超时死亡螺旋）、NanoBot（#5849 压缩死锁、#5870 通知骚扰）、CoPaw（#5856 压缩破坏 tool_call 结构） | 压缩是全生态第一共性痛点：预算治理、幂等守卫、用户侧可感知性 |
| **消息投递可靠性（“宁可报错不要沉默”）** | OpenClaw（Slack/iMessage 静默丢弃）、Zeroclaw（#10929 投递回执 RFC）、CoPaw（#7946 QQ 事件重投）、LobsterAI（#986 微信流式缺失） | 死信队列、回执、重试语义 |
| **内存/资源泄漏与 OOM** | OpenClaw（#91588 15.5GB 泄漏、#119565 MCP 内存放大）、Zeroclaw（#10970 资源准入 RFC、#10797 memory 后端并发丢数据） | 常驻进程内存治理、per-agent 资源上限 |
| **模型路由/降级韧性** | CoPaw（fallback chain 已落地）、Hermes（#119780 失败触发档位升级、#119778 预算降档）、LobsterAI（#2745 模型策略恢复）、NanoBot（#5861 tokenizer 预热） | 会话级模型控制 + 自动降级成标配方向 |
| **cron/定时任务可靠性** | OpenClaw（#84983 饱和事件循环、#102534 永久停摆）、NanoBot（heartbeat 三部曲）、Zeroclaw（#10594 静默失败）、Hermes（#119472 /goal） | 定时执行可见性与自愈 |
| **非 Anthropic 模型兼容** | OpenClaw（DeepSeek/kimi watchdog 误报）、LobsterAI（Kimi K3 百万上下文适配）、CoPaw（火山引擎 400） | 开源/国产模型用户是被普遍忽视的群体 |
| **安全加固** | Zeroclaw（#11058 命令豁免旁路、#9392 LINE 绕过）、CoPaw（#7864 路径穿越/提示注入防护）、OpenClaw（PR #115510 Ed25519）、NanoBot（#5866 供应链） | 从“功能安全”转向体系化供应链与准入治理 |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Zeroclaw | NanoBot / NanoClaw | Hermes Agent | CoPaw | LobsterAI |
|---|---|---|---|---|---|---|
| **功能侧重** | 全功能常驻 Gateway（memory/compaction/cron/多渠道） | 架构治理 + WhatsApp/多渠道补齐 | 轻量个人助手 / 企业部署（CDSS） | 桌面端 + A2A + 包管理重构 | Console 体验 + 模型韧性 + 测试覆盖 | OpenClaw 发行版 + 飞书/微信中国 IM 场景 |
| **目标用户** | 重度 7×24 生产用户 | 多 Agent 规模化运维者 | 个人 Telegram/Linear 用户、企业客户 | 开发者桌面用户 | 中文生态 + 企业用户 | 中国企业 IM 用户 |
| **技术架构** | TS Gateway + SQLite/WAL | Rust + RFC 驱动 | TS/Python 轻量栈 | Electron + Python 后端 | TS Console + 插件化 | 上游 OpenClaw + 本地化补丁 |

**关键观察**：LobsterAI 与 OpenClaw 是“发行版—上游”关系，其当日修复的网关重启、Kimi K3 适配实际是在替上游解决中国用户场景问题——这种分层本身是 OpenClaw 生态规模的证明，也是其响应滞后催生的补丁层。

---

## 6. 社区热度与成熟度分层

- **规模巨头·稳定性危机期**：OpenClaw —— 活跃度最高但修复吞吐跟不上报告量，处于“信任透支”边缘。
- **快速迭代期**：LobsterAI（日级发版、当日修复）、NanoBot（p1 当天出 fix）、NanoClaw（CDSS 工作包按计划落地）。
- **质量巩固期**：CoPaw（关闭>新增、覆盖率冲刺至 73.79%、v2.2.2 在即）、Zeroclaw（安全债务清偿 + RFC 治理，但需维护者评审带宽）。
- **高吞吐待消化期**：Hermes Agent（新 PR 涌入快、合并率仅 6%）。
- **维护停滞/风险期**：PicoClaw（stale 机器人关闭有效贡献，含数据竞争与 API Key 丢失高危未修）、Moltis、ZeptoClaw（仅机器人活动）、IronClaw（3 PR 全悬置）。

---

## 7. 值得关注的趋势信号

1. **“可靠性 > 功能”成为用户分水岭**：多项目最高热 Issue 均为消息丢失/静默失败/内存泄漏，而非功能缺失。用户明确表态“宁可报错也不要沉默”（OpenClaw）与“跑很多 Agent 的机器应在延迟上退化而非崩溃”（Zeroclaw #10970）——**投递回执、死信队列、可观测性是下一个必争之地**。
2. **架构 RFC 密集涌现 = 多 Agent 运行时治理前夜**：Zeroclaw 一日 5+ RFC（准入控制、人类交互原语、Agent 间消息），OpenClaw 的 A2A dispatch、Hermes 的 SSE artifact 流式，均指向多 Agent 协作原语标准化。
3. **上下文压缩是共性技术债**：三个项目同日暴露压缩死锁/误判/结构破坏——**带预算治理与幂等守卫的压缩引擎**是明显的开源创业/贡献机会。
4. **模型路由智能化兴起**：Hermes 的失败升档 + 预算降档 + sticky lock 组合，配合 CoPaw 的 fallback chain 落地，预示“成本感知路由”将从功能请求变为标配。
5. **安全从合规转向供应链与准入**：命令豁免旁路、插件目录未签名、路径穿越绕过、Ed25519 边界——agent 执行环境的攻击面正在被社区系统性审计。
6. **stale 机器人是双刃剑**：PicoClaw 的案例警示——自动化清理在维护者缺位时会系统性驱逐高质量贡献者，治理机制设计比机器人配置本身更重要。
7. **对开发者的参考价值**：若选型常驻网关，OpenClaw 生态最大但需自行兜底内存问题；追求治理确定性看 Zeroclaw；中国企业 IM 场景 LobsterAI 响应最快；轻量个人使用 NanoBot 修复闭环最健康。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-09-23

**仓库**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

NanoBot 今日保持高度活跃：过去 24 小时内 PR 更新达 **28 条**（待合并 13 条，已合并/关闭 15 条），Issue 更新 3 条（均为活跃、无关闭），无新版本发布。开发重心集中在**自动上下文压缩的稳定性**、**多渠道（Telegram/Linear）体验优化**以及**工具链与安全性修复**。多位核心贡献者（@wzrayyy、@chengyongru 等）持续高产出，合并节奏快、修复响应及时，项目整体处于健康、快速迭代状态。

---

## 2. 版本发布

今日无新版本发布。多个 p1/p2 级 PR 已合并（如 heartbeat 系列修复、Telegram 流式富文本），可能正在为下一次版本发布做积累。

---

## 3. 项目进展

今日已合并/关闭 15 个 PR，代表性进展如下：

**Heartbeat 系统重大修复落地**（@wzrayyy 的系列工作）
- [#4896](https://github.com/HKUDS/nanobot/pull/4896)（p1）：重写 heartbeat prompt，使其真正执行任务而非仅报告，修复 v0.2.1 cron 迁移引入的回归。
- [#4915](https://github.com/HKUDS/nanobot/pull/4915)（p1）：heartbeat 响应评估可配置化，可禁用 AI 评估直接发送响应。
- [#4959](https://github.com/HKUDS/nanobot/pull/4959)（p1）：Retry-After 延迟增加一秒，避免边界情况下立即再次触发限流。

**Telegram 渠道**
- [#5614](https://github.com/HKUDS/nanobot/pull/5614)：Telegram 私聊支持流式富文本（`sendRichMessageDraft`），群聊保持原有路径。

**Provider / 工具链修复**
- [#5783](https://github.com/HKUDS/nanobot/pull/5783)：不再剥离带 `tool_calls` 的 assistant `content`，并移除无用的兼容开关。
- [#5859](https://github.com/HKUDS/nanobot/pull/5859)：修复布尔型 JSON subschema 导致参数校验崩溃。
- [#5868](https://github.com/HKUDS/nanobot/pull/5868)：修复 PowerShell 下无参数带引号可执行路径无法调用的问题。
- [#5867](https://github.com/HKUDS/nanobot/pull/5867)：正确解码带 BOM 的 UTF-16/UTF-32 文本。

**总体评估**：heartbeat 回归三部曲的合并是今日最大进展，清掉了 v0.2.1 遗留的核心回归；工具链修复覆盖面广（编码、schema、Windows 兼容），稳定性明显提升。

---

## 4. 社区热点

- **[#5870](https://github.com/HKUDS/nanobot/issues/5870)**（p1，评论 3 条，今日最热）：Telegram 中 `Context compacted.` 通知重复出现多次（用户单次会话观察到 6+ 次）。社区关注度高，且**当天即有修复 PR** [#5874](https://github.com/HKUDS/nanobot/pull/5874)（heartbeat 借用用户渠道目的地导致通知泄漏到用户聊天）。响应速度值得肯定。
- **[#5849](https://github.com/HKUDS/nanobot/issues/5849)**（评论 2 条）：自动压缩死锁问题——`summarize_transcript` 无 token 预算保护，历史超限后压缩永远无法恢复。同样已有对应 PR [#5857](https://github.com/HKUDS/nanobot/pull/5857)。

社区诉求核心：**长时间运行的会话中自动上下文压缩可靠性**是当前最大痛点，两个热点 Issue 均围绕此展开。

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | 问题 | 状态 |
|---|---|---|
| P1 | [#5870](https://github.com/HKUDS/nanobot/issues/5870) Telegram 重复压缩通知骚扰用户聊天 | 🔧 已有修复 PR [#5874](https://github.com/HKUDS/nanobot/pull/5874)（待合并） |
| P1 | [#5849](https://github.com/HKUDS/nanobot/issues/5849) 自动压缩无预算保护 → 死锁，长会话不可恢复 | 🔧 已有修复 PR [#5857](https://github.com/HKUDS/nanobot/pull/5857)（待合并） |
| P2 | [#5865](https://github.com/HKUDS/nanobot/pull/5865) WebUI 新建会话首条消息丢失预设模型 | 待合并 |
| P2 | [#5861](https://github.com/HKUDS/nanobot/pull/5861)（p1 标签）回退 tokenizer 冷启动导致首聊 token 估算不准 | 待合并，后台预热方案 |
| P2 | [#5314](https://github.com/HKUDS/nanobot/pull/5314) 部分兼容 provider 嵌套 JSON 参数校验失败（存在冲突标记） | 待合并，⚠️ conflict |

**安全相关**：[#5866](https://github.com/HKUDS/nanobot/pull/5866) 指出 CLI Apps 注册表元数据未签名，存在供应链风险，PR 引入安装来源记录 + registry 漂移 fail-closed，值得关注。

---

## 6. 功能请求与路线图信号

- **[#5869](https://github.com/HKUDS/nanobot/issues/5869)**（enhancement, p2）：请求原生视频输入支持，将渠道视频直接发送给 omni 模型（Qwen3.8、mino-v2.6 等），而非仅保存到磁盘返回路径。当前尚无对应 PR，属于新方向信号——多模态能力扩展可能与项目 AI 助手定位契合，值得纳入路线图评估。
- **[#5871](https://github.com/HKUDS/nanobot/pull/5871)**：Linear 原生 agent UX 大幅增强（OAuth 状态可视化、按钮/附件/推理内容映射），表明**企业集成渠道**是活跃开发方向。
- **[#5873](https://github.com/HKUDS/nanobot/pull/5873)**：原子 JSONL 写入辅助函数去重，代码质量持续治理。

---

## 7. 用户反馈摘要

- **痛点 1 — 长会话压缩体验**：个人用户（Telegram 场景）在长时间对话中被重复的 `Context compacted.` 通知打扰，反映压缩系统对用户侧可感知副作用的控制不足（#5870）。
- **痛点 2 — 长上下文可靠性**：重度用户遭遇压缩死锁后完全无法恢复会话，只能丢弃历史（#5849），说明 token 预算治理需要系统化而非局部补丁。
- **诉求 — 原生多模态**：用户希望视频文件能直接进 omni 模型而非落盘传路径，反映 AI 助手用户对多模态交互的期待在升级（#5869）。
- **正面信号**：问题报告质量高（附日志、可复现分析），且 p1 问题当天即获得社区修复 PR，社区贡献循环运转良好。

---

## 8. 待处理积压

- **[#5314](https://github.com/HKUDS/nanobot/pull/5314)**（p2，8月10日创建，存在代码冲突）：嵌套 JSON 工具参数解码修复，提交后搁置 6 周+ 且标记 conflict，需维护者协调 rebase 或决策。
- **[#5803](https://github.com/HKUDS/nanobot/pull/5803)**（9月17日）：Telegram 三项小改进，功能完整但 6 天未合并，建议推进 review。
- **[#5869](https://github.com/HKUDS/nanobot/issues/5869)**：视频支持请求暂无维护者回应，建议给出 roadmap 判断。

---

**健康度小结**：今日合并 15 PR、p1 问题当天出修复、社区报告质量高——项目处于活跃健康状态。建议优先推进 #5874 / #5857 两个压缩相关修复的合并，并清理 #5314 的长期冲突。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-09-23

## 1. 今日速览

Zeroclaw 今日保持高活跃度：过去 24 小时 Issues 更新 34 条（新开/活跃 19，关闭 15），PR 更新 50 条（待合并 32，已合并/关闭 18），无新版本发布。社区讨论焦点集中在**架构类 RFC 密集涌现**（资源准入控制、人类交互原语、投递回执、Agent 间消息等 5+ 个 RFC）以及 **WhatsApp Web 渠道的快速功能补齐**。同时暴露了多个 S0/S1 级严重问题（安全旁路、内存数据丢失、daemon 渠道注册缺失），需要维护者优先关注。整体来看，项目处于功能高速演进 + 架构治理同步推进的阶段，Issue 关闭率（44%）与 PR 吞吐均健康。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日关闭的 18 个 PR/Issue 中，代表性进展：

- **安全治理修复落地**：[#9392](https://github.com/zeroclaw-labs/zeroclaw/issues/9392)（LINE 群消息绕过 allowlist 与配对握手，P1/security）与 [#9391](https://github.com/zeroclaw-labs/zeroclaw/issues/9391)（审计日志默认启用但零输出，P1）两个安全审计问题今日关闭，安全审计债务明显清偿。
- **Provider 层多项修复关闭**：[#10885](https://github.com/zeroclaw-labs/zeroclaw/issues/10885)（工具返回图片在无关工具调用后丢失）、[#10889](https://github.com/zeroclaw-labs/zeroclaw/issues/10889)（Anthropic 滚动缓存断点在图片块结尾时丢失）、[#10674](https://github.com/zeroclaw-labs/zeroclaw/issues/10674)（历史裁剪策略导致每几轮重裁并破坏 prompt caching，P1）均已关闭——Anthropic provider 的缓存与多模态稳定性显著改善。
- **数据丢失修复**：[#9187](https://github.com/zeroclaw-labs/zeroclaw/issues/9187)（WeChat 同步游标先持久化后入队导致崩溃丢消息，S0）关闭。
- **渠道能力增强**：[#10983](https://github.com/zeroclaw-labs/zeroclaw/issues/10983)（WhatsApp 原生投票 Channel hook）关闭。
- **CI 恢复**：[#11038](https://github.com/zeroclaw-labs/zeroclaw/pull/11038)（忽略 RUSTSEC-2026-0292 imbl-sized-chunks double free）已关闭，困扰 master 与所有 PR 的 Security job 失败问题得到处理。
- **文档治理**：[#11042](https://github.com/zeroclaw-labs/zeroclaw/pull/11042) 记录 replacement-first 集成政策为 standing 文档。

## 4. 社区热点

**评论最多的讨论：**

1. [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)（8 评论，3 月起长期活跃）— 支持 `.well-known` agent-skills 发现索引安装技能。Agent Skills 标准化组织正在推进 URI 规范，Cloudflare/Vercel 已跟进。用户诉求：**技能生态标准化互操作**。
2. JordanTheJet 的 RFC 三连（各 5 评论）：
   - [#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) — 主机级准入控制与 per-agent 资源上限（多 Agent 并发的核心痛点）
   - [#10930](https://github.com/zeroclaw-labs/zeroclaw/issues/10930) — 将 SOP 审批门的持久化机制抽象为“Agent 向人类提问”的通用原语
   - [#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929) — 出站消息投递回执（当前无法知道消息是否到达）
3. [#9972](https://github.com/zeroclaw-labs/zeroclaw/issues/9972)（4 评论）— 清除本地化边界外的硬编码用户可见输出，国际化清理 tracker。
4. [#11027](https://github.com/zeroclaw-labs/zeroclaw/issues/11027)（3 评论）— RFC: Agent 间会话消息（接收方裁量权），多 Agent 协作架构信号。

**趋势解读**：RFC 数量激增且集中在 runtime/架构/安全域，表明项目正从功能堆叠转向**运行时架构治理**，且 `needs-maintainer-review` 标签密集出现，维护者评审带宽是当前瓶颈。

## 5. Bug 与稳定性（按严重程度排列）

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| **S0** | [#11058](https://github.com/zeroclaw-labs/zeroclaw/issues/11058) | `allowed_commands` 中字面出现的高危命令被豁免硬拦截，无审批无日志静默执行 | ⚠️ 新开，尚无 fix PR |
| **S0** | [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) | Markdown memory 后端并发 `store()` 静默丢数据（P1，状态 accepted，今日仍在更新） | 进行中 |
| **P1/S1** | [#10225](https://github.com/zeroclaw-labs/zeroclaw/issues/10225) | ZeroCode RPC 会话无法通过 channel-backed tools 访问已配置渠道，工作流被阻断 | accepted，相关 PR [#10986](https://github.com/zeroclaw-labs/zeroclaw/pull/10986) 开放中 |
| **P1** | [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) | daemon 从未注册 channel-map 工厂，webhook/cron/SOP 回合无渠道可用（今日新开，与 #10225/#10986 同根因） | ⚠️ 尚无 fix PR |
| **P1** | [#10594](https://github.com/zeroclaw-labs/zeroclaw/issues/10594) | cron 任务未执行时零记录，静默失败不可见 | 进行中 |
| S2 | [#10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922) | WhatsApp Web 忽略 `suppress_voice` | ✅ fix PR [#11057](https://github.com/zeroclaw-labs/zeroclaw/pull/11057) |
| S2 | [#11059](https://github.com/zeroclaw-labs/zeroclaw/issues/11059) | WhatsApp Web 忽略 `force_voice` | ✅ fix PR [#11060](https://github.com/zeroclaw-labs/zeroclaw/pull/11060)（堆叠于 #11057） |
| S2 | [#11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036) | OpenCode big-pickle 免费层 403 | needs-repro |

**注意**：#10225 / #10986 / #11055 构成同一“渠道实例不可达”问题簇，建议维护者统一裁决。

## 6. 功能请求与路线图信号

- **WhatsApp Web 成为贡献热点**：今日多个 PR 集中落地——原生投票（[#10988](https://github.com/zeroclaw-labs/zeroclaw/pull/10988)）、群房间创建/邀请（[#10979](https://github.com/zeroclaw-labs/zeroclaw/pull/10979)）、PDF 首页预览（[#10980](https://github.com/zeroclaw-labs/zeroclaw/pull/10980)）、thematic breaks 渲染（[#11054](https://github.com/zeroclaw-labs/zeroclaw/pull/11054)，对应 [#11052](https://github.com/zeroclaw-labs/zeroclaw/issues/11052)）、语音文档（[#11056](https://github.com/zeroclaw-labs/zeroclaw/pull/11056)）。该渠道正快速对齐 Matrix 的能力面。
- **知识图谱记忆层**：[#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053) 提出“KG 从工具升级为一等记忆层”——与 #10797（memory 后端可靠性）共同指向 memory 子系统的下一阶段重点。
- **多模型 Provider Profile**：[#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809)（XL，principal contributor）与 [#10172](https://github.com/zeroclaw-labs/zeroclaw/pull/10172)（provider profile 语义保留）持续推进，provider 配置模型重构有望进入下一版本。
- **ZeroCode 会话根目录显式化**：[#11044](https://github.com/zeroclaw-labs/zeroclaw/pull/11044) 改善本地会话工作区语义。

## 7. 用户反馈摘要

- **多 Agent 运维痛点真实存在**：#10970 的核心诉求是“跑很多 Agent 的机器应该在延迟上退化而不是稳定性上崩溃”，反映生产部署用户已规模化。
- **可靠性黑洞**：投递回执缺失（#10929）、cron 静默不执行（#10594）、审计日志零输出（#9391）被反复提及——用户需要“系统没做事时有证据”。
- **Provider 细节摩擦**：Anthropic 缓存 TTL/断点（#10663、#10889）、OpenCode 免费层 403（#11036）说明 provider 长尾兼容仍是高频支持来源。
- **安全审计用户活跃**：@belumume 逐行核验 HEAD 后提交的审计报告质量高，社区安全参与度是项目健康度的积极信号。
- **满意度正面信号**：WhatsApp 语音收发“已工作多个 release 但文档缺失”（#11056）表明功能在静默交付，用户希望文档跟上。

## 8. 待处理积压

- **[#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)**（创建于 3 月，status:accepted/in-progress）— `.well-known` 技能索引安装，已近 6 个月，需更新进度或拆分里程碑。
- **5 个 RFC 等待 maintainer review**（#10970、#10930、#10929、#11027、#11017），均为 high risk 架构决策，积压将阻塞下游实现工作。
- **XL 级 PR 长期悬置**：[#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391)（8/26 起，delegate 文件系统边界）、[#10446](https://github.com/zeroclaw-labs/zeroclaw/pull/10446)（工具调用信封泄漏到正文，生产实例已复现）、[#9368](https://github.com/zeroclaw-labs/zeroclaw/pull/9368)（7/25 起）— 均处于 needs-author-action/needs-maintainer-review 状态，建议维护者分批推进。
- **S0 安全问题 [#11058](https://github.com/zeroclaw-labs/zeroclaw/issues/11058)** 今日新开且无 fix，建议作为最高优先响应项。

---
*数据来源：GitHub（过去 24 小时）；统计口径见数据概览。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 · 2026-09-23

## 1. 今日速览

Hermes Agent 今日保持高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 46，关闭 4），PR 更新 50 条（待合并 47，已合并/关闭 3），无新版本发布。社区贡献以 bug 修复和功能增强 PR 为主，今日新开 PR 密集（约 20 条），显示外部贡献者生态活跃。热点集中在流式渲染重复、Electron 桌面端崩溃、以及网关配置/密钥管理等问题。整体节奏呈“高吞吐、待审积压”状态，维护者评审压力较大。

## 2. 版本发布

今日无新版本发布。当前主线版本为 v0.21.4（release tag v2026.9.21，git `d3b25b52ad`）。

## 3. 项目进展

今日仅 3 条 PR 合并/关闭，进展主要在“新 PR 涌入”而非落地：

- **#90529**（已关闭）[fix(kanban): isolate and protect linked worktree anchors](https://github.com/NousResearch/hermes-agent/pull/90529) — 8 月开的长期 PR 今日关闭，任务型 worktree 锚定方案未最终合入。
- 待合并队列中值得关注的进展：
  - **#119812** [Onboarding 集成插件目录安装](https://github.com/NousResearch/hermes-agent/pull/119812) — 新用户引导流程可在交接前直接安装目录插件，显著改善首次体验（Linear NS-960）。
  - **#119766** [feat(a2a): SSE 增量 artifact 流式更新](https://github.com/NousResearch/hermes-agent/pull/119766) — 修复 A2A 适配器阻塞式回复问题，实现真正的流式响应。
  - **#102765** [bundles & unified package manager](https://github.com/NousResearch/hermes-agent/pull/102765) — 大型架构级 PR（统一工具安装/依赖/打包/更新器），今日仍在活跃更新，是路线图上最重要的重构之一。
  - **#119472** [feat(cron): /goal 提示走 GoalManager 有界循环](https://github.com/NousResearch/hermes-agent/pull/119472) — 定时任务能力增强。

## 4. 社区热点

1. **[#100573](https://github.com/NousResearch/hermes-agent/issues/100573)（13 评论）** — Linux/Wayland 上 Electron 40.10.2 主进程反复 SIGTRAP（libc++ 越界 `string_view::substr`），已持续 3 周，是热度最高且未解的桌面端崩溃，用户在持续跟进 core dump 分析。
2. **[#118670](https://github.com/NousResearch/hermes-agent/issues/118670)（10 评论）** — 长流式回合（178s、4 次工具调用）实时渲染双份，重启后仅剩一份（DB 只有一份），指向 UI 流层而非持久层，与今日新报的 #119663 同属 streaming 主题，用户对长任务体验的不满集中爆发。
3. **[#119661](https://github.com/NousResearch/hermes-agent/issues/119661)（7 评论）** — Todoist MCP OAuth 因缺少 `code_challenge`（PKCE）失败，阻碍用户接入 MCP 生态。
4. **[#119561](https://github.com/NousResearch/hermes-agent/issues/119561)（5 评论）** — 两个社区插件目录条目导致 CI `pinned-source-validate` 失败，波及所有 fork，反映插件目录供应链校验的治理诉求。

## 5. Bug 与稳定性（按严重程度）

**P2 级：**
- **#100573** Desktop SIGTRAP 崩溃（见上）— 无 fix PR。
- **#118670 / #119663** 流式渲染重复 / 完整流被误判为“中途丢弃”丢弃终块（`agent/chat_completion_helpers.py`，superseded writer 竞态）— 无 fix PR。
- **#119643** 桌面端在高负载主机上 UI 冻结数分钟，1,630 字符回复从未到达 UI — 无 fix PR。
- **#119546** 网关多 profile 复用下 `build_profile_secret_scope()` 不含 provider 密钥，静默 fail-closed — 无 fix PR。
- **#119733** `config.yaml` 中 `${VAR}` 替换对网关平台配置（webhook secret、Teams 凭据）不生效 — 无 fix PR。
- **#119809** Windows Desktop 更新成功后不重启任何 profile 的消息网关（观测静默中断近 13 小时）— 无 fix PR。
- **#119807** 一机一网关布局下 `--replace` 单元 respawn-storm — 无 fix PR。
- **#119681** bare named provider 导致 `reasoning_effort` 被静默丢弃 — 无 fix PR。
- **#119640** `tool_call` 对 JSON 字符串 payload 不尝试修复直接拒绝（单会话 10 次失败）— 有相关修复方向 PR **#119782**（自动修复在 turn recovery 中）。
- **#119814** Codex Responses：`status=failed` 但 output 非空时跳过重试/回退直接结束回合 — 无 fix PR。

**P3 级：**
- **#119661** Todoist MCP OAuth PKCE 缺失。
- **#119658** `migrate_config` 失败步骤被跳过仍写最新版本号，导致迁移永不重跑 — 无 fix PR。
- **#119704** Telegram 平台懒安装在 pip 镜像源上因 `exclude-newer` 隔离 tornado 全部版本而硬失败。
- **#119797** MCP 安装失败后留下半提交的 config/.env 状态。
- **#119627** mem0 `sync_turn` 硬编码 `infer=True`，规模化成本高。
- **#119801** 更新检查失败时桌面端误报“已是最新” — 配套 fix PR **#119802**（认证被动更新检查）。

**已关闭（多为 duplicate）：** #63578（Windows `hermes update` 破坏性四连 bug）、#53187（后台委托结果需重启才显示）、#119334（pane-bridge 请求静默丢弃）、#82563（GNOME 断言失败）。

## 6. 功能请求与路线图信号

今日 @ahrazczzle 集中提出一组智能路由/成本治理提案，且**均附带对应 PR**，采纳概率高：
- **#119780/#119784** 失败触发的模型档位升级 + sticky lock（[issue](https://github.com/NousResearch/hermes-agent/issues/119780) / [PR](https://github.com/NousResearch/hermes-agent/pull/119784)）
- **#119778/#119783** 预算感知的辅助路由降档（`budget.downshift_at`，基于已有 `estimated_cost_usd`）（[issue](https://github.com/NousResearch/hermes-agent/issues/119778) / [PR](https://github.com/NousResearch/hermes-agent/pull/119783)）
- **#119781/#119785** 文件工具 outline 只读模式（[issue](https://github.com/NousResearch/hermes-agent/issues/119781) / [PR](https://github.com/NousResearch/hermes-agent/pull/119785)）

其他信号：
- **#78418** 会话级文件协调（journal + approval + reconcile）今日重新活跃，多 session 并发写冲突是长期痛点，仍在 needs-decision。
- **#119701** 桌面 profile 栏颜色哈希碰撞问题，属 UX 打磨需求。
- **#102765** 统一包管理器持续迭代，预示安装/更新体系将有大改，可能引入破坏性变更。

## 7. 用户反馈摘要

- **痛点集中区：** 桌面端稳定性（崩溃 #100573、冻结 #119643、渲染重复 #118670）是负面情绪最集中的区域；Windows 更新路径 (#63578, #119809) 多次被描述为“破坏性”，用户实际经历了本地提交丢失、网关静默下线十余小时。
- **配置信任危机：** 一批“静默不生效”类问题（`${VAR}` 不展开 #119733、`reasoning_effort` 被丢弃 #119681、`config set` 误报警告 #119810、密钥 fail-closed #119546）表明用户对“配置写了但到底生效没有”缺乏可观测性，是普遍诉求。
- **满意点：** 多数 issue 报告质量极高（附 core dump、时间线、复现步骤），说明核心用户群技术能力强、参与意愿高；cron/goal、memory、skills 等模块有持续的功能性贡献而非只报 bug。

## 8. 待处理积压

- **#100573**（9/1 创建，13 评论，needs-repro）— 桌面 SIGTRAP 崩溃 3 周未定位，热度最高，建议维护者优先分配排查资源。
- **#78418**（8/4 创建，needs-decision）— 多会话文件协调，架构级决策悬置近 2 个月。
- **#102765**（9/4 创建，巨型 PR，多 sweeper 风险标签）— 统一包管理器评审负担重，长期挂起将阻塞安装/更新相关小修（如 #119802/#119795 两个重复的更新检查认证 PR 也应合并方向）。
- **待合并 PR 积压 47 条**，其中 #119472（cron /goal）、#119793（Opus 5.5 mandatory-thinking）等 P2/P3 修复等待评审，建议维护者增加评审节奏以缓解积压。

---
*数据来源：GitHub API（过去 24 小时），统计截至 2026-09-23。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-09-23

## 1. 今日速览

过去 24 小时 PicoClaw 共有 6 条动态：2 条 Issue 关闭、3 条 PR 关闭/合并、1 条 PR 仍待处理，无新版本发布。值得注意的是，今日所有关闭项均带有 `[stale]` 标记，即由 stale 机器人因长期无响应自动关闭，而非维护者审核后的处置——活跃贡献者 @sting8k 于 9 月 8 日集中提交的一批配置安全与 Bug 修复 PR 全部被自动关闭，包括敏感信息过滤数据竞争修复（#3375）和 API Key 静默丢失修复（#3373/#3374）。项目维护响应速度出现明显瓶颈，社区贡献的消化能力是当前健康度的主要风险点。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无人工合并/关闭的 PR，3 条关闭均为 stale 机器人自动操作：

| PR | 状态 | 内容 |
|---|---|---|
| [#3375](https://github.com/sipeed/picoclaw/pull/3375) | stale 自动关闭 | 修复 `Config.sensitiveCache` 懒初始化无同步导致的数据竞争（`sync.Once` 失效） |
| [#3372](https://github.com/sipeed/picoclaw/pull/3372) | stale 自动关闭 | 使 `reaction` 工具可配置（`ToolsConfig` 缺少专用分支与字段） |
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | stale 自动关闭 | QQ 频道增强：支持表情结构解析、语音/图片/视频/文件消息处理与回复 |

**评估：** 这三份 PR 均为有实质内容的社区贡献，尤其 #3375/#3372 是针对真实缺陷的修复，被 stale 关闭属于贡献流失信号，建议维护者重新评估或要求作者重新打开。今日项目功能实质推进为零。

## 4. 社区热点

今日无新增讨论，活跃度整体低迷。可关注仍处 OPEN 状态的：

- **PR [#3370](https://github.com/sipeed/picoclaw/pull/3370)** — 由 Keenable 员工 @ilya-bogin-keenable 提交，为其自家搜索服务新增 `web_search` provider，支持无 API Key 开箱即用。属于厂商主动接入生态的典型信号，但同样被标记 stale，若合并将零成本扩展 PicoClaw 的搜索能力版图。

## 5. Bug 与稳定性

今日无新报告 Bug。两条已关闭 Bug（均为 stale 关闭，**未确认修复**）：

1. **高危** [#3374](https://github.com/sipeed/picoclaw/issues/3374)：`Config.initSensitiveCache` 数据竞争可返回 nil replacer 导致 `FilterSensitiveData` panic —— 有对应 fix PR [#3375](https://github.com/sipeed/picoclaw/pull/3375)（也被 stale 关闭）。
2. **高危（数据丢失）** [#3373](https://github.com/sipeed/picoclaw/issues/3373)：`SaveConfig` 静默丢弃 `model_list` 中第一个之后的所有 `api_key`，并残留指向不存在模型的 `fallbacks` 引用 —— **无对应修复 PR**，属静默数据丢失，建议优先处理。

## 6. 功能请求与路线图信号

- **QQ 频道富媒体支持**（[#1349](https://github.com/sipeed/picoclaw/pull/1349)）：语音/图片/视频/文件双向收发 + Markdown 回退，功能完成度较高，是渠道能力的重要补强，建议重新纳入评审。
- **Keenable 搜索接入**（[#3370](https://github.com/sipeed/picoclaw/pull/3370)）：第三方厂商贡献，成本低、价值明确。
- **reaction 工具可配置化**（[#3372](https://github.com/sipeed/picoclaw/pull/3372)）：小的配置完整性修复。

以上三项若维护者恢复响应，均有条件进入下一版本。

## 7. 用户反馈摘要

从本期 Issue/PR 可提炼的痛点：

- **配置可靠性**：`api_keys` 静默丢失（#3373）直接威胁生产可用性，用户对配置往返不保真（round-trip lossy）问题敏感。
- **并发安全**：敏感数据脱敏路径存在数据竞争并可 panic（#3374），说明有用户在多 goroutine 高并发场景下使用 PicoClaw。
- **工具配置一致性**：文档外的“默认开启”行为（reaction 工具）让用户感到不可控。

## 8. 待处理积压

- **PR [#3370](https://github.com/sipeed/picoclaw/pull/3370)**（Keenable provider，OPEN，9/7 起 16 天无维护者响应）——即将触发 stale 关闭，需尽快评审。
- **Issue [#3373](https://github.com/sipeed/picoclaw/issues/3373)**（API Key 数据丢失，无修复方案）——最需维护者接手的严重问题。
- **PR [#3375](https://github.com/sipeed/picoclaw/pull/3375)、[#3372](https://github.com/sipeed/picoclaw/pull/3372)、[#1349](https://github.com/sipeed/picoclaw/pull/1349)** ——均为被 stale 误关闭的有效贡献，建议主动联系作者重新提交或由维护者接手。

**健康度提示：** stale 机制正在系统性地关闭高质量社区贡献而非加速其消化，若无维护者介入，项目存在贡献者流失与 Bug 积压的螺旋风险。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-09-23

## 1. 今日速览

NanoClaw 今日整体活跃度**中高**：过去 24 小时内 Issues 更新 2 条（1 开 1 关），PR 活动显著（18 条更新，其中 5 条合并/关闭），但无新版本发布。核心团队（@amit-shafnir、@zvi-fried、@moshe-nanoco、@glifocat）集中推进 **CDSS（客户部署自助服务）**、**Iron Proxy 网关栈** 和 **Codex/Claude Code 上游版本同步**三条主线。社区侧有一个关于 `/update-nanoclaw` 自更新机制崩溃的新 Bug 报告（#3869），且已有多个相关修复 PR 在排队，说明 skill 更新链路是当前的薄弱环节。待合并 PR 积压 13 条，评审吞吐压力值得关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

**已合并/关闭（5 条）：**

- [#3863 fix(setup): 在网关 store 使用前注册新安装的 provider contract](https://github.com/nanocoai/nanoclaw/pull/3863)（core-team）— 修复安装向导中 barrel 导入过期导致首次 vault 写入失败的问题，直接关联 [Issue #3862](https://github.com/nanocoai/nanoclaw/issues/3862) 的修复路径。
- [#3861 fix(setup): 记住 image-source 答案，避免 Echo perk 重复询问](https://github.com/nanocoai/nanoclaw/pull/3861) — 安装向导体验打磨。
- [#3865 feat(cdss): Slack 和 Teams 适配器（WP-6b）](https://github.com/nanocoai/nanoclaw/pull/3865) 与 [#3864 feat(cdss): channel credential provider 与实例规范（WP-6a）](https://github.com/nanocoai/nanoclaw/pull/3864) — CDSS 双子 PR 落地，实现“无需重启即可将存储的聊天应用连接变为活跃适配器实例”，是渠道架构的重要一步。
- [#1491 feat: Google Workspace CLI 集成 skill](https://github.com/nanocoai/nanoclaw/pull/1491) — 挂起近 6 个月的社区 PR 最终关闭，带 nonce 确认和审计日志。

**整体评估：** 今日关闭的 5 条 PR 集中在 setup 可靠性和 CDSS 渠道架构，CDSS WP-6a/6b 落地意味着“客户部署自助服务”路线图完成了一个关键工作包；项目向前推进幅度**中等偏上**。

## 4. 社区热点

今日评论互动数据缺失（多数 PR 评论数 undefined），从更新频次和标签密度看：

- **[#3815 refactor(gateway): 集中化 credential gateway contract](https://github.com/nanocoai/nanoclaw/pull/3815)** — 跨 13 个 area 的大型重构，是 Iron Proxy 栈（#3817/#3818）的地基，连续多日活跃，是当前最核心的争议/评审焦点。
- **[#2924 fix(delivery): 剥离 reaction/edit messageId 的 agent-group 命名空间](https://github.com/nanocoai/nanoclaw/pull/2924)** — 7 月开的社区 PR 仍在更新，反映多 agent fan-out 场景下消息路由是社区真实痛点。
- **[Issue #3869](https://github.com/nanocoai/nanoclaw/issues/3869)**（新开）— 用户对 `/update-nanoclaw` 自更新机制可靠性的直接诉求：升级路径一旦断裂，用户无法跟进安全与功能更新。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#3869 update-nanoclaw controller 缺少传递依赖，prepare 崩溃 MODULE_NOT_FOUND](https://github.com/nanocoai/nanoclaw/issues/3869) | OPEN；已有部分修复 PR [#3750](https://github.com/nanocoai/nanoclaw/pull/3750)（只修一个文件，#3869 指出还有三个缺失），**不完整** |
| 🔴 高 | [#3862 Iron Proxy 下 Codex 设备配对无法 vault 登录（过期 provider-contracts barrel）](https://github.com/nanocoai/nanoclaw/issues/3862) | 已关闭，修复 PR [#3863](https://github.com/nanocoai/nanoclaw/pull/3863) 已落地 |
| 🟡 中 | Claude Code ≥2.1.267 静默破坏 resumed agents（系统提示词重放）| PR [#3868](https://github.com/nanocoai/nanoclaw/pull/3868) bump 至 2.1.280 并加防护选项 |
| 🟡 中 | Codex ≥0.147.0 只给 MCP server 约 1 秒启动时间，工具静默缺失 | PR [#3866](https://github.com/nanocoai/nanoclaw/pull/3866) 等待 MCP 启动并显式失败 |

值得注意：两个高优 Bug 都源于**上游 CLI 版本演进导致的兼容性回归**，项目对此响应迅速。

## 6. 功能请求与路线图信号

从活跃 PR 可见的路线图信号：

- **Iron Proxy 网关**：[#3817](https://github.com/nanocoai/nanoclaw/pull/3817)（新增可安装的 Iron Proxy 网关 skill）+ [#3818](https://github.com/nanocoai/nanoclaw/pull/3818)（网关选择与 provider 登录解耦）+ [#3815](https://github.com/nanocoai/nanoclaw/pull/3815)（契约集中化）构成完整特性栈，大概率进入下一版本。
- **CDSS**：WP-6a/6b 已关闭，下一步可能是更多渠道适配器（Signal 修复 [#3837](https://github.com/nanocoai/nanoclaw/pull/3837) 也在 channels 分支排队）。
- **Cursor Agent SDK provider**：[#3356](https://github.com/nanocoai/nanoclaw/pull/3356) 挂起一个月，作为 provider contracts 上的新 provider，仍在路线图内。
- **Codex 0.155.1 升级**：[#3867](https://github.com/nanocoai/nanoclaw/pull/3867) 显式依赖 #3866 先合并，链路清晰。

## 7. 用户反馈摘要

- **升级路径可靠性**：#3869 表明用户依赖 `/update-nanoclaw` skill 自更新，硬编码的 `git archive` 文件列表在上游重构后立即失效——用户诉求是“更新机制不应因上游文件变动而崩溃”。
- **全新安装体验**：#3862/#3861 均来自公开向导（public wizard）的全新安装场景，说明新用户首次上手路径是当前反馈集中区；#3861 的“重复询问”反映向导状态管理细节仍需打磨。
- **Fork 用户诉求**：[#3565](https://github.com/nanocoai/nanoclaw/pull/3565)（fork 保留本地适配器）表明存在维护本地定制的下游用户群体，希望 skill 刷新不覆盖本地修改。
- **多 agent 消息路由**：#2924 长期未合并，反映一平台消息 fan-out 到多 agent 的用户场景未被官方方案覆盖。

## 8. 待处理积压

- **[#2924](https://github.com/nanocoai/nanoclaw/pull/2924)**（7/04 开，约 3 个月）— 修复类 PR，涉及核心 router.ts，建议 core team 评审或给出方向性意见。
- **[#3451](https://github.com/nanocoai/nanoclaw/pull/3451)**（8/22 开，约 1 个月）— update-skills barrel 归属修复，与 #3869/#3750 问题域重叠，建议合并处理。
- **[#3750](https://github.com/nanocoai/nanoclaw/pull/3750)**（9/08 开）— 修复不完整（只覆盖一个缺失文件），需结合 #3869 的三个新缺失模块更新后再合并。
- **[#3356 Cursor provider](https://github.com/nanocoai/nanoclaw/pull/3356)**（8/19 开）— core-team 自有 PR 但长期未动，需确认是否被 gateway 契约重构（#3815）阻塞。
- **[#1491](https://github.com/nanocoai/nanoclaw/pull/1491)** 已关闭但解决方式未明（合并 vs 拒绝），建议维护者在关闭说明中给社区一个交代。

---
**健康度小结：** 项目处于**活跃开发期**，core team 主导度高、上下游依赖响应快；主要风险是 13 条待合并 PR 的评审积压，以及 update/skill 自更新链路反复出问题的结构性缺陷（#3869 / #3750 / #3451 / #3565 同域），建议优先系统性重构 `git archive` 文件列表的维护方式。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报

**日期：** 2026-09-23
**项目：** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

今日 IronClaw 处于**低强度但持续活跃**状态：过去 24 小时内无新开 Issues、无版本发布，但有 **3 个 PR 活跃更新**（全部处于待合并状态，合并数为 0）。活跃贡献来自两位社区成员（@Bortlesboat、@huiq777），工作聚焦于 **Host Runtime 时间算子修复、WebUI IME 输入兼容性以及意大利语本地化**。整体来看，项目处于功能打磨与国际化扩展阶段，社区贡献 pipeline 健康，但今日缺乏维护者侧的合并动作，PR 审核节奏值得关注。

## 2. 版本发布

今日无新版本发布。最新 Releases 列表亦为空，项目近期未通过 GitHub Releases 渠道分发版本，可能采用其他发布方式。

## 3. 项目进展

今日**无 PR 被合并或关闭**，3 个待合并 PR 描述了近期可能的推进方向：

- **[PR #8108](https://github.com/nearai/ironclaw/pull/8108)** — `fix(host-runtime): add builtin.time shift and typed input issues`
  为 `builtin.time` 增加 `operation: "shift"`，支持带符号的秒/分/时/天/周偏移量求和为单个 `TimeDelta` 并应用于输入时间（缺省为 now），输出格式与 `now` 保持一致。同时修复了类型化输入的相关问题。这是对 Host Runtime 时间处理能力的实质性补全。

- **[PR #8107](https://github.com/nearai/ironclaw/pull/8107)** — `feat(webui): add Italian (it) locale`
  新增意大利语作为第 12 个 WebUI 语言（响应 [#7855](https://github.com/nearai/ironclaw/issues/7855) 的请求）。`it.ts` 覆盖完整英文 key 集合，包括两个懒加载的侧边翻译包（设备绑定、检查器），确保无字符串静默回退到英文。本地化工程质量较高。

- **[PR #8092](https://github.com/nearai/ironclaw/pull/8092)** — `fix(webui): preserve IME composition in the chat composer`
  修复聊天输入框对 IME（中日韩等输入法）组合键的处理问题，包括 Safari 中 `isComposing` 误报为 false 的边界情况（keyCode 229），并附回归测试。该 PR 创建于 09-10，今日有更新，说明仍在活跃迭代。

**进展评估：** 三个 PR 均在待审核状态，若全部合并，将在运行时能力、国际化覆盖和 CJK 用户输入体验三个维度带来可感知的提升。

## 4. 社区热点

今日无活跃 Issue 讨论，无评论/点赞数据。相对而言，[PR #8092](https://github.com/nearai/ironclaw/pull/8092) 是三个活跃项中“年龄”最大的（创建于 09-10，存活 13 天），暗示 IME 修复可能是社区期待度较高但审核进度偏慢的一项，建议维护者优先处理。

## 5. Bug 与稳定性

今日无新报告的 Bug/崩溃 Issue。待合并 PR 中包含两项修复：

| 严重程度 | 问题 | Fix PR | 状态 |
|---|---|---|---|
| 中 | `builtin.time` 缺少时间偏移能力、typed input 存在问题 | [#8108](https://github.com/nearai/ironclaw/pull/8108) | ✅ 已有 fix PR，待合并 |
| 中 | WebUI 聊天输入框 IME 组合输入被 Enter-to-send / 命令菜单拦截，影响 CJK 用户 | [#8092](https://github.com/nearai/ironclaw/pull/8092) | ✅ 已有 fix PR（含回归测试），待合并 |

## 6. 功能请求与路线图信号

- **意大利语本地化**（源 Issue [#7855](https://github.com/nearai/ironclaw/issues/7855)）→ 已有实现 [PR #8107](https://github.com/nearai/ironclaw/pull/8107)，**大概率进入下一版本**。项目已支持 12 种语言，本地化是明确的持续投入方向。
- **`builtin.time` 时间偏移算子**（[#8108](https://github.com/nearai/ironclaw/pull/8108)）表明 Host Runtime 内建工具集正在系统性扩展，是 Agent 工具能力路线图的信号。
- Safari IME 兼容性修复（[#8092](https://github.com/nearai/ironclaw/pull/8092)）显示团队对**跨浏览器、跨语言用户基础**的重视。

## 7. 用户反馈摘要

今日无 Issue 评论数据可供提炼。间接信号：

- 意大利语 locale 请求（#7855）说明**非英语用户群体在增长**，且用户愿意主动提出本地化需求。
- IME 修复 PR 的存在表明**东亚语言用户**在聊天输入场景遇到了实际的发送误触问题，属于高频交互痛点。

## 8. 待处理积压

- **[PR #8092](https://github.com/nearai/ironclaw/pull/8092)**（IME 修复）：已开启 **13 天**，今日仍有更新但尚未合并，建议维护者尽快审核，避免影响 CJK 用户的日常使用体验。
- **[PR #8107](https://github.com/nearai/ironclaw/pull/8107)、[PR #8108](https://github.com/nearai/ironclaw/pull/8108)**：均为昨日新开，尚在正常审核周期内。

> ⚠️ 今日 3 个 PR 全部 OPEN、0 合并、0 Issue 活动，若此状态持续多日，可能反映维护者审核带宽不足，建议关注后续 48 小时的合并动态作为项目健康度判断依据。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目动态日报（2026-09-23）

---

## 1. 今日速览

- 项目过去 24 小时共更新 **12 个 PR（10 个已合并/关闭、2 个待合并）和 5 条 Issue（全部处于 OPEN 状态，无新关闭）**，开发活跃度处于**高位**，主要由核心开发者 @fisherdaddy 和 @btc69m979y-dotcom 驱动。
- 昨日（9.22）发布新版本 **LobsterAI 2026.9.22**，聚焦稳定性修复，尤其是 Windows 网关退出与飞书投递问题。
- 本轮合并 PR 集中解决 **OpenClaw 网关反复重启、升级后插件启动失败、模型策略配置错误**等一批影响可用性的关键 Bug，稳定性建设是当前主线。
- Issue 侧无新增，但 5 条历史 Issue 均有更新（多为 stale 标记），社区反馈响应偏慢，存在一定积压。
- 总体健康度：**开发活跃度高、修复节奏快，但 Issue 处理滞后值得注意**。

---

## 2. 版本发布

### 🏷️ LobsterAI 2026.9.22（2026-09-22 发布）

**主要变更：**
- **fix(im)**: 恢复原生定时任务与飞书消息投递（[#2737](https://github.com/netease-youdao/LobsterAI/pull/2737)）
- **fix(openclaw)**: 修复 Windows 网关异常退出并恢复启动流程

**迁移注意：**
- 未标注破坏性变更，但涉及网关启动逻辑调整，Windows 用户若此前遇到网关反复崩溃，建议升级后验证启动链路。
- 结合后续合并的 #2745，**升级场景下模型策略（modelPolicy）可能存在校验问题**，升级前建议备份 `openclaw.json` 等配置。

---

## 3. 项目进展

今日（含昨日合并）共 **10 个 PR 合并/关闭**，质量密集度高：

### OpenClaw 网关稳定性专项（重点）
| PR | 内容 | 影响 |
|---|---|---|
| [#2742](https://github.com/netease-youdao/LobsterAI/pull/2742) | 稳定技能配置同步与超时恢复，解决 **9.20 客户端网关反复重启**问题 | 🔴 高 |
| [#2741](https://github.com/netease-youdao/LobsterAI/pull/2741) | 修复 macOS 升级后 nsp-clawguard 无法启动（manifest 版本错位 + 失效 npm 记录） | 🔴 高 |
| [#2745](https://github.com/netease-youdao/LobsterAI/pull/2745) | 升级时恢复无效的生成式模型策略，旧模型 ID 不再阻断网关启动 | 🔴 高 |
| [#2746](https://github.com/netease-youdao/LobsterAI/pull/2746) | 避免 Clawguard 启动时不必要的生命周期租约等待（500ms 预算含同步 SQLite 操作） | 🟡 中 |
| [#2743](https://github.com/netease-youdao/LobsterAI/pull/2743) | 回移 koffi Windows 私有目录补丁，规避安全软件拦截 PowerShell 导致 Quick Repair 失效 | 🟡 中 |

### 模型与性能优化
- [#2744](https://github.com/netease-youdao/LobsterAI/pull/2744)：将每轮 “Active exec sessions” 快照移出系统提示词，**避免后台进程每轮破坏 provider 前缀缓存**——显著降低长会话 token 成本与延迟。
- [#2748](https://github.com/netease-youdao/LobsterAI/pull/2748)：**Kimi K3 maxTokens 从 8,192 提升至匹配 1,048,576 上下文窗口**，并以本地 stream wrapper 替代 plugin-sdk 依赖。

### Cowork 协作体验
- [#2749](https://github.com/netease-youdao/LobsterAI/pull/2749)：工具调用生成中实时流式展示每步进度与 diff 统计（`isGenerating`、`liveEditDiff`）。
- [#2750](https://github.com/netease-youdao/LobsterAI/pull/2750)：cowork 回合进度打磨（当日创建当日关闭，迭代速度极快）。
- [#2747](https://github.com/netease-youdao/LobsterAI/pull/2747)：Release/2026.9.21 发版分支合并。

**评估：** 本轮修复直指近期用户高频反馈（网关反复重启、升级后插件失败），版本节奏为“日级发版 + 快速回补”，项目处于**高强度的稳定化冲刺阶段**，整体向前推进明显。

---

## 4. 社区热点

今日无新增 Issue，活跃度集中在历史 Issue 更新：

- **[#1006 配置文件和工作空间文件在重启后被重置](https://github.com/netease-youdao/LobsterAI/issues/1006)**（评论 3 条，最活跃）
  - 诉求：启动时模板覆盖 `openclaw.json` 自定义配置及 `AGENTS.md`，用户只能靠定时任务 workaround。**与 #2727（持久化 OpenClaw 入口 hooks）直接相关**，是持久化机制系统性问题的用户侧表现。
- **[#986 微信回复未流式同步](https://github.com/netease-youdao/LobsterAI/issues/986)**（评论 2 条）
  - 诉求：IM 渠道流式体验缺失，“等待久→消息狂发”，与新版修复的飞书投递问题（#2737）同属 IM 投递体验域，值得关注修复是否可复用到微信渠道。

其余 3 条 Issue（#981、#982、#983）均为单评论且被标记 stale，热度较低。

---

## 5. Bug 与稳定性

按严重程度排列（今日 Issue 侧无新增 Bug，以下为活跃历史问题 + 已修复项对照）：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | 配置/工作空间文件重启被覆盖（[#1006](https://github.com/netease-youdao/LobsterAI/issues/1006)） | **部分缓解**：[#2727](https://github.com/netease-youdao/LobsterAI/pull/2727) 待合并，持久化插件 hooks |
| 🟠 中高 | 微信回复不流式、一次性分条发送（[#986](https://github.com/netease-youdao/LobsterAI/issues/986)） | 无 fix PR，仅飞书侧 #2737 已修 |
| 🟡 中 | 启动报错 Failed to start Web Search service（[#981](https://github.com/netease-youdao/LobsterAI/issues/981)） | 无对应 fix，stale |
| 🟡 中 | 预设 Agents 未国际化（[#982](https://github.com/netease-youdao/LobsterAI/issues/982)） | 无对应 fix，stale |
| 🟢 低 | 快捷键无法通过按键组合修改（[#983](https://github.com/netease-youdao/LobsterAI/issues/983)） | 无对应 fix，stale |

**已修复（本轮 PR）：** 网关反复重启（#2742）、升级后插件失败（#2741）、Windows 网关退出（Release note）、模型策略阻断启动（#2745）。

---

## 6. 功能请求与路线图信号

- **配置持久化官方方案**：#1006 用户明确请求“官方方式持久化用户配置”。待合并 PR [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727) 已覆盖插件 hooks 的 SQLite 持久化，**很可能在下一版本落地**，并有望扩展至全量配置保护。
- **IM 流式投递**：#2747/#2737 表明 IM 渠道（先飞书）投递可靠性是当前投入方向，微信流式（#986）有较大概率被纳入后续迭代。
- **Cowork 实时进度可视化**：#2749 + #2750 连续两个 PR 打磨 cowork 逐步进度与 diff 统计，显示**多智能体协作体验是路线图重点方向**。
- **长上下文模型支持**：#2748 对 Kimi K3 百万级 token 窗口的适配，暗示项目在积极跟进新模型能力。

---

## 7. 用户反馈摘要

**痛点：**
- **自定义能力受挫**：用户希望深度自定义（配置文件、AGENTS.md、插件 hooks），但重启即被模板覆盖，只能靠定时任务等 hack 绕过（#1006）——这是最集中的不满。
- **IM 体验割裂**：等待长 + 消息轰炸式的回复节奏影响机器人实际使用感（#986）。
- **启动稳定性**：Web Search 服务启动失败直接阻断使用（#981）。

**使用场景信号：** 用户主要将 LobsterAI 作为 **IM 渠道（飞书/微信）的智能体网关**，并使用自定义 Agent、插件体系与 cowork 协作能力，属于偏进阶的用户群体。

**满意面：** 开发者对线上反馈（9.20 客户端反复重启、9.22 macOS 升级问题）做到**当日/次日修复**，响应速度获得隐性认可。

---

## 8. 待处理积压

⚠️ 请维护者关注：

1. **[#1006](https://github.com/netease-youdao/LobsterAI/issues/1006)** — 开放近 6 个月（2026-03-28），高影响配置持久化问题，建议推动 #2727 合并后回归验证并关闭。
2. **[#986](https://github.com/netease-youdao/LobsterAI/issues/986)** — 微信流式投递，6 个月未解决且被标 stale，但诉求与当前 IM 修复方向高度契合。
3. **[#981](https://github.com/netease-youdao/LobsterAI/issues/981) / [#982](https://github.com/netease-youdao/LobsterAI/issues/982) / [#983](https://github.com/netease-youdao/LobsterAI/issues/983)** — 三条 3 月底提交的 Issue 均已 stale 且仅 1 条评论，建议做一次性分诊：修复、标记 wontfix 或请用户提供更多复现信息。
4. **PR 积压：** [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727)（社区贡献，3 天待审）与 [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)（dependabot electron 43.5.0 → 44.4.2，**挂起近 6 个月**，存在安全更新滞后风险）待评审。

---
*数据来源：GitHub API（过去 24 小时窗口）| 生成时间：2026-09-23*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-09-23）

## 1. 今日速览

Moltis 项目今日整体处于**低活跃度的平稳维护状态**。过去 24 小时无新增 Issues（0 开 / 0 关闭），无新版本发布，仅有一条来自 dependabot 的自动化依赖更新 PR 待处理。项目无用户侧问题报告或社区讨论，当前活跃度主要依赖自动化机器人贡献。整体健康度需关注人工参与度偏低的信号。

## 2. 版本发布

今日无新版本发布。（项目近期 Releases 记录为空，建议关注是否进入发布静默期或开发积累阶段。）

## 3. 项目进展

今日无 PR 被合并或关闭，项目功能层面**无实质推进**。唯一动态为待合并 PR：

- **[#1284](https://github.com/moltis-org/moltis/pull/1284)** `chore(deps): bump wasmtime-wasi from 36.0.9 to 36.0.11 in the cargo group across 1 directory`
  - 作者：@dependabot[bot] | 状态：OPEN（创建/更新于 2026-09-22）
  - 内容：将 Rust WebAssembly 运行时的 WASI 绑定库 `wasmtime-wasi` 从 36.0.9 升级至 36.0.11，属于小版本补丁级更新，涉及 [wasmtime 上游](https://github.com/bytecodealliance/wasmtime)的安全性与稳定性修复。
  - 评估：破坏性风险低，属常规依赖维护，建议维护者尽快审核合并以保持依赖栈新鲜。

> 提示：`wasmtime-wasi` 出现在依赖中，表明 Moltis 的 AI 智能体运行时可能采用 Wasm 沙箱执行机制，值得关注后续相关架构动态。

## 4. 社区热点

今日无活跃讨论。Issues 更新为 0 条，PR #1284 也暂无评论（👍: 0），社区互动处于完全静默状态。无热点可分析。

## 5. Bug 与稳定性

今日**无新增 Bug、崩溃或回归报告**。依赖升级 PR #1284 恰恰是为保持运行时稳定性，属预防性维护，建议及时合并。

## 6. 功能请求与路线图信号

今日无新功能请求。间接信号：Wasmtime 相关依赖的持续更新表明 Wasm 沙箱是项目核心组件，后续版本路线可能围绕智能体插件/扩展的沙箱化执行演进（推测，待官方确认）。

## 7. 用户反馈摘要

今日无 Issue/PR 评论可提取，暂无用户反馈数据。

## 8. 待处理积压

- **PR [#1284](https://github.com/moltis-org/moltis/pull/1284)**（依赖升级）：待合并，请维护者审核 CI 结果后处理。
- 建议：当前 Issues 与 Releases 双双为零，若此状态持续多日，维护者应考虑发布路线图说明或社区引导（如 issue 模板、讨论区引导），以避免社区活跃度进一步萎缩。

---

**数据来源**：GitHub API（moltis-org/moltis），统计窗口 2026-09-22 至 2026-09-23。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-09-23）

## 1. 今日速览

CoPaw 今日保持高度活跃：过去 24 小时内 Issue 更新 36 条（新开/活跃 12，关闭 24），PR 更新 44 条（待合并 23，已合并/关闭 21），关闭速度显著快于新增，存量问题持续消化。无新版本发布，但 [PR #7928](https://github.com/agentscope-ai/QwenPaw/pull/7928)（v2.2.2 release notes）已在推进，**v2.2.2 发布在即**。今日主题集中在：Console 交互打磨、安全加固（路径穿越/提示注入防护）、测试覆盖率冲刺与多渠道（QQ/飞书）稳定性修复。整体健康度良好，社区参与度高，含多位首次贡献者。

## 2. 版本发布

今日无新版本发布。注意：**v2.2.2 正在筹备中** —— [PR #7928 chore: release notes for v2.2.2](https://github.com/agentscope-ai/QwenPaw/pull/7928) 已于昨日提交，社区可关注近期发布动态。另有 issue 提及 `v2.2.2-beta.3` 桌面端构建已在流通。

## 3. 项目进展

今日 PR 关闭/合并 21 条，重点进展：

**安全与健壮性**
- [PR #7864](https://github.com/agentscope-ai/QwenPaw/pull/7864)：针对 skill 目录的路径级完整性保护，防御破坏性操作与提示注入删除攻击（#7859），遵循 ACI 设计理念。
- [PR #7937](https://github.com/agentscope-ai/QwenPaw/pull/7937)（首次贡献者）：修复 workspace zip 上传校验使用 `startswith` 前缀匹配导致的路径穿越绕过，改为正确的路径分隔判断。
- [PR #7898](https://github.com/agentscope-ai/QwenPaw/pull/7898)：修复 `qwenpaw-pet` 插件导致 Console 工具审批全量 HTTP 500 的问题（Close-and-review-later）。

**Provider 与模型层**
- [PR #6668](https://github.com/agentscope-ai/QwenPaw/pull/6668)（已关闭）：OpenAI Responses provider 的 GPT-5.6+ prompt caching 支持（opt-in）。
- [PR #7934](https://github.com/agentscope-ai/QwenPaw/pull/7934)：将 Cloudflare 拦截页正确归类为"blocked"而非误导性的凭证错误。
- [PR #7409](https://github.com/agentscope-ai/QwenPaw/pull/7409)：丢弃空 assistant 文本块，避免会话中反复回放空 `output_text`（与 #7549 火山引擎 400 错误相关）。

**测试与基础设施**
- [PR #7941](https://github.com/agentscope-ai/QwenPaw/pull/7941)：覆盖率冲刺第三批，新增 47 个测试文件、2720 个用例，语句覆盖率 70.51% → **73.79%（+3.28pp）**；修复 [PR #7938](https://github.com/agentscope-ai/QwenPaw/pull/7938) 中破坏 Windows CI 的回归。

**Console/体验**
- [PR #7940](https://github.com/agentscope-ai/QwenPaw/pull/7940)：侧边栏重构为紧凑可移动导航，头像持久化。
- [PR #7931](https://github.com/agentscope-ai/QwenPaw/pull/7931)：基于 SQLite 的持久化分页对话转录历史，属重要架构增强。

## 4. 社区热点

- [#7567（已关闭，8 评论）](https://github.com/agentscope-ai/QwenPaw/issues/7567)：点"停止"后 UI 显示已停止但任务实际仍在执行，导致 409 冲突。与 [#7929](https://github.com/agentscope-ai/QwenPaw/issues/7929)（同为 409 "task already running"）构成同一痛点簇，反映**停止/取消语义的可靠性**是用户高频困扰。
- [#6318（已关闭，8 评论）](https://github.com/agentscope-ai/QwenPaw/issues/6318)：支持 conversation 级别指定模型。与 #7062（reasoning_effort 按 agent/session 覆盖）、#4840（UI 思考强度选择器）共同指向一个核心诉求：**模型/推理参数的会话级粒度控制**。
- [#4036（已关闭，7 评论，good first issue）](https://github.com/agentscope-ai/QwenPaw/issues/4036)：添加模型步骤繁琐。对应 [PR #3819](https://github.com/agentscope-ai/QwenPaw/pull/3819)（可浏览远程模型列表 + 批量添加）已落地，模型管理体验大幅简化。
- 模型故障切换是重复出现的主题：#4882、#5351、#5572、#3789 均已关闭，说明 **fallback chain / 自动降级** 已进入实现阶段。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#7935](https://github.com/agentscope-ai/QwenPaw/issues/7935) | LLM `Request timed out` 后进程永不自愈，必须手动重启 | 暂无 fix PR，标记 Cannot Reproduce，需关注 |
| 🔴 高 | [#7721](https://github.com/agentscope-ai/QwenPaw/issues/7721) | 文件浏览器 SSE watch 在大仓库下 `watchfiles` 同步初始化阻塞事件循环，冻结整个服务 | OPEN，待处理 |
| 🟠 中 | [#7947](https://github.com/agentscope-ai/QwenPaw/issues/7947) | `send_file_to_user` 文件卡片在 Console 不渲染（artifact guard 误检 JSON 字符串） | ✅ [PR #7949](https://github.com/agentscope-ai/QwenPaw/pull/7949) |
| 🟠 中 | [#7946](https://github.com/agentscope-ai/QwenPaw/issues/7946) | QQ 官方 bot 网关重连后事件重投导致消息重复处理 | OPEN，今日新报 |
| 🟡 中低 | [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) | 上下文压缩丢失 tool_call 结构导致 400 | OPEN |
| 🟡 中低 | [#7549](https://github.com/agentscope-ai/QwenPaw/issues/7549) | 火山引擎 Responses API 拒绝以 assistant 结尾的输入 | 与 [PR #7409](https://github.com/agentscope-ai/QwenPaw/pull/7409) 相关 |
| 🟡 低 | [#7850](https://github.com/agentscope-ai/QwenPaw/issues/7850) | 后台 `reload_driver` 丢失并发策略写 | OPEN |
| 🟡 低 | [#7948](https://github.com/agentscope-ai/QwenPaw/issues/7948) | Console 前端破坏用户输入的设计问题 | OPEN，今日新报 |

## 6. 功能请求与路线图信号

- **会话级模型/推理控制**（#6318 ✅ 已关闭、#7062 ✅、#6229 ✅ Light/Medium/Deep/Auto、#4840 ✅）：多点落地，**大概率进入 v2.2.2**。
- **模型自动降级/回退链**（#4882/#5351/#5572/#3789 均已关闭）：强烈路线图信号，配合 [PR #7869](https://github.com/agentscope-ai/QwenPaw/pull/7869)（连接检查携带 session header）等 provider 层工作，模型层韧性是当前投入方向。
- **子代理可观测性**（#4923 ✅）与 [PR #4955](https://github.com/agentscope-ai/QwenPaw/pull/4955)（后台子代理生命周期事件）：多代理协作体验在补齐。
- 新需求：[#7945](https://github.com/agentscope-ai/QwenPaw/issues/7945)（IM @所有人 消息过滤）——简单且普遍，是良好的 good first issue 候选。
- **MEMORY/SOUL 文件工具层只读保护**（#4020 ✅）与 [PR #7864] 呼应，安全加固已成体系化方向。

## 7. 用户反馈摘要

- **痛点集中在任务控制**：停止按钮"假停止"引发 409、后台子任务无法取消/查看，是长任务用户（#7567、#7929、#3424、#4923）的共同抱怨。
- **配置复杂度**：新手反馈模型添加、工作目录设置（#7705：默认 Agent 工作目录设置后"又变回去"）、基于文件夹的项目会话入口不直观。
- **稳定性长尾**：超时后无法自愈（#7935）、Docker 大仓库场景服务器整体冻结（#7721）影响生产可用性信心。
- **满意点**：Issue 关闭速度快（24 小时关闭 24 条），模型管理 UX（#3819 落地）、主题自定义（#2869）、压缩空白标签（#7771）等长期反馈均得到响应；首次贡献者持续涌入（#7936、#7937）说明贡献路径友好。

## 8. 待处理积压

- [#7935](https://github.com/agentscope-ai/QwenPaw/issues/7935)：超时后进程无法自愈——虽标 Cannot Reproduce，但影响严重，建议维护者提供诊断指引或加自动恢复机制。
- [#7721](https://github.com/agentscope-ai/QwenPaw/issues/7721)：workspace watcher 阻塞事件循环——架构级问题，11 天未有关联 fix。
- [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856)：上下文压缩破坏 tool_call 结构——7 月至今仍 OPEN，影响长会话用户。
- [#7850](https://github.com/agentscope-ai/QwenPaw/issues/7850)：driver card 并发丢失更新——需锁机制设计。
- 待合并 PR 中 [PR #7864](https://github.com/agentscope-ai/QwenPaw/pull/7864)（安全防护）与 [PR #7931](https://github.com/agentscope-ai/QwenPaw/pull/7931)（持久化历史）体量大，建议优先 review 以赶上 v2.2.2 窗口。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报
**日期：** 2026-09-23 | **仓库：** [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

---

## 1. 今日速览

ZeptoClaw 今日整体活跃度处于**低位平稳**状态：过去 24 小时无新 Issue、无版本发布、无 PR 被合并或关闭。唯一的动态来自 3 条 Dependabot 自动化依赖升级 PR（[#704](https://github.com/qhkm/zeptoclaw/pull/704)、[#705](https://github.com/qhkm/zeptoclaw/pull/705)、[#706](https://github.com/qhkm/zeptoclaw/pull/706)），均处于待合并状态。这表明 CI/CD 依赖维护机制运转正常，但社区驱动的功能开发与讨论今日处于静默期。项目健康度目前无异常信号，但连续的待合并依赖 PR 建议尽快处理以降低安全风险敞口。

## 2. 版本发布
今日无新版本发布，省略。

## 3. 项目进展
今日无 PR 被合并或关闭，功能性进展为零。待合并的 3 条依赖升级 PR 若被合入，将带来 CI 工具链与 Rust 邮件解析库的更新，属于维护性推进。

## 4. 社区热点
今日无活跃 Issue 或 PR 讨论（3 条 PR 均为机器人创建，评论数为 0，无 👍 反应）。暂无社区热点可分析。

## 5. Bug 与稳定性
今日无新报告的 Bug、崩溃或回归问题。

## 6. 功能请求与路线图信号
今日无新的功能请求。从依赖升级侧面观察：

- **[#705](https://github.com/qhkm/zeptoclaw/pull/705)**：`mail-parser` 从 0.11.3 升级至 0.11.9，跨 6 个 patch 版本，暗示该库近期修复较活跃。mail-parser 是邮件处理类智能体的核心组件，建议维护者关注上游 changelog 中是否包含安全修复。
- **[#704](https://github.com/qhkm/zeptoclaw/pull/704) / [#706](https://github.com/qhkm/zeptoclaw/pull/706)**：GitHub Actions 升级（`docker/build-push-action` 7.2.0→7.3.0、`actions/checkout` 6.0.2→7.0.1），属常规 CI 维护。注意 `checkout` 为大版本升级（v6→v7），合并前建议确认 workflow 兼容性。

## 7. 用户反馈摘要
今日无用户评论，无法提炼反馈。

## 8. 待处理积压
- **3 条待合并的 Dependabot PR**（[#704](https://github.com/qhkm/zeptoclaw/pull/704)、[#705](https://github.com/qhkm/zeptoclaw/pull/705)、[#706](https://github.com/qhkm/zeptoclaw/pull/706)）：均于 2026-09-22 创建，尚无人工响应。建议维护者优先审查合并，尤其是 `actions/checkout` 大版本升级与 `mail-parser` 补丁版本累积，避免依赖债务积压。

---
*数据来源：GitHub API 快照（过去 24 小时）。本报告由自动化分析生成。*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目日报 · 2026-09-23

## 1. 今日速览

今日 EasyClaw 仓库整体呈现**低社区互动、高交付节奏**的状态。过去 24 小时内 Issues 与 PR 均无任何新增或更新（新开/关闭均为 0），社区讨论渠道相对沉寂。但项目发布了新版本 **v1.9.20 (TK Copilot)**，表明核心团队仍在持续迭代。综合判断：项目处于**维护活跃但社区反馈稀缺**的阶段，需关注社区参与度的激活。

## 2. 版本发布

### 🎉 v1.9.20: TK Copilot v1.9.20

- **发布链接**：https://github.com/gaoyangz77/easyclaw/releases/tag/v1.9.20

**What's New：**

1. **达人联（Affiliate）工作台体验优化**
   - 新增可搜索的店铺选择器（searchable shop selectors），便于多店铺用户快速定位
   - 刷新了新手教程（refreshed tutorials）
   - 营销活动（campaign）设置引导更加精准

2. **日本市场与流程校验增强**
   - 支持日本店铺入驻（Japan shop onboarding），扩展了国际化覆盖
   - 提交前对 Campaign 名称进行校验（validate campaign names before submission），减少无效提交
   - 在 Campaign 流程中区分 AI 模型导致的拒绝（distinguish AI-model rejections），提升诊断能力

**破坏性变更与迁移注意事项：**
- Release Notes 未标注破坏性变更（Breaking Changes），预计为**平滑升级**，建议用户升级后重新查看新版教程以熟悉店铺选择器交互变化。

## 3. 项目进展

今日无已合并/关闭的 PR 记录（0 条）。项目进展主要体现在 v1.9.20 的发布上，聚焦于**达人联（Affiliate）模块的可用性打磨与日本市场拓展**，属于渐进式迭代而非重大功能突破。

## 4. 社区热点

今日无活跃 Issue/PR 讨论。无热点可分析。建议维护者关注社区冷清的可能原因（如用户反馈渠道分散在 Discord/微信群等外部平台），可在 README 中明确反馈入口以提升 GitHub 侧互动。

## 5. Bug 与稳定性

- 今日**无新增 Bug 报告**，无崩溃或回归问题记录。
- ⚠️ 注意：v1.9.20 涉及 Campaign 流程变更（名称校验、AI 拒绝区分），建议升级用户留意相关流程是否出现异常，如遇问题可提交 Issue：https://github.com/gaoyangz77/easyclaw/issues

## 6. 功能请求与路线图信号

今日无新功能请求。但从 v1.9.20 的更新方向可推断路线图信号：

| 信号 | 依据 |
|------|------|
| 国际化扩张（重点：日本市场） | Japan shop onboarding 已落地 |
| AI 能力深化 | AI-model rejections 区分显示，暗示 AI 审核环节是核心链路 |
| 商家/达人双边体验打磨 | 教程刷新 + Campaign 设置引导优化 |

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼用户反馈。参考 Release Notes 的措辞（"clearer"、"more precise guidance"），推测此前用户对**工作台导航不清、Campaign 设置易出错**存在痛点，本次版本为针对性改进。

## 8. 待处理积压

今日数据中无长期未响应的 Issue/PR（Issues 与 PR 均为 0 条活跃记录），暂无积压风险。

---

**项目健康度简评**：✅ 交付持续（新版本发布正常）｜⚠️ 社区互动为零，反馈信号缺失｜建议加强社区运营与反馈渠道建设。

*数据来源：https://github.com/gaoyangz77/easyclaw*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*