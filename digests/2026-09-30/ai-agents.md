# OpenClaw 生态日报 2026-09-30

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-30 04:37 UTC

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

# OpenClaw 项目日报 — 2026-09-30

## 1. 今日速览

OpenClaw 今日保持极高活跃度：过去 24 小时内 Issues 更新达 500 条（新开/活跃 366，关闭 134），PR 更新 500 条（待合并 320，已合并/关闭 180），Issue 净增长约 232 条，反映社区规模大但问题积压在加速累积。项目当前无新版本发布，社区焦点集中在 **2026.9.6/9.7 修复周期**：`prepared-model-catalog` worker 内存泄漏、SQLite WAL 无限增长、Gateway 启动崩溃等 P0 稳定性问题密集爆发。维护者 @steipete、@RomneyDa 持续高产提交，今日有多个 XL 级核心 PR（macOS 应用生命周期、节点工具策略、大插件冻结修复）进入"ready for maintainer look"状态。总体判断：功能推进强劲，但 2026.9.x 系列回归问题数量偏多，稳定性压力显著。

## 2. 版本发布

今日无新版本发布。社区正通过 [2026.9.7 Fixes Tracker (#157531)](https://github.com/openclaw/openclaw/issues/157531) 跟踪 2026.9.6 → 2026.9.7 的修复清单（目前已含 18/21 个 P1 候选修复），预计下一版本为修复型发布。

## 3. 项目进展

今日重要的活跃/关闭 PR（以维护者审核队列为主）：

- **[#160488](https://github.com/openclaw/openclaw/pull/160488) (P0, XL)** `update repair clears abandoned handoff leases` — 修复后续更新持续失败的遗留租约问题，涉及兼容性/安全边界/可用性三重风险标记，等待 lead review，是 9.7 的关键修复。
- **[#161583](https://github.com/openclaw/openclaw/pull/161583) (P2, XL)** `feat(gateway): honor host lifetime and install ownership` — Bun 驱动的 macOS 应用系列核心契约 PR（B1），定义应用宿主 Gateway 的生命周期与安装所有权。
- **[#160444](https://github.com/openclaw/openclaw/pull/160444) (P0, XL)** 节点会话与 Gateway 会话统一工具策略 — 修复 node 会话可绕过文件系统隔离与 `apply_patch` 策略的安全问题，安全敏感。
- **[#161267](https://github.com/openclaw/openclaw/pull/161267) (P0, XL)** `Gateway freezes on model changes with large plugins` — 直击 prepared model runtime 反复加载/捕获插件（启动 3 次 + 每次模型变更 2 次）导致的 Gateway 冻结，与多项内存泄漏 Issue 直接相关。
- **[#160442](https://github.com/openclaw/openclaw/pull/160442) (P2, XL)** `perf(nodes): load only what a worker turn needs` — worker 按需加载，降低首响应延迟与内存。
- **[#120185](https://github.com/openclaw/openclaw/pull/120185) (P1)** 子代理模型策略预拒绝；**[#153405](https://github.com/openclaw/openclaw/pull/153405)** 冲突 legacy 审批调和；**[#161421](https://github.com/openclaw/openclaw/pull/161421)** 配对客户端重连超时修复。
- 今日关闭的多为测试整合/清理类 PR（[#161597](https://github.com/openclaw/openclaw/pull/161597)、[#161592](https://github.com/openclaw/openclaw/pull/161592)、[#161594](https://github.com/openclaw/openclaw/pull/161594)，均由 @roboclaw-bot 完成）。

整体进展：核心运行时（插件加载、节点策略、会话维护、更新机制）在系统性推进，9.7 修复版本的骨干 PR 已基本就绪待审。

## 4. 社区热点

1. **[#143524](https://github.com/openclaw/openclaw/issues/143524)（94 评论，P0）** — Agent SQLite WAL 数天内膨胀至 1.4–2.8 GB，手动 checkpoint 后复现，最终阻塞 Gateway 启动（Windows）。是评论量最高的 Issue，反映 Windows 长驻部署用户对数据库稳定性的强烈焦虑。**尚无 fix PR**。
2. **[#119720](https://github.com/openclaw/openclaw/issues/119720)（21 评论，P1）** — 同步持久化与转录维护阻塞 Gateway 事件循环，历经 #140231/#138984 两轮部分修复，用户持续追踪剩余问题。
3. **[#102175](https://github.com/openclaw/openclaw/issues/102175)（20 评论）** — 长会话跨 room-event/策略/Responses 边界的 prompt cache 失效，成本敏感用户（provider 计费）高度关注。
4. **[#157067](https://github.com/openclaw/openclaw/issues/157067)（19 评论，已关闭）** — Windows 隔离 cron 环境无法克隆 Proxy 传给 worker，已有 linked PR。
5. **[#157531](https://github.com/openclaw/openclaw/issues/157531) 2026.9.7 Fixes Tracker（16 评论）** — 版本节奏的社区枢纽。

诉求主线：**Windows/容器长驻部署的稳定性**与**资源（内存/磁盘/DB）失控**。

## 5. Bug 与稳定性（按严重程度）

**P0（ux-release-blocker 级）：**

| Issue | 问题 | Fix PR |
|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL 无限增长阻塞启动 | ❌ 无 |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) / [#160548](https://github.com/openclaw/openclaw/issues/160548) / [#159596](https://github.com/openclaw/openclaw/issues/159596) / [#160522](https://github.com/openclaw/openclaw/issues/160522) | `prepared-model-catalog` worker 内存泄漏（4-5 GB/h，多用户独立复现） | ⚠️ [#161267](https://github.com/openclaw/openclaw/pull/161267) 可能覆盖，待验证 |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | 单个 agent-DB 资源卡死导致全部 agent 回复失败 | ❌ 无 |
| [#158095](https://github.com/openclaw/openclaw/issues/158095) | state-lifecycle worker 卡死后所有 acquire 失败直至重启 | ❌ 无 |
| [#159612](https://github.com/openclaw/openclaw/issues/159612) | 子代理结算无限重试并每轮重注入结果 | ❌ 无 |
| [#158936](https://github.com/openclaw/openclaw/issues/158936) | macOS 就绪看门狗 SIGTERM 慢启动 Gateway → 重启循环 | ❌ 无（与 #161583 相关） |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | 启动时间随插件数量线性增长 | ⚠️ 相关 PR #161267/#160442 |
| [#152965](https://github.com/openclaw/openclaw/issues/152965) | 非通道插件热重载断开所有通道连接并丢消息 | ❌ 无 |
| [#161290](https://github.com/openclaw/openclaw/issues/161290)（已关闭） | SQLite 会话迁移恢复报告 | 已处理 |

**P1 亮点：** [#157989](https://github.com/openclaw/openclaw/issues/157989) 插件源捕获每次 CLI 写入 ~1.1–1.4 GB、每次启动 ~6.5 GB（SSD 磨损）；[#157630](https://github.com/openclaw/openclaw/issues/157630)/[#157575](https://github.com/openclaw/openclaw/issues/157575) heap flag 静默覆盖 worker 内存限制；[#97616](https://github.com/openclaw/openclaw/issues/97616) hook 子进程僵尸累积。

**安全类：** [#108395](https://github.com/openclaw/openclaw/issues/108395) 模型伪造 "Human:" 消息实现自我授权；[#132303](https://github.com/openclaw/openclaw/issues/132303) claude-cli 后端忽略 `tools.deny`。

## 6. 功能请求与路线图信号

- **[#121729](https://github.com/openclaw/openclaw/issues/121729)** 后台代理每日消费限额（friendly spending allowances）— 已标 stale，但与 9.7 追踪器中的 "privacy/usage" 方向吻合，有回归可能。
- **[#16670](https://github.com/openclaw/openclaw/issues/16670)** 引导向导强制配置 Memory/Embedding — 降低新用户上手摩擦，属产品决策待定。
- **[#156341](https://github.com/openclaw/openclaw/issues/156341)** RFC：任务级决策模型与可检视评估 — 已进入 RFC 讨论，路线图信号积极。
- **[#152839](https://github.com/openclaw/openclaw/issues/152839)** openat2 ENOSYS 兼容（Synology NAS Docker 场景）— 影响 NAS 用户群，兼容性诉求明确。
- 从 PR 侧看，**Ultrafast 档位选择（[#160352](https://github.com/openclaw/openclaw/pull/160352)）**、**语音通话静默挂断（[#159146](https://github.com/openclaw/openclaw/pull/159146)）**、**卡死会话基于已有上下文作答（[#161069](https://github.com/openclaw/openclaw/pull/161069)）** 均接近落地，大概率进入下一版本。

## 7. 用户反馈摘要

- **痛点集中在“长驻运行的失控”**：多条独立报告描述同一模式——Gateway 正常运行数天后内存锯齿/泄漏、数据库膨胀、worker 卡死，只能靠重启续命（#159596、#157325、#143524），对以 OpenClaw 作为 7×24 个人助理的用户是核心伤害。
- **多通道重度用户受影响最重**：同时接 Feishu/WhatsApp/QQ/微信的部署（#157325 的 9 账号案例）暴露了插件与通道耦合问题（#152965 热重载断流）。
- **升级路径受挫**：多个 "Update failure" 报告（#158231、#154924、#157415）以及 Watchtower 自动升级导致崩溃循环（#157160），用户对自动更新信心下降。
- **正面信号**：issue 模板纪律好（大量带 clawsweeper 标签的结构化复现）、@steipete 的 PR 描述详尽且对用户影响标注清晰，社区对修复速度（如 #157067 从报告到关闭仅 5 天）评价积极。
- **claude-cli/DeepSeek 等后端用户**报告配额、8 MiB stdout 上限丢回复（#150132）等后端特有问题，期待可配置化。

## 8. 待处理积压

- **[#143524](https://github.com/openclaw/openclaw/issues/143524)**（WAL 膨胀，94 评论，9 月 9 日开）— 评论最多、P0，仍无 fix PR，**最优先需要维护者介入**。
- **[#119720](https://github.com/openclaw/openclaw/issues/119720)**（事件循环阻塞，8 月 5 日开）— 部分修复已落地，剩余工作待明确。
- **[#102175](https://github.com/openclaw/openclaw/issues/102175)**（prompt cache 失效，7 月 8 日开）— 涉及安全审查与产品决策，近三个月未关闭。
- **[#97616](https://github.com/openclaw/openclaw/issues/97616)**（僵尸进程，6 月 29 日开）— 三个月无 fix PR。
- **[#108395](https://github.com/openclaw/openclaw/issues/108395) / [#132303](https://github.com/openclaw/openclaw/issues/132303)** — 两个安全相关 Issue 长期挂起且标 stale，安全类问题不应因 stale 而沉没，建议优先复核。
- **PR 积压**：[#120185](https://github.com/openclaw/openclaw/pull/120185)（8 月 7 日开，安全敏感）与 [#147886](https://github.com/openclaw/openclaw/pull/147886)（飞书 markdown.tables）均已 "ready for maintainer look" 超过一周，建议推进审核。

---
*数据来源：OpenClaw GitHub Issues/PRs 过去 24 小时更新流。整体健康度：活跃度 A，交付节奏 B+，回归稳定性 C+（9.6 引入的内存/DB 类回归需在 9.7 中集中收敛）。*

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告
**数据日期：2026-09-30**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处在“功能扩张与稳定性偿还并行”的关键阶段：头部项目（OpenClaw、Zeroclaw、Hermes Agent、CoPaw）24 小时更新量均达数十至数百条，社区贡献结构健康，但普遍面临 PR 审核积压（45+ 条待合并成为常态）和长驻运行稳定性问题。多渠道接入（Telegram/WhatsApp/微信/QQ/飞书）、cron 自动化、子代理体系、记忆/知识层已成为事实上的标准能力竞争面。同时，安全类问题（会话所有权、凭据泄露、策略绕过）在多个项目中密集暴露，提示生态正从“能用”向“可信托管”阶段过渡。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（开/关） | PR 更新（待/合） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（366/134） | 500（320/180） | ❌ | 活跃度 A，交付 B+，回归稳定性 C+（9.6 内存/DB 类回归积压） |
| **Zeroclaw** | 23（20/3） | 50（45/5） | ❌ | 高活跃，S0 安全响应快，但 XL 级 PR 堆叠风险高 |
| **Hermes Agent** | 50（49/1） | 50（45/5） | ❌ | 贡献活跃、当日 fix 闭环快，但审核带宽为瓶颈 |
| **CoPaw** | 9（8/1） | 34（15/19） | ❌ | 健康，合并吞吐高，测试基建投入大 |
| **NanoBot** | 13（4/9） | 45（23/22） | ❌ | 关闭率 > 新增，批量清积压，动能强 |
| **NanoClaw** | 2（0/2） | 16（9/7） | ❌ | 修复导向，问题 3-5 天闭环 |
| **IronClaw** | 2（2/0） | 3（2/1） | ✅ v1.4.1 | 稳定交付期，发布流程规范 |
| **LobsterAI** | 10（8/2） | 11（0/11） | ❌ | 中等活跃，PR 清理为主 |
| **PicoClaw** | 6（6/0） | 5（4/1） | ❌ | 社区驱动，维护者响应偏慢 |
| **NullClaw** | 1 | 1 | ❌（v20260929 发布中断） | 低活跃维护期 |
| **Moltis** | 1 | 0 | ❌ | 平静期，需观察是否趋势性放缓 |
| TinyClaw / ZeptoClaw / EasyClaw | 0 | 0 | ❌ | 无活动 |

**注**：全部 13 个项目中仅 IronClaw 有版本发布，生态整体处于“冲刺/聚合期而非收口期”。

---

## 3. OpenClaw 在生态中的定位

**优势**：
- **规模断层领先**：日更新量（1000 条）是第二名项目的 10 倍以上，Issue 编号已达 16 万级，社区基数和贡献者密度无对手。
- **修复纪律好**：issue 模板结构化（clawsweeper 标签）、维护者 PR 描述质量高、修复周期可短至 5 天（#157067），是生态的工程实践标杆。
- **生态引力**：LobsterAI 直接内嵌 OpenClaw runtime（2026.8.1），CoPaw 社区明确“仿照 OpenClaw 引入 HEARTBEAT_OK”——OpenClaw 已是事实上的上游标准。

**风险**：
- **回归稳定性 C+ 是明显软肋**：2026.9.6 引入的内存泄漏（4-5 GB/h）、SQLite WAL 膨胀（2.8 GB）、事件循环阻塞等 P0 问题密集，与 Zeroclaw、IronClaw 的稳定表现形成反差。
- **积压加速**：Issue 日净增 +232、320 条 PR 待合并、94 评论的 #143524（WAL）至今无 fix PR——规模带来的审核与维护负担正在显现。
- **安全债**：#108395（模型自我授权）、#132303（tools.deny 被忽略）长期标 stale，安全类问题不应因 stale 沉没。

**技术路线差异**：OpenClaw 走 Gateway + worker + 多通道的“平台化”重架构路线；NanoBot/Zeroclaw 是轻量单进程/多渠道路线；IronClaw 主打 WASM 沙箱 + 调度器安全模型；Hermes 侧重桌面端与本地模型体验；NanoClaw 聚焦容器化部署与供应链安全。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **SQLite/存储层稳定性与重构** | OpenClaw（WAL 膨胀 #143524）、NanoBot（#5943 JSONL→SQLite）、CoPaw（#8038 连接泄漏） | 长驻部署下数据库生命周期管理成为共性痛点，SQLite 事务化是明确演进方向 |
| **Cron/定时任务的上下文与可靠性** | Zeroclaw（#6105 cron 失忆、#11237 声明式编辑失效）、OpenClaw（#159612 结算无限重试）、Hermes（#122529 venv 路径）、LobsterAI（#2392 指定 agent）、CoPaw（#2359 CRON_OK） | “配置即代码”的 cron 链路在所有项目中均未真正闭环 |
| **消息渠道媒体能力对齐** | Zeroclaw（WhatsApp 图片不下载 #10975）、NanoBot（Telegram per-topic 策略）、CoPaw（WeCom 文件回喂 #8042） | Telegram 落盘模式被引为标杆，多渠道媒体处理是竞争焦点 |
| **会话所有权与安全边界** | Zeroclaw（S0 系列 #11126/#11127/#11239）、OpenClaw（#108395/#132303）、CoPaw（#8028 COM 绕过）、Hermes（#62336 凭据泄露）、NanoBot（#5633 路径穿越） | 多 agent/多租户场景下的隔离、授权与审计成为全生态共性债务 |
| **本地/离线模型优化** | Hermes（re-prefill #128817、max_tokens 钳制）、NanoBot（离线 tokenizer #3647）、IronClaw（turn-0 工具预选）、NanoClaw（keyless 本地模型） | 降低延迟、token 成本与 provider 容错是共同目标 |
| **更新器可靠性** | OpenClaw（Watchtower 崩溃循环）、Hermes（Windows watchdog 误杀）、NanoClaw（回滚/升级链） | 弱网/跨平台自动升级是高频抱怨点 |
| **记忆/知识层** | Zeroclaw（知识图谱/RAG RFC）、Hermes（mem0+Qdrant） | “memory 无需主动调用即可捕获浮现”是新共识方向 |

---

## 5. 差异化定位分析

| 维度 | 阵营划分 |
|---|---|
| **平台化重架构** | OpenClaw（Gateway/worker/节点策略）、Zeroclaw（RPC 对等 + OIDC + A2A crate） |
| **轻量个人部署** | NanoBot（单进程、Telegram 深度优化）、NullClaw、PicoClaw（Web UI 打磨） |
| **安全优先** | IronClaw（WASM 沙箱、按任务凭据、安全审计模型）、NanoClaw（供应链加固、容器隔离） |
| **桌面/本地体验** | Hermes Agent（PTY/桌面端/本地模型）、LobsterAI（Windows 安装器 + 多分身，中文用户群） |
| **企业/受限环境** | NanoClaw（HTTPS 代理、arm64）、CoPaw（自托管 skill 市场、WeCom 渠道） |
| **目标用户谱系** | 从极客自托管（NanoBot）→ 企业内网（NanoClaw/CoPaw）→ 端用户产品（Hermes/LobsterAI）→ 生态平台（OpenClaw/Zeroclaw） |

**关键架构分歧**：存储层（JSONL vs SQLite 事务）、worker 模型（单进程 vs 容器 vs WASM 沙箱 vs 远程边缘节点 RFC）、记忆实现（内置 vs mem0/RAG vs 知识图谱）。

---

## 6. 社区热度与成熟度分层

- **生态核心/快速扩张**：OpenClaw（规模第一但稳定性承压）、Zeroclaw（v0.9.0 冲刺，45 PR 聚合期）
- **快速迭代/质量并行**：Hermes Agent、CoPaw、NanoBot（当日/3-5 日 fix 闭环，合并吞吐高）
- **质量巩固/稳定交付**：IronClaw（唯一发版，RC→stable 流程规范）、NanoClaw（修复导向 + 供应链加固）
- **打磨/观望期**：LobsterAI、PicoClaw（依赖维护者响应速度）、NullClaw、Moltis
- **静默**：TinyClaw、ZeptoClaw、EasyClaw

**成熟度信号**：发布节奏（IronClaw > NanoClaw > OpenClaw 9.7 修复周期 > 其余无节奏）、回归管理（OpenClaw 的 Fixes Tracker 模式被 Zeroclaw Tracker 借鉴）、安全响应（Zeroclaw S0 当日 fix 最快）。

---

## 7. 值得关注的趋势信号

1. **“长驻失控”是行业第一痛点**：OpenClaw（内存/DB/worker 卡死只能重启）、Hermes（PTY 泄漏）、Zeroclaw（cron 失忆）共同表明——7×24 稳定性是个人助手从 demo 到生产的核心分水岭，**可观测性（静默失败可见化，见 PicoClaw #3408/#3412、CoPaw 错误泛化）是被低估的机会带**。
2. **安全债集中到期**：会话所有权、策略绕过、凭据泄露在 5+ 个项目中同期爆发，预示“agent 权限模型”将成为下一轮架构竞争焦点（Zeroclaw 的 principal 所有权契约、IronClaw 的审计模型走在前列）。
3. **本地模型用户成为重要付费/忠诚群体**：re-prefill 成本、provider fallback、离线可用性（Hermes/NanoBot/IronClaw/NanoClaw 四项目共振）——**按模型能力降级而非报错**是明确的产品化方向。
4. **记忆层从“工具”向“基础设施”演进**：知识图谱/RAG/mem0 多线并进，“自动捕获与浮现”取代“主动调用”成为共识表述。
5. **互操作标准萌芽**：Zeroclaw 的 A2A crate RFC、OpenClaw 的生态下游化（LobsterAI/CoPaw 借鉴）提示——**上游 runtime 标准之争已开始，OpenClaw 占据先手但稳定性是软肋**，后来者（Zeroclaw）正以安全与架构清洁度差异化追赶。
6. **对开发者的启示**：合并顺序管理（XL PR 堆叠）、审核带宽扩充、安全 Issue 不随 stale 沉没、conflict-closed PR 的修复去向确认——这些流程债在所有高活跃项目中同样普遍，工程治理能力将决定谁能跑完下一程。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 · 2026-09-30

## 1. 今日速览

NanoBot 今日保持高活跃度：24 小时内 Issues 更新 13 条（新开/活跃 4 条，关闭 9 条），PR 更新 45 条（待合并 23 条，已合并/关闭 22 条），无新版本发布。项目呈现「关闭速率高于新增」的健康态势，大量历史积压 Issue（含 5 月份的 Telegram polling、cron 流式等问题）今日集中关闭，疑似进行了一轮批量 issue 清理与配套 PR 收尾。社区贡献者 @chengyongru、@CarmeloCampos、@Fatih0234 持续输出高质量功能 PR，开发动能强劲。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日多个重要 PR 完成关闭，覆盖安全、稳定性与核心架构：

- **安全修复落地**：[#5633](https://github.com/HKUDS/nanobot/pull/5633)（p1, security）拒绝含路径穿越成分的 session key，修复了 session 文件可被 `../../etc/passwd` 类恶意 ID 越界读写的漏洞，对应 Issue [#5564](https://github.com/HKUDS/nanobot/issues/5564)。
- **Provider 容错增强**：[#5968](https://github.com/HKUDS/nanobot/pull/5968) 修复 OpenAI 兼容网关返回 HTTP 400 "insufficient credits" 时 fallback 模型被静默跳过的问题，对应 Issue [#5967](https://github.com/HKUDS/nanobot/issues/5967)——当天报当天修，响应速度值得肯定。
- **i18n 质量**：[#5982](https://github.com/HKUDS/nanobot/pull/5982) 修正 20 条 zh-TW 繁体中文 WebUI 误导性文案。
- **历史积压清理**：多个 3–5 月的老 PR 今日关闭，包括 Telegram polling 看门狗 [#3627](https://github.com/HKUDS/nanobot/pull/3627)、cron 流式 stream_id 修复 [#3720](https://github.com/HKUDS/nanobot/pull/3720)、离线 tokenizer 估算 [#3662](https://github.com/HKUDS/nanobot/pull/3662)、PID 锁防重复实例 [#2166](https://github.com/HKUDS/nanobot/pull/2166)、工具调用死循环告警 [#5344](https://github.com/HKUDS/nanobot/pull/5344)、时区测试修复 [#5349](https://github.com/HKUDS/nanobot/pull/5349)。其中多数标注 `conflict`，可能存在与主线演进冲突后关闭的情况，建议关注这些修复是否已以其他形式进入主干。

## 4. 社区热点

- **[#5943 refactor(session): 中央化状态到 SQLite](https://github.com/HKUDS/nanobot/pull/5943)**（p1）：将 JSONL 替换为 SQLite 事务作为权威存储，单一 worker 处理运行时状态，是存储层的大重构，牵动面广，值得维护者优先评审。
- **[#5972/#5973/#5974 Telegram 群组策略系列](https://github.com/HKUDS/nanobot/issues/5972)**：@CarmeloCampos 提出 per-chat / per-topic 的群组回复策略及 `/group` 命令，并以堆叠 PR（#5973 → #5974）方式实现，反映多话题 supergroup 场景下精细化静音/活跃控制的强烈诉求。
- **[#5298 MCP 工具 schema 预算化](https://github.com/HKUDS/nanobot/issues/5298)**：大型 MCP 工具集的上下文成本问题，涉及 `ToolRegistry.get_definitions()` 架构调整，讨论仍在进行。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | Session 路径穿越漏洞 [#5564](https://github.com/HKUDS/nanobot/issues/5564) | ✅ 已有 fix PR #5633 并关闭 |
| 🟠 中 | "insufficient credits" 时 fallback 失效 [#5967](https://github.com/HKUDS/nanobot/issues/5967) | ✅ 当日修复（#5968） |
| 🟠 中 | Telegram long polling 静默挂起 [#3626](https://github.com/HKUDS/nanobot/issues/3626)（bot 存活但收不到消息） | ✅ 修复 PR #3627 已关闭 |
| 🟡 低 | 模型选择器列出已下线的 OpenAI 模型（`gpt-5-chat-latest` 等）[#5977](https://github.com/HKUDS/nanobot/issues/5977) | ⏳ 相关 PR [#5984](https://github.com/HKUDS/nanobot/pull/5984)（取消版本钉扎的目录过滤）待合并 |
| 🟡 低 | GPT 定时任务无法产出最终回答 [#3106](https://github.com/HKUDS/nanobot/issues/3106) | ✅ 相关 PR #3127 已关闭 |
| 🟡 低 | ExecTool 参数向量命令丢失 PATH [#5986](https://github.com/HKUDS/nanobot/pull/5986) | 🔧 fix PR 今日提交，待评审 |

## 6. 功能请求与路线图信号

近期可能进入下一版本的能力方向：

- **子代理（subagent）体系强化**：[#5985](https://github.com/HKUDS/nanobot/pull/5985)（会话级任务消息与取消）、[#5954](https://github.com/HKUDS/nanobot/pull/5954)（并发结果聚合）、#5976 系列——子代理正在形成完整任务管理闭环，是明显的路线图主线。
- **Telegram 体验**：per-chat/per-topic 策略（#5973/#5974）、话题自动改名（[#5902](https://github.com/HKUDS/nanobot/pull/5902)）、静默压缩与降低轮询日志噪音（[#5900](https://github.com/HKUDS/nanobot/issues/5900)）。
- **模型目录与推理能力**：[#5983](https://github.com/HKUDS/nanobot/pull/5983) 基于目录的 reasoning effort 下拉选择、[#5984](https://github.com/HKUDS/nanobot/pull/5984) 动态模型发现。
- **TUI/交互**：[#5981](https://github.com/HKUDS/nanobot/pull/5981) 允许活跃 turn 期间接受 `/goal` 请求。
- **架构级**：SQLite 会话存储重构（#5943，p1）若合入将是存储层里程碑。

## 7. 用户反馈摘要

- **可靠性是首要痛点**：Telegram 静默挂起（#3626）中用户强调“bot 看似健康但收不到消息”，无任何报错日志，对生产部署影响大。
- **模型供应商容错**：用户通过网关聚合多模型，欠费/限流时期望 fallback 平滑切换而非直接报错“停止工作”（#5967）。
- **多实例运维困惑**：用户让一个 bot 实例管理另一个实例时产生重复进程（#2084），暴露了面向个人服务器场景的进程管理需求。
- **通知噪音**：上下文压缩向微信/Telegram 频道推送通知被认为打扰用户（#5900），反映“静默运维”偏好。
- **离线可用性**：无网环境下 tiktoken 网络加载导致卡顿数秒（#3647），说明有相当比例用户在本地/离线环境运行。

## 8. 待处理积压

- **[#5298 MCP schema 预算化](https://github.com/HKUDS/nanobot/issues/5298)**：8 月提出，仅 2 条评论，涉及核心架构，需维护者给出设计决策。
- **[#5421 空闲压缩与并发 turn 的状态契约](https://github.com/HKUDS/nanobot/issues/5421)**：贡献者明确“先问后写”，等待维护者确认设计意图后才能推进实现，8 月中旬至今未回复，正在阻塞社区贡献。
- **多个标注 `conflict` 的已关闭修复 PR**（#3662、#2166、#3127、#5344 等）：建议维护者确认这些修复是否已等价进入主干，避免漏洞/bug 修复随 PR 关闭而流失。
- **待合并 PR 积压 23 条**：其中 p1 的 #5943（SQLite 重构）评审优先级最高；#5974 依赖 #5973，建议尽快处理依赖链避免长期堆叠。

---
*数据来源：GitHub HKUDS/nanobot，统计窗口 2026-09-29 至 2026-09-30。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-09-30

---

## 1. 今日速览

今日 Zeroclaw 呈现**高活跃度、无发版**的开发冲刺状态：过去 24 小时共有 23 条 Issue 更新（20 开/活跃、3 关闭）和 50 条 PR 更新（45 待合并、5 已合并/关闭），无新版本发布。工程重心明显集中在 **v0.9.0 RPC 核心对等（core-parity）与安全（identity-access / session ownership）** 双主线上，多个 XL 级 PR（#11165、#11186、#11176、#11149）持续 rebase 推进。值得注意的是，今日新增了多条 **S0 级安全 Issue**（#11239、#11126、#11127），且 WhatsApp Web 渠道的媒体处理缺陷（#10975、#11255、#11257）成为用户侧最集中的痛点。社区贡献结构健康，核心贡献者（@Audacity88、@IftekharUddin、@JordanTheJet）与外部贡献者（@twqdev、@Leon-SK668、@ConYel）并行推进。

---

## 2. 版本发布

今日无新版本发布。从 PR 标签（`v0.9.0 core-parity lane #11001`）判断，项目正处于 v0.9.0 发布前的功能合并窗口期。

---

## 3. 项目进展

今日合并/关闭活动较少（PR 合并/关闭仅 5 条，Issue 关闭 3 条），主线工作以大型 PR 的迭代与集成为主：

- **Issue #10068 关闭**（交互式会话上下文被限制在 32k tokens 的 Bug）— 曾标记 `needs-repro`，现已解决。
- **Issue #11197 关闭**（P0 安全：会话恢复后恢复已撤销管理员转发的环境变量）— [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11197)，配套修复已落地，说明 security/sandbox 的 S0 修复通道运转正常。
- **Issue #10051 关闭**（ZeroCode 编辑器 "Add to Chat" 功能）。
- **PR #11082 已合并**（由 Tracker #8289 确认）：OIDC 里程碑的核心栈（#10248/#10255/#10259/#10263/#10265 + 合并的 enrollment/gateway/private-memory/migration 切片）全部落地，OIDC 身份体系进入收尾阶段 — 详见 [Issue #8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289)。
- **PR #11098 部分落地**：插件安装改用隐藏 staging 目录 + 原子重命名，推进 [Issue #10770](https://github.com/zeroclaw-labs/zeroclaw/issues/10770)。

整体判断：项目处于**功能聚合期而非收口期**——45 个待合并 PR 中含多个互相依赖的 XL 级改动（RPC proto 抽取 → RPC client → RPC parity），合并顺序管理将是近期维护者的主要负担。

---

## 4. 社区热点

**最活跃 Issue（按评论数）：**

1. [#8832 插件自有 Kanban 看板](https://github.com/zeroclaw-labs/zeroclaw/issues/8832)（10 评论）— 诉求是让 Agent 的工作可被看板化投影管理。最新状态显示已脱离 RFC 队列（#9496 重新分类），且依赖的通用 per-instance 持久状态已由 #11081 交付，**落地阻力显著降低**。
2. [#10068 上下文 32k 上限 Bug](https://github.com/zeroclaw-labs/zeroclaw/issues/10068)（6 评论，今日关闭）— 用户配置 `max_context_tokens = 131072` 被忽略，反映长上下文用户的核心需求。
3. [#6105 Cron 任务缺少自身上下文](https://github.com/zeroclaw-labs/zeroclaw/issues/6105)（5 评论）— 定时提醒场景下 Agent "失忆"，是自动化场景用户的高频痛点。

**热点话题聚类：**

- **WhatsApp Web 渠道媒体能力缺失**（#10975、#11255、#11257）集中爆发：图片不下载（Agent 只收到 `[Image]` 字面量，vision 不可用）、媒体 caption 丢失。诉求明确：对齐 Telegram 已有的 `[IMAGE:<path>]` 工作区落盘模式。
- **知识/记忆层方向讨论**：[#11053 知识图谱作为一等公民记忆层 RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/11053) 与 [#11235 知识语料库 RAG RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) 同期提出，社区对 "memory vs tool" 边界的架构讨论升温。
- **A2A 协议 crate RFC**（[#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254)）：计划将既有 A2A wire model 抽为独立 `zeroclaw-a2a` crate，是互操作方向的重要信号。

---

## 5. Bug 与稳定性（按严重度）

### S0 — 数据丢失/安全风险

| Issue | 描述 | Fix 状态 |
|---|---|---|
| [#11239](https://github.com/zeroclaw-labs/zeroclaw/issues/11239) | owned session 经 `spawn_subagent` / `execute_pipeline` 泄漏到共享内存平面 | ✅ 已有 [PR #11266](https://github.com/zeroclaw-labs/zeroclaw/pull/11266)（当日提交） |
| [#11127](https://github.com/zeroclaw-labs/zeroclaw/issues/11127) | session-data 工具绕过 principal 所有权检查，非管理员可读他人会话历史 | 🔶 [PR #9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) 覆盖 `sessions_history` 范围 |
| [#11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) | 排队会话操作保留已撤销的管理员所有权旁路 | 🔶 部分修复 [PR #10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412)、[PR #11234](https://github.com/zeroclaw-labs/zeroclaw/pull/11234)（判断应按当前授权而非陈旧 grant） |

### P0/P1

- [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197)（S0，**已关闭**）：会话恢复后还原已撤销的环境变量转发。
- [#10975](https://github.com/zeroclaw-labs/zeroclaw/issues/10975)（P1）：WhatsApp 入站图片不下载，vision 完全不可用 — 功能请求 #11255 提出了对齐 Telegram 的方案。
- [#9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770)（P1）：`cron update` 静默丢弃 6 列声明式任务变更，与今日新增 [#11237](https://github.com/zeroclaw-labs/zeroclaw/issues/11237)（S1：配置编辑器无法写入声明式 cron）共同指向**声明式 cron 管理链路的系统性缺口**。

### S2 及以下

- [#11257](https://github.com/zeroclaw-labs/zeroclaw/issues/11257)：WhatsApp 丢弃媒体 caption。
- [#11256](https://github.com/zeroclaw-labs/zeroclaw/issues/11256)（S3）：`initial_prompt` 有文档但从未发送给 Groq/OpenAI 转录 API。
- [#11233](https://github.com/zeroclaw-labs/zeroclaw/issues/11233)：外部安全团队 DefuzeX 报告验证结果未实际执行检查即写入报告 — 值得维护者甄别与回应。

---

## 6. 功能请求与路线图信号

结合已有 PR，以下方向**很可能进入下一版本（v0.9.0）**：

1. **RPC 核心对等**：#11165（zeroclaw-rpc-proto + OpenRPC 漂移检查）→ #11186（RPC client + 进程内 gateway seam）→ #11176（cron/memory/skills/personality 与 HTTP 路由对等）为堆叠式主线，明确标注属 v0.9.0 lane。
2. **Cron 安全修复**：#11149（阻止 RPC `cron/add` 预批准 shell 命令）已列为 #11176 的前置，v0.9.0 必含。
3. **插件生命周期健壮性**：#11232（从保留包根目录打开已准入 payload，对抗并发祖先替换）、#11098（staging 原子安装）呼应 #10769/#10770，插件体系加固接近完成。
4. **会话所有权集中治理**：#10412（共享 SessionBackend 原子所有权契约）+ #11234 + #11225 + #11266 形成 S0 安全修复集群，优先级最高。
5. **中期信号（未排期但已接受）**：Kanban 插件看板（#8832，依赖已就绪）、插件 update+回滚命令（#10995，CLI 目前无 update 操作）、知识图谱记忆层（#11053）、RAG 语料库（#11235）、A2A crate（#11254）— 后三者处于 RFC 阶段，预计进入 0.10+ 讨论。

---

## 7. 用户反馈摘要

- **多渠道 Agent 运维用户**：WhatsApp 用户受打击最大 — 发图 Agent "看不见"、媒体配文丢失，vision 能力形同虚设（#10975/#11255/#11257）；相对地 Telegram 体验被引为正面标杆。
- **长上下文/重度 CLI 用户**：32k 硬上限 Bug（#10068）影响大上下文分析场景，已修复关闭。
- **自动化/定时任务用户**：cron 上下文缺失（#6105）与声明式 cron 编辑失效（#11237、#9770）表明 "配置即代码" 路径尚未真正闭环，用户在 dashboard 与 CLI 之间反复碰壁。
- **记忆/知识管理用户**：社区明确表达 "memory 应该无需 Agent 主动调用即可自动捕获与浮现"（#11053），以及对本地文档 RAG 的强需求（#11235）— 均指向个人知识助手这一核心定位。
- **企业/多租户关注者**：OIDC 里程碑核心合并（#8289）是正面信号，但 S0 所有权旁路系列（#11126/#11127/#11239）显示多租户隔离仍在打补丁阶段。

---

## 8. 待处理积压（提醒维护者关注）

- **[#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105)**（2026-04-25 开启，5 个多月）：cron 上下文缺失，状态 `in-progress` 但推进缓慢，P2 — 建议给出明确排期或拆分。
- **[#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832)**（7 月开启，10 评论）：Kanban 看板依赖已就绪（#11081），应尽快指派实施 PR。
- **[#10246](https://github.com/zeroclaw-labs/zeroclaw/pull/10246)**（8-22 开启，XL，`needs-maintainer-review`）：Git channels 暴露给本地会话 — **阻塞在维护者评审**，是最需要关注的待办。
- **[#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746)**（8-04 开启，XL，`needs-author-action`）：per-agent 所有权范围化，与多个 S0 Issue 相关，建议与 #10412 协调合并顺序。
- **[#11233](https://github.com/zeroclaw-labs/zeroclaw/issues/11233)**：外部安全公司（DefuzeX/KUMA）报告，0 回应 — 建议尽快确认有效性与归属组件。
- **[#11256](https://github.com/zeroclaw-labs/zeroclaw/issues/11256)**：文档与实现不一致（`initial_prompt`），属低成本修复，适合 good-first-issue 化。
- **结构性风险提示**：45 个待合并 PR 中含大量互相堆叠的 XL 改动，建议维护者发布明确的合并顺序图谱，避免 v0.9.0 收口时出现大面积 rebase 冲突。

---

**健康度小结**：贡献流量高、安全响应快（S0 当日报 Issue 当日出 fix PR），但待合并积压偏大、声明式 cron 与 WhatsApp 渠道两条用户可见链路存在系统性欠账，是 v0.9.0 前应优先清偿的债务。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-09-30

## 1. 今日速览

今日 Hermes Agent 呈现高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 49，仅关闭 1），PR 更新 50 条（待合并 45，合并/关闭 5），无新版本发布。社区以 bug 报告为主，集中在桌面端稳定性（PTY 泄漏、右键菜单回归）、更新器可靠性（Windows 网络环境、stale receipt）和会话状态管理三个方向。值得欣慰的是，多个高严重度问题（如 #128942 PTY 泄漏）当天即出现社区修复 PR，响应闭环速度快，但待合并 PR 积压（45 条）表明审核带宽是当前瓶颈。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 5 个 PR 中较重要的：

- **#58869（已关闭）clamp chat completion output cap to context window**：将 max_tokens 钳制在估算输入 + 上下文窗口内，修复 vLLM lower-bound 误判问题并附回归测试，直接提升本地模型用户体验。[链接](https://github.com/NousResearch/hermes-agent/pull/58869)
- **#58981（已关闭）preserve custom provider output caps**：自定义 provider 的 max_output_tokens 在配置规范化后得以保留，并传播到 delegate/cron/后台审查等子 agent，修复本地 Spark/vLLM worker 的反复 re-prefill 类问题。[链接](https://github.com/NousResearch/hermes-agent/pull/58981)

注：两条均为关闭状态，需确认是合并落地还是被放弃（标签含 `sweeper:blast-broad`，影响面广，可能因风险被关闭）。另有 #66662（桌面端 `__new__` 草稿串扰 bug）今日关闭，是唯一关闭的 Issue。整体推进速度平稳，主要靠社区贡献者（@dskwe 今日连发 4 个 WIP fix PR）维持修复节奏。

## 4. 社区热点

评论最多的讨论：

1. **#91115（11 评论）macOS 更新后 keychain 反复弹窗**：ad-hoc 重签名导致 keychain ACL 失配，涉及 proof-carrying safeStorage rotation 方案讨论，8 月至今持续讨论，是兼容性方向最重的议题。[链接](https://github.com/NousResearch/hermes-agent/issues/91115)
2. **#58705（11 评论）mem0 OSS + Qdrant 锁冲突**：主进程与 agent 工具争抢 Qdrant 文件锁，涉及内存子系统架构决策（`needs-decision`），悬置近 3 个月。[链接](https://github.com/NousResearch/hermes-agent/issues/58705)
3. **#122529（8 评论，P1）cron 外部 worker 缺 venv 路径**：`sys.executable` 指向基础解释器导致 `ModuleNotFoundError`，P1 级安装/更新问题。[链接](https://github.com/NousResearch/hermes-agent/issues/122529)
4. **#62336（7 评论，安全）终端环境快照泄露凭据到磁盘**：`export -p` 把 `bws run` 注入的 Bitwarden 密钥持久化到 cache，是安全边界类重点问题。[链接](https://github.com/NousResearch/hermes-agent/issues/62336)

背后诉求：用户对**更新器/凭据管理稳定性**的耐心正在被消耗，跨平台（尤其 Windows、macOS 签名）场景问题反复出现。

## 5. Bug 与稳定性（按严重度）

| 级别 | Issue | 描述 | Fix PR |
|---|---|---|---|
| P0 | [#128817](https://github.com/NousResearch/hermes-agent/issues/128817) | 本地模型后续 turn 因工具 schema 变化整段 re-prefill（53s → 更慢） | 关联 #128757 方向 |
| P1 | [#122529](https://github.com/NousResearch/hermes-agent/issues/122529) | cron worker PYTHONPATH 缺失致 ruamel 404 | 未见 |
| P2 | [#128942](https://github.com/NousResearch/hermes-agent/issues/128942) | macOS 桌面端泄漏 /dev/ptmx，PTY 耗尽致全系统终端崩溃 | ✅ 当天两个 fix：[#128943](https://github.com/NousResearch/hermes-agent/pull/128943)（renderer 崩溃后回收）、[#128949](https://github.com/NousResearch/hermes-agent/pull/128949)（shell exit 时 kill PTY） |
| P2 | [#127643](https://github.com/NousResearch/hermes-agent/issues/127643) | liveness watchdog 在工具运行时误判超时、强杀正常 turn | 未见 |
| P2 | [#127313](https://github.com/NousResearch/hermes-agent/issues/127313) | pane-body 右键菜单劫持 transcript，复制功能不可用（回归 ad2d4822e1） | 未见 |
| P2 | [#124871](https://github.com/NousResearch/hermes-agent/issues/124871) | Windows 更新 600s watchdog 误杀慢速 npm install，失败 marker 阻塞重试 | 未见 |
| P2 | [#128935](https://github.com/NousResearch/hermes-agent/issues/128935) | stale `.hermes-node-deps` receipt 跳过 npm ci，每次更新构建失败 | ✅ [#128946](https://github.com/NousResearch/hermes-agent/pull/128946) |
| P2 | [#126304](https://github.com/NousResearch/hermes-agent/issues/126304) | compression.threshold_tokens=256k 静默覆盖 1M 窗口模型的用户阈值 | 未见 |
| 安全 | [#128945](https://github.com/NousResearch/hermes-agent/issues/128945) | show_reasoning=true 时内部推理块被当作消息发到频道 | ✅ [#128948](https://github.com/NousResearch/hermes-agent/pull/128948) |
| 安全 | [#128930](https://github.com/NousResearch/hermes-agent/issues/128930) / [#128931](https://github.com/NousResearch/hermes-agent/issues/128931) | CI 门禁形同虚设（history-check 永不拒绝；js-autofix 自审自批自动合并） | ✅ [#128932](https://github.com/NousResearch/hermes-agent/pull/128932) / [#128933](https://github.com/NousResearch/hermes-agent/pull/128933) |

## 6. 功能请求与路线图信号

- **#128939 computer_use 剪贴板读写**（@teknium1，标记 `ci-reviewed`）：移植自 oh-my-openagent，大概率近期合入，显著提升桌面自动化能力。[链接](https://github.com/NousResearch/hermes-agent/pull/128939)
- **#93508 `hermes webapp` 浏览器承载 Desktop renderer**：大型特性 PR，覆盖面极广，8 月底至今仍在活跃，是明确的路线图级投入。[链接](https://github.com/NousResearch/hermes-agent/pull/93508)
- **#128936 委派可观测性 API**（第三方桌面客户端作者提出 chat-stream 对等 + 子 transcript 读 API）：反映外部 API 生态需求。[链接](https://github.com/NousResearch/hermes-agent/issues/128936)
- **#128880 Sign in with ChatGPT 官方计划用量支持**：OpenAI 官方开放 SIWC 流程，社区希望补充现有 Codex 路径。[链接](https://github.com/NousResearch/hermes-agent/issues/128880)
- **#128947 JEV Router 自动触发 MoA**、**#128928 越南语 UI**、**#112035 波斯语 RTL 本地化**（大型活跃 PR）：国际化与推理质量方向持续推进。

## 7. 用户反馈摘要

- **Windows/弱网用户体验差**：#124871（中国网络环境更新被 watchdog 杀掉）、#128935（更新循环失败），更新器在非理想网络下可靠性是高频抱怨点。
- **本地模型用户成本痛点**：#128817、#126304 反映 re-prefill 和过早压缩对 1M 窗口本地模型用户造成直接的时间和 token 浪费。
- **桌面端细节回归影响信任**：右键菜单劫持（#127313）、Files 面板 stale 缓存（#128890）、`/context` 永远说没有活跃 agent（#128874）——小问题密集出现影响日常使用。
- **生态系统集成需求强**：第三方客户端（#128936）、消息平台（BlueBubbles、Buzz 频道泄露推理）用户在认真基于 Hermes 构建产品。
- **正面信号**：多个 bug 当天报告、当天有社区 PR 响应；@dskwe、@beardthelion、@iainlane 等贡献者产出高质量、说明详尽的修复。

## 8. 待处理积压

- **#91115 macOS keychain 弹窗**（8/20 起，11 评论）：长期未决的兼容性硬骨头，影响所有 opted-in 桌面用户每次更新后的体验。
- **#58705 mem0/Qdrant 锁冲突**（7/5 起，11 评论，`needs-decision`）：内存子系统架构决策悬置近 3 个月，建议维护者排期裁决。
- **#62336 环境快照泄露凭据**（7/10 起，7 评论，`needs-decision`，安全类）：安全问题不宜长期挂起。
- **PR 积压 45 条待审**，其中 #93508（webapp）、#112035（波斯语本地化）、#116401（BlueBubbles 去重）、#127594/#128364（Windows 修复）等待审核时间较长，建议扩充审核带宽或分批处理。

---

**健康度评估**：社区贡献活跃、问题响应闭环快（多个当日 fix），但待合并 PR 积压高、仅 1 个 Issue 被关闭、无版本发布节奏，提示维护侧审核与发布吞吐量是当前主要风险点。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-09-30

## 1. 今日速览

PicoClaw 今日保持较高社区活跃度：过去 24 小时新增/活跃 Issue 6 条（0 条关闭），PR 更新 5 条（4 条待合并、1 条关闭）。活跃贡献者 [@racso2609](https://github.com/racso2609) 表现突出，单日提交了 3 个针对 Web UI 反馈链路的修复/增强 PR（#3410、#3411、#3412），形成了一条完整的“可观测性补强”工作流。今日无新版本发布。整体看，项目处于社区驱动的 Web UI 打磨阶段，但 Issue 关闭数为 0、维护者响应速度值得关注。

## 2. 版本发布

今日无新版本发布，无 Releases。

## 3. 项目进展

今日无 PR 合并，1 个 PR 被关闭：

- **[#3337](https://github.com/sipeed/picoclaw/pull/3337) [CLOSED] [stale] Fix/mcp failure hangs agent loop**（@kuzmichus，2026-08-14 创建）：修复 MCP 服务器连接失败时 `AgentLoop.Run` 直接退出导致聊天无响应的挂起问题。该 PR 被以 stale 标记关闭，**对应的 hang 问题可能仍未解决**，建议维护者确认是否有替代修复或重新开放。

待合并 PR（详见第 5、6 节）：
- [#3410](https://github.com/sipeed/picoclaw/pull/3410) — steering 队列状态可视化
- [#3411](https://github.com/sipeed/picoclaw/pull/3411) — 状态驱动的 working indicator
- [#3412](https://github.com/sipeed/picoclaw/pull/3412) — 失败 turn 对用户可见
- [#3378](https://github.com/sipeed/picoclaw/pull/3378) — OAuth token refresh scope 修复（已挂起 18 天）

项目整体向前推进有限（无合并），但待合并 PR 质量较高、与 Issue 形成闭环，若合并将显著改善 Web UI 体验。

## 4. 社区热点

- **[#3281](https://github.com/sipeed/picoclaw/issues/3281) [BUG] Web UI chat input laggy with long history**（16 评论，2 👍）：今日热度最高。0.3.1 版本 Web UI 在会话历史较长时输入框严重卡顿，是日常使用体验的直接痛点，持续讨论超过两个月仍未关闭。
- **[#3408](https://github.com/sipeed/picoclaw/issues/3408) 消息隐形排队与静默丢弃**：agent 忙碌时用户消息进入 steering 队列但完全无 UI 反馈，队列满时静默丢弃。已由作者本人提交 [PR #3410](https://github.com/sipeed/picoclaw/pull/3410) 修复，属于“报告—修复”的典范流程。
- **[#440](https://github.com/sipeed/picoclaw/issues/440) 用上下文窗口边界与循环检测替代硬迭代限制**（7 评论）：`max_tool_iterations: 20` 硬限制导致复杂任务中途夭折，是 agent 执行层的架构性诉求，自 2 月讨论至今。

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 状态 | 说明 |
|---|---|---|---|
| 高 | [#3412](https://github.com/sipeed/picoclaw/pull/3412) 对应的失败 turn 静默问题 | ✅ 已有 fix PR | 错误通知在 3 处路径被吞掉，用户只看到无声等待 |
| 高 | [#3337](https://github.com/sipeed/picoclaw/pull/3337) MCP 失败导致 agent loop 挂起 | ⚠️ PR 被 stale 关闭，修复状态不明 | 建议确认是否回归 |
| 中 | [#3408](https://github.com/sipeed/picoclaw/issues/3408) 队列满消息静默丢弃 | ✅ 已有 fix PR #3410 | |
| 中 | [#3407](https://github.com/sipeed/picoclaw/issues/3407) 幽灵会话：模型思考中会话从列表消失 | ❌ 无 fix PR | 需维护者关注 |
| 中 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) 长历史输入卡顿 | ❌ 无 fix PR，讨论 2 月+ | |
| 低 | [#3409](https://github.com/sipeed/picoclaw/issues/3409) ScheduleWakeup 被用作 subagent 等待机制触发多余自主循环 tick | ❌ 无 fix PR | 语义设计问题 |

## 6. 功能请求与路线图信号

- **[#3406](https://github.com/sipeed/picoclaw/issues/3406) Web UI 三项 UX 增强**（更清晰的工作指示器、手动/渠道会话分离、带归档的会话列表）：part 1 已有 [PR #3411](https://github.com/sipeed/picoclaw/pull/3411)，是当前最可能进入下一版本的功能线。
- **#3408 附带的队列/事件可见化诉求**：PR #3410 已实现部分，事件 surface 可能是后续方向。
- **#440 迭代限制重构**：长期讨论的架构增强，尚无对应 PR，是路线图层面值得规划的方向。
- **#3409 调度原语语义修正**：可能引出“等待 subagent 完成的专用原语”设计。

## 7. 用户反馈摘要

- **Web UI 已成为主流交互入口**（#3406 明确指出），但其反馈链路（思考状态、排队、错误、会话列表）存在系统性缺口，是多条 Issue 的共同根源。
- 用户对**静默失败**极为不满：消息消失（#3408）、错误无提示（#3412）、会话消失（#3407）均属此类。
- **长会话性能**（#3281）影响日常重度用户，16 条评论显示共鸣较强。
- 积极信号：社区贡献者不仅报 bug，还主动提交高质量 fix PR（racso2609 系列），社区参与深度高。
- Agent 执行层（#440 硬限制、#3409 调度语义）用户期望向更智能的运行时行为演进，而非固定阈值。

## 8. 待处理积压

- **[#3281](https://github.com/sipeed/picoclaw/issues/3281)**：2026-07-21 开启，16 条评论、2 👍，至今无关闭迹象，属高影响性能问题，建议优先排期。
- **[#440](https://github.com/sipeed/picoclaw/issues/440)**：2026-02-18 开启，7 条评论，7 个月无结论，需维护者给出路线图态度。
- **[#3378](https://github.com/sipeed/picoclaw/pull/3378)**：OAuth scope 修复 PR 提交 18 天无人 review，影响多 OAuth provider 用户。
- **#3337 被 stale 关闭但核心 hang 问题去向不明**，建议维护者确认或建立跟踪 Issue。

---
*数据来源：sipeed/picoclaw GitHub，统计窗口 2026-09-29 ~ 2026-09-30。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-30

## 1. 今日速览

今日 NanoClaw 呈现**高活跃、修复导向**的开发状态：过去 24 小时共有 16 条 PR 更新（9 条待合并、7 条已合并/关闭），2 条 Issue 全部关闭，无新版本发布。核心团队（@glifocat 等）持续在 setup/update 可靠性、网关（Iron/OpenCode）集成和供应链安全三个方向密集提交。Issue 清零式的关闭节奏（无新开 Issue）表明问题在快速消化，项目健康度良好。

## 2. 版本发布

今日无新版本发布。最近相关版本为 NanoClaw 2.4.0（Issue #3888 中提及）。

## 3. 项目进展

今日合并/关闭 7 条 PR，主要集中在**稳定性修复与文档规范化**：

- **#3947** [fix(host)](https://github.com/nanocoai/nanoclaw/pull/3947)：host 清理机制现在会停掉会话或 agent group 已被删除的容器，修复“删除后容器仍运行直到下次重启”的问题——直接对应已关闭的 Issue #3909。
- **#3953** [fix(iron-proxy)](https://github.com/nanocoai/nanoclaw/pull/3953)：在无法运行 amd64 镜像的 arm64 Docker 引擎上提前终止安装并给出明确修复指引，取代 #3891——对应 Issue #3888 的 arm64 问题。
- **#3958** [fix(log)](https://github.com/nanocoai/nanoclaw/pull/3958)：日志序列化遇循环引用/BigInt 不再导致 host 崩溃。
- **#3878** [fix(setup)](https://github.com/nanocoai/nanoclaw/pull/3878)：安装后清理时先停 ping 容器再删文件夹。
- **#3954 / #3955**：网关凭证注释纠错、OpenCode skill 文档去网关耦合（[#3954](https://github.com/nanocoai/nanoclaw/pull/3954)、[#3955](https://github.com/nanocoai/nanoclaw/pull/3955)）。
- **#3919** [fix(opencode)](https://github.com/nanocoai/nanoclaw/pull/3919)：本地模型 URL 在提示阶段即按所选网关校验（部分内容被 #3965 演进替代）。

整体看，本周修复合集显著提升了容器生命周期管理、arm64 兼容性和更新/回滚可靠性，为下个版本积累了扎实的 patch 集。

## 4. 社区热点

今日数据中无高评论/高反应条目（各 Issue/PR 评论与 👍 均为 0），社区热度以**提交量**而非讨论量体现。值得关注的新 PR：

- **#3969** [fix(iron-proxy)](https://github.com/nanocoai/nanoclaw/pull/3969)（社区贡献者 @daviddl9）：让前置代理 407 响应携带 Basic challenge，使 git/libcurl 能正确发送代理凭证——解决 Iron Proxy 下 `git fetch` 失败的实际痛点。
- **#3901** [fix(setup)](https://github.com/nanocoai/nanoclaw/pull/3901)（@barnuri）：host 服务支持仅能通过 HTTPS 代理上网的环境，企业内网场景诉求明显。

## 5. Bug 与稳定性

按严重程度排列（今日报告的新 Bug 较少，多为已修复闭环）：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | #3918：result-door 提供方（如 OpenCode）重复发送 agent 已通过工具发出的回复 | [PR 开放中](https://github.com/nanocoai/nanoclaw/pull/3918)，被 ack flag 落地阻塞 |
| 中 | #3962：liveness probe 自身失败时 `/update-nanoclaw` 误报 complete，旧 host 仍在运行 | [fix PR 开放中](https://github.com/nanocoai/nanoclaw/pull/3962) |
| 中 | #3956：回滚不停 live nohup host、不排空 agent 容器 | [fix PR 开放中](https://github.com/nanocoai/nanoclaw/pull/3956) |
| 中 | #3965：OpenCode 保存了每次调用都会失败的模型 URL | [fix PR 开放中](https://github.com/nanocoai/nanoclaw/pull/3965) |
| 低 | #3888（arm64 exec format error）| 已修复（#3953），Issue 已关闭 |
| 低 | #3909（删除 group 后仍启动容器）| 已修复（#3947），Issue 已关闭 |

## 6. 功能请求与路线图信号

- **#3964** [feat(gateway)](https://github.com/nanocoai/nanoclaw/pull/3964)：provider 可声明精确 `host:port` 模型端点，非默认端口模型不再每次触发审批卡——自定义端点支持即将落地。
- **#3966** [feat(iron)](https://github.com/nanocoai/nanoclaw/pull/3966)：本机 keyless 模型支持 plain HTTP（`host.docker.internal`），仅放行声明的端口——本地推理体验持续简化。
- **#3968** [ci 加固](https://github.com/nanocoai/nanoclaw/pull/3968)：pin 所有 GitHub Actions 与 cosign，引入 Dependabot——供应链安全成为明确路线图方向。

这三条均为 core-team 标签的待合并 feature/hardening PR，很可能共同进入下一个版本。

## 7. 用户反馈摘要

从近期 Issue 与 PR 描述提炼：

- **arm64/异构硬件用户**（如 NVIDIA DGX Spark）在 Advanced setup + Iron Proxy 场景受阻（#3888），显示非 x86 用户群真实存在。
- **企业/受限网络用户**：HTTPS_PROXY-only 环境（#3901）、代理下 git 凭证（#3969）是高频痛点，说明 NanoClaw 正被部署在受管控网络中。
- **本地模型用户**：对 keyless 本地模型（Ollama 类）开箱即用、免反复审批的期待强烈（#3964/#3965/#3966 系列回应）。
- 正面信号：问题从报告到关闭普遍在 3-5 天内完成，用户痛点被快速承接。

## 8. 待处理积压

- **#3918**（agent-runner 重复回复修复）：明确标注“等 send_message ack flag 落地”，属跨 PR 依赖，建议维护者跟踪前置工作进度。
- **#3901**（HTTPS 代理支持，社区 PR）：已开放 5 天、9-29 有更新但尚未合并，建议 core team 评审给出反馈，避免社区贡献者流失。
- **#3969**（Iron Proxy 407 challenge，社区 PR）：今日新开，需及时响应。
- 9 条待合并 PR（含多条 core-team 标签）形成一定评审积压，建议优先处理 #3962/#3956 等影响升级可靠性的修复。

---
*数据来源：NanoClaw GitHub 仓库（nanocoai/nanoclaw），统计窗口为过去 24 小时。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 —— 2026-09-30

## 1. 今日速览
- 过去 24 小时项目整体活跃度**偏低**：1 条 Issue 更新、1 条 PR 更新，无新版本发布。
- 最值得关注的是 PR #1014（v20260929 版本迭代）被关闭而非合并，版本发布流程可能需要返工。
- 新开 Issue #1015 来自第三方厂商的商业推广性质提案，需维护者甄别处理。
- 项目处于常规维护节奏，无重大功能推进或社区热议。

## 2. 版本发布
无。值得注意的是，PR #1014 本意是为 `v20260929` 版本做准备（含版本号 bump），但该 PR 已于 09-29 被关闭，**该版本未能按预期落地**，今日无 Release 产出。

## 3. 项目进展
- **PR #1014 [已关闭]**：v20260929（[链接](https://github.com/nullclaw/nullclaw/pull/1014)）
  - 内容包含三项改动：
    1. 固定 Web Search 至已配置的 provider，修复 Exa 拒绝重复 Content-Type 头的问题；
    2. 官方 QQ 回复前剥离 Markdown 标记；
    3. 版本号 bump 至 v20260929。
  - ⚠️ 该 PR 状态为 **CLOSED（未合并）**，测试清单（Release workflow 构建、`nullclaw version` 报告正确 tag）均未勾选，推测因发布流程验证未通过或需要重做。相关修复（Exa header 冲突、QQ Markdown 清洗）尚未进入主干，**项目今日实际净进展有限**。

## 4. 社区热点
- **Issue #1015 [OPEN]**：Hosted MemCode engine for nullclaw memory interface（[链接](https://github.com/nullclaw/nullclaw/issues/1015)，@vivekgupta-memcode，0 评论 / 0 👍）
  - 由 MemCode 创始人提出的托管式记忆引擎集成提案，主张 NullClaw 已支持可插拔记忆引擎且运行时占用小，远程托管方案可让用户跨设备同步记忆而不增加本地存储。
  - **分析**：这是典型的厂商借开源项目 Issue 通道进行的商业引流行为，暂无社区共鸣（0 评论 0 点赞）。诉求本身（跨设备记忆同步）有一定合理性，但建议维护者明确“商业推广类 Issue”的处理政策，可引导至讨论区或要求先提供中立的技术评估。

## 5. Bug 与稳定性
今日无新报告的 Bug、崩溃或回归问题。

需留意：PR #1014 中提到的两个问题——**Exa 搜索因重复 Content-Type 头被拒绝**、**QQ 官方回复残留 Markdown 标记**——其修复因 PR 关闭尚未合入，若这两个问题已在主干复现，属于**待重新交付的修复项**。

## 6. 功能请求与路线图信号
- **托管记忆引擎 / 跨设备记忆同步**（Issue #1015）：诉求方向与项目“可插拔 memory engine”架构契合，未来若社区有类似需求涌现，远程 memory provider 可能成为路线图候选。但目前仅单一商业方提出，缺乏社区背书，短期内纳入下一版本的可能性低。
- **下一版本（v202609xx）预期**：核心仍是 PR #1014 携带的 Exa 搜索修复、QQ 输出清洗与版本 bump，等待修复 PR 重新提交并合并。

## 7. 用户反馈摘要
今日 Issue/PR 评论数据极少（#1015 零评论，#1014 评论数未统计），无法提炼有统计意义的用户痛点。间接信号：
- PR #1014 的改动表明实际用户在使用 **Exa 搜索 provider** 和 **QQ 官方回复通道** 时遇到了格式/协议层面问题，属于集成稳定性类痛点。

## 8. 待处理积压
- **Issue #1015**（创建仅 1 天）：虽不算长期积压，但作为商业提案需要维护者尽快定性（接受评估 / 关闭 / 引流至其他渠道），避免成为僵尸 Issue。
- **PR #1014 的后续**：建议维护者说明关闭原因并尽快以新 PR 形式重新提交 v20260929 相关修复，避免版本发布节奏中断。

---
**健康度小结**：今日项目呈低活跃度维护状态，无版本产出、无 Bug 报告、无社区热议。关键风险点是 v20260929 发布中断，需关注修复 PR 的重新落地。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-09-30

## 1. 今日速览

IronClaw 今日整体活跃度中等偏稳：过去 24 小时有 2 条 Issue 活跃（均为新提案讨论，无关闭）、3 条 PR 更新（1 条已合并/关闭）、并发布 1 个稳定版本 **v1.4.1**。项目核心节奏以“稳定版发布 + 前瞻性架构提案”为主，无明显故障报告，社区讨论聚焦于**远程边缘 worker 调度**与**turn-0 工具预选**两个方向性议题，且后者已迅速有对应实现 PR 提交（Issue #8113 → PR #8119），社区从提案到代码落地响应速度很快，健康度良好。

## 2. 版本发布

### 🎉 ironclaw-v1.4.1（2026-09-29）

- **性质**：稳定版，由 `1.4.1-rc.2` 直接晋升（[PR #8120](https://github.com/nearai/ironclaw/pull/8120)），包含 RC2 的三个提交（来自 PR #8110）。
- **修复内容**：
  - **Google OAuth 激活修复**：Gmail、Google Calendar 扩展现在可以在部署方通过 Web UI 提供 Google OAuth client 的环境下正常激活（此前仅支持预配置方式）。
  - **Wasmtime 安全更新**：捆绑依赖升级，属于安全例行跟进。
- **破坏性变更**：无。属补丁级发布（1.4.1），API 与行为向后兼容。
- **迁移注意**：升级后如依赖 Google 扩展，建议验证 Web UI 填入的 OAuth client 凭据是否生效；无需其他配置迁移。

## 3. 项目进展

| PR | 状态 | 说明 |
|---|---|---|
| [#8120 chore(release): promote 1.4.1-rc.2 to 1.4.1](https://github.com/nearai/ironclaw/pull/8120) | ✅ 已合并/关闭 | 将 RC2 tip `b28154f` 晋升为稳定版，同步锁定包版本与 lockfile，更新根 changelog 与公开 changelog，完成 v1.4.1 发布闭环。 |

- **净进展**：今日完成一个完整发布周期（RC → stable），修复 Google OAuth 部署痛点并落地安全更新，属“交付日”。
- 待合并 [#7988](https://github.com/nearai/ironclaw/pull/7988)（CI 自动刷新代码库知识图谱）与 [#8119](https://github.com/nearai/ironclaw/pull/8119) 仍在队列中。

## 4. 社区热点

1. **[#7889 RFC: 扩展调度器/编排器支持可选远程边缘 worker](https://github.com/nearai/ironclaw/issues/7889)** — @kvnloo，1 条评论，今日有活跃更新。
   - **诉求**：IronClaw 已支持并行任务、本地 worker、Docker 沙箱 worker、WASM 工具、按任务凭据、资源限制、例程和安全优先审计模型，但 worker 池仍局限于单主机。提案希望让拥有多台“大多空闲”机器的运维者将它们注册为可选边缘 worker，扩展调度面。
   - **分析**：这是项目从“单机多 worker”走向“多机联邦调度”的关键架构议题，反映自托管重度用户对横向扩展的需求。

2. **[#8113 提案：可选 turn-0 工具预选（BM25F + embeddings）](https://github.com/nearai/ironclaw/issues/8113)** — @CjS77，今日活跃。
   - **诉求**：在会话首次模型调用前，用 BM25F + embeddings 对授权工具目录排序，直接向模型预告最优工具，省去 `tool_search` 的一轮往返；全量 opt-in、默认关闭（`RE...` 环境变量开关）。
   - **分析**：直击延迟与 token 成本痛点，且当天即有实现 PR #8119 跟进，是当前社区效率优化讨论的焦点。

## 5. Bug 与稳定性

今日**未报告新的 Bug、崩溃或回归问题**（新开 Issues 均为功能/架构提案）。唯一稳定性相关项为：

- **Wasmtime 安全更新**：已在 v1.4.1 中随版本发布修复（✅ 已有 fix，随 [#8120](https://github.com/nearai/ironclaw/pull/8120) 交付）。
- **Google OAuth Web UI 激活失败**：属历史 bug，v1.4.1 已修复。

建议运维方及时升级至 1.4.1 以获取安全补丁。

## 6. 功能请求与路线图信号

| 提案 | 状态 | 下一版本纳入可能性 |
|---|---|---|
| [#8113 turn-0 工具预选](https://github.com/nearai/ironclaw/issues/8113) | 已有实现 [PR #8119](https://github.com/nearai/ironclaw/pull/8119)（XL，medium 风险，新贡献者） | **高**。设计为 opt-in 且默认关闭、工具数组字节级不变，风险可控；但体量大（XL）+ 新贡献者，预计需 1-2 轮评审，可能进入 1.5.x |
| [#7889 远程边缘 worker](https://github.com/nearai/ironclaw/issues/7889) | RFC 讨论中，尚无实现 PR | **中偏低（近期）**。涉及调度器/编排器核心改造，需更长设计周期，更可能是 2.0 级别路线图方向 |

## 7. 用户反馈摘要

- **自托管多机运维者**（#7889）：拥有多台闲置机器的用户希望复用硬件资源做分布式 worker，说明单主机 worker 池已成为规模化部署瓶颈。
- **延迟敏感用户**（#8113）：对“必须先 `tool_search` 才能调用工具”的多轮往返不满，希望首轮即命中工具，降低首响应延迟。
- **Google 集成用户**：对 OAuth 修复应感到满意——Web UI 提供凭据的部署场景此前无法激活 Gmail/Calendar 扩展，v1.4.1 解决了这一阻碍。

## 8. 待处理积压

- **[#7988 chore(agents): refresh codebase knowledge graph](https://github.com/nearai/ironclaw/pull/7988)** — CI bot 于 **2026-08-29** 创建，至今（30+ 天）未合并。虽为低风险 XS 例行 PR，但长期堆积可能使知识图谱快照过期，建议维护者例行清理合并。
- **[#7889 RFC 远程边缘 worker](https://github.com/nearai/ironclaw/issues/7889)** — 8 月 25 日开题，评论仅 1 条，今日虽有更新但讨论推进缓慢。作为高影响架构提案，建议核心维护者尽快给出方向性回应（采纳/拒绝/延期），避免社区热情流失。
- **[#8119 turn-0 工具预选实现](https://github.com/nearai/ironclaw/pull/8119)** — XL 体量 + 新贡献者 + medium 风险，建议尽早安排评审，避免与提案讨论（#8113）脱节。

---

*数据来源：GitHub API，统计窗口为过去 24 小时。总体判断：项目处于**稳定交付期**，发布流程规范（RC→stable 晋升机制运转顺畅），社区提案质量高且响应链路健康，短期关注 #8119 评审进度与 #7988 积压清理。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-09-30

## 1. 今日速览

今日 LobsterAI 整体活跃度中等偏上：过去 24 小时共更新 10 条 Issues（8 活跃 / 2 关闭）和 11 条 PR（全部关闭/合并，无待合并）。PR 侧以 bug 修复与体验优化为主，集中在 Windows 安装器、OpenClaw 网关稳定性与 Markdown 渲染；Issue 侧多为长期 stale 的旧问题被批量触碰，同时新增一条高质量 Bug 报告（#2779）。无新版本发布，项目处于持续修复与打磨阶段，健康度良好但 Issue 响应及时性存在滞后。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日 11 条 PR 全部处理完毕（多为关闭，含 4 月遗留的 stale PR 清理）：

- **网关稳定性**：[#2783](https://github.com/netease-youdao/LobsterAI/pull/2783)（fix: gateway restart budget）与 [#2707](https://github.com/netease-youdao/LobsterAI/pull/2707) 围绕网关崩溃后重启预算被过早重置的问题展开，#2783 为 #2707 的替代方案，落地后可避免崩溃网关被无限重启。
- **Windows 安装器**：[#2782](https://github.com/netease-youdao/LobsterAI/pull/2782) 在技能备份失败中止更新时，列出用户技能目录并弹出中英文提示，改善 #2395 类失败体验；[#2706](https://github.com/netease-youdao/LobsterAI/pull/2706) 修复 PowerShell 5.1 下备份统计失败问题。
- **Cowork/渲染体验**：[#2758](https://github.com/netease-youdao/LobsterAI/pull/2758) 在 Cowork 输入区上方展示并支持刷新原生 OpenClaw 进度卡片；[#2781](https://github.com/netease-youdao/LobsterAI/pull/2781) 按 Pandoc 规则修复 `$3/$15` 被误渲染为行内公式的问题；[#2780](https://github.com/netease-youdao/LobsterAI/pull/2780) 让 Markdown 链接在对应 artifact 卡片内打开而非调起外部应用。
- **Stale 清理**：#1682、#1683、#1707、#1773（朗读功能、技能导入校验、切 Agent 清空输入框、i18n 补全）等 4 月旧 PR 被批量关闭。

**整体评估**：安装器与网关两条痛点线均有实质推进，交互细节（数学定界符、artifact 链接）持续打磨，但注意多个 PR 状态为 CLOSED 而非 MERGED，需确认是被替代关闭还是已通过其他途径合入。

## 4. 社区热点

- **[#2293](https://github.com/netease-youdao/LobsterAI/issues/2293)（已关闭，6 评论）**：多 agent 下 USER.md 被 main agent 内容覆盖的 Bug，是本期评论最多的 Issue，反映多 agent 配置数据隔离是核心痛点，官方已处理关闭。
- **[#2342](https://github.com/netease-youdao/LobsterAI/issues/2342)（已关闭，3 评论）**：用户对 v2026.7.15 新增左下角广告的不满，无设置开关可彻底关闭。虽已关闭，但商业化与用户体验的平衡值得产品侧关注。
- **[#2779](https://github.com/netease-youdao/LobsterAI/issues/2779)（新增）**：详细报告「梦境日记」面板在多分身 + explicit ownership 配置下恒为空，根因指向内置 OpenClaw runtime 2026.8.1 缺少 `doctor.memory.*` 的 ambient-owner 回退，且明确指出“上游已修，待跟进”——是高质量贡献型报告。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 严重（数据完整性） | [#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) | 加速器把 `\f` 字节对 (5C 66) 替换为 form feed (0x0C)，写入含 `\filename` 等 token 的文件时静默损坏，100% 可复现 | 未见 fix PR，**需优先跟进** |
| 🟠 高 | [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) / [#2396](https://github.com/netease-youdao/LobsterAI/issues/2396) | exec 工具硬编码 PowerShell 5.1，中文用户名路径 + 特殊字符内联脚本静默失败 | 未明确修复 |
| 🟡 中 | [#2779](https://github.com/netease-youdao/LobsterAI/issues/2779)（今日新增） | 多分身下梦境日记面板恒空，runtime 落后上游 | 上游已修，待同步内置 OpenClaw |
| 🟡 中 | [#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) | Windows 更新因用户技能备份失败而中止 | 相关 PR #2706 / #2782 今日已处理 ✅ |
| 🟡 中 | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | 多 agent USER.md 互相覆盖 | 已关闭 ✅ |

## 6. 功能请求与路线图信号

- **技能重命名**（[#2391](https://github.com/netease-youdao/LobsterAI/issues/2391)）：朴素高频需求，实现成本低，有较大概率纳入后续版本。
- **定时任务支持指定 agent 与 skill**（[#2392](https://github.com/netease-youdao/LobsterAI/issues/2392)）：与多 agent 架构演进方向一致，且 #2779 显示 agent ownership 机制仍在迭代，该需求与之互补。
- **技能商用授权咨询**（[#2401](https://github.com/netease-youdao/LobsterAI/issues/2401)）：企业用户信号，值得官方在文档/FAQ 中明确回应。
- 今日关闭的 #1682（消息朗读）显示渲染层功能贡献活跃，虽被关闭，朗读类需求仍可能以官方实现形式回归。

## 7. 用户反馈摘要

- **多 agent 数据隔离**是反复出现的核心痛点（#2293 USER.md 覆盖、#2779 多分身日记面板为空），“为不同 agent 配置不同人设/需求”是典型使用场景。
- **Windows 体验短板**集中：PowerShell 5.1 默认 shell（#2390/#2396）、中文路径编码、安装器备份失败（#2395），Windows 中文用户流失风险需警惕。
- **商业化摩擦**：弹窗广告（#2342）引发不满且缺少永久关闭选项。
- 正面信号：#2779 的报告者对内部机制（runtime 版本、ownership 配置）相当熟悉，说明存在深度高价值用户群体。

## 8. 待处理积压

以下 stale Issue 长期未获官方回应，建议维护者关注或明确处置：

- 🔴 [#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) — 数据静默损坏，严重且 100% 复现，积压 2 个月，**最高优先级**
- [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) / [#2396](https://github.com/netease-youdao/LobsterAI/issues/2396) — PowerShell 5.1 问题，影响 Windows 用户基本可用性
- [#2391](https://github.com/netease-youdao/LobsterAI/issues/2391) / [#2392](https://github.com/netease-youdao/LobsterAI/issues/2392) — 低成本功能请求，快速响应可提升社区好感
- [#2779](https://github.com/netease-youdao/LobsterAI/issues/2779) — 今日新报，涉及内置 runtime 版本同步机制，建议建立上游 OpenClaw 修复的跟进流程

---
*数据来源：GitHub netease-youdao/LobsterAI，统计窗口 2026-09-29 至 2026-09-30。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-09-30）

## 1. 今日速览

Moltis 今日整体活跃度较低，过去 24 小时仅 1 条 Issue 更新（新开），PR 更新为 0，无新版本发布。唯一的动态是用户 @abda11ah 提出的功能增强请求 #1289（"Goal mode or ralph loop"），尚无评论与反应。综合来看，项目今日处于平静期，社区贡献与维护者互动均无明显活动，需持续观察后续几天趋势以判断是否为短期波动。

## 2. 版本发布

今日无新版本发布，最新 Releases 为空，可省略此部分。

## 3. 项目进展

今日无 PR 被合并或关闭，无代码层面的推进。项目代码库在 2026-09-30 当天处于零提交合入状态（就 PR 维度而言）。

## 4. 社区热点

今日社区讨论热度整体偏低，唯一活跃条目为：

- **[#1289 [Feature]: Goal mode or ralph loop](https://github.com/moltis-org/moltis/issues/1289)**（@abda11ah，2026-09-29 创建，评论 0，👍 0）
  - 类型：enhancement
  - 诉求分析：用户希望 Moltis 支持"Goal mode"或"ralph loop"（通常指代理自主循环执行、围绕目标持续迭代的能力）。这反映出社区对 AI 智能体**自主性/长时任务执行**方向的期待，即让助手围绕设定目标自动规划-执行-反思循环，而非仅被动响应指令。该方向与当前 AI Agent 领域"agentic loop"的潮流一致，值得维护者优先评估。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题，稳定性方面无异常信号。

## 6. 功能请求与路线图信号

| 功能请求 | 状态 | 纳入可能性判断 |
|---|---|---|
| [#1289 Goal mode / ralph loop](https://github.com/moltis-org/moltis/issues/1289) | OPEN，0 评论 | 尚无对应 PR 或维护者回应，短期内无法判断。但该类"自主目标循环"能力是 Agent 赛道热点功能，若社区共鸣增加（点赞/评论），有较大概率进入路线图讨论。 |

由于今日无相关 PR 活动，无法从代码侧验证该需求的实现进度。

## 7. 用户反馈摘要

- 今日 Issue 中未包含用户评论互动，可提炼的直接反馈有限。
- 从 #1289 的 preflight checklist 可见：用户确认已搜索过现有 enhancement 请求，说明该功能此前未被提出，属于**新的能力诉求**而非重复反馈，反映了部分进阶用户对更高度自主的智能体执行模式的真实需求（如自动化长任务、持续目标追踪场景）。

## 8. 待处理积压

- **[#1289 Goal mode or ralph loop](https://github.com/moltis-org/moltis/issues/1289)**：新开 Issue，尚待维护者分类（triage）与标签确认，建议及时回应以避免新需求石沉大海。
- 建议维护者关注：今日零 PR、零关闭的静默状态若持续多日，可能提示维护节奏放缓，可主动梳理 backlog 中长期未响应的 Issue/PR（本日数据未涵盖历史积压明细）。

---
*数据来源：Moltis GitHub 仓库过去 24 小时 Issue/PR/Release 更新统计。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-09-30）

## 1. 今日速览

今日 CoPaw 保持高度活跃：过去 24 小时内共有 9 条 Issue 更新（8 新开/活跃、1 关闭）和 34 条 PR 更新（15 待合并、19 已合并/关闭），但无新版本发布。开发节奏明显偏向工程质量打磨——大量 PR 集中在 E2E 测试对齐重设计后的 UI、CI 修复、跨平台路径与终端兼容性等基础设施层面，同时社区继续高频报告 v2.2.1 的运行时与模型集成类 Bug。整体看项目处于“功能迭代 + 稳定性偿还”并行的健康阶段，维护者响应迅速（多数新 Issue 当天即有评论）。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日 19 个 PR 被合并/关闭，主要成果集中在三个方向：

**测试与 CI 基建（明显的集中投入）**
- [#8037](https://github.com/agentscope-ai/CoPaw/pull/8037)：将 Console E2E 页面对象与选择器全面对齐重构后的 UI，覆盖 ACP、Channels、Cron Jobs、Heartbeat、Runtime Config、Security、Skills、Tools 等模块。
- [#8041](https://github.com/agentscope-ai/CoPaw/pull/8041)（OPEN）：修复 e2e 会话清理因新 Popover 菜单选择器失效而挂起的问题。
- [#8039](https://github.com/agentscope-ai/CoPaw/pull/8039)：修复首次 PR 判定逻辑并新增自动 size 标签。
- [#8026](https://github.com/agentscope-ai/CoPaw/pull/8026)：修复跨平台路径（Windows 盘符/UNC/文件 URL）、沙箱清理隔离、时区加载与 Windows 终端中断处理。

**运行时与数据层健壮性**
- [#8038](https://github.com/agentscope-ai/CoPaw/pull/8038)：修复 Hub SQLite 连接生命周期，事务提交/回滚后正确释放连接，避免连接泄漏。
- [#7893](https://github.com/agentscope-ai/CoPaw/pull/7893)：内存后端插件重载失败并回滚配置后正确恢复运行中的 agent，防止僵尸状态。
- [#8032](https://github.com/agentscope-ai/CoPaw/pull/8032)：终端 PTY 由 select 改为 poll，支持超过 FD_SETSIZE（1024）的高描述符场景。
- [#8024](https://github.com/agentscope-ai/CoPaw/pull/8024)：拒绝无效 Qoder 时区值，修复 Windows 上 whitespace 时区触发 PermissionError。

**社区贡献**
- 首次贡献者 PR [#8012](https://github.com/agentscope-ai/CoPaw/pull/8012) 修复 Telegram 渠道 fenced 代码块渲染（对应 #8011），显示社区贡献通道畅通。

总体而言，今日合并量可观，项目在可测试性、跨平台兼容性和资源管理上前进了一小步，为后续大特性（社区集成 #7903、持久化转录历史 #7931 等 OPEN PR）落地铺路。

## 4. 社区热点

- **[#7991](https://github.com/agentscope-ai/CoPaw/issues/7991)**（4 评论，最活跃）：TaskTracker `_runs` 僵尸条目导致 dashboard 的 running_task_count 虚高、与 `/api/chats` 不一致。用户对状态统计准确性的诉求强烈，涉及全局与单 chat 作用域不一致的设计问题。
- **[#2359](https://github.com/agentscope-ai/CoPaw/issues/2359)**（3 评论）：长期活跃的增强请求，希望仿照 OpenClaw 引入 `HEARTBEAT_OK` / `CRON_OK` 控制心跳与定时任务中模型是否发送消息，反映用户对消息降噪的持续需求。
- **[#8036](https://github.com/agentscope-ai/CoPaw/issues/8036)**（2 评论）：Creator 的 OpenAI 集成问题合集——连接测试通过但实际生成失败、图像凭证/能力处理、Kimi K3 恢复失败，用户痛点是错误信息被 UI 泛化为“本次执行未完成”。
- **[#8022](https://github.com/agentscope-ai/CoPaw/issues/8022)**：值得注意——由 QwenPaw Agent 在用户授权下自动整理提交的 Issue（含 AI 提交声明），项目自身 dogfooding 的一个有趣信号。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 问题 | Fix 状态 |
|---|---|---|---|
| 高 | [#8022](https://github.com/agentscope-ai/CoPaw/issues/8022) | `send_file_to_user` 产生的 file/image 内容块 + 空 assistant 消息污染会话上下文，后续请求对所有模型持续 400 | ⚠️ 无直接 fix PR；[#8034](https://github.com/agentscope-ai/CoPaw/pull/8034)（请求级 inline media 上限）部分相关，待合并 |
| 高 | [#8042](https://github.com/agentscope-ai/CoPaw/issues/8042) | 工具输出文件（如 PDF）自动回喂给模型，不支持的格式导致 Internal error（WeCom 渠道） | ⚠️ 无 fix PR |
| 高 | [#8033](https://github.com/agentscope-ai/CoPaw/pull/8033)（PR/Bug） | Windows 桌面双开时第二实例会杀掉第一实例的后端，退出后首实例永久黑屏 | fix PR OPEN，待合并 |
| 高 | [#8028](https://github.com/agentscope-ai/CoPaw/pull/8028)（PR/安全） | approval=auto 且沙箱关闭时，内联 Office COM 命令可绕过拦截执行 | fix PR OPEN，待合并（安全相关，建议优先） |
| 中 | [#8040](https://github.com/agentscope-ai/CoPaw/issues/8040) | ReMe embedding reindex：单条 CJK chunk 超出 provider 单条 token 上限会静默丢弃整批，日志却显示全部成功（#5950 复发） | ⚠️ 无 fix PR，且是老问题回归 |
| 中 | [#8035](https://github.com/agentscope-ai/CoPaw/issues/8035) | 转写设置页无法配置/更新 `transcription_model`，切换 provider 后转写静默失效 | ⚠️ 无 fix PR |
| 中 | [#7991](https://github.com/agentscope-ai/CoPaw/issues/7991) | TaskTracker 僵尸条目导致运行任务计数虚高 | 无明确 fix PR |
| 中 | [#8036](https://github.com/agentscope-ai/CoPaw/issues/8036) | Creator OpenAI 集成/恢复多故障，错误信息被 UI 吞掉 | 无 |

**建议关注**：#8028（安全）和 #8033（桌面数据/可用性）虽为 PR 形式，但对应的缺陷影响较大，应优先 review。

## 6. 功能请求与路线图信号

- **[#8015](https://github.com/agentscope-ai/CoPaw/issues/8015)**：支持自定义 Skill/Plugin 市场源（自托管/内网/离线部署）。契合企业级部署趋势，与进行中的 [#8027](https://github.com/agentscope-ai/CoPaw/pull/8027)（技能下载移至工作线程）同属 skills 生态方向，落地可能性较高。
- **[#2359](https://github.com/agentscope-ai/CoPaw/issues/2359)**：HEARTBEAT_OK / CRON_OK 消息控制。存活半年且有持续讨论，属于高呼声低成本特性，适合纳入下版本。
- **[#8029](https://github.com/agentscope-ai/CoPaw/pull/8029)**：允许配置移除 Playwright 默认启动参数（如 `--disable-extensions`），扩展 avatar 身份下的浏览器能力。
- **[#8020](https://github.com/agentscope-ai/CoPaw/pull/8020)**：模型 fallback 候选冷却机制，降低主模型宕机时的请求延迟——多 provider 容错方向的实质改进。
- 大型进行中特性：[#7903](https://github.com/agentscope-ai/CoPaw/pull/7903)（社区/收件箱集成，WIP）与 [#7931](https://github.com/agentscope-ai/CoPaw/pull/7931)（持久化分页转录历史）预示下版本可能主打“社区 + 会话持久化”。

## 7. 用户反馈摘要

- **多模型/多 provider 兼容性是最大痛点**：#8036、#8040、#8022 均涉及不同 provider 的能力差异（文件输入、token 上限、content 格式），用户希望系统能**按模型能力降级**而非直接报错。
- **错误可观测性不足**：多条反馈提到 UI 将具体 provider 错误替换为泛化提示（“本次执行未完成，可重试继续”），排障困难。
- **渠道侧真实场景丰富**：WeCom、Telegram 等企业 IM 渠道被广泛使用（#8042、#8012），文件/媒体流转是高频出错点。
- **企业/内网部署需求明确**：#8015 代表了 air-gapped 环境用户的自托管诉求。
- **正面信号**：Issue 提交质量高（含复现步骤、日志、实证回放如 #8040），且出现 Agent 自动提交 Issue 的 dogfooding 案例，说明深度用户粘性强。
- **桌面端体验**：Windows 用户反馈双实例互相杀后端（#8033）、高 FD 场景终端失败（#8032 已修），桌面端是薄弱环节。

## 8. 待处理积压

- **[#2359](https://github.com/agentscope-ai/CoPaw/issues/2359)**（2026-03-26 提出，至今 6 个月未关闭）：HEARTBEAT_OK/CRON_OK，需求明确、讨论持续，建议维护者给出明确的 accept/reject 决策。
- **[#8040](https://github.com/agentscope-ai/CoPaw/issues/8040)** 是 **#5950 的复发**，说明上次修复不彻底，建议建立回归测试并跟踪根因（批量内单条失败静默吞掉）。
- **无 fix PR 的高优 Issue**：#8042（文件回喂）、#8035（transcription_model 配置）、#7991（TaskTracker 计数）、#8036（Creator 集成）均待认领，适合作为 good-first-issue 或社区贡献切入点。
- **长期 OPEN 的大型 PR**：[#7903](https://github.com/agentscope-ai/CoPaw/pull/7903)（社区集成，9-20 开启，WIP）和 [#7931](https://github.com/agentscope-ai/CoPaw/pull/7931)（转录历史）已运行 8-10 天，建议维护者披露 review 计划，避免贡献者流失。
- **安全提醒**：[#8028](https://github.com/agentscope-ai/CoPaw/pull/8028)（Office COM 绕过）应尽快 review 合并。

---
*数据来源：GitHub API（Issues/PR 过去 24 小时更新），生成时间：2026-09-30。链接均指向 agentscope-ai/QwenPaw 仓库对应条目。*

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