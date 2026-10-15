# OpenClaw 生态日报 2026-10-15

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-15 03:44 UTC

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

# OpenClaw 项目动态日报 — 2026-10-15

## 1. 今日速览

OpenClaw 今日继续保持极高活跃度：过去 24 小时内 Issues 更新 500 条（新开/活跃 294，关闭 206），PR 更新 500 条（待合并 340，已合并/关闭 160），无新版本发布。社区热度最集中的是 **P0 级稳定性问题**——Gateway 启动阻塞、SQLite WAL 无限增长、插件捕获临时目录占满磁盘等多条高严重度缺陷仍在等待维护者回应，且多数带有 `clawsweeper:no-new-fix-pr` 标签。与此同时，核心维护者 @steipete、@RomneyDa 持续高产输出，Web UI 从 Lit 向 Solid 的迁移、durable question custody 系列大 PR 和升级/doctor 修复管线都在稳步推进。整体呈现“贡献端高速迭代、缺陷侧积压严重”的双轨状态。

## 2. 版本发布

今日无新版本发布。值得注意的是社区已出现对 `2026.10.5-beta` 更新链路的反馈（#170331、#170332、#172395），提示 beta 升级流程仍存在摩擦。

## 3. 项目进展

今日合并/关闭的关键 PR 及工作流：

