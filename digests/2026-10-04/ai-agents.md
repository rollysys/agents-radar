# OpenClaw 生态日报 2026-10-04

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-04 04:53 UTC

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

# OpenClaw 项目动态日报 — 2026-10-04

---

## 1. 今日速览

OpenClaw 今日保持高度活跃：过去 24 小时内 Issues 更新 500 条（新开/活跃 358，关闭 142），PR 更新 500 条（待合并 299，合并/关闭 201），社区参与度和维护者吞吐量均处于高位。今日无新版本 Release，但围绕 **2026.9.8（昨日发布）** 的升级可靠性问题出现集中反馈，更新/回滚链路成为当前最热的议题。会话状态（session-state）、消息投递与 Gateway 内存/CPU 稳定性是三大核心痛点类别。多位核心维护者（@steipete、@shakkernerd 等）今日密集提交修复，多个 P1 级 PR 已进入"ready for maintainer look"状态，整体项目健康度良好但 9.8 版本升级路径仍需观察。

---

## 2. 版本发布

今日无新 Release。（注：2026.9.8 于 2026-10-03 发布，其遗留问题详见第 5 节。）

---

## 3. 项目进展

今日合并/关闭的 201 个 PR 中，代表性进展如下：

- **#164766**（已关闭）[fix: keep saved-draft recovery out of view-only subagent chats](https://github.com/openclaw/openclaw/pull/164766)：修复 Web UI 中只读子代理会话错误显示草稿恢复面板（含可用的 Restore/Delete 按钮）的 UI 越权问题。
- **#164577**（已关闭）[refactor(ui): deslop control UI](https://github.com/openclaw/openclaw/pull/164577)：XL 级控制面板清理，移除冗余视图投影与转发层，为后续 UI 迭代减负。
- **#133215**（已关闭）[fix(daemon): install gateway LaunchAgent on boot volume](https://github.com/openclaw/openclaw/pull/133215)：修复 macOS 外置账户主目录下 LaunchAgent plist 被拒绝加载的问题，提升 macOS 部署可靠性。
- **#127775**（已关闭）[fix: preserve requester-scoped memory in system-agent turns](https://github.com/openclaw/openclaw/pull/127775)：修复系统代理回合丢失请求方 scoped memory 的问题。

**待合并的重要候选（今日新开或活跃）：**

- **#164512** [fix(history): repair retained transcript ownership through Doctor](https://github.com/openclaw/openclaw/pull/164512)（XL，P2）：修复 `chat.history` 旧版 request-key 适配器将 `global` 与 `agent:research:global` 等不同合法键误判相等导致的 transcript 所有权混乱，并提供 Doctor 修复路径。
- **#164501** [feat: add versioned upgrade recipes](https://github.com/openclaw/openclaw/pull/164501)（XL，P2）：引入带认证的版本化升级方案，目标是解决老安装无法在不丢失 owner、不重放已完成副作用的前提下中断恢复升级——直接回应当前升级可靠性危机。
- **#164682** [fix(gateway): keep chat admission responsive](https://github.com/openclaw/openclaw/pull/164682)（XL，P1）：修复首轮对话在 session-store admission 上阻塞 Gateway 的问题，与 #160386 的 SQLite I/O 压力问题相关。
- **#164558** [feat(plugins): let tools deliver finished reply without a second model turn](https://github.com/openclaw/openclaw/pull/164558)：允许插件工具直接投递最终回复，省去一次模型回合——在 Telegram 场景下可显著降低延迟与 token 成本。
- **#164769** [fix(update): complete package swap on EXDEV](https://github.com/openclaw/openclaw/pull/164769)：解决 Docker OverlayFS 下 npm 全局更新因 `EXDEV` 回滚的问题。
- **#164723** [fix(copilot): anchor pooled tool handlers to async scope](https://github.com/openclaw/openclaw/pull/164723)：修复 Copilot 提供方代理第二回合起所有工具调用报 `Async work scope is closed` 的关键 Bug。

**整体评估**：今日 PR 活动明显偏向**升级/回滚可靠性、session-state 所有权修复、Gateway 响应性**三条主线，与近期 Issues 反馈高度对齐，项目正朝稳定 2026.9.x 系列推进。

---

## 4. 社区热点

