# OpenClaw 生态日报 2026-09-04

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-04 03:31 UTC

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

# OpenClaw 项目动态日报 — 2026-09-04

## 1. 今日速览

OpenClaw 今日保持高活跃度：过去 24 小时 Issues 更新 500 条（新开/活跃 372，关闭 128），PR 更新 500 条（待合并 433，合并/关闭 67），并发布了 **v2026.9.1** 正式版。核心进展集中在 Control UI 与移动端 Mermaid 图表渲染、Swarm 默认启用、Gateway 热重载能力等方向。但内存子系统（memory-core）与 SQLite 稳定性问题持续发酵，多个 P0/P1 数据损坏类 Issue 仍未有 fix PR，是当前最大健康度隐患。

---

## 2. 版本发布

### v2026.9.1 ([Release 链接](https://github.com/openclaw/openclaw/releases/tag/v2026.9.1))

**Highlights：**
- **全端 Mermaid 图表渲染**：Mermaid 代码块现可在 Control UI 及 macOS/iOS/Android 原生应用中渲染为图表，支持放大预览，移动端渲染失败时可重试（#134913, #135746, #135470, #135342）
- Release notes 被截断，建议用户升级前查阅完整变更日志

**迁移注意事项**：多个 Issue 反馈 2026.7.x → 2026.8.x 升级后 `doctor --fix` 存在死锁/失败路径（#134938 已关闭、#137377 已关闭、#136203 仍开放），从旧版本跨版本升级的用户应在维护窗口操作并备份 agent DB。

---

## 3. 项目进展

今日合并/关闭 67 个 PR，重点包括：

