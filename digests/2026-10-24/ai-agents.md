# OpenClaw 生态日报 2026-10-24

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-24 03:46 UTC

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

# OpenClaw 项目日报 — 2026-10-24

## 1. 今日速览

OpenClaw 今日保持高度活跃：过去 24 小时 Issues 更新 500 条（新开/活跃 42，关闭 458），PR 更新 500 条（待合并 199，已合并/关闭 301），净关闭量显著大于新增，显示维护团队（含 clawsweeper/roboclaw-bot 自动化）正在大规模清理积压。今日无新版本发布，但核心维护者 @steipete 密集提交了多个性能与修复 PR，重点围绕 SQLite worker 内存、模块导入图收敛和 PostgreSQL 稳定性。最值得关注的新问题是 2026.10.5 版本的基线内存暴涨（P1，#181432），已有针对性 PR 跟进。整体项目健康度良好，处于"大扫除 + 性能优化"阶段。

## 2. 版本发布

今日无新 Release。注意：Issue #182168 提到 `2026.9.33` 更新后曾出现 SDK 安装损坏（`@opentelemetry/api` 为空导致 Gateway 无法启动），说明近期版本的 npm 打包链路存在风险，相关修复 PR 已提交。

## 3. 项目进展

今日已关闭的代表性 PR（多为修复/重构落地或机器人批量清理）：

- **#182082 [CLOSED, P1] fix: recover PostgreSQL startup during schema publication** — 修复 Gateway 启动时 schema 发布窗口期偶发失败的 P1 问题。https://github.com/openclaw/openclaw/pull/182082
- **#182162 [CLOSED] fix: resume completed-task follow-ups after a Gateway restart** — Gateway 重启后已完成任务的后续指令可自动恢复。https://github.com/openclaw/openclaw/pull/182162
- **#181996 [CLOSED] perf(sandbox): attribute slow setup and reuse clean failed-install source** — 沙箱启动慢问题归因与失败安装复用修复。https://github.com/openclaw/openclaw/pull/181996
- **#121063 [CLOSED] fix(agent-core): bound runaway loops with turn/error-batch/idle-repeat guards** — 长期高优 PR 落地，为原生 runLoop 增加失控循环防护（曾出现 219 轮 / ~15M token 的失控案例）。https://github.com/openclaw/openclaw/pull/121063
- **#122631 [CLOSED] fix(agents): detect sustained same-target write churn** — 检测同目标反复写覆盖的循环模式。https://github.com/openclaw/openclaw/pull/122631

待合并的关键新 PR：

- **#182109 refactor(canvas)!: retire A2UI widgets and content-kind hooks**（XL，破坏性变更，标记 🚨 automation/compatibility 风险，等待作者）— 移除 A2UI 重复路径与最后的 Lit 依赖。https://github.com/openclaw/openclaw/pull/182109
- **#182164 improve: speed up PostgreSQL memory vector search** — 语义记忆检索由全量线性扫描改为默认近似搜索。https://github.com/openclaw/openclaw/pull/182164
- **#181939 perf(workers): narrow SQLite and model catalog import graphs** — 收敛 worker 模块依赖图，直接针对 #181432 内存问题的一部分。https://github.com/openclaw/openclaw/pull/181939
- **#182156 fix(sessions): avoid eager actor factory imports during ownership reads** — 同样关联 #181432 的内存优化。https://github.com/openclaw/openclaw/pull/182156
- **#182168 fix(packaging): preserve required SDK API installation** — 修复 npm install "成功"但依赖为空导致 Gateway 无法启动的打包缺陷。https://github.com/openclaw/openclaw/pull/182168
- **#182140 fix(workers): preserve cloud commits on reclaim** — 回收云 worker 时保留未推送的 worker-authored commits（fixes #110498）。https://github.com/openclaw/openclaw/pull/182140

**评估**：今日在运行时性能（内存/导入图/向量检索）、循环防护、云 worker 数据安全三个方向均有实质推进；30% 的 PR 更新以合并/关闭结束，节奏健康。

## 4. 社区热点

- **#170956（OPEN，17 评论，P0）Windows 启动慢 + 插件不干净关闭 + schtasks 权限错误**，导致重启/更新极不可靠，偶发客户端 1006 断连，被标为 ux-release-blocker 与 crash-loop，尚无 fix PR。https://github.com/openclaw/openclaw/issues/170956
- **#181432（OPEN，7 评论，P1，昨日新开）2026.10.5 基线 RSS 内存从 ~300MB 暴涨至 1.9GB + SQLite 事务超时**，Linux ARM64 上 Telegram 交互即触发内存告警甚至崩溃。已有 #182156/#182939 系列性能 PR 关联。https://github.com/openclaw/openclaw/issues/181432
- **#79902（CLOSED，17 评论）SQLite transcript/session 开放接口的 Feature 请求** — 高级消费方希望在 database-first 运行时上获得规范访问层，最终以 stale 关闭，需求未被完全吸收。https://github.com/openclaw/openclaw/issues/79902
- **#119992（OPEN，10 评论）message 工具单轮发送预算** — 防止 agent 在单轮内向用户重复发送变体答案的"答案风暴"，已有 linked PR 但未合并。https://github.com/openclaw/openclaw/issues/119992
- **#124759（OPEN）iOS 开启"显示推理与工具活动"后严重卡顿** — App Store 用户实际使用体验反馈。https://github.com/openclaw/openclaw/issues/124759

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 / Fix PR |
|---|---|---|
| P0 | #170956 Windows 重启/更新不可靠、1006 断连、crash-loop | 🔴 无 fix PR，待维护者审查 |
| P1 | #181432 2026.10.5 内存暴涨 + SQLite 超时 | 🟡 关联 #182156、#181939、#182165 |
| P1 | #177812 Daybreak 依赖的模型别名 10 月 28 日退役（🚨 时效性！ platinum hermit 级） | 🟢 PR #177812 ready for maintainer |
| P1 | #99910 Memory Dreaming 阻塞事件循环 ~10 分钟（已关闭） | 已处理/关闭 |
| P1 | #115424 V8 堆 OOM + 恢复机制把一次崩溃放大为 7 次 core dump 循环（已关闭） | 已处理/关闭 |
| P1 | #94939 6.x 迁移致 MS Teams conversation-store SQLite 为空（data-loss，已关闭） | 已处理/关闭 |
| P1 | #104992 脱敏标记 `***` 在 session resume 时回灌模型上下文（security，已关闭） | 已处理/关闭 |
| P2 | #182168 npm 安装后 `@opentelemetry/api` 为空，Gateway 启动失败 | 🟢 PR #182168 今日提交 |
| P2 | #182161 Codex 已关闭线程 reload 后聊天永久"Waiting for turn to start" | 🟢 PR #182161 今日提交 |
| P2 | #120735 Telegram 贴纸无法被 agent 识别（未落盘、无描述） | 🔴 无 fix PR |
| P2 | #122019 `openclaw update status` 不评估插件兼容性与不可逆迁移风险 | 🔴 无 fix PR |

**模式观察**：今日关闭的 Bug 大量集中在 session-state / message-loss / security 三类历史问题；新增 Bug 则集中在内存/打包/插件生命周期，与最近的架构重构（workers、模块图收敛）相关。

## 6. 功能请求与路线图信号

- **近似向量检索成为默认**（PR #182164）+ **PostgreSQL 启动恢复**（#182082 已关闭）→ 数据库后端性能是明确投入方向。
- **Visitor Access / 访客体验**：#182044（邀请元数据持久化）、#182167（访客 starter prompts 角色适配）两个 PR 均在今日提交，表明访客模式是近期产品重点。
- **模型目录自动化**：#121584（自动发现 provider 全部模型）已关闭，但 #182127（修复模型刷新 stale owner）表明相关能力正在实现中，#74481 的动态 `/v1/models` 刷新诉求部分被吸收。
- **cron 运维化**：#120244 RFC（每日维护窗口 + 角色隔离）已关闭，是 cron 子系统演进的候选路线。
- **Slack Modal 交互**（#88154）与 **exec denylist 模式**（#71097）仍处于已关闭/待产品决策状态，社区诉求持续存在。

## 7. 用户反馈摘要

- **痛点集中在 Windows**：#170956 描述"多次重试才能成功重启/更新"是长期真实体验；#105528 的 exec/read 静默空输出（已修复关闭）也曾是 Windows 用户高频抱怨。
- **长期自托管用户的挫败感**：#88087 用户因后台任务 UX 差 + cron 静默唤醒失败而放弃 DigitalOcean 部署，反馈"成本配不上体验"，值得产品侧重视。
- **多 agent 重度用户**关注资源泄漏（#71335 曾观察到 1,292 个 chokidar watcher）与会话状态可靠性，对 SQLite/会话状态迁移（#94939）信心受损明显。
- **移动端体验**：iOS 用户（#124759、#113056）反映推理显示卡顿、语音路径配置了但不可用的"假就绪"问题。
- **正面信号**：#114128 用户自建 hook 捕获 literal-\n bug，评价"工具链已经比我记忆快"，显示高阶用户在积极共建。

## 8. 待处理积压（提醒维护者）

- 🔴 **#170956（P0）**：Windows 可靠性三连问题，标记 ux-release-blocker 且 crash-loop，11 天未出 fix PR，建议优先分派。
- 🔴 **#181432（P1）**：昨日新开、评论快速增长，2026.10.5 内存回归直接影响最新版用户；#182156/#182165 虽相关但未明确"fixes"该 issue。
- ⏰ **#177812（platinum hermit）**：Daybreak 模型别名 10 月 28 日退役，**距截止仅 4 天**，PR 已 ready for maintainer 但未合并。
- 🕸 **陈旧待合并 PR**：#130067（GPT-5.6 缓存重复写入，8/26 起，needs proof）、#128872（auto-reply 决策/投递分离）、#129191（memory-wiki 可见性配置）、#127949（legacy workspace 静默迁移，XS 尺寸）均超 2 个月未推进。
- 📋 **无 fix PR 的 OPEN 问题**：#119992（单轮重复答案风暴）、#120735（Telegram 贴纸）、#122019（update status 升级安全）、#118776（leaf sub-agent 死等事件）均标记 stale 且无维护者认领，存在被机器人误关闭风险（参考 #79902 等 17 评论 issue 以 stale 关闭的先例）。

---
*数据来源：GitHub openclaw/openclaw，统计窗口 2026-10-23 ~ 2026-10-24。链接格式为 issue/PR 编号，可在仓库内直接检索。*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**数据窗口：2026-10-23 ~ 2026-10-24**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入**高度分化、纵深竞争**阶段：头部项目（OpenClaw、Hermes Agent、NanoBot）日均 Issue/PR 更新达 500/50/34 条量级，形成“基础设施级”社区规模，而长尾项目（TinyClaw、IronClaw、EasyClaw）呈现静默维护或零 PR 直推模式。生态呈现三条主线：**Gateway/会话状态管理成为最集中的质量灾区**（Hermes、Zeroclaw、OpenClaw 均有密集回归）、**渠道集成（Telegram/Slack/DingTalk/邮件）可靠性普遍受挫**、**安全边界（沙箱、工具白名单、注入防护）从加分项变为基础要求**。同时，多 provider 兼容、插件/技能生态、本地/低成本模型接入是跨项目共性投入方向。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（开/关） | PR 更新（待合并/已合并） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（42 新 / 458 关） | 500（199 / 301） | 无 | ⭐⭐⭐⭐⭐ 大扫除阶段，净关闭 > 新增，维护带宽充足 |
| **Hermes Agent** | 50（48 新 / 2 关） | 50（45 / 5） | v0.22.5 | ⭐⭐⭐ 高流入低关闭，sessions 回归密集，积压上升 |
| **Zeroclaw** | 35（29 新 / 6 关） | 50（49 / 1） | 无 | ⭐⭐⭐⭐ 活跃但审查吞吐严重不足（1/50 合并） |
| **NanoBot** | 6（2 新 / 4 关） | 34（13 / 21） | 无 | ⭐⭐⭐⭐⭐ 合并率高、review 周期 < 1 天，节奏最健康 |
| **CoPaw (QwenPaw)** | 14（6 新 / 8 关） | 39（27 / 12） | 无 | ⭐⭐⭐⭐ 修复吞吐 > 新报，但巨型 PR 堵塞 v2.3 |
| **LobsterAI** | 3（1 新 / 2 关） | 18（3 / 15） | 2026.10.23 | ⭐⭐⭐⭐⭐ 反馈→修复→发版 1-3 天闭环，Bug 清零 |
| **NanoClaw** | 1 新 | 43（36 / 7） | 无 | ⭐⭐⭐⭐ 贡献流入稳定，安全 PR 审查滞后 6 周+ |
| **Moltis** | 0 | 3（1 / 2） | 20261023.01 | ⭐⭐⭐ 核心维护者驱动，质量高但社区单薄 |
| **PicoClaw** | 2（1 / 1） | 4（3 / 1） | 无 | ⭐⭐ stale 机器人替代人工决策，维护近乎停滞 |
| **IronClaw / NullClaw / ZeptoClaw / EasyClaw** | ≤1 | ≤4 | EasyClaw 两连发 | ⭐⭐ 依赖机器人/单人自驱，社区信号缺失 |
| **TinyClaw** | 0 | 0 | 无 | ⭐ 完全静默 |

