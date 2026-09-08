# OpenClaw 生态日报 2026-09-08

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-08 03:38 UTC

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

# OpenClaw 项目动态日报 — 2026-09-08

## 1. 今日速览

OpenClaw 今日保持高强度活跃：过去 24 小时 Issues 更新 500 条（新开/活跃 268，关闭 232），PR 更新 500 条（待合并 310，已合并/关闭 190），无新版本发布。今日新增/活跃 PR 中有多个直接来自核心维护者 @steipete 的高质量修复（UI 会话恢复、通道环境变量解析、Matrix 反应渲染等），显示维护团队在 2026.9.2 发布后进入密集修复期。但 Issue 侧的 P1 高危问题存量仍然庞大，且多数带 `clawsweeper:no-new-fix-pr` 标签——用户报告的关键缺陷缺少对应修复 PR，是当前项目健康度的最大隐忧。整体呈"PR 侧推进积极、Issue 侧积压偏重"的格局。

## 2. 版本发布

今日无新 Release。值得注意的是 2026.9.1 → 2026.9.2 的托管升级路径仍有未解问题（见 #139485、#139578），2026.9.2 仍非完全干净的升级基线。

## 3. 项目进展

今日无合并记录曝光（数据中 OPEN PR 占主导），但多条"ready for maintainer look"的 PR 正在评审队列中，构成下一波合入储备：

