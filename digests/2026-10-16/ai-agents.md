# OpenClaw 生态日报 2026-10-16

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-16 03:40 UTC

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

# OpenClaw 项目日报 — 2026-10-16

## 1. 今日速览

OpenClaw 今日保持高度活跃：24 小时内 Issues 更新 500 条（新开/活跃 391，关闭 109），PR 更新 500 条（待合并 228，已合并/关闭 272），净推进显著。过去一周连发 4 个版本（2026.9.33 → 2026.10.10-beta.1），主线聚焦 Gateway 稳定性与性能——将数据库/SQLite 工作迁移到 worker 线程、修复更新可靠性。核心贡献者 @steipete 今日高产，单人提交十余个 PR，覆盖控制 UI 的 Solid 迁移、Gateway 状态簿记优化与插件管道整合。整体健康度良好，但仍有多个 P0 级 SQLite/内存问题长期未关闭，是当前最大风险点。

---

## 2. 版本发布（近期 4 个）

| 版本 | 要点 |
|---|---|
| **v2026.10.10-beta.1** | Gateway 更快更稳：聊天回合、会话列表、启动与空闲 Gateway 大幅减少 SQLite 及主线程工作，更多数据库任务移至 worker 线程，改善忙碌主机与大规模 agent 集群的响应性（#167965, #168002, #168093 等） |
| **v2026.10.5-beta.4** | 更新可靠性提升：macOS 更新不再因别名临时目录超时；systemd 用户安装可回收废弃运行时；pacman/FreeBSD 包安装交还给包管理器；快照失败提前识别 |
| **v2026.10.4** | Gateway 在系统休眠或时钟跳变后不再因 ownership heartbeat 误判为过期而自我重启；关闭/重启不再挂起（感谢 @AnvinaLI、@sgh6688、@waynegault、@RomneyDa） |
| **v2026.9.33** | gateway-only `extended-stable`（LTS 等价）通道：9 月底代码 + 关键安全更新、可靠性/性能修复与新模型支持 |

**迁移注意**：LTS 用户建议跟进 2026.9.33；beta 通道用户升级到 2026.10.10-beta.1 前注意 Windows 启动变慢的报告（见 §5）。

---

## 3. 项目进展

今日合并/关闭 272 个 PR，活跃待合并 228 个。代表性进展：