- **[PR #137818](https://github.com/openclaw/openclaw/pull/137818)（已关闭）** CLI 接受 URL 形式的初始消息参数
- **[PR #137771](https://github.com/openclaw/openclaw/pull/137771)（已关闭）** 修复瞬时 provider 故障被误报为永久性模型配置错误（#137746）
- **待合并高优先级**：
  - [PR #136514](https://github.com/openclaw/openclaw/pull/136514) **Swarm 默认启用**（XL，含 codex 扩展，兼容性风险标记）— 路线图级变更
  - [PR #137606](https://github.com/openclaw/openclaw/pull/137606) Gateway 重启后恢复委托任务最终结果（可用性修复）
  - [PR #136998](https://github.com/openclaw/openclaw/pull/136998) 关闭 Gateway 后消除迟到的请求失败
  - [PR #137790](https://github.com/openclaw/openclaw/pull/137790) Gateway 热重载认证限流与 mDNS 发现模式，无需重启
  - [PR #137860](https://github.com/openclaw/openclaw/pull/137860) 修复 Telegram Doctor 误删账户、降低空闲清理内存
  - [PR #136805](https://github.com/openclaw/openclaw/pull/136805) 封顶 service-child 控制管道内存增长（直接关联 #97616 僵尸进程家族问题）

整体看，项目在**可用性（Gateway 生命周期）、通道可靠性（Telegram/Slack）、内存泄漏治理**三条线上明显推进；433 个待合并 PR 显示贡献吞吐量大但审阅压力大。

---

## 4. 社区热点

| Issue | 评论 | 热点分析 |
|---|---|---|
| [#125626](https://github.com/openclaw/openclaw/issues/125626) 2026.8.1 beta 反馈（24 评论） | 维护者贴出的 beta 验证汇总贴，社区集中反馈 beta 缺陷 |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) memory-core SQLite 无限增长（11 评论） | `memory_index_chunks`/`memory_embedding_cache` 无保留策略，生产实例磁盘被填满，用户强烈要求 retention 机制 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) 僵尸子进程泄漏（10 评论） | hook/tool 子进程未 reap，长期运行退化；#136805 是相关但部分覆盖的修复 |
| [#110190](https://github.com/openclaw/openclaw/issues/110190) 运行时上下文载体置于用户消息之后（9 评论） | ~15K 字符元数据注入位置导致模型混乱、推理 token 浪费；与 #123652、#123265 同属 runtimeContextCarrier 系列问题 |
| [#72741](https://github.com/openclaw/openclaw/issues/72741) 外部安全/护栏检查标准接口（9 评论） | 企业用户诉求：统一集成第三方 agent 行为审计 |

**诉求主线**：生产部署用户（长期运行、多 agent）对**数据安全、资源泄漏、升级可回滚性**的关注远超功能需求。

---

## 5. Bug 与稳定性（按严重程度）

### 🔴 P0
- **[#126821](https://github.com/openclaw/openclaw/issues/126821)** SQLite 在全新重建的 DB 上 15–24 小时内反复损坏（WSL2，5 天 5 次，含"瘫痪网关"模式）— 无 fix PR
- **[#123327](https://github.com/openclaw/openclaw/issues/123327)** 共享状态 WAL checkpoint 将索引页覆盖到 SQLite 第 1 页（数据损坏）— 无 fix PR
- **[#136148](https://github.com/openclaw/openclaw/issues/136148)** Linux 桌面 AppImage WebKitWebProcess SIGABRT 白屏 — 无 fix PR
- **[#136452](https://github.com/openclaw/openclaw/issues/136452)** 心跳会话不受 `maxActiveTranscriptBytes` 约束 → V8 OOM — 无 fix PR
- **[#136203](https://github.com/openclaw/openclaw/issues/136203)** Windows de-DE 升级遗留阻塞状态 — 无 fix PR

### 🟠 P1
- **[#135347](https://github.com/openclaw/openclaw/issues/135347)**（maintainer 报告）强制 memory reindex 使 DB 膨胀至 35GB，删除恢复导致会话全毁 — 无 fix PR
- **[#136311](https://github.com/openclaw/openclaw/issues/136311)** Gateway 每次启动抢走 reindex 锁，索引不可修复，19GB 孤儿临时 DB — 无 fix PR
- **[#136175](https://github.com/openclaw/openclaw/issues/136175)** 全量 reindex 饱和 CPU、阻塞诊断 — 无 fix PR
- **[#126906](https://github.com/openclaw/openclaw/issues/126906)** deny 写工具后静默禁用记忆持久化且 agent 谎报成功 — 无 fix PR
- **[#125570](https://github.com/openclaw/openclaw/issues/125570)** Skill Workshop 更新覆盖 live skill 描述，静默破坏路由 — 无 fix PR
- **[#136183](https://github.com/openclaw/openclaw/issues/136183)**（回归）命令执行器 spawn ssh 挂起，2026.8.1 起持续
- **[#135111](https://github.com/openclaw/openclaw/issues/135111)**（回归）claude-sonnet-5 间歇性 "malformed JSON arguments"
- **[#137710](https://github.com/openclaw/openclaw/issues/137710)**（今日新报）原生 Codex 完成后不唤醒 yield 父会话

### 🟡 其他
- **[#137705](https://github.com/openclaw/openclaw/issues/137705)**（今日新报，P2 安全）Telegram 通道泄漏原始 `file://` Markdown 链接

**今日已关闭的 Bug**：#134307（oauth MCP 工具目录缺失）、#125344（embedding worker 泄漏）、#135970（codex plugin 缺 node_modules）、#134938（doctor --fix 死锁）— 修复节奏可观，但 memory/SQLite 损坏类核心问题仍全部待修。

---

## 6. 功能请求与路线图信号

结合 Issue 与进行中 PR 判断：

- **Swarm 默认启用**：[PR #136514](https://github.com/openclaw/openclaw/pull/136514) 已 ready for maintainer look，大概率进入下一版本
- **Cron/Automations 可观测性**：[PR #135889](https://github.com/openclaw/openclaw/pull/135889)（run 溯源、token 预算）+ [PR #135890](https://github.com/openclaw/openclaw/pull/135890)（task-lanes 看板）成对推进，配合 [#126781](https://github.com/openclaw/openclaw/issues/126781)（durable Lobster workflows），自动化运维是明确路线方向
- **UI 富文本编辑**：[PR #137618](https://github.com/openclaw/openclaw/pull/137618)（Markdown 富文本编辑）已提交，呼应用户对 composer 体验的反馈
- **安全护栏标准接口** [#72741](https://github.com/openclaw/openclaw/issues/72741)：讨论充分但尚无对应 PR，属中长期信号
- **[/followup 单次命令](https://github.com/openclaw/openclaw/issues/127208)、[cron 维护窗口 RFC](https://github.com/openclaw/openclaw/issues/120244)**：小而美，实现成本低，可能被社区 PR 认领

---

## 7. 用户反馈摘要

**痛点集中在四类场景：**

1. **长期运行的生产部署**：进程/内存/DB 无限增长是最高频抱怨（#114612、#97616、#86119、#136452），7×24 助手用户最受伤
2. **升级体验差**：Windows 用户反复报告 doctor/迁移路径损坏（#136203、#137377 已关闭）；有生产用户公开求助安全回滚指引（[#123799](https://github.com/openclaw/openclaw/issues/123799)，Codex compact 404）
3. **静默失败最伤信任**：记忆保存谎报成功（#126906）、Telegram 消息一次失败即死信（#125764）、transcript 双写（#118185）——用户明确表示"宁可报错也不要假装成功"
4. **CLI 后端（claude-cli/codex）是二等公民**：模型列表崩溃、auth 识别失败（#126429）、OAuth MCP 缺失（#134307 已修）

**满意点**：Mermaid 渲染、多平台原生应用、Issue 分诊标签体系（clawsweeper）获得好评；维护者 @steipete 高频响应值得肯定。

---

## 8. 待处理积压（维护者关注）

| 条目 | 状态 | 建议 |
|---|---|---|
| [#114612](https://github.com/openclaw/openclaw/issues/114612) SQLite 无限增长 | 7/27 起 open，标 needs-maintainer-review | memory retention 策略需要产品决策，影响所有长期部署 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) 僵尸进程泄漏 | 6/29 起 open | #136805 部分覆盖，建议确认关联性 |
| [#110190](https://github.com/openclaw/openclaw/issues/110190) 上下文载体位置 | 7/17 起 open | 与 #123652/#123265 同根因，宜统一设计决策 |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) 计费冷却 5 小时不恢复 | 7/29 起 open，needs-live-repro | 影响订阅用户可用性 |
| [#86119](https://github.com/openclaw/openclaw/issues/86119) 孤儿 node worker 累积 | 5/24 起 open | 与进程泄漏家族问题应合并治理 |
| [#126874](https://github.com/openclaw/openclaw/issues/126874) Windows CI 仅覆盖 0.6% 测试 | 8/20 起 open | 解释了为何 Windows 平台 bug 频发，工程基建债 |
| [PR #127254](https://github.com/openclaw/openclaw/pull/127254) 卸载文档 | waiting on author | 轻量，可推动闭环 |

**健康度小结**：功能迭代与修复吞吐旺盛（关闭率约 Issues 26%、PR 13%），但 memory-core/SQLite 数据损坏类 P0 问题积压超过两周且无一有 fix PR，是项目当前最大的系统性风险，建议优先投入。

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告（2026-09-04）

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入**功能收敛与质量分化并存**的阶段：头部项目（OpenClaw、Hermes、IronClaw、CoPaw）日更新量达 50-1000 条，呈现“平台化”特征（多渠道接入、多 agent 协作、记忆系统、沙箱安全），而长尾项目（PicoClaw、NullClaw、TinyClaw 等）活跃度低或停滞。生态共性痛点已从“能不能用”转向**长期运行稳定性**——内存/进程/DB 泄漏、静默失败、升级可回滚性成为跨项目高频议题。同时，MCP 生态集成、prompt cache 成本优化、cron/自动化可观测性构成当前三条明确的技术演进主线。中国背景项目（CoPaw、LobsterAI、PicoClaw）在 IM 渠道（飞书/企微/QQ）和私有化部署场景上形成差异化生态位。

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 合并/关闭 PR | Release | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（关闭128） | 500（待合并433） | 67 | **v2026.9.1** | ⚠️ 功能强但 P0 数据损坏积压超两周无 fix |
| **CoPaw (QwenPaw)** | 29（关闭10） | 36（待合并21） | 15 | v2.2.0 临近 | ✅ 良好，响应快，多租户路线明确 |
| **Hermes Agent** | 50（关闭2） | 50（待合并46） | 4 | 无 | ⚠️ 重构期，bug 量偏高但贡献踊跃 |
| **Zeroclaw** | 50（关闭14） | 50（待合并50） | **0** | 无 | ⚠️ 评审瓶颈严重，安全议题活跃 |
| **IronClaw** | 7 | 18 | 10 | 无 | ✅ 优秀，工程治理成熟（CI 棘轮、失败分类） |
| **NanoBot** | 4 | 25（待合并11） | 14 | 无 | ✅ 良好，回归修补及时 |
| **NanoClaw** | 5 | 23（待合并20） | 3 | 无 | ✅ 良好，架构演进（provider 契约化）清晰 |
| **LobsterAI** | 6 | 15 | 10 | 2026.9.4 筹备中 | ✅ 稳定，版本节奏健康 |
| **PicoClaw** | 5 | 8（待合并7） | 0 | 无 | ⚠️ 靠社区维持，核心迭代平缓，stale 积压 |
| NullClaw / TinyClaw / Moltis / ZeptoClaw / EasyClaw | 0 | 0 | 0 | 无 | 🔴 静默 |

**分层结论**：OpenClaw 一档（更新量约为第二名 10 倍）；CoPaw/Hermes/Zeroclaw/IronClaw/NanoBot/NanoClaw 二档（日 20-50 条）；LobsterAI/PicoClaw 三档；五个项目无活动。

## 3. OpenClaw 在生态中的定位

**优势：**
- **规模碾压**：单日 500 条 Issue + 500 条 PR 更新、433 个待合并 PR，社区贡献吞吐量与 @steipete 高频响应使其事实上的生态“参照系”——LobsterAI 甚至以 openclaw 版本为依赖锚点（#1082）。
- **全端覆盖**：唯一实现 Control UI + macOS/iOS/Android 原生应用 + 多渠道（Telegram/Slack 等）完整矩阵的项目；Swarm 默认启用（PR #136514）标志其向多智能体平台演进。

**劣势与风险：**
- **系统性稳定性债务**：memory-core/SQLite 数据损坏类 P0（#126821、#123327、#135347）积压超两周无一有 fix PR，35GB DB 膨胀案例已伤及维护者自身——这是同类项目中无人可比的最严重健康隐患。
- **Windows CI 仅覆盖 0.6% 测试**（#126874），解释了 Windows 升级路径问题频发。
- **审阅压力**：433 待合并 PR / 日合并 67（关闭率 13%），大量修复长期悬置。

**技术路线差异**：OpenClaw 走“大而全平台”路线；Zeroclaw 主打安全沙箱与可验证意图（Rust）；Hermes 激进重构（-36% LOC）；IronClaw 专注工程治理与子代理审批；NanoBot/NanoClaw/LobsterAI 走轻量精致路线。OpenClaw 的 memory-core 自研记忆子系统是其独有复杂度来源，也是当前风险集中地。

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **Prompt cache / token 成本** | OpenClaw（#110190 上下文载体位置）、Hermes（#102194 P0 cache miss）、IronClaw（#8044/#8062 缓存键体系）、NanoBot（#5632 Codex cache 亲和） | 跨 turn/工具循环保持稳定缓存键；15K 元数据注入位置浪费推理 token |
| **Cron/自动化可观测性** | OpenClaw（#135889/#135890）、NanoBot（#5620）、Zeroclaw（#10599、cron 独立 crate）、CoPaw（#7476）、Hermes（#83993） | cron 静默失败可见、run 溯源、投递状态准确——五项目同时发力，是最强共识 |
| **静默失败 / agent 诚实性** | OpenClaw（#126906 记忆谎报成功）、Zeroclaw（#10600/#10563）、NanoClaw（#3706/#3426） | “宁可报错不要假装成功”成为用户明确要求 |
| **长期运行资源泄漏** | OpenClaw（#114612/#97616/#86119）、Hermes（#102574 调度器单线程） | 进程/内存/DB 无限增长是 7×24 部署头号杀手 |
| **MCP 生态集成** | LobsterAI（#2601 Prefab UI）、Zeroclaw（发布目标注册表）、IronClaw（#8009 MCP 错误传播）、NanoClaw（OpenCode/Codex provider） | MCP 成为 agent 工具接入的统一标准 |
| **OpenCode session header 时限** | Zeroclaw（#10603）、CoPaw（#7531/#7536，09-06 截止） | 上游 API 强制变更引发跨项目紧急适配 |
| **沙箱/安全护栏** | Zeroclaw（分层沙箱 RFC、#9328）、IronClaw（#7903 持久沙箱）、CoPaw（#7511 沙箱逃逸、#7443）、Hermes（serve 路径 hook 失效） | 企业级安全边界与统一审计接口需求上升 |

## 5. 差异化定位分析

| 维度 | 分化点 |
|---|---|
| **功能侧重** | OpenClaw=全端平台+Swarm 多智能体；Zeroclaw=安全优先（可验证意图、沙箱策略）；Hermes=多 provider MoA + Group Chat 协作；CoPaw=多租户 Hub + ReMe 记忆；LobsterAI=桌面端体验+应用内浏览器；PicoClaw=多 IM 渠道+边缘硬件（ARM/RKLLM）；NanoClaw=provider 契约化+mailbox 扩展性 |
| **目标用户** | OpenClaw/Hermes 面向极客与生产部署者；CoPaw 面向中文企业/私有化场景（飞书/企微）；Zeroclaw 面向安全敏感的自托管用户；LobsterAI 面向桌面个人用户；PicoClaw 面向低成本硬件玩家 |
| **技术架构** | Rust（Zeroclaw）；TypeScript 重度（IronClaw/CoPaw）；大规模 Python/TS 单体 undergoing 拆解（Hermes -36% LOC）；Go（PicoClaw）；Electron 桌面（LobsterAI） |

## 6. 社区热度与成熟度

- **快速迭代/扩张期**：OpenClaw（吞吐最大但债务积累）、Hermes（重构+功能双线并行）、CoPaw（v2.2.0 冲刺+多租户规划，首贡献者 funnel 最健康）
- **质量巩固期**：IronClaw（类型债清偿+CI 棘轮，成熟度标杆）、NanoBot（回归快速修补）、Zeroclaw（安全修复密集但评审吞吐为零，需打破瓶颈）
- **稳定/低速**：LobsterAI（版本节奏规律）、PicoClaw（社区驱动，核心投入不足）
- **停滞风险**：NullClaw、TinyClaw、Moltis、ZeptoClaw、EasyClaw

## 7. 值得关注的趋势信号

1. **“诚实性”成为第一类公民需求**：用户对 agent 谎报成功的容忍度降至最低（OpenClaw/Zeroclaw/NanoClaw 三项目同日出现此主题），输出可验证性（verifiable-intent、无凭据动作重采样）将成标配。
2. **Prompt cache 是被低估的护城河**：四个项目同周投入缓存键/上下文位置优化，直接决定运营成本，建议将“跨 turn 缓存稳定性”纳入 agent 框架选型硬指标。
3. **自动化可观测性是下一竞争点**：五项目同时建设 cron 可见性，AI 助手正从“对话工具”变为“无人值守系统”，运维信号（health、投递状态、token 预算）不可或缺。
4. **上游 API 变更驱动被动适配**（OpenCode 09-06 强制 header），建议建立上游变更监控与快速发布通道。
5. **企业/合规信号显现**：CoPaw 多租户 Hub、LobsterAI 依赖合规、OpenClaw #72741 护栏标准接口——个人助手向团队部署演进是明确方向。
6. **工程治理决定长期健康**：IronClaw 的 CI 棘轮 + 每日失败分类、OpenClaw 的 Windows CI 覆盖率债务形成鲜明对照——大规模贡献吞吐若无审阅与测试基建配套，反而积累系统性风险（OpenClaw 的 memory-core 危机即为教训）。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-09-04）

## 1. 今日速览

NanoBot 今日保持高活跃度：过去 24 小时内共 25 条 PR 更新（14 条已合并/关闭、11 条待合并），4 条 Issue 更新（3 新开、1 关闭），无新版本发布。修复方向集中在 WebUI 稳定性（流式状态、会话标题、国际化注册竞态）和渠道可靠性（Signal/Matrix/Provider），其中多项修复是对既有 PR 引入的回归问题的二次修补，反映社区提交速度较快但回归测试覆盖仍在补齐。多名核心贡献者（@chengyongru、@Shizoqua、@zpljd258 等）持续高频产出，项目健康度良好。

## 2. 版本发布

今日无新版本发布。值得注意的是 #5645 报告了 0.3.0 相对 0.2.2 的行为变更（Current Time 运行时上下文默认缺失），若确认为回归，可能触发补丁版本发布。

## 3. 项目进展

今日合并/关闭 14 条 PR，主要推进：

- **WebUI 流稳定性**：[PR #5514](https://github.com/HKUDS/nanobot/pull/5514) 修复 Gateway 重连后 WebUI 卡在 spinning 状态的问题（订阅 `onRunStatus` 清理过期流状态），对应关闭 [Issue #5512](https://github.com/HKUDS/nanobot/issues/5512)。
- **渠道可靠性**：
  - [PR #5334](https://github.com/HKUDS/nanobot/pull/5334)：消息分段后保留缩进，修复 Signal UTF-16 偏移对齐；
  - [PR #5637](https://github.com/HKUDS/nanobot/pull/5637)：Matrix 流投递失败可走重试策略；
  - [PR #5385](https://github.com/HKUDS/nanobot/pull/5385)：完整实现 Element SAS 验证流程；
  - [PR #5472](https://github.com/HKUDS/nanobot/pull/5472)：Signal 入站白名单支持通配符 `*`。
- **Provider 层**：[PR #5413](https://github.com/HKUDS/nanobot/pull/5413) Provider 抛异常时 fallback 链条生效；[PR #5632](https://github.com/HKUDS/nanobot/pull/5632) 保持 Codex prompt cache 亲和性（稳定 session-id + prompt_cache_key），有性能收益。
- **SDK 与 Agent**：[PR #5635](https://github.com/HKUDS/nanobot/pull/5635) 修复流关闭时队列满导致事件丢失；[PR #5515](https://github.com/HKUDS/nanobot/pull/5515) 观察会话回复超时任务的失败；[PR #5629](https://github.com/HKUDS/nanobot/pull/5629) tool_hints 对普通参数值遵守 max_length。
- **国际化**：[PR #5646](https://github.com/HKUDS/nanobot/pull/5646) 语言选择器仅显示原生语言名。

整体看，今日修复覆盖 WebUI、渠道、Provider、SDK 四个层面，稳定性显著提升；同时在途的功能性 PR（#5620 cron 批量归档、#5649 上下文复用可视化）预示下一版本有功能增量。

## 4. 社区热点

- [Issue #5644](https://github.com/HKUDS/nanobot/issues/5644)（WebUI locale 注册竞态）：启动时两个 locale 并发加载会丢一个，已有同日修复 [PR #5651](https://github.com/HKUDS/nanobot/pull/5651)，issue→fix 响应速度快。
- [Issue #5647](https://github.com/HKUDS/nanobot/issues/5647) / [PR #5648](https://github.com/HKUDS/nanobot/pull/5648)：PR #5528 修复会话标题投影后又暴露新边界（envelope 缺 webui flag 时标题不生成），由原 PR 作者自行跟进，社区自修复闭环良好。
- [PR #5649](https://github.com/HKUDS/nanobot/pull/5649)（上下文复用可视化）：将 token 用量移入紧凑弹层、按请求绘制堆叠条形图，直击用户对上下文成本可视化的诉求。
- [PR #5620](https://github.com/HKUDS/nanobot/pull/5620)（cron 交付配置 + 批量归档）：长生命周期 PR，持续更新中，是定时任务用户的核心期待。

## 5. Bug 与稳定性（按严重程度排列）

| 问题 | 严重度 | 状态 |
|---|---|---|
| [#5645](https://github.com/HKUDS/nanobot/issues/5645) 0.3.0 默认丢失 Current Time 运行时上下文，与文档不符（0.2.2 行为回归） | **高**（影响 agent 时间感知，疑似版本回归） | 暂无 fix PR，需维护者优先确认 |
| [#5644](https://github.com/HKUDS/nanobot/issues/5644) locale 注册竞态导致语言丢失 | 中 | 已有 [PR #5651](https://github.com/HKUDS/nanobot/pull/5651) 待合并 |
| [#5647](https://github.com/HKUDS/nanobot/issues/5647) 会话标题在特定 envelope 下不生成 | 中低 | 已有 [PR #5648](https://github.com/HKUDS/nanobot/pull/5648) |
| [#5641](https://github.com/HKUDS/nanobot/pull/5641) iOS PWA 首次点击被吞、状态栏问题 | 中低（影响移动端体验） | 修复 PR 在途 |
| [PR #5650](https://github.com/HKUDS/nanobot/pull/5650)（已关闭）Hero 模型预设丢失 | 低 | 已处理关闭（可能被替代方案覆盖） |

## 6. 功能请求与路线图信号

- **Cron 增强**（[PR #5620](https://github.com/HKUDS/nanobot/pull/5620)）：可配置交付目标 + 批量归档 + WebUI 管理，功能完整度高，大概率进入下一版本。
- **上下文复用可视化**（[PR #5649](https://github.com/HKUDS/nanobot/pull/5649)）：面向成本透明度的新 UI 能力，作者为核心贡献者，采纳概率高。
- **模型重试状态可视化**（[PR #5504](https://github.com/HKUDS/nanobot/pull/5504)）：TUI/WebUI 展示重试倒计时，仍在途。
- **Codex OAuth token 持久化到数据目录**（[PR #5446](https://github.com/HKUDS/nanobot/pull/5446)）：标记 conflict，需先解决冲突。

## 7. 用户反馈摘要

- **WebUI 稳定性是最大痛点**：Gateway 重启后 UI 永久转圈（#5512）、流状态残留等问题多次被报告，说明长连接/重连场景是用户高频使用路径。
- **版本升级引发隐性回归担忧**：0.2.2 → 0.3.0 默认行为变化未在文档中体现（#5645），用户期望文档与实现一致。
- **多渠道（Signal/Matrix/iMessage 类）用户对消息完整性和验证流程有精细要求**：缩进丢失、SAS 验证、白名单通配符均为真实使用场景反馈。
- **移动端 PWA 体验受关注**（#5641），iOS 用户群体不可忽视。
- 整体反馈情绪偏建设性，多数 issue 附带复现步骤和根因分析，社区技术素养较高。

## 8. 待处理积压

- [Issue #5645](https://github.com/HKUDS/nanobot/issues/5645)：今日新开、无评论、无 fix PR，且涉及版本回归，**建议维护者优先响应**。
- [PR #5446](https://github.com/HKUDS/nanobot/pull/5446)：8-19 开启至今，标记 conflict 未解决。
- [PR #5504](https://github.com/HKUDS/nanobot/pull/5504)：8-24 开启，仍在途，建议明确合并排期。
- [PR #5620](https://github.com/HKUDS/nanobot/pull/5620)：9-01 开启，功能体量大，建议拆分或加速 review 以免积压。

---
*数据来源：HKUDS/nanobot GitHub 仓库，统计窗口 2026-09-03 至 2026-09-04。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-09-04

## 1. 今日速览

项目整体活跃度**高**：过去 24 小时内 Issues 更新 50 条（新开/活跃 36，关闭 14），PR 更新 50 条（全部待合并，合并/关闭为 0）。社区讨论焦点集中在**沙箱安全策略、可验证意图凭证链、网关能力设计**等安全与架构议题，多个高评论量 RFC 进入维护者评审阶段。今日新增若干 S1 级 Bug（zerocode 工作目录、OpenCode session 头缺失），部分已有对应修复 PR。无版本发布，代码处于持续集成与评审消化阶段，积压 PR 较多（50 个待合并）值得维护者关注吞吐节奏。

## 2. 版本发布

今日无新版本发布，无破坏性变更与迁移事项。

## 3. 项目进展

今日无 PR 被合并/关闭，但从关闭的 14 个 Issues 可见以下工作已落地或接近完成：

- **通道安全修复**：[#9387](https://github.com/zeroclaw-labs/zeroclaw/issues/9387)（交互式审批响应可被任意群成员接受，P1/风险高）已关闭，多通道（Telegram/Slack/Lark/Matrix）授权漏洞得到处理。
- **健康检查修复**：[#9811](https://github.com/zeroclaw-labs/zeroclaw/issues/9811) `/health` 误报从未连接的通道为健康 —— 已关闭。
- **Docker 运行时**：[#9231](https://github.com/zeroclaw-labs/zeroclaw/issues/9231) Docker 命令嵌套双层沙箱（S1）已关闭。
- **通道转录绑定**：[#9905](https://github.com/zeroclaw-labs/zeroclaw/issues/9905)（Discord）、[#10486](https://github.com/zeroclaw-labs/zeroclaw/issues/10486)（Matrix）转录 provider 绑定问题均已关闭。
- **Web 多会话 UI**：[#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543) 网页聊天多会话侧栏功能已交付。
- **日志桥接**：[#10202](https://github.com/zeroclaw-labs/zeroclaw/issues/10202) `log` 依赖日志丢失问题修复关闭。

整体看，安全与可观测性方向的修复推进明显；但当日 PR 合并为零，评审吞吐是当前瓶颈。

## 4. 社区热点

| 议题 | 评论 | 焦点 |
|---|---|---|
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) RFC: 细粒度沙箱文件系统策略 | 23 | 应用层路径准入与 OS 沙箱后端（Bubblewrap/Landlock/Seatbelt）策略漂移，统一为分层策略的呼声强烈 |
| [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) verifiable-intent 未验证凭证链 | 14 | `evaluate_constraints` 校验的是调用方自供对象，偏离 VI 参考实现“先密码学验证再校验”的原则，属高危安全设计缺陷 |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) 维护者决策队列 Tracker | 14 | RFC/设计决策积压的协调中枢，反映社区对决策透明度的关注 |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) 网关原样发送消息 RFC | 13 | 47 个 `/api/*` 路径缺少“不经 agent turn 的原样发送”能力 |
| [#9975](https://github.com/zeroclaw-labs/zeroclaw/issues/9975) Web bundle/daemon 兼容性 RFC | 12 | `web_dist_dir` 兼容契约已到 Rev 3，采用中心化能力协商 |

诉求主线：**安全边界细化 + 架构契约明确化**，社区高质量技术讨论氛围浓厚。

## 5. Bug 与稳定性（按严重程度）

**S1（workflow blocked）**
- [#10609](https://github.com/zeroclaw-labs/zeroclaw/issues/10609)（今日新增）：zerocode 忽略启动目录，强制使用 agent workspace 作为 cwd —— **已有 fix PR [#10565](https://github.com/zeroclaw-labs/zeroclaw/pull/10565)**
- [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603)（今日新增）：OpenCode providers 从不发送 `x-opencode-session` 头，破坏 Go 模型并有账号被标记风险 —— 尚无 fix PR

**P1 安全类（存量活跃）**
- [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) 凭证链未验证（高危，进行中）
- [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) RUSTSEC-2026-0247 `bitmaps` 未维护 advisory，cargo deny 失败，状态 blocked

**S2/P2**
- [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) 交互式会话上下文被硬性截断在 32k，忽略 `max_context_tokens = 131072` —— 相关观测 PR [#10597](https://github.com/zeroclaw-labs/zeroclaw/pull/10597)（记录上下文用量与预算裁剪）可能辅助定位

## 6. 功能请求与路线图信号

- **[#10529](https://github.com/zeroclaw-labs/zeroclaw/issues/10529)**：支持 Anthropic `thinking.display` 进度更新（Fable 5.1 beta）—— 已关闭，或已实现，可能在下个版本落地。
- **[#10405](https://github.com/zeroclaw-labs/zeroclaw/issues/10405) / [#10406](https://github.com/zeroclaw-labs/zeroclaw/issues/10406)**：会话级 prompt 附件、Gemini 语音对话 broker 通道两个已接受 RFC 的实施 Tracker 均在推进，配套 PR [#10596](https://github.com/zeroclaw-labs/zeroclaw/pull/10596)（ACP 转录分页）已就绪，属下版本重点。
- **[#10222](https://github.com/zeroclaw-labs/zeroclaw/issues/10222)**：交互 agent 的单工具 provider 轮次（已接受 RFC），配合 PR [#10597] 的预算日志，是运行时演进的明确信号。
- **PR 方向**：[#10590](https://github.com/zeroclaw-labs/zeroclaw/pull/10590)/[#10591](https://github.com/zeroclaw-labs/zeroclaw/pull/10591) 发布目标注册表 + MCP bootstrap 启动器，暗示**面向 MCP 生态（Claude Code / Codex 集成）的安装体验**是路线图重点。
- **[#10557](https://github.com/zeroclaw-labs/zeroclaw/pull/10557)**：cron 抽取为独立 `zeroclaw-cron` crate（11,386 行迁移），架构解耦持续进行。

## 7. 用户反馈摘要

- **真实使用痛点**：手机照片（>5 MiB）上传即被丢弃 —— [#10589](https://github.com/zeroclaw-labs/zeroclaw/pull/10589) 将默认上限提至 20 MiB 回应此痛点，属典型“默认值低于现实世界”问题。
- **信任与诚实性**：多个 PR/Issue 反复出现“agent 谎报已完成动作”主题（[#10600](https://github.com/zeroclaw-labs/zeroclaw/pull/10600) 发送未发生却报成功、[#10563](https://github.com/zeroclaw-labs/zeroclaw/pull/10563) 叙述无凭据动作需重采样），说明用户对 agent 输出可验证性的要求在上升。
- **运维可观测性**：cron 静默失败不可见（[#10599](https://github.com/zeroclaw-labs/zeroclaw/pull/10599)）、`/health` 误报（#9811）表明自托管用户依赖准确的运行状态信号。
- **交互体验**：zerocode 工作目录（#10609）、Todo 面板持久化（[#10584](https://github.com/zeroclaw-labs/zeroclaw/pull/10584)）、长思考输出卡顿（[#10595](https://github.com/zeroclaw-labs/zeroclaw/pull/10595)）——TUI 用户体验仍有打磨空间。

## 8. 待处理积压

- **合并吞吐**：50 个 PR 全部待合并，0 个合并 —— 大量 XL 级 PR（#10197、#9584、#10557、#10584、#10595、#10596）长期在队列中，建议维护者优先处理评审瓶颈。
- **[#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899)**（P1, blocked）：RUSTSEC-2026-0247 豁免清理，依赖上游 Matrix SDK，需推动升级或替代。
- **[#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068)**：32k 上下文截断 Bug 处于 needs-repro，用户影响明确（S2），建议尽快分配复现资源。
- **[#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603)**：今日新报 S1，涉及账号封禁风险，尚无负责人跟进。
- **[#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108)**：CI 关键路径优化（PR 常跑 15-20 分钟）已讨论近两月，落地将直接缓解 PR 评审积压。

---
*数据来源：Zeroclaw GitHub 仓库 2026-09-03 ~ 2026-09-04 活动快照。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-09-04

## 1. 今日速览

Hermes Agent 今日保持高度活跃：过去 24 小时 Issues 更新 50 条（新开/活跃 48，关闭 2），PR 更新 50 条（待合并 46，合并/关闭 4），无新版本发布。社区焦点集中在两大方向：一是 @teknium1 的全库重构 PR #102117（−36% LOC、godfile 全部拆解）持续发酵，衍生出后续 epic issue；二是 Desktop 端高频 UX/稳定性 Bug（composer 误拖出、profile 串会话、Grok 流式渲染错位）和 `hermes serve` 下 shell hooks / plugin hooks 不触发的系统性问题。整体看，项目处于“大规模重构 + 快速迭代”并行期，Bug 报告量偏高但社区贡献踊跃，健康度良好。

## 2. 版本发布

今日无新 Release。（注：多处 Issue 提及 v0.21.0 后的 main 分支行为，下一版本预计将包含重构成果。）

## 3. 项目进展

今日合并/关闭的 PR 数量较少（4 条），但待合并管道非常充实，重点包括：

- **#102117 全库简化重构**（@teknium1，P1）：1,063,826 → ~676k LOC（−36%），所有 >5k LOC 的 godfile 拆解（37 → 6），号称零行为变更。这是本周期最大的一次架构推进，且已衍生后续 epic [#78647](https://github.com/NousResearch/hermes-agent/issues/78647)（残留 2K 项拆解任务）。
- **Group Chat 生态扩展**：[#102637](https://github.com/NousResearch/hermes-agent/pull/102637)（任意会话中转接 Group Chat）+ [#102638](https://github.com/NousResearch/hermes-agent/pull/102638)（`hermes group send` 打通 Desktop Group Chats），两 PR 配套推进多智能体协作场景。
- **认证与互操作**：[#102639](https://github.com/NousResearch/hermes-agent/pull/102639) OpenRouter OAuth PKCE 浏览器登录；[#102487](https://github.com/NousResearch/hermes-agent/pull/102487) 本地/远程网关间 bot profile 克隆。
- **Codex 适配修复**：#102640 / #102634 两个 PR 修复 replayed `call_id` 跨 turn 重复问题。
- **桌面体验**：#99848（xlsx/docx 原生预览）、#100869（文件卡"系统应用打开"）、#81351（keep-alive 隐藏面板穿透绘制修复）、#80447（Web Worker 离线 Shiki 高亮解决大 diff 冻结）。

## 4. 社区热点

- **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)** Skills index 陈旧告警（150 条评论，机器人持续探测）：Skills Hub 索引已 29.8h 未刷新（限 26h），指向 `skills-index.yml` cron 流水线问题。虽为自动化 issue，但持续降级状态值得维护者关注。
- **[#78647](https://github.com/NousResearch/hermes-agent/issues/78647)** godfile 消灭 epic 重新打开（79 条评论）：承接 #102117 的 2K 项残留拆解任务，明确"只拆不回退"政策，反映社区对架构治理的深度参与。
- **[#38007](https://github.com/NousResearch/hermes-agent/issues/38007)** Desktop 系统托盘后台运行（13 👍、8 评论）：Windows/Linux 用户最痛的冷启动问题，呼声最高的功能请求之一。
- **[#102194](https://github.com/NousResearch/hermes-agent/issues/102194)**（P0）：CLI 路径不持久化 `api_content` sidecar，导致每 turn 首次 API 调用命中不了 prompt cache——直接影响成本，评论活跃。

## 5. Bug 与稳定性（按严重度）

| 级别 | Issue | 问题 | Fix 状态 |
|---|---|---|---|
| P0 | [#102194](https://github.com/NousResearch/hermes-agent/issues/102194) | CLI 每 turn 首次调用丢失 prompt cache | 无 fix PR |
| P1 | [#102486](https://github.com/NousResearch/hermes-agent/issues/102486) | systemd 249 拒绝 `OOMPolicy=kill`，cron worker 全部派发失败（fails closed） | 未见 |
| P1 | [#102574](https://github.com/NousResearch/hermes-agent/issues/102574) | 共享 PeriodicScheduler 单线程，一个阻塞回调拖垮所有安全定时器 | 未见 |
| P1 | [#102526](https://github.com/NousResearch/hermes-agent/issues/102526) | Desktop 后端 HERMES_HOME 竞态 → 默认 bot 打开错误 profile 会话 | 未见 |
| P1 | [#102504](https://github.com/NousResearch/hermes-agent/issues/102504) / [#69825](https://github.com/NousResearch/hermes-agent/issues/69825) | `hermes serve` 从不注册 config shell hooks，所有防护静默失效（duplicate 标记中） | 未见 |
| P2 | [#102592](https://github.com/NousResearch/hermes-agent/issues/102592) | plugin 注册的 hooks 在 serve/dashboard 不触发（同根因） | 未见 |
| P2 | [#98645](https://github.com/NousResearch/hermes-agent/issues/98645) | clarify 卡片渲染空白 + 10 分钟超时（回归） | 未见 |
| P2 | [#101321](https://github.com/NousResearch/hermes-agent/issues/101321) | Grok 流式旧答案覆盖新答案 | 未见 |
| P2 | [#102057](https://github.com/NousResearch/hermes-agent/issues/102057) | Windows Studio bridge 冷启动探测竞态 ETIMEDOUT | 未见 |
| P3 | [#97296](https://github.com/NousResearch/hermes-agent/issues/97296) | macOS 27 kanban 派发 Popen fork → SIGSEGV | 未见 |
| P3 | [#102632](https://github.com/NousResearch/hermes-agent/issues/102632) | Nix sealed venv 缺 py-modules，`hermes dashboard` 崩溃 | 未见 |

⚠️ 系统性风险：`serve`/`dashboard` 启动路径跳过 hook 注册与 plugin discovery（#69825 / #102504 / #102592 疑似同根因），安全防护静默失效，建议优先排查。

已关闭亮点：[#83993](https://github.com/NousResearch/hermes-agent/issues/83993)（cron 投递失败被 `last_status:ok` 掩盖，P1）今日关闭。

## 6. 功能请求与路线图信号

- **MoA 配置增强**：#102582 / #102584 / #102585（@b-rightstart 一日三连）——`hermes moa configure` 暴露 per-slot `reasoning_effort`/`max_tokens` 并支持原地编辑。schema 字段已存在，实现成本低，很可能快速落地。
- **Desktop 打磨**：#102597（All-profiles 会话列表加 profile 标记）、#96219（失焦时保持动画）、#99793（thinking 块排版可主题化）。
- **跨渠道能力**：#102570（/btw 等斜杠命令桥接到消息渠道，已关闭）与 PR #102637/#102638 方向一致，说明"消息渠道 ↔ Group Chat 互通"是明确的路线图主线。
- **#38007 系统托盘**（13 👍）：长期高需求，结合近期 Desktop PR 密集投入，纳入概率上升。

## 7. 用户反馈摘要

- **痛点集中区**：Desktop 端交互细节拖累口碑——composer 误拖出（#70422、#101318，多人反复报告）、Reasoning 关闭仍 dump 全部 trace（#93817，用户称"使 Desktop 不可用"）、steer 消息插错位置（#79231）。
- **真实场景**：律师直接打开 .docx（#100869）、多 profile 用户区分工作/个人会话（#102597、#102526）、cron 定时任务用户依赖可靠投递与状态可见性（#83993、#102511）。
- **满意点**：插件/hook 系统设计（hashline-guard PR #80758 展示的扩展深度）、MoA 与多 provider 生态（OpenRouter OAuth、custom context window fix #99305 受欢迎）。
- **成本敏感**：prompt cache miss（#102194）引发对 token 成本的直接担忧。

## 8. 待处理积压

- [#66616](https://github.com/NousResearch/hermes-agent/issues/66616)（7-18 开，150 评论）：Skills index 流水线持续降级，需修复 cron 重建链路。
- [#78647](https://github.com/NousResearch/hermes-agent/issues/78647)（8-04 开）：2K 项 godfile 拆解 epic，需排期与分批认领机制。
- [#38007](https://github.com/NousResearch/hermes-agent/issues/38007)（6-03 开，13 👍）：系统托盘，3 个月未落地。
- [#64638](https://github.com/NousResearch/hermes-agent/issues/64638)（7-14 开）：Email IMAP 阻塞导致网关重启等待 TimeoutStopSec。
- PR 积压：46 个待合并 PR 中 #80447、#80758、#90143 等已搁置近一个月，建议维护者集中评审。

---
*数据来源：GitHub API（Issues/PR 更新截至 2026-09-04）。总体评估：项目处于高强度重构期，贡献者活跃、功能演进快，但 serve 路径 hook 失效（P1 级）与 Desktop UX 回归是当前最需投入的稳定性短板。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-09-04）

## 1. 今日速览

PicoClaw 今日整体活跃度中等偏静态：过去 24 小时共 5 条 Issue 更新（4 新开/活跃、1 关闭）、8 条 PR 更新（7 待合并、1 关闭），无新版本发布。活动以依赖自动升级（Dependabot 批量提交 5 个 Go 依赖 PR）和社区驱动的 Bug 修复 PR 为主，核心维护者的功能开发节奏较为平缓。多个 Issue 被标记为 [stale]，提示部分社区反馈存在积压风险，项目健康度处于“稳定但需维护者投入清理”的状态。

## 2. 版本发布

今日无新版本发布。当前用户普遍使用 0.3.x 版本（Issue 报告中多次提及 0.3.1）。

## 3. 项目进展

今日无 PR 被合并，但有 1 个 Issue 和 1 个 PR 被关闭：

- **Issue #3339 关闭**（[链接](https://github.com/sipeed/picoclaw/issues/3339)）：Antigravity 生成请求 429 错误问题被关闭，该问题为上游配额限制（`RESOURCE_EXHAUSTED`），非 PicoClaw 代码缺陷。
- **PR #3329 关闭**（[链接](https://github.com/sipeed/picoclaw/pull/3329)）：LINE 频道 `webhook_host/webhook_port` 无效配置告警修复被关闭（未合并），对应 Issue #3328 的解决路径中断，值得关注。

待合并 PR 中值得注意的实质性进展：

- **PR #3347**（[链接](https://github.com/sipeed/picoclaw/pull/3347)）：社区用户 @iMilnb 修复 Web UI 聊天输入卡顿问题，已在桌面与移动端 Brave 浏览器实测验证，今日仍在更新——直接对应今日最热门 Bug #3281。
- **PR #3340**（[链接](https://github.com/sipeed/picoclaw/pull/3340)）：修复 Slack 媒体上传因未设置 `FileSize` 导致全部失败的问题。
- **5 个 Dependabot 依赖升级 PR**（#3360–#3364）：涵盖 aws-sdk-go-v2（1.42.0→1.45.1）、golang.org/x/term、irc-go（0.6.0→0.7.0）、protobuf、larksuite oapi-sdk-go（3.9.4→3.11.0）。

整体来看，今日项目推进主要依赖社区贡献，核心功能迭代停滞，依赖维护正常。

## 4. 社区热点

- **Issue #3281**（9 条评论，2 👍，[链接](https://github.com/sipeed/picoclaw/issues/3281)）：**今日讨论热度最高**。Web UI 在聊天历史较长时输入严重卡顿，影响所有 Web 渠道用户的基础交互体验。已有对应修复 PR #3347，社区对合并该 PR 期待较高。
- **Issue #3349**（3 条评论，[链接](https://github.com/sipeed/picoclaw/issues/3349)）：QQ 频道无法使用（Authorization 格式错误 401），Docker 与 Linux x86 版本均复现，国内用户核心渠道受阻，尚无 fix PR。
- **Issue #3338 / PR #3340**（[Issue](https://github.com/sipeed/picoclaw/issues/3338)）：Slack 媒体内容无法附带，根因已定位（slack-go SDK 要求预设 `FileSize`），修复方案就绪待合并。

**诉求分析**：社区热点集中在“渠道可用性”（QQ、Slack）和“基础交互体验”（输入卡顿），均为影响日常使用的阻断性问题，而非新功能诉求。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix PR 状态 |
|---|---|---|---|
| 高 | [#3349](https://github.com/sipeed/picoclaw/issues/3349) | QQ 频道完全不可用（401 鉴权错误），多平台复现 | ❌ 无 |
| 高 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 长历史下输入严重卡顿 | ✅ PR [#3347](https://github.com/sipeed/picoclaw/pull/3347) 待合并 |
| 中 | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack 图片上传全部失败（`file size cannot be 0`） | ✅ PR [#3340](https://github.com/sipeed/picoclaw/pull/3340) 待合并 |
| 中 | [#3346](https://github.com/sipeed/picoclaw/issues/3346) | ARM 板上 RKLLM（Qwen3.5-0.8B w4）回复异常 | ❌ 无，仅 1 条评论 |

注：#3339（Antigravity 429）已确认为上游配额问题并关闭，非产品缺陷。

## 6. 功能请求与路线图信号

今日数据中无显式功能请求，但从 PR/Issue 可推断下一版本（0.3.2 或 0.4）可能包含：

- **Web UI 性能优化**（#3281 + PR #3347）：用户侧呼声最高，大概率纳入。
- **Slack 媒体上传修复**（PR #3340）：修复完整、根因清晰，合并门槛低。
- **LINE webhook 配置告警**（PR #3329 被关闭）：需维护者重新表态方向。
- **批量依赖升级**（5 个 Dependabot PR）：将随下个版本统一落地。

## 7. 用户反馈摘要

- **痛点集中**：用户反馈几乎全部围绕渠道生态可靠性——Slack 媒体功能形同虚设、QQ 频道鉴权失败、LINE 配置项无效但无提示，反映多渠道集成是 PicoClaw 的核心卖点同时也是质量短板。
- **Web UI 体验**：长会话卡顿影响日常使用，9 条评论说明受影响面广。
- **边缘部署场景**：有用户在 ARM 开发板上配合 RKLLM 运行本地模型（Qwen3.5-0.8B w4），显示“低成本硬件 + 本地 LLM”是真实使用场景，但稳定性支持不足。
- **积极信号**：社区贡献意愿强——非前端开发者 @iMilnb 借助 AI 分析并提交了 UI 性能修复且完成实测，体现社区与项目的良性互动。

## 8. 待处理积压

以下条目已被标记 **[stale]** 或长期未响应，建议维护者优先关注：

1. **PR #3347**（fix laggy interface）— 解决高热度 Issue #3281，作者已完成多端实测，合并收益高、风险低。
2. **PR #3340**（Slack FileSize 修复）— 与 Issue #3338 配对，修复方案明确。
3. **Issue #3349**（QQ 频道 401）— 无任何 fix PR，影响国内用户核心渠道，且非 stale 但缺维护者介入。
4. **Issue #3346**（RKLLM 异常回复）— 仅 1 条评论，边缘硬件场景用户支持缺位。
5. **5 个 Dependabot PR（#3360–#3364）**— 集中等待 CI 与合并，建议批量处理避免依赖债积累。

**健康度小结**：项目依赖维护正常、社区贡献活跃，但核心 Issue 响应速度偏慢、stale 积压增多，建议维护者优先合并两个已验证的社区修复 PR，并跟进 QQ 频道鉴权问题。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-09-04

## 1. 今日速览

NanoClaw 今日保持高活跃度：过去 24 小时内 Issues 更新 5 条（新开 4、关闭 1），PR 更新 23 条（待合并 20、合并/关闭 3），无新版本发布。社区贡献质量较高，多位核心贡献者（@zvi-fried、@davekim917、@mmv、@DawoudIO）持续提交架构级重构与新功能。今日主线清晰：**provider 契约化重构系列持续推进、agent-runner 可靠性修复密集落地、渠道层（WhatsApp）与 CLI 配置问题得到关注**。项目整体处于“重构收敛 + 生态扩展”阶段，健康度良好。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 共 3 条：

- **PR #3126**（已关闭）`fix(agent-runner): never deliver silence, never deliver <internal> thinking` — 由 core-team 成员 @glifocat 提交的 agent 输出质量修复，防止 agent 将沉默或内部思考内容当作消息投递给用户。关闭（而非合并）可能意味着被后续方案取代或需重做。
- **PR #3461**（已关闭）`chore(deps): bump all @chat-adapter/* + chat 4.29.0 -> 4.38.1` — 依赖批量升级，作为 #3460 的配套分支关闭，推测已并入主线或被替代。
- [PR #3440](https://github.com/nanocoai/nanoclaw/pull/3440) 保持 OPEN，docker-driver 的 SELinux 挂载修复仍在推进。

整体进展：provider 契约化重构系列（#3581/#3584/#3585/#3586/#3588/#3591）仍在待合并状态，这套将 provider 行为从硬编码迁移到“声明式可验证契约”的重构是当前项目最大的架构演进方向，一旦合并将显著提升多 provider（Cursor、Codex、OpenCode、Claude）的可插拔性。

## 4. 社区热点

- [Issue #3706](https://github.com/nanocoai/nanoclaw/issues/3706)（1 条评论，今日新开）— `ncl groups config add-mount --container` 传入绝对路径时静默生成错误的双层嵌套路径。`--help` 未约束必须相对路径，属于典型的“文档与行为不一致 + 静默失败”痛点，用户 @DawoudIO 反馈详细，是今日最可能引发讨论的 issue。
- [Issue #3704](https://github.com/nanocoai/nanoclaw/issues/3704) — fork 维护者 @davekim917 请求在 `SqliteAgentMailbox` 上开放受保护的 session-assembly 钩子，显示社区存在活跃的下游 fork 生态，诉求是减少 fork 与上游合并的摩擦。配套的 #3707（admission gate seam）、#3708（PRAGMA 顺序修复）也在今日提交，形成一套完整的“可扩展性提案包”。
- [PR #3711](https://github.com/nanocoai/nanoclaw/pull/3711) + [PR #3712](https://github.com/nanocoai/nanoclaw/pull/3712) — @mmv 的渠道性能系列：延迟解析入站消息内容，避免为永远不会到达 agent 的消息执行昂贵的下载/网络请求；#3712 修复 WhatsApp 文档 caption 丢失与无谓媒体下载。有明确的依赖关系设计，工程质量高。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 中 | [Issue #3706](https://github.com/nanocoai/nanoclaw/issues/3706) `add-mount --container` 绝对路径静默生成损坏的双层嵌套挂载路径 | 无 fix PR，需优先处理（影响容器数据可见性） |
| 中 | [Issue #3705](https://github.com/nanocoai/nanoclaw/issues/3705) `ncl tasks update --recurrence` 不重算 `process_after`，改周期后任务仍按旧调度触发 | 无 fix PR |
| 低 | [Issue #3709](https://github.com/nanocoai/nanoclaw/issues/3709) SQLite 测试 fixture 固定在 /tmp，并发 vitest 互相删除数据库 | 相关 hygiene 方向已有 [PR #3710](https://github.com/nanocoai/nanoclaw/pull/3710)（清理测试遗留临时目录），可顺带解决 |
| 低 | [PR #3708](https://github.com/nanocoai/nanoclaw/pull/3708) `busy_timeout` 应在 `journal_mode` 之前设置，否则并发打开 outbound DB 可能立即报 SQLITE_BUSY | fix PR 已提交 |
| 低（已关闭） | [Issue #3426](https://github.com/nanocoai/nanoclaw/issues/3426) `send_card` 文档承诺回调按钮但 bridge 丢弃无 url 的 action，导致 agent 误怪平台 | 已关闭，但未见链接的 fix PR，建议确认是否真正修复 |

## 6. 功能请求与路线图信号

- **SqliteAgentMailbox 子类化钩子**（[#3704](https://github.com/nanocoai/nanoclaw/issues/3704)）— 与 #3707/#3708 同日配套提交，作者已做好实现准备，采纳概率高。
- **每 agent-group 投递模式属性**（[PR #3713](https://github.com/nanocoai/nanoclaw/pull/3713)）— 为无法维持 `<message to>` envelope 契约的模型提供 outbound tool 投递替代路径。目前只加列与管线，说明这是多阶段计划的第一步，是明确的路线图信号。
- **入站内容惰性解析**（[PR #3711](https://github.com/nanocoai/nanoclaw/pull/3711)）— router 层架构增强，#3712 已依赖它，链路清晰，大概率进入下个版本。
- **Provider 契约系列**（#3581–#3592，含 Cursor provider #3356/#3355、`speed` 属性 #3592）— 全部待合并但持续活跃，是下一版本的核心内容。
- **语音转写 V2**（[PR #2003](https://github.com/nanocoai/nanoclaw/pull/2003)）— 容器侧、主权优先的实现，自 4 月开放至今仍在更新，长期在途。

## 7. 用户反馈摘要

- **CLI 易用性痛点**：#3706 的“静默失败”模式反复出现——命令接受了输入但产出了错误结果且无告警。用户期望要么校验拒绝，要么正确处理绝对路径。
- **调度语义直觉性**：#3705 显示用户预期“修改 recurrence = 重算下次执行”，当前需手动干预，违背最小惊讶原则。
- **下游 fork 生态活跃且有深度**：#3704 的 fork 在 stock SQLite 布局上叠加自有表、列与触发器，说明 mailbox 层已成为社区二次开发的核心接缝，上游开放扩展点可显著降低 fork 维护成本。
- **开发者体验卫生**：#3709/#3710 指出测试并发冲突与每次全量测试遗留 ~355 个临时目录，反映长期贡献者开始关注工程卫生细节，是社区成熟度提升的积极信号。

## 8. 待处理积压

- [PR #2003](https://github.com/nanocoai/nanoclaw/pull/2003) 语音转写 V2 — 开放逾 4 个月（2026-04-25 至今），虽有持续更新但长期未合并，建议维护者给出明确的合并时间表或拆分方案。
- [Issue #3426](https://github.com/nanocoai/nanoclaw/issues/3426) `send_card` 按钮丢失 — 已关闭但未链接修复 PR，且该问题直接影响 agent 对平台的信任判断（agent 会把 bug 归咎于平台），建议公开关闭原因。
- [PR #3440](https://github.com/nanocoai/nanoclaw/pull/3440) docker-driver SELinux 挂载修复 — 开放近两周，涉及 area/security，建议优先评审。
- Provider 契约系列（#3581/#3584/#3585/#3586/#3588/#3591，开放约 1 周）数量多、相互关联，建议维护者明确合并顺序（#3581 似为地基），避免长期悬置导致 rebase 成本累积。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-09-04

## 1. 今日速览

IronClaw 今日保持高活跃度：过去 24 小时共 25 条更新（7 条 Issues、18 条 PRs），其中 10 条 PR 已合并/关闭，8 条待合并，无新版本发布。项目当前处于 **WebUI TypeScript 类型治理批量收官** 与 **Agent Loop 上下文预算/缓存机制增强** 两条主线的并行推进期。核心贡献者 @henrypark133 今日提交多个 XL 级 PR（上下文预算推导、对话缓存键），显示架构级改进正在密集落地。值得注意的是 `main` 分支近期曾两度变红（#8055、#8058），但均当日修复，CI 韧性较好。整体健康度：**活跃、收敛中、工程质量导向明显**。

## 2. 版本发布

今日无新版本发布，省略。

## 3. 项目进展

今日合并/关闭的 10 条 PR 主要推进了三大方向：

**WebUI TypeScript 类型治理（本周期最大批量成果）**
- [#8039](https://github.com/nearai/ironclaw/pull/8039)（XL，已关闭）：移除 64 个生产组件/hooks 的 `@ts-nocheck`，补齐 React Query、DOM、认证 payload 等类型
- [#8038](https://github.com/nearai/ironclaw/pull/8038)（XL，已关闭）：前端 API 边界类型化 + 运行时解码器，拒绝缺失的 thread/run/gate 标识符
- [#8040](https://github.com/nearai/ironclaw/pull/8040)（M，已关闭）：移除全部 94 个测试侧 `@ts-nocheck`，VM 边界集中化
- [#8037](https://github.com/nearai/ironclaw/pull/8037)（M，已关闭）：建立 suppression 基线 + 棘轮机制，防止新增 `@ts-nocheck`/`@ts-ignore`
- 对应的三个 Issue #8033/#8035/#8036 同步关闭，**WebUI 类型债务清理基本完成**，配套闭环（Issue → PR → CI 棘轮）体现了成熟的工程流程

**Agent Loop 性能与正确性**
- [#8043](https://github.com/nearai/ironclaw/pull/8043)（L，已关闭）：流式文本更新合并（coalesce），消除每个 delta 全量重清洗的 O(N·k) 开销——显著流式性能优化
- [#7984](https://github.com/nearai/ironclaw/pull/7984)（XL，已关闭）：`tool_search` 回复尺寸对齐模型 first-look envelope，实测 16 KiB 回复被压缩到 857 B 的问题得到修复
- [#8046](https://github.com/nearai/ironclaw/pull/8046)（XL，已关闭）：子代理审批/凭证门阻塞状态可触达所有者收件箱（R3 slice 3a），多代理可观测性重要补齐

**CI 修复**
- [#8055](https://github.com/nearai/ironclaw/pull/8055)、[#8058](https://github.com/nearai/ironclaw/pull/8058)（XS，已关闭）：连续两次 `main` 变红的当日热修

## 4. 社区热点

- **[#7903](https://github.com/nearai/ironclaw/issues/7903)**（2 评论，今日更新）：关于在可信宿主内核背后引入**持久化每用户沙箱执行器**的决策 spike，标记 `risk: high` + `reborn`。这是当前讨论最热的架构议题——现有设计每个新 CLI 都需要 host-to-sandbox 命令管道，扩展成本高。社区诉求是在不破坏权威边界（authority boundary）的前提下降低沙箱集成的摩擦。
- **[#8009](https://github.com/nearai/ironclaw/issues/8009)**（1 评论）：MCP 出口错误被压平为单一 `"response_error"` 令牌，hosted-MCP 发现失败完全不可诊断。诉求是错误传播链路保留底层原因和字节数——属于开发者体验/可观测性的持续痛点。
- **[#8062](https://github.com/nearai/ironclaw/pull/8062)**（今日新开，XL）：对话级稳定 prompt-cache key，跨轮次和工具循环迭代保持，覆盖 OpenAI 及兼容路径。与昨日 #8044 的 Claude 家族 denylist 改造形成连贯的**提示缓存策略体系**，是本周最值得关注的架构演进。

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#8059](https://github.com/nearai/ironclaw/pull/8059)：`POST /api/v1/responses/{id}/cancel` **在任何状态下都无法成功**，返回 400 且运行继续——取消语义完全失效 | Fix PR 已开（新贡献者 @jlwaugh） |
| 🔴 高 | [#8056](https://github.com/nearai/ironclaw/pull/8056)：畸形嵌入工具结果文本（闭合 JSON 分隔符先于开启分隔符）导致 **host-api panic**，含未检查字节切片 | Fix PR 已开（@BenKurrek），改为受检查找 + fail-closed 兜底 |
| 🟡 中 | [#8057](https://github.com/nearai/ironclaw/issues/8057)：Prompt 预算只计算 transcript，identity/skills/tool schemas 叠加在上，**实际请求可超出预算**——潜在成本与截断风险 | 相关 PR [#8053](https://github.com/nearai/ironclaw/pull/8053)（预算从模型广告窗口推导）待合并，但未直接解决此问题 |
| 🟢 低 | [#8054](https://github.com/nearai/ironclaw/pull/8054)：未配对 Telegram 用户首次 `/start` 收到命令清单而非连接通知 | Fix PR 已开 |
| 🟢 低 | CI：`main` 两次变红（#8055、#8058） | 均已当日修复关闭 |

崩溃/panic 类问题 (#8056) 与 API 语义失效 (#8059) 均已有对应 fix PR，响应速度良好。

## 6. 功能请求与路线图信号

- **沙箱架构演进**：[#7903](https://github.com/nearai/ironclaw/issues/7903) 的持久化沙箱执行器 spike 处于决策阶段（high risk），短期内可能以 spike 报告而非代码形式落地，但方向明确指向降低 Reborn 沙箱扩展成本。
- **提示缓存体系**：#8044（已关闭）+ #8062（待合并）显示团队正在系统性建设跨厂商（Anthropic/OpenAI）的 prompt cache 支持——**很可能进入下一版本**。
- **上下文预算动态化**：[#8053](https://github.com/nearai/ironclaw/pull/8053) 将硬编码 128k/20k 预算改为按模型广告窗口 90% 推导，配合 Issue #8057 的反馈，预算精细化是明确的路线图方向。
- **子代理治理（R2/R3）**：#8046（已合并）+ #8061（待合并，并发子代理上限 + 门控卡片回放验证）显示 R3 计划正在按切片稳步推进。
- **错误可观测性**：#8009 可能催生 MCP 错误传播保留原始 reason code 的改进。

## 7. 用户反馈摘要

从 Issue/PR 内容可提炼的真实痛点：

- **可诊断性不足**：MCP 失败只返回 `"response_error"` 单一令牌（#8009），用户在排查 hosted-MCP 集成时几乎无信息可用。
- **成本/预算不透明**：实际发给 provider 的 token 数超出循环自认为的预算（#8057），对成本敏感的部署方是隐性风险。
- **模型质量依赖**：每日失败分类（[#8052](https://github.com/nearai/ironclaw/issues/8052)）显示 officeqa 的 63 个非通过全部为 deepseek-v4-flash 对 OCR 材料的模型质量问题而非基础设施 bug——项目方通过每日 taxonomy 保持对“哪些失败是我们的、哪些是模型的”的清晰区分，这是良好的健康信号。
- **首次使用体验**：Telegram 新用户首条消息未收到配对引导（#8054），反映 onboarding 细节仍需打磨。

## 8. 待处理积压

- **[#7903](https://github.com/nearai/ironclaw/issues/7903)**：8 月 26 日创建的沙箱执行器决策 spike，仅 2 条评论，high risk 架构决策悬置 9 天——建议维护者（如 @serrrfirat 跟进）尽快收敛决策结论。
- **[#8009](https://github.com/nearai/ironclaw/issues/8009)**：MCP 错误压平问题 8 月 31 日提出，1 条评论，尚无关联 fix PR。
- **待合并 PR 队列（8 条）**：其中 3 条 XL（#8062、#8053、#8044）集中在 LLM 缓存/预算路径，相互有语义关联，建议注意合并顺序与相互 rebase 成本；#8059、#8056 两个 Bug fix 虽小但影响线上正确性，建议优先 review。

---
*数据来源：IronClaw GitHub Issues/PRs（过去 24 小时窗口）。总体判断：项目处于工程债务集中清偿后的加速期，CI 棘轮机制和每日失败分类体现了高成熟度的维护实践。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-09-04）

## 1. 今日速览

今日项目保持较高活跃度，过去 24 小时共有 **6 条 Issue 更新**（4 开/活跃，2 关闭）和 **15 条 PR 更新**（5 待合并，10 合并/关闭），无新版本发布。核心开发者 @fisherdaddy 与 @liuzhq1986 集中推进 **2026.9.4 版本线**的准备工作，恢复了应用内交互式 Agent 浏览器、优化更新安装确认流程，并修复多个 Windows 安装器问题。社区侧新增一个高质量功能请求（MCP Apps / Prefab UI 渲染支持），同时多个早期技术债 Issue（并发安全、turnToken 校验）仍处于 stale 状态待处理。

## 2. 版本发布

今日无新 Release。但 PR [#2602](https://github.com/netease-youdao/LobsterAI/pull/2602) 明确提及 "2026.9.4 release line"、[#2609](https://github.com/netease-youdao/LobsterAI/pull/2609) 涉及更新安装体验，**2026.9.4 版本正在积极筹备中，预计近期发布**。

## 3. 项目进展

今日合并/关闭 10 个 PR，主要进展：

**功能推进**
- **[#2602](https://github.com/netease-youdao/LobsterAI/pull/2602)** 恢复应用内交互式 Agent 浏览器（含浏览器 MCP 桥接、持久化 profile、加密凭据存储、审批式自动填充），是 2026.9.4 版本的最大功能项。
- **[#2600](https://github.com/netease-youdao/LobsterAI/pull/2600)** 完成 2026.8.31 Release PR（引导式首启体验、Library 浏览提速、视频分享支持、Windows 安装器恢复增强）。

**体验与修复**
- **[#2609](https://github.com/netease-youdao/LobsterAI/pull/2609)** 更新安装前增加确认对话框，避免静默打断运行中的 agent turn 或定时任务；退出应用同样增加确认。
- **[#2605](https://github.com/netease-youdao/LobsterAI/pull/2605)** / **[#2606](https://github.com/netease-youdao/LobsterAI/pull/2606)** Windows 安装器修复：声明 DPI-aware 修复图标模糊；辅助进程启动不再弹出控制台窗口。
- **[#2604](https://github.com/netease-youdao/LobsterAI/pull/2604)** / **[#2603](https://github.com/netease-youdao/LobsterAI/pull/2603)** 语音输入配额耗尽时按钮置灰但可点击、文案更新为免费试用订阅措辞。
- **[#2599](https://github.com/netease-youdao/LobsterAI/pull/2599)** IM 多实例 bot 卡片布局限制为两列响应式。
- **[#2608](https://github.com/netease-youdao/LobsterAI/pull/2608)** / **[#2607](https://github.com/netease-youdao/LobsterAI/pull/2607)** 移除 dsh MCP 委托机制，解决 peer install 导致插件包体积膨胀问题（有架构简化性质，关注后续是否有兼容影响）。

整体评估：单日 10 个 PR 合入，围绕版本发布与 Windows 端打磨，节奏健康，项目稳步向前。

## 4. 社区热点

- **[#2601](https://github.com/netease-youdao/LobsterAI/issues/2601)**（今日新开，1 评论）：请求桌面端支持渲染 **MCP Apps / Prefab UI**（`io.modelcontextprotocol/ui` 扩展，如 PrefectHQ Prefab / FastMCP 通过 `ui://` 资源返回交互式 HTML）。这是 MCP 生态的前沿方向，诉求是让 LobsterAI 桌面端成为 MCP 交互式 UI 的一等公民。
- **[#1556](https://github.com/netease-youdao/LobsterAI/issues/1556)**（3 评论，已关闭）：IM 机器人配置指南文档 404。反映文档站链接维护问题，今日被关闭（可能已修复或标记 stale）。
- **[#1552](https://github.com/netease-youdao/LobsterAI/issues/1552)**（已关闭）：AI 产物 Markdown 预览及 FileCard 支持——写作/文档生成场景的核心体验诉求。

## 5. Bug 与稳定性

今日无新报告的崩溃级 Bug，但存量严重问题值得警惕（均 stale，**尚无对应 fix PR**）：

| 严重度 | Issue | 问题 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#1088](https://github.com/netease-youdao/LobsterAI/issues/1088) | Prefetch 异步回调不校验 turnToken，跨轮次污染 pendingUserSync | 无 |
| 🔴 高 | [#1089](https://github.com/netease-youdao/LobsterAI/issues/1089) | CoworkRunner startSession/continueSession 无重入保护，并发调用导致流式消息损坏与重复 | 相关 PR [#1087](https://github.com/netease-youdao/LobsterAI/pull/1087)（仅修错误消息重复，未修并发根因） |
| 🟡 中 | [#1082](https://github.com/netease-youdao/LobsterAI/issues/1082) | openclaw 依赖锁定 v2026.3.2，不跟随最新版本，存在合规/安全风险 | 无 |
| 🟢 低 | [#1556](https://github.com/netease-youdao/LobsterAI/issues/1556) | 文档链接 404 | 已关闭 |

## 6. 功能请求与路线图信号

- **MCP Apps / Prefab UI 渲染**（[#2601](https://github.com/netease-youdao/LobsterAI/issues/2601)）：与刚合并的浏览器恢复 PR [#2602](https://github.com/netease-youdao/LobsterAI/pull/2602) 技术栈高度相关（HTML 渲染、审批式交互），**很可能进入后续版本规划**。
- **AI 产物 FileCard 预览**（[#1552](https://github.com/netease-youdao/LobsterAI/issues/1552)，已关闭）：可能已随 artifacts 区域近期改动落地，建议确认。
- **定时任务失败 IM 告警**（PR [#1078](https://github.com/netease-youdao/LobsterAI/pull/1078)）与**「当前进程」diff 面板**（PR [#1079](https://github.com/netease-youdao/LobsterAI/pull/1079)）：社区提交的优质 PR，长期 open，建议维护者评审后决定是否纳入路线图。

## 7. 用户反馈摘要

- **IM 集成用户**受文档 404 困扰（#1556），说明 IM 机器人是重要使用入口，文档可靠性影响上手。
- **写作/文档生成用户**（#1552）痛点明确：Agent 生成文件后无法应用内预览，只能贴全文或切文件管理器。
- **重度自动化用户**（#1088、#1089、#1078）反映并发场景下的消息污染、重复错误提示、失败无通知——这类用户将 LobsterAI 用于生产级定时任务与 IM 网关场景，对稳定性要求高。
- **合规敏感用户**（#1082）关注依赖版本合规（CNC 要求），提示企业用户存在。

## 8. 待处理积压

以下项长期无官方响应，建议维护者优先处理：

1. **[#1088](https://github.com/netease-youdao/LobsterAI/issues/1088)** / **[#1089](https://github.com/netease-youdao/LobsterAI/issues/1089)** 并发安全类问题，报告详尽、定位到具体代码行，是数据正确性风险。
2. **[#1082](https://github.com/netease-youdao/LobsterAI/issues/1082)** openclaw 版本锁定问题，涉及安全合规。
3. **PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)** dependabot 提议 electron 40→44 大版本升级，stale 状态，建议评估兼容性。
4. **PR [#1078](https://github.com/netease-youdao/LobsterAI/pull/1078)** / **[#1079](https://github.com/netease-youdao/LobsterAI/pull/1079)** / **[#1081](https://github.com/netease-youdao/LobsterAI/pull/1081)** / **[#1087](https://github.com/netease-youdao/LobsterAI/pull/1087)** 社区贡献 PR 积压近 5 个月，缺乏评审反馈，可能影响社区贡献者留存。

---
*数据来源：GitHub netease-youdao/LobsterAI，统计窗口 2026-09-03 至 2026-09-04。*

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

# CoPaw (QwenPaw) 项目动态日报 · 2026-09-04

## 1. 今日速览

今日 CoPaw 仓库保持高活跃度：过去 24 小时 Issues 更新 29 条（新开/活跃 19，关闭 10），PR 更新 36 条（待合并 21，已合并/关闭 15），无新版本发布。社区焦点集中在 **QwenPaw Hub 多租户版（2.2.0）功能征集讨论**（#7318，17 条评论），以及 v2.2.0-beta 系列暴露的稳定性问题（安全沙箱、ReMe 记忆索引、飞书会话卡死等）。整体呈现“v2.2.0 稳定版冲刺 + 社区功能规划”的双线节奏，维护者响应速度较快（多数新 Issue 当天有回复）。

## 2. 版本发布

过去 24 小时无新 Release。值得注意的是 [Issue #7515](https://github.com/agentscope-ai/QwenPaw/issues/7515)（已关闭）显示 v2.2.0 稳定版的安装验证 Release Duty 已于 09-03 完成，**v2.2.0 正式版即将/刚刚落地**，当前 GitHub Releases 页面尚未展示新条目，可关注后续发布。

## 3. 项目进展

今日关闭/合并的 15 个 PR 中，较重要的包括：

- **[#7525](https://github.com/agentscope-ai/QwenPaw/pull/7525) fix(governance): CRITICAL 安全发现改为需审批而非直接拒绝** —— 修复 #7496，使治理策略行为与安全 UI 描述一致，属于安全语义修正。
- **[#7498](https://github.com/agentscope-ai/QwenPaw/pull/7498) fix(tools): 未知工具配置更新返回 404** —— HTTP 语义规范化系列修复之一。
- **[#7267](https://github.com/agentscope-ai/QwenPaw/pull/7267) fix(channels): 渠道契约检查可移植性修复**（首次贡献者），关闭 #7264。
- **[#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) PowerContext 可插拔长期记忆后端**（首次贡献者）—— 记忆系统生态扩展。
- **多个 UI/移动端响应式 PR 关闭**（#5399、#5394、#5363、#5334，均为 @lecheng2018 的系列工作）—— 设置页、插件管理、侧栏折叠切换 Agent 的移动端体验明显改善。
- **[#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) ReMe 记忆卡片的 Reranker 配置面板** 进入 Under Review 尾声。

待合并侧的活跃 PR：[#7538](https://github.com/agentscope-ai/QwenPaw/pull/7538)（统一运行时环境变量管理，核心维护者提交）、[#7539](https://github.com/agentscope-ai/QwenPaw/pull/7539)（Chromium 安装移出启动关键路径，缩短桌面端启动约 60s）、[#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542)（压缩后消息回滚分页，首次贡献者）、[#7502](https://github.com/agentscope-ai/QwenPaw/pull/7502)（Console 侧栏/设置重设计）。整体看，v2.2.0 周期在安全性、记忆系统、桌面端启动性能三线均有实质推进。

## 4. 社区热点

- **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) QwenPaw Hub（多租户版）2.2.0 路线征集**（17 评论，👍3，今日更新）—— 官方发起，社区从个人助手向团队/多用户场景演进的核心规划讨论，诉求集中在多用户访问与管理员托管 Skills（关联 #2324）。这是当前最重要的路线图信号。
- **[#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511)（已关闭）安全沙箱被突破**（9 评论）+ **[#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) 危险指令易于绕过**（6 评论）—— 同一安全研究者 @Jiongcheng-Li 持续提交的沙箱逃逸/指令绕过问题，引发较高关注。
- **[#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) 添加模型步骤过多**（good first issue，6 评论，今日复活）—— 长期 UX 痛点，与 #7540（身份行配置开关）、#7543（后台更新）共同反映用户对“可定制性/少干扰”的诉求。
- **[#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) ReMe 后台嵌入任务静默失败**（5 评论）—— beta 用户集中反馈记忆系统可靠性。

## 5. Bug 与稳定性（按严重程度）

**严重（安全）：**
1. [#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511)（已关闭）安全沙箱被突破 —— 2.1.0 沙箱逃逸，官方已处置关闭，建议关注后续修复说明。
2. [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443)（OPEN）危险指令可绕过治理 —— 尚无明确 fix PR 关联；#7525 的合并部分改善了 CRITICAL 规则行为，但不一定覆盖此绕过路径。

**高（功能失效/静默失败）：**
3. [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) ReMe 嵌入/索引后台任务静默失败（2.2.0b5）—— 新记忆不被写入，无 fix PR。
4. [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) 飞书会话 queue consumer 卡死且无法重建，会话静默无响应 —— 无 fix PR。
5. [#7510](https://github.com/agentscope-ai/QwenPaw/issues/7510) `/memory/status` 在 2.2.0-beta.7 桌面端返回 500 —— 无 fix PR。

**中（兼容性/体验）：**
6. [#7531](https://github.com/agentscope-ai/QwenPaw/issues/7531) OpenCode API 将于 09/06 强制要求 `x-opencode-session` 头 —— **已有 fix PR [#7536](https://github.com/agentscope-ai/QwenPaw/pull/7536)**，时间紧迫，建议尽快合并。
7. [#7476](https://github.com/agentscope-ai/QwenPaw/issues/7476) cron 任务在 misfire_grace 窗口内重复调度，备份脚本执行两次。
8. [#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) 局域网 LLM Server 频繁 client disconnect 导致重试超时（LM Studio 场景）。
9. [#7529](https://github.com/agentscope-ai/QwenPaw/issues/7529) 启用 Langfuse 后工具 output 为空。
10. [#7516](https://github.com/agentscope-ai/QwenPaw/issues/7516) WeCom 无法发送 base64 data URL 图片。

## 6. 功能请求与路线图信号

- **多租户/团队化（#7318）**：官方主导，确定进入 2.2.0 Hub，是最明确的路线图方向。
- **移动端远程连接桌面端（[#7519](https://github.com/agentscope-ai/QwenPaw/issues/7519)）**：与已关闭的远程 WebUI 加速 Issue（#7518）同属移动/远程场景，配套 PR #7542（消息分页）已在推进，纳入概率高。
- **后台更新（[#7543](https://github.com/agentscope-ai/QwenPaw/issues/7543)）**：配合 #7539 启动优化，桌面端体验优化是明显趋势。
- **消息按钮/交互式对话（[#7533](https://github.com/agentscope-ai/QwenPaw/issues/7533)）**、**steer mode 中途补充指令（[#1775](https://github.com/agentscope-ai/QwenPaw/issues/1775)，3 评论今日活跃）**：Agent 交互增强方向。
- **Matrix/Element 兼容（[#7535](https://github.com/agentscope-ai/QwenPaw/issues/7535)）**：渠道生态扩展。
- **pawport 导入流（PR [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960)，支持从 Codex/Qoder 迁移）**：用户迁移友好性，已在审。

## 7. 用户反馈摘要

- **痛点集中在 2.2.0-beta**：beta 用户（#7469、#7510、#7467）反馈记忆路由 500、静默失败、强制确认轮次干扰对话，说明 beta 质量门槛需加强。
- **本地/私有化部署用户活跃**：LM Studio 局域网访问（#7505）、自定义 provider（#7474，已关闭修复）、Langfuse 可观测性（#7529）—— 中文社区私有化场景占比高。
- **IM 渠道（飞书/企微）是生产使用主力**：#7534、#7516 反映渠道消费者生命周期和媒体格式处理仍需打磨。
- **会话架构受质疑**：#7541（俄语用户）指出按渠道切分会话违背“单一用户统一会话”直觉，属架构层面反馈。
- **正面信号**：首次贡献者 PR 密集（#7542、#7080、#7267、#6960），社区贡献 funnel 健康。

## 8. 待处理积压

- [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036)（05-04 创建，good first issue）—— 添加模型流程繁琐，4 个月未落地，建议结合 Console 重设计 PR #7502 一并处理。
- [#1775](https://github.com/agentscope-ai/QwenPaw/issues/1775)（03-18 创建）steer mode —— 近半年无实质进展但持续有讨论。
- PR 积压：[#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960)（08-13，pawport 导入）、[#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399)（07-23，Reranker UI）、[#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401)（Windows ACP 卡死修复）审核周期偏长（3 周+），建议维护者优先排期。
- **时效提醒**：OpenCode header 强制生效日期为 09-06，fix PR [#7536](https://github.com/agentscope-ai/QwenPaw/pull/7536) 需在截止前合并发布。

---
*数据来源：GitHub Issues/PRs（过去 24 小时），由自动化日报系统生成。*

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