# OpenClaw 生态日报 2026-09-22

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-22 03:54 UTC

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

# OpenClaw 项目动态日报 — 2026-09-22

---

## 1. 今日速览

OpenClaw 今日保持高度活跃：过去 24 小时 Issues 更新 500 条（新开/活跃 474，关闭 26），PR 更新 500 条（待合并 373，已合并/关闭 127），并有 1 个新版本发布。项目由核心维护者 @steipete 领衔的 Gateway 线程性能优化系列 PR 密集推进（#152835、#155388、#155401、#155408 等），显示出明确的性能治理主线。社区侧，会话状态（session-state）与消息丢失（message-loss）类 Bug 仍是投诉最集中的类别，多个 P1 问题长期挂起。总体评估：开发活跃度极高、贡献者生态健康，但高优先级 Bug 积压与修复 PR 消化速度不匹配，值得关注。

---

## 2. 版本发布

**v2026.7.35（gateway-only `extended-stable`，相当于 LTS）** — [Release](https://github.com/openclaw/openclaw/releases)

- 基线为 2026 年 7 月底的 OpenClaw，叠加关键安全更新、可靠性与性能修复，以及新模型支持等特性
- 当前最新版本为 2026.9.5，`extended-stable` 用户按预期从 7 月基线获得回移（backport）补丁
- 无破坏性变更说明；仅网关组件，升级风险低

---

## 3. 项目进展

今日 127 个 PR 合并/关闭，重点方向：

**Gateway 主线程响应性优化（@steipete 密集提交）**
- [PR #152835](https://github.com/openclaw/openclaw/pull/152835)：Profile 角色变更移出 Gateway 主线程 SQLite 执行，防止延迟结果恢复过期权限
- [PR #155388](https://github.com/openclaw/openclaw/pull/155388)：脏 session-list 事实准备移至 history worker，消除主线程逐行 SQLite 读取阻塞
- [PR #155401](https://github.com/openclaw/openclaw/pull/155401)：复用已度量的 history delta 字节，减少重复序列化

**新模型支持**
- [PR #155409](https://github.com/openclaw/openclaw/pull/155409) + [PR #155412](https://github.com/openclaw/openclaw/pull/155412)：小米 MiMo V2.6 系列（Pro / Flash / Pro UltraSpeed）预设与目录支持，两条并行实现待维护者取舍

**诊断与 UX 修复（今日新开、当日即标 ready for review）**
- [PR #155246](https://github.com/openclaw/openclaw/pull/155246)：`doctor --session-sqlite recover` 干净恢复时不再误发 GitHub issue 草稿
- [PR #155117](https://github.com/openclaw/openclaw/pull/155117)：区分 memory 能力“未注册”与“运行失败”两种状态
- [PR #155408](https://github.com/openclaw/openclaw/pull/155408)：已完成 subagent 立即从活动列表清除

整体看，Gateway 性能治理与新模型生态扩展是本轮迭代的双主线，进展节奏快、代码审查标签体系（size/proof/rating/status）运转成熟。

---

## 4. 社区热点

1. [#111897](https://github.com/openclaw/openclaw/issues/111897)（19 评论，P1）：同一 session lane 两个并发 run 均完成并重复投递回复。与 #54488 的 lane 饥饿症状相关但机制不同，用户诉求是高负载下的 exactly-once 语义。
2. [#69208](https://github.com/openclaw/openclaw/issues/69208)（16 评论，维护者挂起的伞形 Issue）：跨渠道（MS Teams / Webchat / Telegram / followup 队列 / delivery-mirror）重复 transcript、replay、context assembly 的系统性 Bug 集合——被标记 `needs-product-decision`，说明团队承认这是架构层问题。
3. [#96834](https://github.com/openclaw/openclaw/issues/96834)（16 评论，P1）：WhatsApp 1:1 入站图片卡死主 lane 约 3 分钟，多模态路径搁浅工作队列。
4. [#137332](https://github.com/openclaw/openclaw/issues/137332)（15 评论，P1 🦞）：混合 terminal requester-settle 批次在 ownership 检查后无限重试——新近报告但讨论激烈，属 subagent 结算核心路径。
5. [#43367](https://github.com/openclaw/openclaw/issues/43367)（14 评论）：多 Agent 编排不稳定（并发 config 覆写、session-lock 失败、子任务脱管），长期有 linked PR 未合。

**诉求共性**：用户在多 Agent + 多渠道 + 多模态生产场景下，对消息可靠性（不重复、不丢失）和 subagent 生命周期可预测性的需求远超当前实现水平。

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 摘要 | Fix PR |
|---|---|---|---|
| P0 | [#91931](https://github.com/openclaw/openclaw/issues/91931) | 预置 SOUL.md 等文件导致 bootstrap 被误判完成并删除用户 BOOTSTRAP.md（数据丢失） | 无（needs-product-decision） |
| P0 | [#48920](https://github.com/openclaw/openclaw/issues/48920) | Live Docs 领先于发布版本，配置项在稳定版不可用 | 无 |
| P1 | [#144809](https://github.com/openclaw/openclaw/issues/144809) | claude-cli 长于 RUN_STALE_TAKEOVER_MS 的回合整段回复丢失（9 月新报，影响最新版） | 暂无 |
| P1 | [#137332](https://github.com/openclaw/openclaw/issues/137332) | requester-settle 批次永久 pending | 暂无 |
| P1 | [#109478](https://github.com/openclaw/openclaw/issues/109478) | 多行工具参数换行被替换为字面 `\n`，跨模型、间歇性、产坏文件 | 暂无 |
| P1 | [#107244](https://github.com/openclaw/openclaw/issues/107244) | WhatsApp 群消息（LID）完全不入站，DM 正常 | 有候选 [PR #125535](https://github.com/openclaw/openclaw/pull/125535)（needs proof） |
| P1 | [#99910](https://github.com/openclaw/openclaw/issues/99910) | Memory dreaming 卡死 Gateway 事件循环约 10 分钟，短期记忆库无法持久化 | 无（needs-live-repro） |
| P1 | [#101929](https://github.com/openclaw/openclaw/issues/101929) | 上下文溢出预估器高估 2.3–2.6×，误触发截断恢复 | 无 |
| P2 | [#105528](https://github.com/openclaw/openclaw/issues/105528) | Windows 上 exec/read 工具间歇性返回空输出（2026.6.x 回归） | 无 |
| P2 安全 | [#137705](https://github.com/openclaw/openclaw/issues/137705) | Telegram 流式路径泄漏原始 `file://` Markdown 链接 | 无 |

回归类问题集中在 2026.5–2026.7 升级路径上（#84110、#94939、#139578），提示近期快速迭代在迁移与缓存层引入了可观的回归面。

---

## 6. 功能请求与路线图信号

- **Session 自动智能命名**（[#99583](https://github.com/openclaw/openclaw/issues/99583)，P3）：利用现有 llm-slug-generator 懒生成标题、话题漂移时改名——代码基础已存在，实现成本低，有望近期纳入。
- **Memory therapy 交互式会话**（[#105494](https://github.com/openclaw/openclaw/issues/105494)）：memory-wiki 已能检测矛盾与开放问题，用户希望闭环解决。与 memory-core 插件团队方向一致。
- **按源目录索引记忆**（[#95724](https://github.com/openclaw/openclaw/issues/95724)）：同 workspace 多 agent 消除重复向量库，属明确性能/成本优化，配合当前 Gateway 性能主线可能优先。
- **生产级多写者 session lock**（[#96477](https://github.com/openclaw/openclaw/issues/96477)）：多用户部署的核心诉求，但标记 needs-product-decision，短期难落地。
- **Control UI 主题系统**（[#28300](https://github.com/openclaw/openclaw/issues/28300)，👍 5 社区呼声高）：预设主题 + 自定义主题工作室。
- 已有 PR 预示的近期能力：MiMo V2.6（#155409/#155412）、Matrix emote 消息（#133934 已关闭）、macOS Rust 运行时 sidecar 原型（#149725，战略信号值得关注）。

---

## 7. 用户反馈摘要

**痛点（高频出现）**
- **消息可靠性**：重复回复、静默丢消息、无重试/死信/用户可见失败（#111897、#112259、#49381）是生产用户最大不满。
- **Token 成本**：bootstrap 文件每轮重注入浪费 20–30% 上下文（#67419）；OpenAI 前缀缓存被动态注入内容击穿（#95610）；Codex 路径缓存命中率 93%→47%（#84110）——成本敏感用户反馈强烈。
- **长回合不友好**：runtime context carrier 置于用户消息之后导致模型混乱与推理 token 浪费（#110190）；长回合整段回复丢失（#144809）。
- **运维摩擦**：SQLite 大库启动时冗余完整性检查（#118885）、良性事件刷爆 WARN 日志（#107902）。

**满意点**
- doctor/diag 工具链、Control UI、clawsweeper 分诊标签体系获得社区认可；维护者（@steipete 等）响应 PR 速度快，贡献者体验良好。
- 渠道覆盖广度（WhatsApp/Telegram/Feishu/Signal/Matrix/iMessage 等）被多渠道部署用户视为核心价值。

---

## 8. 待处理积压（建议维护者关注）

| 项目 | 状态 | 说明 |
|---|---|---|
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | 4+ 月未决伞形 Issue | 跨渠道重复消息类 Bug 的根因治理，`needs-product-decision` 挂起过久 |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 6+ 月 | 多 Agent 编排稳定性，有 linked PR 未合 |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | 3 月 | WhatsApp 多模态卡 lane，无 fix PR |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | 6 月，P0 | 文档与版本脱节，UX 发布阻塞项 |
| [#99910](https://github.com/openclaw/openclaw/issues/99910) | 3 月 | Memory dreaming 崩溃级问题仍在 needs-live-repro |
| [PR #111020](https://github.com/openclaw/openclaw/pull/111020) | 2 月，ready for maintainer look，XL | Codex false-interrupt 修复，兼容性风险高需尽快裁决 |
| [PR #125535](https://github.com/openclaw/openclaw/pull/125535) | 1 月，needs proof | WhatsApp LID 入站丢弃修复，直接对应 #107244 |
| [PR #123906](https://github.com/openclaw/openclaw/pull/123906) | waiting on author | TUI 更新后启动失败，P1，建议催作者跟进 |

**健康度小结**：OpenClaw 开发端活跃度优秀、版本节奏稳定（LTS 通道已建立），但 P0/P1 会话状态与消息可靠性 Bug 的存量较大且修复 PR 消化偏慢，建议将 #69208 伞形治理与 Gateway 性能系列同优先级推进。

*数据来源：GitHub API 快照，统计窗口 2026-09-21 至 2026-09-22。*

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告

**数据窗口：2026-09-21 至 2026-09-22**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入“基础设施化”阶段：头部项目（OpenClaw、Hermes Agent）单日 Issue/PR 更新量达 500 条级别，形成完整的贡献者分层与治理流程（分诊标签、RFC 队列、LTS 通道）。生态内项目高度趋同于“网关 + 多 IM 渠道 + 记忆系统 + 多 Agent 编排”的架构范式，竞争焦点正从功能覆盖转向**消息可靠性、性能治理与静默失败治理**等生产化议题。同时出现明显的分层：全功能平台（OpenClaw/Hermes/Zeroclaw）、轻量化/垂直方案（NanoClaw/PicoClaw/Moltis）、企业集成路线（LobsterAI/CoPaw）并行发展。安全问题（沙箱逃逸、提示注入、权限绕过）开始集中暴露，将成为下一阶段的治理重点。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 合并吞吐 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（新/活跃 474） | 500（待合 373，合/关 127） | v2026.7.35 LTS | 高（127/日） | ⭐⭐⭐⭐ 活跃度顶级，但 P0/P1 积压与修复速度不匹配 |
| **Hermes Agent** | 50（40 活跃） | 50（待合 48，合 2） | v0.21.4（打包 ~1800 PR） | 低（2/日） | ⭐⭐⭐⭐ 高活跃快速迭代，Desktop 回归密度偏高 |
| **Zeroclaw** | 50（46 活跃） | 50（待合 49，合 1） | 无 | 极低（1/日） | ⭐⭐⭐ 开发热但 review 瓶颈严重，合并债务累积 |
| **CoPaw** | 23 | 34（合/关 19） | 无（2.2.2 打磨中） | 高（19/日） | ⭐⭐⭐⭐ 吞吐健康，安全 Issue 需关注 |
| **NanoBot** | 3 | 31（待合 27，合 4） | 无 | 中 | ⭐⭐⭐ 贡献集中（单人 WebUI 系列），积压 2-3 月 |
| **LobsterAI** | 2 | 16（合/关 13） | 无（发版前收尾） | 高 | ⭐⭐⭐⭐ 当日闭环效率优秀 |
| **NanoClaw** | 1 | 8（待合 7） | 无 | 低 | ⭐⭐ 稳定迭代，Signal 渠道为当前主线 |
| **PicoClaw** | 3 | 3（待合 2） | 无 | 低 | ⭐⭐ 中等活跃，外部贡献质量高 |
| **Moltis** | 2 | 2（待合 2） | 无 | 零 | ⭐⭐ 温和聚焦，等待维护者审查 |
| **IronClaw** | 1（自动化报告） | 0 | 无 | 零 | ⭐⭐ CI 运转正常，无实质代码推进 |
| **NullClaw / TinyClaw / ZeptoClaw / EasyClaw** | 0 | 0 | 无 | — | ⭐ 无活动 |

---

## 3. OpenClaw 在生态中的定位

**优势**
- **规模断层领先**：单日 Issue/PR 更新量为生态第二梯队（Hermes/Zeroclaw）的 10 倍，贡献者生态最厚（多条并行主线、成熟的 size/proof/rating 审查标签体系）。
- **发布工程最成熟**：唯一建立 gateway-only `extended-stable`（LTS）回移通道的项目，且有明确版本节奏。
- **性能治理主线清晰**：@steipete 的 Gateway 主线程 SQLite 系列优化（#152835/#155388/#155401）是生态内最系统化的性能债偿还动作——其他项目尚停留在“发现性能问题”阶段（NanoBot #5843 诊断、LobsterAI #2738 启动耗时）。
- **渠道覆盖最广**：WhatsApp/Telegram/Feishu/Signal/Matrix/iMessage/Teams，被多渠道部署用户视为核心护城河。

**技术路线差异**
- OpenClaw 走“单体网关 + 插件化渠道 + 多 Agent 编排”的全功能路线；Hermes 侧重多 profile/persona 隔离与桌面端；Zeroclaw 是 Rust 技术栈、强调安全执行链与 SOP 治理；CoPaw 基于 AgentScope 框架做企业级 Provider 抽象；LobsterAI/IronClaw 分别绑定网易有道/NEAR 的产品化与评测基建。
- **共性短板**：消息可靠性（exactly-once 语义）在所有全功能项目中均未解决，OpenClaw 的 #69208 伞形 Issue 挂起 4+ 月是典型代表。

**隐忧**：P0 #91931（数据丢失）、#48920（文档脱节）长期无修复；2026.5–2026.7 升级路径回归面较大；部分项目（LobsterAI）甚至需专门处理“OpenClaw 旧构建残留”迁移，说明其升级体验债已外溢到下游生态。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **消息投递可靠性** | OpenClaw、Zeroclaw、NanoClaw、CoPaw | 重复投递/静默丢失（OpenClaw #111897、Zeroclaw #10408/#10929 送达回执 RFC、CoPaw #7559 期望排队而非 409、NanoClaw Signal DM 静默丢弃） |
| **上下文管理与 Token 成本** | OpenClaw、NanoBot、CoPaw、Zeroclaw | 自动压缩死锁（NanoBot #5849）、compaction 超预算（CoPaw #7628）、bootstrap 重复注入浪费 20-30% 上下文（OpenClaw #67419）、前缀缓存击穿（OpenClaw #95610/#84110）、bootstrap 静默截断（Zeroclaw #10523） |
| **长会话/长回合可用性** | OpenClaw、NanoBot、Hermes、CoPaw | BUILD 阶段延迟（NanoBot #5843）、长回合整段回复丢失（OpenClaw #144809）、cron 卡死阻塞重启（Hermes #93711、Zeroclaw #9191） |
| **多 Agent 编排与资源治理** | OpenClaw、Zeroclaw、NanoBot | 编排不稳定（OpenClaw #43367）、主机级准入/资源上限 RFC（Zeroclaw #10970）、子任务面板（NanoBot #5855） |
| **配置静默失败 & fail-loud** | Hermes、Zeroclaw、Moltis、PicoClaw | allowlist 静默全拒（Hermes #102329）、“配置如其所写地生效”（Zeroclaw #10068/#10523）、空 active_tools 语义歧义（Moltis #1277） |
| **安全与权限边界** | Zeroclaw、CoPaw、Hermes、OpenClaw | 沙箱/Git 审批绕过（Zeroclaw #10966）、工具批处理绕过治理（CoPaw #7926）、持久化提示注入（CoPaw #7859）、profile 凭证静默继承（Hermes #111724）、Telegram file:// 泄漏（OpenClaw #137705） |
| **本地化/自托管 Provider** | Moltis、PicoClaw、NanoBot | VoxCPM 本地 TTS（Moltis #1283）、OpenAI 兼容自托管路由（PicoClaw #3366）、去中心化 MCP（NanoBot #5858） |
| **多模态（图片/语音）渠道损坏** | OpenClaw、Zeroclaw | WhatsApp 图片卡 lane（OpenClaw #96834）、vision 不可用（Zeroclaw #10975）、Matrix 语音（Zeroclaw #10925） |

---

## 5. 差异化定位分析

| 维度 | 全功能个人助理 | 安全/治理优先 | 框架化/企业集成 | 轻量/垂直 |
|---|---|---|---|---|
| **项目** | OpenClaw、Hermes | Zeroclaw | CoPaw（AgentScope）、LobsterAI（有道） | NanoBot、NanoClaw、PicoClaw、Moltis |
| **功能侧重** | 渠道广度、记忆、persona、多 Agent | 沙箱、SOP 审批、送达回执、资源上限 | Provider 抽象、Console/管理面、升级迁移 | WebUI 可视化、单渠道精修、本地 TTS |
| **目标用户** | 生产部署的重度个人用户 | 自托管、安全审计敏感用户 | 企业/团队选型者、框架开发者 | 个人开发者、隐私敏感用户、国产硬件用户 |
| **技术架构** | TS/SQLite 网关 + 插件渠道 | Rust + Tokio + SOP gate（含 macOS Rust sidecar 信号，OpenClaw #149725 值得对照） | Python/AgentScope、Electron 桌面 | Python/轻运行时、aarch64 兼容 |

值得注意的架构信号：OpenClaw 探索 macOS Rust 运行时 sidecar，与 Zeroclaw 的 Rust 路线形成呼应，暗示“核心运行时 Rust 化”可能是生态级趋势。

---

## 6. 社区热度与成熟度分层

- **快速扩张期**：OpenClaw、Hermes、Zeroclaw —— 高吞吐开发 + 新模型/新渠道持续接入，但三者均表现出“开发速度 > review/合并速度”的失衡（Hermes 48 待合/2 合，Zeroclaw 49 待合/1 合）。
- **质量巩固期**：CoPaw、LobsterAI —— 发版前密集修 Bug、合并闭环快（CoPaw 19 合/日、LobsterAI 多数 PR 当日关闭），进入 2.x 稳定化阶段。
- **功能扩张期**：NanoBot、NanoClaw、PicoClaw —— 贡献集中在少数大方向（WebUI 矩阵、Signal 稳定性、Provider 扩展），合并节奏受维护者带宽制约。
- **维持/孵化期**：Moltis、IronClaw 及四个零活动项目 —— IronClaw 的“自动化报告淹没真人反馈”风险值得同类项目引以为鉴。

---

## 7. 值得关注的趋势信号

1. **可靠性成为下一竞争壁垒**：四个以上项目同时暴露 exactly-once 语义缺失；Zeroclaw 的送达回执 RFC（#10929）与持久提问原语（#10930）是最完整的架构级答案，其 SOP gate 设计被社区评为“codebase 中最正确的实现”——对开发者的启示：**投递可确认性应作为一等公民设计，而非事后补丁**。
2. **静默失败是共性体验杀手**：Hermes（allowlist 全拒）、Zeroclaw（上下文硬限）、Moltis（空数组语义）、OpenClaw（doctor 误发 issue 草稿）——fail-loud + doctor/诊断覆盖已成为用户明确诉求，是低成本高回报的差异化方向。
3. **Token 成本工程化**：前缀缓存命中率衰减（93%→47%）、bootstrap 重复注入、compaction 预算失控等反馈表明，**上下文注入策略 = 成本**，缓存友好的静态前缀设计将成标配。
4. **安全威胁面从概念转向实证**：提示注入（CoPaw #7859，跨 20+ 轮持久化）、审批绕过（Zeroclaw #10966、CoPaw #7926）、供应链（Zeroclaw RUSTSEC CI 长红）——智能体安全审计工具链存在明显空白与机会。
5. **本地化/隐私优先需求升温**：本地 TTS（Moltis）、自托管 LLM 路由（PicoClaw）、去中心化 MCP（NanoBot）+ PicoClaw 用户在国产 aarch64 硬件部署的画像，指向**离线可用的个人智能体**是真实且未被头部项目充分覆盖的细分市场。
6. **AI 辅助贡献的治理问题浮现**：PicoClaw 出现 AI Agent 误提交 PR（#3384），CoPaw 出现来源不明的持久化注入——随着 agent-as-contributor 增多，贡献溯源与审查流程需要新规范。
7. **运维成熟度差距是选型关键**：OpenClaw 的 LTS 通道与 doctor 工具链、CoPaw/LobsterAI 的快闭环，与 Zeroclaw 的 review 瓶颈、Hermes 的 Desktop 回归形成对比——对技术决策者而言，**合并吞吐与 P1 存量消化率**比单日活跃度更能预测项目的生产可用性。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-22

## 1. 今日速览

- 今日项目整体保持高活跃度：过去 24 小时 PR 更新达 **31 条**（待合并 27，合并/关闭 4），Issues 更新 3 条，无新版本发布。
- 贡献主力集中在 WebUI 功能矩阵扩展，@Re-bin 一人提交了 **7 个 WebUI 功能 PR**（#5847–#5853、#5856），覆盖文件预览、Mermaid 渲染、用量统计等。
- 两条新开的 Bug 报告（#5849 自动压缩死锁、#5843 BUILD 阶段延迟）**均已有对应修复/诊断 PR**（#5857、#5846），社区响应链路健康。
- 待合并 PR 积压达 27 条，存在 7 月遗留 PR（#4819、#4820）与冲突标记 PR（#5412），合并吞吐速度值得关注。

## 2. 版本发布

今日无新版本发布，省略。

## 3. 项目进展

今日有 4 条 PR 被合并/关闭（数据中未列出具体编号），待合并侧进展明显：

- **上下文压缩健壮性**：[#5857](https://github.com/HKUDS/nanobot/pull/5857) `fix(memory): bound automatic transcript summarization`，为自动压缩路径加入 token 预算控制，直接修复 #5849 的死锁问题。
- **WebUI 大版本级增强**（均由 @Re-bin 提交，部分存在堆叠依赖）：
  - [#5847](https://github.com/HKUDS/nanobot/pull/5847) 恢复会话级文件预览
  - [#5848](https://github.com/HKUDS/nanobot/pull/5848) 回复中安全渲染 Mermaid 图表
  - [#5851](https://github.com/HKUDS/nanobot/pull/5851) 用量区间、活跃日历与模型维度统计
  - [#5854](https://github.com/HKUDS/nanobot/pull/5854) 作用域化 Prompt 命令及管理 UI
  - [#5855](https://github.com/HKUDS/nanobot/pull/5855) / [#5856](https://github.com/HKUDS/nanobot/pull/5856) 子任务面板与命令执行面板
- **生态扩展**：[#5858](https://github.com/HKUDS/nanobot/pull/5858) 新增 Adam Network MCP 集成示例；[#5825](https://github.com/HKUDS/nanobot/pull/5825) 可复用 OpenRouter JEV 客户端；[#5803](https://github.com/HKUDS/nanobot/pull/5803) Telegram 渠道三项修复改进。

整体看，项目在 WebUI 体验、内存管理、可观测性（#5846 BUILD 延迟追踪）三条线上同步推进，功能面在快速扩张。

## 4. 社区热点

- **[#5849 自动压缩死锁](https://github.com/HKUDS/nanobot/issues/5849)**：`summarize_transcript` 将全部历史 + 系统提示发送给摘要模型，无 token 预算保护，历史超限后压缩永远无法恢复——这是影响长会话可用性的核心缺陷。手动路径 `archive_session` 有正确的分块逻辑，说明是自动路径实现遗漏。
- **[#5843 BUILD 阶段延迟](https://github.com/HKUDS/nanobot/issues/5843)**：长会话每轮在 BUILD 阶段等待 10 秒至数十秒才发起 LLM 调用，延迟完全产生于 nanobot 内部，用户困惑是否为预期行为。#5846 已提交追踪诊断 PR。
- **[#5858 Adam Network MCP 集成](https://github.com/HKUDS/nanobot/pull/5858)**：反映社区希望将 NanoBot 接入去中心化消息流、让 Agent 自主发布内容的需求。

## 5. Bug 与稳定性（按严重程度）

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | [#5849](https://github.com/HKUDS/nanobot/issues/5849) 自动压缩无 token 预算，长会话死锁无法恢复 | ✅ 已有 fix PR [#5857](https://github.com/HKUDS/nanobot/pull/5857) |
| 中 | [#5843](https://github.com/HKUDS/nanobot/issues/5843) BUILD 阶段 10s+ 延迟，疑似性能问题 | 🔄 诊断 PR [#5846](https://github.com/HKUDS/nanobot/pull/5846) 待合并 |
| 中 | [#5795](https://github.com/HKUDS/nanobot/pull/5795) / [#5796](https://github.com/HKUDS/nanobot/pull/5796) `edit_file` 丢失缩进、吞掉分隔空白，可能改变代码语义 | 🔄 fix PR 待合并 |
| 低 | [#5770](https://github.com/HKUDS/nanobot/issues/5770) 移动端侧边栏误显 "Search ⌘K" 悬浮提示 | ✅ 已关闭 |
| 低 | [#4820](https://github.com/HKUDS/nanobot/pull/4820) 非字符串 URL 被强转进缓存签名 | 🔄 fix PR 待合并（7 月提交） |

## 6. 功能请求与路线图信号

- **WebUI 成套功能集中落地**（#5847–#5856）：文件/链接预览、Mermaid 渲染、用量日历、子任务与命令面板、类型化图片产物——这些高完成度 PR 表明 WebUI 可视化与可观测性是当前主线，很可能整体进入下一版本。
- **MCP 生态扩展**（#5858）： decentralized agent 网络接入示例，配合现有 MCP 架构，判断为低成本高展示度的集成方向。
- **可观测性**（#5846）：结构化延迟追踪若合并，将为后续性能优化（含 #5843）提供数据基础。
- **JEV 客户端**（#5825）：为心跳逻辑、shell 策略、provider 选择预留基础设施，是重要的架构铺垫 PR。

## 7. 用户反馈摘要

- **长会话体验是主要痛点**：#5849 与 #5843 均来自长会话场景，分别指向上下文管理健壮性与请求前延迟，说明重度用户（gateway 模式、verbose 调试）正在把 NanoBot 推向长时间运行的生产使用。
- **移动端体验瑕疵**：#5770 反映触屏设备上 hover 语义组件（⌘K 提示）适配不足。
- **工具可靠性细节敏感**：edit_file 的缩进/空白问题（#5795/#5796）表明开发者用户对代码修改工具的精确性要求极高。
- **渠道细节反馈**（#5803 Telegram）：真实用户在 topics、typing 状态等细粒度场景中使用，社区反馈贴近实际运营需求。

## 8. 待处理积压

- **[#4819](https://github.com/HKUDS/nanobot/pull/4819)**（7 月 6 日提交）：WeakValueDictionary 导致合并锁被 GC 回收的修复，搁置近 3 个月，今日有更新但未合并——建议维护者优先处理，涉及内存一致性。
- **[#4820](https://github.com/HKUDS/nanobot/pull/4820)**（7 月 6 日提交）：同批提交，同样长期未合并。
- **[#5412](https://github.com/HKUDS/nanobot/pull/5412)**（8 月 17 日）：已标记 `[conflict]` 冲突，后台进程日志刷新修复需 rebase。
- 27 条待合并 PR 中 WebUI 系列（#5847–#5856）存在堆叠依赖关系，建议按依赖顺序集中评审，避免长期积压造成重复 rebase 成本。

---
*数据来源：GitHub API 快照（过去 24 小时）。整体健康度评估：贡献活跃、Bug 响应及时，主要风险在 PR 合并吞吐与长期积压。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 — 2026-09-22

## 1. 今日速览

过去 24 小时 Zeroclaw 保持高度活跃：Issues 更新 50 条（新开/活跃 46、关闭 4），PR 更新 50 条（待合并 49、合并/关闭 1），无新版本发布。项目当前处于“高吞吐开发、低合并吞吐”阶段——大量 P1/P2 级修复与 RFC 堆积在 review 队列中，仅 1 条 PR 被关闭。安全类议题（sandbox 逃逸、SSRF、供应链 advisory）与运行时稳定性（daemon 崩溃、并发 run、上下文限制）是今日两条最突出的主线。社区参与度健康，贡献者覆盖面广（Audacity88、JordanTheJet、NiuBlibing、jstar0 等），但 maintainer review 能力明显是当前瓶颈。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 项目进展

今日仅 1 条 PR 完成合并/关闭流转，整体合入进展有限，但活跃开发线密集：

- **#10214 [CLOSED] feat(log): 日志条目数轮转与多段日志查询**（@NiuBlibing）— 引入 `log_persistence_max_entries_per_segment` 配置，支持按行数触发轮转并跨段查询。这是今日唯一关闭的大型功能 PR，改善了长时运行的可观测性。
- **#11006 [CLOSED] Task: 将 #10259（RPC inbound enforcement 第 3 阶段）rebase 到 master** — 冲突处理任务完成，为 #8289 安全执行链落地扫清障碍。
- **#9812 [CLOSED] Provider fallback 携带主 model id 导致永不触发的 Bug** — 修复关闭，fallback 冷却毒化问题解决。
- **#9727 [CLOSED] Epic: ZeroCode 侧边栏多 Agent 运行与监控** — 多 Agent 并行管理 Epic 关闭。
- **#10925 [CLOSED] Matrix 输入驱动 mirror 语音回复** — 已接受并关闭，Matrix 渠道语音能力补齐。

结论：今日“关闭”动作多为 issue 层面收敛与个别 PR 收尾，49 条 PR 仍在 review 队列，合并债务在累积。

## 4. 社区热点

**最活跃讨论：**

- **[#8692 RFC/设计决策队列 Tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)**（15 评论）— 维护者决策队列，反映 RFC 治理流程本身的运转负荷，大量设计议题等待 maintainer 裁决。
- **[#9899 RUSTSEC advisory waiver 移除 Tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/9899)**（6 评论）— `cargo deny check` 因 matrix-sdk → imbl → bitmaps 3.2.1 (RUSTSEC-2026-0247/0292) 持续失败，CI 安全门被卡，供应链依赖升级诉求迫切。
- **[#10230 ZeroCode Quickstart 导致 Tokio worker 栈溢出](https://github.com/zeroclaw-labs/zeroclaw/issues/10230)**（6 评论，S1）— daemon 热重载路径的崩溃问题，仍处 needs-repro。
- **RFC 三连**：[#10970 主机级准入控制与 per-agent 资源上限](https://github.com/zeroclaw-labs/zeroclaw/issues/10970)、[#10930 Agent 向人类提问的统一持久原语](https://github.com/zeroclaw-labs/zeroclaw/issues/10930)、[#10929 出站消息送达回执](https://github.com/zeroclaw-labs/zeroclaw/issues/10929)（各 4 评论）— JordanTheJet 密集提出架构级 RFC，核心诉求是**多 Agent 主机上的资源退化可控性**与**消息投递的可确认性**。

## 5. Bug 与稳定性（按严重度排列）

| 严重度 | Issue | 状态 | Fix PR |
|---|---|---|---|
| **S0 安全** | [#10966 Git `--attr-source` 可绕过 mutating 命令审批分类](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) | accepted/follow-up | 暂无直接 PR |
| **S1 崩溃** | [#10230 daemon 启动/reload agent 初始化栈溢出](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | needs-repro | 暂无 |
| **S1 阻塞** | [#9191 cron agent job 无 wall-clock 超时，锁仅在进程启动时清理](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) | accepted/no-stale | 暂无 |
| **S1 阻塞** | [#9390 emergency stop 是 CLI-only 状态文件，runtime 不读取](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) | open/help-wanted | 暂无 |
| **S1 阻塞** | [#10536 macOS Seatbelt 忽略 allowed_roots](https://github.com/zeroclaw-labs/zeroclaw/issues/10536) | open | 暂无 |
| **S1 阻塞** | [#10231 channels supervisor 重试过期配置](https://github.com/zeroclaw-labs/zeroclaw/issues/10231) | stale/needs-repro | 暂无 |
| **S2 降级** | [#10523 bootstrap 文件 6000 字符静默截断](https://github.com/zeroclaw-labs/zeroclaw/issues/10523) | in-progress | **有：#11033** |
| **S2 降级** | [#10068 交互会话上下文被硬限 32k，忽略 131072 配置](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | parking-lot | 暂无 |
| **S2 重复回复** | [#10408 活跃 turn 中第二条消息触发并行 run](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) | open/P1 | 暂无 |
| **S2 功能损坏** | [#10975 WhatsApp 入站图片不下载，vision 不可用](https://github.com/zeroclaw-labs/zeroclaw/issues/10975) | open | 暂无 |
| S3 | [#10918 HTTP 空尾 chunk 误标截断](https://github.com/zeroclaw-labs/zeroclaw/issues/10918)、[#10921 Qdrant 时间过滤召回漏结果](https://github.com/zeroclaw-labs/zeroclaw/issues/10921) | open | 暂无 |

值得注意：多个 S1 安全/稳定性 Bug（#9390、#9191）已开放近两个月无 fix PR，是稳定性风险最大的积压项。

## 6. 功能请求与路线图信号

- **多 Agent 主机治理**：#10970 RFC（并发 turn/工具执行/内存上限）与 #11027 RFC（Agent 间会话消息 + 接收方裁量）同属“多 Agent 规模化”主题，配套 PR #10804（委托子循环成本追踪）已在途，方向上高度可能被采纳。
- **消息可靠性**：#10929（送达回执）+ #10930（持久提问原语，复用 SOP gate 的 SQLite 持久化）是明确的架构演进信号。
- **ZeroCode 体验**：#9727 Epic（多 Agent 侧边栏）已关闭、#10826（会话根目录显式选择）accepted、#9363（本地化配置元数据）accepted——TUI 侧国际化与多 Agent 管理是下一版本候选。
- **Provider 能力**：#9809（单 profile 多模型）+ #10450（webhook SSE 流式）+ #10803/#10895/#10903（Anthropic 流恢复/缓存/多模态修复）构成 provider-transport 主线，大概率进下一版本。
- **治理流程**：#11017 RFC（保留适用 review、简化加急合并）与 PR #10855（FND-003 Rev.19）直接指向缓解当前 review 瓶颈。

## 7. 用户反馈摘要

- **WhatsApp 渠道用户**（#10975/#10976）：图片与 @mention 双向损坏，vision 模型用户实际不可用——“agent 收到的是字面 `[Image]` 文本”，渠道质量是真实痛点。
- **Desktop 用户**（#10379）：处理中取消按钮不可点、消息无法排队，S0 级体验挫败，且该 issue 已 stale，用户失望情绪可见。
- **运维/多 Agent 用户**（#10970、#10068、#10523）：上下文限制被静默覆盖、bootstrap 静默截断、资源无界——一致诉求是“**配置如其所写地生效**”和“**静默降级要可见**”。
- **安全审计者**（#9390 作者）：给出逐行核对的详尽审计，emergencystop 文档承诺与实现不符，对项目“文档可信度”提出严肃质疑。
- **满意面**：贡献者对 SOP gate 的持久化设计（#10930）评价为“codebase 中最正确的实现”，社区对核心架构质量有认可。

## 8. 待处理积压（提醒维护者）

- **#9390**（P1/安全，7-26 起，help-wanted）— emergency stop 无 runtime 生效路径，需指派。
- **#9191**（P1，accepted 但无 PR）— cron 无超时可致永久锁。
- **#10068**（P2，parking-lot）— 32k 上下文硬限，影响重度用户。
- **#9899**（P1/CI 阻塞）— RUSTSEC waiver 移除，安全 CI 长期红。
- **已 stale 的 P1**：#9784（SOP 无审计事件标 failed）、#10231、#10379 — 建议 stale bot 之外人工复核，避免真实用户问题被机器人关闭。
- **PR 队列**：49 条待合并，其中 XL 级 8+ 条（#9809、#10391、#9986、#10803、#10804、#10860、#9368 等）长期 in review，配合 #11017/#10855 治理简化是解决合并吞吐的关键。

---
*数据来源：GitHub API（Issues/PR/Releases），统计窗口 2026-09-21 至 2026-09-22。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-09-22

## 1. 今日速览

Hermes Agent 今日保持高度活跃：过去 24 小时共 50 条 Issue 更新（40 新开/活跃、10 关闭）、50 条 PR 更新（48 待合并、2 已合并/关闭），并于昨日发布 **v0.21.4 (v2026.9.21) 补丁版本**。社区热度集中在 Desktop 端会话/转录渲染回归、profile 隔离与认证边界问题，以及 gateway 消息投递可靠性。整体节奏呈现“大量 PR 待审 + 快速修 Bug”的健康状态，但合并吞吐速度（仅 2 条）显示维护者带宽可能偏紧。

---

## 2. 版本发布

### v2026.9.21 — Hermes Agent v0.21.4
- **性质**：Patch 补丁版本，将 v0.21.3 以来约 **~1,800 个已合并 PR** 打包为稳定 tag，供下游消费者使用（Docker 镜像、Hermes Cloud、托管部署）。
- **注意**：完整策划版 release notes 被截断/延迟发布，建议下游用户关注官方 changelog 更新。
- **迁移提示**：无明确破坏性变更声明，但从 Issue 趋势看，v0.21.3 引入的 "host-backend collapse" 变更引发了一系列 Desktop profile 配置写入问题（见第 5 节），升级用户需注意 Settings → Models 的 profile 作用域行为。

---

## 3. 项目进展

今日已合并/关闭的关键 PR：

- **[#117700](https://github.com/NousResearch/hermes-agent/pull/117700) fix(contracts): declare profile rename history in roster results** — 修复 `profiles.list` 的 wire contract 违规（`ProfileRow` 缺少 `previous_names` 字段），关联 Issue [#117696](https://github.com/NousResearch/hermes-agent/issues/117696)（已关闭）。这是今日最实质的合并，解决了每次网关启动都产生 contract warning 的生产问题。
- **[#104825](https://github.com/NousResearch/hermes-agent/pull/104825) feat(whatsapp): Allow whatsapp to share context**（已关闭）— 为 WhatsApp 平台增加 opt-in 的群聊上下文共享能力，是消息平台能力的重要扩展。

整体而言，今日主线进展为**契约一致性与 WhatsApp 上下文共享**；v0.21.4 的发布将此前 1,800 PR 的工作固化，项目功能覆盖面（多平台、多 profile、插件生态）持续扩张。

---

## 4. 社区热点

评论最多（各 4 条）的 Issues：

| Issue | 主题 | 热度分析 |
|---|---|---|
| [#102329](https://github.com/NousResearch/hermes-agent/issues/102329) | WhatsApp `allow_from` JSON 字符串形态静默拒绝所有发送者 | P2 消息投递风险，涉及旧版 `hermes config set` 产出的兼容性，用户强烈要求 doctor 检测与告警 |
| [#113673](https://github.com/NousResearch/hermes-agent/issues/113673) | disk-cleanup 空目录清扫删除 PostgreSQL 维护目录，破坏 Hindsight 检查点与 pg0 启动 | 数据破坏类 Bug，已有对应 fix PR [#113675](https://github.com/NousResearch/hermes-agent/pull/113675) 待合并 |
| [#111724](https://github.com/NousResearch/hermes-agent/issues/111724)（已关闭） | 无凭证的命名 profile 静默继承 root 的密钥与 OAuth token | 安全边界问题：用户诉求是让 profile 能“fail closed" |
| [#118487](https://github.com/NousResearch/hermes-agent/issues/118487) | Discord liveness watchdog 首次 strike 后死亡，适配器成僵尸无重连 | **P1**，直接影响 Discord 用户可用性 |
| [#118067](https://github.com/NousResearch/hermes-agent/issues/118067)（已关闭，dup） | `profiles.list` wire contract 违规 | 对应今日已合并的 #117700 |

**诉求共性**：消息平台可靠性（WhatsApp/Discord）、配置静默失败无告警、profile 隔离语义是社区最关注的三大主题。

---

## 5. Bug 与稳定性（按严重程度）

**P0/P1**
- 🔴 **P0** [#118026](https://github.com/NousResearch/hermes-agent/issues/118026)（已关闭）— Windows 11 桌面版因 `fcntl.F_RDLCK` 缺失导致后端启动即崩溃。已关闭（推测已有修复进入 v0.21.4）。
- 🔴 **P1** [#118487](https://github.com/NousResearch/hermes-agent/issues/118487) — Discord 适配器 watchdog 失效，僵尸状态无恢复。⚠️ 暂无 fix PR。

**P2**
- [#118002](https://github.com/NousResearch/hermes-agent/issues/118002) — Desktop 长会话虚拟化时间线排序回归，旧消息跳到最新位置。相关 PR [#118610](https://github.com/NousResearch/hermes-agent/pull/118610)、[#118749](https://github.com/NousResearch/hermes-agent/pull/118749) 进行中。
- [#118670](https://github.com/NousResearch/hermes-agent/issues/118670) — 长流式 turn 实时渲染重复两次（DB 仅一份），疑似前端问题。相关 PR [#118758](https://github.com/NousResearch/hermes-agent/pull/118758)。
- [#118693](https://github.com/NousResearch/hermes-agent/issues/118693) — 后台 review 运行时 transcript 不渲染已完成 turn。⚠️ 无 fix PR。
- [#93711](https://github.com/NousResearch/hermes-agent/issues/93711) — 卡死的 cron turn 阻塞优雅重启（drain 永不完成），长期未决。
- [#118431](https://github.com/NousResearch/hermes-agent/issues/118431)（已关闭）/ [#118432](https://github.com/NousResearch/hermes-agent/issues/118432) — v0.21.3 host-backend collapse 后模型设置写入影响所有 profile。
- [#102329](https://github.com/NousResearch/hermes-agent/issues/102329) — WhatsApp allowlist 静默全拒。
- [#118753](https://github.com/NousResearch/hermes-agent/issues/118753) — Curator 自动归档破坏 kanban swarm 技能，**已有 fix PR** [#118756](https://github.com/NousResearch/hermes-agent/pull/118756)（响应极快）。

**P3**
- [#118684](https://github.com/NousResearch/hermes-agent/issues/118684) — ntfy 适配器无法从 config.yaml 注册，仅读环境变量。
- [#118672](https://github.com/NousResearch/hermes-agent/issues/118672) / [#118673](https://github.com/NousResearch/hermes-agent/issues/118673) — mnemosyne 记忆系统：跨会话 invalidate 静默无效、`<think>` 泄漏入记忆内容。
- [#87069](https://github.com/NousResearch/hermes-agent/issues/87069) / [#99277](https://github.com/NousResearch/hermes-agent/issues/99277) — Dashboard composer 杂散 "l" 字符，长期存在（8 月起）。

---

## 6. 功能请求与路线图信号

- **[#95916](https://github.com/NousResearch/hermes-agent/issues/95916) RFC：跨 profile 可复用能力分配**（needs-decision）— 避免在 skills/MCP/工具间复制配置。与 PR [#110527](https://github.com/NousResearch/hermes-agent/pull/110527)（session-owned toolsets）、[#103965](https://github.com/NousResearch/hermes-agent/pull/103965)（delegate 按 profile 路由）方向一致，**profile 组合能力是明确的演进主线**，很可能纳入后续版本。
- **[#118734](https://github.com/NousResearch/hermes-agent/issues/118734)** — 请求 iron-proxy 从 0.39.0 升至 0.50.0 或允许版本覆盖（安全相关，建议优先）。
- **[#118388](https://github.com/NousResearch/hermes-agent/issues/118388)**（已关闭）— doctor 检测跨 profile 的平台 token 冲突，与 profile 隔离主题呼应。
- PR 侧功能储备丰富：Home Assistant session 集成投递（[#112136](https://github.com/NousResearch/hermes-agent/pull/112136)）、gateway 元数据预热（[#105999](https://github.com/NousResearch/hermes-agent/pull/105999)）、Bahasa Indonesia 文档国际化（[#92192](https://github.com/NousResearch/hermes-agent/pull/92192)、[#93632](https://github.com/NousResearch/hermes-agent/pull/93632)）。

---

## 7. 用户反馈摘要

- **痛点集中在静默失败**：多个高热 Issue（WhatsApp allowlist、ntfy 注册、profile 凭证继承）共同指向“配置错误无告警、doctor 检测不到”的体验问题，用户反复要求 fail-loud 与诊断覆盖。
- **Desktop 端是回归重灾区**：v0.21.3 的 host-backend collapse 与虚拟化时间线改动引发一批转录渲染/排序/重复问题，多任务流式场景（长 turn + 多工具调用）用户受影响明显。
- **多 profile 用户群体活跃**：命名 profile 之间的隔离、凭证、配置写入作用域是高频使用场景，也是最多不满来源——说明 Hermes 的多 persona 使用模式已成主流。
- **积极响应值得肯定**：#118753 报告当天即有对应 fix PR #118756；#117696 从报告到 PR 合并仅 2 天，社区与维护者闭环效率高。

---

## 8. 待处理积压

建议维护者优先关注：

1. **[#93711](https://github.com/NousResearch/hermes-agent/issues/93711)**（8/24 起，P2）— cron 卡死阻塞 gateway 重启，长期无 fix，影响运维可靠性。
2. **[#87069](https://github.com/NousResearch/hermes-agent/issues/87069)**（8/15 起）+ [#99277](https://github.com/NousResearch/hermes-agent/issues/99277) — Dashboard 杂散 "l" 输入，两月未修，虽有 👍 反应。
3. **[#75761](https://github.com/NousResearch/hermes-agent/issues/75761)（8/1 起）— 同 profile 会话并发图片上传覆盖**，长期未响应。
4. **[#98801](https://github.com/NousResearch/hermes-agent/issues/98801)（8/30）— lifecycle_guard 递归内容检查阻塞读取自身文档**，可用性受限。
5. **[#118487](https://github.com/NousResearch/hermes-agent/issues/118487)（P1）— Discord watchdog 僵尸**，今日新报，建议在下一个 patch 前处理。
6. **PR 积压**：48 条待合并 PR 中 [#105549](https://github.com/NousResearch/hermes-agent/pull/105549)（gateway 取消修复，8/8 起）、[#86233](https://github.com/NousResearch/hermes-agent/pull/86233)（插件 toolset 校验，8/14 起）等待时间已超过一个月，评审带宽需关注。

---

**健康度小结**：项目处于高活跃、快速迭代期（单日 40 条新活跃 Issue + 48 条开放 PR），社区参与度高、Bug 响应闭环快；主要风险在于 PR 评审积压、Desktop 回归问题密度，以及多处“静默失败”类配置体验缺陷。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-09-22

## 1. 今日速览

PicoClaw 过去 24 小时保持中等活跃度：Issues 更新 3 条（新开/活跃 2，关闭 1），PR 更新 3 条（待合并 2，关闭 1），无新版本发布。社区关注点集中在 Web UI 性能问题、OpenAI 兼容 Provider 需求以及 OAuth token 刷新修复。值得注意的是出现了 AI Agent 误提交 PR 的案例（#3384），已由提交者自行关闭，反映 AI 辅助贡献的规范问题开始浮现。整体项目处于稳定维护 + 功能演进的良性状态。

## 2. 版本发布

今日无新版本发布。当前最新版本仍为 v0.3.1 / nightly 构建。

## 3. 项目进展

- **PR #3384 已关闭**（[链接](https://github.com/sipeed/picoclaw/pull/3384)）：误投 PR，无实质代码贡献，社区自我纠错机制运转正常。
- **待合并 PR 持续推进中**：
  - [PR #3378](https://github.com/sipeed/picoclaw/pull/3378)：修复 OAuth `RefreshAccessToken` 中 scope 硬编码问题，改为传递 `OAuthProviderConfig.Scopes` 配置值，对自定义 OAuth Provider 场景是关键修复。
  - [PR #3354](https://github.com/sipeed/picoclaw/pull/3354)：新增 IRCv3 `draft/multiline` 接收支持，长消息/多行消息可作为一个完整入站消息处理，提升 IRC 渠道体验。

今日无代码合并，功能净推进有限，但两个待合并 PR 均有更新活跃迹象。

## 4. 社区热点

- **[Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)** — Web UI 聊天输入框在历史记录较长时严重卡顿（13 条评论，👍 2，7 月开至今仍活跃）。这是当前讨论最热烈的 Issue，反映 Web UI 前端渲染性能是长期痛点，且自 0.3.1 版本即存在、尚未修复。
- **[Issue #3366](https://github.com/sipeed/picoclaw/issues/3366)** — 请求支持 OpenAI 兼容 Provider（自托管路由如 9Router），4 条评论，诉求明确：用户希望接入私有化/自定义 LLM 网关，提升部署灵活性。

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | Fix PR |
|---|---|---|---|
| 中（影响所有 Web UI 用户） | [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI 输入卡顿 | OPEN，长期未解 | 暂无明确 fix PR |
| 中（QQ 渠道不可用） | [#3365](https://github.com/sipeed/picoclaw/issues/3365) QQ 渠道 401 "Authorization参数格式错误"，根因在 botgo v0.2.1 + resty ≥ v2.17 依赖冲突 | CLOSED（stale） | 建议维护者确认是否已真正解决，或上游依赖修复 |
| 中（OAuth 认证） | PR [#3378](https://github.com/sipeed/picoclaw/pull/3378) scope 硬编码 | 待合并 | 即为修复 |

今日无新增崩溃/回归报告。

## 6. 功能请求与路线图信号

- **OpenAI 兼容 Provider**（[#3366](https://github.com/sipeed/picoclaw/issues/3366)）：实现成本较低（可基于现有 OpenAI Provider 改造），且与项目多渠道架构契合，有较大可能在下一版本纳入。
- **IRCv3 multiline**（[PR #3354](https://github.com/sipeed/picoclaw/pull/3354)）：代码已就绪，合并后即可进入下一版本，信号较强。
- **信号综合**：社区对「渠道/Provider 可扩展性」需求集中，建议维护者将自定义 Provider 作为下一版本主题之一。

## 7. 用户反馈摘要

- **痛点**：Web UI 在长会话下输入卡顿（#3281）被多名用户复现，是最直接的体验短板；QQ 渠道在国产硬件（Orange Pi 3B / RK3566）+ nightly 构建下认证失败，影响国内用户。
- **使用场景**：用户在自托管环境（aarch64 设备）部署，通过 Web、QQ、IRC 等多渠道使用，并希望接入自托管 LLM 路由（9Router）——自托管/私有化是核心用户画像。
- **正面信号**：社区贡献活跃，有外部开发者主动提交 OAuth 修复和 IRCv3 支持，Issue 报告质量高（含环境、复现步骤、根因分析）。

## 8. 待处理积压

- **[Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)**：7 月开立至今近两个月、13 条评论、2 个 👍，无关联 fix PR，建议维护者优先排期或给出 workaround。
- **[Issue #3365](https://github.com/sipeed/picoclaw/issues/3365)**：因 stale 被关闭但根因指向上游依赖（botgo/resty），建议确认状态并跟踪上游修复，避免问题反复。
- **[PR #3378](https://github.com/sipeed/picoclaw/pull/3378)、[PR #3354](https://github.com/sipeed/picoclaw/pull/3354)**：均已提交 1-3 周，建议及时 Review 合并，避免贡献者流失。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-09-22

## 1. 今日速览

过去 24 小时 NanoClaw 仓库共更新 **1 条 Issue 与 8 条 PR**，无新版本发布。活动以社区贡献者的 PR 持续推进和 bug 修复为主，PR 待合并数量达 7 条，显示 review 队列有一定压力。整体活跃度中等，项目处于稳定迭代阶段，Signal 渠道适配器与安装脚本的修复是近期主线。

## 2. 版本发布

今日无新版本发布，可省略。

## 3. 项目进展

今日有 **1 条 PR 关闭**：

- [#2689](https://github.com/nanocoai/nanoclaw/pull/2689) fix(signal): DM platform ID consistency, isMention, and ask_question/approval delivery（@klingel，CLOSED）— 修复 Signal DM 消息因未设置 `isMention` 而被静默丢弃的问题，统一 DM platform ID 加 `signal:` 前缀。注意该 PR 状态为 CLOSED 而非 MERGED，其修复内容已由 #3837 整合承接，属于“合并替代”式关闭，实际修复仍在推进中。

另有多条长期 PR 今日有更新活动，包括 Cursor Agent SDK provider 双 PR（#3355/#3356）和 CLI 重构 PR（#3286），显示核心团队在并行推进多条功能线。

## 4. 社区热点

今日无高评论/高反应条目。相对活跃的有：

- [#3837](https://github.com/nanocoai/nanoclaw/pull/3837)（@seefood）— 将两条过期 Signal 修复 PR 合并为单一大补丁，覆盖附件处理、DM 路由和外发队列，是 Signal 渠道稳定性的关键候选方案。
- Cursor provider 系列（[#3355](https://github.com/nanocoai/nanoclaw/pull/3355)、[#3356](https://github.com/nanocoai/nanoclaw/pull/3356)，@zvi-fried）— 核心团队主导的新 provider 集成，覆盖 14+ 个 area 标签，影响面广，是近期最大功能增量。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | [#3860](https://github.com/nanocoai/nanoclaw/issues/3860) restart.sh 因 pnpm 注入 `FORCE_COLOR=1` 导致 Node 对数字输出加颜色码，重启时间戳无法解析（"Invalid restart time"）| 新报，**尚无 fix PR** |
| 高 | Signal DM 消息静默丢弃（isMention 缺失）| 已有承接 PR [#3837](https://github.com/nanocoai/nanoclaw/pull/3837) |
| 中 | 定时任务出错时错误消息无法投递给操作者 [#3311](https://github.com/nanocoai/nanoclaw/pull/3311) | fix PR 待合并 |
| 中 | `ncl groups restart --rebuild` 无包配置时仍强制重建镜像 [#3286](https://github.com/nanocoai/nanoclaw/pull/3286) | fix PR 待合并 |
| 中 | install-node.sh 在非 Debian Linux 上安装失败 [#3273](https://github.com/nanocoai/nanoclaw/pull/3273) | fix PR 待合并 |
| 低 | WhatsApp 未知渠道注册卡片无法显示群组名 [#3859](https://github.com/nanocoai/nanoclaw/pull/3859) | fix PR 今日新开 |

## 6. 功能请求与路线图信号

- **Cursor Agent 作为新 provider**（#3355/#3356）：核心团队标记 `core-team`，含完整 SDK payload 与安装 skill，极可能纳入下一版本，这是最明确的路线图信号。
- **多发行版 Linux 安装支持**（#3273）：覆盖 Fedora/RHEL/Arch/Alpine，拓宽部署面，具备合并价值。
- **operator 告警链路完善**（#3311）：提升生产可运维性，与 provider 扩展同属近期重点方向。

## 7. 用户反馈摘要

- **环境兼容性痛点**：#3860（pnpm 用户）和 #3273（非 Debian Linux 用户）均反映项目对多样化运行环境的假设过窄，“在我的机器上不工作”类反馈集中在 setup/restart 链路。
- **消息渠道可靠性**：Signal 用户遭遇“首条消息被静默丢弃”的严重体验问题（#2689/#3837），说明 IM 渠道集成是用户核心使用场景，也是最易出问题的环节。
- **运维体验**：用户希望错误能明确送达 operator（#3311）、注册信息更友好（#3859），反映对可观测性和易用性的持续诉求。

## 8. 待处理积压

- [#3837](https://github.com/nanocoai/nanoclaw/pull/3837)（09-16 开启）：整合性大 PR，阻塞两条已被关闭的旧 PR 的修复落地，建议优先 review。
- [#3286](https://github.com/nanocoai/nanoclaw/pull/3286)（08-17 开启，已挂一个月+）：对应 #2701，修复明确、影响小，可快速处理。
- [#3311](https://github.com/nanocoai/nanoclaw/pull/3311)、[#3273](https://github.com/nanocoai/nanoclaw/pull/3273)（8 月中旬开启）：均超过一个月未合并，建议维护者给出 review 反馈或排期。
- **新 Issue #3860** 目前 0 评论，涉及所有 pnpm 用户的重启功能失效，建议尽快确认并指派修复。

---
*数据来源：NanoClaw GitHub 仓库 2026-09-21 至 2026-09-22 活动统计。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-09-22

## 1. 今日速览

过去 24 小时 IronClaw 仓库整体处于**低强度但持续运转**状态：新增 1 条 Issue、0 条 PR 更新、无版本发布。唯一的活跃信号来自自动化质量追踪——[Issue #8106](https://github.com/nearai/ironclaw/issues/8106) 按日发布失败分类学（failure taxonomy）报告，对 officeqa 套件的 47 个未通过任务进行归因，显示问题主体为模型质量类错误（DeepSeek-V4-Flash 导航相关），而非框架本身缺陷。这种“自动化报告多、人工讨论少”的模式符合基准测试类项目的日常运维特征，项目健康度正常但缺乏社区交互。

## 2. 版本发布

过去 24 小时无新版本发布，无破坏性变更或迁移事项。

## 3. 项目进展

- 今日无 PR 合并或关闭，代码主线无变更。
- 值得关注的间接进展：[#8106](https://github.com/nearai/ironclaw/issues/8106) 的每日失败分类报告持续输出，说明 benchmarks 流水线（officeqa 套件）在稳定运行，质量监控体系正常工作。

## 4. 社区热点

- **[#8106 Daily ironclaw failure taxonomy — 2026-09-21](https://github.com/nearai/ironclaw/issues/8106)**（@pranavraja99，0 评论 / 0 👍）：今日唯一活跃 Issue，为机器人生成的每日失败分析报告。内容显示 officeqa 运行中 47 个未通过任务“绝大多数为真实模型质量错误”，指向被测模型 DeepSeek-V4-Flash 在导航类任务上的能力短板，而非 IronClaw 评测框架自身的 bug。该类报告的核心诉求是为模型改进提供可归因的数据基础。

## 5. Bug 与稳定性

今日无新报告的框架级 Bug、崩溃或回归问题。

- 唯一相关问题为 [#8106](https://github.com/nearai/ironclaw/issues/8106)，其中记录的 47 个 officeqa 失败任务经分析归类为**被测模型质量错误**，非 IronClaw 平台缺陷，无需 fix PR。

## 6. 功能请求与路线图信号

今日无新功能请求。从 #8106 可推断的隐含方向：失败分类自动化的持续产出表明团队关注**模型能力归因与评测可解释性**，后续可能在分类粒度（如按错误类型细分导航/推理/工具调用）上迭代。

## 7. 用户反馈摘要

今日无真人用户评论，无法提炼社区反馈。自动报告反映的信号：当前 officeqa 基准对 DeepSeek-V4-Flash 级别的模型区分度较高，测试用例具有实际甄别能力。

## 8. 待处理积压

今日数据中未发现长期未响应的 Issue 或 PR。建议维护者：

- 定期人工抽查 [#8106](https://github.com/nearai/ironclaw/issues/8106) 等每日 taxonomy 报告中的失败样本，确认归因准确性，避免将框架问题误判为模型问题。
- 若此类每日报告 Issue 会持续累积（编号已至 #8106），建议考虑归档或汇总机制，防止 Issue 列表被自动化报告淹没，影响真人用户反馈的可见性。

---

**健康度小结**：CI/评测流水线运转正常，无紧急缺陷，但本周期无实质代码推进，建议关注社区互动低迷的情况。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-09-22）

## 1. 今日速览

LobsterAI 今日保持较高开发活跃度：过去 24 小时内 PR 更新达 16 条（13 条已合并/关闭，3 条待合并），Issues 更新 2 条，无新版本发布。开发焦点高度集中在 **网关启动稳定性与旧版本数据迁移**——多条针对 openclaw 旧构建残留、插件 ESM 兼容、身份冲突的修复 PR 被快速合并，显示团队正在为下一次发版进行密集的稳定性收尾。社区侧则出现关于工作区切换体验的功能请求，反映真实使用场景中的性能痛点。整体项目健康度良好，维护者响应速度快（多数 PR 当日创建、当日关闭）。

## 2. 版本发布

今日无新版本发布。但从合并内容看，团队疑似正为 2.4.13/2.5.0 后续补丁版本做准备。

## 3. 项目进展

今日合并/关闭 13 条 PR，主要成果：

**网关启动与升级稳定性（核心主线）**
- [PR #2719](https://github.com/netease-youdao/LobsterAI/pull/2719)：修复旧构建升级（含 Windows 卸载重装保留 `%APPDATA%\LobsterAI`）导致的每次启动失败，一次性解决三个独立根因，配套 PR [#2732](https://github.com/netease-youdao/LobsterAI/pull/2732)
- [PR #2734](https://github.com/netease-youdao/LobsterAI/pull/2734)：迁移遗留的微信 `allowFrom` 凭证文件，解除 OpenClaw 2026.8.1 网关就绪阻塞
- [PR #2735](https://github.com/netease-youdao/LobsterAI/pull/2735)：修复 SQLite 设备身份与旧 `identity/device.json` 冲突导致的启动及一键修复失败
- [PR #2731](https://github.com/netease-youdao/LobsterAI/pull/2731)：补齐 `nsp-clawguard 2.5.0` ESM 加载所需 `__dirname`/`__filename`，修复网关 ready 后崩溃重启循环
- [PR #2737](https://github.com/netease-youdao/LobsterAI/pull/2737)：恢复 IM 渠道原生定时任务与飞书消息投递（“两分钟后提醒我喝水”类指令重新可用）

**测试与工程化**
- [PR #2704](https://github.com/netease-youdao/LobsterAI/pull/2704) / [PR #2733](https://github.com/netease-youdao/LobsterAI/pull/2733)：修复 macOS `/var` 符号链接导致 4 个测试文件本地失败、CI 通过的问题

**渲染层**
- [PR #2736](https://github.com/netease-youdao/LobsterAI/pull/2736)：浏览器凭证改为显式授权后才访问 OS 钥匙串，降低隐私敏感度
- [PR #2740](https://github.com/netease-youdao/LobsterAI/pull/2740)：CJK 正文字重恢复 400，修复 macOS 下加粗文本无法区分的问题（当日关闭）

**待合并（3 条）**
- [PR #2741](https://github.com/netease-youdao/LobsterAI/pull/2741)：支持 nsp-clawguard 2.4.13/manifest 2.4.12 组合的旧版启动路径
- [PR #2739](https://github.com/netease-youdao/LobsterAI/pull/2739)：为内置 web-search skill 增加免密钥 Parallel 引擎
- [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)：dependabot Electron 43.5.0 → 44.4.2 升级（积压近半年）

总体看，项目在“升级路径健壮性”上前进了一大步，多条用户升级即坏的严重问题已修复完毕，预计随下个版本集中释放。

## 4. 社区热点

- [Issue #2738](https://github.com/netease-youdao/LobsterAI/issues/2738)（今日新增，1 评论）：用户反馈每次切换工作区需重启网关，本机启动耗时超 10 秒，频繁切换体验差，请求支持热切换。诉求本质是 **低配设备用户对网关架构的性能瓶颈反馈**，与近期大量网关启动修复属同一痛点域，值得关注。
- [PR #2740](https://github.com/netease-youdao/LobsterAI/pull/2740)：CJK 字重问题是中文用户直接可感知的视觉回归，当日修复关闭，响应迅速。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | macOS 升级后 nsp-clawguard 无法启动，阻断 gateway ready（manifest 版本错位 + 旧 npm 安装记录） | 修复中，[PR #2741](https://github.com/netease-youdao/LobsterAI/pull/2741) 待合并 |
| 🔴 高 | 旧构建升级后每次启动失败（3 个根因） | ✅ 已合并 [#2719](https://github.com/netease-youdao/LobsterAI/pull/2719) |
| 🔴 高 | 遗留微信 allowFrom 文件阻塞网关就绪 | ✅ 已合并 [#2734](https://github.com/netease-youdao/LobsterAI/pull/2734) |
| 🟠 中 | nsp-clawguard 2.5.0 ESM 启动崩溃（缺 `__dirname`，网关反复重启） | ✅ 已合并 [#2731](https://github.com/netease-youdao/LobsterAI/pull/2731) |
| 🟠 中 | 设备身份冲突导致启动/一键修复失败 | ✅ 已合并 [#2735](https://github.com/netease-youdao/LobsterAI/pull/2735) |
| 🟠 中 | IM 定时任务不可用、飞书投递失败 | ✅ 已合并 [#2737](https://github.com/netease-youdao/LobsterAI/pull/2737) |
| 🟡 低 | Tavily MCP 401 未授权（stale） | ⚠️ 无修复 PR，[Issue #989](https://github.com/netease-youdao/LobsterAI/issues/989) |

## 6. 功能请求与路线图信号

- **工作区热切换**（[Issue #2738](https://github.com/netease-youdao/LobsterAI/issues/2738)）：与团队近期持续优化网关启动/重启链路的动向吻合，且已有凭证、身份等运行时迁移基建落地，**很可能被纳入后续版本规划**。
- **免密钥 Parallel 搜索引擎**（[PR #2739](https://github.com/netease-youdao/LobsterAI/pull/2739)）：由外部贡献者提交，若合并将降低 web-search 使用门槛，观察是否进入下一版本。

## 7. 用户反馈摘要

- **性能痛点**：低配设备用户网关启动 >10 秒，工作区切换成本高（#2738），说明网关冷启动开销是真实场景下的核心抱怨。
- **升级即坏的挫败感**：多个修复 PR 描述中提到"restart nor Quick Repair clears them"、"failing every launch"，反映升级路径上的失败曾让用户完全无法使用，是近期修复潮的直接来源。
- **本地开发体验**：贡献者在 macOS 上运行测试长期失败但 CI 通过（#2704），说明 Linux CI 与 macOS 开发环境存在差异，影响外部贡献。
- **配置挫败**：Tavily API key 已配置仍报 401（#989），长期无回应。

## 8. 待处理积压

- [Issue #989](https://github.com/netease-youdao/LobsterAI/issues/989)：Tavily MCP 401 问题，创建于 2026-03，已标记 stale，**建议维护者确认是否已随版本演进失效，或给出配置排查指引后关闭**。
- [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)：Electron 大版本升级（43→44）积压近半年，存在安全补丁滞后风险，建议排期处理或说明阻塞原因。
- 今日关闭的一批 stale PR（#998 选中文本浮动工具栏、#999 Cmd+K 命令面板、#1067 心跳会话修复）中，#998/#999 是高质量的社区 UX 增强，若已被官方实现建议注明对应 PR，否则可考虑重新征集。

---
*数据来源：GitHub API（过去 24 小时），由自动化日报生成。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-09-22）

## 1. 今日速览

过去 24 小时 Moltis 保持温和但聚焦的活跃度：2 条 Issue 更新（1 新开/活跃、1 关闭）、2 条 PR 更新（均为待合并状态），无新版本发布。今日贡献者几乎全部围绕 **VoxCPM 本地 TTS 提供商**这一主题展开（Issue #1281/#1282 + PR #1283），显示社区对“语音能力的本地化部署”有明确诉求。另有修复类 PR #1280 处理工具配置的边界行为。整体节奏平稳，等待维护者审查合并。

## 2. 版本发布

本期无新版本发布，省略。

## 3. 项目进展

今日无 PR 被合并，但有两条高质量贡献待审：

- **PR #1283** [feat(voice): add VoxCPM as a local TTS provider](https://github.com/moltis-org/moltis/pull/1283)：由 @Caldalis 提交，将 VoxCPM（OpenBMB 开源，2B 参数、支持 30 种语言、48 kHz，Apache-2.0）作为本地 TTS 提供商接入，通过 vLLM-Omni 的 OpenAI 兼容 speech API 提供服务。如合并，将填补官方文档 `voice.md` Provider Support 表中“无本地实现”的空白，属于功能层面的实质推进。
- **PR #1280** [fix(tools): preserve preset tools for empty active_tools](https://github.com/moltis-org/moltis/pull/1280)：由 @mikemikimike 提交，修复 Issue #1277 —— 将显式传入的空 `active_tools` 数组视为“不做单轮覆盖”，保留 preset 的工具控制；非空列表仍受 preset 的 allow/deny 策略约束。

## 4. 社区热点

- **Issue #1282（OPEN）/ #1281（CLOSED）**：[VoxCPM as a local TTS provider](https://github.com/moltis-org/moltis/issues/1282)。@Caldalis 引用官方文档 Provider Support 表，指出 Voice personas 目前没有任何本地实现，并迅速提交了对应 PR #1283。同一诉求出现两条编号相邻的 Issue（疑似重复提交后关闭了 #1281），建议维护者在 #1282 中关联追踪。
- 今日各条目评论与 👍 均为 0，尚无广泛讨论发酵，热点集中在贡献者驱动的功能补全上。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 中 | [Issue #1277] 空的 `active_tools` 数组被误处理为单轮覆盖，导致 preset 工具配置丢失，影响工具调用行为确定性 | ✅ 已有 fix PR [#1280](https://github.com/moltis-org/moltis/pull/1280)，待审查合并 |

今日无崩溃或回归类报告。

## 6. 功能请求与路线图信号

- **本地 TTS 支持（Issue #1282 + PR #1283）**：诉求明确（文档自证缺口）、方案完整（代码 + 关联 Issue）、许可证友好（Apache-2.0），是下一版本最可能纳入的功能。若合并，Moltis 的语音栈将首次支持完全本地化运行，契合个人 AI 助手隐私优先的趋势，属于路线图上的重要信号。

## 7. 用户反馈摘要

- **痛点**：语音 persona 强依赖云端 TTS 提供商，缺乏本地选项，隐私与成本敏感用户（如引用 `voice.md` 支持表的 @Caldalis）无法离线使用语音功能。
- **痛点**：工具配置语义不够直观——空数组与“未设置”被区别对待导致意外行为（Issue #1277 报告者），反映配置 API 的可预期性有改进空间。
- 今日 Issue 评论数为 0，暂无更广泛的满意度样本可提炼。

## 8. 待处理积压

以下条目今日更新但尚无维护者响应迹象，建议优先跟进：

1. [PR #1283](https://github.com/moltis-org/moltis/pull/1283)（feat: VoxCPM 本地 TTS）——功能完整度高，建议尽快安排 review。
2. [PR #1280](https://github.com/moltis-org/moltis/pull/1280)（fix: 空 active_tools）——修复已关联 Issue #1277，属行为修复，宜尽快合并以稳定工具链路。
3. [Issue #1282](https://github.com/moltis-org/moltis/issues/1282)——建议与 #1283 建立关联（PR 描述中 "Closes #NNNN" 占位符尚未填写实际编号），避免追踪断链。

---
*数据来源：moltis-org/moltis 过去 24 小时 GitHub 活动统计。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 — 2026-09-22

## 1. 今日速览

CoPaw 今日保持高活跃度：过去 24 小时共 57 条更新（Issues 23 条、PR 34 条），其中 12 个 Issue 被关闭、19 个 PR 被合并/关闭，问题解决节奏快、吞吐健康。维护者（@rayrayraykk、@qbc2016 等）集中合并了一批 Provider 层重构与 DoomLoopGate 修复相关 PR，回应社区反馈的效率较高。今日无新版本发布，但多条 PR 显示 2.2.2 系列正在密集修复打磨中。值得注意的是，出现了 2 个安全相关 Issue（持久化提示注入、工具批处理绕过治理检查），值得维护者优先关注。

## 2. 版本发布

今日无新版本发布。（参考：PR #7913 已将 agentscope 依赖升级至 2.0.8，#7920/#7899 显示 2.2.2 版本打磨进行中。）

## 3. 项目进展

今日合并/关闭的重点 PR：

- **[#7899](https://github.com/agentscope-ai/QwenPaw/pull/7899)** 统一模型发现、定价、选择与 thinking 控制——Provider 层大重构落地，对应 umbrella Issue #6167，显著减少手动配置成本。
- **[#7920](https://github.com/agentscope-ai/QwenPaw/pull/7920)** 修复默认 thinking 显示与模型池为空时的空白选择器，完善上手体验。
- **[#7919](https://github.com/agentscope-ai/QwenPaw/pull/7919)** / **[#7906](https://github.com/agentscope-ai/QwenPaw/pull/7906)** DoomLoopGate 修复：仅在有新工具调用证据时才升级终止，纯文本轮次重置状态，关闭 [#7905](https://github.com/agentscope-ai/QwenPaw/issues/7905)。
- **[#7915](https://github.com/agentscope-ai/QwenPaw/pull/7915)** Responses API 函数工具默认 `strict: false`，修复 nullable 清洗后可选参数被强制填写的回归，关闭 [#7907](https://github.com/agentscope-ai/QwenPaw/issues/7907)。
- **[#7913](https://github.com/agentscope-ai/QwenPaw/pull/7913)** 升级 agentscope 至 2.0.8。
- **[#7917](https://github.com/agentscope-ai/QwenPaw/pull/7917)** Console API 响应压缩 + 慢网络技能列表加载优化。
- **[#7713](https://github.com/agentscope-ai/QwenPaw/pull/7713)** Telegram Rich Messages 渲染 Markdown 表格，关闭 [#7585](https://github.com/agentscope-ai/QwenPaw/issues/7585)。
- **[#7918](https://github.com/agentscope-ai/QwenPaw/pull/7918)** 清理误提交的 9 份内部设计文档（877 行）。

整体判断：Provider 层是本轮最大推进，DoomLoop/Responses API 等稳定性修复密集落地，2.2.2 稳定版临近。

## 4. 社区热点

- **[#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559)**（已关闭，6 评论）任务执行中新发消息触发 409 报错——用户期望排队而非报错，反映并发消息处理体验诉求。
- **[#7739](https://github.com/agentscope-ai/QwenPaw/issues/7739)**（已关闭，7 评论）历史对话移至右侧——14 寸笔记本上左侧布局拥挤，UI 布局灵活性需求强烈。
- **[#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859)**（5 评论）**持久化提示注入**：跨 20+ 轮会话在 tool-result system-reminder 中反复出现“删除所有技能”的注入指令，且本地磁盘未找到来源——安全热点，建议高优跟进。
- **[#7925](https://github.com/agentscope-ai/QwenPaw/issues/7925)**（今日新开）请求公布基于 2.x 重构版的 Benchmark 结果，并增加与 OpenCode、Claude Code 等 Code Agent 的对比——反映框架选型人群的诉求。
- **[#5909](https://github.com/agentscope-ai/QwenPaw/issues/5909)** / [#7287](https://github.com/agentscope-ai/QwenPaw/issues/7287) 主题/皮肤相关提案今日集中关闭，配合设计讨论收敛，皮肤模块可能进入实施阶段。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 说明 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) | 持久化提示注入指令 agent 删除所有技能，来源不明 | ⚠️ 无 fix PR |
| 🔴 高 | [#7926](https://github.com/agentscope-ai/QwenPaw/pull/7926)（PR） | `run_tool_batch` 内部调用绕过权限/治理检查——安全隐患 | ✅ 首次贡献者已提交修复 PR，待审查 |
| 🟠 中高 | [#7908](https://github.com/agentscope-ai/QwenPaw/issues/7908) | Windows 下子进程 Ctrl 事件可终止整个 QwenPaw 宿主 | ✅ PR [#7910](https://github.com/agentscope-ai/QwenPaw/pull/7910) 已提交 |
| 🟠 中 | [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | 2.2.1 上仍复现：工具返回 PDF 序列化为 OpenAI 嵌套 file part，DeepSeek 400 拒绝 | ⚠️ 未闭环 |
| 🟠 中 | [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) | Context compaction 仍可超出完整请求预算导致活跃轮次失败 | ⚠️ 未闭环 |
| 🟡 中低 | [#7841](https://github.com/agentscope-ai/QwenPaw/issues/7841) | Desktop 启动时 Console 先于后端就绪，面板空白需手动刷新 | ✅ PR #7917 部分缓解 |
| 🟡 低 | [#7924](https://github.com/agentscope-ai/QwenPaw/issues/7924)（今日新开） | Console Markdown 表格超宽、横向滚动条沉底 | ⚠️ 未处理 |
| 🟡 低 | [#7921](https://github.com/agentscope-ai/QwenPaw/issues/7921) | omp-roles 技能缺 YAML frontmatter 静默失效 | ✅ PR [#7922](https://github.com/agentscope-ai/QwenPaw/pull/7922) 已提交 |

## 6. 功能请求与路线图信号

- **Benchmark 公开化**（[#7925](https://github.com/agentscope-ai/QwenPaw/issues/7925)）：PawBench 仍基于 1.x，用户强烈期望 2.x 结果及与 Code Agent 的对比——或推动评测体系更新。
- **多标签认证终端**（PR [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861)）：Console 内嵌 xterm 终端 + 会话级工作目录，正在审查中。
- **PawApp SDK/控制面重构**（PR [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874)）：统一公共/私有动作边界、任务幂等分发与恢复，是应用生态的重要基建。
- **主题/皮肤模块**：#5909、#7287 今日关闭，设计讨论收敛，配合 #2291 任务体系，皮肤功能大概率纳入下一版本。
- **工具结果保留策略**（PR [#7923](https://github.com/agentscope-ai/QwenPaw/pull/7923)）：`blocks_retention_days` 按天老化 tool_result blocks（生产存储约 75% 字节），解决历史无限增长。
- **许可合规**（PR [#7927](https://github.com/agentscope-ai/QwenPaw/pull/7927)）：用 MIT 的 markdownify 替换 GPL 的 html2text，降低许可风险。
- **会话级模型覆盖**（PR [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)）：长期在审，社区需求明确。

## 7. 用户反馈摘要

- **UI 布局痛点**：小屏（14 寸笔记本）上左侧功能与历史对话拥挤、需折叠滑动（#7739）；Markdown 表格在 Console 和 Telegram 上渲染体验差（#7924、#7585）。
- **交互一致性期望**：用户期望“任务执行中新消息自动排队”而非 409 报错（#7559），反映对消息队列语义的自然预期。
- **多供应商兼容性**：DeepSeek 拒绝嵌套 file part（#7883）、OpenCode 免费模型实际不可用但 UI 标免费（#7882）、OpenCode 强制 `x-opencode-session` header（#7531）——非一线供应商适配仍是薄弱环节。
- **稳定生产诉求**：历史数据无限增长（PR #7923）、FTS 损坏（PR #7655）、上下文预算超限（#7628）均来自生产环境用户，表明已有较重度的生产使用。
- **正面信号**：有用户用 QwenPaw 构建的 agent 反过来为项目提交皮肤设计提案（#7287），社区正反馈循环形成；新手贡献者连续提交修复 PR（#7922、#7926），贡献门槛友好。

## 8. 待处理积压

- **[#3419](https://github.com/agentscope-ai/QwenPaw/issues/3419)**（2026-04-15 开，5 个月+）：京东云 Coding Plan 环境会话执行中断，长期未根治，建议维护者确认是否仍可复现或关闭。
- **[#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859)** 持久化提示注入——来源未定位，属安全问题，建议优先排查（含记忆/插件存储层）。
- **[#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883)** PDF file part 序列化——#7621 的修复不完整已二次反馈，避免再次 prematurely 关闭。
- **[#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)** Context compaction 预算计算——影响长会话可用性。
- **PR [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)**（7 月开，Under Review 2 个月+）与 **PR [#7655](https://github.com/agentscope-ai/QwenPaw/pull/7655)**（FTS 修复）长期挂起，建议推进审查。

---
*数据来源：agentscope-ai/CoPaw GitHub，统计窗口 2026-09-21 至 2026-09-22。*

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