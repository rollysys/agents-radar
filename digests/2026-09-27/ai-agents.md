# OpenClaw 生态日报 2026-09-27

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-27 04:20 UTC

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

# OpenClaw 项目日报 — 2026-09-27

---

## 1. 今日速览

OpenClaw 今日保持**极高活跃度**：过去 24 小时内 Issues 更新 500 条（新开/活跃 418、关闭 82），PR 更新 500 条（待合并 364、已合并/关闭 136），无新版本发布。项目当前的重心明显集中在**修复 2026.9.5 / 2026.9.6 引入的回归问题**——更新失败、插件源捕获（plugin source capture）导致的磁盘/内存泄漏是两大高频 P0 主题。合并/关闭比（136/500 ≈ 27%）显示团队在积极消化积压，但新增 P0 问题（尤其是 native worker 生态的重构副作用）速度仍快于修复速度。

---

## 2. 版本发布

今日无新版本发布。最近版本为 2026.9.6（eb377ac），但社区反馈表明该版本仍带有 2026.9.5 的插件捕获泄漏问题（见第 5 节）。

---

## 3. 项目进展

今日值得关注的 PR 推进（含合并/关闭与活跃待审）：

**Native Worker 推理栈（核心功能，3/3 stack）**
- [#158901](https://github.com/openclaw/openclaw/pull/158901) feat(workers): 配对 worker 上运行原生推理 — 栈第 1 部分，XL 级，含安全敏感变更
- [#158902](https://github.com/openclaw/openclaw/pull/158902) feat(ui): 会话可用性识别 worker 推理 — 栈第 2 部分
- [#158903](https://github.com/openclaw/openclaw/pull/158903) feat(workers): 会话强制配置 worker 放置 — 栈第 3 部分，依赖前两者
- 该栈将使 paired worker 能够本地运行模型推理循环，是自托管个人 AI 助手架构的重要演进。

**Update/启动可靠性修复**
- [#159351](https://github.com/openclaw/openclaw/pull/159351)（已关闭）fix(workers): 任务诊断不再污染 JSON stdout — 直接修复已发布 2026.9.6 更新器拒绝有效候选的问题
- [#159405](https://github.com/openclaw/openclaw/pull/159405) fix(state): lease heartbeat worker 启动慢导致 Gateway 拒绝启动（P1，ready for maintainer）
- [#159347](https://github.com/openclaw/openclaw/pull/159347) fix(windows): Windows 计划任务下 SQLITE_IOERR_TRUNCATE 后的 Gateway 恢复（P1）
- [#159208](https://github.com/openclaw/openclaw/pull/159208) fix(gateway): registry 刷新期间保持 transcript 可读

**性能与体验**
- [#159400](https://github.com/openclaw/openclaw/pull/159400) perf(chat): 长会话滚动掉帧修复，接续 #159294/#159293
- [#159404](https://github.com/openclaw/openclaw/pull/159404) fix(ios): agent 发现期间保留首条发送消息（P1）
- [#159117](https://github.com/openclaw/openclaw/pull/159117) feat: agents 可查询在线人员与设备活动（presence 工具，XL，含 iOS/Android/Web）

**其他**
- [#159401](https://github.com/openclaw/openclaw/pull/159401) 依赖批量刷新（截止 2026-09-19）
- [#159084](https://github.com/openclaw/openclaw/pull/159084) refactor(acp): ACP 元数据工作移出 Gateway 主线程
- [#159402](https://github.com/openclaw/openclaw/pull/159402) 新增 PR-only CI 修复 agent

**整体评估**：今日进展以“可靠性 + native worker 架构”双线推进，特别是 update 链路连出多个修复 PR，反映团队正集中回应该方向的 P0 风暴。

---

## 4. 社区热点

1. **[#153257](https://github.com/openclaw/openclaw/issues/153257)**（40 评论，P0）— 用户报告 2026.9.5 将稳定环境变成"8 小时故障恢复会话"，标签几乎全量（crash-loop、session-state、ux-release-blocker、manual-only），已成为 9.x 回归问题的旗帜性 issue。
2. **[#115908](https://github.com/openclaw/openclaw/issues/115908)**（23 评论，已关闭）— transcript projection 持续写入下活锁阻塞主线程。该长期 issue 今日关闭，是稳定性修复的正面信号。
3. **[#42475](https://github.com/openclaw/openclaw/issues/42475)**（23 评论）— 网关级 per-agent 成本预算的功能请求，运维诉求强烈，仍待产品决策。
4. **[#102020](https://github.com/openclaw/openclaw/issues/102020)**（16 评论，已关闭）— 跨渠道第二条消息"reply session initialization conflicted"。
5. **[#114612](https://github.com/openclaw/openclaw/issues/114612)**（16 评论）— SQLite `memory_index_chunks` / `memory_embedding_cache` 无保留策略、无界增长填满磁盘。

**诉求分析**：热点集中于“长时间稳定运行的生产部署”——磁盘/内存资源治理、更新链路的不可恢复失败、跨渠道会话状态一致性是用户最痛的三个方向。

---

## 5. Bug 与稳定性（按严重度）

### P0（ux-release-blocker / crash-loop）

| Issue | 问题 | fix PR |
|---|---|---|
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | 9.5 崩溃循环 + 8h 恢复 | ❌ 无（manual-only） |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | 卡死的 agent-DB 资源导致**所有** agent 回复失败直至网关重启（9.6, Windows） | ❌ 无 |
| [#156571](https://github.com/openclaw/openclaw/issues/156571) | model-catalog worker 泄漏 tmp 捕获，**1–3 GB/min 填满磁盘**（9.5） | ❌ 无（manual-only） |
| [#157568](https://github.com/openclaw/openclaw/issues/157568)（已关闭）| 9.6 WSL 下 4 分钟再生 7.5 GB 插件捕获，回收设置无效 | — |
| [#157989](https://github.com/openclaw/openclaw/issues/157989)（P1） | 每次 CLI 命令重写 ~1.4 GB、每次 Gateway 启动 ~6.5 GB 捕获 → **SSD 严重磨损** | ❌ 无 |
| [#154812](https://github.com/openclaw/openclaw/issues/154812) / [#155191](https://github.com/openclaw/openclaw/issues/155191) | 9.5 原生内存泄漏：RSS 30 秒涨 1 GiB / 涨至 9.32 GiB OOM，V8 堆平稳 | ❌ 无 |
| [#156112](https://github.com/openclaw/openclaw/pull/156112) 相关 [issue #156112](https://github.com/openclaw/openclaw/issues/156112) | `openclaw update` 在 "global install swap" 确定性失败，直接 npm install 成功 | ❌ 无（manual-only） |
| [#157812](https://github.com/openclaw/openclaw/issues/157812) | Windows 自动更新 2 天 5 次失败、三种失败模式 | ❌ 无（manual-only） |
| [#154679](https://github.com/openclaw/openclaw/issues/154679) | 中断的 6.5→9.5 升级后网关 exit 78，doctor 无法修复 | ❌ 无 |
| [#157319](https://github.com/openclaw/openclaw/issues/157319) | 9.6 更新 state-migrated-no-rollback + codex 陈旧记录 | ❌ 无 |
| [#158114](https://github.com/openclaw/openclaw/issues/158114)（已关闭） | 启动迁移 lease 丢失 → 网关永久无法启动，1h45m 全量无响应 | — |
| [#158126](https://github.com/openclaw/openclaw/issues/158126) | 关闭步骤 gateway-server-close 硬币式失败 → systemd unit failed | 相关：[#159347](https://github.com/openclaw/openclaw/pull/159347) |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | 启动时间随插件数线性增长，120s 预算被吃满 | ❌ 无 |

### P1 精选
- [#157067](https://github.com/openclaw/openclaw/issues/157067)：Windows 隔离 cron 将不可克隆的 Proxy 传给 worker（有 linked PR）
- [#113701](https://github.com/openclaw/openclaw/issues/113701)：上下文溢出后 compaction 无法恢复 → 会话失败循环
- [#115546](https://github.com/openclaw/openclaw/issues/115546)：CLI-budget 压缩超时 100% 失败 → 唤醒死亡螺旋
- [#114234](https://github.com/openclaw/openclaw/issues/114234)：容器 PID 复用导致 usage-cost 锁永久冻结（有 linked PR）

**结论**：P0 集中在三个集群——①插件源捕获资源泄漏（9.5 引入）、②update/migration 不可恢复失败、③Windows 平台可靠性。**绝大多数尚无 fix PR**，是当前项目健康度的最大风险。

---

## 6. 功能请求与路线图信号

- **Per-agent 成本预算（网关级）** [#42475](https://github.com/openclaw/openclaw/issues/42475)：23 评论、长期活跃，needs-product-decision。已有 per-session 成本追踪基础（`session-cost-usage.ts`），纳入概率中等偏高。
- **Cron 静默停止标志（acceptSilentStop）** [#76159](https://github.com/openclaw/openclaw/issues/76159)（已关闭）：面向"无事可做"型定时任务的明确诉求。
- **最终兜底投递语义（跨渠道）** [#87561](https://github.com/openclaw/openclaw/issues/87561)：maintainer 标签 + 长期讨论，属路线图级设计议题。
- **调度落点 ACK / 遥测** [#76247](https://github.com/openclaw/openclaw/issues/76247)：多 agent 运维可观测性需求。
- **错误消息暴露 provider 名称** [#51336](https://github.com/openclaw/openclaw/issues/51336)：小改动、高 UX 收益，有 linked PR。
- 已有 PR 印证的方向：**presence/设备活动查询**（#159117）、**native worker 推理**（#158901 栈）已实质进入交付通道，预计构成下个版本主线。

---

## 7. 用户反馈摘要

- **升级后悔情绪明显**："genuinely regret upgrading to 2026.9.5"（#153257）代表了一类从稳定旧版本升级后遭遇 crash-loop 的生产用户；多个用户报告升级后系统**不可自愈**，需人工干预数小时。
- **磁盘/SSD 磨损引发信任危机**：1–3 GB/min 的 tmp 泄漏（#156571）和每次启动 6.5 GB 重写（#157989）对 VPS/小盘用户是硬性阻断。
- **Windows 用户被系统性忽视的感受**：更新失败、计划任务、SQLITE_IOERR 等问题集中出现在 Windows Server/WSL 环境（#157325、#157812、#159347）。
- **正面信号**：多个长期高影响 issue 本周被关闭（#115908 活锁、#109867 迁移索引顺序、#90178 子代理死锁），维护者响应和 clawsweeper 分类体系被认为细致（issue-rating 标签生态活跃）。
- **典型使用场景**：多渠道（Telegram/WhatsApp/飞书/Discord/Signal）个人助理网关、npm 全局安装 + systemd/计划任务长期运行、Ollama 本地模型与 Bedrock/Anthropic 混合部署。

---

## 8. 待处理积压（维护者关注）

| 项目 | 状态 | 关注理由 |
|---|---|---|
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | OPEN，manual-only，40 评论 | 9.5 回归旗帜 issue，无 fix PR |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | OPEN since 2026-03，needs-product-decision | 高热度功能请求，近 7 个月无决策 |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | OPEN，recovery-stuck | SQLite 无界增长，生产必然触发 |
| [#114154](https://github.com/openclaw/openclaw/issues/114154) | OPEN，recovery-stuck | bundle-mcp 工具静默失效，排障成本极高 |
| [#113701](https://github.com/openclaw/openclaw/issues/113701) | OPEN since 2026-07，needs-live-repro | 上下文溢出死循环，影响所有重度会话用户 |
| [#87561](https://github.com/openclaw/openclaw/issues/87561) | OPEN，needs-product-decision | 消息静默丢失的架构级问题 |
| [#157067](https://github.com/openclaw/openclaw/issues/157067) | OPEN，linked PR open | PR 挂起中，需 review |
| [#147827](https://github.com/openclaw/openclaw/pull/147827) | OPEN since 09-14，needs proof | XL 插件恢复/退役所有权修复，久悬 |

**积压风险提示**：OPEN P0 中带 `clawsweeper:no-new-fix-pr` + `manual-only` 标签的组合数量偏高，尤其 update 链路和插件捕获泄漏两个集群——若下一个版本前不收敛，可能形成负面口碑循环。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告（2026-09-27）

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**功能扩张与可靠性偿债并行的关键期**：头部项目（OpenClaw、Zeroclaw、Hermes Agent）日均 Issue/PR 更新量达 50–500 条，社区高度活跃但普遍面临 P0 缺陷积压与 PR 评审吞吐瓶颈（多项目待合并 PR 占比超 80%）。**“无人值守长期运行”成为新的质量高地**——升级链路、定时任务、内存/磁盘治理、自我恢复能力是几乎所有项目的共同战场。同时，多渠道 IM 接入（WhatsApp/飞书/QQ/企微/Discord）、本地/低成本推理、可观测性三条功能主线在多项目同步涌现，反映生态正从“能用”向“生产级自托管”演进。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（新开/关闭） | PR 更新（待合并/合并关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（418/82） | 500（364/136） | 无 | ⚠️ 中低：极高活跃但 P0 回归（9.5/9.6 插件捕获泄漏、update 链路）多数无 fix，负面口碑风险累积 |
| **Zeroclaw** | 50（40/10） | 50（40/10） | 无 | ✅ 良好：认证/隔离大栈收尾，v0.9.0 密集筹备，安全清理系统化，贡献生态多元 |
| **Hermes Agent** | 50（32/18） | 50（47/3） | 无 | ⚠️ 中：贡献质量高但 47 条 PR 待审，评审吞吐严重滞后；Windows 链路缺陷簇集中 |
| **NanoBot** | 4（4/0） | 14（12/2） | 无 | ✅ 中上：修复密集、贡献者深度参与，但 PR 合并偏慢、2 条 PR 关闭未说明原因 |
| **NanoClaw** | 4（4/0） | 27（23/4） | 无 | ⚠️ 中：单核心贡献者高频交付 + 3 条升级/安全新 Issue（含密钥日志泄漏）无回应 |
| **CoPaw** | 6（4/2） | 4（4/0） | 无 | ✅ 中上：用户报 Bug 即提 PR 的自服务模式，社区健康但审查吞吐待提升 |
| **LobsterAI** | ~6 关闭（stale） | 12（2/10） | 无 | ⚠️ 中：主干活跃（Word 编辑大 PR），但 6 个月前社区 PR 被批量 stale 关闭，贡献者体验受损 |
| **NullClaw** | 0 | 5（5/0） | 无 | ⚠️ 中低：单人提交 5 条高质量修复（含自触发死循环）全部无人 review |
| **PicoClaw** | 1 | 3（1/2） | 无 | ⚠️ 中低：QQ 渠道接口失配 + 富媒体 PR 被关闭，渠道技术债累积 |
| **Moltis** | 0 | 1（1/0） | 无 | ➖ 低：仅第三方部署文档 PR，社区互动为零 |
| **IronClaw** | 1 | 1（1/0） | 无 | ➖ 低：版本间歇期，CI 快照 PR 挂起 29 天 |
| TinyClaw / ZeptoClaw / EasyClaw | 0 | 0 | 无 | ➖ 静默 |

**关键观察**：全生态今日零 Release，但 Zeroclaw（v0.9.0）、NanoClaw（v2.5）、OpenClaw（native worker 栈）均在为下个版本密集铺货；**无一项目“活跃且无风险”**——活跃度与 PR 评审债务呈正相关。

---

## 3. OpenClaw 在生态中的定位

**社区规模**：断层第一。日均 500 条 Issue + 500 条 PR 更新，约为第二名（Zeroclaw/Hermes，各 50）的 **10 倍**，是事实上的生态参照系（多个项目直接构建于其上：LobsterAI 嵌入 openclaw gateway 并出现端口冲突）。

**技术路线差异**：
- **Native worker 推理栈**（#158901–#158903）：向“配对 worker 本地跑模型推理循环”演进，是同类项目中最激进的**自托管本地推理架构**主张——NanoClaw 走 OpenRouter/多 provider 路由，Zeroclaw 侧重 RPC/HTTP 对等，无人走同等深度的本地推理路线。
- **多渠道网关**：Telegram/WhatsApp/飞书/Discord/Signal 覆盖最广，与 NanoBot（飞书/中文生态）、Zeroclaw（WhatsApp 深耕）形成区域化竞争。

**优势**：规模效应、clawsweeper 分类治理体系、presence/设备活动等差异化功能（#159117）。

**劣势（相对同类）**：9.5/9.6 引入的**插件捕获泄漏（1–3 GB/min 填盘、SSD 磨损）和 update 不可恢复失败**两大 P0 集群多数无 fix PR，`manual-only` 标签组合比例偏高——相比之下 Zeroclaw 的安全修复响应更系统（S0 报出即有 fix PR 提交），Hermes 社区报告质量更高。**OpenClaw 当前最大风险不是功能落后，而是回归质量正在透支社区信任**（"genuinely regret upgrading"）。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **升级/更新链路可靠性** | OpenClaw（#153257 等 6+ 条 P0）、Hermes（#123499 杀祖先进程、#52339 split-brain）、NanoClaw（#3941–#3943 升级三连） | 自更新不应是最高风险操作：不可恢复失败、锁文件破坏、更新后变砖是三项目共同的头号痛点 |
| **定时任务/Cron 正确性** | NanoBot（#5922 DST 错位）、CoPaw（#4963 纯脚本任务，4 个月讨论）、Zeroclaw（#10969 jitter、#10968 无人值守审批）、OpenClaw（#76159 acceptSilentStop）、LobsterAI（#1062/#1065） | 无人值守任务：时区正确性、审批门控、成本控制、无 AI 直执行脚本 |
| **内存/磁盘资源治理** | OpenClaw（#114612 SQLite 无界增长、#156571 泄漏）、Zeroclaw（#10780 上下文压缩缺失）、CoPaw（#7994 压缩阈值失效）、NanoBot（#5903 checkpoint 泄漏） | 长会话下的存储上限、上下文压缩、缓存保留策略 |
| **多渠道 IM 补齐与消息保真** | Zeroclaw（WhatsApp 5+ 条）、NanoBot（飞书 bot-to-bot）、PicoClaw（QQ API 失配）、CoPaw（企微表格误渲染）、NanoClaw（WhatsApp 依赖漏洞）、NullClaw（Discord 回环） | 渠道侧消息转换边界、富媒体支持、防自触发 |
| **可观测性** | NanoBot（#5908 tokens/sec）、NanoClaw（#3934–#3939 错误上报/逐轮追踪）、CoPaw（#7991 计数一致性）、OpenClaw（#76247 调度 ACK）、NullClaw（#1004 错误体可见） | “慢 vs 卡死”的区分、crash-loop 感知、成本可追溯 |
| **本地/低成本推理** | OpenClaw（native worker 栈）、NanoClaw（minimalContext + lean-tasks + OpenRouter）、Zeroclaw（Cheaper Inference #11103）、IronClaw（链上 MCP） | 多模型路由、小上下文运行、低价网关 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构关键 |
|---|---|---|---|
| **OpenClaw** | 全渠道个人助理网关 + 本地推理 | 重度自托管生产用户（VPS/systemd/Windows Server） | npm 全局安装 + Gateway + worker 架构，native 推理栈演进中 |
| **Zeroclaw** | 安全隔离、多用户、RPC 对等 | 多租户/安全敏感部署（v0.9.0 core-parity） | principal 隔离、审批门控、插件 `provides` 合约 |
| **Hermes Agent** | 桌面多 Surface + ACP 生态 | macOS/Windows 桌面用户、双机/远程工作流 | Desktop app + gateway + 编辑器技能集成（Zed 等） |
| **NanoBot** | 中文 IM（飞书）渠道 + 基础质量 | 中文生态个人用户 | 轻量、渠道适配器模式 |
| **NanoClaw** | skill 化交付 + 自运维闭环 | 自托管极客（“自升级、自修复”） | seam + skill 架构、llama.cpp 兼容 |
| **CoPaw** | 控制台 UX + 企微/钉钉 | 国内企业场景 | workspace + 多渠道渲染层 |
| **LobsterAI** | 文档生产力（Markdown/Word artifacts） | 网易有道生态桌面用户 | Electron + openclaw 网关内嵌 |
| **NullClaw / Moltis / IronClaw / PicoClaw** | C 层轻量 / 部署易用 / NEAR 链上 / 嵌入式 QQ | 细分场景 | 各自异构 |

---

## 6. 社区热度与成熟度分层

- **快速迭代期**：**Zeroclaw**（认证栈收尾 + v0.9.0 lane，风险收敛与功能推进同步）、**NanoClaw**（单贡献者十 PR 特性链交付，v2.5 铺货）、**LobsterAI**（Word 编辑大功能）
- **质量巩固/偿债期**：**OpenClaw**（P0 回归风暴，修复速度落后于新增）、**Hermes Agent**（47 PR 评审积压 + Windows 缺陷簇）、**NanoBot**（修复密集期）
- **平稳维护期**：**CoPaw**、**NullClaw**、**PicoClaw**（活跃度中低但方向明确）
- **静默/间歇期**：Moltis、IronClaw、TinyClaw、ZeptoClaw、EasyClaw

**成熟度信号**：报告质量最高的是 Hermes（带 root cause 分析）与 NanoClaw（@bmultini 三连 Issue 精确到 commit/pnpm 版本）；治理体系最完善的是 OpenClaw（clawsweeper 标签）与 Zeroclaw（PR 模板 blast radius + 决策队列 #8692）；贡献者体验最差的是 LobsterAI（6 个月 PR 批量 stale 关闭无说明）与 NullClaw（5 条 PR 零 review）。

---

## 7. 值得关注的趋势信号

1. **“自更新可靠性”是 2026 下半年智能体项目的分水岭**——三个头部项目同时爆发升级链路 P0（OpenClaw、Hermes、NanoClaw），说明 agent 具备自我升级能力后，更新路径成为新的系统性风险面。开发者启示：更新需原子化、可回滚、且不应在更新失败时静默死亡。
2. **无人值守自治成为标配需求**：cron 审批门控（Zeroclaw #10968）、静默停止标志（OpenClaw #76159）、纯脚本任务（CoPaw #4963）共同指向“agent 在无人干预时的安全边界与成本上限”，per-agent 成本预算（OpenClaw #42475，7 个月无决策）是尚未被满足的空白。
3. **本地/低成本推理进入交付通道**：OpenClaw native worker 栈、NanoClaw minimalContext/lean-tasks、Zeroclaw Cheaper Inference 三线并进——多模型路由 + 小上下文运行将是下个版本周期的竞争焦点。
4. **可观测性从 nice-to-have 变为 blocker**：tokens/sec、逐轮追踪、错误自上报（NanoClaw #3934–#3939 整套 seam）显示用户已把 agent 用于日常长任务，“无法区分慢与死”直接导致信任流失。
5. **执行边界/权限模型的架构化诉求**：Hermes #95028（Authority Execution Layer）虽被关闭，但其诊断与该项目 Windows/session 缺陷簇同根；Zeroclaw 的 principal 隔离栈则是该方向的先行实现——**跨进程状态不可信**将成为智能体安全的共识性设计原则。
6. **渠道生态区域化分工明显**：WhatsApp（Zeroclaw/NanoClaw）、飞书/企微/QQ（NanoBot/CoPaw/PicoClaw）、Discord（NullClaw）——国内项目需警惕渠道 API 时效性技术债（PicoClaw QQ 适配滞后即前车之鉴）。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-09-27）

## 1. 今日速览

NanoBot 今日保持较高活跃度：过去 24 小时共有 **4 条 Issue 更新（全部为活跃/新开，0 关闭）** 和 **14 条 PR 更新（12 条待合并，2 条合并/关闭）**，无新版本发布。贡献集中于两个方向：一是 Feishu（飞书）渠道的能力增强（bot-to-bot 消息支持），二是贡献者 @2gg-bit 单日提交了 8 个高质量、带回归测试的缺陷修复 PR，覆盖时区、Unicode、文件 IO 等多个子系统。整体来看项目处于「修复密集期 + 渠道功能扩展期」，社区贡献者参与深度较高，但 PR 合并速度（12 条待合并）略显滞后。

## 2. 版本发布

今日无新版本发布。近期亦无 Release 记录，建议关注 12 条待合并 PR 的落地情况，可能形成一个修复集中版本。

## 3. 项目进展

今日关闭的 PR 共 2 条：

- **PR #5916**（已关闭）`fix(mcp): load all pages of server tools before registration` — 修复 MCP 服务器 `tools/list` 分页时只注册第一页工具的问题，属于 MCP 集成的实质性修复，但状态为 CLOSED 而非 MERGED，需关注是被拒绝还是被替代实现。
  链接：https://github.com/HKUDS/nanobot/pull/5916
- **PR #5919**（已关闭）`feat(linear): manage member access and simplify workspace connections` — Linear 渠道的成员权限管理功能，管理员可在 WebUI 直接控制谁可使用 Linear agent，免去逐人配对码流程。该 PR 推进了多渠道权限管理的产品化。

待合并的重要 PR：

- **PR #5257**（p2，今日仍有更新）`fix(agent): bound sustained-goal continuation when the turn goes idle` — 限制持续目标模式下空闲时的自动续跑（最多连续两次），防止回复循环直至耗尽迭代预算。这是 Agent 核心循环稳定性的重要修复，创建于 8 月初至今仍在推进。
- **PR #5930** `feat(feishu): allow bot-to-bot messages in groups` — 与 Issue #5929 同日提交，实现飞书群内 bot 互通（白名单 + 跳数限制），响应速度非常快。
- **PR #5922**（**p1**）`fix: 使用本地时区规则计算 cron 下次运行时间` — 修复 DST 夏令时导致的定时任务偏移一小时问题，是今日优先级最高的修复。
- @2gg-bit 系列 PR（#5920-#5928，除 #5922 外均为 p2）：Unicode 截断保留完整字符、Windows 换行符重复、URL 大小写误判重复抓取、通知布尔校验、邮件字符集回退、base64 非 ASCII 异常、关闭日志流重开等，均带真实场景回归测试。

## 4. 社区热点

- **Issue #5908**（4 条评论，今日讨论最多）`feat(webui): show live tokens/sec while streaming a reply`（@coinwh，9/24 创建，9/26 更新）
  链接：https://github.com/HKUDS/nanobot/issues/5908
  诉求：WebUI 流式回复时缺少实时 tokens/sec 指标，用户无法判断模型是正常运行还是卡死。这是典型的可观测性需求，反映用户对长回复场景下性能感知的关注。目前无对应 PR，属于易于上手的 good-first-issue 类任务。
- **Issue #5903**（3 条评论，今日仍在更新）飞书渠道空闲压缩后，内部 session-checkpoint 标记消息（"Continue the active task..."）被当作普通聊天消息发送给用户。涉及 `_hidden` 消息持久化逻辑，暴露了内部协议消息与用户可见消息的隔离不严。
  链接：https://github.com/HKUDS/nanobot/issues/5903

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | Issue/PR | 状态 |
|---|---|---|---|
| 高（p1） | cron 定时任务使用当前 UTC 偏移而非完整时区规则，跨 DST 时段错位一小时 | PR #5922 | fix PR 待合并 |
| 高（可用性） | Agent 陷入 sudo 授权死循环，达到最大迭代后仍执着于失败的命令，**完全不可用** | Issue #5924 | ⚠️ 无 fix PR，需关注 |
| 高（核心） | 持续目标空闲时自动续跑，重复回复直至耗尽迭代预算 | PR #5257 | fix PR 待合并（8/05 起） |
| 中 | 飞书渠道泄漏内部 checkpoint 消息给用户 | Issue #5903 | 无 fix PR |
| 中 | 工具参数 JSON Schema 联合类型被错误强转/拒绝 | PR #5918 | fix PR 待合并 |
| 中 | 图片 base64 含非 ASCII 时 ValueError 逃逸，MCP 整条响应被标记 malformed | PR #5923 | fix PR 待合并 |
| 低-中 | Unicode 截断产生替换字符、Windows CRLF 重复、URL 大小写误判、邮件未知字符集中断轮询、关闭日志流可重开、通知布尔误判 | PR #5920/#5925/#5926/#5928/#5921/#5927 | 均 fix PR 待合并 |
| 低 | Napcat 图片 file_size 非数字时被误拒 | PR #5914 | fix PR 待合并 |

**Issue #5924（sudo 死循环）是目前唯一无修复方案的高影响 Bug**，且从描述看还牵涉 Agent 对失败命令的“执念”行为，可能是模型层提示词/循环控制的系统性问题，建议维护者优先分诊。

## 6. 功能请求与路线图信号

- **飞书 bot-to-bot 群消息**（Issue #5929 → PR #5930）：当天提出、当天实现，说明飞书渠道维护者响应积极，大概率尽快合入。多 Agent 协同（bot 互通 + 跳数限制防环路）是明确的方向信号。
- **WebUI 实时 tokens/sec 指标**（Issue #5908）：讨论热度最高但尚无 PR，若被接纳将增强可观测性，可能带动更多 WebUI 性能面板需求。
- **Linear 成员权限管理**（PR #5919 虽已关闭）：反映“管理员集中管理渠道访问权限”的产品诉求，预计会以其他形式回归。
- @2gg-bit 的密集修复系列显示社区对**时区正确性、跨平台（Windows）兼容、Unicode 国际化**等基础质量维度的持续投入，可能预示下个版本的主题是稳定性打磨。

## 7. 用户反馈摘要

- **运行可观测性不足**：用户在流式回复时无法区分“慢”与“卡死”（#5908），说明重度用户已将 NanoBot 用于日常长任务。
- **内部机制对用户不可见性被破坏**：飞书用户收到 "Continue the active task..." 这类系统内部指令，影响信任感（#5903）。
- **长时间自主运行可靠性差**：sudo 死循环（#5924）和空闲自动续跑循环（#5257）都指向同一痛点——Agent 在无人工干预时的自我恢复能力弱，用户需手动重启会话。
- **中文/国际化用户占比较高**：多个 Issue/PR 来自中文用户（邮件字符集、汉字截断、飞书渠道），中文生态是 NanoBot 的核心用户群。

## 8. 待处理积压

- **PR #5257**（创建于 2026-08-05，已近 2 个月，今日仍有更新）：Agent 核心循环的 p2 修复长期未合并，建议维护者给出 review 结论。
  链接：https://github.com/HKUDS/nanobot/pull/5257
- **Issue #5924**（sudo 死循环）：今日新报、0 评论，属可用性级 Bug，尚无维护者回应。
- **Issue #5908 / #5903**：均有 3-4 条评论但无关联 PR，需明确是否排期或打上 help-wanted 标签引导社区认领。
- **12 条待合并 PR** 中有 1 条 p1（#5922 时区修复），建议优先处理。
- **PR #5916 / #5919** 为 CLOSED 而非 MERGED，建议在关闭时说明原因（拒绝/替代方案），避免贡献者流失。

---
*数据来源：GitHub API，统计窗口为过去 24 小时。链接基于 HKUDS/nanobot 仓库。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-09-27

## 1. 今日速览

Zeroclaw 今日保持高度活跃：过去 24 小时 Issues 更新 50 条（新开/活跃 40，关闭 10），PR 更新 50 条（待合并 40，已合并/关闭 10），无新版本发布。社区焦点集中在 **安全（审批门控、RPC 会话隔离）、WhatsApp 渠道功能补齐、以及记忆（Qdrant）召回修复** 三条主线。同时，v0.9.0 核心对等（core-parity）开发线和 #8289 身份认证大栈出现明显推进/收尾迹象，多个大型 stacked PR（#10268–#10321、#8672）已关闭。总体项目健康度良好，贡献者生态多元（新面孔持续提交小规模 fix/docs PR）。

---

## 2. 版本发布

今日无新版本发布。值得注意的是多条 PR（如 #11176）明确标注属于 **v0.9.0 core-parity lane (#11001)**，可推断 v0.9.0 正在密集筹备中。

---

## 3. 项目进展

今日关闭/合并的重要 PR 集中在**多用户认证与身份隔离大栈（#8289）的收尾**：

- **#8672**（已关闭）：multi-user auth providers、permission profiles、principal isolation 的原始大 PR，由 #10321 系列取代 — [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/8672)
- **#10321**（已关闭）：browser PKCE 与跨端 enrollment API（stage 5）— [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10321)
- **#10275**（已关闭）：Nevis/iam_policy 退役重构（stage 6，+316/−1385，净删除量可观）— [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10275)
- **#10274 / #10270 / #10268**（均已关闭）：route-layer 认证、browserless OIDC enrollment、private principal memory — 认证栈各切片陆续落地
- **#8855**（已关闭）：插件 `provides` 合约镜像内置 channel — 插件化架构里程碑 — [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/8855)

待合并侧（详见第 5、6 节）：#11176（RPC 对等 + cron 预审批绕过修复）、#11112（RPC workspace 绑定修复）等安全相关 PR 正在 review 中。

**评价**：认证/隔离栈的关闭标志着 #8289 RFC 走向完成，是本周最大的一步前进；安全修复（cron 预审批、RPC agent 参数）密集出现说明 v0.9.0 前正在做系统性安全清理。

---

## 4. 社区热点

| Issue | 评论 | 主题 |
|---|---|---|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 15 | 维护者 RFC/设计决策队列 tracker — 治理流程本身成为讨论中心，反映决策吞吐是当前瓶颈 |
| [#10977](https://github.com/zeroclaw-labs/zeroclaw/issues/10977) | 5 | WhatsApp 群组创建/邀请（create_room / invite_user），in-progress |
| [#10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922)（已关闭） | 5 | WhatsApp 忽略 suppress_voice 导致自动 TTS，已修复关闭 |
| [#10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793)（已关闭） | 4 | Windows-only 测试三连败（advisory job），已关闭 |
| [#11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036) | 4 | OpenCode big-pickle 403 FreeTierError — 仍在等待复现（needs-repro / needs-author-action） |
| [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) | 4 | daemon 未注册 channel-map factory，P1 + blocked — webhook/cron/SOP 无 channel 可用，架构性问题 |

诉求分析：WhatsApp 渠道是用户最密集的反馈来源（群组、语音路由、mentions、PDF 预览共 5+ 条 issue）；provider 兼容性（OpenCode/Cheaper Inference）反映用户对低成本模型网关的强烈需求。

---

## 5. Bug 与稳定性（按严重程度）

**S0（数据丢失/安全风险）**
- [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) [P1]：cron/heartbeat/headless SOP 等无人值守 turn 无 ApprovalManager，risk-profile 审批静默失效。**Fix in progress：#11149（cron 预审批）+ #11176（RPC 对等）已提交**
- [#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136) [新报，今日]：parallel_tools 下并发 file_edit/file_write 同路径静默丢一个编辑 — **尚无 fix PR，建议维护者优先分派**
- [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966)（已关闭）：git `--attr-source` 绕过审批分类 — 已修复

**P1 高危**
- [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055)：daemon channel-map factory 未注册（status: blocked）
- [#10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778)：多模态图片上限驱逐重写历史并打穿 Anthropic 缓存前缀（性能/成本影响大，in-progress）
- [#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780)：主动 token 预算上下文压缩缺失（keep_recent/collapse_tool_results 失效）— 相关大 PR [#9083](https://github.com/zeroclaw-labs/zeroclaw/pull/9083) review 中
- **#11112**（PR）：RPC 会话未绑定 canonical workspace — 待合并的安全修复

**S2 中等**
- [#10921](https://github.com/zeroclaw-labs/zeroclaw/issues/10921)：Qdrant 时间限界向量召回漏结果 — **已有两个 fix PR 竞争：#11035 与 #11143**（合并工作建议合并）
- [#11059](https://github.com/zeroclaw-labs/zeroclaw/issues/11059) / [#10976](https://github.com/zeroclaw-labs/zeroclaw/issues/10976)：WhatsApp force_voice 失效、mentions 双向损坏
- [#11108](https://github.com/zeroclaw-labs/zeroclaw/issues/11108)：browser/web_search 被错误重写到 shell 工具
- [#11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036)：OpenCode 403（等复现）

---

## 6. 功能请求与路线图信号

- **#11103**：Cheaper Inference 类型化 OpenAI-compatible provider（in-progress + 已接受）— 大概率进入下个版本
- **#10969**：cron/heartbeat jitter 窗口防止整点拥塞（已接受）— 低成本、契合 daemon 稳定性主题，可能进入 v0.9.0
- **#10168**：默认启用 stall watchdog（已接受，P2）— 同上
- **#11074** RFC：search_routes 提示式搜索 provider 路由（对标 model_routes）— 尚在 RFC 阶段，需经 #8692 决策队列
- **#10909**：ZeroCode composer 标准文本编辑（undo/redo 等，in-progress）
- **#10977**：WhatsApp 群组创建（in-progress）— WhatsApp 系列修复持续投入

结合 #11001 v0.9.0 lane，判断下版本重点为：**RPC/HTTP 全面对等、安全审批硬化、渠道补齐**。

---

## 7. 用户反馈摘要

- **WhatsApp 是生产用户主战场**：群管理、语音路由（force/suppress_voice）、mentions、PDF 预览的抱怨集中且具体，说明有真实重度用户在 WhatsApp 上跑 bot。
- **成本敏感**：#10778 缓存前缀失效直接推高 Anthropic API 成本；#10780 上下文压缩缺失影响长会话；OpenCode/Cheaper Inference 需求表明用户追逐低价推理网关。
- **CLI/REPL 体验细节**：#10795 多字节字符 Backspace 删字节 — 中文等 CJK 用户痛点。
- **贡献体验**：新贡献者（@Alix-007、@Leon-SK668、@tunglambk、@joalvaradon 等）持续提交小 PR，且 PR 模板（base branch/scope/blast radius）执行良好，反映项目贡献门槛设计有效。
- **不满点**：#11036 期待复现响应较慢（needs-author-action 多日）；文档缺口（#10212 switch 语法无文档、#10920 示例失效）。

---

## 8. 待处理积压

- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)：决策队列 tracker — RFC 堆积（含 #11074），维护者带宽是瓶颈
- [#11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036)：needs-repro 多日，用户已提供完整报错，建议维护者介入确认
- [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055)：P1 + blocked 状态的架构 bug，阻塞无人值守 channel 工具，需明确 unblock 计划
- [#10008](https://github.com/zeroclaw-labs/zeroclaw/issues/10008)：8 月中旬开出的 P1 egress e2e 测试任务，no-stale 保护但仍未完成
- **PR 竞争**：#11035 vs #11143（Qdrant 修复）、#11139 vs #11114（docs 移动重复）— 建议尽快裁定避免贡献者重复劳动
- **#11136**：今日新报 S0 并发写丢编辑问题，尚无 assignee

---

*数据来源：GitHub API 快照（Issues/PR 更新各 50 条），统计窗口 2026-09-26 ~ 2026-09-27。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-09-27

## 1. 今日速览

Hermes Agent 今日保持高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 32，关闭 18），PR 更新 50 条（待合并 47，仅 3 条合并/关闭），无新版本发布。社区贡献以修复类 PR 为主，聚焦 Windows 安装/更新链路、会话状态管理和 ACP 技能集成三大主题。Windows 平台的更新自毁/误报类 P0/P2 问题密集出现，是当前稳定性最集中的风险面。PR 积压达 47 条待审，评审吞吐明显滞后于提交速度，需维护者关注。

## 2. 版本发布

今日无新版本发布。（Issue 中可见社区已在 v0.21.5+ 修订上运行，说明主干在持续滚动，但未打 tag。）

## 3. 项目进展

今日合并/关闭的 PR 仅 3 条（数据中未标注具体合并项），主干推进主要靠待审 PR 的持续推进，以下为今日更新最活跃的 PR：

- **Windows 无 git 环境更新修复** [#124702](https://github.com/NousResearch/hermes-agent/pull/124702)：让 `hermes update` 复用 PM 暂存的 pinned Git，修复 #124634 的 `[WinError 2]` 失败。
- **Windows e2e 安装矩阵复活** [#124622](https://github.com/NousResearch/hermes-agent/pull/124622)：解决 Windows 测试腿 60 分钟挂死，install/update PR 改跑 4 腿真实 OS 子集——CI 基础设施的重要修复。
- **ACP 技能斜杠命令** [#124774](https://github.com/NousResearch/hermes-agent/pull/124774)：安装的技能出现在 Zed/Buzz/Paseo 等编辑器 `/` 面板并在回合前加载，整合了 #122017、#84512 的长期工作。
- **P0 数据丢失修复** [#124770](https://github.com/NousResearch/hermes-agent/pull/124770)：持久化 override 不再丢弃未回答的用户消息。
- **Anthropic thinking 状态恢复修复** [#123955](https://github.com/NousResearch/hermes-agent/pull/123955)：修复 heartbeat 会话从 state.db 恢复时过期 thinking 块导致的 400。
- **隔离后端不再抢注 host 记录** [#124771](https://github.com/NousResearch/hermes-agent/pull/124771)（#120165）。

整体评估：修复方向正确且社区贡献质量高，但合入节奏慢，47 条 PR 待审是明显瓶颈。

## 4. 社区热点

- **[#95028](https://github.com/NousResearch/hermes-agent/issues/95028)（13 评论，已关闭）**：@andrexibiza 的架构提案 "Authority Execution Layer"，主张十二个问题同源——环境边界（路由、PID、环境变量等）不应跨进程存活。同作者的 **[#95750](https://github.com/NousResearch/hermes-agent/issues/95750) "Refusal Algebra"（9 评论）** 提出后果性操作的类型化语义。两条均已关闭，但反映社区对执行边界/权限模型架构化重构的强烈诉求，值得提炼为路线图输入。
- **[#52339](https://github.com/NousResearch/hermes-agent/issues/52339)（12 评论，已关闭）**：终端更新后 `/Applications/Hermes.app` 版本滞后，用户被 "split-brain" 状态困扰。
- **[#122299](https://github.com/NousResearch/hermes-agent/issues/122299)（10 评论，4 👍）**：kanban 派发在父进程判断 importability 导致裸解释器子进程 `ModuleNotFoundError`，社区共鸣度高。
- **[#122609](https://github.com/NousResearch/hermes-agent/issues/122609)**：自动化探针连续报告 Skills Hub 索引过期 28.1h（上限 26h），文档站新鲜度问题持续未解。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 问题 | Fix 状态 |
|---|---|---|---|
| **P0** | [#123499](https://github.com/NousResearch/hermes-agent/issues/123499)（已关闭） | Windows：更新中断尾部长 `_stop_desktop_processes_locking_build` 杀死自身祖先进程 → 静默整树死亡 + 永久启动循环 | 已关闭，或随更新链修复落地 |
| **P0** | [#124770](https://github.com/NousResearch/hermes-agent/pull/124770) | 未回答的用户消息被 persist override 丢弃（数据丢失） | ✅ 有 PR，待合并 |
| **P2** | [#123463](https://github.com/NousResearch/hermes-agent/issues/123463) | Windows 更新后严格 PID 身份校验误判 gateway 死亡 | 无明确 fix PR |
| **P2** | [#124120](https://github.com/NousResearch/hermes-agent/issues/124120) | launchd 启动的 gateway 无法被 `--multiplex` 迁移确认（命令行识别链断裂） | 无 |
| **P2** | [#124211](https://github.com/NousResearch/hermes-agent/issues/124211) | Bot Chat 永不 fork × 仅创建时应用 toolset → 配置永久漂移 | 无 |
| **P2** | [#120106](https://github.com/NousResearch/hermes-agent/issues/120106) | 本地/远程后端切换丢失所有标签页与会话，双机用户的日常阻断 | 无 |
| **P2** | [#105162](https://github.com/NousResearch/hermes-agent/issues/105162) / [#122190](https://github.com/NousResearch/hermes-agent/issues/122190) | 会话被静默置 `hidden:1` 永久不可见（macOS ⌘T / Windows profile 切换） | 无 |
| **P2** | [#123238](https://github.com/NousResearch/hermes-agent/issues/123238) | 临时 `HERMES_HOME` 重写共享 launcher，删除临时目录后 hermes "变砖" | 无 |
| **P2** | [#123926](https://github.com/NousResearch/hermes-agent/issues/123926) | 插件加载时遍历 `sys.modules` 抛异常，随机子集插件静默失效 | 无 |
| **P2** | [#124762](https://github.com/NousResearch/hermes-agent/issues/124762) | Slack manifest 上限硬编码 50，实际为 25（今日新报） | 无 |

**趋势判断**：Windows install/update 链路（#123463、#123238、#103222 等）与 session `hidden` 状态泄漏是两大重复出现的缺陷簇，与已关闭的 #123499、#52339 同根——与 #95028 的"跨边界状态不可信"架构诊断高度吻合。

## 6. 功能请求与路线图信号

- **多 Surface 会话访问** [#112028](https://github.com/NousResearch/hermes-agent/issues/112028)：Desktop + 移动 dashboard 访问同一会话被拒绝。无直接 PR，但与 session 状态簇相关。
- **ACP 技能暴露**：#124774 已整合 #122017/#84512/#88303 三条同方向 PR，是最接近落地的功能，大概率进入下个版本。
- **Desktop Capabilities 分组批量开关** [#122256](https://github.com/NousResearch/hermes-agent/pull/122256)：直接回应用户痛点，待评审。
- **会话精确选择 Prune** [#108582](https://github.com/NousResearch/hermes-agent/pull/108582)：用户主动要求合并的两项生命周期功能。
- 架构层面（#95028、#95750）虽被关闭，但其诊断与当前缺陷簇高度一致，建议维护者将其纳入重构路线图信号。

## 7. 用户反馈摘要

- **双机/远程用户的挫败感最强**：#120106（"daily blocker"）描述本地 MacBook + Mac mini 远程后端切换即丢失全部工作上下文。
- **macOS 无障碍回归影响真实工作流**：#118271 反映听写工具（ChatGPT/Codex 桌面版等）无法向 composer 输入文字，对依赖口述输入的用户是硬阻断。
- **更新可靠性是信任问题**：Windows 用户反复遭遇"更新成功却报失败"（#107685）、"更新后应用变砖"（#123499），多条 issue 出现"silent death/permanent boot loop"等严重表述。
- **Bot Mode 长会话设计缺陷**：#124211、#118628 显示单会话永生设计与会话级配置/中断语义冲突。
- **正面信号**：issue 报告质量普遍很高（带 root cause 分析），外部贡献者提交了含 CI 修复在内的深度 PR，社区工程化参与度优秀。

## 8. 待处理积压

- **PR 评审积压（47 条待合并）**：最突出的问题。长期滞留的高价值 PR 包括 [#84512](https://github.com/NousResearch/hermes-agent/pull/84512)（8/12 提交）、[#88303](https://github.com/NousResearch/hermes-agent/pull/88303)（8/17）、[#89865](https://github.com/NousResearch/hermes-agent/pull/89865)（8/19）、[#107163](https://github.com/NousResearch/hermes-agent/pull/107163)（terminal cwd 自愈，9/10）、[#104126](https://github.com/NousResearch/hermes-agent/pull/104126)（Bedrock 定价，9/6）。建议优先评审 ACP 技能簇以合并去重（#124774 / #122017 / #84512 / #88303 四条指向同一能力）。
- **长期未解 Issues**：[#72132](https://github.com/NousResearch/hermes-agent/issues/72132)（ARM32 树莓派更新，6/25 至今）、[#120106](https://github.com/NousResearch/hermes-agent/issues/120106)（双机切换，用户称日常阻断）、[#122609](https://github.com/NousResearch/hermes-agent/issues/122609)（Skills 索引 watchdog 连续两日报 degraded，需修 `.github/workflows/skills-index.yml` 的 cron 链路）。
- **needs-decision 标签**：#124120、#123499 等需维护者决策，Windows gateway 身份识别方案应统一设计而非逐 case 修补。

---
*数据来源：GitHub API，统计窗口 2026-09-26 至 2026-09-27。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-09-27

## 1. 今日速览

PicoClaw 今日整体活跃度偏低：过去 24 小时共 1 条 Issue 更新、3 条 PR 更新，无新版本发布。社区贡献仍以外部 PR 为主，值得关注的是一条长期挂起的 Web UI 性能修复 PR（#3347）重新出现活跃信号，同时两条历史 PR（#3310、#1349）被批量关闭/清理，显示维护者在进行积压整理。QQ 渠道相关问题是当前用户侧最集中的痛点。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

**今日 PR 关闭情况（2 条，无合并记录）：**

- **#1349 已关闭** — `feat(qq): support parsing and replying to more attachment types`（[链接](https://github.com/sipeed/picoclaw/pull/1349)）
  由 @aishannon 于 3 月提交，功能涵盖：QQ 频道表情结构解析、语音/图片/视频/文件消息接收处理、本地附件回复（先上传后发送）、Markdown 消息优先降级策略。该 PR 挂起超过 6 个月后被关闭，属于功能较完整的社区贡献，其被关闭（而非合并）值得留意——可能因长期冲突或维护方向调整。此功能与今日新报的 Issue #3394（QQ 接口未更新）存在关联，QQ 渠道能力或面临重构。

- **#3310 已关闭** — `Feat/auto pr`（[链接](https://github.com/sipeed/picoclaw/pull/3310)）
  机器人自动生成的 PR，属常规清理。

**仍在等待的 PR：**

- **#3347 [stale] 仍开放** — `fix laggy interface`（[链接](https://github.com/sipeed/picoclaw/pull/3347)）
  修复聊天区域大量文本时 Web UI 卡顿的问题，作者已在桌面与移动端 Brave 浏览器验证。今日有更新活动（可能为 stale 标记触发），尚待维护者评审合并。

**小结**：今日为“清理日”而非“推进日”，净功能增量有限；QQ 渠道能力因 #1349 关闭反而存在能力缺口风险。

## 4. 社区热点

今日唯一活跃 Issue 为 **#3394**（[链接](https://github.com/sipeed/picoclaw/issues/3394)）：

> [BUG] QQ 机器人的接口更新了，但 QQ 聊天通道的接口似乎没有更新，希望修复

- 作者 @qinglt，0 评论、0 👍，刚开不久暂未形成讨论
- **诉求分析**：QQ 官方机器人 API 已更新，而 PicoClaw 的 QQ 聊天通道适配滞后，导致用户无法正常使用 QQ 渠道。这与 #1349 被关闭的时间点叠加，表明 QQ 渠道是当前技术债较重的区域，国内用户（QQ 为主要 IM 通道之一）受影响面可能较大。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 中高 | [#3394](https://github.com/sipeed/picoclaw/issues/3394) QQ 聊通通道接口未跟进 QQ 机器人 API 更新 | 新报，**尚无 fix PR** |
| 中 | [#3347](https://github.com/sipeed/picoclaw/pull/3347) 长文本聊天时 Web UI 卡顿 | 已有社区 fix PR，待评审合并 |

无崩溃/回归类报告。

## 6. 功能请求与路线图信号

- **QQ 渠道现代化**：#3394 实质上是接口升级请求 + Bug 报告的组合。结合 #1349（富媒体消息支持）被关闭，下一阶段可能出现一个统一的 QQ 渠道重构 PR，覆盖新 API 适配 + 附件消息能力。
- **Web UI 性能**：#3347 若被合并，将直接改善长会话体验，属低成本高感知的修复，建议优先纳入下个版本。

## 7. 用户反馈摘要

- 用户（@qinglt）依赖 QQ 作为聊天通道，接口不兼容直接阻断使用，反映**国内 IM 渠道适配的时效性**是用户核心关切。
- #3347 背后的用户场景：长文本对话（大量输出文本堆积）导致界面卡顿，说明部分用户进行**长时间/高吞吐量会话**，Web 前端渲染性能是实际瓶颈。
- #1349 的功能诉求（语音/图片/视频/文件收发）表明用户希望 PicoClaw 不止于文本，向**富媒体 AI 助手**演进。

## 8. 待处理积压

- **[#3347](https://github.com/sipeed/picoclaw/pull/3347)**（8 月 27 日创建，已近 1 个月）：有效的 UI 性能修复，已被标记 stale，存在被自动关闭风险，**建议维护者优先评审**。
- **[#3394](https://github.com/sipeed/picoclaw/issues/3394)**：今日新开，需尽快确认复现并回应，避免 QQ 渠道用户流失。
- **#1349 的功能去向**：关闭后未合并，建议维护者在 issue/roadmap 中说明富媒体消息支持的后续计划，管理社区预期。

---
*数据来源：GitHub API（过去 24 小时窗口）。整体健康度：中等——社区贡献意愿存在，但 PR 评审响应偏慢、渠道适配滞后是当前主要风险点。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-09-27

## 1. 今日速览

NanoClaw 今日保持高度活跃，过去 24 小时 PR 更新达 27 条（待合并 23 条，合并/关闭 4 条），Issue 新增/活跃 4 条，无新版本发布。核心贡献者 @barnuri 在 9 月 26 日集中提交了十余个高质量、遵循贡献规范的 feature/refactor PR，形成了一条围绕“卡片渲染、可观测性、定时任务、provider 扩展性”的完整功能链路，且多个 PR 存在明确的堆叠与合并顺序依赖，显示项目正处于一个大型特性周期的集中交付阶段。同时，@bmultini 报告的三个升级/安全问题 Issue 值得维护者优先关注。

## 2. 版本发布

今日无新版本发布。（最新代码仍处于 v2.4.0 之后的主线开发阶段）

## 3. 项目进展

今日 4 条 PR 被关闭，其中两条为重要变更被终止或改道：

- **#3895 [CLOSED]** `fix(agent-runner): keep send_card url pattern parseable by llama.cpp grammars` — 修复 `send_card` 的 `LINK_ACTION_SCHEMA.url.pattern` 使用 `\s`/`\S` 转义导致 llama.cpp JSON-schema-to-grammar 转换失败、所有携带该工具的请求被拒的问题。已关闭（可能并入后续方案）。链接：nanocoai/nanoclaw PR #3895
- **#3025 [CLOSED]** 提升 agent SDK 32000 输出 token 上限的容器修复，7 月提交、今日关闭，属于长期排队后的清理。链接：nanocoai/nanoclaw PR #3025
- **#2949 [CLOSED]** `/add-litellm` 最小模型路由 skill（本地服务器 + 可选托管），同样长周期后关闭，显示该方向可能另有实现计划。链接：nanocoai/nanoclaw PR #2949

待合并管线（23 条）中值得注意的推进方向：

- **卡片渲染三部曲**：#3926（chat-sdk-bridge 增加 `postCard` 钩子）→ #3927（`send_card` 支持可折叠 section）→ #3940（Slack Block Kit 折叠容器），依赖链明确，是一次系统性解决“长日志刷屏”的架构改进。
- **可观测性与自愈**：#3934（operational error sink seam）、#3935（`/add-error-reports` 故障上报到聊天）、#3939（`/add-turn-traces` 逐轮 agent 追踪入中央 DB）。
- **定时任务与降本**：#3931（`minimalContext` provider 选项）+ #3932（`/add-lean-tasks` 最小上下文任务运行）、#3933（`/add-flows` 图形化 pre-task 脚本）、#3929（`/add-scheduled-update` 无人值守升级）。
- **生态扩展**：#3925（provider-wrapper seam，支持按查询换模型/重试）、#3930（OpenCode 环境统一解析）、#3937（`/add-repo-self-edit` 管理员审批的自我源码编辑）、#3938（`/add-voice-replies` 离线语音回复）、#3944（`/add-typesafe-tool` 通过 OpenRouter 调用 Jev）、#3928（`/contribute-upstream` fork 回馈上游）。

**评估**：待合并队列规模大且结构化（多为 stacked PR），功能密度高，项目在“可扩展 seam + skill 化交付”路线上快速推进；但 23 条待合并也意味着维护者审查压力显著。

## 4. 社区热点

- **#2520 [OPEN]** Signal Protocol 会话密钥材料泄漏到日志（评论 1 条，自 5 月持续活跃至昨日）：`logs/nanoclaw.log` 在每次 WhatsApp 会话关闭时累积包含 `privKey`/`rootKey`/`chainKey` 的 `SessionEntry` dump，用户诉求是在宿主启动侧统一过滤。这是一个长期未关闭的安全敏感 Issue。链接：nanocoai/nanoclaw Issue #2520
- **#3941 / #3942 / #3943（均 2026-09-26 新开，@bmultini）** 三连发升级链路问题，详见下节，今日社区讨论焦点几乎全部集中在升级可靠性与依赖安全。
- PR 侧，@barnuri 的系列提交（#3925–#3940）构成今日讨论主线，社区贡献结构呈现“单核心贡献者高频交付 + 维护者审查”模式。

## 5. Bug 与稳定性（按严重程度）

1. **🔴 高 — 安全：WhatsApp 依赖存在消息伪造漏洞（#3941）** `channels` 分支仍固定 `@whiskeysockets/baileys@7.0.0-rc.9`，受 GHSA-qvv5-jq5g-4cgg（message spoofing）影响，且每次 `/update-nanoclaw` 会重新固定该版本。无修复 PR。链接：nanocoai/nanoclaw Issue #3941
2. **🔴 高 — 安全：日志泄漏会话密钥（#2520）** 见上文，长期未修复，无 fix PR 关联。链接：nanocoai/nanoclaw Issue #2520
3. **🟠 中 — 回归：升级后 `prepare` 崩溃 MODULE_NOT_FOUND（#3943）** v2.4.0 从 v2.3.0 按官方 `update-nanoclaw` skill 升级后，controller 引入了文档未覆盖的 `setup/gateways/` 及 npm 依赖，疑似 #3750 引入的回归。无 fix PR。链接：nanocoai/nanoclaw Issue #3943
4. **🟠 中 — 供应链：skill refresh 丢失 git 依赖 integrity hash（#3942）** `/update-nanoclaw validate` 期间 skill 刷新重写 `pnpm-lock.yaml`，丢弃 git-hosted 依赖（libsignal-node tarball）的 `integrity` 校验，破坏可复现安装与完整性保障。无 fix PR。链接：nanocoai/nanoclaw Issue #3942
5. **🟡 已处理：llama.cpp grammar 兼容（#3895）** `send_card` schema 导致 llama.cpp 模型全部请求失败，fix PR 已存在但今日被关闭，需确认后续去向。链接：nanocoai/nanoclaw PR #3895

## 6. 功能请求与路线图信号

今日新 Issue 以缺陷为主，但待合并 PR 阵容透露出清晰的下一版本主题：

- **v2.5 候选主线**：可折叠卡片（#3926/#3927/#3940）、故障自报告（#3934/#3935）、逐轮追踪（#3939）、语音回复（#3938，回应长期语音需求 #2003/#2317/#2459）。
- **降本与本地化**：`minimalContext`（#3931）+ `/add-lean-tasks`（#3932）明确面向小模型/本地模型场景，与 #3944（OpenRouter/Jev）和已关闭的 #2949（LiteLLM）共同指向“多模型、低成本运行”路线图。
- **自我维护闭环**：`/add-scheduled-update`（#3929）+ `/add-repo-self-edit`（#3937）+ `/contribute-upstream`（#3928）组合表明项目正朝“自托管、自升级、自修复”的智能体运维形态演进——直接回应了今日 #3941–#3943 暴露的升级链路脆弱性。

## 7. 用户反馈摘要

- **升级即断供的挫败感**：@bmultini 的三条 Issue 均附极详细的复现步骤（精确到 commit、pnpm 版本），反映重度自托管用户对 `/update-nanoclaw` 流程“官方文档与实际交付物不一致”的不满——升级本应是低风险操作，却接连遭遇崩溃、锁文件被破坏、漏洞版本被重新钉死。
- **安全意识的用户群**：密钥日志泄漏（#2520）与 GHSA 漏洞钉死（#3941）说明核心用户群对端到端加密（WhatsApp/Signal）场景的安全卫生有较高要求，且愿意长期跟进。
- **正面信号**：@barnuri 系列提案中大量“Problem/Fix/Use case”结构化描述，均源自真实运维痛点（长日志刷屏、crash-loop 无感知、任务上下文成本高、fork 难以回馈上游），显示深度用户正以“seam + skill”方式反哺上游，生态黏性良好。

## 8. 待处理积压

- **#2520（密钥泄漏，5 月开立，已 4 个月未关闭）**：安全敏感且持续被用户确认，建议维护者优先落地启动侧日志过滤。
- **#3941 / #3942 / #3943（昨日新开，0 回复）**：升级链路三连缺陷，直接影响所有带 WhatsApp 的 v2.3→v2.4 升级用户，建议在下一次版本前给出修复或文档缓解方案。
- **PR 审查积压**：23 条待合并 PR，其中 #3926→#3927→#3940 存在合并顺序依赖，任一环节阻塞将拖累整条链路；#3944 标注“合并即落地 #3848"，需注意 stacked PR 的合并副作用。
- **长期 PR 清理已完成**：#3025（7 月）、#2949（7 月）今日关闭，说明维护者在做积压清理，健康度信号正面。

---

*数据来源：NanoClaw GitHub Issues/PRs（统计窗口 2026-09-26 ~ 2026-09-27）。链接因源数据中仓库名（nanocoai/nanoclaw）与 qwibitai/nanoclaw 不一致，请以实际仓库为准访问对应编号。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报（2026-09-27）

## 1. 今日速览

NullClaw 今日整体活跃度**中等偏低**：过去 24 小时无新 Issue、无版本发布，但有 **5 条 PR 活跃更新**（全部处于 OPEN 待合并状态，无合并/关闭记录）。值得注意的是，全部 5 条 PR 均出自同一作者 @vernonstinebaker，且以修复类（fix）为主，覆盖 memory、providers、CLI、agent、Discord 五个模块，显示项目处于**集中修 bug 阶段**而非功能扩张期。社区讨论侧（Issue/评论）今日基本静默，暂无用户侧热点。项目健康度评估：代码层面持续有维护，但缺少 Issue 侧互动与 Release 节奏，需要关注合并节奏。

## 2. 版本发布

今日无新版本发布，最新 Releases 为空。省略。

## 3. 项目进展

今日**无 PR 被合并或关闭**，5 条 PR 均处于待合并状态，但其中两条有明显的更新活动：

- **PR #1011**（2026-09-26 创建并更新）：[fix(agent): free parsed tool call when a later allocation fails](https://github.com/nullclaw/nullclaw/pull/1011) —— 修复 `parseXmlToolCalls` 中追加列表失败时 `name`/`arguments` 的内存泄漏问题，并补齐错误路径中对 `tool_call_id` 的处理，抽象出 `freeParsedToolCall` 复用释放逻辑。属于 C 层内存管理健壮性改进。
- **PR #1010**（2026-09-26 创建并更新）：[fix(discord): ignore messages the bot itself posted](https://github.com/nullclaw/nullclaw/pull/1010) —— 修复 Discord 入口在 `allow_bots = true` 时机器人回复被回灌给 agent、形成自触发死循环的严重问题。
- **PR #1005**、**#1004**、**#970** 于 09-26 有更新（详见第 5 节）。

**整体判断**：项目今日推进以稳定性修复为主，无功能性跃迁；合并窗口尚未打开，建议维护者尽快 review 这批修复以形成下一个 patch 版本。

## 4. 社区热点

今日无活跃 Issue、PR 评论数据缺失（评论数 undefined/0），无 👍 反应记录，**社区讨论侧无热点**。间接信号：PR 均为单人贡献，提示当前开发高度集中，社区参与度有待提升。

## 5. Bug 与稳定性

按严重程度排列（均为今日/近日活跃的 fix PR，尚无一条被合并，**即所有 Bug 均已有 fix PR 但未落地**）：

| 严重度 | 问题 | PR | 状态 |
|---|---|---|---|
| 🔴 高 | **Discord 自触发死循环**：`allow_bots=true` 时 bot 自身回复被回灌 agent，每轮触发下一轮，可能造成无限调用消耗 | [#1010](https://github.com/nullclaw/nullclaw/pull/1010) | 有 fix，待合并 |
| 🔴 高 | **归档记忆污染实时上下文**：归档会话分片被召回进 prompt 与 `memory_recall`，模型将当前用户消息当作旧历史；会话搜索 `LIMIT` 先于会话过滤，导致全局归档行遮蔽当前会话 | [#1005](https://github.com/nullclaw/nullclaw/pull/1005) | 有 fix，待合并 |
| 🟡 中 | **内存泄漏**：`parseXmlToolCalls` 在 append 失败或后续分配失败时泄漏 `name`/`arguments` | [#1011](https://github.com/nullclaw/nullclaw/pull/1011) | 有 fix，待合并 |
| 🟡 中 | **提供商错误信息不可见**：非 2xx 响应体被释放，无法看到服务端拒绝原因（如模型不支持 tools），需抓包排查 | [#1004](https://github.com/nullclaw/nullclaw/pull/1004) | 有 fix，待合并 |
| 🟢 低 | **CLI REPL 不支持方向键**：箭头键、历史导航、光标移动等以控制字符形式打印 | [#970](https://github.com/nullclaw/nullclaw/pull/970)（已挂起近 3 个月） | 有 fix，待合并 |

## 6. 功能请求与路线图信号

今日无新增功能请求 Issue。从现有 PR 可推断的路线图信号：

- **可观测性改进**（#1004）：脱敏日志提供商错误体，方向是降低部署排障成本，可能成为后续标配。
- **CLI 交互体验**（#970）：零分配行编辑器 + POSIX raw mode，表明维护者有意提升本地 agent REPL 的可用性。
- **多平台 ingress 健壮化**（#1010）：Discord 集成的防回环处理，暗示 Discord 是重要部署渠道，类似防护可能推广到其他平台。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼用户反馈。从 PR 描述反推的隐性痛点：

- 部署 Discord 集成且开启 `allow_bots` 的用户可能遭遇过 bot 自回复风暴（#1010）。
- 使用不支持 tools 的模型的用户曾因错误信息被吞而难以定位配置问题（#1004 明确提到 "invisible without a packet capture"）。
- 本地 CLI 用户长期受方向键输入体验困扰（#970 自 6 月底挂起至今）。

## 8. 待处理积压

- **PR #970**（[fix(cli): handle arrow keys in agent REPL](https://github.com/nullclaw/nullclaw/pull/970)）：创建于 2026-06-29，**悬置近 3 个月**后于 09-26 更新，是当前最久的待合并 PR，建议维护者优先 review。
- 全部 5 条 PR 无评论互动、无 review 迹象，且均由 @vermonstinebaker 一人提交——单人通道可能成为合并瓶颈，建议引入第二位 reviewer。
- 鉴于 #1010（自触发循环）与 #1005（记忆污染）影响面较大，建议尽快合并并发布一个 patch 版本，避免用户在等待期踩坑。

---
*数据来源：NullClaw GitHub 仓库，统计窗口为 2026-09-26 至 2026-09-27。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-09-27

## 1. 今日速览

IronClaw 今日整体活跃度处于**低位平稳**状态：过去 24 小时仅 1 条 Issue 更新、1 条 PR 更新，无新版本发布，无代码合并。唯一的活跃信号是 CI 机器人的例行知识图谱刷新 PR 于今日更新，表明主干开发节奏平静，可能处于版本间歇期或功能开发周期中。社区侧有一条有价值的功能提案（#8112，NEARA launchpad 集成），但尚未引发讨论。整体看，项目维护正常但缺乏高热度交互，健康度尚可、活跃度偏弱。

## 2. 版本发布

今日无新版本发布。最新 Releases 记录为空，建议关注主干分支的变更积累情况。

## 3. 项目进展

今日**无 PR 合并或关闭**，项目功能面无实质推进。

唯一的 PR 动态：
- **#7988 [OPEN] chore(agents): refresh codebase knowledge graph**（@ironclaw-ci[bot]，2026-08-29 创建，今日更新）
  链接：https://github.com/nearai/ironclaw/pull/7988
  这是每夜 `Codebase Graph Refresh` 工作流自动生成的例行刷新，从默认分支重新生成代码库记忆的 bootstrap 快照。标签为 `size: XS, risk: low`，属于低风险维护性变更，但已开放近一个月仍未合并，建议维护者及时审查合入，避免知识图谱快照持续滞后于主干。

## 4. 社区热点

今日无高热度讨论，所有 Issue/PR 评论数均为 0。

最值得关注的新议题：
- **#8112 [OPEN] Feature: NEARA hosted-MCP extension (keyless NEAR token launchpad tools)**（@iwaterheater，2026-09-26 创建）
  链接：https://github.com/nearai/ironclaw/issues/8112
  提案动机：IronClaw agents 目前无法操作 NEAR 链上的代币发射平台（新币列表查询、报价、发射、交易）。用户希望接入 [NEARA](https://neara.fun)（NEAR 主网 launchpad，代币固定 10 亿供应量，全部以锁定集中流动性池形式开放在 Rhea DCL 上），以 hosted-MCP 扩展、keyless 的方式为 agent 提供相关工具。该诉求反映出用户期望 IronClaw 在 **DeFi/链上交易代理能力**方向扩展，是明确的功能路线图信号。

## 5. Bug 与稳定性

今日**无新增 Bug、崩溃或回归报告**，稳定性面无异常信号。

## 6. 功能请求与路线图信号

| 功能请求 | 状态 | 可能性分析 |
|---|---|---|
| [#8112] NEARA hosted-MCP 扩展（keyless NEAR token launchpad 工具） | OPEN，0 评论 | 今日新开，尚无维护者回应。项目本身即定位 NEAR 生态 AI 基础设施，方向契合度高；hosted-MCP 扩展模式若已有先例，落地概率较大，值得优先评估 |

当前无关联 PR 对应此需求，短期内未必进入下一版本，但建议纳入 roadmap 评估。

## 7. 用户反馈摘要

今日可提炼的用户反馈样本极少（无评论互动）。从 #8112 的描述可看出：
- **痛点**：IronClaw agent 在 NEAR 链上资产操作场景能力缺失，用户无法让 agent 参与新代币的发现、发射与交易闭环。
- **期望**：希望以 keyless、hosted-MCP 的低门槛方式扩展链上工具，而非要求用户自行管理私钥/本地 MCP 部署。

## 8. 待处理积压

- **PR #7988**（[链接](https://github.com/nearai/ironclaw/pull/7988)）：CI 自动刷新 PR 已挂起约 **29 天**（2026-08-29 至今）未合并。虽为 XS/low-risk，但长期未合会导致 agent 的代码库知识图谱与主干脱节。**建议维护者尽快处理。**
- **Issue #8112**（[链接](https://github.com/nearai/ironclaw/issues/8112)）：新开功能提案，需维护者初步响应（打标签、指派或给出评估意见），避免社区提案冷置。

---

*数据来源：IronClaw GitHub 仓库 2026-09-26 至 2026-09-27 窗口数据。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：2026-09-27** | 仓库：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

- 今日项目呈现「清仓式整理 + 新功能开发」并行态势：24 小时内集中关闭了 **6 条 Issues 和 10 条 PR**，其中大部分为长期挂起的社区贡献（多为 `[stale]` 状态），维护团队进行了明显的积压清理。
- 核心开发者 [@fisherdaddy](https://github.com/fisherdaddy) 持续高强度输出，今日新开 **Word 文档编辑功能** 大型 PR（#2770），覆盖 renderer/main/openclaw/skills/artifacts 等多个模块，是当前最活跃的开发主线。
- 无新版本发布，项目仍处于功能迭代阶段。
- 整体健康度：**中等偏上**——主干开发活跃，但社区 PR 处理周期偏长（3-4 月前提交的 PR 今日才批量关闭），且未附明确说明，社区贡献者体验有待改善。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

### 新开待合并 PR（2 条）
| PR | 内容 | 说明 |
|---|---|---|
| [#2770](https://github.com/netease-youdao/LobsterAI/pull/2770) | **Feat: Word 文档编辑** | 今日新开，横跨 renderer/main/openclaw/skills/artifacts/docs/build 七个区域，是重磅功能级 PR，暗示产品正从对话助手向文档生产力工具扩展 |
| [#2769](https://github.com/netease-youdao/LobsterAI/pull/2769) | fix(dev): Vite watch 误忽略 renderer artifact 源码 | 修复 `**/artifacts/**` 排除规则误伤 `src/renderer/components/artifacts/`，导致 artifact 面板和 Markdown 编辑器无法热更新的开发体验问题 |

### 今日关闭的 PR（10 条，多为 stale 批量清理）
关闭的 PR 集中在两类：

**维护者侧的修复/重构**（近日完成使命）：
- [#2767](https://github.com/netease-youdao/LobsterAI/pull/2767)：将单体 `markdownLivePreview` 拆分为 structure/commands/widgets 三个模块，为 Markdown 实时编辑引擎的长期可维护性铺路
- [#2768](https://github.com/netease-youdao/LobsterAI/pull/2768)：openclaw gateway 启动超时扩展

**3 月底的社区贡献 PR**（今日统一关闭，未合并，标注 stale）：
- [#1049](https://github.com/netease-youdao/LobsterAI/pull/1049)（并发 401 双重消费 refreshToken）、[#1052](https://github.com/netease-youdao/LobsterAI/pull/1052)（openclaw 两处竞态锁死会话）、[#1054](https://github.com/netease-youdao/LobsterAI/pull/1054)（Modal 关闭按钮不可点）、[#1056](https://github.com/netease-youdao/LobsterAI/pull/1056)（移除生产代码 console.log）、[#1057](https://github.com/netease-youdao/LobsterAI/pull/1057)（过滤 thinking blocks）、[#1058](https://github.com/netease-youdao/LobsterAI/pull/1058)（定时任务 JSONL 写入失败数据丢失）、[#1059](https://github.com/netease-youdao/LobsterAI/pull/1059)（Windows 默认浏览器检测）、[#1065](https://github.com/netease-youdao/LobsterAI/pull/1065)（定时任务绑定已有会话）

> ⚠️ 这些 PR 描述详尽、质量不低，关闭时是否已在其他 PR 中落地尚不明确，建议关注对应 Issue 是否复现。

**整体判断**：项目本周主要推进了 Markdown 引擎重构、openclaw 启动稳定性与 Word 文档编辑新能力，属于功能性大步前进。

---

## 4. 社区热点

今日无新开 Issue、无高热度讨论。6 条被关闭的 Issues（均创建于 2026-03-30，今日标记 stale 关闭）曾反映的核心诉求：

1. **认证稳定性**：[#1048](https://github.com/netease-youdao/LobsterAI/issues/1048) — `fetchWithAuth` 绕过 `refreshOnce` 去重，并发 401 导致强制登出（涉及账号体系核心链路）
2. **会话可靠性**：[#1051](https://github.com/netease-youdao/LobsterAI/issues/1051) — 两处竞态导致 AI 会话永久无法启动，只能重启应用
3. **UI 可用性**：[#1053](https://github.com/netease-youdao/LobsterAI/issues/1053) — Electron 拖拽区拦截 Modal 关闭按钮点击
4. **配置灵活性**：[#1061](https://github.com/netease-youdao/LobsterAI/issues/1061) — 网关端口与 Openclaw 冲突，无法修改（用户 @fuckjavaer）
5. **数据一致性**：[#1062](https://github.com/netease-youdao/LobsterAI/issues/1062) — 定时任务修改时间后标题不同步（必现）
6. **信息噪音**：[#1066](https://github.com/netease-youdao/LobsterAI/issues/1066) — 心跳/系统对话未过滤，干扰用户

---

## 5. Bug 与稳定性

今日无新报 Bug。历史 Bug 关闭状态梳理（按原严重程度排序）：

| 严重程度 | 问题 | 是否有 fix PR | 状态 |
|---|---|---|---|
| 🔴 高 | 并发 401 强制登出（#1048） | 有（#1049，已关闭未合并） | ⚠️ 关闭但修复落地情况存疑 |
| 🔴 高 | 竞态导致会话永久锁死（#1051） | 有（#1052，已关闭未合并） | ⚠️ 同上 |
| 🟡 中 | Modal 按钮不可点（#1053） | 有（#1054） | 已关闭 |
| 🟡 中 | 定时任务标题不符（#1062） | 未见对应 PR | ⚠️ 未明确修复 |
| 🟢 低 | 心跳对话噪音（#1066）、端口冲突（#1061） | 未见 | 未明确修复 |

---

## 6. 功能请求与路线图信号

- **Word 文档编辑（PR #2770）**：跨 7 个模块的大型功能 PR，是最明确的路线图信号——LobsterAI 正在扩展 artifacts 能力（此前已有 Markdown 实时编辑引擎及 #2767 的模块化重构），下一步或将支持完整 Office 文档处理，可能成为下一版本主打特性。
- **定时任务绑定已有会话（#1065，已关闭）**：用户希望定时任务复用 cowork session 而非每次隔离新建，这一需求方向值得在后续版本中重新评估。
- **网关端口可配置（#1061）**：与 Openclaw 生态共存场景的刚需，建议纳入配置项规划。

---

## 7. 用户反馈摘要

- **痛点集中区**：① 应用稳定性（登录被踢、会话锁死只能重启）是用户最深的痛点；② 桌面端细节体验（Modal 点击穿透、win10 下浏览器检测错误）；③ 定时任务功能的完成度不足（标题不同步、数据迁移可能丢记录）。
- **使用场景**：用户将 LobsterAI 与 Openclaw 搭配使用（出现端口冲突），并依赖定时任务 + cowork session 做自动化，说明产品在「自动化代理执行」场景已有真实粘性。
- **社区参与度**：贡献者（@MaoQianTu、@leedalei、@guanxwei 等）提交的 PR 分析深入、修复方案完整，社区技术质量较高，但贡献等待 6 个月后被批量关闭，可能挫伤积极性。

---

## 8. 待处理积压

| 项目 | 问题 | 建议 |
|---|---|---|
| [PR #2770](https://github.com/netease-youdao/LobsterAI/pull/2770) | Word 文档编辑大型 PR，待评审 | 优先安排 review，避免大型 PR 长期积压 |
| [PR #2769](https://github.com/netease-youdao/LobsterAI/pull/2769) | Vite watch 修复，待合并 | 小型修复，可快速合入 |
| Issue #1048 / #1051 对应修复 | 社区 PR 已关闭但问题是否在主线修复**不明确** | 建议维护者在 Issue 关闭时补充修复落地说明，或邀请报告者验证 |
| Issue #1062 / #1061 / #1066 | 关闭时未见对应主线修复 PR | 核实是否已在近期重构中顺带解决，否则有回归风险 |

---

*数据来源：GitHub API，统计窗口为 2026-09-26 至 2026-09-27。本报告由自动化流程生成，人工复核建议关注 stale 关闭项的修复落地情况。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-09-27）

## 1. 今日速览

Moltis 今日整体活跃度较低。过去 24 小时无 Issue 新增或活跃（0 开 / 0 关），无新版本发布，仅新增 1 条待合并 PR（#1285，文档类更新）。项目处于平稳维护期，今日动态以生态推广（第三方部署渠道接入文档）为主，无代码功能或稳定性方面的变更。社区讨论热度为零，短期内无版本发布信号。

## 2. 版本发布

今日无新版本发布，最新 Releases 无更新，省略。

## 3. 项目进展

今日无已合并或关闭的 PR，项目核心代码进展为零。

唯一的开放 PR 为：

- **PR #1285 [OPEN] docs: add RepoCloud one-click deploy button**（作者：@cosark，创建于 2026-09-26）
  链接：https://github.com/moltis-org/moltis/pull/1285
  内容：在 README.md 的 Cloud Deployment 表格中新增 RepoCloud 一键部署选项，按钮样式与 DigitalOcean 保持一致，链接指向 `https://repocloud.io/details/Moltis/`。

  分析：该 PR 属于低风险的文档改进，有助于降低用户云端部署门槛、拓宽分发渠道，属于生态友好型贡献。若维护者审核通过，预计很快合并，但对项目功能本身无实质推进。

## 4. 社区热点

今日无任何活跃 Issue 或带评论的 PR，社区讨论热度为零，无热点可提炼。PR #1285（链接同上）是今日唯一动态，其背后诉求是第三方部署平台（RepoCloud）希望借助 Moltis 的 README 入口导流，属于商业生态合作信号，而非用户社区自发讨论。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题，无需要按严重程度排列的条目，也无关联 fix PR。当前无证据表明存在稳定性隐患。

## 6. 功能请求与路线图信号

今日无新增功能请求 Issue。若放宽至今日唯一 PR 解读：

- **一键部署渠道扩展**（PR #1285）：虽然非功能代码，但反映项目部署便捷性仍是生态关注点。结合 Moltis 作为 AI 助理项目的定位，“部署易用性” 可能是潜在路线图方向。今日数据不足以推断下一版本的功能规划。

## 7. 用户反馈摘要

今日 Issue 评论数为 0，无用户反馈可提炼。间接信号：RepoCloud 主动接入部署文档（PR #1285），侧面说明 Moltis 在自托管/云端部署用户群体中存在一定需求，部署体验是外部合作方看重的价值点。

## 8. 待处理积压

今日数据仅覆盖过去 24 小时，未提供历史积压 Issue/PR 数据，无法列出长期未响应条目。建议维护者：

1. **优先处理 PR #1285**（https://github.com/moltis-org/moltis/pull/1285）：已是唯一开放 PR，属低风险文档变更，尽快审核合并或反馈，避免冷落外部贡献者。
2. 建议项目方补充输出 7/30 天维度的 Issue/PR 积压数据，以便后续日报评估项目响应健康度。

---

**健康度小结**：今日活跃度低（1 PR / 0 Issue / 0 Release），无风险信号，但需关注社区互动持续为零是否为周期性波动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-09-27

## 1. 今日速览

CoPaw 今日整体活跃度中等偏健康：过去 24 小时共 6 条 Issue 更新（4 新开/活跃、2 关闭）、4 条 PR 更新（均为待合并、无合并/关闭）。无新版本发布。社区反馈以 Bug 报告和体验优化为主，出现了“用户报告 Bug 后立即提交修复 PR”的良好自服务模式（#7995 → PR #7996），显示社区参与质量较高。当前 4 个待合并 PR 覆盖前端文件面板、i18n、企微渠道渲染和设置页 UX 重构，若顺利合入将为下一个版本奠定基础。

## 2. 版本发布

今日无新版本发布。（注：Issue 中提及的 2.2.2b4 / 2.2.3b 为用户侧运行的版本）

## 3. 项目进展

今日**无 PR 合并或关闭**，4 个 PR 均处于待审查状态：

- **PR #7996** [fix(console)]: 修复文件面板刷新后已展开文件夹内容过期的问题，刷新时会重新加载所有展开目录并防止过期请求覆盖新结果。([链接](https://github.com/agentscope-ai/QwenPaw/pull/7996))
- **PR #7993** [fix(i18n)]: 补充两个缺失的错误翻译 key（`common.operationFailed`、`voiceTranscription.loadFailed`），修复 7 处调用点直接显示 key 而非文案的问题。([链接](https://github.com/agentscope-ai/QwenPaw/pull/7993))
- **PR #7992** [fix(wecom)]: 修复企微渠道将包含 `|` 的普通文本误渲染为 Markdown 表格的回归。([链接](https://github.com/agentscope-ai/QwenPaw/pull/7992))
- **PR #7956** [feat(console)]: 统一设置页设计语言、修复 workspace 选择器溢出与切换对话时的欢迎屏闪烁，是本次积压中最大的 UX 改进。([链接](https://github.com/agentscope-ai/QwenPaw/pull/7956))

整体判断：4 个待合并 PR 中 3 个为修复类，合入后将显著改善前端与渠道层稳定性；建议维护者优先 review。

## 4. 社区热点

- **#7957（评论 3）** — 用户 [@dylanleesky](https://github.com/agentscope-ai/QwenPaw/issues/7957) 建议支持手动停用/禁用预制模型和频道。诉求核心：大量不使用的预置项造成界面冗余，用户希望有更精细的“隐藏/禁用”控制。这是典型的功能精细化诉求，反映用户基数增长后对界面可控性的要求提升。
- **#4963（评论 4）** — 长期活跃的 Cron 任务增强请求：支持不经过 AI Agent 直接执行脚本/shell 命令的定时任务类型。已持续讨论近 4 个月（2026-06 创建，9-26 仍在更新），是呼声最高的功能请求之一。
- **#7994（当日关闭）** — 上下文显示与压缩失灵的 Bug 报告，当天被以 "Close-and-review-later" 关闭，说明维护者已知晓但尚未有确定修复计划，需跟踪后续。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#7994](https://github.com/agentscope-ai/QwenPaw/issues/7994) (CLOSED) | 上下文用量圆环不随对话切换更新；91.7K/131.1K 明显超过 0.5 压缩阈值却拒绝压缩，影响长对话可用性 | ❌ 暂无（已关闭待复查） |
| 🟠 中 | [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | TaskTracker 出现僵尸 `_runs` 条目，`running_task_count` 虚高且与 `/api/chats` 数据不一致，涉及全局/单会话两个计数器作用域不一致 | ❌ 暂无 |
| 🟡 低 | [#7995](https://github.com/agentscope-ai/QwenPaw/issues/7995) | 文件面板刷新不更新已展开文件夹，新文件仅在全页刷新后可见（版本 2.2.2b4） | ✅ PR #7996 已提交 |

无崩溃类报告。#7994 虽已关闭但无 fix，是当前最值得关注的稳定性风险。

## 6. 功能请求与路线图信号

- **Cron 脚本执行任务**（[#4963](https://github.com/agentscope-ai/QwenPaw/issues/4963)）：4 条评论、持续 4 个月讨论，需求明确且有真实使用场景（纯脚本调度无需消耗 AI token），若进入下一版本将是调度能力的实质扩展。目前无对应 PR。
- **预制模型/频道手动禁用**（[#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957)）：与 PR #7956 的设置页 UX 统一方向契合，#7956 合入后顺势实现成本较低，有较大概率被纳入后续版本。
- **TaskTracker 计数一致性**（#7991）：属于内部状态管理问题，修复后可提升 dashboard 可信度，可能作为工程任务优先处理。

## 7. 用户反馈摘要

- **多渠道（企微/DingTalk 等）渲染质量受关注**：PR #7992 反映 Markdown 表格误判导致普通文本被改写，说明渠道侧消息转换的边界情况仍需打磨。
- **桌面端长对话体验是痛点**：#7994 用户反馈需重启程序才能刷新上下文状态、压缩阈值设置不生效，表达明确不满。
- **文件面板与 Agent 写盘场景结合紧密**：#7995 提到“文件由 agent 添加后 UI 不刷新”，反映用户在 Agent 自动化写文件的工作流中依赖文件面板实时性。
- **积极信号**：iluv7、Bruce-Yii 等用户从报 Bug 走向直接提交 PR，社区自修复生态正在形成。

## 8. 待处理积压

- **#4963**（Cron 脚本任务）：2026-06-04 创建至今近 4 个月无版本落地，建议维护者在 roadmap 中明确排期或给出状态回复。
- **#7994**（上下文压缩失效）：以 "Close-and-review-later" 关闭，若无后续跟踪容易遗忘，建议关联新 Issue 或 milestone。
- **PR #7956**（设置页 UX 重构）：9-23 开启至今未合并，改动面较大，建议维护者尽快 review 以避免与后续前端改动冲突。
- **4 个待合并 PR 全量待审**：今日零合并，建议集中一轮 review，保持社区贡献者积极性。

---
*数据来源：CoPaw GitHub 仓库过去 24 小时 Issues/PR 活动。整体健康度评估：社区贡献活跃、Bug 响应及时，但 PR 审查吞吐和长期 Issue 排期透明度有提升空间。*

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