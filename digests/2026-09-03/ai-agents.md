# OpenClaw 生态日报 2026-09-03

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-03 09:39 UTC

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

# OpenClaw 项目动态日报 — 2026-09-03

---

## 1. 今日速览

OpenClaw 今日保持高度活跃：过去 24 小时内 Issues 更新 500 条（新开/活跃 332，关闭 168），PR 更新 500 条（待合并 337，合并/关闭 163），社区贡献与问题反馈节奏处于高位。今日无新版本发布，项目主线仍停留在 2026.8.2 版本周期内。核心贡献者 @steipete 持续高产，今日单日提交多个 Gateway、UI、测试相关 PR；同时 P0/P1 级 Bug（会话状态损坏、token 计数膨胀、Windows 升级问题）仍在积压，需维护者重点决策。总体来看：**开发活跃度高、社区参与度强，但高严重度问题的修复进度略滞后于报告速度**。

---

## 2. 版本发布

今日无新版本发布。当前主线版本仍为 2026.8.2。

---

## 3. 项目进展

今日 PR 关闭量 163，其中值得关注的进展包括：

- **#137172（已关闭）session 订阅者投递重构**：@steipete 将隐藏 chat 与 agent 事件的订阅者广播逻辑合并为共享 helper，消除重复的 per-session 数组构建，属性能/代码健康度改进。
- **#137132（已关闭）Code Mode 输出编码复用**：UTF-8 编码在二分搜索适配 JSON 预算时只做一次有界编码，降低 CPU 开销。
- **#137160 Gateway 热重载（XL，待审）**：允许运行时修改 node/browser/访问控制/Control UI origins/token 等设置而无需重启 Gateway，避免中断健康会话，是运维体验的重要推进。([PR #137160](https://github.com/openclaw/openclaw/pull/137160))
- **#137022 Owner profile 修复（P1，待审）**：修复管理员可将共享本地 owner profile 与个人 profile 合并、或误触发多人目录限制的权限边界问题。([PR #137022](https://github.com/openclaw/openclaw/pull/137022))
- **#134524 模型目录修复（P1，待审）**：修复 worker 发布目录后原生账户模型在 New Session picker 中显示不可用的问题。([PR #134524](https://github.com/openclaw/openclaw/pull/134524))
- **#135528 / #136110 Skill Workshop 重构堆栈（XL，waiting on author）**：将 skill 生成/改进统一收敛到全局 Skill Workshop 目录，并将周度集合审查改为普通 cron agent turn，属 breaking change（`feat!`），是技能系统架构演进的核心工作。

整体评估：今日推进集中在 **Gateway 运维健壮性、权限边界、性能与 Skill 体系重构**，但多个 XL 级 PR 处于 waiting-on-author 状态，合并节奏受制于 review 容量。

---

## 4. 社区热点

今日评论最活跃的讨论：

1. **#121953（13 评论，P1）Cron agent 在 DeepSeek 上卡死**：`[cron:<jobId>]` 消息前缀触发 DeepSeek API 边缘节点低优先级路由，导致定时任务停滞数十秒至数分钟。已获 source-repro，等待产品决策。([Issue #121953](https://github.com/openclaw/openclaw/issues/121953))
2. **#126360（12 评论，P1）多 agent 显式所有权下 AgentSelectionRequiredError 刷屏日志**：logbook 插件、Control UI 全局 RPC、system-agent turn 均缺少 agentId 目标，暴露出 `agents.ownership: "explicit"` 模式的设计缺口，与 #128637 同根因。([Issue #126360](https://github.com/openclaw/openclaw/issues/126360))
3. **#132762（12 评论，P1）overflow-retry 以 toolResult 结尾即报 success**：多阶段文档工作流中重试成功但无最终 assistant 回复，消息丢失类问题。([Issue #132762](https://github.com/openclaw/openclaw/issues/132762))
4. **#49876（11 评论，安全）Cron 会话在工具失败时输出幻觉内容**：隔离 cron 会话遇工具失败不干净失败，而是编造看似合理的结果交付用户——信任与安全问题，3 月至今未解。([Issue #49876](https://github.com/openclaw/openclaw/issues/49876))
5. **#127229（11 评论）Telegram 持久化更新被 watchdog 误标 tombstone**：上下文压缩期间预采纳 watchdog 抢先假死标记，导致消息丢失。([Issue #127229](https://github.com/openclaw/openclaw/issues/127229))

**诉求分析**：热点集中于三类——第三方模型提供商兼容性（DeepSeek/vLLM/DashScope）、多 agent 架构下“无主操作”的处理策略、消息可靠交付。用户反复强调这些是生产环境阻断项。

---

## 5. Bug 与稳定性（按严重度）

