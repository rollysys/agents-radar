# OpenClaw 生态日报 2026-10-21

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-21 03:47 UTC

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

# OpenClaw 项目动态日报 — 2026-10-21

---

## 1. 今日速览

OpenClaw 今日保持极高的社区活跃度：过去 24 小时 Issue 更新 500 条（新开/活跃 411，关闭 89），PR 更新 500 条（待合并 265，已合并/关闭 235），但**无新版本发布**。社区贡献持续涌入，@steipete 领导的测试精简专项（batch d355–d357）和 @vyctorbrzezowski 的 Web UI 修复系列是今日 PR 主力。与此同时，多个 P0 级长期 Bug（Gateway 内存泄漏、升级失败链、SQLite I/O 压力）仍在等待维护者审阅，稳定性债务与功能迭代并行，是当前项目最显著的张力。

---

## 2. 版本发布

今日无新版本发布。最新可用版本仍为 2026.10.3 稳定版与 2026.10.10-beta.1（beta 通道）。

---

## 3. 项目进展

今日 PR 合并/关闭共 235 条，重点关注以下方向：

**Heartbeat → Automations 迁移（4 切片中的第 3 片）**
- [#178990](https://github.com/openclaw/openclaw/pull/178990) feat(automations): migrate heartbeat jobs through Doctor — 前两个切片（#178650、#178764）已落地，本 PR 推进迁移主线，关联 [#167796](https://github.com/openclaw/openclaw/issues/167796)。

**代码质量与测试治理（@steipete 系列）**
- [#178991](https://github.com/openclaw/openclaw/pull/178991)（d357）、[#178968](https://github.com/openclaw/openclaw/pull/178968)（d355）、[#178987](https://github.com/openclaw/openclaw/pull/178987)（d356）：三批低价值测试清理
- [#178983](https://github.com/openclaw/openclaw/pull/178983) 移除未使用的私有参数替代项；[#178992](https://github.com/openclaw/openclaw/pull/178992) 退役私有 native-lifecycle 测试缝
- [#178993](https://github.com/openclaw/openclaw/pull/178993) perf：Gateway 启动时预热 PostgreSQL 恢复读取器，缩短重启后首条消息延迟

**关键修复 PR（待审阅/活跃）**
- [#178970](https://github.com/openclaw/openclaw/pull/178970) fix(auth)：修复 PostgreSQL 启动期间误报"Agent 已删除”（P1，已 ready for maintainer look）
- [#178956](https://github.com/openclaw/openclaw/pull/178956) fix：数据库关闭期间的误报维护失败
- [#178994](https://github.com/openclaw/openclaw/pull/178994) fix(codex)：沙箱受限回合丢失 AGENTS.md
- [#178984](https://github.com/openclaw/openclaw/pull/178984) fix(doctor)：标签修复后迁移被虚假 transcript 不匹配阻塞
- [#178533](https://github.com/openclaw/openclaw/pull/178533) fix(auth)：cutover 期间保留配置的 auth 继承 owner（安全敏感）

**Web UI 修复系列（@vyctorbrzezowski）**
- [#178980](https://github.com/openclaw/openclaw/pull/178980) 状态过滤时隐藏空侧栏分组；[#178978](https://github.com/openclaw/openclaw/pull/178978) 恢复 Community 侧栏卡片；[#178964](https://github.com/openclaw/openclaw/pull/178964) 浅色主题控件对比度改进

**长期 PR 取得进展**
- [#160332](https://github.com/openclaw/openclaw/pull/160332) fix(feishu)：话题群消息会话分裂修复，持续活跃
- [#119461](https://github.com/openclaw/openclaw/pull/119461) memory-core 短期记忆晋升质量门改进，仍在推进

整体来看，项目在架构治理（测试债、私有测试缝清理）和渠道/认证修复两个方向均有实质推进，但大量 P1 修复仍在待审队列中。

---

## 4. 社区热点

| Issue | 评论 | 焦点 |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) P0 Gateway 内存泄漏（350MB→15.5GB，OOM 循环） | 41 | 自 6 月开放，已 4 个多月未修复，标签堆积（needs-maintainer-review/needs-info），是社区最大不满来源 |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) 插件运行时每次 CLI 命令重写 1.1–1.4GB，SSD 磨损 | 21 | 2026.9.5 引入的回归，涉及捆绑原生二进制反复拷贝+哈希，用户对硬件损耗强烈担忧 |
| [#120385](https://github.com/openclaw/openclaw/issues/120385) 定时/cron 回合 MCP 工具目录缺失 | 18 | 报告人 @Grynn 今日更新了 issue 范围界定，活跃度高 |
| [#158390](https://github.com/openclaw/openclaw/issues/158390) plugin-captures 临时目录不 GC，磁盘无限增长 | 14 | 与 #157989 同根因（插件捕获机制），今日有更新 |
| [#152804](https://github.com/openclaw/openclaw/issues/152804) minimax-portal 升级后模型目录丢失 | 13 | 2026.9.5 回归，标记 manual-only |
| [#172091](https://github.com/openclaw/openclaw/issues/172091) SQLite 事务永久挂起阻塞 WAL checkpoint | 13 | 新近（10-14）报告的深层并发问题 |

**诉求分析**：热点集中在三类——① 插件运行时资源开销（内存/磁盘写入）；② SQLite 会话状态层的并发与 I/O 问题；③ 升级机制可靠性。多条热点 issue 带 `clawsweeper:needs-maintainer-review` 标签，表明自动分诊已就绪但维护者带宽不足。

---

## 5. Bug 与稳定性（按严重程度）

**P0 级**
- [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway 内存泄漏致 OOM 循环 — ⚠️ 无 fix PR
- [#160386](https://github.com/openclaw/openclaw/issues/160386) 大会话库 SQLite I/O 压力、WebUI RPC 超时（2026.9.6 回归）— ⚠️ 无 fix PR
- [#152804](https://github.com/openclaw/openclaw/issues/152804) minimax-portal 模型目录丢失 — ⚠️ 无 fix PR
- [#154924](https://github.com/openclaw/openclaw/issues/154924) / [#152992](https://github.com/openclaw/openclaw/issues/152992) / [#153094](https://github.com/openclaw/openclaw/issues/153094) `openclaw update` 升级失败系列（global-install-failed、Windows 长路径 `?` ENOENT、runtime-verification-failed）— ⚠️ 均无 fix PR，部分已 stale
- [#152965](https://github.com/openclaw/openclaw/issues/152965) 非渠道插件热重载断开活跃流并丢消息 — ⚠️ 无 fix PR
- [#158912](https://github.com/openclaw/openclaw/issues/158912) MEMORY.md 不再在 bootstrap 注入，文档与行为不一致 — ⚠️ 无 fix PR
- [#166634](https://github.com/openclaw/openclaw/issues/166634) 崩溃恢复后 agent 永久 UNAVAILABLE — 标记 not-repro-on-main，疑似已缓解

**P1 级**
- [#157989](https://github.com/openclaw/openclaw/issues/157989) / [#158390](https://github.com/openclaw/openclaw/issues/158390) 插件捕获磁盘写入/GC — ⚠️ 无 fix PR
- [#172837](https://github.com/openclaw/openclaw/issues/172837) Codex nativeSubagentAssignments 永不清理并反复重发 — ⚠️ 无 fix PR
- [#173764](https://github.com/openclaw/openclaw/issues/173764) update 挂起无超时（**已关闭**，可能随 2026.10.10-beta 修复）
- [#152275](https://github.com/openclaw/openclaw/issues/152275) 插件激活失败致模型目录/回复分发不可用 — ⚠️ 无 fix PR

**已修复/已关闭的积极信号**
- [#169586](https://github.com/openclaw/openclaw/issues/169586) Windows Doctor EEXIST — CLOSED
- [#167385](https://github.com/openclaw/openclaw/issues/167385) 手删归档阻塞会话修复 — CLOSED
- [#125640](https://github.com/openclaw/openclaw/issues/125640) 千帆/火山 embedding 批量上限 — CLOSED（PR #80226 后续验证通过）
- [#162899](https://github.com/openclaw/openclaw/issues/162899) Windows 托管更新卡 validating — CLOSED

---

## 6. 功能请求与路线图信号

- **Transcript 归档保留策略**：[#176883](https://github.com/openclaw/openclaw/pull/176883)（PR）+ #176078 重写版，直接回应磁盘无限增长痛点（#158390），合并概率高，可能进入下一版本
- **iOS/macOS 个人身份登录**：[#162164](https://github.com/openclaw/openclaw/issues/162164) 伞形 issue 持续讨论，needs-product-decision
- **ClawRouter 原生图像生成 + Tavily 搜索**：[#178876](https://github.com/openclaw/openclaw/pull/178876)、[#178957](https://github.com/openclaw/openclaw/pull/178957) 均已 ready for maintainer look，扩展生态在增强
- **MCP toolSearch 生效**：[#139477](https://github.com/openclaw/openclaw/issues/139477) + linked PR open，减少每回合 prompt 膨胀，呼声较高
- **控制台新 Agent 流程简化**：[#175291](https://github.com/openclaw/openclaw/pull/175291)（XL，waiting on author），UX 重构方向明确
- **Android chat-first 界面**：[#46058](https://github.com/openclaw/openclaw/issues/46058) 独立 fork 寻求部分上游化，今日仍活跃
- **QQ 渠道长期支持**：[#150743](https://github.com/openclaw/openclaw/issues/150743) 腾讯交接停滞，社区要求官方表态

---

## 7. 用户反馈摘要

**主要痛点**
1. **升级不可靠**是最普遍的抱怨：多个 P0 issue（#154924、#152992、#153094）均为 `openclaw update` 失败，Windows 用户受影响尤其严重
2. **资源浪费**：内存泄漏（#91588）、每次命令 GB 级磁盘写入（#157989）、空闲 Matrix 网关 50% CPU + 52MB/min 写入（#154104）——长期自托管用户硬件损耗焦虑明显
3. **静默失败**：Web Dashboard 会话静默终止（#144876）、消息丢失（#152965、#153453）让用户对可靠性失去信心
4. **文档漂移**：MEMORY.md（#158912）、multi-agent 可见性矩阵（#164972）文档与实际行为不符

**满意点**
- 社区响应速度快：新 issue（如 #172091、#172837）得到详细诊断和复现协作
- clawsweeper 自动分诊标签体系运转良好，issue 质量高（结构化模板、AI 辅助报告）
- 多数新报 P2/P3 UI bug 在 1–3 天内即有对应 fix PR

**典型使用场景**：Linux/macOS systemd 自托管 Gateway + Matrix/WhatsApp/飞书多渠道 + claude-cli/Codex 多 agent 运行时，重度长期运行用户是问题报告主力。

---

## 8. 待处理积压（维护者关注清单）

| 条目 | 积压时长 | 状态 |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) P0 内存泄漏 | **4.5 个月**（2026-06-09） | 41 条评论无 fix PR，最高优先级 |
| [#160386](https://github.com/openclaw/openclaw/issues/160386) P0 SQLite I/O 回归 | ~3 周 | needs-maintainer-review |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) / [#158390](https://github.com/openclaw/openclaw/issues/158390) P1 磁盘写入/GC | ~4 周 | 两 issue 同根因，建议合并处理 |
| [#152804](https://github.com/openclaw/openclaw/issues/152804) minimax-portal 回归 | ~1 个月 | manual-only，无进展 |
| [#149270](https://github.com/openclaw/openclaw/issues/149270) 会话 admission 活锁 | ~5 周 | 长期挂起会话无法恢复 |
| [#141017](https://github.com/openclaw/openclaw/issues/141017) / [#139672](https://github.com/openclaw/openclaw/issues/139672) tool-authority 子代理生成 100% 失败 | ~6 周 | 需安全审阅，两 issue 疑似同因 |
| [#154924](https://github.com/openclaw/openclaw/issues/154924) 等 update 失败系列 | ~1 个月 | 多个 stale，用户无法跟进安全更新 |
| PR [#124222](https://github.com/openclaw/openclaw/pull/124222) Telegram 富消息修复 | **2 个月+** | needs proof（telegram-e2e） |
| PR [#110257](https://github.com/openclaw/openclaw/pull/110257) trajectory 时间戳修复 | **3 个月+** | needs proof |
| [#125314](https://github.com/openclaw/openclaw/issues/125314) 作者 PR 因不活跃被关未合并 | — | 社区贡献流失信号，建议恢复机制 |

**健康度总评**：社区活跃度与贡献质量优秀，但 P0 积压（尤其内存泄漏与升级链）持续累积，维护者审阅带宽是当前最大瓶颈。建议优先处理 #91588 与插件捕获磁盘问题（#157989/#158390），这两类问题对自托管用户的生产环境影响最直接。

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告
**数据窗口：2026-10-20 ~ 2026-10-21**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入“重度使用驱动”阶段：用户群从尝鲜者转向长期自托管、多渠道、多 agent 运行的生产型用户，其反馈重心随之从功能覆盖转向**资源开销、静默失败和升级可靠性**。生态分层清晰——OpenClaw 作为超级社区（单日 500 Issue/500 PR 量级）承载最完整的渠道与运行时能力，NanoBot/NanoClaw/Hermes/Zeroclaw/CoPaw 构成高活跃第二梯队并各自深挖差异化方向，IronClaw/LobsterAI/Moltis 处于专注迭代期，而 TinyClaw、NullClaw 等项目已近沉寂。值得注意的是，**维护者审阅带宽不足是几乎所有高活跃项目的共同瓶颈**，多个项目出现 P0/P1 长期积压与社区贡献流失信号。

---

## 2. 各项目活跃度对比

| 项目 | Issue 活跃/新开 | Issue 关闭 | PR 更新 | PR 合并/关闭 | Release | 健康度评估 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 411 | 89 | 500（待合 265） | 235 | 无 | ⚠️ 活跃度顶级，但 P0 积压严重（内存泄漏 4.5 个月无 fix） |
| **Hermes Agent** | 50 | **0** | 50（待合 44） | 6 | 无 | 🔴 高活跃但吞吐失速，44 PR 积压，安全依赖待处理 |
| **Zeroclaw** | 50 | **0** | 48（待合 47） | 1 | 无（v0.8.7 筹备中） | 🔴 输入量大、关闭近零，发布门控受阻，带宽饱和 |
| **NanoBot** | 6 | 0 | 49（待合 28） | 21 | 无 | 🟢 健康典范：issue→PR 闭环快，stacked PR 节奏好 |
| **CoPaw (QwenPaw)** | 7 | 4 | 30（待合 20） | 10 | 无 | 🟢 良好；20 待合 PR 中 5 个 XXXL 级带来评审压力 |
| **NanoClaw** | 2 | 1 | 19（待合 13） | 6 | **v2026.10.1-rc.1** | 🟢 发布节奏规范，当天 issue 当天 fix PR |
| **LobsterAI** | 4 | 0 | 6 | 6 | 无（release/2026.10.19 在轨） | 🟡 PR 零积压、响应快，但两条安全 issue 零回应 |
| **IronClaw** | 3 | 0 | 9（待合 7） | 2 | 无 | 🟡 平稳，多为依赖维护，关键 MCP 修复待评审 |
| **Moltis** | 1 | 0 | 2 | 0 | 无 | 🟡 轻度活跃，MiniMax 生态方向集中 |
| **PicoClaw** | 1 | 0 | 1 | 0（关闭未合并） | 无 | 🔴 低热度，8 个月挂起 PR 被关闭，贡献流失 |
| NullClaw / TinyClaw / ZeptoClaw / EasyClaw | 0 | 0 | 0 | 0 | — | 💤 无活动 |

**分层结论**：OpenClaw 一档独大；Hermes/Zeroclaw “高输入零关闭”需警惕；NanoBot/NanoClaw/CoPaw/LobsterAI 呈健康的质量巩固期特征。

---

## 3. OpenClaw 在生态中的定位

**优势**
- **社区规模断层领先**：单日 500 Issue / 500 PR 更新，约为第二梯队单项目的 10 倍，贡献者生态（@steipete 主导测试治理、@vyctorbr Web UI 系列）呈现专业化分工。
- **能力覆盖最全**：Gateway 常驻架构 + Matrix/WhatsApp/飞书/QQ 多渠道 + claude-cli/Codex 多 agent 运行时 + 插件/MCP 体系，是“全栈式个人 agent 基础设施”的事实标准。
- **治理体系成熟**：clawsweeper 自动分诊、结构化 issue 模板，多数 P2/P3 能在 1–3 天获得 fix PR。
- **生态辐射力**：LobsterAI 直接基于 openclaw 配置体系构建（`openclaw.json`），OpenClaw 实际上在向外输出事实标准。

**劣势与风险**
- 稳定性债务沉重：P0 内存泄漏（#91588，350MB→15.5GB OOM）4.5 个月无 fix PR；GB 级磁盘写入（#157989）、升级失败链（#154924 系列）直接打击重度自托管用户——而这正是其核心用户画像。
- 265 个待合并 PR 显示审阅带宽已被规模反噬。

**技术路线差异**：OpenClaw 走“单进程 Gateway + 多渠道多运行时”的集中式路线；NanoClaw 走容器化多 agent 编排（agent 镜像、Cursor provider、模板化创建）；Zeroclaw 押注 WASM 插件沙箱与 SOP 工作流引擎；Hermes 刚完成统一网关运行时大合并（#134889，203 评论）正处于修复密集期。OpenClaw 与 Hermes 架构趋同（统一 Gateway），但 OpenClaw 更成熟、Hermes 迭代更激进。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **MCP 工具的上下文/成本治理** | NanoBot（#5298 schema token 预算）、OpenClaw（#139477 toolSearch）、CoPaw（#8347 ReMe+JEV 压缩） | 工具目录膨胀导致每回合 prompt 成本激增，重度 MCP 用户强烈要求 schema 可见性预算与动态加载 |
| **记忆文件治理** | Hermes（#135039 写入预算/准入管道、#116788）、OpenClaw（#158912 MEMORY.md 文档漂移、#119461 记忆晋升质量门） | MEMORY.md 类全局记忆无预算注入每轮对话，要求区分全局/会话事实、写入可审计 |
| **升级/更新机制可靠性** | OpenClaw（#154924 系列升级失败）、NanoBot（#6168 双通道应用内更新 + #6356 Windows 长路径）、NanoClaw（OneCLI 1.45→2.x） | 自托管用户“无法安全升级”是最普遍抱怨，多项目正体系化重建更新基础设施 |
| **长会话/重启韧性** | NanoClaw（#4162 Codex 无压缩阈值）、Hermes（#142214 中断恢复 Epic、#139662 会话恢复）、Zeroclaw（#11911 结果感知恢复）、CoPaw（#8348 replay buffer 优化） | 常驻进程重启后日志消失、会话不可恢复、任务静默中断，是“长期运行 agent”的共性硬伤 |
| **渠道一致性与控制命令** | CoPaw（#8342 七渠道 /stop 误判）、Zeroclaw（#11332 学习循环不全渠道生效、#11554 幻影图片）、Hermes（多平台深度反馈） | agent 行为需跨 Slack/Telegram/飞书/Discord 一致，渠道边缘 case 是 bug 密集区 |
| **插件/扩展安全边界** | Zeroclaw（#11327 工具抢占、#11914 principal 信任边界 RFC）、NanoClaw（#4160 egress 锁定缺口）、LobsterAI（#2795/#2797） | 插件系统的 egress 声明、凭据隔离、工具命名空间抢占是新兴攻击面，多个项目同期暴露 |
| **国产/多 provider 生态** | Moltis（MiniMax TTS+文本）、CoPaw（鸿蒙端侧、Ali 网关）、Hermes（飞书/企微、DeepSeek V4） | 中国模型与渠道的一等公民支持是显著需求集中带 |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Zeroclaw | Hermes | NanoClaw | CoPaw | 其他 |
|---|---|---|---|---|---|---|---|
| **功能侧重** | 全栈 Gateway + 多渠道 + 插件/MCP | 桌面体验 + 更新体系 + 成本优化 | WASM 插件沙箱 + SOP 工作流 + 安全边界 | Web/Desktop 融合 + 记忆治理 | 容器化多 agent 编排 | 插件化重构（v2.3.0）+ 中文渠道 | IronClaw：去中心化/链上；LobsterAI：MCP Marketplace + Artifact 创作；Moltis：多模态 provider |
| **目标用户** | 重度自托管 Linux/macOS 运维型用户 | 个人桌面重度用户 | 安全敏感的 daemon 部署用户 | 多端（桌面/Web/IM）中文生态重度用户 | 多 agent 运维/编排场景 | 中文渠道 + 多模态用户 | IronClaw：主权代理开发者 |
| **架构关键** | 单 Gateway 常驻 + SQLite 会话层 | SQLite 会话迁移收尾 + stacked PR 演进 | WASM 插件 + 64MiB 二进制门控 + Goal Mode 路线 | unified-gateway-runtime（刚合并） | 镜像化 agent + RC→stable 双通道灰度 | 渠道插件化 + 子进程隔离 | — |

---

## 6. 社区热度与成熟度分层

- **快速迭代/扩张期**：**Zeroclaw**（v0.8.7 发布冲刺、Goal Mode 12 切片、RFC 涌现——社区正从修 bug 转向系统设计）、**Hermes**（网关大合并后的修复密集期）、**NanoClaw**（RC 发射 + agent 工厂能力铺开）。
- **质量巩固期**：**OpenClaw**（测试债清理专项、迁移主线收尾，但 P0 债务需先清偿）、**NanoBot**（稳定性收敛、更新体系成型）、**CoPaw**（v2.2 稳定 + v2.3 重构并行）、**LobsterAI**（发布分支收敛中）。
- **专注/平稳期**：**IronClaw**、**Moltis**。
- **沉寂/收缩风险**：**PicoClaw**（挂起 8 个月的 PR 被关、提案 stale 无回应）、NullClaw、TinyClaw、ZeptoClaw、EasyClaw。

**成熟度警示信号**：三个高活跃项目（Hermes、Zeroclaw、LobsterAI）出现“安全类 issue 零回应”（Hermes #142324 CVE、LobsterAI #2795/#2797、Zeroclaw #11327 插件抢占），建议安全报告响应 SLA 成为生态标配。

---

## 7. 值得关注的趋势信号

1. **“长期运行可靠性”取代“功能丰富度”成为核心竞争力**：重启韧性、OOM、静默失败、升级失败在几乎所有头部项目的痛点榜上霸榜。对开发者的启示：**将“宁可报错也不装作成功”作为默认设计原则**（Hermes Epic #142214 即此诉求的制度化）。
2. **成本工程显性化**：token 预算（MCP schema、记忆注入）、模型分层（心跳跑便宜模型）、负成本对账等反馈表明用户已在精细化核算——工具目录动态加载与记忆准入管道将是下一轮架构标配。
3. **插件/扩展安全是下一个主战场**：Zeroclaw 的 principal 信任边界 RFC、NanoClaw 的 egress 锁定、多项目的凭据泄漏报告显示，随插件生态繁荣，**命名空间抢占、egress 声明验证、跨 agent 隔离**将成为差异化安全能力。
4. **多 agent 编排门槛快速下降**：NanoClaw 的模板化 agent 创建 + Cursor provider、Zeroclaw 的 SOP 引擎、CoPaw 的插件化，指向“agent 创建/编排 agent”成为标配能力。
5. **发布工程本身成为瓶颈**：Zeroclaw 的二进制尺寸门控、macOS runner 超时，NanoClaw 的镜像流水线自动化——工程基础设施投入的 ROI 正被验证。
6. **贡献者留存需要流程保障**：PicoClaw 8 个月挂起 PR 被关、OpenClaw #125314 贡献流失——建议各项目建立 PR 响应 SLA 与陈旧 PR 的“处置预告”机制，头部项目的审阅带宽问题（OpenClaw 265 待合、Hermes 44、Zeroclaw 47）可能比代码缺陷更制约生态发展。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-10-21

## 1. 今日速览

NanoBot 今日保持高度活跃：过去 24 小时 PR 更新达 **49 条**（待合并 28 条，已合并/关闭 21 条），Issues 更新 6 条（均为活跃/新开，无关闭），无新版本发布。贡献主体集中在核心维护者 @chengyongru、@david-dev666、@Re-bin 等人，PR 呈现“小步快跑、拆分依赖栈（stacked PR）”的工程节奏，质量标签（bug/fix/test/p2）齐备。整体看项目处于功能打磨与稳定性收敛期，社区响应速度快——昨日报告的 #6285、#6344 等问题今日已有对应 fix/feat PR 提出，issue-to-PR 闭环健康度优秀。

## 2. 版本发布

今日无新版本发布。当前主线通过 #6168 正在构建“Stable/Preview 双通道应用内更新体系”，可作为下一次版本发布的重要基础。

## 3. 项目进展

今日关闭/合并 21 条 PR，重要进展包括：

- **更新机制体系化**（多次推进）：[#6356](https://github.com/HKUDS/nanobot/pull/6356) 修复 Windows 长路径下原子 I/O 更新失败；[#6353](https://github.com/HKUDS/nanobot/pull/6353)（已关闭）为 Windows gateway 增加优雅停机请求。配合仍在进行的 [#6168](https://github.com/HKUDS/nanobot/pull/6168)（托管安装+可恢复的应用内更新），更新基础设施接近成型。
- **WebUI 稳定性专项**：[#6354](https://github.com/HKUDS/nanobot/pull/6354)（已关闭）修复多行输入时对话记录 49px 跳动；[#6349](https://github.com/HKUDS/nanobot/pull/6349) 稳定历史消息加载；[#6329](https://github.com/HKUDS/nanobot/pull/6329)（已关闭）恢复模型失败状态并统一聊天控件。
- **架构性清理**：[#2383](https://github.com/HKUDS/nanobot/pull/2383)、[#6033](https://github.com/HKUDS/nanobot/pull/6033) 因冲突/被 SQLite 会话架构取代而正式关闭，说明会话持久层已完成迁移收尾。
- **测试与依赖**：[#6348](https://github.com/HKUDS/nanobot/pull/6348) 允许 websockets 17 并修复上游 eof_sent 竞态；[#6347](https://github.com/HKUDS/nanobot/pull/6347)、[#6351](https://github.com/HKUDS/nanobot/pull/6351) 持续补齐离线化测试。

整体判断：项目在 Windows 支持、WebUI 体验、更新体系三条线上同步推进，单日关闭 21 个 PR 显示 review 吞吐量高。

## 4. 社区热点

- **[#5924](https://github.com/HKUDS/nanobot/issues/5924)（6 评论，p1）— sudo 循环导致 Agent 不可用**：最热讨论。用户报告 sudo 授权仅单轮有效、Agent 陷入死循环，且达到 max_iterations 后跨轮“执念”复现失败命令。已有社区 PR [#6346](https://github.com/HKUDS/nanobot/pull/6346) 处理跨轮部分，但轮内循环检测仍待官方方案。诉求核心是**执行权限模型的健壮性**。
- **[#5298](https://github.com/HKUDS/nanobot/issues/5298)（4 评论）— 大量 MCP 工具的上下文成本预算**：用户深入分析了 `ToolRegistry.get_definitions()` 的 token 开销，提出模型可见 schema 预算方案，反映重度 MCP 用户对**上下文经济性**的强烈需求。
- **[#4431](https://github.com/HKUDS/nanobot/issues/4431)（3 评论）— Heartbeat 独立模型覆盖**：希望后台心跳服务跑在更便宜的模型上，属于典型的**成本优化**诉求。

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 |
|---|---|---|
| P1 | [#5924](https://github.com/HKUDS/nanobot/issues/5924) sudo 循环 + max_iterations 后复现已放弃工作，Agent 不可用 | 部分修复（PR [#6346](https://github.com/HKUDS/nanobot/pull/6346) 待合并，轮内检测未覆盖） |
| P2/Bug | [#6285](https://github.com/HKUDS/nanobot/issues/6285) DuckDuckGo web_search 连续调用被限流报“No results found”，无重试退避 | 已有 fix PR [#6331](https://github.com/HKUDS/nanobot/pull/6331)（含退避+区分限流/空结果），待合并 |
| P2 | [#6337](https://github.com/HKUDS/nanobot/pull/6337) 刷新/重连后任务运行状态前后端不一致（回归） | PR 待合并 |
| P2 | [#6352](https://github.com/HKUDS/nanobot/pull/6352) 已完成命令的 elapsed time 持续累加 | PR 待合并 |
| 环境类 | Windows 长路径更新失败（[#6356](https://github.com/HKUDS/nanobot/pull/6356)）、gateway 强杀（[#6353](https://github.com/HKUDS/nanobot/pull/6353)） | 已提交修复 |

无新增崩溃类报告，回归问题（#6337）已被主动标记并处理，测试文化良好。

## 6. 功能请求与路线图信号

- **Cron 任务原地更新**：[#6344](https://github.com/HKUDS/nanobot/issues/6344) 提出当日即有实现 PR [#6345](https://github.com/HKUDS/nanobot/pull/6345)（复用 `CronService.update_job()`，保留任务身份与历史），**大概率进入下一版本**。
- **Heartbeat 模型覆盖**（[#4431](https://github.com/HKUDS/nanobot/issues/4431)）：实现成本低、诉求明确，尚无 PR，属候选项。
- **MCP schema 预算**（[#5298](https://github.com/HKUDS/nanobot/issues/5298)）：涉及 ToolRegistry/AgentRunner 架构，社区讨论充分但无实现，属中期路线图信号。
- **应用内更新**（#6168）+ Windows 专项（#6353/#6356）组合显示“托管安装/自动更新”是当前官方投入最重的功能线。

## 7. 用户反馈摘要

- **痛点集中在长会话与权限场景**：sudo 授权一轮失效导致 Agent 卡死（#5924）直接影响可用性，用户情绪较强烈（6 条评论、标记 p1）。
- **成本敏感**：多个 issue（#5298、#4431）围绕 token 成本与模型分层优化，说明用户群中有较多重度/生产环境使用者。
- **默认配置可靠性**：DuckDuckGo 作为零配置默认搜索连续调用即失败（#6285），新用户开箱体验受损。
- **正面信号**：示例贡献（#6182）、社区直接提交 fix PR（#6331、#6346）表明社区参与度高于一般开源项目，issue 报告普遍附复现与源码级分析，用户质量高。

## 8. 待处理积压

- **[#5924](https://github.com/HKUDS/nanobot/issues/5924)**（p1，9/26 报告，至今未关闭）：sudo 循环的轮内检测部分仍无官方方案，建议维护者优先介入。
- **[#5298](https://github.com/HKUDS/nanobot/issues/5298)**（8/8 提出，近 3 个月）：MCP schema 预算提案无实质回应，属高价值架构讨论，建议给出 roadmap 判断。
- **[#4431](https://github.com/HKUDS/nanobot/issues/4431)**（6/21 提出，4 个月）：heartbeat 模型覆盖仍无 PR，可考虑打上 good-first-issue。
- **PR 积压**：待合并 28 条中 #6168（更新体系主 PR）为多个 stacked PR 的依赖根（#6355 等），其合并进度将解锁整条链路，建议优先 review。

---
*数据来源：HKUDS/nanobot GitHub，统计窗口 2026-10-20 ~ 2026-10-21。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-10-21

## 1. 今日速览

今日 Zeroclaw 延续高活跃度：过去 24 小时新增/活跃 Issue 50 条（关闭 0 条），PR 更新 48 条（待合并 47，合并/关闭仅 1），无新版本发布。项目重心明显集中在 **v0.8.7 发布前的收尾**——大量 Issue/PR 打上 `release:v0.8.7` 标签，聚焦插件系统（WASM plugins）、发布流水线（CI/尺寸门控）与安全边界修复。社区贡献结构健康：核心贡献者（@JordanTheJet、@IftekharUddin）主导发布阻塞项，同时外部贡献者持续提交功能 PR（Firecrawl、Opper 等新 provider）。值得注意的是，今日出现一个高质量的架构级 RFC（#11914），显示社区正从修 bug 向系统性设计演进。

## 2. 版本发布

过去 24 小时无新 Release。但从标签信号看，**v0.8.7 正在密集筹备中**，主要阻塞项包括：

- 二进制体积仅低于 64 MiB 上限约 0.7 MB（#11580）
- arm64 `dist` 镜像构建 OOM（#11828）
- macOS Universal 桌面构建逼近 180 分钟超时并阻塞发布（#11839）
- macOS-14 runner 迁移（10 月 19 日 brownout，#11831）

## 3. 项目进展

今日仅 1 个 PR 合并/关闭（具体信息未在数据中展示），合并吞吐量低，47 个 PR 处于待合并状态，反映发布前审查节奏谨慎。值得关注的活跃 PR：

- **#9809** [size:XL] 单 provider profile 支持多模型配置——长期大 PR，今日再次同步 master（10-21 fetch），仍处 `needs-author-action`，是该方向最重量级的社区贡献。
- **#11901** [risk:high, size:XL] 修复 gateway 停止后旧代 router 继续服务已接受连接的问题（Fixes #11899），每次 daemon reload 都会触发的生命周期缺陷，属高价值稳定性修复。
- **#11911** [size:XL] 将 #11507 的结果感知恢复机制推广到 channel turns，保留已完成工具结果并实现有界恢复——对长任务 agent 的可靠性提升显著。
- **#11910** 将 `max_system_prompt_chars` 从 advisory 变为硬门控（fail closed），直接响应 #11908。
- **#11918 / #11920**（今日新开）：cron 静默结果不再推送到 dashboard、Web Thinking 折叠开关——小而实用的 UX 改进。
- **#11880** Goal V1 提案 3/12（transport-neutral Goal policy contracts）因 TLS 依赖问题暂处 Draft，Goal Mode 是值得跟踪的路线图主线。
- **#11274** [release:v0.9.0] RPC 客户端发送凭据前校验对端 OS 账户——安全加固，瞄准下一版本。

## 4. 社区热点

评论最多的 Issue：

1. **#11055**（8 评论）[p1/risk:high] 独立 channel 启动的 SOP turns 缺少 live channel tool handles——daemon 部署下 channel 寻址工具在两个入口之外不可用，涉及 agent loop 与 SOP 执行架构，配套修复 PR **#11283** 已提交（SOP scope group 与注册工具名不匹配，`fs`→`file_read` 等映射错误）。
2. **#11296**（6 评论）[p2/risk:high] llama.cpp / 自定义 provider 的 uri 配置解析错误，直接影响自托管用户的 quickstart 体验。
3. **#10999**（5 评论）Discord 插件从 release binary 安装端到端验证仍处 `blocked` 状态，等 registry 包发布。
4. **#10066**（5 评论）[**p0**] SOP 引擎在记录 output-schema 拒绝**之前**就推进并执行后续步骤——最高优先级缺陷，工作流层面数据完整性问题。
5. **#11554**（5 评论）Signal/Telegram/Discord 的历史 `[IMAGE:<path>]` 标记在后续每轮重发，导致模型描述"幻影新图"——多通道用户的高频痛点。

**今日新话题**：#11914 RFC 提出基于 principal 的统一信任边界层，将 #11908（系统提示预算）、#11912（跨 agent 内存泄漏）、#11913 归纳为同一缺失抽象，配套 PR #11910 当天即跟进——反应速度和架构视角都值得肯定。

## 5. Bug 与稳定性（按严重度）

| Issue | 严重度 | 描述 | Fix PR |
|---|---|---|---|
| [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) | **P0 / S1** | SOP 引擎在记录 schema 拒绝前推进执行后续步骤 | 关联 #11283 部分覆盖 |
| [#11858](https://github.com/zeroclaw-labs/zeroclaw/issues/11858) | S1 | `send_via` 在无 TURN_ROUTING 的 headless turn 中仍宣告回复路由，SOP 模型误调用阻塞工作流 | 暂无 |
| [#11912](https://github.com/zeroclaw-labs/zeroclaw/issues/11912) | 安全/泄漏 | 内存 recall 绕过 per-agent 隔离，跨 agent 内容注入 | 讨论中（RFC #11914） |
| [#11327](https://github.com/zeroclaw-labs/zeroclaw/issues/11327) | P1，威胁模型内可视为 S0 | 插件工具名门控只看到插件之前注册的工具，插件可抢占 `tool_search`/MCP/skill 工具调用 | 暂无明确 fix |
| [#11552](https://github.com/zeroclaw-labs/zeroclaw/issues/11552) | P1 | egress 授权仪式忽略 `websocket_client`/`socket_client` 声明 | 暂无 |
| [#11813](https://github.com/zeroclaw-labs/zeroclaw/issues/11813) | P1 | 插件 egress 首地址黑洞时连接永久 stall，不尝试其他地址 | 暂无 |
| [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) | S2 | skill 审查/创建学习循环仅在 CLI/cron 生效，channel/webhook/web UI 不运行 | 暂无 |
| [#11336](https://github.com/zeroclaw-labs/zeroclaw/issues/11336) | S2 | `plugin info`/`list --verify` 对运行时拒绝注册的插件仍报 `[loads]` | 暂无 |
| [#11357](https://github.com/zeroclaw-labs/zeroclaw/issues/11357) | S2 | `plugin remove` 删除 `plugins_dir/<name>` 而非实际加载目录，可能误删无关目录 | 暂无 |
| [#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416) | S3 | v0.8.5 起 Slack 线程不再显示 "is thinking…" 状态 | PR #11754（可配置 acknowledgement reactions）相关 |
| [#11818](https://github.com/zeroclaw-labs/zeroclaw/issues/11818) | S3 / good first issue | 长配置目录下 CLI 报裸 `SUN_LEN` 错误 | 暂无 |

趋势判断：**插件子系统是 bug 密集区**（#11327/#11336/#11357/#11360/#11552/#11792/#11813），多数为 #11236 插件事务机制落地后的 follow-up，属新功能的磨合期问题而非架构性衰退。

## 6. 功能请求与路线图信号

- **#10168**：默认启用 stall watchdog（`stall_timeout_secs` 非 0 默认值）——防止 turn 无限挂起，与 #11813 的 egress stall 问题相互印证，可能随 v0.8.7 落地。
- **#11754** [size:XL, 进行中]：channel acknowledgement reactions 全面可配置化——直接回应 #11416 类 UX 诉求，活跃度高，纳入概率大。
- **#11680**：Firecrawl 官方团队提交 web search provider 集成（`needs-maintainer-review`）——外部厂商主动集成是生态健康信号。
- **#11584**：Opper provider（EU 托管 OpenAI 兼容网关），`needs-author-action`，待作者跟进。
- **#8415** [icebox]：Telegram Bot API 10.1 Rich Messages——长期需求，仍冻结。
- **#11880 系列**：Goal Mode V1 提案（12 个切片中的第 3 个）——明确的路线图主线，预计跨 v0.8.7/v0.9.0。
- **#11914 RFC**：principal-based 统一访问控制层——若被采纳将重塑安全架构，是近期最重要的设计讨论。

## 7. 用户反馈摘要

- **自托管/多 provider 用户**：#11296、#11819 反映 llama.cpp/router 场景下 URI 配置和 quickstart 模型选择流程易踩坑——"先列默认端点模型、后问 URI"的顺序颠倒（#11819）是典型的 onboarding 摩擦。
- **Channel 重度用户**：多通道（Slack/Telegram/Signal）场景下的图像重发（#11554）、thinking 状态消失（#11416）直接降低对话体验，用户期望 agent 行为在所有 channel 间一致（#11332 的学习循环不运行也是同类诉求）。
- **运维/安全诉求**：日志中 `plugin_channel_sender_denied` 不含发送者身份（#11821），操作者"不知道该放行谁"；包锁文件可被其他本地账户持有（#11360）——反映单机多租户部署场景的精细化运维需求。
- **满意点**：Issue 报告质量普遍很高（含复现步骤、severity 分级、代码定位），维护者响应和标签管理（priority/risk/status）体系完善，社区对 SOP/插件等新能力的使用意愿强烈。

## 8. 待处理积压

⚠️ 过去 24 小时 **0 个 Issue 被关闭**，50 条全部处于活跃/新增状态，建议关注：

- **#10066（P0，8/17 提出，已两个月）**：SOP 引擎时序缺陷，S1 级 workflow blocked，是清单中最高优先级且最久未修的项。
- **#11055（p1，9/22 提出）**：8 条评论但修复 PR（#11283）自 9/30 起未见合并进展，`needs-author-action`。
- **#11327（p1，10/1 提出）**：插件工具抢占漏洞，威胁模型内可视为 S0，尚无 fix PR，安全敏感度高。
- **#8415（6/28 提出，icebox）**：Telegram Rich Messages 长期冻结，建议明确预期或关闭。
- **PR 积压**：47 个待合并 PR 中 #9809（8/7 提出，size:XL）、#11061（9/23，shell 安全阻塞绕过，risk:high）、#11326（10/1，日志权限，p1）等长期滞留，多为 `needs-author-action`/`needs-maintainer-review`，发布后需集中清理。

---

**健康度小结**：项目处于活跃开发期，社区输入量大、质量高，但「新增多、关闭少」表明维护带宽接近饱和；v0.8.7 的发布门控（体积、CI 资源、macOS runner）和插件子系统安全修复是短期内最需集中火力的两条线。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-10-21

## 1. 今日速览

- Hermes Agent 今日保持**高活跃度**：过去 24 小时 Issues 更新 50 条（全部为活跃/新开，0 关闭），PR 更新 50 条（44 条待合并，6 条已合并/关闭）。
- 无新版本发布，主线仍处于 `feat/unified-gateway-runtime`（#106742，已于 10-14 合入 main）后的**修复密集期**，相关跟踪 Issue #134889 评论已累积 203 条，是绝对焦点。
- 今日新报问题集中在 **computer_use 工具与 cua-driver 0.32+/0.34 的 schema 兼容性**、gateway 日志/会话恢复、以及一个安全依赖项（Pillow/OpenJPEG CVE）。
- 待合并 PR 积压达 44 条，其中多个文档与修复 PR 长期挂起（如 #100332、#110554 已挂起超过一个月），**维护者评审带宽可能是当前瓶颈**。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日有 6 条 PR 合并/关闭（数据中未展示具体合并列表），从活跃 PR 推断当前推进方向：

- **统一网关运行时收尾**：#106742 已合入 main，后续修复在 [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) 跟踪中，今日继续有大量跟进讨论。
- **Web/Desktop 融合**：两个相关大 PR 活跃推进——[#93508](https://github.com/NousResearch/hermes-agent/pull/93508)（浏览器中托管 Desktop 渲染器）和 [#141864](https://github.com/NousResearch/hermes-agent/pull/141864)（gateway 直接提供 Desktop workspace，`webapp.enabled: true`），表明“一套 UI 多端访问”是明确的近期方向。
- **消息平台体验**：[#142344](https://github.com/NousResearch/hermes-agent/pull/142344) 为 Telegram 增加推理过程实时流式转发（可折叠引用块），[#137480](https://github.com/NoussResearch/hermes-agent/pull/137480) 为 WhatsApp 增加无障碍纯文本输出模式。
- **CLI 文档体系补全**：@33hodl 连续提交多个文档 PR（#112553/#112555/#112556/#134299/#134300），系统性修复 CLI 参考文档与实际解析器不一致的问题。
- **质量基建**：[#142349](https://github.com/NousResearch/hermes-agent/pull/142349) 修复自定义 `HERMES_HOME` 下的测试隔离问题；[#142327](https://github.com/NousResearch/hermes-agent/pull/142327) 修复 CI buildx 版本回退导致 imagetools 任务失败。

## 4. 社区热点

| 主题 | 热度 | 分析 |
|---|---|---|
| [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) 单一 gateway 吞占所有本地会话 — 合并后修复跟踪 | 203 评论 | P0 级追踪 Issue，覆盖 session 状态、消息投递、Windows 兼容、桌面连接等多个风险面。统一网关架构是当前最大的变更，社区高度关注其回归修复进度。 |
| [#135039](https://github.com/NousResearch/hermes-agent/issues/135039) MEMORY.md/USER.md 写入时预算与准入管道 | 11 评论 | 核心诉求：记忆文件注入每一轮对话，无大小预算、无写入准入测试会带来延迟与成本；用户要求区分“全局事实”与“会话局部事实”。 |
| [#142036](https://github.com/NousResearch/hermes-agent/issues/142036) gateway 重启后日志静默停止写入 | 9 评论 | 新报 bug，直接影响可排障性，与重启后的会话不可恢复问题（#139662）同属“重启韧性”主题。 |
| [#142037](https://github.com/NousResearch/hermes-agent/issues/142037) Desktop 模型切换后标签陈旧 | 7 评论 | 小但高频的 UX 痛点，同一作者一天连报多个 Desktop 细节问题。 |

## 5. Bug 与稳定性（按严重度排列）

**P0 / 高危**
- **#134889** 单一 gateway 吞占本地会话（203 评论）— 合并后修复进行中，涉及面极广。
- **#142324** [安全] Pillow 锁定 12.3.0，GHSA-78g4-xqwv-q3g8（OpenJPEG 堆溢出，CVSS 8.1）仅在 13.0.0 修复 — 受 `browser-harness==0.1.13` 约束，暂无 fix PR，需关注升级路径。([链接](https://github.com/NousResearch/hermes-agent/issues/142324))
- **#142330** `begin_runtime_epoch()` 未持锁即 bump epoch，可将运行中 gateway 的写入全部打brick 直至重启（P3 标签但影响偏严重，标为 security）。([链接](https://github.com/NousResearch/hermes-agent/issues/142330))

**P2**
- **#142342 / #126521 / #135872** computer_use 三连击：cua-driver 0.32+ 严格 schema 拒绝 `element_index`、`double_click.button`、`drag.from_element` 等参数；drag 按元素索引从不生效；`win+d` 只按出裸 `d` 还报成功 — 属于**工具 schema 与驱动版本脱节的系统性问题**，今日又新增 #142342，尚无统一 fix PR。
- **#142036** gateway 重启后日志静默停止（见上）。
- **#139662** gateway 重启后 Discord/飞书/企微会话 `session.resume` 返回 `not_found`，桌面端无法恢复 — #134889 的同族损失问题。
- **#110126** `finish_reason='length'` 截断跨 4 个子系统、35+ 散落 Issue，DeepSeek V4 根因，呼吁系统性治理而非零散 P3。
- **#141971** Classic CLI socket 被关后显示"outcome unknown"但 turn 实际已完成，回复已存储却不展示。
- **#137098** OpenRouter 负价格哨兵值导致成本估算为负。
- **#126379** CLI TUI 中图片 + `/skill` 斜杠命令组合时图片被静默丢弃。

**P3 / 体验类**
- #142037（模型标签陈旧）、#140633（Linux/Wayland HDR 下 Desktop 灰暗）、#142250（memory 文档与代码行为矛盾）、#142239（本地网关上 Ollama num_ctx 探测污染 Gemini 请求）。

## 6. 功能请求与路线图信号

- **记忆治理**：#135039（写入预算 + 准入管道）与 #116788（后台审查器持久化用户明确拒绝保存的事实）合起来指向“**可审计的记忆写入控制**”这一方向，#142250 的文档矛盾说明该区域正在活跃改动，下版本纳入可能性高。
- **Webapp 多端化**：#93508 + #141864 两个 PR 均为官方成员（@jquesnelle）推进，`hermes webapp` 大概率进入下一版本。
- **中断恢复 Epic**：[#142214](https://github.com/NousResearch/hermes-agent/issues/142214)（非用户中断 → 有界模型恢复，绝不静默）与 #84207 长期痛点呼应，已立 Epic，属路线图级信号。
- **MCP 事件化**：[#140121](https://github.com/NousResearch/hermes-agent/pull/140121) webhook 模式 MCP events client（实验性），跟进 MCP 社区 experimental-ext-triggers-events 提案。
- **提供商路由正确性**：#111267 追踪 29 个“模型/密钥/端点错配”报告，needs-decision，是路由子系统重构的候选入口。

## 7. 用户反馈摘要

- **最大痛点：重启后的一切**。gateway 重启后日志消失（#142036）、消息平台会话不可恢复（#139662）、跨进程会话租约每 15 秒刷屏（#89166）——用户的核心场景是“长期跑着的常驻进程”，对重启韧性要求极高。
- **静默失败最伤信任**：#84207（中断后零反馈）、#126379（图片静默丢弃）、#141971（结果已存却不展示）——用户反复强调“宁可报错也不要装作成功”，与 Epic #142214 的诉求一致。
- **成本与延迟敏感**：#135039 用户直接指出记忆文件是“每一轮的延迟和成本”；#137098（负成本）说明重度 OpenRouter 用户在认真对账。
- **多平台重度使用**：飞书（#78975）、企微（#89166）、Discord、Telegram、WhatsApp 均有深度用户反馈，中文生态用户占比明显。
- **满意的方面**：PR 描述质量普遍较高，社区贡献者（@33hodl 等）持续补文档与测试，生态参与度健康。

## 8. 待处理积压（提醒维护者关注）

| 条目 | 挂起时长 | 说明 |
|---|---|---|
| [#78975](https://github.com/NousResearch/hermes-agent/issues/78975) 飞书 cron 投递 100% 失败 | 自 8/05，>2 个月 | 根因清晰（`receive_id_type="thread_id"` 非法），仍无修复，影响飞书 cron 用户全部功能。 |
| [#84207](https://github.com/NousResearch/hermes-agent/issues/84207) 中断 turn 零反馈 | 自 8/12 | 已有 Epic #142214 承接，建议关联并排期。 |
| [#89166](https://github.com/NousResearch/hermes-agent/issues/89166) 会话租约等待刷屏 | 自 8/18 | P2，多风险标签，无响应。 |
| [#110126](https://github.com/NousResearch/hermes-agent/issues/110126) 输出截断系统性失败（35+ Issue） | 自 9/13 | 呼吁升级为专项治理，尚未有 tracking 升级动作。 |
| PR [#100332](https://github.com/NousResearch/hermes-agent/pull/100332)（陈旧代码拒绝而非 ImportError 崩溃） | 自 9/01，>6 周 | 高价值稳定性修复，长期无评审。 |
| PR [#110554](https://github.com/NoussResearch/hermes-agent/pull/110554)（解释器关闭期 tool submit 守护） | 自 9/14 | 同上。 |
| [#60802](https://github.com/NousResearch/hermes-agent/issues/60802) kanban done 任务被误判阻塞 | 自 7/08，>3 个月 | 最老的积压项之一。 |

**健康度小结**：社区贡献与讨论活跃、问题报告质量高，但 Issue 关闭数为 0、44 条 PR 积压、多个 P2 超 2 个月无响应——**评审与修复吞吐是当前项目健康度的首要风险**，尤其需优先处理安全依赖（#142324）与 computer_use schema 脱节（#142342 族）。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-10-21）

## 1. 今日速览

PicoClaw 今日整体活跃度**偏低**：过去 24 小时仅 1 条 Issue 更新、1 条 PR 更新，无新版本发布。唯一的 PR 动态是长期挂起的小翼（XiaoYi）channel 支持 PR 被关闭，社区侧则有一条带有 `[stale]` 标记的提案 Issue 仍在缓慢讨论中。整体呈现维护节奏平稳、但缺乏新功能合入的“低热度”状态，项目健康度需关注长期积压项的清理进度。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

- **PR #875 [已关闭]**：`feat(channels): add xiaoyi channel support`（作者 @ystyle，2026-02-27 创建，2026-10-21 关闭，未合并）
  链接：https://github.com/sipeed/picoclaw/pull/875
  该 PR 旨在基于新 channel 架构和 A2A 协议（依赖 xiaoyi-agent-sdk）新增小翼 channel 支持。经过近 8 个月的挂起后被维护者关闭，**未合入主干**。这不是功能推进，更像是维护者对陈旧 PR 的清理动作；后续若需小翼 channel 支持，可能需要作者基于最新架构重新提交。今日项目实际功能进度为零合入。

## 4. 社区热点

- **Issue #3427 [OPEN，stale]**：`Proposal: low-dependency Plazmi MCP/CLI example for persistent agent sessions`（作者 @cairn-agent，评论 1 条）
  链接：https://github.com/sipeed/picoclaw/issues/3427
  提案者看中 PicoClaw 的 MCP CLI 与心跳（heartbeat）能力，希望将其作为“持久世界”智能体会话的宿主，接入 Plazmi 平台（提供基于 UTC 真实时间的家园/花园/邻居交互及 `pulse`/`digest` 回归机制）。该 Issue 已被标记 `[stale]`，说明维护者响应不足；背后的诉求是**外部智能体生态希望 PicoClaw 提供官方认可的扩展示例与低依赖接入范式**。

## 5. Bug 与稳定性

今日无新增 Bug、崩溃或回归报告。无严重程度分级事项，亦无关联 fix PR。

## 6. 功能请求与路线图信号

| 信号 | 来源 | 判断 |
|---|---|---|
| Plazmi MCP/CLI 持久会话示例 | [Issue #3427](https://github.com/sipeed/picoclaw/issues/3427) | 已 stale，短期内纳入路线图概率低；但反映社区对**持久化智能体会话示例**的需求值得关注 |
| XiaoYi channel（A2A 协议） | [PR #875](https://github.com/sipeed/picoclaw/pull/875)（已关闭未合并） | 被关闭表明当前维护者优先清理而非扩展 channel 生态；若社区有强需求可推动重提 |

无足够信号判断下一版本内容。

## 7. 用户反馈摘要

- 社区反馈样本极少。从 #3427 可提炼：外部开发者认可 PicoClaw 的 **MCP CLI 与 heartbeat 机制**是差异化能力，愿意将其作为持久智能体应用的运行底座；痛点在于**缺少官方的低依赖扩展示例**，接入成本和不确定性偏高。
- PR #875 的关闭（未说明详细原因、评论数缺失）可能让 channel 贡献者感到受挫，建议维护者在关闭时补充说明。

## 8. 待处理积压

- **Issue #3427**（[链接](https://github.com/sipeed/picoclaw/issues/3427)）：开放 8 天、已标 stale、仅 1 条评论。建议维护者明确表态（接受示例贡献 / 移至 discussions / 关闭），避免挫伤外部生态共建意愿。
- **PR #875**：虽已关闭，但暴露出**长期 PR 缺乏响应**的流程问题（挂起近 8 个月）。建议建立 PR 响应 SLA 或对陈旧 PR 提前给出明确处置意见。

---
*数据来源：sipeed/picoclaw GitHub 公开数据（统计窗口：过去 24 小时）。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-10-21

## 1. 今日速览

NanoClaw 今日保持高度活跃：过去 24 小时内 PR 更新达 19 条（待合并 13 条，已合并/关闭 6 条），Issue 更新 3 条（新开 2 条、关闭 1 条），并发布了 **v2026.10.1-rc.1** 首个候选版本。核心团队（@glifocat 为主力）在通道集成（Telegram/Discord/WhatsApp 审批卡片）、安全加固（egress 锁定）、以及 OneCLI 1.45 升级路径上密集推进。整体呈现“版本发布前冲刺 + 社区贡献并行”的健康节奏，社区成员 @stopwatch2208、@amit-shafnir 均贡献了高质量 bug 报告与修复 PR。

## 2. 版本发布

### v2026.10.1-rc.1
- **渠道**：`beta` 渠道即刻获得此候选版本；`stable` 渠道保持在 2026.10.0，直至 2026.10.1 正式发布。
- **核心更新**（[Release PR #4158](https://github.com/nanocoai/nanoclaw/pull/4158)，自 v2026.10.0 以来累计 42 个 PR）：
  - 支持**从模板创建 agent**（agent 可创建其他 agent）
  - 新增 **Cursor 作为 agent provider**
  - 本地构建的 agent 镜像位置迁移
- **迁移注意**：本地构建 agent 镜像的存放路径有变化，自建镜像的用户升级 rc 前需确认镜像引用是否失效。
- **无明确破坏性 API 变更**，但作为 RC 版本，生产环境建议等待 stable。

## 3. 项目进展

今日关闭/合并的 6 条 PR 主要落在 CI 自动化、文档一致性与镜像管理：

| PR | 内容 | 意义 |
|---|---|---|
| [#4010](https://github.com/nanocoai/nanoclaw/pull/4010) | CI 每 6 小时自动为每个已加固镜像开启 `agent-images.json` PR | 镜像发布全自动化，配合 #4149 手工补录落地 |
| [#4149](https://github.com/nanocoai/nanoclaw/pull/4149) | 手工登记 v2026.10.0 加固镜像 | 过渡性补录，随 #4010 生效后不再需要 |
| [#4157](https://github.com/nanocoai/nanoclaw/pull/4157) | 镜像刷新 workflow 仅在主仓库运行 | 修复 fork 每 6 小时报错的问题，善待外部贡献者 |
| [#4109](https://github.com/nanocoai/nanoclaw/pull/4109) | 文档更新：provider 代码随 skill payload 分发 | 纠正 #4104 架构迁移后遗留的过时文档 |
| [#4103](https://github.com/nanocoai/nanoclaw/pull/4103) | `ncl messaging-groups delete` 级联删除依赖行 | 修复外键约束失败，配合 #4102 |
| [#4123](https://github.com/nanocoai/nanoclaw/issues/4123) | 关闭 flaky 测试 issue | 测试稳定性改善 |

整体看，今日完成了 **RC 版本切出 + 镜像流水线自动化闭环**，为 2026.10.1 正式发布扫清基础设施障碍。

## 4. 社区热点

- **[#4154](https://github.com/nanocoai/nanoclaw/issues/4154)**（capability，1 条评论）：`/add-pi` 应使用 group 级 provider 配置（`container_configs.provider`），而非 install 级的 `PI_GATEWAY_PROVIDERS` 环境变量。反映用户对**多 group、多 provider 隔离部署**的细化需求，是 #4129 的跟进项。
- **[#4094](https://github.com/nanocoai/nanoclaw/pull/4094) / [#4095](https://github.com/nanocoai/nanoclaw/pull/4095)**：OneCLI 升级至 gateway 1.45.0 + CLI 2.11.0，是迈向 2.x 的必经节点；1.44+ 默认零授权启动 agent，引发“新 agent group 应获得哪些凭据”的架构讨论，社区关注度高。
- **[#3156](https://github.com/nanocoai/nanoclaw/pull/3156)**：自 7 月 30 日开放的长期 PR 今日再次活跃，将用户发送的图片/PDF 作为结构化附件传给 provider（视觉模型可直接“看到”文件），是多模态体验的关键补全。

## 5. Bug 与稳定性

按严重程度排列：

1. **🔴 高：Codex 长会话无压缩阈值**（[#4162](https://github.com/nanocoai/nanoclaw/issues/4162)）
   长期运行的聊天线程持续增长直到 turn 超时。**已有 fix PR**：[#4163](https://github.com/nanocoai/nanoclaw/pull/4163) 新增 `CODEX_AUTO_COMPACT_TOKEN_LIMIT` 让运维自定义压缩时机（对齐 Claude 的 `CLAUDE_CODE` 同类机制）。
2. **🟠 中：egress 锁定不覆盖已运行 agent**（[#4160](https://github.com/nanocoai/nanoclaw/pull/4160)）
   锁定在宿主重启时读取，已在运行的容器沿用旧网络配置，属于安全加固缺口，fix PR 待合并。
3. **🟠 中：`/clear` 后线程回复错位**（[#4159](https://github.com/nanocoai/nanoclaw/pull/4159)）
   批量消息含 `/clear` 时回复可能落在上一个线程，fix PR 待合并。
4. **🟡 低：Setup 拒绝 Anthropic 新版 API key**（[#4161](https://github.com/nanocoai/nanoclaw/pull/4161)）
   控制台新发的 `sk-ant-usr` / `sk-ant-svc` 类型 key 被误拒，fix PR 待合并。
5. **🟡 低：无效 group 文件夹名的 agent 创建**（[#4148](https://github.com/nanocoai/nanoclaw/pull/4148)）
   在写入前统一校验名称合法性，避免半途失败。

## 6. 功能请求与路线图信号

- **Group 级 provider 选择**（#4154）：属架构正确性改进，`container_configs.provider` 字段已存在，实现成本可控，**有望进入 2026.10.1 或下一版本**。
- **Codex 压缩阈值**（#4163）：issue + PR 同日提交，配套完整，很可能随 RC 转正合入。
- **Cursor provider + 模板化 agent 创建**：已随 rc.1 落地，方向是**降低多 agent 编排门槛**，预示后续将强化 agent 工厂/编排能力。
- **OneCLI 2.x 迁移**（#4094/#4095）：明确的版本路线信号——1.45 是通往 2.x 的必经站点。

## 7. 用户反馈摘要

- **多通道审批可读性**：长审批卡片在 Telegram/Discord/WhatsApp 上被截断是实际痛点，#4147、#4156 两个 PR 连续打磨，说明审批流是高频使用场景，用户对“完整看到将要执行的动作”有强需求（安全相关）。
- **长会话稳定性**：#4162 反映重度用户让 agent 在同一聊天线程上连续工作，上下文管理直接影响可用性。
- **安装体验细节**：Anthropic 新 key 类型被拒（#4161）说明 setup 流程对新用户的第一印象敏感，需要跟住上游 Console 变化。
- **Fork 友好度**：#4157 体现维护者对社区贡献者 CI 体验的重视，间接提升外部贡献意愿。

## 8. 待处理积压

- **[#3156](https://github.com/nanocoai/nanoclaw/pull/3156)**：开放近 3 个月的结构化附件 PR，今日有更新但尚未合并，多模态需求用户等待中，建议维护者优先评审或说明阻塞原因。
- **[#4094](https://github.com/nanocoai/nanoclaw/pull/4094)**：OneCLI 1.45 大迁移 PR，标签覆盖 9 个 area，是 2.x 路线的关键节点，#4095 显式依赖其合并顺序，需尽快推进避免阻塞链。
- **[#4102](https://github.com/nanocoai/nanoclaw/pull/4102)**：`/add-imessage` 移除流程修复，依赖 #4103（已关闭）落地后应跟进验证。

---
**健康度小结**：核心团队产出稳定且响应迅速（多个 bug 当天 issue + 当天 fix PR），发布节奏规范（RC → stable 分渠道灰度），CI 自动化日趋完善。当前主要风险点是 OneCLI 大版本迁移的合并顺序依赖和 #3156 类长期 PR 的积压。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-10-21

## 1. 今日速览

IronClaw 今日整体活跃度中等偏上：过去 24 小时共有 12 条 Issue/PR 更新，其中 3 条活跃 Issue（0 关闭）、9 条 PR 更新（7 条待合并，2 条关闭）。开发动态以**依赖维护（Dependabot 批量升级）** 和 **Hosted MCP 本地端点支持** 为主线。社区侧出现高质量提案（#8136、#8146），围绕本地 MCP Connector 与托管 MCP 注册策略的讨论正在升温。无新版本发布，项目处于常规迭代维护期。

## 2. 版本发布

过去 24 小时无新版本发布，省略。

## 3. 项目进展

今日无合并记录，但有 2 条旧 PR 被关闭，均为依赖升级的过期/重复项：

- [#7386](https://github.com/nearai/ironclaw/pull/7386)（CLOSED）：dompurify 3.4.12 → 3.4.13，被更新的 #8149（升级至 3.4.16）取代。
- [#8048](https://github.com/nearai/ironclaw/pull/8048)（CLOSED）：fast-uri 3.1.5 → 3.1.7，被 #8148（升级至 3.1.9，含安全修复）取代。

**功能性进展**主要集中在待合并 PR：

- [#8147](https://github.com/nearai/ironclaw/pull/8147)：允许显式受信注册精确的 loopback MCP 端点（127.0.0.1），打通本地 MCP 服务器通过原生 credential-account 使用 hosted-MCP bearer 认证的路径。这是今日最有分量的功能性 PR，与 Issue #8146 直接对应，若合并将显著提升本地 Connector 的可用性。

其余 6 条均为 Dependabot 例行升级：rustls ×2（#8151、#8152）、dompurify（#8149）、multidict（#8150）、fast-uri（#8148）、aiohttp（#8145）。

## 4. 社区热点

- **[#2077](https://github.com/nearai/ironclaw/issues/2077)**（评论 2 条，今日有更新）：@HavenCTO 请求公开 market.near.ai 的合约源码。诉求核心是“主权代理”（sovereign agents）——持有自身密钥、直接链上操作的 agent 目前被迫依赖 NEAR AI 的 HTTP API 基础设施，与去中心化理念冲突。该 Issue 自 4 月开至今仍未关闭，是长期痛点。
- **[#8146](https://github.com/nearai/ironclaw/issues/8146)**：@tom9000 报告 hosted MCP 注册拒绝所有 HTTP/IP-literal 端点，导致本地 Connector 无法注册，并已自带修复 PR #8147。“Issue + PR”同日提交的高质量贡献。
- **[#8136](https://github.com/nearai/ironclaw/issues/8136)**：@cairn-agent 提议利用 Reborn 扩展的声明式 auth/egress 接缝，做可选的 Plazmi 托管 MCP 伴侣扩展，避免向宿主注入厂商逻辑。设计思路与项目现有扩展架构契合度较高。

## 5. Bug 与稳定性

按严重程度排列：

1. **🔴 高 — [#8146](https://github.com/nearai/ironclaw/issues/8146)**：hosted MCP 注册拒绝全部 HTTP/IP-literal 端点（main 分支 b0b999d9），本地 MCP 服务器完全无法走原生注册路径，属功能阻断级缺陷。**已有 fix PR [#8147](https://github.com/nearai/ironclaw/pull/8147)**。
2. **🟡 中 — 依赖安全**：dompurify（#8149）与 fast-uri（#8148）升级版本均含安全修复，其中 fast-uri v3.1.7 明确标注 Security Warning，建议尽快合并。尚无用户报告实际受影响案例。

今日无崩溃/回归类报告。

## 6. 功能请求与路线图信号

- **本地/loopback MCP 端点支持**（#8146 + PR #8147）：从 Issue 提出到 PR 提交仅隔一天，且实现方案克制（单一显式受信入口），合并概率高，很可能成为下一个版本的亮点。
- **声明式扩展承载第三方托管 MCP**（#8136）：利用现有 Reborn 扩展接口而非侵入宿主，架构对齐度好，但涉及第三方商业服务（Plazmi），需维护者表态，处于早期讨论阶段。
- **market.near.ai 合约开源**（#2077）：涉及上游产品决策而非纯代码仓库范畴，短期内落地可能性存疑。

## 7. 用户反馈摘要

- **去中心化诉求强烈**：构建自主密钥代理的用户明确表达了对中心化 HTTP API 依赖的不满（#2077），希望直接链上交互。
- **本地部署场景受阻**：本地 Connector + credential-account 的用户（#8146）反映当前安全策略（拒绝 IP-literal）“一刀切”，牺牲了合法的本地回环使用场景，且该问题沿袭自 #5998，属长期未解。
- **扩展生态意愿积极**：第三方开发者（#8136）主动按项目声明式扩展规范设计集成方案，说明扩展架构对外部贡献者有吸引力。
- 社区贡献质量高：核心 Issue 均附带复现 commit、上游检查记录，互动氛围专业。

## 8. 待处理积压

- **[#2077](https://github.com/nearai/ironclaw/issues/2077)**：开放已超 6 个月（2026-04-06 创建），仅 2 条评论，今日再次活跃但无维护者明确回应。**建议维护者给出合约开源的时间表或说明。**
- **PR #8147**：本地 MCP 关键修复，建议优先评审，避免像 #7386/#8048 那样长期挂起后被依赖升级取代。
- **7 条待合并 PR** 中 6 条为 Dependabot 安全相关升级（dompurify、fast-uri 含安全修复），建议批量处理，降低积压与冲突风险。
- **#8136**（Plazmi 扩展提案）：0 评论无响应，建议维护者尽快表态以避免社区贡献者流失。

---
*数据来源：GitHub API（过去 24 小时窗口）。整体健康度评估：开发节奏平稳，依赖维护及时，本地 MCP 支持与去中心化集成是当前最值得关注的演进方向。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-10-21）

## 1. 今日速览

LobsterAI（网易有道开源）今日保持较高活跃度：过去 24 小时内 6 个 PR 全部完成合并/关闭、无待合并积压，同时有 4 条 Issue 活跃更新（均为仍处于 OPEN 状态）。开发主线集中在 **MCP 生态健壮性**（stdio 环境变量、远程连接器安装、OAuth 流程加固）与 **用户体验打磨**（图片编辑 artifact、侧边栏动画、Windows 任务栏）。值得注意的是两条 main 分支独有的安全问题（#2795、#2797）至今无人回应，构成潜在风险。无新版本发布，但多个 PR 指向 `release/2026.10.19` 分支，版本迭代在轨。

## 2. 版本发布

今日无新版本发布。从 PR 目标分支（`release/2026.10.19`）判断，近期正围绕下一个发布版本收敛功能。

## 3. 项目进展

今日 6 个 PR 全部合并/关闭，节奏紧凑，主要由核心贡献者 @fisherdaddy 推动：

- **[#2912](https://github.com/netease-youdao/LobsterAI/pull/2912)** — 修复 stdio MCP server 被静默丢弃 `NODE_OPTIONS` 的问题，改为信任系统 CA store，解决企业 MITM/TLS 拦截环境下 MCP 工具全部 `fetch failed` 的问题（Fixes #2906）。
- **[#2909](https://github.com/netease-youdao/LobsterAI/pull/2909)** — Marketplace 支持 SSE / Streamable HTTP 远程 MCP 连接器一键安装，支持声明式凭据表单与 OAuth，大幅降低远程 MCP 接入门槛。
- **[#2908](https://github.com/netease-youdao/LobsterAI/pull/2908)** — 远程 MCP OAuth 登录/登出/状态查询改为在临时 openclaw.json 上运行，加 #2874、#2905 后续加固，减少状态污染。
- **[#2907](https://github.com/netease-youdao/LobsterAI/pull/2907)** — Artifact 面板新增图片编辑（涂画、局部重绘、去背景、消除）与聊天快照，是今日最大的功能型 PR。
- **[#2911](https://github.com/netease-youdao/LobsterAI/pull/2911)** — 侧边栏 Kits · Skills · Connectors 菜单视觉减重并增加开合动画。
- **[#2910](https://github.com/netease-youdao/LobsterAI/pull/2910)** — Windows companion 窗口改为 `WS_EX_TOOLWINDOW`，不再在任务栏产生多余缩略图。

**整体评估**：MCP 可靠性 + 远程连接器能力 + 图片编辑三条线同步推进，今日合并量对本项目属于高产水平，直接为 `release/2026.10.19` 版本蓄力。

## 4. 社区热点

- **[#2895](https://github.com/netease-youdao/LobsterAI/issues/2895)**（Computer Use 重复弹授权 + 授权不跨会话持久化）是今日讨论最多的 Issue，作者 @cwx07426 在 10-20 基于代码与日志重写报告，定位到**授权 key 未归一化导致同一会话内同一应用反复弹窗**的精确缺陷。诉求核心：Computer Use 授权体验烦琐、信任状态不可持久。
- **[#2906](https://github.com/netease-youdao/LobsterAI/issues/2906)**（stdio MCP 丢弃 `NODE_OPTIONS`）提交当天即被 #2912 修复，体现了社区报告→维护者响应的高效闭环，是今日Issue与 PR 联动的典型案例。
- 安全类 Issue #2795、#2797 虽有更新动作但无评论跟进（见第 5、8 节）。

## 5. Bug 与稳定性

按严重程度排列：

1. **🔴 [#2795](https://github.com/netease-youdao/LobsterAI/issues/2795) — OAuth access/refresh token 明文写入诊断日志**。main 分支独有（v0.2.4 不受影响），属敏感凭据泄漏，**尚无 fix PR，无人回应**，风险最高。
2. **🔴 [#2797](https://github.com/netease-youdao/LobsterAI/issues/2797) — OpenClaw token 代理接受未认证请求并以用户 bearer token 转发**。同样仅 main 分支，**尚无 fix PR，无人回应**。
3. **🟠 [#2895](https://github.com/netease-youdao/LobsterAI/issues/2895) — Computer Use 授权 key 未归一化，同会话重复弹窗且不跨会话持久化**。有 1 条评论，暂无关联 fix PR。
4. **🟡 [#2906](https://github.com/netease-youdao/LobsterAI/issues/2906) — stdio MCP 丢弃 `NODE_OPTIONS` 致 TLS 拦截环境下工具全挂**。✅ 已由 [#2912](https://github.com/netease-youdao/LobsterAI/pull/2912) 修复并合并，且修复了“UI 无提示”的静默失败问题。

## 6. 功能请求与路线图信号

- **远程 MCP Marketplace 一键安装**（#2909）表明团队正把 Marketplace 从 stdio 扩展为全类型 MCP 分发入口，是明确的路线图方向。
- **Artifact 图片编辑 + 快照版本化**（#2907）显示 Artifact 面板正从“只读展示”演进为“可交互创作空间”，后续可期待更多编辑能力。
- **OAuth 流程持续加固**（#2908 及其引用的 #2874、#2905）说明远程连接器的 OAuth 体验仍在快速迭代中，短期内还会有 follow-up。
- #2895 的授权持久化诉求与 Computer Use 方向契合，鉴于用户报告质量高，有可能在后续版本中被纳入。

## 7. 用户反馈摘要

- **企业/代理环境用户**（#2906、#2912 场景）：Zscaler、Netskope、Steam++ 等 TLS 拦截环境下 MCP 工具“看起来正常但全部失败”，且 **UI 无任何错误提示**——静默失败比失败本身更令人沮丧。此痛点今日已获修复。
- **Computer Use 用户**（#2895）：反复弹授权破坏使用流畅度，期望“授权一次、长期生效”。
- **报告质量**：核心反馈者（@cwx07426、@carfeii）均提供了 commit hash、日志路径和代码级分析，社区技术素养高，但安全类高质量报告未获回应可能挫伤贡献积极性。

## 8. 待处理积压

- **[#2795](https://github.com/netease-youdao/LobsterAI/issues/2795)**（token 写入日志）与 **[#2797](https://github.com/netease-youdao/LobsterAI/issues/2797)**（未认证代理转发）：自 10-05 提交至今 **0 评论、无维护者回应**，虽为 pre-release/main 分支问题，但涉及凭据泄漏与认证绕过，建议维护者优先响应并评估是否需要在下个 release 前修复。
- **[#2895](https://github.com/netease-youdao/LobsterAI/issues/2895)**：创建于 10-17，仅 1 条评论，无修复进展；鉴于 Computer Use 是核心卖点，建议排期处理。
- 今日 PR 清空、Issue 积压仅 4 条，整体积压压力小，项目响应健康状况良好，唯安全类 Issue 是当前最突出的盲点。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-10-21）

## 1. 今日速览

Moltis 今日保持轻度活跃状态：新增 1 条 Feature Request（Issue #1310），2 个新开 PR 均处于待合并状态，无 PR 被合并或关闭，也无新版本发布。贡献重心集中在 **MiniMax 模型/语音能力集成**（#1311、#1312 均由 @octo-patch 提交），显示项目正在扩展多模态 provider 生态。整体来看，今日属于常规开发推进日，社区互动（评论/点赞）较为平淡，暂无稳定性风险信号。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日**无 PR 被合并或关闭**，两个新开 PR 处于待评审状态：

- **PR #1312 [OPEN]** — [feat: prefer MiniMax M3.1 Flash for ordinary text](https://github.com/moltis-org/moltis/pull/1312)：将 MiniMax-M3.1-Flash 加入静态模型目录并置于 MiniMax-M3 之前，保留既有模型 ID 以兼容显式和历史保存的模型选择，同步更新 provider 示例与目录覆盖。
- **PR #1311 [OPEN]** — [feat(voice): add MiniMax speech synthesis](https://github.com/moltis-org/moltis/pull/1311)：新增 MiniMax TTS 配置、provider 注册、凭据存储支持，以及针对全球与中国区 `t2a_v2` API 的区域端点选择，支持指定模型与文本及可选参数。

**评估**：两个 PR 方向一致（MiniMax 全家桶：文本 + 语音），若合并将显著补齐 Moltis 在 MiniMax 生态的能力覆盖，属于功能性增量，无破坏性变更迹象（#1312 明确保留旧模型 ID）。

## 4. 社区热点

今日无高热度讨论（所有条目评论数为 0 或缺失）。相对值得关注的是：

- **Issue #1310** [Expose per-message sender identity to agents and MCP tools in shared WhatsApp chats](https://github.com/moltis-org/moltis/issues/1310)：作者 @psousaj 经过了充分的预检索（明确区分了 #1294 和已完成的 #640），提供了 JIDs、聊天上下文等本地调试细节，属于高质量需求。诉求核心是**多人共享 WhatsApp 会话中的逐消息发送者身份透传**给 agent 和 MCP 工具——这是多用户共享聊天场景下个性化与安全（来源可追溯）的关键能力。

## 5. Bug 与稳定性

今日**未报告**新的 Bug、崩溃或回归问题。稳定性层面无风险信号。

## 6. 功能请求与路线图信号

| 功能需求 | 状态 | 纳入可能性判断 |
|---|---|---|
| WhatsApp 共享聊天中逐消息发送者身份暴露给 agent/MCP 工具（[#1310](https://github.com/moltis-org/moltis/issues/1310)） | 新开，尚无关联 PR | 短期内 unlikely；涉及 agent 上下文与 MCP 协议层改造，需维护者先表态 |
| MiniMax TTS 语音合成（[PR #1311](https://github.com/moltis-org/moltis/pull/1311)） | PR 已就绪待评审 | 较高，代码已完成，等待 review |
| MiniMax M3.1 Flash 默认文本模型（[PR #1312](https://github.com/moltis-org/moltis/pull/1312)） | PR 已就绪待评审 | 较高，与 #1311 同一作者、同一生态方向 |

**信号**：MiniMax 集成可能是下一版本的主题之一；#1310 则反映出社区对**多用户共享会话的 per-turn provenance** 这一细分需求持续关注（此前已有 #1294、#640 相关脉络），建议纳入路线图讨论。

## 7. 用户反馈摘要

- **痛点**：在 WhatsApp 群聊/共享聊天场景中，agent 无法区分每条消息的实际发送者，导致上下文混淆，用户已自行进行本地调试（附 JID 与聊天上下文证据）（[#1310](https://github.com/moltis-org/moltis/issues/1310)）。
- **积极信号**：贡献者 @octo-patch 密集提交 MiniMax 相关能力，反映用户/开发者对国产模型与语音合成的实际需求；#1310 作者的高质量 preflight 也说明社区贡献规范执行良好。
- 今日无负面情绪或不满反馈。

## 8. 待处理积压

- **PR #1311、#1312**（均创建于 2026-10-20）：处于待评审状态，评论数缺失/为 0，建议维护者优先 review，避免同类 MiniMax 改动积压产生冲突（两 PR 涉及同一 provider 生态）。
- **Issue #1310**：刚开立一天，尚在正常响应窗口内，但鉴于其与 #1294、#640 的关联性，建议维护者给出统一的 provenance 设计方向，避免需求碎片化。

---
*数据来源：Moltis GitHub 仓库（2026-10-21 抓取）。今日整体健康度：正常，建议关注 PR 评审节奏。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 · 2026-10-21

## 1. 今日速览

- 项目保持高活跃度：过去 24 小时 Issues 更新 11 条（新开/活跃 7、关闭 4），PR 更新 30 条（待合并 20、已合并/关闭 10），社区贡献节奏健康。
- 今日无新版本发布，当前主线仍围绕 v2.2.2 / v2.2.3b1 的稳定性修复，同时 [#8289](https://github.com/agentscope-ai/QwenPaw/issues/8289) 预告的 v2.3.0 "更轻量、更可扩展" 插件化重构已在多个 XXXL 级 PR 中推进。
- 新增 Bug 集中在渠道层（飞书同步网络调用阻塞事件循环、钉钉 webhook 过期丢消息）和定时任务编辑 UI，多数已有对应 fix PR 或正在跟进。
- 整体判断：项目处于"稳定版打磨 + 大版本架构重构并行"阶段，社区（含首次贡献者）参与度持续上升。

## 2. 版本发布

过去 24 小时无新 Release。最近发布为 v2.2.2-beta.4，其安装验证 duty Issue [#8053](https://github.com/agentscope-ai/QwenPaw/issues/8053) 已于今日关闭。

## 3. 项目进展

今日关闭/合并的 10 条 PR 中较重要的：

- **[#8215](https://github.com/agentscope-ai/QwenPaw/pull/8215) fix(agents): 识别 LM Studio "at most 0 audio" 拒绝**（对应关闭 Issue [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171)）——修复音频 DataBlock 残留导致会话永久卡死的问题，audio-fallback 分类器补齐第三种拒绝形态；关联 PR [#7654](https://github.com/agentscope-ai/QwenPaw/pull/7654)（llama-server / DashScope 音频拒绝识别）同日关闭。
- **[#8339](https://github.com/agentscope-ai/QwenPaw/pull/8339) fix(console): 修复长对话滚动跳动**（关闭 Issue [#8284](https://github.com/agentscope-ai/QwenPaw/issues/8284)）——覆盖 `content-visibility: auto` 占位高度估算，消除 1.1-2.2k px 的回弹。
- **[#8346](https://github.com/agentscope-ai/QwenPaw/pull/8346) fix(data-app): 修正 ZIP 体积与版本范围**——解决 Data 1.0.3 上传超 10MB 限制的问题。
- **[#8283](https://github.com/agentscope-ai/QwenPaw/pull/8283) feat(security): 决策模型驱动的工具审批模式**——大型安全特性 PR 关闭（状态待确认是否合并落地）。
- **[#8200](https://github.com/agentscope-ai/QwenPaw/pull/8200) Firecrawl 作为 web_search provider**——首次贡献者 PR 关闭，外部生态集成信号积极。
- **[#5097](https://github.com/agentscope-ai/QwenPaw/pull/5097)**——6 月的旧 CSS 修复 PR 今日清理关闭。

结论：渠道与音频模态的长期痛点在本轮集中收口，Console UX 修复落地快（#8284 报告次日即修）。

## 4. 社区热点

- **[#8289](https://github.com/agentscope-ai/QwenPaw/issues/8289) v2.3.0 路线图：更轻量、更模块化**（官方发起，持续有讨论与 👍）——核心信号：插件化重构是下个大版本主轴，与 PR [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187)（渠道插件化 + 子进程隔离）、[#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874)（PawApp 控制面重设计）、[#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565)（插件热重载）形成呼应。
- **[#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171)（6 评论）**——LM Studio 音频兼容问题引发多轮讨论，今日随修复关闭，反映多模态 fallback 分类器的脆弱性是用户反复踩坑的区域。
- **[#8092](https://github.com/agentscope-ai/QwenPaw/issues/8092)（3 评论）**——Ali 系网关内容审查误报被归类为 bad_request，导致整轮对话被杀；12 模型 fallback 链重型企业用户的核心诉求是**错误分类精细化 + 自动降级重试**。
- **[#8311](https://github.com/agentscope-ai/QwenPaw/issues/8311)**——鸿蒙端侧插件宿主（147 文件/45k 行 ArkTS）请求上游统一 `window.QwenPaw` 契约与 PawApp 门控，移动端生态共建意愿强烈。

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 状态 / Fix |
|---|---|---|
| 🔴 高 | [#8350](https://github.com/agentscope-ai/QwenPaw/issues/8350) 飞书渠道在主事件循环执行同步网络调用，网络不通导致整个服务卡死（healthz 超时、SIGTERM 无法退出） | 新开，**尚无 fix PR** |
| 🔴 高 | [#8092](https://github.com/agentscope-ai/QwenPaw/issues/8092) 网关 `data_inspection_failed` 误判为 bad_request，无重试无降级，turn 被杀 | Open，暂无 PR |
| 🟠 中 | [#8343](https://github.com/agentscope-ai/QwenPaw/issues/8343)（已关闭）钉钉 sessionWebhook 过期后最终回复静默丢失，无 Open API 兜底 | 标记 close-and-review-later，需关注后续 PR |
| 🟠 中 | [#8342](https://github.com/agentscope-ai/QwenPaw/issues/8342) 引用回复时 `/stop` 等控制命令在 7 个渠道被误判为普通消息 | Open，**影响面广，建议优先** |
| 🟡 中低 | [#8340](https://github.com/agentscope-ai/QwenPaw/issues/8340) / [#8249](https://github.com/agentscope-ai/QwenPaw/issues/8249) 定时任务编辑弹窗无法关闭、时间轮初始化为 0:0、内容显示 `[object Object]` | ✅ 已有 fix PR [#8349](https://github.com/agentscope-ai/QwenPaw/pull/8349)（今日新开） |
| ✅ 已修 | [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171) 音频会话卡死、[#8284](https://github.com/agentscope-ai/QwenPaw/issues/8284) 长对话滚动跳动 | PR #8215 / #8339 已关闭 |

## 6. 功能请求与路线图信号

- **插件化 / 轻量化（v2.3.0 核心）**：[#8289](https://github.com/agentscope-ai/QwenPaw/issues/8289) 官方路线图 + 渠道插件化 PR [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187)、热重载 PR [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565)、PawApp 控制面 [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874)——高度可能进入 v2.3.0。
- **长上下文管理**：[#8347](https://github.com/agentscope-ai/QwenPaw/pull/8347) ReMe 0.4.2 + JEV 压缩（opt-in），今日活跃更新。
- **实时语音**：[#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785) 实时语音对话仍在评审中，是高期待度特性。
- **生态扩展**：Firecrawl provider（#8200 已收口）、Skill 池可取消下载任务（[#8285](https://github.com/agentscope-ai/QwenPaw/pull/8285) Under Review）、make-skill 原生 CLI 修复（[#8344](https://github.com/agentscope-ai/QwenPaw/pull/8344)）。
- **性能**：[#8348](https://github.com/agentscope-ai/QwenPaw/pull/8348) replay buffer 内存优化（今日新开），针对长任务的 SSE 事件膨胀。

## 7. 用户反馈摘要

- **痛点集中在渠道集成边缘场景**：非官方/兼容网关（LM Studio、Ali 兼容模式）的错误格式多样性持续制造"整轮对话被杀"类事故；用户期望分类器更健壮、失败可降级而非终止。
- **生产部署用户关注可运维性**：#8350 的 systemd 场景下服务无法优雅退出，反映有用户在以长期服务方式运行 QwenPaw。
- **UI 细节影响日常使用**：定时任务编辑器（#8249/#8340）、Console 滚动（#8284）连续被报，说明 Console 是高频使用入口。
- **正面信号**：修复响应速度快（#8284 一日内修复）；外部团队（Firecrawl、鸿蒙社区）主动接入，说明扩展生态有吸引力。

## 8. 待处理积压

- **[#8092](https://github.com/agentscope-ai/QwenPaw/issues/8092)**（10-03 开，3 评论）——网关误报 kill turn，影响生产可用性，暂无 fix PR，**建议维护者优先分配**。
- **[#8350](https://github.com/agentscope-ai/QwenPaw/issues/8350)**（今日新开）——事件循环阻塞属架构级问题，需评估是否统一异步化渠道网络调用。
- **[#8342](https://github.com/agentscope-ai/QwenPaw/issues/8342)**——7 渠道控制命令路由失效，影响面广但评论少，易被忽视。
- **大型 PR 评审压力**：待合并 PR 达 20 个，其中 XXXL 级 5 个（#8332、#7874、#8187、#7565、#7785），累计变更量巨大，评审吞吐率是当前项目健康的潜在瓶颈，建议关注 [#8332](https://github.com/agentscope-ai/QwenPaw/pull/8332) Console 重构整合分支的合并节奏。

---
*数据来源：GitHub（agentscope-ai/CoPaw），统计窗口 2026-10-20 至 2026-10-21。*

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