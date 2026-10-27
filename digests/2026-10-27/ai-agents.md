# OpenClaw 生态日报 2026-10-27

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-27 04:11 UTC

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

# OpenClaw 项目动态日报 — 2026-10-27

---

## 1. 今日速览

OpenClaw 今日保持极高活跃度：过去 24 小时 Issues 更新 500 条（新开/活跃 206，关闭 294），PR 更新 500 条（待合并 182，合并/关闭 318），关闭量显著高于新增，表明维护者清理积压、推进合并的节奏健康。今日发布了一个 gateway-only `extended-stable`（LTS 等效）版本 v2026.9.35，聚焦安全与稳定性修复。社区热点集中在 **内存泄漏、SQLite WAL 膨胀、Windows 更新失败**三大可靠性主题，多个 P0 问题得到关闭，但仍有数个高优先级稳定性问题待修。知名贡献者 @steipete 今日密集提交了多批性能优化与测试精简 PR，是当日代码贡献主力。

---

## 2. 版本发布

### v2026.9.35（extended-stable / LTS 等效）
🔗 [Release: openclaw 2026.9.35](https://github.com/openclaw/openclaw/releases)

- **定位**：gateway-only 稳定通道发布，基于 2026 年 9 月底主线，叠加关键安全更新、可靠性与性能修复，以及新模型支持等特性。
- **建议**：运行 2026.9.x 稳定通道的用户应尽快升级以获取安全补丁；beta 通道用户不受此版本约束。
- **迁移注意**：发布说明未提及破坏性变更；但结合社区反馈，从 2026.9.4 → 2026.10.x 的更新路径仍存在失败案例（见第 5 节），建议升级前备份数据库快照。

---

## 3. 项目进展

今日合并/关闭 PR 318 个，重点包括：

**安全与授权**
- [PR #180843](https://github.com/openclaw/openclaw/pull/180843)（已关闭）：修复 Android 内嵌 Control UI WebView 未强制 Gateway TLS 证书 pin 的安全问题——成功握手可绕过 pin 校验，属安全边界修复。
- [PR #181705](https://github.com/openclaw/openclaw/pull/181705)（已关闭）：修复模型设置在异步登录/验证持续期间丢失授权（"Gateway caller authority is no longer active"）的问题。

**可靠性修复**
- [PR #185381](https://github.com/openclaw/openclaw/pull/185381)（已关闭，P1）：修复恢复压缩期间用户发送的纠正消息永远不会到达模型的问题。
- [PR #185325](https://github.com/openclaw/openclaw/pull/185325)（已关闭）：修复插件重载会重启未变更的 memory 插件并使在途 Knowledge 调用失败。
- [PR #185310](https://github.com/openclaw/openclaw/pull/185310)（已关闭，P1）：Codex 在 checkpoint 工作完成后丢失最终答案的恢复修复。

**性能优化（@steipete 密集提交）**
- [PR #185396](https://github.com/openclaw/openclaw/pull/185396)：沙箱技能副本增量同步，避免全量重拷。
- [PR #185407](https://github.com/openclaw/openclaw/pull/185407)：消除 embedded agent 回合前重复的 active-computer 准备。
- [PR #185368](https://github.com/openclaw/openclaw/pull/185368)（已关闭）：释放已废弃的 Knowledge 链接解析缓存（此前保留最多 2 万个文档全文）。
- [PR #185412](https://github.com/openclaw/openclaw/pull/185412)（已关闭）：跳过 Docker 沙箱重复镜像检查。
- 测试精简批次 d657–d660（[#185394](https://github.com/openclaw/openclaw/pull/185394)、[#185408](https://github.com/openclaw/openclaw/pull/185408)、[#185416](https://github.com/openclaw/openclaw/pull/185416)、[#185418](https://github.com/openclaw/openclaw/pull/185418)）：持续降低测试脚手架维护成本。

**整体评估**：今日在内存/资源治理、更新可靠性、安全边界三个方向均有实质推进，配合 LTS 版本发布，项目整体向前迈进了扎实一步。

---

## 4. 社区热点

1. **[#143524](https://github.com/openclaw/openclaw/issues/143524)（已关闭，139 评论，P0）**：Agent SQLite WAL 文件数天内膨胀至 1.4–2.8 GB，导致 gateway 无法启动（Windows）。评论区高度活跃反映大量 Windows 单机用户受影响，今日关闭意味着已修复——这是评论量最高的问题。
2. **[#159662](https://github.com/openclaw/openclaw/issues/159662)（26 评论，P0）**：`prepared-model-catalog.worker.js` 以 4–5 GB/小时速率泄漏内存，已做冷重启 + provider bisect 复现，仍 OPEN。诉求：空闲部署也会被打爆，用户要求尽快修复或提供缓解配置。
3. **[#170956](https://github.com/openclaw/openclaw/issues/170956)（21 评论，P0）**：Windows 上慢启动 + 插件不干净关闭 + schtasks 权限错误，导致重启/更新经常失败。诉求：Windows 受管服务安装的运维可靠性。
4. **[#156112](https://github.com/openclaw/openclaw/issues/156112)（已关闭，19 评论，P0）**：`openclaw update` 在 npm 全局安装切换步骤确定性失败，而手动 `npm install -g` 13 秒成功——更新器自身是瓶颈。
5. **[#140010](https://github.com/openclaw/openclaw/issues/140010)（16 评论，P1）**：Windows 睡眠唤醒后 UI/WebSocket 重连失败 30–60 秒+。笔记本用户日常痛点。

**共性诉求**：Windows 平台一等公民待遇、更新链路可靠性、资源（内存/磁盘）占用治理。

---

## 5. Bug 与稳定性（按严重度排列）

| 级别 | 问题 | 状态 / Fix PR |
|---|---|---|
| P0 | [#159662](https://github.com/openclaw/openclaw/issues/159662) 模型目录 worker 内存泄漏 4–5 GB/h | OPEN，无 fix PR |
| P0 | [#166634](https://github.com/openclaw/openclaw/issues/166634) 崩溃恢复后 reclamation checkpoint 失败致 agent 永久不可用 | OPEN，待复现确认 |
| P0 | [#170956](https://github.com/openclaw/openclaw/issues/170956) Windows 重启/更新不可靠（P0，需维护者评审） | OPEN，无 fix PR |
| P1 | [#183786](https://github.com/openclaw/openclaw/issues/183786) Windows beta 升级反复查询已停止的 PID，升级挂起 15 分钟+ | OPEN |
| P1 | [#169953](https://github.com/openclaw/openclaw/issues/169953) npm 2026.9.4→2026.10.2 更新必失败（canary 超时 + 修复丢弃配置） | OPEN |
| P1 | [#177656](https://github.com/openclaw/openclaw/issues/177656) 2026.10.5 上 native host exec 报 shared-state integrity-admission 错误（≥28 次失败） | OPEN |
| P1 | [#181432](https://github.com/openclaw/openclaw/issues/181432) 2026.10.5 基线 RSS 从 300 MB 涨到 1.9 GB + SQLite 事务超时 | OPEN |
| P1 | [#166017](https://github.com/openclaw/openclaw/issues/166017) `mcp.sessionIdleTtlMs` 未设置时默认值不生效，MCP 子进程填满 256 上限后所有 exec 失败 | OPEN |
| P1 | [#145203](https://github.com/openclaw/openclaw/issues/145203) openai-completions SSE 流挂起 48.5 分钟无恢复 | OPEN |
| P2 | [#178300](https://github.com/openclaw/openclaw/issues/178300) 1-token length 截断后虚报成功 | OPEN |
| P2 | [#184600](https://github.com/openclaw/openclaw/issues/184600) Skill Workshop 未经用户审核自动改写技能（行为污染） | OPEN，新报告，需产品+安全评审 |

**已修复今日关闭**：#143524（WAL 膨胀）、#172091（worker 事务永久阻塞 WAL checkpoint）、#173765（macOS LaunchAgent 更新后静默宕机 30 分钟）、#139813（macOS LaunchDaemon 被 EDR 软件阻断导致服务无法激活，P0 安全）。

---

## 6. 功能请求与路线图信号

- **Databricks Unity Gateway 官方 provider**（[#155633](https://github.com/openclaw/openclaw/issues/155633)）：已有实现 PR #155634 关联，企业流量管控刚需，纳入概率较高。
- **iOS/macOS 个人身份与 Shared owner 并存**（[#162164](https://github.com/openclaw/openclaw/issues/162164)）：贡献地图显示 #164593 已于 10 月合并，该伞形需求正在分片推进中，是明确的路线图项目。
- **sessions_send 延迟完成（wakeOnReply）**（[#112372](https://github.com/openclaw/openclaw/issues/112372)）：linked PR open，多 agent 协作场景核心能力。
- **msteams 动态解析 SharePoint 站点**（[#136271](https://github.com/openclaw/openclaw/issues/136271)）：linked PR open，Teams 用户高频摩擦点。
- **Android 原生审批请求与 in-chat 问题**（[#175826](https://github.com/openclaw/openclaw/issues/175826)）：前序 PR #159295 已关闭，正在寻求设计确认后提交后续实现。
- 今日新 PR 也透露方向：Claude CLI 原生 Skill 工具集成（[#185336](https://github.com/openclaw/openclaw/pull/185336)）、同频道线程可见性（[#163267](https://github.com/openclaw/openclaw/pull/163267)）、OpenAI 语音快速回答跳过确认语（[#185415](https://github.com/openclaw/openclaw/pull/185415)）。

---

## 7. 用户反馈摘要

- **痛点一：更新即惊魂**。多条 P0 更新失败报告（#156112、#169953、#158231、#153521 等）显示 2026.9.3–9.5 期间更新失败率高且错误码分散（global-install-failed、runtime-verification-failed、managed-service-preflight）；部分已随版本修复关闭，但用户普遍表达“每次升级都要做好回滚准备”的疲惫。
- **痛点二：资源占用失控**。WAL 膨胀、worker 内存泄漏、基线 RSS 1.9 GB——长期无人值守部署（个人助理的典型场景）最受伤害。
- **痛点三：token 成本**。#67419（bootstrap 文件每回合重注入浪费 20–30% token）、#143017（实测 2130 万 cache-write token 的五种前缀重写方式）、#146902（工具集漂移击穿 prompt cache）——重度用户对成本敏感且提供了扎实的量化证据。
- **满意点**：问题响应后修复质量高（如 #143524 关闭）；自动更新失败报告（update-report）机制让用户能便捷上报并被“explicitly reviewed and confirmed”，社区信任度较好；产品功能广度（WeChat/Telegram/Slack/Teams 桥接、多 agent、Skill Workshop）受认可。
- **新出现的信任问题**：#184600 指出 Skill Workshop 后台"经验审查"在无用户同意门控下改写 agent 行为指令，用户无法恢复——涉及产品哲学，值得维护者优先表态。

---

## 8. 待处理积压（提醒维护者关注）

- **[#159662](https://github.com/openclaw/openclaw/issues/159662)**（P0 内存泄漏，9-27 开启，已 1 个月）：用户已完成 provider bisect，等待维护者评审。
- **[#140010](https://github.com/openclaw/openclaw/issues/140010)**（P1 唤醒重连，9-06 开启）：标 `needs-info` 近 2 个月，建议确认是否已被近期修复覆盖。
- **[#67419](https://github.com/openclaw/openclaw/issues/67419)**（4 月开启，标 stale + needs-product-decision）：token 成本是用户核心关切，长期悬置损害信任。
- **[#129314](https://github.com/openclaw/openclaw/issues/129314)**（8-25 开启，stale）：内部运行时上下文泄漏为可见消息，与 #151962“幽灵用户消息”可能是同根因，建议合并调查。
- **[#118793](https://github.com/openclaw/openclaw/issues/118793)**（8-03 开启，linked PR open 近 3 个月）：Claude CLI 限额不触发 fallback chain，多模型容错核心能力。
- **[#89430](https://github.com/openclaw/openclaw/issues/89430)**（6-02 开启，linked PR open）：Google Chat 应用认证下媒体投递 403，open 已近 5 个月。
- **PR 积压**：[#163267](https://github.com/openclaw/openclaw/pull/163267)（XL，含兼容性风险标记，waiting on maintainer 自 10-02）、[#103845](https://github.com/openclaw/openclaw/pull/103845)（7-10 开启，needs proof 近 4 个月）。

---

**健康度小结**：吞吐量高（日处理 1000+ Issue/PR 更新）、关闭率优于新增率、LTS 通道正常运转——项目处于活跃健康状态；主要风险集中在**内存/资源治理**与**Windows 平台更新链路**两条主线，建议作为下一版本优先事项。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告
**数据日期：2026-10-27**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入**“架构深化期”**：头部项目（OpenClaw、CoPaw、Hermes Agent）日 Issue/PR 更新量达数百条，社区能量从功能扩张转向**可靠性、安全边界与成本治理**。共性技术主题高度收敛——多渠道消息桥接（Telegram/WhatsApp/LINE/Teams）、MCP 生态兼容、多 agent/子任务编排、订阅制 OAuth 接入——说明产品形态已基本形成行业共识。与此同时，各项目正经历统一网关/插件化等大型架构迁移的“消化期”，评审带宽不足成为普遍瓶颈。安全审计类贡献（NanoClaw、Zeroclaw）密集涌现，标志着生态正从早期采用者向生产部署用户扩展。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新（新开+活跃 / 关闭） | PR 更新（待合并 / 合并+关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 206 / 294 | 182 / 318 | ✅ v2026.9.35（LTS） | 🟢 优：关闭率>新增率，LTS 通道正常，日吞吐 1000+ |
| **CoPaw (QwenPaw)** | 13 / 5 | 35 / 14 | ❌ | 🟢 良好：当日 Bug 当日 fix PR，响应闭环快；35 PR 积压待审 |
| **Hermes Agent** | 47 / 3 | 44 / 6 | ❌（stable 0.22.5） | 🟡 参与度高但吞吐低：网关迁移回归消化期，P1 PR 滞留 20 天 |
| **Zeroclaw** | 26 / 0 | 33 / 1 | ❌（v0.9.0 成形中） | 🟡 高贡献、低合并：安全 Issue 密集上报，评审严重滞后 |
| **NanoBot** | 3 / — | 18 / 15 | ❌ | 🟢 良好：小步快跑，合并率近半，主动清理积压 |
| **NanoClaw** | 4 / — | 10 / 2 | ❌（镜像滚动更新） | 🟢 稳态：安全审计 Issue 待分诊，3 个重复 PR 积压 5-6 月 |
| **PicoClaw** | 3 / 1 | 1 / 4 | ❌ | 🟡 中等偏低：清理旧 PR 但修复可能流失；P0 成本事故无响应 |
| **NullClaw** | 0 / 0 | 4 / 0 | ❌ | 🟡 社区贡献活跃但维护者零响应，轻微积压风险 |
| **LobsterAI** | 1 / — | 3 / 1 | ❌ | 🟢 平稳：核心开发者高频产出，账号封禁申诉待官方回应 |
| **Moltis** | 0 / 0 | 2 / 1 | ❌ | 🟡 低位：修复型迭代，PR #1309 挂 8 天无 review |
| **IronClaw / TinyClaw / ZeptoClaw / EasyClaw** | 0 | 0 | ❌ | ⚪ 无活动 |

**分层结论**：OpenClaw 一档独大；CoPaw、Hermes、Zeroclaw 构成高活跃二档；NanoBot/NanoClaw 稳态维护；其余项目处于低活动或休眠状态。

---

## 3. OpenClaw 在生态中的定位

**优势**
- **规模与治理成熟度领先**：日处理 1000+ Issue/PR 更新，是唯一拥有 gateway-only LTS（extended-stable）稳定通道的项目，具备企业级发布节奏；其余项目均无正式 Release 机制（CoPaw Creator 版本除外）。
- **贡献者密度最高**：@steipete 单日提交多批性能优化 + 测试精简 PR，核心开发者投入度强；同时拥有 update-report 等用户上报机制，社区信任建设领先。
- **功能广度最全**：WeChat/Telegram/Slack/Teams 多渠道桥接、Skill Workshop、多 agent、Android 原生审批，产品面覆盖远超同类。

**技术路线差异**
- OpenClaw 走 **gateway 中心化 + 稳定/beta 双通道**路线；CoPaw 走 **宿主轻量化 + 渠道插件化 + 子进程隔离**（#8187）路线；Hermes 正在完成 unified gateway 大迁移；Zeroclaw 押注 **OIDC 身份体系 + append-only 会话事件**（面向多用户企业场景）。
- 社区规模对比：OpenClaw open issue 超 1.1 万（Hermes 元讨论 #7335 引用），数量级领先；但庞大的 issue 存量（如 #67419 悬置 6 个月）也是其治理代价。

**风险**：内存/资源治理（#159662 泄漏 4-5GB/h 悬置 1 个月）与 Windows 更新链路是其两大短板——恰是口碑最敏感的“无人值守可靠性”维度。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **MCP 生态兼容与稳定性** | Zeroclaw（#10807 连接永久污染、#12055 连接池）、CoPaw（#8424 discover 硬失败）、NanoBot（#6485 Schema 校验跳过） | 连接层韧性（重试/池化/幂等）、JSON Schema 全形态校验是接入 MCP 服务器的刚需 |
| **Token/成本治理** | OpenClaw（#67419 前缀重写浪费 20-30%、#143017 2130 万 cache-write token）、PicoClaw（#3445 单轮烧 1310 万 token）、CoPaw（记忆写入用廉价模型、cron thinking_level 分级） | 全行业呼声最高的横切需求：预算熔断、prompt cache 稳定、按任务选推理档位 |
| **Windows/多平台一等公民** | OpenClaw（WAL 膨胀、更新失败、唤醒重连）、NanoBot（CRLF 双重转换、CI 超时）、CoPaw（CRLF/编码破坏 #8415、Linux 桌面打包 #8442）、Hermes（watchdown 不重启） | Windows 单机用户基数大但各项目支持均有缝隙；Linux 桌面打包需求上升 |
| **多 agent/子任务编排** | OpenClaw（sessions_send wakeOnReply）、Hermes（subagent_lifecycle v1.1）、PicoClaw（agent team PR 关闭）、CoPaw（cron 任务拆分） | 子任务 steer、结果注入进行中 turn、审批与生命周期控制是下一阶段核心能力 |
| **安全与权限模型** | NanoClaw（egress lockdown、UID 隔离）、Zeroclaw（7 项安全 Issue：限流绕过、CSRF、权限提升）、OpenClaw（TLS pin、Skill Workshop 未经审核改写行为 #184600） | 从“能跑”到“可信”：网络隔离、身份认证（OIDC）、审批语义明确化 |
| **订阅制 OAuth 接入** | CoPaw（#500 + PR #8437 ChatGPT 登录）、OpenClaw（Claude CLI 集成） | 用户“已付费套餐想直接用”的强需求，规避 API 计费 |
| **升级兼容性** | OpenClaw（更新即惊魂）、CoPaw（#8425 邮箱配置升级即坏） | 老配置无损迁移是最受抱怨的回归类型 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全能型个人助理 + 企业 gateway | Windows/macOS 单机用户 + 无人值守部署 | Gateway 中心化、LTS/beta 双通道、沙箱技能体系 |
| **CoPaw** | Creator 工具链 + 渠道插件化 | 重度自托管、订阅制用户 | Tauri 桌面打包、插件子进程隔离、cron 粒度控制 |
| **Hermes Agent** | 多端协同 + always-on 自动化 | Discord/Telegram 自动化、移动端用户 | Unified gateway 迁移中、owner-death supervisor 治理长生命周期进程 |
| **Zeroclaw** | 企业多用户 + 安全合规 | 团队/企业部署 | OIDC 身份栈、append-only 会话事件、SOP 权限体系 |
| **NanoBot** | WebUI 体验 + MCP 兼容 | Web 端用户、MCP 生态用户 | 出站消息集中化、跨设备未读同步 |
| **NanoClaw** | 渠道触达 + 本地/隐私部署 | WhatsApp 用户、隐私敏感用户 | hardened 容器镜像、Proton Mail、本地模型 |
| **PicoClaw** | 轻量 launcher | 轻度用户 | Go 技术栈、嵌入式场景（sipeed 背景） |
| **NullClaw / LobsterAI / Moltis** | 单渠道深耕 / 协作输入 / 基础能力打磨 | LINE 用户 / cowork 用户 / 开发者 | 修复型小步迭代 |

---

## 6. 社区热度与成熟度

**快速迭代期**（新功能密集、积压增长）：
- **CoPaw**：4 个 XXXL 级 PR（订阅 OAuth、渠道插件化、Whisper 插件化）同时在途，正为下版本蓄力；
- **Zeroclaw**：v0.9.0 三大支柱（OIDC/安全/会话事件）到位待审，但今日 0 Issue 关闭、1 PR 合并，**报告速率 > 消化速率**，是最典型的“高热度低吞吐”项目。

**质量巩固期**（清理债务、修可靠性）：
- **OpenClaw**：吞吐与治理最成熟，但内存泄漏与 Windows 更新两大主线债务待清；
- **Hermes Agent**：网关迁移后回归修复期，结构性 admission/session 问题族需专项处理；
- **NanoBot / NanoClaw**：稳态健康，清理陈旧 PR、消化安全审计。

**收缩/休眠信号**：
- **PicoClaw**：关闭挂置 6-8 个月的修复 PR 且无替代，修复可能流失，维护投入下降；
- **IronClaw / TinyClaw / ZeptoClaw / EasyClaw**：连续无活动。

---

## 7. 值得关注的趋势信号

1. **“无人值守可靠性”成为竞争分水岭**。个人助理的典型部署场景（always-on、cron、自动化）对静默失败零容忍——Hermes 的 watchdog 不重启、OpenClaw 的内存泄漏均引发最高声量不满。对开发者的启示：**watchdog 兜底、资源上限、失败可观测性**应作为一等设计目标，而非事后补丁。

2. **成本可观测与预算熔断是空白市场**。从 OpenClaw 的 cache 前缀重写量化分析到 PicoClaw 的 1310 万 token 事故，用户已能提供账单级证据，但几乎没有项目内置 per-turn 调用上限与预算熔断。率先落地者将获得重度用户信任。

3. **安全审计时代来临**。NanoClaw 与 Zeroclaw 各收到成体系的安全报告（隔离模型、认证缺陷、DoS 面），OpenClaw 出现 Skill Workshop 未经同意改写行为的信任争议。**权限语义明确化（deny ≠ unavailable）与行为变更的用户同意门控**将从加分项变为准入门槛。

4. **订阅 OAuth 成为获客杠杆**。CoPaw 的 ChatGPT 订阅登录（#500 三月老 issue 复活 + XXXL PR）表明“复用已付费套餐”是转化 API 付费墙用户的关键路径，预计将被各项目快速跟进。

5. **大 PR 评审带宽是普遍瓶颈**。Hermes（44 PR 待审、P1 滞留 20 天）、Zeroclaw（33:1 待审比）、CoPaw（35 PR 积压）均出现“贡献能量 > 评审能力”。对项目维护者：拆分大 PR、明确 reviewer 分工应优先于新增功能；对贡献者：小而聚焦的 PR 更易落地（NanoClaw 三个重复 WhatsApp PR 悬置半年即反面教材）。

6. **平台格局信号**：Windows 用户声量在各项目均显著但支持最弱，是明确的补位机会；Zeroclaw 的第三方评测（79/100）显示独立评测机构开始覆盖该赛道，生态进入外部审视阶段。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-10-27

## 1. 今日速览

NanoBot 今日保持高活跃度：过去 24 小时 PR 更新达 33 条（18 条待合并、15 条已合并/关闭），Issues 更新 3 条，无新版本发布。活跃贡献以 @chengyongru 为主力，集中在 WebUI 体验打磨与架构重构（出站消息集中化、跨设备未读同步）。安全与核心工具校验方向出现高质量外部贡献（SSL truststore 注入、Schema 校验修复），项目整体呈“高频小步迭代、社区协作健康”的状态。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日共 15 条 PR 合并/关闭，主要推进：

- **WebUI 功能完善**：bang 命令与字面输出支持 [#6173](https://github.com/HKUDS/nanobot/pull/6173) 合并，WebUI Shell 命令入口与原始输出渲染完成；批量归档操作 [#6476](https://github.com/HKUDS/nanobot/pull/6476) 关闭；文件预览链接校验 [#6483](https://github.com/HKUDS/nanobot/pull/6483) 关闭。
- **子任务详情可达性**：长结果中保持详情入口可见的修复 [#6478](https://github.com/HKUDS/nanobot/pull/6478) 关闭，后续由更全面的 [#6487](https://github.com/HKUDS/nanobot/pull/6487) 接续。
- **架构演进**：出站消息传递集中化重构 [#6482](https://github.com/HKUDS/nanobot/pull/6482) 进入评审，将 WebSocket 业务逻辑从传输层剥离，是 WebUI 架构的重要一步。
- **陈旧 PR 清理**：3 月份的 tool context 重构 PR [#1515](https://github.com/HKUDS/nanobot/pull/1515) 因冲突关闭，说明维护者在主动清理积压。

## 4. 社区热点

- **Issue [#5924](https://github.com/HKUDS/nanobot/issues/5924)**（9 条评论）：Agent 陷入 sudo 循环且达到最大迭代后“执念”于失败命令，是当前讨论最热的 issue，P1 优先级，反映长时间自主任务中的授权与状态管理痛点。
- **PR [#5666](https://github.com/HKUDS/nanobot/pull/5666)**：aimlapi.com 作为商业方主动提交 provider 集成（1000+ 模型聚合），已挂起近两个月，涉及商业合作与内置 provider 准入标准，是社区生态方向的敏感议题。

## 5. Bug 与稳定性

按严重程度排列：

1. **[P1] Agent sudo 死循环** [#5924](https://github.com/HKUDS/nanobot/issues/5924) — sudo 授权单轮失效导致 Agent 卡死，迭代上限后仍无法跳出；已开 1 个月，9 条评论，**尚无修复 PR**，建议维护者优先跟进。
2. **Schema 校验静默跳过** [#6485](https://github.com/HKUDS/nanobot/issues/6485) — `$ref`/`anyOf`/`oneOf` 不校验、tuple items 崩溃，直接影响 MCP 生态兼容性；**已有修复 PR [#6486](https://github.com/HKUDS/nanobot/pull/6486)**（issue 作者当天提交，响应迅速）。
3. **Windows CRLF 双重转换** [#6474](https://github.com/HKUDS/nanobot/issues/6474) — `atomic_write_text` 将 CRLF 写成 CRCRLF，影响 cron/trigger 持久化；尚无修复 PR。
4. **并行工具取消竞态** [#6468](https://github.com/HKUDS/nanobot/pull/6468) — 取消运行时 sibling 工具仍在清理中，可能导致会话锁释放竞态；修复 PR 待合并。
5. **SSL 证书验证** [#6488](https://github.com/HKUDS/nanobot/pull/6488) — 注入系统信任库，使 httpx 走系统 CA 校验，安全性提升，待评审。

## 6. 功能请求与路线图信号

- **list_sessions 分页** [#6315](https://github.com/HKUDS/nanobot/pull/6315)（关闭 #6314）：会话列表分页能力，29 项测试通过，接近合入，大概率进入下版本。
- **跨设备未读同步** [#6481](https://github.com/HKUDS/nanobot/pull/6481)：Gateway 侧共享阅读进度，多设备体验是明确的 WebUI 路线图方向（NAN-367）。
- **模型预设对比增强** [#6490](https://github.com/HKUDS/nanobot/pull/6490)：所有 preset 展示上下文长度与推理力度，配合 fallback 机制，反映多模型路由体验持续优化。
- **aimlapi 内置 provider** [#5666](https://github.com/HKUDS/nanobot/pull/5666)：是否纳入取决于维护者对内置 provider 商业准入的态度。

## 7. 用户反馈摘要

- **授权流程是硬伤**：sudo 用户反馈 Agent“不可用”，长任务中权限续期与迭代恢复机制亟需改进（#5924）。
- **Windows 一等公民诉求**：CRLF 问题（#6474）与 Windows CI 测试超时（#6480）均来自真实 Windows 环境，说明该平台用户基数可观但支持仍有缝隙。
- **MCP 兼容性期望高**：#6485 表明用户正大量将 NanoBot 接入 FastMCP 等 MCP 服务器，schema 形态兼容是刚需。
- **WebUI 体验整体满意**：多条 issue 均为细节打磨（链接颜色、mention 展示、预览路径），说明核心体验已被认可，进入精修阶段。

## 8. 待处理积压

- [#5924](https://github.com/HKUDS/nanobot/issues/5924)（P1）：开于 09-26，9 条评论仍无修复方案，**最需维护者介入**。
- [#5666](https://github.com/HKUDS/nanobot/pull/5666)：挂起近 2 个月的 provider 集成 PR，需明确接受或关闭的决策。
- [#6462](https://github.com/HKUDS/nanobot/pull/6462)：预览路径 `#`/`?` 截断 bug 修复，待评审合并。
- [#6488](https://github.com/HKUDS/nanobot/pull/6488)：安全相关（truststore），建议优先评审。

---
*数据来源：GitHub API（过去 24 小时），由开源项目分析师生成。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 — 2026-10-27

## 1. 今日速览

Zeroclaw 今日活跃度**高位运行**：过去 24 小时 Issues 更新 26 条（全部为活跃/新开，0 关闭），PR 更新 34 条（33 待合并、1 已合并/关闭），无新版本发布。最显著的主题是**安全与身份认证（identity-access）**：@IftekharUddin 集中提交了一批网关安全 Issue（限流绕过、登录 CSRF、权限提升），同时 v0.9.0 的 OIDC 仪表盘登录功能线（Issue #11961 + PR #11965/#11986/#11963/#11968）持续推进。整体社区参与度高、贡献者多元（9+ 位活跃提交者），但大量高优 PR 堆积待评审，合并吞吐偏低。

## 2. 版本发布

今日无新版本发布。最新 Release 为 v0.8.7（master `5d4b18d335`），多个 PR 已打上 `release:v0.9.0` 标签，v0.9.0 正在成形。

## 3. 项目进展

今日仅 1 条 PR 合并/关闭，主线进展主要体现在**待合并 PR 的持续更新与评审推进**上：

- **#11220 fix(security): SOP 执行要求管理员权限**（release-gate, v0.9.0）— 核心安全修复，直接回应 #12051 报告的权限提升风险，今日活跃更新。
- **#11965 feat(gateway): opt-in OIDC 仪表盘登录**（v0.9.0）— v0.9.0 主打功能，配套 PR #11968（OIDC enrollment Basic 凭据 form-encoding 合规修复）、#11963（运行时架构文档）、#11986（scoped dashboard chat）形成完整功能栈。
- **#11921 feat(session): append-only 会话事件历史** — 架构级改动，使可重放会话成为规范历史，覆盖几乎所有 channel/provider 标签，今日活跃。
- **#11910 fix(runtime): 强制执行 system prompt 尺寸预算（fail closed）** — 将 `max_system_prompt_chars` 从建议变为硬门禁，今日更新并标记 needs-author-action。
- **#11847 XMPP 原生支持（含 OMEMO）** 与 **#11880/#11882 Goal V1 提案系列** 持续推进。

整体看，v0.9.0 的三大支柱——OIDC 身份体系、安全收紧、会话事件架构——均已到位待评审，但合并吞吐是当前瓶颈。

## 4. 社区热点

- **[#10807](https://github.com/zeroclaw-labs/zeroclaw/issues/10807) MCP 连接被一次失败恢复永久污染（P1/S1）** — 今日更新（10-27），3 条评论。生产环境中容器重启/笔记本休眠即可触发工具调用永久失败，是长期高热 Issue，相关工作可关联今日新报的 #12055。
- **[#11961](https://github.com/zeroclaw-labs/zeroclaw/issues/11961) 仪表盘 OIDC 登录** — 今日活跃，背后诉求是“每个浏览器配对用户都是共享 operator”的身份模型缺陷，社区强烈希望多用户/多身份。
- **#9809 多模型共享单 provider profile**（评论最多 PR 之一）— 长期开放（8 月起），今日仍活跃，反映用户对连接配置复用的强烈需求。
- **[#12042](https://github.com/zeroclaw-labs/zeroclaw/issues/12042) Hlido 独立评测 79/100** — 第三方评测机构发起，开放申辩，是一次外部曝光事件。

## 5. Bug 与稳定性（按严重度）

**P1 / S1（工作流阻断）**
- **#10807** MCP 连接一次恢复失败即永久失效（S1，已接受，风险高）— 尚无直接 fix PR 合并，今日仍活跃。
- **#10673** ZeroCode Code pane（daemon RPC 路径）失败 ACP turn 不持久化（S1）— #9378 的补充分支。

**安全类（多由 @IftekharUddin 集中报告，部分已有对应 PR）**
- **#12051** sop_workshop 权限提升：受限用户可写入由管理员执行的 SOP — 对应 PR #11220（已就绪待合并）✅
- **#12046** 通配符工具选择器保留 operator 级工具 — 关联 #11230 ✅
- **#12050** OIDC 回调页无浏览器绑定 → 登录 CSRF — 尚无 fix PR ❌
- **#12049** 4 个 IP 即可填满登录流存储、阻断所有人登录（含本机）❌
- **#12052** 限流器信任 X-Forwarded-For 首条目，可伪造获得 loopback 豁免 ❌
- **#12053** /api/docs 加载未固定版本的第三方 CDN 脚本，无 SRI ❌
- **#12047** OIDC bearer 校验无频率限制，可被滥用为出站请求放大器 ❌
- **#12045** 用户/LLM 可控 URL 响应先整体缓冲再限长（DoS 面）❌

**S2（行为退化）**
- **#10921** Qdrant 时间限定向量召回可能漏掉合格结果（P2）
- **#12055**（今日新报）MCP HTTP 客户端无连接池/keep-alive 控制，陈旧 socket 导致工具调用结果未知 ❌
- **#12043** glob_search 静默丢弃工作区外的授权匹配、拒绝绝对路径模式 ❌
- **#11562** 插件更新时可跨代错配 manifest 与组件（v0.8.7 遗留）❌

**S3（轻微）**：#12021 Web UI 保存后按钮状态未清除（已有 fix PR #12039 ✅）；#11825 codex_cli 测试破坏并行 cargo test。

## 6. 功能请求与路线图信号

- **#11961 OIDC 仪表盘登录** → PR #11965 + #11986 已就绪，**确定进入 v0.9.0**。
- **#12048** OIDC redirect_uri 校验 dashboard origin → 是 #11961 的安全补强，很可能随 v0.9.0 处理。
- **#10705** OpenAI compatible 模型 `max` reasoning 档位 + **#12054**（今日新报）按 runtime profile 选择 thinking level → Provider 层需求密集，与 #9809 同域，大概率排入近期版本。
- **#12022**（新）外部 rerank 端点（opt-in `/v1/rerank`）→ 记忆子系统演进方向，配合 #10921 修复值得跟进。
- **#12041**（新）Gitea/Forgejo 与 GitHub forge 功能对齐 → 渠道扩展诉求，尚无 PR。
- **#10780/#10781** 恢复 token 预算上下文压缩、清理惰性配置键 → 已接受/进行中，是 v0.9.0 用户可感知的核心改进。

## 7. 用户反馈摘要

- **MCP 稳定性是生产用户最大痛点**：#10807 与 #12055 均源自真实运维场景（容器重启、代理刷新、笔记本休眠），用户要求连接层更强的韧性（重试、池控制、幂等）。
- **上下文/成本焦虑**：#10780/#10781 反映用户设置压缩/裁剪配置后“什么都没发生”，对 token 消耗不受控不满。
- **多用户身份诉求强烈**：配对即全权 operator 的模型在企业场景不可接受，OIDC 登录系列是对此的直接回应。
- **小而烦的 UX 瑕疵**（#12021）说明 Web Dashboard 已有日常使用群体，用户在意细节完成度。
- 外部评测（#12042，79/100）显示项目已进入第三方视野，社区生态正从早期采用者扩展。

## 8. 待处理积压

- **#9809 多模型 per provider profile**（8 月 7 日创建，size:XL，needs-author-action）— 长期积压的高价值 PR，建议维护者优先评审或拆分。
- **#10807 MCP 连接永久污染**（9 月 12 日，P1/S1）— 高严重度且持续活跃一个月以上，无 fix PR 挂靠，建议排期。
- **#10780 / #10781 / #10921 / #10673** — 均为 9 月上旬创建、已接受的 P1/P2，30+ 天未关闭，属 v0.8.x 遗留债务。
- **#11234 / #11326**（release-gate, P1）— v0.9.0 发布门禁 PR，长期开放将阻塞版本发布节奏。
- 今日 0 Issue 关闭、仅 1 PR 合并，**评审/合并吞吐明显低于报告速率**，建议维护团队关注积压增长趋势。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-10-27

## 1. 今日速览

今日项目保持高度活跃：过去 24 小时共 50 条 Issue 更新（新开/活跃 47，仅关闭 3）和 50 条 PR 更新（待合并 44，合并/关闭 6），无新版本发布。社区焦点依然集中在 **Unified Gateway（#106742）合并后的回归问题**上，多平台（Discord/Telegram/Windows/macOS）的会话管理、admission 冲突和 Desktop 端问题持续涌现。合并吞吐量偏低（仅 6 条关闭），44 条 PR 积压待审，其中包含多个 P1/P2 级修复，维护者评审带宽可能是当前瓶颈。整体健康度：社区参与度极高，但 open issue 存量控制（参见 [#7335](https://github.com/NousResearch/hermes-agent/issues/7335)）仍是长期挑战。

---

## 2. 版本发布

今日无新版本发布。当前稳定版为 0.22.5（多个 Issue 中引用 commit `bf0203a794`），无迁移注意事项。

---

## 3. 项目进展

今日 PR 以更新活跃但合并数少为特征（44 open / 6 closed），重点推进方向：

- **会话生命周期与网关健壮性**
  - [#140175](https://github.com/NousResearch/hermes-agent/pull/140175)：网关重启导致 turn 丢失后，会话 FIFO 暂停时 CLI 拒绝新 prompt，`/discard` 可恢复 —— 修复断连后的会话死锁。
  - [#145371](https://github.com/NousResearch/hermes-agent/pull/145371)：bot-relay discovery 在本地 `/reset` 后应 pin 谱系 tip 而非创建 id。
  - [#145369](https://github.com/NousResearch/hermes-agent/pull/145369)：`hermes gateway restart` 现在会列出并中断进行中的 live work，避免静默打断。

- **进程治理大重构（长期）**
  - [#137057](https://github.com/NousResearch/hermes-agent/pull/137057)：统一的 owner-death supervisor，覆盖所有长生命周期子进程（浏览器、llama-server、LSP 等），并加"棘轮"防止新增 detached spawn。这是对一类共性崩溃问题（如 [#145010](https://github.com/NousResearch/hermes-agent/issues/145010) Chromium 泄漏）的系统性解法，值得优先评审。

- **P1 级修复仍在待合并状态**：[#134274](https://github.com/NousResearch/hermes-agent/pull/134274)（长会话 provider 失败分类误判为 overflow）持续更新但未合并，建议维护者优先处理。

---

## 4. 社区热点

1. **[#143547](https://github.com/NousResearch/hermes-agent/issues/143547)（23 评论）** — Unified Gateway（#106742）合并后在 main 上暴露的系列后续问题，横跨 CLI/TUI/Desktop/API/cron/多平台。这是当前最高热度 Issue，反映大规模架构迁移的收尾工作量巨大。用户诉求：合并大 PR 后需要更密集的跟进修复和回归测试。
2. **[#7335](https://github.com/NousResearch/hermes-agent/issues/7335)（21 评论，已关闭）** — "超过 1000 个 open issue 如何控制增长"的元讨论被关闭，社区对 issue 积压治理的关注未消退（OpenClaw 已超 1.1 万）。
3. **[#142461](https://github.com/NousResearch/hermes-agent/issues/142461)（11 评论，6 👍）** — Discord 自动线程中 automation wake 永久陷入 `admission_conflict`（父会话在子任务结束后不恢复）。自动化用户的硬阻断， 👍 数表明影响面广。
4. **[#133212](https://github.com/NousResearch/hermes-agent/issues/133212)（9 评论）** — 插件编排者的 `subagent_lifecycle` v1.1 需求（steer、host 隔离传输等），反映插件生态对 subagent 控制粒度的诉求。

---

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue | 问题 | Fix 状态 |
|---|---|---|---|
| P2 高 | [#140012](https://github.com/NousResearch/hermes-agent/issues/140012) | Windows 上 Telegram 卡顿后 watchdog exit 75，supervisor 不重启 → **全 profile 静默宕机** | 无 fix PR，与 [#137057](https://github.com/NousResearch/hermes-agent/pull/137057) 相关 |
| P2 高 | [#145261](https://github.com/NousResearch/hermes-agent/issues/145261) | 多路 profile 下 watch 完成注入全被 `admission_conflict` 拒绝（单日 2,641 次），与 #142461 同族 | 无 |
| P2 高 | [#144814](https://github.com/NousResearch/hermes-agent/issues/144814) | hermes-mobile 创建的会话 Desktop 无法 resume（`4001 not_found`） | 无 |
| P2 高 | [#143839](https://github.com/NousResearch/hermes-agent/issues/143839) | Desktop 0.22.5 无法归档/删除/resume 自己创建的新式会话（`permission_denied`/`not_found`） | 无 |
| P2 高 | [#144896](https://github.com/NousResearch/hermes-agent/issues/144896) | Anthropic 适配器将含 "upstream ... not supported" 的错误误判为不支持流式 → 流式被永久关闭 | 无 |
| P2 | [#145332](https://github.com/NousResearch/hermes-agent/issues/145332) | Windows Desktop 打不开旧版 Bot Chat（legacy cwd `/` 回灌 `build_policy`） | 无 |
| P2 | [#145337](https://github.com/NousResearch/hermes-agent/issues/145337) | 成功更新后遗留死锁文件 `.git/hermes-update.lock`，下次更新静默失败 | 无 |
| P2 | [#141966](https://github.com/NousResearch/hermes-agent/issues/141966) | `get_session()` 在 event loop 上最多阻塞 5s 等 token writer（13 个 handler 受影响） | 无 |
| P2 | [#142592](https://github.com/NousResearch/hermes-agent/issues/142592) | `source='local'` 会话行永不被 finalize，幽灵"活跃"行跨重启存活 | 无 |
| P3 | [#142037](https://github.com/NousResearch/hermes-agent/issues/142037) / [#145363](https://github.com/NousResearch/hermes-agent/issues/145363) | Desktop 模型切换标签过期 / 含空格模型名被拒 | [#145363] 相关，暂无 fix |

**结构性观察**：大量 P2 集中在 gateway 的 **session admission / 路由 / 会话行生命周期**（#142461、#145261、#144053、#142592、#143845），均为 unified gateway 迁移的系统性回归，建议作为专项处理而非逐个修补。

---

## 6. 功能请求与路线图信号

- **[#133212](https://github.com/NousResearch/hermes-agent/issues/133212)**（`subagent_lifecycle` v1.1，needs-decision）：与已开 PR [#136708](https://github.com/NousResearch/hermes-agent/pull/136708)（`busy_result_mode` 让子任务结果注入进行中 turn）方向一致，subagent 编排能力是明确路线图方向。
- **[#28290](https://github.com/NousResearch/hermes-agent/issues/28290)**：会话内时间感知（temporal context markers），长会话场景刚需，中文社区提出。
- **[#145313](https://github.com/NousResearch/hermes-agent/issues/145313)**：插件目录复用已有 Composio 凭证，降低插件接入门槛。
- PR 侧信号：[#145303](https://github.com/NousResearch/hermes-agent/pull/145303)（语音转写后的 admission 钩子）、[#145356](https://github.com/NousResearch/hermes-agent/pull/145356)（CLI reasoning 状态字段）显示语音工作流与 CLI 可观测性是活跃投入区，可能进入下一版本。

---

## 7. 用户反馈摘要

- **痛点集中于多端协同**：mobile/Desktop/CLI 之间会话不可 resume、不可管理（#144814、#143839），统一网关的收益尚未完全兑现到端侧体验。
- **Always-on 部署可靠性焦虑**：无人值守场景（cron、Discord automation、Telegram）最怕静默失败 —— watchdog 不重启（#140012）、审批卡片不显示导致 300 秒超时（#138133）、clarify 卡片不渲染但占用会话租约（#145308），这类"静默卡死"是最高声量的不满。
- **长会话/上下文管理受关注**：社区贡献了 compaction 对比评测工具包（[#136582](https://github.com/NousResearch/hermes-agent/issues/136582)），与 Codex CLI / Claude Code 的差距分析质量很高，是正向的深度参与。
- **插件生态发展良好但有摩擦**：`ctx.register_cli_command` 注册的命令不出现在 help/completion（#145347）、跨 profile 的 REST 调用错误（#145367），说明插件 API 的边缘一致性需要加强。

---

## 8. 待处理积压

- **[#134274](https://github.com/NousResearch/hermes-agent/pull/134274)（P1，10-07 开启，20 天未合并）**：唯一 P1 级 PR，影响长会话消息投递分类，建议优先评审。
- **[#83582](https://github.com/NousResearch/hermes-agent/issues/83582)（08-11 至今）**：api_server 端口冲突重试风暴/fd 泄漏，用户在等待确认 main HEAD 修复，长期无回应。
- **[#79788](https://github.com/NousResearch/hermes-agent/issues/79788)（08-06 至今）**：fallback provider URL 被错误改写至 `/v1`，近 3 个月无进展。
- **[#138133](https://github.com/NousResearch/hermes-agent/issues/138133)（needs-repro，10-14）**：Telegram 审批卡片不可见，标记为消息投递风险项，尚无认领。
- **存量治理**：open issue 总量问题（[#7335](https://github.com/NousResearch/hermes-agent/issues/7335) 讨论后已关闭）+ 今日仅关闭 3 issue，建议增加 sweeper/triage 节奏，防止 admission/session 类重复报告继续膨胀。

**总结**：项目处于 unified gateway 大迁移后的"消化期"，社区能量充沛、问题报告质量高，但评审与修复带宽不足是当前最大风险，尤其是 P1 PR #134274 和 admission_conflict 问题族。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-10-27

## 1. 今日速览

PicoClaw 今日保持中等活跃度：过去 24 小时共 4 条 Issue 更新（3 新开/活跃、1 关闭）和 5 条 PR 更新（4 关闭、1 待处理）。无新版本发布。社区焦点集中在**智能路由 token 空转事故**（单轮烧掉 1310 万 token）和 **Web UI 会话管理改进需求**上。多个长期挂起的旧 PR（可追溯至 2026 年 2-4 月）于今日集中被关闭，显示维护者正在进行一波仓库清理。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 被合并，但关闭了 4 个旧 PR，属于维护性清理：

- **PR #976**（feat: agent team）被关闭 — [链接](https://github.com/sipeed/picoclaw/pull/976)：多 agent 团队协作架构（协调者分解任务、goroutine 并发子 agent），挂置近 8 个月后关闭，多 agent 能力短期内恐不会以此形式落地。
- **PR #2363**（Fix WebSocket authentication）被关闭 — [链接](https://github.com/sipeed/picoclaw/pull/2363)：WebSocket 认证修复与 header 大小写标准化，对应 Issue #2354，维护半年未合并。
- **PR #1550**（合并多个 fix PR 的汇总 PR）被关闭 — [链接](https://github.com/sipeed/picoclaw/pull/1550)。
- **PR #898**（Fix anthropic 400 错误）被关闭 — [链接](https://github.com/sipeed/picoclaw/pull/898)：Anthropic provider 请求体格式修复，挂置 8 个月。

**待处理**：PR #3416（Sendblue iMessage/SMS 传输通道）— [链接](https://github.com/sipeed/picoclaw/pull/3416) 仍为 open 状态（已标 stale），是新增消息渠道的唯一活跃提案。

> ⚠️ 值得注意：4 个关闭的 PR 均为 bug 修复或功能增强，若未被其他方式替代落地，相关修复可能随关闭而流失，建议社区确认是否有后续 PR 接替。

## 4. 社区热点

- **Issue #3426**（3 条评论，今日关闭）— [链接](https://github.com/sipeed/picoclaw/issues/3426)：Telegram MarkdownV2 中链接标签和引用块文本未转义保留字符，导致 Telegram 拒收并整体降级为纯文本。今日被关闭（stale 流程），需确认是否已有修复进入主线。
- **Issue #3445**（智能路由空转）— [链接](https://github.com/sipeed/picoclaw/issues/3445)：真实事故 trace 显示轻量模型单轮 222 次调用、561 秒消耗约 1310 万输入 token，暴露路由缺少“turn 中途不重判 + 重复调用熔断”机制。诉求核心是**成本安全护栏**。
- **Issue #3450**（Web UI 聊天文件夹）— [链接](https://github.com/sipeed/picoclaw/issues/3450)：今日新开，launcher Web UI 会话历史为扁平列表，用户需要文件夹组织能力，且给出了具体代码位置（`web/backend/api/session.go`），提案质量较高。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 严重 | [#3445](https://github.com/sipeed/picoclaw/issues/3445) | 智能路由轻量模型单轮空转 222 次调用，烧掉 ~1310 万 token，无熔断/预算上限 | 暂无 fix PR |
| 🟡 中等 | [#3426](https://github.com/sipeed/picoclaw/issues/3426)（已关闭） | Telegram MarkdownV2 转义缺失导致格式丢失 | 关闭（stale），fix 状态不明 |
| 🟡 待定 | [#3449](https://github.com/sipeed/picoclaw/issues/3449) | Bug 报告但描述为空模板，信息不足待补充 | 需作者补充环境信息 |

**#3445 是当前最高优先级风险**：直接影响用户成本，且无任何防护机制，建议维护者优先引入 per-turn 调用上限与 token 预算熔断。

## 6. 功能请求与路线图信号

- **Web UI 会话文件夹**（[#3450](https://github.com/sipeed/picoclaw/issues/3450)）：用户附带了 API 和组件级实现建议，属于低成本高感知的 UX 改进，被纳入下一版本可能性较高。
- **Sendblue iMessage/SMS 通道**（PR #3416，open）：渠道扩展方向明确，但因 stale 标记和 draft 状态，需要作者推进 review 才能落地。
- **多 agent 团队协作**（PR #976 已关闭）：社区对此类架构有需求，但该实现未获采纳，未来可能以其他设计重新出现。

## 7. 用户反馈摘要

- **成本焦虑**是突出痛点：#3445 用户以真实账单级 trace 数据反馈，说明生产环境中轻量模型路由的失控成本是实际使用者的核心担忧。
- **多渠道体验受损**：#3426 反映 Telegram 用户对富格式输出有明确期待，降级为纯文本被视为体验回退。
- **重度用户管理负担**：#3450 表明 launcher 长期用户会积累大量会话历史，扁平列表已不能满足组织需求。
- **报告质量参差**：#3449 为空模板 bug 报告，反映部分新用户缺乏引导，可考虑 issue 模板校验。

## 8. 待处理积压

- **[#3445](https://github.com/sipeed/picoclaw/issues/3445)**：已标 stale 但属严重成本安全问题，强烈建议维护者响应并给出熔断方案。
- **PR #3416**（Sendblue 通道）：draft + stale 状态，无 review 进展，需维护者评估是否纳入渠道路线图。
- **[#3449](https://github.com/sipeed/picoclaw/issues/3449)**：空 bug 报告，需跟进作者补充信息或关闭。
- **系统性提醒**：今日集中关闭了 4 个挂置 6-8 个月的修复/功能 PR（#898、#976、#1550、#2363），建议发布清理公告说明这些修复是否会以其他形式重新提交，避免社区贡献者流失。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-10-27

## 1. 今日速览

过去 24 小时 NanoClaw 保持中等偏高的社区活跃度：新增 4 条 Issue（均为安全加固与 Bug 报告，全部来自 @just-jeb，疑似一轮系统性安全审计的产出），PR 侧有 12 条更新（10 条待合并、2 条已关闭），无新版本发布。安全方向成为今日焦点，网络隔离（egress lockdown）与文件权限两条 hardening Issue 值得维护者优先关注。功能侧 Proton Mail 适配器（#4218 / #3726）持续推进，llmman 本地模型支持（#4210）也在活跃更新。整体看项目处于“稳态维护 + 功能扩展并行”的健康状态。

## 2. 版本发布

今日无新 Release。注意 agent 镜像通过自动化 PR 滚动更新：[#4233](https://github.com/nanocoai/nanoclaw/pull/4233) 将 `v2026.10.0` 的 hardened 镜像刷新至 `v2026.10.0-20261026T1516`（前一版 #4226 已关闭被取代）。

## 3. 项目进展

今日无 PR 被合并，关闭的 2 条 PR 均为自动化/文档类：

- **[#4226](https://github.com/nanocoai/nanoclaw/pull/4226)（CLOSED）**：agent 镜像刷新 PR 被更新版 #4233 取代，镜像供应链流转正常。
- **[#4098](https://github.com/nanocoai/nanoclaw/pull/4098)（CLOSED）**：scheduled-tasks 文档补充“脚本忽略 `#!` 行”的说明，被关闭（可能由 #4229 的根本性修复取代或需重做）。

待合并管道仍然饱满（10 条），其中核心团队标签的 [#4227](https://github.com/nanocoai/nanoclaw/pull/4227)（delivery 限流退避重试）是质量提升的关键 PR。

## 4. 社区热点

- **[#4228](https://github.com/nanocoai/nanoclaw/issues/4228)**（👍 1，今日唯一有反应的 Issue）：门控请求在无可用审批人时返回无理由的 deny 并直接下发给 agent——涉及 `gateway-approval-coordinator.ts` 中约 25 处 `unavailableDecision()` 调用点。诉求核心：审批不可用时-agent 应收到明确的“不可用”语义而非被误判为“拒绝”，这关系到 agent 对权限模型的理解与用户信任。
- **[#4234](https://github.com/nanocoai/nanoclaw/pull/4234)**：外部安全扫描工具 Trustabl 提交的 CI 集成 PR，并报告了“捆绑 skill 脚本读取凭据”等扫描发现。属推广性质但附带有效安全发现，建议维护者甄别后回应。
- **WhatsApp 入站媒体修复三连**：[#1998](https://github.com/nanocoai/nanoclaw/pull/1998)、[#2429](https://github.com/nanocoai/nanoclaw/pull/2429)、[#2778](https://github.com/nanocoai/nanoclaw/pull/2778) 三个重复 PR 今日均有活动，说明该痛点长期存在且多人独立踩坑，社区对合并其一的期待明显。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 高（安全/权限） | [#4230](https://github.com/nanocoai/nanoclaw/issues/4230) | host 与 agent 同 UID 运行，group 文件夹以读写挂载，无法声明对 agent 只读的路径——agent 可覆写宿主拥有的文件 | 无 |
| 高（安全/网络） | [#4231](https://github.com/nanocoai/nanoclaw/issues/4231) | egress lockdown 网络成员只增不减，且默认网络名跨安装共享，可能形成跨实例的网络策略污染 | 无 |
| 中 | [#4228](https://github.com/nanocoai/nanoclaw/issues/4228) | 审批人不可用时无理由 deny 透传给 agent | 无 |
| 中低 | [#4229](https://github.com/nanocoai/nanoclaw/issues/4229) | `ncl tasks create/update` 接受 bash 无法解析的 `--script`，缺少语法校验 | 无（#4098 仅文档且已关闭） |

**注意：今日 4 条 Issue 均无对应 fix PR**，且均无维护者回复，属于审计产出待分诊状态。

## 6. 功能请求与路线图信号

- **Proton Mail 原生适配器**（[#4218](https://github.com/nanocoai/nanoclaw/pull/4218) + [#3726](https://github.com/nanocoai/nanoclaw/pull/3726)）：已按 review 意见拆分为 adapter（channels 分支）+ skill（main）两半，结构清晰，是最接近落地的功能。
- **llmman 本地模型支持**（[#4210](https://github.com/nanocoai/nanoclaw/pull/4210)）：provider + MCP tool + 文档齐备，今日仍在更新，反映本地/私有模型接入是明确需求方向。
- **Delivery 可靠性重试**（[#4227](https://github.com/nanocoai/nanoclaw/pull/4227)，core-team 标签）：限流/瞬时网络错误改为退避重试而非丢弃，core-team 参与意味着大概率进入下个版本。
- **macOS statusbar v2 兼容**（[#4232](https://github.com/nanocoai/nanoclaw/pull/4232)）：修复 v2 slug-scoped launchd label 硬编码问题。

## 7. 用户反馈摘要

- **多渠道媒体触达是刚需**：三个独立的 WhatsApp 媒体 PR 说明用户真实在用 WhatsApp 通道收发图片/音视频，且因容器仅挂载 per-session 目录导致附件“到达不了 agent”，这是最实际的日常痛点。
- **隐私敏感用户**：Proton Mail + Bridge 适配器表明有注重端到端加密的用户群希望把 NanoClaw 接入私有邮箱。
- **自托管/本地模型用户**：llmman 支持反映了对不依赖云端 API 的部署诉求。
- **信任与安全焦虑**：#4228 的“莫名被拒”体验会让用户困惑 agent 为何失败；#4230/#4231 暴露的隔离弱点对把 NanoClaw 跑在多租户或高价值主机上的用户是实际风险。

## 8. 待处理积压

- **[#1998](https://github.com/nanocoai/nanoclaw/pull/1998)（2026-04-25 开启）**、**[#2429](https://github.com/nanocoai/nanoclaw/pull/2429)（2026-05-12）**、**[#2778](https://github.com/nanocoai/nanoclaw/pull/2778)（2026-06-16）**：同一 WhatsApp 媒体问题三个 PR 悬置 5–6 个月，今日均有活动但仍未裁决。强烈建议维护者择一合并、关闭其余，避免贡献者流失。
- **今日 4 条安全/审计 Issue（#4228–#4231）**：尚无任何维护者回应，其中 #4230/#4231 涉及隔离模型设计，建议尽快分诊并给出立场。
- **[#4234](https://github.com/nanocoai/nanoclaw/pull/4234)**：外部 CI/扫描 PR 需要明确接受或婉拒，避免第三方 CI 长期挂起。

---
*数据来源：GitHub API（过去 24 小时窗口）。总体健康度：良好——贡献流稳定、功能管道活跃；需关注点是安全审计 Issue 的响应速度与长期积压的重复 PR 清理。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-10-27

## 1. 今日速览

NullClaw 今日无新开 Issue、无版本发布，但新增 **4 条待合并 PR**（全部处于 OPEN 状态，无合并/关闭记录）。活跃贡献集中于两位社区开发者：@supersonictw（3 条，聚焦 LINE 渠道能力增强与 xAI 提供商修复）和 @torrresagus（1 条，修复 Groq 已退役模型问题）。整体来看，项目处于**社区贡献驱动型的稳定迭代期**，改进方向以第三方服务适配和渠道体验优化为主，无破坏性变更，但今日零合并说明维护者审核节奏可能滞后，存在轻微积压风险。

## 2. 版本发布

今日无新版本发布。可留意：[PR #1080](https://github.com/nullclaw/nullclaw/pull/1080) 与 [PR #1082](https://github.com/nullclaw/nullclaw/pull/1082) 均为影响可用性的 provider 修复，建议尽快审核，以便随下一版本发布。

## 3. 项目进展

今日无 PR 被合并或关闭，4 条 PR 全部待审：

- **[PR #1079](https://github.com/nullclaw/nullclaw/pull/1079)** — LINE 渠道群聊支持 `require_mention` 配置：解析 webhook 中的 `mention.mentionees` 实现对 bot 的显式 @ 检测，默认 `false` 保持向后兼容。显著改善群聊场景下 bot 的打扰问题。
- **[PR #1081](https://github.com/nullclaw/nullclaw/pull/1081)** — LINE 渠道通过 `startTyping` 调用官方 loading indicator 端点，为用户提供“正在输入”反馈，提升对话体验。
- **[PR #1080](https://github.com/nullclaw/nullclaw/pull/1080)** — 修复 xAI/grok 提供商 base URL 缺少 `/v1` 路径的问题（`https://api.x.ai` → `https://api.x.ai/v1`），此前可能导致 OpenAI 兼容请求失败。
- **[PR #1082](https://github.com/nullclaw/nullclaw/pull/1082)** — 适配 Groq 2026-08-16 生效的模型退役公告（`groq-retired-models-2026-08`），替换 onboarding 中已下线的模型。

**评估**：4 条 PR 均为功能性/兼容性改进，合并后将覆盖 2 个渠道/provider 修复与 2 项 LINE 体验增强，是实质性的正向推进。

## 4. 社区热点

今日无 Issue 活动，所有 PR 也尚无评论或 👍 反应（均为 0），**无显著热点讨论**。相对最受关注的方向是 LINE 渠道生态——@supersonictw 单日连发 3 条相关/相邻 PR，显示其对 LINE 集成的深度投入，可能代表一批 LINE 用户对群聊 @ 触发和输入反馈的诉求。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | xAI/grok 提供商 base URL 缺 `/v1`，导致 API 调用失败（[PR #1080](https://github.com/nullclaw/nullclaw/pull/1080)） | ✅ 已有 fix PR，待合并 |
| 🔴 高 | Groq 退役模型导致 onboarding 引用失效模型（[PR #1082](https://github.com/nullclaw/nullclaw/pull/1082)） | ✅ 已有 fix PR，待合并 |

两个 bug 均源自**上游第三方 API 变更**而非 NullClaw 自身缺陷，且都已有社区提交的修复，建议维护者优先审核合并。

## 6. 功能请求与路线图信号

今日无独立的功能请求 Issue，但 PR 本身传递了路线图信号：

- **LINE 渠道深化**：`require_mention`（#1079）与 loading indicator（#1081）表明 LINE 是当前活跃度最高的渠道扩展方向，后续可能继续补齐 LINE Messaging API 的其他能力。
- **Provider 兼容性维护**：xAI 与 Groq 的快速适配表明项目需要建立上游 API 变更的监控机制，建议未来版本纳入更健壮的模型列表动态获取。

若这 4 条 PR 及时合并，全部内容均有较大概率进入下一版本。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼用户直接反馈。间接信号：

- **痛点**：依赖 xAI/Grok 的用户此前可能遭遇静默调用失败（base URL 错误）；Groq 新用户 onboarding 流程因退役模型受阻。
- **诉求**：LINE 群聊用户希望 bot 仅在被 @ 时响应，避免信息噪音；同时期待更即时的响应反馈。

## 8. 待处理积压

- **4 条待审 PR 均创建于昨日（2026-10-26）且零评论**：[#1082](https://github.com/nullclaw/nullclaw/pull/1082)、[#1081](https://github.com/nullclaw/nullclaw/pull/1081)、[#1080](https://github.com/nullclaw/nullclaw/pull/1080)、[#1079](https://github.com/nullclaw/nullclaw/pull/1079)。虽为新鲜提交，但其中两条为影响可用性的修复，建议维护者在 48 小时内响应，避免功能性 bug 长期存在于主线。
- 建议建立对 Groq/xAI 等上游 API 变更公告的跟踪流程，减少同类“被动修复”的滞后时间。

---

**健康度小结**：贡献者活跃度良好（单日 4 PR），但维护者侧的审核/合并吞吐今日为零，需关注审核延迟。无 Issue 负面反馈、无崩溃报告，整体稳定性可控。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-10-27

## 1. 今日速览

LobsterAI（网易有道开源个人 AI 助手）过去 24 小时整体活跃度**中等偏低**：新增/活跃 Issue 1 条、PR 更新 4 条（待合并 3、已关闭 1），无新版本发布。核心贡献者 @fisherdaddy 保持高频产出，昨日一天内提交了协作输入体验（大段粘贴卡片化）与开发环境修复两项改动。社区侧最值得关注的是一条账号误封申诉 Issue，评论已达 5 条，反映封禁申诉渠道的用户痛点。项目处于功能迭代与依赖维护并行阶段，健康度平稳。

## 2. 版本发布

今日无新版本发布，无 Releases 更新。

## 3. 项目进展

- **已关闭（修复合入方向）：** [PR #2945](https://github.com/netease-youdao/LobsterAI/pull/2945) `fix(dev)` — 修复 Vite 预打包依赖因 Electron HTTP 缓存不重新校验导致 dev renderer 加载 404 chunk、页面无法挂载的问题。方案为 dev server 增加 `Cache-Control: no-cache` 并按 ETag 校验（304），附带了 `developmentHttpCache.ts` 测试。开发者本地体验稳定性得到改善。
- **待合并：** [PR #2946](https://github.com/netease-youdao/LobsterAI/pull/2946) `feat(cowork)` — 较大特性改动：大段粘贴内容折叠为「粘贴文本」卡片、长用户消息折叠、搜索/导出/标题/steer 载荷全链路适配，并补充 Vitest 单测，覆盖面较完整，若合入将显著提升 cowork 输入体验。
- **待合并：** [PR #2852](https://github.com/netease-youdao/LobsterAI/pull/2852) `chore(deps-dev)` — dependabot 推动 Electron 43.5.0 → 45.0.0 及 electron-builder 升级（跨 2 个大版本，合并前建议验证打包链路）。
- **待合并：** [PR #2766](https://github.com/netease-youdao/LobsterAI/pull/2766) — 社区贡献的 Requesty（LLM 网关）内置模型 Provider，已标记 `stale`，有被自动关闭风险。

**整体进展：** 协作输入体验（#2946）是本日最主要的功能推进；开发工具链修复已落地。项目呈小幅稳步前进态势。

## 4. 社区热点

**[Issue #2936](https://github.com/netease-youdao/LobsterAI/issues/2936)（评论 5 条，本日最热）** — 用户申诉两个 LobsterAI 账号被误封，声明无恶意/批量调用行为，并主动指出可能的误判来源：曾在本地第三方 DSH 插件中配置账号凭据调用有道模型服务。

**诉求分析：**
1. **第三方插件凭据共用是封禁误判高发场景** — 用户将官方账号接入非官方工具，可能触发风控规则，建议官方明确第三方客户端使用政策边界；
2. **缺少自助申诉/解封渠道**，用户只能通过 GitHub Issue 发声，多轮评论（5 条）说明沟通成本高；
3. 封禁提示信息不透明（仅“异常/被封禁”），用户无从判断原因。

建议维护团队给出明确的处置结论，并考虑沉淀官方申诉流程文档。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 中（账号不可用，用户侧阻断性） | [Issue #2936](https://github.com/netease-youdao/LobsterAI/issues/2936) 账号疑似误封，无法登录使用 | 待官方回复处置，尚无 fix |
| 低（仅影响开发环境） | Vite stale immutable deps 导致 renderer 404 白屏 | ✅ 已有修复 [PR #2945](https://github.com/netease-youdao/LobsterAI/pull/2945)，已关闭 |

今日无崩溃/回归类新 Bug 报告，运行时稳定性平稳。

## 6. 功能请求与路线图信号

- **Requesty 模型 Provider**（[PR #2766](https://github.com/netease-youdao/LobsterAI/pull/2766)）：社区持续表达对更多 LLM 网关接入的需求（类似 OpenRouter 模式）。该 PR 已 stale，若维护者确认产品方向支持，宜尽快 review，否则可明确拒绝以管理社区预期。
- **长输入体验优化**（[PR #2946](https://github.com/netease-youdao/LobsterAI/pull/2946)）：大段粘贴卡片化 + 消息折叠反映团队正在打磨 cowork 场景下的长上下文输入体验，大概率进入下一版本。
- **依赖升级窗口**（[PR #2852](https://github.com/netease-youdao/LobsterAI/pull/2852)）：Electron 45 升级若合并，将开启新一轮底层能力/性能更新，可作为下一版本基础。

## 7. 用户反馈摘要

- **痛点（来自 #2936）：** 用户存在“官方账号 + 第三方工具”混合使用场景（DSH 插件调用有道模型），目前无明确合规指引，风控误伤后维权路径不清晰；
- **痛点（隐含）：** 封禁错误提示信息粒度不足，用户无法自查原因；
- **正面信号：** 核心用户深度使用 cowork 长输入场景（从 #2946 的打磨方向可侧证），社区贡献者愿意主动接入新 Provider，说明产品作为 AI 助手底座被二次开发的意愿较强。

## 8. 待处理积压

- [PR #2766](https://github.com/netease-youdao/LobsterAI/pull/2766) — 创建于 09-25，已一个月未推进且标记 `stale`，社区贡献者的 Requesty Provider 面临自动关闭，建议维护者明确表态；
- [Issue #2936](https://github.com/netease-youdao/LobsterAI/issues/2936) — 创建于 10-23，评论 5 条但未见官方结论性回复，涉及账号可用性，属高优先级用户支持事项；
- [PR #2852](https://github.com/netease-youdao/LobsterAI/pull/2852) — dependabot 升级 PR 挂起 2 周，Electron 大版本升级宜尽早验证排期，避免安全补丁积压。

---
*数据来源：GitHub（netease-youdao/LobsterAI），统计窗口为过去 24 小时。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-10-27）

## 1. 今日速览

Moltis 今日整体活跃度处于**低位但健康**状态：过去 24 小时无新开 Issue、无版本发布，PR 活动共 3 条（2 条待合并、1 条关闭）。活跃贡献集中于核心开发者 @Jishnu09-siuu，工作聚焦于 HTTP 客户端规范性修复与时区感知的运行时上下文改进，属于打磨型迭代而非功能大版本推进。社区讨论热度较低（各 PR 评论与点赞均为 0），暂无明显风险信号。

## 2. 版本发布

无新版本发布（最新 Releases 为空），无需迁移操作。

## 3. 项目进展

- **关闭：[PR #1175](https://github.com/moltis-org/moltis/pull/1175) feat(ctl): add Terminal-Bench chat runner**（@choskeli，创建于 2026-07-28，今日关闭）
  - 引入 `moltis-ctl chat` 与 `chat-history` 命令（基于认证 gateway RPC）、Harbor/Terminal-Bench installed-agent 包装器（含 per-task 会话隔离）、安装文档及 shell 契约测试。
  - ⚠️ 注意：该 PR 状态为 CLOSED 而非 MERGED，历时 3 个月未合入即关闭，可能存在方案被否、范围调整或重构替代的情况，建议关注后续是否有替代 PR。

- **待合并：[PR #1309](https://github.com/moltis-org/moltis/pull/1309) fix(tools): web_fetch 请求附带默认 User-Agent**
  - 修复 #1305：`web_fetch` 自行构建 `reqwest::Client` 导致缺少 `User-Agent`，被 `api.github.com` 等公共 API 以 403 拒绝。方案是复用 `moltis_common::http_client::build_default_headers()`，与其他 Moltis HTTP 客户端行为对齐。已挂起约 8 天，待维护者 review。

- **待合并：[PR #1319](https://github.com/moltis-org/moltis/pull/1319) fix(chat): 注入运行时时间并尊重用户时区**
  - 修复 #1299：确保每轮对话准确注入运行时日期时间上下文；当无沙箱时区配置时回退到 `USER.md` 中的 `default_user_prompt_timezone()`。属于提升 Agent 时间感知准确性的基础修复，昨日新开、今日待 review。

**小结**：项目整体向前小幅推进，主要在修复 HTTP 合规性（#1309）与时间上下文正确性（#1319）两个基础质量问题；Terminal-Bench runner 的关闭为一条长线工作的终止信号。

## 4. 社区热点

今日无高热度讨论。3 个 PR 的评论数与 👍 均为 0，无新开 Issue。被引用的两个上游 Issue [#1305](https://github.com/moltis-org/moltis/issues/1305)（web_fetch 403）和 [#1299](https://github.com/moltis-org/moltis/issues/1299)（时区/时间上下文错误）均有对应 fix PR 在途，说明用户报告的问题在正常流转，但社区互动深度有限。

## 5. Bug 与稳定性

今日无新报告 Bug。在途 Bug 修复：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 中 | web_fetch 缺失 User-Agent 导致公共 API 403（#1305） | 已有 fix PR #1309，待合并 |
| 低-中 | 聊天运行时 datetime 注入不准确、忽略用户时区（#1299） | 已有 fix PR #1319，待合并 |

无崩溃或回归类报告。

## 6. 功能请求与路线图信号

- **Terminal-Bench 集成**（原 PR #1175）：`moltis-ctl chat` 运行器与 per-task 会话隔离表明项目在向 Agent 评测/基准测试方向布局，虽然该 PR 已关闭，但需求方向值得关注，后续大概率以重构形式回归。
- **Agent 时间/环境感知**（PR #1319）：体现项目在强化 Prompt 上下文的运行时准确性（时区、当前时间），是个人 AI 助手场景的核心能力信号。
- 两条 OPEN PR 均为小范围修复，不预示下一版本有破坏性变更。

## 7. 用户反馈摘要

今日无 Issue 评论数据可供提炼。从关联 PR 可间接推断的用户痛点：
- 用户在 Agent 联网抓取（web_fetch）场景中遇到访问 GitHub API 等公共服务被 403 拦截的问题。
- 用户期望 Agent 能感知正确的当前时间与其所在时区，而非依赖固定/错误的时间上下文——这对日程、提醒类助手场景尤为关键。

## 8. 待处理积压

- **[PR #1309](https://github.com/moltis-org/moltis/pull/1309)**：已开启约 8 天（10-19 创建），0 评论、0 👍，**无维护者响应迹象**，建议 prioritized review——它修复的是用户可直接感知的功能性故障。
- **[PR #1319](https://github.com/moltis-org/moltis/pull/1319)**：昨日新开，建议维护者尽快给出首轮 review，避免重蹈 #1175 三个月无果关闭的覆辙。
- **已关闭未合入的 [PR #1175](https://github.com/moltis-org/moltis/pull/1175)**：建议在关闭时补充原因说明或关联后续替代方案，以保持社区对 Terminal-Bench 方向的预期透明。

---
*数据来源：GitHub（moltis-org/moltis），统计窗口：过去 24 小时。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 — 2026-10-27

## 1. 今日速览

项目处于高活跃迭代期：过去 24 小时内 Issues 更新 18 条（新开/活跃 13、关闭 5），PR 更新 49 条（待合并 35、合并/关闭 14），社区贡献与维护响应均保持强劲节奏。今日无新版本发布，但多个大型特性 PR（ChatGPT 订阅登录、Linux 桌面打包、渠道插件化）集中推进，显示项目正为下一个版本蓄力。Bug 报告质量整体较高（多含复现与根因分析），且多数新 Bug 在当日即有对应 fix PR 提交，维护闭环效率值得肯定。

## 2. 版本发布

今日无新 Release。Creator 2.0.3 的发布 PR（#8357）已于近日关闭，版本内容仍在整理中，可关注后续 tag 动态。

## 3. 项目进展

今日关闭/合并的 PR 共 14 条，代表性进展：

- **[PR #8357](https://github.com/agentscope-ai/CoPaw/pull/8357)（CLOSED）feat(creator): release 2.0.3 with skills, narration, scratch and script import** — QwenPaw Creator 2.0.1 → 2.0.3 发布内容落地，携带 skills、narration、scratch 与脚本导入等插件工作。
- **[PR #8429](https://github.com/agentscope-ai/CoPaw/issues/8429)（CLOSED）feat(cron): support thinking_level in JobRuntimeSpec** — 配合 Issue #8439，允许 cron 任务独立控制深度推理开关（off/inherit/enabled），减少为省 token 而拆分 agent 的维护负担。
- 其余关闭项多为测试修复（#8449 相关 e2e 修复链）与文档锚点修正（#8402 / #8403 相关链路）。

整体看，今日主要推进了 **Creator 版本发布准备、cron 粒度控制、测试与文档质量**三条线。

## 4. 社区热点

- **[Issue #8425](https://github.com/agentscope-ai/CoPaw/issues/8425)（CLOSED）邮箱 name 含完整地址导致 IMAP 认证失败** — 3 条评论、有 👍，升级后老配置失效引发用户不满；**当日即有 fix PR #8438**，响应速度是本日亮点。诉求：升级不应破坏既有配置兼容性。
- **[Issue #500](https://github.com/agentscope-ai/CoPaw/issues/500)（OPEN）请求支持 OpenAI Codex / Claude OAuth 登录** — 3 月老issue今日再度活跃，4 👍；与大型 PR [#8437 ChatGPT 订阅登录](https://github.com/agentscope-ai/CoPaw/pull/8437)（loopback OAuth + PKCE）高度呼应，订阅制用户接入是明确的强需求。
- **[Issue #8040](https://github.com/agentscope-ai/CoPaw/issues/8040)（OPEN）embedding reindex 静默丢批（#5950 复发）** — 6 条评论，经验证的老问题复发，用户已给出完整根因链（CJK chunk 超 per-item token 限制导致整批丢弃），社区在推动彻底修复。
- **[Issue #8162](https://github.com/agentscope-ai/CoPaw/issues/8162)（CLOSED）OpenAI Responses API 流式空响应** — 8 条评论，为本日讨论最多的 issue，涉及流式事件解析缺陷，已关闭。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 问题 | Fix PR |
|---|---|---|---|
| 高 | [#8435](https://github.com/agentscope-ai/CoPaw/issues/8435) | LLM 流式请求因 rate-limiter semaphore 不释放而无限挂起，watchdog 失效、零日志 | 未见 |
| 高 | [#8427/#8279](https://github.com/agentscope-ai/CoPaw/issues/8279) | 长驻 ReMe watcher 耗尽 AnyIO 默认线程限制器，拖垮同步 HTTP 端点 | 未见 |
| 高 | [#8312](https://github.com/agentscope-ai/CoPaw/issues/8312) | 上下文压缩无法收敛导致任务中断（CONTEXT_UNFIT） | 未见 |
| 中 | [#8424](https://github.com/agentscope-ai/CoPaw/issues/8424) | MCP discover 404+-32601 被硬失败，无法回退 legacy 握手 | ✅ [#8445](https://github.com/agentscope-ai/CoPaw/pull/8445) |
| 中 | [#8425](https://github.com/agentscope-ai/CoPaw/issues/8425) | IMAP 登录名拼成 user@domain@domain | ✅ [#8438](https://github.com/agentscope-ai/CoPaw/pull/8438) |
| 中 | [#8417](https://github.com/agentscope-ai/CoPaw/issues/8417) | `/compact` 在火山引擎 glm-5.3-flash 上必 400（thinking 参数兼容层冲突） | 未见 |
| 中 | [#8415](https://github.com/agentscope-ai/CoPaw/issues/8415) | edit_file 破坏 CRLF 行尾与编码（read_file_safe 有损解码） | 未见 |
| 中 | [#8440](https://github.com/agentscope-ai/CoPaw/issues/8440) | cancellable_wait 外层取消后仍遗留工具任务运行 | 未见 |
| 低 | [#8276](https://github.com/agentscope-ai/CoPaw/issues/8276) | ReMe reranker 接受空 api_key，报错仅显示 "unexpected error" | 未见 |

## 6. 功能请求与路线图信号

- **Linux 桌面对齐**：[Issue #8442](https://github.com/agentscope-ai/CoPaw/issues/8442) 请求 deb + AppImage、Wayland Computer Use、Chrome Native Messaging；**同日即有 [PR #8444](https://github.com/agentscope-ai/CoPaw/pull/8444)** 提交 Tauri 打包，纳入下版本概率高。
- **ChatGPT 订阅 OAuth**：Issue #500 + [PR #8437](https://github.com/agentscope-ai/CoPaw/pull/8437)（XXXL），是当前最重磅的特性线。
- **cron thinking_level**：Issue #8439 已有对应实现 PR 关闭记录，预计随下版发布。
- **渠道插件化 + 子进程隔离**：[PR #8187](https://github.com/agentscope-ai/CoPaw/pull/8187)（XXXL）长期活跃，配合 [#8431 本地 Whisper 插件化](https://github.com/agentscope-ai/CoPaw/pull/8431)，显示“宿主轻量化 + 插件隔离”是明确架构方向。
- **记忆写入独立模型**：[PR #7719](https://github.com/agentscope-ai/CoPaw/pull/7719)（XL，Under Review）允许 ReMeLight 用廉价模型写记忆，直击成本痛点。

## 7. 用户反馈摘要

- **痛点集中在“长时运行稳定性”**：Docker 长驻部署下的线程池耗尽（#8279）、LLM 流挂起（#8435）反映出一批重度自托管用户，他们重视可观测性与 watchdog 兜底。
- **升级兼容性焦虑**：#8425（邮箱配置升级即坏）这类回归最受抱怨，用户期望老配置无损迁移。
- **成本敏感**：多个 issue/PR（thinking_level、记忆写入独立模型、reranker）都围绕“用便宜模型跑管线任务”，订阅制 OAuth 需求（#500）同样源于“已付费套餐想直接用”。
- **满意点**：`keep-context-after-compact-failure` 插件兜住会话上下文（#8417）、社区 bug 报告获得快速 fix PR，均获正面反馈。

## 8. 待处理积压

- **[Issue #8040](https://github.com/agentscope-ai/CoPaw/issues/8040)**（9-30 开）— #5950 的复发问题，已有实证根因分析，近一个月未彻底修复，建议优先排期。
- **[Issue #8312](https://github.com/agentscope-ai/CoPaw/issues/8312) / [#8279](https://github.com/agentscope-ai/CoPaw/issues/8279)** — 均为影响可用性的运行时问题，尚无 fix PR 关联。
- **[Issue #4946](https://github.com/agentscope-ai/CoPaw/issues/4946)**（6-03 开，今日关闭）— 插件 ImportError 阻塞启动 6 分钟+，历经 4 个多月才解决，提示应对此类“启动阻塞”类 issue 建立更快响应通道。
- **大型 PR 审查压力**：#8187、#7874、#8431、#8437 四个 XXXL 级 PR 同时在途，35 个待合并 PR 的积压对审查带宽是考验，建议明确 reviewer 分工与合入顺序。

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