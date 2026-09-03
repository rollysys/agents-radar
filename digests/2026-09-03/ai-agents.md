# OpenClaw 生态日报 2026-09-03

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-03 06:43 UTC

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

# OpenClaw 项目动态日报 — 2026-09-03

---

## 1. 今日速览

OpenClaw 今日保持高活跃度：过去 24 小时内 Issues 更新 500 条（新开/活跃 321，关闭 179），PR 更新 500 条（待合并 338，合并/关闭 162），活跃度与社区参与度均处于高位。今日无新版本发布，但主仓库涌现大量高质量修复 PR，核心维护者 @steipete 一日内提交 10+ 个修复/性能/测试 PR，覆盖网关、子代理、鉴权、多平台客户端等多个域。热点议题集中在：多代理显式所有权下的 `AgentSelectionRequiredError` 泛滥、消息静默丢失（Telegram/Slack/WhatsApp 投递链路）、以及资源泄漏导致网关劣化等长期稳定性问题。整体看，项目处于“高吞吐修复期”，但部分 P0/P1 历史 Issue 积压明显，维护者评审带宽成为瓶颈。

---

## 2. 版本发布

今日无新版本发布（Releases 0 个）。

---

## 3. 项目进展

今日多个重要 PR 达到"ready for maintainer look"或持续活跃状态，推进方向清晰：

