# OpenClaw 生态日报 2026-09-20

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-20 03:59 UTC

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

# OpenClaw 项目动态日报 — 2026-09-20

## 1. 今日速览

OpenClaw 今日保持高活跃度：过去 24 小时内 Issues 更新 500 条（新开/活跃 358、关闭 142），PR 更新 500 条（待合并 284、已合并/关闭 216），并发布了新版本 **v2026.9.5**。然而新版本发布仅一天就爆发了多起 P0 级升级/启动相关回归（更新失败、迁移卡死、Gateway 启动挂起、临时目录被写满），升级体验成为当前最突出的稳定性风险。与此同时，维护者 @steipete 及机器人协作流水线持续推进大规模线程/IO 架构优化，主仓演进节奏依然很快。整体健康度：**功能迭代活跃，但版本发布质量门控承压**。

## 2. 版本发布

**v2026.9.5**（含 Linux companion channel v2026.9.5）
- [AppImage](https://github.com/openclaw/openclaw/releases/download/v2026.9.5/OpenClaw-2026.9.5-amd64.AppImage) | [Debian package](https://github.com/openclaw/openclaw/releases/download/v2026.9.5/OpenClaw-2026.9.5-amd64.deb)
- 发布仅一天即引发大量升级相关报告，**建议生产环境暂缓升级**，详见第 5 节。

## 3. 项目进展

今日维护者侧提交高度聚焦于 **“把同步 IO 移出 Gateway 主线程”** 的系统性重构：

- [#153325 refactor(sessions): hydrate saved transcripts off thread](https://github.com/openclaw/openclaw/pull/153325)（XL，待审）— 会话打开/重定向的 SQLite 历史水合改为异步。
- [#153159 improve: move Board writes off the Gateway thread](https://github.com/openclaw/openclaw/pull/153159)（XL）— Board 写入移出主线程，其依赖基础 #153150 及配套 fixture 修复（#153286/#153296/#153351）已合并。
- [#153399 fix: reduce Gateway memory when shared-state workers start](https://github.com/openclaw/openclaw/pull/153399)、[#152583 Workshop event reads off request thread](https://github.com/openclaw/openclaw/pull/152583)、[#152286 auth scopes 异步化](https://github.com/openclaw/openclaw/pull/152286)、[#153216 session model/thinking 持久化异步化](https://github.com/openclaw/openclaw/pull/153216) — 同一主线的多个分支落地。
- 性能优化：[#152510 perf(ui): 子代理树间复用 session 快照](https://github.com/openclaw/openclaw/pull/152510)（解决 49 个 viewer 下每秒 6 次 sessions.list 的 reload 风暴）。
- 通道可靠性：[#153075 fix: Slack/Discourse 重启后恢复最近讨论](https://github.com/openclaw/openclaw/pull/153075)、[#146361 保留流式回复中的代码与附件](https://github.com/openclaw/openclaw/pull/146361)。
- 更新器可观测性批量补强：@RomneyDa 一日提交 #153405/#153406/#153407/#153408/#153409/#153403，围绕 legacy exec approvals 冲突、静默长步骤、修复报告等。

**评价**：主线程 IO 卸载主线已形成规模效应，是本周期最大的架构性进展；配合 e2e 基线修复（#153410），说明团队在为下一版稳定性打地基。

## 4. 社区热点

- [#149361 WebUI 性能与稳定性 Umbrella](https://github.com/openclaw/openclaw/issues/149361)（评论 50，maintainer/P2）— 讨论最热，汇集桌面/移动端 WebUI 全部性能与崩溃证据，是维护者主动梳理的索引帖。
- [#97616 hook/tool 子进程泄漏导致僵尸堆积](https://github.com/openclaw/openclaw/issues/97616)（P1，评论 30）— 长期未修的运行时劣化问题，持续有新用户复现。
- [#22438 分层 bootstrap 文件加载](https://github.com/openclaw/openclaw/issues/22438)（评论 18，linked-PR-open）与 [#67419 bootstrap 每轮重注入浪费 20-30% token](https://github.com/openclaw/openclaw/issues/67419)（评论 11）— **上下文/token 经济是用户最强诉求**，直接关系使用成本。
- [#110950 "Everything is a cron" 统一自动化原语](https://github.com/openclaw/openclaw/issues/110950)（maintainer，评论 10）— @steipete 提出的架构提案，社区讨论深入。

## 5. Bug 与稳定性（按严重程度）

**P0 — v2026.9.5 升级/启动相关（今日焦点）**
1. [#152759 `openclaw update` 2026.9.4→2026.9.5 失败 `doctor-failed`，回滚成功但无错误信息](https://github.com/openclaw/openclaw/issues/152759)（OPEN，maturity:stable）— 部分有 #153405-409 更新器 PR 间接覆盖。
2. [#152744 Codex retained-state 迁移永不收敛，会话目录卡死冷启动](https://github.com/openclaw/openclaw/issues/152744)（CLOSED）— 已处理。
3. [#152981 Gateway 启动在 sidecars.model-runtime 挂起约 17 分钟后失败](https://github.com/openclaw/openclaw/issues/152981)（OPEN，regression）— 尚无明确 fix PR。
4. [#152689 Codex catalog 重试循环用 342MB 插件捕获填满 tmpdir](https://github.com/openclaw/openclaw/issues/152689)（CLOSED）— 已处理。
5. [#153257 “2026.9.5 把稳定环境变成 8 小时故障恢复会话”](https://github.com/openclaw/openclaw/issues/153257)（OPEN，needs-info）— 情绪强烈的用户综合报告。

**P0/P1 — 存量未修**
- [#38327 google-vertex/gemini-3.1 全部消息报 "Cannot convert undefined or null to object"](https://github.com/openclaw/openclaw/issues/38327)（P0，no-new-fix-pr）。
- [#56217 Secret provider 崩溃循环耗尽 1Password 速率限制](https://github.com/openclaw/openclaw/issues/56217)（P0）。
- [#139847 回复运行中发送的消息被丢弃（2026.9.2 回归）](https://github.com/openclaw/openclaw/issues/139847)（P1，queueable-fix）。
- [#153067 Gateway 稳态下每实例每 ~5s 复制整个状态库，~5.9TB/天写放大](https://github.com/openclaw/openclaw/issues/153067)（P2，linked-PR-open）。
- [#152961 WorkerThread 吃满一核且 RSS 增长](https://github.com/openclaw/openclaw/issues/152961)（CLOSED）。

**结论**：v2026.9.5 发布质量明显不足，P0 升级问题集中爆发，建议下个版本优先收口 update/migration 路径。

## 6. 功能请求与路线图信号

- **Token/上下文经济**：#22438（分层 bootstrap）已有 linked PR，配合 #153340（两阶段 skill/tool 动态预过滤，社区 PR，宣称每轮省 5-10k tokens）是下版本高概率方向。
- **自动化统一**：#110950（Everything is a cron）由维护者本人提出，路线图信号最强。
- **可观测性**：#38568（注入上下文窗口占用百分比）、#68596（可配置 streaming watchdog 超时，👍 8）诉求集中。
- **生态 API**：#79902（SQLite transcript/session 官方接缝）服务 companion 开发者群体。
- **发布工程**：#73537（为 release 增加生产就绪稳定性标签）在 v2026.9.5 翻车背景下应被重新优先考虑。

## 7. 用户反馈摘要

- **不满**：升级路径是最大痛点（“我真心后悔升级到 2026.9.5”——#153257）；消息静默丢失（Slack #131150、WhatsApp 群消息 #107244、DM 回复丢弃 #139847）严重损害对助手的信任；bootstrap token 开销在小上下文模型上尤为突出。
- **满意**：多通道集成（Telegram/WhatsApp/Matrix/飞书）、家庭+商业助手场景的真实黏性（#73537、#82450）；盲人用户将 OpenClaw 视为最强 AI 工作界面（#82450），无障碍需求值得重视。
- **典型部署形态**：macOS/Linux 自托管 Gateway + 多 Slack/Telegram 账号 + cron 自动化 + Home Assistant 联动，中重度用户为主。

## 8. 待处理积压

| Issue | 状态 | 提醒 |
|---|---|---|
| [#97616 子进程僵尸泄漏](https://github.com/openclaw/openclaw/issues/97616) | P1，近 3 个月无 fix PR | 影响长期运行稳定性，优先 |
| [#38327 Vertex/Gemini 回归](https://github.com/openclaw/openclaw/issues/38327) | P0，标记 no-new-fix-pr | 阻断一整类 provider 用户 |
| [#67419 / #22438 bootstrap token 浪费](https://github.com/openclaw/openclaw/issues/67419) | stale，linked-PR-open | 社区呼声最高，避免 stale 自动关闭 |
| [#53008 记忆压缩阻塞主处理通道 10+ 分钟](https://github.com/openclaw/openclaw/issues/53008) | P1，needs-live-repro | 与今日“IO 移出主线程”主线直接相关，建议关联 |
| [#51429 开发者工作路径 hardcode](https://github.com/openclaw/openclaw/issues/51429) | P2，公开流程污点 | 尽快回应以维护工程信誉 |
| [#112811 MS Teams 多机器人账号 PR](https://github.com/openclaw/openclaw/pull/112811) | XL，needs proof，挂起近 2 月 | 贡献者已多次同步 rebase，需维护者明确决策 |
| [#119674 / #119052 Windows/Linux 服务激活 PR](https://github.com/openclaw/openclaw/pull/119674) | P1，waiting-on-author，8 月起 | 配套 bug 长期存在 |

---
*数据来源：openclaw/openclaw 公开 GitHub 数据（过去 24 小时）。链接格式为 issue/PR 编号，可在仓库内直接检索。*

---

## 横向生态对比

# 开源个人 AI 助手 / 自主智能体生态横向对比分析
**数据日期：2026-09-20**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已从早期的“聊天机器人封装”全面演进为**多通道网关 + 长期运行 runtime + 插件化生态**的成熟形态。生态呈明显的头部聚集效应：OpenClaw 以日均千级 issue/PR 更新量成为事实上的生态中心，其下的 NanoBot、Zeroclaw、Hermes Agent、CoPaw 构成活跃第二梯队，专注细分场景。三个共性议题贯穿全生态：**升级/自更新路径的可靠性**、**上下文/token 经济**、**安全边界（提示注入、审批旁路、工作区逃逸）**。同时，长尾项目（PicoClaw、LobsterAI 等）暴露出社区治理风险——stale 机器人误杀高质量贡献、安全 issue 长期无响应，显示生态扩张速度已超过多数项目的维护能力。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新(24h) | PR 更新(24h) | Release | 合并吞吐 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（新开/活跃 358） | 500（待合并 284） | v2026.9.5（发布即翻车） | 高但积压大 | 🟡 迭代极快，发布质量门控承压 |
| **Hermes Agent** | 50（47 活跃） | 50（35 待合并） | 无（v0.21.3 在线） | 中高（15 合并/关闭） | 🟡 插件生态提速，自更新缺陷聚集 |
| **CoPaw** | 14（0 关闭） | 23（20 待合并） | v2.2.2-beta.3 | 低（3） | 🟢 Beta 打磨期，首贡献者涌入，安全 issue 未响应 |
| **Zeroclaw** | 31（21 活跃） | 50（44 待合并） | 无 | 低（6） | 🟡 RFC 收敛→实施期，合并吞吐是瓶颈；S0 安全问题未处理 |
| **NanoBot** | 2 | 31（21 待合并） | 无 | 中（10） | 🟢 响应快（Bug 当日闭环），但安全 issue #4072 悬置 4 个月 |
| **Moltis** | 4 | 1 | 无 | 0 | 🟡 中等活跃，Heartbeat 子系统问题集中 |
| **LobsterAI** | 2 | 7（6 条 stale 关闭） | 无 | 0（实质） | 🔴 stale 机器人系统性清理社区贡献，转向商业化 |
| **PicoClaw** | 3 | 0 | 无 | 0 | 🔴 官网 TLS 过期 10 天未修，核心 Bug 跨版本存活 6 月+ |
| **NanoClaw** | 0 | 4（0 合并） | 无 | 0 | 🟢 功能沉淀期，审查吞吐低 |
| **IronClaw** | 0 | 1 | 无 | 0 | 🟢 平稳，XL PR 40 天未审 |
| **NullClaw / TinyClaw / ZeptoClaw / EasyClaw** | 0 | 0 | 无 | — | ⚪ 无活动 |

**分层结论**：第一梯队（OpenClaw，日均数据量级超其余项目总和）、第二梯队（Hermes / CoPaw / Zeroclaw / NanoBot，各有清晰方向且日均 20-50 条动态）、第三梯队（质量巩固或衰退信号项目）、休眠项目 4 个。

---

## 3. OpenClaw 在生态中的定位

**社区规模**：断层领先。日均 500 issue + 500 PR 更新约为第二名 Hermes 的 10 倍；issue 编号已达 15 万级（对比 NanoBot 5 千级、CoPaw 7 千级），累计用户与贡献者基数最大。用户画像为**中重度自托管用户**（macOS/Linux Gateway + 多 Slack/Telegram 账号 + Home Assistant 联动），甚至出现盲人用户将其视为最强 AI 工作界面的无障碍场景。

**技术路线差异**：
- OpenClaw 是唯一系统性推进**“同步 IO 移出 Gateway 主线程”**架构重构的项目（#153325/#153159/#153399 等多条 XL PR 形成规模效应），解决 7×24 长稳运行的写放大（#153067：5.9TB/天）与内存问题；
- Hermes Agent 走**插件驱动开放生态**路线（provider 插件成为一等公民，摆脱硬编码目录）；
- Zeroclaw 以**RFC 治理 + WASM 插件运行时 + append-only 事件历史**为架构主线，治理流程最严谨但周期长；
- OpenClaw 的 "Everything is a cron"（#110950）统一自动化原语提案是维护者本人提出的路线图，信号最强。

**优势与风险**：优势在多通道集成（Telegram/WhatsApp/Matrix/飞书）、真实场景黏性、架构演进速度。核心风险是**发布工程**——v2026.9.5 发布一天即爆发多起 P0 升级回归，“生产环境暂缓升级”的社区共识正在损害信任；同时存量 P0（#38327 Vertex 回归、#56217 Secret provider 崩溃循环）长期未修。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **升级/自更新可靠性** | OpenClaw、Hermes、NanoBot | OpenClaw v2026.9.5 升级失败/迁移卡死/tmpdir 写满；Hermes v0.21.3 `fleet_restart_pending` 标记无法消除（已产生 2 个重复报告）+ 更新尾部 TypeError；NanoBot 主动开发 `nanobot update`（#5817）。升级路径已成全生态第一稳定性痛点 |
| **上下文/Token 经济** | OpenClaw、NanoBot、Zeroclaw、CoPaw | OpenClaw 分层 bootstrap（#22438，20-30% token 浪费）+ skill 动态预过滤（每轮省 5-10k）；NanoBot 上下文静默截断修复（#5820）与 tiktoken 估算偏差 30-50%（#5403）；Zeroclaw 上下文压缩锚定模型窗口比例（#9535）；CoPaw prompt caching PR 滞留 47 天 |
| **安全边界** | Zeroclaw、NanoBot、CoPaw、NanoClaw、OpenClaw | Zeroclaw S0 级无人值守代理审批静默失效（#10968）；NanoBot 符号链接绕过工作区（#4072，4 个月未响应）；CoPaw 持久化提示注入（#7859）+ 危险命令检查绕过（#7881）；NanoClaw 挂载 allowlist 绕过修复待合并 |
| **会话/恢复语义正确性** | NanoBot、Zeroclaw、Hermes、OpenClaw | 消息静默丢失（OpenClaw #139847）、崩溃后恢复重放副作用（NanoBot #5808、Zeroclaw #10634）、37GB state.db 重启死循环（Hermes #115542）——均指向 7×24 部署的韧性需求 |
| **插件/Provider 生态开放** | Hermes、CoPaw、NanoBot、Moltis | Hermes 插件接管模型目录；CoPaw pre-tool-call 策略钩子（#7880）；NanoBot 多个商业 provider 主动接入（aimlapi 提出分成合作）；Moltis Groq 一等化（#1276） |
| **运维可观测性** | OpenClaw、NanoClaw、Hermes | 上下文占用注入（OpenClaw #38568）、watchdog 可配置超时（#68596）、`ncl health` 零依赖健康检查（NanoClaw #3856）、用量可见性（Hermes #116605） |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | Zeroclaw | NanoBot | CoPaw | 长尾项目 |
|---|---|---|---|---|---|---|
| **功能侧重** | 全栈个人助手 Gateway | 插件化 agent + Desktop | WhatsApp Web 深度集成 + RFC 治理 | 轻量网关 + WebUI 打磨 | Console 前端 + 多 provider | 单点（商业化 / 嵌入式 / 身份） |
| **目标用户** | 中重度自托管、家庭+商业助手、无障碍用户 | 生产 fleet/Docker/launchd 用户 | WhatsApp 主力渠道生产用户 | 企业/自托管 + 移动 PWA 用户 | 轻量桌面用户 | 细分场景 |
| **架构特征** | 单体 Gateway + 多通道 + 主线程 IO 卸载主线 | 插件 SDK + 开放 provider 目录 | Runtime 拥有会话 + WASM 插件 + 事件溯源 | durable 恢复日志 + 事件投影统一 | Python 后端 + React Console | 各异 |
| **治理模式** | 维护者主导 + 机器人流水线 | 核心维护者高吞吐合并 | RFC 投票 + 决策 tracker（最正式） | 核心贡献者密集提交 | 测试文化成熟（单 PR +543 用例） | 治理缺失为主要风险 |

**关键洞察**：生态尚未同质化——OpenClaw 拼“全能与规模”，Zeroclaw 拼“架构严谨与渠道深度”，Hermes 拼“生态开放速度”，NanoBot/CoPaw 拼“打磨质量”。这为互补共存留出了空间。

---

## 6. 社区热度与成熟度

- **快速迭代期**：OpenClaw（日均千级动态、新版本周发）、Hermes（插件架构一日多合并）、CoPaw（Beta 提速 + 首贡献者持续涌入，2.2.2 正式版在即）
- **架构转型期**：Zeroclaw（RFC 收敛 → 44 条待合并 PR 的实施期，但维护者审查带宽不足；存在 @NiuBlibing 单点依赖）
- **质量巩固期**：NanoBot（Bug 当日闭环、WebUI 打磨）、NanoClaw / Moltis / IronClaw（低频但方向明确，需注意 PR 滞留 3-6 周）
- **衰退/风险信号期**：LobsterAI（6 个有价值的社区修复 PR 被 stale 机器人关闭，转向订阅商业化，社区信任流失）、PicoClaw（基础设施运维失效：官网不可达 10 天 + 核心渠道 Bug 跨版本存活）、4 个休眠项目

**成熟度悖论**：活跃度最高的 OpenClaw 恰逢最严重的发布质量危机；而活跃度中等的 NanoBot 展示了最佳的问题闭环效率（当日报告、当日修复、当日回归测试）。

---

## 7. 值得关注的趋势信号

1. **升级路径成为新的“信任货币”**：三个头部项目同日暴露自更新缺陷，说明“agent 自我更新”作为差异化能力的代价是升级链路复杂度激增。参考价值：agent 框架应将 update/migration 纳入 CI 冒烟测试的一级公民，OpenClaw #73537（release 稳定性标签）值得全生态效仿。

2. **上下文经济从优化项变为架构项**：token 成本直接决定 agent 可用性，分层 bootstrap、动态工具预过滤、按模型窗口锚定压缩正在从社区请求变为默认架构。开发者应假设“每轮 5-10k token 的固定开销不可接受”。

3. **安全债在生态中普遍且严重**：无人值守审批旁路（Zeroclaw S0）、工作区逃逸（NanoBot）、持久化提示注入（CoPaw）——自主权限越大的 agent，安全边界越要成为 runtime 级保证而非工具级检查。

4. **插件化是下一轮竞争焦点**：Hermes 的 provider 插件一等公民化、Zeroclaw 的 WASM 插件 RFC、CoPaw 的策略钩子均指向同一判断：框架价值正从内置能力转向**接缝设计**（甚至出现商业 provider 主动上门分成的案例）。

5. **7×24 生产部署倒逼韧性语义**：消息不丢、副作用不重放、崩溃可恢复、状态库不膨胀——这些“无聊但关键”的正确性问题占今日全生态 Bug 报告的最大比重，是框架选型时最应考察的指标。

6. **社区治理决定项目生死**：stale 机器人误杀贡献（LobsterAI）、安全 issue 零响应（NanoBot/PicoClaw）、XL PR 长期未审（Zeroclaw/IronClaw/NanoClaw 均超 3 周）表明：**审查吞吐量已成为比代码产出更稀缺的生态资源**。对贡献者的启示：优先选择维护者响应闭环可验证的项目（如 NanoBot、CoPaw）。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-09-20

## 1. 今日速览

- 今日项目整体活跃度**中高**：过去 24 小时 PR 更新 31 条（待合并 21 / 已合并关闭 10），Issues 更新 2 条（新开或活跃 1 / 关闭 1），无新版本发布。
- 核心贡献者 @chengyongru 密集提交，聚焦 **Agent 上下文管理**（移除本地尾部截断）与 **WebUI 事件投影重构**两个 P1/P2 级改动。
- WebUI 会话停止后恢复队列的 Bug（#5808）在同一天内被报告并随 PR #5809 关闭，问题响应闭环速度很快。
- 存量待合并 PR 积压较多（21 条），其中多个标记 `conflict`，合并吞吐存在瓶颈。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日已关闭/合并的重要 PR：

- **#5809** [fix(agent)](https://github.com/HKUDS/nanobot/pull/5809)：修复 WebUI 会话显式停止后，durable 恢复日志中被取消的 follow-up 消息在网关重启后被 `RecoveryCoordinator` 重新入队的问题。采用快照确认机制，仅确认取消时刻的 follow-up ID。对应关闭 Issue #5808。
- **#5814** [fix(webui)](https://github.com/HKUDS/nanobot/pull/5814)：移除回合进行中非终态回答切片的页脚空间预留，消除中间答案的视觉间隙，并补充回归测试。
- **#5816** [feat(webui)](https://github.com/HKUDS/nanobot/pull/5816)：统一 provider 设置控件与品牌 logo 展示（圆角贴片、去除白晕、修正品牌资源），统一 32px 规格并补全本地化。
- **#5818** [chore](https://github.com/HKUDS/nanobot/pull/5818)：移除仓库级 `CLAUDE.md`。

整体来看，今日进展集中在 **Agent 恢复机制的正确性**与 **WebUI 视觉一致性**，属于稳步打磨阶段。

## 4. 社区热点

- **PR #5820** [fix(agent): remove local context tail truncation](https://github.com/HKUDS/nanobot/pull/5820)（P1，今日新开）：移除静默截断历史尾部的本地路径，改走共享的 LLM 合并器，仅在摘要失败时保留有界原始检查点。这是对上下文管理正确性的重要修正。
- **PR #5819** [refactor(webui): unify live and replay event projection](https://github.com/HKUDS/nanobot/pull/5819)：让 live WebSocket 与持久化回放共用同一 reducer，消除双份 UI 语义实现——架构级重构信号。
- **PR #5817** [feat: stable and source self-update flows](https://github.com/HKUDS/nanobot/pull/5817)：新增 `nanobot update` 自更新命令（PyPI 稳定版 + 源码 dev 版），内置 SHA-256 校验的私有 Bun 运行时，降低用户升级门槛——用户体验方向的重要投入。
- **PR #5666** [aimlapi.com provider](https://github.com/HKUDS/nanobot/pull/5666)：第三方商业 provider 主动接入并提出收益分成合作，侧面反映项目的分发价值获得商业关注，但标记 `conflict` 待维护者决策。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 状态 |
|---|---|---|
| **高（安全）** | [#4072](https://github.com/HKUDS/nanobot/issues/4072) `ExecTool` 受限工作区可通过**相对符号链接**绕过读取外部文件（5 月报告，9-19 更新，仍 OPEN，**无关联 fix PR**） | ⚠️ 未修复 |
| P1 | [#5820](https://github.com/HKUDS/nanobot/pull/5820) 本地上下文尾部静默截断，可能丢失历史 | fix PR 今日提交，待审 |
| P1 | [#5403](https://github.com/HKUDS/nanobot/pull/5403) tiktoken 估算比 API 实际低 30–50%，导致上下文超限仍不触发合并 | fix PR 待合并 |
| P2（已修复） | [#5808](https://github.com/HKUDS/nanobot/issues/5808) /stop 后恢复日志残留导致 WebUI follow-up 重放 | ✅ PR #5809 已关闭 |
| P2 | [#5748](https://github.com/HKUDS/nanobot/pull/5748) 批处理边界间进程退出时，已完成的工具副作用结果与未执行不可区分 | fix PR 待合并 |

**重点提醒**：安全 Issue #4072 已悬挂近 4 个月，涉及工作区隔离逃逸，建议维护者优先处理。

## 6. 功能请求与路线图信号

- **自更新机制**（#5817）：已进入 PR 阶段，大概率随下个版本落地，将显著改善分发与升级体验。
- **Provider 生态扩张**：#5666（aimlapi）、#5453（商汤 SenseNova 原生 provider）均在途，多个标记 `conflict`，显示 provider 接入是活跃贡献方向，但需维护者协调合并顺序。
- **WebUI 国际化与可用性**：#5367（Agent 活动标签 10 语言本地化）、#5776（ProviderPicker 搜索过滤）、#5352（provider 删除控件）、#5641（iOS PWA 修复）持续活跃，WebUI 打磨是明确路线。
- **渠道扩展**：#4919（Telegram 自定义 Bot API 端点）、#5606（邮件按收件别名过滤）覆盖自托管/企业场景需求。

## 7. 用户反馈摘要

- **企业/自托管用户**需要对接私有网关（Telegram Bot API 自定义端点、共享邮箱多别名），现有配置灵活性不足（#4919、#5606）。
- **移动端 PWA 用户**在 iOS 上遭遇首次点击被吞、状态栏遮挡等体验问题（#5641），说明 WebUI 已被当作日常移动入口使用。
- **长期运行稳定性**：恢复日志残留、批量工具执行中断恢复等问题（#5808、#5747/#5748）表明部分用户以 7×24 网关方式部署，对崩溃恢复语义要求高。
- **上下文可靠性**是反复出现的痛点：静默截断（#5820）与合并触发失灵（#5402/#5403）直接影响回答质量，社区对此类修复的关注度最高。

## 8. 待处理积压

- ⚠️ **#4072（安全）**：符号链接绕过工作区限制，2026-05-29 开启至今 0 评论、无 fix PR——**最高优先级积压**。
- **PR 积压 21 条待合并**，其中 4 条标记 `conflict`（#4819、#5666、#5453、#5352），7-8 月提交的 PR（#4819、#4820、#5257、#5403）已滞留 1 个月以上，建议维护者安排集中 review。
- **#5257**（sustained goal 无终止条件时永久 active 导致资源占用）8 月初提交，长期未决，涉及调度正确性，建议关注。
- **#4819/#4820**（WeakValueDictionary GC 导致锁身份不稳定、非字符串 URL 污染缓存签名）为小而确定的修复，合并成本低、风险低，可快速清理。

---

**健康度小结**：核心维护者响应迅速（Bug 当日闭环）、功能方向清晰（自更新、WebUI 打磨、provider 生态），但存在两点风险——安全 Issue #4072 长期未响应，以及 PR 审查吞吐不足以消化社区贡献，长期可能挫伤外部贡献者积极性。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-09-20）

## 1. 今日速览

Zeroclaw 今日整体活跃度**偏高**：24 小时内 Issues 更新 31 条（新开/活跃 21，关闭 10），PR 更新 50 条（待合并 44，已合并/关闭 6），无新版本发布。社区焦点集中在两大方向：**WhatsApp Web 渠道的密集修复与新功能**（原生投票、群组管理、媒体预览等，来自 @RustLangLatam 的高产贡献），以及**多条重量级架构 RFC 的收尾关闭**（会话事件历史、WASM 插件运行时等均已 accepted）。此外今日报告了一个 **S0 级安全问题**（#10968 无人值守代理的审批管理器缺失），值得维护者优先关注。

## 2. 版本发布

今日无新版本发布。多个 XL 级 PR 仍待合并（如 #10621、#10605），预计将构成下一个版本的主要内容。

## 3. 项目进展

今日合并/关闭的 PR 共 6 条，代表性条目：

- **PR #9535（已关闭）feat(runtime): 将上下文压缩锚定到模型窗口比例** — 引入 `context_compact_ratio` 设置，使主动裁剪预算基于所选模型窗口而非固定 32K token，属 principal contributor 的 XL 级改进。([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9535))
- **PR #10955（已关闭）feat(runtime): shell 输出编码检测** — shell 输出保留原始字节直至统一解码边界，使用 `chardetng`/`encoding_rs` 处理非 UTF-8 输出，配合 #10954（PowerShell UTF-8 初始化）形成 shell 编码改进组合。([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10955))

Issues 侧关闭了多条里程碑级 RFC（详见第 4 节），包括 #9487、#9488、#10076、#10526、#9512、#10715 等，标志着架构设计阶段完成、进入实施期。

**整体评估**：今日关闭的多为 accepted 状态的 RFC 与长期 PR，44 条 PR 待合并表明实施管道充盈；项目正处于"设计收敛 → 大规模实现"的阶段转换点。

## 4. 社区热点

讨论最活跃的条目：

1. **Issue #9487（39 评论，已关闭）Runtime 拥有的会话与传输面适配器 RFC** — Revision 5 实质性替换了 Revision 4 的投票快照，旧投票不延续，需重新开放讨论窗口后重新投票。([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9487))
   - **诉求**：会话生命周期的所有权从渠道移至 runtime，是架构核心议题，投票流程严谨但周期长（7-28 至今近两个月）。
2. **Issue #9488（32 评论，已关闭）统一文件与附件架构 RFC** — 已迭代至 Revision 10，同样因实质性替换需重开投票。([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9488))
3. **Issue #8692（15 评论，开放）维护者决策队列 Tracker** — RFC/设计议题的决策看板，持续作为治理中枢。([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8692))
4. **Issue #10076 / #10526（15/12 评论，均已关闭）** — WASM 插件运行时 RFC 与 append-only 会话事件历史 RFC，两者明确了职责边界划分（#10526 独占事件词汇表权限），是本周最重要的架构定调。([#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) / [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526))

**热点观察**：RFC 治理流程成熟（revision 快照 + 分窗口投票），但 @NiuBlibing 一人主导多条高风险 RFC，存在单点依赖风险。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| **S0** | [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | 无人值守代理（cron/heartbeat/headless SOP/spawn_subagent）不构建 ApprovalManager，风险配置下的工具审批**静默失效**——安全风险 | ❌ 暂无 |
| S1 | [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) | WhatsApp Web 被 WhatsApp 新的 passkey/SHORTCAKE 配对门槛阻断设备 linking（**长期未解，priority:p1**） | ❌ 暂无 |
| S2 | [#10985](https://github.com/zeroclaw-labs/zeroclaw/issues/10985) | Dashboard 发起的 turn 使用新建 channel 实例，channel-backed 工具无法触达会话绑定的渠道 | ❌ 暂无 |
| S2 | [#10975](https://github.com/zeroclaw-labs/zeroclaw/issues/10975)（及重复的已关闭 #10972） | WhatsApp 入站图片不下载，agent 只收到字面 `[Image]` 文本，视觉能力不可用 | ❌ 暂无 |
| S2 | [#10962](https://github.com/zeroclaw-labs/zeroclaw/issues/10962)（已关闭） | 网关 `/ws/chat` 流的工具帧不携带结果 payload | 已关闭，标 `r:needs-repro` |
| S3 | [#10976](https://github.com/zeroclaw-labs/zeroclaw/issues/10976)（重复的 #10973 已关闭） | WhatsApp mentions 双向损坏 | ❌ 暂无 |

**稳定性要点**：S0 级 #10968 涉及安全审批旁路，且无在途 fix PR，建议维护者最高优先处理；WhatsApp 渠道 bug 密集但存在重复提交现象（#10972/#10975、#10973/#10976），建议清理重复项。

## 6. 功能请求与路线图信号

**有 PR 支撑、近期可能落地：**
- **Anthropic prompt-cache TTL 可配置**：Issue [#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663) 已有两条竞争性 PR — [#10724](https://github.com/zeroclaw-labs/zeroclaw/pull/10724)（XL，完整 cache_ttl 配置）与 [#10960](https://github.com/zeroclaw-labs/zeroclaw/pull/10960)（XS，环境变量方案），落地概率高，但需维护者二选一。
- **WhatsApp 原生投票闭环**：Issue [#10983](https://github.com/zeroclaw-labs/zeroclaw/issues/10983) → 今日 PR [#10988](https://github.com/zeroclaw-labs/zeroclaw/pull/10988)（读回投票为 `[choice]` 消息，stacked on #10984），issue-to-PR 转换速度极快（1 天内）。
- **Telegram 群组被动上下文**：[#10715](https://github.com/zeroclaw-labs/zeroclaw/issues/10715) 状态 in-progress。
- **网络中断恢复不重放副作用**：[#10634](https://github.com/zeroclaw-labs/zeroclaw/issues/10634) 已 accepted。

**尚无 PR、处于设计期：**
- RFC [#10930](https://github.com/zeroclaw-labs/zeroclaw/issues/10930)（agent 向人类提问的统一原语，复用 SOP 审批门）与 [#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929)（出站消息送达回执）——均标 `needs-author-action`。
- [#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970)（主机级准入控制）与 [#10969](https://github.com/zeroclaw-labs/zeroclaw/issues/10969)（cron/heartbeat 抖动窗口）——多代理部署场景的规模化信号。

## 7. 用户反馈摘要

- **WhatsApp Web 是当前用户痛感最强的渠道**：设备 linking 被平台侧新门槛阻断（#8627，S1）、图片/文档预览缺失（#10981、#10812）、mentions 损坏、入站图片不可用——反馈显示用户将该渠道作为主力部署面，损坏直接影响生产可用性。
- **代理可靠性诉求突出**：#10634（网络中断后 turn 卡死）、#10531（delegate 子代理无进度可见性，"Foreground delegate blocks and returns only the final text"）反映长时任务用户对可观测性和韧性的强需求。
- **成本敏感**：#10663/#10960 中用户明确计算了缓存成本（1.25x 写入溢价 vs 0.1x 读取），说明有重度 API 消耗的生产用户。
- **正面信号**：RFC 治理流程（revision 快照、决策 tracker、ADR 清单 #8691）获得社区积极参与，贡献者梯队（distinguished/principal/experienced contributor 标签）运转良好。

## 8. 待处理积压

- **[#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627)（p1, S1）**：WhatsApp linking 被阻断，自 2026-07-02 持续近三个月，无在途修复，是**最严重的长期积压**，可能受上游平台变更制约，建议发布状态公告。
- **[#10605](https://github.com/zeroclaw-labs/zeroclaw/pull/10605)**：Anthropic extended thinking 穿透 OpenAI 兼容网关，XL 级、`needs-maintainer-review`，自 09-03 待审 17 天。
- **[#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351) / [#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) / [#10499](https://github.com/zeroclaw-labs/zeroclaw/pull/10499) / [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621)**：多条 XL 级高风险 PR 均标 `needs-maintainer-review`，积压 2-3 周，合并吞吐量是当前瓶颈（44 待合并 vs 日均关闭 6）。
- **[#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046)**：Telegram webhook 模式，accepted 但处于 icebox，自 6 月无实质进展。
- **维护者提醒**：S0 安全问题 #10968 无任何在途修复，建议置顶并安排 code owner。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：** 2026-09-20 | **仓库：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

项目保持高度活跃：过去 24 小时 Issues 更新 50 条（新开/活跃 47，关闭 3），PR 更新 50 条（待合并 35，已合并/关闭 15），无新版本发布。今日焦点集中在 **v0.21.3 自更新机制的稳定性问题**（多个 P2 bug 聚焦于 update 后清理阶段崩溃和 `fleet_restart_pending` 标记无法清除）以及 **Desktop/插件生态的快速扩展**（plugin catalog、composer API、模型选择器等多条 PR 并行推进）。值得注意的是，部分 bug 报告由 Hermes agent 实例自主提交（如 [#80857](https://github.com/NousResearch/hermes-agent/issues/80857)），展现了项目"dogfooding"的独特健康度信号。

---

## 2. 版本发布

今日无新版本发布。当前主线版本为 v0.21.3（`8a92051f`）。⚠️ 需注意：今日多个 bug 显示 v0.21.0–v0.21.1 升级到 v0.21.3 的自更新路径存在尾部崩溃问题（见第 5 节），建议用户关注后续修复版本。

---

## 3. 项目进展

今日合并/关闭 15 条 PR，主要进展集中在**插件架构开放**与**提供商支持**：

- **插件生态基础设施（核心主题）**：由 @teknium1 合并的一组 PR 显著开放了插件能力：
  - [#116556](https://github.com/NousResearch/hermes-agent/pull/116556)（已关闭）：Provider 插件接管首次设置目录、图像路由和模型切换验证，摆脱硬编码的 models.dev 表——外部提供商现在是一等公民。
  - [#116552](https://github.com/NousResearch/hermes-agent/pull/116552)（已关闭）：模型选择器（`hermes model`、`/model`、Desktop）开始列出树外外部进程与 OAuth 提供商插件。
  - [#116555](https://github.com/NousResearch/hermes-agent/pull/116555)（已关闭）：模型提供商插件可向所有 `/usage` 界面上报账户用量，同时关闭 [#113463](https://github.com/NousResearch/hermes-agent/issues/113463)。
- **性能优化**：[#116072](https://github.com/NousResearch/hermes-agent/pull/116072)（已关闭）：Nous 推荐数据复用磁盘缓存 + gzip，减少重复网络请求。

**评估：** 今日进展使 Hermes 从"内置提供商 + 封闭目录"向"插件驱动的开放生态"迈出了实质性一步，是插件路线图上的重要节点。

---

## 4. 社区热点

**🔥 讨论最多的 Issues：**

1. **[#26277](https://github.com/NousResearch/hermes-agent/issues/26277)**（13 评论）— Email 网关按规范化主题隔离会话的功能请求，开放 4 个月仍在活跃讨论，反映多渠道网关用户对会话粒度控制的强烈诉求。
2. **[#115638](https://github.com/NousResearch/hermes-agent/issues/115638)**（8 评论，P2）— `hermes update` 崩溃后 `fleet_restart_pending` 标记无法消除。今日新增重复报告 [#116614](https://github.com/NousResearch/hermes-agent/issues/116614) 和 [#116497](https://github.com/NousResearch/hermes-agent/issues/116497)，说明该问题在真实用户中**正在扩散**。
3. **[#115466](https://github.com/NousResearch/hermes-agent/issues/115466)**（7 评论，P2）— v0.21.1→v0.21.3 自更新尾部报 `TypeError: _find_stale_dashboard_pids() got unexpected keyword 'scope_home'`（新旧模块混用），更新实际成功但被报告失败。
4. **[#107918](https://github.com/NousResearch/hermes-agent/issues/107918)**（7 评论，P1，已关闭）— Dashboard TUI 误报 "Setup Required"，今日关闭，是少数获得解决的高优问题。

**诉求分析：** 热点集中在**自更新可靠性**与**会话状态管理**两条线上，用户多为生产环境长期运行（launchd/Docker/fleet）部署，对升级路径的确定性要求高。

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 状态 |
|---|---|---|
| **P1** | [#107918](https://github.com/NousResearch/hermes-agent/issues/107918) Dashboard 误报 Setup Required（自定义 provider） | ✅ 已关闭 |
| **P2** | [#115638](https://github.com/NousResearch/hermes-agent/issues/115638) / [#116614](https://github.com/NousResearch/hermes-agent/issues/116614) `fleet_restart_pending` 标记无法消除，健康 fleet 上 catch-up 永久 exit 1 | ❌ 暂无 fix PR |
| **P2** | [#115466](https://github.com/NousResearch/hermes-agent/issues/115466) / [#116497](https://github.com/NousResearch/hermes-agent/issues/116497) 更新尾部 `_find_stale_dashboard_pids` TypeError | ❌ 暂无 fix PR |
| **P2** | [#115542](https://github.com/NousResearch/hermes-agent/issues/115542) 大型 state.db（37GB）非正常退出后网关重启死循环 | ❌ 暂无 fix PR |
| **P2** | [#116446](https://github.com/NousResearch/hermes-agent/issues/116446) LSP 单次超时永久禁用整个 workspace；冷启动 55s 被 5s 预算误杀 | ❌ 暂无 fix PR |
| **P2** | [#116593](https://github.com/NousResearch/hermes-agent/issues/116593) 配置迁移遇畸形嵌套值整体中止 | ❌ 暂无 fix PR |
| **P2** | [#116611](https://github.com/NousResearch/hermes-agent/issues/116611) 多路复用下手动 `/compress` 因 UnscopedSecretError 中止 | ❌ 暂无 fix PR |
| **P2** | [#116213](https://github.com/NousResearch/hermes-agent/issues/116213) Cron 预检无法解析 openai-codex OAuth 凭据 | ❌ 暂无 fix PR |
| **P2** | [#115306](https://github.com/NousResearch/hermes-agent/issues/115306) Gemini `AQ.` 开头的新 API key 失效（疑似回归） | ❌ 暂无 fix PR |
| **P2** | [#59896](https://github.com/NousResearch/hermes-agent/issues/59896) / [#80857](https://github.com/NousResearch/hermes-agent/issues/80857) Python 3.14 下并行工具调用崩溃 | ❌ 开放逾 2 个月 |

**Windows 相关：** [#116610](https://github.com/NousResearch/hermes-agent/pull/116610)（PR，open）修复 SCM 服务枚举中止 `hermes update` 的问题。

**亮点 fix PR：** [#116618](https://github.com/NousResearch/hermes-agent/pull/116618) + [#116617](https://github.com/NousResearch/hermes-agent/pull/116617) 修复插件目录 annotated tag pin 导致 `kiro-acp` 安装失败——后者直接修复当前 main 上的安装错误。

---

## 6. 功能请求与路线图信号

- **网关/会话：** [#26277](https://github.com/NousResearch/hermes-agent/issues/26277)（邮件主题隔离会话，13 评论）；[#89325](https://github.com/NousResearch/hermes-agent/issues/89325)（任意渠道入站活动自动取消归档）。配套 PR [#116619](https://github.com/NousResearch/hermes-agent/pull/116619)（/goal 自动续跑）已提交，会话生命周期管理明显是活跃开发方向。
- **插件 SDK 扩展（最可能进下版）：** [#116389](https://github.com/NousResearch/hermes-agent/pull/116389)（composer draft API）、[#116615](https://github.com/NousResearch/hermes-agent/pull/116615)（聚焦轮次身份暴露给插件）、[#116608](https://github.com/NousResearch/hermes-agent/pull/116608)（Kanban pre-dispatch/pre-create 钩子）——与今日已合并的插件开放 PR 形成连贯路线图。
- **用量可见性：** [#116605](https://github.com/NousResearch/hermes-agent/pull/116605) 在 `/usage` 中展示 Codex 计划限额窗口（5h/7d 重置计时）。
- **桌面体验：** [#116606](https://github.com/NousResearch/hermes-agent/pull/116606)（可配置聊天阅读宽度）、[#116511](https://github.com/NousResearch/hermes-agent/issues/116511)（历史读取暴露 inline_images 开关）。

---

## 7. 用户反馈摘要

**痛点：**
- **升级焦虑**是最突出的情绪：多个用户报告"更新实际成功但显示失败"或"更新后 gateway 反复重启"，生产用户（Docker/launchd/WSL/fleet）被迫手动清理 marker 文件。
- **Desktop 成熟度不足**：`clarify` 工具表单永不渲染只剩 spinner（[#116483](https://github.com/NousResearch/hermes-agent/issues/116483)）、群聊错误一律显示 "hit an error"（[#116458](https://github.com/NousResearch/hermes-agent/issues/116458)）、Artifacts 页不索引 Office 文件（[#116613](https://github.com/NousResearch/hermes-agent/issues/116613)）。
- **边界平台受挫**：Windows（computer_use 坐标误判 [#105560](https://github.com/NousResearch/hermes-agent/issues/105560)）、Python 3.14、macOS 终端快捷键（[#116443](https://github.com/NousResearch/hermes-agent/issues/116443)）用户长期等待修复。
- **API 兼容滞后**：Gemini 新 key 格式 `AQ.` 失效让用户被迫回滚 commit。

**满意点：**
- 项目"自我报告 bug"的模式（agent 自主提交 issue）被视为质量工程的体现。
- @teknium1 高吞吐的插件架构 PR 合并速度获得社区积极回应。

---

## 8. 待处理积压

提醒维护者关注：

1. **[#115638](https://github.com/NousResearch/hermes-agent/issues/115638)** — P2，今日已产生 **2 个重复报告**（#116614、#116497），影响所有走自更新路径的用户，建议优先出修复并考虑在 P2 级别提级。
2. **[#59896](https://github.com/NousResearch/hermes-agent/issues/59896)** — Python 3.14 兼容性问题开放逾 2 个月且已有重复报告 [#80857](https://github.com/NousResearch/hermes-agent/issues/80857)，随 Python 3.14 普及影响面将扩大。
3. **[#26277](https://github.com/NousResearch/hermes-agent/issues/26277)** — 13 评论、4 个月未落地的高热度功能请求，建议给出里程碑答复以管理社区预期。
4. **[#32737](https://github.com/NousResearch/hermes-agent/issues/32737)** — Tirith 扫描器对 `| python3` 管道的一刀切拦截影响日常工具链使用，开放近 4 个月。
5. **[#114057](https://github.com/NousResearch/hermes-agent/pull/114057)**（bot-forge 目录条目）— 标记 `needs-decision` 挂起 3 天，plugin catalog 审批流程吞吐值得关注。

---

**健康度小结：** 活跃度优秀（issue/PR 双高），插件生态方向清晰、推进迅速；但 v0.21.3 自更新路径的多个 P2 缺陷正在聚集重复报告，建议在下一次发布前集中修复 install-update 链路。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-09-20

## 1. 今日速览

PicoClaw 今日整体活跃度偏低，无 PR 更新、无新版本发布，动态集中在 Issue 侧（3 条更新：2 新开/活跃、1 关闭）。最值得关注的是长期存在的 DingTalk Stream SDK 重连 panic 问题在 v0.3.1 上被复现回归（#3382），以及项目官网 TLS 证书过期已持续 10 天未修复（#3377，已标记 stale）。基础设施与遗留 Bug 响应速度是当前项目健康度的主要短板。

## 2. 版本发布

今日无新版本发布。最新仍为 v0.3.1。

## 3. 项目进展

- 今日无 PR 合并或关闭，代码层面无可见推进。
- Issue #973（QQ + DingTalk 挂机过夜 PANIC 退出）于今日关闭，但需注意：其报告的 DingTalk 重连 panic 症状在 #3382 中被证实于 v0.3.1 仍可复现，关闭可能是部分修复或误关，建议维护者复核并关联两个 Issue。

## 4. 社区热点

- **[#3382](https://github.com/sipeed/picoclaw/issues/3382)**（今日新开）：用户 @HenryLoveMiller 提供了详尽的复现信息（版本、commit、SDK 版本 pin），表明社区对 DingTalk Stream 模式稳定性的诉求强烈且持续。目前 0 评论，尚未获维护者响应。
- **[#3377](https://github.com/sipeed/picoclaw/issues/3377)**：官网 TLS 证书于 2026-09-10 过期，全站对所有浏览器不可访问，已 8 天无进展、被标记 stale。作者 @dimonb 明确表达了对时间敏感性问题长期无人处理的失望，反映运维响应流程缺失。

## 5. Bug 与稳定性

按严重程度排列：

1. **🔴 Critical — [#3377](https://github.com/sipeed/picoclaw/issues/3377)** 官网 TLS 证书过期 10 天，站点对所有访客不可达。影响项目形象与新用户获取。**无 fix PR**。已 stale。
2. **🔴 High — [#3382](https://github.com/sipeed/picoclaw/issues/3382)** v0.3.1 DingTalk Stream SDK 重连时 `send on closed channel` panic（client.go:161），上游 `dingtalk-stream-sdk-go` v0.9.1 pin 疑似为根因。**无 fix PR**。
3. **🟡 Medium（已关闭待验证）— [#973](https://github.com/sipeed/picoclaw/issues/973)** 挂机过夜 QQ/DingTalk 消息队列关闭导致 panic 退出，今日关闭，但与 #3382 症状重叠，**关闭状态存疑**。

## 6. 功能请求与路线图信号

今日无明确功能请求。可推断的路线图信号：

- **稳定性优先**：#3382 与 #973 共同指向 channel 层重连/生命周期管理需系统性加固，且需评估升级上游 dingtalk-stream-sdk-go 依赖（当前 pin v0.9.1）。
- **运维基建**：#3377 暴露需建立证书自动续期与告警机制，建议纳入下个迭代。

## 7. 用户反馈摘要

- **痛点**：多 channel（DingTalk Stream 模式）长时间在线场景下进程 panic 崩溃，且跨多个版本（至 v0.3.1）未根治，用户（@atom12138、@HenryLoveMiller）被迫反复跟进同一问题，体验受挫。
- **不满**：官网不可访问持续 10 天、Issue 无人响应被自动 stale，社区用户对维护者响应速度表达不满。
- **正面信号**：用户反馈质量高——提供完整版本号、commit hash、SDK 依赖版本与复现时间，说明核心用户群具备较强工程能力，是有价值的贡献来源。

## 8. 待处理积压

- **[#3377](https://github.com/sipeed/picoclaw/issues/3377)**：Critical 级官网不可达，已 8 天无响应、被 stale。**强烈建议立即处理**（续期证书 + 修复流程）。
- **[#3382](https://github.com/sipeed/picoclaw/issues/3382)**：今日新开，0 回复。鉴于 #973 已关闭而问题仍复现，应尽快认领并澄清版本修复状态。
- **#973 关闭复核**：建议维护者确认关闭原因，若为误关应重开或引导至 #3382，避免问题追踪断链。

---
*健康度小结：Issue 响应与基础设施运维是当前薄弱环节；核心 DingTalk channel 稳定性 Bug 已跨版本存活 6 个月以上，建议作为下一版本最高优先级。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-09-20

## 1. 今日速览

今日 NanoClaw 处于**低活跃度但持续推进**状态：过去 24 小时无新 Issue、无版本发布，但有 **4 个 PR 保持活跃**（全部为待合并状态，无合并/关闭）。项目整体重心集中在**供应商扩展（新 pi agent provider）、运维健壮性（可配置空闲超时、`ncl health` 健康检查）以及容器挂载安全加固**三条线上。值得注意的是，4 个活跃 PR 中有 2 个涉及安全领域（`area/security`），且均由社区贡献者提交，显示社区对安全性与可运维性的关注度上升。

## 2. 版本发布

今日无新版本发布，无最新 Release 记录，无破坏性变更或迁移事项需要关注。

## 3. 项目进展

今日**无 PR 被合并或关闭**，4 个活跃 PR 均处于 OPEN 状态等待审查：

- **#3646** — `fix(sweep)`：将原本硬编码 30 分钟的 kill 阈值改为**可配置的空闲超时**，并应用到两条 kill 路径。这直接解决了本地慢速模型推理被误判为“死亡”而被清理的核心痛点，对本地部署用户体验改善显著。该 PR 由 core-team 标签，创建至今已约 3 周，更新于 9 月 19 日，是积压中最值得优先审查的一项。（[PR #3646](https://github.com/nanocoai/nanoclaw/pull/3646)）
- **#3680** — 修复 `validateSpec` 中 **allowlisted-extra 挂载绕过漏洞**，涉及容器、凭证与安全多个区域，是当前安全侧最重要的待合并修复。（[PR #3680](https://github.com/nanocoai/nanoclaw/pull/3680)）
- **#3856** — 新增 `ncl health` 只读健康检查命令，关联并关闭 Issue #2504，零依赖、即使主 host 进程挂掉也能工作。（[PR #3856](https://github.com/nanocoai/nanoclaw/pull/3856)）
- **#3857** — 通过 `/add-pi` skill 新增 **pi agent provider**，属于 Feature skill 类贡献（源码变更 + SKILL.md）。（[PR #3857](https://github.com/nanocoai/nanoclaw/pull/3857)）

**整体判断**：项目进展处于“贡献持续流入、但审查/合并吞吐偏低”的阶段，今日净推进有限。

## 4. 社区热点

今日无新增 Issue，PR 评论数据缺失（评论数均为 undefined），无法识别明确的热点讨论。从 PR 标签和更新行为间接推断：

- **#3857（pi provider）** 昨日创建、今日更新，是最新鲜的贡献，围绕 **provider/skill 生态扩展**，反映社区对 NanoClaw 支持更多 agent 后端的诉求。（[PR #3857](https://github.com/nanocoai/nanoclaw/pull/3857)）
- **#3856（ncl health）** 同样是 9 月 19 日的新贡献，直接响应 Issue #2504，说明**本地运维可观测性**是用户明确提出的真实需求。（[PR #3856](https://github.com/nanocoai/nanoclaw/pull/3856)）

## 5. Bug 与稳定性

今日无新报告 Bug。现有待合并的修复类 PR：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高（安全） | 挂载校验 allowlist 绕过漏洞（凭证/容器安全） | 已有 fix PR [#3680](https://github.com/nanocoai/nanoclaw/pull/3680)，待合并 |
| 🟡 中（稳定性） | 慢速本地模型因心跳仅依赖 provider 流事件而被 sweep 误杀 | 已有 fix PR [#3646](https://github.com/nanocoai/nanoclaw/pull/3646)，待合并 |

两个修复均已存在但未合并，建议维护者优先处理安全修复 #3680。

## 6. 功能请求与路线图信号

- **Provider 生态扩展**：#3857 的 pi agent provider 表明社区正在通过 `/add-pi` skill 机制自主贡献新后端，如果合并，provider 列表将进一步扩大，这是当前最清晰的路线图方向。（[PR #3857](https://github.com/nanocoai/nanoclaw/pull/3857)）
- **CLI 运维工具链**：`ncl health`（#3856，关闭 #2504）呼应了用户对“host 挂掉时仍可诊断”的需求，若合并将成为 `ncl` CLI 首个不依赖活跃 host 的命令，可能带动后续运维类子命令的系列贡献。（[PR #3856](https://github.com/nanocoai/nanoclaw/pull/3856)）
- **可配置化运维**：#3646 的可配置空闲超时延续了项目“减少硬编码、增强本地部署友好度”的趋势，与本地模型用户的诉求一致。（[PR #3646](https://github.com/nanocoai/nanoclaw/pull/3646)）

## 7. 用户反馈摘要

今日无 Issue 评论数据可提炼。基于现有 PR 摘要间接反映的用户痛点：

- **本地模型用户**：慢速本地推理后端（慢于托管推理服务）会被 sweep 误判为死进程而 kill，导致长任务中断——这是 #3646 明确指出的问题，是本地部署用户的核心痛点。
- **运维/排障场景**：所有现有 `ncl` 命令都要求主 host 进程存活，host 宕机时用户完全失去诊断能力——#3856 的作者为此实现了零依赖只读检查，说明这一盲区困扰真实用户。
- **安全合规需求**：社区对挂载路径校验绕过问题主动提交修复，显示有用户在生产/多租户场景下使用容器能力，对凭证隔离有硬性要求。

## 8. 待处理积压

需提醒维护者关注：

1. **[PR #3646](https://github.com/nanocoai/nanoclaw/pull/3646)**（8 月 29 日创建，已滞留 **~3 周**）：core-team 标签的稳定性修复，涉及 agent-runner、配置、容器、安全等多区域，审查复杂度高但价值大，建议尽快排期。
2. **[PR #3680](https://github.com/nanocoai/nanoclaw/pull/3680)**（8 月 30 日创建，滞留 ~3 周）：**安全修复类 PR 长期未合并存在风险敞口**，且已带 `follows-guidelines` 标签，建议最高优先级审查合并。
3. **Issue #2504**：已被 #3856 声明关闭但 PR 尚未合并，注意关闭状态与实际代码落地的一致性。

**健康度小结**：贡献管道有货（4 个待审 PR 覆盖安全、稳定性、功能三条线），但**审查吞吐是当前瓶颈**；无新 Issue 与无 Release 表明项目处于功能沉淀期而非活跃迭代期。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报（2026-09-20）

## 1. 今日速览

IronClaw 今日整体活跃度较低：过去 24 小时无 Issue 动态、无新版本发布，仅 1 条 PR 更新。唯一活跃项为 [PR #7499](https://github.com/nearai/ironclaw/pull/7499)（`feat(identyclaw): host-mediated Passport for practitioners`），该 PR 于 9 月 19 日有更新但仍处待合并状态。总体而言，项目处于平稳期，核心维护节奏未见异常，但社区互动数据今日为零，值得持续观察。

## 2. 版本发布

今日无新版本发布。当前无 Releases 记录，项目可能采用主干开发模式或按需发版。

## 3. 项目进展

- 今日无已合并或已关闭的 PR，合并吞吐量为 0。
- 唯一活跃 PR：**[PR #7499](https://github.com/nearai/ironclaw/pull/7499)** — `feat(identyclaw): host-mediated Passport for practitioners`
  - **作者**：@discernible-io（新贡献者）| **创建**：2026-08-11 | **更新**：2026-09-19
  - **内容**：引入轻量宿主接口（`builtin.idcp` + policy grant / AskAlways 豁免），使无进程（processless）的 IronClaw 智能体无需 shell 或可安装扩展即可调用 IdentyClaw Passport；同时在 `deploy/identyclaw/` 下交付面向从业者的宿主工具包（Node CLI + `:3921` 可选回环助手）。
  - **评估**：标签为 size: XL、risk: low、scope: docs/dependencies。体量大但风险低，自 8 月 11 日创建至今约 40 天仍待审，是当前最需要维护者评审投入的变更。

## 4. 社区热点

今日无评论或反应数据（Issues 0 条、PR #7499 无 👍 与评论记录），无明确社区热点。

值得侧面关注的是 PR #7499 本身——它针对“无进程智能体身份调用”这一场景，暗示身份/Passport 集成是当前生态方向之一，但因缺乏讨论数据，暂无法判断社区诉求强度。

## 5. Bug 与稳定性

今日无新增 Bug、崩溃或回归报告。无法进行严重程度排序，也没有关联的 fix PR。

## 6. 功能请求与路线图信号

今日无新增功能请求。从 PR #7499 可推断的路线图信号：

- **身份能力下沉到宿主层**：通过 `builtin.idcp` 内建接缝而非扩展机制提供 Passport 能力，若合并，将成为无进程智能体调用身份服务的标准路径。
- **部署友好性**：`deploy/identyclaw/` 宿主工具包（CLI + 回环助手）表明项目在降低从业者部署门槛。
- 由于该 PR 已存放 40 天，建议关注其评审进展以判断下一阶段版本方向。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼用户反馈。建议后续持续跟踪 PR #7499 的评审意见，其中可能隐含维护者对 IdentyClaw 集成边界的看法。

## 8. 待处理积压

- **[PR #7499](https://github.com/nearai/ironclaw/pull/7499)**：自 2026-08-11 开启，至今约 40 天未合并，最近一次更新为 2026-09-19。作为 XL 体量、low 风险的功能性变更，且来自新贡献者（contributor: new），建议维护者优先安排评审，避免新贡献者体验受挫及变更因长期搁置产生合并冲突。
- 今日无长期未响应 Issue 需要提醒。

---

**健康度小结**：今日数据量小（1 PR / 0 Issue / 0 Release），单一指标不宜过度解读；但“大型 PR 长期未合并 + 新贡献者”组合是值得关注的信号，建议下周重点观察评审响应情况。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-09-20

## 1. 今日速览

今日 LobsterAI 呈现“批量清理 + 单点活跃”的态势：过去 24 小时共有 2 条 Issue 更新（1 新开/活跃、1 关闭）和 7 条 PR 更新（7 条全部关闭，0 条待合并），无新版本发布。值得注意的是，7 条关闭的 PR 中 6 条带 `[stale]` 标记，属于机器人自动关闭的长期积压贡献，并非主动合入。唯一非 stale 的活动是 [@Mind-Hand](https://github.com/netease-youdao/LobsterAI/pull/2720) 的商业化 PR（#2720）于今日创建并关闭，显示项目重心正向订阅变现功能倾斜。整体活跃度中等偏低，核心维护节奏趋缓。

## 2. 版本发布

今日无新版本发布，无迁移事项需关注。

## 3. 项目进展

今日 7 条 PR 均为关闭（非合并），进展判断需区分主动推进与 stale 自动清理：

- **#2720 一分钱试用与低额度购买优惠（今日创建即关闭）**：[PR #2720](https://github.com/netease-youdao/LobsterAI/pull/2720) 由 @Mind-Hand 提交，覆盖 ¥0.01 订阅试用活动全链路（IPC 状态获取、频控弹窗、Portal 结算跳转、埋点）及低余额优惠展示（首购/限时优惠、倒计时、订阅/加量包分流）。该 PR 涉及 renderer/main/cowork/docs 多区域，今日创建当日关闭，可能是被拒绝或需要重提，是观察项目商业化路线的重要信号。
- **#1069-#1077（6 条 stale PR 被自动关闭）**：包括 CoworkSessionDetail 拆分重构（[#1069](https://github.com/netease-youdao/LobsterAI/pull/1069)）、per-session MCP 开关（[#1070](https://github.com/netease-youdao/LobsterAI/pull/1070)）、SQLite 完整性修复（[#1072](https://github.com/netease-youdao/LobsterAI/pull/1072)）、WSL 构建修复（[#1075](https://github.com/netease-youdao/LobsterAI/pull/1075)）、任务迁移数据丢失修复（[#1076](https://github.com/netease-youdao/LobsterAI/pull/1076)）、agent 删除后刷新修复（[#1077](https://github.com/netease-youdao/LobsterAI/pull/1077)）。这些社区贡献因长期无维护者响应被机器人关闭，**实质功能进展为零**，属于负向清理。

**结论：项目今日无实质代码前进，反而损失了 6 个有价值的社区修复贡献。**

## 4. 社区热点

- [Issue #1071](https://github.com/netease-youdao/LobsterAI/issues/1071)（今日关闭，2 条评论）：@MaoQianTu 报告的 SQLite 存储层三个数据完整性缺陷，是近期技术含量最高的社区反馈，配套修复 PR #1072 同日被 stale 关闭。诉求核心：**存储层可靠性存在生产级风险，社区已给出完整修复方案但未被采纳**。
- [Issue #1014](https://github.com/netease-youdao/LobsterAI/issues/1014)（仍 OPEN，1 条评论）：Dispatch 平台的 skill 发现通知，属外部工具推广，非真实用户诉求。

社区讨论总量偏低，无高热度话题。

## 5. Bug 与稳定性

按严重程度排列（均为历史报告，今日被 stale 关闭，**均无已合入的 fix**）：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | SQLite 三缺陷：CASCADE 失效致孤儿消息无限累积、save() 非原子写可致崩溃数据损坏、storeInitPromise 超时后永久故障（[#1071](https://github.com/netease-youdao/LobsterAI/issues/1071)） | Issue 已关闭，修复 PR [#1072](https://github.com/netease-youdao/LobsterAI/pull/1072) 被 stale 关闭，**风险仍存在** |
| 🔴 高 | 定时任务 Run History 迁移写入失败仍标记完成，数据永久丢失（[#1076](https://github.com/netease-youdao/LobsterAI/pull/1076)） | 修复 PR 被 stale 关闭，未合入 |
| 🟡 中 | 安装 WSL 的 Windows 上构建失败（[#1075](https://github.com/netease-youdao/LobsterAI/pull/1075)） | 修复 PR 被 stale 关闭，未合入 |
| 🟢 低 | 删除当前 agent 后任务列表不刷新（[#1077](https://github.com/netease-youdao/LobsterAI/pull/1077)） | 修复 PR 被 stale 关闭，未合入 |

## 6. 功能请求与路线图信号

- **商业化/订阅体系**（明确信号）：#2720 的一分钱试用 + 低余额购买优惠表明订阅变现是当前开发主线，预计相关功能将在下一版本强化。
- **per-session MCP 开关**（[#1070](https://github.com/netease-youdao/LobsterAI/pull/1070)）：完成度较高的社区 PR，实现思路完整（Popover UI + DB 持久化 + McpBridgeServer 拦截），符合 Agent 桌面端精细化控制趋势，但已被关闭，需维护者表态是否重做。
- **渲染性能优化**（[#1069](https://github.com/netease-youdao/LobsterAI/pull/1069)）：2100+ 行核心组件拆分方案，若采纳将显著改善流式输出重渲染问题，目前随 stale 关闭而搁置。

## 7. 用户反馈摘要

- **存储可靠性焦虑**：社区贡献者主动审计存储层并指出生产环境数据丢失风险（#1071），反映深度用户对数据安全的强烈关注。
- **Windows 开发体验**：WSL 环境构建失败（#1075）说明存在 Windows 开发者群体，且构建脚本对环境的健壮性不足。
- **UI 状态一致性**：agent 删除后任务列表不刷新（#1077）属于典型的小而烦的体验问题，附有录屏复现，用户表达直接。
- **负面信号**：多位高质量贡献者的修复 PR 长期无响应直至被机器人关闭，可能挫伤社区贡献积极性。

## 8. 待处理积压

| 条目 | 类型 | 状态 | 关注点 |
|---|---|---|---|
| [#1014](https://github.com/netease-youdao/LobsterAI/issues/1014) | Issue | OPEN（stale 风险） | 优先级低，可关闭 |
| [#1071](https://github.com/netease-youdao/LobsterAI/issues/1071) 数据完整性 | Issue | 已关闭但未修复 | **建议重开并评估 #1072 修复方案**，属生产级风险 |
| [#1072](https://github.com/netease-youdao/LobsterAI/pull/1072)、[#1076](https://github.com/netease-youdao/LobsterAI/pull/1076) 等被 stale 关闭的修复 PR | PR | 已关闭 | 6 个修复/功能 PR 均有价值，建议维护者集中 triage，要求重提或直接恢复 |

**维护者提醒**：当前 stale 机器人正在系统性清理高质量社区贡献，若不干预，项目将面临社区信任流失与已知 Bug 长期得不到修复的双重风险。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-09-20）

## 1. 今日速览

过去 24 小时 Moltis 保持中等活跃度：4 条 Issue 更新（3 新开 / 1 关闭）、1 条 PR 待合并，无新版本发布。今日焦点集中在 **Heartbeat 子系统**——`active_hours` 配置不生效的长期 Bug 迎来深入代码级报告，且派生出 `tool_controls` 无法配置的新问题。同时一个大型社区 PR（#1276）将 Groq 提升为一等 Provider，功能面有所推进，但修复类工作尚无合并落地。

## 2. 版本发布

今日无新版本发布。最新代码参考点仍为 `main` (9d3238c) 与 tag `20260414.02`。

## 3. 项目进展

- **PR [#1276](https://github.com/moltis-org/moltis/pull/1276)**（OPEN，待合并）：将 Groq 从 genai 兜底路径改造为真正的 OpenAI 兼容一等 Provider——所有已配置 Groq 模型支持工具调用与模型发现；Groq Compound 明确标记为不支持工具；同时引入严格零参数工具 schema 与可解析的 mutation 结果。这是今日唯一 PR，覆盖 provider 层 + schema 层的多项改进，合并价值较高，建议维护者优先 review。

今日无 PR 合并，主分支无功能性推进。

## 4. 社区热点

- **Issue [#1278](https://github.com/moltis-org/moltis/issues/1278)**（1 条评论，已关闭）：@jbutler1980 提供了详尽的代码考古证据——`is_within_active_hours` 在 `main` 和 `20260414.02` tag 中除自身测试外**零调用方**，证明文档承诺的 `heartbeat.active_hours` 从未被评估。该 Issue 与长期挂着的 [#1205](https://github.com/moltis-org/moltis/issues/1205) 是同一根因，社区对“文档与实现脱节”的不满情绪明显。
- **Issue [#1205](https://github.com/moltis-org/moltis/issues/1205)**（1 条评论，创建于 8/16，今日活跃）：用户 @IlyaBizyaev 报告 Heartbeat 忽略 active_hours 持续运行。与 #1278 形成“用户侧现象 + 代码侧根因”的完整证据链，是当前最值得优先修复的线索。

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 高 | [#1205](https://github.com/moltis-org/moltis/issues/1205) + [#1278](https://github.com/moltis-org/moltis/issues/1278)（已关，疑为重复标记） | `heartbeat.active_hours` 配置完全无效，Heartbeat 24 小时不间断运行，影响资源消耗与用户预期 | ❌ 暂无 |
| 中 | [#1279](https://github.com/moltis-org/moltis/issues/1279) | Heartbeat 注册路径硬编码 `Default::default()`，导致 `CronPayload::AgentTurn` 的 `tool_controls` 无法配置（cron 路径本身支持） | ❌ 暂无 |
| 中 | [#1277](https://github.com/moltis-org/moltis/issues/1277) | `spawn_agent` 将 `active_tools: []` 解释为空白名单而非“无限制”，子代理零工具可用，可能造成子代理功能完全失效 | ❌ 暂无 |

**注意**：#1278 被关闭但根因尚未修复（#1205 仍 OPEN 且无关联 fix PR），关闭理由需维护者澄清，避免问题被“关闭式掩埋”。

## 6. 功能请求与路线图信号

- **Groq 一等支持**（PR #1276）：社区驱动的 Provider 扩展，方向明确、实现完整，大概率进入下一版本。
- **Heartbeat 可配置化**（#1279）：`tool_controls` 应可通过配置传入，属于 Heartbeat 子系统完善的一部分；结合 #1205/#1278，可预期一次 Heartbeat 集中修复。
- **`active_tools: []` 语义澄清**（#1277）：隐含需求是“默认继承全部工具”的合理默认值设计。

## 7. 用户反馈摘要

- 用户依赖文档配置 `active_hours` 来控制后台资源消耗，实际不生效导致失望（#1205/#1278），反映**文档可信度**是痛点。
- 高级用户（子代理、cron 任务场景）需要精细的工具权限控制（#1277、#1279），说明 Moltis 已有一批深度自动化用户，但配置表达能力尚有断层。
- 社区贡献质量高：多处 Issue 附带精确代码定位与复现信息，是健康生态的积极信号。

## 8. 待处理积压

- **#1205**：开启已超 1 个月（8/16 创建），今日虽有讨论升温但仍无维护者修复承诺——建议尽快关联修复 PR。
- **PR #1276**：变更面较大（provider + schema + mutation 解析），若长期无人 review 易导致贡献者流失，建议维护者优先排期。
- **#1277 / #1279**：今日新开，尚无维护者回应，观察 48 小时内是否有 triage 标签。

---
*数据来源：Moltis GitHub 仓库，统计窗口 2026-09-19 至 2026-09-20。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 · 2026-09-20

> 数据来源：github.com/agentscope-ai/CoPaw（仓库内部名称 QwenPaw）过去 24 小时活动

---

## 1. 今日速览

项目今日保持高活跃度：**24 小时内 Issues 更新 14 条（全部为活跃/新开，0 关闭）、PR 更新 23 条（20 条待合并、3 条合并/关闭）**，并发布了 1 个 Beta 版本 v2.2.2-beta.3。社区贡献活跃，多个 first-time-contributor PR 提交了高质量修复与性能优化。当前工作重心集中在 v2.2.2 的稳定性打磨：Console 前端错误恢复、provider 兼容性（OpenCode / DeepSeek / 音频降级）和插件治理管线是三条主线。值得注意的是，出现了 1 个潜在安全类 Issue（#7859 持久化提示注入），需要优先关注。

---

## 2. 版本发布

### v2.2.2-beta.3（Beta）
- **fix(console)**: 恢复 assistant 响应操作按钮（[PR #7851](https://github.com/agentscope-ai/QwenPaw/pull/7851)）
- **fix(e2e)**: 修复 #7502 改版导致的 Console 选择器失效，并加固会话列表断言（[PR 相关](https://github.com/agentscope-ai/QwenPaw)）
- 安装验证追踪 Issue：[#7891](https://github.com/agentscope-ai/QwenPaw/issues/7891)（发布后 4 小时内需完成四平台安装验证）
- 无破坏性变更，属常规修复性 Beta。
- 另有已关闭的 [PR #7892](https://github.com/agentscope-ai/QwenPaw/pull/7892) 将版本号推进至 2.2.2b4，说明 **2.2.2 正式版节奏正在加快**。

---

## 3. 项目进展

过去 24 小时合并/关闭 3 个 PR，主要价值在于 CI/版本推进：

- **[PR #7892](https://github.com/agentscope-ai/QwenPaw/pull/7892)（已关闭）**：版本号推进至 2.2.2b4，为下一轮 Beta/RC 做准备。
- **[PR #7863](https://github.com/agentscope-ai/QwenPaw/pull/7863)（已关闭）**：修复 Windows 下 Uvicorn reload 集成测试与快照测试稳定性（设置 `app_dir`、固定 LF checkout 保持 SHA-256 校验一致性），直接提升 Windows CI 可靠性。
- **[PR #6399](https://github.com/agentscope-ai/QwenPaw/pull/6399)（已关闭）**：ReMeLightMemoryCard 中新增 reranker 可视化配置面板，补齐 reranker 后端功能的前端入口。

**整体判断**：合并以维护性工作为主，但 20 个待合并 PR 中包含多个功能级贡献（多标签聊天终端 #7861、AgentScope Platform 内置 Provider #7843、插件策略钩子 #7880），v2.2.2 正式版的功能面将明显扩展。

---

## 4. 社区热点

| 排名 | 条目 | 热度 | 主题 |
|---|---|---|---|
| 1 | [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | 5 评论 | Console 懒加载页面失败后无法自愈，重试机制失效，只能整页刷新 |
| 2 | [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) | 4 评论 | **安全类**：tool-result 系统提醒块中持续出现“删除所有 skills”的注入指令，本地磁盘找不到来源 |
| 3 | [#7878](https://github.com/agentscope-ai/QwenPaw/issues/7878) | 3 评论 | 功能请求：暴露插件可见的 pre-tool-call 策略钩子（治理管线决策 oracle） |
| 4 | [#7881](https://github.com/agentscope-ai/QwenPaw/issues/7881) | 2 评论 | kimi-code ACP runner 边界/危险命令检查绕过不均：Edit 被拦截，Write/Bash 完全放行 |
| 5 | [#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599) | 2 评论 | opencode go 套餐持续报 MissingSessionID（400） |
| 6 | [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | 2 评论 | 聊天历史记录过短，翻阅不便（用户情绪较强烈） |

**诉求分析**：
- **安全与治理是本周最强信号**：#7859（提示注入）与 #7881（危险命令检查绕过）共同指向“工具调用边界防护不完整”，社区在安全侧的敏感度很高。
- **插件生态扩展**：#7878（策略钩子）与 [PR #7880](https://github.com/agentscope-ai/QwenPaw/pull/7880) 形成了 Issue+PR 呼应，外部组织希望在不 monkey-patch 宿主的前提下接入自有风控分类器。
- **历史记录长度**（#7884）反映轻量用户对默认配置的直接不满。

---

## 5. Bug 与稳定性（按严重程度）

### 🔴 高（安全/数据风险）
1. **[#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859)** 持久化提示注入，指令要求 agent 删除所有 skills，跨会话持续 20+ 轮，来源未定位。**暂无 fix PR**——建议最高优先级排查。
2. **[#7881](https://github.com/agentscope-ai/QwenPaw/issues/7881)** kimi-code ACP runner 绕过边界与破坏性命令检查（Write/Bash 完全裸奔）。**暂无 fix PR**，与 #7878/#7880 的治理钩子工作相关。

### 🟠 中（功能性故障）
3. **[#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883)** 工具返回的 PDF 被序列化为 OpenAI 嵌套 file part，DeepSeek 拒绝（400）；#7597 的修复在 2.2.1 上仍可复现。**暂无针对性 fix PR**。
4. **[#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882)** OpenCode 供应商“免费”模型 API 调用必失败（403 FreeTierError），但 UI 仍标记为免费——**[PR #7869](https://github.com/agentscope-ai/QwenPaw/pull/7869)（发送 OpenCode session header）可能同时覆盖 #7599 的 MissingSessionID**。
5. **[#7890](https://github.com/agentscope-ai/QwenPaw/issues/7890)** 零停机 reload 后插件 runtime hook 被静默丢弃（middleware 却保留），reload 与重启语义不一致。**暂无 fix PR**。
6. **[#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888)** Edge 浏览器注入 `<font>` 标签导致 React `insertBefore NotFoundError`，聊天页卡死。**已有 fix PR：[#7889](https://github.com/agentscope-ai/QwenPaw/pull/7889)**（DOM-mutation 渲染错误自愈）。
7. **[#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815)** 懒加载 chunk 失败后错误边界无法恢复。相关恢复思路见 #7889 / #7865。

### 🟡 低（UI/体验）
8. **[#7866](https://github.com/agentscope-ai/QwenPaw/issues/7866)** 文件区 tab 显示旧内容（会话卡片正确）。**已有 fix PR：[#7867](https://github.com/agentscope-ai/QwenPaw/pull/7867)**。
9. **[#7879](https://github.com/agentscope-ai/QwenPaw/issues/7879)** MCP OAuth 握手缺 client_id/resource，无法接入静态 Bearer Key 类 MCP server（企查查 QCC）。
10. **[#7877](https://github.com/agentscope-ai/QwenPaw/issues/7877)** 会话工作目录面板三处 UI 问题（可视区仅 3 行、「最近项目」恒空、「应用」按钮禁用）。

---

## 6. 功能请求与路线图信号

| 请求 | 状态 | 进入下一版本可能性 |
|---|---|---|
| 插件 pre-tool-call 策略钩子（[#7878](https://github.com/agentscope-ai/QwenPaw/issues/7878)） | **已有实现 PR [#7880](https://github.com/agentscope-ai/QwenPaw/pull/7880)（首 contributors，标注 ready for review）** | ⭐⭐⭐ 高，且可顺带回应 #7881 的安全诉求 |
| 多标签认证聊天终端（[PR #7861](https://github.com/agentscope-ai/QwenPaw/pull/7861)） | 待合并，核心维护者 @zhijianma 提交 | ⭐⭐⭐ 高 |
| AgentScope Platform 内置 Provider（[PR #7843](https://github.com/agentscope-ai/QwenPaw/pull/7843)） | Under Review | ⭐⭐⭐ 高 |
| 静态 Bearer Key MCP server 支持（#7879） | 无 PR | ⭐⭐ 中 |
| 更长的聊天历史保留（#7884） | 无 PR | ⭐ 低（可能以配置项形式回应） |

性能优化方向（[PR #7868](https://github.com/agentscope-ai/QwenPaw/pull/7868) 构建热路径缓存、[PR #6381](https://github.com/agentscope-ai/QwenPaw/pull/6381) Driver 能力快照、[PR #7829](https://github.com/agentscope-ai/QwenPaw/pull/7829) 前端分包懒加载）虽非用户直接请求，但连续多个 PR 显示**运行时启动/请求延迟是团队内部明确的优化主题**。

---

## 7. 用户反馈摘要

**痛点集中点**：
- **错误恢复能力不足**：#7815、#7888、#7866 三个 Issue 均指向“出错后 UI 卡死/状态陈旧，需手动刷新”，是用户最直接的不满；对应已有 3 个自愈类 fix PR（#7889/#7865/#7867），说明团队已识别该系统性问题。
- **第三方 Provider 兼容性碎片化**：OpenCode（#7599/#7882）、DeepSeek（#7883）、kimi-code（#7881）、音频 rejection（[PR #7886](https://github.com/agentscope-ai/QwenPaw/pull/7886)）——用户接入非默认 Provider 时故障率高。
- **历史记录过短**（#7884）：语言较激烈（“体验多差么？？？”），代表轻量桌面用户的基本预期。
- **正反馈**：首贡献者 PR 数量多且质量高（#7880/#7867/#7868/#7865），Issue 报告普遍附带详细环境与复现信息，说明核心用户群专业度高、社区协作氛围健康。
- **测试文化成熟**：[PR #7894](https://github.com/agentscope-ai/QwenPaw/pull/7894) 一次性提交 +1027 语句覆盖（+543 用例），并有 AI 辅助署名机制。

---

## 8. 待处理积压

| 条目 | 持续时间 | 风险提示 |
|---|---|---|
| [#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599) OpenCode MissingSessionID | 09-07 起 **13 天**，今日仍在更新 | 有 PR #7869 在途，建议加速 review |
| [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) 懒加载无法自愈 | 09-16 起 4 天，5 评论 | 高关注度，尚无直接 fix PR |
| [PR #7345](https://github.com/agentscope-ai/QwenPaw/pull/7345) 工具卡片卡“执行中” | 08-27 起 **24 天**未合并 | 分析详尽但长期滞留，存在与近期 Console 改动冲突的风险 |
| [PR #6668](https://github.com/agentscope-ai/QwenPaw/pull/6668) Responses prompt caching | 08-04 起 **47 天** | 功能性 PR 长期未决，影响 GPT-5.6+ 用户成本 |
| [PR #6381](https://github.com/agentscope-ai/QwenPaw/pull/6381) Driver 能力快照缓存 | 07-23 起 **59 天** | 性能优化滞留近两月，建议维护者给出明确 review 结论 |
| [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | 属于 #7597 修复不彻底的**回归** | “closed as fixed 但用户仍复现”会损害信任，建议重新打开追踪 |

---

### 项目健康度小结
- **活跃度**：✅ 高（14 Issues + 23 PRs / 24h，首贡献者持续涌入）
- **响应性**：⚠️ 中（多数新 Issue 已有对应 fix PR，但 2 个安全类 Issue 无响应 PR；3 个 PR 积压超 3 周）
- **质量风险**：⚠️ 需关注（#7859 注入来源未定位、#7883 修复回归、#7881 安全检查绕过）

**建议维护者优先处理**：#7859 安全排查 → #7880 review 合入（兼收 #7881）→ #7869 合入（覆盖 #7599/#7882）→ 清理 3 周以上 PR 积压。

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