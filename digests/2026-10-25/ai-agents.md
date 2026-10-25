# OpenClaw 生态日报 2026-10-25

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-25 03:45 UTC

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

# OpenClaw 项目动态日报 — 2026-10-25

---

## 1. 今日速览

OpenClaw 今日保持高度活跃：过去 24 小时内 Issues 更新 500 条（新开/活跃 398，关闭 102），PR 更新 500 条（待合并 219，已合并/关闭 281），并发布 2 个新版本（v2026.10.7 与 extended-stable v2026.9.34）。核心贡献者 @steipete 今日高频提交，内容集中在性能优化与测试清理，产线代码与测试健康度同步提升。不过，SQLite WAL 无限增长、插件源捕获导致 SSD 磨损、Windows 启动回归等 P0/P1 稳定性问题仍处于"无 fix PR"状态，是当前最大的健康度隐忧。总体而言项目迭代速度快、社区参与度高，但存储层与 Windows 平台的累积技术债值得维护者优先处理。

---

## 2. 版本发布

### v2026.10.7（openclaw 2026.10.7）
- **Highlights — Replay-safe session recovery（可重放的会话恢复）**：
  - 中断的会话现在保留恢复来源（recovery provenance）和未完成的工具结果
  - 已停止的会话在接收下一条消息前清理终态恢复残留
  - 被拒绝的 Claude CLI 草稿不再进入最终回复
  - 大型恢复场景（摘要被截断）处理改进
