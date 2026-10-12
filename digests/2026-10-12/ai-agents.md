# OpenClaw 生态日报 2026-10-12

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-12 04:58 UTC

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

# OpenClaw 项目动态日报 — 2026-10-12

## 1. 今日速览

OpenClaw 今日保持高活跃度：过去 24 小时 Issues 更新 500 条（新开/活跃 360、关闭 140），PR 更新 500 条（待合并 371、合并/关闭 129），并发布了 **v2026.10.5-beta.1** 测试版本，重点改进更新器的安全性与跨设备/文件系统兼容性。Issue 关闭率约 28%，PR 吞吐约 26%，消化速度健康但待合并 PR 积压偏多（371 条），核心维护者 @steipete 单日贡献多个大型重构 PR。当前用户侧最突出的痛点集中在 **更新器可靠性**、**Gateway 内存泄漏/稳定性** 与 **插件源捕获带来的性能与 SSD 磨损** 三大主线。

## 2. 版本发布

### v2026.10.5-beta.1（[Release](https://github.com/openclaw/openclaw/releases)）

**Highlights — 更安全的更新机制：**
- 修复更新在跨设备、跨文件系统、Windows 提权（elevation）、激活被打断等场景下无法完成的问题（#164636, #164769, #165257, #165863 等）
- 新增从过期租约（stale lease）或已变更证据（changed evidence）中恢复的能力，避免安装被搁置或阻塞后续更新

**评估：** 本版本是对近期大量 P0 更新器阻断问题（见第 5 节）的直接回应。属于 beta，建议生产环境观察稳定后再跟进；升级前注意备份状态数据库，遇 `update-recovery-pending` 类阻断可参考新恢复逻辑。

## 3. 项目进展

今日活跃 PR 以重构、性能与更新器修复为主（多数仍待合并，已进入 maintainer review 或 needs proof 阶段）：

