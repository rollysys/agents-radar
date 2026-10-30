# OpenClaw 生态日报 2026-10-30

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-30 04:53 UTC

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

# OpenClaw 项目动态日报 — 2026-10-30

---

## 1. 今日速览

OpenClaw 今日保持**高度活跃**：过去 24 小时 Issues 更新 500 条（新开/活跃 353，关闭 147），PR 更新 500 条（待合并 276，已合并/关闭 224），Issue 关闭率约 29%，PR 消化率约 45%，显示维护团队具备较强的吞吐能力。今日新增 3 个版本（beta 安全修复 + 一个 extended-stable/LTS 通道发布），安全响应节奏较快。不过，**P0/P1 级别的会话状态（session-state）与消息丢失（message-loss）类 Bug 仍是最大隐患**，多个问题已积累数十条评论未关闭；社区对 Dreaming 记忆系统和 Skill Workshop 的产品化争议持续发酵。

---

## 2. 版本发布

### v2026.10.10-beta.5
- **Node 兼容性修复**：安装与更新在 Node `>=24.16.0 <25 || >=26.1.0` 上恢复工作；Node 24.22.1 / 26.12.1 从硬性要求降级为安全建议；Node 26 workers 在 stdin 为文件时不再中止（#186589、#187516）。
- **迁移提示**：此前因 Node 版本被阻断升级的用户可尝试本 beta；建议生产环境先在扩展稳定通道验证。

### v2026.10.9
- **安全补丁版本**：修复易受攻击的运行时依赖——fast-uri 4.2.3 拒绝 MCP schema 校验中的畸形 URI scheme/host；Zod 超大集合在 A2UI 与 Discord embedded app SDK 中被提前拒绝；IMAP 发件人解析升级至 nodemailer 10.1.4 以阻断伪造发件人。
- **建议**：涉及 MCP/邮件/Discord 集成的部署应尽快升级。

### v2026.9.36（extended-stable / 类 LTS）
- 仅 Gateway 通道的稳定版：9 月底基线 + 关键安全更新、可靠性与性能修复、新模型支持。适合追求稳定的部署跟进。

---

## 3. 项目进展

今日 PR 侧进展集中在**状态层可靠性、多渠道 Unicode 规范化、自动化权限模型**三条主线：

