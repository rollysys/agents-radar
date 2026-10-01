# OpenClaw 生态日报 2026-10-01

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-01 04:49 UTC

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

# OpenClaw 项目日报 — 2026-10-01

---

## 1. 今日速览

- OpenClaw 今日维持高活跃度：过去 24 小时 Issues 更新 500 条（新开/活跃 296，关闭 204），PR 更新 500 条（待合并 357，已合并/关闭 143），未发布新版本（当前版本仍为 2026.9.6）。
- 社区贡献节奏健康，今日由核心维护者 [@steipete](https://github.com/steipete) 领衔提交了大量修复与重构 PR（更新器/回滚、性能、构建系统清理等），多个 PR 已进入 "ready for maintainer look" 状态。
- 最突出的风险信号是 **2026.9.6 稳定性回归集中爆发**：Gateway 内存泄漏、SQLite I/O 压力、crash-loop、消息丢失等 P0 问题在热门 Issues 中占据主导，多条被标记为 `ux-release-blocker`。
- Issue 关闭数（204）与新开数（296）之比约 0.69，考虑到大量 P0/P1 长期未修复问题（多数带 `clawsweeper:no-new-fix-pr` 标签），修复速度落后于问题涌入速度，**稳定性债务在累积**。

---

## 2. 版本发布

今日无新版本发布。当前稳定版仍为 **2026.9.6 (eb377ac)**。⚠️ 注意：多个 P0 报告指出 2026.9.5/9.6 相比 9.4 之前版本引入了多项回归（详见第 5 节），在补丁版本发布前，生产环境升级需谨慎。

---

## 3. 项目进展

今日无合并数据明细，但从活跃 PR 看，工作重心集中在以下方向：

**更新器/回滚可靠性（近期重点战场）**
- [PR #162383](https://github.com/openclaw/openclaw/pull/162383)：将回滚备份绑定到已验证的快照字节，防止同尺寸文件替换绕过校验（🚨 兼容性风险）
- [PR #162245](https://github.com/openclaw/openclaw/pull/162245) (P0)：修复 Windows 更新器传递取整的 NTFS lease identity 导致首次 Doctor 回滚失败
- [PR #162344](https://github.com/openclaw/openclaw/pull/162344) (P1)：修复旧版更新器驱动下候选 Gateway 启动错误被 canary 进度标记掩盖的问题
- [PR #162403](https://github.com/openclaw/openclaw/pull/162403)：消除更新演练期间不必要的数据库级复制

**Agent 编排与消息可靠性**
- [PR #161788](https://github.com/openclaw/openclaw/pull/161788) (P1)：修复子代理 completion 重试在 restart recovery 恢复的会话中持续失败（`SESSION_WORK_START_CHANGED`）
- [PR #162398](https://github.com/openclaw/openclaw/pull/162398)：在长时间限速等待前轮换 auth profile，避免 Agent 因单一凭据被限而阻塞数小时
- [PR #162367](https://github.com/openclaw/openclaw/pull/162367)：修复 turn 结束时进度消息重复发送

**性能与构建卫生**
- [PR #162280](https://github.com/openclaw/openclaw/pull/162280)：`sessions.list` 在失效后有界物化，改善大存储下列表性能
- [PR #162288](https://github.com/openclaw/openclaw/pull/162288)：构建时生成 Kysely 声明，净删除 2,504 行重复代码
- [PR #162251](https://github.com/openclaw/openclaw/pull/162251)：构建时生成原生协议模型，移除 34,328 行提交的 Swift/Kotlin 生成代码
- [PR #162402](https://github.com/openclaw/openclaw/pull/162402)：测试削减批次 d123，移除低价值测试

**客户端功能**
- [PR #162399](https://github.com/openclaw/openclaw/pull/162399)：iOS 支持从会话菜单暂停（snooze）会话
- [PR #162307](https://github.com/openclaw/openclaw/pull/162307)：Android 原生聊天支持显示与发送 emoji reactions
- [PR #161955](https://github.com/openclaw/openclaw/pull/161955)：导入 Claude Code 与 Codex 历史转录（XL 级别，安全敏感）

**整体评估**：今日 PR 活动量高、方向聚焦（更新器可靠性显然是为下一个补丁版本铺路），但在架的 357 个待合并 PR 中大量带 `needs proof` 标签，合并吞吐是瓶颈。

---

## 4. 社区热点

| Issue | 热度 | 核心诉求 |
|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) — Agent SQLite WAL 无限增长至 1.4–2.8 GB，阻塞 Gateway 启动 | 💬 100 | Windows 单 Gateway 用户长期受困，手动 checkpoint 后复发；P0 + release-blocker，带 `needs-maintainer-review`/`needs-info` 标签近一个月无修复 PR |
| [#153257](https://github.com/openclaw/openclaw/issues/153257) — 2026.9.5 将稳定环境变成 8 小时故障恢复会话 | 💬 40 | 升级导致崩溃循环，用户明确表达“后悔升级”，反映 9.5/9.6 发布质量下滑的信任问题 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) — 子代理 completion 静默丢失，无重试/通知/超时重启 | 💬 30 | 自 3 月开放至今近 7 个月，编排可靠性是 Telegram bot 用户的核心痛点 |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) — main 分支 Gateway ready 后事件循环饿死，632-agent 集群 /health 全超时 | 💬 22 | 大规模部署用户的性能瓶颈，与 #148529 启动时长问题叠加 |
| [#157067](https://github.com/openclaw/openclaw/issues/157067)（已关闭）— Windows 隔离 cron 传递不可克隆的 Proxy 环境 | 💬 20 | 好消息：已关闭，配套 [PR #162245 相关链路](https://github.com/openclaw/openclaw/pull/162245)；同类回归 #161654 也已关闭 |

**背后诉求**：社区情绪集中在两点——① 2026.9.x 系列“升级即事故”；② 多个高影响问题（尤其 SQLite/内存/会话状态类）长期停留在 `needs-maintainer-review` 状态，修复响应速度是最大不满来源。

---

## 5. Bug 与稳定性（按严重程度）

### P0 / Release Blocker

1. **[#143524](https://github.com/openclaw/openclaw/issues/143524) SQLite WAL 无限增长**（crash-loop，Windows 9.2/9.3）— ❌ 无 fix PR，100 条评论
2. **[#159662](https://github.com/openclaw/openclaw/issues/159662) prepared-model-catalog.worker.js 内存泄漏 ~4-5 GB/h**，provider 无关，冷启动+双分排查已确认 — ❌ 无 fix PR
3. **[#159596](https://github.com/openclaw/openclaw/issues/159596) 9.6 Gateway 内存锯齿**，每日 ~200 次 critical 内存压力事件 — ❌ 无 fix PR
4. **[#161379](https://github.com/openclaw/openclaw/issues/161379) Gateway 钉死一个 CPU 核心**：模型目录刷新循环 TTL 60s < 每代理刷新耗时 — ❌ 无 fix PR（与 #159662/#159596 疑似同根因，**建议合并排查**）
5. **[#160386](https://github.com/openclaw/openclaw/issues/160386) 9.6 大会话存储 SQLite I/O 压力 + WebUI RPC 超时**（regression）— ❌ 无 fix PR，但 [PR #162280](https://github.com/openclaw/openclaw/pull/162280) 可能部分缓解
6. **[#157325](https://github.com/openclaw/openclaw/issues/157325) 卡死的 agent-DB 资源导致所有代理回复失败直至重启**（9.6）— ❌ 无 fix PR
7. **[#160521](https://github.com/openclaw/openclaw/issues/160521) state DB 读准入 seal → reconcileActive 未处理 rejection → Gateway 崩溃** — ❌ 无 fix PR
8. **[#159612](https://github.com/openclaw/openclaw/issues/159612) 子代理 settlement 无限重试**（"owner changed before settlement"）— ❌ 无 fix PR；相关 [PR #161788](https://github.com/openclaw/openclaw/pull/161788) 处理相近场景
9. **[#158239](https://github.com/openclaw/openclaw/issues/158239) 旧内核 (<5.6) 主机 Gateway 无法启动**（regression/兼容性）— ❌ 无 fix PR
10. **[#158126](https://github.com/openclaw/openclaw/issues/158126) 关机步骤 gateway-server-close ~50% 概率失败** — ❌ 无 fix PR

### P1 重要回归/缺陷

- **[#148707](https://github.com/openclaw/openclaw/issues/148707) / [#144809](https://github.com/openclaw/openclaw/issues/144809)**：9.4 回归——在途 turn 被替换时回复整体丢失（"no active tool authority snapshot"），跨 Ubuntu/macOS 复现 — ❌ 无 fix PR
- **[#159094](https://github.com/openclaw/openclaw/issues/159094)**：9.6 状态生命周期租约冲突（`StateDatabaseCoordinatorContentionError`）— ❌
- **[#154812](https://github.com/openclaw/openclaw/issues/154812)**：V8 堆外 RSS 失控 9.32 GiB → 宿主 OOM — ❌
- **[#97616](https://github.com/openclaw/openclaw/issues/97616)**：hook/工具子进程僵尸累积（6 月至今）— ❌
- **[#154891](https://github.com/openclaw/openclaw/issues/154891)**：失败的配置热重载（已回滚）仍永久瘫痪无关插件 — ❌
- **[#115546](https://github.com/openclaw/openclaw/issues/115546) / [#138599](https://github.com/openclaw/openclaw/issues/138599)**：大 session 自动压缩 100% 失败/死锁 — ❌

### P1 安全相关（需关注）

- **[#108395](https://github.com/openclaw/openclaw/issues/108395)**：模型伪造 "Human: [timestamp]" 用户消息可自我授权执行 live actions — `needs-security-review`，❌ 无 fix PR

**统计**：热门 Issues 中 P0 共 11+ 个仍开放，绝大多数带 `clawsweeper:no-new-fix-pr` 标签。今日关闭的两个 Windows Proxy/DataCloneError 相关 issue（#157067、#161654）是稳定性方向少有的正面进展。

---

## 6. 功能请求与路线图信号

- **会话数据迁移/互操作**：[PR #161955](https://github.com/openclaw/openclaw/pull/161955) 导入 Claude Code / Codex transcripts，属“从竞品/兄弟工具迁入”的战略功能，XL 体量且已带 proof，可能进入下个版本。
- **跨端会话 snooze / emoji reactions**：[#162399](https://github.com/openclaw/openclaw/pull/162399)（iOS）与 [#162307](https://github.com/openclaw/openclaw/pull/162307)（Android）补齐已有 Gateway/Web/Android 能力，端侧功能收敛趋势明显。
- **Workboard 可点击链接**：[#141472](https://github.com/openclaw/openclaw/issues/141472)（已关闭/stale）用户希望卡片笔记支持 URL/markdown 超链接，属低成本 UX 改进，有望以社区 PR 形式复活。
- **模型配置传播**：[#141540](https://github.com/openclaw/openclaw/issues/141540)（已关闭/stale）：`agents.defaults.model` 变更应传播到未固定模型的历史会话——真实成本痛点（旧模型持续烧钱），值得关注是否重新纳入。
- **认证韧性**：[#115642](https://github.com/openclaw/openclaw/issues/115642) 请求基于探测的 billing 冷却恢复，与今日 [PR #162398](https://github.com/openclaw/openclaw/pull/162398)（auth profile 轮换）方向一致，**该 PR 的合入可视为对此诉求的部分回应**。

---

## 7. 用户反馈摘要

**痛点（高频出现）**
- **升级恐惧**：多名用户（#153257、#157160 等）报告 Watchtower/OCM 自动升级后进入 crash-loop 或 8 小时恢复会话，“升级前稳定、升级后灾难”是被反复引用的叙事。
- **静默失败**：子代理结果丢失（#44925）、回复丢失（#148707）、记忆 narrative 被跳过（PR #153824）——用户最不能接受的是**无通知、无重试、无自愈**。
- **资源失控**：WAL、内存表、RSS、僵尸进程四类“无限增长”问题横跨 3 月至今的版本，运维负担重（“每晚要手动 checkpoint/重启”）。
- **大负载不可用**：632-agent 集群、11.5k 条转录的单会话场景均触发故障，产品在规模化场景下未经过足够验证。

**正面反馈**
- Issue 报告质量普遍极高（版本、commit、复现、日志齐全），说明核心用户群专业度高、参与意愿强。
- `clawsweeper` 自动分诊标签、agent 代写 PR（#161788 由 hive-admin/executor 生成）显示项目在用自身能力开发自身，社区工程化程度高。
- iOS/Android/Web 功能快速对齐，多端体验在收敛。

---

## 8. 待处理积压（维护者关注清单）

| Issue | 开放时长 | 标签状态 | 风险 |
|---|---|---|---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) 子代理静默丢失 | ~6.5 个月 | needs-product-decision | 编排核心可靠性 |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) 计费恢复后冷却仍封锁数小时 | ~5 个月 | stale + P0 + release-blocker | 用户付费后仍不可用，直接流失风险 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) 僵尸进程累积 | ~3 个月 | no-new-fix-pr | 长驻服务退化 |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) memory 表无保留策略将填满磁盘 | ~2 个月 | needs-product-decision | 可预见的磁盘耗尽事故 |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) billing 冷却 TTL 过长 | ~2 个月 | needs-product-decision | 同 #70903 |
| [#143524](https://github.com/openclaw/openclaw/issues/143524) WAL 无限增长 | ~3 周，100 评论 | needs-maintainer-review + needs-info | 最高热度 P0，社区情绪焦点 |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) 多代理显式所有权下日志刷屏 | ~6 周 | needs-product-decision | 显式所有权是官方推荐配置，配置自身触发缺陷 |

**建议优先动作**：① 统一排查 prepared-model-catalog worker 相关的内存/CPU 问题（#159662/#159596/#161379 疑似同根因，合并处理性价比最高）；② 针对 9.5/9.6 回归集群发布 9.7 补丁版本，修复 in-flight turn 回复丢失链路；③ 清理 5 个以上开放超过 2 个月的 P0。

---
*数据来源：GitHub API（过去 24 小时 Issues/PR 更新各 500 条采样）。链接格式为文本引用，可在 github.com/openclaw/openclaw 对应编号查看。*

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告

**数据日期：2026-10-01**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态呈现“**一超多强、长尾沉寂**”格局：OpenClaw 以日均 500+ Issue/500+ PR 更新量占据绝对中心地位，但正经历 9.x 系列稳定性危机；NanoBot、Zeroclaw、Hermes Agent、CoPaw 构成活跃第二梯队，分别在架构现代化、安全隔离、桌面体验、企业 IM 集成上快速推进。生态已从“能用对话”进入“**可靠编排、多渠道接入、安全边界**”的深水区——SQLite 状态存储、子代理编排可靠性、更新/回滚机制成为多个项目的共同基建战场。渠道侧（Telegram/QQ/飞书/WhatsApp/钉钉）和 Provider 侧（本地模型、OpenAI 兼容网关、Copilot）的接入摩擦是用户最集中的痛点来源。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 活跃层级 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（开296/关204） | 500（待357/合143） | ❌ 无 | 🔥 中心级 | ⚠️ 修复速度(0.69)落后于问题涌入，11+ P0 开放，稳定性债务累积 |
| **CoPaw** | 20（开17/关3） | 38（待31/合7） | ✅ v2.2.2-beta.4 | 🔥 高 | 修复飞轮健康（新Bug当天出PR），但PR积压严重（最长6个月+）、安全响应偏慢 |
| **Zeroclaw** | 50（开45/关5） | 50（待47/合3） | ❌ 无 | 🔥 高 | v0.9.0 冲刺期，review 带宽成瓶颈，S0 安全问题均有 fix PR 在途 |
| **Hermes Agent** | 50（开22/关28） | 50（待46/合4） | ❌ 无 | 🔥 高 | Issue 净消化为正，桌面/语音深度收敛，MCP 兼容性是系统性短板 |
| **NanoBot** | 3（全关闭，0新开） | 25（待11/合14） | ❌ 无 | 🔶 中高 | 闭环效率最高（Issue 当日清零），核心团队冲刺迭代 |
| **NanoClaw** | 1 | 14（待12/合2） | ❌ 无 | 🔶 中 | 更新链路正确性修复，功能面进展有限 |
| **LobsterAI** | 10（全开） | 11（待2/合9） | ❌ 无 | 🔶 中 | 安全修复+积压清理阶段，3月遗留bug长期无响应 |
| **PicoClaw** | 0 | 5（待2/合3） | ❌ 无 | 🔹 低 | 积极清理积压，但多 Agent 方向不确定性（#423 关闭） |
| **EasyClaw** | 0 | 0 | ✅ v1.9.26 | 🔹 低 | 版本持续交付但社区静默，反馈渠道未建立 |
| **IronClaw** | 0 | 1（CI bot） | ❌ 无 | 🔹 低 | 静默维护期，CI PR 挂起33天 |
| **NullClaw** | 0 | 1（待审） | ❌ 无 | 🔹 低 | 平稳维护，provider 生态模式化扩展 |
| **TinyClaw / Moltis / ZeptoClaw** | 0 | 0 | ❌ | 💤 沉寂 | 过去24小时无活动 |

**整体观察**：约 1/3 项目处于沉寂或准沉寂状态；活跃项目的共同瓶颈几乎都是 **PR review 带宽**（OpenClaw 357、Zeroclaw 47、Hermes 46、CoPaw 31 待合并）。

---

## 3. OpenClaw 在生态中的定位

**规模对比**：OpenClaw 的单日 Issue/PR 更新量（各 500 条采样上限）是第二梯队项目（50 条级）的 **10 倍量级**，是 PicoClaw/NullClaw 类项目的 100 倍量级。其 Issue 编号已至 16 万级（NanoBot 为 5 千级），社区规模无争议地居首。

**优势**：
- **多端收敛最快**：iOS/Android/Web/Gateway 能力同步对齐（今日 snooze、emoji reactions 跨端落地），生态内仅 Hermes Agent 在桌面端可部分对标
- **工程化程度最高**：`clawsweeper` 自动分诊、agent 代写 PR（#161788），“用自身能力开发自身”的自我催化模式是独有护城河
- **战略功能前瞻**：导入 Claude Code / Codex transcripts（#161955）直接瞄准竞品用户迁移，属生态级攻势

**技术路线差异**：
- 相比 NanoBot（SQLite 状态集中化重构中）和 Zeroclaw（v0.9.0 网关分离 + OIDC），OpenClaw 的 Gateway 单体架构正暴露规模瓶颈（632-agent 集群不可用、WAL 无限增长）——**架构上反而落后于追赶者**
- 相比 Zeroclaw 系统性的身份/作用域安全建设，OpenClaw 的安全面（#108395 消息伪造自我授权）响应迟缓

**核心风险**：9.5/9.6 “升级即事故”的叙事正在侵蚀社区信任（#153257 “后悔升级”），且关闭/新开比 0.69 意味着债务仍在扩大。**规模第一 ≠ 质量第一**，这是当前生态对 OpenClaw 竞争者的最大窗口期。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **SQLite/状态存储可靠性** | OpenClaw、NanoBot、CoPaw | OpenClaw WAL 无限增长至 GB 级（#143524）；NanoBot 以 SQLite 事务替代 JSONL 权威存储（#5943）；CoPaw 嵌入索引批量失败问题（#8040） |
| **子代理编排可靠性** | OpenClaw、NanoBot、CoPaw、Hermes | OpenClaw 子代理静默丢失 6.5 个月未解（#44925）、settlement 无限重试；NanoBot 会话级任务消息传递与定向取消（#5985）；CoPaw 后台任务结果丢失/静默完成（#8059） |
| **更新/回滚机制可靠性** | OpenClaw、NanoClaw、Hermes | OpenClaw 回滚备份绑定快照字节（#162383）等多个 PR；NanoClaw 更新误报 complete 导致旧 host 残留（#3961）；Hermes 半套安装无恢复路径（#125437，“每周15个Discord帖”） |
| **多渠道 IM 接入（Telegram/QQ/飞书/WhatsApp/钉钉）** | Zeroclaw、NanoClaw、PicoClaw、CoPaw、LobsterAI、NanoBot | NanoClaw Telegram 三连修；PicoClaw QQ 富媒体；Zeroclaw WhatsApp caption 丢失；CoPaw 飞书/企业微信渠道密集问题；NanoBot Feishu compaction 通知泄漏 |
| **Provider 生态与本地/自建模型接入** | NanoClaw、NullClaw、Zeroclaw、CoPaw、LobsterAI | NanoClaw Copilot provider + keyless 本地模型 + 端点精确声明；NullClaw 聚合网关接入（Eden AI / Cheaper Inference）；Zeroclaw llama.cpp router（icebox）；CoPaw 自定义 OpenAI 兼容网关长尾兼容 |
| **权限/安全边界** | Zeroclaw、Hermes、PicoClaw、CoPaw、LobsterAI、NanoBot | Zeroclaw 委托内存 principal scope（S0）；Hermes MCP trust gate 失效；CoPaw Windows 沙箱逃逸；LobsterAI NIM 策略 fail-open；NanoBot 空工具注册表被绕过 |
| **上下文压缩（compaction）体验** | NanoBot、Hermes、CoPaw | NanoBot token 阈值门控（#5885）；Hermes 压缩截止后停止 fallback（#129991）；CoPaw 缓存 token 计量（#8057） |
| **成本可观测性** | Zeroclaw、CoPaw、LobsterAI、Hermes | Zeroclaw OpenRouter 费用恒为 $0（#11204）；LobsterAI Token 用量管理（#948）；Hermes 按任务聚合成本（#107744） |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Zeroclaw | NanoBot | Hermes Agent | CoPaw | 其他 |
|---|---|---|---|---|---|---|
| **功能侧重** | 全能型多端个人助理，大规模 Agent 编排 | 安全隔离的多租户网关，身份/权限体系 | 架构现代化（SQLite、子智能体），TUI/WebUI 打磨 | 桌面优先 + 语音对话 + 舰队自动化 | 企业 IM 集成 + 多 Agent + 记忆系统 | PicoClaw（轻量多渠道）、EasyClaw（TikTok 联盟垂直场景）、NullClaw（Provider 聚合接入） |
| **目标用户** | 全谱系，含 632-agent 集群的重度运维用户 | 多租户共享部署、企业安全敏感用户 | 开发者/极客（TUI 重度） | 桌面个人用户 + kanban 自动化舰队 | 中文企业 IM 场景（飞书/钉钉/企微/QQ） | — |
| **技术架构** | Gateway 单体 + 多客户端，架构债务显现 | Rust/Tokio + 网关分离（v0.9.0 RPC 化）+ WASM 插件 | Python，事件循环与存储 I/O 分离重构中 | Desktop + gateway 双轨（群聊迁移 gateway 在途） | Console/桌面混合，嵌入/记忆子系统（ReMe） | — |

**关键判断**：Zeroclaw 是唯一在**架构层面**正面解决多租户安全的项目（per-sender RBAC、principal scope、OIDC）；CoPaw 是唯一深度绑定**中文企业 IM 生态**的项目；Hermes 占据**语音/桌面体验**独特生态位；EasyClaw 的垂直化（TikTok 联盟营销）代表了差异化生存的另一条路径。

---

## 6. 社区热度与成熟度分层

**第一梯队 — 规模领先但质量承压**：
- **OpenClaw**：社区最大、贡献最专业（Issue 报告质量极高），但 9.x 回归危机 + 5 个以上 2 个月+ 的开放 P0，处于“**规模扩张与质量债务赛跑**”阶段

**第二梯队 — 快速迭代期**：
- **Zeroclaw**：v0.9.0 冲刺，外部安全团队开始审计（口碑信号），决策队列积压是主要摩擦
- **NanoBot**：核心团队冲刺（SQLite 重构、subagent 编排），Issue 闭环效率生态最优
- **CoPaw**：发布节奏最稳（v2.2.2-beta.4），修复飞轮最快，但 PR 积压最久（6个月+）

**第二梯队偏成熟 — 质量巩固期**：
- **Hermes Agent**：Issue 关闭>新开，会话状态/语音体验系统性收敛，“修根因而非打补丁”，是唯一明确处于**质量巩固**而非功能扩张的活跃项目

**第三梯队 — 维持/观望期**：NanoClaw（更新链路治理）、LobsterAI（积压清理 + 3月旧账未清）、PicoClaw（方向重估）

**沉寂/长尾**：NullClaw、EasyClaw、IronClaw、TinyClaw、Moltis、ZeptoClaw — 其中 EasyClaw 和 IronClaw 是“代码活跃但社区静默”型，需警惕反馈渠道断裂。

---

## 7. 值得关注的趋势信号

1. **“静默失败”是行业头号信任杀手**：OpenClaw 子代理丢失（6.5个月）、回复丢失、CoPaw 任务结果 404、NanoClaw 更新误报 complete——用户明确表态“无通知、无重试、无自愈”不可接受。**对开发者的启示：可观测性和自愈应作为一等公民设计，而非事后补丁。**

2. **状态存储向 SQLite 集中化收敛**：NanoBot 的重构、OpenClaw 的 WAL 危机、CoPaw 的嵌入索引问题共同指向——JSONL/文件式会话存储在规模化场景已到极限，**事务化状态管理 + 有界资源策略（保留策略、checkpoint）将是下一个版本的基线能力**。

3. **更新/回滚成为新的核心战场**：四个项目同时投入（OpenClaw 连发多个更新器 PR、NanoClaw、Hermes 的 #125437 痛点聚类）。自动更新（Watchtower/OCM）普及后，**“更新失败的可恢复性”直接决定用户留存**。

4. **安全审计外部化、专业化**：Zeroclaw（DefuzeX）、CoPaw（CodeQL、沙箱逃逸 PoC 传播）、LobsterAI（fail-open 报告）均出现第三方安全贡献。提示注入类信道（Hermes 图片 URL 外传、OpenClaw 消息伪造自我授权）是新攻击面，**安全披露流程的建立速度将成竞争力**。

5. **IM 渠道 = 真实落地主战场**：Telegram（NanoClaw/Zeroclaw）、QQ（PicoClaw/CoPaw）、飞书/钉钉/企微（CoPaw/LobsterAI/NanoBot）、WhatsApp（Zeroclaw）问题密度与用户基数正相关。**通知路由精细化、内部机制消息不泄漏到用户层（NanoBot #5903）是普遍未解的体验课题。**

6. **Provider 去中心化接入需求强劲**：Copilot、keyless 本地模型、OpenAI 兼容聚合网关、llama.cpp——用户不愿被单一厂商锁定。**凭证管理（credential gateway 替代环境变量，NanoClaw #3976）与接入摩擦消除是获客杠杆。**

7. **“用 Agent 开发 Agent”的自举模式确立**：OpenClaw 的 clawsweeper 分诊、agent 代写 PR，CoPaw 的 AI 辅助 Issue 提交——项目自身的工程流程正成为产品能力的最佳 demo，也是社区信任的建设方式。

**综合结论**：生态正处于从“功能竞赛”转向“**可靠性、安全性与运维成熟度竞赛**”的拐点。OpenClaw 的规模优势显著但其稳定性危机为追赶者（尤其 Zeroclaw 的安全架构路线、Hermes 的质量巩固路线）打开了窗口；对 AI 智能体开发者而言，最值得投入的差异化杠杆是：状态存储可靠性、静默失败治理、更新可恢复性、以及中文/多渠道 IM 生态的深度适配。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 · 2026-10-01

## 1. 今日速览

NanoBot 今日保持高活跃开发节奏：过去 24 小时内 PR 活动达 25 条（待合并 11，已合并/关闭 14），远超 Issue 活动（3 条，全部为已关闭老 Issue 的收尾，无新开 Issue）。开发重心集中在 **会话架构重构（SQLite 状态集中化）、子智能体（subagent）能力增强、WebUI/TUI 体验打磨** 三条主线。值得注意的是，主力贡献者 @chengyongru 今日贡献了多个高质量修复与重构 PR，显示核心团队处于冲刺迭代期。Issue 清零（3 条全部关闭）表明 bug 响应闭环效率高，项目健康度良好。

## 2. 版本发布

今日无新版本发布。最新 Release 为空，建议关注大量已合并 PR（尤其 #5938 providers 回归修复、#5950 TUI 会话恢复）可能随下一版本打包发布。

## 3. 项目进展

### 已合并/关闭的重要 PR（14 条中的亮点）

**架构与核心**
- [#5993](https://github.com/HKUDS/nanobot/pull/5993) `refactor(agent): scope tool resources to session cancellation` — 用户停止会话时，向会话拥有的运行时资源广播取消信号，覆盖活动工具、分离的子智能体、shell/CLI 进程树和待处理回复计时器，同时不影响其他会话。资源生命周期管理的重要改进。
- [#5907](https://github.com/HKUDS/nanobot/pull/5907) `test: consolidate redundant coverage` — 合并 34 个文件中的重复测试，净删除 703 行，参数化 46 个 Python 测试组且完整保留 171 个原始断言。纯质量工程，不触碰生产代码。
- [#5996](https://github.com/HKUDS/nanobot/pull/5996) `docs: streamline project instructions` — 重构根 AGENTS.md，明确根因分析、必要重构与可达代码测试的工程约束。

**回归与稳定性修复**
- [#5938](https://github.com/HKUDS/nanobot/pull/5938) `fix(providers): preserve optional tool parameters in Responses requests`（**p1**）— 修复 Responses 工具转换丢失 `strict` 设置的回归，该问题可能导致可选 MCP 过滤器被强制必填（如 Linear 的 `query`/`customView` 被迫同时传入）。重要的 provider 层回归修复。
- [#5950](https://github.com/HKUDS/nanobot/pull/5950) `fix(tui): restore saved session history` — 修复 #5823 引入的回归：打开保存的会话显示空白转录。

**交互体验**
- [#5966](https://github.com/HKUDS/nanobot/pull/5966) `fix(tui): keep overflow picker choices reachable` — 溢出菜单键盘换行、滚动后鼠标选择、过滤替换等完整覆盖。
- [#5958](https://github.com/HKUDS/nanobot/pull/5958) `fix(tui): keep unknown terminal themes readable` — 终端不响应 OSC 10/11 时改用默认前景/背景色，避免浅色终端下文字不可见。
- [#5981](https://github.com/HKUDS/nanobot/pull/5981) `fix(tui): accept goal requests during active turns` — `/goal <task>` 支持在活动回合中发送目标请求。
- [#5989](https://github.com/HKUDS/nanobot/pull/5989) `fix(webui): stop repairing completed Markdown` — 修复合成尾部 `_`（如 `_legal_history_tail()` 触发的强调闭合下划线）残留在回复末尾。

**今日整体进展评估**：14 条合并 PR 中涵盖 1 个 p1 回归修复、1 个核心资源管理重构、4 个终端体验修复、1 个文档工程规范——在稳定性与体验两条线上均有实质推进。

## 4. 社区热点

今日无新开 Issue，讨论集中在近期活跃议题的收尾：

- **Feishu 通道 compaction 通知问题（同类 #5784）**
  - [#5903](https://github.com/HKUDS/nanobot/issues/5903)（5 评论，已关闭）：空闲 compaction 后，内部会话检查点标记消息被当作普通聊天消息发送给用户——用户诉求是**内部机制不应泄漏到用户可见层**。
  - [#5956](https://github.com/HKUDS/nanobot/issues/5956)（3 评论，已关闭）：`NOTIFICATION_AUDIENCES` 将 `ContextCompactionEvent` 硬映射到源频道，导致 "Compressing…" 和 "Context compacted." 两条通知刷屏；因 Feishu 无 in-place edit 能力，用户希望通知可关闭。**核心诉求：通知路由精细化 + 可配置静音。**
- **TUI 调试输入问题**
  - [#5987](https://github.com/HKUDS/nanobot/issues/5987)（4 评论，已关闭）：debug 模式下纯数字输入无法识别而字母正常——开发者调试体验的边角 bug。

三条 Issue 均在同日或次日闭环关闭，响应速度值得肯定。

## 5. Bug 与稳定性（按严重程度排列）

| 严重度 | 问题 | 状态/修复 PR |
|---|---|---|
| **P1** | Responses 请求丢失可选工具参数（`strict` 处理），可能强制不兼容参数 | 已修复 → [PR #5938](https://github.com/HKUDS/nanobot/pull/5938) ✅ 已合并 |
| **P2** | 恢复 runner 迭代时残留失败状态，成功恢复被报为失败并可能吞掉最终 WebSocket 回复 | [PR #5995](https://github.com/HKUDS/nanobot/pull/5995) 🔄 待合并 |
| **P2** | 显式空工具注册表被绕过——禁用所有工具后 `write_file` 仍被调用（**安全相关**） | [PR #5994](https://github.com/HKUDS/nanobot/pull/5994) 🔄 待合并 |
| **P2** | Linear 重新授权后过期成员权限更新可能重新启用已拒绝成员（**安全相关**） | [PR #5997](https://github.com/HKUDS/nanobot/pull/5997) 🔄 待合并 |
| 回归 | TUI 保存会话空白（#5823 后遗症） | [PR #5950](https://github.com/HKUDS/nanobot/pull/5950) ✅ 已合并 |
| 回归 | WebUI 回复末尾残留合成 `_`（NAN-205） | [PR #5989](https://github.com/HKUDS/nanobot/pull/5989) ✅ 已合并 |

**要点**：两个待合并的安全相关 PR（#5994、#5997）建议优先评审合并。

## 6. 功能请求与路线图信号

从在途 PR 可窥见下一阶段方向：

- **状态存储现代化**：[#5943](https://github.com/HKUDS/nanobot/pull/5943)（p1）以 SQLite 事务替代 JSONL 作为权威存储，单 worker 处理运行时状态，存储 I/O 移出事件循环——这是基础架构级演进，落地后将支撑后续所有会话功能。
- **空闲 compaction 精细化**：[#5885](https://github.com/HKUDS/nanobot/pull/5885)（p1）引入 token 阈值门控，短会话不再被 LLM 摘要替换，兼顾 memory 管线与恢复质量——直接回应 Issue #5903/#5956 反映的 compaction 体验问题。
- **子智能体编排**：[#5985](https://github.com/HKUDS/nanobot/pull/5985) 在 #5976 基础上增加会话级任务消息传递与定向取消（`spawn` 返回句柄、`my` 查询结果），子智能体能力日趋成熟。
- **远程实例连接**：[#5941](https://github.com/HKUDS/nanobot/pull/5941)（NAN-157）本地 WebUI 直连服务器上已运行的 nanobot 实例，降低部署门槛。
- **网络能力补全**：[#5992](https://github.com/HKUDS/nanobot/pull/5992)（NAN-212）所有 provider 后端统一支持 scoped 代理——对国内/企业用户的强需求信号。
- **长任务行为约束**：[#5257](https://github.com/HKUDS/nanobot/pull/5257) 限制 sustained-goal 空闲时的无限“继续”循环；[#5166](https://github.com/HKUDS/nanobot/pull/5166) 修复 ContextVar 权限在作用域退出后失效——智能体自主性边界的持续打磨。

**判断**：#5885 + #5903/#5956 相关修复构成 compaction 体验主题，极可能一起进入下一版本；#5943 SQLite 重构体量大（含 conflict 标签），可能需更长时间孵化。

## 7. 用户反馈摘要

- **Feishu 用户（小狮子等企业场景）**：对内部机制消息（checkpoint 标记、compaction 进度）泄漏到聊天界面感到困扰；因 Feishu 缺乏 in-place 编辑能力，重复通知尤其刺眼。诉求是通知分级、可静音、可折叠。
- **会话恢复场景**：用户重视空闲后返回会话的上下文完整性——短会话被摘要替换后“恢复质量下降”，说明 ad-hoc 问答场景是高频用法（推动 #5885）。
- **TUI/调试用户**：开发者群体在使用 debug 模式和保存会话恢复时遇到边角 bug（#5987、#5950），反馈中附带完整复现配置，质量较高。
- **远程部署用户**：希望本地 WebUI 直接发现并连接服务器实例，而非手动查找 launcher 脚本（NAN-157）——反映有一定规模的远程/服务器部署群体。

## 8. 待处理积压

| PR | 开启时间 | 积压时长 | 说明 |
|---|---|---|---|
| [#5166](https://github.com/HKUDS/nanobot/pull/5166) | 2026-07-29 | **~2 个月** | 权限作用域修复，含 conflict 标签，最久待审 |
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) | 2026-08-05 | **~2 个月** | sustained-goal 循环约束（p2），含 conflict 标签 |
| [#5885](https://github.com/HKUDS/nanobot/pull/5885) | 2026-09-23 | ~1 周 | p1 功能 PR，今日仍有更新，活跃中 |
| [#5943](https://github.com/HKUDS/nanobot/pull/5943) | 2026-09-27 | ~4 天 | p1 SQLite 重构，含 conflict 标签，今日活跃 |

**提醒**：#5166 与 #5257 均带 `conflict` 标签且积压近两月，长期不合并将放大冲突成本，建议维护者优先排期或明确放弃决策。多个核心 PR 带 conflict 标签也提示主分支近期变动频繁，合并顺序需要协调。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 · 2026-10-01

## 1. 今日速览

Zeroclaw 今日保持高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 45，关闭 5），PR 更新 50 条（待合并 47，已合并/关闭 3），无新版本发布。项目主线明显聚焦于 **v0.9.0 网关分离（gateway split）与身份/访问控制（identity-access）安全加固**，多个 XL 级 PR 堆叠推进。社区贡献持续活跃，@IftekharUddin、@JordanTheJet、@Audacity88 三位核心贡献者产出密集。安全类 S0 问题（memory 作用域、知识图谱归属）仍是最大风险点，但均有对应 fix PR 在途。整体健康度良好，但 PR 积压（47 个待合并）显示 review 带宽可能成为瓶颈。

## 2. 版本发布

今日无新版本发布。当前工作重心为 **v0.8.6（Phase 2 runtime）** 与 **v0.9.0（Phase 3 gateway 分离）**，详见 [Tracker #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)。

## 3. 项目进展

今日仅 3 个 PR 合并/关闭（数据中合并详情有限），但大量高价值 PR 处于待合并状态，整体推进主要体现在以下在途工作：

- **RPC 核心对齐（P6）**：[#11382 feat(rpc): core parity for workspace, catalog, canvas, pairing, channels and system methods](https://github.com/zeroclaw-labs/zeroclaw/pull/11182)——核心开始通过 RPC 提供 dashboard 原走 HTTP 的能力，是 gateway 拆分为 RPC 客户端（#11001）的关键前置。
- **网关拆分推进**：[#11351 feat(gateway): serve the ported dashboard routes from zeroclaw-gw](https://github.com/zeroclaw-labs/zeroclaw/pull/11351)（GW 系列堆叠 PR）与 [#11346 稳定 pipe name 解析 daemon endpoint](https://github.com/zeroclaw-labs/zeroclaw/pull/11346)，v0.9.0 网关分离架构加速落地。
- **S0 安全修复**：[#11225 fix(memory): preserve owner in delegation](https://github.com/zeroclaw-labs/zeroclaw/pull/11225)（对应 Issue #11198 委托内存丢失 principal scope）——最高优先级安全修复已提交。
- **插件系统强化**：一组堆叠 PR——[#11232 修复 payload 从 package root 打开](https://github.com/zeroclaw-labs/zeroclaw/pull/11232)、[#11236 通过 plugin remove 恢复不完整安装](https://github.com/zeroclaw-labs/zeroclaw/pull/11236)、[#11261 分级准入替换包](https://github.com/zeroclaw-labs/zeroclaw/pull/11261)、[#11262 CLI plugin update](https://github.com/zeroclaw-labs/zeroclaw/pull/11262)，外加 [#11347 发布制品携带 WASM plugin host](https://github.com/zeroclaw-labs/zeroclaw/pull/11347)。
- **CLI/配置一致性**：[#11313 fix(cli): 将 config set/patch 的授权编辑发布到运行中的 daemon](https://github.com/zeroclaw-labs/zeroclaw/pull/11313)（对应 Issue #10876 的遗留部分）。
- **测试稳定性**：[#11354 file_read 测试独立 TempDir](https://github.com/zeroclaw-labs/zeroclaw/pull/11354)、[#11352 RPC 测试私有配置写锁](https://github.com/zeroclaw-labs/zeroclaw/pull/11352)。

整体判断：v0.9.0 主线（gateway split + OIDC/身份体系）已完成大部分代码工作，处于集成与 review 阶段。

## 4. 社区热点

- **[#8692 Maintainer decision queue tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)**（15 评论）——RFC 与设计决策队列，反映社区对决策流程透明度的关注，多个 PR（如 #11344、#11346）标注“pending maintainer decision J1/J7”，决策吞吐成为节奏瓶颈。
- **[#5982 Per-sender RBAC 多租户特性](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)**（11 评论，今日更新）——多租户场景下的按发送者权限控制，范围已收窄为基于现有 agent/risk-profile 模型实现，草案 PR #11068 在途，诉求来自真实的多租户部署用户。
- **[#10366 RFC: PR review 证据与快速合并通道](https://github.com/zeroclaw-labs/zeroclaw/issues/10366)**（10 评论，已关闭）——已接受的 RFC 落地，与 47 个待合并 PR 的 review 压力直接相关。
- **[#10230 Quickstart 导致 Tokio worker 栈溢出](https://github.com/zeroclaw-labs/zeroclaw/issues/10230)** 与 **[#10165 delegate 绕过 block_high_risk_commands](https://github.com/zeroclaw-labs/zeroclaw/issues/10165)**（各 7 评论，均已关闭）——近期修复闭环的两个高严重度问题。

## 5. Bug 与稳定性（按严重程度）

**S0 — 数据丢失/安全风险（OPEN）**
- [#11198 Delegated memory tools 丢失 principal scope](https://github.com/zeroclaw-labs/zeroclaw/issues/11198)（p0）→ **已有 fix PR #11225**
- [#9647 知识图谱无 per-agent 归属](https://github.com/zeroclaw-labs/zeroclaw/issues/9647)（p1，in-progress）
- [#9646 session/channel 工具缺少归属校验](https://github.com/zeroclaw-labs/zeroclaw/issues/9646)（p1，in-progress）

**S1 — 工作流阻塞**
- [#11126 队列会话操作保留已撤销的管理员旁路](https://github.com/zeroclaw-labs/zeroclaw/issues/11126)（p1，风险高）→ 部分实现 PR #10412，未完全解决
- [#11237 config editor 无法写 declarative cron schedule](https://github.com/zeroclaw-labs/zeroclaw/issues/11237)（p1，in-progress）
- [#11294 CI flaky 测试竞态](https://github.com/zeroclaw-labs/zeroclaw/issues/11294)（p2）→ 相关稳定性 PR #11352 在途
- [#10876 gateway 授权写入不生效直至 reload](https://github.com/zeroclaw-labs/zeroclaw/issues/10876)（部分交付）→ **今日 fix PR #11313 补齐 CLI 部分**

**S2 — 功能降级**
- [#11204 OpenRouter 费用恒为 $0、token 全归 "free"](https://github.com/zeroclaw-labs/zeroclaw/issues/11204)（p1）→ 相关 PR #11231（余额展示）在途，但 cost ingestion 修复待确认
- [#11215 OpenCode Go 工具调用失败（不支持的 name 字段）](https://github.com/zeroclaw-labs/zeroclaw/issues/11215)（in-progress）
- [#11233 验证结果未实际运行检查即写入报告](https://github.com/zeroclaw-labs/zeroclaw/issues/11233)（由外部安全团队 DefuzeX 报告，值得关注）
- [#11257 WhatsApp Web 丢弃入站媒体 caption](https://github.com/zeroclaw-labs/zeroclaw/issues/11257)（p1）→ **已有 fix PR #11259**
- [#11256 initial_prompt 未发送给转录 provider](https://github.com/zeroclaw-labs/zeroclaw/issues/11256)（in-progress）

**S3 — 次要**
- [#10781 多个 context/history 配置键为 inert](https://github.com/zeroclaw-labs/zeroclaw/issues/10781) → **fix PR #11297（keep_tool_context_turns）今日活跃**

## 6. 功能请求与路线图信号

- **本地密码认证 Provider**（[#8076](https://github.com/zeroclaw-labs/zeroclaw/issues/8076)）：首个验证核心切片已提交（[#11264](https://github.com/zeroclaw-labs/zeroclaw/pull/11264)），IdP-less 登录路线明确，**大概率进入 v0.9.0/后续版本**。
- **WhatsApp 媒体持久化**（[#11255](https://github.com/zeroclaw-labs/zeroclaw/issues/11255) → PR #11259）：对齐 Telegram 行为，进度最快。
- **llama.cpp model router**（[#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539)，icebox）：本地多模型切换需求真实，但状态为 icebox，短期无 PR 支撑。
- **知识库 RAG RFC**（[#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235)）：新子系统级提案，needs-maintainer-review，属于能力边界扩展，值得路线图关注。
- **OpenRouter 余额/成本可见性**（PR #11231）：与 #11204 痛点呼应，社区需求明确。
- **v0.9.0 信号**：多个 PR/Issue 带 `release:v0.9.0` 标签（#11182、#11225、#11344、#7432、#8289 等），v0.9.0 主题锁定为 gateway 分离 + OIDC/身份安全收尾。

## 7. 用户反馈摘要

- **多租户与权限隔离是最强诉求**：#5982、#9646、#9647、#11198 集中反映用户在共享部署中担心 agent 间越权访问，希望有细粒度、按 principal 的作用域。
- **配置“看似生效实则无效”引发信任损耗**：#10781、#9394、#10876、#11256 均为“文档说有、实际不读”类问题，用户明确表达“请实现或删除文档”的态度。
- **WhatsApp 用户是渠道侧最活跃群体**：图片不下载（#10975 已修复）、caption 丢失、媒体持久化连续出现，说明 WhatsApp Web 渠道用户基数可观。
- **成本可观测性缺失**：#11204 用户跑了 ~210 万 token 却看不到一分钱花费，本地/低价模型用户的成本追踪需求真实。
- **本地小模型用户认可产品价值**（#7539：“very useful for working on smaller tasks”），但希望模型切换更顺畅。
- **外部安全审计开始关注本项目**（#11233、#9394 均为第三方审计发现），既是口碑信号也是质量压力。

## 8. 待处理积压

- **[#8692 Maintainer decision queue](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)**：决策队列积压直接影响 #11344、#11346 等待决 PR 的合并，**建议维护者优先清理**。
- **#10412（#11126 的部分实现）**：明确提示“仅合并该 PR 不能视为解决”，需跟进其余 stale-grant 路径。
- **#9647 / #9646**（8 月初开、S0 安全、in-progress 近两月）：归属作用域问题长期未闭环，随 v0.9.0 身份体系落地应优先收尾。
- **#9394 pairing_dashboard 完全无效 + pairing code 永不过期**：7 月末开出的安全审计问题，今日才有 fix PR #11344 出现且尚待决策，周期偏长。
- **#8907 zerocode TUI 插件目录面板**（7 月开、status: blocked）：前置已合并，表面工作仍悬置，需明确排期或降级。
- **47 个待合并 PR**：其中多个 XL 级堆叠 PR（插件系列 #11232→#11236→#11261→#11262；网关系列 #11186→#11346→#11351），review 串行依赖长，建议维护者按 RFC #10366 的快速通道规则加速吞吐。

---
*数据来源：GitHub API（Issues/PR 过去 24 小时更新）。链接均指向 zeroclaw-labs/zeroclaw。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-10-01

## 1. 今日速览

Hermes Agent 今日保持高活跃度：24 小时内 Issues 更新 50 条（新开/活跃 22，关闭 28），PR 更新 50 条（待合并 46，已合并/关闭仅 4）。社区维护节奏健康，Issue 关闭量大于新开量，说明维护者在持续消化积压。无新版本发布，当前处于功能修复密集迭代期（主干版本约 v0.21.5+），Desktop 端问题（会话状态、TTS 语音、UI 渲染）和 MCP 工具生态仍是两大焦点领域。

## 2. 版本发布

今日无新版本发布。（可省略详细内容）

## 3. 项目进展

今日合并/关闭 PR 数量较少（4 条），但待合并队列中高质量修复密集，多数由核心维护者 @OutThisLife 推进：

- **#128659 [已关闭] fix(desktop): STT filter trailing strip + live barge-in disarm** — [#127275](https://github.com/NousResearch/hermes-agent/pull/128659) 的评审跟进，修复 STT 静音幻觉过滤与 barge-in 解除逻辑，完善语音对话体验闭环。
- **#127239 [已关闭] fix(desktop): Browser 弹出窗口跨窗口 relay** — 统一 pop-out 浏览器控制与评论交接的通信通道，修复 #101198 等多个渲染边界缺陷。
- **#129991 [OPEN] fix(auxiliary): 压缩截止后停止 fallback** — 防止辅助 provider 在宿主压缩截止后继续走 fallback 阶梯，避免无谓计费与误隔离健康端点，成本/可靠性双收。
- **#129994 [OPEN] fix(desktop): transcript 去重守护改进** — 向后搜索匹配的 interim 消息而非假设相邻行为该消息，直接对应今日新报的 [#127665](https://github.com/NousResearch/hermes-agent/issues/127665)（回复重复渲染）。
- **#128469 [OPEN] Files rail 绑定焦点会话工作区** 与 **#128603 [P0] 保留后台 teardown 时的编辑缓冲** — 均为会话状态（risk-session-state）专项治理，P0 级别的编辑缓冲丢失修复尤其值得关注。
- **#97846 [OPEN] feat(groups): Group Chats 迁移到 gateway 运行** — 长期在途的大特性，让群聊会话不再依赖 Desktop 窗口存活，是本周期最值得期待的功能性 PR。

**整体评估**：今日推进以 Desktop 会话状态与语音体验的系统性收敛为主，属"修根因而非打补丁"的深度迭代阶段。

## 4. 社区热点

- **[#88858](https://github.com/NousResearch/hermes-agent/issues/88858)（评论 11，最热）**：MCP trust gate 的 `readOnlyHint` 属性名大小写不匹配（camelCase vs SDK 的 snake_case），导致 untrusted MCP 服务器的**所有只读工具**都被判定为可写、每次调用都弹审批。此 bug 使不可信 MCP 服务器实际不可用，MCP 生态兼容性诉求强烈，且自 8 月中旬至今仍未修复。
- **[#118326](https://github.com/NousResearch/hermes-agent/issues/118326)（评论 8）**：macOS 睡眠/唤醒导致 `psutil.create_time()` 指纹漂移，kanban stale-claim reaper 误释放存活 worker 的任务认领，触发重复 worker——自动化/多 agent 舰队用户的核心痛点。
- **[#98330](已关闭，评论 8)**：`skills.write_approval` 缺少任何审查界面，待审写操作静默堆积——文档承诺与产品现实不符引发的信任问题。
- **[#125437](https://github.com/NousResearch/hermes-agent/issues/125437)（from-pain-miner，评论 4）**：更新失败留下半套安装且无产品内恢复路径，一周产生 15 个 Discord 帖，被官方标记为"痛点聚类"——安装/更新体验是最集中的用户流失风险点。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| P0 | [#128603 PR] 后台 teardown 退出编辑时丢失用户已输入的排队 prompt 缓冲 | 有 fix PR（#128603） |
| P1 | [#94486 已关闭] 会话中切换模型导致下一条用户输入被静默丢弃 | 已修复关闭 |
| P2 | [#88858] MCP 只读工具信任门全部失效（属性名大小写） | **OPEN，无 fix PR，8 月至今** |
| P2 | [#118326] macOS 唤醒后活 worker 被误判为 stale 释放认领 | OPEN，无 fix PR |
| P2 | [#127665] Desktop 回复重复渲染（overlay fold 对 pending live row 豁免） | 有对应 fix PR（#129994） |
| P2 | [#125437] 更新失败半套安装、无恢复路径 | OPEN，社区高关注 |
| P2 | [#117900] systemd 部署下 `$HOME` 命中被拒前缀，MEDIA 投递丢弃全部 agent 文件 | OPEN |
| P2 | [#129973 / #129969] 0.21.5 新回归：POSIX launcher `python3 -I -c` 破坏 Herdr 终端检测；长粘贴占位符在 clarify/slash 参数中未展开 | 今日新报，均无 fix |
| 安全 P3 | [#129975] 回复中任意图片 URL 被 gateway 拉取，可被提示注入用作数据外传信道 | 今日新报（type/security） |
| P3 | [#125746] 并发插件加载触发 'dictionary changed size during iteration'，静默丢工具 | OPEN |

**趋势判断**：会话状态（risk-session-state）类 bug 修复推进最快（多条已关闭）；MCP 兼容性（#88858、#101330、#101467）形成一组长期未解的系统性问题。

## 6. 功能请求与路线图信号

- **[#107744](https://github.com/NousResearch/hermes-agent/issues/107744)**：按 kanban 任务聚合 token/成本，用于多 agent 舰队治理——与 kanban 自动化修复（#118326）同属舰队场景，随舰队功能成熟可能纳入。
- **#97846 Group Chats on gateway**：已在途的架构级 PR，若合入将是下一版本的主打特性。
- **[#129975]**：限制图片 URL 仅接受来自工具的来源——安全边界增强，符合 sweeper 风险治理方向，采纳概率高。
- **#125871 多 profile 记忆迁移的批量依赖授权**：更新流程体验治理，与 #125437 痛点聚类相互呼应，可能一同进入下一版本。
- **[#58937 已关闭]**：Nix 封闭环境 Python 3.12 → 3.13 升级已解决，Nix Tier 2 支持在缓慢跟进。

## 7. 用户反馈摘要

- **痛点集中区**：① 安装/更新失败后无自助恢复（#125437，"每个修复都是手打配方"）；② 语音对话中回复"跳回"读旧内容、barge-in 转录被丢弃（#91991、#105497，均已修复——语音体验在快速改善）；③ Windows 平台兼容性差（TUI 字形豆腐块 #128225、滚动卡顿 3.2s #118782）。
- **满意点**：用户报告的 Desktop 渲染问题多在 1-2 天内获得 root-cause 级 fix PR（如 #96875 回归被快速跟进），社区对维护响应速度评价积极。
- **典型场景**：systemd 无人值守部署（#117900）、Nix/HoMEbrew 不可变安装（#101226）、远程 SSH 终端后端（#129969）等非桌面场景用户增多，反馈这些路径是"二等公民"。

## 8. 待处理积压

| Issue | 时长 | 风险 | 建议 |
|---|---|---|---|
| [#88858](https://github.com/NousResearch/hermes-agent/issues/88858) MCP readOnlyHint 失效 | 6 周+，11 评论 | 高（MCP 生态可用性） | **最优先**，修复量小（属性名对齐）影响面大 |
| [#101330](https://github.com/NousResearch/hermes-agent/issues/101330) outputSchema 校验失败丢弃可用内容并触发熔断 | 4 周+ | 中高 | 与 #88858 同属 MCP 工具结果处理，建议一并治理 |
| [#101467](https://github.com/NousResearch/hermes-agent/issues/101467) oauth.scope 配置静默失效 | 4 周+ | 中（安全最小权限原则被架空） | OAuth 链路专项 |
| [#98488](https://github.com/NousResearch/hermes-agent/issues/98488) A2A 任务落进交互式审批面板阻塞 300s | 4 周+，needs-decision | 中 | 需架构决策，建议排期 |
| [#118326](https://github.com/NousResearch/hermes-agent/issues/118326) macOS stale-claim 误释放 | 10 天 | 中（舰队自动化可靠性） | 可参考 #128659 的指纹治理思路 |

**积压总体评估**：46 个待合并 PR 对 4 个合并/关闭，PR 消化速率是当前瓶颈；建议维护者优先收敛 Desktop 会话状态系列 PR（#128469、#128603）并快修 #88858 这类"小改动大收益"的 MCP 兼容性问题。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-10-01）

## 1. 今日速览

PicoClaw 今日整体呈**低活跃但稳中有进**状态：过去 24 小时无新 Issue、无新版本发布，PR 活动共 5 条（2 条待合并、3 条合并/关闭）。三条 PR 的集中关闭/合并表明维护者在进行积压清理，涵盖多智能体框架、命令权限修复和 QQ 渠道富媒体能力，项目在**多 Agent 协作**与**消息渠道能力**两条主线上持续演进。社区今日无新增讨论，热度偏冷。

## 2. 版本发布

今日无新版本发布，可省略迁移事项。建议关注合并的 #3313（权限规则变更）与 #1349（QQ 回复策略优先 Markdown）是否随下个版本发布说明同步。

## 3. 项目进展

今日关闭/合并 3 条 PR，推进幅度中等：

- **[PR #423](https://github.com/sipeed/picoclaw/pull/423)（已关闭）** — 多智能体协作基础框架（共享上下文池 Blackboard、Agent handoff、发现工具）。标记 WIP 后长期未更新，最终被关闭，多 Agent 路线或将以其他形式重启（已有 #131 多 Agent 路由作为基础）。
- **[PR #3313](https://github.com/sipeed/picoclaw/pull/3313)（已关闭）** — 修复 `customAllowPatterns` 失效问题：默认 deny 规则在 `guardCommand` 中始终优先，导致 `git push` 等已放行命令无法执行。属实用性较强的安全/权限链修复。
- **[PR #1349](https://github.com/sipeed/picoclaw/pull/1349)（已关闭）** — QQ 渠道大幅增强：支持表情、语音、图片、视频、文件消息的解析与回复，回复优先 Markdown、失败降级。QQ 渠道可用性显著提升。

**待合并 2 条：**
- **[PR #3413](https://github.com/sipeed/picoclaw/pull/3413)（OPEN）** — Web UI 全局多渠道会话侧边栏（#3406 Part 2-A），后端跨渠道发现并分类会话。多渠道体验的重要一环。
- **[PR #3222](https://github.com/sipeed/picoclaw/pull/3222)（OPEN）** — DeltaChat 清理重构，净减 200 行，移除遗留特性与密码式邮箱配置（破坏性：secrets 必须存于 jsonrpc）。

## 4. 社区热点

今日无新增 Issue、无新评论，无明确热点。可关注近期活跃的 [PR #3413](https://github.com/sipeed/picoclaw/pull/3413)（Web UI 多渠道会话）——它是 #3406 系列的落地部分，反映用户对**统一管理多渠道（Telegram/QQ/DeltaChat 等）会话**的核心诉求。

## 5. Bug 与稳定性

- **【已修复】命令白名单失效**（[PR #3313](https://github.com/sipeed/picoclaw/pull/3313)）：`customAllowPatterns` 被 deny 规则覆盖，`git push` 等放行命令无法执行，属权限系统逻辑缺陷，中等严重，已有 fix PR 并于今日关闭/合并。
- 今日无新增崩溃或回归报告。

## 6. 功能请求与路线图信号

结合在途 PR 可见的路线图信号：

- **多渠道统一会话管理**：#3413（全局会话侧边栏）+ #3406 系列，明确是当前迭代重点，预计纳入下个版本。
- **多 Agent 协作**：#423 被关闭说明原方案搁置，但基于已合并的 #131（fallback 链 + 多 Agent 路由），该方向仍是长期目标，可能等待新的设计提案。
- **渠道富媒体能力**：#1349（QQ 附件/表情）合并后，其他渠道的富媒体对齐或成后续方向。
- **代码质量收敛**：#3222 的 DeltaChat 清理显示项目在做减法，降低维护成本。

## 7. 用户反馈摘要

今日无新增评论数据。从近期 PR 描述可间接提炼：

- **痛点**：权限放行机制不直观（#3313 作者自述“按测试本应生效”），反映文档与实际行为不一致的困扰。
- **使用场景**：用户在实际工作流中依赖 exec 白名单执行 `git push` 类操作，说明 PicoClaw 被用作**开发/运维自动化 Agent**；QQ 渠道用户的富媒体收发需求旺盛。

## 8. 待处理积压

- **[PR #423](https://github.com/sipeed/picoclaw/pull/423)**：2 月创建、WIP 状态持续 7 个多月后今日关闭。建议维护者在关闭时说明替代计划，避免社区贡献者对多 Agent 方向产生困惑。
- **[PR #3222](https://github.com/sipeed/picoclaw/pull/3222)**：7 月创建，近三个月未合并，包含破坏性配置变更（密码式邮箱配置移除），建议尽快评审并明确迁移指引。
- **[PR #3413](https://github.com/sipeed/picoclaw/pull/3413)**：昨日新开，建议维护者优先评审，保持 #3406 系列的推进节奏。

---

**健康度小结**：今日活跃度偏低（0 Issue / 5 PR / 0 Release），但积压清理动作积极，权限修复与 QQ 渠道增强是实质进展。主要风险点是多 Agent 框架方向的不确定性（#423 关闭无替代）与 DeltaChat 破坏性变更的沟通。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-10-01

## 1. 今日速览

NanoClaw 过去 24 小时呈现**中高活跃度**：14 条 PR 更新（12 条待合并、2 条已合并/关闭）、1 条 Issue 关闭、无新版本发布。开发重心集中在三条主线：**更新/回滚流程可靠性修复**、**Telegram 通道适配打磨**、**Provider/网关扩展能力建设**。核心团队成员（@glifocat、@barnuri、@antonio-antuan、@foxsky）均有产出，且多带 `follows-guidelines` / `core-team` 标签，社区贡献流程运转健康。待合并 PR 积压达 12 条，合并节奏略滞后于提交节奏，值得关注。

## 2. 版本发布

今日无新版本发布。（注：Issue #3961 提及 v2.4.0 为当前影响版本，可推测下一版本将携带本批修复。）

## 3. 项目进展

今日 2 条 PR 被合并/关闭：

- **[#3962](https://github.com/nanocoai/nanoclaw/pull/3962) [CLOSED]** — `fix(update): refuse cutover when the service liveness probe itself fails`：修复 `/update-nanoclaw` 在存活探针失败时误报 `phase: complete` 的问题，与 Issue #3961 同源。该修复直接消除了“更新报告完成但旧 host 仍在服务”的危险状态。
- **[#3974](https://github.com/nanocoai/nanoclaw/pull/3974) [CLOSED]** — `fix(container): refresh agent-runner lockfile`：清除 `bun audit` 全部传递依赖安全告警（源于 `@modelcontextprotocol/sdk` 1.29.0 拉入的旧版 hono 等），提升供应链安全基线。

整体看，今日推进了**更新链路的正确性**与**依赖安全加固**两块，但大量功能型 PR（网关端点、扩展回调、Copilot provider）仍在队列中，功能面进展有限。

## 4. 社区热点

今日无新增 Issue，讨论热度集中在 PR 侧：

- **[#3976](https://github.com/nanocoai/nanoclaw/pull/3976)** `/add-copilot` GitHub Copilot SDK provider（@barnuri）：将 Copilot 引入为 NanoClaw runtime，token 保管在 credential gateway 而非环境变量/容器状态，反映社区对**更多 Provider 接入 + 更安全的凭证管理**的双重诉求。
- **[#3975](https://github.com/nanocoai/nanoclaw/pull/3975)** 通用 runner 与 host 扩展回调（@foxsky）：5 个惰性扩展点，解决 skill 无法触及的 poll loop 深层逻辑，是**架构层开放性**的信号，可能吸引更多 Provider 开发者。
- **#3971–#3973 Telegram 三连修**（@antonio-antuan）：forum topic 线程化、服务消息丢弃、MarkdownV2 解析失败降级重发——显示 Telegram 是用户量最大的通道之一，边缘体验问题集中爆发。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | **[#3961](https://github.com/nanocoai/nanoclaw/issues/3961) [CLOSED]** 更新流程在 `systemctl --user` 无法触达 bus 时误报 complete，旧 host 未停未重启（静默失败，用户以为升级成功） | 已有修复：#3962 已关闭，配套 [#3956](https://github.com/nanocoai/nanoclaw/pull/3956)（rollback 停止 nohup host 并清空 agent 容器）待合并 |
| 🟠 中 | **[#3965](https://github.com/nanocoai/nanoclaw/pull/3965)** OpenCode setup 未按所选网关校验模型 URL，导致保存每轮必失败的 URL | fix PR 已开 |
| 🟠 中 | **[#3973](https://github.com/nanocoai/nanoclaw/pull/3973)** Telegram 无法解析 MarkdownV2 实体时整条消息被丢弃并重试 3 次 | fix PR 已开 |
| 🟡 低 | **[#3972](https://github.com/nanocoai/nanoclaw/pull/3972)** Telegram 服务消息（置顶/入群等）作为空消息转发给 agent，引发无意义回复 | fix PR 已开 |
| 🟡 低 | **[#3970](https://github.com/nanocoai/nanoclaw/pull/3970)** reaction/edit 目标 id 未剥离 agent-group 后缀，跨平台操作错位 | fix PR 已开 |

**安全类**：#3974（agent-runner 传递依赖告警）已处理关闭。

## 6. 功能请求与路线图信号

- **Provider 生态扩张**：[#3976](https://github.com/nanocoai/nanoclaw/pull/3976)（Copilot provider）+ [#3964](https://github.com/nanocoai/nanoclaw/pull/3964)（provider 声明精确 `host:port` 端点，消除非默认端口模型每次调用弹审批卡）+ [#3966](https://github.com/nanocoai/nanoclaw/pull/3966)（本机 keyless 模型经 plain HTTP 接入）。三者共同指向“**降低本地/自有模型接入摩擦**”这一主线，很可能整体进入下一版本。
- **扩展架构**：[#3975](https://github.com/nanocoai/nanoclaw/pull/3975) 的 host 扩展回调是平台化关键一步，为第三方 Provider 深度集成铺路。
- **Fork 治理**：[#3928](https://github.com/nanocoai/nanoclaw/pull/3928) `/contribute-upstream` skill 表明项目在主动解决 fork 分叉维护成本问题，强化上游-下游协作。
- **企业环境支持**：[#3901](https://github.com/nanocoai/nanoclaw/pull/3901)（HTTPS 代理下 host 服务联网）显示对企业部署场景的持续投入。

## 7. 用户反馈摘要

今日无新增 Issue 评论，可提取的痛点主要来自 bug 报告语境：

- **更新透明度缺失**是最大痛点：用户执行 `/update-nanoclaw` 看到 `complete` 即认为升级成功，实际旧 host 仍在运行（#3961），这属于**用户信任层面的严重问题**，且标签 `triage/unresolved` 显示问题被记录时未即时定位根因。
- **本地/自建模型用户**（Iron 网关场景）反复遭遇审批卡弹窗和 URL 校验失败，说明这部分用户群体在增长，但接入体验尚不成熟（#3964、#3965、#3966）。
- **Telegram 群组/forum 场景**的会话串扰与消息丢失（#3971、#3972、#3973）表明 NanoClaw 正被用于较复杂的社区/群组运营场景，而非仅个人助手。

## 8. 待处理积压

- **12 条待合并 PR**，其中多为核心成员提交且带 `core-team` 标签，建议加快 review 节奏，尤其是更新/回滚系列（#3956、#3962 配套）已阻塞 4 天。
- **[#3901](https://github.com/nanocoai/nanoclaw/pull/3901)**（HTTPS 代理支持）已开 6 天，覆盖企业部署刚需，未见合并进展。
- **[#3928](https://github.com/nanocoai/nanoclaw/pull/3928)**（`/contribute-upstream` skill）已开 5 天，涉及生态协作策略，宜尽早定论。
- Issue 面今日零新增，短期无积压；但 Issue #3961 关闭时 0 评论，建议补充根因说明以留档。

---

*数据来源：NanoClaw GitHub 仓库过去 24 小时活动快照。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-10-01

## 1. 今日速览

NullClaw 今日整体活跃度**较低**：无新 Issue、无版本发布、无已合并的 PR，仅 1 条新开的待合并 PR。唯一动态是新增 OpenAI 兼容网关供应商 Cheaper Inference 的功能 PR（#1016），延续了近期扩展 providers 生态的方向（参照 #990 Eden AI 模式）。综合来看，项目处于平稳维护期，等待维护者对社区贡献进行审阅合并。

## 2. 版本发布

今日无新版本发布。最近亦无可见 Release 记录。

## 3. 项目进展

今日无已合并或已关闭的 PR，项目主线代码无变动。

**待审阅 PR：**
- [PR #1016](https://github.com/nullclaw/nullclaw/pull/1016) `feat(providers): add Cheaper Inference as an OpenAI-compatible gateway` — 作者 @aiapienthusiast，创建并更新于 2026-09-30，当前 OPEN 状态。
  - 内容：将 Cheaper Inference 作为 OpenAI 兼容网关供应商接入，单一 API Key 即可访问多家实验室的模型；实现模式复用 #990（Eden AI）的供应商接入范式。
  - 意义：降低用户多模型接入门槛与切换成本，属于低成本、模式化扩展，合并风险较低，预计审阅周期短。

## 4. 社区热点

今日无活跃 Issue 讨论，无高评论/高反应条目。唯一社区互动点即 [PR #1016](https://github.com/nullclaw/nullclaw/pull/1016)（👍 0，评论数未记录），暂未形成讨论热度。

## 5. Bug 与稳定性

今日无新增 Bug、崩溃或回归报告。（无严重程度分级内容可列。）

## 6. 功能请求与路线图信号

- **信号：供应商生态持续扩展**。#1016（Cheaper Inference）沿袭 #990（Eden AI）的 OpenAI 兼容网关接入模式，表明社区贡献者正系统性地为 NullClaw 增加聚合型 LLM 网关支持。若 #1016 与 #990 先后合并，可预期后续版本将支持更广泛的多供应商/单 Key 模型访问，这对降低用户在多模型间的迁移成本是明确的路线图方向。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼用户痛点。间接信号：PR 作者将 Cheaper Inference 定位为“一个 API Key 访问多家模型”，反映出用户对**简化多供应商密钥管理、降低推理成本**的需求。

## 8. 待处理积压

- [PR #1016](https://github.com/nullclaw/nullclaw/pull/1016)：为昨日新开、今日待审的唯一 PR，暂无评论与审批进展。建议维护者（@aiapienthusiast 的贡献需 reviewer 介入）尽快完成 CI 验证与代码审阅，避免类似 #990 范式的贡献长期滞留。
- 其余 Issue 积压情况今日无数据更新，无法评估长期未响应条目。

---
*数据来源：NullClaw GitHub 仓库（github.com/nullclaw/nullclaw），统计窗口为 2026-09-30 至 2026-10-01。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-10-01）

## 1. 今日速览
IronClaw 项目今日整体处于**低活跃度、平稳运行**状态。过去 24 小时无新 Issue、无 Bug 报告、无版本发布，仅 1 条自动化 PR 活跃更新。项目自动化基础设施（CI 机器人）运转正常，未观察到社区负面信号或稳定性风险。整体来看，项目处于“静默维护期”，健康度良好但需要关注人工社区互动的低迷。

## 2. 版本发布
今日无新版本发布，最新 Release 记录为空。无破坏性变更或迁移事项。

## 3. 项目进展
今日无 PR 被合并或关闭。

唯一活跃的更新是自动化 PR：
- **[#7988](https://github.com/nearai/ironclaw/pull/7988) `chore(agents): refresh codebase knowledge graph`**（OPEN，创建于 2026-08-29，今日有更新）
  - 由 `@ironclaw-ci[bot]` 通过 nightly `Codebase Graph Refresh` workflow 自动生成，用于刷新代码库记忆快照至当前默认分支。
  - 标签：`size: XS` / `risk: low` / `contributor: core`，相关测试已通过。

> ⚠️ **提示**：该 PR 自 8 月 29 日创建至今已**挂起约一个月**未合并，虽为低风险例行更新，但长期滞留可能导致快照过期，建议维护者尽快 review 合并（详见第 8 节）。

今日项目在功能与修复层面**无实质推进**（0% 前进量）。

## 4. 社区热点
今日无高活跃讨论。Issues 更新为 0 条，PR #7988 亦无新增评论或 👍 反应（评论数: undefined，👍: 0）。

社区互动降至冰点，值得维护者思考是否需要通过路线图更新、RFC 征集或社区活动重新激活讨论氛围。

## 5. Bug 与稳定性
今日**无**新报告的 Bug、崩溃或回归问题。无待修复的 fix PR。

## 6. 功能请求与路线图信号
今日无新的功能请求。唯一可推断的工程信号来自 PR #7988：项目持续投入 **agentic 代码库知识图谱（codebase memory）** 能力的自动化维护，表明"AI 智能体的代码库自理解/长期记忆”仍是项目重点投入方向，未来版本可能围绕该能力迭代。

## 7. 用户反馈摘要
今日 Issues 评论为空，**无**可提取的用户反馈。无满意度或不满意信号可报告。

## 8. 待处理积压
| 项目 | 类型 | 状态 | 积压时长 | 建议 |
|---|---|---|---|---|
| [#7988 refresh codebase knowledge graph](https://github.com/nearai/ironclaw/pull/7988) | CI/自动化 PR | OPEN | ~33 天（2026-08-29 起） | 低风险、XS 体量、测试已通过，建议尽快合并，避免知识图谱快照与默认分支持续漂移 |

此外，连续多日的零 Issue 状态建议维护者核查：
- Issue 模板/提交通道是否正常（排除社区反馈渠道故障）
- nightly workflow 生成的 PR 为何长期无人处理，是否需要自动合并策略（如 auto-merge for `risk: low` + CI bot PR）

---
**健康度小结**：✅ 稳定性良好 | ⚠️ 社区活跃度低 | ⚠️ 自动化 PR 积压需处理 | ℹ️ 无版本节奏信号

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-10-01）

## 1. 今日速览

过去 24 小时项目活跃度中等：10 条 Issue 更新（全部仍为 OPEN，无关闭），11 条 PR 更新（2 条待合并、9 条已合并/关闭），无新版本发布。值得注意的是安全方向出现高质量外部贡献：Issue [#2784](https://github.com/netease-youdao/LobsterAI/issues/2784) 报告了 NIM P2P 私信策略 fail-open 的安全缺陷，并附带对应修复 PR [#2785](https://github.com/netease-youdao/LobsterAI/pull/2785)，是今日最值得关注的事项。同时大量 3 月份的 stale Issue/PR 今日被批量处理（关闭），显示维护者在进行积压清理。

## 2. 版本发布

今日无新版本发布。最新发布版本仍为 `2026.9.23`（commit `7863db4`，2026-09-23 发布）。

## 3. 项目进展

今日关闭/合并的 9 条 PR 中：

**今日新增并关闭（快速迭代）：**
- [#2786](https://github.com/netease-youdao/LobsterAI/pull/2786)：修复 OpenClaw 默认模型输出上限——服务器元数据无 maxTokens 时 8192 默认值会截断推理模型回答，改为 32768 默认值。
- [#2787](https://github.com/netease-youdao/LobsterAI/pull/2787)：修复自定义模型 Plan 路由问题，涉及 renderer/main/openclaw/cowork 多个模块。

**Stale 批量清理（3 月提交，今日关闭）：**
- [#944](https://github.com/netease-youdao/LobsterAI/pull/944)：MCP 弹框滚动条溢出圆角修复
- [#951](https://github.com/netease-youdao/LobsterAI/pull/951)：MCP 表单误关导致数据丢失防护
- [#954](https://github.com/netaise-youdao/LobsterAI/pull/954)：continueSession 双重错误消息修复
- [#956](https://github.com/netease-youdao/LobsterAI/pull/956)：IM destroy() 崩溃修复（accumulator.reject 可选链）
- [#957](https://github.com/netease-youdao/LobsterAI/pull/957)：流式输出时会话菜单自动关闭修复
- [#959](https://github.com/netease-youdao/LobsterAI/pull/959)：记忆条目过短时的内联校验提示
- [#965](https://github.com/netease-youdao/LobsterAI/pull/965)：内置 briefing-clip 剪报技能

## 4. 社区热点

- **[#2784](https://github.com/netease-youdao/LobsterAI/issues/2784)（今日新开）**：NIM P2P 私信策略 fail-open——`disabled` 和未设置的策略反而允许任意发送者发消息，属于**安全类缺陷**，影响最新版本和 main 分支。报告者 @carfeii 同时提交了修复 PR [#2785](https://github.com/netease-youdao/LobsterAI/pull/2785)（改 fail-open 为 fail-closed），体现了高质量社区贡献，建议优先 review。
- **[#953](https://github.com/netease-youdao/LobsterAI/issues/953)（👍 1，3 评论）**：任务停止/删除后未真正停止，后台残留任务导致 API 频繁请求失败，是长期未解的高价值 bug，今日再次活跃。

## 5. Bug 与稳定性（按严重程度）

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#2784](https://github.com/netease-youdao/LobsterAI/issues/2784) NIM P2P 策略 fail-open，私信权限形同虚设 | ✅ 已有 fix PR [#2785](https://github.com/netease-youdao/LobsterAI/pull/2785)，待合并 |
| 🟠 中高 | [#953](https://github.com/netease-youdao/LobsterAI/issues/953) 任务停止/删除后未实际停止，引发任务"窜台"、API 频繁报错 | ❌ 无 fix PR |
| 🟠 中 | [#961](https://github.com/netease-youdao/LobsterAI/issues/961) MCP Daemon（port 53699/6947）未启动导致 MCP 工具链全部断开 | ❌ 无 fix PR |
| 🟡 中 | [#962](https://github.com/netease-youdao/LobsterAI/issues/962) 升级后 403 "request was blocked"，回退旧版恢复 | ❌ 无 fix PR |
| 🟡 中 | [#960](https://github.com/netease-youdao/LobsterAI/issues/960) 默认千问模型初次使用报错 | ❌ 无 fix PR |

## 6. 功能请求与路线图信号

- **[#964](https://github.com/netease-youdao/LobsterAI/issues/964) 多 Agent 隔离架构**：诉求最完整的需求——独立人设、知识库、IM 账号、任务与对话 session 隔离。目前无对应 PR，属中长期路线图信号。
- **[#947](https://github.com/netease-youdao/LobsterAI/issues/947) / [#948](https://github.com/netease-youdao/LobsterAI/issues/948) / [#949](https://github.com/netease-youdao/LobsterAI/issues/949)（同一作者系列）**：IM 侧模型独立配置、优先级/Token 用量管理、IM 中指定模型并返回可用列表。三者为 IM 体验增强一揽子需求，均无 PR 跟进。
- **PR [#958](https://github.com/netease-youdao/LobsterAI/pull/958)（临时会话/隐私聊天）**：功能完整、含数据库 `is_temp` 字段设计，仍 OPEN，是当前 2 条待合并 PR 之一，有较大概率进入下个版本。

## 7. 用户反馈摘要

- **任务生命周期不可靠**是最集中的痛点：停止任务后仍打开浏览器执行搜索、模型调用报"api 请求频繁"（#953），直接影响信任度。
- **IM 集成是核心使用场景但体验粗糙**：模型调试与 IM 交互耦合导致 IM 失败（#948）、失败提示不友好（#950），说明相当比例用户通过钉钉等 IM 日常使用 LobsterAI。
- **非技术用户上手门槛高**：#961 作者自述"不是搞软件的，不懂"，MCP Daemon 报错信息对普通用户不可操作，提示需改进错误自诊断与引导。
- **升级体验**：#962 反映升级即 403 被拦截、回退才能用，暴露版本发布回归测试与灰度机制的不足。

## 8. 待处理积压

以下 Issue/PR 均为 3 月提交、长期 stale，今日虽被标记活动但无实质回应，建议维护者分类处理：

- **#953 任务未停止**（用户价值最高，影响 API 可用性）— 建议指派修复
- **#961 MCP Daemon 启动失败**、**#960 千问默认模型报错**、**#962 升级后 403** — 建议确认是否可在最新版本复现后关闭或修复
- **#964 多 Agent 架构** — 建议给出路线图回应，避免社区期望流失
- **PR [#958](https://github.com/netease-youdao/LobsterAI/pull/958)、[#2785](https://github.com/netease-youdao/LobsterAI/pull/2785)** — 两条待合并 PR，尤其 #2785 涉及安全，建议尽快 review 合并

**健康度小结**：项目处于"安全修复优先 + 积压清理"阶段，社区贡献质量在提升（含安全研究员级报告），但 3 月遗留的多个用户侧 bug 长期无修复响应，是当前主要风险点。

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

# CoPaw 项目动态日报 — 2026-10-01

> 仓库：github.com/agentscope-ai/CoPaw ｜ 数据周期：过去 24 小时

---

## 1. 今日速览

CoPaw 今日保持高度活跃：过去 24 小时 Issues 更新 20 条（新开/活跃 17，关闭 3），PR 更新 38 条（待合并 31，合并/关闭 7），并发布了 1 个新版本 **v2.2.2-beta.4**。社区参与质量较高，多个新开 Issue 由 AI Agent 辅助整理并附完整复现日志（如 #8022），报告深度罕见。维护者响应迅速——9 月 30 日新报的 Bug（#8057、#8058、#8040）当天即有对应 fix PR（#8060、#8061、#8062），修复飞轮转动健康。当前主要压力点集中在 v2.2.x 的 provider 兼容性、记忆/嵌入索引稳定性以及安全沙箱问题。

---

## 2. 版本发布

### v2.2.2-beta.4（Beta）
- **ReMeLightMemoryCard 新增 reranker UI 配置面板**（PR #6399，@lecheng2018）
- **版本号 bump 至 2.2.2b4**（PR #7892，@cuiyuebing）
- **perf(console)：拆分 chat 依赖**（截断，可能涉及前端包体/加载优化）
- 配套发布验证 Issue：[#8053 Release Duty — Installation Verification](https://github.com/agentscope-ai/QwenPaw/issues/8053)，四平台检查点需在发布后 4 小时内全绿
- **迁移提示**：Beta 版本，#7899 引入的 `cache_request()` 策略（`cache_policy.py`）在 b4 中对自定义 OpenAI 兼容网关有行为影响（见 #8058），自定义 provider 用户升级需注意。

---

## 3. 项目进展

今日关闭/合并 7 个 PR，其中亮点：

- **PR #8049（已关闭）**：修复 `_process_local_tz()` 冻结固定 UTC 偏移导致 DST 切换后聊天记录时间戳漂移的问题，直接关闭 Issue #8046。首次贡献者 @passionworkeer。
- **PR #8066**：序列化前丢弃空 media DataBlock，避免零字节图片生成空 data URI 被所有 provider 拒绝——修复一类请求级故障。
- **PR #8065**：技能导入路径注入修复（`../escape` 路径逃逸，CodeQL 报告），安全加固。
- **PR #8062 / #8060 / #8061**（待合并但当天创建）：分别解决嵌入批量失败连坐（#8040）、Anthropic 缓存 token 计量（#8057）、自定义网关 prompt cache 参数（#8058），Issue→PR 当日闭环。
- **PR #8063**（首次贡献者）：后台任务完成后唤醒父 Agent 会话，改善多 Agent 异步编排体验（关联 #8059）。
- 长线大 PR **#7569 Advisor Mode**（size/XXXL）持续推进，双模型“顾问+执行者”循环模式是近期最值得关注的新特性。

**整体评估**：修复吞吐强劲，新报 Bug 基本当天认领；功能面上 Advisor Mode 与后台任务通知正在补齐多 Agent 能力版图。

---

## 4. 社区热点

- **#7011**（评论 8，已关闭）：Console 停止请求跨 UI 会话取消活跃飞书会话——作者两次修订问题描述，最终关闭，说明会话隔离问题已处理，但暴露多通道会话身份串扰的脆弱面。
- **#7443**（评论 6，已关闭）：危险指令绕过防护的 Bug，附知乎分析文章，社区安全关注度高。
- **#8022**（评论 4，新开）：`send_file_to_user` 产生的 file/image 块 + 空 assistant 消息污染上下文，导致后续所有请求持续 400。**由 QwenPaw Agent 在用户授权下自动提交**，是项目自身 Agent 能力的展示，也说明用户对工具输出污染上下文类问题（同见 #8042、#8064）痛点强烈。
- **#6274**（👍1，跨月活跃）：请求新增 `ask_user_question` 工具支持 Human-in-the-Loop，覆盖 Core + Console，是社区呼声明确的方向性需求。
- **#8013**：大技能（约 13,000 文件 / 80MB）广播时前端 30 秒硬超时失败，桌面端用户在真实技能市场场景受影响。

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 摘要 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#7672](https://github.com/agentscope-ai/QwenPaw/issues/7672) 安全沙箱在 Windows 被突破（系列 1/4） | 2.2.0 沙箱逃逸 | 未见图示 fix PR |
| 🔴 高 | [#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002) Windows auto 模式+关沙箱时，内联 Office COM `Quit()` 可关闭用户 PowerPoint | 未授权副作用操作 | 待修 |
| 🔴 高 | [#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) / [#8064](https://github.com/agentscope-ai/QwenPaw/issues/8064) 工具文件输出污染上下文，DeepSeek 下会话永久 400 | 会话不可用级 | 部分：PR #8066（空 media block） |
| 🟠 中 | [#8059](https://github.com/agentscope-ai/QwenPaw/issues/8059) 后台任务完成后记录 404、最终响应为空（2.2.2b4） | PR #8063 相关 |
| 🟠 中 | [#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040) 单个超限 CJK chunk 静默拖垮整批嵌入（#5950 复发） | ✅ PR #8062 |
| 🟠 中 | [#8047](https://github.com/agentscope-ai/QwenPaw/issues/8047) DBX MCP `discover` 422 纯文本响应未按 legacy 协议处理，streamable_http driver 不激活 | 待修 |
| 🟡 低 | [#8057](https://github.com/agentscope-ai/QwenPaw/issues/8057) Anthropic 缓存 token 未计入上下文计量 | ✅ PR #8060 |
| 🟡 低 | [#8058](https://github.com/agentscope-ai/QwenPaw/issues/8058) 自定义网关 `prompt_cache_key` 被拒 | ✅ PR #8061 |
| 🟡 低 | [#8035](https://github.com/agentscope-ai/QwenPaw/issues/8035) 转写设置页无法配置 `transcription_model`，切换 provider 静默破坏转写 | 待修 |
| 🟡 低 | [#8046](https://github.com/agentscope-ai/QwenPaw/issues/8046) DST 时间戳漂移 | ✅ PR #8049（已关闭） |

已关闭稳定性 Issue：#7011（跨会话取消）、#7604（LLM 流空闲超时硬编码）、#7443（危险指令绕过）。

---

## 6. 功能请求与路线图信号

- **Human-in-the-Loop `ask_user_question`**（[#6274](https://github.com/agentscope-ai/QwenPaw/issues/6274)）：诉求明确、影响面 Core+Console，与 Advisor Mode 的“规划-确认”理念契合，有望纳入后续版本。
- **消息撤回/编辑 + 工作区回滚**（[#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997)）：需要快照/回滚基础设施，属较大路线图项。
- **IM @所有人/@ALL 过滤**（[#7945](https://github.com/agentscope-ai/QwenPaw/issues/7945)）：小而高频的 IM 集成需求，实现成本低，可能较快落地。
- **Advisor Mode**（PR #7569，XXXL）与 **后台任务唤醒**（PR #8063）已在 PR 管道中，是 2.2.x 正式版前最可能合入的大特性。
- 老牌 PR 如 **PRD 内置工具**（#4902）、**extraSystemPrompt**（#4580）仍在 Under Review，反映 API 层扩展方向。

---

## 7. 用户反馈摘要

- **多 Agent 编排体验**：用户已用 `submit_to_agent` / `check_agent_task` 搭建 manager-worker 架构，但结果丢失（#8059）和静默完成（#8063 背景）是核心抱怨。
- **企业/IM 场景真实落地**：飞书、钉钉、企业微信（#8042）、QQ（PR #1619/#1560）渠道问题密集，说明 IM 集成是主力使用场景；@ALL 误触发（#7945）反映机器人被部署在真实群聊中。
- **Provider 长尾兼容性**：DeepSeek、Anthropic 协议、自定义 OpenAI 兼容网关（#8057/#8058/#8064）问题集中，用户接入自选模型时频繁撞墙。
- **桌面端成熟度**：macOS PATH（#5861）、Windows WebView2（#3119/#3120）、大技能下载超时（#8013）、流超时不可配（#7604）——桌面端是稳定性洼地。
- **正面信号**：Issue 报告质量高（复现步骤、版本、日志齐全），甚至出现 AI 辅助提交（#8022），社区投入度和信任度较高。

---

## 8. 待处理积压（维护者关注）

| 条目 | 状态 | 提醒 |
|---|---|---|
| [PR #7569 Advisor Mode](https://github.com/agentscope-ai/QwenPaw/pull/7569)（09-05 起，XXXL） | 开放近 1 月 | 体量大，需分阶段评审计划 |
| [PR #5170 agent-list PROFILE.md 缓存](https://github.com/agentscope-ai/QwenPaw/pull/5170)（06-13 起） | 积压 3.5 个月 | 性能优化，冲突风险低，建议尽快处理 |
| [PR #4580 extraSystemPrompt](https://github.com/agentscope-ai/QwenPaw/pull/4580)（05-20 起，Under Review） | 积压 4 个月+ | API 语义需定案 |
| [PR #4224 memory index refresh](https://github.com/agentscope-ai/QwenPaw/pull/4224)（05-11 起） | 积压近 5 个月 | 依赖上游 ReMe 版本，注意与 #8040/#8062 的耦合 |
| [PR #1619 / #1560 / #1489 QQ 渠道系列](https://github.com/agentscope-ai/QwenPaw/pull/1489)（03 月起） | 积压 6 个月+ | 贡献者流失风险高 |
| [#7672 Windows 沙箱逃逸](https://github.com/agentscope-ai/QwenPaw/issues/7672)（09-10 起） | 仅 2 条评论 | 安全类高优，公开 PoC 已传播，建议优先响应并披露时间线 |

**健康度小结**：修复响应速度优秀（新 Bug 当日出 PR），但 PR 合并积压严重（31 个待合并，最长达 6 个月+），安全 Issue 响应偏慢，是当前两大健康度风险。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报
**日期：** 2026-10-01
**项目地址：** https://github.com/gaoyangz77/easyclaw

---

## 1. 今日速览

今日 EasyClaw 处于**低社区互动、持续交付**状态。过去 24 小时内 Issues 与 PR 更新均为 0 条，社区讨论静默；但项目发布了新版本 **v1.9.26（TK Copilot）**，表明维护者仍保持活跃的开发节奏。整体健康度评估：**代码交付活跃度中等偏高，社区活跃度偏低**，建议关注社区引流与用户反馈渠道建设。

## 2. 版本发布

### v1.9.26: TK Copilot v1.9.26
🔗 https://github.com/gaoyangz77/easyclaw/releases

**更新内容：**

1. **商务拓展人员专用登录与工作区（新功能）**
   - 为商务拓展（BD）人员提供独立登录入口与专属工作区
   - 按角色权限控制达人联盟（Affiliate）相关操作的可见性与可用性
   - 信号：项目正在向**多角色、多租户化**方向演进，针对 TikTok 联盟营销/达人合作场景细化权限体系

2. **非活跃工作区标签自动挂起（性能优化）**
   - 自动暂停长时间未活跃的工作区标签页，降低后台 CPU/内存资源占用
   - 对同时管理多个工作区/账号的用户是明显的体验提升

**破坏性变更：** Release Notes 未标注任何 breaking changes。
**迁移注意事项：** 涉及角色权限变更，建议升级后检查现有账号的角色配置，确认 BD 角色的登录入口与权限边界符合预期。

## 3. 项目进展

今日无 PR 合并/关闭记录。项目进展主要体现为 v1.9.26 的直接发布，包含多角色权限体系与性能优化两项改进。由于本次发布未经公开 PR 流程（或 PR 活动未计入 24 小时窗口），无法评估单日代码吞吐量。

## 4. 社区热点

今日无活跃 Issues/PRs，无社区热点讨论。这可能反映：
- 用户反馈集中在其他渠道（如 Discord、微信群等）
- 项目处于早期推广阶段，GitHub 社区生态尚未形成

## 5. Bug 与稳定性

今日无新增 Bug 报告，无已知崩溃或回归问题，无需 fix PR 跟进。**注意：** v1.9.26 涉及登录与角色权限改动，建议升级用户密切关注新版本上线后 48 小时内的反馈。

## 6. 功能请求与路线图信号

今日无新增功能请求。从版本发布节奏可推断的路线图信号：
- **多角色权限体系**（本次落地）→ 后续可能扩展更多角色类型（如运营、财务）
- **资源优化方向**（标签挂起）→ 表明多工作区重度使用是核心场景，后续或有更多性能相关改进

## 7. 用户反馈摘要

今日无 Issues 评论数据，无法提取用户反馈。建议维护者主动在 Release 页或社群中收集 v1.9.26 的升级反馈，特别是 BD 工作区的实际使用体验。

## 8. 待处理积压

今日无长期未响应的 Issue 或 PR 需要提醒（24 小时窗口内无相关数据）。如需持续监控积压情况，建议拉取过去 30 天无维护者回复的 Issue 列表。

---

**总结：** EasyClaw 今日以**版本交付**为主要动态，v1.9.26 的多角色工作区与资源优化功能显示产品正在向企业级、多角色协作方向打磨。社区侧暂时静默，建议加强 Release 公告的传播与 issue 模板引导，以激活用户反馈闭环。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*