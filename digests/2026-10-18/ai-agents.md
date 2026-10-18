# OpenClaw 生态日报 2026-10-18

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-18 03:37 UTC

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

# OpenClaw 项目动态日报 — 2026-10-18

## 1. 今日速览

今日 OpenClaw 保持高活跃度：过去 24 小时共 500 条 Issue 更新（新开/活跃 382，关闭 118）与 500 条 PR 更新（待合并 247，合并/关闭 253），吞吐接近 1:1，社区处理能力健康。无新版本发布。关注焦点集中在**持久化/SQLite 存储层的资源问题**（磁盘写入放大、无界增长、锁竞争）与**实时语音（Talk）稳定性**。多位核心维护者（@steipete、@vincentkoc）今日密集提交重构与修复 PR，开发节奏稳定。

## 2. 版本发布

今日无新版本发布，无 Releases。

## 3. 项目进展

今日无明确的合并数据区分，但从活跃 PR 可见以下推进方向：

- **更新安全加固**：#176038（[PR](https://github.com/openclaw/openclaw/pull/176038)）禁止在服务探针失败时覆盖运行中 Gateway 的更新发布；#175984（[PR](https://github.com/openclaw/openclaw/pull/175984)）修复 git checkout 前的 sqlite-maintenance 竞态导致的更新中止。
- **插件内存治理**：#176034（[PR](https://github.com/openclaw/openclaw/pull/176034)）修复已销毁 recovery graph 的内存滞留；#176039（[PR](https://github.com/openclaw/openclaw/pull/176039)）暴露强制配置 schema 读取失败。
- **架构去重**：@steipete 一日连发多个重构 PR（#176041、#176012、#176030、#176033），统一 runtime 判别、插件发布所有权、迁移快照校验等，降低长期维护成本。
- **功能推进**：#174077（[PR](https://github.com/openclaw/openclaw/pull/174077)）保留有效的 Codex 自动模型选择（🦞 diamond lobster 评级）；#175783 修复 tagged 流长回复的 CPU 阻塞；#174317 推进会话/主题名一次性优化功能。

整体看，项目处于"修复 + 深度重构并行"阶段，向下一个稳定版推进。

## 4. 社区热点

