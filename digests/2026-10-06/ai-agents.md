# OpenClaw 生态日报 2026-10-06

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-06 05:27 UTC

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

# OpenClaw 项目动态日报 — 2026-10-06

---

## 1. 今日速览

OpenClaw 今日保持高强度活跃：过去 24 小时 Issues 更新 500 条（新开/活跃 383，关闭 117），PR 更新 500 条（待合并 373，合并/关闭 127），并发布了 **v2026.10.1-beta.1** 测试版本。社区讨论焦点集中在 **Gateway 内存泄漏（prepared-model-catalog worker）**、**SQLite WAL 无限增长**、**更新流程失败**三大稳定性主题，多个 P0 级问题持续发酵。贡献侧 @steipete、@RomneyDa 等核心贡献者今日提交了多个性能与安全相关 PR，会话/内存子系统的重构正在系统化推进。整体看，项目处于“快速迭代 + 大规模稳定性偿还”并行阶段，Issue 关闭率（约 23%）尚可但 P0 存量压力明显。

---

## 2. 版本发布

### v2026.10.1-beta.1（openclaw 2026.10.1-beta.1）

**Highlights（会话与内存子系统）：**
- 在注册表变更期间保留使用量数据（usage preserved across registry changes）
- 支持从远程工作区投递 worker 附件
- 防止排队取消与 transcript 别名阻塞活动 turn
- 保持 continuation 签名对齐
- 迁移 embedding 缓存

**评估：** 本版本是一个以**会话状态一致性**为主题的 beta，主要针对近期大量 session-state / message-loss 类报告。属于预发布版本，生产环境部署需谨慎；beta 更新本身仍有 #165860（更新卡在 verifying 状态）报告，建议关键环境暂缓自动更新。

---

## 3. 项目进展

今日合并/关闭 127 个 PR，重点方向：