- [PR #141781](https://github.com/openclaw/openclaw/pull/141781)（@steipete）修复通道 setup 连接检查中 `${VAR}` 环境变量未解析的问题，避免配置成功却报告失败——直击 #130706 一类 UX 痛点。
- [PR #133653](https://github.com/openclaw/openclaw/pull/133653)（@steipete）Control UI 首次启动时恢复失效的浏览器记忆会话，解决网关重装后落到不可用路由的问题。
- [PR #133633](https://github.com/openclaw/openclaw/pull/133633) 防止插件重载后选择过期 fallback 模型，关联 #130706/#130324。
- [PR #141759](https://github.com/openclaw/openclaw/pull/141759) 修复 OpenAI 模型发现拒绝已有原生 Codex 登录的问题（关联 #140973）。
- [PR #112227](https://github.com/openclaw/openclaw/pull/112227)（P1）拆分会话组变更以避免并发添加静默丢失（Fixes #106362）。
- [PR #140798](https://github.com/openclaw/openclaw/pull/140798)（XL）允许显式信任的 Discord 管理员，涉及安全边界，Linux CI 已全绿。
- [PR #141815](https://github.com/openclaw/openclaw/pull/141815) 模型目录投影重构（XL），为后续资源管理铺路。

合计：评审队列中 P1 级 PR 2 个、ready-for-look 状态约 10 个，功能推进节奏健康。

## 4. 社区热点

- [#44925](https://github.com/openclaw/openclaw/issues/44925)（26 评论）**Subagent 完成结果静默丢失**——无重试、无通知、超时不自动重启。3 月报告至今未修复，是评论区声量最高的长期痛点。
- [#135111](https://github.com/openclaw/openclaw/issues/135111)（17 评论）v2026.8.1 起 claude-sonnet-5 间歇性 "malformed JSON arguments"，被标记为回归。
- [#126360](https://github.com/openclaw/openclaw/issues/126360)（16 评论）显式多 Agent 归属模式下 `AgentSelectionRequiredError` 刷爆日志，logbook/Control RPC/系统 Agent 回合均缺 agentId。
- [#115908](https://github.com/openclaw/openclaw/issues/115908)（16 评论）会话 transcript 投影在持续写入下活锁，阻塞主线程数十秒。
- [#79077](https://github.com/openclaw/openclaw/issues/79077)（15 评论，8 👍）Telegram Guest Bots / Bot-to-Bot 支持——被标 stale 关闭，但 8 个 👍 显示社区对官方跟进 Telegram 2026-05 新特性有真实需求。

## 5. Bug 与稳定性

**P0 / 严重**
- [#89278](https://github.com/openclaw/openclaw/issues/89278) Codex OAuth 刷新成功但 cron/heartbeat 因 10s 超时失败（regression，有 linked PR，未合）。
- [#111578](https://github.com/openclaw/openclaw/issues/111578) 升级后 Gateway auth token 再次从 service-env 丢失——同类 bug 第二次复发，`no-new-fix-pr`。
- [#140497](https://github.com/openclaw/openclaw/issues/140497)（已关闭）Discord setup 接受 Application ID 作为 token，状态永远"stopped"。

**P1 / 高**
- [#133984](https://github.com/openclaw/openclaw/issues/133984)（已关闭）2026.8.1 升级后 Gateway 无法启动，`doctor --fix` 不做 config-key 迁移。
- [#139485](https://github.com/openclaw/openclaw/issues/139485) 2026.9.1→2026.9.2 托管升级卡在 finalizer，网关离线，需快照回滚。**当前版本的升级路径风险**。
- [#137927](https://github.com/openclaw/openclaw/issues/137927)（已关闭）内部上下文块 `<<<BEGIN_OPENCLAW_INTERNAL_CONTEXT>>>` 泄漏为 Telegram 可见文本，含 prompt 注入风险，安全敏感。
- [#136183](https://github.com/openclaw/openclaw/issues/136183) 命令执行器 spawn ssh 挂起（2026.8.1 回归，8.2 仍在）。
- [#97616](https://github.com/openclaw/openclaw/issues/97616) hook/tool 子进程未 reap，僵尸进程累积。
- [#117262](https://github.com/openclaw/openclaw/issues/117262) SQLite 3 个并发写句柄致 ~33s 事件循环停顿（DEF-61）。
- [#137332](https://github.com/openclaw/openclaw/issues/137332) 混合终结的 requester-settle 批次永久重试（queueable-fix，已排队）。
- [#126246](https://github.com/openclaw/openclaw/issues/126246) Telegram 出站消息卡在 `send_attempt_started`，重启即丢失。
- [#139714](https://github.com/openclaw/openclaw/issues/139714) 升级后 `openclaw status` 永远显示"update in progress"。

**共性结论**：核心稳定性问题集中于三条主线——①多 Agent 编排的完成/投递丢失，②Gateway 单线程同步持久化造成停顿，③升级迁移路径不可靠。多数 P1 均为 `no-new-fix-pr` 状态。

## 6. 功能请求与路线图信号

- [#51441](https://github.com/openclaw/openclaw/issues/51441)：在 session_status 暴露实际后端模型（LiteLLM 代理场景）——长期 open，与 #133633/#141815 模型目录重构方向一致，可能借重构顺带落地。
- [#96675](https://github.com/openclaw/openclaw/issues/96675)：所有者签名的记忆/技能/动作确认门控——个人 AI 助手可信度方向，与 #137927 的内部上下文泄漏事件相互呼应，安全类诉求上升。
- Telegram Guest Bots / Bot-to-Bot（#79077）与 MiniMax M3 视频输入（#98084）为渠道/模型扩展需求，目前无对应 PR。
- PR #140798（Discord 信任管理员）、#136687（多网关账号切换）已进入评审，预计纳入近期版本。

## 7. 用户反馈摘要

- **升级焦虑突出**：多位用户描述升级后需"十几步手工修复"、"五个连环 blocker"（#133984、#134896），对 `doctor --fix` 失效尤为不满。
- **静默失败是最大信任杀手**：Subagent 结果丢失（#44925）、Telegram 消息 dead-letter 无告警（#125764）、Signal 丢弃 tool call 前文本（#101793）——用户反复强调"宁可报错也不要无声丢消息"。
- **生产规模可用性受限**：6 Agent 并发编排配置互相覆盖（#43367）、33s 事件循环停顿（#117262）表明多 Agent 生产部署仍不成熟。
- **正面信号**：clawsweeper 机器人自动分级、`fix-shape-clear/queueable-fix` 流水线运转正常，社区贡献者（@steipete、@RomneyDa、@vincentkoc 等）持续高频产出。

## 8. 待处理积压（维护者关注）

| 条目 | 状态 | 关注点 |
|---|---|---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | open，3 月起 | diamond lobster 级、26 评论、数据丢失，无 fix PR |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | open，3 月起 | 多 Agent 编排不稳定，`needs-info` |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | open | Gateway 线程阻塞，修复仅覆盖统计部分 |
| [#126874](https://github.com/openclaw/openclaw/issues/126874) | open | Windows CI 仅覆盖 0.6% 测试，skipped 门禁算通过 |
| [PR #82950](https://github.com/openclaw/openclaw/pull/82950) | open 自 5 月 | P1 正则灾难性回溯安全修复，5 月无进展 |
| [PR #117074](https://github.com/openclaw/openclaw/pull/117074) / #110835 / #111596 等 | stale | 多个有充分证明的修复 PR 处于 stale，存在修复流失风险 |

**建议优先动作**：①为 2026.9.x 托管升级 finalizer 失败（#139485/#139714）出补丁；②指派 #44925/#137332 所在的 subagent 投递链路专项；③激活 stale 的高价值修复 PR。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**数据日期：2026-09-08**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已从早期的"聊天机器人封装"演进为**多渠道接入、多 Agent 编排、持久化运行时**的成熟工程体系。今日 13 个观察项目中 11 个有活动，头部项目（OpenClaw、Zeroclaw、Hermes、CoPaw）单日 Issue/PR 活动均达 36–500 条量级，说明生态整体处于高速迭代期。共性技术痛点高度收敛：**会话/记忆长期治理、消息投递可靠性、升级路径稳定性、prompt 缓存成本优化**是全生态的四条主线。同时，供应商生态（OpenCode、OpenAI Responses、Anthropic cache、Bedrock）的快速演进正倒逼各项目加速 provider 层适配，形成“上游变更驱动的被动重构”特征。

---

## 2. 各项目活跃度对比

| 项目 | Issue 活动 | PR 活动 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（新/活 268，关 232） | 500（open 310，合并 190） | 无 | ⚠️ 中：产出积极但 P1 Issue 积压重、`no-new-fix-pr` 集中 |
| **Zeroclaw** | 37（新/活 31，关 6） | 50（open 44，合并 6） | 无 | 良好：S0/S1 数据丢失问题偏多但修复在途 |
| **Hermes Agent** | 50（新/活 44，关 6） | 50（open 46，合并 4） | ✅ v0.21.1 | 良好：版本节奏快，但评审带宽不足（46 条待合并） |
| **CoPaw (QwenPaw)** | 36（新/活 22，关 14） | 39（open 25，合并 14） | 无 | 良好：v2.2.0 后进入质量收敛期，社区贡献活跃 |
| **NanoBot** | 2 | 21（open 12，合并 9） | 无 | 优秀：Bug 响应快、修复均带回归测试 |
| **NanoClaw** | 2（新开） | 28（open 11，合并 17） | 无 | 优秀：durable host 架构级 PR 链落地，合并含金量高 |
| **LobsterAI** | 0 | 8（合并 6） | 无 | 良好：维护者驱动的稳定迭代，75% 合并率 |
| **IronClaw** | 1 | 4（合并 0） | 无 | 平稳：小步低风险迭代，社区互动冷 |
| **PicoClaw** | 1 | 5（合并 0） | 无 | ⚠️ 偏弱：3 个 stale PR + 关键渠道 Bug 无回应 |
| **EasyClaw** | 0 | 2（合并 2） | ✅ v1.9.6 | 平稳：发布驱动，社区互动为零 |
| **Moltis** | 0 | 1 | 无 | 低活跃：单修复 PR 待评审 |
| **NullClaw** | 0 | 1（Dependabot） | 无 | 静默：基础镜像 PR 挂起近 3 个月 |
| TinyClaw / ZeptoClaw | 0 | 0 | 无 | 无活动 |

**分层结论**：OpenClaw 一骑绝尘（活动量约为第二梯队的 10 倍）；Zeroclaw/Hermes/CoPaw 构成活跃第二梯队；NanoBot/NanoClaw 呈“小而精”的健康修复节奏；尾部项目分化为“聚焦维护”（IronClaw/EasyClaw）与“疑似停滞”（NullClaw/PicoClaw）。

---

## 3. OpenClaw 在生态中的定位

**社区规模**：绝对头部。单日 500 条 Issue/PR 活动量、Issue 编号已至 14 万+（PR 编号 8 万+），约为 Hermes/Zeroclaw 的 10 倍，是 LobsterAI、EasyClaw 等下游项目的**事实性上游基座**（LobsterAI 正在做 v2026.8.1 升级分支验收，EasyClaw 以 vendor 形式锁定 OpenClaw commit 并跟进其 SQLite sessions 架构）。

**技术路线差异**：
- 相比 Zeroclaw（Rust、Tokio、ACP/TUI 优先）和 NanoClaw（durable host 重启可靠性），OpenClaw 更偏**全渠道托管网关**路线（Discord/Telegram/Matrix/Signal/WhatsApp），渠道广度生态第一。
- 相比 Hermes（Desktop 多会话 + Skills 生态）和 CoPaw（记忆插件化 + Console 体验），OpenClaw 的 Gateway 单线程同步持久化（#117262 33s 停顿）是架构级短板，而 NanoClaw 今日落地的 durable host 恰是 OpenClaw 缺失的能力。

**优势与隐忧**：
- ✅ 优势：渠道矩阵最全、自动分级机器人（clawsweeper）流水线成熟、核心维护者（@steipete）高频产出、形成下游生态（LobsterAI、EasyClaw 依赖）。
- ⚠️ 隐忧：P1 高危 Issue 多数 `no-new-fix-pr`；升级路径连续两个版本不可靠（#139485 finalizer 卡死）；Subagent 结果静默丢失（#44925）6 个月未修；多个高价值修复 PR（#82950 正则回溯安全修复）stale 流失。**“PR 侧推进积极、Issue 侧积压偏重”的剪刀差是其作为生态基座的最大风险传导源**——OpenClaw 的升级缺陷会直接传导至 LobsterAI、EasyClaw 等下游。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **① 长期会话/存储治理** | OpenClaw、NanoClaw、NanoBot、CoPaw、Hermes | 会话归档无限增长（NanoClaw #3735）、记忆文件膨胀注入请求（NanoBot #5630）、压缩后历史不一致（NanoBot #5694、Hermes #105308）、session 轮转失效（NanoClaw #3732）。**“会话生命周期治理”是全生态第一共识痛点** |
| **② 消息/结果投递可靠性（反静默丢失）** | OpenClaw、Zeroclaw、Hermes、CoPaw | Subagent 结果丢失（OpenClaw #44925）、ACP partial turn 数据丢失（Zeroclaw #10121，S0）、消息重复投递（Hermes #105471）、Telegram 卡投递态（OpenClaw #126246）。用户共识：“宁可报错也不要无声丢消息” |
| **③ Prompt 缓存与推理成本优化** | Zeroclaw、NanoBot、NanoClaw、CoPaw | Anthropic 第三缓存断点（Zeroclaw #10660）、1h TTL 可配置（#10663）、reasoning replay 限制到最近一轮（NanoBot #5611）、OpenCode `x-opencode-session` 头（NanoBot #5662 / PicoClaw #3371）、定时任务历史重读致成本周涨 15%（NanoClaw #3741） |
| **④ 升级/部署路径可靠性** | OpenClaw、Hermes、CoPaw | 托管升级 finalizer 卡死（OpenClaw #139485）、`doctor --fix` 失效（#133984）、Windows 更新器杀软冲突（Hermes #104689）、安装 E2E CI 全红（Hermes #94613） |
| **⑤ Provider 层快速适配** | Zeroclaw、NanoBot、CoPaw、PicoClaw | OpenAI Responses/steering/reasoning effort（Zeroclaw #10704–10709）、Bedrock Nova 2 Lite 缓存（#8720）、GLM 端点损坏（CoPaw #7617） |
| **⑥ 安全边界与沙箱** | OpenClaw、Zeroclaw、Hermes、NanoClaw、NanoBot | 内部上下文泄漏（OpenClaw #137927）、workspace 文件系统限制（Zeroclaw #9977）、macOS Seatbelt（NanoBot #5628）、A2A 身份伪造（NanoClaw #3718）、Discord 信任管理员（OpenClaw #140798） |
| **⑦ 渠道整合体验** | NanoBot、Zeroclaw、OpenClaw | 飞书流式卡片合并（NanoBot #5567）、WhatsApp 语音转写（Zeroclaw #10688）、邮件渠道（NanoClaw #3743 AgentMail）、Telegram Bot-to-Bot（OpenClaw #79077） |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Zeroclaw | Hermes | CoPaw | NanoClaw | 其他 |
|---|---|---|---|---|---|---|
| **功能侧重** | 全渠道托管 Agent 网关 | 开发者向 ACP/TUI + provider 深度优化 | Desktop 多会话 + Skills 生态 | Console/记忆插件化 + 中文生态 | 宿主持久化 + 定时任务治理 | LobsterAI：任务库+内置浏览器；EasyClaw：电商带货垂直场景 |
| **目标用户** | 生产部署的渠道运营者 | 重度开发者、多模型用户 | 桌面端个人/小团队用户 | 中文/企业用户 | agent 机队（fleet）运维者 | PicoClaw：嵌入式/ARM 边缘用户 |
| **技术架构** | TypeScript，Gateway 单线程 | Rust + Tokio daemon | Electron Desktop + 多运行时（拟支持 claude-agent-sdk） | 插件化记忆后端 + Console 前端 | durable host + shadow-write 双写 | Moltis：Rust（chrono） |

**关键判断**：生态正在形成三层结构——**基座层**（OpenClaw）、**垂直深耕层**（Zeroclaw 开发者体验、Hermes 桌面、CoPaw 企业记忆）、**场景应用层**（LobsterAI 效率工具、EasyClaw 电商、PicoClaw 边缘设备）。差异化最清晰的是 EasyClaw（唯一有明确商业场景闭环的项目）和 PicoClaw（唯一覆盖 ARM/aarch64 边缘部署）。

---

## 6. 社区热度与成熟度分层

- **快速迭代/扩张期**：**CoPaw**（v2.2.0 后功能+测试双冲刺，first-time contributor 持续流入）、**Zeroclaw**（路线图双主线明确：prompt-cache + OpenAI Responses，外部贡献者功能级 PR 密集）、**Hermes**（版本节奏最快，但 46 条 PR 待合并暴露评审带宽瓶颈）。
- **架构攻坚期**：**NanoClaw**（durable host 数周级架构工程落地，进入生产化治理阶段）、**OpenClaw**（模型目录重构 #141815、安全边界 PR 推进中，但被修复期拖累）。
- **质量巩固期**：**NanoBot**（修复链完整、均带回归测试）、**LobsterAI**（升级分支验收收尾）、**IronClaw**（WebUI 细节打磨 + 失败分类体系）。
- **维护/停滞风险**：**PicoClaw**（3 stale PR + 渠道 Bug 无回应，社区贡献面临流失）、**EasyClaw**（发布正常但社区零互动）、**Moltis**（静默）、**NullClaw**（依赖 PR 挂 3 个月，接近停滞信号）。

---

## 7. 值得关注的趋势信号

1. **“durable runtime”成为下一轮架构竞争焦点**。NanoClaw 的 durable host rollup、Zeroclaw 的 durable transcript 诉求、OpenClaw 的 subagent 投递丢失，指向同一行业命题：**Agent 从“对话工具”走向 7×24 常驻服务后，重启诚实性、claim fencing、状态持久化是准入门槛**。开发者应将“重启后状态一致性”作为 Agent 运行时设计的一等公民。

2. **会话记忆从“无限累积”转向“生命周期治理”**。多个项目同时出现 retention/rotation/fresh-session 类需求（NanoClaw、NanoBot、CoPaw）。背景是 token 成本随会话长度线性恶化的真实生产数据（周涨 15%）。**上下文治理（压缩、轮转、分层记忆）将是 2026 下半年 Agent 框架的核心卖点**。

3. **Prompt 缓存成为成本竞争的决胜变量**。Anthropic 多断点/TTL 可配置、OpenCode 强制 session header（9/6 已生效，属时效性 Breaking Change）、reasoning replay 裁剪——**上游 API 的缓存策略变化会直接决定框架的落地优先级，框架需建立 provider 缓存行为的抽象层与快速响应机制**。

4. **静默失败被用户零容忍，可观测性成为信任基础**。“宁可报错也不要无声丢消息”的反馈贯穿 OpenClaw、CoPaw、NanoBot、Moltis（fail-open 静默失效）。**Agent 系统需要 fail-loud 设计：dead-letter 告警、投递状态可见、配置解析失败的显式拒绝**。

5. **上游依赖风险显性化**。PicoClaw 的 resty 间接依赖回归、LobsterAI 的 OpenClaw vendor 升级、NanoBot 的 OpenCode header 时限——**Agent 框架的依赖链条越长，越需要锁版本策略、兼容性矩阵和上游变更预警机制**。

6. **安全边界从补丁走向体系**。沙箱后端（Seatbelt）、workspace 文件限制、所有者签名确认门控、A2A 身份验证分散于 5+ 项目，且多个 XL 安全 PR 进入评审——**Agent 权限/沙箱/审计将成为与“能力”同级的选型指标**。

7. **生态上游集中度风险**。多个下游项目以不同方式绑定 OpenClaw（LobsterAI 升级验收、EasyClaw vendor 锁定），OpenClaw 的升级路径缺陷（2026.9.x finalizer 问题）已具备向下游传导的系统性风险，值得生态参与者在基座选型上保持多云/多基座的对冲意识。

---

*报告基于 2026-09-08 各项目社区动态数据生成；活动量口径为过去 24 小时 Issue/PR 更新条数，仅供横向参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-08

## 1. 今日速览

NanoBot 今日保持高活跃度：PR 更新 21 条（新开/活跃 12、合并/关闭 9），Issue 更新 2 条，无新版本发布。核心贡献者 @chengyongru 持续高产，今日集中修复了会话压缩（compaction）、replay 稳定性和 WebUI 体验三大方向的问题。整体呈现“社区报 Bug + 修复快速跟进”的良性节奏，稳定性建设明显加速。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭 9 个 PR，主要推进：

- **会话压缩链路修复**：[#5688](https://github.com/HKUDS/nanobot/pull/5688) 修复 idle compaction 后 provider_state 未失效导致旧历史被回放的问题；[#5690](https://github.com/HKUDS/nanobot/pull/5690) 统一个人 Agent 安装文档入口。
- **WebUI 体验**：[#5689](https://github.com/HKUDS/nanobot/pull/5689) 修复首条输出时计时器跳变；[#5685](https://github.com/HKUDS/nanobot/pull/5685) 使中断的模型配置向导可在浏览器中续完；[#5691](https://github.com/HKUDS/nanobot/pull/5691) 修复多行 `$$` 公式 KaTeX 渲染报错；[#5504](https://github.com/HKUDS/nanobot/pull/5504) 在 TUI/WebUI 中展示模型重试状态。
- **CLI 功能**：[#5676](https://github.com/HKUDS/nanobot/pull/5676) 增加 attach-only Desktop 目标选择，保持 Desktop 与 Python 安装独立。
- **文档**：[#5687](https://github.com/HKUDS/nanobot/pull/5687) 补全 gateway 健康检查与 WebSocket readiness 的 200/503 响应说明。

整体看，压缩/replay 体系的正确性修复密集落地，Agent 核心运行时的历史一致性显著增强。

## 4. 社区热点

- **[#5567](https://github.com/HKUDS/nanobot/issues/5567) 飞书渠道整合多轮回复为单条流式卡片**（5 条评论，持续讨论至 9/7）：用户诉求明确——“用户发一条消息 → agent 回一条消息”。当前工具提示、进度消息、最终回复分离发送，体验割裂。已有 CardKit 流式卡片基础，讨论焦点应在消息合并策略，社区参与度高，值得关注实现进展。
- **[#5694](https://github.com/HKUDS/nanobot/pull/5694)（新 PR）**：统一三种 compaction 触发方式（手动/idle/自动）使用 summary checkpoint，修复压缩后残留大量历史及 WebUI 上下文用量显示错误，与 #5688 构成完整修复链。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 状态 |
|---|---|---|
| P1 | [#5580](https://github.com/HKUDS/nanobot/pull/5580) 会话持久化阻塞事件循环，拖慢无关会话 | fix PR 开放中（conflict） |
| P2 | [#5675](https://github.com/HKUDS/nanobot/pull/5675) 主模型挂起耗尽 deadline，fallback 永不触发（回归） | fix PR 开放中，已可复现验证 |
| P2 | [#5695](https://github.com/HKUDS/nanobot/pull/5695) replay 中工具结果被二次截断，历史不一致（回归） | fix PR 今日新开 |
| P2 | [#5686](https://github.com/HKUDS/nanobot/pull/5686) cron 回调修改 job store 时回调被取消，结果丢失 | fix PR 开放中 |
| P2 | [#5630](https://github.com/HKUDS/nanobot/pull/5630) Dream 记忆文件（SOUL.md/MEMORY.md）无限增长注入每次请求 | fix PR 开放中 |
| P2 | [#5692](https://github.com/HKUDS/nanobot/pull/5692) `find_files`/`grep` 递归 glob `**` 匹配失效 | fix PR 开放中 |

好消息：今日报告的主要 Bug 均已配有带回归测试的修复 PR，响应速度快；坏消息是多个修复 PR 处于 conflict 状态，合并节奏可能受阻。

## 6. 功能请求与路线图信号

- **[#5693](https://github.com/HKUDS/nanobot/issues/5693)（今日新开）**：无人零售/IoT 场景适配——轻量化边缘部署 + 中文文档。注意该 Issue 由“AI 军团”自动提交，真实用户优先级待甄别，但“轻量部署”诉求与项目定位契合。
- **通知音效功能重复提交**：[#5602](https://github.com/HKUDS/nanobot/pull/5602) 与 [#5547](https://github.com/HKUDS/nanobot/pull/5547) 均针对 #5524 实现 turn 完成提示音，维护者需择一合并，信号表明该需求社区认可度高，大概率进入下一版本。
- **安全方向**：[#5628](https://github.com/HKUDS/nanobot/pull/5628) macOS Seatbelt 沙箱后端（零新依赖），配合已有 exec sandbox 体系，是路线图上 agent 安全隔离的重要一环。
- **成本优化**：[#5611](https://github.com/HKUDS/nanobot/pull/5611) 限制 reasoning replay 到最近一轮，直接降低每轮 prefill 成本；[#5662](https://github.com/HKUDS/nanobot/pull/5662) 添加 `x-opencode-session` 头保持 OpenCode 缓存命中——**注意：OpenCode 官方宣布 2026-09-06 起缺失该头可能报错，此 PR 具有紧迫性，建议优先合并**。

## 7. 用户反馈摘要

- **消息割裂是渠道用户最大痛点**：飞书用户明确反馈 agent 一条消息触发 n 条回复（工具提示+进度+最终回复），体验差，期望流式卡片整合（#5567）。
- **长时间使用稳定性**：多个 fix PR 反映重度用户遇到 compaction 后历史异常、replay 不一致、记忆文件膨胀等问题，说明生产环境长期会话是核心使用场景。
- **首启体验**：用户关闭首启向导后被迫进入终端流程的反馈（#5685）表明非技术用户对浏览器内完成配置有强需求，已修复。
- **成本敏感**：reasoning replay 和 prompt cache 相关 PR 显示用户关注 token 消耗与推理成本。

## 8. 待处理积压

- [#5547](https://github.com/HKUDS/nanobot/pull/5547)：8/26 开启，与 #5602 功能重复且标记 conflict，需维护者裁决合并方向。
- [#5580](https://github.com/HKUDS/nanobot/pull/5580)：P1 性能修复，8/28 开启至今未合并且有冲突，建议优先处理。
- [#5675](https://github.com/HKUDS/nanobot/pull/5675)：provider failover 失效回归，影响容灾能力，处于 conflict 状态。
- [#5567](https://github.com/HKUDS/nanobot/issues/5567)：8/27 提出、5 条评论的飞书体验诉求，尚无关联 PR，建议维护者给出实现规划或标注 help wanted。
- [#5662](https://github.com/HKUDS/nanobot/pull/5662)：OpenCode session header，因上游 9/6 生效的强制变更而具有时效性，尽快合并可避免用户报错。

---
*数据来源：GitHub（统计窗口 2026-09-07 至 2026-09-08）*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-09-08

## 1. 今日速览

今日 Zeroclaw 仓库保持高活跃度：过去 24 小时内 Issues 更新 37 条（新开/活跃 31，关闭 6），PR 更新 50 条（待合并 44，已合并/关闭 6），无新版本发布。社区反馈集中在 **ZeroCode (ACP/TUI) 会话数据丢失类问题**和 **Anthropic prompt-cache 策略优化**两条主线上，多位核心贡献者（@Audacity88、@IftekharUddin、@badbat75）持续产出高质量报告。多个长周期 XL 级 PR（如 #9419、#9977、#10241）今日仍有更新，显示维护者正在积极推动安全与 provider 层的大重构落地。整体项目健康度良好，但 P1 级 S0/S1 问题数量偏多，值得维护者优先关注。

## 2. 版本发布

今日无新版本发布。当前主线仍在 v0.8.5 之后的集成 HEAD（`fd6f3ae`）上演进。

## 3. 项目进展

今日合并/关闭的 PR 共 6 条（数据中未提供具体合并清单，以下依据 Issue 关闭情况与活跃 PR 推断进展）：

- **Bedrock Nova 2 Lite cachePoint 配置支持**：[#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) 关闭（12 条评论，本周讨论最多），Bedrock 缓存控制配置问题已解决。
- **heartbeat.target 复合键支持**：[#10670](https://github.com/zeroclaw-labs/zeroclaw/issues/10670) 当日开、当日关，多 channel 实例路由问题修复效率很高。
- **WhatsApp 语音转写 wiring 修复**：[#10688](https://github.com/zeroclaw-labs/zeroclaw/issues/10688) 关闭，v0.8.5 中 WhatsApp Web 语音消息永远无法转写的缺陷已修复。
- **Anthropic 第三缓存断点增强**：[#10660](https://github.com/zeroclaw-labs/zeroclaw/issues/10660) 关闭，turn 边界缓存未命中将回退到历史而非 system prompt，直接降低长会话成本。
- **ZeroCode Enter 提交无响应**：[#10693](https://github.com/zeroclaw-labs/zeroclaw/issues/10693) 关闭。
- **Reliable pinned model 错误上报**：[#10326](https://github.com/zeroclaw-labs/zeroclaw/issues/10326) 关闭。

整体看，今日关闭项以 provider/channel 修复为主，属于稳定性打磨阶段；大型功能推进依赖仍在待合并的 XL PR（见第 8 节）。

## 4. 社区热点

1. **[#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720)（12 评论，已关闭）**：用户希望禁用 Bedrock Nova 2 Lite 的 cachePoint 以规避随机缓存报错。诉求本质是 **provider 缓存行为需要更细粒度的配置开关**，反映出用户在非头部模型上的兼容性痛点。
2. **[#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230)（6 评论，P1/risk:high）**：daemon 启动/重载时 Quickstart 配置可导致 Tokio worker 栈溢出。与 #9399（Quickstart checklist 渲染 PR）关联，Quickstart 链路是稳定性薄弱点。
3. **[#9333](https://github.com/zeroclaw-labs/zeroclaw/issues/9333) / [#10121](https://github.com/zeroclaw-labs/zeroclaw/issues/10121)**：ACP failed/partial turn 会话切换后消失，后者严重级别为 **S0（数据丢失）**。对应修复 PR 为 [#9378](https://github.com/zeroclaw-labs/zeroclaw/pull/9378)，已待维护者审核较久。
4. **新 PR [#10712](https://github.com/zeroclaw-labs/zeroclaw/pull/10712)**（企业环境）：WebSocket TLS 仅信任捆绑 Mozilla 根证书，导致 Slack Socket Mode 在企业 TLS 检查代理后失败——典型的企业部署场景反馈。

## 5. Bug 与稳定性（按严重程度）

**S0 — 数据丢失/安全**
- [#10121](https://github.com/zeroclaw-labs/zeroclaw/issues/10121)：ACP partial turn 在进程退出前未持久化即丢失。**已有修复 PR #9378**（待审核）。

**S1 — 工作流阻断**
- [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230)：daemon 重载栈溢出（P1，needs-repro，**暂无 fix PR**）。
- [#10659](https://github.com/zeroclaw-labs/zeroclaw/issues/10659)：预算超限的 Code turn 恢复会话后丢失进度（follow-up，暂无独立 fix PR）。
- [#10697](https://github.com/zeroclaw-labs/zeroclaw/issues/10697)：ACP transcript 丢弃 tool call 前的 assistant 文本（今日新开，暂无 fix PR）。
- [#10693](https://github.com/zeroclaw-labs/zeroclaw/issues/10693)：Enter 提交被静默忽略 — **已关闭**。

**S2 — 行为退化**
- [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408)：同一会话并发 turn 导致重复工作与重复回复（P1，暂无明确 fix PR）。
- [#10689](https://github.com/zeroclaw-labs/zeroclaw/issues/10689)：Telegram TTS 回复以 `[` 开头（ElevenLabs v3 音频标签）时被静默跳过。
- [#10694](https://github.com/zeroclaw-labs/zeroclaw/issues/10694)：Windows PowerShell shell 测试间歇性超时（CI 稳定性）。
- [#10702](https://github.com/zeroclaw-labs/zeroclaw/issues/10702)：token-budget 历史裁剪存在与 #10674 相同的迟滞缺口（P3）。

**安全相关**
- [#10606](https://github.com/zeroclaw-labs/zeroclaw/issues/10606)：未认证 `/health` 端点泄漏组件原始错误信息（P1/accepted，风险高）。

## 6. 功能请求与路线图信号

今日 @IftekharUddin 集中提交了一批 **OpenAI Responses/Astra 生态增强**，信号明确指向下一阶段路线图：

- [#10708](https://github.com/zeroclaw-labs/zeroclaw/issues/10708)：WebSocket 上的主动响应转向（steering）
- [#10707](https://github.com/zeroclaw-labs/zeroclaw/issues/10707)：有界程序化工具调用
- [#10706](https://github.com/zeroclaw-labs/zeroclaw/issues/10706)：跨调用路径保留 opaque reasoning 状态
- [#10705](https://github.com/zeroclaw-labs/zeroclaw/issues/10705)：兼容模型的 `max` reasoning effort（GPT-6 Astra）
- [#10704](https://github.com/zeroclaw-labs/zeroclaw/issues/10704)：异步函数工具
- [#10709](https://github.com/zeroclaw-labs/zeroclaw/issues/10709)：Astra 配置文档

**Anthropic 缓存优化系列**（配合已关闭的 #10660，构成完整主题）：[#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663)（可配置 1 小时缓存 TTL）、[#10662](https://github.com/zeroclaw-labs/zeroclaw/issues/10662)（OAuth system-prefix 标记低于缓存最小值并占用断点槽位）。判断：**prompt-cache 成本优化 + OpenAI Responses 高级能力**大概率是下个版本的双主线。

其他：[#10695](https://github.com/zeroclaw-labs/zeroclaw/issues/10695)（多客户端会话刷新，承接 #9739 多会话工作）、[#10700](https://github.com/zeroclaw-labs/zeroclaw/issues/10700)（成本记录按会话分离，配合 #8966 的 usage 事件改进可能一并纳入）。

## 7. 用户反馈摘要

- **企业/代理环境用户**：Slack WebSocket 在公司 TLS 检查代理下失败（#10712），说明企业部署是重要用户群，证书信任策略需与 OS 存储对齐。
- **多模型重度用户**：Bedrock 新模型（Nova 2 Lite）缓存报错、Reliable pinned model 上报错误、Anthropic 缓存 TTL 不足——核心诉求是**跨 provider 的缓存与计费透明度**。
- **ZeroCode/ACP 用户**：最痛的点是"已看到的流式内容在失败/切换后消失"（#9333、#10121、#10659、#10697），即**durable transcript 的完整性**，用户对工作成果丢失零容忍。
- **多渠道运营用户**：WhatsApp 语音不可转写（#10688，已修复）、Telegram TTS 音频标签吞回复（#10689）、cron 投递渠道解析错误（#9940）——channel 长尾细节问题仍密集。
- **正面信号**：多位外部贡献者（@rifuki、@askldjd、@NiuBlibing、@Project516）持续提交功能级 PR，且维护者会主动修复并保留原作者署名（#9283、#9724），社区协作氛围健康。

## 8. 待处理积压（提醒维护者关注）

**高优先 Issue（长期开放）**
- [#10121](https://github.com/zeroclaw-labs/zeroclaw/issues/10121)（S0，8/19 开）：ACP partial turn 数据丢失 — 修复在 #9378 中，建议优先审核合并。
- [#9940](https://github.com/zeroclaw-labs/zeroclaw/issues/9940)（P1/accepted，8/12 开）：cron 投递渠道解析错误。
- [#10115](https://github.com/zeroclaw-labs/zeroclaw/issues/10115)（P1/accepted，8/19 开）：工具结果截断对模型上下文外不可见。
- [#10104](https://github.com/zeroclaw-labs/zeroclaw/issues/10104)（8/18 开）：hardware feature-gated 测试在 CI 中从未执行。

**大型 PR 积压（多为 XL、needs-author-action / needs-maintainer-review）**
- [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419)（7/26 开，do-not-merge）：provider 凭据限速轮转。
- [#9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977)（8/13 开）：文件系统变更限制在 workspace 内（安全）。
- [#10241](https://github.com/zeroclaw-labs/zeroclaw/pull/10241)（status:blocked）：channel 驱动的 shell 审批路由。
- [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713)（status:blocked）：history-trim 事件 token 统计。
- [#9283](https://github.com/zeroclaw-labs/zeroclaw/pull/9283)、[#9378](https://github.com/zeroclaw-labs/zeroclaw/pull/9378)：已被标记 **stale-candidate**，建议维护者明确去留，避免社区贡献流失。

**建议**：积压的 XL 安全类 PR（#9977、#10337、#10391）与 S0/S1 数据丢失问题（#10121 系列）是当前健康度的最大风险点，宜在下个版本前集中清障。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-09-08

## 1. 今日速览

Hermes Agent 今日保持高活跃度：24 小时内 Issues 更新 50 条（新开/活跃 44、关闭 6），PR 更新 50 条（待合并 46、合并/关闭 4），并发布了 patch 版本 **v0.21.1 (v2026.9.7)**。社区讨论焦点集中在 Desktop 会话生命周期（Projects 范式重构引发的回归）、会话状态管理（sweeper:risk-session-state 标签高频出现）以及消息投递可靠性。PR 队列中新提交的修复以 gateway、插件系统和小缺陷修补为主，整体呈现“版本快速迭代 + 社区持续反馈回归”的健康开源项目特征。

## 2. 版本发布

**v2026.9.7 — Hermes Agent v0.21.1**（[Release](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.7)，2026-09-07）

- 性质：**Patch 版本**，自 v0.21.0 以来 main 分支的滚动汇总（截至 commit `6178e9f4`），面向 tagged 部署与下游消费者。
- 无破坏性变更说明，属于常规累积性 patch，下游升级风险低。
- 迁移注意：Windows 用户升级时注意 [#104689](https://github.com/NousResearch/hermes-agent/issues/104689) 报告的更新器与杀毒软件冲突问题。

## 3. 项目进展

今日 PR 合并/关闭仅 4 条，多数工作仍停留在评审队列（46 条待合并），关键推进方向：

- **会话状态修复**：[#105308](https://github.com/NousResearch/hermes-agent/pull/105308)（P1）统一 replay 历史规范化，解决 TUI resume 与发送路径的缓存失效不对称——这是会话恢复类问题的根因级修复。
- **消息投递可靠性**：[#105518](https://github.com/NousResearch/hermes-agent/pull/105518) 修正 systemd `TimeoutStopSec` 与 shutdown watchdog 的竞争，避免升级时被 SIGKILL 导致脏退出误报。
- **插件系统稳定性**：[#105519](https://github.com/NousResearch/hermes-agent/pull/105519) 修复插件加载竞态（sys.modules 快照），消除“工具不存在”的隐性失败。
- **平台集成**：[#102675](https://github.com/NousResearch/hermes-agent/pull/102675) 为 Signal 增加联系人/群组目录发现；[#105524](https://github.com/NousResearch/hermes-agent/pull/105524) 修复 Matrix 多 bot 相互唤醒问题。
- **大型特性候选**：[#94266](https://github.com/NousResearch/hermes-agent/pull/94266) Hermes Collective Wisdom Agent V1（技能共享生态）、[#65982](https://github.com/NousResearch/hermes-agent/pull/65982) claude-agent-sdk 一级运行时支持，均为社区贡献的长线大 PR，仍在评审。

## 4. 社区热点

1. **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)（175 评论）**：Skills Hub 索引过期 29.8h（超 26h 上限），自动化探针持续报警。评论量异常高说明 skills 生态文档页被大量用户依赖，索引流水线可靠性成为社区痛点。
2. **[#97681](https://github.com/NousResearch/hermes-agent/issues/97681)（27 评论）**：用户希望 Bot Group Chats 在 Desktop 关闭后仍持续运行（Bots 分布在 laptop/VPS，Group Chat 跨设备接管）——反映“多 Agent 常驻编排”的核心使用场景诉求。
3. **[#53004](https://github.com/NousResearch/hermes-agent/issues/53004)（P1，14 评论）**：Projects 范式（#49037）破坏了 folder→session→sidebar 工作流，是重构引入的高优回归。
4. **[#90663](https://github.com/NousResearch/hermes-agent/issues/90663)（已关闭，12 评论）**：TUI 在 Ghostty/macOS 下 Shift+字母变小写，今日关闭，说明 Ink TUI 输入处理已修复。
5. **[#105235](https://github.com/NousResearch/hermes-agent/issues/105235)（已关闭）**：流式 TTS 首句独立调优已并入 #96933，展示了良好的跨 PR 协作与作者署名保留实践。

## 5. Bug 与稳定性（按严重程度）

**P1**
- [#104691](https://github.com/NousResearch/hermes-agent/issues/104691)：僵尸 session lease 永久锁死会话（"already has a live owner"），v0.21.0，**尚无 fix PR**。
- [#53004](https://github.com/NousResearch/hermes-agent/issues/53004)：Projects 范式破坏文件夹-会话-侧栏流程，**尚无 fix PR**，标记 needs-decision。
- [#103786](https://github.com/NousResearch/hermes-agent/issues/103786)：Windows 上 gateway 重试循环阻塞 Electron 主线程致 AppHangB1，**尚无 fix PR**。
- [#52261](https://github.com/NousResearch/hermes-agent/issues/52261)：本地 MLX 推理 400 被误判为 context_overflow，触发破坏性压缩/重置循环，**尚无 fix PR**。

**P2（今日新报重点）**
- [#105471](https://github.com/NousResearch/hermes-agent/issues/105471)：`_send_with_retry` 超时后仍发送纯文本 fallback，可能造成消息重复投递（#14061 残留）。
- [#98524](https://github.com/NousResearch/hermes-agent/issues/98524)：2026-08-30 构建后 Desktop 助手消息在转录中重复渲染（DB 仅一行）。
- [#105497](https://github.com/NousResearch/hermes-agent/issues/105497)：语音 barge-in 转录被陈旧 `busy` 闭包静默丢弃。
- [#99286](https://github.com/NousResearch/hermes-agent/issues/99286)：自定义 provider 上下文窗口显示硬编码目录值的一半；相关 PR [#102644 已关闭](https://github.com/NousResearch/hermes-agent/issues/102644)（Compressor lazy path 同类问题已修）。
- [#94613](https://github.com/NousResearch/hermes-agent/issues/94613)：Install & Update E2E 自 8/13 起全红（沙箱 MITM 代理掐断 npm TLS），**阻塞 CI 可信度**。

**P3**
- [#105465](https://github.com/NousResearch/hermes-agent/issues/105465)：每次 `hermes update` 后 UI 语言重置为英文（与长期未修的 [#26665](https://github.com/NousResearch/hermes-agent/issues/26665) 同根因，v0.21.0→v0.21.1 仍复现）。
- [#105525](https://github.com/NousResearch/hermes-agent/issues/105525)：自定义 `HERMES_HOME` 与默认 systemd 服务名冲突，多租户网关相互改写 unit 文件（安全边界隐患）。

## 6. 功能请求与路线图信号

- **跨设备/跨平台会话延续**：[#97681](https://github.com/NousResearch/hermes-agent/issues/97681)（Group Chat 常驻）+ [#41220](https://github.com/NousResearch/hermes-agent/issues/41220)（Telegram /resume 跨来源会话）共同指向“会话即服务”方向；#96081（display_metadata 持久化）已在铺路，纳入下版本概率较高。
- **技能生态**：#94266（Collective Wisdom V1）与 #86421（压缩后重新注入 skill 内容）表明 skills 共享与上下文管理是活跃路线图方向，但均处 needs-decision 评审阶段。
- **多运行时支持**：#65982（claude-agent-sdk 订阅 OAuth、fail-closed 计费）是重量级提案，落地后将显著扩展 Hermes 的 provider 版图。
- **Kanban/Cron**：#105476（可复用工作流 recipes）今日新提，属增量功能，可能随 patch 进入。
- **TTS**：流式首句调优已并入 #96933，是下个版本最确定的交付项之一。

## 7. 用户反馈摘要

- **痛点集中于 Desktop**：大量 issue 涉及 Desktop 的会话锁定（#104691）、消息重复渲染（#98524）、浏览器标签跨会话串扰（#101856）、Windows 主线程挂死（#103786）——Desktop 多会话并发场景是稳定性薄弱区。
- **Windows 支持体验差**：更新器被杀软隔离（#104689）、ACP 挂起（#58083）、上下文窗口减半（#99286）、fuzzy_match CRLF 缩进损坏（PR #88320）——Windows 是问题密度最高的平台。
- **本地推理用户**：#52261 反映资源受限本地部署（MLX）用户遭遇破坏性压缩循环，是被忽视的群体。
- **满意点**：社区报告质量高（含复现步骤、根因分析甚至修复方案），维护方响应及时；跨 PR 协作（如 #105235 并入 #96933 保留作者权）体现了良好的社区治理。
- **运维视角**：Docker/systemd/SSH（Fish shell #80625）部署的边缘问题持续被运维型用户报告。

## 8. 待处理积压

| Issue/PR | 年龄 | 状态 | 提醒 |
|---|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills 索引过期 | ~52 天 | OPEN，175 评论 | 用户依赖度极高，索引流水线需根因修复而非反复报警 |
| [#26665](https://github.com/NousResearch/hermes-agent/issues/26665) 语言重置 | ~115 天 | OPEN | 今日新增重复报告 #105465，长期未修且在最新版仍复现 |
| [#53004](https://github.com/NousResearch/hermes-agent/issues/53004) Projects 回归 | ~74 天 | OPEN，P1，needs-decision | 核心工作流破坏，需尽快决策修复方向 |
| [#9971](https://github.com/NousResearch/hermes-agent/issues/9971) 微信 TTS SILK 转码 | ~146 天 | OPEN，blocked | 中文用户高频诉求，长期无进展 |
| [#52261](https://github.com/NousResearch/hermes-agent/issues/52261) 本地推理压缩循环 | ~75 天 | OPEN，P1 | 破坏性数据丢失风险，优先级应提升 |
| [PR #20874](https://github.com/NousResearch/hermes-agent/pull/20874) Mattermost 线程路由 | ~125 天 | OPEN，needs-decision | 长期滞留的大型重构 PR，需维护者裁决 |
| [PR #83054](https://github.com/NousResearch/hermes-agent/pull/83054) / [#82892](https://github.com/NousResearch/hermes-agent/pull/82892) MCP 关闭清理 | ~29 天 | OPEN | 多个相关 PR 竞争，建议合并评审统一收敛 |

**健康度小结**：单日 50 issue + 50 PR 的吞吐表明社区贡献旺盛，但 46 条待合并 PR 与多个 P1 长期未决 issue 提示评审带宽不足，建议优先处理 session-state 风险簇与 CI（#94613）全红问题。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-09-08

## 1. 今日速览

- 今日项目活跃度**中等偏低**：新增 1 条 Issue 活动、5 条 PR 活动均为待合并状态，**无任何 PR 合并/关闭，无新版本发布**。
- 唯一的新增功能贡献来自社区：新增 OpenCode Go provider（[#3371](https://github.com/sipeed/picoclaw/pull/3371)）。
- 值得关注的是，5 个待合并 PR 中有 **3 个已被标记为 stale**（[#3344](https://github.com/sipeed/picoclaw/pull/3344)、[#3354](https://github.com/sipeed/picoclaw/pull/3354)、[#3353](https://github.com/sipeed/picoclaw/pull/3353)），显示维护者响应速度可能存在瓶颈。
- 存在一个影响 QQ 渠道可用性的上游依赖 Bug（[#3365](https://github.com/sipeed/picoclaw/issues/3365)），尚无修复 PR。

## 2. 版本发布

今日无新版本发布。最新可用版本仍为 nightly build（自报版本号 `0.3.1`）。

## 3. 项目进展

今日**无 PR 合并或关闭**，主线代码无推进。待合并管线中的功能包括：

| PR | 内容 | 状态 |
|---|---|---|
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | 新增 opencode-go provider，支持按模型自动路由三类端点及 `x-opencode-session` 会话头 | 新提交，待评审 |
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | 新增 Keenable 免 API key 网页搜索 provider | 待评审 |
| [#3354](https://github.com/sipeed/picoclaw/pull/3354) | IRCv3 `draft/multiline` 多行消息聚合接收 | stale |
| [#3353](https://github.com/sipeed/picoclaw/pull/3353) | 工具反馈动画生命周期上限（5 分钟封顶），防消息无限编辑 | stale |
| [#3344](https://github.com/sipeed/picoclaw/pull/3344) | Build Remote Agent 手机配对旁观适配器（`gbr/1` 协议） | stale |

若上述 PR 均合入，将在 provider 生态、搜索工具、IRC 渠道健壮性和远程协作方向有明显增益，但当前评审停滞使进展**停留在管线中未落地**。

## 4. 社区热点

- **[#3365 QQ channel 401 "Authorization参数格式错误"](https://github.com/sipeed/picoclaw/issues/3365)**（@crazysarah，9-04 创建，9-07 更新，1 评论 1 👍）— 今日唯一活跃 Issue。诉求明确：QQ 渠道完全不可用，且定位到根因在**上游依赖组合**（botgo v0.2.1 + resty ≥ v2.17），用户已做了相当深入的依赖排查，期待官方给出 pin 依赖版本或 patch 的修复方案。

## 5. Bug 与稳定性

1. **🔴 高 · [#3365](https://github.com/sipeed/picoclaw/issues/3365)**：QQ 渠道因 botgo v0.2.1 与 resty ≥ v2.17 不兼容导致 401 认证失败，渠道级功能不可用。属**间接依赖回归**，非 PicoClaw 代码本身问题，但影响所有近期 nightly 用户。**目前无 fix PR，无维护者回应记录** —— 建议优先处理，短期方案为 pin resty < v2.17。
2. **🟡 中 · [#3353](https://github.com/sipeed/picoclaw/pull/3353)**：工具反馈动画生命周期清理遗漏可导致频道消息被无限编辑（潜在的速率限制/刷屏风险），修复 PR 已存在但处于 stale。

## 6. 功能请求与路线图信号

- **Provider 扩展是当前最活跃的贡献方向**：[#3371](https://github.com/sipeed/picoclaw/pull/3371)（OpenCode Go，关联需求 #3369）与 [#3370](https://github.com/sipeed/picoclaw/pull/3370)（Keenable 免费搜索）均为外部贡献者提交，显示插件化 provider 架构降低了社区参与门槛，预计是下一版本的主要增量。
- **多渠道/协议增强**：IRCv3 multiline（#3354）、Build Remote Agent 手机旁观（#3344）表明用户在把 PicoClaw 当作**多协议统一 Agent 网关**使用，远程设备配对可能是值得关注的方向。

## 7. 用户反馈摘要

- 用户运行环境多样：#3365 报告者在 **Orange Pi 3B（RK3566, aarch64）** 上跑 nightly，印证 PicoClaw 在嵌入式/ARM 边缘设备上的用户群。
- 痛点集中在**依赖管理透明度**：间接依赖（resty）升级引入回归且用户难以自行规避，希望官方锁定或声明兼容版本矩阵。
- 社区贡献者对扩展点（providers、channels、tools）文档和接口清晰度反馈积极，PR 描述质量普遍较高。

## 8. 待处理积压

- **[#3365](https://github.com/sipeed/picoclaw/issues/3365)**：QQ 渠道 401 已开放 4 天、含完整根因分析，尚无维护者回应或修复计划 —— **最高优先级提醒**。
- **3 个 stale PR**（[#3344](https://github.com/sipeed/picoclaw/pull/3344) 8-23 起、[#3354](https://github.com/sipeed/picoclaw/pull/3354)、[#3353](https://github.com/sipeed/picoclaw/pull/3353) 均 8-31 起）：已停滞 8 天以上，面临被自动关闭风险，建议维护者尽快评审或给出修改意见，避免社区贡献流失。

---

**健康度小结**：社区贡献意愿良好（新 provider PR 持续流入），但维护端响应滞后——评审积压 + 关键渠道 Bug 无回应是当前主要风险点。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-09-08

## 1. 今日速览

NanoClaw 今日保持高活跃度：过去 24 小时 PR 更新达 28 条（11 条待合并、17 条已合并/关闭），新开 Issue 2 条，无新版本发布。核心团队（@gavrielc、@Koshkoshinsk 等）密集推进 **durable host（可持久化宿主）** 大型 PR 链的合并落地，是今日最显著的主线进展。社区侧则围绕**会话归档无限增长、transcript 轮转失效**等长期运行场景的存储/状态管理问题提交了两个新 Bug 报告。整体来看，项目处于“核心架构重构收尾 + 渠道/工具生态扩展”并行的健康阶段。

---

## 2. 版本发布

今日无新版本发布。（最新版本仍为 Issue 中提及的 2.1.53）

---

## 3. 项目进展

今日共 17 条 PR 合并/关闭，含多条长周期核心工作的落地：

### 🎯 里程碑：durable host 系列 PR 链合并完成
- [#3653 rollup: the durable host — coordination state, wake seam, reconcile queue, restart-honest delivery, claim fencing (#3508–#3528)](https://github.com/nanocoai/nanoclaw/pull/3653) — 整条链（#3508 → #3514 → #3515 → #3516 → #3517 → #3518 → … → #3528）通过此 rollup PR 一次性落地。这是今日最重要的合并，意味着**宿主协调状态持久化、重启后诚实投递、claim fencing** 等能力全部进入主干。
- [#3517 feat(db): shadow-write coordination state alongside the in-memory maps](https://github.com/nanocoai/nanoclaw/pull/3517) / [#3518 fix(approvals): survive restarts via the gateway-provider seam](https://github.com/nanocoai/nanoclaw/pull/3518) — 链上关键两环：易失协调事实双写持久化（不抛错的 `shadowWrite`），审批模块与网关 SDK 解耦并可在进程重启后存活。

### CI/流程加固
- [#3736 ci: add a gate job and a post-merge run on main](https://github.com/nanocoai/nanoclaw/pull/3736) — 新增 `gate` 依赖任务，依赖失败时不再被跳过。
- [#3739 ci(registry-skills): registry gate check + Docker Hub 5xx 容错构建](https://github.com/nanocoai/nanoclaw/pull/3739) — 直接回应 #3737 昨日在红色 CI 下被自动合并的事故，为 ruleset 提供可要求的 gate 上下文。
- [#3737 fix(db): nested-continuation conformance test 不再与自身 watchdog 竞态](https://github.com/nanocoai/nanoclaw/pull/3737)（关闭）。

### 其他修复
- [#3400 fix(typing): Slack typing 状态随回复送达而结束](https://github.com/nanocoai/nanoclaw/pull/3400)（8 月老 PR 落地）
- [#3661 fix(container): Bun 安装重试，替代直接失败镜像构建](https://github.com/nanocoai/nanoclaw/pull/3661)
- [#1519 fix: 防止任务重复运行、清理孤儿任务、加固 IPC](https://github.com/nanocoai/nanoclaw/pull/1519)（3 月老 PR 关闭，任务调度器稳定性提升）

**评估：** 今日合并量含金量高——durable host 链是跨度数周的架构级工程，落地后 NanoClaw 宿主在重启场景下的可靠性显著提升，项目整体向前迈进了一大步。

---

## 4. 社区热点

- **[#3735 conversations/ 归档无限增长 — 无保留策略、无上限](https://github.com/nanocoai/nanoclaw/issues/3735)**（@TO-maschenborn，1 条评论）— `archiveTranscriptFile()` 每次压缩都写入 markdown 归档，且从不删除。报告者运营一个 **agent 机队（fleet）**，说明已有企业级/多实例使用场景在真实生产中撞上磁盘增长问题。诉求：引入 retention / rotation / cap 机制。
- **[#3738 fix(agent-runner): 回复串到被回复消息所在 thread](https://github.com/nanocoai/nanoclaw/pull/3738)**（core-team）— `send_message` / `send_file` 的回复落到主频道而非原 thread，`resolveRouting` 的 thread 解析被修复。
- **[#3743 feat: AgentMail 邮件渠道适配器](https://github.com/nanocoai/nanoclaw/pull/3743)**（@billyshipp）— 社区贡献的托管式 agent 收件箱方案，避开 MX 记录/DNS 所有权冲突，反映用户对“把 agent 接入邮件”的持续需求。
- **[#3729 浏览器门户中完成 Echo/Slack 设置与 perk 管理](https://github.com/nanocoai/nanoclaw/pull/3729)** — 设置体验向 Web 端迁移，降低新手接入门槛。

---

## 5. Bug 与稳定性（按严重程度排列）

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#3735](https://github.com/nanocoai/nanoclaw/issues/3735) 归档目录无上限增长，长期运行的 agent 机队面临磁盘耗尽风险 | 无 fix PR |
| 🔴 高 | [#3732](https://github.com/nanocoai/nanoclaw/issues/3732) `maybeRotateContinuation()` 仅在容器启动时调用一次；周期短于 30 分钟空闲上限的定时任务会无限保活容器，session 轮转永不执行 | 无 fix PR，但 #3741 (`--fresh-session`) 提供了部分缓解路径 |
| 🟡 中 | [#3742](https://github.com/nanocoai/nanoclaw/pull/3742) CLI `add-mount` 无法创建读写挂载，`--ro` 实为 no-op — 存在**安全语义风险**（用户以为只读实际可写） | 已有 fix PR |
| 🟡 中 | [#3740](https://github.com/nanocoai/nanoclaw/pull/3740) 入站路由失败后适配器丢失重试资格（mailbox 写失败仍被标记已处理） | 已有 fix PR |
| 🟢 低 | [#3719](https://github.com/nanocoai/nanoclaw/pull/3719) / [#3718](https://github.com/nanocoai/nanoclaw/pull/3718) A2A 通信失败未回报源端、发送者身份可伪造 | 均已有 fix PR |

---

## 6. 功能请求与路线图信号

- **定时任务无状态运行**：[#3741 `--fresh-session`](https://github.com/nanocoai/nanoclaw/pull/3741)（core-team @slambert）— 定时任务每晚会重读全部历史对话，成本逐日增长（作者实例一周涨 15%）。与 #3732/#3735 同属“长期运行会话治理”主题，**极可能进入下一版本**。
- **邮件渠道**：[#3743 AgentMail 适配器](https://github.com/nanocoai/nanoclaw/pull/3743) — 渠道矩阵（Slack、Echo、A2A、gbr/1 手机配对 #3494）进一步扩展。
- **OpenCode 作为可选 provider**：[#3733 自包含 provider skill](https://github.com/nanocoai/nanoclaw/pull/3733)（core-team）— setup 时可选，兼用于安装恢复/调试。
- **Web 端 onboarding**：[#3729](https://github.com/nanocoai/nanoclaw/pull/3729) 指向“浏览器优先设置体验”的产品方向。

**判断：** 下个小版本主线很可能是**会话生命周期治理**（retention、rotation、fresh-session）+ durable host 稳定性打磨。

---

## 7. 用户反馈摘要

- **生产化痛点浮现**：@TO-maschenborn 连报两个 Issue，均来自真实 fleet 部署——用户已把 NanoClaw 用于 7×24 长期运行，存储与状态治理成为头号痛点。
- **成本敏感**：定时任务历史膨胀导致 token 成本周涨 15% 的反馈（#3741）表明用户对上下文累积成本高度关注。
- **安全细节被重视**：`--ro` no-op（#3742）和 A2A 身份伪造（#3718）说明社区在安全语义上审查细致。
- **渠道生态期待**：邮件、手机配对（#3494，8 月底提交至今活跃更新）显示用户希望 agent 触达更多触点。

---

## 8. 待处理积压

- [#3494 Build Remote Agent 手机配对 (gbr/1)](https://github.com/nanocoai/nanoclaw/pull/3494) — 8/23 提交，昨日仍在更新，已挂 16 天，建议维护者给出评审排期。
- [#3719](https://github.com/nanocoai/nanoclaw/pull/3719) / [#3718](https://github.com/nanocoai/nanoclaw/pull/3718) — A2A 安全与可观测性修复，9/4 提交，core-team 出品，建议尽快合并。
- [#3735](https://github.com/nanocoai/nanoclaw/issues/3735) / [#3732](https://github.com/nanocoai/nanoclaw/issues/3732) — 两个新 Issue 尚无 fix PR 关联，鉴于影响生产部署，建议标记优先级并回应。

---

*数据来源：NanoClaw GitHub（截至 2026-09-08）。统计口径：过去 24 小时 Issue/PR 更新。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报（2026-09-08）

## 1. 今日速览

NullClaw 项目今日整体呈现**低活跃度、平稳运行**状态。过去 24 小时内无新增 Issue、无 Release 发布，仅 1 条 PR 活动更新（且为自动化依赖更新）。无 Bug 报告、无社区讨论，表明项目处于维护期或两次开发周期之间的间隙。数据面看项目无异常信号，但需关注核心开发活动的持续性问题。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

- **PR [#956](https://github.com/nullclaw/nullclaw/pull/956)**（OPEN）：Dependabot 自动发起的依赖更新，将 Docker 镜像组中的 `alpine` 基础镜像从 3.23 升级至 3.24。该 PR 创建于 2026-06-15，已挂起近 3 个月（9 月 7 日有更新），属于例行安全/基础镜像维护，非功能性进展。

今日无 PR 合并或关闭，项目功能层面**无实质推进**。

## 4. 社区热点

今日无活跃讨论。唯一的活动来自 Dependabot 的自动化 PR，无用户评论或 reactions。社区互动处于静默状态。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题。稳定性方面无负面信号。

## 6. 功能请求与路线图信号

- 今日无新功能请求。
- 待合并的 alpine 3.24 升级（PR #956）若被合入，将随下一次容器镜像构建发布，属于低风险维护性更新，建议作为近期维护动作尽快处理。

## 7. 用户反馈摘要

今日 Issues 评论为空，无法提炼用户反馈。建议后续关注 Issue 模板的响应率以持续跟踪用户痛点。

## 8. 待处理积压

- ⚠️ **PR [#956](https://github.com/nullclaw/nullclaw/pull/956)**：挂起约 **3 个月**未合并。虽为自动化依赖 PR，但长期未处理的基础镜像升级可能累积安全补丁滞后风险（alpine 3.24 相比 3.23 通常包含 CVE 修复）。**建议维护者优先评审并合并**，或注明挂起原因。

---

**健康度小结**：今日无风险事件，但连续静默 + PR 积压需引起维护者注意。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-09-08

## 1. 今日速览

IronClaw（[nearai/ironclaw](https://github.com/nearai/ironclaw)）今日整体呈**平稳、聚焦 WebUI 打磨**的态势：无新版本发布，无 PR 合并/关闭。4 个待合并 PR 均为 core 贡献者 @italic-jinxin 提交的 WebUI 修复系列（风险等级全部为 low），集中在斜杠命令（slash-command）交互体验上，形成一套连贯的 UX 改进批次。Issue 侧仅新增 1 条自动化基准失败分析报告（#8081），社区自发讨论较少，活跃度以核心团队内部推进为主。

## 2. 版本发布

今日无新版本发布，无最新 Releases 记录，无破坏性变更或迁移事项。

## 3. 项目进展

今日**无 PR 合并或关闭**（合并/关闭：0），项目在主干上无直接代码推进。但待合并队列中有 4 个 PR 于 09-07 有更新活动，构成一个完整的 WebUI 斜杠命令体验改进系列，预计合并后将显著提升聊天界面交互质量：

| PR | 规模/风险 | 内容 |
|---|---|---|
| [#8068](https://github.com/nearai/ironclaw/pull/8068) | S / low | 键盘导航时保持激活斜杠命令可见，鼠标悬停自动滚动到视口内 |
| [#8069](https://github.com/nearai/ironclaw/pull/8069) | M / low | 为命令结果卡片（成功/列表/回退/拒绝）添加可访问的关闭操作，且只移除临时性消息、保留持久聊天记录 |
| [#8070](https://github.com/nearai/ironclaw/pull/8070) | XS / low (docs) | 斜杠命令菜单改用响应式网格，统一标题与描述对齐，窄屏堆叠显示 |
| [#8071](https://github.com/nearai/ironclaw/pull/8071) | XS / low | 防止命令结果卡片在 transcript flex 列中被压缩，保持外层视口滚动 |

四个 PR 均附回归测试，质量意识良好。整体来看，项目处于**细节打磨与稳定性巩固阶段**，前进幅度温和但方向清晰。

## 4. 社区热点

今日社区讨论热度偏低，无高评论量 Issue/PR。

- [#8081 Daily ironclaw failure taxonomy — 2026-09-07](https://github.com/nearai/ironclaw/issues/8081)（@pranavraja99，0 评论 / 0 👍）：这是项目例行发布的**每日基准失败分类报告**，分析了 officeqa 套件 42 个未通过用例，结论为“绝大多数是真实的模型质量数值错误（涉及 DeepSeek-V4-Flas…）”。该系列报告反映维护团队将失败归因区分为“模型能力问题”与“框架/工具问题”的诉求，用于指导 IronClaw 自身的修复优先级。

## 5. Bug 与稳定性

今日**未收到用户自发报告的 Bug、崩溃或回归问题**。

- ⚠️ 需关注：[#8081](https://github.com/nearai/ironclaw/issues/8081) 的失败分类报告指出 officeqa 套件存在 42 个非通过用例，虽主要归因于模型数值能力而非 IronClaw 框架缺陷，但建议维护者复核其中是否有部分属于 agent 工具调用/解析层面的可修复项。目前无对应 fix PR。

## 6. 功能请求与路线图信号

今日无新功能请求类 Issue。但从 PR 走向可推断的路线图信号：

- **WebUI 交互体验是当前迭代主线**：#8068–#8071 密集覆盖斜杠命令菜单、命令结果卡片的展示与交互，暗示下一版本很可能以 WebUI 可用性改进为主题之一。
- **可访问性（a11y）受到重视**：#8069 强调 accessible dismissal action，#8068 覆盖键盘导航，#8071 关涉 Chromium 端到端测试，可预期后续在无障碍与自动化测试覆盖上继续投入。

## 7. 用户反馈摘要

今日 Issue 评论数为 0，缺乏可直接提炼的用户反馈。间接信号：

- 核心团队通过自动化失败分类（#8081）持续监控 agent 在办公任务基准（officeqa）上的表现，说明数值/推理类任务的可靠性是团队关注的质量痛点。
- WebUI PR 系列针对的“命令结果卡片被压缩/无法关闭/菜单对不齐”等细节，反映了实际使用中 transcript 显示体验的不满，改进方向明确。

## 8. 待处理积压

- 待合并 PR 队列：[#8068](https://github.com/nearai/ironclaw/pull/8068)、[#8069](https://github.com/nearai/ironclaw/pull/8069)、[#8070](https://github.com/nearai/ironclaw/pull/8070)、[#8071](https://github.com/nearai/ironclaw/pull/8071) 均**自 09-04 创建至今（4 天）未合并**，虽 09-07 有更新但无评论记录，建议维护者尽快 review，避免同一作者的系列改动长期积压产生冲突风险。
- [#8081](https://github.com/nearai/ironclaw/issues/8081) 为例行报告，无需回复，但建议纳入失败趋势跟踪看板。

---

**健康度小结**：核心贡献者持续低风险、带测试的小步迭代，代码质量流程规范；短板在于社区互动偏冷（今日 0 评论）与 PR 审查吞吐待提升。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-09-08）

## 1. 今日速览

今日项目无新 Issue 和版本发布，但 PR 活动较为集中：过去 24 小时共 8 条 PR 更新，其中 6 条已合并/关闭、2 条待处理。主要贡献来自 @liugang519 和 @btc69m979y-dotcom，涉及本地任务库功能增强、网关子进程修复、内置浏览器改进及 Windows 测试可移植性修复。整体来看，项目处于活跃的迭代打磨期，重心在 OpenClaw v2026.8.1 升级分支的稳定性验收与细节体验优化。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日共关闭 6 个 PR，稳步推进了以下工作：

- **任务库功能增强（核心进展）**：[#2623](https://github.com/netease-youdao/LobsterAI/pull/2623) 实现任务优先排序与网格分组折叠，包括按最近更新时间组织本地产物、任务组与组内文件独立分页、会话变更通知完善、协议版本与游标校验加强，并修复 macOS 开发模式下网关显示额外 Dock 图标的问题。这是今日体量最大的功能性 PR，附带回归测试与设计文档。
- **网关子进程修复**：[#2622](https://github.com/netease-youdao/LobsterAI/pull/2622) 统一使用 spawn 以 Node 模式启动网关，确保工作进程继承运行环境，且补丁应用失败时会终止 postinstall 流程。
- **内置浏览器修复**：[#2621](https://github.com/netease-youdao/LobsterAI/pull/2621) 修复 OpenClaw `scrollIntoView` 元素引用被当作字符串导致的 TypeError，并保留工具错误详情；[#2617](https://github.com/netease-youdao/LobsterAI/pull/2617) 改进应用内登录与标签页控件（可关闭的保存登录提示、可滚动标签条、新建空白标签等）。
- **安装器与测试质量**：[#2620](https://github.com/netease-youdao/LobsterAI/pull/2620) 为 NSIS 安装器 CJK 语言文件替换为 Windows 10+ 系统 UI 字体，修复高 DPI 下的锯齿文字；[#2619](https://github.com/netease-youdao/LobsterAI/pull/2619) 修复 main 合入 OpenClaw v2026.8.1 升级分支后发现的 4 个 Windows 测试失败。

综合来看，今日推进集中在 **OpenClaw 升级分支的验收收尾**与**任务库 UX 打磨**，未涉及破坏性变更。

## 4. 社区热点

今日无新 Issue，PR 评论数据缺失，无明显社区讨论热点。从 PR 作者分布看，贡献以核心维护者为主（@liugang519、@btc69m979y-dotcom、@fisherdaddy），外部社区参与度在今日数据中不显著。

## 5. Bug 与稳定性

今日无用户报告的新 Bug，但以下已合并的修复 PR 反映了近期发现并解决的问题（均已有 fix）：

1. **[已修复] OpenClaw `scrollIntoView` TypeError** — 元素快照引用被按字符串处理，错误仅显示为 `Uncaught` 并在浏览器上方遗留错误横幅。fix: [#2621](https://github.com/netease-youdao/LobsterAI/pull/2621)
2. **[已修复] 网关子进程 Node 模式继承问题** — 工作进程未正确继承运行环境，补丁失败未中断安装。fix: [#2622](https://github.com/netease-youdao/LobsterAI/pull/2622)
3. **[已修复] Windows DPI 下安装器 CJK 字体锯齿** — NSIS 内置 SimSun/PMingLiU 等 9pt 位图字体在高 DPI 下显示粗糙。fix: [#2620](https://github.com/netease-youdao/LobsterAI/pull/2620)
4. **[已修复] 升级分支 4 个测试失败** — macOS 安装器路径 POSIX 语义与缩略图队列优先级用例。fix: [#2619](https://github.com/netease-youdao/LobsterAI/pull/2619)

无未修复的高严重性问题。

## 6. 功能请求与路线图信号

今日无新功能请求 Issue。从已有 PR 可推断的路线图信号：

- **任务库体验持续深化**：[#2623](https://github.com/netease-youdao/LobsterAI/pull/2623) 的分组分页、滚动位置恢复、无障碍支持表明本地产物管理是当前产品重点方向，后续版本可能继续在此领域迭代。
- **内置浏览器/自动化能力强化**：[#2617](https://github.com/netease-youdao/LobsterAI/pull/2617)、[#2621](https://github.com/netease-youdao/LobsterAI/pull/2621) 密集改进应用内浏览器，配合 OpenClaw 元素定位，暗示 Agent 浏览器操作是重点能力。
- **OpenClaw v2026.8.1 升级分支**：[#2619](https://github.com/netease-youdao/LobsterAI/pull/2619) 明确提及升级分支验收，下一个版本发布大概率与此相关。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼新的用户反馈。间接信号：[#1067](https://github.com/netease-youdao/LobsterAI/pull/1067) 描述的「`[OpenClaw]` 心跳会话被删除后反复出现」反映出用户对任务列表噪音的敏感，与今日 [#2623](https://github.com/netease-youdao/LobsterAI/pull/2623) 的任务库整理优化方向一致。

## 8. 待处理积压

以下 PR 长期处于打开状态，建议维护者关注：

1. **[#1067](https://github.com/netease-youdao/LobsterAI/pull/1067)**（已标记 stale，2026-03-30 开启，更新于 09-07）— 阻止 OpenClaw 心跳自动创建 `[OpenClaw]` Cowork 会话。该问题影响用户任务列表整洁度，建议确认是否已被其他方式修复，否则考虑合入。
2. **[#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)**（2026-04-02 开启，更新于 09-07）— dependabot 提出的 Electron 40.2.1 → 44.2.0 跨 4 个大版本的升级。鉴于团队正在推进 OpenClaw v2026.8.1 升级分支（见 #2619），建议评估是否可借此窗口一并完成 Electron 大版本升级，避免技术债累积。

---

**健康度小结**：今日数据呈现「维护者驱动的稳定迭代」特征——合并节奏良好（6/8 关闭率 75%）、无新 Bug 报告、无积压新增，但外部社区互动偏弱（0 Issue、0 点赞）。建议关注 Electron 依赖积压与社区参与度的长期趋势。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-09-08

## 1. 今日速览

Moltis 今日整体处于**低活跃度、聚焦修复**状态。过去 24 小时无新开/活跃/关闭的 Issue，无新版本发布，仅有一条待合并的 PR 更新。唯一的动态是 @atirna 提交的定时任务相关修复 PR #1262，针对 `active_hours` 配置中 `end="24:00"` 的解析缺陷。项目当前无新的 Bug 报告或功能请求，社区热度平稳，属于典型的维护期节奏。

## 2. 版本发布

今日无新版本发布，最新 Release 无更新。省略。

## 3. 项目进展

今日无已合并或关闭的 PR，项目主线代码无向前推进。

唯一的活跃工作为待合并 PR：

- **PR #1262** `fix(cron): treat active_hours end="24:00" as end-of-day`（[链接](https://github.com/moltis-org/moltis/pull/1262)）
  - 作者：@atirna | 创建/更新：2026-09-07
  - 内容：`is_within_active_hours` 函数在处理 `end` 参数时，未对 `"24:00"` 这一特殊值做前置判断。由于 chrono 的 `%H` 格式化不接受 24 点，导致使用文档默认配置（`start = "08:00"`, `end = "24:00"`）时解析失败，触发 invalid-config 的 fail-open 逻辑，结果函数在**任意时段都返回 active**，使得按 `24 * 6...`（推测为分钟级调度）的活跃窗口控制完全失效。
  - 意义：该修复将恢复 cron 调度的活跃时段约束，纠正一个静默失效的配置行为。属正确性修复，建议尽快评审合并。

## 4. 社区热点

今日无活跃讨论的 Issues 或 PRs（0 条 Issue 更新，PR #1262 评论数为 undefined/0）。无社区热点可分析。

## 5. Bug 与稳定性

今日无新报告的 Bug。但 PR #1262 修复的缺陷本身可视作一个**已确认、待修复的稳定性问题**：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 中 | `active_hours end="24:00"` 解析失败 → fail-open → 调度窗口约束完全失效（默认配置即触发） | ✅ 已有 fix PR #1262，待合并 |

值得注意的风险点：该 Bug 走的是 fail-open 路径（出错时放行），意味着受影响用户可能感知不到异常，属静默失效类问题。建议合并后评估是否需要补充配置校验告警，避免未来类似 invalid-config 再次静默 fail-open。

## 6. 功能请求与路线图信号

今日无新功能请求。从 PR #1262 可见的信号：维护团队仍在打磨 cron/调度模块的边缘 case（时间边界处理），提示调度配置解析的健壮性是当前关注点，下一版本可能包含此修复。

## 7. 用户反馈摘要

今日无 Issue 评论可提炼。间接信号：PR #1262 表明至少有贡献者在使用文档默认配置时遭遇了活跃窗口失效问题，反映**默认配置与实际行为不一致**是一个真实痛点，文档与实现的对齐值得持续关注。

## 8. 待处理积压

- **PR #1262**（[链接](https://github.com/moltis-org/moltis/pull/1262)）：修复默认配置下调度窗口完全失效的问题，尚无评审/合并记录，建议维护者优先处理，并确认修复中 `24:00` → end-of-day 的转换逻辑覆盖跨午夜窗口等边界 case。

---
*数据来源：Moltis GitHub 仓库，统计窗口为过去 24 小时。今日样本量较小，活跃度结论仅供参考。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-09-08

## 1. 今日速览

CoPaw（QwenPaw）今日保持高活跃度：过去 24 小时 Issues 更新 36 条（新开/活跃 22、关闭 14），PR 更新 39 条（待合并 25、已合并/关闭 14），无新版本发布。v2.2.0 发布后社区反馈集中涌入，Bug 报告集中在**上下文/记忆持久化、流式超时硬编码、工作目录切换功能回退**等方向。社区贡献活跃，出现多个 first-time-contributor PR（BiDi 修复、OpenViking 记忆后端、computer-use helper 重启等），生态扩展势头良好。

## 2. 版本发布

今日无新版本发布。上一版本 v2.2.0 的后续 Beta（v2.2.0-beta.4）已在 8 月 31 日发布，CI 层面今日合并了发布期间冻结主干的流程改进（见下文 #7603）。

## 3. 项目进展

今日合并/关闭的 PR（14 条），代表性进展：

- **CI 发布流程加固**：[#7603](https://github.com/agentscope-ai/QwenPaw/pull/7603) 发布期间冻结默认分支合并，防止 v2.2.0-beta.4 期间 PR #7267 中途合入的问题重演。
- **前端测试覆盖冲刺**：[#7530](https://github.com/agentscope-ai/QwenPaw/pull/7530) 新增 245 个 Console 单测、语句覆盖 +5.02pp（第四批覆盖冲刺）。
- **工具参数类型修复**：[#6936](https://github.com/agentscope-ai/QwenPaw/pull/6936) 强制矫正模型输出中被 JSON 数字化的 string 参数，关闭长期困扰用户的 #6839。
- **图标统一**：[#7499](https://github.com/agentscope-ai/QwenPaw/pull/7499) 统一导航图标为 Spark 细线系列。

仍在审查中的重要 PR（25 条待合并）：
- [#7486](https://github.com/agentscope-ai/QwenPaw/pull/7486) Creator 插件 1.2.0 大版本（blueprint workbench、通知总线、A/B 对比等）
- [#7502](https://github.com/agentscope-ai/QwenPaw/pull/7502) Console 侧栏与设置整体重设计
- [#7526](https://github.com/agentscope-ai/QwenPaw/pull/7526) 受保护执行/授权契约
- [#7521](https://github.com/agentscope-ai/QwenPaw/pull/7521) 上下文压力下折叠已消费 thinking

整体看，项目在 v2.2.0 后进入质量收敛与架构治理阶段（测试覆盖、CI 纪律、插件化迁移）。

## 4. 社区热点

- **[#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579)**（6 评论，OPEN）：助手回复已持久化但后续请求上下文缺失，模型"看不到自己刚说的话"导致空响应。直接动摇多轮对话可靠性，是当前最受关注的 Bug。
- **[#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469)**（5 评论，CLOSED）：ReMe 长期记忆 embedding 后台任务静默失败（`as_embedding:default accessed before start()`），新记忆无法入库——用户对"静默失败、只在日志留痕"这一模式的不满贯穿多个 Issue。
- **[#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576)**（5 评论，OPEN）：`RetryChatModel` 硬编码 32768 context_size 回退，导致所有模型触发 CONTEXT_UNFIT，作者确认 v2.1.0–v2.2.0 全部已发布版本受影响。
- **[#7589](https://github.com/agentscope-ai/QwenPaw/issues/7589)**（4 评论，OPEN）：Heartbeat cron 会话反馈循环导致消息重复堆积，agent 失去响应约 2 小时，用户已验证 main 分支仍存在。**严重度高**。
- **[#7588](https://github.com/agentscope-ai/QwenPaw/issues/7588) / [#7601](https://github.com/agentscope-ai/QwenPaw/issues/7601)**（均已关闭）：v2.2.0 移除了 v2.1.0 中可直接输入路径切换主工作目录的功能，社区集中反弹，是典型的"功能回退"舆情。

诉求总结：用户最在意**可观测性（不要静默失败）、可配置性（不要硬编码）、不要回退已有好用的功能**。

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| 高 | [#7589](https://github.com/agentscope-ai/QwenPaw/issues/7589) | Heartbeat cron 反馈循环，agent 无响应 2 小时 | 暂无明确 fix PR |
| 高 | [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579) | 上下文丢失导致空响应 | 无 |
| 高 | [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) | 硬编码 32768 context，全版本受影响 | 无 |
| 高 | [#7617](https://github.com/agentscope-ai/QwenPaw/issues/7617) | 会话历史含 PDF DataBlock 后，纯文本 OpenAI 兼容端点（智谱 GLM 400/1210）**永久性损坏** | 无 |
| 中 | [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | 点停止后 UI 显示停止但任务仍执行（409 冲突） | 相关 PR [#7610](https://github.com/agentscope-ai/QwenPaw/pull/7610) 在审 |
| 中 | [#7597](https://github.com/agentscope-ai/QwenPaw/issues/7597) | 工具返回图片/PDF 二进制以裸 base64 发送触发 400 | 无 |
| 中 | [#7619](https://github.com/agentscope-ai/QwenPaw/issues/7619) | Win11 + qwen-35B-A3B-FP8 对话无故结束（新开） | 无 |
| 中 | [#7572](https://github.com/agentscope-ai/QwenPaw/issues/7572) | 工具派发层吞异常栈 | 已有 fix PR [#7578](https://github.com/agentscope-ai/QwenPaw/pull/7578)（Under Review） |
| 低 | [#7242](https://github.com/agentscope-ai/QwenPaw/issues/7242) | 74 agents 场景 Dashboard 加载 6 分钟+ | 无 |

今日已关闭的稳定性修复：#6541（压缩块 role=user）、#7469、#7156（embedding health check）、#6885（中文输入法崩溃）、#7604（流式空闲超时硬编码，已关闭）。

## 6. 功能请求与路线图信号

- **记忆后端插件化**：[#7616](https://github.com/agentscope-ai/QwenPaw/pull/7616)（ADBPG/PowerContext 迁出核心）+ [#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613)（OpenViking 后端）+ [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399)（reranker UI）——记忆子系统正快速插件化、多元化，大概率进入下一版本。
- **恢复工作目录手动输入**：#7588 / #7601 呼声强烈，属回退修复，预计随 Console 重设计（[#7502](https://github.com/agentscope-ai/CoPaw/pull/7502)）回归。
- **命令容错**：[#7479](https://github.com/agentscope-ai/QwenPaw/issues/7479) 拼写错误命令（如 `/mew`）应提示而非转发给 agent——消息通道体验打磨信号。
- **Skills 版本化与依赖校验**：[#7609](https://github.com/agentscope-ai/QwenPaw/pull/7609)，配合插件更新检测 [#7605](https://github.com/agentscope-ai/QwenPaw/pull/7605)，显示市场生态治理是明确路线。

## 7. 用户反馈摘要

- **痛点**：
  - v2.2.0 相比 2.1.0 出现**功能回退**（工作目录切换、路径输入），用户明确表示"原本的设计很好，为什么要砍掉"。
  - **硬编码泛滥**（context_size、stream timeout、health check timeout）让 Docker/桌面/企业部署用户无法调优。
  - **静默失败**模式（embedding 任务、工具派发）让排障极其困难。
  - 深目录操作体验差（图形选择器"视野小，深度超过 3 的目录是灾难"）。
- **满意点**：issue 模板执行质量高，多名用户主动做版本比对与 main 分支验证；AI 代笔 issue（#7597、#7006）被社区接受并有效处理；first-time contributor 持续流入，社区氛围健康。

## 8. 待处理积压

- [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576)：影响所有已发布版本、确认代码位置明确，建议优先响应。
- [#7242](https://github.com/agentscope-ai/QwenPaw/issues/7242)：8 月 24 日开出的 Dashboard 性能问题，大规模 agent 场景无进展。
- [#2120](https://github.com/agentscope-ai/QwenPaw/issues/2120)：3 月起 BiDi 阿拉伯语渲染问题长期未修——好消息是今日已有 first-time-contributor PR [#7611](https://github.com/agentscope-ai/QwenPaw/pull/7611) 提交，建议维护者优先评审。
- [#7479](https://github.com/agentscope-ai/QwenPaw/issues/7479)：命令容错需求，9 月 1 日至今无 fix PR。
- 大 PR #7486（Creator 1.2.0）、#7502（Console 重设计）体量大、审查周期长，建议拆分推进以降低合并风险。

---
*数据来源：GitHub Issues/PRs 活动统计（2026-09-07 至 2026-09-08）。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报

**日期：** 2026-09-08
**仓库：** [gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

## 1. 今日速览

今日 EasyClaw 呈现 **“发布驱动型”活跃模式**：无新开 Issues（0 条），但完成 2 条 PR 的关闭/合并，并发布新版本 **v1.9.6**。活跃度集中在维护者 [@gaoyangz77](https://github.com/gaoyangz77) 的工程侧推进，包括底层存储架构升级（SQLite sessions）与 CI 构建缓存修复。社区侧（Issue 讨论、功能请求）今日完全静默，用户互动与开发者产出比例失衡，值得持续观察。

---

## 2. 版本发布

### v1.9.6: TK Copilot v1.9.6 ✅

- **联盟带货提案审核优化**：审核提案时同时展示 SKU 库存信息，减少来回切换
- **客服收件箱可读性修复**：状态徽标过多挤占买家名称时保持行内容可读
- **支付记录表实时刷新**：支付到账作为 live update 时自动刷新表格
- **Agent Office 折叠行为调整**：优化 shutter 折叠逻辑（Release notes 截断，细节待查）

**破坏性变更 / 迁移注意：** Release notes 未标注破坏性变更。但结合 [PR #35](https://github.com/gaoyangz77/rivonclaw/pull/35)，底层会话存储已从 `sessions.json` 迁移至 per-agent SQLite/WAL，老版本 Desktop 用户升级后首次启动会自动执行官方 startup state 迁移，建议升级前备份 sessions 数据以防万一。

---

## 3. 项目进展

今日 2 条 PR 关闭，均指向底层工程健壮性：

| PR | 内容 | 意义 |
|---|---|---|
| [#35 feat(vendor): upgrade OpenClaw with SQLite sessions](https://github.com/gaoyangz77/rivonclaw/pull/35) | 固定 OpenClaw 至指定 commit；sessions/transcripts 从 `sessions.json` 迁移至 per-agent SQLite/WAL 存储；自动执行 startup state 迁移；适配 Desktop/Panel/配置生成 | 存储架构升级，提升会话数据可靠性，是本次最重要的结构性变更 |
| [#37 fix(ci): cache complete vendor workspace builds](https://github.com/gaoyangz77/rivonclaw/pull/37) | 缓存 `@openclaw/ai` workspace 构建产物；拒绝不完整 vendor 构建缓存并自动重建；使旧工作流产生的畸形 dist/prod 缓存失效；显式校验打包后 AI runtime 入口 | 修复 CI 缓存完整性问题，加快构建并防止坏缓存流出 |

**整体评估：** 项目在存储层（SQLite）和 CI 流水线两个方向各推进一步，v1.9.6 的用户可见改进相对轻量，属于“内部加固 + 体验微调”型版本。

---

## 4. 社区热点

今日无任何 Issue/PR 新增评论、点赞或讨论，**无社区热点可报告**。这已是观察窗口内的静默状态，建议关注是否为项目处于发布收尾期的正常现象。

---

## 5. Bug 与稳定性

- 今日 **无新增 Bug 报告**（0 条 Issue）。
- v1.9.6 中包含的客服收件箱徽标遮挡买家名称问题属于 UI 层修复，**已随版本发布修复**。

---

## 6. 功能请求与路线图信号

- 今日无新功能请求。
- 从 v1.9.6 更新内容可推断路线图方向：**联盟带货（affiliate）工作流深化**（提案审核 + SKU 库存联动）、**客服场景体验打磨**、**实时数据驱动的 UI 刷新**。SQLite sessions 迁移为后续多 Agent 会话管理能力打下基础，可能预示下一版本在 Agent 持久化/恢复方面有动作。

---

## 7. 用户反馈摘要

今日无 Issue 评论数据，**无法提炼用户反馈**。建议关注 v1.9.6 发布后 2–3 天内的用户升级反馈，尤其是 SQLite 迁移在老数据上的表现。

---

## 8. 待处理积压

- 当前数据窗口内无待合并 PR（待合并: 0）和开放 Issue。
- 提醒：[PR #35](https://github.com/gaoyangz77/rivonclaw/pull/35) 与 [PR #37](https://github.com/gaoyangz77/rivonclaw/pull/37) 均为 **创建于 2026-08-08、历时一个月才关闭** 的长周期 PR，反映 vendor 升级类变更评审/迭代周期较长。后续类似 vendor bump 建议拆小或加强 CI 门禁以缩短周期。

---

**健康度小结：** 工程产出稳定、发布节奏正常（✅），但社区互动为零（⚠️），建议维护者通过更新公告、Roadmap 讨论帖等方式激活用户反馈渠道。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*