---

## 3. OpenClaw 在生态中的定位

**社区规模断层领先**：单日 500 条 Issue/PR 更新、180K+ 编号体量，约为第二名 Hermes 的 10 倍，是唯一具备专职自动化维护体系（clawsweeper/roboclaw-bot 批量清理）的项目——今日 458 条关闭即其产能证明。

**优势**：
- **维护带宽最充足**：净关闭远超新增，能承接 P0 Windows 可靠性（#170956）之外并行推进性能、安全、云 worker 多条线
- **工程纵深最深**：失控循环防护（#121063，曾出现 219 轮/15M token 失控）、内存/导入图收敛、PostgreSQL 近似向量检索等属于其他项目尚未触及的运行时工程深度
- **生态位被依赖**：LobsterAI 直接以 OpenClaw 网关为集成对象（PR #2932），显示其已成为生态底座角色

**技术路线差异**：OpenClaw 走 database-first 重运行时（SQLite/PostgreSQL、语义记忆、沙箱、云 worker），相比 NanoBot 的轻量 WebUI 优先、Zeroclaw 的 Rust 化多代理安全架构、NanoClaw 的容器化 skills 插件体系，是**最“平台化”的路线**。

**风险对照**：规模带来的复杂性正在反噬——2026.10.5 基线内存从 300MB 暴涨至 1.9GB（#181432）这类回归，是轻量项目不会遇到的问题。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **会话状态与历史不可逆丢失** | OpenClaw、Hermes、Zeroclaw、NanoBot | Zeroclaw #11711 裁剪永久删历史；NanoBot 空闲压缩竞态致 transcript 覆盖（3 个并行修复 PR）；Hermes #143848 老会话 resume 即砖化——**上下文压缩与历史保全的矛盾是全生态第一痛点** |
| **Gateway/启动可靠性** | OpenClaw、Hermes、Zeroclaw、LobsterAI、PicoClaw | OpenClaw Windows crash-loop（P0 #170956）、Hermes sessions 权限拒绝系列、Zeroclaw TLS WebSocket 断连、LobsterAI 网关双重启动（每次浪费 100-280s）、PicoClaw crash loop |
| **循环/成本失控防护** | OpenClaw、NanoClaw、CoPaw | OpenClaw 219 轮失控案例已修复；NanoClaw 定时任务上下文膨胀致成本周增 15%（PR #3741）；CoPaw 网关 120s 超时不可配 |
| **多 provider 参数兼容** | NullClaw、NanoBot、Moltis、ZeptoClaw | temperature 强制传递被拒（NullClaw #1078）、Azure/Kimi 参数适配（NanoBot）、聚合网关接入潮（ZeptoClaw Cheaper Inference、PicoClaw Standard Compute） |
| **渠道配置语义可信** | Zeroclaw、CoPaw、PicoClaw | excluded_tools 不生效、禁用渠道仍发消息、DingTalk/QQ 静默丢消息——“声明行为与实际行为不一致”是运营者共同控诉 |
| **多代理安全边界** | Zeroclaw、NanoClaw、OpenClaw | Zeroclaw #8279 delegate 绕过白名单（S0，4 个月未修）、NanoClaw A2A 身份伪造修复悬挂 2 月、OpenClaw 脱敏标记回灌（已修） |
| **静默失败可观测性** | NanoBot、CoPaw、PicoClaw、Hermes | 搜索失败伪装“无结果”、agent 调用静默取消、cron 永远报 ok、工具提示指向不存在的命令 |

---

## 5. 差异化定位分析

| 维度 | 重平台型 | 研究驱动型 | 安全/多代理型 | 轻量嵌入式型 | 桌面产品型 | 垂直工具型 |
|---|---|---|---|---|---|---|
| **代表项目** | OpenClaw、Hermes | NanoBot (HKUDS)、CoPaw | Zeroclaw、NanoClaw | PicoClaw、ZeptoClaw | LobsterAI、EasyClaw | Moltis、NullClaw |
| **功能侧重** | 全渠道 Gateway + 记忆 + 云 worker | WebUI 体验 + provider 广度 | 沙箱、OIDC、白名单、A2A | 路由器/Android 静态二进制 | 图像编辑、悬浮球、常驻工作流 | 多模型目录、i18n、代理参数透传 |
| **目标用户** | 自托管重度用户/多 agent 舰队 | 开发者/长任务 API 用户 | 企业化安全运维场景 | 极小设备自托管 | 桌面端个人用户 | TikTok MCN（EasyClaw）等垂直运营 |
| **架构** | database-first Node 运行时 | Python/异步 worker | Rust + 容器隔离 | Go 单二进制 | Electron 类 | 轻代理/网关 |

关键差异点：**OpenClaw/Hermes 在拼“运行时深度”，NanoBot/CoPaw 在拼“迭代速度与 provider 覆盖”，Zeroclaw 在拼“安全合规”，NanoClaw 靠 skills 插件化拼生态广度**——LobsterAI 则是唯一把“用户当日反馈当日发版”做成产品能力的项目。

---

## 6. 社区热度与成熟度分层

**快速迭代/扩张期**：NanoBot（review < 1 天、当日报当日修）、LobsterAI（1-3 天闭环发版）、Hermes（贡献流入猛但质量债在累积）

**质量巩固/重构期**：OpenClaw（大规模清理 + 性能回归修复）、Zeroclaw（v0.9.0 攻坚，1/50 合并率暴露审查瓶颈）、CoPaw（v2.3 三大 XXXL PR 待消化）、NanoClaw（安全 PR 积压 6 周+）

**维护收缩/停滞预警**：PicoClaw（stale 机器人替代人工，6 周 PR 被关闭）、IronClaw（零人工活动）、TinyClaw（零活动）、EasyClaw（高频发版但零社区信号，闭门造车风险）

**共性规律**：所有进入成熟期的项目都面临“**贡献流入 > 审查吞吐**”的结构性矛盾——Zeroclaw 49 个待合并 PR、Hermes 2/48 的关闭比、NanoClaw 36 个 pending PR 是三个典型警报。

---

## 7. 值得关注的趋势信号

1. **上下文压缩成为新的核心战场**：NanoBot 空闲压缩竞态（3 个并行 PR）、Zeroclaw 裁剪不可逆删除、NanoClaw `--fresh-session`、CoPaw ReMe 决策压缩、Hermes doc-chain RFC——记忆持久化与成本控制的张力将催生“可审计、可回滚的压缩”标准设计。

2. **安全债务开始集中爆发**：Zeroclaw S0 白名单绕过 4 个月未修、NanoClaw A2A 身份伪造悬挂 2 月、Hermes 任意目录删除（#138359）、IronClaw dompurify 待升级——多代理/沙箱架构普及后，**安全修复的审查优先级普遍低于功能 PR**，是生态级短板。

3. **静默失败零容忍**：多项目用户共同的最强控诉不是“失败”而是“失败无日志无原因”（CoPaw agent 取消无记录、NanoBot 搜索伪报空结果、PicoClaw cron 永远 ok）。**可观测性是比功能更陡的护城河**。

4. **聚合型推理网关接入潮**：Cheaper Inference、Standard Compute、NEAR AI、Kimi、DeepSeek、GLM-5.3 等接入需求横跨 5+ 项目——provider registry 的“模板化低成本扩展”（如 ZeptoClaw 复用 openai backend）正在成为标配能力。

5. **最小化/嵌入式部署是真实增量市场**：PicoClaw 的 OpenWrt/Android 场景、Zeroclaw CLI-only 构建、NanoClaw 本地模型支持共同指向：个人 AI 助手正从开发者桌面走向**路由器、树莓派、私有服务器**。

6. **对开发者的启示**：优先投资（a）会话状态机的回归测试与向后兼容（Hermes v0.22.5 的教训），（b）带 provenance 的压缩/裁剪机制，（c）错误语义的可观测性设计——这三项在头部项目的痛点密度最高、修复溢价最大。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-10-24

## 1. 今日速览

NanoBot（HKUDS/nanobot）今日保持高强度开发节奏：过去 24 小时内共有 **34 条 PR 更新**（21 条已合并/关闭，13 条待合并）和 **6 条 Issue 更新**（4 条关闭，2 条新开/活跃）。无新版本发布。今日主线聚焦于 **空闲压缩机制的正确性修复**（多个竞态问题被报告并相继提交修复 PR）、**WebUI 体验打磨**（多项 p1/p2 PR 已合并）以及 **搜索/Provider 层的错误语义改进**。社区贡献者 @chengyongru、@08raviyadav、@Shizoqua、@LVsarff 等持续产出，项目整体处于健康、快速迭代状态。

## 2. 版本发布

今日无新版本发布，省略。

## 3. 项目进展

今日已合并/关闭 21 条 PR，代表性进展如下：

