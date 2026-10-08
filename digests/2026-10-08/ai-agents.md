# OpenClaw 生态日报 2026-10-08

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-08 05:07 UTC

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

# OpenClaw 项目动态日报 — 2026-10-08

## 1. 今日速览

项目保持**高度活跃**状态：过去 24 小时 Issues 更新 500 条（新开/活跃 411，关闭 89），PR 更新 500 条（待合并 367，已合并/关闭 133），并发布了新 beta 版本 **v2026.10.1-beta.2**。今日贡献者提交了多个高质量修复与性能优化 PR，核心维护者 @steipete 集中在 Gateway 线程负载与状态管理方向持续发力。社区讨论焦点集中在记忆系统（dreaming/compaction）、多代理编排稳定性与 Windows 平台事件循环饥饿等长期问题。整体健康度良好，但 P0/P1 级存量 Bug 积压明显，维护者评审带宽仍是瓶颈。

## 2. 版本发布

### v2026.10.1-beta.2（npm beta 通道热修复）

- **性质**：覆盖 beta.1 之后 40 个中间提交的 hotfix beta，非累积性十月笔记的重复。
- **重点**：Updates & Docs 相关修复（Release notes 摘要被截断，完整内容见 [Release 页面](https://github.com/openclaw/openclaw/releases/tag/v2026.10.1-beta.2)）。
- **迁移注意**：关联 PR [#166959](https://github.com/openclaw/openclaw/pull/166959) 表明团队正在将 2026.9.9 升级路径回退保持在 state schema 19（agent schema 24），九月热修分支曾意外继承 schema-20 迁移。**从 2026.9.x stable 升级到 October beta 的用户需关注 schema 兼容性**，避免跨通道降级。

## 3. 项目进展

今日无明确记录的 merged PR 详情（133 条合并/关闭），但从活跃 PR 看项目在以下方向推进：

- **性能优化（@steipete 密集提交）**：
  - [#166797](https://github.com/openclaw/openclaw/pull/166797)：将 session-diff 基线捕获与推理重叠执行，大仓库（52,834 文件）新会话首回合延迟显著降低。
  - [#166936](https://github.com/openclaw/openclaw/pull/166936)：OAuth 恢复观察移出 Gateway 线程。
  - [#166703](https://github.com/openclaw/openclaw/pull/166703) / [#166252](https://github.com/openclaw/openclaw/pull/166252)：agent-db 会话执行复用、重启预检移入 inspection worker，持续削减 Gateway 线程 SQL 负载。
- **架构整合**：[#166973](https://github.com/openclaw/openclaw/pull/166973)（XL）深度合并 Browser 与 Memory Core 插件内部代码。
- **Skill Workshop 重构**：[#161057](https://github.com/openclaw/openclaw/pull/161057)（XL，已含 Telegram E2E 证明，ready for maintainer look）将 Skill Workshop 改为直接的版本化自学习循环，废弃无人审批的提案队列——这是 agent 自主学习能力的重大架构升级。
- **发布工程**：[#166269](https://github.com/openclaw/openclaw/pull/166269) 已 armed automerge，修复发布验证中复现的 agent 取消竞态。

## 4. 社区热点

| Issue | 评论 | 核心诉求 |
|---|---|---|
| [#150635](https://github.com/openclaw/openclaw/issues/150635) 短期记忆召回夜间驱逐，dreaming deep phase 无法晋升 | 19 | 记忆系统核心缺陷：512 条上限下零召回条目挤占存储，"做梦"巩固机制失效 |
| [#68596](https://github.com/openclaw/openclaw/issues/68596) 可配置流式 watchdog 超时 | 18（👍8） | 长推理模型（kimi-k2.5、DeepSeek-R1）被 30s watchdog 误杀，社区呼声高 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) hook/tool 子进程泄漏致僵尸堆积 | 18 | 长时运行 runtime 退化，回归类 Bug |
| [#121661](https://github.com/openclaw/openclaw/issues/121661) CLI 子代理 announce-wake 无工具运行，模型伪造工具调用输出 | 16 | **涉及模型幻觉工具结果**，已挂 security-review，是 #116461 的遗留部分 |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) 多代理编排不稳定 | 15 | 并发 `agents add` 配置覆盖、session-lock 失败，多代理用户的核心痛点 |

**分析**：社区关注呈两极——前沿能力（记忆巩固、多代理、A2A）与生产可靠性（进程泄漏、消息丢失）并重。"diamond lobster" 高评级 Issue 多集中在 session-state 领域，说明记忆/会话状态层是当前质量短板。

## 5. Bug 与稳定性（按严重度）

### P0
- [#137177](https://github.com/openclaw/openclaw/issues/137177) 内置 `@wecom/wecom-openclaw-plugin@2026.7.2` 无法安装 — **ux-release-blocker，未见 fix PR**
- [#141615](https://github.com/openclaw/openclaw/issues/141615) Webchat "Authenticated profile verification unavailable" 楔死所有会话 RPC 直至重启 — 无 fix PR

### P1（部分有修复中）
- [#165686](https://github.com/openclaw/openclaw/issues/165686)（10-05 新报）Windows 升级 2026.9.8 后 Gateway 持续 ~1.5 核 CPU / 1.2GB 内存，Codex catalog churn — 无 fix PR，与 #159670（claude-cli catalog auth 刷新，[PR](https://github.com/openclaw/openclaw/pull/159670) 在途）可能相关
- [#140010](https://github.com/openclaw/openclaw/issues/140010) Windows 睡眠唤醒后 WebSocket 重连失败 30-60s+ — 无 fix PR
- [#138272](https://github.com/openclaw/openclaw/issues/138272) Android Talk "no live response owner" 语音任务回合掉线，跨三个版本确认 — 无 fix PR
- [#137729](https://github.com/openclaw/openclaw/issues/137729) transcript replay 中未防护的 `.trim()` 崩溃 — 有 linked PR
- [#138599](https://github.com/openclaw/openclaw/issues/138599) 会话超压缩模型上下文窗口时自动压缩死锁 — 待 live-repro
- [#142037](https://github.com/openclaw/openclaw/issues/142037) 嵌入式 runtime message-tool 回复被记为 "mute" — source-repro 完成
- [#142336](https://github.com/openclaw/openclaw/issues/142336) 核心 `/dashboard` 遮蔽 Telegram Mini App 启动器（2026.9.2 回归）— 有 linked PR

### 值得注意的已关闭
- [#114269](https://github.com/openclaw/openclaw/issues/114269) Gateway 对瞬时 state-DB 故障永不恢复且 `/healthz` 恒绿 — 已关闭
- [#51363](https://github.com/openclaw/openclaw/issues/51363) 多实例 Docker 沙箱容器名冲突 — 已关闭

## 6. 功能请求与路线图信号

- **流式 watchdog 可配置阈值**（[#68596](https://github.com/openclaw/openclaw/issues/68596)，👍8）：针对推理型模型的适配需求，与既有 provider profile 工作（如 #89114 MiniMax 思考级别）同属一类，落地概率高。
- **A2A 单向派发模式**（[#44309](https://github.com/openclaw/openclaw/issues/44309)）+ **子代理完成内容与父上下文隔离**（[#96975](https://github.com/openclaw/openclaw/issues/96975)）+ **per-agent 可见性作用域**（[#59149](https://github.com/openclaw/openclaw/issues/59149)，有 linked PR）：多代理安全边界是明确的产品方向。
- **SQLite transcript/session 开放接口**（[#79902](https://github.com/openclaw/openclaw/issues/79902)）：生态伴侣应用诉求，与 database-first runtime 架构演进一致，可能纳入后续版本。
- **Telegram/Discord 默认展示有用进度**（[PR #166861](https://github.com/openclaw/openclaw/pull/166861)，maintainer 亲自要求）：UX 改进已在路上。
- **Anthropic advisor tool 支持**（[#63930](https://github.com/openclaw/openclaw/issues/63930)）：server-side tool 通用处理框架需求。

## 7. 用户反馈摘要

- **痛点集中在长时运行稳定性**：僵尸进程堆积（#97616）、事件循环饱和导致聊天通道数分钟无响应（[#84983](https://github.com/openclaw/openclaw/issues/84983)）、cron 任务打满 Gateway——自托管重度用户受影响最深。
- **消息静默丢失是反复出现的信任问题**：#112259（入站消息零载荷丢弃、无重试/死信）、#49223（WhatsApp 跨会话投递被误抑制）、#48709（Gemini 2.5 Pro 上下文膨胀致静默失败）。
- **Windows 用户被边缘化**：睡眠恢复、CPU 饥饿、内存检测跳过 darwin（#47273）等平台问题长期开放。
- **正面信号**：Doctor 修复体验持续打磨（#166947/#166948 今日双 PR）、Skill Workshop 自学习方向获得社区期待、控制 UI 附件预览（#67915）等问题在逐步收口。
- **中文社区活跃**：飞书话题群路由错误（[#52238](https://github.com/openclaw/openclaw/issues/52238)）、wecom 插件安装失败（#137177）等本土化集成问题值得维护者关注。

## 8. 待处理积压（维护者关注提醒）

| 条目 | 状态 | 建议 |
|---|---|---|
| [#121661](https://github.com/openclaw/openclaw/issues/121661) | OPEN，挂 security-review，8/10 报告，无 fix PR | **高优先**：模型伪造工具输出涉及安全语义，需产品决策 |
| [#68596](https://github.com/openclaw/openclaw/issues/68596) | OPEN，👍8，4 月至今 stale | 社区呼声最高的低成本改进之一 |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | OPEN，7 个月，多代理可靠性 | 阻碍多代理生产采用，建议排期专项治理 |
| [#56693](https://github.com/openclaw/openclaw/issues/56693) | OPEN 6 个月+，Codex OAuth 绑定已停用 workspace | 认证层数据丢失风险，需 live-repro |
| [#84983](https://github.com/openclaw/openclaw/issues/84983) | OPEN 5 个月，cron 打满事件循环 | 与今日多个 Gateway 线程优化 PR（#166703/#166936）方向契合，可顺势收口 |
| [#111489](https://github.com/openclaw/openclaw/issues/111489) | OPEN，Workboard 无法派生 ACP worker | 阻碍外部 agent 后端生态 |
| [PR #141946](https://github.com/openclaw/openclaw/pull/141946) 等 9 月一批 stale PR | 长期 needs-proof | 评审带宽不足，建议批量 triage 或关闭重开 |

**总体**：OpenClaw 处于功能快速迭代与稳定性债务并存的典型阶段。今日 Gateway 性能优化集群和 Skill Workshop 重构是显著进步，但 P0/P1 存量问题（尤其消息丢失、Windows 支持、多代理竞态）需要维护者投入更多评审与产品决策带宽。

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告

**报告日期：2026-10-08 | 数据窗口：过去 24 小时**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入**“能力扩张与稳定性偿债并行”**的成熟竞争阶段：头部项目（OpenClaw、Hermes Agent、Zeroclaw）日更新量达 50 条上下，中小项目则普遍面临维护者评审带宽不足的瓶颈。社区需求焦点已从单 agent 对话能力转向**记忆巩固、多代理编排、A2A 互操作、通道可靠性与沙箱安全**等生产化议题。跨项目反复出现的同类 Bug（消息静默丢失、Gateway 事件循环阻塞、Windows 平台边缘化）表明这是架构共性问题而非单项目缺陷。中文/东亚用户群与本土化集成（飞书、QQ、WeCom、Telegram）已成为多个项目的重要受众。供应链安全（skill 卸载路径删除、模型伪造工具输出）开始受到社区主动审查，标志着生态正被安全研究者正式纳入视野。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（新开411/关闭89） | 500（待合367/合并133） | v2026.10.1-beta.2 | 🟢 强（活跃度断层第一，但 P0/P1 存量积压） |
| **Hermes Agent** | 50（41开/9关） | 50（32待/18合） | 无 | 🟢 良好（当天报告当天修复，响应快） |
| **Zeroclaw** | 42（41开/仅1关） | 50（48待/仅2合） | 无 | 🟡 预警（高产出低合并，决策队列积压） |
| **CoPaw (QwenPaw)** | 16（12开/4关） | 15（12待/3合） | 无（beta.4 收敛中） | 🟢 良好（社区贡献活跃，Desktop beta 是风险） |
| **NanoBot** | 3（2开/1关） | 26（17待/9合） | 无（疑似备产 0.3.6） | 🟢 良好（当日批量收口，冲突 PR 偏多） |
| **LobsterAI** | 2 | 50（49合/1待） | 无 | 🟢 良好（集中清仓式维护，仓库健康度提升） |
| **PicoClaw** | 2 | 6（全待审） | 无 | 🟠 积压（全量 stale，维护者缺位） |
| **NanoClaw** | 2 | 3 | 无 | 🟡 中（修复打磨期，高危 Bug 无 fix） |
| **NullClaw** | 0 | 1 | 无 | 🟡 低频聚焦（单一网关背压修复） |
| **IronClaw** | 0 | 2 | 无 | 🟡 低强度维护期 |
| **EasyClaw** | 0 | 0 | v1.9.27 | 🟡 静默迭代（发版稳定但社区零互动） |
| **TinyClaw / Moltis / ZeptoClaw** | 0 | 0 | 无 | ⚪ 无活动 |

**分层结论**：OpenClaw 独占第一梯队；Hermes/Zeroclaw/CoPaw/NanoBot 构成高活跃第二梯队；LobsterAI 为高效维护型；其余项目处于低活跃或停滞状态。

---

## 3. OpenClaw 在生态中的定位

**规模优势**：日 Issue/PR 更新量（各 500，已达统计上限）为第二梯队项目的 10 倍以上，贡献者基数和维护者投入强度（如 @steipete 单日密集提交 Gateway 性能 PR 集群）无可匹敌，是事实上的生态旗舰与事实标准参照物。

**技术路线差异**：
- OpenClaw 走**全栈一体化**路线（Gateway + Memory Core + Browser + Skill Workshop 插件化整合，#166973），并率先推进 agent 自学习（Skill Workshop 版本化自学习循环，#161057）与记忆"做梦"巩固（dreaming/compaction）——这是 Hermes、NanoBot 尚未触及的前沿方向。
- Zeroclaw 侧重**沙箱安全与运维可控**（Firejail/bubblewrap、费用限额、能力组合），但在配置持久化与合并吞吐上落后。
- NanoBot/CoPaw 更聚焦 **provider 协议层与多渠道 UX**；NanoClaw/PicoClaw 定位轻量宿主。
- IronClaw 探索 embeddings 工具预选，是唯一在工具路由智能化上有公开进展的项目。

**相对劣势**：规模带来的稳定性债务最重——两个 P0（wecom 插件安装失败、Webchat RPC 楔死）无 fix PR；消息静默丢失（#112259 等）、Windows 支持边缘化等问题与 NanoClaw、CoPaw 同病相怜，但绝对用户受影响面更大。评审带宽瓶颈（367 待合并 PR）与 Zeroclaw、PicoClaw 的困境同构，只是量级更大。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **消息/通道可靠性（防静默丢失）** | OpenClaw、NanoClaw、CoPaw、PicoClaw、Zeroclaw、NullClaw | NanoClaw #3136（in_reply_to 污染 a2a 路由）、CoPaw #8116（队列重复投递半年未修）、PicoClaw #3408（队列满静默丢弃）、NullClaw #1047（bus 饱和阻塞 accept loop）——六个项目独立撞上同一类问题 |
| **Gateway/事件循环背压与负载隔离** | OpenClaw、NullClaw、CoPaw、Zeroclaw | OpenClaw 今日 4 个 PR 削减 Gateway 线程负载；CoPaw #7722 无界流缓冲致 OOM；Zeroclaw #11608 通道黑洞请求 |
| **记忆/上下文管理** | OpenClaw、CoPaw、NanoBot、Hermes | OpenClaw dreaming 失效（#150635）；CoPaw Dream 调度 Hourly 预设（#8112）；Hermes 修复“累计计数器误用为上下文占用”的系统性缺陷 |
| **多代理/A2A 编排与安全边界** | OpenClaw、Zeroclaw、NanoClaw、PicoClaw | OpenClaw #43367/#44309/#59149；Zeroclaw A2A RFC #11254；NanoClaw a2a 回程路由；PicoClaw #3409 子代理等待原语 |
| **推理型模型适配（watchdog/思考预算）** | OpenClaw、NanoBot、CoPaw | OpenClaw #68596（30s watchdog 误杀长推理）；NanoBot #4419（推理强度自动升级）；CoPaw #8114（过度思考控制） |
| **供应链/沙箱安全** | LobsterAI、Zeroclaw、OpenClaw | LobsterAI #2793（skill 卸载任意目录删除）；Zeroclaw 沙箱三连报；OpenClaw #121661（模型伪造工具输出，挂 security-review） |
| **MCP 成本治理** | NanoBot、IronClaw、Hermes | NanoBot #5298（schema 字节预算）；IronClaw #8119（embeddings 工具预选减少 tool_search 往返）；Hermes MCP OAuth 挂起 |

---

## 5. 差异化定位分析

| 维度 | 分化情况 |
|---|---|
| **功能侧重** | OpenClaw：全栈自学习智能体平台；Zeroclaw：安全可控的本地运维型 agent（沙箱、限额、能力组合）；CoPaw：团队化 Hub + Creator 内容创作双主线；NanoBot：多 provider 协议兼容与桌面/TUI 体验；LobsterAI：电商/内容场景（达人联盟、评价管理）+ 中文渠道深度集成；PicoClaw/NanoClaw：轻量多渠道宿主；IronClaw：工具路由智能化实验田 |
| **目标用户** | OpenClaw/Zeroclaw 面向自托管重度用户（长时运行、多通道生产部署）；CoPaw 明确向多租户团队演进（#7318）；LobsterAI/EasyClaw 面向电商运营者；NanoBot/CoPaw 的 CJK 修复和 Hermes 的中文键位请求（#49422）显示东亚个人用户是共同基本盘 |
| **技术架构** | OpenClaw：插件化 Gateway + database-first runtime + state schema 版本化迁移（schema 19/20 兼容是升级关键风险点）；Zeroclaw：WASM 插件 + 原子所有权契约（#10412 breaking-change）；NanoClaw：宿主-容器生命周期解耦（DB journal 恢复是新暴露的架构弱点）；NullClaw：单线程 accept loop + 有界 bus 的极简模型 |
| **工程节奏** | Hermes/LobsterAI 展示“当天报告当天修复”的高闭环效率；Zeroclaw/PicoClaw 则是“高产出低合并”的反面样本 |

---

## 6. 社区热度与成熟度分层

- **快速迭代期**：OpenClaw（功能扩张 + 性能冲刺，beta 通道高频发版）、Zeroclaw（v0.8.6/v0.9.0 双 release-gate 队列拥挤）、CoPaw（v2.2.2-beta 收尾 + Creator 2.0/Hub 战略扩张）
- **质量巩固期**：Hermes Agent（安装/更新链路回归收敛）、NanoBot（发布前批量收尾，疑似 0.3.6）、LobsterAI（一日清仓 49 PR，含安全修复）
- **维护/风险期**：PicoClaw（PR 全量 stale，贡献者流失风险高）、NanoClaw（高危 Bug 无 fix）、NullClaw/IronClaw（低频但方向聚焦）、EasyClaw（静默发版、社区失联）
- **停滞**：TinyClaw、Moltis、ZeptoClaw

**成熟度信号**：bug 报告质量（Zeroclaw/Hermes/CoPaw 均有附复现与根因分析的高质量报告）、外部安全研究介入（DefuzeX 测 Zeroclaw、社区审计 LobsterAI skill 安全）是生态整体走向生产成熟的标志。

---

## 7. 值得关注的趋势信号

1. **可靠性是下一个竞争壁垒**：六个项目独立出现“消息静默丢失”类 Bug，说明异步多通道 agent 的投递语义（确认、重试、死信、队列可见性）是行业性空白。率先系统解决者（如 PicoClaw 的 racso2609 “诚实 UI” 系列、NullClaw 的有界背压）将获得信任优势。
2. **推理型模型适配成为标配需求**：watchdog 超时可配置（OpenClaw）、推理强度自动升降档、思考预算控制（CoPaw #8114 已处理）——agent 框架必须为“慢思考”模型重构超时与成本假设。
3. **Agent 自主学习与记忆巩固进入工程落地**：OpenClaw 的 Skill Workshop 版本化自学习循环 + dreaming 机制、CoPaw 的 Dream 调度演进，表明“越用越聪明”从论文走向产品，但 OpenClaw #150635（dreaming 晋升失效）提示该方向工程质量尚不成熟。
4. **上下文/Token 成本治理精细化**：MCP schema 预算（NanoBot）、embeddings 工具预选（IronClaw）、系统提示去重（LobsterAI 节省 ~4.4K 字符/会话）、子代理摘要预算改为实时上下文占用（Hermes）——token 经济学正驱动一轮横切优化。
5. **供应链与行为安全成为新战线**：skill 元数据任意删除（LobsterAI）、模型幻觉工具输出（OpenClaw #121661）、监督模式循环中止（Zeroclaw #11612）——agent 生态需要建立 skill 分发校验与模型输出-工具结果绑定的信任链。
6. **Windows/中文用户是被低估的增量市场**：多项目的 Windows 长期 Bug 积压（OpenClaw、Hermes、Zeroclaw）与 CJK 修复高频出现（NanoBot、CoPaw）形成反差，率先补齐者可获取该细分人群。

**给开发者的建议**：选型上，重度自托管多通道场景选 OpenClaw（接受稳定性债务）或 Zeroclaw（安全优先但需容忍合并慢）；团队化方向关注 CoPaw Hub；轻量嵌入参考 NanoClaw/PicoClaw 架构；所有场景下，务必将消息投递确认与 provider 推理超时作为自建方案的必答题。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 · 2026-10-08

## 1. 今日速览

NanoBot 今日保持高活跃度：过去 24 小时内 PR 更新达 26 条（17 条待合并、9 条已合并/关闭），Issue 更新 3 条（2 开 1 关），无新版本发布。当日工作重心集中在**代码质量冲刺**——一天内关闭 7 个 PR（#6095–#6101 区间密集处理），涵盖 WebUI 对比度修复、CJK 渲染、TUI 命令补全、Codex WebSocket 续连等多个方向，显示维护团队正在做版本发布前的批量收尾。核心贡献者 @chengyongru 表现突出，单日提交多个修复与功能 PR。总体项目健康度良好，但 17 个待合并 PR 中多个标记 `conflict`，合并积压值得关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 9 条 PR 中，重点包括：

- **[PR #6096](https://github.com/HKUDS/nanobot/pull/6096)** — Codex Responses WebSocket 续连：将 Responses 协议行为集中到统一后端，与 OpenAI 兼容后端共享，解决 Codex 会话每次重放历史图片/推理项导致的重复上传问题，属于架构层面的性能优化。
- **[PR #5980](https://github.com/HKUDS/nanobot/pull/5980)** — TUI/WebUI 附件改为二进制 HTTP 上传：修复 Base64 超出 WebSocket 帧上限（1009 关闭码）导致草稿丢失的问题，是重要的传输层重构。
- **[PR #6095](https://github.com/HKUDS/nanobot/pull/6095)** — 暗色模式破坏性按钮对比度修复，同步关闭了 [Issue #6088](https://github.com/HKUDS/nanobot/issues/6088)，当日问题当日解决。
- **[PR #6099](https://github.com/HKUDS/nanobot/pull/6099)** — CJK 粗体标签渲染修复，改善中文用户体验。
- **[PR #6098](https://github.com/HKUDS/nanobot/pull/6098)** — TUI 斜杠命令按名称优先补全，交互体验打磨。
- **[PR #6010](https://github.com/HKUDS/nanobot/pull/6091)** 及 **[PR #4878](https://github.com/HKUDS/nanobot/pull/4878)**（hooks 自动发现，7 月提交）——后者关闭意味着经过近 3 个月审终于落地，agent hooks 生态扩展性提升。

整体来看，项目在**传输层稳定性、Codex/OpenAI Responses 协议、WebUI 可用性与国际化渲染**四条线上均有实质推进，疑似为 0.3.6 版本做准备。

## 4. 社区热点

- **[Issue #4419](https://github.com/HKUDS/nanobot/issues/4419)**（6 条评论，今日活跃）— 自动推理强度升级（reasoning effort escalation）：请求在默认与升级两档间自动切换。nanobot 已有 `reasoningEffort` 配置，讨论焦点在于自动化策略的设计，与当前社区对 reasoning 模型成本控制的热点高度契合，是近期最活跃的讨论串。
- **[Issue #5298](https://github.com/HKUDS/nanobot/issues/5298)**（3 条评论）— 大型 MCP 工具集的 schema 字节预算提案，配套 [PR #5388](https://github.com/HKUDS/nanobot/pull/5388) 已在推进（8/13 提交，今日仍有更新），社区对 MCP 上下文成本问题的关注持续升温。
- **[PR #6091](https://github.com/HKUDS/nanobot/pull/6091)** — Cua Driver 托管计算机使用预设：进入 Apps 目录、含校验和验证的下载流程，是今日最受关注的新能力方向。

## 5. Bug 与稳定性

按严重程度排列：

| 问题 | 状态 | Fix PR |
|---|---|---|
| [Issue #6088](https://github.com/HKUDS/nanobot/issues/6088) 暗色模式 Delete 按钮对比度仅约 1.17:1（可用性缺陷） | ✅ 已关闭 | [PR #6095](https://github.com/HKUDS/nanobot/pull/6095) |
| [PR #6100](https://github.com/HKUDS/nanobot/pull/6100) provider 返回 refusal/content_filter 时 Dream 批次被错误消费、历史游标误推进（数据丢失风险） | 🔄 fix 开放中 | 即本 PR |
| [PR #6051](https://github.com/HKUDS/nanobot/pull/6051) Responses API 工具参数事件仅按 `call_id` 路由，忽略 `item_id`，多工具调用时参数错配（regression，p2） | 🔄 fix 开放中 | 即本 PR |
| [PR #5863](https://github.com/HKUDS/nanobot/pull/5863) / [PR #5834](https://github.com/HKUDS/nanobot/pull/5834) SSE Responses 消费器忽略 `reasoning_text.*` 事件，Grok/Codex 推理流丢失 | 🔄 两个竞品 fix 均开放 | 本身即 fix |
| [PR #5485](https://github.com/HKUDS/nanobot/pull/5485) LiteLLM→原生 SDK 迁移导致 LangSmith 追踪丢失（regression，自 8/22 待合并） | 🔄 待合并 | 即本 PR |
| [PR #6102](https://github.com/HKUDS/nanobot/pull/6102) SkillHub 技能详情链接缺失 `/skills/` 路径段，跳转 404 | 🔄 今日新开 fix | 即本 PR |

**信号**：provider 层的 Responses/SSE 协议处理是当前 bug 集中区域（4 个开放 fix PR），且多数带 `regression` 标签，提示原生 SDK 迁移的遗留问题仍在收敛中。

## 6. 功能请求与路线图信号

- **MCP schema 预算**：[Issue #5298](https://github.com/HKUDS/nanobot/issues/5298) + [PR #5388](https://github.com/HKUDS/nanobot/pull/5388)（opt-in、确定性词法选择、默认关闭）——设计已趋成熟，**大概率进入下一版本**。
- **推理强度自动升级**（[#4419](https://github.com/HKUDS/nanobot/issues/4419)）：讨论热烈但尚无对应 PR，属中期路线图信号。
- **计算机使用（Computer Use）**：[PR #6091](https://github.com/HKUDS/nanobot/pull/6091) 基于 Cua Driver 0.33.4 + 校验和锁定的实现已就绪待审，若合并将显著扩展 agent 能力边界。
- **WebUI 扩展机制**：[PR #6032](https://github.com/HKUDS/nanobot/pull/6032) 可配置本地可信扩展面（manifest 校验 + 作用域路由），若落地将开启浏览器端插件生态。
- **Scoped 代理支持**：[PR #5992](https://github.com/HKUDS/nanobot/pull/5992) 全后端统一网络代理配置，对企业用户是重要能力。

## 7. 用户反馈摘要

- **MCP 重度用户**抱怨大型工具集的上下文成本（[#5298](https://github.com/HKUDS/nanobot/issues/5298)），真实使用场景是挂载大量 MCP server 后 token 开销失控。
- **推理模型用户**希望在默认/深度思考档位间自动切换而非手动配置（[#4419](https://github.com/HKUDS/nanobot/issues/4419))，反映对成本-质量平衡的精细化诉求。
- **WebUI 中文用户**此前长期受 CJK 粗体渲染问题困扰（#6099 修复的正是 `**边界说明：**` 这类混合文本），显示东亚用户群是重要受众。
- **可观测性用户**依赖 LangSmith 追踪，迁移后丢失（#2493/#5485）影响生产排障，反馈该问题持续近两个月。
- 正面信号：暗色模式对比度问题从报告到修复**当天闭环**，体现了较快的响应能力。

## 8. 待处理积压

以下长期开放事项建议维护者关注：

- **[PR #5485](https://github.com/HKUDS/nanobot/pull/5485)**（8/22 开）：LangSmith 追踪恢复，open 近 7 周，regression 类修复应优先排期。
- **[PR #5834](https://github.com/HKUDS/nanobot/pull/5834)**（9/20 开）与 **[PR #5863](https://github.com/HKUDS/nanobot/pull/5863)**（9/22 开）：同一问题（#5833）的两个重复 fix，建议尽快裁决合并其一，避免继续空转。
- **[PR #5388](https://github.com/HKUDS/nanobot/pull/5388)**（8/13 开）：MCP schema 预算，社区需求明确，宜加快评审。
- **[PR #5601](https://github.com/HKUDS/nanobot/pull/5601)**（8/29 开）：被拒绝消息的资源回滚，涉及附件/订阅/历史残留，逻辑复杂但价值高。
- **冲突提示**：当前 17 个待合并 PR 中至少 8 个带 `conflict` 标签（#5485、#6032、#5992、#5971、#5863、#5834、#5601、#6091、#6051），提示主干变更频繁，建议分批收编减少重复 rebase 成本。

---
*数据来源：HKUDS/nanobot GitHub 过去 24 小时活动。本报告基于 Issues/PR 元数据生成，具体实现细节以仓库为准。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-10-08

## 1. 今日速览

Zeroclaw 今日保持高度活跃：过去 24 小时 Issues 更新 42 条（新开/活跃 41，仅关闭 1），PR 更新 50 条（待合并 48，合并/关闭 2），无新版本发布。议题焦点高度集中在 **沙箱安全**、**配置持久化** 与 **插件更新链** 三大方向，多个 P1/S0 级 Bug 于近两日密集上报，表明社区测试投入活跃但维护者消化压力较大。大量 size:XL 的 PR 处于堆叠待审状态，v0.8.6 / v0.9.0 两个 release-gate 队列明显拥挤，整体处于“高产出、低合并”的瓶颈期。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 极少（2 条），且展示数据中未包含具体合并详情；关闭的 Issue 仅 [#10769](https://github.com/zeroclaw-labs/zeroclaw/issues/10769)（WASM 插件并发替换加固，follow-up 已落地）。整体进展主要体现在**待合并队列的推进与堆积**：

- **插件更新链（v0.8.6 关键路径）**：[#11236](https://github.com/zeroclaw-labs/zeroclaw/pull/11236) → [#11261](https://github.com/zeroclaw-labs/zeroclaw/pull/11261) → [#11262](https://github.com/zeroclaw-labs/zeroclaw/pull/11262) 三层堆叠 PR（安装恢复 / 分阶段替换 / CLI plugin update）持续更新但均未合并，是当前最大的合并瓶颈。
- **ChatGPT Plan 认证 + 原生 Onboarding**：[#11597](https://github.com/zeroclaw-labs/zeroclaw/pull/11597) 与堆叠其上的 [#11602](https://github.com/zeroclaw-labs/zeroclaw/pull/11602)（native-onboard 隔离实例）昨日新开并快速迭代，是 operator-ux 方向的新亮点。
- **架构级重构**：[#10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412)（SessionBackend 原子所有权契约，breaking-change/do-not-merge）和 [#11187](https://github.com/zeroclaw-labs/zeroclaw/pull/11187)（应用层 DefaultCapabilities 组合）保持活跃讨论。

量化来看，今日净推进有限（合并率约 4%），项目处于“审查等待”状态。

## 4. 社区热点

- **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) RFC 维护者决策队列 Tracker**（15 条评论，热度第一）：维护者决策积压的集中看板，讨论 RFC 接受/拒绝/拆分的节奏问题——侧面印证决策吞吐不足是社区共识痛点。
- **[#9549](https://github.com/zeroclaw-labs/zeroclaw/issues/9549) 用 llmfit 指导本地模型选择**（4 评论）：用户希望解决 Ollama/llama.cpp 模型选型信息分散问题，属 operator-ux 高频诉求。
- **[#11554](https://github.com/zeroclaw-labs/zeroclaw/issues/11554) 幻影图片重发 Bug**（4 评论）：Signal/Telegram/Discord 通道历史中 `[IMAGE:<path>]` 标记残留导致模型误描述“新图”，多通道用户反馈强烈。
- **沙箱三连报**（@maacruz，各 3 评论）：[#11538](https://github.com/zeroclaw-labs/zeroclaw/issues/11538) / [#11539](https://github.com/zeroclaw-labs/zeroclaw/issues/11539) Firejail 失败 + [#11540](https://github.com/zeroclaw-labs/zeroclaw/issues/11540) bubblewrap 检测失败回退，同一位用户深挖 Linux 沙箱链路，带动安全方向讨论。

## 5. Bug 与稳定性（按严重度排列）

| 级别 | Issue | 说明 | Fix 状态 |
|---|---|---|---|
| S0 | [#11540](https://github.com/zeroclaw-labs/zeroclaw/issues/11540) | bubblewrap 检测失败，静默回退应用层沙箱（安全风险） | 无 fix PR，needs-maintainer-review 缺失 |
| S1 | [#11538](https://github.com/zeroclaw-labs/zeroclaw/issues/11538) / [#11539](https://github.com/zeroclaw-labs/zeroclaw/issues/11539) | Firejail 沙箱两种失败模式，Shell 工具完全不可用，日志不可读 | 无 |
| S1 | [#11608](https://github.com/zeroclaw-labs/zeroclaw/issues/11608) | Telegram 无请求超时，单个黑洞请求永久卡死通道；health 检测到但无恢复 | 无（与 [#10863](https://github.com/zeroclaw-labs/zeroclaw/issues/10863) 同族） |
| S1 | [#11579](https://github.com/zeroclaw-labs/zeroclaw/issues/11579) | `save_dirty` 给未迁移 V1/V2 配置盖 schema_version=3，下次加载跳过迁移、**agent 消失**（v0.9.0 阻塞项） | status:in-progress |
| S1 | [#11606](https://github.com/zeroclaw-labs/zeroclaw/issues/11606) | `model_routing_config upsert_agent` 重写整份 config，伪造 profile/丢字段/重置限额 | status:accepted，暂无 fix PR |
| S1 | [#11612](https://github.com/zeroclaw-labs/zeroclaw/issues/11612) | 监督模式下重复已批准 shell 命令导致 agent 循环中止、ACP 会话结束（DefuzeX 外部安全测试发现） | 无，今日新报 |
| S2 | [#11554](https://github.com/zeroclaw-labs/zeroclaw/issues/11554) | 历史图片标记重发致模型幻觉 | accepted，无 fix PR |
| S2 | [#11585](https://github.com/zeroclaw-labs/zeroclaw/issues/11585) | 费用限额触发后只能重启 daemon 解除，`cost.allow_override` 从未被读取 | in-progress |
| S2 | [#11594](https://github.com/zeroclaw-labs/zeroclaw/issues/11594) | `firejail_args` 有文档有 schema 但从未生效 | 无 |
| S2 | [#11562](https://github.com/zeroclaw-labs/zeroclaw/issues/11562) | 插件更新期间 manifest 与组件代际错配 | accepted，无 fix PR |
| S1(CI) | [#11180](https://github.com/zeroclaw-labs/zeroclaw/issues/11180) | 并行运行时门控下 flaky 测试读取其他测试记录 | in-progress |
| CI | [#11429](https://github.com/zeroclaw-labs/zeroclaw/issues/11429) | Advisory 扫描失败：anymap2 等未维护依赖 | blocked |

**结论**：沙箱方向（4 个 P1/S0 Bug + firejail_args 失效）与配置持久化方向是当前最危险的两个稳定性洼地，且多数尚无对应 fix PR。

## 6. 功能请求与路线图信号

- **v0.9.0 信号明确**：[#11579](https://github.com/zeroclaw-labs/zeroclaw/issues/11579)、[#11187](https://github.com/zeroclaw-labs/zeroclaw/pull/11187)、[#11068](https://github.com/zeroclaw-labs/zeroclaw/pull/11068)、[#11225](https://github.com/zeroclaw-labs/zeroclaw/pull/11225) 均打 `release:v0.9.0`——下一版本主题是**应用层能力组合、按发送者角色收窄通道、委托中的身份/内存归属**。
- **v0.8.6（补丁版）**：插件更新链（#11236/11261/11262）、二进制体积门控 [#11306](https://github.com/zeroclaw-labs/zeroclaw/pull/11306) 与 [#11580](https://github.com/zeroclaw-labs/zeroclaw/issues/11580)（x86_64 二进制距 64MiB 上限仅 0.7MB，需决策 headroom 政策）。
- **可能纳入的新需求**：[#11583](https://github.com/zeroclaw-labs/zeroclaw/issues/11583) Opper typed provider（已 in-progress，大概率下版本）；[#9549](https://github.com/zeroclaw-labs/zeroclaw/issues/9549) llmfit 本地模型指引（accepted）；[#11553](https://github.com/zeroclaw-labs/zeroclaw/issues/11553) 分片消息合并（accepted，Signal 转发场景）。
- **A2A 协议 RFC** [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254)（zeroclaw-a2a crate）仍 needs-author-action，是多智能体互操作的战略方向，待维护者裁决。

## 7. 用户反馈摘要

- **生产可靠性**：RO-mix 再次报告 Telegram 通道在生产环境卡死（#11608），此前 #10863 语音更新无限重试也来自该用户——通道健壮性是重度运维用户的核心痛点。
- **Linux 桌面用户**：@maacruz 的沙箱三连报反映 Firejail/bubblewrap 用户基本处于“配置后即坏”状态，且错误日志完全不透明（"logs are completely opaque"）。
- **配置破坏性恐惧**：#11606 用户仅想改 model_provider 却导致整份 config 被默认值重写——数据破坏类 Bug 对信任伤害最大。
- **成本控制**：#11585 显示费用限额用户被“锁死需重启”，而重启会杀死所有活跃会话，运维体验矛盾突出。
- **外部安全社区关注**：DefuzeX 用 KUMA SDK 主动测试 ZeroClaw 行为安全（#11612），说明项目已进入 agent 安全研究者的视野，属正向信号。
- **积极面**：新 provider（Opper）、ChatGPT Plan 登录（#11597）等需求表明用户群在扩展，onboarding 方向投入获认可。

## 8. 待处理积压

- **needs-author-action / needs-maintainer-review 高风险项**：[#10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412)（breaking-change，8月底开）、[#11144](https://github.com/zeroclaw-labs/zeroclaw/pull/11144)、[#11225](https://github.com/zeroclaw-labs/zeroclaw/pull/11225)（P0）、[#11594](https://github.com/zeroclaw-labs/zeroclaw/issues/11594)、[#11580](https://github.com/zeroclaw-labs/zeroclaw/issues/11580)——建议维护者优先清点。
- **blocked 状态**：[#11324](https://github.com/zeroclaw-labs/zeroclaw/issues/11324) / [#11325](https://github.com/zeroclaw-labs/zeroclaw/issues/11325)（Windows CLI 守护进程身份验证，10/01 起）、[#11429](https://github.com/zeroclaw-labs/zeroclaw/issues/11429) 安全扫描失败——Windows 支持与依赖卫生两条线持续停滞。
- **决策队列积压**：[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Tracker 上 15 条评论反映 RFC 决策节奏滞后，A2A RFC（#11254）已挂起 9 天。
- **老 Bug 未闭环**：[#10863](https://github.com/zeroclaw-labs/zeroclaw/issues/10863)（9/14，Telegram 语音重试，P1）、[#9592](https://github.com/zeroclaw-labs/zeroclaw/issues/9592)（7/31，provider alias 探测，P1）——两月级别未修，建议纳入 v0.9.0 清单。

**健康度小结**：报告输入旺盛（41 新议题/日）、问题定位质量高，但合并吞吐（2/50）与决策速度不匹配，v0.8.6 插件链与 v0.9.0 安全/配置修复两大队列均需维护者集中投入以避免滑坡。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-10-08

## 1. 今日速览

今日 Hermes Agent 保持高度活跃：过去 24 小时内 Issues 更新 50 条（新开/活跃 41，关闭 9），PR 更新 50 条（待合并 32，已合并/关闭 18），无新版本发布。社区焦点集中在**安装/更新链路的兼容性回归**（bundled solstice 插件加载失败、macOS Desktop 更新死锁）以及**认证/计费边界的误判 Bug**（Anthropic `sk-ant-usr-` 前缀 key 被误判为 OAuth）。整体 bug 报告质量较高（多数附复现与根因分析），且大量 issue 当天即有对应 fix PR 出现，显示维护响应速度良好。

## 2. 版本发布

今日无新版本发布。相关背景：[#83670](https://github.com/NousResearch/hermes-agent/issues/83670)（已关闭）曾指出 release 版本号与 git tag 不对应的问题，且 PR [#134917](https://github.com/NousResearch/hermes-agent/pull/134917) 显示 release 流水线的 Nix 身份校验仍在失败，发布工程侧仍有未收敛的问题。

## 3. 项目进展

今日合并/关闭的代表性 PR：

- **[#134916](https://github.com/NousResearch/hermes-agent/pull/134916)**（已关闭）：relaunch waiter 失败报告改为逐次尝试、UTF-8 编码、限制读写大小 — Windows Desktop 更新体验的修复收尾（#134911 的后续）。
- **[#134906](https://github.com/NousResearch/hermes-agent/pull/134906)**（已关闭）：TUI 中途切换模型（无 `--provider`）时立即弹成本确认，而非下一轮静默丢弃 — 修复 #134847 的评审遗留问题。
- **[#100359](https://github.com/NousResearch/hermes-agent/pull/100359) / [#72221](https://github.com/NousResearch/hermes-agent/pull/72221)**（均已关闭）：`delegate_task` 子代理摘要预算从“会话累计 token 计数器”改为“实时上下文占用”，长会话委托不再因错误的 headroom 计算而失效。
- **[#79409](https://github.com/NousResearch/hermes-agent/pull/79409)**（进行中，关联 #79087）：runtime 探测超时改为“不确定”而非“runtime 缺失”，防止 Windows 桌面端对健康安装误触发首跑引导。

整体来看，今日修复主要覆盖 session-state 误用（多处把累计计费计数器当上下文占用）、Windows 更新链路和 TUI 交互细节，属于稳健的质量收敛日。

## 4. 社区热点

1. **[#134107](https://github.com/NousResearch/hermes-agent/issues/134107)**（24 评论）+ 重复报告 [#134220](https://github.com/NousResearch/hermes-agent/issues/134220)（6 👍）：bundled `solstice` 插件在 stripped PM runtime 中因顶层 `httpx` 导入失败，警告通过继承的 stderr 打到终端/TUI，每次 `hermes update` 重复出现 6 次，严重破坏 TUI 渲染。这是安装/更新链路上**波及面最广的新鲜回归**，尚未见对应 fix PR，值得优先处理。
2. **[#133992](https://github.com/NousResearch/hermes-agent/issues/133992)**（17 评论，P1）：macOS Desktop 更新按钮发起的 `hermes update` 被自己的 hand-off 锁拒绝（exit 2），是 #78119/#87514 的**回归**，P1 级别。
3. **[#79087](https://github.com/NousResearch/hermes-agent/issues/79087)**（9 评论，P1）：Windows 桌面端 runtime 探测超时导致健康安装被路由到首跑引导并提议覆盖安装；报告者公开撤回了此前的“双后端竞争”错误结论，讨论过程示范性良好。
4. **[#49422](https://github.com/NousResearch/hermes-agent/issues/49422)**（8 评论，4 👍）：中文用户请求桌面端自定义 Enter/Ctrl+Enter 发送与换行键位（对齐微信/QQ/飞书习惯）—— 长期存在的 UX 诉求，持续有社区共鸣。
5. **[#119163](https://github.com/NousResearch/hermes-agent/issues/119163)**：429 限流的绝对 `last_error_reset_at` 可绕过唯一凭证短冷却，导致单一有效 key 被锁约 15 天；已有 PR #119652，但被一个固定相反行为的测试卡住，需维护者裁决设计意图。

## 5. Bug 与稳定性（按严重度排列）

| 严重度 | 问题 | 状态 |
|---|---|---|
| P1 | [#133992](https://github.com/NousResearch/hermes-agent/issues/133992) macOS Desktop 更新被自身锁拒绝（回归） | 无 fix PR，需关注 |
| P1 | [#79087](https://github.com/NousResearch/hermes-agent/issues/79087) Windows 探测超时→误触发重装引导 | fix PR [#79409](https://github.com/NousResearch/hermes-agent/pull/79409) 进行中 |
| P2 | [#134107](https://github.com/NousResearch/hermes-agent/issues/134107) / [#134220](https://github.com/NousResearch/hermes-agent/issues/134220) solstice 插件加载失败污染 TUI | 无 fix PR，重复报告多 |
| P2（安全/隐私） | [#133922](https://github.com/NousResearch/hermes-agent/issues/133922) Desktop 持久化了混合 Profile 的系统提示（A 身份 + B 的 MEMORY/USER，含私有文件指针，模型实际打开了他人文件） | 无 fix PR，**建议安全侧优先** |
| P2（计费/安全边界） | [#133856](https://github.com/NousResearch/hermes-agent/issues/133856) / [#134897](https://github.com/NousResearch/hermes-agent/issues/134897) `sk-ant-usr-` API key 被误判为 OAuth → 按 Claude Code 计费、报余额不足 | 无 fix PR，今日新报 duplicate |
| P2 | [#119163](https://github.com/NousResearch/hermes-agent/issues/119163) 429 冷却被绝对 reset 时间绕过，key 锁 15 天 | PR #119652 待裁决 |
| P2 | [#134866](https://github.com/NousResearch/hermes-agent/issues/134866) 四类 SQLite 库出现 offset-5 TLS 形态头损坏，写入者未定位 | 需 repro，处于取证阶段 |
| P2 | [#130889](https://github.com/NousResearch/hermes-agent/issues/130889) Windows gateway 持锁跨阻塞 `stream.close()`，整个 RPC 池饿死 | 无 fix PR |
| P2 | [#101756](https://github.com/NousResearch/hermes-agent/issues/101756) MCP OAuth bridge 不 aclose 内层 generator，所有 OAuth MCP server 永久挂起 | 长期未修 |
| P2 | [#134896](https://github.com/NousResearch/hermes-agent/issues/134896) 命名 profile 的 scratch 目录永不清理直至磁盘占满 | 当天已有 fix PR [#134919](https://github.com/NousResearch/hermes-agent/pull/134919) |
| P3 | [#134899](https://github.com/NousResearch/hermes-agent/issues/134899)（已关闭）model=provider 名时 mint 出死 session | 已处理 |

值得肯定：#134896 → PR #134919、#134918（billing-only usage 帧清空流计数）等多个 bug 当天报告当天有修复。

## 6. 功能请求与路线图信号

- **自定义发送键位**（[#49422](https://github.com/NousResearch/hermes-agent/issues/49422)，8 评论/4 👍）：诉求明确、实现成本低，是纳入下个桌面版本的高概率候选。
- **Telegram 单消息流式输出**（PR [#110571](https://github.com/NousResearch/hermes-agent/pull/110571)，opt-in）：评审中，是 gateway 消息体验的主要增量方向。
- **Browser 标签页管理**（[#71375](https://github.com/NousResearch/hermes-agent/issues/71375)，已关闭）：browser 工具集仍是有需求的方向。
- **Desktop 语音播放暂停/恢复**（PR [#103605](https://github.com/NousResearch/hermes-agent/pull/103605)）：已实现待合并。
- **Nous Portal 实时价格展示**（PR [#109604](https://github.com/NousResearch/hermes-agent/pull/109604)）：usage-cost/透明计费方向持续投入。
- **Kimi 视觉支持恢复**（[#18990](https://github.com/NousResearch/hermes-agent/issues/18990)）：上游已支持，等待移除黑名单条目，属低成本修正。
- 插件生态持续扩充：commandcode-oauth 目录条目（[#121892](https://github.com/NousResearch/hermes-agent/pull/121892)）、OpenViking 目录图（[#134920](https://github.com/NousResearch/hermes-agent/pull/134920)）。

## 7. 用户反馈摘要

- **痛点集中在安装/更新与桌面端**：solstice 插件警告刷屏 TUI（多名用户重复报告）、macOS/Windows 更新器卡死或误判安装、版本/tag 混乱，说明打包分发与桌面更新链路是当前满意度最低的区域。
- **计费误判引发真实损失感**：Anthropic `sk-ant-usr-` 用户遭遇 "credit balance is too low"，将 API key 按 Claude Code 订阅身份发送直接影响可用性。
- **长会话可靠性**：累计计数器被误用为上下文占用（#126343、delegation 摘要等一组问题）是横切多处的系统性缺陷，今日已修两处，可能还有同类问题。
- **正面信号**：报告者普遍附高质量复现与根因分析（如 #79087 报告者主动修正结论），社区与维护者的协作氛围健康；小 bug 当天即可获得 fix PR。

## 8. 待处理积压

- [#101756](https://github.com/NousResearch/hermes-agent/issues/101756)（9/3 开，MCP OAuth 全量挂起）：P2、影响所有 OAuth MCP server，超一个月未修。
- [#105268](https://github.com/NousResearch/hermes-agent/issues/105268)（9/7 开，非 Chrome/Edge 默认浏览器时 Windows 更新器灰屏鬼窗）：持续无进展。
- [#87973](https://github.com/NousResearch/hermes-agent/issues/87973)（8/16 开，危险命令检测误报 `git clean -f` 出现在引号内即拦截）：影响正常 commit 工作流。
- [#88660](https://github.com/NousResearch/hermes-agent/issues/88660)（8/17 开，bundled skills 六项修复已附 diff，含安全/密钥卫生项）：ready-to-apply，建议维护者直接采纳。
- [#131321](https://github.com/NousResearch/hermes-agent/issues/131321)（GPU 被错误 pin 到 SwiftShader 软件渲染 13 天）：桌面渲染状态机缺乏自愈，perf 类长期项。
- PR [#125998](https://github.com/NousResearch/hermes-agent/pull/125998)（per-session scratch lanes + 排除 checkpoint 快照）：9/28 开，与今日的 #134896/#134919 同域，建议一并统筹评审。

---
*数据来源：Hermes Agent GitHub（截至 2026-10-08）；链接均为 NousResearch/hermes-agent 仓库内条目。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-10-08）

> 数据来源：github.com/sipeed/picoclaw 过去 24 小时活动

---

## 1. 今日速览

- 过去 24 小时共有 **8 项更新活动**（2 条 Issues + 6 条 PRs），无新版本发布、无合并/关闭动作，整体处于** PR 堆积待审**状态。
- 贡献者 [@racso2609](https://github.com/racso2609) 极为活跃，围绕 Web UI 可观测性与多渠道会话管理（#3406 系列）连续提交了 4 个 PR（#3410–#3413），形成了一条清晰的“诚实 UI”改进主线。
- 两条活跃 Issues（#3408、#3409）均聚焦**用户反馈不可见/丢失**类问题，与 racso2609 的 PR 方向高度吻合，社区诉求与开发动作形成闭环。
- ⚠️ 风险信号：全部 6 个待合并 PR 及 2 个 Issue 均被标记 `[stale]`，维护者响应力度不足，积压趋势明显。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日**无 PR 被合并、无 Issue 被关闭**，但待审队列中有实质性进展方向：

- **PR #3413** [feat(web): 全局多渠道会话侧边栏](https://github.com/sipeed/picoclaw/pull/3413)：后端跨所有 channel 发现会话并分类，Web UI 会话列表从仅 `pico` 提升为全局视图（#3406 Part 2-A），是向多渠道统一管理迈进的关键一步。
- **PR #3412** [fix(agent): 让失败的 turn 对用户可见](https://github.com/sipeed/picoclaw/pull/3412)：修复错误通知在出口处通过 3 个不同“漏洞”（含 `message` tool 抑制）被静默丢弃的问题。
- **PR #3411** [feat(web): 状态驱动的真实工作指示器](https://github.com/sipeed/picoclaw/pull/3411)：替换 Web UI 中旋转的固定“思考中”文案为真实状态指示。
- **PR #3410** [fix(pico/web): 暴露 steering 队列状态](https://github.com/sipeed/picoclaw/pull/3410)：消息入队成功/队列满（`MaxQueueSize=10`）时向客户端返回明确信号。

这 4 个 PR 若合并，将系统性解决“用户发送消息后无反馈、错误静默丢失”的体验短板，Web UI 可观测性预计显著提升。

---

## 4. 社区热点

- **Issue #3409**（2 条评论）：[调度原语被用作后台子代理等待机制，触发意外的自主循环 tick](https://github.com/sipeed/picoclaw/issues/3409)
  用户在执行 subagent-driven development 时，agent 将 `ScheduleWakeup`/cron 式唤醒（~300s）**纯当作轮询等待**使用，引发副作用。反映高级用户已深度使用子代理工作流，调度原语的语义边界需要澄清或文档约束。
- **Issue #3408**（2 条评论）：[Web UI：agent 忙碌时消息隐形排队、队列满时静默丢弃](https://github.com/sipeed/picoclaw/issues/3408)
  直接诉求是“排队/忙碌”UI 反馈 + 一个队列/事件可视化面板，与 PR #3410 精准对应。

两条 Issue 均围绕**异步交互中的状态不透明**展开，是当前用户最大痛点。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | **#3408** 消息静默丢弃、无任何 UI 反馈，用户可能误以为消息已送达 | ✅ 已有 fix PR [#3410](https://github.com/sipeed/picoclaw/pull/3410) |
| 🔴 高 | **失败 turn 的错误通知被 3 处出口静默吞掉**（PR #3412 所述） | ✅ PR [#3412](https://github.com/sipeed/picoclaw/pull/3412) |
| 🟠 中 | **#3409** 调度原语误用触发自主循环 tick，影响后台子代理编排稳定性 | ❌ 暂无 fix PR，待维护者定调（API 约束 vs 文档指引） |
| 🟡 低 | **#3378** `RefreshAccessToken` 硬编码 scope `"openid profile email"` 覆盖 OAuth 提供商自定义 scope，可能导致刷新令牌权限异常 | ✅ PR [#3378](https://github.com/sipeed/picoclaw/pull/3378) 待合并 |

---

## 6. 功能请求与路线图信号

- **多渠道统一会话管理**：#3408 中用户请求“队列/事件面板”，#3413 已实现全局多渠道会话侧边栏，说明 #3406 路线图（真实状态指示 → 全局会话管理 → 事件可视化）正在按部就班推进，**事件面板大概率是下一个 Part 2-B**。
- **调度/等待原语语义改进**：#3409 隐含对“子代理完成等待”专用阻塞原语（而非借用 wakeup）的需求，可能催生新的 agent API。
- **DeltaChannel 现代化**：PR #3222 移除遗留特性、重命名 invite link API、密码配置迁至 jsonrpc secrets——传递了**淘汰 legacy fallback、收紧 secrets 管理**的路线图信号。

---

## 7. 用户反馈摘要

- **痛点集中**：两类高频不满——(1) “消息像消失了一样”（#3408），agent 忙碌时无排队反馈；(2) “turn 失败后一片寂静”（#3412），错误信息完全不可见。本质都是**异步代理交互缺乏状态透明度**。
- **进阶使用场景**：已有用户在跑“后台 implementer/reviewer 子代理并行开发”的重度工作流（#3409），说明 PicoClaw 被用于真实生产级 agent 编排，而非玩具场景。
- **OAuth 多提供商配置**：有用户配置了非默认 scope 的自定义 OAuth 提供商（#3378），反映企业/私有部署需求存在。
- 整体印象：用户对功能深度满意，但对**反馈回路的可靠性**不满。

---

## 8. 待处理积压 ⚠️

以下条目被标记 `[stale]` 且维护者无合并/关闭动作，建议优先处理：

| 条目 | 提交时间 | 积压时长 | 说明 |
|---|---|---|---|
| [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) deltachat 重构（-200 LOC） | 2026-07-03 | **~3 个月** | 由核心贡献者 @trufae 提交，含破坏性变更（API 重命名、移除密码配置），长期无审查意见，风险随时间累积 |
| [PR #3378](https://github.com/sipeed/picoclaw/pull/3378) OAuth scope 修复 | 2026-09-12 | ~26 天 | 修复实际认证 bug，影响多提供商部署，应尽快合并 |
| [Issue #3409](https://github.com/sipeed/picoclaw/issues/3409) 调度原语误用 | 2026-09-29 | 9 天 | 涉及 API 语义设计决策，需维护者表态 |
| PR #3410–#3413（racso2609 系列） | 09-29~09-30 | ~8 天 | 4 个成体系的 UI 改进 PR 全部待审，贡献者积极性需维护 |

**健康度结论**：社区贡献活跃、方向聚焦，但维护者审查带宽不足导致 PR 全量积压且集体 stale。建议优先合并 #3378（低风险 bug fix）并对 #3222 给出明确审查计划，以避免高价值贡献者流失。

---
*本报告基于 GitHub 公开数据自动生成，链接均指向 sipeed/picoclaw 仓库。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-10-08）

## 1. 今日速览

NanoClaw 今日维持中等活跃度：新增 2 条 Issue、3 条 PR 更新，无版本发布，也无 PR 被合并或 Issue 被关闭。焦点集中在消息通道适配器（Signal、channel setup）的健壮性修复上，社区贡献者 @seefood 合并整理了多个陈旧 PR 形成集中修复补丁。同时新报出两个涉及数据可靠性的 Bug（消息静默丢失、SQLite journal 恢复失败），值得维护者优先关注。整体来看项目处于“修复打磨期”，稳定性问题仍是当前主要风险点。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 被合并或关闭，3 条 PR 处于待合并状态：

- **PR #4055**（@jsboige，area/channels）：修复 `initChannelAdapters` 中 channel setup 失败后不再重试的问题。原实现仅在约 17 秒的重试预算内尝试，网络抖动超时后该 channel 将被永久放弃直至进程重启。此 PR 引入 re-arm 机制与健康检查，是提升宿主长期运行稳定性的重要一步。[链接](https://github.com/qwibitai/nanoclaw/pull/4055)
- **PR #3837**（@seefood，area/channels）：将两个陈旧 PR 中的 Signal 适配器修复（附件处理、DM 路由、出站队列）整合为单一补丁，统一通过 mounted-inbox 机制转发所有类型附件，与其他聊天适配器对齐。[链接](https://github.com/qwibitai/nanoclaw/pull/3837)
- **PR #3838**（@seefood，docs）：配套 #3837 的文档更新，修正 `/add-signal` 相关 SKILL.md/REMOVE.md 中 platform-id-format 的说明（DM 使用 `signal:` 前缀，群组使用 `group:` 前缀）。[链接](https://github.com/qwibitai/nanoclaw/pull/3838)

虽然今日无代码合并，但 PR 集中化整理（#3837/#3838）表明贡献者在主动降低维护者的评审成本，合并后 Signal 通道的可靠性将显著提升。

## 4. 社区热点

- **Issue #3136**（1 条评论，活跃至 10-07）：[链接](https://github.com/qwibitai/nanoclaw/issues/3136)
  `sendToDestination()` 在目标 destination 无入站历史时，错误地将唤醒批次的外来 `in_reply_to` 盖到出站消息上，由于该字段承担 a2a 回程路由职责，导致消息静默丢失。该 Issue 自 7 月底提出至今持续有讨论，反映用户对多 agent（a2a）路由可靠性的强烈关切。
- **Issue #4056**（今日新报）：[链接](https://github.com/qwibitai/nanoclaw/issues/4056)
  宿主机宕机导致的 `outbound.db-journal` 残留永远无法恢复，readonly 投递轮询每 tick 报 `SQLITE_READONLY` 失败，直到新容器启动。这暴露了宿主-容器生命周期解耦下的数据恢复缺陷，属于影响投递可用性的核心问题。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| 高 | [#3136](https://github.com/qwibitai/nanoclaw/issues/3136) | `sendToDestination` 给出站消息盖上外来 `in_reply_to`，a2a 路由场景下**消息静默丢失**（静默失败比崩溃更危险） | 暂无对应 fix PR，需关注 |
| 高 | [#4056](https://github.com/qwibitai/nanoclaw/issues/4056) | 宿主重启后 stranded `outbound.db-journal` 无法恢复，readonly 投递轮询永久失败 | 暂无对应 fix PR，今日新报 |
| 中 | [PR #4055](https://github.com/qwibitai/nanoclaw/pull/4055) | 网络抖动超过 17s 重试预算后 channel 被永久放弃 | 已有 fix PR 待评审 |
| 中 | [PR #3837](https://github.com/qwibitai/nanoclaw/pull/3837) | Signal 附件/DM 路由/出站队列多项缺陷 | 已有 fix PR 待评审 |

值得注意：两个最严重的 Bug（#3136、#4056）目前均无修复 PR，且都涉及**数据/消息可靠性**这一核心链路。

## 6. 功能请求与路线图信号

今日无明确的新功能请求，但可从 Issue/PR 中提取路线图信号：

- **通道自愈能力**：PR #4055 的 re-arm + 健康检查机制，标志着项目向“长期无人值守运行”方向的可靠性建设，该方向可能成为后续版本重点。
- **Signal 通道成熟化**：#3837/#3838 集中修复 + 文档完善，暗示 Signal 支持即将从“可用”走向“可靠”，有望在下一个版本合并落地。
- **存储层韧性**：#4056 提出的 journal 恢复问题，可能推动宿主侧对容器 DB 生命周期的重新设计（如启动时恢复检查）。

## 7. 用户反馈摘要

- **多 agent 场景可靠性**：#3136 报告者关注 a2a 路由中 `in_reply_to` 的语义正确性，说明已有用户在生产中使用跨 agent 消息传递，对“静默丢消息”零容忍。
- **宿主宕机恢复**：#4056 报告者经历了整机/VM 断电场景，反映部分用户以裸机/VM 方式部署，对故障后自动恢复有硬性需求。
- **网络环境不稳定**：#4055 指出短重试预算（17s）不足以覆盖真实网络抖动，反映用户部署环境网络条件参差不齐，需要更持久的自适应重试。

综合来看，用户痛点高度一致：**在非理想环境（网络抖动、断电、多 agent）下，消息不丢、通道不断**。

## 8. 待处理积压

- **Issue #3136**（创建于 2026-07-26，已逾 2 个月未关闭）：消息静默丢失属于高危 Bug，且持续有评论但无修复 PR，建议维护者尽快确认并排期。
- **PR #3837 / #3838**（创建于 2026-09-16，开放近 3 周）：贡献者已主动整合陈旧 PR 降低评审成本，长期搁置可能再次导致 PR 过期，建议优先评审。
- **PR #4055**（10-07 提交）：与 #4056 在“通道/投递自愈”主题上互补，可考虑一起规划合并，避免同类修复碎片化。

---

*数据来源：NanoClaw GitHub 仓库过去 24 小时活动统计。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 · 2026-10-08

> 数据来源：github.com/nullclaw/nullclaw | 统计窗口：过去 24 小时

---

## 1. 今日速览

今日 NullClaw 项目整体活跃度**偏低**：过去 24 小时内 Issues 无任何新增或活跃（0 条），PR 更新仅 1 条且处于待合并状态，无新版本发布。唯一的动态来自维护者 @addadi 提交的一个网关层稳定性修复 PR（#1047），针对 inbound bus 无界发布阻塞 accept loop 的问题。从 PR 内容看，项目正处于核心消息链路的可靠性打磨阶段，社区侧（Issue 反馈、功能讨论）今日较为沉寂。

---

## 2. 版本发布

今日无新版本发布，最近亦无 Release 记录，省略此节。

---

## 3. 项目进展

今日无 PR 被合并或关闭，**待合并 PR 1 条**：

- **[PR #1047](https://github.com/nullclaw/nullclaw/pull/1047)** `fix(gateway): bound inbound bus publish instead of blocking the accept loop`（@addadi，2026-10-07 创建，OPEN）
  - **问题**：单线程 gateway accept loop 使用**无界**的 `Bus.publishInbound` 发布 webhook 消息；当 inbound 队列（容量 100）因 agent worker 同步处理长对话轮次而饱和时，`not_full.wait` 会永久阻塞，accept loop 随之挂起。
  - **影响面**：在 bus 饱和场景下（摘要提及 Telegram 等渠道），网关无法继续接收新消息，属于核心链路的可用性风险。
  - **方向评估**：将无界发布改为有界策略，避免阻塞 accept loop，是消息网关健壮性的重要一步，但今日尚未获得 review 或合并。

整体而言，项目今日**进展有限**，属于维护性修复推进阶段。

---

## 4. 社区热点

今日无活跃 Issue 讨论，PR #1047 也暂无评论与反应（👍 0）。无可识别的社区热点话题，建议持续观察。

---

## 5. Bug 与稳定性

今日无用户通过 Issue 报告新 Bug，但 PR #1047 本身揭示了一个**内部已知的稳定性缺陷**：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | Gateway accept loop 因无界 `Bus.publishInbound` 在队列满时（`not_full.wait`）永久阻塞，bus 饱和时网关停止接收消息（含 Telegram 渠道） | **已有 fix PR**：[#1047](https://github.com/nullclaw/nullclaw/pull/1047)，待 review/合并 |

该缺陷涉及 webhook 消息入口，一旦触发会静默丢消息/停摆，建议维护者优先 review 该 PR。

---

## 6. 功能请求与路线图信号

今日无新功能请求。从 #1047 可推断的隐含信号：

- 团队正在关注**网关在负载高峰下的背压（backpressure）与吞吐能力**，后续可能围绕队列容量调优、多 worker 异步化展开工作。

---

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼用户反馈。PR #1047 的问题描述侧面反映：**agent worker 同步处理长对话轮次**是真实存在的使用场景，可能是长会话用户遇到消息无响应的潜在根源，值得留意后续是否出现相关用户报告。

---

## 8. 待处理积压

- **[PR #1047](https://github.com/nullclaw/nullclaw/pull/1047)**：今日唯一活跃 PR，目前 0 评论、0 👍，尚无人 review。作为核心网关稳定性修复，建议维护者尽快安排 review 与合并，避免 backlog 积压影响网关可靠性。

> 提示：今日 Issue 数据为 0，长期积压情况需结合更长时间窗口数据分析，建议维护者定期巡查 stale issues。

---

**健康度小结**：⚠️ 单日活跃度低（1 PR / 0 Issue / 0 Release），但唯一动态指向关键稳定性修复，项目处于“低频但聚焦核心质量”的状态。建议关注 PR #1047 的合并进展及其对网关消息链路稳定性的实际改善。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-10-08

## 1. 今日速览

IronClaw 今日整体活跃度较低：过去 24 小时无新 Issue、无 PR 合并、无版本发布。仅有 2 条处于 OPEN 状态的 PR 更新（均为待合并），其中一条是 dependabot 的依赖自动升级，另一条是来自新贡献者的功能性 PR。项目处于平稳但低强度的维护期，社区互动信号（评论、👍）今日为零。

## 2. 版本发布

今日无新版本发布。（长期视角：近期无 Release 记录，建议关注主干合并节奏。）

## 3. 项目进展

今日无 PR 合并或关闭，项目功能主线无实质推进。两条待合并 PR 状态如下：

- **[PR #8119](https://github.com/nearai/ironclaw/pull/8119)** — `feat(loop-host): opt-in tool selection with embeddings`（@CjS77，XL 规模 / 中风险 / 涉及 docs 与依赖）
  引入“回合开始时工具预选”机制：在对话首次模型调用前，由分类器基于用户消息通过 embeddings 挑选出可能需要的延迟加载（deferred）工具，随核心工具一并广播给模型，从而省去先调用 `tool_search` 的往返。这是对智能体工具调用链路的显著效率优化，也是该项目向动态工具路由方向演进的重要信号。注意：由新贡献者提交、体量 XL、涉及依赖变更，评审成本较高，今日仍处于 OPEN 状态，建议维护者优先排期评审。
- **[PR #8128](https://github.com/nearai/ironclaw/pull/8128)** — `chore(deps): bump urllib3 from 2.7.0 to 2.8.0 in /tests/e2e`（@dependabot[bot]）
  常规测试依赖升级，风险低，可直接合并。

## 4. 社区热点

今日无任何 Issue/PR 出现新增评论或 👍 反应，无社区热点可提炼。两待合并 PR 的评论数均为 0，#8119 尚未获得维护者实质反馈，存在评审积压迹象。

## 5. Bug 与稳定性

- 今日无新报 Bug、崩溃或回归问题。
- #8128 的 urllib3 升级属于依赖维护动作，无证据表明其对应已知安全漏洞或稳定性事件，但建议维护者确认 dependabot 触发原因（安全修复 or 常规版本更新）。

## 6. 功能请求与路线图信号

- 今日无用户新功能请求。
- **路线图信号**：PR #8119 体现的方向——基于 embeddings 的智能工具预选、减少 `tool_search` 往返——若合并落地，很可能成为 loop-host 下一个阶段的标志性能力，值得在后续 Release Notes 中重点标注。该 PR 标注 `scope: docs`，暗示将同步更新文档，属于正式功能而非实验代码。

## 7. 用户反馈摘要

今日无 Issue 评论可分析，暂无法提炼用户痛点或满意度数据。

## 8. 待处理积压

| 项目 | 状态 | 积压时长 | 风险提示 |
|---|---|---|---|
| [PR #8119](https://github.com/nearai/ironclaw/pull/8119) 工具预选（embeddings） | OPEN，无评论 | 创建于 09-29，已约 9 天未获评审 | XL 体量 + 新贡献者 + 涉依赖变更，长期滞留易导致 rebase 成本上升和贡献者流失，**建议维护者优先介入** |
| [PR #8128](https://github.com/nearai/ironclaw/pull/8128) urllib3 升级 | OPEN | 创建于 10-07 | 低风险，可快速合并清空 |

---

**健康度小结**：今日零合并、零 Issue、零 Release，短期活跃度偏低；主要风险点在于大型功能 PR #8119 的评审积压。建议维护者今日优先处理两项待合并 PR，恢复主干流动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-10-08）

## 1. 今日速览

过去 24 小时 LobsterAI 处于**高强度维护与清理期**：50 条 PR 更新中 49 条已合并/关闭，仅 1 条待合并（#2812），显示维护者（核心贡献者 @fisherdaddy、@alison-xx）进行了一波集中收口，处理了包括安全修复、体验优化和大量陈旧/dependabot PR。Issues 侧活跃度较低（2 条，均为持续跟进的存量问题），其中两条均已有对应修复 PR 在推进中，社区问题闭环效率较高。无新版本发布，但密集的修复合入预示着下一个 release 可能临近。

## 2. 版本发布

无新版本发布。注：大量修复今日合入 main 分支，建议关注近期 tag 动态。

## 3. 项目进展

### 安全与核心修复（今日重点）
- **[#2809](https://github.com/netease-youdao/LobsterAI/pull/2809) [CLOSED]** 修复 skills 卸载路径任意目录删除漏洞：`skills:delete` 不再信任 skill 自带 `_meta.json` 中的 `openclawSourceDir` 路径。与 [#2794](https://github.com/netease-youdao/LobsterAI/pull/2794)（同一问题由 @carfeii 提交）形成双修复，均已关闭。
- **[#2811](https://github.com/netease-youdao/LobsterAI/pull/2811) [CLOSED]** 修复 Windows 用户 QQ 对话连续三回合失败（模型目录 owner 配置被替换后硬抛错、仅重启可恢复）的问题。
- **[#2764](https://github.com/netease-youdao/LobsterAI/pull/2764) [CLOSED]** Gateway 三项策略配置（tools / trustedProxies / allowRealIpFallback）改为热重载，无需重启进程。
- **[#2680](https://github.com/netease-youdao/LobsterAI/pull/2680) [CLOSED]** 修复 OpenClaw v2026.8.1 模型策略迁移后配置被反复写入/下发的问题。
- **[#2711](https://github.com/netease-youdao/LobsterAI/pull/2711) [CLOSED]** SKILL.md frontmatter 为非法 YAML 时保留版本号，避免技能市场误报“可更新”。
- **[#908](https://github.com/netease-youdao/LobsterAI/pull/908) [CLOSED]**（存量安全 PR 今日关闭）MCP stdio 命令注入校验加固。

### 体验优化
- **[#2810](https://github.com/netease-youdao/LobsterAI/pull/2810) [CLOSED]** Cowork 场景中 agent 提问 dock 改为原地折叠，不再把回复挤出视口。
- **[#2808](https://github.com/netease-youdao/LobsterAI/pull/2808) [CLOSED]** 设置 → About 新增开源信息（GitHub 仓库、MIT License、star/fork 引导）。

### 仓库清理
- 大量陈旧 PR 被批量关闭：dependabot 依赖升级（react-dom 19.3.0 #2671、vite 8.3.0 #2669、electron 44 #1277 等）、以及 4 月起的 UI/定时任务类 PR（#1634、#1628、#1550、#1547）、第三方 OrcaRouter 集成 PR [#2504](https://github.com/netease-youdao/LobsterAI/pull/2504) 均被标记 stale 并关闭。

**整体评估**：今日在安全（2 个供应链/注入类修复）、稳定性（Windows 崩溃路径）和体验三个方向均有实质推进，同时清理了半年积压，仓库健康度明显提升。

## 4. 社区热点

- **[Issue #2793](https://github.com/netease-youdao/LobsterAI/issues/2793)**（安全）：社区报告已安装 skill 可在卸载时触发任意目录删除，仅在 main 分支存在，v0.2.4 不受影响。报告质量高（含 commit 定位与影响版本分析），且已由 #2794 / #2809 双 PR 修复关闭——**社区安全反馈闭环效率值得肯定**。
- **[Issue #2440](https://github.com/netease-youdao/LobsterAI/issues/2440)**（性能/token 浪费）：桌面端每会话首条消息重复注入约 4,425 字符系统指令（78% 与 AGENTS.md 托管区逐字重复）。该问题由维护者 @fisherdaddy 于今日提交修复 PR [#2812](https://github.com/netease-youdao/LobsterAI/pull/2812)（当前唯一 OPEN PR），说明社区对 token 成本和提示词膨胀的关注已被采纳。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#2793](https://github.com/netease-youdao/LobsterAI/issues/2793) Skill 可控元数据导致卸载时任意目录删除（main 分支，未随版本发布） | ✅ 已有 fix：#2794 / #2809 已关闭 |
| 🟡 中 | [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) 系统提示词重复注入 ~4,425 字符，浪费上下文与 token | 🔄 fix PR #2812 待合并 |
| 🟡 中 | #2811 修复的 Windows 端模型目录 owner 配置竞态导致 Agent 连续失败、需重启 | ✅ PR 已关闭 |
| 🟢 低 | #2711 SKILL.md 非法 YAML 导致版本号丢失、市场误报更新 | ✅ PR 已关闭 |

## 6. 功能请求与路线图信号

- **提示词/上下文精简**：#2812 表明团队正在系统性优化 system prompt 注入策略，减少重复，可能作为下版本卖点（“降低 token 消耗”）。
- **Gateway 运维体验**：#2764 热重载合入，暗示 Gateway 策略管理正走向免重启、可运营方向。
- **开源社区运营**：#2808 加入 star 引导，配合 MIT License 展示，释放扩大社区影响的信号——结合今日关闭的第三方 OrcaRouter PR #2504，推测官方更倾向自行掌控 provider 注册表。
- **Cowork 交互打磨**（#2810）持续投入，多 agent 协作仍是重点方向。

## 7. 用户反馈摘要

- **Windows 用户**：遇到 Agent 连续失败且 `/new` 无法恢复、只能重启应用的硬故障（#2811 背景），反映容错与自恢复能力是痛点。
- **token/成本敏感用户**：通过 trajectory 日志量化指出提示词冗余（#2440），说明存在深度使用、自我诊断能力强的技术型用户群体。
- **Skill 生态安全意识**：社区已出现对第三方 skill 包供应链安全（#2793）的审查，用户对 ClawHub 分发渠道的信任依赖官方校验机制。

## 8. 待处理积压

- **[PR #2812](https://github.com/netease-youdao/LobsterAI/pull/2812) [OPEN]**：修复 #2440 提示词重复注入，当前唯一待合并 PR，建议维护者优先 review 合入，随下版本发布。
- **[Issue #2440](https://github.com/netease-youdao/LobsterAI/issues/2440)**：自 2026-08-05 开放至今 2 个月，修复 PR 已就绪，合入后应及时关闭并验证实际 token 节省效果。
- **[Issue #2793](https://github.com/netease-youdao/LobsterAI/issues/2793)**：修复已合入 main，但**在包含修复的版本发布前，main 分支构建仍有风险**，建议尽快发布包含 #2809 的版本，并在 release notes 中说明。
- 值得注意：多个 4 月来自内部贡献者的功能性 PR（#1634、#1628、#1547 等）被 stale 关闭，若其中需求仍然成立，建议以 issue 形式重新立项，避免功能诉求随 PR 一起丢失。

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

# CoPaw 项目动态日报 — 2026-10-08

## 1. 今日速览

CoPaw（仓库名 QwenPaw）今日保持高活跃度：24 小时内 Issues 更新 16 条（新开/活跃 12、关闭 4），PR 更新 15 条（待合并 12、已合并/关闭 3），无新版本发布。当前 v2.2.2-beta.4 仍在安装验证与问题收敛阶段（[#8053](https://github.com/agentscope-ai/QwenPaw/issues/8053)），今天的新 Bug 报告主要集中在 Desktop 端（启动卡顿、设置页布局错乱、页面加载失败）和 Provider 兼容性。社区贡献pipeline健康，多个 first-time contributor 与长期 PR 处于 Under Review 状态。整体判断：项目处于 beta 收尾期，稳定性修复是主线，社区参与度高。

## 2. 版本发布

过去 24 小时无新 Release。当前最新为 v2.2.2-beta.4（Beta），Release Duty 验证 Issue [#8053](https://github.com/agentscope-ai/QwenPaw/issues/8053) 持续跟进中。

## 3. 项目进展

今日 PR 合并/关闭动态：
- **#8119（已关闭）** [fix(console): preserve drafts when pasting long text](https://github.com/agentscope-ai/QwenPaw/pull/8119) — 修复粘贴长文本覆盖草稿问题，超 1 万字符时提供“粘贴为文本/附件”选项，直接回应了 #7948 的控制台输入体验问题。
- **#8090（已关闭）** [fix(providers): recognize newer GPT token limit parameters](https://github.com/agentscope-ai/QwenPaw/pull/8090) — 使 GPT-6 系模型探测请求使用 `max_completion_tokens`，修复 400 报错，对应 Issue #8074。
- **#7867（已关闭）** [fix(console): revalidate file-area tab content on activation](https://github.com/agentscope-ai/QwenPaw/pull/7867) — 修复工作区文件缓存不刷新问题（#7866）。

值得关注的待合并大项：
- **#8121 [size/XXXL] feat(creator): release 2.0.1 with controlled media production](https://github.com/agentscope-ai/QwenPaw/pull/8121) — Creator 组件 1.3.0 → 2.0.1 大版本升级，今日新开，是当日最大体量的变更。
- 多个 BeiMu-new 提交的修复（DST 时区 #8050、skill 路径穿越安全修复 #8065、空媒体块 #8066、CJK Markdown 强调边界 #8067、技能池下载事件循环阻塞 #8055）均在评审中，属于成批的健壮性打磨。

## 4. 社区热点

- **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)（34 评论，👍 4）**：多租户版 QwenPaw Hub 已在 2.2.0 发布，官方发起“下一步做什么”的路线图讨论，今日继续活跃。这是项目从个人助手向团队化演进的关键信号，社区对多用户/管理员管理技能的诉求强烈（关联 #2324）。
- **[#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722)（7 评论）**：高质量内存耗尽分析帖，指出三条叠加的内存泄漏路径（无界流缓冲、keep-alive 实例堆叠、doom-loop 绕过限流），附受控复现与最小修复方案，今日重新活跃。
- **[#8116](https://github.com/agentscope-ai/QwenPaw/issues/8116)**：中文用户对消息队列重复投递/会话错配的抱怨（“半年了”），情绪较为强烈，反映消息可靠性是长期痛点。

## 5. Bug 与稳定性（按严重程度）

**高：**
1. **#7722** 内存三路径复合耗尽导致 OOM/挂死 — 有分析但尚无对应 fix PR 合并；相关自愈 PR [#7865](https://github.com/agentscope-ai/QwenPaw/pull/7865)（聊天流中途断连恢复）待合并。
2. **#8125** llama.cpp `has_update()` 静默回滚用户手动安装的 runtime，**第 3 次复发**；#7633 已认领但 25 天无 PR，风险在于持续破坏本地模型部署。
3. **#8116** 消息队列重复发送 + 会话归属错配，存在半年未根治。

**中：**
4. **#8115** Desktop 冷启动卡 ~11s（等待后端 14711 端口）、16–25s 降级视图、WebView2 可能静默死亡 — 尚无 fix。
5. **#8120 / #8122** 2.2.2b4 页面加载失败（多设备复现）、设置界面布局错乱 — beta 阻断级 UI 问题，尚无 fix PR。
6. **#8117** Provider `max_tokens` 超上下文拒绝未触发 Scroll 恢复 — ✅ 已有同日 fix PR [#8118](https://github.com/agentscope-ai/QwenPaw/pull/8118)（first-time contributor）。
7. **#8074（已关闭）** GPT-6 系列 400 错误 — ✅ 已由 #8090 修复。

**低：**
8. **#8123** Daily Paper 在模型输出截断时整任务失败，缺单篇重试 — 无 fix。

## 6. 功能请求与路线图信号

- **#8112**：Dream（记忆整理）调度增加 Hourly 预设与错过补跑 — 与 ReMe 记忆体系演进方向一致，实现成本低，有望进入下版本。
- **#8114（已关闭）**：推理强度/思考预算设置（针对 3.8 类“过度思考”模型）— 已处理，暗示此类控制可能在 2.2.2 正式版落地。
- **#1775（长期 open，good first issue）**：类 Codex 的 steer mode（执行中补充指令纠偏）— 尚无 PR，仍是社区期待项。
- **#2865（已关闭）**：聊天中自定义 agent 名称与头像 — 已解决，Console 个性化能力增强。
- **#7318 路线图讨论** + **PR #8121 Creator 2.0.1** 表明团队化（Hub）与内容创作（Creator）是两大主线。

## 7. 用户反馈摘要

- **痛点集中在 Desktop 端**：冷启动慢、UI 布局错乱、页面加载失败、WebView2 静默崩溃（#8115/#8120/#8122），beta 用户失望情绪明显。
- **可靠性长期欠账**：消息队列重复/错配（#8116）和 llama.cpp runtime 回滚（#8125）被用户指出“拖了数月”，损害信任。
- **正面信号**：社区愿意提交带复现步骤和修复方案的高质量报告（#7722、#8117），first-time contributor 持续产出（#8118、#7865、#7867），说明项目对开发者友好度高。
- **典型场景**：Windows 本地模型用户（llama.cpp、glm-5.3-flash 远程 LLM）、多渠道消息（中文用户为主）、GPT-6 兼容网关用户。

## 8. 待处理积压

| 条目 | 问题 | 建议 |
|---|---|---|
| [#7633 → #8125](https://github.com/agentscope-ai/QwenPaw/issues/8125) | llama.cpp 版本解析 bug 第 3 次复发，认领者 25 天无 PR | 维护者重新分配或采纳社区补丁 |
| [#8116](https://github.com/agentscope-ai/QwenPaw/issues/8116) | 消息队列问题存在半年 | 列入 2.2.2 正式版必修清单 |
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | 内存三路径复合耗尽，影响生产可用性 | 高优先级，建议与 #7865 一并排期 |
| [PR #7869](https://github.com/agentscope-ai/QwenPaw/pull/7869)（9-18 开启，Under Review 20 天） | 连接检查携带 session header | 评审加速 |
| [PR #8020](https://github.com/agentscope-ai/QwenPaw/pull/8020)（9-29 开启） | fallback 冷却机制 | 与 #8124（内容审查错误走 fallback）同属 Provider 健壮性，可协同评审 |
| [#1775](https://github.com/agentscope-ai/QwenPaw/issues/1775)（3-18 开启，good first issue 半年无人认领） | steer mode | 重新推广或由核心团队实现 |

---
*数据来源：GitHub Issues/PR 更新（24h 窗口）。项目健康度评估：活跃度高、社区贡献活跃，但 Desktop beta 稳定性与两个长期可靠性 Bug 是正式版发布前的主要风险点。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报
**日期：2026-10-08**
**仓库：[gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)**

---

## 1. 今日速览

今日 EasyClaw 呈现「低社区交互、持续版本交付」的状态：过去 24 小时内 Issues 更新为 0 条（新开/活跃/关闭均为 0），PR 更新为 0 条，无任何社区互动事件。但项目发布了新版本 **v1.9.27**，说明维护者仍在活跃推进开发，处于「静默迭代」阶段。整体活跃度评估：开发侧健康（持续发版），社区侧平静（可能因发布节奏快，问题已被快速消化，或社区讨论转移到其他渠道）。

---

## 2. 版本发布

### TK Copilot v1.9.27
- **Release 链接**：[v1.9.27](https://github.com/gaoyangz77/easyclaw/releases)
- **更新内容**：
  - 在正式版（release builds）中启用工作区标签页（workspace tabs），并恢复评价管理（review management）设置
  - 更新工作区与达人联盟（Affiliate）流程的教程文档
- **破坏性变更**：无，本次为功能补齐与文档更新，属小版本迭代
- **迁移注意事项**：
  - macOS 用户升级后如遇 **"'RivonClaw' is damaged and can't be opened"** 提示，请参照 Release 页面的安装说明处理（通常为 Gatekeeper 签名问题，需执行 `xattr` 清除隔离属性）
  - 此前在测试版中使用的评价管理设置将在本版本恢复，无需手动重新配置

**亮点解读**：将工作区标签从测试通道下放到正式版，意味着该功能已通过验证，工作区（Workspace）能力成为产品的正式组成部分，是本版本最重要的信号。

---

## 3. 项目进展

今日无 PR 合并/关闭记录（0 条），项目的向前推进主要体现在 v1.9.27 的发布上：

- **功能补齐**：工作区标签页正式版化，多工作区并行操作能力对全体用户开放
- **设置恢复**：评价管理设置的回归修复，提升版本升级后的用户配置连续性
- **文档同步**：工作区与达人联盟教程更新，降低新功能上手门槛，对内容/电商场景用户有直接帮助

---

## 4. 社区热点

今日无活跃 Issues 或 PRs（更新数为 0），无社区热点可分析。

---

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题（Issues 0 条）。值得注意的是，本版本本身包含一项修复性质变更——恢复评价管理设置，可视为对近期版本中该设置丢失问题的修复，且已随 v1.9.27 发布，无需额外 fix PR。

---

## 6. 功能请求与路线图信号

今日无新功能请求。从 v1.9.27 的变更可推断近期路线图方向：

- **工作区（Workspace）深化**：标签页正式版化 + 教程更新，预计后续版本将围绕工作区持续打磨（如更多标签管理、跨工作区数据联动）
- **达人联盟（Affiliate）流程完善**：教程更新暗示该工作流是当前运营重点，后续可能有配套功能迭代

---

## 7. 用户反馈摘要

今日 Issues 评论为空，无法提炼用户反馈。间接信号：Release 说明中保留的 macOS "damaged" 安装提示，说明该问题是 macOS 用户的持续性高频痛点，建议维护者考虑自动化签名公证（notarization）以根治此体验问题。

---

## 8. 待处理积压

今日数据中无 Issues/PRs 记录，暂无法识别长期未响应的积压项。建议：

- 维护者关注 macOS 应用签名/公证问题，减少 Release 页面的手工排障说明依赖
- 若连续多日社区互动为 0，可考虑在 README 或 Release 中引导用户至 Issue 模板反馈，避免反馈流失到站外渠道

---

**健康度总结**：⭐⭐⭐⭐（4/5）—— 发版节奏稳定（v1.9.27），功能持续下放正式版；社区互动为零是今日唯一需持续观察的指标。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*