### P0
| 问题 | 状态 | Fix PR |
|---|---|---|
| [#123327 共享状态 WAL checkpoint 将索引页覆写 SQLite page 1，本地 ext4 上两次数据损坏（树莓派 5）](https://github.com/openclaw/openclaw/issues/123327) | OPEN，数据损坏 | ❌ 暂无 |
| [#125333 totalTokens 膨胀在 2026.8.1-beta.2 仍复现：#123065 修复仅覆盖 `api==="cli"`，memory-flush 路径无防护](https://github.com/openclaw/openclaw/issues/125333) | OPEN | ⚠️ 相关 [#83178](https://github.com/openclaw/openclaw/pull/83178)（memory-flush token 估算回退，needs proof） |
| [#136203 Windows de-DE 2026.8.2 升级后 Doctor 维护受阻、遗留旧工作区状态](https://github.com/openclaw/openclaw/issues/136203) | OPEN，release blocker 标记 | ❌ 暂无；相关 [#136329](https://github.com/openclaw/openclaw/pull/136329) 更新包树校验（waiting on author） |

### P1
- **#136183（9/2 新报，regression）**：命令执行器 spawn ssh 后在 banner 交换阶段挂起直至 SIGTERM，2026.8.1 引入、8.2 未修复。([链接](https://github.com/openclaw/openclaw/issues/136183))
- **#136113（已关闭）**：claude-cli 后端 stdout 超 ~50KB 时每轮返回空响应，25 轮丢 11 轮。
- **#97616**：hook/tool 子进程泄漏产生僵尸进程累积，运行时退化。([链接](https://github.com/openclaw/openclaw/issues/97616))
- **#125344**：memory-core 本地 embedding worker 与 codex app-server 无空闲 TTL，挤占 gateway cgroup。([链接](https://github.com/openclaw/openclaw/issues/125344))
- **#135970**：codex 插件缺少 node_modules，Managed Codex app-server 二进制找不到（已有 fix-shape-clear 标记，可排队修复）。([链接](https://github.com/openclaw/openclaw/issues/135970))
- **#135704**：带 `reply_to_guid` 的 iMessage 回声绕过 echo 缓存被当作新入站消息。([链接](https://github.com/openclaw/openclaw/issues/135704))
- **#124284（已关闭）**：vLLM thinking 模型下 subagent 生成畸形 XML tool calls（2026.8.1-beta.2 引入的 wrapStreamFnWithProviderPromptState 干扰）。

**稳定性趋势**：2026.8.x 系列引入了多个回归（ssh 挂起、claude-cli 空响应、vLLM 干扰），建议维护者在下一版本前集中做回归清理。

---

## 6. 功能请求与路线图信号

- **#137069（今日新 PR）仪表板任务画廊**：将 dashboard 文本列表替换为响应式预览卡片画廊，含搜索/过滤/排序/实时状态——Web UI 产品化方向明确。([PR #137069](https://github.com/openclaw/openclaw/pull/137069))
- **#121729 后台 agent 每日消费限额**：共享与按 agent 的友好额度控制，契合“无人值守 agent”主场景，讨论活跃（6 评论）。([Issue #121729](https://github.com/openclaw/openclaw/issues/121729))
- **#74594 RFC: Skill Capability Manifests v0**：让 skill 能力在执行前可见可审计，与 #135528 Skill Workshop 重构方向互补，可能一并纳入路线图。([Issue #74594](https://github.com/openclaw/openclaw/issues/74594))
- **#79168 工具输出内容级注入扫描**：安全侧长期诉求，已有 AI 安全分类学 #107158 铺垫。([Issue #79168](https://github.com/openclaw/openclaw/issues/79168))
- **#45508 webchat 自托管 STT/TTS**：语音能力走 gateway 而非浏览器 Speech API，2 👍。([Issue #45508](https://github.com/openclaw/openclaw/issues/45508))
- **#106818 linux/riscv64 Docker 镜像**：已在真实硬件验证，等待维护者决策。([PR #106818](https://github.com/openclaw/openclaw/pull/106818))

**判断**：Skill 体系（Workshop + Manifests）、Gateway 热重载、Web UI 画廊化构成下个大版本最可能的主线。

---

## 7. 用户反馈摘要

- **升级体验是最大痛点**：Windows 用户反复遭遇升级后 Gateway 拒启、Doctor 阻塞、遗留状态（#136203、#134179、#107330）；生产用户明确求 2026.5.12 Codex compact 404 的升级/回填指引（#123799）。
- **消息可靠性质疑**：overflow-retry 假成功、Telegram 误 tombstone、claude-cli 空响应等让用户对“任务是否真的完成”失去信心；#49876 的幻觉输出直接触碰信任底线。
- **自托管/多模型用户边缘受挫**：DeepSeek 前缀降权、vLLM 兼容、DashScope embedding 10 条上限、自托管 STT/TTS 不可见——非 OpenAI 一线路径质量明显偏低。
- **正面信号**：Scott Hanselman 的 agent "Tony" 自主提交高质量分析 issue（#124911），说明 dogfooding 深入；社区 PR 贡献者活跃且提交规范（size/rating/proof 标签齐全）。

---

## 8. 待处理积压（提醒维护者）

| 条目 | 积压时长 | 关注点 |
|---|---|---|
| [#49876 Cron 幻觉输出（安全）](https://github.com/openclaw/openclaw/issues/49876) | ~5.5 个月 | 信任/安全问题，stale 状态 |
| [#87051 Codex OAuth 不传播至 subagent，静默降级幻觉](https://github.com/openclaw/openclaw/issues/87051) | ~3 个月 | 生产质量回归，platinum 级 |
| [#123327 SQLite page 1 覆写损坏（P0）](https://github.com/openclaw/openclaw/issues/123327) | 3 周 | 数据损坏，需立即排期 |
| [#121953 DeepSeek cron 降权](https://github.com/openclaw/openclaw/issues/121953) | 3 周+ | 13 评论、diamond 级、已有 source-repro，仅差产品决策 |
| [#117040 大存储 session 列表提速（XL）](https://github.com/openclaw/openclaw/pull/117040) | ~1 个月 | 性能主诉求，waiting on author |
| [#106818 riscv64 镜像](https://github.com/openclaw/openclaw/pull/106818) | ~1.5 个月 | 已硬件验证，仅需维护者两项决策 |
| [#83178 memory-flush token 回退（P1）](https://github.com/openclaw/openclaw/pull/83178) | ~3.5 个月 | 直接关联 P0 #125333，建议优先 review |

**健康度小结**：OpenClaw 处于“高活跃 + 高积压”状态。新问题流入（332/日）超过关闭（168/日），多个 P0/P1 长期挂起且带 `needs-product-decision` 标签——产品决策吞吐是当前最紧缺资源。建议下一版本聚焦：**升级路径健壮性 + 消息可靠性 + 回归清理**三线作战。

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告

**数据日期：2026-09-03**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**功能扩张与可靠性偿债并存**的阶段：头部项目（OpenClaw、Zeroclaw、Hermes Agent）日 Issue/PR 更新量达数百条，围绕 Gateway 架构、多渠道接入（Telegram/Slack/Matrix/微信生态）、subagent 编排形成基础能力共识。同时，“升级可靠性、消息可靠交付、静默失败”成为跨项目的共同债务，几乎每个活跃项目都在为前几个版本的功能扩张支付质量成本。细分赛道开始分化：CoPaw/QwenPaw 面向多用户 Hub 与商业化部署，EasyClaw 垂直电商营销，Moltis 专注 Hook 工程化，NanoClaw 服务深度定制/fork 用户。生态整体从“能跑起来”向“敢挂生产”演进，安全（沙箱、供应链、审批）话题显著升温。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（新开 332 / 关闭 168） | 500（待合并 337 / 关闭 163） | 无（主线 2026.8.2） | ⚠️ 高活跃+高积压：流入超关闭近 2 倍，P0 数据损坏问题积压 3 周，产品决策吞吐不足 |
| **Hermes Agent** | 50（31/19） | 50（42/8） | 无 | ⚠️ 高活跃，但 v0.21.0 启动崩溃事故暴露 CI 回归检测缺口；subagent 性能优化收获期 |
| **Zeroclaw** | 50（38/12） | 50（38/12） | 无 | ✅ 良好：RFC 治理流程成熟，Tracker 体系完善；瓶颈在维护者评审带宽 |
| **IronClaw** | 3 | 22（15/7） | 无 | ✅ 较高：合并节奏快，CI/类型债务集中清偿，工程效率投入大 |
| **CoPaw (QwenPaw)** | 26（16/10） | 28（19/9） | **v2.2.0 稳定版** + beta.7 + 2.2.1b1 bump | ✅ 良好：当日修复当日发布，节奏成熟；安全话题（沙箱突破）需公开回应 |
| **NanoBot** | 1 | 29（23/6） | 无 | ✅ 良好：所有已知 Bug 均有 fix PR 在途，无修复真空；PR 评审周期偏长（>3 周） |
| **NanoClaw** | 3 | 8（7/1） | 无 | ⚠️ 中等：核心团队活跃但社区响应慢，供应链防护 gate 实际未生效，高危升级缺陷无 fix |
| **LobsterAI** | 6（4/2） | 8（5/3） | Release PR #2600 已关闭（正式版待发） | ⚠️ 迭代稳定但社区贡献悬置 5 个月，stale 机制批量关闭有价值需求 |
| **Moltis** | 2（新开） | 3（待合并） | **2 个版本**（均无 changelog） | ⚠️ 单一贡献者主导，"提交多、收敛少"，贡献集中度风险高 |
| **EasyClaw** | 0 | 0 | **v1.9.2** | ⚠️ 发布驱动、社区静默，健康度待观察 |
| PicoClaw / NullClaw / TinyClaw / ZeptoClaw | 0 | 0 | 无 | 无活动，生态边缘/休眠状态 |

---

## 3. OpenClaw 在生态中的定位

**规模层面**：OpenClaw 是生态中绝对的活动量中心——日 Issue/PR 更新 500+ 条，是 Hermes/Zeroclaw 的 10 倍量级、NanoBot/IronClaw 的 17-20 倍量级。其编号体系（Issue #12 万+）也表明累计议题规模远超同侪（Zeroclaw #1 万级，NanoBot #5 千级）。

**优势**：
- **社区纵深与 dogfooding 深度**：Scott Hanselman 的自主 agent "Tony" 提交高质量 issue，贡献者梯队与提交规范（size/rating/proof 标签）成熟
- **功能广度领先**：Gateway 热重载、Skill Workshop、Control UI、多渠道、cron agent 等能力栈最完整，是 LobsterAI 等下游项目的内嵌运行时（LobsterAI 内嵌 openclaw v2026.3.2），事实上扮演“生态基座”角色

**劣势/风险**：
- **唯一处于“净恶化”状态的项目**：新问题流入（332/日）接近关闭量（168/日）的 2 倍，而 Zeroclaw/Hermes/CoPaw 的开闭比接近平衡
- 信任级问题长期悬置：#49876（cron 幻觉输出，安全）积压 5.5 个月，多个 P0 带数据损坏风险
- 自托管/第三方模型路径（DeepSeek、vLLM、DashScope）质量明显低于一线 provider 路径

**技术路线差异**：Zeroclaw 走“治理先行”路线（RFC 投票 + Tracker 索引，Rust 实现）；Hermes 集中攻坚 subagent 大规模并发资源开销（单日释放 1.9GB 堆内存级别优化）；OpenClaw 则是“功能广度优先 + 事后修债”，当前正为此付出回归清理代价。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **升级/发布可靠性** | OpenClaw（Windows 升级 blocker #136203）、Hermes（v0.21.0 启动崩溃、#97762 侧栏空白）、NanoClaw（#3529 升级覆盖自定义 adapter）、LobsterAI（Windows 安装器恢复） | 自动更新是最大共性痛点，“更新即翻车”普遍存在；打包产物缺最小启动冒烟测试 |
| **消息可靠交付与静默失败** | OpenClaw（overflow-retry 假成功、Telegram 误 tombstone）、IronClaw（MCP 错误压平 #8009、FailureKind 误导 #8041）、CoPaw（ReMe 静默失败 #7469、send_card 虚假成功）、Hermes（重复渲染 #101938） | 用户核心质疑：“任务是否真的完成了”；错误分类语义直接影响 agent 后续行为 |
| **沙箱与安全加固** | Zeroclaw（Seatbelt/细粒度 FS RFC #6996）、NanoBot（macOS Seatbelt 后端 PR #5628）、CoPaw（沙箱突破 #7511/#7443）、NanoClaw（mount 绕过 #3680、minimumReleaseAge 未生效）、OpenClaw（内容级注入扫描 #79168）、IronClaw（subagent 审批可见性） | 从“有沙箱”到“沙箱真的挡得住”，供应链防护与审批链路成为标配议题 |
| **多渠道一致性** | NanoBot（Matrix/Signal/Telegram 投递修复）、Zeroclaw（Web 媒体管线补齐、转录 provider 统一）、CoPaw（WeCom 图片失败、流式节流）、OpenClaw（iMessage 回声、Telegram tombstone） | 渠道抽象层统一，Web 端能力向 IM 端对齐 |
| **上下文/记忆工程** | Zeroclaw（记忆生命周期 RFC #6850、ACP 会话记忆 #10570）、NanoBot（ephemeral context #5586）、CoPaw（compaction 保留人设 #7527）、OpenClaw（token 计数膨胀 P0）、Hermes（压缩后重复渲染） | compaction 语义、上下文成本控制、记忆持久化策略 |
| **移动端/远程访问** | CoPaw（移动原生端 PR #7378、WebUI 首载慢）、NanoBot（iOS PWA 系列修复）、Hermes（Desktop 常驻群聊） | “离开桌面继续用”场景集中爆发 |
| **可观测性/审计** | IronClaw（错误根因保留）、Moltis（Hook tool_call_id）、NanoBot（LangSmith 回归）、Zeroclaw（日志轮转）、Hermes（Skills index CI 健康度） | 生产化部署驱动 tracing/审计能力刚需 |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Zeroclaw | Hermes Agent | CoPaw/QwenPaw | 其他 |
|---|---|---|---|---|---|
| **功能侧重** | 全栈个人 AI 助手平台（Gateway/Skill/cron/多渠道/Control UI） | 架构治理驱动的 agent runtime（会话/记忆/附件 RFC 体系） | Desktop 优先 + subagent 大规模并发 + 本地推理（MLX/Vulkan） | 多用户 Hub + 中国 IM 生态（微信/企微/钉钉）+ 创作者工具 | NanoClaw：fork 友好扩展 seam；EasyClaw：电商联盟营销垂直；Moltis：Hook 工程化；LobsterAI：桌面端 MCP 深度集成 |
| **目标用户** | 高级个人用户、自托管爱好者、下游项目（LobsterAI 内嵌） | 专业度高、深度参与 RFC 的核心开发者 | 重度本地/低资源用户、大扇出 agent 用户 | 团队/商业部署、中文本地化用户 | NanoClaw：企业级重度定制者（24 组 agent 部署） |
| **技术架构** | TS 多组件 Gateway 架构 | Rust，wire protocol/RFC 先行 | Python/Electron，subagent 进程模型 | 自托管 Hub（本地进程/Docker）+ Console | NanoBot：Python 网关型；IronClaw：Rust + 类型化 WebUI |

关键差异点：**OpenClaw 走“平台化广度”路线，CoPaw 走“商业化多租户”路线，Hermes 走“深度性能/本地化”路线，Zeroclaw 走“治理严谨型架构演进”路线**——四者互补大于直接竞争。

---

## 6. 社区热度与成熟度分层

**快速迭代/扩张期**：
- **CoPaw**（当日发稳定版 + 启动下轮迭代，移动端/创作者工具双线扩张）
- **IronClaw**（CI 提速 + 类型债务清偿，工程基础设施投入期）
- **Hermes Agent**（subagent 性能优化收获期 + Bot 群聊新场景）

**质量巩固/偿债期**：
- **OpenClaw**（最典型：高活跃但需集中回归清理 + 升级路径修复 + 消息可靠性三线作战）
- **NanoBot**（修复管道通畅，Bug 全部有 fix 在途，纯质量巩固）
- **Zeroclaw**（介于两者之间：大功能以 RFC 推进，实现侧稳定收尾）

**早期/低活跃**：
- **Moltis**（单贡献者驱动，2 版本无 changelog）
- **EasyClaw**（发布驱动、社区静默）
- **LobsterAI**（迭代稳定但社区贡献链路近乎冻结，贡献者流失风险）

**休眠**：PicoClaw、NullClaw、TinyClaw、ZeptoClaw。

**成熟度横评**：Zeroclaw 的 RFC/Tracker 治理体系是生态中流程成熟度标杆；NanoBot 的“无修复真空”是质量管道标杆；OpenClaw 规模最大但治理成熟度落后于其体量。

---

## 7. 值得关注的趋势信号

1. **可靠性正在取代功能成为竞争主轴**。三个最大项目（OpenClaw/Hermes/Zeroclaw）当日头条均为可靠性问题（数据损坏/启动崩溃/静默截断）而非新功能。对开发者的启示：**错误分类语义（FailureKind 类问题，IronClaw #8041/#7985）直接决定 agent 行为路径，是 agent 系统特有的“正确性”维度，值得优先设计**。

2. **升级链路是 agent 产品独有的高危面**。自动更新 + 长期挂机会话 + 本地状态（SQLite/state.db）的组合，使“更新即翻车”跨项目爆发。打包产物最小启动冒烟测试、升级前状态保护（Hermes PR #99771）、自定义代码不被覆盖（NanoClaw #3529）将成为标配能力。

3. **安全从可选项变为竞争门槛**。沙箱有效性（CoPaw 沙箱突破被公开分析）、供应链防护（NanoClaw minimumReleaseAge）、审批链路权限（OpenClaw #137022、Zeroclaw #9387）、工具输出注入扫描在同日多个项目出现。**“沙箱真的挡得住吗”将成为用户选型的第一问**。

4. **subagent 并发是新的性能战场**。Hermes 单日 4 个合并 PR（1.9GB 堆内存释放、共享 transport 池、共享 LSP/scheduler 线程）+ OpenClaw 的多 agent 所有权设计缺口（#126360）+ CoPaw 的子 agent 进度黑盒（#7450），指向同一判断：**大扇出多 agent 编排已进入生产实践，资源模型与所有权语义是下一步基础设施**。

5. **治理流程成为大项目的护城河**。Zeroclaw 的 RFC 投票 + Tracker 索引体系在生态中独树一帜，其“needs-maintainer-review 积压”仍存在，但决策可追溯性远超同行。项目规模超过一定阈值后，**维护者评审带宽而非代码贡献成为第一瓶颈**（OpenClaw 产品决策、Zeroclaw RFC 窗口、NanoBot 3 周 PR 周期均验证此点）。

6. **本地/第三方模型路径是普遍短板**。DeepSeek 降权（OpenClaw）、LM Studio 断连（CoPaw）、vLLM 兼容、MLX 内存误判（Hermes #52261）——非一线 provider 兼容性是所有项目共同的未偿债务，也是新进入者的差异化机会。

7. **下游/嵌入生态开始形成**。LobsterAI 内嵌 openclaw 作为运行时，且因内嵌版本过旧产生合规压力（引用国家互联网应急中心要求）——提示“agent runtime 作为可复用基座”的分层正在出现，运行时项目的版本安全响应将直接影响下游合规。

---

**总结**：OpenClaw 体量与功能广度仍是生态第一，但正处于最关键的偿债窗口；Zeroclaw 与 NanoBot 代表了“质量/治理优先”的健康范本；CoPaw 是商业化与多租户方向的领先者。对技术选型者：追求功能广度选 OpenClaw（短期接受稳定性风险）、生产部署看重治理选 Zeroclaw、重度定制选 NanoClaw/NanoBot、团队中文生态选 CoPaw。对 agent 开发者：下一阶段的差异化机会在**错误语义设计、升级安全、subagent 资源模型、第三方 provider 兼容**四个尚未被任何项目做好的方向。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-03

## 1. 今日速览

NanoBot 今日整体活跃度**中高**：过去 24 小时共有 30 条 Issues/PR 更新，其中 PR 活动显著（29 条更新，23 条待合并、6 条合并/关闭），Issue 仅 1 条活跃且无新开 Bug 报告。社区贡献焦点集中在**渠道稳定性（Matrix/Signal/Telegram）、WebUI 移动端体验、macOS 沙箱安全**三大方向。无新版本发布，主分支处于持续集成大量 P2 修复的阶段，项目健康度良好、缺陷修复节奏稳定。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭 6 个 PR，主要推进以下方面：

- **工具提示截断修复**：[PR #5629](https://github.com/HKUDS/nanobot/pull/5629) 修复 `format_tool_hints()` 对普通值（grep 模式、搜索查询、glob）不遵守 `max_length` 截断的问题。
- **SDK 流事件丢失**：[PR #5635](https://github.com/HKUDS/nanobot/pull/5635) 修复队列满时关闭流会丢弃最旧未读事件的 Bug，改为等待空间后写入 sentinel。
- **Codex 提示缓存亲和性**：[PR #5632](https://github.com/HKUDS/nanobot/pull/5632) 通过 SHA-256 稳定会话路由键统一 `session-id` 与 `prompt_cache_key`，提升缓存命中与性能。
- **渠道指纹缓存泄漏**：[PR #5634](https://github.com/HKUDS/nanobot/pull/5634) 为去重指纹缓存设置上限，修复长运行网关的无界内存增长。
- **WebUI 原生侧边栏统一**：[PR #5636](https://github.com/HKUDS/nanobot/pull/5636) 统一 WebUI 与原生宿主的侧边栏折叠控件，移除重复的浮动切换按钮。

**评价**：当日合入的修复覆盖 provider、SDK、channel、WebUI 四个层面，均为带回归测试的 P2 修复，质量门槛稳定，项目向下一个发布版本稳步推进。

## 4. 社区热点

- **[Issue #5586](https://github.com/HKUDS/nanobot/issues/5586)**（2 条评论，今日更新）：请求为 runtime-context 块增加 `ephemeral` 生命周期选项，避免敏感/临时上下文被持久化到会话历史并在后续每一轮重放。这反映了用户对**上下文注入与隐私/Token 成本控制**的精细化需求，目前仍处 OPEN 状态、无对应 PR。
- **[PR #5614](https://github.com/HKUDS/nanobot/pull/5614)**：Telegram 富消息流式发送，作者自述本周先在自建分支上运行验证，属于贡献者深度投入的长期 PR，值得维护者优先评审。
- **[PR #5446](https://github.com/HKUDS/nanobot/pull/5446)**（标注 conflict）：Codex OAuth token 迁移至 NanoBot 数据目录，存在合并冲突需作者 rebase，今日仍有活动。

## 5. Bug 与稳定性

按严重程度排列（今日活跃的 OPEN 修复 PR）：

| 严重度 | 问题 | PR | 状态 |
|---|---|---|---|
| 高（回归） | LiteLLM→原生 SDK 迁移导致 LangSmith 追踪丢失（#2493） | [#5485](https://github.com/HKUDS/nanobot/pull/5485) | 已有 fix PR，待合并 |
| 高 | Provider 抛异常时逃逸 fallback 错误策略 | [#5413](https://github.com/HKUDS/nanobot/pull/5413) | 已有 fix PR |
| 中 | WebUI Gateway 重连后残留过期流状态（#5512） | [#5514](https://github.com/HKUDS/nanobot/pull/5514) | 已有 fix PR |
| 中 | 会话回复超时后台任务失败被静默丢弃 | [#5515](https://github.com/HKUDS/nanobot/pull/5515) | 已有 fix PR + 回归测试 |
| 中 | Matrix 流式投递失败被吞掉，无重试 | [#5637](https://github.com/HKUDS/nanobot/pull/5637) | 已有 fix PR |
| 中 | Signal 通配符 allowlist 不生效 | [#5472](https://github.com/HKUDS/nanobot/pull/5472) | 已有 fix PR |
| 低 | iOS PWA 首次点击被 `:hover` 链吞掉、状态栏遮挡 | [#5641](https://github.com/HKUDS/nanobot/pull/5641) | 今日新开 |

值得肯定的是：**今日所有已知 Bug 均有对应修复 PR 在途**，无修复真空。

## 6. 功能请求与路线图信号

- **`ephemeral` runtime-context 块**（[Issue #5586](https://github.com/HKUDS/nanobot/issues/5586)）：尚无 PR，但实现面明确（`agent/loop.py:725-731`、`get_history`），是低成本高价值候选。
- **macOS Seatbelt 沙箱后端**（[PR #5628](https://github.com/HKUDS/nanobot/pull/5628)）：镜像 bwrap 策略、隐藏 `config.json` API 密钥，安全能力向 macOS 平台补齐，纳入可能性高。
- **移动端输入优化**（[PR #5640](https://github.com/HKUDS/nanobot/pull/5640)）：触摸键盘 Enter 换行 + 流式发送，与 #5641 一同构成移动端体验专项。
- **Telegram 富消息流式输出**（[PR #5614](https://github.com/HKUDS/nanobot/pull/5614)）：作者自用验证中，成熟后合入。
- **MiniMax 音乐生成指引**（[PR #5212](https://github.com/HKUDS/nanobot/pull/5212)）：provider 生态扩展信号。

**路线图判断**：下一版本大概率以“稳定性 + 移动端 WebUI + macOS 沙箱”为主题。

## 7. 用户反馈摘要

- **隐私与 Token 成本焦虑**：用户不希望一次性注入的 runtime-context 永久占据会话历史（#5586），说明高级用户在用 NanoBot 做自动化注入时遇到了历史膨胀和敏感信息残留问题。
- **可观测性诉求**：LangSmith 追踪回归（#5485）表明生产用户依赖 tracing 做调试，迁移原生 SDK 时此类“隐性能力”容易丢失。
- **移动/多端体验是痛点集中区**：iOS PWA 点击、键盘、状态栏（#5641、#5640）连续出现，说明移动端 WebUI 用户基数在增长但体验欠打磨。
- **渠道运维可靠性**：Signal allowlist、Matrix SAS 验证与投递重试（#5472、#5385、#5637）反映把 NanoBot 当 7×24 网关跑的用户对稳定性要求高。

## 8. 待处理积压

以下长期 OPEN 的 PR 需维护者关注评审或推进：

- **[PR #5212](https://github.com/HKUDS/nanobot/pull/5212)**（MiniMax 音乐指引，8/2 开启，已 1 个月）
- **[PR #5334](https://github.com/HKUDS/nanobot/pull/5334)**（消息分割缩进保留，8/11 开启）
- **[PR #5385](https://github.com/HKUDS/nanobot/pull/5385)**（Matrix Element SAS 完整流程，8/13 开启）
- **[PR #5413](https://github.com/HKUDS/nanobot/pull/5413)**（Provider 异常 fallback，8/17 开启）
- **[PR #5446](https://github.com/HKUDS/nanobot/pull/5446)**（Codex OAuth 持久化，**存在冲突**，8/19 开启）
- **[PR #5485](https://github.com/HKUDS/nanobot/pull/5485)**（LangSmith 回归修复，8/22 开启，涉及回归 #2493，建议优先）
- **[Issue #5586](https://github.com/HKUDS/nanobot/issues/5586)**：有 2 条讨论但无维护者明确表态，建议给出方向性回复。

**健康度总评**：⭐⭐⭐⭐ 修复管道通畅、Bug 均有 fix 在途；主要风险是 PR 积压评审周期偏长（部分超 3 周），建议维护者集中清理一轮。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 — 2026-09-03

## 1. 今日速览

Zeroclaw 今日保持高活跃度：过去 24 小时内 Issues 更新 50 条（新开/活跃 38，关闭 12），PR 更新 50 条（待合并 38，已合并/关闭 12），无新版本发布。项目当前重心明显偏向**架构治理**——RFC 流程密集运转，多个高风险架构级提案（运行时会话、文件附件、记忆生命周期、沙箱策略）处于修订与投票阶段。同时新 Issue #10570（ACP 会话记忆连续性）于今日创建，配套实现批次 Tracker 体系持续完善。安全类修复（Seatbelt、delegate 审批）推进积极，整体项目健康度良好，社区贡献者梯队（distinguished/principal contributor 标签）稳定输出。

## 2. 版本发布

无新版本发布。最新的 Rust 工具链例行升级 PR #9527（1.98.0）仍待合并，可作为下一个发布周期的参考信号。

## 3. 项目进展

今日关闭/合并的 PR 体现了几条清晰主线：

**会话与存储一致性**
- [PR #9873](https://github.com/zeroclaw-labs/zeroclaw/pull/9873) — 统一 JSONL 会话文件验证，采用 fail-closed 分类器（仅接受元数据确认为常规文件的 `.jsonl` 路径），对应关闭 [Issue #9857](https://github.com/zeroclaw-labs/zeroclaw/issues/9857)。
- [PR #9353](https://github.com/zeroclaw-labs/zeroclaw/pull/9353) — Web 聊天支持每 agent 多独立会话（新建/恢复/重命名/删除），关闭 [Issue #7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543)。这是 Web 端体验的重大补齐。

**依赖维护**
- [PR #10512](https://github.com/zeroclaw-labs/zeroclaw/pull/10512)（Rust 48 项更新）与 [PR #10560](https://github.com/zeroclaw-labs/zeroclaw/pull/10560)（Web 19 项更新）关闭，且今日 dependabot 已开出后续批次 [#10587](https://github.com/zeroclaw-labs/zeroclaw/pull/10587)（Rust 49 项）和 [#10586](https://github.com/zeroclaw-labs/zeroclaw/pull/10586)（Web 20 项），依赖滚动节奏健康。

**Bug 关闭（含修复落地）**
- [Issue #9387](https://github.com/zeroclaw-labs/zeroclaw/issues/9387)（P1 安全）关闭——Telegram/Slack/Lark/Matrix 上任意群成员可通过交互审批响应的问题已有处理进展。
- [Issue #9983](https://github.com/zeroclaw-labs/zeroclaw/issues/9983)（fallback 模型无视觉能力时错误归因信息误导）关闭。
- [Issue #10486](https://github.com/zeroclaw-labs/zeroclaw/issues/10486)（Matrix 忽略 `[providers.transcription.*]`）关闭，与 Discord 侧同类修复 [PR #10494](https://github.com/zeroclaw-labs/zeroclaw/pull/10494) 形成模式化修复。
- [Issue #10202](https://github.com/zeroclaw-labs/zeroclaw/issues/10202)（log crate 依赖日志被 tracing subscriber 丢弃）关闭。

总体来看，今日进展集中在**长周期大 PR 的持续打磨**（Web 多会话、JSONL 验证）和**安全/正确性收尾**，架构级功能仍以 RFC 推进为主，项目处于“治理先行、实现跟进”的稳定节奏。

## 4. 社区热点

**最活跃讨论：**

1. [#9487 — RFC: Runtime 持有的会话与传输层适配器](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)（32 评论）— 已迭代至 Revision 5，实质性替换 Rev 4 投票快照，需要维护者重新记录讨论窗口。诉求：将对话会话生命周期收归 runtime 层，解耦传输表面（ACP 等）。
2. [#6850 — RFC: 记忆生命周期策略与存储后端解耦](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)（25 评论，已接受）— 明确 `Memory` trait 只管存储，整合与治理是生命周期决策。
3. [#9488 — RFC: 会话表面统一文件与附件架构](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)（25 评论，Rev 10）— 与今日活跃的 [PR #10544](https://github.com/zeroclaw-labs/zeroclaw/pull/10544)（Web 图片上传端点）直接相关，附件能力是当前用户刚需。
4. [#6996 — RFC: 细粒度沙箱文件系统限制](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)（23 评论）— 试图统一应用层路径准入与 OS 沙箱（Bubblewrap/Landlock/Seatbelt）两层漂移的策略，与 [PR #10556](https://github.com/zeroclaw-labs/zeroclaw/pull/10556)（Seatbelt 遵守 allowed roots）呼应。
5. [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103)、[#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)、[#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)（各 16–19 评论）— 记忆存储/富化连接器分离、wire protocol 一等公民化、computer-use 桌面控制，均处于维护者接管修订后的推进期。

**观察：** #8692（维护者决策队列 Tracker，14 评论）和 #10330（已接受 RFC 实现索引）持续更新，说明项目用结构化 Tracker 管理 RFC 从决策到落地的全流程——这是大型开源项目治理成熟度的积极信号。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 状态 / Fix |
|---|---|---|---|
| **P1** | [#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523) | Bootstrap 文件被静默截断至 6000 字符（`compact_context` 下 AGENTS.md/SOUL.md 等），操作者不可见 | OPEN，尚无明确 fix PR，今日仍活跃 |
| **P2/S2** | [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | 交互式会话上下文被硬编码 32k 上限，忽略 `max_context_tokens = 131072` | OPEN，进行中 |
| **P1（安全）** | [#9387](https://github.com/zeroclaw-labs/zeroclaw/issues/9387) | 聊天频道任意成员可通过交互审批 | 已关闭，配合 [PR #10188](https://github.com/zeroclaw-labs/zeroclaw/pull/10188)（独立 delegate 审批策略，OPEN）继续加固 |

**待合并的修复 PR（高风险类）：**
- [PR #10556](https://github.com/zeroclaw-labs/zeroclaw/pull/10556) — Seatbelt 尊重 allowed roots（含 symlink 解析），macOS 沙箱正确性。
- [PR #10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) — 隔离 provider 拒绝的图片（结构化 400 信号识别），防止图像重试风暴。
- [PR #10521](https://github.com/zeroclaw-labs/zeroclaw/pull/10521) — `Config::default()` 遵守 `ZEROCLAW_CONFIG_DIR`（XS 尺寸，可快速合入）。

**稳定性评估：** 无崩溃/回归级报告，Bug 集中在配置被忽略、静默截断类“行为退化”（S2），符合成熟期项目特征。#10523 的静默数据丢失特性值得优先处理。

## 6. 功能请求与路线图信号

**可能进入下一版本的信号：**

- **Web 多会话**（#9353 已关闭）+ **Web 图片上传**（[PR #10544](https://github.com/zeroclaw-labs/zeroclaw/pull/10544) OPEN）→ Web 端媒体管线补齐已近完成，很可能打包出现在下个版本。
- **ACP 会话记忆连续性**：今日新建 [#10570](https://github.com/zeroclaw-labs/zeroclaw/issues/10570) Tracker，明确“在已接受 RFC 框架内分阶段实现”——路线图信号强烈，是 Q4 重点方向。
- **Gemini 语音到语音 broker 频道**：[#10406](https://github.com/zeroclaw-labs/zeroclaw/issues/10406) Tracker 已建立，#8780 已接受，进入实现阶段。
- **会话级 prompt 附件**：[#10405](https://github.com/zeroclaw-labs/zeroclaw/issues/10405) Tracker 协调 #9998 的跨组件实现（持久会话、ACP、审批、脱敏、清理）。
- **A2A 出站客户端**：[PR #9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324)（XL）实现了 6 个维护者立场、4 个 a2a_* 工具与 A2A v1.0 wire model，agent 互操作性是显著路线图方向。
- **日志轮转增强**：[PR #10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214)（XL，entry-count 轮转 + 多段查询）长期活跃，可观测性持续投入。

## 7. 用户反馈摘要

从 Issue 描述与场景可提炼的真实痛点：

- **配置被静默忽略**是最常见痛点：#10068（max_context_tokens）、#10486（transcription provider 路由）、#10521（ZEROCLAW_CONFIG_DIR）、#10523（bootstrap 截断不可见）。用户期望“配置了就生效，不生效要有明确报错”——静默降级是最伤信任的行为。
- **多渠道一致性问题**：Web 端此前无法传图（#10544 前置诉求：“Telegram/Signal/Matrix/Discord 都有媒体管线，唯独 Web 没有”），转录 provider 绑定在 Discord/Matrix 各出一次 bug，反映渠道抽象层需统一。
- **长会话体验**：上下文 32k 硬上限、ZeroCode 瞬态渲染性能（PR #9317 输入延迟随会话变长）表明重度用户在跑长会话工作流。
- **运维可观测性需求**：log bridge 缺失（#10202）、SOP 运行日志归属（PR #10155）说明用户在用 Zeroclaw 跑生产化 agent 流程，需要审计能力。
- 正面信号：安全审计级 Issue（#9387 逐行核对 HEAD 后提交）和高质量 RFC 修订流显示核心用户群专业度高、参与深。

## 8. 待处理积压

**长期未决、需要维护者关注的项：**

1. [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) / [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) — 均为 Rev 替换后**待重新开启投票窗口**，`needs-maintainer-review`，自 7 月底悬挂至今，建议尽快记录新讨论快照。
2. [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) — wire protocol RFC，`needs-maintainer-review`，6 月底创建，是 provider 生态接入的关键前置。
3. [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) — 可组合 WASM 插件运行时架构 RFC，`needs-maintainer-review`，体量大、依赖关系多（刚让渡 #10526 的会话历史决策权）。
4. 待合并高优先 PR 中标记 `needs-maintainer-review` 的：[#10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214)、[#10188](https://github.com/zeroclaw-labs/zeroclaw/pull/10188)、[#10542](https://github.com/zeroclaw-labs/zeroclaw/pull/10542)（Anthropic thinking.display）、[#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) — 评审带宽是当前主要瓶颈。
5. `needs-author-action` 的 XL 级 PR：[#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324)、[#9740](https://github.com/zeroclaw-labs/zeroclaw/pull/9740)、[#10155](https://github.com/zeroclaw-labs/zeroclaw/pull/10155)、[#9527](https://github.com/zeroclaw-labs/zeroclaw/pull/9527) — 7 月底至 8 月中创建，积压时间渐长，存在 rebase/冲突风险。
6. **未响应的 P1**：[#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523) 尚无 fix PR 挂钩，建议优先认领。

---

*数据来源：Zeroclaw GitHub Issues/PRs 时间线（截至 2026-09-03）。结论基于可见元数据与摘要，具体投票与合并状态以仓库为准。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-09-03

## 1. 今日速览

Hermes Agent 今日保持高活跃度：过去 24 小时内 Issues 更新 50 条（新开/活跃 31，关闭 19），PR 更新 50 条（待合并 42，已合并/关闭 8），无新版本发布。今日最突出的事件是 **Desktop v0.21.0 启动崩溃事故**（`rememberLog` 在 `hermesLog` 声明前被调用），社区在数小时内涌入约 8 份重复 Issue，目前大部分已归并关闭，但修复 PR 尚未明确落地。另一条主线是 @teknium1 连发多个 subagent 扇出性能优化 PR，其中 4 个已合并，显示项目正在集中攻坚大规模并发场景的资源开销。整体健康度：问题响应迅速、重复问题归并及时，但 CI/发布流程的回归检测缺口值得警惕。

## 2. 版本发布

无新版本发布。⚠️ 注意：v0.21.0（含 `c401756a6a`）存在启动崩溃问题（见第 5 节），用户升级前建议等待修复版本。

## 3. 项目进展

今日合并/关闭 8 个 PR，其中值得关注的已关闭项（多为性能优化批次，出自 @teknium1）：

- **[PR #102032](https://github.com/NousResearch/hermes-agent/pull/102032)** — 完成的 subagent 不再在父进程堆中钉住 transcript，且 subagent transcript 退出 trigram FTS 索引（schema v30）。采样会话中释放 1.9 GB 匿名堆内存，是 subagent 扩展性的重要一步。
- **[PR #102031](https://github.com/NousResearch/hermes-agent/pull/102031)** — 所有 agent 按 provider 身份共享一个 httpx transport 池，替代每个 agent 各建连接池，显著降低大扇出时的连接与 SSL 开销。
- **[PR #102029](https://github.com/NousResearch/hermes-agent/pull/102029)** — 一个 pyright LSP 进程服务所有 git worktree（通过 `didChangeWorkspaceFolders` 附加根），替代每 worktree 起一个 server。
- **[PR #102028](https://github.com/NousResearch/hermes-agent/pull/102028)** — 新增 `evals/fanout_resource_bench.py`，可复现的 subagent 扇出资源基准（线程/RSS/fds/pyright/kernels/transports），为后续优化提供度量基础。

待合并队列（42 个）中的核心工作：

- **[PR #102030](https://github.com/NousResearch/hermes-agent/pull/102030)** — 每子进程 3 个定时器合并到单一共享 scheduler 线程，~130 个活跃 subagent 场景下大幅减少线程数。
- **[PR #101678](https://github.com/NousResearch/hermes-agent/pull/101678)**（P1）— 修复 SSH 隔离后端孤儿进程与多写者 `state.db` 损坏问题（对应 Issue #101626）。
- **[PR #102037](https://github.com/NousResearch/hermes-agent/pull/102037)** — 外部回合保留 Desktop transport，解决外部提交导致会话所有者传输丢失。
- **[PR #99771](https://github.com/NousResearch/hermes-agent/pull/99771)** — Windows reexec 更新过程保留状态，修复 Windows 升级链路。

**整体评估**：项目在 subagent 大规模并发（内存、线程、连接、LSP）方向取得实质性推进，性能批次已进入收获期。

## 4. 社区热点

- **[Issue #66616](https://github.com/NousResearch/hermes-agent/issues/66616)**（146 条评论）— Skills index 新鲜度看门狗持续告警 `degraded`（索引 29.8h，超 26h 上限），Skills Hub 依赖的 `skills-index.json` 由 cron workflow 重建，自动化的新鲜度巡检似乎已长期处于降级状态。**建议维护者优先检查 CI workflow 是否失效。**
- **[Issue #97681](https://github.com/NousResearch/hermes-agent/issues/97681)**（23 条评论）— Bot Group Chats 在 Desktop 关闭后仍能继续工作：gateway 权威与跨 gateway 传输已上 main，剩余是生产化接线工作。社区对“Bot 常驻群聊”需求强烈，是明确的路线图信号。
- **[Issue #101941](https://github.com/NousResearch/hermes-agent/issues/101941)**（10 评论，👍4）+ 约 7 个重复 Issue（#101996/#101960/#102018/#101993/#101999/#101989/#102005/#102003/#102040 等）— Desktop 启动崩溃风暴，详见第 5 节。
- **[Issue #52261](https://github.com/NousResearch/hermes-agent/issues/52261)**（7 评论）— 本地推理（oMLX/MLX）用户报告 provider 内存 400 错误被误判为 `context_overflow`，触发破坏性的压缩/重置循环，对本地低资源用户伤害大，长期未解。

## 5. Bug 与稳定性

**P1 — Desktop 启动崩溃（今日头条）**
- [Issue #101941](https://github.com/NousResearch/hermes-agent/issues/101941)：自 `c401756a6a`（#91545 pool sizing 改为 Settings 偏好）后，Electron 主进程在 ESM import 阶段崩溃——`rememberLog` 在 `hermesLog` 初始化前被 `readPersistedPoolLimits` 调用。#101960/#102018 进一步指出是打包产物中 `var hermesLog = []` 声明顺序被重排过调用点。影响所有平台、新装与升级用户。重复 Issue 已批量关闭归并，**修复 PR 未在本次数据中明确出现，需尽快发布补丁版本**。

**P1 — SSH 隔离后端孤儿化与 state.db 多写者损坏**
- [Issue #101626](https://github.com/NousResearch/hermes-agent/issues/101626)：睡眠笔记本静默积累孤儿远程 `serve --isolated` 后端。✅ 已有修复 [PR #101678](https://github.com/NousResearch/hermes-agent/pull/101678)（待合并）。

**P2 — 其他重要 Bug**
- [Issue #101938](https://github.com/NousResearch/hermes-agent/issues/101938)：上下文压缩后已完成消息在 Desktop 渲染两次。
- [Issue #101975](https://github.com/NousResearch/hermes-agent/issues/101975)：模型切换对未编目模型名做模糊“纠正”（gemini-3.8 → 3.6）。✅ 修复 [PR #102042](https://github.com/NousResearch/hermes-agent/pull/102042)。
- [Issue #102023](https://github.com/NousResearch/hermes-agent/issues/102023)：`.env` 诊断重新推导路径而非报告 loader 实际读取。✅ 修复 PR ×2（[PR #102038](https://github.com/NousResearch/hermes-agent/pull/102038)、[PR #102043](https://github.com/NousResearch/hermes-agent/pull/102043)，重复提交待归并）。
- [Issue #101669](https://github.com/NousResearch/hermes-agent/issues/101669)：MCP 服务器中单个工具使用布尔 schema（`properties.x: true`）即导致整个 server 被 park。
- [Issue #97762](https://github.com/NousResearch/hermes-agent/issues/97762)：v0.20.6 自动更新后侧栏零会话渲染，需清 renderer storage 才能恢复。
- [Issue #83617](https://github.com/NousResearch/hermes-agent/issues/83617)：重命名对话框空格键被 dnd-kit KeyboardSensor 吞掉（核心工作流无 workaround）。

## 6. 功能请求与路线图信号

- **Bot 群聊常驻化**（[#97681](https://github.com/NousResearch/hermes-agent/issues/97681)）：基础设施已在 main，配套 [PR #101057](https://github.com/NousResearch/hermes-agent/pull/101057)（managed gateway 会话路由 Bot Mode）正在推进，**很可能进入下一版本**。
- **模型选择器可见性控制**（[PR #101859](https://github.com/NousResearch/hermes-agent/pull/101859)）：`explicit_only_pickers` + openrouter 全模型开关，回应 Muse Spark 不可见类问题（#96563）。
- **Skills 目录瘦身**（[PR #55675](https://github.com/NousResearch/hermes-agent/pull/55675)，自 6 月底开放）：大目录按类别延迟加载，减少系统提示注入。
- **本地 GPU 支持**（[PR #100749](https://github.com/NousResearch/hermes-agent/pull/100749)）：AMD/Intel GPU 改用 Vulkan 构建，服务本地推理用户群（与 #52261 用户画像一致）。

## 7. 用户反馈摘要

- **升级链路是最大痛点**：自动更新后启动崩溃（#101941 系列）、侧栏空白（#97762）、Windows 更新状态丢失（#99771）集中爆发，用户对“更新即翻车”体验不满，建议引入打包产物的最小启动冒烟测试。
- **本地/低资源用户**（#52261）感激 Hermes 对本地 MLX 的支持，但错误分类导致的破坏性上下文重置让他们“不敢长期挂机”。
- **会话状态可靠性**是反复出现的主题：历史丢失（#92279，已关闭）、渲染空白（#77437）、压缩后重复渲染（#101938），用户对数据安全的敏感度高。
- **性能优化收获好评预期**：teknium1 的 subagent 扇出系列 PR 直接回应了大规模并发用户的内存/线程痛点。

## 8. 待处理积压

| 条目 | 状态 | 提醒 |
|---|---|---|
| [Issue #66616](https://github.com/NousResearch/hermes-agent/issues/66616) | 7-18 开启至今，146 评论，仍 degraded | Skills index CI 长期不健康，需人工介入 |
| [Issue #52261](https://github.com/NousResearch/hermes-agent/issues/52261) | 6-25 开启，P2 破坏性行为 | 本地推理用户核心痛点，无修复 PR |
| [Issue #77216](https://github.com/NousResearch/hermes-agent/issues/77216) | 8-03 开启 | kanban_attach 缺本地路径选项，大文件截断风险 |
| [Issue #77437](https://github.com/NousResearch/hermes-agent/issues/77437) | 8-03 开启，needs-repro | 标签页切换空白对话，长期未复现确认 |
| [Issue #83617](https://github.com/NousResearch/hermes-agent/issues/83617) | 8-11 开启，建议 P1 | 重命名空格键被吞，影响核心工作流 |
| [PR #91422](https://github.com/NousResearch/hermes-agent/pull/91422) | 8-21 开启至今 | api_server 缺失 `disabled_toolsets` 透传，待 review |
| [PR #55675](https://github.com/NousResearch/hermes-agent/pull/55675) | 6-30 开启，2 个多月 | 大型改动需维护者给出合并/拆分决策 |

**维护者行动建议**：① 优先发布 Desktop 启动崩溃热修版本；② 修复 skills-index CI；③ 对 #101941 类打包顺序回归增加 bundle 产物断言测试。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-09-03

## 1. 今日速览

NanoClaw 今日保持中高活跃度：24 小时内 8 条 PR 更新（7 待合并、1 关闭）、3 条 Issues 活跃、无新版本发布。核心团队开发者 @santisiri 单日连开两个核心修复 PR（#3702、#3703），聚焦消息投递与任务调度的实时性问题，显示核心 runtime 质量打磨仍在持续。供应链安全方向出现重复修复（#3492 / #2973 关闭），说明该问题长期未落地，值得维护者协调。无 Issue 关闭，Issue 处理吞吐略有滞后。

## 2. 版本发布

今日无新版本发布。无破坏性变更或迁移事项。

## 3. 项目进展

今日无合并记录，唯一状态变更是关闭 PR：

- **#2973 [CLOSED]** `fix(supply-chain): activate the minimumReleaseAge gate` — @sturdy4days 的供应链安全修复被关闭，但同主题的 [#3492](https://github.com/nanocoai/nanoclaw/pull/3492)（core-team 成员 @amit-shafnir 提交，含回归测试）仍处于 OPEN 且今日有更新，推测是官方以 core-team 版本收编替代社区版本。

今日新开的两个核心 PR 虽未合并，但代表项目近期重点：

- **#3703** `fix: delivery spends no attempt on a disconnected adapter` — 修复投递逻辑不检查 `ChannelAdapter.isConnected()` 导致断线重连中的适配器白白消耗 3 次投递尝试的问题。
- **#3702** `fix: tasks run feeds the reconcile queue` — 使 `ncl tasks run` 立即触发执行而非等待最长 60 秒的周期性 resync，显著改善 CLI 任务发起的响应性。

## 4. 社区热点

- **[#3529](https://github.com/nanocoai/nanoclaw/issues/3529)**（2 条评论，08-25 开启、今日仍在更新）— 最热讨论。用户 @glifocat 报告 `update-nanoclaw` 的 skill refresh 机制误判本地自定义 adapter 为 skill 产物，导致**用户自写代码在升级时被覆盖或阻断升级，且无 opt-out**。这触及“自动升级 vs 用户定制”的根本矛盾，对 fork/二次开发用户影响大。
- **[#3704](https://github.com/nanocoai/nanoclaw/issues/3704)**（今日新开）— @davekim917 请求将 `SqliteAgentMailbox` 的 session-assembly 逻辑抽为 protected hook，以便 fork 子类化扩展数据库 schema。诉求本质与 #3529 一致：**扩展性 seam 不足，fork 维护者被迫请求官方开放更多定制点**。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | **#3529** 升级时本地 adapter 被覆盖/阻断升级，无退出机制（数据/代码损失风险） | 无 fix PR ⚠️ |
| 中高 | **#3680** `validateSpec` 中 allowlisted-extra mount 绕过（安全漏洞，mount-security） | 已有 fix PR [#3680](https://github.com/nanocoai/nanoclaw/pull/3680) 待合并 |
| 中 | **#3427** `send_card` 虚报成功，实际 Chat SDK bridge 静默丢弃 callback 按钮，误导 agent 决策 | 已有 fix PR，core-team 标记，08-21 起待合并近两周 |
| 中 | **#3703** 投递消耗尝试次数于已断线 adapter，可致消息延迟/丢失 | 今日提交 fix PR |
| 中低 | **#3492 / #2973** `minimumReleaseAge` 供应链防护配置位置错误导致 gate 未生效（supply-chain 风险） | #3492 待合并 |
| 低 | **#3702** CLI 任务启动最多延迟 60 秒 | 今日提交 fix PR |
| 低 | **#3113** WhatsApp 入站媒体未暂存至容器可读路径 | fix PR 待合并逾一个月 |

## 6. 功能请求与路线图信号

- **#3704**：受保护的 session-assembly hook（`SqliteAgentMailbox` 子类化支持）— 属于 API 表面小改动、向后兼容，采纳概率较高。
- **#3701**（09-02）：请求在 `validateSpec` 中支持 gateway 声明式凭证通道，服务 24 组 agent 的多凭证网关场景 — 与 #3680（validateSpec 安全修复）改动区域重叠，可能随其一并设计。
- **#3573**：AIML API 集成文档 PR — 第三方商业推广性质，需维护者审核把关。

**路线图信号**：三个 Issue/PR 均指向同一主题——为重度定制/fork 用户提供稳定的扩展 seam，建议官方将其列入下一版本规划。

## 7. 用户反馈摘要

- **升级体验痛点**：自动更新机制对自建 adapter 不友好，用户对“升级即覆盖自定义代码”表示沮丧（#3529）。
- **Fork 维护者诉求**：davekim917 系列 Issue（#3701、#3704）展现高质量重度用户——大规模多 agent 部署（24 组）、SQLite 层深度定制，其反馈说明扩展点文档化的 seam 设计总体可用但粒度不够。
- **Agent 可靠性**：send_card 虚假成功（#3427）会让 agent 误以为用户可点按钮，破坏多轮交互闭环，属用户可感知的行为缺陷。
- **总体印象**：社区贡献者（安全、WhatsApp、供应链）持续活跃，项目吸引到企业级重度用户，但维护者对社区 PR 的响应速度是当前瓶颈。

## 8. 待处理积压

- **#3113**（07-21 开启，43 天）— WhatsApp 媒体暂存修复，长期无进展，建议维护者跟进。
- **#3427**（08-21，core-team 标记）— 核心交互 bug 修复挂起近两周。
- **#3492 vs #2973** — 同一供应链修复存在两个 PR，需官方明确取舍并加速合并，`minimumReleaseAge` gate 目前实际未生效属安全隐患。
- **#3529**（08-25 开启，9 天，0 👍 但持续更新）— 高影响升级缺陷尚无修复 PR，建议优先排期。
- **#3680**（安全类）— mount 绕过漏洞修复应尽快评审合并。

---
*数据来源：GitHub API 快照（过去 24 小时），链接前缀 github.com/nanocoai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-09-03

## 1. 今日速览

IronClaw 今日保持高活跃度：过去 24 小时 PR 更新达 22 条（待合并 15、已合并/关闭 7），Issue 更新 3 条，无新版本发布。工程主线集中在 **WebUI 类型化治理（清除 `@ts-nocheck`）**、**CI 编译缓存优化** 和 **流式性能修复**三大方向。核心贡献者（@italic-jinxin、@BenKurrek、@henrypark133）持续高强度产出，维护响应速度良好，项目整体健康度较高。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的重要 PR：

- **[PR #8051](https://github.com/nearai/ironclaw/pull/8051)** (fix, XL) — 修复渐进式回复 bug：答案只取当前模型调用的文本，早期调用的“旁白”不再被拼接进回答，直接改善 Slack/Telegram 渠道用户体验。
- **[PR #8006](https://github.com/nearai/ironclaw/pull/8006)** (feat, XL) — 合入持久化渐进式回复与原生 Slack Agent UI，建立 provider 中立的 `ReplyDocument` 接缝。
- **[PR #8050](https://github.com/nearai/ironclaw/pull/8050)** (ci, L) — 重大 CI 优化：Reborn 测试 lane 此前每条 PR 都冷编译完整依赖闭包，现在引入稳定 hermetic Cargo home、push-only 共享缓存，预计显著缩短 CI 时长。
- **[PR #8042](https://github.com/nearai/ironclaw/pull/8042)** (fix, L) — 修复两个导致 merge-queue 弹出 #8006 的 flake：serve smoke 测试 stderr 关闭杀进程问题、mutation gate 判定范围问题。
- **[PR #8045](https://github.com/nearai/ironclaw/pull/8045)** (fix, XS) — CLI smoke 测试等待真实 TCP 回环连接而非仅 banner。
- **[PR #8039](https://github.com/nearai/ironclaw/pull/8039)** (refactor, XL) — 为 64 个生产组件/hooks 移除 `@ts-nocheck` 并补充显式类型。
- **[PR #8003](https://github.com/nearai/ironclaw/pull/8003)** (deps, L) — 17 个 Rust 依赖批量升级。
- Issue [#8035](https://github.com/nearai/ironclaw/issues/8035) 随 WebUI 类型化 PR 系列落地而关闭。

整体看，今日完成了 Slack 渠道体验闭环 + CI 基础设施大幅提速 + 前端类型债务集中清偿，是工程效率与产品质量双提升的一天。

## 4. 社区热点

- **[Issue #8009](https://github.com/nearai/ironclaw/issues/8009)**（OPEN，1 条评论）— MCP egress 错误被压平为单一 `"response_error"`，丢失底层原因和字节计数，导致 hosted-MCP 发现失败无法诊断。这是当前唯一有讨论的 Issue，反映用户对**错误可观测性**的强烈诉求。
- **[PR #8037](https://github.com/nearai/ironclaw/pull/8037) / [#8038](https://github.com/nearai/ironclaw/pull/8038) / [#8040](https://github.com/nearai/ironclaw/pull/8040)** — WebUI TypeScript 治理三部曲（抑制 ratchet、API 边界类型化、测试基建类型化），是今日规模最大的系列工程投入。

## 5. Bug 与稳定性

按严重程度排列：

1. **🔴 [Issue #8009](https://github.com/nearai/ironclaw/issues/8009)** — MCP 错误信息丢失，诊断能力受损（发现失败不可诊断）。**尚无对应 fix PR**，需维护者关注。
2. **🔴 [Issue #8041](https://github.com/nearai/ironclaw/issues/8041)** — `FailureKind` 分类错误会把模型引向不可恢复的路径（如把“参数错误”当成“工具不存在”）。**尚无 fix PR**。
3. **🟡 [PR #7985](https://github.com/nearai/ironclaw/pull/7985)**（OPEN）— 记忆服务将“文档缺失”误报为 `InputEncode`，误导模型重试错误方向。已有修复 PR 待合并。
4. **🟢 已修复**：渐进式回复拼接错误（#8051，已合）、serve smoke flake（#8042/#8045，已合）。
5. **🟡 [PR #8044](https://github.com/nearai/ironclaw/pull/8044)**（OPEN）— 新 Claude 模型族因 allowlist 未覆盖而静默降级关闭 prompt cache；fix PR 已在途。

## 6. 功能请求与路线图信号

- **Subagent 审批可见性**：[PR #8046](https://github.com/nearai/ironclaw/pull/8046) 让子代理被审批/凭证 gate 阻塞时通知到达所有者收件箱（R3 slice 3a），表明 subagent 编排是活跃路线图。
- **Web 应用运行完成通知**：[PR #8010](https://github.com/nearai/ironclaw/pull/8010)（OPEN，XL）实现统一的 session-event SSE 传输 + 持久化完成通知，已有批准设计文档支撑。
- **性能方向**：[PR #8043](https://github.com/nearai/ironclaw/pull/8043) 将流式文本更新从 O(N·k) 优化为合并推送，暗示团队在为长回复/高频 token 场景做优化储备。

## 7. 用户反馈摘要

从 Issue 内容提炼的痛点：

- **可诊断性差**：错误分类体系（`FailureKind`、MCP egress）过度压平，用户在生产排障时拿不到根因（#8009、#8041）。
- **错误语义对模型的误导**：多个 Issue（#8041、#7985）共同指向同一核心问题——错误类别决定模型后续行为，分类错则 agent 进入不可恢复循环。这是 AI 助手领域非常本质的用户痛点。
- **渠道体验**：Slack/Telegram 渐进式回复将中间旁白混入答案（#8051 已修复），说明用户对多渠道消息质量敏感。

## 8. 待处理积压

- **[Issue #8009](https://github.com/nearai/ironclaw/issues/8009)**（创建于 08-31）— MCP 错误压平问题，今日有更新但无 PR 对应，建议排期。
- **[Issue #8041](https://github.com/nearai/ironclaw/issues/8041)** — FailureKind 语义设计问题，0 评论，暂无维护者回应。
- **[PR #7985](https://github.com/nearai/ironclaw/pull/7985)**（08-28 开启，今日仍 OPEN）— 记忆服务错误分类修复，已挂起约一周，与 #8041 主题相关，建议一并评审。
- **[PR #7835](https://github.com/nearai/ironclaw/pull/7835)** — GitHub Actions 依赖批量升级（含 setup-node 4→7 大版本跳跃），已挂起 11 天，可能存在迁移风险需评估。
- **[PR #7988](https://github.com/nearai/ironclaw/pull/7988)** — CI bot 的代码库知识图谱刷新，例行但待合并。

---

*数据来源：GitHub API（Issues / PRs / Releases），统计窗口为 2026-09-02 至 2026-09-03。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-09-03）

## 1. 今日速览

过去 24 小时 LobsterAI 仓库保持中等活跃度：Issues 更新 6 条（新开/活跃 4，关闭 2），PR 更新 8 条（待合并 5，已合并/关闭 3），无新版本 Release 发布。今日最重要的动态是 **Release PR #2600（2026.8.31）已关闭**，意味着包含新手引导、Library 浏览优化、视频分享等特性的一轮迭代已收尾。同时出现一条高质量新 Issue（#2601，MCP Apps UI 渲染支持），显示社区对 MCP 生态前沿能力的关注。值得注意的是，多条 3 月底/4 月初提交的 Issue/PR 被标记为 stale，积压问题需要关注。

## 2. 版本发布

今日无正式 Release 发布，但 [PR #2600 "Release: 2026.8.31"](https://github.com/netease-youdao/LobsterAI/pull/2600) 已关闭，主要内容：

- 引导式首次运行体验（guided first-run experience）
- Library 浏览更快、更可靠
- 客户端支持分享模型生成的视频
- 更清晰的登录与配额提示
- Windows 安装器恢复能力增强

正式 Release 及 Tag 预计即将发布，建议关注。无破坏性变更披露。

## 3. 项目进展

今日关闭/合并 3 个 PR：

- **[PR #2600](https://github.com/netease-youdao/LobsterAI/pull/2600)** — Release 2026.8.31 准备 PR，涉及 renderer/docs/main/cowork/IM/Windows 安装器/artifacts 多个模块，是当日最大动作。
- **[PR #2599](https://github.com/netease-youdao/LobsterAI/pull/2599)** — `fix(im): improve bot card layout`：多实例机器人卡片限制为两列响应式布局，空添加卡片保持紧凑并垂直居中。IM 多机器人场景的 UI 体验改进落地。
- **[PR #2598](https://github.com/netease-youdao/LobsterAI/pull/2598)** — `Liuzhq/fix guide win`，修复 Windows 引导页问题（renderer 区域）。

整体看，当日合并集中在 UI 打磨与发布准备，功能性大特性不多，处于版本收尾阶段。

## 4. 社区热点

- **[Issue #2601](https://github.com/netease-youdao/LobsterAI/issues/2601)（今日新开，1 评论）**：请求桌面客户端支持渲染 MCP Apps / Prefab UI（`io.modelcontextprotocol/ui` 扩展，如 PrefectHQ Prefab / FastMCP 返回的交互式 HTML）。这是 MCP 生态的最新交互范式，用户希望 LobsterAI 跟进，避免在与支持 MCP Apps 的客户端竞争中落后。
- **[Issue #1552](https://github.com/netease-youdao/LobsterAI/issues/1552)（2 评论，今日关闭）**：AI 产物 Markdown 预览及 FileCard 文件卡片需求，描述详细（写作/文档生成场景），今日被关闭（stale），社区对高质量需求未被实现即关闭可能存在不满。

## 5. Bug 与稳定性

按严重程度排列（均为历史 Issue，今日有活动/被标记 stale，暂无对应 fix PR 合并）：

1. **高：[Issue #1089](https://github.com/netease-youdao/LobsterAI/issues/1089)** — `CoworkRunner startSession/continueSession` 缺少 per-session 重入保护，IPC fire-and-forget 调用下并发进入事件流迭代，导致流式消息损坏和消息重复。涉及 `src/main/libs/coworkRunner.ts:1425-1533`。⚠️ 无明确 fix PR。
2. **高：[Issue #1088](https://github.com/netease-youdao/LobsterAI/issues/1088)** — Prefetch 异步回调不校验 turnToken，跨轮次污染 pendingUserSync 状态（`openclawRuntimeAdapter.ts:3809-3814`）。⚠️ 无明确 fix PR。与 #1087（部分相关）属于同一类并发/时序问题。
3. **中：[Issue #1556](https://github.com/netease-youdao/LobsterAI/issues/1556)（已关闭）** — IM 机器人配置指南文档链接 404。
4. **合规风险：[Issue #1082](https://github.com/netease-youdao/LobsterAI/issues/1082)** — 内嵌 openclaw 版本停留在 v2026.3.2，用户引用国家互联网应急中心要求提醒升级，存在安全合规隐患。

另有 [PR #1087](https://github.com/netease-youdao/LobsterAI/pull/1087)（continueSession 失败时重复错误消息）可作为 #1089 相关方向的参考修复，但本身仍为 stale 待合并。

## 6. 功能请求与路线图信号

- **MCP Apps / Prefab UI 渲染（[#2601](https://github.com/netease-youdao/LobsterAI/issues/2601)）**：今日新开，最有可能进入后续规划——与项目已深度集成 MCP 的方向一致，且刚发布的 2026.8.31 已腾出迭代窗口。
- **定时任务失败 IM 告警（[PR #1078](https://github.com/netease-youdao/LobsterAI/pull/1078)）**：实现完整、诉求合理，若维护者复核后合并，将补齐 cron 任务失败通知空白。
- **Cowork「当前进程」面板（[PR #1079](https://github.com/netease-youdao/LobsterAI/pull/1079)）**：约 400 行新组件，含 diff 红绿高亮，是社区贡献中完成度较高的体验增强。
- **AI 产物文件卡片/预览（[#1552](https://github.com/netease-youdao/LobsterAI/issues/1552)）**：虽被 stale 关闭，但与 2026.8.31 中 "client support for sharing model-generated videos" 的产物体验方向吻合，需求本身仍具参考价值。

## 7. 用户反馈摘要

- **痛点：产物预览体验差**（#1552）：Agent 用 Write 生成文件后只能靠 Read 贴全文或切文件管理器，写作场景体验不佳。
- **痛点：定时任务失败无感知**（#1078）：成功有 IM 推送、失败静默，用户需主动巡检，易遗漏。
- **痛点：错误提示重复混乱**（#1087）：一次失败显示两条不同格式错误消息。
- **痛点：合规压力**（#1082）：企业用户受监管要求驱动，需要依赖组件及时升级。
- **诉求：紧跟 MCP 前沿**（#2601）：用户在真实使用 PrefectHQ Prefab / FastMCP 等 MCP Apps 生态，希望桌面端具备对等渲染能力。
- **正面信号**：2026.8.31 迭代覆盖新手引导、Library 性能、视频分享、Windows 安装恢复等，反映团队在持续回应安装可靠性与首次体验反馈。

## 8. 待处理积压

以下条目均为 3 月底/4 月初创建、今日被机器人标记 stale，且尚无官方回应迹象，建议维护者优先处理：

| 条目 | 类型 | 风险 | 链接 |
|---|---|---|---|
| #1089 CoworkRunner 无重入保护 | 稳定性 Bug | 高（并发消息损坏） | [Issue](https://github.com/netease-youdao/LobsterAI/issues/1089) |
| #1088 Prefetch 跨轮次污染 | 稳定性 Bug | 高 | [Issue](https://github.com/netease-youdao/LobsterAI/issues/1088) |
| #1082 openclaw 版本过旧 | 安全合规 | 高 | [Issue](https://github.com/netease-youdao/LobsterAI/issues/1082) |
| #1078 定时任务失败告警 | 功能 PR | 中 | [PR](https://github.com/netease-youdao/LobsterAI/pull/1078) |
| #1079 Cowork 进程面板 | 功能 PR | 中 | [PR](https://github.com/netease-youdao/LobsterAI/pull/1079) |
| #1081 MCP 同步提示 i18n 修复 | 修复 PR | 低 | [PR](https://github.com/netease-youdao/LobsterAI/pull/1081) |
| #1087 重复错误消息修复 | 修复 PR | 低 | [PR](https://github.com/netease-youdao/LobsterAI/pull/1087) |
| #1277 Electron 40→44 升级 | 依赖更新 | 中（大版本跨跃，需回归测试，也与 #1082 的升级诉求相关） | [PR](https://github.com/netease-youdao/LobsterAI/pull/1277) |

**健康度小结**：项目处于活跃迭代状态（版本发布节奏稳定），但社区侧的并发稳定性 Bug 与多个高质量贡献 PR 长期悬置（约 5 个月），stale 机制正在批量关闭有价值的需求，建议维护者在新版本发布后集中清triage一轮，避免贡献者流失。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 · 2026-09-03

## 1. 今日速览

过去 24 小时 Moltis 保持较高活跃度：新增 2 个 Issue、3 个待合并 PR、发布 2 个版本（20260902.02 / 20260902.03），全部来自 9 月 2 日的集中贡献。核心贡献者 @GTanger 一人主导了 hooks 生命周期修复与推理能力增强两条主线，社区活跃度集中于功能与 Bug 报告，尚无评论互动，需关注响应深度不足的问题。无已关闭 Issue 或已合并 PR，节奏偏“提交多、收敛少”。

## 2. 版本发布

- **[20260902.03](https://github.com/moltis-org/moltis/releases)**：官方未附 changelog，推测为对 20260902.02 的快速迭代补丁（连续同日双版本发布，建议关注 tag diff）。
- **[20260902.02](https://github.com/moltis-org/moltis/releases)**：同样无说明文档。

⚠️ 两个 Release 均缺少发布说明，用户无法判断是否包含破坏性变更，建议维护者补充 changelog。

## 3. 项目进展

今日无 PR 被合并，但 3 个开放 PR 方向明确：

- **[#1257](https://github.com/moltis-org/moltis/pull/1257) fix(hooks): complete lifecycle dispatch** —— 补齐 `AgentEnd`/`MessageSending`/`MessageSent` 事件的实际派发，并为工具链路 Hook 增加可选 `tool_call_id`（保持旧 payload 兼容）。直接修复 Issue #1254/#1255，是今日最重要的推进。
- **[#1253](https://github.com/moltis-org/moltis/pull/1253) feat(reasoning): add max effort level** —— 新增 `@reasoning-max` 模型后缀与推理强度 `max` 档位，Codex API 直传、不支持的 provider 做钳制，UI/翻译同步更新。
- **[#1256](https://github.com/moltis-org/moltis/pull/1256)** —— Dependabot 例行升级 browserslist 4.28.2 → 4.28.8（npm_and_yarn 组），属常规安全维护。

## 4. 社区热点

今日新增 Issue 均无评论与 👍，尚无“热点”形成，但两 Issue 质量较高（均附 Preflight Checklist，复现于最新版 20260902.01）：

- **[#1255](https://github.com/moltis-org/moltis/issues/1255)（Bug）**：三个 Hook 事件“声明了但从未派发”，反映 Hook 用户对生命周期完整性的诉求。
- **[#1254](https://github.com/moltis-org/moltis/issues/1254)（Feature）**：要求 Hook payload 携带稳定的 tool call ID——典型场景是跨 `BeforeToolCall`/`AfterToolCall` 做调用追踪与审计。

两个诉求同源于 “Hook 体系可观测性不足”，PR #1257 已一次性覆盖。

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | Fix PR |
|---|---|---|---|
| 中高（功能性缺陷，非崩溃） | [#1255](https://github.com/moltis-org/moltis/issues/1255) Hooks 声明未派发 | OPEN | ✅ [#1257](https://github.com/moltis-org/moltis/pull/1257) |
| 低（依赖安全） | browserslist 旧版本 | — | ✅ [#1256](https://github.com/moltis-org/moltis/pull/1256) |

无崩溃或回归报告，稳定性面整体平稳。

## 6. 功能请求与路线图信号

- **[#1254](https://github.com/moltis-org/moltis/issues/1254) tool_call_id**：已有对应实现（PR #1257），**大概率随下个版本落地**。
- **PR #1253 max 推理档位**：作者即核心贡献者，功能完整（schema、解析、多 provider 适配、UI），纳入下一版本可能性高。

路线图信号：Moltis 正在两个方向发力——**Hook 体系工程化**（可观测、可关联）与**推理强度精细化控制**（多 provider 适配）。

## 7. 用户反馈摘要

今日 Issue 均由 @GTanger 提出（疑似维护者/深度贡献者自检），尚无普通用户评论可提炼。间接信号：

- 用户依赖 Hook 做工具调用监控与审计，“process-per-event” 的 Hook 模型下缺少调用级关联 ID 是实际痛点；
- 报告流程规范（无凭据、最新版复现），说明项目对外部贡献质量有一定引导。

## 8. 待处理积压

- **PR [#1257](https://github.com/moltis-org/moltis/pull/1257)、[#1253](https://github.com/moltis-org/moltis/pull/1253)、[#1256](https://github.com/moltis-org/moltis/pull/1256)** 均待 review/合并，#1257 同时阻塞 Issue #1254/#1255 的关闭，建议优先处理。
- **Release 说明缺失**：20260902.02/.03 两个版本无 changelog，建议补充以降低用户升级风险。

---

*总体评估：项目处于健康迭代状态，单日 2 Issue + 3 PR + 2 Release 的产出稳定；隐忧在于贡献集中度过高（单一贡献者主导）与 review 响应待提速。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 — 2026-09-03

---

## 1. 今日速览

今日是 QwenPaw 项目的高活跃日：过去 24 小时内 Issues 更新 26 条（新开/活跃 16、关闭 10），PR 更新 28 条（待合并 19、已合并/关闭 9），并正式发布 **v2.2.0 稳定版**（同日还有 v2.2.0-beta.7 收尾与 2.2.1b1 版本号 bump）。社区关注焦点集中在**安全沙箱问题**（#7511 报告沙箱被突破，7 条评论）与多智能体执行体验。整体开发节奏健康：issue 关闭率约 38%，PR 合并与新开基本平衡，测试覆盖冲刺（+245 用例）和移动端原生客户端持续推进中。

---

## 2. 版本发布

### v2.2.0（Stable，今日发布）
- **QwenPaw Hub**：支持自托管多用户 Hub，含本地进程 / Docker 运行时、工作区级访问控制、凭证管理、反向代理支持（[#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112)）
- **QwenPaw Data** 等模块更新（发布说明被截断）
- 发布后由 Release Duty bot 自动发起安装验证（[#7515](https://github.com/agentscope-ai/QwenPaw/issues/7515)，已通过并关闭）
- 配套文档更新已合并（[PR #7517](https://github.com/agentscope-ai/QwenPaw/pull/7517)）

### v2.2.0-beta.7（发布前最后一个 beta）
- fix(memory): 规范化后端特定 embedding 维度（[PR #7465](https://github.com/agentscope-ai/QwenPaw/pull/7465)）
- fix(webui): 深色模式覆盖

### 迁移注意事项
- **破坏性变更**：`ModelInfo.max_tokens` → `max_output_length` 迁移（PR #7337）导致部分用户自定义 provider 配置加载失败，见 Issue [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474)（已关闭，需确认修复是否随 v2.2.0 发布）。升级用户若使用 custom provider，建议检查配置文件字段。
- 下一迭代已启动：v2.2.1b1 版本号已 bump（[PR #7522](https://github.com/agentscope-ai/QwenPaw/pull/7522)，已合并）。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 内容 | 意义 |
|---|---|---|
| [#7523](https://github.com/agentscope-ai/QwenPaw/pull/7523) | fix(chat): 流式生成期间同步已解析会话 | 直接修复 #7512“思考中无法切换会话”，多会话并发体验改善 |
| [#7501](https://github.com/agentscope-ai/QwenPaw/pull/7501) | Agent 模型路由设置 | Console 新增子 agent 模型 / fallback 策略配置 UI，补齐 #7493 指出的入口缺失 |
| [#7392](https://github.com/agentscope-ai/QwenPaw/pull/7392) | 独立 Fallback 模型设置页 | 运行时配置结构化，与 Embedding 设置解耦 |
| [#7441](https://github.com/agentscope-ai/QwenPaw/pull/7441) | ReMe 升级至 0.4.1.11 + Auto Fin 记忆源 | 长期记忆能力扩展（金融资讯定时入库） |
| [#7520](https://github.com/agentscope-ai/QwenPaw/pull/7520) | 受保护执行契约（首版，已关闭，后续 #7526 延续） | Agent 执行的安全/授权契约铺垫 |
| [#7517](https://github.com/agentscope-ai/QwenPaw/pull/7517) | v2.2.0 官网文档更新 | 发布配套 |

**整体评估**：今日推进以 v2.2.0 收尾为主线（模型路由 UI、会话切换修复、记忆升级、文档），同时开启 2.2.x 修复线，节奏成熟稳定。

---

## 4. 社区热点

1. **[#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511)（已关闭，7 评论）**：用户 @Jiongcheng-Li 报告"安全沙箱被突破"并附知乎分析文章，与同作者的 [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443)"危险指令易绕过"（6 评论，仍开放）形成安全系列反馈。**这是当前社区最敏感的话题**，核心诉求是沙箱与指令防护的真实有效性。
2. **[#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450)（7 评论）**：主 agent + 多子 agent 架构下，主 agent 不主动轮询子 agent 进度，需用户手动追问。反映多智能体编排的自治监控缺失，与 PR #7526“protected execution contract”方向相关。
3. **[#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417)（已关闭，6 评论）**：Console 流式输出重复大段文本 + SSE 事件重放路径问题，影响前端体验核心。
4. **[#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505)（4 评论）**：访问局域网 LLM Server（LM Studio）频繁 client disconnect 直至超时——本地部署用户的连通性痛点。

---

## 5. Bug 与稳定性（按严重程度）

**🔴 严重（安全）**
- [#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511)：安全沙箱被突破（已关闭，7 评论）——需关注官方是否给出根因说明与补丁版本
- [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443)：危险指令绕过防护（**仍开放**，6 评论）

**🟠 高**
- [#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505)：LAN LLM 访问频繁断连重试最终超时（开放）
- [#7431](https://github.com/agentscope-ai/QwenPaw/issues/7431)：codex harness 在非流式网关下第三方 agent 每轮“空响应”、usage 全 0（开放，3 评论）
- [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469)：ReMe 后台 embedding 任务静默失败，新记忆不入库（开放）
- [#7510](https://github.com/agentscope-ai/QwenPaw/issues/7510)：v2.2.0-beta.7 Desktop `/memory/status` 返回 500（开放）

**🟡 中**
- [#7531](https://github.com/agentscope-ai/QwenPaw/issues/7531)：OpenCode API 将于 09/06 强制要求 `x-opencode-session` 头，**有截止日期的兼容性问题**
- [#7529](https://github.com/agentscope-ai/QwenPaw/issues/7529)：Langfuse 监控下工具 output 为空 → **已有修复 PR [#7532](https://github.com/agentscope-ai/QwenPaw/pull/7532)**（异步生成器提前关闭导致）
- [#7513](https://github.com/agentscope-ai/QwenPaw/issues/7513)：deepseek-v4-pro 输出与工具调用内容混杂
- [#7516](https://github.com/agentscope-ai/QwenPaw/issues/7516) / [#7507](https://github.com/agentscope-ai/QwenPaw/issues/7507)：WeCom 渠道 base64 图片发送失败、流式输出 150ms 节流过慢

**已修复/关闭**：#7512（会话切换，PR #7523）、#7474（custom provider 迁移）、#7467（beta 强制确认轮次 + 自动折叠）、#7493（模型路由面板入口，PR #7501）、#7417（流式重复）。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 纳入可能性 |
|---|---|---|
| 手机远程连接桌面端（会话/审批/文件） | [#7519](https://github.com/agentscope-ai/QwenPaw/issues/7519) | **高** — PR [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378) Expo/React Native 原生移动端已在开发中 |
| 提升远程 WebUI 首次加载对话速度 | [#7514](https://github.com/agentscope-ai/QwenPaw/issues/7514) / #7518 | 中高 — 已有重复提交显示强烈需求，属性能优化范畴 |
| 消息按钮（选项交互）+ 自定义 channel | [#7533](https://github.com/agentscope-ai/QwenPaw/issues/7533) | 中 — Console + Channels 前后端联动改动较大 |
| 上下文压缩时保留 agent 人设/关系语境 | [#7527](https://github.com/agentscope-ai/QwenPaw/issues/7527) | 中高 — 与 PR [#7521](https://github.com/agentscope-ai/QwenPaw/pull/7521)（thinking 折叠省上下文）同属 compaction 优化方向 |

**路线图信号**：PR #7486（Creator 1.1.2：T2V/I2V/S2V 调度、A/B 对比）与 #7509（Make Skill v2 审批式技能发布流）表明创作者工具与技能生态是下一阶段重点。

---

## 7. 用户反馈摘要

- **满意点**：多渠道接入（WeCom/微信/DingTalk）和 custom provider 灵活性受本地化部署用户欢迎；v2.2 修复响应速度快（如会话切换 bug 当日修复）。
- **痛点 1 — 可观测性缺失**：多子 agent 场景“黑盒”运行（#7450），用户被迫手动追问进度。
- **痛点 2 — 静默失败**：ReMe 后台任务、Langfuse output 等问题只在日志中留痕，用户侧无感知（#7469、#7529）。
- **痛点 3 — 本地/第三方模型兼容性**：LM Studio 断连（#7505）、codex 网关空响应（#7431）显示非官方 provider 路径仍是薄弱环节。
- **痛点 4 — 远程访问体验**：WebUI 首载慢（#7514）与移动端需求（#7519）反映“离开桌面继续用”的真实场景未被满足。

---

## 8. 待处理积压

- **[#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443)**（8-31 创建，开放）：危险指令绕过——与已关闭的 #7511 同源，**建议维护者公开回应安全修复计划**，避免社区猜疑。
- **[#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450)**：子 agent 进度自治查询，尚无关联 PR。
- **[#7431](https://github.com/agentscope-ai/QwenPaw/issues/7431)**：codex harness 非流式空响应，跨组件问题，已 3 天未定论。
- **[#7531](https://github.com/agentscope-ai/QwenPaw/issues/7531)**：OpenCode header 强制截止 09-06，**时间敏感**，建议优先。
- **长期 PR**：[#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960)（Pawport 导入流，8-13 起）、[#6936](https://github.com/agentscope-ai/QwenPaw/pull/6936)（providers 类型强转，8-12 起）均超过 3 周待审，需维护者介入推进。

---

*数据来源：GitHub API（过去 24 小时窗口）。本报告由自动化分析生成，链接均指向 agentscope-ai/QwenPaw 仓库。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报

**日期：2026-09-03** | 项目地址：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

## 1. 今日速览

今日 EasyClaw 项目整体活跃度处于**低位运行**状态。过去 24 小时内 Issues 与 PR 均无任何新增或更新（各 0 条），社区讨论与代码贡献活动暂时停滞。但项目仍保持发布节奏，今日发布了 **v1.9.2 版本（TK Copilot v1.9.2）**，聚焦联盟营销（Affiliate）工作流的重构与体验优化，表明核心维护者仍在持续投入开发。综合来看，项目处于“**发布驱动、社区静默**”的阶段，健康度需结合后续几日的社区反馈持续观察。

---

## 2. 版本发布

### 🚀 v1.9.2: TK Copilot v1.9.2
- 链接：[Releases · v1.9.2](https://github.com/gaoyangz77/easyclaw/releases)

**更新内容：**
1. **重构 Affiliate 营销活动工作区（Affiliate campaign workspace）**
   - 大型创作者表格支持分页（page large creator tables），提升大数据量场景下的可用性
   - 支持在不发送私信的前提下邀请创作者（invite creators without sending a direct message），降低触达成本与打扰
   - 样品申请审核（sample applications review）界面升级：可同时查看**商品库存**与**创作者历史表现**，辅助运营决策

2. **重新设计创作者升级/申诉流程（creator escalation）**
   - 围绕“员工决策（staff decision）”重构流程，使 Agent 能够基于员工决策采取后续行动

**破坏性变更与迁移注意事项：**
- Release Notes 中未明确标注破坏性变更（Breaking Changes）
- ⚠️ 建议升级用户关注 Affiliate workspace 的界面交互变化，特别是私信邀请逻辑变更（默认不再发送 DM）可能影响既有运营流程；正式迁移指引请以官方 Release 页全文为准

---

## 3. 项目进展

- 今日**无 PR 合并或关闭**（待合并 0，已合并/关闭 0）
- 项目进展主要通过 v1.9.2 版本发布体现，开发工作以维护者独立提交为主，功能重心集中在**电商/联盟营销 Agent 场景的深化**（创作者管理、样品审核、升级决策流程）

---

## 4. 社区热点

今日无活跃 Issue 或 PR 讨论，暂无可提取的社区热点话题。建议持续关注 v1.9.2 发布后 3–7 日内可能涌现的使用反馈。

---

## 5. Bug 与稳定性

今日**无新增 Bug 报告**，无已知崩溃或回归问题记录。风险提示：v1.9.2 涉及 Affiliate workspace 与 escalation 流程两项较大重构，建议升级用户留意相关功能的潜在回归，如遇问题可通过 [Issues](https://github.com/gaoyangz77/easyclaw/issues) 反馈。

---

## 6. 功能请求与路线图信号

今日无新功能请求。从 v1.9.2 的更新方向可推断路线图信号：
- **电商/联盟营销自动化**是核心赛道（创作者招募、样品管理、绩效审核）
- **Agent 与人工决策协同**（staff decision 驱动 Agent 行动）或是后续重点演进方向

---

## 7. 用户反馈摘要

今日无 Issue 评论数据，暂无法提炼用户痛点与满意度反馈。

---

## 8. 待处理积压

今日数据显示无活跃积压 Issue 或 PR。若长期跟踪，建议维护者：
- 关注 v1.9.2 发布后的用户反馈窗口期，及时响应升级问题
- 考虑补充更完整的 CHANGELOG 与迁移文档，降低大重构版本（如本次 workspace 重做）的升级摩擦

---

*数据来源：GitHub API（统计窗口：过去 24 小时）。本报告由自动化分析生成，供项目健康度监测参考。*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*