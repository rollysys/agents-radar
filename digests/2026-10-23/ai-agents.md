# OpenClaw 生态日报 2026-10-23

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-23 03:52 UTC

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

# OpenClaw 项目动态日报 — 2026-10-23

## 1. 今日速览

OpenClaw 今日保持高活跃度：过去 24 小时内 Issues 更新 500 条（新开/活跃 290，关闭 210），PR 更新 500 条（待合并 269，已合并/关闭 231），吞吐与响应均处于健康水平。今日发布安全版本 **v2026.10.6**，核心变更是强制要求打过 2026 年 10 月 Node.js 安全补丁的运行时。PR 流水线上 @steipete 密集提交了十余个 UI 性能优化与架构收敛重构，显示网关与 Web UI 的性能治理进入活跃期。整体看，项目处于“高吞吐修复 + 性能专项治理”阶段，但 Windows 平台与 Gateway 事件循环阻塞类 P0 问题积压仍需关注。

## 2. 版本发布

### v2026.10.6（[Release](https://github.com/openclaw/openclaw/releases)）

- **安全强制要求（破坏性变更）**：OpenClaw 现要求 **Node 24.22.1+（24 线）或 26.12.1+（26 线）**，以拒绝使用 2026 年 10 月 Node.js 安全公告中被泄露证书密钥签名的 TLS 证书链。Docker 镜像已随附 Node 24.2x。
- **迁移注意**：自行管理运行时（npm 全局安装、systemd/schtasks 服务）的用户**必须先升级 Node**，否则新版可能拒绝启动；Windows 计划任务服务用户尤其注意与 [#166004](https://github.com/openclaw/openclaw/issues/166004) 类似的启动/回滚问题叠加风险。

## 3. 项目进展

今日未展示明确的大型合并记录，但待合并管线内容丰富，方向清晰：

- **网关启动性能**：[#181289](https://github.com/openclaw/openclaw/pull/181289)（XL）修复大会话存储导致 Gateway 插件启动延迟——孤儿会话标记不再阻塞插件加载，直接回应 #181090 类启动慢投诉。
- **UI 性能专项**（@steipete 集中提交）：
  - [#181190](https://github.com/openclaw/openclaw/pull/181190)：虚拟化大型模型选择器目录（1000+ 模型场景）
  - [#181278](https://github.com/openclaw/openclaw/pull/181278)：大会话切换响应性优化
  - [#181255](https://github.com/openclaw/openclaw/pull/181255)：Chat/New Session 路由 CSS 合并（gzip 减 4,189 B）
  - [#181133](https://github.com/openclaw/openclaw/pull/181133)：吉祥物动效延迟加载
- **架构收敛**：[#181264](https://github.com/openclaw/openclaw/pull/181264)（L，多渠道多扩展）整合共享运行时契约 owner；[#181276](https://github.com/openclaw/openclaw/pull/181276)（XL）清理 130 行无用运行时参数与元数据。
- **Agent 稳定性**：[#181279](https://github.com/openclaw/openclaw/pull/181279)（L）稳定跨回合的 message 工具定义，修复子代理集群父会话在 Gateway 重启后丢失 prompt cache 的问题——对多代理编排成本与稳定性均有实质收益。
- **安全相关**：[#168261](https://github.com/openclaw/openclaw/pull/168261)（等待维护者，security-review-required）修复 secrets provider 路径空白被裁剪导致凭据文件指向错误路径的问题；[#167379](https://github.com/openclaw/openclaw/pull/167379) 在 apply 前拒绝畸形 UTF-8 secrets 计划。
- **其他值得注意**：[#180571](https://github.com/openclaw/openclaw/pull/180571)（P1，ready for maintainer look）修复 iOS/macOS 实时 Talk 失败时取消进行中 agent 回答的问题；[#170996](https://github.com/openclaw/openclaw/pull/170996) 修复 setup 向导被遗弃后全设备永久 busy。

## 4. 社区热点

1. **[#160959](https://github.com/openclaw/openclaw/issues/160959)（42 评论，P0）**：2026.9.6 回归——捕获大型外部插件时 Gateway 事件循环阻塞数分钟，启动及模型运行时重发布时均触发。已源码复现（source-repro）、标记 crash-loop，**尚无修复 PR**，是当前最高热度未解问题，与多个网关卡死类 issue 可能同根因。
2. **[#42475](https://github.com/openclaw/openclaw/issues/42475)（27 评论）**：网关级 per-agent 成本预算（日/月上限）请求。运营者希望在派发模型调用前拦截失控消费，反映多代理场景下成本控制是强需求，尚待产品决策。
3. **[#11829](https://github.com/openclaw/openclaw/issues/11829)（21 评论，已关闭）**：API Key 保护安全路线图（模型目录携带已解析 apiKey 序列化进 prompt），关闭可能意味着分阶段落地或转入内部跟踪。
4. **[#53763](https://github.com/openclaw/openclaw/issues/53763)（18 评论，已关闭）**：内置无头浏览器请求。社区对“不依赖用户 Chrome/第三方 API 的可靠网页访问”呼声高。
5. **[#68596](https://github.com/openclaw/openclaw/issues/68596)（18 评论，已关闭）**：长思考模型（kimi-k2.5、DeepSeek-R1）触发流式 watchdog 误报，请求可配置超时阈值——中国模型用户群体的典型痛点。

## 5. Bug 与稳定性（按严重程度）

**P0（发布阻塞级）**

| Issue | 摘要 | Fix PR |
|---|---|---|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 大插件捕获阻塞事件循环数分钟（9.6 回归） | ❌ 无 |
| [#158592](https://github.com/openclaw/openclaw/issues/158592) | 睡眠唤醒后 agent 运行时发布超时，所有消息失败直至重启 | ❌ 无 |
| [#166634](https://github.com/openclaw/openclaw/issues/166634) | 崩溃恢复后 SQLite 会话回收 checkpoint 失败，agent 永久 UNAVAILABLE | ❌ 无（not-repro-on-main） |
| [#166004](https://github.com/openclaw/openclaw/issues/166004) | Windows 计划任务 Gateway 服务无法启动，9.8 更新回滚 | ❌ 无 |
| [#156712](https://github.com/openclaw/openclaw/issues/156712) | triage 修复子进程不退出、持有 lifecycle 锁、阻塞应用重启 | ❌ 无 |
| [#156674](https://github.com/openclaw/openclaw/issues/156674) | macOS 长驻 Codex worker 导致持续 CPU/内存压力 | ❌ 无 |
| [#172837](https://github.com/openclaw/openclaw/issues/172837) | Codex 原生子代理 assignment 投递失败后永不清除，每个新父线程重复重发（消息丢失） | ❌ 无 |

**P1**

- [#140010](https://github.com/openclaw/openclaw/issues/140010)：Windows 睡眠唤醒后 UI/WebSocket 重连失败 30-60s+。
- [#167557](https://github.com/openclaw/openclaw/issues/167557)：Linux/npm 延迟插件迁移永不收敛（"managed handoff lease database identity changed"）。
- [#155359](https://github.com/openclaw/openclaw/issues/155359)：双显示器验证的 SQLite 写事务持锁 5.9–33.2s，超过 busy_timeout；且冻结检测器误报。
- [#160485](https://github.com/openclaw/openclaw/issues/160485)：插件加载 CPU 密集，3 个渠道插件占 60s 启动中的 57.4s（SDK 图重复编译）。
- [#138042](https://github.com/openclaw/openclaw/issues/138042)：Gateway 控制请求可停滞数分钟（157–276s）。

**安全相关**

- [#166137](https://github.com/openclaw/openclaw/issues/166137)：egress 代理凭据替换间歇性失效，调用带过期凭据直连上游 API（401），可跨主机、数小时后自愈——需关注。
- [#154716](https://github.com/openclaw/openclaw/issues/154716)：原生 Claude CLI 登录在无 OpenClaw 托管 profile 时陷入 auth-unknown，阻塞历史重放。
- [#159787](https://github.com/openclaw/openclaw/issues/159787)：A2A 审批缺 operator.approvals 权限时误报网关不可用。

**观察**：P0 集中在“Gateway 生命周期/事件循环/Windows 服务”三大主题，与 #181289、#181279 等 PR 方向吻合，预计下个版本将集中消化，但多数 P0 目前**无对应 fix PR**，存在积压风险。

## 6. 功能请求与路线图信号

可能近期落地（已有 PR 或产品讨论推进）：

- **同渠道线程回溯**：[#163267](https://github.com/openclaw/openclaw/pull/163267)（XL，opt-in `tools.sessions.visibility: "channel"`）— 对应隐私与多代理协作诉求。
- **子代理工具限制**：[#181292](https://github.com/openclaw/openclaw/pull/181292) 实现 narrow-only 原生子代理 profile，呼应已关闭的 [#15032](https://github.com/openclaw/openclaw/issues/15032)（per-spawn 工具限制，DMZ 式提示注入防御）——只读审查型子代理即将可用。
- **Slack 线程行为**：[#177555](https://github.com/openclaw/openclaw/pull/177555)（opt-in 显式 mention 防机器人回路）、[#139171](https://github.com/openclaw/openclaw/pull/139171)（首条回复前接受线程补充说明）均在管线中。

仍在产品决策阶段（无 PR）：per-agent 成本预算 [#42475](https://github.com/openclaw/openclaw/issues/42475)、内置无头浏览器 [#53763](https://github.com/openclaw/openclaw/issues/53763)、响应前硬性策略门 [#13583](https://github.com/openclaw/openclaw/issues/13583)、exec 审批 TOTP [#67440](https://github.com/openclaw/openclaw/issues/67440)、Linux aarch64 companion 构建 [#138279](https://github.com/openclaw/openclaw/issues/138279)。

## 7. 用户反馈摘要

- **Windows 用户是痛点最集中的群体**：睡眠唤醒卡顿（#140010）、自动更新三重失败模式（#157812）、服务无法启动+更新回滚（#166004）、SQLite 持锁（#155359）持续被报告且多为 manual-only 复现，反馈 frustration 明显。
- **运营者关心成本与失控防护**：多代理并行场景下成本上限（#42475）与沙箱逃逸/提示注入防御（#15032、#13583）反复被提及，量化金融/安全运维用户明确要求“机械强制而非 prompt 软约束”。
- **长思考模型用户受 watchdog 误报困扰**（#68596，8 👍），中文社区贡献了相当比例的渠道类反馈（飞书话题群路由 #52238、移动端键盘遮挡 #137508）。
- **满意度信号**：安全响应迅速（Node 补丁强制化）、issue 分类体系（clawsweeper 标签、severity 评级）透明，用户愿意提交带完整证据包的深度报告（如 #155359 的双显示器验证），社区工程素养高、信任度良好。

## 8. 待处理积压

维护者需优先关注：

1. **[#160959](https://github.com/openclaw/openclaw/issues/160959)**（P0，42 评论，needs-maintainer-review，无 fix PR）— 最高热度 + crash-loop + 9.6 回归，影响所有使用大型插件的部署。
2. **[#156712](https://github.com/openclaw/openclaw/issues/156712)** / **[#156674](https://github.com/openclaw/openclaw/issues/156674)** / **[#158592](https://github.com/openclaw/openclaw/issues/158592)**（均 P0、stale、无 fix PR）— 生命周期锁与资源压力类问题长期悬置。
3. **[#141615](https://github.com/openclaw/openclaw/issues/141615)**（P0，webchat 认证验证卡死直至重启，linked-pr-open 但 stale）— PR 应被重新评估。
4. **[#140455](https://github.com/openclaw/openclaw/issues/140455)**（P1，google-meet 语音在当前 Meet 上崩溃，needs-live-repro）— 插件与上游 DOM 变化的兼容性维护问题，9 月至今未决。
5. **[#168261](https://github.com/openclaw/openclaw/pull/168261)**（security-review-required，等待维护者 13 天）— secrets 路径静默改写属安全敏感，建议优先评审。
6. **规模性观察**：约 500 条活跃 issue 中大量带 `clawsweeper:no-new-fix-pr` 标签，其中 P0/P1 且 `impact:crash-loop` / `impact:message-loss` 的组合建议建立专项看板跟踪。

---

*数据来源：openclaw/openclaw 过去 24 小时 GitHub 活动；本报告基于展示样本（50 Issues / 30 PRs），全局统计以仓库为准。*

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析 — 2026-10-23

## 1. 生态全景

个人 AI 助手/智能体赛道已形成明显的梯队分化：以 OpenClaw 为代表的头部项目进入“高吞吐修复 + 安全治理”的成熟期，而 NanoBot、Zeroclaw、CoPaw 等追赶者保持快速功能迭代。今日生态最显著的事件是 **emSign/eMudhra CA 信任链废弃引发的跨项目安全补丁潮**（OpenClaw、Zeroclaw、NanoClaw、CoPaw、IronClaw、Moltis 至少 6 个项目同时响应），说明该生态已高度共享 Node.js/Bun/证书基础设施，安全事件呈系统性传导。同时，“成本可控”“审批安全”“渠道可靠性”成为多项目共同的用户痛点主题。国产模型（DeepSeek、MiniMax、kimi）与国内渠道（QQ、飞书、钉钉）适配是中国背景项目的持续投入方向。

## 2. 各项目活跃度对比

| 项目 | Issue 更新（新开/活跃） | Issue 关闭 | PR 更新 | PR 合并/关闭 | Release | 健康度 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 290 | 210 | 500 | 231 | v2026.10.6（安全） | 良好；P0 积压风险 |
| **NanoBot** | 1 | 8 | 59 | 42 | 无 | 优秀；债务清理高效 |
| **Zeroclaw** | 30 | 12 | 50 | 8 | 无（v0.8.7 收尾 + v0.9.0 推进） | 良好；42 PR 待审 |
| **Hermes Agent** | 48 | 2 | 50 | 2 | 无 | ⚠️ 流入/消化比严重失衡（≈4%） |
| **PicoClaw** | 0 | 0 | 10 | 1 | 无 | ⚠️ 9 PR 全部 stale |
| **NanoClaw** | 0 | 3 | 50 | 18 | v2026.10.1-rc.2 | 良好；发布前打磨 |
| **NullClaw** | 1 | 0 | 1 | 0 | 无 | 平稳维护；arm32 CI 红 18 天 |
| **IronClaw** | 1 | 1 | 6 | 1 | 无 | 稳定（评测框架，低强度维护） |
| **LobsterAI** | 0 | 0 | 6 | 5 | 无 | 中等；Issue/外部 PR 响应慢 |
| **CoPaw (QwenPaw)** | 20 | 1 | 50 | 2 | v2.2.2.post1（安全） | 高速迭代；升级回归风险 |
| **Moltis** | 0 | 0 | 5 | 2 | 无 | 稳定；社区面窄 |
| TinyClaw / ZeptoClaw / EasyClaw | — | — | — | — | — | 无活动 |

## 3. OpenClaw 在生态中的定位

**规模优势**：500 Issue / 500 PR 日吞吐为全生态最高，约为第二梯队项目的 10 倍；拥有最完善的分诊体系（severity 评级、clawsweeper 标签、impact 分类），用户报告附带完整证据包（如 #155359 双显示器验证），社区工程素养全生态最佳。

**技术路线差异**：
- **网关中心架构**：与 NanoClaw 的凭证网关、Zeroclaw 的 gateway identity-access 主线相比，OpenClaw 的 Gateway 承担插件加载、会话管理、多渠道路由——但这也是其 P0 集中区（事件循环阻塞、生命周期锁、Windows 服务），暴露了单体网关的复杂度代价。
- **安全响应最快**：Node 补丁强制化（v2026.10.6 破坏性变更）是今日全生态最果断的证书链应对，优于 CoPaw 的 post1 补丁节奏。
- **多代理编排最深**：子代理集群、prompt cache 保持（#181279）、narrow-only 子代理 profile（#181292）走在生态前列；相比之下 Hermes/NanoBot 的子代理控制平面尚在 MVP。

**短板**：7 个 P0 无 fix PR、#168261 安全评审等待 13 天、Windows 平台问题长期悬置——头部规模带来的治理带宽压力已显现，与 NanoBot 单日清债 42 PR 的小团队敏捷性形成对照。

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **CA 证书链安全** | OpenClaw、Zeroclaw、NanoClaw、CoPaw、IronClaw、Moltis | emSign/eMudhra 废弃根证书移除，全部今日有对应 PR/Release |
| **成本预算与用量追踪** | OpenClaw（#42475 per-agent 预算）、Hermes（PR #143376 会话花费上限）、NanoBot（#2020/#1193/#2149 批量关闭暗示落地） | 无人值守/多代理场景下“机械强制而非 prompt 软约束”的成本上限 |
| **审批与执行安全** | Hermes（#141346 osascript 数据丢失）、OpenClaw（#15032 子代理工具限制、#67440 TOTP）、NanoBot（#5653 denyPatterns） | 高危命令/写操作的审批门、DMZ 式子代理隔离 |
| **渠道可靠性（Telegram/飞书/钉钉/QQ）** | Zeroclaw（#11608 429 卡死）、CoPaw（#8350 飞书同步阻塞、#8343 钉钉丢失）、NanoBot（#6285 ddgs）、PicoClaw（QQ） | 限流退避、异步化、错误可上报而非静默吞掉 |
| **国产/推理模型兼容** | CoPaw（DeepSeek/MiniMax 目录）、Moltis（#1317 DeepSeek reasoning）、OpenClaw（#68596 kimi/DeepSeek watchdog）、NullClaw（#1078 temperature 可空） | 推理模型参数不支持、长思考超时误报 |
| **记忆/会话数据治理** | Hermes（#139606 七阶段准入管道）、Zeroclaw（#10526 append-only RFC、#11711 裁剪丢数据）、OpenClaw（#166634 checkpoint） | 会话不可变历史、预算化记忆写入 |
| **升级/安装体验** | Hermes（update 缺陷集群 5+ 条）、CoPaw（#8378/#8388 升级回归）、NanoClaw（8 个 setup PR） | 配置平滑迁移、WSL/Windows 服务支持 |

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构特点 |
|---|---|---|---|
| **OpenClaw** | 全栈多渠道个人助手 + 多代理编排 | 重度运营者、多代理生产部署 | TypeScript/Node 网关中心，插件生态大 |
| **NanoBot** | 轻量对话代理 + WebUI 体验 | 个人开发者、轻度自托管 | 高频小步迭代，webui/mcp 打磨 |
| **Zeroclaw** | 安全与身份权限（v0.9.0 delegation/SOP） | 企业级、安全敏感运营者 | Rust/Cranelift，append-only 会话事实模型 |
| **Hermes Agent** | 桌面自动化 + 记忆系统 + 本地模型 | 本地优先用户、Termux/桌面场景 | Python，smart approval、MEMORY.md 治理 |
| **NanoClaw** | 凭证网关 + 容器化多 agent 部署 | 自托管/容器化用户 | OneCLI 安装器，token 入网关安全模型 |
| **PicoClaw / Moltis / NullClaw / LobsterAI** | 多供应商聚合、国内渠道、轻量接入 | 中国用户群、嵌入式（NullClaw arm32） | Go（PicoClaw）、Rust/Zig（NullClaw）、Electron 渲染层（LobsterAI） |
| **CoPaw** | 多渠道 Console + 插件市场（v2.3.0 插件化） | 中文企业/团队 Hub 场景 | Python，渠道适配器丰富但质量参差 |
| **IronClaw** | Agent 评测基准（failure taxonomy） | 评测/研究人员 | 非助手类，生态互补位 |

## 6. 社区热度与成熟度分层

- **快速迭代期**：CoPaw（48 开放 PR、v2.3.0 重构征集、3 名首次贡献者）、Zeroclaw（v0.9.0 安全系列 XL PR 栈）、NanoClaw（发布前 rc 打磨）
- **质量巩固期**：OpenClaw（性能专项 + P0 消化）、NanoBot（债务清理、旧 issue 批量关闭）、Hermes（记忆管道 + 更新器收敛）
- **维护/低活跃**：NullClaw、IronClaw、Moltis、LobsterAI（内部驱动、社区面窄）
- **⚠️ 健康预警**：Hermes（关闭/新增 ≈ 4%，问题流入远超消化）、PicoClaw（9 PR 全 stale，含核心功能修复与安全依赖升级）

## 7. 值得关注的趋势信号

1. **安全事件从单点走向系统性**：emSign 链废弃一次性波及 6+ 项目，且 OpenClaw 因上游泄露证书密钥被迫强制 Node 版本——智能体项目高度依赖的运行时/证书供应链是新的系统性风险面，建议开发者建立 CA bundle 与运行时版本的主动监控。
2. **成本硬约束成为刚需**：三个项目同日推进 per-agent/会话级成本上限，"机械强制"诉求压倒 prompt 级软约束，成本控制正在从功能请求变为架构级能力（网关层拦截）。
3. **审批安全从“确认框”走向“能力隔离”**：Hermes 的 osascript 数据丢失事件与 OpenClaw 的 narrow-only 子代理 profile 共同指向 DMZ 式最小权限模型——只读子代理、按 spawn 限权是下一步标配。
4. **渠道层（Telegram/飞书/钉钉/QQ）是多项目共同的可靠性洼地**：同步网络调用阻塞主循环、限流无退避是重复出现的反模式；异步化 + 可解释错误上报应作为渠道适配器的设计基线。
5. **会话数据不可变化兴起**：Zeroclaw 的 append-only RFC、Hermes 的记忆准入管道、多项目的“静默数据丢失”投诉，指向可审计、可重放的会话事实模型成为架构演进方向。
6. **中国生态双轨特征明显**：国产模型适配（DeepSeek/MiniMax/kimi reasoning 契约）与国内渠道（QQ/飞书/钉钉）是本土项目的护城河，但也是回归高发区（GBK 编码、CRLF、升级迁移）——面向该生态的开发者应将中文 Windows 环境纳入 CI 矩阵。

**对开发者的总体建议**：选型上，生产多代理部署首选 OpenClaw/Zeroclaw（注意 P0 积压与发布节奏），轻量自托管看 NanoBot/NanoClaw，中文团队 Hub 场景看 CoPaw（避开升级窗口期）；贡献/跟进上，各项目的 stale 安全 PR（PicoClaw #3428、NanoBot #5653、OpenClaw #168261）是高价值切入点。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-10-23

## 1. 今日速览

今日 NanoBot 呈现**高度活跃的开发节奏**：过去 24 小时共有 59 条 PR 更新（17 待合并 / 42 已合并或关闭）和 9 条 Issue 更新（8 条关闭），其中 #6285 DuckDuckGo 搜索问题成为当日焦点——围绕该 bug 涌现了 4 个竞争性修复 PR，最终 #6409 以「将模糊失败上报为不可用」的方案胜出并关闭。核心维护者 @chengyongru 保持高频产出，单日提交多个 WebUI 修复与性能优化（#6398–#6409）。虽然无新版本发布，但关闭/合并比例高、积压清理效率突出（多个 2 月创建的旧 Issue 今日批量关闭），显示项目处理债务能力强、处于健康迭代状态。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 42 条 PR 中，重点包括：

**核心修复**
- **#6409** [fix(web): report ambiguous ddgs failures as unavailable](https://github.com/HKUDS/nanobot/pull/6409) — 解决了持续数日的 #6285 之争。ddgs 将上游拒绝、空解析、聚合失败统一包装成 "No results found"，本 PR 将其改为明确上报「服务不可用」，终结了 #6290 / #6300 / #6331 三个竞争方案。
- **#6404** [fix(agent): budget oversized tool-result delta after compaction](https://github.com/HKUDS/nanobot/pull/6404) — 修复大文件 `read_file` 在压缩后仍导致回合中止的问题（#5879），且规避了 #4155 的 persist 循环风险。
- **#6398** [fix(webui): preserve dollar prefix in skill references](https://github.com/HKUDS/nanobot/pull/6398) — 修复技能引用 `$github` 显示时丢失 `$` 前缀的问题。

**工程与体验优化**
- **#6402** [ci: isolate Test Suite runs by revision](https://github.com/HKUDS/nanobot/pull/6402) — 修复 CI 并发冲突导致旧 commit 重跑取消新 commit 检查的问题（实际案例：run 39797323916）。
- **#6403** [perf(webui): animate segmented indicator without layout](https://github.com/HKUDS/nanobot/pull/6403) — 消除动画帧中的 layout 计算。
- **#6400** [fix(webui): refine sidebar icon consistency](https://github.com/HKUDS/nanobot/pull/6400) — 侧边栏图标视觉一致性打磨。
- **#6399** [fix(mcp): remove Figma remote preset](https://github.com/HKUDS/nanobot/pull/6399) — 因授权流程持续失败，主动从目录移除不可靠的 Figma 远程预设，体现维护质量把关。

整体看，项目一天内完成了 web_search 稳定性、compaction 边界条件、CI 可靠性、WebUI 视觉与性能五个方向的推进，节奏相当扎实。

## 4. 社区热点

- **[#6285 web_search (ddgs) 模糊失败问题](https://github.com/HKUDS/nanobot/issues/6285)**（3 评论）— 今日热度最高，直接催生 4 个 PR（#6290、#6300、#6331、#6409）。社区诉求核心：免 API key 的默认搜索 provider 在连续调用时因反爬限流失败，且错误信息误导为「无结果」，影响代理自主搜索场景的可靠性。
- **[#6407 如何启用 DeepSeek web_search 工具](https://github.com/HKUDS/nanobot/issues/6407)** — 今日唯一新开 Issue，反映用户对国内 LLM（DeepSeek）原生搜索能力的配置诉求，暴露文档覆盖不足。
- **[#6405 空闲扫描不应干扰进行中的 direct turns](https://github.com/HKUDS/nanobot/pull/6405)** — 揭示了一个较隐蔽的竞态：API server / SDK / 单次 CLI 长回合超过 sessionTtl 后被误判为空闲并触发压缩，涉及数据完整性，值得关注。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| **高** | [#6405](https://github.com/HKUDS/nanobot/pull/6405) 空闲压缩误伤进行中的 direct turn（可导致会话被意外压缩） | PR 开放中，待合并 |
| **中** | [#6285](https://github.com/HKUDS/nanobot/issues/6285) DuckDuckGo 搜索限流被误报为空结果 | ✅ 已由 #6409 修复关闭 |
| **中** | [#5772](https://github.com/HKUDS/nanobot/issues/5772) iOS PWA 独立模式下顶部视口渲染发白 | 已关闭（未见对应 PR 详情） |
| **中** | [#6370](https://github.com/HKUDS/nanobot/issues/6370) WebUI 压缩分隔条无法区分空闲压缩与上下文压力 | 已关闭 |
| **低** | [#6408](https://github.com/HKUDS/nanobot/pull/6408) 粘贴路径 404 时残留持续错误提示 | ✅ PR 已合并/关闭 |
| **安全相关** | [#5278](https://github.com/HKUDS/nanobot/issues/5278) 会话历史存放于 agent workspace 内的安全隐患 | 已关闭（需确认最终方案落地情况） |

## 6. 功能请求与路线图信号

今日批量关闭的 Issue 释放了明确的路线图信号：

- **Token 用量/成本追踪是强需求且即将落地**：[#2020](https://github.com/HKUDS/nanobot/issues/2020)、[#1193](https://github.com/HKUDS/nanobot/issues/1193)、[#2149](https://github.com/HKUDS/nanobot/issues/2149) 三条相关 Issue（spanning 2-3 月）今日同时关闭，强烈暗示统一的使用量日志/计费追踪功能已在内部实现或接近合入，可能成为下个版本的亮点。
- **子代理控制平面**：[#1006](https://github.com/HKUDS/nanobot/issues/1006)（list/kill 命令 MVP）关闭，运维可观测性方向有进展。
- **开放 PR 中的路线图信号**：
  - [#6323](https://github.com/HKUDS/nanobot/pull/6323) 同会话内编辑重发消息 — 已批准的 in-place edit 实现，WebUI 对话体验大幅增强
  - [#6401](https://github.com/HKUDS/nanobot/pull/6401) 用 gateway 失效通知替代轮询（P1 优先级，性能架构级重构）
  - [#6289](https://github.com/HKUDS/nanobot/pull/6289) Matrix 新增 "listen" 群组策略
  - [#5653](https://github.com/HKUDS/nanobot/pull/5653) Full Access 模式下强制执行 denyPatterns（安全增强，标记 conflict 需解冲突）

## 7. 用户反馈摘要

- **痛点 1：搜索可靠性**。用户报告默认 DuckDuckGo provider 8 次查询 0 次成功的隔离复现（#6285），说明免费默认配置在真实代理工作流中几乎不可用，是当日最集中的不满。
- **痛点 2：成本可见性**。多位用户（#2020、#1193、#2149）长期反映使用自定义网关或付费 API 时无法看到 token 用量与成本，尤其影响重度使用者。
- **痛点 3：国产模型集成**。#6407 表明 DeepSeek 用户在配置原生 web search 时缺乏文档指引。
- **痛点 4：后台行为的不可解释性**。#6370 显示用户对 WebUI 中「为什么压缩了上下文」缺乏信息感到困惑。
- **正面信号**：good first issue 标签的 Issue 获得社区参与；多位外部贡献者（@LVsarff、@Hugo-DDT、@LuckVd、@08raviyadav、@HengWeiBin）活跃提交修复，社区贡献生态健康。

## 8. 待处理积压

需要维护者关注的长期开放项：

- **[#5653](https://github.com/HKUDS/nanobot/pull/5653)**（9/4 开放，标记 conflict）— Full Access 下 denyPatterns 失效是安全问题，已搁置近 2 月，建议优先解决冲突合入。
- **[#6043](https://github.com/HKUDS/nanobot/pull/6043)**（10/4 开放，标记 conflict）— 设置保存期间覆盖用户编辑的问题影响日常使用体验。
- **[#5825](https://github.com/HKUDS/nanobot/pull/5825)**（9/20 开放，标记 conflict）— provider 中立的结构化决策客户端，架构级改动，需要维护者裁定方向。
- **[#6337](https://github.com/HKUDS/nanobot/pull/6337)** — 任务状态后端权威化，涉及重连/重载一致性，影响面广。
- **[#6407](https://github.com/HKUDS/nanobot/issues/6407)** — 今日新开、零回复，建议尽快补充 DeepSeek web search 配置文档。
- **提醒**：[#5278](https://github.com/HKUDS/nanobot/issues/5278)（会话历史安全隔离）今日关闭，建议在发布说明中明确最终安全方案，避免社区对关闭原因产生疑问。

---

*数据来源：GitHub API（过去 24 小时）；项目整体健康度评估：**良好** — 高吞吐 PR 处理、活跃社区贡献、系统性清理技术债务，无版本发布但主干迭代速度可观。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 — 2026-10-23

## 1. 今日速览

过去 24 小时 Zeroclaw 保持高活跃度：Issues 更新 42 条（新开/活跃 30，关闭 12），PR 更新 50 条（待合并 42，已合并/关闭 8）。项目重心明显集中在两个方向：一是 **v0.8.7 的稳定性收尾与发布工程**（CI 修复、容器构建、测试梳理），二是 **v0.9.0 的安全/身份权限（identity-access）大改造**，由 @IftekharUddin 的系列 delegation/SOP/RPC 安全 PR 主导。无新版本发布，但多个 release-gate 标签的 PR 显示 v0.9.0 路线图正在密集推进。今日新报告 1 个 S0 级安全问题（容器 CA bundle 信任已废弃的 emSign 链，已有修复 PR #11925 在途）。

## 2. 版本发布

今日无新版本发布。最新发布版本仍为 **v0.8.6**，下一个版本 **v0.8.7**（大量 issue/PR 带有 `release:v0.8.7` 标签，处于收尾阶段）与 **v0.9.0**（安全与架构主线）正在并行推进中。

## 3. 项目进展

今日关闭的 PR/Issue 多为 v0.8.7 的清理与修复：

- **#11863**（已关闭）：将 23 个依赖 fixture 的 `late_tool_search` 测试改为 opt-in，配套 Issue #11806 同步关闭，减少 CI 噪音。
- **#11848**（已关闭）：`plugin_channel_sender_denied` 日志记录补上发送者身份，配套 Issue #11821，改善运维排查体验。
- **#11841**（已关闭）：changelog 措辞与已发布的 v0.8.6 release notes 对齐。
- 关闭的 Issues 中值得注意的修复：**#11902**（OIDC token 在 JWKS 并发拉取期间被误判为 Misconfigured）、**#11898**（daemon 首次启动 fresh data dir 时 RPC session store 可能缺失）、**#11926**（每日安全扫描升级为全量 lockfile 审计）、**#11928**（修复 gateway bind 测试端口竞态）、**#11966**（crates.io preflight 在 tag 已存在时误报）、**#10526**（append-only 会话事件历史 RFC 已接受并关闭）、**#10558**（Cranelift CI 20 分钟超时）、**#11327 / #11357**（两个插件安全 bug，属 v0.8.7 范围）。

待合并的重点 PR（42 条），规模最大的是 v0.9.0 安全系列：

- **#11225**（p0, XL）：delegation 时保留 owner 的 principal scope —— 整个安全系列的基石。
- **#11220 / #11230 / #11234**（均 p1, XL）：SOP 执行需管理员权限、非管理员屏蔽 session-data 工具、按当前权限判定队列会话所有权。
- **#11901**（XL）：gateway 停止后拒绝新请求并 drain 旧连接，修复 reload 后旧实例残留问题（关联 #11709/#11899）。
- **#11925**：容器 CA store 刷新，修复 emSign 废弃链问题（见下文 S0）。
- **#11911 / #11847**：频道韧性（保留已完成工具结果）与全新的 XMPP/Prosody + OMEMO 频道适配器。
- **#11968**：OIDC enrollment Basic 凭据按 RFC 6749 §2.3.1 form-encode。

## 4. 社区热点

- **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)（15 评论）**：v0.9.0 runtime/dashboard 登录/gateway 交付的总 Tracker，承接 RFC #5574，是当前发布节奏的核心协调点。
- **[#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526)（13 评论，今日关闭）**：append-only 会话事件历史 + 确定性状态重放 + 派生 agent 流的 RFC 已接受关闭，标志着 v0.9.0 架构方向定调。社区对可审计、可重放的会话事实模型讨论热烈。
- **[#10999](https://github.com/zeroclaw-labs/zeroclaw/issues/10999)（9 评论）**：Discord 插件从 release 二进制安装的验证任务，10-22 更新确认已在 v0.8.6 最终发布包上完成真实收发验证，进展扎实。
- **[#11651](https://github.com/zeroclaw-labs/zeroclaw/pull/11651)**：Telegram 429 `retry_after` 处理与共享 per-token flood gate，社区对 Telegram 限流稳定性的诉求集中在此（关联 #11608）。

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue | 说明 | 修复状态 |
|---|---|---|---|
| **S0** | [#11932](https://github.com/zeroclaw-labs/zeroclaw/issues/11932) | 容器 CA bundle 仍信任已公开废弃的 emSign 中间链，属安全风险 | ✅ PR [#11925](https://github.com/zeroclaw-labs/zeroclaw/pull/11925) 在途 |
| **S1** | [#11608](https://github.com/zeroclaw-labs/zeroclaw/issues/11608) | Telegram listener 因无超时的 HTTP 请求被永久卡死，健康检测发现但无法自愈 | 🔄 部分由 PR #11651 覆盖，仍 OPEN |
| **S1** | [#11959](https://github.com/zeroclaw-labs/zeroclaw/issues/11959) | Unix null-device 回归测试在大小写不敏感文件系统上崩溃，阻塞工作流 | ❌ 尚无修复 PR |
| **S2** | [#11951](https://github.com/zeroclaw-labs/zeroclaw/issues/11951) | gateway 内置 TLS listener 上所有 WebSocket 升级失败（发 101 后即断连），dashboard chat 不可用（v0.9.0 范围） | ❌ 尚无修复 PR |
| **S2** | [#11711](https://github.com/zeroclaw-labs/zeroclaw/issues/11711) | 会话超长裁剪会永久删除旧轮次（重写 transcript），数据丢失风险 | ❌ 尚无修复 PR |
| **S2** | [#11991](https://github.com/zeroclaw-labs/zeroclaw/issues/11991) | 出站邮件 HTML 携带 agent 文本中的原始标记与任意图片 URL（注入风险） | 🔄 与 #11992 模板方案关联 |
| **S2** | [#11989](https://github.com/zeroclaw-labs/zeroclaw/issues/11989) | per-channel `excluded_tools` 配置从未生效 | ❌ 尚无修复 PR |
| **S2** | [#11709](https://github.com/zeroclaw-labs/zeroclaw/issues/11709) | gateway reload 后已升级的 WebSocket 存活并继续服务旧实例 | 🔄 PR #11901 在途 |
| **S2** | [#9506](https://github.com/zeroclaw-labs/zeroclaw/issues/9506) | Email 频道无法保留 CC、不能真正 Reply All（长期未修） | ❌ 尚无修复 PR |
| S3 | [#11987](https://github.com/zeroclaw-labs/zeroclaw/issues/11987) | 内联 `nosemgrep` 注释不能抑制代码扫描告警 | ❌ 尚无修复 PR |

## 6. 功能请求与路线图信号

- **#11992 / #11938**（Email 频道）：运维侧 HTML 模板 + 净化后的 HTML body、回复引用原文（`quote_original` 开关）。Email 频道正成为社区需求热点（与 #9506、#11991 同主题），预计会被优先安排。
- **#11679**：zerocode 远程端通过 mTLS 平台自取 bearer token，实现与 gateway 的认证对齐，简化远程部署为"一条连接命令"，符合 v0.9.0 identity-access 主线，纳入概率高。
- **#11995**：在任务记录与结果工件端到端强制 owner scope 后，恢复 principal 拥有会话的后台委托与任务管理——是 #11225 系列的后续，明确属于 v0.9.0 路线。
- **PR #11847（XMPP/Prosody + OMEMO）与 #11879（Goal V1 提案 2/12）**：频道生态与 Goal Mode 的长线扩展，均为 XL 级，处于评审阶段。
- **PR #11822 / #11994**：shell 命令扫描器按 bash 语法解析 POSIX 命令，安全策略持续深化。

## 7. 用户反馈摘要

- **Telegram 运维痛点突出**：429 限流导致的连锁失败（#11651）与 listener 永久卡死（#11608）反映 Telegram 频道在生产环境下的网络鲁棒性不足，用户要求超时、退避与自愈机制。
- **Email 频道体验落差**：用户以真实邮件客户端为参照，指出缺失 CC/Reply-All（#9506）、无原文引用（#11938）、HTML 输出粗糙且有注入风险（#11991/#11992），期待企业级邮件能力。
- **数据持久性担忧**：#11711 会话裁剪永久删除历史，与 #10526 RFC 追求的 append-only/可重放模型形成呼应，用户重视会话数据不丢失。
- **运维/部署体验改进被认可**：#10999 的 Discord 插件在最终发布二进制上的实测验证、#11821/#11848 日志补全发送者身份，体现社区对"开箱即用 + 可排查"的认可。
- **跨平台开发摩擦**：#11959（macOS 大小写不敏感文件系统）说明外部贡献者的本地测试体验仍有坑。

## 8. 待处理积压

- **#9506**（7-28 创建，S2，risk:high）：Email CC/Reply-All 缺失，**近 3 个月无实质修复进展**，建议维护者给出排期或关联 Email 改造系列。
- **#7432**（6-09 创建）：v0.9.0 总 Tracker，依赖 #11225 等 XL 级 PR 栈，堆叠较深（#11230 依赖 #11225），合并顺序与评审带宽是发布节奏的关键瓶颈。
- **#11304**（status:blocked）：socket/WebSocket 出站拒绝审计日志，自 10-01 起处于阻塞状态，需确认阻塞原因。
- **#11651**（needs-author-action）：Telegram flood gate XL 级 PR，等待作者响应评审，长期挂着会拖累 #11608 的解决。
- **#8844**（status:parking-lot）：process_message turn 生命周期 OTel 嵌套，已被明确搁置，建议关注者知悉其优先级状态。
- **#11711 / #11951**：两个 S2 级 gateway/runtime 问题尚无对应修复 PR，建议排入 v0.9.0 或补丁版本。

---
*数据来源：Zeroclaw GitHub 仓库（issues/PRs 更新截至 2026-10-23）。链接格式：`zeroclaw-labs/zeroclaw Issue/PR #编号`。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-10-23

## 1. 今日速览

Hermes Agent 今日保持高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 48，仅关闭 2），PR 更新 50 条（待合并 48，合并/关闭 2），无新版本发布。社区讨论焦点集中在**安全审批机制（smart approval 自动放行 osascript 导致用户数据丢失）**、**`hermes update` 更新链路的多个 P2 缺陷**，以及**记忆系统（MEMORY.md）的预算与准入管道**。吞吐比（关闭/新增 ≈ 4%）显示问题流入速度显著快于消化速度，积压压力值得关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日仅 2 条 PR 被合并/关闭，进展有限，但待合并管道中有多条高质量 PR 活跃更新：

- **#140980** [fix(oneshot): `hermes -z` 遵守配置的迭代上限](https://github.com/NousResearch/hermes-agent/pull/140980) — 修复 oneshot 路径构造 `AIAgent` 未传 `max_iterations` 导致默认 `sys.maxsize` 无限运行的缺陷类（关联 #99957/#105243/#49195），配套 Issue #140935 今日仍在讨论。
- **#139606** [七阶段记忆写入准入管道](https://github.com/NousResearch/hermes-agent/pull/139606) — 落地 #135039 设计：预算上限 + 写入时验收管道 + 变更日志 + 后果钩子，是记忆子系统的重要治理升级。
- **#143376** [会话级花费上限与 "continue" 恢复](https://github.com/NousResearch/hermes-agent/pull/143376)（salvage #90191）— 无人值守 24/7 场景的成本保护，由维护者 @teknium1 提交，进入主干概率高。
- **#142924** [browser_vault 在 Desktop 会话中可请求验证码/登录](https://github.com/NousResearch/hermes-agent/pull/142924) — 修复 Desktop 聊天一律返回 `prompt_unavailable` 的阻断性体验问题。
- **#143377** [修复 hermes doctor npm 高危审计项](https://github.com/NousResearch/hermes-agent/pull/143377) — 固定 js-yaml/undici/vite 等补丁版本，安全卫生改善。

**整体判断**：更新器（update/updater）、记忆（memory）、审批（approval）三条主线同时有 Issue+PR 配对推进，是当前开发重心。

## 4. 社区热点

1. **[#141346](https://github.com/NousResearch/hermes-agent/issues/141346)（35 评论）** Smart approval 自动放行 osascript 命令，操控用户正在运行的 PowerPoint 导致未保存文稿被关闭、导出被删除，**不可恢复的数据丢失**。这是对默认 `approvals.mode=smart` 信任模型的直接挑战，诉求是收紧 AppleScript/自动化命令的审批粒度。与 #142834（write_file 审批门）形成同一主题的安全讨论潮。
2. **[#18715](https://github.com/NousResearch/hermes-agent/issues/18715)（29 评论，42 👍）** 远程 Agent + 本地工具执行的架构需求，5 月开题至今持续活跃，是呼声最高的功能请求（42 👍），反映多机/服务器部署用户的核心诉求。
3. **[#135039](https://github.com/NousResearch/hermes-agent/issues/135039)（15 评论）** MEMORY.md/USER.md 写入预算与准入管道，配套 PR #139606 已就位，社区对“什么该进记忆”的治理讨论热烈。
4. **[#139091](https://github.com/NousResearch/hermes-agent/issues/139091)（8 评论）** `hermes update` 在 partial clone 下 merge-base 探测 10 秒超时——更新器问题集群的又一案例。

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| P3/security（影响最高） | [#141346](https://github.com/NousResearch/hermes-agent/issues/141346) | Smart approval 自动放行 osascript → 用户数据永久丢失 | 无直接 fix PR；相关 #142834 为功能请求 |
| P2 | [#136713](https://github.com/NousResearch/hermes-agent/issues/136713) | Dashboard 重连（PTY/WS）硬中断在途 turn，工作被销毁，`end_reason=tui_shutdown` | 未见 fix PR |
| P2 | [#143331](https://github.com/NousResearch/hermes-agent/issues/143331) | Windows 上 `hermes update` 每次失败：过期 gateway.pid + 持有锁中止暂停阶段 | 未见 fix PR |
| P2 | [#143361](https://github.com/NousResearch/hermes-agent/issues/143361) | update 不刷新 release tags → `--version` 报告过期版本 | 未见 fix PR |
| P2 | [#143313](https://github.com/NousResearch/hermes-agent/issues/143313) | Python 3.14 下 `pip install -e .` 依赖冲突（Pillow 13.0.0 vs browser-harness 的 12.3.0） | 未见 fix PR |
| P2 | [#142988](https://github.com/NousResearch/hermes-agent/issues/142988) | update 清除手工安装的 hindsight-all，记忆 provider 每次更新后失效 | 未见 fix PR |
| P2 | [#143364](https://github.com/NousResearch/hermes-agent/issues/143364) | 多路复用网关下，副 profile 的进度/通知经主 bot 的 Telegram 投递（跨 profile 泄漏） | 未见 fix PR |
| P2 | [#136315](https://github.com/NousResearch/hermes-agent/issues/136315) | 异步委派结果在递归上限 FIFO 覆盖后静默丢失 | 未见 fix PR |
| P2 | [#140189](https://github.com/NousResearch/hermes-agent/issues/140189) | 网关对不可投递通知每 5 秒无限重试，无退避无上限 | 未见 fix PR |
| P2 | [#140935](https://github.com/NousResearch/hermes-agent/issues/140935) | `hermes -z` 迭代预算失效（无限运行） | ✅ PR [#140980](https://github.com/NousResearch/hermes-agent/pull/140980) 待合并 |
| P3 | [#116788](https://github.com/NousResearch/hermes-agent/issues/116788) | 后台记忆审查器持久化用户明确拒绝保存的敏感事实（隐私） | 相关 PR #139606 部分覆盖 |
| P3 | [#142820](https://github.com/NousResearch/hermes-agent/issues/142820) | `hermes cron run` 不遵守全局紧急停止（ESTOP） | 未见 fix PR |

**模式观察**：`hermes update` 相关 P2 缺陷今日至少 5 条（#139091/#143361/#143331/#142988/#131149），更新器已成为最集中的稳定性薄弱点。

## 6. 功能请求与路线图信号

- **会话花费上限**：PR [#143376](https://github.com/NousResearch/hermes-agent/pull/143376)（维护者提交）+ 原 #90191，纳入下一版本概率高。
- **记忆准入管道**：#135039 + PR #139606 成熟度高，且 #116673（MEMORY.md 文档链锚点）配套推进，记忆子系统改版在即。
- **远程 Agent / 本地工具**：#18715（42 👍）需求强烈但标记 `needs-decision`，架构决策尚未落地。
- **write_file 审批门**：#142834 在 #141346 数据丢失事件背景下优先级可能提升。
- **自治自愈更新 RFC**：#115639 针对更新器问题集群的系统性方案，与当前 update 缺陷潮呼应，值得关注决策动向。
- **工具搜索白名单**：PR [#110714](https://github.com/NousResearch/hermes-agent/pull/110714)（`tools.tool_search.eager`）解决高频 MCP 工具的延迟成本。

## 7. 用户反馈摘要

- **信任与安全痛点**：用户对 smart approval 自动放行高危命令（osascript 操控桌面应用）造成数据丢失深感不安，强烈期望审批框架覆盖 write_file 等通用写操作。
- **更新不可靠**：Windows 用户反复遭遇 update 失败（权限错配 #143326、gateway.pid #143331）、版本号失真（#143361）、更新破坏手工安装组件（#142988），消耗大量排障时间，甚至造成 ~20 分钟平台停机（#131149）。
- **多 profile/多平台边界泄漏**：消息跨 Telegram bot 投递（#143364）、完成提示音跨会话误响（#143320），反映多租户网关隔离不严。
- **隐私顾虑**：记忆审查器无视用户“不要保存”的明确指令（#116788），对敏感属性（视障）用户尤其敏感。
- **正面信号**：Termux 社区自发提供可用安装热修复（#142610）；本地模型下载断点续传改进（PR #140109）回应了真实需求。

## 8. 待处理积压

| 项目 | 年龄 | 状态信号 | 建议 |
|---|---|---|---|
| [#18715](https://github.com/NousResearch/hermes-agent/issues/18715) 远程 Agent + 本地工具 | ~6 个月 | 42 👍、29 评论持续活跃 | 需维护者架构决策（`needs-decision`） |
| [#90191](https://github.com/NousResearch/hermes-agent/pull/90191) 用量/时限限制 | ~2 个月 | 已被 #143376 salvage，应尽快关闭原 PR 避免重复 | 维护者跟进 |
| [#115639](https://github.com/NousResearch/hermes-agent/issues/115639) 自愈更新 RFC | ~1 个月 | `needs-decision`，与 update 缺陷潮直接相关 | 优先排期 |
| [#77775](https://github.com/NousResearch/hermes-agent/issues/77775) SQLite preflight 误判只读 | ~3 个月 | P2 竞态条件，无 fix PR | 需分派 |
| [#141876](https://github.com/NousResearch/hermes-agent/pull/141876) 恢复 memory read action（回滚 14 行） | 数日 | 争议性回滚提案（对应 106 commit/6275 行 churn），需维护者裁决 | 尽快决策 |
| [#116788](https://github.com/NousResearch/hermes-agent/issues/116788) 记忆审查器隐私违规 | ~1 个月 | P2 隐私问题无专属 fix | 提升优先级 |

**健康度总评**：社区参与度和贡献质量高（Issue 报告规范、PR 附带完整设计），但 bug 流入速度远超消化速度，且 update、审批安全、多 profile 隔离三大问题集群缺乏系统性回应。建议维护者优先收敛 update 链路并对 #141346 数据丢失事件作出正式安全表态。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 —— 2026-10-23

## 1. 今日速览

PicoClaw 今日整体活跃度**中等偏低**：过去 24 小时无新 Issue、无新版本发布，但 PR 侧仍有 10 条更新（9 条待合并、1 条已关闭）。维护活跃度主要体现在依赖自动升级（6 条 Dependabot PR）和社区贡献的功能 PR 上。值得注意的是，多条功能/修复 PR 已被标记 `stale`，显示核心维护者的审查节奏放缓，社区贡献存在积压风险。总体而言，项目处于**功能迭代与维护并行、但审查吞吐不足**的状态。

## 2. 版本发布

今日无新版本发布。（数据源中 Releases 为空，最近 24 小时无 Tag/Release 活动）

## 3. 项目进展

今日唯一的 PR 状态变化为关闭事件，且关闭的是一条历史 PR：

- **[#1227](https://github.com/sipeed/picoclaw/pull/1227)（已关闭）** — QQ 频道支持直接推送本地多媒体文件（图片/文件），无需外部图床。该 PR 创建于 2026-03-08，历时 7 个多月后于 10-22 关闭，可能因长期未合并或方案过时而被清理。这是今日唯一的实质性状态推进，对 QQ 渠道用户体验而言是一个**未落地的功能**。

今日无 PR 合并，主干代码无新增功能或修复进入，项目主干进展**停滞于审查环节**。

## 4. 社区热点

今日无新 Issue、无新增评论数据，暂无高热度讨论。但从近期活跃 PR 可见社区关注方向：

- **[PR #3431](https://github.com/sipeed/picoclaw/pull/3431)**（Standard Compute provider，OpenAI 兼容网关接入）— 供应商生态持续扩张的信号，厂商主动提交接入，参考了此前 NEAR AI Cloud（#2917）的模式。
- **[PR #3429](https://github.com/sipeed/picoclaw/pull/3429) / [#3430](https://github.com/sipeed/picoclaw/pull/3430)**（隐藏工具反馈参数 `hide_args`）— 配置功能 + Web UI 跟进成对提交，反映用户对**Agent 执行日志可读性与信息脱敏**的诉求。

## 5. Bug 与稳定性

今日无新报告的 Bug Issue。但有一条**待合并的修复 PR** 值得关注：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | **[PR #3428](https://github.com/sipeed/picoclaw/pull/3428)**：通过 OpenAI 兼容端点与 Gemini 3 进行工具调用对话时返回 `400 INVALID_ARGUMENT`（缺失 `thought_signature`），导致工具调用链路中断 | Fix PR 已提交，已标 `stale`，**待审查** |

该问题影响 Gemini 3 + OpenAI 兼容层的核心工具调用能力，建议维护者优先处理。

## 6. 功能请求与路线图信号

- **供应商扩展**：[#3431](https://github.com/sipeed/picoclaw/pull/3431) Standard Compute 接入，延续多供应商聚合策略（同 NEAR AI Cloud #2917 模式），大概率进入下一版本。
- **工具反馈可配置化**：[#3429](https://github.com/sipeed/picoclaw/pull/3429)（core）+ [#3430](https://github.com/sipeed/picoclaw/pull/3430)（web UI）成对推进，属于完整度较高的功能提案，纳入概率较高。
- **QQ 渠道多媒体直推**：#1227 被关闭后，该需求仍无实现，可作为路线图候选项重新评估。

## 7. 用户反馈摘要

今日无 Issue 评论数据可提炼。从 PR 描述间接反映的用户场景：

- 用户通过 **OpenAI 兼容端点**接入 Gemini 3 时遭遇工具调用失败（#3428），说明跨供应商兼容层是真实使用痛点。
- 用户希望**隐藏 Agent 工具调用的序列化参数**（#3429），场景包括日志脱敏与输出精简。
- QQ 渠道用户需要**本地多媒体直推**而非依赖图床（#1227），反映国内 IM 渠道的实际运营需求。

## 8. 待处理积压 ⚠️

以下 PR 均创建于 2026-10-15、一周内未获审查且已标 `stale`，**建议维护者关注**：

1. [PR #3428](https://github.com/sipeed/picoclaw/pull/3428) — Gemini thought_signature 修复（**优先级最高，影响核心功能**）
2. [PR #3431](https://github.com/sipeed/picoclaw/pull/3431) — Standard Compute provider
3. [PR #3429](https://github.com/sipeed/picoclaw/pull/3429) / [PR #3430](https://github.com/sipeed/picoclaw/pull/3430) — hide_args 功能对
4. [PR #3432](https://github.com/sipeed/picoclaw/pull/3432) — anthropic-sdk-go 1.55.1 → 1.80.0（**跨 25 个小版本，建议尽快审查以获取 SDK 修复**）
5. [PR #3433](https://github.com/sipeed/picoclaw/pull/3433) — golang.org/x/crypto 0.53.0 → 0.58.0（含安全更新，建议优先）
6. [PR #3435](https://github.com/sipeed/picoclaw/pull/3435) / [#3434](https://github.com/sipeed/picoclaw/pull/3434) / [#3436](https://github.com/sipeed/picoclaw/pull/3436) — 其他依赖升级

**健康度提示**：9 条待合并 PR 全部处于停滞状态，其中含 1 个影响核心功能的修复和多个安全相关依赖升级，审查积压是当前项目最需要解决的问题。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-10-23

## 1. 今日速览

NanoClaw 今日保持高活跃度：过去 24 小时 PR 更新达 50 条（32 条待合并、18 条合并/关闭），无新增 Issue 但关闭了 3 个存量 Bug，并发布了 v2026.10.1 的第二个候选版本 rc.2。核心团队（以 @glifocat 为主）今日集中提交了约 8 个针对 setup/安装流程的修复 PR，显示项目正处于版本发布前的密集打磨阶段。整体节奏健康，开发重心从新功能转向稳定性、安装体验与安全加固。

## 2. 版本发布

**v2026.10.1-rc.2**（[Release](https://github.com/nanocoai/nanoclaw/releases)）

- 这是 2026.10.1 的第二个候选版本，`beta` 通道用户将收到该版本；`stable` 通道仍停留在 2026.10.0，直至正式版发布。
- 关键变更：**OneCLI 升级至 1.45**——新建的 agent 组只保留其模型 key，其他 key 移交给凭证网关。这是一个与安全相关的行为变更，可能影响依赖旧 key 分配方式的部署。
- 迁移建议：rc 版本不建议生产环境使用；升级前请确认 agent 组对 key 的访问假设是否仍成立（参见 [PR #4196](https://github.com/nanocoai/nanoclaw/pull/4196) 中关于 Dial key 删除条件化的讨论）。

## 3. 项目进展

今日关闭的 18 条 PR 中，代表性进展：

- **安全修复落地**：[PR #2434](https://github.com/nanocoai/nanoclaw/pull/2434)（priority/high）修复 OneCLI 安装后 admin API 与 Postgres 暴露在 Docker bridge 上的问题——此前 agent 容器可读取所有 agent 的 access token。这是本月最重要的安全修复之一，后续配套改进为 [PR #4199](https://github.com/nanocoai/nanoclaw/pull/4199)（发布到 127.0.0.1）。
- **容器安全**：[PR #4193](https://github.com/nanocoai/nanoclaw/pull/4193) 将 Bun 升级至 1.4.4，移除 10 月 18 日被吊销的 eMudhra 根证书；[PR #4198](https://github.com/nanocoai/nanoclaw/pull/4198) 自动刷新了加固镜像。
- **Issue 清零式修复**：3 个已关闭 Issue（#4142、#3206、#4175，见下文）均在本周期获得处理。
- 今日新开的一批修复 PR 覆盖安装体验（sudo 密码、docker 组、Slack 失败原因、jq 依赖去除）、会话韧性（#4192）和安全加固（#4194、#4195），整体推进幅度可观，为 2026.10.1 正式版铺路。

## 4. 社区热点

今日无新增 Issue，评论活跃集中在核心团队 PR 上：

- **[PR #3978](https://github.com/nanocoai/nanoclaw/pull/3978)（Dependabot 配置）**：将 CI 依赖管理从"从未运行过的 Renovate 配置"迁移到 Dependabot，涉及 Actions、pnpm、bun、docker 和 skill pins，是仓库维护的基础性改造。
- **[PR #3976](https://github.com/nanocoai/nanoclaw/pull/3976)（/add-copilot 提供商）**：社区贡献者 @barnuri 提交的 GitHub Copilot SDK provider，亮点是 device-login token 保留在凭证网关中而非容器状态，符合项目安全基线，是用户侧最关注的功能型 PR。
- **[PR #3996](https://github.com/nanocoai/nanoclaw/pull/3996)**：社区作者 @orgads 提出将 agent 镜像从浮动的 `node:22-slim` 钉到 `node:24-trixie-slim`，当前标记 `triage/needs-author`，等待作者响应审查意见。

## 5. Bug 与稳定性

今日关闭的 3 个 Bug（均已处理，按严重程度排序）：

| 严重度 | Issue | 状态 |
|---|---|---|
| 高（静默数据丢失） | [#3206](https://github.com/nanocoai/nanoclaw/issues/3206)：Google Chat 等消息 ID 含路径分隔符的渠道，入站附件被静默丢弃 | 已关闭 |
| 高（安全） | [#4175](https://github.com/nanocoai/nanoclaw/issues/4175)：agent 镜像从未安装 poppler-utils，Claude agent 无法读取 PDF | 已关闭 |
| 中（功能不可用） | [#4142](https://github.com/nanocoai/nanoclaw/issues/4142)：Resend 邮件渠道能收不能发，null thread id 回退到平台拒绝的 ID | 已关闭 |

另有一批已开 fix PR 待合并的稳定性问题：[#4192](https://github.com/nanocoai/nanoclaw/pull/4192)（一条卡死的 channel send 会静默封锁整个会话直至重启）、[#4204](https://github.com/nanocoai/nanoclaw/pull/4204)（Slack 安装失败原因丢失）、[#4205](https://github.com/nanocoai/nanoclaw/pull/4205)（过长的 display name 导致文件夹超限）。

## 6. 功能请求与路线图信号

- **GitHub Copilot 作为运行时 provider**（[PR #3976](https://github.com/nanocoai/nanoclaw/pull/3976)）：符合项目"token 入网关"的安全方向，社区贡献、团队持续跟进中，大概率进入下一版本。
- **依赖自动化**（[PR #3978](https://github.com/nanocoai/nanoclaw/pull/3978)）：Dependabot 全面接管版本更新，是仓库维护长期基础设施，接近合并。
- **镜像可重现性**（[PR #3996](https://github.com/nanocoai/nanoclaw/pull/3996)）：钉住 Node 24 + trixie，配合刚关闭的 #4175（poppler-utils 缺失），表明社区对 agent 镜像功能完整性（PDF、Chromium）的关注正在转化为具体改进。
- **OneCLI 安全架构演进**（#4199、#4196、#4203）：rc.2 中 OneCLI 1.45 的 key 收敛策略是明确的路线图方向，预计 2026.10.1 正式版落地。

## 7. 用户反馈摘要

- **WSL/Linux 裸机安装是最大痛点**：今日 8 个 setup 修复 PR 中多个明确提到 WSL（无 systemd 的重启提示 #4206、jq 缺失 #4202、docker 组生效时机 #4201、sudo 密码提示 #4200），说明 WSL 用户群体庞大且安装摩擦多。
- **静默失败最受诟病**：附件静默丢弃（#3206）、会话静默失声（#4192）、Slack 失败原因丢失（#4204）共同指向一个诉求——用户希望错误可解释、可观察，而非默默吞掉。
- **消息渠道生态使用广泛**：Google Chat、Resend、Slack、Discord、Telegram、Teams、Dial 均有反馈，channel 层是用户接触面最广、也最容易出问题的模块。
- **正面信号**：核心团队对 Issue 响应迅速（#4175 从创建到关闭仅 1 天），修复 PR 质量高、均附问题分析，社区信任度良好。

## 8. 待处理积压

- **[PR #3996](https://github.com/nanocoai/nanoclaw/pull/3996)**：标记 `triage/needs-author`，10 月 2 日开至今未合，建议维护者跟进或接手（该 PR 可顺带解决 #4175 类的镜像工具缺失问题）。
- **[Issue #3206](https://github.com/nanocoai/nanoclaw/issues/3206)**：8 月 8 日提交、10 月 22 日才关闭，历时两个半月——Google Chat 附件丢弃这类静默数据丢失问题值得在分类流程中提速。
- **32 条待合并 PR**：其中 #4192（会话封锁）、#4194/#4195（安全加固）建议优先审查，以便赶在 2026.10.1 正式版前合入；rc 通道验证当前是这些 PR 的自然验证场。

---
*数据来源：NanoClaw GitHub 仓库，统计窗口 2026-10-22 至 2026-10-23。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-10-23

## 1. 今日速览

NullClaw 今日整体活跃度较低，过去 24 小时仅 1 条 Issue 更新（新开 1）、1 条 PR 更新（待合并 1），无新版本发布。新 Issue #1078 聚焦于特定 LLM 提供商的参数兼容性问题，属于典型的实用性增强请求。PR #1077 针对 arm32 平台 nightly 构建长期失败的问题提交了修复，若合并将恢复三个目标平台的 CI 绿灯。整体来看项目处于平稳维护状态，无重大事件。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 合并或关闭，仅 1 个待合并 PR：

- **[PR #1077](https://github.com/nullclaw/nullclaw/pull/1077)** `fix(qq): use portable Atomic for gateway timestamps so arm32 nightly builds compile`
  - **问题**：`src/channels/qq.zig` 中的 `gateway_attempt_started_ms` 与 `last_gateway_activity_ms` 使用了 `std.atomic.Value(i64)`，而 64 位原子操作在 32 位目标上无法编译，导致 `linux-arm32-gnu`、`linux-arm32-musl`、`android-armv7` 三个 nightly 构建自 10 月 5 日起每轮全部失败（已持续约 18 天）。
  - **修复方案**：改用可移植的 Atomic 实现，恢复多平台构建。
  - **状态**：待审查合并，合并后将显著改善 CI 健康度与 arm32/Android 平台可用性。

## 4. 社区热点

今日讨论活跃度低，无高评论量条目。

- **[Issue #1078](https://github.com/nullclaw/nullclaw/issues/1078)**（[enhancement] Allow temperature to be set to null）为今日唯一新开 Issue。作者 @l2dy 提出允许将 `temperature` 设为 `null`，使其不传递给 LLM API。诉求源于部分模型（如某些推理型模型）不支持 `temperature` 参数，显式传入会返回错误：
  ```json
  {"error":{"message":"Unsupported parameter: 'temperature' is not supported with this model.","code":"invalid_request_body"}}
  ```
  这反映了用户接入多样化 LLM 提供商时的兼容性痛点，属于高频、低成本的改进方向，实现难度不大。

## 5. Bug 与稳定性

今日无新增 Bug 报告。但需注意一项**持续存在的构建稳定性问题**：

- 🔴 **[高] arm32 平台 nightly 构建持续失败**：自 10-05 起所有 nightly 运行中 `linux-arm32-gnu`、`linux-arm32-musl`、`android-armv7` 构建均失败。已有修复 PR：[PR #1077](https://github.com/nullclaw/nullclaw/pull/1077)，**建议维护者优先审查合并**。

## 6. 功能请求与路线图信号

| 请求 | 链接 | 状态 | 判断 |
|---|---|---|---|
| `temperature` 支持设为 null（不传给 API） | [Issue #1078](https://github.com/nullclaw/nullclaw/issues/1078) | 新开，暂无关联 PR | 改动小、需求明确（多提供商兼容），很可能被纳入下一个小版本 |

#1078 体现了项目在“多提供商适配”方向上的持续需求信号，若采纳，类似的 `top_p` 等参数或许也值得一并评估可空化处理。

## 7. 用户反馈摘要

- **兼容性痛点**：用户在对接部分模型（尤其是不支持采样参数的推理型模型）时，因 `temperature` 被强制传递而遭遇 API 拒绝请求（`invalid_request_body`），需要参数级开关（null = 不发送）而非仅依赖默认值。
- **平台覆盖需求**：社区贡献者主动修复 arm32/Android 平台构建问题，说明存在在嵌入式/移动设备上运行 NullClaw 的真实使用场景。

## 8. 待处理积压

- **[PR #1077](https://github.com/nullclaw/nullclaw/pull/1077)**：arm32 构建修复 PR，涉及的问题已持续 18 天未解决，**建议维护者优先审查**，避免 nightly 构建长期红屏掩盖其他回归。
- **[Issue #1078](https://github.com/nullclaw/nullclaw/issues/1078)**：今日新开，暂未获维护者回应，属低成本高收益改进，建议尽快确认接收意向。

---

*数据来源：NullClaw GitHub 仓库，统计窗口为过去 24 小时。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-10-23

## 1. 今日速览

IronClaw 今日整体处于**低强度、常规维护**状态：过去 24 小时共 2 条 Issue 更新（1 开 1 关）、6 条 PR 更新（5 待合并，1 已关闭），无新版本发布。活跃内容几乎全部由 dependabot 驱动的依赖升级构成（前端 Storybook/Vite/DOMPurify、e2e 测试的 certifi），显示 CI 自动化运转正常。值得注意的是项目有一套**每日失败分类学（failure taxonomy）**机制在持续运行，体现团队对基准测试质量的系统化追踪。总体健康度：稳定，无紧急风险信号。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无功能性 PR 合并，进展集中在依赖维护与积压清理：

- **[#3168](https://github.com/nearai/ironclaw/issues/3168)（已关闭）**：ARM64/aarch64 Docker 镜像支持请求被关闭。该 Issue 自 2026-05-01 挂起近半年后关闭——Cranelift 与 Rust 工具链均已支持 aarch64，关闭可能意味着已实现或被其他方案取代，建议维护者在关闭说明中明确后续状态。
- **[#8149](https://github.com/nearai/ironclaw/pull/8149)（已关闭）**：dompurify 3.4.12 → 3.4.16 升级 PR 被关闭，由更新版本的 **[#8155](https://github.com/nearai/ironclaw/pull/8155)**（→ 3.4.17）取代，属于正常的依赖升级链轮替，DOMPurify 补丁版本可能包含 XSS 防护相关修复，建议尽快合并。

整体而言，今日项目前进幅度有限，属于纯维护节奏。

## 4. 社区热点

今日无高评论/高互动讨论。相对值得关注：

- **[#8153](https://github.com/nearai/ironclaw/issues/8153)**：@pranavraja99 发布的 *Daily ironclaw failure taxonomy — 2026-10-22*，分析 officeqa 套件 64 个未通过任务，判定绝大多数为**模型质量错误**（DeepSeek-V4-Flash 导航问题），而非 IronClaw 框架本身的缺陷。这类每日报告是理解 IronClaw 作为 Agent 评测工具实际能力边界的一手数据源。

## 5. Bug 与稳定性

- **[低] DOMPurify 3.4.12 存在的修复项**：[#8155](https://github.com/nearai/ironclaw/pull/8155) 升级至 3.4.17（含问题修复），已有 fix PR，待合并 ✅
- **[低] certifi 根证书更新**：[#8157](https://github.com/nearai/ironclaw/pull/8157) 更新至 2026.10.19（含 emSign 根证书恢复），已有 fix PR，待合并 ✅

今日**无用户报告的崩溃、回归或高危 Bug**。failure taxonomy 报告确认的 64 个未通过项归因于底层模型而非框架。

## 6. 功能请求与路线图信号

- **ARM64 支持（[#3168](https://github.com/nearai/ironclaw/issues/3168)，已关闭）**：半年前由 @gcaguilar 提出，诉求是在 ARM64 机器上运行官方 Docker 镜像（含 Apple Silicon、AWS Graviton 场景）。技术障碍（Cranelift、Rust 工具链）已排除，仅 armv7 32 位受限（#1339 跟踪）。关闭状态需跟进确认是“已实现”还是“不再计划”，这直接影响 ARM 用户的部署路径。

## 7. 用户反馈摘要

今日数据中用户直接反馈有限，可提炼的信号：

- **部署环境多样性诉求**：ARM 用户（#3168）希望在非 x86 基础设施上运行 IronClaw，反映部分用户在 Apple Silicon / ARM 云主机上的实际使用场景。
- **评测可靠性关注**：failure taxonomy 每日报告显示社区/团队高度关注区分“模型失败”与“框架失败”，officeqa 套件的失败被明确归因于模型导航能力，说明 IronClaw 本身在该套件上表现稳定。

## 8. 待处理积压

- **5 个待合并 dependabot PR**：[#8158](https://github.com/nearai/ironclaw/pull/8158)（storybook 10.5.7→10.6.2）、[#8156](https://github.com/nearai/ironclaw/pull/8156)（addon-vitest 同版本）、[#8155](https://github.com/nearai/ironclaw/pull/8155)（dompurify→3.4.17）、[#8157](https://github.com/nearai/ironclaw/pull/8157)（certifi）、[#8154](https://github.com/nearai/ironclaw/pull/8154)（vite 8.1.3→8.1.6）。均为今日/昨日新建，尚不算积压，但其中 **dompurify 与 certifi 涉及安全相关组件**，建议维护者优先审查合并。
- **长期项提醒**：#3168 关闭后是否有替代实现/文档说明，建议向社区澄清，避免 ARM 用户误判支持状态。

---
*数据来源：GitHub API（截至 2026-10-23）。本日报基于过去 24 小时窗口的 Issues/PRs 活动生成。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-10-23

## 1. 今日速览

过去 24 小时 LobsterAI 仓库整体活跃度**中等偏低但质量较高**：Issues 方面零新增、零活跃，PR 方面有 6 条更新，其中 5 条被关闭（含当日新建当日关闭的快速迭代 PR 4 条），1 条长期待合并。开发焦点集中在**渲染层（renderer）的体验打磨**——头像资源、账号状态显示、视频费用确认流程修复均有落地。无新版本发布，两项陈旧（stale）PR 被机器人标记，积压问题需维护者关注。

## 2. 版本发布

今日无新版本发布，最新 Releases 为空。以上述修复推测，这批 renderer 层修复有望随下一个版本一并交付。

## 3. 项目进展

今日关闭的 5 条 PR（4 条为当日快速合并/关闭）主要推进了以下方向：

- **视频费用确认流程修复（核心修复）** [#2924](https://github.com/netease-youdao/LobsterAI/pull/2924)：修复视频费用确认在实际展示前就消耗等待时间、超时后无法继续的问题。确认卡首次可见且窗口聚焦时才启动 2 分钟倒计时；超时后支持刷新费用重新确认，并可在页面重载、切换会话后恢复。同时引入 30 分钟进程内保留上限、按 revision/sequence 拒绝旧/重复确认，增加确认状态 IPC，媒体生命周期埋点升级至 schemaVersion=3。涉及 renderer/main/openclaw/cowork 多个模块，是今日工程量最大、含金量最高的一条。
- **账号与模型连接状态修复** [#2923](https://github.com/netease-youdao/LobsterAI/pull/2923)：修复会话恢复期间侧边栏隐藏“我的账号”、模型选择器误提示登录的问题，区分会话恢复与验证失败的模型连接状态，避免已缓存登录用户被误导。
- **专家头像回退与推荐场景头像优化** [#2925](https://github.com/netease-youdao/LobsterAI/pull/2925)：为无头像或远程头像加载失败的预设专家提供柔和蓝色角色兜底图，并在首页推荐场景卡片条目中展示各专家头像。
- **渲染层反馈文案更新** [#2926](https://github.com/netease-youdao/LobsterAI/pull/2926)：chore 级更新。
- **DSH 思考强度元数据同步（陈旧关闭）** [#2585](https://github.com/netease-youdao/LobsterAI/pull/2585)：将 LobsterAI 侧 thinking 元数据映射为 DSH 的 `reasoningEfforts`，使 DSH Web UI 中可调节“思考强度”。该 PR 挂起近两个月后被关闭，功能去向需关注是否有替代实现。

**整体评估**：项目在媒体生成（视频确认）可靠性与前端状态展示两个方向均有实质推进，渲染层质量问题在快速收敛。

## 4. 社区热点

今日无新增/活跃 Issues，PR 评论数据缺失（均为 undefined），无明显热点讨论。相对而言：

- [#2924](https://github.com/netease-youdao/LobsterAI/pull/2924) 涉及视频生成的费用确认体验，是用户付费敏感场景，其修复反映社区对**媒体生成流程透明度与可靠性**的诉求。
- 开放中的 [#2739](https://github.com/netease-youdao/LobsterAI/pull/2739)（Parallel 免密搜索）来自外部贡献者 @georgeatparallel，代表第三方服务商希望**降低搜索技能接入门槛**（无需账号/API Key/浏览器连接）的诉求。

## 5. Bug 与稳定性

今日无用户报告的新 Bug（0 新增 Issue），但当日合并了多条修复：

| 严重程度 | 问题 | 修复 PR | 状态 |
|---|---|---|---|
| 高 | 视频费用确认超时消耗、超时后流程卡死、重载/切会话后状态丢失 | [#2924](https://github.com/netease-youdao/LobsterAI/pull/2924) | ✅ 已关闭 |
| 中 | 会话恢复期间账号入口消失、模型选择器错误要求登录 | [#2923](https://github.com/netease-youdao/LobsterAI/pull/2923) | ✅ 已关闭 |
| 低 | 专家头像缺失/远程加载失败时无兜底展示 | [#2925](https://github.com/netease-youdao/LobsterAI/pull/2925) | ✅ 已关闭 |

## 6. 功能请求与路线图信号

- **免密 Parallel 网页搜索** [#2739](https://github.com/netease-youdao/LobsterAI/pull/2739)：为内置 web-search 技能新增 Parallel 引擎，匿名访问 Fast 模式且有限流。已挂起一个月且被标记 stale，能否进入下版本取决于维护者对匿名限流策略的评估。
- **DSH 思考强度可配置** [#2585](https://github.com/netease-youdao/LobsterAI/pull/2585) 被关闭，若后续无替代实现，说明该方向暂未纳入路线图。

从 #2924 的埋点 schemaVersion=3 升级可见，团队正在系统性加强**媒体生命周期的可观测性**，预计媒体生成稳定性仍是近期迭代主线。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法直接提炼用户声音。间接信号：

- 视频费用确认相关修复（#2924）暗示此前存在用户在**视频生成付费流程中被卡死或重复确认**的痛点。
- 账号状态修复（#2923）反映**启动/会话恢复阶段的登录态展示不一致**曾造成用户困惑。
- 头像兜底方案（#2925）体现团队对**默认视觉一致性与加载失败容错**的细节关注。

## 8. 待处理积压

- ⚠️ [PR #2739](https://github.com/netease-youdao/LobsterAI/pull/2739)（Parallel 免密搜索）：外部贡献，开放超一个月无响应且被标记 stale。建议维护者给出评审结论，避免打击社区贡献积极性。
- ⚠️ [PR #2585](https://github.com/netease-youdao/LobsterAI/pull/2585)（DSH reasoning-effort 同步）：开放 52 天后被关闭，若因实现路径调整，建议在关闭说明中给出后续计划。
- 📌 Issue 积压情况：今日无活跃 Issue 数据，建议维护者例行巡查长期未响应的 Issue 队列。

---
*数据来源：GitHub API（截至 2026-10-23）。整体健康度：开发节奏稳定、修复速度快，但社区侧（Issue/外部 PR 响应）响应偏慢，需关注贡献者留存。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-10-23

## 1. 今日速览

今日 Moltis 仓库整体活跃度**中等偏低**：无新 Issue、无新版本发布，PR 活动共 5 条，其中仅 1 条（#1317）为今日新开，其余为昨日活动的延续。贡献仍集中在核心维护者 @penso 与 @PeterDaveHello 两人，属于典型的维护者驱动型节奏。今日工作重心为**模型提供商适配修复**（DeepSeek、Z.AI）与 **Web UI 国际化补全**，无用户侧 Bug 报告流入，社区噪音低但外部参与度也偏弱。

## 2. 版本发布

今日无新版本发布。最新代码变更仍在 PR 阶段，未形成 Release。

## 3. 项目进展

今日及近两日关闭的 PR 共 2 条：

- **PR #1314 [CLOSED]** `fix(providers): refresh retired MiniMax models and verify live tool use`（[@penso](https://github.com/penso)，[链接](https://github.com/moltis-org/moltis/pull/1314)）
  - 回应 Greptile P1 审查意见：将 reasoning token 贯穿 `CompletionResponse`、非流式 spawn-agent 循环及后续 tool 轮次。
  - 将已退役的 MiniMax M2 直连 API 替换为文档化的 `MiniMax-M3.1-Fl…` 系列，并验证线上 tool use。
  - 意义：多提供商推理链路的正确性显著提升，模型目录与上游同步。

- **PR #1313 [CLOSED]** `fix(tls): update certificate verifier and roots for CA distrust`（[@penso](https://github.com/penso)，[链接](https://github.com/moltis-org/moltis/pull/1313)）
  - 修复覆盖测试发现的浏览器 profile 锁竞态：以 RAII guard 持锁、drop 时显式解锁，容器清理未确认时保留 guard；附带 3 个确定性回归测试（释放、下一持有者排除、隔离）。
  - 意义：提升 TLS/证书校验与并发会话管理的稳定性。

待合并 3 条（见第 5、6 节）：#1317、#1316、#1315。

## 4. 社区热点

今日无新增 Issue，PR 评论数据缺失（评论数 undefined），无法判定讨论热度。相对而言：

- **PR #1315**（i18n 本地化）覆盖 `en/fr/zh/zh-TW` 四语言包，且实现语言切换时模型选择器文案实时刷新，暗示中文用户群体是重要受众，国际化是持续投入方向。
- **PR #1316** 描述了可复现的多轮会话 bug 场景（静默完成 / 无 `Done` 流 / 中止轮次导致陈旧回复锚点），说明聊天流处理是近期高频打磨区域。

## 5. Bug 与稳定性

按严重程度排列（今日新报告的 Issue 为 0，以下均来自 PR 中的修复内容）：

| 严重程度 | 问题 | 修复 PR | 状态 |
|---|---|---|---|
| 高 | DeepSeek thinking 模式下简单 tool call 可能返回 0 reasoning token，实时推理契约与流解析不符 | [#1317](https://github.com/moltis-org/moltis/pull/1317) | 🟡 待合并 |
| 高 | 聊天回复因陈旧消息锚点被重复投递（静默完成/流中断/中止轮次遗留） | [#1316](https://github.com/moltis-org/moltis/pull/1316) | 🟡 待合并 |
| 中 | MiniMax 退役模型仍被引用、reasoning 未贯穿 agent 循环 | [#1314](https://github.com/moltis-org/moltis/pull/1314) | ✅ 已关闭 |
| 中 | 浏览器 profile 锁竞态 + CA 不受信任场景的证书校验/根证书过期问题 | [#1313](https://github.com/moltis-org/moltis/pull/1313) | ✅ 已关闭 |
| 低 | 安全、onboarding、会话与模型选择界面的文案硬编码英文，绕过 locale | [#1315](https://github.com/moltis-org/moltis/pull/1315) | 🟡 待合并 |

值得注意：**#1317 是今日唯一新开 PR**，由 @penso 创建，包含实测验证（live reasoning contract），质量较高，建议优先 review。

## 6. 功能请求与路线图信号

- 今日无新功能请求 Issue。
- 从近期 PR 可推断的隐性路线图信号：
  - **多提供商适配持续扩展**：DeepSeek、Z.AI（#1317）、MiniMax（#1314）接连更新，说明 provider 层是迭代重心，下一版本可能包含一次模型目录批量刷新。
  - **i18n 完整性收尾**：#1315 属于系统性的本地化补漏，可能标志着对多语言（尤其中文繁简）用户的一次正式支持承诺。
  - **聊天核心可靠性**：#1316 针对 reply anchor 生命周期，暗示可能还有一轮消息投递机制的加固。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼直接用户反馈。间接信号：

- #1316 中的复现场景（“Turn A 无可见回答 → Turn B 回答错投到旧锚点”）来自真实会话观察，反映**多轮对话中消息投递可靠性**是实际使用痛点。
- #1315 的存在表明用户此前已注意到**界面中英文混杂**问题。

## 8. 待处理积压

- **待合并 PR 积压 3 条**（#1317、#1316、#1315），均由核心贡献者提交、近期活跃，建议维护者尽快 review 合并，避免堆积。特别提醒 #1316 涉及重复回复这一用户可感知的 bug。
- 无长期未响应 Issue（当前 Issue 流为 0）。

---

**健康度小结**：项目处于稳定的维护节奏，核心开发持续（近 3 日 5 PR），但外部贡献者参与度和 Issue 活跃度为零，社区互动面较窄。代码质量意识良好（回归测试、live 验证、Greptile 审查跟进）。建议关注 #1317 的合并进度及下一版本 Release 的形成。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 · 2026-10-23

## 1. 今日速览

CoPaw（QwenPaw）今日处于**高度活跃状态**：过去 24 小时 Issues 更新 21 条（新开/活跃 20，关闭 1），PR 更新 50 条（待合并 48，已合并/关闭 2），并发布了安全修复版本 **v2.2.2.post1**。社区围绕安全升级、v2.3.0 轻量化重构公告（#8289）以及大量渠道/Console 层面的 Bug 报告展开热烈讨论。48 个待合并 PR 显示贡献管道充盈，项目处于快速迭代期，但升级引发的回归问题（QQ 渠道、模型配置）值得维护者优先关注。

---

## 2. 版本发布

### v2.2.2.post1（[Release](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2.post1)）

- **chore**: 版本号提升至 v2.2.2.post1（[#8369](https://github.com/agentscope-ai/QwenPaw/pull/8369)，@cuiyuebing）
- **fix(security)**: 修复跨依赖、安装器和构建流程中的 **emSign CA 信任链问题**（[#8370](https://github.com/agentscope-ai/QwenPaw/pull/8370)，@qbc2016）

**⚠️ 安全提醒**：官方已发布 [#8385](https://github.com/agentscope-ai/QwenPaw/issues/8385)，**强烈建议所有用户尽快升级至 2.2.2.post1 或更高版本**。桌面安装器、PyPI 包等渠道将陆续可用。

**迁移注意**：
- 无 API 破坏性变更，为纯安全补丁版本。
- 但从旧版本升级到 2.2.2 系列本身存在回归风险，见第 5 节（QQ 渠道失效 #8388、模型配置异常 #8378）。
- 合并回 main 的跟进 PR：[#8391](https://github.com/agentscope-ai/QwenPaw/pull/8391)（chore: merge Release/v2.2.2post1 into main，今日新开）。

---

## 3. 项目进展

今日合并/关闭 PR 仅 2 条（50 条更新中），主分支处于发布后整理阶段，合并节奏放缓但提交流仍旺盛：

- **[#8391](https://github.com/agentscope-ai/QwenPaw/pull/8391)** [size/L] 将 v2.2.2.post1 发布分支合回 main，完成发布收尾。
- **[#8386](https://github.com/agentscope-ai/QwenPaw/issues/8386)** [CLOSED] Release Duty 自动化安装验证 Issue 已完成并关闭，四个检查点全部通过，说明发布流程自动化健康。

**待合并管道亮点**（社区贡献持续涌入，共 48 个开放 PR）：
- **[#8366](https://github.com/agentscope-ai/QwenPaw/pull/8366)** [size/M]：以标准库替换 **GPL-3.0 许可的 html2text**，解决与 Apache-2.0 的许可兼容性问题——重要的合规里程碑。
- **[#8376](https://github.com/agentscope-ai/QwenPaw/pull/8376)** [first-time-contributor, size/XXXL]：PowerContext v1.4.0 内存后端支持，接入结构化上下文与 Artifact API。
- **[#8337](https://github.com/agentscope-ai/QwenPaw/pull/8337)** [size/M]：停止重放模型不再需要的媒体块，直击 #8335 的 48 MB 请求体问题。
- **[#8303](https://github.com/agentscope-ai/QwenPaw/pull/8303)** [size/M]：审批提示投递到发起渠道，修复长期悬置的 #6695/#6819。

---

## 4. 社区热点

**热度最高 / 评论最多：**

1. **[#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)**（7 评论）[Feature] 插件面向的主题扩展点（语义 token 覆盖层）。诉求：#7741 引入的主题系统只给插件留下一个 `colorPrimary` 旋钮，插件作者需要更深层的主题定制能力。**插件生态成熟度的标志性需求**。
2. **[#8289](https://github.com/agentscope-ai/QwenPaw/issues/8289)**（3 评论，👍1）📢 官方预告 **v2.3.0 轻量化与可扩展性重构**，公布初步测试结果并公开征集需求。这是理解下一版本方向的路线图锚点，所有生态参与者应关注。
3. **[#8351](https://github.com/agentscope-ai/QwenPaw/issues/8351)**（3 评论）[Bug][Console] Composer 草稿按 agent 而非会话为键存储，未发送文本会“串”到同一 agent 的其他会话。已有相关修复 PR [#8274](https://github.com/agentscope-ai/QwenPaw/pull/8274)（切换会话时保留待发输入）。
4. **[#8359](https://github.com/agentscope-ai/QwenPaw/issues/8359)**（2 评论）Hub 容器化部署时 readiness 探测硬编码 127.0.0.1 导致 Docker 运行时启动失败——与维护者在 #8256 推荐的部署方式直接冲突，容器化场景需求真实且迫切。
5. **[#8335](https://github.com/agentscope-ai/QwenPaw/issues/8335)**（设计讨论）聊天历史媒体导致 48 MB 请求体与会话永久卡死，引发对媒体处理架构的成本设计讨论，对应修复 PR #8337 已在途。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | **[#8385](https://github.com/agentscope-ai/QwenPaw/issues/8385)** 安全通告：需立即升级至 2.2.2.post1 | ✅ 已修复并发布 |
| 🔴 高 | **[#8388](https://github.com/agentscope-ai/QwenPaw/issues/8388)** 升级后 QQ 渠道失效（`No module named '_qwenpaw_remote_backend'`，运行环境损坏） | ❌ 暂无 fix PR |
| 🔴 高 | **[#8378](https://github.com/agentscope-ai/QwenPaw/issues/8378)** 升级后模型调用异常（旧版 agent.json 的 `active_model` 配置迁移问题） | ❌ 暂无 fix PR |
| 🔴 高 | **[#8350](https://github.com/agentscope-ai/QwenPaw/issues/8350)** 飞书渠道在主事件循环执行同步网络调用，网络不通时服务卡死、SIGTERM 无法退出 | ❌ 暂无 fix PR（#8244 相关优化在审） |
| 🟠 中 | **[#8359](https://github.com/agentscope-ai/QwenPaw/issues/8359)** Hub 容器内 Docker 运行时启动失败（Errno 111） | ❌ 暂无 fix PR |
| 🟠 中 | **[#8374](https://github.com/agentscope-ai/QwenPaw/issues/8374)** `QWENPAW_CORS_ORIGINS` 设置不生效（常量在导入时被固化） | ❌ 暂无 fix PR |
| 🟠 中 | **[#8335](https://github.com/agentscope-ai/QwenPaw/issues/8335)** 媒体历史导致会话永久卡死 | ✅ fix PR [#8337](https://github.com/agentscope-ai/QwenPaw/pull/8337) 开放中 |
| 🟠 中 | **[#8368](https://github.com/agentscope-ai/QwenPaw/issues/8368)** 删除当前选中会话报 404 | ✅ fix PR [#8375](https://github.com/agentscope-ai/QwenPaw/pull/8375) 开放中 |
| 🟠 中 | **[#8343](https://github.com/agentscope-ai/QwenPaw/issues/8343)** 钉钉 sessionWebhook 过期后最终回复静默丢弃 | ❌ 暂无 fix PR |
| 🟠 中 | **[#8342](https://github.com/agentscope-ai/QwenPaw/issues/8342)** 七个渠道中引用回复丢失控制命令路由（如引用后发 `/stop` 失效） | ❌ 暂无 fix PR |
| 🟠 中 | **[#8329](https://github.com/agentscope-ai/QwenPaw/issues/8329)** Telegram 渠道忽略 `reply_to_message`，引用上下文丢失 | ❌ 暂无 fix PR |
| 🟡 低 | **[#8333](https://github.com/agentscope-ai/QwenPaw/issues/8333)** 侧边栏 source-group 头部与首条会话视觉重叠 | ❌ |
| 🟡 低 | **[#8377](https://github.com/agentscope-ai/QwenPaw/issues/8377)** 干净 checkout 上裸 pytest 收集阶段中止（test_backup 导入不匹配，疑似单文件修复） | ❌ |

**模式观察**：升级回归（#8378、#8388）与渠道适配器质量问题（飞书/钉钉/Telegram/QQ）是当前稳定性两大主题。

---

## 6. 功能请求与路线图信号

**官方路线图信号：**
- **[#8289](https://github.com/agentscope-ai/QwenPaw/issues/8289)**：v2.3.0 明确方向为**轻量化 + 插件化重构**，附初步测试数据，公开征集反馈。#8231（插件市场溯源）#8366（去 GPL 依赖）等 PR 均可视为该方向的铺垫。

**用户功能请求及纳入可能性：**
- **[#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)** 插件主题语义 token 覆盖层 —— 与 v2.3.0 插件化重构高度契合，**纳入概率高**（7 条评论显示维护者在积极讨论）。
- **[#8275](https://github.com/agentscope-ai/QwenPaw/issues/8275)** Hub 全局 Skill/MCP 统一管理与共享（团队场景）—— 多用户 Hub 是明确发展方向，**中期概率较高**。
- **[#7339](https://github.com/agentscope-ai/QwenPaw/issues/7339)** 流式生成时禁用自动滚动 —— UX 细节改进，已有 PR [#8274](https://github.com/agentscope-ai/QwenPaw/pull/8274) 处理相邻的输入保留问题，可能一并解决。
- **[#8372](https://github.com/agentscope-ai/QwenPaw/issues/8372)** Hub AI 网关 120s 超时过短 —— 长任务文件处理场景，配合 #8337 媒体优化可能被纳入。

---

## 7. 用户反馈摘要

**痛点：**
- **升级体验差**：多位用户报告从旧版本升级后 QQ 渠道彻底失效（#8388）、模型配置解析异常（#8378），缺乏平滑的配置迁移机制。
- **渠道可靠性**是最大摩擦点：飞书卡死主循环（#8350）、钉钉回复静默丢失（#8343）、Telegram 引用上下文丢失（#8329）、QQ 模块缺失（#8388）——多渠道接入是核心卖点，但各渠道实现质量参差。
- **中文 Windows 环境**兼容性差：GBK/CP936 文件被静默丢字节（#8234 背景）、CRLF 被 `edit_file` 意外改写（#8235），中文用户群占比高，此类问题影响直接。
- **性能**：默认 Windows 桌面配置启动需 15.1s 导入渠道 SDK（#8244 背景）；聊天历史无限重传媒体导致请求体 48 MB（#8335）。

**满意点：**
- 社区贡献活跃且质量高：48 个开放 PR 中包含 3 个首次贡献者 PR（#8345、#8328、#8376），issue 报告普遍附详细复现步骤与版本信息（甚至出现 AI 协助撰写的高质量 issue #8078）。
- 官方发布流程透明：Release Duty 自动验证（#8386）、安全通告及时（#8385）、路线图公开征集意见（#8289）。

---

## 8. 待处理积压

以下 Issue/PR 长期开放，建议维护者关注：

- **[#7339](https://github.com/agentscope-ai/QwenPaw/issues/7339)**（2026-08-27 开启，近 2 个月）流式自动滚动禁用开关 —— 简单 UX 改进，长期无响应。
- **[#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)**（10-01 开启，7 条评论仍在增长）插件主题扩展点 —— 讨论热度高但尚无对应 PR。
- **[#8078](https://github.com/agentscope-ai/QwenPaw/issues/8078)**（10-02 开启）`chat_with_agent` 跨会话消息在 UI 中分裂为多个页面 —— 影响核心对话体验，2 条评论后停滞。
- **[#8299](https://github.com/agentscope-ai/QwenPaw/pull/8299)**（10-17 开启，size/L）视频输入被拒后无视频重试 —— 修复链路较复杂，防止被淹没。
- **[#8244](https://github.com/agentscope-ai/QwenPaw/pull/8244)**（10-14 开启，Under Review）启动跳过禁用渠道 SDK，15.1s → 显著缩短 —— 高价值性能优化，尽快推进评审。
- **升级回归双 Issue（#8378、#8388）**：10-22 报告、10-23 仍在活跃，**建议今日优先分派**，安全版本发布后的升级窗口期若处理不及时将放大影响。

---

*数据来源：GitHub API（agentscope-ai/QwenPaw），统计窗口 2026-10-22 ~ 2026-10-23。*

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