**WebUI 体验与正确性**
- [#6413](https://github.com/HKUDS/nanobot/pull/6413)（已关闭）— 修复 @ 提及建议中显示原始话题标题而非重命名后标题的问题。
- [#6419](https://github.com/HKUDS/nanobot/pull/6419)（已关闭）— 优化输入框主控按钮（语音/发送/停止）的图标切换过渡反馈。
- [#6417](https://github.com/HKUDS/nanobot/pull/6417)（已关闭）— 移除活动目标的脉冲光晕及冗余详情头部，降低视觉噪音。
- [#6389](https://github.com/HKUDS/nanobot/pull/6389)（已关闭）— 区分上下文压缩原因（空闲维护 / 上下文压力 / 手动 /compact），提升透明度（NAN-324）。
- [#6393](https://github.com/HKUDS/nanobot/pull/6393)（已关闭）— 重要安全相关修复：恢复等待消息时不再恢复其自动执行资格，避免加载旧轮次时未经确认触发新的 agent 运行（NAN-275）。
- [#6398](https://github.com/HKUDS/nanobot/pull/6398)（已关闭）— 保留技能引用中的 `$` 前缀（`$github` 不再被渲染为 `github`）。

**Provider 与搜索层**
- [#6418](https://github.com/HKUDS/nanobot/pull/6418)（已关闭）— 适配 Kimi K3.1 Pro / K3.1 Pro Highspeed 请求参数（固定 temperature=1.0、reasoning 选项修正）。
- [#6409](https://github.com/HKUDS/nanobot/pull/6409)（已关闭）— 解决 [#6285](https://github.com/HKUDS/nanobot/issues/6285)：ddgs 的模糊失败（上游拒绝、解析失败等）不再伪装成“无结果”，改为明确报告搜索不可用。

**测试质量**
- [#6394](https://github.com/HKUDS/nanobot/pull/6394)（已关闭）— 清理不可达测试用例、强化弱断言，保持真实的回归覆盖。

整体来看，今日项目在 **WebUI 打磨、Provider 兼容、错误语义清晰化** 三条线上均有实质推进，合并吞吐量高，review 周期短（多数 PR 一天内关闭）。

## 4. 社区热点

- **[#6285](https://github.com/HKUDS/nanobot/issues/6285)**（4 条评论，已关闭）— DuckDuckGo 搜索连续调用失败但报错信息形如“无结果”，误导用户。该问题引发多轮讨论，最终由 PR #6409 以“将不确定失败报告为不可用”的方案落地。诉求核心：**默认零配置搜索路径的错误可观测性**。
- **[#6079](https://github.com/HKUDS/nanobot/issues/6079)**（仍开放，P2）— 社区对群聊中 agent “只观察不回复”能力的持续需求：接收 → 判断相关性 → 处理 → 决定是否发送四步解耦。这是目前开放 Issue 中最值得关注的架构级诉求。
- **空闲压缩系列问题（#6214 / #6410 + PR #6405 / #6421 / #6424）** — 多位贡献者围绕同一竞态根因（`process_direct` 路径不注册 `_pending_queues`，长回合被误判为空闲）并行提交了修复，显示社区对该模块的高度关注，但也提示维护者需要**统一收口方案避免重复工作**。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 状态 / Fix PR |
|---|---|---|
| 高 | [#6214](https://github.com/HKUDS/nanobot/issues/6214)（已关闭）空闲压缩可归档仍在运行中的 direct 会话，导致 transcript/checkpoint 并发覆盖 | 已由 PR #6221 修复；但衍生竞态见下条 |
| 高 | [#6410](https://github.com/HKUDS/nanobot/issues/6410)（开放）长时间 direct 回合结束后，排队的归档任务可**不经新的空闲间隔立即执行**压缩 | 已有 **3 个并行候选修复**：[#6405](https://github.com/HKUDS/nanobot/pull/6405)、[#6421](https://github.com/HKUDS/nanobot/pull/6421)、[#6424](https://github.com/HKUDS/nanobot/pull/6424)（均在锁等待后重新校验空闲资格） |
| 中 | [#6411](https://github.com/HKUDS/nanobot/issues/6411)（已关闭）DeepSeek Responses 全历史回放使用 `output_text` 而非文档规定的 `reasoning_text` | 已关闭（当日提交当日处理） |
| 中 | [#5879](https://github.com/HKUDS/nanobot/issues/5879)（经由 PR 引用）压缩后超大 `read_file` 工具结果超出预算导致回合中止 | 修复中：[#6404](https://github.com/HKUDS/nanobot/pull/6404)（开放） |
| 中 | 会话 worker 任务异常被静默吞掉（done callback 未调用 `task.exception()`） | 修复中：[#6423](https://github.com/HKUDS/nanobot/pull/6423)（开放） |
| 低 | Azure GPT-6 拒绝非 "none" reasoning effort 下的 temperature 参数 | 修复中：[#6422](https://github.com/HKUDS/nanobot/pull/6422)（开放） |

## 6. 功能请求与路线图信号

- **群聊观察模式**（[#6079](https://github.com/HKUDS/nanobot/issues/6079)，P2，开放）— 将消息接收/相关性判断/处理/回复解耦。暂无对应 PR，属架构级特性，可能进入中期路线图。
- **web_fetch 分页续读**（[#6317](https://github.com/HKUDS/nanobot/pull/6317)，开放，含文档+测试）— 通过 offset/nextOffset 读取截断页面剩余部分，避免反复请求更大前缀。实现完整、带安全 banner，合并概率较高。
- **DeepSeek 官方 web_search 工具接入**（[#6407](https://github.com/HKUDS/nanobot/issues/6407)，已关闭）— 用户询问如何配置，关闭速度极快，可能已有支持或以文档解答。
- **WebUI 网关失效通知替代轮询**（[#6401](https://github.com/HKUDS/nanobot/pull/6401)，开放，P1）— 性能向重构，挂靠 Linear NAN-339，属团队内部规划项，预计将进入下一版本。
- **元数据化工具上下文重构**（[#1515](https://github.com/HKUDS/nanobot/pull/1515)，自 2026-03 开放，标记 conflict）— 长期悬置的扩展性重构，见第 8 节。

## 7. 用户反馈摘要

- **零配置搜索的可靠性预期**：用户（#6285）依赖默认 DuckDuckGo 搜索（无 API key），最不满的是“失败被伪装成空结果”——用户无法区分是搜索引擎坏了还是真的没有结果。
- **长任务场景下的稳定性焦虑**：多位用户通过 API server / SDK / 单次 CLI（`process_direct` 路径）跑长回合任务时遇到会话被意外压缩、历史丢失（#6214、#6410、#6420 提及的 `Could not place earlier history`），反映**生产环境长时任务**是核心使用场景。
- **Provider 生态广度**：用户主动询问 DeepSeek 官方搜索接入（#6407），结合 Kimi K3.1 Pro 适配 PR，说明用户群覆盖多家国产/国际模型。
- **WebUI 细节敏感度高**：文件卡片布局（#6425）、`$` 前缀丢失（#6398）、@ 提及标题不一致（#6413）等细粒度反馈显示 WebUI 已有深度日常用户。

## 8. 待处理积压

- **[#1515](https://github.com/HKUDS/nanobot/pull/1515)**（2026-03-04 开启，已悬挂 **7 个多月**，标记 conflict）— 用通用 `metadata` 替换硬编码 `message_id` 传递给工具的重构 PR。价值明确的扩展性改进，但长期冲突未解决，建议维护者明确收养或关闭，避免贡献者空等。
- **[#6079](https://github.com/HKUDS/nanobot/issues/6079)**（10-05 开启，仅 1 条评论）— 群聊观察模式需求尚无维护者表态，建议给出纳入路线图的判断。
- **空闲压缩修复合并冲突风险**：#6405 / #6421 / #6424 三个 PR 修复同一问题且均已开放，建议尽快指定其一合并、关闭其余，防止 #1515 式的长期积压重演。
- **长期陈旧 Release 节奏**：近期无版本发布，而合并节奏很快，建议定期打 tag/发布，便于下游用户跟踪稳定点。

---
*数据来源：HKUDS/nanobot GitHub 过去 24 小时 Issue/PR 活动。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 · 2026-10-24

---

## 1. 今日速览

Zeroclaw 过去 24 小时保持了高活跃度：Issues 更新 35 条（29 新开/活跃、6 关闭），PR 更新 50 条（49 待合并、1 已合并/关闭），无新版本发布。项目当前正处于 **v0.9.0 开发周期的集中攻坚阶段**，Issue 和 PR 中大量标注 `release:v0.9.0`，焦点集中在网关（gateway）、仪表盘 OIDC 登录与 CLI-only 构建等方向。社区贡献者结构健康，核心贡献者 @JordanTheJet、@Audacity88、@mov-xound-glitch 持续高频产出，外部贡献者（@tidux、@RustLangLatam、@wray-lee 等）在 email/Telegram/i18n 渠道和安全扫描器方面贡献稳定。需要关注的是：**多个 S0/S1 级安全问题被曝光（含 CI 依赖审计红灯），且 49 个 PR 处于待合并状态，审查吞吐可能成为瓶颈。**

---

## 2. 版本发布

过去 24 小时**无新版本发布**。当前活跃的开发目标为 `v0.9.0`（runtime/网关/仪表盘方向）与 `v0.8.7`（bugfix 方向）。

---

## 3. 项目进展

今日仅 1 个 PR 完成合并/关闭，整体合并吞吐较低，但待合并队列中的 PR 质量与覆盖面可观：

- **修复 SOP 引擎步骤输出校验时序 Bug**：[#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066)（P0，S1）已关闭 —— 修复了步骤 `output` schema 校验失败前，后续步骤被提前提升执行的问题。
- **容器 CA 信任链修复落地**：[#11932](https://github.com/zeroclaw-labs/zeroclaw/issues/11932)（S0 安全）已关闭 —— 修复容器原生 CA bundle 仍信任已公开不受信的 emSign 中间证书链。
- **Daemon reload 后旧网关继续服务问题修复**：[#11899](https://github.com/zeroclaw-labs/zeroclaw/issues/11899)（v0.8.7）已关闭 —— reload 后已接受的连接不再由已停止的网关继续提供服务。
- **Provider alias 探测修复**：[#9592](https://github.com/zeroclaw-labs/zeroclaw/issues/9592) 已关闭，模型路由更新后探测读取到正确的凭据快照。

**待合并队列亮点**（49 个 OPEN PR 中的代表）：
- [#11187](https://github.com/zeroclaw-labs/zeroclaw/pull/11187)（XL）：在应用层构建 `DefaultCapabilities` 并让 CLI agent 运行其上——v0.9.0 架构重构的核心 PR。
- [#11822](https://github.com/zeroclaw-labs/zeroclaw/pull/11822)（XL，security）：POSIX 命令在命令替换/子 shell 边界正确切分，修复 [#11823](https://github.com/zeroclaw-labs/zeroclaw/issues/11823)。
- Email 渠道修复簇：[#11763](https://github.com/zeroclaw-labs/zeroclaw/pull/11763)（IDLE 前重新搜索）、[#11750](https://github.com/zeroclaw-labs/zeroclaw/pull/11750)（不回复自动邮件）、[#11746](https://github.com/zeroclaw-labs/zeroclaw/pull/11746)（入站附件落盘）、[#11762](https://github.com/zeroclaw-labs/zeroclaw/pull/11762)。
- [#11644](https://github.com/zeroclaw-labs/zeroclaw/pull/11644)：防止 cron shell 诊断泄漏到渠道（安全）。

**评估**：合并速度（1/50）明显落后于 PR 产出速度，若不提升审查吞吐，v0.9.0 的交付节奏存在风险。

---

## 4. 社区热点

1. **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)（15 评论）— v0.9.0 Runtime/仪表盘登录/网关交付总 Tracker**：最活跃讨论串，承接 RFC #5574 的路线图拆解，包含发布分配、剩余缺口、排序和验收证据。这表明社区对 v0.9.0 范围界定有强烈参与意愿。
2. **[#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)（5 评论）— delegate 工具绕过父级工具白名单（S0 安全）**：子代理可调用父策略排除的工具，涉及多代理安全隔离的根本设计，持续引发讨论。
3. **[#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066)（5 评论）— SOP 引擎时序 Bug**：P0 级修复在关闭前后持续吸引关注。
4. **[#11711](https://github.com/zeroclaw-labs/zeroclaw/issues/11711)（3 评论）— 会话裁剪永久删除历史轮次**：用户对上下文超预算后 transcript 被 `rewrite_messages_on` 不可逆重写的做法存在数据安全顾虑。
5. **[#11853](https://github.com/zeroclaw-labs/zeroclaw/issues/11853) — npm audit 失败（CI 机器人自动开单）**：`@tailwindcss/typography` 存在 moderate 级漏洞，CI 持续红灯。

**诉求分析**：热点集中在两条主线——(1) v0.9.0 范围与交付质量；(2) 多代理架构下的安全边界（工具白名单、沙箱扫描器、CA 信任链）。

---

## 5. Bug 与稳定性（按严重程度排列）

| 严重度 | Issue | 描述 | 修复状态 |
|---|---|---|---|
| S0 安全 | [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | delegate 绕过父级工具白名单 | **OPEN，无 fix PR** ⚠️ |
| S1 | [#11957](https://github.com/zeroclaw-labs/zeroclaw/issues/11957) | OIDC enrollment 在 Basic header 发送原始凭据，保留字符导致 client_credentials/device-grant 注册失败（违反 RFC 6749 §2.3.1） | OPEN |
| S1 | [#12009](https://github.com/zeroclaw-labs/zeroclaw/issues/12009) | CI Security job 全面失败：RUSTSEC-2026-0385（ctutils 0.4.2）+ RUSTSEC-2026-0386（tokio 1.53.1）| 已 CLOSED（2026-10-24 当天开当天关，响应快） |
| S2 | [#11951](https://github.com/zeroclaw-labs/zeroclaw/issues/11951) | 内置 TLS 监听器上 WebSocket 升级失败（101 后断连），仪表盘聊天不可用（v0.9.0）| OPEN |
| S2 | [#11991](https://github.com/zeroclaw-labs/zeroclaw/issues/11991) | 出站邮件 HTML 携带 agent 文本中的原始标记与任意图片 URL（XSS/注入风险）| OPEN，与 [#11992](https://github.com/zeroclaw-labs/zeroclaw/issues/11992) 模板方案配套 |
| S2 | [#11711](https://github.com/zeroclaw-labs/zeroclaw/issues/11711) | 会话裁剪永久删除旧轮次 | OPEN |
| S2 | [#11962](https://github.com/zeroclaw-labs/zeroclaw/issues/11962) | daemon 64 个 RPC 会话不释放，可被远程客户端耗尽 | OPEN |
| S2 | [#11989](https://github.com/zeroclaw-labs/zeroclaw/issues/11989) | 渠道级 `excluded_tools` 从未生效 | OPEN |
| S2 | [#12008](https://github.com/zeroclaw-labs/zeroclaw/issues/12008) | 禁用渠道仍发送 cron 公告与一次性消息（仅 QQ 分支检查 enabled）| OPEN |
| S2 | [#11970](https://github.com/zeroclaw-labs/zeroclaw/issues/11970) | 无网关构建中 agents delete/rename 跳过级联与 ACP 活跃检查 | OPEN |
| S2 | [#11823](https://github.com/zeroclaw-labs/zeroclaw/issues/11823) | Shell 扫描器跳过 heredoc 体中的命令替换 | **有 fix PR [#11822](https://github.com/zeroclaw-labs/zeroclaw/pull/11822)** |
| S3 | [#11792](https://github.com/zeroclaw-labs/zeroclaw/issues/11792)、[#11972](https://github.com/zeroclaw-labs/zeroclaw/issues/11972)、[#11987](https://github.com/zeroclaw-labs/zeroclaw/issues/11987)、[#12006](https://github.com/zeroclaw-labs/zeroclaw/issues/12006) | 插件安装残留目录、get-paircode 错误码、nosemgrep 注释失效、tool_search schema 过期 | OPEN |

**⚠️ 最需关注**：#8279（S0 安全）已挂起近 4 个月且无修复 PR，属于最高优先级安全债务。

---

## 6. 功能请求与路线图信号

明确指向 **v0.9.0** 的功能簇（大概率纳入下一版本）：
- **仪表盘 OIDC 登录**：[#11961](https://github.com/zeroclaw-labs/zeroclaw/issues/11961)（Opt-in OIDC 登录）→ 延伸出非管理员聊天 [#11984](https://github.com/zeroclaw-labs/zeroclaw/issues/11984) 与配套测试任务 [#11985](https://github.com/zeroclaw-labs/zeroclaw/issues/11985)，形成完整 identity/access 工作流。
- **CLI-only 源码构建**：[#11971](https://github.com/zeroclaw-labs/zeroclaw/issues/11971)（不带网关/仪表盘的构建），配套修复 [#11969](https://github.com/zeroclaw-labs/zeroclaw/issues/11969)、[#11970](https://github.com/zeroclaw-labs/zeroclaw/issues/11970)——服务端与最小化安装场景的明确信号。

其他功能请求：
- [#11992](https://github.com/zeroclaw-labs/zeroclaw/issues/11992)：邮件渠道操作员模板 + 净化 HTML body（与 #11991 漏洞互补）。
- [#11799](https://github.com/zeroclaw-labs/zeroclaw/issues/11799)：Shell 策略拒绝时应说明原因并支持操作员提示（改善可用性/可解释性）。
- [#11013](https://github.com/zeroclaw-labs/zeroclaw/issues/11013)：统一文件摄入/解析/交付实施 Tracker（承接 RFC #9488），属长期架构工作。
- 流程层面：[#11876](https://github.com/zeroclaw-labs/zeroclaw/issues/11876)（RFC：聚焦 PR 审查的目的/安全/质量，已关闭）——团队正在自我审视审查流程，这与当前 49 个待合并 PR 的积压直接相关。

---

## 7. 用户反馈摘要

- **数据安全焦虑**：#11711 反映用户担心上下文裁剪导致会话历史不可逆丢失，期望“裁剪”只是视图层面而非持久层删除。
- **渠道运营痛点**：#12008（禁用渠道仍发消息）、#11989（excluded_tools 不生效）、#11991（邮件 HTML 未净化）集中反映**渠道配置的“声明行为”与“实际行为”不一致**，运营者难以信任配置语义。
- **最小化部署需求真实存在**：#11971/#11969/#11970 显示有用户在无 GUI 的服务器上运行 ZeroClaw，希望默认构建不携带网关/仪表盘/ACP 的体积与依赖。
- **自动化与 SOP 可靠性**：#10066 揭示 SOP 流水线中步骤校验时序问题会让“校验失败”形同虚设——工作流用户对执行顺序的正确性高度敏感。
- **对外形象与可诊断性**：#11799、#11972 表明用户希望在策略拒绝/CLI 失败时获得更明确的错误信息，而非静默或错误的退出码。

---

## 8. 待处理积压

| 项目 | 问题 | 建议 |
|---|---|---|
| [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | **S0 安全**，delegate 绕过白名单，2026-06-24 开启至今未修 | **强烈建议优先分配修复**，多代理场景下属高危 |
| [#11853](https://github.com/zeroclaw-labs/zeroclaw/issues/11853) | npm audit 失败，CI 红灯持续数天 | 升级 `@tailwindcss/typography` |
| [#11951](https://github.com/zeroclaw-labs/zeroclaw/issues/11951) | TLS 上 WebSocket 升级失败，直接影响 v0.9.0 仪表盘核心体验 | 阻塞 #7432 Tracker 验收 |
| [#11711](https://github.com/zeroclaw-labs/zeroclaw/issues/11711) | 会话历史永久删除，涉数据丢失风险 | 需要 maintainers 表态设计意图 |
| [#11544](https://github.com/zeroclaw-labs/zeroclaw/pull/11544)、[#11541](https://github.com/zeroclaw-labs/zeroclaw/pull/11541) | Anthropic 相关 PR 处于 `status:blocked`，#11541 还标记 `do-not-merge` | 需要 maintainers 澄清阻塞原因 |
| [#11187](https://github.com/zeroclaw-labs/zeroclaw/pull/11187) 等 XL PR | v0.9.0 核心架构 PR 长期 OPEN（近 1 个月），且堆叠依赖 #11174 | 49 个待合并 PR 的整体审查吞吐需提升，建议参考已关闭的 RFC #11876 精简审查范围 |

---

**健康度总评**：⭐⭐⭐⭐（4/5）——社区活跃、Issue 报告质量高（详细复现与严重度标注）、安全响应快（#12009 当天关闭）；扣分项为 S0 安全 Issue #8279 长期未修、CI 审计红灯未清、PR 审查积压较重。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-10-24

## 1. 今日速览

项目处于高活跃状态：过去24小时 Issues 更新 50 条（48 新开/活跃，仅 2 关闭），PR 更新 50 条（45 待合并，5 已合并/关闭），并发布了 v0.22.5 补丁版本。社区反馈以 **Gateway/会话管理**（sessions、auth、权限拒绝）类 Bug 为主，多个 P2 级问题集中在 v0.22.4→v0.22.5 升级路径上。同时插件生态持续扩张，今日新增多个 catalog 提交（Yandex Disk、Kinocut、ChorePilot 等），显示社区贡献热情高涨。Issue 关闭速度（2/48）明显落后于新开速度，积压呈上升趋势，需关注维护者响应带宽。

---

## 2. 版本发布

### v0.22.5（2026-10-22 发布，今日持续接收反馈）

- **性质**：补丁版本（Patch release），将 v0.22.4 以来约 **81 个 PR** 汇总为稳定发布
- **分发渠道**：GitHub Release（CLI 与安装器）、Microsoft Store 应用、Docker、Hermes Cloud
- **完整 curated 说明**：随 v0.23.0 一并发布
- **注意事项**：无明确破坏性变更声明，但从今日 Issue 看，**升级到 0.22.4/0.22.5 后 Gateway 会话相关回归较多**（见第 5 节），建议生产环境升级前评估 sessions 相关风险

🔗 [Release v0.22.5](https://github.com/NousResearch/hermes-agent/releases)

---

## 3. 项目进展

今日 PR 活动以新提交为主（45 个 open），合并/关闭共 5 个：

- **#91725 / #143850**（Slack 原生 Stop 按钮）：旧 PR 关闭后由 @teknium1 以 port centaur#1973 方式重新提交 #143850，绑定 Slack 原生停止控件到 Hermes 的 `/stop` 权限，对应 Issue [#90978](https://github.com/NousResearch/hermes-agent/issues/90978) 有望近期落地
- **#143441 ChorePilot 入驻插件目录**（已关闭）：本地优先的智能家居 agent 插件，经 CI 审核后完成收录
- **#139248 adaptive-reasoning-router**（已关闭）：社区自适应推理路由插件收录
- **#143853 Codex app-server 子进程恢复**：port centaur#1957，idle 期子进程退出后下一轮自动重生并恢复线程，提升 OpenAI provider 稳定性

整体节奏：主干修复持续推进，外部项目（paradigmxyz/centaur）的上游修复被系统性 port 回来，显示维护者对跨项目同步有明确流程。

---

## 4. 社区热点

| Issue | 热度 | 主题 |
|---|---|---|
| [#124583](https://github.com/NousResearch/hermes-agent/issues/124583) | 20 评论 | terminal 工具后台提示引用不存在的 `process(action=...)`，实际工具名为 `process_manage`，操作者按提示操作即撞死胡同 |
| [#143379](https://github.com/NousResearch/hermes-agent/issues/143379) | 12 评论 | RFC：doc-chain 基底网络的读取、治理与压缩——架构级讨论，涉及记忆持久化与 provenance 保留 |
| [#29458](https://github.com/NousResearch/hermes-agent/issues/29458) | 11 评论 | Kanban `active_pr` respawn guard 无操作员清除路径且忽略已关闭 PR，任务卡死（5 月至今未解） |
| [#123345](https://github.com/NousResearch/hermes-agent/issues/123345) | 10 评论 | terminal 工具 `notify=true` 布尔值被参数校验器拒绝，错误信息自相矛盾 |
| [#142017](https://github.com/NousResearch/hermes-agent/issues/142017) | 9 评论 | Gateway `/model` 切换在携带 config secrets 的 session 上崩溃（AttributeError），10-19 变更引入 |
| [#11347](https://github.com/NousResearch/hermes-agent/issues/11347) | 8 评论 👍8 | `/detach` 功能请求：CLI 退出后 agent 后台继续运行，诉求强烈 |

**背后诉求**：terminal 工具的可用性细节（提示文本、参数校验）是高频痛点；Gateway 会话状态管理（resume、归档、删除、权限）成为 v0.22.4+ 后用户最大的不满聚集地。

---

## 5. Bug 与稳定性（按严重度排列）

### 🔴 高危/安全
- **#138359**：pm 模块 `lock.json` sha256 未做形状校验 → **任意目录删除（已验证）** + facts.json 环境注入 + downloader 回环网关绕过。[Issue](https://github.com/NousResearch/hermes-agent/issues/138359)｜尚无 fix PR，needs-repro
- **#142324**（已关闭 ✅）：Pillow 12.3.0 受 GHSA-78g4-xqwv-q3g8（CVSS 8.1）影响，需升级 13.0.0

### 🟠 P2 级功能破坏
- **#143848**：90 天路由条目裁剪静默"砖化"老会话——每次 resume 均 `admission_conflict`，无自愈、无日志。[链接](https://github.com/NousResearch/hermes-agent/issues/143848)｜无 fix PR
- **#143839**：Desktop 0.22.5 无法归档/删除/恢复自己的新式聊天（`permission_denied` / `not_found`）。[链接](https://github.com/NousResearch/hermes-agent/issues/143839)｜无 fix PR
- **#143844**：Gateway `_PLAIN_COMMANDS` 缺一个 handler 即砖化**所有消息平台的全部回合**。[链接](https://github.com/NousResearch/hermes-agent/issues/143844)｜无 fix PR
- **#143845**：Dashboard 删除已结束 cron 会话返回 404，CLI 同 id 却能删除。[链接](https://github.com/NousResearch/hermes-agent/issues/143845)
- **#143686 / #143849**：API server 无法继续 CLI/Desktop 创建的会话（`permission_denied`），#143849 指出为**回归**。[链接](https://github.com/NousResearch/hermes-agent/issues/143849)
- **#132096**：`pre_tool_call` shell hook 配置 `fail_closed: false` 仍会在一次超时后阻塞全部工具 60 秒。[链接](https://github.com/NousResearch/hermes-agent/issues/132096)
- **#143305 / #143254**：uv 相关插件依赖解析失败——带 Python 依赖的插件全部被拒/驱逐（0.22.5 上的安装更新链问题）。[链接](https://github.com/NousResearch/hermes-agent/issues/143254)

### 🟡 其他值得注意
- **#143833**：性能——会话列表/计数每次请求全量重扫 lineage receipt（约 130ms/次），4583 会话/5.4GB 库下后端吃满 3 核。[链接](https://github.com/NousResearch/hermes-agent/issues/143833)
- **#143817**：后台 review 可在未吸收任何内容的情况下归档活跃 skill，consolidation guard 仅检查名称。[链接](https://github.com/NousResearch/hermes-agent/issues/143817)
- **#109073**：Telegram DM 主会话被 `_delegate_from` 标记污染，会话在所有列表中不可见但路由仍在进行。[链接](https://github.com/NousResearch/hermes-agent/issues/109073)

**结论**：今日新增的 Gateway/sessions 类 P2 Bug 密度异常高，多数尚无对应 fix PR，是当前最不稳定的子系统。

---

## 6. 功能请求与路线图信号

- **`/detach` 后台运行**（[#11347](https://github.com/NousResearch/hermes-agent/issues/11347)，👍8）：用户明确希望退出 TUI 后 agent 继续处理，与现有 `/bg` 互补，呼声高，纳入概率较大
- **文件粘贴上传**（[#118181](https://github.com/NousResearch/hermes-agent/issues/118181)）：桌面端支持 Ctrl+C 文件 → Ctrl+V 粘贴，对标 Slack/Discord/ChatGPT Desktop，桌面体验路线图的自然延伸
- **API server 跨 source 续接会话**（[#143849](https://github.com/NousResearch/hermes-agent/issues/143849)）：回归修复 + opt-in 特性，作者给出了明确修复方向
- **插件目录扩张信号**：今日 PR 中 #143846（Yandex Disk）、#142459（Kinocut 本地视频剪辑）、#143371（codex-theme）、#51466（Apple macOS MCP 四件套）均在推进，生态建设是持续主线
- **上游同步**：centaur 项目修复（#143850、#143853）的持续 port 表明 provider/平台适配稳定性是短期重点

---

## 7. 用户反馈摘要

- **痛点集中区**：① 升级到 0.22.4/0.22.5 后 Gateway 会话的 resume/归档/删除大面积失效（#143848、#143839、#143845、#143686，多个今日新报）；② `hermes update` 链路脆弱——插件 pyproject 缺 `[project]` 表即中止（#122148）、uv 0.13.5 升级导致插件被驱逐（#143254）、更新提示信息缺失（#127940）；③ Windows 原生首装失败（#131199）
- **重度用户场景**：多会话常驻网关（4583 会话、5 客户端）用户暴露性能瓶颈（#143833）；Docker 沙箱 + Remote Desktop 组合下文件下载 404（#137381）
- **满意点**：插件目录审核流程（`hermes plugins validate`）获得贡献者正面使用；安全审计者（@Ethan-Vex）的逐行审计产出高质量报告（#138359），社区质量贡献可观
- **安全敏感度**：用户主动报告 CVE 级依赖问题（#142324）并推动关闭，社区安全意识强

---

## 8. 待处理积压（提醒维护者关注）

| Issue | 状态 | 说明 |
|---|---|---|
| [#29458](https://github.com/NousResearch/hermes-agent/issues/29458) | 5月开至今 | Kanban 任务卡死，11 评论仍无修复路径，影响多 agent 工作流 |
| [#11347](https://github.com/NousResearch/hermes-agent/issues/11347) | 4月开至今 | `/detach`，👍8，高价值功能长期无进展 |
| [#109073](https://github.com/NousResearch/hermes-agent/issues/109073) | 9月开至今 | Telegram 会话"隐身"Bug，用户数据实际仍在被路由，隐患大 |
| [#97691](https://github.com/NousResearch/hermes-agent/issues/97691) | 8月开至今 | skill_manage 批量操作异常路径无回滚，半应用状态 |
| [#96571](https://github.com/NousResearch/hermes-agent/issues/96571) | 8月开至今 | 配置保存竞态条件，影响审批设置持久化 |
| [#131199](https://github.com/NousResearch/hermes-agent/issues/131199) | 10月初 | Windows 首装失败，新用户流失入口，优先级应上调 |
| PR [#123348](https://github.com/NousResearch/hermes-agent/pull/123348)、[#123773](https://github.com/NousResearch/hermes-agent/pull/123773)、[#105524](https://github.com/NousResearch/hermes-agent/pull/105524) | 9月待审 | 修复型 PR 长期未合并，与对应 Issue 一同积压 |

**健康度提示**：Issue 关闭/新开比仅 2/48，Gateway/sessions 子系统回归密集且大多无 fix PR；建议在 v0.23.0 前优先组建 sessions/gateway 专项修复批次，并加快安全类 Issue（#138359）的响应。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-10-24）

## 1. 今日速览

PicoClaw 过去 24 小时整体活跃度**中等偏低**：Issues 更新 2 条（1 开 1 关），PR 更新 4 条（3 待合并、1 关闭），无新版本发布。值得注意的是，今日活跃的 Issue 与 PR 均被机器人标记为 `[stale]`，且多数更新由 stale 机制触发，**真人维护者响应明显不足**，项目维护节奏存在放缓信号。社区贡献仍以第三方 provider 接入和细节修复为主，核心功能演进停滞。

## 2. 版本发布

过去 24 小时无新版本发布，无破坏性变更或迁移事项。

## 3. 项目进展

- **PR [#3371](https://github.com/sipeed/picoclaw/pull/3371)（opencode-go provider）被关闭**：这是今日唯一的 PR 状态收尾。该 PR 由 @EMTumariscal 于 9 月初提交，历经约 6 周未被合并，最终走向关闭。opencode-go 是用户实际在用的服务，社区失去了一个 keep-alive 修复，建议关注是否有替代方案或后续重提。
- 待合并的 3 个 PR（详见下文）今日仅有 stale 标记更新，无实质评审进展，**今日项目净进展接近零**。

## 4. 社区热点

今日无高评论量新讨论，活跃话题围绕两条 Issue：

- **Issue [#3439](https://github.com/sipeed/picoclaw/issues/3439)**（Launcher 网络绑定问题）：@Seng-Jik 报告在 OpenWrt GL-BE6500 上以 procd 常驻运行时，`-public` 与 `-host 0.0.0.0` 同时设置导致 crash loop；`-public` 单独使用只绑 IPv6（`:::1`），IPv4 客户端无法连接。这是典型的嵌入式/路由器部署场景诉求——PicoClaw 的目标用户群确实在小型设备上跑 launcher，网络绑定行为是核心体验。
- **Issue [#3420](https://github.com/sipeed/picoclaw/issues/3420)**（Android DNS 解析失败）今日关闭：pure-Go 构建（`CGO_ENABLED=0`）在 Android 上 DNS 解析指向 `127.0.0.1:53` 被拒，gateway 无法访问 API。仅 2 条评论后随 stale 关闭，**未确认是否真正修复**，Android 侧稳定性存疑。

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#3439](https://github.com/sipeed/picoclaw/issues/3439) `-public` 参数导致 crash loop / 仅绑 IPv6 | OPEN（stale），**无 fix PR** |
| 🟠 中 | [#3420](https://github.com/sipeed/picoclaw/issues/3420) Android pure-Go 构建 DNS 解析失败 | CLOSED（stale 关闭，疑似未修复） |
| 🟡 低 | PR [#3443](https://github.com/sipeed/picoclaw/pull/3443) Telegram MarkdownV2 转义缺陷导致格式回退为纯文本 | 有 fix PR 待合并 |
| 🟡 低 | PR [#3442](https://github.com/sipeed/picoclaw/pull/3442) Cron 任务失败仍记录 `lastStatus: ok`（双重成因） | 有 fix PR 待合并 |

Launcher 的网络绑定问题（#3439）影响所有在路由器/双栈设备上的部署，且已 8 天无维护者回应，是当前最需优先处理的稳定性风险。

## 6. 功能请求与路线图信号

- **PR [#3431](https://github.com/sipeed/picoclaw/pull/3431)（Standard Compute provider）**：厂商员工 @henrikdukefoss 亲自提交，参照 #2917（NEAR AI Cloud）模式接入 OpenAI 兼容网关。由于此类接入已有成熟模板，合并成本低，**最有可能进入下一版本**。
- **PR [#3371](opencode-go provider) 的关闭**释放了一个信号：provider 接入 PR 若长期无响应会被清理，社区可能有用户失去 opencode-go 支持，或需重提简化版 PR。
- 现有 3 个待合并 PR（Telegram 转义修复、cron 状态修复、Standard Compute）均是小而确定的改动，若维护者恢复评审，可一次性批量落地。

## 7. 用户反馈摘要

- **嵌入式/自托管场景是主力**：用户在 OpenWrt 路由器（GL-BE6500）、Android 设备上部署，对静态二进制、procd 服务、IPv4/IPv6 兼容性有强需求（#3439、#3420）。
- **Telegram 集成用户在意输出格式**：MarkdownV2 转义问题导致格式丢失，说明 Telegram 是重要交互渠道（#3443）。
- **Cron 可观测性**：任务状态永远显示 ok，用户无法依赖 `jobs.json` 排障（#3442）。
- **不满意点集中在响应速度**：多条 Issue/PR 在 1-2 周内即被 stale，用户诉求未被人工跟进即被机器人推进生命周期，社区体验受挫。

## 8. 待处理积压

- ⚠️ **[#3439](https://github.com/sipeed/picoclaw/issues/3439)**：crash loop 级 bug，已 stale，无维护者回复，**最紧急**。
- ⚠️ **PR [#3443](https://github.com/sipeed/picoclaw/pull/3443) / [#3442](https://github.com/sipeed/picoclaw/pull/3442)**：修复类 PR 卡在待合并状态并已 stale， Contributor 流失风险高。
- ⚠️ **PR [#3431](https://github.com/sipeed/picoclaw/pull/3431)**：外部厂商贡献，长时间不处理会损害项目与 provider 生态的关系。
- 💡 **#3420 关闭方式存疑**：建议维护者复核 Android DNS 问题是否已有替代修复，避免用户重复开 issue。

**健康度小结**：项目提交侧社区仍然活跃（外部 contributor 持续供给修复与新 provider），但维护者侧评审/合并吞吐量接近零，stale 机器人正在替代人工决策。建议项目方尽快安排一轮 PR 评审与 #3439 的修复排期。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-10-24

## 1. 今日速览

NanoClaw 今日整体活跃度较高，过去 24 小时共有 44 条 Issue/PR 更新，其中 PR 活动（43 条）占绝对主导，社区贡献热情持续。当日新增 1 条 Issue（#4211，涉及 hardened agent 镜像的软件包安装问题），并有 7 个 PR 被合并或关闭，显示维护团队在持续推进代码审查与合并。无新版本发布，但 image-refresh bot 连续产出两个 hardened agent 镜像刷新 PR（#4214、#4217），说明基础设施侧在持续滚动更新。项目整体处于「社区贡献活跃、核心维护吞吐中速」的健康状态。

## 2. 版本发布

过去 24 小时无新 Release。注意：hardened agent 镜像基线正在从 `sha256:abf6c404...` 向 `v2026.10.0-20261023T1647`（`sha256:08bf0547...`）滚动（[#4217](https://github.com/nanocoai/nanoclaw/pull/4217)），用户若固定了旧镜像 digest 需关注刷新 PR 的落地。

## 3. 项目进展

今日合并/关闭的 PR 共 7 条，可见的代表性进展：

- **#4216（已关闭）移除 30 分钟 worker 会话硬性上限**（[@pedromoraes](https://github.com/nanocoai/nanoclaw/pull/4216)）：删除全局心跳超时 kill，同时保留消息级 stuck-claim 恢复机制。这是对长时间运行 agent 任务的重要放宽，解决了用户长时间任务被无差别中断的痛点。
- **#1559（已关闭）向 agent 容器传递 `ANTHROPIC_API_KEY`/`ANTHROPIC_BASE_URL`**（[@cpcowart](https://github.com/nanocoai/nanoclaw/pull/1559)）：修复了按文档配置环境变量却对容器化 agent 无效的静默失败，属于自 3 月以来长期悬挂的修复，今日落地关闭。
- 镜像刷新链（#4214 → #4217）持续推进 hardened 镜像基线更新。

整体来看，今日进展集中在**运行时稳定性（会话上限、环境变量传递）与镜像供应链维护**，属于稳健迭代，无大型架构变更。

## 4. 社区热点

- **Issue [#4211](https://github.com/nanocoai/nanoclaw/issues/4211)**（今日唯一新开 Issue）：hardened agent 镜像（v2026.10.0）中 `install_packages` 无法安装 Pillow、numpy 等依赖 `libgomp1`/`libgfortran5` 的包。已获 1 条评论回复，可能已有人指向镜像刷新 PR #4217 作为潜在修复路径。诉求核心：**用户需要在 agent 容器内做图像/数值计算**，hardened 镜像的精简裁剪与实际使用场景产生冲突。
- 长期活跃 PR **#3976（Copilot SDK provider skill）** 今日再次更新，安全设计（token 全程留在 credential gateway）质量较高，是生态扩展方向的标杆性贡献。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | [#4211](https://github.com/nanocoai/nanoclaw/issues/4211) hardened 镜像无法安装 Pillow/numpy 等科学计算依赖，阻断常见使用场景 | OPEN；疑似由镜像刷新 [#4217](https://github.com/nanocoai/nanoclaw/pull/4217) 缓解 |
| 高 | [#3718](https://github.com/nanocoai/nanoclaw/pull/3718) A2A 消息发送者身份可伪造、单向边显示 `from="unknown"` | 有 fix PR，待审查（triage/needs-author） |
| 中高 | [#3717](https://github.com/nanocoai/nanoclaw/pull/3717) 嵌入 payload 可逃逸 prompt 块结构、伪造上下文 | 有 fix PR，待审查 |
| 中 | [#3542](https://github.com/nanocoai/nanoclaw/pull/3542) 启动收养容器时 `container_status` 漂移 | 有 fix PR，8 月提交至今未合并 |
| 低 | [#3273](https://github.com/nanocoai/nanoclaw/pull/3273) 非 Debian Linux 上 `install-node.sh` 失败 | 有 fix PR |

值得注意的是，两个安全相关的 A2A 修复（#3717/#3718）均已挂 `triage/needs-author`，等待作者响应维护者反馈。

## 6. 功能请求与路线图信号

近期功能方向集中在**生态扩展与本地模型**：

- **llmman 本地模型支持**（[#4210](https://github.com/nanocoai/nanoclaw/pull/4210)）：在 OpenAI/Anthropic 兼容端点外新增本地推理选项，与现有 local-model skills 并列。标签完整（follows-guidelines、kind/feature），合并概率较高。
- **GitHub Copilot 作为 runtime provider**（[#3976](https://github.com/nanocoai/nanoclaw/pull/3976)）：标注 `area/skills` 官方就绪，可能近期进入主线。
- **Proton Mail 原生通道适配器**（[#3726](https://github.com/nanocoai/nanoclaw/pull/3726)）：含 ARM 设备（树莓派）自建 Bridge 方案，覆盖隐私敏感用户群。
- **计划任务 `--fresh-session` 无状态模式**（[#3741](https://github.com/nanocoai/nanoclaw/pull/3741)）：解决定时任务上下文无限膨胀导致成本每周增长 15% 的实际问题，诉求清晰，纳入可能性大。
- **文档止损**：[#4215](https://github.com/nanocoai/nanoclaw/pull/4215) 修正模板文档对已退役 gateway 功能（OneCLI 1.45）的错误承诺。

路线图信号：**渠道多样化（邮件/Copilot）+ 本地模型 + 成本控制**是当前社区驱动的三大主轴。

## 7. 用户反馈摘要

- **痛点：hardened 镜像过于精简**（#4211）：用户在 agent 容器内安装 Python 科学计算栈时被缺库阻断，反映个人 AI 助手的“沙箱安全”与“实用工具链”之间需要更好的平衡点。
- **痛点：长时间任务被 30 分钟上限杀死**（#4216，今日已关闭/修复）：用户需要无运行时长硬顶的 worker 会话。
- **痛点：定时任务成本失控**（#3741）：上下文累积使重复性任务逐日变贵，有用户报告一周成本增 15%。
- **痛点：配置静默失效**（#1559）：环境变量按文档设置却对容器 agent 无效，用户对“文档与行为不一致”容忍度低。
- **满意点**：社区对 skills 插件化机制（provider/channel 以 SKILL 形式交付）参与度高，提交规范（nanoclaw-pr-template:v2）执行良好。

## 8. 待处理积压

维护者需关注以下长期未决项：

- **#3717 / #3718 / #3719**（9 月 4 日提交，安全相关，`triage/needs-author`）：A2A 身份伪造与 prompt 注入逃逸修复已悬挂近两个月，涉及安全应提升优先级。
- **#3542**（8 月 25 日）：`container_status` 漂移修复，核心容器逻辑，待审查。
- **#3273 / #3286 / #3287 / #3318**（8 月中旬，均来自 @wakqasahmed）：一批安装脚本、消息 ID、Bun AVX2 兼容性修复，累计悬挂超过两个月，涉及非 Debian Linux 与旧 CPU 用户的可用性。
- **#3976**（9 月 30 日）：Copilot provider，标签已 `upstream-ready`，建议尽快排期评审。

**健康度小结**：贡献流入稳定、安全修复供给充足，但审查吞吐是当前瓶颈——36 个待合并 PR 中有多个悬挂超 6 周，建议维护团队优先消化带安全标签（area/security）与 needs-author 状态的积压。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-10-24

## 1. 今日速览

NullClaw 今日整体活跃度较低：过去 24 小时仅 1 条 Issue 更新（[#1078](https://github.com/nullclaw/nullclaw/issues/1078)），无 PR 活动、无新版本发布。社区焦点集中在该功能请求上，围绕 provider 兼容性问题展开讨论，已有 2 条评论，说明虽量少但讨论质量尚可。项目处于平稳维护期，无紧急稳定性风险信号。

## 2. 版本发布

无新版本发布，省略。

## 3. 项目进展

今日无 PR 合并或关闭，代码层面无向前推进。当前无待合并 PR，开发节奏平稳但偏静默。

## 4. 社区热点

**[#1078 [enhancement] Allow temperature to be set to null](https://github.com/nullclaw/nullclaw/issues/1078)**（@l2dy，2 条评论）

今日唯一活跃议题。用户请求允许将 `temperature` 设为 `null`，使该参数不被传递给 LLM API。背后的核心诉求是：**部分模型/提供商不接受 temperature 参数**，例如返回错误：

```json
{"error":{"message":"Unsupported parameter: 'temperature' is not supported with this model.","code":"invalid_request_body"}}
```

这反映了 NullClaw 作为多 provider 网关类项目面临的普遍问题——不同 LLM API 的参数支持差异较大，需要更灵活的参数透传/抑制机制（类似问题在 Claude 兼容代理生态中较常见）。

## 5. Bug 与稳定性

- 今日无新报 Bug、崩溃或回归问题。唯一 Issue #1078 属于**兼容性缺陷/功能增强**范畴：特定模型下硬性传递 `temperature` 导致请求被拒绝，影响可用性，但非崩溃级问题。目前**尚无对应 fix PR**。

## 6. 功能请求与路线图信号

| 请求 | 状态 | 纳入下一版本可能性 |
|---|---|---|
| 允许 `temperature` 为 null，跳过向 API 传参 ([#1078](https://github.com/nullclaw/nullclaw/issues/1078)) | Open，2 条评论，无 PR | **中等偏高**——改动小、诉求明确、直接解决 provider 兼容痛点，维护者通常对此类小改动响应较快 |

## 7. 用户反馈摘要

- **痛点**：使用不支持 `temperature` 的模型时，NullClaw 强制传递该参数导致请求直接报错 `invalid_request_body`，用户被迫使用受限模型或放弃某些 provider。
- **使用场景**：用户将 NullClaw 作为统一代理接入多家 LLM 提供商，期望参数透传行为可配置。
- **诉求倾向**：希望“未设置即不传参”的语义符合直觉，而非发送默认值。

## 8. 待处理积压

今日数据中无长期未响应的 Issue/PR，暂无积压风险。建议维护者关注 #1078 的后续讨论，若确认接受，可考虑同步审查其他采样参数（如 `top_p`）是否也存在同类“强制传递”问题，一次性提升多 provider 兼容性。

---

*数据来源：NullClaw GitHub 仓库（2026-10-23 至 2026-10-24 窗口）*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-10-24）

## 1. 今日速览

IronClaw 今日整体活跃度较低，属于依赖维护型静默日。过去 24 小时无新开或活跃的 Issue，无版本发布，无 PR 合并或关闭。新增 4 条 PR，全部由 Dependabot 自动发起的依赖升级，覆盖前端（ironclaw_webui/frontend）与 E2E 测试链路。项目当前处于日常依赖保鲜阶段，无功能性变更或社区讨论，健康度平稳但需关注人工活跃度偏低的情况。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无合并/关闭的 PR，项目功能层面无实质推进。4 条待合并 PR 均为依赖升级：

| PR | 依赖 | 版本变化 | 类型 |
|---|---|---|---|
| [#8155](https://github.com/nearai/ironclaw/pull/8155) | dompurify | 3.4.12 → 3.4.17 | 生产依赖（安全相关） |
| [#8156](https://github.com/nearai/ironclaw/pull/8156) | @storybook/addon-vitest | 10.5.7 → 10.6.2 | 开发依赖 |
| [#8158](https://github.com/nearai/ironclaw/pull/8158) | storybook | 10.5.7 → 10.6.2 | 开发依赖 |
| [#8157](https://github.com/nearai/ironclaw/pull/8157) | certifi (uv) | 2026.7.22 → 2026.10.19 | E2E 测试依赖 |

**分析**：
- **#8155（dompurify）值得关注**：DOMPurify 是前端 XSS 防护核心库，3.4.x 系列补丁版本通常包含安全修复，建议优先审核合并。上一次 certifi 大版本更新（2026.7）曾涉及根证书变更，本次 10.19 版本摘要中提到 "Restore unaffected emSign roots"，涉及证书信任链调整，E2E 测试环境中如涉及 TLS 校验需留意。
- **#8156 与 #8158 为配套升级**：Storybook 核心 addon 需同步升到 10.6.2，建议一并审查合并以避免版本不一致。

## 4. 社区热点

今日无活跃讨论。4 条 PR 均为机器人创建（@dependabot[bot]），评论数、点赞数均为 0，无人类维护者或社区成员参与互动。

## 5. Bug 与稳定性

- 今日无新报告的 Bug、崩溃或回归问题。
- 附带提醒：#8155（dompurify 3.4.12 → 3.4.17）升级本身即是对上游已修复问题的跟进，若上游修复涉及安全漏洞，建议维护者确认当前 3.4.12 版本是否存在暴露风险并尽快合并。

## 6. 功能请求与路线图信号

今日无新功能请求。从依赖结构可间接观察到的信号：

- 前端使用 Storybook 10.x 进行组件开发与测试（含 Vitest addon），表明 Web UI（ironclaw_webui）是持续投入的产品方向。
- E2E 测试采用 Python/uv 技术栈（certifi 依赖），测试基础设施成熟，CI 自动化程度高（Dependabot 覆盖多语言多目录）。

## 7. 用户反馈摘要

今日无 Issue 或评论数据，无法提炼用户反馈。

## 8. 待处理积压

当前 4 条待合并 PR 均创建于昨日（2026-10-23），尚未构成积压，但提醒维护者：

- **优先处理**：[#8155](https://github.com/nearai/ironclaw/pull/8155)（dompurify 安全相关升级）
- **成对处理**：[#8156](https://github.com/nearai/ironclaw/pull/8156) + [#8158](https://github.com/nearai/ironclaw/pull/8158)（Storybook 套件同步升级）
- **例行处理**：[#8157](https://github.com/nearai/ironclaw/pull/8157)（certifi 证书库升级）

**健康度提示**：今日零人工活动（无人类提交、评论、Issue），依赖机器人维护。若该状态持续多日，建议社区关注项目维护者活跃度，避免自动化 PR 长期无人审查形成积压。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 · 2026-10-24

## 1. 今日速览

项目今日保持高活跃状态：过去 24 小时内完成 **1 个版本发布**（2026.10.23），处理 **18 条 PR 更新**（其中 15 条已合并/关闭，含一批集中清理的 stale PR），Issues 更新 3 条（1 新开、2 关闭）。核心贡献者 @fisherdaddy 单日合并多个修复与功能 PR，发布节奏稳定、社区响应迅速，整体健康度良好。新版重点引入对话内图像编辑、远程工具连接改进与用量可视化，值得用户尽快升级体验。

---

## 2. 版本发布

### 🚀 LobsterAI 2026.10.23（2026-10-23 发布）

[Release 链接](https://github.com/netease-youdao/LobsterAI/releases)

官方更新要点：
- **对话内图像编辑**：无需离开对话即可对图像进行标注/编辑（对应 PR #2927 修复的图像编辑器闪烁与选区崩溃问题）
- **远程工具连接更便捷**（MCP 相关改进）
- **用量可见性提升**：用户可更清晰地了解使用情况
- **启动可靠性改进**（对应 PR #2932 修复的 OpenClaw 网关启动即重启问题，此前每次启动浪费 100–280 秒）
- **浏览器任务与账号恢复流程改进**（对应 PR #2928 订阅/企业账号不再误弹一元试用弹窗）

**迁移注意**：未见破坏性变更声明；依赖 katex 的 PR #2855（0.16.47 → 0.19.0，跨多个 minor 版本）仍在待合并状态，暂不影响用户。

---

## 3. 项目进展

今日合并/关闭的 15 条 PR 中，实质性推进包括：

### 功能类
- **PR [#2931](https://github.com/netease-youdao/LobsterAI/pull/2931)**：新增「退出前确认」设置开关（kv key `app_quit_confirmation_enabled`），关闭后退出不再弹窗，但未保存的 Markdown/Office 编辑仍会提示——直接响应 Issue #2921 的用户诉求，**Issue → PR → 合并当天闭环**，响应效率高。
- **PR [#2928](https://github.com/netease-youdao/LobsterAI/pull/2928)**（@Mind-Hand）：订阅与企业账号不再显示一元试用弹窗，修复了弹窗在对话框关闭后复现的问题。

### 修复类
- **PR [#2932](https://github.com/netease-youdao/LobsterAI/pull/2932)**：修复 OpenClaw 网关每次启动被硬重启两次的问题，Windows 日志中 7 次启动全部复现，节省每次 100–280 秒启动时间。**高价值性能修复**。
- **PR [#2929](https://github.com/netease-youdao/LobsterAI/pull/2929)**：修复升级后额度消耗过快问题——transcript 中工具 payload 被掩码导致缓存重放失效，重度代码阅读会话仅 15% prompt 命中缓存。**涉及用户成本，优先级高**。
- **PR [#2927](https://github.com/netease-youdao/LobsterAI/pull/2927)**：修复图像编辑器预览闪烁与选区拖拽崩溃（10.19 反馈第 6/7/10 行）。
- **PR [#2930](https://github.com/netease-youdao/LobsterAI/pull/2930)**：修复 macOS 上点击桌面悬浮球会意外激活主窗口的问题。
- **PR [#2937](https://github.com/netease-youdao/LobsterAI/pull/2937)**：Cowork 历史消息持续加载直到视口填满。

### 文档与工程
- **PR [#2934](https://github.com/netease-youdao/LobsterAI/pull/2934)**：重写双语 README、更换截图、新增双语 CONTRIBUTING 指南——为吸引外部贡献做基建。
- **PR [#2935](https://github.com/netease-youdao/LobsterAI/pull/2935)**：将微信群二维码入仓，修复 camo 代理下图片裂链（海外用户可见）。

**整体评估**：单日推进约 8 项实质改动，覆盖功能、性能、成本、文档四个维度，节奏快且与用户反馈强关联。

---

## 4. 社区热点

- **Issue [#2921](https://github.com/netease-youdao/LobsterAI/issues/2921)**（👍 0，评论 2，已关闭）：用户 @heerey525 请求增加「退出前不再确认」设置项，指出现有 Cmd+Q 二次确认对常驻工具用户是"纯摩擦"。**当日即被 PR #2931 实现并关闭**，是社区反馈快速落地的典范案例。
- **Issue [#2936](https://github.com/netease-youdao/LobsterAI/issues/2936)**（新开，申诉类）：用户申诉两个账号被误封，自述曾将账号凭据配置进第三方 DSH 插件调用有道模型服务——反映了**第三方插件滥用凭据触发风控**的边界问题，建议官方明确凭据使用政策并在文档中警示。
- **PR [#2938](https://github.com/netease-youdao/LobsterAI/pull/2938)**（待审）：@alison-xx 贡献 **879 条专家目录**（43 桌面预设、53 专家团队/328 角色、783 WorkBuddy 专家），规模巨大，维护者审核成本不低，是今日最值得关注的开源 PR。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#2906](https://github.com/netease-youdao/LobsterAI/issues/2906) stdio MCP server 静默丢弃 `NODE_OPTIONS`，TLS 拦截环境下所有 MCP 工具 `fetch failed`（工具列表正常但调用全挂，UI 无提示） | **今日已关闭**，修复应已随 2026.10.23 发布，建议受影响用户升级验证 |
| 🔴 高 | 网关双重启动致启动慢 100–280s（PR #2932）、缓存掩码致额度消耗过快（PR #2929） | 均已修复合并 |
| 🟡 中 | 图像编辑器选区拖拽崩溃 / 预览闪烁（PR #2927）、订阅账号误弹试用弹窗（PR #2928） | 均已修复合并 |
| 🟢 低 | macOS 悬浮球点击激活主窗口（PR #2930） | 已修复合并 |

**亮点**：今日无新增未处理的 Bug 报告，且积压 Bug 全部清零并随版本发布。

---

## 6. 功能请求与路线图信号

- **退出确认开关**（Issue #2921）→ ✅ 已在 PR #2931 落地，随 2026.10.23 发布。
- **专家生态扩展**（PR #2938 的 879 条专家贡献）→ 待审中，若合入将显著扩充专家库，暗示"专家市场/社区贡献"可能是下一阶段方向。
- **凭据安全与风控透明化**（Issue #2936）→ 预计官方需补充分享凭据的政策文档，可能推动账号恢复流程改进（新版 Release 已提及 "account recovery"）。
- 历史功能型 stale PR（#610 结构化输入内核、#725 消息书签系统）被关闭，但诉求仍在，不排除以官方实现形式回归。

---

## 7. 用户反馈摘要

- **高频痛点（已解决）**：退出二次确认打断工作流（常驻用户）；升级后额度消耗异常加快（重度代码阅读用户）；企业/订阅用户被试用弹窗骚扰。
- **使用场景信号**：用户将 LobsterAI 作为常驻桌面工具高频启停；开发者依赖 MCP + 企业 TLS 拦截环境（代理证书）；macOS 多窗口工作流依赖悬浮球快捷输入。
- **信任与合规焦虑**：账号封禁申诉反映用户对风控误判（尤其第三方插件配置凭据场景）缺乏申诉通道和明确规则的不满。
- **满意度信号**：反馈 → 修复 → 发版链路在 1–3 天内完成，社区对响应速度评价正面（Issue #2921 当天闭环）。

---

## 8. 待处理积压

| 项目 | 说明 | 建议 |
|---|---|---|
| [PR #2938](https://github.com/netease-youdao/LobsterAI/pull/2938) | 879 条专家贡献，今日新开 | 需维护者尽快分批审核，避免大 PR 长期滞留 |
| [PR #2855](https://github.com/netease-youdao/LobsterAI/pull/2855) | katex 0.16.47 → 0.19.0，跨多个 minor，10-11 开启至今 | 建议评估公式渲染兼容性后合并，含安全更新价值 |
| [PR #2727](https://github.com/netease-youdao/LobsterAI/pull/2727) | OpenClaw 插件 entry hooks 持久化修复，9-20 开启，已标 stale | 修复真实配置丢失问题（关联 #2654），建议维护者接手而非任其 stale |
| [Issue #2936](https://github.com/netease-youdao/LobsterAI/issues/2936) | 账号误封申诉 | 需要运营/风控团队介入，GitHub 侧至少应给出申诉渠道指引 |

**清理动作记录**：今日集中关闭 5 条 3 月份的 stale PR（#547、#610、#725、#736、#738），其中 #610（输入内核重构）和 #736（React.memo 性能优化）质量较高，建议维护者评估是否以官方立项方式回收利用。

---

*数据来源：netease-youdao/LobsterAI GitHub，统计窗口 2026-10-23 至 2026-10-24。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-10-24）

## 1. 今日速览
Moltis 今日整体活跃度处于**中低水平但质量较高**：无新增 Issue，但完成了 3 条 PR 更新（2 条已关闭/合并、1 条开放待审），并发布了新版本 `20261023.01`。项目活跃度主要由核心维护者（@penso、@PeterDaveHello）驱动，社区讨论热度平淡。近期工作重心集中在**模型供应商适配（NEAR AI、DeepSeek、Z.AI）与 i18n 国际化完善**两条线上，项目处于持续迭代、稳定打磨阶段。

## 2. 版本发布
- **[20261023.01](https://github.com/moltis-org/moltis/releases)**（发布于 2026-10-23）
  - Release Note 未附详细变更说明，推测包含同日合并的两个 providers 修复 PR（#1317、#1318）。
  - 未标注破坏性变更，无明确迁移注意事项。

## 3. 项目进展
今日推进主要体现在两个方向：

**模型供应商修复（已关闭，可能已包含在新版本中）：**
- [#1317](https://github.com/moltis-org/moltis/pull/1317) [CLOSED] fix(providers): correct DeepSeek thinking tests and refresh Z.AI models —— @penso
  修正 DeepSeek 思维链（thinking）的实时推理契约：确认简单工具调用即使开启 thinking 也可能返回零 reasoning tokens，验证流式无损解析与工具结果回放，同时刷新 Z.AI 模型列表。属于测试正确性与模型目录维护的稳健性修复。
- [#1318](https://github.com/moltis-org/moltis/pull/1318) [CLOSED] fix(providers): use canonical NEAR AI catalog model —— @penso
  修复 NEAR AI 发布门禁的关键问题：公共目录现返回 `z-ai/glm-5.3-flash`，`zai-org/GLM-5.1-FP8` 仅作为补全别名保留。此前目录断言误用别名，导致聊天测试通过但模型发现失败。这是一个**隐蔽的测试假阳性修复**，价值较高。

**国际化完善（开放待审）：**
- [#1315](https://github.com/moltis-org/moltis/pull/1315) [OPEN] fix(i18n): localize security, onboarding, sessions, and model selection —— @PeterDaveHello
  将安全提示、新手引导、会话管理与模型选择等仍硬编码英文的 Web UI 文案接入现有 locale 体系，在 `en`、`fr`、`zh`、`zh-TW` 四个语言包中新增对应键，且不改动已有翻译。

**整体评估：** 今日推进幅度中等，重点在于供应商适配的准确性修复，为多模型支持的可靠性奠定基础。

## 4. 社区热点
- 今日无 Issue 活动，PR 评论数据缺失（评论数 undefined），**无法识别明显的社区讨论热点**。
- 值得留意的是 i18n PR 由 @PeterDaveHello（zh-TW 社区知名贡献者）提交，反映**中文/繁中用户群体的本地化诉求**是当前社区贡献的重要来源。

## 5. Bug 与稳定性
今日无用户报告的 Bug。相关修复均为维护者主动发起：
1. **NEAR AI 模型发现失败**（中等严重度，测试假阳性）→ 已修复，见 [#1318](https://github.com/moltis-org/moltis/pull/1318)
2. **DeepSeek thinking 测试契约不准**（低严重度，测试正确性）→ 已修复，见 [#1317](https://github.com/moltis-org/moltis/pull/1317)
3. **Web UI 部分文案未国际化**（低严重度，体验问题）→ fix PR 开放中，见 [#1315](https://github.com/moltis-org/moltis/pull/1315)

## 6. 功能请求与路线图信号
- 今日无新功能请求。
- 从 PR 趋势推断的路线图信号：**多供应商（NEAR AI / DeepSeek / Z.AI）模型目录的持续维护**与 **GLM-5.3 等新模型接入**是近期重点；i18n 覆盖面扩展（含 zh-TW）有望随 #1315 合并进入下一版本。

## 7. 用户反馈摘要
- 今日无 Issue 评论数据，**无法提炼用户直接反馈**。
- 间接信号：国际化 PR 的存在表明非英文用户在使用 Web UI 时遇到混合语言体验，是真实痛点。

## 8. 待处理积压
- **[PR #1315](https://github.com/moltis-org/moltis/pull/1315)**：开放状态且已提交一天，建议维护者及时 review，避免本地化贡献积压。
- 今日数据窗口内无长期未响应 Issue，但建议关注 Issue 流量连续为零的情况——可能反映社区触达或反馈渠道需要激活。

---
*数据来源：GitHub API（过去 24 小时窗口）。本报告基于客观数据生成，评论数据缺失处已如实标注。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-10-24）

> 数据说明：本期 Issues 数据中的链接实际指向 `agentscope-ai/QwenPaw`（项目内别名/关联仓库），以下按原始数据呈现。

---

## 1. 今日速览

- 过去 24 小时共 14 条 Issue 更新（新开/活跃 6，关闭 8）、39 条 PR 更新（待合并 27，已合并/关闭 12），无新版本发布，整体处于 **高活跃度、以维护与修复为主** 的阶段。
- 上一个版本 v2.2.2.post1 的发布验证（[#8386](https://github.com/agentscope-ai/QwenPaw/issues/8386)）已于昨日完成并关闭，说明发布流程闭环健康。
- 多个长期大型特性 PR（频道插件化 #8187、PawApp SDK 重设计 #7874、ReMe 记忆集成 #8347）持续推进，显示 v2.3 系列的架构演进在加速。
- 社区贡献活跃：首贡献者标签的 PR/Issue 多条，包括插件策略钩子、插件下载错误处理、文档修复等。
- 风险点：渠道层（DingTalk、QQ、XiaoYi）的稳定性问题集中暴露，成为当前用户投诉的主要来源。

---

## 2. 版本发布

今日无新版本发布。最近版本为 v2.2.2.post1，其安装验证 Issue [#8386](https://github.com/agentscope-ai/QwenPaw/issues/8386) 已关闭，四大检查点全部通过。

---

## 3. 项目进展

今日无大额合并记录在案（12 条已合并/关闭 PR 多为测试侧修复与收尾），但待合并管道内容充实：

**测试与稳定性（已关闭）**
- [#8383](https://github.com/agentscope-ai/QwenPaw/pull/8383)：修复 sips 预检用例在 Windows 上的平台差异失败（测试侧缺陷）。
- [#8381](https://github.com/agentscope-ai/QwenPaw/pull/8381)：修复 Windows nightly 单测中 advisor 列表与 TUI 断言失败。
- [#8382](https://github.com/agentscope-ai/QwenPaw/pull/8382)：用原始 socket 回应 sidecar 健康探测，修复 macOS 单测超时。
- [#8399](https://github.com/agentscope-ai/QwenPaw/pull/8399)：修复 Hub 模型策略草稿在刷新时被旧值覆盖（与 Issue #8372 网关超时问题相关）。

**重要待合并（推进中的功能线）**
- [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187)（XXXL）：官方频道插件化 + 子进程隔离 —— 架构级改造，正对应近期渠道 Bug 频发的痛点。
- [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874)（XXXL）：PawApp SDK 与应用控制平面重设计。
- [#8347](https://github.com/agentscope-ai/QwenPaw/pull/8347)（XXL）：ReMe 升级至 0.4.2.0，引入决策压缩、图片记忆、实体标签（默认关闭）。
- [#8318](https://github.com/agentscope-ai/QwenPaw/pull/8318)：新增 `/steer` 命令，支持执行中途引导 Agent。
- [#8357](https://github.com/agentscope-ai/QwenPaw/pull/8357)：Creator 2.0.3 发布准备（skills、narration、script import）。
- [#8397](https://github.com/agentscope-ai/QwenPaw/pull/8397)：插件下载网络错误规范化为 HTTP 400，已 ready-for-human-review。

---

## 4. 社区热点

- **[#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)（OPEN，8 评论，10-01 创建）**：插件作者请求 Console 主题系统提供语义 token 覆盖层扩展点。讨论持续 3 周仍未落地，反映**插件生态对 UI 定制深度的强烈诉求**，是当前讨论量最高的 Issue。
- **[#8252](https://github.com/agentscope-ai/QwenPaw/issues/8252)（CLOSED，4 评论）**：多 Agent 舰队场景下 agent 间调用被静默取消（CancelledError），产物归零且无取消原因记录。属高严重度运行时问题，今日关闭，说明已有处理。
- **[#8343](https://github.com/agentscope-ai/QwenPaw/issues/8343)（OPEN，DingTalk 回复静默丢弃）**：sessionWebhook 过期后无 Open API 回退，用户完全收不到回复，反映企业 IM 集成场景的可靠性诉求。

---

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 状态 | 说明 | Fix 进展 |
|---|---|---|---|---|
| 🔴 高 | [#8252](https://github.com/agentscope-ai/QwenPaw/issues/8252) Agent 间调用静默取消，产物归零 | CLOSED | 多 Agent 编排核心问题 | 已关闭 |
| 🔴 高 | [#8298](https://github.com/agentscope-ai/QwenPaw/issues/8298) 视频 send_file_to_user 导致会话永久卡死（422 video_url） | CLOSED | 会话级不可恢复故障 | 已关闭 |
| 🟠 中高 | [#8394](https://github.com/agentscope-ai/QwenPaw/issues/8394) XiaoYi 渠道长任务无状态帧、静默断连 | OPEN | 客户端空白数分钟 | 暂无对应 PR |
| 🟠 中 | [#8343](https://github.com/agentscope-ai/QwenPaw/issues/8343) DingTalk 回复静默丢弃 | OPEN | 无 Open API 回退 | 暂无 |
| 🟠 中 | [#8406](https://github.com/agentscope-ai/QwenPaw/issues/8406) QQ 渠道 enabled 标志被静默重置 | OPEN | 今日新报 | 暂无 |
| 🟡 低 | [#8405](https://github.com/agentscope-ai/QwenPaw/issues/8405) MCP 配置弹窗 http/sse 模式无法关闭 | OPEN | Console UI 缺陷 | 暂无 |
| 🟡 低 | [#8396](https://github.com/agentscope-ai/QwenPaw/issues/8396) / [#8368](https://github.com/agentscope-ai/QwenPaw/issues/8368) 删除当前会话报错（2.3.0b1 与 2.2.x） | CLOSED | 删除后未切换选中会话 | 已关闭 |
| 🟡 低 | [#8284](https://github.com/agentscope-ai/QwenPaw/issues/8284) 长对话滚动回弹 1-2k px | CLOSED | Console 虚拟列表重估高度问题 | 已关闭 |
| 🟡 低 | [#8400](https://github.com/agentscope-ai/QwenPaw/pull/8400) make-skill 被自家安全扫描器误杀 | PR OPEN | 规则误报 | PR 已提交 |

**模式观察**：渠道层 Bug（DingTalk/QQ/XiaoYi）占新报缺陷的一半，与 #8187 的频道插件化隔离改造高度相关，该 PR 合并后有望系统性缓解。

---

## 6. 功能请求与路线图信号

- **Office 文件预览**（[#8404](https://github.com/agentscope-ai/QwenPaw/issues/8404)）：Console 文件抽屉增加 docx/xlsx/pptx 预览。Agent 日常产出 Office 文档，用户被迫离开聊天界面，诉求明确，属低成本高感知改进，**较可能纳入下一版本**。
- **插件主题扩展点**（[#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)）：语义 token 覆盖层。讨论充分（8 评论）但尚无对应 PR，需要架构决策。
- **网关超时可配置**（[#8372](https://github.com/agentscope-ai/QwenPaw/issues/8372)，CLOSED）：120s 默认超时对长文件处理不足；#8399 已修复草稿丢失，超时配置能力或随之完善。
- **`/steer` 中途引导命令**（[#8318](https://github.com/agentscope-ai/QwenPaw/pull/8318)）：活跃 PR，修复 #1775，体验类高价值功能。
- **Hub 本地模型展示异常**（[#8392](https://github.com/agentscope-ai/QwenPaw/issues/8392)，CLOSED）：Hub 模式下的团队模型管理正在被打磨。

---

## 7. 用户反馈摘要

- **多 Agent 编排用户**（#8252）：Orchestrator/Reasoner/Executor 等多角色舰队 + 飞书入口是真实生产用法；最痛的是**静默失败无日志**，用户强调“取消不记录发起方与原因”比失败本身更难接受。
- **企业 IM 用户**（#8343、#8406）：DingTalk/QQ 是重要入口，长耗时回复场景（>webhook TTL）普遍；诉求是“宁可有错误提示，不要静默无响应”。
- **Hub 管理员**（#8372、#8392）：本地模型 + 团队共享的私有化部署是典型场景，超时与配置展示的小问题直接影响日常管理体验。
- **插件/技能开发者**（#8071、#8400）：开发者生态正在成长，但受限于主题定制能力单一、安全扫描误报等“平台侧摩擦”。
- **正面信号**：删除会话、滚动卡顿等 UI 问题修复迅速（创建 1-2 天内关闭），用户对响应速度总体满意。

---

## 8. 待处理积压

- **[#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211)**（首贡献者，Under Review，8 月 21 日创建）：注入上下文持久化修复，已挂起 **2 个多月**，关联 #6360/#6358，建议维护者优先给出 human review 结论。
- **[#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)**：插件主题扩展点，10-01 创建、8 条评论仍无官方定论，插件社区在等待方向。
- **[#8343](https://github.com/agentscope-ai/QwenPaw/issues/8343)**：DingTalk 静默丢回复，10-20 报告后无修复动作，属用户可感知的高优先级缺陷。
- **[#8124](https://github.com/agentscope-ai/QwenPaw/pull/8124)**（Under Review，10-08）：内容审查错误路由到 fallback 模型，影响多模型容错体验，可考虑尽快合入。
- **巨型 PR 审查瓶颈**：#8187（XXXL）、#7874（XXXL）、#8347（XXL）三项架构级 PR 长期处于待合并状态（27 条 pending PR 积压），建议明确审查排期，避免 v2.3 线路堵塞。

---

**健康度小结**：修复吞吐 > 新报缺陷（8 关闭 vs 6 新开），发布流程自动化运转正常，社区贡献流入稳定。主要风险集中在渠道层稳定性与巨型 PR 的审查积压。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报（2026-10-24）

## 1. 今日速览

ZeptoClaw 今日整体活跃度较低，过去 24 小时仅 1 条 Issue 更新和 1 条 PR 更新，无新版本发布。唯一的动态来自社区贡献者 @aiapienthusiast，其以“Issue + PR”配对的方式贡献了 Cheaper Inference 作为新的 OpenAI 兼容推理提供商。值得注意的是，该 PR 紧随 Issue 提出即提交，属于典型的自驱动贡献模式，且复用了现有 `openai` 共享后端，实现成本低、合并风险小。项目当前处于平稳迭代期，provider 生态持续扩展中。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 被合并或关闭。

- **PR #716 [OPEN]**：`feat(providers): add Cheaper Inference as OpenAI-compatible provider`（作者 @aiapienthusiast，2026-10-23 创建）
  - 将 Cheaper Inference 作为运行时 provider 添加，实现路径与此前已合并的 Novita AI（#390）和 Liquid AI（#543）保持一致
  - 关键设计：**复用共享的 `openai` 后端，不新增 provider 文件**，符合项目 provider 注册表架构惯例，代码改动极小
  - 链接：https://github.com/qhkm/zeptoclaw/pull/716
  - 评估：从 Issue 提出到 PR 提交仅隔一天，且完全套用成熟模板，大概率会快速通过 review 合并，预计为下一版本带来新的 provider 支持。

## 4. 社区热点

今日最活跃（也是唯一）的讨论话题：

- **Issue #715 [OPEN]**：`Add Cheaper Inference as an OpenAI-compatible provider`（@aiapienthusiast，👍 0，评论 0）
  - 链接：https://github.com/qhkm/zeptoclaw/issues/715
  - 诉求：Cheaper Inference 是一个 OpenAI 兼容的 LLM 网关，一个 API key 即可访问多家模型厂商的模型。用户希望 ZeptoClaw 原生支持，免去手动配置 base URL 的麻烦
  - 分析：这延续了 #390（Novita）和 #543（Liquid AI）以来的模式——社区持续推动 ZeptoClaw 接入更多低成本/聚合型推理网关，反映出用户对“多模型、低成本、统一配置”的核心需求。这类聚合网关的接入需求可能是 provider registry 的持续增长点。

## 5. Bug 与稳定性

今日无新增 Bug、崩溃或回归报告。👍

## 6. 功能请求与路线图信号

| 功能请求 | 状态 | 合并前景 |
|---|---|---|
| Cheaper Inference provider 支持（[#715](https://github.com/qhkm/zeptoclaw/issues/715)） | 已有对应 PR [#716](https://github.com/qhkm/zeptoclaw/pull/716) | **高**——复用现有 `openai` 后端、套用 #390/#543 成熟模式，无破坏性变更 |

**路线图信号**：项目 provider 注册表呈现标准化、低摩擦的扩展模式（Issue → 模板化 PR → 复用 openai backend），未来 OpenAI 兼容网关的接入门槛将持续降低。下一版本很可能包含此 provider 及近期类似贡献。

## 7. 用户反馈摘要

今日 Issue/PR 均无评论，无法提炼社区讨论反馈。从 Issue #715 表述可间接看出一个用户痛点：

- **痛点**：使用 OpenAI 兼容网关时需手动设置 base URL，配置繁琐，缺乏开箱即用体验——这是促使贡献者提交本 PR 的直接动因。

## 8. 待处理积压

- **PR #716**（Cheaper Inference provider）：已提交但尚无评论/审查记录，建议维护者优先 review——改动小、模式成熟，合并后可快速交付价值。
- 建议关注 #715/#716 配对贡献者的后续动态，保持对低成本推理网关接入需求的响应速度，以维持社区贡献积极性。

---

*数据来源：ZeptoClaw GitHub 仓库（qhkm/zeptoclaw）过去 24 小时活动数据。*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报（2026-10-24）

## 1. 今日速览

EasyClaw（TK Copilot）今日社区互动完全静默：无新增/活跃 Issue、无 PR 更新，开发者侧的活动集中体现在**连续两个版本发布**（v1.9.38、v1.9.39），显示项目处于高频迭代期。两次发版聚焦达人（Creator）运营工作台的数据可视化、多语言支持与巴西市场本地化能力，功能演进方向明确。综合评估：**开发活跃度高、社区参与度低**，项目健康度主要依赖维护者自驱。项目地址：https://github.com/gaoyangz77/easyclaw

## 2. 版本发布

### v1.9.39 — TK Copilot v1.9.39（今日最新）
🔗 https://github.com/gaoyangz77/easyclaw/releases/tag/v1.9.39

**更新内容：**
- 可视化展示达人表现数据，并提供多语言类目目录
- 展示账号范围内的客服覆盖情况
- 隐藏达人资料中的表现数据来源店铺等内部信息

**分析：** 第三条为信息治理类变更——隐藏内部数据来源店铺，可能是出于数据合规或防止竞对溯源的考虑，属**行为变更**而非破坏性 API 变更，用户无迁移成本，但依赖该内部信息做人工核对的工作流需注意。

### v1.9.38 — TK Copilot v1.9.38
🔗 https://github.com/gaoyangz77/easyclaw/releases/tag/v1.9.38

**更新内容：**
- 支持本地搜索店铺并展示巴西市场标签
- 优化达人工作台可读性、UID 备注搜索与对话历史
- 支持基于营销活动模板撰写定向邀约卡片，并可在撰写前选择回复渠道与账号

**分析：** 巴西市场标签的加入是明显的**市场扩张信号**（TikTok 电商巴西市场）；邀约模板化 + 回复渠道预选显著降低批量触达达人的操作成本。

**迁移注意：** 两个版本均未声明破坏性变更，属平滑升级路径。

## 3. 项目进展

- 今日无 PR 合并/关闭记录（0 条），但两个 Release 表明维护者以**直接推送主干 + 发版**的模式工作，绕过 PR 流程。
- 功能推进评估：两天内完成达人数据可视化、多语言类目目录、巴西市场标签、邀约模板四大功能模块，迭代节奏快（约一天一版），主要围绕**达人营销自动化**主线深化。

## 4. 社区热点

今日无活跃 Issue 或 PR，无社区讨论热点。

**观察：** 结合发版频率高但 Issue/PR 为零的情况，可能原因包括：用户反馈渠道不在 GitHub（如微信群/私域）、项目用户基数尚小、或以内部团队使用为主。建议维护者关注 GitHub 之外反馈渠道的沉淀，否则社区信号缺失会影响项目长期演进的方向校验。

## 5. Bug 与稳定性

- 今日无新报告的 Bug、崩溃或回归问题，无需 fix PR。

## 6. 功能请求与路线图信号

- 今日无用户提出的功能请求。
- 从发版轨迹推断的隐性路线图：
  - **国际化深化**（多语言类目目录已落地，巴西市场标签已上线）→ 预计后续继续覆盖更多 TikTok 电商新兴市场（如东南亚、墨西哥）
  - **达人邀约自动化闭环**（模板邀约卡片 + 回复渠道选择已上线）→ 预计下一版本可能推出邀约效果追踪/回复统计分析

## 7. 用户反馈摘要

- 今日无 Issue 评论可提炼，暂无真实用户痛点数据。
- 从产品功能侧面可推断的核心用户画像：**TikTok 电商达人营销/MCN 运营人员**，核心场景为达人筛选（表现可视化、类目目录、UID 备注）、批量邀约（模板卡片）、市场拓展（巴西）。

## 8. 待处理积压

- 今日无长期未响应的 Issue 或 PR。
- **建议维护者关注：** 高频发版（v1.9.3x 段位密集）但零社区反馈，建议在 README 或 Release Notes 中补充用户反馈入口（Issue 模板、Discussion 区），建立社区信号采集机制，避免闭门造车风险。

---

*数据来源：EasyClaw GitHub 仓库过去 24 小时数据快照。本报告由自动化分析生成，如有疑问请查阅仓库原始数据。*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*