- **状态层优化**：[#188070](https://github.com/openclaw/openclaw/pull/188070)（已关闭）让会话检查复用已准备的 owner，避免为一次有界查询物化整个 Agent DB 和 WAL——直接缓解了多个 "SQLite checkpoint/lease" 类 P0/P1 问题；[#188111](https://github.com/openclaw/openclaw/pull/188111) 清理历史中的空完成尝试；[#187924](https://github.com/openclaw/openclaw/pull/187924)（XL）将委派子代理的失败原因回传给父代理，改进多代理失败链路。
- **Unicode 规范化批量修复**（同一作者一天内 4 个 PR）：Signal 别名搜索 [#188040](https://github.com/openclaw/openclaw/pull/188040)、⌘K 命令面板 [#188059](https://github.com/openclaw/openclaw/pull/188059)、Zalo 好友名匹配 [#188107](https://github.com/openclaw/openclaw/pull/188107)、Codex 会话搜索 [#188106](https://github.com/openclaw/openclaw/pull/188106)、MS Teams 消息搜索 [#188108](https://github.com/openclaw/openclaw/pull/188108)——NFD/NFC 差异对非英语（尤其 macOS/iOS 输入）用户是系统性痛点。
- **新能力**：[#187836](https://github.com/openclaw/openclaw/pull/187836)（XL）为多用户 Gateway 增加创建者专属/指定受众的会话机密性；[#188090](https://github.com/openclaw/openclaw/pull/188090) 新增 `operator.cron` 权限，让操作员自行管理自动化任务；[#187135](https://github.com/openclaw/openclaw/pull/187135) 新增 Particle 模型提供商。
- **工具链修复**：[#188045](https://github.com/openclaw/openclaw/pull/188045)（已关闭）修复完成回合的 "Worked" 披露分散问题；[#188050](https://github.com/openclaw/openclaw/pull/188050) 修复 WebKit 下 PDF 附件预览空白；[#188105](https://github.com/openclaw/openclaw/pull/188105) 让 cron 失败修复回合能读取并修复它被指派修复的任务。

整体来看，**状态层与多代理失败语义的修复正在系统性收敛本月的 P0 集群**，项目前进速度可观。

---

## 4. 社区热点

| Issue | 热度 | 核心诉求 |
|---|---|---|
| [#164294](https://github.com/openclaw/openclaw/issues/164294) Gateway state DB WAL checkpoint 永不完成（P2，38 评论） | 🔥 最高 | 进程内 reader 持续 pin 住 WAL，17091 帧无法 checkpoint，威胁状态库长期增长 |
| [#150635](https://github.com/openclaw/openclaw/issues/150635) 短期回忆存储夜间逐出导致 dreaming deep phase 永不晋升（23 评论，含 needs-product-decision） | 🔥 | Dreaming 记忆系统核心机制失效：512 条上限被零回忆条目塞满 |
| [#120385](https://github.com/openclaw/openclaw/issues/120385) Code Mode 定时/cron 回合工具目录构建不完整（22 评论） | 高 | 调度任务回合 MCP 工具缺失，仅显示笼统的 "Exec failed" |
| [#164923](https://github.com/openclaw/openclaw/issues/164923) 同主机一工作区晋升 0/512、兄弟工作区晋升 50-90%（19 评论） | 高 | 结构化拒绝原始对话片段，疑似记忆晋升过滤器回归 |
| [#172837](https://github.com/openclaw/openclaw/issues/172837) Codex 原生子代理分配永不清理、被反复重发（P1，18 评论） | 高 | 消息丢失 + 会话膨胀，影响所有 Codex 多代理用户 |
| [#65374](https://github.com/openclaw/openclaw/issues/65374) Dreaming 系统在多代理间污染 Agent 身份（P1，11 评论，data-loss/security） | 高 | 共享语料库无代理边界，属隐私+安全双重关切 |
| [#184600](https://github.com/openclaw/openclaw/issues/184600) "Skill Workshop 已成为致命瘟疫"（7 评论，10-26 新开） | 新增热点 | 用户强烈要求为技能自动变异加审查/同意门槛——命名激烈但诉求是产品治理 |

**背后共性诉求**：(1) 记忆/Dreaming 子系统需要产品级决策而非零散补丁；(2) 背景自治行为（skill review、dreaming）必须有用户可见的控制开关。

---

## 5. Bug 与稳定性（按严重程度排列）

**P0 / Release Blocker**
- [#166634](https://github.com/openclaw/openclaw/issues/166634) 崩溃恢复后延迟回收 checkpoint 失败，Agent 永久 UNAVAILABLE（标 not-repro-on-main，待验证）
- [#162211](https://github.com/openclaw/openclaw/issues/162211) 启动阻塞事件循环 40–200s → 健康监控误判 → **重启循环**（crash-loop，无 fix PR）
- [#158592](https://github.com/openclaw/openclaw/issues/158592) 主机睡眠唤醒后模型运行时发布超时不恢复，所有入站消息失败直至重启（无 fix PR）
- [#186813](https://github.com/openclaw/openclaw/issues/186813) 聊天内托管更新在 SQLite 事务锁上无限挂起 — **已关闭**，疑似本日修复 ✅

**P1**
- [#177656](https://github.com/openclaw/openclaw/issues/177656) stable 2026.10.5 上原生 host exec 出现共享状态完整性准入错误，**至少 28 次失败**，无 fix PR，需维护者复核
- [#159094](https://github.com/openclaw/openclaw/issues/159094) Gateway 持有 state-lifecycle lease 但内部 worker 报告他人持有（StateDatabaseCoordinatorContentionError）
- [#158070](https://github.com/openclaw/openclaw/issues/158070) 排队等待时压缩预检因 "caller authority 不再活跃" 失败，作废在途投递
- [#155396](https://github.com/openclaw/openclaw/issues/155396) Codex 工具回合在最终答案恢复期因 `provenance_rejected` 静默丢失答案
- [#178359](https://github.com/openclaw/openclaw/issues/178359) `doctor --fix` 非交互模式空转 15+ 分钟 — 相关 PR [#186603](https://github.com/openclaw/openclaw/pull/186603) 推进中
- [#163566](https://github.com/openclaw/openclaw/issues/163566) 更新修复后每回合 CPU 燃烧 ~100s

**P2 值得关注**：[#177909](https://github.com/openclaw/openclaw/issues/177909) transcript 幂等冲突被误判为模型失败并走完整 fallback 链（与 [#148789](https://github.com/openclaw/openclaw/issues/148789) 同类，均指向**failover 层错误归因**这一系统性问题）；[#176342](https://github.com/openclaw/openclaw/issues/176342) 不干净关机后 stale-lease 门导致分钟级 Agent 不可用。

---

## 6. 功能请求与路线图信号

- **exec-approvals 黑名单**：[#6615](https://github.com/openclaw/openclaw/issues/6615)（8 👍）+ [#71097](https://github.com/openclaw/openclaw/issues/71097)（已关闭）——两个同诉求 Issue + 相关 PR 存在，"allow everything except X" 策略大概率近期落地。
- **会话机密性**：[#187836](https://github.com/openclaw/openclaw/pull/187836)（XL，待合并）显示多用户权限模型正在成型，`operator.cron`（[#188090](https://github.com/openclaw/openclaw/pull/188090)）同属此方向，预计进入下一版本。
- **Agent 自主上下文压缩**：[#6757](https://github.com/openclaw/openclaw/issues/6757)（self-compact 工具）与长期大 PR [#129388](https://github.com/openclaw/openclaw/pull/129388)（context-pressure-aware continuation）呼应，方向已获工程投入。
- **记忆审计日志**：[#20935](https://github.com/openclaw/openclaw/issues/20935)（已关闭，或已实现）+ Dream Diary 语言可配置 [#79223](https://github.com/openclaw/openclaw/issues/79223)（needs-product-decision）——记忆子系统的治理功能呼声持续。
- **Observability**：[#127195](https://github.com/openclaw/openclaw/issues/127195) 十六个调用点报同一错误字符串、无原因码——可观测性改进是社区明确诉求，与今日多个诊断类 PR 方向一致。

---

## 7. 用户反馈摘要

**痛点集中区**
1. **可靠性信任受损**：多位长期用户报告"重启才能恢复"类问题（#158592、#166634、#162211），macOS 睡眠/唤醒与 launchd 部署场景反复出现——**桌面级长期运行稳定性是最大短板**。
2. **记忆系统不透明**：晋升失败（#164923）、跨代理污染（#65374）、Dream Diary 强制英文（#79223）——用户感到核心差异化功能"看得见、控不住"。
3. **消息丢失最伤信任**：Telegram mid-turn 丢消息（#160762）、codex 最终答案丢失（#155396）、委派投递失败（#158070）均标注 message-loss。
4. **运维工具自身不可靠**：`doctor` 空转（#178359）、`doctor --fix` 拒绝在线修复（#179481）、聊天内 `/update` 死锁（#186813）——修复工具反而成为故障源。

**满意/认可点**
- 版本发布与安全响应节奏快（10 月内多个安全补丁 + LTS 通道）。
- Unicode/国际化细节的批量修复（越南语、韩语、法语用户受益）说明社区贡献通道畅通，机器人辅助贡献（roboclaw-bot）产出高质量 PR。
- Issue 分级标签体系（P0/P1、impact、issue-rating）透明度高，用户可自行判断风险。

---

## 8. 待处理积压（建议维护者优先关注）

| 项目 | 状态 | 关注理由 |
|---|---|---|
| [#162211](https://github.com/openclaw/openclaw/issues/162211) P0 crash-loop | stale，无 fix PR | 启动重启循环，阻断可用性 |
| [#158592](https://github.com/openclaw/openclaw/issues/158592) P0 | 无 fix PR，needs-live-repro | 唤醒后永久失败，macOS 用户高频场景 |
| [#177656](https://github.com/openclaw/openclaw/issues/177656) P1 stable 28+ 失败 | 无 fix PR，clawtributor-review 中 | 影响 stable 通道可信度 |
| [#65374](https://github.com/openclaw/openclaw/issues/65374) P1 安全 | 4 月开至今未决 | 多代理记忆污染 + data-loss/security 三重标签 |
| [#150635](https://github.com/openclaw/openclaw/issues/150635) dreaming 晋升失效 | stale，needs-product-decision，linked PR open | 与 #164923、#157827、#172547 构成记忆子系统问题集群，建议统一规划 |
| [#164690](https://github.com/openclaw/openclaw/issues/164690) claude-cli MCP 双份 spawn | 无 fix PR | 每子进程 ~145MB 不可配置开销，重度用户资源痛点 |
| [#129388](https://github.com/openclaw/openclaw/pull/129388) continuation XL PR | 8/25 开至今，needs proof | 三重 merge-risk 标签，长期占用评审带宽，建议明确去留 |
| [#150743](https://github.com/openclaw/openclaw/issues/150743) QQ 渠道支持停滞 | stale，needs-product-decision | 生态/支持模型问题，中文社区关切，长期无官方回应损害信任 |

---

**健康度小结**：OpenClaw 当前处于**高产出、高债务并存**阶段——吞吐与安全响应优秀，但状态层/记忆子系统积累的 P0/P1 集群（多个 10+ 评论未决）需要一轮系统性收敛，建议优先消化 #188070/#188111 一类状态层修复的后续验证，并对 Dreaming/Skill Workshop 给出明确产品决策。

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告（2026-10-30）

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入**“多智能体架构 + 记忆系统 + 多渠道接入”的深水区竞争阶段**：头部项目（OpenClaw、NanoBot、Zeroclaw）日均 Issue/PR 更新达数百条，中小项目则呈现单人/小团队高频自驱或生态位垂直化生存。行业共性焦点从“能跑起来”转向**可靠性、安全边界与可控性**——状态层一致性、权限隔离、静默失败治理成为各项目 P0/P1 问题的主要来源。同时，记忆/Dreaming 子系统、Skill 生态治理、插件化架构是三条并行演进的技术主线，且均已出现“需要产品级决策而非零散补丁”的治理拐点。

---

## 2. 各项目活跃度对比

| 项目 | Issue 活动 | PR 活动 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500 条（新开/活跃 353，关闭 147） | 500 条（待合 276，合/关 224） | 3 个（beta 安全修复 + LTS） | ⭐⭐⭐⭐ 高产出高债务，吞吐优秀但 P0/P1 集群未收敛 |
| **NanoBot** | 新增 2 | 19 条（合/关 10） | 0 | ⭐⭐⭐⭐ 健康打磨期，修复响应快（Win 锁 Bug 当日闭环） |
| **Zeroclaw** | 50 条（新开 33，关闭 17） | 50 条（待合 42，合/关 8） | 0 | ⭐⭐⭐ RFC 落地清晰，但评审积压 + 安全 P1 无修复 |
| **Hermes Agent** | 50 条（新开 47，关闭 3） | 50 条（待合 49，合/关 1） | 0 | ⭐⭐ 输入/消化严重失衡，无版本致回归无法绕过 |
| **CoPaw** | 12 条（新开 4，关闭 8） | 35 条（待合 24，合/关 11） | 0（v2.3.0-beta.1 后收尾） | ⭐⭐⭐⭐ 修复闭环率高（2:1），插件化架构演进中 |
| **NanoClaw** | 0 | 16 条（合/关 8） | 0 | ⭐⭐⭐ Skills 安全治理闭环，Issue 侧零活动需观察 |
| **PicoClaw** | 0 | 20 条（全部关闭/合并） | 0 | ⭐⭐⭐ 清理日，积压周期曾达 6 个月+ |
| **ZeptoClaw** | 4 新增，1 关闭 | 1 关闭 | 0 | ⭐⭐ 单人自驱，安全闭环及时但 CI 门禁缺失 |
| **LobsterAI** | 2（账号申诉类） | 6（3 功能 PR 完成） | 0 | ⭐⭐ 渐进迭代，运营/风控问题外溢到社区 |
| **EasyClaw** | 0 | 0 | **2 个**（v1.9.43/44） | ⭐⭐ 开发热社区冷，Release 驱动 |
| **IronClaw** | 0 | 2（dependabot） | 0 | ⭐ 仅自动化维护 |
| **NullClaw / TinyClaw / Moltis** | 0 | 0 | 0 | 休眠 |

---

## 3. OpenClaw 在生态中的定位

**优势**：
- **规模与吞吐断层领先**：日均 500+ Issue / 500+ PR 更新、月内多个安全补丁 + LTS 通道，社区规模和工程投入约为第二梯队（NanoBot/Zeroclaw）的 10 倍量级。
- **发布工程成熟**：beta / stable / extended-stable（类 LTS）三通道 + 快速安全响应（fast-uri/nodemailer/Discord SDK 依赖修复在同日补丁中完成），是生态中唯一具备完整发布治理的项目。
- **国际化贡献通道畅通**：单日 4 个 Unicode NFD/NFC 规范化 PR（Signal/Zalo/Teams/Codex），机器人辅助贡献（roboclaw-bot）产出高质量代码。

**短板（相对同类）**：
- **状态层可靠性债务沉重**：P0 crash-loop（#162211）、唤醒后永久失败（#158592）等多个 10+ 评论未决，长期运行稳定性反而不如小体量的 NanoBot（其 Heartbeat 任务化、运行时真停止等修复当日落地）。
- **记忆系统缺乏产品决策**：Dreaming 晋升失败（#150635）、跨代理污染（#65374，4 月至今未决）——对比 Zeroclaw 用 RFC 流程（#10526 已 accepted）解决架构争议，OpenClaw 的 needs-product-decision 积压更多。
- **多代理安全隔离落后**：Zeroclaw/Hermes 均在推进 RBAC/Profile 隔离，OpenClaw 的会话机密性（#187836）才刚进入 XL PR 阶段。

**技术路线差异**：OpenClaw 走“大而全平台”（多渠道 + Dreaming 记忆 + Skill Workshop + 多用户 Gateway），NanoBot/Zeroclaw 走“架构收敛优先”，PicoClaw/ZeptoClaw 走嵌入式/轻量化路线。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **记忆/上下文可靠性** | OpenClaw、CoPaw、Hermes | OpenClaw Dreaming 晋升失效与跨代理污染（#150635/#164923/#65374）；CoPaw Auto-Dream 静默丢记忆（#8500）+ 自动召回内容污染模型行为（#8457/#7835）；Hermes 过早压缩丢上下文（#69881）。**“报成功但实际没做”是跨项目最高频信任危机** |
| **上下文压缩治理** | OpenClaw、CoPaw、Hermes | OpenClaw self-compact 工具（#6757）+ continuation PR（#129388）；CoPaw `/compact` 模型切换失效（#8464）+ 决策持久化（#6189） |
| **多渠道接入与国际化** | OpenClaw、NanoBot、PicoClaw、NanoClaw、Zeroclaw | Unicode 规范化批量修复（OpenClaw）；邮件 OAuth2/别名过滤（NanoBot）；MQTT/iMessage/微信/飞书（PicoClaw）；Telegram/Slack 投递可靠性（NanoClaw）；Slack/Matrix 回归（Zeroclaw） |
| **Skill/能力安全治理** | OpenClaw、NanoClaw、Zeroclaw | OpenClaw "Skill Workshop 瘟疫”争议（#184600，要求变异审查门槛）；NanoClaw `ncl skills` 受控安装框架闭环；Zeroclaw skill 学习循环对 channel 用户失效（#11332） |
| **权限/多租户隔离** | OpenClaw、Zeroclaw、Hermes、ZeptoClaw | OpenClaw 会话机密性 + operator.cron；Zeroclaw per-sender RBAC（#5982）+ 知识图谱 S0 越权（#9647）；Hermes 跨 profile memory 泄漏（#145968）；ZeptoClaw serve API 认证（已修复） |
| **凭据/密钥安全** | Hermes、NanoClaw、PicoClaw、CoPaw | Hermes redaction 泄漏修复（#146688/#146701/#146715）；PicoClaw 凭证加密 + exec 环境净化；CoPaw env 明文打印（#8501） |
| **多智能体失败链路** | OpenClaw、Zeroclaw、PicoClaw | OpenClaw 委派失败回传（#187924）+ Codex 子代理泄漏（#172837）；Zeroclaw 派生 agent 流 RFC；PicoClaw subturn PoC |
| **可观测性** | OpenClaw、NanoBot、Hermes、Zeroclaw | 错误归因/原因码缺失是四个项目共同的 failover 层系统性问题 |

---

## 5. 差异化定位分析

| 维度 | 分层 |
|---|---|
| **全功能个人助手平台** | OpenClaw（Dreaming 记忆 + Skill Workshop + 多渠道 + 多用户 Gateway）；LobsterAI（IM agent + cowork 多模态，偏中文企业场景） |
| **架构收敛型助手** | NanoBot（会话生命周期 + 通道解耦 + 自动化统一管理）；Zeroclaw（事件溯源架构 + ZeroCode TUI + 插件体系，面向运营者/多租户） |
| **企业级多端部署** | Hermes Agent（Gateway + Desktop + 移动端 + 多 Profile + 沙箱安全，用户已演进到 K8s/NFS 复杂部署） |
| **插件化重构中** | CoPaw（第三方 agent 插件化 + 本地模型管理插件化 + 本地打分模型做压缩决策） |
| **Skill 生态优先** | NanoClaw（受控能力安装 + 邮件/日历技能，"agent 接管日程”场景） |
| **嵌入式/轻量** | PicoClaw（RISC 硬件背景、国产 Provider/GLM 支持）；ZeptoClaw（Rust 单二进制 ~11MB，多租户 OpenAI 兼容 serve） |
| **垂直商业场景** | EasyClaw（TikTok 电商客服/联盟营销，Release 驱动）；IronClaw（wasmtime 沙箱基建，近休眠） |

**目标用户差异**：OpenClaw/LobsterAI 面向个人深度用户与 IM 场景运营者；Hermes/Zeroclaw 面向多端/多租户生产部署；NanoBot 处于两者之间（企业邮件场景 PR 密集）；ZeptoClaw/PicoClaw 面向资源受限与自托管极简用户。

---

## 6. 社区热度与成熟度分层

- **快速迭代 + 高债务期**：OpenClaw（高产出但 P0 集群待收敛）、Hermes（输入远超消化，49:1 积压需警惕倦怠信号）
- **质量巩固期**：NanoBot、Zeroclaw、CoPaw —— 修复闭环率高、架构决策（RFC/重构）先行，处于“为下个大版本收敛”阶段（Zeroclaw v0.9.0、CoPaw v2.3.0 信号明确）
- **存量清理/方向确认期**：PicoClaw（6 个月积压集中关闭，多智能体方向待澄清）、NanoClaw（Skills 治理定调后等新一轮贡献）
- **单人自驱/早期**：ZeptoClaw（质量冲刺但社区为零）、EasyClaw（开发热社区冷）
- **休眠**：NullClaw、TinyClaw、Moltis、IronClaw（仅自动化依赖维护）

---

## 7. 值得关注的趋势信号

1. **“静默失败”取代崩溃成为头号信任杀手**。跨项目最高频投诉是“报告成功但实际没做”（OpenClaw #150635、CoPaw #8500/#8488、Hermes #125537/#146722）。对开发者的启示：**失败语义与可观测性（原因码、重试、告警）应作为一等公民设计**，而非事后补丁。
2. **记忆系统从卖点变为负债，治理拐点已至**。各项目的 Dreaming/记忆晋升问题集中爆发，且共同诉求是**用户可见的控制开关 + 审计日志 + 代理边界隔离**。凡是让记忆“看得见、控不住”的设计都在流失信任。
3. **自主行为的同意门槛成为产品必答题**。OpenClaw Skill Workshop 争议、NanoClaw 受控安装框架、各项目的 exec-approvals/blacklist 诉求，指向同一结论：**agent 自主变更能力必须经过操作员策略层**，先行落地者（NanoClaw）已形成差异化。
4. **事件溯源/确定性重放进入主流**。Zeroclaw RFC #10526 accepted、OpenClaw 状态层修复集群、Hermes 会话所有权重构，均指向“执行事实不可变记录 + 可重放”的 runtime 架构方向。
5. **非英语用户与渠道长尾是增量战场**。Unicode 规范化、微信/QQ/飞书/Zalo 接入、国产 Provider（GLM/MiniMax）支持是中小项目获取差异化用户的主要路径——OpenClaw 对 QQ 渠道诉求的长期沉默（#150743）正在损害中文社区信任。
6. **安全从依赖卫生升级为架构边界问题**。多租户越权（Zeroclaw #9647）、跨 profile 泄漏（Hermes）、serve API 认证（ZeptoClaw）表明：随着 agent 持有凭据、管理日程、跨代理共享数据，**权限模型必须与功能同步设计**，晚补的代价是 S0 级积压。
7. **评审带宽是新的瓶颈**。Zeroclaw 42 条待合并、Hermes 49:1、CoPaw XXXL PR 长审——生态整体贡献供给充足，**维护者评审能力（含 bot 辅助 review）将决定下一轮项目分化**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-10-30）

## 1. 今日速览

NanoBot 今日保持高活跃度：过去 24 小时内 PR 活动达 19 条（10 条已合并/关闭、9 条待合并），Issues 新增 2 条，无新版本发布。核心贡献者 @chengyongru 持续高强度输出，今日集中落地了一批架构治理类重构（Heartbeat 任务化、运行时控制、通道描述符化）与稳定性修复，项目处于“深度打磨 + 功能扩张并行”的健康阶段。Windows 平台文件锁问题成为今日最受关注的新 Bug，且已有对应修复 PR 提交。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日共 10 个 PR 合并/关闭，整体推进显著：

**重要架构演进（p1 级别）：**
- [#6520](https://github.com/HKUDS/nanobot/pull/6520) [CLOSED] **Heartbeat 重构为普通计划任务**：原 Heartbeat 游离于任务管理体系之外（受保护的 cron 任务 + 独立 agent 轮次 + 二次模型判断），现在用户可像普通自动化一样编辑、暂停、运行、删除。这是用户可控性的重要提升。
- [#6519](https://github.com/HKUDS/nanobot/pull/6519) [CLOSED] **运行时模型/停止/重启控制结构化**：停止操作现在真正等待旧会话的清理完成，避免“假停止”，保留最终输出与工具上下文。

**稳定性与资源修复：**
- [#6525](https://github.com/HKUDS/nanobot/pull/6525) [CLOSED] API 连接断开时取消对应请求工作并正确排水清理，避免影响同会话其他请求。
- [#6524](https://github.com/HKUDS/nanobot/pull/6524) [CLOSED] 长时间运行命令的活动状态诚实化：重复观察更新同一活动，不再伪造任务完成。
- [#6522](https://github.com/HKUDS/nanobot/pull/6522) [CLOSED] Provider 客户端退役机制修复，长生命周期 Gateway/SDK 不再累积废弃连接。
- [#6516](https://github.com/HKUDS/nanobot/pull/6516) [CLOSED] Gateway lease 写入减少 + Windows 安全 I/O——**直接对应今日新 Issue #6514 的 WinError 5 问题**，响应速度值得肯定。

**代码治理：**
- [#6523](https://github.com/HKUDS/nanobot/pull/6523)、[#6521](https://github.com/HKUDS/nanobot/pull/6521)、[#6498](https://github.com/HKUDS/nanobot/pull/6498)、[#6518](https://github.com/HKUDS/nanobot/pull/6518)：Shell 补全外移、通道描述符自有回复指引、工具提示渲染出核、移除遗留 JSONL 历史与代理迁移。

总体来看，项目在会话生命周期管理、通道架构解耦、资源治理三个方向同时推进，为下一个大版本做代码层面的收敛。

## 4. 社区热点

- **[#6514](https://github.com/HKUDS/nanobot/issues/6514)** Windows 下 `PermissionError [WinError 5]`（2 条评论，今日新开）：Gateway 客户端 lease 文件 `~/.nanobot/run/gateway.clients.json` 重写时间歇性失败。诉求明确——Windows 用户无法稳定运行 Gateway。**修复 PR #6516 已于今日关闭（疑似已合并）**。
- **[#6526](https://github.com/HKUDS/nanobot/issues/6526)** 4.0 更新后 "no earlier messages" 阻塞原生滚动（1 条评论）：一位自称长期用户对 4.0 WebUI 回归表达强烈不满，涉及滚动行为与字体/样式异常，反映 UI 重构可能存在回归。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 高 | [#6514](https://github.com/HKUDS/nanobot/issues/6514) Windows Gateway lease 重写 PermissionError，间歇性中断服务 | ✅ 已有修复 PR [#6516](https://github.com/HKUDS/nanobot/pull/6516) |
| 中 | [#6526](https://github.com/HKUDS/nanobot/issues/6526) WebUI 4.0 滚动被阻塞、样式异常 | ⚠️ 尚未见修复 PR |
| 中 | [#5484](https://github.com/HKUDS/nanobot/pull/5484) MCP 业务错误信封（`isError=false`）导致 agent 误判成功并无限重试 | 待合并，标 conflict |
| 低 | [#5605](https://github.com/HKUDS/nanobot/pull/5605) IMAP 邮件未真正投递也被标记 `\Seen` | 待合并 |

## 6. 功能请求与路线图信号

- **邮件通道强化**：[@tilladam](https://github.com/HKUDS/nanobot/pull/5609) 的 Microsoft OAuth2（O365 强制弃用基础认证）+ [#5606](https://github.com/HKUDS/nanobot/pull/5606) 收件别名过滤，均为实际企业场景刚需，合并概率高。
- **WebUI 消息原地编辑重发** [#6323](https://github.com/HKUDS/nanobot/pull/6323)：会话内编辑重发是 AI 助手高频需求，已实现完整方案但标 conflict，需解决冲突后落地。
- **Langfuse 追踪系统集成** [#6517](https://github.com/HKUDS/nanobot/pull/6517)：可观测性是企业采用信号，与 Nan-92 等内部任务呼应，预计下版本纳入。
- **Serply 搜索 Provider** [#5437](https://github.com/HKUDS/nanobot/pull/5437)：低风险增量，容易合入。
- **Heartbeat 任务化（已合）+ 运行时控制（已合）** 表明路线图重心在“自动化统一管理”与“会话生命周期可靠性”。

## 7. 用户反馈摘要

- **Windows 用户**遭遇 Gateway lease 权限错误（#6514），说明 Windows 文件原子替换是长期薄弱点，今日修复表明维护者响应积极。
- **WebUI 4.0 老用户不满**（#6526）：原文"Fast, responsive… I really loved this Agent"——用户认可性能，但对 4.0 的滚动阻塞和排版变化失望，提示 UI 大改缺乏平滑过渡，建议关注 4.x 的可用性回归。
- 社区贡献者（@tilladam、@googio、@c020627）持续在邮件通道、搜索 Provider、MCP 错误处理上输出企业级用例（共享邮箱别名、OAuth 迁移、错误信封），反映 NanoBot 正被用于生产环境。

## 8. 待处理积压

- **[#5484](https://github.com/HKUDS/nanobot/pull/5484)**（8/22 开启，标 conflict）：MCP 错误信封修复，影响 agent 可靠性，建议维护者协助解决冲突。
- **[#6323](https://github.com/HKUDS/nanobot/pull/6323)**（10/20 开启，标 conflict）：WebUI 消息编辑功能，用户价值高。
- **[#5606](https://github.com/HKUDS/nanobot/pull/5606) / [#5605](https://github.com/HKUDS/nanobot/pull/5605) / [#5609](https://github.com/HKUDS/nanobot/pull/5609)**（均 8 月底开启，两个月未合并）：邮件通道系列 PR，功能完整带测试，建议批量 review。
- **[#5437](https://github.com/HKUDS/nanobot/pull/5437)**（8/19 开启）：Serply Provider，积压超两个月，属低成本合入项。

---
*数据来源：GitHub HKUDS/nanobot，统计窗口 2026-10-29 至 2026-10-30。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-10-30

---

## 1. 今日速览

Zeroclaw 今日保持高活跃度：过去 24 小时内 Issues 更新 50 条（新开/活跃 33、关闭 17），PR 更新 50 条（待合并 42、已合并/关闭 8），无新版本发布。社区讨论焦点集中在**架构级 RFC**（会话事件历史、RAG 知识库）与**安全类 Bug**（知识图谱权限、网关配对配置失效）。贡献者 @Audacity88 保持高产，ZeroCode TUI 相关 PR 形成密集功能簇。整体看项目处于 v0.8.6 后的持续打磨期，多个 issue 已标记 `release:v0.9.0`，下个大版本信号明显。

---

## 2. 版本发布

无新版本发布。值得注意：[#9394](https://github.com/zeroclaw-labs/zeroclaw/issues/9394) 与 [#12076](https://github.com/zeroclaw-labs/zeroclaw/issues/12076) 均带 `release:v0.9.0` 标签，v0.9.0 正在酝酿中。

---

## 3. 项目进展

今日无大型合并，PR 合入以小型测试与修复为主，但**待合并队列（42 条）规模可观**，且多条为 XL 级功能 PR，显示大量工作已就绪等待评审：

- **测试补强**：[#12030](https://github.com/zeroclaw-labs/zeroclaw/pull/12030)（UTF-8 字节偏移日志分页回归测试，CLOSED）、[#12029](https://github.com/zeroclaw-labs/zeroclaw/pull/12029)（Unicode 文本下的持久化脱敏回归测试，CLOSED）——由 @Leon-SK668 贡献，均已进入收尾。
- **ZeroCode 功能簇（@Audacity88，多为 XL）**：
  - [#11621](https://github.com/zeroclaw-labs/zeroclaw/pull/11621)：运行中 turn 中途发送消息可"转向"当前执行
  - [#11589](https://github.com/zeroclaw-labs/zeroclaw/pull/11589)：允许操作员越过已超限的成本上限（覆盖 9 个 channel 标签，影响面广）
  - [#11730](https://github.com/zeroclaw-labs/zeroclaw/pull/11730)：前台 delegate 的工具调用实时显示在父 turn 中
  - [#11698](https://github.com/zeroclaw-labs/zeroclaw/pull/11698)：personality 文件按会话固定，避免编辑破坏 prompt cache
  - [#11463](https://github.com/zeroclaw-labs/zeroclaw/pull/11463)：本地 file_write 前展示 diff 预览
- **Issue 侧关闭成果**：RFC #10526（追加式会话事件历史）正式关闭并 `status:accepted`，架构方向落定；#11432（daemon 中途被杀后 session 永久 running）、#11517（Web 聊天刷新丢 prompt）等一批 bug 已关闭。

**评估**：合并量虽小，但 42 条待合并 PR（多条仅差维护者评审）意味着一波集中合入后 ZeroCode 与 runtime 体验将有显著跃升，项目实质推进幅度大于表面合并数。

---

## 4. 社区热点

| 排名 | Issue | 讨论热度 | 核心议题 |
|---|---|---|---|
| 1 | [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526)（14 评论，已关闭） | RFC：追加式会话事件历史 + 确定性状态重放 + 派生 agent 流 | 执行事实（TurnEvent、日志、tool receipts、成本记录）散落多处，社区要求统一的不可变事件源模型。**已接受并关闭**，是今日最重要的架构决策。 |
| 2 | [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)（11 评论） | 多租户部署的 per-sender RBAC | 范围已收窄为基于现有 agent/risk-profile 的 sender 角色，草稿 PR #11068 进行中，诉求来自多租户生产部署场景。 |
| 3 | [#10999](https://github.com/zeroclaw-labs/zeroclaw/issues/10999)（9 评论，blocked） | Discord 插件从 release 二进制安装验证 | v0.8.6 最终归档的实测收发已验证，但流程仍被阻塞，插件安装可复现性是社区关切。 |
| 4 | [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418)（8 评论，S1） | ZeroCode "Copy" 按钮完全失效 | 用户报 S1 级工作流阻断，fix PR [#11529](https://github.com/zeroclaw-labs/zeroclaw/pull/11529) 已在评审中。 |
| 5 | [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235)（7 评论，needs-author-action） | RFC：知识库 RAG 文档检索 | 用户希望 agent 能检索操作者自有文档/安全标准/命令参考，属于新子系统级能力，等待作者补充。 |

---

## 5. Bug 与稳定性

按严重程度排列：

**P1 / S0-S1 级**
- **#9647**（S0 数据/安全风险）[知识图谱无 per-agent 归属](https://github.com/zeroclaw-labs/zeroclaw/issues/9647)：任何 agent 可读写其他 agent 的知识，多 agent 部署下的越权问题，**暂无 fix PR**，需重点关注。
- **#9394**（P1 安全）[gateway.pairing_dashboard 配置被完全忽略，配对码永不过期](https://github.com/zeroclaw-labs/zeroclaw/issues/9394)：审计级报告，已接受并锁定 v0.9.0，**暂无对应 PR**。
- **#11418**（S1）[ZeroCode Copy 失效](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) → fix PR [#11529](https://github.com/zeroclaw-labs/zeroclaw/pull/11529) 待合并。

**P2 / S2 级**
- **#11332** [Skill review/creation 对 channel/webhook/web UI turn 不生效](https://github.com/zeroclaw-labs/zeroclaw/issues/11332)：学习循环只在 CLI/cron 运行，channel 用户的核心能力缺失。无 fix PR。
- **#11333** [Skill review 工具看不到 skill_bundles 分配的技能](https://github.com/zeroclaw-labs/zeroclaw/issues/11333)。无 fix PR。
- **#11416** [Slack 线程中 "is thinking…" 状态自 v0.8.5 消失](https://github.com/zeroclaw-labs/zeroclaw/issues/11416)：疑似 #8985 引入的行为回归，等待官方确认是否有意。
- **#10926** [Matrix send_via 将 peer 用户身份误作房间目标](https://github.com/zeroclaw-labs/zeroclaw/issues/10926)。
- **#11336** [插件 CLI 校验通过但 runtime 拒绝注册](https://github.com/zeroclaw-labs/zeroclaw/issues/11336)：`plugin info` 报告与实际行为不一致。
- **#11562**（已关闭）[插件更新期间 manifest 代际错配](https://github.com/zeroclaw-labs/zeroclaw/issues/11562)：宽松签名模式下包可能短暂以旧 manifest 运行，已处理。

**P3 / S3 级**：#11360（包锁文件可被其他本地账户持有）、#11358（plugin migrate 绕过包锁）、#11703（deferred tool 激活破坏 prompt cache，成本问题）。

**稳定性总评**：Bug 报告质量高（含精确代码定位），关闭速度（17/50）健康；但**安全类 P1（#9647、#9394）尚无修复 PR**，是当前最大风险点。

---

## 6. 功能请求与路线图信号

**已接受、方向明确**：
- **#10526 会话事件历史 RFC** 已关闭为 accepted——确定性重放与派生 agent 流将成为 runtime 核心架构，预计带动一批实现 PR。
- **#11013 统一文件 intake/resolver/delivery tracker**（基于已接受的 RFC #9488）：实现批次进行中，[#11463](https://github.com/zeroclaw-labs/zeroclaw/pull/11463)（file_write diff 预览）是其前端配套。
- **#10993 完成 runtime 公共组合边界**：runtime 可嵌入化重构，属 #7432 Phase 2 延续。

**v0.9.0 信号**（带 `release:v0.9.0` 标签）：#9394（pairing 安全修复）、#12076（v0.8.7 翻译修复，已关闭）——v0.9.0 候选集已初步成形。

**进行中且有 PR 支撑、大概率进下一版本**：#11418→PR #11529（Copy 修复）、#11484 已关闭（repetitive-tool 防护）、ZeroCode 配置编辑簇（#11501/#11502/#11505/#11510）、Anthropic provider 修复（#11544/#11541，但均 `status:blocked`/`do-not-merge`，存在阻塞）。

**待定**：#11235（RAG RFC，needs-author-action）、#5982（RBAC，依赖草稿 #11068）。

---

## 7. 用户反馈摘要

- **多 agent 安全隔离是最强烈痛点**：#9647、#5982、#9394 三个高讨论安全问题均指向同一主题——用户在生产多租户/多 agent 部署中缺乏权限边界与归属隔离。
- **Channel 用户感到"二等公民"**：#11332 反映 skill 学习循环只对 CLI 生效，Matrix/Slack/web 用户功能不完整；#11416 的 Slack 状态消失加剧此感受。
- **ZeroCode TUI 用户满意但摩擦点多**：Copy 失效（#11418）、Config 保存/取消行为不可预测（#11486，已关闭）、刷新丢 prompt（#11517，已关闭）——配套 PR 簇显示维护响应积极。
- **成本敏感**：#11703（prompt cache 失效）与 PR #11698/#11589 显示用户对 token 成本与可观测性高度关注。
- **插件生态可靠性**：#10999、#11336、#11360、#11358 一组 issue 表明插件安装/迁移/校验链条仍脆弱，社区在推动端到端可复现验证。

---

## 8. 待处理积压

建议维护者优先关注：

1. **[#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647)** — S0 安全，8 月开出至今无 fix PR，多 agent 用户直接暴露。
2. **[#9394](https://github.com/zeroclaw-labs/zeroclaw/issues/9394)** — P1 安全，已绑定 v0.9.0 但无实现 PR，需排期。
3. **[#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) / [#11333](https://github.com/zeroclaw-labs/zeroclaw/issues/11333)** — skill 学习循环对 channel 用户失效，影响核心卖点，无修复进展。
4. **PR #11544 / #11541（Anthropic provider）** — 长期 `status:blocked`/`do-not-merge`，#11541 为 `risk:high` 安全修复（extra_headers 丢失），阻塞原因需澄清。
5. **[#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235)（RAG RFC）** — needs-author-action 超过一个月，高价值需求可能流失，建议维护者介入推进或接手。
6. **42 条待合并 PR** — 其中 @Audacity88 的多条 XL 级 ZeroCode PR 长期处于 needs-author-action/needs-maintainer-review，评审带宽可能是当前最大瓶颈。

---

**健康度小结**：报告质量高、响应闭环快（34% issue 关闭率）、路线图清晰（v0.9.0 雏形可见）。风险集中在安全类 P1 修复缺位与 PR 评审积压两点。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-10-30

## 1. 今日速览

Hermes Agent 今日保持高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 47，关闭 3），PR 更新 50 条（待合并 49，已合并/关闭仅 1）。讨论焦点集中在**会话状态管理（session slot/lease 泄漏）、多 Profile 隔离安全、以及终端命令密钥泄漏**三大主题。今日无新版本发布，合并节奏明显偏慢（49:1 的待合并/已合并比），积压的 PR 队列值得维护者关注。总体看，社区报告质量高、贡献者响应积极，项目处于健康但需消化积压的状态。

---

## 2. 版本发布

今日无新版本发布。（最新相关线索：Issue #146722 指出 v0.22.5 存在 `hermes import` 回归；Issue #146735 提到 v0.22.5+ 已包含会话所有权重构 #106742/#134889。）

---

## 3. 项目进展

今日仅 1 个 PR 被合并/关闭，整体推进有限，但待合并队列中有多个高质量 PR 蓄势待发：

- **依赖 DAG 机械化落地（Issue → PR 闭环）**：[@romannekrasovaillm](https://github.com/NousResearch/hermes-agent/pull/146748) 今日同时提交 Issue #146473（描述 152 条边、9 个环的模块依赖现状无任何 CI 强制）和 PR #146748（为 `scripts/code_health` 增加导入图检查 pass），配套 Issue #146612 修复 code health "空跑也报 (ok)" 的问题。这是架构治理的完整一套提案。
- **TUI 输入体验持续打磨**：PR [#146415](https://github.com/NousResearch/hermes-agent/pull/146415) 修复 #146126 引入的 250ms 内二次 Enter 重复提交问题——注意这是对两天前刚合入代码的回归修复，发布节奏值得警惕。
- **安全类 PR 密集提交**：
  - PR [#146688](https://github.com/NousResearch/hermes-agent/pull/146688)：修复终端输出 redaction 泄漏 `*.env`/`*.toml` 密钥、CLI secret 标志、URL path token 等 4 种形态。
  - PR [#146701](https://github.com/NousResearch/hermes-agent/pull/146701)：修复多行脚本命令未被分段扫描导致的密钥文件读取检测失效。
  - PR [#146715](https://github.com/NousResearch/hermes-agent/pull/146715)（由 @jquesnelle 提交，疑似核心成员）：将 Bitwarden/1Password 密钥缓存和 Photon token 移至 profile home 根部，防止沙箱按路径隐藏凭据。
- **Docker 沙箱安全边界**：PR #97727 / #109529 持续推进 `docker_extra_args` 中 host bind 挂载的保守检测；PR #104328 提供零能力 Docker 沙箱选项。

---

## 4. 社区热点

| Issue | 评论 | 热点主题 |
|---|---|---|
| [#20249](https://github.com/NousResearch/hermes-agent/issues/20249)（已关闭，not-planned） | 13 | **按需专家模型升级**：廉价模型跑日常、单轮升级到 Opus 级推理的 Model Presets 提案。讨论充分但最终以 not-planned 关闭，社区对结果有持续讨论。 |
| [#125537](https://github.com/NousResearch/hermes-agent/issues/125537) | 10 | `pm gc` 静默失效：在 generation workspace 树中执行时 `repo_root()` 指向错误路径，垃圾回收"报告成功但什么都没收集"。 |
| [#112028](https://github.com/NousResearch/hermes-agent/issues/112028) | 9（👍1） | **多 Surface 同会话访问**：Desktop 会话打开时移动端无法提交消息，服务器直接拒绝。多端协同是明确的用户诉求，标记 needs-decision，等待架构决策。 |
| [#142144](https://github.com/NousResearch/hermes-agent/issues/142144) | 8 | Desktop 首轮即 `AuthError`：billing-class slug `custom` 被错误持久化到 composer 并作为 launch provider 发送。 |
| [#126486](https://github.com/NousResearch/hermes-agent/issues/126486) | 7 | **修复未合入的幽灵 Issue**：#69120 被关闭但其修复 PR #69151 未合并，流式渲染在 800 条消息时从 100fps 掉到 17fps。流程管理问题的典型案例。 |

**诉求分析**：热点集中在“多端/多 Profile 使用场景下的会话与配置一致性”，说明用户已从单机 CLI 使用演进到 Gateway + Desktop + 移动端 + 多 Profile 的复杂部署形态。

---

## 5. Bug 与稳定性

按严重程度排列：

**P2 - 高优先级**

1. **会话槽位泄漏（两个相关报告，疑似同根因）**
   - [#146735](https://github.com/NousResearch/hermes-agent/issues/146735)（今日新开）：Desktop 后端永不释放 active-session lease，关 Tab、reap session 都不释放。⚠️ 报告者注明可能已被 v0.22.5+ 会话重构修复。
   - [#57052](https://github.com/NousResearch/hermes-agent/issues/57052)（长期未解）：空闲 Tab 在 composer paint 时即占坑 `max_concurrent_sessions`，一夜后所有 Surface 全部拒绝新会话。
2. **TUI 崩溃** [#146723](https://github.com/NousResearch/hermes-agent/issues/146723)（今日新开）：gateway 铸造的消息会话 `sessions.model` 永久为 NULL，`/sessions` 直接 `TypeError` 崩溃。尚无 fix PR。
3. **v0.22.5 回归** [#146722](https://github.com/NousResearch/hermes-agent/issues/146722)（今日新开）：`hermes import` 跳过 backup 会保存的媒体与 citations ledger 缓存目录。尚无 fix PR。
4. **视觉工具失效** [#146308](https://github.com/NousResearch/hermes-agent/issues/146308)：`vision_analyze` 把 image_url 块作为 JSON 文本返回，图片从未真正进入模型上下文。
5. **静默失败类**：
   - [#132291](https://github.com/NousResearch/hermes-agent/issues/132291)：smart approval 的 guardian LLM 不可达时 fail-open 成静默 300s 等待。
   - [#124874](https://github.com/NousResearch/hermes-agent/issues/124874)：HTTP-200 拒答后 fallback 无原因日志。
   - [#125537](https://github.com/NousResearch/hermes-agent/issues/125537)：pm gc 静默空收。
6. **Profile 重命名数据断裂** [#145200](https://github.com/NousResearch/hermes-agent/issues/145200)：Bot Chat receipts 未随 profile rename 迁移，Desktop 无法打开 renamed bot。

**P3 - 安全**
- [#145968](https://github.com/NousResearch/hermes-agent/issues/145968)：多路复用 gateway 跨 profile 共享 memory-provider 实例，存在跨 profile 读取风险。

**已有 fix PR 的**：TUI 双 Enter 回归（PR #146415）、redaction 泄漏（PR #146688/#146701）、http registry 导致 update 失败（PR #146745）。

---

## 6. 功能请求与路线图信号

- **多 Surface 会话共享**（#112028，needs-decision）：与今日新开的 session lease 问题（#146735）同属会话所有权域，v0.22.5 的 gateway-owned sessions 重构可能为其铺路，**下版本最可能落地**。
- **fallback_providers 参数对等**（#136441，👍2）与 per-model reasoning_effort（#21256，已关闭但诉求仍在 #136441 中延续）：配置表达力是持续痛点，可关注。
- **Kanban 治理**：PR [#146740](https://github.com/NousResearch/hermes-agent/pull/146740)（planner admission 门禁）直击 #145741 的重复卡片问题；#38185 的非 SQLite 后端诉求尚无对应 PR。
- **插件计量**（#129560）：`post_api_request` 增加成本字段——生态建设信号，尚无 PR。
- **架构治理三件套**（#146473 + #146612 + PR #146748）：自洽闭环，若被核心团队认可将成为 CI 基础设施。

---

## 7. 用户反馈摘要

- **痛点**：
  - 复杂部署（K8s + NFS + 多 pod，见 #38185）下 SQLite-only 的 Kanban 是硬阻塞。
  - “静默成功但实际没做事” 是反复出现的信任问题：pm gc 空收（#125537）、import 跳目录（#146722）、code health 空跑报 ok（#146612）、search 截断无提示（PR #96632）。
  - 中国大陆用户受 npm http registry 镜像影响 `hermes update` 永久失败（PR #146745）。
  - 长会话性能：800 消息流式渲染 17fps（#126486）、Qwen 1M 上下文被误判为 131K 导致过早压缩（#69881）。
- **满意点**：报告者普遍提供高质量复现（如 #144449 明确标注“离线受控复现，不声称生产频率”）；社区贡献者（@romannekrasovaillm、@Byrd-IT、@niubuhui818-oss）持续产出成体系的 Issue+PR 组合；i18n（希腊语 PR #146398）显示国际化社区在成长。

---

## 8. 待处理积压

| 项目 | 状态 | 建议 |
|---|---|---|
| [#57052](https://github.com/NousResearch/hermes-agent/issues/57052) 空闲 Tab 占满会话槽 | 开放近 4 个月，P2 | 与 #146735 联动排查，确认 v0.22.5 重构是否覆盖 |
| [#69881](https://github.com/NousResearch/hermes-agent/issues/69881) Qwen 1M 上下文误判 | 开放 3 个月+，P2 | 影响 1M 上下文所有用户，影响成本（过早压缩丢上下文） |
| [#84969](https://github.com/NousResearch/hermes-agent/issues/84969) Docker 持久复用忽略配置漂移 | 开放 2.5 个月，安全边界 | 有相关 PR #97727/#109529 在途，建议关联 triage |
| [#97720](https://github.com/NousResearch/hermes-agent/issues/97720) 远程后端扫描 PDF 无 OCR 路径 | 开放 2 个月，P2 | byte 路径与 path 路径行为不一致，功能对齐即可 |
| [#126486](https://github.com/NousResearch/hermes-agent/issues/126486) 已关闭 Issue 的修复 PR 未合入 | 流程问题 | 建议维护者重开 Issue 或明确修复 PR 时间表 |
| PR 队列整体 49 待合并 / 1 已合并 | — | 合并吞吐偏低，安全类 PR（#146688/#146701/#146715）建议优先 review |

**健康度小结**：社区输入量大且质量高，但 Issues 关闭率（3/50）与 PR 合并率（1/50）今日均偏低，存在输入/消化失衡迹象；无版本发布使得多个已确认的 v0.22.5 回归（#146722）用户无法绕过，建议尽快排期补丁版本。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-10-30

## 1. 今日速览

- 过去 24 小时 PicoClaw 无新增 Issue，但有 **20 条 PR 状态更新（全部为关闭/合并）**，无新版本发布。
- 今日活动以**批量关闭历史积压 PR**为主，涵盖多智能体框架、渠道扩展（MQTT/iMessage/微信/飞书）、Provider 支持（Z.AI/GLM）及安全加固等多个方向。
- 无新 Bug 报告、无待合并 PR，社区讨论热度（评论/👍）今日接近于零，属于**低强度清理型活跃日**。
- 大量 PR 创建于 2~4 月，于近日集中更新/关闭，表明维护者正在进行一轮**仓库积压清理与主线收敛**。

## 2. 版本发布

无新版本发布。今日无 Release 变动，无需迁移事项。

## 3. 项目进展

今日关闭的 20 条 PR 中，值得关注的实质性进展（按主题归类）：

**多智能体架构**
- [#1584 feat(agent): subturn PoC](https://github.com/sipeed/picoclaw/pull/1584) — 分层 Agent 执行（Sub-turns）概念验证，为多智能体转向与可中断执行打基础（关联 Issue #1316）。
- [#423 WIP: multi-agent collaboration framework & shared context](https://github.com/sipeed/picoclaw/pull/423) — 含 Blackboard 共享上下文池、Agent handoff 与发现工具的基础框架（WIP 状态被关闭，需注意是否被后续方案替代）。

**渠道能力扩展**
- [#1156 飞书出站媒体投递 + send_file 工具](https://github.com/sipeed/picoclaw/pull/1156) — Agent 可在对话中主动发送图片/文件。
- [#2653 MQTT 渠道支持](https://github.com/sipeed/picoclaw/pull/2653)、[#1268 iMessage 支持及 stop 命令](https://github.com/sipeed/picoclaw/pull/1268)、[#2606 微信多实例与配置增强](https://github.com/sipeed/picoclaw/pull/2606)。
- [#873 飞书工具执行进度反馈](https://github.com/sipeed/picoclaw/pull/873) — 解决多工具调用时的“黑盒”体验。

**Provider 与兼容性**
- [#177 Z.AI Provider 支持](https://github.com/sipeed/picoclaw/pull/177)（GLM/CogView 等模型自动路由）。
- [#664 自定义模型协议修复](https://github.com/sipeed/picoclaw/pull/664)（如 `zai-org/GLM-4.7` 报 unknown protocol 错误）。
- [#1205 Antigravity Provider 文档增加账号封禁风险警告](https://github.com/sipeed/picoclaw/pull/1205)。

**安全加固**
- [#1258 exec 工具环境变量净化](https://github.com/sipeed/picoclaw/pull/1258) — 阻止 LLM 覆写 PATH/HOME/LD_PRELOAD 等敏感变量。
- [#1541 合并修复：媒体临时目录、渠道 DoS 加固](https://github.com/sipeed/picoclaw/pull/1541)。
- [#1542 内含凭证加密（#1522）与 Passphrase 网关（#1521）](https://github.com/sipeed/picoclaw/pull/1542)。

**基础设施**
- [#2516 关闭 CI 定时 sync-rebase 触发器](https://github.com/sipeed/picoclaw/pull/2516)。

**批量合并类 PR**（作者 @xuwei-xy，聚合散落修复）：[#1560](https://github.com/sipeed/picoclaw/pull/1560)、[#1555](https://github.com/sipeed/picoclaw/pull/1555)、[#1559](https://github.com/sipeed/picoclaw/pull/1559)、[#1552](https://github.com/sipeed/picoclaw/pull/1552)、[#1545](https://github.com/sipeed/picoclaw/pull/1545)、[#1549](https://github.com/sipeed/picoclaw/pull/1549)。

> ⚠️ 注：这批 PR 状态为 CLOSED，数据中无法区分“合并后关闭”与“直接拒绝关闭”。#423（WIP 多智能体框架）与 #1584（PoC）若为未合并即关闭，可能意味着方向调整或由新实现替代，建议维护者予以澄清。

## 4. 社区热点

今日无新 Issue、无评论数据，PR 的 👍 均为 0，**无社区热点讨论**。从近期被关闭 PR 的主题看，社区贡献集中在：
- **渠道接入需求旺盛**（MQTT、iMessage、微信多实例、飞书媒体），反映用户希望把 PicoClaw 作为统一个人助手接入自有通讯渠道；
- **Provider 兼容性**（Z.AI、自定义模型协议）反映用户对国产/自定义 LLM 的接入诉求。

## 5. Bug 与稳定性

- 今日**无新 Bug 报告**。
- 今日关闭的 PR 中包含已落地的修复：
  - **安全类（较高优先级）**：[#1258 exec 环境变量净化](https://github.com/sipeed/picoclaw/pull/1258)、[#1541 渠道 DoS 加固](https://github.com/sipeed/picoclaw/pull/1541) — 建议用户升级到包含这些修复的构建。
  - **兼容性**：[#664 unknown protocol 错误修复](https://github.com/sipeed/picoclaw/pull/664)。

## 6. 功能请求与路线图信号

结合被关闭 PR 可推断的路线图方向：
1. **多智能体/Sub-turn 执行**（#1584、#423、Issue #1316）— 是明确的架构演进方向，预计后续版本会有正式实现。
2. **Skills 体系**（#1542 中的 Skills helpers、Repo skill examples）— 提示类能力扩展正在推进。
3. **安全体系**（凭证加密、passphrase 网关、exec 净化）— 表明项目正朝可自托管生产环境方向加固。
4. **渠道生态扩张**（MQTT/微信多实例）持续吸纳社区贡献。

今日无新功能请求。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼新的用户反馈。从历史 PR 背景可见的痛点：
- 多工具任务执行时**缺乏过程反馈**，用户感到“黑盒”（#873 已解决）；
- **自定义模型接入报错**门槛高（#664 已解决）；
- 使用非官方 Provider（Antigravity）存在**账号封禁风险**（#1205 文档警告已补充）。

## 8. 待处理积压

- 当前**待合并 PR 为 0**，Issue 队列为空，表面积压清零。
- 但需注意：本次 20 条 PR 中多条创建于 2~4 月，积压周期长达 **6 个月以上**，反映此前响应速度偏慢；本轮集中清理是积极信号，建议维持定期 triage 节奏。
- 建议维护者对 **#423（WIP 多智能体框架）** 与 **#1584（subturn PoC）** 的关闭原因发布公告说明（合并/替代/放弃），避免社区贡献者对方向产生困惑。

---

**健康度小结**：今日为典型的“清理日”——活跃度中低，但方向积极：安全加固、渠道扩展与多智能体架构的存量工作被集中收敛，仓库处于整洁状态。建议关注下一版本 Release 是否会整合本轮关闭的成果。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-10-30

## 1. 今日速览

过去 24 小时 NanoClaw 仓库保持中高活跃度：无新开 Issue，但有 **16 条 PR 更新**（8 条待合并、8 条合并/关闭）。核心开发者 @zvi-fried 集中清理了 8 月份起积压的 skills/Slack 相关 PR，社区贡献者 @antonio-antuan、@ericcurtin、@billyshipp 持续推进 channels 修复与新技能集成。此外出现了自动化的 agent 镜像刷新 PR（#4237），表明发布流水线正常运转。无新版本发布，主版本仍停留在 `v2026.10.0`。

## 2. 版本发布

过去 24 小时无新 Release。注意 [PR #4237](https://github.com/nanocoai/nanoclaw/pull/4237) 将 `v2026.10.0` 的加固镜像刷新为 `v2026.10.0-20261029T1517`，属于镜像级更新而非代码版本发布，部署用户合并该 PR 后将拉取新镜像 digest。

## 3. 项目进展

今日关闭的 8 条 PR 全部来自 @zvi-fried，覆盖三个方向：

**Skills 体系建设（重量级）**
- [#3720](https://github.com/nanocoai/nanoclaw/pull/3720)：新增 `ncl skills list/plan/apply` 结构化能力安装流程，源码安装默认禁用、需显式启用 Git checkout，且不能由 agent 自行批准开启——显著强化安全边界。
- [#3721](https://github.com/nanocoai/nanoclaw/pull/3721)：能力安装 skill 改为显式调用并经受保护 CLI 路由，尊重操作员拒绝策略。
- [#3676](https://github.com/nanocoai/nanoclaw/pull/3676)：新增确定性 apply 指令。

**Slack 通道修复**
- [#3686](https://github.com/nanocoai/nanoclaw/pull/3686)：委托上传时保留人类作者身份。
- [#3675](https://github.com/nanocoai/nanoclaw/pull/3675)：修复 agent-flow 测试可执行性。

**测试与 CI**
- [#3677](https://github.com/nanocoai/nanoclaw/pull/3677)：覆盖主/伴随 skills 的测试。
- [#3678](https://github.com/nanocoai/nanoclaw/pull/3678)：CI 并行化 composition 检查，缩短反馈周期。
- [#3379](https://github.com/nanocoai/nanoclaw/pull/3379)：runner 在本轮已通过 tools 发送消息时跳过 wrap-nudge。

整体看，skills 的“安全安装 + 治理策略”框架已闭环，这是本项目近期最大的架构级推进。

## 4. 社区热点

今日无 Issue 活动，PR 评论数据缺失。从 PR 内容热度判断：
- **[#4210 llmman 本地模型支持](https://github.com/nanocoai/nanoclaw/pull/4210)**（@ericcurtin，10-23 创建，今日更新）：社区对本地/自托管模型接入的持续需求，与现有 provider 体系并列扩展。
- **[#4238 AgentMail 日历技能](https://github.com/nanocoai/nanoclaw/pull/4238)**（@billyshipp，昨日新开）：赋予 agent 管理邮箱日历的能力（议程、写事件、答复邀请、开始提醒），且对外部联系人默认仅发送带确认的邀请——反映“AI 助手接管日程”的使用场景诉求。

## 5. Bug 与稳定性

今日无新报告 Bug Issue。待合并的修复 PR 按影响排序：

| 严重度 | PR | 问题 | 状态 |
|---|---|---|---|
| 高 | [#4032](https://github.com/nanocoai/nanoclaw/pull/4032) | 消息投递永久失败（超过 MAX_DELIVERY_ATTEMPTS）后 agent 不知情，误以为已发送 | Open，triage/needs-author |
| 高 | [#4031](https://github.com/nanocoai/nanoclaw/pull/4031) | Telegram `getUpdates` 长轮询无客户端超时，网络切换后入站消息停摆约 15 分钟 | Open，triage/needs-author |
| 中 | [#3970](https://github.com/nanocoai/nanoclaw/pull/3970) | reaction/编辑目标 id 未剥离 agent-group 后缀，导致平台侧定位错消息 | Open |
| 中 | [#3973](https://github.com/nanocoai/nanoclaw/pull/3973) | Telegram MarkdownV2 解析失败时整条消息被丢弃，重试 3 次同 payload 无效 | Open |
| 低 | [#4030](https://github.com/nanocoai/nanoclaw/pull/4030) | 长 `ask_question` 选项列表超出 Telegram 8 按钮/Discord 5 按钮限制被截断 | Open |

均已有对应 fix PR，其中两条被标记 `triage/needs-author`，等待作者响应审查意见。

## 6. 功能请求与路线图信号

- **本地模型支持扩展**：#4210 (llmman) 与既有 provider 架构对齐（通过 `ANTHROPIC_BASE_URL` + MCP tools），合并概率较高。
- **邮件/日历技能生态**：#4238 延续 AgentMail 方向，暗示“agent 通信/日程”是下阶段的技能主线。
- **安全治理已落地**：#3720/#3721 的关闭说明“受控能力安装”框架已定调，后续技能类 PR 预计需遵循显式安装 + 操作员策略模式。
- 镜像自动刷新（#4237）机制成熟，预示下个小版本可能整合上述 channels 修复。

## 7. 用户反馈摘要

今日无 Issue 评论数据可提炼。从待合并 PR 的描述可间接推断用户痛点：
- Telegram/Discord 用户遭遇**消息丢失、轮询停摆、按钮截断**等通道层稳定性问题，说明移动端/弱网场景使用量大；
- 多 agent 分组场景下 reaction/编辑错位（#3970）反映**群组协作部署**是主流用法；
- 本地模型接入需求（#4210）表明部分用户关注**隐私与自托管成本**。

## 8. 待处理积压

- **[#4030](https://github.com/nanocoai/nanoclaw/pull/4030) / [#4031](https://github.com/nanocoai/nanoclaw/pull/4031) / [#4032](https://github.com/nanocoai/nanoclaw/pull/4032)**：均标记 `triage/needs-author`，自 10-04 开启近一个月，建议维护者 ping 作者或接手。
- **[#3970](https://github.com/nanocoai/nanoclaw/pull/3970) / [#3973](https://github.com/nanocoai/nanoclaw/pull/3973)**：9-30 开启已一个月，核心交付链路修复，优先级应高于新功能。
- **[#4210](https://github.com/nanocoai/nanoclaw/pull/4210)**：社区贡献，横跨 configuration/providers/tools 多区域，建议核心团队尽早给出审查意见以免流失贡献者。
- 需关注**Issue 侧零活动**现象：连续 24 小时无新 Issue 可能反映社区反馈渠道冷清或 triage 响应过快消化，建议观察后续趋势。

---
*数据来源：GitHub API（截至 2026-10-30）*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：** 2026-10-30
**数据来源：** github.com/nearai/ironclaw

---

## 1. 今日速览

IronClaw 今日整体活跃度处于**低位平稳**状态。过去 24 小时内无新开 Issues、无 Issues 关闭、无版本发布，仅有 2 条由 dependabot[bot] 发起的依赖更新 PR（均处于待合并状态）。项目节奏以自动化依赖维护为主，缺少人工驱动的功能开发或社区互动信号。从健康度角度看，无新 Bug 报告属积极信号，但也表明近期社区参与热度偏低，建议关注后续人工贡献的回归情况。

## 2. 版本发布

今日无新版本发布。最新依赖 PR 涉及 wasmtime 升级（47.x → 48/49.x），可能预示下一次版本将包含运行时环境的重要更新。

## 3. 项目进展

过去 24 小时无 PR 被合并或关闭，今日无实质性功能推进。当前待处理进展：

| PR | 内容 | 状态 |
|---|---|---|
| [#8162](https://github.com/nearai/ironclaw/pull/8162) | wasmtime 47.0.3 → 48.0.7（harness/latency/runner） | 待合并 |
| [#8163](https://github.com/nearai/ironclaw/pull/8163) | wasmtime 47.0.4 → 49.0.5 | 待合并 |

⚠️ 注意：两个 PR 均升级 wasmtime 但目标版本不同（48.0.7 vs 49.0.5），且起始版本略有差异（47.0.3 / 47.0.4），可能存在升级路径冲突，维护者需决定统一收敛到哪个版本。

## 4. 社区热点

今日无任何带评论或反应的 Issues/PRs，社区讨论为零。唯一可见的自动化活动来自 dependabot 的两条依赖升级 PR，均无人工评论。今日无热点可分析。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题，无需要排列的严重性事项，也无需匹配 fix PR。

## 6. 功能请求与路线图信号

今日无用户提出新功能需求。间接信号：

- **wasmtime 依赖升级**（[#8162](https://github.com/nearai/ironclaw/pull/8162) / [#8163](https://github.com/nearai/ironclaw/pull/8163)）：wasmtime 是 WebAssembly 运行时核心组件，跨两个大版本的升级可能带来性能改进与 API 变化。若合并 49.0.5 版本，维护者需关注 wasmtime 大版本间潜在的破坏性 API 变更，这可能是下一个版本周期的重点变更之一。

## 7. 用户反馈摘要

今日无 Issues 评论数据，无法提炼用户痛点或使用场景反馈。建议关注后续时段的用户活动。

## 8. 待处理积压

- **PR #8162 / #8163**（wasmtime 依赖升级）：由 dependabot 于 10-29 创建，尚无人工评审或评论。建议维护者：
  1. 评估两条 PR 的版本冲突，择一合并（推荐统一至 49.0.5 以减少后续升级次数）；
  2. 验证 latency runner 场景下 wasmtime 大版本升级对基准测试结果的影响，避免因运行时变化污染延迟基准数据。

---

**健康度小结：** 活跃度 ▁ 低位 | 稳定性 ✅ 无新问题 | 社区参与 ▁ 冷清 | 依赖卫生 ⚠️ 有待合并的版本冲突待决

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-10-30）

## 1. 今日速览

今日 LobsterAI 仓库保持中等活跃度：6 条 PR 更新（含 3 个功能性 PR 处理完毕）、2 条 Issue 更新（均为同一用户的账号申诉），无新版本发布。核心贡献者 @fisherdaddy 与 @Mind-Hand 的 PR 涵盖 IM agent 热重载、cowork 交互优化及 MiniMax 音频编码修复，显示项目处于持续功能打磨与 Bug 修复阶段。社区侧的主要声音集中在账号封禁申诉，且出现因个人隐私泄露（标题含手机号）而重开 Issue 的情况，建议维护者及时处理。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日处理完成的功能性 PR：

- **[#2960](https://github.com/netease-youdao/LobsterAI/pull/2960) [CLOSED] fix(openclaw): IM agent 工作目录热重载与陈旧模型覆盖重置**（@fisherdaddy）
  - IM agent 的 cwd 现从实时运行时配置快照解析，修改工作目录不再重启 gateway；当会话绑定的模型被移除或禁用时自动重置。提升了 IM agent 场景的运维体验与容错性。
- **[#2958](https://github.com/netease-youdao/LobsterAI/pull/2958) [CLOSED] feat(cowork): 优化行内上下文标签与媒体模型选择**（@fisherdaddy）
  - 技能/套件/计划统一为行内上下文标签，支持两次退格快速移除；媒体模型选项改为互斥设计，稳定图片/视频切换面板布局。53 个测试文件、400 项测试通过，属交互体验层面的重要提升。
- **[#2961](https://github.com/netease-youdao/LobsterAI/pull/2961) [CLOSED] fix(media): MiniMax H3 音频引用改用 audio MIME 类型**（@Mind-Hand）
  - 修复本地 MP3/WAV 参考音频以 `application/octet-stream` 编码导致 MiniMax H3 拒绝的问题，改用 `audio/mpeg` / `audio/wav`。注意：三个 PR 状态均为 CLOSED 而非 MERGED，建议确认是“修后重提”还是直接关闭。

**整体评估**：功能性改动集中在 IM/openclaw 集成与 cowork 交互两大方向，与媒体处理修复一起，属于渐进式迭代，单日推进幅度中等。

## 4. 社区热点

- **[#2936](https://github.com/netease-youdao/LobsterAI/issues/2936) [OPEN]** 账号误封申诉（5 条评论，今日更新）
  - 用户 @7597qqme 申诉两个账号被误封，自述未刷接口，但承认曾在第三方 DSH 插件中配置 LobsterAI 凭据调用有道模型服务。5 条评论显示有一定社区关注度。
- **[#2959](https://github.com/netease-youdao/LobsterAI/issues/2959) [OPEN]** 同一用户因原 Issue 标题历史含手机号而重新提交的申诉，请求维护者清理敏感信息。

**背后诉求**：用户通过第三方工具（含疑似灰产性质插件）间接调用服务触发风控封禁，希望获得申诉通道与人工复核机制。这反映出平台封禁政策与用户合理使用边界之间存在沟通缺口，建议官方明示第三方接入政策并提供正式申诉渠道。

## 5. Bug 与稳定性

| 问题 | 严重程度 | 状态 |
|---|---|---|
| MiniMax H3 拒绝本地音频（MIME 编码错误，#2961） | 中——直接阻断语音克隆/参考音频功能 | 已有 fix PR（已关闭，待确认合入情况） |
| IM 会话绑定已移除/禁用模型导致失效（#2960） | 中——影响会话可用性 | 已有 fix PR |
| 账号误封无法登录（#2936 / #2959） | 对当事用户为高——完全不可用；非代码 Bug | 无 fix，属运营/风控问题 |

## 6. 功能请求与路线图信号

今日无新增功能请求 Issue。但从已完成的 PR 可推断近期路线图方向：
- **IM/openclaw 深度集成**（#2960 热重载、免重启配置）表明 IM agent 运维体验是重点投入方向。
- **cowork 交互统一化**（#2958 行内标签体系）暗示团队正在收敛分散的模式切换 UI，后续可能继续扩展标签化交互。
- 多模型（MiniMax H3）音频能力修复说明语音/媒体多模态是支持范围之一，预计将持续完善。

## 7. 用户反馈摘要

- **痛点**：用户在第三方插件中使用账号凭据即遭封禁，且申诉流程不清晰，申诉 Issue 中包含隐私泄露风险（手机号出现在标题）。
- **使用场景**：本地音频参考文件用于语音合成（MiniMax H3）、IM agent 多工作目录运行——表明存在一批深度使用自动化与多模态能力的用户。
- **改进信号**：cowork 标签交互优化 PR 来自核心团队，说明此前模式切换体验被内部认定为不够顺手。

## 8. 待处理积压

- **[#2936](https://github.com/netease-youdao/LobsterAI/issues/2936) / [#2959](https://github.com/netease-youdao/LobsterAI/issues/2959)**：账号申诉 Issue 仍处 OPEN 状态，且 #2936 存在**用户手机号隐私泄露**，建议维护者优先清理标题历史并回应申诉。
- **陈旧依赖 PR 集中关闭**：今日 3 个 dependabot PR（[#2460](https://github.com/netease-youdao/LobsterAI/pull/2460) rimraf、[#2667](https://github.com/netease-youdao/LobsterAI/pull/2667) trufflehog、[#2666](https://github.com/netease-youdao/LobsterAI/pull/2666) actions/labeler）因 stale 被关闭。若 rimraf 5→6 的升级被放弃，建议明确依赖策略，避免依赖持续滞后。

---
*数据来源：GitHub netease-youdao/LobsterAI 过去 24 小时公开活动*

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

# CoPaw (QwenPaw) 项目动态日报 — 2026-10-30

## 1. 今日速览

项目过去 24 小时活跃度**中高**：Issues 更新 12 条（新开/活跃 4、关闭 8），PR 更新 35 条（待合并 24、合并/关闭 11），无新版本发布。当前正处于 **v2.3.0-beta.1 发布后的收尾修复期**——beta 版暴露出多个桌面端打包与插件加载问题，社区快速响应，多个修复 PR 已在本日合并。同时三条 XXXL 级架构重构 PR（插件化改造）持续推进，显示项目正从单体向插件化架构深度演进。整体健康度良好：问题响应快、修复闭环率高（关闭 8 vs 新开 4）。

## 2. 版本发布

今日无新版本发布。**v2.3.0-beta.1**（2026-10-27 发布）仍在安装验证阶段，验证任务 [#8456](https://github.com/agentscope-ai/QwenPaw/issues/8456) 今日仍有更新；beta 版已暴露多个安装/打包回归（见第 5 节），正式版发布前需优先消化。

## 3. 项目进展

本日合并/关闭 11 个 PR，重点包括：

- **[#8497](https://github.com/agentscope-ai/QwenPaw/pull/8497)（S，已关闭）**：插件加载时容忍 import 缓存刷新失败——直接针对 beta.1 全量插件加载失败的 #8473，修复链路快速闭环。
- **[#8489](https://github.com/agentscope-ai/QwenPaw/pull/8489)（XXL，已关闭）**：大幅缩短插件单元测试执行时间并修复失败用例，为插件化大重构（#8426、#8499）提供 CI 保障。
- **[#5490](https://github.com/agentscope-ai/QwenPaw/pull/5490)（已关闭）**：控制台聊天媒体全屏图片画廊导航，用户体验改进落地。
- **[#8457](https://github.com/agentscope-ai/QwenPaw/pull/8457)、[#7835](https://github.com/agentscope-ai/QwenPaw/pull/7835)（Under Review）**：自动记忆召回改为不可信参考上下文，解决模型模仿合成 tool-call 的行为缺陷，属记忆子系统的重要正确性修复。

整体看，本日主要推进**插件化架构稳定性**与**记忆子系统正确性**两条主线，2.3.0 正式版的基础在夯实。

## 4. 社区热点

- **[#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116)**（9 评论，已关闭，wontfix）：agent 单轮内重复触发同一工具调用的“死亡循环”，系统 ~6 次后才告警，浪费大量 token。被标记 wontfix，但暴露的**成本失控焦虑**是 Agent 用户的普遍痛点，值得跟踪重开。
- **[#8464](https://github.com/agentscope-ai/QwenPaw/issues/8464)（5 评论，已关闭）**：手动 `/compact` 无视会话级模型切换，34 万 token 上下文场景下压缩始终发给严格校验的默认模型导致失败。反映长上下文重度用户对**上下文压缩可靠性**的高要求。
- **[#8500](https://github.com/agentscope-ai/QwenPaw/issues/8500)（2 评论，OPEN）**：Auto-Dream 静默丢弃整天记忆且仍 checkpoint、报告 success——**静默数据丢失**类问题通常优先级最高，建议维护者优先响应。
- **PR [#8499](https://github.com/agentscope-ai/QwenPaw/pull/8499)**（XXXL）：本地模型管理（下载/llama.cpp/服务生命周期）抽取为插件 Provider，是本周最大的架构讨论焦点。

## 5. Bug 与稳定性（按严重程度）

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#8500](https://github.com/agentscope-ai/QwenPaw/issues/8500) Auto-Dream 静默丢弃记忆且永不重试 | OPEN，暂无 fix PR |
| 🔴 高 | [#8473](https://github.com/agentscope-ai/QwenPaw/issues/8473) beta.1 全部后端插件加载失败（12/12） | 已关闭，fix PR [#8497](https://github.com/agentscope-ai/QwenPaw/pull/8497) 已合 |
| 🟠 中 | [#8488](https://github.com/agentscope-ai/QwenPaw/issues/8488) 桌面端打包遗漏 visual_compression 资产，Visual Compact 静默失效 | OPEN，暂无 fix PR |
| 🟠 中 | [#8490](https://github.com/agentscope-ai/QwenPaw/issues/8490) 打开语音转写设置页触发真实 `import whisper`，~690 MB RSS 不释放 | OPEN，暂无 fix PR |
| 🟡 中 | [#8502](https://github.com/agentscope-ai/QwenPaw/issues/8502) 桌面端 HTML 预览“在浏览器中打开”中文路径失败、工作区外无反应 | OPEN，今日新报 |
| 🟢 低 | [#8501](https://github.com/agentscope-ai/QwenPaw/pull/8501) `env list/set` 明文打印环境变量值（含 API key） | 已有 fix PR（OPEN） |

值得注意：4 个 OPEN bug 中 3 个集中在 **Windows 桌面端（PyInstaller 打包）**，提示桌面分发渠道的测试覆盖不足。#8501 虽标 low，但属**凭据泄露**风险，建议尽快合并。

## 6. 功能请求与路线图信号

- **[#6189](https://github.com/agentscope-ai/QwenPaw/issues/6189)（已关闭）**：`save_decision()` 结构化决策持久化 API，防止压缩驱逐关键决策——与 #8464、#8500 同属“上下文/记忆可靠性”主题，该方向已有 #8457、#7835 等 PR 在推进，**很可能在 2.3.x 系列以某种形式落地**。
- **[#4356](https://github.com/agentscope-ai/QwenPaw/issues/4356)（已关闭）**：文件/工具 guard 的只读目录白名单细粒度控制——契合权限系统演进方向。
- **[#4129](https://github.com/agentscope-ai/QwenPaw/issues/4129)（已关闭）**：类 Claude Code 的 `/rewind` 回滚功能，长期需求。
- **PR 侧路线图信号明确**：#8426（第三方 agent 插件化）、#8499（本地模型管理插件化）、#7874（PawApp 控制面重设计）、#8463（本地 Piccolo 双向打分做工具审查/压缩决策）、#8476（cron job 级 thinking_level）——**插件化 + 本地模型生态 + 记忆/上下文智能压缩**是下一版本的三大主线。

## 7. 用户反馈摘要

- **痛点 1：上下文压缩不可靠**。#8464（模型切换失效）、#6189（决策丢失后 agent 回退旧方案）表明重度长会话用户对压缩语义保持的信任度低。
- **痛点 2：静默失败比崩溃更糟**。#8500、#8488 均“报成功但实际没干活”，用户强烈期待可观测性（明确的重试/告警机制）。
- **痛点 3：桌面端体验参差**。#8502、#8488、#8473 集中在 Windows 打包版，中文路径、资产遗漏等本地化/打包问题影响中文用户群体明显。
- **满意度信号**：Release Duty 自动化验证流程（#8456）、size 标签、first-time-contributor 标签等治理机制运转良好，外部贡献者（#8476、#7613、#8291、#8400）持续流入，社区黏性健康。

## 8. 待处理积压

- **[#8500](https://github.com/agentscope-ai/QwenPaw/issues/8500)**：今日新报、涉及数据丢失，尚无维护者指派 fix PR——**最需优先认领**。
- **[#8488](https://github.com/agentscope-ai/QwenPaw/issues/8488)、[#8490](https://github.com/agentscope-ai/QwenPaw/issues/8490)**：OPEN 无修复动向，阻塞 2.3.0 桌面端正式发布。
- **大型重构 PR 长期在审**：[#8426](https://github.com/agentscope-ai/QwenPaw/pull/8426)（10-26 起）、[#8499](https://github.com/agentscope-ai/QwenPaw/pull/8499)、[#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874)（9-19 起，XXXL）、[#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034)（9-29 起）——XXXL 级 PR 审查周期过长有腐烂风险，建议维护者拆分或排期。
- **[#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613)**：OpenViking 记忆插件（首贡献者，9-07 起，已完成多轮 review 跟进），建议尽快给出合并/拒绝决定，避免挫伤新贡献者。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 — 2026-10-30

## 1. 今日速览

ZeptoClaw 今日保持单人驱动的高强度迭代节奏，24 小时内新增 4 条 Issue、关闭 1 条 Issue、关闭 1 条 PR，全部由维护者 @qhkm 完成。今日重点聚焦 **CLI 交互体验与工程质量**：包括交互式 agent UI 的显示缺陷修复计划（#721）、文档数据漂移（#720）、pre-push 检查流程漏洞（#719）和冒烟测试隔离问题（#718）。同时，安全修复 PR #714（serve API 认证）正式关闭，对应 Issue #713 同步关闭，标志着一个 P2 级安全问题完成闭环。项目无新版本发布。

## 2. 版本发布

今日无新版本发布。README 中提及的体积预算已更新为 11MB (linux-x86_64) / 7MB (aarch64)，暗示下一次 release 可能伴随体积相关的说明更新（见 #720）。

## 3. 项目进展

- **PR #714 已关闭（fix(serve): require an API key for the OpenAI-compatible serve API）** [链接](https://github.com/qhkm/zeptoclaw/pull/714)
  为 `zeptoclaw serve` 的 `/v1/chat/completions` 与 `/v1/models` 端点强制引入 API Key 认证（`ZEPTOCLAW_SERVE_API_KEY` 环境变量或 `--api-key` 参数）。修复了非回环地址绑定时任何人可消耗运营者 provider credits 的严重问题。对应 Issue #713 同日关闭，安全闭环完成。

总体而言，项目今日在**安全加固**方面落地一项重要修复，同时在**质量基建**（测试隔离、CI 流程）方面识别出多项待办，为后续迭代铺路。

## 4. 社区热点

今日所有条目评论数与 👍 均为 0，尚无社区讨论热度，项目目前呈单人维护模式。值得关注的内容：

- **Issue #721（P2-high, feat/fix）** [链接](https://github.com/qhkm/zeptoclaw/issues/721)：维护者基于 DeepSeek 会话实测截图报告交互式 agent UI 的三类显示缺陷（spinner 卡死在 "Thinking..."、重复空分隔线、回复未缩进），根因定位到 `src/cli/agent.rs` / `src/cli/shimmer.rs` 中 spinner 与回复的竞态。这是今日信息量最大的条目，显示维护者对终端 UI 打磨到 "world-class" 水准的追求。
- **Issue #720（P3-normal, docs）** [链接](https://github.com/qhkm/zeptoclaw/issues/720)：README 宣称的 "~6MB binary" 与 CLAUDE.md/AGENTS.md 中强制的 11MB/7MB 预算严重不符，多处（badge、对比表、多租户行、结尾段）需要同步更新。反映文档治理机制缺位。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| P2-high | [#721](https://github.com/qhkm/zeptoclaw/issues/721) | CLI 交互 agent UI 显示缺陷：spinner 竞态卡死、重复分隔线、raw replies 未格式化 | 已定位根因，fix PR 尚未提交 |
| P2-high | [#713](https://github.com/qhkm/zeptoclaw/issues/713)（已关闭） | serve API 无认证，非回环绑定可被任意调用消耗 credits | ✅ 已由 PR #714 修复并关闭 |
| P3-normal | [#718](https://github.com/qhkm/zeptoclaw/issues/718) | `tests/cli_smoke.rs` 读取开发者真实 `~/.zeptoclaw/config.json`，导致 4 个测试（`cli_auth_status` 等）结果依赖本机配置 | 无 fix PR |
| P3-normal | [#720](https://github.com/qhkm/zeptoclaw/issues/720) | README 二进制体积/RAM/工具数与代码漂移 | 无 fix PR |

工程流程隐患（非运行时 Bug）：

- **P2-high [#719](https://github.com/qhkm/zeptoclaw/issues/719)**：pre-push checklist（`cargo fmt / clippy / nextest --lib / test --doc`）完全不编译 `tests/*.rs` 集成测试，且 GitHub Actions CI 已被移除——**集成测试目前无任何强制门禁**，是当前最值得优先处理的流程风险。

## 6. 功能请求与路线图信号

- **#721** 虽以 feat 标记，实为对 `zeptoclaw agent` 交互 UI 的系统性重修需求（"world-class interactive agent UI"），明确指向终端体验打磨是当前优先方向，预计很快有对应 PR。
- **#719 + #718** 共同指向一个信号：项目正在重建测试/CI 防线（GitHub Actions 被移除后），下一步可能恢复某种形式的 CI 或强化本地门禁。
- **#720** 暗示下个版本需同步刷新 README 指标（体积已增至 ~11MB 预算、工具数量变化），说明项目功能面在持续扩张。

## 7. 用户反馈摘要

本期所有 Issue 均由维护者自报，无外部用户评论，可提炼的间接信号：

- **痛点（维护者自验发现）**：DeepSeek 会话中 agent UI 输出破碎，影响演示体验（#721）；本地开发环境与测试环境耦合导致测试不稳定（#718）。
- **诉求**：对外文档数据与实际产物严格一致（#720）；推送前门禁应覆盖全部测试面（#719）。
- 项目处于 "自驱质量冲刺" 阶段，外部用户反馈通道尚待激活。

## 8. 待处理积压

当前无长期未响应积压（所有 Issue 均创建于近 12 天内且今日有更新）。给维护者的提醒：

1. **#721（P2-high）** 已定位根因但无 fix PR，建议尽快落地，避免影响交互体验口碑。
2. **#719（P2-high）** 是流程性风险：CI 移除 + pre-push 不含集成测试，意味着 `tests/*.rs` 可能长期处于无验证状态，建议优先补齐。
3. **#718** 会持续造成“本地过 CI 挂”的假阳性，建议与 #719 一并处理（如统一在测试中注入临时 HOME/config 路径）。

---
*数据来源：ZeptoClaw GitHub 仓库过去 24 小时 Issue/PR 活动。项目健康度评估：单人高频自驱维护，安全修复闭环及时，但 CI/门禁体系存在缺口，社区参与度暂为 0，建议通过 good-first-issue 标签吸引外部贡献者。*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目日报 — 2026-10-30

**仓库**：[gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

## 1. 今日速览

- 过去 24 小时项目社区互动静默：**0 条 Issue 更新、0 条 PR 更新**，无新增 Bug 报告或功能请求。
- 但开发侧持续高频输出：**单日发布 2 个版本（v1.9.43、v1.9.44）**，迭代节奏明显快于社区反馈节奏。
- 版本内容集中在 TikTok（TK Copilot）电商客服与联盟营销场景的功能打磨，属于渐进式增强，无破坏性变更迹象。
- 整体健康度：开发活跃度高、社区活跃度低，可能是用户基数尚小或反馈渠道在外部（如用户群），建议关注社区触达。

## 2. 版本发布

### [v1.9.44 — TK Copilot v1.9.44](https://github.com/gaoyangz77/easyclaw/releases)
- 回复发送前支持**预览翻译后的内容**，消息工具栏精简化
- 支持**多订单搜索**（带本地化校验），并可**过滤差评会话**
- 广告实体按账户**增量刷新**，同步刷新请求合并（coalesce），降低 API 压力
- 账户配额刷新不再依赖完整重启流程

### [v1.9.43 — TK Copilot v1.9.43](https://github.com/gaoyangz77/easyclaw/releases)
- 客服与 Affiliate 回复支持**粘贴图片草稿**；部分发送失败时**草稿保留**，避免内容丢失
- 关闭清理前展示**更新安装中状态**，提升升级体验
- 商品类目**延迟加载**，各语言**周级缓存持久化**，优化启动与性能

**破坏性变更/迁移**：两个版本均为功能增强与性能优化，Release Notes 未标注 breaking change 或迁移步骤，预计可平滑升级。

## 3. 项目进展

- 今日无 PR 合并/关闭记录（0 条），但由于该仓库迭代以 Release 驱动，v1.9.43 与 v1.9.44 的连发表明：
  - **国际化客服流程**持续完善（翻译预览、多语言缓存）
  - **运营效率工具**增强（差评会话过滤、多订单搜索、增量广告同步）
  - **可靠性与升级体验**改进（草稿保留、安装状态提示）

## 4. 社区热点

- 今日无活跃 Issue 或 PR 讨论。社区处于静默状态，无热点可提炼。建议维护者通过更新公告主动激活讨论。

## 5. Bug 与稳定性

- 今日 **0 条新 Bug 报告**，无崩溃或回归问题反馈，无待修复项。

## 6. 功能请求与路线图信号

- 今日无新功能请求。从近期版本方向推断，下一版本可能继续围绕：
  - 客服回复体验（图片/翻译/草稿链路的进一步完善）
  - 数据同步与配额管理的性能优化
  - 广告与联盟营销场景的运营工具扩展

## 7. 用户反馈摘要

- 今日无 Issue 评论可分析。无法提炼用户痛点或满意度信号。

## 8. 待处理积压

- 今日无长期未响应的 Issue 或 PR（数据中无活跃积压记录）。当前维护响应压力为零，重点应放在扩大社区参与度上。

---

**结论**：EasyClaw 今日呈现“**开发热、社区冷**”的典型状态——单日双版本发布体现维护者高投入，产品能力（翻译预览、图片草稿、增量同步）持续向 TikTok 电商运营纵深推进；但零社区互动值得警惕，建议通过 Release 公告、示例文档或 Discussions 引导用户反馈，以验证功能方向与用户需求的匹配度。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*