| Issue | 评论 | 状态 | 主题 |
|---|---|---|---|
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 22 | OPEN, P1 | 同步式 agent 持久化/transcript 维护在规模化时阻塞 Gateway 事件循环；部分修复（#140231、#138984）已落地，持续跟踪中 |
| [#137332](https://github.com/openclaw/openclaw/issues/137332) | 21 | CLOSED | 混合终端 requester-settle 批次因所有权检查失败无限重试（回归类，已关闭） |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 17 | OPEN, P1 | hook/工具子进程未被 reap，僵尸进程累积导致运行时劣化 |
| [#150635](https://github.com/openclaw/openclaw/issues/150635) | 15 | OPEN, P2 | 短期记忆 recall 每晚驱逐已召回条目，"dreaming deep phase" 永远无法晋升——记忆系统机制问题引发产品决策讨论 |
| [#159612](https://github.com/openclaw/openclaw/issues/159612) | 14 | OPEN, **P0** | 子代理结算无限重试："owner changed before settlement" 每回合重注入结果（QQ Bot 渠道，release blocker） |
| [#110190](https://github.com/openclaw/openclaw/issues/110190) | 13 | CLOSED | 运行时上下文载体（~15K 字符）置于用户消息之后导致模型混乱与推理 token 浪费 |
| [#145252](https://github.com/openclaw/openclaw/issues/145252) | 13 | OPEN, **P0** | 维护者协调 Issue：2026.9.3/9.4 升级、回滚与恢复可靠性追踪 |

**背后诉求分析**：讨论热度最高的问题集中在三类——(1) **子代理结算/所有权状态机**（#137332、#159612、#121187），多代理用户深受消息重复注入之苦；(2) **Gateway 资源与性能**（#119720、#97616、#154812）；(3) **升级可靠性**（#145252、#157818、#164066），生产环境用户对更新失败/回滚高度敏感。

---

## 5. Bug 与稳定性（按严重程度）

### P0 / Release Blocker

- **#164396** [2026.9.8 全新 Win11 + Node 22 LTS 安装后无法连接本地 Gateway](https://github.com/openclaw/openclaw/issues/164396) — 昨日新开，crash 类，**尚无 fix PR**，属最新版本的安装阻断问题。
- **#164066** [2026.9.8 托管更新仍回滚："undergoing offline maintenance"](https://github.com/openclaw/openclaw/issues/164066) — 修复（#160671、#163803）仅在 main，未随 9.8 发布；关联 #164501/#164769 正在推进。
- **#159612** 子代理结算无限重试（P0）— 标记 needs-live-repro，尚无直接 fix PR。
- **#160386** 2026.9.6 大型会话库导致严重 SQLite I/O 压力、WebUI RPC 超时（回归）— 相关修复方向见 #164682。
- **#154812** Gateway V8 堆外 RSS 失控致 OOM（9.32 GiB RSS、~15 GiB 主机被压垮）— needs-info 状态。
- **#157818** 2026.9.4 → 9.6 npm 更新因旧驱动 300s 硬性上限 doctor-failed。

### P1

- **#161379** Gateway 永久占满一个 CPU 核：OpenAI live catalog TTL(60s) < 每 agent 刷新耗时，prepared catalog 刷新死循环（回归）。
- **#162031**（已关闭）2026.9.7 Gateway 在 runtime tool assembly 阶段以 `Unhandled promise rejection: undefined` 崩溃循环。
- **#161976** WhatsApp DM 回复在重启后于 durable registry handoff 反复失败（needs-security-review）。
- **#123354** Matrix E2EE 在正常 Megolm 会话轮换后停止解密。
- **#164723**（PR，OPEN）Copilot 后端第二回合起工具全挂 — fix PR 已提交待合并。

### 安全相关

- **#117956**（已关闭）claude-cli 后端在 `CLAUDE_CLI_CLEAR_ENV` 清除密钥后仍产生计量 API 用量，单日 **~13.7M tokens 计费**；同类风险见 #119009（重试循环计费 $204，已关闭）与 #142271（secret egress proxy 下 cron exec 失败，OPEN）。

---

## 6. 功能请求与路线图信号

- **记忆系统演进**：[#150635](https://github.com/openclaw/openclaw/issues/150635)（recall 驱逐与 dreaming 晋升机制）、[#101422](https://github.com/openclaw/openclaw/issues/101422)（可配置 recall 资格与索引排除路径，已有 linked PR）表明记忆子系统正在酝酿架构级调整。
- **升级框架化**：[#164501 versioned upgrade recipes](https://github.com/openclaw/openclaw/pull/164501) 是明确的路线图信号——升级从脚本走向带版本、可恢复的 recipe 机制，很可能进入下一版本。
- **工具直投回复**：[#164558](https://github.com/openclaw/openclaw/pull/164558) 工具跳过第二次模型回合，是成本/延迟优化的重要方向。
- **Cron 子系统**：[#120244 RFC: 维护窗口与角色隔离](https://github.com/openclaw/openclaw/issues/120244)、[#164719](https://github.com/openclaw/openclaw/pull/164719)（后台命令完成回到原会话）持续完善定时任务语义。
- **插件可观测性**：[#87362](https://github.com/openclaw/openclaw/issues/87362)（task flow 生命周期 hook 事件，已 stale 关闭）与 [#81595](https://github.com/openclaw/openclaw/issues/81595)（per-MCP-server sub-spans）反映生态作者对可观测性的持续需求，尚未有对应实现。

---

## 7. 用户反馈摘要

- **痛点集中在多代理与长会话场景**：子代理结果重复注入（#159612）、消息丢失（#121187、#161976）、transcript 双重渲染（#123792）多发生在 7+ agent、长 transcript 的重度部署中。
- **升级焦虑显著**：多个 Issue（#157818、#164066、#123799）来自生产环境运维者，明确表达"宁可停留在旧版也不敢升级"的心态，请求 backport/安全升级指引。
- **成本敏感**：#117956（$13.7M tokens/日）与 #119009（$204）等计费事故类报告说明部分用户以 API 计费方式运行，对重试循环失控零容忍。
- **正面反馈**：#95601 一位 VoiceOver 用户感谢 v2026.6.9 的无障碍改进（模型选择器旁的用量展示），无障碍持续被关注；#112696 关闭前也记录了 UI 多代理回归被逐项修复的过程。
- **渠道生态广泛**：问题覆盖 QQ Bot、WhatsApp、Telegram、Matrix、Discord、iOS/Android/macOS 客户端，用户基数和部署形态多样。

---

## 8. 待处理积压

| 条目 | 状态 | 呼吁 |
|---|---|---|
| [#150635](https://github.com/openclaw/openclaw/issues/150635) 记忆 recall 每晚驱逐（P2，15 评论） | OPEN，needs-product-decision | 记忆系统核心机制问题，需产品决策 |
| [#112638](https://github.com/openclaw/openclaw/issues/112638) session.maintenance enforce 模式无法约束存储上限（thread/channel 条目豁免回收） | OPEN，有 linked PR | 磁盘无界增长风险 |
| [#121617](https://github.com/openclaw/openclaw/issues/121617) 压缩守卫误判"无可压缩"为终态失败（P0） | OPEN，有 linked PR | release blocker |
| [#118885](https://github.com/openclaw/openclaw/issues/118885) 大型 SQLite 启动重复完整性检查 | OPEN，bulk-fileed | 影响启动时长 |
| [#142271](https://github.com/openclaw/openclaw/issues/142271) secret egress proxy 阻断 cron CLI exec（P1，security） | OPEN | 安全与功能冲突 |
| [#164396](https://github.com/openclaw/openclaw/issues/164396) 9.8 全新安装无法连 Gateway（P0，昨日新开） | OPEN，**无 fix PR** | 最新版本阻断，建议优先 |
| 多个 stale PR：#140793、#140760、#140277、#138344、#132409 等（多数标记 "ready for maintainer look"） | OPEN，stale | 大量已备好证明的社区 PR 长期待审，建议维护者集中清审 |

**总体判断**：项目处理量大（日关闭 142 Issues / 201 PR），但 2026.9.7–9.8 连续版本暴露的升级可靠性问题尚未闭环（#164501、#164769 均未合并），且 P0 积压（#159612、#164396 等）仍需维护者投入；社区贡献 PR 的审核积压值得安排专项清审。

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告

**报告日期：2026-10-04 | 数据窗口：过去 24 小时**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态呈现明显的**头部集中、长尾沉默**格局：OpenClaw 以单日 500+ Issue / 500+ PR 更新占据绝对核心地位，NanoBot、Zeroclaw、Hermes Agent、NanoClaw 构成活跃第二梯队（日均 30-50 条动态），而 PicoClaw、LobsterAI 等项目活跃度低位徘徊，TinyClaw、Moltis、IronClaw 等 6 个项目当日零活动。生态竞争焦点已从“功能堆叠”转向**可靠性深水区**——升级/回滚安全、会话状态管理、多代理结算正确性、Gateway 资源稳定性成为头部项目的共同主战场。移动端、多消息渠道（QQ/微信/Telegram/Discord/Matrix）和本地/边缘模型支持则体现了用户群体的多元化。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | 合并/关闭 | Release | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（新开/活跃 358，关 142） | 500（待合并 299，关 201） | 201 PR / 142 Issue | 无（9.8 昨日发布） | ⭐⭐⭐⭐ 高吞吐但升级可靠性危机未闭环，2 个 P0 无 fix PR |
| **Zeroclaw** | 47（40 开，关 7） | 50（待合并 49，合并 1） | 1 PR | 无 | ⭐⭐⭐ 活跃但审查带宽告警，合并率 2% |
| **Hermes Agent** | 50（42 开，关 8） | 50（待合并 44，合并 6） | 6 PR / 8 Issue | 无 | ⭐⭐⭐ 新开 42 vs 关闭 8 严重失衡，2 个 P0 无 fix |
| **NanoBot** | 2（新开） | 47（待合并 26，关 21） | 21 PR | 无 | ⭐⭐⭐⭐ Bug 响应率极高，几乎每个问题当日有 fix PR |
| **NanoClaw** | 7（4 开 3 关） | 33（待合并 20，关 13） | 13 PR | 无 | ⭐⭐⭐⭐ 维护者当日闭环高危问题，安全响应快 |
| **CoPaw** | 5（4 开 1 关） | 7（全部待合并） | 0 | 无 | ⭐⭐⭐ 推进稳定但 7 PR 零合并，评审积压 |
| **NullClaw** | 0 | 20（全部待合并，集中于昨日批量更新） | 0 | 无 | ⭐⭐ 单人维护（bus factor 风险高），20 PR 积压 3-4 个月 |
| **LobsterAI** | 6（全部 stale 触发） | 1（待合并） | 0 | 无 | ⭐ 反馈积压 6 个月，维护者响应率下滑 |
| **PicoClaw** | 1 | 0 | 0 | 无 | ⭐ 单一 QQ 通道 Issue 滞留且标 stale |
| **IronClaw / TinyClaw / Moltis / ZeptoClaw / EasyClaw** | 0 | 0 | 0 | 无 | — 当日零活动 |

---

## 3. OpenClaw 在生态中的定位

**社区规模**：OpenClaw 的动态量级是第二梯队的 **10 倍以上**（500 vs 30-50），是唯一具备完整维护者梯队（@steipete、@shakkernerd 等多人）和严格分诊体系（P0-P2、needs-live-repro、bulk-filed 标签）的项目。渠道生态覆盖最广（QQ Bot、WhatsApp、Telegram、Matrix、Discord、iOS/Android/macOS 客户端），用户基数与部署形态多样性无可匹敌。

**技术路线差异**：
- 相比 **Zeroclaw**（Rust 系、v0.8.6→v0.9.0 gateway 分离架构演进、ZeroCode TUI 配置体验），OpenClaw 更侧重 Web UI 与消息渠道生态
- 相比 **NanoClaw/CoPaw** 的轻量自托管定位，OpenClaw 面向重度多代理（7+ agent）与生产环境部署
- 相比 **NullClaw** 的单人本地终端体验路线，OpenClaw 是社区驱动的大规模协作项目

**优势与短板**：
- ✅ 优势：渠道最全、维护吞吐最高、Doctor 修复工具链、升级框架化（#164501 versioned upgrade recipes）路线明确
- ⚠️ 短板：连续 9.7-9.8 版本暴露升级可靠性问题（#164396 全新安装无法连 Gateway、#164066 修复仅在 main 未随版发布），已引发生产用户“不敢升级”信任危机；僵尸进程（#97616）、Gateway OOM（#154812）等长尾 P0 未闭环。相比之下 **NanoBot/NanoClaw 虽体量小，issue→fix 闭环速度反而更快**。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **升级/回滚可靠性** | OpenClaw（#145252、#164501）、NanoClaw（#4003 回滚删数据、#4016 cutover 崩溃）、Hermes（#123238 砖化）、Zeroclaw（#8310 Schema V4 迁移） | 生态级痛点：生产用户宁可停留旧版也不敢升级；要求版本化 recipe、可恢复中断升级、回滚不丢数据 |
| **会话状态与多代理结算** | OpenClaw（#159612 无限重试、#137332）、Hermes（#116849 中断工具调用恢复）、CoPaw（#8095 跨代理消息归属）、NanoBot（#5985 子代理管理） | 子代理结果重复注入、所有权错乱、结算状态机是所有多代理项目的共性深坑 |
| **消息渠道适配** | PicoClaw（#3394 QQ 接口失效）、NullClaw（#963 微信 iLink）、Hermes（#50044 微信扫码）、CoPaw（#7535 Matrix/OIDC）、NanoBot（#5914 Napcat） | 第三方平台接口演进快，适配层跟不上是普遍问题；中文生态（QQ/微信）需求突出 |
| **SQLite/存储层压力** | OpenClaw（#160386、#118885）、Zeroclaw（#11420 时间戳覆盖）、LobsterAI（#879 外键级联失效） | 长会话、大会话库导致 I/O 压力、启动缓慢、数据膨胀 |
| **静默失败治理** | CoPaw（#8092/#8093/#8096）、NanoClaw（#3223 任务静默丢失）、Zeroclaw（#11478 图片静默截断） | 用户宁可明确报错也不要“看起来正常”；错误分类应触发 fallback 而非终止 |
| **后台任务噪音抑制** | NanoBot（#6029 压缩广播污染频道）、Zeroclaw（#11416 Slack 状态消失，反向诉求） | 后台维护静默执行 vs agent 存活可感知，需要配置化平衡 |
| **本地/边缘模型支持** | NanoClaw（#3643 30 分钟硬上限冷杀本地模型、树莓派 PR）、Zeroclaw（#11484 MLX-LM 4B 模型）、Hermes（#132585 tok/s 指标） | 本地推理用户是重要群体：回合时长长、模型能力弱，需要可配置超时与更强工具调用防护 |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Zeroclaw | Hermes Agent | NanoBot | NanoClaw | NullClaw | CoPaw |
|---|---|---|---|---|---|---|---|
| **功能侧重** | 全渠道重度多代理平台 | TUI 配置体验 + 网关架构演进 | 跨 gateway 协作、架构瘦身 | 移动端 WebUI + 技能记忆 | 升级链路加固 + 边缘设备 | 本地终端/CLI 体验 | 企业级 fallback 与多模态 |
| **目标用户** | 生产环境重度运维者 | 终端/SSH 重度用户 | 7x24 常驻 Agent 用户 | 移动端个人用户 | 自托管/树莓派用户 | Android/Termux 本地玩家 | 自托管企业多代理平台 |
| **技术架构** | TS/Node，Gateway+WebUI | Rust，runtime/gateway 分离（v0.9.0 路线） | Python，gateway+Desktop | WebUI+TUI+MCP | Node/容器化 | 零分配 C 风格 CLI | runtime/provider 分层 |

关键洞察：生态已从同质化竞争进入**场景垂直化**——Zeroclaw 押注配置可观测性（“保存 vs 应用”账本），NanoClaw 卡位边缘设备，NullClaw 坚守本地终端，CoPaw 主攻企业 fallback 策略。

---

## 6. 社区热度与成熟度分层

**快速迭代期**（新问题多、修复快、功能扩张）：
- **NanoBot**：一日合并 4 个移动端 PR，长线 PR（#1651 技能记忆）持续推进
- **NanoClaw**：issue→fix 当日闭环，安全响应快

**规模扩张阵痛期**（活跃度高但质量债累积）：
- **OpenClaw**：吞吐最高，但升级可靠性危机 + 大量 "ready for maintainer look" 社区 PR 待审
- **Hermes Agent**：新开 42 vs 关闭 8，积压压力显著
- **Zeroclaw**：49 PR 待合并、堆叠依赖深，处于“批量审查窗口期”

**质量巩固期/低活跃**：
- **CoPaw**：推进稳定但评审积压；**NullClaw**：单人开发、bus factor 风险；**LobsterAI / PicoClaw**：反馈积压 6 个月+，社区信任流失中；其余 5 个项目接近静默

---

## 7. 值得关注的趋势信号

1. **升级可靠性成为生态分水岭**：OpenClaw 的 #164501（versioned upgrade recipes）与 NanoClaw 的当日修复显示，“升级即风险”是用户流失的头号原因。**对开发者的启示**：升级框架化（版本化、可中断恢复、不重放副作用）应作为基础设施提前设计，而非事后补救。

2. **静默失败零容忍**：跨项目最一致的用户诉求——“宁可报错也不要看起来正常”。错误分类驱动 fallback（CoPaw #8092）、截断暴露（#8096）、启动死锁可诊断（#8094）指向**可观测性是下一个竞争维度**。

3. **多代理状态机是共性技术深坑**：结算所有权、跨代理消息归属、中断恢复（OpenClaw/Hermes/CoPaw/NanoBot 同时踩坑），建议后来者优先投入状态机形式化验证与回归测试。

4. **本地/边缘模型用户崛起**：MLX-LM、无 RTC 树莓派、30 分钟长回合——本地推理群体的需求（可配置超时、弱模型防护）与云端用户显著分化，产品需双轨支持。

5. **中文消息生态是刚需市场**：QQ、微信、Napcat 接入需求横跨 5 个项目，且适配滞后是普遍痛点（PicoClaw 因此濒临流失用户群），是差异化机会点。

6. **社区健康 = 维护者带宽**：当日最健康的两个项目（NanoBot/NanoClaw）共同特征是 issue→fix 响应 ≤1 天；而 LobsterAI、NullClaw 证明功能再好，响应停滞即信任崩塌。**建议每个项目建立 PR 清审 SLA 与首贡献者快速通道**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-10-04

## 1. 今日速览

NanoBot 今日保持高活跃度：过去 24 小时 PR 动态达 47 条（待合并 26 条，已合并/关闭 21 条），Issue 更新 2 条（均为新开，尚无关闭）。开发重心集中在 **WebUI 移动端体验、TUI 稳定性修复、MCP 兼容性改进**三大方向，多个长周期 PR（如 #1651 技能记忆、#5640 移动键盘输入）出现更新，显示核心功能线持续推进。今日无新版本发布，但 PR 合并节奏健康，整体处于活跃迭代期。

## 2. 版本发布

今日无新版本发布。建议关注待合并的 P0/P1 级 PR（见第 5 节），它们可能是下个版本的核心内容。

## 3. 项目进展

今日共 21 条 PR 合并/关闭，重要进展包括：

**WebUI 移动端体验成批落地（@Re-bin）：**
- [PR #6023](https://github.com/HKUDS/nanobot/pull/6023) 放大触屏设备预览控件，符合触控目标规范，桌面端密度不变
- [PR #6022](https://github.com/HKUDS/nanobot/pull/6022) 适配 iOS 键盘弹出时的可视视口，保持导航/输入框可见
- [PR #6021](https://github.com/HKUDS/nanobot/pull/6021) 隐藏不可用的网站预览操作，修复移动 Safari 覆盖会话的问题
- [PR #5640](https://github.com/HKUDS/nanobot/pull/5640)（9 月开起的长线 PR）移动端键盘输入与流式发送，今日合并

**API 健壮性：**
- [PR #5763](https://github.com/HKUDS/nanobot/pull/5763) 多模态字段类型错误改为返回 400 而非 500，区分客户端错误与超大文件（413）

**长期 PR 活跃：**
- [PR #1651](https://github.com/HKUDS/nanobot/pull/1651)（3 月开启）技能记忆层 `SKILLS.jsonl` + 查询感知检索，今日更新
- [PR #5985](https://github.com/HKUDS/nanobot/pull/5985) 子代理（subagent）会话级任务管理与取消，持续迭代

整体看，移动端 WebUI 短板正在被系统性补齐，一日内 4 个相关 PR 合并/关闭，进展显著。

## 4. 社区热点

- [Issue #6029](https://github.com/HKUDS/nanobot/issues/6029)（新开）：后台空闲压缩（idleCompactAfterMinutes）和 dream/heartbeat 周期会触发上下文压缩并广播"Compressing context…"到活动频道，干扰正常使用。诉求：**后台维护应静默执行**。尚无 fix PR，建议关注。
- [PR #6030](https://github.com/HKUDS/nanobot/pull/6030)（新开）：响应 [Issue #6024](https://github.com/HKUDS/nanobot/issues/6024)，修复 CLI App 丢弃 `XDG_RUNTIME_DIR` 导致 GNOME/Wayland 下无法发现已打开 Obsidian 的问题。Issue→PR 当日响应，社区响应链健康。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 状态 |
|---|---|---|
| **P0** | [PR #6026](https://github.com/HKUDS/nanobot/pull/6026) TUI 发送失败时队列中提示词（含附件）丢失 | ✅ 已有 fix PR（含回归测试） |
| **P1** | [PR #5922](https://github.com/HKUDS/nanobot/pull/5922) cron 使用 UTC 偏移而非本地时区规则，夏令时切换会导致任务早/晚 1 小时执行 | ✅ 已有 fix PR |
| **P2** | [Issue #6029](https://github.com/HKUDS/nanobot/issues/6029) 后台维护周期广播状态污染活动频道 | ❌ 暂无 fix PR |
| **P2** | [Issue #6024](https://github.com/HKUDS/nanobot/issues/6024) CLI App 在 nanobot 下找不到 Obsidian | ✅ [PR #6030](https://github.com/HKUDS/nanobot/pull/6030) |
| **P2** | [PR #6027](https://github.com/HKUDS/nanobot/pull/6027) 文件编辑事件逆序合并导致 diff 覆盖 | ✅ 已有 fix PR |
| **P2** | [PR #6025](https://github.com/HKUDS/nanobot/pull/6025) Kitty 键盘 Enter 无法提交提示词 | ✅ 已有 fix PR |
| **P2** | [PR #6018](https://github.com/HKUDS/nanobot/pull/6018) / [PR #6019](https://github.com/HKUDS/nanobot/pull/6019) MCP 资源/提示词分页遗漏、无工具能力服务器连接失败 | ✅ 已有 fix PR |
| **P2** | [PR #6020](https://github.com/HKUDS/nanobot/pull/6020) OpenAI SDK 3.8.0 下 `async_` 字段未按别名序列化 | ✅ 已有 fix PR |
| **P2** | [PR #6011](https://github.com/HKUDS/nanobot/pull/6011) Codex 图像生成缓冲式请求可能丢弃已生成图片 | ✅ 已有 fix PR |
| — | [PR #6013](https://github.com/HKUDS/nanobot/pull/6013) 枚举校验中 `True`/`1`、`0`/`false` 混淆 | ✅ 已有 fix PR |

Bug 响应率很高：今日新增问题绝大多数已有配套 fix PR，且普遍附带回归测试。

## 6. 功能请求与路线图信号

- **静默后台维护**（Issue #6029）：用户需要“无声上下文压缩”与抑制频道广播的配置项，属合理配置化需求，预计会以配置开关形式实现。
- **技能记忆层**（[PR #1651](https://github.com/HKUDS/nanobot/pull/1651)）：7 个月长线 PR 今日更新，说明维护者仍在推进，可能进入下个版本的记忆系统增强。
- **子代理体系**（[PR #5985](https://github.com/HKUDS/nanobot/pull/5985)）：会话级子代理创建/消息/取消，是多代理能力的重要补全，近期频繁更新，纳入下版本可能性高。
- **移动端 WebUI**：#5640 已合并，加上今日三个移动端修复，移动端一等公民化是明确的路线方向。

## 7. 用户反馈摘要

- **场景**：Linux 桌面（GNOME/Wayland）用户将 Obsidian 等 CLI 集成进 nanobot 工作流，遇到环境变量传递问题（#6024），反映真实的多应用编排需求。
- **痛点**：后台自动化任务（空闲压缩、dream 循环）在用户活跃频道产生噪音（#6029），说明“通知打扰”是自动化助手的普遍敏感点。
- **积极信号**：移动端用户大量使用 WebUI（触屏键盘、Safari 预览、移动发送），相关修复密集落地，暗示移动用户群体增长。

## 8. 待处理积压

- [PR #1651](https://github.com/HKUDS/nanobot/pull/1651)（2026-03-07 开启，已 7 个月未合并）：技能记忆层，功能价值高但体量大，建议维护者明确合并计划或拆分。
- [PR #5914](https://github.com/HKUDS/nanobot/pull/5914)（09-25）：Napcat 图片非数字 file_size 被误拒，涉及渠道用户，待 review。
- [PR #5764](https://github.com/HKUDS/nanobot/pull/5764)（09-14）：FallbackProvider 半开探针并发问题，影响故障恢复正确性，已 20 天待合并。
- [PR #5985](https://github.com/HKUDS/nanobot/pull/5985)（09-30）：子代理特性，建议尽快排期 review。
- 两条新 Issue（#6029、#6024）均无官方回复，#6029 尚无对应 PR，建议维护者认领。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 · 2026-10-04

## 1. 今日速览

Zeroclaw 今日保持高活跃度：过去 24 小时 Issues 更新 47 条（新开/活跃 40，关闭 7），PR 更新 50 条（待合并 49，合并/关闭 1），无新版本发布。社区焦点集中在两条主线：**ZeroCode TUI 配置体验的大规模重构**（@Audacity88 连发多个堆叠 PR）以及 **v0.8.6 / v0.9.0 路线图追踪**。合并节奏明显偏慢（仅 1 条 PR 合并/关闭），大量 PR 处于堆叠审查阶段，显示项目正处在一个“批量审查窗口期”，短期合并吞吐量承压。新报告的 Bug 中包含多个 P1 级问题（图像截断、SQLite 时间戳覆盖、macOS 沙箱失效），值得维护者优先关注。

---

## 2. 版本发布

今日无新版本发布。当前追踪中的目标版本为 **v0.8.6**（Phase 2 runtime 收尾）与 **v0.9.0**（Phase 3 gateway 分离），详见 [Issue #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)。

---

## 3. 项目进展

今日仅 1 条 PR 合并/关闭，整体推进以“新开 PR 备战审查”为主：

- **合并极少，但 PR 管线非常饱满**：49 条 PR 待合并，其中大量为近期提交的 ZeroCode 配置相关改进（见下）。项目实际进展主要体现在 PR 储备与 Issue 推进上。
- **Issue 关闭 7 条**，包括：
  - [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) CI 缓存与关键路径优化（长期 CI 提速工作收尾）
  - [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) Windows 下 `RpcDispatcher::process_line` 栈溢出修复
  - [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) zerocode 启动目录回归（第二次回归，已关闭但需警惕复发）
  - [#10701](https://github.com/zeroclaw-labs/zeroclaw/issues/10701) 兼容 provider 图片消息历史缓存失效修复（PR #10623 已合）
  - [#10662](https://github.com/zeroclaw-labs/zeroclaw/issues/10662) Anthropic OAuth 缓存断点问题
  - [#10293](https://github.com/zeroclaw-labs/zeroclaw/issues/10293) `sessions_send` 生命周期语义定义
- **结构性进展信号**：[#10876](https://github.com/zeroclaw-labs/zeroclaw/issues/10876) 更新显示 gateway/RPC 共享入站认证状态已通过 #11202 交付，剩余 CLI 发布与文档部分。

**评估**：功能面在持续前进（配置应用账本、ZeroCode 配置 UX、安全修复），但今日 1/50 的合并率表明审查带宽是当前瓶颈。

---

## 4. 社区热点

1. **[#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)**（14 评论）— 并行运行时门控下运行时写入的可执行测试夹具加固。测试基础设施持续吸引大量讨论，反映项目对测试并行化/可靠性改造的投入深度。
2. **[#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108)**（9 评论，已关闭）— CI 提速（15-20 分钟 → 目标更快）。贡献者对 CI 等待时间的痛点长期存在，此次收尾是重要里程碑。
3. **[#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734)**（8 评论，已关闭）— Windows nextest 真实栈溢出（0xc00000fd），暴露 2MB 栈守卫临界问题，驱动了对深层调用栈的审查。
4. **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)**（5 评论）— v0.8.6/v0.9.0 交付追踪器，路线图的唯一事实来源，持续活跃。
5. **[#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387)**（5 评论，已关闭）— zerocode cwd 回归**第二次复发**，用户 @singlerider 报告，凸显该路径缺乏回归测试覆盖的诉求。

---

## 5. Bug 与稳定性（按严重度）

| 严重度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| S1 (P1) | [#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536) | macOS Seatbelt 沙箱忽略 `allowed_roots`，shell 命令报 `Operation not permitted`，**工作流被阻断** | 进行中（status:in-progress） |
| S1 (P1) | [#11478](https://github.com/zeroclaw-labs/zeroclaw/issues/11478) | >64KB 图片在 provider 请求中被静默截断，模型只能看到图片顶部；Matrix/Telegram 均复现 | ❌ 需复现（r:needs-repro） |
| S1 (P1) | [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) | ZeroCode "Copy" 按钮完全失效 | ❌ 需复现 |
| S2 (P1) | [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | SQLite 会话后端每轮重写全部消息并覆盖 `created_at`，逐条时间戳丢失 | ❌ 暂无 |
| S2 (P1) | [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) | zerocode cwd 回归（#10609 的回归），已关闭 | ✅ 已关闭（建议补回归测试） |
| S2 (P1) | [#10876](https://github.com/zeroclaw-labs/zeroclaw/issues/10876) | gateway 认证配置写入后报已保存但未达 RPC 授权方直至 daemon 重载 | 🟡 部分交付（#11202） |
| S2 (P2) | [#11371](https://github.com/zeroclaw-labs/zeroclaw/issues/11371) | MCP 嵌套对象参数被序列化为字符串后传给工具 | 🟡 相关 PR [#11479](https://github.com/zeroclaw-labs/zeroclaw/pull/11479) 进行中 |
| S2 (P2) | [#11484](https://github.com/zeroclaw-labs/zeroclaw/issues/11484) | ZeroCode Agent turns 禁用重复工具防护，小模型（4B via MLX-LM）反复调用同一 URL | ❌ in-progress |
| S2 (P2) | [#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416) | v0.8.5 起 Slack 频道线程不再显示 "is thinking…" 状态 | ❓ 待确认是否有意行为 |

**安全相关**：[#11423](https://github.com/zeroclaw-labs/zeroclaw/pull/11423)（OIDC 注册凭据保留字符编码）、[#11458](https://github.com/zeroclaw-labs/zeroclaw/pull/11458)（审计卫生 SQLite 准入加固）、[#11409](https://github.com/zeroclaw-labs/zeroclaw/pull/11409)（delegate 后台结果路径防护）均在审查中。

---

## 6. 功能请求与路线图信号

**ZeroCode 配置 UX 系列**（@Audacity88 一日内集中提交，几乎全部配有 PR，落地概率高，可能整体进入 v0.8.6）：

- [#11489](https://github.com/zeroclaw-labs/zeroclaw/issues/11489) + PR [#11501](https://github.com/zeroclaw-labs/zeroclaw/pull/11501)：配置字段可读标签与完整描述
- [#11491](https://github.com/zeroclaw-labs/zeroclaw/issues/11491) + PR [#11506](https://github.com/zeroclaw-labs/zeroclaw/pull/11506)：显示配置"已保存 vs 已应用"状态（与 #10892/#11466 配置应用账本打通）
- [#11492](https://github.com/zeroclaw-labs/zeroclaw/issues/11492)：设置页动作发现与键绑定搜索
- [#11490](https://github.com/zeroclaw-labs/zeroclaw/issues/11490)：空配置区块引导
- PR [#11502](https://github.com/zeroclaw-labs/zeroclaw/pull/11502) / [#11504](https://github.com/zeroclaw-labs/zeroclaw/pull/11504) / [#11510](https://github.com/zeroclaw-labs/zeroclaw/pull/11510) / [#11511](https://github.com/zeroclaw-labs/zeroclaw/pull/11511)：多选编辑器、配置过滤、删除确认、保存/取消可预测性

**基础设施/架构线**：
- PR [#11466](https://github.com/zeroclaw-labs/zeroclaw/pull/11466)：逐目标配置应用结果账本（#10892 的实现，v0.9.0 gateway 分离的地基，堆叠于 #10911）
- PR [#11456](https://github.com/zeroclaw-labs/zeroclaw/pull/11456)：可选子进程内存看门狗 `shell_max_memory_mb`
- [#8310](https://github.com/zeroclaw-labs/zeroclaw/issues/8310)：Schema V4 破坏性精简，将持续影响迁移路径
- [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951)：基于任务强度的本地/云端模型路由（parking-lot，暂缓）

---

## 7. 用户反馈摘要

- **多渠道一致性问题**：[#11478](https://github.com/zeroclaw-labs/zeroclaw/issues/11478) 用户在 Matrix 与 Telegram 上均复现图像截断，说明共享图像内联路径是单点缺陷。
- **重复回归伤害信任**：[#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) 用户报告 zerocode cwd 问题**第二次回归**，诉求是补上回归测试而非仅修复。
- **小模型 + 本地推理（MLX-LM）用户体验**：[#11484](https://github.com/zeroclaw-labs/zeroclaw/issues/11484) 显示用户用 4B 本地模型跑 agent，重复工具调用防护在 ZeroCode 下失效，成本与体验双重受损——本地模型用户是重要群体。
- **SSH/终端远程使用**：[#10301](https://github.com/zeroclaw-labs/zeroclaw/issues/10301) 反映 SSH 终端下 Code 面板历史导航与复制困难，滚动条“装饰性”不可用。
- **可观测性诉求**：[#11491](https://github.com/zeroclaw-labs/zeroclaw/issues/11491)/[#10892](https://github.com/zeroclaw-labs/zeroclaw/issues/10892) 核心痛点是“保存了配置但不知道哪个运行组件真正生效了”，运维体验的盲区。
- **Slack 集成体验**：[#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416) 用户依赖 "is thinking…" 状态感知 agent 存活，仅剩 👀 reaction 不够直观。

---

## 8. 待处理积压

- **[#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002)**（7 月开，标注 stale-candidate、needs-author-action）— viewer 断开后保持 agent turns 存活，XL 体积高风险 PR，需要维护者介入推动或明确放弃决策。
- **[#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)**（8 月开，14 评论）— 测试夹具加固仍在 in-progress，活跃但长期未关闭，需收敛。
- **[#10876](https://github.com/zeroclaw-labs/zeroclaw/issues/10876)**（9 月开）— 剩余 CLI 发布与文档部分待完成，避免半交付状态长期化。
- **[#8766](https://github.com/zeroclaw-labs/zeroclaw/issues/8766)**（7 月开）— 首次运行 E2E 覆盖，P1 高风险，关乎新用户转化。
- **[#11478](https://github.com/zeroclaw-labs/zeroclaw/issues/11478) / [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418)** — 均标 r:needs-repro，需要维护者尽快确认复现路径，避免 P1 报告石沉大海。
- **审查带宽告警**：49 条待合并 PR 中大量为多层堆叠（#11409→#11422→#11423 等链条），建议维护者优先梳理堆叠依赖顺序，防止审查积压指数级增长。

---

**健康度小结**：社区贡献活跃（多位外部贡献者：@singlerider、@joalvaradon、@weissfl、@linhongyu510、@tidux、@Aarlington 等），Issue 报告质量高、标签体系执行严格，路线图（#7432）清晰。主要风险在于合并吞吐量与 PR 堆叠深度，以及多个 P1 Bug（图像截断、macOS 沙箱）尚无完整修复。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-10-04）

## 1. 今日速览

Hermes Agent 今日保持高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 42、关闭 8），PR 更新 50 条（待合并 44、已合并/关闭 6），无新版本发布。社区注意力集中在两条 P0 数据丢失/挂起 Bug（scratch 目录静默清理、PTY 进程杀死挂起）上，多平台（Windows/gateway）稳定性问题持续涌现。核心维护者 @teknium1 今日提交了 Skill Sync 移除等架构瘦身 PR，显示项目正处于功能边界收敛期。总体看，问题报告速度明显快于修复合并速度（42 新开 vs 6 合并/关闭），积压压力上升。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 仅 6 条，进展以点状修复为主：

- **#85398 (CLOSED)** Telegram 围栏代码块正则锚定修复，避免行内三反引号被错误处理 — 平台适配质量提升。[链接](https://github.com/NousResearch/hermes-agent/pull/85398)
- **#116849 (OPEN，活跃推进)** 恢复中断的工具调用对模型的可见性，作为被误关 PR #102238 的重开版本，会话状态恢复机制接近落地。[链接](https://github.com/NousResearch/hermes-agent/pull/116849)
- **#132465** 移除从未公开可用的 Skill Sync（`hermes sync`）与 org skill mirror，核心代码瘦身，降低维护面。[链接](https://github.com/NousResearch/hermes-agent/pull/132465)
- **#132585** 状态栏 tok/s 指标改为测量真实解码速度而非含 prefill 的整体等待，本地模型体验改进。[链接](https://github.com/NousResearch/hermes-agent/pull/132585)
- **#132587** Windows 更新后 Desktop 重启无窗口问题改为显式报错，安装/更新健壮性改进。[链接](https://github.com/NousResearch/hermes-agent/pull/132587)

整体推进幅度有限：待合并 44 vs 合并 6，评审吞吐不足是当前瓶颈。

## 4. 社区热点

- **#97681「让 Bots 跨 gateway 协作」**（37 评论，👍4）— 最热议题。个人 Agent 跨机器、跨所有者协作是社区最关心的路线图方向，讨论持续一个多月，涉及会话状态与消息投递两大风险域。[链接](https://github.com/NousResearch/hermes-agent/issues/97681)
- **#132401 P0：scratch 24h 静默清理销毁多日工作成果**（15 评论）— 数据安全问题引发强烈共鸣：无日志、无隔离区、无保留标记，与 #132498（kanban 示例把交付物写到同一目录）形成系统性问题簇。[链接](https://github.com/NousResearch/hermes-agent/issues/132401)
- **#123238 (CLOSED)：HERMES_HOME 重绑定导致安装砖化** — 关闭但代表安装/更新兼容性这一持续痛点类。[链接](https://github.com/NousResearch/hermes-agent/issues/123238)
- **#132068 Desktop Bot @ 提及自动补全只列出 @default/@hermes** — 多 Bot/多 profile 用户日常体验受阻。[链接](https://github.com/NousResearch/hermes-agent/issues/132068)

## 5. Bug 与稳定性（按严重程度）

**P0**
- **#132401** scratch prune 静默销毁 TMPDIR 指向的多日 Agent 工作产物。暂无专门 fix PR，但 #132498（kanban 示例路径问题）与之相关，需尽快响应。[链接](https://github.com/NousResearch/hermes-agent/issues/132401)
- **#132358** 杀死 PTY 后台进程在子孙 setsid 后永久挂起，dashboard/serve 后端泄漏进程。暂无 fix PR。[链接](https://github.com/NousResearch/hermes-agent/issues/132358)

**P1**
- **#132547** Windows 命名管道同步读阻塞 gateway 事件循环，watchdog exit 75 强杀（今日新报）。[链接](https://github.com/NousResearch/hermes-agent/issues/132547)
- **#132504** 内置 skills 含字面 `<tool>` 字符串触发 OpenRouter 403「prompt injection」并污染整个会话。[链接](https://github.com/NousResearch/hermes-agent/issues/132504)

**P2**
- **#131375** smart-approval guardian 在事件循环线程崩溃，Desktop/serve 下所有被标记命令都升级到人工审批。[链接](https://github.com/NousResearch/hermes-agent/issues/131375)
- **#121878** 流式 stale watchdog 使用含挂起时间的墙钟，恢复后 71ms 内误杀并谎报 6.5h 停顿。[链接](https://github.com/NousResearch/hermes-agent/issues/121878)
- **#127919** serve 重启使 Bot Chat 中断后永不续跑。[链接](https://github.com/NousResearch/hermes-agent/issues/127919)
- **#120356** Windows shell hook 审批在事件循环线程调用 `input()`，冻结 gateway 105s 后自杀。[链接](https://github.com/NousResearch/hermes-agent/issues/120356)

**Windows 平台问题密集**：#96993（Chrome 151 app-bound 加密导致 cookie 全清）、#107854（默认浏览器检测读过期注册表键）、#132587（已有 fix PR）。

## 6. 功能请求与路线图信号

- **跨 gateway/跨所有者 Bot 协作（#97681）**：热度最高、讨论最深，是明确的下一步基础设施方向，预计将有系列 PR 跟进。
- **浏览器版 Desktop（PR #93508 `hermes webapp`）**：认证浏览器承载完整 Desktop 渲染器，标签覆盖面极广（Windows/会话/安装/安全边界），属大型特性，落地后将显著扩大使用场景。[链接](https://github.com/NousResearch/hermes-agent/pull/93508)
- **ACP Registry 注册（#47435）**：Zed 已废弃自定义 agent_servers，为接入 Zed/JetBrains/VS Code 需注册 ACP Registry，工作量小、收益大，有望尽快落地。[链接](https://github.com/NousResearch/hermes-agent/issues/47435)
- **微信网页端扫码接入（PR #50044）**：对齐 Telegram 的 dashboard 全程 onboarding 体验。[链接](https://github.com/NousResearch/hermes-agent/pull/50044)
- **Linux Desktop 启动失败自诊断（#125813）**：doctor 检查 + 失败通知 + 自带诊断 skill。[链接](https://github.com/NousResearch/hermes-agent/issues/125813)

## 7. 用户反馈摘要

- **数据安全焦虑**：scratch 自动清理对长期运行 Agent 的用户是实际损失（“多天工作一夜清零”），用户普遍要求日志、隔离区、保留标记三重保险。
- **Windows 体验落差**：gateway exit 75、浏览器配置文件、更新砖化等多条问题集中，Windows 一等公民支持仍不成熟。
- **长时运行稳定性**：插件重载竞争（#125746）、流式误杀（#121878）、会话中断不恢复（#127919）都指向“7x24 常驻 Agent”场景尚不可靠。
- **正面信号**：用户对 kanban/cron/skills 等内置工作流依赖度高；ACP、微信、Telegram 等接入生态请求活跃，说明真实日常使用在增长；#132554 等报告显示用户愿意花时间写详细反馈帮助他人。

## 8. 待处理积压

- **#82688（8/09 开，P2）** `ClassifiedError.should_fallback` 处处赋值、无处读取，错误回退逻辑与设计意图脱节，需维护者决策。[链接](https://github.com/NousResearch/hermes-agent/issues/82688)
- **#38650（6/04 开）** `hermes dump` 误报 MCP server failed，四个月未修，影响新用户第一印象。[链接](https://github.com/NousResearch/hermes-agent/issues/38650)
- **#96993（8/28 开，P2）** Windows 真实配置文件 cookie 全清，涉及 Chrome 151 加密变化，需要平台性方案。[链接](https://github.com/NousResearch/hermes-agent/issues/96993)
- **#124309 / #101513（P2）** stable 更新通道 R2 记录缺失、service_tier 配置不生效，均属配置链路断裂，长期未闭环。
- **PR #93508（webapp，8/24 开）**：超大特性长时间待评审，建议维护者优先分阶段推进。

**健康度小结**：社区参与度与健康的问题质量很高（复现步骤、根因分析详尽），但今日新开 42 vs 关闭 8 的失衡、两条 P0 无 fix PR、多条 6-8 月老 issue 积压，提示需要提升维护吞吐或扩大分诊/评审人力。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-10-04

## 1. 今日速览

PicoClaw 今日整体活跃度较低：过去 24 小时仅 1 条 Issue 活跃更新，0 条 PR 更新，无新版本发布。项目处于维护节奏平稳但社区驱动力偏弱的阶段，今日无代码层进展。唯一活跃的 Issue 为 QQ 通道接口适配问题，反映用户对即时通讯渠道兼容性的持续关注。

## 2. 版本发布

今日无新版本发布。最新 Releases 无记录，建议关注官方渠道获取后续版本信息。

## 3. 项目进展

今日无 PR 合并或关闭，代码库无可见推进。项目进度处于停滞观测期。

## 4. 社区热点

- **[#3394 [BUG] QQ机器人的接口更新了，但QQ聊天通道的接口似乎没有更新，希望修复](https://github.com/sipeed/picoclaw/issues/3394)**（OPEN，创建于 2026-09-26，最近更新 2026-10-03，2 条评论）
  - 为今日唯一活跃条目，也是当前讨论焦点。
  - 用户诉求：QQ 官方机器人接口已更新，而 PicoClaw 的 QQ 聊天通道未同步适配，导致通道功能疑似失效，希望官方修复。
  - 该 Issue 已被打上 `stale` 标签，且报告者未完整填写环境信息（版本、Go 版本、模型、操作系统等），可能在信息补充环节受阻。

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | Fix PR |
|---|---|---|---|
| 中（影响 QQ 通道可用性） | [#3394 QQ聊天通道接口未更新](https://github.com/sipeed/picoclaw/issues/3394) | OPEN / stale | 暂无 |

- 该 Bug 影响依赖 QQ 作为聊天通道的用户，属于通道层兼容性问题，非核心框架崩溃，判定为中等严重。
- 尚无对应 fix PR，且因模板信息未填写完整，复现与定位存在障碍。

## 6. 功能请求与路线图信号

- 今日无新增功能请求。
- #3394 隐含的路线图信号：**聊天通道适配层需要跟上上游第三方平台（QQ 等）的接口演进**。鉴于当前无相关 PR，短期内纳入版本的可能性不明，建议维护者确认是否排期。

## 7. 用户反馈摘要

- **痛点**：使用 QQ 作为消息通道的用户遭遇接口不兼容，通道疑似不可用，且问题已 open 一周以上未获实质回应（[来源](https://github.com/sipeed/picoclaw/issues/3394)）。
- **使用场景**：将 PicoClaw 作为个人 AI 助手接入 QQ 机器人进行日常对话交互。
- **改进期望**：希望项目对第三方聊天平台的接口变更保持更快的适配响应。

## 8. 待处理积压

- **[#3394](https://github.com/sipeed/picoclaw/issues/3394)**：已 open 约 8 天、带 `stale` 标签、无修复进展。建议维护者：
  1. 引导报告者补全环境信息（PicoClaw 版本、Go 版本、操作系统、通道配置）；
  2. 评估 QQ 官方接口变更范围，决定是修复还是发布适配计划；
  3. 若确认修复，避免 stale 机制将其自动关闭，以免流失该通道的用户群。

---

**健康度小结**：今日活跃度低（1 Issue / 0 PR / 0 Release），无阻塞级问题，但 QQ 通道兼容性 Issue 的滞留值得维护者关注，以免影响即时通讯场景用户的留存。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-10-04

## 1. 今日速览

NanoClaw 今日保持高活跃度：过去 24 小时共 7 条 Issue 更新（4 开 / 3 关）、33 条 PR 更新（20 待合并 / 13 已合并或关闭），无新版本发布。核心维护者 @glifocat 持续高频产出，当日即修复了 update cutover 崩溃与回滚删数据两个高危升级问题（#4016）。值得注意的是，一条安全 Issue（#2970，本地 webhook 伪造）随修复 PR #4013 合并而关闭，显示安全响应闭环较快。整体项目健康度良好，开发节奏以 bug 修复与安装/更新链路加固为主。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日关闭/合并的 13 条 PR 中，重点包括：

- **[PR #4016](https://github.com/nanocoai/nanoclaw/pull/4016)** — 修复 update cutover 在升级 tsx/esbuild 时崩溃的问题（在 cutover 替换 node_modules 前预加载 gateway helpers），直接关闭 Issue #4004。
- **[PR #4013](https://github.com/nanocoai/nanoclaw/pull/4013)** — 为本地 Discord Gateway loopback webhook 增加认证，修复安全 Issue #2970（本地动作伪造）。
- **[PR #4008](https://github.com/nanocoai/nanoclaw/pull/4008)** — 修复本地 iMessage 后端无法打开 `chat.db`（使用 core 预编译的 better-sqlite3）。
- **[PR #3997](https://github.com/nanocoai/nanoclaw/pull/3997)** — setup 阶段提交 skill 文件，使全新安装可直接运行 `/update-nanoclaw`。
- **[PR #3985](https://github.com/nanocoai/nanoclaw/pull/3985)** — 阻止代理凭据被写入可被其他本地用户读取的 systemd 服务文件（0644），安全加固。
- **[PR #3989](https://github.com/nanocoai/nanoclaw/pull/3989)** — OneCLI gateway 钉到 1.42.0，纳入凭据注入绕过修复。
- **[PR #4005](https://github.com/nanocoai/nanoclaw/pull/4005)** — Iron approval bridge 中 `@grpc/grpc-js` 升至 1.14.5，消除两条安全通告。
- **[PR #3912](https://github.com/nanocoai/nanoclaw/pull/3912)** — 修复 CI area labeler 覆盖 PR 标签的问题。
- **[PR #4011](https://github.com/nanocoai/nanoclaw/pull/4011)**（文档，已关闭）— 将“核心 vs Fork”贡献规则写入贡献文档。

**进展评估**：今日修复集中覆盖**升级/安装链路、安全、消息通道**三大领域，尤其 update cutover 崩溃（当日开 issue → 当日修复）体现快速迭代能力。升级可靠性是当前明显的主攻方向。

## 4. 社区热点

- **[#3643](https://github.com/nanocoai/nanoclaw/issues/3643)**（2 评论，今日更新）— 硬编码 30 分钟 `ABSOLUTE_CEILING_MS` 会冷杀本地模型的长回合任务，且无配置缝。本地/自托管模型用户是 NanoClaw 重要群体，该限制直接影响可用性，诉求是**可配置的超时上限**。
- **[#3223](https://github.com/nanocoai/nanoclaw/issues/3223) / [#3301](https://github.com/nanocoai/nanoclaw/issues/3301)**（各 1 评论，今日更新）— 均围绕 2.1.48 引入的“单门任务投递”（#2988）架构引发的调度任务消息路由缺陷：任务失败静默丢弃、聊天会话内触发的任务吞回复/丢日志。反映用户对**定时任务在聊天渠道中的可观测性与路由正确性**的强烈需求。
- **[PR #3918](https://github.com/nanocoai/nanoclaw/pull/3918)** — 修复 `send_message` 周边回复丢失/重复，仍待合并，是社区关注的核心 agent-runner 正确性问题。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 状态 | 修复 PR |
|---|---|---|---|
| 🔴 高 | [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) 本地模型长回合被 30 分钟硬上限冷杀 | OPEN，priority/high | 暂无 |
| 🔴 高 | [#4003](https://github.com/nanocoai/nanoclaw/issues/4003) 升级回滚可删除半个 `data/`，导致主机宕机 | CLOSED（triage/unresolved 标记） | 部分（#4016 修 cutover，但 #4003 标记 unresolved，回滚安全性可能仍待跟进） |
| 🟠 中 | [#4004](https://github.com/nanocoai/nanoclaw/issues/4004) 升级 tsx/esbuild 时 cutover 崩溃 | CLOSED | ✅ [PR #4016](https://github.com/nanocoai/nanoclaw/pull/4016)（当日修复） |
| 🟠 中 | [#2970](https://github.com/nanocoai/nanoclaw/issues/2970) 未认证 loopback webhook 本地动作伪造（安全） | CLOSED | ✅ [PR #4013](https://github.com/nanocoai/nanoclaw/pull/4013) |
| 🟠 中 | [#3223](https://github.com/nanocoai/nanoclaw/issues/3223) 调度任务错误消息无法路由、静默丢失 | OPEN | 暂无 |
| 🟡 中低 | [#3301](https://github.com/nanocoai/nanoclaw/issues/3301) 聊天会话内任务单门模式丢日志/吞回复 | OPEN | 暂无 |
| 🟡 中低 | [#3984](https://github.com/nanocoai/nanoclaw/issues/3984) PreCompact hook 因 mailbox 未注册失败 | OPEN | 暂无 |

⚠️ 特别提醒：#4003 虽被关闭但带 `triage/unresolved` 标签，**回滚删除用户数据**属于最高危类别，建议维护者确认是否有后续 PR。

## 6. 功能请求与路线图信号

- **可配置的容器时间上限**（源自 #3643）：本地模型用户的核心诉求，且与 [PR #3999](https://github.com/nanocoai/nanoclaw/pull/3999)（透传 `CLAUDE_CODE_AUTO_COMPACT_WINDOW` 到容器）同属“让宿主环境变量真正生效”方向，预计短期内会补配置缝。
- **任务消息路由与可观测性**（#3223、#3301）：与待合并的 [PR #3918](https://github.com/nanocoai/nanoclaw/pull/3918)（send_message 回复可靠性）同属 agent-runner 消息投递主线，很可能组成下一批核心修复。
- **树莓派/边缘设备支持**：[PR #4019](https://github.com/nanocoai/nanoclaw/pull/4019)（systemd 等待 docker）、[PR #4018](https://github.com/nanocoai/nanoclaw/pull/4018)（Signal 守护进程使用单调时钟）均来自社区，显示低功耗设备是活跃使用场景，且 #4018 解决 Pi 无 RTC 的 NTP 时钟跳变问题很有针对性。
- **维护流程收敛**：#4009/#4010（agent-image repin PR 改由 App 打开、人工合并）和 #4011（core-or-fork 规则成文）表明维护者在降低 CI/贡献管理成本，未来贡献门槛会更明确。

## 7. 用户反馈摘要

- **自托管/本地模型用户**（#3643）：本地推理回合常超过 30 分钟，硬上限导致任务被中途冷杀，且无处配置——挫败感明显。
- **定时任务用户**（#3223、#3301）：任务失败后完全无感知（“运维者永远不知道任务失败了”），以及 2.1.48 升级后旧任务数据在聊天会话内行为异常，存在**升级回归**感知。
- **升级体验**（#4003、#4004）：`/update-nanoclaw` 失败即可能损失数据目录，用户对升级安全性信心不足；当日修复后有望缓解。
- **边缘设备用户**（#4019、#4018）：在树莓派上重启后 host 启动早于 dockerd、Signal 适配器因时钟跳变启动失败——说明 Pi 部署是真实且被支持的用例。
- **正面信号**：核心维护者响应极快（issue 当日修复），社区贡献者（@gbmerrall、@chubbicorn245、@drsmk238）持续提交高质量、遵循模板的修复 PR。

## 8. 待处理积压

- **[#2752](https://github.com/nanocoai/nanoclaw/pull/2752)**（6 月 12 日开）— Discord 附件（图片 / `message.txt`）在 chat-sdk bridge 中被丢弃。**挂起近 4 个月**，影响多模态使用体验，建议维护者评审或按 core-or-fork 规则给出明确处置。
- **[#3643](https://github.com/nanocoai/nanoclaw/issues/3643)**（8 月 28 日开，priority/high）— 高优先级但无修复 PR，已挂 5 周。
- **[#3223](https://github.com/nanocoai/nanoclaw/issues/3223)**（8 月 10 日开）、**[#3301](https://github.com/nanocoai/nanoclaw/issues/3301)**（8 月 17 日开）— 任务路由问题积压近两个月，均无对应 PR。
- **[#3984](https://github.com/nanocoai/nanoclaw/issues/3984)**（10 月 1 日开）— PreCompact hook 崩溃影响每次压缩操作，尚无修复。
- **PR #3918、#3983、#3988、#3999** 等 20 个待合并 PR 中，多数为 core-team 自身提交，建议推进合并以清理队列。

---
*数据来源：NanoClaw GitHub 仓库，统计窗口 2026-10-03 至 2026-10-04。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报（2026-10-04）

## 1. 今日速览

NullClaw 今日无新 Issue、无新版本发布，代码合并活动为零，但 **20 个待合并 PR 集中在 10-03 更新**，显示维护者（几乎全部由 @vernonstinebaker 一人提交）正在进行批量整理或 rebase。项目活跃度呈现“单人高强度开发、社区贡献与讨论偏弱”的特征。PR 内容覆盖网关稳定性、内存系统、A2A 安全、文档修复等多个子系统，整体处于**功能持续打磨、待集中合并**的阶段。健康度评估：开发活跃度中等偏高，但社区互动（Issue/评论/👍）几乎为零，bus factor 风险值得关注。

## 2. 版本发布

今日无新版本发布。最新 20 个 PR 均未合并，短期内可能酝酿一次集中合并与发版。

## 3. 项目进展

今日**无 PR 被合并或关闭**。但待合并队列中有多个实质性进展值得追踪：

- **流式工具调用解耦**：[PR #971](https://github.com/nullclaw/nullclaw/pull/971) 允许支持原生工具的 provider 在 SSE 流式过程中真正发出工具调用，摆脱此前强制 prompt 注入格式的限制——这是 agent 能力的重要提升。
- **长循环卫生**：[PR #987](https://github.com/nullclaw/nullclaw/pull/987) 引入稳定前缀缓存、工具输出压缩、重复调用检测，显著优化长时本地工具密集运行。
- **内存系统增强**：[PR #1001](https://github.com/nullclaw/nullclaw/pull/1001)（恢复自 #979）增加 `auto_recall`/`recall_limit`/`max_context_bytes` 配置；[PR #1005](https://github.com/nullclaw/nullclaw/pull/1005) 修复归档会话分片泄漏进实时上下文的严重问题。
- **A2A 安全修复**：[PR #1012](https://github.com/nullclaw/nullclaw/pull/1012) 按 bearer 主体隔离 A2A 任务与会话，关闭 #974，属于跨租户访问控制修复。

## 4. 社区热点

今日无任何 Issue 活动、PR 评论或点赞，无法识别讨论热点。从 PR 引用可追溯：
- [#817](https://github.com/nullclaw/nullclaw/issues/817)（Weixin iLink QR 授权）由 PR #963 关闭，反映中文生态（微信渠道）接入需求。
- [#974](https://github.com/nullclaw/nullclaw/issues/974)（A2A 身份隔离）由 PR #1012 处理，说明存在多租户/A2A 部署场景的真实用户。

## 5. Bug 与稳定性

按严重程度排列（均为待合并 fix PR 状态，**尚无一个已合入 main**）：

| 严重度 | 问题 | PR |
|---|---|---|
| 🔴 高 | Discord 自我回复回环：`allow_bots=true` 时机器人吃掉自己的回复，`@` 开头可触发无限自激循环 | [#1010](https://github.com/nullclaw/nullclaw/pull/1010) |
| 🔴 高 | A2A 任务/会话未按调用方隔离，共享 bearer 即可跨租户读操作 | [#1012](https://github.com/nullclaw/nullclaw/pull/1012) |
| 🟠 中 | HTTPS typing workers 在 512 KiB 栈上溢出并终止网关（cherry-pick 自 @Tetraslam 的 #978） | [#1002](https://github.com/nullclaw/nullclaw/pull/1002) |
| 🟠 中 | Discord 网关连接卡死后无法安全恢复，影响通道可用性 | [#953](https://github.com/nullclaw/nullclaw/pull/953) |
| 🟠 中 | 归档会话被回注入实时提示，模型将当前消息误判为历史 | [#1005](https://github.com/nullclaw/nullclaw/pull/1005) |
| 🟡 低 | macOS 流式 stdout 首字节被覆盖（`pong` 首行损坏） | [#1006](https://github.com/nullclaw/nullclaw/pull/1006) |
| 🟡 低 | 非 2xx provider 响应体被释放，错误原因不可见 | [#1004](https://github.com/nullclaw/nullclaw/pull/1004) |
| 🟡 低 | `parseXmlToolCalls` 分配失败时泄漏 | [#1011](https://github.com/nullclaw/nullclaw/pull/1011) |
| 🟡 低 | Android/Termux DNS 解析失败，需 curl 回退 | [#966](https://github.com/nullclaw/nullclaw/pull/966) |

## 6. 功能请求与路线图信号

- **可配置内存回溯**（#1001）与 **skills symlink 支持**（[#1003](https://github.com/nullclaw/nullclaw/pull/1003)）已是成型的 feature PR，大概率随下次合并窗口进入主干。
- **CLI REPL 行编辑**（[#970](https://github.com/nullclaw/nullclaw/pull/970)，零分配、raw-mode 方向键/历史支持）显示项目重视本地终端体验，是个人 AI 助手定位的差异化方向。
- **原生 Anthropic provider 加固**（[#962](https://github.com/nullclaw/nullclaw/pull/962)）+ 流式原生工具调用（#971）指向“provider 兼容性”是当前路线重点。
- **微信 iLink 渠道**（#963）表明中文消息平台支持在持续投入。

## 7. 用户反馈摘要

今日无 Issue/评论数据可提炼。从 PR 描述间接推断的典型使用场景：
- Android/Termux 上的本地运行用户（#966）；
- 部署 Discord 机器人并开启 `allow_bots` 的运营者遭遇自激循环（#1010）；
- 使用多 provider + 流式工具调用的 agent 重度用户（#971、#962、#1004）。

**痛点模式**：错误可观测性差（#1004 需抓包才能看到 provider 错误原因）和长会话内存污染（#1005）是反复出现的主题。

## 8. 待处理积压

- **积压规模偏大**：20 个 open PR 中最老的 #953 创建于 **2026-06-12，已滞留近 4 个月**，#954/#959/#962/#963/#966/#970/#971 均超过 3 个月未合并。建议维护者优先审查这些长期 PR 是否仍可干净 rebase、或明确关停。
- #954 自述部分修复已以 `7de30e25` 进入 main，应评估剩余改动的必要性，避免僵尸 PR。
- 全部 20 个 PR 的 👍 与评论数缺失/为零，社区评审参与度低，建议通过 RFC 或 roadmap 讨论吸引外部评审者，降低单人维护瓶颈。

---
*数据来源：NullClaw GitHub 仓库 2026-10-03 ~ 2026-10-04 抓取快照。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-10-04）

## 1. 今日速览

过去 24 小时 LobsterAI 共有 7 条仓库动态：6 条 Issue 更新（均为已有 Issue 被标记 stale 后的活跃，无新增、无关闭），1 条 PR 更新（待合并，无合并记录），无新版本发布。整体活跃度处于**低位徘徊**状态，社区互动以 stale 机制的自动触发为主，缺乏维护者的实质性响应。项目当前面临的核心风险是**反馈积压**：多个涉及数据一致性和核心功能的 Bug 长期悬而未决。

## 2. 版本发布

今日无新版本发布，最近亦无 Release 记录。

## 3. 项目进展

今日无 PR 被合并、无 Issue 被关闭，**项目代码层面无实质推进**。

唯一活跃的 PR 为：

- **PR #2374** [OPEN] feat: add permanent setting to hide sidebar ad banner（作者 @bunnysayzz，7 月 21 日创建，今日更新）— 在「设置 → 通用」中增加永久隐藏侧边栏广告横幅的开关，解决 [Issue #2342](https://github.com/netease-youdao/LobsterAI/issues/2342)。该 PR 已挂起两个多月未获 review，属于社区对产品商业化体验的直接反馈信号。
  链接：https://github.com/netease-youdao/LobsterAI/pull/2374

## 4. 社区热点

今日 6 条 Issue 均被标记 `[stale]` 且评论量低（1-2 条），无真正意义上的热点讨论。相对受关注的两条：

- **Issue #884** 关于账户登录与付费加油包（2 条评论）— 用户询问登录/不登录的功能差异、加油包积分用途、与自配 Model 的协同关系，反映**商业化模式透明度不足**，新用户对付费体系理解成本高。
  链接：https://github.com/netease-youdao/LobsterAI/issues/884
- **Issue #885** 微信链接不可用（2 条评论）— 涉及渠道触达问题，影响用户获取支持与社群入口。
  链接：https://github.com/netease-youdao/LobsterAI/issues/885

## 5. Bug 与稳定性

按严重程度排列（今日均无对应 fix PR）：

1. **🔴 高：Issue #879** SQLite 外键约束未启用（`PRAGMA foreign_keys` 默认 OFF），删除 session 不会级联删除 messages，导致数据库持续膨胀。WebAssembly 版 sql.js 的存储层实现缺陷，长期使用会引发性能退化，是所有 Bug 中影响面最广的一条。
   链接：https://github.com/netease-youdao/LobsterAI/issues/879
2. **🟠 中：Issue #883** Windows 桌面端所有 slash 命令（`/status`、`/help`、`/reasoning` 等）完全失效，属于核心交互功能在特定平台上的整体性故障。
   链接：https://github.com/netease-youdao/LobsterAI/issues/883
3. **🟠 中：Issue #867** `autoDeleteNonPersonalMemories()` 方法存在事务不一致问题，涉及记忆子系统的数据一致性，摘要缺失导致评估困难，建议维护者跟进补充上下文。
   链接：https://github.com/netease-youdao/LobsterAI/issues/867

## 6. 功能请求与路线图信号

- **Issue #873**：建议按 EARS 原则将 PRD 转化为产品 spec 输入给 AI，并新增研发常用 skill `git worktree`。摘要显示「已经和研发沟通」，说明该需求**已进入内部评估通道**，是最有可能进入下一版本的功能信号。
  链接：https://github.com/netease-youdao/LobsterAI/issues/873
- **PR #2374**（隐藏广告横幅开关）：社区已自发达成交果代码，若被合并将直接回应 #2342 的诉求，可作为产品对商业化体验反馈态度的观察指标。

## 7. 用户反馈摘要

从近期 Issue 可提炼出的用户画像与痛点：

- **新用户上手成本高**：付费加油包、积分体系与自配模型的关系不清晰（#884），说明商业化文档与产品引导有待补强。
- **广告体验引发反感**：社区主动提交 PR 要求可永久关闭侧边栏广告（#2374/#2342），商业化与用户体验的平衡是敏感点。
- **研发型用户在深度使用**：出现记忆系统事务一致性（#867）、SQLite 存储层（#879）、git worktree skill（#873）等偏工程层面的反馈，说明已沉淀一批将 LobsterAI 用于日常研发工作流的核心用户。
- **多端一致性存疑**：Windows 桌面端命令系统失效（#883），平台间质量参差。

## 8. 待处理积压

以下问题均已挂起超过 6 个月、被标记 stale、无维护者实质响应，建议重点关注：

| 条目 | 类型 | 挂起时长 | 风险 |
|---|---|---|---|
| [#879](https://github.com/netease-youdao/LobsterAI/issues/879) SQLite 级联删除失效 | Bug | ~6 个月 | 数据库膨胀，影响长期用户 |
| [#883](https://github.com/netease-youdao/LobsterAI/issues/883) Windows slash 命令全失效 | Bug | ~6 个月 | 核心功能不可用 |
| [#867](https://github.com/netease-youdao/LobsterAI/issues/867) 记忆删除事务不一致 | Bug | ~6 个月 | 数据一致性隐患 |
| [#885](https://github.com/netease-youdao/LobsterAI/issues/885) 微信链接不可用 | 支持 | ~6 个月 | 社区触达受损 |
| [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374) 隐藏广告开关 | 社区 PR | ~2.5 个月 | 社区贡献者流失风险 |

**健康度提示**：今日 6 条 Issue 全部处于 stale 状态且零关闭，叠加唯一活跃 PR 长期无人 review，项目响应率指标呈明显下滑趋势。建议维护团队优先 triage 三条技术性 Bug（#879/#883/#867），并对社区 PR #2374 给予明确回复，以维持社区贡献意愿。

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

# CoPaw 项目动态日报 — 2026-10-04

> 数据来源：github.com/agentscope-ai/CoPaw（Issue/PR 条目中显示的仓库名 QwenPaw 为上游仓库标识）

---

## 1. 今日速览

- 过去 24 小时共 5 条 Issue 更新（新开/活跃 4，关闭 1）、7 条 PR 更新（全部待合并，0 合并），无新版本发布。
- Bug 报告质量较高：多数附完整环境信息与复现路径（如 #8093、#8092），反映社区以自托管深度用户为主。
- 核心贡献者 @lorenzozanee 单日提交 5 个 PR（#8095–#8100），集中在 runtime 能力解析、超时处理与回归测试，修 Bug→补测试的节奏健康。
- 多模态能力误判（#8093）当日即有对应修复 PR（#8100），响应速度值得肯定。
- 整体活跃度：**中等偏活跃**，开发推进稳定，但 7 个 PR 全部待合并显示合并/评审存在积压。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 合并、无 Issue 由代码变更关闭。但待合并队列内容扎实：

| PR | 内容 | 影响 |
|---|---|---|
| [#8100](https://github.com/agentscope-ai/CoPaw/pull/8100) (size/M) | 运行时使用 resolved media capabilities，修复多模态误判 | 直接修复 #8093 |
| [#8096](https://github.com/agentscope-ai/CoPaw/pull/8096) | 在响应元数据中暴露 `finish_reason=length` 截断信息 | 修复 #8085 静默截断 |
| [#8098](https://github.com/agentscope-ai/CoPaw/pull/8098) | 前台子代理聊天超时返回明确结果而非异常取消 | 提升多代理稳定性 |
| [#8095](https://github.com/agentscope-ai/CoPaw/pull/8095) | 跨代理消息归属到当前用户 | 修复 chat 注册键错乱 |
| [#8099](https://github.com/agentscope-ai/CoPaw/pull/8099) | Qoder 自定义 provider 与上下文用量展示 | 修复配置丢失 |
| [#8097](https://github.com/agentscope-ai/CoPaw/pull/8097) (size/XS) | PDF tool-result replay 测试补充 | 测试加固 |

整体看，项目正集中清理 runtime/provider 层的一批一致性与可观测性问题，若本批合并，2.2.x 的稳定性将有实质提升。

## 4. 社区热点

- **#8093（多模态误判）**：prober/catalog 声称 `supports_multimodal=true` 但 runtime 拒绝图片输入，涉及 mimo-v2.6-flash、glm-5.3-flash 等模型，当日即有修复 PR #8100，是最快的 issue→fix 闭环。（[链接](https://github.com/agentscope-ai/CoPaw/issues/8093)）
- **#8092（内容审查误报）**：阿里系网关返回的 `data_inspection_failed` 被归类为 `bad_request`，无重试、无降级，直接杀死整个 turn。用户配置了 12 模型 / 4 provider 的 fallback 链却完全没用上——诉求是**错误分类应触发 fallback 而非终止**。（[链接](https://github.com/agentscope-ai/CoPaw/issues/8092)）
- **#7535（已关闭）**：Matrix/Element 兼容性增强（recovery-key 设备验证、MSC2965 OIDC 登录），为月度老 issue，今日关闭。（[链接](https://github.com/agentscope-ai/CoPaw/issues/7535)）

## 5. Bug 与稳定性（按严重程度）

1. 🔴 **#8094 控制台启动死锁**：WebView2 缓存陈旧可导致 "LOADING CONSOLE" 永久卡死，无重试、无错误提示，用户只能手动清缓存。**影响：升级后无法启动，属最高危**。尚无 fix PR。（[链接](https://github.com/agentscope-ai/CoPaw/issues/8094)）
2. 🔴 **#8092 内容审查误报终止会话**：无 fallback、无重试，turn 被杀。尚无 fix PR。（[链接](https://github.com/agentscope-ai/CoPaw/issues/8092)）
3. 🟠 **#8093 多模态能力误判**：图片输入被静默丢弃。**已有修复 PR #8100**。（[链接](https://github.com/agentscope-ai/CoPaw/issues/8093)）
4. 🟠 **#8101 跨代理深链失效**：`/chat/<id>` 深链在跨代理场景打不开会话，同代理场景也无法激活 session，影响外部集成场景。（[链接](https://github.com/agentscope-ai/CoPaw/issues/8101)）
5. 🟡 **#8085（关联 PR #8096）**：输出被截断时用户无感知，静默丢失答案尾部，属可观测性缺陷，已有修复 PR。

## 6. 功能请求与路线图信号

- **#7535**（已关闭）暗示 Matrix 生态兼容是长期诉求方向，matrix-nio → Element 兼容层（MSC2965 OIDC）可能已在内部路线图中。
- **#8092** 隐含强烈需求：**按错误类别配置降级/fallback 策略**（尤其审查类 4xx），预计会进入下一版本的错误处理重构。
- **#8094** 隐含需求：启动流程增加重试与错误展示层，属于控制台 UX 硬化，优先级应较高。
- **PR #7004**（首贡献者，spawn 父子链路持久化）若合并，将补齐多代理编排的可追溯性短板。

## 7. 用户反馈摘要

- **痛点集中在企业级自托管场景**：多 provider fallback 链、容器部署、外部集成深链、网关兼容性——用户把 CoPaw 当生产级多代理平台用，对错误处理的健壮性要求高。
- **静默失败是最被诟病的模式**：图片被静默丢弃（#8093）、截断无提示（#8096）、启动卡死无报错（#8094）——用户宁可要明确报错也不要“看起来正常”。
- **正面信号**：报告质量高、复现详细（含版本号、部署方式、模型清单），说明核心用户群技术能力强、参与意愿高；维护者对 #8093 的当日响应获得社区信任。

## 8. 待处理积压

- **PR 积压（7 个全部待合并）**：#8100、#8099、#8098、#8097（@lorenzozanee）与 #8096、#8095（@wxhking）均无评论记录，建议维护者优先评审 #8100（对应高危 bug #8093）。
- **PR #7004**（首贡献者）：8 月 13 日创建，挂起近 2 个月，涉及 spawn 子代理能力持久化。首贡献者 PR 长期无响应易造成社区流失，建议尽快给出评审意见。（[链接](https://github.com/agentscope-ai/CoPaw/pull/7004)）
- **Issue #8094**（启动死锁）与 **#8092**（审查误报）：高危且无对应修复 PR，建议排期或至少回应。

---

**健康度小结**：开发节奏稳定、issue→fix 闭环速度在提升，但合并队列与首贡献者 PR 的响应是当前两个明显的短板；下一个版本的核心叙事应是“错误处理与多模态一致性硬化”。

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