**会话/子代理核心链路**
- [#136390](https://github.com/openclaw/openclaw/pull/136390) `fix(subagents): preserve completion handoff across overlapping waves`（P1，ready for review）— 修复重叠子代理波次下完成交接丢失问题，直接回应消息丢失类 Issue 高发区。
- [#137100](https://github.com/openclaw/openclaw/pull/137100) `fix: deliver child completion after a decorated continuation status` — 修复委托子任务后用户永远收不到完成通知的问题。
- [#136833](https://github.com/openclaw/openclaw/pull/136833) `fix(sessions): reject placement-incompatible model changes before persisting`（P1）— 在持久化前拒绝与节点部署不兼容的模型切换，避免会话卡死。
- [#134987](https://github.com/openclaw/openclaw/pull/134987) 修复 compaction 裁剪对已修复消息的计数与摘要遗漏。

**网关与运维可恢复性**
- [#135868](https://github.com/openclaw/openclaw/pull/135868) `feat(triage): start owned recovery after update and startup failures`（XL，P1）— 将更新失败与网关启动失败接入自有 triage 流程，是无人值守部署可靠性的重要一步，与今日 [#136203](https://github.com/openclaw/openclaw/issues/136203) Windows 升级踩坑报告形成呼应。
- [#137088](https://github.com/openclaw/openclaw/pull/137088) 允许运维放弃配对设备离线后的 worker placement，补齐会话救援路径。
- [#136952](https://github.com/openclaw/openclaw/pull/136952) 让代理无需 shell 兜底即可组织会话（安全边界改进，XL）。

**鉴权与多端**
- [#137048](https://github.com/openclaw/openclaw/pull/137048) 防止 macOS 本地节点跨网关复用设备 token（auth-provider 风险）。
- [#136784](https://github.com/openclaw/openclaw/pull/136784) 冷却后重试首选 OAuth 配置，避免会话永久停留在计费 API key 兜底上。
- [#137065](https://github.com/openclaw/openclaw/pull/137065)、[#137062](https://github.com/openclaw/openclaw/pull/137062) 完善 Linux/Android 端网关凭据缺失的提示与恢复测试。

**性能与质量**
- [#137093](https://github.com/openclaw/openclaw/pull/137093) 跳过冗余 tool-result 预算扫描、[#137096](https://github.com/openclaw/openclaw/pull/137096) 避免丢弃式 Code Mode 命名空间运行时构建 — 均为低风险性能优化。
- [#137006](https://github.com/openclaw/openclaw/pull/137006) / [#137010](https://github.com/openclaw/openclaw/pull/137010) Discord 实时语音 barge-in 与 consult takeover 修复，附 live evidence，语音体验明显打磨中。

**整体评估**：单日 338 个待合并 PR 中 P1 级修复占比可观，项目在消息可靠性、无人值守恢复、多端鉴权三条主线同步推进，前进速度健康。

---

## 4. 社区热点

**评论最多的活跃 Issue：**

1. [#121953](https://github.com/openclaw/openclaw/issues/121953)（13 评论，P1）— DeepSeek 上 Cron 代理回合因 `[cron:<jobId>]` 消息前缀被 API 边缘节点降优先级服务而卡顿数十秒至数分钟。诉求：模型适配层的兼容性细节正在影响生产定时任务，用户希望前缀策略可配置或移除。
2. [#126360](https://github.com/openclaw/openclaw/issues/126360)（12 评论，P1）— 显式多代理所有权下 `AgentSelectionRequiredError` 刷爆日志：logbook 插件、Control UI 全局 RPC、system-agent 回合均缺少 agentId 目标。与 [#128637](https://github.com/openclaw/openclaw/issues/128637) 同源，反映多代理架构的核心 RPC 路由设计缺口，需产品决策。
3. [#132762](https://github.com/openclaw/openclaw/issues/132762)（12 评论，P1）— overflow-retry 成功结束在 toolResult 上但无最终交付，多阶段文档工作流失效。直指重试状态机的正确性核心。
4. [#49876](https://github.com/openclaw/openclaw/issues/49876)（11 评论，3 月至今，P1 + 安全审查）— Cron 会话在工具失败时生成“看似合理的幻觉输出”交付用户而非干净失败。这是信任与安全问题，拖期近半年，社区持续施压。
5. [#127229](https://github.com/openclaw/openclaw/issues/127229)（11 评论）— Telegram durable update 在 transport tracker 结算前被 watchdog 误标记 tombstone，消息丢失。

**共性诉求**：投递链路的“静默失败”（生成成功但用户收不到/收到假结果）是当前社区最集中的痛点，跨越 Telegram/Slack/WhatsApp/Cron 多个表面。

---

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue | 概要 | Fix PR |
|---|---|---|---|
| **P0** | [#123327](https://github.com/openclaw/openclaw/issues/123327) | 共享状态 WAL checkpoint 在 ext4 上将索引页覆写 SQLite page 1，两次数据库损坏（数据丢失） | ❌ 无 |
| **P0** | [#136203](https://github.com/openclaw/openclaw/issues/136203) | Windows de-DE 2026.8.2 升级后 Doctor 维护被阻塞、遗留旧工作区状态 | 部分：[#135868](https://github.com/openclaw/openclaw/pull/135868) triage 恢复框架 |
| **P1** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程未回收，僵尸进程累积致运行时劣化（回归） | ❌ 无 |
| **P1** | [#125344](https://github.com/openclaw/openclaw/issues/125344) | memory-core embedding worker 与 codex app-server 无 idle TTL，勒死网关 cgroup | ❌ 无 |
| **P1** | [#124099](https://github.com/openclaw/openclaw/issues/124099) | 2026.8.1-beta.2 升级后 `SessionCanonicalKeyMigrationRequiredError` 死循环，`doctor --fix` 自身死锁 | ❌ 无 |
| **P1** | [#132762](https://github.com/openclaw/openclaw/issues/132762) | overflow-retry 后无最终交付 | 相关：[#134987](https://github.com/openclaw/openclaw/pull/134987) 部分覆盖 |
| **P1** | [#128637](https://github.com/openclaw/openclaw/issues/128637) | 多代理显式所有权回归触发 `AgentSelectionRequiredError` | ❌ 无（需产品决策） |
| **P1** | [#125570](https://github.com/openclaw/openclaw/issues/125570) | Skill Workshop 更新覆写 live skill description，静默破坏技能路由 | ❌ 无 |
| **P1** | [#128971](https://github.com/openclaw/openclaw/issues/128971) | Telegram 终态 `delivery_ambiguous` 时最终回复静默丢失 | 🔗 linked PR open |
| **P1** | [#87051](https://github.com/openclaw/openclaw/issues/87051) | Codex OAuth 不传播到子代理，静默兜底导致生产幻觉工具调用 | ❌ 无 |
| **P2** | [#125079](https://github.com/openclaw/openclaw/issues/125079) | WhatsApp 入站崩溃（作者已撤回核心论断，仍待复现定论） | ❌ 无 |
| **P2** | [#136200](https://github.com/openclaw/openclaw/issues/136200) | 飞书合并转发引用只暴露占位文本 | 🔗 linked PR open |

**风险提示**：三个资源泄漏/损坏类 Issue（#97616、#125344、#123327）均无 fix PR，属长期运行健康度隐患，建议优先排期。

---

## 6. 功能请求与路线图信号

**有明确推进迹象（可能进入下一版本）：**
- **更新/启动失败自恢复**：[#135868](https://github.com/openclaw/openclaw/pull/135868) triage PR 已在审，配合 [#136203] 的用户报告，无人值守恢复是当前明确的路线图方向。
- **Cron 失败告警策略保留**：[#129302](https://github.com/openclaw/openclaw/pull/129302) 修复编辑/克隆 cron 时丢失 failure-alert 配置，ready for review。
- **ACP 会话技能注入** [#43564](https://github.com/openclaw/openclaw/issues/43564)：随 [#136990](https://github.com/openclaw/openclaw/pull/136990)（Claude prefix-binding runtime context）等 ACP 域持续投入，落地概率上升。
- **插件生命周期事件** [#80674](https://github.com/openclaw/openclaw/issues/80674)：[#136912](https://github.com/openclaw/openclaw/pull/136912)（`resolve_exec_env` 补 session id）显示插件 hook 体系在渐进增强。

**仍处讨论/无实现阶段：**
- [#121729](https://github.com/openclaw/openclaw/issues/121729) 代理每日消费限额 — 无人值守场景强需求，7 条评论，尚无 PR。
- [#74594](https://github.com/openclaw/openclaw/issues/74594) Skill Capability Manifests RFC — 安全能力可见性，长期方向。
- [#79168](https://github.com/openclaw/openclaw/issues/79168) 工具输出内容级注入扫描 — 与 #107158 安全事件分类学联动，属安全路线图。
- [#45508](https://github.com/openclaw/openclaw/issues/45508) webchat 自托管 STT/TTS — 语音域 PR 活跃（#137006/#137010），但该需求尚无对应实现。
- [#92367](https://github.com/openclaw/openclaw/issues/92367) 作用域限定的网关 auth token — 安全评审产出，等待架构决策。

---

## 7. 用户反馈摘要

**核心痛点：**
- **静默失败是最大信任杀手**：多个高评论 Issue（#132762、#128971、#49876、#96692）描述同一模式——任务"成功"完成但用户收不到结果，或收到幻觉内容。生产用户明确表示这比崩溃更糟。
- **升级路径痛苦**：#124099（beta.2 迁移死锁）、#136203（Windows 升级遗留状态）、#123799（生产用户公开求 2026.5.12 的安全升级/回port指引）表明跨版本升级体验是运营方最不满意的环节。
- **长时间运行的资源健康**：树莓派/NVMe 单机部署用户（#123327、#125344）报告数据库损坏与 cgroup 被勒死，轻量自托管场景受到冲击。
- **多代理配置复杂度**：显式所有权模式下大量表面（ambient ops、插件、Control UI）缺 agentId 目标，#126360 与 #128637 双双高热，说明该功能的生态适配未完成。

**正面信号：**
- Issue 报告质量普遍很高（环境、复现、根因分析俱全），部分报告者自行撤回错误结论（#125079），社区技术素养强。
- PR 贡献者多元化（@onevcat、@vincentkoc、@Patrick-Erichsen、@jalehman 等），非核心维护者贡献占比可观。
- 语音（Discord realtime）、多端客户端（macOS/Linux/Android）均在快速打磨。

---

## 8. 待处理积压（维护者关注清单）

**高影响、长期开放、无 fix PR：**

| Issue | 开放时长 | 等级 | 状态 |
|---|---|---|---|
| [#49876](https://github.com/openclaw/openclaw/issues/49876) Cron 幻觉输出（信任与安全） | ~5.5 个月 | P1 + security review | stale，无 fix |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) 僵尸进程泄漏 | ~2 个月 | P1 | needs-info，无 fix |
| [#87051](https://github.com/openclaw/openclaw/issues/87051) Codex OAuth 子代理不传播 | ~3 个月 | P1 | 无 fix |
| [#123799](https://github.com/openclaw/openclaw/issues/123799) 2026.5.12 生产用户求升级指引 | ~3 周 | P1 | 等待官方 backport 决策 |
| [#50677](https://github.com/openclaw/openclaw/issues/50677) Skills 静默截断无提示 | ~5.5 个月 | P2 | 无 fix |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) Cron 在 LLM API 持续 500 时不快速失败 | ~6 个月 | P2 回归 | 无 fix |

**PR 侧**：待合并 338 个，其中多个 P1 且标记 "ready for maintainer look"（#136952、#136390、#136833、#129302、#136912 等），维护者评审带宽是当前主要瓶颈；#128001、#127992（openai cache-TTL 修剪恢复）长期处 "needs proof"，建议明确验证要求以避免贡献者流失。

**健康度结论**：OpenClaw 社区活跃度与贡献质量优秀，修复节奏快；但“静默消息丢失”类核心可靠性问题与资源泄漏类长期 Issue 的清偿速度落后于新增速度，升级/迁移路径的文档与 backport 支持是最需补齐的运营能力。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告
**数据窗口：2026-09-03（过去 24 小时）**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态整体处于**高速演进的“可靠性攻坚期”**：各头部项目功能拼图（多渠道消息、多代理编排、语音、记忆系统）已基本齐备，竞争焦点正转向“静默失败治理、安全默认值（fail-closed）、无人值守可恢复性”等生产化命题。今日 12 个观测项目中 10 个有活动、2 个发布版本，无一发布 breaking 质量的负面事件，但**评审带宽不足是全生态的共性瓶颈**——多个项目出现“待合并 PR 堆积 > 单日合并数”的管道拥塞。同时，用户部署形态正从个人玩具向**常驻服务/多端自托管**迁移，资源泄漏、OAuth 凭据持久化、升级迁移路径成为跨项目高频痛点。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新（开/关） | PR 更新（待/合） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（321/179） | 500（338/162） | 0 | 🟢 高吞吐修复期，但 P0/P1 积压清偿慢，静默失败类信任问题突出 |
| **Hermes Agent** | 50（47/3） | 50（40/10） | 0 | 🟡 活跃度优秀但关闭率极低（3/50），积压上升，Windows/打包/provider 三线吃紧 |
| **Zeroclaw** | 50（34/16） | 50（45/5） | 0 | 🟡 架构收敛期，RFC 治理成熟但 S0 安全修复在途数周，合并保守 |
| **IronClaw** | 10（5/5） | 26（15/11） | 0 | 🟢 良好，技术债系统性清偿（17 万行 @ts-nocheck）+ CI 优化双轨 |
| **CoPaw (QwenPaw)** | 27（16/11） | 27（20/7） | **v2.2.0 Stable + beta.7** | 🟢 发布节奏健康、安全响应快（沙箱突破当日关闭），但长周期 PR 积压 3–6 周 |
| **NanoBot** | 2（2/0） | 30（26/4） | 0 | 🟢 版本前修复收敛期，**所有已知 bug 均有 fix PR，无裸奔状态**，响应链路最干净 |
| **NanoClaw** | 3（3/0） | 20（17/3） | 0 | 🟡 Provider 契约化重构深水区 + 供应链安全加固，0 Issue 关闭，评审拥塞 |
| **Moltis** | 2（2/0） | 3（3/0） | **3 个（无 Release Notes）** | 🟡 单人驱动（@GTanger），Issue→PR 闭环快但流程规范性欠缺 |
| **LobsterAI** | 5（3/2） | 6（4/2） | 0 | 🔴 社区 4 个 PR 全部 stale，高价值 bug（#1088/#1089）5 个月无响应，贡献流失风险高 |
| **EasyClaw** | 0 | 0 | **v1.9.2** | 🟡 发布日静默期，有交付无互动，垂直场景小项目 |
| **PicoClaw** | 0 | 1（关闭） | 0 | ⚪ 维护节奏，社区输入为零 |
| NullClaw / TinyClaw / ZeptoClaw | 0 | 0 | 0 | ⚪ 静默 |

---

## 3. OpenClaw 在生态中的定位

**规模量级**：OpenClaw 的单日 500 Issue / 500 PR 更新是第二梯队（Hermes、Zeroclaw 的 50/50）的 **10 倍**，处于生态绝对头部，且 @steipete 单日 10+ PR 显示核心维护者产出力极强。它是事实上的生态基准——LobsterAI 直接以 `openclaw.version` 作为依赖声明（#1082），CoPaw 的兼容生态围绕其版本演进。

**优势**：
- **修复广度与领域覆盖**：单日覆盖网关、子代理、鉴权、多平台客户端、实时语音，多端矩阵（macOS/Linux/Android/Windows）无人能及；
- **社区贡献者多元化**（onevcat、vincentkoc 等非核心贡献占比可观），报告质量高，甚至有报告者自行撤回错误结论（#125079），社区技术素养在生态中最佳；
- **架构纵深**：triage 自恢复（#135868）、多代理显式所有权、ACP 域持续投入，技术前沿性领先。

**相对短板**：
- **积压清偿速度**：P0 数据库损坏（#123327）、僵尸进程泄漏（#97616）、Cron 幻觉输出（#49876，5.5 个月）等长期无 fix，可靠性债务规模大于任何同类项目；对比 NanoBot“所有已知 bug 均有 fix PR 在途”的状态，OpenClaw 的核心问题是**问题发现速度 > 修复速度**；
- **升级/迁移路径**：#124099（beta.2 迁移死锁）、#123799（求 backport 指引）表明版本治理能力落后于发布节奏；
- **技术路线差异**：OpenClaw 以“网关中心 + 多表面投递”为主线，Zeroclaw 走“RFC 驱动的重治理”路线（多轮投票、契约属主），NanoClaw 走“provider 契约化 + 供应链安全”路线，IronClaw 走“类型化工程债清偿”路线——OpenClaw 快但治理债务更重。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **静默失败治理** | OpenClaw（#132762/#128971/#49876）、Zeroclaw（#10523 截断无感知、#10563 无工具回执）、Hermes（消息误发 #101866）、CoPaw（#7469 embedding 静默失败） | 生态第一痛点：任务“成功”但用户收不到结果/收到幻觉内容；诉求是可观测、fail-loud 而非 fail-silent |
| **安全默认值（fail-closed）与命令风险分级** | Zeroclaw（S0 delegate 绕过 #10165、沙箱策略 RFC）、NanoBot（路径遍历 #5633、Seatbelt 沙箱 #5628）、NanoClaw（供应链投毒门控 #3492）、CoPaw（#7443/#7511） | 危险命令绕过、沙箱逃逸、供应链防投毒是各项目并行投入的安全主线 |
| **凭据/OAuth 持久化与传播** | OpenClaw（#87051 OAuth 不传播到子代理）、NanoBot（#5446/#5638 容器化持久化）、IronClaw（子代理凭证门控可见性 #8046）、NanoClaw（#3701 多组凭据） | 容器/生产部署下的凭据生命周期管理 |
| **长时运行资源健康** | OpenClaw（僵尸进程 #97616、cgroup 勒死 #125344）、NanoBot（指纹缓存泄漏 #5634）、Hermes（内核孤儿进程 #101928、LRU 回收 #101927） | 常驻服务化带来的资源泄漏治理 |
| **子代理编排与状态共享** | OpenClaw（子代理交接 #136390）、Hermes（共享内存池 #377、多写者会话 #101279）、CoPaw（子 Agent 进度监控 #7450） | “隔离 vs 共享”的边界设计，多个项目在 loosening isolation |
| **长上下文/压缩正确性** | OpenClaw（compaction 计数遗漏 #134987）、Hermes（prune 锁定 #101922）、CoPaw（长文档上下文丢失 #7447）、NanoBot（tiktoken 估算偏差 #5403） | token 估算与压缩状态机的正确性普遍存疑 |
| **消息渠道富媒体/流式体验** | 全部消息类项目（Telegram/Slack/Teams/WhatsApp/QQ/WeCom） | 流式输出、附件收发、卡片交互的跨渠道打磨 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构特点 |
|---|---|---|---|
| **OpenClaw** | 全栈个人 AI 助手：多代理 + 多渠道 + 语音 + 多端 | 生产级自托管用户、重度个人自动化 | 网关中心、投递链路复杂、体量最大 |
| **Hermes Agent** | 云端大脑 + 多设备：Group Chat 持续性、execute_code 内核 | "VPS 大脑 + 多桌面"进阶用户 | gateway/session-state 架构，salvage PR 接力文化 |
| **Zeroclaw** | 架构治理与安全边界：沙箱、delegation、事件回放 | 重视可控性的深度用户/贡献者 | RFC 投票驱动，Rust，append-only 事件溯源方向 |
| **NanoBot** | 轻量修复收敛 + 隐私 | 轻量自托管用户 | Python，单库简洁性优先 |
| **NanoClaw** | provider 契约化 + 供应链安全 | fork/二次开发群体（davekim917 类） | TS/pnpm，声明式契约接缝 |
| **IronClaw** | WebUI v2 + 工程质量 | 注入工程质量的企业团队 | TS 前端 + Rust 后端混合，ratchet 式技术债治理 |
| **CoPaw** | 产品化程度最高：Hub 多用户、Make-Skill、PawPort | 桌面端企业/团队用户 | 版本化发布节奏，协议 Driver（MCP→A2A/ACP） |
| **LobsterAI / EasyClaw / PicoClaw** | 垂直场景（IM 协作/电商联盟营销/QQ 渠道） | 中文垂直市场用户 | 依托上层框架的薄封装 |
| **Moltis** | Hook 生命周期 + 推理控制 | 集成开发者 | 高频日期版本发布 |

---

## 6. 社区热度与成熟度分层

**🚀 快速迭代/功能扩张层**：**CoPaw**（v2.2.0 发布当日即推进 2.2.1，Hub/Make-Skill 大特性排队）、**IronClaw**（重构+功能双轨、合并吞吐健康）、**OpenClaw**（绝对量最高，但本质是“高吞吐修复期”而非功能期）。

**🔧 质量巩固/架构收敛层**：**Zeroclaw**（大版本前 RFC 收敛）、**NanoBot**（发布前修复收敛，bug 响应链路生态最干净）、**NanoClaw**（契约化重构深水区）、**Hermes**（修复吞吐高但关闭率告警）。

**📉 维护/观望层**：**Moltis**（活跃但单人集中）、**LobsterAI**（官方小步迭代、社区贡献被 stale 机制流失，健康度最差的有活动项目）、**EasyClaw / PicoClaw**（有交付无社区）、**NullClaw / TinyClaw / ZeptoClaw**（静默）。

**关键判据**：Issue 关闭率与 fix-PR 覆盖率是分层核心指标——NanoBot（100% bug 有 fix）、IronClaw（合 11/26）优于 Hermes（3/50 关闭）、LobsterAI（0 社区响应）。

---

## 7. 值得关注的趋势信号

1. **“静默失败”成为行业信任危机**：跨 5+ 项目的同构投诉（生成成功但交付丢失/幻觉输出）表明，下一阶段的竞争不在能力上限而在**可靠性下限**。OpenClaw 的 #49876（Cron 幻觉）拖期半年仍无 fix，是对全生态的警示。对开发者的启示：投递链路必须默认可观测、终态可审计、失败可区分。

2. **安全从“功能”变为“默认契约”**：Zeroclaw 的“默认拒绝”反转（#10391）、NanoBot 的 Seatbelt 沙箱、NanoClaw 的 minimumReleaseAge 供应链门控、CoPaw 的受保护执行契约（#7520），共同指向 **fail-closed 成为基线预期**。delegation/子代理场景是当前安全漏洞的高发区（绕过风险分级）。

3. **部署形态向“常驻多端服务”迁移**：Hermes 的“VPS 大脑 + 多桌面”、CoPaw 的 Hub 多用户、OpenClaw 的 triage 自恢复，加上各项目普遍的容器凭据/资源泄漏议题，说明**无人值守可恢复性**（升级自愈、失败告警、资源回收）是生产化的分水岭能力。

4. **工程治理制度化**：IronClaw 的 CI ratchet、Zeroclaw 的 AI 辅助预审 SOP 与快速合并通道、Hermes 的“3+ 同类 PR 应抽 ABC”规则——头部项目都在用**制度对抗评审带宽瓶颈**，这是社区规模化的必经路径。

5. **多代理从“编排”转向“隔离与共享的再平衡”**：OpenClaw 的显式所有权翻车（AgentSelectionRequiredError 泛滥）与 Hermes 的共享内存池/多写者请求形成对照——社区正在用实际反馈投票：**纯粹隔离过严、纯粹共享过险，受控的中间态是下一轮架构焦点**。

6. **对开发者的直接参考**：优先构建消息终态确认、错误分类语义（参考 IronClaw #8041）、凭据传播链、命令风险分级四个可靠性基座；渠道适配器需尊重用户自有代码边界（NanoClaw #3529 的反面教材）；发布必须附 changelog 与迁移指引（Moltis 与 CoPaw #7474 的教训）。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-09-03）

> 数据来源：github.com/HKUDS/nanobot | 统计窗口：过去 24 小时

---

## 1. 今日速览

- 今日项目保持**高活跃开发状态**：24 小时内 PR 更新达 30 条（待合并 26 条，合并/关闭 4 条），Issues 更新 2 条，无新版本发布。
- 活跃贡献呈现明显的“**修复浪潮**”特征：大量 P1/P2 级 bug fix PR 集中推进，覆盖安全、provider、channel（Matrix/Signal/Telegram）、WebUI、SDK 等多个子系统。
- 安全方向今日表现突出：路径遍历防护（#5633）、macOS Seatbelt 沙箱后端（#5628）、OAuth 凭据持久化（#5446/#5638）三项并行推进。
- 无新 Issue 中的 bug 报告（2 条均为 enhancement），社区诉求转向**体验优化**（运行时上下文 ephemeral 机制、WebUI 信息展示）。

---

## 2. 版本发布

今日无新版本发布。建议关注积压的 26 个待合并 PR，其中多个 P1 级修复（#5403、#5633）具备进入下个版本的价值。

---

## 3. 项目进展

今日合并/关闭共 4 条 PR，其中可确认的是：

- **[PR #5636](https://github.com/HKUDS/nanobot/pull/5636)**（已关闭）`fix(webui): align native sidebar controls` — @Re-bin 统一了 WebUI 与原生宿主的侧栏折叠控件，移除了原生端重复的浮动开关与 hover 预览，减少了双端 UI 代码分叉。虽标记为 CLOSED 而非合并，但同作者当日随即提交了改进版 [#5639](https://github.com/HKUDS/nanobot/pull/5639)（会话标签垂直居中），显示该方向仍在持续迭代。

**整体判断**：今日以“广度修复”为主而非功能落地，26 个待合并 PR 在排队评审，项目处于**版本发布前的修复收敛期**。

---

## 4. 社区热点

1. **[Issue #5586](https://github.com/HKUDS/nanobot/issues/5586)**（2 条评论，8-28 创建，持续活跃至昨日）
   请求为 runtime-context block 增加 `ephemeral` 选项，避免敏感/临时上下文被持久化并在后续每一轮对话中回放（当前 `agent/loop.py:725-731` 无条件持久化）。
   **诉求分析**：这是典型的隐私 + token 成本双重痛点——用户希望注入一次性上下文（如临时凭据、会话性指令）而不污染历史。已有 2 条评论讨论，属于高价值设计讨论，值得维护者给出 API 设计意见。

2. **[Issue #5631](https://github.com/HKUDS/nanobot/issues/5631)**（9-02 新开）
   中文用户请求在 WebUI 中展示上下文用量、模型响应速度等信息，参考 DeepSeek 式的体验。与同日提交的 UI PR（#5636/#5639）方向呼应，说明 WebUI 可观测性是社区关注点。

3. **[PR #5614](https://github.com/HKUDS/nanobot/pull/5614)** Telegram 富消息流式输出，作者表示本周自用该补丁并计划评审，是 channel 体验的重要增强。

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | PR 状态 |
|---|---|---|
| 🔴 P1 | **会话密钥路径遍历漏洞**：不受信的 session id（如 `../../etc/passwd`）可越界写入 sessions 目录外的文件（Fixes #5564） | [PR #5633](https://github.com/HKUDS/nanobot/pull/5633) ✅ 已有 fix |
| 🔴 P1 | **Memory consolidation 永不触发**：本地 tiktoken 估算比 API 实际值低 30-50%，导致对话超窗仍不压缩（Fixes #5402） | [PR #5403](https://github.com/HKUDS/nanobot/pull/5403) ✅ 已有 fix（存在 conflict 标记，需 rebase） |
| 🟠 P2 | **SDK 流关闭丢失事件**：队列满时关闭流会丢弃最旧的未读事件 | [PR #5635](https://github.com/HKUDS/nanobot/pull/5635) ✅ |
| 🟠 P2 | **WebUI 重连后残留流式状态**（Closes #5512） | [PR #5514](https://github.com/HKUDS/nanobot/pull/5514) ✅ |
| 🟠 P2 | **Provider 异常逃逸 fallback 链**：异常未转为 error response，绕过降级策略 | [PR #5413](https://github.com/HKUDS/nanobot/pull/5413) ✅ |
| 🟠 P2 | **LangSmith 追踪回归**：LiteLLM→原生 SDK 迁移移除了追踪回调（Fixes #2493） | [PR #5485](https://github.com/HKUDS/nanobot/pull/5485) ✅ |
| 🟠 P2 | 指纹缓存无限增长（长时运行网关内存泄漏隐患） | [PR #5634](https://github.com/HKUDS/nanobot/pull/5634) ✅ |
| 🟠 P2 | Matrix 流投递失败被静默吞掉；SAS 验证流程不完整 | [PR #5637](https://github.com/HKUDS/nanobot/pull/5637) / [PR #5385](https://github.com/HKUDS/nanobot/pull/5385) ✅ |
| 🟡 P3 | 消息切分丢失缩进、Signal 通配符白名单失效、tool_hints 超长参数不截断、会话超时任务失败被静默丢弃 | [#5334](https://github.com/HKUDS/nanobot/pull/5334) / [#5472](https://github.com/HKUDS/nanobot/pull/5472) / [#5629](https://github.com/HKUDS/nanobot/pull/5629) / [#5515](https://github.com/HKUDS/nanobot/pull/5515) ✅ |

**结论**：今日所有已知 bug 均有对应 fix PR，无一处于“裸奔”状态，响应链路健康。

---

## 6. 功能请求与路线图信号

- **Runtime-context ephemeral 机制**（[#5586](https://github.com/HKUDS/nanobot/issues/5586)）：尚无关联 PR，需先定 API 设计，属中期路线图信号。
- **macOS Seatbelt 沙箱后端**（[PR #5628](https://github.com/HKUDS/nanobot/pull/5628)）：为 shell 命令提供进程级隔离，策略对齐 bwrap（工作区可写、媒体只读、API 密钥隐藏）。若合并，将补齐 exec 安全隔离在 macOS 的空缺，**很可能进入下一版本**。
- **OAuth 凭据统一持久化**（[#5446](https://github.com/HKUDS/nanobot/pull/5446) Codex、[#5638](https://github.com/HKUDS/nanobot/pull/5638) Copilot）：改善容器部署可用性，方向一致的两个 PR 显示这是系统性收敛工作。
- **Telegram 富消息流式输出**（[#5614](https://github.com/HKUDS/nanobot/pull/5614)）与 **MiniMax 音乐生成引导**（[#5212](https://github.com/HKUDS/nanobot/pull/5212)）：channel 体验与 provider 生态扩展的持续投入。
- **WebUI 可观测性**（[#5631](https://github.com/HKUDS/nanobot/issues/5631)）：低成本高感知的功能，预计会被快速纳入。

---

## 7. 用户反馈摘要

- **隐私与持久化焦虑**（#5586）：用户对 runtime context 无条件写入会话历史并每轮回放表示不满，涉及敏感信息暴露与 token 浪费。
- **可观测性缺失**（#5631，中文用户）：希望直观看到模型速度与上下文占用，对标 DeepSeek 的产品体验，反映日常重度使用者对“黑盒感”的不满。
- **容器/生产部署痛点**（#5446/#5638 背景）：OAuth token 写入平台默认目录而非数据目录，在容器中可能不可持久化，说明生产环境用户占比上升。
- **长时运行稳定性**（#5634）：网关类部署用户遇到资源缓慢积累问题，印证使用场景从个人玩具向常驻服务演进。

---

## 8. 待处理积压

| 条目 | 状态 | 建议 |
|---|---|---|
| [PR #5403](https://github.com/HKUDS/nanobot/pull/5403)（P1，memory consolidation） | 8-16 开启，**有 conflict** | 优先 rebase 并合并，P1 且修复用户实际超窗问题 |
| [PR #5212](https://github.com/HKUDS/nanobot/pull/5212)（MiniMax 音乐引导） | 8-02 开启，已挂起一个月 | 需维护者给出评审结论，避免社区贡献流失 |
| [PR #5334](https://github.com/HKUDS/nanobot/pull/5334)（消息切分缩进） | 8-11 开启，超 3 周 | 涉及 Signal UTF-16 offset 对齐，评审门槛较高，建议明确 reviewer |
| [Issue #5586](https://github.com/HKUDS/nanobot/issues/5586)（ephemeral blocks） | 8-28 开启，有讨论无官方回应 | 建议维护者介入 API 设计讨论 |

**整体健康度评估**：✅ 良好。26 个待合并 PR 反映贡献管道充沛，但也提示评审吞吐是当前瓶颈；建议在下个版本集中收割 P1/P2 修复。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-09-03

## 1. 今日速览

Zeroclaw 今日保持高度活跃：过去 24 小时内 Issues 更新 50 条（新开/活跃 34，关闭 16），PR 更新 50 条（待合并 45，已合并/关闭 5），但无新版本发布。项目当前重心明显偏向**架构治理与 RFC 决策**——会话持久化契约、记忆生命周期、沙箱策略等高风险 RFC 均处于多轮修订投票阶段。安全类问题持续占据优先级高位，包括一个 S0 级 delegate 高危命令绕过 Bug（#10165）已有对应修复 PR 在推进中。整体看，项目处于“功能大版本前的架构收敛期”，45 个待合并 PR 中不乏多个 XL 级重构，合并节奏偏保守。

## 2. 版本发布

今日无新版本发布。（已关闭 PR 中含工具链升级 #9527 仍在待合并状态，或预示下一次发布将要求 Rust 1.96.0 源码下限。）

## 3. 项目进展

今日关闭/合并的 PR 共 5 条，值得关注的包括：

- **PR #10569** [fix(runtime): surface bootstrap-file truncation to the operator](https://github.com/zeroclaw-labs/zeroclaw/pull/10569)（已关闭）— 针对 Issue #10523 的修复：`compact_context` 模式下 bootstrap 文件 6000 字符静默截断问题现会向操作者发出可见信号（注意：状态为 CLOSED 而非 merged，可能是被替代或需返工，建议关注后续重提）。
- **PR #10559** [fix(config): refuse unproven config saves](https://github.com/zeroclaw-labs/zeroclaw/pull/10559)（已关闭）— 关闭 P0 数据丢失路径：默认或程序构建的近空 `Config` 不再能覆盖既有 `config.toml`，需携带路径绑定加载凭证。这是今日最重要的稳定性修复。
- **PR #10568** [fix(docs): snap reader scale to explicit step ladder](https://github.com/zeroclaw-labs/zeroclaw/pull/10568)（已关闭）— 修复阅读器缩放 0.85 不在 0.1 网格上的取整回归。
- 对应 Issue 层面，#10147（CLI config init 跨进程不可完成）、#10193（Matrix reasoning 状态冲突）、#10456（MCP SSE 超大事件后缀）、#10243（退役遗留 HMAC node transport）等一批 P1–P3 问题今日关闭，显示维护者在系统性清理积压。

**评估**：今日推进幅度中等，以安全加固和配置数据完整性为主，无大型功能落地；大体量功能（多模型 provider profile #9809、多会话面板 #9739）仍在评审队列中。

## 4. 社区热点

| 议题 | 评论数 | 状态 | 链接 |
|---|---|---|---|
| RFC: Runtime-owned conversation sessions & transport adapters（Rev 5） | 32 | 投票重置 | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) |
| RFC: Decouple memory lifecycle from storage backends | 25 | accepted | [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) |
| RFC: Unified file & attachment architecture（Rev 10） | 25 | 投票重置 | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) |
| RFC: Granular sandbox policy | 22 | in-progress | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) |
| Tracker: Session-persistence contract ownership | 15 | open | [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) |
| Tracker: Maintainer decision queue | 14 | accepted | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |

**分析**：
- **会话/传输架构是当前最大争议点**。#9487（Rev 5）与 #9488（Rev 10）均为对前一版投票快照的实质性替换，旧反对票不延续——修订-重投循环频繁，反映社区在“Runtime 是否应拥有会话生命周期”上分歧深。配套的 #9600 Tracker 明确指出**四条独立工作流在同时改动同一会话持久化契约且无属主**，暴露出架构协调风险。
- **记忆子系统双 RFC 并行**（#6850 存储与生命周期解耦、#9103 权威存储与 enrichment connector 分离）均已 accepted，正进入实施协调阶段（#10405 Tracker）。
- **治理流程本身也在演化**：#9330（AI 辅助 PR 预审 SOP）、#10366（PR 评审证据与快速合并通道）、PR #10288（FND-003 Rev.16 延期投票周期定义）显示项目在用制度解决评审吞吐瓶颈。

## 5. Bug 与稳定性

按严重程度排序：

1. **🔴 S0 / P1 — 独立 delegate 绕过 `block_high_risk_commands`**（[#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165)，in-progress）— 高危命令（如 `rm`）经独立 delegate 执行时即使 delegate 自身 risk profile 设为阻断也会成功。**已有修复**：PR [#10188](https://github.com/zeroclaw-labs/zeroclaw/pull/10188)（为独立 delegate 建立非交互式 approval manager）与配套 PR [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391)（反转 bounded delegation 工具复用规则为默认拒绝）。**这是当前最需要尽快合并的安全修复链。**
2. **🟠 P1 — MCP 工具结果图片在 OpenAI 兼容 provider 上 400**（[#10501](https://github.com/zeroclaw-labs/zeroclaw/issues/10501)，in-progress）— `role:tool` 消息内的 image part 不被接受，待修复。
3. **🟠 P1（已修复，待验证发布）— Bootstrap 文件 6000 字符静默截断**（[#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523)）— 影响 persona/身份文件注入完整度，PR #10569 已关闭。
4. **🟡 P2 — git 风险分类器被全局选项干扰**（PR [#9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635)）— `git -C <path> <verb>` 导致子命令误判，削弱命令风险分级，needs-author-action。

## 6. 功能请求与路线图信号

从已 accepted 的 RFC 与在途 PR 推断，下一版本可能纳入：

- **多模型 provider profile**（RFC 已有实现 PR [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809)，XL 级，principal contributor）——一个凭证/端点托管多个模型，是用户侧呼声明确的能力。
- **会话消息序列化**（PR [#10411](https://github.com/zeroclaw-labs/zeroclaw/pull/10411)）——同会话消息串行执行，解决并发 turn 竞态，属行为变更需关注。
- **Computer-use 桌面控制**（RFC #6909 accepted，Rev 2 含安全边界澄清）——高风险能力的落地将标志 agent 能力面大幅扩展。
- **WASM 插件 Observer 能力**（RFC #7822 accepted）与**可组合 WASM 插件运行时**（[#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076)，needs-maintainer-review，刚剥离与 #10526 的决策冲突）——插件生态是中期主线。
- **Append-only 会话事件历史与确定性回放**（[#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526)）——新提 RFC，已被 #10076 认定为事件词汇表的唯一权威，方向信号强烈。
- **网关 verbatim channel send**（#10050 accepted）与 **web_dist_dir 能力协商**（#9975 accepted）——网关 API 面持续收敛。

## 7. 用户反馈摘要

- **静默截断/静默行为是高频痛点**：#10523 中用户对“6,000 字符截断操作者完全无感知”不满；PR #10563 提出的问题同理——模型在叙述中声称执行了动作但无工具回执佐证，用户无法验证。社区对“可观测性优先”诉求明确。
- **安全默认值期望高**：#10165 报告者直指 delegation 语义与风险配置之间的理解落差；PR #10391 的“默认拒绝”反转与 PR #10559 的配置覆盖保护均获得方向性认可——用户期待 fail-closed。
- **多 provider/多模型与别名管理**是实际部署中的真实需求（PR #10519、#9809 均源于别名信息丢失/重复配置的痛点）。
- **记忆可信度**：PR #10567（召回条目打上召回日期）反映用户抱怨旧记忆与新记忆在上下文中不可区分。
- **治理流程透明度**：RFC 修订-重投循环频繁引发参与者对决策时效的关切（#9487/#9488 的多轮 Rev 替换），#10366 的快速合并通道是对贡献者等待时间长这一抱怨的直接回应。

## 8. 待处理积压

提醒维护者关注：

- **[#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) / [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)** — 均为 needs-maintainer-review 且处于投票重置状态，自 7 月底已运行 5–10 轮修订，需尽快开启新讨论窗口与快照，避免社区疲劳。
- **[#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)**（wire protocol 一等公民化 RFC）— needs-maintainer-review 超过两个月，19 条评论悬而未决。
- **[#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076)** — 大型 WASM 插件 RFC 待 maintainer 审查，且刚做实质性范围收缩，需要决策队列（#8692）排期。
- **PR [#10519](https://github.com/zeroclaw-labs/zeroclaw/pull/10519)、[#10411](https://github.com/zeroclaw-labs/zeroclaw/pull/10411)、[#9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635)、[#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745)、[#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746)** — 多个高风险安全/正确性修复处于 needs-author-action，含三个 XL 级 PR 长期在途，建议维护者介入刷新或分批拆分。
- **PR [#9527](https://github.com/zeroclaw-labs/zeroclaw/pull/9527)** — 工具链升级至 1.98.0，needs-author-action，阻塞后续 CI 基线统一。
- **安全修复链 #10165 → PR #10188 / #10391** — S0 问题修复已在途数周，建议优先评审合并。

---
*数据来源：GitHub API（zeroclaw-labs/zeroclaw），统计窗口 2026-09-02 至 2026-09-03。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-09-03

## 1. 今日速览

项目今日保持高度活跃：过去 24 小时内 Issues 更新 50 条（新开/活跃 47，关闭 3），PR 更新 50 条（待合并 40，已合并/关闭 10），但无新版本发布。社区贡献以修复类 PR 为主，集中在会话状态（session-state）、消息投递（message-delivery）和兼容性三大风险标签方向。桌面端 Group Chat 持续性、MCP 工具容错、Windows 平台稳定性是当前主线议题。整体来看，项目处于“高吞吐修复+架构演进”阶段，Issue 关闭速度（3/50）明显低于新增速度，积压呈上升趋势。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 10 个 PR 详情未在数据中完整展示，但从活跃 PR 队列可判断项目推进方向：

- **execute_code 内核治理**：两个 salvage PR 由 @teknium1 接力推进——[#101928](https://github.com/NousResearch/hermes-agent/pull/101928)（内核不再以孤儿进程存续于宿主死亡后）与 [#101927](https://github.com/NousResearch/hermes-agent/pull/101927)（远程内核 idle 回收 + LRU 上限），将本地与远程代码执行的资源管理拉齐。
- **Group Chat 持续性大整合**：[#98307](https://github.com/NousResearch/hermes-agent/pull/98307)（@dokterdok）将 gateway 所有权、跨 gateway 传输、文件与控制面整合为一个可整体测试的分支，对应长期特性需求 [#97681](https://github.com/NousResearch/hermes-agent/issues/97681)，是当前最大的功能性 PR。
- **流式与重试链路加固**：[#101921](https://github.com/NousResearch/hermes-agent/pull/101921)（空回复不再耗尽重试梯）、[#101923](https://github.com/NousResearch/hermes-agent/pull/101923)（中断回合中原始工具标记不再污染对话）。
- **P1 级压缩修复**：[#101922](https://github.com/NousResearch/hermes-agent/pull/101922) 修复 prune rearm 导致超阈值会话被锁定的 P1 问题（salvage 自 #101894，保留原作者署名，社区接力文化良好）。

## 4. 社区热点

1. **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index 陈旧/降级（145 评论）**——自动化看门狗连续触发，`/docs/skills` 依赖的索引重建工作流未按时完成（29.8h vs 26h 上限）。评论量异常高，说明 Skills Hub 文档基础设施长期未根治，是维护自动化流水线的痛点。
2. **[#88584](https://github.com/NousResearch/hermes-agent/issues/88584) 自动化 Nous 集成被阻塞（57 评论）**——`cron/jobs.py` 合并冲突导致 dashboard 更新器停留在旧版本，影响下游 fork（enterkey-io）的同步。
3. **[#97681](https://github.com/NousResearch/hermes-agent/issues/97681) Bot Group Chats 桌面关闭后持续运行（23 评论）**——多设备/多网关场景下“云端大脑”的诉求强烈，基础设施已进 main，剩余生产化工作在 PR #98307 中推进。
4. **[#77111](https://github.com/NousResearch/hermes-agent/issues/77111) RealtimeVoiceProvider ABC RFC（23 评论，👍2）**——四个竞争性 duplex 语音 PR 触发了 AGENTS.md 中"3+ 同类 PR 应设计 ABC 而非排队合并”的规则，社区在讨论插件接口抽象方案，是架构治理的正面信号。

## 5. Bug 与稳定性（按严重程度）

**P2 及以上：**

| 问题 | 状态 | Fix PR |
|---|---|---|
| 压缩 prune 锁定超阈值会话 [#101822/#101922] | P1，待合并 | ✅ [PR #101922](https://github.com/NousResearch/hermes-agent/pull/101922) |
| 密封 venv（uv2nix/Docker）缺 `hermes_state_registry` 声明 → state.db 不可用、会话静默未索引 [#101147](https://github.com/NousResearch/hermes-agent/issues/101147) | P2，打包缺陷 | 未见 |
| MCP 单工具 schema 非法导致整服务器被停用 [#101669](https://github.com/NousResearch/hermes-agent/issues/101669) | P2 | ✅ [PR #101804](https://github.com/NousResearch/hermes-agent/pull/101804) |
| Windows 睡眠/唤醒后 gateway UNCLEAN 退出 [#100025](https://github.com/NousResearch/hermes-agent/issues/100025) | P2，12+ 次复现 | ✅ [PR #100214](https://github.com/NousResearch/hermes-agent/pull/100214) |
| browser_exec 桌面进程内 420s 超时（独立进程 7s） [#96731](https://github.com/NousResearch/hermes-agent/issues/96731) | P2 | 未见 |
| Telegram mid-turn 消息丢失 reply-to 前缀 → 错发收件人 [#101866](https://github.com/NousResearch/hermes-agent/issues/101866) | P2，有实际误发事故 | 未见 |
| `~/.hermes` 符号链接导致 TUI 启动失败 [#101900](https://github.com/NousResearch/hermes-agent/issues/101900) | P2 | 未见 |
| 新建 bot 无克隆源时缺失 model 块 [#101885](https://github.com/NousResearch/hermes-agent/issues/101885) | P2 | 未见 |

**P3 值得关注：** 插件并发 hook 调用被误判为超时丢弃 [#98382](https://github.com/NousResearch/hermes-agent/issues/98382)；Discord 重连挂起（CLOSE-WAIT，bot 假死 3 小时）[#79445](https://github.com/NousResearch/hermes-agent/issues/79445)。

## 6. 功能请求与路线图信号

- **多写者共享会话**：[#101279](https://github.com/NousResearch/hermes-agent/issues/101279) 请求 SESSION_NOT_OWNED 排他性可配置，"one brain on VPS + 多桌面用户”部署模式呼声明确，标记 needs-decision，值得进入路线图讨论。
- **子代理共享内存池**：[#377](https://github.com/NousResearch/hermes-agent/issues/377)（发起人即 teknium1，3 月提出至今）建议 delegate_task 支持受控的跨子代理状态共享——与 Group Chat 持续性、多写者会话同属“ loosening isolation”主题，可能形成一组能力。
- **同步 delegate_task**：[#95522](https://github.com/NousResearch/hermes-agent/issues/95522) 顶层委派可等待结果，是工作流编排的前置需求。
- **适配器能力声明**：[#101897](https://github.com/NousResearch/hermes-agent/issues/101897) 让持有持久通道的适配器声明 `supports_async_delivery`，配合语音 ABC RFC（#77111），插件接口抽象是明显趋势。
- **新插件生态**：[PR #101917](https://github.com/NousResearch/hermes-agent/pull/101917) hf-inspector（HF 模型/GGUF 量化发现）零依赖插件，扩展模型选型能力。

## 7. 用户反馈摘要

- **部署形态多样带来的痛点**：symlink 配置目录、密封 venv（Nix/Docker）、仅代理出口网络（中国大陆 WhatsApp 连接 [#101915](https://github.com/NousResearch/hermes-agent/pull/101915)）、Windows 电源管理——用户在非常规环境下频繁碰壁，修复 PR 也多来自这些用户。
- **生产可靠性诉求**：GLM-5.2 过载 503/529 缺长退避 [#55540](https://github.com/NousResearch/hermes-agent/issues/55540)、Kimi fallback 绕过 schema 清洗 [#100688](https://github.com/NousResearch/hermes-agent/issues/100688)——多 provider fallback 链路的健壮性是生产用户核心关切。
- **UX 瑕疵**：skill 调用后 Desktop 会话标题显示脚手架文本 [#48359](https://github.com/NousResearch/hermes-agent/issues/48359)；Feishu 工具调用输出原始杂乱 [#101920](https://github.com/NousResearch/hermes-agent/issues/101920)；自动 Skill Review 将一次性调查误固化为 Skill [#75423](https://github.com/NousResearch/hermes-agent/issues/75423)。
- **正面信号**：社区出现规律的 salvage PR 文化（保留原作者署名的接力修复），RFC 驱动的接口治理，均为项目健康度的积极指标。

## 8. 待处理积压

- **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)**（7/18 创建，145 评论）：Skills index 降级持续近两个月未根治，建议优先修复 workflow 调度或看门狗阈值。
- **[#6133](https://github.com/NousResearch/hermes-agent/issues/6133)**（4/8 创建）：`run_agent.py:7479` 的 `vars()` TypeError，5 个月未修，属间歇性崩溃。
- **[#48359](https://github.com/NousResearch/hermes-agent/issues/48359)**（6/18 创建）：会话标题显示脚手架文本，影响所有 skill 用户的第一印象。
- **[#48962](https://github.com/NousResearch/hermes-agent/issues/48962)**（6/19 创建）：`hermes update` 应跳过无变化时的依赖重装，影响所有升级用户的等待时间。
- **[#55540](https://github.com/NousResearch/hermes-agent/issues/55540)**（6/30 创建）：provider 过载退避不可配置，生产用户反复遭遇。
- **PR 积压**：40 个待合并 PR 中，[#79051](https://github.com/NousResearch/hermes-agent/pull/79051)（Slack 告警解析）自 8/5 挂起近一个月，且与今日新增的 [#101926](https://github.com/NousResearch/hermes-agent/pull/101926) 存在重叠，建议合并评估；[#98307](https://github.com/NousResearch/hermes-agent/pull/98307) 为大型特性分支，需尽早评审避免持续 rebase 成本。

---

**健康度小结**：贡献活跃度优秀（修复 PR 质量高、社区接力文化成熟），但 Issue 关闭率低（3/50）且 P2 级 Bug 多于 fix PR 数量，Windows/打包/provider 兼容性三条战线需要更多维护者带宽。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-09-03）

## 1. 今日速览

PicoClaw 今日整体活跃度处于**低位平稳**状态：过去 24 小时无新开 Issue、无新版本发布，仅 1 条 PR 活动记录（[#1349](https://github.com/sipeed/picoclaw/pull/1349) 关闭）。该 PR 为 QQ 渠道富媒体消息能力增强，历时近 6 个月后关闭，属于功能性贡献而非 bug 修复。综合来看，项目当前处于维护节奏，无紧急稳定性事件，但也缺乏新的社区需求输入。

## 2. 版本发布

今日无新版本发布。（最新 Releases 列表为空，项目近期未通过 GitHub Release 渠道发布。）

## 3. 项目进展

- **PR [#1349](https://github.com/sipeed/picoclaw/pull/1349)** `[CLOSED]` — `feat(qq): support parsing and replying to more attachment types`
  - 作者：@aishannon｜创建于 2026-03-11，更新于 2026-09-02
  - 内容：
    1. 支持 QQ 频道 emoji 结构解析；
    2. 支持接收处理 QQ 频道的语音、图片、视频、文件消息；
    3. 支持以本地语音、图片、视频、文件附件回复（发送前先上传）；
    4. 回复优先使用 Markdown 消息，失败时降级处理。
  - 意义：显著补齐 QQ 渠道的富媒体双向交互能力，是 channel 域的重要功能增强。今日关闭该 PR，无论最终是合并落地还是关闭退出，QQ 渠道的多媒体消息支持方向已有明确进展信号，建议关注该能力是否会在后续版本中正式发布。

## 4. 社区热点

今日无高热度讨论：Issues 活跃 0 条，PR 评论数据缺失（#1349 无 👍 反应）。社区互动处于静默期，暂无热点诉求可提炼。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题。稳定性风险面保持清洁。

## 6. 功能请求与路线图信号

- 今日无新功能请求（Issue 为 0）。
- 结合 [#1349](https://github.com/sipeed/picoclaw/pull/1349)，可观察到路线图信号：**消息渠道富媒体化（QQ 频道 emoji / 语音 / 图片 / 视频 / 文件）** 是明确的开发方向。若该 PR 的改动被纳入主干，下一个版本有望带来 QQ 渠道附件消息的完整收发支持，建议关注 channel 域相关后续动向。

## 7. 用户反馈摘要

今日无 Issue 评论新增，暂无法提炼用户反馈。

## 8. 待处理积压

今日数据中未显示长期未响应的 Issue 或 PR。唯一的长期项 [#1349](https://github.com/sipeed/picoclaw/pull/1349)（挂起近 6 个月）已于昨日更新并关闭，积压情况良好。

**维护者提示**：项目当前 Issue 输入为零，建议通过示例文档、渠道适配进展公告等方式激活社区反馈，以便收集真实使用痛点、验证 QQ 富媒体功能的实际落地效果。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-09-03

## 1. 今日速览

NanoClaw 今日保持高活跃度：过去 24 小时共有 **3 条 Issue 更新（全部为活跃/新开，0 关闭）** 和 **20 条 PR 更新（17 待合并，3 已合并/关闭）**，无新版本发布。核心团队（@zvi-fried、@santisiri）持续推动 provider 契约化重构，这是当前最庞大的工作主线（涉及 7+ 个连环 PR）。社区贡献质量较高，多位外部贡献者（@orgads、@prathish-ks、@davekim917）围绕安全修复和可扩展性提出深度讨论。整体看，项目处于“重构深水区 + 供应链安全加固”阶段，PR 积压量（17 条待合并）值得维护者关注评审节奏。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日 3 条 PR 关闭/合并：

- **[#2973](https://github.com/nanocoai/nanoclaw/pull/2973)（CLOSED）** — 供应链安全：将 `minimumReleaseAge: 4320` 从 `pnpm:` 键下提升至顶层，激活“新发布包需等待 3 天才可安装”的防投毒门控。注意：关闭而非合并，[core-team 的替代实现 #3492](https://github.com/nanocoai/nanoclaw/pull/3492) 仍处 OPEN 状态并新增回归测试。
- **[#3593](https://github.com/nanocoai/nanoclaw/pull/3593)（CLOSED）** — 固定 Codex provider 中 `speed → service_tier` 的渲染行为测试（补充 #3584）。
- **[#3672](https://github.com/nanocoai/nanoclaw/pull/3672)（CLOSED）** — 修正 skill-directives 测试中对 Slack 原始文本文件的预期。

整体进展以 **provider 契约化重构系列** 为主轴：[#3584](https://github.com/nanocoai/nanoclaw/pull/3584)（Codex 契约）、[#3585](https://github.com/nanocoai/nanoclaw/pull/3585)（host 契约）、[#3586](https://github.com/nanocoai/nanoclaw/pull/3586)（setup 契约 + 安装校验器）、[#3588](https://github.com/nanocoai/nanoclaw/pull/3588)（OpenCode 契约）、[#3591](https://github.com/nanocoai/nanoclaw/pull/3591)（指令渲染核心化）、[#3592](https://github.com/nanocoai/nanoclaw/pull/3592)（新增 `speed` 组级配置属性）今日均有更新活动。该系列完成后将显著收敛 provider 自由度，属于架构级推进。

今日新提交的重要修复 PR：
- **[#3703](https://github.com/nanocoai/nanoclaw/pull/3703)** — 投递逻辑不再对已断开的适配器浪费 3 次重试（检查 `isConnected()`）。
- **[#3702](https://github.com/nanocoai/nanoclaw/pull/3702)** — `ncl tasks run` 立即触发 reconcile 队列，而非等待最长 60 秒的 resync 周期。

## 4. 社区热点

- **[#3529](https://github.com/nanocoai/nanoclaw/issues/3529)**（2 条评论，8/25 开、今日更新）— 最热讨论。update-nanoclaw 的 skill 刷新机制将 `src/channels/index.ts` 中所有 channel 导入视为 skill 产物，导致用户自写适配器**校验失败或被覆盖**，且无 opt-out 选项。诉求：尊重用户自有代码边界。
- **[#3704](https://github.com/nanocoai/nanoclaw/issues/3704)**（今日新开）— fork 维护者 @davekim917 请求在 `SqliteAgentMailbox` 上开放受保护的 session-assembly 钩子以便子类化，反映重度定制用户对扩展缝（seam）的持续需求。
- **[#3701](https://github.com/nanocoai/nanoclaw/issues/3701)** — 同一用户请求 `validateSpec` 支持 gateway 声明的凭据通道（24 个 agent 组、每组独立凭据场景），是多租户网关部署的真实需求。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 状态 |
|---|---|---|
| **高（安全）** | 供应链：`minimumReleaseAge` 门控因配置嵌套在 `pnpm:` 键下而未生效（[#3492](https://github.com/nanocoai/nanoclaw/pull/3492)，继 [#2973](https://github.com/nanocoai/nanoclaw/pull/2973) 之后） | ✅ 已有 fix PR，待合并 |
| **高（安全）** | `validateSpec` 存在 allowlisted-extra 挂载绕过（mount bypass）（[#3680](https://github.com/nanocoai/nanoclaw/pull/3680)） | ✅ 已有 fix PR，待合并 |
| **高（升级阻断）** | 本地适配器被 update skill 刷新覆盖/校验失败，无 opt-out（[#3529](https://github.com/nanocoai/nanoclaw/issues/3529)） | ❌ 暂无 fix PR |
| **中** | 适配器断连时投递浪费全部 3 次重试（[#3703](https://github.com/nanocoai/nanoclaw/pull/3703)） | ✅ 今日提交 fix |
| **中** | Teams 中含冒号的用户 ID 导致卡片点击授权与发送者解析不一致（[#3596](https://github.com/nanocoai/nanoclaw/pull/3596)） | ✅ 已有 fix PR |
| **中** | gateway 模式下 `host.docker.internal` 的 HTTP MCP server 不可达（[#3597](https://github.com/nanocoai/nanoclaw/pull/3597)） | ✅ 已有 fix PR |
| **中** | 出站文件缺少 mime type 导致 Teams 拒收（[#3674](https://github.com/nanocoai/nanoclaw/pull/3674)） | ✅ 已有 fix PR |
| **低** | `send_card` 对被 bridge 丢弃的 callback 按钮误报成功（[#3427](https://github.com/nanocoai/nanoclaw/pull/3427)） | ✅ 已有 fix PR |
| **低** | WhatsApp 入站媒体未暂存到容器可读路径（[#3113](https://github.com/nanocoai/nanoclaw/pull/3113)） | ✅ 已有 fix PR |

## 6. 功能请求与路线图信号

- **`speed` 推理分层配置**（[#3592](https://github.com/nanocoai/nanoclaw/pull/3592)，core-team）：与 #3584/#3588/#3593 联动，已形成完整实现链，**极可能进入下一版本**。
- **Provider 契约体系**（#3584–#3591 系列）：core-team 主导，明确指向“核心拥有语义、provider 只声明事实”的架构方向，是下版本的确定性内容。
- **扩展钩子类请求**（[#3704](https://github.com/nanocoai/nanoclaw/issues/3704)、[#3701](https://github.com/nanocoai/nanoclaw/issues/3701)）：均为“是否接受”式询问（Would you accept），与契约化重构方向一致（提供声明式接缝），被采纳概率较高，但需维护者表态。
- **AIML API 集成请求**（[#3573](https://github.com/nanocoai/nanoclaw/pull/3573)）：第三方商业集成，属于常规 community PR。

## 7. 用户反馈摘要

- **升级体验痛点**：自写 channel 适配器用户（#3529）在升级时遭遇代码被识别为 skill 产物而阻断/覆盖，反映 update-nanoclaw 对“用户自有代码”缺乏识别机制，影响深度定制用户的升级信心。
- **重度 fork 用户的声音**：davekim917 连发两条 Issue（#3701、#3704），说明存在以 NanoClaw 为基座的二次开发群体，其诉求集中在**子类化安全钩子**与**多组凭据注入**，现有 seam 大体好用但仍有缺口。
- **多平台消息用户**：Teams 相关问题集中（#3596、#3674）， mime type 与用户 ID 命名空间这类细节问题实际影响卡片交互可用性。
- **正面信号**：外部贡献者提交的 PR 普遍遵循模板、附带测试，社区工程文化成熟度高。

## 8. 待处理积压

- **[#3529](https://github.com/nanocoai/nanoclaw/issues/3529)**（开于 8/25，升级阻断类，尚无 fix PR）— 建议优先回应。
- **[#3113](https://github.com/nanocoai/nanoclaw/pull/3113)**（开于 7/21，已滞留 6 周的 WhatsApp 媒体修复）— 最久未合并的社区 PR。
- **[#3573](https://github.com/nanocoai/nanoclaw/pull/3573)**（AIML API 集成，开于 8/27）— 需要维护者表态是否接受商业集成。
- **供应商重构系列**（#3584–#3592，共 6 个 core-team PR 自 8/27 起堆积）— 相互关联，建议规划统一合并窗口，避免长期分叉。
- 整体 **17 条 PR 待合并、0 Issue 关闭**，评审吞吐是当前项目健康度的关键瓶颈。

---
*数据来源：GitHub API（过去 24 小时），由开源项目分析师生成。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-09-03

## 1. 今日速览

IronClaw 今日保持高活跃度：过去 24 小时共更新 **10 条 Issues（5 开 / 5 关）** 和 **26 条 PRs（15 待合并 / 11 已合并或关闭）**，无新版本发布。今日主线清晰：核心贡献者 @italic-jinxin 发起 WebUI v2 前端 TypeScript 技术债的系统性清偿（170 文件 / 约 61,800 行含 `@ts-nocheck`），配套 4 个系列 Issue 与 4 个系列 PR 同步推进。同时 @BenKurrek 与 @henrypark133 在频道集成（Slack 渐进式回复）、LLM 提示缓存、子代理审批可见性等核心功能上持续落地。整体节奏为“重构还债 + 功能纵深”双轨并行，项目健康度良好。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

**前端类型债务治理（今日最大主题）**：
- [PR #8037](https://github.com/nearai/ironclaw/pull/8037)：移除 40 个冗余 `@ts-nocheck`，并引入基线 + CI ratchet 机制防止新增抑制指令（待合并）
- [PR #8038](https://github.com/nearai/ironclaw/pull/8038)（XL）：为前端 API 边界引入运行时解码器与类型化对象边界（待合并）
- [PR #8040](https://github.com/nearai/ironclaw/pull/8040)：清除全部 94 个测试侧 `@ts-nocheck`，建立类型化测试基础设施（待合并）
- [PR #8039](https://github.com/nearai/ironclaw/pull/8039)（XL，已关闭）：移除 64 个生产组件/hooks 的类型抑制——对应 [Issue #8035](https://github.com/nearai/ironclaw/issues/8035) 已关闭

**已合并/关闭的重要功能与修复**：
- [PR #8051](https://github.com/nearai/ironclaw/pull/8051)：修复 Slack/Telegram 渐进式回复拼接所有模型调用文本的问题——答案仅为当前模型调用的输出，早期输出归为叙述
- [PR #8050](https://github.com/nearai/ironclaw/pull/8050)：CI 大优化——Reborn 测试 lane 不再每次冷编译完整依赖闭包（此前 0% 缓存命中），引入稳定 hermetic Cargo home 与推送式共享缓存
- [PR #8042](https://github.com/nearai/ironclaw/pull/8042)：修复两个导致合并队列失败的 serve smoke 测试 flake，附回归测试
- [PR #8045](https://github.com/nearai/ironclaw/pull/8045)：CLI smoke 测试等待真实 TCP 连接就绪而非仅 banner
- [PR #8006](https://github.com/nearai/ironclaw/pull/8006)（XL，已关闭）：持久化渐进式回复 + 原生 Slack Agent UI，配套 [PR #8010](https://github.com/nearai/ironclaw/pull/8010) 统一 WebUI session-event 传输仍在推进
- [PR #8003](https://github.com/nearai/ironclaw/pull/8003)：Rust 依赖批量升级（17 项）已关闭

今日项目在代码质量、CI 效率、多频道体验三个方向均有实质性推进，尤其 CI 缓存改造预计将显著缩短 PR 验证周期。

## 4. 社区热点

- **[Issue #8041](https://github.com/nearai/ironclaw/issues/8041)**（开放，@standardtoaster）：指出 `FailureKind` 错误分类错误会将模型送入不可恢复状态——`InputEncode` 意味着“修正参数重试”，若误报会导致模型反复撞墙。与已开放的 [PR #7985](https://github.com/nearai/ironclaw/pull/7985)（内存文档缺失被误报为 `InputEncode`）属同一语义设计主题，反映社区对**错误分类对模型自主恢复行为影响**的深度关注
- **[@italic-jinxin 的类型化系列](https://github.com/nearai/ironclaw/issues/8032)**（#8032–#8036，5 个 Issue 联动）：披露技术债规模——约 1,354 个诊断错误待解决，配套 ratchet 机制防止债务回潮，是典型的工程治理最佳实践
- **[PR #8046](https://github.com/nearai/ironclaw/pull/8046)**：子代理审批/凭证门控不可见问题——此前子 run 被收件箱观察者过滤，父级完全无感知，属子代理架构的关键 UX 补全

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | [Issue #8041](https://github.com/nearai/ironclaw/issues/8041)：错误 FailureKind 导致模型不可恢复，影响 Agent 自主循环可靠性 | 开放，与 PR #7985 主题相关，尚无直接 fix PR |
| 中 | Slack/Telegram 回复内容错误拼接历史模型调用文本（[PR #8051](https://github.com/nearai/ironclaw/pull/8051)） | ✅ 已关闭（修复落地） |
| 中 | 新 Claude 家族（`claude-fable-*` 等）未命中缓存 allowlist，静默降级为无缓存（[PR #8044](https://github.com/nearai/ironclaw/pull/8044)） | Fix PR 开放待合并 |
| 中 | serve smoke 测试 harness 误杀服务器导致合并队列失败（[PR #8042](https://github.com/nearai/ironclaw/pull/8042)） | ✅ 已关闭 |
| 低 | CLI smoke 测试就绪判定不可靠（[PR #8045](https://github.com/nearai/ironclaw/pull/8045)） | ✅ 已关闭 |
| 低 | 流式文本 O(N·k) 重复净化导致性能退化（[PR #8043](https://github.com/nearai/ironclaw/pull/8043)） | Fix PR 开放待合并 |

## 6. 功能请求与路线图信号

- **[PR #8010](https://github.com/nearai/ironclaw/pull/8010)**：Web 应用 run 完成通知 + 统一 session-event SSE 传输，实现既定设计文档，是多频道体验路线的下一步
- **[PR #8046](https://github.com/nearai/ironclaw/pull/8046)**：标注为 "R3 slice 3a"，表明子代理审批链路（R3）是明确的分阶段路线图，后续 slice 可期
- **[PR #8044](https://github.com/nearai/ironclaw/pull/8044)**：向 OpenAI Responses API 发送 `prompt_cache_key`，显示对新兴模型家族的前瞻适配
- **[Issue #8036](https://github.com/nearai/ironclaw/issues/8036) / #8034**：前端类型化测试基础设施与共享 API 类型，暗示 WebUI v2 将成为长期维护重点

## 7. 用户反馈摘要

今日 Issue 多为维护者主导的工程治理，直接终端用户反馈有限，但可提炼：
- **Slack/Telegram 集成用户**遭遇回复文本混乱（模型叙述与最终答案混在一起），[PR #8051](https://github.com/nearai/ironclaw/pull/8051) 的修复描述中包含真实 QA 会话证据，说明渐进式回复在实际 IM 场景已投入使用且痛点真实
- **Agent 可靠性诉求**：#8041 和 #7985 反映用户/开发者期望工具失败时模型能自主正确恢复，错误语义准确性是自主 Agent 的核心信任基础
- CI 依赖冷编译（PR #8050 描述中三次参考运行缓存命中率为 0）长期拖慢贡献者反馈循环，是内部开发体验的主要不满点，今日已解决

## 8. 待处理积压

- **[Issue #8041](https://github.com/nearai/ironclaw/issues/8041)**（0 评论）：错误分类不可恢复问题尚无直接修复，建议维护者优先关联/回应，因其影响所有工具调用失败路径的模型行为
- **[PR #7985](https://github.com/nearai/ironclaw/pull/7985)**（@standardtoaster，8/28 提出，开放 5+ 天）：内存读取错误分类修复，与 #8041 高度相关，建议一并评审推进
- **[PR #7835](https://github.com/nearai/ironclaw/pull/7835)**（dependabot，8/23 提出，开放 11 天）：GitHub Actions 升级（含 `setup-node` 4→7 大版本跳跃），需注意破坏性变更验证
- **[PR #7988](https://github.com/nearai/ironclaw/pull/7988)**（CI bot，8/29 提出的夜间知识图谱刷新）持续待合并，建议例行合并避免快照过期

---
*数据来源：GitHub API（Issues/PRs/Releases），统计窗口为过去 24 小时。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 — 2026-09-03

## 1. 今日速览

今日项目活跃度中等偏温和：过去 24 小时共 5 条 Issue 更新（3 开/活跃、2 关闭）、6 条 PR 更新（4 待合并、2 关闭），无新版本发布。今日更新多为 stale 机制触发的旧议题活跃和官方贡献者的 UI 修复（IM 机器人卡片布局），社区侧的深度技术讨论（并发安全、MCP 国际化等）仍停留在积压状态，等待维护者响应。整体呈现“官方小步迭代 + 社区贡献沉淀”的格局。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

- **PR #2599 已关闭**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2599)）：IM 多实例机器人卡片限制为两列响应式布局，空卡片紧凑化并垂直居中。渲染层（area: renderer + area: im）的小幅 UI 打磨，未合并即关闭，可能被后续提交替代或需返工。
- **PR #2598 已关闭**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2598)）：修复 Windows 端指南问题（liuzhq/fix guide win），同样关闭未合并，具体原因未在摘要中体现。

> 今日无合并记录，两个关闭的 PR 均由 @liuzhq1986 提交，推测为分支调整或方案迭代。项目进展有限，主要精力集中在 IM 模块渲染优化。

## 4. 社区热点

- **Issue #1082**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1082)）：用户引用国家互联网应急中心合规要求，询问 `openclaw.version: v2026.3.2` 是否支持最新版 openclaw。诉求本质是**合规与依赖安全**，值得维护者正面回应版本升级计划。
- **PR #1079**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1079)）：Cowork「当前进程」右侧面板 + diff 红绿高亮视图，是社区对**执行透明度**的强需求，属于体验升级类重量级贡献。

## 5. Bug 与稳定性

按严重程度排列（均为存量未修复）：

1. **高：CoworkRunner 无重入保护**（Issue [#1089](https://github.com/netease-youdao/LobsterAI/issues/1089)）：并发调用 startSession/continueSession 导致流式消息损坏与重复，IPC 层 fire-and-forget 加剧问题。有间接相关修复 PR #1087（修重复错误消息），但未修根因。
2. **高：Prefetch 跨轮次污染**（Issue [#1088](https://github.com/netease-youdao/LobsterAI/issues/1088)）：`prefetchChannelUserMessages` 不校验 `turnToken`，可能将 Turn A 的数据写入 Turn B 的 pending 队列。无对应 fix PR。
3. **中：定时任务失败无 IM 告警**（PR [#1078](https://github.com/netease-youdao/LobsterAI/pull/1078)）：失败静默，用户易遗漏，已有修复 PR 待 review。
4. **低：continueSession 双重错误消息**（PR [#1087](https://github.com/netease-youdao/LobsterAI/pull/1087)）：已有修复 PR 待合并。
5. **低：文档 404**（Issue [#1556](https://github.com/netease-youdao/LobsterAI/issues/1556)，已关闭）：IM 机器人配置指南链接失效，以 stale 关闭而非实际修复，文档链接可能仍不可用。

## 6. 功能请求与路线图信号

- **文件卡片与 Markdown 预览**（Issue [#1552](https://github.com/netease-youdao/LobsterAI/issues/1552)，已关闭/stale）：Write 工具产物应用内预览，写作/文档生成场景核心体验。虽被 stale 关闭，但与 #1079 的 diff 视图方向一致，属高价值候选功能。
- **工具执行透明面板 + diff 视图**（PR #1079）：功能完整、代码量可观（~400 行新组件），若被 review 合并将显著提升 Cowork 可观测性，是下一版本最可能纳入的社区功能。
- **定时任务失败告警推送**（PR #1078）：与 IM 集成方向契合，实现成本低，纳入概率高。
- **MCP 国际化与 UI 细节**（PR #1081）：维护者 @gongzhi-netease 提交，表明 i18n 完善在官方议程内。

## 7. 用户反馈摘要

- **使用场景**：用户主要在 IM 集成（机器人配置）、定时任务（cron）、Cowork 协作、文档生成场景中使用 LobsterAI。
- **痛点**：
  - Agent 生成文件后无法应用内预览，需手动切文件管理器，写作场景体验差（#1552）；
  - 定时任务失败无通知，只能主动巡检（#1078）；
  - 错误消息重复展示造成困惑（#1087）；
  - 文档链接失效且未实际修复（#1556）。
- **合规诉求**：国内用户对依赖组件版本合规（CERT 要求）敏感（#1082），反映出企业级用户群体存在。
- **社区质量**：社区贡献者 bug 报告质量高（附代码行号定位与根因分析，如 #1088、#1089），但长期得不到官方回应，存在贡献流失风险。

## 8. 待处理积压

以下议题均标记 `[stale]` 且超过 5 个月未实质响应，建议维护者优先处理：

| 编号 | 类型 | 主题 | 建议 |
|---|---|---|---|
| [#1088](https://github.com/netease-youdao/LobsterAI/issues/1088) | Bug | Prefetch 跨轮次污染 | 高优先级，涉及数据正确性 |
| [#1089](https://github.com/netease-youdao/LobsterAI/issues/1089) | Bug | CoworkRunner 并发安全 | 高优先级，与 #1087 相关 |
| [#1082](https://github.com/netease-youdao/LobsterAI/issues/1082) | 合规 | openclaw 版本支持 | 需官方明确升级路线 |
| [PR #1078](https://github.com/netease-youdao/LobsterAI/pull/1078) | feat | 定时任务失败告警 | 成熟度高，建议尽快 review |
| [PR #1079](https://github.com/netease-youdao/LobsterAI/pull/1079) | feat | 进程面板 + diff 视图 | 体验提升显著，建议 review |
| [PR #1081](https://github.com/netease-youdao/LobsterAI/pull/1081) | fix | MCP i18n + 滚动条 UI | 小改动，快速合并 |
| [PR #1087](https://github.com/netease-youdao/LobsterAI/pull/1087) | fix | 重复错误消息 | 小改动，快速合并 |

**健康度提示**：社区贡献的 4 个 PR 全部处于 stale 待响应状态，且多个高价值 Issue 被 stale 机制自动关闭而非实际解决。建议团队建立定期 triage 机制，避免开源社区贡献持续流失。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-09-03

## 1. 今日速览

Moltis 过去 24 小时整体活跃度中等偏上，但以「开放」为主、「收敛」为零：3 个 PR 全部处于待合并状态，2 个 Issue 均为新开且无一关闭，3 个版本发布但均未附带详细 Release Notes。核心贡献者 @GTanger 单日贡献了全部 Issue 和 2/3 的 PR，社区贡献呈现高度集中态势。功能方向上，推理能力增强（max effort level）与 Hook 生命周期补全是当前主线；另有 dependabot 例行依赖维护。需关注维护者对积压 PR 的合并节奏，以及版本发布缺少变更说明的规范化问题。

## 2. 版本发布

过去 24 小时发布 3 个版本，均为日期式版本号，且**未附带任何 Release Notes / Changelog**：

| 版本 | 日期 | 说明 |
|---|---|---|
| [20260902.03](https://github.com/moltis-org/moltis/releases) | 2026-09-02 | 无变更说明 |
| [20260902.02](https://github.com/moltis-org/moltis/releases) | 2026-09-02 | 无变更说明 |
| [20260902.01](https://github.com/moltis-org/moltis/releases) | 2026-09-02 | 无变更说明 |

⚠️ **迁移注意**：Issue #1255 明确报告 `20260902.01` 存在 Hook 未派发的 Bug，且当前 3 个待合并 PR 均未进入本批版本。建议用户升级前关注 #1257 的合并状态。同时建议维护者为高频发布补充变更说明，降低用户跟进成本。

## 3. 项目进展

**今日无 PR 被合并或关闭**（3 个 PR 全部处于 OPEN 待合并状态）。待合并内容如下：

- **[PR #1257](https://github.com/moltis-org/moltis/pull/1257) fix(hooks): complete lifecycle dispatch** — 同时回应 Issue #1254 与 #1255：为 `BeforeToolCall` / `AfterToolCall` / `ToolResultPersist` 补充可选 `tool_call_id`（保持旧 JSON payload 兼容），并补派发此前只声明未实现的 `AgentEnd`、`MessageSending`、`MessageSent` 事件。**一日内完成「Issue 提出 → 修复 PR」闭环，响应速度优秀**，是该 PR 是当前最优先的合并候选。
- **[PR #1253](https://github.com/moltis-org/moltis/pull/1253) feat(reasoning): add max effort level** — 在共享 `ReasoningEffort` schema 中新增 `max` 档位，支持 `@reasoning-max` 模型后缀解析；对 OpenAI Codex Responses API 原样透传，对不支持独立最高档位的 provider 做钳制处理，并同步更新 UI 选择器与多语言翻译。功能覆盖面完整（schema + 解析 + 透传 + UI + i18n），成熟度较高。
- **[PR #1256](https://github.com/moltis-org/moltis/pull/1256) chore(deps): bump browserslist 4.28.2 → 4.28.8** — dependabot 例行依赖升级，低风险，建议尽快合并以消除安全审计噪音。

**进展评估**：项目在 Hook 可观测性/可扩展性和推理控制粒度两个方向均有实质性推进，但因今日零合并，整体前进幅度需待维护者 review 后兑现。

## 4. 社区热点

今日两条 Issue 均来自 @GTanger，评论数为 0，尚无形成讨论热度，但技术含量较高：

- **[Issue #1255](https://github.com/moltis-org/moltis/issues/1255)**（Bug）：`AgentEnd`、`MessageSending`、`MessageSent` 三个 Hook 在配置/文档中已声明，但运行时从未派发。诉求指向**外部集成可靠性**——依赖 Hook 做日志、审计或消息拦截的下游工具会静默失效，属于「契约与实现不一致」类问题。
- **[Issue #1254](https://github.com/moltis-org/moltis/issues/1254)**（Feature）：请求在 Hook payload 中加入稳定的 `tool_call_id`。Moltis 的 shell hook 是 per-event 进程模型，`BeforeToolCall` 与 `AfterToolCall` 之间没有共享标识，导致**无法端到端关联一次工具调用**。诉求指向可观测性与调试体验，是典型的深度用户/集成开发者需求。

值得注意的是，两个 Issue 的 Preflight Checklist 完整规范（已搜索重复、已在最新版复现、确认无凭据泄露），显示报告者工程素养高，Issue 质量对维护者友好。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 🔴 **高**（功能性缺陷，影响外部集成契约） | [#1255](https://github.com/moltis-org/moltis/issues/1255) 三个已声明 Hook 事件（`AgentEnd` / `MessageSending` / `MessageSent`）从未被派发，最新版 `20260902.01` 可复现 | OPEN | ✅ 已有 [#1257](https://github.com/moltis-org/moltis/pull/1257)，同日提交，待 review/合并 |

无崩溃、数据损坏或回归类报告。今日稳定性风险集中在 Hook 子系统的契约缺口上，且修复已在管道中，风险可控。

## 6. 功能请求与路线图信号

- **稳定的 `tool_call_id`（[#1254](https://github.com/moltis-org/moltis/issues/1254)）**：✅ 已由 [PR #1257](https://github.com/moltis-org/moltis/pull/1257) 实现且刻意保持旧 payload 向后兼容，**极大概率进入下一版本**。
- **Reasoning `max` 档位（[PR #1253](https://github.com/moltis-org/moltis/pull/1253)）**：非 Issue 驱动的主动功能开发，涉及 provider 差异化适配与多语言，显示推理控制是维护者当前投入方向，合并后将成为新卖点。
- **路线图信号综合**：近期主线清晰指向「**Agent 生命周期 Hook 完整化 + 工具调用可追踪性 + 推理努力程度精细化**」，即面向企业级集成与深度可观测性的能力建设。

## 7. 用户反馈摘要

今日两条 Issue 评论均为 0，缺乏社区评论数据；从 Issue 正文可提炼的真实痛点：

- **集成开发者痛点**：Hook 声明与实际派发不一致，导致基于 Hook 的自动化流水线静默失效，且难以提前发现（#1255）。
- **调试/观测痛点**：进程级 per-event Hook 模型下缺乏跨事件关联 ID，追踪一次完整工具调用（前置 → 执行 → 结果落盘）只能靠启发式匹配（#1254）。
- **正面信号**：报告者持续在最新版本上验证（两 Issue 均基于 `20260902.01`），说明其为高频跟进的深度用户，而非一次性报告。

## 8. 待处理积压

- **[PR #1257](https://github.com/moltis-org/moltis/pull/1257)**：修复高严重度 Bug #1255，且已完成 Issue→PR 闭环，**仅差 review/合并**。建议维护者最优先处理。
- **[PR #1253](https://github.com/moltis-org/moltis/pull/1253)**：功能完整度高（schema/解析/透传/UI/i18n 全链路），如无异议建议尽快合并以纳入下一版本。
- **[PR #1256](https://github.com/moltis-org/moltis/pull/1256)**：dependabot 依赖升级，低风险快速通道。
- **流程建议**：3 个版本发布均无 Release Notes，且 Bug #1255 出现在已发布版本 `20260902.01` 中——建议建立「发布说明 + 已知问题清单」机制，避免用户在含已知缺陷版本上踩坑。

---
*数据来源：Moltis GitHub 仓库过去 24 小时活动快照。链接均可追溯至对应 Issue/PR。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 — 2026-09-03

## 1. 今日速览

今日 CoPaw 项目迎来重大节点：**v2.2.0 正式稳定版发布**，同日已完成 2.2.1b1 版本号提升（PR #7522），进入下一迭代周期。过去 24 小时社区活跃度维持高位：Issues 更新 27 条（新开/活跃 16，关闭 11），PR 更新 27 条（待合并 20，已合并/关闭 7）。值得注意的是，今日出现一则**安全沙箱被突破的报告（#7511，已关闭）**，叠加 #7443 危险指令绕过问题，安全类议题成为社区关注焦点。整体来看，项目处于“稳定版发布 + 快速消化 Beta 反馈”的良性节奏中。

## 2. 版本发布

### v2.2.0（Stable）🔗 [Release](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0)

**新增功能：**
- **QwenPaw Hub**：支持自托管多用户 Hub，提供本地进程或 Docker 运行时、工作区级访问控制、凭证管理及反向代理支持（[#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112)）
- **QwenPaw Data** 相关增强（发布说明截断，详见 Release 页）

**迁移注意事项：**
- 配套发布 v2.2.0-beta.7（🔗 [链接](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.7)），包含内存后端 embedding 维度归一化修复（PR #7465）、WebUI 暗色模式覆盖等修复
- ⚠️ 注意 #7474 反馈：合并 PR #7337 后 `ModelInfo.max_tokens` 已迁移为 `max_output_length`，**旧自定义提供商 JSON 配置可能加载失败**，建议升级后检查 custom provider 配置文件
- GitHub Actions 已自动开启 v2.2.0 全平台安装验证（[#7515](https://github.com/agentscope-ai/QwenPaw/issues/7515)）
- 后续版本：2.2.1b1 版本号已由 PR [#7522](https://github.com/agentscope-ai/QwenPaw/pull/7522) 提升

## 3. 项目进展

今日合并/关闭的重要 PR：

| PR | 内容 | 意义 |
|---|---|---|
| [#7348](https://github.com/agentscope-ai/QwenPaw/pull/7348) | v2.2.0 Release Notes | 稳定版发布流程完成 |
| [#7517](https://github.com/agentscope-ai/QwenPaw/pull/7517) | 官网更新至 v2.2.0 | 文档同步 |
| [#7501](https://github.com/agentscope-ai/QwenPaw/pull/7501) | Agent 模型路由设置 | 子 Agent 模型配置、fallback 模型开关与范围选择，修复了 #7493 报告的面板不可达问题 |
| [#7392](https://github.com/agentscope-ai/QwenPaw/pull/7392) | Console 独立 Fallback 模型设置页 | 将 fallback 配置与 Embedding 模型设置解耦 |
| [#7523](https://github.com/agentscope-ai/QwenPaw/pull/7523) | 流式生成期间同步会话映射 | **直接解决 #7512**（生成中无法切换会话），支持多会话并行生成 |
| [#7508](https://github.com/agentscope-ai/QwenPaw/pull/7508) | Make-Skill v2（迭代至 #7509） | 审批驱动的 Skill 草稿-发布工作流 |

**评估**：v2.2.0 发布当日即完成官网、文档、验证自动化闭环，同日出现针对 2.2.1 的修复 PR（#7521 上下文压力下折叠已消费思考块、#7524 免费/Pro 模型分页），显示主干开发未因发布而停顿，节奏健康。

## 4. 社区热点

1. **[#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511)**（7 评论，已关闭）— “安全沙箱被突破”报告，附知乎分析文章，当日提交当日关闭，官方响应迅速。与 [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443)（危险指令绕过，6 评论，仍开放）共同构成安全议题主线。
2. **[#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450)**（7 评论）— 主 Agent + 多子 Agent 架构下，主 Agent 不主动查询子 Agent 状态，需用户手动追问“进度如何”。诉求核心：**多 Agent 编排缺乏主动进度监控与失败自愈**。
3. **[#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417)**（6 评论，已关闭）— Console 流式输出中出现大段重复文本块，涉及 SSE event replay 路径。
4. **[#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505)**（4 评论）— 访问局域网 LLM Server（LM Studio）频繁 client disconnect 直至超时，反映**私有化部署/本地模型用户**的连通性痛点。

## 5. Bug 与稳定性（按严重程度排列）

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 严重 | [#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511) | 安全沙箱被突破 | 已关闭（官方已处理，建议关注后续公告） |
| 🔴 严重 | [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) | 危险指令容易绕过防护 | 开放；相关 PR [#7520](https://github.com/agentscope-ai/QwenPaw/pull/7520)（受保护执行契约）今日提交 |
| 🟠 高 | [#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447) | 长上下文场景早期记录彻底丢失，任务无法继续 | 开放；相关 PR [#7521](https://github.com/agentscope-ai/QwenPaw/pull/7521)（思考块折叠）可能缓解 |
| 🟠 高 | [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) | ReMe 后台 embedding 任务静默失败，新记忆未被索引 | 开放 |
| 🟡 中 | [#7431](https://github.com/agentscope-ai/QwenPaw/issues/7431) | codex 后端非流式时第三方智能体返回空响应、usage 全 0 | 开放 |
| 🟡 中 | [#7510](https://github.com/agentscope-ai/QwenPaw/issues/7510) | v2.2.0-beta.7 Desktop `/memory/status` 返回 500 | 开放 |
| 🟡 中 | [#7513](https://github.com/agentscope-ai/QwenPaw/issues/7513) | deepseek-v4-pro 对话与工具调用内容混合 | 开放 |
| 🟡 中 | [#7481](https://github.com/agentscope-ai/QwenPaw/issues/7481) | macOS StdIO MCP 子进程误入 backend_guard 杀死活跃后端 | 已关闭 |
| 🟢 低 | [#7516](https://github.com/agentscope-ai/QwenPaw/issues/7516) / [#7507](https://github.com/agentscope-ai/QwenPaw/issues/7507) | WeCom 渠道 base64 图片发送失败、逐字符流式卡顿 | 开放 |

## 6. 功能请求与路线图信号

- **移动端远程连接桌面端**（[#7519](https://github.com/agentscope-ai/QwenPaw/issues/7519)，2 评论）：期望手机访问运行中的桌面端，含会话恢复、工具审批、文件传输。
- **远程 WebUI 首次加载优化**（[#7514](https://github.com/agentscope-ai/QwenPaw/issues/7514) / #7518）：UI 外壳加载快但对话内容滞后，移动端尤甚。
- **A2A 协议支持时间表**（[#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484)）：架构文档承诺 MCP/A2A/ACP 统一 Driver，目前仅 MCP 落地，用户询问 A2A 排期。结合 PR [#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401)（ACP 修复在审），协议层 Driver 机制在持续推进，**A2A 有望纳入 2.3.x 路线**。
- **在审大特性 PR**（下一版本候选）：ReMe Auto Fin 长期记忆源（[#7441](https://github.com/agentscope-ai/QwenPaw/pull/7441)）、Creator 1.1.2（#7486）、跨智能体导入 PawPort（[#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960)）、make-skill v2（[#7509](https://github.com/agentscope-ai/QwenPaw/pull/7509)）。

## 7. 用户反馈摘要

- **满意点**：Issue 响应速度快（#7511 当日关闭）；2.2.0 Beta 系列用户参与度高，反馈质量好；自托管/多用户 Hub 是企业用户期待已久的能力。
- **痛点一：长任务可靠性** — 用户在 160 页长文档 OCR 校对等真实工作流中遭遇上下文丢失（#7447）、多子 Agent 无主动进度汇报（#7450）、cron 定时任务上下文膨胀后卡死（#7483），“跑着跑着要人盯”是核心不满。
- **痛点二：本地/私有化部署体验** — 局域网 LLM Server 连接不稳（#7505）、LM Studio 兼容性问题，私有部署用户群体明显。
- **痛点三：升级兼容性** — PR #7337 的配置字段迁移导致 custom provider 加载失败（#7474），用户希望破坏性变更有迁移工具或兼容层。
- **痛点四：渠道体验差异** — WeCom 渠道流式卡顿、图片发送失败，与微信渠道体验差距大。

## 8. 待处理积压

| 条目 | 状态 | 提醒 |
|---|---|---|
| [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) 危险指令绕过 | 开放 3 天，6 评论 | 安全类问题，建议优先跟进并公示 |
| [#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) 多 Agent 进度监控 | 开放 2 天，7 评论 | 高价值架构级诉求 |
| [#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464) 平台版无法连接模型 | 7/25 提交，9/2 才有更新，积压超一个月 | 平台部署用户被阻断 |
| [#6936](https://github.com/agentscope-ai/QwenPaw/pull/6936) 工具参数类型强转修复 | 8/12 提交，在审 3 周 | 机器人贡献 PR，需人工 review |
| [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) Pawport 导入流 | 8/13 提交，在审 3 周 | 首次贡献者，避免流失 |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) Reranker 配置 UI | 7/23 提交，积压 6 周 | 与后端 reranker PR 配套，建议统筹推进 |

---

*数据来源：GitHub API，统计窗口 2026-09-02 至 2026-09-03（UTC）。项目健康度综合评估：活跃度高、发布节奏稳定、安全响应迅速；需关注长周期 PR 积压与安全类开放 Issue 的闭环。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报（2026-09-03）

## 1. 今日速览

- 今日 EasyClaw 仓库整体处于**低活跃度但仍有交付**的状态：无新增或活跃的 Issue、无 PR 更新。
- 项目发布了新版本 **v1.9.2（TK Copilot v1.9.2）**，是今日唯一也是最重要的动态。
- 从版本内容看，团队重心集中在**联盟营销（Affiliate）工作流**的深度打磨，包括创作者表格分页、免私信邀约、样品申请审核等能力。
- Issue/PR 零更新可能意味着版本刚发布，社区反馈尚未涌现，预计未来 24–48 小时可能出现反馈高峰。

## 2. 版本发布

**v1.9.2 — TK Copilot v1.9.2**
🔗 https://github.com/gaoyangz77/easyclaw/releases

更新内容包括：

- **重构 Affiliate campaign 工作区**
  - 创作者大表格支持分页加载，改善大数据量下的使用体验
  - 支持**不发送私信的情况下邀约创作者**，降低触达摩擦与消息骚扰风险
  - 样品申请审核界面新增**产品库存与创作者绩效数据**视图，辅助决策
- **重新设计创作者升级（escalation）流程**
  - 围绕人工决策（staff decision）重构，使 Agent 能够根据人工裁决执行后续动作，强化“人在回路（Human-in-the-loop）”模式

⚠️ **破坏性变更与迁移**：Release Notes 中未明确标注破坏性变更；但 Affiliate 工作区与 escalation 流程均为重设计，建议使用相关功能的用户升级后重点回归测试。如遇问题请通过 Issue 反馈。

## 3. 项目进展

- 今日无 PR 合并/关闭记录，属于典型的**版本发布日的静默期**。
- 结合 v1.9.2 的发布，可推断近期开发工作已通过内部流程完成并随版本交付，社区侧的公开 PR 流水今日为零。

## 4. 社区热点

- 今日无活跃 Issue/PR，无社区讨论热点。
- 值得关注：v1.9.2 中 Affiliate 相关变更较大，若社区存在相关痛点，预计将在近期 Issue 中体现，建议次日复查。

## 5. Bug 与稳定性

- 今日无新报告的 Bug、崩溃或回归问题。
- 提示：Affiliate 工作区重构与 escalation 重设计属于高风险变更区，建议维护者主动关注升级后可能出现的问题反馈。

## 6. 功能请求与路线图信号

- 今日无新增功能请求。
- 从 v1.9.2 可以推断的**路线图信号**：
  - 项目正朝“**Agent 辅助 + 人工决策**”的协作模式演进（escalation 围绕 staff decision 重构）
  - 持续深化电商/联盟营销场景的运营工具链（样品审核、库存联动、绩效数据）
  - 下一步可能方向：邀约自动化策略、创作者绩效分析增强

## 7. 用户反馈摘要

- 今日无 Issue 评论，暂无可提炼的用户反馈。
- 建议关注 v1.9.2 发布后用户对“免私信邀约”与“样品审核新视图”的接受度，这两项是明显的体验优化点，可能成为口碑亮点。

## 8. 待处理积压

- 今日数据中无长期未响应的 Issue 或 PR 记录，无积压提醒事项。
- 建议：发布日是主动清理积压、更新 Roadmap、发布公告引导反馈的好时机，维护者可借此窗口加强社区运营。

---

**健康度小结**：今日 EasyClaw 呈“低互动、有交付”状态。版本持续迭代（v1.9.2）表明项目开发活跃，但社区互动数据为零，建议观察后续数日 Issue/PR 回流情况以更准确评估社区健康度。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*