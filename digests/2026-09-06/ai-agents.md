# OpenClaw 生态日报 2026-09-06

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-06 03:33 UTC

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

# OpenClaw 项目动态日报 — 2026-09-06

## 1. 今日速览

OpenClaw 今日保持高活跃度：过去 24 小时 Issues 更新 500 条（新开/活跃 425，关闭 75），PR 更新 500 条（待合并 278，已合并/关闭 222），并发布了新版本 **v2026.9.2**。核心维护者 @steipete 今日密集提交并推进了 10+ 个 maintainer 标记的 PR，集中在网关事件循环性能与消息可靠性方向，与 v2026.9.2 的 "Faster, more responsive chat" 主题高度呼应。社区侧，消息丢失（message-loss）与 session-state 类 P1 问题仍是讨论焦点，出现了多个聚合性 umbrella issue。整体判断：项目处于**活跃迭代期，性能与可靠性是当前主线**，但 P0/P1 积压量偏大（top 讨论帖中 20+ 个 P1），健康度需关注修复吞吐与报告增速的平衡。

## 2. 版本发布

**v2026.9.2** ([Release](https://github.com/openclaw/openclaw/releases))

- **亮点**：更快、更响应的聊天体验——在处理长 transcript 和磁盘占用时，聊天、仪表盘和会话交互保持响应；dashboard 直接查询、减少冷加载工作、将持久化历史读取移出 Gateway 事件循环（#136862 等）。
- **配套 PR**：[#139674](https://github.com/openclaw/openclaw/pull/139674)（启动修复异步化）、[#139660](https://github.com/openclaw/openclaw/pull/139660)（P0：修复从 2026.9.1 npm 升级后服务停止的问题）。
- **迁移注意**：从 2026.9.1 通过 npm 升级的用户可能遇到 Gateway 停止，#139660 明确针对此修复，建议升级后检查服务状态。未见明确破坏性 API 变更。

## 3. 项目进展

今日合并/关闭 222 个 PR，重要方向包括：

- **性能优化**：[#139681](https://github.com/openclaw/openclaw/pull/139681) 加速重复模型目录查询；[#139678](https://github.com/openclaw/openclaw/pull/139678) 避免冗余插件命令匹配；[#139674](https://github.com/openclaw/openclaw/pull/139674) 会话启动修复保持响应——延续 9.2 性能主线。
- **消息可靠性**：[#139661](https://github.com/openclaw/openclaw/pull/139661)（P0）修复 watchdog 重试时队列消息丢失——直接回应 #139341。
- **QA/SDK 修复**：[#139563](https://github.com/openclaw/openclaw/pull/139563)（已关闭）修复 SDK 订阅者 replay 乱序；[#139644](https://github.com/openclaw/openclaw/pull/139644) 修复 QA Lab 丢失响应后的重复提交。
- **安全/隐私**：[#99556](https://github.com/openclaw/openclaw/pull/99556)（ready for maintainer look）对 Responses `input_image` 媒体块做历史脱敏。
- **入门体验**：[#139675](https://github.com/openclaw/openclaw/pull/139675)（XL）强制显式选择 AI provider，修复 onboarding 自动选用检测到的账号问题。
- **已关闭的陈旧 PR**：#114725、#110531、#108294、#103648、#94940、#80228 等以 stale 状态清理，涉及 workboard、agent 治理、Codex 桥接等长期挂起项，需要原作者补充 proof 后重开。

## 4. 社区热点

1. [#69208](https://github.com/openclaw/openclaw/issues/69208)（14 评论，P1 umbrella）：跨渠道 transcript 重复/replay/上下文组装 bug 的总括 issue，覆盖 MSTeams、webchat、Telegram、followup 队列等路径——**重复消息问题已成系统性债务**。
2. [#132762](https://github.com/openclaw/openclaw/issues/132762)（13 评论）：overflow-retry 在 toolResult 上"成功"结束但无最终交付，属消息丢失高严重度问题。
3. [#53763](https://github.com/openclaw/openclaw/issues/53763)（12 评论）：内置 headless Chromium 的功能请求，反映外部浏览器依赖的脆弱性是长期痛点。
4. [#39476](https://github.com/openclaw/openclaw/issues/39476)（12 评论）：A2A `sessions_send` 回调导致消息重复，与 #69208 主题呼应，已有 linked PR。
5. [#96975](https://github.com/openclaw/openclaw/issues/96975)（12 评论）：子代理完成时应默认仅返回状态+链接而非注入完整内容，多代理用户的核心架构诉求。

**诉求分析**：讨论热度集中于「消息只发一次、会话状态正确」这一可靠性基线，以及多代理/多渠道规模化下的上下文管理。

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue | 问题 | Fix PR |
|---|---|---|---|
| P0 | [#91931](https://github.com/openclaw/openclaw/issues/91931) | 预置 SOUL.md 导致 bootstrap 误完成并**删除用户 BOOTSTRAP.md**（数据丢失） | 已有 linked PR |
| P0 | [#115642](https://github.com/openclaw/openclaw/issues/115642) | 计费冷却 ~5h 超过实际故障时长，订阅认证持续快速失败（UX 发布阻断） | 无，待产品决策 |
| P0 | [#136148](https://github.com/openclaw/openclaw/issues/136148) | Linux AppImage WebKitWebProcess SIGABRT 白屏（已关闭） | — |
| P0 (PR) | [#139660](https://github.com/openclaw/openclaw/pull/139660) | 2026.9.1 npm 升级后 Gateway 停止 | 本 PR 修复中 |
| P1 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/工具子进程未回收 → 僵尸进程累积、运行时退化（回归） | 无 |
| P1 | [#136183](https://github.com/openclaw/openclaw/issues/136183) | 命令执行器 spawn ssh 卡死（2026.8.1 回归） | 无 |
| P1 | [#119720](https://github.com/openclaw/openclaw/issues/119720) | 同步持久化/transcript 维护阻塞 Gateway 事件循环（部分已修，#133925/#134062） | 部分落地 |
| P1 | [#110190](https://github.com/openclaw/openclaw/issues/110190) | 运行时上下文载体插在用户消息之后，致模型混乱+token 浪费 | 无 |
| P1 | [#99910](https://github.com/openclaw/openclaw/issues/99910) | Memory dreaming 卡死网关 ~10 分钟（recovery-stuck） | 无 |
| P1 | [#102534](https://github.com/openclaw/openclaw/issues/102534) | Cron 定时器在大量超时后永久停摆，重启也无法恢复 | 无 |
| P1 | [#132765](https://github.com/openclaw/openclaw/issues/132765) | `agents_wait` 忽略 timeoutSeconds，60s 后以工具错误终止 | 无 |
| P1 | [#54488](https://github.com/openclaw/openclaw/issues/54488) | followup drain 独占 session lane，入站消息排队 20-30 分钟 | 无 |

回归问题（#97616、#136183、#91941 飞书流式延迟）值得在下一版本前专项回归测试。

## 6. 功能请求与路线图信号

- **多代理隔离**：[#96975](https://github.com/openclaw/openclaw/issues/96975) 子代理完成默认仅返回状态+链接——与 #78055 同族，多代理规模化是明确方向。
- **Headless 浏览器**：[#53763](https://github.com/openclaw/openclaw/issues/53763) 一等公民化内置 Chromium，评论热度高（12 条），但 P3 待产品决策。
- **多 Teams bot**：[#71058](https://github.com/openclaw/openclaw/issues/71058) 单网关多 Azure/Teams bot，schema 需破坏性调整。
- **Token 开销优化**：[#14785](https://github.com/openclaw/openclaw/issues/14785) 工具 schema 固定税 ~3,500 tok/session；与 [#44134](https://github.com/openclaw/openclaw/issues/44134)（schema 频繁重载触发反滥用封号）同根，**减少 schema 重复下发可能优先纳入**。
- **动态 allowlist**：[#58057](https://github.com/openclaw/openclaw/issues/58057) 多用户部署身份动态解析。
- **可见信号**：v2026.9.2 + 今日 maintainer PR 集中在性能与事件循环非阻塞化，[#139661](https://github.com/openclaw/openclaw/pull/139661)（消息不丢失）表明可靠性修复正被主动推进，上述消息丢失类 P1 预计是 9.x 后续重点。

## 7. 用户反馈摘要

- **痛点集中在可靠性**：消息静默丢弃（#112259）、重复回复（#49381 飞书 failover 后双回复）、入站排队 20-30 分钟（#54488）——用户对"消息必须到达且只到达一次"的诉求强烈。
- **升级焦虑**：#85027（macOS 升级后需 Time Machine 恢复）、#114967（live-update 后网关每 2 分钟重启）、#139660 相关的 9.1 升级停服——**升级路径安全性是反复出现的负面反馈**，社区呼吁自动配置回滚（#79164，今日已关闭）。
- **规模化受限**：长 transcript/大附件导致 UI 栈溢出（#90098）、内存压缩阻塞主通道 10+ 分钟（#53008）、active-memory 插件拖慢多代理网关（#72015）。
- **正面信号**：新版本发布节奏稳定，维护者响应密集，多个 issue 中出现明确的分阶段修复落地记录（如 #119720 已合并 #133925、#134062），用户对 root-cause 分析质量的评价普遍正面。

## 8. 待处理积压

- **[#69208](https://github.com/openclaw/openclaw/issues/69208)**：4 月开的 umbrella，至今无 fix PR，needs-product-decision——重复消息系统性问题需要架构级裁决。
- **[#110190](https://github.com/openclaw/openclaw/issues/110190)** / **[#132765](https://github.com/openclaw/openclaw/issues/132765)** / **[#127148](https://github.com/openclaw/openclaw/issues/127148)**：高严重度 P1（🦞 diamond lobster），均为 needs-maintainer-review，今日仍有活动但无修复 PR。
- **[#53763](https://github.com/openclaw/openclaw/issues/53763)**（3 月起）与 **[#99583](https://github.com/openclaw/openclaw/issues/99583)**：高热度功能请求长期停留在产品决策阶段。
- **陈旧 PR 待处理**：[#110840](https://github.com/openclaw/openclaw/pull/110840)（Codex UTF-16 截断，7 月起 needs proof）、[#75225](https://github.com/openclaw/openclaw/pull/75225)（agents_list 描述，4 月起）、[#119210](https://github.com/openclaw/openclaw/pull/119210)（waiting on author）。
- **stale 风险**：#58057、#49381 等 3 月 issue 已打 stale 标签，若 maintainer 不回应可能被误关，建议优先 triage。

---
*数据来源：GitHub 公开 Issues/PR/Releases，统计窗口为过去 24 小时。链接均为 openclaw/openclaw 仓库内条目。*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**数据日期：2026-09-06 ｜ 统计窗口：过去 24 小时**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已从早期的“功能堆叠”阶段整体迈入**“可靠性与工程化治理”阶段**。头部项目（OpenClaw、ZeroClaw、NanoBot）的社区精力明显转向消息可靠性、安全加固、沙箱策略与架构级 RFC 治理，而非新渠道/新能力的扩张。同时，多代理编排、多租户部署、token 成本控制成为跨项目的共同主线。生态分层清晰：巨型活跃项目（500 条/日更新量级）、中型健康成长项目（25–50 条）、维护期项目（<10 条）与停滞项目并存。用户画像也在从个人玩家向生产部署（企业代理网关、远程服务器、多用户团队）迁移。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 合并/关闭 PR | Release | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（新开/活跃 425，关闭 75） | 500（待合并 278，关闭 222） | 222 | ✅ v2026.9.2 | 🟡 活跃度极高，但 P0/P1 积压偏大（top 讨论中 20+ P1），修复吞吐与报告增速失衡 |
| **ZeroClaw** | 42（新开 34，关闭 8） | 50（待合并 44，关闭 6） | 6 | ✅ v0.8.5（454 commits / 73 贡献者） | 🟢 良好——安全加固导向，治理规范，RFC 修订节奏密集但有序 |
| **Hermes Agent** | 50（新开 47，关闭 3） | 50（待合并 45，关闭 5） | 5 | ❌（最新 v0.20.6，8-27） | 🟡 功能推进快、响应快，但更新/安装子系统回归频发，技术债突出 |
| **NanoBot (HKUDS)** | 1 | 25（待合并 18，关闭 7） | 7 | ❌ | 🟢 良好——issue 当天获 fix PR，闭环优秀；风险在 p1 修复与 7 个 conflict PR 积压 |
| **CoPaw** | 11（新开 8，关闭 3） | 5（全部待合并） | 0 | ❌（2.2.0 开发中） | 🟢 中高——社区自愈能力强（首贡者当日修复），但 #7576 全版本受影响 bug 未修 |
| **ZeptoClaw** | 14（新开 10，关闭 4） | 8 | 3（含 2 个 P0 安全修复） | ❌ | 🟢 优秀——单人维护、P0 安全问题当日闭环、评审驱动路线图 |
| **PicoClaw** | 2 | 3 | 0 | ❌ | 🟠 中低——积压 PR 整并被关闭而非合并，社区贡献去向不明 |
| **NanoClaw** | 0 | 3（全部待审） | 0 | ❌ | 🟡 维护期，纯维护性 PR，评审无响应（可能周末效应） |
| **IronClaw** | 1 | 1（XL 级沙箱 PR） | 0 | ❌ | 🟡 表面安静，实为“大改动蓄势期”（原生沙箱循环将成默认） |
| **LobsterAI** | 0 | 2（均 stale 5+ 月） | 0 | ❌ | 🔴 维护活跃度下降，外部贡献停滞 |
| **NullClaw / TinyClaw / Moltis / EasyClaw** | 0 | 0 | 0 | ❌ | ⚪ 无活动（停滞） |

**要点**：OpenClaw 以 10 倍于其他项目的流量成为生态绝对中心，但其“高流量≠高健康”——关闭率（Issues 15%、PR 44%）与积压规模需持续观察；ZeroClaw、NanoBot、ZeptoClaw 呈现“小而精”的高质量运转。

---

## 3. OpenClaw 在生态中的定位

**社区规模**：断层领先。日更新量约 1000 条，是 ZeroClaw（92 条）的 10 倍、Hermes（100 条）的 10 倍量级；版本节奏稳定（v2026.9.x 周级迭代），maintainer（@steipete）单日推进 10+ maintainer 标记 PR。

**技术路线差异**：
- 相比 **ZeroClaw**：OpenClaw 采用更快的功能迭代与问题驱动修复模式，而 ZeroClaw 走重治理路线（RFC Rev 26 级别的共识打磨、沙箱细粒度策略 RFC、WASM 插件运行时）。ZeroClaw 在安全架构（Bubblewrap/Landlock/Seatbelt 统一策略）上更体系化，OpenClaw 在响应速度上占优。
- 相比 **Hermes**：两者均有多 Bot 群聊/网关架构方向，但 Hermes 痛点集中在更新链路与宿主环境边界（root 文件、凭证自动消费），OpenClaw 痛点集中在消息传递语义（丢失/重复/replay）与 Gateway 事件循环性能——后者已通过 v2026.9.2 系统性回应。
- 相比 **NanoBot/CoPaw 等中型项目**：OpenClaw 覆盖渠道最广（MSTeams、Telegram、飞书、webchat、A2A），多渠道规模化恰是其系统性 bug（#69208 umbrella）的来源；中型项目尚在补齐单点能力。

**优势**：迭代速度、渠道覆盖、root-cause 分析质量获社区正面评价、分阶段修复记录透明。
**短板**：P0/P1 积压（含数据丢失级 #91931）、升级路径安全性反复出问题（#85027、#139660）、架构级裁决（needs-product-decision）排期长。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **消息“恰好一次”投递** | OpenClaw、NanoBot、CoPaw、PicoClaw | OpenClaw #69208 跨渠道重复/replay umbrella、#132762 overflow-retry 无最终交付；NanoBot #5457 dispatcher 单点崩溃、#5589 废弃 session 复活；CoPaw #7559 任务中消息应入队而非 409 |
| **会话/持久化不阻塞事件循环** | OpenClaw、NanoBot、Hermes | OpenClaw #119720（部分已修）、v2026.9.2 专门优化；NanoBot #5580 p1 修复；Hermes Pluggable SessionDB（#104018） |
| **安全与沙箱加固** | ZeroClaw、ZeptoClaw、NanoBot、Hermes | ZeroClaw v0.8.5 全面收紧沙箱/插件/凭证边界；ZeptoClaw 两日内 P0 清零（fail-closed、env 清洗）；NanoBot #5633 session 路径穿越；Hermes browser_exec 误启动用户 Chrome、OAuth 凭证边界 |
| **Cron/定时任务可靠性** | OpenClaw、Hermes、ZeptoClaw | OpenClaw #102534 定时器永久停摆；Hermes #9320 wall-clock 超时挂起；ZeptoClaw #665 Cron v2（完成确认、运行台账） |
| **子代理/多代理编排** | OpenClaw、NanoBot、CoPaw、ZeptoClaw | OpenClaw #96975 子代理默认仅返回状态+链接、#132765 agents_wait 超时失效；NanoBot per-spawn model presets；CoPaw 多 Agent Skill 版本管理（#7557）；ZeptoClaw #664 委托能力继承约束 |
| **Token/成本优化** | OpenClaw、NanoBot、CoPaw、ZeptoClaw | OpenClaw #14785 工具 schema 固定税 ~3500 tok/session；NanoBot heartbeat 便宜模型 override；CoPaw Advisor Mode 双模型分工；ZeptoClaw #661 prompt-cache 友好的稳定 envelope |
| **更新/安装链路可靠性** | Hermes、OpenClaw、NanoClaw | Hermes root 文件、fleet 重启死循环、ZIP 回退；OpenClaw npm 升级停服（#139660）；NanoClaw signal-cli 版本固定 |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | ZeroClaw | Hermes Agent | NanoBot | ZeptoClaw | CoPaw | 其他 |
|---|---|---|---|---|---|---|---|
| **定位** | 全渠道个人 AI 助手旗舰 | 治理驱动的安全型 agent 运行时 | 桌面/多 Bot 群聊 agent | 轻量消息网关 + 多模型编排 | 单人精维护的 Rust 安全型 agent | 面向团队演进的个人助手（多租户 Hub 2.2.0） | IronClaw：benchmark 沙箱；PicoClaw：嵌入式/边缘 |
| **目标用户** | 跨渠道重度用户、规模化部署 | 重视安全合规的生产部署者 | 桌面多平台群聊用户 | 长时任务 + 第三方推理服务用户 | 安全敏感个人开发者 | 从个人向团队扩展（9-Agent 集群、飞书企业集成） | — |
| **技术架构** | Gateway 事件循环 + 多渠道适配，性能优先 | WASM 插件 + 细粒度沙箱 + RFC 治理 | Python + Desktop + 跨网关传输 | MessageBus 事件系统统一重构 | Rust、fail-closed 安全模型、Agent Pipeline 迁移中 | Skill 生态 + Hub 多租户 | IronClaw：嵌入式 Pi/Bun sandbox 成默认 |
| **语言/形态** | TS/npm 分发 | Rust 系（多平台沙箱） | Python | Python | Rust | Python | — |

**关键洞察**：生态内存在两条清晰路线——**“广度优先”**（OpenClaw、Hermes：渠道多、功能多，代价是可靠性债）与**“深度优先”**（ZeroClaw、ZeptoClaw：安全与架构正确性优先，功能收敛）。IronClaw 的原生沙箱循环默认化则代表第三条路：**运行时可复现性优先**。

---

## 6. 社区热度与成熟度分层

- **快速迭代期**：OpenClaw（周级 release、日合并 222 PR）、Hermes（大功能管道：语音 WS、SessionDB、bot-to-bot）、CoPaw（2.2.0 多租户开发中）——特征是新能力密集落地，回归风险同步上升。
- **质量巩固期**：ZeroClaw（v0.8.5 安全收尾、进入 v0.8.6+ 架构迭代）、NanoBot（事件系统重构完成、消化 p1 积压）——特征是合并量下降、修复与治理占比上升。
- **蓄势期**：IronClaw（XL 级沙箱 PR 等待 base 合并）。
- **维护期/衰退期**：NanoClaw（仅维护 PR）、PicoClaw（贡献去向不明）、LobsterAI（stale 5+ 月、零社区互动）；NullClaw/TinyClaw/Moltis/EasyClaw 完全停滞。

**成熟度信号**：越成熟的项目（ZeroClaw、OpenClaw），issue 越呈架构级/系统性特征（RFC、umbrella、policy）；成长期项目（CoPaw、NanoBot）issue 集中在单点 bug 与体验补齐。

---

## 7. 值得关注的趋势信号

1. **可靠性成为第一竞争维度**：多个项目同时投入“消息恰好一次”、事件循环非阻塞、cron 可靠性——用户已默认 AI agent 应“永不丢消息、永不卡死”，这是产品成熟度的分水岭。对开发者的启示：**投递语义设计（幂等、去重、队列化）应早于功能扩张**。

2. **安全从声明走向可验证**：ZeptoClaw 的 fail-closed 修复、环境变量清洗，ZeroClaw 的沙箱策略统一，NanoBot 的路径穿越修复，共同表明社区不再接受 README 式安全承诺；Hermes 的凭证自动消费争议（Claude OAuth 登出、自动配置消息平台）提示**宿主环境边界（凭证、浏览器、文件属主）是用户信任红线**。

3. **多租户/团队化是下一个战场**：CoPaw Hub 2.2.0（23 评论路线图讨论）、OpenClaw 动态 allowlist（#58057）与多 Teams bot（#71058）、IronClaw 配对用户+共享频道——个人助手正在集体向团队产品演进。

4. **Token 成本工程化**：工具 schema 固定税、prompt-cache 稳定性、心跳用便宜模型、Advisor 双模型分工——成本优化从“换模型”进入**架构层优化**阶段，是差异化机会点。

5. **AI 辅助协作成为常态**：ZeroClaw RFC 评论区高频出现 "Drafted with Codex" 标注，Hermes 出现 agent 自我披露的报告工作流，OpenClaw 出现聚合 umbrella 治理——**AI 参与开源开发本身正在重塑 issue/PR 生态**，也带来治理新摩擦（ZeroClaw #10549 精简流程诉求）。

6. **升级路径安全是反复出现的负面反馈源**：OpenClaw、Hermes、CoPaw 均因升级回归或破坏性配置迁移（无兼容提示）引发抱怨——**自动回滚、配置迁移提示、发布前依赖审计**应成为 agent 项目发布流程标配。

7. **长尾项目警示**：stale-bot 自动关闭 + 维护者无响应的循环（PicoClaw #3342、LobsterAI）会系统性掩盖真实需求；生态整合窗口可能在向头部 3–4 个项目集中。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：2026-09-06** | 仓库：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

- 过去 24 小时项目保持**高活跃度**：PR 更新 25 条（待合并 18、合并/关闭 7），Issue 更新 1 条，无新版本发布。
- 核心贡献者 [@chengyongru](https://github.com/chengyongru) 今日密集活动，涉及事件总线重构、WebUI 修复、测试清理等多个 PR 的推进与关闭。
- 出现**问题-修复快速闭环**的积极信号：昨日报告的 Nvidia NIM 超时导致 Agent 卡死的 Bug（[#5674](https://github.com/HKUDS/nanobot/issues/5674)）当天即有修复 PR [#5675](https://github.com/HKUDS/nanobot/pull/5675) 提交。
- 待合并 PR 中标记 `priority: p1` 的有 2 个（会话路径穿越安全修复、事件循环阻塞修复），`conflict` 标记的 PR 较多（约 7 个），存在一定的**合并排队与冲突处理压力**。

---

## 2. 版本发布

今日无新版本发布。上一发布周期后的改动持续在 PR 队列中累积，p1 级修复落地后或值得发布一次补丁版本。

---

## 3. 项目进展

今日合并/关闭 7 个 PR，主要成果：

| PR | 内容 | 意义 |
|---|---|---|
| [#5670](https://github.com/HKUDS/nanobot/pull/5670) | 统一跨客户端的作用域运行时通知，迁移 context compaction 到 MessageBus，保持 wire/session 格式兼容 | 架构层面的**事件系统统一重构**，无破坏性变更 |
| [#5671](https://github.com/HKUDS/nanobot/pull/5671) | dev 模式跳过 WebUI bundle 检查 | 改善开发者体验 |
| [#5672](https://github.com/HKUDS/nanobot/pull/5672) | 移除过时的“非存在性”断言测试 | 测试套件瘦身，聚焦可观测行为 |

**整体评估**：事件系统重构落地是今日最大进展，为后续 WebUI/channel 客户端的功能（如 [#5504](https://github.com/HKUDS/nanobot/pull/5504) 重试状态展示）铺平了道路。项目整体稳健向前。

---

## 4. 社区热点

- **[#5674](https://github.com/HKUDS/nanobot/issues/5674)** Nvidia NIM 超时错误（300s/600s）被误认为模型输出导致 Agent 停止工作 —— 今日唯一新开 Issue，直击生产可用性痛点，**当天即被 [#5675](https://github.com/HKUDS/nanobot/pull/5675) 认领修复**，且修复深入到 runner deadline 与 FallbackProvider 的交互逻辑，社区响应效率高。
- **[#5561](https://github.com/HKUDS/nanobot/pull/5561)** per-spawn model presets —— 与 #4291 形成竞争实现，评论区已有设计方向共识，体现社区对**多模型 spawn 场景**的强烈需求。
- **[#5633](https://github.com/HKUDS/nanobot/pull/5633)** session key 路径穿越安全修复（p1）—— 涉及 `../../etc/passwd` 类攻击面，安全敏感，建议维护者优先合并。

---

## 5. Bug 与稳定性

按严重程度排列：

1. 🔴 **[P1] Session 路径穿越漏洞** — [#5633](https://github.com/HKUDS/nanobot/pull/5633)（fix #5564），已有修复 PR 待合并，含 `validate_session_key()` 校验
2. 🔴 **[P1] Session 持久化阻塞事件循环** — [#5580](https://github.com/HKUDS/nanobot/pull/5580)，慢存储/文件锁竞争可拖垮无关会话，已有修复
3. 🟠 **[P1] 已废弃 Session 复活** — [#5589](https://github.com/HKUDS/nanobot/pull/5589)，丢弃会话的残留队列消息仍可发布到全局总线，已有修复
4. 🟠 **[P2] Nvidia NIM 超时致 Agent 停摆** — Issue [#5674](https://github.com/HKUDS/nanobot/issues/5674) / 修复 [#5675](https://github.com/HKUDS/nanobot/pull/5675)，含回归测试与 failover 修复
5. 🟠 **[P2] 出站消息 dispatcher 单点崩溃** — [#5457](https://github.com/HKUDS/nanobot/pull/5457)，一条消息处理失败即停止全部投递直至重启
6. 🟡 **[P2] Dream 记忆文件无限增长** — [#5630](https://github.com/HKUDS/nanobot/pull/5630)，#5622 的回归副作用，移除了原有 8000 字符上限
7. 🟡 **[P2] 空闲摘要缓存无上限** — [#5664](https://github.com/HKUDS/nanobot/pull/5664)，废弃会话导致内存泄漏

**结论**：今日报告的 Bug 均已有对应 fix PR，修复闭环良好；但 7 个 bugfix PR 积压待合并，建议尽快消化，尤其是 3 个 p1。

---

## 6. 功能请求与路线图信号

- **心跳机制增强**：[#4549](https://github.com/HKUDS/nanobot/pull/4549)（heartbeat 使用更便宜的 model_override）+ [#4551](https://github.com/HKUDS/nanobot/pull/4551)（isolated_session 支持共享会话）—— 两个 6 月底的 PR 今日仍活跃，方向是**降低长驻 Agent 成本**， likely 纳入下版本
- **网关签名直投 webhook**：[#5652](https://github.com/HKUDS/nanobot/pull/5652)，允许 CI/监控等可信系统绕过 agent loop 直发通知，扩展 nanobot 作为**消息网关**的定位
- **CLI attach-only Desktop 目标选择**：[#5676](https://github.com/HKUDS/nanobot/pull/5676)，Desktop 与 Python 安装解耦，今日新开
- **MCP Apps 结果元数据保留**：[#5386](https://github.com/HKUDS/nanobot/pull/5386)，结构化数据不膨胀模型上下文

综合判断：**成本控制（heartbeat）、安全（webhook/session）、多模型编排（spawn presets）** 是下阶段的清晰主线。

---

## 7. 用户反馈摘要

- **生产稳定性是首要痛点**：#5674 用户在生产环境使用 Nvidia NIM，LLM 网关超时文本被 agent 误判为模型输出而卡死，说明用户正在将 nanobot 用于**长时任务 + 第三方推理服务**的场景
- **多供应商/故障切换预期**：用户期望配置的 fallback 模型在主模型超时后自动接管（#5675 复现确认该链路当前完全失效）
- **远程部署场景凸显**：#5673（WebUI 远程项目路径）和 #5573（MCP OAuth token 过期）反映不少用户以**远程服务器 + WebUI** 方式运行
- 暂无负面情绪或不满表达，反馈以 bug 报告和功能诉求为主，社区氛围建设性较强

---

## 8. 待处理积压

- ⚠️ **[#4549](https://github.com/HKUDS/nanobot/pull/4549) / [#4551](https://github.com/HKUDS/nanobot/pull/4551)**（6 月 26 日开，已挂 72 天，标记 conflict）— heartbeat 两个核心功能 PR 长期未合并，建议维护者裁决冲突并推进
- ⚠️ **[#5561](https://github.com/HKUDS/nanobot/pull/5561)** vs #4291 — 竞争实现并存，需明确采纳方案避免社区精力分散
- ⚠️ **3 个 p1 修复 PR**（[#5633](https://github.com/HKUDS/nanobot/pull/5633)、[#5580](https://github.com/HKUDS/nanobot/pull/5580)、[#5589](https://github.com/HKUDS/nanobot/pull/5589)）积压待合并，其中安全修复应最优先
- ⚠️ 约 7 个 PR 带 `conflict` 标签，合并队列管理需关注

---

**健康度总评**：🟢 良好。贡献者活跃、问题响应迅速（issue 当天获 fix PR）、无版本停滞迹象；主要风险在于 p1 修复与 conflict PR 的合并积压。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-06

## 1. 今日速览

ZeroClaw 今日处于**高活跃度**状态：过去 24 小时 Issues 更新 42 条（新开/活跃 34，关闭 8），PR 更新 50 条（待合并 44，已合并/关闭 6），并发布了重量级版本 **v0.8.5**（454 commits、73 位贡献者）。项目当前重心已从功能扩张转向**安全加固与架构治理**——多项高关注度 RFC（运行时会话、文件架构、沙箱策略）进入材料性修订阶段，维护者决策队列（#8692）持续运转。整体项目健康度：活跃贡献者基数大、治理流程规范，但 RFC 修订节奏密集也反映出设计共识仍在磨合中。

## 2. 版本发布

### v0.8.5（[Release 链接](https://github.com/zeroclaw-labs/zeroclaw/releases)）

定位为**安全、连接性与运维体验**版本，主要内容包括：

- **新组件**：引入 ZeroRelay 与 ZeroRouter，扩展实时聊天与 provider 能力
- **安全加固**：插件、沙箱、webhook、凭证与文件边界全面强化（与 #6996 沙箱策略 RFC、#10391 delegate 文件系统修复方向一致）
- **规模**：454 commits，73 位贡献者

**迁移注意事项**：
- 沙箱与文件系统策略收紧（`allowed_roots` 等），macOS Seatbelt 用户需注意 #10536 报告的已知问题
- v0.8.5 有限稳定化追踪线见 [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)

## 3. 项目进展

今日合并/关闭的 PR 较少（6 条），但多为长线工作收尾：

- **[#5230](https://github.com/zeroclaw-labs/zeroclaw/pull/5230)**（已关闭）：4 月开立的 WASM 插件系统巨型 PR 正式落幕，其成果已随 #10076 RFC 演进为可组合 WASM 插件运行时架构，v0.8.5 的插件安全加固即为延续
- **[#10005](https://github.com/zeroclaw-labs/zeroclaw/pull/10005)**（已关闭）：修复 `/health` 将存活 listener 误判为渠道健康的问题——此前从未连接成功的渠道也会显示 `ok`，属可观测性重要修复
- Issue 侧关闭 **#9593**（TaskRecord 成为后台委托的唯一生命周期所有者，P1 重构）、**#7911**（Termux 安装脚本）、**#7910**（Windows 自更新测试覆盖）、**#10045**（图片标记临时路径）、**#10282**（硬件 probe 特性未传导至工具层）、**#10048**（Rust 1.98.0 CI 验证）

整体看，v0.8.5 发布前的一批稳定化工作（#9459 追踪线）已基本清账，项目进入下一轮（v0.8.6+）的架构迭代期。

## 4. 社区热点

| 排名 | Issue | 评论数 | 核心议题 |
|---|---|---|---|
| 1 | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) RFC：运行时拥有的会话与传输面适配器 | 33 | Rev 5 材料性替换，需重开投票窗口 |
| 2 | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) RFC：统一文件与附件架构 | 26 | Rev 10，仍由 @NiuBlibing 高频推动 |
| 3 | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) RFC：Work Lanes 与看板自动化 | 24 | 治理 RFC，Rev 26，已批准在推广 |
| 4 | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) RFC：细粒度沙箱文件系统策略 | 24 | 应用层与 OS 层（Bubblewrap/Landlock/Seatbelt）策略漂移问题 |
| 5 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) 维护者决策队列 | 15 | RFC 排队审理的中枢 |

**分析**：热点几乎全部是架构级 RFC，且多个出现"材料性替换导致旧投票作废"（#9487、#9488），说明核心设计在投票前仍在实质演化。@Audacity88 顺势提出 **[#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549)**：取消强制讨论窗口、让 REVISE 终止当前快照——直指治理摩擦，值得维护者优先裁决。

## 5. Bug 与稳定性（按严重度）

**S1（工作流阻断）**
- **[#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536)** macOS Seatbelt 忽略 `allowed_roots`，shell 命令报 Operation not permitted（P1，status:in-progress，修复进行中）

**P1 高危**
- **[#10533](https://github.com/zeroclaw-labs/zeroclaw/issues/10533)** `model_routing_config` 工具拒绝 `custom.*` 等合法 provider 槽位，与 config schema 不一致（status:in-progress）

**S2 降级行为**
- [#10625](https://github.com/zeroclaw-labs/zeroclaw/issues/10625) 非视觉模型下，`[media attachment]` 占位符原文透传给用户（Matrix 渠道）
- [#10626](https://github.com/zeroclaw-labs/zeroclaw/issues/10626) TTS 原样朗读 Markdown 与 emoji，未做清洗
- [#10534](https://github.com/zeroclaw-labs/zeroclaw/issues/10534) bounded delegate 无条件剥离 delegate 工具，违背 `delegation_policy` 配置——与 PR #10391 同域，可能有修复承接
- [#10532](https://github.com/zeroclaw-labs/zeroclaw/issues/10532) 降级配置提示可能调用与运行中 daemon 不同的二进制

**S3 轻微**
- [#10585](https://github.com/zeroclaw-labs/zeroclaw/issues/10585) 新 log sink 回归导致并行测试竞争（#10203 引入）

## 6. 功能请求与路线图信号

- **[#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050)**（已批准）网关 verbatim 渠道发送路由——gateway 已挂载 47 个 `/api/*` 路径却缺此能力，预计进入下一版本
- **[#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822)**（已批准）WASM 插件生命周期 Observer 能力，Rev 2 已由维护者接管收敛
- **[#10222](https://github.com/zeroclaw-labs/zeroclaw/issues/10222)**（已批准）交互式 agent 的单工具 provider 轮次 opt-in，改善工具间人机交互节奏
- **[#9975](https://github.com/zeroclaw-labs/zeroclaw/issues/9975)**（已批准）`web_dist_dir` 的 Web bundle/daemon 兼容契约（中心能力协商）
- **[#10530](https://github.com/zeroclaw-labs/zeroclaw/issues/10530)** 经 OpenAI 兼容网关透传 Anthropic extended-thinking 参数——企业代理部署场景刚需，尚无对应 PR，为下版本候选
- **[#10641](https://github.com/zeroclaw-labs/zeroclaw/issues/10641)**（已批准，help-wanted）Web 端 cron 表达式分字段输入与校验——适合社区新贡献者认领

## 7. 用户反馈摘要

- **部署多样性**：Termux/Android（#7911）、Windows 自更新（#7910）等边缘平台用户活跃，安装脚本与二进制选择问题已获修复
- **企业代理场景**：多 Issue 涉及 LiteLLM、TrueFoundry 等 OpenAI 兼容网关（#10530、#10533），显示生产部署占比上升，对 provider 路由正确性要求提高
- **语音/多模态体验**：TTS 朗读 Markdown（#10626）、媒体占位符透传（#10625）表明实时聊天新能力上线后体验打磨尚需跟进
- **治理参与度**：RFC 评论区高频出现 AI 辅助起草标注（"Drafted with Codex"），社区协作模式正在演变，也解释了 #10549 对流程精简的诉求

## 8. 待处理积压

- **[#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391)**（8-26 开立，XL，needs-author-action）：bounded delegate 文件系统工具尊重目标 agent workspace——安全问题（#9872），多个关联 bug（#10534）等待此修复落地，建议维护者优先推进
- **[#10016](https://github.com/zeroclaw-labs/zeroclaw/pull/10016)**（8-15，XL）：webhook 审计按身份关联，长期 needs-maintainer-review
- **[#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966)**（7-11，XL）：上下文窗口计量修复（context meter 天花板错误），挂起近两月，影响 TUI/Web 显示准确性
- **[#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320)**（7-23，XL）：cron 任务 wall-clock 超时与锁释放，卡在 needs-author-action
- **[#10356](https://github.com/zeroclaw-labs/zeroclaw/pull/10356)**、**[#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997)**：均标记 blocked/do-not-merge，需明确推进或关闭决策
- RFC 决策队列 **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** 中 #9487/#9488 等高影响 RFC 等待重开投票，建议维护者批量处理以避免设计阻塞下游实现

---
*数据来源：GitHub API（Issues/PR/Releases），统计窗口 2026-09-05 至 2026-09-06。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 · 2026-09-06

## 1. 今日速览

项目今日保持**高度活跃**：过去 24 小时 Issues 更新 50 条（新开/活跃 47，关闭 3），PR 更新 50 条（待合并 45，合并/关闭 5），无新版本发布。社区讨论焦点集中在**更新/安装链路的可靠性**（root 文件、fleet 反复重启、ZIP 回退破坏安装）与**多 Bot 群聊架构**的后续落地。今日新提交了一批高质量修复 PR（内存合并清空档案、checkpoint 中文文件名恢复、浏览器误启动用户 Chrome 等），显示贡献响应速度较快，但安装/更新类长期积压问题仍未系统性解决。

## 2. 版本发布

今日无新版本发布。最新版本仍为 v0.20.6（2026.8.27）。

## 3. 项目进展

今日合并/关闭 5 个 PR，主要方向：

- **[#102624](https://github.com/NousResearch/hermes-agent/pull/102624)** (CLOSED, duplicate) — packaging 修复 `hermes_state_holders/_registry` py-modules 缺失，与已有工作重复被关闭。
- **[#104008](https://github.com/NousResearch/hermes-agent/pull/104008)** (CLOSED) — 会话/内存相关 feature PR 被作者撤回。

关闭的 Issues 中值得注意的是：
- **[#30563](https://github.com/NousResearch/hermes-agent/issues/30563)** — MCP server 名称与原生 toolset 静默冲突问题已关闭。
- **[#45876](https://github.com/NousResearch/hermes-agent/issues/45876)** — cron 会话中 web_search 回落到 DDGS 超时问题标记 `implemented-on-main` 关闭。

待合并管道中高价值 PR 持续推进：可插拔会话存储 **[#104018](https://github.com/NousResearch/hermes-agent/pull/104018)**（RFC #23717 Phase 1）、实时语音 WebSocket **[#103279](https://github.com/NousResearch/hermes-agent/pull/103279)**、bot-to-bot DM 循环防护 **[#103888](https://github.com/NousResearch/hermes-agent/pull/103888)**。

## 4. 社区热点

**最活跃讨论：**

1. **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)**（163 评论）— Skills index watchdog 报告索引陈旧（29.8h > 26h 上限）。自动化探针持续报警但长期未修复，暴露 CI 看门狗"报了没人管"的运维缺口。
2. **[#97681](https://github.com/NousResearch/hermes-agent/issues/97681)**（23 评论）— "Desktop 关闭后 Bot 群聊继续运行"。网关所有权与跨网关传输已进 main，社区在讨论剩余生产化路径，是当前架构层面的核心议题。
3. **[#26058](https://github.com/NousResearch/hermes-agent/issues/26058)**（10 评论，👍5）— `free_response_channels` 中 auto_thread 被完全禁用，破坏合法用例，P1 且 `needs-decision`，等待维护者裁决。
4. **[#98022](https://github.com/NousResearch/hermes-agent/issues/98022)**（10 评论）— 陈旧 `update_receipts/latest.json` 导致 #95294 的 catch-up 修复在每次运行时反复触发 fleet 重启，修复引发新回归的典型案例。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| **P1** | [#98022](https://github.com/NousResearch/hermes-agent/issues/98022) | `hermes update` catch-up 重启死循环 | 暂无 PR |
| **P1** | [#26058](https://github.com/NousResearch/hermes-agent/issues/26058) | Discord auto_thread 合法用例被破坏，`needs-decision` | 暂无 PR |
| **P1** | [#97394](https://github.com/NousResearch/hermes-agent/issues/97394) | Windows Desktop 更新 watchdog 因 `--gateway` 模式不写 update.log 而误杀健康更新 | 暂无 PR |
| **P2** | [#103419 → PR #104019](https://github.com/NousResearch/hermes-agent/pull/104019) | 内存合并批次可静默清空 USER.md | ✅ 已有 PR（今日提交） |
| **P2** | [#103949](https://github.com/NousResearch/hermes-agent/issues/103949) | Linux+NVIDIA 上 `select_backend()` 返回 cuda 但无 Linux CUDA 预编译，auto 后端必失败 | 暂无 PR |
| **P2** | [#103989](https://github.com/NousResearch/hermes-agent/issues/103989) | `hermes auth add openai-codex --type oauth` 显示成功但凭证未持久化 | 暂无 PR |
| **P2** | [#103978](https://github.com/NousResearch/hermes-agent/issues/103978) | Claude OAuth 自动发现会刷新一次性 token 导致 Claude CLI 登出，且涉 Anthropic ToS 冲突，需 opt-out | 暂无 PR |
| **P2** | [#103995 → PR #104016](https://github.com/NousResearch/hermes-agent/pull/104016) | checkpoint 安全恢复无法还原中文/前导空格文件名 | ✅ 已有 PR |
| **P3** | [#103870](https://github.com/NousResearch/hermes-agent/issues/103870) | #81995 修复引入 `coroutine never awaited` RuntimeWarning（修复致回归） | 暂无 PR |
| **P3** | [#104015](https://github.com/NousResearch/hermes-agent/pull/104015) | browser_exec 仍可能自动启动用户 Chrome（隐私风险） | ✅ 已有 PR |

**安全相关**：[#102193](https://github.com/NousResearch/hermes-agent/issues/102193) 持续报告 `hermes update` 在 `~/.hermes/` 下创建 root 属主文件破坏后续更新，与 [#91212](https://github.com/NousResearch/hermes-agent/issues/91212) 同源，为多月份老问题。

## 6. 功能请求与路线图信号

- **Pluggable SessionDB**（[PR #104018](https://github.com/NousResearch/hermes-agent/pull/104018)，RFC #23717 Phase 1）— 会话存储抽象化落地中，零行为变更设计便于合入，是明确的路线图工作。
- **Off-device 实时语音**（[PR #103279](https://github.com/NousResearch/hermes-agent/pull/103279)）— 服务器持有 VAD/STT/TTS/barge-in 的 WS `/v1/audio/converse`，重大新能力，有望进下一版本。
- **Plan mode**（[#80994](https://github.com/NousResearch/hermes-agent/issues/80994)，`needs-decision`）— 只读探索阶段需求，社区呼声稳定，等待维护者决策。
- **/steer 溯源元数据**（[#104003](https://github.com/NousResearch/hermes-agent/issues/104003)）— 与 bot-mode PR #103888 生态一致，可能被顺带纳入。
- **config.yaml 注释保留**（[PR #72581](https://github.com/NousResearch/hermes-agent/pull/72581)）— ruamel round-trip 方案，长期打磨中。

## 7. 用户反馈摘要

**痛点集中区：**
- **更新链路是最大抱怨源**：@eabase 密集提交多条 issue（[#102540](https://github.com/NousResearch/hermes-agent/issues/102540) 更新耗时 6 分钟、[#83673](https://github.com/NousResearch/hermes-agent/issues/83673) venv 内 112 个 Python 包过半过期含 certifi、[#102563](https://github.com/NousResearch/hermes-agent/issues/102563) 要求发布前跑 npm audit），核心诉求是**依赖卫生与更新可预测性**。
- **隐私与边界**：[#102183](https://github.com/NousResearch/hermes-agent/issues/102183) 用户强烈不满未经授权自动配置十余个消息平台；[#103978](https://github.com/NousResearch/hermes-agent/issues/103978) 自动消费 Claude CLI 凭证"顺带把用户登出"，反映对 Hermes 触碰宿主环境凭证/浏览器的担忧。
- **国际化边缘案例**：中文文件名恢复失败（#104016）、德语填充词触发群聊 hold（[#103893](https://github.com/NousResearch/hermes-agent/issues/103893)）。

**正面信号**：贡献者响应迅速（多个 issue 当天获得修复 PR）；AI 辅助报告工作流被社区接受并标注（如 #104005 的 Hermes 自我披露）；多 Bot 群聊架构推进获用户期待。

## 8. 待处理积压

| 项目 | 年龄 | 提醒 |
|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | ~50 天 | 163 条评论的自动化报警长期 degraded，应修复 CI cron 或调整阈值 |
| [#26058](https://github.com/NousResearch/hermes-agent/issues/26058) | ~4 个月 | P1 + needs-decision，👍5，Discord 用户受阻 |
| [#43847](https://github.com/NousResearch/hermes-agent/issues/43847) | ~3 个月 | gateway kill-safety 泛化加固，安全相关 |
| [#80994](https://github.com/NousResearch/hermes-agent/issues/80994) | ~1 个月 | Plan mode 决策悬置 |
| [PR #29031](https://github.com/NousResearch/hermes-agent/pull/29031) | ~3.5 个月 | computer-use 跨 Space 窗口定位，macOS 用户核心功能 |
| [PR #39130](https://github.com/NousResearch/hermes-agent/pull/39130) | ~3 个月 | Honcho sessionAiPeerPrefix |
| [#91212](https://github.com/NousResearch/hermes-agent/issues/91212) / [#102193](https://github.com/NousResearch/hermes-agent/issues/102193) | 持续数月 | root 属主文件问题被反复报告，建议一次性系统性修复（如统一 umask/权限审计）而非点补丁 |

**健康度小结**：功能开发节奏健康、贡献响应快，但安装/更新子系统的高频回归与长期积压是当前最突出的技术债，建议在下一版本前集中治理。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-09-06

## 1. 今日速览

过去 24 小时 PicoClaw 仓库共产生 **5 条更新**（2 条 Issues、3 条 PR），无新版本发布，整体活跃度处于**中低水平**。三条 PR 均为批量合并修复类 PR 的“汇总 PR”，且在同日（9 月 5 日）被关闭，说明维护者近期在做**积压 PR 的集中清理与整并**。社区侧，关于 IRC 长消息支持的 Feature 讨论（#3287）持续发酵，评论已达 10 条，是当前最热话题。

## 2. 版本发布

今日无新版本发布。（最新 Releases：无）

## 3. 项目进展

今日无 PR 被合并，但 3 条“合并型汇总 PR”被关闭，值得注意：

- **[PR #1559](https://github.com/sipeed/picoclaw/pull/1559)** — 汇总 #1327 / #1319 / #1318 / #1313 的修复（关闭）
- **[PR #1545](https://github.com/sipeed/picoclaw/pull/1545)** — 汇总 #1500 / #1490 / #1488 / #1487 / #1485 的修复（关闭）
- **[PR #PR #1555](https://github.com/sipeed/picoclaw/pull/1555)** — 汇总 #1390 / #1389 / #1383 / #1381 的修复（关闭）

⚠️ **分析**：这三条 PR 由 @xuwei-xy 于 2026-03-14 创建，目的是将社区多个零散修复 PR 整并为一条，但在搁置近半年后于 9 月 5 日被统一关闭而非合并。这意味着 **约 12+ 个原始修复 PR（#1381–#1500 区间）的去向不确定**——可能已通过其他方式合入，也可能被放弃。建议维护者公开说明这些修复是否已落地，避免社区贡献者困惑。

## 4. 社区热点

**🔥 [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)** — `[Feature] Better support long messages in IRC`（OPEN，10 条评论）

当前讨论最活跃的话题。IRC 协议默认单条消息上限 512 字节，超长消息会被客户端自动切分，而 PicoClaw 目前将这些分片视为多条独立消息处理，导致上下文理解碎片化。用户 @superuser-does 希望支持 **IRCv3 的消息分片重组**，将长消息还原为单一完整语义单元。10 条评论表明有较多 IRC 用户受此影响，诉求集中在**协议兼容性**层面。

## 5. Bug 与稳定性

今日无新增 Bug / 崩溃 / 回归类 Issue 报告。已关闭的 #3342 属于功能设计讨论（见下节），非稳定性问题。

## 6. 功能请求与路线图信号

| 功能请求 | 状态 | 纳入可能性评估 |
|---|---|---|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) IRC 长消息分片重组 | OPEN，持续讨论中（7-22 创建，9-05 仍有更新） | **较高**——讨论热度高、诉求明确，且属于协议层兼容性补齐 |
| [#3342](https://github.com/sipeed/picoclaw/issues/3342) Opt-in "after-turn" steering 模式 | **已关闭（stale）** | 低——用户希望 busy 会话期间的新消息排队而非打断当前 turn（当前行为会跳过任务 #1 的剩余工具调用）。但被标记 stale 后关闭，属于**机器人自动清理**而非官方明确拒绝，原诉求仍有价值 |

## 7. 用户反馈摘要

- **IRC 用户痛点**：长消息被切分后 PicoClaw 语义理解断裂，多轮对话质量下降（#3287，10 条评论的持续追问反映真实使用困扰）。
- **会话打断体验不佳**：#3342 反映 steering 机制对部分用户过于激进——“Skipped due to queued user message” 导致前序任务被静默跳过，用户希望有 opt-in 的排队模式。此反馈虽被 stale 关闭，但暴露了**任务连续性与用户控制权**的普遍诉求。

## 8. 待处理积压

- **[#3287](https://github.com/sipeed/picoclaw/issues/3287)**：已挂起 **46 天**（7-22 创建）仍未有官方回应或关联 PR，但社区持续活跃。建议维护者尽快给出路线图判断。
- **PR #1545 / #1555 / #1559 及其引用的原始修复 PR（#1381–#1500 区间）**：创建近 6 个月后集中关闭，去向不明。建议发布说明或 issue 澄清这些社区修复是否已合入主干，避免贡献流失。
- **通用提醒**：#3342 因 stale 被关闭的模式提示项目存在**响应延迟 → stale 机器人关闭**的循环，可能掩盖真实需求，建议对高价值 feature 请求设置人工复审环节。

---
*数据来源：GitHub 公开 API（过去 24 小时窗口）｜生成时间：2026-09-06*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-06

> 数据周期：2026-09-05 至 2026-09-06（过去 24 小时）

---

## 1. 今日速览

NanoClaw 今日整体处于**低活跃但持续推进维护工作**的状态。过去 24 小时无新开 Issue、无版本发布，但新增 3 个待合并 PR（累计待合并 3 条，无合并/关闭记录）。从 PR 内容看，社区贡献集中在**安装脚本修复、测试卫生和文档/示例更新**三个方向，属于典型的稳定期维护节奏，项目核心功能无重大变更。

---

## 2. 版本发布

今日无新版本发布，最新 Release 状态为空。

---

## 3. 项目进展

今日无 PR 被合并或关闭，3 条 PR 均处于 OPEN 待审状态：

- **#3725** fix(setup): 将 Linux signal-cli 固定版本从 0.14.3 升级到 0.14.7 —— 修复新安装环境下 signal-cli 发送消息到无既有会话联系人时可能**无限挂起**的问题。([PR #3725](https://github.com/nanocoai/nanoclaw/pull/3725))
- **#3710** test: 清理测试套件遗留的临时目录 —— 完整 `pnpm test` 每次运行会遗留 **约 355 个临时目录**，长期污染开发机和 CI runner 的 /tmp。今日（09-05）有更新，仍在推进中。([PR #3710](https://github.com/nanocoai/nanoclaw/pull/3710))
- **#3724** 更新 add-opencode skill 中已退役的 Anthropic 模型 ID —— 将示例中 `claude-sonnet-4-20250514`（已于 2026-06-15 退役）替换为 `claude-sonnet-5`。([PR #3724](https://github.com/nanocoai/nanoclaw/pull/3724))

**评估**：均为维护性质贡献，无功能级推进；Signal 渠道安装修复 (#3725) 对新用户首次部署体验影响较大，建议优先评审。

---

## 4. 社区热点

今日无活跃 Issue，PR 评论数据缺失（均为 undefined），无法识别明显讨论热点。从 PR 标签分布看，`area/setup-installation`（2 条）和 `area/skills`（2 条）是近期贡献者关注度最高的区域，反映社区对**安装可靠性与 skill 示例正确性**的诉求。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🟠 中 | signal-cli 0.14.3 在无既有会话联系人场景下发送消息无限挂起，影响 Linux 新装用户 | ✅ 已有 fix PR [#3725](https://github.com/nanocoai/nanoclaw/pull/3725)，待合并 |
| 🟡 低 | 测试套件遗留 ~355 个临时目录/次，tmpfs 环境下内存压力持续累积 | ✅ 已有 fix PR [#3710](https://github.com/nanocoai/nanoclaw/pull/3710)，待合并 |
| 🟡 低 | add-opencode skill 示例使用已退役模型 ID，用户照抄示例会配置失败 | ✅ 已有 fix PR [#3724](https://github.com/nanocoai/nanoclaw/pull/3724)，待合并 |

今日无崩溃或回归类问题报告。

---

## 6. 功能请求与路线图信号

今日无新功能请求。可关注的间接信号：

- **Signal 渠道持续维护**（#3725 涉及 `area/channels`）：表明多渠道消息接入仍是项目重点支撑方向。
- **开发者体验（DX）改善**（#3710）：测试基础设施卫生属于 CI/长期维护投资，暗示维护团队在为更大规模测试做准备。

---

## 7. 用户反馈摘要

今日无 Issue 评论数据可提炼。从 PR 描述可间接推断的痛点：

- **新用户部署受阻**：Linux 端 Signal 安装即踩坑（挂起无报错），属于最伤首次体验的问题类型。
- **文档/示例时效性**：示例中模型 ID 过期会导致照抄即失败，反映快速迭代的 LLM 生态对项目文档维护的持续压力。

---

## 8. 待处理积压

- **3 条待合并 PR 均无人评审**（#3724、#3725 于 09-05 创建至今无评论），建议维护者优先处理 #3725（直接影响新用户 Signal 安装可用性）。
- **#3710**（09-03 创建）已开放 3 天，涉及 5 个 area 标签、横跨测试与 CLI 基础设施，评审成本较高，建议明确 reviewer 拆分处理。

---

**健康度小结**：⚡ 无阻塞缺陷 · 📉 Issue 活跃度低（可能为周末效应）· ⏳ PR 评审积压 3 条 · 建议 24-48 小时内完成 #3725 / #3724 的快速评审合并。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-09-06

## 1. 今日速览

IronClaw 今日整体活跃度处于低位平稳状态：过去 24 小时内仅有 1 条 Issue 更新与 1 条 PR 更新，无新版本发布、无合并/关闭动作。核心动态集中在两处：一条关于配对用户在未连接共享频道中收到错误提示文案的 Bug 报告（[#8074](https://github.com/nearai/ironclaw/issues/8074)），以及一项将嵌入式 Pi sandbox 循环设为启动默认的重量级功能 PR（[#8075](https://github.com/nearai/ironclaw/pull/8075)，size: XL）。尽管更新数量不多，但后者涉及沙箱架构层面的默认行为变更，属于对项目运行时形态有深远影响的改动，值得持续跟踪。

## 2. 版本发布

今日无新版本发布，无相关迁移事项。

## 3. 项目进展

今日无已合并或已关闭的 PR，项目在主干上无直接推进。

但需关注正在进行的重量级工作：

- **[#8075](https://github.com/nearai/ironclaw/pull/8075) feat: make the embedded Pi sandbox loop the startup default**（OPEN，size: XL，risk: low，scope: sandbox + docs，core 贡献者 @serrrfirat）
  - 为 sandbox 镜像添加固定版本（pinned）的 Bun/Pi agent-core worker，并将其设为全新启动的默认配置，明确服务于 benchmark 使用场景；默认启动 profile 变更为 `hosted-…`。
  - **注意**：该 PR 堆叠于 #7908 之上（base 分支 `feat/7903-native-loop-sandbox-spike`），维护者明确标注“不得先于 base PR 合并”，属于原生循环沙箱（native loop sandbox）技术线的延续。风险标注为 low，但因体量为 XL 且改变默认启动行为，落地节奏取决于底层 spike PR 的进展。

## 4. 社区热点

今日活跃度最高的是 Bug Issue [#8074](https://github.com/nearai/ironclaw/issues/8074)（1 条评论，由 @thisisjoshford 于 2026-09-04 提出，昨日有更新）：

- **问题核心**：配对（paired）用户在共享频道中执行操作时，若该频道对其 installation 处于未连接状态，系统返回的是面向“未配对操作者”的 `connect_required` 文案（“请在 IronClaw Web 应用中连接你的账户……”），而非面向“频道未连接”场景的正确提示。
- **诉求分析**：这是一个典型的权限/状态机分支文案错配问题，反映社区对多用户配对场景下错误提示精确性的要求。项目已进入精细化打磨阶段，说明配对 + 共享频道功能已有真实用户在深度使用。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 低（文案/UX 错误，不影响功能） | [#8074](https://github.com/nearai/ironclaw/issues/8074) 配对用户在未连接共享频道中收到错误的 `connect_required` 提示文案 | OPEN，**尚无关联 fix PR** |

今日无崩溃、回归或高危稳定性问题报告。#8074 虽严重程度不高，但涉及用户引导路径（连接账户流程）的文案误导，可能降低配对用户完成连接的转化率，建议尽快排期修复。

## 6. 功能请求与路线图信号

今日无新功能请求 Issue，但从 PR 动态可提取明确的路线图信号：

- **原生沙箱循环成为默认**：[#8075](https://github.com/nearai/ironclaw/pull/8075) 表明团队正将嵌入式 Pi agent-core（Bun runtime）从实验性 spike（#7903/#7908）推向默认启动路径，且首要驱动是 **benchmark 可复现性**（pinned worker 版本）。可预期后续版本中 sandbox 启动 profile、文档将围绕此默认行为重写。
- 判断：该功能极大概率随 base PR #7908 一并进入下一版本，属于下一版本的核心变更之一。

## 7. 用户反馈摘要

从 #8074 的描述与评论可提炼：

- **使用场景**：多用户配对（paired users）+ 跨 installation 的共享频道协作，属于较高级的团队使用形态。
- **痛点**：错误提示文案与实际用户状态不匹配——用户已是配对状态，却被引导去完成面向未配对用户的“连接账户”操作，造成困惑。
- **满意度信号**：问题被清晰复现并附带 manifest 文案细节（`connect_required`），报告质量较高，说明报告者（疑似社区活跃成员/内部成员 @thisisjoshford）对产品细节关注度高，属建设性反馈。

## 8. 待处理积压

- [#8074](https://github.com/nearai/ironclaw/issues/8074)：创建于 09-04，已活跃 2 天，尚无修复 PR 或明确的维护者响应，建议关注并指定处理人。
- [#8075](https://github.com/nearai/ironclaw/pull/8075)：因堆叠依赖被阻塞于 #7908，建议维护者同步推进 base PR 的评审，避免 XL 级 PR 长期滞留引发 rebase 成本上升。

---

*数据来源：GitHub（nearai/ironclaw），统计窗口为过去 24 小时。总体来看，项目处于“大改动蓄势期”——主干安静，但沙箱架构级变更正在后台推进，健康度正常。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-09-06）

## 1. 今日速览

LobsterAI 今日整体活跃度**较低**：过去 24 小时无新 Issue、无 Issue 更新、无版本发布，仅 2 条 PR 处于待合并状态且无新评论互动。值得注意的是，这两条待合并 PR 均被标记为 `[stale]`，最后更新时间为 2026-09-05，且创建于 2026-03-30，已搁置超过 5 个月，反映出**外部贡献停滞、维护者响应不足**的健康度隐忧。项目当前处于功能迭代缓慢、社区反馈冷淡的阶段，建议关注维护节奏。

## 2. 版本发布

过去 24 小时无新版本发布，最新 Releases 列表为空。

## 3. 项目进展

今日无 PR 被合并或关闭，项目功能面**无实质推进**。2 条待合并 PR 均为质量改进方向：

- **#1069**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1069)）：重构对话核心组件 `CoworkSessionDetail.tsx`（2100+ 行），拆分为类型定义、纯函数、子组件等多文件，解决单文件职责过重及流式输出时不必要重渲染问题。属于代码可维护性与渲染性能的重要技术债清理。
- **#1070**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1070)）：新增 per-session MCP 开关，支持在会话级独立启用/禁用 MCP server，状态持久化到 DB，并在 McpBridgeServer 层对 OpenClaw 引擎实现请求拦截。属于面向桌面级 Agent 的实用功能增强。

两条 PR 质量描述详尽、方向合理，若能合并将为后续迭代打好基础。

## 4. 社区热点

今日无任何 Issue/PR 新增评论或反应（👍 均为 0，评论数为 undefined/无），**社区讨论热度为零**，无热点可提炼。

## 5. Bug 与稳定性

过去 24 小时无新报告的 Bug、崩溃或回归问题。

## 6. 功能请求与路线图信号

- 今日无新增功能请求。
- 从存量 PR 看，#1070（per-session MCP 开关）直接回应了“MCP server 仅支持全局开关、无法按会话场景独立配置”的痛点，属于明确的功能补齐信号，**最有可能被纳入下一版本**——前提是维护者先处理其 stale 状态。
- #1069 属于内部架构优化，通常作为功能性发布的前置工作。

## 7. 用户反馈摘要

过去 24 小时无 Issue 评论可分析，无法提炼用户痛点与反馈。

## 8. 待处理积压

以下 2 条 PR 长期未获维护者响应，已被标记 `[stale]`，建议维护者优先评审或说明搁置原因，避免贡献者流失：

| PR | 主题 | 创建 | 状态 | 风险 |
|---|---|---|---|---|
| [#1069](https://github.com/netease-youdao/LobsterAI/pull/1069) | 拆分 CoworkSessionDetail 单文件（可维护性/渲染性能） | 2026-03-30 | OPEN [stale]，搁置 5+ 月 | 技术债持续累积，与主分支冲突风险增大 |
| [#1070](https://github.com/netease-youdao/LobsterAI/pull/1070) | per-session MCP 开关控制 | 2026-03-30 | OPEN [stale]，搁置 5+ 月 | 用户可感知的功能需求被搁置，可能抑制后续外部贡献 |

**健康度提示**：连续 24 小时零 Issue 活动叠加 2 条 stale PR，是项目维护活跃度下降的明显信号，建议关注后续数周维护者是否恢复响应。

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

# CoPaw 项目动态日报 — 2026-09-06

## 1. 今日速览

CoPaw 今日保持中高活跃度：过去 24 小时 Issues 更新 11 条（新开/活跃 8，关闭 3），PR 更新 5 条（全部待合并，无合并/关闭）。社区贡献亮点突出——两位首次贡献者（@kabishou11）针对昨日高热度 Bug 迅速提交了修复 PR（#7577、#7578），社区响应速度值得肯定。多租户版 Hub 的 2.2.0 路线图讨论（#7318）持续发酵，评论已达 23 条，是当前最重要的方向性讨论。整体项目健康度良好，Bug 报告质量高且修复跟进及时，但 5 个 PR 全部处于待合并状态，合并吞吐略有积压。

## 2. 版本发布

今日无新版本发布。（注：Issues 中提及 2.2.0，但仓库无对应 Release 条目，推测仍在开发分支阶段。）

## 3. 项目进展

今日无 PR 合并，但待合并 PR 队列中有多个高质量提交：

- **[PR #7577](https://github.com/agentscope-ai/QwenPaw/pull/7577)**（首次贡献者）：修复控制台任务运行中发送新消息触发 409 的问题，改为将后续消息加入队列——直接响应 Issue #7559，社区自愈能力体现。
- **[PR #7578](https://github.com/agentscope-ai/QwenPaw/pull/7578)**（首次贡献者）：为 `_coordinator.py` `_drain()` 增加异常日志记录，修复异常栈被吞的问题，对应 Issue #7572。
- **[PR #7509](https://github.com/agentscope-ai/QwenPaw/pull/7509)** [Ready for Merge]：Make Skill v2，引入审批驱动的“草稿-发布”式 Skill 创建工作流，等待维护者合并。
- **[PR #7569](https://github.com/agentscope-ai/QwenPaw/pull/7569)**：新增 Advisor Mode——双模型协作循环模式（强模型作顾问 + 低成本模型作执行者），是有潜力的成本优化特性。
- **[PR #6874](https://github.com/agentscope-ai/QwenPaw/pull/6874)** [Under Review]：MCP 工具调用可配置超时（`tool_call_timeout`，默认 300s），已评审近一个月，接近落地。

**今日关闭 Issue 3 条**（#7474、#7574、#7575），其中 img-gen skill 的两个 API 兼容 Bug 均快速关闭，显示维护者对 skill 层问题的处理效率较高。

## 4. 社区热点

- **[#7318 — QwenPaw Hub 多租户版 2.2.0 路线图讨论](https://github.com/agentscope-ai/QwenPaw/issues/7318)**（23 评论，👍3）：项目从个人助手向团队/多租户方向演进的关键讨论，回应了社区长期的 #2324（多用户访问与管理员技能管理）等诉求。这是当前最能反映项目战略方向的讨论帖。
- **[#7559 — 任务执行中新消息触发 409](https://github.com/agentscope-ai/QwenPaw/issues/7559)**（5 评论）：用户期望“消息入队”而非报错，交互体验类问题引发共鸣，当天即有修复 PR（#7577）响应。
- **[#7474 — 自定义提供商加载失败（已关闭）](https://github.com/agentscope-ai/QwenPaw/issues/7474)**（5 评论）：由 PR #7337 引入的 `max_tokens` → `max_output_length` 迁移引发的回归，反映破坏性配置迁移的沟通与兼容问题。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) | `RetryChatModel` 硬编码 32768 context_size 兜底，导致所有模型报 CONTEXT_UNFIT（>31130 tokens），**v2.1.0 起所有已发布版本均受影响** | ❌ 暂无 fix PR |
| 🔴 高 | [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474)（已关闭） | PR #7337 引发的 custom provider 配置迁移回归 | ✅ 已关闭（确认修复） |
| 🟠 中 | [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) | 任务执行中新消息返回 409，而非入队 | ✅ PR #7577 待合并 |
| 🟠 中 | [#7572](https://github.com/agentscope-ai/QwenPaw/issues/7572) | 工具派发层 `_drain()` 吞异常栈，故障无法定位，日志零痕迹 | ✅ PR #7578 待合并 |
| 🟡 低 | [#7574](https://github.com/agentscope-ai/QwenPaw/issues/7574)（已关闭） | img-gen skill 请求体缺 `model` 字段导致 503 回退到 dall-e-2 | ✅ 已关闭 |
| 🟡 低 | [#7575](https://github.com/agentscope-ai/QwenPaw/issues/7575)（已关闭） | img-gen `edit()` 无条件发送 `response_format` 导致 gpt-image-2 报 400 | ✅ 已关闭 |

**重点提醒**：#7576 影响所有已发布版本且尚无修复，建议维护者优先处理。

## 6. 功能请求与路线图信号

- **[#7318 多租户 Hub](https://github.com/agentscope-ai/QwenPaw/issues/7318)**：已明确纳入 2.2.0，是目前最确定的路线图项。
- **[#7557 Skill 版本与依赖元数据](https://github.com/agentscope-ai/QwenPaw/issues/7557)**：多 Agent 部署（用户提到 9 个 Agent）下 Skill 无法版本化、更新需逐工作区复制。与待合并的 **PR #7509（Make Skill v2）** 高度相关，v2 落地后很可能顺势纳入。
- **[#7573 Web UI "编辑上一条消息" 与 "回退" 按钮](https://github.com/agentscope-ai/QwenPaw/issues/7573)**：会话级交互补全需求，实现成本低、用户价值高，候选纳入下一版本。
- **[#7570 飞书思考过程自动折叠](https://github.com/agentscope-ai/QwenPaw/issues/7570)**：用户已提供本地验证可行的实现方案（collapsible_panel），属“送分题”级 PR 素材。
- **PR #7569 Advisor Mode / PR #6874 MCP 超时**：均在评审中，落地概率较大。

## 7. 用户反馈摘要

**痛点**：
- **记忆/约束遵守不可靠**（[#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571)）：用户反复强调的路径规则（TODO 文件位置、开发目录）仍被违反，甚至导致插件部署覆盖事故——反映长期记忆与指令持久化机制是核心短板。
- **并发交互体验**（#7559）：用户默认预期对话式排队，而非 409 拒绝。
- **可观测性不足**（#7572）：排障时日志无异常栈，运维体验差。
- **配置迁移成本**（#7474）：字段重命名未提供兼容或迁移提示，升级即坏。

**满意点**：
- 飞书 CardKit 流式输出（#3001）获好评“用着不错”，用户主动基于其做增强。
- Skill 透明目录结构（SKILL.md + files）被认可，问题只在规模化后的版本管理。
- 社区对 Hub 多租户方向热情高，讨论参与度活跃。

**典型场景**：Windows 个人用户、插件开发者、多 Agent 集群运维者、飞书企业集成用户——用户群体正在从个人玩家向团队化使用扩展。

## 8. 待处理积压

- **[PR #6874 — MCP 工具调用超时](https://github.com/agentscope-ai/QwenPaw/pull/6874)**：8 月 10 日创建，已评审近一个月仍未合并，建议维护者推进。
- **[Issue #7576 — RetryChatModel context_size 硬编码](https://github.com/agentscope-ai/QwenPaw/issues/7576)**：影响全版本用户，尚无修复 PR，优先级应提升。
- **[PR #7509 — Make Skill v2](https://github.com/agentscope-ai/QwenPaw/pull/7509)**：标记 Ready for Merge，与 #7557 需求形成呼应，建议尽快合并以解锁后续 Skill 生态演进。
- **[Issue #7571 — 记忆遗忘问题](https://github.com/agentscope-ai/QwenPaw/issues/7571)**：仅 1 条评论，属核心能力类反馈，建议维护者给出 workaround（如 system prompt / memory 配置建议）并纳入长期规划。

---
*数据来源：CoPaw GitHub 仓库，统计窗口 2026-09-05 至 2026-09-06。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 — 2026-09-06

## 1. 今日速览

ZeptoClaw 今日呈现**高活跃度、安全导向**的开发态势：过去 24 小时内 Issues 更新 14 条（新开/活跃 10，关闭 4），PR 更新 8 条（含 2 个安全修复 PR 当日创建并关闭），无新版本发布。项目核心工作围绕一份深度架构评审（`docs/reviews/2026-09-06-hermes-comparison-review.md`）展开，两个 P0 级安全问题（子进程环境变量泄漏、agent_mode 失败开放）当日即完成修复闭环，体现出极快的响应速度。同时评审衍生的 9 个 P2/P3 级架构改进 Issue 集中落单，勾勒出清晰的路线图。整体健康度：**优秀**——单人维护节奏稳定、安全响应敏捷、技术债被系统化管理。

## 2. 版本发布

今日无新版本发布。值得关注的是 PR #645 关闭的 CI 修复工作（Issue #646：恢复 Clippy 与 cargo-deny 检查，涉及 quick-xml 0.39.2 和 lopdf 0.40.0 的已知漏洞依赖），提示近期可能有一次以安全加固为主题的版本发布。

## 3. 项目进展

今日完成 **4 个安全相关 Issue + 3 个 PR** 的关闭，安全态势显著收敛：

- **PR #671**（fix(security): fail closed on invalid agent_mode，[链接](https://github.com/qhkm/zeptoclaw/pull/671)）：修复 `agent_mode` 在无效/拼写错误时回退到 `Autonomous`（最大权限）的失败开放缺陷，现回退到 `Assistant` 并警告。关闭 [Issue #659](https://github.com/qhkm/zeptoclaw/issues/659)。
- **PR #672**（fix(security): scrub inherited env，[链接](https://github.com/qhkm/zeptoclaw/pull/672)）：在 plugin/MCP 三处未清洗的 spawn 点清理继承的环境变量，阻断 API 密钥等机密泄漏到子进程。关闭 [Issue #660](https://github.com/qhkm/zeptoclaw/issues/660)。
- **PR #645**（fix(runtime): scrub subprocess secrets and reap timed-out process trees，[链接](https://github.com/qhkm/zeptoclaw/pull/645)）：7 月启动的长周期 PR 今日关闭，完成运行时子进程密钥清洗与超时进程树回收，同时关闭 [Issue #644](https://github.com/qhkm/zeptoclaw/issues/644) 与 CI 基线修复 [Issue #646](https://github.com/qhkm/zeptoclaw/issues/646)。

**评估**：今日完成的是架构评审 §8（安全态势）中全部 P0 发现，安全短板基本补齐，项目从“存在可利用失败开放路径”推进到“P0 清零”状态，是实质性的一步。

## 4. 社区热点

讨论最多的仍是安全主线：

- [Issue #646](https://github.com/qhkm/zeptoclaw/issues/646)（3 条评论）：CI 基线修复，暴露 Rust 1.97.1 下 5 个新 Clippy 告警及两个带漏洞依赖（quick-xml、lopdf），反映维护者对供应链与静态检查的重视。
- [PR #672](https://github.com/qhkm/zeptoclaw/pull/672) / [PR #645](https://github.com/qhkm/zeptoclaw/pull/645)：子进程环境清洗系列，是评审中“文档声称无法验证”的安全声明的落地。
- 9 个新开架构 Issue（#661–#670）虽暂无评论，但作为评审执行项集中出现，实质上构成了下一阶段的工作清单，信号意义强于讨论热度。

社区诉求核心：**可验证的安全保证** 与 **架构债务的显性化管理**。

## 5. Bug 与稳定性

按严重程度排列（今日报告的全部为安全类，普通功能 Bug 无新增）：

| 严重度 | 问题 | 状态 |
|---|---|---|
| P0 | [Issue #659](https://github.com/qhkm/zeptoclaw/issues/659)：无效 agent_mode 回退到 Autonomous（权限最大化的失败开放） | ✅ 已由 PR #671 修复 |
| P0 | [Issue #660](https://github.com/qhkm/zeptoclaw/issues/660)：多 spawn 点未清洗继承环境，机密可泄漏至插件/MCP 子进程 | ✅ 已由 PR #672 修复 |
| P1 | [Issue #644](https://github.com/qhkm/zeptoclaw/issues/644)：超时后进程树未终止回收、环境继承泄漏凭据 | ✅ 已由 PR #645 修复 |
| P1 | [Issue #646](https://github.com/qhkm/zeptoclaw/issues/646)：CI 中断（Clippy + cargo-deny），漏洞依赖 quick-xml 0.39.2 / lopdf 0.40.0 | ✅ 已关闭（依赖修复随 PR #645 体系完成，建议关注后续 Release 确认依赖版本落地） |

## 6. 功能请求与路线图信号

今日新开的 #661–#670 为路线图提供了强信号，按优先级与规模：

**近期可能纳入（M 规模，P2-high）**：
- [#669](https://github.com/qhkm/zeptoclaw/issues/669) 审计链跨重启持久化与轮转 —— 安全姿态的延续，与今日 P0 修复同属 §8，优先级推断最高
- [#666](https://github.com/qhkm/zeptoclaw/issues/666) 跨会话持久记忆与事务性写入
- [#665](https://github.com/qhkm/zeptoclaw/issues/665) Cron Job v2（完成确认、运行台账）— RFC 已开
- [#664](https://github.com/qhkm/zeptoclaw/issues/664) 委托子代理能力继承不得超出父策略
- [#668](https://github.com/qhkm/zeptoclaw/issues/668) 密封式 seam 级集成测试
- [#667](https://github.com/qhkm/zeptoclaw/issues/667) Footprint Ladder + Extension Host v2

**长期项（L 规模）**：
- [#663](https://github.com/qhkm/zeptoclaw/issues/663) 完成 Agent Pipeline 迁移，替换 5,227 行的旧 AgentLoop（代码中已自述，迁移确定性高）
- [#662](https://github.com/qhkm/zeptoclaw/issues/662) 补全 channel-plugin 双向协议（当前仅出站、fire-and-forget）
- [#661](https://github.com/qhkm/zeptoclaw/issues/661) 字节稳定的 Prompt Envelope 契约（当前系统提示每轮重建、prompt-cache 不友好）— 评审标记为最大性能差距

**P3**：[#670](https://github.com/qhkm/zeptoclaw/issues/670) 配置来源透明化（effective-view / schema-backed get/set）

判断：下一版本大概率以 **安全加固 + 审计持久化（#669）** 为主题；#663 Pipeline 迁移作为代码内既定 Phase 4a 也将持续推进。

## 7. 用户反馈摘要

今日数据全部来自维护者 @qhkm 的评审驱动工作，无外部用户评论，可提炼的间接信号：

- **痛点（评审中自我识别）**：配置不透明（文件 vs 环境变量无法追溯生效来源，#670）；插件通道 README 宣称支持但实际只能单向推送（#662）；每轮重建系统提示导致 token 成本与缓存效率差（#661）；内置工具注册表手工维护十九组、二进制体积持续膨胀（#667）。
- **正面信号**：评审明确肯定选择性记忆检索（比 Hermes 的常驻 profile 更省）、委托子代理的并发与递归阻断、单测/组件测试深度——这些是项目相对竞品的差异化优势，应保持。
- **期待**：可验证的安全声明、跨重启的审计证据、真实的调度可靠性语义。

## 8. 待处理积压

⚠️ **Dependabot 依赖 PR 积压（5 个，自 2026-06-03 挂起约 3 个月）**：

- [#627](https://github.com/qhkm/zeptoclaw/pull/627) serde_json 1.0.149 → 1.0.150
- [#625](https://github.com/qhkm/zeptoclaw/pull/625) rpassword 7.4.0 → 7.5.2（含 Unicode 解析修复）
- [#623](https://github.com/qhkm/zeptoclaw/pull/623) tokio 1.52.1 → 1.52.3
- [#620](https://github.com/qhkm/zeptoclaw/pull/620) scraper 0.26.0 → 0.27.0
- [#617](https://github.com/qhkm/zeptoclaw/pull/617) tower-http 0.6.10 → 0.6.11

**提醒**：结合 #646 暴露的 cargo-deny 漏洞依赖问题，建议维护者趁 CI 检查恢复之机批量处理这批积压 PR，避免供应链风险持续累积。另外，10 个新开 Issue（#661–#670）均无评论回应，作为单人口径的评审执行项属正常，但建议在项目管理中明确排序（Exec 编号已有雏形）以防积压。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*