| Issue | 评论 | 主题 |
|---|---|---|
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 24 | 同步持久化/transcript 维护阻塞 Gateway 事件循环（P1，已落部分修复，社区持续跟进） |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | 19 | 插件源捕获每次 CLI 写 ~1.1–1.4 GB、Gateway 启动写 ~6.5 GB，SSD 磨损严重（2026.9.5 回归） |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | 17 | memory-core SQLite 表无保留策略，磁盘无界增长 |
| [#164923](https://github.com/openclaw/openclaw/issues/164923) | 16 | 单工作区短期记忆提升 0/512，同级工作区正常，排查中 |
| [#146118](https://github.com/openclaw/openclaw/issues/146118)（已关闭） | 14 | compaction 防护不覆盖 Codex 原生路径 |

热点诉求集中：**存储层资源消耗（磁盘/CPU）**与**会话状态一致性**，且多为 P1/P2 长线问题，用户希望维护者给出明确决策（多处 `needs-maintainer-review` / `needs-product-decision` 标签）。

## 5. Bug 与稳定性

**P1（高严重，多数尚无 fix PR）**

- [#157989](https://github.com/openclaw/openclaw/issues/157989) 插件捕获写入放大，SSD 严重磨损 — 无 fix PR，需 live repro
- [#119720](https://github.com/openclaw/openclaw/issues/119720) 事件循环阻塞致 crash-loop — 部分修复已落地，仍待维护者复核
- [#121953](https://github.com/openclaw/openclaw/issues/121953) DeepSeek 上 cron 前缀 `[cron:...]` 被降优先级，任务停摆
- [#118839](https://github.com/openclaw/openclaw/issues/118839) restart recovery 回归在 2026.7.2-beta.7 复现
- [#164799](https://github.com/openclaw/openclaw/issues/164799) 版本切换后 agent 逐一缓慢 admission，readyz 503
- [#117262](https://github.com/openclaw/openclaw/issues/117262) 3 个并发 SQLite 写句柄导致 ~33s 事件循环停顿（DEF-61）
- [#138272](https://github.com/openclaw/openclaw/issues/138272) / [#131768](https://github.com/openclaw/openclaw/issues/131768) Android Talk 语音在工具调用时掉线，跨三个版本未修复
- [#101793](https://github.com/openclaw/openclaw/issues/101793) Signal 渠道工具调用前的文本被静默丢弃

**P0 级（值得警惕）**

- [#115642](https://github.com/openclaw/openclaw/issues/115642) 计费冷却 ~5 小时超时过长，ux-release-blocker，待产品决策
- [#125284](https://github.com/openclaw/openclaw/issues/125284) ⚠️ ask-mode 审批未阻断 exec，命令在审批前执行（安全相关，已标 stale，建议优先复核）

**已有 fix PR/部分修复**：#166665（compaction 自抑制，已关闭）、#138599（compaction 死锁，已关闭）、#163434（transcript 头修剪，已关闭）、#125570（Skill Workshop 覆写，已关闭）。

## 6. 功能请求与路线图信号

- **更新安全**：#122019 要求 `openclaw update status` 报告插件兼容性与不可逆迁移风险 — 与今日 #176038/#175984 系列 PR 方向一致，很可能随下版本落地。
- **记忆去重与治理**：#176037（`openclaw memory duplicates`）已提交 PR；#114612/#164923 的记忆存储治理是明确路线图信号。
- **会话命名优化**：#174317（XL PR，opt-in 一次性名称精炼）正在评审。
- **平台身份**：#162164 请求 iOS/macOS 个人身份 opt-in；#146232 请求可配置自动分诊 agent 白名单 — 均待产品决策。
- **cron 维护窗口 RFC**：#120244 提出角色隔离的每日维护窗口。

## 7. 用户反馈摘要

- **痛点集中在"资源与稳定性"**：多用户报告磁盘被插件捕获/临时目录（#158390）和 SQLite 表（#114612）撑满；空闲 Gateway 也有 7 次/分钟的 worker churn 吃掉 80% CPU（#159638）。
- **移动端体验落差**：Android Talk 掉线（多条 Issue）、iOS 开启推理显示后严重卡顿（#124759）是移动用户最大不满；不少用户退回 Discord Voice 作为替代。
- **消息可靠性信任问题**：消息丢失（#101793、#118839）、转写双写（#118185、#123792）直接影响对 agent 输出的信任。
- **满意点**：Issue 分级标签体系（P0–P3、impact 标签、issue-rating）和 clawsweeper 机器人分诊获得社区认可；部分长线 P1（如 #119720）修复推进后用户持续给出建设性复现数据。

## 8. 待处理积压

- [#119720](https://github.com/openclaw/openclaw/issues/119720)（P1，8 月开）— 事件循环阻塞，需维护者复核已落地修复
- [#114612](https://github.com/openclaw/openclaw/issues/114612)（P2，7 月开）— 记忆表无界增长，需产品决策
- [#115642](https://github.com/openclaw/openclaw/issues/115642)（P0，7 月开）— 计费冷却恢复机制，release blocker，积压最久的高优 Issue 之一
- [#132303](https://github.com/openclaw/openclaw/issues/132303)（P1）— `tools.deny` 对 claude-cli 不生效（安全相关），需安全评审
- [#113701](https://github.com/openclaw/openclaw/issues/113701)（P1，7 月开）— 大工具输出致 compaction 失效进入失败循环
- PR 侧：#124576（8 月开，ready for maintainer look）、#133110 / #133396（8 月底开，小改动、证明充分）长期待合并，建议维护者批量处理。

---
*健康度总评：社区活跃度极高、PR 吞吐良好，但 P0/P1 积压多集中在存储与移动端稳定性，需维护者优先给出产品决策与批次修复。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告
**数据周期：2026-10-17 至 2026-10-18**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态呈现明显的**“头部高活跃 + 长尾静默”金字塔结构**：OpenClaw 以日均 1000 条 Issue/PR 更新量独占第一梯队，是生态事实上的标杆与规则制定者。第二梯队（Hermes Agent、Zeroclaw、NanoBot、CoPaw）活跃度集中在其 5%–10% 量级，但工程纪律与社区贡献质量均已成熟。竞争焦点已从“功能堆叠”转向**稳定性、资源治理与安全加固**——SQLite 存储膨胀、静默失败、审批安全成为跨项目的共同主战场。多渠道接入（Telegram/Discord/Matrix/钉钉/飞书）是所有项目的标配竞争维度，垂直化（企业中文场景、移动端、桌面陪伴）构成差异化生存空间。中国背景项目（NanoBot、LobsterAI、CoPaw、PicoClaw）在各自细分赛道形成互补格局，其中多个项目（LobsterAI、ZeptoClaw）已将 OpenClaw 作为集成基座，生态开始出现“平台—衍生层”分层。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新（新开/活跃 / 关闭） | PR 更新（待合并 / 合并关闭） | Release | 健康度 |
|---|---|---|---|---|
| **OpenClaw** | 382 / 118 | 247 / 253 | 无 | ★★★★★ 吞吐近 1:1，但 P0/P1 积压重 |
| **Hermes Agent** | 46 / 4 | 44 / 6 | 无 | ★★★★ 修复组织化好，PR 吞吐偏低、贡献准入故障 |
| **Zeroclaw** | 43 / 2 | 44 / 6 | 无（v0.8.6 在途） | ★★★★ 发布纪律成熟，S0 当日回归待处理 |
| **NanoBot** | 4 / 1 | 23 / 21 | 无 | ★★★★★ issue→PR 闭环时效最优秀 |
| **CoPaw** | 8 / 0 | 16 / 1 | 无（v2.2.2 于 10-15） | ★★★ 报告质量高，但合并吞吐慢 |
| **LobsterAI** | 1 / 0 | 6 / 0 | 无（瞄准 10.19 分支） | ★★★ 核心贡献者驱动，社区面窄 |
| **NanoClaw** | 0 / 0 | 12 / 1 | 无 | ★★★ core-team 高产出，社区流入为零 |
| **Moltis** | 0 / 0 | 2 / 1 | 无 | ★★ 功能迭代中，社区静默 |
| **ZeptoClaw** | 0 / 0 | 0 / 1 | 无 | ★★ 单维护者，稳定低频 |
| **EasyClaw** | 0 / 0 | 0 / 0 | **v1.9.34** | ★★ 版本节奏规律，社区互动为零 |
| **PicoClaw** | 0 / 1 | 0 / 1 | 无 | ★☆ stale 机器人清理有价值提案，响应度弱 |
| **NullClaw** | 0 / 0 | 1 / 0 | 无 | ★☆ 贡献流近停滞 |
| **IronClaw** | 0 / 0 | 1（dependabot） / 0 | 无 | ★☆ 典型静默维护日 |

**关键观察**：今日全生态仅 1 个 Release（EasyClaw），但 Zeroclaw v0.8.6 与 LobsterAI 2026.10.19 均已进入发布前夜，未来一周将出现集中发版窗口。

---

## 3. OpenClaw 在生态中的定位

**优势**：
- **规模断层领先**：日均 Issue/PR 活动量约为第二名项目的 10 倍，核心维护者（@steipete、@vincentkoc）保持高节奏提交。
- **问题管理基础设施最完善**：P0–P3 分级、impact 标签、issue-rating、clawsweeper 机器人分诊被社区明确认可，是多项目中唯一将“分诊”工程化的项目。
- **生态溢出效应**：LobsterAI 直接复用 OpenClaw 传输层与配置体系（PR #2897/#2896/#2893 均围绕 openclaw 集成），ZeptoClaw 的 prompt caching 优化也隐含对 Claude 生态的深度适配——OpenClaw 正在从“竞品”演变为部分项目的“底座”。

**技术路线差异**：
- OpenClaw 走**大一统运行时**路线（Gateway 统一接管、插件系统、WASM 化由 Zeroclaw 分头探索），代价是存储层写入放大（CLI 写 1.1–1.4GB）、SQLite 无界增长等 P1 问题集中爆发——大而全与资源可控的矛盾是其当前最大技术债。
- 相比之下，Zeroclaw 走 Rust 单仓多包 + 发布列车路线，NanoBot 走轻量多渠道 + 小步快跑路线，均在工程确定性上对 OpenClaw 形成局部优势。

**社区规模对比**：OpenClaw 单日热度 Issue 评论量（24/19/17 条）即超过多数项目单日全部活动量；Hermes 的 #134889（175 评论）是唯一在单点讨论热度上可与之抗衡的节点。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **磁盘/存储资源治理** | OpenClaw（#157989 写入放大、#114612 无界增长）、LobsterAI（#2893 膨胀至 17GB）、NanoClaw（#4101 SQLite locked） | 长期运行的 agent 实例普遍存在存储失控，保留策略与缓存上限成为刚需 |
| **审批/命令执行安全** | OpenClaw（#125284 ask-mode 审批未阻断 exec、#132303 tools.deny 失效）、Zeroclaw（#11058 命令豁免绕过硬阻断）、NanoClaw（#4117 Approve 被记录为 reject）、CoPaw（#8303 审批送达） | 人机审批链路的**正确性与不可绕过性**是行业级信任问题 |
| **多渠道消息可靠性（静默失败）** | OpenClaw（#101793 Signal 文本丢弃）、Hermes（#140638 WhatsApp 丢消息）、CoPaw（#8278 钉钉静默降级）、Zeroclaw（#9786 配置静默丢弃）、NanoBot（#6291 MCP 错误包装为成功） | “malformed 与 absent 不可区分”式静默失败是跨项目最大公约数痛点 |
| **群聊“观察但不回复”模式** | NanoBot（#6288/#6079/#6286 三用户独立提出）、NanoClaw（#4111 bot-to-bot 回复风暴） | 群聊场景的准入策略与回复解耦是社区强需求 |
| **更新与环境安全** | OpenClaw（#176038/#175984）、Hermes（#140778 更新死锁、#137255 CA 失效）、Zeroclaw（#11262 插件更新回滚） | 更新不得破坏运行中实例、需可回滚、可验证 |
| **成本优化（prompt caching）** | ZeptoClaw（#710 字节级稳定 prompt）、Hermes（#140758 缓存命中率 98%→4%）、Zeroclaw（#11704 午夜缓存失效） | 缓存友好的 prompt 结构设计正在成为 provider 层标配工程 |
| **多供应商接入（含国产模型）** | NullClaw/Moltis（Tsubasa，同一贡献者 @cenab）、NanoBot（DeepSeek 修复）、LobsterAI（Gemini 原生格式） | OpenAI 兼容工厂模式是事实标准，DeepSeek 等国产模型适配需求明确 |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | Zeroclaw | NanoBot | CoPaw | LobsterAI | 其他 |
|---|---|---|---|---|---|---|---|
| **定位** | 全能个人 AI 助手平台 | 统一网关 + 多前端运行时 | 安全优先的本地 agent | 轻量多渠道 bot | 中文企业场景 agent | 桌面陪伴 + Cowork | 垂直/衍生 |
| **技术栈信号** | TS、插件/技能生态 | 网关、CLI/TUI/Desktop 多表面 | Rust、WASM 插件、BTreeMap | 多渠道适配矩阵 | Python、记忆系统 | OpenClaw 集成层 | — |
| **目标用户** | 重度个人用户 | 开发者/自托管 | 安全敏感用户 | 群组部署用户 | 钉钉/飞书/鸿蒙中文企业 | 消费级 + Content Creator | — |
| **特色能力** | Talk 语音、Skill 体系 | kanban、MoA、cron 审计 | tools.optional 攻击面收窄 | Matrix/Napcat 精细策略 | HarmonyOS 客户端（XXXL PR） | 皮肤/截图/陪伴 | — |
| **渠道重心** | Signal/Android Talk | Telegram/WhatsApp/Desktop | Discord/Telegram/ZeroCode | Matrix/Napcat | 钉钉/飞书 | 桌面端 | — |

**关键差异点**：Hermes 是唯一明确推进“单一网关接管所有本地会话”架构（#106742）的项目，与 OpenClaw 的 Gateway 演进路径殊途同归，构成未来最直接的架构竞争；Zeroclaw 以安全（owner-only 数据目录、命令切分、插件验证回滚）为独特卖点；CoPaw 深耕中文企业渠道形成护城河；Moltis 的 gpui 原生桌面 + daemon 分离是客户端形态上的独立探索。

---

## 6. 社区热度与成熟度分层

**第一梯队 — 快速迭代 + 规模化（OpenClaw）**：功能与深度重构并行，问题在于积压而非停滞；P0（#115642 计费冷却积压 3 个月）显示产品决策速度落后于工程速度。

**第二梯队 — 质量巩固期（Hermes、Zeroclaw、NanoBot）**：
- Hermes：大合并后高强度修复期，修复包 lane 化推进“过半”，组织化程度最好，但 PR 积压 44 条 + 贡献者权限故障是最大健康风险；
- Zeroclaw：v0.8.6 发布前夜，功能冻结完成，工程纪律最成熟，需确保不带 S0 出门；
- NanoBot：唯一实现“当日 issue → 当日 fix PR”闭环的项目，小步快跑最健康。

**第三梯队 — 功能迭代期（CoPaw、LobsterAI、NanoClaw）**：提交活跃但合并吞吐慢，普遍存在 1–6 个月的 PR 积压（NanoClaw #1938 积压 6 个月、LobsterAI #1181 积压 6.5 个月、CoPaw #7211 评审近 2 个月），共同瓶颈是 **review 带宽**。

**第四梯队 — 静默/停滞（PicoClaw、NullClaw、IronClaw、EasyClaw、TinyClaw、ZeptoClaw）**：PicoClaw 的 stale 机器人误杀有价值贡献（#3414 turn 预算、#3415 反向代理）是反面教材——stale 机制若无人工分诊前置，会系统性损害社区贡献意愿。

---

## 7. 值得关注的趋势信号

1. **“存储与资源治理”成为 agent 项目的成年礼问题**：OpenClaw 的 SSD 磨损、LobsterAI 的 17GB 膨胀、OpenClaw 的 worker churn（80% CPU）表明——一旦 agent 进入 7×24 常驻运行，资源可控性比功能更能决定留存。新项目应在架构早期内置保留策略、缓存上限与写入预算。

2. **静默失败被普遍视为最不可接受的行为**：至少 5 个项目今日都有此类抱怨（配置丢弃、消息丢失、降级无信号、错误包装为成功）。**fail-loud + 可观测的失败语义**应是 agent 框架的一等公民设计原则。

3. **审批安全正在从功能变为合规底线**：OpenClaw #125284（审批前执行命令）、Zeroclaw #11058（豁免绕过硬墙）、NanoClaw #4117（Approve 误记为 reject）共同指向：**人机审批链路的正确性审计**将成下一个竞争维度。

4. **缓存友好架构直接等于成本**：ZeptoClaw 的字节级稳定 prompt、Hermes 的 98%→4% 缓存塌缩、Zeroclaw 的午夜日期失效说明，prompt 的确定性（有序工具注册表、时间信息外置）已是 provider 层必修课。

5. **“观察模式”是群聊 agent 的下一个标配**：三个项目独立出现同一需求，实现模式趋同（准入策略 + per-room 覆盖 + fail-closed 身份识别），值得框架层抽象。

6. **生态分层正在形成**：OpenClaw 向“平台/协议层”演进，衍生项目（LobsterAI）基于其构建垂直体验——类似 Linux 发行版与内核的关系。对开发者而言，选择“基于 OpenClaw 构建”还是“独立运行时”将是一个日益显性的架构决策。

7. **贡献者体验决定社区天花板**：Hermes 的 PR 权限故障与 PicoClaw 的 stale 误杀共同证明——在 agent 项目普遍依赖高质量社区贡献（带复现、带根因分析的 Issue 已成主流）的当下，**维护者响应 SLA 本身就是产品竞争力**。

---
*方法说明：本报告基于各项目 24 小时活动快照，长尾项目的单日数据代表性有限，趋势判断建议结合多周窗口验证。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 · 2026-10-18

## 1. 今日速览

NanoBot 今日保持高活跃度：24 小时内 Issues 更新 5 条（新开/活跃 4，关闭 1），PR 更新 44 条（待合并 23，已合并/关闭 21），无新版本发布。今日焦点集中在 **Matrix 渠道的群组策略增强**（#6288/#6286 配套 PR 一天内 issue+PR 成对提交）与 **web_search 工具的 DuckDuckGo 重试修复**（#6285 → PR #6290 响应迅速）。合并侧以 WebUI 打磨和测试质量提升为主，整体呈“功能迭代 + 深度加固”并行推进的健康节奏。

## 2. 版本发布

今日无新版本发布。（最新主线版本参考 v0.3.5）

## 3. 项目进展

今日已合并/关闭 21 条 PR，代表性进展：

- **PR #6284**（已关闭）[fix(tools): apply_patch 支持顶层 path](https://github.com/HKUDS/nanobot/pull/6284) — 单文件补丁不再需要逐条重复路径，工具易用性提升。
- **PR #6279**（已关闭）[feat(webui): 侧边栏话题内联重命名](https://github.com/HKUDS/nanobot/pull/6279) — 落地 Linear 任务 NAN-249，去掉打断对话的弹窗。
- **PR #6282**（已关闭）[test: 用行为覆盖替换"假绿灯"测试](https://github.com/HKUDS/nanobot/pull/6282) — 修复多处不经实际路径即可通过的测试，提升 CI 可信度。
- **PR #6281**（已关闭）[fix(webui): 搜索活动摘要单行显示](https://github.com/HKUDS/nanobot/pull/6281) — 对应 NAN-248。
- **PR #5490**（已关闭）[fix(webui): 聚合 turn token 用量展示优化](https://github.com/HKUDS/nanobot/pull/5490) — 追近 2 个月的回归修复，显示模型调用次数与上下文容量。

待合并队列（23 条）中值得关注的存量大型工作：**#6168 应用内可恢复更新集成**（明确标注“暂不可合并”）、**#6261 实例存储统一到 home 目录**（NAN-264）、**#3745 SSE 工具进度事件**（挂起 5 个月，存在冲突）。整体节奏：每日稳定合并小步快跑的功能/修复，大型架构类 PR 审查周期较长。

## 4. 社区热点

- **Issue #6288 + PR #6289：Matrix "listen" 群组策略**（[Issue](https://github.com/HKUDS/nanobot/issues/6288) / [PR](https://github.com/HKUDS/nanobot/pull/6289)）— @orrinwitt 一日内 issue/PR 成对提交，指出 `mention` 策略下未通过检查的消息被直接丢弃，bot 被 @ 时毫无上下文。诉求明确：**观察 vs 回复解耦**。与 10 月初的 **#6079**（[@dmerkert，允许 agent 观察群消息但不总是回复](https://github.com/HKUDS/nanobot/issues/6079)）形成呼应，说明"群聊静默观察"是社区多用户反复提出的强需求。
- **Issue #6286 + PR #6287：per-room groupPolicyOverrides**（[Issue](https://github.com/HKUDS/nanobot/issues/6286) / [PR](https://github.com/HKUDS/nanobot/pull/6287)）— 同一作者补齐 Matrix 与 Napcat 渠道的策略粒度对齐，反映多房间部署用户的精细控制诉求。
- **Issue #5833（已关闭）：SSE 消费端丢弃 reasoning_text 事件**（[链接](https://github.com/HKUDS/nanobot/issues/5833)）— 指出 SDK 与 SSE 两条流式路径行为不一致，推理文本在 SSE 路径丢失，已修复关闭。

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | **#6285** [web_search DuckDuckGo 无重试/退避，连续搜索报 "No results found"](https://github.com/HKUDS/nanobot/issues/6285) | ✅ 已有 fix PR [#6290](https://github.com/HKUDS/nanobot/pull/6290)（限次指数退避） |
| 高 | **#6291（PR）** MCP resource/prompt 失败被包装为成功结果（`is_error` 未设置），掩盖工具真实错误 | PR 待合并 |
| 中 | **#6138** Matrix 流式编辑的 `m.new_content` 丢失 HTML 格式 | PR 待合并 |
| 中 | **#6140** `read_file` 与 `edit_file` 行号计数不一致（Unicode 分隔符差异） | PR 待合并 |
| 中 | **#6097** XLSX 图表页导致文档流提取 `AttributeError` 并中断 `read_file`/`grep` | PR 待合并 |
| 中 | **#6197** `web_fetch` 未按 RFC 9110 大小写不敏感处理 `Content-Type`，图片被当文本返回 | PR 待合并 |
| 安全 | **#5866** CLI Apps 注册表元数据未签名，存在供应链投毒风险；改为记录安装来源并在漂移时 fail-closed | PR 待合并（长期） |

整体看，**bug 报告基本都有 issue→PR 的闭环**，响应时效高（当日/近 3 日内）。

## 6. 功能请求与路线图信号

- **群聊“观察但不回复”能力**（#6288/#6079 → PR #6289）：已有实现 PR 且带 WebUI 配置支持，大概率进入下一版本；#6287 的 per-room overrides 同步跟进。
- **SSE 工具进度事件**（PR #3745，对应 #3698）：5 个月未合并且标记 conflict，如能解决冲突将显著改善流式 API 可观测性。
- **应用内可恢复更新**（PR #6168 + 后续 #6280）：维护者持续自审，明确“未达发布标准”，属于明确的路线图长期项。
- **实例存储统一**（PR #6261，NAN-264）：涉及配置/工作区/进程标识解析顺序重定义，属潜在破坏性变更，需关注迁移说明。
- **DeepSeek 能力对齐**（PR #6283）：修复 `deepseek-v4-flash` 静默丢弃图像的问题，适配国产模型用户群。

## 7. 用户反馈摘要

- **群聊场景体验差**是多用户共识痛点：被 @ 时无历史上下文、无法只听不说、无法按房间差异化策略（#6079/#6288/#6286 三位不同用户独立提出同类需求）。
- **默认开箱即用工具不可靠**：无 API key 的 DuckDuckGo 搜索连续调用即失败（#6285），对新用户首次体验伤害大。
- **流式/双路径一致性问题**：SDK 与 SSE 行为不对齐（#5833）、HTML 富文本在 Matrix 编辑中丢失（#6138），说明多 provider/多渠道矩阵的维护成本开始显现。
- **积极信号**：社区贡献质量高，issue 均附带源码定位与复现细节，PR 普遍带测试与 Linear 任务关联。

## 8. 待处理积压

- **PR #3745**（SSE 工具进度，5 月提交至今未合并，存在 conflict）— 建议维护者裁决 rebase 或关闭重提。
- **PR #6168**（应用内更新集成，10 月 12 日起持续审查中）— 长链路大变更，需明确合并时间表。
- **PR #5866**（CLI Apps 安全加固，9 月 22 日起）— 涉及供应链安全，建议优先排期。
- **PR #6140 / #6138**（AI batch PRs，10 月 10 日起，标记 conflict）— 堆积的批量修复需批量处理冲突。
- **Issue #6079**（群聊观察模式，10 月 5 日，仅 1 评论）— PR #6289 已实现同类能力，建议关联并尽快给出官方回应。

---
*数据来源：HKUDS/nanobot GitHub 过去 24 小时活动快照。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-10-18

## 1. 今日速览

Zeroclaw 今日保持高度活跃，过去 24 小时 Issues 更新 45 条（新开/活跃 43，关闭 2），PR 更新 50 条（待合并 44，已合并/关闭 6），无新版本发布。核心动向是 **v0.8.6 版本冲刺**：版本号 bump PR（#11835）、翻译 pin（#11836）、CI 加固（#11832/#11833）密集落地，说明 v0.8.6 已进入发布候选收尾阶段。同时社区贡献者持续报出安全与稳定性问题（含两个 S0 级），维护者响应积极，项目健康度良好。

---

## 2. 版本发布

过去 24 小时无新 Release 发布。但 **v0.8.6 发布在即**：

- [PR #11835](https://github.com/zeroclaw-labs/zeroclaw/pull/11835)（已关闭）已将工作区 30 个包从 0.8.5 协调 bump 至 0.8.6
- [PR #11836](https://github.com/zeroclaw-labs/zeroclaw/pull/11836)（已关闭）将文档翻译 pin 到 v0.8.6 目录

预计近期 tag 发布，关注 [Tracker #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 的交付清单。

---

## 3. 项目进展

今日关闭的 6 个 PR 中有多项重量级交付：

| PR | 内容 | 意义 |
|---|---|---|
| [#11221](https://github.com/zeroclaw-labs/zeroclaw/pull/11221) (XL, risk:high) | opt-in 最小内置工具集（`[tools].optional` 选择机制） | v0.8.6 核心架构改动，收窄默认攻击面 |
| [#11262](https://github.com/zeroclaw-labs/zeroclaw/pull/11262) (XL) | `zeroclaw plugin update` 带验证替换与回滚 | 补齐 #10995 缺失的插件更新契约 |
| [#11347](https://github.com/zeroclaw-labs/zeroclaw/pull/11347) (XL) | WASM 插件宿主随支持性发布产物交付 | 插件生态关键里程碑 |
| [#11835](https://github.com/zeroclaw-labs/zeroclaw/pull/11835) | v0.8.6 版本 bump | 发布流程启动 |
| [#11836](https://github.com/zeroclaw-labs/zeroclaw/pull/11836) | 翻译 pin 到 v0.8.6 | 发布配套 |
| [#11789](https://github.com/zeroclaw-labs/zeroclaw/pull/11789) | Alpine 容器构建修复 | 社区贡献（@seungjin） |

**整体进展评估**：#7432 Tracker 中 Phase 2（v0.8.6 runtime 工作）的核心拼图（工具选择、插件更新、WASM 分发）基本就位，v0.8.6 功能冻结完成，进入 CI/发布流水线收尾（#11831/#11832 处理 macos-14 弃用、#11833 处理 arm64 构建内存）。v0.8.7 管线（gateway 分离、skills 修复、数据目录安全）也已排入。

---

## 4. 社区热点

- **[#7432 Tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)**（10 评论）— v0.8.6/v0.9.0 总交付追踪器，讨论集中在最后缺口与排序，是当前项目节奏的中枢。
- **[#11418 ZeroCode 一键复制失效](https://github.com/zeroclaw-labs/zeroclaw/issues/11418)**（5 评论，S1）— TUI 用户工作流被阻断，剪贴板集成跨平台问题，社区持续跟进。
- **[#10999 Discord 插件发布验证](https://github.com/zeroclaw-labs/zeroclaw/issues/10999)**（4 评论）— blocked 状态，等待注册表发布兼容的 WASM 包，反映插件分发链路尚未闭环。
- **[#9786 SOP.toml 静默丢弃](https://github.com/zeroclaw-labs/zeroclaw/issues/9786)**（4 评论，P1/high risk）— 配置解析失败零诊断，“malformed 与 absent 不可区分”，是可观测性诉求的典型代表。

**背后诉求**：用户希望“配置即真相”——错误必须可见，而不是静默吞掉。

---

## 5. Bug 与稳定性（按严重度排序）

### S0 — 数据丢失/安全风险
1. **[#11796 守护进程启动时索要 GitHub 凭据并阻塞](https://github.com/zeroclaw-labs/zeroclaw/issues/11796)**（10-16 新报，疑似当日回归，待确认是否有 fix PR）
2. **[#11058 `allowed_commands` 字面量豁免高危命令](https://github.com/zeroclaw-labs/zeroclaw/issues/11058)**（P1，status:in-progress）— 已有修复方向：[PR #11822](https://github.com/zeroclaw-labs/zeroclaw/pull/11822) 在替换/子 shell 边界正确切分 POSIX 命令（open，待合并）

### S1 — 工作流阻断
3. **[#11087 Windows 关窗后应用既无法重开也无法退出](https://github.com/zeroclaw-labs/zeroclaw/issues/11087)**（P1，accepted）→ 修复在途：[PR #11827](https://github.com/zeroclaw-labs/zeroclaw/pull/11827)（kill-on-close job object）
4. **[#11418 ZeroCode 复制按钮失效](https://github.com/zeroclaw-labs/zeroclaw/issues/11418)** — in-progress
5. **[#11777 循环检测阈值过低误杀正常工作流](https://github.com/zeroclaw-labs/zeroclaw/issues/11777)**（10-16 新报，无 fix PR）

### S2 — 行为退化
6. **[#11706 max_image_turns 后视觉路由粘滞](https://github.com/zeroclaw-labs/zeroclaw/issues/11706)** → 已有 fix：[PR #11716](https://github.com/zeroclaw-labs/zeroclaw/pull/11716)
7. **[#11332/#11333 skill review/creation 对 channel/webhook/gateway 与 skill_bundles 不生效](https://github.com/zeroclaw-labs/zeroclaw/issues/11332)** — accepted，排入 v0.8.7
8. **[#11562 插件更新期间清单/组件跨代配对](https://github.com/zeroclaw-labs/zeroclaw/issues/11562)** — accepted，排入 v0.8.7

### S3 — 次要
- **[#11834 Rust 1.99 clippy 18 项新告警](https://github.com/zeroclaw-labs/zeroclaw/issues/11834)**（10-18 新报，CI 仍 pin 1.98）
- **[#11713 Telegram 忽略 edited_message 更新](https://github.com/zeroclaw-labs/zeroclaw/issues/11713)**
- **[#11704 系统提示携带日期导致午夜 prompt cache 失效](https://github.com/zeroclaw-labs/zeroclaw/issues/11704)**

---

## 6. 功能请求与路线图信号

明确指向 **v0.8.7** 的新需求（多为 @JordanTheJet 昨日密集开出的任务，可见 v0.8.6 后路线已在铺设）：

- **[#11793 数据目录 owner-only 创建 + 组/世界可写检测](https://github.com/zeroclaw-labs/zeroclaw/issues/11793)** — 与 #11794 配套，统一 daemon 状态目录信任规则
- **[#11794 无 Unix 权限文件系统（WSL `/mnt/c`、CIFS、FAT）的 per-user 锁回退](https://github.com/zeroclaw-labs/zeroclaw/issues/11794)** — 解决 #10621 后启动拒绝问题
- **[#11788 区分"已配置但未选择"与"不可用"工具](https://github.com/zeroclaw-labs/zeroclaw/issues/11788)**、**[#11787 警告未知 tools.optional 项](https://github.com/zeroclaw-labs/zeroclaw/issues/11787)** — 均为刚合并的 #11221 的 follow-up，几乎确定纳入下版本
- **[#10999 Discord 插件端到端发布验证](https://github.com/zeroclaw-labs/zeroclaw/issues/10999)** — 依赖 #11347 落地后的注册表包，v0.8.6 后续
- **[#11324/#11325 daemon 身份验证统一与 Windows named-pipe 验证](https://github.com/zeroclaw-labs/zeroclaw/issues/11324)** — #11805 PR 已在途（blocked 于 #11313 rebasing）

---

## 7. 用户反馈摘要

**痛点**：
- **静默失败是最大抱怨**：#9786（SOP 配置无诊断丢弃）、#9902（`sop.max_concurrent_total` 未文档化且拒绝信息不点名）均指向“配置错了但系统假装没问题”
- **安全语义反直觉**：#11058 用户合理预期 `block_high_risk_commands` 是硬墙，却被 `allowed_commands` 字面量绕过且无日志
- **Windows 体验欠佳**：#11087 关窗残留进程、#11325 授权编辑不生效，桌面端 Windows 一等公民地位仍待补齐
- **学习循环覆盖不全**：#11332 用户期望 skill 自动改进在所有渠道生效，发现仅 CLI/cron 可用
- **保护机制过紧**：#11777 循环断路器 6 次阈值阻断大批量文件任务

**满意点**：skill_bundles 加载即用（#11333）、多模态配置可工作（#11706 问题为边缘路径）、社区报障后维护者快速打 label 并排期。

---

## 8. 待处理积压

| Issue/PR | 状态 | 建议 |
|---|---|---|
| [#11796 S0: 启动索要 GitHub 凭据](https://github.com/zeroclaw-labs/zeroclaw/issues/11796) | 10-16 新报 | **紧急**：疑似当日回归，需立即定位是哪个依赖/更新引入 |
| [#11058 S0/P1: 命令豁免绕过硬阻断](https://github.com/zeroclaw-labs/zeroclaw/issues/11058) | in-progress | PR #11822 待评审合并，建议纳入 v0.8.6 或在发布说明中警示 |
| [#11301 XL PR: 跨 CLI/gateway/RPC 的重命名恢复](https://github.com/zeroclaw-labs/zeroclaw/pull/11301) | needs-author-action，10-01 起 open | 维护者需推进评审，阻塞多个后续 stacked PR |
| [#10446 XL PR: 拒绝泄漏到正文的工具调用信封](https://github.com/zeroclaw-labs/zeroclaw/pull/10446) | 8-29 起 open，#11299 依赖它 | 生产实例已复现，建议优先处理 |
| [#9902 P1: 并发上限未文档化](https://github.com/zeroclaw-labs/zeroclaw/issues/9902) | 8-10 起 open，no-stale | 文档修复成本低，易纳入 v0.8.7 |
| [#11080 测试平台无关性 XS PR](https://github.com/zeroclaw-labs/zeroclaw/pull/11080) | 9-24 起 open | 小改动，评审快通道可清掉 |

---

**总结**：项目处于 v0.8.6 发布前夜，工程纪律（架构测试、发布流程自动化）成熟，安全与可观测性是当前主线。建议维护者优先处理 #11796（当日 S0 回归）和 #11822 评审合并，确保 v0.8.6 不带已知 S0 出门。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-10-18

## 1. 今日速览

Hermes Agent 今日保持高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 46，关闭 4），PR 更新 50 条（待合并 44，已合并/关闭 6），无新版本发布。项目当前的核心主线依然是 **统一网关运行时（#106742，已于 10-14 合入 main）的合并后修复工作**，追踪 Issue [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) 评论数已达 175 条，是全项目最热的讨论节点。社区贡献管线健康，今日新开 PR 覆盖 cron 审计、委派结果保存、流式恢复等多个方向，但 PR 积压明显（44 条待合并），合并吞吐偏慢。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭共 6 个 PR，另有多个里程碑性质的 Issue 关闭：

- **网关修复包 2 完结**：[#139160](https://github.com/NousResearch/hermes-agent/issues/139160)（会话创建、模型选择、凭据）标记完成并关闭，@teknium1 给出总结，全部条目已在 main 修复或确认非回归。
- **网关修复包 9 提出**：[#140337](https://github.com/NousResearch/hermes-agent/issues/140337) 关闭前汇集 17 个开放发现（detach/断连、Ink/Desktop 遗留、经典 CLI 遗留、Windows），按 5 条 lane 拆分，可无人值守执行——显示网关修复已进入收尾冲刺阶段。
- **经典 CLI 修复包 1 推进**：[#139158](https://github.com/NousResearch/hermes-agent/issues/139158) 中，main 已合入 #139351（CLI-30/31 部分成因）和 #138717（`/new` 半边 CLI-16），CLI-12/16/30/31 的成员 PR 正在评审中。
- **网关更新路径修复**：[#140778](https://github.com/NousResearch/hermes-agent/pull/140778) 修复 stable 渠道安装因网关运行时历史记录而永久无法更新的死锁（GW-19）。
- 其他关闭 PR：[#140869](https://github.com/NousResearch/hermes-agent/pull/140869)（MoA advisor 工具结果预算配置化，与 #105612 方向重合后关闭）、[#51577](https://github.com/NousResearch/hermes-agent/pull/51577)（WebUI 异步委派恢复，标记已在 main 实现）。

**评估**：网关合并后修复以“打包分包 + lane 化推进”的方式系统化进行，包 2 完成、包 9 立项，整体修复进度约过半，是本周最强的推进信号。

## 4. 社区热点

1. **[#134889](https://github.com/NousResearch/hermes-agent/issues/134889)（175 评论）** — 统一网关合并后修复总追踪。热度反映了社区对“单一网关接管所有本地会话”这一架构变更的高关注，用户密集回报桌面端、TUI、CLI 各表面的会话归属、凭据、断连问题。诉求核心：架构统一不能以日常使用回归为代价。
2. **[#131859](https://github.com/NousResearch/hermes-agent/issues/131859)（44 评论）** — @kuehnberger 报告从 fork 通过 API 开 PR 时遭遇 `CreatePullRequest` 权限错误（仅限其账号）。这是一个**阻塞贡献者提 PR 的基础设施问题**，且与 #135782 中提到的“每作者开放 PR 上限”叠加，正在实质性地抑制社区贡献，建议维护者优先澄清。
3. **[#122160](https://github.com/NousResearch/hermes-agent/issues/122160)（10 评论）** — Windows 源码安装下外部 Python 入口被 `hermes_bootstrap` 错误 re-exec，导致 hermes-webui 启动失败。Windows 兼容性仍是高频痛点。
4. **[#83047](https://github.com/NousResearch/hermes-agent/issues/83047)（7 评论）** — kanban `blocker_auth` 守卫使就绪任务永久挂起，无 drain 机制。
5. **[#137255](https://github.com/NousResearch/hermes-agent/issues/137255)（已关闭，6 评论）** — P0：环境轮换后 certifi CA 路径失效导致 TLS 永久失联，长生命周期进程的典型陷阱，已关闭。

## 5. Bug 与稳定性（按严重度）

| 严重度 | 问题 | 状态 / Fix PR |
|---|---|---|
| P0 | [#135392](https://github.com/NousResearch/hermes-agent/issues/135392) Nous Cloud 新实例环境更新后陷入网关所有权重启循环 | OPEN，needs-repro，尚无 fix PR |
| P0 | [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) 网关合并后综合修复追踪（含多个子项） | 修复包 2 已完成，包 1/9 进行中 |
| P0（已闭环） | [#137255](https://github.com/NousResearch/hermes-agent/issues/137255) TLS CA bundle 随环境轮换失效 | CLOSED |
| P2 | [#140758](https://github.com/NousResearch/hermes-agent/issues/140758) Nous 后台 review 致 ~400k warm cache tokens 损失（98%→4%），配额消耗异常加速 | OPEN，无 fix PR，影响成本 |
| P2 | [#140858](https://github.com/NousResearch/hermes-agent/issues/140858) running 卡片 worker 被杀后永久不可回收，静默占满 profile 槽位 | OPEN，今日新报 |
| P2 | [#140638](https://github.com/NousResearch/hermes-agent/issues/140638) WhatsApp 适配器不标记 retryable，桥接重连期间消息静默丢失 | OPEN |
| P2 | [#140845](https://github.com/NousResearch/hermes-agent/issues/140845) 编辑已发送 Telegram 消息触发 `RuntimeStoreError: admission_conflict` | OPEN，今日新报 |
| P2 | [#140803](https://github.com/NousResearch/hermes-agent/issues/140803) 消息端 `/kanban` `/curator` 参数含引号即 shlex 崩溃（会话端已修，消息端遗漏） | OPEN |
| P2 | [#140838](https://github.com/NousResearch/hermes-agent/issues/140838) 已吊销 Codex OAuth 凭据导致模型选择器列表残缺 | OPEN |
| P2 | [#140606](https://github.com/NousResearch/hermes-agent/issues/140606) 外部进程 provider 被强制禁用流式 | OPEN，**已有对应 fix PR [#140868](https://github.com/NousResearch/hermes-agent/pull/140868)** |
| P2 | [#122365](https://github.com/NousResearch/hermes-agent/issues/122365) 单 profile dashboard 的 Chat tab 自起第二后端，Desktop ↔ 控制台续聊被拒（SESSION_NOT_OWNED） | OPEN |
| P2 | [#126631](https://github.com/NousResearch/hermes-agent/issues/126631) macOS 上托管 llama-server 在 Hermes 退出后存活、模型常驻内存 | OPEN |
| P3 | [#140437](https://github.com/NousResearch/hermes-agent/issues/140437) Home Manager 模块仅改环境变量时不重启服务 | OPEN |

今日新报 bug 以 P2 为主，集中在网关会话归属、消息平台边界和凭据池三条线上。

## 6. 功能请求与路线图信号

- **外部 CLI worker 调度**：[#70547](https://github.com/NousResearch/hermes-agent/issues/70547)（👍2）请求 kanban dispatcher 支持为非 profile 分配者（Claude Code、Codex CLI 等子进程 worker）配置化 spawn，已有 `spawn_fn` seam，落地路径清晰，社区呼声稳定。
- **跨渠道项目工作区**：[#96683](https://github.com/NousResearch/hermes-agent/issues/96683) 提议显式 Project Workspace 与跨渠道路由，面向多 Telegram 账号/群组的长期项目工作流，needs-decision 状态待维护者表态。
- **凭据池多账号 failover**：[#140821](https://github.com/NousResearch/hermes-agent/issues/140821) 支持同一 provider 多订阅账号的环境变量凭据源——与今日 fix PR [#140868](https://github.com/NousResearch/hermes-agent/pull/140868)、#140838 同属凭据池强化主题，可能一起进入下一版本。
- **桌面截图介入**：[#96759](https://github.com/NousResearch/hermes-agent/issues/96759) 请求 Desktop live-turn Steer 支持图片附件，属 Desktop 体验持续打磨方向。
- PR 侧新能力信号：[#140855](https://github.com/NousResearch/hermes-agent/pull/140855) 网关上下文压力驱动的自动 handoff/会话滚动（opt-in）、[#140854](https://github.com/NousResearch/hermes-agent/pull/140854) API server 提供已存图片的鉴权访问、[#140872](https://github.com/NousResearch/hermes-agent/pull/140872) cron 执行结果 30 天审计窗口——均可能在合并后构成下个版本亮点。

## 7. 用户反馈摘要

- **痛点集中区**：① 网关统一后的会话归属/断连（#134889 系）；② 更新与环境轮换破坏长生命周期进程（#137255、#140778）；③ Windows/macOS 平台特定回归（#122160、#126631）；④ Nous 平台缓存命中率塌缩直接推高使用成本（#140758），成本敏感用户不满明显。
- **积极信号**：修复包模式（分包 + lane + 无人值守）被社区认可，#139160 的完结总结获得好评；社区修复意愿强——#135782 作者在无法开 PR 的情况下直接在分支上给出 3 行修复供 cherry-pick，是典型的高质量贡献被流程卡住的案例。
- **摩擦点**：贡献者开 PR 受限（#131859 权限错误、每作者 PR 上限）正在制造挫败感。

## 8. 待处理积压

- [#131859](https://github.com/NousResearch/hermes-agent/issues/131859)（blocked）— 贡献者 PR 权限错误，10-03 至今未解，**建议维护者优先处理**，直接影响社区贡献管线。
- [#83047](https://github.com/NousResearch/hermes-agent/issues/83047) — kanban auth 守卫任务挂起，8-10 开启，needs-decision。
- [#70547](https://github.com/NousResearch/hermes-agent/issues/70547) — 外部 worker spawn 配置化，7-24 开启，needs-decision，有明确社区需求。
- [#96683](https://github.com/NousResearch/hermes-agent/issues/96683) — 项目工作区提案，8-27 开启，needs-decision。
- [#122365](https://github.com/NousResearch/hermes-agent/issues/122365) / [#122160](https://github.com/NousResearch/hermes-agent/issues/122160) / [#123184](https://github.com/NousResearch/hermes-agent/issues/123184) — 三周以上未闭环的 P2 会话/平台问题。
- PR 积压：44 条待合并，其中 [#100332](https://github.com/NousResearch/hermes-agent/pull/100332)（9-01）与 [#110554](https://github.com/NousResearch/hermes-agent/pull/110554)（9-14）等待评审超一个月。

**健康度结论**：项目处于“大合并后的高强度修复期”，Issue 活跃、社区参与度高、修复组织化程度好，但 PR 合并吞吐偏低、贡献准入故障和 P0 云实例问题（#135392）是当前两个最值得关注的健康风险点。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-10-18

## 1. 今日速览
- 过去 24 小时项目整体活跃度**偏低**：仅 1 条 Issue 更新（关闭）与 1 条 PR 更新（关闭），无新开 Issue/PR，无新版本发布。
- 两条更新均因 **[stale] 标记被自动/人工关闭**，且都发生在 10-17，属于机器人化清理动作，而非实质性功能推进。
- 需要关注的是，被关闭的两个议题（反向代理支持、turn 时间预算）均为有真实用户价值的提案，长期未获维护者实质回应后被清理，是**社区响应度偏弱的信号**。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日无合并 PR，无实质功能推进。

- PR [#3414](https://github.com/sipeed/picoclaw/pull/3414) `feat(agent): add wall-clock turn time budget` 被关闭（stale）。该 PR 由社区贡献者 @racso2609 提出，为 Agent 每轮对话增加可选的墙上时钟时间预算（`agents.defaults.turn_time_budget_seconds`，默认 0 禁用），超时后要求 Agent 停止调度新工具并输出阶段性总结，防止无限循环消耗资源。**该功能实现被关闭，未能进入主线**，对 Agent 可控性是一个损失。

## 4. 社区热点
- Issue [#3415](https://github.com/sipeed/picoclaw/issues/3415) `[Feature] 反向代理 / 子路径挂载支持`（@altman08，2 条评论）— 今日热度最高。诉求：在 Nginx 下将 Web Console 挂载到 `/pico/` 等子路径，当前前端/后端存在硬编码根路径（`/api/...`、`/launcher-login`、`/pico/ws`），仅靠 Nginx 转发无法覆盖 WebSocket、附件等请求。该诉求反映**自部署/多服务共存场景下的部署灵活性需求**，但已被 stale 关闭。

## 5. Bug 与稳定性
今日无新报告的 Bug、崩溃或回归问题。

## 6. 功能请求与路线图信号
- **子路径部署支持（#3415）**：典型企业/家用自部署痛点，若后续重启讨论，技术方案大概率是引入可配置的 base path / URL prefix 启动参数。目前无对应活跃 PR。
- **Turn 时间预算（#3414）**：实现已存在但被关闭；若维护者认可防循环失控的价值，可考虑重新开启或自行实现。当前无纳入下一版本的明确信号。

## 7. 用户反馈摘要
- 自部署用户（#3415）希望在**同一域名下与其他服务共存**，而非让 PicoClaw 独占根路径——说明部分用户将其作为个人/团队基础设施的一环而非独立应用使用。
- 贡献者（#3414）关注 **Agent 长循环失控与资源消耗**问题，希望有硬性预算机制兜底。
- 负面信号：两个有价值提案均因缺乏维护者回应而 stale 关闭，贡献者与需求方的反馈未被承接。

## 8. 待处理积压
- [Issue #3415](https://github.com/sipeed/picoclaw/issues/3415)：虽已关闭，但子路径部署是高频自部署需求，建议维护者评估后 reopen 或纳入 roadmap，避免用户重复提交。
- [PR #3414](https://github.com/sipeed/picoclaw/pull/3414)：功能完整度较高的社区贡献被 stale 关闭，建议维护者给出 review 意见或说明不采纳原因，以维护社区贡献积极性。
- 整体提醒：建议定期清理 stale 前先对带完整提案模板的 Feature Request/PR 做一轮人工分诊，减少有价值的讨论被机器人误伤。

---
**健康度小结**：今日为零新增、零合并的低活跃日，且两项社区产出被 stale 机制回收。短期功能演进停滞，建议关注维护者对上述两议题的后续表态。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-10-18

## 1. 今日速览

NanoClaw 今日无新 Issue、无新版本发布，但 PR 活动显著活跃：过去 24 小时内共 13 条 PR 更新（12 条待合并、1 条关闭），其中 6 条为 10-17 当日新开，显示出核心团队（core-team 标签）在渠道适配、Telegram B2B 准入、模板库体系等方向上的密集推进。项目整体处于功能迭代期而非发版窗口，活跃度评估为**中高**，主要由维护者驱动，社区侧新报告缺失值得关注。

## 2. 版本发布

今日无新版本发布，省略。

## 3. 项目进展

**今日关闭/合并的 PR（1 条）：**

- [#4042](https://github.com/nanocoai/nanoclaw/pull/4042) [CLOSED] — 将 `/add-resend` skill 的 Resend 适配器依赖从 0.1.1 升级至 0.3.0，消除了经由 `uuid@10.0.0` 引入的 4 个 moderate 级 npm audit 安全告警。属于安全加固性质的维护性收尾。

**待合并的关键 PR（按推进方向分组）：**

- **Telegram B2B 准入体系（三件套，同一作者 @shrwnsan，协同设计）**：
  - [#4111](https://github.com/nanocoai/nanoclaw/pull/4111) — 在 `TELEGRAM_BOT_INBOUND` 开关后实现 bot-to-bot 准入门（doorman），阻止其他 Telegram bot 唤醒 agent 形成无界回复循环
  - [#4115](https://github.com/nanocoai/nanoclaw/pull/4115) — Telegram 适配器侧的准入策略注册，补齐 adapter 缺失的 reply context 字段
  - [#4116](https://github.com/nanocoai/nanoclaw/pull/4116) — 运维 skill `/add-b2b-peer`，引导操作者完成 BotFather B2B 配置、准入白名单与成员注册
  - 配套修复 [#3601](https://github.com/nanocoai/nanoclaw/pull/3601) — 通过 `getMe` 精确识别对当前 bot 的回复，bot 身份不可解析时 fail-closed
- **模板库体系**：[#4113](https://github.com/nanocoai/nanoclaw/pull/4113)（setup 的模板选择器改读 `index.json`）与 [#4112](https://github.com/nanocoai/nanoclaw/pull/4112)（chat 中从模板创建 agent，替代手写 persona）构成本地+公共模板库的完整链路
- **UX 改进**：[#3786](https://github.com/nanocoai/nanoclaw/pull/3786) — typing 指示器跟随 runner 的 turn 状态（`working/idle/null`），支持短状态行显示

整体判断：Telegram B2B 互操作 + 模板驱动 agent 创建是当前两条主线，若合并，将显著扩展 agent 间协作与上手体验，属于**里程碑级功能推进**。

## 4. 社区热点

今日无新增 Issue，PR 评论数据缺失，无明确热点讨论。从 PR 作者分布看，@shrwnsan 一天内连开 3 个关联 PR（#4111/#4115/#4116），是当前最活跃的贡献方向，反映社区对 **Telegram bot 生态互操作**（B2B 模式开放后）的强烈诉求：防止回复风暴、实现受控 peer 接入。

## 5. Bug 与稳定性

今日无新报告 Bug。待合并的修复类 PR：

| 严重程度 | 问题 | PR | 状态 |
|---|---|---|---|
| 高（功能性错误） | Discord 审批卡片的 **Approve 点击被记录为 reject**（`custom_id` 值后缀未剥离） | [#4117](https://github.com/nanocoai/nanoclaw/pull/4117) | ✅ 已有 fix PR |
| 中（稳定性） | 首次打开 `outbound.db` 报 `database is locked`（busy_timeout 设置顺序错误） | [#4101](https://github.com/nanocoai/nanoclaw/pull/4101) | ✅ 已有 fix PR（core-team） |
| 中（可部署性） | Apple Silicon 上 launchd plist 缺少 `/opt/homebrew/bin`，服务启动失败 | [#1938](https://github.com/nanocoai/nanoclaw/pull/1938) | ✅ 已有 fix PR，但**积压近 6 个月** |
| 中（网络环境） | Discord Gateway 不走环境 HTTPS 代理 | [#3923](https://github.com/nanocoai/nanoclaw/pull/3923) | ✅ 已有 fix PR |
| 低（依赖安全） | Resend skill 依赖审计告警 | [#4042](https://github.com/nanocoai/nanoclaw/pull/4042) | ✅ 已关闭 |

## 6. 功能请求与路线图信号

- **Telegram bot-to-bot 准入**（#4111/#4115/#4116/#3601）：核心团队标签 + 三 PR 联动 + skill 配套，是明确的近期路线图项，大概率随下一版本落地
- **模板驱动 agent 创建**（#4112/#4113，core-team）：与 #4113 索引机制互为依赖，属官方主动规划，纳入下版本可能性高
- **网关凭证按路径作用域**（[#4106](https://github.com/nanocoai/nanoclaw/pull/4106)，core-team）：解决 Cursor 类工具同 host 多 token 冲突，provider 生态扩展信号
- **Typing/状态可视化**（#3786，core-team，已活跃 1 个月+）：UX 打磨方向

## 7. 用户反馈摘要

今日无 Issue 评论数据，以下从 PR 描述间接提炼：

- **代理环境用户**（#3923）：企业/受限网络环境下 Discord Gateway 无法连接，说明存在生产环境部署受阻的真实场景
- **macOS Apple Silicon 用户**（#1938）：Homebrew 默认路径变更导致服务不可用，反映安装体验在非 x86 环境的缺口
- **Discord 审批流用户**（#4117）：审批操作被误记录为拒绝，直接影响人机协作审批的可信度——这是 agent 安全交互的关键路径
- **Telegram B2B 场景**（#4111）：开启 Bot-to-Bot 模式后回复循环失控，说明用户正尝试将 NanoClaw 接入多 bot 工作流

## 8. 待处理积压

- [#1938](https://github.com/nanocoai/nanoclaw/pull/1938)（2026-04-23 开启，**积压近 6 个月**）— Apple Silicon launchd PATH 修复，社区贡献，建议维护者尽快 review 或接手
- [#3786](https://github.com/nanocoai/nanoclaw/pull/3786)（2026-09-12 开启，约 1 个月）— typing 状态重构，core-team 自有 PR，仍待合并
- [#3601](https://github.com/nanocoai/nanoclaw/pull/3601)（2026-08-28 开启，约 7 周）— Telegram 回复识别修复，需与新 doorman 系列（#4111/#4115）协调合并顺序，建议明确依赖关系避免冲突

**健康度小结**：开发节奏健康（core-team 高产出、PR 描述规范、标签体系完善），但社区侧 Issue 流入为零、两条 PR 积压超一个月，建议关注社区响应与 review 带宽。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 · 2026-10-18

## 1. 今日速览

- 过去 24 小时项目整体活跃度**较低**：Issues 新增/活跃 0 条，PR 更新 1 条，无新版本发布。
- 唯一动向来自长期挂起的 [PR #1013](https://github.com/nullclaw/nullclaw/pull/1013)（Tsubasa provider），昨日有更新但仍处于待合并状态。
- 无新 Bug 报告、无崩溃或回归反馈，短期内稳定性面无风险信号。
- 贡献流处于停滞窗口期，建议关注维护者响应节奏。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

- 无已合并/关闭的 PR，项目今日在主干上**未产生代码前进**。
- 待合并 PR（1 条）：
  - [PR #1013 · feat(providers): add Tsubasa chat-completions provider](https://github.com/nullclaw/nullclaw/pull/1013)（@cenab，2026-09-28 创建，2026-10-17 更新）
    - 将 Tsubasa 接入现有 OpenAI 兼容 provider 工厂、onboarding 列表与模型目录
    - 通过 `TSUBASA_API_KEY` 选择凭证；两款公开模型上下文窗口均为 32,768 token，默认输出预算 8,192 token 以容纳内置 agent prompt
    - 该 PR 已挂起约 3 周，昨日更新或为代码/文档同步，尚无评论与 👍，缺乏维护者 review 信号

## 4. 社区热点

- 今日无高讨论量 Issue/PR。唯一活跃项为 [PR #1013](https://github.com/nullclaw/nullclaw/pull/1013)，评论数为 undefined/未见，反应数为 0，社区热度有限。
- 从 PR 内容可看出社区诉求方向：**持续扩展 OpenAI 兼容第三方模型供应商**，降低新 provider 接入成本。

## 5. Bug 与稳定性

- 过去 24 小时**无新 Bug、崩溃或回归报告**，无需排序。

## 6. 功能请求与路线图信号

- 今日无新增功能请求 Issue。
- 存量信号：[PR #1013](https://github.com/nullclaw/nullclaw/pull/1013) 表明“多供应商接入（含 fallback 机制）”是当前功能扩展主线；若该 PR 合并，Tsubasa 有望出现在下一版本 provider 列表中，但目前合并时间不可预期。

## 7. 用户反馈摘要

- 今日 Issues 评论为零，**无可用的新增用户反馈**。
- 间接信号：外部贡献者愿意为新 provider 编写完整实现（含 catalog、onboarding、fallback），说明项目扩展架构对社区贡献者友好。

## 8. 待处理积压

- [PR #1013](https://github.com/nullclaw/nullclaw/pull/1013)：创建于 2026-09-28，已等待约 3 周未获合并或明确 review，建议维护者优先跟进评审，避免贡献者流失。

---
*数据来源：NullClaw GitHub 仓库（截至 2026-10-18）。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报（2026-10-18）

## 1. 今日速览
IronClaw 今日整体活跃度**较低**：Issues 无新增、无活跃、无关闭，PR 仅 1 条更新且为依赖机器人自动提交，无新版本发布。未观察到功能性代码变更或社区讨论。属于典型的低活跃维护日，项目健康度暂无异常信号，但需持续关注后续开发节奏。

## 2. 版本发布
今日无新版本发布，可省略。建议关注近期是否为发布前的静默期。

## 3. 项目进展
今日无 PR 被合并或关闭，项目功能层面无实质推进。

待合并 PR（1 条）：
- **PR #8139** [dependencies, javascript] `chore(deps): bump source-map-js from 1.2.1 to 1.2.2 in /docs/internal/architecture-video`
  作者：@dependabot[bot] | 状态：OPEN
  链接：https://github.com/nearai/ironclaw/pull/8139
  内容：将 docs 子目录中 source-map-js 从 1.2.1 升级至 1.2.2，上游版本主要修复了 crash 问题。属于低风险的文档构建链依赖更新，建议维护者尽快审核合并。

## 4. 社区热点
今日无任何 Issue 或 PR 出现评论、点赞或讨论，社区互动为零。无热点可分析。

## 5. Bug 与稳定性
今日无新报告的 Bug、崩溃或回归问题。

值得一提的是，PR #8139 所升级的 source-map-js v1.2.2 本身修复了上游一个崩溃问题（"Fix crash w..."），及时合并该 PR 有助于避免文档构建链受影响。

## 6. 功能请求与路线图信号
今日无新功能请求。由于无社区输入，暂无法推断下一版本的功能方向。

## 7. 用户反馈摘要
今日 Issues 评论数为 0，无用户反馈可提炼。

## 8. 待处理积压
- **PR #8139**（https://github.com/nearai/ironclaw/pull/8139）：依赖升级 PR 处于待合并状态，虽为自动化提交，但长期堆积的 dependabot PR 会累积依赖风险，建议维护者优先处理。

---
**数据说明**：本报告基于过去 24 小时的 GitHub 活动。今日无 Issue 数据流入，“长期未响应”分析建议在后续日报中结合更长时间窗口的历史 Issue 数据进行。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 📊 LobsterAI 项目动态日报（2026-10-18）

## 1️⃣ 今日速览

过去 24 小时 LobsterAI 保持较高的开发活跃度：新增/更新 **6 个 PR**（全部待合并）、**1 个新开 Issue**，无版本发布。核心贡献者 @fisherdaddy 集中提交了 OpenClaw 配置同步、磁盘占用治理、模型供应商格式扩展及大规模代码清理等重量级 PR，显示项目正处于架构瘦身与稳定性打磨阶段。社区侧需求聚焦于 Computer Use 授权持久化体验。总体判断：**开发推进活跃、待合并积压偏多，需关注代码审查吞吐**。

## 2️⃣ 版本发布

今日无新版本发布。值得注意的是 PR #2897/#2898 提及 `release/2026.10.19` 分支，暗示下一个版本窗口为 **10 月 19 日**，近期待合并 PR 预计随该版本落地。

## 3️⃣ 项目进展

今日无 PR 合并/关闭，但待合并队列质量较高，主要集中在三个方向：

**架构瘦身**
- [#2898 refactor(cowork): remove the OpenAI compatibility proxy](https://github.com/netease-youdao/LobsterAI/pull/2898) — 删除 Claude Agent SDK 时代遗留的 OpenAI 兼容代理（约 **3500 行**代码），依赖 #2897 先行合并（stacked PR）。
- [#2896 feat(openclaw): keep user overrides in openclaw.user.json](https://github.com/netease-youdao/LobsterAI/pull/2896) — 解决配置同步覆盖用户手动修改的长期痛点，采用 `openclaw.user.json` 用户覆盖机制。

**功能扩展**
- [#2897 feat(providers): OpenAI Responses & Gemini formats](https://github.com/netease-youdao/LobsterAI/pull/2897) — 自定义模型供应商新增 OpenAI Responses 与原生 Gemini API 格式，复用 OpenClaw 原生传输层，是今日战略意义最大的 PR。
- [#2894 feat(desktop): custom skins / screenshot tools / Cowork follow-ups](https://github.com/netease-youdao/LobsterAI/pull/2894) — 桌面陪伴角色自定义皮肤、截图工具增强、Cowork 后续对话优化。

**稳定性修复**
- [#2893 fix(openclaw): bound disk usage](https://github.com/netease-youdao/LobsterAI/pull/2893) — 针对长期运行实例膨胀至 **~17GB** 的问题，限制修复备份与运行时缓存占用。
- [#1181 fix(cowork): hide OpenClaw main agent sessions](https://github.com/netease-youdao/LobsterAI/pull/1181) — 隐藏内部心跳/cron 会话，消除用户困惑。

## 4️⃣ 社区热点

- **[#2895 Persist Computer Use app approvals](https://github.com/netease-youdao/LobsterAI/issues/2895)**（@cwx07426，1 条评论）— 今日唯一且最活跃的 Issue。诉求核心：Computer Use 的应用授权仅存于 MCP bridge 的内存 `Set` 中，每次新会话需重复授权，体验割裂。已获维护者评论回复，说明已进入讨论，**尚无对应 fix PR**。

## 5️⃣ Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | 磁盘无限膨胀至 ~17GB（修复备份/运行时缓存无清理）— [#2893](https://github.com/netease-youdao/LobsterAI/pull/2893) | ✅ 已有 fix PR（待合并） |
| 🟡 中 | 配置同步覆盖用户手动修改的 `openclaw.json` — [#2896](https://github.com/netease-youdao/LobsterAI/pull/2896) | ✅ 已有 fix PR（待合并） |
| 🟡 中 | Computer Use 授权不跨会话持久化 — [#2895](https://github.com/netease-youdao/LobsterAI/issues/2895) | ❌ 暂无 fix PR |
| 🟢 低 | OpenClaw 内部会话泄露到用户会话列表 — [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | ✅ 已有 fix PR（已积压 6 个多月） |

## 6️⃣ 功能请求与路线图信号

- **Computer Use 授权持久化**（#2895）：属易用性高优先诉求，实现路径明确（持久化内存中的授权 Set），大概率被排入后续版本。
- **多 API 格式供应商支持**（#2897）：直接扩大可接入模型范围，且是 #2898 清理工作的前置，明确面向 `release/2026.10.19`。
- **桌面陪伴角色个性化**（#2894）：皮肤/截图/后续对话三合一，体现产品向消费级体验倾斜的信号。

## 7️⃣ 用户反馈摘要

- **痛点一：重复授权打断工作流** — 用户明确表示几分钟前刚授权过的应用在新会话中再次弹窗，影响 Computer Use 连续使用体验。
- **痛点二：磁盘占用失控** — #2893 描述的真实场景显示重度用户安装目录膨胀至 17GB，属影响留存的实际问题。
- **痛点三：配置被覆盖** — 高级用户手动启用增强插件后被配置同步清掉，反映高级用户定制化诉求与产品自动管理之间的张力。
- **满意点**：Computer Use、Cowork、自定义模型供应商等能力均被真实用户持续使用并提出深度反馈，说明核心功能已进入实际生产使用阶段。

## 8️⃣ 待处理积压

- ⚠️ **[#1181](https://github.com/netease-youdao/LobsterAI/pull/1181)**（2026-04-01 创建）— 已积压 **6 个半月**，今日重新更新但无评论，属低风险易合入修复，建议维护者优先审查。
- ⚠️ **PR 合并吞吐** — 今日 6 个待合并 PR 全部未合并，其中 #2897/#2898 为 stacked 关系，审查顺序将直接影响 10.19 版本交付，建议优先排期 review。
- ⚠️ **#2895 尚无修复 PR** — 虽有维护者回应，建议跟踪是否进入下版本排期。

---
*数据来源：GitHub netease-youdao/LobsterAI，统计窗口 2026-10-17 至 2026-10-18*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-10-18）

## 1. 今日速览

今日 Moltis 仓库整体活跃度**中等偏低**：无新 Issue 活动（新开/活跃/关闭均为 0），无新版本发布。PR 侧有 3 条更新：2 条待合并（#1306、#1288）、1 条已关闭（#1307）。开发重心集中在**桌面客户端体验**与**模型供应商接入**两个方向，核心贡献者 @penso 与 @cenab 保持活跃。项目处于功能迭代期，社区讨论面较窄，暂无稳定性风险信号。

## 2. 版本发布

今日无新版本发布，最新 Releases 为空。建议关注待合并 PR 中可能构成下个版本亮点的桌面客户端功能。

## 3. 项目进展

**已关闭：**
- [PR #1307](https://github.com/moltis-org/moltis/pull/1307)（2026-10-17 创建并关闭）`feat(gateway): open the browser on first run and make the URL hard to miss` —— 优化首次运行引导体验：在本地桌面会话（非 SSH/CI/容器/systemd 环境）下自动打开浏览器进入 `/onboarding#setup`，解决新用户"不知道下一步要打开浏览器"的流失问题。属明显的**新手引导（onboarding）体验改进**。

**待合并（持续推进中）：**
- [PR #1306](https://github.com/moltis-org/moltis/pull/1306) `feat: native gpui desktop client (apps/desktop) and moltis-client crate`（今日仍有更新）—— 引入原生 Rust/gpui 桌面客户端，采用**连接已运行 daemon** 而非内嵌的架构，支持本地连接、HTTPS 远程连接及 SSH 隧道，退出应用不影响 daemon。这是项目向原生桌面端演进的重要一步，预计是近期最大功能增量。
- [PR #1288](https://github.com/moltis-org/moltis/pull/1288) `feat: add Tsubasa provider to setup and model registry`（@cenab，9-28 提交，10-17 更新）—— 将 Tsubasa 接入供应商配置与 OpenAI 兼容注册表，默认端点 `https://api.tsubasa.sh/v1`，提供 `tsubasa-fast` / `tsubasa-pro` 两个模型（32K 上下文），并包含配置名校验与 README 更新。

## 4. 社区热点

今日无活跃 Issue 讨论，PR 评论数据缺失（undefined），无法识别明显热点。从 PR 主题看，隐性热点为：
- **首跑引导体验**（#1307 反映新用户上手流失痛点，已被快速处理关闭）
- **桌面端形态**（#1306 的 daemon 分离架构体现对"常驻后台 + 多客户端接入"的诉求）

## 5. Bug 与稳定性

今日无新增 Bug、崩溃或回归报告。无严重程度分级事项，无待修复 PR。

## 6. 功能请求与路线图信号

- **原生桌面客户端**（[#1306](https://github.com/moltis-org/moltis/pull/1306)）：gpui + moltis-client crate 架构若合并，将奠定后续桌面端（含远程/SSH 场景）能力基础，极可能成为下个版本核心特性。
- **Tsubasa 供应商接入**（[#1288](https://github.com/moltis-org/moltis/pull/1288)）：延续 OpenAI 兼容注册表的扩展模式，合并门槛低，预计纳入下一版本。
- **Onboarding 自动化**（#1307 已关闭）：表明团队持续投入降低首次使用门槛，未来或有更多引导类改进。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼直接用户反馈。间接信号：#1307 的动机描述明确指出"首次运行用户常意识不到需要打开浏览器完成配置"，反映**新用户上手路径不清**曾是真实痛点，现已通过自动打开浏览器缓解。

## 8. 待处理积压

- [PR #1288](https://github.com/moltis-org/moltis/pull/1288)：已提交 **20 天**（09-28 → 10-17），仍处于 OPEN 状态，建议维护者尽快评审，避免供应商类小功能长期积压。
- [PR #1306](https://github.com/moltis-org/moltis/pull/1306)：体量较大（新增 apps/desktop 与 moltis-client crate），建议明确评审计划与里程碑，防止大型 PR 演变为长期积压项。

---
*数据来源：Moltis GitHub 仓库过去 24 小时活动快照。整体健康度评估：代码贡献活跃、社区互动偏静默，建议关注评审吞吐与社区运营。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-10-18

## 1. 今日速览

CoPaw 今日保持高活跃度：过去 24 小时新增/活跃 Issue 8 条、PR 更新 17 条（16 条待合并、1 条关闭），无新版本发布。社区贡献焦点集中在**多模态兼容性**（音频/视频导致会话卡死）和**通道体验**（钉钉消息降级、审批推送不到聊天端）。三条 10-18 当日新开的 fix PR（#8301、#8302、#8303）显示维护者响应迅速，但大量修复仍堆积在待合并队列中，合并吞吐偏慢是当前主要健康隐患。

## 2. 版本发布

今日无新版本发布。（v2.2.2 于 2026-10-15 发布，本日报周期内无后续 Release。）

## 3. 项目进展

今日无 PR 被合并，仅 1 条 PR 被关闭：

- **#8296 [CLOSED]** [size/S] fix(creator): 将 stale-pid 探测的 SystemError 视为 "peer not alive"（修复 #8194）— 采用 "Close-and-review-later" 方式关闭，即修复方向被认可但需重做/后续评审，未真正落地。

**整体评估**：今日项目推进主要体现为新修复 PR 的密集提交而非合并落地，待合并队列继续增长，建议关注 CI/评审瓶颈。

## 4. 社区热点

- **[#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171)**（5 评论，10-10 创建、10-17 仍活跃）— 音频文件导致会话永久卡死，是 #7015/#7024 家族的第三种拒绝形态，吸引最多讨论。背后诉求：用户使用 LM Studio 等本地推理后端时，`send_file_to_user` 后会话完全不可用，且今日新增的 #8290、#8298 表明该"媒体块卡死"问题正在**系列化爆发**。
- **[#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278)**（4 评论）— 钉钉通道 >3500 字符静默降级为纯文本，表格/Markdown 全失效。诉求：数据报表类场景恰恰是长表格回复，降级无任何信号，用户体验断层严重。
- **[#8164 PR](https://github.com/agentscope-ai/QwenPaw/pull/8164)**（size/XXXL，HarmonyOS 原生客户端）— 持续活跃至 10-17，是当前最大的功能型 PR，反映社区对鸿蒙生态接入的强烈需求。

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#8298](https://github.com/agentscope-ai/QwenPaw/issues/8298) / [#8290](https://github.com/agentscope-ai/QwenPaw/issues/8290) / [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171) | 媒体块（视频 422 / 音频 400）绕过两个媒体分类器，**会话永久卡死**，纯文本轮次也无法恢复 | 视频已有 [#8299](https://github.com/agentscope-ai/QwenPaw/pull/8299)；音频已有 [#8215](https://github.com/agentscope-ai/QwenPaw/pull/8215)、[#7654](https://github.com/agentscope-ai/QwenPaw/pull/7654)（待合并） |
| 🟠 中 | [#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278) | 钉钉长消息静默降级纯文本 | 暂无专属 fix PR |
| 🟠 中 | [#8293](https://github.com/agentscope-ai/QwenPaw/issues/8293) | `<system-notification>` 等注入上下文被当作助手回复发给用户，存在信息泄露/体验问题 | 已有 [#8295](https://github.com/agentscope-ai/QwenPaw/pull/8295)，关联长期 PR [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) |
| 🟡 低 | [#8300](https://github.com/agentscope-ai/QwenPaw/issues/8300) | v2.2.2 控制台发送后输入框未清空 | 暂无 |
| 🟡 低 | [#8270](https://github.com/agentscope-ai/QwenPaw/issues/8270) | Windows 中文 ZIP 文件名解压乱码（CP437） | 已有今日新开 [#8301](https://github.com/agentscope-ai/QwenPaw/pull/8301) |
| 🟡 低 | [#3361](https://github.com/agentscope-ai/QwenPaw/issues/3361) | 飞书对话中通过 console 改配置报 Task was destroyed | 关联今日新开 [#8302](https://github.com/agentscope-ai/QwenPaw/pull/8302)（consumer 生命周期修复） |

**核心风险**：媒体块分类器系列缺陷（3 个同族 Issue）是当前最大稳定性威胁，已有 3 个相关 fix PR 待合并，建议优先评审。

## 6. 功能请求与路线图信号

- **HarmonyOS 原生客户端**（[PR #8164](https://github.com/agentscope-ai/QwenPaw/pull/8164)，ArkUI/ArkTS，API 26）：最大功能增量，若合入将显著扩展客户端矩阵。
- **审批消息送达聊天通道**（[PR #8303](https://github.com/agentscope-ai/QwenPaw/pull/8303)，修复 #6695/#6819）：审批工具链可靠性补全。
- **钉钉分片降级策略**：#8278 用户建议复用 `split_text` 分片机制保留 Markdown，很可能催生新 fix PR。
- **记忆系统演进**：[PR #8297](https://github.com/agentscope-ai/QwenPaw/pull/8297)（ReMe 升级 + watcher 隔离）、[#8291](https://github.com/agentscope-ai/QwenPaw/pull/8291)（reranker 凭证校验）显示记忆子模块处于活跃迭代期。

## 7. 用户反馈摘要

- **痛点集中在本地方案兼容性**：LM Studio、DeepSeek、llama-server 等 OpenAI 兼容端点用户频繁遭遇模态不兼容硬卡死（#8171/#8290/#8298），反馈"会话彻底报废只能重建"。
- **中文环境用户占比高**：钉钉通道（#8278）、飞书通道（#3361）、中文 Windows ZIP 乱码（#8270），提示中文企业场景是核心用户群。
- **静默失败最遭诟病**：审批超时无提示（#8303 背景）、消息降级无信号（#8278），用户反复强调"拿不到任何失败信号"。
- **正面信号**：v2.2.2 发送后消息流本身正常（#8300 确认消息成功送达），Issue 报告质量普遍很高（多含根因分析），社区参与度健康。

## 8. 待处理积压

- **[#3361](https://github.com/agentscope-ai/QwenPaw/issues/3361)**（2026-04-14 创建，**超过 6 个月未关闭**，10-18 仍有更新）— 飞书/console 并发配置报错，今日 #8302 可能正是针对此根因，建议维护者确认关联并闭环。
- **[#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171)**（已开 8 天，5 评论）— 音频卡死，关联 PR #8215（10-13 提交）与 #7654（**9-09 提交，待评审已超 1 个月**）迟迟未合并。
- **[PR #7211](https://github.com/agentscope-ai/QwenPaw/pull/7211)**（8-21 提交，Under Review 近 2 个月）— 注入上下文持久化修复，是 #8293/#8295 一系列问题的上游方案，建议尽快定夺。
- **[PR #8034](https://github.com/agentscope-ai/QwenPaw/pull/8034)**（9-29 提交）— 请求级 inline 媒体上限，与媒体块系列问题同域，应与 #8299/#8215 协同评审，避免碎片化修复。

**健康度总结**：issue 报告质量与社区贡献活跃度优秀，但"PR 提交多、合并少"的模式持续，建议维护者优先消化媒体兼容性与通道类修复积压。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 — 2026-10-18

## 1. 今日速览
今日 ZeptoClaw 整体活跃度较低，无新开 Issue、无新版本发布，仅 1 条 PR 关闭。项目维护由核心维护者 @qhkm 主导，今日关闭的 PR #710 聚焦于 Agent 性能优化（字节级稳定的提示词封装 + Claude 提示词缓存），属于对 LLM Provider 层的重要性能改进。Issue 侧零新增意味着当前无明显用户报障涌入，项目处于稳定迭代状态。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
- **PR #710 [CLOSED]** — [`feat, area:providers, P2-high` perf(agent): byte-stable prompt envelope + Claude prompt caching](https://github.com/qhkm/zeptoclaw/pull/710)（作者 @qhkm）
  - **核心改进**：
    - **字节级稳定的系统提示词**：将实时时钟和查询匹配的记忆（query-matched memory）从 system prompt 中移出，放入每轮一次的 `<turn-context>` 块中。该块前置到最新用户消息的 *请求副本* 上，因此持久化历史保持不变。
    - **工具注册表有序化**：`ToolRegistry` 改为 `BTreeMap`，保证工具序列化顺序稳定。
  - **意义**：字节级稳定的 prompt 结构是启用 Claude prompt caching 的前提。此改动可显著降低 API 调用成本（缓存命中时输入 token 计费大幅折扣），并减少因 prompt 抖动导致的缓存失效。同时保证会话持久化历史不被污染，架构设计稳健。
  - **推进幅度**：这是 Provider 层一次实质性的性能与成本优化，属于中等偏重要的功能进展。

## 4. 社区热点
今日无活跃 Issue 或高评论 PR，社区讨论热度为零。

## 5. Bug 与稳定性
今日无新报告的 Bug、崩溃或回归问题。

## 6. 功能请求与路线图信号
今日无新功能请求。从 PR #710 的标签（`area:providers`、`P2-high`）可推断，**Provider 层的性能与成本优化**是当前维护者优先推进的方向，未来可预期更多围绕 prompt caching、多 Provider 适配的改进。

## 7. 用户反馈摘要
今日无 Issue 评论可提炼，暂无用户反馈数据。

## 8. 待处理积压
今日数据中未包含长期未响应的 Issue/PR（Issue 总数为 0 条），当前无可识别的积压项。建议维护者关注：
- PR #710 已关闭（非 merged 状态），若内容有价值可考虑后续以拆分形式重新提交；
- 若此方向（prompt caching）为路线图重点，建议补充对应的 Issue 跟踪项，便于社区了解进展。

---
*数据来源：GitHub API 汇总（统计周期 2026-10-17 至 2026-10-18）*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报
**日期：2026-10-18** | 仓库：[gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

## 1. 今日速览

- 今日项目活跃度集中在**版本发布**层面：发布了 v1.9.34，无伴随的 Issue 或 PR 活动。
- 过去 24 小时 Issues 更新 **0 条**，PR 更新 **0 条**，社区交互处于静默状态。
- 整体判断：项目处于**持续迭代但社区讨论冷淡**的状态，功能开发由维护者主导推进，外部贡献和用户反馈渠道今日无新增信号。
- 健康度评估：中。有规律的版本产出说明项目仍在积极维护，但缺乏社区互动数据，需关注用户参与度。

---

## 2. 版本发布

### v1.9.34: TK Copilot v1.9.34
🔗 [Release 链接](https://github.com/gaoyangz77/easyclaw/releases)

**更新内容：**
1. **账户切换**：支持临时切换到子账户，并可返回主账户（owner account）
2. **Affiliate 体验优化**：按需加载 Affiliate 创作者详情和对话历史；改进消息发送与刷新的反馈体验
3. **BD 过滤器改进**：在 BD 过滤器中显示公开创作者；BD 设备警告可关闭（dismiss 后直至重启前不再提示）

**破坏性变更 / 迁移注意事项：**
- 官方 Release Notes 未标注破坏性变更，预计为平滑升级。
- 注意：BD 设备警告的“关闭”仅持续到应用重启，属有意设计而非 Bug。

---

## 3. 项目进展

- 今日无合并/关闭的 PR（0 条）。项目进展主要体现在 v1.9.34 的发布上，账户体系（子账户/主账户切换）和 Affiliate 工作流的按需加载优化是本轮迭代的核心，方向指向**多账户运营场景的性能与体验提升**。

---

## 4. 社区热点

- 今日无活跃 Issue/PR 讨论，无社区热点可提炼。
- 建议关注 [Issues 页面](https://github.com/gaoyangz77/easyclaw/issues) 后续动态。

---

## 5. Bug 与稳定性

- 今日无新增 Bug 报告（Issues: 0 条），无已知回归问题需要跟踪。
- v1.9.34 中“临时切换子账户”为较新能力，建议升级后重点观察账户切换的稳定性。

---

## 6. 功能请求与路线图信号

- 今日无新增功能请求。从 Release 节奏可推断的隐性路线信号：
  - **多账户/子账户管理**仍是重点方向（本次为临时切换，未来或有更完整的子账户权限管理）
  - **Affiliate/BD 运营自动化**能力持续增强，预计后续版本继续深化

---

## 7. 用户反馈摘要

- 今日无 Issue 评论数据，无法提炼用户反馈。v1.9.34 的更新方向（消息发送反馈改进、警告可关闭）侧面反映此前用户可能对**操作反馈不明确、警告频繁打扰**存在不满，本次更新或为响应此类痛点。

---

## 8. 待处理积压

- 今日数据中无长期未响应的 Issue/PR 明细。建议维护者自查 [open issues](https://github.com/gaoyangz77/easyclaw/issues?q=is%3Aissue+is%3Aopen) 与 [open PRs](https://github.com/gaoyangz77/easyclaw/pulls?q=is%3Apr+is%3Aopen) 的响应时长，避免积压影响社区参与积极性。

---

**数据来源说明**：本日报基于 2026-10-17 至 2026-10-18 的 GitHub 数据快照生成。今日样本量较小（1 个 Release，0 Issue，0 PR），部分分析基于版本内容的合理推断，请以实际仓库状态为准。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*