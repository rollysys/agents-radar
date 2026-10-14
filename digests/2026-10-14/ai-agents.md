# OpenClaw 生态日报 2026-10-14

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-14 04:02 UTC

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

# OpenClaw 项目动态日报 · 2026-10-14

---

## 1. 今日速览

OpenClaw 今日保持高活跃度：24 小时内 Issues 更新 500 条（新开/活跃 343，关闭 157），PR 更新 500 条（待合并 376，已合并/关闭 124），并发布 2 个新版本（v2026.10.3 稳定版与 v2026.10.5-beta.3）。核心贡献者 @steipete 今日密集提交了十余个 PR，集中在 Control UI 从 Lit 向 Solid 的迁移收尾、启动性能优化与内存诊断基础设施。社区侧，Windows 平台的 SQLite WAL 膨胀问题（#143524，123 条评论）仍是最大热点，升级/更新器（updater）相关的 P0 问题持续累积，稳定性压力主要集中在存储层与更新链路。

---

## 2. 版本发布

### v2026.10.3（稳定版）
- **规模**：90 commits · 79 pull requests · 99 contributors
- 完整 Release Notes 见 [docs.openclaw.ai/releases](https://docs.openclaw.ai/releases/2026.10.3)

### v2026.10.5-beta.3
- **Highlights：更新过程不再中断 Gateway 运行**
  - pnpm 12 安装路径下，Gateway 服务与 `openclaw` launcher 保留在持久安装路径上
  - Windows 更新支持合格的 Scheduled Task 账户及其自身经过验证的 driver
  - macOS 支持受保护的 Bun 服务
- **迁移注意**：beta 更新链路本身仍有问题报告（见 #170331、#170332），从 beta.1 → beta.2 升级曾出现候选配置读取失败、systemd unit 未变更、状态捕获期间 live DB 变更后继续更新等情况，生产环境升级建议先备份状态目录。

---

## 3. 项目进展

今日 @steipete 的系列 PR 构成三条主线：

**Control UI Solid 迁移收尾**
- [PR #171554](https://github.com/openclaw/openclaw/pull/171554)：完成原生 shell 渲染（home toggle、状态、loading 内容脱离 Lit）
- [PR #171557](https://github.com/openclaw/openclaw/pull/171557)：统一 session identity 渲染
- [PR #171653](https://github.com/openclaw/openclaw/pull/171653)、[PR #171664](https://github.com/openclaw/openclaw/pull/171664)：队列消息操作改用原生菜单、表现层契约与 Lit 适配器解耦

**启动与运行时性能**
- [PR #171685](https://github.com/openclaw/openclaw/pull/171685)：减少 Gateway 启动时的冗余数据库读取（直接对应 #168955、#166020 等启动缓慢投诉）
- [PR #171582](https://github.com/openclaw/openclaw/pull/171582)：shell/运行时启动归属到有界 owner（改进诊断）
- [PR #171683](https://github.com/openclaw/openclaw/pull/171683)：fork 上下文改为编码数据，避免深拷贝对话图
- [PR #171680](https://github.com/openclaw/openclaw/pull/171680)：限制归档清理期间的 Git housekeeping 频率
- [PR #171686](https://github.com/openclaw/openclaw/pull/171686)：为 RPC/turn 增加 allocated bytes 诊断（内存优化前置基建）

**新功能**
- [PR #171623](https://github.com/openclaw/openclaw/pull/171623)（XL）+ [PR #171600](https://github.com/openclaw/openclaw/pull/171600)：Claw 作为普通 agent 与资源接入，Add 后直接进入新 agent 聊天——本日最大功能推进
- [PR #171678](https://github.com/openclaw/openclaw/pull/171678)：通过 `gateway stop` 恢复冻结的 Gateway 启动（fixes #171513）
- [PR #171627](https://github.com/openclaw/openclaw/pull/171627)：stock Bun 升级至 1.4.3

**社区修复 PR（多为 ready for maintainer look）**
- [PR #171581](https://github.com/openclaw/openclaw/pull/171581)：修复 IDENTITY.md 导入截断含下划线的名称/头像路径
- [PR #171616](https://github.com/openclaw/openclaw/pull/171616)：修复会话导出截断含空格文件名
- [PR #165889](https://github.com/openclaw/openclaw/pull/165889)：crabbox 重试 deadline 在时钟回拨下保持单调

---

## 4. 社区热点

1. **[#143524](https://github.com/openclaw/openclaw/issues/143524)**（123 评论，P0）— Agent SQLite WAL 数天内膨胀至 1.4–2.8 GB，手动 checkpoint 后复发并阻塞 Gateway 启动（Windows）。社区高度关注，尚无 fix PR（clawsweeper: no-new-fix-pr），诉求是存储层 checkpoint 机制需根治而非手工运维。
2. **[#38327](https://github.com/openclaw/openclaw/issues/38327)**（18 评论，P0，已开启数月）— google-vertex/gemini-3.1-pro-preview 上 "Cannot convert undefined or null to object"，auth-provider 回归类长期悬置。
3. **[#148707](https://github.com/openclaw/openclaw/issues/148707)**（19 评论，P1）— 同 session 第二次 run 挤掉 in-flight turn 导致回复丢失（"no active tool authority snapshot"），9.4 回归。
4. **[#85333](https://github.com/openclaw/openclaw/issues/85333)**（17 评论，已关闭）— `doctor --fix` 性能回归 4-5 倍，session snapshot 路径遍历瓶颈。
5. **[#157989](https://github.com/openclaw/openclaw/issues/157989)**（16 评论，P1）— 插件 source capture 每条 CLI 命令重写 1.1–1.4 GB、每次 Gateway 启动 6.5 GB，SSD 磨损问题，与 [#158390](https://github.com/openclaw/openclaw/issues/158390)（plugin-captures 临时目录永不 GC）同根，用户对插件运行时的 I/O 设计强烈不满。

---

## 5. Bug 与稳定性（按严重度）

### P0
| Issue | 问题 | Fix PR |
|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | WAL 膨胀阻塞 Gateway 启动 | ❌ 无 |
| [#148307](https://github.com/openclaw/openclaw/issues/148307) | session 回收超 5s busy timeout → "database is locked"（464MB DB） | ❌ 无 |
| [#158390](https://github.com/openclaw/openclaw/issues/158390) | plugin-captures 临时目录不 GC，磁盘无限增长 | ❌ 无 |
| [#166221](https://github.com/openclaw/openclaw/issues/166221) | 2026.9.4→9.8 升级在 SQLite preflight 失败 | ❌ 无 |
| [#166894](https://github.com/openclaw/openclaw/issues/166894) | Windows 多 agent 下 Gateway 重启挂起 30 分钟–2 小时 | ⚠️ 相关：[PR #171678](https://github.com/openclaw/openclaw/pull/171678) |
| [#161921](https://github.com/openclaw/openclaw/issues/161921) | 升级后 `doctor --fix` 与 `plugins update` 互相死锁 | ❌ 无 |
| [#167557](https://github.com/openclaw/openclaw/issues/167557) | 插件数据迁移永不收敛 | ❌ 无 |
| [#161216](https://github.com/openclaw/openclaw/issues/161216) | "Sign in with ChatGPT" beta 全局宕机（invalid_client） | ❌ 无（外部依赖？） |
| [#137085](https://github.com/openclaw/openclaw/issues/137085) | macOS App 8.2 升级后设备身份卡在 native-importing | ❌ 无 |

### P1（选摘）
- [#168955](https://github.com/openclaw/openclaw/issues/168955)：2026.10.1 启动回归，ready 时间 410s→1030s，`sidecars.control-ui-assets` 阻塞 477s（PR #171685 可能缓解）
- [#163029](https://github.com/openclaw/openclaw/issues/163029)：2026.9.7 仍会在 turn 中途重载外部插件，主线程卡 40–70s
- [#161379](https://github.com/openclaw/openclaw/issues/161379)：模型目录刷新循环钉死一个 CPU 核心
- [#144291](https://github.com/openclaw/openclaw/issues/144291)：config 热重载中止所有 in-flight agent turn
- [#159512](https://github.com/openclaw/openclaw/issues/159512)：claude-cli 子 agent 完成导致请求方会话双重失效

### 稳定性模式总结
问题高度聚类于三处：**① SQLite/存储层**（WAL、锁、checkpoint）、**② 更新/迁移链路**（updater、插件迁移死锁）、**③ 插件加载 I/O**（capture 重写、无 GC、中途重载）。大多数 P0 尚无 fix PR，clawsweeper 标签显示多数处于 needs-maintainer-review / needs-product-decision 阶段。

---

## 6. 功能请求与路线图信号

- **[PR #171623](https://github.com/openclaw/openclaw/pull/171623) / [PR #171600](https://github.com/openclaw/openclaw/pull/171600)（Claw 即 agent）**：核心维护者提交，几乎确定进入下一版本。
- **[#45508](https://github.com/openclaw/openclaw/issues/45508)**：webchat 语音走 Gateway 而非浏览器 Speech API，支持自托管 STT/TTS——配套 [PR #165648](https://github.com/openclaw/openclaw/pull/165648)（tts-local-cli 语音选择）已在推进，语音是明确方向。
- **[#91676](https://github.com/openclaw/openclaw/issues/91676)**：`skills.workshop.allowSandboxedAgents` 开关，needs-product-decision。
- **[#111143](https://github.com/openclaw/openclaw/issues/111143)**：Control UI 侧边栏可固定插件 tab；与当前 Solid 迁移重构窗口契合，采纳概率上升。
- **[#47910](https://github.com/openclaw/openclaw/issues/47910)**（已关闭）：按失败类别做 provider fallback / 隔离 auth 失效 provider——多 provider 用户长期诉求。
- **[#110379](https://github.com/openclaw/openclaw/issues/110379)**：Control UI "More" 菜单可发现性差，与 #111143 同属 UX 改进方向。

---

## 7. 用户反馈摘要

- **最大痛点：升级即翻车**。多个 P0（#166221、#167557、#161921、#170331/#170332）均由 `openclaw update` 触发，用户在 npm/Windows/macOS 各安装形态下遇到升级挂起、迁移不收敛、回滚缺失。beta 更新器的"状态捕获期间 DB 在变还继续更新"引发对更新安全性的信任担忧。
- **Windows 用户负担重**：WAL 膨胀（#143524）、重启挂起（#166894）、启动回归（#168955）集中出现在 Windows 多 agent 安装上。
- **消息丢失是最伤体验的类别**：Telegram 单次尝试即 dead-letter（#125764、#126246）、回复丢失（#148707、#158147、#155119）、飞书多 lane 丢回复（#157389）——个人助手场景下"静默丢消息"直接损害信任。
- **资源消耗**：SSD 写入量（#157989）、OOM（#99659）、CPU 钉死（#161379）被长期运行/自托管用户反复提及。
- **正面信号**：社区贡献 PR 质量高（带 proof 标签、复现步骤），99 名贡献者参与 2026.10.3，voting/评论文化活跃；@steipete 对启动性能和内存诊断的系统性投入受到期待。

---

## 8. 待处理积压

| Issue/PR | 状态 | 说明 |
|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | OPEN，9/9 提出，35 天 | 最高热度 P0，无 fix PR，**建议优先排期** |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | OPEN，3 月提出，7+ 月 | google-vertex 回归 P0 长期无进展 |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) / [#158390](https://github.com/openclaw/openclaw/issues/158390) | OPEN | 插件 capture I/O 成对 P0/P1，影响硬件寿命 |
| [#125764](https://github.com/openclaw/openclaw/issues/125764) / [#126246](https://github.com/openclaw/openclaw/issues/126246) | OPEN，8 月起 | Telegram 投递可靠性，needs-product-decision 悬置 |
| [#161216](https://github.com/openclaw/openclaw/issues/161216) | OPEN，stale | ChatGPT 登录 beta 全局不可用，需尽快给外部沟通结论 |
| [PR #149775](https://github.com/openclaw/openclaw/pull/149775) | OPEN，9/16 起 | 文本截断修复，needs proof 近一个月 |
| [PR #157106](https://github.com/openclaw/openclaw/pull/157106) | OPEN，9/24 起 | Codex catalog 修复，needs proof |
| [PR #122022](https://github.com/openclaw/openclaw/pull/122022) | OPEN，8/11 起 | vLLM reasoning 别名，waiting on author 超两个月 |

**健康度小结**：项目迭代速度与社区贡献质量优秀（124 PR 合并/关闭、2 个 release/日），但 P0 积压中存储层与更新器问题占比过高，且多数缺 fix PR，是当前最大的健康风险点。建议维护者将 SQLite checkpoint/WAL、updater 迁移链路列为下一稳定版的主攻方向。

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告
**数据窗口：2026-10-14（24h）**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入**高速迭代与分层分化并行**的阶段：头部项目（OpenClaw、Hermes Agent）日 Issue/PR 更新量达 50-500 条量级，贡献者规模近百至数千人；中腰部项目（NanoBot、Zeroclaw、CoPaw/QwenPaw）呈健康的社区自驱增长，而尾部多个项目（PicoClaw、Moltis、IronClaw 等）出现维护断档或零活动。技术上，生态正集体从“功能堆叠”转向**可靠性深水区**——存储层（SQLite 持久化）、更新链路、消息投递正确性、成本可观测性成为各项目共同的主战场。多智能体编排、插件生态治理、本地/多 provider 模型路由构成下一轮竞争焦点。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新（新开/活跃） | PR 更新（待合并） | Release | 贡献者画像 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（343 活跃 / 157 关闭） | 500（376 / 124） | 2（v2026.10.3 + beta.3） | 99 人参与稳定版；@steipete 密集提交 | 🟢 高活跃，⚠️ P0 积压（存储/更新器）为最大风险 |
| **Hermes Agent** | 50（48 / 2） | 50（50 / 0） | 1（v0.22.0 超大版本：~6,080 PR、~2,520 贡献者） | 贡献者基数最大 | 🟢 发布窗口期；P1/P2 稳定性 issue 缺 fix PR |
| **NanoBot** | 5（5 / 0） | 29（24 / 5） | 0 | 外部贡献者单日 4 个带回归测试的 PR | 🟢 社区自驱强；Docker 开箱问题 + 24 PR 积压 |
| **Zeroclaw** | 24（22 / 2） | 50（40 / 10） | 0 | 多位稳定外部贡献者 | 🟢 良好；40 PR 积压 + CI flaky 拖累门禁 |
| **CoPaw (QwenPaw)** | 17（13 / 4） | 36（19 / 17） | 0（v2.2.2 临近） | 多名 first-time 贡献者，闭环速度快 | 🟢 健康上升期；Windows 中文环境与任务可靠性薄弱 |
| **NanoClaw** | 1（0 / 1） | 4（3 / 1） | 0 | 核心团队驱动为主 | 🟡 中低活跃，review 吞吐瓶颈（PR #2899 积压 3 月） |
| **Moltis** | 0 | 2（2 / 0） | 0 | 单一作者 | 🟡 低活跃，单人依赖风险 |
| **IronClaw** | 0 | 1（dependabot） | 0 | 无社区互动 | 🟡 静默维护日 |
| **PicoClaw** | 6（0 / 6 全关闭） | 2（1 / 1） | 0（停更 v0.3.1） | stale bot 批量关闭，零人工响应 | 🔴 维护告警：安全披露无门、有效贡献流失 |
| NullClaw / TinyClaw / ZeptoClaw / EasyClaw / LobsterAI | 0 / 0 / 摘要失败 | — | — | — | ⚪ 无活动/待观察 |

---

## 3. OpenClaw 在生态中的定位

**优势**：
- **迭代速度生态第一**：单日 2 个 release（90 commits / 99 contributors 的稳定版节奏），Issue/PR 吞吐量是第二梯队项目的 10-20 倍。
- **基础设施系统性投入**：@steipete 在启动性能、内存诊断（allocated bytes 基建）、UI 框架迁移（Lit→Solid）上的投入属于前瞻性架构治理，同类项目少见。
- **社区工程文化成熟**：clawsweeper 自动 triage、proof 标签、99 人参与稳定版。

**技术路线差异**：
- OpenClaw 走“全功能个人助手平台”路线（Gateway 常驻 + 多渠道消息 + Control UI + 插件体系），复杂度最高，也因此承受存储层/更新器最重的稳定性税。
- NanoBot/Zeroclaw 更聚焦轻量 agent 核心 + 成本记账；CoPaw 强调插件生态与本地模型兼容；Moltis 专攻多智能体编排权限治理——各自以更窄的切口规避了 OpenClaw 的复杂度问题。

**社区规模对比**：OpenClaw（日 500 级活动）> Hermes（50 级 + 2,520 贡献者基数）> Zeroclaw/CoPaw（20-50 级）> NanoBot/NanoClaw（个位数-30 级）> 其余。

**核心短板**：P0 中 SQLite WAL/锁、updater 迁移死锁、插件 I/O 无 GC 等 9 项**多数无 fix PR**，与发布速度形成剪刀差；Windows 多 agent 场景是重灾区。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **SQLite 会话存储架构** | OpenClaw、NanoBot、Zeroclaw、CoPaw | OpenClaw WAL 膨胀锁库（#143524）、NanoBot 以 SQLite 取代 JSONL 权威存储（#5943）、Zeroclaw transcript 重写丢失时间戳（#11420）、CoPaw 持久化分页历史（#7931）——**整段重写模式被四个项目共同证伪**，追加式写入 + 事务化是共识方向 |
| **更新器/升级可靠性** | OpenClaw、NanoBot、CoPaw、PicoClaw、NanoClaw | “升级即翻车”是 OpenClaw 用户最大痛点（4+ 个 P0）；NanoBot 整合可恢复更新（#6168）；CoPaw/NanoClaw 处理首次更新失败路径 |
| **消息投递正确性（不丢/不重）** | OpenClaw、NanoClaw、Zeroclaw、Hermes | OpenClaw 回复丢失/Telegram dead-letter、NanoClaw 32 秒 21 条重复消息（#30）、Zeroclaw mid-turn 消息延迟（#11725）、Hermes 出站消息钩子统一（#134330） |
| **Agent 失控护栏** | NanoClaw、PicoClaw、Hermes | maxTurns 上限、循环检测、重复消息抑制——生产环境个人助手的刚需 |
| **多 provider 成本可观测性** | Zeroclaw、OpenClaw、Hermes | Zeroclaw OpenRouter 记 $0.00（#11204）、reasoning token 少计；Hermes provider 令牌统计；缓存失效推高成本（Zeroclaw #10777/#11696） |
| **多智能体编排权限** | Moltis、Zeroclaw、OpenClaw | Moltis spawn allowlist（#1302）、Zeroclaw 子循环审批 fail-closed（#10643）、OpenClaw Claw 即 agent（#171623） |
| **本地/长会话性能** | CoPaw、NanoBot、Hermes、OpenClaw | 本地模型兼容（Ollama/LM Studio）、会话扫描开销、prompt 缓存保护 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构特点 |
|---|---|---|---|
| OpenClaw | 全栈个人助手（多渠道 + UI + 插件 + cron） | 全平台重度自托管用户 | Gateway 常驻、Bun 运行时、Lit→Solid 迁移中 |
| Hermes Agent | 消息平台全覆盖（TG/Matrix/Slack/WhatsApp）+ 桌面端 | 多平台聊天场景用户、贡献者基数最大 | 大版本瀑布式发布（v0.22 含 6,080 PR） |
| NanoBot | 轻量 agent 核心 + token 成本治理 | 中级开发者 | 工具描述精简、JSONL→SQLite 架构升级 |
| Zeroclaw | 网关分离（v0.9.0）+ 成本/限额体系 | 多 provider 自托管运维者 | 配额、路由、成本记账中心化 |
| CoPaw | 插件生态 + 本地模型 + Code Mode | 中文/Windows、本地推理、企业内网用户 | 插件 API 深度集成、多运行时 |
| NanoClaw | agent-runner 可靠性 + macOS 原生 | 小规模生产场景用户 | Apple container 运行时 |
| Moltis | 多智能体组织拓扑（org-chart/coordinator） | agent 编排开发者 | spawn 权限白名单、路径一致性 |
| PicoClaw | 嵌入式/轻量（Sipeed 背景） | 边缘设备用户（但维护断档） | OpenAI 兼容 provider、渠道插件化 |

---

## 6. 社区热度与成熟度分层

- **快速迭代期**：CoPaw（first-time 贡献者涌现、需求-PR 同日闭环、v2.2.2 冲刺）、NanoBot（issue→PR 当天闭环）、Zeroclaw（v0.8.6/v0.9.0 双线推进）
- **规模扩张 + 质量巩固并行**：OpenClaw、Hermes Agent——吞吐最大，但共同特征是 **P0/P2 积压与发布速度失衡**，正处于“补稳定性债”阶段
- **质量巩固期**：NanoClaw、Moltis（小而稳，瓶颈在 review 带宽）
- **停滞/告警**：PicoClaw（stale bot 取代人工维护，安全披露缺失）、IronClaw、Moltis 单点依赖；NullClaw/TinyClaw/ZeptoClaw/EasyClaw 零活动

---

## 7. 值得关注的趋势信号

1. **“静默失败”比崩溃更伤信任**：四个头部项目均出现“状态显示与真实结果不符”类问题（Hermes 假失败横幅、CoPaw cron 静默取消、NanoClaw 重复消息、OpenClaw 消息丢失）。对开发者的启示：**可观测性与投递语义（exactly-once、审计回执）应作为一等公民设计**，而非事后补丁。
2. **存储层成为分水岭**：从 JSONL/整段重写转向 SQLite 事务化追加写入是生态共识（4 个项目同向）。早做迁移的项目（CoPaw #6459 已落地）正获得可靠性红利。
3. **更新器是被低估的护城河**：OpenClaw 的教训表明，功能迭代越快，原子化、可回滚、可恢复的更新链路越是用户留存的关键。NanoBot/NanoClaw 正在系统投入此领域。
4. **成本可观测性是自托管用户的付费级诉求**：多 provider 记账、缓存命中保护、限额治理（Zeroclaw 整条产品线）预示 agent FinOps 将成为标准模块。
5. **多智能体安全治理萌芽**：spawn 权限白名单、审批 fail-closed、工具 superseded_by 机制——编排能力扩张必然伴随权限边界的工程化。
6. **Windows/中文/边缘客户端是长期被忽视的增量市场**：CoPaw 单日 4 个中文环境修复 PR、OpenClaw Windows 重灾区，均说明平台兼容性投入的 ROI 正在显现。
7. **维护带宽决定项目生死**：PicoClaw 的 stale bot 危机是生态警示——贡献者活跃度与维护者响应的失衡会在数月内摧毁社区信任；自动化 triage（如 OpenClaw clawsweeper）需配合人工兜底。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-10-14）

## 1. 今日速览

NanoBot 今日保持高活跃度：过去 24 小时共有 **5 条 Issue 更新（全部为新增/活跃，0 关闭）** 和 **29 条 PR 更新（24 条待合并，5 条已合并/关闭）**，无新版本发布。社区贡献呈爆发态势，单日新增 PR 覆盖 Bug 修复、Google Drive/Sheets 工具集成、性能优化和 WebUI 重构等多个方向。核心维护者 @chengyongru 持续高频推进代码质量治理（重构、组件画廊、工具描述精简），外部贡献者 @fhgffy 一天内提交 4 个高质量带回归测试的修复 PR。总体健康度良好，但 **24 条待合并 PR 的积压**和 Docker 开箱体验问题值得关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

### 已合并/关闭的 PR（5 条）

- **[#6201](https://github.com/HKUDS/nanobot/pull/6201) refactor(tools): 精简内置工具描述** — 内置工具定义中重复的操作说明、通用建议和展示细节在每次模型请求中都被发送，造成 token 浪费。此 PR 精简了 `my`、`message`、`subagent`、`cron`、`apply_patch`、`web_search` 等十余个工具的描述文案，**直接降低 token 消耗与成本**。
- **[#6193](https://github.com/HKUDS/nanobot/pull/6193) refactor: 清理未使用的内部代码和样式** — 移除未使用的 provider-registry 属性、过期 WebUI CSS 选择器、冗余内部导出等死代码，同时保留所有兼容性 shim。
- **[#6179](https://github.com/HKUDS/nanobot/pull/6179) refactor(webui): 分离展示视图并扩展组件画廊** — 新增 `bun run gallery` 作为免网关的 WebUI 组件参考，覆盖 159/202 个源模块、120 个示例族，大幅提升前端可维护性。

### 关键进行中 PR（待合并）

- **[#5943](https://github.com/HKUDS/nanobot/pull/5943) [P1] 将 Session 状态所有权集中到 SQLite** — 以 SQLite 事务取代 JSONL 作为权威存储，通过有界工作线程池将存储 I/O 移出事件循环。这是**架构级变更**，若合并将显著改善并发与持久化性能，也是 [#6192](https://github.com/HKUDS/nanobot/issues/6192) 性能问题的潜在根治方案。
- **[#6168](https://github.com/HKUDS/nanobot/pull/6168) 集成托管安装与应用内可恢复更新** — 整合 #5817 与 #6154 的更新器工作，将安装、精确版本更新、恢复与 WebUI 串成一个流程。注意 PR 描述中明确提示需先协调重叠 PR。
- **[#6202](https://github.com/HKUDS/nanobot/pull/6202) 隐藏被 `exec` 取代的默认工具** — 当 `exec` 注册时，默认工具列表自动省略 `rg`、`find_files`、`list_dir`、`write_file`，通过 `superseded_by` 声明式机制实现，是工具体系的进一步瘦身。

**整体评估**：项目今日在“降 token 成本 + 存储架构升级 + 代码卫生”三条线上同步推进，工程治理成熟度高。

## 4. 社区热点

- **[#6165](https://github.com/HKUDS/nanobot/issues/6165) Docker 默认镜像无法正常工作 + 上手文档差**（2 条评论，为本日讨论最多的 Issue）— 用户 @jerkstorecaller 指出 `git clone && docker compose up` 这一无门槛路径直接失败，违背 Docker "Just Works" 的核心承诺。这反映**新用户首次体验（onboarding）是当前最大流失点**，且尚无关联 fix PR，建议优先处理。
- **[#6200](https://github.com/HKUDS/nanobot/issues/6200) 第三方请求在 README 添加免费托管服务链接** — @agentrohit37 提供 100 台免费云主机（30 天）给社区，属推广性质请求，维护者需甄别商业推广与社区利益。
- **[#6187](https://github.com/HKUDS/nanobot/issues/6187) / [#6188](https://github.com/HKUDS/nanobot/issues/6188) Google Drive/Sheets 工具需求** — @gianfrancodemarco 提需求后**当天即自提 PR（#6195、#6196）**，是“issue → PR”闭环最快的案例，反映社区自驱贡献能力强。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#6165](https://github.com/HKUDS/nanobot/issues/6165) | Docker 默认镜像开箱不可用，阻塞所有 Docker 用户 | ❌ 无 fix PR |
| 🟠 中高 | [#6194](https://github.com/HKUDS/nanobot/pull/6194) (fixes #4883) | API 请求完成后 session 锁永久滞留注册表，造成资源泄漏 | ✅ 已有 PR（WeakValueDictionary 方案） |
| 🟠 中 | [#6192](https://github.com/HKUDS/nanobot/issues/6192) | `AutoCompact.check_expired` 每秒空闲 tick 全量扫描所有 session JSONL 文件，长会话场景下持续性能开销 | ⚠️ 无直接 fix，#5943 SQLite 重构可根治 |
| 🟡 低 | [#6197](https://github.com/HKUDS/nanobot/pull/6197) | `web_fetch` 未按 RFC 9110 大小写不敏感处理 `Content-Type`，`Image/PNG` 被当作文本返回 | ✅ 已有 PR |
| 🟡 低 | [#6186](https://github.com/HKUDS/nanobot/pull/6186) / [#6184](https://github.com/HKUDS/nanobot/pull/6184) | 邮件通道：附件 .eml 内容混入正文；同名附件互相覆盖 | ✅ 已有 PR（含真实报文回归测试） |
| 🟡 低 | [#6185](https://github.com/HKUDS/nanobot/pull/6185) | Cron 无显式时区时用裸 UTC offset，DST 切换后任务偏移 1 小时 | ✅ 已有 PR（改为 IANA ZoneInfo） |
| 🟡 低 | [#6183](https://github.com/HKUDS/nanobot/pull/6183) | XLSX 单元格含字面 tab 时 grep 列定位错位 | ✅ 已有 PR |

## 6. 功能请求与路线图信号

- **Google Drive（只读）+ Google Sheets 工具**：[#6187](https://github.com/HKUDS/nanobot/issues/6187)/[#6188](https://github.com/HKUDS/nanobot/issues/6188) → PR [#6195](https://github.com/HKUDS/nanobot/pull/6195)/[#6196](https://github.com/HKUDS/nanobot/pull/6196)。采用 service account 认证、Docs/Sheets/Slides 导出为文本/CSV/PDF。**最可能进入下一版本**——需求明确、实现完整、作者响应积极。
- **Standard Compute 作为内置 OpenAI 兼容网关 Provider**：[#6199](https://github.com/HKUDS/nanobot/pull/6199)。由该厂商员工提交，属于 provider 生态扩张，但维护者需评估内置 vs. 社区 provider 的边界。
- **Skills 手动调用模式**：[#5405](https://github.com/HKUDS/nanobot/pull/5405)（8 月提交，今日重新活跃）。`disable-model-invocation: true` 防止部署/发布类 skill 被模型擅自触发，是**安全向功能**，且涉及 side-effect 控制，纳入路线图概率较高。
- **应用内可恢复更新**：[#6168](https://github.com/HKUDS/nanobot/pull/6168)，更新器体系收官之作，合并后用户升级体验将大幅改善。

## 7. 用户反馈摘要

- **痛点：首次上手体验差**。#6165 用户明确表示 Docker 镜像应“开箱即用，无需阅读大量文档”，暗示 onboarding 文档与默认配置存在断层。
- **痛点：办公文件生态隔离**。#6187/#6188 反映大量轻量数据（开销、任务清单、库存）存在 Google Sheets/Drive 中，agent 目前只能靠手工粘贴内容，暴露对云端办公套件集成的主流需求。
- **痛点：长时间运行的性能退化**。#6192 指出每秒全量扫描 sessions 目录，说明有用户在**多会话、长期驻留**场景下使用 NanoBot。
- **正面信号**：社区贡献者愿意在提 Issue 后立即自建 PR（Google 工具系列），且多个外部 fix PR 质量高（带回归测试、引用 RFC），说明项目对中级以上开发者友好、贡献门槛适中。

## 8. 待处理积压

- ⚠️ **[#6165](https://github.com/HKUDS/nanobot/issues/6165) Docker 镜像不可用**：已开 2 天、有 2 条讨论但无维护者回应、无关联 PR。这是影响面最广的新用户入口问题，**建议维护者立即认领**。
- ⚠️ **24 条待合并 PR**：其中 #5943（SQLite 重构，P1）、#6168（更新器集成）为大型变更，需尽早评审排期；#6168 与 #5817/#6154 存在重叠，PR 描述已请求维护者协调合并顺序。
- ⚠️ **[#4883](https://github.com/HKUDS/nanobot/issues/4883)（经 #6194 引用）**：session 锁泄漏问题存在已久，今日才有社区 PR 修复，提示锁/资源生命周期类问题可能需要系统性审查。
- ⚠️ **[#5405](https://github.com/HKUDS/nanobot/pull/5405)**：8 月 16 日提交，悬置近 2 个月，今日重新活动，建议维护者给出明确的合并/修改意见，避免贡献者流失。

---
*数据来源：GitHub API（2026-10-14 统计窗口）| 本日报由自动化分析生成，链接均指向 HKUDS/nanobot 仓库*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-10-14

## 1. 今日速览

Zeroclaw 今日保持高活跃度：过去 24 小时 Issues 更新 24 条（新开/活跃 22，关闭 2），PR 更新 50 条（待合并 40，已合并/关闭 10），无新版本发布。项目当前重心清晰聚焦在 **v0.8.6 运行时收尾与 v0.9.0 网关分离**（追踪器 [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)），大量修复围绕成本记账、会话存储与 provider 令牌统计展开。社区贡献活跃，多位外部贡献者（@tidux、@jasen215、@Franklin-Qi 等）持续提交修复。整体健康度良好，但待合并 PR 积压达 40 条，且 CI 存在已知 flaky 测试拖累门禁。

## 2. 版本发布

今日无新版本发布。下一个版本目标为 v0.8.6 与 v0.9.0（见 [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)）。

## 3. 项目进展

今日合并/关闭 10 个 PR，另有 40 个待合并，主要进展方向：

- **安全修复落地**：Issue [#10643](https://github.com/zeroclaw-labs/zeroclaw/issues/10643)（受限子代理循环工具审批 fail-closed 强制执行，P1 高风险安全项）已关闭，对应修复已合入。
- **ZeroCode 体验修复**：SOP 面板阻塞导航的问题 [#10349](https://github.com/zeroclaw-labs/zeroclaw/issues/10349) 关闭。
- **桌面端**：macOS Apple Events 权限声明 PR [#10047](https://github.com/zeroclaw-labs/zeroclaw/pull/10047) 关闭。

活跃推进中的重要 PR（今日更新）：
- [#11589](https://github.com/zeroclaw-labs/zeroclaw/pull/11589)：允许操作员覆盖已超限的共享成本上限（v0.9.0 目标项，XL 级）
- [#11506](https://github.com/zeroclaw-labs/zeroclaw/pull/11506)：配置保存/应用状态可视化（堆叠于 #11466）
- [#11466](https://github.com/zeroclaw-labs/zeroclaw/pull/11466)：按目标实例上报配置应用结果
- [#11670](https://github.com/zeroclaw-labs/zeroclaw/pull/11670)：保留 provider 侧 total/reasoning token 计数（修复 #11613 与 #11204 的账目问题）
- [#11343](https://github.com/zeroclaw-labs/zeroclaw/pull/11343)：CI 强制真实应用验收测试（XL 级，风险高）

## 4. 社区热点

- **[#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)**（8 评论，P1）：SQLite 会话后端每轮重写 transcript 导致所有消息 `created_at` 被覆盖。社区对此问题讨论最热，且衍生出新 Issue [#11675](https://github.com/zeroclaw-labs/zeroclaw/issues/11675)（ACP 会话存储同样重打时间戳），说明**会话持久化层的“整段重写”模式是系统性设计问题**。
- **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)**：v0.8.6/v0.9.0 发布追踪器持续活跃，是路线图的唯一事实来源。
- **[#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204)**（5 评论，P1）：OpenRouter 成本显示 $0.00、全部 token 被归为“免费”——用户对**成本可观测性缺失**的诉求强烈，修复 PR [#11670](https://github.com/zeroclaw-labs/zeroclaw/pull/11670) 已在推进。
- **[#10777](https://github.com/zeroclaw-labs/zeroclaw/issues/10777)**（P1）：Anthropic thinking 配置在轮次间翻转并重写缓存历史段，直接推高缓存写入成本，是 provider 传输层的高价值修复点。

## 5. Bug 与稳定性（按严重程度）

**P1 / S2 级：**
| Issue | 问题 | 修复状态 |
|---|---|---|
| [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | SQLite 会话重写丢失消息时间戳 | 相关修复在 [#11697](https://github.com/zeroclaw-labs/zeroclaw/pull/11697) 例外表中提及，进行中 |
| [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | OpenRouter 成本不入账 | 修复 PR [#11670](https://github.com/zeroclaw-labs/zeroclaw/pull/11670) 待合并 |
| [#11606](https://github.com/zeroclaw-labs/zeroclaw/issues/11606) | `upsert_agent` 重写整个 routing 配置、伪造字段、重置限额 | 状态 in-progress |
| [#10777](https://github.com/zeroclaw-labs/zeroclaw/issues/10777) | Anthropic thinking 配置翻转致缓存失效 | 待复现 |
| [#10643](https://github.com/zeroclaw-labs/zeroclaw/issues/10643) | 子循环审批绕过（安全） | ✅ 已修复关闭 |
| [#11708](https://github.com/zeroclaw-labs/zeroclaw/issues/11708) | 工具 schema 未暴露 action 必填参数 | 修复 PR [#11720](https://github.com/zeroclaw-labs/zeroclaw/pull/11720) 今日提交 |

**今日新增（10-13/10-14）：**
- [#11725](https://github.com/zeroclaw-labs/zeroclaw/pull/11725)：mid-turn steering 消息延迟到最终回答后才送达（已有 fix PR）
- [#11711](https://github.com/zeroclaw-labs/zeroclaw/issues/11711)（S2）：对话裁剪**永久删除**旧轮次记录
- [#11706](https://github.com/zeroclaw-labs/zeroclaw/issues/11706)（S2）：`max_image_turns` 不释放 vision 路由，整段对话被钉在 vision provider 上
- [#11709](https://github.com/zeroclaw-labs/zeroclaw/issues/11709)：gateway reload 后旧升级 WebSocket 继续服务已退役实例
- [#11696](https://github.com/zeroclaw-labs/zeroclaw/issues/11696)（S3/perf）：系统提示每轮从磁盘重建，人格文件编辑会**击穿所有活跃会话的 prompt 缓存**
- [#11710](https://github.com/zeroclaw-labs/zeroclaw/issues/11710)（S3）：截断的 workspace 文件让 agent 去读，而提示头又禁止读取，自相矛盾
- [#11179](https://github.com/zeroclaw-labs/zeroclaw/issues/11179)：CI flaky 测试导致 PR 必需门禁随机变红

## 6. 功能请求与路线图信号

- **[#11724](https://github.com/zeroclaw-labs/zeroclaw/issues/11724)**（今日新开）：ZeroCode 每面板会话数上限 8 为硬编码，请求可配置——小改动，大概率快速纳入。
- **[#10573](https://github.com/zeroclaw-labs/zeroclaw/issues/10573)**（已接受）：网关配对 token 绑定 roster 用户，基础依赖已合并，属于 v0.9.0 安全域推进项。
- **[#11573](https://github.com/zeroclaw-labs/zeroclaw/pull/11573)**：会话拖拽排序 + 数字切换，ZeroCode UX 持续增强信号。
- **[#11727](https://github.com/zeroclaw-labs/zeroclaw/pull/11727)**：zerocode 重启后恢复打开的会话。
- **[#11207](https://github.com/zeroclaw-labs/zeroclaw/issues/11207)**：文档类需求（Tsubasa 自定义 provider 配置指南），P3 已接受。
- 路线图判断：**成本记账/限额体系**（#11589、#11670、#10950、#11694）与 **v0.9.0 网关分离**是下一版本最明确的两大主线。

## 7. 用户反馈摘要

- **成本透明度是最大痛点**：OpenRouter $0.00（#11204）、隐藏 reasoning token 少计（#11613）、`warn_at_percent` 无效（#10950）、UTC/本地日混算（#11694）——用户普遍在多 provider 场景下无法核算实际开销。
- **会话数据完整性焦虑**：时间戳被重写（#11420/#11675）、裁剪永久删历史（#11711），用户在意审计与回溯能力。
- **缓存成本意外上升**：#10777 显示缓存写入 13 万 token/轮，重度用户对 prompt 缓存失效敏感；#11696 是同类问题。
- **渠道集成边缘问题**：Telegram 编辑消息被忽略（#11713，社区新报）、Lark 平铺富文本解析失败（[#11669](https://github.com/zeroclaw-labs/zeroclaw/pull/11669) 已有修复）。
- 正面信号：issue 报告质量高（含抓包、源码定位），说明核心用户群技术能力强、参与意愿高。

## 8. 待处理积压

- **[#10777](https://github.com/zeroclaw-labs/zeroclaw/issues/10777)**（P1，9 月 11 日开，标记 needs-repro）：Anthropic 缓存重写问题，需要复现支持。
- **[#11135](https://github.com/zeroclaw-labs/zeroclaw/pull/11135)**（needs-author-action，stale-candidate）：DeepSeek DSML 标记归一化修复，长期未动。
- **[#10687](https://github.com/zeroclaw-labs/zeroclaw/pull/10687)**（needs-author-action）：自定义 OpenAI 兼容端点默认启用原生工具调用——影响 vLLM/llama.cpp 用户的体验，建议优先处理。
- **[#11343](https://github.com/zeroclaw-labs/zeroclaw/pull/11343)、[#11353](https://github.com/zeroclaw-labs/zeroclaw/pull/11353)、[#11364](https://github.com/zeroclaw-labs/zeroclaw/pull/11364)**：三个 needs-author-action PR，其中 #11364 指出 `ci:windows` 自 9 月起持续红，建议维护者尽快介入。
- **[#11179](https://github.com/zeroclaw-labs/zeroclaw/issues/11179)**：flaky 测试持续污染 CI 必需门禁。

---
*数据来源：Zeroclaw GitHub 仓库过去 24 小时活动快照。链接格式为 zeroclaw-labs/zeroclaw 条目编号。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：2026-10-14** | 数据来源：github.com/NousResearch/hermes-agent

---

## 1. 今日速览

项目今日处于**高活跃度**状态：过去 24 小时 Issues 更新 50 条（新开/活跃 48、关闭仅 2），PR 更新 50 条（全部待合并，0 合并），同时发布了重大版本 **v0.22.0 "The Threshold Release"**。Issue 关闭数与 PR 合并数偏低，推测主仓库正处于大版本发布后的窗口期，大量变更随 release 打包落地，而新一轮 PR 尚在评审队列中。话题分布上，gateway 稳定性、插件加载、消息投递（Telegram/Matrix/Slack/WhatsApp）和安全依赖升级是今日主线。

---

## 2. 版本发布

### v0.22.0 — "The Threshold Release"（2026-10-13 发布）

自 v0.21.0 以来的**超大规模迭代**：

| 指标 | 数值 |
|---|---|
| Commits | ~24,200 |
| 合并 PR | ~6,080 |
| 文件变更 | ~15,600 |
| 代码增/删 | ~2,045,000 / ~1,140,000 |
| 关闭 Issues | **~7,180** |
| 参与贡献者 | ~2,520 |

主题取自 Hermes 作为“门槛之神”的意象（threshold release）。数据规模表明这是一个清理了大量积压问题的大版本。**迁移注意**：从本期 Issue 可见 v0.21.x → 后续版本已出现若干行为变化（如 `todo` → `todo_list`、`process` → `process_manage` 工具重命名导致 ACP 适配器失效 #138186），升级用户需关注工具名变更对外部集成的影响。

---

## 3. 项目进展

今日无 PR 合并（0 merged），但 50 个活跃 PR 中包含多项重要推进，且多数直接回应近期 Issue：

- **安全依赖清理**：[#138026](https://github.com/NousResearch/hermes-agent/pull/138026) 将 httpx2/httpcore2 升至 2.12.0，清除 MCP HTTP 栈上 5 个已知安全通告（呼应 Issue #134394 的依赖安全审计问题）；[#138024](https://github.com/NousResearch/hermes-agent/pull/138024) 修复 root/web/ui-tui/WhatsApp 桥共 19 项 npm audit 发现。
- **会话状态鲁棒性**：[#138189](https://github.com/NousResearch/hermes-agent/pull/138189) 剥离出站消息的 `message_id` 重放别名；[#138185](https://github.com/NousResearch/hermes-agent/pull/138185) 为离线恢复暴露 scoped 未完成 run 回执；[#92127](https://github.com/NousResearch/hermes-agent/pull/92127) 从 checkpoint shadow store 的陈旧 git lock 中恢复。
- **ACP 工具重命名适配**：[#138187](https://github.com/NousResearch/hermes-agent/pull/138187) 修复 #138186。
- **平台集成**：[#137267](https://github.com/NousResearch/hermes-agent/pull/137267) 修复 Telegram 群聊静默标记泄漏；[#138183](https://github.com/NousResearch/hermes-agent/pull/138183) 支持 OpenRouter 区域端点（global/eu/us）。
- **工程效率**：[#138159](https://github.com/NousResearch/hermes-agent/pull/138159) 稳定版发布改为默认分支派发（修复 Actions 缓存问题）；[#138163](https://github.com/NousResearch/hermes-agent/pull/138163) Docker 镜像预置 uv 缓存，插件安装不再源码编译 python-olm。

---

## 4. 社区热点

1. **[#131859](https://github.com/NousResearch/hermes-agent/issues/131859)（38 评论，P2，blocked）** — 单一账号无法通过 API 向主仓提 PR（`CreatePullRequest` 权限错误），fork 内 PR 正常。高讨论量 + `blocked` 标签，属于影响贡献者工作流的基础设施问题，值得维护者优先澄清。
2. **[#123926](https://github.com/NousResearch/hermes-agent/issues/123926)（19 评论，P3）** — 启动时 `_evict_modules` 遍历 `sys.modules` 引发 "dictionary changed size" 异常，导致**随机子集插件静默加载失败**。随机性 + 静默失败是用户反复追问的核心。
3. **[#135039](https://github.com/NousResearch/hermes-agent/issues/135039)（10 评论）** — 提出 `MEMORY.md`/`USER.md` 写入时预算约束与验收管线，触及 AI 助手长期记忆的成本/延迟核心设计议题。
4. **[#80222](https://github.com/NousResearch/hermes-agent/issues/80222)（8 评论，3 👍）** — `delegate_task` 请求按调用级别覆盖 model 和 reasoning_effort，多模型编排用户的普遍诉求。
5. **[#106592](https://github.com/NousResearch/hermes-agent/issues/106592)（8 评论）** — 远程桌面后端更新成功却报失败并残留脏状态，涉及多组件（gateway/systemd/desktop/dashboard）交互。

---

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue | 概要 | Fix PR |
|---|---|---|---|
| **P1** | [#137838](https://github.com/NousResearch/hermes-agent/issues/137838) | macOS gateway 活跃探针失败后反复 exit 75，根因未确认（原 MCP 阻塞主循环论断已撤回） | ❌ 暂无 |
| **P2** | [#138105](https://github.com/NousResearch/hermes-agent/issues/138105) | multiplex cron ticker 每 60s 做 O(profiles) 配置重解析 + chmod/容器探测，饿死 Discord 心跳 | ❌ 暂无 |
| **P2** | [#133744](https://github.com/NousResearch/hermes-agent/issues/133744) | 重启后 PID 复用落在启动时间漂移容差内，受监督 gateway 永久 crash-loop | ❌ 暂无（相关：#89009、#100332） |
| **P2** | [#137700](https://github.com/NousResearch/hermes-agent/issues/137700) | 打开 HUD 模式后桌面主进程 ~1s 内死亡，5/5 复现，无诊断信息（macOS 27） | ❌ 暂无 |
| **P2** | [#138154](https://github.com/NousResearch/hermes-agent/issues/138154) | 桌面端在 omarchy 启动即挂起 | ❌ 暂无 |
| **P2** | [#138115](https://github.com/NousResearch/hermes-agent/issues/138115) | Docker 后端下子目录 AGENTS.md 提示无法匹配容器绝对路径 | ❌ 暂无 |
| **P2** | [#138108](https://github.com/NousResearch/hermes-agent/issues/138108) | eM Client 发送的 Matrix 加密消息解密失败（Base64 padding 问题） | ❌ 暂无 |
| **P2** | [#129450](https://github.com/NousResearch/hermes-agent/issues/129450) | 委派批次全成功却报"全部失败"（读 summary 散文忽略 status 字段） | ❌ 暂无 |
| **P2** | [#118536](https://github.com/NousResearch/hermes-agent/issues/118536) | cron 供应商不可达故障从不重试（cause 链在瞬态判断前被销毁） | ❌ 暂无 |
| **P2** | [#134394](https://github.com/NousResearch/hermes-agent/issues/134394) | 依赖固定版本携带 ~50 条已知安全通告（PyJWT/httpx2/urllib3/oauthlib） | ✅ #138026、#138024 |
| **P3** | [#138148](https://github.com/NousResearch/hermes-agent/issues/138148) | 工具进度计数器破坏 Telegram MarkdownV2 代码围栏（v0.20.x 回归） | ❌ 暂无 |
| P3 | [#103355](https://github.com/NousResearch/hermes-agent/issues/103355) | LCM 插件上下文引擎下压缩预算不复位，长对话死于 max_attempts | ❌ 暂无 |
| P3 | [#101427](https://github.com/NousResearch/hermes-agent/issues/101427) | `search_files` 无法检索 Office/PDF 内容，产生假阴性 | ❌ 暂无 |
| 安全 | [#138192](https://github.com/NousResearch/hermes-agent/issues/138192) | WhatsApp Cloud allowlist 剥离非数字字符导致 BSUID 可碰撞 | ❌ 暂无 |

---

## 6. 功能请求与路线图信号

- **长期记忆治理**（[#135039](https://github.com/NousResearch/hermes-agent/issues/135039)，needs-decision）：写入预算 + 验收管线。同日出现两个 Kumiho Memory 插件目录 PR（[#138184](https://github.com/NousResearch/hermes-agent/pull/138184)、[#138188](https://github.com/NousResearch/hermes-agent/pull/138188)），显示 memory 生态是当前活跃方向，该提案有望进入下版本讨论。
- **统一出站消息钩子**（[#134330](https://github.com/NousResearch/hermes-agent/issues/134330)）：pre-send hook 覆盖 cron/审批/状态等所有出站消息；与 #109599（静默标记泄漏）同属 message-delivery 风险域，配套 PR 已存在，纳入概率高。
- **委派细粒度控制**（[#802222/#80222](https://github.com/NousResearch/hermes-agent/issues/80222)）：per-call 模型覆盖，配合 #137000（Codex 冷却模型隔离）显示多模型路由是持续投入方向。
- **插件工具直调保留**（[#135762](https://github.com/NousResearch/hermes-agent/issues/135762)）：`defer` 集合缺反向操作，小本地模型体验痛点，工程量小，可能尽快落地。
- **MCP OAuth 超时可配**（[#49759](https://github.com/NousResearch/hermes-agent/issues/49759)）：40s 监听超时对身份验证流程过短。

---

## 7. 用户反馈摘要

- **痛点集中在“静默失败”**：插件随机不加载（#123926）、cron 假健康态（#118536）、委派假失败横幅（#129450）、更新假失败（#106592）——用户反复强调“状态显示与真实结果不符”比崩溃更难排查。
- **多平台边缘客户端兼容性**：eM Client（Matrix）、omarchy（桌面）、Robinhood OAuth 等“非主流但合理”的使用路径暴露出测试盲区。
- **运维/自托管体验**：systemd 集成、Docker 后端路径、多 profile 隔离（#138094 插件装错 profile）是高级用户的高频反馈，贡献者 @33hodl 连续提交多个 gateway/desktop 修复 PR 显示核心维护者响应积极。
- **本地/小模型用户**（ollama 相关 #62182、#68536、#135762）反映工具桥接与模型列表展示对资源受限场景不友好。

---

## 8. 待处理积压

| 条目 | 年龄 | 状态 | 提醒 |
|---|---|---|---|
| [#68536](https://github.com/NousResearch/hermes-agent/issues/68536) /model 选择器不过滤 Shutdown 模型 | ~3 个月 | 6 评论 | P3 但影响每次模型切换体验 |
| [#63681](https://github.com/NousResearch/hermes-agent/issues/63681) ACP 会话恢复丢失 provider 命名空间 | ~3 个月 | 5 评论 | 自定义 provider 用户无法跨会话恢复 |
| [#80222](https://github.com/NousResearch/hermes-agent/issues/80222) delegate_task per-call 覆盖 | ~2 个月，3 👍 | needs-decision | 有社区投票支持，建议尽快给出决策 |
| [#131859](https://github.com/NousResearch/hermes-agent/issues/131859) API 无法开 PR | 11 天 | **blocked**，38 评论 | 阻塞个别贡献者，需维护者/管理员介入 |
| [#49759](https://github.com/NousResearch/hermes-agent/issues/49759) OAuth 超时 | ~4 个月 | 3 评论 | 长期无 fix PR |
| 长期 PR 队列：[#89009](https://github.com/NousResearch/hermes-agent/pull/89009)（2 个月）、[#92127](https://github.com/NousResearch/hermes-agent/pull/92127)、[#94302](https://github.com/NousResearch/hermes-agent/pull/94302)、[#100332](https://github.com/NousResearch/hermes-agent/pull/100332)（均 >1.5 个月） | — | 多为 P2 稳定性修复 | 建议在 v0.22.0 后安排集中评审，避免修复积压与新回归叠加 |

---

**健康度小结**：项目发布节奏稳定（v0.21→v0.22 吞吐巨大）、贡献者基数庞大（~2,520）；短期风险在于 P1/P2 稳定性 Issue（gateway crash-loop、桌面崩溃）缺 fix PR，以及 50 个待合并 PR 的评审积压。建议维护者优先处理 #131859（贡献者阻塞）与 #137838（P1 根因未明）。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-10-14）

## 1. 今日速览

过去 24 小时，PicoClaw 仓库共产生 **8 条动态**（6 条 Issue 更新、2 条 PR 更新），无新版本发布。值得注意的是，今日所有 Issue 更新均为**关闭操作**，且几乎全部被标记为 `stale`——由 stale bot 批量关闭，而非人工修复后关闭。这是该项目**维护响应滞后的强烈信号**：包括安全漏洞报告、可复现的可靠性 Bug 在内的多条高质量 Issue 被无回应关闭。

## 2. 版本发布

无。最新版本仍停留在 v0.3.1（据 Issue #3404 描述），距上一 Release 已有一段时间。

## 3. 项目进展

今日**无 PR 合并**，实质功能进展有限：

- **[PR #3370](https://github.com/sipeed/picoclaw/pull/3370) [已关闭]** — `feat(tools): add Keenable web search provider`。该 PR 拟为 `web_search` 工具新增 Keenable 提供商（免 API key、开箱即用），但最终被关闭而非合并，且被 stale 标记，疑似因缺乏维护者审查而流失。
- **[PR #3416](https://github.com/sipeed/picoclaw/pull/3416) [待合并，stale]** — 新增 Sendblue iMessage/SMS 渠道，允许用户通过短信与 Agent 交互。仍为 draft 状态，尚未获维护者反馈，存在与 #3370 相同的被 stale 关闭风险。

**结论：项目核心功能今日未向前推进；外部贡献生态活跃，但合入通道近乎停滞。**

## 4. 社区热点

| 条目 | 热度 | 要点 |
|---|---|---|
| [Issue #440](https://github.com/sipeed/picoclaw/issues/440) | 9 条评论 | 讨论最热烈：`max_tool_iterations: 20` 硬限制导致复杂任务在产出结果前被截断（"completed processing but have no response to give"）。社区共识倾向用**上下文窗口边界 + 循环检测**替代硬迭代上限。今日被关闭（stale）。 |
| [Issue #3404](https://github.com/sipeed/picoclaw/issues/3404) | 2 条评论 | 安全研究者 @x1F916 提交**带复现步骤的可靠性 Bug 批量报告**（agent loop、channels manager、config、updater），明确指出此前多个 Issue/PR 被 stale bot 抢先关闭。 |
| [Issue #3405](https://github.com/sipeed/picoclaw/issues/3405) | 2 条评论 👍1 | 请求开启 GitHub 私有漏洞报告通道——仓库无 `SECURITY.md`、无私聊渠道，安全披露路径缺失。 |

**背后诉求**：社区对 stale bot 机制不满集中爆发，核心矛盾是「有效贡献被自动清理」vs「维护者带宽不足」。

## 5. Bug 与稳定性

今日无**新开** Bug，但多条已报告 Bug 被关闭且**无对应 fix PR**：

1. 🔴 **高：安全漏洞无法私下披露**（[Issue #3405](https://github.com/sipeed/picoclaw/issues/3405)）— 无 fix。
2. 🔴 **高：可靠性 Bug 集（含复现）**（[Issue #3404](https://github.com/sipeed/picoclaw/issues/3404)）— 覆盖 agent loop / channels / config / updater，无 fix PR，已关闭。
3. 🟠 **中：Web UI 幽灵会话**（[Issue #3407](https://github.com/sipeed/picoclaw/issues/3407)）— 模型思考中会话从列表静默消失，无法找回。无 fix，已关闭。
4. 🟡 **中：迭代硬限制导致工作流中断**（[Issue #440](https://github.com/sipeed/picoclaw/issues/440)）— 无 fix，已关闭。

## 6. 功能请求与路线图信号

- **Agent 循环机制重构**（#440，9 评论）：上下文窗口边界 + 循环检测替代硬限制——呼声最高，最值得纳入下一版本。
- **Web UI 体验改进**（#3406）：更清晰的工作状态指示、手动/渠道会话分离、会话列表归档。
- **Sendblue iMessage/SMS 渠道**（PR #3416）：PR 已就绪，若获审查即可合入。
- **Tsubasa 提供商目录条目**（#3397）：小改动、低成本。

目前**无任何一条有维护者官方回应**，路线图信号为零，纳入下一版本的不确定性极高。

## 7. 用户反馈摘要

- **痛点 1 — Agent 被硬限制卡死**：复杂多步任务在 20 次工具迭代后被强制终止，拿不到最终答案（#440）。
- **痛点 2 — Web UI 会话不可靠**：正在生成中的会话会“消失”，日常使用受阻（#3407、#3406）。
- **痛点 3 — 安全披露无门**：安全研究者想私报漏洞却找不到任何渠道（#3405）。
- **满意点**：贡献者对项目架构（OpenAI 兼容提供商体系、渠道插件化）表现出扩展意愿，说明架构设计有吸引力。
- **元层面不满**：多位贡献者（@x1F916 等）明确抱怨 stale bot 关闭有效 Issue/PR，社区信任度受损。

## 8. 待处理积压

| 条目 | 状态 | 提醒 |
|---|---|---|
| [PR #3416](https://github.com/sipeed/picoclaw/pull/3416) Sendblue 渠道 | Draft + stale，10-05 开至今无人审查 | 维护者审查或明确拒收，避免重蹈 #3370 覆辙 |
| [Issue #440](https://github.com/sipeed/picoclaw/issues/440) 迭代限制 | 9 评论、2 月长讨论后被 stale 关闭 | 高价值设计讨论，建议重开并纳入路线图 |
| [Issue #3405](https://github.com/sipeed/picoclaw/issues/3405) 安全通道 | 已关闭未处理 | **优先级最高**：启用 private vulnerability reporting + 添加 SECURITY.md，成本极低 |
| [Issue #3404](https://github.com/sipeed/picoclaw/issues/3404) Bug 集 | 已关闭未修复 | 含复现器，建议逐条分流重开 |

## 健康度小结

⚠️ **维护活跃度告警**：今日动态全部为自动化关闭操作，零人工响应、零合并、零发布。社区贡献意愿（安全研究、Bug 复现、功能 PR）与维护带宽严重失衡。建议项目方：① 立即启用安全披露通道；② 调整 stale bot 策略（豁免带 repro 的 Issue）；③ 优先审查 PR #3416。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-10-14）

## 1. 今日速览

今日 NanoClaw 整体活跃度处于**中低水平**：过去 24 小时共有 1 条 Issue 更新（1 条关闭）和 4 条 PR 更新（3 条待合并、1 条关闭），无新版本发布。核心维护者（@glifocat）近期持续推进 agent-runner 可靠性与安装体验方向，今日关闭了一个涉及消息丢失/重复的关键修复 PR。社区侧 Discord 集成与 Apple container 运行时等 PR 持续处于待审状态，反映出 review 吞吐略有瓶颈，但提交质量（模板规范、标签完善）保持较高水准。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

### 已关闭的重要 PR

- **PR #3918** `fix(agent-runner): never lose or repeat a reply around send_message`（[链接](https://github.com/nanocoai/nanoclaw/pull/3918)）
  - 核心团队（@glifocat）提交并关闭的修复：解决 agent 在 `send_message` 前后**丢失或重复回复**的问题，同时覆盖流式 provider 与 end-of-turn provider 两种消息发送模式。这是 agent 可靠性方向的重要一步，直接影响用户侧消息投递的正确性。
  - 注意：该 PR 状态为 CLOSED（未显示 MERGED），后续需关注是否被拆分重提或以其他方式落地。

### 待合并的 PR（3 条，均处于 OPEN 状态）

- **PR #4084** `feat(setup): new installs choose their update channel`（2026-10-13 新开，[链接](https://github.com/nanocoai/nanoclaw/pull/4084)）— 核心团队提交，新装实例在 setup 阶段即选择更新通道，避免首次 `/update-nanoclaw` 因 `main` 领先于最新 release 而卡住。安装体验持续打磨的信号。
- **PR #3503** `feat(add-apple-container): run v2 agent sessions on Apple container instead of Docker (macOS)`（[链接](https://github.com/nanocoai/nanoclaw/pull/3503)）— 自 2026 年 6 月起实际运行验证，8 月起已在生产使用，成熟度较高。
- **PR #2899** `fix(discord): strip newline suffix from custom_id before parsing Gateway interactions`（[链接](https://github.com/nanocoai/nanoclaw/pull/2899)）— 修复 Discord DM 审批卡片**所有按钮点击都被路由为 reject** 的高影响 Bug。

**整体评估**：项目在 agent 消息可靠性、安装流程、多运行时支持三个方向稳步推进，本周期约有一个关键修复落地、三个特性/修复待审。

## 4. 社区热点

- **Issue #30** `fix: Add maxTurns limit to prevent agent loop runaway`（[链接](https://github.com/nanocoai/nanoclaw/issues/30)）— 今日唯一的 Issue 动态（已关闭），累计 3 条评论、1 👍。该 Issue 记录了一次**生产事故**：Claude Agent SDK 的 `query()` 未传 `maxTurns` 参数，导致 agent 在 **32 秒内发出 21 条重复消息**。其关闭很可能与 agent-runner 消息可靠性修复（PR #3918）属同一治理方向。背后诉求明确：**个人 AI 助理在生产环境中必须有防失控护栏（loop 上限、去重）**。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | Discord DM 审批卡片任意按钮均触发 reject（PR #2899，[链接](https://github.com/nanocoai/nanoclaw/pull/2899)）| 已有 fix PR，待合并 |
| 🔴 高 | Agent 回复丢失/重复（PR #3918，[链接](https://github.com/nanocoai/nanoclaw/pull/3918)）| 已关闭，需确认落地方式 |
| 🔴 高 | Agent 循环失控：无 maxTurns 限制，32 秒发 21 条重复消息（Issue #30，[链接](https://github.com/nanocoai/nanoclaw/issues/30)）| Issue 已关闭 |
| 🟡 中 | 新装实例首次更新可能因 main 超前于 stable release 而失败（PR #4084，[链接](https://github.com/nanocoai/nanoclaw/pull/4084)）| 已有 fix PR，待合并 |

今日无新报告的崩溃或回归问题。

## 6. 功能请求与路线图信号

- **Apple container 运行时支持**（PR #3503）：作者自述已运行 3+ 个月、8 月起进入生产，属于带实证数据的功能贡献，**被纳入下一版本概率较高**，尤其契合 macOS 用户摆脱 Docker 依赖的需求。
- **安装时选择更新通道**（PR #4084）：核心团队（core-team 标签）自研功能，通常为版本计划内的工程项，**大概率随下个 release 合入**。
- 从 Issue #30 可推断路线图信号：**agent 安全护栏（maxTurns、速率限制、重复消息抑制）**将成为可靠性方向的重点。

## 7. 用户反馈摘要

- **生产环境可靠性是最大痛点**：Issue #30 的真实场景是用户在 Fin（财务/提醒类）应用中设置提醒，结果 32 秒内收到 21 条重复消息——说明用户已将 NanoClaw 用于**日常助理类生产场景**，对消息投递正确性零容忍。
- **跨平台部署诉求**：PR #3503 反映 macOS 用户希望在原生 Apple container 上运行而非 Docker，降低安装与资源开销。
- **更新体验**：PR #4084 暴露出新用户首次更新失败路径，属于典型的“新手第一英里”体验问题。
- **渠道集成质量**：Discord 审批按钮失效（#2899）表明审批/安全交互链路是用户高频使用且敏感的功能。

## 8. 待处理积压

- **PR #2899**（[链接](https://github.com/nanocoai/nanoclaw/pull/2899)）— 自 2026-07-01 开启，**已积压 3 个多月**，无评论、0 👍，修复的是所有按钮均触发 reject 的高影响 Bug。建议维护者优先 review。
- **PR #3503**（[链接](https://github.com/nanocoai/nanoclaw/pull/3503)）— 开启近 2 个月，附带长期生产验证数据，建议尽快评估合入。
- **PR #3918 关闭状态待确认**：若为被拒绝或需重做，相关消息丢失/重复问题仍可能遗留，建议在 Issue #30 关闭说明中补充关联信息，便于用户确认修复版本。

---
*数据来源：GitHub API，统计窗口为过去 24 小时。链接前缀均为 github.com/nanocoai/nanoclaw。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-10-14

> 数据来源：github.com/nearai/ironclaw 过去 24 小时活动

---

## 1. 今日速览

IronClaw 今日处于**低活跃度状态**：过去 24 小时无新 Issue、无已合并 PR、无版本发布，仅有一条待处理的自动化依赖更新 PR。这表明项目当前处于维护节奏平稳期，无紧急事故或重大功能推进。从健康度角度看，无新报 Bug 是积极信号，但社区互动（评论、点赞）也为零，需关注后续是否出现活跃度持续下滑趋势。

## 2. 版本发布

今日无新版本发布。最新 Releases 列表为空，项目近期未通过 GitHub Releases 渠道分发产物。

## 3. 项目进展

今日**无 PR 合并或关闭**，整体功能与修复进度无实质推进。

唯一活跃 PR 为依赖机器人提交的安全/维护类更新：

- **[#8137](https://github.com/nearai/ironclaw/pull/8137) [OPEN]** `chore(deps): bump brace-expansion in /docs/internal/architecture-video`
  - 作者：@dependabot[bot]
  - 内容：将 `/docs/internal/architecture-video` 子目录下的 `brace-expansion` 从 1.1.18 升级至 1.1.21，为关联依赖联动更新（`javascript` / `dependencies` 标签）。
  - 影响：仅涉及文档站点的构建依赖，不影响核心运行时；`brace-expansion` 1.1.19+ 包含 ReDoS 相关防护改进，建议例行合并。
  - 状态：待维护者审核，尚无评论与 👍 反应。

## 4. 社区热点

今日**无讨论热点**——无活跃 Issue、PR #8137 亦无评论互动。社区热度指数为零，无用户诉求信号可提炼。

## 5. Bug 与稳定性

今日**未报告任何 Bug、崩溃或回归问题**。稳定性指标平稳。

## 6. 功能请求与路线图信号

今日无新功能请求。唯一可参考的路线图旁证是 PR #8137 涉及的 `architecture-video` 文档目录，暗示团队正在（或已经）构建架构视频类文档资源，文档基建可能是近期投入方向之一。

## 7. 用户反馈摘要

今日无 Issue 评论与用户互动，无法提炼反馈。建议关注后续窗口期的用户声音。

## 8. 待处理积压

- **PR #8137**（依赖更新）：单日新增，尚不算积压，但 dependabot 类 PR 若长期搁置容易堆积，建议维护者在近期例行批量处理。[链接](https://github.com/nearai/ironclaw/pull/8137)
- 提示：本次数据快照未包含历史积压清单，建议维护者另行审计长期 OPEN 状态的 Issue/PR 队列。

---

**健康度小结**：今日项目无风险事件、无回归报告，属于典型的静默维护日；核心待办为合并依赖更新 PR #8137。建议持续观察后续 3-5 日的活跃度走势，以判断是否存在社区参与度下降或维护投入放缓的信号。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-10-14）

## 1. 今日速览

Moltis 今日整体活跃度**较低但方向明确**：过去 24 小时无 Issue 动态、无新版本发布，仅 2 条 PR 处于活跃状态（均为 OPEN、待合并）。两条 PR 均由 @ManuRakh 于 10 月 12 日提交，10 月 13 日有更新，聚焦于**多智能体编排能力的安全与一致性**——分别是 spawn 目标的 allowlist 管控和 Chat 与 sub-agent 的行为对齐。社区讨论与用户反馈信号几乎为零，项目处于“核心开发者驱动、社区观望”阶段。

## 2. 版本发布

今日无新版本发布，最新 Releases 为空。无迁移事项。

## 3. 项目进展

今日无 PR 被合并或关闭，但有两条重要 PR 正在推进中：

- **PR #1302 — [Presets spawn.allow allowlist](https://github.com/moltis-org/moltis/pull/1302)**：为 `agents.presets.<id>` 新增可选的 `spawn.allow` 字段，限制调用方只能将 agent `spawn_agent` 到白名单中的 preset（适用于 org-chart / coordinator 拓扑）。执行点位于 `resolve_preset`（provider 工作之前），且工具 schema/描述中只对调用方展示允许的目标。这是多智能体**权限边界**方向的实质性安全增强。注意该 PR 存在依赖关系（摘要被截断，标注 "Depends on:..."，可能是 #1301）。
- **PR #1301 — [Chat ↔ sub-agent parity](https://github.com/moltis-org/moltis/pull/1301)**：修复多个 preset 字段（persona、system_prompt_suffix、delegate_only、preset model）只影响 `spawn_agent` 子运行、不影响与同一 agent 直接对话的不一致问题，统一 coordinator/worker 与“直接与 agent 对话”两条路径的提示词构建（`build_sub_agent_prompt`）。这是行为一致性修复，可能改变现有 coordinator 场景的直接对话输出。

**进展评估**：两条 PR 均未合并，项目整体向前推进有限，但方向集中在多智能体架构的成熟化（安全 + 一致性），若合并将显著提升复杂 agent 拓扑的可用性。

## 4. 社区热点

过去 24 小时无活跃 Issue，两条 PR 也无评论、无 👍 反应。**今日无社区热点**。观察到的信号是：PR 贡献高度集中在单一作者 @ManuRakh，社区参与度低，维护者 review 响应情况值得关注。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题。

（间接相关：PR #1301 本质是修复一个**行为不一致缺陷**——preset 配置在直接 Chat 路径下不生效，可视为已由作者自行提交 fix 的低/中严重度问题。）

## 6. 功能请求与路线图信号

- 今日无用户功能请求。
- 从 PR 走向推断路线图信号：项目正在加强**组织化多智能体编排**能力（org-chart / coordinator 图、spawn 权限白名单、路径一致性）。#1301 与 #1302 存在依赖关系，暗示下一个版本可能打包推出“多智能体管控”主题更新。

## 7. 用户反馈摘要

今日无 Issue 评论可供提炼。无法评估用户满意度变化。

## 8. 待处理积压

| 条目 | 状态 | 建议 |
|---|---|---|
| [PR #1302](https://github.com/moltis-org/moltis/pull/1302) | OPEN，10-13 有更新，0 评论 | 提交近 2 天，建议维护者优先 review，并确认其依赖链（疑似依赖 #1301）的合并顺序 |
| [PR #1301](https://github.com/moltis-org/moltis/pull/1301) | OPEN，10-13 有更新，0 评论 | 同上；该 PR 涉及行为变更，建议明确是否需在 Release Notes 中标注破坏性/行为变化 |

**健康度提示**：项目当前完全依赖单人贡献推进核心功能，且两条 PR 均无 review 互动，建议维护者尽快介入评审，避免积压影响迭代节奏。

---
*数据来源：Moltis GitHub（截至 2026-10-14）。本日报基于过去 24 小时数据自动生成。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 — 2026-10-14

---

## 1. 今日速览

- 项目保持**高活跃度**：过去 24 小时 Issues 更新 17 条（新开/活跃 13，关闭 4），PR 更新 36 条（待合并 19，已合并/关闭 17），无新版本发布（v2.2.2 release notes PR #7928 仍在推进中）。
- 社区贡献热情显著：**同日涌现 4 个修复 PR（#8234/#8235/#8236/#8227）来自外部贡献者 @Li-john1021、@sdxwmlyl**，聚焦 Windows 中文环境兼容性，是当日最鲜明的信号。
- 重点功能方向清晰：插件生态扩展（inline chat API、主题扩展点、导航策略）、Code Mode 重构（#8224）、决策模型独立配置（#8205）均在本周期密集推进。
- 稳定性方面新增多个高影响 Bug（会话卡死 #8171、聊天历史膨胀 #8228、cron 任务静默取消 #8225），但部分已快速有对应 fix PR。

---

## 2. 版本发布

今日无新版本发布。注意 [PR #7928](https://github.com/agentscope-ai/QwenPaw/pull/7928)（v2.2.2 release notes）仍在更新中（10-14 有活动），**v2.2.2 正式发布临近**，预计将包含近期合并的 console 稳定性修复。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR
| PR | 内容 | 意义 |
|---|---|---|
| [#6459](https://github.com/agentscope-ai/QwenPaw/pull/6459) [XL, CLOSED] | SQLite 历史持久化、备份与恢复加固 | 7 月开启的长周期 PR 落地，解决并发写锁等待耗尽问题，历史存储可靠性显著提升 |
| [#8219](https://github.com/agentscope-ai/QwenPaw/pull/8219) [XL, CLOSED] | Console chunk 恢复与重载配额稳定化 | 本地服务短暂不可达时不再过早刷新耗尽自动重载配额，Console 启动健壮性提升 |
| [#8221](https://github.com/agentscope-ai/QwenPaw/pull/8221) [XS, CLOSED] | 限制后台轮询并发 + 解锁模型选择器 | 慢运行时下轮询请求堆积问题修复，交互响应改善 |
| [#8190](https://github.com/agentscope-ai/QwenPaw/pull/8190) [S, CLOSED] | 历史媒体过滤前先解析模型能力 | 修复 GLM-5.3 等纯文本模型误收图片的问题 |
| [#8237](https://github.com/agentscope-ai/QwenPaw/pull/8237) [L, CLOSED] | 插件 inline chat 渲染与提交 API | 插件可渲染特定代码块并提交定向追问，插件生态能力扩展（关闭状态或需重开跟进） |

### 推进中的大 PR
- [#8205](https://github.com/agentscope-ai/QwenPaw/pull/8205) [XXXL] TypeSafe 决策模型 + 全局/Agent/会话三级作用域的 chat/decision 模型独立配置——**架构级特性**。
- [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) [XXXL] 每会话 SQLite 持久化分页转录历史，今日仍有更新。
- [#8224](https://github.com/agentscope-ai/QwenPaw/pull/8224) [XXL] 实验性 **Python Code Mode**：单一 `run_code` 工具 + CPython worker 内原生工具可调用。
- [#8209](https://github.com/agentscope-ai/QwenPaw/pull/8209) [XXL] 跨 Agent 深链接解析修复。

**整体评估**：今日合并以 Console/历史存储稳定性为主，结合 v2.2.2 release notes PR 活跃，项目正处于**发版前收尾冲刺阶段**；三个 XXXL 级特性 PR 预示 2.3.x 的功能主线。

---

## 4. 社区热点

- [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) 插件主题扩展点（语义 token 覆盖层）— 10-01 提出、10-13 仍有讨论（3 评论）。用户诉求：#7741 给了终端用户 6 套内置主题，但插件作者只有一个 `colorPrimary` 旋钮，深度定制需打断主题系统。反映**插件作者生态的成熟化需求**。
- [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171) LM Studio 音频 400 错误导致会话永久卡死 — #7015/#7024 修复家族的**第三种 rejection 形态**，media-capability 分类器仍未覆盖，暴露媒体回退机制的系统性薄弱点。
- [#8232](https://github.com/agentscope-ai/QwenPaw/issues/8232) 第三方托管服务请求 README 链接 — 社区引流请求，需维护者甄别。
- [#7056](https://github.com/agentscope-ai/QwenPaw/issues/7056) 后台任务回调/通知机制 — 8 月提出、10-13 再活跃，用户通过源码阅读确认只有轮询接口，**长周期高价值需求**。

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171) | 音频文件交付后 LM Studio 400 错误未被分类器识别，**会话永久卡死** | 部分相关 [#7654](https://github.com/agentscope-ai/QwenPaw/pull/7654) 仍 open，无完整 fix |
| 🔴 高 | [#8228](https://github.com/agentscope-ai/QwenPaw/issues/8228) | base64 工具输出致聊天历史 >10MB，稳定触发 30s 超时 | ✅ 已有 [PR #8229](https://github.com/agentscope-ai/QwenPaw/pull/8229)（服务端截断，Under Review） |
| 🔴 高 | [#8213](https://github.com/agentscope-ai/QwenPaw/issues/8213) | Hub 重启后 desired-running Local runtime 未恢复，**cron 任务静默漏执行** | 无 fix PR |
| 🟠 中高 | [#8225](https://github.com/agentscope-ai/QwenPaw/issues/8225) | 保存 agent 配置触发热重载会取消运行中 cron 任务且无提示 | 无 fix PR |
| 🟠 中高 | [#8222](https://github.com/agentscope-ai/QwenPaw/issues/8222) | `qwenpaw acp` 从不加载插件，ACP 会话缺插件工具且回调无法唤醒 | 无 fix PR |
| 🟠 中 | [#8206](https://github.com/agentscope-ai/QwenPaw/issues/8206) | Windows 上 creator.log 句柄占用致项目删除必然失败（WinError 5） | 无 fix PR |
| 🟡 中 | [#8218](https://github.com/agentscope-ai/QwenPaw/issues/8218) | 默认 agent 无法改模型，默认模型已弃用不可用 | 无 fix PR |

**今日已关闭的 Bug**：#8088（图片 Bash+PIL 裁剪死循环）、#7981（chat_with_agent 前台超时误报“用户中断”）、#8186（消息导航跳转覆盖手动滚动）、#8015（自定义市场源/离线部署）。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 纳入信号 |
|---|---|---|
| 插件主题语义 token 扩展点 | [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) | 持续讨论 2 周，与 #7741 主题体系衔接，**可能性高** |
| 主机导航白名单策略 | [#8223](https://github.com/agentscope-ai/QwenPaw/issues/8223) | ✅ 同日即有 [PR #8230](https://github.com/agentscope-ai/QwenPaw/pull/8230)（first-time-contributor），需求-实现闭环 |
| CommandCode / HuggingFace 内置 Provider 预设 | [#8233](https://github.com/agentscope-ai/QwenPaw/issues/8233) | 低成本目录补充，**大概率纳入下个小版本** |
| 后台任务回调机制 | [#7056](https://github.com/agentscope-ai/QwenPaw/issues/7056) | 与 #8222 中的跨进程回调缺口相互印证，属**架构级待办** |
| 受保护执行契约 prompt 的 i18n | [#8211](https://github.com/agentscope-ai/QwenPaw/issues/8211) | 已有 scroll prompt 的成熟 i18n 模式可复用，实现成本低 |
| 自托管/离线市场源 | [#8015](https://github.com/agentscope-ai/QwenPaw/issues/8015)（CLOSED） | 今日关闭，或已排期或已有方案，企业部署场景刚需 |

**路线图判断**：v2.2.2 = 稳定性收尾；v2.3.x 主线预计为 Code Mode（#8224）、决策模型配置（#8205）、持久化转录历史（#7931）、插件 API 扩展。

---

## 7. 用户反馈摘要

- **中文/Windows 环境用户是核心痛点来源**：GBK 编码文件读取丢字节（#8234）、CRLF 被整文件改写（#8235）、creator 日志句柄致删除失败（#8206）——同日 4 个 PR 集中回应，说明此类用户占比可观且此前被长期忽视。
- **企业/内网用户**：明确表达离线部署、自托管市场源需求（#8015），以及策划型部署的主机导航管控诉求（#8223）。
- **多 Agent/任务编排用户**：不满轮询式任务查询（#7056）、热重载静默取消 cron（#8225）、Hub 重启漏调度（#8213）——**“任务可靠性”是当前满意度最薄弱环节**。
- **插件开发者**：渴望更深的主机集成能力（主题 #8071、inline chat #8237、导航 #8230），社区正在从“使用者”向“共建者”转化。
- **本地模型用户**：Ollama 上下文窗口误判 128k（#8236）、LM Studio 音频兼容（#8171）显示本地推理是重要使用场景。

---

## 8. 待处理积压

| 条目 | 状态 | 提醒 |
|---|---|---|
| [#7056](https://github.com/agentscope-ai/QwenPaw/issues/7056) | 8-15 提出，2 个月未关闭 | 高价值架构需求，建议明确排期 |
| [#7654](https://github.com/agentscope-ai/QwenPaw/pull/7654) | 长期 open 的媒体回退修复 PR | #8171 表明覆盖不完整，建议与分类器重构一并处理 |
| [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) / [#8205](https://github.com/agentscope-ai/QwenPaw/pull/8205) | XXXL 级 PR 审理周期已较长 | 建议拆分评审或给出里程碑归属 |
| [#8218](https://github.com/agentscope-ai/QwenPaw/issues/8218) / [#8213](https://github.com/agentscope-ai/QwenPaw/issues/8213) / [#8222](https://github.com/agentscope-ai/QwenPaw/issues/8222) | 今日新开、尚无维护者回应 | 高影响 Bug，建议 48 小时内 triage |

---

**健康度小结**：贡献者多元化（多名 first-time/外部贡献者）、需求-PR 闭环速度快（#8223→#8230 同日）、发版节奏可预期——项目处于**健康上升期**；主要风险在于多 Agent 任务可靠性与 Windows 中文环境两大薄弱面的积压修复速度。

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