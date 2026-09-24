# OpenClaw 生态日报 2026-09-24

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-24 03:45 UTC

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

# OpenClaw 项目动态日报 — 2026-09-24

## 1. 今日速览

OpenClaw 今日保持高度活跃：过去 24 小时共 500 条 Issue 更新（新开/活跃 460，关闭 40）和 500 条 PR 更新（待合并 376，已合并/关闭 124）。项目正处于 **2026.9.x 稳定通道的密集修复期**：今日发布的 v2026.9.6 因 macOS 应用更新后崩溃启动问题已被撤回，官方建议 macOS 用户回退至 2026.9.5，热修复版 2026.9.7 正在准备中（[#156861](https://github.com/openclaw/openclaw/issues/156861)）。Issue 侧的重心集中在 Gateway 资源泄漏、多 Agent 会话状态丢失和 Windows 托管更新链路三大可靠性主题。整体看，社区贡献管道充足（376 个待审 PR），但多个 P0 问题等待维护者评审，评审带宽是当前瓶颈。

---

## 2. 版本发布

### v2026.9.6（已发布但部分撤回）⚠️

- **关键警告**：**macOS 用户暂勿更新至 2026.9.6**。应用内更新后可能出现每次启动即崩溃（#156861），该版本已从 Sparkle 更新源撤回，**2026.9.7 热修复正在制作中**。
- **恢复方法**：如应用已无法启动，从官方地址重新安装 2026.9.5 macOS 构建。
- 关联 Issue：[#156861](https://github.com/openclaw/openclaw/issues/156861) — 两台 Mac 均完全无法启动，标记 P0 / crash-loop / ux-release-blocker。

**迁移建议**：macOS 用户留在 2026.9.5；其他平台用户升级前建议检查 [#152935](https://github.com/openclaw/openclaw/issues/152935)（容器升级 schema 19 拒绝问题）与 #146887/#147160/#148681 系列更新失败报告后再行动。

---

## 3. 项目进展

今日 PR 侧以修复类贡献为主，多个高优先级 PR 进入"ready for maintainer look"状态：

- **[#156761](https://github.com/openclaw/openclaw/pull/156761)** (P0) — Doctor 显式修复 SQLite 仅索引损坏，为状态库损坏提供受支持的修复路径，回应 #156424/#126821 事故报告。
- **[#156919](https://github.com/openclaw/openclaw/pull/156919)** (P1) — 修复原生子 Agent `sessions_send` followup 在子 Agent 让位后丢失结果的问题，直接改善多 Agent 协作可靠性。
- **[#156962](https://github.com/openclaw/openclaw/pull/156962)** (P1) — cron 命令公告保留在目标会话上下文中，修复用户回复定时消息时 Agent "失忆"。
- **[#156966](https://github.com/openclaw/openclaw/pull/156966)** (P1，需安全评审) — 修复配置 `gateway.roles` 后从渠道创建的 agentTurn cron 任务永久失败。
- **[#156974](https://github.com/openclaw/openclaw/pull/156974)** / [#156867](https://github.com/openclaw/openclaw/pull/156867) / [#156081](https://github.com/openclaw/openclaw/pull/156081) — 核心贡献者 @steipete 持续推进 UI 修复、memory 插件去重重构和 macOS 测试基建。
- **[#125535](https://github.com/openclaw/openclaw/pull/125535)** (P1) — WhatsApp LID 寻址入站消息静默丢弃修复，仍在等待证明材料。
- **[#153451](https://github.com/openclaw/openclaw/pull/153451)** — utility completion 正确应用模型额外参数（如 `chat_template_kwargs`）。
- 已关闭：[#156776](https://github.com/openclaw/openclaw/pull/156776)、[#156781](https://github.com/openclaw/openclaw/pull/156781)（Workshop 日历时钟偏移 CI 修复，后者被 main 上的等效提交取代）。

**整体评估**：今日进展集中在 **会话状态可靠性 + 定时任务 + 状态库可修复性** 三条主线，若上述 P0/P1 PR 合入，2026.9.7 有望同时解决 macOS 崩溃与多条 update-failure 链路。

---

## 4. 社区热点

| Issue | 热度 | 核心诉求 |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway 内存泄漏（350MB→15.5GB，39 评论） | 长期 P0 | Gateway 常驻进程内存泄漏导致反复 OOM，自 6 月至今未修复，用户耐心接近极限 |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) 分层 bootstrap 加载（19 评论） | 功能讨论 | 大工作区用户希望控制 bootstrap 文件对 token 预算的消耗，已有关联 PR 开放 |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) AgentSelectionRequiredError 刷屏（19 评论） | 多 Agent | 显式 ownership 模式下 logbook 插件、全局 RPC、系统 Agent 回合缺少 agentId 目标 |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) 回复丢失（16 评论） | 2026.9.4 回归 | 同会话第二次运行顶掉进行中回合，回复完全丢失且无重试 |
| [#140010](https://github.com/openclaw/openclaw/issues/140010) Windows 睡眠唤醒后重连失败 30-60s+（12 评论） | 稳定性 | 笔记本用户每次唤醒后 Control UI/WebChat 长时间不可达 |
| [#156712](https://github.com/openclaw/openclaw/issues/156712) triage 修复子进程不退出（10 评论） | P0 新报 | 修复子进程持有 gateway-lifecycle 锁，阻塞应用重启 |

**背后诉求**：核心付费/重度用户（多 Agent、长时运行、生产式部署）最关心 **常驻 Gateway 的资源与状态可靠性**，而功能讨论（分层上下文、A2A 单向派发 #44309）反映用户在规模化使用中对 token 成本与 Agent 间通信语义的精细化需求。

---

## 5. Bug 与稳定性（按严重程度）

### P0 / 崩溃循环 / 发布阻断

1. **[#156861](https://github.com/openclaw/openclaw/issues/156861)** macOS 2026.9.6 更新后完全无法启动 — 修复中（2026.9.7 热修复）。
2. **[#156712](https://github.com/openclaw/openclaw/issues/156712)** `openclaw triage` 子进程不退出、持有生命周期锁阻塞重启 — 无 fix PR，manual-only。
3. **[#91588](https://github.com/openclaw/openclaw/issues/91588)** Gateway 内存泄漏致 OOM — 无 fix PR，长期未解。
4. **[#156674](https://github.com/openclaw/openclaw/issues/156674)** 2026.9.5 macOS 长 Codex worker 导致资源压力 — 无 fix PR。
5. **[#146860](https://github.com/openclaw/openclaw/issues/146860)** Windows InteractiveToken 计划任务下更新 handoff 永久停在 activating — 无 fix PR。
6. **[#146887](https://github.com/openclaw/openclaw/issues/146887)** 2026.9.3→9.4 四阶段更新失败 — 无 fix PR。
7. **[#152935](https://github.com/openclaw/openclaw/issues/152935)** 容器升级后 schema 19 拒绝，需离线 Doctor — 部分缓解路径见 [PR #156761](https://github.com/openclaw/openclaw/pull/156761)。
8. **[#152275](https://github.com/openclaw/openclaw/issues/152275)** 插件激活失败后模型目录与回复派发不可用直至重启。
9. **[#143334](https://github.com/openclaw/openclaw/issues/143334)** 子 Agent 完成投递丢失，请求方卡在 settle-yield 并饿死排队消息。

### P1 / 消息丢失 / 会话状态

- **[#148707](https://github.com/openclaw/openclaw/issues/148707)** 2026.9.4 回归：回复丢失"no active tool authority snapshot"。
- **[#139215](https://github.com/openclaw/openclaw/issues/139215)** 2026.9.1 起 cron 调度静默吞掉部分触发。
- **[#140723](https://github.com/openclaw/openclaw/issues/140723)** WebChat 回复文本重复 ×2–×3 / 中止运行导致零提交。
- **[#128140](https://github.com/openclaw/openclaw/issues/128140)** `memory_search` 工具始终 15s 超时（CLI 正常）。
- **[#123354](https://github.com/openclaw/openclaw/issues/123354)** Matrix Megolm 会话轮换后 E2EE 停止解密。
- **[#141129](https://github.com/openclaw/openclaw/issues/141129)** 8.x 起 SSH 会话对长命令误发 SIGTSTP/SIGTERM（7.1-2 回归）。
- **[#134925](https://github.com/openclaw/openclaw/issues/134925)** ARM64/Pi 上每个 Agent 回合主线程 100% CPU。

### P2 值得关注

- **[#70903](https://github.com/openclaw/openclaw/issues/70903)** 计费恢复后文件级 provider 冷却仍封锁数小时（P0/钻石级，标记 stale，有被自动关闭风险）。
- **[#140129](https://github.com/openclaw/openclaw/issues/140129)** / **[#146902](https://github.com/openclaw/openclaw/issues/146902)** Anthropic 缓存失效与工具集抖动导致 prompt-cache 无法复用，直接影响 API 成本。

---

## 6. 功能请求与路线图信号

- **分层 bootstrap 加载**（[#22438](https://github.com/openclaw/openclaw/issues/22438)，已有关联 PR）— token 成本控制刚需，最可能近期落地。
- **A2A 单向派发模式**（[#44309](https://github.com/openclaw/openclaw/issues/44309)）— 与 [PR #156919](https://github.com/openclaw/openclaw/pull/156919)（followup 结果返回）同属 Agent 间通信语义演进，方向一致。
- **按失败类别隔离 provider 回退**（[#47910](https://github.com/openclaw/openclaw/issues/47910)，已关闭）— 相关讨论可能已通过其他形式实现，可关注后续 release note。
- **会话记忆 hook 覆盖 reset/prune**（[#51572](https://github.com/openclaw/openclaw/issues/51572)）— 与 memory 插件重构 [PR #156867](https://github.com/openclaw/openclaw/pull/156867) 同期，可能顺带纳入。
- **回合级 thinking 覆盖**（[PR #136454](https://github.com/openclaw/openclaw/pull/136454)，ready for maintainer look）— 可能进入下一版本。
- **Linux aarch64 官方构建**（[#138279](https://github.com/openclaw/openclaw/issues/138279)）— 与 FreeBSD CI 工作（[PR #155851](https://github.com/openclaw/openclaw/pull/155851)）共同显示平台覆盖在扩张。

---

## 7. 用户反馈摘要

**痛点（高频出现）**：
- **长时运行不可靠**：内存泄漏、CPU 飙升、OOM（#91588、#156674、#134925、#99659）是生产式部署用户最大抱怨。
- **更新链路脆弱**：2026.9.x 连续多个版本出现更新失败/回滚/启动崩溃，Windows（#146860、#143757）、Linux 容器（#152935）、macOS（#156861）全平台均有报告。
- **消息/回复静默丢失**：无错误、无日志的丢回复（#148707、#143334、#140723）严重削弱对多 Agent 部署的信任。
- **成本焦虑**：缓存失效（#140129、#146902）和 bootstrap token 浪费（#22438）让重度用户实际账单明显上升。

**满意点**：issue 模板与更新失败自动报告机制（#147160、#148681）获得结构化数据；roboclaw-bot 等自动化贡献管道运转良好；Telegram/Discord/Slack 等渠道生态覆盖广。

---

## 8. 待处理积压（维护者关注建议）

| 条目 | 状态 | 建议 |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) 内存泄漏 | 6 月至今 P0，无 fix PR | 最高优先，直接影响留存 |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) provider 冷却锁定 | 标记 **stale**，P0/钻石级 | stale 自动关闭前应人工介入 |
| [#121661](https://github.com/openclaw/openclaw/issues/121661) CLI 子 Agent 伪造工具调用 | #116461 遗留，需安全+产品决策 | 涉及输出可信度，应尽快裁决 |
| [#128067](https://github.com/openclaw/openclaw/issues/128067) beta.7 六类可靠性缺陷汇总 | 3 周实地证据，多个子项未跟进 | 建议拆分跟踪 |
| [PR #82950](https://github.com/openclaw/openclaw/pull/82950) 正则灾难性回溯修复 | 5 月起 open，XL，需证明 | 安全相关，值得维护者投入 |
| [PR #112811](https://github.com/openclaw/openclaw/pull/112811) MS Teams 多账号 | 7 月起 open，stale | 大型社区功能需求，需明确去留 |
| [#143757](https://github.com/openclaw/openclaw/issues/143757) Windows 无人值守默认配置不可用 | 需 live-repro | 影响 Windows 服务器场景采用 |

**健康度小结**：贡献管道充足、响应流程成熟，但 P0 可靠性问题积压与 2026.9.x 更新链路连续故障是当前最大风险；建议优先收敛内存泄漏、更新 handoff 和消息投递三类问题，并避免 stale 自动关闭仍具高价值的长期 issue。

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告（2026-09-24）

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入**规模化生产使用驱动的可靠性攻坚期**：几乎所有活跃项目（OpenClaw、NanoBot、Zeroclaw、Hermes、NullClaw、CoPaw）都在集中处理长时运行下的内存泄漏、会话状态丢失、更新链路失败等“生产化债务”。**多 Agent 协作与安全治理**（A2A 通信、沙箱隔离、审批流、宿主级资源限制）是两条清晰的主线架构方向。社区输入普遍旺盛，但**维护者评审带宽**已成为多数项目的共同瓶颈。同时生态分层明显：头部项目（OpenClaw）承担功能定义角色，中腰部项目通过差异化定位（低资源、企业多租户、垂直业务）寻找生态位。

---

## 2. 各项目活跃度对比

| 项目 | Issue 活动（24h） | PR 活动（24h） | 待合并 PR | Release | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（新开/活跃 460，关闭 40） | 500（合并 124） | 376 | v2026.9.6（部分撤回，9.7 热修中） | ⚠️ 活跃度最高但 P0 积压严重，更新链路连续故障 |
| **CoPaw (QwenPaw)** | 45（关闭 27 > 新增 18） | 29（合并 12） | 17 | 无（2.2.2-beta 测试中） | ✅ 清积压态势清晰，2.2.2 发布前收敛 |
| **Hermes Agent** | 50（新开 43，关闭 7） | 50（合并 3） | 47 | 无（v0.21.4） | ✅ 报告—修复闭环快，但合并窗口未开 |
| **NanoBot** | 6 | 41（合并 20） | 21 | 无 | ✅ 快速迭代+债务清理并行，节奏扎实 |
| **Zeroclaw** | 13（关闭 0） | 50（合并 3） | 47 | 无 | ⚠️ 输入远大于消化，XL PR 平均年龄 >4 周 |
| **NullClaw** | 18（关闭 0） | 21（合并 8） | 13 | 无 | ✅ 关键修复落地，但评审积压 + issue 零回收 |
| **NanoClaw** | 4 | 27（合并 17） | 10 | **v2.4.0** | ✅ 网关重构落地当天密集修补，上升期 |
| **LobsterAI** | 0 | 50（全部关闭/清理） | 0 | 2026.9.23（昨日） | ✅ 发版后整理，内向型开发 |
| **IronClaw** | 0 | 3 条待合并更新 | 3 | 无（1.4.1-rc.2 准备中） | ⚠️ 发布 PR 滞留，社区面零互动 |
| **EasyClaw** | 0 | 0 | 0 | v1.9.21 + v1.9.22（连发） | ✅ 开发节奏快，社区反馈闭环缺失 |
| **PicoClaw** | 1 | 2 | 1 | 无 | 🔴 官网 TLS 过期 14 天无人处理，运维红线 |
| **Moltis** | 0 | 1 | 1 | 无 | ➖ 低活跃平稳 |
| **TinyClaw / ZeptoClaw** | 0 | 0 | 0 | 无 | ➖ 无活动 |

---

## 3. OpenClaw 在生态中的定位

**优势：**
- **规模绝对领先**：日 Issue/PR 更新各 500 条，是第二名（Hermes/Zeroclaw/NanoBot）的 10 倍级；issue 编号已到 15 万+，社区规模无可争议第一。
- **渠道生态最广**：Telegram/Discord/Slack/WhatsApp/Matrix/Teams/Megolm E2EE 全覆盖，是同类项目中消息渠道矩阵最完整的。
- **贡献管道成熟**：roboclaw-bot 自动化、结构化 issue 模板、更新失败自动报告机制产出高质量数据。
- **生态定义者角色**：多个项目直接以其为技术参照（LobsterAI 曾引入其 run-safety-contract 又因缺陷回滚），其 session/compaction/cron 等设计被广泛效仿。

**劣势与风险：**
- P0 积压最重：Gateway 内存泄漏（#91588，6 月至今无 fix PR）、2026.9.x 连续三个版本的更新链路故障、macOS 崩溃循环撤版——**规模最大但可靠性债务也最深**。
- 376 个待审 PR 暴露评审带宽极限。

**技术路线差异**：OpenClaw 走“全功能常驻 Gateway + 多渠道 + 多 Agent”的重型路线；NanoClaw 专注凭证网关技能化（Iron Proxy/OneCLI）；NullClaw 坚持 Zig 低资源自托管；Zeroclaw 用 Rust 构建“多租户、多 Agent 安全运行时”；CoPaw 面向企业 IM（飞书/钉钉/企微）多租户场景。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **上下文压缩/记忆管线正确性** | OpenClaw（memory 插件重构 #156867）、NanoBot（#5884 并发覆盖、#5885 阈值门控、#5879 大文件绕过）、CoPaw（#7853 base64 无界膨胀、#7628 压缩预算、#7733 agent 自主驱逐）、Hermes（#117750 压缩后乱序） | 压缩/裁剪是全生态最集中的 bug 簇：并发安全、预算完整性、媒体块处理、通知体验 |
| **多 Agent 协作原语** | OpenClaw（#44309 A2A 单向派发、#156919 followup）、Zeroclaw（#10970 资源准入 RFC、#11027 Agent 间消息）、Hermes（#94018 @bot 回归、#113024 /to 路由）、CoPaw（#7484 A2A 协议）、NullClaw（#190 子代理派生） | Agent 间确定性路由、单向派发、资源隔离是下一阶段共同架构主题 |
| **安全审批/hardline 拦截** | Zeroclaw（#10968 审批静默失效 S0、#11061 rm -rf 绕过）、Hermes（#102371 毁盘命令零拦截、#120859 审批通道失效）、NullClaw（#969 结构化审批流）、Moltis（#1272 强制沙箱）、CoPaw（#2967 File Guard 绕过） | “系统不能说谎/不能静默放行危险操作”是共性安全底线诉求 |
| **更新/升级链路可靠性** | OpenClaw（macOS 崩溃、schema 19、Windows handoff）、NanoClaw（cutover 死锁、MODULE_NOT_FOUND） | 自更新是高频故障面，回归测试覆盖不足 |
| **长时运行资源管理** | OpenClaw（#91588 OOM）、Hermes（#80527 Dashboard 6.3GB）、NanoClaw（#3732 转录永不轮转） | 常驻进程内存泄漏是生产式部署的头号杀手 |
| **本地/自托管模型兼容** | Hermes（Ollama payload、私有 CA）、NullClaw（Ollama tools）、NanoClaw（#3646 卡死计时器） | 本地慢速模型用户需要更宽松的运行时参数 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构关键 |
|---|---|---|---|
| **OpenClaw** | 全功能个人 AI 助手，多渠道多 Agent | 重度/付费/生产式用户 | 常驻 Gateway + 插件体系，TypeScript 生态 |
| **NanoBot** | 轻量 CLI Agent + WebUI | 个人开发者 | LiteLLM 多 provider、io.net 官方接入显示基础设施吸引力 |
| **Zeroclaw** | 安全多租户运行时 | 自托管 daemon + 多 Agent 部署 | Rust、RPC/OIDC 认证、sandbox_policy 规范化 |
| **Hermes Agent** | Desktop + Bot Mode 多 Bot 协作 | 桌面用户 + 本地模型用户 | Electron Desktop、sweeper 风险域标签体系 |
| **NullClaw** | 低资源自托管 | EC2/Termux/Pi/WSL2 用户 | Zig 实现极致轻量，CLI 委托式 provider（codex/gemini/grok） |
| **NanoClaw** | 凭证网关技能化 | 需要统一凭证治理的部署者 | OneCLI/Iron Proxy 双网关、容器化 |
| **CoPaw** | 企业 IM 集成 + Hub 多租户 | 中国企业场景（飞书/钉钉/企微/微信） | MCP/ACP/A2A 统一 Driver、测试覆盖率 73.79% |
| **PicoClaw / Moltis / EasyClaw / LobsterAI** | 嵌入式（PicoClaw）、沙箱安全（Moltis）、TikTok 运营（EasyClaw）、Cowork 协作（LobsterAI） | 垂直细分 | 各自深耕单一生态位 |

---

## 6. 社区热度与成熟度分层

- **巨型活跃但债务承压**：OpenClaw —— 功能最全但 2026.9.x 连续发布事故，处于“规模化修复期”。
- **快速迭代上升期**：NanoClaw（v2.4.0 发布当天 17 PR 合并）、NanoBot（单日 7+ 修复 PR，节奏扎实）、EasyClaw（连发两版）。
- **质量巩固/清积压期**：CoPaw（关闭 27 issue > 新增 18，测试覆盖率 +3.28pp，2.2.2 发布前收敛）、Hermes（报告—修复 24h 闭环，等待集中合并窗口）。
- **输入过剩、消化不足**：Zeroclaw（50 PR 活动 / 3 合并 / 0 关闭）、NullClaw（关键修复 PR 挂起 2-3 个月）—— 治理和评审带宽是约束。
- **低活跃/运维风险**：PicoClaw（TLS 证书 14 天未续期是生态内最严重的“门面”事故）、IronClaw（发布流程滞留）、Moltis（单一 PR 慢审）。
- **静默/停滞**：TinyClaw、ZeptoClaw 无活动；LobsterAI 开发强但社区互动缺失。

---

## 7. 值得关注的趋势信号

1. **可靠性 > 功能成为竞争分水岭**：所有头部项目的用户抱怨集中于“静默丢失”（回复丢失、消息丢失、审批静默失效），“系统不能说谎”是信任底线。AI 智能体开发者应把**可观测性与投递确认语义**作为一等公民设计。

2. **上下文压缩进入深水区**：六个项目同时暴露压缩管线的并发覆盖、预算完整性、媒体块处理缺陷——说明简单的摘要式压缩已不足以支撑生产负载，**agent 参与驱逐决策**（CoPaw #7733）与**分层 token 预算**（OpenClaw #22438）是演进方向。

3. **多 Agent 安全运行时是下一个架构高地**：Zeroclaw 的资源准入 RFC、Moltis 的强制沙箱、Hermes/NullClaw 的结构化审批流、CoPaw 的 A2A 协议——多 Agent 并发场景下的隔离、认证、降级策略将成为差异化核心竞争力。

4. **CLI 委托式 provider 模式被广泛复制**：NullClaw（codex/gemini/grok-cli）、Zeroclaw（拟加 Antigravity CLI）验证了“复用成熟 CLI Agent 做执行后端”是低成本扩展模型生态的有效模式。

5. **评审带宽是开源 AI 项目的普遍瓶颈**：从 OpenClaw（376 PR）到 Zeroclaw（47 PR、XL 平均 4 周+），自动化 triage（OpenClaw roboclaw-bot、CoPaw QPQAT 自动测试、IronClaw 知识图谱 CI）是可行缓解路径——“用 agent 维护 agent 项目”的 dogfooding 实践值得借鉴。

6. **基础设施细节决定项目可信度**：PicoClaw 官网 TLS 过期两周、OpenClaw 撤版事件表明，再好的代码也敌不过运维疏漏——**自动化发布与证书管理**应纳入项目基线工程。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-24

## 1. 今日速览

NanoBot（[HKUDS/nanobot](https://github.com/HKUDS/nanobot)）今日保持高活跃度：过去 24 小时共 41 条 PR 更新（待合并 21、已合并/关闭 20）、6 条 Issue 更新（新开 2、关闭 4），无新版本发布。核心贡献者 @chengyongru 今日密集提交了 7+ 个修复与重构 PR，主要围绕 CLI onboarding、内存压缩（compaction）与代码清理。内存/上下文压缩相关的问题是近期最集中的技术热点，社区对 0.3.5 新增的 sessions 目录校验规则出现回归反馈。整体看，项目处于「快速迭代 + 债务清理并行」的健康阶段。

---

## 2. 版本发布

今日无新 Release。但注意：0.3.5 版本引入的 **破坏性校验规则**（sessions 目录不得位于 workspace 内）已引发用户回归反馈（见 #5881），并有配套修复/文档 PR #5887 在推进，下个版本大概率包含相关调整。

---

## 3. 项目进展

今日关闭的重要 PR：

- **#5883** [fix(agent): preserve state for required Codex compaction](https://github.com/HKUDS/nanobot/pull/5883) — 修复 Codex 原生压缩前 provider state 被过早清除的问题，提升了恢复会话时的稳定性。
- **#5875** [feat(providers): add IO Intelligence (io.net) provider](https://github.com/HKUDS/nanobot/pull/5875) — io.net 官方贡献的开箱即用新 provider，已合并，扩展了模型接入面。
- **#5871** [feat(linear): improve native agent UX](https://github.com/HKUDS/nanobot/pull/5871) — Linear 集成大幅增强：mention/delegated issue 双模式、OAuth 健康检查与撤销、附件与推理内容映射等。
- **#5886** [fix(providers): preserve image inputs for deepseek-flash](https://github.com/HKUDS/nanobot/pull/5886) — 修复 deepseek-flash 图像输入被静默丢弃的问题（已关闭）。

今日新开的重要 PR：

- **#5888** [fix(cli): reuse WebUI model discovery in onboarding](https://github.com/HKUDS/nanobot/pull/5888) — 修复 LiteLLM 迁移后 CLI 向导模型自动补全失效。
- **#5887** [fix(cli): explain session storage conflicts before startup](https://github.com/HKUDS/nanobot/pull/5887) — 在启动前以清晰文案解释 sessions 路径冲突（直接回应 #5881）。
- **#5884** [fix(memory): prevent history compaction overwriting concurrent appends](https://github.com/HKUDS/nanobot/pull/5884)（**p0**）— 修复压缩历史时并发写入被覆盖的数据安全问题。
- **#5885** [feat(memory): gate idle transcript replacement on token threshold](https://github.com/HKUDS/nanobot/pull/5885)（**p1**）— 短会话不再被无谓摘要，改善恢复体验。
- 一批清理型重构（#5889–#5893）：移除 FileState 全局兼容层、统一类型化 AppKeys、收紧 Full Access 握手校验、DingTalk 测试走流式下载路径。

**进展评估**：今日在内存管线正确性（两个关键并发/阈值修复）、新 provider 接入和 CLI 体验三线推进，同时系统性偿还测试与重构债务，工程节奏扎实。

---

## 4. 社区热点

- **[#5870](https://github.com/HKUDS/nanobot/issues/5870)（3 评论，已关闭）** — Telegram 中 `Context compacted.` 通知重复出现多达 6+ 次。与 PR [#5780](https://github.com/HKUDS/nanobot/pull/5780)（停止发送压缩通知）共同指向同一痛点：**自动压缩对用户可见且干扰体验**。该 PR 仍在待合并状态，社区诉求明确，建议尽快合入。
- **[#5881](https://github.com/HKUDS/nanobot/issues/5881)** — 中文用户反馈 0.3.5 强制 `_nanobot` 移出 workspace 导致多实例无法启动，属回归类问题，已由 #5887 响应。
- **[#2152](https://github.com/HKUDS/nanobot/issues/2152) / [#2160](https://github.com/HKUDS/nanobot/issues/2160)**（@felixbk98）— 社区开发者已自建 Fish Audio 语音（STT+TTS）与开机通知技能，但每次更新需手动 patch WhatsApp bridge，反映**通道层扩展点不足**的诉求，两个 issue 均已关闭，可能已通过插件化机制解决。

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 状态 |
|---|---|---|
| **p0** | [#5884](https://github.com/HKUDS/nanobot/pull/5884) 历史压缩覆盖并发追加，可能丢数据 | ✅ 已有 fix PR（待合并） |
| **p1** | [#5870](https://github.com/HKUDS/nanobot/issues/5870) Telegram 压缩通知重复刷屏 | 已关闭；#5780 提供根治方案待合并 |
| **p1** | [#5861](https://github.com/HKUDS/nanobot/pull/5861) fallback tokenizer 首次使用冷启动延迟 | fix PR 待合并（标 conflict） |
| **p2 / 回归** | [#5881](https://github.com/HKUDS/nanobot/issues/5881) 0.3.5 sessions 路径校验拒绝启动 | 🔄 #5887 已响应，待合并 |
| **p2** | [#5879](https://github.com/HKUDS/nanobot/issues/5879) 大体积 read_file 结果绕过压缩、导致回合中止 | ❗ 尚无明确 fix PR，需关注 |
| **p2** | [#5886](https://github.com/HKUDS/nanobot/pull/5886) deepseek-flash 丢失图像输入 | 已关闭/修复 |

压缩（compaction）相关问题在 #5870、#5879、#5884、#5885 中反复出现，是当前最集中的稳定性主题。

---

## 6. 功能请求与路线图信号

- **技能手动调用模式**：[#5405](https://github.com/HKUDS/nanobot/pull/5405) 支持 `disable-model-invocation`，面向部署/发布类副作用技能，PR 活跃更新中，纳入下版本概率高。
- **Langfuse Codex 追踪**：[#5520](https://github.com/HKUDS/nanobot/pull/5520) 为 Codex 原生 SDK 接入可观测性，企业用户诉求明显，持续更新中。
- **心跳共享会话**：[#4551](https://github.com/HKUDS/nanobot/pull/4551) `isolatedSession` 配置，长期在途（标 conflict），需维护者裁决。
- **空闲摘要缓存上限**：[#5664](https://github.com/HKUDS/nanobot/pull/5664) 修复无界缓存增长，与 #5885 同属内存管线优化方向。
- **统一预览面板**：[#5847](https://github.com/HKUDS/nanobot/pull/5847) WebUI 会话内文件/网页预览整合，UX 提升方向明确。

---

## 7. 用户反馈摘要

- **通知噪音**：用户对自动压缩的可见通知普遍反感（#5870 中同会话出现 6+ 条），希望默认静默、仅 `/compact` 显式提示。
- **升级摩擦**：0.3.5 的 sessions 目录强校验缺少迁移引导，多实例/workspace 用户被直接阻断启动（#5881），用户质疑设计意图，期待更友好的错误解释或迁移工具。
- **长会话可靠性**：重度用户遭遇大文件读取后回合中止（#5879），说明上下文预算管理在真实工作负载下仍有边界缺陷。
- **社区共建意愿强**：felixbk98 等用户主动贡献语音、通知等外挂技能，但受限于通道层需要 patch，希望有官方扩展点。
- **正面信号**：io.net 官方提交 provider 集成，说明项目对第三方基础设施厂商具备吸引力。

---

## 8. 待处理积压

- **[#5879](https://github.com/HKUDS/nanobot/issues/5879)** — OPEN、无 fix PR，且与多个压缩相关修复相关联，建议优先分派。
- **[#5780](https://github.com/HKUDS/nanobot/pull/5780)**（9-15 开启）— 压缩通知治理，需求明确但滞留一周以上，与已关闭的 #5870 存在闭环风险。
- **[#4551](https://github.com/HKUDS/nanobot/pull/4551)**（6-26 开启，~3 个月）— 心跳共享会话，标 conflict，需维护者介入裁决。
- **[#5520](https://github.com/HKUDS/nanobot/pull/5520)**（8-24 开启，1 个月）— Langfuse Codex 追踪，标 conflict。
- **[#5861](https://github.com/HKUDS/nanobot/pull/5861) / [#5664](https://github.com/HKUDS/nanobot/pull/5664)** — 均标 conflict 的 p1/p2 修复，建议尽快 rebase 合入，避免与 #5884/#5885 的内存管线改动叠加冲突。

---

*数据来源：GitHub API 快照（过去 24 小时），生成于 2026-09-24。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 · 2026-09-24

## 1. 今日速览

Zeroclaw 今日保持高活跃度：24 小时内新增/活跃 Issue 13 条、PR 活跃 50 条（47 条待合并），但**合并/关闭仅 3 条、关闭 Issue 0 条**，呈现“输入远大于消化”的典型积压态势。今日无新版本发布，项目仍处于 v0.8.5 之后的开发周期。讨论焦点集中在**安全审批机制漏洞（#10968）与多 Agent 并发架构 RFC（#10970）**两大方向。WhatsApp Web 渠道相关问题持续高频出现，是当前用户反馈最密集的功能区域。

## 2. 版本发布

今日无新版本发布。可关注 [Issue #10814](https://github.com/zeroclaw-labs/zeroclaw/issues/10814)（发布效率与可重复发布 Tracker），维护者正在为下一次发版优化构建与恢复流程。

## 3. 项目进展

今日仅 3 条 PR 完成（合并/关闭），推进节奏偏慢：

- **[#9817](https://github.com/zeroclaw-labs/zeroclaw/pull/9817)（已关闭）**：RFC 流程治理文档 PR 被关闭，其内容已拆分演化——今日新开的 [#11079](https://github.com/zeroclaw-labs/zeroclaw/pull/11079)、[#11078](https://github.com/zeroclaw-labs/zeroclaw/pull/11078) 延续了“按作者认知程度路由贡献”和“RFC 表单强制填写备选方案”的思路，说明治理工作仍在推进但走了拆分重提路线。

**待合并关键 PR（均于今日有更新，构成项目主线进展）：**

- **[#11061](https://github.com/zeroclaw-labs/zeroclaw/pull/11061)**：修复高风险 shell 命令在白名单内时绕过 `block_high_risk_commands` 拦截的漏洞（可执行 `rm -rf`）——今日最高优先级安全修复。
- **[#11065](https://github.com/zeroclaw-labs/zeroclaw/pull/11065)**：依赖大版本升级（matrix-sdk 0.19 / rusqlite 0.40 / otel 0.33）。
- **[#11067](https://github.com/zeroclaw-labs/zeroclaw/pull/11067)**：恢复 `max_context_tokens` / `history_pruning.max_tokens` 的主动裁剪语义，区分裁剪目标与模型容量。
- **[#11041](https://github.com/zeroclaw-labs/zeroclaw/pull/11041) / [#11072](https://github.com/zeroclaw-labs/zeroclaw/pull/11072)**：Nix 生态持续完善（web UI 打包进 flake、`meta.mainProgram` 修复）。
- **[#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259)**：RPC 认证主体强制校验（stage 3）持续推进，OIDC 部分已合入 master。
- **[#10600](https://github.com/zeroclaw-labs/zeroclaw/pull/10600)**：修复出站消息未发送却上报成功的严重行为误导问题。

整体判断：**单日代码吞吐偏低，但 PR 队列中堆叠了大量 XL 级安全/架构 PR**，合并后将是显著的能力跃迁。

## 4. 社区热点

- **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)（15 评论，今日活跃）**：维护者 RFC/设计决策队列 Tracker，是当前治理决策的中枢，持续有新议题挂入。
- **[#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970)（RFC，5 评论，今日活跃）**：@JordanTheJet 提出的宿主级准入控制与单 Agent 资源上限 RFC——针对“一台机器跑多 Agent”场景，诉求是让系统在过载时**延迟降级而非稳定性降级**。这是面向多 Agent 规模化部署的关键架构信号。
- **[#10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922)（5 评论）**：WhatsApp 自动 TTS 忽略 `suppress_voice`，用户对语音回复控制失灵的不满。
- **[#11052](https://github.com/zeroclaw-labs/zeroclaw/issues/11052)（4 评论）**：WhatsApp Markdown 渲染缺失（thematic break / setext heading），反映模型输出到聊天渠道的格式转换是高频体验痛点。
- **[#11027](https://github.com/zeroclaw-labs/zeroclaw/issues/11027)（RFC，今日活跃）**：Agent 间会话消息传递（接收方自主决定），社区对多 Agent 协作原语的架构讨论持续升温。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| **S0** | [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | 无人值守 turn（cron/heartbeat/headless SOP/spawn_subagent）不构建 ApprovalManager，风险配置的工具审批**静默失效** | 待修，`needs-maintainer-review` |
| **P1** | [#10985](https://github.com/zeroclaw-labs/zeroclaw/issues/10985) | Dashboard 启动的 turn 使用新建 channel 实例，channel-backed 工具无法访问会话绑定渠道 | `status:in-progress` |
| **P1** | [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) | daemon 从不注册 channel-map 工厂，webhook/cron/SOP turn 无渠道可用 | 待修 |
| **P1（安全）** | — | 白名单命令绕过高风险拦截，可执行 `rm -rf` | **已有 fix PR [#11061](https://github.com/zeroclaw-labs/zeroclaw/pull/11061)** |
| **S2** | [#11059](https://github.com/zeroclaw-labs/zeroclaw/issues/11059) | WhatsApp 忽略 `force_voice`，`send_via` 无法路由到语音 | 待修 |
| **S2** | [#10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922) | WhatsApp 忽略 `suppress_voice`，自动 TTS 失控 | 待修 |

**值得警惕的模式**：#10968、#10985、#11055 共同指向“非交互/后台执行路径”（cron、daemon、SOP、dashboard）的运行时装配不完整问题——这可能是同一架构债务的不同表现。

## 6. 功能请求与路线图信号

- **[#11075](https://github.com/zeroclaw-labs/zeroclaw/issues/11075)**：新增 `agy_cli` 工具对接 Google Antigravity CLI，与 `codex_cli`/`claude_code`/`gemini_cli` 同构注册。模式成熟、实现成本低，**大概率被快速纳入**。
- **[#11074](https://github.com/zeroclaw-labs/zeroclaw/issues/11074)**：`[[search_routes]]` 搜索提供商提示路由，镜像现有 `[[model_routes]]` 设计，架构一致性高，纳入概率较大。
- **[#11050](https://github.com/zeroclaw-labs/zeroclaw/issues/11050)**：原生投票消息纳入出站 pacing 队列——#10984 已合入 polls，此为自然补全。
- **架构路线信号**：#10970（宿主级资源限制）+ #11027（Agent 间消息）两条高风险 RFC 均处 maintainer review，表明**多 Agent 并发与协作是下一阶段核心方向**。配合 #10259（RPC 认证）可看出项目正系统性地构建“多租户、多 Agent 安全运行时”。

## 7. 用户反馈摘要

- **渠道（尤其 WhatsApp）是最大摩擦面**：#10922、#11052、#11059、#11050 全部围绕 WhatsApp Web 的语音控制、Markdown 渲染、投票 pacing，用户在意的是“模型输出忠实呈现到手机端”的端到端体验。
- **运维部署痛点**：#11055、#10985 反映 daemon 部署下渠道功能残缺，说明用户真实运行形态是**常驻 daemon + 多入口触发**，而测试覆盖可能偏重交互式 CLI 路径。
- **安全可靠性被严肃对待**：#10968 的“静默失效”表述和 #10600 的“告诉人类已通知但实际没发”都指向用户对**系统不能说谎**的核心诉求。
- **贡献者体验**：#11078/#11079 显示维护者在收紧 RFC 门槛（强制备选方案），治理趋于成熟但也可能提高贡献摩擦。

## 8. 待处理积压

**47 个待合并 PR 中多个 XL 级长期悬置，需维护者重点排期：**

- [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391)（8-26 起，XL，delegate 文件系统边界）——多次与 master rebase，`needs-author-action`，漂移风险高。
- [#10172](https://github.com/zeroclaw-labs/zeroclaw/pull/10172)（8-20 起，XL，provider profile 语义）——`status:parking-lot`，需明确去留。
- [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821)（**6-17 起，已悬置 3 个月+**，sandbox_policy 规范化）——安全架构核心件，长期不合并会阻塞相关安全修复。
- [#9839](https://github.com/zeroclaw-labs/zeroclaw/pull/9839) / [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) / [#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) / [#9368](https://github.com/zeroclaw-labs/zeroclaw/pull/9368)：均为 XL、`needs-maintainer-review` 或 `needs-author-action`，多为 8 月遗留。
- Issue 侧：#10968（S0 安全）与两条高风险 RFC（#10970、#11027）已挂 `needs-maintainer-review`，建议优先裁决。

**健康度小结**：社区输入动能强（日增 13 Issue / 50 PR 活动），但消化速率（3 合并 / 0 关闭）明显不足，XL PR 队列平均年龄已超 4 周。建议维护者借助 #10814 发布效率 Tracker 顺带推动 PR 队列清理，否则安全修复（如 #11061、#10968）落地延迟将持续放大风险敞口。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-09-24

## 1. 今日速览

今日 Hermes Agent 呈现高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 43，关闭 7），PR 更新 50 条（待合并 47，已合并/关闭 3），无新版本发布。社区反馈集中在 Desktop 端会话状态管理（session state）相关缺陷和网关可靠性上，`sweeper:risk-session-state` 标签反复出现，表明该风险域仍是当前最大痛点。安全类报告（磁盘破坏命令未拦截、审批通道失效）值得维护者优先关注。今日新开的 fix PR 数量可观（约 10+），修复响应速度与报告速度基本匹配，项目健康度良好。

## 2. 版本发布

今日无新版本发布。当前最新版本仍为 `v0.21.4`（commit `f6b17351`，2026-09-21），多个 Issue 报告环境基于此版本。

## 3. 项目进展

今日合并/关闭的 PR 仅 3 条，主要是测试与文档维护：

- [#120989](https://github.com/NousResearch/hermes-agent/pull/120989) [CLOSED] 修复 `tui_gateway` 子代理快照测试因 registry fixture 污染 live-subagent dict 导致的跨文件红测，提升 CI 稳定性。
- [#120992](https://github.com/NousResearch/hermes-agent/pull/120992) [OPEN，文档] 在 Matrix 故障排查文档中列出三个已知适配器失败模式，配套 Issue #111333/#111364 的可靠性改进工作。

整体看，今日处于“报告多、修复在途、合并少”的节奏，主要功能推进依赖积压 PR（如 #102765 统一包管理器、#92192/#93632 印尼语文档），预计近期有一次较集中的合并窗口。

## 4. 社区热点

1. **[#62642](https://github.com/NousResearch/hermes-agent/issues/62642)（8 评论，已关闭）** — macOS Desktop 嵌入式终端 `posix_spawnp failed`，根因是 `node-pty` 的 `spawn-helper` 在 electron-builder staging 后丢失执行权限。老问题今日关闭，说明打包链路修复已落地。
2. **[#94018](https://github.com/NousResearch/hermes-agent/issues/94018)（6 评论）** — 回归：普通 Desktop 会话中 `@bot` 提及不再向目标代理投递消息。多智能体协作（Bot Mode）核心交互受损，与 #113024 的 `/to` 路由功能请求形成呼应，社区对确定性多 Bot 路由诉求强烈。
3. **[#120828](https://github.com/NousResearch/hermes-agent/issues/120828)（4 评论，今日新开）** — 自定义 Ollama 提供方在工具续接/流重试后发出无 `role: user` 的纯工具 payload，被 Ollama Qwen 渲染器拒绝。本地模型用户的核心场景。
4. **[#117750](https://github.com/NousResearch/hermes-agent/issues/117750)（4 评论）** — 压缩/裁剪携带转发的工具 payload 后，展示历史出现重复与乱序。上下文压缩功能的质量问题持续发酵。

## 5. Bug 与稳定性（按严重程度）

**P1 / 高危**

- **[#120174](https://github.com/NousResearch/hermes-agent/issues/120174) [P1]** Codex 仅生命周期的流绕过 TTFB 与空闲看门狗，需等待 600/900s 才重试。尚无 fix PR。
- **[#120985](https://github.com/NousResearch/hermes-agent/pull/120985) [P1，今日新 PR]** Nous OAuth 将 Portal 503 误判为终端认证失败，可导致 Portal 短暂故障期间凭据被清除。修复已提交待评审。
- **[#102371](https://github.com/NousResearch/hermes-agent/issues/102371) [安全]** `shred`/`wipefs`/`blkdiscard` 对块设备操作零拦截，`--yolo` 下静默毁盘。无 fix PR，**强烈建议维护者优先处理**。

**P2**

- [#120859](https://github.com/NousResearch/hermes-agent/issues/120859) — 受保护指令文件（AGENTS.md 等）写入审批永远无法通过操作员选择的审批通道送达（`transport=False`）。无 fix PR。
- [#80527](https://github.com/NousResearch/hermes-agent/issues/80527) — Dashboard 进程内存无限增长（实测 6.3GB / 7.6GB 后被 OOM 杀死），长期未修。
- [#119681](https://github.com/NousResearch/hermes-agent/issues/119681) — 裸命名 provider 静默丢弃 `reasoning_effort`，影响 delegate_task 子代理。
- [#120504](https://github.com/NousResearch/hermes-agent/issues/120504) — Windows 上 cron `.sh` 脚本解析到 WSL 桩 `bash.exe` 失败。
- [#120502](https://github.com/NousResearch/hermes-agent/issues/120502) — `web_extract` 把 Cloudflare 挑战页当成功结果并写入缓存。**已有 fix PR [#120990](https://github.com/NousResearch/hermes-agent/pull/120990)**。
- [#120966](https://github.com/NousResearch/hermes-agent/issues/120966) — Bot Mode 屏幕控制将所有 bot 附到同一 DISPLAY（:20）。已有相关 PR [#120977](https://github.com/NousResearch/hermes-agent/pull/120977) 增加 Stop 控件（部分缓解）。
- [#120512](https://github.com/NousResearch/hermes-agent/issues/120512) — Bitwarden 后端剥离 `NODE_EXTRA_CA_CERTS`，私有 CA 后的 Vaultwarden 无法连接。
- [#120923](https://github.com/NousResearch/hermes-agent/issues/120923) — Hermes 发出的空 `params._meta` 被 Meta Ads MCP 拒绝（HTTP 400）。
- [#120640](https://github.com/NousResearch/hermes-agent/issues/120640) — Telegram QR 快速设置自己生成的 token 被自己拒绝。
- [#120528](https://github.com/NousResearch/hermes-agent/issues/120528) — `skill_manage delete` 以分类路径命名时绕过 pinned/essential 守卫。
- [#120526](https://github.com/NousResearch/hermes-agent/issues/120526) — 便携插件 `mcp.json` 的 `${VAR}` 不被插值。**已有 fix PR [#120979](https://github.com/NousResearch/hermes-agent/pull/120979)**。
- [#120982](https://github.com/NousResearch/hermes-agent/pull/120982)（今日 PR）— 原子写入的 EXIT trap 因引号转义错误从未真正清理临时文件。

**P3**：#120510（`preparing…` 行绕过 /focus）、#58783（提问面板超时清空用户输入）、#120991（STANDALONE 误告警）等。

## 6. 功能请求与路线图信号

- **#113024** `/to <bot>` 确定性路由命令 + **#94018** `@bot` 回归修复 — 多 Bot 路由是社区明确诉求，配套 PR #120945（bot-relay 启动 profile 修复）已在途，**很可能进入下一版本**。
- **#120880 / #120881**（今日新开）— Desktop 设置中模型同步状态可见化 + SDK 更新检查器（npm registry 轮询）。用户对可观测性与更新体验的诉求一致，尚无 PR，属路线图候选。
- **#111333 / #111364** Matrix/Telegram 网关可靠性 Wave — 结构化的验收契约式改进，配合今日文档 PR #120992，显示维护者在系统性推进消息投递可靠性。
- **PR #102765** 统一包管理器（`pm/` + lock.json）— 大型架构级 PR，标签覆盖安装更新、Windows、兼容性多个风险域，若合入将是下一版本的核心变化。
- **PR #117167** StepFun 拆分为四个区域化 provider id 并默认 `step-5-preview`， provider 生态持续扩张信号。

## 7. 用户反馈摘要

- **会话状态丢失是最高频痛点**：提交的 prompt 消失（#92728）、回答被面板超时清空（#58783）、切回会话后历史重复/乱序（#117750、#119326、#120986）——用户在多会话、长时间工作流中对“我以为保存了”的信任感受到明显伤害。
- **本地/自托管用户受挫**：Ollama payload 拒绝（#120828）、私有 CA Vaultwarden 无法解锁（#120512）、Windows cron 失败（#120504），显示非官方云端路径的测试覆盖不足。
- **安全敏感用户表达担忧**：毁盘命令零拦截（#102371）与审批通道失效（#120859）被以 PoC 代码形式报告，社区期待 hardline 覆盖更完整。
- **正面信号**：issue 报告质量普遍很高（含复现步骤、commit hash、根因分析，部分由 codex 辅助提交），fix PR 通常在 24 小时内出现（如 #120990、#120979、#120985），社区与维护者的响应闭环健康。

## 8. 待处理积压

| 条目 | 状态 | 建议 |
|---|---|---|
| [#80527](https://github.com/NousResearch/hermes-agent/issues/80527) Dashboard 内存泄漏（8/6 报告，OOM 实证） | 开放近 7 周 | 高影响生产稳定性，建议优先排期 |
| [#58783](https://github.com/NousResearch/hermes-agent/issues/58783) 提问超时清空输入（7/5 报告） | 开放近 3 个月 | UX 数据丢失类，长期无修复 |
| [#94018](https://github.com/NousResearch/hermes-agent/issues/94018) @bot 回归（8/24，6 评论） | P2 + needs-decision | 多智能体核心功能，等待维护者决策 |
| [#109769](https://github.com/NousResearch/hermes-agent/issues/109769) Cloud agent 启动即"未登录"（9/13） | 无 fix PR | 影响云连接用户首启体验 |
| [#102371](https://github.com/NousResearch/hermes-agent/issues/102371) 磁盘破坏命令无拦截（9/3） | 无 fix PR | 安全类，建议纳入 hardline 规则紧急更新 |
| PR [#63041](https://github.com/NousResearch/hermes-agent/pull/63041) Git index.lock 安全失败（7/12） | 开放 2 个多月 | updater 关键路径，避免用户更新损坏 |
| PR [#78092](https://github.com/NousResearch/hermes-agent/pull/78092) Windows 原生测试修复（8/4） | 已重建仍待合并 | Windows CI 基线（35 失败）依赖此 PR |
| PR [#102765](https://github.com/NousResearch/hermes-agent/pull/102765) 统一包管理器（9/4） | 大型 PR 待评审 | 多风险域标签，需专项评审资源 |

**健康度小结**：报告—修复闭环迅速（多数今日 bug 已有对应 fix PR），但 session-state 风险域和 2 个安全类 issue 长期悬置，是当前健康度的主要扣分项。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-09-24

## 1. 今日速览

PicoClaw 今日整体活跃度偏低：过去 24 小时仅 1 条 Issue 更新（新增/活跃）和 2 条 PR 更新（1 个待合并、1 个已关闭），无新版本发布。最值得关注的是一条 **CRITICAL 级别的运维事故**——项目官网 picoclaw.io 的 TLS 证书已于 9 月 10 日过期，全站对所有浏览器不可访问，且该问题已持续超过两周未获官方响应，暴露出项目在基础设施维护上的短板。开发侧进展平稳，外部贡献者持续提交集成类功能 PR。

## 2. 版本发布

今日无新版本发布，最新 Release 无更新。

## 3. 项目进展

- **[#3344](https://github.com/sipeed/picoclaw/pull/3344) [已关闭] Add Build Remote Agent phone pairing (gbr/1)**（作者 @LinespottingPrivate，创建于 2026-08-23）
  为桌面 Agent 增加"Build Remote Agent"手机配对适配器，支持通过二维码或 8 字符配对码让手机旁观（spectate）桌面 Agent，协议为 `gbr/1`，仅允许绑定 `http://127.0.0.1:8788` 或 stdio，安全边界设计合理。该 PR 最终被关闭而非合并，**未进入主干**，远程旁观功能暂时搁浅。

- **[#3370](https://github.com/sipeed/picoclaw/pull/3370) [待合并] feat(tools): add Keenable web search provider**（作者 @ilya-bogin-keenable，创建于 2026-09-07）
  新增 Keenable 作为 `web_search` 工具提供方，零 API key 即开即用（`tools.web.keenable.enabled: true`）。由 Keenable 官方人员提交，属于厂商主动集成。今日有更新活动，仍在等待维护者 review。

**整体评估**：今日无代码合并进入主干，功能层面进展有限；社区外部贡献管道中仍有 1 个活跃 PR 待处理。

## 4. 社区热点

- **[#3377](https://github.com/sipeed/picoclaw/issues/3377) [OPEN] [CRITICAL] TLS certificate for picoclaw.io expired on 2026-09-10**（作者 @dimonb，2 条评论，1 👍，今日有更新）
  项目官网 HTTPS 证书于 2026-09-10 23:59:59 UTC 过期，所有浏览器与 TLS 客户端均拒绝连接，官网实质上完全下线。报告者特别强调这是时间敏感问题，拖得越久对新访客/新用户的转化伤害越大。背后诉求清晰：**社区对项目“门面”失修的不满**，新用户通过 repo 链接访问官网会直接看到安全警告，严重损害项目可信度。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 CRITICAL | [#3377](https://github.com/sipeed/picoclaw/issues/3377) 官网 TLS 证书过期，picoclaw.io 全站不可达 | OPEN，无 fix PR，已持续 14 天 |

这是今日唯一报告的 Bug，但属于最高严重级别：影响所有潜在新用户的第一印象。目前**未见任何修复 PR 或官方回复迹象**（Issue 创建于 9 月 12 日，仅 2 条评论、1 个 👍）。建议立即续期证书或接入自动化证书管理（如 Let's Encrypt + certbot/ACME 自动续期）。

## 6. 功能请求与路线图信号

- **Web 搜索 Provider 扩展**（[#3370](https://github.com/sipeed/picoclaw/pull/3370)）：Keenable 零配置搜索接入。若合并，将降低 Agent 联网搜索的门槛（无需申请 API key），对个人助手场景是实用的补充，有望进入下个版本。
- **移动端旁观/配对能力**（[#3344](https://github.com/sipeed/picoclaw/pull/3344)，已关闭）：说明社区对“手机联动桌面 Agent”的远程交互形态有需求，尽管该实现未被接受，这一方向值得维护者在路线图中评估。

## 7. 用户反馈摘要

- **新用户获取受阻**：官网因证书问题不可访问，是最直接的社区痛点，直接影响项目拉新与可信度。
- **开箱即用诉求**：Keenable PR 强调“fresh install 无需 API key 即可用”，反映出用户对降低工具链配置门槛的偏好。
- **多设备协同场景**：手机配对 PR 显示存在“移动端查看/控制桌面 Agent”的真实使用场景（spectate 模式尤其克制，仅旁观不控制）。

## 8. 待处理积压

| 项目 | 状态 | 建议关注点 |
|---|---|---|
| [#3377](https://github.com/sipeed/picoclaw/issues/3377) TLS 证书过期 | OPEN，14+ 天未解决 | ⚠️ **最高优先级**，运维性质，修复成本低但影响极大，需要持有域名/服务器权限的维护者介入 |
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) Keenable provider | OPEN，17 天待 review | 功能完整、由厂商官方提交，建议尽快 review 或给出反馈，避免外部贡献者流失 |
| [#3344](https://github.com/sipeed/picoclaw/pull/3344) 手机配对 | 已关闭（未合并） | 建议在关闭时/后补充未合并原因与后续计划说明 |

---
**健康度小结**：代码开发节奏平稳但缓慢；基础设施维护（官网证书）出现明显疏漏，是目前对项目形象伤害最大的单一风险点，建议维护者今日内优先处置。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-09-24

## 1. 今日速览

NanoClaw 今日迎来重要里程碑：**v2.4.0 正式发布**，核心是凭证网关（credential gateway）架构全面技能化，OneCLI 保持默认、新增 Iron Proxy 作为可选网关。过去 24 小时共 27 条 PR 更新（17 条已合并/关闭、10 条待合并），4 条 Issue 更新（2 新开/活跃、2 关闭），核心团队（@glifocat、@zvi-fried、@Koshkoshinsk）产出密集，单日合并 17 个 PR 属于高活跃水平。项目整体处于“大重构落地 → 快速修补收尾”阶段，update 流程和网关集成相关的修复集中涌现，健康度良好。

## 2. 版本发布

### v2.4.0（[Release PR #3877](https://github.com/nanocoai/nanoclaw/pull/3877)）

**主要更新：**
- **凭证网关技能化**：OneCLI 抽取为可安装技能并保持默认，新增 Iron Proxy 网关（含 Iron Control），支持 API key 与原生 ChatGPT 登录，凭证存储与 OAuth 刷新由 Iron Control 接管
- **社区门户**：支持 Echo 加固镜像与托管 Slack 应用的 community-portal 设置，新增 Mattermost 频道
- **模型与速度控制**：支持安装级与组级的 model / speed 配置
- **OpenCode provider 重构**

**迁移注意事项：**
- 现有安装的网关选择会被保留（见 [#3816](https://github.com/nanocoai/nanoclaw/pull/3816)、[#3818](https://github.com/nanocoai/nanoclaw/pull/3818)），简单设置默认仍是 OneCLI，破坏性风险较低
- 升级前建议关注 `/update-nanoclaw` 修复：cutover 漂移与控制器导入问题在旧版存在，**建议直接升级到 2.4.0** 而非在旧版本上执行 update

## 3. 项目进展

今日合并/关闭 17 个 PR，进展集中在三大主线：

**① 网关架构重构（v2.4.0 核心，全部落地）**
- [#3815](https://github.com/nanocoai/nanoclaw/pull/3815)：集中化凭证网关契约与人工审批生命周期
- [#3816](https://github.com/nanocoai/nanoclaw/pull/3816)：OneCLI 抽取为可安装技能，配置自动检测保留
- [#3817](https://github.com/nanocoai/nanoclaw/pull/3817)：新增 Iron Proxy 网关技能
- [#3825](https://github.com/nanocoai/nanoclaw/pull/3825)：OpenCode 通过 Iron Proxy 认证
- [#3818](https://github.com/nanocoai/nanoclaw/pull/3818)：网关选择与 provider 登录解耦

**② update 流程修复链**
- [#3873](https://github.com/nanocoai/nanoclaw/pull/3873)：修复 cutover 死锁（对应 Issue #3828）
- [#3750](https://github.com/nanocoai/nanoclaw/pull/3750)：修复控制器缺 `provider-contract-verifier.ts` 导致的 `MODULE_NOT_FOUND`

**③ 渠道与运行时修复**
- [#3875](https://github.com/nanocoai/nanoclaw/pull/3875) / [#3876](https://github.com/nanocoai/nanoclaw/pull/3876)：agent 提示名跟随 bot 显示名，Teams 桥接补齐能力
- [#3868](https://github.com/nanocoai/nanoclaw/pull/3868)：Claude Code 升至 2.1.280，修复恢复会话被静默破坏的问题
- [#3872](https://github.com/nanocoai/nanoclaw/pull/3872)：修复 codex 经 Iron Proxy 登录后 401/refresh 400

整体看，v2.4.0 的网关重构已完整合入并在发布当天即密集修补，节奏健康。

## 4. 社区热点

- **[Issue #3732](https://github.com/nanocoai/nanoclaw/issues/3732)（OPEN）**：长存活容器导致会话转录轮转（transcript rotation）永不执行，`maybeRotateContinuation()` 仅在容器启动时调用一次。涉及定时任务场景的数据完整性，今日有新评论，社区持续关注。
- **[PR #3503](https://github.com/nanocoai/nanoclaw/pull/3503)（OPEN）**：社区贡献的 Apple Container（macOS microVM）替代 Docker 方案，已开放近一个月，反映 macOS 用户对更强隔离的诉求。
- **[PR #3848](https://github.com/nanocoai/nanoclaw/pull/3848)（OPEN）**：TypeSafe Jev 判断模型作为容器工具，扩展 agent 决策能力，仍在活跃评审。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 高 | [#3869](https://github.com/nanocoai/nanoclaw/issues/3869)（CLOSED）：update 控制器缺 3 个传递导入，prepare 直接崩溃 | 已由 [#3750](https://github.com/nanocoai/nanoclaw/pull/3750) 修复 |
| 高 | [#3828](https://github.com/nanocoai/nanoclaw/issues/3828)（CLOSED）：cutover 先停服务再等容器，逻辑死锁 | 已由 [#3873](https://github.com/nanocoai/nanoclaw/pull/3873) 修复 |
| 中 | [#3732](https://github.com/nanocoai/nanoclaw/issues/3732)（OPEN）：长存活容器转录永不轮转，会话无限增长 | **暂无 fix PR，需关注** |
| 中（安全相关） | [#3874](https://github.com/nanocoai/nanoclaw/issues/3874)（OPEN，新开）：OneCLI 网关所有权检查用组存在性而非安装身份，可能导致跨安装越权 | **暂无 fix PR，建议优先处理** |
| 低 | [#3878](https://github.com/nanocoai/nanoclaw/pull/3878)（OPEN）：setup ping 清理时容器仍存活 | fix PR 已提交待合并 |

## 6. 功能请求与路线图信号

- **环境变量可调的卡死计时器**（[#3646](https://github.com/nanocoai/nanoclaw/pull/3646)，OPEN）：允许操作员放宽 `ABSOLUTE_CEILING_MS`/`CLAIM_STUCK_MS`，服务本地慢速模型后端——与网关多 provider 化方向一致，合并概率高
- **TypeSafe Jev 工具**（[#3848](https://github.com/nanocoai/nanoclaw/pull/3848)）：agent 决策工具扩展，core-team 参与，有望进入下个小版本
- **Apple Container 支持**（[#3503](https://github.com/nanocoai/nanoclaw/pull/3503)）：macOS microVM 隔离，是容器层多元化的明确信号，但评审周期已较长
- **手机配对旁观**（[#3494](https://github.com/nanocoai/nanoclaw/pull/3494)，已关闭）：gbr/1 协议，显示项目在扩展远程观测入口

## 7. 用户反馈摘要

- **update 流程是最大痛点**：#3869、#3828 均为用户在实际升级中撞到的崩溃/死锁，说明升级路径的回归测试覆盖不足，社区对“能顺利自更新”的期望很高
- **定时任务/长会话场景**（#3732）：重度调度用户遇到会话文件无限增长，反映生产化使用中的资源管理需求
- **多渠道命名一致性**（#3875 背后）：共享 bot 前置多个组时 agent 名不对齐，说明多租户式使用模式正在增长
- **本地慢模型用户**（#3646）：硬编码 30 分钟上限导致推理被中途杀掉，社区需要更灵活的运行时参数

## 8. 待处理积压

- **[#3874](https://github.com/nanocoai/nanoclaw/issues/3874)**：昨日新开的安全相关 Issue，OneCLI 网关身份校验缺陷，尚无回应，**建议维护者优先确认影响面**
- **[#3732](https://github.com/nanocoai/nanoclaw/issues/3732)**：开放已 17 天，仅 1 条评论，无 fix PR
- **[#3503](https://github.com/nanocoai/nanoclaw/pull/3503)**：开放近一个月的社区大 PR，需要 core-team 给出明确评审结论，避免贡献者流失
- **[#3646](https://github.com/nanocoai/nanoclaw/pull/3646)**：开放近一个月，涉及本地模型用户体验，建议纳入下个版本计划

---

**健康度小结**：核心团队产出稳定、发布节奏紧凑、Issue 响应及时（update 相关 bug 从报告到修复均在 1-2 天内）。短板在于 update 路径回归测试、以及社区大 PR 的评审积压。整体判断：**活跃且健康，处于快速迭代上升期**。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-09-24

## 1. 今日速览

NullClaw 今日保持高度活跃：过去 24 小时内有 18 条 Issue 更新（全部为活跃/新开，无关闭）和 21 条 PR 更新（13 个待合并、8 个已合并/关闭），无新版本发布。社区修复贡献持续涌入，多个长期存在的严重 Bug（Telegram 渠道静默、调度器授权失败、栈溢出 SIGSEGV）今日均有对应 PR 落地或推进。整体看，项目处于“社区贡献消化期”——待合并 PR 积压达 13 个，维护者评审节奏成为当前瓶颈。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日共 8 个 PR 合并/关闭，多项关键修复落地：

- **#996** [fix(mcp): bound stdio response waits](https://github.com/nullclaw/nullclaw/pull/996) — 修复 #991 中 stdio MCP 服务被 gateway 独占导致 agent 调用无限挂起的问题，为响应读取应用 `timeout_ms` 并在超时时终止服务进程组。7,373 项测试通过。
- **#979** [feat(memory): 可配置 auto_recall / recall_limit / max_context_bytes](https://github.com/nullclaw/nullclaw/pull/979) — 允许用户关闭/调节每条消息的 FTS5+BM25 记忆召回，直接回应 Issue #919。
- **#980** [fix(scheduler): /pair 时持久化 token](https://github.com/nullclaw/nullclaw/pull/980) — 修复 #839 调度器授权失败问题（token 仅存内存未落盘）。
- **#978** [fix(discord): typing 线程栈溢出](https://github.com/nullclaw/nullclaw/pull/978) — Discord typing 指示线程在 512KB 栈上执行完整 TLS HTTPS 请求导致进程崩溃，已迁移至大栈运行时。
- **#981** [feat(provider): 新增 grok-cli provider](https://github.com/nullclaw/nullclaw/pull/981) — 按 codex-cli/gemini-cli 模式新增 xAI Grok CLI 委托 provider，生态继续扩张。
- **#986** [GEN-548: SQLite memory 数据库路径可配置](https://github.com/nullclaw/nullclaw/pull/986) — 支持只读工作区部署场景。
- **#969** [feat(agent): 结构化审批流](https://github.com/nullclaw/nullclaw/pull/969) — 实现 shell 工具两轮 approval_request/approval_response 审批机制，增强安全性。
- **#965** [SSE 结构化流式 tool-call 提案](https://github.com/nullclaw/nullclaw/pull/965) — 关闭（可能与 #971 合并方向整合）。

**评估**：今日进展显著，调度器、MCP 挂起、Discord 崩溃三大痛点一次性解决，安全审批流与记忆可配置化属于能力升级，项目稳健向前。

## 4. 社区热点

- **#871** [web_search 在低配设备上不可用](https://github.com/nullclaw/nullclaw/issues/871)（8 评论，今日再活跃）— 最热讨论。核心诉求：NullClaw 目标场景是弱设备，但 web_search 依赖 Brave API key 等外部服务，用户呼吁原生 DuckDuckGo 支持，与 #623（集成 ddgs 元搜索库）形成呼应，属于路线图级诉求。
- **#972** [Telegram 渠道闲置后无响应](https://github.com/nullclaw/nullclaw/issues/972)（5 评论）— 已有修复 PR #984（让轮询失败线程老化退出），今日继续活跃等待评审。
- **#915** [调度器未授权](https://github.com/nullclaw/nullclaw/issues/915)（5 评论）— 与已合并的 #980 相关，用户在确认修复覆盖度。
- **#976** [aarch64 每条 Telegram 消息 SIGSEGV](https://github.com/nullclaw/nullclaw/issues/976)（4 评论）— 对应待合并 PR #985（16 MiB agent turn 栈）。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 Critical | [#976](https://github.com/nullclaw/nullclaw/issues/976) aarch64 上每条入站 Telegram 消息触发 SIGSEGV（512KB 入站工作线程栈溢出），systemd 下崩溃循环、消息全部丢失 | 有 fix PR [#985](https://github.com/nullclaw/nullclaw/pull/985)，待合并 |
| 🔴 Critical | [#991](https://github.com/nullclaw/nullclaw/issues/991) stdio MCP 被 gateway 持锁导致 agent 无限挂起（Proxmox 环境，148 工具桥） | ✅ 已修复（PR #996 合并） |
| 🟠 High | [#972](https://github.com/nullclaw/nullclaw/issues/972) Telegram 渠道闲置一夜后静默 | fix PR [#984](https://github.com/nullclaw/nullclaw/pull/984) 待合并 |
| 🟠 High | [#870](https://github.com/nullclaw/nullclaw/issues/870) WSL2 下 gateway accept4 忙循环，单线程 100% CPU | 暂无 fix PR |
| 🟡 Medium | [#865](https://github.com/nullclaw/nullclaw/issues/865) CLI 方向键显示控制字符 | fix PR [#970](https://github.com/nullclaw/nullclaw/pull/970) 待合并（已挂起近 3 个月） |
| 🟡 Medium | [#954](https://github.com/nullclaw/nullclaw/pull/954)（PR）一次性 cron 任务静默失败（OutboundMessage.channel use-after-free） | 修复 PR 待合并 |
| 🟡 Medium | [#932](https://github.com/nullclaw/nullclaw/issues/932) 文档 Zig 版本错误（0.15.2 实际需 0.16.0+） | 无 fix PR，影响新用户上手 |
| 🟢 Low | [#1000](https://github.com/nullclaw/nullclaw/issues/1000) Ollama 模型不支持 tools 时仅报无描述的 adapter error | 无 fix PR |

## 6. 功能请求与路线图信号

- **多模态 Vision Pipeline**（[#624](https://github.com/nullclaw/nullclaw/issues/624)）：用户希望直接向 agent 发送图片/文件并自动 base64 编码给多模态 LLM，目前需自写 skill。呼声明确，尚无官方 PR。
- **原生 DDG/ddgs 搜索**（[#871](https://github.com/nullclaw/nullclaw/issues/871) + [#623](https://github.com/nullclaw/nullclaw/issues/623)）：与“低配设备自托管”的项目定位强契合，是最可能进入下一版本的方向。
- **GET /status 监控端点**（[#631](https://github.com/nullclaw/nullclaw/issues/631)）：外部仪表盘监控需求，实现成本低，采纳概率高。
- **子代理派生与跨 provider 通信**（[#190](https://github.com/nullclaw/nullclaw/issues/190)）：架构级请求，尚无进展。
- **微信扫码登录**（[#817](https://github.com/nullclaw/nullclaw/issues/817)）：已有文档+加固 PR [#963](https://github.com/nullclaw/nullclaw/pull/963) 待合并，预计随下版发布。
- **原生 Anthropic API 支持**（[#767](https://github.com/nullclaw/nullclaw/issues/767)）：PR [#962](https://github.com/nullclaw/nullclaw/pull/962) 已提供文档，待合并。

## 7. 用户反馈摘要

- **典型部署场景**：大量用户在 EC2 / RTX 3090 + Ollama (qwen 系列) / Proxmox CT / Termux Android / WSL2 上自托管，印证“低资源个人 AI 助手”定位是真实刚需。
- **痛点 1 — 可观测性差**：#1000 用户需要用 Wireshark 才能定位 Ollama 不支持 tools 的问题；#631 用户缺乏监控手段。错误信息可读性是普遍不满。
- **痛点 2 — 渠道稳定性**：Telegram 静默（#972）、崩溃循环（#976）、Discord socket 断连（#953）集中出现，长时运行稳定性是最大痛点。
- **痛点 3 — 文档与版本漂移**：#932 Zig 版本文档错误直接阻断新贡献者构建。
- **满意点**：后端 agent 命令在渠道故障时依然可用（#972 用户反馈），CLI 委托式 provider 模式（codex/gemini/claude/grok）获得社区认可并持续复制。

## 8. 待处理积压

⚠️ **维护者需关注**（按紧急度）：

1. **PR 评审积压 13 个**，多个关键修复长期挂起：
   - [#985](https://github.com/nullclaw/nullclaw/pull/985)（SIGSEGV 修复，8 月提交）
   - [#984](https://github.com/nullclaw/nullclaw/pull/984)（Telegram 静默修复，8 月提交）
   - [#954](https://github.com/nullclaw/nullclaw/pull/954)（cron use-after-free，6 月提交）
   - [#970](https://github.com/nullclaw/nullclaw/pull/970)（CLI 方向键，6 月提交，近 3 个月）
2. **无 fix PR 的开放 Bug**：#870（WSL2 100% CPU）、#932（文档 Zig 版本，低成本高收益，建议优先处理）、#915（调度器授权，需确认 #980 是否完全覆盖）。
3. **Issue #190（子代理派生）自 3 月提出无官方回应**，属于路线图级问题，建议维护者明确表态。
4. **今日 0 个 Issue 被关闭**，而合并的 PR 已修复 #839/#919/#991，建议及时关联回收，保持 issue 队列健康。

---
*数据来源：NullClaw GitHub 仓库，统计窗口 2026-09-23 至 2026-09-24。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-09-24

> 数据来源：github.com/nearai/ironclaw | 统计窗口：过去 24 小时

---

## 1. 今日速览

IronClaw 今日整体活跃度**中等偏低**：过去 24 小时无任何 Issue 活动（新开 0、活跃 0、关闭 0），无新版本发布，也无 PR 被合并或关闭。仓库当前有 3 条处于待合并状态的 PR，其中 1 条为 CI 自动化产出的知识图谱刷新（#7988），1 条为 1.4.1-rc.2 版本切割准备（#8110），1 条为文档改进（#8109）。项目整体处于**发布准备与维护节奏**，核心工作集中在版本发布流程和依赖安全更新上，社区侧（Issue/讨论）今日完全静默。

---

## 2. 版本发布

今日无新版本发布。

值得注意的是 [PR #8110](https://github.com/nearai/ironclaw/pull/8110) 正在准备 `1.4.1-rc.2`，距正式发布可能仅一步之遥（详见第 3、6 节）。

---

## 3. 项目进展

今日无 PR 被合并或关闭，**功能性进展为零增量**，但以下待合并 PR 反映了当前的工作重心：

- **[PR #8110](https://github.com/nearai/ironclaw/pull/8110) — chore(release): cut 1.4.1-rc.2**（@serrrfirat，size: M, risk: low）
  - 将发布分支从 `1.4.1-rc.1` 晋升为 `1.4.1-rc.2`，修复范围保持不变，仍聚焦于 **Google 扩展 OAuth 就绪性修复**。
  - 值得关注的是：lockfile 同步升级至 `wasmtime 47.0.4` 和 `rustls 0.23.45`，均为**响应安全公告数据库（advisory database）的补丁版本**，属于安全合规性更新。
  - 状态：OPEN，尚未合并——发布流程可能被阻塞，建议维护者确认 CI 与审批状态。

- **[PR #8109](https://github.com/nearai/ironclaw/pull/8109) — docs(skills): clarify scoped virtual skill roots**（@mmemcormier）
  - 文档层面明确了虚拟技能根目录的作用域划分（`/skills`、`/system/skills`、可选 `/tenant-shared/skills`），替换过时的宿主目录发现指引。
  - 这暗示项目正在从“基于宿主磁盘目录的技能发现”向“作用域化虚拟根”迁移，文档先行说明行为语义，属于**架构演进的前置信号**。

- **[PR #7988](https://github.com/nearai/ironclaw/pull/7988) — chore(agents): refresh codebase knowledge graph**（@ironclaw-ci[bot]，size: XS）
  - 每夜自动工作流产出的代码库记忆快照刷新，今日（09-24）有更新活动，说明 CI 自动化流水线运转正常。此类 PR 属例行事務，长期堆积未合并需留意。

**小结**：项目正处在 1.4.1 补丁版的收尾阶段，主线开发（大特性）暂无动静。

---

## 4. 社区热点

今日无任何 Issue 或 PR 出现新评论、点赞或讨论（数据中评论数均为空，👍 均为 0）。**无社区热点事件**。

间接信号：#8110 针对 Google 扩展 OAuth 的修复已进行到 RC2，说明该问题此前的报告或内部发现曾受到重视，是近期最受关注的修复方向。

---

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归 Issue。

与稳定性相关的进行中工作：

| 事项 | 说明 | 修复状态 |
|---|---|---|
| Google 扩展 OAuth 就绪性问题 | 通过 1.4.1-rc.1/rc2 修复中 | ✅ Fix PR 已存在：[#8110](https://github.com/nearai/ironclaw/pull/8110)（待合并） |
| 依赖安全风险 | `wasmtime` / `rustls` 升级至已打补丁版本 | ✅ 携带于 #8110 |

---

## 6. 功能请求与路线图信号

今日无新功能请求。从现有 PR 可推断的近期路线图方向：

1. **1.4.1 稳定版发布在即**：RC2 已切出，若无回归，下一版本应很快落地，内容聚焦 OAuth 修复 + 依赖安全补丁，无破坏性变更预期。
2. **技能（Skills）体系作用域化**：#8109 的虚拟技能根文档（含 `/tenant-shared/skills`）透露多租户/共享技能方向，可能是 1.5.x 或更远版本的架构主题。
3. **AI 辅助的代码库自我维护**：每夜自动知识图谱刷新（#7988）表明项目已将 agent 工作流嵌入自身 CI，这是 AI 助手类项目“吃自己的狗粮”的典型实践。

---

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼用户反馈。

背景参考：Google 扩展 OAuth 修复推进到 RC2，间接表明该扩展的认证体验是近期用户接触路径上的关键环节（推测曾有用户受影响，但今日数据中无直接佐证）。

---

## 8. 待处理积压

- **[PR #8110](https://github.com/nearai/ironclaw/pull/8110)**：1.4.1-rc.2 切割 PR 于 09-23 创建后 24 小时内未合并。**建议优先处理**——发布分支滞留会增加后续 cherry-pick 与冲突成本，且其中包含安全相关的依赖升级（wasmtime/rustls）。
- **[PR #8109](https://github.com/nearai/ironclaw/pull/8109)**：文档 PR 无评论、无审批活动，建议维护者尽快 review，避免文档与现实（虚拟技能根）脱节。
- **[PR #7988](https://github.com/nearai/ironclaw/pull/7988)**：自动刷新 PR 创建于 08-29，至今近一个月仍 OPEN，今日仍有更新。如果此类每夜 PR 不能及时合并，会持续堆积 stale 快照，建议为 `ironclaw-ci[bot]` 的产出设置自动合并（auto-merge）策略。

---

**健康度小结**：代码侧交付节奏正常（RC 流程、安全补丁、文档），但**社区互动面今日为零**，且存在发布 PR 与自动化 PR 双重积压。短期关注 1.4.1-rc.2 能否顺利合并发布。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报（2026-09-24）

## 1. 今日速览

- 过去 24 小时项目活动集中在 **PR 合并与版本发布**上：50 条 PR 更新（全部为已合并/关闭），0 条待合并；Issues 方面无任何新增或活跃更新。
- 项目于昨日（2026-09-23）发布了新版本 **LobsterAI 2026.9.23**，今日大量历史 Release 合并 PR（如 2026.7.x ~ 2026.9.x 系列）被集中关闭/清理，呈现明显的**发版后仓库整理**特征。
- 活跃贡献者主要为 @fisherdaddy 与 @liuzhq1986，核心开发保持高频节奏。
- 社区互动面（Issue 讨论、评论、点赞）今日几乎为零，**开发活跃但社区热度数据缺失**，健康度呈“内向型”开发模式。

## 2. 版本发布

**LobsterAI 2026.9.23**（发布于 2026-09-23）

已披露的更新内容包括：
- **feat(decision-model)**：新增实验性 Jev 决策模型工具（[PR #2753](https://github.com/netease-youdao/LobsterAI/pull/2753)，by @fisherdaddy）
- **feat(cowork)**：Cowork 支持逐步（per-step）实时流式进度与 diff 统计（[PR #2749](https://github.com/netease-youdao/LobsterAI/pull/2749)，by @fisherdaddy）

📌 说明：Release Notes 在数据中被截断，完整变更清单建议查看 [Releases 页面](https://github.com/netease-youdao/LobsterAI/releases)。未见破坏性变更或迁移注意事项的明确记录，但 Jev 决策模型标注为 experimental，升级用户需留意其稳定性。

## 3. 项目进展

今日 50 条 PR 全部为关闭状态，主要为**历史 Release 合并 PR 的批量清理**，包括：

- [PR #2699](https://github.com/netease-youdao/LobsterAI/pull/2699) Release/2026.9.16（@liuzhq1986）
- [PR #2618](https://github.com/netease-youdao/LobsterAI/pull/2618) Release/2026.9.4（@liuzhq1986）
- [PR #2600](https://github.com/netease-youdao/LobsterAI/pull/2600) Release 2026.8.31：引导式首次运行体验、Library 浏览提速、视频分享支持（@fisherdaddy）
- [PR #2403](https://github.com/netease-youdao/LobsterAI/pull/2403) **回滚** OpenClaw "run-safety-contract" 门控：评审中发现回执身份键控、误判成功、compaction runId 处理等问题，属质量回归控制措施
- 其余 2026.7.x ~ 2026.8.x 的十余个 Release PR（#2317、#2379、#2407、#2416、#2430、#2451、#2477、#2480、#2498、#2510、#2519、#2534、#2549、#2572 等）

**整体判断**：今日属发版后的收尾与仓库卫生维护，主线上功能推进主要来自昨日发布的 2026.9.23（Jev 决策模型 + Cowork 实时进度流）。

## 4. 社区热点

今日无活跃 Issue、无高评论 PR（数据中评论数均为 undefined/0）。无法识别社区讨论热点。建议关注 [Issues 页面](https://github.com/netease-youdao/LobsterAI/issues) 获取后续动态。

## 5. Bug 与稳定性

- 今日无新报告的 Bug 或崩溃 Issue。
- 值得关注的历史质量信号：[PR #2403](https://github.com/netease-youdao/LobsterAI/pull/2403) 显示 Run Safety 功能曾因多项缺陷（byte-accounting 不匹配等）被整体回滚，说明 OpenClaw 稳定性仍是风险点，后续版本可能重新引入改进版实现。

## 6. 功能请求与路线图信号

今日无用户功能请求。基于 PR 历史推断的路线图信号：
- **实验性模型集成持续推进**：DeepSeek Harness（#2510、#2519）→ Jev 决策模型（#2753），项目在持续接入新模型能力。
- **Cowork 体验深化**：进度可视化逐步增强（#2477 → #2749 实时流式进度），预计下一版本继续迭代。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼用户反馈。历史 Release 摘要显示用户可感知的改进方向包括：首次运行体验、Windows 安装器可靠性、登录/配额提示、Artifact 自动预览控制等，间接反映这些是用户长期关注点。

## 8. 待处理积压

- 今日待合并 PR 为 **0**，Issue 积压情况因无数据无法评估。
- 建议：本次批量关闭 Release PR 后，可核查是否存在关联 Issue 未同步关闭（如 #2480、#2416 中 "Fixes #(issue number)" 模板未填写，可能存在遗漏关联）。

---
*数据来源：GitHub API（过去 24 小时）。注：PR 评论数与点赞数据缺失，社区热度评估受限。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-09-24

## 1. 今日速览

Moltis 今日整体活跃度处于**低位平稳**状态：过去 24 小时无新开 Issues、无版本发布，仅 1 条 PR 活动更新。唯一活跃项为沙箱功能增强 PR #1272，该 PR 于 9 月 16 日创建、9 月 23 日有更新，目前仍处于待合并（OPEN）状态。项目近期处于功能开发迭代期而非发布期，社区讨论热度（Issues 渠道）暂无明显波动。总体来看，项目无紧急事件，健康度正常但需关注社区互动的持续性。

## 2. 版本发布

今日无新版本发布（最近亦无 Releases 记录）。项目可能处于主分支持续集成阶段，建议关注下一个版本是否包含 PR #1272 的沙箱增强特性。

## 3. 项目进展

今日无 PR 被合并或关闭，无新代码进入主分支。

重点关注中的 PR：
- **[#1272 feat(sandbox): per-agent mounts, run_as and a forced sandbox](https://github.com/moltis-org/moltis/pull/1272)**（OPEN）
  - 作者：@Bergmann89
  - 内容：在 agent preset 的 `[sandbox]` 配置块中新增三个 per-agent 级别的配置项：
    - `sandbox.mounts` — 为该 agent 的沙箱容器额外挂载宿主机目录
    - `sandbox.run_as` — 指定容器运行的 `uid:gid`
    - `sandbox.force` — 强制该 agent 永远不得在沙箱之外运行
  - 意义：显著增强多 agent 场景下的**安全隔离与权限粒度控制**，是安全沙箱能力向细粒度演进的重要一步。
  - 状态：9 月 23 日有更新（可能为代码修订或 CI 重跑），距合并尚需 review。该 PR 已持续 8 天未合并，建议维护者优先评审。

## 4. 社区热点

过去 24 小时无活跃 Issue，也无高评论量讨论。近期唯一具备讨论价值的是 PR #1272（见上）。该 PR 反映的核心诉求为：**用户在部署多 agent 系统时需要按 agent 粒度定制沙箱挂载、运行身份，并对高权限 agent 实施强制沙箱化**，属于安全合规类需求。建议关注其合并后的文档与配置迁移说明。

## 5. Bug 与稳定性

过去 24 小时未报告新的 Bug、崩溃或回归问题。

- 无紧急/高危 issue
- 无已有待修复的公开记录（本期数据范围内）

## 6. 功能请求与路线图信号

今日无新功能请求 Issue。但从 PR #1272 可推断的路线图信号：

| 信号 | 来源 | 判断 |
|---|---|---|
| 沙箱细粒度配置（mounts / run_as / force） | [#1272](https://github.com/moltis-org/moltis/pull/1272) | 很可能纳入下一版本，属安全基础设施增强 |
| Agent 级别的安全策略强制执行 | 同上 | 表明项目正在强化企业级多租户/多 agent 安全能力 |

## 7. 用户反馈摘要

本期无 Issue 评论数据可供提炼。间接反馈（来自 PR #1272 的方向）表明：现有沙箱配置粒度不足，用户需要为不同 agent 定制不同的挂载与运行身份，并希望对敏感 agent 有强制隔离手段——这代表了安全敏感型用户（如企业内网部署场景）的典型痛点。

## 8. 待处理积压

- **PR #1272（[feat(sandbox)](https://github.com/moltis-org/moltis/pull/1272)）**：创建至今 8 天，9 月 23 日仍有更新但尚未合并，且 0 👍 / 无评论，缺 review。建议维护者 @Bergmann89 与核心团队推进评审，避免沙箱安全特性长期滞留。

---

*数据来源：Moltis GitHub 仓库（2026-09-23 至 2026-09-24 窗口）。本期为低活跃日，建议持续观察后续 review 与发布节奏。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 — 2026-09-24

## 1. 今日速览

今日 CoPaw 社区保持高度活跃：过去 24 小时内 Issues 更新 45 条（新开/活跃 18，关闭 27），PR 更新 29 条（待合并 17，已合并/关闭 12），无新版本发布。Issue 关闭量明显大于新增（27 vs 18），且多个长积压 Issue（如 #4474、#2967、#2335）集中关闭，显示维护团队正在进行一轮系统性的清积压行动。社区焦点集中在**上下文管理/记忆可靠性**（#7571、#7853、#7628、#7733、#7836）与 **2.2.x Hub 多租户方向规划**（#7318）。整体健康度良好，贡献者梯队（含多名 first-time-contributor）持续扩大。

## 2. 版本发布

今日无新版本发布。值得注意的是社区已出现基于 `2.2.2-beta.2` / `2.2.2-beta.3` 的反馈（#7856、#7947），暗示 2.2.2 正式版或在近期发布。

## 3. 项目进展

今日合并/关闭的 12 条 PR 中，重点包括：

- **#7409 fix(agents): drop empty assistant text blocks** — 丢弃模型因推理耗尽 tokens 产生的空文本块，修复 Ark Responses API 400 错误（对应 Issue [#7402](https://github.com/agentscope-ai/QwenPaw/issues/7402)）。
- **#5659 fix(chat): allow sending attachments without text** — 允许仅上传附件即可发送消息，对应企业微信用户长期诉求 [#5558](https://github.com/agentscope-ai/QwenPaw/issues/5558)。
- **#4361 / #2978（安全修复系列）** — 修复 agent 通过 `execute_shell_command` 绕过 File Guard 访问敏感文件的路径（对应严重安全 Issue [#2967](https://github.com/agentscope-ai/QwenPaw/issues/2967)），这是本轮关闭的最重要安全修复。
- **#7941 test(unit): batch-3 lock and portability tests** — 由 QPQAT 自动化提交，新增 47 个测试文件、2720 个用例，`src/qwenpaw` 语句覆盖率从 70.51% 提升至 73.79%（+3.28pp），测试基建持续推进。
- **#7952 fix(hub)** — 细化 Hub 邀请码兑换失败原因，提升多租户运维可诊断性。
- **#7955 docs(website)** — 官网补充下载来源与 Apache 2.0 许可声明。
- **#6854** — 审批请求增加本地化的用途描述，提升人机协作体验。

**评估**：本轮关闭涵盖安全、稳定性、测试、文档、Hub 多个维度，配合 27 条 Issue 关闭，项目在 2.2.2 发布前的收敛态势清晰。

## 4. 社区热点

- **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)（33 评论，4 👍）** — QwenPaw Hub 多租户版 2.2.0 发布后的方向征集讨论，是当前最热帖。社区核心诉求：团队场景下的多用户管理、admin 管控技能（关联 #2324）。这是官方主动发起的路线图信号帖，值得持续跟踪。
- **[#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571)（8 评论）** — 用户报告 agent 反复“遗忘”工作目录约束，导致插件源码被误覆盖。反映长任务下记忆/规则持久化是真实用户最痛的问题。
- **[#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853)（8 评论）** — `ToolResultPruner` 跳过 base64 图片块导致上下文无界膨胀，技术分析深入，属高价值 bug 报告。
- **[#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)（7 评论）** — 上下文压缩预算未计入完整 provider 请求，可致活跃轮次失败。与 #7836、#7733 共同构成“上下文管理”讨论簇。
- **[#7959](https://github.com/agentscope-ai/QwenPaw/issues/7959) + PR [#7962](https://github.com/agentscope-ai/QwenPaw/pull/7962)** — Moonshot kimi-k3 拒绝无顶层 type 的 anyOf 工具 schema，当天即有 first-time-contributor 提交修复，社区响应速度值得肯定。

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| 高 | [#2967](https://github.com/agentscope-ai/QwenPaw/issues/2967) | `execute_shell_command` 绕过 File Guard（安全） | ✅ 已修复（PR #4361/#2978 今日关闭） |
| 高 | [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | `view_image` base64 无界累积撑爆上下文 | ❌ 暂无对应 fix PR |
| 高 | [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) | 压缩预算基于不完整请求，活跃轮次失败 | ❌ 待修复 |
| 高 | [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) | 飞书会话 queue consumer 卡死且无法自愈，会话静默无响应 | ❌ 待修复 |
| 中 | [#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836) | scroll 驱逐丢失夹在工具密集区间的用户请求 | 🔄 已有 [PR #7872](https://github.com/agentscope-ai/QwenPaw/pull/7872) 待合并 |
| 中 | [#7857](https://github.com/agentscope-ai/QwenPaw/issues/7857) | ACP 关闭回退泄漏 event loop、跳过清理 | ❌ 待修复 |
| 中 | [#7767](https://github.com/agentscope-ai/QwenPaw/issues/7767) | 护栏插件构建下的 4 个 bug（附件 stale blob、cron 漏发等） | ❌ 待修复 |
| 中 | [#7959](https://github.com/agentscope-ai/QwenPaw/issues/7959) | Moonshot 拒绝无 type 的 anyOf schema | 🔄 [PR #7962](https://github.com/agentscope-ai/QwenPaw/pull/7962) 今日提交 |

此外 PR #7871（`<<<TRUNCATED>>>` 字面标记绕过输出截断）和 #7930（备份释放 SQLite 活锁致 SIGBUS）虽为待合并修复，但揭示了边缘但严重的稳定性问题。

## 6. 功能请求与路线图信号

- **A2A 协议支持**（[#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484)）— 用户追问 2.x 架构文档中 MCP/A2A/ACP 统一 Driver 的落地时间，当前仅 MCP 实现；ACP 相关 PR #7874/Issue #7857 显示 ACP 已在开发中，A2A 大概率是下一阶段重点。
- **Agent 自主上下文管理**（[#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733)）— 让 agent 参与决定驱逐时机，与官方活跃的 Scroll/compaction PR 系（#7872、#7873）方向一致，很可能被纳入。
- **多模型分工配置**（#1010，今日关闭）与 **Hub 多租户后续方向**（#7318）— 均为高信号路线图讨论。
- **PR #7874 PawApp 控制面重设计**、**#7861 多标签聊天终端**、**#7956 设置页/侧边栏大改版**（维护者 @rayrayraykk 亲自推进）、**#7613 OpenViking 记忆插件** — 显示记忆、PawApp SDK、Console UX 是当前主线投入。

## 7. 用户反馈摘要

- **痛点：记忆/约束不持久**。#7571 用户详细描述 agent 反复违反目录约定并覆盖生产插件，是“个人助理可信度”的核心场景失败。
- **痛点：多渠道长时运行稳定性**。飞书 WebSocket 断连（#2335）、会话卡死（#7534）、钉钉会话碰撞（#2414）连续被关闭，说明 IM 渠道 7x24 稳定性曾是/仍是最大抱怨来源，且正在被逐个解决。
- **痛点：企业微信附件-only 发送**（#5558 → PR #5659）已落地，典型“上传 CAD/截图直接处理”工作流诉求。
- **正面信号**：bug 报告质量普遍很高（含复现步骤、根因分析），first-time-contributor 活跃（#7962、#7914、#7613），社区对 Hub 方向讨论参与度高。

## 8. 待处理积压

- **[#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853)** ToolResultPruner 跳过媒体块 — 高影响、8 评论，尚无 fix PR，建议优先。
- **[#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)** 压缩预算问题 — 与 #7836/#7733 同源，虽有 #7872 部分覆盖，需整体方案。
- **[#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534)** 飞书 queue consumer 卡死 — 生产级静默故障，需自愈机制。
- **[#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484)** A2A 支持时间表 — 5 评论，官方尚无明确回复，建议给出 roadmap。
- **待合并 PR 积压（17 条）**：#7872、#7874、#7861、#7956、#7960、#7962 等含多个核心功能与修复，且多个 first-time-contributor PR（#7914、#7613）等待 review，建议加快评审以维持贡献者留存。

---
*数据来源：CoPaw GitHub 仓库 2026-09-23 至 2026-09-24 窗口。链接中的 QwenPaw 为仓库内实际项目名，与 CoPaw 同仓。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目日报 — 2026-09-24

## 1. 今日速览

- 今日项目无 Issue 与 PR 更新，社区互动活动处于静默状态。
- 开发侧活跃度显著：**24小时内连续发布 2 个版本**（v1.9.21、v1.9.22），迭代节奏紧凑。
- 更新聚焦于达人联盟（Affiliate）业务流优化、桌面端体验（标签持久化、授权恢复）等方向，属功能打磨型迭代。
- 无破坏性变更信号，版本号为 patch 级递增，升级风险预计较低。
- 整体健康度：开发推进正常，但社区反馈渠道今日无输入，需关注 issue 响应闭环情况。

## 2. 版本发布

### v1.9.22 — TK Copilot v1.9.22
🔗 [github.com/gaoyangz77/easyclaw/releases](https://github.com/gaoyangz77/easyclaw/releases)

- 桌面工作区标签可在重启后保留（体验优化）
- 修复授权恢复流程（authorization recovery contract）
- 改进达人联盟样品筛选与人工消息处理
- 统一商品标识展示，优化选品控件

### v1.9.21 — TK Copilot v1.9.21
- 支持筛选达人联盟样品历史
- 可从达人列表直接打开商务拓展负责人（BD）详情
- 统一商务开发选择逻辑，修复分页提案浏览可靠性
- 提升 Affiliate AI 筛选模式的可理解性

**迁移注意事项**：两个版本均为 patch 更新，未在 Release Notes 中声明破坏性变更；涉及授权机制的修复（v1.9.22），建议升级后重新验证一次授权状态。

## 3. 项目进展

- 今日无 PR 合并/关闭记录。进展主要体现在版本发布通道上：连续两个版本围绕 **TikTok 达人联盟（Affiliate）运营工作流** 持续深化，覆盖样品筛选、BD 对接、提案分页、AI 筛选模式说明等核心链路。
- 桌面端稳定性与体验同步改善（标签持久化、授权恢复），表明开发重心在“运营工具日常可用性”上持续收敛。

## 4. 社区热点

- 今日无活跃 Issue/PR 讨论，暂无热点可提炼。建议关注下一周期是否有围绕新版本（Affiliate 筛选改动）的用户反馈。

## 5. Bug 与稳定性

- 今日无新增 Bug 报告。
- 值得注意的是，v1.9.22 主动修复了**授权恢复流程**，暗示此前版本可能存在授权相关的稳定性问题，建议已部署用户升级确认（无对应公开 issue/fix PR 链接可附）。

## 6. 功能请求与路线图信号

- 今日无新增功能请求。
- 从版本演进可推断的隐式路线图：达人联盟样品管理 → BD 协作 → AI 筛选辅助 → 桌面端工作区体验，下一版本大概率继续沿 Affiliate 运营链路细化。

## 7. 用户反馈摘要

- 今日 Issue 评论为零，无法提炼用户反馈。参考 Release Notes 表述（如“使 AI 筛选模式更易理解”），推测此前存在用户对 AI 筛选功能理解成本的反馈，已通过文案/交互优化回应。

## 8. 待处理积压

- 今日数据中无长期未响应的 Issue/PR 记录，暂无积压提醒。
- 建议：连续快速发版但社区静默，可考虑在 Release 中引导用户反馈（如 issue 模板、讨论区），以增强版本验证的社区闭环。

---
*数据来源：EasyClaw GitHub 仓库过去 24 小时统计。*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*