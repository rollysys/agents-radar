# OpenClaw 生态日报 2026-10-02

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-02 04:40 UTC

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

# OpenClaw 项目动态日报 — 2026-10-02

## 1. 今日速览

OpenClaw 今日保持极高活跃度：过去 24 小时内 Issues 更新 500 条（新开/活跃 305，关闭 195），PR 更新 500 条（待合并 311，合并/关闭 189），单日吞吐量在同类开源 AI 助手项目中处于第一梯队。今日发布了一个 gateway-only 的 `extended-stable`（LTS 等价）版本 **v2026.8.34**，为稳定通道用户提供关键安全与可靠性修复。社区讨论焦点集中在**资源泄漏（SQLite WAL 无限增长、worker 内存泄漏）与 Gateway 启动/稳定性**两大主题，多个 P0 级问题持续吸引大量讨论。整体看，项目迭代速度快、社区参与度高，但主分支稳定性（2026.9.x 系列）仍面临发布阻塞级缺陷的压力。

## 2. 版本发布

### v2026.8.34 (`extended-stable` / LTS 等价通道)
- **性质**：gateway-only 稳定版，基于 2026 年 8 月底的 OpenClaw 快照，叠加关键安全更新、可靠性与性能修复，以及新模型支持等特性。
- **面向用户**：追求稳定、不追逐 2026.9.x 快速通道的用户。
- **迁移注意**：属于累积式补丁发布，无明确破坏性变更公告；从早期 extended-stable 升级建议照常备份数据库与配置。

## 3. 项目进展

今日无大版本合并落地记录展示，但 PR 队列（311 待合并）显示出清晰的主线工作：

