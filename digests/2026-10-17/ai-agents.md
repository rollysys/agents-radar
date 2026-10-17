# OpenClaw 生态日报 2026-10-17

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-17 03:30 UTC

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

# OpenClaw 项目动态日报 — 2026-10-17

---

## 1. 今日速览

今日 OpenClaw 保持高活跃度：过去 24 小时 Issues 更新 500 条（新开/活跃 376、关闭 124），PR 更新 500 条（待合并 238、已合并/关闭 262），无新版本发布。社区贡献集中在网关性能优化（SQLite 读取路径、广播帧压缩）、会话/子代理状态修复以及 Control UI 持续重构。与此同时，**SQLite WAL 膨胀、Windows 启动回归、插件源捕获 SSD 磨损**等多个 P0 稳定性问题仍未落地修复 PR，是当前项目健康度的主要风险点。

---

## 2. 版本发布

过去 24 小时无新 Release。注意：Issue 中已出现 `2026.10.5-beta.2 → 2026.10.10-beta.1` 的 beta 更新故障报告（见 #173764），说明 beta 通道在持续推进但稳定性堪忧。

---

## 3. 项目进展

今日 PR 活动以 **@steipete** 和 **@vincentkoc** 两位核心贡献者为主，方向清晰：

**性能优化（多条针对性 PR，回应长期抱怨的网关卡顿）**
- [PR #175043](https://github.com/openclaw/openclaw/pull/175043) `perf(sqlite)`: 重启后 worktree 纯读取不再挤占共享 SQLite 写队列 —— 直接缓解 WAL/checkpoint 阻塞类问题
- [PR #175046](https://github.com/openclaw/openclaw/pull/175046)：修复超过 128 个活跃会话时 `SessionActorReadInvalidatedError` 导致的 chat-send 失败（200 会话压测曾产生 190 次失败）
- [PR #175028](https://github.com/openclaw/openclaw/pull/175028)：跳过 observer 事件的无用 store 发现（48 轮对话 profile 中 realpath 耗时 2017ms）
- [PR #175039](https://github.com/openclaw/openclaw/pull/175039)：复用压缩广播帧，减少 WebSocket 多接收端重复压缩
- [PR #175035](https://github.com/openclaw/openclaw/pull/175035)：Talk 文件转写时降低音频缓冲分配

**重要修复**
- [PR #175007](https://github.com/openclaw/openclaw/pull/175007) [P0]：修复升级后 agent 访问丢失（macOS 原生 bootstrap 误判历史状态、缺失 `agent_deletion` journal）
- [PR #175033](https://github.com/openclaw/openclaw/pull/175033)：修复重启后遗留 subagent "lacks its original operator source" 反复告警
- [PR #175040](https://github.com/openclaw/openclaw/pull/175040)：worker admission 截止时间改用单调时钟，修复 NTP 回拨/VM 恢复导致的握手挂死
- [PR #174814](https://github.com/openclaw/openclaw/pull/174814) [P1]：配对节点照片/截图默认私有，修复媒体被自动附加到纯文本回复的隐私泄漏
- [PR #174998](https://github.com/openclaw/openclaw/pull/174998)：停止记录 LSP server stderr，防止私有文件内容进入调试日志

**新功能 / UI**
- [PR #173773](https://github.com/openclaw/openclaw/pull/173773) / [#173762](https://github.com/openclaw/openclaw/pull/173762) / [#173774](https://github.com/openclaw/openclaw/pull/173774)：agent 头像体系升级（预设/生成/上传三选一、用已配置模型本地生成 Blobster、通知中显示头像）
- [PR #174912](https://github.com/openclaw/openclaw/pull/174912)：doctor 提供真实 per-store 数据库诊断，区分“已配置”与“已迁移”
- [PR #174809](https://github.com/openclaw/openclaw/pull/174809)：飞书账号别名精确匹配修复

整体评估：今日 PR 流偏向**性能与状态机健壮性**，与热点 Issue 的痛点高度对齐，项目在正确的方向上稳步推进，但 P0 修复（WAL 膨胀、启动回归）尚无直接 fix PR。

---

## 4. 社区热点

| Issue | 评论 | 核心诉求 |
|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) [P0] | 131 | Agent SQLite WAL 数天内膨胀至 1.4–2.8GB，手动 checkpoint 后复发并阻塞网关启动（Windows）。运行一个月仍是全库最热 Issue，用户极度不满缺乏根因修复 |
| [#159356](https://github.com/openclaw/openclaw/issues/159356) | 28 | llama.cpp embedding 子进程退出但管理器仍报 ready，HTTP 500；用户自行加内存至 8GB 后恢复，指向内存压力检测缺失 |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | 23 | 大型 SQLite transcript 归档在网关线程上执行全量物化+压缩+I/O，阻塞事件循环 —— 与今日 PR #175043 的优化方向直接相关 |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) [P1] | 21 | 2026.9.4 回归：同会话第二个 run 顶掉在途 turn，回复以 "no active tool authority snapshot" 丢失 |
| [#111897](https://github.com/openclaw/openclaw/issues/111897) [P1] | 19 | 同一 session lane 并发 run 双双完成、重复回复；与 #148707 同属 lane 调度状态机缺陷 |
| [#164294](https://github.com/openclaw/openclaw/issues/164294) / [#172091](https://github.com/openclaw/openclaw/issues/172091) | 18 / 8 | 网关 state DB WAL checkpoint 被进程内 reader 永久钉住 / worker 事务在跨线程 admission 等待下永不关闭 —— SQLite 并发读写架构系统性问题的两个新切面 |

**共性诉求**：用户反复强调的是**事件循环阻塞**与**会话/消息状态机竞态**两大主题，且 Windows 用户体验显著劣于 macOS/Linux。

---

## 5. Bug 与稳定性（按严重程度）

### P0（无 fix PR 在途，release blocker）
- [#143524](https://github.com/openclaw/openclaw/issues/143524) WAL 无限膨胀阻塞启动 — ❌ 无 fix PR
- [#162211](https://github.com/openclaw/openclaw/issues/162211) 启动阻塞事件循环 40–200s，健康监视器误判为断连并升级为重启循环 — ❌
- [#140161](https://github.com/openclaw/openclaw/issues/140161) Windows 计划任务模式冷启动挂 5–7 分钟或静默退出 — ❌
- [#167406](https://github.com/openclaw/openclaw/issues/167406) Windows MSIX + Codex 插件导致主线程饿死 — ❌
- [#154950](https://github.com/openclaw/openclaw/issues/154950) 2026.7.1-2 → 2026.9.x 升级被 "legacy-workspace" 错误永久阻塞 — ⚠️ 可能由 PR #175007 部分覆盖
- [#152275](https://github.com/openclaw/openclaw/issues/152275) 插件激活失败后模型目录与回复分发不可用直至重启 — ❌
- ✅ [#164113](https://github.com/openclaw/openclaw/issues/164113)（LXC 容器内 FICLONE EPERM 更新失败）**已关闭**，带 `queueable-fix` 标签，今日重要进展

### P1（高影响）
- [#168955](https://github.com/openclaw/openclaw/issues/168955) 2026.10.1 启动回归：410s → 1030s，`sidecars.control-ui-assets` 阻塞 477s（Windows）— ❌
- [#157989](https://github.com/openclaw/openclaw/issues/157989) 插件源捕获每次 CLI 命令重写 1.1–1.4GB、每次启动 6.5GB，严重 SSD 磨损 — ❌（关联 #162585、#158417，为一整类问题）
- [#173764](https://github.com/openclaw/openclaw/issues/173764) `openclaw update` 在 post-activation doctor 步骤无限挂起，无步骤级超时 — ❌
- [#109478](https://github.com/openclaw/openclaw/issues/109478) 多行工具参数被注入字面 `\n`，跨模型复现，产生损坏文件 — ❌（有 `queueable-fix` 标签）
- [#151962](https://github.com/openclaw/openclaw/issues/151962) 内部运行时字符串（心跳轮询等）被当作用户 prompt 提交给模型且不持久化 — ❌（`queueable-fix`）
- [#138272](https://github.com/openclaw/openclaw/issues/138272) / [#131768](https://github.com/openclaw/openclaw/issues/131768) Android Talk 在工具调用/等待时实时会话掉线 — ❌
- [#112259](https://github.com/openclaw/openclaw/issues/112259) 入站消息可能被静默丢弃，无重试/死信/用户可见失败 — ❌

### 已关闭的好消息
- [#163434](https://github.com/openclaw/openclaw/issues/163434) transcript 修剪误删会话头 — 已关闭
- [#168413](https://github.com/openclaw/openclaw/issues/168413) memory.search.extraPaths 失效 — 已关闭
- [#110702](https://github.com/openclaw/openclaw/issues/110702) Codex app-server stall — 已关闭（标记 stale/resolved）

---

## 6. 功能请求与路线图信号

- **SecretRef 支持 MCP env**（[#76493](https://github.com/openclaw/openclaw/issues/76493)，👍4）：安全最佳实践被 schema 硬拒，已挂 `needs-security-review`，纳入概率高
- **流式重复防护 / 输出守卫**（[#138245](https://github.com/openclaw/openclaw/issues/138245) 已关闭 + [#44965](https://github.com/openclaw/openclaw/issues/44965)）：无限重复输出污染会话历史，社区呼声持续，可能以新 PR 形式回归
- **Blobster 头像生态**：PR #173773/#173762/#173774 三连，明确是当前 UI 路线图重点，下版本大概率包含
- **doctor 真实诊断**（PR #174912）与 **内存搜索插件化**（PR #174925）：运维可观测性与架构解耦的持续投入
- **Prompt-cache 前缀重写优化**（[#143017](https://github.com/openclaw/openclaw/issues/143017)，实测 21.3M cache-write token 浪费）：成本敏感用户强需求，尚无 PR

---

## 7. 用户反馈摘要

**痛点**
- **Windows 是重灾区**：冷启动挂起（#140161）、启动 17 分钟（#168955）、MSIX 饿死（#167406）、schtasks 更新不可靠（#170956）——多位用户表示“要试很多次才能更新成功”
- **静默失败缺乏可观测性**：消息丢失无死信无重试（#112259）、cron 环境 MCP 工具目录缺失只显示 "Exec failed"（#120385）、`exec/read` 在 Windows 间歇性返回空（#105528）
- **信任危机**：#151962 中用户发现 agent 收到自己从未发送的“用户消息”，对透明度冲击大
- **成本焦虑**：#143017 的 prompt-cache 前缀重写给重度用户带来真金白银的浪费

**满意点**
- 升级诊断/doctor 方向改进（PR #174912）获正面期待
- 用户自发做深度根因分析（内存扩容定位 #159356、SSD 写入量化 #157989），社区技术参与度高
- 隐私默认值收紧（PR #174814）符合预期

---

## 8. 待处理积压（维护者关注提醒）

| Issue | 状态 | 说明 |
|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | P0，9/9 起 131 评论 | 最严重且最热，1 个月无 fix PR，`needs-maintainer-review` |
| [#111897](https://github.com/openclaw/openclaw/issues/111897) / [#148707](https://github.com/openclaw/openclaw/issues/148707) | P1，7 月起 | lane 并发调度缺陷成对存在，影响消息可靠性 |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | P1，9/25 起 | SSD 磨损类问题（3 个关联 issue）无任何修复迹象 |
| [#107244](https://github.com/openclaw/openclaw/issues/107244) | P1，7/14 起 | WhatsApp 群消息完全不入站，跨 3 个版本复现 |
| [#99910](https://github.com/openclaw/openclaw/issues/99910) | P1，7/4 起 | Memory dreaming 卡死网关 10 分钟，需外部 watchdog 杀进程 |
| [#112313](https://github.com/openclaw/openclaw/issues/112313) | P2，7/21 起 | 死信队列条目永久无法清除，`health` 永远报错 |
| [#76493](https://github.com/openclaw/openclaw/issues/76493) | Feature，5/3 起 | SecretRef 安全需求积压 5 个月+，已有 4 👍 |

**健康度结论**：开发节奏旺盛、方向正确（性能/状态机/隐私），但 **Windows 平台稳定性**与 **SQLite 并发架构**两大系统性债务正持续消耗社区信任，P0 积压清空速度需提升。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**数据窗口：2026-10-16 至 2026-10-17**

---

## 1. 生态全景

个人 AI 助手/自主智能体赛道已形成“一超多强 + 长尾”格局：OpenClaw 以单日 1000 条 Issue/PR 更新量级占据绝对中心地位，其架构范式（网关 + 多渠道接入 + 插件/skill 体系 + 本地运行时）正被下游项目（NullClaw 明确对标、LobsterAI 内嵌依赖、NanoClaw skill 化）事实性继承。生态共同技术主线已收敛为四条：**SQLite/存储层并发可靠性、多 IM 渠道（WhatsApp/Slack/Telegram/QQ/钉钉/飞书）消息投递正确性、上下文与记忆管理、运行时长驻稳定性**。与此同时，几乎所有高活跃项目都在经历“功能扩张 → 大合并/大重构 → 回归修复”的周期性阵痛（Hermes 的统一网关、NanoClaw 的 provider 迁移、CoPaw 的 v2.2.2 均为典型案例），Windows 平台一致性地成为各项目质量洼地。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新（开/关） | PR 更新（待/合） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（376 活跃/124 关） | 500（238/262） | 无 | ⚠️ 中偏高：迭代旺盛方向正确，但 7 个 P0 无 fix PR，WAL 膨胀 Issue 131 评论积压 1 个月 |
| **Hermes Agent** | 50（46/4） | 50（48/2） | 无 | 🔴 中低：合并吞吐严重滞后（48:2），统一网关回归修复压力集中 |
| **Zeroclaw** | 36（27/9） | 50（32/18） | 无 | 🟢 良好：v0.8.6 收尾加速，闭环健康；风险在 S0 凭据回归 #11796 与发布门禁 #11580 |
| **CoPaw (QwenPaw)** | 14（12/2） | 27（18/9） | 无 | 🟢 良好：响应快、闭环短；v2.2.2 出现崩溃级回归 #8288 需警惕 |
| **NanoBot** | 4（0/4） | 56（31/25） | 无 | 🟡 中：Bug 闭环优秀（4/4 关闭、零新增），但 31 PR 积压含多个 conflict |
| **NanoClaw** | 17（1/16） | 50（30/20） | 无 | 🟢 良好：架构收敛期，单日批量清理 16 Issue，provider 迁移基本完成 |
| **NullClaw** | 1（1/0） | 17（17/0） | 无 | 🟡 中：单人贡献洪峰（17 PR）0 审阅，瓶颈完全在维护者带宽 |
| **LobsterAI** | 5（1/4） | 16（1/15） | ✅ **v2026.10.16** | 🟢 良好：唯一发版项目，单日 15 PR 合入；安全响应快（#2851 三天闭环） |
| **PicoClaw** | 2（1/1） | 4（1/3） | 无 | 🟡 中低：QQ 渠道推进明确，但 stale 机制下关键 bug/PR 流失风险高 |
| **Moltis / EasyClaw** | 1 / 0 | 0 / 0 | ✅ EasyClaw v1.9.33 | ⚪ 低活跃：待响应 / 版本驱动静默迭代 |
| **IronClaw / TinyClaw / ZeptoClaw** | 0 | 0 | 无 | ⚪ 静默 |

---

## 3. OpenClaw 在生态中的定位

**社区规模**：单日 Issue/PR 更新 1000 条，约为第二名（Hermes/Zeroclaw，各 86–100 条）的 **10 倍**，为 NanoBot/NanoClaw 的 ~10–18 倍。热门 Issue 评论量（131 条）也是生态最高，属于事实上的生态标杆与需求风向标。

**优势**：
- **功能完备度最高**：多渠道（WhatsApp/Telegram/飞书/Android Talk）、Blobster 头像、doctor 诊断、内存搜索插件化，覆盖面无对手；
- **性能优化主线清晰**：今日 5 条 perf PR（SQLite 读队列隔离、广播帧压缩复用）直击最热痛点；
- **生态外溢效应**：NullClaw 以"OpenClaw parity"为目标，LobsterAI 直接内嵌 OpenClaw 运行时（其 17GB 磁盘膨胀问题即源于 OpenClaw 修复备份），PicoClaw/NanoClaw 的 skill 概念同源。

**劣势与风险**：
- **系统性技术债务最重**：SQLite 并发架构（#143524/#164294/#172091 三个切面）、Windows 启动回归（4 个 P0）、SSD 磨损（#157989）构成三大债务群，且最热的 P0 WAL 膨胀 1 个月无 fix PR；
- **信任消耗**：#151962（内部字符串被当作用户 prompt 提交）此类透明度问题对个人助手产品是根本性伤害；
- 相比之下，NanoBot/Zeroclaw 等中型项目 Bug 闭环速度（当日 4/4、9/27 关闭）显著更快。

**技术路线差异**：OpenClaw 走“全功能单体网关”，Hermes 走“统一网关后向多 profile 生产化演进”，Zeroclaw 走“网关分离（v0.9.0）+ WASM 插件沙箱”，NanoClaw 走“provider skill payload 化的轻量解耦”，路线分化明显。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **SQLite 并发/存储可靠性** | OpenClaw（WAL 膨胀 #143524、reader 钉住 checkpoint #164294）、NanoClaw（#3811 busy_timeout 缺失）、CoPaw（#8228 tool_result 存 base64 致 10MB 记录） | 读写分离、checkpoint 策略、锁竞争可观测——本地优先架构的共性瓶颈 |
| **消息投递可靠性（防丢失/防重复/可取消）** | OpenClaw（#112259 静默丢弃、#111897 重复回复）、Zeroclaw（#11760 Email 重复回复、#5836 协作式取消）、NullClaw（#1074 poller 卡死、#1068 /stop 不生效）、Hermes（#115010 持久队列）、PicoClaw（QQ 主动消息失效） | 死信队列、幂等去重、退避重试、turn 中断，几乎是所有渠道型项目的头号诉求 |
| **上下文/记忆管理** | NanoBot（#5402 压缩永不触发、#6265 thinking 累积）、Zeroclaw（#11655 记忆软隐藏、#11657 整合分类）、NanoClaw（#2420 hindsight 记忆）、CoPaw（ReMe watcher）、OpenClaw（#143017 prompt-cache 浪费 21.3M token） | 真实 usage 驱动压缩、记忆年龄/可信度标注、临时上下文不持久化 |
| **崩溃恢复与运行时身份** | NanoBot（#6262 工具批次 checkpoint）、Hermes（#140189 无限重试）、OpenClaw（#175033 遗留 subagent） | 工具执行幂等、checkpoint 边界、单调时钟（OpenClaw #175040） |
| **磁盘/资源治理** | LobsterAI（#2893 17GB 膨胀）、OpenClaw（#157989 每次 CLI 写 1.4GB）、CoPaw（#8279 线程耗尽）、Hermes（cron 空会话膨胀 #140222/#140273） | 长驻 7×24 运行下的存储配额、进程卫生、资源上限 |
| **安全与凭据** | Zeroclaw（#11796 S0 凭据提示）、LobsterAI（#2851 硬编码密码）、OpenClaw（#76493 SecretRef）、Hermes（#139716 FloorVault） | 凭据托管、导出加密、MCP env 安全注入 |
| **Windows/移动端平台质量** | OpenClaw（4 个 Windows P0）、Hermes（ACL/启动挂起）、PicoClaw（Android DNS）、LobsterAI（截图裁剪） | 各项目一致的二等公民问题 |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes | Zeroclaw | NanoBot/NanoClaw | LobsterAI/CoPaw | PicoClaw/NullClaw |
|---|---|---|---|---|---|---|
| **功能侧重** | 全功能个人助手（网关+多渠道+Talk 语音+头像） | 多 profile 企业级网关、本地推理（llama.cpp/Nemotron） | 安全沙箱、协作式取消、ADR 治理、成本上限 | 轻量 CLI/WebUI 助手、checkpoint 恢复、skill payload | 桌面陪伴产品（翻译/截图/朗读）、Console 插件化 | 渠道深耕（QQ 生态 / Slack+Telegram） |
| **目标用户** | 重度个人用户（全平台） | 技术型/自托管企业用户 | 安全敏感运维者 | 开发者/极简用户 | 中文桌面/团队用户 | QQ 用户 / OpenAI 兼容网关用户 |
| **架构关键** | 单体网关 + SQLite 状态机 | 统一网关多路复用 + peer 投递 | 网关分离 + WASM 插件 + 二进制体积门禁（64MiB） | provider/记忆插件化解耦 | 集成内置（LobsterAI 内嵌 OpenClaw） | 从零自研通道（脱离官方 SDK） |

关键观察：**Hermes 主打本地推理与多租户，Zeroclaw 主打安全合规（唯一有 ADR、sandbox policy、S0 分级体系），中文系（LobsterAI/CoPaw/PicoClaw）聚焦产品化体验与本土渠道（钉钉/QQ/网易有道模型预设）**，形成与 OpenClaw 的互补而非正面竞争。

---

## 6. 社区热度与成熟度分层

- **快速迭代期（功能扩张 + 回归高发）**：OpenClaw（功能最全但 P0 积压）、Hermes（大合并后修复洪峰，Issue 关闭比仅 4/46）、CoPaw（v2.3.0 插件化重构启动，v2.2.2 崩溃回归）
- **质量巩固期（收尾/闭环为主）**：Zeroclaw（v0.8.6 Phase 2 收尾，节奏健康）、NanoBot（零新增 bug、集中闭环历史问题）、NanoClaw（架构收敛、批量清理 16 Issue）、LobsterAI（发版冲刺完成，进入补丁阶段）
- **贡献驱动/低活跃期**：NullClaw（单人贡献等审阅）、PicoClaw（QQ 专项推进但响应慢）、Moltis/EasyClaw（静默）
- **休眠**：IronClaw、TinyClaw、ZeptoClaw

成熟度信号：Issue 关闭率是有效指标——NanoClaw（16/17）、NanoBot（4/4）、Zeroclaw（9/36）显著优于 Hermes（4/50）与 OpenClaw（124/500 但基数大，比例尚可）。

---

## 7. 值得关注的趋势信号

1. **“OpenClaw 生态化”正在形成**：NullClaw 明确 parity、LobsterAI 内嵌运行时、NanoClaw 采用 skill 概念——OpenClaw 的架构正成为事实标准，但其 SQLite/Windows 债务也会沿依赖链传导（LobsterAI 17GB 问题即为例证）。
2. **本地优先存储是行业性软肋**：至少 4 个项目同时暴露 SQLite 并发/膨胀问题。对开发者的启示：**读写分离、WAL 策略、busy_timeout、大 blob 外置应作为智能体框架的一等设计约束，而非事后修复**。
3. **消息可靠性需求从“能收到”升级为“可审计”**：死信队列、幂等去重、退避重试、取消语义在生态中集中涌现——渠道型智能体的下一条质量分水岭。
4. **上下文管理从估算走向实测**：NanoBot 弃用 tiktoken 估算改 API 真实 usage、OpenClaw 暴露 21.3M token 缓存浪费——成本敏感时代，“token 可观测性”将成标配。
5. **安全与凭据治理升温**：S0 凭据提示（Zeroclaw）、硬编码密码（LobsterAI）、SecretRef（OpenClaw）、FloorVault（Hermes）四例同现，个人助手掌握越来越多凭据后，密钥托管与最小权限成为必答题。
6. **中文渠道生态自成一支**：QQ（PicoClaw 自研通道对抗平台限制）、钉钉分片降级（CoPaw）、飞书（OpenClaw/Hermes）——平台 API 政策变动（如 QQ 关闭主动消息）正倒逼自研与解耦。
7. **维护者带宽是中型项目最大风险**：NullClaw 17 PR 零审阅、NanoBot/NanoClaw 各 30+ PR 积压、PicoClaw 贡献流失——对开发者的建议是：**贡献前评估项目 review SLA，优先选择响应闭环快的仓库（Zeroclaw/CoPaw/NanoBot）**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-10-17

## 1. 今日速览

NanoBot（[HKUDS/nanobot](https://github.com/HKUDS/nanobot)）今日整体活跃度**中高**：过去 24 小时 PR 活动达 56 条（31 个待合并、25 个已合并/关闭），Issues 4 条全部关闭，无新增 Bug 报告。维护团队（@hazelxue、@Muzhen2000 等高频贡献者）明显在推进一轮**稳定性与运行时可靠性攻坚**，今日集中关闭了多个存在数周的历史 Bug。待合并队列积压 31 个 PR（含多个 conflict 标记），合并吞吐压力较大，无新版本发布。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭约 25 个 PR，重点包括：

- **[#6260](https://github.com/HKUDS/nanobot/pull/6260)（P1，已关闭）**：修复 token consolidation 仅依赖 tiktoken 估算、从不触发压缩的核心问题，改为基于 API 上报的真实 usage 触发。对应长期挂起的 Issue #5402，是今日最重要的上下文管理修复。
- **[#6237](https://github.com/HKUDS/nanobot/pull/6237) / [#6259](https://github.com/HKUDS/nanobot/pull/6259)**：两步修复 WebUI sidebar 状态在更新后丢失的问题（服务端 + 客户端），#6237 已合并，#6259 为后续加固，仍在开放。
- **[#5979](https://github.com/HKUDS/nanobot/pull/5979)**：模型选择器隐藏已过 OpenAI `shutdown_date` 的退役模型，修复用户选到已下线模型导致会话报错的问题。

新开启的重要 PR（待审）：
- **[#6262](https://github.com/HKUDS/nanobot/pull/6262)**：在工具执行批次边界写入 checkpoint，修复崩溃恢复后重复执行已完成工具的问题——运行时可靠性的关键改进。
- **[#6265](https://github.com/HKUDS/nanobot/pull/6265)**：仅对当前轮次回放 reasoning 内容，避免历史 thinking 块无限累积。
- **[#6263](https://github.com/HKUDS/nanobot/pull/6263)**：向工具暴露当前工具调用身份（`tool_call_id`）。
- **[#6264](https://github.com/HKUDS/nanobot/pull/6264)**：将 provider 重试等待通知送达 channel 层，用户可见。
- **[#6261](https://github.com/HKUDS/nanobot/pull/6261)**：统一实例存储到 home 目录，含 Sigstore 发布审批硬化的更新机制（另见 [#6168](https://github.com/HKUDS/nanobot/pull/6168)）。

**评估**：今日修复集中在上下文管理、崩溃恢复、WebUI 状态持久化三大方向，项目稳定性显著向前推进；一批运行时身份/checkpoint PR 若合入，将为后续版本的多工具并发可靠性打下基础。

## 4. 社区热点

- **[#5402](https://github.com/HKUDS/nanobot/issues/5402)（3 评论，今日关闭）**：tiktoken 低估导致压缩永不触发的经典痛点，两个月后随 #6260 落地修复，社区关注度最高。
- **[#6008](https://github.com/HKUDS/nanobot/issues/6008)**：sidebar 状态静默回退默认值、更新后数据被清空——用户对“静默失败”强烈不满，催生了 #6237/#6259/#6009 三层修复。
- **[#6168](https://github.com/HKUDS/nanobot/pull/6168)**：托管安装与应用内可恢复更新 + Sigstore 审批门，讨论持续到今日，反映社区对更新安全性的高期待。

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | Fix PR |
|---|---|---|---|
| P1 | [#5402](https://github.com/HKUDS/nanobot/issues/5402) 上下文压缩永不触发 | ✅ 已关闭 | #6260（已合并） |
| P2 | [#6008](https://github.com/HKUDS/nanobot/issues/6008) WebUI sidebar 状态丢失 | ✅ 已关闭 | #6237（已合并）+ #6259（待合并） |
| P2 | [#5977](https://github.com/HKUDS/nanobot/issues/5977) 列出已下线的 OpenAI 模型 | ✅ 已关闭 | #5979（已合并） |
| P2 | [#6192](https://github.com/HKUDS/nanobot/issues/6192) AutoCompact 每 1s 空闲 tick 全量扫描会话文件（性能） | ✅ 已关闭 | 未见对应 PR 明示 |

今日**零新增 Bug 报告**，且 4 条历史 Bug 全部闭环，稳定性趋势向好。

## 6. 功能请求与路线图信号

- **技能记忆层**（[#1651](https://github.com/HKUDS/nanobot/pull/1651)，3 月起开放）+ **缺失 role 的记忆归档测试**（[#4812](https://github.com/HKUDS/nanobot/pull/4812)）：长期记忆/技能沉淀方向持续投入，可能进入下一版本。
- **Ephemeral runtime-context**（[#5659](https://github.com/HKUDS/nanobot/pull/5659)、[#5627](https://github.com/HKUDS/nanobot/pull/5627) 双 PR 竞争实现）：允许临时上下文不持久化，需求明确（#5586），大概率被采纳其一。
- **FTS5 会话全文搜索**（[#5826](https://github.com/HKUDS/nanobot/pull/5826)）：性能特性，多会话用户刚需。
- **工具调用熔断 + JSON 参数校验**（[#5169](https://github.com/HKUDS/nanobot/pull/5169)，P1）：防止模型重试死循环，与今日 checkpoint 方向互补，合入优先级应高。
- **托管安装/安全更新**（#6168、#6261）：桌面级分发体验信号明显。

## 7. 用户反馈摘要

- **痛点：上下文管理不透明**——用户发现长会话 token 一直涨却从不压缩（#5402），说明估算与真实用量脱节影响重度用户。
- **痛点：静默失败**——WebUI 状态读取失败无任何报错、直接回退默认值（#6008），用户对“数据悄悄丢失”容忍度极低。
- **痛点：模型列表与真实可用性脱节**——Telegram 用户选到已下线模型后回合直接失败（#5977），反映多渠道（Telegram/WebUI）实际使用场景中配置体验粗糙。
- **满意度信号**：多个 Issue 修复后快速关闭、有详细根因分析评论（如 #6008 #issuecomment），用户对维护者响应质量的互动反馈正面。

## 8. 待处理积压

以下 PR 长期开放且带 `conflict` 标记，建议维护者优先处理或明确取舍：

- **[#1651](https://github.com/HKUDS/nanobot/pull/1651)**（3 月起，7 个月，技能记忆层）— 长期悬置，与 #4812 的记忆方向相关，需决策架构。
- **[#5169](https://github.com/HKUDS/nanobot/pull/5169)**（7 月起，P1 熔断修复）— P1 级别久拖不合，风险高。
- **[#5801](https://github.com/HKUDS/nanobot/pull/5801) / [#6033](https://github.com/HKUDS/nanobot/pull/6033)**（checkpoint/sidecar 保留，两个相似修复）— 与今日 #6262 存在范围重叠，应合并协调，避免重复实现。
- **[#5659](https://github.com/HKUDS/nanobot/pull/5659) vs [#5627](https://github.com/HKUDS/nanobot/pull/5627)**（ephemeral context 双实现）— 应尽早二选一。
- **[#5880](https://github.com/HKUDS/nanobot/pull/5880)**（压缩后超大文件读取恢复）、**[#5846](https://github.com/HKUDS/nanobot/pull/5846)**（BUILD 子阶段延迟追踪）— 均近月未决。

**健康度小结**：Bug 响应闭环速度优秀（今日 4/4 关闭），但 PR 队列积压 31 个、多个冲突/重复实现待裁决，code review 与合并吞吐是当前主要瓶颈。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-10-17

---

## 1. 今日速览

Zeroclaw 今日保持高活跃度：过去 24 小时共 **86 条更新**（Issues 36 条：新开/活跃 27、关闭 9；PR 50 条：待合并 32、已合并/关闭 18），无新版本发布。核心开发继续围绕 **v0.8.6（Phase 2 运行时）** 与 **v0.9.0（网关分离）** 两条主线推进（[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)），今日合并了多项运行时与 ZeroCode 配置体验改进。同时社区侧出现一个 **S0 级安全回归报告**（daemon 启动时提示 GitHub 凭据，[#11796](https://github.com/zeroclaw-labs/zeroclaw/issues/11796)），值得维护者优先跟进。

---

## 2. 版本发布

今日无新版本发布。当前发布轨道：**v0.8.6** 与 **v0.9.0**（见 tracker #7432）。注意 v0.8.6 存在一个发布门禁待决事项：x86_64 Linux 二进制仅低于 64 MiB 上限约 0.7 MB（~1%），需决定是否调整上限或记录余量政策（[#11580](https://github.com/zeroclaw-labs/zeroclaw/issues/11580)，P1）。

---

## 3. 项目进展

今日关闭/合并的 18 个 PR 中，较重要的包括：

- **PR [#11725](https://github.com/zeroclaw-labs/zeroclaw/pull/11725)（已关闭）**：修复 `session/steer` 中途转向消息只能在最终回答后才送达（或随取消丢失）的问题——交互式 agent 体验的重要修正。
- **PR [#11506](https://github.com/zeroclaw-labs/zeroclaw/pull/11506) + [#11466](https://github.com/zeroclaw-labs/zeroclaw/pull/11466)（已合并）**：ZeroCode Config 显示"已保存 vs 已应用”状态，并报告每个 config 目标的应用结果。配套 Issue #11491/#11488 今日同步关闭，完成一项配置可观测性闭环。
- **PR [#11460](https://github.com/zeroclaw-labs/zeroclaw/pull/11460)（已合并）**：ZeroCode 中支持 provider 别名重命名。
- **PR [#10567](https://github.com/zeroclaw-labs/zeroclaw/pull/10567)（已合并）**：记忆召回条目附带存储日期（`- [from YYYY-MM-DD]`），为模型提供记忆年龄上下文；配套文档豁免提案 #11732 也已关闭。
- **PR [#11791](https://github.com/zeroclaw-labs/zeroclaw/pull/11791)（已关闭）**：记录 ADR-016 `file_read` 模式白名单例外，为 #11592 的文件读取安全门禁铺路。

配套关闭的 Issues 包括：#11606（model_routing_config 整体重写配置的严重 bug）、#11519（workspace split 后插件不可见的 S1 问题）、#5836（工具执行协作式取消）、#10577（单工具 provider 轮次）、#10770/#10761/#11359（插件安装恢复、TLS 加固、Windows 目录 pin）等。**整体判断：v0.8.6 的 Phase 2 收尾明显加速，运行时安全与插件系统多项高风险项今日落地。**

---

## 4. 社区热点

- **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)（8 评论）**：v0.8.6/v0.9.0 总 tracker，持续是社区关注焦点，讨论交付排序与遗留缺口。
- **[#5836](https://github.com/zeroclaw-labs/zeroclaw/issues/5836)（4 评论，今日关闭）**：工具执行契约增加协作式取消——长时运行工具（shell/HTTP）无法被取消的痛点今日随关闭画上句号。
- **[#11655](https://github.com/zeroclaw-labs/zeroclaw/issues/11655)（4 评论）**：默认配置（无 embedding）下，Core 冲突 supersede 会软隐藏无关记忆——用户对记忆子系统默认行为可靠性的持续担忧。
- **[#11796](https://github.com/zeroclaw-labs/zeroclaw/issues/11796)（1 评论，但 S0）**：daemon 突然在启动时提示 GitHub 凭据并阻塞，用户判断为“今日突发的回归”，情绪紧张。
- **[@RustLangLatam](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) 系列报告**（#11257、#11758、#11760、#11761、#11764、#11769、#11773）：一名活跃贡献者集中报告 WhatsApp/Email 渠道与 i18n 缺陷，是当前渠道质量的主要反馈源。

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| **S0** | [#11796](https://github.com/zeroclaw-labs/zeroclaw/issues/11796) | daemon 启动提示 GitHub 凭据并阻塞，疑似当日回归，潜在安全风险 | ❗ 尚无 fix PR，**需立即排查**（可能与自动更新/git 操作相关） |
| **S1** | [#11777](https://github.com/zeroclaw-labs/zeroclaw/issues/11777) | 循环检测默认阈值过低，`file_write`+`shell` 交替 6 轮即熔断，阻断大型任务 | 无 fix PR |
| **S2** | [#11655](https://github.com/zeroclaw-labs/zeroclaw/issues/11655) | 默认配置下 Core 记忆被无关冲突软隐藏 | 无 |
| **S2** | [#11760](https://github.com/zeroclaw-labs/zeroclaw/issues/11760) / [#11761](https://github.com/zeroclaw-labs/zeroclaw/issues/11761) | Email 渠道重启后重复回复邮件（未设 \Seen）；IDLE 期间新邮件延迟最多 29 分钟 | 无 |
| **S2** | [#11773](https://github.com/zeroclaw-labs/zeroclaw/issues/11773) | fr_FR/es_ES/ja_JP 等带区域 locale 回退到英文 | 无 |
| **S2** | [#11257](https://github.com/zeroclaw-labs/zeroclaw/issues/11257)（P1，accepted） | WhatsApp Web 丢弃入站媒体 caption | 相关 PR [#11259](https://github.com/zeroclaw-labs/zeroclaw/pull/11259) 在审 |
| **S3** | [#11758](https://github.com/zeroclaw-labs/zeroclaw/issues/11758)、[#11764](https://github.com/zeroclaw-labs/zeroclaw/issues/11764)、[#11783](https://github.com/zeroclaw-labs/zeroclaw/issues/11783)、[#11771](https://github.com/zeroclaw-labs/zeroclaw/issues/11771)、[#11710](https://github.com/zeroclaw-labs/zeroclaw/issues/11710) | QR 残留打印、语音笔记静默丢弃、Alpine 镜像构建失败、bootstrap 文件 cap 不一致、截断文件提示自相矛盾 | 多数无 fix |

---

## 6. 功能请求与路线图信号

- **[#11657](https://github.com/zeroclaw-labs/zeroclaw/issues/11657)**：可配置每轮记忆整合的目标分类（`[memory] consolidation_category`）——与 #11655 同源，是对记忆子系统灵活性的诉求，可能进入后续版本。
- **[#11799](https://github.com/zeroclaw-labs/zeroclaw/issues/11799)**（今日新开）：shell 策略拒绝时应说明拒绝规则并支持操作员提示——延续项目在安全策略可解释性上的方向（与已合并的 #7821 sandbox_policy 思路一致），采纳概率较高。
- **[#10994](https://github.com/zeroclaw-labs/zeroclaw/issues/10994)**：WASM 插件运行时正式发布工件仍是 v0.8.6 关键缺口。
- 待合并大 PR 显示的下一版本信号：**成本上限操作员覆盖**（[#11589](https://github.com/zeroclaw-labs/zeroclaw/pull/11589)）、**子 agent 指定模型路由**（[#11577](https://github.com/zeroclaw-labs/zeroclaw/pull/11577)）、**Telegram 429 洪水闸门**（[#11651](https://github.com/zeroclaw-labs/zeroclaw/pull/11651)）、**Gemini 语音对语音渠道**（[#10430](https://github.com/zeroclaw-labs/zeroclaw/pull/10430)）。

---

## 7. 用户反馈摘要

- **生产部署受阻**：#11777 用户因循环检测熔断无法执行大图任务，"agent 什么都做不了"——安全护栏与实际工作负载之间的调参矛盾是突出痛点。
- **记忆不可信感**：#11655 用户发现默认配置下记忆"悄悄消失"，反映对记忆子系统透明度的担忧。
- **凭据安全焦虑**：#11796 用户对 daemon 突然索要 GitHub 凭据感到警觉，期望启动过程不涉及交互式凭据提示。
- **渠道运维痛点**（@RustLangLatam 系列）：Email 重复回复可能造成对外骚扰、WhatsApp 媒体上下文丢失——多渠道用户对消息可靠性要求高。
- **正面信号**：#11589（成本上限覆盖）、#11725（中途转向）等改进直接回应用户长期诉求，今日合并获得好评。

---

## 8. 待处理积压

- **[#11580](https://github.com/zeroclaw-labs/zeroclaw/issues/11580)（P1，needs-maintainer-review）**：v0.8.6 发布二进 制大小门禁决策，**直接阻塞发布**，需维护者拍板。
- **[#11796](https://github.com/zeroclaw-labs/zeroclaw/issues/11796)（S0）**：今日新开，尚无人认领。
- **[#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391)（XL，needs-author-action，8 月底起）**：bounded delegate 约束持久化修复，长期挂在 review 状态。
- **[#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821)（6 月中旬起，needs-author-action）**：sandbox_policy 规范化大 PR，存在时间最长。
- **[#10499](https://github.com/zeroclaw-labs/zeroclaw/pull/10499)、[#11301](https://github.com/zeroclaw-labs/zeroclaw/pull/11301)、[#10430](https://github.com/zeroclaw-labs/zeroclaw/pull/10430)**：均 needs-author-action 的 XL 级 PR，需作者 rebase/回应。
- **[#10779](https://github.com/zeroclaw-labs/zeroclaw/issues/10779)**：429 配额耗尽仍亚秒级重试，9 月中旬报告，仍开放。

---

**健康度小结**：项目处于活跃迭代期，v0.8.6 收尾动能强、issue 关闭节奏健康（今日 9 closed/27 open）。风险点集中在：S0 回归 #11796 的响应速度、发布门禁 #11580 的决策，以及渠道子系统（Email/WhatsApp）的缺陷密度偏高。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-10-17

## 1. 今日速览

今日项目处于**高活跃状态**：过去 24 小时 Issues 更新 50 条（新开/活跃 46，关闭仅 4），PR 更新 50 条（待合并 48，合并/关闭仅 2），无新版本发布。讨论焦点高度集中在 10 月 14 日合并的 **统一网关运行时（#106742）** 的后续修复工作上——P0 级追踪 Issue #134889 已积累 136 条评论，社区正围绕多 profile 会话归属、Desktop 稳定性和跨平台会话恢复等合并后回归问题密集排障。社区贡献流（Package 8 系列 PR）持续涌入，但合并速度明显滞后，积压风险上升。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日仅 2 个 PR 合并/关闭，整体合并吞吐偏低，但待合并管道内容丰富：

- **#140267**（teknium1）scratch 目录清理：增加活跃进程 cwd 保护，仅回收孤儿条目，完成 #132401 最后两项维护者要求。✅ 今日新开并 CI-reviewed
- **#140266**（teknium1）egress 代理现可访问 OpenAI us./eu. 数据驻留主机（移植自 centaur#1960）
- **统一网关后续修复 "Package 8" 系列**（unsupportedpastels，今日密集提交）：
  - [#140230](https://github.com/NousResearch/hermes-agent/pull/140230) 网关 owner/存储/控制路径静默失败补日志
  - [#140225](https://github.com/NousResearch/hermes-agent/pull/140225) Desktop 会话列表显示修复（RT-34）
  - [#140250](https://github.com/NousResearch/hermes-agent/pull/140250) **多 profile 网关内存隔离安全修复（PLG-11）**——内存服务仅向初始化它的 profile 提供
- **#140273** 排除 cron 运行对默认会话列表的污染（真实场景：5 分钟 cron 产生 16,480 行、占 88% 会话表）
- **#140264** 修复 /branch 会话丢失启动密钥的问题
- **#140274** 修复 Python <3.14 上 snowballstemmer 无条件导入崩溃

## 4. 社区热点

| 议题 | 评论 | 热点分析 |
|---|---|---|
| [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) 统一网关合并后修复追踪（P0） | **136** | 全社区最热。#106742 合入 main 后，"单一网关拥有所有本地会话” 引发大量桌面/TUI/cron 各表面回归，衍生出 Package 8 修复包与多条 lane |
| [#103410](https://github.com/NousResearch/hermes-agent/issues/103410) TUI 热重载在外部上下文引擎（LCMEngine）上崩溃 | 18 | 外部引擎用户升级受阻，诉求是兼容第三方 context engine |
| [#124583](https://github.com/NousResearch/hermes-agent/issues/124583) terminal 工具后台提示引用不存在的 process 工具名 | 18 | 文档级小错但高频踩坑，操作者按提示调用直接 tool-not-found |
| [#121095](https://github.com/NousResearch/hermes-agent/issues/121095) browser_exec 遗留僵尸 daemon 进程 | 16 | 无超时、永不退出，长期运行环境进程泄漏 |
| [#122424](https://github.com/NousResearch/hermes-agent/issues/122424) package.json 钉死 js-yaml CVE 版本 | 15 | 安全合规诉求，依赖升级受阻于上游兼容性 |
| [#101160](https://github.com/NousResearch/hermes-agent/issues/101160) Buzz relay 空闲 300s 被误判死亡重连（P1） | 13 | "沉默即死亡” 的判定逻辑在安静但健康的 relay 上产生确定性抖动 |

## 5. Bug 与稳定性（按严重度）

**P0**
- [#139662](https://github.com/NousResearch/hermes-agent/issues/139662)（今日新开）网关重启后，Discord/飞书/企业微信会话在 Desktop 无法 `session.resume`（not_found），确认为 #106742 的回归 fallout。**暂无 fix PR**
- [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) 统一网关追踪总 Issue，多个 lane 已有 PR（#140230/#140225/#140250）✅

**P1**
- [#136281](https://github.com/NousResearch/hermes-agent/issues/136281) 更新检查失败：`stable.json` 返回 404（上游 CDN 问题，cause/upstream）
- [#134415](https://github.com/NousResearch/hermes-agent/issues/134415) Desktop 助手回复整块重复渲染
- [#127822](https://github.com/NousResearch/hermes-agent/issues/127822) Windows 上未授权 shell hook 导致网关启动挂起并重启循环

**P2（今日新开为重点）**
- [#140224](https://github.com/NousResearch/hermes-agent/issues/140224)（今日）Desktop 语音对话卡在 "Preparing audio"，本地原生 speak-stream 连接被 403 拒绝。**无 fix PR**
- [#140252](https://github.com/NousResearch/hermes-agent/issues/140252)（今日）session-0 启动任务网关抢占控制管道导致 Desktop 无法启动。**无 fix PR**
- [#140222](https://github.com/NousResearch/hermes-agent/issues/140222)（今日）cron + monitor 每次未变更 tick 都产生空会话行，污染 state.db
- [#140192](https://github.com/NousResearch/hermes-agent/issues/140192) cron edit 打印 "Updated job" 但依赖同步失败后整体回滚
- [#140189](https://github.com/NousResearch/hermes-agent/issues/140189) 网关对不可达的进程完成通知每 5 秒无限重试，无退避无上限
- [#138974](https://github.com/NousResearch/hermes-agent/issues/138974) 升级破坏 `%LOCALAPPDATA%` 工具目录 ACL（Windows Access denied）

**P3**
- [#140177](https://github.com/NousResearch/hermes-agent/issues/140177) Bedrock 会话中 Claude→GPT 切换每轮失败（reasoningText 回放被拒）
- [#140239](https://github.com/NousResearch/hermes-agent/issues/140239) GLM-5.3 拒绝 `reasoning_effort=medium`（400/1210），未做 clamp

## 6. 功能请求与路线图信号

- **本地推理升级**：[#139703](https://github.com/NousResearch/hermes-agent/pull/139703) llama.cpp b11671 + Nemotron 3.5 Bolt + DFlash 推测解码，信号明确：本地模型运行时是重点投入方向
- **多 profile 企业部署**：[#139417](https://github.com/NousResearch/hermes-agent/issues/139417) 10-profile/10-token 单主机部署实测报告 + #140250 的隔离修复，表明多路复用网关正朝生产化推进
- **Peer 可靠投递**：[#115010](https://github.com/NousResearch/hermes-agent/pull/115010)（Layer 3/4：busy receipt、持久队列、内容去重）— 跨节点消息可靠性路线图
- **安全存储**：[#139716](https://github.com/NousResearch/hermes-agent/pull/139716) FloorVault（AES-256-SIV）可选密钥托管，标记 needs-decision，待维护者表态
- **插件 API 扩展**：[#140251](https://github.com/NousResearch/hermes-agent/issues/140251)（今日）请求 subagent API 暴露 per-launch reasoning effort；#67941（已关闭）插件平台自定义 target 格式
- **OpenRouter :nitro/:floor 支持**：[#139557](https://github.com/NousResearch/hermes-agent/issues/139557) 模型变体快捷选择
- **长尾需求**：#40769 Desktop 分组选择器、#117555 进程完成唤醒预算上限、#122426 安全加固五项建议

## 7. 用户反馈摘要

- **痛点集中于 0.22 升级路径**：Windows 用户 ACL 失效（#138974）、网关启动挂起（#127822）、更新检查 404（#136281）叠加，Windows 平台升级体验显著恶化，多个 Issue 被 sweeper 标记 `risk-platform-windows`
- **多 profile / 多平台重度用户**（Discord/Slack/飞书/企微）受 #106742 回归影响最深：会话不可恢复（#139662）、Slack/Discord slash 命令丢失 channel prompt（#128720/#128796，已关闭）
- **长驻运行环境**反馈进程卫生问题：浏览器僵尸进程（#121095）、无限重试通知（#140189）、cron 空会话膨胀（#140222）——反映出 Hermes 被用作 7×24 服务时的运维痛点
- **正面信号**：Package 8 贡献节奏快、修复 lane 划分清晰；社区 PR 覆盖面广（Windows selector loop、依赖兼容、安全隔离均有外部贡献）

## 8. 待处理积压

- **合并吞吐告警**：48 个 PR 待合并 vs 今日仅 2 个合并/关闭，[#137348](https://github.com/NousResearch/hermes-agent/pull/137348) 因贡献者账号限制需维护者手动标记 ready——呼吁维护者清理
- **#139662（P0，昨日新开）**尚无对应 fix PR，与 #134889 同属会话丢失家族，建议优先
- **#136281 更新通道 404**：上游资源问题阻塞所有 stable 通道用户的更新检查，影响面大，需基础设施侧响应
- **陈旧高优先级**：#101160（P1，9/2 开，18 评论）、#103410（P2，9/5 开）、#124583（P2，9/27 开，修复成本极低）均长期悬置
- **needs-decision 冻结项**：#139716 FloorVault、#66163 Slack 命名空间前缀、#122426 安全加固——等待维护者决策方向

**健康度小结**：社区活跃度高、贡献管道充足，但统一网关大合并带来的回归修复压力与 PR 合并速度之间的剪刀差是当前最大风险。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-10-17）

## 1. 今日速览

PicoClaw 过去 24 小时整体活跃度**中等偏低**，共 2 条 Issue 更新（1 开 1 关）和 4 条 PR 更新（3 关闭、1 待合并），无新版本发布。今日亮点集中在 **QQ 生态**：两条 QQ 相关 PR 同日被处理（含一个自研 QQ C2C 通道的重大特性 PR 关闭），加上 QQBot 主动消息失效的历史 Issue 被关闭，显示维护者正集中清理 QQ 渠道相关积压。同时，两处标记 `[stale]` 的 Issue/PR 提示部分贡献正在流失，需要维护者关注社区响应速度。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日关闭 3 个 PR，项目在**渠道能力和定时任务正确性**上均有推进：

- **[PR #3440](https://github.com/sipeed/picoclaw/pull/3440)（已关闭）**：新增自研 QQ 单聊通道 `qq_c2c`，完全不依赖 `tencent-connect/botgo`，按 QQ 机器人 API v2 从零实现 Access Token 鉴权、WebSocket 网关、流式输出、按钮交互与 Markdown 指令面板。这是对 QQ 官方 SDK 依赖的重要解耦，注意状态为 CLOSED 而非 MERGED，建议关注是合入主分支还是被替代方案取代。
- **[PR #3441](https://github.com/sipeed/picoclaw/pull/3441)（已关闭）**：修复 cron 调度中 `schedule.TZ` 字段被 `computeNextRun` 完全忽略的问题，解决面板中定时任务时间“时区错乱”显示（如 12:01 显示为 04:01）。这是影响用户体验的实质性 bug 修复。
- **[PR #1349](https://github.com/sipeed/picoclaw/pull/1349)（已关闭）**：QQ 频道附件能力增强——支持解析表情结构、处理语音/图片/视频/文件消息、回复本地附件、Markdown 优先降级策略。该 PR 自 3 月创建至 10 月才关闭，属于长期积压的清理。

整体来看，QQ 渠道功能矩阵（频道 + 单聊）已趋于完整，定时任务的时区正确性得到保障。

## 4. 社区热点

- **[Issue #3420](https://github.com/sipeed/picoclaw/issues/3420)**（Open，1 条评论）：Android 官方构建中 pure-Go 二进制（CGO_ENABLED=0）DNS 解析失败（`dial udp 127.0.0.1:53: connection refused`），网关无法访问外部 API。该 Issue 已被标记 `[stale]`，但作为**影响 Android 用户开箱即用的阻断性问题**，被自动关闭风险较高，建议维护者优先介入。
- **[PR #3371](https://github.com/sipeed/picoclaw/pull/3371)**（Open，stale）：新增 `opencode-go` provider，含按模型 ID 自动路由和 `x-opencode-session` 会话头支持。反映用户对**模型 provider 扩展性**的强烈诉求，但 9 月提交后疑似缺乏维护者响应。

今日评论量整体偏低，无高热度讨论帖。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#3420](https://github.com/sipeed/picoclaw/issues/3420) Android 构建 DNS 解析失败，网关无法连 API | Open（stale） | 暂无 |
| 🟡 中 | [#3441](https://github.com/sipeed/picoclaw/pull/3441) cron 忽略 `schedule.TZ`，面板显示时区错乱 | 已关闭 | 即此 PR |
| 🟡 中 | [#166](https://github.com/sipeed/picoclaw/issues/166) QQBot 因 QQ 平台关闭主动消息能力（code 40034102）无法对话 | 已关闭 | 间接由 #3440 自研通道解决 |

其中 #3420 影响 Android 平台可用性且尚无修复 PR，是最需要关注的稳定性风险。

## 6. 功能请求与路线图信号

- **QQ 生态深化**：#1349（频道附件）与 #3440（自研 C2C 通道）相继处理，叠加 #166 揭示的 QQ 平台 API 变更，可判断**QQ 渠道的自主可控重构是当前明确的路线方向**，下一版本大概率包含 QQ 单聊/频道能力的完整更新。
- **Provider 扩展**：#3371 的 opencode-go provider 显示社区希望 PicoClaw 支持更多新兴 LLM 端点；若维护者重新激活该 stale PR，有望进入下版本。
- **移动端可用性**：#3420 隐含诉求是“pure-Go 静态构建在 Android 上开箱即用”，未来可能推动构建链调整（如启用 Go 纯 Go DNS resolver）。

## 7. 用户反馈摘要

- **Android 用户**：官方 Android 包存在网络层硬伤（DNS 解析失败），导致网关完全不可用——对移动端部署场景是阻断性痛点。
- **QQ 用户**：QQ 开放平台 2026 年初关闭主动消息发送能力，使 QQBot 单向失效（错误码 40034102 “主动消息失败， 无权限”），用户被动等待官方通道适配；#3440 的被动回复 + 流式 + 按钮交互设计正是对此类平台限制的回应。
- **面板/CLI 用户**：定时任务时区显示不一致造成困惑，#3441 修复后体验将改善，说明面板用户对时间展示精度有实际依赖（如值班提醒类场景）。

## 8. 待处理积压

- ⚠️ **[Issue #3420](https://github.com/sipeed/picoclaw/issues/3420)**：Android DNS 失败 bug，已 stale，无维护者回应，若被自动关闭将丢失关键 bug 报告。
- ⚠️ **[PR #3371](https://github.com/sipeed/picoclaw/pull/3371)**：opencode-go provider，创建超一个月未获 review，贡献者面临流失风险。
- ⚠️ **[PR #1349](https://github.com/sipeed/picoclaw/pull/1349)**：历时 7 个月才关闭，提示 PR review 周期过长，建议维护者明确贡献指南与响应 SLA。

**健康度小结**：功能开发（尤其 QQ 渠道）持续推进，但 stale 机制下两个高价值贡献处于流失边缘，社区响应速度是当前主要短板。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-10-17）

## 1. 今日速览

过去 24 小时 NanoClaw 呈现“高清理、高产出”的维护节奏：17 条 Issue 更新中 16 条被关闭（仅 1 条新开），50 条 PR 更新中 30 条待合并、20 条已合并/关闭，显示核心团队正在集中批量处理积压。核心开发者 @glifocat 单日贡献 10+ 个 PR，覆盖 CLI 修复、provider 架构重构（providers 分支迁移）、setup 体验优化等多个方向。无新版本发布。项目整体处于架构收敛期（provider 代码迁移至 skill payload），健康度良好但 PR 积压量（30 条待合并）值得注意。

## 2. 版本发布

今日无新版本发布。无。

## 3. 项目进展

今日活跃 PR 以 @glifocat 的一系列核心重构为主，标志着 **provider 架构重大迁移**接近完成：

- **[PR #4104](https://github.com/nanocoai/nanoclaw/pull/4104)**：`/add-codex` 改为从 skill payload 内置发布 Codex 运行时，不再从锁定的 `providers` 分支拉取——解决 fork 用户无法安装 Codex 的问题。
- **[PR #4107](https://github.com/nanocoai/nanoclaw/pull/4107)**：将 Cursor provider 迁移至 `main` 分支作为 `/add-cursor` skill，配套 [PR #4106](https://github.com/nanocoai/nanoclaw/pull/4106)（网关凭据可限定单一路径）和 [PR #4105](https://github.com/nanocoai/nanoclaw/pull/4105)（共享会话归档写入器）。
- **[PR #4109](https://github.com/nanocoai/nanoclaw/pull/4109)**：文档更新，明确 provider 代码现已全部随 skill payload 发布。
- **CLI 数据清理三部曲**：[PR #4103](https://github.com/nanocoai/nanoclaw/pull/4103)、[PR #4110](https://github.com/nanocoai/nanoclaw/pull/4110)（级联删除依赖行，修复外键约束失败）、[PR #4102](https://github.com/nanocoai/nanoclaw/pull/4102)（`/add-imessage` 移除流程修复）。
- **[PR #4108](https://github.com/nanocoai/nanoclaw/pull/4108)**：setup 首次对话检测放宽超时并展示阶段进度，改善本地模型首次安装体验。
- **[PR #3646](https://github.com/nanocoai/nanoclaw/pull/3646)（已关闭）**：`ABSOLUTE_CEILING_MS` 和 `CLAIM_STUCK_MS` 支持环境变量覆盖，配合关闭 Issue [#3643](https://github.com/nanocoai/nanoclaw/issues/3643)。
- **[PR #4010](https://github.com/nanocoai/nanoclaw/pull/4010)**：CI 自动化 agent 镜像 repin PR。

整体推进：CLI 可靠性、安装体验和 provider 解耦三个方向均有实质进展，providers 分支退役流程基本完成。

## 4. 社区热点

- **[Issue #3811](https://github.com/nanocoai/nanoclaw/issues/3811)（OPEN，今日唯一新开活跃）**：中心数据库未设置 `busy_timeout`，锁竞争被误报为数据库损坏。这是当前最值得关注的新问题，直接影响任务/调度/容器配置等核心状态存储的稳定性。
- **[Issue #2139](https://github.com/nanocoai/nanoclaw/issues/2139)**（3 条评论）：手机上传图片到记账软件场景中 API 400 报错，反映真实个人助理使用场景下的多模态稳定性诉求。
- **[PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752)**：Discord 附件（图片/粘贴文本）无法被 agent 读取的修复，长期待合并，是社区对消息通道完整性的典型痛点。
- **[PR #2136](https://github.com/nanocoai/nanoclaw/pull/2136)**：Google Gemini 原生 provider 支持，自 4 月底开放至今仍未合并，社区关注度较高。

## 5. Bug 与稳定性

按严重程度排列（今日被关闭的老问题基本已有对应修复）：

| 级别 | 问题 | 状态 |
|---|---|---|
| 高 | [#3811](https://github.com/nanocoai/nanoclaw/issues/3811) 中心 DB 无 busy_timeout，锁竞争抛异常如损坏 | **OPEN，无 fix PR，需关注** |
| 高 | [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) 本地模型长任务被 30 分钟硬上限冷杀 | 已关闭，修复见 [PR #3646](https://github.com/nanocoai/nanoclaw/pull/3646) |
| 高 | [#1103](https://github.com/nanocoai/nanoclaw/issues/1103) Apple Container 网络代理绑定错误 / [#1105](https://github.com/nanocoai/nanoclaw/issues/1105) GH_TOKEN 注入 | 已关闭 |
| 中 | [#2985](https://github.com/nanocoai/nanoclaw/issues/2985) opencode provider 长任务静默无回复 | 已关闭 |
| 中 | [#1236](https://github.com/nanocoai/nanoclaw/issues/1236) agent-runner 源码更新不同步到已存在 groups | 已关闭 |
| 中 | [#1210](https://github.com/nanocoai/nanoclaw/issues/1210) 阿里百炼代理 Claude 模型需手动映射 | 已关闭 |
| 中 | [PR #3849](https://github.com/nanocoai/nanoclaw/pull/3849) Gemini 严格回合顺序导致历史序列化失败 | OPEN，修复 PR 待合并 |

## 6. 功能请求与路线图信号

- **[Issue #1547](https://github.com/nanocoai/nanoclaw/issues/1547)（已关闭）**：基于 Playwright 的 YouTube 观看历史搜索工具——个人记忆/助理场景的信号。
- **[Issue #1116](https://github.com/nanocoai/nanoclaw/issues/1116)（已关闭）**：非 agentic 容器化安装（Docker 镜像发布）——安全敏感用户诉求，可能推动官方镜像分发。
- **[PR #2420](https://github.com/nanocoai/nanoclaw/pull/2420)**：`/add-hindsight` 长期记忆 MCP 集成，待合并，是“个人 AI 助理记忆能力”路线的明确信号。
- **[PR #2136](https://github.com/nanocoai/nanoclaw/pull/2136)**：Gemini 原生 provider，配合 provider payload 化重构落地后有望合并。
- 综合看，下一版本方向：**providers 全面 skill 化（Cursor/Codex 已完成）、CLI 数据清理健壮化、setup 体验、可选长期记忆**。

## 7. 用户反馈摘要

- **真实使用场景丰富**：手机拍照上传记账（#2139）、Telegram/Discord 双通道自动化编码（#1700）、会议录像处理（#1831）、Linux/Proxmox 部署（#1850）。
- **痛点集中在三处**：① 多模态/大文件处理的上限与静默失败；② macOS（Apple Container、Keychain）与 Linux（MITM 代理）环境差异导致配置问题；③ 本地/第三方模型（阿里百炼、OpenCode、Gemini）兼容性。
- **满意度总体正面**：多位用户表达"having lots of fun"、"crawl-walk-run"式的渐进式采用，说明产品上手体验良好；不满主要集中在代理/网络环境和 provider 兼容的长尾问题。

## 8. 待处理积压

- **[#3811](https://github.com/nanocoai/nanoclaw/issues/3811)**（9/14 提出，OPEN）：DB busy_timeout 问题，影响数据稳定性，**尚无任何修复 PR，建议维护者优先处理**。
- **[PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752)**（6/12 起）：Discord 附件修复，积压 4 个月。
- **[PR #2136](https://github.com/nanocoai/nanoclaw/pull/2136)**（4/29 起）：Gemini provider，积压近 6 个月。
- **[PR #2420](https://github.com/nanocoai/nanoclaw/pull/2420)**（5/11 起）：Hindsight 记忆 skill，积压 5 个月。
- **PR 积压总量 30 条待合并**，其中多个社区贡献的通道修复（WhatsApp：[#3752](https://github.com/nanocoai/nanoclaw/pull/3752)、[#3751](https://github.com/nanocoai/nanoclaw/pull/3751)、[#3859](https://github.com/nanocoai/nanoclaw/pull/3859)；Discord 代理：[#3923](https://github.com/nanocoai/nanoclaw/pull/3923)）长期无评审结论，存在贡献者流失风险。

---
*数据来源：GitHub API（nanocoai/nanoclaw），统计窗口 2026-10-16 至 2026-10-17。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 · 2026-10-17

## 1. 今日速览

NullClaw 今日无新版本发布，但社区贡献极为活跃：过去 24 小时内新增/更新 **17 个待合并 PR**（合并 0 个）和 **1 个新开跟踪 Issue**，全部来自贡献者 @wray-lee，并集中于一个统一跟踪 Issue [#1066](https://github.com/nullclaw/nullclaw/issues/1066)。这批 PR 是作者将 nullclaw 作为 Slack/Telegram 助手对接 OpenAI 兼容网关（DeepSeek、IFM K2）实战运行后发现的问题修复与功能增强，旨在与 OpenClaw 对齐能力。整体呈现"贡献洪峰 + 维护者审阅滞后"的状态，PR 积压值得关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日 **0 个 PR 被合并或关闭**，17 个 PR 全部处于 OPEN 待审状态，主要方向：

- **流式与推理可见性**：[#1071](https://github.com/nullclaw/nullclaw/pull/1071)（在 reasoning/CLI 流中隐藏文本工具调用）、[#1065](https://github.com/nullclaw/nullclaw/pull/1065)（/think 级别传递至 OpenAI 兼容模型）
- **通道 UX 增强**：[#1058](https://github.com/nullclaw/nullclaw/pull/1058)（Slack 出站回复流式生成）、[#1061](https://github.com/nullclaw/nullclaw/pull/1061)（Slack 任务生命周期 reaction）、[#1072](https://github.com/nullclaw/nullclaw/pull/1072)（Telegram Rich Messages）
- **稳定性加固**：[#1074](https://github.com/nullclaw/nullclaw/pull/1074)（通道网络 I/O 限时与 poller 监督非阻塞）、[#1069](https://github.com/nullclaw/nullclaw/pull/1069)（网关日志非阻塞化）

若这批 PR 合入，项目在多通道路由、推理控制、可靠性上将有显著跃升，但目前推进速度受制于审阅带宽。

## 4. 社区热点

- **[#1066 tracking: OpenClaw parity PRs for streaming, channel UX and provider reasoning](https://github.com/nullclaw/nullclaw/issues/1066)**（10-15 创建，10-16 更新，0 评论）——今日唯一新 Issue，汇总 #1057–#1065 等 PR，便于维护者统一审阅/关闭。诉求核心：以实际生产运行经验（Slack + Telegram + OpenAI 兼容网关）推动 nullclaw 功能与 OpenClaw 对齐。评论数为 0，说明维护者尚未回应。

## 5. Bug 与稳定性

按严重程度排列（均已有 fix PR，状态待合并）：

| 严重度 | 问题 | PR |
|---|---|---|
| 高 | 通道 poller 卡死导致 Telegram 停止推进、监督线程被挂起（实际事故） | [#1074](https://github.com/nullclaw/nullclaw/pull/1074) |
| 高 | stderr 写阻塞持锁可"park"整个 turn，网关日志全局锁问题 | [#1069](https://github.com/nullclaw/nullclaw/pull/1069) |
| 高 | 模型截断响应（finish_reason=length 等）产生残缺工具调用被执行 | [#1070](https://github.com/nullclaw/nullclaw/pull/1070) |
| 中 | `/stop` 仅在 Telegram 生效，网关路径排队无法中止运行中 turn | [#1068](https://github.com/nullclaw/nullclaw/pull/1068) |
| 中 | 模型以"我将执行 X"结尾但无工具调用，任务静默停滞 | [#1073](https://github.com/nullclaw/nullclaw/pull/1073) |
| 中 | IFM K2 要求多轮请求每个 assistant 消息带 thinking 字段，否则 400 | [#1064](https://github.com/nullclaw/nullclaw/pull/1064) |
| 中 | Telegram draft 缓冲无 turn 归属，并发消息互相覆盖 | [#1067](https://github.com/nullclaw/nullclaw/pull/1067) |
| 中 | Socket Mode 下 slash 命令信封被静默丢弃 | [#1075](https://github.com/nullclaw/nullclaw/pull/1075) |
| 低 | 流式推理/CLI 中泄露文本形式工具调用 | [#1071](https://github.com/nullclaw/nullclaw/pull/1071) |
| 低 | Telegram 流式草稿为纯文本，与最终 HTML 渲染不一致 | [#1062](https://github.com/nullclaw/nullclaw/pull/1062) |

## 6. 功能请求与路线图信号

来自 @wray-lee 的功能型 PR（可能构成下一版本主线）：

- **Slack 出站流式回复** [#1058](https://github.com/nullclaw/nullclaw/pull/1058)（+2044 行，改动最大）
- **Slack 任务生命周期 reactions** [#1061](https://github.com/nullclaw/nullclaw/pull/1061)
- **Telegram Rich Messages（Bot API 10.1，GFM 原生渲染）** [#1072](https://github.com/nullclaw/nullclaw/pull/1072)
- **按 agent 粒度的 autonomy/SecurityPolicy** [#1063](https://github.com/nullclaw/nullclaw/pull/1063)——安全架构增强，guest agent 可绑定单一聊天 peer
- **可配置 `agent.reasoning_mode` 默认值** [#1059](https://github.com/nullclaw/nullclaw/pull/1059)——注意与维护者 PR #1050 存在 config key 重叠，作者已给出合并方案
- **显式 `provider/model` 前缀路由** [#1060](https://github.com/nullclaw/nullclaw/pull/1060)

其中 #1063（安全）与 #1072（通道 UX）最可能被优先纳入，因补齐了与 OpenClaw 的能力差距。

## 7. 用户反馈摘要

- **使用场景**：将 nullclaw 部署为 Slack/Telegram 双通道个人助手，后端经 OpenAI 兼容网关接入 DeepSeek 与 IFM K2。
- **痛点**：多通道下 `/stop` 不可靠；推理内容/工具调用泄露到流式输出；OpenAI 兼容网关对 reasoning 字段的要求不统一导致 400；流式草稿与最终消息渲染不一致；poller 卡死等生产级可靠性问题。
- **正面信号**：作者对代码路径理解深入（如 `Session.mutex`、`draft_buffers`、`std.debug.lockStderr` 细节），说明 nullclaw 已被用于真实长期运行，且问题均可定位修复——产品核心可用性获得验证。

## 8. 待处理积压

- **[#1066](https://github.com/nullclaw/nullclaw/issues/1066)** 及其跟踪的 17 个 PR（#1057–#1075）**全部处于 0 评论、0 审阅状态**，维护者需尽快分诊，避免贡献者流失或 PR 冲突堆积（#1065 已 stack 于 #1064，注明合并后需 rebase）。
- **#1059 与维护者 PR #1050 的 config key 冲突**需要维护者裁决合并方案。
- 建议优先审阅高严重度稳定性 PR：#1074、#1069、#1070、#1068。

---
*数据来源：GitHub API（过去 24 小时）；链接均指向 nullclaw/nullclaw 仓库对应条目。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 📰 LobsterAI 项目动态日报 · 2026-10-17

## 1️⃣ 今日速览

LobsterAI 昨日完成 **v2026.10.16 正式发版**，并通过 `release/2026.10.13` 集成分支一次性合并 15 个 PR，是典型的“发版冲刺日”。本轮发布主打 **Desktop Companion（桌面陪伴助手）** 全家桶：翻译、朗读、快捷输入、截图捕获与任务跟进。社区侧活跃度平稳，Issues 关闭 4 条（含一个安全漏洞报告被快速处置），仅新增/活跃 1 条。整体节奏为“重合并、轻讨论”，主线开发由核心成员 @fisherdaddy、@Mind-Hand、@btc69m979y-dotcom 高密度驱动，项目健康度良好。

---

## 2️⃣ 版本发布

### 🚀 LobsterAI v2026.10.16（2026-10-16）

**✨ Highlights：**
- **Desktop Companion（桌面陪伴助手）**：全新常驻式助手界面，支持：
  - 划词翻译与朗读（含展开原文提示，见 PR #2890）
  - 快捷输入 / 快速捕获
  - 任务跟进与悬浮球交互
- **模型选择器重构（Presets）**：统一 `yd-fast`（快速）/ `yd-ultra`（旗舰）虚拟预设模型，支持持久会话绑定与账户级偏好（PR #2879、#2887）
- **Expert Plaza（专家广场）**：可配置化——注意本次发布中入口被临时隐藏（PR #2880，`ENABLE_EXPERT_PLAZA_UI = false`），仅保留目录与安装逻辑

**⚠️ 迁移注意：**
- 定时任务若使用 Fast/Flagship 预设，需升级到本版本以避免 unsupported-model 错误（修复见 PR #2889）
- 媒体埋点 schema 升级为 `schemaVersion=2`（PR #2886），分析侧需同步口径
- 无明显破坏性 API 变更，桌面端建议直接覆盖升级

---

## 3️⃣ 项目进展

今日关闭/合并 15 个 PR，核心推进三条线：

**🖥️ Desktop Companion 打磨（8 个 PR，占半数以上）：**
- #2888 修复任务气泡自动消失、跨屏定位、模型权限提示遮挡等交互问题
- #2883 修复面板闪烁与 Windows 截图预览裁剪偏移
- #2882 划词/翻译上下文以独立卡片形式带入新任务
- #2881 补齐桌面助手独立埋点体系
- #2890 修复“点击展开原文”提示误显示

**🤖 模型预设体系：**
- #2879 / #2887 统一虚拟预设路由，按轮次计费、会话关联、历史积分明细
- #2889 定时任务预设路由激活

**📊 其他：**
- #2884 账户级默认图片/视频生成模型（视频生成需逐次确认）
- #2885 侧栏能力菜单与资源库来源图标
- #2886 媒体漏斗与助手轮次归因埋点修正
- #2880 临时隐藏专家广场入口

**待合并：** #2893 限制 OpenClaw 修复备份与运行时缓存的磁盘占用（有用户实测目录膨胀至 **~17GB**），是发版后第一时间提出的稳定性补丁，建议优先 review。

---

## 4️⃣ 社区热点

| 条目 | 状态 | 热度信号 |
|---|---|---|
| [#2851 安全漏洞：Provider API Key 导出使用公开硬编码密码](https://github.com/netease-youdao/LobsterAI/issues/2851) | ✅ CLOSED | 安全敏感，3 天内处置 |
| [#2801 Nautilus agent harness 榜单邀收录](https://github.com/netease-youdao/LobsterAI/issues/2801) | CLOSED | 第三方评测机构主动邀请 LobsterAI 作为“国产代表位” |
| [#2839 网易有道双休口径询问](https://github.com/netease-youdao/LobsterAI/issues/2839) | CLOSED | 与项目代码无关的企业信息问询，被快速关闭 |

**分析：** #2851 是今日最值得关注的外部贡献——报告者指出导出功能用公开硬编码密码派生 AES-GCM 密钥，任何拿到导出文件的人都能解密。该 Issue 在 10-13 提出、10-16 关闭，响应速度值得肯定，但建议维护者发布安全公告确认修复版本。#2801 反映项目在 agent harness 生态中的受关注度（评测方标注 6.1k★）。

---

## 5️⃣ Bug 与稳定性（按严重程度）

1. **🔴 高 | #2893 磁盘占用失控**：长期运行后 `~/Library/Application Support/LobsterAI` 达 ~17GB，OpenClaw 修复备份与缓存只增不清。**已有 fix PR（#2893，OPEN）**，待合并。
2. **🔴 高（已处置）| #2851 API Key 导出加密可被轻易解密**：硬编码公钥密码 + PBKDF2 派生。Issue 已关闭，修复随版本落地（需确认）。
3. **🟡 中（已修复）| #2440 桌面端系统提示词重复注入**：4,425 字符与 AGENTS.md 托管区 78% 逐字重复，浪费上下文窗口。已于今日关闭。
4. **🟡 中（已修复）| #2889 定时任务虚拟模型未解析**导致 unsupported-model 报错，已随版发布。
5. **🟠 待观察 | #2395 无法安装/更新**（用户技能备份失败导致更新中断）：标记 stale 仍 OPEN，3 条评论，**尚无对应 fix PR**。

---

## 6️⃣ 功能请求与路线图信号

- **Expert Plaza 回归在即**：#2880 明确保留目录、安装与专家选择逻辑，“方便后续恢复开放”——预计下个版本以更完善形态重新上线。
- **Expert Plaza 可配置化**已写入 Release Highlights，与 #2880 的开关机制呼应，属于明确的路线图信号。
- **模型预设深化**：#2879/#2887 建立了虚拟模型 + 会话绑定架构，为后续更多预设档位（如成本敏感档）铺路。
- **磁盘治理**：#2893 若合并，将引入 LobsterAI 侧的存储配额机制，可能扩展为用户可配置的清理策略。

---

## 7️⃣ 用户反馈摘要

- **痛点：存储膨胀**（#2893 作者实测 17GB）——桌面端重用户最直接的不满，且该 PR 由核心成员亲自复现修复，说明内部也承认问题严重。
- **痛点：安装失败**（#2395）：更新时用户技能备份失败直接中断安装，且错误信息晦涩（指向 install-timing.log），已拖近 3 个月未解。
- **痛点：上下文浪费**（#2440）：技术型用户通过 trajectory.jsonl 精确定位重复注入，反映社区存在深度排查能力的用户群。
- **正面信号**：第三方评测机构将 LobsterAI 列为“国产代表位”候选，社区对其开源身份与 6.1k★ 的体量有认可度。

---

## 8️⃣ 待处理积压（提醒维护者）

| 条目 | 开放时长 | 建议 |
|---|---|---|
| [#2395 无法安装](https://github.com/netease-youdao/LobsterAI/issues/2395) | ~3 个月，stale | 安装阻断性问题，建议升级处理优先级或给出 workaround |
| [#2855 katex 0.16.47→0.19.0](https://github.com/netease-youdao/LobsterAI/pull/2855) | 4 天 | 跨 2 个大版本，需评估破坏性 |
| [#2858 mermaid 10→12.2.0](https://github.com/netease-youdao/LobsterAI/pull/2858) | 4 天 | 同上，大版本跳跃需回归渲染测试 |
| [#2461 eslint-plugin-react-hooks 5→7](https://github.com/netease-youdao/LobsterAI/pull/2461) | 2 个月+，stale | dependabot 积压，建议批量清理 |
| [#1181 隐藏 OpenClaw 主 Agent 会话](https://github.com/netease-youdao/LobsterAI/pull/1181) | 6 个月+，stale | 涉及 DB schema 变更，长期挂起，建议明确接受或关闭 |

---

**📈 健康度小结：** 发版执行力强（单日 15 PR 合入 + 版本发布），安全响应迅速；主要风险点为 stale 积压（6 个 OPEN PR/Issue 中 4 个 stale）与磁盘/安装类基础体验问题。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-10-17）

## 1. 今日速览

Moltis 项目过去 24 小时整体活跃度处于**低位**：仅 1 条新开 Issue，无 PR 更新、无 Release 发布。唯一的动态来自用户 @theantichris 报告的 `web_fetch` 工具链 Bug（#1305），涉及 UA 缺失导致 GitHub API 访问被拒。目前该 Issue 尚无维护者回复或关联修复 PR。整体来看，项目处于平稳但待响应状态，需关注社区反馈的响应周期。

## 2. 版本发布

今日无新版本发布，最新 Release 频道无更新。省略详细内容。

## 3. 项目进展

- **PR 合并：0 条**；**PR 待处理：0 条**
- 今日无代码层面的实质推进。值得注意的是 Issue #1305 中 Preflight 清单显示用户**未确认其使用的是最新版本**，存在该问题已在未发布分支中修复的可能，建议维护者核实并回复。

## 4. 社区热点

- **[#1305] [Bug]: web_fetch omits User-Agent, causing HTTP 403 from GitHub REST API**（👍 0 | 评论 0 | 创建于 2026-10-16）
  链接：https://github.com/moltis-org/moltis/issues/1305
  今日唯一活跃讨论点。用户诉求清晰：希望 Moltis 的 `web_fetch` 工具在发起 HTTP 请求时携带标准 `User-Agent` 头，以符合 GitHub REST API 的强制要求（GitHub API 对缺失 UA 的请求一律返回 403）。该问题的本质是**智能体工具的网络合规性**——`web_fetch` 作为智能体访问外部数据的核心工具，若无法访问 GitHub API，将直接影响依赖该数据源的工作流。报告质量较高：已完成搜索去重、附带了聊天提示词与输出，但尚未验证版本时效性。

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🟡 中 | [#1305](https://github.com/moltis-org/moltis/issues/1305) | `web_fetch` 未携带 User-Agent，导致 GitHub REST API 返回 HTTP 403，阻断相关智能体任务 | 暂无 |

**评估**：问题影响面取决于用户使用 `web_fetch` 访问 GitHub API 的频率，但修复成本低（通常仅需在 HTTP 客户端默认 headers 中添加 UA 字符串）。无崩溃或回归类问题报告。

## 6. 功能请求与路线图信号

今日无新功能请求。间接信号：#1305 隐含对 `web_fetch` **可配置请求头**（Headers）的潜在需求——固定 UA 只是最小修复，支持自定义 Headers/UA 将提升工具通用性，可作为后续增强项纳入路线图。

## 7. 用户反馈摘要

- **痛点**：用户在让 Moltis 通过 `web_fetch` 调用 GitHub REST API 时遭遇 403，说明智能体在“代码/仓库检索”场景下的可用性受损。
- **报告体验**：Issue 模板的 Preflight Checklist 引导有效，用户完成了搜索与复现信息提供；但“确认最新版本”一项未勾选，也侧面反映部分用户对获取/确认最新构建版本的流程不够顺畅。
- 暂无正面/负面情绪的评论数据可供提炼。

## 8. 待处理积压

- **[#1305](https://github.com/moltis-org/moltis/issues/1305)**（创建 1 天，0 回复）：建议维护者尽快确认是否为已知问题或已修复，避免挫伤高质量 Bug 报告者的积极性。同时建议补充官方文档，说明 `web_fetch` 的默认请求行为及版本验证方式。

---
*数据来源：Moltis GitHub 仓库过去 24 小时活动快照。整体健康度：⚠️ 低活跃 / 待响应，建议关注社区响应时效。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 — 2026-10-17

## 1. 今日速览

项目今日保持高活跃度：过去 24 小时 Issues 更新 14 条（新开/活跃 12，关闭 2），PR 更新 27 条（待合并 18，合并/关闭 9），无新版本发布。核心动向是官方发布 v2.3.0 路线图公告（#8289），明确“轻量化 + 插件化”重构方向，是今日最重要的战略信号。同时 v2.2.2 暴露多个性能/稳定性回归（#8288、#8284），社区修复响应迅速，多个 fix PR 当天提交（#8287、#8282）。总体健康度良好：问题响应快、修复闭环短，但 v2.2.2 相对 v2.2.1 的性能回归值得警惕。

## 2. 版本发布

过去 24 小时无新 Release。最近版本为 v2.2.2 (Stable)，安装验证任务 [#8262](https://github.com/agentscope-ai/QwenPaw/issues/8262) 已关闭。

## 3. 项目进展

今日关闭/合并的 9 个 PR 中，重点包括：

- **#8273** [fix(console): update chat dependency for navigation](https://github.com/agentscope-ai/QwenPaw/pull/8273) — 升级 `@agentscope-ai/chat` 修复长会话消息导航定位问题，关闭 #8251，与 #8284 属同一问题域的持续推进。
- **#8263** [fix(console): unblock config editors](https://github.com/agentscope-ai/QwenPaw/pull/8263) — 标准化配置编辑器关闭流程（“继续编辑 / 放弃并关闭”），配置保存失败不再卡死抽屉/弹窗。
- **#8239** [feat(chat): inline UI plugins and scoped message submission](https://github.com/agentscope-ai/QwenPaw/pull/8239) — 在助手消息内渲染交互式 UI 并向原会话提交操作，为 OpenUI 集成铺路，配合未合并的 #8248。
- **#8205** [feat(models): TypeSafe decision model configuration](https://github.com/agentscope-ai/QwenPaw/pull/8205) — 引入独立的 decision 模型类型与全局默认值，已进入 human review 后关闭（可能转向后续迭代）。
- **#8271**、**#7875** — 控制台搜索配置打磨与 Creator create-video 控制面文档收尾。

整体判断：控制台 UX 打磨进入密集修复期，插件化/内联 UI 能力持续落地，为 v2.3.0 架构演进做功能储备。

## 4. 社区热点

- **[#8289](https://github.com/agentscope-ai/QwenPaw/issues/8289) 📢 v2.3.0 路线图：更轻量、更可扩展** — 官方插件化重构预告，附初步测试结果并征集需求，是今日最重要的话题，预计讨论量将快速攀升。
- **[#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126) skill-pool 下载改为可取消后台任务**（7 评论）— 讨论最充分，已有对应实现 PR #8285 提交，社区对大技能包下载超时 30 s 的问题关注度高。
- **[#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278) 钉钉通道 >3500 字符静默降级纯文本**（3 评论）— 中文用户数据报表场景痛点集中，诉求是复用 split_text 分片而非整体降级。
- **[#8275](https://github.com/agentscope-ai/QwenPaw/issues/8275) Hub 全局 Skill / MCP 统一管理共享**（1 👍）— 团队多用户部署场景的典型诉求，与 v2.3.0 的插件化方向天然契合，被纳入路线图概率较高。

## 5. Bug 与稳定性

按严重程度排列：

1. **🔴 #8288** [大流式输出会话切换导致 UI 长时间冻结并可 SIGBUS 崩溃后端](https://github.com/agentscope-ai/QwenPaw/issues/8288) — v2.2.2 独有回归（v2.2.1 已验证不受影响），全后端崩溃级别，**尚无 fix PR**，最需优先处理。
2. **🟠 #8279** [ReMe 长驻 watcher 耗尽 AnyIO 线程限制器，阻塞同步 HTTP 端点](https://github.com/agentscope-ai/QwenPaw/issues/8279) — 长时运行部署的服务级停摆，暂无 fix PR。
3. **🟠 #8228** [tool_result 内 base64 存储导致聊天记录 >10 MB、稳定触发 30 s 超时](https://github.com/agentscope-ai/QwenPaw/issues/8228) — **已有修复中 PR #8229**（服务端截断超大 tool 输出，Under Review）。
4. **🟡 #8284** [长会话滚轮滚动被高度重估回弹 1.1–2.2k px](https://github.com/agentscope-ai/QwenPaw/issues/8284) — Console UX 回归，#8273 已修复相关问题的一半。
5. **🟡 #8280** [缺失 file_id/file_data 的文件部件在 OpenAI 兼容供应商处 400 拒绝](https://github.com/agentscope-ai/QwenPaw/issues/8280)。
6. **🟡 #8286** [Thinking 强度滑条填充误导且保存时闪烁](https://github.com/agentscope-ai/QwenPaw/issues/8286) — **当天即有 fix PR #8287**，响应速度值得肯定。
7. **🟡 #8281** [`reload_agent()` 不触发 `workspace_created` 钩子，运行时钩子被静默丢弃](https://github.com/agentscope-ai/QwenPaw/issues/8281)。
8. **🟢 #8276** [ReMe reranker 允许空 api_key，错误仅报"unexpected error"](https://github.com/agentscope-ai/QwenPaw/issues/8276)。

## 6. 功能请求与路线图信号

- **#8275 全局 Skill/MCP 共享** + **#8126 可取消下载** → 与 v2.3.0 插件化重构（#8289）及在途巨型 PR **#7565**（插件干净卸载 + 回滚安全热重载）、**#8248**（内联 OpenUI）方向一致，大概率进入下一版本。
- **#7712**（Serply 搜索供应商）与 **#8200**（Firecrawl 搜索供应商）持续推进，web_search 供应商生态持续扩展，均为 opt-in 设计，合并阻力小。
- **#8283**（决策模型驱动的工具审批模式）属安全增强，体量 XL，可能对接 #8205 的 decision model 基础设施，是值得关注的架构级演进。

## 7. 用户反馈摘要

- **长内容/大文件场景是重灾区**：用户反复报告 10 MB+ 会话、30 s 超时、长流式输出冻结（#8228、#8288），反映重度用户（数据分析、报表生成）与当前 Console 性能之间的张力。
- **IM 通道集成体验**：钉钉用户（#8278）对 Markdown/表格静默降级不满，核心诉求是“降级要有信号、要分片而不是整体转纯文本”。
- **团队/多用户部署需求上升**：#8275 表明 Hub 已进入企业内共享使用阶段，管理员侧统一治理能力成为下一批需求。
- **正面信号**：v2.2.1→v2.2.2 问题报告普遍附带详细版本对比和复现步骤（如 #8288 的并排验证），社区质量高；维护者对 UX bug 当天响应修复（#8286→#8287）获得好感。

## 8. 待处理积压

- **#7565** [插件干净卸载 + 回滚安全热重载](https://github.com/agentscope-ai/QwenPaw/pull/7565)（XXXL，9 月 4 日开至今）— v2.3.0 路线图的关键依赖，需加快 review 节奏。
- **#7903** [社区与 Inbox 集成](https://github.com/agentscope-ai/QwenPaw/pull/7903)（XXXL，WIP，9 月 20 日起）— 体量大且仍处 WIP，建议拆分。
- **#8126**（10 月 8 日，7 评论）— PR #8285 已到，需尽快 review 合并以关闭该高关注 issue。
- **#7712**（9 月 11 日）与 **#8102**（10 月 4 日）— 社区/首批贡献者 PR 长期在途，建议维护者给出明确的 review 计划，避免贡献者流失。
- **#8288、#8279** 两个高危稳定性问题尚无对应 fix PR，建议维护者今日内 triage 并指定负责人。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报（2026-10-17）

## 1. 今日速览

今日 EasyClaw 仓库无 Issue 与 PR 活动，社区讨论与代码贡献均处于静默状态，属于低活跃日。唯一的动态是发布了新版本 **v1.9.33 (TK Copilot)**，聚焦于达人管理与运营工作流的细节打磨。整体来看，项目处于稳定的持续迭代期，由版本发布驱动，而非社区协作驱动。建议关注后续版本节奏以评估维护活跃度。

## 2. 版本发布

**v1.9.33: TK Copilot v1.9.33**（[Release 链接](https://github.com/gaoyangz77/easyclaw/releases)）

更新内容：
- **BD 公共达人认领流程完善**：支持 BD 人员认领公共池达人，认领后自动加载完整详情，并在退回公海前增加确认步骤，降低误操作风险
- **达人工作台体验优化**：明确样品订单复制按钮的标签文案，减少歧义

评估：
- **破坏性变更**：无。本次均为功能优化与交互细节改进，未涉及 API 或数据结构变更
- **迁移注意事项**：无需特殊迁移，常规升级安装即可（Release 附 macOS 安装说明）

## 3. 项目进展

过去 24 小时无 PR 合并或关闭记录。版本 v1.9.33 的变更内容推测已在发布前的开发周期内完成合并，今日仓库层面无新增代码动作。项目进展主要体现为运营侧功能（达人认领、退回公海流程）的闭环完善。

## 4. 社区热点

今日无活跃 Issue 或 PR 讨论，无社区热点可分析。如需了解用户关注焦点，建议回顾近期历史 Issue（[Issues 列表](https://github.com/gaoyangz77/easyclaw/issues)）。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题。v1.9.33 退回公海前的确认机制属于预防性交互改进，可视为对潜在误操作风险的规避。

## 6. 功能请求与路线图信号

今日无新增功能请求。从 v1.9.33 的迭代方向可以观察到路线图信号：
- **达人/创作者生命周期管理**持续深化（认领 → 详情加载 → 退回公海闭环），后续版本可能继续完善公海池分配、认领权限等运营能力
- **BD 人员工作流**成为迭代重点，Affiliate 工作台的细节打磨表明团队在持续优化一线运营体验

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼用户反馈。后续可关注用户对达人认领流程新交互的接受度。

## 8. 待处理积压

今日数据中无长期未响应的 Issue 或 PR。建议维护者定期巡检 [Open Issues](https://github.com/gaoyangz77/easyclaw/issues?q=is%3Aissue+is%3Aopen) 与 [Open PRs](https://github.com/gaoyangz77/easyclaw/pulls?q=is%3Apr+is%3Aopen)，避免社区反馈积压影响项目健康度。

---

**健康度小结**：今日活跃度低但版本迭代正常，无风险信号。数据来源：GitHub API（过去 24 小时窗口）。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*