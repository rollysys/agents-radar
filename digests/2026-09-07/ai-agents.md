# OpenClaw 生态日报 2026-09-07

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-07 03:33 UTC

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

# OpenClaw 项目动态日报 — 2026-09-07

---

## 1. 今日速览

OpenClaw 今日保持高活跃度：过去 24 小时内 Issues 更新 500 条（新开/活跃 359，关闭 141），PR 更新 500 条（待合并 296，合并/关闭 204），无新版本发布。社区热点集中在 **Gateway 事件循环阻塞、Windows 平台回归、cron 调度可靠性** 三大主题。维护者 @steipete、@shakkernerd、@vincentkoc 今日提交了大量维护性 PR（重构去重、缓存修复、CI 稳定化），显示项目处于“修复+瘦身”阶段。总体健康度：⭐⭐⭐⭐（活跃度高，但 P0/P1 积压较多）。

---

## 2. 版本发布

今日无新版本发布。注：社区反馈中已多次提及 2026.9.1/2026.9.2（issue 正文提及），说明近期版本存在若干回归（见第 5 节），下一个补丁版本压力较大。

---

## 3. 项目进展

今日 PR 以维护者驱动的修复与重构为主，合并/关闭 204 个，重点方向：

- **更新流程可靠性**：[PR #140725](https://github.com/openclaw/openclaw/pull/140725) `refactor(update): verify updates without model inference` — 健康更新不再因模型推理不可用而失败/回滚（关联 #140274、#140419）。
- **Anthropic 缓存修复**：[PR #140621](https://github.com/openclaw/openclaw/pull/140621) `preserve cache reuse across transient runtime context` — 修复 transient runtime context 持有移动缓存断点导致每轮全量重写的问题（直接对应 Issue #140129/#140607）。
- **配置管理**：[PR #140719](https://github.com/openclaw/openclaw/pull/140719) 新增 `OPENCLAW_CONFIG_READONLY=1` 外部只读配置支持，运维友好。
- **CLI 启动优化**：[PR #140724](https://github.com/openclaw/openclaw/pull/140724) 路由命令一次性预构建，消除三重参数解析。
- **心跳风暴修复**：[PR #137936](https://github.com/openclaw/openclaw/pull/137936)（P1，needs proof）修复空心跳 600s 超时后进入重试风暴。
- **会话/子代理**：[PR #137381](https://github.com/openclaw/openclaw/pull/137381) `sessions_yield` 保持长 transcript 可用；[PR #136820](https://github.com/openclaw/openclaw/pull/136820) 保持 in-flight announce 交接可重试。
- **渠道改进**：[PR #135350](https://github.com/openclaw/openclaw/pull/135350) Mattermost 支持 ask_user 可点选项；[PR #117632](https://github.com/openclaw/openclaw/pull/117632) Tlon 原生消息 ID 保留。
- **大量去重重构**：#140727（fill-missing 迁移原语）、#140716（渠道回执共享）、#140701（文件描述符原语）、#140707（dreaming 包装清理）等，代码质量持续提升。

**小结**：项目在缓存、更新链路、子代理状态机三个高风险面上均有实质推进，约 6-8 个 P1 级修复在等待审阅。

---

## 4. 社区热点

| Issue | 评论 | 主题 |
|---|---|---|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 14 | Hook/工具子进程未 reap，僵尸进程累积导致运行时退化（P1） |
| [#135111](https://github.com/openclaw/openclaw/issues/135111) | 14 | v2026.8.1 claude-sonnet-5 间歇性 "malformed JSON arguments"，回归问题 |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 12 | 同步持久化/transcript 维护在规模化时阻塞 Gateway 事件循环（已部分修复：#133925、#134062） |
| [#96975](https://github.com/openclaw/openclaw/issues/96975) | 12 | 子代理完成后向父会话注入过多内容，呼吁默认只返回状态+链接 |
| [#41201](https://github.com/openclaw/openclaw/issues/41201) | 11 | Control UI 头像不显示（回归，3 月至今） |
| [#95610](https://github.com/openclaw/openclaw/issues/95610) | 11 | OpenAI 路径每轮动态注入破坏 prompt 前缀缓存，成本敏感用户高度关注 |
| [#137813](https://github.com/openclaw/openclaw/issues/137813) | 11 | **P0**：2026.9.1 Windows Gateway `--task-supervisor` 静默退出无法启动 |

**诉求分析**：高频讨论集中在**稳定性（进程泄漏、事件循环阻塞）** 与**成本（缓存失效率）**，重度自托管用户是发声主力。

---

## 5. Bug 与稳定性（按严重度）

### P0 / 发布阻塞
- **#137813**：Windows 2026.9.1 更新后 Gateway 完全无法启动（`--task-supervisor` 静默 exit 0）。无 fix PR。
- **#136203**：Windows de-DE 2026.8.2 升级遗留 Doctor 阻塞和 legacy 工作区状态。标记 fix-shape-clear 但无 PR。
- **#140497**：Discord 将 application ID 当 bot token 保存，渠道永不启动且无错误（2026.9.2）。无 fix PR。
- **#114967**：launchctl keepalive 验证器每 2 分钟强制重启 Gateway。长期未修。

### P1 高优
- **#139847**：2026.9.2 回归 — 回复运行期间到达的消息被丢弃（"no active tool authority snapshot"）。fix-shape-clear，无 PR。
- **#140010**：Windows 唤醒后 UI/WebSocket 重连失败 30-60s+。今日新报。
- **#139215**：2026.9.1 起 cron 调度静默吞掉部分触发。
- **#134579**：Active Memory 自动召回自 2026.8.1-beta.3 起失效（回归）。
- **#99910**：Memory dreaming 运行卡死主线程 ~10 分钟。
- **#54488**：followup drain 垄断 session lane，入站消息排队 20-30 分钟（3 月至今）。
- **#121232**：memory dreaming "Ranked N, Promoted 0" 死循环。
- **#137927**：内部上下文块泄露为 Telegram 可见文本（**安全相关**）。
- **#101929**：上下文预检估算偏大 2.3-2.6x，触发误截断。

### 已有对应 fix PR 的（积极信号）
- #140607/#140129（Anthropic 缓存）→ [PR #140621](https://github.com/openclaw/openclaw/pull/140621)
- #137492（心跳重试风暴）→ [PR #137936](https://github.com/openclaw/openclaw/pull/137936)
- #137056（memory-core 热路径维护，已关闭）✅
- #136200（飞书合并转发引用，已关闭）✅
- #124991（SQLite 会话 reseed 失效，已关闭）✅
- #140535（Discord /new 不重置会话，已关闭）✅

---

## 6. 功能请求与路线图信号

- **#99583**：智能会话自动命名（lazy 生成 + 便宜模型）— 代码库已有 slug generator，落地成本低，可能纳入。
- **#14376**：cron 感知原因的退避与熔断（quota/auth/限流区分）— 与 #139215、#102534 等 cron 可靠性 issue 形成合力，路线图信号强。
- **#71058**：单 Gateway 多 Azure/Teams bot — 企业用户诉求，标记 needs-product-decision。
- **#51572**：session-memory hook 扩展到 reset/prune 场景。
- **#96975**：子代理完成注入最小化 — 与 PR #137381（sessions_yield）同属子代理/会话状态方向，可能被采纳。
- **#120244**：cron 维护窗口 RFC。
- **#132601**：Plugin SDK 生成视频 URL 物化文档澄清 — 契约类，易纳入。
- **PR #140719**（外部只读配置）表明运维/企业部署场景正在获得投资。

---

## 7. 用户反馈摘要

**痛点（按提及频率）**：
1. **升级即翻车**：多个版本（2026.8.1→2026.9.2）升级引发级联故障，用户需手动查 dist 源码自救（#134896、#136203、#92241）。
2. **静默失败**：消息丢失、cron 不触发、渠道不启动均无错误日志（#139847、#139215、#140497），排障成本高。
3. **Token 成本**：OpenAI/Anthropic 缓存失效导致每轮全量重写（#95610、#140129），重度用户账单显著上升。
4. **长会话/规模化退化**：事件循环阻塞、session lane 饥饿、memory dreaming 卡死，多智能体重度部署受影响。
5. **Windows 二等公民感**：P0 多集中在 Windows（#137813、#140010、#136203）。

**满意点**：修复响应速度快（当日新报 issue 当日关闭的案例存在，如 #140535）；clawsweeper 自动分诊标签体系被认可；频道生态（飞书/Mattermost/Tlon）覆盖广且社区持续贡献渠道增强。

---

## 8. 待处理积压（提醒维护者）

| 项 | 状态 | 说明 |
|---|---|---|
| [#114967](https://github.com/openclaw/openclaw/issues/114967) | P0，7 月至今 | Gateway 2 分钟重启循环，无修复 PR |
| [#41201](https://github.com/openclaw/openclaw/issues/41201) | P2，3 月至今 | UI 头像回归，6 个月未修 |
| [#54488](https://github.com/openclaw/openclaw/issues/54488) | P1，3 月至今 | Session lane 饥饿导致消息延迟 20-30 分钟 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | P1，6 月至今 | 僵尸进程泄漏，评论最多（14） |
| [#102534](https://github.com/openclaw/openclaw/issues/102534) | P1 | cron 定时器永久停摆，重启也不恢复 |
| [#113701](https://github.com/openclaw/openclaw/issues/113701) | P1 | 大工具输出超出上下文进入失败循环 |
| [PR #117040](https://github.com/openclaw/openclaw/pull/117040) | XL，7 月底至今 | 大存储会话列表提速，标注兼容性风险，waiting on author |
| [PR #110917](https://github.com/openclaw/openclaw/pull/110917) | XL，7 月中至今 | LLMTR provider，含安全边界审查风险 |

**健康度提示**：约 300 个待合并 PR 中含多个 XL 级改动，P0 级 Windows 启动失败（#137813）与 2026.9.2 回归（#139847）建议优先排期补丁版本。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告
**数据日期：2026-09-07**

---

## 1. 生态全景

个人 AI 助手/智能体开源生态已进入“**功能骨架基本成型、可靠性与安全成为主战场**”的阶段。头部项目（OpenClaw、Hermes Agent、Zeroclaw、CoPaw）普遍呈现高 Issue/PR 流量，但活动重心从新功能转向事件循环阻塞、会话状态管理、静默失败可观测性等工程化问题。多渠道接入（Telegram/Slack/飞书/邮件）、多 Provider 抽象（Claude/Codex/Cursor/OpenCode）、MCP 集成构成三大基础设施竞争面。安全议题（权限继承、凭据冲突、信息泄露）从边缘走向核心议程。整体上，生态呈现“少数超级活跃项目 + 长尾低维护项目”的哑铃型分布。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新(开/关) | PR 更新(待/合) | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500 (359/141) | 500 (296/204) | 无 | ⭐⭐⭐⭐ 活跃度最高，但 P0/P1 积压多（Windows 启动失败、9.2 回归） |
| **Hermes Agent** | 50 (50/0) | 50 (47/3) | 无 (v0.21.0, 8/31) | ⭐⭐⭐⭐ 修复闭环快（<24h），但合并吞吐低、0 Issue 关闭 |
| **Zeroclaw** | 33 (30/3) | 50 (44/6) | 无 | ⭐⭐⭐⭐ RFC 治理活跃，44 条待合并 PR 积压、决策队列拥堵 |
| **CoPaw (QwenPaw)** | 27 (16/11) | 20 (16/4) | 无 (beta.7 收尾) | ⭐⭐⭐⭐ Issue 关闭率 41%，2.2.0 前冲刺，上下文 Bug 簇风险 |
| **NanoBot** | 0 | 16 (11/5) | 无 | ⭐⭐⭐ CI/测试工程化推进，heartbeat PR 挂 73 天 |
| **NanoClaw** | 2 (1/1) | 16 (8/8) | 无 (v2.3.0, 8/24) | ⭐⭐⭐ provider 契约化集中落地，Issue 响应慢（#3728 无人回应） |
| **PicoClaw** | 4 (3/1) | 2 (1/1) | 无 | ⭐⭐ 数据丢失级 Bug 标 stale，贡献者流失风险 |
| **IronClaw** | 0 | 9 (6/3) | 无 | ⭐⭐ 依赖维护为主，社区互动缺失 |
| **NullClaw** | 0 | 1 (1/0) | 无 | ⭐⭐ 低强度维护，单一高质量 fix PR 待审 |
| **Moltis** | 0 | 2 (2/0) | 无 | ⭐⭐ 贡献正常，评审响应短板 |
| **ZeptoClaw** | 1 | 0 | 无 | ⭐⭐ 维护者亲自推动安全设计，无积压 |
| **LobsterAI** | 1 | 0 | 无 | ⭐ 静默维护期，stale 清理 |
| **TinyClaw / EasyClaw** | 0 | 0 | 无 | — 无活动 |

---

## 3. OpenClaw 在生态中的定位

**社区规模**：断层领先。日 Issue/PR 更新量（各 500，或为抓取上限）约为第二名 Hermes/Zeroclaw 的 10 倍，渠道覆盖最广（飞书/Mattermost/Tlon/Discord/Telegram），自动分诊体系（clawsweeper）是唯一规模化运营社区基础设施的项目。

**优势**：
- 修复响应快且代码质量投入大（大量去重重构、缓存修复），处于“修复+瘦身”的工程成熟期；
- 企业/运维投资明显（`OPENCLAW_CONFIG_READONLY`、外部只读配置），是唯一出现企业部署信号的项目。

**劣势/风险**：
- **版本回归连锁**：2026.8.1→2026.9.2 每个版本都引入回归，P0 级 Windows Gateway 启动失败（#137813）无 fix PR，“升级即翻车”成为用户第一痛点；
- Windows 二等公民问题集中爆发；XL 级 PR（#117040、#110917）长期滞留在 ~300 条待合并队列中。

**技术路线差异**：OpenClaw 是“大而全的自托管个人助理”（多渠道+memory+cron+子代理全都要），对比 Zeroclaw 走“RFC 驱动的严谨架构演进”（会话事件溯源、WASM 插件沙箱），NanoClaw 走“provider 契约化架构统一”，Hermes 走“快速功能迭代+当日修复”。OpenClaw 以规模换深度，架构治理弱于 Zeroclaw，但生态广度无对手。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **Provider 缓存/Token 成本** | OpenClaw (#95610, #140129)、Zeroclaw (#10660/#10662)、NanoBot (#5388 MCP schema 预算)、CoPaw (#6541) | Anthropic/OpenAI prompt 前缀缓存失效、MCP schema 上下文膨胀是跨项目最高频成本痛点 |
| **会话状态可靠性** | OpenClaw (#119720 事件循环阻塞)、NanoBot (#5580 P1)、Hermes (#104596 state.db 损坏, #104691 lease 锁死)、Zeroclaw (#9487 会话/传输解耦) | lease/持久化/事件溯源是各家共同攻坚的架构层问题 |
| **Cron/Heartbeat 可靠性** | OpenClaw (#139215, #102534)、Hermes (#104453 cron 全挂, #92837)、Zeroclaw (#10670 同日修复)、CoPaw (#7589, #2134)、NanoBot (#4549/#4551) | 定时任务静默吞触发是全生态普遍缺陷 |
| **静默失败/可观测性** | OpenClaw (#139847, #140497)、NanoClaw (#3728 入站中断 4 天无感知)、Zeroclaw (#10659)、IronClaw (#8077) | “无错误日志的失败”是用户最大排障成本 |
| **子代理/委托治理** | OpenClaw (#96975)、Zeroclaw (#10644/#10645 成本绕过)、ZeptoClaw (#664 能力继承)、Hermes (#98630)、CoPaw (#7450) | 从“能委托”转向“委托的安全性、可见性、成本穿透” |
| **Windows 平台支持** | OpenClaw (3 个 P0)、Zeroclaw (#7462 74 项测试失败)、Hermes (#104535 数据丢失)、CoPaw (#7363) | CI 只跑 Linux 导致 Windows 回归不可见是共性问题 |

---

## 5. 差异化定位分析

| 维度 | 分层 |
|---|---|
| **功能侧重** | OpenClaw/Zeroclaw/Hermes = 全栈个人助理（渠道+memory+cron+子代理）；NanoClaw = 多 provider 编排容器（Claude/Codex/Cursor/OpenCode 后端统一）；NanoBot/CoPaw = 面板化助手（WebUI/TUI 打磨）；PicoClaw = 嵌入式边缘设备（RV1106/RISC-V）；NullClaw = 极简 Zig 实现；IronClaw = AI 安全集成（NEAR 生态） |
| **目标用户** | OpenClaw/Hermes = 重度自托管+多渠道用户；CoPaw = 国内本地模型（LM Studio/DeepSeek）用户；NanoClaw = 树莓派/ARM 自助部署与隐私敏感用户；Zeroclaw = 架构严谨派/贡献者社区；NanoBot = 企业场景（WeCom、Langfuse 可观测性） |
| **技术架构** | 脚本/TS 系（OpenClaw、NanoClaw）、Python 系（NanoBot、CoPaw）、Rust 系（Zeroclaw、IronClaw、Moltis）、Zig（NullClaw）、Go（PicoClaw）。Rust 系项目普遍更聚焦安全边界（沙箱策略、WASM 插件、进程组管理） |

---

## 6. 社区热度与成熟度分层

- **快速迭代/冲刺期**：CoPaw（2.2.0 正式版临近，首次贡献者一日闭环）、NanoClaw（v2.3.0 后架构大改，下版将引入 Cursor/OpenCode）、Hermes（v0.21.0 后密集反馈修复）
- **质量巩固期**：OpenClaw（修复+瘦身，但需尽快出补丁版止血）、NanoBot（CI 提速+flaky 清理，为功能 PR 铺路）
- **架构演进/治理期**：Zeroclaw（RFC 队列本身成痛点，需简化投票流程）
- **低维护/观察期**：PicoClaw、IronClaw、NullClaw、Moltis、LobsterAI、ZeptoClaw
- **休眠**：TinyClaw、EasyClaw

---

## 7. 值得关注的趋势信号

1. **“无人值守可靠性”成为下一竞争高地**：跨项目最高频抱怨均为静默失败（消息丢失、cron 不触发、渠道不启动且无日志）。对开发者的启示：可观测性与失败告警的投资回报将高于新功能。
2. **Token 成本工程化**：缓存断点管理、MCP schema 预算、廉价模型分工（CoPaw Advisor Mode、NanoBot modelOverride）——上下文成本控制正从优化项变为架构约束。
3. **会话持久化范式收敛于事件溯源**：Zeroclaw #10526、PicoClaw #3351（jsonl 被物理覆盖引发数据丢失）、Hermes state.db 损坏均指向 append-only + 确定性重放是行业共识方向。
4. **Provider 抽象层竞争白热化**：NanoClaw 的契约化系列落地意味着“agent 运行时与模型后端解耦”将成为标配，OpenClaw 若不跟进，多后端灵活性将落后。
5. **Agent 安全从理论走向落地**：委托能力继承（ZeptoClaw #664、Zeroclaw #10644）、凭据隔离（Hermes #104622 抢占 Claude Code 凭据）、审批精确绑定（Hermes #104690）——最小权限证明将成为委托机制的必备能力。
6. **贡献者留存是隐形健康指标**：CoPaw/NullClaw 展示了“issue→PR 一日闭环”的正循环，而 Zeroclaw 的 stale-candidate PR、PicoClaw 半年关闭的 PR、NanoBot 挂起 73 天的 PR 都是贡献生态的失血点。
7. **Windows/边缘平台是未被满足的市场**：Windows 回归集中在所有头部项目，PicoClaw 的嵌入式场景无直接竞争者——补齐平台 CI 是低差异化成本的获客路径。

---

*方法说明：本报告基于各项目 2026-09-07 单日快照，活跃度为 24 小时窗口数据，成熟度判断结合积压时长、Release 节奏与社区反馈综合评估。单日数据存在波动，建议结合多日趋势交叉验证。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-09-07

## 1. 今日速览

今日项目整体保持**中等偏高活跃度**：过去 24 小时无新开 Issue，但 PR 活动频繁（16 条更新，其中 11 条待合并、5 条已合并/关闭），无新版本发布。核心维护者 @chengyongru、@KDB-Wind、@dajiaohuang 持续推进 WebUI 文档刷新、测试稳定性、CI 并行化及企业微信渠道修复等工作。长期挂起的功能型 PR（如 MCP schema 预算、heartbeat 配置增强）今日均有更新迹象，显示积压工作正在被逐步消化。整体来看，项目处于**功能打磨与工程稳定性提升阶段**，健康度良好。

## 2. 版本发布

今日无新版本发布，可省略。值得关注的候选内容见第 6 节。

## 3. 项目进展

今日共 5 条 PR 合并/关闭，主要进展集中在**测试与 CI 工程化、渠道修复、TUI 体验**三个方面：

- **fix(wecom): 使用 SDK 媒体上传 API**（[#5683](https://github.com/HKUDS/nanobot/pull/5683)，已关闭）— 将企业微信渠道的私有 WebSocket 上传实现替换为官方 SDK 的 `WSClient.upload_media` 公共 API，锁定 `wecom-aibot-sdk-python>=0.1.7,<0.2.0`，156 个测试全部通过。降低了私有实现带来的维护与兼容风险。
- **ci: 并行化测试并过滤无关任务**（[#5680](https://github.com/HKUDS/nanobot/pull/5680)，已关闭）— 引入 pytest-xdist 并行执行 Linux/Windows 测试套件，启用 uv 依赖缓存，显著缩短 CI 反馈周期，将直接提升后续 PR 的吞吐速度。
- **test: 稳定化 flaky 测试**（[#5677](https://github.com/HKUDS/nanobot/pull/5677)，已关闭）— 修复 Windows 上 3/5 概率失败的 `test_catalog_bounds_failure_only_keys` 等非确定性测试，消除 CI 噪音。
- **fix(tui): 底栏显示上下文窗口占用率**（[#5679](https://github.com/HKUDS/nanobot/pull/5679)，已关闭）— 底栏由聚合 token 吞吐改为显示实测上下文占用（如 `11% context`），更准确反映当前请求状态。
- **fix(skills): 允许市场技能遮蔽内置技能**（[#5309](https://github.com/HKUDS/nanobot/pull/5309)，已关闭）— 修复 Marketplace 将工作区同名技能误判为已安装导致无法安装的 bug，关闭了 8 月初遗留的问题。

**小结**：今日合并内容以工程质量提升为主，虽然无重量级新功能落地，但 CI 提速 + flaky 测试清理为后续更大的功能 PR（如 #5580）铺平了道路。

## 4. 社区热点

今日无 Issue 活动，讨论热点集中在 PR 侧：

- **#5684 docs: 刷新 README WebUI 功能画廊**（[链接](https://github.com/HKUDS/nanobot/pull/5684)）— 今日新建，由 @chengyongru 提出。反映的诉求是：**README 文档滞后于实际功能**（还停留在 7 月的开发亮点），新用户难以发现对话面板、上下文用量显示、原生终端客户端等能力。文档可发现性是当前用户增长的关键瓶颈之一。
- **#5607 feat: 新增 AnySearch 搜索提供商**（[链接](https://github.com/HKUDS/nanobot/pull/5607)）— 第三方贡献者 @cleverLucky 提出，关联 Issue #5505，主打**免 Key、匿名配额**的搜索接入，降低了搜索能力的使用门槛。今日仍有更新，处于待审状态。
- **#5520 feat: Codex 的 Langfuse 追踪**（[链接](https://github.com/HKUDS/nanobot/pull/5520)）— 社区贡献者 @akinolur 为 Codex 提供商补齐可观测性能力，反映企业用户对 LLM 调用追踪的需求。

## 5. Bug 与稳定性

今日无新 Issue 报障，Bug 类活动均在 PR 修复侧，按严重程度排列：

| 严重度 | 问题 | 状态 | 链接 |
|---|---|---|---|
| **P1（高）** | 会话持久化阻塞事件循环，慢存储/文件锁竞争会拖垮无关对话 | fix PR 待合并（#5580，OPEN，8/28 提出） | [#5580](https://github.com/HKUDS/nanobot/pull/5580) |
| **P2（中）** | `ExecTool` 相对 `working_dir` 以进程 CWD 解析而非工作区路径，涉及安全语义 | fix PR 今日新开（#5682，OPEN，含 security 标签） | [#5682](https://github.com/HKUDS/nanobot/pull/5682) |
| P2（已修复） | 企业微信私有上传实现兼容性风险 | 已关闭（#5683） | [#5683](https://github.com/HKUDS/nanobot/pull/5683) |
| P2（已修复） | Marketplace 技能遮蔽内置技能导致无法安装 | 已关闭（#5309） | [#5309](https://github.com/HKUDS/nanobot/pull/5309) |
| 防御性 | SSRF 防护的重定向校验与 PinnedDNS TOCTOU 防御缺少直接测试 | 测试 PR 待合并（#5678） | [#5678](https://github.com/HKUDS/nanobot/pull/5678) |

**建议优先关注 #5580**：这是唯一 P1 级问题，影响多会话并发场景下的整体响应性，PR 已挂起 10 天，今日有更新但尚未合并。

## 6. 功能请求与路线图信号

从待合并 PR 可以看出下一阶段的路线图方向：

1. **MCP 上下文治理**（强信号）：
   - #5388 模型可见 MCP schema 字节预算（opt-in，确定性子集选择）
   - #5386 保留 MCP Apps 结果元数据而不膨胀模型上下文
   两个 PR 同为 @dajiaohuang 提出且均在 9/6 更新，指向“**大规模 MCP 工具接入下的上下文成本控制**”这一核心方向，很可能一并进入下个版本。
2. **Heartbeat 网关增强**：#4551（`isolatedSession` 共享会话）、#4549（`modelOverride` 降本模型）同日更新，面向定时任务成本与上下文延续场景，为长期挂起 PR，需维护者推动收敛。
3. **搜索提供商扩展**：#5607 AnySearch（免 Key），配合已有的 Serper 模式，生态接入策略清晰。
4. **CLI/桌面端体验**：#5676 裸 `nanobot` 命令的按次目标选择（Desktop/Python 安装并存），以及 #5684 的 README 功能画廊，均指向**降低安装与上手门槛**。
5. **可观测性**：#5520 Codex Langfuse 追踪。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法直接提炼用户声音。间接信号：

- **文档滞后是可确认的痛点**：#5684 明确指出 README 未反映当前 WebUI 能力（对话面板、上下文占用、原生终端客户端），新用户“难以发现”这些功能。
- **上下文窗口占用是用户关心的信息**：#5679 的动机说明现有底栏的 token 统计“可能误导当前请求的真实状态”，侧面反映用户对上下文预算的关注。
- **企业微信渠道有真实使用群体**：媒体上传问题通过 SDK 官方 API 修复，说明国内企业场景（WeCom）是重要用户群。
- **免 Key 服务受欢迎**：#5607 的 AnySearch（匿名配额）对应 Issue #5505 的用户请求，反映轻量试用需求。

## 8. 待处理积压

以下重要 PR 长期未合并，建议维护者关注：

| PR | 挂起时长 | 说明 | 链接 |
|---|---|---|---|
| #4551 heartbeat `isolatedSession` | ~73 天（6/26 起） | 功能完整，含配置兼容性处理 | [#4551](https://github.com/HKUDS/nanobot/pull/4551) |
| #4549 heartbeat `modelOverride` | ~73 天 | 与 #4551 为姊妹 PR，建议一并评审 | [#4549](https://github.com/HKUDS/nanobot/pull/4549) |
| #5388 MCP schema 预算 | ~25 天 | 8/13 起，9/6 有更新但仍 OPEN | [#5388](https://github.com/HKUDS/nanobot/pull/5388) |
| #5386 MCP Apps 元数据保留 | ~25 天 | 同上 | [#5386](https://github.com/HKUDS/nanobot/pull/5386) |
| **#5580 会话持久化异步化** | ~10 天 | **唯一 P1**，事件循环阻塞问题，应最高优先处理 | [#5580](https://github.com/HKUDS/nanobot/pull/5580) |
| #5520 Codex Langfuse 追踪 | ~14 天 | 社区贡献，避免贡献者流失 | [#5520](https://github.com/HKUDS/nanobot/pull/5520) |

**风险提示**：Heartbeat 两个 PR（#4549/#4551）挂起超过两个月，若为 @dajiaohuang 的核心路线工作，应尽快推进评审或明确状态；社区贡献 PR（#5520、#5607）的响应速度直接影响外部贡献者留存。

---
*数据来源：NanoBot GitHub 仓库过去 24 小时活动快照。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-09-07

## 1. 今日速览

Zeroclaw 今日整体保持**高活跃度**：过去 24 小时 Issues 更新 33 条（新开/活跃 30，关闭 3），PR 更新 50 条（待合并 44，已合并/关闭 6），无新版本发布。讨论焦点集中在**架构类 RFC 的持续演进**（会话所有权、文件/附件架构、WASM 插件运行时均出现重大修订）以及 #10601 委托机制安全修复衍生出的一批 P1 跟进 Issue。今日还出现了由新社区成员快速响应的 bug-fix 闭环（#10670 → PR #10671），显示社区响应管道健康。项目正处于 v0.8.5 稳定线收尾（#9459 已于 8/30 到期）后的下一版本酝酿期，积压的 XL 级 PR 较多（多个标记 `do-not-merge` / `status:blocked`），合并吞吐是当前主要瓶颈。

## 2. 版本发布

无新版本发布。v0.8.5 周稳定线跟踪器 [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) 已过 8 月 30 日期限，后续版本规划尚未见新 tracker。

## 3. 项目进展

今日合并/关闭 6 条 PR，方向包括：

- **CI/Windows 稳定性**：PR [#10668](https://github.com/zeroclaw-labs/zeroclaw/pull/10668)（scope Windows tests for locale resources）推进 Windows 测试选择器修复，呼应 #7462 的 74 项 Windows 测试失败问题。
- **Issue 侧关闭**：#9575（OpenAI 兼容连接改用 `/models` 预热）、#9653（WASM 插件 wasi:http 信任 OS 证书库）、#10572（WeCom 渠道文档，good first issue）等关闭，说明文档与 provider 层小改进在持续落地。
- **WASM 插件运行时 RFC** [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) 完成 Revision 修订（9/1），将会话历史决策权剥离至 #10526，边界更清晰，向可实施推进。
- **ACP/Code 会话韧性**：PR [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197)、[#9378](https://github.com/zeroclaw-labs/zeroclaw/pull/9378) 持续推进中断/失败 turn 的持久化，属长期投入方向。

整体判断：**进展以修复与基础设施加固为主，无大型功能性合并**；44 条待合并 PR 中多条 XL 级（#9420、#9447、#8966、#10241 等）积压，是下一波能力跃升的蓄水池。

## 4. 社区热点

1. **[#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) RFC: Runtime 持有会话与传输适配层**（34 评论）— 已到 Revision 5，本次为对 Rev 4 投票快照的重大替换，需维护者重新开启讨论窗口与快照。核心诉求：将 WebSocket 等传输与会话生命周期彻底解耦（与 #7759 联动）。
2. **[#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) RFC: 统一文件与附件架构**（27 评论）— Revision 10，同样因实质性修订使旧投票失效。多轮修订反映附件/文件语义在多渠道（Web/Telegram/ACP）下达成共识的难度。
3. **[#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) RFC: 细粒度沙箱文件系统策略**（25 评论）— 应用层路径准入与 OS 沙箱后端（Bubblewrap/Landlock/Seatbelt）长期漂移的收敛，安全侧核心议题。
4. **[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) Windows 上 74 项测试失败**（19 评论）— CI 仅跑 Linux 导致 Windows 回归不可见，社区对 CI 覆盖面诉求强烈。
5. **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) 维护者决策队列 tracker**（15 评论）— RFC 决策积压本身已成为流程痛点，衍生出 [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549)（简化 RFC 投票流程：取消强制讨论窗口）。

## 5. Bug 与稳定性（按严重度）

**S1 — 工作流阻断**

| Issue | 描述 | Fix PR |
|---|---|---|
| [#10670](https://github.com/zeroclaw-labs/zeroclaw/issues/10670) | `heartbeat.target` 拒绝渠道实例复合键 `<type>.<alias>`，多实例渠道下 daemon 无法启动 | ✅ [#10671](https://github.com/zeroclaw-labs/zeroclaw/pull/10671)（同日提交） |
| [#10659](https://github.com/zeroclaw-labs/zeroclaw/issues/10659) | 超预算的 Code/ACP turn 在会话恢复后丢失可见进度 | 相关：PR #10197 / #9378 |
| [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | Quickstart 应用时 daemon 初始化栈溢出（Tokio worker abort） | in-progress，需复现 |
| [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) | 不完整终态响应被误报为成功 | ✅ [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447)（未合并） |
| [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) | Cron agent 任务无墙钟超时，锁仅进程启动时清理 | in-progress |

**S2 / P1 但降级**

- [#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635)：runtime profile 显示无上限成本（4294967295 cents）而实际全局日预算 $10 生效——配置/预算可观测性不一致，已接受待修。
- [#10617](https://github.com/zeroclaw-labs/zeroclaw/issues/10617)：Claude Fable 5.1 拒绝 `thinking.display = "updates"`，返回 400，需按 live probing 收窄枚举。
- [#10302](https://github.com/zeroclaw-labs/zeroclaw/issues/10302)：ZeroCode Code 面板浏览历史时卡在 Processing 并空耗 CPU。

**安全/成本类 P1（#10601 跟进）**

- [#10644](https://github.com/zeroclaw-labs/zeroclaw/issues/10644)：后台 delegate 结果未绑定 owner principal。
- [#10645](https://github.com/zeroclaw-labs/zeroclaw/issues/10645)：委托子循环未穿透成本追踪上下文，`max_cost_per_day_cents` 可能被绕过。

## 6. 功能请求与路线图信号

- **会话事件溯源**：[#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526)（append-only 会话事件历史 + 确定性重放）已被 #10076 明确为唯一权威，是多个 RFC 的共同地基，**大概率进入下一版本核心**。
- **传输解耦**：#9487 (Rev 5) + #7759 + #6932（WebSocket 会话完整转录持久化）构成一致的“会话与传输分离”路线。
- **委托可观测性**：[#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531)（父 agent 可见子 agent 进度/工具回执）+ PR #10407（持久化会话提示附件）均已有 WIP 代码，落地概率高。
- **Provider 缓存优化**：#10660（第三个缓存断点回退到上一 turn 末消息）+ #10662（OAuth 前缀缓存标记低于最小值且占用断点槽位）是成对的 Anthropic 成本优化，方向明确、改动局部，有望快速纳入。
- **渠道体验**：#10426（Telegram 显示 agent 执行进度）与 PR #9997（Telegram 安全模型选择器）、#10401（可配置未授权提示）呼应，多渠道 UX 是持续投入方向。
- **流程改进**：#10549（简化 RFC 投票）若通过将加速整个 RFC 管道，间接加快路线图。

## 7. 用户反馈摘要

- **长任务静默是最大痛点**：Telegram 用户（#10426）与委托场景用户（#10531）均反馈“agent 运行中毫无可见性，看起来像卡死”——跨渠道进度展示是高频真实诉求。
- **成本上限体验割裂**：用户配置显示“无限制”，实际被全局 $10/日拦截（#10635），且超限 turn 直接丢弃已流式输出（#10659），挫败感强。
- **断线/中断丢失工作**：WebSocket 断开即取消 in-flight turn（#7759）、失败 turn 不留转录（PR #9378）被反复提及，用户期待“断了能接着干”。
- **Windows 用户被边缘化**：#7462 报告者指出 CI 只跑 Linux，Windows 用户在 GBK 编码/路径语义下大量测试失败，属一等公民诉求。
- **正面信号**：新贡献者快速完成 bug 报告 + fix 闭环（#10670/#10671）；WeCom 文档 good-first-issue（#10572）当日完成关闭，新手通道运转良好。

## 8. 待处理积压

**需要维护者决策（挂 `needs-maintainer-review`）**

- #9487 / #9488 / #6996 / #10526 / #10076 / #10549 — RFC 队列长、多轮投票因实质修订作废，决策速度成为社区显性焦虑（#8692 tracker 本身 15 条评论即是证据）。

**大型 PR 长期未合并（XL / blocked / do-not-merge）**

- [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420)（Anthropic OAuth profiles，7/26 起，do-not-merge）
- [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966)（usage 事件携带 provider 身份 + 上下文窗口修正，7/11 起）
- [#10241](https://github.com/zeroclaw-labs/zeroclaw/pull/10241)（渠道受控 shell 审批路由，status:blocked）
- [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)（Hailo-Ollama provider，7/17 起，do-not-merge）
- [#10356](https://github.com/zeroclaw-labs/zeroclaw/pull/10356)（AnySearch 搜索 provider）、[#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997)（Telegram 模型选择器）— blocked + needs-maintainer-review
- [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713)（history-trim token 记账，8/3 起，do-not-merge）
- [#9283](https://github.com/zeroclaw-labs/zeroclaw/pull/9283)、[#9378](https://github.com/zeroclaw-labs/zeroclaw/pull/9378)（@minato32）— 已标记 `stale-candidate` 且 needs-author-action，存在被关闭风险，维护者已代为 repair master 合并，建议尽快恢复作者响应。

**建议**：优先清理 #8692 决策队列（尤其是 #9487 Rev 5 与 #10549 流程 RFC），并为 v0.8.5 之后的版本开设新里程碑 tracker，为 44 条待合并 PR 提供排期锚点。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：2026-09-07** | 仓库：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

项目今日保持**高度活跃**：过去 24 小时内 Issues 更新 50 条（全部为活跃/新开，0 关闭），PR 更新 50 条（47 待合并、3 已合并/关闭），无新版本发布。当前版本为 v0.21.0（2026.8.31，commit 693641aa），社区仍处于版本发布后的密集问题反馈期。今日新增 Bug 集中在**会话状态管理（session lease、state.db、heartbeat）**与**供应商认证（Anthropic OAuth 凭据冲突）**两大风险带，且修复响应速度快——多个当日报告的 Bug 当天即出现对应 fix PR（如 #104691→#104709、#104694→#104699、#104696→#104707）。整体健康度良好：贡献者修复闭环效率高，但累计待合并 PR 积压较多（47 条），合并吞吐量成为瓶颈。

---

## 2. 版本发布

今日无新版本发布。（当前最新：v0.21.0，2026-08-31）

---

## 3. 项目进展

今日仅 3 条 PR 合并/关闭，合并吞吐偏低，主线推进有限。值得关注的方向性进展（含重要待合并 PR）：

- **会话生命周期稳定性**：[PR #104709](https://github.com/NousResearch/hermes-agent/pull/104709) 修复死 lane 残留 lease 导致会话被永久锁死（"already has a live owner"）的问题，是今日最重要的会话状态修复。
- **数据安全**：[PR #104535](https://github.com/NousResearch/hermes-agent/pull/104535)（P1）修复 Windows 上 `git worktree remove` 穿透 JUNCTION 导致**静默删除源码仓库**的严重数据丢失问题。
- **消息投递可靠性**：[PR #104703](https://github.com/NousResearch/hermes-agent/pull/104703) 修复 CLI 后台完成事件风暴（每个僵尸进程触发一次完整 agent turn）；[PR #98630](https://github.com/NousResearch/hermes-agent/pull/98630) 为后台 `delegate_task` 增加 wake 能力校验。
- **安全边界**：[PR #99220](https://github.com/NousResearch/hermes-agent/pull/99220) 补齐 relay 出口授权缺口（此前只认证发送方、不授权目标）；[PR #104690](https://github.com/NousResearch/hermes-agent/pull/104690) 将插件审批绑定到最终工具动作参数，防止 hook 链中 `modify` 指令使审批失效。
- **新能力**：[PR #104080](https://github.com/NousResearch/hermes-agent/pull/104080) 提出远程 CUA transport（跨机器桌面控制）、[PR #85139](https://github.com/NousResearch/hermes-agent/pull/85139) 声明式 OAuth PKCE 插件，均待 maintainer 决策。

**评估**：单日净推进幅度中等，但 fix-for-bug 响应链（报告→修复 <24h）显著，说明维护者社区反应健康。

---

## 4. 社区热点

| Issue | 评论 | 热点分析 |
|---|---|---|
| [#66616 skills-index watchdog](https://github.com/NousResearch/hermes-agent/issues/66616) | **169** | 自动化巡检报告 Skills Hub 索引持续 stale（29.8h > 26h 限制），自 7 月中旬累计 169 条评论，是**长期未解决的基础设施告警**，影响 /docs/skills 可用性 |
| [#97681 Bot Group Chats 独立于 Desktop 运行](https://github.com/NousResearch/hermes-agent/issues/97681) | 25 | 多 Bot 协作、跨设备接续的核心使用场景诉求，用户希望 Group Chat 状态不依赖 Desktop 存活——反映“个人 AI 助理常驻化”方向 |
| [#26277 邮件会话按主题隔离](https://github.com/NousResearch/hermes-agent/issues/26277) | 9 | Email gateway 将同一发件人所有邮件视为单一会话，用户需要按规范化主题切分会话，代表邮件重度用户的工作流需求 |

---

## 5. Bug 与稳定性（按严重度排列）

**P1**
- [#104596 state.db WAL 单进程 split-brain](https://github.com/NousResearch/hermes-agent/issues/104596) — journal-mode 探测失败时设置 pragma 并 unlink 兄弟连接的 -wal/-shm，导致 `btreeInitPage() error 11` 数据库损坏。**尚无 fix PR** ⚠️
- [#104453 v0.21.0 cron 全量失效](https://github.com/NousResearch/hermes-agent/issues/104453) — systemd 249 (Ubuntu 22.04) 拒绝 transient scope 的 `OOMPolicy=kill`，升级后**所有 cron 任务失败**，属版本回归。标记 duplicate，需确认上游修复
- [#90795 Desktop workspace React #520 崩溃](https://github.com/NousResearch/hermes-agent/issues/90795)（6 评论）— useSyncExternalStore 重入导致 Maximum update depth exceeded，几乎每个流式 turn 都触发
- [#92837 heartbeat 静默丢失](https://github.com/NousResearch/hermes-agent/issues/92837)（4 评论）— tick 被计数但从未投递；agent-cache idle-evict 后 wake 丢失
- [#42719 ACP MCP 工具注册后被丢弃](https://github.com/NousResearch/hermes-agent/issues/42719)（3 评论）— 工具注册成功但未进入模型请求
- [#104691 僵尸 lease 永久锁死会话](https://github.com/NousResearch/hermes-agent/issues/104691) — ✅ 已有 fix PR [#104709](https://github.com/NousResearch/hermes-agent/pull/104709)
- [#91654 MCP 注册表按 server name 碰撞](https://github.com/NousResearch/hermes-agent/issues/91654) — 多 profile 同名 MCP server 在单 gateway 进程内冲突（3 评论）

**P2（择要）**
- [#104622 Anthropic 凭据抢占 Claude Code 登录](https://github.com/NousResearch/hermes-agent/issues/104622) — `resolve_anthropic_token()` 优先读 `~/.claude/.credentials.json`，每次刷新都会把 Claude Code 挤下线；安全边界风险 ⚠️ 无 fix PR
- [#104678 Anthropic billing 错误无过期](https://github.com/NousResearch/hermes-agent/issues/104678) — 配额重置后仍重放缓存失败，需手动 `hermes auth reset`
- [#104357 Discord cron 附件 404](https://github.com/NousResearch/hermes-agent/issues/104357)（3 评论）— 文本送达但媒体附件全部丢弃且报告 success
- [#104671 CLI 后台完成事件风暴](https://github.com/NousResearch/hermes-agent/issues/104671) — ✅ 已有 fix PR [#104703](https://github.com/NousResearch/hermes-agent/pull/104703)
- [#104689 Windows 更新器被杀软中断仍报成功](https://github.com/NousResearch/hermes-agent/issues/104689) — 更新状态与实际不一致
- [#104694 退化标题污染 Discord 线程名](https://github.com/NousResearch/hermes-agent/issues/104694) — ✅ fix PR [#104699](https://github.com/NousResearch/hermes-agent/pull/104699)
- [#104696 macOS search_files EPERM 丢结果](https://github.com/NousResearch/hermes-agent/issues/104696) — ✅ fix PR [#104707](https://github.com/NousResearch/hermes-agent/pull/104707)
- [#104693 Honcho 记忆注入滞后一轮](https://github.com/NousResearch/hermes-agent/issues/104693)、[#101185 Discord VC 自动 TTS 失效](https://github.com/NousResearch/hermes-agent/issues/101185)、[#94921 Ghostty Shift+字母泄漏转义序列](https://github.com/NousResearch/hermes-agent/issues/94921)（3 评论）

---

## 6. 功能请求与路线图信号

| 需求 | 状态判断 |
|---|---|
| [#97681 Group Chat 脱离 Desktop 常驻](https://github.com/NousResearch/hermes-agent/issues/97681)（25 评论） | 与 gateway/session-state 风险带高度契合，是路线图核心方向，预计高优先级推进 |
| [#44993 受信 profile 的 execute_code 免审批通道](https://github.com/NousResearch/hermes-agent/issues/44993) | 与 [#104690 精确审批绑定](https://github.com/NousResearch/hermes-agent/pull/104690)、[#104080 远程 CUA](https://github.com/NousResearch/hermes-agent/pull/104080) 共同构成“受控自治”主题，可能成组落地 |
| [#85648 委派任务中途注入结果](https://github.com/NousResearch/hermes-agent/issues/85648) | 已有 [PR #98630](https://github.com/NousResearch/hermes-agent/pull/98630) 做前置校验，属活跃工作流 |
| [#104652 回复上下文携带时间戳](https://github.com/NousResearch/hermes-agent/issues/104652)、[#26277 邮件按主题隔离会话](https://github.com/NousResearch/hermes-agent/issues/26277) | 低成本 UX 改进，纳入下版本概率高 |
| [PR #104611 记忆 Write Gate 审核流](https://github.com/NousResearch/hermes-agent/pull/104611) | re-land 重构后代码，接近可合并，是 memory 方向的明确信号 |

---

## 7. 用户反馈摘要

- **痛点集中在多平台消息可靠性**：Discord 用户反复遭遇附件 404、TTS 不播报、线程名污染——消息投递正确性是最高频抱怨。
- **会话状态脆弱感**：heartbeat 静默失效、会话被 lease 锁死、升级后 cron 全挂，长时运行场景（群聊 bot、服务器部署）用户对“无人值守可靠性”不满。
- **跨工具共存冲突**：与 Claude Code 共存的用户发现 OAuth 凭据被抢占，反映出凭据池优先级设计缺乏边界。
- **满意的方面**：问题响应速度快（多例当日 fix）、插件/多模型/多平台架构灵活、delegate 与 Kanban 等高级工作流受重度用户欢迎。

---

## 8. 待处理积压

- ⚠️ [#66616 Skills 索引 watchdog](https://github.com/NousResearch/hermes-agent/issues/66616)（**169 评论，7 月至今未关闭**）— 文档站基础设施持续 degraded，建议优先修复 CI 定时任务。
- [#42719 ACP MCP 工具丢弃](https://github.com/NousResearch/hermes-agent/issues/42719)（6/09 报告，3 评论）— ACP 集成用户的核心阻断，无 fix PR。
- [#90795 Desktop React #520 崩溃](https://github.com/NousResearch/hermes-agent/issues/90795)（8/20，6 评论）及关联 [#45125 Dashboard 全标签页崩溃](https://github.com/NousResearch/hermes-agent/issues/45125)（6/12）— 桌面端可用性问题长期悬置。
- [#92837 heartbeat 丢失](https://github.com/NousResearch/hermes-agent/issues/92837)、[#91654 MCP 注册表碰撞](https://github.com/NousResearch/hermes-agent/issues/91654)（8 月下旬，均有讨论无关闭）。
- PR 侧积压达 **47 条待合并**，其中 [PR #99220 relay 出口授权](https://github.com/NousResearch/hermes-agent/pull/99220)（安全相关）、[PR #104535 Windows junction 数据丢失](https://github.com/NousResearch/hermes-agent/pull/104535)（P1）建议优先评审合并。

---
*数据来源：GitHub API（Issues/PR 最近 24 小时更新）；统计截至 2026-09-07。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-09-07

## 1. 今日速览

PicoClaw 今日整体活跃度处于**中等偏低**水平：过去 24 小时共 4 条 Issue 更新（3 开/活跃、1 关闭）、2 条 PR 更新（1 待合并、1 已关闭），无新版本发布。值得注意的是，多条 Issue/PR 被标记为 `stale`，社区响应节奏有所放缓。今日活跃话题集中在**会话持久化数据安全**与**嵌入式低性能设备体验**两大方向，反映项目核心用户群（边缘/嵌入式场景）的实际痛点。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

- **PR #1349 已关闭**（[链接](https://github.com/sipeed/picoclaw/pull/1349)）：QQ 频道附件能力增强（emoji 解析、语音/图片/视频/文件收发、Markdown 优先回复降级策略）。该 PR 自 2026-03-11 开启，历时近半年后关闭，未显示合并状态，渠道生态的多媒体能力增强暂告一段落。
- **PR #3348 待合并**（[链接](https://github.com/sipeed/picoclaw/pull/3348)）：捷克语 i18n 代码包裹标签补全，属于社区国际化贡献，但已标记 `stale`，等待维护者审阅。
- **Issue #675 关闭**（[链接](https://github.com/sipeed/picoclaw/issues/675)）：LLM Provider 扩展请求（7 条评论）正式关闭，或表明该方向的讨论已收敛。

今日无代码合入主干，项目功能面**无明显净推进**。

## 4. 社区热点

- **Issue #3351（7 评论次的热点延续）**（[链接](https://github.com/sipeed/picoclaw/issues/3351)）：用户通过源码定位指出 `pkg/memory/jsonl.go` 中 `SetHistory → rewriteJSONL` 会**物理覆盖 jsonl 文件**，自动压缩后历史无法找回。该 Issue 质量高（附源码分析），触及数据安全底线，是今日最值得关注的技术讨论。
- **Issue #675**：LLM Provider 支持扩展讨论，累计 7 条评论后关闭，反映社区对多模型接入的持续诉求。

## 5. Bug 与稳定性（按严重程度）

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | **#3351** 会话压缩物理删除原始记录，历史不可恢复（数据丢失级缺陷） | OPEN + stale，**暂无 fix PR** |
| 🟡 中 | **#3350** 嵌入式设备（RV1106、RISC-V 板）Web UI 输入框逐字符卡顿、CPU 飙升，疑似受聊天记录长度影响 | OPEN + stale，**暂无 fix PR** |

两个 Bug 均被标 `stale` 且无修复 PR 跟进，存在被机器人自动关闭的风险，建议维护者优先介入。

## 6. 功能请求与路线图信号

- **#3369**（[链接](https://github.com/sipeed/picoclaw/issues/3369)）：请求 OpenAI 兼容 provider 支持透传 `x-opencode-session` header 以对接 OpenCode Go。改动面小、边界清晰（仅 OpenCode Go 生效），且 PicoClaw 已有 session ID 追踪，**被快速纳入的可能性较高**。
- **#675**（已关闭）+ **#3369** 共同指向：社区期望 provider 层更灵活的 header/参数映射能力，或可作为下一版本 provider 域的改进信号。

## 7. 用户反馈摘要

- **数据安全焦虑**（#3351）：用户实际检查 `.jsonl` 文件确认内容被删减，“不是显示问题，是文件被重写”，对失忆后无法回溯历史强烈不满，期望真正的 append-only 持久化。
- **边缘设备体验**（#3350）：核心嵌入式用户群反馈 Web UI 性能随会话增长劣化，打字逐字符延迟，质疑输入框为何受聊天记录长度影响。
- **生态集成需求**（#3369、#675）：用户在将 PicoClaw 与 OpenCode Go、更多 LLM 服务集成时遇到 provider 层限制。

## 8. 待处理积压

- **#3351 / #3350**：两个高质量 Bug 报告均标 `stale` 且仅 1 条评论，有被自动关闭风险，建议维护者确认并认领。
- **PR #3348**：捷克语 i18n 贡献长期无审阅，建议尽快处理以保持国际化社区贡献者积极性。
- **PR #1349**：开启近半年后关闭，若功能仍需落地，建议明确替代方案或说明关闭原因，避免社区贡献流失。

---
**健康度小结**：今日无版本、无合并，社区侧以问题报告为主；两个核心 Bug（数据丢失 + 嵌入式性能）积压且面临 stale 风险，是当前项目最需投入的维护热点。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-07

## 1. 今日速览

NanoClaw 今日保持中高活跃度：过去 24 小时共有 2 条 Issue 更新（1 开 1 关）、16 条 PR 更新（8 合并/关闭、8 待合并），无新版本发布。核心团队（@zvi-fried 等）持续推进 **provider 契约化重构系列**，今日关闭了该系列的多个关键 PR，是活动主力。社区侧新增 Slack 共享会话 bug 修复、Proton Mail 原生适配器等贡献，显示渠道生态在持续扩张。整体来看项目处于 v2.3.0 之后的深度架构整理期，为多 provider（Cursor、OpenCode、Codex）支持铺路。

## 2. 版本发布

今日无新版本发布。当前主线为 v2.3.0（2026-08-24 发布），`main` 分支已领先其 119 个提交，下次版本预计将包含大量 provider 契约化改动。

## 3. 项目进展

今日关闭/合并的 PR 以 **provider 契约化重构系列**为核心，显著推进了架构统一：

- **#3581** [refactor(providers): runtime provider contract](https://github.com/nanocoai/nanoclaw/pull/3581) — 将容器运行时 provider 接缝变为可执行契约，核心实际调用并验证。
- **#3585** [refactor(providers): host provider contract](https://github.com/nanocoai/nanoclaw/pull/3585) — 主机 spawn 与 group-init 走声明的、注册期校验的契约，去除 Claude 硬编码逻辑。
- **#3586** [refactor(providers): setup provider contract + install verifier](https://github.com/nanocoai/nanoclaw/pull/3586) — 安装期 provider 契约化并加入验证器。
- **#3584** [refactor(providers): codex provider contract](https://github.com/nanocoai/nanoclaw/pull/3584) — Codex 接入契约体系，兼容旧核心。
- **#3592** [feat(groups): core-owned speed 推理属性](https://github.com/nanocoai/nanoclaw/pull/3592) — 新增按 agent group 的 `speed` 档位配置，CLI 支持 `ncl groups config update --speed`。
- **#3591 / #3727** [render provider instructions from core-owned canon](https://github.com/nanocoai/nanoclaw/pull/3727) — 指令文案收归核心所有，provider 只声明类型化事实，消除语义漂移。
- **#3731** [fix(slack): keep DM thread_ts for reply delivery](https://github.com/nanocoai/nanoclaw/pull/3731)（已关闭）— 对应 Issue #3730 的 DM 会话修复。

**评估**：provider 契约系列今日集中落地（8 个关闭 PR 中 7 个属此系列），意味着多后端（Claude/Codex/Cursor/OpenCode）架构统一基本成型，是自 v2.3.0 以来最大的一步架构推进。

## 4. 社区热点

- **[#3729 Connect host to community cell & manage perks in browser](https://github.com/nanocoai/nanoclaw/pull/3729)**（core-team，开放中）— 将 Echo/Slack 设置搬入浏览器门户，单一 WorkOS 登录。反映项目在降低安装门槛、把 CLI 配置向 Web 化迁移的产品方向，值得关注。
- **[#3726 native Proton Mail adapter](https://github.com/nanocoai/nanoclaw/pull/3726)**（社区贡献）— 通过 Proton Mail Bridge 实现邮件唤醒 agent 并回信，特别覆盖树莓派/ARM 场景。诉求：让 agent 可通过邮件交互，覆盖隐私敏感用户。
- **[#3355 / #3356 Cursor Agent SDK provider](https://github.com/nanocoai/nanoclaw/pull/3356)** — 长期开放的核心功能 PR，配合今日落地的契约体系，Cursor 作为新 provider 的可能性大幅上升。

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | Fix |
|---|---|---|---|
| **高** | [#3728 Telegram 入站静默死亡数天](https://github.com/nanocoai/nanoclaw/issues/3728) — pollingLoop 无限重试无放弃机制、成功时零日志，host 仍显示 `active`，出站正常但入站中断 4 天未被发现 | OPEN，无修复 PR | ❌ 暂无 |
| 中 | [#3730 Slack `session_mode: "shared"` 下每条顶层 DM 仍新建会话](https://github.com/nanocoai/nanoclaw/issues/3730) | CLOSED | ✅ #3731（已关闭） |

#3728 属可观测性/可靠性缺陷（静默失败 + 无告警），建议维护者优先排期；社区对“健康检查不反映入站状态”的反馈值得重视。

## 6. 功能请求与路线图信号

- **多 provider 扩展**：Cursor SDK payload（#3355/#3356）+ OpenCode 契约实现（#3588、#3722）均待合并，契约体系已落地，预计下一版本将正式引入 Cursor/OpenCode 作为 agent 后端。
- **浏览器化配置**：#3729（浏览器门户 + WorkOS 单点登录）显示 setup 流程正从 CLI 向 Web 迁移。
- **渠道扩展**：Proton Mail（#3726）表明社区对邮件类私有渠道有真实需求。
- **网络/凭据修复**：[#3654 NO_PROXY for host.docker.internal](https://github.com/nanocoai/nanoclaw/pull/3654) 解决主机侧 MCP 服务器不可达问题，待合并。

## 7. 用户反馈摘要

- **痛点：静默失败**（#3728）：入站渠道中断 4 天无感知，定时任务照跑但用户消息全部丢失——反映用户对运行时可观测性的强烈不满。
- **痛点：配置语义不符预期**（#3730）：用户仔细验证了 wiring 代码并精确报告版本与 commit，说明核心用户偏高级、会读源码，但 session_mode 行为与文档语义不一致带来困扰。
- **使用场景多样**：ARM/树莓派部署（#3726）、Docker 内访问主机 MCP（#3654）、邮件/Slack 多渠道混合使用，表明 NanoClaw 的自助部署与多渠道接入是核心吸引力。

## 8. 待处理积压

- **[#3728 Telegram pollingLoop 无限重试且无日志](https://github.com/nanocoai/nanoclaw/issues/3728)** — 0 评论、0 👍、无维护者回应，高严重度，建议优先 triage。
- **[#3356 Cursor Agent SDK payload](https://github.com/nanocoai/nanoclaw/pull/3356)** — 开放近 3 周（08-19 起），依赖的契约 PR 今日已落地，可推进合并。
- **[#3588 OpenCode provider contract](https://github.com/nanocoai/nanoclaw/pull/3588) / [#3722 OpenCode install skill](https://github.com/nanocoai/nanoclaw/pull/3722)** — 系列内其他 PR 已关闭，这两条待收尾。
- **[#3464 删除 v1-only session-commands.ts](https://github.com/nanocoai/nanoclaw/pull/3464)** — 开放 2 周余，涉及分支合并阻塞（#2603），需维护者裁决。
- **[#3654 NO_PROXY 修复](https://github.com/nanocoai/nanoclaw/pull/3654)** — 开放 9 天，影响主机侧 MCP 可达性。

---
**健康度小结**：核心团队产出稳定、架构方向清晰（provider 契约化接近完成）；短板在社区 Issue 响应速度（#3728 无人回应）和部分 PR 合并周期偏长（#3464、#3654）。建议关注下一版本发布节奏及 Telegram 可靠性问题的修复进度。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-09-07

## 1. 今日速览

NullClaw 今日整体活跃度较低：过去 24 小时无 Issue 动态（新开/关闭均为 0）、无新版本发布，仅有 1 条处于待合并状态的 PR 更新。该 PR（#996）针对 MCP stdio 响应读取的超时处理进行修复，属于稳定性方向的重要改进，且已通过全量测试验证。整体来看项目处于低强度但持续维护状态，无紧急风险信号。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无合并/关闭的 PR。唯一活跃的是待合并 PR：

- **[#996 fix(mcp): bound stdio response waits](https://github.com/nullclaw/nullclaw/pull/996)**（@be-student，2026-09-06 创建，状态 OPEN）
  - 关联修复 Issue #991
  - 核心改动：
    - 将 `timeout_ms` 应用到 stdio MCP 响应读取，防止无限等待
    - 请求超时时终止服务器的整个进程组（process group）
    - 初始化失败时清理已 spawn 的子进程，避免残留进程
  - 验证情况：`zig build test --summary all` 通过（7,373 passed / 9 skipped），`zig build -Doptimize=ReleaseSmall` 构建成功

该 PR 一旦合并，将显著改善 MCP stdio 集成在异常场景下的资源清理与超时健壮性。

## 4. 社区热点

今日无高热度讨论。唯一值得关注的活跃点是 [PR #996](https://github.com/nullclaw/nullclaw/pull/996)，反映社区对 MCP stdio 传输层在服务器无响应时挂起问题的关注，诉求是更可靠的超时与进程生命周期管理。

## 5. Bug 与稳定性

| 问题 | 严重程度 | 状态 |
|---|---|---|
| [#991] MCP stdio 响应无超时上限，可能永久挂起；超时后服务器进程组未终止；初始化失败遗留子进程 | 中-高（资源泄漏/挂起，影响稳定性） | 已有 fix PR [#996](https://github.com/nullclaw/nullclaw/pull/996)，待审查合并 |

今日无其他新报告的 Bug、崩溃或回归。

## 6. 功能请求与路线图信号

今日无新增功能请求。从 #996 可推断的路线图信号：**MCP 传输层的健壮性（超时、进程管理）是当前维护重点**，后续版本可能继续强化 MCP 集成的容错能力。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提取用户反馈。间接信号：Issue #991 的存在表明有用户在实际使用 MCP stdio 传输时遭遇了响应挂起/进程泄漏问题，属于对可靠性不满的反馈。

## 8. 待处理积压

- [PR #996](https://github.com/nullclaw/nullclaw/pull/996)：修复完整且测试充分（7,373 项测试通过），建议维护者优先审查合并，以尽快解决 #991 所反映的挂起问题。
- Issue #991：需随 #996 合并后关闭，建议维护者跟踪确认。

---

*数据来源：NullClaw GitHub 仓库，统计窗口 2026-09-06 至 2026-09-07。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-09-07

## 1. 今日速览

IronClaw 今日整体活跃度**中等偏低**，呈现“维护型”节奏：过去 24 小时无新开 Issues、无版本发布，但 PR 侧有 9 条更新（6 条待合并、3 条合并/关闭）。活跃内容以**依赖维护（Dependabot 批量升级）**为主，实质功能改动集中在两条修复 PR：Slack 共享频道断连区分（#8076）与 MCP 响应泄漏诊断分类（#8077）。社区讨论热度平淡，所有条目均无评论和 👍 反应，缺乏用户侧反馈信号。

## 2. 版本发布

无新版本发布。目前项目处于持续集成与依赖收敛阶段。

## 3. 项目进展

今日关闭的 3 条 PR 均为依赖升级类，显示 CI 流水线在持续消化依赖积压：

- [PR #8049](https://github.com/nearai/ironclaw/pull/8049)（CLOSED）— Rust `everything-else` 组 19 项依赖升级（uuid 1.24→1.26、base64 0.22→0.23、toml 等）。被更新的 #8080 取代，属滚动更新策略。
- [PR #7835](https://github.com/nearai/ironclaw/pull/7835)（CLOSED）— GitHub Actions 组 5 项升级，包括 `actions/setup-node` 4.x→7.x 的大版本跳跃与 `claude-code-action` 升级，同样被 #8079 取代。
- [PR #7020](https://github.com/nearai/ironclaw/pull/7020)（CLOSED）— tokio-tungstenite 0.29→0.30 升级，其内容已并入 #8078 的组级升级。

**整体评估**：今日无功能性代码合并落地，进展主要体现为依赖债清理的循环推进（旧批次关闭、新批次开启），属于正常的维护节奏。

## 4. 社区热点

今日无高热度讨论。所有活跃 PR 评论数为 0 或 undefined，无 👍 反应，无新增 Issues。相对值得关注的两条人工提交：

- [PR #8076](https://github.com/nearai/ironclaw/pull/8076)（fix(assistant): distinguish disconnected shared channels）— 涉及产品、adapter、OpenAI 兼容三层面的 Slack 共享频道状态区分，是今日改动面最广的功能性 PR。
- [PR #8077](https://github.com/nearai/ironclaw/pull/8077)（fix(mcp): classify response leak diagnostics）— 关联 Issue #8009，涉及 MCP 出口泄漏阻断安全的诊断改进。

## 5. Bug 与稳定性

今日无新报告的 Bug 或崩溃 Issue，但有两条修复 PR 处于待合并状态：

| 级别 | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| 中（安全相关） | MCP 响应泄漏诊断分类不当，可能混淆宿主泄漏阻断与 MCP 可见原因 | fix PR 开放中 | [PR #8077](https://github.com/nearai/ironclaw/pull/8077)（关联 [#8009](https://github.com/nearai/ironclaw/issues/8009)） |
| 中（用户体验） | 已配对用户的断连共享频道与未配对账号无法区分，误导性拒绝提示 | fix PR 开放中 | [PR #8076](https://github.com/nearai/ironclaw/pull/8076) |

## 6. 功能请求与路线图信号

- 今日无新功能请求。
- 从 PR 走向可推断的近期方向：**Slack 集成体验打磨**（#8076 涉及频道级引导与能力更新）和 **MCP 出口安全诊断体系化**（#8077 引入集中式 `response_leak_blocked` sentinel）。这两条如合并，预计构成下一个小版本的主要内容。
- 依赖侧信号：`actions/setup-node` 升至 7.x、`base64` 升至 0.23（含破坏性 API 变更），提示项目在为工具链现代化做准备。

## 7. 用户反馈摘要

今日无 Issue 评论数据可供提炼，无法形成用户反馈画像。建议关注 #8077 所关联的 Issue #8009 中此前累积的讨论，以了解 MCP 泄漏问题对实际用户的 影响。

## 8. 待处理积压

以下 PR 长期处于开放状态，建议维护者关注：

- [PR #7834](https://github.com/nearai/ironclaw/pull/7834)（wasm 组 4 项升级，wasmtime/wit-component 等）— **开放已 15 天**（2026-08-23 创建），标签为 size: L / risk: medium，为当前最久的待合并 PR，可能存在升级兼容性问题需要人工排查。
- 6 条开放 PR 中有 5 条为 Dependabot 批次，若 CI 持续无法消化（如 #8049→#8080 的循环取代），建议审查依赖分组策略或升级节奏。

---

**健康度小结**：IronClaw 处于稳定维护期，无紧急问题，但功能迭代速度放缓、社区互动信号缺失。核心风险点为 wasm 依赖升级积压与两条安全/体验修复 PR 待评审合并。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-09-07）

## 1. 今日速览

LobsterAI 项目今日整体活跃度处于**低位平稳**状态。过去 24 小时仅 1 条 Issue 更新，无 PR 活动，无新版本发布。唯一的动态来自一条已有 Bug 报告被标记为 `[stale]` 状态，反映维护者（或自动化机器人）正在清理长期未响应的积压问题。当前项目处于维护观察期，无实质性功能推进。

## 2. 版本发布

今日无新版本发布。最新 Releases 为空，建议关注仓库 Tags/Releases 页面获取后续发布信息。

## 3. 项目进展

今日无 PR 合并或关闭（PR 更新 0 条）。项目代码层面今日**无净推进**，属于典型的静默维护日。结合近期无 Release 的现状，项目可能处于版本规划期或维护节奏放缓阶段。

## 4. 社区热点

今日唯一活跃条目为 Issue #1068（见第 5 节），评论数仅 1 条，无明显的社区热议话题。整体讨论热度较低，社区处于沉寂状态。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 中 | **删除当前 Agent 后切换至其他 Agent，任务列表不自动刷新**——用户删除当前 Agent 仅剩 main agent 后，main 的任务列表无法自动显示，需手动刷新 | `[OPEN]` + `[stale]` 标记 | ❌ 暂无 |

- 链接：[Issue #1068](https://github.com/netease-youdao/LobsterAI/issues/1068)
- 创建于 2026-03-30，已存在约 5 个月，昨日（09-06）更新被标记 `[stale]`，若无后续互动可能被自动关闭。该 Bug 属于**状态同步类 UI 缺陷**，影响多 Agent 管理场景的核心体验，建议优先确认并修复。

## 6. 功能请求与路线图信号

今日无新增功能请求。Issue #1068 隐含的诉求——**Agent 生命周期变更（删除/切换）后任务列表的自动刷新/状态同步机制**——可视为对前端状态管理改进的信号，建议纳入后续修复计划。

## 7. 用户反馈摘要

从 Issue #1068 可提炼：
- **使用场景**：用户实际在多 Agent 环境下工作，会频繁删除和切换 Agent，main agent 作为兜底承载剩余任务。
- **痛点**：删除 Agent 后任务列表不联动刷新，需要手动操作，影响操作流畅度与数据可见性，用户担心任务“丢失”。
- **反馈态度**：报告附详细截图，说明用户认真参与反馈，但该问题长期未获官方回应，存在社区流失风险。

## 8. 待处理积压

- ⚠️ **Issue #1068**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1068)）：已开启 5 个月、仅 1 条评论，现已进入 `[stale]` 流程。**建议维护者注意**：若该 Bug 确实存在，应在自动关闭前指派修复或给出回复；若无法复现，应主动与报告者 @OnePieceJoker 沟通补充信息，避免有效反馈被机器人流程性关闭。

---
*数据来源：GitHub API 过去 24 小时增量。整体健康度提示：Issue 响应周期偏长，建议加强社区互动与 Bug 分诊机制。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-09-07

## 1. 今日速览

Moltis 今日整体处于**低活跃但稳步推进**状态：过去 24 小时无 Issue 动态、无新版本发布，但有 2 条 PR 更新（均为待合并状态，未发生合并/关闭）。两条 PR 均来自贡献者 @be-student，聚焦于 TLS 协议约束和 shell 执行错误报告的准确性修复，分别关联 #245 和 #279。项目代码贡献持续推进，但社区讨论侧（Issues）今日零活跃，需关注维护者对开放 PR 的响应速度。

## 2. 版本发布

今日无新版本发布，无破坏性变更或迁移事项。（[Releases 页面](https://github.com/moltis-org/moltis/releases)）

## 3. 项目进展

今日无 PR 被合并或关闭，但有 2 条 PR 处于待评审状态，等待维护者介入：

- **[PR #1261](https://github.com/moltis-org/moltis/pull/1261) `fix(tls): restrict ALPN to HTTP/1.1`**（更新于今日）
  - 在支持 RFC 8441 WebSocket 升级之前，TLS 上的 ALPN 仅通告 HTTP/1.1
  - 在现有 TLS 配置测试中固定 ALPN 列表，并在贡献者指南中记录该协议约束
  - 修复 #245；作者已完成 `cargo test -p moltis-tls`（18 通过）等验证
  - 意义：提升了 TLS 层行为的确定性与安全性，避免客户端协商到不支持的协议

- **[PR #1260](https://github.com/moltis-org/moltis/pull/1260) `fix(exec): report missing shell accurately`**
  - 利用配置的工作目录对 spawn `NotFound` 错误进行分类，修复“目录存在导致 PATH 中缺失 `sh` 被掩盖”的问题
  - 关闭 #279；简化特性集下测试套件通过 915/916，仍有 1 个待确认项
  - 意义：显著改善工具执行链路的错误诊断体验

**整体进展**：项目在 TLS 安全与执行错误处理两个方向各前进一步，但均卡在评审环节，今日净进展有限。

## 4. 社区热点

今日无活跃 Issue 讨论、无新增评论或 Reactions，暂无社区热点话题。唯一的活动集中在上述两个 PR 上，且评论数为空，说明讨论尚未展开。建议维护者主动评审 PR #1261 / #1260，带动社区互动。

## 5. Bug 与稳定性

今日无新增 Bug 报告，但两条 PR 隐含了正在修复的已知问题：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 中 | TLS ALPN 可能协商到不支持 WebSocket 升级的协议路径（#245） | 已有 fix PR [#1261](https://github.com/moltis-org/moltis/pull/1261)，待合并 |
| 中低 | shell 缺失（PATH 中无 `sh`）时错误报告不准确（#279） | 已有 fix PR [#1260](https://github.com/moltis-org/moltis/pull/1260)，待合并；测试 915/916，存在 1 个待核查项 |

## 6. 功能请求与路线图信号

- 今日无新功能请求。
- 路线图信号：PR #1261 中明确提及"until RFC 8441 WebSocket upgrades are supported"，表明**WebSocket over TLS（RFC 8441）支持**已在项目规划内，未来大概率作为 ALPN 限制解除的前提特性落地。

## 7. 用户反馈摘要

今日 Issues 评论为零，无法提炼直接用户反馈。间接信号：#245 与 #279 均为用户实际使用中暴露的问题（TLS 协议协商、shell 执行环境诊断），反映用户对**网络层协议兼容性**和**错误信息可读性**有实际诉求。

## 8. 待处理积压

- **[PR #1261](https://github.com/moltis-org/moltis/pull/1261)** 与 **[PR #1260](https://github.com/moltis-org/moltis/pull/1260)**：均为打开状态、无评论、无 👍，作者自 2026-09-06 起等待评审。建议维护者优先评审，避免贡献者流失。
- **Issue #245、#279**：依赖上述 PR 合并方可关闭，属关联积压项。
- 今日无 Issue 活动，无法评估更广泛的长期未响应积压；建议维护者定期巡检陈旧 Issue 队列。

---
*数据来源：Moltis GitHub 仓库过去 24 小时动态。整体健康度：贡献侧正常，评审响应与社区互动为当前短板。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报

**日期：2026-09-07** | 数据来源：github.com/agentscope-ai/CoPaw

---

## 1. 今日速览

项目今日保持高活跃度：过去 24 小时 Issues 更新 27 条（新开/活跃 16，关闭 11），PR 更新 20 条（待合并 16，已合并/关闭 4），无新版本发布。社区参与度亮点突出——@Bruce-Yii 一位首次贡献者连续提交 4 个 PR，快速响应昨日新报的 Telegram/飞书渠道问题，社区响应闭环速度值得肯定。Bug 焦点集中在 **上下文/记忆丢失**（#7579、#7584、#7548）与 **会话/调度异常**（#7589、#7594），属于影响核心可用性的高严重度问题，部分已有修复 PR 在途。

---

## 2. 版本发布

今日无新版本发布。最新 Beta 为 v2.2.0-beta.7，其安装验证 Issue [#7503](https://github.com/agentscope-ai/QwenPaw/issues/7503) 今日已关闭，暗示 beta.7 验证流程收尾，正式 2.2.0 或临近。

---

## 3. 项目进展

今日关闭的 PR（4 条）：

- **#7538 feat: unify runtime environment management**（@rayrayraykk）— 统一环境变量管理，整合 `os.environ` 与 `EnvVarLoader` 模型。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7538)
- **#7387 perf(startup): make early readiness truly chat-ready**（@rayrayraykk）— 启动性能优化，轻量 shell 先行、后台初始化完整应用，直接回应 #7363 报告的 118–135s 启动卡顿。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7387)
- **#7163 feat: refine session thinking and model management**（@zhaozhuang521）— Agent/模型管理 UI 细化。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7163)
- **#2134 feat(heartbeat): configurable heartbeat timeout**（@dai-junjie）— 心跳超时可配置，替换硬编码 120s。[链接](https://github.com/agentscope-ai/QwenPaw/pull/2134)

**评估**：关闭的 PR 覆盖启动性能、环境管理、心跳机制三个方向，与近期高频 Bug 报告（启动阻塞 #7363、心跳反馈循环 #7589）形成呼应，说明维护者在系统性解决运行时稳定性。待合并队列中还有多个高质量 PR（见第 6 节），2.2.0 收尾节奏良好。

---

## 4. 社区热点

| 条目 | 讨论热度 | 要点 |
|---|---|---|
| [#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) 局域网 LLM Server 频繁 client disconnect | 12 评论，今日关闭 | 访问 LM Studio 本地模型频繁断连重试直至超时，本地部署用户核心痛点 |
| [#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) 主 agent 不主动查询子 agent 状态 | 8 评论 | 多 agent 编排下主 agent 消极等待，需用户人工“催进度”，暴露调度自主性缺陷 |
| [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) 记忆遗忘问题 | 3 评论，持续活跃 | 用户反复强调的规则（文件生成路径、开发目录）仍被遗忘，甚至导致部署事故，反映记忆/规则持久化是高频痛点 |
| [#7582](https://github.com/agentscope-ai/QwenPaw/issues/7582) 插件商店体验 | 1 评论 | 多插件安装/更新点击过多、无更新通知，来自多机部署的重度用户 |

**诉求分析**：用户群体明显分为两类——本地模型/局域网部署用户（关注连接稳定性）和多渠道（Telegram/飞书/QQ）重度用户（关注渠道渲染与消息管理）。今日 @hxx0611 一人连报 3 个 Telegram 相关 Issue，社区对渠道体验的精细化需求强烈。

---

## 5. Bug 与稳定性（按严重程度排列）

**🔴 严重**

1. **#7579 / #7584 模型回复从上下文意外丢失**（已关闭但 #7579 仍 OPEN）— 助手回复已持久化但后续请求缺失，导致 toolcall 死循环、行为错乱，用户标注“非常严重”。作者已做 PyInstaller 解包级深度排查，报告质量高。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7579)。相关修复线索：PR [#7521](https://github.com/agentscope-ai/QwenPaw/pull/7521)（thinking 折叠缓解上下文压力）在途。
2. **#7589 Heartbeat cron 会话反馈循环**（OPEN）— 消息重复堆积致 agent 失去响应约 2 小时，作者已对照 main 分支验证问题仍存在。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7589)。部分缓解已随 PR #2134（可配置超时）合入，但根因或需进一步修复。
3. **#7447 长上下文早期记录彻底丢失**（已关闭）— 160 页文档任务的历史记录丢失导致任务无法继续。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7447)

**🟠 中等**

4. **#7596 history.db FTS 索引损坏且完整性检查无法检测，retention purge 静默失败**（今日新报，OPEN，无 fix PR）[链接](https://github.com/agentscope-ai/QwenPaw/issues/7596)
5. **#7567 点停止后 UI 显示已停但实际仍在执行**（已关闭，标记 Close-and-review-later）[链接](https://github.com/agentscope-ai/QwenPaw/issues/7567)
6. **#7594 任务执行情况重复输出 3 次**（今日新报，已关闭待复查）[链接](https://github.com/agentscope-ai/QwenPaw/issues/7594)
7. **#7587 OpenAI-compatible provider 连 WUSRouter 遭 Cloudflare 403**（OPEN，无 fix PR）[链接](https://github.com/agentscope-ai/QwenPaw/issues/7587)
8. **#7513 deepseek-v4-pro 回答与工具调用混杂**（OPEN）[链接](https://github.com/agentscope-ai/QwenPaw/issues/7513)

**🟡 较低**

- #7585 Telegram Markdown 表格不渲染 → **已有 fix PR** [#7590](https://github.com/agentscope-ai/QwenPaw/pull/7590)
- #7588 v2.2 砍掉路径直接输入 → **已有 fix PR** [#7593](https://github.com/agentscope-ai/QwenPaw/pull/7593)
- #7099 暗色模式 channel tag 不可读（已关闭）、#6814 macOS SQLite WAL SIGBUS（已关闭）

**稳定性结论**：上下文一致性（丢失/重复/压缩）是当前最大风险簇，建议作为 2.2.0 正式版前的重点验证项。

---

## 6. 功能请求与路线图信号

| 功能请求 | 对应 PR | 纳入下版可能性 |
|---|---|---|
| 飞书思考卡自动折叠 #7570 | [#7591](https://github.com/agentscope-ai/QwenPaw/pull/7591)（first-time-contributor，Ready） | 高 |
| Telegram 中间消息清理 #7586 | [#7592](https://github.com/agentscope-ai/QwenPaw/pull/7592)（默认关闭，行为兼容） | 高 |
| Telegram 表格渲染 #7585 | [#7590](https://github.com/agentscope-ai/QwenPaw/pull/7590) | 高 |
| 路径直接输入恢复 #7588 | [#7593](https://github.com/agentscope-ai/QwenPaw/pull/7593) | 高 |
| 阻塞式等待子 Agent 工具 #7580 | 暂无 PR，与 #7450 调度问题同源 | 中，需架构讨论 |
| 插件商店一键更新/通知 #7582 | 暂无 PR | 中低 |
| 社区联动（登录/信箱）#7583 | 暂无 PR | 低 |

**值得关注的待合并大特性**：[Advisor Mode #7569](https://github.com/agentscope-ai/QwenPaw/pull/7569)（强模型顾问 + 廉价模型执行者的双模型协作模式）、[PawPort #6960](https://github.com/agentscope-ai/QwenPaw/pull/6960)（从 Codex/Qoder 迁移配置的端到端方案，具战略意义）、[Sidebar 重设计 #7502](https://github.com/agentscope-ai/QwenPaw/pull/7502)、[Skill 创建 v2 #7509](https://github.com/agentscope-ai/QwenPaw/pull/7509)。

---

## 7. 用户反馈摘要

- **最普遍痛点：记忆不可靠**。#7571 用户描述“反复强调规则仍遗忘”，甚至因此覆盖了生产环境代码，造成实际损失；与 #7447、#7548 共同指向长会话记忆/历史管理是第一大不满。
- **本地部署体验**：#7505（12 评论，最高热度）显示局域网 LM Studio 用户遭遇断连重试超时，本地推理用户基数可观。
- **多 agent 自主性不足**：#7450 用户须手动“问进度”才能推进编排，期待更强的主动调度。
- **渠道用户对细节敏感**：Telegram 消息刷屏、飞书思考卡占屏等 UX 抱怨密集，说明渠道功能已是核心使用场景。
- **正面信号**：#7570 用户自行验证折叠方案后提 Issue 附实现思路；社区贡献者（@Bruce-Yii、@kabishou11）响应速度极快，Issue→PR 闭环可在一日内完成，生态健康度高。
- **回归担忧**：#7588 反映 v2.2 移除了 v2.1 受欢迎功能（路径直接输入），提示版本迭代中功能裁剪缺乏沟通。

---

## 8. 待处理积压

- **#6541**（7-29 提出，OPEN）scroll 压缩块使用 `role=user` 导致 DeepSeek 报 MODEL_EXECUTION_ERROR — 与上下文压缩问题簇相关，已积压 40 天。[链接](https://github.com/agentscope-ai/QwenPaw/issues/6541)
- **#7363**（8-27，OPEN）Windows 启动阻塞 118–135s — 虽 #7387 已合入相关优化，但 Issue 未关，建议验证后闭环。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7363)
- **#7589** 心跳反馈循环 — 高严重度且作者已验证 main 分支仍受影响，需优先分派。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7589)
- **PR #7547 / #7546**（first-time-contributor，9-04 提交）channel 队列卡死恢复与惰性加载 — 均针对真实启动/卡顿痛点，建议尽快评审，避免新贡献者流失。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7547)
- **#7580 / #7582 / #7583** 三个功能请求暂无维护者回应。

---

**健康度小结**：_issue 关闭率 41%（11/27），社区贡献活跃，Issue→PR 转化迅速，项目处于良性迭代期。核心风险在于上下文一致性 Bug 簇（#7579/#7584/#7447/#6541），建议在 2.2.0 正式发布前集中回归测试。_

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 — 2026-09-07

## 1. 今日速览
ZeptoClaw 今日整体活跃度处于低位：过去 24 小时无 PR 更新、无新版本发布，仅 1 条 Issue 保持活跃。值得注意的是，唯一的活跃 Issue #664 是由维护者 @qhkm 本人提出的**安全类高优先级设计议题**（P2-high），聚焦委托子代理的策略继承边界问题。这表明项目当前重心已从功能堆叠转向**安全模型与权限治理的深化**。总体判断：项目处于平稳迭代期，无交付压力，但安全债的清偿进度值得关注。

## 2. 版本发布
今日无新版本发布。（省略详述）

## 3. 项目进展
今日无 PR 合并或关闭，无代码层面的直接推进。唯一的实质性进展是 Issue #664 在 09-06 获得新增评论（累计 1 条），围绕委托机制的策略继承设计仍在讨论阶段，尚未转化为实现。

## 4. 社区热点
**[#664 · Delegated-agent capability inheritance — children must not exceed parent policy](https://github.com/qhkm/zeptoclaw/issues/664)**（@qhkm · P2-high · area:safety · 创建 09-05，最近更新 09-06，评论 1 条）

这是今日唯一活跃议题，也是当前讨论焦点。核心诉求：
- ZeptoClaw 的委托机制本身已较为完善——子代理拥有独立循环与会话（`src/tools/delegate.rs:32–53`）、支持并发执行（`153–250`）、已阻断递归委托（`254–358`）；
- 但缺口在于**策略继承**：子代理的能力上限未被约束在父代理策略之内，存在权限扩散/越权的理论风险；
- 议题明确了方向："不缺子代理，缺的是能力继承的收紧机制"。

这一议题反映出社区/维护者对 AI Agent 委托场景下**最小权限原则（least privilege）**的重视，是 Agent 安全领域典型的 capability containment 问题。

## 5. Bug 与稳定性
按严重程度排列：

| 级别 | Issue | 状态 | fix PR |
|------|-------|------|--------|
| P2-high（安全） | [#664 子代理能力继承可超越父策略](https://github.com/qhkm/zeptoclaw/issues/664) | OPEN，讨论中 | ❌ 暂无 |

今日无崩溃、回归类 Bug 报告。#664 属安全边界缺陷而非运行时故障，但若存在恶意/意外的委托链，可能放大权限影响面，建议优先排期。

## 6. 功能请求与路线图信号
- **#664** 实质上是安全架构演进请求：构建"子权限 ⊆ 父权限"的策略继承框架。由于目前**没有任何关联 PR**，短期内不会进入代码落地阶段；但由维护者亲自提出并标注 P2-high，信号明确——**大概率被纳入下一版本的安全加固计划**（预计涉及 `src/tools/delegate.rs` 的工具注册与策略传递路径改造）。
- 今日无其他新功能请求。

## 7. 用户反馈摘要
从 #664 的讨论可提炼以下痛点：
- **满意点**：现有委托机制工程质量获认可——独立会话、并发执行、递归阻断三项设计被明确列为"已经做得不错"的部分；
- **担忧点**：子代理在工具注册环节可能继承超出父级授权的能力（摘要截断处提及 "Delegate tools regi..."，指向工具注册时的策略传递缺口），用户/维护者期望能力边界可被严格证明，而非依赖约定。

## 8. 待处理积压
- **[#664](https://github.com/qhkm/zeptoclaw/issues/664)**（创建于 09-05，已活跃 2 天，仍无修复 PR）：虽属"年轻"Issue，但鉴于其为 P2-high 安全议题且无对应实现，建议维护者尽快给出设计决策或排期，避免安全债累积至下个发布周期。
- 当前无长期（>30 天）未响应的 Issue/PR 积压，整体待办队列健康。

---
*数据来源：GitHub API（qhkm/zeptoclaw），统计窗口：2026-09-06 至 2026-09-07。*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*