# OpenClaw 生态日报 2026-10-31

> Issues: 461 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-31 04:38 UTC

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

# OpenClaw 项目日报 — 2026-10-31

## 1. 今日速览

今日 OpenClaw 保持高活跃度：过去 24 小时 Issues 更新 461 条（新开/活跃 321，关闭 140），PR 更新 500 条（待合并 250，已合并/关闭 250），无新版本发布。修复吞吐良好，社区贡献以稳定性和 doctor 修复工具链问题为主。Windows/macOS 更新可靠性和会话状态管理（SQLite lease、checkpoint）仍是用户痛点的重灾区。整体健康度：**活跃偏高、修复速度尚可，但多个 P0/P1 长期 issue 积压待维护者决策**。

## 2. 版本发布

今日无新 Release。注意社区反复提及 `2026.10.8`、`v2026.10.10-beta.4` 等标签存在但未在 Release 列表中展示，部分已合并修复（如 #164445 历史状态恢复）尚未进入任何正式 tag（见 [#141474](https://github.com/openclaw/openclaw/issues/141474) 最新评论）。

## 3. 项目进展

今日关闭的代表性 PR：

- [#189027](https://github.com/openclaw/openclaw/pull/189027)（XL）：schema 变更时避免 validator 生成大量无关 diff，降低开发者维护噪音。
- [#189026](https://github.com/openclaw/openclaw/pull/189026)（XL）：大 slash 菜单渲染性能优化 + 跨引擎基准。
- [#189021](https://github.com/openclaw/openclaw/pull/189021)：插件注册表索引去重，冷启动性能提升。
- [#189028](https://github.com/openclaw/openclaw/pull/189028)：修复 Git 参数继承导致的分支缓存测试误报。
- [#120414](https://github.com/openclaw/openclaw/pull/120414)：exec 后台任务说明文档改进（长期 PR 收尾）。
- [#188260](https://github.com/openclaw/openclaw/pull/188260)：Decision 重构栈第 19 部分关闭，[#188264](https://github.com/openclaw/openclaw/pull/188264)（第 20 部分）待合并，重构系列接近完成。

今日新开的值得关注的 PR：

- [#189025](https://github.com/openclaw/openclaw/pull/189025)（P1）：doctor 卡死恢复，直接关联 #187900 / #178359。
- [#189014](https://github.com/openclaw/openclaw/pull/189014)（P1，ready for maintainer look）：单个插件 provider 缺凭证不再导致整个 `models.list` 失败。
- [#188957](https://github.com/openclaw/openclaw/pull/188957)：取消等待中的 guest workspace 准备，避免 run 取消后 setup 悬挂。

**整体进展判断**：性能优化（UI 渲染、注册表、doctor 耗时）和 provider 健壮性是本周主线；Decision 重构栈即将收官。

## 4. 社区热点

- [#170956](https://github.com/openclaw/openclaw/issues/170956)（P0，27 评论）：Windows `schtasks` 托管安装下重启/更新极不可靠，启动慢 + 插件不干净关闭 + 权限错误。标注 `needs-maintainer-review` 且 `no-new-fix-pr`，是当前评论最多的 issue。
- [#150635](https://github.com/openclaw/openclaw/issues/150635)（23 评论）：短期记忆召回存储满 512 条后，夜间 dreaming 深度阶段永远无法晋升条目——memory-core 记忆系统的核心缺陷，已有 linked PR 但仍 open。
- [#120385](https://github.com/openclaw/openclaw/issues/120385)（23 评论）：cron/memory-flush 轮次中 MCP 工具目录构建不完整，用户只看到 "Exec failed"，排障体验差。
- [#177656](https://github.com/openclaw/openclaw/issues/177656)（P1，21 评论）：2026.10.5 稳定版上 native host exec 出现共享状态完整性准入错误，至少 28 次失败，无修复。
- [#142821](https://github.com/openclaw/openclaw/issues/142821)（P0）：默认开启的 transcript 脱敏把掩码污染进命令/文件/回复中，涉数据安全与正确性，`needs-security-review`。

**背后诉求**：用户集中在“自托管长期运行的可靠性”——重启、更新、状态恢复、记忆持久化，而非新功能。

## 5. Bug 与稳定性（按严重度）

**P0**

| Issue | 问题 | Fix PR |
|---|---|---|
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | Windows 重启/更新不可靠，偶发客户端断连 | ❌ 无 |
| [#166634](https://github.com/openclaw/openclaw/issues/166634) | 崩溃恢复后 checkpoint 失败致 agent 永久 UNAVAILABLE | ❌ `not-repro-on-main`，待验证 |
| [#142821](https://github.com/openclaw/openclaw/issues/142821) | 脱敏掩码污染 agent 上下文 | ❌ 无 |
| [#141413](https://github.com/openclaw/openclaw/issues/141413) | macOS 应用对 SecretRef token 的本地 Gateway 连接不带认证 | ❌ 无 |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | 计费恢复后 provider 冷却仍封锁数小时 | ❌ 无（stale） |

**P1**

- [#187900](https://github.com/openclaw/openclaw/issues/187900)（今日新）：Linux 上 `doctor` 所有模式启动即无限挂起 → **有 fix PR [#189025](https://github.com/openclaw/openclaw/pull/189025)**。
- [#178359](https://github.com/openclaw/openclaw/issues/178359)：`doctor --fix --non-interactive` 卡 15+ 分钟无输出 → 同上关联 #189025。
- [#182476](https://github.com/openclaw/openclaw/issues/182476)：Windows 更新修复确定性失败 `OPENCLAW_STATE_LEASE_LOST`，❌ 无 fix PR。
- [#172837](https://github.com/openclaw/openclaw/issues/172837)：Codex 子代理 assignment 永不清除，新父线程反复重发，❌ 无。
- [#157617](https://github.com/openclaw/openclaw/issues/157617)：2026.9.6 上大库（2.8GB SQLite）session 写入队列分钟级等待，❌ 无。
- [#166017](https://github.com/openclaw/openclaw/issues/166017)：`sessionIdleTtlMs` 未设置时默认值不生效，MCP 子进程撑满 256 上限后 exec 全部失败。
- [#113701](https://github.com/openclaw/openclaw/issues/113701)：大工具输出撑爆上下文，压缩无法恢复，会话进入失败循环。

**P2 值得注意**：[#143017](https://github.com/openclaw/openclaw/issues/143017) 实测 21.3M cache-write token 的五种前缀重写路径，token 成本影响显著。

## 6. 功能请求与路线图信号

- **A2A 单向派发模式** [#44309](https://github.com/openclaw/openclaw/issues/44309)：无回执的 agent 间 handoff，`needs-product-decision`，多 agent 编排趋势下的高价值需求。
- **动态模型发现** [#10687](https://github.com/openclaw/openclaw/issues/10687) / [#121584](https://github.com/openclaw/openclaw/issues/121584)：OpenRouter 等快速演进目录的静态 catalog 痛点，两条 issue 呼应，纳入概率较高。
- **每 agent MCP server 作用域** [#72591](https://github.com/openclaw/openclaw/issues/72591)：12 agent × 10 server = 120 进程的资源浪费，与 #166017/#159858 的资源问题同源。
- **空闲 worker 释放内存** [#159858](https://github.com/openclaw/openclaw/issues/159858)：小主机上 ~650MB 常驻堆。
- **cron 预检跳过空跑** [#181179](https://github.com/openclaw/openclaw/pull/181179)（PR 已开）：可省 token 成本，接近落地。
- **Dream Diary 语言可配置** [#79223](https://github.com/openclaw/openclaw/issues/79223)：非英语工作区（含中文用户）的本地化诉求。
- 设计记录 [#169254](https://github.com/openclaw/openclaw/issues/169254)（已接受）：JSON filter/delete 字段提升为列，为 PostgreSQL 移植铺路——**数据库可移植性可能是下一阶段路线图信号**。

## 7. 用户反馈摘要

**痛点**：
- 自托管长期运行的稳定性是最大抱怨：更新失败、lease 丢失、崩溃恢复后 agent 不可用（Windows/macOS 尤甚，且多为非英语用户提交，提示国际化用户群在增长）。
- `doctor` 作为“最后救援工具”本身频繁挂起/自死锁（#187900、#178359、#164948），用户失去修复路径，情绪最负面。
- 排障信息不透明："Exec failed"、通用 lease 错误、无诊断提示（#120385、#170031），用户被迫深挖日志。
- 成本敏感：prompt cache 前缀重写（21.3M token）、cron 空转、MCP 进程膨胀均被用户以真实流量数据量化。

**满意点**：issue 模板规范、社区复现（source-repro 标签）质量高；#141474 中修复已合并 main（尽管未发版），用户在持续追踪进展；Decision 重构、性能 PR 系列显示维护者工程纪律良好。

## 8. 待处理积压

- **Windows 可靠性 P0** [#170956](https://github.com/openclaw/openclaw/issues/170956)：10-13 提交至今无 fix PR，`needs-maintainer-review`，评论最多的 issue，建议优先分诊。
- **安全类待审**：[#142821](https://github.com/openclaw/openclaw/issues/142821)（脱敏污染）、[#141413](https://github.com/openclaw/openclaw/issues/141413)（token 缺失）均挂 `needs-security-review` 长期未动。
- **memory-core 梦想晋升链**：[#150635](https://github.com/openclaw/openclaw/issues/150635) + [#121232](https://github.com/openclaw/openclaw/issues/121232)（"Ranked N, Promoted 0" 永久循环），ranker 与 applier 标准不一致，需产品决策。
- **Stale 高影响 issue**：[#70903](https://github.com/openclaw/openclaw/issues/70903)、[#142116](https://github.com/openclaw/openclaw/issues/142116)、[#119454](https://github.com/openclaw/openclaw/issues/119454) 面临自动关闭风险。
- **多次因不活跃被关闭的 PR 需复活**：[#125897](https://github.com/openclaw/openclaw/issues/125314) 相关 PR 10-15 被关闭、[#162121](https://github.com/openclaw/openclaw/pull/181097) 需重开，贡献者流失信号值得关注。
- **已合并未发版**：#164445（历史状态恢复）截至 v2026.10.10-beta.4 仍未进入 tag，建议尽快发版覆盖 #141474 等等待用户。

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告
**数据窗口：2026-10-30 至 2026-10-31**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入“7×24 长期运行可靠性”攻坚阶段：各头部项目的社区反馈重心从功能尝鲜转向更新可靠性、记忆持久化、成本控制与安全治理。安全债集中暴露成为本周期显著特征——Zeroclaw 单日 15 条安全审计报告、CoPaw 的 shell 外联审批盲区、Hermes 的秘密缓存加固均指向同一命题：**自主执行权限与沙箱边界的工程化**。同时，消息渠道生态（Telegram/Matrix/XMPP/Proton Mail/飞书/QQ）和 MCP 集成已成为标配竞争面，而“prompt cache 稳定性带来的 token 成本”首次成为多项目共同的高频量化诉求。

---

## 2. 各项目活跃度对比

| 项目 | Issue 动态 | PR 动态 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 461 条（新开/活跃 321，关闭 140） | 500 条（250 合并/关闭） | ❌ 无（已合并修复未发版） | 🟢 活跃高、吞吐好，但 P0 积压严重 |
| **LobsterAI** | 3 条（申诉类） | 50 条（49 合并/关闭） | ✅ **2026.10.30** | 🟢 开发侧健康度最高，社区运营侧有风险 |
| **Hermes Agent** | 50 条（48 开 2 关） | 50 条（6 合并，44 待合并） | ❌ 无 | 🟡 响应极快但 PR 积压 44 条 |
| **Zeroclaw** | 29 条（开），仅关闭 1 | 50 条（**0 合并**） | ❌ 无（CI 阻塞发布） | 🔴 安全债集中暴露，吞吐为零 |
| **CoPaw (QwenPaw)** | 6 条（5 开 1 关） | 26 条（10 合并/关闭） | ❌ 无 | 🟢 良好，Bug→fix 闭环 1 天内 |
| **NanoBot** | 59 条更新（PR 为主） | 19 合并/关闭，38 待合并 | ❌ 无 | 🟡 中高活跃，conflict 积压需专项处理 |
| **NanoClaw** | 1 条 | 8 条（1 关闭） | ❌ 无 | 🟢 平稳迭代 |
| **PicoClaw** | 0 | 16 条全关闭（多为 stale 清理） | ❌ 无 | 🟡 维护整理期，有价值 PR 被误关 |
| **ZeptoClaw** | 1 关闭 | 0 合并，5 条 dependabot 挂起 | ❌ 无 | 🟡 低活跃，依赖管道堵塞 45+ 天 |
| **EasyClaw** | 0 | 0 | ✅ v1.9.45 | 🟢 维护者驱动稳态发布 |
| **IronClaw** | 0 | 1 条（dependabot） | ❌ 无 | ⚪ 静默期 |
| **NullClaw / TinyClaw / Moltis** | 0 | 0 | ❌ | ⚪ 无活动 |

**分层结论**：OpenClaw、LobsterAI、Hermes 构成第一梯队；Zeroclaw/CoPaw/NanoBot 为高潜力第二梯队；其余为长尾维护型项目。

---

## 3. OpenClaw 在生态中的定位

**优势**：
- **规模领先**：单日 461 条 Issue + 500 条 PR 更新，活跃量级约为第二梯队的 8–10 倍，社区复现质量（source-repro 标签）为生态标杆。
- **工程纪律**：Decision 重构栈 20 部分系列化推进、性能 PR 带跨引擎基准，显示成熟的维护流程。
- **技术深度领先**：memory-core 记忆分层（512 条召回 + dreaming 晋升机制）、SQLite lease/checkpoint 会话状态管理、doctor 修复工具链，均为同类中最复杂的自托管长期运行基础设施。

**劣势与风险**：
- **P0 积压严重**：5 个 P0 无 fix PR（Windows 更新可靠性、脱敏污染、token 缺认证等），两个 `needs-security-review` 长期未动——安全响应速度落后于 Zeroclaw（同日 fix）和 Hermes（当天报当天修）。
- **发版滞后**：已合并修复（#164445）截至 v2026.10.10-beta.4 仍未进 tag，与 LobsterAI 高频发版形成反差。
- **技术路线更重**：相比 NanoClaw 的“能力技能化”（MCP + LanceDB 零核心改动）和 CoPaw 的插件化方向，OpenClaw 的紧耦合核心带来更高维护负担（cron 轮次 MCP 目录构建不完整即为例证）。

**定位判断**：OpenClaw 是生态中**事实上的复杂度与规模标杆**，但正处于“规模红利 vs 维护债”的临界点，Windows/macOS 可靠性与安全审查吞吐是短板。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **A2A 多智能体协作** | OpenClaw (#44309)、NanoBot (PR #216 搁置 9 个月)、PicoClaw (#423 被关闭) | agent 间 handoff/单向派发是战略级缺口，三个项目均无落地，竞争窗口开放 |
| **Prompt cache / token 成本** | OpenClaw (#143017, 21.3M token)、Zeroclaw (#11703/#11698)、LobsterAI (#2929, 命中率仅 15%) | 系统提示词抖动击穿缓存已被用户以真实流量数据量化，是最高共识的成本痛点 |
| **doctor / 自诊断能力** | OpenClaw（doctor 挂起 3 个 issue）、NanoBot (PR #3776)、ZeptoClaw | “最后救援工具自身不可靠”是自托管用户最负面情绪来源 |
| **MCP 作用域与资源治理** | OpenClaw (#72591/#166017/#159858)、Hermes (#147025, 87 个 MCP 工具泄露给 email 通道)、Zeroclaw (#12143 环境变量继承) | MCP 进程膨胀、权限边界、传输重连是共性难题 |
| **记忆系统可扩展性** | OpenClaw (dreaming 晋升死锁 #150635)、NanoBot (Dream 文件无限增长 #5630)、NanoClaw (#4239 LanceDB 混合检索)、Hermes (#136229 重复 stamp) | 内置文件记忆“不适合海量小事实”是跨项目共识，向量混合召回是演进方向 |
| **Windows 二等公民问题** | OpenClaw、Zeroclaw (12+ 条)、Hermes、LobsterAI | 更新可靠性、ACL/DACL、路径处理缺陷在所有项目集中出现 |
| **渠道生态军备赛** | 全部活跃项目 | Proton Mail (NanoClaw)、XMPP+OMEMO (Zeroclaw)、Zulip (Hermes)、飞书 (CoPaw)、QQ (PicoClaw)、Matrix 路由 (Zeroclaw) |
| **安全治理（执行/审批/凭据）** | Zeroclaw（15 条审计）、CoPaw (#8513)、Hermes (#146715)、NanoBot (PR #6147) | 沙箱绕过、凭据隔离、allowlist 绕过是生态级安全主题 |

---

## 5. 差异化定位分析

| 维度 | 代表项目 | 关键差异 |
|---|---|---|
| **全功能自托管助手平台** | OpenClaw、Hermes | 端到端：记忆系统 + cron + MCP + 多渠道 + Gateway，架构最重 |
| **企业级安全优先** | Zeroclaw | Rust + Wasmtime 插件沙箱、审计哈希链、Seatbelt/ACL——以安全审计驱动开发节奏 |
| **能力技能化/轻核心** | NanoClaw、CoPaw | NanoClaw 以 MCP 技能承载记忆等能力（零核心改动）；CoPaw 走第三方 Agent 插件化 + 本地小模型决策（去云端依赖） |
| **IM/消费级集成** | LobsterAI、PicoClaw | LobsterAI 重桌面体验（伙伴皮肤、Image Studio、微信/IM）；PicoClaw 聚焦 QQ 等中文渠道 |
| **消息通道代理** | NanoBot | email 三件套（OAuth/别名/`\Seen`）反映 7×24 邮件助手是企业核心用例 |
| **CLI/终端优先** | ZeptoClaw | 终端交互渲染质量 + IoT/串口场景，小而美 |
| **垂直工具** | EasyClaw | TikTok 联盟营销审核，已脱离通用 Agent 赛道 |

**目标用户谱系**：Zeroclaw（安全敏感企业/极客）→ OpenClaw/Hermes（重度自托管个人）→ NanoBot（邮件场景专业用户）→ CoPaw/LobsterAI（桌面/消费级中文用户）→ ZeptoClaw（终端用户）。

---

## 6. 社区热度与成熟度分层

- **快速迭代期**：**LobsterAI**（单日 49 PR 合并 + 版本发布，性能修复均为用户日志驱动）、**CoPaw**（Bug→fix 1 天闭环，但 XXXL 级 PR 7903/8426 显示架构扩张野心）。
- **规模扩张但质量攻坚期**：**OpenClaw**（活跃最高，但 P0 积压 + 发版滞后）、**Hermes**（响应极快，44 条 PR 待消化）、**Zeroclaw**（贡献极活跃但合并吞吐为零，v0.9.0 被 CI 和 release-gate 阻塞）。
- **质量巩固/维护期**：**NanoBot**（合并节奏健康但 conflict 债重）、**NanoClaw**（架构流程成熟化中）。
- **收缩/静默期**：**PicoClaw**（stale 清理引发贡献流失风险）、**ZeptoClaw**、**EasyClaw**（维护者驱动单机模式）、**IronClaw/NullClaw/TinyClaw/Moltis**（无活动）。

**成熟度信号**：贡献者闭环速度上 Hermes ≈ CoPaw > LobsterAI > OpenClaw > NanoBot > Zeroclaw；而社区规模与 Issue 质量上 OpenClaw > Hermes > Zeroclaw > 其他。

---

## 7. 值得关注的趋势信号

1. **“可靠性 > 功能”的范式转移**：OpenClaw 用户集中在重启/更新/状态恢复而非新功能，Hermes/Zeroclaw 亦同——**长期运行的稳定性是留存的决定因素**，新入场项目应优先做 doctor 工具链与崩溃恢复。
2. **安全从加分项变为准入门槛**：Zeroclaw 的集中审计揭示了一个共性事实——沙箱 allowlist 绕过（.bat 顶替、zshenv 钩子）、环境变量凭据泄露是**所有用 exec 的 Agent 框架的通病**。CoPaw #8513（shell 外联绕过审批）表明审批/治理层将成为下一竞争焦点。
3. **Prompt cache 是被低估的成本杠杆**：三个独立项目的用户分别量化了 21.3M token 前缀重写、缓存命中率 15%、延迟工具激活击穿缓存——**任何导致系统提示词变化的“智能”功能都要过成本审计**。
4. **记忆系统向混合检索演进**：文件式精选记忆 + 向量/BM25 海量召回的双层架构（NanoClaw LanceDB 方案获维护者背书）可能成为事实标准；OpenClaw 的 dreaming 晋升死锁说明纯启发式分层难以规模化。
5. **数据库可移植性信号**：OpenClaw #169254（JSON 字段提升为列、PostgreSQL 铺路）+ 2.8GB SQLite 写入瓶颈（#157617）提示**从单机 SQLite 向可插拔存储迁移**将是头部项目下一阶段的分水岭。
6. **A2A 是尚未兑现的最大窗口**：三个项目相关 PR/issue 均长期搁置，谁先落地可靠的 agent 间协议，谁就掌握多智能体编排的生态位。
7. **贡献者体验是隐性竞争力**：NanoBot（9 个月 conflict PR）、PicoClaw（stale 误关有价值修复）、CoPaw（4 个月才关闭的首贡献者 PR）共同警示——**评审带宽不足正在生态层面流失贡献者**。

---

**给技术决策者的一句话总结**：选型时按“安全优先选 Zeroclaw（待其 v0.9.0 解锁）、规模与生态选 OpenClaw（接受 Windows/P0 风险）、产品化速度选 LobsterAI/CoPaw、轻量技能化架构选 NanoClaw”权衡；给开发者的启示是——可靠性、安全边界与成本可控性已取代功能丰富度，成为本赛道 2026 年末的核心竞争轴。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-10-31

## 1. 今日速览

NanoBot 今日整体活跃度处于**中高水平**：过去 24 小时内共有 59 条 Issue/PR 更新，其中 PR 活动尤为突出（57 条），包括 19 条合并/关闭与 38 条待合并。贡献者 @chengyongru 集中提交了一批与 DeepSeek API 兼容性相关的问题报告与修复（#6530/#6531/#6532/#6533），形成“报告—修复”闭环，体现了健康的贡献节奏。今日无新版本发布。待合并 PR 积压达 38 条，且多条长周期 PR（如 #216 A2A 协议支持，已开放近 9 个月）仍处于冲突状态，合并吞吐能力值得关注。

## 2. 版本发布

今日无新版本发布。（最新 Releases：无）

## 3. 项目进展

今日共 19 条 PR 合并/关闭，重点进展：

- **DeepSeek 兼容性专项（@chengyongru，今日密集推进）**
  - [PR #6533](https://github.com/HKUDS/nanobot/pull/6533)（已关闭）：将 DeepSeek `insufficient_system_resource` / `aborted` 中断正确上报为模型错误，避免部分回答被当作完整回复保存。配合 Issue #6530，是今日最重要的正确性修复。
  - [PR #6532](https://github.com/HKUDS/nanobot/pull/6532)（已关闭）：移除硬编码的 DeepSeek Search 5 QPS 过时配额提示，改为引用官方文档，同时修复文档错误。
  - [PR #6529](https://github.com/HKUDS/nanobot/pull/6529)（已关闭）：重构 `AgentLoop` 活动队列准入逻辑，将 WebSocket 资格判断委托给 `RecoveryCoordinator.admit()`，消除核心模块中的通道知识重复。
- **安全与工具调用收紧**
  - [PR #6147](https://github.com/HKUDS/nanobot/pull/6147)（已关闭，p1）：移除 #4662 引入的明文 `<tool_call>` 提取，防止助手文本中的标记（包括引用示例）被注入为可执行工具调用。这是带 **security/p1** 标签的重要安全修复。
- **WebUI 与 MCP 稳定性**
  - [PR #4651](https://github.com/HKUDS/nanobot/pull/4651)（已关闭）：后台聊天完成时的选择性桌面通知。
  - [PR #3290](https://github.com/HKUDS/nanobot/pull/3290)（已关闭）：MCP HTTP 传输在 `ClosedResourceError` 后自动重连，改善长时间运行场景的健壮性。

**评估**：今日合并量较大，覆盖安全、正确性、重构、用户体验多个维度，尤其在 Provider 兼容性（DeepSeek）和 MCP 稳定性上有实质性推进。

## 4. 社区热点

- **DeepSeek 行为变化引发连锁反馈**：[Issue #6530](https://github.com/HKUDS/nanobot/issues/6530)（中断生成为何被标记为完成）与 [Issue #6531](https://github.com/HKUDS/nanobot/issues/6531)（429 报告中的 QPS 与文档不符）均来自 @chengyongru，且当日即有对应修复 PR，属于高效的自报告自修复模式。
- **PR #6147 收尾**：这条 10 月初开启的 p1 安全 PR 今日关闭，围绕工具调用解析的讨论终于落定。
- **长线 PR 持续获得更新**：[PR #216](https://github.com/HKUDS/nanobot/pull/216)（A2A 协议支持，2 月开启）、[PR #3776](https://github.com/HKUDS/nanobot/pull/3776)（`nanobot doctor` 诊断命令）、[PR #5609](https://github.com/HKUDS/nanobot/pull/5609)（Microsoft OAuth 邮件认证）今日均有活动，说明社区对**多通道接入**与**可诊断性**的持续诉求。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高（安全） | 助手文本中的 `<tool_call>` 标记可被执行为工具调用（PR #6147） | ✅ 已修复关闭 |
| 🔴 高（正确性） | DeepSeek 中断生成被报告为成功完成，部分回答可能被保存为完整回复（Issue #6530） | ✅ Fix：PR #6533 |
| 🟡 中 | MCP 工具非 ASCII 名称（如中文）清洗后冲突为 `"_"`，导致静默注册冲突（PR #5360） | ⏳ 修复 PR 待合并（标记 conflict） |
| 🟡 中 | Dream 记忆文件（SOUL.md/MEMORY.md）失去大小上限，可无限增长并注入每次请求（PR #5630，回归自 #5622） | ⏳ 待合并 |
| 🟡 中 | Gemini 流式并行工具调用缺 `index` 时被错误合并（PR #6296） | ⏳ 待合并 |
| 🟡 中 | 邮件通过过滤但投递失败仍被标记 `\Seen`，导致消息丢失（PR #5605） | ⏳ 待合并 |
| 🟢 低 | Provider 重试等待通知未送达通道（PR #6264）；Discord 延迟反应任务在运行时重置时未取消（PR #5864） | ⏳ 待合并 |
| 🟢 低（文档） | DeepSeek Search 限速文档/报错过时（Issue #6531） | ✅ Fix：PR #6532 |

## 6. 功能请求与路线图信号

- **A2A 协议支持**（[PR #216](https://github.com/HKUDS/nanobot/pull/216)）：完整的 agent-to-agent 通信（Agent Card + JSON-RPC），存在 9 个月、标记 conflict，需维护者决断——这是战略级能力，长期搁置不利于社区信心。
- **邮件通道现代化**（@tilladam 系列_PR：#5605 / #5606 / #5609）：Microsoft OAuth、别名过滤、`\Seen` 修复三件套，反映邮箱场景是企业用户的核心用例，建议成批推进。
- **OpenRouter 原生图像生成**（[PR #5718](https://github.com/HKUDS/nanobot/pull/5718)）与新增 Provider（Opper #5845、Tsubasa #5947）：Provider 生态扩展持续活跃，纳入门槛低，大概率随下版本发布。
- **`nanobot doctor` 诊断命令**（[PR #3776](https://github.com/HKUDS/nanobot/pull/3776)）：10 项自动健康检查，直接降低新用户上手成本，是路线图上高价值候选。
- **WebUI 桌面通知**（PR #4651）已合并，预示下一版本将改善多会话/后台任务体验。

## 7. 用户反馈摘要

- **DeepSeek 用户**：对上游 API 行为变化（限速文档更新、新增中断 finish_reason）与客户端处理不一致较为敏感，期待 Nanobot 跟进上游规范（#6530/#6531）。
- **中文/多语言用户**：MCP 工具中文名清洗冲突（#5360）表明非英文用户群真实存在，且该缺陷为静默失败，排查成本高。
- **邮件通道用户**：别名共享邮箱、OAuth 强制迁移等场景诉求明确，来自真实的生产部署环境（#5605/#5606/#5609）。
- **重度/长期运行用户**：MCP 重连（#3290，已关闭）、Dream 记忆膨胀（#5630）、重试通知（#6264）反映“7×24 运行的个人助手”是核心使用模式。
- 总体看，用户满意度较高，反馈多为工程质量问题而非功能抱怨，社区自驱修复意愿强。

## 8. 待处理积压

提醒维护者优先关注：

1. [PR #216](https://github.com/HKUDS/nanobot/pull/216) — A2A 协议支持，**2026-02 开启至今近 9 个月**，长期 conflict，需明确接受/拒绝决策。
2. [PR #3776](https://github.com/HKUDS/nanobot/pull/3776) — `nanobot doctor`，5 月开启，4+ 个月无实质进展，标记 conflict。
3. [PR #5260](https://github.com/HKUDS/nanobot/pull/5260) / [PR #5360](https://github.com/HKUDS/nanobot/pull/5360) — 8 月开启的修复类 PR，均标记 conflict，Bug 持续存在影响用户。
4. [PR #5630](https://github.com/HKUDS/nanobot/pull/5630) — Dream 记忆无限增长回归，涉及性能与 token 成本，建议尽快处理。
5. [Issue #6530](https://github.com/HKUDS/nanobot/issues/6530) — 虽有修复 PR #6533 已关闭，建议确认修复进入发布版本后关闭关联 Issue。
6. **整体积压**：38 条待合并 PR 中大量标记 `conflict`，建议安排专项 rebase 日或明确贡献指南，降低社区贡献流失风险。

---
*数据来源：GitHub API，统计窗口 2026-10-30 至 2026-10-31。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 — 2026-10-31

## 1. 今日速览

今日项目呈现**高强度安全审计驱动的活跃状态**：过去 24 小时新增/活跃 Issue 29 条（仅关闭 1 条），PR 更新 50 条（全部待合并，0 合并）。贡献者 @IftekharUddin 在今日连续提交约 15 条安全类 Bug 报告（#12134–#12147），覆盖沙箱策略、凭据隔离、Windows ACL、MCP 传输等多个攻击面，形成一次集中式安全审查浪潮，项目整体处于“安全债集中暴露期”。无新版本发布。

## 2. 版本发布

今日无新版本发布。注意 #12128 提到 CI 的 `cargo audit` 因 Wasmtime 48.0.7 涉及 5 条 RustSec 通告（RUSTSEC-2026-0420~0424）持续失败，可能阻塞 v0.9.0 发布流程。

## 3. 项目进展

今日**无 PR 合并**（50 条全部 OPEN），但有两条当日快速响应的修复 PR 值得关注：

- **[#12140](https://github.com/zeroclaw-labs/zeroclaw/pull/12140)** fix(config): 补齐 Windows 默认 forbidden_paths 中缺失的用户密钥目录（对应 #12124），修复效率很高（Issue 与 PR 同日）。
- **[#12148](https://github.com/zeroclaw-labs/zeroclaw/pull/12148)** fix(setup.bat): 用 HKCU 注册表读写替代 `setx`，修复 PATH 重复写入并截断 1024 字符的问题（对应 #12121）。

大 PR 方面，多条 XL 级 PR 持续活跃更新中：#11589（成本限额操作员覆盖）、#11698（personality 文件稳定化以保住 prompt cache）、#11727（ZeroCode 重启后恢复会话侧栏）、#11847（原生 XMPP + OMEMO）、#11234（RPC 会话所有权修复，p1/release-gate）。整体推进节奏偏向审慎，合并吞吐量今日为零。

## 4. 社区热点

- **[#10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926)** Matrix send_via 将 peer 用户身份误当房间目的地（6 评论，status:accepted，follow-up），是今日讨论最多的 Issue，涉及 Matrix 渠道路由语义，社区持续跟进。
- **[#11703](https://github.com/zeroclaw-labs/zeroclaw/issues/11703)**（3 评论）延迟工具激活导致系统提示词变化、击穿 prompt cache——用户对**成本敏感**，与 #11698/#12056 一脉相承，说明“prompt cache 稳定性”是当前高频痛点。
- **[#11119](https://github.com/zeroclaw-labs/zeroclaw/issues/11119)** RFC #11027 的 receiver-discretionary 智能体间会话消息 tracker（risk:high, no-stale），是架构层面的长期主线工作。
- **[#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847)** 原生 XMPP PR 讨论密集，评论为全站最多之一，诉求是渠道生态扩展。

## 5. Bug 与稳定性（按严重程度）

**S0 级（数据丢失/安全风险）**
- [#12118](https://github.com/zeroclaw-labs/zeroclaw/issues/12118) cmd.exe 方言下 workspace 内的 `git.bat` 可顶替 allowlist 中的 `git` 执行——**allowlist 绕过**。尚无 fix PR。

**S1 级（工作流阻断）**
- [#12143](https://github.com/zeroclaw-labs/zeroclaw/issues/12143) MCP stdio server 继承 daemon 全部环境变量，含 provider key 与审计签名密钥——凭据泄露给第三方代码。无 fix PR。
- [#12142](https://github.com/zeroclaw-labs/zeroclaw/issues/12142) `file_read` 在 full 权限下可读 `.secret_key`、gateway admin token、OTP/WebAuthn 秘密——主密钥泄露。无 fix PR。
- [#12141](https://github.com/zeroclaw-labs/zeroclaw/issues/12141) `/admin/*` 路由仅凭 loopback 即信任，本地脚本可匿名通过 SOP 审批门并关停 daemon。无 fix PR。
- [#12138](https://github.com/zeroclaw-labs/zeroclaw/issues/12138) `zsh -c` 每次执行前 source `~/.zshenv`，构成绕过命令 allowlist 的持久化执行钩子。无 fix PR。
- [#12137](https://github.com/zeroclaw-labs/zeroclaw/issues/12137) Seatbelt 正则转义错误致 `~/.cargo`、`~/.nvm` 等在 macOS 默认沙箱下 "Operation not permitted"。无 fix PR。
- [#12126](https://github.com/zeroclaw-labs/zeroclaw/issues/12126) 出站附件 marker 先 canonicalize 再校验，Windows UNC 路径可致 daemon 向攻击者 SMB/WebDAV 服务器认证。无 fix PR。
- [#12120](https://github.com/zeroclaw-labs/zeroclaw/issues/12120) Windows 下 TLS 密钥、admin token、SQLite 等未设私有 DACL。无 fix PR。
- [#12134](https://github.com/zeroclaw-labs/zeroclaw/issues/12134) 默认 forbidden_paths 不含 `/mnt` 与 Windows 其他盘符/UNC。无 fix PR。
- [#12128](https://github.com/zeroclaw-labs/zeroclaw/issues/12128) CI cargo audit 持续失败（Wasmtime 5 条 RustSec）。
- [#12081](https://github.com/zeroclaw-labs/zeroclaw/issues/12081)（已关闭）memory_store 工具调用持续失败（Qwen3.6 + ik_llama.cpp，S1），今日已关闭，或已解决。

**S2 级（行为降级）**
- [#12146](https://github.com/zeroclaw-labs/zeroclaw/issues/12146) MCP SSE 客户端接受服务器任意 endpoint URL 并携带 secret 头——SSRF/token 外泄面。
- [#12145](https://github.com/zeroclaw-labs/zeroclaw/issues/12145) wasmtime store 未限制 memories/tables 数量，插件可超预算数千倍分配。
- [#12144](https://github.com/zeroclaw-labs/zeroclaw/issues/12144) `file_upload`/`file_edit` 走 write tier，可读取仅有 Write 权限的 sibling workspace 内容。
- [#12139](https://github.com/zeroclaw-labs/zeroclaw/issues/12139) 默认 forbidden_paths 漏掉 macOS Keychains、`~/.netrc`、`~/.kube/config` 等。
- [#12123](https://github.com/zeroclaw-labs/zeroclaw/issues/12123) Windows named pipe 默认 DACL 允许 Everyone/Anonymous 读。
- [#12127](https://github.com/zeroclaw-labs/zeroclaw/issues/12127) git_operations 先访问再授权 gitdir/commondir 指针，UNC 可触发远程认证。
- [#12122](https://github.com/zeroclaw-labs/zeroclaw/issues/12122) Windows 安装脚本跳过 SHA256 校验。
- [#12119](https://github.com/zeroclaw-labs/zeroclaw/issues/12119) Windows 超时仅终止解释器，子进程残留。
- [#12133](https://github.com/zeroclaw-labs/zeroclaw/issues/12133) Windows 子进程环境缺 `APPDATA`/`LOCALAPPDATA`，gh/npm 表现为登出状态。
- [#12121](https://github.com/zeroclaw-labs/zeroclaw/issues/12121) setup.bat setx 合并 PATH 致重复并截断 —— **已有 fix PR [#12148](https://github.com/zeroclaw-labs/zeroclaw/pull/12148)**。
- [#12124](https://github.com/zeroclaw-labs/zeroclaw/issues/12124) Windows forbidden_paths 缺失 —— **已有 fix PR [#12140](https://github.com/zeroclaw-labs/zeroclaw/pull/12140)**。
- [#12147](https://github.com/zeroclaw-labs/zeroclaw/issues/12147) 审计日志 0644 权限 + `agent_alias` 不在哈希链内。

## 6. 功能请求与路线图信号

- **[#12131](https://github.com/zeroclaw-labs/zeroclaw/issues/12131)** RFC：共享执行权限与同身份凭据续期——安全模型级 RFC，是对本日安全审计问题的系统性回应，很可能进入 v0.9.x 规划。
- **[#12130](https://github.com/zeroclaw-labs/zeroclaw/issues/12130)** 可配置 daemon 会话配额 + 本地操作员保留位（当前硬编码 64），与 #11731（ZeroCode 每面板会话上限）呼应，方向明确。
- **[#12109](https://github.com/zeroclaw-labs/zeroclaw/issues/12109)** 多插件仓库源支持（社区用户 @seungjin 提出），实现成本低，有望较快纳入。
- **#11847**（原生 XMPP）与 **#11845/#11846**（OpenRouter 余额展示）等 PR 活跃演进中，是下版本渠道生态的候选亮点。
- **#12125**（chat socket 会话 watch 释放）为 review 跟进任务，属工程收尾。

## 7. 用户反馈摘要

- **成本与缓存**：#11703、#11698、#12056 共同反映用户对 prompt cache 命中率的高度敏感——系统提示词任何抖动都会直接推高 API 成本。
- **Windows 是二等公民的感受明显**：#12118–#12133 一大批问题集中在 Windows（PATH 处理、ACL、DACL、APPDATA、安装校验），Windows 用户的开箱体验和安全基线均落后于 Unix。
- **本地模型用户受阻**：#12081（ik_llama.cpp + Qwen3.6）显示自托管模型用户在 memory 工具链上遇到阻断级故障。
- **渠道可靠性**：#11651（Telegram 429 flood gate）反映真实生产场景中限流处理不当会放大被封风险。

## 8. 待处理积压

- **[#12118](https://github.com/zeroclaw-labs/zeroclaw/issues/12118)**（S0，cmd.exe allowlist 绕过）——今日新开，尚无修复方案，建议优先。
- **[#12128](https://github.com/zeroclaw-labs/zeroclaw/issues/12128)** CI cargo audit 持续红——阻塞所有构建的 security job，需尽快升级 Wasmtime。
- **[#11234](https://github.com/zeroclaw-labs/zeroclaw/pull/11234)**（p1, release-gate, v0.9.0）自 09-29 开放至今未合并，是 v0.9.0 的关键门禁。
- **[#10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926)** Matrix send_via 路由错误，accepted 状态 6 周未修。
- **[#11544](https://github.com/zeroclaw-labs/zeroclaw/pull/11544)** 标记 do-not-merge/blocked 的 Anthropic 超时修复，需解除阻塞。
- 多条 XL 级 PR（#11589、#11698、#11727、#11847）长期处于 needs-author-action，维护者评审吞吐可能成为瓶颈。

**健康度小结**：社区贡献极其活跃、Issue 质量高（复现细节完整），但合并吞吐为零、安全债集中暴露且大部分尚无修复 PR，v0.9.0 发布前需重点关注安全修复与 CI 修复的落地速度。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-10-31

---

## 1. 今日速览

今日 Hermes Agent 呈现**高活跃度开发状态**：过去 24 小时共 50 条 Issue 更新（新开/活跃 48、关闭 2）与 50 条 PR 更新（待合并 44、已合并/关闭 6），无新版本发布。值得注意的是，今日新开的多条 Issue 当天即出现对应修复 PR（如 [#147036](https://github.com/NousResearch/hermes-agent/issues/147036) → PR [#147066](https://github.com/NousResearch/hermes-agent/pull/147066)），显示出维护者响应速度极快。热点主题集中在 **Gateway 事件循环阻塞**、**Windows 兼容性**、**Termux 打包缺陷**和**安全红action 链路**。待合并 PR 积压达 44 条，合并吞吐相对偏慢，是当前唯一的健康度隐忧。

---

## 2. 版本发布

今日无新版本发布。当前流通版本仍为 0.22.x 系列（含 Termux canary `0.22.0~canary.20261014T070054Z-1`）。

---

## 3. 项目进展

今日关闭/合并 6 条 PR，主要成果：

- **PR [#147066](https://github.com/NousResearch/hermes-agent/pull/147066)**（已关闭）：修复 Dashboard `/api/config/schema` 在事件循环上内联构建 schema、冻结全部请求约 3 秒的问题（对应 Issue [#147036](https://github.com/NousResearch/hermes-agent/issues/147036)）。同日报告同日修复的典范。
- **PR [#147067](https://github.com/NousResearch/hermes-agent/pull/147067)**（已关闭）：修复 `platform_toolsets.<platform>: []` 空列表仍继承全部 MCP 服务器（一个 email 通道可执行 87 个 MCP 工具）的安全语义缺陷，并补充 `no_mcp` 文档（对应 Issue [#147025](https://github.com/NousResearch/hermes-agent/issues/147025)）。
- **PR [#146715](https://github.com/NousResearch/hermes-agent/pull/146715)**（已关闭）：安全加固——将 Bitwarden/1Password 秘密缓存及 Photon token 移至 profile home 根目录，纳入所有 credential guard 保护，防止沙箱路径隐藏绕过。
- **PR [#146518](https://github.com/NousResearch/hermes-agent/pull/146518)**（已关闭）：修正全部 17 个语言包中上下文文件上限提示（i18n 修正）。
- **PR [#129277](https://github.com/NousResearch/hermes-agent/pull/129277)**（已关闭）：TUI kanban `gave_up` 提示复用 Gateway 统一措辞。

整体看，今日推进集中在 **Gateway/ Dashboard 稳定性与安全边界**，属于质量收敛型进展，为下一个版本发布做铺垫。

---

## 4. 社区热点

**讨论最活跃的 Issue：**

1. **[#127647](https://github.com/NousResearch/hermes-agent/issues/127647)**（34 评论）— Desktop 空闲资源消耗 Tracker：渲染进程 CPU/GPU、backend serve CPU 及内存占用问题的系统性追踪 issue，汇总各机制来源与相关 PR，是 Desktop 端性能治理的主战场。诉求：**桌面端常驻场景下资源占用过高**。
2. **[#105758](https://github.com/NousResearch/hermes-agent/issues/105758)**（23 评论）— 终端 lifecycle guard 误报，误杀调用 Node.js CLI 的正常命令（如 `ob` CLI）。社区诉求是 **guard 机制过于激进，干扰正常工作流**，标记 `needs-decision` 等待维护者裁决。
3. **[#63796](https://github.com/NousResearch/hermes-agent/issues/63796)**（8 评论，今日关闭）— Windows 11 Smart App Control 阻断内嵌 Python `_ssl` 模块导致 Desktop 无法引导。已解决，反映 Windows 兼容性投入见效。
4. **[#116774](https://github.com/NousResearch/hermes-agent/issues/116774)**（7 评论，今日关闭）— `hermes update` 重装 Node 依赖导致 `npm audit fix` 修复失效，安全漏洞被反复引入。
5. **[#144486](https://github.com/NousResearch/hermes-agent/issues/144486)**（6 评论）— `/quit --delete` 退出但不删除会话，与文档不符。

---

## 5. Bug 与稳定性（按严重程度）

**P2 级：**

| 问题 | 状态 / Fix PR |
|---|---|
| [Gateway 启动 API image 扫描阻塞事件循环，watchdog 杀死每次重启](https://github.com/NousResearch/hermes-agent/issues/146400) + [#140905](https://github.com/NousResearch/hermes-agent/issues/140905) | Open，暂无 PR |
| [会话 turn lease 使用墙钟时间，主机睡眠唤醒后硬中断进行中任务](https://github.com/NousResearch/hermes-agent/issues/144503) | Open |
| [CJK 短查询 session_search LIKE 全表扫描，SQLite 超时 420s](https://github.com/NousResearch/hermes-agent/issues/134779) | Open；相关修复 PR [#147077](https://github.com/NousResearch/hermes-agent/pull/147077)（session_search 语义修复）今日提交 |
| [BlueBubbles 附件作为第二事件中断进行中回合（缺 debounce）](https://github.com/NousResearch/hermes-agent/issues/30989) | 长期 Open（5 月至今） |
| [macOS launchd bootstrap retry 不 kickstart 已注册未运行任务，重启失败](https://github.com/NousResearch/hermes-agent/issues/142741) | Open |
| [memory recall 每回合重复 stamp/replay，无跨回合去重](https://github.com/NousResearch/hermes-agent/issues/136229) | Open |
| [工具 loop guardrail 对 BLOCKED 拒绝与计数器 hint 行失效](https://github.com/NousResearch/hermes-agent/issues/146846) | Open |
| [Windows 保留名（nul/con 等）触发 TUI/Gateway complete.path 崩溃](https://github.com/NousResearch/hermes-agent/issues/141599) | Open，CLI 侧已修 |
| [browser_vault save_login 在 Gateway 上返回 prompt_unavailable](https://github.com/NousResearch/hermes-agent/issues/143465) | Open |

**P3 级 / 今日新报：**

- [Termux canary 包五项缺陷（含 stable 通道 404）](https://github.com/NousResearch/hermes-agent/issues/139415)、[Termux 缺 MCP SDK](https://github.com/NousResearch/hermes-agent/issues/138084)
- [kanban 对已完成卡片写入虚假 timed_out 事件](https://github.com/NousResearch/hermes-agent/issues/146973)
- [copilot-acp 无凭证时 BrokenPipeError 且无法禁用](https://github.com/NousResearch/hermes-agent/issues/147051) — 修复 PR 待出
- [Anthropic utilization 百分比误乘 100，1% 显示为 100%](https://github.com/NousResearch/hermes-agent/issues/147006)
- [leftover steer 丢失 reply_expected，[SILENT] 被替换为"unexpected silence"](https://github.com/NousResearch/hermes-agent/issues/147041)

---

## 6. 功能请求与路线图信号

今日活跃的 feature PR 释放出明确方向：

- **多平台消息生态扩展**：[Zulip 集成 PR #3335](https://github.com/NousResearch/hermes-agent/pull/3335)（长期挂起后更新至新插件架构）、[Slack 多选 clarify 渲染 PR #147072](https://github.com/NousResearch/hermes-agent/pull/147072)、[Telegram 轮询恢复后重放回复 PR #146731](https://github.com/NousResearch/hermes-agent/pull/146731) — 消息平台适配持续强化。
- **多账号支持**：[Google Workspace `--account` 命名多账号 PR #147056](https://github.com/NousResearch/hermes-agent/pull/147056) — 解决个人+工作双账号需双 profile 的痛点，有望进入下版本。
- **无工具纯对话模式**：[PR #78262](https://github.com/NousResearch/hermes-agent/pull/78262) — 面向评测/判分/judging 场景，标记 `needs-decision`，需维护者表态。
- **后台进程按行等待**：[PR #147074](https://github.com/NousResearch/hermes-agent/pull/147074) `process_manage wait until="listening on"` — 官方团队（@teknium1）亲自提交，落地概率高。
- **安全方向**：[redaction 泄漏修复 PR #147075](https://github.com/NousResearch/hermes-agent/pull/147075)、[security-recon-assistant skill PR #3031](https://github.com/NousResearch/hermes-agent/pull/3031)。

**综合判断**：下一版本重点将是 **Gateway 事件循环去阻塞、安全加固（redaction/secrets/MCP 语义）、平台适配打磨**。

---

## 7. 用户反馈摘要

- **桌面/常驻用户痛点**：空闲 CPU/GPU/内存烧损（#127647）是最持久的抱怨，用户期望“挂后台不耗电”。
- **Windows 用户**：Smart App Control 引导失败（已修复）与保留文件名崩溃显示平台覆盖仍不均衡；Nix 用户报告 [版本号 0.0.0 导致 homeassistant 插件无法加载](https://github.com/NousResearch/hermes-agent/issues/144616)。
- **移动端（Termux/Android）用户**：canary 通道 173MB 包体积、stable 404、缺 MCP SDK，反馈偏负面，打包质量是主要短板。
- **更新体验**：[hermes update 耗时 6 分钟且提示不友好](https://github.com/NousResearch/hermes-agent/issues/102540)（👍 2）。
- **正面信号**：多个 issue 当天报、当天修（#147025/#147036），维护者 @mwilliams 响应迅速；插件生态在增长（lithermes、Discord 扩展等社区贡献持续流入）。

---

## 8. 待处理积压（建议维护者关注）

| 项目 | 积压时长 | 说明 |
|---|---|---|
| [#30989](https://github.com/NousResearch/hermes-agent/issues/30989) BlueBubbles 附件中断回合 | 5 个月 | 仅 6 评论但无推进，iMessage 用户核心痛点 |
| [#30323](https://github.com/NousResearch/hermes-agent/issues/30323) /steer 时序问题 | 5 个月 | 今日新报 #147041 疑似同根因，建议合并处理 |
| [#40324](https://github.com/NousResearch/hermes-agent/issues/40324) webhook list/subscribe 误报 not enabled | 5 个月 | 配置类问题，影响多平台用户 |
| [#105758](https://github.com/NousResearch/hermes-agent/issues/105758) lifecycle guard 误报 | 近 2 个月，23 评论 | `needs-decision`，社区等待裁决 |
| [PR #3335](https://github.com/NousResearch/hermes-agent/pull/3335) Zulip 集成 | 7 个月 | 大型 feature 长期未合，贡献者体验受损 |
| [PR #3031](https://github.com/NousResearch/hermes-agent/pull/3031) security skill | 7 个月 | 多个 sweeper 风险标签待评审 |
| **44 条待合并 PR** | — | 合并吞吐偏低，建议增加评审带宽或分批清理 |

---

**健康度小结**：Issue→PR 响应链路健康、社区贡献活跃、安全意识强；主要风险在于 PR 积压规模与 Windows/Termux 等非主线平台的长期问题堆积。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-10-31）

## 1. 今日速览

今日 PicoClaw 无新 Issue 提出、无新版本发布，社区讨论热度处于低位。PR 活动集中在清理侧：16 条 PR 全部关闭（含多条 3 月遗留 PR 和 stale 的 dependabot 依赖升级 PR），显示维护者在进行积压工作的一次性收尾/清理。整体来看，今日项目处于“维护整理期”而非功能推进期，活跃度评估：**低**。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日关闭的 16 条 PR 中，实质功能性内容较少，多为批量合并与 stale 关闭：

- **Gemini 兼容性修复关闭**：[PR #3428](https://github.com/sipeed/picoclaw/pull/3428)（修复 OpenAI 兼容端点下 Gemini 3 `thought_signature` 缺失导致的 400 错误）被标记 stale 后关闭——**值得注意，这是一个仍有价值的修复，可能需要重提**。
- **安全增强 PR 关闭**：[PR #1258](https://github.com/sipeed/picoclaw/pull/1258)（exec 工具环境变量净化，含 PICOCLAW_* 传递与敏感变量屏蔽）被关闭，未合并。
- **批量合并修复**：维护者 @xuwei-xy 的多条聚合 PR 今日关闭：
  - [#1560](https://github.com/sipeed/picoclaw/pull/1560)（合并 #1312/#1311/#1308）
  - [#1544](https://github.com/sipeed/picoclaw/pull/1544)、[#1545](https://github.com/sipeed/picoclaw/pull/1545)、[#1552](https://github.com/sipeed/picoclaw/pull/1552)、[#1542](https://github.com/sipeed/picoclaw/pull/1542)（涵盖 SpawnStatusTool、Skills helpers、凭据加密、Passphrase/gateway 等）
- **多智能体框架 WIP 关闭**：[#423](https://github.com/sipeed/picoclaw/pull/423)（Blackboard 共享上下文 + agent handoff 框架，2 月开启的 WIP）被关闭，多智能体协作方向的社区贡献未能落地。

**判断**：今日以“关闭积压”为主，功能净增量有限；建议关注有价值 PR（#3428、#1258）是否以新形式重启。

## 4. 社区热点

今日无新 Issue、无评论数据，无明确热点。近期值得关注的讨论对象为被关闭的 PR #3428 与 #423，均涉及真实使用痛点（Gemini 工具调用失败、多智能体协作）。

## 5. Bug 与稳定性

今日无新 Bug 报告。关联已关闭修复：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 高 | Gemini 3 经 OpenAI 兼容端点工具调用报 400（#3428） | PR 已关闭，无替代 fix |
| 中 | WhatsappNative build tag 构建损坏（[#1569](https://github.com/sipeed/picoclaw/pull/1569)） | PR 已关闭 |

⚠️ 两个修复均以 CLOSED 结束且状态不明，若未在其他分支落地，建议验证主分支是否仍受影响。

## 6. 功能请求与路线图信号

- **多富媒体 QQ 频道消息支持**（[#1349](https://github.com/sipeed/picoclaw/pull/1349)：语音/图片/视频/文件收发）今日关闭——QQ 渠道能力增强是社区明确需求。
- **多智能体协作框架**（#423）长期 WIP 后关闭，表明该方向仍为路线图缺口，未来或有官方实现。
- **exec 工具安全加固**（#1258）：环境变量白名单/黑名单机制，符合 AI Agent 沙箱化趋势，值得重新纳入。

## 7. 用户反馈摘要

今日无 Issue 评论数据可提炼。从被关闭 PR 可间接推断用户痛点：
- 使用第三方模型（Gemini）走 OpenAI 兼容层时工具调用链路脆弱；
- 消息渠道（QQ、WhatsApp）的富媒体消息支持是高频需求；
- 对凭据加密、执行环境隔离等安全能力有明确诉求。

## 8. 待处理积压

- 🔴 [PR #3428](https://github.com/sipeed/picoclaw/pull/3428)：Gemini thought_signature 修复被 stale 关闭，维护者应确认是否重新接收。
- 🔴 [PR #1258](https://github.com/sipeed/picoclaw/pull/1258)：exec 安全增强，关闭原因不明，建议给出处置结论。
- 🟡 6 条 dependabot 依赖升级（#3432–#3436，含 golang.org/x/crypto 0.53→0.58、anthropic-sdk-go 1.55→1.80）全部被关闭，依赖更新策略需要明确（是否改用批量统一升级）。
- 🟡 [PR #423](https://github.com/sipeed/picoclaw/pull/423)：多智能体框架贡献流失，建议官方在路线图中回应该方向。

---
*数据来源：GitHub API（过去 24 小时）。总体健康度提示：功能型贡献关闭率上升且替代路径不明，建议关注维护者沟通与 stale 策略对社区积极性的影响。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-10-31）

## 1. 今日速览

过去 24 小时 NanoClaw 仓库共更新 **1 条 Issue（新开）** 和 **8 条 PR（7 开放 / 1 关闭）**，无新版本发布。活跃度以 PR 为主，主要来自 channels 适配器修复、记忆能力技能以及自动化 agent 镜像刷新。整体节奏平稳，属于日常迭代日，社区贡献（@antonio-antuan、@5queezer、@drsmk238 等）持续流入，健康度良好。

## 2. 版本发布

今日无新 Release，省略。

## 3. 项目进展

- **关闭 [#1283](https://github.com/nanocoai/nanoclaw/pull/1283)**（`memory-lancedb-pro` 混合检索记忆升级，3 月提交）：被拆分为更符合项目规范的技能化方案，由新 PR **[#4239 /add-lancedb-memory](https://github.com/nanocoai/nanoclaw/pull/4239)** 接替——以 MCP + LanceDB 实现向量 + BM25 混合召回、零核心改动的 per-group 长期记忆。这标志着“能力技能化”架构方向得到执行。
- **Proton Mail 原生适配器**（[#4218](https://github.com/nanocoai/nanoclaw/pull/4218)，来自 #3726 拆分）：适配器部分移至 channels registry 分支，Bridge 容器与技能留在 main，拆分推进中。
- **自动化镜像刷新**：[#4240](https://github.com/nanocoai/nanoclaw/pull/4240) → [#4242](https://github.com/nanocoai/nanoclaw/pull/4242)，bot 一天内两次更新 `v2026.10.0` 加固镜像，安全流水线运转正常。

## 4. 社区热点

- **[#4241（Issue）hardening：允许运维关闭 allowed_hosts 中的自动 provider 域名](https://github.com/nanocoai/nanoclaw/issues/4241)** —— 今日唯一新开 Issue，来自 @JohanForngren。诉求明确：`ironFrontConfig()` 自动将 native provider 的模型域名加入 `allowed_hosts`，自托管/企业运维希望可显式收紧出站域名白名单。已确认非可利用漏洞，属“加固建议”性质，反映企业部署对网络出口最小化的强烈需求。
- 其余 PR 评论数均未显示明显讨论热度。

## 5. Bug 与稳定性

今日新开 Bug 为 0，但三个待合并 bugfix PR 持续活跃，均聚焦 **channels 稳定性**：

| PR | 问题 | 严重度 | 状态 |
|---|---|---|---|
| [#4031](https://github.com/nanocoai/nanoclaw/pull/4031) | Telegram `getUpdates` 长轮询无客户端超时，网络切换后入站消息可挂起 ~15 分钟 | 高（可用性） | fix PR 开放中 |
| [#4032](https://github.com/nanocoai/nanoclaw/pull/4032) | 消息投递彻底失败（超过 MAX_DELIVERY_ATTEMPTS）后 agent 不知情，误以为已送达 | 高（正确性，涉及 security 标签） | fix PR 开放中 |
| [#4030](https://github.com/nanocoai/nanoclaw/pull/4030) | `ask_question` 长选项列表在 Telegram（8 按钮上限）/Discord（5）被截断 | 中 | fix PR 开放中 |

## 6. 功能请求与路线图信号

- **#4241**：运维可控的出站域名白名单开关——与 Iron Front 安全加固方向一致，很可能以 hardening 改进被采纳。
- **#4239（/add-lancedb-memory）**：承接被关闭的 #1283，方向已被维护者背书，合并概率高，或进入下一版本技能集。
- **#4218（Proton Mail 适配器）**：#3726 的拆分落地过程中，说明 channels registry 的多分支管理流程正在成熟；隐私邮件集成是明确的路线图信号。
- **channels 可靠性三连修复（#4030/#4031/#4032）**：均为社区贡献且带 follows-guidelines 标签，若合并将显著提升多平台消息通道稳定性。

## 7. 用户反馈摘要

今日 Issue/PR 数据中可直接提取的用户反馈有限，从提案动机可提炼：

- **企业/自托管运维**：希望更严格的出站网络管控（#4241），暗示存在合规或最小权限部署场景。
- **个人隐私用户**：需要通过 Proton Mail Bridge 接入端到端加密邮箱（#4218），体现对隐私优先通道的需求。
- **记忆能力痛点**：内置文件记忆“适合精选笔记，不适合海量小事实”，关键词查询召回差（#4239、#1283），是反复出现的真实诉求。
- **多通道用户体验**：Telegram/Discord 按钮截断、网络切换后消息停滞、投递失败静默——反映移动/不稳定网络用户的日常摩擦。

## 8. 待处理积压

- **#4030 / #4031 / #4032**（10-04 开启，已近 4 周）：三个 channels bugfix 至今未合并，影响 Telegram/Discord 用户体验，建议维护者优先评审。
- **#4218**（10-24 开启）：Proton Mail 适配器跨分支拆分中，需跟进合并时序，避免与 #3726 产生漂移。
- **#4242 / #4240**：镜像刷新 PR 堆积两条同日更新，建议及时合并旧条目（#4240）避免被 #4242 覆盖后长期挂起。
- 建议对 #4241 尽快给出维护者回应，明确 hardening 排期。

---
*数据来源：GitHub API（过去 24 小时窗口）；链接均为 nanocoai/nanoclaw 仓库条目。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：2026-10-31** | 数据来源：github.com/nearai/ironclaw

---

## 1. 今日速览

IronClaw 项目今日整体呈现**低活跃度、稳定运行**状态。过去 24 小时内无新增 Issue、无 Issue 关闭、无版本发布，唯一的动态是 1 条由 dependabot 自动提交的依赖升级 PR（[#8164](https://github.com/nearai/ironclaw/pull/8164)）。社区讨论区今日无新交互，表明项目处于功能迭代间隙或维护者聚焦于线下开发阶段。从健康度看，自动化依赖维护机制运转正常，是当前项目活跃度的主要保障之一。

---

## 2. 版本发布

今日无新版本发布。最新 Release 区间内无任何 tag 推送。

---

## 3. 项目进展

今日**无合并或关闭的 PR**，无功能性代码进入主分支。

待处理 PR（1 条）：
- **[#8164](https://github.com/nearai/ironclaw/pull/8164)** `chore(deps-dev): bump happy-dom from 20.11.1 to 21.0.4`（/crates/product/ironclaw_webui/frontend）
  - 作者：@dependabot[bot] | 状态：OPEN
  - 内容：将前端测试用 DOM 模拟库 happy-dom 从 20.11.1 升级至 21.0.4（跨大版本升级，v21 含较多内部改动，建议 CI 通过后再合并）
  - 影响：仅 devDependencies，属于开发/测试环境升级，不影响运行时；但大版本跳跃需关注测试兼容性

**整体判断**：项目今日实质进展为零，处于“等待维护者批量处理”状态。

---

## 4. 社区热点

今日无活跃讨论。无评论新增、无 👍 反应、无新开 Issue。社区热度指标为 24 小时内的最低值，无热点可供分析。

---

## 5. Bug 与稳定性

今日无新增 Bug 报告、崩溃或回归问题。稳定性信号中性偏正面——无负面反馈流入通常意味着用户侧未触发新问题。

---

## 6. 功能请求与路线图信号

今日无新功能请求。唯一的路线图间接信号来自 [#8164](https://github.com/nearai/ironclaw/pull/8164)：前端 WebUI（ironclaw_webui）仍在持续维护依赖链，暗示 WebUI 子模块是活跃开发面，后续版本可能继续在该方向迭代。

---

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼用户反馈。建议关注后续工作日的社区交互数据。

---

## 8. 待处理积压

| 条目 | 状态 | 说明 |
|---|---|---|
| [PR #8164](https://github.com/nearai/ironclaw/pull/8164) | OPEN（待审） | dependabot 依赖升级 PR，建议维护者确认 CI 后尽快合并，避免积压引发后续依赖 PR 叠加冲突 |

⚠️ 提醒：当前数据窗口内可见积压仅 1 条，属轻量级。但 happy-dom 大版本升级（20→21）若长期搁置，后续 dependabot 可能连续提交递增版本 PR，建议及时处理。

---

**健康度小结**：今日活跃度低属正常波动，自动化运维（dependabot）正常工作。建议持续观察 3-5 个工作日的 Issue/PR 流量，以判断是否进入开发静默期。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-10-31）

## 1. 今日速览

LobsterAI 今日保持高活跃度：过去 24 小时 PR 更新达 50 条（49 条已合并/关闭、1 条待合并），Issues 更新 3 条，并发布新版本 **2026.10.30**。项目迭代节奏紧凑，版本发布 PR（#2964）合并了自上个版本以来的 53 个提交，涵盖 Image Studio、媒体生成、IM 设置等多项功能。社区侧 Issues 全部为账号申诉类，反映出风控策略与用户使用方式之间存在摩擦。整体看，开发侧健康度很高，社区运营侧需关注申诉响应机制。

## 2. 版本发布

**LobsterAI 2026.10.30**（[Release](https://github.com/netease-youdao/LobsterAI/releases)）

- **Image Studio 上线**：全新图像创作界面，支持局部擦除-融合（close-up erase-and-blend）、按会话选择媒体模型，并修复生成图片的分享路径
- **对话体验优化**：大段粘贴文本折叠为卡片，历史记录持续加载
- **包含内容**（对应 [PR #2964](https://github.com/netease-youdao/LobsterAI/pull/2964)）：图像编辑/分享、内联上下文 chips、IM 设置改进、微信二维码处理优化、Provider key 存储改进等

破坏性变更与迁移注意事项：Release Notes 未明确标注破坏性变更；建议升级用户关注媒体生成相关行为变化。

## 3. 项目进展

今日大批 PR 集中关闭/合并，主要类别：

**发布与工程**
- [PR #2964](https://github.com/netease-youdao/LobsterAI/pull/2964) Release/2026.10.26 → main（53 commits，支撑 2026.10.30 版本）
- [PR #2933](https://github.com/netease-youdao/LobsterAI/pull/2933) Release/2026.10.19 回归主线
- [PR #2687](https://github.com/netease-youdao/LobsterAI/pull/2687) Release/2026.9.15 清理关闭

**性能与稳定性修复**
- [PR #2965](https://github.com/netease-youdao/LobsterAI/pull/2965) 修复 media intent 恢复阻塞主线程——根因是 `media.intents.v2` kv 行内联存储含 base64 图片的请求体且从不清理，某用户机器上达 **222MB**，导致输入/滚动每 ~15s 卡顿
- [PR #2932](https://github.com/netease-youdao/LobsterAI/pull/2932) 修复 gateway 每次启动即硬重启（每次启动额外增加 100–280s）
- [PR #2953](https://github.com/netease-youdao/LobsterAI/pull/2953) 图片 artifacts 改为从文件加载，不再经 IPC 传 base64 data URL

**OpenClaw / MCP 生态**
- [PR #2929](https://github.com/netease-youdao/LobsterAI/pull/2929) 转录中保留工具 payload 不脱敏，修复缓存命中率低（仅 15%）导致的额度消耗过快
- [PR #2951](https://github.com/netease-youdao/LobsterAI/pull/2951) 修复 OAuth 代理路由与 Computer Use MCP 认证
- [PR #2912](https://github.com/netease-youdao/LobsterAI/pull/2912) stdio MCP server 信任系统 CA，解决企业 MITM 代理下 `fetch failed`
- [PR #2960](https://github.com/netease-youdao/LobsterAI/pull/2960) IM agent cwd 热加载、失效模型 pin 重置
- [PR #2899](https://github.com/netease-youdao/LobsterAI/pull/2899) 修复 OneDrive 符号链接工作区报错

**桌面端体验**
- [PR #2894](https://github.com/netease-youdao/LobsterAI/pull/2894) 自定义/动态 GIF 伙伴皮肤、截图工具（保留官方皮肤与品牌）
- [PR #2910](https://github.com/netease-youdao/LobsterAI/pull/2910) Windows 伙伴窗口不再出现在任务栏
- [PR #2902](https://github.com/netease-youdao/LobsterAI/pull/2902) 修复含空格路径下自启动状态误报

**待合并**：[PR #2966](https://github.com/netease-youdao/LobsterAI/pull/2966) 新增 Codown SVN 发布工作流（构建签名安装器并提交内部 SVN，部署仍为手动），是工程基础设施方向的延续。

整体评估：今日相当于完成了一个完整发布周期的收尾，启动性能、内存、缓存命中率等多个用户可感知问题得到修复，项目前进幅度显著。

## 4. 社区热点

评论最多的 Issue 为 [**#2936**](https://github.com/netease-youdao/LobsterAI/issues/2936)（7 条评论，已关闭）——用户 @7597qqme 申诉两个账号被误封，自述曾将凭据配置进第三方 DSH 插件调用有道模型服务，疑似因此触发风控。因原 issue 标题泄露手机号，用户重新提交了 [**#2959**](https://github.com/netease-youdao/LobsterAI/issues/2959)（Open，1 评论）。

**背后诉求**：用户希望将 LobsterAI 内置模型接口用于个人本地工作流（第三方插件、本地反代），而官方风控将此类行为判定为违规封号。这暴露出「个人合理使用本地工具」与「凭据外泄风控」之间的边界不清问题，社区需要更透明的封禁申诉通道和使用条款说明。

## 5. Bug 与稳定性

今日 Issues 中无新 Bug 报告（均为申诉类），但今日合并的 PR 修复了多个近期 Bug：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | [#2965](https://github.com/netease-youdao/LobsterAI/pull/2965) 主线程周期性卡顿（222MB 未清理 kv 数据） | ✅ 已修复合并 |
| 高 | [#2932](https://github.com/netease-youdao/LobsterAI/pull/2932) 每次启动 gateway 双重启，启动慢 100–280s | ✅ 已修复合并 |
| 中 | [#2929](https://github.com/netease-youdao/LobsterAI/pull/2929) 升级后额度消耗异常加快（缓存命中率仅 15%） | ✅ 已修复合并 |
| 中 | [#2914](https://github.com/netease-youdao/LobsterAI/pull/2914) 离线启动后账号数据部分丢失 | ✅ 已修复合并 |
| 中 | [#2912](https://github.com/netease-youdao/LobsterAI/pull/2912) 企业代理/TLS 拦截下 MCP fetch failed | ✅ 已修复合并 |
| 低 | [#2945](https://github.com/netease-youdao/LobsterAI/pull/2945) Vite 陈旧 immutable 依赖阻塞 dev renderer | ✅ 已修复合并 |

## 6. 功能请求与路线图信号

- **桌面个性化**：[PR #2894](https://github.com/netease-youdao/LobsterAI/pull/2894)（自定义皮肤 + GIF 动图 + 截图工具）已合并，将出现在后续版本
- **Image Studio**：已随 2026.10.30 发布，媒体模型按会话选择的架构暗示后续可能扩展更多多模态能力
- **企业/代理环境兼容**：#2912、#2951 等系列修复显示对企业网络环境的持续投入，可作为路线图信号
- **发布基础设施**：#2966（Codown SVN 发布流）待合并，反映内部多渠道分发需求

今日无新增功能请求类 Issue。

## 7. 用户反馈摘要

从申诉 Issues 与 PR 描述中的用户报告可提炼：

**痛点**
- 账号风控误伤本地个人用户：第三方插件配置凭据（#2959）、本地反向代理（[#2940](https://github.com/netease-youdao/LobsterAI/issues/2940)）均触发封禁，用户已自行整改（停止代理、清理 Token）并主动申诉
- 升级后额度消耗异常快（#2929 用户报告）
- 启动慢、周期性卡顿（#2932、#2965 用户日志驱动修复）
- 企业 MITM 代理环境下 MCP 完全不可用且无 UI 提示（#2912）
- OneDrive 存放工作区导致主 agent 消息全部失败（#2899）

**满意点**：用户对桌面伙伴（companion）、IM 集成、图像生成等差异化功能有真实使用粘性；申诉用户愿意详细说明场景并配合整改，显示社区态度总体建设性。

## 8. 待处理积压

- [#2959](https://github.com/netease-youdao/LobsterAI/issues/2959)（Open）：账号误封申诉，仅 1 条评论，需官方申诉通道介入；同时需维护者清理 #2936 标题中的个人信息
- [#2940](https://github.com/netease-youdao/LobsterAI/issues/2940)（Open）：反代触发封禁申诉，仅 1 条评论，用户已完整整改，建议尽快回复
- [PR #2966](https://github.com/netease-youdao/LobsterAI/pull/2966)（Open）：Codown SVN 发布工作流，待 review

**给维护者的提醒**：申诉类 Issue 长期无响应会损害社区信任，建议建立标准化的申诉处理流程，并在文档中明确凭据使用边界（禁止第三方插件/反代），减少误封与争议。

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

# CoPaw 项目动态日报 — 2026-10-31

## 1. 今日速览

CoPaw（仓库内标识 QwenPaw）过去 24 小时保持高活跃度：26 条 PR 更新（16 条待合并、10 条已合并/关闭），6 条 Issue 更新（5 开 1 关），无新版本发布。今日焦点集中在 **2.3.0-beta 桌面端打包缺陷**（glyph atlas 资产缺失）、**网关错误分类失效导致无重试/无降级**，以及一个值得重视的**安全类 Issue（shell 外联命令绕过审批）**。社区修复响应速度快——两个关键 Bug 均在 1 天内出现了对应 fix PR，显示维护者与贡献者闭环效率较高。总体项目健康度良好，但 beta 版在受限环境（NAS 沙箱）和桌面分发渠道的兼容性问题值得持续关注。

## 2. 版本发布

今日无新版本发布。（最新版本仍为 2.3.0-beta 系列，beta 渠道问题详见第 5 节。）

## 3. 项目进展

今日共 10 条 PR 合并/关闭，主要推进：

- **#8508 [CLOSED]** 移除遗留 workspace ZIP 下载/上传 API——旧 ZIP 合并可覆盖在线 SQLite 文件，且在 Windows 上因 #8482 失效；正常文件上传、项目 ZIP 导入与备份恢复不受影响。属于安全卫生 + 技术债清理。([PR #8508](https://github.com/agentscope-ai/QwenPaw/pull/8508))
- **#8507 [CLOSED]** 修复 Release #50 Docker 前端构建失败（`memoryTags.test.ts` 依赖仓库根目录 JSON 不在 Docker 构建阶段），删除共享 `memory_tags_contract.json` 及相关参数化对照测试。保障了发布流水线。([PR #8507](https://github.com/agentscope-ai/QwenPaw/pull/8507))
- **#8483 [CLOSED]** 修复 import-cache 刷新失败导致整个插件系统崩溃的问题（CPython 3.11.9+ 但 `importlib.metadata` 较旧的环境，如 Debian 12）。显著提升插件加载健壮性。([PR #8483](https://github.com/agentscope-ai/QwenPaw/pull/8483))
- **#7896 [CLOSED]**（首次贡献者）修复空闲队列清理竞态：慢消费者停机期间候选队列收到新消息仍被删除，导致消息丢失。通道可靠性提升。([PR #7896](https://github.com/agentscope-ai/QwenPaw/pull/7896))
- **#8379 [CLOSED]** 修复完整 pytest 运行因两个 `test_backup` 模块重名导致的收集中断，恢复贡献者本地门禁可用性。([PR #8379](https://github.com/agentscope-ai/QwenPaw/pull/8379))
- **#6041 [CLOSED]**（首次贡献者，7 月提交）`DoomLoopGate` 将重复只读工具调用（如多次读取 memory）误判为死循环并终止；现豁免只读工具。运行 3 个多月后终于关闭，说明维护者在逐步消化积压。([PR #6041](https://github.com/agentscope-ai/QwenPaw/pull/6041))

**整体评价**：今日合并以稳定性、安全清理与 CI 修复为主，无重大新功能落地；大型功能 PR（社区集成 #7903、第三方 Agent 插件化 #8426、桌面审批通知 #8504）仍在评审中，属于下一阶段的核心增量。

## 4. 社区热点

- **[#8488](https://github.com/agentscope-ai/QwenPaw/issues/8488)（3 条评论，最高互动）** 桌面/PyInstaller 构建缺失 `visual_compression` glyph atlas 资产，导致 Visual Compact 静默失效并抛 `FileNotFoundError`。诉求：beta 桌面包的分发完整性。已有 fix PR #8514 待合并。
- **[#8505](https://github.com/agentscope-ai/QwenPaw/issues/8505)（2 条评论）** OpenAI 兼容网关中流失败时抛出裸 `APIError`，状态码只在消息文本中（如 `status_code=502, ...`），被归类为 `unknown`，不触发重试也不触发模型降级。诉求：自建网关/中转用户的高可用链路。已有 fix PR #8512。
- **[#8513](https://github.com/agentscope-ai/QwenPaw/issues/8513)** 安全类：shell 包装的外联动作（SMTP 发送 / HTTP POST / `@file-to-network`）在 AUTO/SMART 审批级别下既不产生 findings 也不要求审批，`tool_guard` 与治理通道均存在检测盲区。**尚无对应 fix PR**，是需要维护者优先响应的治理缺口。

## 5. Bug 与稳定性（按严重程度排列）

| 严重度 | Issue | 摘要 | Fix PR |
|---|---|---|---|
| 🔴 高（安全） | [#8513](https://github.com/agentscope-ai/QwenPaw/issues/8513) | shell 外联命令（发邮件/HTTP POST/读本地文件上传）无审批、无 findings，存在数据外泄形状的绕过 | ❌ 暂无 |
| 🔴 高 | [#8515](https://github.com/agentscope-ai/QwenPaw/issues/8515) | v2.3.0b2 在 fnOS NAS 沙箱 import 阶段即崩：`dependency_maintenance` 锁根目录优先按 `pwd` home 推导，绕过 `$HOME`，且覆盖变量 `QWENPAW_DEPENDENCY_STATE_DIR` 未在文档说明 | ❌ 暂无 |
| 🟠 中 | [#8505](https://github.com/agentscope-ai/QwenPaw/issues/8505) | 网关裸 `APIError` 被归类 `unknown`，无重试/降级 | ✅ [#8512](https://github.com/agentscope-ai/QwenPaw/pull/8512) |
| 🟠 中 | [#8488](https://github.com/agentscope-ai/QwenPaw/issues/8488) | 桌面构建缺 glyph atlas，Visual Compact 静默失效 | ✅ [#8514](https://github.com/agentscope-ai/QwenPaw/pull/8514) |
| 🟡 中低（间歇） | [#8511](https://github.com/agentscope-ai/QwenPaw/issues/8511) | 飞书通道：上一条消息处理中收到新消息时偶发 `ProviderError: No active model configured`（2.2.2 即存在，非 beta 引入） | ❌ 暂无 |
| 🟢 低（已关闭） | [#8486](https://github.com/agentscope-ai/QwenPaw/issues/8486) | Console 工具调用图标左缘被裁切（CSS padding） | ✅ 已关闭 |

## 6. 功能请求与路线图信号

从待合并 PR 可见下一版本可能的方向：

- **桌面审批通知**：[#8504](https://github.com/agentscope-ai/QwenPaw/pull/8504)（XXXL，关联 #8460）——后台运行时新审批请求触发系统通知，不暴露工具参数，点击跳转。改善无人值守场景体验。
- **社区与收件箱集成**：[#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903)（XXXL，Under Review）——内嵌社区 feed、资源来源追踪、Platform PKCE 账号打通，是产品社交化的大动作。
- **本地 Piccolo 模型驱动原生决策**：[#8463](https://github.com/agentscope-ai/QwenPaw/pull/8463)——本地小模型承担工具审查与上下文压缩决策，信号是**本地化/去云端依赖**路线。
- **第三方 Agent 插件化**：[#8426](https://github.com/agentscope-ai/QwenPaw/pull/8426)（XXXL）——架构层面解耦，为生态扩展铺路。
- **Whisper 转写模型可配置**：[#8052](https://github.com/agentscope-ai/QwenPaw/pull/8052)——支持 SiliconFlow SenseVoice、本地 Whisper 等非 OpenAI 模型 ID，直击真实需求。
- Issue #8513（安全盲区）虽是 Bug 报告，但隐含对**外联动作细粒度治理策略**的功能诉求，可能催生新的审批策略类别。

## 7. 用户反馈摘要

- **自建网关用户**（#8505）：使用 OpenAI 兼容中转/网关时，中流失败后系统既不重试也不切备用模型，可用性受损——用户期望错误分类覆盖更多网关方言。
- **NAS/受限环境用户**（#8515）：飞牛 fnOS 沙箱用户以专用应用用户运行即崩，痛点是 QwenPaw 对非标准 home 布局假设过强、逃生变量缺乏文档。
- **飞书通道用户**（#8511）：连续快速发消息时收到 "Internal error"，虽是偶发但影响日常使用；用户已自行定位到并发处理时序。
- **安全敏感用户**（#8513）：肯定了 QwenPaw 的审批体系框架，但指出 AUTO/SMART 模式下 shell 外联检测存在实质缺口——反馈专业且具建设性。
- **桌面端用户**（#8488）：beta 桌面版功能静默失效而非显式报错，希望失败可见性更好。

## 8. 待处理积压

- **[#8513](https://github.com/agentscope-ai/QwenPaw/issues/8513) 安全盲区**：⚠️ 高优先，尚无 fix PR，建议维护者尽快确认与排期。
- **[#8515](https://github.com/agentscope-ai/QwenPaw/issues/8515)**：今日新报，影响所有受限沙箱部署，且暴露文档缺口（`QWENPAW_DEPENDENCY_STATE_DIR` 未说明），需跟进。
- **[#8067](https://github.com/agentscope-ai/QwenPaw/pull/8067)**（CJK 强调边界修复，10-01 开启，Under Review）：影响所有中文用户的 Markdown 渲染质量，建议加速评审。
- **[#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903)**（XXXL 社区集成，09-20 开启）与 **[#8426](https://github.com/agentscope-ai/QwenPaw/pull/8426)**（XXXL 插件化）：大体积 PR 长期占用评审带宽，建议明确里程碑或分拆。
- **[#6041](https://github.com/agentscope-ai/QwenPaw/pull/6041) 的教训**：运行近 4 个月才关闭，提示中小型贡献者 PR 的响应时效仍需改善，以维持社区贡献热情。

---
*数据来源：CoPaw GitHub 仓库（agentscope-ai），统计窗口 2026-10-30 至 2026-10-31。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报（2026-10-31）

## 1. 今日速览

ZeptoClaw 今日整体活跃度**偏低**，无新版本发布、无 PR 合并。过去 24 小时唯一实质性动态是维护者 @qhkm 关闭了 Issue [#721](https://github.com/qhkm/zeptoclaw/issues/721)——一个针对 CLI 交互式 Agent UI 的高优先级（P2-high）问题，且从创建到关闭仅隔一天，响应速度值得肯定。另有 5 条待合并 PR 均为 Dependabot 依赖升级更新，全部挂起未合并（最早可追溯至 2026-09-15）。项目当前处于**维护修整期**，核心功能开发节奏放缓，依赖更新积压需要关注。

## 2. 版本发布

今日无新版本发布。最新 Release 频道无内容。

## 3. 项目进展

- **Issue #721 关闭**：[qhkm/zeptoclaw#721](https://github.com/qhkm/zeptoclaw/issues/721) —— 交互式 Agent UI 的世界级体验修复（卡死 spinner、重复分隔线、原始回复未格式化）已关闭。该问题定位到 `src/cli/agent.rs` 与 `src/cli/shimmer.rs` 中的竞态和渲染缺陷。注意：**当前未见关联 fix PR 合并记录**，可能是直接推送到主分支或修复尚未落地，建议核实。
- PR 方面无任何合并/关闭动作，5 条 Dependabot PR 持续待合并，无实质功能推进。

## 4. 社区热点

今日无评论、无 👍 反应的讨论热点。相对最受关注的是已关闭的 [#721](https://github.com/qhkm/zeptoclaw/issues/721)（作者本人提交，0 评论），反映的是**维护者对 CLI 交互体验的自我要求**：交互式 Agent 会话中 spinner 与回复输出的竞态、空分隔线重复渲染、DeepSeek 会话回复格式混乱等，说明用户直接在终端中使用 AI Agent 是核心场景，输出渲染质量是体验关键。

## 5. Bug 与稳定性

- **[P2-high] CLI 交互式 Agent UI 渲染缺陷**（[#721](https://github.com/qhkm/zeptoclaw/issues/721)，已关闭）：包括 ShimmerSpinner 停止时与回复输出竞态导致的 "Thinking..." 卡死、重复空分隔线、回复未缩进渲染。⚠️ 关闭状态但未检索到对应 fix PR，需确认修复是否已真正落地。
- 今日无其他新报 Bug、崩溃或回归。

## 6. 功能请求与路线图信号

- #721 虽以 issue 形式提出，但本质是 CLI 交互体验的一揽子增强（"world-class interactive agent UI"），关闭该问题暗示**终端 Agent UI 打磨**是当前路线图重点方向。
- 依赖升级信号：[#690](https://github.com/qhkm/zeptoclaw/pull/690)（clap 4.6.1 → 4.6.6）与 [#694](https://github.com/qhkm/zeptoclaw/pull/694)（base64 0.22.1 → 0.23.1，**注意 base64 0.23 属次版本升级，可能存在 API 变更**）若合并，将是下一次版本发布的前置工作。

## 7. 用户反馈摘要

今日无外部用户评论可提炼。间接信号：

- #721 的截图来自 **DeepSeek 会话**，表明用户会搭配国产/开源模型使用 ZeptoClaw，多模型兼容下的终端渲染稳定性是实际痛点。
- 5 条 Dependabot PR 涉及 mail-parser、base64、clap、async-trait、tokio-serial，间接印证项目能力面覆盖**邮件解析、串口通信、异步运行时**，指向 IoT/设备控制 + 邮件代理类 Agent 场景。

## 8. 待处理积压 ⚠️

以下 Dependabot PR 均已挂起 **45 天以上**，建议维护者集中审查合并或配置自动合并：

| PR | 依赖 | 版本变化 | 挂起时长 |
|---|---|---|---|
| [#685](https://github.com/qhkm/zeptoclaw/pull/685) | tokio-serial | 5.4.5 → 5.5.0 | ~46 天 |
| [#688](https://github.com/qhkm/zeptoclaw/pull/688) | async-trait | 0.1.89 → 0.1.92 | ~46 天 |
| [#690](https://github.com/qhkm/zeptoclaw/pull/690) | clap | 4.6.1 → 4.6.6 | ~46 天 |
| [#694](https://github.com/qhkm/zeptoclaw/pull/694) | base64 | 0.22.1 → 0.23.1 | ~46 天 |
| [#705](https://github.com/qhkm/zeptoclaw/pull/705) | mail-parser | 0.11.3 → 0.11.9 | ~39 天（且为 `fix` 级安全/缺陷修复） |

**健康度小结**：核心维护者响应迅速（#721 一天内闭环），但依赖更新管道明显堵塞，且需确认 #721 的修复代码是否已进入主分支。建议下一步：集中处理 Dependabot 积压 → 发布一个小版本收口近期 CLI 修复。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报（2026-10-31）

## 1. 今日速览

今日 EasyClaw 项目整体处于**低交互、稳态发布**状态。过去 24 小时内无新增或活跃 Issues（0 条）、无 PR 更新（0 条），社区交互暂停，但项目并未停滞，发布了新版本 **v1.9.45**。这表明项目当前由维护者主导，以小步快跑的方式持续迭代，属于典型的“维护者驱动型”活跃模式。建议关注后续版本能否带动社区反馈回暖。

## 2. 版本发布

**v1.9.45: TK Copilot v1.9.45**
🔗 https://github.com/gaoyangz77/easyclaw/releases

更新内容：
- **联盟样本（Affiliate sample）筛选优化**：可按审核操作时间筛选样本详情，样本卡片上可见审核人及审核原因，提升审核透明度与可追溯性
- **审核筛选增强**：reviewer 筛选器新增“无记录（no-record）”选项；在批量导入（bulk import）旁新增单个 Creator 添加入口，降低小规模操作成本
- **Creator 列表过滤**：默认隐藏没有 TikTok 用户名的 Creator，并在报告中标注哪些 Creator 被排除

**破坏性变更**：无（Release Notes 未标注 breaking changes，均为增量功能与默认行为微调）。

**迁移注意事项**：默认隐藏无 TikTok 用户名的 Creator 属于默认行为变更，依赖旧默认视图的用户需手动调整筛选条件。

## 3. 项目进展

今日无 PR 合并/关闭记录（0 条）。项目进展主要通过 v1.9.45 的直接发布体现，聚焦于**联盟营销（Affiliate）审核工作流**的精细化：审核可追溯性（谁审的、为什么审）、灵活筛选（时间、审核人、无记录）、以及 Creator 管理体验（单个添加、默认过滤无效账号）。整体为体验打磨型迭代，非架构级推进。

## 4. 社区热点

今日无活跃 Issue 或 PR 讨论，无社区热点可分析。社区声量处于静默期，可能与发布节奏和用户群体特征（偏运营/电商工具用户）有关。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题（Issues: 0 条），无已知风险项需跟踪。

## 6. 功能请求与路线图信号

今日无新增功能请求。但从 v1.9.45 的迭代方向可推断路线图信号：
- **联盟样本审核链路**持续强化（审核人可见性、按时间筛选），预计后续版本会继续深化审核分析能力
- **Creator 管理入口**正在补齐（单个添加），暗示 Creator 生命周期管理（导入、过滤、标注）是下一阶段重点

## 7. 用户反馈摘要

今日无 Issue 评论可供提炼。从版本更新内容间接可见的用户场景：
- 用户需要**追溯审核责任**（谁审核了某个样本、依据是什么），反映此前审核流程透明度不足的痛点
- 用户被无效 Creator（无 TikTok 用户名）干扰列表，说明存在数据质量与清理需求

## 8. 待处理积压

今日数据中无长期未响应的 Issue 或 PR（均为 0 条更新）。暂无需提醒维护者关注的积压项。建议维护者在新版本发布后主动在社区渠道（README、Discussions 等）公布更新亮点，激活用户反馈。

---

**健康度小结**：发布节奏稳定 ✅｜社区互动静默 ⚠️｜无稳定性风险 ✅｜建议加强社区运营以获取用户反馈信号。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*