- **性能优化**：[#172673](https://github.com/openclaw/openclaw/pull/172673)（已关闭）减少了本地 turn 放置声明的 SQLite 事务开销——每个本地 turn 少开 4 次显式事务，直接呼应了社区对 Gateway 事件循环/数据库阻塞的大量抱怨。
- **测试与 CI 健康修复**：[#172683](https://github.com/openclaw/openclaw/pull/172683) 修复 4 个真实 Gateway 自动化持久化测试的 fixture 失败；[#169856](https://github.com/openclaw/openclaw/pull/169856) 清理 Bedrock 流测试中的伪造 tool 输入。
- **大功能 PR 持续推进（待合并）**：
  - **Durable question custody 四部曲**：[#168917](https://github.com/openclaw/openclaw/pull/168917)（会话存储）→ [#171666](https://github.com/openclaw/openclaw/pull/171666)（Gateway RPC）→ [#171682](https://github.com/openclaw/openclaw/pull/171682)（启动恢复，已 ready for maintainer）→ [#168399](https://github.com/openclaw/openclaw/pull/168399)（native handoff）。完成后 `ask_user` 类问题将可在 Gateway 重启后续答，直接改善消息丢失类体验。
  - **GitHub 插件能力扩展**：[#172779](https://github.com/openclaw/openclaw/pull/172779) 让 agent 可搜索公开 GitHub issues/PRs（前置 [#172692](https://github.com/openclaw/openclaw/pull/172692) 已关闭落地读取能力）。
  - **升级链路修复**：[#172790](https://github.com/openclaw/openclaw/pull/172790)（修复组可写 systemd unit 阻塞升级）、[#172751](https://github.com/openclaw/openclaw/pull/172751)（修复 Windows installer 发布检查）、[#172791](https://github.com/openclaw/openclaw/pull/172791)（修复旧版本带遗留插件配置时 update 失败）。
  - **Web UI Solid 迁移**：@steipete 密集提交 [#171882](https://github.com/openclaw/openclaw/pull/171882)（统一 setup wizard）、[#171931](https://github.com/openclaw/openclaw/pull/171931)、[#172493](https://github.com/openclaw/openclaw/pull/172493)、[#171653](https://github.com/openclaw/openclaw/pull/171653) 等，Lit 淘汰进入尾声。
  - **请求者身份保持**：[#157806](https://github.com/openclaw/openclaw/pull/157806)（XL，兼容性风险标记）修复委托/恢复链路中请求者身份丢失问题。

整体看，项目在“重启可恢复性”（question custody、requester identity）方向投入显著，与社区最痛的 message-loss/重启丢消息问题高度对齐。

## 4. 社区热点

1. **[#143524](https://github.com/openclaw/openclaw/issues/143524)** — Agent SQLite WAL 增长至 2.8 GB、阻塞 Gateway 启动（Windows，2026.9.2/9.3）。**125 条评论**，是全部 Issues 中讨论量断层第一。手动 checkpoint 后仍会复发，标签含 `impact:crash-loop`、`ux-release-blocker`，至今无修复 PR，用户 frustration 明显。
2. **[#160959](https://github.com/openclaw/openclaw/issues/160959)** — 2026.9.6 回归：捕获大型外部插件时 Gateway 事件循环阻塞数分钟（23 条评论）。与 #163029（9.7 仍复现）、#162211（启动阻塞引发重启风暴）构成同一“启动/插件加载阻塞”问题簇。
3. **[#53763](https://github.com/openclaw/openclaw/issues/53763)** — 请求内置 headless 浏览器（15 条评论）。用户反映当前依赖本机 Chrome 的方案脆弱，是最受关注的功能请求之一。
4. **[#164294](https://github.com/openclaw/openclaw/issues/164294)** — Gateway 自身 state DB 的 WAL checkpoint 因进程内 reader 永久阻塞（15 条评论），与 #143524 呼应，指向系统性 checkpoint 设计缺陷。
5. **[#164972](https://github.com/openclaw/openclaw/issues/164972)** — claude-cli 多 agent 团队的可见性矩阵问题，作者 10-15 更新确认 2026.10.3/10.5 已修复大部分行——展示社区高质量追踪反馈。

## 5. Bug 与稳定性（按严重度）

**P0（多数尚无 fix PR）**

| Issue | 问题 | Fix PR |
|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL 无限增长阻塞启动 | ❌ 无 |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 大插件捕获阻塞事件循环数分钟（9.6 回归） | ❌ 无 |
| [#152981](https://github.com/openclaw/openclaw/issues/152981) | Gateway 启动挂起 17 分钟后失败 | ❌ 无 |
| [#158390](https://github.com/openclaw/openclaw/issues/158390) | plugin-captures 临时目录不回收，磁盘无限增长 | ❌ 无 |
| [#155563](https://github.com/openclaw/openclaw/issues/155563) | 9.5 回归：service-child relay/MCP 组回合结束后不释放 | ❌ 无 |
| [#162211](https://github.com/openclaw/openclaw/issues/162211) | 启动阻塞 40–200s 被健康监控误判，升级为重启循环 | ❌ 无 |
| [#166221](https://github.com/openclaw/openclaw/issues/166221) | 2026.9.4→9.8 升级在 SQLite preflight 阶段失败 | ❌ 无 |

**P1 及其他值得关注**

- [#159094](https://github.com/openclaw/openclaw/issues/159094)：状态生命周期租约归属冲突（macOS）
- [#155119](https://github.com/openclaw/openclaw/issues/155119)：Subagent 最终答案丢失 + deliveryStatus 卡 pending
- [#158788](https://github.com/openclaw/openclaw/issues/158788)：Windows 上 cron agent turn 因 DataCloneError 全部失败（标注 main 上无法复现）
- [#154891](https://github.com/openclaw/openclaw/issues/154891)：配置热重载回滚后仍“砖化”无关插件，需完全重启
- [#99659](https://github.com/openclaw/openclaw/issues/99659)：companion app 连接后内存峰值被 OOM kill（安全相关，待 live repro）
- [#126246](https://github.com/openclaw/openclaw/issues/126246)：Telegram 持久出站消息卡在 `send_attempt_started`，重启即丢失

**升级链路**：#170331、#170332、#172395、#168895 集中报告 2026.10.5-beta 与 2026.9.9 升级失败，#172791/#172790 等 PR 正在针对性修复。

## 6. 功能请求与路线图信号

- **内置 headless 浏览器**（[#53763](https://github.com/openclaw/openclaw/issues/53763)）：讨论活跃但标注 `needs-product-decision`，短期内恐无官方动作。
- **Memory/上下文治理**：[#101422](https://github.com/openclaw/openclaw/issues/101422)（可配置的 memory recall 路径排除）+ [#54373](https://github.com/openclaw/openclaw/issues/54373)（Context Provenance RFC，已有 linked PR 打开）——上下文来源标注方向已有实现迹象，可能进入后续版本。
- **会话生命周期**：[#45390](https://github.com/openclaw/openclaw/issues/45390)（Session TTL 自动轮换）与 #54373 一样长期高诉求，尚待产品决策。
- **GitHub 工具链**：#172692 已落地读取、#172779 搜索 PR 待合并，预计下一版本 agents 将获得完整的公开 GitHub 只读工具集。
- **Q&A/Decision 离线比对**（[#156484](https://github.com/openclaw/openclaw/pull/156484)，ready for maintainer）：QA 基建完善信号。

## 7. 用户反馈摘要

- **最痛：消息丢失与重启后状态不一致**。Telegram/Feishu 消息重复或丢失（#127229、#126246、#49381）、subagent 结果丢失（#155119）、内部 runtime 上下文被当作用户消息外显（#129314、#151962）——用户反复强调“失败看起来像成功”最伤信任。
- **运维负担重**：WAL/磁盘无限增长（#143524、#158390、#164294）和升级失败链（#170331/#170332/#172395）是自托管用户的主要痛点，多位用户被迫写手动清理脚本。
- **长期忠实用户的声音**：[#73537](https://github.com/openclaw/openclaw/issues/73537) 中一位家庭+企业用户感谢项目日常价值，但恳请提供“生产就绪”稳定标签——反映稳定版用户对 2026.9.x 连续回归的不满。
- **正面信号**：#164972 作者确认 2026.10.3/10.5 修复了大半多 agent 可见性问题；Control UI 的 Solid 迁移和 doctor 自动修复能力获得隐性认可（用户依赖 doctor --fix 报告问题）。

## 8. 待处理积压（提醒维护者关注）

- **#143524（WAL 增长，125 评论，9 月 9 日开）**：积压最久、讨论最热的 P0，仍无 fix PR，建议优先排期。
- **#160959 / #163029 / #162211 启动阻塞问题簇**：三个 P0 互相关联，可能共享根因（同步插件捕获/大目录扫描阻塞事件循环），值得统一根因分析。
- **#53763 headless 浏览器**：`needs-product-decision` 卡置 6 个月+，建议给出明确的接受/拒绝结论。
- **多个 stale 且带 `no-new-fix-pr` 的 P1**：#139578（EmbeddingGemma ubatch 回归）、#126246（Telegram 出站丢失）、#131768（Android Talk 掉线）长期无维护者实质回应。
- **PR 侧 stale**：#141957、#141946、#141755、#142070（9 月初提交，`needs proof`/`waiting on author`），以及高价值的 ingress 饥饿修复 **#161997**（`waiting on author`）——该 PR 解决单条阻塞 lane 饿死全部会话投递的问题，与多个 message-loss issue 相关，建议推动完成 proof 后尽快合并。

**健康度小结**：贡献吞吐与功能推进（question custody、Solid 迁移、升级修复）表现强劲，但 P0 稳定性积压（尤其 SQLite checkpoint 族与启动阻塞族）已持续一个月以上，是当前项目最大风险，建议在下一版本前集中清理。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：2026-10-15 | 数据窗口：过去 24 小时各仓库活动快照**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**功能密集交付与稳定性债务并存的高速演化期**：核心项目普遍围绕 Gateway 统一运行时、SQLite 会话存储、多渠道消息接入（Telegram/Slack/Teams/Email/飞书）构建"常驻个人助理"形态。生态明显分层——头部项目日均可达 500 级 Issue/PR 更新，中型项目处于 Beta 冲刺，长尾项目则出现维护断档（PicoClaw 被社区 Fork 自救）。值得注意的是，几乎所有活跃项目都在同一时期遭遇**消息丢失、静默失败、数据不可逆删除**类信任问题，表明"可靠的状态持久化与可审计的失败语义"已成为整个生态的下一阶段瓶颈。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新（合并） | Release | 阶段判断 | 健康度 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（新开/活跃 294） | 500（160） | 无 | 高速迭代 + P0 积压 | ⚠️ 双轨：贡献强、缺陷积压严重 |
| **NanoBot** | 3 | 34（21） | 无 | 密集修复期 | ✅ 良好（单点贡献者风险） |
| **Zeroclaw** | 29 | 50（**0 合并**） | 无 | v0.9.0 冲刺（积压） | ⚠️ 合并吞吐为零，XL PR 栈堆积 |
| **Hermes Agent** | 50 | 50（3） | **v0.22.1** | 大合并后收尾 | ✅ 高（回归响应快） |
| **PicoClaw** | 1 | 1（0） | 无 | 维护断档 | 🔴 社区 Fork 自救 |
| **NanoClaw** | 1 | 9（2） | 无 | 稳定迭代 | ✅ 健康但社区反馈少 |
| **NullClaw** | 0 | 5（0） | 无 | 单人功能冲刺 | ⚠️ 零社区互动 |
| **LobsterAI** | 0 | 10（10） | **2026.10.13** | 桌面助手功能跃迁 | ✅ 工程交付强、社区静默 |
| **Moltis** | 0 | 2（0） | 无 | 特性蓄力 | ⚪ 低活跃 |
| **CoPaw (QwenPaw)** | 16 | 30（7） | **beta.5 + beta.6** | v2.2.2 Beta 冲刺 | ✅ 发布管控成熟 |
| **EasyClaw** | 0 | 0（0） | **v1.9.29/30** | 高频发布、社区零互动 | ⚪ 单团队驱动 |
| IronClaw / TinyClaw / ZeptoClaw | 0 | 0 | 无 | 静默 | — 数据不足 |

**当日发布版本的项目：3 个**（Hermes、LobsterAI、CoPaw ×2、EasyClaw ×2）；**零合并高积压：Zeroclaw**；**维护危机：PicoClaw**。

---

## 3. OpenClaw 在生态中的定位

**社区规模断层第一**：日均 500 级 Issue/PR 更新、单 Issue 评论量达 125 条（#143524），讨论密度与 NanoBot（3 条 Issue）等不在一个量级，是生态的事实参照系——LobsterAI 甚至将"OpenClaw 稳定性"作为自家版本说明的核心卖点，说明其已被下游产品当作运行时依赖。

**优势**：
- **重启可恢复性投入最坚决**：durable question custody 四部曲（#168917→#171682）+ requester identity 修复（#157806），直击生态共性痛点；
- 核心维护者产能高（@steipete、@RomneyDa），Web UI Lit→Solid 迁移进入尾声；
- 工具生态扩展明确（GitHub 只读工具集 #172692/#172779）。

**风险**：7 个 P0 无 fix PR，SQLite checkpoint 缺陷族（#143524/#164294）与启动阻塞族（#160959/#162211/#152981）持续 1 个月以上，忠实用户已公开恳请“生产就绪”稳定标签（#73537）。对比 NanoBot 当天闭环 p0、CoPaw 用 Release Duty 自动验证发布，OpenClaw 的缺陷响应速度明显落后于其社区规模应配的水位。

**技术路线差异**：多数项目用 JSONL 或简单 SQLite，OpenClaw 与 NanoBot（#5943）、Zeroclaw（#11420）同处"SQLite 事务化会话存储"演进前沿，但 OpenClaw 率先撞上了 WAL/checkpoint 的规模化难题——这既是债务，也是其用户体量的证明。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **会话持久化与数据不丢失** | OpenClaw（#143524、#155119、#126246）、NanoBot（#6214 p0 压缩丢数据）、Zeroclaw（#11711 trim 永久删历史、#11420 时间戳丢失）、Hermes（#134889）、CoPaw（#8252） | 生态第一共性痛点：重启/压缩/trim 后消息与状态丢失，"失败看起来像成功" |
| **事件循环/启动不阻塞** | OpenClaw（#160959/#162211 启动阻塞簇）、NanoBot（#6224/#6220）、CoPaw（#8194） | 将同步 IO/插件加载移出主循环，避免健康监控误判引发重启风暴 |
| **SQLite 作为权威状态存储** | OpenClaw、NanoBot（#5943 架构级迁移）、Zeroclaw | 用事务替代 JSONL，解决并发一致性与 checkpoint 设计 |
| **多渠道 IM 接入与流式体验** | Zeroclaw（Email/Telegram/Slack 流式）、NullClaw（Slack 流式输出）、NanoClaw（Teams）、Hermes（Telegram/Discord/飞书）、OpenClaw（Telegram 丢失） | Slack/Telegram/Teams/Email 成标配渠道，回复实时流式成为竞争点 |
| **企业级身份与权限治理** | Zeroclaw（OIDC/多用户 #8289）、Hermes（managed scope 遥测控制、provider 锁）、Moltis（spawn 白名单 #1302）、NanoBot（#6225 快照安全） | OIDC、principal 隔离、子代理权限守卫，指向企业部署 |
| **MCP 生态扩张** | NanoBot（134 个预设）、NanoClaw（#3597）、Hermes（#138329 SSE 上限）、CoPaw | MCP 接入门槛降低 + 大 tool list 兼容性 |
| **安全默认值** | NanoClaw（#2433 docker0 暴露）、NanoBot（#6222 路径绕过）、LobsterAI（#2863 导出免凭据） | 安装器/导出不应默认暴露管理面与凭据 |
| **升级链路可靠性** | OpenClaw（#170331 等 4 条）、Hermes（Termux/Windows 更新死胡同）、NanoBot（#6168 可恢复自更新） | 应用内可恢复更新成为标配能力 |

---

## 5. 差异化定位分析

- **OpenClaw**：生态核心运行时/参照系，功能最全（Gateway、插件、Web UI、GitHub 工具），自托管重度用户与企业双场景，代价是复杂度带来的稳定性债务。
- **NanoBot**：快速跟进的精简内核路线，修复吞吐极高、当天闭环 p0，主打开箱即用（134 MCP 预设、provider 矩阵、Google Drive 工具），风险在 @chengyongru 单点贡献。
- **Zeroclaw**：Rust 技术栈、企业向（OIDC、私有 CA、Office 365、A2A 协议 crate），社区技术素养最高（Issue 附精确行号），但合并吞吐是瓶颈。
- **Hermes Agent**：多平台托管先锋（Termux/Windows Desktop/多 IM），插件生态活跃，v0.22.1 统一网关大合并后处于收尾期；企业场景（遥测/provider 锁）可能是 v0.23 主题。
- **CoPaw (QwenPaw)**：产品化程度最高——Release Duty 自动验证、XXXL 级 UI 功能（Intelligent UI、Python Code Mode、结构化 human-in-the-loop），Beta 冲刺节奏成熟。
- **LobsterAI**：桌面伴侣差异化路线（划词、截图提问、悬浮球），背靠网易有道，明显面向中文 C 端用户，且以 OpenClaw 稳定性为卖点（下游依赖者）。
- **NullClaw / EasyClaw**：单人/单团队驱动的垂直场景项目——前者押注"Slack 内流式 AI 助手”，后者是 TikTok 电商卖家运营 Copilot（合规触达、差评管理）。
- **NanoClaw**：容器化多 agent 托管（Claude Code/Codex 容器基线刷新），企业 IM（Teams）深耕。
- **Moltis**：专注多 agent 组织编排（org-chart/coordinator），差异化清晰但体量小。
- **PicoClaw**：维护断档，社区 Fork 接管中，边缘硬件场景（sipeed）需求仍在。

---

## 6. 社区热度与成熟度分层

**第一梯队（生态级热度）**：OpenClaw —— 讨论量断层第一，处于"高速迭代 + 质量巩固并行”的双轨状态，P0 清理是下一版本关键。

**第二梯队（快速迭代/功能冲刺）**：
- CoPaw：Beta 冲刺，双版本连发，质量管控成熟；
- Hermes：大合并后收尾，回归当日闭环；
- NanoBot：修复吞吐极快，架构级 PR（SQLite）蓄力下一大版本；
- LobsterAI：桌面助手功能跃迁，工程交付强。

**第三梯队（定向推进/质量巩固）**：Zeroclaw（v0.9.0 收尾但合并停滞）、NanoClaw（稳定迭代）、Moltis、NullClaw（功能待 review）。

**风险层**：PicoClaw（维护断档、社区分裂中）、EasyClaw（高频发布但社区零互动，可持续性存疑）、IronClaw/TinyClaw/ZeptoClaw（静默）。

**横向洞察**：活跃度与社区互动度不成正比——LobsterAI/EasyClaw 交付极强但 Issue 通道静默（B 端/内部团队驱动），OpenClaw/Hermes/CoPaw 社区反馈最真实密集，后者的问题清单更能代表生态共性痛点。

---

## 7. 值得关注的趋势信号

1. **“可靠性”正在取代“能力”成为竞争主线**。五个以上项目同日暴露数据丢失/静默失败问题；OpenClaw 的 question custody、NanoBot 的压缩序列化锁、CoPaw 的取消可审计诉求，都指向同一结论：**可信的状态持久化 + 可听见的失败语义**是下一阶段的护城河。对开发者的启示：早晚会撞上 SQLite WAL/checkpoint 与并发压缩问题，值得提前设计。

2. **SQLite 事务化会话存储成为架构收敛点**（OpenClaw/NanoBot/Zeroclaw 同步迁移），JSONL 方案正在被淘汰；随之而来的 WAL 增长、checkpoint 阻塞是可预见的坑。

3. **Gateway 统一运行时 + 多渠道 IM 是标配形态**，Slack/Telegram 流式回复（Zeroclaw、NullClaw）是当前体验竞争焦点；Email 渠道（Zeroclaw）和企业 IM（Teams/Office 365）表明企业场景需求真实且密集。

4. **企业级治理需求集中涌现**：OIDC/多用户（Zeroclaw）、遥测管控/provider 锁定（Hermes）、子代理权限白名单（Moltis）、安全默认值（NanoClaw #2433）——**"个人助手"正在向"可托管的团队/企业助理"演进**，这可能是 2027 年的主战场。

5. **运维自助化**：应用内可恢复更新（NanoBot #6168、Hermes 教训）、doctor 自动修复（OpenClaw）、Release Duty 自动验证（CoPaw）——升级链路可靠性已从附加项变为用户留存关键。

6. **贡献者单点风险普遍存在**：NanoBot、LobsterAI、NullClaw、EasyClaw 均高度依赖 1-2 人；PicoClaw 的 Fork 自救是极端案例。选型时应对此类项目评估 bus factor，Zeroclaw 的社区 PR 堆积（50 条零合并）则是另一种形态的维护容量不足。

7. **下游依赖生态形成**：LobsterAI 以 OpenClaw 为运行时、NanoClaw 容器化 Claude Code/Codex——"agent 框架之上的框架/产品"层正在出现，OpenClaw 的稳定性问题会向下游传导，生态责任随规模增长。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-10-15

## 1. 今日速览

NanoBot 今日保持高活跃度：24 小时内 PR 更新达 34 条（21 条已合并/关闭，13 条待合并），Issue 更新 3 条（1 新开 2 关闭），无新版本发布。项目当前处于密集的 bug 修复与性能优化阶段，核心贡献者 @chengyongru 单日贡献了十余个覆盖 agent 内核、SDK、WebUI、provider 多层面的修复与优化 PR，且大部分当天即被合并，体现出极快的 review 周转效率。值得注意的是，一个社区报告的空闲压缩（idle compaction）数据丢失风险 bug（#6214）在报告当天即有对应修复 PR（#6215/#6221），响应速度值得肯定。

## 2. 版本发布

今日无新版本发布。近期合并的修复（含一个 p0 级修复 #6221）可能正在为下一次版本发布积累。

## 3. 项目进展

今日合并/关闭共 21 条 PR，重点如下：

**高优先级修复**
- **#6221 [p0, 已关闭] fix(session): serialize compaction with active turns** — 修复活跃 turn 与压缩操作并发导致的会话回复丢失问题（复用 AgentLoop 的 per-session 锁序列化）。这是今日最重要的稳定性修复，直接回应 Issue #6214。https://github.com/HKUDS/nanobot/pull/6221
- **#6219 [p2, 已关闭] fix(sdk): validate imported messages before session changes** — SDK 导入消息前先深度校验整批数据，避免半途失败污染 live session。https://github.com/HKUDS/nanobot/pull/6219
- **#6225 [p2, 已关闭] fix(skills): bind plugin snapshots to approved content** — 修复 #6217 引入的快照回归（安全问题：被替换的 SKILL.md 可注入缓存路径）。https://github.com/HKUDS/nanobot/pull/6225
- **#6222 [p2, 已关闭] fix(exec): reject shell paths with unresolved home directories** — 工作区限制下 `~unknown/file.txt` 这类路径绕过 containment 判定的安全漏洞修复。https://github.com/HKUDS/nanobot/pull/6222
- **#6210 [p2, 已关闭] fix(providers): preserve supported Kimi K3 reasoning efforts** — Kimi K3 推理强度参数 `low/high/max` 保留修复。https://github.com/HKUDS/nanobot/pull/6210

**性能优化**
- **#6217 [已关闭] perf(agent): reuse skill discovery within each prompt** — 在单次 prompt 构建内复用 skill 发现结果，减少重复文件读取与 CLI 探测。https://github.com/HKUDS/nanobot/pull/6217
- **#6218 [已关闭] perf(agent): skip transcript snapshots without run hooks** — 无实际回调时跳过 transcript 深拷贝。https://github.com/HKUDS/nanobot/pull/6218

**功能与生态**
- **#6216 [已关闭] feat(webui): expand MCP service presets** — MCP 预设从 16 个扩到 134 个（新增 118 个），覆盖远程 OAuth、API-key、本地服务器等连接方式，大幅降低 MCP 接入门槛。https://github.com/HKUDS/nanobot/pull/6216
- **#5875 [已关闭] feat(providers): add IO Intelligence (io.net) provider** — io.net 官方贡献的 out-of-box provider 支持。https://github.com/HKUDS/nanobot/pull/5875
- **#6190 [已关闭] fix(webui): give media gallery components distinct examples**。https://github.com/HKUDS/nanobot/pull/6190

**待合并的重要 PR（13 条 open）**
- **#5943 [p1] refactor(session): centralize state ownership in SQLite** — 用 SQLite 事务替换 JSONL 作为权威存储，属于架构级改造，已开近 3 周。https://github.com/HKUDS/nanobot/pull/5943
- **#6224 [p1] perf(agent): prepare prompts outside the event loop**。https://github.com/HKUDS/nanobot/pull/6224
- **#6137 [p1] fix(agent): symlink 工作区下 skills summary 构建修复**。https://github.com/HKUDS/nanobot/pull/6137
- **#6168 feat(update): managed installs + 可恢复的应用内更新**。https://github.com/HKUDS/nanobot/pull/6168
- **#6195 feat(tools): read-only Google Drive tool**。https://github.com/HKUDS/nanobot/pull/6195

总体看，今日项目在**会话一致性/数据安全**与**事件循环性能**两条主线上有实质推进，同时 MCP 生态和 provider 矩阵明显扩张。

## 4. 社区热点

今日互动数据偏少（各 Issue/PR 评论数为 0 或未同步），热度主要体现在事件本身：

- **Issue #6214 [OPEN]** — 社区用户 @Apageoflove 报告 idle compaction 可归档仍在运行的 direct turn 会话，附完整复现步骤（Linux + Python 3.12 + main@cdb6210）。诉求：**数据完整性**。当天即有 #6215（open fix）与 #6221（已合并 fix）响应。https://github.com/HKUDS/nanobot/issues/6214
- **Issue #6200 [CLOSED]** — 第三方 @agentrohit37 请求在 README 添加其免费托管服务链接（100 台云电脑），已被关闭，推测被视为推广类请求。https://github.com/HKUDS/nanobot/issues/6200
- **PR #6168** — 应用内更新体系整合（延续 #5817/#6154 的工作），涉及多贡献者协作与归属处理，是社区协作的亮点。https://github.com/HKUDS/nanobot/pull/6168

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 p0 | #6214/#6213：idle compaction 归档运行中会话，最终保存可覆盖 summary checkpoint，**丢失回复数据**（作者复现） | ✅ 已有修复 #6221（合并）、#6215（open） |
| 🟠 p1 | #6137：工作区为 symlink 时 skills summary 构建错误 | 🔄 fix PR open |
| 🟠 p2 回归 | #6225：#6217 引入的 plugin 快照回归，被替换的 SKILL.md 可从缓存路径加载未审批指令（安全） | ✅ 已合并修复 |
| 🟠 p2 安全 | #6222：`~unknown` 路径绕过 workspace containment 判定 | ✅ 已合并修复 |
| 🟡 p2 | #6219：SDK ingest 部分失败后污染 live session | ✅ 已合并修复 |
| 🟡 p2 | #6223：重复 Ctrl+C 无法取消 gateway 任务（shutdown 时） | 🔄 fix PR open |
| 🟡 p2 | #6211：WebUI 断线重连后 turn 状态不一致、部分答案残留 | 🔄 fix PR open |
| 🟡 p2 | #6212：gateway 关闭后 WebUI 出现冗余 subtask 报错 UI | ✅ 已合并修复 |
| 🟡 p2 | #6210：Kimi K3 reasoning effort 参数被错误归一化 | ✅ 已合并修复 |

数据丢失类（p0）与安全类问题全部有修复且大部分当天落地，稳定性健康度良好。

## 6. 功能请求与路线图信号

- **会话存储架构迁移（SQLite）**：#5943（p1，open）表明维护者在推动以 SQLite 事务替代 JSONL 的长期改造，可能构成下一个大版本的核心变更。
- **应用内更新与托管安装**：#6168（open）整合 #5817/#6154，指向“可恢复自更新”能力，是明显的路线图信号。
- **工具生态扩张**：#6195 新增只读 Google Drive 工具（闭 #6187），配合 #6216 的 134 个 MCP 预设和 #5875 的 IO Intelligence provider，显示项目在**开箱即用生态**上持续投入。
- **事件循环性能专项**：#6224、#6220 均为将阻塞操作移出 event loop 的系列优化，可预期后续还有同类 PR。

## 7. 用户反馈摘要

今日可提取的社区反馈有限（评论数据缺失），主要来自 Issue 描述：

- **数据可靠性焦虑**：#6214 报告者提供了精确到 commit hash 的复现，说明有用户在生产环境长时间运行 agent，对会话数据不丢失有硬性要求。
- **部署便利性需求**：#6200 虽为推广，但“免安装、免 API key、一键启动”的卖点也侧面反映部分用户希望降低 nanobot 上手门槛——与 #6168（托管安装）和 #6216（MCP 预设）的方向吻合。
- **Provider 兼容性细节**：#6210 表明 Kimi K3 用户在跟进官方最新 reasoning effort 文档，要求 nanobot 参数面与上游保持同步。

## 8. 待处理积压

- **PR #5943**（SQLite 状态中心化，p1）— 开于 09-27，已近 3 周，架构级变更，建议维护者给出合并时间表或拆分计划。https://github.com/HKUDS/nanobot/pull/5943
- **PR #6137**（symlink skills fix，p1）— 开于 10-10，已 5 天，p1 级修复应加速 review。https://github.com/HKUDS/nanobot/pull/6137
- **PR #6168**（更新体系整合）— 涉及多 PR 归属与历史关闭（#5817），需维护者明确协调。https://github.com/HKUDS/nanobot/pull/6168
- **PR #6224 / #6220 / #6223 / #6211 / #6215** — 今日新开待合并（13 条 open），建议按 p1 → p0 关联（#6215）顺序处理。

---

**健康度小结**：贡献高度集中（@chengyongru 承担核心修复），review 周转快、bug 当天闭环能力强；风险点在于贡献者单点依赖、p1 架构 PR（#5943）积压，以及今日无版本发布导致 p0 修复尚未触达用户，建议尽快发版。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 — 2026-10-15

## 1. 今日速览

Zeroclaw 今日保持高活跃度：过去 24 小时 Issue 更新 29 条（新开/活跃 21，关闭 8），PR 更新 50 条，但**无任何 PR 被合并**（50 条全部处于待合并状态），且无新版本发布。社区贡献呈现明显的“批量提交”特征：@RustLangLatam 一天内连发 4 个 Email 渠道 Issue + 4 个对应 PR，@wray-lee 提交 3 个渠道体验改进。核心方向上，v0.9.0 的 OIDC/多用户身份体系（#8289/#8290）和 A2A 协议 crate（#11254/#11712）持续是主线话题。总体健康度：贡献输入充足，但合并吞吐量今日为零，积压的 XL 级 PR 栈（@Aarlington 的 #11408–#11423 系列）值得关注。

---

## 2. 版本发布

今日无新版本发布。v0.8.6 与 v0.9.0 的进度由 tracker [Issue #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 跟踪，仍在推进中。

---

## 3. 项目进展

今日无 PR 合并，但多个 Issue 被关闭，反映近期工作落地：

- **[#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)（CLOSED）**：延迟加载内置工具 schema 以降低固定 prompt 底座占用 — 解决默认 `max_context_tokens = 32000` 下首轮迭代即超预算 3.3x 的 S1 问题。
- **[#10225](https://github.com/zeroclaw-labs/zeroclaw/issues/10225)（CLOSED）**：ZeroCode RPC 会话无法通过 channel-backed 工具触达已配置渠道的 S1 修复。
- **[#10643](https://github.com/zeroclaw-labs/zeroclaw/issues/10643)（CLOSED）**：有界子委托循环工具的 fail-closed 审批强制 — 重要安全修复。
- **ZeroCode TUI 稳定性集中修复**：[#11481](https://github.com/zeroclaw-labs/zeroclaw/issues/11481)（终端断连后 100% CPU）、[#11618](https://github.com/zeroclaw-labs/zeroclaw/issues/11618)（SESSION_BUSY 时静默丢弃排队消息）、[#11694](https://github.com/zeroclaw-labs/zeroclaw/issues/11694)（Cost 页 UTC/本地日混合）、[#11724](https://github.com/zeroclaw-labs/zeroclaw/issues/11724)（每面板会话数可配置）均关闭。

⚠️ 注意：50 条待合并 PR 中包含多条 XL 级安全相关栈式 PR（见第 8 节），合并吞吐是当前瓶颈。

---

## 4. 社区热点

评论最多的讨论：

1. **[#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)（10 评论，已关闭）** — 工具 schema 与上下文预算的权衡，触及 agent-loop 核心设计，讨论密度高。
2. **[#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254)（10 评论）** — RFC：抽取 `zeroclaw-a2a` 独立 crate，统一 A2A wire 模型/客户端/入站协议的所有权。配套 PR [#11712](https://github.com/zeroclaw-labs/zeroclaw/pull/11712)（XL）已提交。诉求：为 v0.9.0 gateway 分离做好架构铺垫，属于跨边界重构。
3. **[#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)（9 评论）** — SQLite 会话后端每轮重写整份 transcript 并统一 `created_at`，导致逐消息时间丢失。P1，暴露持久化层的结构性问题（与 #11711 的 trim 永久删历史相关）。
4. **[#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) / [#8290](https://github.com/zeroclaw-labs/zeroclaw/issues/8290)（今日更新）** — OIDC 与多用户里程碑 tracker，核心栈已合并，进入收尾阶段。状态更新明确、节奏健康。

---

## 5. Bug 与稳定性（按严重度）

| Issue | 严重度 | 内容 | Fix PR |
|---|---|---|---|
| [#11711](https://github.com/zeroclaw-labs/zeroclaw/issues/11711) | S2/P1级 | 长对话 trim 后**永久删除**旧轮次（session store 侧） | 未见 |
| [#11709](https://github.com/zeroclaw-labs/zeroclaw/issues/11709) | — | gateway reload 后已升级 WebSocket 存活并继续服务旧实例（状态泄漏） | 未见 |
| [#11708](https://github.com/zeroclaw-labs/zeroclaw/issues/11708) | S2 | `model_routing_config` schema 缺 action 级必填参数，小模型反复重试 | 未见 |
| [#11706](https://github.com/zeroclaw-labs/zeroclaw/issues/11706) | S2 | `max_image_turns` 后 vision 路由不释放，整个会话钉死在 vision provider（成本影响） | 未见 |
| [#11749](https://github.com/zeroclaw-labs/zeroclaw/issues/11749) | S2 | Email 渠道回应自动回复/退信，有邮件环路风险 | ✅ [#11750](https://github.com/zeroclaw-labs/zeroclaw/pull/11750) |
| [#11745](https://github.com/zeroclaw-labs/zeroclaw/issues/11745) | S2 | 入站附件未按文档落盘 | ✅ [#11746](https://github.com/zeroclaw-labs/zeroclaw/pull/11746) |
| [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | S2 | SQLite 每轮重写 transcript、时间戳丢失 | 未见 |

Email 渠道的三个 bug 均为“Issue + PR 同日配对提交”，响应效率极高。

---

## 6. 功能请求与路线图信号

- **A2A crate**：RFC [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) + PR [#11712](https://github.com/zeroclaw-labs/zeroclaw/pull/11712) 已 `status:accepted`，大概率纳入 v0.9.0。
- **Email 渠道强化**（[@RustLangLatam](https://github.com/zeroclaw-labs/zeroclaw/pull/11752)）：私有 CA 信任（#11751/#11752）、STARTTLS/Office 365 支持（#11747/#11748）— PR 均已就绪，合并阻力小。
- **渠道流式体验**：Telegram/Slack 流式草稿显示模型 reasoning（[#11743](https://github.com/zeroclaw-labs/zeroclaw/issues/11743) / [PR #11744](https://github.com/zeroclaw-labs/zeroclaw/pull/11744)），对齐 Matrix 已有能力。
- **Webhook SSE 流式**（[#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419)，P2）：Hosted Path A 的关键能力，持续活跃。
- **子代理模型路由**：[PR #11577](https://github.com/zeroclaw-labs/zeroclaw/pull/11577)（trusted contributor @alucryd，`spawn_subagent` 支持 `model_hint`）— 社区核心贡献者背书，纳入概率高。
- **RFC [#11735](https://github.com/zeroclaw-labs/zeroclaw/issues/11735)**：turn 边界处对工具/委托结果的体积上限 — 新架构提案，尚在早期。

---

## 7. 用户反馈摘要

- **上下文预算焦虑**：#5808 的核心痛点是“还没开始干活，内置工具 schema 就吃掉 3x 预算”，用户对 prompt 底座可裁剪性有强烈诉求。
- **小模型/本地模型体验**：#11708（qwen3.5:9b）、#11742（custom provider 默认 text-fallback 无警告、DSML 标记不清理）表明自托管/兼容 OpenAI 端点的用户是重要群体，schema 精确性与告警缺失直接导致工具调用失败循环。
- **会话数据不可逆丢失**：#11711 + #11420 共同指向“transcript 整体重写”这一持久化模式，用户对历史完整性（时间戳、被 trim 的旧轮次）敏感。
- **企业/合规场景**：私有 CA、Office 365 STARTTLS、OIDC 身份隔离请求密集，说明有企业部署场景的真实需求。
- **运维细节满意度**：Issue 报告普遍附带精确代码行号引用和复现路径，社区技术素养高、协作质量好。

---

## 8. 待处理积压

- **@Aarlington 的 XL 级安全栈**：[#11408](https://github.com/zeroclaw-labs/zeroclaw/pull/11408) → [#11409](https://github.com/zeroclaw-labs/zeroclaw/pull/11409) → [#11410](https://github.com/zeroclaw-labs/zeroclaw/pull/11410) → [#11411](https://github.com/zeroclaw-labs/zeroclaw/pull/11411) → [#11422](https://github.com/zeroclaw-labs/zeroclaw/pull/11422) → [#11423](https://github.com/zeroclaw-labs/zeroclaw/pull/11423) → [#11737](https://github.com/zeroclaw-labs/zeroclaw/pull/11737)，自 10 月 1 日起堆积，涉及 OIDC 凭据、SOP/cron 权限守卫、principal-owned 会话恢复。**部分 PR 与 master 有冲突**，建议维护者优先介入拆解评审。
- **Windows CI 长期红**：[PR #11364](https://github.com/zeroclaw-labs/zeroclaw/pull/11364)（`needs-author-action`，`ci:windows` 自 9 月起全红）+ tracker [#11425](https://github.com/zeroclaw-labs/zeroclaw/issues/11425)（10 个 Windows 文件替换/路径 PR 待批处理）。
- **Flaky test 阻塞 CI 必需门**：[#11179](https://github.com/zeroclaw-labs/zeroclaw/issues/11179)（S1，`pending_park_retry_respects_pending_pool_cap` 跨秒边界偶发失败），影响所有 PR 合并。
- **Parking lot**：[#9734](https://github.com/zeroclaw-labs/zeroclaw/issues/9734)、[#10665](https://github.com/zeroclaw-labs/zeroclaw/issues/10665)（P3，重连后惰性会话重建、会话上限可配置）— 后者已有 #11724 落地部分相关能力，可考虑推进或关闭。

---

*数据来源：Zeroclaw GitHub 仓库过去 24 小时活动快照。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-10-15）

## 1. 今日速览

Hermes Agent 今日保持高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 48，关闭 2），PR 更新 50 条（待合并 47，已合并/关闭 3），并发布了补丁版本 **v0.22.1**。今日主线是 **#106742 统一网关运行时（unified gateway runtime）于 10 月 14 日合并入 main**，随后的回归问题（如 hosted room member turn 失效）快速涌现并被修复，社区进入“大合并后收尾”阶段。贡献者 @enckequity 单日批量提交了 10+ 高质量诊断 Issue，覆盖插件 API、遥测控制、浏览器生命周期等多个方向。总体判断：项目健康度高、迭代节奏快，但 v0.22.1 升级后仍有零星兼容性问题（如 CLI invalid_params）需要关注。

## 2. 版本发布

### v0.22.1（2026-10-14 发布）
- **类型**：补丁版本（rc.5 → 正式版），包含 Windows Store、插件更新等若干修复。
- **新特性**：为 Nemotron Super 3.5 添加默认参数（commit `c59d2994`）。
- **破坏性变更**：未在 Release Notes 中明示，但底层已包含 #106742 统一网关运行时合并（`eb75627f`），架构层面变化较大。
- **迁移注意**：
  - 升级后如遇 `hermes chat` 报 `Error: invalid_params`，见 [Issue #138748](https://github.com/NousResearch/hermes-agent/issues/138748)。
  - Windows git 安装用户注意 `hermes update` 相关问题（见 #122228、#128831）。

## 3. 项目进展

今日合并/关闭活动较少（3 条 PR），项目进展主要体现在：

- **统一网关运行时落地**：[#106742](https://github.com/NousResearch/hermes-agent/pull/106742)（feat/unified-gateway-runtime）已合并入 main，是数周来最重大的架构变更——单一 gateway 现在接管所有本地 session。后续修复由跟踪 Issue [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) 统筹。
- **首例回归已修复**：[#138660](https://github.com/NousResearch/hermes-agent/issues/138660)（hosted room driver 缺少 `member_id` 导致群组成员 turn 不执行，自 `eb75627` 起）当日报告当日关闭，响应速度值得肯定。
- **Windows 更新误报已关闭**：[#122228](https://github.com/NousResearch/hermes-agent/issues/122228)（仅桌面打包失败但 `hermes update` 记录整体 failed）关闭。
- 47 个待合并 PR 中多为针对性修复，社区修复管线充足。

## 4. 社区热点

1. **[#134889](https://github.com/NousResearch/hermes-agent/issues/134889) — 统一网关 post-merge 修复跟踪（17 评论）**：社区高度关注 gateway 大合并的后续收尾，涉及 session state、message delivery、兼容性多个风险维度。
2. **[#58226](https://github.com/NousResearch/hermes-agent/issues/58226) — Anthropic OAuth 用量显示错误（13 评论，👍2）**：`_fetch_anthropic_account_usage()` 中 `util ≤ 1` 被误乘 100，导致几乎未用的账户显示 100% 已用。用户对账单/用量可视化准确性诉求强烈。
3. **[#128831](https://github.com/NousResearch/hermes-agent/issues/128831) — Termux/Android 更新死胡同（6 评论）**：`hermes update` 对 git 安装硬拒绝且无可用补救路径，移动端用户（Python 3.14 + playwright 依赖冲突）被卡死。
4. **[#121735](https://github.com/NousResearch/hermes-agent/issues/121735) — Windows Desktop 渲染进程 ~3.6GB 内存（4 评论）**：远程客户端模式下 renderer 内存泄漏，仍在等复现。
5. **[#115097](https://github.com/NousResearch/hermes-agent/issues/115097) — Telegram 插件内联键盘回调无注册点（3 评论）**：用户被迫 fork Telegram 适配器，反映插件系统扩展性诉求。

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | Fix PR |
|---|---|---|---|
| **P1** | [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) 统一网关 post-merge 修复（涉及 session state / message delivery / 兼容性） | 进行中 | 跟踪中 |
| **P2** | [#138660](https://github.com/NousResearch/hermes-agent/issues/138660) hosted room 成员 turn 不执行（回归自 `eb75627`） | ✅ 已关闭 | 已修 |
| **P2** | [#138748](https://github.com/NousResearch/hermes-agent/issues/138748) v0.22.1 升级后 `hermes chat` 报 invalid_params | OPEN，需复现 | ❌ 暂无 |
| **P2** | [#138329](https://github.com/NousResearch/hermes-agent/issues/138329) httpx2==2.12.0 的 1MiB SSE 事件上限静默破坏大型 MCP tools/list | OPEN | ❌ 暂无 |
| **P2** | [#138794](https://github.com/NousResearch/hermes-agent/issues/138794) `hermes sessions delete` 后 `session.list` 全崩溃，需重启 gateway | OPEN | ❌ 暂无 |
| **P2** | [#121735](https://github.com/NousResearch/hermes-agent/issues/121735) Windows 渲染进程内存增长至 3.6GB | OPEN，等复现 | ❌ 暂无 |
| **P3** | [#138796](https://github.com/NousResearch/hermes-agent/issues/138796) max_retries=0 的 kanban 卡片在限流后仍被重生 | OPEN | ❌ 暂无 |
| **P3** | [#138797](https://github.com/NousResearch/hermes-agent/issues/138797) 浏览器空闲清理竞态可关闭已激活的 session | OPEN | ❌ 暂无 |
| **P3** | [#138486](https://github.com/NousResearch/hermes-agent/issues/138486) Discord 浏览器 OTP 恢复死路（vault 无可见验证码字段） | OPEN | ❌ 暂无 |

## 6. 功能请求与路线图信号

今日 @enckequity 密集提交的功能/改进请求质量较高，多数附代码定位，具备快速采纳条件：

- **插件 API 增强**：[#138801](https://github.com/NousResearch/hermes-agent/issues/138801)（`ctx.register_tool` 暴露 `max_result_size_chars` 与 `dynamic_schema_overrides`）——改动小、收益明确，最可能优先合入；[#138802](https://github.com/NousResearch/hermes-agent/issues/138802)（自建 client 的 provider 插件免 api_key 启动）与现有 [#138782](https://github.com/NousResearch/hermes-agent/pull/138782) 方向一致。
- **企业/托管场景**：[#138804](https://github.com/NousResearch/hermes-agent/issues/138804)（managed scope 强制关闭共享遥测）、[#138803](https://github.com/NousResearch/hermes-agent/issues/138803)（provider 锁禁止一切 fallback/凭证切换）、[#138808](https://github.com/NousResearch/hermes-agent/issues/138808)（严格释放模式）——明显指向企业部署需求，可能构成 v0.23 主题。
- **性能优化**：[#138807](https://github.com/NousResearch/hermes-agent/issues/138807)（停止回放已完成 turn 的 reasoning，长会话显著省 token）——用户痛点明确，采纳概率高。
- **Skills Hub**：[#138805](https://github.com/NousResearch/hermes-agent/issues/138805)（安装隔离/跨进程锁/按 profile 操作）——安全加固方向。

## 7. 用户反馈摘要

- **痛点：升级路径不稳**。Windows git 安装（#122228）与 Termux（#128831）用户反复遭遇 `hermes update` 部分成功/死胡同；v0.22.1 刚发布即有 CLI 启动失败报告（#138748，中文用户提交）。
- **痛点：用量/计费可视化不可信**。Anthropic OAuth 用户看到 100% 用尽的错误数据（#58226），多 profile 托管下 `session.usage` 静默丢字段（#132422）——重度用户核心关切。
- **痛点：静默失败模式**。Kanban 通知静默丢失（#138810）、memory_monitor 心跳从未启动（#49773）、MCP SSE 静默截断（#138329）——用户普遍希望“失败要可听见”。
- **满意点**：Issue 响应速度快（#138660 当日修）；新 Issue 模板产出报告质量高；插件生态诉求活跃（Telegram、cron、kanban 场景都有深度用户）。
- **使用场景多样化**：Termux/Android、Windows Desktop 远程客户端、Discord/Telegram/飞书多平台托管、MCP 大工具服务器——移动端和桌面端稳定性是下一阶段短板。

## 8. 待处理积压

- **[#49773](https://github.com/NousResearch/hermes-agent/issues/49773)（6 月 20 日创建，P2）**：gateway runtime 从未调用 `start_memory_monitoring()`，外部 watchdog 健康检查失效——开放近 4 个月，建议优先处理。
- **[#58226](https://github.com/NousResearch/hermes-agent/issues/58226)（7 月 4 日，P2）**：Anthropic OAuth 用量显示错误，13 条评论仍无 fix PR。
- **[#77881](https://github.com/NousResearch/hermes-agent/issues/77881) / [#77216](https://github.com/NousResearch/hermes-agent/issues/77216)（8 月初，P3）**：Kanban 重试丢失上下文、`kanban_attach` 无本地路径选项——长期未动，kanban 重度用户持续受影响。
- **[#121735](https://github.com/NousResearch/hermes-agent/issues/121735)（9 月 24 日，P2）**：Windows renderer 内存泄漏，状态 awaiting-reporter，建议维护者主动提供诊断指引。
- **PR 积压**：[#70750](https://github.com/NousResearch/hermes-agent/pull/70750)（7 月 24 日，contribute_worker_env 插件 hook）开放近 3 个月未合，涉及安全边界评审，建议给出明确决策；[#118806](https://github.com/NousResearch/hermes-agent/pull/118806)、[#123773](https://github.com/NousResearch/hermes-agent/pull/123773) 等 9 月底 PR 也待评审。

---
*数据来源：GitHub API，统计窗口 2026-10-14 至 2026-10-15。链接均为 NousResearch/hermes-agent 仓库相对路径。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-10-15）

## 1. 今日速览

PicoClaw 今日活跃度整体偏低，仅 1 条 Issue 更新和 1 条新开 PR，无版本发布、无 PR 合并。项目面临的核心风险是**主仓库疑似停止维护**：社区成员已发起活跃 Fork（afjcjsbx/picoclaw）并发布 continuation 公告（[#3417](https://github.com/sipeed/picoclaw/issues/3417)）。与此同时，仍有外部贡献者向主仓库提交兼容性修复（[#3428](https://github.com/sipeod/picoclaw/pull/3428)），说明社区需求仍在，但维护断档信号明显，项目健康度处于**警示区间**。

## 2. 版本发布

今日无新版本发布。近期亦无 Release 记录，进一步印证维护停滞的判断。

## 3. 项目进展

- 今日无 PR 合并或关闭，主仓库功能推进为零。
- 新开 PR [#3428](https://github.com/sipeed/picoclaw/pull/3428)：修复通过 OpenAI 兼容端点进行 Gemini 3 工具调用续接时的 `400 INVALID_ARGUMENT` 错误，方案为在 `extra_content` 中回传 `thought_signature`。属于模型兼容性关键修复，但能否被合并取决于维护者是否回归。

## 4. 社区热点

- **[#3417 [Notice] Active Fork & Continued Maintenance](https://github.com/sipeed/picoclaw/issues/3417)**（创建于 10-06，10-14 仍有更新，1 条评论）：社区成员 @afjcjsbx 宣布 Fork 并持续维护项目。这是当前最重要的事件信号——用户诉求明确：项目仍有“显著的社区兴趣和需求”，但官方无人响应，社区被迫自救。此类公告若持续发酵，可能造成社区分裂（主仓库 vs Fork 双轨），贡献者和用户需明确归属。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 状态 |
|---|---|---|
| 高（功能性阻断） | Gemini 3 经 OpenAI 兼容端点续接 tool-calling 对话时报 `400 INVALID_ARGUMENT`，缺少 `thought_signature`（[#3428](https://github.com/sipeed/picoclaw/pull/3428)） | 已有 fix PR，**待合并** |
| 高（生态级风险） | 主仓库无人维护，Issue/PR 无响应（[#3417](https://github.com/sipeed/picoclaw/issues/3417)） | 社区 Fork 自救中 |

## 6. 功能请求与路线图信号

- 今日无新功能请求。
- PR #3428 反映出用户在**多模型（Gemini 3）+ OpenAI 兼容层**场景下的实际使用需求，若维护恢复，此类模型兼容性修复应优先纳入下一版本。
- Fork 方向（afjcjsbx/picoclaw）可能成为事实上的路线图承载者，值得关注其后续 Release。

## 7. 用户反馈摘要

- **痛点**：Gemini 3 工具调用链路不可用，直接影响依赖 OpenAI 兼容端点接入 Gemini 的用户。
- **社区情绪**：对官方维护缺位的不满与担忧明显，但社区主动性高——用户不仅报告问题，还自行提交修复和接管维护，说明项目本身仍有真实使用价值和粘性。

## 8. 待处理积压

- **PR [#3428](https://github.com/sipeed/picoclaw/pull/3428)**（今日新开）：关键兼容性修复，请维护者优先评审合并。
- **Issue [#3417](https://github.com/sipeed/picoclaw/issues/3417)**：Fork 公告悬而未决，官方应尽快表态（是否归档、移交或恢复维护），避免社区进一步分裂。
- **整体提醒**：若 sipeed 官方确认放弃维护，建议在 README 顶部明示交接信息，引导用户迁移至活跃 Fork。

---

**健康度小结**：⚠️ 维护断档 + 社区自救阶段。建议密切跟踪 Fork 仓库的后续发布与主仓库维护者动态。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-10-15

## 1. 今日速览

NanoClaw 过去 24 小时共有 10 条 Issue/PR 更新（1 Issue + 9 PR），其中 7 个 PR 待合并、2 个已合并/关闭，无新版本发布。活动以核心团队（@glifocat、@gavrielc）和长期贡献者（@orgads、@NechuBM）的工程推进为主，涵盖 CI 硬化、容器依赖升级和多个渠道/容器层修复。唯一活跃 Issue 是一条高优先级安全相关修复请求（#2433），值得重点关注。整体项目处于稳定迭代期，维护活跃度健康，但社区侧的新增反馈较少。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭 2 个 PR：

- **#4069 [CLOSED]** chore(container): 升级 Claude Code 至 2.1.296、Agent SDK 至 0.3.296、Codex 至 0.162.1（[@gavrielc](https://github.com/nanocoai/nanoclaw/pull/4069)）
  核心团队推动的 agent 容器依赖升级，重要影响：**Claude Haiku 5.5 成为 Claude Code 的默认 Haiku 模型**。同时更新了配套 skills。这是对模型运行时基线的一次重要刷新。
- **#4067 [CLOSED]** build(deps-dev): vitest 4.1.4 → 4.1.11（[@dependabot[bot]](https://github.com/nanocoai/nanoclaw/pull/4067)）
  常规开发依赖升级，包含多项 bug 修复。

整体来看，项目在“运行时版本基线”上前进了一步（新模型默认可用），CI 基础设施也在同步加固（见 #4085）。

## 4. 社区热点

- **[#2433](https://github.com/nanocoai/nanoclaw/issues/2433)** 是今日唯一活跃 Issue，标签为 `priority/high`，1 条评论。问题：在裸机 Linux 上，OneCLI 安装器自动检测 `docker0` 网桥 IP 并将全部三个端口（包括 admin API `:10254` 和 Postgres `:5432`）绑定到该地址，而 agent 容器恰恰运行在同一网桥上，存在明显的暴露面。这反映了裸机部署用户对**默认安装安全边界**的强烈诉求——只有网关代理端口（`:10255`）需要对外，管理面和数据面应限制在 loopback。该 Issue 自 5 月开至今仍未关闭，且摘要已带 "PR: Fix" 标记，说明修复在推进中但节奏偏慢。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#2433](https://github.com/nanocoai/nanoclaw/issues/2433) OneCLI 安装后 admin API 与 Postgres 绑定到 docker0 网桥，agent 容器可直接访问管理面 | 有 Fix 标记，未关闭 |
| 🟡 中 | [#4086](https://github.com/nanocoai/nanoclaw/pull/4086) `/add-dashboard` 用 `fs.readFileSync` 读 transcript，超过 ~512MB 触发 Node 字符串长度上限直接抛错 | 已有 fix PR（今日新开） |
| 🟡 中 | [#3596](https://github.com/nanocoai/nanoclaw/pull/3596) Teams 用户 ID 含冒号时 card-click 授权与发送者解析不匹配 | 已有 fix PR（8/28 起） |
| 🟡 中 | [#3597](https://github.com/nanocoai/nanoclaw/pull/3597) 启用 gateway provider 后，`host.docker.internal` 上的 HTTP MCP server 不可达 | 已有 fix PR（8/28 起） |
| 🟢 低 | [#3674](https://github.com/nanocoai/nanoclaw/pull/3674) 出站文件缺少 mime type，Teams 拒绝接收 | 已有 fix PR |

亮点：所有已知 bug 均已有对应 fix PR，无“裸奔”缺陷。

## 6. 功能请求与路线图信号

- **容器运行时持续升级节奏**（#4069）：Claude Code / Agent SDK / Codex 的批量升级已是惯例性 chore PR，可预期后续版本将保持对最新模型（如 Haiku 5.5 默认化）的快速跟进。
- **CI 供应链硬化**（[#4085](https://github.com/nanocoai/nanoclaw/pull/4085)：全部 6 个 workflow、18 个 job 从 `ubuntu-latest` 钉到 `ubuntu-26.04`，避免 10/19–11/19 的 runner 滚动变更造成意外破坏）：表明团队对构建可复现性的重视，属于路线图上的基础设施投入。
- **Teams 集成深度打磨**（#3596、#3674）：@orgads 的系列 PR 显示 Microsoft Teams 是重点渠道方向。
- **大数据量健壮性**（#4086）：transcript 流式读取暗示项目在向长会话/重度使用场景优化。

## 7. 用户反馈摘要

- **裸机部署安全**（#2433）：用户期望开箱即用的安装器不应把管理面暴露给容器网络——反映了对“安全默认值”的痛点，而非依赖用户手工加固。
- **MCP 生态兼容**（#3597）：用户在 agent 容器内通过 `host.docker.internal` 访问本地 HTTP MCP server 的场景受阻，说明 MCP 工具链是真实高频使用场景。
- **长会话可用性**（#4086）：存在 transcript 达数百 MB 的重度用户，dashboard 工具需适配。
- **企业 IM 场景**（#3596、#3674）：Teams 文件传输与用户身份解析问题指向企业协作场景的实际落地需求。

## 8. 待处理积压

- 🔴 **[#2433](https://github.com/nanocoai/nanoclaw/issues/2433)**（高优先级安全）：2026-05-12 开启，至今 5 个月未关闭，已有 "PR: Fix" 标签但未见对应 PR 合入主分支。建议维护者优先处理，或明确修复 PR 编号与排期。
- 🟡 **[#3451](https://github.com/nanocoai/nanoclaw/pull/3451)**（update-skills barrel import 归属修复）：2026-08-22 开启，近两个月待合并，缺少评论互动，建议维护者review或跟进。
- 🟡 **@orgads 的四个 fix PR**（#3596、#3597、#3673、#3674）：均自 8 月下旬开启，至今约 7 周待合并。虽昨日有更新活动，但持续未合入可能挫伤高质量外部贡献者积极性，建议集中评审。

---
*数据来源：NanoClaw GitHub 仓库过去 24 小时 Issue/PR/Release 动态。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报（2026-10-15）

## 1. 今日速览

- 过去 24 小时项目共 5 条更新，**全部为新增 PR**（5 open / 0 merged），无 Issue 活动、无新版本发布。
- 5 个 PR 均由同一贡献者 [@wray-lee](https://github.com/wray-lee) 于 10-14 集中提交，呈明显的“批量冲刺”特征，且全部为功能向（feat/fix），无社区侧 Bug 报告。
- 主题高度聚焦：**Slack 集成体验**（2 个 PR）与 **模型 Provider/流式能力**（3 个 PR），显示项目正朝“Slack 场景下的实时 AI 助手”方向发力。
- 社区互动面（评论、点赞、Issue 讨论为零）暂无信号，健康度评估：**核心开发活跃，社区参与度待观察**。

## 2. 版本发布

今日无新版本发布，无 Releases 更新。（省略详情）

## 3. 项目进展

今日无 PR 被合并或关闭，5 个 PR 全部处于待审核状态（Open），其中 2 个自评为高风险变更（详见第 5 节），**等待维护者 review 是当前推进的关键路径**：

| PR | 主题 | 规模/风险 |
|---|---|---|
| [#1061](https://github.com/nullclaw/nullclaw/pull/1061) | Slack 状态 reaction 跟踪任务生命周期 | 小型，低风险 |
| [#1060](https://github.com/nullclaw/nullclaw/pull/1060) | 按 `provider/model` 前缀显式路由 Provider | 修复类，涉及 fallback 逻辑 |
| [#1059](https://github.com/nullclaw/nullclaw/pull/1059) | 新增 `agent.reasoning_mode` 配置默认值 | 高风险（config schema），纯增量 |
| [#1058](https://github.com/nullclaw/nullclaw/pull/1058) | Slack 出站回复流式输出 | 大型（首 commit 12 文件 / +2044 行） |
| [#1057](https://github.com/nullclaw/nullclaw/pull/1057) | 流式模式下支持原生 tool calls | 高风险，6 文件 / +790 行 |

整体看，这批 PR 若合并将显著增强流式推理 + Slack 实时交互能力，是项目近期的一次功能性跃迁，但今日实际推进量为 0（待审）。

## 4. 社区热点

今日无活跃 Issue，5 个 PR 均无评论（undefined）与点赞（👍 0），**无社区热点可报告**。值得注意的反而是“零互动”：高风险 PR（#1057、#1058）缺乏 reviewer 反馈，可能拖慢合并节奏，建议维护者优先介入。

## 5. Bug 与稳定性

今日无用户报告的 Bug、崩溃或回归。PR 中含一项修复：

- **[中] Provider 路由错误**（[#1060](https://github.com/nullclaw/nullclaw/pull/1060)）：`provider/model` 显式引用此前仅在主 Provider 和 `reliability.fallback_providers` 中生效，其他场景解析失败。已有 fix PR，待合并。
- **稳定性风险提示**：[#1057](https://github.com/nullclaw/nullclaw/pull/1057)（流式原生 tool calls）与 [#1058](https://github.com/nullclaw/nullclaw/pull/1058)（Slack 流式输出）均按 AGENTS.md §5 自评高风险层级，合并前需重点回归测试。

## 6. 功能请求与路线图信号

无用户侧功能请求（Issue 为空），但今日 PR 本身释放了清晰的路线图信号：

1. **Slack 深度集成**（#1061 + #1058）：任务状态可视化 + 回复实时流式，指向“Slack 内沉浸式 AI 助手”方向，大概率进入下一版本。
2. **流式推理全面化**（#1057）：流式模式下支持原生 tool calls，补齐流式路径能力短板。
3. **配置面扩展**（#1059）：`reasoning_mode` 可配置默认值，属低争议增量变更，最易先行合并。

## 7. 用户反馈摘要

今日 Issue 与 PR 评论均为 0 条，**无真实用户反馈可提炼**。间接信号：wray-lee 连续针对 Slack 体验与 Provider 路由提交改进，或反映其自身/团队使用场景中的痛点（任务状态不可见、回复延迟、多 Provider 配置失效）。

## 8. 待处理积压

今日数据未提供历史积压 Issue 明细，无法列出长期未响应条目。提醒事项：

- **5 个 Open PR 均为 0 评论、0 review**，建议维护者优先处理 [#1057](https://github.com/nullclaw/nullclaw/pull/1057)、[#1058](https://github.com/nullclaw/nullclaw/pull/1058) 两个高风险大 PR，避免积压与后续 rebase 成本。
- 社区零互动（Issue/评论/点赞均为 0）值得关注，可考虑通过 Release Notes、示例文档等方式激活用户反馈通道。

---
*数据来源：NullClaw GitHub（2026-10-15 抓取），统计窗口为过去 24 小时。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-10-15

> 数据来源：github.com/netease-youdao/LobsterAI 过去 24 小时活动

---

## 1. 今日速览

- 项目处于**高强度开发迭代期**：过去 24 小时内 **10 条 PR 全部关闭/合并，无积压待合并**，且发布 1 个新版本（2026.10.13），交付节奏非常紧凑。
- 核心贡献者 [@fisherdaddy](https://github.com/fisherdaddy) 一人贡献了 10 个 PR 中的 9 个，是本轮「桌面助手（desktop-companion）」功能线的主要推动者。
- Issue 侧今日零活动，社区反馈通道相对安静，项目健康度主要体现在工程交付侧而非讨论侧。
- 整体判断：**开发活跃度高、合并吞吐强、方向明确**（桌面助手 + OpenClaw 稳定性 + 埋点体系），但存在贡献者单点集中风险。

---

## 2. 版本发布

### LobsterAI 2026.10.13（发布于 2026-10-13，本日报周期内最新版本）
🔗 https://github.com/netease-youdao/LobsterAI/releases/tag/2026.10.13

**主要内容：**
- **Office 文档编辑**能力上线
- **Computer Use 支持 macOS**
- **MCP 工具管理**改进
- 界面刷新、任务体验更流畅
- **OpenClaw 稳定性与可靠性显著提升**

**迁移注意事项：** Release 说明中未见明确破坏性变更声明；但本周期内合并的 [#2863](https://github.com/netease-youdao/LobsterAI/pull/2863)（供应商配置导出默认改为不含凭据，含凭据的 v3 备份需用户密码）对老用户导入/导出流程有行为变化，升级后建议留意备份文件版本兼容性（v1/v2 导入仍保留兼容）。

---

## 3. 项目进展

今日 10 个 PR 全部关闭，功能线推进明显：

**🆕 桌面助手（desktop-companion）系列 — 本轮最大功能包**
- [#2865](https://github.com/netease-youdao/LobsterAI/pull/2865) `feat: desktop companion` — 桌面伴侣主体功能落地
- [#2870](https://github.com/netease-youdao/LobsterAI/pull/2870) — 截图提问（多屏选区）、任务完成后悬浮球摘要、未读结果气泡、划词工具栏排序/排除应用、语音输入快捷键
- [#2871](https://github.com/netease-youdao/LobsterAI/pull/2871) — 划词工具统一登录校验，未登录显示「去登录」，IPC 返回明确 `login_required` 错误码，含中英文文案与回归测试
- [#2862](https://github.com/netease-youdao/LobsterAI/pull/2862) — 划词工具栏稳定性修复：菜单展开/收起闪烁、窗口缩放、点击穿透

**📊 可观测性**
- [#2866](https://github.com/netease-youdao/LobsterAI/pull/2866) — 打通专家（expert）与任务使用漏斗埋点：专家曝光→召唤→运行→复用全链路可统计，区分提交受阻/工具失败/用户取消等失败原因；明确**不上传提示词与文件内容**，隐私设计到位

**🔒 安全与体验修复**
- [#2863](https://github.com/netease-youdao/LobsterAI/pull/2863) — 供应商导出默认免凭据，认证备份需密码，含篡改/部分导入/取消的回归覆盖
- [#2864](https://github.com/netease-youdao/LobsterAI/pull/2864) — Windows 开发环境应用身份隔离，避免开发版与正式版冲突
- [#2868](https://github.com/netease-youdao/LobsterAI/pull/2868) — Windows Python 子进程默认 UTF-8，修复中文乱码类问题（影响 main / openclaw / cowork）

**🎨 细节**
- [#2869](https://github.com/netease-youdao/LobsterAI/pull/2869) — 模型选择器中自定义模型增加立方体图标 + 「自定义/Customer」徽标
- [#2867](https://github.com/netease-youdao/LobsterAI/pull/2867) — 技能修正：影视/音乐搜索限定为基本信息查询

**总结：** 项目在桌面端 AI 助手体验上完成了一次成体系的功能跃迁（划词 → 截图 → 任务回访 → 登录闭环），同时补齐了数据埋点和安全基线，单日交付量相当于一个小版本的核心内容。

---

## 4. 社区热点

今日 **Issues 0 条更新，PR 评论数据缺失**，无显著社区讨论热点。

间接信号：[#2866](https://github.com/netease-youdao/LobsterAI/pull/2866) 引用了专家功能背景 Issue **#2849**，说明「专家（Expert）」是近期社区关注的功能主线，埋点上线后团队将获得真实使用数据驱动后续迭代。

---

## 5. Bug 与稳定性

今日无用户报告的新 Bug（Issues 为 0）。但从已合并 PR 可见团队**主动修复**的问题：

| 严重程度 | 问题 | 修复 PR | 状态 |
|---|---|---|---|
| 高 | 供应商导出默认携带凭据的安全隐患 | [#2863](https://github.com/netease-youdao/LobsterAI/pull/2863) | ✅ 已合并 |
| 中 | Windows Python 子进程编码错误（中文乱码，影响 OpenClaw/cowork） | [#2868](https://github.com/netease-youdao/LobsterAI/pull/2868) | ✅ 已合并 |
| 中 | 划词工具栏菜单闪烁、窗口缩放异常 | [#2862](https://github.com/netease-youdao/LobsterAI/pull/2862) | ✅ 已合并 |
| 低 | 未登录状态划词行为不一致 | [#2871](https://github.com/netease-youdao/LobsterAI/pull/2871) | ✅ 已合并 |
| 低 | Windows 开发版应用身份冲突 | [#2864](https://github.com/netease-youdao/LobsterAI/pull/2864) | ✅ 已合并 |

所有已知问题均已闭环，无遗留待修 Bug。

---

## 6. 功能请求与路线图信号

今日无新增用户功能请求。基于 PR 走势推断的路线图方向：

1. **桌面伴侣深度整合**（#2865/#2870/#2862/#2871 连续投递）→ 划词、截图、悬浮球、快捷面板构成完整桌面工作流，下一版本大概率继续打磨多屏、权限与稳定性
2. **专家体系数据驱动迭代**（#2866 埋点 + 背景 #2849）→ 漏斗数据上线后，专家发现/召唤/复用体验将进入优化周期
3. **OpenClaw 稳定性**为 2026.10.13 版本明确重点，[#2868](https://github.com/netease-youdao/LobsterAI/pull/2868) 是其延续
4. **macOS Computer Use** 刚发布，后续可能跟进平台差异化适配

---

## 7. 用户反馈摘要

今日 Issues 与评论数据均为空，**无法提炼真实用户反馈**。

建议关注：新版本（Office 编辑、macOS Computer Use、桌面助手）发布后 3–7 天通常是反馈高峰，可重点跟踪升级相关 Issue（尤其是 [#2863](https://github.com/netease-youdao/LobsterAI/pull/2863) 引起的备份导入行为变化）。

---

## 8. 待处理积压

- **待合并 PR：0 条**，工程侧无积压，节奏健康 ✅
- **Issues：今日无活跃/新增**，无法评估长期未响应 Issue；建议维护者留意背景 Issue [#2849](https://github.com/netease-youdao/LobsterAI/issues/2849)（专家功能）的后续跟进，埋点上线后可回填数据结论

---

### 健康度小结

| 维度 | 评估 |
|---|---|
| 开发活跃度 | ⭐⭐⭐⭐⭐（10 PR/日，全部闭环） |
| 发布节奏 | ⭐⭐⭐⭐⭐（伴随版本发布） |
| 社区互动 | ⭐⭐（Issue/评论静默） |
| 贡献者多样性 | ⭐⭐（高度依赖单一贡献者） |
| 质量保障 | ⭐⭐⭐⭐（多 PR 附回归测试） |

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-10-15）

## 1. 今日速览
- 过去 24 小时项目整体活跃度**较低**：无新 Issue、无 Release，仅 2 条已有 PR 有更新活动（均为评论/CI 更新，非代码新提交高峰）。
- 两个活跃 PR 均来自核心贡献者 @ManuRakh，聚焦于 **子代理（sub-agent）编排与治理能力**的深化，方向高度一致，显示项目正处于"agent 组织架构"特性的集中开发期。
- 无 Bug 报告、无合并/关闭动作，项目处于功能开发蓄力阶段，社区侧暂无新增诉求。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日无 PR 被合并或关闭。两条待合并 PR 值得关注：

- **[PR #1302](https://github.com/moltis-org/moltis/pull/1302)**：新增 `agents.presets.<id>.spawn.allow` 允许列表，限制调用方只能向白名单内的 preset 执行 `spawn_agent`（适用 org-chart / coordinator 图结构）。校验逻辑前置于 `resolve_preset`（在 provider 调用之前），且工具 schema 中只向调用方暴露允许的目标。这是**权限治理/安全隔离**方向的重要补强。
- **[PR #1301](https://github.com/moltis-org/moltis/pull/1301)**：修复 Chat 与 sub-agent 两条路径的行为不一致——`persona`、`system_prompt_suffix`、`delegate_only`、preset model 等字段此前仅对 `spawn_agent` 子运行生效，现在对直接对话同一 agent 也生效。这是**一致性/正确性修复**，对 coordinator/worker 架构用户价值显著。

整体看，两 PR 叠加后将使多 agent 协作（组织架构式编排）的行为更可预测、更安全，属于该特性的最后打磨阶段。

## 4. 社区热点
今日无新增讨论，评论区数据缺失（评论数为 undefined）。PR #1301/#1302 于 10-14 有更新，但无法确认讨论热度。

## 5. Bug 与稳定性
- 今日无新报告的 Bug、崩溃或回归问题。
- 注：[PR #1301](https://github.com/moltis-org/moltis/pull/1301) 本质上是对一个**行为不一致缺陷**的修复（chat 与 sub-agent 路径字段不生效），可视为低严重度正确性问题，已有对应 fix PR 待合并。

## 6. 功能请求与路线图信号
- 今日无新功能请求。
- 路线图信号（从活跃 PR 推断）：**多 agent 编排与权限控制**是当前主线——允许列表（#1302）+ 路径对齐（#1301）表明下一版本很可能主打 "org-chart / coordinator 式 agent 组织" 能力的稳定化。#1302 标注存在依赖 PR（"Depends on:..."），提示其合并顺序受上游 PR 制约。

## 7. 用户反馈摘要
今日无 Issue 评论数据可提炼。间接信号：#1301 描述中提到用户在 coordinator/worker 场景下会遇到“以 agent 本体身份对话”与“子运行”行为分叉的困惑，说明多 agent 用户对**行为一致性**有明确诉求。

## 8. 待处理积压
- [PR #1302](https://github.com/moltis-org/moltis/pull/1302) 与 [PR #1301](https://github.com/moltis-org/moltis/pull/1301)：均已 open 3 天（10-12 创建）、无 👍，且评论数据缺失，建议维护者确认 review 进度及 #1302 的依赖 PR 链是否已就绪，避免阻塞发布。

---
*健康度小结：开发活跃度中等偏低但方向集中，社区互动近乎静默，建议关注 PR 合并节奏与社区运营。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 — 2026-10-15

## 1. 今日速览

项目处于**高活跃度的 Beta 冲刺期**：过去 24 小时 Issues 更新 16 条（新开/活跃 14，关闭 2）、PR 更新 30 条（待合并 23，合并/关闭 7），并连续发布 v2.2.2-beta.5 和 beta.6 两个版本，发布节奏紧凑（两版间隔仅数小时）。当前工作重心集中在 v2.2.2 的稳定性修复——尤其是 **Windows 平台兼容性**（进程探活、日志轮转、端口监听 backlog）和**多端消息同步体验**。同时有多个大型功能 PR（Intelligent UI、Python Code Mode、结构化 human-in-the-loop）排队待审，社区贡献（含 first-time contributor）参与度健康。

## 2. 版本发布

### v2.2.2-beta.6（今日发布）
- fix(e2e): 修正 e2e 测试选择器与当前 Console UI 对齐（[#8247](https://github.com/agentscope-ai/QwenPaw/pull/8247)，@zhijianma）
- fix(history): 支持外部数据库路径与可移植备份（[#8246](https://github.com/agentscope-ai/QwenPaw/pull/8246)，@rayrayraykk）——**涉及数据存储路径，升级用户建议先备份**
- chore: 版本号 bump
- Release Duty 验证 Issue：[#8258](https://github.com/agentscope-ai/QwenPaw/issues/8258)（截止 2026-10-14 14:50 UTC）

### v2.2.2-beta.5
- fix(console): 粘贴长文本时保留草稿（#7948）（[#8119](https://github.com/agentscope-ai/QwenPaw/pull/8119)）
- fix(providers): 识别新版 GPT token 上限参数（[#8090](https://github.com/agentscope-ai/QwenPaw/pull/8090)）
- fix(console): 控制台相关修复（节选）
- Release Duty 验证 Issue [#8242](https://github.com/agentscope-ai/QwenPaw/issues/8242) 已关闭，表明各平台安装验证已通过

两版均为 Beta，**无破坏性变更声明**，但建议生产环境用户停留在 2.2.1 稳定版。

## 3. 项目进展

今日合并/关闭的 7 个 PR 中值得关注：

- **[#8001](https://github.com/agentscope-ai/QwenPaw/pull/8001)（已关闭）** fix(runtime): 工具超时结果可恢复——前台工具超时后返回成功工具结果，让父模型继续生成最终答案（关联 #7981），显著改善长时任务体验
- **[#4577](https://github.com/agentscope-ai/QwenPaw/pull/4577)（已关闭）** feat(cli): `qwenpaw models list` 支持 `--json` / `--configured-only`，改善 CLI 脚本化能力（5 个月的老 PR 终获处理）
- **[#8132](https://github.com/agentscope-ai/QwenPaw/pull/8132)（已关闭）** 发布评测工作流与 QwenPaw Index：通过 Harbor 跑 GAIA、SpreadsheetBench Verified、SWE-bench Verified，为官网榜单铺路

待合并的重量级功能（v2.2.2 或后续版本的候选）：
- [#8248](https://github.com/agentscope-ai/QwenPaw/pull/8248)（XXXL）Chat 回复中内联 OpenUI 交互组件
- [#8259](https://github.com/agentscope-ai/QwenPaw/pull/8259)（XXXL，首次贡献者）内置 `ask_user_question` 结构化人工介入工具
- [#8224](https://github.com/agentscope-ai/QwenPaw/pull/8224)（XXL）实验性 Python Code Mode（`run_code` + CPython worker）
- [#8240](https://github.com/agentscope-ai/QwenPaw/pull/8240)（XXL）Console 模型管理体验重构（作用域分层、思考能力联动）

整体看，项目在修复与架构级功能上**双线并进**，进展节奏良好。

## 4. 社区热点

1. **[#8252](https://github.com/agentscope-ai/QwenPaw/issues/8252)** 多 Agent 间 `ChatWithAgent` 调用被静默取消（CancelledError），同秒成对、产物归零、无取消原因记录——多 agent 舰队编排场景的核心痛点，与 #8225 热重载取消 cron 任务同属“取消语义不透明”问题族
2. **[#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174)** 内置 Tavily web_search 无法配置自有 API key，付费配额不可用——已有对应 PR [#8204](https://github.com/agentscope-ai/QwenPaw/pull/8204)（Under Review），诉求明确：**API key 配置面 + authed→keyless 优雅降级**
3. **[#8120](https://github.com/agentscope-ai/QwenPaw/issues/8120)（已关闭）** “频繁页面加载失败”，7 条评论，多设备复现，影响体验明显——现已关闭，可能与 beta 系列的 Console 修复相关
4. **[#7396](https://github.com/agentscope-ai/QwenPaw/issues/7396)** Claude Code 作为第三方 agent harness 的路线图咨询（`harnesses/registry.py` 中仍是占位符），反映用户对生态互操作的高期待

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#8194](https://github.com/agentscope-ai/QwenPaw/issues/8194) | Desktop 启动钩子崩溃：`runtime-owner.json` 含 stale pid 时 `os.kill(pid,0)` 抛 `SystemError` 未被捕获，**应用无法启动** | ✅ PR [#8196](https://github.com/agentscope-ai/QwenPaw/pull/8196) |
| 🔴 高 | [#8260](https://github.com/agentscope-ai/QwenPaw/pull/8260)（PR） | Windows listen backlog=1 导致并发连接失败 + 分块恢复误报错误页 | ✅ 即 PR 本身，今日新开 |
| 🟠 中 | [#8252](https://github.com/agentscope-ai/QwenPaw/issues/8252) | Agent 间调用静默取消、产物丢失、无审计 | ❓ 未见 fix PR |
| 🟠 中 | [#8225](https://github.com/agentscope-ai/QwenPaw/issues/8225) | 保存配置触发热重载取消运行中 cron 任务且无提示 | ❓ 部分相关：PR [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) 的回滚安全热重载可能覆盖 |
| 🟠 中 | [#8229](https://github.com/agentscope-ai/QwenPaw/pull/8229)（PR） | base64 工具输出导致聊天历史响应 >10MB，慢链路 30s 超时必现 | ✅ 即 PR 本身，Under Review |
| 🟡 低 | [#8249](https://github.com/agentscope-ai/QwenPaw/issues/8249) | Cron 任务编辑默认时间归零、Request Content 显示 `[object Object]` | ❓ |
| 🟡 低 | [#8185](https://github.com/agentscope-ai/QwenPaw/issues/8185) | Windows 上 desktop.log 永不轮转（sidecar tee 句柄占用） | ❓ |
| 🟡 低 | [#8251](https://github.com/agentscope-ai/QwenPaw/issues/8251) | 消息导航目录定位不准（按条目数分摊位置） | ✅ PR #8214 已修一半，本条为遗留 |
| 🟡 低 | [#8210](https://github.com/agentscope-ai/QwenPaw/pull/8210)（PR） | Windows 删除 Creator 项目报 `WinError 5`（日志句柄未释放） | ✅ 即 PR 本身 |

**信号：Windows 桌面端是当前 Bug 重灾区**，与 Desktop 打包发布策略相关，值得专项排查。

## 6. 功能请求与路线图信号

- **Tavily 自有 API key**（#8174）→ PR [#8204](https://github.com/agentscope-ai/QwenPaw/pull/8204) 已 Under Review，**极可能进入 v2.2.2 正式版**
- **Model Pool 删除入口**（[#8195](https://github.com/agentscope-ai/QwenPaw/issues/8195)）→ 与 PR [#8240](https://github.com/agentscope-ai/QwenPaw/pull/8240) 模型管理重构高度契合，**可能合并处理**
- **多设备消息即时可见**（[#8202](https://github.com/agentscope-ai/QwenPaw/issues/8202)）→ PR [#8203](https://github.com/agentscope-ai/QwenPaw/pull/8203) 已在流首回显用户消息，部分缓解
- **Hub 模式 Docker 文档**（[#8256](https://github.com/agentscope-ai/QwenPaw/issues/8256) / [#8255](https://github.com/agentscope-ai/QwenPaw/issues/8255)）→ 纯文档补齐，低成本高价值
- **Claude Code harness**（#7396）→ 无 PR 跟进，官方尚未表态，路线图不明确
- Settings Center 菜单可见性（[#8254](https://github.com/agentscope-ai/QwenPaw/issues/8254)）→ 当天即有 fix PR [#8257](https://github.com/agentscope-ai/QwenPaw/pull/8257)，响应速度优秀

## 7. 用户反馈摘要

- **痛点集中区**：① 运行中的任务被静默取消且无日志（#8252、#8225）——多 agent 自动化用户对**可审计性**要求强烈；② 移动端/Web 多设备协同时消息“黑洞期”过长（#8202）；③ Windows Desktop 的文件句柄、进程探活类问题反复出现（#8194、#8185、#8210）
- **满意点**：Release Duty 自动化安装验证流程（#8242/#8258）体现发布质量管控成熟；issue 提交质量高（环境表、复现步骤齐全），社区专业度好
- **典型场景**：飞书通道 + 多 agent 舰队编排（#8252）说明已有用户将其用于生产级自动化；沙龙活动带来 Hub 模式新用户（#8256）

## 8. 待处理积压

- **[#7396](https://github.com/agentscope-ai/QwenPaw/issues/7396)**（8 月底提出）：Claude Code harness 路线图咨询，已近 2 个月无官方回复，建议维护者给出明确计划
- **[#7761](https://github.com/agentscope-ai/QwenPaw/pull/7761)**（9 月中旬）：glob 花括号展开修复，PR 挂起一个月，改动小（size/S），建议优先 review
- **[#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565)**（9 月初，XXXL）：插件干净卸载与回滚安全热重载，是 #8225 类取消问题的潜在解，长期在审存在与后续 PR 冲突的风险
- **[#8185](https://github.com/agentscope-ai/QwenPaw/issues/8185) / [#8249](https://github.com/agentscope-ai/QwenPaw/issues/8249)**：均无 fix PR 跟进

---
*数据来源：agentscope-ai/QwenPaw GitHub，统计窗口 2026-10-14 至 2026-10-15*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报

**日期：** 2026-10-15
**项目地址：** [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

## 1. 今日速览

今日 EasyClaw 无 Issue 或 PR 更新，社区互动活动为零，处于低社区活跃度状态。但项目在版本发布侧保持稳定节奏，24 小时内连续发布 **v1.9.29 和 v1.9.30 两个版本**，迭代频率较高（约每版本间隔不足一天）。综合来看，项目呈现出「维护者持续高频交付、社区反馈渠道相对沉寂」的典型单团队驱动型开源项目特征，整体健康度依赖维护者自身的持续投入。

---

## 2. 版本发布

### v1.9.30 — TK Copilot v1.9.30
- **新功能：** 支持配置店铺取件提醒（shop pickup reminders），并在多语言菜单中统一管理客服提醒设置
- **国际化：** 补齐差评联系次数上限（bad-review contact limits）的完整多语言文案
- 链接：[v1.9.30 Release](https://github.com/gaoyangz77/easyclaw/releases)

### v1.9.29 — TK Copilot v1.9.29
- **新功能：**
  - 活动触达（campaign outreach）支持「均匀」与「立即快速」两种模式
  - 活动详情自动刷新，并显示已完成的触达目标
  - 支持设置差评联系次数上限
- **改进：** 触达轮次重试机制优化
- 链接：[v1.9.29 Release](https://github.com/gaoyangz77/easyclaw/releases)

**破坏性变更：** 两个版本的 Release Notes 均未标注破坏性变更或迁移注意事项，预计为平滑升级。
**注意：** macOS 用户如遇 **"'RivonClaw' is damaged"** 提示，请参考 Release 页面中的安装说明（为已知的 macOS Gatekeeper 签名问题，非版本回归）。

---

## 3. 项目进展

- 过去 24 小时无 PR 合并或关闭记录。
- 项目进展主要体现在两条 Release 上：**差评联系管控**（次数上限配置 + 重试改进 + 多语言补全）在两个版本间形成完整的功能闭环；**活动触达引擎**新增模式选择与状态可视化，是本周期最有分量的功能迭代。

---

## 4. 社区热点

- 今日无活跃 Issue 或 PR 讨论，无社区热点可提取。
- 建议：可关注 [Issues 列表](https://github.com/gaoyangz77/easyclaw/issues) 与 [Discussions](https://github.com/gaoyangz77/easyclaw/discussions)（如有）获取最新讨论。

---

## 5. Bug 与稳定性

- 今日无新增 Bug、崩溃或回归报告。
- 唯一与稳定性相关的已知事项为 macOS 上 "'RivonClaw' is damaged" 的安装提示问题，已在 Release 说明中给出处理方案，属环境配置问题而非代码缺陷。

---

## 6. 功能请求与路线图信号

- 今日无新功能请求。
- 从发布节奏可推断的路线图信号：
  1. **差评管理（bad-review management）** 是当前迭代主线，连续两个版本加码（联系上限、重试、多语言），预计下版本继续打磨触达策略；
  2. **多语言本地化** 持续补齐（菜单、文案），表明国际化是明确方向；
  3. **客服/店铺运营自动化**（取件提醒、客服提醒设置）正在扩展，项目可能从单一触达工具向店铺运营 Copilot 平台演进。

---

## 7. 用户反馈摘要

- 今日无 Issue 评论可供分析。
- 间接信号：Release Notes 采用中英双语、新增功能集中于「差评触达限制」和「客服提醒」，反映真实用户场景为 TikTok 电商（TK = TikTok）卖家的日常运营自动化，关注合规性与触达效率（联系上限即典型的平台合规风控需求）。

---

## 8. 待处理积压

- 今日数据中无长期未响应的 Issue 或 PR 记录。
- 提醒：由于社区渠道今日完全静默，建议维护者定期主动巡检 [open issues](https://github.com/gaoyangz77/easyclaw/issues?q=is%3Aissue+is%3Aopen)，避免陈旧反馈积压无人认领；同时可在 Release 中引导用户通过 Issue 反馈，提升社区活跃度数据可观测性。

---

**健康度小结：** 发布节奏 ★★★★★ ｜ 社区活跃度 ★☆☆☆☆ ｜ 稳定性信息不足（无负面信号）。项目当前由维护者高频单驱动，建议加强社区运营以提升可持续性。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*