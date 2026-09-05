# OpenClaw 生态日报 2026-09-05

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-05 03:32 UTC

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

# OpenClaw 项目动态日报 — 2026-09-05

## 1. 今日速览

OpenClaw 今日保持极高的社区活跃度：过去 24 小时 Issues 更新 500 条（新开/活跃 448，关闭仅 52），PR 更新 500 条（待合并 344，已合并/关闭 156）。无新版本发布，大量活跃 Issue 仍处于 P0/P1 级别且带 `clawsweeper:no-new-fix-pr` 标签，反映出核心运行时（会话状态、消息投递、多 agent 编排）的债务积累速度超过了修复速度。整体健康度评估：**活跃度优秀，但 bug 消化率偏低（关闭率约 10%），稳定性存在系统性压力**。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日活跃 PR 中值得关注的推进（注意：多数仍为 OPEN 状态，合并节奏偏慢）：

- **[#136639](https://github.com/openclaw/openclaw/pull/136639) fix(sessions): 维护压力下保留会话**（steipete，XL，已 ready for maintainer look）— 将默认活跃会话目标从 500 提升至 5,000，防止自动维护误删可恢复的对话，直接回应数据丢失类投诉。
- **[#138820](https://github.com/openclaw/openclaw/pull/138820) fix(codex): 会话轮转后拒绝过期控制命令**（vincentkoc，今日新开）— 修复 `/codex` 控制命令在会话 rollover 后读到过期线程绑定的问题。
- **[#138822](https://github.com/openclaw/openclaw/pull/138822) fix(cli): 修正 OPENCLAW_HOME 状态目录误判**（steipete，今日新开）。
- **[#137783](https://github.com/openclaw/openclaw/pull/137783) / [#135366](https://github.com/openclaw/openclaw/pull/135366) fix(firecrawl)** — 两个 PR 分别将 DNS 解析失败与 SSRF 策略错误区分开，改善自托管诊断体验。
- **[#137756](https://github.com/openclaw/openclaw/pull/137756) fix(browser): 不再将带凭据的 CDP wsUrl 发给模型** — 重要安全修复。
- **[#130973](https://github.com/openclaw/openclaw/pull/130973) feat(agents): compaction 安全超时**（proof: sufficient，等待作者）— 针对大上下文自动压缩失败的修复基础切片。
- 今日关闭的 PR 多为 **stale 自动关闭**（如 #102898、#101819、#96870 等均有 "needs proof" 标签），说明维护者正在清理缺乏证据的长期悬置 PR。

## 4. 社区热点

| Issue | 评论 | 热点分析 |
|---|---|---|
| [#22438](https://github.com/openclaw/openclaw/issues/22438) 分层 bootstrap 文件加载（P2） | 18 | 大工作区用户对 token 预算浪费的强烈诉求，希望子 agent / cron 任务按需加载上下文；已有 linked PR。 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) 2026.3.2 + Vertex/Gemini 回归崩溃（P1） | 16 | 回归类 bug，"Cannot convert undefined or null to object" 使内嵌 agent 完全不可用，3 👍。 |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) transcript 投影 reconcile 活锁（P1） | 15 | 持续写入下主线程阻塞数十秒、所有 channel 停摆——核心性能/稳定性问题。 |
| [#69208](https://github.com/openclaw/openclaw/issues/69208) 跨 channel 消息重复/重放伞形 Issue（P1） | 15 | 维护者承认这是跨 MSTeams/webchat/Telegram/followup 队列的一类系统性 bug。 |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) XDG_CONFIG_HOME 未解析（P2） | 14 | Docker 用户安装 skill 时的路径问题。 |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) 多 agent 编排不稳定（P1） | 14 | 并发 `agents add` 覆盖配置、session-lock 失败、子任务 detached——多 agent 用户的核心痛点。 |

## 5. Bug 与稳定性（按严重程度）

**P0：**
- [#108435](https://github.com/openclaw/openclaw/issues/108435) 2026.7.1 升级后 gateway 无法启动（systemd/ollama/手动均失败，3 👍）— 无 fix PR。
- [#48920](https://github.com/openclaw/openclaw/issues/48920) Live Docs 领先于发布版本（4 👍）— 文档与版本脱节，无 fix PR。

**P1（部分有 linked PR）：**
- [#115908](https://github.com/openclaw/openclaw/issues/115908) transcript 活锁阻塞主线程 — 无 fix PR。
- [#131150](https://github.com/openclaw/openclaw/issues/131150) Slack 多账号 socket 模式下 DM 静默丢失（19 个账号场景）— 有 linked PR。
- [#138272](https://github.com/openclaw/openclaw/issues/138272) Android Talk 实时语音在工具调用轮次必现 "no live response owner"，跨 3 个版本未修复 — 无 fix PR。
- [#97616](https://github.com/openclaw/openclaw/issues/97616) hook/工具子进程僵尸累积 — 无 fix PR。
- [#112259](https://github.com/openclaw/openclaw/issues/112259) 入站消息零负载静默丢弃，无重试/死信 — 无 fix PR。
- [#114234](https://github.com/openclaw/openclaw/issues/114234) 容器 PID 复用导致 usage-cost 锁永久冻结 — 有 linked PR。
- [#119087](https://github.com/openclaw/openclaw/issues/119087) gateway 冷启动回归 ~2.5x（beta 版本间）— 有 linked PR。

**回归/升级路径问题：** #38327（2026.3.2）、#90378（5.28→6.1 cron 静默迁移 SQLite）、#92241（回滚后 stale 模块路径致消息静默丢弃）。升级/回滚路径缺乏保障是反复出现的主题。

## 6. 功能请求与路线图信号

- [#6757](https://github.com/openclaw/openclaw/issues/6757) **agent 自主触发上下文压缩（self-compact）** — 与已进入 review 的 compaction 安全超时 PR #130973 方向一致，落地可能性较高。
- [#22438](https://github.com/openclaw/openclaw/issues/22438) **分层 bootstrap 加载** — 已有 linked PR，讨论 18 条，是最接近落地的上下文管理优化。
- [#51441](https://github.com/openclaw/openclaw/issues/51441) **在 session_status 中暴露实际后端模型**（LiteLLM 场景）— 实现成本低、诉求明确。
- [#53763](https://github.com/openclaw/openclaw/issues/53763) **内置 headless 浏览器** — 讨论多但工程量大，需产品决策。
- [#16670](https://github.com/openclaw/openclaw/issues/16670) **Onboarding 强制配置 Memory/Embedding** — 新用户转化相关，优先级讨论中。
- [#9637](https://github.com/openclaw/openclaw/issues/9637) TUI 无障碍选项 — 长期悬置，属小改动低优先级。

## 7. 用户反馈摘要

- **消息静默丢失是最大痛点**：Slack DM（#131150）、Telegram 回复上下文丢失（#82002）、Matrix 循环（#114211）、iMessage 零负载丢弃（#112259）——用户反复强调"运行看起来成功但用户什么都没收到"这一失败模式。
- **大规模部署受挫**：19 个 Slack 账号、并行多 agent 批处理、持续写入负载等场景集中暴露并发与锁设计缺陷（#43367、#115908、#119720）。
- **升级/回滚不可信**：多个版本切换场景出现静默迁移、配置丢失、启动失败（#90378、#92241、#108435）。
- **正面信号**：社区贡献质量高、诊断报告详尽（含日志、复现步骤）；agent 自动上报 issue（#6757、#71689）展示了项目 dogfooding 成熟度。

## 8. 待处理积压

- [#48920](https://github.com/openclaw/openclaw/issues/48920)（P0，3 月开，文档领先版本）与 [#108435](https://github.com/openclaw/openclaw/issues/108435)（P0 启动失败）均无 fix PR，**建议维护者优先处理**。
- [#69208](https://github.com/openclaw/openclaw/issues/69208) 伞形 Issue 4 月开至今，覆盖的重复消息类 bug 面广，需要产品级决策。
- [#114234](https://github.com/openclaw/openclaw/issues/114234)、[#114154](https://github.com/openclaw/openclaw/issues/114154)（bundle-mcp 工具静默不生效）等 7 月 P1 均有 PR 但停滞在 review。
- PR 侧：#111913（Anthropic 长上下文恢复，P1，needs proof）、#108574（Signal 握手超时，P1，waiting on author）等待推动。今日大量 stale 自动关闭提示**贡献者需及时补充真实行为证明**，否则 PR 会被回收。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告
**数据窗口：2026-09-04 至 2026-09-05**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入**高活跃度、强分化**阶段：以 OpenClaw 为代表的头部项目单日 Issue/PR 活动量达 500 条级别，但普遍面临“活跃度优秀、bug 消化率偏低”的稳定性压力。生态正从单体对话助手向**多渠道接入（Telegram/Slack/飞书/QQ/IRC）、多 agent 编排、生产级部署（多租户、企业存储、可观测性）**演进。跨项目共性技术债集中在：消息静默丢失、会话状态管理、资源无界增长、升级/回滚路径不可靠。小型项目（NullClaw、TinyClaw、ZeptoClaw、Moltis）处于平稳维护或观察期，生态呈金字塔结构。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | Release | 核心风险/亮点 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（关闭率 ~10%） | 500（344 待合并） | 无 | 2 个 P0 无 fix PR；升级/回滚路径系统性问题 | ⚠️ 活跃极高但债务累积，稳定性承压 |
| **Hermes Agent** | 50（关闭 3） | 50（48 待合并） | 无 | SSH 401 回归、state.db 多写者损坏；合并吞吐低 | ⚠️ 贡献管道充实，审查带宽瓶颈 |
| **Zeroclaw** | 34（关闭 10） | 50（43 待合并） | v0.8.5 预热中 | RFC 治理成熟；crates.io 分发里程碑 | ✅ 良好，发布在即 |
| **CoPaw (QwenPaw)** | 23（关闭 8） | 27（20 待合并） | 无 | 2.2 版本 bug 簇爆发但当日闭环；Hub 多租户讨论 | ✅ 良好，修复闭环快 |
| **LobsterAI** | 1 | 33（28 合并） | **2 个版本** | 存储层缺陷 #1071 挂起 5 个月 | ✅ 交付效率极高，社区互动弱、数据债风险 |
| **NanoBot** | 5（关闭 3） | 28（21 待合并） | 无 | 时间敏感 P1（OpenCode 头，明日截止）；内存泄漏三连修 | ✅ 良性循环 |
| **PicoClaw** | 4（关闭 0） | 22（2 待合并） | 无 | 批量关闭旧 PR 疑似丢失修复；QQ 401 上游依赖问题 | 🟡 清理期，需确认修复落地 |
| **NanoClaw** | 2（生产级严重） | 18（15 待合并） | 无 | #3716 归档无限增长致生产 OOM | 🟡 架构治理期，生产稳定性风险 |
| **IronClaw** | 7 | 12（9 待合并） | 无 | cancel API 完全失效；Telegram 体验系统修复 | ✅ 良好，issue→PR 闭环快 |
| **EasyClaw** | 0 | 0 | **3 个版本** | 无反馈数据，重放机制重复派发风险待验证 | 🟡 高强度发版，社区静默 |
| **NullClaw / Moltis** | ≤1 | ≤1 | 无 | 低活跃平稳维护 | 🟡 维护期 |
| **TinyClaw / ZeptoClaw** | 0 | 0 | 无 | 完全静默 | ⚪ 观察期 |

---

## 3. OpenClaw 在生态中的定位

**优势：**
- **规模绝对领先**：单日 500 条 Issue/PR 活动，约为第二名 Hermes Agent 的 10 倍，社区规模和贡献者基数无可匹敌。
- **渠道覆盖最广**：MSTeams、Slack（19 账号场景）、Telegram、Matrix、iMessage、Android Talk 语音——是唯一在“全渠道 + 实时语音”均有真实生产负载的项目。
- **Dogfooding 成熟**：agent 自动上报 issue（#6757、#71689），诊断报告质量高。

**劣势：**
- **Bug 关闭率仅 ~10%**，而 CoPaw、NanoBot、IronClaw 均能实现“当日报告、当日修复合并”。
- 大量 P0/P1 挂 `clawsweeper:no-new-fix-pr` 标签，核心运行时债务（transcript 活锁、消息重放伞形 Issue #69208）需要产品级决策而非零散修复。
- 升级/回滚不可信（#90378、#92241、#108435）是反复出现的系统性主题。

**技术路线差异**：OpenClaw 走“大而全的运行时”路线，债务集中在并发/锁设计；Zeroclaw 走 Rust 23-crate 工程化 + RFC 治理路线；Hermes Agent 重度投入状态管理加固（SessionDB 锁安全门扩展至 12 个 mixin）；NanoClaw 则在做 provider 类型化合约重构。OpenClaw 的架构复杂度带来的并发缺陷（#43367、#115908）恰是中小项目尚未触及的规模化问题。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **上下文压缩（compaction）治理** | OpenClaw（#6757 self-compact、PR #130973 安全超时）、NanoBot（PR #5656 `/compact` + 生命周期事件）、Hermes（#103246 原生 compaction）、NanoClaw（#3716 PreCompact 归档 OOM） | 长会话下自动/可视化/安全的压缩是全生态刚需，且均暴露出压缩机制本身的不稳定 |
| **Prompt cache 优化** | NanoBot（#5662 `x-opencode-session` 头，**明日强制生效**）、Zeroclaw（#10619/#10603 同一头部问题）、IronClaw（#8062 稳定 cache key）、Hermes（GPT-6 Astra 方向） | 第三方中继服务的 cache 合规要求正成为跨项目时间敏感事项 |
| **会话/存储层可靠性** | Hermes（state.db 多写者损坏）、LobsterAI（#1071 SQLite 三缺陷）、CoPaw（#7558 可插拔 PG/MySQL）、Zeroclaw（#9487 runtime-owned sessions RFC） | 单文件 SQLite 在多 profile/网络盘/K8s 场景全面告急 |
| **静默失败可观测性** | OpenClaw（#112259 零负载丢弃）、Zeroclaw（#10593/#10594 cron/备份静默失败）、CoPaw（#6921 任务静默停止）、Hermes（PTY 泄漏） | “宁可显式报错不要无声跳过”是自托管运维者的共同呐喊 |
| **无界资源增长** | NanoBot（3 个无界缓存 PR）、NanoClaw（归档无轮转）、Hermes（#96418 PTY 泄漏）、OpenClaw（#97616 僵尸进程） | 长期运行场景下资源上限审计普遍缺位 |
| **多租户/企业化** | CoPaw（Hub #7318）、IronClaw（共享频道）、NanoClaw（operator 策略） | 个人工具向团队部署转型信号明确 |

---

## 5. 差异化定位分析

| 维度 | 分层 |
|---|---|
| **全渠道个人助手** | OpenClaw（全渠道+语音）、CoPaw（飞书/中文生态）、NanoBot（飞书卡片流式整合）、PicoClaw（QQ/IRC/边缘设备如 Orange Pi） |
| **生产级工程化** | Zeroclaw（Rust、crates.io 分发、RFC 治理、安全语义修复）、Hermes Agent（状态加固、审批作用域、systemd 部署） |
| **桌面/商业化产品** | LobsterAI（应用内浏览器+订阅漏斗）、EasyClaw（电商客服场景、密集发版） |
| **架构治理型** | NanoClaw（provider 合约化、skills 安全边界）、IronClaw（Telegram 原生深耕+子智能体可靠性） |
| **技术栈差异** | Zeroclaw 用 Rust（23 crate），NullClaw 用 Zig，其余以 TS/Python 为主——Rust/Zig 项目 bug 率显著更低但迭代更慢 |

目标用户谱系：**边缘/低功耗自托管**（PicoClaw）→ **个人极客**（OpenClaw、Hermes）→ **团队/企业**（CoPaw Hub、NanoClaw）→ **终端消费者**（LobsterAI、EasyClaw）。

---

## 6. 社区热度与成熟度分层

- **快速迭代冲刺期**：LobsterAI（日发 2 版、28 PR 合并）、EasyClaw（日发 3 版）、Zeroclaw（v0.8.5 发版前夕）
- **高活跃 + 质量巩固期**：OpenClaw（债务消化）、Hermes（回归修复 + 审查积压 48 PR）、CoPaw（2.2 bug 簇清理）
- **健康稳步期**：NanoBot、IronClaw、NanoClaw（issue→PR 闭环快，架构投入中）
- **清理/维护期**：PicoClaw（批量关闭）、NullClaw、Moltis
- **静默期**：TinyClaw、ZeptoClaw

**关键观察**：活跃度与修复效率不成正比——OpenClaw 活动量是 IronClaw 的 40 倍，但后者当日闭环率远高。中型项目（2-5 万星量级假设）的维护者响应带宽是当前生态健康度的最优区间。

---

## 7. 值得关注的趋势信号

1. **“静默失败”是生态头号信任杀手**：跨 6 个项目重复出现（消息丢弃、任务假停、cron 不调度、备份静默跳过）。对开发者的启示：**为每个异步路径设计显式失败面 + 死信/重试机制**应成为 agent 框架的默认架构约束，而非事后补丁。

2. **压缩（compaction）从功能变为基础设施**：OpenClaw、NanoBot、Hermes、NanoClaw 四个项目同时在压缩方向投入，且都在经历“压缩本身引入新故障”（超时、OOM、活锁）。长上下文管理是下一阶段竞争的核心壁垒。

3. **第三方中继合规窗口正在关闭**：OpenCode `x-opencode-session` 头 2026-09-06 强制生效，NanoBot 与 Zeroclaw 同日中招。agent 框架对上游 LLM 服务协议变更的**响应速度**（数小时内出 PR）将成为运维能力指标。

4. **自托管/私有化需求持续走高**：NullClaw（Firecrawl 自托管 endpoint）、CoPaw（局域网 LLM、SQLite WAL 不可用）、PicoClaw（边缘设备）——数据主权用户是不可忽视的细分市场，且其反馈质量（含行号的审计报告）普遍最高。

5. **安全面从“边界防御”转向“语义防御”**：Zeroclaw 空 `allowed_groups` 语义修复、CoPaw MCP 白名单运行时绕过、NanoClaw 提示注入转义——安全 bug 正从注入类转向“配置看似生效实则失效”类，需要专门的配置语义测试。

6. **治理流程本身成为交付物**：Zeroclaw 的 RFC Revision 机制、NanoClaw 的 provider 合约化、CoPaw 的官方路线图征集帖（22 评论）表明，成熟项目正把社区决策流程产品化，这对维持大规模贡献者粘性至关重要。

---

**给技术决策者的一句话总结**：若需全渠道生产部署，OpenClaw 功能最全但需自担稳定性债务；追求工程可靠性与可分发性选 Zeroclaw（v0.8.5 即将发布）；中文/飞书生态选 CoPaw；边缘与低资源场景选 PicoClaw；所有选型都应重点评估各项目的**静默失败处理与升级路径保障**——这是当前生态最普遍的短板。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-09-05

## 1. 今日速览

NanoBot（HKUDS/nanobot）过去 24 小时保持高活跃度：Issues 更新 5 条（新开/活跃 2、关闭 3），PR 更新 28 条（待合并 21、已合并/关闭 7），无新版本发布。今日贡献主力包括 @Shizoqua（连续提交 3 个内存边界修复）、@HaisamAbbas、@chengyongru 和 @GUTYL，呈现出“社区贡献踊跃、维护者审合并节奏稳定”的良性循环。值得注意的是 #5661/#5662 涉及 OpenCode Zen/Go 的**外部服务强制变更（2026-09-06 生效）**，属于时间敏感的 P1 事项。整体项目健康度良好，但 21 个待合并 PR 的积压值得关注。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

今日已合并/关闭 7 个 PR，主要推进方向：

- **WebUI 体验增强**：[#5660](https://github.com/HKUDS/nanobot/pull/5660) 在上下文用量弹窗中展示模型生成速度（tokens/s），关闭了 Issue #5631，属于社区请求的快速响应落地。
- **TUI/WebUI 稳定性**：[#5639](https://github.com/HKUDS/nanobot/pull/5639) 修复会话标签居中、OpenTUI 升级至 0.5.10（修复流式代码块消失）、配对提示优化。
- **架构重构**：[#5657](https://github.com/HKUDS/nanobot/pull/5657) 从 `WebSocketChannel` 中抽取类型化的出站编码器，统一 `send_payload` 原语，为后续 WebUI 协议演进打基础。

今日关闭的 3 个 Issues（#5631、#5645、#5644）均有对应修复落地，闭环效率较高。

## 4. 社区热点

- **[#5567](https://github.com/HKUDS/nanobot/issues/5567)（评论 4 条）**：飞书渠道应将多轮回复整合为单条流式卡片消息。用户痛点明确——agent 一次回复产生 n 条分离消息（工具提示、进度、最终回复），破坏“一问一答”体验。讨论持续一周仍有新评论，是当前最受关注的话题，已有 CardKit 流式基础（`send_delta()`），整合方案技术可行。
- **[#5662](https://github.com/HKUDS/nanobot/pull/5662)（P1）**：响应 OpenCode 官方公告，为 OpenAICompatProvider 附加 `x-opencode-session` 头以维持 prompt cache 优化，**缺失该头自 2026-09-06 起可能报错**——维护者应在截止日前尽快合并。
- **[#5666](https://github.com/HKUDS/nanobot/pull/5666)**：aimlapi.com 商业方主动提交内置 Provider 接入 PR（1000+ 模型聚合），体现项目对第三方服务商的吸引力，需维护者评估合作条款与维护负担。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高（P1，时间敏感） | [#5661](https://github.com/HKUDS/nanobot/issues/5661)：OpenCode Zen/Go 缺失 `x-opencode-session` 头，2026-09-06 起可能报错 | 已有 fix PR [#5662](https://github.com/HKUDS/nanobot/pull/5662)，待合并 |
| 🟡 中（回归） | [#5645](https://github.com/HKUDS/nanobot/issues/5645)：0.3.0 中 Current Time runtime-context 默认缺失（0.2.2 正常），文档与行为不一致 | **已关闭** |
| 🟡 中（并发 bug） | [#5644](https://github.com/HKUDS/nanobot/issues/5644)：WebUI locale registry 并发加载丢失 locale（如 `en`） | **已关闭** |
| 🟡 中（内存泄漏类） | 三个无界缓存问题，均由 @Shizoqua 今日提交修复：MCP OAuth 流缓存 [#5665](https://github.com/HKUDS/nanobot/pull/5665)、空闲摘要缓存 [#5664](https://github.com/HKUDS/nanobot/pull/5664)、Mattermost 线程上下文缓存 [#5663](https://github.com/HKUDS/nanobot/pull/5663) | PR 待合并 |
| 🟡 中（回归） | [#5647 → PR #5648/#5658](https://github.com/HKUDS/nanobot/pull/5648)：WebUI 会话标题在 envelope 缺少 `webui` 标志时不生成（#5528 引入的回归） | 两个竞争修复 PR 待合并 |
| 🟢 低 | [#5504](https://github.com/HKUDS/nanobot/pull/5504)：模型重试状态未在 UI 中展示 | PR 待合并 |

今日无崩溃类严重问题报告，但内存无界增长类 bug 密集出现（3 个同类 PR），提示项目需引入系统性的资源上限审计。

## 6. 功能请求与路线图信号

- **上下文压缩可视化**：[#5656](https://github.com/HKUDS/nanobot/pull/5656) 新增 `/compact` 命令 + 结构化 `context_compaction` 生命周期事件，是长会话管理方向的重大功能，很可能进入下一版本。
- **Runtime-context ephemeral 机制**：[#5659](https://github.com/HKUDS/nanobot/pull/5659) 为 runtime-context 块增加 `ephemeral` 一次性注入标志，配合已关闭的 #5645，表明 0.3.x 正在系统重构 runtime-context 生命周期。
- **可观测性**：[#5520](https://github.com/HKUDS/nanobot/pull/5520) 为 Codex provider 增加 Langfuse 原生 tracing，与已落地的生成速度展示（#5660）共同指向“生产可观测性”路线。
- **文件系统工具补全**：[#5626](https://github.com/HKUDS/nanobot/pull/5626) 新增 `copy_file`/`move_file` 原语，填补工具集空白。
- **Heartbeat 增强**（6 月起的长期 PR）：[#4551](https://github.com/HKUDS/nanobot/pull/4551)、[#4549](https://github.com/HKUDS/nanobot/pull/4549) 提供共享会话与廉价模型 override 选项，排队近 3 个月。

## 7. 用户反馈摘要

- **飞书用户**（#5567）：核心痛点是多消息碎片化，“用户发一条 → agent 回 n 条”体验割裂，期望流式卡片整合——反映 IM 渠道用户对消息形态一致性的强诉求。
- **WebUI 用户**（#5631）：希望像 DeepSeek 一样直观看到上下文占用与生成速度，说明用户在用 NanoBot 做长会话/高强度任务，需要成本与性能感知。
- **升级用户**（#5645）：0.2.2 → 0.3.0 升级后 runtime-context 默认行为变化未在文档中体现，暴露版本间隐性 breaking change 的沟通缺口。
- **运维侧信号**：OpenCode 头部缺失问题（#5661）说明有用户在实际使用 OpenCode Zen/Go 付费服务，项目已进入生产使用场景。

## 8. 待处理积压

| 条目 | 积压时长 | 建议 |
|---|---|---|
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) heartbeat shared session | ~2.5 个月 | 功能完整但长期无审合并，建议维护者给出决策 |
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) heartbeat model override | ~2.5 个月 | 同上，可与 #4551 一并评审 |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) memory consolidation 输入截断修复 | ~3 周 | 涉及记忆数据完整性，优先级应更高 |
| [#5490](https://github.com/HKUDS/nanobot/pull/5490) token 用量聚合修复（标记 conflict） | ~2 周 | 存在合并冲突，需 rebase |
| [#5431](https://github.com/HKUDS/nanobot/pull/5431) 后台任务异常静默丢失 | ~3 周 | 影响可调试性，建议尽快处理 |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) 模型重试状态展示 | ~2 周 | 用户可见功能，排队中 |

**关键提醒**：[#5662](https://github.com/HKUDS/nanobot/pull/5662)（P1）因外部服务 2026-09-06 生效的强制要求，**需在今日/明日内合并**，否则 OpenCode Zen/Go 用户将面临请求失败风险。当前 21 个待合并 PR 中约 8 个为 bug/performance 修复，建议优先处理内存边界三连修（#5663/#5664/#5665）。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 — 2026-09-05

## 1. 今日速览

Zeroclaw 今日保持高活跃度：过去 24 小时内 Issues 更新 34 条（新开/活跃 24，关闭 10），PR 更新 50 条（待合并 43，已合并/关闭 7），无新版本发布。最值得关注的信号是 [PR #10632](https://github.com/zeroclaw-labs/zeroclaw/pull/10632) 已将 23-crate 工作区版本从 0.8.4 提升至 **v0.8.5**，与 [v0.8.5 稳定线追踪器 #9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)（今日仍在更新）相互印证，表明版本发布已进入最后阶段。社区讨论焦点集中在架构级 RFC（运行时会话所有权、桌面 computer-use）以及一批 S1 级安全/可靠性 Bug。整体健康度良好：Bug 关闭速度与新报速度基本持平，核心维护者（@JordanTheJet、@Audacity88、@IftekharUddin、@vrurg）响应及时。

## 2. 版本发布

今日无正式 Release 发布。但 [PR #10632](https://github.com/zeroclaw-labs/zeroclaw/pull/10632)（`chore(release): bump version to v0.8.5`）已完成 0.8.4 → 0.8.5 的全量版本协调，覆盖 23 个 crate 及安装器、容器、Nix、Tauri、stable-doc 等全部发布面，并锁定了最终签名翻译快照。**预计 v0.8.5 将于近日正式发布**，用户可关注 Releases 页面。

## 3. 项目进展

今日合并/关闭的 PR（7 条）：

- **[PR #10153](https://github.com/zeroclaw-labs/zeroclaw/pull/10153)** — WhatsApp Web 港口迁移至 whatsapp-rust 0.7.0：将 6 个 git-pinned 依赖替换为 crates.io 正式发布版，这是 crates.io 发布（#10158）的前置条件，protobuf 字段移植到 buffa `MessageField`，消息事件改为有序批处理。
- **[PR #10158](https://github.com/zeroclaw-labs/zeroclaw/pull/10158)** — 将工作区 23 个 crate 标记为可发布至 crates.io（保持维护工具、fixtures、桌面 bundle 私有），并纳入 zerorelay/relay-proto/tls。**里程碑意义：Zeroclaw 正式走向可分发 Rust 库生态**。
- **[PR #10587](https://github.com/zeroclaw-labs/zeroclaw/pull/10587)** — dependabot rust-all 组 49 项依赖更新。
- **[Issue #10571](https://github.com/zeroclaw-labs/zeroclaw/issues/10571)** — Twitch 文档任务的 good first issue 关闭。

推进评估：今日进展集中在**发布准备与依赖正规化**两条线，是 v0.8.5 发版与 crates.io 分发战略的关键一步。

## 4. 社区热点

- **[#9487 RFC: Runtime-owned conversation sessions and transport adapters](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)**（32 评论，今日更新）— Revision 5 实质性地替换了 Rev 4 的投票快照，之前的反对票不延续，需重新开启讨论窗口。这是当前最活跃的架构讨论，涉及运行时会话所有权与传输面适配，标签显示 `risk:high` + `needs-maintainer-review`，尚未收敛。
- **[#6909 RFC: 桌面 computer-use 支持](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)**（16 评论）— 已接受状态下的 Revision 2 维护者接管，纳入安全澄清：有界审批单元、执行时重验证、会话武装、sidecar 信任。Computer-use 落地安全模型在持续打磨。
- **[#9397 RFC: 空 `allowed_groups` 应视为全部拒绝](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)**（14 评论，今日关闭）— 与同日关闭的 [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) 构成一组 S1 安全修复闭环：修复了“看似配置了白名单实则对全部群组开放”的高危语义。
- **[#10050 RFC: 网关 verbatim 发送](https://github.com/zeroclaw-labs/zeroclaw/issues/10050)**（13 评论）— 已接受，补充 gateway 47 个 API 路径中缺失的“不经 agent turn 直接发消息”能力。
- **PR 侧热点**：[PR #9739 ZeroCode 多会话面板](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) 维护者完成了有界重连与多会话生命周期修复；[PR #10619 Anthropic prompt-cache 透传](https://github.com/zeroclaw-labs/zeroclaw/issues/10619) 新开即标 `priority:p1`。

## 5. Bug 与稳定性（按严重度排列）

**S1（工作流阻断/安全风险）：**

| 问题 | 状态 | Fix 情况 |
|---|---|---|
| [#10609 ZeroCode 忽略启动目录，强制 workspace 为 cwd](https://github.com/zeroclaw-labs/zeroclaw/issues/10609) | 新开，in-progress | 尚无关联 PR |
| [#10603 OpenCode provider 从不发送 x-opencode-session，可能触发账号风控](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) | in-progress | 尚无关联 PR |
| [#10593 backup.schedule_cron 静默不调度任何备份](https://github.com/zeroclaw-labs/zeroclaw/issues/10593) | in-progress | 相关：[PR #9320 cron 超时修复](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) |
| [#9421 不完整终端响应被上报为成功](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) | in-progress | 待修 |
| [#9882 图片标记绕过 run_model_query 直接分发路径的内容校验](https://github.com/zeroclaw-labs/zeroclaw/issues/9882) | accepted | 待实现 |
| [#10357 工具错误路径丢弃详细错误体（已关闭）](https://github.com/zeroclaw-labs/zeroclaw/issues/10357) | ✅ 已闭环 | — |
| [#10223 ZeroCode 重连期间丢弃 Ctrl+C（已关闭）](https://github.com/zeroclaw-labs/zeroclaw/issues/10223) | ✅ 已闭环 | — |

**S2（体验降级）：**

- [#10594 cron 任务未运行时零记录，静默失败不可见](https://github.com/zeroclaw-labs/zeroclaw/issues/10594) — in-progress
- [#10626 TTS 逐字朗读 Markdown 与 emoji](https://github.com/zeroclaw-labs/zeroclaw/issues/10626) — 新开
- [#10625 非视觉模型下 `[media attachment]` 占位符泄漏给用户](https://github.com/zeroclaw-labs/zeroclaw/issues/10625) — 新开

**S3/CI：** [#10585 新 log sink 回归在并行测试运行器下与迁移测试竞争](https://github.com/zeroclaw-labs/zeroclaw/issues/10585)，今日已有针对性修复 PR [#10633](https://github.com/zeroclaw-labs/zeroclaw/pull/10633)。

今日新报 Bug 中 **#10625 与 #10626 均来自自托管用户 @sebkraemer**，尚无维护者响应。

## 6. 功能请求与路线图信号

- **[Issue #10619 Anthropic prompt-cache 透传](https://github.com/zeroclaw-labs/zeroclaw/issues/10619)**（`priority:p1`, in-progress）— OpenAI-compatible provider 当前硬编码 `prompt_caching: false`。透过翻译网关保留 `cache_control` 可显著降低成本，属于高价值需求，实现已在推进。
- **[#10588 提升 multimodal.max_image_size_mb 默认值至 20](https://github.com/zeroclaw-labs/zeroclaw/issues/10588)** — in-progress，小改动，很可能进入 v0.8.5 后续补丁。
- **[#9487 / #6909 两大 RFC** 一旦收敛，将定义下一大版本（v0.9+）的架构方向：runtime-owned sessions 与桌面 computer-use。
- **[PR #10407 持久会话 prompt 附件](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)**（needs-author-action）— SQLite 支持的最多 4 个持久附件 + 工具化操作，安全审批模型完备，接近合并。
- **文档基建**：[#10580 全仓内链检查](https://github.com/zeroclaw-labs/zeroclaw/issues/10580)、[#10579 修复 Reference 断链](https://github.com/zeroclaw-labs/zeroclaw/issues/10579) 均为低成本高收益，配合发版文档冻结期，预计近期处理。

## 7. 用户反馈摘要

- **Bedrock 用户（#8720）**：Nova 2 Lite 模型随机缓存报错，希望配置项可关闭 cachePoint——反映 AWS 兼容模型长尾兼容痛点，该支持工单今日已关闭。
- **自托管 TTS/多模态用户（#10625、#10626）**：文本模型 + 语音输出的组合场景下体验粗糙（占位符泄漏、朗读 Markdown），说明**非旗舰路径的端到端打磨不足**。
- **CLI 日常用户（#10609）**：ZeroCode 强制 workspace 为 cwd 打断了“在哪启动就在哪工作”的直觉习惯，属高频工作流阻断。
- **OpenCode 中继用户（#10603）**：担心缺少 session header 导致账号被标记，反映社区对第三方中继合规性的敏感。
- **运维向反馈（#10593/#10594）**：备份与 cron 的“静默失败”模式是运维信任度的核心痛点——用户宁可要显式报错也不要无声跳过。

## 8. 待处理积压

- **[#9487 RFC Rev 5](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)**（`needs-maintainer-review`）— Rev 4 投票作废后需维护者重新开启讨论窗口与快照，阻塞后续投票流程。
- **[PR #9109 Hailo-Ollama 原生支持](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)**（7/17 开启，`do-not-merge`）— 已积压近 2 个月，需维护者裁定与 crates.io 发布战略的关系。
- **[PR #9419 限流后轮换活跃凭据](https://github.com/zeroclaw-labs/zeroclaw/pull/9419)**（`do-not-merge`, needs-maintainer-review）— 高风险安全改动，长期挂起。
- **[PR #9713 token 计账暴露](https://github.com/zeroclaw-labs/zeroclaw/pull/9713)**（`status:blocked`）与 **[PR #10241 监督 shell 审批路由](https://github.com/zeroclaw-labs/zeroclaw/pull/10241)**（blocked）— 两个 `channel:core` XL 级 PR 被前置依赖卡住，建议梳理阻塞链。
- **[#8650 日志路径诊断](https://github.com/zeroclaw-labs/zeroclaw/issues/8650)** — 7/3 开启，虽 in-progress 但已 2 个月，低优先级易被 stale。
- **[#10625 / #10626](https://github.com/zeroclaw-labs/zeroclaw/issues/10626)** — 今日新报，建议维护者尽快打标签分流。

---
*数据来源：GitHub（过去 24 小时）；统计窗口内无 Release。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-09-05

## 1. 今日速览

Hermes Agent 今日保持高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 47，关闭 3），PR 更新 50 条（待合并 48，合并/关闭仅 2），无新版本发布。社区贡献管道非常充实，但合并吞吐明显偏低（48 个待合并 PR 堆积），维护者审查带宽可能成为瓶颈。今日新报告的 P1 问题集中在 **Desktop SSH 远程模式 401**（多份重复报告）和 **state.db 多写入者损坏**，是当前最需关注的稳定性风险。

## 2. 版本发布

今日无新版本发布。最新可参照版本仍为 v0.21.0 / v2026.8.31（多个 Issue 中提及）。

## 3. 项目进展

今日合并/关闭仅 2 条 PR，整体推进有限，但待合并队列质量较高，代表即将落地的方向：

- **配置/工具面治理**：[PR #103075](https://github.com/NousResearch/hermes-agent/pull/103075) 强制 per-profile toolset 收窄，未知名称 fail-closed，统一 CLI/TUI/消息面的显示一致性。
- **状态管理加固**：[PR #103359](https://github.com/NousResearch/hermes-agent/pull/103359) 将 SessionDB 锁安全门扩展至全部 12 个 mixin 文件；[PR #103389](https://github.com/NousResearch/hermes-agent/pull/103389) 保证增量持久化失败时工具调用 1:1 配对完整性。
- **压缩与原生 Responses**：[PR #103070](https://github.com/NousResearch/hermes-agent/pull/103070) 前向移植原生 Responses 压缩所有权。
- **新能力**：[PR #103385](https://github.com/NousResearch/hermes-agent/pull/103385) graph-loop-orchestrator 多智能体编排插件；[PR #103386](https://github.com/NousResearch/hermes-agent/pull/103386) 有界授权（`/approve for 30m`）作为第四种审批作用域；[PR #103384](https://github.com/NousResearch/hermes-agent/pull/103384) `read_file` Markdown 大纲模式。
- **稳定性修复排队中**：[PR #92495](https://github.com/NousResearch/hermes-agent/pull/92495)（update 时 SQLite 快照挂起）、[PR #78504](https://github.com/NousResearch/hermes-agent/pull/78504)（网关 PID 复用误报 stopped）。

## 4. 社区热点

- **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index 过期（157 条评论，7-18 至今未解）**：自动化巡检显示索引 29.8h（超 26h 限制），影响 /docs/skills 可用性。作为长期挂起的自动化告警，评论量巨大，反映 CI/CD 修复一直未落地，建议优先处理。
- **[#97681](https://github.com/NousResearch/hermes-agent/issues/97681) Bot Group Chats 桌面端关闭后继续运行（23 条评论）**：gateway 权属与跨网关传输已在 main，剩余是生产化接线。用户对“7×24 运行的群聊 Bot”诉求强烈。
- **[#18715](https://github.com/NousResearch/hermes-agent/issues/18715) 远程 Agent + 本地工具执行（29 👍，18 条评论）**：点赞最高的功能请求，处于 needs-decision 状态，自 5 月挂起至今，是远程/本地混合架构的核心场景。

## 5. Bug 与稳定性（按严重度排列）

**P1 — 高危**

| 问题 | 状态 | Fix PR |
|---|---|---|
| [#103313](https://github.com/NousResearch/hermes-agent/issues/103313) / [#103054](https://github.com/NousResearch/hermes-agent/issues/103054) / [#103366](https://github.com/NousResearch/hermes-agent/issues/103366) Desktop SSH 远程模式敏感 API 全部 401（mount_spa 注入过期 session token，5f1feb5344 回归） | OPEN，#103313 已标 duplicate 并 CLOSED，暗示主 Issue 在处理中 | 未见明确 fix PR |
| [#103339](https://github.com/NousResearch/hermes-agent/issues/103339) 多 profile 主机上 `doctor --fix` 二次写入损坏 live-WAL state.db，**4 天内 7 次损坏**；提议 lazy flock 单写者门 | OPEN，今日新报，含实测复现 | 无，需维护者决策 |
| [#102486](https://github.com/NousResearch/hermes-agent/issues/102486) systemd 249 拒绝 `OOMPolicy=kill`，导致**所有** gateway cron worker 派发失败（v0.21.0 后回归） | OPEN | 未见 |
| [#93817](https://github.com/NousResearch/hermes-agent/issues/93817) / [#49664](https://github.com/NousResearch/hermes-agent/issues/49664) `display.show_reasoning` 开关无效，thinking + 全部工具调用仍刷入对话 | OPEN（用户标 P0） | 无 |
| [#98022](https://github.com/NousResearch/hermes-agent/issues/98022) 陈旧 update receipt 导致 `hermes update` 每次运行都重启舰队 | OPEN | 无 |

**P2 — 中危**

- [#85110](https://github.com/NousResearch/hermes-agent/issues/85110) answer-only 模式跨 Grok/Fireworks/DeepInfra 全面失效。
- [#96418](https://github.com/NousResearch/hermes-agent/issues/96418) 回环绑定禁用 WS keepalive，反代场景下每个死客户端泄漏一个 PTY 子进程。
- [#103302](https://github.com/NousResearch/hermes-agent/issues/103302) subagent worktree 隔离静默降级为共享 cwd，并改写父仓库 .gitignore。
- [#102408](https://github.com/NousResearch/hermes-agent/issues/102408) .DS_Store 被误判为用户修改，冻结捆绑 skill 更新。
- [#9730](https://github.com/NousResearch/hermes-agent/issues/9730)（4 月至今）Docker 沙箱在禁 `--init` 主机上崩溃。

## 6. 功能请求与路线图信号

- **GPT-6 Astra 支持**：[#103015](https://github.com/NousResearch/hermes-agent/issues/103015) tracker + [#103246](https://github.com/NousResearch/hermes-agent/issues/103246) 原生 compaction，已有依赖 PR（#103070）在队列中，明确是进行中方向。
- **有界授权作用域**（[PR #103386](https://github.com/NousResearch/hermes-agent/pull/103386)）设计完整，接近可合并。
- **浏览器 headed 模式 per-session 选择**（[#100428](https://github.com/NousResearch/hermes-agent/issues/100428)）已有对应 PR [#103069](https://github.com/NousResearch/hermes-agent/pull/103069)（浏览器/profile 选择），大概率纳入下版。
- **Antigravity/Gemini ACP**（[#103368](https://github.com/NousResearch/hermes-agent/issues/103368)）：ACP Registry 已收录，接入呼声初现。
- **桌面会话滚动位置记忆**（[#45562](https://github.com/NousResearch/hermes-agent/issues/45562)）6 月至今未排期。

## 7. 用户反馈摘要

- **最集中的痛点是“推理/工具调用噪音无法关闭”**：show_reasoning 失效（#49664/#93817/#85110）多位用户称“让 Desktop 不可用”，是桌面端最伤体验的问题。
- **SSH 远程模式 401** 在 9/4–9/5 连续 3+ 份独立报告，说明是广泛触发的回归而非个例。
- **重度自托管用户**（多 profile、VPS、systemd、反代）持续报告生产环境问题（state.db 损坏、cron 失败、PTY 泄漏），显示该群体是核心贡献者，但稳定性欠账在累积。
- 满意点：社区 PR 质量高、复现报告详尽（含 pinned commit 源码级分析），官方诊断链接（support.nousresearch.com）降低了排障门槛。

## 8. 待处理积压

- **48 个 PR 待合并**，其中 8 月的 [#86285](https://github.com/NousResearch/hermes-agent/pull/86285)、[#78504](https://github.com/NousResearch/hermes-agent/pull/78504)、[#92495](https://github.com/NousResearch/hermes-agent/pull/92495) 已等待 2-6 周，审查积压明显。
- [#66616](https://github.com/NousResearch/hermes-agent/issues/66616)：157 条评论、持续近 2 个月的 CI 索引过期，应尽快修复或降级自动化噪音。
- [#18715](https://github.com/NousResearch/hermes-agent/issues/18715)：29 👍 的最高热度功能请求，5 月至今 needs-decision，建议给出明确路线图答复。
- [#9730](https://github.com/NousResearch/hermes-agent/issues/9730)：4 月 Docker 沙箱兼容性问题仍未关闭。

**健康度小结**：社区活跃、贡献质量高，但 P1 回归（SSH 401、show_reasoning、cron/OOMPolicy）集中爆发且合并吞吐不足，建议优先投入维护者审查带宽与回归防护。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-09-05）

## 1. 今日速览

PicoClaw 今日保持较高活跃度：24 小时内 PR 更新 22 条（待合并 2 条，合并/关闭 20 条），Issue 更新 4 条（全部为活跃/新开，无关闭）。今日无新版本发布。值得注意的是，大量 3-4 月的旧 PR 集中被批量关闭（多数带 stale 标签），显示维护者正在进行积压清理；同时新增 2 个文档类 PR 和 2 个新 Issue，社区关注点集中在 OpenAI 兼容 Provider 扩展与渠道层稳定性。

## 2. 版本发布

今日无新版本发布。当前最新版仍为 0.3.1（含 nightly 构建）。

## 3. 项目进展

今日无明确合并记录，主要为批量关闭操作：

- **积压清理**：约 18 个 2026 年 3-4 月的历史 PR 被关闭，多为 @badgerbees 提交的 provider/channel/agent 层修复（如 [#1683](https://github.com/sipeed/picoclaw/pull/1683)、[#2088](https://github.com/sipeed/picoclaw/pull/2088)、[#2260](https://github.com/sipeed/picoclaw/pull/2260)），部分带 stale 标签，疑似机器人自动清理或维护者收束旧分支。这些 PR 中的修复内容（Telegram 重复消息、Slack mention 竞态、上下文溢出检测等）可能已通过其他方式（如合并 PR）落地，例如 [#1541](https://github.com/sipeed/picoclaw/pull/1541) 就是汇总 #1536/#1535/#1531 修复的合并 PR。
- **文档增强（待合并）**：
  - [#3368](https://github.com/sipeed/picoclaw/pull/3368)：新增 Parallel Search MCP 部署示例，为 PicoClaw 提供免 API Key 的网页搜索与页面提取能力（并说明与默认搜狗搜索的数据差异）。
  - [#3367](https://github.com/sipeed/picoclaw/pull/3367)：新增 Pilot Protocol MCP 快速上手指南，含健康检查命令，已通过 `make lint-docs`。

## 4. 社区热点

- **[#3287](https://github.com/sipeed/picoclaw/issues/3287)**（10 评论，stale）：IRC 长消息支持。IRC 协议 512 字节限制导致长消息被拆分，PicoClaw 将其误判为多条独立消息。讨论量最大，反映 IRC 用户对消息完整性解析的迫切需求。
- **[#3281](https://github.com/sipeed/picoclaw/issues/3281)**（9 评论，👍2）：Web UI 聊天输入框在历史记录较长时严重卡顿（v0.3.1），影响日常使用体验，是当前用户可感知性最强的痛点之一。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | **[#3365](https://github.com/sipeed/picoclaw/issues/3365)** QQ 渠道 401 "Authorization参数格式错误”。根因定位在依赖链：botgo v0.2.1 + resty ≥ v2.17，属上游依赖兼容性问题，影响 QQ 渠道可用性 | 新报告，暂无 fix PR |
| 🟡 中 | **[#3281](https://github.com/sipeed/picoclaw/issues/3281)** Web UI 长会话输入卡顿 | 无关联 PR |
| 🟡 中 | **[#3287](https://github.com/sipeed/picoclaw/issues/3287)** IRC 长消息拆分解析错误 | 无关联 PR |

## 6. 功能请求与路线图信号

- **[#3366](https://github.com/sipeed/picoclaw/issues/3366)**：新增 "OpenAI Compatible" 自定义 Provider，支持自托管路由（如 9Router）。结合历史 PR [#1683](https://github.com/sipeed/picoclaw/pull/1683)（openai_compat 严格模式兼容）、[#2260](https://github.com/sipeed/picoclaw/pull/2260)（xAI 支持）可见 openai_compat 架构已具备扩展基础，此需求实现成本低，**大概率被纳入下一版本**。
- **MCP 生态扩展**：#3367、#3368 两个文档 PR 表明官方正在推动 MCP 集成的开箱即用体验，搜索能力（Parallel Search 替代默认搜狗）是重点方向。

## 7. 用户反馈摘要

- **使用场景多样化**：用户在 Orange Pi 3B（aarch64）等边缘设备上通过 QQ 渠道运行 nightly 构建，说明项目在低功耗硬件自托管场景有稳定用户群。
- **痛点**：① Web UI 性能随会话历史增长明显退化（#3281）；② 渠道协议适配不够健壮（IRC 长消息、QQ 鉴权依赖冲突）；③ 对自定义/自托管 LLM 路由的接入需求强烈（#3366）。
- **正面信号**：社区对 MCP 免 Key 搜索方案（#3368）反应积极，文档贡献者主动说明隐私数据流向，社区协作氛围健康。

## 8. 待处理积压

- **#3287**（7-22 创建，10 评论，已 stale）：IRC 长消息支持——高讨论量但无维护者响应，建议确认是否排期。
- **#3281**（7-21 创建，9 评论）：Web UI 输入卡顿——影响核心体验，无修复进展。
- **PR #3367 / #3368**：待合并的文档 PR，内容完整且已过 lint，建议尽快 review。
- 提醒：今日批量关闭的 20 个 PR 中，若部分修复（如 #3337 MCP 失败导致 agent 循环挂起）尚未在其他分支落地，需确认是否丢失。

---
*数据来源：GitHub API（过去 24 小时）· 本报由自动化分析生成*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-09-05

## 1. 今日速览

NanoClaw 今日保持较高活跃度：过去 24 小时 PR 更新 18 条（新增/活跃 15 条待合并，3 条关闭），Issues 新开 2 条且均为生产环境相关的严重问题。核心团队成员（@zvi-fried、@Koshkoshinsk 等）持续推进 provider 合约化重构与 skills 体系加固，社区贡献者也提交了安全与提示注入防护类修复。整体看，项目处于架构治理密集期，但两条新 Issue 暴露的会话归档无限增长和容器环境变量透传缺陷，指向生产稳定性风险，值得关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日 3 条 PR 被关闭/合并处理：

- **PR #2403 [CLOSED]** ci: 用显式 Release 工作流 + 并发守卫替换 bump-version（@glifocat，5 月提交，今日关闭）
- **PR #2231 / #2232 [CLOSED]** chat-sdk-bridge 的 sendAsRaw 标志与 fetchData 回退修复（@tamasPetki，5 月提交，今日关闭）

**解读**：今日合并吞吐量为零关闭即合并的净新增，但维护者集中清理了 3 条陈旧 PR（多为 5 月遗留），释放 review 队列压力。活跃开发主线依然清晰：

- **Provider 合约化重构系列**（#3584 Codex、#3586 Setup 合约声明、#3588 OpenCode、#3591 指令 canon 渲染、#3722 OpenCode 安装 skill）——将 provider 从自由文本声明迁移到核心持有的类型化合约，是本周最重的架构投入。
- **Skills 安装安全加固**：#3720 引入 opt-in 源码安装与守卫式恢复（`ncl skills list/plan/apply`），#3721 要求显式安装并尊重 operator 策略。
- **A2A 通信修复**：#3718 保留已验证发送者身份、#3719 向源端报告投递失败。

## 4. 社区热点

**最活跃：Issue #3716**（2 条评论）——[PreCompact 会话归档每次触发写入全量重写文件，无轮转/上限/清理，导致生产环境 OOM 崩溃循环](github.com/qwibitai/nanoclaw/issues/3716)。作者 @DawoudIO 给出了详尽的根因分析：与实际的 compact transcript 不同，`/workspace/agent/conversations/` 目录完全不设防。这是今日生产事故级别的报告，评论区已有维护者介入讨论。

其次 **Issue #3714**——[operator 环境变量（auto-compact 窗口、transcript 轮转）无法透传到会话容器](github.com/qwibletai/nanoclaw/issues/3714)，@nilsborg 指出三个文档声称可覆盖的 env var 实际上无法在不打补丁的情况下设置，是 #1820 的后续。**两条 Issue 实际构成同一故障链**：#3714 的变量透传失败很可能加剧了 #3716 的磁盘/内存膨胀。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 严重 | [#3716](github.com/qwibitai/nanoclaw/issues/3716) PreCompact 归档文件无限增长，致生产 OOM 崩溃循环 | 无明确 fix PR |
| 🟠 高 | [#3714](github.com/qwibletai/nanoclaw/issues/3714) operator env 覆盖无法到达会话容器（#1820 回归/遗留） | 无 fix PR |
| 🟡 中 | [#3717](github.com/qwibletai/nanoclaw/pull/3717) 组合提示块中嵌入 payload 未转义，可伪造结构（提示注入面） | 有 fix PR，待合并 |
| 🟡 中 | [#3680](github.com/qwibletai/nanoclaw/pull/3680) validateSpec 中 allowlisted-extra mount 绕过 | 有 fix PR，待合并 |
| 🟡 中 | [#3718](github.com/qwibletai/nanoclaw/pull/3718) A2A 消息发送者身份丢失致合法请求被拒 | 有 fix PR，待合并 |

安全类修复（#3717、#3680）均来自社区，说明外部审计视角正在补足核心团队盲区。

## 6. 功能请求与路线图信号

- **#3715 feat: Zapier MCP tool skill**（@glifocat）——为 agent 组接入 Zapier 托管 MCP 服务器且不暴露私有 token，是明确的集成扩展诉求，标签完整（delivery/skill + core-team 关注），大概率进入下个迭代。
- **#3592 feat(groups): core-owned speed 推理属性**——CLI `ncl groups config update --speed`，provider 声明词汇表，延续 #3591/#3586 的“核心持有配置语义”路线，是路线图核心方向。
- **#3355/#3356 Cursor Agent SDK provider**——8 月启动、今日仍在更新，Cursor 集成是确定性较高的新能力。
- **Skills 安全边界体系（#3720/#3721）** 揭示项目正建立结构化能力安装机制，这将是近期版本的重点主题。

## 7. 用户反馈摘要

- **生产运维痛点突出**：#3716 报告者是在真实部署中遭遇 OOM 崩溃循环，说明已有用户将 NanoClaw 用于长期运行的生产环境，而非实验性使用。
- **配置可操作性受挫**：#3714 反映“文档承诺的 operator 覆盖能力实际不可用”，且是 #1820 的二次报告，暗示该类问题修复验证不到位，用户信任有损耗风险。
- **集成生态需求旺盛**：Zapier、Cursor、OpenCode 等 provider/工具的持续 PR 流入，说明社区对扩展 NanoClaw 能力边界的意愿强烈。

## 8. 待处理积压

- **Issue #3716 / #3714**：今日新开，尚无任何 fix PR 关联，且指向生产稳定性，建议维护者优先响应并明确修复排期。
- **PR #2403**（CI 工作流重构）：5 月提交，今日被关闭——若为拒绝，建议在 close 时说明原因，避免贡献者流失。
- **PR #2231 / #2232**（chat-sdk-bridge）：5 月提交悬置 4 个月后今日关闭，同样需要 close 说明。
- **PR #3584/#3586/#3588/#3591 系列**：大型重构 PR 群自 8 月底持续活跃，合并顺序与依赖关系复杂，是当前 review 负担最重的积压区，建议维护者发布重构合并计划。

---
*数据来源：NanoClaw GitHub（qwibitai/nanoclaw），统计窗口 2026-09-04 至 2026-09-05。链接均指向对应 Issue/PR。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-09-05

## 1. 今日速览

NullClaw 项目今日整体处于**低活跃度状态**：过去 24 小时无 PR 更新、无新版本发布，仅有 1 条 Issue 活跃（[#993](https://github.com/nullclaw/nullclaw/issues/993) 于昨日更新）。社区互动以功能增强讨论为主，未见新 Bug 报告，代码库稳定性无异常信号。当前节奏更接近平稳维护期而非活跃开发冲刺期。

## 2. 版本发布

今日无新版本发布，最新 Releases 无更新。无迁移或破坏性变更事项。

## 3. 项目进展

- 过去 24 小时 **PR 更新 0 条**（待合并 0，合并/关闭 0）。
- 无代码层面的实质推进，项目处于观察窗口期。

## 4. 社区热点

- **[#993 feat: make Firecrawl search endpoint configurable for self-hosted instances](https://github.com/nullclaw/nullclaw/issues/993)**（@Crymfox，2026-08-24 创建，评论 1 条）是当前唯一活跃讨论。核心诉求：`src/tools/web_search_providers/firecrawl.zig` 中 API endpoint 硬编码为 `https://api.firecrawl.dev/v1/search`，导致自托管 Firecrawl 实例无法与原生 `search_provider: "firecrawl"` 配置配合使用。这反映了用户群体中**私有化部署/数据主权**需求的持续增长趋势。

## 5. Bug 与稳定性

- 今日**无新 Bug、崩溃或回归报告**，无需紧急修复事项。

## 6. 功能请求与路线图信号

- **#993（Firecrawl endpoint 可配置化）**：属于低实现成本的典型增强——将 endpoint 提取为配置项即可。目前**尚无对应 PR 提交**，是潜在的良好 first contribution 切入点。结合其他 search provider（如 SearXNG）通常支持自定义 endpoint 的惯例，该需求被纳入下一版本的概率较高，建议维护者标记 `good first issue`。

## 7. 用户反馈摘要

- 来自 #993 的用户反馈：使用 NullClaw 的用户中存在**自托管基础设施使用者**，他们希望将 AI 助手的 web 搜索能力保留在内网/私有服务中，避免依赖 SaaS API（api.firecrawl.dev）。痛点集中在**配置灵活性不足**，而非功能缺失或质量问题，整体满意度未见负面信号。

## 8. 待处理积压

- **[#993](https://github.com/nullclaw/nullclaw/issues/993)** 已开启 **12 天**（08-24 创建，09-04 有更新），尚无维护者明确的处理计划或关联 PR。虽属增强请求非紧急事项，但作为当前唯一活跃 Issue，建议维护者尽快回应（接受/标记标签/指引贡献），以保持社区参与热情。

---
*数据来源：NullClaw GitHub 仓库（github.com/nullclaw/nullclaw），统计窗口为 2026-09-04 至 2026-09-05。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-09-05

## 1. 今日速览

IronClaw 今日保持较高活跃度：过去 24 小时内 Issues 更新 7 条（新开/活跃 5、关闭 2），PR 更新 12 条（待合并 9、已合并/关闭 3），无新版本发布。开发主线集中在两大方向：**Telegram 渠道配对/命令体验的打磨**与**WebUI slash-command 菜单的可用性修复**，后者呈现“报告 issue + 立即提 PR”的高效闭环模式。核心贡献者 @thisisjoshford 与 @italic-jinxin 今日均有连续产出，社区参与（新贡献者 @jlwaugh）也在持续流入，项目健康度良好。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日关闭的 3 个 PR 主要修复了 Telegram 渠道的关键用户引导缺陷：

- **[#8073](https://github.com/nearai/ironclaw/pull/8073)**（fix/device-link）：当管理员未配置 `telegram_api_id`/`telegram_api_hash` 时，个人账号绑定时不再误报“该账号出问题”，改为明确提示“管理员未配置”，对应修复 [#7955](https://github.com/nearai/ironclaw/issues/7955)。
- **[#8054](https://github.com/nearai/ironclaw/pull/8054)**（fix/assistant）：命令准入检查前置到配对检查之前，未配对用户首次 `/start` 即收到配对引导，而非命令清单，关闭 [#7956](https://github.com/nearai/ironclaw/issues/7956)。
- **[#8062](https://github.com/nearai/ironclaw/pull/8062)**（fix/llm，XL）：在网关侧为每个会话派生稳定的伪匿名 prompt-cache key，并在所有 OpenAI / OpenAI 兼容请求路径上传递，覆盖 Responses 与 Chat Completions 两种 API，有望降低多轮对话的推理成本与延迟。

整体看，Telegram 首次接触引导链路（start → 配对 → 命令注册）在本周被系统性修复，方向明确、推进扎实。

## 4. 社区热点

- **[#8072](https://github.com/nearai/ironclaw/pull/8072)**（feat/telegram，L）：在扩展激活时通过 `setMyCommands` 注册 Telegram Bot 命令菜单（`/model`、`/status`、`/new` 等），使原生的“汉堡菜单”直接可用——用户对 Telegram 原生化体验的诉求得到回应。
- **[#8067](https://github.com/nearai/ironclaw/pull/8067)** / **[#8061](https://github.com/nearai/ironclaw/pull/8061)**（feat/subagent，XL/M）：@henrypark133 的后台子智能体投递自愈系列持续推进，补齐“boot 时扫描搁浅投递”的最后一个触发器，并验证子线程门控审批卡的可见性。这是子智能体可靠性的重要补强。
- **WebUI 命令菜单系列**（详见第 5 节）：@italic-jinxin 一次报告 4 个可用性问题并配套 4 个 fix PR，是今日最集中的互动热点。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 高 | [#8059](https://github.com/nearai/ironclaw/pull/8059)：`POST /api/v1/responses/{id}/cancel` 在任何状态下都返回 400 且 run 继续执行——取消机制完全失效，cancel reason 格式与产品侧解析不匹配 | 有 fix PR（新贡献者 @jlwaugh），待合并 |
| 中 | [#7956](https://github.com/nearai/ironclaw/issues/7956)：未配对用户 `/start` 收到命令清单而非配对引导 | ✅ 已由 PR #8054 修复关闭 |
| 中 | [#7955](https://github.com/nearai/ironclaw/issues/7955)：配置缺失时报错误导用户归因于自身账号 | ✅ 已由 PR #8073 修复关闭 |
| 中 | [#8074](https://github.com/nearai/ironclaw/issues/8074)：已配对用户在未连接的共享频道收到错误的文案（复用了未配对场景的 connect_required 提示） | 仍 OPEN，暂无 fix PR |
| 低 | [#8066](https://github.com/nearai/ironclaw/issues/8066)：命令结果卡片在多次执行后塌缩为细线 | 有 PR [#8071](https://github.com/nearai/ironclaw/pull/8071) |
| 低 | [#8063](https://github.com/nearai/ironclaw/issues/8063)：命令菜单键盘/指针导航时高亮项滚出可视区 | 有 PR [#8068](https://github.com/nearai/ironclaw/pull/8068) |

## 6. 功能请求与路线图信号

- **命令结果卡片可关闭**（[#8064](https://github.com/nearai/ironclaw/issues/8064)）：用户希望临时面板可清理，PR [#8069](https://github.com/nearai/ironclaw/pull/8069) 已实现含无障碍访问的 dismiss 动作，只移除临时结果、保留持久消息，纳入下版本可能性高。
- **Telegram 原生命令菜单**（[#8072](https://github.com/nearai/ironclaw/pull/8072)）：进一步说明团队在深耕 Telegram 原生体验，可预期后续更多 Bot API 集成。
- **子智能体可靠性系列（R2-R4）**：并发子任务上限、搁浅投递自愈、e2e 复活，暗示路线图上的多智能体稳定性是近期投入重点。
- **[#8065](https://github.com/nearai/ironclaw/issues/8065)** 命令元数据对齐属于打磨类请求，已有 PR [#8070](https://github.com/nearai/ironclaw/pull/8070)（响应式网格布局）。

## 7. 用户反馈摘要

- **Telegram 首次上手体验是痛点重灾区**：多个 issue 指出未配对/未配置场景下的提示文案错位或误导，用户容易误以为是自己账号出问题——本周修复直击此痛点。
- **WebUI 打磨诉求具体而务实**：卡片塌缩、菜单对不齐、无法关闭临时卡片、导航高亮丢失——均为高频交互路径上的小摩擦，社区反馈粒度细，且多数当天就有 PR 响应，满意度应当较高。
- **API 可靠性信任**：取消接口完全不可用（#8059）属于会直接破坏信任的问题，用户期望取消操作即时生效。

## 8. 待处理积压

- **[#8074](https://github.com/nearai/ironclaw/issues/8074)**（共享频道文案错位）：今日新开、无评论、无关联 PR，且与刚关闭的 #7956 同属文案/准入链路，建议维护者确认是否与 #8054 的修复存在相同根因。
- **[#8059](https://github.com/nearai/ironclaw/pull/8059)**：取消接口完全失效的功能性修复，由新贡献者提交，建议优先 review 以避免用户流失并鼓励新贡献者留存。
- **9 个待合并 PR** 中包含 3 个 XL/L 级别（#8062 已关、#8067、#8072），积压评审负担不小，建议关注 review 周期。

---
*数据来源：GitHub（nearai/ironclaw），统计窗口为过去 24 小时。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-09-05）

## 1. 今日速览

LobsterAI 过去 24 小时呈现**高活跃度的迭代节奏**：PR 更新达 33 条（其中 28 条已合并/关闭，5 条待合并），并连续发布 2 个版本（2026.9.3、2026.9.4），表明项目正处于**发布冲刺期**。核心开发方向集中在**应用内交互式浏览器**、**订阅恢复商业化链路**与**Windows 兼容性**三大主题。Issue 侧活跃度较低（仅 1 条更新，且为长期未关闭的 stale 状态），社区反馈渠道相对沉寂。总体判断：项目开发动力强劲、交付频率高，但存储层可靠性技术债值得关注。

---

## 2. 版本发布

### 🚀 LobsterAI 2026.9.4（2026-09-04）
- **feat(browser)**: 恢复应用内交互式浏览器（[PR #2602](https://github.com/netease-youdao/LobsterAI/pull/2602)）
- **feat(update)**: 安装更新及退出应用前增加确认提示（[PR #2609](https://github.com/netease-youdao/LobsterAI/pull/2609)）——避免自动更新造成用户工作丢失，属于体验性安全改进
- **feat(publishing)**: 发布相关改进（Release Notes 截断，详见发布页）

### 🚀 LobsterAI 2026.9.3（2026-09-04）
- **feat(cowork)**: 未认证用户发起聊天前显示登录提示（[PR #2573](https://github.com/netease-youdao/LobsterAI/pull/2573)）
- **feat(browser)**: 首次引入应用内交互式浏览器（[PR #2574](https://github.com/netease-youdao/LobsterAI/pull/2574)）
- **feat(onboarding)**: 新手引导改进

**迁移注意事项**：两个版本均未提及破坏性变更；但 9.3 → 9.4 短周期内对浏览器功能做了“引入—回滚—恢复”的调整，建议用户升级至 9.4 以获得稳定版本。Windows 用户若使用 Unicode（如中文）安装路径，9.4 已修复相关问题（见 #2615），建议及时升级。

---

## 3. 项目进展

今日 28 条 PR 完成合并/关闭，进展集中在以下方向：

### 应用内浏览器（本周主线功能）
- [#2617](https://github.com/netease-youdao/LobsterAI/pull/2617)（OPEN）：改进应用内登录与标签页控件——将页面下拉切换替换为可滚动标签条，支持相邻标签关闭
- [#2615](https://github.com/netease-youdao/LobsterAI/pull/2615)：**支持 Unicode Windows 安装路径**，修复中文路径下浏览器 MCP 启动失败

### 订阅与商业化
- [#2613](https://github.com/netease-youdao/LobsterAI/pull/2613)：完善订阅恢复引导与资源状态同步，增加恢复入口曝光/点击/转化埋点，是一套完整的**付费转化链路建设**
- [#2603](https://github.com/netease-youdao/LobsterAI/pull/2603)：语音配额耗尽文案更新为免费试用订阅话术

### 体验与稳定性修复
- [#2612](https://github.com/netease-youdao/LobsterAI/pull/2612)：登录刷新期间保持模型显示，防止模型元数据暂时为空时显示异常
- [#2503](https://github.com/netease-youdao/LobsterAI/pull/2503)：文本输入框添加剪切/复制/粘贴右键菜单（8 月积压 PR 今日落地）
- [#2520](https://github.com/netease-youdao/LobsterAI/pull/2520)：插件安装弹窗在超长错误信息下保持可用
- [#2616](https://github.com/netease-youdao/LobsterAI/pull/2616)：CI skill 审计限时 90 秒，缓解 npm registry 不稳定导致的流水线阻塞

**整体评估**：项目一天内完成一个完整的功能上线闭环（浏览器引入→回滚→修复→再上线），商业化链路持续加码，历史积压 PR（8 月下旬多个）批量清理，研发效率与健康度良好。

---

## 4. 社区热点

本期社区讨论热度偏低，无高评论量 Issue/PR：

- [Issue #1071](https://github.com/netease-youdao/LobsterAI/issues/1071)（stale，创建于 2026-03-30，仅 1 评论）是唯一的活跃 Issue——一位贡献者对 SQLite 存储层进行了深度代码审计，提出三个数据完整性缺陷（详见第 5 节）。虽互动少，但技术含量高，诉求是**推动核心存储层加固**。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [Issue #1071](https://github.com/netease-youdao/LobsterAI/issues/1071) — SQLite 存储层三个缺陷：①`ON DELETE CASCADE` 失效导致孤儿消息无限累积；②`save()` 非原子写，崩溃可致数据库损坏；③`storeInitPromise` 超时后存储层永久故障 | **OPEN，stale，无 fix PR** |
| 🟡 中 | Windows 中文（Unicode）安装路径下应用内浏览器启动失败 | ✅ 已修复（[PR #2615](https://github.com/netease-youdao/LobsterAI/pull/2615)，已入 9.4） |
| 🟡 中 | 登录刷新期间模型显示丢失 | ✅ 已修复（[PR #2612](https://github.com/netease-youdao/LobsterAI/pull/2612)） |
| 🟢 低 | CI skill 审计因 npm registry 不稳定而超时 | ✅ 已修复（[PR #2616](https://github.com/netease-youdao/LobsterAI/pull/2616)） |

**重点提醒**：#1071 涉及**生产环境数据丢失风险**，已挂起 5 个月无官方响应，是当前最突出的稳定性隐患。

---

## 6. 功能请求与路线图信号

本期无新开功能请求 Issue，但从 PR 动向可推断路线图：

- **应用内浏览器**：9.3 引入、9.4 恢复、#2617 继续打磨标签页与登录体验 → 显然是**下个周期的核心投资方向**，预计将持续迭代 MCP 集成与凭据管理
- **订阅转化漏斗**：#2613、#2603、#2573（未认证聊天登录引导）构成连贯的**商业化引导矩阵**，预计后续版本继续强化付费墙与恢复流程
- **更新安全**：#2609 的更新确认机制暗示团队在降低自动更新对用户的干扰

---

## 7. 用户反馈摘要

Issue 评论数据有限，可提炼的信号：

- **贡献者痛点**（来自 #1071 审计）：核心存储层的写路径缺乏原子性保障，FK 约束形同虚设——反映对**桌面端数据可靠性**的深切担忧，尤其聊天记录是不可再生的用户资产
- **隐含用户场景**：从修复 PR 反推，用户反馈集中在 Windows 环境兼容性（中文路径）、插件安装失败时信息不可读、语音配额话术困惑等**细节体验问题**，说明产品已进入打磨期而非功能饥渴期

---

## 8. 待处理积压

| 条目 | 挂起时长 | 建议 |
|---|---|---|
| [Issue #1071](https://github.com/netease-youdao/LobsterAI/issues/1071) SQLite 数据完整性三缺陷 | **5 个月+**（2026-03-30 创建，已标 stale） | ⚠️ **强烈建议维护者响应**：涉及数据丢失风险，审计内容详实（含文件行号定位），修复成本可控（开启 FK pragma、事务化 save()、超时重试机制） |
| [PR #2617](https://github.com/netease-youdao/LobsterAI/pull/2617) 浏览器标签页改进 | 1 天（OPEN） | 正常流转，预计进入下一版本 |

**健康度总结**：交付效率 ★★★★★｜社区互动 ★★☆☆☆｜技术债风险 ★★★☆☆（存储层）。核心建议：在浏览器与商业化高速推进的同时，不要让 #1071 这类数据可靠性问题继续沉没。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-09-05）

## 1. 今日速览

今日 Moltis 项目整体活跃度处于**低位平稳**状态：过去 24 小时仅有 1 条 Issue 更新（新开）和 1 条 PR 更新（待合并），无新版本发布，也无 Issue 关闭或 PR 合并。尽管数量有限，但两条更新均具有较高的功能价值——一条聚焦外部 Agent 流式传输能力增强（[PR #1258](https://github.com/moltis-org/moltis/pull/1258)），另一条提出可持久化的推理级别配置需求（[Issue #1259](https://github.com/moltis-org/moltis/issues/1259)）。整体来看，项目处于功能迭代期而非发布窗口期，社区贡献以核心功能演进为主。

## 2. 版本发布

今日无新版本发布。最新 Release 信息缺失，建议关注后续 PR #1258 合并后可能的版本迭代。

## 3. 项目进展

今日无 PR 被合并或关闭，但有一个重要的待合并 PR 值得关注：

- **[PR #1258](https://github.com/moltis-org/moltis/pull/1258) `feat(external-agents): add direct AGY streaming`**（作者：@GTanger，创建于 2026-09-04）
  - 为官方 `agy` CLI 新增一流（first-class）的流式传输通道，复用其现有的 Google OAuth 会话，**无需依赖 Gemini CLI 或 API Key**
  - 将 AGY 版本化的 `stream-json` 输出翻译为 Moltis 内部的文本、推理（reasoning）、通知（notice）、工具调用（sub-agent）、用量统计及可恢复会话等格式

**评估**：该 PR 显著降低了外部 Agent 接入门槛，若合并将使 Moltis 对 AGY 生态的支持从“可用”迈向“原生体验”，是外部 Agent 集成方向上的实质性一步。

## 4. 社区热点

今日活跃度集中，无高评论量讨论：

- **[Issue #1259](https://github.com/moltis-org/moltis/issues/1259) [Feature]: Configurable default reasoning/thinking level (persist across sessions)**（作者：@Scentedtiger，👍 0，评论 0）
  - 诉求：用户希望推理/思考级别（reasoning/thinking level）可配置为默认值，并**跨会话持久化**，避免每次新会话重复设置。
  - 背后信号：这反映了重度用户对 Moltis 会话状态管理的效率诉求——当前每次会话需手动调整推理深度，影响工作流连贯性。这是一个典型的“高频小痛点”，实现成本相对较低，值得维护者优先评估。

- **[PR #1258](https://github.com/moltis-org/moltis/pull/1258)** 同为今日更新焦点，详见上文项目进展部分。

## 5. Bug 与稳定性

今日**无新报告的 Bug、崩溃或回归问题**。Issue #1259 为纯功能增强请求，不影响现有稳定性。

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 状态 | 纳入下一版本可能性 |
|---|---|---|---|
| 可配置默认推理/思考级别（跨会话持久化） | [Issue #1259](https://github.com/moltis-org/moltis/issues/1259) | Open，尚无维护者回应 | **中等偏高**——与 PR #1258 中已实现的 reasoning 流式解析能力形成呼应，属于自然延伸；实现难度低 |
| AGY 直接流式接入 | [PR #1258](https://github.com/moltis-org/moltis/pull/1258) | Open，待 review | 已有代码实现，若 review 通过可直接进入下一版本 |

**路线图信号**：两个更新共同指向“外部 Agent 集成深化”与“推理体验可配置化”两条主线，与 AI 智能体助手领域对多后端支持和精细化推理控制的趋势一致。

## 7. 用户反馈摘要

今日数据中缺乏 Issue 评论内容，可提炼的用户信号有限：

- **@Scentedtiger**（Issue #1259 作者）：使用场景为需要不同推理深度的多轮会话工作流，痛点在于每次会话需重新设置推理级别，期望“设置一次、长期生效”。这暗示存在一批对推理成本/深度敏感的高级用户。
- **@GTanger**（PR #1258 作者）：从贡献者视角反馈，现有通过 Gemini CLI 或 API Key 接入的方式存在门槛，直接复用 Google OAuth 会话是更顺畅的路径。

## 8. 待处理积压

- **[PR #1258](https://github.com/moltis-org/moltis/pull/1258)**：已开立 1 天待 review，涉及外部 Agent 核心传输层改动，建议维护者尽快安排 review，避免集成类 PR 长期搁置导致与主干冲突。
- **[Issue #1259](https://github.com/moltis-org/moltis/issues/1259)**：今日新开，尚无任何回应，建议维护者在 48 小时内给出 triage 标签（如 `enhancement` 已有，可补充优先级评估）。

> ⚠️ 注：本次数据仅覆盖过去 24 小时，无法评估更长期的历史积压情况。建议后续日报补充 7 天/30 天未响应 Issue 的统计数据，以更全面反映项目健康度。

---

*数据来源：Moltis GitHub 仓库（github.com/moltis-org/moltis），统计周期 2026-09-04 至 2026-09-05。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 · 2026-09-05

---

## 1. 今日速览

- 项目保持**高活跃度**：过去 24 小时 Issues 更新 23 条（新开/活跃 15、关闭 8），PR 更新 27 条（待合并 20、已合并/关闭 7），无新版本发布。
- 社区围绕 **QwenPaw Hub（多租户版，2.2.0）** 的方向讨论持续升温（[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)，22 条评论），团队侧有配套 PR [#7566](https://github.com/agentscope-ai/QwenPaw/pull/7566)（Hub 运行时非阻塞启动）落地推进。
- **2.2 版本相关 Bug 集中爆发**：Loop 模式失效/状态丢失、任务停止假象、409 报错、Volcengine 兼容性等问题在 24 小时内密集报告，其中 Loop 模式相关问题已有 fix PR 当日提出并关闭。
- 外部贡献活跃，多个 **first-time-contributor PR**（#7551、#7564）提交，社区生态健康。
- 大量高质量 enhancement（企业级存储、闲时任务调度、Skill 版本化）来自实际生产部署用户，说明项目正从个人工具向**团队/企业场景**渗透。

---

## 2. 版本发布

无新版本发布。（注：2.2.0/2.2.1b1 已在社区反馈中出现，但今日无正式 Release。）

---

## 3. 项目进展

今日合并/关闭的 7 个 PR 中，关键进展如下：

| PR | 内容 | 意义 |
|---|---|---|
| [#7560](https://github.com/agentscope-ai/QwenPaw/pull/7560) ✅ | fix(console): 保留 Loop 模式选择查询 | 修复用户高频反馈的 Loop 模式 UI 状态丢失问题，当日提出当日合并 |
| [#7504](https://github.com/agentscope-ai/QwenPaw/pull/7504) ✅ | fix(mcp): 在 agent 运行时路径强制执行 per-tool 白名单 | **安全修复**：此前被禁用的 MCP 工具仍可被调用，属权限绕过级别问题，配套 Issue [#7470](https://github.com/agentscope-ai/QwenPaw/issues/7470) 同日关闭 |
| [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) ✅ | feat(skills): workspace 级 Skill 预加载配置 | 落地社区提案 [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182)，减少首轮工具调用开销 |

**整体评估**：修复节奏快（安全类问题闭环优先级高），Skill 生命周期、MCP 权限两条线均有实质性前进；Hub、Mobile、PawPort 等大特性仍在 Review 中，属于蓄力阶段。

---

## 4. 社区热点

### 🔥 [#7318 — QwenPaw Hub 多租户版 2.2.0 方向征集](https://github.com/agentscope-ai/QwenPaw/issues/7318)（22 评论，👍3）
官方发起的路线图讨论，回应社区长期诉求（多用户访问、管理员技能管理 #2324 等）。**背后诉求**：个人助手 → 团队/组织部署的转型信号，是最值得维护者投入运营的讨论帖。

### [#7505 — 局域网 LLM Server 频繁 client disconnect](https://github.com/agentscope-ai/QwenPaw/issues/7505)（12 评论）
本地/私有化部署用户（LM Studio + qwen3.8 flash）遭遇流式连接反复断开重试直至超时。**诉求**：对自建推理服务的连接健壮性，是私有化用户的核心痛点。

### [#6921 — 多步任务中途无提示静默停止](https://github.com/agentscope-ai/QwenPaw/issues/6921)（12 评论，已关闭）
长任务规划后停滞需手动“继续”，与 #7567（停止假象）同属**任务执行状态可见性/可靠性**问题簇，是当前最集中的用户抱怨主题。

### PR 侧
- [#7486](https://github.com/agentscope-ai/QwenPaw/pull/7486)（Creator 1.1.2 大型 PR）与 [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378)（原生移动端 Expo 客户端，DO NOT MERGE 预览）持续吸引关注。

---

## 5. Bug 与稳定性（按严重程度）

**🔴 高**
1. **MCP per-tool 白名单运行时不生效**（安全）— [#7470](https://github.com/agentscope-ai/QwenPaw/issues/7470) → **已修复**，PR [#7504](https://github.com/agentscope-ai/QwenPaw/pull/7504) 已合并。
2. **工具治理 OFF 模式下敏感路径可被绕过**（安全）— 相关 Issue 在跟踪中，fix PR [#7497](https://github.com/agentscope-ai/QwenPaw/pull/7497) **待合并**，建议优先 review。
3. **停止任务后 UI 显示已停止但实际继续执行** — [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567)，已关闭待复查，存在执行错误指令的实际风险。
4. **飞书会话 queue consumer 卡死致会话静默无响应** — [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534)，OPEN，暂无 fix PR。

**🟡 中**
5. **任务执行中新发消息触发 409 报错**（应入队而非报错）— [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559)，OPEN。
6. **Loop 模式选择未传到后端** — [#7552](https://github.com/agentscope-ai/QwenPaw/issues/7552) ✅ 已由 [#7560](https://github.com/agentscope-ai/QwenPaw/pull/7560) 修复；**Loop 模式 UI 状态回退显示** — [#7555](https://github.com/agentscope-ai/QwenPaw/issues/7555) 已关闭。
7. **`/memory/status` 500**（2.2.0-beta.7 Desktop）— [#7510](https://github.com/agentscope-ai/QwenPaw/issues/7510)，已关闭。
8. **Volcengine Ark Responses API 400**（input 以 assistant turn 结尾被拒）— [#7549](https://github.com/agentscope-ai/QwenPaw/issues/7549)，OPEN，相关方向 PR [#7563](https://github.com/agentscope-ai/QwenPaw/pull/7563)（区分模型错误与传输错误）可能部分覆盖。

**🟢 低 / 体验**
9. Windows Shell 子进程继承 stdin 导致挂起、Ctrl+C 无法终止 — [#7554](https://github.com/agentscope-ai/QwenPaw/issues/7554)。
10. 会话导航记录切换/重启后丢失 — [#7548](https://github.com/agentscope-ai/QwenPaw/issues/7548)。
11. 产物折叠在已完成步骤中、获取不便 — [#7553](https://github.com/agentscope-ai/QwenPaw/issues/7553)。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 纳入可能性判断 |
|---|---|---|
| Skill 版本与依赖元数据 | [#7557](https://github.com/agentscope-ai/QwenPaw/issues/7557) | 高——与已合并的 Skill preload 配置同属 Skill 治理线 |
| 可插拔关系型存储（PG/MySQL，WAL 不支持网络盘） | [#7558](https://github.com/agentscope-ai/QwenPaw/issues/7558) | 中高——与 Hub 多租户方向强契合，企业部署刚需 |
| MCP driver 策略拒绝时的 fallback 链 | [#7556](https://github.com/agentscope-ai/QwenPaw/issues/7556) | 中——与刚修复的 MCP 白名单问题相邻 |
| 闲时任务调度（低谷折扣/Batch API 降本） | [#7568](https://github.com/agentscope-ai/QwenPaw/issues/7568) | 中——差异化卖点，成本敏感用户明确需求 |
| Docker 镜像预装/一键安装 codex cli | [#7550](https://github.com/agentscope-ai/QwenPaw/issues/7550) | 高——PawPort PR [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) 已在做第三方 agent 迁移，方向一致 |
| 跨渠道统一会话（架构级） | [#7541](https://github.com/agentscope-ai/QwenPaw/issues/7541)（俄语社区） | 低（近期）——架构改动大，需官方表态 |

**路线图信号**：Hub（#7318 + PR #7566）、Mobile（PR #7378）、PawPort（PR #6960）三条主线并行，2.2.x 后续版本大概率围绕“多端 + 多租户 + 可迁移”展开。

---

## 7. 用户反馈摘要

**👍 满意点**
- 迭代响应快：Loop 模式 Bug 当日报告、当日修复合并；MCP 安全问题快速闭环。
- 开放架构（Skill 即目录 + SKILL.md）透明度高，用户乐于深度定制。

**👎 痛点**
- **长任务可靠性**：静默停止（#6921）、停止假象（#7567）、409 报错（#7559）——用户“绝对确认 UI 已停止但后端仍在跑错误指令”，信任感受损。
- **启动/运行时性能**：仅启用 console 渠道启动仍需 30-45 秒（#7367，lark_oapi 单包导入 18.5 秒）；Desktop 启动被 Playwright Chromium 安装阻塞约 60 秒（#7023，已关闭）。
- **私有化部署体验**：局域网 LLM 连接不稳（#7505）、Docker 镜像更新丢第三方 CLI 配置（#7550）、SQLite WAL 在网络文件系统/K8s 上不可用（#7558）。
- **多 Agent 舰队管理**：9 个 Agent 的重度用户提出 Skill 无版本、MCP 默认 deny 静默失败等运维困境（#7556/#7557），反映生产级使用已超出当前治理能力。

---

## 8. 待处理积压

| 项目 | 状态 | 提醒 |
|---|---|---|
| [#7367](https://github.com/agentscope-ai/QwenPaw/issues/7367) 渠道模块无条件全量导入致启动慢 | OPEN，8/28 至今 | 高频体验问题，懒加载改造收益大，建议排期 |
| [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) 飞书 consumer 卡死 | OPEN，仅 3 评论 | 渠道可靠性，暂无 fix PR |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) MCP 工具调用超时配置 | OPEN，8/10 至今 | 与 #7505 断连问题可能相关，建议优先 review |
| [#6381](https://github.com/agentscope-ai/QwenPaw/pull/6381) Driver 能力快照性能优化 | OPEN，7/23 至今 | 积压 6 周+，请求延迟优化，需维护者决断 |
| [#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401) Windows ACP bootstrap 卡死修复 | Under Review | Windows 用户直接受益，尽快合并 |
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) injected context 误持久化 | first-time-contributor，ready-for-human-review | 涉及会话历史正确性，勿流失新贡献者 |
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) Hub 方向讨论 | OPEN | 官方发起，需持续运营避免热度流失 |

---

*数据来源：GitHub Issues/PR（2026-09-04 ~ 2026-09-05 窗口）。整体健康度评价：活跃度高、修复闭环快、社区贡献管道畅通；主要风险在长任务可靠性 Bug 簇与企业级部署（存储/治理）能力缺口。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目日报 · 2026-09-05

## 1. 今日速览

今日 EasyClaw（TK Copilot）项目无 Issue 与 PR 更新，社区交互活跃度处于静默状态。但项目在 **24 小时内连续发布 3 个小版本（v1.9.3 → v1.9.5）**，节奏密集，表明维护者正处于高强度的迭代修复周期。更新方向集中在**未知发送者自动识别、隐私模式扩展、连接稳定性**三大主题，属于功能性增强与可靠性加固并行推进。综合评估：开发活跃度高，社区互动今日为零，健康度良好。

## 2. 版本发布

### v1.9.5 — TK Copilot（[Release 链接](https://github.com/gaoyangz77/easyclaw/releases)）
- 后端部署导致连接断开后，**自动重新订阅所有频道**，修复了“Socket 看似健康但不再推送事件”的假死问题
- Gateway 重启时**重放被中断的客服派发任务**，而非直接丢弃，避免会话滞留

### v1.9.4 — TK Copilot
- 未知发送者识别任务现在获取**完整有序的未读消息上下文**，并在保留策略丢弃旧消息时明确提示——修复“误判创作者从未提及某事”的问题
- 通过现有 affiliate 订阅通道以**推送方式交付识别结果**

### v1.9.3 — TK Copilot
- 新增**自动识别未知发送者**功能：自动派发识别任务，并为未知发送者/协作工具命名，使面板活动可读
- **隐私模式扩展**：遮蔽卖家店铺名、商品名、图片与 SKU；修复表格交互问题

**破坏性变更与迁移注意**：三个版本均为补丁级（patch）更新，无破坏性变更；隐私模式新增遮蔽项可能影响依赖原始商品/SKU 字段展示的工作流，升级后建议检查面板展示配置。

## 3. 项目进展

今日无 PR 合并/关闭记录（0 条）。但从密集的 Release 推断，版本发布对应的代码改动通过直接推送或快速合并完成，主要推进了：

- **自动化能力**：未知发送者识别从手动到全自动派发，闭环完成（v1.9.3 + v1.9.4）
- **可靠性**：断线重订阅 + 派发重放机制（v1.9.5），显著降低 Gateway/部署期间的事件丢失风险
- **合规/隐私**：隐私模式覆盖面扩大到电商敏感数据

项目整体在 v1.9.x 系列上从“功能补齐”转向“可靠性打磨”阶段。

## 4. 社区热点

今日无活跃 Issue/PR 讨论（数据为 0 条）。无可分析的热点话题。建议关注 Release 后 24–48 小时内的反馈窗口。

## 5. Bug 与稳定性

今日无新报告的 Bug。今日发布的版本本身**修复了以下稳定性问题**：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 高 | 后端部署后 Socket 假死、事件不再推送 | ✅ 已修复（v1.9.5） |
| 高 | Gateway 重启导致客服派发丢失、会话滞留 | ✅ 已修复（v1.9.5） |
| 中 | 消息保留策略丢弃旧消息导致识别误判 | ✅ 已修复（v1.9.4） |
| 低 | 表格交互问题 | ✅ 已修复（v1.9.3） |

## 6. 功能请求与路线图信号

今日无新功能请求。从近期版本节奏可推断的路线图信号：

- **识别自动化**（v1.9.3–1.9.4 连续投入）是当前核心方向，预计后续将继续优化识别准确率与上下文完整性
- **隐私模式**持续扩展（v1.9.3），可能进一步覆盖更多敏感字段，暗示面向企业/合规场景的定位

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼用户反馈。建议结合后续反馈验证 v1.9.5 断线重连修复的实际效果。

## 8. 待处理积压

今日数据显示无未响应 Issue/PR，**当前积压为 0**。需注意：密集发版后（24h 内 3 版）通常是反馈高峰前夜，建议维护者预留响应窗口，重点盯防 v1.9.5 中重放机制在极端场景下的重复派发风险。

---

*数据来源：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw) · 统计窗口：过去 24 小时*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*