- **技术债大扫除**：@steipete 连续提交多个 XL 级重构 PR，包括 [#163234](https://github.com/openclaw/openclaw/pull/163234)（memory inventory 读取移入 history worker，缓解 Gateway 线程阻塞）、[#162612](https://github.com/openclaw/openclaw/pull/162612)（legacy agent roster 读取移入 Doctor）、[#163221](https://github.com/openclaw/openclaw/pull/163221) / [#163247](https://github.com/openclaw/openclaw/pull/163247)（cron 旧 JSON 导入与 job identity 修复退役）、[#163231](https://github.com/openclaw/openclaw/pull/163231)（npm 声明 stub 退役）。7 月兼容性截止日的遗留代码正在系统性清除。
- **发布关键修复回灌**：[#163074](https://github.com/openclaw/openclaw/pull/163074) 将 update、Windows copy、性能与 memory 修复回灌到 2026.9.8 RC，直接回应多个 P0 稳定性问题。
- **CI 可靠性**：[#163254](https://github.com/openclaw/openclaw/pull/163254)（70 个 Vitest 套件首次测试超时修复）、[#163249](https://github.com/openclaw/openclaw/pull/163249)、[#163246](https://github.com/openclaw/openclaw/pull/163246)、[#163251](https://github.com/openclaw/openclaw/pull/163251)（Bun fork b368 pin）系统性改善 CI 信号质量。
- **安全与权限边界**：[#138596](https://github.com/openclaw/openclaw/pull/138596)（CLI-backend agent 的 delegated openclaw.chat 权限）、[#160707](https://github.com/openclaw/openclaw/pull/160707)（Matrix 加密 store 独占所有权）、[#162530](https://github.com/openclaw/openclaw/pull/162530)（插件经 native session resources 流式传文件，避免 base64 注入上下文）。

整体评估：项目正处在“快速功能迭代 + 大规模去债”并行阶段，主分支正向 2026.9.8 发布收敛。

## 4. 社区热点

| Issue | 热度 | 核心诉求 |
|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) Agent SQLite WAL 增至 1.4–2.8 GB，阻塞 Gateway 启动 | **103 评论**，P0，openclap gold shrimp | Windows 单机用户长期运行后数据库膨胀致网关无法启动；即使设置 `wal_autocheckpoint=1000` 也无效，手动 TRUNCATE 后数日复发。这是全项目最热问题，反映资源回收机制的系统性缺陷。 |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) 632-agent 集群 Gateway ready 后 /health 全超时 | 23 评论，P0 | 大规模部署下事件循环被饿死、RSS 持续攀升直至 OOM，暴露 main 分支在多 agent 规模化下的可用性瓶颈。 |
| [#139710](https://github.com/openclaw/openclaw/issues/139710) 插件热重载中途杀死 system-agent turn | 18 评论，P1 | MCP 配置热重载与运行中 turn 的竞态导致用户看到误导性 "unreachable inference / openclaw onboard" 错误。 |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) 2026.9.4 回归：同 session 二次运行挤掉 in-flight turn 导致回复丢失 | 17 评论，P1 | 交互式回复因 "no active tool authority snapshot" 整体丢失，无重试无并行交付，用户对消息丢失容忍度极低。 |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) prepared-model-catalog worker 每小时泄漏 4–5 GB | 14 评论，P0 | 与 provider 无关的冷启动复现，轻度负载下 60–90 分钟从 2.5 GB 涨到 8–10 GB。 |

## 5. Bug 与稳定性（按严重程度）

**P0**
1. [#143524](https://github.com/openclaw/openclaw/issues/143524) SQLite WAL 无限增长阻塞启动 — 尚无 fix PR。
2. [#149538](https://github.com/openclaw/openclaw/issues/149538) 大集群事件循环饿死 + 内存增长 — 尚无 fix PR。
3. [#159662](https://github.com/openclaw/openclaw/issues/159662) / [#160522](https://github.com/openclaw/openclaw/issues/160522) prepared-model-catalog worker 内存泄漏 — 相关性能 PR [#163074](https://github.com/openclaw/openclaw/pull/163074) 可能覆盖。
4. [#160521](https://github.com/openclaw/openclaw/issues/160521) state DB read-admission seal 引发 unhandled rejection 崩溃 — 无 fix PR。
5. [#155859](https://github.com/openclaw/openclaw/issues/155859) Gateway 启动时间随插件数量线性增长（discord/codex/weixin 占满 120s 预算）— 无 fix PR。
6. [#158239](https://github.com/openclaw/openclaw/issues/158239) 旧内核（<5.6，无 openat2）主机上 Gateway 无法启动 — 无 fix PR，影响 NAS 等场景。
7. [#115256](https://github.com/openclaw/openclaw/issues/115256) Desktop app 引发 Gateway boot-loop，doctor 建议被 app 立即回滚 — 无 fix PR。
8. [#115642](https://github.com/openclaw/openclaw/issues/115642) billing cooldown 固定 5 小时，subscription 恢复后仍被禁用 — 无 fix PR。
9. [#115424](https://github.com/openclaw/openclaw/issues/115424) V8 heap OOM 后 restart-recovery 转为 7 次 core dump 循环 — 无 fix PR。

**已修复/关闭的好消息**
- [#161953](https://github.com/openclaw/openclaw/issues/161953)（P0）Windows 上 sessions.create 确定性失败 — **已关闭**。
- [#161828](https://github.com/openclaw/openclaw/issues/161828)（P0）Windows DataCloneError 嵌套 Proxy 问题（超出 #161654 修复范围）— **已关闭**。
- [#85030](https://github.com/openclaw/openclaw/issues/85030) MCP 工具未注入 subagent session（6 👍）— **已关闭**。

**P1 值得关注**：[#97616](https://github.com/openclaw/openclaw/issues/97616) hook/tool 僵尸进程泄漏（自 6 月开）、[#114612](https://github.com/openclaw/openclaw/issues/114612) memory 表无保留策略撑满磁盘、[#91804](https://github.com/openclaw/openclaw/issues/91804) 内部推理泄露给用户（隐私级回归）。

## 6. 功能请求与路线图信号

- **exec 安全 denylist**：[#6615](https://github.com/openclaw/openclaw/issues/6615)（8 👍，已有 linked PR）+ [#71097](https://github.com/openclaw/openclaw/issues/71097) — 两个高度一致的诉求，"allow all except X" 是明显的纳入候选。
- **记忆审计日志**：[#20935](https://github.com/openclaw/openclaw/issues/20935) — MEMORY.md 的 append-only 审计，配合 memory-core 重构 PR #163234，可能近期推进。
- **插件二进制文件原生流转**：[#162530](https://github.com/openclaw/openclaw/pull/162530) 已在推进，避免 base64 进模型上下文，与 [#41949](https://github.com/openclaw/openclaw/issues/41949)（浏览器内容撑爆上下文）诉求同源。
- **billing cooldown 探活恢复 + 手动 reset 命令**（#115642）：社区呼声高、方案描述成熟，属 P0 ux-release-blocker，预计进入下一版本。
- **sessions_send 同步等待选项**：[#115400](https://github.com/openclaw/openclaw/issues/115400) 反映 gatekeeper-agent 模式的广泛使用，多 agent 协作语义是明确方向。

## 7. 用户反馈摘要

- **规模化部署是最大痛点来源**：632-agent 集群（#149538）、727 秒重启循环（#115256）、长会话 11.5k transcripts（#160521）等报告表明重度用户正在把 OpenClaw 推到生产极限。
- **Windows 用户受害明显**：#143524、#161953、#161828 均为 Windows 特有路径/SQLite 问题，其中两个已修复。
- **消息丢失类回归最伤信任**：#148707、#118185（一条 turn 被写成两条不同记录）、#161976（WhatsApp DM 交付失败）——用户普遍反馈"无重试、无提示的直接丢失"不可接受。
- **渠道生态广泛**：Telegram、Discord、Matrix、飞书、微信、WhatsApp 均有活跃报障，说明多渠道接入是核心使用场景，也是回归重灾区（如 #53783、#77717、#114211、#160610）。
- **正面信号**：LTS（extended-stable）通道的推出受到稳定型用户欢迎；多个老牌高赞 issue（#85030）在近期被关闭，修复节奏可感知。

## 8. 待处理积压（建议维护者关注）

| 条目 | 状态 | 说明 |
|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) WAL 膨胀 | 103 评论，9 月开至今无 fix PR | 全站第一热度，建议优先派工 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) 僵尸进程泄漏 | **6 月底开至今 3 个月+**，P1，needs-maintainer-review | 长期运行退化的根因之一 |
| [#91804](https://github.com/openclaw/openclaw/issues/91804) 推理泄露 | 6 月开至今，needs-security-review | 隐私问题，久拖有声誉风险 |
| [#65374](https://github.com/openclaw/openclaw/issues/65374) dreaming 跨 agent 记忆污染 | 4 月开至今，needs-product-decision | 多 agent 用户的数据边界诉求 |
| [#84037](https://github.com/openclaw/openclaw/issues/84037) Codex 稳态 CPU | 5 月开至今，needs-live-repro | 与多个性能 P0 同源 |
| [#114414](https://github.com/openclaw/openclaw/issues/114414) Dated TODO sweep | 机器人自动追踪，多项 TODO 已逾期（zod/markdown-it cooldown 排除项） | 提示依赖治理待清理 |
| PR [#135362](https://github.com/openclaw/openclaw/pull/135362) Xcode 27 构建修复 | 9 月初开，waiting on author | macOS 开发者构建被阻塞 |
| PR [#88084](https://github.com/openclaw/openclaw/pull/88084) /approve 绕过 reply lane | **5 月底开至今** | 审批流程可用性，长期未决 |

**健康度小结**：单日 500 issue / 500 PR 活动量与 189 项合并关闭显示项目交付能力强劲；但 P0 open 数量偏多且多个指向资源管理与 Windows 兼容这一共同根因，建议在 2026.9.8 发布前集中攻坚内存/数据库生命周期问题。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告
**数据日期：2026-10-02**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**高速演化与分化并存**的阶段：以 OpenClaw 为代表的第一梯队项目单日 Issues/PR 活动量达 500 条级别，正经历“快速迭代 + 大规模去债”并行期；中型项目（Hermes Agent、Zeroclaw、CoPaw）社区贡献活跃但普遍遭遇**评审/合并吞吐瓶颈**（多个项目单日合并数为 0）。技术方向上，**Gateway/网关架构拆分、多渠道 IM 接入、MCP 生态集成、供应链安全加固**成为跨项目的共同主线。同时，资源管理（内存泄漏、数据库膨胀）、Windows 兼容、静默失败等工程成熟度问题在几乎所有活跃项目中反复出现，表明生态整体正从“功能验证期”迈入“生产化攻坚期”。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 合并/关闭 | Release | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（开/活 305，闭 195） | 500（待 311，闭 189） | 189 | ✅ v2026.8.34 (LTS) | ⭐⭐⭐⭐ 吞吐第一梯队；P0 偏多（资源泄漏、规模化），交付能力强 |
| **Hermes Agent** | 47（闭 3） | 50（待 50，闭 0） | 0 | ❌ | ⭐⭐⭐ 报告—修复闭环快，但 0 合并、维护带宽为最大风险 |
| **Zeroclaw** | 50 | 50（待 50，闭 0） | 0 | ❌ | ⭐⭐⭐ 研发动能强（v0.9.0 网关拆分），但 S0 安全问题积累、stacked PR 评审瓶颈 |
| **NanoClaw** | 4 | 26（待 11，闭 15） | 15 | ❌ | ⭐⭐⭐⭐ 单日 15 合并，发布前硬化阶段，方向清晰 |
| **CoPaw** | 10（闭 0） | 9（待 7，闭 2） | 0 | ❌ | ⭐⭐⭐ 贡献管道饱满，多 Provider/CJK 修复推进，合并暂停 |
| **NanoBot** | 1（开 1，闭 0） | 17（待 13，闭 4） | 4 | ❌ | ⭐⭐⭐ 收尾清理阶段；P0/P1 修复 PR 积压超一个月 |
| **PicoClaw** | 2 | 14（待 12，闭 2） | 0 | ❌ | ⭐⭐ 外部贡献质量高，但 CRITICAL 官网 TLS 过期 22 天无响应 |
| **LobsterAI** | 7（历史 stale 标记） | 7（全部关闭） | 7 | ❌ | ⭐⭐⭐ 集中收尾 7 个 PR，技术债清理积极；社区新输入低谷 |
| **Moltis** | 0 | 2（待 2） | 0 | ❌ | ⭐⭐ 低强度维护型，贡献聚焦但社区冷清 |
| **TinyClaw** | 0 | 3（全部关闭，2 月老 PR） | 3 | ❌ | ⭐ 单人驱动，bus factor 风险高，节奏缓慢 |
| **IronClaw** | 2 | 1 | 0 | ❌ | ⭐⭐ 低产出，XL PR 积压 52 天，规划多于交付 |
| NullClaw / ZeptoClaw / EasyClaw | 0 | 0 | 0 | ❌ | 无活动 |

---

## 3. OpenClaw 在生态中的定位

**优势**：
- **社区规模断层领先**：单日 500/500 的 Issues/PR 活动量是第二名项目（Zeroclaw/Hermes，约 50 条）的 10 倍，189 项合并关闭显示交付能力远超同侪。
- **发布工程成熟**：唯一建立了双通道发布体系（2026.9.x 快速通道 + extended-stable LTS），v2026.8.34 为稳定型用户提供累积式补丁。
- **生态引力**：LobsterAI 已在架构上收敛为 OpenClaw 引擎（删除 yd_cowork 与 Claude Agent SDK 死代码），NanoClaw 通过 `claude -p` CLI 与 OpenClaw 订阅生态交互，OpenClaw 已具备**平台/上游标准**属性。

**技术路线差异**：
- OpenClaw 与 Hermes、NanoClaw 同属“Gateway + 多渠道 IM + 多 agent”路线，但 OpenClaw 的渠道覆盖（Telegram/Discord/Matrix/飞书/微信/WhatsApp）最广，重度用户已推进到 632-agent 集群规模。
- Zeroclaw 选择 Rust + v0.9.0 独立网关进程 + RPC parity 的更重架构改造；NanoBot/CoPaw 走 Python 轻量路线并深度绑定国产模型（DashScope）与第三方 provider。

**短板**：主分支 P0 数量偏多（WAL 膨胀、事件循环饿死、worker 内存泄漏等 9 项），资源生命周期管理与 Windows 兼容是 2026.9.8 发布前的集中攻坚点。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **资源泄漏/内存治理** | OpenClaw（#143524 WAL 1.4–2.8GB、#159662 每小时泄 4–5GB）、Zeroclaw（#8642 MCP schema RSS 无界增长）、OpenClaw #97616 僵尸进程 | 长时运行下的数据库/进程/内存生命周期管理是全生态最大共性痛点 |
| **Gateway/网关架构拆分** | Zeroclaw（v0.9.0 独立网关 + RPC parity 栈）、OpenClaw（memory 读取移入 history worker 缓解 Gateway 阻塞 #163234）、Moltis（TLS/WS 网关兼容） | 网关进程化与职责分离成为架构共识 |
| **静默失败不可接受** | OpenClaw（#148707 回复丢失、#91804 推理泄露）、Hermes（#131184/#131174 媒体静默失败）、CoPaw（#8076 reload 静默丢弃轮次）、NanoClaw（#3456 审批卡静默拒绝） | 用户强烈要求失败信号上抛、消息投递有重试与可观测性 |
| **MCP 稳定性与安全** | Moltis（#1290 MCP 会话自愈）、NanoBot（#5678 SSRF 加固、PR #5536 fail-closed）、OpenClaw（#139710 热重载竞态） | MCP 子系统的会话韧性、沙箱边界、热重载安全 |
| **供应链/依赖安全** | NanoClaw（CI pin、36+ CVE 清理）、CoPaw（#8065 路径穿越）、Hermes（#131171 依赖 bump）、PicoClaw（x/crypto 安全升级 stale） | 依赖 pin、CVE 门禁、审计 skill 成为发布前置项 |
| **多 Provider/模型兼容** | CoPaw（DeepSeek/gpt-6/Qoder 三连报障）、NanoBot（DashScope 原生协议）、LobsterAI（#943 模型故障降级）、TinyClaw（Claude CLI） | Provider 中立抽象 + 故障自动降级是普遍需求 |
| **审批/权限安全边界** | Zeroclaw（#11198 子代理越权、#10968 无人值守审批失效）、NanoClaw（#3833 审批卡 TTL）、OpenClaw（#138596 delegated 权限） | 多 agent 委托场景下的权限传播与审批闭环 |
| **CJK/中文用户体验** | CoPaw（#2975 Markdown 渲染、CJK 强调边界）、LobsterAI（网易内部用户）、OpenClaw（微信/飞书渠道） | 中文排版质量是中文生态项目的系统性短板 |

---

## 5. 差异化定位分析

| 维度 | 代表项目 | 关键差异 |
|---|---|---|
| **平台型全家桶** | OpenClaw | 全渠道 IM + 桌面端 + 多 agent 集群 + LTS 通道，目标用户为从个人到生产的全谱系 |
| **架构重塑型** | Zeroclaw | Rust 实现、v0.9.0 网关进程化 + IPC + WASM UI 评估，面向深度贡献者与高安全要求场景 |
| **学术/轻量型** | NanoBot (HKUDS)、TinyClaw | Python/TS 轻量实现，subagent 编排与协议抽象为学术探索方向；TinyClaw 单人维护、Telegram 单通道 |
| **国产模型生态** | CoPaw、NanoBot、LobsterAI | DeepSeek/DashScope/网易内部模型适配，Console/WebUI 本地部署为主流场景 |
| **安全硬化先锋** | NanoClaw | 单日 6 条供应链安全 PR + CVE 门禁 + 审批卡体系，明显处于发布前硬化阶段 |
| **垂直能力深化** | IronClaw（浏览器身份/Passport 加密持久化）、Moltis（MCP/TLS 网关韧性） | 不追求全功能，押注单一关键能力的生产级打磨 |
| **嵌入式/边缘** | PicoClaw | 32 位 ARM 自更新、移动 TUI，面向树莓派类设备与移动端 |

---

## 6. 社区热度与成熟度分层

- **快速迭代期**：OpenClaw（功能迭代与去债并行）、Zeroclaw（v0.9.0 大改造）、CoPaw（Advisor Mode 旗舰功能开发中）
- **质量巩固/发布硬化期**：NanoClaw（15 合并全部指向安全与 CI）、Hermes（当日 issue 当日 fix PR，等评审）、NanoBot、LobsterAI（收尾式清理）
- **维护/低活跃期**：PicoClaw、Moltis、IronClaw、TinyClaw
- **停滞**：NullClaw、ZeptoClaw、EasyClaw

**成熟度关键信号**：社区报告质量（Hermes/Zeroclaw 用户附最小复现与代码定位）、dogfooding 闭环（Hermes/CoPaw 用户用 AI 助手本身写 bug 报告）、发布工程（仅 OpenClaw 有 LTS，NanoClaw 正在建立 rc 流程）是区分项目成熟度的三个有效指标。

---

## 7. 值得关注的趋势信号

1. **评审带宽成为生态首要瓶颈**：Hermes/Zeroclaw/CoPaw 单日 0 合并但 PR 队列饱满，多个 P0/P1 安全修复积压 4–6 周（NanoBot #5536、PicoClaw #3377 TLS 22 天）。**对开发者的启示**：AI 辅助代码审查与 PR 分级机制的价值凸显。

2. **消息投递可靠性是用户信任的底线**：跨 5+ 项目的“静默丢失/静默失败”投诉表明，agent 产品的核心竞争力正从“能做什么”转向“不丢什么”。重试、幂等、失败上抛应作为一等设计约束。

3. **网关进程化成为架构收敛点**：Zeroclaw v0.9.0、OpenClaw worker 拆分、Moltis 网关兼容性工作殊途同归——单体 runtime 向“网关 + worker + IPC”演进是规模化多 agent 的必经之路。

4. **生产化长跑暴露资源管理欠账**：WAL 膨胀、内存泄漏、僵尸进程在头部项目集中爆发，说明快速功能迭代期的资源生命周期债务正在到期，**可观测性（token/CPU/内存用量面板）是 Hermes/CoPaw/NanoClaw 共同的产品化方向**。

5. **安全从合规走向纵深**：供应链 pin、审批卡 TTL、子代理权限传播（Zeroclaw #11198）、浏览器凭据加密（IronClaw #2358）、SSRF fail-closed（NanoBot）——多 agent 委托场景下的**权限边界与审计日志**（OpenClaw #20935 记忆审计）是下一阶段安全建设重点。

6. **中文/国产模型生态形成独立脉络**：CoPaw、NanoBot、LobsterAI 围绕 DeepSeek/DashScope/微信/飞书构建差异化，但 CJK 渲染质量系统性滞后，是中文生态的明确机会窗口。

---

*报告基于 2026-10-02 各项目 GitHub 公开动态快照生成，仅供技术选型参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-10-02

## 1. 今日速览

NanoBot（HKUDS/nanobot）今日保持中等活跃度：过去 24 小时共有 1 条 Issue 更新（新开 1，关闭 0）和 17 条 PR 更新（待合并 13，合并/关闭 4）。今日最值得关注的是 Issue #6000 与配套修复 PR #6001 的“issue + 修复”组合快速出现，显示社区贡献者响应迅速。多个长期挂起的 PR（含 3 月提交的老 PR）于 10-01/10-02 被集中关闭，表明维护者正在清理 PR 队列、聚焦主线。今日无新版本发布。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日关闭的 PR 共 4 条，其中 3 条为 10-01 关闭（清理性质），1 条 10-02 关闭：

- [PR #5941 (CLOSED)](https://github.com/HKUDS/nanobot/pull/5941) — feat(webui): 连接已存在的远程 nanobot 实例。允许本地 WebUI 直连服务器上已运行的实例，免端口转发和独立启动器。此功能被关闭可能意味着方案被否决或需重做，值得关注后续动向。
- [PR #5999 (CLOSED)](https://github.com/HKUDS/nanobot/pull/5999) — refactor: 移除未使用的 runtime 与 WebUI 辅助函数，清理技术债。
- [PR #2095 (CLOSED)](https://github.com/HKUDS/nanobot/pull/2095)、[PR #2094 (CLOSED)](https://github.com/HKUDS/nanobot/pull/2094) — 3 月提交的 `read_image` 多模态工具与 subagent 显式模型配置 PR 被关闭（均标 conflict），长期积压的冲突 PR 得到处置。

整体来看，项目正处于“收尾 + 清理”阶段：主线功能推进有限，但维护者主动清理了冲突/过期 PR，待合并队列（13 条）中仍有多个实质性功能等待合入。

## 4. 社区热点

- [Issue #6000 (OPEN)](https://github.com/HKUDS/nanobot/issues/6000) — 今日唯一新开 Issue，也是今日热点。@GZY-SUPER-HACKER 指出 `channels.sendProgress` 默认为 `true`（`config/schema.py:33`、`channels/base.py:31`），但默认安装下每轮至多输出一行，行为与 `false` 无异；根因不在单条指令抑制，而在 `templates/agent/tool_contract.md` 自相矛盾——开关只管“投递”，但待投递的进度文本根本未被生成。诉求核心：**配置语义与实际行为不一致，文档/模板内部矛盾**，属于开发者体验与可预期性问题。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| **P0** | [PR #5953](https://github.com/HKUDS/nanobot/pull/5953) `WriteFileTool`/`EditFileTool`/`ApplyPatchTool` 原地截断写入，导致**撕裂读**（并发读者看到半写文件）和崩溃窗口数据丢失，提出原子写修复 | 修复 PR 待合并 |
| **P1** | [PR #5536](https://github.com/HKUDS/nanobot/pull/5536)（Fixes #4072）受限 shell 无法通过相对 symlink/shell 扩展强制工作区边界，无沙箱时改为 **fail closed**，属安全修复 | 修复 PR 待合并 |
| **P2** | [Issue #6000](https://github.com/HKUDS/nanobot/issues/6000) `sendProgress: true` 实际不生效，tool_contract.md 自相矛盾 | 修复 PR [#6001](https://github.com/HKUDS/nanobot/pull/6001) 已提交 |
| **P2** | [PR #5483](https://github.com/HKUDS/nanobot/pull/5483)（回归修复）延迟消息导致**已删除会话被重建** | 修复 PR 待合并 |
| **P2** | [PR #5980](https://github.com/HKUDS/nanobot/pull/5980) 附件 >1MiB Base64 WS 帧导致 gateway 1009 断连且 TUI 丢失未确认草稿 | 修复 PR 待合并 |
| **P2** | [PR #5678](https://github.com/HKUDS/nanobot/pull/5678)（安全）`resolve_url_target` 接受空 DNS 结果，SSRF 防护加固 | 修复 PR 待合并 |

## 6. 功能请求与路线图信号

- **Subagent 编排持续深化**：[PR #5985](https://github.com/HKUDS/nanobot/pull/5985)（session 级任务消息传递与定向取消，叠加于 #5976）显示 subagent 生命周期管理是当前主线方向之一。
- **国产模型接入**：[PR #5398](https://github.com/HKUDS/nanobot/pull/5398) DashScope（百炼）原生协议 provider，解锁完整参数面（原生 thinking 等），有较大概率进入下个版本。
- **协议抽象化**：[PR #5825](https://github.com/HKUDS/nanobot/pull/5825) provider 中立的结构化决策客户端，替换 JEV 专用实现，是架构层面的路线图信号。
- **多客户端体验**：#5980 附件二进制 HTTP 上传、#5941（已关闭）远程实例连接，表明 WebUI/TUI 作为一等客户端的投入仍在继续，但远程直连方案方向未定。

## 7. 用户反馈摘要

今日 Issue 量少，可提炼的痛点有限。从 #6000 可见：
- **配置可预期性差**：默认开关（`sendProgress: true`）名不副实，用户按文档配置后行为不符预期，且文档（tool_contract.md）内部自相矛盾，排查成本高。
- 贡献者 @GZY-SUPER-HACKER 以“issue + 当日修复 PR”的方式参与，说明高级用户具备深度源码级排障能力，社区技术氛围较强。

## 8. 待处理积压

提醒维护者关注以下长期未合并的重要 PR：

- [PR #5339](https://github.com/HKUDS/nanobot/pull/5339)（08-11 提交，52 天）— 临时聊天消息丢弃校验，至今未合并
- [PR #5412](https://github.com/HKUDS/nanobot/pull/5412)（08-17，46 天）— gateway 子进程日志缓冲修复，一行生产代码改动，建议尽快合入
- [PR #5483](https://github.com/HKUDS/nanobot/pull/5483)（08-22，41 天）— 会话删除回归修复
- [PR #5536](https://github.com/HKUDS/nanobot/pull/5536)（08-25，38 天）— **P1 安全修复**，积压近 6 周，建议优先处理
- [PR #5601](https://github.com/HKUDS/nanobot/pull/5601)（08-29，34 天）、[PR #5698](https://github.com/HKUDS/nanobot/pull/5698)（09-08，24 天）— WebUI 状态一致性修复

**健康度小结**：PR 队列消化速度偏慢（13 条待合并中多条积压超一个月，含 P0/P1 修复）；Issue 响应与贡献者质量良好。建议优先合并安全与数据完整性修复（#5536、#5953），并推进 #6000/#6001 的快速闭环。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 — 2026-10-02

## 1. 今日速览

过去 24 小时项目保持高强度活跃：新增/活跃 Issue 50 条、更新 PR 50 条，但**无任何 PR 合并或关闭、无新版本发布**。主线工程明显集中在 **v0.9.0 网关拆分（gateway split）** 的大规模 RPC parity 栈上，由核心贡献者 @JordanTheJet 推动的多个 XL 级 PR 正排队等待评审。同时，安全类 Bug（S0 级配置覆写、代理内存越权）持续积累，是当前项目健康度的主要风险点。整体评估：**研发动能强，但合入吞吐停滞，评审瓶颈值得警惕**。

## 2. 版本发布

今日无新版本发布。值得注意的是多个 Issue/PR 已打上 `release:v0.8.6`（如 [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387)、[#10993](https://github.com/zeroclaw-labs/zeroclaw/issues/10993)、[#10999](https://github.com/zeroclaw-labs/zeroclaw/issues/10999)）和 `release:v0.9.0` 标签，预示两个版本正在并行规划中。

## 3. 项目进展

今日无合并/关闭记录（0 merged / 0 closed），但待合入管道非常充实，主线为 **v0.9.0 独立网关进程（#7432）**：

- **PR 栈系列**（@JordanTheJet）：
  - [#11412](https://github.com/zeroclaw-labs/zeroclaw/pull/11412) 网关 dashboard chat socket 经 core 提供（XL，依赖 #11351 栈）
  - [#11376](https://github.com/zeroclaw-labs/zeroclaw/pull/11376) / [#11374](https://github.com/zeroclaw-labs/zeroclaw/pull/11374) cron/memory 与 config 只读路由迁移至 zeroclaw-gw
  - [#11169](https://github.com/zeroclaw-labs/zeroclaw/pull/11169) SOP RPC parity；[#11172](https://github.com/zeroclaw-labs/zeroclaw/pull/11172) config parity；[#11176](https://github.com/zeroclaw-labs/zeroclaw/pull/11176) cron/skills/personality parity 并**关闭 cron 预审批绕过**
  - [#11185](https://github.com/zeroclaw-labs/zeroclaw/pull/11185) 会话拥有 turn、viewer 挂载（对应 [#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759)）
  - [#11274](https://github.com/zeroclaw-labs/zeroclaw/pull/11274) RPC 客户端发送凭据前验证端点 OS 账户
- **测试加固系列**（@IftekharUddin）：[#11352](https://github.com/zeroclaw-labs/zeroclaw/pull/11352)（RPC 测试配置写锁隔离）、[#11354](https://github.com/zeroclaw-labs/zeroclaw/pull/11354)（31 个 file_read 测试固定路径改 per-test TempDir）、[#11396](https://github.com/zeroclaw-labs/zeroclaw/pull/11396)（macOS 管道计时 flaky 修复）
- **Windows/macOS 平台修复**：[#11399](https://github.com/zeroclaw-labs/zeroclaw/pull/11399)（zerocode 侧边栏并发写）、[#11362](https://github.com/zeroclaw-labs/zeroclaw/pull/11362)（SOP 文件替换被读者持锁阻塞）、[#11424](https://github.com/zeroclaw-labs/zeroclaw/pull/11424)（macOS SIGBUS fail-fast）
- **安全修复**：[#11423](https://github.com/zeroclaw-labs/zeroclaw/pull/11423) OIDC 凭据保留字符编码修复

**判断**：v0.9.0 网关拆分的 RPC parity 工作已接近成型，但大量 stacked PR 依赖链（#11351 → #11374/#11376/#11412）形成合入瓶颈——一旦底部 PR 落地，后续可快速跟进。

## 4. 社区热点

| Issue | 评论 | 热点内容 |
|---|---|---|
| [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) Session 持久化契约归属 tracker | 16 | 四个并行工作流争夺同一会话持久化契约，社区在争论分层顺序与所有权决策 |
| [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) Rust/WASM UI 评估 | 10 | WebAssembly-first 路线下是否用 Dioxus/Leptos/Yew 替代 React+Vite 的技术选型讨论，目前 `needs-author-action` |
| [#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) WebSocket 断连不取消 turn | 7 | p1 已接受，对应 PR #11185 已就绪，断线重连场景是网关聊天用户的核心诉求 |

**诉求分析**：讨论集中在**架构层决策**（契约所有权、技术栈选型）而非日常使用问题，反映社区参与者以深度贡献者为主，项目处于架构重塑期。

## 5. Bug 与稳定性（按严重程度）

**S0 — 数据丢失/安全**
- [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) `Config::save()` 将 109KB/25 agent 的 config.toml 覆写为 702 字节空配置（p0，已接受，**未见专门 fix PR**，#11352 等测试隔离 PR 有间接关联）
- [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) 委托内存工具丢失 principal scope，子代理可越权访问（p0，v0.9.0 目标，#11176 部分涉及 memory parity）
- [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) 无人值守 turn（cron/SOP/子代理）无 ApprovalManager，风险审批静默失效（p0，已接受；#11176 的 cron 预审批绕过修复直接对应）

**S1 — 工作流受阻**
- [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) SOP 引擎在记录 schema 拒绝前就推进后续步骤（p0，暂无 fix PR）
- [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) cron agent job 无墙钟超时，锁仅在进程启动时清理（p1，已接受，暂无 fix PR）
- [#11294](https://github.com/zeroclaw-labs/zeroclaw/issues/11294) CI flaky 测试与 150ms sleep 竞态（p2，低风险但阻塞 workflow；#11352/#11354 系列测试 PR 正在系统性治理此类问题）

**S2 — 体验退化**
- [#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799) 长驻 ephemeral daemon 多核 CPU 空转（p1，needs-repro，暂无 fix）
- [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) zerocode 忽略启动目录（#10609 **回归**，v0.8.6 目标，暂无 fix PR）
- [#10617](https://github.com/zeroclaw-labs/zeroclaw/issues/10617) Claude Fable 5.1 thinking display=updates 返回 400（p1，暂无 fix PR）
- [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) MCP schema 克隆导致 RSS 无界增长（p1，help wanted）
- [#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028) Windows Ctrl+C 强制退出（exit code 1073741510）
- [#9190](https://github.com/zeroclaw-labs/zeroclaw/issues/9190) Reliable provider API key 轮换选中但无法应用

## 6. 功能请求与路线图信号

- **网关/IPC（v0.9.0 已锁定）**：[#11001](https://github.com/zeroclaw-labs/zeroclaw/issues/11001)（本地 IPC 全覆盖，blocked）、[#11002](https://github.com/zeroclaw-labs/zeroclaw/issues/11002)（zeroclaw-gw 独立进程）、[#11003](https://github.com/zeroclaw-labs/zeroclaw/issues/11003)（插件 webhook 跨 IPC）——已有 #11412/#11376/#11374 等 PR 直接支撑，**大概率进入 v0.9.0**
- **会话生命周期**：[#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) 对应 PR #11185 已就绪，接近落地
- **身份与安全**：[#10573](https://github.com/zeroclaw-labs/zeroclaw/issues/10573) pairing token 绑定 roster 用户（基础依赖已合并，v1 方案已定）、[#10891](https://github.com/zeroclaw-labs/zeroclaw/issues/10891) channel provenance 贯穿运行时（in-progress）
- **观察到的用户侧需求**：[#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943) 实时语音通道（backend-agnostic）、[#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531) 委托子代理进度可见性、[#9506](https://github.com/zeroclaw-labs/zeroclaw/issues/9506) Email Reply-All 支持——均在接受/进行中，但优先级次于 v0.9.0 主线
- **不确定性**：[#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) Rust/WASM UI 路线仍 needs-author-action，是路线图上最大悬念

## 7. 用户反馈摘要

- **真实部署痛点**：[#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799) 用户报告 daemon 17 小时运行消耗 140-177% CPU，附带了详细 lsof 证据，反映长驻生产环境的可观测性不足
- **Windows 用户被系统性忽视的感受**：[#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028)、[#11362](https://github.com/zeroclaw-labs/zeroclaw/pull/11362)、[#11399](https://github.com/zeroclaw-labs/zeroclaw/pull/11399) 均为 Windows 文件锁/信号处理问题，好消息是本周密集出现针对性修复
- **数据安全感缺失**：[#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495)（配置被清空）和 [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198)（内存越权）这类 S0 报告会直接动摇多 agent 生产用户的信任
- **回归挫败感**：[#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) "Same defect as #10609, regressed again" 表明 zerocode cwd 处理第二次回归，用户耐心在消耗
- **正面信号**：报告质量普遍很高（含复现命令、severity 分级、结构化模板），说明核心用户群专业度高、参与深度强

## 8. 待处理积压

- **#10495（p0/S0 配置覆写）**：8 月 31 日创建、已接受，至今无直接 fix PR，建议维护者优先排期
- **#8642（MCP 内存增长）**：标记 `help wanted`，7 月至今未解决，WSL2 用户 OOM 困扰已久
- **#9799（CPU 空转）**：`needs-repro` 状态，需要更多环境数据推进
- **#8132（WASM UI 决策）**：6 月开题，`needs-author-action`，阻塞后续 Web 技术栈投入
- **#8907（zerocode 插件目录面板）**：前提已合并但本体搁置，TUI 用户体验债
- **合入瓶颈提醒**：今日 0 合并、50 待合 PR 中含大量 stacked XL 依赖链，建议维护者集中评审 #11351 底座以解锁整条 v0.9.0 管道

---
*数据来源：Zeroclaw GitHub 过去 24 小时 Issues/PR/Release 数据快照。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-10-02

## 1. 今日速览

今日 Hermes Agent 保持高活跃度：过去 24 小时新增/活跃 Issue 47 条、关闭 3 条，新增 PR 50 条（全部待合并，合并数为 0）。社区提交以 Bug 报告为主，集中在 Desktop 渲染重复、会话状态（session-state）、消息投递和 Windows 安装等方向；同时贡献者响应迅速，多个当日新报 Issue（如 #131099、#131200、#131129）已有对应 fix PR 提出。无新版本发布，50 条 PR 堆积待审，代码审查/合并吞吐是当前维护侧的明显瓶颈。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 合并（0/50），但待合并队列质量较高，多个 PR 直接修复当日热点 Bug，反映社区“报告—修复”闭环速度快：

- **#131110** fix(agent): 压缩时将 in-flight 用户 replay 视为原 durable 行的替换，防止重复活动行 — 直接针对 P1 级会话重复问题（[#117750](https://github.com/NousResearch/hermes-agent/issues/117750) 同族）
- **#131148** fix(gateway): warm-up 期间保持入站 gate 关闭，防止首回合竞态（P1）
- **#130525** [type/security, P1] profile 导出/分发不再携带或覆盖凭据存储（`.op.env`、`mcp-tokens/`、`vault/` 等）— 重要安全修复
- **#131106** fix(sessions): 支持按 ID / filter 归档 live session，修复 #131099
- **#131201** fix(gateway): 对平台 MIME 仲裁媒体类型，修复 .dxf 误报 image/* 被静默丢弃（#131200）
- **#131193** fix(gateway): standalone 容器启动不再 reconcile 共享卷的 root gateway，配合 #131183 的多容器 bug 簇
- **#131097** [perf] 空白行 heredoc 导致危险命令检测回溯冻结（GIL 持有）— 修 #131096
- **#131171** [security] bump brace-expansion / js-yaml / undici / yaml 至已修补版本

## 4. 社区热点

- **#127665（35 评论）**：Desktop 同一回复渲染两次的回归变体 — 与 #127288 症状相同但走不同 fold，用户在已含 #127282 修复的 build 上复现。这是 Desktop 流式渲染正确性的持续痛点，讨论热度最高。[链接](https://github.com/NousResearch/hermes-agent/issues/127665)
- **#117750（P1）**：上下文压缩修剪 carried-forward tool payload 后，展示历史重复且乱序 — 与今日 PR #131110 直接相关，是会话状态类别中严重度最高的一条。[链接](https://github.com/NousResearch/hermes-agent/issues/117750)
- **#108335**：1Password service-account 模式下 `op item get` 缺 `--vault` 选择器导致填充失败 — 安全边界类配置问题。[链接](https://github.com/NousResearch/hermes-agent/issues/108335)
- **#131055（今日新报）**：Linux Desktop 二次启动污染 sandbox fallback 标记 → 粘性 `--no-sandbox` → renderer SIGILL 循环。[链接](https://github.com/NousResearch/hermes-agent/issues/131055)

## 5. Bug 与稳定性（按严重度）

| 级别 | Issue | 概述 | Fix PR |
|---|---|---|---|
| P0 | [#131118](https://github.com/NousResearch/hermes-agent/issues/131118) | Discord auto-thread 固定父频道 topic，第二回合重渲染 session prompt（缓存失效） | 暂无 |
| P1 | [#117750](https://github.com/NousResearch/hermes-agent/issues/117750) | 压缩修剪导致显示历史重复/乱序 | #131110（部分） |
| P1 | [#130987](https://github.com/NousResearch/hermes-agent/issues/130987)（已关闭） | gateway restart 对已自愈的 cron 运行空等最长 30 分钟拒服 | 已关闭 |
| P2 | [#131055](https://github.com/NousResearch/hermes-agent/issues/131055) | Linux sandbox fallback 标记中毒 | 暂无 |
| P2 | [#131172](https://github.com/NousResearch/hermes-agent/issues/131172) | Dashboard "New chat" 遗留孤儿 PTY，返回被拒 | 暂无 |
| P2 | [#130294](https://github.com/NousResearch/hermes-agent/issues/130294) | Windows uv sync 安装 "failed to remove directory *.data" | 暂无 |
| P2 | [#131199](https://github.com/NousResearch/hermes-agent/issues/131199) | Windows 首装依赖阶段失败 | 暂无 |
| P2 | [#131133](https://github.com/NousResearch/hermes-agent/issues/131133) | Windows 下 GUI 子进程保持 stdout 管道导致 terminal 前台调用永久挂起 | 暂无 |
| P2 | [#131182](https://github.com/NousResearch/hermes-agent/issues/131182) | `/voice tts` 启用但回复不朗读 | 暂无 |
| P2 | [#131183](https://github.com/NousResearch/hermes-agent/issues/131183) | 多容器（Podman 共享卷）5 个启动锁/配置隔离 bug 簇 | #131193（部分） |
| P2 | [#131177](https://github.com/NousResearch/hermes-agent/issues/131177) | macOS 热插拔麦克风后 wake word 监听死循环 | 暂无 |

安全相关：#130525（P1，profile 泄露凭据）已提 fix PR；#131184 / #131174 为媒体下载静默失败（消息投递类）。

## 6. 功能请求与路线图信号

- **#131119**：cron per-job `max_tokens`（当前按模型全上下文长度请求，成本浪费明显）— 尚无 PR，诉求清晰，较可能被纳入下一版本。
- **#131097**（已提 PR）：dangerous-command 检测性能修复，附 #131096。
- **#131197**（已提 PR）：`/tasks` 显示各运行子任务模型与 token 用量（属 #6779 任务可观测性方向）。
- **#131170**（已提 PR）：Discord App 状态栏显示上下文窗口用量 — 与 #6232（gateway 回复显示模型 + thinking level，3👍）同属“运行时可观测性”信号，维护者应关注该主题的产品化。
- **#121896**：Desktop 插件 SDK door map 收尾（Settings → Appearance），承接已落地的十 hooks，是插件生态路线图的延续。
- **#6429**：Hindsight 记忆保留 tool calls 选项 — 长期 open，尚无进展。

## 7. 用户反馈摘要

- **Desktop 重复渲染是最大痛点**：#127665 / #127621 多用户在已修复 build 上复现，说明流式折叠（fold）逻辑存在多路径缺陷，补丁式修复未根治。
- **Windows 安装体验差**：#130294、#131199 连续多日新增，uv 依赖安装失败是新手第一印象的主要流失点。
- **静默失败引发不信任**：#131184、#131174、#131200 等媒体处理问题共同模式是“错误被吞掉，agent 无感知、用户无提示”，用户明确要求失败信号上抛。
- **多容器/多实例部署成为新场景**：#131183、#131172 表明高级用户在共享卷、多 profile 方向使用强度上升，隔离设计需要系统性梳理。
- 正面信号：Issue 报告质量高（多数附最小复现与代码定位），且大量标注"AI-generated disclosure"，用户在用 Hermes 自身做 bug 报告，形成独特反馈闭环。

## 8. 待处理积压

- **50 条 PR 全部待合并、0 合并**：其中含 3 个 P1 级修复（#131110、#131148、#130525 安全 PR），建议维护者优先审查，避免修复滞后引发重复报告。
- **#87444**（2026-08-16 起 open）：延迟更新提示输出裸 ANSI 转义码，长期无人认领。
- **#17803**（2026-04-30 起，needs-repro）：MiMo 模型 tool_call_id 缺失，挂起 5 个月。
- **#6232 / #6429**（4 月 open，needs-decision）：gateway 响应头、Hindsight tool calls 保留，需维护者给出取舍结论。
- **#124584**：源码安装默认走 `main` bleeding-edge 通道，普通 `hermes update` 拉取未发布构建 — 属发布/渠道策略问题，影响所有源码用户，建议尽快决策。

**健康度小结**：社区贡献活跃、报告质量高、修复响应快（当日 Issue 当日 PR），但合并吞吐为零、P0/P1 修复积压，维护带宽是当前最大风险点。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-10-02）

## 1. 今日速览

PicoClaw 今日保持中等活跃度：过去 24 小时共有 2 条 Issue 活跃（均未关闭）、14 条 PR 更新（12 待合并、2 关闭）、0 个新版本发布。值得注意的是，社区贡献者 @x1F916 集中提交了 5 个高质量修复 PR（#3399–#3403），覆盖 agent 会话管理、channel 重载、配置持久化和更新器架构匹配等多个核心模块，是本日最主要的开发动能。同时 **picoclaw.io 官网 TLS 证书过期已持续 22 天且被标记 stale**（#3377，CRITICAL），是当前最突出的运营健康隐患。多个 dependabot 依赖升级 PR 也处于 stale 状态，需维护者关注。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日无已合并 PR，但有 2 个 PR 被关闭：

- **[#1544](https://github.com/sipeed/picoclaw/pull/1544) [CLOSED]** — @xuwei-xy 于 3 月提交的合并性修复 PR（聚合 #1514/#1513/#1512/#1510/#1509），今日被关闭。属于长期积压清理。
- **[#3376](https://github.com/sipeed/picoclaw/pull/3376) [CLOSED]** — @luisgdev 提交的 DeltaChat 通道初始化修复（将 deltachat 注册为 custom channel 以解决配置校验错误 `unknown type "deltachat"`，关联 [#3265](https://github.com/sipeed/picoclaw/issues/3265)），今日关闭，可能已被其他方案取代或需要重新提交。

**待合并的开发主线（均为近期活跃 PR）：**

- **[#3403](https://github.com/sipeed/picoclaw/pull/3403)** — 修复 `spawn` 等异步工具结果被错误路由到默认 agent 主会话的问题，跨会话结果串扰是影响多用户部署正确性的关键修复。
- **[#3402](https://github.com/sipeed/picoclaw/pull/3402)** — context manager 中正确解析归属 agent（rebase 自 #3316），修复非默认路由 agent 的会话组装错误。
- **[#3401](https://github.com/sipeed/picoclaw/pull/3401)** — `Manager.Reload` 同步化并修复 nil channel 导致 gateway panic（`manager.go:1956`）的问题。
- **[#3400](https://github.com/sipeed/picoclaw/pull/3400)** — 修复多 key 模型配置保存时丢失 api_keys 和 enabled 标志的问题，影响配置迁移后的数据完整性。
- **[#3399](https://github.com/sipeed/picoclaw/pull/3399)** — 修复 32 位 ARM 上 `picoclaw update` 误装 arm64 包（`arm` 是 `arm64` 的子串导致匹配错误）。
- **[#3414](https://github.com/sipeed/picoclaw/pull/3414)** — 新功能：agent 单轮 wall-clock 时间预算，超时后让 agent 停止调度新工具并输出摘要，防止无限循环消耗 token。

**整体评估**：本日以代码审查和 PR 活跃为主，无实际合入；#3400–#3403 若合并将显著提升多 agent、多通道场景的稳定性。

## 4. 社区热点

- **[#3377](https://github.com/sipeed/picoclaw/issues/3377) [CRITICAL, stale]** — picoclaw.io TLS 证书于 2026-09-10 过期，所有浏览器/TLS 客户端无法访问项目主页。3 条评论、2 个 👍，且 Issue 已被标记 stale。这反映社区对**基础设施运维响应速度**的强烈不满：一个 CRITICAL 级别、影响所有新用户首次接触点的问题三周无修复。
- **[#3391](https://github.com/sipeed/picoclaw/issues/3391) [stale]** — pico 客户端（移动 TUI）将多行输入按换行拆分为多条消息，破坏诗歌、代码块等内容的消息结构。1 条评论，同样被标 stale。诉求：移动端用户需要保留原始消息格式的输入方式。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 Critical | [#3377](https://github.com/sipeed/picoclaw/issues/3377) 官网 TLS 证书过期，站点全站不可访问 | ❌ 无 fix，已 stale 22 天 |
| 🟠 High | [#3401](https://github.com/sipeed/picoclaw/pull/3401) channel Reload 对 nil 实例调用 Stop/Start 导致 gateway panic | ✅ 已有 fix PR 待合并 |
| 🟠 High | [#3403](https://github.com/sipeed/picoclaw/pull/3403) 异步工具结果串扰到默认 agent 主会话，多用户间存在数据泄露风险 | ✅ 已有 fix PR 待合并 |
| 🟡 Medium | [#3400](https://github.com/sipeed/picoclaw/pull/3400) 多 key 模型配置每次保存丢失 keys/enabled 标志（含 v0–v2 自动迁移） | ✅ 已有 fix PR 待合并 |
| 🟡 Medium | [#3399](https://github.com/sipeed/picoclaw/pull/3399) 32 位 ARM 自更新装错 arm64 二进制 | ✅ 已有 fix PR 待合并 |
| 🟢 Low | [#3391](https://github.com/sipeed/picoclaw/issues/3391) 移动 TUI 多行输入被拆分为多条消息 | ❌ 无 fix PR |

## 6. 功能请求与路线图信号

- **Agent 回合时间预算**（[#3414](https://github.com/sipeed/picoclaw/pull/3414)）：新增 `turn_time_budget_seconds` 配置，防止 agent 无限循环。配置默认关闭、设计保守，合入阻力小，有望进入下一版本。
- **opencode-go 专用 Provider**（[#3371](https://github.com/sipeed/picoclaw/pull/3371)）：带 session header 支持和按模型 ID 的端点路由，表明项目在扩展 LLM provider 生态，符合多 provider 战略方向。
- **DeltaChat 通道支持**（关闭的 #3376 + 上游 #3265）：社区对非主流 IM 通道接入有持续需求，虽然该 PR 已关闭，需求本身仍存在。

**依赖升级群**（均 stale）：[#3389](https://github.com/sipeed/picoclaw/pull/3389)（x/crypto 0.53→0.57，含安全修复，建议优先）、[#3388](https://github.com/sipeed/picoclaw/pull/3388)（MCP go-sdk 1.6.1→1.8.0）、[#3387](https://github.com/sipeed/picoclaw/pull/3387)（Anthropic SDK 1.55.1→1.74.0）、[#3386](https://github.com/sipeed/picoclaw/pull/3386)（mautrix 0.27→0.31）、[#3385](https://github.com/sipeed/picoclaw/pull/3385)（LINE SDK 8.20.1→8.22.0）。

## 7. 用户反馈摘要

- **首次接触体验受损**：新用户通过 repo 链接访问 picoclaw.io 直接遇到证书错误（#3377），可能误以为项目已停止维护，对项目声誉有隐性损害。
- **移动端体验短板**：pico TUI 用户反馈多行内容（诗歌、代码）被强行拆条（#3391），说明移动端用户是重要群体，但输入处理细节尚不完善。
- **自托管/嵌入式场景真实存在**：#3399 表明有用户在 32 位 ARM 设备（如树莓派 Zero 类）上运行并使用自更新功能，小众架构的兼容性有真实需求。
- **运维型部署痛点**：#3400、#3401 涉及配置保存丢失和启动 panic，指向有用户在长期运行、频繁改配置的多通道生产部署中使用 PicoClaw。

## 8. 待处理积压

| 项目 | 类型 | 停滞情况 | 建议 |
|---|---|---|---|
| [#3377](https://github.com/sipeed/picoclaw/issues/3377) | CRITICAL Issue | 22 天无修复，已 stale | **最高优先级**：续期证书或启用自动续期（如 certbot/Let's Encrypt） |
| [#3391](https://github.com/sipeed/picoclaw/issues/3391) | Bug Issue | 8 天无响应 | 需维护者确认是否为设计如此或排期修复 |
| #3385–#3389（5 个 dependabot PR） | 依赖升级 | 均标 stale，其中 #3389 含 x/crypto 安全修复 | 建议尽快审查合入 |
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | feat PR | 24 天未合并 | 需明确接受/拒绝，避免贡献者流失 |

**健康度小结**：开发贡献面活跃（外部贡献者持续产出高质量修复），但维护者响应存在明显滞后——CRITICAL 基础设施问题与多个安全相关依赖升级 PR 长期 stale，是当前项目健康度的最大风险点。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-10-02

## 1. 今日速览

NanoClaw 今日保持高活跃度：过去 24 小时共 30 条动态（4 条 Issues 更新、26 条 PR 更新），其中 **15 条 PR 已合并/关闭、11 条待合并**，开发节奏紧凑且以维护者 @glifocat、@drsmk238 的安全加固与稳定性修复为主线。今日无新版本发布，但供应链安全（依赖 pin、CVE 清理、CI 加固）和安装/更新体验占据了合并主线，显示出项目正处于发布前的硬化阶段。社区侧有 4 条活跃 Issue，其中一条高严重度 Discord 审批卡 Bug 长期未闭（#3456）值得关注。

## 2. 版本发布

今日无新版本发布。但 [PR #3986](https://github.com/nanocoai/nanoclaw/pull/3986)（默认跟随 release tag 的更新通道）和 [PR #3987](https://github.com/nanocoai/nanoclaw/pull/3987)（自批准 rc 预发布流程）表明项目正在建立正式的版本发布机制，下一版本发布流程将明显改善。

## 3. 项目进展

今日合并/关闭 15 条 PR，主要集中在三个方向：

**供应链与 CI 安全加固（约 6 条）**
- [#3968](https://github.com/nanocoai/nanoclaw/pull/3968)：所有 GitHub Actions 与 cosign pin 到精确版本，防止上游 tag 移动改变 CI 行为——尤其覆盖持有 ECR 角色的关键 job。
- [#3981](https://github.com/nanocoai/nanoclaw/pull/3981) / [#3982](https://github.com/nanocoai/nanoclaw/pull/3982)：Iron 前置代理 grpc 升至 1.83.2、Iron Proxy pin 至 v0.52.0，合计清除 36+ 依赖安全通告（含 17 项 x/crypto）。
- [#3208](https://github.com/nanocoai/nanoclaw/pull/3208)：新增 Docker Hub agent 镜像发布 workflow（amd64+arm64），附带 CVE 门禁——发布基础设施的重要一步。

**安装与更新体验**
- [#3901](https://github.com/nanocoai/nanoclaw/pull/3901)：host 服务支持 HTTPS 代理出网（其遗留的代理凭据泄漏问题由待合并的 #3985 修补）。
- [#3963](https://github.com/nanocoai/nanoclaw/pull/3963)：修复 Node < 24.13.1 上 update e2e 测试失败，解除 `/update-nanoclaw` 验证阻塞。
- [#3979](https://github.com/nanocoai/nanoclaw/pull/3979)：OneCLI 权限测试改为 umask 无关。

**核心稳定性**
- [#3977](https://github.com/nanocoai/nanoclaw/pull/3977)：tsx 升至 4.23，消除 Node 26 上每次 `ncl` 运行的 DEP0205 警告。
- [#1343](https://github.com/nanocoai/nanoclaw/pull/1343)：历时 6 个月（3 月开至 10 月闭）的社区 `/add-cli-backend` skill 关闭，该 skill 通过 `claude -p` CLI 替代 Agent SDK 以规避订阅 OAuth 的 TOS 风险。

**评估**：单日 15 条合并覆盖安全、CI、安装、测试四大面，项目整体健康度向好，明显在为下一个正式版本做硬化储备。

## 4. 社区热点

- **[#3456](https://github.com/nanocoai/nanoclaw/issues/3456)**（6 条评论，为本期最多）：Discord 审批/ask_question 卡片因 Button 冗余 `value` 参数污染 `custom_id`，导致每次点击都解析到错误选项且静默拒绝+重复重发。8 月 23 日开至今未闭，是当前最热且严重度最高的用户痛点。相关 PR [#3833](https://github.com/nanocoai/nanoclaw/pull/3833)（审批卡过期与按 id 拒绝）仍在待合并，或可间接改善审批卡生命周期管理。
- **[#3990](https://github.com/nanocoai/nanoclaw/issues/3990)**（@drsmk238）：请求只读 `security-audit` skill，一键核查隔离配置漂移（wirings、user_roles、cli_scope、挂载白名单、gateway block rules 等）——反映用户对多配置项散落导致的隔离漂移的焦虑。
- **[#3991](https://github.com/nanocoai/nanoclaw/issues/3991)**：OneCLI `list` 命令默认只返回 20 行且无截断提示，影响可用性，属典型的 API 分页默认值问题。

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 / Fix PR |
|---|---|---|
| 🔴 高 | [#3456](https://github.com/nanocoai/nanoclaw/issues/3456) Discord 审批卡 custom_id 损坏，点击解析到错误选项 | OPEN，无直接 fix PR（#3833 部分相关，待合并） |
| 🔴 高 | [#3989](https://github.com/nanocoai/nanoclaw/pull/3989) OneCLI gateway 1.41.0 存在凭据注入 host-enforcement 绕过 | Fix PR 已提交，pin gateway 至 1.42.0，待合并 |
| 🟠 中 | [#3984](https://github.com/nanocoai/nanoclaw/issues/3984) PreCompact hook 因未注册 mailbox 而每次压缩必失败 | OPEN，暂无 fix PR |
| 🟠 中 | [#3991](https://github.com/nanocoai/nanoclaw/issues/3991) OneCLI list 默认截断 20 行无提示 | OPEN，暂无 fix PR |
| 🟡 低 | [#3985](https://github.com/nanocoai/nanoclaw/pull/3985) 代理凭据（user:password）明文写入 0644 systemd unit | Fix PR 待合并（#3901 的回归） |
| 🟡 低 | [#3570](https://github.com/nanocoai/nanoclaw/pull/3570) Telegram 适配器丢弃含奇数 MarkdownV2 标记的消息（OneCLI 连接链接无法送达） | Fix PR 待合并，8 月 27 日开至今 |

**建议优先关注 #3456（用户可见的功能性损坏）与 #3989（安全绕过）。**

## 6. 功能请求与路线图信号

- **安全审计 skill**（[#3990](https://github.com/nanocoai/nanoclaw/issues/3990)）：与近期密集的 hardening PR 方向（#3968、#3981、#3982、#3987）高度一致，纳入概率高。
- **更新通道机制**（[#3986](https://github.com/nanocoai/nanoclaw/pull/3986)，core-team）：`stable`/`beta` 通道默认跟随 release tag，配合 #3987 的 rc 预发布流程，明确指向“更规范的发布节奏”，大概率进入下一版本。
- **审批卡 TTL 与按 id 拒绝**（[#3833](https://github.com/nanocoai/nanoclaw/pull/3833)）：待合并且覆盖面广（install_packages、cli_command、create_agent 等），是审批体系的实质补全。
- **agent-runner 回复丢失/重复修复**（[#3918](https://github.com/nanocoai/nanoclaw/pull/3918)，core-team）：对多 provider（Claude 流式 / OpenCode 终答式）的可靠性关键，列入下一版本可能性大。

## 7. 用户反馈摘要

- **Discord 审批体验是最大痛点**：#3456 中用户反映审批卡“完全不可用”，每次点击都选错选项且无报错，静默失败叠加重复重发给运维带来困扰。
- **配置漂移引发安全焦虑**：#3990 的措辞（“任何一处都可能漂移”）代表自托管用户对隔离配置分散在多处、缺乏统一核查手段的普遍担忧。
- **默认值陷阱**：#3991 的 list 截断问题说明用户依赖 CLI 做日常管理，静默截断破坏信任；期望“默认完整 + 明确提示”。
- **满意度信号**：安装/更新路径的 PR 密集迭代（代理支持、首聊校验 #3980、更新通道）反映 core team 对新手引导反馈响应积极。

## 8. 待处理积压

- **[#3456](https://github.com/nanocoai/nanoclaw/issues/3456)**：高严重度，8 月 23 日开至今 **40 天**，6 条评论仍无 fix PR 落地——最需维护者介入。
- **[#3570](https://github.com/nanocoai/nanoclaw/pull/3570)**：Telegram 消息丢失修复，8 月 27 日开至今 **36 天**未合并，影响 OneCLI 连接流程。
- **[#3833](https://github.com/nanocoai/nanoclaw/pull/3833)**：9 月 16 日开，覆盖面大的审批体系修复，需评审推进。
- **[#3918](https://github.com/nanocoai/nanoclaw/pull/3918)**：9 月 25 日开，多 provider 回复可靠性修复，建议尽快评审合并。
- **[#3984](https://github.com/nanocoai/nanoclaw/issues/3984)**：昨日新报的 PreCompact hook 失败，尚无响应。

---
*数据来源：NanoClaw GitHub 仓库过去 24 小时 Issues/PR 活动；链接均为 nanocoai/nanoclaw 相应编号。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-10-02

## 1. 今日速览

IronClaw 今日整体活跃度**中等偏低**：过去 24 小时共 2 条 Issue 更新（均为活跃/新开，无关闭）、1 条 PR 活跃、0 个新版本发布，且**无任何 PR 被合并**。讨论热点集中在浏览器会话持久化的加密存储设计（Issue #2358）以及每日基准测试失败分类报告（Issue #8121）。社区持续有新贡献者参与，大型文档/依赖类 PR #7499 仍处于待合并状态。

## 2. 版本发布

今日无新版本发布。（[Releases 页面](https://github.com/nearai/ironclaw/releases)）

## 3. 项目进展

今日**无 PR 合并、无 Issue 关闭**，项目无实质性代码推进。

- 待合并 PR [#7499](https://github.com/nearai/ironclaw/pull/7499)：`feat(identyclaw): host-mediated Passport for practitioners`（XL 规模、低风险、新贡献者），自 2026-08-11 开启至今已近 2 个月未合并，昨日有更新活动，等待维护者审查。若合并，将使无进程 IronClaw 智能体无需 shell 或扩展即可调用 IdentyClaw Passport。

## 4. 社区热点

- **[#2358](https://github.com/nearai/ironclaw/issues/2358)** — `feat(browser): add BrowserProfileStore trait with encrypted tarball persistence`（@ilblackdragon，1 条评论，4 月提出、昨日再活跃）。诉求：浏览器会话（cookies、localStorage、IndexedDB、service workers）需跨智能体运行持久化，避免用户每次重新认证；同时 Chromium user-data-dir 约 50-200MB 且含各站点 bearer token，**加密持久化是硬性安全需求**。属于 #2355 的子任务，反映项目对“带身份的浏览器智能体”能力的技术路线正在细化。
- **[#8121](https://github.com/nearai/ironclaw/issues/8121)** — 每日失败分类自动化报告（@pranavraja99），显示 clawbench 基准 128 个非通过项**主要由基准侧 workspace-seeding 缺陷导致**（已知复发问题），而非产品本身回归。该系列日报是项目质量监控体系的一部分，健康度信号良好。

## 5. Bug 与稳定性

今日无用户直接报告的 Bug、崩溃或回归。

- 需留意 [#8121](https://github.com/nearai/ironclaw/issues/8121) 中提到的 **clawbench 基准侧 broken-workspace-seeding 复发缺陷**——虽属基准框架问题，但长期存在会污染质量信号，建议优先修复。目前无对应 fix PR。

## 6. 功能请求与路线图信号

| 需求 | 状态 | 判断 |
|---|---|---|
| BrowserProfileStore 加密 tarball 持久化（[#2358](https://github.com/nearai/ironclaw/issues/2358)） | 设计讨论中，是 #2355 父任务子项 | 核心维护者亲自推进，属高优先级方向，大概率进入后续版本 |
| 无进程智能体直调 IdentyClaw Passport（[PR #7499](https://github.com/nearai/ironclaw/pull/7499)） | 代码已完成、待审查 | 新贡献者提交的 XL PR，合并与否取决于安全审查（涉及 host seam 与策略豁免机制） |

## 7. 用户反馈摘要

- 直接用户评论数据今日有限（#2358 仅 1 条评论）。从中可提炼的痛点：
  - **重复认证体验差**：智能体每次运行丢失浏览器登录态，用户被迫反复登录各站点。
  - **敏感数据安全焦虑**：浏览器 profile 中含全站点 bearer token，用户对明文/不安全持久化方案明确不认可，要求加密。
- 新贡献者 @discernible-io 愿意承担 XL 规模工作，说明外部社区对“身份/Passport 集成”方向有真实需求，也侧面反映核心维护者审查带宽可能不足。

## 8. 待处理积压

- **[PR #7499](https://github.com/nearai/ironclaw/pull/7499)** — 开启已约 **52 天**，XL 规模、来自新贡献者，长期未合并既有挫伤贡献者积极性的风险，建议维护者优先安排审查或拆分。
- **[#2358](https://github.com/nearai/ironclaw/issues/2358)** — 创建至今近 **6 个月**（2026-04-12）仍处 OPEN，虽昨日有活动，但 BrowserProfileStore 是浏览器智能体闭环的关键依赖，建议明确排期。

---

**健康度小结**：项目处于“规划/讨论多于交付”的低产出一日，无合并、无发布；质量监控（每日失败分类）体系运转正常，主要风险在于大型 PR 审查积压和浏览器持久化这一关键能力的长周期落地。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-10-02）

> 数据来源：github.com/netease-youdao/LobsterAI | 统计窗口：过去 24 小时

---

## 1. 今日速览

- 过去 24 小时项目共更新 **7 条 Issue（全部仍为 OPEN）与 7 条 PR（全部已关闭/合并）**，无新版本发布。
- 今日关闭的 7 个 PR 覆盖构建优化、沙箱配置修复、代码清理、UI 修复、本地插件安装等，属于一波集中收尾式的维护动作，项目整体在质量与瘦身方向上明显推进。
- Issue 侧无新增反馈（7 条均为 3 月底创建的历史 Issue 集中标记 stale），社区新输入处于低谷期，需关注用户活跃度。

---

## 2. 版本发布

无新版本发布。建议关注被关闭 PR 中涉及构建与启动流程的变更（如 #920 生产构建压缩、#2788 登出态模型目录恢复），可能随下一版本一并交付。

---

## 3. 项目进展

今日 7 个 PR 全部关闭，按主题归类：

**构建与性能**
- [#920](https://github.com/netease-youdao/LobsterAI/pull/920) `perf(build)`：修复三个 Vite 构建目标硬编码 `minify: false` 的问题，生产构建启用 esbuild 压缩，产物体积与加载性能应显著改善。
- [#2709](https://github.com/netease-youdao/LobsterAI/pull/2709) `fix(openclaw)`：Windows 下私有 SQLite staging 目录创建失败（安全软件拦截 powershell.exe / Constrained Language Mode）时增加回退路径，提升 Windows 环境兼容性。

**功能修复与增强**
- [#917](https://github.com/netease-youdao/LobsterAI/pull/917) `fix(cowork)`：修复 `getConfig()` 硬编码 `executionMode: 'local'` 的问题，沙箱执行模式现在能从 UI 正确写回 OpenClaw 配置。
- [#2788](https://github.com/netease-youdao/LobsterAI/pull/2788) `fix(auth)`：登出状态下重新拉取公开模型价格目录，并在模型选择器中提示登录，修复启动拉取失败导致选择器空白的问题。
- [#921](https://github.com/netease-youdao/LobsterAI/pull/921) `feat`：支持 openclaw 本地插件安装，方便插件独立仓库维护（附文档 `docs/openclaw-install-local-plugin.md`）。

**代码健康**
- [#941](https://github.com/netease-youdao/LobsterAI/pull/941) `refactor(cowork)`：删除 `yd_cowork` 引擎及 Claude Agent SDK 相关死代码（含 3100+ 行的 coworkRunner.ts），`CoworkAgentEngine` 类型收窄为 `'openclaw'`，架构方向进一步聚焦 OpenClaw。
- [#915](https://github.com/netease-youdao/LobsterAI/pull/915) `fix(sidebar)`：侧边栏折叠过渡动画 + macOS 告警横幅文字遮挡修复。

**小结**：这一批 PR 完成后，项目在构建产物、Windows 兼容性、架构简化三方面均有实质进展，整体完成了一次较彻底的技术债清理。

---

## 4. 社区热点

今日无新增评论热度，7 条 Issue 均为 stale 标记触发的批量更新，每条仅 1 条评论。相对值得关注：

- [#925 [Security] Is there a channel for reporting security issues?](https://github.com/netease-youdao/LobsterAI/issues/925)：外部安全研究者询问安全漏洞披露渠道，项目缺少 SECURITY.md / 私密报告渠道，建议尽快补齐，属于低成本高收益的治理改进。
- [#943 模型故障自适应降级](https://github.com/netease-youdao/LobsterAI/issues/943)：可用性诉求较强的功能建议（详见第 6 节）。

---

## 5. Bug 与稳定性

按严重程度排列（均为历史 Issue，今日被标记 stale，**均无对应 fix PR**）：

| 严重度 | Issue | 问题 | 状态 |
|---|---|---|---|
| 🔴 高 | [#926 destroy() 调用不存在 reject 导致崩溃](https://github.com/netease-youdao/LobsterAI/issues/926) | `imCoworkHandler.ts:973` 未用可选链，应用退出 / IM handler 重建 / gateway 重连时必现 TypeError 崩溃，中断资源清理 | 无 fix PR，修复仅需一行（对比同文件 888 行） |
| 🔴 高 | [#922 Anthropic SSE 流式解析未做行缓冲](https://github.com/netease-youdao/LobsterAI/issues/922) | `api.ts:485-512` 直接 `chunk.split('\n')`，跨 chunk 的 SSE data 行 JSON.parse 失败被静默吞掉，高吞吐/弱网下丢失流式文本 | 无 fix PR，可参照 OpenAI 路径的 sseBuffer 方案 |
| 🟠 中 | [#918 openclaw doctor 自动添加 weixin](https://github.com/netease-youdao/LobsterAI/issues/918) | 升级 3.25 后自动注入未知的 openclaw-weixin channel，疑似插件与运行时版本不兼容 | 无 fix PR |
| 🟠 中 | [#928 龙虾配套登录页面组件加载失败](https://github.com/netease-youdao/LobsterAI/issues/928) | 登录页点选网易员工后返回，登录组件必现加载失败 | 无 fix PR |

其中 #926、#922 均有明确根因分析与修复方案，且改动极小，建议优先处理，避免随 stale 流程被自动关闭。

---

## 6. 功能请求与路线图信号

- [#943 模型调用优先级与故障自动降级](https://github.com/netease-youdao/LobsterAI/issues/943)：请求在模型配置页支持拖拽排序，模型不可用时按次数/时间阈值自动切换备选模型，避免 IM 场景下配置错误导致完全无反馈。从今日 #2788（模型选择器健壮性修复）可看出团队正在加强模型目录/选择链路的容错，该需求与其方向契合，**纳入下版本的可能性较高**。
- [#927 模型/供应商选择支持键盘上下切换](https://github.com/netease-youdao/LobsterAI/issues/927)：键盘操作体验优化，配套 #915 的侧边栏交互修复，属于同一波 UI/UX 打磨范畴，实现成本低，有望跟进。
- [#921 本地插件安装](https://github.com/netease-youdao/LobsterAI/pull/921)（已合并）显示插件生态建设是明确路线，未来可预期更多插件管理能力。

---

## 7. 用户反馈摘要

- **IM 场景是核心使用路径**：#943 反映用户重度依赖 IM 与机器人沟通，模型配置出错时“得不到任何反馈”是主要痛点。
- **版本升级带来的回归令人困扰**：#918 反映升级 3.25 后引入用户从未配置过的 weixin channel，暴露插件默认配置管理的混乱。
- **网络弱环境下的流式体验问题**：#922 的数据丢失在高吞吐/网络拥堵时触发，说明存在对稳定性敏感的重度对话用户。
- **内部（网易员工）用户是重要群体**：#928 的员工登录路径必现故障，内部反馈渠道活跃。
- **贡献者质量高**：多位 Issue 提交者附带精确到行号的代码定位和修复建议（#922、#926），社区技术氛围良好。

---

## 8. 待处理积压

⚠️ 今日 7 条 Issue 全部被标记 **stale**，若维护者不介入，将面临被自动关闭的风险。建议优先关注：

1. **[#925 安全披露渠道缺失](https://github.com/netease-youdao/LobsterAI/issues/925)** — 治理层面缺口，stale 自动关闭安全隐患类 Issue 影响不佳，应尽快补 SECURITY.md 并回复。
2. **[#926 崩溃 Bug](https://github.com/netease-youdao/LobsterAI/issues/926) 与 [#922 SSE 数据丢失](https://github.com/netease-youdao/LobsterAI/issues/922)** — 均为一行/局部修复级别，社区已给出方案，处理成本低、收益高，不宜流失。
3. **[#943 模型降级](https://github.com/netease-youdao/LobsterAI/issues/943)** — 高价值功能请求，建议给出路线图回应。

**健康度小结**：项目核心开发活跃（今日一次性关闭 7 个高质量 PR，含重要清理与性能优化），但 Issue 响应滞后、社区新输入趋缓，stale 机制正在批量清理 3 月积压。建议团队在推进代码的同时分配精力处理安全渠道与高严重度 Bug，维持社区信任。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报（2026-10-02）

## 1. 今日速览

TinyClaw 今日整体活跃度处于**低频稳定状态**：过去 24 小时无新开 Issue、无新版本发布，但有 3 条 PR 更新，且全部为 CLOSED 状态。值得注意的是，这 3 条 PR 均由同一作者 @salemsayed 提交、创建于 2026 年 2 月，在 2026-10-01 集中更新并关闭，可能为批量清理或长期搁置后的最终处置。Telegram 集成方向（消息持久化、内联键盘交互、流式预览）是近期开发重心，但推进节奏偏慢。

## 2. 版本发布

今日无新版本发布。最新 Release 状态为空，项目距上次发布周期信息暂缺。

## 3. 项目进展

今日 3 条 PR 均已关闭（待合并为 0），需关注的是其关闭原因（合并还是拒绝）无法从数据中确认：

- **#48 fix: persist Telegram pending messages to disk** — 修复 `telegram-client.ts` 中 `pendingMessages` Map 仅存内存的问题，任何重启（409 轮询冲突、`tinyclaw restart`、崩溃）都会导致消息丢失，且队列处理器虽成功写入 `queue/outgoing/`，但客户端无法匹配聊天并静默删除响应。这是一个**数据可靠性级别的修复**。
  链接：https://github.com/TinyAGI/tinyagi/pull/48
- **#67 feat: interactive questions via Telegram inline keyboards** — 实现“问题桥接”，将 Claude 的澄清式提问以 Telegram 内联键盘按钮转发，使非交互（`-p`）模式支持双向交互对话。
  链接：https://github.com/TinyAGI/tinyagi/pull/67
- **#106 feat: Telegram live streaming previews for Claude responses** — 通过 `claude --output-format stream-json --include-partial-messages` 以增量 delta 流式输出，节流发送 `partial_*` 队列消息，Telegram 端单条消息原地编辑实现实时预览。
  链接：https://github.com/TinyAGI/tinyagi/pull/106

整体来看，这三条 PR 若为合并，则 Telegram 通道的可靠性（持久化）、交互性（内联键盘）、体验（流式预览）一次性补齐，是较大进展；若为未合并即关闭，则意味着这些能力仍缺失，属负向信号。建议维护者在日报中明确标注关闭原因。

## 4. 社区热点

今日无活跃讨论。Issues 更新为 0 条，上述 3 条 PR 评论数与 👍 均为 0 或 undefined，说明**社区参与度偏低，开发几乎由 @salemsayed 一人驱动**，属于典型的 bus factor 风险信号。

## 5. Bug 与稳定性

今日无新报告 Bug。历史 Bug 信号（来自已关闭 PR 摘要）：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 高 | Telegram pending 消息不持久化，重启后丢失，响应被静默删除（[#48](https://github.com/TinyAGI/tinyagi/pull/48)） | 已有 fix PR，今日关闭，待确认是否合并 |
| 中 | 409 polling conflict 导致客户端重启并触发上述数据丢失 | 随 #48 一并处理 |

## 6. 功能请求与路线图信号

今日无新增功能请求。从已关闭 PR 可推断 Telegram 集成是明确路线图方向：

- 双向交互（内联键盘，#67）与实时流式预览（#106）是体验向核心功能；
- 若这两条 PR 被合并，下一版本或将主打 **“Telegram 上一等公民的 Claude 交互体验”**。

## 7. 用户反馈摘要

今日 Issue 评论为零，无法提炼用户反馈。从 PR 摘要间接可见的痛点：用户依赖 Telegram 作为远程操作通道时，最在意**消息不丢失**（重启/冲突场景）与**实时反馈**（等待 Claude 长输出时希望看到进度）。

## 8. 待处理积压

- **2 月创建的 PR 拖延至 10 月才处理**（#48、#67、#106），平均滞留约 7.5 个月，审阅周期过长，建议维护者建立 PR 分级审阅机制。
- 今日无新开 Issue，积压情况需结合历史数据进一步核查；建议关注是否存在标签为 `stale` 或超过 30 天无响应的 Issue。
- 单一贡献者（@salemsayed）承担全部 Telegram 相关开发，建议通过 good-first-issue 和文档建设吸引外部贡献者，降低项目单点风险。

---
*数据来源：GitHub API 抓取（过去 24 小时窗口）。健康度小结：功能方向清晰但节奏缓慢、社区互动匮乏、贡献者集中，项目处于“维护型推进”状态。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-10-02

## 1. 今日速览

- 过去 24 小时项目呈**低强度但聚焦的维护型活跃**：0 条 Issue 更新、0 个新版本发布，但收到 **2 个待合并 PR**（[#1290](https://github.com/moltis-org/moltis/pull/1290)、[#1291](https://github.com/moltis-org/moltis/pull/1291)），均由贡献者 @Harbor404 提交。
- 两个 PR 均为 bug 修复性质，聚焦 **MCP（Model Context Protocol）连接稳定性** 与 **TLS/WebSocket 兼容性**，方向一致指向“可靠性收尾”。
- 尚无社区评论与 👍 反应，说明 PR 刚提交，处于**等待维护者评审阶段**。
- 整体健康度：无新增 Bug 报告积压，主被动活跃度偏冷，但贡献质量较高。

## 2. 版本发布

今日无新版本发布，无最新 Release 记录。最新动态以主干待合并 PR 为主，下一个小版本预计将包含本轮 MCP/TLS 修复（待合并后确认）。

## 3. 项目进展

今日无已合并/关闭的 PR。两个待合并 PR 的潜在推进价值：

- **[#1291 fix(tls): restrict ALPN to HTTP/1.1](https://github.com/moltis-org/moltis/pull/1291)**（OPEN，@Harbor404，2026-10-01）
  - 问题：TLS 监听器在 ALPN 中优先通告 `h2`，浏览器新连接协商为 HTTP/2 后，因 Moltis 未实现 RFC 8441 扩展 CONNECT，WebSocket 升级返回 `405 Method Not Allowed`。
  - 方案：在实现 WebSocket-over-HTTP/2 之前，将 ALPN 限制为 `http/1.1`。这是一个**务实且影响面可控的临时修复**，直接恢复 HTTPS 环境下 WebSocket 功能。
- **[#1290 fix(mcp): recover failed startups and expired sessions](https://github.com/moltis-org/moltis/pull/1290)**（OPEN，@Harbor404，2026-10-01）
  - 跟踪 MCP server 启动尝试，启动失败的服务器保留为可重试的 `dead` 状态；健康监控以现有指数退避 + 5 次上限重试；将携带 `Mcp-Session-Id` 的流式 HTTP `404` 视为会话丢失并重建。
  - 显著提升 MCP 子系统在**网络抖动、上游重启场景下的自愈能力**，是迈向生产级稳定的重要一步。

> 若两 PR 顺利合并，Moltis 在 TLS/WebSocket 兼容与 MCP 会话韧性两条线上均取得实质进展。

## 4. 社区热点

今日无活跃 Issue/PR 讨论（0 评论、0 👍）。两个新 PR 是唯一热点，均为**可靠性/兼容性诉求**的体现：用户在启用 TLS 的部署环境中需要 WebSocket 可用，以及 MCP server 长时间运行下的自动恢复能力。

## 5. Bug 与稳定性

今日无新开 Issue 报告 Bug，但两个 PR 隐含修复了以下问题：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | HTTPS（HTTP/2 协商）下 WebSocket 升级失败 `405 Method Not Allowed`，影响所有依赖 WS 的客户端功能 | 已有 fix PR [#1291](https://github.com/moltis-org/moltis/pull/1291)（待合并） |
| 🟠 中高 | MCP server 启动失败后永久不可用（无重试路径）；会话过期（404 + Session-Id）导致连接死锁 | 已有 fix PR [#1290](https://github.com/moltis-org/moltis/pull/1290)（待合并） |

## 6. 功能请求与路线图信号

- 今日无显式功能请求。
- 路线图隐含信号：[#1291](https://github.com/moltis-org/moltis/pull/1291) 明确提及 ALPN 限制为**临时措施**，暗示官方路线图中存在“实现 RFC 8441 / WebSocket-over-HTTP/2”的中期目标，值得后续跟踪。

## 7. 用户反馈摘要

今日 Issue 评论为空，无可提炼的显性用户反馈。从 PR 内容间接可推断的部署痛点：

- 部分用户运行于 **TLS 终结 + 浏览器直连**场景，且依赖 WebSocket 通道；
- MCP 多 server 长时运行场景中，**上游服务不稳定与会话过期**是主要摩擦点。

## 8. 待处理积压

- **[PR #1290](https://github.com/moltis-org/moltis/pull/1290)** 与 **[PR #1291](https://github.com/moltis-org/moltis/pull/1291)**：均为昨日新提交、尚无评审评论，建议维护者优先评审 —— 二者直接影响 TLS 部署可用性与 MCP 生产稳定性。
- Issue 侧今日零更新，无新增积压；建议维护者关注长期无响应 Issue 的周期性清理（本日报数据窗口内无具体条目可列）。

---
*数据来源：GitHub（moltis-org/moltis），统计窗口为过去 24 小时。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-10-02

## 1. 今日速览

项目今日保持高活跃度：过去 24 小时新增/活跃 Issue 10 条（无关闭），PR 更新 9 条（7 个待合并、2 个关闭），无新版本发布。今日焦点集中在 **多 Provider 兼容性 Bug**（DeepSeek、OpenAI gpt-6 系列、Qoder 第三方 agent）与 **CJK/中文用户体验修复**。社区贡献活跃，出现了多位首次贡献者（first-time-contributor），e2e 测试基建和功能型大 PR（Advisor Mode）持续推进。Issue 关闭数为 0，短期积压略有上升，需关注维护者响应节奏。

## 2. 版本发布

今日无新版本发布。当前用户主要分布在 2.2.1（pip）与 2.2.2b4（beta）两个版本上，多条 Bug 报告指向 beta 渠道。

## 3. 项目进展

今日无 PR 被合并（merged: 0），关闭 2 个 PR：

- [#8069 (CLOSED)](https://github.com/agentscope-ai/CoPaw/pull/8069) fix(agents): restrict deepseek formatters to image media — 被关闭后由 [#8070](https://github.com/agentscope-ai/CoPaw/pull/8070) 重新提交，属迭代而非损失。
- [#8068 (CLOSED)](https://github.com/agentscope-ai/CoPaw/pull/8068) fix(console): CJK 强调边界修复 — 同一作者的 [#8067](https://github.com/agentscope-ai/CoPaw/pull/8067) 在 channels 层重做，标记为 close-and-review-later。

待合并队列质量较高，覆盖安全、稳定性与功能：

| PR | 内容 | 影响 |
|---|---|---|
| [#7569](https://github.com/agentscope-ai/CoPaw/pull/7569) Advisor Mode (XXXL) | 双模型“顾问+执行者”对话模式，活跃近一个月 | 下版本重点功能 |
| [#8072](https://github.com/agentscope-ai/CoPaw/pull/8072) e2e 测试隔离 (XL) | 修复静默跳过的 E2E 用例，重新断言核心契约 | 提升发布质量门槛 |
| [#8063](https://github.com/agentscope-ai/CoPaw/pull/8063) 后台任务完成唤醒父会话 | 首次贡献者，解决后台任务静默完成问题 | 体验改进 |
| [#8066](https://github.com/agentscope-ai/CoPaw/pull/8066) 丢弃空媒体块 | 修复空 base64 导致全 Provider 报错 | 小而关键 |
| [#8065](https://github.com/agentscope-ai/CoPaw/pull/8065) skill_name 路径清洗 | 修复 CodeQL 标记的路径穿越风险 | **安全修复** |

整体判断：合并暂停但贡献管道饱满，合并后可一次性消化多项稳定性与安全改进。

## 4. 社区热点

- **[#7997](https://github.com/agentscope-ai/CoPaw/issues/7997) 消息撤回/编辑与工作区回滚**（6 条评论，9/27 创建今日继续活跃）— WebUI 缺少对话“回滚重试”能力，是 agent 类产品的核心交互诉求，讨论持续升温，是最有可能进入路线图的功能请求。
- **[#2975](https://github.com/agentscope-ai/CoPaw/issues/2975) 用户消息 Markdown 渲染**（4 条评论，自 4 月长期活跃）— 用户粘贴代码/结构化文本时排版混乱，长期未解决，与 #8067/#8068 的 CJK 渲染修复同属前端渲染主题，可能被一并处理。
- **[#8078](https://github.com/agentscope-ai/CoPaw/issues/8078) 跨会话消息分裂**（当日新开，2 评论）— 由内置 AI 助手协助撰写的 issue，本身也是项目 dogfooding 的展示，值得关注。

## 5. Bug 与稳定性（按严重程度）

1. 🔴 **[#8064](https://github.com/agentscope-ai/CoPaw/issues/8064) DeepSeek PDF 上传永久性破坏会话** — 发送 PDF 后所有后续请求 400 失败，会话不可恢复。**已有候选修复**：PR #8070/#8069（formatter 限制为 image media）。
2. 🔴 **[#8073](https://github.com/agentscope-ai/CoPaw/issues/8073) v2.2.2b4 LAN 访问对话页报错** — 局域网设备无法打开 Chat 页面，本地访问正常，疑似 beta 回归，无 fix PR。
3. 🟠 **[#8074](https://github.com/agentscope-ai/CoPaw/issues/8074) gpt-6 系列连接测试 400** — `_uses_max_completion_tokens` 白名单只匹配 gpt-5*/o 系列，`main` 分支已确认未修。
4. 🟠 **[#8077](https://github.com/agentscope-ai/CoPaw/issues/8077) Qoder 第三方 agent 三个缺陷** — `harnesses.py` 丢弃 backend 参数导致自定义模型不可见/不可用，另隐藏了上下文用量表。
5. 🟡 **[#8076](https://github.com/agentscope-ai/CoPaw/issues/8076) reload 静默放弃 in-flight 轮次** — drain 超时（最长 24h）耗尽后无通知直接丢弃，属可靠性/可观测性缺陷。
6. 🟡 **[#8078](https://github.com/agentscope-ai/CoPaw/issues/8078) chat_with_agent 会话在 UI 分裂** — Core/Console 双端问题。

## 6. 功能请求与路线图信号

- **消息编辑/撤回 + 快照回滚**（[#7997](https://github.com/agentscope-ai/CoPaw/issues/7997)）：评论活跃，符合 agent 工作流刚需，下版本优先级高。
- **Advisor Mode**（PR [#7569](https://github.com/agentscope-ai/CoPaw/pull/7569)）：已开发近一个月，若合并将成为 2.3 的旗舰特性。
- **插件主题扩展点 / 语义 token 覆盖层**（[#8071](https://github.com/agentscope-ai/CoPaw/issues/8071)）：承接 #7741 主题系统，作者与 CJK 渲染 PR 为同一人，生态化方向明确。
- **Codex SDK 升级 0.144.4 → 0.159.3**（[#8075](https://github.com/agentscope-ai/CoPaw/issues/8075)）：附带完整测试方案的低成本依赖升级。
- **用户消息 Markdown 渲染**（#2975）：与渲染层 PR 合流，落地概率上升。

## 7. 用户反馈摘要

- **多 Provider 环境普遍**：用户大量使用 DeepSeek、聚合路由、Qoder 等第三方后端，formatter 对各家 API 差异的适配是最大痛点来源。
- **Console/局域网部署是主流场景**：#8073 表明不少用户用本地服务 + 多设备访问，beta 渠道升级有回归风险。
- **中文用户体验被系统性忽视**：Markdown 渲染（#2975）与 CJK 强调边界（#8067）两条线都指向中文排版质量问题，社区反馈集中在这一主题。
- **自动化/可观测性诉求**：后台任务静默完成（#8063）、reload 静默丢弃轮次（#8076）反映用户需要更透明的任务生命周期通知。
- **正面信号**：issue 报告质量高（含复现步骤、版本矩阵），甚至有 AI 协助撰写的高质量报告（#8078），社区参与度健康。

## 8. 待处理积压

- **[#2975](https://github.com/agentscope-ai/CoPaw/issues/2975)**：4 月提出的 Markdown 渲染请求，近半年未关闭，今日仍有人评论，建议维护者明确表态或纳入渲染层修复批次。
- **[#8064](https://github.com/agentscope-ai/CoPaw/issues/8064)**：9/30 报告的 DeepSeek 会话永久损坏，已有候选 PR（#8070），建议尽快 review 合并。
- **[#7997](https://github.com/agentscope-ai/CoPaw/issues/7997)**：讨论充分但无关联 PR，需要维护者给出实现方案/时间表。
- **PR [#7569](https://github.com/agentscope-ai/CoPaw/pull/7569)（Advisor Mode, XXXL）**：9/5 开启至今未合并，大 PR 长期悬置易产生冲突与评审疲劳，建议优先排期。
- **今日 Issue 关闭数为 0**：整体 open backlog 净增 10 条，建议在下一个 patch 版本（预期包含 #8065/#8066/#8070）发布时集中清理相关已修复 Issue。

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