**稳定性与性能**
- [PR #172750](https://github.com/openclaw/openclaw/pull/172750)（P1，待审）：修复外部大插件准备期间 Gateway 阻塞数分钟的回归（对应 [Issue #160959](https://github.com/openclaw/openclaw/issues/160959)），插件源捕获移入常驻 worker，准备期间健康请求继续响应。
- [PR #173740](https://github.com/openclaw/openclaw/pull/173740)：万行级 `sessions.list` 请求不再独占主线程（实测 1,184ms 停顿，ELU 0.999）。
- [PR #173731](https://github.com/openclaw/openclaw/pull/173731)：消除会话替换/重启恢复中的冗余状态读取。
- [PR #173747](https://github.com/openclaw/openclaw/pull/173747)：修复 Gateway 重启后误报“agent 更新未送达”。

**功能与新能力**
- [PR #173377](https://github.com/openclaw/openclaw/pull/173377) + [PR #173346](https://github.com/openclaw/openclaw/pull/173346)：Control UI 支持从 agent/会话创建并评审 Claw，及私有草稿→审核发布到 ClawHub 的完整链路。
- [PR #173669](https://github.com/openclaw/openclaw/pull/173669)：插件安装默认指向 ClawHub，无需 registry 前缀。
- [PR #173745](https://github.com/openclaw/openclaw/pull/173745)：多个 OpenClaw 实例可安全共享同一 PostgreSQL 数据库。
- [PR #173744](https://github.com/openclaw/openclaw/pull/173744)：Codex 运行时下受控 MCP 工具的插件审批延迟到 Codex MCP 审批。
- [PR #169529](https://github.com/openclaw/openclaw/pull/169529)（P1）：修复回合中配置变更导致已接受的后台完成被静默丢弃。

**架构清理**
- [PR #173734](https://github.com/openclaw/openclaw/pull/173734)：整合十余个聊天渠道（Discord/Slack/Matrix/Teams/WhatsApp 等）的共享生命周期管道；[PR #173721](https://github.com/openclaw/openclaw/pull/173721)：命令/CLI/运行时信任已准备好的事实，消除重复拷贝与检查；多个 Control UI 的 Lit→Solid 迁移 PR（#173646, #173694, #173689, #173700）。

**评价**：今日推进量可观，方向清晰——Gateway 主线程减负 + UI 框架迁移收尾 + ClawHub 生态建设三条线并行。

---

## 4. 社区热点

1. **[#143524](https://github.com/openclaw/openclaw/issues/143524)（128 评论，P0）**：Windows 上 agent SQLite WAL 在数天内膨胀至 1.4–2.8 GB，`wal_autocheckpoint=1000` 失效，阻塞 Gateway 启动。手动 `TRUNCATE` 后复发。社区对长期无 fix PR（clawsweeper:no-new-fix-pr）不满情绪明显。
2. **[#153257](https://github.com/openclaw/openclaw/issues/153257)（42 评论，P0）**：用户详述 2026.9.5 升级将稳定环境变成“8 小时故障恢复会话”，标题即诉求：**回归测试与升级安全性**。
3. **[#91588](https://github.com/openclaw/openclaw/issues/91588)（39 评论，P0）**：Gateway 内存泄漏，RSS 从 350MB 涨至 15.5GB 触发反复 OOM，自 6 月悬置至今。
4. **[#160959](https://github.com/openclaw/openclaw/issues/160959)（25 评论，P0）**：2026.9.6 插件捕获回归致 Gateway 阻塞数分钟——**好消息是已有候选修复 PR #172750 待合并**。
5. **[#148707](https://github.com/openclaw/openclaw/issues/148707)（20 评论，P1）**：2026.9.4 回归，同会话第二个 run 顶替进行中回合导致回复丢失（"no active tool authority snapshot"），诉求是消息不丢失保证。

**共性诉求**：大状态库（WAL/内存）治理、回归质量控制、turn 生命周期内消息不丢失。

---

## 5. Bug 与稳定性（按严重度）

| 级别 | Issue | 状态/修复 |
|---|---|---|
| P0 | [#143524](https://github.com/openclaw/openclaw/issues/143524) SQLite WAL 无限膨胀阻塞启动 | ❌ 无 fix PR，需 maintainer 评审 |
| P0 | [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway 内存泄漏→OOM 循环 | ❌ 长期未修 |
| P0 | [#153257](https://github.com/openclaw/openclaw/issues/153257) 2026.9.5 升级引发持续故障恢复 | ❌ 修复方案待明确 |
| P0 | [#160959](https://github.com/openclaw/openclaw/issues/160959) 插件捕获致 Gateway 阻塞（9.6 回归） | ✅ [PR #172750](https://github.com/openclaw/openclaw/pull/172750) 待合并 |
| P0 | [#152275](https://github.com/openclaw/openclaw/issues/152275) 插件激活失败致模型目录/回复分发不可用直至重启 | ❌ |
| P0 | [#115256](https://github.com/openclaw/openclaw/issues/115256) 桌面端 boot-loop，`doctor` 建议被 app 立即回滚 | ❌ |
| P0 | [#89278](https://github.com/openclaw/openclaw/issues/89278) Codex OAuth 刷新成功但 cron/heartbeat 10s 超时失败 | 🔶 有关联 PR 开放中 |
| P1 | [#168955](https://github.com/openclaw/openclaw/issues/168955) 2026.10.1 Windows 启动 410s→1030s 回归（control-ui-assets 阻塞 477s） | ❌ 新报告，需关注 |
| P1 | [#157989](https://github.com/openclaw/openclaw/issues/157989) 插件源捕获每次 CLI 写 ~1.4GB、每次启动写 ~6.5GB，SSD 磨损严重 | ❌ |
| P1 | [#164113](https://github.com/openclaw/openclaw/issues/164113) LXC 容器内更新 FICLONE EPERM 失败 | ✅ 已关闭（queueable-fix） |
| P2 | [#164294](https://github.com/openclaw/openclaw/issues/164294) Gateway 状态库 WAL checkpoint 被常驻 reader 永久阻塞 | ❌ |
| P2 | [#165047](https://github.com/openclaw/openclaw/issues/165047) 仪表盘图片附件 "Sandbox media reference is not staged" | ✅ 已关闭 |

**安全相关**：[#108395](https://github.com/openclaw/openclaw/issues/108395)（P1）模型生成伪造 "Human:" 消息实现自我授权，需 security review，仍开放。

---

## 6. 功能请求与路线图信号

- **Claw/ClawHub 生态**是明确的路线图主线：#173377、#173346、#173669 三个 PR 已就绪待审，预期进入下一版本。
- [#71058](https://github.com/openclaw/openclaw/issues/71058)（单 Gateway 多 Azure/Teams bot）已关闭，多 bot 支持或有进展。
- [#123984](https://github.com/openclaw/openclaw/pull/123984) Telegram `/ignore` 按消息上下文控制，needs proof 阶段，接近落地。
- [#68596](https://github.com/openclaw/openclaw/issues/68596)（长推理模型流式 watchdog 超时可配置，17 评论/8 👍）长期 needs-product-decision，社区呼声高。
- [#79223](https://github.com/openclaw/openclaw/issues/79223) Dream Diary 语言可配置——国际化用户群的持续诉求。
- [#79902](https://github.com/openclaw/openclaw/issues/79902) 基于数据库优先运行时暴露 SQLite 会话接口，面向 companion 开发者的平台化信号。
- [#162164](https://github.com/openclaw/openclaw/issues/162164) iOS/macOS 个人身份登录与 Shared owner 并存，多设备路线方向。

---

## 7. 用户反馈摘要

**痛点**：
- **升级焦虑**普遍：多个高热 issue 均为升级引发回归（#153257、#160959、#168955、#148707），用户明确表示"后悔升级"，希望更严格的回归门禁。
- **大规模/长期运行用户**受困于资源问题：WAL 膨胀、内存泄漏、SSD 磨损集中在多 agent、长期在线的主机场景。
- **消息丢失类**（#148707、#101793、#84516、#153417）影响信任：回复静默丢失、截断、子代理投递无限重试。
- **容器/异构环境**（LXC、K8s、Docker）用户遇到更新与启动路径边缘问题，其中 Docker 重复 Doctor 捕获已有 [PR #173711](https://github.com/openclaw/openclaw/pull/173711)。
- **非英语用户**：硬编码英文提示词（Dream Diary）造成混合语言工作区。

**满意点**：extended-stable/LTS 通道的推出、更新可靠性持续打磨、Gateway 休眠/时钟跳变修复（#170790）获得社区贡献者积极参与；维护者与贡献者互动频密（多 issue 有 maintainer 标签流转）。

---

## 8. 待处理积压（维护者关注）

| 项目 | 悬置时长 | 说明 |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) 内存泄漏 | ~4 个月 | P0，39 评论，无 fix PR |
| [#143524](https://github.com/openclaw/openclaw/issues/143524) WAL 膨胀 | ~5 周 | P0，128 评论，热度最高，需优先响应 |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) 计费恢复后 provider 冷却锁死数小时 | ~6 个月 | P0，needs-product-decision |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) Codex Telegram turn 超时 | ~5 个月 | 18 评论/4 👍 |
| [#114211](https://github.com/openclaw/openclaw/issues/114211) Matrix 代理循环 | ~3 个月 | P1，标 stale 但仍活跃讨论 |
| [#108395](https://github.com/openclaw/openclaw/issues/108395) 伪造用户消息安全问题 | ~3 个月 | P1 + security review，建议提级 |
| [PR #125788](https://github.com/openclaw/openclaw/pull/125788) toolsAllow 下技能目录丢失 | ~2 个月 | "fleet-wide 且遥测不可见"，需 proof 支持 |
| [PR #123984](https://github.com/openclaw/openclaw/pull/123984) Telegram /ignore | ~2 个月 | 需 telegram-e2e 验证推进 |

**建议**：优先合并 #172750（对应 P0 #160959），并针对 SQLite WAL / 内存泄漏两大 P0 集群组建专项修复，这是当前版本口碑的最大变量。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告
**数据窗口：2026-10-15 ~ 2026-10-16**

---

## 1. 生态全景

个人 AI 助手/自主智能体赛道已形成明显的梯队分化：以 OpenClaw 为首的头部项目进入“平台化 + 生态建设”阶段（ClawHub、多渠道整合、LTS 通道），中部项目（NanoBot、CoPaw、Zeroclaw、Hermes Agent）在大版本后的回归消化与架构重构期，尾部则出现维护断档信号（PicoClaw 疑似无人维护、社区已分裂出活跃 Fork）。技术共识正在收敛：**SQLite 会话持久化、插件化/WASM 沙箱、多渠道网关、子代理可观测性**成为全生态的共同工程命题。同时，升级可靠性、静默失败、非英语用户支持是跨项目的三大信任痛点。

---

## 2. 各项目活跃度对比

| 项目 | Issues 活跃 | PR 活跃 | 待合并 | 合并/关闭 | Release | 健康度评估 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500（新 391/关 109） | 500 | 228 | 272 | 4 版/周 | 🟢 高活跃，P0 积压（WAL/内存）是主要风险 |
| **NanoBot** | 2 | 47 | 22（4 conflict） | 25 | 无 | 🟢 修复收敛期，响应快（当日 issue 当日修） |
| **Zeroclaw** | 25（0 关闭） | 50 | 47 | 3 | 无 | 🟡 开发活跃但评审积压重，v0.8.6 收尾中 |
| **Hermes Agent** | 50（新 47/关 3） | 50 | 45 | 5 | v0.22.2 | 🟡 大合并后回归消化期，路线图透明 |
| **PicoClaw** | 4 | 22 | 13 | 9 | 无 | 🔴 疑似低维护，stale 批量关闭，社区 Fork 分裂 |
| **NanoClaw** | 2 | 50 | 35 | 15 | 无 | 🟢 产出强但评审带宽不足（4 个月积压 PR） |
| **NullClaw** | 1 | 9 | 8 | 0 | 无 | 🟡 单人高质量贡献待审查，维护者未响应 |
| **IronClaw** | 1 | 0 | 0 | 0 | 无 | ⚪ 低强度运行（benchmark 驱动） |
| **LobsterAI** | 0 | 11 | 5 | 6 | 无 | 🟡 开发稳定但社区互动静默 |
| **CoPaw (QwenPaw)** | 28（新 20/关 8） | 26 | 20 | 6 | **v2.2.2 Stable** | 🟢 快速迭代，平台化演进中 |
| **EasyClaw** | 0 | 0 | 0 | 0 | **2 版（v1.9.31/32）** | 🟡 发布驱动型，社区互动缺失 |
| TinyClaw / Moltis / ZeptoClaw | 0 | 0 | 0 | 0 | 无 | ⚪ 无活动 |

---

## 3. OpenClaw 在生态中的定位

**规模与节奏遥遥领先**：单日 500 条 Issue + 500 条 PR 更新，一周 4 个版本，吞吐量是第二梯队项目的 5–10 倍，且已建立 LTS（extended-stable）/beta 双发布通道——这是生态中唯一具备企业级发布治理的项目（Hermes 的 v0.22.1 错误 commit 事故反衬其流程价值）。

**技术路线差异**：
- OpenClaw 走**“Gateway 中心化 + Claw/ClawHub 生态”**路线（草稿→审核→发布的完整链路、PostgreSQL 多实例共享），明显对标“个人助手的操作系统”定位；
- NanoBot/CoPaw 聚焦**单体应用的会话存储重构与插件化**；Zeroclaw 选择 **WASM 插件宿主 + 网关分离（v0.9.0）** 的 Rust 技术栈；Hermes 刚完成统一网关合并，方向趋同但成熟度落后一个身位。

**社区对比**：OpenClaw 拥有 @steipete 等核心贡献者的高产输出和多维护者标签流转；对比之下 NullClaw（9 PR 零回应）、PicoClaw（stale 误杀高质量 PR）暴露了中小项目维护带宽的结构性瓶颈。

**核心短板**：多个 P0 长期悬置——SQLite WAL 膨胀（#143524，128 评论）、内存泄漏（#91588，4 个月）——大规模长期运行场景的可靠性欠账，是其在生态中口碑的最大变量。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **SQLite/会话持久化治理** | OpenClaw（WAL 膨胀、worker 线程迁移）、NanoBot（#5943 集中化重构）、Hermes（#135487 database is locked 丢任务）、CoPaw（cron 漏执行） | 长期在线 Gateway 的数据库可靠性已成第一工程共识 |
| **子代理/长任务可观测性** | Zeroclaw（#10531/#8763 观测簇）、OpenClaw（#173731 状态读取）、CoPaw（#8252 静默取消无记录）、NanoClaw（#3935 自监控链） | “静默失败”（不记录发起方/原因/记假成功）是跨项目信任痛点 |
| **插件化与安全沙箱** | OpenClaw（ClawHub 管道）、Zeroclaw（WASM 宿主 + Wasmtime 安全升级）、CoPaw（Channels 子进程隔离）、Hermes（durable-admission-v1 契约） | 从单体走向可分叉的插件生态，安全边界（#6147 工具注入、#108395 伪造消息）同步收紧 |
| **升级可靠性/回归门禁** | OpenClaw（#153257 升级灾难）、Hermes（v0.22.1 错构建 + #139091 更新超时）、NanoBot（#6168 应用内可恢复更新）、PicoClaw（crash loop） | “升级焦虑”是用户反馈中最高频负面情绪 |
| **非英语/i18n 用户支持** | NanoBot（#6231 CJK 启动崩溃）、Zeroclaw（#11773 locale 回退）、CoPaw（#8270 中文 ZIP 乱码）、OpenClaw（Dream Diary 语言）、PicoClaw（QQ 通道） | 中文/CJK 用户是重要群体，编码与本地化是真实摩擦点 |
| **IM 渠道流式与富渲染** | NullClaw（Slack 流式 + Telegram HTML）、Zeroclaw（Email 渠道簇）、NanoClaw（Slack Block Kit）、CoPaw（飞书） | 渠道体验（流式输出、附件处理、格式保真）是差异化战场 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构特点 |
|---|---|---|---|
| **OpenClaw** | 全能个人助手 + 生态平台（ClawHub） | 大规模/多 agent 集群、长期在线主机 | TS，Gateway 中心化，worker 线程化中 |
| **NanoBot** | WebUI/CLI 体验与质量收敛 | CLI 重度用户（含 CJK） | Python，SQLite 会话重构中，provider 兼容 |
| **Zeroclaw** | WASM 插件体系、多渠道网关 | 深度运维/自托管用户 | Rust，插件 staged admission，A2A crate |
| **Hermes Agent** | 统一网关 + Desktop/TUI/IM 全形态 | 桌面 + 机器人混合用户 | TS/Ink，大重构后消化期 |
| **PicoClaw** | 嵌入式/边缘 + 国内渠道（QQ） | OpenWrt/路由器级常驻部署 | Go，轻量 |
| **NanoClaw** | 可观测性套件 + 低成本任务 | 树莓派/自托管、本地模型用户 | 轻量，lean tasks 降本导向 |
| **NullClaw** | OpenClaw 功能对齐 + 多 provider | 自托管多模型（DeepSeek/IFM K2）用户 | OpenAI 兼容网关友好 |
| **CoPaw** | 平台化插件生态 + Console/PawApp | 生产级多 Agent 编排用户 | AgentScope 基座，通道插件化 |
| **LobsterAI** | 桌面伴侣（悬浮窗）+ MCP OAuth | 消费级桌面用户 | 大厂（网易有道）主导 |
| **EasyClaw** | 垂直：TikTok 电商运营 | 电商卖家/客服运营 | 发布驱动、单维护者 |

---

## 6. 社区热度与成熟度分层

- **平台化扩张期**：OpenClaw（生态建设三条线并行）、CoPaw（XXXL 级插件化 PR 群持续推进）
- **快速迭代/修复收敛期**：NanoBot（当日 issue 当日修，闭环效率标杆）、NanoClaw（产出强、消化慢）
- **大版本后质量巩固期**：Hermes Agent（统一网关回归消化，打包收口计划清晰）、Zeroclaw（v0.8.6 插件主题安全收尾）
- **静默/垂直维护期**：LobsterAI、EasyClaw（开发活跃但社区互动缺失）、IronClaw（benchmark 驱动）
- **⚠️ 维护断档/分裂风险**：PicoClaw（stale 批量误杀、活跃 Fork 出现）、NullClaw（高质量贡献零回应）、TinyClaw/Moltis/ZeptoClaw（无活动）

---

## 7. 值得关注的趋势信号

1. **“静默失败”正在成为行业信任红线**：OpenClaw 消息丢失（#148707）、CoPaw 会话静默取消（#8252）、NanoClaw Signal 静默挂起、NanoBot 数据覆盖（#6008）——用户对可诊断性、消息投递保证的诉求已超过功能丰富度。**建议：Agent 框架应原生提供取消/终止路径的审计日志与失败回执。**

2. **持久化准入契约萌芽**：Hermes 的 `durable-admission-v1`、OpenClaw 的 turn 生命周期修复，指向“回合级消息不丢失”成为下一代 Agent 运行时的基础契约。

3. **SQLite 是双刃剑**：全生态不约而同选择 SQLite，但 WAL 膨胀、锁死、checkpoint 阻塞集中爆发——轻量存储在长期在线场景的运维治理（checkpoint 策略、worker 隔离）是高价值攻坚方向。

4. **插件化 + 沙箱安全是下一个竞争高地**：WASM（Zeroclaw）、子进程隔离、ClawHub 审核、per-agent autonomy（NullClaw #1063）——安全细粒度化与生态分发能力将拉开项目差距。

5. **中文/CJK 用户是被低估的核心群体**：从 QQ 通道（PicoClaw）、启动崩溃（NanoBot）、ZIP 乱码（CoPaw）到中文报告占生态反馈相当比例——i18n 健壮性直接影响采用曲线。

6. **维护带宽决定项目存亡**：PicoClaw 的 Fork 分裂与 NullClaw 的零回应警示——stale bot 不能替代人工评审，社区高质量贡献若 2 周内无回应，流失风险极高。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-10-16）

## 1. 今日速览

NanoBot 今日保持**高强度开发节奏**：过去 24 小时 PR 更新达 47 条（待合并 22 条，已合并/关闭 25 条），Issues 更新 2 条（新开/活跃 1 条，关闭 1 条），无新版本发布。贡献几乎全部集中在 WebUI 稳定性打磨、CLI/Shell 执行模型修正以及会话持久化架构重构三条主线上，核心维护者 @chengyongru 依旧是最主要的推动力。Issue 新增量低而 PR 产出高，说明项目当前处于“修复收敛 + 架构演进”阶段，健康度良好，但 22 条待合并 PR 中多条标记 conflict，存在一定的评审/合并积压压力。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的重要 PR（共 25 条合并/关闭，精选如下）：

**WebUI 稳定性**
- [PR #6211](https://github.com/HKUDS/nanobot/pull/6211)（已关闭）：修复重连后对话轮次（turn）状态不一致问题——断连期间完成的回合不再显示残留的半截回答，持久化 topic 在重连时保留最后确认的执行状态。
- [PR #6241](https://github.com/HKUDS/nanobot/pull/6241)（已关闭，p1）：修复 81-skill 工作区下 WebUI 启动时 `/api/webui/skills` 在 gateway 事件循环上重复做 skill 发现与指纹计算（163 次），导致页面和健康检查阻塞约 25 秒的严重性能问题。现改为构建缓存。
- [PR #6239](https://github.com/HKUDS/nanobot/pull/6239)（已关闭）：Sheet 关闭按钮焦点环仅在键盘 `focus-visible` 时显示，修正鼠标点击出现双重圆环的 UI 细节。
- [PR #6150](https://github.com/HKUDS/nanobot/pull/6150)（已关闭）：支持 WSL 下通过 Windows PowerShell 调起 Windows 默认浏览器打开 WebUI，改善 WSL 用户体验。

**CLI / Shell 执行模型**
- [PR #6232](https://github.com/HKUDS/nanobot/pull/6232)（已关闭）：`SPT_NOENV` 仅在 Linux 设置，修复 macOS 上命令行以非 ASCII 字符结尾时 CLI 启动即崩溃的 `UnicodeDecodeError`（对应 [Issue #6231](https://github.com/HKUDS/nanobot/issues/6231)，当日上报当日修复，响应速度值得肯定）。
- [PR #6229](https://github.com/HKUDS/nanobot/pull/6229)（已关闭）：gateway 管理命令中错位的实例选择器（如 `--config` 放错位置）从静默忽略改为显式报错，提升 CLI 可诊断性。
- [PR #6170](https://github.com/HKUDS/nanobot/pull/6170)（已关闭）：`/compact` 等会话排队策略从按命令名硬编码改为注册时声明 `session_queue=True`，消除注册别名绕过调度规则的隐患。

**架构清理（冲突关闭）**
- [PR #4616](https://github.com/HKUDS/nanobot/pull/4616)、[PR #4205](https://github.com/HKUDS/nanobot/pull/4205)（均因 conflict 关闭）：两条长期悬挂的 subagent 结果路由/mailbox 方案被关闭，相关思路预计并入主线重构。
- [PR #5520](https://github.com/HKUDS/nanobot/pull/5520)（已关闭）：为 Codex provider（自定义 OAuth 传输，不走 OpenAI 兼容 SDK）接入 Langfuse 原生追踪，覆盖模型、输入输出、用量与错误信息。

**整体评估**：今日单日合并/关闭 25 条 PR，且覆盖 p1 性能修复（#6241）与安全相关收紧（见下），配合仍在推进的 SQLite 会话重构（#5943）与 provider 工具调用收紧（#6147），项目在质量与架构两条线上均实质前进。

## 4. 社区热点

- **[Issue #6231](https://github.com/HKUDS/nanobot/issues/6231)（已关闭）**：今日最热新 Issue。macOS 用户 @Muzhen2000 报告任何以非 ASCII 字符（如 CJK 消息）结尾的 CLI 调用都会在启动阶段崩溃，根因为 setproctitle 与 `SPT_NOENV` 的交互。该 Issue 当日被 [PR #6232](https://github.com/HKUDS/nanobot/pull/6232)（外部贡献者 @cristianchiriac）修复，体现了社区“上报—定位—修复”的高效闭环。诉求本质：**中文/非拉丁语系用户是 CLI Agent 工具的重要群体，启动路径必须国际化健壮**。
- **[PR #6168](https://github.com/HKUDS/nanobot/pull/6168)**（@Re-bin）：将托管安装、精确版本更新、故障恢复与 WebUI 整合为一条完整的应用内更新流程，延续 #5817/#6154 的工作。该 PR 涉及与维护者的协作分工（原 PR 被以重复为由关闭后由社区接力），是当前最值得关注的功能性 PR。
- **[Issue #5311](https://github.com/HKUDS/nanobot/issues/5311)（仍 OPEN）**：Agnes AI 自定义 provider 下嵌套对象工具参数被双重 JSON 编码，导致 MCP 工具校验失败。今日有新评论活跃，反映**自定义 provider 生态的兼容性需求**，可能与 #6147 的 provider 收紧工作相关联。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| P1 | [PR #6241](https://github.com/HKUDS/nanobot/pull/6241)：WebUI 启动阻塞 gateway 事件循环约 25 秒（skill 重复发现/指纹 163 次） | ✅ 已修复关闭 |
| P1 | [PR #6147](https://github.com/HKUDS/nanobot/pull/6147)（OPEN，安全相关）：助手文本中的 `<tool_call>` 标记可被当作可执行工具调用（含引述示例），移除 #4662 引入的明文提取，强制使用 API 结构化字段 | 🔄 修复 PR 待合并（conflict） |
| P2 | [Issue #6231](https://github.com/HKUDS/nanobot/issues/6231)：macOS 下非 ASCII 命令行结尾触发启动崩溃 `UnicodeDecodeError` | ✅ 已由 [PR #6232](https://github.com/HKUDS/nanobot/pull/6232) 修复关闭 |
| P2 | [Issue #5311](https://github.com/HKUDS/nanobot/issues/5311)：Agnes AI provider 嵌套对象工具参数双重 JSON 编码，MCP 调用失败 | ❌ 仍 OPEN，无明确 fix PR |
| P2 | [PR #6242](https://github.com/HKUDS/nanobot/pull/6242)（OPEN）：排队中的后续 prompt 在回合后台完成且 composer 未挂载时不再恢复发送 | 🔄 修复 PR 待合并 |
| P2 | [Issue #6008 系](https://github.com/HKUDS/nanobot/issues/6008)：WebUI 侧边栏初始加载失败时静默回退默认值，后续变更可能**覆盖用户真实数据**；有三个并行修复 PR（[#6009](https://github.com/HKUDS/nanobot/pull/6009)、[#6238](https://github.com/HKUDS/nanobot/pull/6238)、[#6237](https://github.com/HKUDS/nanobot/pull/6237)） | 🔄 待合并，需收敛方案 |

## 6. 功能请求与路线图信号

- **应用内可恢复更新**：[PR #6168](https://github.com/HKUDS/nanobot/pull/6168) 将托管安装 + 精确版本 + 回滚恢复 + WebUI 串联，是明日版本（`update` 体系）最明确的路线路信号，很可能随 #5943 一起进入下个大版本。
- **模型预设使用说明**：[PR #6240](https://github.com/HKUDS/nanobot/pull/6240) 新增 `modelPresets.<name>.description` 元数据并在运行时目录中暴露，属于轻量但实用的多模型治理能力。
- **Shell 执行策略精细化**：[PR #6228](https://github.com/HKUDS/nanobot/pull/6228)（p1）将等待、静默与硬性运行预算三种限制分离，解决长任务被误判为停滞的问题，是 Agent 工具执行可靠性的重要改进。
- **可观测性**：Langfuse 追踪扩展至 Codex provider（#5520 已关闭/合并方向明确），显示 provider 级 tracing 是持续投入方向。
- **会话存储 SQLite 化**（#5943）：架构级重构，落地后将显著改善并发与崩溃一致性。

## 7. 用户反馈摘要

- **中文/CJK 用户痛点**：#6231 表明中文用户日常通过 `nanobot agent -m "中文消息"` 使用 CLI，启动路径的编码处理直接决定第一印象；该问题快速修复获得好评。
- **重度技能工作区用户**：#6241 的 81-skill 场景说明存在重度自定义用户，他们关注 WebUI 启动延迟与健康检查可用性。
- **WSL / 跨平台用户**：#6150 的 WSL 浏览器调起改进回应了 Windows 子系统环境用户的长期不便。
- **自定义 provider 用户**：#5311 显示用户会接入非主流 provider（Agnes AI）配合 MCP 工具（如 Obsidian 笔记库），参数序列化兼容性是真实摩擦点。
- **数据安全担忧**：Issue #6008 及其三个修复 PR 反映用户对“侧边栏状态被静默默认值覆盖”的担忧——虽是小数据，但触碰了“AI 助手不能丢用户数据”的信任底线，社区讨论分析深入（含维护者评论给出的方案分析）。

## 8. 待处理积压

建议维护者关注：

1. **[PR #5943](https://github.com/HKUDS/nanobot/pull/5943)**（9-27 开启，p1，conflict）：SQLite 会话状态集中化重构，是最大的架构 PR，悬置近 3 周，冲突标记需要尽快处理，否则后续 PR 冲突成本持续累积。
2. **[PR #6147](https://github.com/HKUDS/nanobot/pull/6147)**（10-10 开启，p1 + security，conflict）：工具调用注入面收紧，属安全修复，应优先于功能 PR 解决冲突并合并。
3. **[Issue #5311](https://github.com/HKUDS/nanobot/issues/5311)**（8-10 开启，已悬置 2 个月+）：自定义 provider 工具参数双重编码，今日重新活跃但无人认领修复。
4. **Issue #6008 修复方案收敛**：[#6009](https://github.com/HKUDS/nanobot/pull/6009)、[#6238](https://github.com/HKUDS/nanobot/pull/6238)、[#6237](https://github.com/HKUDS/nanobot/pull/6237) 三个 PR 解决同一问题且 #6237 明确指出纯客户端方案仍有漏洞（服务端对损坏文件返回静默默认值），需要维护者裁定统一方案，避免重复劳动。
5. **22 条待合并 PR 总量**：其中至少 4 条标记 conflict，建议维护者安排集中 rebase/merge 窗口，防止主线快速移动导致积压恶化。

---
*数据来源：HKUDS/nanobot GitHub 过去 24 小时活动快照；链接均指向对应 Issue/PR。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-10-16）

## 1. 今日速览

过去 24 小时 Zeroclaw 仓库保持高活跃度：**25 条 Issue 活跃（全部为开放状态，0 关闭）**，**50 条 PR 活跃（47 待合并，3 合并/关闭）**，无新版本发布。讨论焦点集中在**工具结果与上下文边界管理**（工具截断、delegate 子代理可见性）、**Email 渠道质量问题的集中爆发**（6+ 条相关 Bug/功能），以及 **v0.8.6 插件体系（WASM 插件宿主）的收尾工作**。多位核心贡献者（@Audacity88、@IftekharUddin、@JordanTheJet）持续推动大型插件栈式 PR，社区外部贡献者（@RustLangLatam）在邮件渠道上产出密集、高质量的缺陷报告。

## 2. 版本发布

今日无新版本发布。v0.8.6 与 v0.9.0（网关分离）仍处于推进中，进度由 [Tracker #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 跟踪。

## 3. 项目进展

今日合并/关闭 3 个 PR：

- **[#11755](https://github.com/zeroclaw-labs/zeroclaw/pull/11755)（已关闭，release:v0.8.6）**：安全修复——将 Wasmtime 从 48.0.5 升级至 48.0.6（对应 14 个 RustSec 安全通告），并同步 patch Rustls 安全问题。这是今日最重要的落地进展，直接消除插件运行时的已知安全风险。
- **[#11309](https://github.com/zeroclaw-labs/zeroclaw/pull/11309)（已关闭）**：quickstart 中安装并激活工具插件的 XL 级 PR，属 v0.8.6 插件体验链路。
- **[#11723](https://github.com/zeroclaw-labs/zeroclaw/pull/11723)（已关闭）**：dependabot 批量依赖升级（30 项），已被 [#11776](https://github.com/zeroclaw-labs/zeroclaw/pull/11776)（31 项，含新增项）取代。

仍在推进的重点 PR：插件 staged admission 栈（[#11236](https://github.com/zeroclaw-labs/zeroclaw/pull/11236) → [#11261](https://github.com/zeroclaw-labs/zeroclaw/pull/11261) → [#11262](https://github.com/zeroclaw-labs/zeroclaw/pull/11262)）、WASM 插件宿主发布物 [#11347](https://github.com/zeroclaw-labs/zeroclaw/pull/11347)、A2A 协议独立 crate 化 [#11712](https://github.com/zeroclaw-labs/zeroclaw/pull/11712)。总体上 v0.8.6 的插件主题已进入集成与安全收尾阶段。

## 4. 社区热点

- **[#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952)（8 评论）**：发布可选的 broad-channel 预编译包。诉求是精简默认包与全渠道覆盖之间的矛盾，属发布产物形态的长期讨论。
- **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)（7 评论）**：v0.8.6/v0.9.0 总跟踪器，Phase 2 运行时与 Phase 3 网关分离的主线。
- **[#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531)（6 评论）**：向父代理暴露 delegate 子代理进度（工具回执、部分输出）。与 #8763、#10426 构成一个明显的"**子代理/长任务可观测性**"主题簇，是社区最强烈的诉求方向之一。
- **[#8763](https://github.com/zeroclaw-labs/zeroclaw/issues/8763)（4 评论）**：ZeroCode UI 中展示子代理活动与可展开的工具结果。

**信号：可观测性（子代理进度 + 渠道侧进度展示）正在成为下一个版本的重要主题。**

## 5. Bug 与稳定性（按严重程度）

**S1（工作流阻断）：**
- **[#11130](https://github.com/zeroclaw-labs/zeroclaw/issues/11130)**：DeepSeek DSML 工具调用标记未被解析，原始标记泄漏到渠道且回合静默结束。状态 in-progress，尚无明确 fix PR 链接；与 #11742 相关。

**S2（行为降级）：**
- **[#10114](https://github.com/zeroclaw-labs/zeroclaw/issues/10114)** / **[#10116](https://github.com/zeroclaw-labs/zeroclaw/issues/10116)**：`max_tool_result_chars` 固定 50,000 与模型上下文窗口无关；超大结果被逐字节 middle-out 截断，应改为文件句柄溢出。均 accepted、无 fix PR。RFC [#11735](https://github.com/zeroclaw-labs/zeroclaw/issues/11735) 提出统一的回合边界有界方案。
- **Email 渠道簇**（多为 @RustLangLatam 今日新报，均无 fix PR）：[#11745](https://github.com/zeroclaw-labs/zeroclaw/issues/11745)（入站附件不落盘，与文档不符）、[#11749](https://github.com/zeroclaw-labs/zeroclaw/issues/11749)（回复自动邮件有邮件循环风险）、[#11760](https://github.com/zeroclaw-labs/zeroclaw/issues/11760)（active 模式重启后重复回复，未设置 \Seen）、[#11761](https://github.com/zeroclaw-labs/zeroclaw/issues/11761)（IDLE 超时窗口内漏邮件）。
- **[#11764](https://github.com/zeroclaw-labs/zeroclaw/issues/11764)**：WhatsApp Web 无法转录的语音消息被静默丢弃。
- **[#11742](https://github.com/zeroclaw-labs/zeroclaw/issues/11742)**：custom（OpenAI 兼容）provider 默认 text-fallback 无警告，DSML 标记既不解析也不剥离。
- **[#11771](https://github.com/zeroclaw-labs/zeroclaw/issues/11771)**：bootstrap 文件上限在网关（20,000）与渠道/agent-loop（6,000）路径不一致。
- **[#11773](https://github.com/zeroclaw-labs/zeroclaw/issues/11773)**：区域化 OS locale（fr_FR 等）回退到英文。

**S3（轻微）：**
- [#11769](https://github.com/zeroclaw-labs/zeroclaw/issues/11769)（渠道测试依赖操作者 locale）、[#11758](https://github.com/zeroclaw-labs/zeroclaw/issues/11758)（WhatsApp Web 停止后仍打印配对二维码）。

**已有修复在途的 PR**：[#11644](https://github.com/zeroclaw-labs/zeroclaw/pull/11644)（cron shell 诊断泄漏到渠道，security 域）、[#11651](https://github.com/zeroclaw-labs/zeroclaw/pull/11651)（Telegram 429 flood gate，与 Issue #11768 的 Retry-After 主题呼应）。

## 6. 功能请求与路线图信号

- **可观测性簇**（#10531、#8763、#10426、#11743）：子代理进度回执、渠道进度展示、Telegram/Slack 流式展示模型推理——已有 ZeroCode 相关 PR（[#11460](https://github.com/zeroclaw-labs/zeroclaw/pull/11460)）落地，该方向大概率进入后续版本。
- **Email 渠道强化**：[#11747](https://github.com/zeroclaw-labs/zeroclaw/issues/11747)（SMTP STARTTLS/Office 365）、[#11751](https://github.com/zeroclaw-labs/zeroclaw/issues/11751)（私有 CA `tls_ca_cert_path`）——与现有 MCP/provider 同名选项对齐，实现成本低，很可能被采纳。
- **[#11753](https://github.com/zeroclaw-labs/zeroclaw/issues/11753)**：可配置确认 reaction emoji；**[#11768](https://github.com/zeroclaw-labs/zeroclaw/issues/11768)**：尊重 HTTP Retry-After（已有部分 PR 覆盖）。
- **RFC [#11735](https://github.com/zeroclaw-labs/zeroclaw/issues/11735)**：回合边界有界工具/delegate 结果——若接受，将系统性解决 #10114/#10116，属架构级变更。
- v0.8.6 明确纳入：插件 update/remove/quickstart 栈（#11236/#11261/#11262/#11309）、WASM 插件宿主发布（#11347）、容器修复 [#11738](https://github.com/zeroclaw-labs/zeroclaw/pull/11738)。

## 7. 用户反馈摘要

- **长任务"黑盒"是最大痛点**：Telegram 用户在长时间搜索/工具调用期间完全无反馈（#10426）；父代理对 delegate 子任务运行中零可见性（#10531）。
- **自定义/兼容 provider 用户踩坑多**：DSML 标记泄漏（#11130、#11742）直接导致工作流失败，且默认 text-fallback 无警告，用户在写文档时才发现。
- **文档与实现不一致损害信任**：Email 附件存储行为与文档矛盾（#11745）；bootstrap 上限在不同路径不一致（#11771）。
- **国际化用户被忽视**：区域 locale 回退英文（#11773）、测试硬编码英文文案（#11769）影响非英语用户体验。
- **正面信号**：报告质量高（含代码定位、severity 分级、复现路径），外部贡献者参与度上升，说明用户群在向深度运维场景延伸。

## 8. 待处理积压

- **[#11130](https://github.com/zeroclaw-labs/zeroclaw/issues/11130)**（S1，9/25 报告，3 周未关）：DSML 解析缺失，建议优先关联修复 PR。
- **[#10114](https://github.com/zeroclaw-labs/zeroclaw/issues/10114) / [#10116](https://github.com/zeroclaw-labs/zeroclaw/issues/10116)**（P1，8/19 报告，近 2 个月）：工具结果截断策略，等待 RFC #11735 裁决，建议明确归属避免悬挂。
- **[#10426](https://github.com/zeroclaw-labs/zeroclaw/issues/10426)（parking-lot）、[#8763](https://github.com/zeroclaw-labs/zeroclaw/issues/8763)、[#10665](https://github.com/zeroclaw-labs/zeroclaw/issues/10665)**（7 月起）：ZeroCode 可观测性与配置项长期处于 icebox/parking-lot，与近期讨论热度形成反差。
- **PR 积压**：[#10430](https://github.com/zeroclaw-labs/zeroclaw/pull/10430)（Gemini 语音渠道，8/28 起）、[#10499](https://github.com/zeroclaw-labs/zeroclaw/pull/10499)（配置写入校验，8/31 起）等 XL 级 PR 长期 needs-author-action，47 个待合并 PR 中多个标记 `needs-author-action`（#11672、#11644、#11651、#10499），建议维护者集中清理一轮以降低评审队列压力。

---
*数据来源：GitHub API（Issues/PR/Releases），统计窗口 2026-10-15 至 2026-10-16。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-10-16）

## 1. 今日速览

Hermes Agent 今日处于**高活跃度状态**：过去 24 小时内 Issues 更新 50 条（新开/活跃 47，关闭 3），PR 更新 50 条（待合并 45，已合并/关闭 5），并发布了修复版本 **v0.22.2**。项目当前主线是 **统一网关运行时（#106742）于 10 月 14 日合入 main 后的收尾修复**，维护者 @unsupportedpastets 已将其拆分为 4 个打包 Issue 进行系统化推进。社区反馈集中在 Desktop/TUI 会话管理、cron 可靠性和 Windows 平台兼容性上，整体呈现“大合并后集中消化回归”的典型健康节奏。

## 2. 版本发布

### v0.22.2（2026-10-15 发布）
- **性质**：紧急修复版。v0.22.1 因**从错误 commit 构建**而发布，意外带入了未完成的 gateway 改动，并导致 Microsoft Store 应用卡在 "Connecting" 状态。
- **迁移注意**：Release 说明中明确标注已知问题——**曾在 0.22.1 网关下运行过的会话**存在兼容风险（Release note 被截断，建议升级前查看完整说明并备份会话数据）。
- **建议**：所有 0.22.1 用户应尽快升级至 0.22.2；从 0.21.x 升级的用户可跳过 0.22.1。

## 3. 项目进展

今日合并/关闭 5 个 PR，主要收获：

- **[PR #136343](https://github.com/NousResearch/hermes-agent/pull/136343)（P1，仍待合并但持续活跃）**：防止 gateway dispatcher 在 checkout 重写后服务于“冻结的混合版本”，引入内容偏斜门控——这是统一网关稳定性最关键的一环。
- **[PR #5984](https://github.com/NousResearch/hermes-agent/pull/5984)（已关闭）**：源码更新时改用 `uv sync --locked`，杜绝更新过程中传递依赖被重新解析，提升升级可复现性。
- **[PR #54978](https://github.com/NousResearch/hermes-agent/pull/54978)（已关闭）**：修复 TUI/Desktop `/steer` 在空闲会话上把文本排队到无关 turn 的丢失问题，使跨会话状态的 steering 真实无损。
- **[PR #92397](https://github.com/NousResearch/hermes-agent/pull/92397)（已关闭）**：修复 CSI-u/Ghostty 终端下 Shift+字母失效——本周起影响**所有默认配置的 Ghostty 用户**，属于高感知度修复。
- **[PR #92388](https://github.com/NousResearch/hermes-agent/pull/92388)（已关闭）**：修复 TUI 中裸 `/personality` 静默无响应。

整体判断：项目正处于 v0.22 大版本后的快速修补期，45 个待合并 PR 中多个 P1/P2 修复已就绪，**合并吞吐有望在近期回升**。

## 4. 社区热点

1. **[#134889](https://github.com/NousResearch/hermes-agent/issues/134889)（76 条评论，今日最热）** — 统一网关合并后修复追踪 Issue。维护者已将其拆为 4 个工作包（[#139158](https://github.com/NousResearch/hermes-agent/issues/139158) 经典 CLI、[#139160](https://github.com/NousResearch/hermes-agent/issues/139160) 会话/模型/凭据、[#139161](https://github.com/NousResearch/hermes-agent/issues/139161) Ink TUI 与 Desktop、[#139162](https://github.com/NousResearch/hermes-agent/issues/139162) 消息机器人/cron/Kanban），共覆盖 60+ 已确认问题。诉求：**大重构后社区需要一个清晰的收口路线图**。
2. **[#139303](https://github.com/NousResearch/hermes-agent/issues/139303)（6 条评论，P2）** — Bot Mode DM 在 Desktop 会话中因 `asyncio.run()` 嵌套事件循环导致消息**发不出且被误判为“模糊/不重发”**，属消息投递可靠性核心问题，尚无 fix PR。
3. **[#135487](https://github.com/NousResearch/hermes-agent/issues/135487)（5 条评论，P1）** — cron worker 因 SQLite `database is locked` 崩溃且**丢失调度记录**，无重试机制，P1 级但未见对应 PR。
4. **[#89199](https://github.com/NousResearch/hermes-agent/issues/89199)（长期存活 2 个月，6 条评论）** — `hermes config` 对 `.env` 中已存在的变量误报警告，属长期噪音型 Bug。

## 5. Bug 与稳定性（按严重程度）

| 级别 | Issue | 摘要 | Fix PR |
|---|---|---|---|
| P1 | [#135487](https://github.com/NousResearch/hermes-agent/issues/135487) | cron worker 无重试，SQLite 锁死即丢任务 | ❌ 无 |
| P1 | [#104865](https://github.com/NousResearch/hermes-agent/issues/104865) | 并发 hook 回调被静默丢弃（deep research 丢 40+ post_tool_call） | ❌ 无 |
| P1 | [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) | 统一网关合并后全面回归追踪 | 🔄 部分有（如 [PR #139473](https://github.com/NousResearch/hermes-agent/pull/139473)） |
| P2 | [#139303](https://github.com/NousResearch/hermes-agent/issues/139303) | Bot Mode DM `asyncio.run()` 嵌套循环崩溃+误判 | ❌ 无 |
| P2 | [#139091](https://github.com/NousResearch/hermes-agent/issues/139091) | `hermes update` merge-base 探测 10s 超时，**阻碍用户更新** | ❌ 无 |
| P2 | [#138329](https://github.com/NousResearch/hermes-agent/issues/138329) | httpx2 2.12.0 的 1 MiB SSE 事件上限静默破坏大型 MCP 服务器 | ❌ 无 |
| P2 | [#139002](https://github.com/NousResearch/hermes-agent/issues/139002) | Desktop 群组创建必失败（`invalid_params`） | ❌ 无 |
| P2 | [#139029](https://github.com/NousResearch/hermes-agent/issues/139029) | Kanban worker 死于 `synchronous_rpc_on_event_loop`（0.22.1 回归） | 🔄 或被 0.22.2 缓解，待验证 |
| P2 | [#139564](https://github.com/NousResearch/hermes-agent/issues/139564) | Desktop 将本地群聊同步到远程网关，**潜在隐私边界问题** | ❌ 无 |
| P2 | [#139536](https://github.com/NousResearch/hermes-agent/issues/139536) | TUI 会话切换器 close 永不生效 | ❌ 无 |
| P3 | [#139533](https://github.com/NousResearch/hermes-agent/issues/139533) | Windows 插件安装因目标目录不存在直接崩溃 | ❌ 无 |
| P3 | [#135217](https://github.com/NousResearch/hermes-agent/issues/135217) | `--version` 显示错误发布日期 | ❌ 无 |

**已修复闭环**：[#139596](https://github.com/NousResearch/hermes-agent/issues/139596)（skills reset --restore 无效，对应 [PR #103127](https://github.com/NousResearch/hermes-agent/pull/103127)）、[#138908](https://github.com/NousResearch/hermes-agent/issues/138908)（groups.log 契约违规）、[#139573](https://github.com/NousResearch/hermes-agent/issues/139573)（Desktop 状态栏 TPS 显示）。

## 6. 功能请求与路线图信号

- **[#139027](https://github.com/NousResearch/hermes-agent/issues/139027)**：请求插件层的“持久化 turn 准入 + 自动化来源溯源 + 写入释放回执”原生契约。结合网关已宣告的 `durable-admission-v1` 能力（见 #139536 环境），**极可能纳入下一版本**。
- **[PR #136527](https://github.com/NousResearch/hermes-agent/pull/136527) / [PR #136404](https://github.com/NousResearch/hermes-agent/pull/136404)**：审批规则安全加固系列（git 全局 flag 绕过修复、`--force-with-lease` 独立键位），属安全边界 PR 家族，合入概率高。
- **[PR #133692](https://github.com/NousResearch/hermes-agent/pull/133692)**：compaction 边界重新折叠 `/goal` 契约——补齐长会话目标持久性，符合项目对长任务可靠性的持续投入。
- **文档系列 PR（[#134298](https://github.com/NousResearch/hermes-agent/pull/134298)、[#134299](https://github.com/NousResearch/hermes-agent/pull/134299)、[#134300](https://github.com/NousResearch/hermes-agent/pull/134300)）**：CLI 参考补全，与今日 [#139593](https://github.com/NousResearch/hermes-agent/issues/139593)（update --help 不可读）呼应，文档 overhaul 信号明显。

## 7. 用户反馈摘要

- **升级通道是最大痛点**：#139091（更新超时）、#139593（help 文本混乱）、#135217（版本日期错误）——用户卡在“无法正确更新/不知道该在哪个频道”，其中 [#139091](https://github.com/NousResearch/hermes-agent/issues/139091) 值得优先处理。
- **0.22.1 的短暂失误造成实际影响**：Microsoft Store 用户卡 "Connecting"（已由 0.22.2 修复），Kanban worker 崩溃（#139029）等回归报告密集出现，说明**发布构建流程（v0.22.1 错误 commit）是信任敏感点**。
- **Desktop 端反馈集中**：群组创建失败、预览工具不工作（[#129420](https://github.com/NousResearch/hermes-agent/issues/129420)）、跨网关同步越界（#139564），Desktop 作为较新形态欠账较多。
- **正面信号**：社区报告质量极高（多条含完整根因分析，部分由 AI 助手辅助生成，如 #139002），贡献者 @yoyodine-industries、@33hodl、@counterposition 持续产出高质量修复 PR。

## 8. 待处理积压

| 项目 | 状态 | 提醒 |
|---|---|---|
| [#104865](https://github.com/NousResearch/hermes-agent/issues/104865)（P1，hook 丢回调） | 开放 5 周+ | 数据丢失级问题，无 assignee 迹象，建议优先 |
| [#89199](https://github.com/NousResearch/hermes-agent/issues/89199)（P3，config 误警告） | 开放近 2 个月 | 低危但高频噪音，影响新手信任 |
| [#70838](https://github.com/NousResearch/hermes-agent/issues/70838)（P2，终端 guard 误杀） | 开放近 3 个月 | 不可绕过的误拦截，用户体验持续受损 |
| [#132492](https://github.com/NousResearch/hermes-agent/issues/132492)（P2，1Password vault fill） | 开放 2 周，安全边界标签 | 涉及认证流，建议排期 |
| [#99144](https://github.com/NousResearch/hermes-agent/issues/99144)（P2，QQBot 消息丢失） | 开放 6 周+ | 中国平台用户投递可靠性，涉及 reasoning 模型场景 |

---

**健康度小结**：Issue 关闭率偏低（3/50）但符合大合并后的回归消化期特征；PR 积压 45 个中有明确分域打包计划，路线图透明。**建议关注点：v0.22.2 发布流程正确性验证、cron P1（#135487）、更新通道阻断（#139091）**。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 · 2026-10-16

## 1. 今日速览

- 过去 24 小时项目共有 **26 项更新**（Issues 4 条 + PR 22 条），其中 13 个 PR 待合并、9 个已合并/关闭，无新版本发布。
- 活跃度**中等偏高**，但贡献几乎全部来自社区外部贡献者（@Seng-Jik、@intrepid37、@unera 等），官方维护者响应迹象偏弱。
- 值得警惕的信号：多条 PR/Issue 被批量标记 `[stale]` 并关闭（#3409、#3408、#3410–#3413、#3378 等），且社区已出现**主动维护的活跃 Fork 公告**（Issue #3417），项目疑似处于低维护/交接期。
- QQ 通道成为今日修复焦点（鉴权、chat 类型探测、自研 C2C 通道），另有多项 cron 时区与状态上报修复。

## 2. 版本发布

无新版本发布。依赖批量升级 PR（#3432–#3436）可能为下个版本做准备。

## 3. 项目进展

今日关闭的 PR 中包含多项实质性修复：

- **QQ 通道鉴权修复** [#3437](https://github.com/sipeed/picoclaw/pull/3437)：botgo 在 resty 中将 auth scheme 设在 client 而非 Request 上，导致 `Authorization` 头格式错误（401）。已关闭。
- **QQ chat 类型探测** [#3438](https://github.com/sipeed/picoclaw/pull/3438)：`getChatKind()` 对未知 chatID 一律返回 `group`，导致发私聊消息返回 40011028；现已支持显式声明 + 自动纠正。已关闭。
- **DeltaChat 重构** [#3222](https://github.com/sipeed/picoclaw/pull/3222)：清理遗留实现，净减 200 LOC，被 stale 关闭（可能被放弃）。
- **Web UI 卡顿修复** [#3347](https://github.com/sipeed/picoclaw/pull/3347)：聊天区大量文本时界面卡顿的修复，同样以 stale 关闭，**有价值代码可能流失**。
- 讽刺的是，racso2609 的一系列高质量 Web UI 改进（#3410–#3413：steering 队列可视化、失败 turn 可见性、诚实工作状态指示器、多通道会话侧栏）全部被 stale 机制关闭，未见合并。

**评估**：核心代码向前推进有限——多数关闭动作来自 stale bot 而非人工 review 合并，项目吞吐质量存疑。

## 4. 社区热点

- **[#3417 活跃 Fork 公告](https://github.com/sipeed/picoclaw/issues/3417)**（2 评论）：@afjcjsbx 宣布因主仓库疑似无人维护而建立活跃 Fork `afjcjsbx/picoclaw`，反映社区对项目存续的强烈焦虑。
- **[#3440 自研 QQ C2C Channel](https://github.com/sipeed/picoclaw/pull/3440)**：完全脱离 botgo 依赖，按 QQ 机器人 API v2 从零实现 WebSocket 网关、流式输出、按钮交互——是对 #3437 根因（botgo 缺陷）的釜底抽薪方案，是今日最具分量的功能 PR。
- **[#3439 launcher 网络绑定 Bug](https://github.com/sipeed/picoclaw/issues/3439)**：`-public` 只绑 IPv6、与 `-host` 冲突导致 crash loop，来自 OpenWrt 嵌入式部署场景的真实痛点。

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | **launcher crash loop**：`-public` 与 `-host` 同设自撞；`-public` 单独只绑 IPv6（#3439） | 🔴 暂无 fix PR |
| 高 | **QQ 通道 401 无法启动**（#3437） | ✅ 已关闭 |
| 高 | **QQ 消息投递 400**，chat 类型猜错（#3438） | ✅ 已关闭 |
| 中 | **cron 时区失效**：`schedule.TZ` 被忽略，面板显示错乱（[#3441](https://github.com/sipeed/picoclaw/pull/3441)） | 🟡 fix PR 待合并 |
| 中 | **cron 失败仍记录 `lastStatus: ok`**（[#3442](https://github.com/sipeed/picoclaw/pull/3442)） | 🟡 fix PR 待合并 |
| 中 | **Telegram MarkdownV2 转义**导致格式丢失（[#3443](https://github.com/sipeed/picoclaw/pull/3443)） | 🟡 fix PR 待合并 |

## 6. 功能请求与路线图信号

- **QQ C2C 自研通道**（#3440）：若合并，将摆脱 botgo 依赖，是最可能进入下个版本的大特性。
- **Standard Compute provider**（[#3431](https://github.com/sipeed/picoclaw/pull/3431)）：新增 OpenAI 兼容网关接入，延续 #2917 模式。
- **Web UI 隐藏 tool feedback args 开关**（[#3430](https://github.com/sipeed/picoclaw/pull/3430)）：是 #3429 的 launcher 配套，链路完整度高。
- **批量依赖升级**：anthropic-sdk-go 1.55→1.80、golang.org/x/crypto 0.53→0.58、gronx、azidentity、go.mau.fi/util（#3432–#3436），gronx 升级与 #3441 时区修复可能相关联。

## 7. 用户反馈摘要

- **嵌入式/边缘部署用户**（OpenWrt + procd 常驻）在真实网络环境中暴露双栈绑定问题，说明 PicoClaw 被用于路由器级常驻 AI 助手场景。
- **国内生态用户**对 QQ 通道可用性诉求强烈，一日内出现 3 个 QQ 相关修复/特性，是当前最高频痛点。
- **Web UI 静默丢消息**（#3408）是反复出现的抱怨：忙碌时排队消息不可见、队列满时静默丢弃，“消息像消失了一样”——用户对反馈透明度的需求未被满足。
- 被 stale 关闭的多个 PR 作者（@racso2609、@sarff、@iMilnb、@trufae）均为真实使用者/贡献者，其不满情绪可能正流向 #3417 的活跃 Fork。

## 8. 待处理积压

⚠️ **项目健康度核心风险**：

- 13 个待合并 PR 中，含 **5 个依赖安全升级**（含 x/crypto 跨 5 个 minor 版本）和多个功能性修复，均无维护者响应。
- 高严重度 Issue **#3439（launcher crash loop）0 评论**，需优先认领。
- 大量被 stale 关闭但仍有价值的 PR（#3347 卡顿修复、#3378 OAuth scope 修复、#3410–#3413 Web UI 系列建议作者转向 Fork 或维护者重新评估）。
- 建议官方尽快就 #3417 的 Fork 事件表态，明确维护路线，避免社区进一步分裂。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 · 2026-10-16

## 1. 今日速览

NanoClaw 今日保持高活跃度：过去 24 小时 PR 活动达 50 条（35 条待合并、15 条合并/关闭），Issues 活动较少（2 条，均为关闭），无新版本发布。维护团队（core-team 标签成员 @glifocat、@amit-shafnir）与长期贡献者 @barnuri 是今日主要推动力，工作重心集中在**安全加固（依赖清理）、可观测性（错误报告/会话日志）和定时任务轻量化**三条主线。35 条待合并 PR 形成了可观的评审积压，显示项目产出速度快于消化速度，但整体健康度良好。

## 2. 版本发布

今日无新版本发布。值得注意的是，多个已合并的修复（如 Signal 附件处理 #3799、shebang 修复 #3834）尚未伴随 release，可能积累至下一个版本。

## 3. 项目进展

今日合并/关闭 15 条 PR，重点包括：

- **#3799 [已关闭] fix(signal): 通过 session inbox 暂存入站附件** —— 修复 Signal 渠道附件无法被 agent 读取的问题，与 Issue #3671（signal-cli 挂起）一并闭环，Signal 渠道稳定性显著改善。([PR #3799](https://github.com/nanocoai/nanoclaw/pull/3799))
- **#3834 [已关闭] fix(scheduling): 尊重任务脚本 shebang** —— 带有 `#!/usr/bin/env python` 等声明的 pre-task 脚本不再被强制以 bash 执行而报语法错误，随后配套文档 PR [#4098](https://github.com/nanocoai/nanoclaw/pull/4098) 当日提交，形成修复+文档闭环。([PR #3834](https://github.com/nanocoai/nanoclaw/pull/3834))
- **Issue 层面**：[#2680](https://github.com/nanocoai/nanoclaw/issues/2680)（加密家目录 + linger 下服务开机不自启）与 [#3671](https://github.com/nanocoai/nanoclaw/issues/3671)（signal-cli 0.14.3 静默挂起）双双关闭，稳定性短板补齐。

整体看，今日推进幅度中等偏大：渠道附件处理链路（Signal、Discord #2752 在途）、定时任务执行正确性均向前迈进。

## 4. 社区热点

今日数据的评论数为空（undefined），无法直接判定讨论热度，但从更新频次看：

- **#4092 [OPEN, core-team] 跨会话上下文：agent 把自己在其他线程的回复当成“另一个 agent"**（@amit-shafnir，10-15 创建/更新）——涉及多线程 DM 场景下的身份混淆，直接影响 agent 行为正确性，属核心语义问题，是今日最受核心团队关注的新 PR。([PR #4092](https://github.com/nanocoai/nanoclaw/pull/4092))
- **#3932 /add-lean-tasks**（@barnuri 系列）——让定时任务在小模型/本地模型上低成本运行，反映用户对**降低 token 消耗**的强烈诉求，是 @barnuri 今日更新的十余个 PR 中功能价值最高的一个。([PR #3932](https://github.com/nanocoai/nanoclaw/pull/3932))

## 5. Bug 与稳定性

今日**新开 Bug 为 0**，存量处理情况：

| 问题 | 严重度 | 状态 |
|---|---|---|
| #2680 加密家目录 + linger 导致开机不自启（Pi/嵌入式用户高发场景） | medium | ✅ 已关闭 |
| #3671 signal-cli 0.14.3 与新联系人会话静默挂起（上游已修） | high（通讯中断且无报错） | ✅ 已关闭 |
| #4019 systemd unit 未等待 Docker，Pi 重启后 `FATAL: Container runtime failed to start` | medium | 🔄 fix PR 开放中 ([PR #4019](https://github.com/nanocoai/nanoclaw/pull/4019)) |
| #2752 Discord 附件（图片/paste 文本）agent 不可见 | medium | 🔄 fix PR 开放中，6 月提交至今 ([PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752)) |
| #4092 agent 跨线程自我身份混淆 | medium-high（行为正确性） | 🔄 fix PR 开放中，core-team 处理中 |

安全方面：**#4089** 清除 11 条 dev-only Dependabot 告警、**#4042** Resend 适配器升版消除 4 条 npm audit 中级告警，均无生产面暴露。([PR #4089](https://github.com/nanocoai/nanoclaw/pull/4089) / [PR #4042](https://github.com/nanocoai/nanoclaw/pull/4042))

## 6. 功能请求与路线图信号

@barnuri 的 PR 群构成清晰的路线图信号，且多为相互依赖的成组提交，合并意愿明显：

- **可观测性套件**（很可能进入下一版本）：#3934（宿主管道错误 sink）→ #3922（会话容器日志保留）→ #3935（`/add-error-reports` 向聊天推送自身故障），三者构成“自监控”能力链。
- **富消息渲染**：#3926（postCard hook）→ #3927（可折叠 send_card 子节点）→ #3940（Slack Block Kit 折叠块），依赖链已明确标注，属计划内特性。
- **运维灵活性**：#3898（`NANOCLAW_DISABLED_CHANNELS` 临时停用渠道）、#3932（lean tasks 降本）、#3921（任务字段扩展机制）。
- **扩展性架构**：#3904（turn-lifecycle hook 注册表）降低 fork 定制成本，配合 #3899 的 fork 目录约定文档，显示项目在为“可分叉的插件化生态”铺路。

## 7. 用户反馈摘要

- **树莓派/自托管用户**是 bug 报告主力：开机启动依赖（#4019）、加密家目录（#2680）均反映“无人值守长期运行”是核心使用场景，用户期望重启后零干预。
- **Signal 渠道用户**痛点是“静默失败”（#3671：无报错、无超时、双方都收不到），提示用户对**可诊断性**的期待高于功能丰富度——与 #3935 错误报告技能的需求互相印证。
- **成本敏感**：#3932 明确针对“小模型/本地模型跑定时任务”场景，说明社区存在不依赖云端大模型的轻量使用群体。
- 整体情绪偏建设性：报 issue 的用户（@glifocat、@IT-Sage、@gbmerrall）同时是 fix PR 作者，社区参与深度高。

## 8. 待处理积压

35 条待合并 PR 中需维护者优先关注：

- **#2752**（Discord 附件修复）——6 月 12 日提交，已悬挂 **4 个月**，是当前最老的功能性 fix PR，建议尽快评审或给出反馈。([链接](https://github.com/nanocoai/nanoclaw/pull/2752))
- **#4019**（Docker 启动顺序修复）——影响所有 Pi 重启场景，10 月 4 日提交，等待评审。
- **#3926/#3927/#3940 依赖链**——Slack 折叠卡片三连 PR，需按序合并，建议尽快启动评审以免阻塞后续。
- **#3932/#3921** 等任务系统重构群——涉及核心模块（tasks.ts、poll-loop），合并越晚冲突风险越大。

**健康度小结**：产出强劲、修复闭环迅速（signal/调度/shebang 当日闭环）、社区贡献深度高；主要风险是 35 条开放 PR 的评审带宽，建议维护者优先消化 4 个月积压的 #2752 与成组依赖链 PR。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报（2026-10-16）

## 1. 今日速览

NullClaw 今日呈现「单人高强度贡献、审查待启动」的典型状态：过去 24 小时共有 10 条 Issue/PR 更新（1 Issue + 9 PR），全部来自社区贡献者 @wray-lee，且集中在同一主题——OpenClaw 对齐改进。8 个 PR 处于待合并状态，仅 1 个 PR（#1057）被主动关闭（因与维护者 PR #971 重叠，属合理去重）。无新版本发布。项目当前瓶颈不在贡献量，而在维护者的审查带宽：9 个 PR 中多个与已有维护者 PR（#971、#1050）存在交叠，合并顺序与去重决策是当前最紧迫的事项。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日唯一的 PR 状态变更：

- **[#1057](https://github.com/nullclaw/nullclaw/pull/1057) [CLOSED]** `feat(providers): support native tool calls while streaming` —— 作者主动关闭，因其与维护者 PR #971 功能重叠，作者声明“#971 合并后即关闭”。这是一个健康的社区协作信号：避免了重复实现，等待上游合并。

虽然今日无合并，但 8 个待合并 PR 覆盖了相当完整的改进面：

| 领域 | PR | 内容 |
|---|---|---|
| Provider 修复 | [#1064](https://github.com/nullclaw/nullclaw/pull/1064) | 多轮对话时按需回传带 `reasoning_content` 的 assistant 历史 |
| Provider 修复 | [#1065](https://github.com/nullclaw/nullclaw/pull/1065) | `/think` 级别传递给 OpenAI 兼容模型（栈式依赖 #1064） |
| Provider 修复 | [#1060](https://github.com/nullclaw/nullclaw/pull/1060) | 通过显式 `provider/model` 前缀路由已配置的 provider |
| 配置 | [#1059](https://github.com/nullclaw/nullclaw/pull/1059) | 新增 `agent.reasoning_mode` 默认值（与维护者 PR #1050 有交叠） |
| Slack | [#1058](https://github.com/nullclaw/nullclaw/pull/1058) | 流式输出回复（12 文件、+2044 行，改动量大） |
| Slack | [#1061](https://github.com/nullclaw/nullclaw/pull/1061) | 用 emoji reaction 展示任务生命周期状态 |
| Telegram | [#1062](https://github.com/nullclaw/nullclaw/pull/1062) | 实时草稿改用 HTML parse mode 渲染，修复格式丢失 |
| 安全 | [#1063](https://github.com/nullclaw/nullclaw/pull/1063) | 命名 agent 支持独立 autonomy 策略（替代全局策略） |

若这批 PR 合并，NullClaw 在多 provider 兼容性、IM 渠道流式体验、细粒度安全控制三个方向将有实质性跃进。

## 4. 社区热点

- **[#1066](https://github.com/nullclaw/nullclaw/issues/1066) [OPEN]** tracking issue，聚合 #1057–#1065 共 9 个 PR。作者 @wray-lee 在将 NullClaw 作为 Slack/Telegram 助手对接 OpenAI 兼容网关（DeepSeek、IFM K2）的实际使用中，一次性提出整套改进。该 issue 是今日所有活动的中枢，评论 0 条说明维护者尚未介入回应。
- 值得注意的是所有 PR 均无评论互动（评论数为 undefined/0），表明这批高质量贡献目前处于「已提交、待审查」状态，尚未形成讨论。

**背后诉求**：重度用户希望 NullClaw 在真实多模型（DeepSeek/IFM K2 等 OpenAI 兼容端点）、多渠道（Slack/Telegram）生产场景下达到 OpenClaw 的功能对齐水平，尤其是推理内容处理和流式体验。

## 5. Bug 与稳定性

今日无传统意义的崩溃类 Bug 报告，但 PR 中隐含两个生产环境兼容性缺陷：

1. **【中高】多轮对话 400 错误**（IFM K2 网关要求每条 assistant 消息携带 thinking 字段）→ 已有 fix PR [#1064](https://github.com/nullclaw/nullclaw/pull/1064)
2. **【中】`/think` 与 `reasoning_effort` 配置无法传递到 OpenAI 兼容模型**（`appendGenerationFields` 丢弃字段）→ 已有 fix PR [#1065](https://github.com/nullclaw/nullclaw/pull/1065)（依赖 #1064 合并）
3. **【中】`provider/model` 显式前缀仅对主 provider 和 `reliability` 列表中的 provider 生效** → fix PR [#1060](https://github.com/nullclaw/nullclaw/pull/1060)
4. **【低】Telegram 流式草稿丢失格式**（纯文本 vs 最终 HTML 渲染不一致）→ fix PR [#1062](https://github.com/nullclaw/nullclaw/pull/1062)

## 6. 功能请求与路线图信号

从 PR 主题可识别的路线图方向：

- **流式体验增强**：Slack 出站流式回复（#1058）+ 原生流式 tool calls（维护者 PR #971）→ 极可能进入下一版本，是明显的维护者优先方向。
- **推理控制深化**：`reasoning_mode` 默认值（#1059，需与维护者 #1050 合并方案对齐）+ `/think` 透传（#1065）。
- **安全细粒度化**：per-agent autonomy（#1063）允许 guest agent 与主 agent 权限隔离，符合个人 AI 助手多租户场景趋势，建议优先审查。
- **渠道 UX**：Slack 任务状态 reactions（#1061）、Telegram HTML 草稿（#1062）为低风险、高感知度改进，易纳入。

**注意**：#1064/#1065 为栈式 PR，合并顺序将影响后续 rebase，建议维护者尽快给出审查排期。

## 7. 用户反馈摘要

今日无 Issue 评论可提炼，但从 #1066 及 PR 描述可还原作者的真实使用画像：

- **使用场景**：将 NullClaw 部署为 Slack + Telegram 双渠道个人助手，后端接 DeepSeek 和 IFM K2 的 OpenAI 兼容网关——典型的自托管多模型工作流。
- **痛点**：非头部模型的兼容性问题（thinking 字段、reasoning 透传）在现有实现中被系统性忽略；IM 渠道的流式输出体验与最终渲染不一致；全局 autonomy 策略导致受限 agent 权限过宽。
- **协作态度积极**：作者主动标注与维护者 PR 的重叠、主动关闭重复 PR、说明栈式依赖关系，是高质量贡献者，值得社区挽留。

## 8. 待处理积压

- **8 个待合并 PR（#1058–#1065）均无维护者回应**，建议维护者优先处理三件事：
  1. 明确 #1059 与维护者 PR #1050 的合并方案（作者已给出合并建议）；
  2. 审查 #1064 → #1065 的栈式合并顺序；
  3. 评估大体量 PR #1058（+2044 行）的拆分可行性。
- **Tracking issue #1066 需要维护者认领或分派**，避免 9 个 PR 分散审查造成遗漏。
- 今日无长期未响应的历史 Issue 数据，但 #971（流式 tool calls）作为 #1057 关闭的前置条件，其合并进度值得社区持续关注。

---

*数据来源：NullClaw GitHub 仓库截至 2026-10-16 的 24 小时活动快照。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-10-16

## 1. 今日速览
过去 24 小时 IronClaw 仓库整体活跃度较低：新增/活跃 Issue 1 条，PR 更新 0 条，无新版本发布。唯一的动态来自自动化 benchmark 分析报告 Issue [#8138](https://github.com/nearai/ironclaw/issues/8138)，属于持续性的每日失败分类（failure taxonomy）例行产出，而非社区用户驱动的讨论。综合判断，项目今日处于**低强度稳定运行**状态，无代码合并、无版本迭代、无用户反馈涌入。

## 2. 版本发布
今日无新版本发布，最新 Release 无更新，无破坏性变更或迁移事项。

## 3. 项目进展
今日无 PR 合并或关闭，代码层面无实质推进。项目进度主要体现为评测侧的持续监控（见下文 Issue #8138），表明团队仍在跟踪模型质量表现，但未产生代码改动。

## 4. 社区热点
- **[#8138 Daily ironclaw failure taxonomy — 2026-10-15](https://github.com/nearai/ironclaw/issues/8138)**（作者 @pranavraja99，2026-10-15 创建，评论 0，👍 0）
  - 这是自动化机器人发布的每日失败分类报告，针对 officeqa suite 的 50 个未通过任务进行分析。
  - 核心结论：本轮未通过任务绝大多数为**真实的模型质量错误**，DeepSeek-V4-Flash 在 officeqa 基准运行中出现导航类失败。
  - 背后诉求：这并非社区讨论，而是项目维护方用于持续量化 IronClaw agent 在办公自动化任务上的能力边界，为后续优化提供数据基线。

## 5. Bug 与稳定性
今日无用户报告的 Bug、崩溃或回归问题。唯一相关的质量信号来自 [#8138](https://github.com/nearai/ironclaw/issues/8138)：
- **[中等] 模型质量类失败（officeqa）**：50 个未通过任务主要是 DeepSeek-V4-Flash 的导航能力不足，属被测模型侧问题而非 IronClaw 框架 Bug，暂无 fix PR（也大概率不需要框架侧修复）。

## 6. 功能请求与路线图信号
今日无新增功能请求。从 #8138 的失败分类可间接推断：若导航类失败持续高频出现，**改进 agent 导航/任务规划能力**可能成为后续迭代方向，但目前无对应 PR 支撑，仅为观察信号。

## 7. 用户反馈摘要
今日无用户评论可供提炼。自动化报告内容显示当前痛点集中在被测模型 DeepSeek-V4-Flash 于 officeqa 场景下的任务完成质量，属于 benchmark 层面的观察而非终端用户直接反馈。

## 8. 待处理积压
- 今日数据中无长期未响应的 Issue 或 PR，积压风险暂无法从本日报数据判断。建议维护者关注 #8138 系列日常报告中被反复标记的失败类别，识别是否存在需要框架侧介入的系统性问题。

---
*数据来源：GitHub API，统计窗口 2026-10-15 至 2026-10-16。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-10-16）

## 1. 今日速览

- 项目今日无新 Issue、无新版本发布，但 PR 活动较为集中：过去 24 小时共 11 条 PR 更新，其中 **6 条已合并/关闭**，5 条待合并，全部为开发者主导的功能与修复类提交，社区讨论热度较低。
- 开发重心清晰聚焦两条线：**Desktop Companion（桌面伴侣/悬浮窗）交互打磨** 与 **MCP OAuth 能力建设**。
- 积压方面，3 条 Dependabot 依赖升级 PR 已停滞约 1 个月，需维护者关注。
- 整体健康度：核心开发节奏稳定、代码吞吐量健康，但社区互动（Issue/评论）接近静默，需警惕贡献者与用户活跃度失衡。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日关闭的 6 条 PR 均为实质性推进：

| PR | 内容 | 影响 |
|---|---|---|
| [#2878](https://github.com/netease-youdao/LobsterAI/pull/2878) | 移除已退役的影视/音乐搜索技能，并清理升级后用户数据中的残留（含升级恢复备份），防止旧技能被还原 | 技能瘦身与数据治理 |
| [#2877](https://github.com/netease-youdao/LobsterAI/pull/2877) | 修复桌面伴侣 orb 重复点击弹窗不复关、卡片跳动、快捷入口跳转错误页等 | 交互稳定性显著提升 |
| [#2876](https://github.com/netease-youdao/LobsterAI/pull/2876) | 改进拖拽文件、登录、截图、复制选区、任务追问交互；追问提示变为可持久化用户轮次并展示提交进度 | 悬浮窗核心体验完善 |
| [#2873](https://github.com/netease-youdao/LobsterAI/pull/2873) | 优化悬浮窗翻译请求处理：隔离账号切换时的在途请求、统一认证错误提示、完善额度提示（30 项测试通过） | 翻译链路健壮性 |
| [#2872](https://github.com/netease-youdao/LobsterAI/pull/2872) | 图片/视频生成状态细化（等待/生成中/核实/失败/超时等），长任务后台继续、重启后恢复，避免重复生成与重复通知 | 媒体生成可靠性大幅提升 |
| [#958](https://github.com/netease-youdao/LobsterAI/pull/958) | 三月份的「临时会话（隐私轻聊）」功能 PR 被关闭，涉及 `cowork_sessions.is_temp` 字段 | 长期挂起 PR 清理，功能去向需关注 |

**待合并主线（MCP OAuth 系列）**：
- [#2874](https://github.com/netease-youdao/LobsterAI/pull/2874)：支持远程 MCP 服务器（Streamable HTTP/SSE）通过 OAuth 2.1 登录，用户无需再去服务商后台手动创建 API Key。
- [#2875](https://github.com/netease-youdao/LobsterAI/pull/2875)：基于 #2874，将 Lynxce Omni AI（灵策全能AI）作为一键 MCP OAuth 入口接入市场，并使本地注册表可通用声明 OAuth，后续接入零代码。两 PR 存在依赖关系，预计将一并合入。

**小结**：今日一次性落地了桌面伴侣三连修 + 翻译体验优化 + 媒体生成恢复机制，产品成熟度向前推进明显；MCP OAuth 一键登录若合入，将是接入体验的标志性升级。

## 4. 社区热点

今日无新 Issue、无评论互动，无热点讨论。PR 均由 @fisherdaddy、@alison-xx、@btc69m979y-dotcom 三位核心贡献者驱动。

## 5. Bug 与稳定性

今日无用户报告的新 Bug。已修复的稳定性问题（均已随 PR 关闭）：

1. **桌面伴侣弹窗/卡片行为异常**（交互层）— 已由 [#2877](https://github.com/netease-youdao/LobsterAI/pull/2877) 修复。
2. **拖拽、登录、截图、追问流程不稳定** — 已由 [#2876](https://github.com/netease-youdao/LobsterAI/pull/2876) 修复。
3. **翻译/额度查询认证错误处理不一致、账号切换导致在途请求串扰** — 已由 [#2873](https://github.com/netease-youdao/LobsterAI/pull/2873) 修复，附回归测试。
4. **媒体生成回包丢失导致重复生成/重复通知、重启后任务丢失** — 已由 [#2872](https://github.com/netease-youdao/LobsterAI/pull/2872) 修复。

无未修复的高严重度问题。

## 6. 功能请求与路线图信号

- **MCP OAuth 一键登录 + 市场化接入**（[#2874](https://github.com/netease-youdao/LobsterAI/pull/2874) / [#2875](https://github.com/netease-youdao/LobsterAI/pull/2875)）：方向明确，通用 OAuth 声明机制暗示后续将批量引入第三方 MCP 服务，极可能进入下个版本。
- **临时会话（隐私模式）**（[#958](https://github.com/netease-youdao/LobsterAI/pull/958)，已关闭）：曾被社区提出的需求，PR 遭关闭（挂起近 7 个月）。实现方案（`is_temp` 字段）已存在，若官方认可该需求，重启成本低——建议社区关注官方是否以新方案重做。
- **桌面伴侣**连续三日密集迭代，表明它是当前最高优先级的产品线。

## 7. 用户反馈摘要

今日无 Issue/评论数据，无法提炼新的用户反馈。间接信号：开发者近期集中修复悬浮窗翻译额度提示、登录引导、拖拽截图等，反映这些是真实用户高频使用且痛点集中的场景。

## 8. 待处理积压

以下 PR 长期未响应（均标记 stale），建议维护者处理：

1. [#2460](https://github.com/netease-youdao/LobsterAI/pull/2460) — rimraf 5.0.10 → 6.1.3（2026-08-10 开起，已逾 2 个月）
2. [#2666](https://github.com/netease-youdao/LobsterAI/pull/2666) — actions/labeler v5 → v7（2026-09-14 开起）
3. [#2667](https://github.com/netease-youdao/LobsterAI/pull/2667) — trufflehog 3.88.30 → 3.97.4（2026-09-14 开起）

依赖与 CI 升级积压会影响安全性与构建链健康，建议尽快评审合并或明确关闭。此外，待合并的 MCP OAuth 系列是当前唯一阻塞功能主线的 PR，建议优先推进。

---
*数据来源：GitHub API（过去 24 小时）。本报告基于客观数据生成，链接均可追溯。*

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

# CoPaw 项目日报 · 2026-10-16

## 1. 今日速览

CoPaw（QwenPaw）今日处于**高活跃状态**：过去 24 小时 Issues 更新 28 条（新开/活跃 20，关闭 8），PR 更新 26 条（待合并 20，合并/关闭 6），并有 **v2.2.2 稳定版正式发布**。社区讨论焦点集中在 Console 体验（页面加载、导航定位、cron 编辑）与多 Agent 调度稳定性（任务被静默取消）两大方向。多位外部厂商（Firecrawl）与首次贡献者持续提交高质量 PR，生态共建氛围良好。总体判断：项目处于快速迭代期，功能扩张与稳定性打磨并行。

## 2. 版本发布

### v2.2.2（Stable）✅ 已发布

- **Release 链接**：[v2.2.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2)
- **安装验证**：[Release Duty #8262](https://github.com/agentscope-ai/QwenPaw/issues/8262)，要求发布后 4 小时内（截至 2026-10-15 11:10 UTC）完成四项检查点全平台验证，前一版本 [beta.6 验证 #8258](https://github.com/agentscope-ai/QwenPaw/issues/8258) 已通过并关闭。

**主要更新**：
- **Console & Workspaces**：
  - 新增六套主题色板，支持自定义颜色与圆角，带实时预览和偏好保存（[#7741](https://github.com/agentscope-ai/QwenPaw/pull/7741)）
  - Chat 内新增带认证的多标签终端（Multi-tab Terminal）

**迁移注意事项**：未见明确的破坏性变更声明；但注意模型目录有弃用动作（如 `mimo-v2.5-free` 已 deprecated，需改用 `mimo-v2.6-flash-free`，见 [#8218](https://github.com/agentscope-ai/QwenPaw/issues/8218)）。

## 3. 项目进展

今日合并/关闭 PR 共 6 条，代表性进展：

| PR | 内容 | 意义 |
|---|---|---|
| [#8204](https://github.com/agentscope-ai/QwenPaw/pull/8204) | Tavily API key 接入凭证存储，支持付费配额与 authed→keyless 降级 | 首次贡献者完成，闭环 [#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174) |
| [#8259](https://github.com/agentscope-ai/QwenPaw/pull/8259) | 内置 `ask_user_question` 工具，支持结构化 human-in-the-loop | 补齐 Agent 人机协作关键能力，复用 AgentScope 2.0.10 |
| [#8245](https://github.com/agentscope-ai/QwenPaw/pull/8245) | 修复交互式 HTML 预览空白，动态页面提示"在浏览器打开" | Console 体验修复 |
| [#8261](https://github.com/agentscope-ai/QwenPaw/pull/8261) | 对齐 Hub 插件目录与本地安装状态，修复加载失败后插件不可移除 | 插件体系健壮性 |

**待合并的大型功能线**（Open，持续活跃）：
- [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187) Channels 插件化 + 子进程隔离（XXXL）
- [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785) 实时语音聊天（XXXL）
- [#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903) 社区信息流与 Inbox 集成（XXXL）
- [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) 插件安全卸载与回滚式热重载
- [#8248](https://github.com/agentscope-ai/QwenPaw/pull/8248) 内联 OpenUI 支持（Intelligent UI）
- [#8266](https://github.com/agentscope-ai/QwenPaw/pull/8266) Data App 1.0.3 独立于 Host vNext 发版

整体判断：架构级重构（插件化、通道隔离、PawApp 控制面 [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874)）持续推进，项目正从单体应用向**平台化插件生态**演进。

## 4. 社区热点

1. **[#8120](https://github.com/agentscope-ai/QwenPaw/issues/8120)**（8 评论，已关闭）— 频繁"页面加载失败"，多台设备复现，是本轮讨论最多的 Issue，反映用户对 Console 前端可用性的焦虑，已在 v2.2.2 周期解决。
2. **[#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599) / [#7531](https://github.com/agentscope-ai/QwenPaw/issues/7531)**（5/3 评论，均已关闭）— OpenCode Go 套餐 `MissingSessionID` / `x-opencode-session` header 缺失问题，属上游 API 变更适配，已随版本修复。
3. **[#8252](https://github.com/agentscope-ai/QwenPaw/issues/8252)**（3 评论）— 多 Agent 舰队场景下会话被静默取消（CancelledError），产物归零且不记录发起方，是重度用户的核心痛点。
4. **[#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174)**（4 评论，已关闭）— Tavily 付费 key 无法配置，配套 PR #8204 已合并，形成完整的"Issue→PR→关闭"闭环。
5. **[#8199](https://github.com/agentscope-ai/QwenPaw/issues/8199) / [#8200](https://github.com/agentscope-ai/QwenPaw/pull/8200)** — Firecrawl 官方团队主动提出并实现 web_search 第三 provider，显示项目对上游厂商的吸引力。

## 5. Bug 与稳定性（按严重程度）

**🔴 高**：
- **[#8252](https://github.com/agentscope-ai/QwenPaw/issues/8252)** Agent 间调用会话静默取消、产物归零（v2.2.1，多 Agent 编排核心链路）。**暂无对应 fix PR**，需维护者关注。
- **[#8184](https://github.com/agentscope-ai/QwenPaw/issues/8184)** doom-loop 门控误杀任务授权的合法轮询，且被终止后 cron 记录假成功。暂无 fix PR。
- **[#8213](https://github.com/agentscope-ai/QwenPaw/issues/8213)** Hub 重启后 Local runtime 不恢复、cron 静默漏执行。暂无 fix PR。

**🟠 中**：
- **[#8249](https://github.com/agentscope-ai/QwenPaw/issues/8249)** Cron 编辑时间重置为 00:00、内容显示 `[object Object]`（2.2.2-beta.5）→ **已有 fix PR [#8267](https://github.com/agentscope-ai/QwenPaw/pull/8267)**（今日提交）。
- **[#8225](https://github.com/agentscope-ai/QwenPaw/issues/8225)** 保存 agent 配置触发的热重载会取消运行中的 cron 任务（与 #8252 同根因家族，指向热重载取消语义）。
- **[#8222](https://github.com/agentscope-ai/QwenPaw/issues/8222)** `qwenpaw acp` 不加载已安装插件，ACP 会话缺插件工具。暂无 fix PR。
- **[#8251](https://github.com/agentscope-ai/QwenPaw/issues/8251)** 消息导航目录按条目数分摊定位不准（#8214 已修一半）。
- **[#8206](https://github.com/agentscope-ai/QwenPaw/issues/8206)** Windows 上项目删除因 creator.log 被占用而 WinError 5 失败。
- **[#8270](https://github.com/agentscope-ai/QwenPaw/issues/8270) / [#8269](https://github.com/agentscope-ai/QwenPaw/issues/8269)** Windows 中文 ZIP 解压乱码，根因清晰：`zipfile.ZipFile` 未传 encoding 参数（store.py、hub.py 多处），修复成本低，建议尽快处理。

**🟡 低**：
- **[#8265](https://github.com/agentscope-ai/QwenPaw/issues/8265)** 发行版补丁版 Python 3.11 上 `importlib.invalidate_caches()` 抛异常导致插件热装中断。
- **[#8264](https://github.com/agentscope-ai/QwenPaw/issues/8264)** 桌面版 Windows 启动超 10 秒，性能体验问题。

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 纳入下一版本可能性 |
|---|---|---|
| Firecrawl 作为 web_search provider | [#8199](https://github.com/agentscope-ai/QwenPaw/issues/8199) / PR [#8200](https://github.com/agentscope-ai/QwenPaw/pull/8200)（Under Review） | **高**，PR 已在审 |
| Skill-pool 下载改为可取消后台任务 | [#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126) | 中，已有 #8055 铺垫 |
| CommandCode / HuggingFace provider 预设 | [#8233](https://github.com/agentscope-ai/QwenPaw/issues/8233) | 中 |
| Claude Code 作为第三方 agent harness | [#7396](https://github.com/agentscope-ai/QwenPaw/issues/7396)（源码中仍为占位符） | 中，路线图明确但未排期 |
| 受保护执行契约 prompt 的 i18n | [#8211](https://github.com/agentscope-ai/QwenPaw/issues/8211) | 高（小改动，模式已有先例） |
| 宿主导航策略（sidebar/settings 共享） | [#8223](https://github.com/agentscope-ai/QwenPaw/issues/8223) | 待维护者表态 |

## 7. 用户反馈摘要

- **满意点**：v2.2.2 稳定版发布节奏受到认可；主题定制、Chat 内终端等 Console 功能获得好评；Tavily key 问题从报告到合并修复的响应速度被社区正面提及；Firecrawl 等厂商主动共建。
- **不满意点**：
  - Console 前端质量：页面加载失败（#8120）、导航定位（#8251）、cron 编辑（#8249）反复出现，beta → stable 过程回归较多。
  - 运行时"静默失败"文化：#8252、#8225、#8184、#8213 共同指向**取消/终止路径缺乏可观测性**——不记录发起方、原因，甚至记为成功。
  - Windows 体验短板：启动慢（#8264）、ZIP 乱码（#8270）、文件占用删除失败（#8206）。
  - 模型弃用无迁移提示（#8218）。
- **典型场景**：多 Agent 舰队 + 飞书通道 + cron 定时任务的生产级用户正在出现，其诉求（稳定性、可审计性）与项目当前成熟度存在差距。

## 8. 待处理积压

- **[#7396](https://github.com/agentscope-ai/QwenPaw/issues/7396)**（8/28 开启，近 7 周无实质进展）— Claude Code harness 路线图问题，建议维护者给出明确排期或说明。
- **[#8184](https://github.com/agentscope-ai/QwenPaw/issues/8184)、[#8213](https://github.com/agentscope-ai/QwenPaw/issues/8213)、[#8252](https://github.com/agentscope-ai/QwenPaw/issues/8252)** — 三个高严重度运行时/调度 Bug 均**尚无关联 fix PR**，是当前最大风险点。
- **大型长期 PR**：[#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565)（9/4，插件热重载）、[#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785)（语音）、[#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903)、[#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) 均 XXXL 体量、开启近一个月，需关注评审瓶颈与合并冲突风险。
- **[#8222](https://github.com/agentscope-ai/QwenPaw/issues/8222)** ACP 模式不加载插件，影响 ACP 路线可用性。

---
*数据来源：GitHub Issues/PR Releases API · 统计窗口：2026-10-15 ~ 2026-10-16*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报（2026-10-16）

## 1. 今日速览

今日 EasyClaw 项目整体呈现“发布驱动型”活跃状态：Issues 与 PR 均无更新（各 0 条），但**单日连续发布 2 个版本**（v1.9.31、v1.9.32），显示维护者处于高频迭代节奏中。社区互动端今日静默，无新 Bug 报告或功能请求进入队列。综合判断，项目处于**稳定小步快跑的维护阶段**，核心精力集中在 TikTok 达人工作台（Affiliate workbench）与客服消息能力的持续打磨上，而非架构级演进。

## 2. 版本发布

今日发布 2 个版本，均为功能性迭代，**无破坏性变更**，无需迁移操作。

### v1.9.32 — TK Copilot（最新）
- 新增：可直接从达人工作台复制样品订单编号（sample order IDs），减少运营人员手动查找成本
- 兼容性：更新店铺设置 API 兼容性，支持最新店铺设置工具
- 链接：https://github.com/gaoyangz77/easyclaw/releases/tag/v1.9.32
- ⚠️ 注意：Release 说明中提及 macOS 下可能出现 **"'RivonClaw' is damaged"** 提示，安装指引需参考 Release 页面的完整说明（涉及 Gatekeeper 签名问题）

### v1.9.31 — TK Copilot
- 新增：达人工作台支持按站点（site）与店铺（shop）筛选，可查看已处理会话，可配置卖家未回复消息时间窗口
- 改进：提案（proposal）审核状态保持同步，展示样品订单编号，明确 TikTok 消息限制说明
- 本地化：客服升级（escalation）流程跟随桌面系统语言
- 链接：https://github.com/gaoyangz77/easyclaw/releases/tag/v1.9.31

## 3. 项目进展

今日无 PR 合并/关闭记录（数据源仅统计过去 24 小时）。但从两个版本的发布内容可推断，近期开发工作推进了以下方向：

- **达人运营效率**：样品订单编号的可见性与可复制性，两天内连续优化（v1.9.31 展示 → v1.9.32 一键复制），属于对运营工作流的快速响应式迭代
- **客服协作能力**：未回复消息窗口配置、会话筛选、消息限制提示，表明产品正朝 TikTok 卖家客服自动化方向纵深发展
- **多店铺/多站点管理**：筛选能力上线，暗示多账号运营是核心用户场景

按功能颗粒度估算，本次双版本发布相当于推进了 4-5 个中等功能的落地，迭代速度良好。

## 4. 社区热点

今日无活跃 Issues/PRs 讨论，**无社区热点可报告**。

需要指出：连续两个版本聚焦样品订单、达人工作台等具体运营细节，这类功能通常源自真实用户反馈（可能通过 Issues、群组或私下渠道）。建议维护者在 Release 说明中关联对应 Issue 编号，提升社区透明度。Issues 列表：https://github.com/gaoyangz77/easyclaw/issues

## 5. Bug 与稳定性

今日无新增 Bug 报告，无已知回归问题。

唯一需留意的稳定性相关线索：**macOS 安装包签名问题**（"app is damaged" 提示）在 Release 说明中被反复提及，说明该问题对 macOS 用户具有普遍性。若已有自动化安装指引则可接受，否则建议关注 macOS 签名/公证（notarization）的长期解决方案。

## 6. 功能请求与路线图信号

今日无新功能请求。基于近期版本节奏的路线图推断：

| 方向 | 信号强度 | 依据 |
|---|---|---|
| 达人工作台深度运营（样品、提案管理） | 高 | v1.9.31/32 连续加码 |
| 客服消息自动化（未回复监控、升级策略） | 高 | 时间窗口配置、escalation 语言支持 |
| 店铺设置工具集成 | 中 | v1.9.32 API 兼容性更新 |
| 多站点/多店铺矩阵管理 | 中 | 筛选功能上线 |

## 7. 用户反馈摘要

今日无 Issue 评论数据可供提炼。间接信号：

- **用户画像**：核心用户为 TikTok 电商卖家/达人运营人员，高频操作样品订单、提案审核、跨店客服
- **潜在痛点**：macOS 安装体验（签名问题）、TikTok 官方消息限制对自动化的约束（v1.9.31 专门增加限制说明，暗示用户曾在此受挫）

## 8. 待处理积压

今日数据中无长期未响应的 Issue 或 PR。

**建议**：当前 24 小时窗口内社区完全静默，建议维护者：
1. 核查是否存在长期（>30 天）未响应的 Issue，定期清理标签（如 `stale`）
2. 在 Release Notes 中链接功能对应的 Issue，建立“反馈 → 发布”的闭环，提升社区参与感

---

**健康度速评**：迭代速度 ★★★★☆ ｜ 社区互动 ★☆☆☆☆ ｜ 稳定性 ★★★★☆（今日无负面信号）

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*