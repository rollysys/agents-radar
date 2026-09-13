# OpenClaw 生态日报 2026-09-13

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-13 03:50 UTC

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

# OpenClaw 项目日报 — 2026-09-13

## 1. 今日速览

今日 OpenClaw 保持高度活跃：过去 24 小时共 500 条 Issue 更新（新开/活跃 280，关闭 220）和 500 条 PR 更新（待合并 282，已合并/关闭 218），新增与关闭基本平衡，社区消化能力健康。今日无新版本发布，但核心维护者 @steipete 单日提交了十余个 PR，聚焦 SQLite 性能优化与 subagent/swarm 稳定性修复，显示 2026.9.x 后续修复迭代正在密集推进。与此同时，2026.9.3/2026.9.4 的升级可靠性问题（P0 级）仍是当前最大风险点，已有维护者跟踪索引统筹处理。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭 218 个 PR，重点方向：

**性能优化（@steipete 密集产出）**
- [PR #146684](https://github.com/openclaw/openclaw/pull/146684) 批量读取 transcript replay anchor，大幅减少 SQLite 读取
- [PR #146682](https://github.com/openclaw/openclaw/pull/146682) 在 SQLite 中聚合 flow task 摘要计数，减少数据物化
- [PR #146717](https://github.com/openclaw/openclaw/pull/146717) 修复重度压缩会话打开的二次方复杂度扫描
- [PR #146686](https://github.com/openclaw/openclaw/pull/146686) 降低内存分块与 Slack 哈希开销
- [PR #146683](https://github.com/openclaw/openclaw/pull/146683) Workboard 按需拉取单板卡片
- [PR #146690](https://github.com/openclaw/openclaw/pull/146690) 加速大文件编辑进度计数

**安全与正确性**
- [PR #146517](https://github.com/openclaw/openclaw/pull/146517)（XL，已就绪）exec 审批在进程启动时重新校验，修复审批被撤销后命令仍可启动的漏洞
- [PR #138439](https://github.com/openclaw/openclaw/pull/138439) 限制工具 schema 归一化递归深度，防止栈溢出
- [PR #146718](https://github.com/openclaw/openclaw/pull/146718) 修复脱敏后日志记录保持合法 JSON

**Subagent/Swarm 修复**
- [PR #146667](https://github.com/openclaw/openclaw/pull/146667)（P1）恢复 yield 后的 subagent 并保留侧边栏嵌套结构
- [PR #146712](https://github.com/openclaw/openclaw/pull/146712) 任务清理保持正确所有权
- [PR #130741](https://github.com/openclaw/openclaw/pull/130741) Swarm 拆分修复持续落地，多个子修复已合并

**升级可靠性**
- [PR #145043](https://github.com/openclaw/openclaw/pull/145043)（P1）防止过期 Codex 迁移阻塞升级，直接回应今日多个 P0 升级失败报告

**新功能**
- [PR #146702](https://github.com/openclaw/openclaw/pull/146702) 浏览器 dashboard 与 agent 共享会话
- [PR #146676](https://github.com/openclaw/openclaw/pull/146676) Talk 通话中实时切换语音

整体看，项目在“稳定性修复 + 性能 + 用户体验”三条线并行，Swarm 修复拆分策略执行良好。

## 4. 社区热点

| Issue | 评论 | 热点分析 |
|---|---|---|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) 僵尸子进程泄漏（30 评论） | P1 | hook/tool 子进程未 reap，长期运行退化，运维用户核心痛点 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) Subagent 结果静默丢失（27 评论） | P1 | Telegram 用户最痛的“任务跑完没回音”问题，长期未修复 |
| [#142585](https://github.com/openclaw/openclaw/issues/142585) Doctor 拒绝合法旧版迁移（17 评论） | P0 | 2026.9.3 升级阻塞，回归性质 |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) Subagent 完成投递丢失（16 评论，已关闭） | P1 | 与 #44925 同族，已有进展 |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) MCP 工具通道审批信封（16 评论） | P2 | 安全生态需求：让 MCP 外部副作用也走 `/approve` 门控 |

社区诉求集中在两个主题：**消息/结果不丢失的可靠性**和**升级迁移不阻塞**。

## 5. Bug 与稳定性（按严重度）

**P0（升级/启动阻塞）**
- [#145252](https://github.com/openclaw/openclaw/issues/145252) 维护者跟踪索引：2026.9.3/9.4 升级、Doctor、迁移、回滚可靠性统筹
- [#145510](https://github.com/openclaw/openclaw/issues/145510) 更新失败 runtime-verification-failed → 相关修复 [PR #145043](https://github.com/openclaw/openclaw/pull/145043)
- [#145192](https://github.com/openclaw/openclaw/issues/145192) 9.2→9.4 托管升级在 candidate-Doctor 失败后回滚到已迁移状态（未标 fix PR）
- [#145929](https://github.com/openclaw/openclaw/issues/145929) auth profile 登出因锁忙永久失败（未标 fix PR）
- [#112475](https://github.com/openclaw/openclaw/issues/112475) 设备配对恢复失败（长期未修）

**P1（崩溃/数据丢失）**
- [#144911](https://github.com/openclaw/openclaw/issues/144911) MCP 初始化超时导致 Gateway 整体崩溃（clawsweeper 标记 fix-shape-clear，待修复 PR）
- [#139847](https://github.com/openclaw/openclaw/issues/139847) 回复运行中消息被丢弃（9.2 回归，标记 queueable-fix）
- [#137332](https://github.com/openclaw/openclaw/issues/137332) 混合 settle 批次无限重试（标记 queueable-fix）
- [#132765](https://github.com/openclaw/openclaw/issues/132765) `agents_wait` 忽略 timeoutSeconds → 社区修复 [PR #146716](https://github.com/openclaw/openclaw/pull/146716)、[#146715](https://github.com/openclaw/openclaw/pull/146715) 针对 #141474
- [#142476](https://github.com/openclaw/openclaw/issues/142476)（已关闭）cron reaper 同步 PRAGMA 阻塞事件循环 14-76s
- [#136183](https://github.com/openclaw/openclaw/issues/136183) ssh 命令执行器挂起（8.1 回归，无 fix PR）
- [#134993](https://github.com/openclaw/openclaw/issues/134993) 大规模 skill 下 Gateway 单核忙循环（无 fix PR）
- [#97616](https://github.com/openclaw/openclaw/issues/97616) 僵尸进程泄漏（无 fix PR）

**数据一致性**
- [#146096](https://github.com/openclaw/openclaw/issues/146096)（已关闭）agent 全文件写入接受过期内容覆盖并发更新

## 6. 功能请求与路线图信号

- **MCP 审批信封**（[#78308](https://github.com/openclaw/openclaw/issues/78308)）：与已就绪的 [PR #146517](https://github.com/openclaw/openclaw/pull/146517)（exec 审批重校验）方向一致，安全审批管道扩展是明显路线图主题，可能下版本纳入。
- **followup 队列持久化**（[PR #82572](https://github.com/openclaw/openclaw/pull/82572)）：直接解决重启丢消息，与 message-loss 族 issue 呼应，值得优先推进。
- **浏览器 dashboard 共享**（[PR #146702](https://github.com/openclaw/openclaw/pull/146702)）、**Talk 语音切换**（[PR #146676](https://github.com/openclaw/openclaw/pull/146676)）：维护者主导，大概率近期合入。
- **SQLite 会话存储 API 族**（[#79902 umbrella](https://github.com/openclaw/openclaw/issues/79902)，含 #79903/#79904/#79905 已 stale 关闭）：曾因等待重构停滞，今日多个 SQLite 性能 PR 落地后可能重启。
- **MS Teams 多 bot 账号**（[PR #112811](https://github.com/openclaw/openclaw/pull/112811)）：企业多 agent 场景需求，仍需证明材料。
- **无障碍 Linear Workspace 模式**（[#82450](https://github.com/openclaw/openclaw/issues/82450)）：盲人用户深度依赖 OpenClaw，值得维护者关注。

## 7. 用户反馈摘要

- **运维/自托管用户**：大规模部署（632 agent、632 数据库）用户反复遭遇事件循环阻塞和忙循环，性能回归在大规模场景被放大（#142476、#134993）。
- **消息可靠性焦虑**：多个 issue 反复出现“任务完成但用户看不到结果”，是最损害信任的一类问题（#44925、#101656 Telegram 静默 subagent）。
- **升级恐惧**：9.3/9.4 升级失败率高，用户在 Discord/社区互传回滚经验；Doctor 修复反而制造新阻塞（#145503 doctor --fix 推荐自家 resolver 拒绝的修复）。
- **正面信号**：盲人用户称 OpenClaw 是“用过最强大的 AI 工作界面”；clawsweeper 自动分拣 + issue-rating 标签体系运转良好，社区问题分流效率高。
- **生态摩擦**：渠道插件外置化（WhatsApp TTS #144502、Google Meet #140455）后，宿主安全门控与外部插件 origin 冲突（#115367），架构迁移遗留问题开始显现。

## 8. 待处理积压

| 条目 | 状态 | 提醒 |
|---|---|---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 标记 needs-product-decision，3 月至今 | 最高价值 message-loss issue，需要产品决策而非更多 repro |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) 僵尸进程 | 无 fix PR，6 月至今 | 长时运行运维刚需 |
| [#115367](https://github.com/openclaw/openclaw/issues/115367) read gate origin 冲突 | needs-product-decision | 阻塞外部渠道插件读取能力，涉及安全模型设计 |
| [#136183](https://github.com/openclaw/openclaw/issues/136183) ssh 挂起回归 | 两个版本未修 | 影响所有远程命令场景 |
| [PR #82572](https://github.com/openclaw/openclaw/pull/82572) followup 持久化 | 5 月起 needs proof，高风险标签多 | 建议维护者介入拆分降险 |
| [PR #67421](https://github.com/openclaw/openclaw/pull/67421) SSRF per-agent 覆盖 | 4 月起 needs proof | 安全边界变更，需明确审查路径 |
| [#82450](https://github.com/openclaw/openclaw/issues/82450) 无障碍模式 | 无维护者回应 | 社区口碑与包容性机会 |

**健康度小结**：修复吞吐强劲（关闭率 44%），但 P0 升级可靠性与长期未决的 message-loss 族问题是当前两大风险面，建议优先收敛 #145252 跟踪范围并推进 #145043 合并。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：2026-09-13 | 数据窗口：过去 24 小时**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入**功能深化与可靠性攻坚并行**的阶段：头部项目（OpenClaw、Hermes Agent、Zeroclaw）日 Issue/PR 更新量达 50–500 条，围绕 subagent/swarm、MCP 工具链、多通道消息投递形成完整产品形态；中腰部项目（NanoBot、NanoClaw、CoPaw）正处于升级后 Bug 集中暴露期，社区“报告—修复”闭环活跃。**共性技术焦点高度收敛**：MCP 集成可靠性、消息不丢失、安全审批门控、崩溃恢复/幂等性、多通道（Telegram/Slack/WhatsApp/IRC）适配是几乎所有项目的核心投入方向。同时生态出现明显分化：部分项目陷入“核心开发活跃、社区响应迟缓”的治理困境（LobsterAI、PicoClaw），维护者带宽已成为比技术更稀缺的资源。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（280 开/220 关） | 500（282 待/218 合） | 无 | 🟢 强——关闭率 44%，但 P0 升级可靠性是风险点 |
| **Zeroclaw** | 25（19/6） | 50（38 待/12 合） | 无（备战 v0.8.5+） | 🟢 高——发布工程化投入密集，XL 安全 PR 积压 |
| **Hermes Agent** | 50（43/7） | 50（41 待/9 合） | 无（v0.21.0 后消化期） | 🟢 良好——架构级重构推进，P2 Windows 积压 |
| **CoPaw (QwenPaw)** | 15（13/2） | 6（全待审） | 无 | 🟡 中高——2.2.x Bug 爆发期，修复管线充实但零合并 |
| **NanoBot** | 4（3/1） | 14（9 合/5 待） | 无（临近发版） | 🟢 高——1 P1 + 多 P2 一日落地，社区协作佳 |
| **NanoClaw** | 5（2/3） | 25（14 待/11 合） | 无 | 🟢 良好——setup 链路批量修复，issue→PR 响应当天闭环 |
| **LobsterAI** | 6 | 11（8 待，全 stale） | 无 | 🔴 分化——核心开发活跃，8 个社区 PR 5.5 个月无 review |
| **PicoClaw** | 4（0 关闭） | 3（0 合并） | 无 | 🔴 低——TLS 证书过期 2+ 天无人处理，合并吞吐为零 |
| **Moltis** | 0 | 3（2 待/1 合） | 无 | 🟡 平稳——安全加固推进，Requesty PR 滞留 70+ 天 |
| **EasyClaw** | 0 | 0 | ✅ v1.9.16 | 🟡 稳态——发版驱动，社区静默 |
| **NullClaw** | 0 | 1（PR #996 被关闭未合并，需核实） | 无 | 🟡 低活跃——7,373+ 测试覆盖良好 |
| **IronClaw** | 0 | 2（1 开 1 关） | 无 | 🟡 低活跃——质量护栏型贡献 |
| **TinyClaw / ZeptoClaw** | 0 | 0 | 无 | ⚪ 无活动 |

**分层结论**：OpenClaw 一个项目的日更新量（1000 条）超过其余 12 个项目总和，呈典型的生态引领者格局。

---

## 3. OpenClaw 在生态中的定位

**规模优势碾压级**：日 Issue/PR 更新各 500 条，约为第二名（Hermes/Zeroclaw）的 10 倍；单维护者 @steipete 一天可合并十余个性能 PR，clawsweeper 自动分拣 + issue-rating 标签体系使 44% 关闭率在大流量下依然维持，社区工程化程度是生态标杆。

**技术路线差异**：
- **最完整的 subagent/swarm 实现**：OpenClaw 的嵌套 subagent、Swarm 拆分修复是独有深度；Hermes 走“单网关统一会话所有权”（#106742）收敛路线，NanoBot/CoPaw 尚在补多工具幂等性基础。
- **渠道矩阵最广**：Telegram/Slack/WhatsApp/MS Teams/MCP 多通道且正外置为插件架构（尽管引发 origin 冲突 #115367）；CoPaw/Moltis/Zeroclaw 仅覆盖 2–3 个渠道。
- **SQLite 会话存储 + 大规模部署验证**：632 agent/632 数据库的真实场景反馈，其他项目无此量级数据。

**对比下的劣势**：
- **升级可靠性**：9.3/9.4 的 P0 升级失败问题（#145252、#145510）在生态中罕见——NanoBot、Zeroclaw 均无同级问题，Zeroclaw 反而将发布工程化作为主线（#10814）。
- **message-loss 族问题长期未决**（#44925 标记 needs-product-decision 达 3 月），而 NanoBot 同类问题（crash recovery #5747/#5748）社区 PR 同日提交配对修复，响应敏捷度对比明显。
- **垂直深度被追赶**：Hermes 的 Bot Screen 桌面接管、NanoClaw 的 code mode（tmux 持久编码会话）+ 全双工语音，代表差异化功能创新不再由 OpenClaw 独占。

**定位总结**：OpenClaw 是生态的“全功能基座与事实标准”，但其风险恰在规模化后的工程债（升级链路、僵尸进程 #97616、长期积压的产品决策类 issue）。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **MCP 集成可靠性** | OpenClaw（#144911 初始化超时致 Gateway 崩溃、#78308 审批信封）、Zeroclaw（#10807 连接永久中毒）、NullClaw（#991 stdio 无界等待）、CoPaw（#7716 升级后无法连接、#7728 Java SDK 探测失败）、Hermes（凭据脱敏 #108695）、EasyClaw（v1.9.16 授权流程） | 6/13 项目当日有 MCP 相关动态，**生态第一共性主题**：超时治理、进程清理、信封兼容、授权流 |
| **消息/结果不丢失** | OpenClaw（#44925/#101656 subagent 静默丢失、PR #82572 followup 持久化）、Zeroclaw（#10788 失败 turn 丢历史）、Hermes（#101866 Telegram 错发）、NanoBot（#5747 崩溃一致性）、LobsterAI（#1051 会话锁死）、CoPaw（#7724 会话丢失） | “任务完成但用户看不到”是跨项目最伤信任的问题类别 |
| **安全审批与权限门控** | OpenClaw（PR #146517 exec 审批重校验）、Zeroclaw（#10610 Shell V1 权限策略）、Moltis（#1265 Telegram 工具策略对等）、CoPaw（#7726 trusted 静默回退、#7727 越界写入失效） | 审批管道从 exec 扩展到 MCP 外部副作用，成为明确路线图主题 |
| **崩溃恢复与幂等执行** | NanoBot（#5747 批次边界持久化、#5749 RequestContext）、NanoClaw（PR #3766 并发迁移）、Zeroclaw（#10797 并发覆盖写丢数据） | 外部副作用幂等性是可靠多工具 agent 的基础共识 |
| **WebUI 长会话性能** | NanoBot（#5745 大历史回放 P1）、PicoClaw（#3281 输入卡顿）、OpenClaw（SQLite 性能 PR 簇） | 长会话/大上下文场景的前端性能是普适短板 |
| **Failover 与成本控制** | NanoBot（#5675 failover 失效）、Zeroclaw（#10699 计费低估、#10787 无退避重试）、CoPaw（#7719 独立轻量记忆模型） | 多 provider 容错与 token 成本优化并行 |

---

## 5. 差异化定位分析

| 维度 | 分化格局 |
|---|---|
| **功能侧重** | OpenClaw：全栈基座（swarm/多渠道/Workboard）；NanoClaw：code mode 持久编码会话 + 语音通话；Hermes：桌面接管（Bot Screen）+ 单网关架构；NanoBot：轻量网关枢纽 + 自动化平台；CoPaw：插件/记忆体系（ReMeLight）+ 多协议 Driver；Zeroclaw：安全架构主线（Shell 权限/canonical principals）；Moltis：渠道级安全策略精细化 |
| **目标用户** | OpenClaw/Hermes：大规模自托管运维 + Telegram/Slack 重度用户；NanoBot/CoPaw：个人桌面（Windows 占比高）与生产自动化用户；LobsterAI：网易有道生态内本机用户（Electron）；PicoClaw：嵌入式/轻量部署（Sipeed 硬件背景）；EasyClaw：企业客服场景（TK Copilot） |
| **技术架构** | Python 系（OpenClaw、Hermes）；Rust 系（Zeroclaw、Moltis）；Zig（NullClaw）；Go（PicoClaw）；TS/混合（NanoClaw、LobsterAI）。Rust/Zig 项目普遍活跃度低但代码质量护栏强（NullClaw 7,373+ 测试） |
| **存储路线** | OpenClaw 深耕 SQLite（会话/flow task 聚合优化）；NanoClaw 修 SQLite 并发迁移；CoPaw 面临会话/配置丢失——存储可靠性是共性瓶颈 |

---

## 6. 社区热度与成熟度分层

**🚀 快速迭代/功能扩张期**：NanoClaw（code mode + 语音功能簇密集提交）、Zeroclaw（发布工程化 + 安全大 PR）、Hermes（v0.21.0 后架构重构冲刺）

**🔧 质量巩固/稳定打磨期**：OpenClaw（2026.9.x 修复迭代，无新功能版本）、NanoBot（“一天 1 个 P1 + 多个 P2”，临近发版）、Moltis、EasyClaw（稳定发版节奏 v1.9.16）

**⚠️ Bug 爆发/危机应对期**：CoPaw（2.2.x 升级回归集中暴露，6 个修复 PR 待合并、零合并吞吐）、IronClaw、NullClaw（低活跃，需核实被关闭未合并的修复 PR）

**🔴 治理失衡/风险期**：LobsterAI（8 个含高危竞态修复的社区 PR 停滞 5.5 个月，贡献者流失风险高）、PicoClaw（官网 TLS 过期 2+ 天、stale 问题无人响应，项目形象受损）

---

## 7. 值得关注的趋势信号

1. **安全审批从 exec 走向全副作用覆盖**：OpenClaw exec 重校验 + MCP 审批信封、Zeroclaw Shell 权限策略、CoPaw ACP trusted 语义——**“每次外部副作用可门控、可撤销”将成为下代 agent 的标配架构**，建议开发者提前设计审批信封抽象。

2. **幂等性与批次边界持久化成为可靠性新基线**：NanoBot 的 RequestContext + 部分进度持久化代表了从“重试”到“精确恢复”的范式转移，回应的是 agent 外部副作用不可回滚的现实。

3. **MCP 治理从“能连”进入“稳连”阶段**：超时、进程清理、信封兼容、授权流是当前 MCP 落地的主要摩擦面——MCP 生态本身的兼容性债务正在向 agent 宿主转移。

4. **多渠道架构外置化引发安全模型重构**：OpenClaw 渠道插件化后的 origin 冲突（#115367）、Moltis 渠道间策略不对等，提示**插件化与宿主安全门控的边界设计**是架构级课题，而非实现细节。

5. **维护者带宽是最大的隐性风险指标**：同为高质量贡献，NanoBot/Hermes 当周闭环，LobsterAI/Moltis/PicoClaw 数月无响应。对开发者的启示：**选型时“issue 中位响应时间”比 star 数更能预测项目寿命**；对项目方：自动分拣（如 OpenClaw clawsweeper）是规模化的必要投资。

6. **真实生产场景倒逼运维成熟度**：632 agent 部署、headless SSH 服务器、Raspberry Pi 长期运行、Windows 生产环境——用户已越过尝鲜期，**僵尸进程、锁文件、证书续期、代码签名**等传统运维问题正成为 AI agent 项目的核心竞争力要素。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 · 2026-09-13

## 1. 今日速览

NanoBot 今日保持较高活跃度：过去 24 小时 PR 更新 14 条（9 条已合并/关闭，5 条待合并），Issues 更新 4 条（3 新开/活跃，1 已关闭），无新版本发布。开发重心集中在 **WebUI 性能与稳定性优化**（大历史回放、流式刷新开销）和**运行时恢复/工具调用可靠性**两条主线。多位外部贡献者（@xiexiahao、@beemines 等）提交高质量 issue+PR 配对，社区协作生态健康。整体呈“稳定打磨期”特征，距离下一个版本发布可能不远。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日已合并/关闭的重要 PR（9 条），主要推进了三个方向：

**WebUI 性能与体验（@chengyongru 主导）**
- [#5745](https://github.com/HKUDS/nanobot/pull/5745) [P1] 大历史回放改为增量+缓存：对后端回放按消息/记录/字节预算限流、压缩已完成流式 delta、将解析/序列化/gzip 移出事件循环，前端首次加载减为 40 条消息并加 stale-while-revalidate 缓存。**显著改善长会话场景体验**。
- [#5738](https://github.com/HKUDS/nanobot/pull/5738) [P2] 降低长文本流式刷新开销：推理预览截断至 512 UTF-16 码元（避免拆代理对），完整内容移入 tooltip。
- [#5735](https://github.com/HKUDS/nanobot/pull/5735) [P2] 无头服务器登录自解释：检测 `links`/`lynx`/`w3m` 等纯文本浏览器，`--no-open` 场景打印 SSH 端口转发手动指引——直接解决 issue #5726 类痛点。

**Provider 稳定性**
- [#5675](https://github.com/HKUDS/nanobot/pull/5675) [P2] 修复 runner 超时后模型 failover 失效：此前主模型挂起耗尽 deadline 会导致整个链路取消，健康的 fallback 永远不会被尝试。
- [#5613](https://github.com/HKUDS/nanobot/pull/5613) [P2] 清理回放 item ID 与不支持字段，修复 Responses API 回放失败。
- [#5746](https://github.com/HKUDS/nanobot/pull/5746) 新增 DaoXE 网关 provider，生态扩展。

**其他**
- [#5743](https://github.com/HKUDS/nanobot/pull/5743) 设置目录控件简化，Automations 默认日历视图。
- [#5739](https://github.com/HKUDS/nanobot/pull/5739)、[#5752](https://github.com/HKUDS/nanobot/pull/5752) CI/集成相关。

整体评价：一天内落地 1 个 P1 + 多个 P2 修复，WebUI 大会话性能短板基本补齐，failover 逻辑修复提升了生产可用性。

## 4. 社区热点

- **[#5726](https://github.com/HKUDS/nanobot/issues/5726) [CLOSED, P1]** 无头服务器初始密码问题（2 条评论）——用户在 headless 服务器部署后，默认以无 JS 的 `links` 浏览器打开，无法进入 WebUI，也不知道登录密码。**已关闭**，推测由 #5735 的登录引导改进覆盖。诉求：远程/服务器部署场景的首次登录体验。
- **[#5721](https://github.com/HKUDS/nanobot/issues/5721) [OPEN]** MemCode 创始人提出将 MemCode 作为可选的跨部署持久记忆后端。属于商业合作性质的功能提案，尚无维护者明确表态。
- **[@xiexiahao 的 issue+PR 配对](#5747)**（详见第 5、6 节）今日质量最高的社区贡献。

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 |
|---|---|---|
| P1 | [#5726](https://github.com/HKUDS/nanobot/issues/5726) 无头服务器初始密码/登录困惑 | ✅ 已关闭（配合 #5735 修复落地） |
| P1 | [#5633](https://github.com/HKUDS/nanobot/pull/5633) **安全**：session key 路径穿越（`../../etc/passwd` 可写到 sessions 目录外） | 🔶 PR 待合并，已加 `validate_session_key()` 校验，**建议维护者优先 review** |
| P2 | [#5747](https://github.com/HKUDS/nanobot/issues/5747) 恢复机制的崩溃一致性窗口：多工具响应中 tool A 已完成、B 进行中时 crash，checkpoint 可能将全部调用记为 pending，重启后无法区分已完成的外部副作用 | 🔶 已有配对 PR [#5748](https://github.com/HKUDS/nanobot/pull/5748)（在批次边界持久化部分进度） |
| P2 | [#5751](https://github.com/HKUDS/nanobot/pull/5751) 编辑 automation 名称/指令会重算 next run，导致 interval 任务被推迟、due 的一次性任务永不再执行 | 🔶 PR 待合并（有冲突标记） |
| P2 | [#5673](https://github.com/HKUDS/nanobot/pull/5673) WebUI 远程项目路径选择：远程会话误开客户端本地文件选择器 | 🔶 PR 待合并（有冲突标记） |

## 6. 功能请求与路线图信号

- **[#5749](https://github.com/HKUDS/nanobot/issues/5749) 稳定工具调用上下文**：工具实现目前拿不到逻辑调用身份（RequestContext 缺失），无法实现幂等副作用。配对 PR [#5750](https://github.com/HKUDS/nanobot/pull/5750) 已用 ContextVar 方案实现。issue+PR 同日提交、质量高，**大概率近期合入**，是迈向可靠多工具 agent 执行的关键基础设施。
- **[#5747](https://github.com/HKUDS/nanobot/issues/5747) 批次边界持久化恢复**：与 #5749 同属“运行时可靠性”主题，#5748 已就绪。两者结合看，**崩溃恢复/幂等性是下一版本明确方向**。
- **[#5721](https://github.com/HKUDS/nanobot/issues/5721) 外部记忆后端集成**：需求真实（跨会话/跨部署记忆），但涉及第三方商业服务，需维护者权衡是否以插件形式纳入。

## 7. 用户反馈摘要

- **部署场景多样性**：#5726 反映出 headless/SSH 远程部署是真实使用场景，用户对“默认自动打开浏览器”的假设不满；#5735 的改进正是对该痛点的回应。
- **生产可用性关注**：社区贡献集中在 crash recovery、failover、幂等性（#5747/#5749/#5675），说明已有用户在**长时间运行、多工具编排的生产环境**中使用 NanoBot。
- **自动化可靠性**：#5751 揭示“一次性任务编辑后永不执行”这类静默失败，对将 NanoBot 用作定时自动化平台的用户伤害较大。
- **生态诉求**：新 provider（DaoXE）与外部记忆服务的接入请求，表明用户希望 NanoBot 成为可扩展的网关枢纽。

## 8. 待处理积压

- **[#5633](https://github.com/HKUDS/nanobot/pull/5633)**（P1 安全修复，9-02 开启至今未合并）：路径穿越漏洞修复滞留 11 天，**建议维护者优先处理**。
- **[#5673](https://github.com/HKUDS/nanobot/pull/5673)**（P2，9-05 开启，存在冲突）：远程 WebUI 路径选择修复，需 rebase。
- **[#5751](https://github.com/HKUDS/nanobot/pull/5751)**（P2，存在冲突）：cron 待执行任务保留修复。
- **[#5721](https://github.com/HKUDS/nanobot/issues/5721)**：外部合作提案，需维护者表态以避免长期悬置。

---
*数据来源：GitHub API（HKUDS/nanobot），统计窗口 2026-09-12 至 2026-09-13。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-09-13

## 1. 今日速览

今日 Zeroclaw 保持高活跃度：过去 24 小时共 25 条 Issue 更新（19 新开/活跃、6 关闭）和 50 条 PR 更新（38 待合并、12 合并/关闭），无新版本发布。最显著的动向是维护者 @JordanTheJet 新开 v0.8.5 之后的[发布效率追踪 Issue #10814](https://github.com/zeroclaw-labs/zeroclaw/issues/10814)，并同日连发 4 个发布流程修复 PR（#10815–#10818），显示项目正集中投入发布工程化。同时，多条 P1 级 Bug（数据丢失、历史记录丢弃、通知抖动取消 turn）持续修复中，Windows CI 稳定性问题密集暴露。

## 2. 版本发布

过去 24 小时无新版本发布。项目正在为下一个版本做准备：#10814 追踪器明确以 [v0.8.5 发布工作流](https://github.com/zeroclaw-labs/zeroclaw/issues/10814)为基线优化发布效率。

## 3. 项目进展

今日关闭的 Issue（6 条）多为修复落地：

- **#10534（已关闭）** bounded delegate 静默剥离 delegate 工具、违反 delegation_policy 配置的高风险安全策略 Bug 已修复。
- **#10689（已关闭）** Telegram 语音回复以 `[` 开头（ElevenLabs v3 音频标签）时被静默跳过的问题已修复。
- **#10277（已关闭）** zerorelay 镜像基础标签改为按 digest 固定，供应链安全加固完成。
- **#10731（已关闭）** `zeroclaw service logs` 在 macOS/Windows/OpenRC 上无输出的 P1 问题已修复。
- **#10699（已关闭）** 成本账本将缓存写按普通输入计价、低估 cache miss 成本的计费 Bug 修复。
- **#10436（已关闭）** OpenRouter 原生流式使用总请求超时导致响应被截断的问题修复。

PR 方面 12 条合并/关闭（含长期大型 PR 如 #8862 插件 webhook ingress、#8949 已 rebase 待推进），38 条待合并，其中发布工程批次（#10815 dev 依赖发布顺序、#10816 Apple 公证前置检查、#10817 版本准备 fail-closed、#10818 文档 stable 提升免重建）为今日新增，预计短期合入。

## 4. 社区热点

- **[#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734)**（6 条评论，最多）：Windows nextest 顾问任务暴露 `RpcDispatcher::process_line` 距 2MB 栈保护仅 2%——社区关注运行时栈深度隐患与 Windows CI 稳定性，该话题衍生出 #10793、#10794、#10805 三个关联 Issue。
- **[#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610)**（RFC #7155 Shell V1 权限策略 Phase 0+1，XL 体量）：安全策略主线大 PR，今日持续更新，处于 needs-author-action，是近期最核心的安全架构推进。
- **[#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785)**：多会话并行时通知延迟导致所有运行中 turn 被取消，涉及 ~200k token 大上下文场景，P1 高风险，zerocode 用户核心痛点。
- **[#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788)**：ACP turn 失败时已接受的 prompt 和已完成的工具交换不写入持久历史——用户对会话数据完整性的强烈诉求。

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 说明 | 状态 |
|---|---|---|---|
| S0 数据丢失 | [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) | Markdown memory 后端并发 `store()` 覆盖写导致条目静默丢失，已 accepted，尚无 fix PR 链接 | P1，待修复 |
| S1 工作流阻断 | [#10807](https://github.com/zeroclaw-labs/zeroclaw/issues/10807) | MCP 连接一次恢复失败后永久"中毒"（HTTP/SSE 服务短暂不可达即触发） | 新报，待分类 |
| S2 | [#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788) | 失败 turn 丢弃全部持久历史 | in-progress |
| S2 | [#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785) | 通知延迟 → 批量取消运行中 turn | in-progress |
| S2 | [#10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787) | 单候选流恢复忽略 provider_retries，529 过载无退避重试 | in-progress |
| S2 | [#10795](https://github.com/zeroclaw-labs/zeroclaw/issues/10795) | REPL 未启用 IUTF8，Backspace 删除字节而非字符 | accepted |
| S3 | [#10796](https://github.com/zeroclaw-labs/zeroclaw/issues/10796) | ZeroCode 聊天输入忽略 Delete 键（good first issue） | accepted |
| CI 稳定性 | [#10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793)、[#10794](https://github.com/zeroclaw-labs/zeroclaw/issues/10794)、[#10805](https://github.com/zeroclaw-labs/zeroclaw/issues/10805) | Advisory Windows nextest 多起环境相关 flaky 失败 | in-progress |

## 6. 功能请求与路线图信号

- **[#10814 发布效率追踪器](https://github.com/zeroclaw-labs/zeroclaw/issues/10814)** + 配套 PR #10815–#10818：明确的下一版本前置工作，发布流程自动化将是近期重点。
- **[#10812](https://github.com/zeroclaw-labs/zeroclaw/issues/10812)**（新）：WhatsApp PDF 发送填充 `jpegThumbnail` 以支持手机端预览——channel 体验类小功能，易纳入。
- **[#10400](https://github.com/zeroclaw-labs/zeroclaw/issues/10400)**：可配置 Telegram 未授权发送者提示，in-progress，预计近期落地。
- **[#8733](https://github.com/zeroclaw-labs/zeroclaw/issues/8733)**：models.dev 目录仅解析模型 ID、丢弃 vision 等能力——长期悬挂（7 月开），如配合 [#9535 上下文压缩 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) 的模型感知方向可能提上日程。
- 安全主线（#10610 shell 权限策略、#10248 canonical principals、#10337 git allowed roots）持续大步推进，构成下一版本的安全主题。

## 7. 用户反馈摘要

- **多会话大上下文用户**：并行多个 ~200k token 会话时遭遇 turn 被批量取消（#10785），对 zerocode 稳定性不满。
- **ACP/Code 用户**：失败 turn 丢失已完成的工具交换（#10788），影响长任务可恢复性，诉求“部分成功也要持久化”。
- **自托管运维用户**：MCP 服务重启/笔记本休眠后连接永久失效（#10807），需要超过一次的恢复重试。
- **Windows/macOS 桌面用户**：`service logs` 无输出（#10731，已修复）、REPL 多字节字符删除异常（#10795）——非 Linux 平台的二等公民体验仍是痛点。
- **贡献者生态健康**：维护者代为重写 PR 描述并保留原作者署名（#9753、#10169），社区治理规范度较高；多个 good first issue（#10789、#10792、#10796）持续开放。

## 8. 待处理积压

- **[#8733](https://github.com/zeroclaw-labs/zeroclaw/issues/8733)**（7 月 5 日开，status:no-stale）：models.dev 能力字段被丢弃，影响 vision 判断正确性，2 个多月无实质进展，建议维护者排期。
- **[#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819)**（8 月 7 日开，XL，needs-author-action）：多模态图像像素级校验大 PR 长期滞留，需维护者介入推进或拆分。
- **[#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610)、[#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337)、[#9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753)** 等多个 XL 级安全 PR 均处 needs-author-action/needs-maintainer-review，是合并队列的主要瓶颈。
- **[#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797)** S0 数据丢失已 accepted 但未见对应 fix PR，建议优先处理。
- **#10791、#10792** 等 follow-up 任务已挂起数日，属低风险但应有认领者。

---
*数据来源：zeroclaw-labs/zeroclaw GitHub API（截至 2026-09-13）。总体健康度：高——Issue 响应快、标签体系完善、修复吞吐稳定；主要风险在于大型安全 PR 积压与 Windows CI flaky 问题。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-09-13

## 1. 今日速览

项目保持高度活跃：过去 24 小时 Issues 更新 50 条（新开/活跃 43，关闭 7），PR 更新 50 条（待合并 41，已合并/关闭 9），无新版本发布。核心开发者 @teknium1 今日集中提交了多个大型重构 PR，将平台适配器、密钥脱敏、TS 共享代码等重复实现收敛到统一路径，代码质量治理是当前主线。社区侧，Windows 平台兼容性与 Desktop UX 类 bug 持续累积，大量 issue 被标记 duplicate，显示问题收敛期与 v0.21.0 后的消化期叠加。整体健康度良好，但 P2 级 bug 积压值得关注。

## 2. 版本发布

今日无新版本发布。（v0.21.0 "Pantheon" 后的后续修复仍在 PR 阶段，见下文。）

## 3. 项目进展

今日以**大型重构与安全加固 PR**为主，无正式 release，但主线推进明显：

- **统一网关会话所有权（P1）** [#106742](https://github.com/NousResearch/hermes-agent/pull/106742)：CLI/TUI/Desktop/API/ACP/bot/cron 全部挂载到同一 gateway 拥有的会话，一个 FIFO、一份持久化状态。这是架构级变更，直接回应了社区长期诉求（如 #71726 跨平台实时会话同步，该 issue 已关闭）。
- **安全：MCP 凭据脱敏落地** [#108695](https://github.com/NousResearch/hermes-agent/pull/108695)（已关闭，salvage 自 #97466）：MCP 探测错误与 `hermes mcp test` 输出不再泄漏 Bearer 片段，对应 issue [#97460](https://github.com/NousResearch/hermes-agent/issues/97460) 已关闭。**安全修复已闭环**。
- **统一秘密模式源** [#109565](https://github.com/NousResearch/hermes-agent/pull/109565)：`agent/redact.py` 成为唯一 secret-pattern 来源（A2A、gateway chat、monitoring 共用一个 `redact_for_egress`）。
- **平台适配器收敛** [#109568](https://github.com/NousResearch/hermes-agent/pull/109568)：文本批处理、exec 审批、standalone 错误、锁与重试统一走 base 路径，Discord/WeCom 的散点修复下沉为通用实现。
- **前端去重** [#109567](https://github.com/NousResearch/hermes-agent/pull/109567)：7 处 TS 重复集群收敛至 `@hermes/shared`，desktop slash 黑名单由 Python 命令注册表派生。
- **插件层清理** [#109563](https://github.com/NousResearch/hermes-agent/pull/109563)：memory provider 线程绑定 profile 上下文，3 个 credential shim 不再吞 `UnscopedSecretError`。
- **Bot Screen（P2 安全加固）** [#109544](https://github.com/NousResearch/hermes-agent/pull/109544)：凭据不进入子进程环境、Xauthority 经 stdin 传递、viewer token 铸造——补强 [#108914](https://github.com/NousResearch/hermes-agent/pull/108914) 的 per-bot Xfce 桌面串流功能。
- **运维体验**：[#109562](https://github.com/NousResearch/hermes-agent/pull/109562) 为升级后自动 multiplex 迁移增加 `gateway.auto_migrate` 退出开关；[#109020](https://github.com/NousResearch/hermes-agent/pull/109020) 允许 webhook 订阅绑定 profile；[#109560](https://github.com/NousResearch/hermes-agent/pull/109560) 修复 kanban 探测 profile/scoped 路径错误；[#109559](https://github.com/NousResearch/hermes-agent/pull/109559) 对齐 vault 配置默认值。
- **文档**：[#108470](https://github.com/NousResearch/hermes-agent/pull/108470)（已关闭）澄清持久记忆需要会话边界——回应了那篇 HN 热帖 "I think I used the Hermes Agent wrong"。

## 4. 社区热点

- **macOS Desktop 底部 composer 误拖拽** [#101318](https://github.com/NousResearch/hermes-agent/issues/101318)（评论 5，今日仍活跃）：16px 的 peel 手势过于敏感且无法关闭，是反复出现的 UX 投诉。同一作者还报了 [#101311](https://github.com/NousResearch/hermes-agent/issues/101311)（输出区横向滚动条），Desktop 细节打磨诉求集中。
- **muse-spark-1.3-contributor 404** [#101673](https://github.com/NousResearch/hermes-agent/issues/101673)（评论 4）：模型目录列出但 chat completions 全部 404，与 1.2 版本的 #95837 症状相同，属 Nous 自家 provider 的目录/路由一致性问题。
- **假 iOS 客户端/恶意软件** [#101627](https://github.com/NousResearch/hermes-agent/issues/101627)（评论 3，👍 1）：用户呼吁官方 iOS 客户端并处理山寨应用，涉及品牌安全与用户安全，值得官方公开回应。
- **Telegram 中途消息丢失回复上下文** [#101866](https://github.com/NousResearch/hermes-agent/issues/101866)（P2）：busy/queued 路径不附加 reply-to 前缀，已导致**错误接收者发送**事故，属实际生产风险。
- **Matrix E2EE 身份冲突** [#102181](https://github.com/NousResearch/hermes-agent/issues/102181)（P3 但后果严重）：cron 投递在 live adapter 的 crypto store 上创建第二 E2EE 身份，导致 OTK 耗尽、入站解密永久失效直至重启。

## 5. Bug 与稳定性（按严重度）

| 级别 | 问题 | 状态 |
|---|---|---|
| P2 | Telegram mid-turn 消息丢 reply-to → 错发他人 [#101866](https://github.com/NousResearch/hermes-agent/issues/101866) | open，duplicate 标记，暂无专门 fix PR |
| P2 | gateway/status.py 锁探测误删 live gateway 锁/pid 文件 → 持续误报未运行 [#101532](https://github.com/NousResearch/hermes-agent/issues/101532) | open，尚无 fix PR |
| P2 | Desktop v0.21.0 后本地后端侧栏 "No sessions" [#101854](https://github.com/NousResearch/hermes-agent/issues/101854) | open，needs-repro |
| P2 | Windows 更新误判 Scheduled Task 为 SCM 服务 → Access Denied [#100645](https://github.com/NousResearch/hermes-agent/issues/100645) | open |
| P2 | Windows Smart App Control 阻止未签名 Python 启动 [#99590](https://github.com/NousResearch/hermes-agent/issues/99590) | open，需代码签名 |
| P2 | Windows browser_exec 遇非 ASCII 内容静默返回 null [#102500](https://github.com/NousResearch/hermes-agent/issues/102500) | open |
| P2 | skill_view 去重返回无内容 → 无限工具调用循环 [#101518](https://github.com/NousResearch/hermes-agent/issues/101518) | open |
| P2 | vision 辅助路径对 keyless provider 401 [#101925](https://github.com/NousResearch/hermes-agent/issues/101925) | open |
| P2 | 主模型已支持视觉仍走辅助模型 [#98220](https://github.com/NousResearch/hermes-agent/issues/98220) | 已关闭 |
| P3 | Matrix E2EE 双身份破坏解密 [#102181](https://github.com/NousResearch/hermes-agent/issues/102181) | open |
| P3 | Python 3.14 兼容性（ThreadPoolExecutor 签名变更）[#100982](https://github.com/NousResearch/hermes-agent/issues/100982) | open |
| P3 | photon threaded reply 未处理 [#100663](https://github.com/NousResearch/hermes-agent/issues/100663) | open |

已闭环的安全问题：#97460（Bearer 泄漏）+ #95232（DeepSeek 思考挂起）+ #97001（GLM reasoning clamp）均已随修复关闭。

**明显模式**：Windows 平台问题（3 项 P2）与 session-state 风险标记密集出现，重构 PR #106742 有望系统性消化后者。

## 6. 功能请求与路线图信号

- **跨平台实时会话同步**：社区强烈诉求（#71726 已关闭），#106742 正是其实现载体，**大概率进入下一版本**。
- **Bot Screen 屏幕接管** [#108914](https://github.com/NousResearch/hermes-agent/pull/108914) + 加固 [#109544](https://github.com/NousResearch/hermes-agent/pull/109544)：接近合入，为差异化亮点功能。
- **Google Antigravity 作为 provider** [#102499](https://github.com/NousResearch/hermes-agent/issues/102499)：用户需求明确，暂无对应 PR。
- **Desktop 细节类**：会话行 profile 标记 [#102597](https://github.com/NousResearch/hermes-agent/issues/102597)、代码块折叠阈值可配置 [#102149](https://github.com/NousResearch/hermes-agent/issues/102149)、群聊插件上限可配置 [#101101](https://github.com/NousResearch/hermes-agent/issues/101101)、隐藏 "This device" 连接 [#101684](https://github.com/NousResearch/hermes-agent/issues/101684)——均为低风险小改，适合社区贡献。
- **插件中断信号** [#99930](https://github.com/NousResearch/hermes-agent/pull/99930)（`agent_loop_stopped` hook）长期 open，插件生态建设信号。
- **图像生成**：Meta Muse Image @ $0.01/image [#100010](https://github.com/NousResearch/hermes-agent/pull/100010) 扩充 FAL 目录。

## 7. 用户反馈摘要

- **真实使用场景浮现**：Raspberry Pi + Telegram 长期运行（HN 博文事件）、AionUi/ACP 编辑器集成、远程 LXC 后端 + 桌面客户端、Windows 生产部署——多平台多形态使用已成主流。
- **痛点集中在**：① Windows 二等公民感（更新、签名、编码三连击）；② Desktop 交互细节（composer 拖拽、横向滚动、session 列表）；③ messaging 平台的会话状态/投递正确性（Telegram 错发、Matrix 解密）；④ 模型 provider 配置面（GLM reasoning clamp、DeepSeek、vision 路由）。
- **正面信号**：架构级重构（单网关会话、统一脱敏、Bot Screen）响应了社区最深的痛点；文档 PR 持续跟进功能落地。
- **信任风险**：#101627 山寨 iOS 应用提示官方需加强品牌保护与客户端路线沟通。

## 8. 待处理积压

- **#101318 / #101311**（macOS Desktop composer/滚动，9/2 报告，评论最多的 issue，至今无 fix PR 引用）
- **#101532**（gateway 锁文件自毁，影响所有 launchd 网关用户的可用性，无修复）
- **#101866**（Telegram 错发，有实际事故后果）
- **#100645 / #99590**（Windows 更新与签名，属安装链路核心）
- **#102499**（AGY provider，功能请求无回应）
- 长期 open 的 **#99930**（agent_loop_stopped hook）和 **#106742**（P1 单网关会话）为最关键待合并 PR，建议优先 review，#106742 落地后可批量关闭 session-state 类 sweeper 标记的积压 issue。

---
*数据来源：GitHub API（Issues/PR，截至 2026-09-13）。链接格式可替换为完整 URL：`https://github.com/NousResearch/hermes-agent/issues/<编号>`。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**日期：** 2026-09-13
**仓库：** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

PicoClaw 今日保持中等活跃度，过去 24 小时共有 **4 条 Issue 更新（全部为 OPEN，无关闭）** 和 **3 条 PR 更新（全部待合并，无合并/关闭）**。今日最紧迫的事件是 [#3377](https://github.com/sipeed/picoclaw/issues/3377)：官网 picoclaw.io 的 TLS 证书已于 9 月 10 日过期，导致项目主页对所有浏览器不可访问，属于需要立即响应的基础设施事故。社区贡献方面，OAuth token 刷新 scope 修复 PR（[#3378](https://github.com/sipeed/picoclaw/pull/3378)）在报告 TLS 问题的同日提交，显示外部贡献者仍在积极补位。整体来看项目社区参与健康，但维护者的合并响应速度和基础设施运维需要加强。

---

## 2. 版本发布

过去 24 小时**无新版本发布**。

---

## 3. 项目进展

今日**无 PR 被合并或关闭**，3 条待合并 PR 均处于 OPEN 状态：

| PR | 内容 | 状态 |
|---|---|---|
| [#3378](https://github.com/sipeed/picoclaw/pull/3378) | 修复 `RefreshAccessToken` 中硬编码 `"openid profile email"` scope 的问题，改用 `OAuthProviderConfig.Scopes` 配置值 | 🆕 昨日新开，等待审查 |
| [#3368](https://github.com/sipeed/picoclaw/pull/3368) | 文档：新增 Parallel Search MCP 配置示例，为 PicoClaw 提供免 API key 的网页搜索/页面提取能力 | ⚠️ stale |
| [#3367](https://github.com/sipeed/picoclaw/pull/3367) | 文档：在原生 MCP CLI 快速开始中加入 Pilot Protocol 配置命令及健康检查说明 | ⚠️ stale |

**评估：** 项目近一日处于“贡献流入但无产出合并”状态。#3378 是一条有实际价值的认证修复，建议维护者优先审查；两条文档 PR 长期滞留（已标 stale），反映外部文档贡献的接纳流程较慢。

---

## 4. 社区热点

### 🔥 最活跃：#3287 — IRC 长消息支持（12 条评论）
**[Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)** | 👍 0 | 创建于 2026-07-22 | 已标 stale

IRC 协议限制单条消息 512 字节，超长消息会被客户端自动切分，导致 PicoClaw 将同一条消息误识别为多条独立消息。用户 @superuser-does 要求 PicoClaw 理解 IRCv3 下的消息分段语义并做合并处理。12 条评论说明 IRC 用户群体对通道适配质量的关注较高，但 issue 已 stale，维护者响应不足。

### 🔥 次活跃：#3281 — Web UI 输入框卡顿（11 条评论）
**[Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)** | 👍 2 | 创建于 2026-07-21 | 已标 stale

会话历史稍长后，Web UI 聊天输入框输入严重卡顿（环境：PicoClaw 0.3.1 / Go 1.25.11）。这是用户直接可感知的性能问题，且获得 2 个 👍，是受影响用户最多的体验类 bug 之一，但至今无修复 PR、已标 stale。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重：官网 TLS 证书过期
**[Issue #3377](https://github.com/sipeed/picoclaw/issues/3377)** | 👍 1 | 2026-09-12 新报

picoclaw.io 的 TLS 证书于 2026-09-10 23:59:59 UTC 过期，所有浏览器和 TLS 客户端均拒绝连接，项目主页完全不可用。报告者明确指出此问题时间敏感，拖得越久影响越大。**目前无 fix PR，需维护者立即续期证书。** 这是今日最高优先级事项。

### 🟠 高：Web UI 输入卡顿
**[Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)** | 👍 2 | stale，无 fix PR

长会话历史下输入框性能劣化，疑似每次按键触发全量历史渲染。影响日常使用体验，建议排查虚拟滚动/增量渲染。

### 🟡 中：OAuth Token 刷新 scope 硬编码（已有 fix PR）
**[PR #3378](https://github.com/sipeed/picoclaw/pull/3378)** | 昨日提交

`RefreshAccessToken` 始终发送硬编码的 `"openid profile email"`，覆盖了用户在 `OAuthProviderConfig.Scopes` 中的自定义配置，可能导致自定义 OAuth 提供商刷新失败。**已有社区修复 PR 等待合并。**

### 🟡 中：IRC 长消息切分识别错误
**[Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)** | stale，无 fix PR

---

## 6. 功能请求与路线图信号

| 功能请求 | 链接 | 纳入下一版本可能性 |
|---|---|---|
| OpenAI 兼容自定义 Provider | [#3366](https://github.com/sipeed/picoclaw/issues/3366) | **较高** — 提出者已给出实现路径（复制 OpenAI provider 改造），支持自托管路由（如 9Router），实现成本低、需求明确 |
| IRC 长消息合并处理 | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | 不确定 — 讨论充分但已 stale，无对应 PR |

**路线图信号：** #3366 反映用户强烈的多后端/自托管需求，与已合并生态中的多 Provider 架构方向一致，是最有可能进入下一版本的功能。文档类 PR #3367/#3368 提示 MCP 生态集成（Parallel Search、Pilot Protocol）是社区自发扩展的热点方向。

---

## 7. 用户反馈摘要

- **通道协议适配不完善**：IRC 用户（#3287）期望 PicoClaw 像对原生消息一样处理协议层切分，体现重度通道用户对语义保真的高要求。
- **Web UI 性能是主要痛点**：#3281 的 11 条评论和 2 个 👍 表明长会话场景下的前端性能问题影响面广，用户明显不满。
- **自托管/自定义后端诉求强烈**：#3366 希望接入自托管 LLM 路由，说明用户群中自部署比例不低。
- **基础设施可靠性受质疑**：#3377 中用户主动报告官网证书过期，说明社区关注项目门面，证书续期不及时会损害项目专业形象。

---

## 8. 待处理积压

⚠️ **需要维护者优先关注：**

1. **[🔴 紧急] [#3377](https://github.com/sipeed/picoclaw/issues/3377)** — 官网 TLS 证书过期，全站不可访问，已持续 2+ 天，需立即续期。
2. **[PR 待审] [#3378](https://github.com/sipeed/picoclaw/pull/3378)** — 昨日提交的 OAuth scope 修复，应尽快审查合并。
3. **[stale 高影响 Bug] [#3281](https://github.com/sipeed/picoclaw/issues/3281)** — Web UI 输入卡顿，7 月至今无实质回应，有 2 个 👍。
4. **[stale 功能讨论] [#3287](https://github.com/sipeed/picoclaw/issues/3287)** — IRC 长消息，12 条评论后被 stale，建议给出 roadmap 判断（做/不做）。
5. **[stale 文档 PR] [#3367](https://github.com/sipeed/picoclaw/pull/3367)、[#3368](https://github.com/sipeed/picoclaw/pull/3368)** — 两条社区文档贡献已 stale，若不打算合并应明确关闭，避免消耗贡献者热情。
6. **[新功能请求] [#3366](https://github.com/sipeed/picoclaw/issues/3366)** — OpenAI 兼容 Provider，实现成本低，建议尽快回应并排期。

---

**健康度小结：** 社区贡献输入稳定（Bug 报告质量高、修复 PR 主动），但维护者侧存在三方面短板：**响应延迟（两条高影响 issue 被 stale）、合并吞吐为零（3 PR 滞留）、基础设施运维缺位（TLS 证书过期）**。今日首要行动项：续期 picoclaw.io 证书并审查合并 #3378。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-09-13

## 1. 今日速览

NanoClaw 今日保持高强度开发节奏：过去 24 小时共有 **5 条 Issue 更新**（2 新开/活跃，3 关闭）和 **25 条 PR 更新**（14 待合并，11 已合并/关闭），无新版本发布。核心团队（@glifocat、@gavrielc）集中修复了 setup 安装链路的一系列缺陷，并推进了 "code mode" 持久编码会话、语音通道等大型功能。Issue 关闭速度与修复 PR 一一对应， bug 修复响应效率高，项目健康度良好。

## 2. 版本发布

今日无新版本发布。主分支处于持续集成状态，大量修复已合入 `main`，可能为下一个小版本做准备。

## 3. 项目进展

今日合并/关闭 11 个 PR，主要成果：

**Setup/安装链路修复（批量落地）：**
- [PR #3766](https://github.com/nanocoai/nanoclaw/pull/3766) — SQLite 迁移写入锁下复查，修复并发迁移失败（对应 Issue #3765）
- [PR #3770](https://github.com/nanocoai/nanoclaw/pull/3770) — `WEBHOOK_PORT` 终于能从 `.env` 读取生效（关闭 7 月遗留 Issue #2901）
- [PR #3763](https://github.com/nanocoai/nanoclaw/pull/3763) — 清理旧版 `/add-opencode` 遗留的 Dockerfile guard 测试（对应 Issue #3762）
- [PR #3767](https://github.com/nanocoai/nanoclaw/pull/3767) / [PR #3773](https://github.com/nanocoai/nanoclaw/pull/3773) — 注册表技能拷贝失败时保留目标文件、支持单分支克隆的显式 tracking ref fetch
- [PR #3768](https://github.com/nanocoai/nanoclaw/pull/3768) — Linux nohup fallback 服务启动并验证（30 秒超时）
- [PR #3776](https://github.com/nanocoai/nanoclaw/pull/3776) — 下载的安装器用系统 shell 绝对路径执行，修复 exe.dev 镜像自 2026-09-09 起的 PATH 解析问题
- [PR #3774](https://github.com/nanocoai/nanoclaw/pull/3774) — OneCLI 网关证书文件跨重启持久化，修复 `EISDIR` 阻塞新 agent 启动
- [PR #3758](https://github.com/nanocoai/nanoclaw/pull/3758) / [PR #3754](https://github.com/nanocoai/nanoclaw/pull/3754) — Setup 向导不再重复询问已回答的 portal 问题；未注册浏览器跳转只打印一个链接
- [PR #3782](https://github.com/nanocoai/nanoclaw/pull/3782) — `GatewayProviderInput` 增加 `containerName` 字段（小规模 API 变更）

**待合并的大型功能（14 个 open PR 中）：**
- [PR #3783](https://github.com/nanocoai/nanoclaw/pull/3783) — **code mode**：tmux 持久 Claude Code 会话、沙箱操作动词、边界审批
- [PR #3784](https://github.com/nanocoai/nanoclaw/pull/3784) — 社区门户：远程终端 + 会话聊天界面
- [PR #3764](https://github.com/nanocoai/nanoclaw/pull/3764) / [PR #3772](https://github.com/nanocoai/nanoclaw/pull/3772) — `/add-voice` 全双工浏览器语音通话（GPT-Live-1）

整体评估：setup 稳定性显著提升，code mode 与语音通道代表项目向“完整个人 AI 助手平台”演进的路线图。

## 4. 社区热点

- [Issue #3787](https://github.com/nanocoai/nanoclaw/issues/3787)（OPEN，1 评论）— 全新安装跳过 provider 选择器并静默选中 Claude，直接影响新用户首体验；修复 PR [#3788](https://github.com/nanocoai/nanoclaw/pull/3788) 当天即由 @glifocat 提交，响应迅速。
- [Issue #3785](https://github.com/nanocoai/nanoclaw/issues/3785) — @marcuslannister 报告 `channels` 分支 `slack.ts` 引用了未落到 `main` 的 `ChatSdkBridgeConfig.extractRawText`，暴露分支同步/发布流程问题，目前**尚无对应修复 PR**，值得维护者关注。

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | [#3787](https://github.com/nanocoai/nanoclaw/issues/3787) 新装跳过 provider picker，静默选 Claude | ✅ 有 fix：PR #3788（open） |
| 中 | [#3785](https://github.com/nanocoai/nanoclaw/issues/3785) channels 分支引用 main 上不存在的 API | ❌ 暂无 fix PR |
| 中 | #3765（已关闭）并发 SQLite 迁移失败 | ✅ PR #3766 已合并 |
| 低 | #3762（已关闭）旧版 add-opencode 遗留测试文件 | ✅ PR #3763 已合并 |
| 低 | #2901（已关闭）`.env` 中 `WEBHOOK_PORT` 被静默忽略 | ✅ PR #3770 已合并，7 月老账清偿 |

## 6. 功能请求与路线图信号

- **语音交互**：`/add-voice`（PR #3764/#3772）采用 skill-only 架构，说明项目正通过 registry 分支分发通道适配器，预计下版本落地。
- **持久编码会话（code mode）**：PR #3783 + #3784 + #3786（typing 指示器跟随 runner turn 状态）构成完整功能簇，core-team 密集提交，是明确的近期路线图重心。
- **Codex 结构化认证**：[PR #3489](https://github.com/nanocoai/nanoclaw/pull/3489) 持续更新中（8/23 至今），配合 #3788 恢复 provider picker，多 provider 方向明确。

## 7. 用户反馈摘要

- **新用户首装体验是痛点集中区**：#3787（静默选 Claude）、#3765（迁移崩溃）、#3768（Linux fallback 不启动）均为 fresh install 场景；用户期待安装向导“每一问都问、每一步都验证”。
- **配置静默失效引发不信任**：#2901 中用户指出 `.env` 是文档推荐的配置位置却静默无效，属“无错误的失败”，这类问题应系统性排查（今日 webhook 修复是好的开始）。
- **macOS 用户（@glifocat）是主要测试力量**，报告精准（附 commit hash），反馈质量高。

## 8. 待处理积压

- [Issue #3785](https://github.com/nanocoai/nanoclaw/issues/3785) — channels 分支 API 不一致，0 评论无人响应，建议尽快分派。
- [PR #3489](https://github.com/nanocoai/nanoclaw/pull/3489) — Codex 认证重构开放已 3 周，接近合并请加速 review。
- [PR #3750](https://github.com/nanocoai/nanoclaw/pull/3750) — `/update-nanoclaw` 控制器无法加载（缺 `provider-contract-verifier.ts` 提取），开放 4 天，影响用户自更新能力，优先级应提升。

---
*数据来源：NanoClaw GitHub (qwibitai/nanoclaw)，统计窗口 2026-09-12 至 2026-09-13。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报（2026-09-13）

## 1. 今日速览

NullClaw 今日整体活跃度处于低位：过去 24 小时无新增 Issue、无新版本发布，仅有 1 条 PR 更新。唯一的动态是 [PR #996](https://github.com/nullclaw/nullclaw/pull/996) 于昨日（09-12）被关闭，涉及 MCP stdio 传输层的超时处理修复。项目核心开发节奏平稳，处于维护与质量打磨阶段，暂无社区热点讨论。

## 2. 版本发布

今日无新版本发布。最新 Release 记录为空，建议关注近期是否有针对 MCP 稳定性修复的版本迭代。

## 3. 项目进展

- **[PR #996](https://github.com/nullclaw/nullclaw/pull/996) fix(mcp): bound stdio response waits — 已关闭**
  - 作者：@be-student | 创建于 2026-09-06，最后更新 2026-09-12
  - 内容：修复 [Issue #991](https://github.com/nullclaw/nullclaw/issues/991)，为 stdio MCP 响应读取应用 `timeout_ms` 超时限制；请求超时时会终止服务器整个进程组；初始化失败时也会清理已派生的子进程，避免僵尸进程残留。
  - 验证：`zig build test --summary all` 通过（7,373 个测试通过，9 个跳过），并通过 `ReleaseSmall` 优化构建验证。
  - 意义：这是 MCP stdio 传输健壮性的实质性改进，解决了此前无界等待可能导致智能体挂起的问题，对长时间运行的 Agent 场景尤为重要。⚠️ 注意该 PR 状态为 CLOSED 而非 MERGED，建议确认是被合并到其他分支、被替代实现，还是被拒绝——这将影响 #991 是否真正得到修复。

## 4. 社区热点

过去 24 小时无活跃讨论的 Issues 或 PRs，今日无社区热点。

## 5. Bug 与稳定性

今日无新增 Bug 报告。相关存量问题：

- **[Issue #991](https://github.com/nullclaw/nullclaw/issues/991)（中高严重度）**：stdio MCP 响应等待无超时上限，可能导致进程组泄漏/挂起。已有修复 PR #996（已关闭），建议核实修复是否已实际落地。

## 6. 功能请求与路线图信号

今日无新功能请求。从近期提交方向看，开发重心集中在 MCP 传输层的超时控制与进程生命周期管理，可推测下一阶段方向为**提升 MCP 集成的可靠性与资源清理**。

## 7. 用户反馈摘要

今日无 Issue 评论数据可供提炼。近一周信号（来自 PR #996）显示：贡献者关注 MCP 集成中子进程管理与超时语义的正确性，反映出使用 stdio MCP 服务器的用户可能遭遇过挂起问题。

## 8. 待处理积压

今日数据窗口内未发现长期未响应的 Issue/PR。建议维护者关注：

1. **确认 PR #996 的关闭原因**（未合并即关闭，Issue #991 可能仍处 Open 状态）；
2. 若 #991 未修复，考虑重开修复或说明替代方案。

---
*数据来源：NullClaw GitHub 仓库（过去 24 小时）。总体评估：项目健康度良好（测试覆盖 7,373+），但今日活跃度低，社区互动有待提升。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-09-13

## 1. 今日速览

今日 IronClaw 仓库整体活跃度处于**低位运行**状态：过去 24 小时无新 Issue、无新版本发布，PR 活动仅 2 条（1 开 1 关）。尽管数量不多，但两条 PR 质量较高——一条是针对 turns 状态血缘机制的回归测试补全，另一条是 assistant 共享频道断连区分的修复落地，表明维护者仍在稳定推进测试加固与消息通道体验打磨。项目无发版节奏更新，处于持续维护期。

## 2. 版本发布

今日无新版本发布。（省略详细说明）

## 3. 项目进展

- **[#8076 [CLOSED] fix(assistant): distinguish disconnected shared channels](https://github.com/nearai/ironclaw/pull/8076)**（作者 @be-student）
  该修复解决了将“已配对用户的共享频道断连”误判为“未配对账号”的问题。PR 为用户消息与 bot 命令两类场景分别渲染了频道特定的引导提示，并确保拒绝分类在 product 层、adapter 层及 OpenAI 兼容接口层保持一致，同时更新了 Slack capabilities。此修复提升了 Slack 等共享频道集成场景下的错误提示准确性与多端一致性，是今日对用户体验有实际价值的落地改动。

- **[#8098 [OPEN] test(turns): pin state-derived lineage drop](https://github.com/nearai/ironclaw/pull/8098)**（作者 @huiq777，创建于 2026-09-12，仍待合并）
  在既有 terminal-rewrite lineage 测试旁补齐了缺失的逆向回归测试，验证 claim 元数据初始携带 depth、activation provenance 与 descendant cap 三个血缘字段，而后续由 `TurnRunState` 派生的快照会**有意地**省略这三项。该测试将这一“故意丢弃”行为固化为契约，防止未来重构时被误当作回归“修复”，对测试基础设施是重要加固，当前待 review。

**整体评估**：今日推进以“防回归 + 边界修复”为主，属于质量护栏型贡献，项目稳步向前但无功能性大步推进。

## 4. 社区热点

今日无活跃 Issue，PR 评论数据缺失（评论数为 undefined），无法识别明显的讨论热点。从 PR 主题可侧面观察社区关注点集中在：

- **共享频道 / Slack 集成的配对与连接状态管理**（[#8076](https://github.com/nearai/ironclaw/pull/8076)）
- **Turns 状态管理与血缘元数据的语义精确性**（[#8098](https://github.com/nearai/ironclaw/pull/8098)）

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归 Issue。

- ⚠️ 间接信号：[#8076](https://github.com/nearai/ironclaw/pull/8076) 表明此前存在共享频道断连误分类问题，**已有 fix PR 并关闭**，属低严重度 UX/分类缺陷。

## 6. 功能请求与路线图信号

今日无新功能请求。可推断的路线图信号：

- Slack / 共享频道集成仍是持续投入方向（#8076 涉及 Slack capabilities 更新），后续版本可能继续强化多平台适配器的一致性。
- turns 血缘机制的“快照裁剪”行为已被 #8098 作为契约固化，暗示这块 API 语义趋于稳定，短期内不应期待 lineage 字段回归派生快照。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼用户痛点。从 #8076 的修复内容反向推断，此前用户在共享频道断连场景下可能收到误导性的“未配对”提示，造成排障困惑——该问题已修复。

## 8. 待处理积压

- **[#8098 test(turns): pin state-derived lineage drop](https://github.com/nearai/ironclaw/pull/8098)**：状态 OPEN，创建仅 1 天，尚不算积压，但建议维护者及时 review 合并，避免测试加固类 PR 长期滞留导致与主干 drift。

---

**健康度小结**：贡献者集中度偏高（今日两位贡献者），Issue 流量趋零，建议关注社区引流与 issue 模板活跃度；代码质量维护节奏正常。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-09-13

## 1. 今日速览

LobsterAI 今日整体活跃度中等偏低：过去 24 小时新增/活跃 Issue 6 条、PR 更新 11 条，其中 3 个 PR 被关闭，无新版本发布。核心贡献者 [@fisherdaddy](https://github.com/fisherdaddy) 当日密集提交了 2 个新 PR（#2659、#2658）并关闭了此前的 #2657，显示主仓库开发仍在持续推进，方向集中在 openclaw 引擎稳定性与 Markdown 编辑能力。值得注意的是，社区侧的 6 条 Issue 和 8 个待合并 PR 全部被标记为 `[stale]`，且 0 条 Issue 被关闭，表明维护者对社区贡献的响应存在明显滞后，项目呈现“核心开发活跃、社区响应迟缓”的两极状态。

## 2. 版本发布

今日无新版本发布。（用户 Issue 中提及的最新版本为 v2026.3.26）

## 3. 项目进展

今日关闭 3 个 PR，均来自核心开发者：

- **[#2659](https://github.com/netease-youdao/LobsterAI/pull/2659) [CLOSED] feat: support markdown editing**（今日创建即关闭）：覆盖 renderer/main/docs/artifacts 多区域的 Markdown 编辑功能，是今日最大的功能推进，后续可能以更大规模的 PR 重新提交。
- **[#2658](https://github.com/netease-youdao/LobsterAI/pull/2658) [CLOSED] fix: openclaw subagent yield empty response**（今日创建即关闭）：针对 openclaw 子代理返回空响应的修复，与 #2657 一并关闭，推测为拆分后重新组织提交。
- **[#2657](https://github.com/netease-youdao/LobsterAI/pull/2657) [CLOSED] fix: resolve thumbnail rendering and native dependency build issues**：修复缩略图渲染与原生依赖构建问题。

整体看，今日主仓库推进方向为 **openclaw 运行时质量打磨 + 编辑体验增强**，但 8 个社区 PR 长期滞留（多为 3 月底提交），合并吞吐不足。

## 4. 社区热点

- **[#1066](https://github.com/netease-youdao/LobsterAI/issues/1066) 心跳对话未过滤**（@leedalei）：用户指出系统性日志/心跳对话直接展示给用户，造成困惑。反映用户对会话界面“信噪比”的诉求。
- **[#1061](https://github.com/netease-youdao/LobsterAI/issues/1061) 网关端口修改**（@fuckjavaer）：网关端口与 OpenClaw 端口冲突，用户缺乏配置入口。暴露出可配置性不足的问题。
- **[#1053](https://github.com/netease-youdao/LobsterAI/issues/1053) Modal 关闭按钮无反应**（@leedalei）：可复现的 Electron 拖拽区域拦截点击问题，已有对应修复 PR #1054。

今日各 Issue 评论数均为 1（多为 stale bot 触发），无真正高热讨论。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | Issue | Fix PR 状态 |
|---|---|---|---|
| 高 | fetchWithAuth 并发 401 双重消费 refreshToken，用户被强制登出 | [#1048](https://github.com/netease-youdao/LobsterAI/issues/1048) | ✅ [#1049](https://github.com/netease-youdao/LobsterAI/pull/1049)（stale） |
| 高 | openclaw 两处竞态条件导致 AI 会话永久无法启动、需重启 | [#1051](https://github.com/netease-youdao/LobsterAI/issues/1051) | ✅ [#1052](https://github.com/netease-youdao/LobsterAI/pull/1052)（stale） |
| 中 | Modal 关闭按钮被标题栏拖拽区拦截，所有 Modal 受影响 | [#1053](https://github.com/netease-youdao/LobsterAI/issues/1053) | ✅ [#1054](https://github.com/netease-youdao/LobsterAI/pull/1054)（stale） |
| 中 | 定时任务修改时间后标题描述不符（必现，win10） | [#1062](https://github.com/netease-youdao/LobsterAI/issues/1062) | ❌ 暂无 |
| 低 | 心跳/系统对话未过滤 | [#1066](https://github.com/netease-youdao/LobsterAI/issues/1066) | ❌ 暂无 |
| 低 | 网关端口冲突无法修改 | [#1061](https://github.com/netease-youdao/LobsterAI/issues/1061) | ❌ 暂无 |

另有两个待合并 PR 修复了隐蔽但重要的稳定性问题：[#1058](https://github.com/netease-youdao/LobsterAI/pull/1058)（定时任务运行历史 JSONL 写入失败导致数据永久丢失）和 [#1059](https://github.com/netease-youdao/LobsterAI/pull/1059)（Windows 默认浏览器误检测为 Edge）。

## 6. 功能请求与路线图信号

- **Markdown 编辑支持**（[#2659](https://github.com/netease-youdao/LobsterAI/pull/2659)）：核心开发者亲自推进，是最明确的路线图信号，预计将进入下一版本。
- **定时任务绑定已有 cowork session**（[#1065](https://github.com/netease-youdao/LobsterAI/pull/1065)）：避免每次运行都生成隔离会话，是社区对可复用会话场景的明确需求，PR 完成度较高，有望合入。
- **网关端口可配置**（#1061）：尚无 PR，但实现成本低、诉求直接，建议纳入。

## 7. 用户反馈摘要

- **痛点集中于“不可恢复状态”**：登录被强制登出（#1048）、会话永久锁死（#1051）、定时任务数据丢失（#1058），用户最不能容忍的是必须重启应用才能恢复。
- **界面细节体验粗糙**：Modal 无法关闭、心跳日志泄露到用户对话（#1066）、定时任务标题不同步（#1062），显示产品化打磨仍有空间。
- **生态兼容诉求**：与 OpenClaw 端口冲突（#1061）、默认浏览器检测错误（#1059），反映部分用户在复杂本机环境中部署。
- **正面信号**：社区贡献者（@MaoQianTu、@guanxwei、@orangedy 等）提交的 PR 质量高、附根因分析，社区技术参与意愿强。

## 8. 待处理积压 ⚠️

以下 Issue/PR 均创建于 2026-03-30，至今约 **5.5 个月未合并/未回复**，且已全部进入 stale 状态，存在被自动关闭风险，建议维护者优先处理：

- 社区 Fix PR：[#1049](https://github.com/netease-youdao/LobsterAI/pull/1049)、[#1052](https://github.com/netease-youdao/LobsterAI/pull/1052)、[#1054](https://github.com/netease-youdao/LobsterAI/pull/1054)、[#1056](https://github.com/netease-youdao/LobsterAI/pull/1056)、[#1057](https://github.com/netease-youdao/LobsterAI/pull/1057)、[#1058](https://github.com/netease-youdao/LobsterAI/pull/1058)、[#1059](https://github.com/netease-youdao/LobsterAI/pull/1059)、[#1065](https://github.com/netease-youdao/LobsterAI/pull/1065)
- 对应 Issue：[#1048](https://github.com/netease-youdao/LobsterAI/issues/1048)、[#1051](https://github.com/netease-youdao/LobsterAI/issues/1051)、[#1053](https://github.com/netease-youdao/LobsterAI/issues/1053)、[#1061](https://github.com/netease-youdao/LobsterAI/issues/1061)、[#1062](https://github.com/netease-youdao/LobsterAI/issues/1062)、[#1066](https://github.com/netease-youdao/LobsterAI/issues/1066)

**健康度提示**：8 个高质量社区修复 PR（含两个高危竞态修复）长期无人 review，与核心开发者当日活跃提交形成反差。若继续积累，可能挫伤核心社区贡献者积极性，建议建立社区 PR 分类响应机制。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-09-13）

## 1. 今日速览

Moltis 今日整体活跃度**中低**：过去 24 小时无新 Issue、无新版本发布，PR 活动为 3 条（2 条待合并、1 条关闭/合并）。值得关注的是，贡献活动集中在**集成渠道安全加固**与**新 LLM Provider 接入**两个方向，显示项目在渠道安全细粒度控制和模型生态扩展方面持续推进。社区反馈节奏平稳，无突发性 Bug 报告，项目处于健康但平稳的维护迭代期。

## 2. 版本发布

今日无新版本发布，无最新 Releases 记录。建议关注合并中的 PR 是否会在近期触发版本发布。

## 3. 项目进展

- **[PR #1261](https://github.com/moltis-org/moltis/pull/1261)（已关闭/合并）fix(tls): restrict ALPN to HTTP/1.1** — 今日最重要的进展。将 TLS ALPN 限制为仅通告 HTTP/1.1，直至支持 RFC 8441 WebSocket 升级；同时在现有 TLS 配置测试中固定 ALPN 列表，并在贡献者文档中记录该协议约束。验证充分（`cargo test -p moltis-tls` 18 项通过）。修复关联 Issue #245，属于网络层稳定性收尾，降低 TLS 握手协议协商不一致导致的隐患。
- **[PR #1265](https://github.com/moltis-org/moltis/pull/1265)（待合并）** Telegram 共享聊天工具策略控制暴露——安全相关，见下文详述。
- **[PR #1143](https://github.com/moltis-org/moltis/pull/1143)（待合并，已挂起逾 2 个月）** Requesty Provider 接入，持续推进但今日仅更新无合并。

整体而言，项目在 **TLS 网络层与消息渠道安全策略**上迈出实质性一步。

## 4. 社区热点

今日无新增评论数据（Issues 为 0、PR 评论数缺失），无法识别评论热点。从更新时间看：

- **[PR #1265](https://github.com/moltis-org/moltis/pull/1265)**（@penso，9-12 创建并当日更新）是最新动态，关联 Issue #1264，诉求明确：Telegram 渠道继承了网关“默认全拒”的工具上限策略，但未像 Slack 那样暴露 `untrusted_audience` / `untrusted_tools` 配置，造成**渠道间安全配置能力不对等**。该 PR 完整打通了配置、运行时访问、存储序列化与脱敏 API 响应链路，工程完成度较高。
- **[PR #1143](https://github.com/moltis-org/moltis/pull/1143)** 自 7 月初持续处于 OPEN 状态，反映社区对**扩展 OpenAI 兼容 LLM 路由生态**（Requesty）的需求，但因缺乏维护者评审反馈而长期滞留。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题。已有关联修复：

| 问题 | 状态 | 关联 PR |
|---|---|---|
| #245：TLS ALPN 通告与 WebSocket 升级不兼容 | ✅ 已有修复 | [PR #1261](https://github.com/moltis-org/moltis/pull/1261)（已关闭/合并），测试齐全 |
| #1264：Telegram 未暴露不可信受众/工具策略控制，共享聊天工具能力受限 | 🔧 修复进行中 | [PR #1265](https://github.com/moltis-org/moltis/pull/1265)（待评审合并） |

## 6. 功能请求与路线图信号

- **Requesty 作为 OpenAI 兼容 Provider**（[PR #1143](https://github.com/moltis-org/moltis/pull/1143)）：采用表驱动方式镜像现有 OpenRouter 接线，实现成本低、模式成熟，一旦获得维护者评审即可能合入下一版本。挂起超 70 天，建议优先评审。
- **渠道安全策略对等化**（[PR #1265](https://github.com/moltis-org/moltis/pull/1265)）：信号显示项目路线图上“Slack 具备的细粒度工具策略控制”正在向其他渠道推广，未来可能覆盖更多集成渠道，属于明确的架构方向。
- **ALPN/HTTP2+WebSocket 支持**：PR #1261 明确指出限制是临时方案，待 RFC 8441 WebSocket over HTTP/2 支持后放开，可作为后续网络层路线图信号跟踪。

## 7. 用户反馈摘要

今日无 Issue 评论数据可提炼。基于 PR 上下文间接反映的用户痛点：

- **Telegram 用户**在共享聊天场景下受“默认全拒”工具策略限制且无法自行配置（#1264），期待与 Slack 用户一致的灵活度。
- **Requesty 用户**希望将 Moltis 接入该 LLM 路由以统一管理多模型调用，说明部分用户存在**多 Provider 聚合路由**的使用场景。

## 8. 待处理积压

- ⚠️ **[PR #1143](https://github.com/moltis-org/moltis/pull/1143)（Requesty Provider）**：7 月 2 日创建，至今约 2.5 个月未合并、无 👍、无可见评审互动。属于典型的贡献者流失风险点，**建议维护者尽快评审**。
- **[PR #1265](https://github.com/moltis-org/moltis/pull/1265)**：涉及安全策略面（配置、序列化、脱敏响应），建议安全敏感路径尽快评审合并，避免 Telegram 渠道策略能力缺口长期存在。

---

*数据来源：Moltis GitHub 仓库（过去 24 小时窗口）。本期 Issue 数据为空，社区反馈类分析基于 PR 上下文推断，请以实际仓库为准。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-09-13

## 1. 今日速览

CoPaw（QwenPaw）过去 24 小时社区活跃度**显著偏高**：Issues 更新 15 条（新开/活跃 13、关闭 2），PR 新增 6 条且全部待审合并（合并 0）。数据表明 2.2.x 版本升级后进入 Bug 集中暴露期，尤其是 MCP 连接、ACP 权限、内存耗尽和会话/模型配置丢失等核心稳定性问题。社区响应积极——多个 Bug 报告当天即有对应修复 PR 提交（其中 2 个来自首次贡献者），显示出健康的“报告—修复”闭环。今日无版本发布，待合并 PR 积压值得维护者优先处理。

## 2. 版本发布

今日无新版本发布。注意：当前 6 个待合并 PR 中多个直接修复 2.2.0/2.2.1 线上问题，建议尽快安排 patch 版本。

## 3. 项目进展

今日无 PR 合并、无 Issue 由代码修复关闭（2 个已关闭 Issue #7582、#7664 为功能请求类）。但**修复管线非常充实**，6 个待合并 PR 覆盖以下方向：

- **ACP/MCP 协议兼容**：#7732（按协议 `kind` 匹配权限选项）、#7729（识别 Java SDK 的 `jsonRpcError` 信封）
- **稳定性**：#7725（用线程化轮询替换阻塞的 `watchfiles.awatch`，修复大仓库文件浏览器卡死整个服务端）
- **可观测性**：#7723（Console 流失败时发出错误事件，首次贡献者）
- **成本优化**：#7719（ReMeLight 记忆写入支持独立轻量模型）
- **体验修复**：#7718（Telegram 审批卡片 HTML 渲染，首次贡献者）

若全部合入，将一次性解决今日 5 个以上高优先级 Issue，项目整体推进幅度较大。

## 4. 社区热点

| 主题 | Issue | 讨论热度 | 诉求 |
|---|---|---|---|
| Agent“遗忘”指令问题 | [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571)（4 评论，9/5 持续活跃至今日） | 最高 | 插件开发工作流中 Agent 反复忘记路径/开发目录约束，导致误覆盖部署，暴露长期指令遵从与记忆持久化短板 |
| 会话丢失 | [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724)（3 评论） | 高 | 桌面端会话记录神秘消失且与 #7708 模型丢失问题关联，用户数据可靠性焦虑 |
| A2A 协议路线图 | [#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484)（3 评论，9/2 持续活跃） | 高 | 架构文档承诺 MCP/A2A/ACP 统一 Driver，目前仅 MCP 落地，社区催问 A2A 时间表 |

## 5. Bug 与稳定性（按严重程度）

**🔴 严重（服务不可用/数据丢失）**
- **#7724 会话丢失**（win10 desktop 2.2.1）：会话在控制面板完全找不到，伴随模型配置丢失。无 fix PR，需优先排查。
- **#7722 内存耗尽三重叠加路径**（Docker 2.2.0）：无界流缓冲 + keep-alive 实例堆叠 + doom-loop 绕过限流，约 1MB/s 泄漏直至 OOM。报告附受控复现与最小修复方案，尚无官方 fix PR。
- **#7721 文件浏览器冻结整个服务端**（2.2.1 Docker）：`watchfiles.awatch` 同步初始化阻塞事件循环，WebUI 和所有消息通道停摆。✅ 已有 fix PR **#7725**。

**🟠 较严重（功能失效）**
- **#7716 MCP 升级 2.2.x 后无法连接注册**（影响 2.2.0 & 2.2.1，疑似升级回归）。部分相关修复见 PR #7729。
- **#7728 Java MCP SDK 服务器 discover 探测失败**（HTTP 500 非标准信封）。✅ fix PR **#7729**。
- **#7708 大模型配置丢失**（win10 2.2.1，反复发生）。无 fix PR，与 #7724 疑似同根因。
- **#7727 越界写入防护对 kimi-code Write 工具失效**：`_paths` 提取不识别 kimi toolCall 路径字段，安全边界被绕过。无 fix PR。
- **#7726 ACP `trusted: true` 静默回退交互确认**。✅ fix PR **#7732**。
- **#7730 插件目录读取失败未走离线降级**，直接抛服务器错误。无 fix PR。

**🟡 一般**
- **#7720** Creator 插件提示同步阻塞隐藏在 GATED 状态后，缺少手动图片验收入口。
- **#7723（对应 PR）** Console SSE 流静默失败导致客户端盲目重试。

## 6. 功能请求与路线图信号

- **独立记忆写入模型**（#7664，已关闭）→ 对应 PR **#7719** 待合并，很可能进入下一版本；核心诉求是用廉价模型跑 summarize/dream 节省 Token。
- **插件商店一键更新 + 更新通知**（#7582，已关闭）：多设备用户运维痛点，可能已在规划中但今日无对应 PR。
- **Files 面板显示隐藏文件开关**（[#7731](https://github.com/agentscope-ai/QwenPaw/issues/7731)）：小而明确的 UI 增强，实现成本低，可关注是否快速被认领。
- **A2A 协议官方支持**（#7484）：路线图级信号，架构已预留 Driver 机制，但无代码动静，建议官方给出时间表回应社区期待。

## 7. 用户反馈摘要

- **真实痛点集中在 2.2.x 升级后**：桌面端 Windows 用户（@xiaohushi512 连续报告 #7571/#7708/#7724）反复遭遇配置/会话丢失，信任感受损，且问题互相纠缠难以定位。
- **重度/专业用户贡献高质量报告**：#7722（附三路径复现与修复建议）、#7726/#7727/#7728（@remotepan-design 深挖 ACP/MCP 边界，附源码级根因分析），表明项目吸引了一批懂内核的深度用户。
- **多设备/多通道用户**（@One-sixth）：插件运维成本高，期待批量更新与变更通知。
- **成本敏感**：用户明确指出记忆写入用旗舰模型“造成不必要的经济损失”。
- **正面信号**：问题报告后当天即出现社区修复 PR（含 2 位首次贡献者），社区参与度和自愈能力较强。

## 8. 待处理积压

- **#7484 A2A 支持时间表**：开放 11 天、3 评论，官方未给出明确回应，属路线图级承诺，建议公开排期。
- **#7571 Agent 指令遗忘**：开放 8 天、4 评论仍无解决方案，触及产品核心能力（持久规则遵从），建议给出 workaround（如系统级规则文件/工作区隔离）并评估根本修复。
- **#7708 模型配置丢失**：与今日新报 #7724 高度关联，若确认同根因应合并追踪并优先修复。
- **6 个待合并 PR 全部处于等待状态**：#7725（服务端冻结）和 #7732/#7729（协议兼容）直接影响生产可用性，建议维护者优先评审，并考虑合并后快速发布 2.2.2 patch。

---
*数据来源：GitHub Issues/PR API，统计窗口 2026-09-12 至 2026-09-13。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 · 2026-09-13

## 1. 今日速览

今日 EasyClaw 仓库整体处于**低交互、稳态发版**状态：过去 24 小时无新增或活跃 Issue（0 条），也无 PR 更新（待合并 0、已合并/关闭 0）。项目活跃度主要由**版本发布驱动**——v1.9.16 如期发布，聚焦 MCP 授权流程与客服会话恢复两处体验优化。综合判断，项目处于维护成熟期，代码迭代持续但社区讨论热度暂歇，健康度良好。

## 2. 版本发布

### v1.9.16: TK Copilot v1.9.16
- **链接**：https://github.com/gaoyangz77/easyclaw/releases/tag/v1.9.16

**更新内容：**
1. **MCP 授权流程优化**：桌面端将授权请求移交给 Web 流程后，现在可以顺畅地继续完成 MCP 授权，消除了此前 Desktop → Web 流程切换时的中断体验。
2. **客服会话恢复修复**：恢复已归档的客服会话时，保留本地会话身份（local session identity），避免身份丢失导致的上下文断裂。
3. **文档与生命周期更新**：刷新了 Desktop 端教程内容，并调整了 Office 生命周期（lifecycle）行为。

**破坏性变更与迁移注意事项：**
- 官方 Release Notes 未声明破坏性变更，预计可平滑升级。
- 值得留意的是 **Office lifecycle 行为调整**，使用 Office 集成的用户建议升级前快速回归验证相关功能是否符合预期。

## 3. 项目进展

今日无合并或关闭的 PR。项目进展完全体现在 v1.9.16 的发布上，主要推进了：
- MCP 授权跨端流程的可靠性（对 AI 智能体使用 MCP 工具链的用户是关键路径）；
- 客服会话归档/恢复场景的会话一致性。

属于**小幅迭代、稳定收尾**性质的一版，未出现大的架构性变更。

## 4. 社区热点

今日无活跃 Issue 或 PR 讨论，无社区热点可提炼。可参考 Release 页面：https://github.com/gaoyangz77/easyclaw/releases

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题。v1.9.16 本身包含的会话身份保留修复属于**历史 Bug 的修复交付**，建议用户升级验证客服会话恢复场景。

## 6. 功能请求与路线图信号

今日无新功能请求。从近期发版节奏与更新内容可推断的路线图信号：
- **MCP 生态深化**（授权流程打磨）表明对 Agent 工具链互操作性的持续投入；
- **Desktop / Web / Office 多端协同**（教程、生命周期行为更新）显示多端一致性是当前优先方向。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼用户反馈。建议关注 v1.9.16 发布后 1-3 天内关于 MCP 授权与 Office 生命周期行为的用户实际体验反馈。

## 8. 待处理积压

今日数据中无长期未响应的 Issue 或 PR。但从长期健康角度建议维护者：
- 在 Release 说明中补全被截断的更新描述（“恢复”之后的中文内容不完整），降低用户理解成本；
- 关注发版后的反馈窗口期，及时响应升级相关问题。

---

**健康度小结**：📈 稳定 | 活跃度：低（发版驱动）| 社区互动：静默期 | 建议：持续观察发版后 72 小时的用户反馈。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*