**性能优化（会话/状态子系统，@steipete 主导）**
- [#165909](https://github.com/openclaw/openclaw/pull/165909) `perf(sessions)`: 复用分支摘要与维护读取器 —— `sessions.branches.list` 曾高达 707ms/次，本 PR 修复了读取 worker 退休后丢失 append-safety 证书、元数据追加触发全量扫描等问题。状态：ready for maintainer look。
- [#165680](https://github.com/openclaw/openclaw/pull/165680) `perf(state)`: 将 agent 数据库的冷启动 schema/索引检查移出主线程，直接改善 Gateway 事件循环阻塞问题（对应 #119720 长期痛点）。
- [#165940](https://github.com/openclaw/openclaw/pull/165940)：测试基建修复，控制快照检查期间的 WAL 写入节奏，间接关联 WAL 膨胀问题。

**安全边界修复**
- [#165776](https://github.com/openclaw/openclaw/pull/165776)：修复 Control UI 长粘贴内容以"未信任外部内容"直达模型的安全问题（🚨 security-boundary，waiting on author）。
- [#163646](https://github.com/openclaw/openclaw/pull/163646)：worker 本地原生推理安全调度（能力/模型策略/放置/回执/权限五重检查），是 worker 推理运行时的关键拼图。

**功能推进**
- [#165716](https://github.com/openclaw/openclaw/pull/165716)：语音通话大版本 —— 每次通话独立简报、通话报告、实时转向、回调、语音信箱检测（XL 级，needs proof）。
- [#165484](https://github.com/openclaw/openclaw/pull/165484)：WebUI 聊天固定底部时跨来源跟随新 turn，维护者已于 10-05 批准。

**整体判断：** 会话性能 + 安全边界双线推进，配合 beta 发布，项目正在对 9.x 系列积累的稳定性债务做集中清偿。

---

## 4. 社区热点

| 排名 | Issue | 评论 | 主题 |
|---|---|---|---|
| 1 | [#143524](https://github.com/openclaw/openclaw/issues/143524) | 108 | Windows 上 agent SQLite WAL 数天内膨胀至 1.4–2.8 GB，`wal_autocheckpoint=1000` 失效，阻塞 Gateway 启动（P0, release-blocker）。人工 checkpoint 归零后再次膨胀，用户极度受挫。 |
| 2 | [#149361](https://github.com/openclaw/openclaw/issues/149361) | 50 | 维护者发起的 WebUI 性能与稳定性 Umbrella，汇聚桌面/移动端全部复现证据与修复方案。 |
| 3 | [#119720](https://github.com/openclaw/openclaw/issues/119720) | 23 | 同步 agent 持久化阻塞 Gateway 事件循环（#165680 部分缓解，仍 OPEN）。 |
| 4 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | 17 | hook/tool 子进程未被回收，僵尸进程累积导致运行时退化。 |
| 5 | [#161976](https://github.com/openclaw/openclaw/issues/161976) | 17 | WhatsApp DM 回复在重启后的 durable registry 交接处反复失败（消息不丢但延迟到下一条才送达）。 |

**诉求分析：** 社区最大声量集中在**资源管理（内存/WAL/进程）**——用户搭建的是 7×24 长期运行的 Gateway，任何缓慢泄漏在数天内即致命。其次是**消息可靠性**：回复延迟送达、最终答复被丢弃，直接损害对 AI 助手的信任。

---

## 5. Bug 与稳定性（按严重度排列）

### P0 / Crash-loop

| Issue | 问题 | Fix 状态 |
|---|---|---|
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | `prepared-model-catalog.worker.js` 内存泄漏 4–5 GB/h，与负载/提供商无关（冷重启+提供商二分均已复现） | ❌ 无 fix PR |
| [#159596](https://github.com/openclaw/openclaw/issues/159596) / [#160548](https://github.com/openclaw/openclaw/issues/160548) | 同一 worker 的"内存锯齿”：RSS 涨满触发 critical 事件→worker 退休→回落，~200 次/天；每次回收还会作废 runtime 发布并杀死等待中的 turn | ❌ 无 fix PR（**最高优先级集群**） |
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL 膨胀至 GB 级（见上） | ❌ 标记 needs-maintainer-review 近一个月 |
| [#164074](https://github.com/openclaw/openclaw/issues/164074) | 原生更新恢复卡在 publication-complete | ❌ |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | 溯源棘轮将 `MEMORY.md`/`USER.md` 静默永久排除出 bootstrap 注入（一次普通 web-search turn 后即触发，无诊断无恢复路径） | ❌ 安全审查中 |

### P1

- [#157630](https://github.com/openclaw/openclaw/issues/157630) / [#157575](https://github.com/openclaw/openclaw/issues/157575)：托管 Gateway 的 `--max-old-space-size` 静默覆盖 worker 自身的 `resourceLimits`，是内存泄漏集群的可能根因之一（linked PR open）。
- [#150132](https://github.com/openclaw/openclaw/issues/150132)：claude-cli 长工具密集 turn（71/107 分钟）完成后最终回复被 8 MiB stdout 上限丢弃。
- [#160959](https://github.com/openclaw/openclaw/issues/160959)：大型插件捕获阻塞 Gateway 数分钟（2026.9.6 回归）。
- [#142821](https://github.com/openclaw/openclaw/issues/142821)：默认开启的 transcript 脱敏"污染"重放的 agent 上下文（P0，data-loss + security）。

### 今日已关闭（修复落地）

- [#161953](https://github.com/openclaw/openclaw/issues/161953)：Windows 会话创建 100% 失败（win32 `\\?\` 路径泄漏进发布守卫）✅
- [#158095](https://github.com/openclaw/openclaw/issues/158095)：state-lifecycle acquire 失败直到重启 ✅
- [#158239](https://github.com/openclaw/openclaw/issues/158239)：旧内核（<5.6）慢速主机上 Gateway 启动失败 ✅
- [#92043](https://github.com/openclaw/openclaw/issues/92043)：180s compaction 超时无部分进度复用 ✅

**结论：** Windows/兼容性类 P0 修复效率高；但 **prepared-model-catalog 内存泄漏集群（3+ 个 P0 issue 指向同一 worker）尚无 fix PR**，是当前最大风险。

---

## 6. 功能请求与路线图信号

- **语音通话深化**（[#165716](https://github.com/openclaw/openclaw/pull/165716)）：电话代打场景（订位、催单）的每次通话授权简报 + 通话报告，个人助理定位的核心能力，已进入 review，很可能进入 2026.10.x。
- **Worker 本地原生推理**（[#163646](https://github.com/openclaw/openclaw/pull/163646)）：本地模型经 Gateway 安全调度，隐私/离线场景信号明确。
- **自定义 Responses 模型支持 Fast mode**（[#155667](https://github.com/openclaw/openclaw/pull/155667)）：`compat.supportsServiceTier: true`，已 ready for review。
- **暴露实际后端模型身份**（[#51441](https://github.com/openclaw/openclaw/issues/51441)，3 月提出今日仍活跃）：LiteLLM 等代理下 agent 只见别名不见真实模型，结合 #69110（模型标签伪造）看，"模型身份可验证"是社区持续诉求，建议纳入路线图。
- **macOS Talk Mode 使用助手头像**（[#70266](https://github.com/openclaw/openclaw/issues/70266)）：小而美的人格化需求。

---

## 7. 用户反馈摘要

**痛点（按提及频率）：**
1. **"跑几天就死”**：Windows 用户 WAL 2.8 GB、Linux 用户 worker 8–13 GB —— 长驻部署的内存/磁盘泄漏是最普遍的痛。
2. **“活干完了，回复没了”**：多个 issue（#150132、#155396、#161976）描述 agent 完成全部工作后最终答复被丢弃或延迟，用户评价为“最伤信任的失败模式”。
3. **升级恐惧**：9.4→9.6→9.7 连续多个版本出现更新失败（state-migrated-no-rollback、verifying 卡死），运维者反映“每次升级都是赌博”。
4. **静默失败无诊断**：#153426（记忆文件被静默剔除）、#120385（工具目录不完整只显示 "Exec failed"）——用户反复强调“宁可报错也不要静默”。

**满意点：** 新 beta 对会话/内存一致性的专注方向获得认可；issue 模板、clawsweeper 自动分诊标签体系被认为高效；WebUI umbrella issue（#149361）的集中管理方式被社区正面评价。

---

## 8. 待处理积压（建议维护者关注）

| 项目 | 状态 | 呼吁 |
|---|---|---|
| [#159662](https://github.com/openclaw/openclaw/issues/159662) / [#159596](https://github.com/openclaw/openclaw/issues/159596) / [#160548](https://github.com/openclaw/openclaw/issues/159548) 内存泄漏集群 | 三个 P0 无 fix PR | **最高优先**，建议与 #157630/#157575 heap 覆盖问题统一排查 |
| [#143524](https://github.com/openclaw/openclaw/issues/143524) WAL 膨胀 | 108 评论，needs-maintainer-review 近一个月 | 社区声量最大单 issue |
| [#151795](https://github.com/openclaw/openclaw/issues/151795) `--link` 插件不受信任 | needs-security-review | 阻塞本地开发工作流 |
| [#150743](https://github.com/openclaw/openclaw/issues/150743) QQ 渠道腾讯交接停滞 | 开放讨论，无官方回应 | 中国用户群诉求，需明确长期支持表态 |
| [#87212](https://github.com/openclaw/openclaw/issues/87212) Telegram 回显系统信封（安全相关） | 5 月至今 stale | 涉及内部指令泄漏到用户端 |
| PR [#142349](https://github.com/openclaw/openclaw/pull/142349) 卡死会话恢复 | stale + needs proof | 虚拟化主机上自动恢复终身失效，影响运维 |
| PR [#150738](https://github.com/openclaw/openclaw/pull/150738) compaction 恢复引导 | 9-17 提交至今 needs proof | 与已关闭的 #92043 相关，建议尽快验证合并 |

---

*数据来源：OpenClaw GitHub 过去 24 小时 Issues/PR/Release 数据。链接格式为 openclaw/openclaw，请通过 GitHub 检索对应编号。*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**数据基准日：2026-10-06**

---

## 1. 生态全景

个人 AI 助手/自主智能体赛道已形成**三层格局**：头部项目（OpenClaw）单日 Issue/PR 活动量达 500+ 条，是第二名项目的 10 倍以上，呈超级社区形态；中坚层（NanoBot、Zeroclaw、Hermes Agent、CoPaw、NanoClaw、NullClaw）日活跃 20–50 条，各有明确技术路线；长尾层（PicoClaw、LobsterAI、IronClaw、Moltis）处于低速维护或质量打磨期，TinyClaw、ZeptoClaw、EasyClaw 已 24 小时零活动。生态整体从“功能扩张”转向**生产可靠性偿还**——长驻运行（7×24 Gateway）、升级安全、资源泄漏、消息可靠性成为几乎所有活跃项目的共同主题。同时，**消息渠道多元化（iMessage/SMS、Signal、DingTalk、WeCom）与本地/小模型降本**是两条清晰的功能演进主线。

---

## 2. 各项目活跃度对比

| 项目 | Issues 动态 | PR 动态 | Release | 健康度 | 核心特征 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（新开/活跃 383，关闭 117） | 500（待合并 373，关闭 127） | v2026.10.1-beta.1 | ⭐⭐⭐½ | 超高活跃；P0 存量压力大，稳定性集中清偿 |
| **Zeroclaw** | 26（23 开/3 关） | 50（45 待/5 合） | 无 | ⭐⭐⭐⭐ | v0.8.6/v0.9.0 双版本收敛中，审阅带宽是瓶颈 |
| **Hermes Agent** | 50（47 开/3 关） | 50（48 待/2 合） | 无 | ⭐⭐½ | 质量收敛期，关闭/新开比 3/47 预警积压 |
| **CoPaw** | 41（40 开/1 关） | 22（21 待/1 合） | 无 | ⭐⭐⭐ | 社区修复活跃但合并滞后（21 PR 待审） |
| **NanoBot** | 6（5 开/1 关） | 24（17 待/7 合） | 无 | ⭐⭐⭐⭐½ | 当天报障当天修复闭环，纪律最佳 |
| **NanoClaw** | 1（关闭） | 24（12 待/12 合） | v2026.10.0-rc.2 | ⭐⭐⭐⭐ | 发布冲刺，Windows 补短板，闭环快 |
| **NullClaw** | 13（8 开/5 关） | 26（15 待/11 合） | 无 | ⭐⭐⭐⭐ | 修复-加固良性循环，CLI/Docker 体验改善 |
| **LobsterAI** | 50（批量关闭，0 新开） | 6（3 合） | 无 | ⭐⭐ | 打磨期；新 Issue 归零是流失预警 |
| **IronClaw** | 2（均新开） | 2（均待审） | 无 | ⭐⭐½ | 低强度但问题-修复配对清晰 |
| **Moltis** | 2 | 2 | 无 | ⭐⭐⭐ | 中低活跃，贡献质量高 |
| **PicoClaw** | 5 | 4 | 无 | ⭐½ | 维护者缺位，安全通道缺失，社区已现接管 fork |
| **TinyClaw / ZeptoClaw / EasyClaw** | 0 | 0 | 无 | — | 24h 无活动 |

---

## 3. OpenClaw 在生态中的定位

**规模对比**：OpenClaw 单日 500 Issue + 500 PR 活动量，评论 100+ 的单 issue（#143524 WAL 膨胀，108 评论）、六位数 issue 编号（#165909），表明其用户基数和贡献者池比其余所有项目加总还高一个量级。它是事实上的**生态参照系**——多个项目（LobsterAI 兼容其 skill 体系、#2800 直接对齐 OpenClaw 运行时解析行为）显式跟随其格式标准。

**优势**：
- 功能纵深最完整：语音通话大版本（#165716 含通话简报/报告/语音信箱检测）、worker 本地原生推理（#163646）、远程工作区附件投递，覆盖“个人助理”全场景；
- 核心贡献者驱动的高质量性能重构（@steipete 会话子系统 707ms→优化的读取器复用）；
- 分诊体系（clawsweeper 自动标签、umbrella issue）管理超大 issue 流量。

**技术路线差异**：OpenClaw 是 Gateway+worker 多进程架构，追求全能力覆盖；Zeroclaw 走 Rust 安全沙箱路线（bubblewrap/Firejail 后端探测、SOP 可视化编排）；Hermes Agent 深耕多智能体编排（Kanban）与边缘 fleet 部署；NanoClaw 转向日历版本+beta/stable 双通道的生产级发布管理；NanoBot/CoPaw 聚焦 MCP 集成安全与多 Provider 兼容。

**风险**：规模领先但质量密度不领先——三个 P0 内存泄漏 issue（#159662/#159596/#160548 指向同一 worker）无任何 fix PR，#143524 挂 needs-maintainer-review 近一个月。相比之下 NanoBot 几乎所有新 bug 同日附 fix PR。**大而不快是当前最大软肋**。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **长驻运行资源管理** | OpenClaw（内存泄漏 4–5 GB/h、WAL 2.8 GB、僵尸进程 #97616）、NanoClaw（SQLite hot-journal #4047）、CoPaw（history.db-wal 中毒 #7980）、NullClaw（解析失败内存泄漏 #1011） | 7×24 部署下的内存/磁盘/进程泄漏是全生态第一痛点 |
| **升级/安装可靠性** | OpenClaw（更新卡 verifying、no-rollback）、Hermes（#125437 半安装状态）、NanoClaw（OneCLI 升级链路 3 连修、macOS 更新竞态 #4037） | “每次升级都是赌博”——需要原子升级+干净回滚 |
| **iMessage/SMS 渠道（Sendblue）** | NanoBot（PR #6081）、NanoClaw（PR #4043）、IronClaw（PR #8127）、PicoClaw（PR #3416） | 同一第三方服务在 4 个项目同日/近期提交，渠道多元化需求集中爆发 |
| **Token 成本可观测性** | NanoBot（#5266 百万 token 2 小时）、CoPaw（#8085 finish_reason 透出）、Hermes（压缩 warm handoff 复用 prompt cache）、Zeroclaw（#11515 成本账本 torn-write）、NanoClaw（#3932 lean tasks 小上下文定时任务） | 成本透明+小模型降本是普遍诉求 |
| **静默失败/可诊断性** | OpenClaw（#153426 记忆文件静默剔除）、Zeroclaw（沙箱日志不透明）、CoPaw（静默回退 #8103）、Moltis（create_skill 虚报成功 #1292） | “宁可报错不要静默”被多个社区反复强调 |
| **Windows 平台支持** | OpenClaw（会话创建 P0 已修）、NanoClaw（4 个 Windows fix PR）、CoPaw（COM 劫持、ACL 锁卷）、Hermes（ENOBUFS 风暴） | Windows 生产部署普遍是二等公民，正在集中补课 |
| **技能系统 YAML 健壮性** | Moltis（#1293）、LobsterAI（#2800） | SKILL.md frontmatter 解析一致性问题跨项目同现，反映 OpenClaw skill 格式已成为事实标准但规范模糊 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构特点 |
|---|---|---|---|
| **OpenClaw** | 全栈个人助理（语音通话、本地推理、多渠道） | 全量用户，规模最大 | Node Gateway + worker 多进程 |
| **Zeroclaw** | 安全沙箱、插件准入、SOP 工作流编排 | 安全敏感的自托管运维者 | Rust，bubblewrap/Firejail 多沙箱后端 |
| **Hermes Agent** | 多智能体 Kanban 编排、边缘 fleet（Jetson/DGX）、Matrix/Discord 深度场景 | 高技术水平长尾用户群 | Python venv 生态 |
| **NanoBot** | MCP 集成、Dream/记忆后台、CJK 本地化 | 多渠道 IM 用户（含中文用户） | Python，快速修复文化 |
| **NanoClaw** | 发布工程、channels 多通道架构 | 生产部署运维者 | Docker/OneCLI、beta/stable 通道 |
| **CoPaw** | 多 Provider 聚合（OpenCode/DeepSeek/GLM/Kimi）、钉钉/WeCom | 中国多模型混用用户 | 渠道插件化（#8113） |
| **NullClaw** | CLI 交互、轻量部署 | 终端向开发者 | Zig 0.16，零依赖哲学 |
| **LobsterAI** | Skills 市场、沙箱、网易系 IM（POPO/钉钉/飞书） | 国内企业/网易生态用户 | Electron 桌面端 |
| **Moltis** | 会话语义正确性、skill 系统严谨性 | 小而精社区 | Rust crates 模块化 |
| **PicoClaw** | 低成本全渠道助手（嵌入式厂商背景） | 自托管技术型用户 | 失维护中，社区 fork 接管 |

---

## 6. 社区热度与成熟度分层

**快速迭代期**：NanoClaw（RC 发布冲刺、日历版本转型）、Zeroclaw（v0.8.6/v0.9.0 双版本 gate 排队，SOP 系列提案一日 6 条，路线图扩张明显）。

**质量巩固期**：OpenClaw（beta 专注会话一致性，稳定性债务集中偿还）、NanoBot（安全加固+并发正确性）、NullClaw（修复-加固循环）、CoPaw（2.2.2 beta 回归清理）、Hermes（关闭/新开比 3/47，积压趋势需干预）。

**低速维护/衰退预警**：LobsterAI（新 Issue 归零+50 条 stale 批量关闭，需重振信号）、IronClaw、Moltis（活跃但体量小）；**PicoClaw 处于失维护临界点**（安全披露通道缺失+社区 fork 公开接管）。

**成熟度判断**：修复纪律最佳的是 NanoBot（当天闭环）与 NanoClaw（24h 报障→修复→随 RC 发布）；OpenClaw 规模最大但 P0 响应存在结构性滞后；Zeroclaw 工程严谨但受审阅带宽约束。

---

## 7. 值得关注的趋势信号

1. **“最后一公里可靠性”成为竞争分水岭**。功能同质化加深（语音、多渠道、MCP 各家都有），用户差异化评价集中在：升级是否敢按、跑一周会不会死、回复会不会丢。OpenClaw 的“活干完了回复没了”（#150132）和 Hermes 的“every fix is a hand-typed recipe”说明头部项目也难幸免。**对开发者的启示：投入 20% 精力在升级原子性与静默失败诊断上，回报高于新功能。**

2. **成本可观测性是被低估的基础设施**。NanoBot #5266（两个月未解的最热 issue）、Zeroclaw 成本账本数据完整性、NanoClaw lean tasks——按调用维度的 token 记账正在从“nice to have”变为选型门槛，而各项目普遍落地缓慢。

3. **skill/插件生态正在形成“OpenClaw 格式”事实标准**。LobsterAI、Moltis 同日修 SKILL.md frontmatter 兼容性；插件化架构（CoPaw 渠道插件、Zeroclaw 分阶段准入、Hermes 插件状态）是多项目并行主线。**第三方扩展的信任边界（凭据保管、路径删除、权限增量）将是下一个安全战场**——LobsterAI 的任意路径删除（#2794）、CoPaw 的审批按钮失效（#8105）都是预兆。

4. **Windows 生产部署需求真实且普遍欠账**。OpenClaw、NanoClaw、CoPaw、Hermes、NullClaw 五个项目同期在补 Windows 课（路径、COM、named pipe、ACL）。针对 Windows 的兼容性投入可能成为渠道红利。

5. **维护者带宽是中小项目的生死线**。PicoClaw 的 fork 接管、Hermes/CoPaw 的 PR 积压、LobsterAI 的贡献者流失预警共同表明：当关闭/新开比跌破 10%，社区信任衰减是加速的。引入分层 triage 权限、设置 stale bot 白名单（保护有效贡献不被误关）是低成本自救手段。

6. **模型身份与 Provider 透明度诉求抬头**。OpenClaw #51441（别名掩盖真实模型）、CoPaw 多 Provider 兼容系列，预示“模型身份可验证”可能成为企业选型的合规性要求。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 · 2026-10-06

---

## 1. 今日速览

NanoBot 今日继续保持高活跃度：过去 24 小时内 Issues 更新 6 条（新开 5、关闭 1），PR 更新 24 条（待合并 17、已合并/关闭 7），无新版本发布。当日贡献集中在 **MCP 安全加固（DNS pinning、凭据泄漏防护）**、**Cron/Dream 并发正确性修复** 和 **WebUI 打磨（CJK 排版、图标统一）** 三个方向，社区 issue→PR 的响应闭环速度非常快（如 #6065 当天开、当天修、当天关）。整体健康度良好，无 P0 级事故。

---

## 2. 版本发布

今日无新 Release。近期修复（#6066、#6060、#6071 等）预计将随下个版本发布。

---

## 3. 项目进展（今日合并/关闭的 PR，共 7 条）

### 修复类
- **PR #6066** [已关闭] `fix(mcp): streamable HTTP read timeout 覆盖 tool_timeout` —— 修复 MCP streamable HTTP 客户端固定 30s 读超时问题，使 `tool_timeout` 配置真正生效。**当天对应 Issue #6065 同步关闭，闭环速度出色。**（[链接](https://github.com/HKUDS/nanobot/pull/6066)）
- **PR #6060** [已关闭] `fix(documents): 读取超出 XLSX 声明维度的单元格` —— 修复 openpyxl 只读模式信任声明范围导致 `read_file`/`grep` 静默丢数据的问题。（[链接](https://github.com/HKUDS/nanobot/pull/6060)）
- **PR #6075** [已关闭] `fix(webui): 宽公式自适应与数学排版间距优化`（[链接](https://github.com/HKUDS/nanobot/pull/6075)）
- **PR #6073** [已关闭] `fix(webui): 恢复 CJK 行高并优化文本换行` —— 修复 CSS 规则顺序导致中日韩文本行高被覆盖的问题，对中文用户体验是显著改善。（[链接](https://github.com/HKUDS/nanobot/pull/6073)）

### 功能与测试
- **PR #6074** [已关闭] `feat(webui): 统一图标体系与交互反馈`（[链接](https://github.com/HKUDS/nanobot/pull/6074)）
- **PR #6076** [已关闭] `test: 隔离 Star 邀请状态、稳定延迟结果等待` —— 提升 Windows/Python 3.14 CI 稳定性。（[链接](https://github.com/HKUDS/nanobot/pull/6076)）
- **PR #5299** [已关闭，标记 conflict] `feat(api): 结构化 token 用量记录` —— 暴露按日 token 用量诊断端点，存在冲突，与热门 Issue #5266 诉求直接相关，**值得关注其后续重提**。（[链接](https://github.com/HKUDS/nanobot/pull/5299)）

**小结**：单日关闭 7 个 PR，覆盖 MCP、文档解析、WebUI、CI 四个领域，稳定性和本地化体验均有实质推进。

---

## 4. 社区热点

- **Issue #5266**（15 条评论，热度第一）`Logs about token consumption` —— 用户反馈 nanobot 在无感知活动下 2 小时烧掉百万级 token，强烈要求**按调用记录 token 消耗日志**。该 Issue 自 8 月持续活跃至今，PR #5299 曾尝试解决但因冲突关闭，说明这是当前最迫切的社区诉求。（[链接](https://github.com/HKUDS/nanobot/issues/5266)）
- **Issue #6029**（2 条评论）`静默上下文压缩，抑制后台 Dream/idle 周期的频道广播` —— 用户希望后台维护任务（压缩、dream、心跳）不要向活跃频道推送“Compressing context…”之类的通知。（[链接](https://github.com/HKUDS/nanobot/issues/6029)）
- **Issue #6065 + PR #6066** —— 当天报告、当天修复、当天关闭，展示维护者对 MCP 超时问题的快速响应，获得正面反馈。（[链接](https://github.com/HKUDS/nanobot/issues/6065)）

---

## 5. Bug 与稳定性（按严重程度排列）

| 严重度 | 问题 | 状态 |
|---|---|---|
| **P1（安全）** | **PR #6069**：`pin_resolved_url_dns()` 对 bytes 主机名做 `str()` 转换失败，DNS pinning 失效可致二次解析绕过（TOCTOU）。**已有 fix PR 待合并，建议优先处理。**（[链接](https://github.com/HKUDS/nanobot/pull/6069)） | 🔧 有 fix |
| P2（安全） | **PR #6067**：MCP discovery 错误日志泄漏 URL userinfo/签名/服务端密钥。（[链接](https://github.com/HKUDS/nanobot/pull/6067)） | 🔧 有 fix |
| P2（并发） | **Issue #6070 + PR #6071**：运行中的 cron 任务被重新调度时，完成回调会“吞掉”新 schedule（一次性任务被禁用、周期任务被推迟）。已有完整复现和 fix PR。（[链接](https://github.com/HKUDS/nanobot/issues/6070)） | 🔧 有 fix |
| P2（并发） | **PR #6064**：手动与定时 Dream 运行并发时覆盖较新记忆、处理游标回退。（[链接](https://github.com/HKUDS/nanobot/pull/6064)） | 🔧 有 fix |
| P2（回归） | **PR #6066**：MCP streamable HTTP 30s 固定读超时回归（源自 #4230），已修复关闭。（[链接](https://github.com/HKUDS/nanobot/pull/6066)） | ✅ 已修复 |
| P2 | **PR #6033**：会话元数据更新使 runtime sidecar 失效，重启后恢复异常。（[链接](https://github.com/HKUDS/nanobot/pull/6033)） | 🔧 有 fix |
| P2 | **PR #4819**（7 月提交，长期未合并）：`WeakValueDictionary` 导致 consolidation 锁在 GC 后身份不稳定。（[链接](https://github.com/HKUDS/nanobot/pull/4819)） | ⏳ 待审 |
| P2 | **PR #4820**（7 月提交）：非字符串 URL 被强转污染 web_fetch 缓存签名。（[链接](https://github.com/HKUDS/nanobot/pull/4820)） | ⏳ 待审 |

**亮点**：几乎所有新报 Bug 均在同日附带带回归测试的 fix PR，修复纪律优秀。

---

## 6. 功能请求与路线图信号

新功能需求及落地可能性判断：

1. **Token 用量日志**（Issue #5266）→ PR #5299 已实现但被关闭（conflict）。**高概率纳入下一版本**，是呼声最高的需求。
2. **群聊中“观察而不必回复”的 agent 行为**（Issue #6079，@dmerkert）→ 涉及消息处理管线分层（接收→相关性判断→处理→是否回复），尚无对应 PR，属中期路线图信号。（[链接](https://github.com/HKUDS/nanobot/issues/6079)）
3. **心跳通知评估器独立模型预设**（Issue #6078，@dmerkert）→ 可降低心跳评估的 token 成本，与 #5266 的成本诉求呼应，实现成本低，**短期可期**。（[链接](https://github.com/HKUDS/nanobot/issues/6078)）
4. **后台静默压缩/静默广播**（Issue #6029）→ 与 PR #6064 的 Dream 串行化改造方向一致，可能一并处理。（[链接](https://github.com/HKUDS/nanobot/issues/6029)）
5. **待合并功能 PR**：Sendblue iMessage/SMS 通道（PR #6081）、WebUI 本地可信扩展机制（PR #6032）、定时任务可切换会话（PR #6057）、per-server 代理开关（PR #6072）、About 页显示 gateway commit（PR #6080）、FXMacroData MCP 预设（PR #6068）——生态扩展（消息通道、MCP 预设、扩展系统）是明显的路线方向。

---

## 7. 用户反馈摘要

- **成本焦虑是最突出痛点**：用户实测“无感知活动下 2 小时消耗上百万 token”（#5266），且缺乏按调用维度的消耗日志，无法归因；心跳评估复用主模型（#6078）进一步放大成本，说明**可观测性与成本控制是双核心诉求**。
- **后台任务的“存在感”过强**：压缩/dream/心跳的通知直接广播到活跃频道（#6029），干扰真实对话，用户希望后台维护真正“隐形”。
- **稳定性方面**：cron 重调度丢任务（#6070）、MCP 长时工具调用超时（#6065）等边界场景 Bug 说明用户已将 NanoBot 用于**生产级定时任务和外部工具集成**场景。
- **正面信号**：CJK 行高修复（#6073）、公式排版（#6075）、图标统一（#6074）反映 WebUI 打磨细致，且维护者响应速度（当天闭环）获得社区认可。

---

## 8. 待处理积压

建议维护者优先关注：

1. **Issue #5266**（8/6 提出，15 评论，持续两个月未根本解决）—— token 可观测性是社区最热诉求，PR #5299 关闭后需明确后续计划。
2. **PR #4819 / #4820**（7/6 提出，已积压 3 个月，昨日有更新）—— 两个 P2 修复长期停留在 OPEN，建议尽快评审或说明阻塞原因。
3. **PR #6069（P1 安全修复）** —— 建议最优先合并并考虑随版本尽快发布。
4. **Issue #6029**（10/4 提出）—— 后台通知抑制尚无对应 PR，避免与同类 dream/cron 改造（#6064、#6071）失焦。

---

**健康度总评**：⭐⭐⭐⭐½ —— 修复响应速度快、PR 质量高（普遍附测试与复现），主要短板是两个 7 月的 P2 PR 积压和 token 可观测性需求的落地延迟。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 · 2026-10-06

---

## 1. 今日速览

项目整体保持高度活跃：过去 24 小时内 Issues 更新 26 条（新开/活跃 23、关闭 3），PR 更新 50 条（待合并 45、合并/关闭 5），无新版本发布。今日新增 Issue 集中在**多模态图片处理**（phantom 图片重发、超大图片处理）和 **SOP 可视化编排**的批量功能提案，社区对插件体系与沙箱安全问题的讨论持续升温。v0.8.6 / v0.9.0 的 release-gate PR 队列依然庞大（多个 XL 级 PR 待审），显示版本收敛压力大但推进有序。综合评估：**项目健康度高，贡献者梯队（distinguished/experienced contributor）活跃，但审阅带宽可能成为瓶颈**。

---

## 2. 版本发布

今日无新版本发布。v0.8.6 与 v0.9.0 均有多个带 `release-gate` 标签的 PR 在排队（详见第 6 节）。

---

## 3. 项目进展

今日关闭/合并的 5 个 PR 中，关键项包括：

- **PR #11527**（已关闭/合并）`fix(config): refuse unproven full saves over existing files` — 直接修复 S0 级数据丢失 Bug #10495（`Config::save()` 覆盖操作者配置）。该 PR 拒绝“非从目标文件加载的完整保存”，保持原文件字节不变，属于**破坏性变更防护**。([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11527))
- **PR #10480**（已关闭/合并）`fix(runtime): recover from rejected image requests` — 图片请求被拒后（排除上下文溢出的 HTTP 400）仅重试去掉新增图片的回放安全请求。落地后随之开启了清理任务 Issue #11545（移除废弃的 `StreamErrorWithUsage`）。([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10480))
- 关闭的 Issues 包括 S0 配置覆盖 Bug **#10495**、CI 偶发失败 **#11294**（runtime 并行门测试竞态）、ZeroCode TUI 消息延迟 **#11482**。

**评价**：今日合并量虽小（5 条），但两条均为高严重度修复，尤其是配置数据丢失防护的落地，是稳定性方面的重要一步。

---

## 4. 社区热点

今日评论最活跃的讨论：

- **Issue #10495**（6 评论，已关闭）— S0 配置覆盖 Bug，今日随 PR #11527 落地关闭，是本周社区关注度最高的问题。([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10495))
- **PR #10938** `fix(tools): declare tool attachments explicitly` — 涉及面极广（所有 provider、tool、channel），将工具附件从“扫描文本找图片标记”改为显式声明，是多模态管线重构的核心。([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10938))
- **Issue #9887**（4 评论）— 用户诉求超大图片应**降采样而非直接丢弃**，并允许用 0 禁用多模态限制；与今日新报的 #11554（phantom 图片重发）同属图片体验主题。([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9887))
- **Issue #7891**（4 评论）— Signal 渠道媒体附件支持，与今日 #11553（拆分消息合并）诉求高度相关，Signal 用户群体活跃。([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7891))
- **PR #11261 / #11236** — 插件“分阶段准入替换安装”与“不完整安装恢复”，v0.8.6 release-gate，评论活跃，插件体系是当前迭代主线。([11261](https://github.com/zeroclaw-labs/zeroclaw/pull/11261) / [11236](https://github.com/zeroclaw-labs/zeroclaw/pull/11236))

**诉求分析**：社区焦点集中在（a）多模态消息在渠道/工具链路中的一致性与体验；（b）插件安装/更新的安全准入；（c）SOP 工作流编排能力补齐。

---

## 5. Bug 与稳定性（按严重度排列）

| 严重度 | Issue | 描述 | 状态/修复 |
|---|---|---|---|
| **S0** | [#11540](https://github.com/zeroclaw-labs/zeroclaw/issues/11540) | bubblewrap 沙箱在 Linux 检测失败，静默回退应用层沙箱（安全降级） | 有候选修复 [PR #11559](https://github.com/zeroclaw-labs/zeroclaw/pull/11559)（回退 WARN 中说明原因） |
| **S1** | [#11539](https://github.com/zeroclaw-labs/zeroclaw/issues/11539) | Firejail 沙箱报 `invalid --nowheel` | 未修复 |
| **S1** | [#11538](https://github.com/zeroclaw-labs/zeroclaw/issues/11538) | Firejail 沙箱报 `invalid private directory`，日志完全不透明 | 未修复 |
| **S1** | [#11481](https://github.com/zeroclaw-labs/zeroclaw/issues/11481) (p1) | ZeroCode 终端断开后进程 100% CPU 空转（多实例复现） | 未修复 |
| **S2** | [#11554](https://github.com/zeroclaw-labs/zeroclaw/issues/11554) | 历史路径图片标记每轮重发，模型描述“幻影新图”（Signal/Telegram/Discord） | 今日新报，与 #10938 相关 |
| **S2** | [#11562](https://github.com/zeroclaw-labs/zeroclaw/issues/11562) | 插件更新瞬间新旧代 manifest/组件错配 | 今日新报 |
| **S2** | [#11515](https://github.com/zeroclaw-labs/zeroclaw/issues/11515) | 成本账本 torn-write 记录被静默丢弃，汇总看似完整 | 未修复 |
| — | [#11552](https://github.com/zeroclaw-labs/zeroclaw/issues/11552) | egress 授权仪式忽略 `websocket_client`/`socket_client` 声明 | 今日新报 |

**趋势**：@maacruz 连报三条 Linux 沙箱问题（含一条 S0），提示 **Linux 沙箱后端探测与兼容性是当前最集中的用户痛点**。

---

## 6. 功能请求与路线图信号

**SOP 可视化编排系列**（@IftekharUddin 一日内连发 6 条，均标 `status:icebox`，构成清晰路线图）：
- [#11547](https://github.com/zeroclaw-labs/zeroclaw/issues/11547) SOP 运行绑定不可变工作流定义版本
- [#11551](https://github.com/zeroclaw-labs/zeroclaw/issues/11551) 可组合子 SOP 节点
- [#11549](https://github.com/zeroclaw-labs/zeroclaw/issues/11549) 可审查的 SOP gate 载荷与决策动作
- [#11550](https://github.com/zeroclaw-labs/zeroclaw/issues/11550) 跨客户端持久化 SOP 分组
- [#11546](https://github.com/zeroclaw-labs/zeroclaw/issues/11546) SOP 绑定持久管理代理会话
- [#11548](https://github.com/zeroclaw-labs/zeroclaw/issues/11548) SOP 辅助代理权限与运行中自适应

**其他功能请求**：
- [#11561](https://github.com/zeroclaw-labs/zeroclaw/issues/11561)：`PluginHost::update_admitted` 内置权限增量校验（安全加固）
- [#11553](https://github.com/zeroclaw-labs/zeroclaw/issues/11553)：按渠道的消息合并去抖 + 保留附件
- [#11166](https://github.com/zeroclaw-labs/zeroclaw/issues/11166)：按批驱逐超限图片以保护 prompt cache

**版本纳入判断**：
- **v0.8.6**：插件体系相关 PR 排队密集 —— #11236、#11261、#11302（channel 绑定与 grant 种子化，对应 Issue #10996），大概率构成该版本主体。
- **v0.9.0**：#11132（RPC turn 对等性）、#11221（默认 11 个内建工具）、#9746（会话工具 ownership 域）、#11272（桌面内核嵌入 dashboard）。
- **PR #11560**（Colony agent workspace，标 `do-not-merge`）为大型堆叠 PR，是 v0.9+ 方向的重要信号。

---

## 7. 用户反馈摘要

- **Linux 沙箱体验差**（#11538/#11539/#11540）：用户明确抱怨“日志完全不透明，看不到沙箱失败的任何痕迹”——**错误可诊断性**与后端探测可靠性是被反复提出的痛点。
- **多模态渠道体验**（#11553/#11554）：真实使用场景是 Signal 转发文件+附言拆成两条消息、模型反复描述“新”图片——用户需要的是**贴近即时通讯原生习惯的合并与去重行为**，而非严格逐条处理。
- **信任与安全敏感**（#11540 的 S0 定级、#11562 的 manifest 错配）：用户社区对沙箱静默降级、插件权限瞬时扩大高度警觉，与项目的安全优先定位一致。
- **运维成本可见性**（#11515）：成本账本数据静默丢失且“汇总看似完整”，是运营型用户最忌讳的隐性数据完整性问题。
- **正面信号**：S0 配置覆盖 Bug #10495 从 8/31 报告到 10/6 修复关闭，响应闭环获得社区认可。

---

## 8. 待处理积压

需维护者关注的长龄/受阻项目：

- **PR #9746**（8/4 开启，`needs-author-action`，p1，v0.9.0）— 会话工具 per-agent ownership 域，已排队 2 个月，是 v0.9.0 关键安全项。([链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9746))
- **Issue #10923**（p1，`status:blocked`）— 沙箱发现忽略 TUI PATH，与今日三条沙箱 Bug 同根，建议合并排查。([链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10923))
- **Issue #9887 / #7891**（均 `parking-lot`）— 图片降采样与 Signal 媒体支持，长期被用户追问，需排期决策。
- **Issue #11166**（`status:blocked`）— 图片批量驱逐，与 #11554 的修复路径可能耦合，宜统筹。
- **Issue #8310** — Schema V4 破坏性精简（`status:in-progress`），将影响所有用户的配置迁移，建议尽早公布迁移说明。
- 多个 XL 级 release-gate PR 处于 `needs-author-action` / `needs-maintainer-review`（#10938、#11261、#11451），审阅带宽是当前版本发布的最大约束。

---

*数据来源：zeroclaw-labs/zeroclaw GitHub 过去 24 小时活动快照。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-10-06

## 1. 今日速览

项目今日保持高活跃度：过去 24 小时内有 50 条 Issue 更新（47 新开/活跃，3 关闭）和 50 条 PR 更新（48 待合并，2 合并/关闭），无新版本发布。Issue 侧以 Desktop 客户端稳定性、安装/更新可靠性和会话状态管理类 Bug 为主，多条 P2 级问题集中暴露；PR 侧出现了一大批资源泄漏修复的批量重提交（HTTP 响应未关闭系列），显示社区贡献者在做系统性代码卫生工作。总体看，项目处于功能扩张后的质量收敛期，Bug 报告速度明显快于修复合并速度，建议关注积压增长趋势。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日仅 2 条 PR 合并/关闭，合并吞吐量偏低，48 条 PR 处于待合并状态。

- **#133625** [feat(compression)](https://github.com/NousResearch/hermes-agent/pull/133625) — 今日新开的重点功能 PR：为内置压缩器增加 "warm handoff"（`compression.warm_handoff: off|on|auto`），让压缩摘要在主模型的缓存 prompt 上生成以复用 prompt cache，直击 #23811（压缩膨胀小会话）相关的上下文压缩痛点，值得优先评审。
- **@KhanCold 的资源泄漏修复系列**（约 15 条重提交 PR：[#120791](https://github.com/NousResearch/hermes-agent/pull/120791)–[#120807](https://github.com/NousResearch/hermes-agent/pull/120807)）— 统一修复 requests/urllib HTTP 响应未显式关闭的问题，覆盖 evals、browser CDP、MCP OAuth、DingTalk auth、Discord voice doctor 等多个模块。均标 P3/P4，属代码卫生性质，非实测泄漏。作者称此前因验证错误被关闭，本次以干净历史重新提交，维护者可考虑批量处理。
- **#120180** [feat(discord)](https://github.com/NousResearch/hermes-agent/pull/120180) — Discord 语音频道 TTS 流式播放 + 对话式改写，功能类 PR 仍在排队。

整体进展判断：功能与修复均在持续产出，但合并节奏慢于提交节奏，PR 队列堆积明显。

## 4. 社区热点

- **[#40239](https://github.com/NousResearch/hermes-agent/issues/40239)**（14 评论，👍4）— 请求 Desktop 端支持巴西葡语（pt-BR）。后端/TUI 已有 357+ 行的 `locales/pt.yaml`，唯 Desktop UI 缺失，属于低成本高收益的本地化补全，讨论热烈，建议纳入近期迭代。
- **[#122349](https://github.com/NousResearch/hermes-agent/issues/122349)**（9 评论）— 插件运行时状态写入成员目录导致无限 sync/rebuild/re-exec 循环，影响插件系统可用性。
- **[#125437](https://github.com/NousResearch/hermes-agent/issues/125437)**（7 评论，P2）— 来自 pain-miner 的痛点聚合：更新失败留下半安装状态、裸报错、无产品内恢复路径，本周 15 个 Discord 讨论线程。这是典型的"最后一公里"体验问题，反映社区对安装器健壮性的强烈诉求。
- **[#21521](https://github.com/NousResearch/hermes-agent/issues/21521)**（7 评论，已关闭）— MiniMax OAuth auth_type 未处理的告警，今日关闭，是少数得到解决的 Issue。
- **[#35986](https://github.com/NousResearch/hermes-agent/issues/35986)**（7 评论）— Kanban 多智能体编排可靠性伞式 Issue（陈旧检测、静默恢复、孤儿清扫、子代理监督），长期活跃，代表多智能体方向的路线图共识。

## 5. Bug 与稳定性（按严重程度）

**P2 级：**

| Issue | 问题 | Fix PR |
|---|---|---|
| [#133628](https://github.com/NousResearch/hermes-agent/issues/133628) | Windows 上 Desktop 渲染进程对死亡后端端口无退避重连，~20 小时 ENOBUFS 风暴拖垮整机 | 未见 |
| [#133569](https://github.com/NousResearch/hermes-agent/issues/133569) | Desktop "Show earlier messages" 按钮失活，历史无法加载 | 未见 |
| [#132817](https://github.com/NousResearch/hermes-agent/issues/132817) | 一次瞬时 429/entitlement 冷却即冻结凭据数天，无重置时间探测、无可见性（本周 13 起） | 未见 |
| [#125437](https://github.com/NousResearch/hermes-agent/issues/125437) | 更新失败留下半安装状态，无恢复路径 | 未见 |
| [#23811](https://github.com/NousResearch/hermes-agent/issues/23811) | ContextCompressor 膨胀小会话，触发反复压缩与分裂 | 相关：PR #133625 |
| [#122928](https://github.com/NousResearch/hermes-agent/issues/122928) | macOS Desktop 后端通过 PYTHONPATH 向终端子进程泄漏被替换的旧 venv | 未见 |
| [#56634](https://github.com/NousResearch/hermes-agent/issues/56634) | terminal 工具 `bash -l` 快照在 Debian 镜像上丢失 venv PATH | 未见 |
| [#63395](https://github.com/NousResearch/hermes-agent/issues/63395) | Matrix 加密房间投递后数据库池被停止、断连 | 未见 |
| [#120567](https://github.com/NousResearch/hermes-agent/issues/120567) | SQLite < 3.44.0 上 `hermes doctor` 误报健康 FTS 索引损坏 | 未见 |

**P3 级（节选）：** [#131659](https://github.com/NousResearch/hermes-agent/issues/131659)（一个悬空符号链接导致 Dashboard 文件页整体 500）、[#133620](https://github.com/NousResearch/hermes-agent/issues/133620)（切换 profile 后侧边栏状态不同步）、[#129622](https://github.com/NousResearch/hermes-agent/issues/129622)（1Password 服务账户 token 无法填充，安全边界类）、[#133523](https://github.com/NousResearch/hermes-agent/issues/133523)（陈旧 desktop-build-stamp 误报构建过期）。

值得注意的模式：**Windows 平台问题集中**（#133628、#131659、#124359 原生 Windows 测试套件问题），建议加强 Windows CI 覆盖。

## 6. 功能请求与路线图信号

- **压缩/上下文管线**：PR #133625（warm handoff）与长期 Issue #35325（五层上下文管线 + Plan Mode，对标 Claude Code/Codex）呼应，上下文管理是明确的方向信号。
- **多智能体编排**：#35986（Kanban 可靠性伞式）+ #122444（CLI 长会话自唤醒心跳）+ #132920（cron 跨 profile 可见性）共同指向"无人值守长时运行 agent"这一核心场景。
- **Telegram 多机器人**：#75711（一个群里多台 Hermes 实例，Jetson/DGX 边缘集群）+ #44881（多 bot 共享频道上下文）反映 fleet 化部署需求，已有社区实际部署 DGX Spark/Jetson Thor 等硬件。
- **本地化**：#40239（pt-BR Desktop）实现成本低、证据充分，最可能被短期纳入。

## 7. 用户反馈摘要

- **安装/更新是最大痛点**：#125437 显示用户遇到更新失败后只能靠 Discord 里手工配方自救，"every fix is a hand-typed recipe" 是最刺耳也最真实的反馈。
- **凭据冷却不透明**：#132817 用户抱怨一次 429 就让凭据"消失"数天，且无任何提示，影响生产可用性信任。
- **Desktop 稳定性信任受损**：近期集中出现历史加载失活（#133569）、重连风暴（#133628）、profile 切换状态错乱（#133620）等问题，Desktop 是当前用户不满的焦点。
- **正面信号**：用户在 Matrix、Discord 语音、Telegram fleet、边缘设备等深度场景中长期使用并提交详尽根因分析（如 #63395、#56634 的报告质量很高），说明存在一批高粘性、高技术水平的核心用户群。

## 8. 待处理积压

- **#23811**（P2，5 月开）— 压缩膨胀问题已挂起近 5 个月，PR #133625 提供了相关方案，建议关联评审并给出落地时间表。
- **#35986**（5 月开）— Kanban 编排伞式 Issue 持续累积但无明确 owners 分配。
- **#120567**（P2，9 月开）— doctor 误报问题直接影响用户对诊断工具的信任。
- **PR 队列整体**：48 条待合并 PR 中，#110502 已排队 3 周以上；@KhanCold 的 ~15 条泄漏修复重提交需维护者给出明确处理策略（批量合并或关闭），避免贡献者热情流失。
- **比例预警**：今日关闭/新开 Issue 比 = 3/47，PR 合并/新增比 = 2/48，若该趋势延续，需评估维护带宽或引入更多 triage 权限的社区维护者。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-10-06

## 1. 今日速览

过去 24 小时 PicoClaw 共有 9 条动态（5 条 Issues 更新、4 条 PR 更新），无新版本发布。活跃度以社区驱动为主，维护者响应明显不足——几乎所有活跃条目均被 stale bot 标记，甚至有安全漏洞报告因无法私下联系维护者而受阻。值得关注的是，社区已出现活跃 fork（afjcjsbx/picoclaw），项目“失维护”风险信号正在累积。整体健康度：**中等偏弱，处于维护者缺位、社区自救阶段**。

## 2. 版本发布

无。最新版本仍为 v0.3.1。

## 3. 项目进展

今日无新合并 PR，仅 1 条关闭：

- **[PR #3354](https://github.com/sipeed/picoclaw/pull/3354)（已关闭）**：IRCv3 multiline 消息组装支持。该 PR 由 stale bot 关闭而非合并，意味着 IRC 长消息仍会被拆散处理——这是一个**功能回退式关闭**，项目并未因此实际前进。
- **[Issue #3366](https://github.com/sipeed/picoclaw/issues/3366)（已关闭）**：OpenAI 兼容自定义 provider 请求，同样被 stale 关闭，社区呼声（6 条评论）未被采纳。

**结论：今日项目实际进展接近零，两条关闭均为 stale bot 行为而非人工处理。**

## 4. 社区热点

- **[Issue #3404](https://github.com/sipeed/picoclaw/issues/3404) Reliability fixes with reproducers (wave 1)**：@x1F916 对核心模块（agent loop、channels manager、config、updater）做了一轮系统性 bug 审计，附带复现步骤，且指出此前的报告常在修复前就被 stale bot 关闭。这是当前最有价值的技术贡献之一，值得维护者优先回应。
- **[Issue #3405](https://github.com/sipeed/picoclaw/issues/3405) 请求开启私有漏洞报告**（👍1）：安全研究者发现多个安全问题，但仓库未启用 GitHub 私有漏洞上报、无 SECURITY.md，**安全披露通道缺失**。
- **[Issue #3398](https://github.com/sipeed/picoclaw/issues/3398) 活跃 fork 公告**：@afjcjsbx 宣布接管维护。社区诉求清晰：项目有真实需求，但官方维护停滞。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 来源 | Fix PR |
|---|---|---|---|
| 🔴 高 | 多个安全问题待私下披露，安全通道缺失 | [#3405](https://github.com/sipeed/picoclaw/issues/3405) | 无 |
| 🔴 高 | 核心模块（agent loop / config / updater 等）多项可靠性 bug，含复现 | [#3404](https://github.com/sipeed/picoclaw/issues/3404) | 暂无 |
| 🟡 中 | Web UI 大量文本时严重卡顿（桌面+移动端均复现） | [PR #3347](https://github.com/sipeed/picoclaw/pull/3347)（含 fix，待审查） | ✅ #3347 |
| 🟡 中 | IRC 长消息拆散问题（修复 PR 被 stale 关闭） | [#3354](https://github.com/sipeed/picoclaw/pull/3354) | ❌ 已关闭 |

## 6. 功能请求与路线图信号

- **iMessage/SMS 通道（[PR #3416](https://github.com/sipeed/picoclaw/pull/3416)）**：新增 Sendblue 原生通道，文档完善，为 draft 状态待维护者反馈——扩展消息渠道是明确社区需求方向。
- **Web search provider Keenable（[PR #3370](https://github.com/sipeed/picoclaw/pull/3370)）**：免 API key 即可用，门槛低，适合快速合并。
- **OpenAI 兼容 provider 自定义 + Tsubasa 目录项（[#3366](https://github.com/sipeed/picoclaw/issues/3366) / [#3397](https://github.com/sipeed/picoclaw/issues/3397)）**：诉求一致——让用户接入自托管 router 和第三方 OpenAI 兼容端点。#3366 已被 stale 关闭，但需求热度（6 评论）表明这是高频痛点。

**判断**：在维护者缺位情况下，这些 PR 短期内难以进入官方版本，可能流向社区 fork。

## 7. 用户反馈摘要

- **真实用户在用、且愿意深挖**：@x1F916、@iMilnb 等用户在实际部署中遇到可靠性 bug 和 UI 卡顿，并主动提供复现与修复。
- **自托管/灵活性诉求强**：希望接入自定义 OpenAI 兼容端点（如 9Router、Tsubasa），反映核心用户群偏技术型、注重可控性。
- **消息渠道多元化**：iMessage/SMS、IRC 改进等需求显示 PicoClaw 被当作“全渠道个人 AI 助手”使用。
- **不满点**：stale bot 过于激进，导致有效报告和修复被自动关闭，用户信任受挫；无版本迭代节奏。

## 8. 待处理积压

| 条目 | 状态 | 建议 |
|---|---|---|
| [#3405](https://github.com/sipeed/picoclaw/issues/3405) 安全上报通道 | OPEN/stale | **最高优先**：立即启用私有漏洞报告并添加 SECURITY.md |
| [#3404](https://github.com/sipeed/picoclaw/issues/3404) 可靠性 bug 集 | OPEN/stale | 逐项确认并修复，避免被 stale 关闭 |
| [PR #3347](https://github.com/sipeed/picoclaw/pull/3347) UI 卡顿修复 | OPEN/stale（8/27 起） | 用户已实测验证，建议尽快审查合并 |
| [PR #3370](https://github.com/sipeed/picoclaw/pull/3370) Keenable 搜索 | OPEN/stale（9/7 起） | 改动小、可快速合并 |
| [PR #3416](https://github.com/sipeed/picoclaw/pull/3416) Sendblue 通道 | OPEN（10/5 新开） | draft 状态，待作者完善 |
| [#3398](https://github.com/sipeed/picoclaw/issues/3398) 社区 fork | OPEN/stale | 官方应明确表态：恢复维护或认可 fork，避免社区分裂 |

---
*数据来源：GitHub sipeed/picoclaw，统计窗口为过去 24 小时。核心风险提示：安全披露通道缺失 + stale bot 误伤有效贡献，建议维护者本周期优先处理。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-10-06

---

## 1. 今日速览

- 今日项目活跃度**中高**：24 小时内 PR 更新 24 条（待合并 12 / 已合并关闭 12），发布 1 个版本，Issue 端仅 1 条更新（且为关闭），表明项目处于**发布冲刺 + 稳定性修复密集期**。
- 核心团队（@glifocat、@jsboige）主导了今天几乎所有提交，围绕 `v2026.10.0-rc.2` 发布及 Windows/macOS 平台稳定性做了大量收尾工作。
- 社区侧有新面孔贡献：@roberttidball 提交了新的 MCP 工具 skill，@lookevink 提交了 Sendblue iMessage/SMS 通道，生态扩展持续活跃。
- 当前待合并 PR 共 12 个，其中 4 个是今天新开的 Windows/macOS 底层修复，预计将进入 rc.3 或正式版。

---

## 2. 版本发布

### [v2026.10.0-rc.2](https://github.com/nanocoai/nanoclaw/releases)（2026-10-05 发布）

- **里程碑意义**：这是 **2026.10.0 的第二个 release candidate**，也是：
  - 首个采用**日历版本号**的版本系列；
  - 首个 `/update-nanoclaw` **默认按已发布 Release 安装**的版本——更新机制从追踪 `main` 分支尖端改为跟随正式发布。
- **通道说明**：`beta` 通道用户会收到此候选版本；`stable` 通道保持不变（release notes 截断，建议查看原文确认 stable 切换时间）。
- **迁移注意**：含自 rc.1 以来合并的 10 个 PR（见 [#4038](https://github.com/nanocoai/nanoclaw/pull/4038) release PR）。虽然 rc.2 本身无明确破坏性变更，但 OneCLI 升级路径在近期 PR 中有变动（见下文 #4036/#4039/#4041），OneCLI 用户升级前应仔细阅读升级指南。

---

## 3. 项目进展

今日共合并/关闭 **12 个 PR**，主要推进方向：

**发布与分支管理**
- [#4038](https://github.com/nanocoai/nanoclaw/pull/4038) — rc.2 发布 PR，刷新 changelog。
- [#4000](https://github.com/nanocoai/nanoclaw/pull/4000) — `main → channels` 大规模同步合并（463 commits），采用 merge commit 方式保留合并基，为 channels 架构线后续开发扫清冲突。
- [#3995](https://github.com/nanocoai/nanoclaw/pull/3995) — 修复 `channels` 分支测试与类型检查，使分支重新变绿（横跨 17 个 area 标签的大修复）。

**macOS 更新可靠性（对应用户 Issue #4021）**
- [#4037](https://github.com/nanocoai/nanoclaw/pull/4037) — `launchctl bootout` 后等待 host 真正退出再做快照，修复更新竞态导致的 I/O error 5。

**OneCLI 升级链路加固（3 连修）**
- [#4039](https://github.com/nanocoai/nanoclaw/pull/4039) — 升级指南拒绝空的 gateway 版本 pin，防止 Docker Compose 回退到 `latest`。
- [#4041](https://github.com/nanocoai/nanoclaw/pull/4041) — 修正迁移警告指向（回滚到 pin 版本而非旧版本）。
- [#4036](https://github.com/nanocoai/nanoclaw/pull/4036) — OneCLI 安装钉在 gateway 1.42.0，并禁用 1.42+ 上的 `/add-dial-tool`（规避 1.43 的 API 410）。

**安全与依赖**
- [#4007](https://github.com/nanocoai/nanoclaw/pull/4007) — 让 Dependabot 看到 skill 内 pin 的 npm 版本，修复了对 `@whiskeysockets/baileys` 7.0.0-rc.9 关键漏洞的盲区。这是重要的供应链安全改进。
- [#4015](https://github.com/nanocoai/nanoclaw/pull/4015) — 无凭证的读请求不再触发审批卡片，显著降低 Iron Proxy 场景下的操作噪音。

**测试稳定性**
- [#4035](https://github.com/nanocoai/nanoclaw/pull/4035) — macOS 上重用 exec-checked stub，消除 restart readiness 测试超时。

**整体评估**：一天内完成一个 RC 发布 + 分支大合并 + 一条完整问题链（用户报告 → 定位 → 修复 → 发布）闭环，工程节奏健康、执行效率高。

---

## 4. 社区热点

今日无新开 Issue，评论数据缺失（`undefined`），从标签与内容推断热点：

- **[#4043](https://github.com/nanocoai/nanoclaw/pull/4043) Sendblue iMessage/SMS skill**（@lookevink）— 社区贡献的最大功能 PR：完整的 iMessage/SMS 双向通道，含 webhook 认证、运营者 DM 接线、编号审批回复、卸载指引。反映用户对**非 Telegram 渠道接入**的强烈诉求。
- **[#4040](https://github.com/nanocoai/nanoclaw/pull/4040) FXMacroData MCP 工具 skill**（@roberttidball）— 宏观经济/央行/汇率数据 MCP 接入，默认免密钥，布局对齐 `/add-tavily-tool`，说明 skill 模板已形成可复制的贡献范式。
- **[#4042](https://github.com/nanocoai/nanoclaw/pull/4042) Resend adapter 升 0.3.0** — 主动清除 4 个 moderate npm audit 告警，社区对依赖卫生关注度高。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#4021](https://github.com/nanocoai/nanoclaw/pull/4021)（Issue，已关闭）macOS 更新时 `launchctl bootout` 未等待 host 退出，快照与关机竞态导致 re-bootstrap 失败（I/O error 5），曾打断 2.3.0→2.4.0 升级（可干净回滚） | ✅ 已有 fix PR [#4037](https://github.com/nanocoai/nanoclaw/pull/4037)，已合并 |
| 🟠 中高 | [#4047](https://github.com/nanocoai/nanoclaw/pull/4047) delivery 轮询以 readonly 打开 `outbound.db`，hot-journal 恢复时抛 `SQLITE_READONLY` | 🔧 fix PR 待合并 |
| 🟠 中高 | [#4046](https://github.com/nanocoai/nanoclaw/pull/4046) Windows Docker named pipe 短暂消失导致单次 FATAL 探针退出 host，触发 5-15 分钟熔断退避 | 🔧 fix PR 待合并（加瞬时失败重试） |
| 🟠 中 | [#4045](https://github.com/nanocoai/nanoclaw/pull/4045) Windows 服务账户下 AF_UNIX socket `EACCES`，host 重启循环熔断 | 🔧 fix PR 待合并（改用 named pipe） |
| 🟡 中 | [#4044](https://github.com/nanocoai/nanoclaw/pull/4044) `messageIdForAgent` 用 `:` 连接 id，在 Windows NTFS 上非法（附件目录创建失败） | 🔧 fix PR 待合并（文件系统安全分隔符） |
| 🟡 低中 | [#3918](https://github.com/nanocoai/nanoclaw/pull/3918) agent 在 `send_message` 前后丢失/重复回复（流式与 end-of-turn 两类 provider） | 🔧 fix PR 开放中（9-25 提出，仍在迭代） |

**观察**：今天新开的 4 个 fix PR 全部针对 **Windows 平台**，项目明显在为 Windows 生产可用性补短板。所有已报告 bug 均已有对应修复 PR，无积压失修问题。

---

## 6. 功能请求与路线图信号

可能进入下一版本（rc.3 / 2026.10.0 正式版）的开放 PR：

- **[#4043](https://github.com/nanocoai/nanoclaw/pull/4043) Sendblue iMessage/SMS skill** — 渠道扩展是项目明确方向（`area/channels` 为活跃开发区，且有专门 `channels` 分支），采纳概率高。
- **[#3932](https://github.com/nanocoai/nanoclaw/pull/3932) `/add-lean-tasks`** — 定时任务在小型/本地模型上以最小上下文运行，直击运行成本痛点，已迭代 10 天，接近成熟。
- **[#3930](https://github.com/nanocoai/nanoclaw/pull/3930) OpenCode 环境统一** — 修复 config/runtime key/server env 不一致，是 provider 层的必要加固。
- **[#4040](https://github.com/nanocoai/nanoclaw/pull/4040) FXMacroData MCP skill** — 复用既有 skill 模板，合并摩擦小。
- **[#4047/#4046/#4045/#4044](https://github.com/nanocoai/nanoclaw/pull/4047) 四个稳定性修复** — 大概率在正式版前优先合入。

**路线图信号**：日历版本号 + 按发布更新 + `beta/stable` 双通道，表明项目正从“开发者向”转向**生产级发布管理**；channels 分支的重度投入预示多通道架构是下一个大版本主线。

---

## 7. 用户反馈摘要

- **macOS 升级可靠性是真实痛点**：#4021 报告者经历了升级中断（虽有干净回滚兜底），说明自更新机制在生产使用中已被依赖，也暴露了边缘时序问题。
- **Windows 用户长期处于二等公民状态**：4 个新 fix PR（named pipe、NTFS 保留字符、Docker Desktop 管道抖动、readonly SQLite）全部来自维护者主动排查，反映 Windows 部署（尤其 NSSM 服务账户场景）问题密集。
- **审批噪音影响日常运营**：#4015 的合并意味着 Iron Proxy 用户此前每开一个网页就收到一堆审批卡片——运营者对“够用的安全而非过度审批”有明确偏好。
- **成本敏感**：#3932（lean tasks）直指“定时任务没必要带全套上下文跑大模型”的使用场景，社区对本地/小模型混跑方案有需求。

---

## 8. 待处理积压

- **[#3918](https://github.com/nanocoai/nanoclaw/pull/3918)**（09-25 开启，11 天）— `send_message` 前后回复丢失/重复，涉及流式与 end-of-turn 两类 provider，是核心 agent-runner 正确性问题，建议优先推进 review/合入。
- **[#3932](https://github.com/nanocoai/nanoclaw/pull/3932)**（09-26 开启，10 天）与 **[#3930](https://github.com/nanocoai/nanoclaw/pull/3930)**（09-26 开启，10 天）— 均为功能完备的多标签大 PR，长期开放易产生冲突（尤其 channels 分支刚完成大合并），建议尽快 rebase 并安排 review。
- **Issue 端零新开**：今日无未响应 Issue，积压健康。

---

**健康度总评**：⭐⭐⭐⭐（4/5）— 核心团队执行力和闭环速度出色（用户报障 24 小时内修复并随 RC 发布），依赖安全管理有改善；关注点是贡献集中于少数维护者、几个大 PR review 周期偏长，以及 Windows 平台稳定性仍在补课。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-10-06

---

## 1. 今日速览

NullClaw 今日保持高活跃度：过去 24 小时内 Issues 更新 13 条（新开/活跃 8，关闭 5），PR 更新 26 条（待合并 15，已合并/关闭 11），无新版本发布。核心贡献者 @vernonstinebaker 今日密集提交了一批高质量 Issue 与 PR，聚焦于 **Docker 镜像质量门禁、CLI 行编辑体验、测试封闭性与文档准确性** 四大方向。昨日合并的 CLI 箭头键修复（#970）与 Docker 权限修复（#1023）带出了一系列结构性的后续改进，显示项目进入了“修复-加固”的良性循环。整体健康度良好，但 **CI 缺少 Docker 镜像构建验证**（#1036）暴露的流程短板值得维护者优先处理。

---

## 2. 版本发布

今日无新版本发布。最近版本为 `v2026.4.17`。

---

## 3. 项目进展

今日合并/关闭的重要 PR（11 条）：

| PR | 内容 | 意义 |
|---|---|---|
| [#970](https://github.com/nullclaw/nullclaw/pull/970) | CLI REPL 箭头键支持（POSIX raw-mode 行编辑器） | 长期存在的 CLI 交互缺陷（关联 [#865](https://github.com/nullclaw/nullclaw/issues/865)）终于修复，零依赖实现 |
| [#1023](https://github.com/nullclaw/nullclaw/pull/1023) | Docker 非 root 镜像 HOME 权限修复 | 紧急修复官方镜像开箱即崩的 `AccessDenied` 问题，当天提出当天合并 |
| [#1011](https://github.com/nullclaw/nullclaw/pull/1011) | 修复工具调用解析失败时的内存泄漏 | 内存安全加固，代码由社区贡献者 @vernonstinebaker 完成 |
| [#959](https://github.com/nullclaw/nullclaw/pull/959) | Cron 调度器安全凭证持久化加密 | 修复 gateway 配对/公共绑定场景下 cron 认证问题，含加密存储与原子写入 |
| [#983](https://github.com/nullclaw/nullclaw/pull/983) | Provider 代理请求使用固定 curl 路径 | 安全性改进：凭证不暴露于 argv |
| [#774](https://github.com/nullclaw/nullclaw/pull/774) / [#775](https://github.com/nullclaw/nullclaw/pull/775) / [#776](https://github.com/nullclaw/nullclaw/pull/776) / [#777](https://github.com/nullclaw/nullclaw/pull/777) | 文档清理系列（被 #1039/#1040 系列取代后关闭） | 4 月提交的文档批次正式落幕，由基于 Zig 0.16.0 重写的新批次接替 |

**整体评估**：今日进展集中在 **CLI 交互体验和容器化可靠性** 两个用户直接感知的维度。#970 落地是里程碑式修复，但其审批过程中识别出的非阻塞后续（#1028/#1037）已被迅速转化为新 Issue/PR，工程闭环质量高。

---

## 4. 社区热点

- **[#865](https://github.com/nullclaw/nullclaw/issues/865)**（评论 4，今日关闭）：CLI 显示 CTRL 乱码问题，随 #970 合并而关闭。从 4 月存续至今，是用户抱怨最多的交互痛点。
- **[#1017](https://github.com/nullclaw/nullclaw/issues/1017)**（今日关闭）：Docker 镜像 `AccessDenied` 问题，吸引了社区成员 @O96a 直接在评论中贴出修复代码，#1023 采纳了该方案——典型的社区协作修复案例。
- **[#817](https://github.com/nullclaw/nullclaw/issues/817)**（评论 3，今日关闭）：询问微信扫码登录支持，反映**中文用户/中国市场集成诉求**值得产品侧关注。
- **[#767](https://github.com/nullclaw/nullclaw/issues/767)**（今日关闭）：原生 Anthropic API key 配置问题，反映用户对 BYOK（自带 Key）多 Provider 支持的期待。
- **[#1003](https://github.com/nullclaw/nullclaw/pull/1003)**（今日更新）：技能目录符号链接支持，仍开放中，涉及归档安全策略的权衡讨论。

---

## 5. Bug 与稳定性

按严重程度排列：

1. 🔴 **#1033** [Cron agent 任务无默认超时，可无限阻塞调度器](https://github.com/nullclaw/nullclaw/issues/1033)（今日新开，尚无 fix PR）
   单个永不退出的 agent 任务会串行阻塞所有 cron 任务，由三个缺陷叠加造成。属调度器级可用性风险，**尚无修复 PR**，建议优先跟进。

2. 🔴 **#1017** [Docker 镜像 gateway 启动即 AccessDenied](https://github.com/nullclaw/nullclaw/issues/1017)（已关闭）— ✅ 已由 [#1023](https://github.com/nullclaw/nullclaw/pull/1023) 修复。
   ⚠️ 残留风险：修复前创建的卷/挂载仍为 root 所有，[#1035](https://github.com/nullclaw/nullclaw/pull/1035) 提供文档化修复方案（待合并）。

3. 🟠 **#1026** [归档密钥条目打开存在 symlink 检查/打开竞态](https://github.com/nullclaw/nullclaw/issues/1026)（今日新开，尚无 fix PR）— 安全加固类，源自 #959 审批的后续项。

4. 🟡 **#1038** [测试套件写入开发者真实配置目录，11 项测试在沙箱下失败](https://github.com/nullclaw/nullclaw/pull/1038)（fix PR 待合并）— 测试封闭性问题。

5. 🟡 **#1028/#1041** [终端宽度编辑中途不刷新、历史回溯分隔符丢失](https://github.com/nullclaw/nullclaw/pull/1041)（fix PR 已提交待合并）。

---

## 6. 功能请求与路线图信号

今日新开的功能/改进类 Issue，多为近期 PR 审批的规范化后续跟踪：

- **[#1037](https://github.com/nullclaw/nullclaw/issues/1037)**：原生 Windows 控制台行编辑（当前仅 raw-mode stub）— #970 明确列为后续项，**大概率进入下个迭代**。
- **[#1036](https://github.com/nullclaw/nullclaw/issues/1036)** / **[#1042](https://github.com/nullclaw/nullclaw/pull/1042)**：CI 在 PR 阶段构建 Docker 镜像做质量门禁 — Issue 与 PR 同日提出，落地意愿明确。
- **[#1027](https://github.com/nullclaw/nullclaw/issues/1027)**：用模型能力表替代对 Claude 具体型号名的硬编码比较 — 为未来模型迭代做架构准备。
- **[#1003](https://github.com/nullclaw/nullclaw/pull/1003)**：symlink 技能目录支持 — 待合并，覆盖自定义技能组织的常见用法。
- **#817（已关闭）微信扫码登录**：无明确计划表态，属未纳入路线图的用户需求信号。

**判断**：#1042（CI 门禁）、#1035（Docker 卷修复文档）、#1041（CLI 后续）构成下一版本最可能的合入集合。

---

## 7. 用户反馈摘要

- **CLI 交互是最大痛点也是最大欣慰点**：#865 中用户抱怨方向键显示乱码“破坏了原生键绑定”；#970 合并后此类问题解决，但 Windows 用户（#1037）尚未受益。
- **Docker 一键部署体验受损**：官方镜像开箱即崩（#1017）对新手极不友好；社区自发贡献修复代码说明用户粘性强，但也说明发布前验证缺失。
- **中国用户生态需求**：微信登录（#817）是真实存在但未被官方回应的诉求。
- **BYOK 配置摩擦**：原生 Anthropic key 配置困难（#767），TRANSLATOR agent 返回空响应，说明 Provider 配置文档和错误提示（#1004 正在改善错误体日志）仍需打磨。
- **贡献者体验**：测试套件依赖真实用户目录（#1038）对沙箱化开发环境不友好。

---

## 8. 待处理积压

| 项目 | 状态 | 建议 |
|---|---|---|
| [#1033](https://github.com/nullclaw/nullclaw/issues/1033) Cron 无限阻塞调度器 | 今日新开，无响应 | **高优先**：调度器可用性风险，建议尽快指派修复 |
| [#982](https://github.com/nullclaw/nullclaw/pull/982) Telegram 代理 curl 传输 | 8 月 3 日提交，开放 2 个月+ | @ArcanePivot 的贡献长期未合并，建议维护者评审，避免贡献者流失 |
| [#1003](https://github.com/nullclaw/nullclaw/pull/1003) symlink 技能目录 | 9 月 24 日提交，开放 12 天 | 有讨论价值，建议推进 |
| [#1008](https://github.com/nullclaw/nullclaw/pull/1008) 文档索引修复与子系统指南 | 9 月 24 日提交 | 文档面向新用户，宜尽早合入 |
| [#1004](https://github.com/nullclaw/nullclaw/pull/1004) Provider 错误体日志 | 9 月 24 日提交 | 直接改善排障体验，低风险 |

**总评**：NullClaw 当前处于修复与加固的密集期，Issue→PR→后续跟踪的工程闭环执行到位。需要关注的是：① #1033 调度器阻塞问题尚无修复归属；② #982 等外部贡献 PR 长期悬置；③ 建议尽快合入 CI Docker 门禁（#1042），避免 #1017 类“发布即坏”的镜像再次流出。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-10-06

## 1. 今日速览

IronClaw 今日保持平稳的中低强度社区活跃度：过去 24 小时新增 2 条 Issue（均处于活跃状态）、2 条待合并 PR，无新版本发布。值得关注的信号是 Issue 与 PR 之间存在明确的问题—修复配对关系：[#8124](https://github.com/nearai/ironclaw/issues/8124)（WebChat 后台标签页状态陈旧）已由 [#8125](https://github.com/nearai/ironclaw/pull/8125) 进行针对性修复。同时，新的 Sendblue iMessage/SMS 扩展 PR（[#8127](https://github.com/nearai/ironclaw/pull/8127)）显示项目在消息渠道生态上持续扩展。整体来看，项目处于健康的“问题驱动开发”节奏中，但当日无任何合并/关闭动作，维护者响应吞吐有待观察。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 被合并或关闭，2 条 PR 处于待审状态：

- **[PR #8127](https://github.com/nearai/ironclaw/pull/8127) — feat: add Sendblue iMessage and SMS extension**：新增捆绑式 Sendblue 扩展，支持 iMessage/SMS 直连，包括手机配对、鉴权接收 webhook、终端回复，以及通过现有宿主生命周期与对话路径存储 DM 目标。API 凭据由宿主保管，并采用声明式、受控的附加能力设计。如合并，将显著扩展 IronClaw 的消息渠道覆盖面。
- **[PR #8125](https://github.com/nearai/ironclaw/pull/8125) — fix(webui): 后台标签页保持运行状态与通知收件箱新鲜**：针对 [#8124](https://github.com/nearai/ironclaw/issues/8124) 第 1–2 项的修复，改动极小（两处一行级配置）：`query-client.ts` 中开启 `refetchOnWindowFocus`，切回标签页时重建最新 run/action 状态，避免陈旧的 `tool-activity` 提示。

由于当日无合并，项目整体推进幅度有限，但 #8125 属于低成本高收益修复，建议维护者优先 review。

## 4. 社区热点

今日两条 Issue 均为新开、暂无评论与点赞，尚无形成讨论热度：

- **[#8126 — Daily ironclaw failure taxonomy — 2026-10-05](https://github.com/nearai/ironclaw/issues/8126)**（@pranavraja99）：属于项目的日常故障分类例行报告，分析了 officeqa 基准套件中 37 个未通过用例，指出大部分为真实的模型数值质量问题（DeepSeek-V4-Flash 相关），而非框架缺陷。这反映了项目对基准质量的高度工程化管理。
- **[#8124 — WebChat 后台标签页状态陈旧且无完成通知](https://github.com/nearai/ironclaw/issues/8124)**（@heraisys-sas）：自托管单租户、纯 HTTP 内网部署场景下，工具状态消息与完成通知缺失。诉求核心是**非 HTTPS 部署下的通知可达性**（Web Push 在无 TLS 环境不可用），代表了自托管 LAN 用户群体的典型痛点。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 状态 |
|---|---|---|
| 中 | [#8124](https://github.com/nearai/ironclaw/issues/8124)：WebChat 后台标签页 action 状态陈旧、任务完成后无通知（Web Push 在非 HTTPS 部署下静默失效） | ✅ 部分修复：[#8125](https://github.com/nearai/ironclaw/pull/8125) 覆盖第 1–2 项（状态陈旧）；通知缺口（第 3 项 / Web Push gap）**尚无对应修复** |
| 信息级 | [#8126](https://github.com/nearai/ironclaw/issues/8126)：officeqa 37 个未通过用例，主要归因于模型本身数值错误而非框架 bug | 无需框架修复，属模型质量问题追踪 |

无崩溃或回归报告。

## 6. 功能请求与路线图信号

- **消息渠道扩展**：[#8127](https://github.com/nearai/ironclaw/pull/8127)（Sendblue iMessage/SMS）是明确的功能扩展信号，若 review 通过，iMessage/SMS 有望成为下一版本的捆绑扩展能力。
- **非 HTTPS 部署的通知兜底方案**：#8124 中提出的 Web Push gap 暗示社区需要不依赖 TLS 的通知机制（如轮询、本地通知或自签名证书指引），目前仅状态陈旧部分有修复，通知部分可能催生后续 PR。
- **安全设计倾向**：#8127 强调“凭据由宿主保管 + 声明式受限附加能力”，提示项目路线图上对扩展安全边界有明确规范，后续新扩展预计沿用此模式。

## 7. 用户反馈摘要

两条 Issue 均无评论，可提炼的反馈来自报告正文：

- **自托管/内网用户**（#8124）：使用 `ironclaw serve` 1.4.1（内嵌 WebChat v2 SPA），在无 TLS 的 LAN 环境下遭遇通知缺失，说明纯 HTTP 自部署是被实际使用但支持不完善的场景。
- **基准测试用户**（#8126）：依赖项目公开的 benchmarks 页面进行日常失败分析，重视失败归因的透明度（区分模型质量 vs 框架缺陷）。

## 8. 待处理积压

- **[PR #8125](https://github.com/nearai/ironclaw/pull/8125)**：改动极小、直接对应用户报告的 bug，建议维护者优先合并。
- **[PR #8127](https://github.com/nearai/ironclaw/pull/8127)**：功能量级较大（含 webhook、配对、凭据管理），需要安全与架构层面的仔细 review，避免长期搁置。
- **[#8124](https://github.com/nearai/ironclaw/issues/8124) 剩余部分**：Web Push 在非 HTTPS 部署下的通知缺口尚无认领，建议维护者明确是否提供替代方案或文档指引，防止 Issue 长期悬置。
- **[#8126](https://github.com/nearai/ironclaw/issues/8126)**：例行分类报告，暂无行动项，但持续追踪有助于模型选型决策。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-10-06）

## 1. 今日速览

今日 LobsterAI 处于「维护性清理 + 安全加固」阶段：**50 条 Issues 被批量关闭**（无新增 Issue），多数为 3 月份的过期（obsolete/stale）问题，属于例行 issue 大扫除。PR 活动相对活跃，共 6 条更新，其中 3 条已合并/关闭，3 条待处理，重点集中在 **Skills 系统健壮性与安全性修复**（frontmatter 解析、skill id 命名、删除路径信任边界）。无新版本发布。整体评估：开发节奏平稳偏缓，社区新反馈量低，需警惕用户流失信号。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 3 条 PR 均为质量与安全改进：

- **[PR #2800](https://github.com/netease-youdao/LobsterAI/pull/2800)**（已关闭）：修复 SKILL.md frontmatter 严格 YAML 解析与 OpenClaw 运行时的宽松解析不一致问题，避免含未加引号 description 的技能从技能列表中丢失。
- **[PR #2799](https://github.com/netease-youdao/LobsterAI/pull/2799)**（已关闭）：修复技能以临时解压目录名（`lobsterai-skill-zip-XXXXXX`）作为 skill id 的问题，解决重复导入和 marketplace 更新匹配失败。
- **[PR #2785](https://github.com/netease-youdao/LobsterAI/pull/2785)**（已关闭，fixes [#2784](https://github.com/netease-youdao/LobsterAI/issues/2784)）：**安全修复**——P2P 私信策略原为「默认放行（fail open）」，现改为默认拒绝，修复 `disabled` 策略形同虚设的漏洞。

待合并的 3 条 PR（见第 5、8 节）继续深化安全加固方向。整体上，项目本周在 Skills 生命周期管理和 IM 消息安全边界上向前推进了一小步。

## 4. 社区热点

今日无新开 Issue，热度集中在被批量关闭的历史 Issue 中评论数最高的几条：

- **[#357 图片读取卡死](https://github.com/netease-youdao/LobsterAI/issues/357)**（4 评论）、**[#350 bash 执行缓慢](https://github.com/netease-youdao/LobsterAI/issues/350)**（4 评论）：反映用户对**执行性能与响应延迟**的核心诉求——命令执行等待数分钟、无输出命令干等，直接损害交互体验。
- **[#751 钉钉机器人 fetch failed](https://github.com/netease-youdao/LobsterAI/issues/751)**（3 评论）、**[#511 飞书机器人不回复](https://github.com/netease-youdao/LobsterAI/issues/511)**、**[#314 图片无法发到飞书](https://github.com/netease-youdao/LobsterAI/issues/314)**：IM 机器人集成（钉钉/飞书/POPO）是高频痛点，且多为版本升级引入的回归。
- **[#275 macOS VM 沙箱不可用](https://github.com/netease-youdao/LobsterAI/issues/275)**、**[#496 3.17 版本沙箱功能缺失](https://github.com/netease-youdao/LobsterAI/issues/496)**：沙箱作为核心差异化能力，稳定性问题多次被反馈。

注意：这些 Issue 均以 obsolete 状态关闭，未见明确修复关联，可能是版本演进后问题不再复现，但建议维护者确认根因是否真正解决。

## 5. Bug 与稳定性

按严重程度排列（今日新活动 PR 相关）：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高（安全） | OAuth token 明文写入诊断日志、preview-server 符号链接越界、OpenClaw 代理认证问题（#2795/#2796/#2797） | [PR #2798](https://github.com/netease-youdao/LobsterAI/pull/2798) 待合并 |
| 高（安全） | 技能包可通过自带 `_meta.json` 诱导任意路径递归删除（#2793） | [PR #2794](https://github.com/netease-youdao/LobsterAI/pull/2794) 待合并 |
| 高（已修复） | P2P 私信策略 fail open | [PR #2785](https://github.com/netease-youdao/LobsterAI/pull/2785) 已关闭 |
| 中 | 依赖升级：electron 43.5.0 → 44.4.5、electron-builder 更新 | [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) 待合并（Dependabot，已挂起 6 个月） |

值得肯定的是，近期 Bug 修复呈「发现→修复」闭环，且两条待合并安全 PR 质量较高（一 commit 一问题），建议尽快 review 合入。

## 6. 功能请求与路线图信号

- **[#699 支持自定义内置沙箱存储容量](https://github.com/netease-youdao/LobsterAI/issues/699)**（已关闭）：用户在使用 playwright、canvas-design 等重依赖 Skill 时频繁遇到沙箱空间不足，建议在设置面板开放容量配置（40/50GB 等）。该需求合理且与现有 Skills 生态扩张趋势契合，建议纳入后续路线图评估。
- 从近期 PR 走向看，下一阶段的重点是 **Skills 市场与安装链路的可靠性**（#2799、#2800 均属此类），而非新功能，预示项目正处于打磨期。

## 7. 用户反馈摘要

- **性能不满是第一痛点**：bash 命令执行等待过久（#350）、图片读取卡死（#357），用户明确表示「非常影响体验」。
- **IM 集成可靠性差**：钉钉、飞书、POPO 机器人各有断连、不回复、消息卡片异常问题（#751、#511、#555、#716），且升级后易回归（#732 回退旧版才正常）。
- **多轮对话上下文管理**被质疑：用户反馈相同模型下 LobsterAI 出现前言不搭后语，而其他 Agent 工具正常（#312）。
- **登录流程体验差**：网易员工登录态不下发、登录组件加载失败等多个 Issue（#1016、#928、#821、#730）。
- 正面信号：用户会主动对比 OpenClaw 等竞品并深度使用 ComfyUI 生图、定时任务等高阶功能，说明核心用户群黏性尚可，但期望值也高。

## 8. 待处理积压

- **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)**：Dependabot electron 升级 PR 自 2026-04-02 挂起至今约 **6 个月**，长期不合并存在安全暴露风险，建议优先处理或重新触发。
- **[PR #2794](https://github.com/netease-youdao/LobsterAI/pull/2794)、[PR #2798](https://github.com/netease-youdao/LobsterAI/pull/2798)**：两条安全修复待 review，涉及凭据泄露与任意路径删除，建议本周内合入。
- **Issue 清理透明度**：今日 50 条批量关闭多为 obsolete/stale，建议在关闭时附上修复版本或原因说明，避免用户感知为「石沉大海」，损害社区信任。

---

**健康度小结**：项目仍处活跃维护状态，安全意识明显提升（一周内 3 条安全相关 PR），但新 Issue 归零 + 大量历史反馈以 stale 关闭，提示需通过新版本发布和社区沟通重振用户信心。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-10-06

## 1. 今日速览

过去 24 小时，Moltis 仓库共产生 **2 条 Issue 更新（均新开）和 2 条 PR 更新（均待合并）**，无新版本发布。活跃贡献集中于同一作者 @tomachianura，形成了“问题报告 → 修复 PR”的成对贡献模式（#1292↔#1293、#1294↔#1295），显示出高质量的社区贡献习惯。今日议题聚焦两大主题：**Skill 系统的 YAML 解析健壮性** 与 **聊天分类/MCP 凭据归属的正确性**，均属于核心功能链路问题。整体活跃度中等偏低，但问题-修复闭环效率高，项目健康度良好。

## 2. 版本发布

过去 24 小时无新版本发布。当前最新版本为 `20260913.02`。

## 3. 项目进展

今日无 PR 合并或关闭，2 条修复 PR 处于待评审状态：

- **[#1293](https://github.com/moltis-org/moltis/pull/1293) fix(skills): quote SKILL.md frontmatter and refuse unparseable skills** — 修复 `create_skill` / `update_skill` 写入未加引号的 YAML frontmatter 导致解析失败的问题，同时让 skill discovery 拒绝不可解析的技能文件，属正确性修复。
- **[#1295](https://github.com/moltis-org/moltis/pull/1295) fix(discord): classify direct messages as direct chats** — 修复所有 Discord 会话（含 1:1 私聊）都被归类为 shared chat 的问题，补齐 adapter 对会话类型的传递，涉及 `crates/channels/src/chat_classification.rs`。

两条 PR 均为针对性 bug fix，若合并将显著提升多渠道场景下的会话语义正确性。

## 4. 社区热点

今日两条新开 Issue 暂无评论和 👍 反应，尚无形成讨论热度：

- **[#1294](https://github.com/moltis-org/moltis/issues/1294) [Feature]: per-sender MCP credentials in shared chats** — 诉求明确：共享聊天（Telegram/Discord 群组、Slack 频道）中所有消息共用单一静态凭据，导致 MCP 操作无法归属到实际发送者。这是多用户协作场景下的身份/审计痛点。
- **[#1292](https://github.com/moltis-org/moltis/issues/1292) [Bug]: create_skill 写入不可解析的 YAML 且虚报成功** — 工具报告 `{"created": true}` 但产物无法被 discovery 解析，“静默失败”是用户信任层面的严重问题。

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 修复 PR |
|---|---|---|---|
| 高（静默数据损坏 + 误报成功） | [#1292](https://github.com/moltis-org/moltis/issues/1292) | OPEN | ✅ 已有 [#1293](https://github.com/moltis-org/moltis/pull/1293) |
| 中高（DM 被误判为 shared，影响会话语义与凭据作用域） | 见 [#1295](https://github.com/moltis-org/moltis/pull/1295) 描述 | 修复待合并 | ✅ #1295 自身 |

无崩溃或回归类报告。#1292 虽严重但触发面限于 skill 创建流程，且有现成修复，风险可控。

## 6. 功能请求与路线图信号

- **#1294 per-sender MCP 凭据**：尚无对应实现 PR，且涉及凭据存储、会话隔离等架构改动，短期内更可能进入讨论/设计阶段而非下一版本。注意其与 #1295 存在关联——DM/shared 分类修正后，凭据作用域问题会更凸显。
- **#1293 拒绝不可解析 skills** 中体现的“fail fast”设计倾向，暗示项目可能继续加强输入校验与错误上报的可观测性。

## 7. 用户反馈摘要

今日反馈均来自 @tomachianura，样本较小，但可提炼以下痛点：

- **工具输出可信度**：`create_skill` 返回成功但产物无效（#1292），用户期望工具结果与实际状态一致。
- **多渠道身份归属**：群组场景下 MCP 操作归属不清（#1294），影响审计与权限控制，反映 Moltis 正被用于团队/群组等真实协作场景。
- **Discord 私聊体验降级**：DM 被按 shared chat 处理，可能触发不必要的共享语义与限制（#1295）。

## 8. 待处理积压

- [#1292](https://github.com/moltis-org/moltis/issues/1292) / [#1293](https://github.com/moltis-org/moltis/issues/1293)：修复 PR 已就绪，建议维护者优先评审合并，避免技能文件持续产生损坏数据。
- [#1295](https://github.com/moltis-org/moltis/pull/1295)：改动小、收益明确，建议尽快评审。
- [#1294](https://github.com/moltis-org/moltis/issues/1294)：架构级功能请求，建议维护者先给出设计反馈，避免社区力量空转。

> 注：以上所有条目均创建/更新于 2026-10-05，尚无维护者响应；建议关注后续 48 小时的评审动态。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-10-06

## 1. 今日速览

CoPaw 今日保持高活跃度：过去 24 小时 Issues 更新 41 条（新开/活跃 40，关闭 1），PR 更新 22 条（待合并 21，合并/关闭 1），无新版本发布。社区反馈以 2.2.1 / 2.2.2.beta4 版本的 Bug 报告为主，覆盖 Provider 兼容性、安全沙箱、会话上下文污染等多个方向；值得注意的是，大量 Issue 已有对应的社区 fix PR 在评审中，Issue→PR 的响应链条健康，但维护者合并节奏明显滞后（21 条 PR 待合并，仅 1 条 DingTalk 插件 PR 关闭），积压风险上升。

## 2. 版本发布

无新版本发布。当前最新版本仍为 2.2.1（含 2.2.2.beta 系列预发布）。

## 3. 项目进展

- **PR #8113（已关闭）**：[size/XL] 钉钉渠道插件化试点——将钉钉收发实现迁移为独立 channel 插件，升级后离线补装、保留原有配置与凭据，兼容优先。这是今日唯一关闭的 PR，标志渠道插件化架构迈出第一步。

其余 21 条 PR 处于待合并状态，其中多个已与高热度 Issue 形成配对（见下文），项目功能修复工作实际上已在社区侧大量完成，等待维护者评审合并。

## 4. 社区热点

评论数最多的 Issue（各 4 条评论）：

| Issue | 主题 | 配对 PR |
|---|---|---|
| [#7599](https://github.com/agentscope-ai/CoPaw/issues/7599) | OpenCode Go 套餐模型持续报 `MissingSessionID`（400），历时一个月未解 | 相关：[#8104](https://github.com/agentscope-ai/CoPaw/issues/8104)（已关闭，确认需 `x-opencode-session` header） |
| [#8022](https://github.com/agentscope-ai/CoPaw/issues/8022) | `send_file_to_user` 产生的 file/image 块污染上下文，导致会话对所有模型持续 400 | #8010 |
| [#7991](https://github.com/agentscope-ai/CoPaw/issues/7991) | TaskTracker 僵尸条目虚增 running_task_count，仪表盘与 API 不一致 | — |

诉求分析：用户核心痛点集中在**会话状态健壮性**——一旦某条消息被 Provider 拒绝，整个会话即“永久损坏”（#8022、#8064），这与传统“单次请求失败”预期严重不符。此外 Provider 兼容性（OpenCode session header、GPT-6 token 参数、Moonshot schema）是第二大热点。

## 5. Bug 与稳定性（按严重程度）

**高危：**
- **#8002** Windows auto 模式 + 沙箱关闭时，内联 Office COM `Quit()` 可关闭用户 PowerPoint（单实例 COM 劫持）。→ 已有两个 fix PR：[#8028](https://github.com/agentscope-ai/CoPaw/pull/8028)、[#8048](https://github.com/agentscope-ai/CoPaw/pull/8048)
- **#7943** Windows 沙箱 ACL 在盘符根目录 workspace 可锁定整个卷。→ 无 fix PR
- **#8105** 工具审批按钮失效——同意/拒绝均执行拒绝，审批机制形同虚设（2.2.2b4）。→ 无 fix PR
- **#7980** `grep_search` 匹配内部 `history.db-wal` 导致会话状态中毒与不可恢复死循环。→ fix PR [#7988](https://github.com/agentscope-ai/CoPaw/pull/7988)

**严重（会话级损坏）：**
- **#8064 / #8022** DeepSeek 等 Provider 上发送文件后整个会话永久 400。→ fix PR [#8010](https://github.com/agentscope-ai/CoPaw/pull/8010)
- **#8042** 工具输出文件被自动回传给不支持的模型，触发 Internal error。

**功能损坏：**
- **#8073** 2.2.2b4 局域网设备无法访问会话页面（回归）。
- **#8074** OpenAI Provider 对 gpt-6 系列连接测试 400（白名单只匹配 `gpt-5*`）。→ fix PR [#8090](https://github.com/agentscope-ai/CoPaw/pull/8090)
- **#8047** DBX MCP 的 HTTP 422 未被识别为 legacy 协议证据。→ fix PR [#8051](https://github.com/agentscope-ai/CoPaw/pull/8051)
- **#8035** 转写设置页无法配置 `transcription_model`。→ fix PR [#8052](https://github.com/agentscope-ai/CoPaw/pull/8052)
- **#8093** 目录标记 `supports_multimodal=true` 但运行时拦截图片输入。
- **#8106** 容器内插件安装因 PIP_TARGET 泄漏而失败。
- **#8094** WebView2 陈旧缓存可永久阻塞 Console 启动（无重试/无错误提示）。
- **#8046** 时区处理固化 UTC 偏移，DST 切换后时间戳漂移。→ fix PR [#8050](https://github.com/agentscope-ai/CoPaw/pull/8050)

## 6. 功能请求与路线图信号

- **#8103**：daemon 静默回退模型时应通知用户（可观测性增强）——尚无 PR。
- **#8085**：截断时应透出 `finish_reason="length"` → 已有 PR [#8096](https://github.com/agentscope-ai/CoPaw/pull/8096)，**大概率进入下一版本**。
- **#8082**：心跳（heartbeat）运行时语义文档化请求。
- **#8076**：reload 超时后应通知房间并取消 in-flight turns（当前静默丢弃，最长可挂 24 小时）。
- PR #7307（Provider 配置与模型管理链路打通）和 #7066（OAuth2 rotating refresh_token 持久化）为长期待合并的功能型 PR，若合入将显著改善 Console 体验与 MCP 稳定性。
- 结合 #8113 关闭，**渠道插件化**是明确的路线图方向。

## 7. 用户反馈摘要

- **痛点集中点**：① 会话上下文“一次性污染永久损坏”（#8022/#8064/#8010 多方印证）；② Windows 桌面端体验问题密集（#8002、#7943、#8073、#8094、#8033）；③ 大型技能/文件操作超时（#8013：80MB 技能因前端 30 秒硬超时永远装不上）；④ 静默失败模式普遍（模型回退 #8103、截断 #8085、转写 #8035），用户对“无声降级”容忍度低。
- **满意点**：Issue 提交质量高（含复现步骤、版本、日志，甚至 AI 辅助整理 #8022），社区修复参与度高——多个 Bug 报告当天即有 first-time contributor 提交 fix PR（#7987、#7988、#8010、#8012、#7066）。
- **使用场景信号**：用户在 WeCom/Telegram/DingTalk 多渠道、Docker Hub 部署、局域网共享等真实生产环境使用，对多模型聚合（OpenCode、DeepSeek、Moonshot、GLM、Kimi）兼容性要求高。

## 8. 待处理积压

⚠️ 建议维护者关注：

- **PR 积压**：21 条待合并 PR，其中 #7066（8 月 16 日创建，OAuth2 refresh token 修复，Under Review）与 #7307（8 月 26 日）已滞留 **40+ 天**，直接影响 MCP OAuth2 可靠性与 Console 体验。
- **Issue #7599**：OpenCode `MissingSessionID` 历时 **一个月**（9/7 报告）仍 OPEN，虽有 #8104 提供了 header 线索但未闭环。
- **#7948**（Web Console 破坏用户输入的设计问题）9/23 报告，3 条评论，无修复迹象。
- **#7959**（Moonshot 拒绝无类型 anyOf MCP schema）影响 Kimi 系模型 + MCP 组合用户，无 PR。
- **#7943**（盘符根目录 ACL 锁卷）为高危安全问题，无 fix PR，建议优先处理。
- **重复 PR 竞争**：Office COM 修复有 #8028/#8048 两个方案、Playwright 默认参数排除有 #7987/#8029 两个方案、grep 二进制过滤与 DST 时区修复各有对应 PR，需尽快裁决合并，避免贡献者等待流失。

**健康度小结**：社区贡献端非常活跃（高质 Issue + 快速 fix PR 响应），瓶颈在维护者的评审与合并吞吐；安全问题（#7943、#8002）与 2.2.2.beta 回归（#8073、#8105）应在下一个正式版发布前优先解决。

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