- **迁移提示**：面向 2026.10.x 线的常规迭代版本，未标注破坏性变更，建议从 2026.10.5/10.6 平滑升级——特别值得因 [#181619](https://github.com/openclaw/openclaw/issues/181619)（Codex 执行预算超时回归）和 [#178000](https://github.com/openclaw/openclaw/issues/178000)（会话状态竞态触发跨 provider 回退）受影响的用户升级验证。

### v2026.9.34（openclaw 2026.9.34）
- **Gateway-only `extended-stable`（LTS 等价）通道**：基于 2026 年 9 月底快照，叠加关键安全更新、可靠性与性能修复，以及新模型支持等特性。
- **迁移提示**：仅含 Gateway 组件；生产环境留在 stable 线的用户建议跟进此版本以获取安全补丁。

---

## 3. 项目进展

今日 PR 活动由 @steipete 主导（单日 15+ 提交），方向明确：**性能 + 内存 + 测试瘦身**。

**性能/内存优化（待合并为主）：**
- [#182888](https://github.com/openclaw/openclaw/pull/182888) — 四个进程 worker 间共享 PostgreSQL I/O，XL 级改造，已 ready for maintainer look
- [#183202](https://github.com/openclaw/openclaw/pull/183202) — 消除重复 payload 序列化（涉及语音通话、Team Reports、任务驱逐等多处）
- [#183184](https://github.com/openclaw/openclaw/pull/183184) — memory 搜索跳过未使用的诊断计数，减少每次 warm search 4 条 count 语句
- [#183196](https://github.com/openclaw/openclaw/pull/183196) — 将 transcript reader 移出 catalog worker，常驻堆降低 4.97 MiB（3.48%）
- [#183203](https://github.com/openclaw/openclaw/pull/183203) / [#183201](https://github.com/openclaw/openclaw/pull/183201) — 会话 actor 不再重复持有快照 JSON、移除注册表文件路径扫描
- [#183150](https://github.com/openclaw/openclaw/pull/183150) — Control UI 在认证期间并行加载远端 transcript，消除一次串行网络往返
- [#183072](https://github.com/openclaw/openclaw/pull/183072) — 聊天重载几何稳定性（CLS ~0.11→目标更低）

**功能/修复：**
- [#183099](https://github.com/openclaw/openclaw/pull/183099) — 新增 `channels start|stop|reconnect` CLI，补齐文档承诺的非破坏性渠道恢复能力
- [#182416](https://github.com/openclaw/openclaw/pull/182416) — Google Chat 远程附件改为链接投递（P1）
- [#183197](https://github.com/openclaw/openclaw/pull/183197) — 修复混合 provider 目录下 Activity recaps 误报"无凭证"
- [#183132](https://github.com/openclaw/openclaw/pull/183132) — **数据丢失修复**：memory 归档清理误删 inventory 之后新插入的源记录
- [#183200](https://github.com/openclaw/openclaw/pull/183200) — MiniMax M3.1 Flash 设为默认文本模型

**测试清理系列（batch d508/d510/d511）**：[#183159](https://github.com/openclaw/openclaw/pull/183159)、[#183194](https://github.com/openclaw/openclaw/pull/183194)、[#183214](https://github.com/openclaw/openclaw/pull/183214) 合计删除数千行冗余测试，产线 LOC 零变化。

**整体评估**：单日合并/关闭 281 个 PR，主库在性能债与测试债两个方向同时快速推进；配合 v2026.10.7 的会话恢复加固，核心可靠性曲线向上。

---

## 4. 社区热点

| Issue | 评论 | 主题 |
|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | **135** | Agent SQLite WAL 增长至 1.4–2.8 GB，阻塞 Gateway 启动（P0） |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 53 | 2026.9.6 回归：捕获大型外部插件时 Gateway 阻塞数分钟（P0） |
| [#164294](https://github.com/openclaw/openclaw/issues/164294) | 31 | Gateway state DB WAL checkpoint 被进程内 reader 永久钉住 |
| [#159356](https://github.com/openclaw/openclaw/issues/159356) | 29 | llama.cpp manager 误报 ready，embedding 返回 HTTP 500（升 RAM 后缓解） |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | 23 | 插件源捕获每条 CLI 命令重写 1.1–1.4 GB，SSD 磨损严重（P1） |
| [#168955](https://github.com/openclaw/openclaw/issues/168955) | 19 | 2026.10.1 Windows 启动回归：1030s vs 410s |

**诉求分析**：热度最高的前六条全部指向**存储/IO 层的资源失控**——WAL 检查点机制失效、插件捕获目录不复用、Windows 启动路径串行阻塞。用户并非抱怨功能缺失，而是抱怨"基础层在重度使用下不可持续"（磁盘写满、SSD 磨损、分钟级卡顿）。这三个问题同源（SQLite checkpoint + 插件 source capture 管线），一次系统性重构可同时解决多条高热度 issue。

---

## 5. Bug 与稳定性（按严重程度）

### 🔴 P0
1. **[#143524](https://github.com/openclaw/openclaw/issues/143524)** — Agent SQLite WAL 无限增长（`wal_autocheckpoint=1000` 失效），已达 GB 级并阻塞启动。标签 `ux-release-blocker` + `message-loss`。❌ **无 fix PR**（needs-maintainer-review）
2. **[#160959](https://github.com/openclaw/openclaw/issues/160959)** — 2026.9.6 回归，大型插件捕获阻塞事件循环数分钟，启动与运行时复现。❌ **无 fix PR**
3. **[#153426](https://github.com/openclaw/openclaw/issues/153426)** — 安全+数据丢失：`MEMORY.md`/`USER.md` 被 provenance ratchet 静默永久排除出 bootstrap 注入，无诊断无恢复路径。❌ **无 fix PR**（needs-security-review）
4. **[#166634](https://github.com/openclaw/openclaw/issues/166634)** — 崩溃恢复后 late reclamation checkpoint 失败，agent 永久 UNAVAILABLE。❌ 无 fix PR

### 🟠 P1
5. **[#157989](https://github.com/openclaw/openclaw/issues/157989)** — 插件捕获 SSD 磨损（每次 Gateway 启动 ~6.5 GB 写入）。❌ 无 fix PR
6. **[#168955](https://github.com/openclaw/openclaw/issues/168955)** — Windows 启动从 410s 回归至 1030s，`sidecars.control-ui-assets` 阻塞 477s。❌ 无 fix PR
7. **[#182476](https://github.com/openclaw/openclaw/issues/182476)**（昨日新报）— Windows update repair 确定性失败：`OPENCLAW_STATE_LEASE_LOST`。❌ 无 fix PR
8. **[#150822](https://github.com/openclaw/openclaw/issues/150822)** — 安全：原生 Codex 子进程宣告无执行器的工具。❌ 无 fix PR
9. **[#167876](https://github.com/openclaw/openclaw/issues/167876)** — 安全：Talk 咨询在 session setup 完成后丢失 caller authority。❌ 无 fix PR
10. **[#178300](https://github.com/openclaw/openclaw/issues/178300)** — 1-token `length` 截断后终态错误被覆盖为 false success。❌ 无 fix PR

### 🟡 值得注意的已修复/关闭
- ✅ [#181619](https://github.com/openclaw/openclaw/issues/181619)（已关闭）— 2026.10.6 Codex 执行预算超时回归
- ✅ [#178000](https://github.com/openclaw/openclaw/issues/178000)（已关闭）— 会话竞态被误分类为 provider 失败触发跨厂回退
- ✅ [#119914](https://github.com/openclaw/openclaw/issues/119914)（已关闭）— Fastmail MCP OAuth 签名失败
- ✅ [#167336](https://github.com/openclaw/openclaw/issues/167336)（已关闭）— memory recall 子会话泄漏到会话列表（fix-shape-clear）

**小结**：今日关闭的多为 provider/auth 边界问题；而存储层 P0 群仍无对应 fix PR，是最大风险敞口。

---

## 6. 功能请求与路线图信号

| 需求 | 状态 | 纳入下版可能性 |
|---|---|---|
| 限额感知的模型回退（跳过耗尽的 provider 账号）[#182712](https://github.com/openclaw/openclaw/issues/182712) | 新开，讨论热（7 评论） | 中高 — 与刚关闭的 #178000 回退语义修复方向一致 |
| 每 agent dreaming 配置 [#67413](https://github.com/openclaw/openclaw/issues/67413) | stale + needs-product-decision | 中 — 与 memory-core 性能 PR（#183132/#183184）同域，有搭车机会 |
| 可配置 abort triggers [#164870](https://github.com/openclaw/openclaw/issues/164870) | needs-product-decision | 中 |
| Databricks Unity Gateway 官方 provider [#155633](https://github.com/openclaw/openclaw/issues/155633) | **已有实现 PR [#155634]** | 高 |
| Provider 中立 `decision_evaluate` 工具 [#155115](https://github.com/openclaw/openclaw/issues/155115) | maintainer 标签 | 高 |
| MCP CLI 后端尊重 `tools.toolSearch` [#139477](https://github.com/openclaw/openclaw/issues/139477) | linked-pr-open | 高 |

**信号**：@steipete 的性能 PR 系列 + memory-core 修复表明下一版本主题大概率是"存储/内存效率"；#183099 的 channels CLI 表明运维体验是第二主线。

---

## 7. 用户反馈摘要

**痛点（按出现频率）：**
- **磁盘/存储焦虑**是最强烈的情绪：WAL 涨到 GB 级、"6.5 GB 每次启动的写入会写死我的 SSD"（#157989）、"52 MB/min 空闲写入"（#154104）——自托管用户对硬件寿命高度敏感
- **Windows 是二等公民的感受**：自动更新三重失败模式（#157812）、lease 丢失（#182476）、启动回归（#168955）、插件 staging 不收敛（#162585），Windows 用户的挫败感明显
- **静默失败比崩溃更糟**：#153426（记忆文件被静默排除）、#144594（消息静默滞留 interrupted）、#53408（工具参数静默丢弃）——用户反复强调"没有任何诊断输出"
- **成本敏感**：#161208 心跳不命中 Anthropic prompt cache，每心跳多花 $0.40–0.95

**满意点**：
- extended-stable（LTS）通道受到生产用户欢迎
- v2026.10.7 的会话恢复改进直接回应了 #144594 一类痛点
- 维护者对 issue 的分级标签体系（clawsweeper、impact、rating）被社区视为透明度标杆

---

## 8. 待处理积压（提醒维护者）

| 条目 | 积压时长 | 风险 |
|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) P0 WAL 无限增长 | **~7 周，135 评论，无 fix PR** | 🔴 阻塞发布（ux-release-blocker） |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) P0 记忆静默丢失 | ~5 周，无 fix PR | 🔴 安全审查挂起 |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) P0 插件捕获阻塞 | ~4 周 | 🔴 2026.9.6 起持续回归 |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) 工具参数静默丢弃 | **7 个月**，stale | 🟠 长会话可靠性 |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) dreaming OOM | 6 个月，needs-product-decision | 🟠 |
| [#55372](https://github.com/openclaw/openclaw/issues/55372) 重启 sentinel 通知噪音 | 7 个月 | 🟡 |
| [#165247](https://github.com/openclaw/openclaw/pull/165247) Codex Workspace AI review 修复 PR | 3 周，waiting on author | 🟡 建议作者更新或转交 |
| [#165664](https://github.com/openclaw/openclaw/pull/165664) Discord V2 卡片编辑 PR | 3 周，needs proof | 🟡 社区贡献，需 proof 指引 |

**行动建议**：将 #143524 / #160959 / #157989 / #164294 打包为一次"存储层与插件捕获专项"——四条 issue 共享根因（WAL checkpoint 被内部 reader 钉住 + capture 目录不复用），统一修复的杠杆效应最大。

---
*数据来源：GitHub Issues/PR/Releases API（过去 24 小时窗口）。链接均为 openclaw/openclaw 仓库内条目。*

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告（2026-10-25）

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入**架构收敛后的深水区**：头部项目（OpenClaw、Hermes Agent）在统一网关/多表面架构落地后，正集中偿还存储层、会话恢复与平台兼容性的技术债；中腰部项目（NanoBot、Zeroclaw、CoPaw）则聚焦渠道生态、记忆子系统与安全加固的垂直深耕。值得注意的是，**记忆数据可靠性**（OpenClaw、Zeroclaw、CoPaw、Hermes 均有相关 P0/S0 级 issue）和**凭据/脱敏安全**（NanoBot、NanoClaw、Hermes、Zeroclaw）已成为跨项目的共性战场。生态整体呈“功能扩张放缓、可靠性竞赛加剧”的成熟期特征，同时社区反馈质量显著提升（用户可提交 commit 级根因分析），表明用户群正从尝鲜者转向生产部署者。

## 2. 各项目活跃度对比

| 项目 | Issue 活动 | PR 活动 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500 条（新开/活跃 398） | 500 条（281 合并/关闭） | v2026.10.7 + extended-stable v2026.9.34 | 🟡 高迭速+高参与，但 4 条 P0 无 fix PR，存储层技术债是最大风险 |
| **Hermes Agent** | 50 条（36 新开/活跃） | 50 条（5 合并/关闭） | 无（稳定版 v0.22.5） | 🟡 重构后收敛期，45 待合 vs 5 已合，审查带宽明显不足 |
| **Zeroclaw** | 11 条 | 33 条（3 合并/关闭） | 无（v0.8.7 发布中） | 🟢 发布流程规范，Bug 当日闭环率高，但 2 条 XL 安全 PR 长期积压 |
| **NanoBot** | 4 条 | 39 条（17 合并/关闭） | 无 | 🟢 修复响应极快（当日闭环），但 4 个 redaction PR 治理积压 |
| **CoPaw** | 6 条（全部 OPEN，0 关闭） | 10 条（1 关闭） | 无 | 🟠 中高活跃但修复缺口明显：今日 4 类新 Bug 均无 fix PR |
| **NanoClaw** | 0 条 | 9 条（1 关闭） | 无 | 🟠 贡献侧正常，但零 Issue 活动提示反馈热度下降，含 1 条积压安全修复 |
| **LobsterAI** | 2 条（申诉类） | 2 条（关闭） | 无 | 🟡 低活跃，性能优化显著（冷启动 -48%），但申诉流程缺位有口碑风险 |
| NullClaw / IronClaw / TinyClaw / Moltis / ZeptoClaw / EasyClaw / PicoClaw | 无活动/数据缺失 | — | — | 🔴 静默或低活跃 |

**分层结论**：OpenClaw 以单日 ~1000 条 Issue/PR 更新、281 条 PR 合关遥遥领先，是生态活跃度天花板；Hermes 次之但合并吞吐受阻；NanoBot/Zeroclaw 属“小而稳”梯队；CoPaw 呈“报的多、修的慢”的失衡信号。

## 3. OpenClaw 在生态中的定位

**优势**：
- **规模与吞吐**：单日 PR 合关量（281）超过其余所有活跃项目之和，@steipete 单日 15+ 提交的核心贡献者驱动模式确保迭代速度；
- **发布工程成熟**：双通道（stable + extended-stable LTS）是生态中唯一具备 LTS 等价通道的项目，生产用户欢迎度高；
- **治理透明度**：clawsweeper/impact/rating 分级标签体系被社区视为标杆，这一点连 Hermes 的 P 级体系也仅部分覆盖；
- **性能工程深度**：单日同时推进 Postgres I/O 共享、payload 序列化去重、常驻堆优化（-4.97 MiB）等量化到 MB/百分比级别的优化，其他项目少见。

**劣势/风险**：
- 存储层系统性失控（WAL GB 级增长、每次启动 6.5 GB 写入、SSD 磨损）累计 4 条 P0/P1 无 fix PR，积压最长 ~7 周（#143524）——这在同类项目中是最严重的风险敞口；
- Windows 平台体验劣化（启动 410s→1030s 回归、三重更新失败模式），而 Zeroclaw/CoPaw 等反而以跨平台渠道兼容见长。

**社区规模对比**：OpenClaw 单日 Issue 评论热度最高条目达 135 条（#143524），是 Hermes（217 条为跨月追踪 epic，日均热度约 13-15 条/issue）之外的最高值；NanoBot/Zeroclaw/CoPaw 热点 issue 评论量在 2-12 条区间，量级低一档。

## 4. 共同关注的技术方向

| 共性方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **记忆子系统可靠性** | OpenClaw（#153426 记忆静默丢失）、Zeroclaw（#10797 S0 级并发写丢数据、#8891 epic）、CoPaw（ReMe 0.4.2.0 升级、#7835 记忆泄漏）、Hermes（RFC #143379 vs #141876 路线之争） | 跨会话记忆是“个人助理”信任基础，并发写安全、压缩后 provenance 保留、记忆不泄漏到外部渠道是三大焦点 |
| **凭据安全与脱敏** | NanoBot（#6440 脱敏概念混淆、4 个 redaction PR）、NanoClaw（#4184 日志密钥掩码、#3976 token 入 credential gateway）、Hermes（#143982 凭据形态绕过脱敏、#144246 keychain）、OpenClaw（#150822/#167876 安全 issue） | 密钥不入环境变量/日志、chat egress 脱敏、OS keychain 集成 |
| **会话可恢复性** | OpenClaw（v2026.10.7 replay-safe recovery）、Hermes（#139818 会话 unresumable、#134889 网关善后） | 网关统一后会话归属、崩溃恢复、跨表面（CLI/Desktop/API）续接 |
| **渠道生态扩张** | NanoClaw（Proton Mail）、CoPaw（QQ 流式、Matrix）、Zeroclaw（邮件三连、XMPP）、NanoBot（Runcrate 网关）、OpenClaw（Google Chat、channels CLI） | 加密邮箱、IMAP-only 最小权限、国内渠道（QQ）流式体验 |
| **静默失败治理** | 全部 7 个活跃项目 | “失败必须可诊断”是最高频用户诉求：OpenClaw 记忆静默排除、CoPaw 配置静默重置/审计静默中断、Zeroclaw 静默 32k 回退、NanoBot 静默误报空结果 |
| **启动/性能优化** | OpenClaw（性能 PR 系列日）、LobsterAI（冷启动 -48%）、Zeroclaw（#12014 上下文窗口） | 大状态目录冷启动、Windows 启动路径、内存常驻优化 |
| **提示注入与安全隔离** | NanoClaw（#3717 JSON.stringify 伪造提示结构）、NanoBot（#2569 OS 级沙箱）、Zeroclaw（知识图谱归因、#11997 读策略） | 从正则黑名单升级到系统级隔离与可审计安全域 |

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | NanoBot | Zeroclaw | NanoClaw | CoPaw |
|---|---|---|---|---|---|---|
| **功能侧重** | 全栈个人助理（Gateway+会话+memory+多渠道），性能工程 | 统一网关多表面（CLI/Desktop/TUI/Web），插件生态 | WebUI 体验 + chat channel 接入 | 可审计/可重放 agent 运行时（v0.9 主题明确） | skill 生态 + 凭据安全收敛 | 国内渠道（QQ/飞书/Matrix）+ ReMe 记忆 + 企业审计 |
| **目标用户** | 自托管重度用户（对 SSD/成本敏感） | 桌面端/多表面高级用户 | IM 重度用户（QQ/TG/Discord），已转向生产部署 | 长期个人助理用户、向企业/合规渗透 | 隐私敏感的群组/社区用户 | 自托管团队、国内生态用户 |
| **技术栈信号** | PostgreSQL/SQLite 存储，TypeScript 生态，CLI 运维化 | Python/uv 插件体系，Rust 网关迹象 | Python，MCP/OpenAI 兼容 | Rust（30 workspace 包、Tauri），crates.io 发布 | Node/skill 插件，credential gateway | Python，policy.yaml 治理审计 |
| **架构路线** | 集中式 Gateway，LTS 通道 | "一个 gateway 拥有所有本地会话" | 轻量、正则拦截（待升级沙箱） | append-only 事件历史 + 知识图谱归因 | 去中心化 skill 组合 | 服务端配置 + 渠道桥接 |

## 6. 社区热度与成熟度

- **快速迭代期**：**Zeroclaw**（v0.8.7 发布窗口 + v0.9 路线图清晰，当日 Bug 当日 fix）、**CoPaw**（记忆大版本 + 渠道能力密集推进，但修复跟不上报告）
- **质量巩固/技术债偿还期**：**OpenClaw**（版本节奏快但 P0 存储债悬顶）、**Hermes Agent**（大重构后的 fallout 收敛，审查带宽是瓶颈）
- **稳定打磨期**：**NanoBot**（WebUI 细节 + 兼容性修复，响应闭环极快）、**NanoClaw**（skill 生态扩张，但反馈热度下降需警惕）
- **低活跃/观察名单**：LobsterAI（申诉流程缺位）、NullClaw、IronClaw、TinyClaw、Moltis、ZeptoClaw、EasyClaw（静默）；PicoClaw 数据缺失

## 7. 值得关注的趋势信号

1. **“可靠性 > 功能”的价值迁移**：所有活跃项目热度最高的 issue 几乎都是数据丢失、静默失败、资源失控类，而非功能缺失。对开发者的启示：**可诊断性（失败必有警告/日志）是下一阶段的核心竞争力**，OpenClaw 的 #153426 和 CoPaw 的 #8412/8406 都是反面教材。
2. **记忆子系统成为信任分水岭**：四个项目同时出现记忆数据可靠性问题/大版本升级（ReMe、#8891 epic、RFC #143379），且 Hermes 出现“14 行 vs 6000 行”的路线分歧——**记忆架构的复杂度/可靠性权衡尚未有行业共识**，是创新创业的窗口。
3. **凭据治理向 OS 级下沉**：keychain/credential gateway 替代环境变量是多个项目的并行演进（Hermes #144246、NanoClaw #3976），提示注入防护（NanoClaw #3717）与 OS 级沙箱（NanoBot #2569）预示**安全边界从应用层向系统层迁移**。
4. **Windows/多平台是留存杀手**：OpenClaw 与 Hermes 的 Windows 用户挫败感高度一致（启动回归、更新循环、lease 丢失），而做得好的项目（Zeroclaw 的 setup.bat/Tauri 路线）获得口碑红利。**跨平台工程质量直接影响社区扩张上限**。
5. **成本与硬件寿命进入用户决策**：SSD 磨损、prompt cache 不命中（$0.40-0.95/心跳）、空闲写入 52 MB/min——自托管用户开始用运维指标评估 AI 助手，**资源效率将是与模型能力同级的选型因素**。
6. **渠道长尾化与合规化**：Proton Mail（加密）、IMAP-only（最小权限）、QQ 流式（国内）、XMPP——渠道需求从“接入”升级为“合规接入”，Zeroclaw v0.9 的“可审计、可重放”主题大概率会被同行跟进。

**对 OpenClaw 维护者的优先建议**：将 #143524/#160959/#157989/#164294 打包为存储层专项一次性修复，杠杆效应最大；否则存储层 P0 群（最长已 7 周）将持续侵蚀其生态领导地位——竞品（Zeroclaw）正是以“当日闭环 + 发布规范”在健康度维度形成差异化追赶。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-10-25）

## 1. 今日速览

NanoBot 今日保持高活跃度：过去 24 小时共 43 条 Issue/PR 更新（4 条 Issue、39 条 PR），其中 17 条 PR 已合并/关闭、22 条待合并，无新版本发布。活跃贡献以 WebUI 打磨、编码兼容性修复和内存泄漏治理为主，方向多元且质量较高。多名核心贡献者（@chengyongru、@Re-bin、@rudycelekli）持续高频输出，社区修复响应速度快——新报告的 Bug 当天即有 fix PR（如 #6438→#6439）。整体健康度良好。

## 2. 版本发布

今日无新版本发布。值得注意的是 [#6442](https://github.com/HKUDS/nanobot/pull/6442) 已关闭，将 web 搜索依赖 ddgs 钉到 9.16.1，可能随下个版本一起发布。

## 3. 项目进展

今日合并/关闭的 PR 共 17 条，重点包括：

- **搜索稳定性**：[#6442](https://github.com/HKUDS/nanobot/pull/6442) 强制要求 ddgs 9.16.1，修复 DuckDuckGo 搜索聚合/引擎问题（对应 Issue #6285），彻底解决“无结果”假象报错。
- **WebUI 体验**：
  - [#6436](https://github.com/HKUDS/nanobot/pull/6436) 图片附件改为 composer 缩略图展示；
  - [#6425](https://github.com/HKUDS/nanobot/pull/6425) 分离文件卡片与媒体预览，修复混合消息布局错乱；
  - [#6435](https://github.com/HKUDS/nanobot/pull/6435) 延迟加载非聊天启动接口，优化移动端冷启动性能；
  - [#6437](https://github.com/HKUDS/nanobot/pull/6437) 升级 Pele 至 1.9.0，修复中文标签撑破 Mermaid 图。
- **Agent 正确性**：[#6346](https://github.com/HKUDS/nanobot/pull/6346) 修复达到 max_iterations 后仍在下一轮恢复被放弃工作的问题。

今日进展主要面向稳定性与体验细节，属于持续打磨阶段，未见大型架构变更落地。

## 4. 社区热点

- **[#6285](https://github.com/HKUDS/nanobot/issues/6285)**（5 条评论，今日关闭）：DuckDuckGo 搜索失败报错易误读为空结果。上游 ddgs 维护者亲自参与讨论，最终以升级依赖收尾，是社区-上游协作的典型案例。
- **[#2569](https://github.com/HKUDS/nanobot/issues/2569)**（创建于 2026-03，今日重新活跃）：要求通过 sandlock 引入 OS 级工具执行沙箱。诉求明确——现有正则黑名单与字符串路径检查可被编码/别名等手段绕过，安全模型需升级到系统级隔离。
- **[#6440](https://github.com/HKUDS/nanobot/issues/6440)**（新开）：指出“脱敏”概念混淆问题——秘密擦除（有损单向）与 PII 可逆去标识化应分离实现，并点出现有 4 个 redaction PR（#1249/#1305/#1513/#1812）长期未合并的治理问题。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 状态 |
|---|---|---|
| 高（资源泄漏） | [#6438](https://github.com/HKUDS/nanobot/issues/6438) API 会话锁注册表无限增长，可被恶意 session_id 触发内存耗尽 | 已有 fix PR [#6439](https://github.com/HKUDS/nanobot/pull/6439)（WeakValueDictionary），另有同类 [#6194](https://github.com/HKUDS/nanobot/pull/6194) 待合并 |
| 中（安全） | [#2569](https://github.com/HKUDS/nanobot/issues/2569) 命令拦截可绕过 | 讨论中，暂无 fix PR |
| 中（功能） | [#6285](https://github.com/HKUDS/nanobot/issues/6285) web_search 误报空结果 | 已修复（#6442 已关闭） |
| 中（工具兼容） | BOM/UTF-16/UTF-32 文件下 `edit_file`/`grep` 失败 | 修复 PR 待合并：[#6448](https://github.com/HKUDS/nanobot/pull/6448)、[#6447](https://github.com/HKUDS/nanobot/pull/6447) |
| 中（Agent） | 压缩后超大文件读取导致 ContextWindowExceededError 中止 | 修复 PR [#5880](https://github.com/HKUDS/nanobot/pull/5880) 待合并 |

## 6. 功能请求与路线图信号

- **会话级 reasoning effort**（[#6441](https://github.com/HKUDS/nanobot/pull/6441)，OPEN）：允许在单次对话内即时切换推理强度，有 Linear 任务号（NAN-355）跟踪，纳入概率高。
- **委托任务 UI**（[#6443](https://github.com/HKUDS/nanobot/pull/6443)）：为子任务建立固定入口与独立结果存放，属 WebUI 持续演进方向。
- **新 Provider**：[#6446](https://github.com/HKUDS/nanobot/pull/6446) 添加 Runcrate 网关；[#6445](https://github.com/HKUDS/nanobot/pull/6445) 刷新 MiniMax M3 目录及 thinking 兼容——Provider 生态扩张仍是常规节奏。
- **PII 可逆去标识化**（[#6440](https://github.com/HKUDS/nanobot/issues/6440)）：需求论证充分，但依赖 4 个积压 redaction PR 的梳理，短期内落地面较小。
- **OS 级沙箱**（#2569）：安全刚需，但工程量大，属于中期路线图信号。

## 7. 用户反馈摘要

- **痛点**：DuckDuckGo 默认搜索不可靠且报错误导（#6285）；非 UTF-8 文件（尤其 Windows BOM 场景）下工具链读写/搜索失败（#6447/#6448）；长对话压缩后大文件读取导致任务中止（#5880）。
- **使用场景**：用户通过 QQ/Telegram/Discord/Slack 等 chat channel 使用，并关注模型 failover 时的透明度——[#6062](https://github.com/HKUDS/nanobot/pull/6062) 反映用户希望在降级到备用模型时收到通知。
- **正面信号**：Bug 从报告到 fix PR 的响应周期极短（#6438 当日闭环），社区对安全与隐私（沙箱、PII）的讨论深度较高，反映用户群已从尝鲜转向生产部署。

## 8. 待处理积压

- **Redaction PR 群**：#1249、#1305、#1513、#1812 四个 PR 长期未合并且功能重叠（见 #6440 分析），建议维护者优先统一方案。
- **[#2569](https://github.com/HKUDS/nanobot/issues/2569)**：OS 级沙箱需求 7 个月未实质推进，安全问题宜给出明确回应或路线图。
- **会话锁泄漏修复冲突**：[#6194](https://github.com/HKUDS/nanobot/pull/6194)（10-13 提出）与 [#6439](https://github.com/HKUDS/nanobot/pull/6439) 重复，均标记 conflict，建议尽快裁定保留一个。
- **[#5314](https://github.com/HKUDS/nanobot/pull/5314)**：嵌套 JSON 工具参数解码修复，8 月提出至今待合并，影响部分 OpenAI 兼容 Provider + MCP 用户。
- **[#6062](https://github.com/HKUDS/nanobot/pull/6062)**：channel 降级通知修复待合并且存在冲突，需 rebase。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-10-25

## 1. 今日速览

Zeroclaw 今日保持高活跃度：过去 24 小时共有 **11 条 Issue 更新**（10 新开/活跃，1 关闭）和 **33 条 PR 更新**（30 待合并，3 合并/关闭），无新版本发布。项目正处于 **v0.8.7 发布窗口**——版本号提升 PR（#12011）已关闭、文档翻译已钉定到 v0.8.7 目录（#12019），发布流程进入收尾阶段。社区贡献持续活跃，围绕插件 RPC 架构、知识图谱安全、会话事件历史等多个 XL 级大型 PR 稳步推进，多个 Bug 报告当天即有对应 fix PR 提出，响应效率较高。

## 2. 版本发布

今日无新 Release 发布。但需注意：**v0.8.7 正在发布流程中**：
- [#12011](https://github.com/zeroclaw-labs/zeroclaw/pull/12011) 版本号从 0.8.6 提升至 0.8.7（已关闭），覆盖 30 个 workspace 包、Tauri 配置、setup.bat 及 crates.io/Discord 发布描述。
- [#12019](https://github.com/zeroclaw-labs/zeroclaw/pull/12019) 将 docs/book/po 翻译 gitlink 钉定到 v0.8.7 目录，open 状态且标记 `needs-author-action`，是发布链路上待完成的最后一环。
- [#11937](https://github.com/zeroclaw-labs/zeroclaw/pull/11937) 旧依赖批量更新 PR 已关闭，由 [#12018](https://github.com/zeroclaw-labs/zeroclaw/pull/12018)（35 项 rust-all 更新）接替。

## 3. 项目进展

今日合并/关闭的 PR 共 3 条，均属发布与依赖维护类，未包含功能性合并：

- **#12011 (CLOSED)** — v0.8.7 版本号提升，标志着发布候选流程基本完成。
- **#11937 (CLOSED)** — 33 项 rust 依赖批量更新，被新一轮 #12018 取代。
- **#12016 (Issue, CLOSED)** — 嵌入式二进制注册 chat/cron hooks 的功能请求被关闭（推测已由其他途径解决或转入讨论）。

尽管功能性合并有限，多条大型 PR 保持活跃推进：
- [#11320](https://github.com/zeroclaw-labs/zeroclaw/pull/11320) / [#11322](https://github.com/zeroclaw-labs/zeroclaw/pull/11322)：插件 webhook 经核心 RPC 分发/网关转发，依赖栈已完成 restack，处于 `needs-author-action` 阶段。
- [#11879](https://github.com/zeroclaw-labs/zeroclaw/pull/11879)：Goal V1 提案 2/12（dormant 配置与命令语法）。
- [#11997](https://github.com/zeroclaw-labs/zeroclaw/pull/11997)：`send_via` 附件 + 读策略校验，覆盖全部 12+ 渠道。
- [#12017](https://github.com/zeroclaw-labs/zeroclaw/pull/12017)：将上下文窗口视为模型元数据而非配置——直接对应今日新 Bug #12014，**当日报告当日出修复 PR**，响应速度值得肯定。

## 4. 社区热点

- **[#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) 持久记忆追踪器**（12 条评论，活跃度最高）：跨会话记忆子系统对齐成熟 Agent 运行时的多 PR 协调 epic，当前 7 个开放子项（4 issue + 3 PR），是社区长期关注的核心方向。
- **[#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) Markdown 记忆后端并发写丢数据**（3 条评论，S0 级，P1）：由 agent 自动上报，`MarkdownMemory::store` 整文件覆写无序列化/写校验。诉求集中在**记忆子系统的数据可靠性**——这是用户将 ZeroClaw 当作长期个人助理使用的基础。
- **[#12014](https://github.com/zeroclaw-labs/zeroclaw/issues/12014)** 自定义 OpenAI 兼容 provider 无 `context_window` 时硬编码 32k 回退，本地拒绝合法轮次，反映**自定义 provider 用户的互操作痛点**，且当天已有修复 PR #12017。

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | Fix PR |
|---|---|---|---|
| S0 | [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) Markdown 记忆后端并发 `store()` 丢失条目（P1, risk:high） | open, accepted | 暂无直接 fix PR，受 #8891 追踪 |
| S1 | [#12014](https://github.com/zeroclaw-labs/zeroclaw/issues/12014) 32k context window 硬编码回退拒绝合法轮次 | open | ✅ [#12017](https://github.com/zeroclaw-labs/zeroclaw/pull/12017) 当日提出 |
| S1 | [#12005](https://github.com/zeroclaw-labs/zeroclaw/issues/12005) PowerShell 方言拒绝含裸 `@` 参数的命令（疑似回归，v0.8.6） | open | 暂无，建议打 regression 标签 |
| — | [#12006](https://github.com/zeroclaw-labs/zeroclaw/issues/12006) tool_search 提供 reload 后过期的延迟工具 schema（S3） | open | ✅ [#12007](https://github.com/zeroclaw-labs/zeroclaw/pull/12007) 当日提出 |
| — | [#11946](https://github.com/zeroclaw-labs/zeroclaw/issues/11946) 过期确定性 SOP checkpoint 可能覆写运行 state 文件 | open | 跟进 #11861 审查，配套测试任务 #11945 |

关注点：#12005 与 #12014 均指向**配置/校验层的静默回退行为**，与 #11799（策略拒绝无解释）同属“静默失败模式”问题族，值得系统性梳理。

## 6. 功能请求与路线图信号

- **邮件渠道增强**是当前高频方向：[#11996](https://github.com/zeroclaw-labs/zeroclaw/issues/11996)（操作员模板 + 消毒 HTML 正文）与附件发送 [#11997 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/11997) 已在实施中，加上 [#12003](https://github.com/zeroclaw-labs/zeroclaw/pull/12003)（仅收件 IMAP-only 渠道），邮件能力大概率进入下一版本。
- **[#12016](https://github.com/zeroclaw-labs/zeroclaw/issues/12016)（已关闭）** 嵌入式 hooks 表明"ZeroClaw as a library"用例受到官方回应。
- **[#11921](https://github.com/zeroclaw-labs/zeroclaw/pull/11921) append-only 会话事件历史**与 **[#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745) 知识图谱 per-agent 归因**（均标注 v0.9.0）勾勒出 **v0.9 的核心主题：可审计、可重放、安全域隔离的 agent 运行时**。
- **Goal V1**（#11879，提案 2/12）与 XMPP/Prosody 渠道（#11847）是更长线的路线图信号。

## 7. 用户反馈摘要

- **Windows/PowerShell 用户**因裸 `@` 校验回归（#12005）无法使用白名单邮件 CLI，反映策略校验的**过度拦截**伤及合法工作流。
- **自定义 provider 用户**（#12014）依赖 OpenAI 兼容端点接入，对隐式 32k 假设不满，诉求是“未知容量时应查询或放行，而非静默截断”。
- **记忆可靠性是长期用户的核心关切**（#10797、#8891）：跨会话记忆一旦丢失条目，将直接破坏“个人助理”的信任基础。
- **渠道运维者**（#12003）希望最小权限配置（只收不发邮件），显示出向企业/合规场景渗透的趋势。
- 整体看，社区对**安全策略的可解释性**（#11799）与**发送能力与读策略的一致性**（#11996、#11997）呼声一致：安全机制要做，但要透明、可控。

## 8. 待处理积压

- **[#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745)** 知识图谱归因与作用域：8 月 4 日开至今，release-gate + P1 + risk:high，长期 `needs-author-action`，建议维护者推动 review 或分拆。
- **[#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420)** Anthropic OAuth 存储配置：7 月 26 日开至今（近 3 个月），XL 级、risk:high，同样处于 needs-author-action。
- **[#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797)** S0 级记忆数据丢失 bug：9 月 12 日报告，已 accepted 但无修复 PR 落地，风险最高。
- **[#10446](https://github.com/zeroclaw-labs/zeroclaw/pull/10446)** 拒绝泄漏到正文的 tool-call 信封：8 月底开至今，涉及生产实例间歇性问题。
- **[#12019](https://github.com/zeroclaw-labs/zeroclaw/pull/12019)** v0.8.7 翻译钉定：发布链路阻塞项，需 author action 后方可完成发布。

---
**健康度小结**：Issue→PR 当日闭环率高（2 个 Bug 当日出 fix），发布流程规范；主要风险集中在两个长期积压的 XL 级安全 PR 和一个 S0 级记忆数据丢失 bug 上。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-10-25

## 1. 今日速览

Hermes Agent 今日保持高活跃度：24 小时内 Issues 更新 50 条（新开/活跃 36、关闭 14），PR 更新 50 条（待合并 45、合并/关闭 5），无新版本发布。**统一网关运行时（#106742）合并后的善后修复**仍是社区最大焦点，其追踪 Issue #134889 已累计 217 条评论。今日新开 Bug 集中在 Desktop、gateway 会话管理和插件依赖解析三大领域，其中 Linux Desktop 透明度默认值问题（#143426，👍10）引发最强用户共鸣。PR 侧以修复和体验改进为主，多个高价值修复（流式卡死、插件更新致记忆 provider 丢失）与安全加固（密钥可存入 OS keychain）值得关注。

## 2. 版本发布

今日无新版本发布。当前稳定版仍为 `v0.22.5`（commit `bf0203a794a0`），多个 Issue 确认该版本存在的问题（如 #144186 Desktop 远程后端图片发送失败），预计将推动一次补丁版本。

## 3. 项目进展

今日合并/关闭 PR 共 5 条，其中值得注意的：

- **[#129143](https://github.com/NousResearch/hermes-agent/pull/129143)（已关闭）** inbound webhook 接受 Hermes 出站签名 —— 以 duplicate 关闭，说明该能力已由其他路径覆盖。
- 主线进展主要在**待合并队列（45 条）**中堆积，今日新增的重点修复 PR 已就绪待审：
  - [#144201](https://github.com/NousResearch/hermes-agent/pull/144201)：修复流式 worker 卡死（一个 turn 日志重复 39 次、悬挂 2.6 小时的实际事故），P2 高优先级。
  - [#144275](https://github.com/NousResearch/hermes-agent/pull/144275)：为共享网关恢复 `/handoff` RPC 动词，直接对应 Issue #143608。
  - [#144257](https://github.com/NousResearch/hermes-agent/pull/144257)：更新导致插件被禁用时不再清空 memory provider，一次性修复 #131216/#129198/#125919 三个 Issue。

整体看，项目处于**“统一网关架构落地后的收敛期”**：大重构已进 main，当前以修复 fallout 和补齐桌面端功能为主，PR 合并速度偏慢（45 待合 vs 5 已合），审查带宽可能是瓶颈。

## 4. 社区热点

| Issue | 热度 | 讨论焦点 |
|---|---|---|
| [#134889](https://github.com/NousResearch/hermes-agent/issues/134889)（CLOSED） | 217 评论 | 统一网关 post-merge 修复追踪，“一个 gateway 拥有所有本地会话”架构的多表面善后，横跨 CLI/Desktop/TUI/Windows |
| [#143379](https://github.com/NousResearch/hermes-agent/issues/143379) | 15 评论 | RFC：doc-chain substrate 网络 —— 持久记录需在压缩后保留 provenance，agent 应能重读而非让用户重复 |
| [#139818](https://github.com/NousResearch/hermes-agent/issues/139818) | 14 评论 | 远程后端桌面会话无法 `session.resume`（not_found），serve 重启后对话永久丢失 |
| [#143426](https://github.com/NousResearch/hermes-agent/issues/143426) | 13 评论 / 👍10 | Linux Desktop 以 6% 不透明度启动，setOpacity 隐患 + 设置项被隐藏 |
| [#62728](https://github.com/NousResearch/hermes-agent/issues/62728) | 8 评论 | verifier 看不到真实测试运行，agent 重复跑 ad-hoc 测试，长期未解 |

**诉求分析**：社区核心焦虑是**网关统一后会话的可恢复性与跨表面互操作**（#134889、#139818、#143686、#143608 均为同一主题变体），以及 Desktop 在 Linux 上的基础可用性（#143426、#143569）。

## 5. Bug 与稳定性（按严重度）

**P0/P1**
- [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) 网关会话归属追踪（已关闭，善后进行中）
- PR [#141653](https://github.com/NousResearch/hermes-agent/pull/141653)（P1）：网关 loop-liveness 看门狗诊断日志缺失 — 已有诊断增强 PR 待合并

**P2 — 会话/API**
- [#139818](https://github.com/NousResearch/hermes-agent/issues/139818) 远程后端桌面会话 unresumable — 暂无专属 fix PR
- [#143686](https://github.com/NousResearch/hermes-agent/issues/143686) API server 续接 CLI 会话报 `permission_denied`
- [#144227](https://github.com/NousReference/hermes-agent/issues/144227)（新）被拒 turn 仍返回 HTTP 200，OpenAI 兼容客户端显示空白 — 今日新报
- 流式卡死：PR [#144201](https://github.com/NousResearch/hermes-agent/pull/144201) 已提交 ✅

**P2 — Desktop/平台**
- [#143426](https://github.com/NousResearch/hermes-agent/issues/143426) Linux 6% 不透明度（👍10，用户影响面大）
- [#143569](https://github.com/NousResearch/hermes-agent/issues/143569) 裸金属主机窗口永不出现（/dev/shm 崩溃）
- [#144186](https://github.com/NousResearch/hermes-agent/issues/144186) Desktop 向远程 serve 发图失败（v0.22.5 自身缺陷）
- [#139132](https://github.com/NousResearch/hermes-agent/issues/139132) Windows 更新中断后启动循环修复

**P2/P3 — 插件与依赖**
- [#143305](https://github.com/NousResearch/hermes-agent/issues/143305)（CLOSED）、[#143254](https://github.com/NousResearch/hermes-agent/issues/143254)（CLOSED）、[#144003](https://github.com/NousResearch/hermes-agent/issues/144003)（CLOSED）：uv 锁 / Python 3.14 / android 标记导致插件无法准入 —— 一批同根因问题今日集中关闭，社区已找到解法

**安全（P3）**
- [#143982](https://github.com/NousResearch/hermes-agent/issues/143982)：`--password=`、`docker login -p`、Azure AccountKey 等凭据形态绕过 chat egress 与审批卡脱敏 —— **暂无 fix PR，建议优先关注**；PR [#144246](https://github.com/NousResearch/hermes-agent/pull/144246)（vault 密钥入 OS keychain）是相关加固方向。

## 6. 功能请求与路线图信号

- **网关托管 Webapp**：PR [#141864](https://github.com/NousResearch/hermes-agent/pull/141864) 让 gateway 直接服务浏览器版 Desktop，标签覆盖极广（ci-reviewed），是明显的路线图级特性，很可能随下版本到来。
- **流式回复重写插件机制**：PR [#144266](https://github.com/NousResearch/hermes-agent/pull/144266) `hold_stream` transform —— 与 #143982 脱敏诉求互补，落地后可支撑企业级策略过滤。
- **进程统一监管**：PR [#137057](https://github.com/NousResearch/hermes-agent/pull/137057) owner-death supervisor + 禁止新增 detached spawn，系统性解决孤儿子进程家族问题。
- **记忆子系统争议**：RFC [#143379](https://github.com/NousResearch/hermes-agent/issues/143379) vs PR [#141876](https://github.com/NousResearch/hermes-agent/pull/141876)（“回滚 14 行胜过 6000 行 churn”）——社区对 memory 路线出现明显分歧，需维护者裁决。
- **插件生态扩张**：今日 4 个 plugin-catalog PR（openpaths 模型提供商、Nextcloud Talk、SGME 记忆引擎、Composer 拼写检查），生态活跃。

## 7. 用户反馈摘要

- **痛点集中**：① 会话丢失/无法恢复是最高频抱怨（远程 serve + Desktop 场景）；② Linux/Windows Desktop 打包质量参差（透明度、/dev/shm、更新循环）；③ 插件带 Python 依赖时安装/更新频繁失败，普通用户难以自行诊断。
- **满意点**：Issue 模板与分类（P 级、sweeper 标签）完善，不少 Issue 附带用户自己定位到 commit 级的根因分析（如 #143426、#144227 由 AI 辅助生成、质量很高），显示高级用户粘性强。
- **情绪信号**：#143426 获得 10 👍，Linux 桌面用户对“默认即坏”的体验容忍度低；#141876 的 PR 描述（“5000 行没修好，14 行也许够了”）反映出部分贡献者对 memory 子系统方向的不满。

## 8. 待处理积压

- [#62728](https://github.com/NousResearch/hermes-agent/issues/62728)（7-11 开启，至今 3.5 个月）：verifier 看不到真实测试运行 — 无 fix PR，需维护者表态。
- [#12130](https://github.com/NousResearch/hermes-agent/issues/12130)（4-18 开启，6 个月+）：TUI v2 对 v1 缺约 23 个 slash 命令、零 `@` 引用 — 功能差距清单无人认领。
- [#72082](https://github.com/NousResearch/hermes-agent/issues/72082)（7-26 开启）：后台自我改进在只读 turn 中写 skill 库且不披露 — 涉及信任边界，应优先。
- [#134167](https://github.com/NousResearch/hermes-agent/issues/134167)：浏览器截图降采样无比例标注致点击坐标偏移 — 视觉自动化可靠性问题。
- PR [#141864](https://github.com/NousResearch/hermes-agent/pull/141864)、[#137057](https://github.com/NousResearch/hermes-agent/pull/137057) 等大型 PR 长期待审，45 条待合队列提示**审查带宽不足**，建议维护者优先排期。

---
*数据来源：GitHub API，统计窗口 2026-10-24 ~ 2026-10-25（UTC）。链接格式：`NousResearch/hermes-agent#编号`，可在 GitHub 直接检索。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-10-25）

## 1. 今日速览

今日 NanoClaw 仓库无新开 Issue，但 PR 活动较为活跃（9 条更新，8 条待合并、1 条关闭），显示贡献者侧持续推动功能开发。重点集中在**渠道扩展**（Proton Mail 原生适配器）、**安全加固**（日志脱敏、提示注入防护）和**模型选择优化**（MiniMax 模型优先级）。社区贡献仍以外部 skill/adapter 为主，核心维护节奏平稳，属于中等活跃度的一天。无版本发布。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 被合并；1 条 PR 被关闭：

- **#3724 [已关闭]** Update retired model id in the add-opencode Anthropic example（[@kasparovabi](nanocoai/nanoclaw PR #3724)）——更新已下线的 Anthropic 模型 ID（`claude-sonnet-4-20250514` → `claude-sonnet-5`），属文档/示例级修正。该 PR 关闭而非合并，可能因内容已被其他方式覆盖或要求作者调整。

值得注意的是，Proton Mail 适配器工作已按评审意见拆分为两个 PR 协同推进（#3726 skill 侧 + #4218 adapter 侧），显示评审流程在正常运转，功能落地在即。

## 4. 社区热点

今日无 Issue 活动，评论数据缺失。从 PR 更新看，热度集中在：

- **Proton Mail 原生支持**（[#3726](nanocoai/nanoclaw PR #3726) + [#4218](nanocoai/nanoclaw PR #4218)）：作者按评审要求重构 PR 结构（skill 与 adapter 分离），今日仍有更新，说明作者与维护者互动活跃。诉求：隐私敏感用户希望通过本地 Proton Mail Bridge 接入加密邮箱作为 AI 渠道。
- **日志密钥脱敏**（[#4184](nanocoai/nanoclaw PR #4184)）：标签含 `core-team` 与 `kind/hardening`，是今日安全方向的重点，覆盖 host/setup 日志中 key 形状凭据的掩码。

## 5. Bug 与稳定性

今日无新报告的崩溃/回归 Issue。待合并的修复类 PR 按潜在严重程度排列：

1. **高：提示结构伪造风险** — [#3717](nanocoai/nanoclaw PR #3717) `fix(agent-runner)`：`formatTaskMessage` 等函数使用 `JSON.stringify` 嵌入内容，无法转义 `<`，外部内容可闭合 XML 块并伪造提示结构（提示注入向量）。已提交 fix，状态 `triage/needs-author`，等待作者响应评审。
2. **中：日志泄露密钥** — [#4184](nanocoai/nanoclaw PR #4184)：任何错误消息、工具输出都可能把 API key 写入 `logs/`。已有修复（写入前脱敏）。
3. **中：Discord 附件不可读** — [#2752](nanocoai/nanoclaw PR #2752)：Discord 附件仅暴露 CDN URL，chat-sdk bridge 丢弃之，导致图片/粘贴文本无法被 agent 读取。已有修复（staging 仅含 URL 的附件），但 PR 自 6 月开至今。
4. **低：MiniMax 模型选择过时** — [#4219](nanocoai/nanoclaw PR #4219)：OpenCode 选择器优先展示 MiniMax-M3.1-Flash / M3。

## 6. 功能请求与路线图信号

- **Proton Mail 渠道**（#3726/#4218）：已完成拆分评审，接近合入，大概率进入下一版本。
- **角色化模型分组**（[#4180](nanocoai/nanoclaw PR #4180) `/add-model-use-cases`）：让群组通过 `usecase:coding` 等角色名引用 `.env` 中集中映射的模型，解决多群组共享同类工作的配置重复问题，与现有 skill 交付模式一致，合入概率较高。
- **GitHub Copilot 作为运行时**（[#3976](nanocoai/nanoclaw PR #3976) `/add-copilot`）：设备登录 token 存入 credential gateway 而非环境变量，安全性设计符合项目 `kind/hardening` 导向。
- 信号解读：项目路线明显偏向**skill 生态扩张 + 凭据安全收敛**，以上三个 skill 类 PR 均有较大概率随下个版本推出。

## 7. 用户反馈摘要

今日无 Issue 评论数据。从 PR 描述可间接提炼的真实痛点：

- **隐私与渠道自主**：用户希望在 AI 助手中使用加密邮箱（Proton Mail）而不经过第三方网关。
- **凭据安全焦虑**：token 走环境变量、密钥落入日志是被反复提及的风险场景（#3976、#4184 均为此设计）。
- **配置管理负担**：多个群组重复配置同类模型映射繁琐（#4180）。
- **模型 ID 漂移**：上游厂商退役模型 ID 导致示例/选择器失效（#3724、#4219），反映 NanoClaw 需持续跟进 providers 生态变化。

## 8. 待处理积压

| PR | 开启时间 | 状态 | 提醒 |
|---|---|---|---|
| [#2752](nanocoai/nanoclaw PR #2752) Discord 附件 URL staging | 2026-06-12 | OPEN，超 4 个月未合 | 功能性 bug 修复，建议维护者优先评审或说明阻塞原因 |
| [#3717](nanocoai/nanoclaw PR #3717) 提示块转义修复 | 2026-09-04 | `triage/needs-author` | 安全相关，建议设定作者响应截止时间 |
| [#3726](nanocoai/nanoclaw PR #3726) Proton Mail skill | 2026-09-06 | OPEN，近 2 个月 | 已按评审拆分，建议加快合入节奏 |

---

**健康度小结**：今日贡献以安全加固与渠道/skill 扩展为主，PR 流转正常但存在 3 条长期积压（含 1 条安全修复），且零 Issue 活动可能反映反馈渠道热度下降，值得维护者关注。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-10-25）

## 1. 今日速览

- 过去 24 小时项目共处理 **2 条 Issue 更新**（均为新开申诉类）与 **2 条 PR 更新**（均为已关闭），无新版本发布，活跃度处于**中等偏低**但聚焦度高的状态。
- 社区侧今日焦点集中在**账号封禁申诉**：两条新 Issue（[#2936](https://github.com/netease-youdao/LobsterAI/issues/2936)、[#2940](https://github.com/netease-youdao/LobsterAI/issues/2940)）均涉及用户因本地代理/第三方插件调用模型接口触发风控被误封，反映风控策略与个人开发者使用习惯之间的摩擦。
- 研发侧由核心贡献者 @fisherdaddy 推进**启动性能优化**，[#2939](https://github.com/netease-youdao/LobsterAI/pull/2939) 将网关冷启动从 26.0s 降至 13.6s，改进显著。
- 无新 Bug 报告、无崩溃类问题，代码质量与稳定性信号良好。

## 2. 版本发布

今日无新版本发布。（注：PR #2939 中提及 2026.10.23 打包版本存在冷启动性能问题，相关修复可能随下个版本交付。）

## 3. 项目进展

| PR | 状态 | 内容 |
|---|---|---|
| [#2939](https://github.com/netease-youdao/LobsterAI/pull/2939) [area: main, area: openclaw] | 已关闭 | **启动性能优化**：针对 907 MB OpenClaw 状态目录场景，定位两个根因（重复执行启动迁移 + 未预热状态数据库），将网关冷启动从 26.0s（打包版）/ 23.4s（dev）降至 **13.6s**，降幅约 48%，同时保留完整的数据库完整性校验。 |
| [#2941](https://github.com/netease-youdao/LobsterAI/pull/2941) [area: main] | 已关闭 | **启动 Profiling 补全**：#2939 的后续工作，在缓存预热与 AskUser server 之间新增 4 个测量阶段（含 `agentModelMig...` 等），补齐了每次启动约 0.6s（冷启动最高 3.3s）此前无法归因的性能黑洞。 |

**评估**：两个 PR 均已关闭（尚不能确认是已合并还是被关闭，建议维护者在日报/Release Notes 中明确），属同一性能优化主线的连续推进。若已合入，启动体验（尤其重度用户/大状态目录用户）将有明显改善，是本周最有价值的工程进展之一。

## 4. 社区热点

**今日最活跃：[#2936 账号误封申诉](https://github.com/netease-youdao/LobsterAI/issues/2936)**（4 条评论，10-23 创建、10-24 持续讨论）

- 诉求：用户 @7597qqme 的两个账号（18811912020 / 13043620160）被封禁，声明未刷接口、未批量调用，怀疑与在第三方 DSH 插件中配置 LobsterAI 凭据调用模型服务有关。
- 背后信号：**风控误判与个人合理使用之间的边界不清**。用户将凭据放入第三方工具即触发封禁，但官方缺乏明确的“允许/禁止的使用方式”公示，导致申诉通道（GitHub Issue）成为唯一出口。

次热点：[#2940 账号解封申请](https://github.com/netease-youdao/LobsterAI/issues/2940)（1 条评论，今日新开）

- 用户通过本地反向代理转发内置模型接口供个人工具使用，被封禁后已完成整改（停止代理、清理 Token），态度积极。
- **值得注意**：两位用户均主动交代技术细节并承诺整改，说明社区用户整体善意，建议官方考虑提供正式申诉表单或分级处罚（警告 → 限流 → 封禁）机制。

## 5. Bug 与稳定性

今日**无新增 Bug / 崩溃 / 回归报告**。

- 唯一涉及稳定性的议题是账号封禁导致的**登录不可用**（#2936、#2940），属账号风控问题而非产品缺陷，暂无对应 fix PR。
- 性能层面：#2939 已定位并修复大状态目录下 26s 冷启动问题（fix PR 即 #2939 本身）。

## 6. 功能请求与路线图信号

今日无显式功能请求，但从 Issues 可提炼隐含需求：

1. **正式的账号申诉/解封流程**（来自 #2936、#2940）——高频痛点，建议纳入官方支持渠道或产品内入口。
2. **官方 API / 模型接口使用政策文档**（来自 #2936）——明确个人本地代理、第三方插件调用是否合规，降低误封争议。
3. **启动性能持续优化**（来自 #2939 → #2941 的跟进节奏）——核心团队已在主动推进，profiling 基建完善后，后续优化有望持续落地于下一版本。

## 7. 用户反馈摘要

- **痛点**：账号被封后无自助申诉渠道，只能开 GitHub Issue；风控触发条件不透明（第三方插件配置凭据、本地反向代理均可能触发）。
- **典型使用场景**：技术型用户将 LobsterAI 内置模型接口接入个人本地工具链（反向代理、DSH 插件）使用，均为个人非商业用途。
- **积极面**：用户被封后主动整改并详细说明情况，社区用户配合度高、诚意明显；对产品本身的模型能力有真实粘性需求。
- **改进方向**：明确使用政策 + 分级风控 + 正式申诉通道，可显著降低此类摩擦。

## 8. 待处理积压

- [#2936](https://github.com/netease-youdao/LobsterAI/issues/2936)（OPEN，已 2 天，4 条评论）：**需要官方风控/账号团队正式回应**，涉及两个账号的误封判定，拖延处理有口碑风险。
- [#2940](https://github.com/netease-youdao/LobsterAI/issues/2940)（OPEN，今日新开）：用户已完成整改，等待解封答复，建议 48 小时内响应。
- 建议：维护者可考虑将申诉类 Issue 打上专门标签（如 `type: appeal`）并对接内部客服流程，避免与产品 Bug 混排导致积压。

---
*数据来源：GitHub netease-youdao/LobsterAI 过去 24 小时活动流水。PR 状态为 CLOSED，建议核实是否已实际合入 main 分支。*

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

# CoPaw 项目动态日报 — 2026-10-25

## 1. 今日速览

CoPaw 今日保持中高活跃度：过去 24 小时新增/活跃 Issue 6 条、PR 更新 10 条（9 条待合并、1 条已关闭），无新版本发布。社区贡献焦点集中在**文件编辑工具的健壮性**（CRLF/编码丢失）、**审计日志中断**等稳定性问题，以及**QQ 渠道流式消息**、**ReMe 记忆系统升级**等功能推进。Issue 全部处于 OPEN 状态（0 关闭），说明维护者响应节奏略滞后于报告速度，需关注积压。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日唯一关闭的 PR 为：

- **[#8411](https://github.com/agentscope-ai/QwenPaw/pull/8411) fix(matrix): recover cached sessions and missing device keys**（Closed-and-review-later）— 修复 #8365：密码认证的 Matrix 渠道每次重启重新登录，且 homeserver 删除设备密钥后本地 crypto store 仍标记已共享，导致启动永不再上传且健康检查误报正常。该 PR 采用“稍后重审”方式关闭，问题尚未真正解决，需留意后续替代方案。

待合并的重点 PR（持续活跃）：

- **[#8347](https://github.com/agentscope-ai/QwenPaw/pull/8347) feat(memory): ReMe 0.4.2.0 集成**（size/XXXL）— 升级 `reme-ai` 至 0.4.2.0，接入默认关闭的决策压缩、图片记忆、实体标签，联动 ReMe #672，是记忆子系统的大版本演进。
- **[#8409](https://github.com/agentscope-ai/QwenPaw/pull/8409) feat(channels): QQ C2C 流式消息**（size/L）— 基于官方 stream_messages API 实现流式回调，对应 #8307，QQ 渠道体验将显著提升。
- **[#8410](https://github.com/agentscope-ai/QwenPaw/pull/8410) fix(console): 模型池支持删除**（size/M）— 补齐 Console 管理能力，对应 #8195。
- **[#7835](https://github.com/agentscope-ai/QwenPaw/pull/7835) fix(memory): 阻止 auto-memory-recall 载荷泄漏到渠道**（Under Review）— 修复合成工具调用痕迹被飞书等出站渠道外泄的问题。
- **[#8408](https://github.com/agentscope-ai/QwenPaw/pull/8408) feat(console): 服务端默认助手消息折叠模式**（size/M）— 与 #8407 一一对应的“issue+PR 同日提交”，社区贡献质量高。

整体看，记忆子系统（ReMe 升级 + 泄漏修复）和渠道能力（QQ 流式、Matrix 恢复）是当前两条主线。

## 4. 社区热点

- **[#8406](https://github.com/agentscope-ai/QwenPaw/issues/8406) QQ 渠道 enabled 标志被静默重置**（评论 2 条，为今日讨论最多）— 用户 @gcy529 反复遭遇配置被静默覆盖且无任何警告，涉及配置管理的可观测性诉求。注意：该 Issue 描述中的 `$(cat /tmp/issue_body.md)` 未被正确渲染，疑似模板执行问题，建议维护者提醒作者补充。
- **[#8412](https://github.com/agentscope-ai/QwenPaw/issues/8412) audit.db 停止记录工具调用** — 治理审计日志按 agent 维度中断后永不恢复，直接冲击企业/团队部署的合规审计能力，属高关注度问题。
- **[#8407](https://github.com/agentscope-ai/QwenPaw/issues/8407) + [#8408](https://github.com/agentscope-ai/QwenPaw/pull/8408)** — 用户痛点是 UI 偏好仅存 localStorage，多设备不同步、自托管无法统一下发默认值；PR 已按 `/config/theme` 模式给出服务端默认值方案，是典型的“需求当天提、方案当天交”的高效社区协作。

## 5. Bug 与稳定性（按严重程度）

1. **高危：[#8412](https://github.com/agentscope-ai/QwenPaw/issues/8412) 审计日志静默中断** — `policy.yaml` 配置 `audit_level: all` 但 `audit_events` 表按 agent 停止记录且不再恢复，涉及文件写入等敏感操作无审计痕迹。⚠️ 暂无 fix PR。
2. **高危：[#8406](https://github.com/agentscope-ai/QwenPaw/issues/8406) QQ 渠道配置静默重置** — 运行时配置被覆盖为 false 无警告。⚠️ 暂无 fix PR。
3. **中危：[#8414](https://github.com/agentscope-ai/QwenPaw/issues/8414) / [#8415](https://github.com/agentscope-ai/QwenPaw/issues/8415) edit_file 数据破坏**（同日双报，标题重复，建议合并处理）— `read_file_safe` 将 CRLF 归一为 LF 后整文件重写，一行编辑即全文件换行符被改；且 `errors='ignore'` 解码导致 ISO-8859-1 字符（é/ü）永久丢失并回写 UTF-8，属**静默数据损坏**，均基于 revision `27d22cd1`。⚠️ 暂无 fix PR。
4. **中危：[#8413](https://github.com/agentscope-ai/QwenPaw/issues/8413) 自杀保护误伤** — `_is_dangerous_self_kill` 对任意含 `kill` 与 `$pid` 子串的命令拦截，阻止用户终止无关进程。⚠️ 暂无 fix PR。

**注意：今日所有 Bug 均无对应修复 PR，且 6 条 Issue 全部 OPEN，修复响应存在缺口。**

## 6. 功能请求与路线图信号

- **服务端级默认配置**（[#8407](https://github.com/agentscope-ai/QwenPaw/issues/8407) → PR [#8408](https://github.com/agentscope-ai/QwenPaw/pull/8408)）：已有实现 PR，最有可能随下个版本合入，并可能带动更多“localStorage → 服务端配置”的迁移。
- **QQ C2C 流式消息**（PR [#8409](https://github.com/agentscope-ai/QwenPaw/pull/8409)，对应 #8307）：渠道体验升级，size/L，处于评审中。
- **ReMe 0.4.2.0 记忆增强**（PR [#8347](https://github.com/agentscope-ai/QwenPaw/pull/8347)）：决策压缩、图片记忆、实体标签均为 opt-in，是记忆路线图的明确信号。
- **Console 模型池删除能力**（PR [#8410](https://github.com/agentscope-ai/QwenPaw/pull/8410)）：补齐管理员运维闭环。

## 7. 用户反馈摘要

- **数据完整性焦虑**：edit_file 的换行符/编码破坏（#8414/#8415）表明用户在真实文件上执行定点编辑时遭遇静默损坏，对文件工具链的信任度受损。
- **运维可观测性不足**：“静默重置”（#8406）、“静默停止审计”（#8412）两词反复出现——用户的核心诉求不是功能缺失，而是**失败时必须有警告**。
- **多设备/团队部署体验**：#8407 反映个人用户换浏览器丢偏好、管理员无法统一下发的双重痛点，说明自托管团队用户占比在上升。
- **渠道生态需求旺盛**：QQ（流式、配置稳定性）、Matrix（密钥恢复）均有深度反馈，说明多渠道接入是核心使用场景。

## 8. 待处理积压

- **[#7835](https://github.com/agentscope-ai/QwenPaw/pull/7835)**：9-17 提交、状态 Under Review 已超一个月，涉及记忆载荷泄漏到外部渠道（隐私风险），建议优先推进评审。
- **[#7390](https://github.com/agentscope-ai/QwenPaw/pull/7390)**：8-28 提交的回归测试 PR，已挂起近两个月，对应 #6551 模型目录漂移问题，低成本（size/XS）高价值，建议尽快合并。
- **[#8411](https://github.com/agentscope-ai/QwenPaw/pull/8411)**：以 Close-and-review-later 关闭，但 #8365 的 Matrix 设备密钥问题仍未解决，需确认是否有后续计划。
- 今日新报的 4 个 Bug（#8406、#8412、#8413、#8414/#8415）均无维护者实质性回应，建议按“审计中断 > 配置重置 > 文件损坏 > kill 误伤”顺序分派。

---
*数据来源：GitHub API，统计窗口 2026-10-24 至 2026-10-25。*

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