- **CI 修复**：[#169616](https://github.com/openclaw/openclaw/pull/169616) 修复过时检查误拒有效变更，恢复 CI 合约验证
- **更新器修复**：[#169518](https://github.com/openclaw/openclaw/pull/169518)（P0）修复硬链接 journal 别名导致 `update-recovery-pending` 永久阻断的问题
- **Gateway 性能系列**（@steipete 主导，将 SQLite 读取迁出 Gateway 主线程）：
  - [#169579](https://github.com/openclaw/openclaw/pull/169579) session 子进程与元数据读取迁移至 worker
  - [#169553](https://github.com/openclaw/openclaw/pull/169553) transcript 簿记迁移至 worker owner
  - [#169594](https://github.com/openclaw/openclaw/pull/169594) 生命周期与 mention 簿记迁移
  - [#169613](https://github.com/openclaw/openclaw/pull/169613) 暖启动复用插件迁移事实，节省 ~170ms
- **Web UI 现代化**：[#169394](https://github.com/openclaw/openclaw/pull/169394) 聊天侧栏区域从 Lit 迁移至 Solid；[#169612](https://github.com/openclaw/openclaw/pull/169612) 将聊天启动请求数压回 35 个预算内（38→33）
- **新能力（实验性）**：
  - [#169564](https://github.com/openclaw/openclaw/pull/169564) 实验性 Advisor，自动纠正 agent 的无效/重复工作
  - [#169214](https://github.com/openclaw/openclaw/pull/169214) workboard 存储的实验性 PostgreSQL 引擎
  - [#169514](https://github.com/openclaw/openclaw/pull/169514) ClawRouter 订阅池余量侧栏仪表盘
- **修复类**：[#169575](https://github.com/openclaw/openclaw/pull/169575)（P1）修复设备配对写入期间节点请求失败；[#169571](https://github.com/openclaw/openclaw/pull/169571) 减少同任务内重复 skill 发现；[#169609](https://github.com/openclaw/openclaw/pull/169609) 修复损坏数据库在 Gateway 与 Doctor 间循环踢皮球

**整体判断：** 项目正系统性推进“Gateway 主线程去 SQLite 化”与“UI 框架迁移”两大工程主线，配合更新器可靠性攻坚，工程节奏清晰；但大量 XL 级重构同时标 🚨 compatibility / 🚨 security-boundary 风险，合并窗口需要谨慎。

## 4. 社区热点

| Issue | 评论 | 状态 | 热点诉求 |
|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway 内存泄漏 RSS 350MB→15.5GB | 38 | OPEN (P0) | 长期运行稳定性的头号投诉，多次 OOM 崩溃循环 |
| [#159356](https://github.com/openclaw/openclaw/issues/159356) llama.cpp manager 报告就绪但 embedding 子进程退出 | 26 | OPEN (P2, stale) | 本地嵌入/内存召回不可用，运维成本高 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) 僵尸子进程累积 | 18 | OPEN (P1) | hook/tool 子进程未 reap，长期运行退化 |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) 回复丢失 "no active tool authority snapshot"（2026.9.4 回归） | 18 | OPEN (P1) | 消息丢失是用户最不可容忍的故障类别 |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) Gateway 捕获大型外部插件时阻塞数分钟（P0） | 15 | OPEN | 插件捕获机制的性能回归 |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) 插件源捕获每次重写 1.1–6.5GB，SSD 严重磨损 | 15 | OPEN (P1) | 无复用的字节级拷贝+哈希，硬件损耗投诉 |
| [#156112](https://github.com/openclaw/openclaw/issues/156112) `openclaw update` 在 global install swap 失败 | 14 | OPEN (P0) | 官方更新通道不可靠 |

**共性诉求：** 社区对“长时运行的资源纪律”（内存、进程、磁盘）与“官方升级通道可用性”期望最高，这两类问题的修复进度直接决定口碑。

## 5. Bug 与稳定性（按严重度）

### P0 / 崩溃级
- **内存泄漏双胞胎**：[#91588](https://github.com/openclaw/openclaw/issues/91588)（RSS→15.5GB OOM）与 [#155191](https://github.com/openclaw/openclaw/issues/155191)（原生泄漏 ~1GiB/30s，V8 堆稳定）— **暂无直接 fix PR**，needs-info/review
- **更新器阻断三连**（部分已被 v2026.10.5-beta.1 与 PR #169518 覆盖）：
  - [#167771](https://github.com/openclaw/openclaw/issues/167771)（已关闭）update-recovery-pending 无修复路径
  - [#167506](https://github.com/openclaw/openclaw/issues/167506)（已关闭）临时 handoff 数据库被删阻断更新
  - [#156112](https://github.com/openclaw/openclaw/issues/156112)（OPEN）global install swap 失败
- [#160959](https://github.com/openclaw/openclaw/issues/160959) Gateway 事件循环阻塞数分钟（2026.9.6 回归）— 无 fix PR
- [#126821](https://github.com/openclaw/openclaw/issues/126821) SQLite 全新重建库 15–24h 内再次损坏（WSL2）— 无 fix PR
- [#166894](https://github.com/openclaw/openclaw/issues/166894) Windows 多 agent 安装重启挂起 30min–2h — needs-info

### P1 / 回归与功能受损
- [#148707](https://github.com/openclaw/openclaw/issues/148707) 会话回复丢失（2026.9.4 回归）
- [#97616](https://github.com/openclaw/openclaw/issues/97616) 僵尸进程累积
- [#157989](https://github.com/openclaw/openclaw/issues/157989) SSD 磨损（2026.9.5 回归）
- [#145309](https://github.com/openclaw/openclaw/issues/145309) claude-cli 忽略 `CLAUDE_CONFIG_DIR` — **已有 linked PR open**
- [#168955](https://github.com/openclaw/openclaw/issues/168955) 2026.10.1 Windows 启动从 410s 退化到 1030s（control-ui-assets 阻塞 477s）
- [#158788](https://github.com/openclaw/openclaw/issues/158788) Windows cron 任务 DataCloneError（maintainer 标注 main 上不可复现）
- [#107244](https://github.com/openclaw/openclaw/issues/107244) WhatsApp 群消息（LID）完全不进入处理

### P2 值得关注
- [#159789](https://github.com/openclaw/openclaw/issues/159789) "Close wedge"：一次 close 失败永久锁死 agent 执行但健康检查全绿
- [#105528](https://github.com/openclaw/openclaw/issues/105528) Windows 下 exec/read 间歇性返回空输出
- [#120385](https://github.com/openclaw/openclaw/issues/120385) cron/memory-flush 场景 MCP 工具目录构建不完整

## 6. 功能请求与路线图信号

| 需求 | 状态 | 纳入下一版本可能性 |
|---|---|---|
| 动态 provider `/v1/models` 模型目录刷新 [#74481](https://github.com/openclaw/openclaw/issues/74481) | OPEN，长期 | 高社区呼声，硬编码目录痛点明确 |
| 上下文窗口使用率注入 system prompt [#38568](https://github.com/openclaw/openclaw/issues/38568) | OPEN (P3) | 实现成本低，可择机合入 |
| 工具 schema token 开销优化 ~3,500 tok/session [#14785](https://github.com/openclaw/openclaw/issues/14785) | OPEN | 与 [#125314](https://github.com/openclaw/openclaw/issues/125314)（message 工具全量 schema）同源，PR #169564 的 Advisor 方向部分呼应 |
| Control UI 侧栏固定插件标签 [#111143](https://github.com/openclaw/openclaw/issues/111143) | OPEN | 与 Solid 迁移（#169394）节奏契合 |
| WhatsApp 断线消息回填 [#50093](https://github.com/openclaw/openclaw/issues/50093) | OPEN (stale) | 需产品决策 |
| 分发表面 ACK/telemetry [#76247](https://github.com/openclaw/openclaw/issues/76247) | OPEN | 多 agent 运维刚需 |

**路线图信号：** 维护者正押注三个方向——Gateway 线程化/worker 化、PostgreSQL 适配铺垫（#169414, #169214）、实验性 agent 自纠错（Advisor）。beta.1 表明近期主线是“把更新器做稳”，与 P0 积压高度对齐。

## 7. 用户反馈摘要

- **满意点**：更新失败多数情况下安全中止（#164188：旧版本保持可运行）；`doctor`/诊断信息详细；社区 issue 模板与 triage 标签体系（clawsweeper）被认可。
- **痛点**：
  - “官方 `openclaw update` 不可靠，npm 手动装 13 秒成功、官方通道失败”（#156112）——多条更新器 issue 反映同一情绪
  - “长跑必炸”：内存泄漏、僵尸进程、SQLite 损坏让 7×24 部署（Telegram/Discord bot、droplet）用户疲惫，甚至弃用（#88087：用户拆除 droplet 放弃）
  - “健康检查全绿但服务实际不可用”（#159789, #126821 的 paralyzed gateway 模式）严重侵蚀信任
  - Windows 用户在启动耗时、空输出、cron 失败上遭遇明显平台差距
  - 硬件损耗担忧：每天数十 GB 的重复写入让 SSD 用户不安（#157989）

## 8. 待处理积压（建议维护者关注）

- **[#91588](https://github.com/openclaw/openclaw/issues/91588)** 内存泄漏（P0，6 月开至今，38 评论，needs-maintainer-review）— 最高优先
- **[#50093](https://github.com/openclaw/openclaw/issues/50093)** WhatsApp 消息回填（3 月，stale，14 评论）— 消息丢失类长期悬置
- **[#54488](https://github.com/openclaw/openclaw/issues/54488)** 会话 lane 饥饿阻塞入站 20–30 分钟（3 月，stale）
- **[#48709](https://github.com/openclaw/openclaw/issues/48709)** Gemini 2.5 Pro 会话膨胀（3 月，stale）
- **[#112475](https://github.com/openclaw/openclaw/issues/112475)** 设备配对恢复失败（P0，7 月）
- **[#107244](https://github.com/openclaw/openclaw/issues/107244)** WhatsApp LID 群消息失效（7 月）
- **PR 侧**：#129434（vLLM 优先级，8 月开、XL、stale）、#107671（认证冷却清除，7 月、需安全审查）、#114309（Codex 连续性五连修，7 月）长期未决

---

*数据来源：GitHub Issues/PRs/Releases（2026-10-12 抓取）。健康度总评：活跃度优秀、修复节奏加快，但 P0 稳定性积压（内存/更新器/插件捕获）与 371 条待合并 PR 是主要风险点。*

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告
**数据日期：2026-10-12**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已形成明显的**三梯队格局**：以 OpenClaw 为代表的头部项目进入“规模化重构期”（Gateway 线程化、存储后端替换），Hermes Agent、Zeroclaw、NanoBot 等中坚项目处于“功能整合 + 质量打磨”阶段，而 IronClaw、LobsterAI 等项目进入低活跃维护期。生态技术主线正在从“单 agent 功能完善”转向**多 agent 编排（A2A/swarm）、长时运行稳定性（内存/进程/存储纪律）、更新与分发可靠性**三大方向。值得注意的是，几乎所有活跃项目都在同期攻坚“自更新机制”——官方升级通道可靠性已成为自托管场景的生态级痛点。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（关 140，~28%） | 500（371 待合并，~26% 吞吐） | v2026.10.5-beta.1 | ⭐⭐⭐⭐ 活跃度顶级，但 P0 稳定性积压 + PR 积压严重 |
| **Hermes Agent** | 50（仅关 1） | 50（39 待/11 合） | 无 | ⭐⭐⭐⭐ 高活跃，合并吞吐好，但 Issue 关闭率极低 |
| **Zeroclaw** | 16（0 关闭） | 47（45 待/2 合） | 无 | ⭐⭐⭐ 工程活跃，但评审容量明显不足 |
| **NanoBot** | 1 | 24（19 待/5 合） | 无 | ⭐⭐⭐⭐ Bug 闭环率 100%，节奏健康 |
| **CoPaw** | 11（1 关/10 开） | 20（8 待/12 合） | 无 | ⭐⭐⭐ 快速迭代期，Bug 积压上升 |
| **NanoClaw** | 2 | 12（8/12 已合并） | 无 | ⭐⭐⭐⭐ 合并吞吐 67%，历史清账积极 |
| **PicoClaw** | 2 | 2（待合并） | 无 | ⭐⭐⭐ 小而精，问题-修复闭环完整 |
| **NullClaw** | 1 | 0 | 无 | ⭐⭐ 迭代间歇期，memory 子系统持续演进 |
| **IronClaw** | 0 | 7（纯 Dependabot） | 无 | ⭐⭐ 纯维护期，社区互动为零 |
| **LobsterAI** | 0 | 1（stale 自动关闭） | 无 | ⭐ 低活跃，高质量贡献流失风险 |
| TinyClaw / Moltis / ZeptoClaw / EasyClaw | 0 | 0 | 无 | ⭐ 无活动 |

---

## 3. OpenClaw 在生态中的定位

**规模对比**：OpenClaw 以单日 500 Issue + 500 PR 的更新量级，约为第二梯队（Hermes/Zeroclaw）的 10 倍、其他项目的 20–250 倍，是生态中事实上的核心参照项目（issue 编号已至 16 万级 vs NanoBot 的 6 千级、PicoClaw 的 3 千级）。

**优势**：
- 维护响应速度快：P0 更新器问题直接触发 beta 版本（v2026.10.5-beta.1）+ 多条 fix PR；
- 工程主线清晰：Gateway 主线程去 SQLite 化（#169579/169553/169594/169613）、PostgreSQL 适配铺垫、UI 框架现代化（Lit→Solid）三条线并行；
- 诊断体系（doctor、clawsweeper triage 标签）获社区认可。

**相对劣势**：P0 级稳定性问题（内存泄漏 RSS→15.5GB、SSD 磨损、SQLite 损坏）存在数月未决（#91588 开自 6 月），371 条待合并 PR 远超 Zeroclaw（45）和 Hermes（39）；相比之下 NanoBot 展示了更小体量下“Bug 全闭环”的敏捷性。

**技术路线差异**：OpenClaw 押注 Gateway worker 化 + PostgreSQL + 实验性 Advisor（agent 自纠错）；Zeroclaw 押注 gateway/runtime 分离 + A2A 协议标准化；Hermes 押注多 profile 隔离 + 成本优化；NanoBot 押注自更新 + 渠道适配打磨。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **自更新/升级可靠性** | OpenClaw、NanoBot、NanoClaw、Hermes、CoPaw | OpenClaw 更新器阻断三连（#156112 等）；NanoBot #6168 自更新验收分支；NanoClaw #4076 更新不重建定制镜像；Hermes #136281 stable.json 404；CoPaw 桌面端打包完整性（#7311）——**生态级最强公约数** |
| **静默失败 / 可观测性** | PicoClaw、CoPaw、OpenClaw、Zeroclaw | PicoClaw cron 误报 ok + 长轮询假活（#3422/3423）；CoPaw #8175 静默吞异常；OpenClaw “健康检查全绿但服务不可用”（#159789）；Zeroclaw Lark 消息静默丢弃 |
| **Memory/上下文管理边界** | NullClaw、Zeroclaw、OpenClaw | NullClaw #1055 持久化记录无限增长；Zeroclaw #11655 consolidation 误隐藏记忆；OpenClaw #38568 上下文使用率注入 |
| **多 agent 协作 / A2A** | Zeroclaw、OpenClaw、Hermes | Zeroclaw A2A crate RFC + swarm；OpenClaw Advisor 与 workboard；Hermes multiplex gateway |
| **渠道适配打磨（Telegram/Slack/Lark）** | NanoClaw、NanoBot、Hermes、OpenClaw、Zeroclaw | NanoClaw Slack 身份边界；Hermes Telegram forum 路由；Zeroclaw Lark 富文本；OpenClaw WhatsApp LID |
| **长时运行资源纪律** | OpenClaw、Hermes、PicoClaw | 内存泄漏、僵尸进程/子进程（OpenClaw #91588/#97616；Hermes #136930 后台任务被杀） |
| **Windows/WSL/HarmonyOS 跨平台** | OpenClaw、Zeroclaw、CoPaw、NanoBot、Hermes | Zeroclaw #11665、CoPaw #8164（鸿蒙原生客户端）、NanoBot #6150（WSL） |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Zeroclaw | Hermes Agent | NanoBot | NanoClaw / PicoClaw | CoPaw |
|---|---|---|---|---|---|---|
| **功能侧重** | 全栈个人助手 + 企业级基础设施 | 插件系统 + 协议标准化（A2A） | Desktop 体验 + 成本/计费精准 | Docker 开箱即用 + 自更新 | 渠道代理（邮箱/Telegram/Slack） | 多端客户端矩阵（含鸿蒙） |
| **目标用户** | 7×24 重度部署者、多平台 bot 运维者 | 架构敏感型开发者（RFC 驱动） | 桌面端 + Codex/多 profile 重度用户 | 新手 + 自托管用户 | “agent 作为持续在线通信代理”用户 | 多 workspace 自托管用户 |
| **技术架构** | TS Gateway + SQLite→PostgreSQL 迁移中 | Rust 系（runtime/gateway 分离） | 桌面 + gateway + Vault 插件化 | Bun 运行时 + Docker Compose | Go gateway / Node 容器 | Console/Desktop/Docker 全形态 |

**关键洞察**：Hermes 和 CoPaw 的用户反馈高度围绕**token 成本**（缓存重写、定价精度、档位协商），是其他项目少见的差异化焦点；Zeroclaw 是唯一把协议层（A2A）作为战略议题的项目。

---

## 6. 社区热度与成熟度分层

- **快速迭代期**：Hermes Agent（49 新 Issue/日，Desktop 简化模式等新方向涌现）、CoPaw（XXXL 级 HarmonyOS PR + Bug 密集报告）、Zeroclaw（RFC 讨论活跃但合入慢，处于“迭代快、评审堵”的临界态）
- **质量巩固期**：OpenClaw（从功能扩张转向稳定性攻坚 + 系统性重构）、NanoBot（Bug 闭环率 100%，架构治理 CI 上线）、NanoClaw（清理 5 月/7 月历史 PR，进入清账模式）
- **维护/停滞期**：IronClaw（纯 Dependabot）、LobsterAI（stale 机器人关闭高完成度 PR #978，贡献者流失警示）、NullClaw（间歇期但方向清晰）、TinyClaw/Moltis/ZeptoClaw/EasyClaw（静默）

**成熟度信号**：Issue 关闭率是分水岭——OpenClaw ~28% 和 NanoClaw 67% 表明消化能力健康；Hermes（1/50）和 Zeroclaw（0/16）的输入远超处理能力，是成长期项目的典型特征。

---

## 7. 值得关注的趋势信号

1. **“更新器可靠性”成为自托管生态的信任基石**：五个活跃项目同期投入自更新攻坚（OpenClaw beta 版、NanoBot #6168、CoPaw 打包修复），说明“官方升级通道败给 npm 手动安装”类体验正在倒逼工程投入。对开发者的启示：更新机制需要与安装方式（Docker/全局安装/桌面）同等的设计权重。

2. **“静默失败”是用户流失的头号杀手**：跨项目的最高情绪强度反馈均为“看起来健康但实际不工作”（PicoClaw cron 误报、OpenClaw paralyzed gateway、CoPaw 吞异常、Zeroclaw Lark 静默丢消息）。健康检查必须覆盖端到端语义，而非进程存活。

3. **成本可观测性成为新战场**：Hermes 的 P0 缓存驱逐问题、定价精度修复、Codex 档位协商显示，重度用户已将 agent 基础设施的 token 成本视为一等运维指标。

4. **Memory 子系统普遍进入“资源边界收敛”阶段**（NullClaw 存储端限流、Zeroclaw consolidation 修正、OpenClaw 上下文注入）：无限增长的会话/记忆存储被公认为架构债。

5. **多 agent 标准化（A2A）从概念进入 RFC 落地**（Zeroclaw crate 化、网关 body limit 等配套问题已现）：预示 2026 下半年个人助手生态将出现互操作性竞争窗口。

6. **贡献者留存风险需制度化管理**：LobsterAI 因 stale 机制流失高完成度 PR、Zeroclaw 多条 XL PR 长期 needs-author-action、NanoClaw 51 天挂起的社区修复——评审吞吐不足是中型项目共同的隐性成本。

**对技术决策者的建议**：生产选型上，OpenClaw 功能最全但需规避长跑稳定性风险（等待内存泄漏/更新器修复落地）；NanoBot 适合 Docker 优先的新用户；Zeroclaw 适合愿意参与 RFC共建的架构型团队；Hermes 适合成本敏感的桌面/多 profile 场景。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-10-12

## 1. 今日速览

NanoBot 今日保持高活跃度：过去 24 小时内 PR 更新达 24 条（19 条待合并、5 条已合并/关闭），Issue 新增 1 条，无新版本发布。开发重心集中在三方面：**Docker 开箱即用体验修复**、**自更新机制集成**（承接 #5817 工作的验收分支 #6168）、以及大量 WebUI/渠道稳定性修复。社区贡献者 @Re-bin、@chengyongru 持续高频产出，项目处于“功能整合 + 质量打磨”阶段，健康度良好。

## 2. 版本发布

今日无新版本发布。值得注意的是 [#6168](https://github.com/HKUDS/nanobot/pull/6168) 是一个验收分支，整合了自更新、WebUI 更新流程与 release-candidate 打包管线，暗示近期可能有重要版本发布。

## 3. 项目进展

今日关闭/合并的 PR 共 5 条：

- **[#5817](https://github.com/HKUDS/nanobot/pull/5817)（CLOSED）** — `nanobot update` 稳定版与源码自更新流程，含 SHA-256 校验的私有 Bun 运行时引导。作为长期工作（9-19 创建）今日关闭，其功能正被 #6168 验收分支接续。
- **[#6169](https://github.com/HKUDS/nanobot/pull/6169)（CLOSED）** — 清理 Mattermost/Weixin 适配器中已废弃的出站元数据兼容逻辑，消除 `ProgressEvent` 过早完成的问题。
- **[#6150](https://github.com/HKUDS/nanobot/pull/6150)（CLOSED）** — WSL 环境下 WebUI 改用 PowerShell 调起 Windows 默认浏览器，改善 WSL 用户体验。
- **[#6149](https://github.com/HKUDS/nanobot/pull/6149)（CLOSED）** — 修复 Telegram 远程媒体 URL 带查询字符串时被误判为 document 的分类 bug。
- **[#6113](https://github.com/HKUDS/nanobot/pull/6113)（CLOSED）** — 工具调用前报告当前工作区访问状态，减少模型误判导致的违规调用。

整体进展：自更新能力基本落地，渠道适配器持续清理，跨平台（WSL）体验改善明显。

## 4. 社区热点

- **[#6165](https://github.com/HKUDS/nanobot/issues/6165)**（今日唯一新 Issue，P1 级别影响）— 用户 @jerkstorecaller 报告 `git clone && docker compose up` 后应用完全不可用，API 容器 crash-loop、所有端口不可达，且入门文档不足。该 Issue 在**数小时内即获得修复 PR #6171**，社区响应速度值得肯定。
- **[#6168](https://github.com/HKUDS/nanobot/pull/6168)** — 整合自更新功能的验收分支，是今日最重磅的功能性 PR，保留了原作者署名（良好的开源协作规范）。
- 关注度较高的待合并安全修复：[#6112](https://github.com/HKUDS/nanobot/pull/6112)（子代理绕过工具限制，P1，标记 conflict）。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| P1 | [#6165](https://github.com/HKUDS/nanobot/issues/6165) Docker 默认配置无法启动应用 + 入门文档差 | ✅ 已有修复 PR [#6171](https://github.com/HKUDS/nanobot/pull/6171)（配置首次启动引导） |
| P1 | [#6112](https://github.com/HKUDS/nanobot/pull/6112) 子代理不继承工具限制，可绕过 `write_file` 禁令 | 修复 PR 已提交，待合并（存在冲突） |
| P1 | [#6167](https://github.com/HKUDS/nanobot/pull/6167) gateway 重启后 `every` 定时任务的待执行 run 丢失 | 修复 PR 已提交 |
| P2 | [#6164](https://github.com/HKUDS/nanobot/pull/6164) revert 提交时未正确恢复被删除的记忆文件，`/dream-restore` 残留数据 | 修复 PR 已提交 |
| P2 | [#6163](https://github.com/HKUDS/nanobot/pull/6163) Provider 退避重试事件被 ChannelManager 无条件丢弃，渠道侧不可见 | 修复 PR 已提交（opt-in hook） |
| P2 | [#6162](https://github.com/HKUDS/nanobot/pull/6162) WebUI 设置重启命令污染聊天历史、产生空话题 | 修复 PR 已提交 |

**亮点**：今日所有报告的 Bug 均已有对应 fix PR，问题闭环率高。

## 6. 功能请求与路线图信号

- **应用内自更新**（#6168、承接 #5817/#6154）：可恢复的应用内更新 + 管理式安装 + RC 打包管线，明显是**下一个版本的核心特性**。
- **模型配置精细化**：
  - [#6160](https://github.com/HKUDS/nanobot/pull/6160) 图像生成可复用自定义命名连接与独立请求设置；
  - [#6159](https://github.com/HKUDS/nanobot/pull/6159) 按 model preset 覆盖 headers/query/body 参数。
  两者均指向“多模型网关配置灵活性”这一路线方向。
- **可观测性**：[#6083](https://github.com/HKUDS/nanobot/pull/6083) 心跳通知评估器可指定独立模型 preset，运维能力增强。
- **架构治理**：[#6166](https://github.com/HKUDS/nanobot/pull/6166) 强制 gateway/client 导入边界的 CI 测试、[#6170](https://github.com/HKUDS/nanobot/pull/6170) 命令队列策略声明式注册，表明项目在规模增长后主动加强架构约束。

## 7. 用户反馈摘要

- **首要痛点：首次部署体验**。#6165 直接反映了新用户“克隆即用”的期望落空——Docker 镜像不可用 + 文档不完善是最劝退的组合。
- **跨环境适配需求**：WSL 用户（#6150）的浏览器启动问题表明 Windows/WSL 是重要用户群体。
- **通知可靠性**：#6158（浏览器通知失败无提示）、#6163（渠道侧看不到重试等待）说明用户依赖任务完成通知，静默失败引发不满。
- **安全边界信任**：#6112 的子代理绕过问题说明有用户在生产环境中使用工具限制策略，对权限隔离的正确性有硬性要求。

## 8. 待处理积压

- **[#6112](https://github.com/HKUDS/nanobot/pull/6112)**（P1 安全修复，标记 conflict）— 建议维护者优先解决冲突并合并，安全类 PR 不宜久悬。
- **[#6083](https://github.com/HKUDS/nanobot/pull/6083)**（10-06 创建，标记 conflict）— 已活跃 6 天，需处理冲突推进。
- 19 条待合并 PR 中多数为 10-10~10-12 新建，尚在正常评审周期内，暂无长期积压迹象。
- 建议关注：#6168 大型验收分支合并前的回归风险，以及 Docker 修复 #6171 的优先合入（关系新用户转化）。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 — 2026-10-12

## 1. 今日速览

Zeroclaw 今日保持高活跃度：过去 24 小时 Issues 更新 16 条（全部为新开/活跃，0 关闭），PR 更新 47 条（45 待合并、2 已合并/关闭），无新版本发布。项目当前重心清晰集中在三条线上：**v0.8.6/v0.9.0 的插件系统与网关分离**（#7432 tracker 持续推进）、**多智能体协作能力的架构 RFC 讨论**（A2A 协议、swarm、peer-agent 生命周期），以及一批来自真实用户的新 Bug 报告（memory 冲突误隐藏、网关 body limit、Lark 富文本解析）。总体健康度良好，但 45 个待合并 PR 的积压和多个 XL 级堆叠 PR 表明评审吞吐是当前瓶颈。

## 2. 版本发布

今日无新版本发布。最近的目标版本为 **v0.8.6**（见 [Tracker #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)），多个 PR 已打上 `release:v0.8.6` 标签等待合入。

## 3. 项目进展

今日合并/关闭的 PR 数量较少（2 条），关键一条：

- **[#11531 (CLOSED)](https://github.com/zeroclaw-labs/zeroclaw/pull/11531) fix(tunnel): report the URL tailscale actually serves the gateway on**（@tidux，XS）— 修复 `tunnel_provider = "tailscale"` 时网关广播错误 URL 的问题（Tailscale CLI 实际以 HTTPS 443 发布，而非本地端口）。这是面向远程部署用户的实际可用性修复。

值得注意的是，虽然合入量不大，但大量 v0.8.6 相关 PR 今日仍在持续 rebase、刷新和推进，插件系统管线（#11236 → #11261 → #11262 → #11309 → #11311 → #11347）堆叠结构已成型，一旦底层合入将快速解锁后续。

## 4. 社区热点

按评论数排序，今日讨论最热烈的是架构级 RFC：

1. **[#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) RFC: A2A protocol crate (zeroclaw-a2a)**（7 评论，@kingstar001）— 讨论将 A2A 协议（wire model + inbound/outbound client）抽为独立 crate 的跨边界重构，是 Agent 互操作性的战略决策，涉及 #9106、#7763/#8274 等多个已有工作。高风险、needs-maintainer-review。
2. **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) v0.8.6/v0.9.0 交付 Tracker**（6 评论，@Audacity88）— runtime 与 gateway 分离的权威路线图，是理解项目短期方向的最佳入口。
3. **[#10025](https://github.com/zeroclaw-labs/zeroclaw/issues/10025) RFC: zeroclaw swarm — 临时 agent 集群 + crush 式 TUI**（4 评论，@IftekharUddin）— 用户希望免配置地拉起围绕单一目标的多 agent 团队。
4. **[#11074](https://github.com/zeroclaw-labs/zeroclaw/issues/11074) RFC: search_routes — web_search_tool 的提示词路由**（4 评论）— 仿照 `model_routes`，按查询意图路由到不同搜索供应商。
5. **[#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) RFC: Knowledge corpus — Agent RAG 文档检索**（4 评论）— 长期呼声较高的能力边界扩展。

**背后诉求**：社区讨论焦点已从单 agent 功能转向**多 agent 编排、协议标准化（A2A）、知识检索（RAG）**三大方向，与 Zeroclaw 作为个人 AI 助手平台的定位演进一致。

## 5. Bug 与稳定性

按严重程度排列（今日报告/更新）：

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| S2 | [#11655](https://github.com/zeroclaw-labs/zeroclaw/issues/11655) | **Memory 冲突 supersede 误隐藏无关 Core 记忆**（默认 `embedding_provider = "none"`、无向量分数时，`consolidate_turn` 会 soft-hide 与新更新无关的 Core 记忆）— 影响 @GaijinSystems | ⚠️ 暂无直接 fix PR；与 #11657 的 consolidation category 配置提案相关 |
| — | [#10290](https://github.com/zeroclaw-labs/zeroclaw/issues/10290) | 分离 peer/subagent turn 未透传 live config handle，`config/set` 撤销 SSRF 策略后**下一次 dispatch 不生效**（安全隐患） | follow-up 于 #10075，暂无 PR |
| — | [#11668](https://github.com/zeroclaw-labs/zeroclaw/issues/11668) | 网关 `MAX_BODY_SIZE` 不可配置，拒绝响应仅有裸字符串 `"length limit exceeded"`，影响 A2A 长上下文中转 | 暂无 PR；相关测试见 #10310 |
| S3 | [#11658](https://github.com/zeroclaw-labs/zeroclaw/issues/11658) | Web 仪表盘回复结束后输入框不自动恢复焦点 | 暂无 PR |
| — | PR [#11659](https://github.com/zeroclaw-labs/zeroclaw/pull/11659)（fix，非 Bug 报告） | 本地 OpenAI 兼容服务器以 snake_case `context_length_exceeded` 上报溢出，`is_context_window_exceeded` 无法识别 | ✅ 已有 fix PR 待评审 |
| — | PR [#11667](https://github.com/zeroclaw-labs/zeroclaw/issues/11667) 相关 PR [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | 有界 delegate 的 workspace/tool ceiling/command policy 在 turn 结束后未保持绑定（bug #9872） | ✅ 大型 fix PR 进行中 |

## 6. 功能请求与路线图信号

今日新开功能请求，及纳入下一版本的可能性判断：

- **[#11664](https://github.com/zeroclaw-labs/zeroclaw/issues/11664) Level 5 "Dark Factory" 工作流**（@sirinath）— 结构化多 agent 团队 + 编排 + 生命周期管理。与已接受的 swarm RFC #10025 和 #9597（peer-agent turn 持久化，status:in-progress）高度重合，**很可能以现有 RFC 的形式吸纳而非独立立项**。
- **[#11662](https://github.com/zeroclaw-labs/zeroclaw/issues/11662) Channels 与 Core 解耦**（@sirinath）— 减少未使用 channel 的体积与攻击面。与 v0.9.0 的 **gateway separation**（#7432）方向一致，**有较大概率被纳入 v0.9.0 讨论范围**。
- **[#11657](https://github.com/zeroclaw-labs/zeroclaw/issues/11657) 可配置 turn consolidation 目标分类**（@GaijinSystems）— memory 子系统的精细化控制，配合 #11655 的 bug 修复，属于低成本高价值项，**短期可落地**。
- **[#11668](https://github.com/zeroclaw-labs/zeroclaw/issues/11668) 网关 body size 可配置 + 结构化错误码**— 与已 in-progress 的 #7692/#10310 gateway 测试线自然衔接，**v0.9.0 前合理**。
- **[#11665](https://github.com/zeroclaw-labs/zeroclaw/issues/11665) 更好的 Windows 支持**（签名安装器 + Docker + WSL 三段式文档）— 与多个 PR 上的 `ci:windows` 标签呼应，属于发布工程问题，**可能在 v0.8.6 发布时被顺带改善**。

## 7. 用户反馈摘要

从今日 Issues 提炼的真实痛点：

- **多 agent 中转被 body limit 阻断**（#11668）：用户用前台 agent → 聊天专家的 A2A `message/send` 架构，长上下文问题在 1 秒内被网关裸拒，错误信息无 code、无大小提示——说明**多 agent 生产部署已是真实使用场景**，网关配置灵活性跟不上。
- **默认配置下的 Memory 数据丢失**（#11655、#11657）：默认 `embedding_provider = "none"` 时 consolidation 会误隐藏记忆，用户被迫考虑把写入目标从 Core 移走——**memory 子系统在无 embedding 场景的可靠性是薄弱点**。
- **Windows 安装体验差**（#11665）：安装流程“非常长且复杂”，用户期望签名安装器 + 三段式文档——**Windows 用户群存在但被低优对待**。
- **Feishu/Lark 富文本消息静默丢弃**（PR #11267、#11669 两条 fix）：含图片的 post 消息从未到达 agent，bot 不回复且无日志——**中文企业协作渠道用户的重要痛点**。
- **UI 细节打磨需求**（#11658）：连续对话需手动点击输入框，反映 Web 仪表盘日常重度使用者的不满。

## 8. 待处理积压

需维护者关注的积压项（按风险/重要性排序）：

1. **[#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391)（8/26 开启，XL，needs-author-action）**— 有界 delegate 安全边界修复（bug #9872），已是 #11667 设计讨论的前置依赖，**阻塞下游多个决策**，master 已领先 13+ commits 需 rebase。
2. **[#11262](https://github.com/zeroclaw-labs/zeroclaw/pull/11262) / [#11261](https://github.com/zeroclaw-labs/zeroclaw/pull/11261) / [#11309](https://github.com/zeroclaw-labs/zeroclaw/pull/11309) 等插件管线 XL PR 链**（@IftekharUddin）— 多层堆叠、互相依赖，diff 互相污染，是 v0.8.6 发布的最大瓶颈，**建议维护者明确合入顺序并加速底层评审**。
3. **[#10025](https://github.com/zeroclaw-labs/zeroclaw/issues/10025) swarm RFC（needs-author-action，8/16 开启）**— 评论活跃但卡在作者侧，需推进。
4. **[#10290](https://github.com/zeroclaw-labs/zeroclaw/issues/10290) live config handle 透传（8/24 开启）**— 涉及 SSRF 策略即时撤销的安全 follow-up，无对应 PR，**建议优先排期**。
5. **[#10310](https://github.com/zeroclaw-labs/zeroclaw/pull/10310)（8/24，needs-author-action）**与 **[#11526](https://github.com/zeroclaw-labs/zeroclaw/pull/11526)、[#11174](https://github.com/zeroclaw-labs/zeroclaw/pull/11174)、[#11319](https://github.com/zeroclaw-labs/zeroclaw/pull/11319)、[#11320](https://github.com/zeroclaw-labs/zeroclaw/pull/11320)** 等 needs-author-action XL PR — 均为 long-running 贡献者工作，长期无合并动作易导致流失。

**总体判断**：项目工程活跃度优秀，贡献者梯队（distinguished/trusted/experienced contributor 分层）健康，但评审容量已明显不足——45 个开放 PR 中 XL 级占比较高，v0.8.6 的发布节奏取决于插件管线底层的合入速度。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-10-12

## 1. 今日速览

Hermes Agent 今日保持高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 49，仅关闭 1），PR 更新 50 条（待合并 39，已合并/关闭 11），无新版本发布。社区贡献热情旺盛，当日新开 PR 覆盖 Desktop 易用性、Gateway 流式配置、多平台适配等方向。已关闭的 11 个 PR 中含多项实用修复（Codex Ultrafast 定价、Windows 安装器报错、session 分支缓存模式等），显示维护者（@teknium1、@KoNit-K 等）正积极清理积压。整体问题集中在 Desktop 会话渲染、多 profile 配置隔离和 bundled skills 质量三条线上。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的重要 PR：

- **[#136950](https://github.com/NousResearch/hermes-agent/pull/136950)** — 合并了 #135984 与 #135906 的整合修复：GPT-6.1 Sol 支持 Ultrafast 档位，Codex 订阅用户仅在账户目录实际提供该档位时可请求，未授权计划得到明确拒绝而非静默付费。涉及 billing/usage-cost 核心，是今日最重要的合并。
- **[#135906](https://github.com/NousResearch/hermes-agent/pull/135906)** — Codex 凭据池按所选凭据协商最快服务档位（关闭 Issue #135024）。
- **[#106544](https://github.com/NousResearch/hermes-agent/pull/106544)** — 恢复 `session.branch_mode`（spine/full），full 模式下分支保留完整工具调用历史以提升 prompt-cache 命中率，对长会话成本优化意义重大。
- **[#110764](https://github.com/NousResearch/hermes-agent/pull/110764)** — Vault 支持插件化登录后端，第三方密码管理器（如 Proton Pass）无需核心改动即可接入。
- **[#136932](https://github.com/NousResearch/hermes-agent/pull/136932)** — Windows 安装器 git 失败时展示 git 原始错误信息，改善安装排障体验。
- **[#108008](https://github.com/NousResearch/hermes-agent/pull/108008)** — 修复自定义端点 `per_1m_tokens` 定价被误乘 100 万倍的成本统计错误。
- **[#110735](https://github.com/NousResearch/hermes-agent/pull/110735)** / **[#110655](https://github.com/NousResearch/hermes-agent/pull/110655)** — bundled skills opt-out 恢复、Vault 对误声明密码字段的兼容填充。
- **[#106468](https://github.com/NousResearch/hermes-agent/pull/106468)** — Desktop 活动指示器在繁忙回合中不再冻结。

整体看，今日在 **成本/计费准确性、Codex 服务档位协商、会话缓存优化** 三个方向有实质推进，尤其 session 分支缓存模式对重度用户的 token 成本有直接影响。

## 4. 社区热点

- **[#129993](https://github.com/NousResearch/hermes-agent/issues/129993)（13 评论）** — Desktop 助手回复在 transcript 中渲染两次（折叠步骤块上下各一份，像素级相同），持久化数据只有一条，指向流式渲染与 hydration 的竞态。与 [#131591](https://github.com/NousResearch/hermes-agent/issues/131591)（live-stream 副本 + post-turn hydrated 副本）高度相关，可能是同一根因，建议合并排查。
- **[#6626](https://github.com/NousResearch/hermes-agent/issues/6626)（13 评论，4 👍）** — Gemma 4 via vLLM 的 tool calling 解析配置问题，自 4 月持续活跃，反映本地模型社区对 Hermes 兼容性的持续需求。
- **[#136567](https://github.com/NousResearch/hermes-agent/issues/136567)（12 评论）** — Telegram forum DM 新话题的首条消息不带 `message_thread_id`，被 lobby 恢复逻辑误路由到旧话题。Telegram 平台行为变更引发的兼容性问题，时效性强。
- **[#110374](https://github.com/NousResearch/hermes-agent/issues/110374)（9 👍）** — slack-sdk ≥ 3.44 破坏状态指示器（"is thinking…"），且静默失败。👍 数高但评论仅 5，属“沉默多数”痛点。
- **[#133999](https://github.com/NousResearch/hermes-agent/issues/133999)（P0, needs-decision）** — 出站图片 20 张触发驱逐策略即使未接近 provider 上限也会重写缓存前缀，导致缓存失效成本上升。**唯一 P0 级待决策问题**，值得维护者优先处理。

## 5. Bug 与稳定性（按严重程度）

**P0**
- [#133999](https://github.com/NousResearch/hermes-agent/issues/133999) — 图片驱逐批量重写缓存前缀，增加用量成本。状态：needs-decision，暂无 fix PR。

**P2**
- [#129993](https://github.com/NousResearch/hermes-agent/issues/129993) / [#131591](https://github.com/NousResearch/hermes-agent/issues/131591) — Desktop 回复双重渲染（见上）。
- [#136486](https://github.com/NousResearch/hermes-agent/issues/136486) — OpenAI 兼容端点 `reasoning` 别名与 `reasoning_content` 重复导致 HTTP 400，字段拒绝学习机制失效，每回合降级。今日新增。
- [#136281](https://github.com/NousResearch/hermes-agent/issues/136281) — 更新检查失败：`hermes-assets.nousresearch.com` 的 stable.json 返回 404。**疑似基础设施/CDN 问题**，影响所有用户更新通道，建议紧急核查。
- [#131751](https://github.com/NousResearch/hermes-agent/issues/131751) — Desktop `@file` 建议使用启动 profile 的 Docker 沙箱，为其他 profile 会话孤儿化生成容器，涉及安全边界。
- [#88945](https://github.com/NousResearch/hermes-agent/issues/88945) — Windows 无控制台进程 shell-out 闪烁控制台窗口（缺 `CREATE_NO_WINDOW`）。
- [#131624](https://github.com/NousResearch/hermes-agent/issues/131624) — Desktop 后台更新 stage-and-swap 会 SIGTERM 正在运行的会话。
- [#136930](https://github.com/NousResearch/hermes-agent/issues/136930) — `agent_close` 静默杀死后台 checkpointed 任务（exit_code=-15），Telegram 端无恢复通知。今日新增。

**P3（今日新增精选）**
- [#136946](https://github.com/NousResearch/hermes-agent/issues/136946) — Mattermost 适配器接受并回复 bot 消息，双 bot DM 可形成无限回声循环，**烧毁 LLM 配额**，虽标 P3 但有实际资金风险。
- [#83662](https://github.com/NousResearch/hermes-agent/issues/83662) — Slack Socket Mode 重连泄漏 connect() 死循环。
- [#128937](https://github.com/NousResearch/hermes-agent/issues/128937) — `resvg-py==0.4.0` 缺发布时间被 uv 拒绝，**阻塞所有插件启用**。

已有 fix PR 对应：#136928（pdf 附件示例）→ PR #136973；#122464（pdf 表格换行）→ PR #136975；#135024 → PR #135906（已合并）。

## 6. 功能请求与路线图信号

- **Desktop Simple Mode**（PR [#136976](https://github.com/NousResearch/hermes-agent/pull/136976)）— 面向非技术用户的端到端简化模式，与 #136656（模型选择器显示上下文窗口）同属“降低使用门槛”主线，很可能成为下个版本重点。
- **流式配置 per-profile 化**（PR [#136974](https://github.com/NousResearch/hermes-agent/pull/136974)）— 多路复用 gateway 尊重被服务 profile 的 streaming 配置，回应了多个 multiplex 相关 Issue（#136969、#131751）背后的“profile 隔离”诉求，这是当前明显的架构演进方向。
- **Kanban deep link 发射器**（PR [#136971](https://github.com/NousResearch/hermes-agent/pull/136971)）与 #118116（per-board in-progress cap）显示 kanban 工作流在持续完善。
- **Plugin Catalog 活跃**：#136924（birkin-mnemosyne 0.7.0 pin）、#132571（digital-marketing-pro 整合）表明插件生态在规范化版本管理。

## 7. 用户反馈摘要

- **成本敏感**是高频主题：#133999（缓存重写）、#108008（定价单位错误）、#135024（服务档位协商）均围绕“不要为未获得的服务付费/缓存不要白白失效”。
- **Desktop 体验**痛点集中：双重渲染（#129993/#131591）、更新误杀会话（#131624）、@file 跨 profile 沙箱泄漏（#131751）——桌面端用户对会话连续性和隔离性要求高。
- **Skills 质量参差**：#91542（缺文件无法运行）、#106671（失效路径）、#122464（表格溢出）、#84432（错误文档）等长期 Issue 显示 bundled skills 缺乏系统性测试，社区已有自发提交修复 PR（#136975、#136973）。
- **本地/开源模型用户**（#6626 Gemma 4）期待更好的开箱即用 tool calling 支持。
- **Windows 平台**存在一批被忽视的兼容性问题（#88945、#87048、#98098）。

## 8. 待处理积压

| Issue | 年龄 | 关注点 |
|---|---|---|
| [#6626](https://github.com/NousResearch/hermes-agent/issues/6626) | 6 个月 | Gemma 4 tool calling，13 评论仍未关闭 |
| [#60551](https://github.com/NousResearch/hermes-agent/issues/60551) | 3 个月 | config 写保护 + `hermes config set` 列表键类型错误 |
| [#83662](https://github.com/NousResearch/hermes-agent/issues/83662) | 2 个月 | Slack Socket Mode 重连泄漏 |
| [#88660](https://github.com/NousResearch/hermes-agent/issues/88660) | ~2 个月 | 含现成 diff 的 3 个 skills 功能修复，可直接 review |
| [#106671](https://github.com/NousResearch/hermes-agent/issues/106671) | 1 个月 | GitHub skill 失效路径 + 不安全认证回退 |
| PR [#57667](https://github.com/NousResearch/hermes-agent/pull/57667) | 3 个月 | extra_headers 在模型切换验证中丢失，待 review |

**建议维护者优先关注**：① stable.json 404（#136281，影响全量更新通道）；② P0 缓存驱逐决策（#133999）；③ Desktop 双重渲染根因（#129993/#131591）；④ uv 解析阻塞所有插件启用（#128937）。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-10-12

## 1. 今日速览

过去 24 小时 PicoClaw 仓库共产生 **2 条新 Issue、2 条新 PR，无版本发布**。今日活动高度集中：单一贡献者 @sstpnk 以高质量的 bug 报告配对修复 PR 的方式，一次性暴露并修复了两个影响生产可靠性的问题（Cron 状态误报、Telegram 长轮询挂死）。虽然绝对数量不高，但均为“报告 + 修复”闭环提交，说明社区贡献质量较高、维护节奏健康。所有 PR 均处于待审核/待合并状态，需要维护者及时响应。

## 2. 版本发布

今日无新版本发布。两个修复 PR 若合并，或将在下一个 patch 版本（如 v0.3.2）中一并发布，建议关注。

## 3. 项目进展

今日无 PR 被合并或关闭，2 个修复 PR 待处理：

- [PR #3424 fix(telegram): bound hung long-poll requests with HTTP timeouts](https://github.com/sipeed/picoclaw/pull/3424) — 为 Telegram 通道的 HTTP 客户端补充超时配置，防止长轮询请求在网络异常时永久挂起。
- [PR #3425 fix(cron): report failed jobs as errors instead of ok](https://github.com/sipeed/picoclaw/pull/3425) — 修复 gateway 注册 cron handler 时吞掉 `ExecuteJob` 返回 error 的问题，使失败任务能被正确上报。

两项修复均指向网关（gateway）层的可靠性短板，合并后将显著提升 PicoClaw 作为长时运行智能体基础设施的稳定性。

## 4. 社区热点

今日两条 Issue 均为新开、暂无评论互动，尚无形成讨论热点：

- [Issue #3423](https://github.com/sipeed/picoclaw/issues/3423) — Cron 任务失败仍报 `lastStatus=ok`。诉求在于**可观测性**：用户依赖 `cron/jobs.json` 判断任务健康，误报成功会掩盖静默失败，对自动化场景危害大。
- [Issue #3422](https://github.com/sipeed/picoclaw/issues/3422) — Telegram 通道长轮询无超时，可能永久停止收消息但进程表面健康。诉求在于**通道可用性**：尤其是经 SOCKS 代理/隧道（frp 穿透）部署的用户，半开连接会导致机器人“假活”。

共同信号：用户在将 PicoClaw 部署为长期无人值守服务，对静默失败类问题高度敏感。

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#3422](https://github.com/sipeed/picoclaw/issues/3422) Telegram 长轮询无 HTTP 超时，半开连接下通道永久静默失效，进程无任何告警 | 已有修复 [PR #3424](https://github.com/sipeed/picoclaw/pull/3424) 待合并 |
| 🟠 中高 | [#3423](https://github.com/sipeed/picoclaw/issues/3423) Cron 任务失败被上报为 `ok`，gateway 丢弃 `CronTool.ExecuteJob` 的 error，产生虚假成功状态 | 已有修复 [PR #3425](https://github.com/sipeed/picoclaw/pull/3425) 待合并 |

两 bug 均复现于 v0.3.1（commit 2cf030d2），影响所有相关功能用户，且二者叠加会导致“任务失败 → 状态显示 ok → 通知通道挂死”的连锁静默故障。

## 6. 功能请求与路线图信号

今日无显式功能请求。但从 bug 内容可提炼隐含改进方向：

- **网关错误传播与可观测性**：#3423 暴露 gateway 层存在 error 被吞的模式，建议后续系统性排查其他 handler 是否有类似写法。
- **网络韧性**：#3422/#3424 提示其他通道（如依赖长连接的 IM 集成）也可能缺少超时/重连机制，可作为下一版本的稳定性专项。

## 7. 用户反馈摘要

两条 Issue 评论数均为 0，暂无多用户讨论。从报告本身可提取的信号：

- 用户环境为 **Go 编写的 gateway + Telegram Bot + Cron 定时任务 + 代理穿透** 的组合，属于典型的远程/受限网络部署场景。
- 用户痛点是**静默失败**：系统“看起来健康”但实际不工作，缺乏自愈与告警手段。
- 报告格式规范（版本、commit、复现细节俱全），说明贡献者工程素养高，是值得维护的核心社区成员。

## 8. 待处理积压

- [PR #3424](https://github.com/sipeed/picoclaw/pull/3424) 与 [PR #3425](https://github.com/sipeed/picoclaw/pull/3425) 为今日新开，尚不算积压，但均为高优先级稳定性修复，**建议维护者 48 小时内完成 review**，避免影响下一个 patch 版本节奏。
- [Issue #3422](https://github.com/sipeed/picoclaw/issues/3422)、[#3423](https://github.com/sipeed/picoclaw/issues/3423) 应在对应 PR 合并后及时关闭，保持 issue tracker 与代码状态同步。

**健康度小结**：今日活动量小而精，问题—修复闭环完整，无积压恶化迹象；关键风险点是两个高价值修复 PR 等待维护者响应。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：2026-10-12** | 数据周期：过去 24 小时

---

## 1. 今日速览

NanoClaw 今日整体活跃度**中高**：过去 24 小时共更新 **12 条 PR**（8 条已合并/关闭、4 条待合并）和 **2 条新开 Issue**，无新版本发布。维护节奏稳健，核心团队（@amit-shafnir、@billyshipp 等）在 Slack 渠道、AgentMail 邮件集成、权限通知等方向持续落地功能，同时清理了多个长期挂起的历史 PR（如 #2255、#2237、#3062）。社区侧的 2 个新 Issue 均来自同一位深度用户 @billyshipp，集中在 `/update-nanoclaw` 升级路径上的镜像重建与测试健壮性问题，值得维护者优先关注。

---

## 2. 版本发布

今日无新版本发布（Releases：0）。

---

## 3. 项目进展

今日共 **8 条 PR 合并/关闭**，主要集中在三大方向：

**消息渠道（Slack/Signal）——最大推进方向**
- [#4071](https://github.com/nanocoai/nanoclaw/pull/4071)（已关闭）：仅服务频道的 Slack bot 在收到 DM 时，会指向其频道而非冒充个人助手；来自工作区外部的 DM 不再回复。明确了 bot 身份边界。
- [#4072](https://github.com/nanocoai/nanoclaw/pull/4072)（已关闭）：修复经 App 转发的个人 Slack DM 被错误丢弃的问题（Slack 会对 API 消息打上 app 的 `bot_id`，旧守卫误伤），确保“人以本人身份触达自己的 agent”，bot 账号仍被排除。
- [#4073](https://github.com/nanocoai/nanoclaw/pull/4073)（已关闭）：将 `main` 同步进 `channels` 长期分支，采用 merge commit 保留合并基，减少后续冲突。
- [#3062](https://github.com/nanocoai/nanoclaw/pull/3062)（已关闭，7 月提交）：为 signal-cli 增加 `--send-read-receipts`，解决发送方长期看到“已送达未读”的体验问题——积压 3 个月的 PR 终于清账。

**权限与运维**
- [#4070](https://github.com/nanocoai/nanoclaw/pull/4070)（已关闭）：`declineAndNotify` 支持 `fyiText: null`，频道型 bot 拒绝操作时可跳过对 owner 的 DM 通知，减少噪音。

**历史 PR 清理**
- [#2255](https://github.com/nanocoai/nanoclaw/pull/2255)（5 月提交）：修正容器内陈旧的 `/workspace/group` 路径为 v2 的 `/workspace/agent`。
- [#2237](https://github.com/nanocoai/nanoclaw/pull/2237)（5 月提交）：调度系统新增 `@every:<ms>` 间隔递归，锚定上次执行时间防漂移，宕机后跳过错过的触发。

**整体评价**：今日在渠道能力（尤其 Slack 场景细分）上有实质性推进，且集中清理了 3 条挂起数月的历史 PR，仓库维护健康度良好。

---

## 4. 社区热点

今日无高评论量讨论（新 Issue 评论均为 0），热点主要体现在**贡献者行为密度**上：

- **@billyshipp 单日 3 动作**：报告 2 个 bug（#4076、#4074）+ 提交 1 个大型功能 PR（[#4075](https://github.com/nanocoai/nanoclaw/pull/4075) `/add-agentmail-tool` skill），并持续活跃于 [#3743](https://github.com/nanocoai/nanoclaw/pull/3743)（AgentMail 邮件渠道适配器，9 月开立至今）。诉求清晰：**希望 agent 拥有独立邮箱能力**，正在从渠道（#3743）到工具（#4075）两个层面自下而上推动。
- **@amit-shafnir（核心团队）单日 4 个 PR** 全部围绕 Slack 场景闭环（#4078 → #4071 → #4070 → #4073），显示 Slack 渠道语义正确性是当前团队焦点。

---

## 5. Bug 与稳定性

今日新增 2 个 bug，均由升级路径触发，**均尚无修复 PR**：

| 严重度 | Issue | 描述 | 状态 |
|---|---|---|---|
| 🔴 高 | [#4076](https://github.com/nanocoai/nanoclaw/issues/4076) | `/update-nanoclaw` 更新后**不重建按组定制的镜像**：装有 `packages_apt`（ffmpeg、ghostscript 等）的 agent 组在更新后仍使用旧 agent 镜像，意味着已安装依赖的组无法获得安全更新与新功能 | OPEN，无 fix PR |
| 🟠 中 | [#4074](https://github.com/nanocoai/nanoclaw/issues/4074) | `src/group-skills.test.ts` 测试**硬编码文件权限 644**，在 umask 002 环境下失败，直接阻塞 `/update-nanoclaw` 的 validate 阶段——即某些主机环境下自动更新会被测试卡死 | OPEN，无 fix PR |

两者组合的隐性风险值得注意：更新可能既不重建定制镜像，又可能被测试阻断，影响自托管用户的升级体验。

---

## 6. 功能请求与路线图信号

- **AgentMail 邮件生态**（最强信号）：[#3743](https://github.com/nanocoai/nanoclaw/pull/3743)（邮件渠道适配器，无需触碰用户域名 MX）+ [#4075](https://github.com/nanocoai/nanoclaw/pull/4075)（mail CLI + 线程级 ledger 作为邮件记忆 + 代码级发送策略）。两条 PR 均待合并，同一贡献者持续投入，很可能成为近期合入的重要能力。
- **Slack 工作区上下文传递**：[#4078](https://github.com/nanocoai/nanoclaw/pull/4078) 提出在入站消息上携带发送者与 bot 所属工作区信息（修复 chat-sdk bridge 丢弃 `message.raw` 的问题），为多工作区身份判断铺路，属于基础设施级改进。
- **Telegram 更新黑洞修复**：[#3449](https://github.com/nanocoai/nanoclaw/pull/3449) 显式指定 `allowed_updates`，解决 Telegram 服务端持久化配置导致 channel-post 被吞。已挂起近 2 个月，待维护者评审。
- **去 Python 化**：[#4077](https://github.com/nanocoai/nanoclaw/pull/4077)（已关闭）将 agent skills 中的 Python 运维示例重写为 Node，消除"python3: not found"报错——暗示 agent 容器镜像定位为纯 Node 运行时，生态方向信号明确。

---

## 7. 用户反馈摘要

今日 Issue/PR 数量有限，可提炼的真实痛点：

- **自托管升级可靠性**是核心关切：用户依赖 `/update-nanoclaw` 一键升级，但发现定制化（装包）的 agent 组被更新“遗忘”（#4076），环境差异（umask）还会让校验失败（#4074）。反映**深度定制用户与自动更新机制之间的摩擦**。
- **agent 的对外通信能力需求强烈**：用户主动为 agent 争取独立邮箱（收发、附件、线程记忆），并关注 Signal 已读回执、Telegram channel-post 可达性等细节——说明用户真实场景是“agent 作为持续在线的通信代理”，消息可达性与可观测性是满意度的关键。
- **通知噪音控制**：`declineAndNotify` 跳过 owner FYI（#4070）说明运维者希望对通知粒度有更细控制。

---

## 8. 待处理积压

| 条目 | 挂起时长 | 说明 |
|---|---|---|
| [#4076](https://github.com/nanocoai/nanoclaw/issues/4076) | 1 天（高优先建议） | 更新不重建定制组镜像，影响安全更新到达率，建议尽快回应 |
| [#4074](https://github.com/nanocoai/nanoclaw/issues/4074) | 1 天 | 测试硬编码权限，阻塞部分环境自动更新 |
| [#3449](https://github.com/nanocoai/nanoclaw/pull/3449) | **约 51 天** | Telegram `allowedUpdates` 修复，8/22 提交至今未合并，社区贡献者 @wakqasahmed 可能流失，建议评审 |
| [#3743](https://github.com/nanocoai/nanoclaw/pull/3743) | **约 34 天** | AgentMail 渠道适配器，功能完整度高，与 #4075 形成配套，建议明确合入计划 |
| [#4078](https://github.com/nanocoai/nanoclaw/pull/4078) / [#4075](https://github.com/nanocoai/nanoclaw/pull/4075) | 新开（4 条待合并） | 今日新增的 4 条 OPEN PR，均待评审 |

**健康度小结**：合并吞吐良好（8/12），历史积压清理积极；但升级路径 bug（#4076/#4074）尚无对应 fix PR，且存在 1-2 条超月度挂起的社区 PR，建议维护者优先排期。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 · 2026-10-12

## 1. 今日速览

NullClaw 今日整体活跃度较低：无新版本发布、无 PR 合并，仅 1 条新开 Issue（#1055），但该 Issue 质量较高，延续近期 memory/上下文管理优化的技术讨论线。代码层面今日无实质推进，社区讨论聚焦于会话持久化存储边界的架构完善。整体处于功能迭代间歇期，健康度平稳。

## 2. 版本发布

今日无新版本发布，略。

## 3. 项目进展

- 今日无 PR 合并或关闭，代码仓库无新增提交合并记录。
- 相关背景：#1055 为 #1053 / #1054（由 @O96a 贡献）的后续 issue，说明 memory 压缩（compaction）功能仍在持续打磨中，restore 端已通过 `max_history_messages` 限制加载量，但 store 端尚未收敛。

## 4. 社区热点

**[#1055] memory: bound the persisted session transcript**（[链接](https://github.com/nullclaw/nullclaw/issues/1055)）
- 今日唯一也是 hottest 的讨论：3 条评论，作者 @vernonstinebaker，创建即活跃。
- 核心问题：`persistTurn` 每轮无条件 append user+assistant 消息，而 compaction 结果被丢弃，导致**持久化会话记录无限增长**——即使 restore 端已限流（#1054），底层存储仍会膨胀。
- 诉求信号：社区关注长期运行场景下的存储成本与性能可预期性，属于 AI Agent 记忆管理的关键工程问题。诉求明确且方案方向清晰（compaction write-back + sequence guard），大概率会被接受实现。

## 5. Bug 与稳定性

今日无新报告的崩溃、回归类 Bug。需注意：
- **潜在稳定性风险（中等）**：[#1055](https://github.com/nullclaw/nullclaw/issues/1055) 描述的持久化会话记录无上限增长，长会话场景下可能导致存储占用持续膨胀、restore 变慢。目前**尚无 fix PR**，建议关注。

## 6. 功能请求与路线图信号

- **#1055（enhancement）**：要求将 compaction 结果回写持久层，并用 sequence guard 保证写入一致性。这是对 #1053/#1054 工作的自然延伸，技术路径已有共识雏形，**很可能进入下一版本或近期 PR**。
- 路线图信号：项目正系统性收紧 memory 子系统的资源边界（加载端 → 存储端），预计后续还会有类似 hardening 工作。

## 7. 用户反馈摘要

- 长会话/多轮对话场景下，会话持久化文件持续增长是真实痛点；用户认可 #1054 修复了请求级上下文膨胀，但指出修复不彻底。
- 反馈风格偏工程化：讨论聚焦具体机制（`persistTurn` 行为、compaction 结果丢弃、sequence guard），说明核心用户群为深度集成开发者，对存储可预期性要求高。

## 8. 待处理积压

- [#1055](https://github.com/nullclaw/nullclaw/issues/1055)：今日新开，尚无维护者正式回应（评论 3 条均为讨论），建议维护者尽快确认方案方向，避免与后续 compaction 相关改动冲突。
- 建议顺带复查 #1053 / #1054 的落地状态，确认 #1054 的 `max_history_messages` 限制是否已在文档中明确说明，以免用户误以为存储问题已随之解决。

---
*数据来源：NullClaw GitHub 仓库（过去 24 小时）。总体评估：项目处于低活跃但健康状态，memory 子系统持续演进，建议关注 #1055 后续 PR 动向。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-10-12

## 1. 今日速览

IronClaw 今日整体呈现「维护型活跃」状态：无新 Issue、无新版本发布，但 PR 活动达到 7 条更新（4 条待合并、3 条合并/关闭），全部来自 Dependabot 自动化依赖管理。这表明项目核心维护节奏稳定，依赖健康度持续被关注，但过去 24 小时内没有功能性开发或社区讨论动态。活跃度评估：**中等偏低（纯维护性）**。

## 2. 版本发布

今日无新版本发布，省略。

## 3. 项目进展

今日无功能性代码合并，进展集中在依赖维护闭环：

- **关闭 [PR #8114](https://github.com/nearai/ironclaw/pull/8114)** — everything-else 组 31 项 Rust 依赖更新（thiserror、uuid、base64 等），被后续 PR #8134 取代，属正常 dependabot 滚动更新流程。
- **关闭 [PR #8103](https://github.com/nearai/ironclaw/pull/8103)** — GitHub Actions 组 8 项更新，同样被 #8133 接续。
- **关闭 [PR #8123](https://github.com/nearai/ironclaw/pull/8123)** — tokio 生态 3 项更新（tokio-test、tower-http、tokio-tungstenite），被 #8132 接续。

**解读**：3 条关闭均为「陈旧 dependabot PR 被新批次替代」模式，说明维护者今日批量清理了依赖积压，推进了依赖基线更新（tokio-test 0.4.6、tower-http 等），整体属于小幅向前。

## 4. 社区热点

今日无任何 Issue 活动或 PR 评论互动，无社区热点可分析。这是一个值得注意的信号——**0 条 Issue 更新意味着今日无用户反馈流入**，可能反映项目处于稳定期或社区活跃度阶段性平淡。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题。间接信号：

- 依赖批量更新 PR 均未被紧急回滚，侧面表明当前主干稳定性良好。
- 注意 [PR #7834](https://github.com/nearai/ironclaw/pull/7834)（wasm 组更新，标签 `risk: medium`）仍开放，wasmtime 版本升级需持续观察兼容性。

## 6. 功能请求与路线图信号

今日无新功能请求。从 PR 标签体系可推断维护方向：

- 项目已建立成熟的 PR 分类机制（`size`、`risk`、`scope`、`contributor` 标签），显示维护流程工程化程度高。
- 持续的 wasm 依赖组更新（wasmtime/wit-component）暗示 **WASM 运行时是项目核心能力之一**，未来演进可能围绕该方向。
- GitHub Actions 中 `claude-code-action` 的大版本跳跃（1.0.183 → 1.0.247，见 [PR #8133](https://github.com/nearai/ironclaw/pull/8133)）表明团队在 CI 中积极采用 AI 辅助编码工作流。

## 7. 用户反馈摘要

今日 Issue 更新为 0，无用户评论可提炼。无法产出真实用户痛点分析。

## 8. 待处理积压

| PR | 开放时长 | 内容 | 建议 |
|---|---|---|---|
| [PR #7834](https://github.com/nearai/ironclaw/pull/7834) | **约 50 天**（2026-08-23 起） | wasm 组 4 项更新（wasmtime 等），`size: L, risk: medium` | ⚠️ 积压最久，且涉及 `risk: medium` 的 wasmtime 升级，建议维护者优先评估 |
| [PR #8134](https://github.com/nearai/ironclaw/pull/8134) | 1 天 | everything-else 组 34 项更新 | 新鲜待审 |
| [PR #8133](https://github.com/nearai/ironclaw/pull/8133) | 1 天 | actions 组 10 项更新 | 新鲜待审 |
| [PR #8132](https://github.com/nearai/ironclaw/pull/8132) | 1 天 | tokio 生态 4 项更新 | 新鲜待审 |

**维护者提醒**：今日 4 条待合并 PR 均为依赖更新，常规 CI 通过后即可批量合并；重点应关注长期搁置的 #7834。

---

**健康度小结**：IronClaw 处于稳定维护期，依赖管理自动化运转良好、无稳定性问题报告；短板在于社区互动为零、无功能迭代信号，建议关注社区运营与长期 PR（#7834）的处置。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-10-12）

## 1. 今日速览

LobsterAI 今日整体活跃度较低，未产生新的 Issue、无新版本发布。唯一的动态是一条 PR 状态更新：长期搁置的“会话文件夹”功能 PR #978 因 stale 机制被自动关闭。项目处于低维护强度状态，社区输入几乎停滞，建议关注核心维护者的回归迹象。

## 2. 版本发布

无新版本发布。（省略详情）

## 3. 项目进展

- **PR #978 [CLOSED] [stale] Feature/add chat folder**（作者 @Yang1k，创建于 2026-03-27，更新于 2026-10-11）
  链接：https://github.com/netease-youdao/LobsterAI/pull/978
  该 PR 实现了侧边栏任务（会话）的文件夹归类功能，涉及 12 个文件（含后端 SQLite 迁移、`src/main/sqliteStore.ts` 中 `cowork_sessions` 表扩展等），文件夹名称持久化到本地 SQLite。该 PR 并非因代码质量问题被拒，而是**因长期无维护者响应被 stale 机器人自动关闭**。这意味着一个完成度较高的功能贡献未被合并，属社区动力的损失而非项目实质推进。

## 4. 社区热点

今日无活跃讨论。唯一可关联的热点是上述 PR #978 的 stale 关闭事件，其背后诉求是：**用户在会话/任务数量增多后亟需分组管理能力**（文件夹功能）。该功能已有社区开发者主动实现，但未获维护者反馈。

## 5. Bug 与稳定性

过去 24 小时无新报 Bug、崩溃或回归问题。无已知 fix PR。

## 6. 功能请求与路线图信号

| 功能信号 | 来源 | 状态 | 判断 |
| --- | --- | --- | --- |
| 会话/任务文件夹分组管理 | [PR #978](https://github.com/netease-youdao/LobsterAI/pull/978) | 已实现但因 stale 关闭 | 需求真实、代码已就绪。若维护者回归，重新打开并 review 是低成本高收益的选项，有较大潜力进入下一版本 |

除此之外今日无新增功能请求，无法推断更多路线图动向。

## 7. 用户反馈摘要

今日 Issues 为 0 条，无新用户反馈可提炼。间接信号：@Yang1k 的 PR 描述反映出重度用户的核心痛点——**任务数量多时侧边栏管理混乱，缺乏组织维度**。

## 8. 待处理积压

- **PR #978（chat folder 功能）**：自 2026-03-27 提交后约 6.5 个月无维护者响应，于昨日被 stale 自动关闭。建议维护者：
  1. 若功能符合路线图，重新打开并安排 review（代码含完整的数据库迁移设计，完成度较高）；
  2. 若不纳入，明确关闭并说明原因，避免社区贡献者流失。
  链接：https://github.com/netease-youdao/LobsterAI/pull/978

---

**健康度小结**：今日指标（0 Issue / 1 PR 状态变更 / 0 Release）显示项目处于低活跃期。stale 机制关闭高质量贡献 PR 是一个值得警惕的信号，建议关注后续维护者响应情况。

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

# CoPaw 项目动态日报

**日期：2026-10-12 | 数据来源：github.com/agentscope-ai/CoPaw**

---

## 1. 今日速览

今日项目保持高活跃度：24 小时内 Issues 更新 11 条（10 新开/活跃、1 关闭），PR 更新 20 条（8 待合并、12 合并/关闭），无新版本发布。社区反馈集中在 v2.2.1 的稳定性问题——包括 Codex backend 僵尸任务、GitHub 技能安装损坏二进制文件等重量级 Bug，同时贡献者提交了取消原因保留、HarmonyOS 原生客户端等大体积 PR。整体呈现「Bug 报告密集 + 大型功能 PR 持续推进」的典型快速迭代期特征。

---

## 2. 版本发布

今日无新版本发布。（v2.1.1b2 相关 Bug #7311 今日关闭，或暗示修复已随近期版本落地。）

---

## 3. 项目进展

今日关闭的 PR 多为历史积压批量清理（主要集中在 MCP、runner 健壮性和插件市场方向）：

**已合并/关闭：**
- [#5661](https://github.com/agentscope-ai/CoPaw/pull/5661) 插件市场按版本兼容性过滤（CDN + Platform 双端）— 提升安装安全性
- [#5612](https://github.com/agentscope-ai/CoPaw/pull/5612) 修复插件市场 v1.x/v2.x 下载路由未隔离问题
- [#5569](https://github.com/agentscope-ai/CoPaw/pull/5569) 桌面端启动白屏优化（两阶段加载）
- [#5732](https://github.com/agentscope-ai/CoPaw/pull/5732) 新增 `none` memory backend，支持 Console 关闭记忆系统
- @futuremeng 一批老 PR 关闭：MCP teardown/cron 健壮性（[#1977](https://github.com/agentscope-ai/CoPaw/pull/1977)）、上下文溢出自动压缩重试（[#2783](https://github.com/agentscope-ai/CoPaw/pull/2783)）、模型激活预检（[#2520](https://github.com/agentscope-ai/CoPaw/pull/2520)）、MCP 连接错误降级（[#2052](https://github.com/agentscope-ai/CoPaw/pull/2052)）等

**待合并（值得关注的重量级）：**
- [#8164](https://github.com/agentscope-ai/CoPaw/pull/8164) [size/XXXL] **HarmonyOS 原生客户端**（ArkUI/ArkTS，非 WebView 壳）
- [#8182](https://github.com/agentscope-ai/CoPaw/pull/8182) [size/XL] 会话级审批级别服务端持久化
- [#8183](https://github.com/agentscope-ai/CoPaw/pull/8183) [size/L] 工具取消原因保留 + agent 循环可恢复

---

## 4. 社区热点

- **[#8174](https://github.com/agentscope-ai/CoPaw/issues/8174)**（3 评论）：内置 `web_search` Tavily provider 强制 keyless 匿名调用，付费用户无法使用自己的配额，无任何 API key 配置入口。诉求明确：补一个配置面。
- **[#7990](https://github.com/agentscope-ai/CoPaw/issues/7990)**（3 评论）：模型目录未为 Aliyun Token Plan 模型声明 `thinking_param_style`，Console 思考控件被隐藏，但上游端点实际支持 — 官方目录数据滞后问题。
- **[#7311](https://github.com/agentscope-ai/CoPaw/issues/7311)**（5 评论，今日关闭）：v2.1.1b2 缺失 `_qwenpaw_remote_backend` 导致所有工具失效，桌面端打包完整性问题。

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 问题 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#8173](https://github.com/agentscope-ai/CoPaw/issues/8173) | Codex backend 重启后静默断连 + 僵尸 `running` 任务阻塞所有恢复路径（v2.2.1） | 暂无 |
| 🔴 高 | [#8179](https://github.com/agentscope-ai/CoPaw/issues/8179) | 从 GitHub 安装 skill 时非 UTF-8 字节被替换为 U+FFFD，图片/字体二进制文件静默损坏（疑似按 UTF-8 文本读取所致） | 暂无 |
| 🟠 中高 | [#8184](https://github.com/agentscope-ai/CoPaw/issues/8184) | Doom-loop 门控误杀合法的任务授权轮询，且终止后 cron 记录虚假成功 — 安全机制误判类问题 | 暂无（[#8183](https://github.com/agentscope-ai/CoPaw/pull/8183) 相关但非直接修复） |
| 🟠 中 | [#8175](https://github.com/agentscope-ai/CoPaw/issues/8175) | `ProviderManager.active_model` 启动不加载 + 静默 `except Exception: pass`，无 agent 级模型的 workspace 每晚 cron（dream）必失败 | 暂无 |
| 🟡 低 | [#8177](https://github.com/agentscope-ai/CoPaw/issues/8177) | Console basename 硬编码 `/console`，反代子路径部署不可用 | 暂无 |
| 🟡 低 | [#8176](https://github.com/agentscope-ai/CoPaw/issues/8176) | 插件商店“一键全部更新”跳过第三方插件 | 暂无 |

---

## 6. 功能请求与路线图信号

- **会话级实时变更通知**（[#8181](https://github.com/agentscope-ai/CoPaw/issues/8181)）：希望聊天区通过长连接实时反映后端会话变化，替代硬刷新 — 前端架构升级诉求，尚无对应 PR。
- **会话级审批级别**（[#8180](https://github.com/agentscope-ai/CoPaw/issues/8180) 提问 → PR [#8182](https://github.com/agentscope-ai/CoPaw/pull/8182)）：issue 与 PR 同日出现，**大概率纳入下个版本**。
- **Tavily API key 配置面**（[#8174](https://github.com/agentscope-ai/CoPaw/issues/8174)）：改动小、诉求清晰，短期可期。
- **嵌套分类技能目录**（PR [#8178](https://github.com/agentscope-ai/CoPaw/pull/8178)，首次贡献者）：与其他 agent 生态布局对齐，社区驱动方向。
- **HarmonyOS 原生客户端**（PR [#8164](https://github.com/agentscope-ai/CoPaw/pull/8164)）：标志客户端矩阵向鸿蒙扩展。

---

## 7. 用户反馈摘要

- **Docker/自托管用户**是 Bug 报告主力，痛点集中在重启恢复路径（#8173）、反代部署（#8177）、cron 静默失败（#8175）—— 反映自托管场景测试覆盖不足。
- **静默失败是最大不满来源**：二进制损坏无提示（#8179）、异常被吞（#8175）、插件更新跳过第三方无说明（#8176），用户普遍要求「失败要可见、要能解释」。
- **多 agent/workspace 用户**（如 6 workspace 的 #8175）正成为核心用户群，对后台任务可靠性要求高。
- 正面信号：社区愿意提交高质量长文 Bug 报告并附复现细节，Desktop/Console/Docker 全形态均有活跃用户。

---

## 8. 待处理积压

- **[#8173](https://github.com/agentscope-ai/CoPaw/issues/8173) Codex backend 僵尸任务**：高严重度、今日新报，建议维护者优先分派。
- **[#8179](https://github.com/agentscope-ai/CoPaw/issues/8179) skill 二进制损坏**：数据破坏型 Bug，影响生态分发信任，需尽快修复。
- **#7990（创建于 09-25，至今 17 天）**：模型目录 `thinking_param_style` 缺失，官方数据文件补一条声明即可，属低成本高收益。
- **PR 积压**：#8164（XXXL，HarmonyOS）、#8156（coding-cli 管理端点）等大 PR 长期 Open，建议明确 review 计划，避免贡献者流失。
- **@futuremeng 历史批量关闭 PR 的去向**：部分修复（如 #2520 模型预检、#2783 上下文压缩重试）与今日新报 Bug（#8175）主题高度相关，若未实际合入需确认是否回归。

---

**健康度小结**：Issue 关闭/新开比偏低（1/10），Bug 积压上升，但 PR 流水（含 XXXL 级功能）显示开发侧动力充足。建议下个版本优先打包稳定性修复（#8173/#8179/#8175）再推新功能。

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