# OpenClaw 生态日报 2026-09-10

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-10 03:41 UTC

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

# OpenClaw 项目日报 · 2026-09-10

## 1. 今日速览

OpenClaw 今日保持高活跃度：过去 24 小时内 Issues 更新 500 条（新开/活跃 311，关闭 189），PR 更新 500 条（待合并 243，已合并/关闭 257），关闭量略超新增量，显示维护团队清理节奏良好。今日无新版本发布，但 2026.9.x 线（9.1–9.3）持续暴露多条 P0/P1 升级回归，升级路径稳定性成为当前最突出的风险点。社区贡献活跃，@steipete、@obviyus、@vincentkoc 等贡献者今日提交多个新 PR，覆盖 gateway、模型认证、Code Mode 持久化等核心模块。总体判断：开发热度健康，但**升级回归与 memory-core 稳定性问题积压较大**，需维护者优先收敛。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日 PR 活动以修复与重构为主，无明显大型功能落地，但多项关键修复进入"ready for maintainer look"状态：

- **#143647** [fix(models): logout 时清除插件目录凭证](https://github.com/openclaw/openclaw/pull/143647)（今日新开，P2）— 修复 logout 后 `doctor --fix` 恢复已删除凭证、且凭证可能混入 `--exclude-secrets` Git 备份的安全问题，关闭 #142421。
- **#143588** [feat(models): 统一原生登录与模型运行时选择](https://github.com/openclaw/openclaw/pull/143588)（@obviyus，今日新开）— Codex 原生登录后无需复制凭证即可使用原生模型，认证体系向"原生优先"演进，已带 telegram-e2e 证明。
- **#143651** [fix(daemon): 持久化 Bun SQLite 库选择](https://github.com/openclaw/openclaw/pull/143651)（@steipete）— 修复 macOS 上 `--runtime bun` 托管服务 SQLite 库不一致问题，关联 #142186。
- **#143635** [Slack 排队回合期间保持线程响应](https://github.com/openclaw/openclaw/pull/143635)（今日新开）— 解决同一 mention 双事件导致的 channel lane 阻塞。
- **#143653 / #143652**（@steipete）：Comfy 本地/云端工作流轮询重构、wizard 测试 fixture 复用。
- **待合并高优先修复（ready for maintainer look）**：#125977（部分文本失败回放可见性，P1）、#122431（图像理解前预缩放，P1）、#132559（Codex 结构化图像超时，P1）、#138619（语音通话音频截断修正，P1）、#142626（iMessage 桥恢复后反馈，已 armed automerge）。
- **关闭**：#143383（UI 测试 fixture 复用）、#114662（trajectory 导出含 fallback 调用）、#116016（Telnyx 官方 provider，waiting on author 后关闭）。

整体看，项目在小步快跑地收敛安全边界（凭证、auth profile、Code Mode 权限）与消息通道可靠性。

## 4. 社区热点

- **#135111**（26 评论，已关闭）：[v2026.8.1 claude-sonnet-5 间歇性 malformed JSON 工具调用](https://github.com/openclaw/openclaw/issues/135111) — 最高热度，反映 provider 兼容回归影响广泛，标记 regression/P1。
- **#97616**（15 评论）：[hook/tool 僵尸子进程泄漏](https://github.com/openclaw/openclaw/issues/97616) — 长期运行实例的稳定性核心痛点，今日仍在活跃更新。
- **#119720**（15 评论）：[同步持久化阻塞 Gateway 事件循环](https://github.com/openclaw/openclaw/issues/119720) — 大规模部署场景性能瓶颈，评论中确认 #140231/#138984 已部分修复，讨论仍在推进。
- **#137927**（14 评论，已关闭）：[内部上下文块泄漏到 Telegram 消息文本](https://github.com/openclaw/openclaw/issues/137927) — 安全相关，且 #143278 报告 2026.9.3 上 heartbeat 输出再次泄漏，提示同类问题未根除。
- **#43367 / #53628**（各 14 评论）：多 Agent 编排不稳定、XDG_CONFIG_HOME 未解析 — 老牌长期 issue 持续有社区回流。

热点诉求集中在：**升级回归、长期运行稳定性、消息泄漏与安全边界**。

## 5. Bug 与稳定性（按严重程度）

**P0：**
- **#142585**（OPEN，7 评论）：[2026.9.3 Doctor 拒绝迁移合法 legacy workspace/attestation](https://github.com/openclaw/openclaw/issues/142585) — 升级阻塞，标记 maturity:stable + ux-release-blocker，**无 fix PR**。
- **#137813**（CLOSED）：[Windows gateway 2026.9.1 后静默不启动（--task-supervisor 退出码 0）](https://github.com/openclaw/openclaw/issues/137813)。
- **#141617**（CLOSED）：[2026.9.2 npm 更新永久卡在 requested/running](https://github.com/openclaw/openclaw/issues/141617) — 与 #139714（update_runs 永不 finalize）同族，后者仍 OPEN。

**P1：**
- **#136311**：[memory-core reindex 锁死 + 19GB 孤儿临时 DB](https://github.com/openclaw/openclaw/issues/136311) — 无 fix PR，需关注。
- **#143640**（今日新报）：[memory index 发布单事务 ≥5s 耗尽 busy_timeout](https://github.com/openclaw/openclaw/issues/143640) — memory-core 性能问题再添一例。
- **#140010**：[Windows 睡眠唤醒后 UI/WebSocket 重连失败 30-60s+](https://github.com/openclaw/openclaw/issues/140010) — 无 fix PR。
- **#138042**：[Gateway 控制请求停滞 157–276 秒](https://github.com/openclaw/openclaw/issues/138042) — 无 fix PR。
- **#132762 / #126906 / #139274**：overflow retry 丢失最终回复、拒绝 write 工具静默禁用记忆、语音附件丢弃 — 均标记 fix-shape-clear/queueable-fix，修复在排队中。
- **#140971**（CLOSED）：[Feishu 全部 13 个工具静默消失](https://github.com/openclaw/openclaw/issues/140971) — 与 #115367（`origin: bundled` 读门 vs 外部插件）结构性冲突相关，后者仍 OPEN 待产品决策。

## 6. 功能请求与路线图信号

- **#109657**（CLOSED，maintainer）：[将 durable ingress drain 推广到 WhatsApp/Discord/Slack/Signal/iMessage](https://github.com/openclaw/openclaw/issues/109657) — maintainer 认领，配合今日 #142768（draining ingress claims）与 #143635，消息通道可靠性是明确的近期路线图方向。
- **#143588** 原生登录统一 — 表明**原生 Codex/Copilot 认证路径**是认证体系演进重点。
- **#6757**（self-compact 工具）与 **#95610**（OpenAI prompt-cache 前缀优化，已有 linked PR）— token 成本与上下文管理诉求强烈，#141747（686 tokens/turn 系统脚手架无开关）与之呼应，**运行时注入的可配置化**可能进入下一版本。
- **#46058**（chat-first Android surface）持续讨论中，显示移动端独立化意向。
- **#87441**（diagnostics 内存阈值接入 config，2 👍）— 可观测性配置化的小而确定需求。

## 7. 用户反馈摘要

- **痛点集中在升级**：2026.7.1-2 → 2026.9.x 路径上问题密集（#142585、#141617、#139714、#137813），多位用户表达"升级后无法启动/无法迁移"，是当前口碑最大风险。
- **长期运行用户**（自托管生产部署）反复报告资源问题：僵尸进程（#97616）、SQLite 无限增长（#114612）、19GB 临时 DB（#136311）、事件循环阻塞（#119720）——OpenClaw 正被当作 7×24 基础设施使用，对内存/进程治理要求超出当前设计。
- **成本敏感**：#95610（缓存失效）和 #141747（每回合注入 686 tokens）显示重度 API 用户对 token 开销高度敏感。
- **正面信号**：修复响应速度快（多条 P0 当日或数日内关闭）；issue 分级/自动化标签（clawsweeper、issue-rating）成熟；社区贡献者持续高质量产出；#6757 中甚至出现 agent 自主提交 feature request，体现产品与 agent 生态的深度绑定。

## 8. 待处理积压（建议维护者关注）

| 条目 | 状态 | 建议 |
|---|---|---|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) 僵尸进程泄漏（6 月至今，P1） | OPEN，needs-info | 长期运行稳定性核心，建议优先 source-repro |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) SQLite 无限增长（7 月至今） | OPEN，needs-product-decision | 需要 retention 策略产品决策 |
| [#115367](https://github.com/openclaw/openclaw/issues/115367) 读门 vs 外部插件架构冲突（7 月至今，security） | OPEN，needs-product-decision | 影响所有外部 channel 插件能力 |
| [#136311](https://github.com/openclaw/openclaw/issues/136311) reindex 锁死 + 磁盘膨胀 | OPEN，needs-live-repro | 高破坏性，无 fix PR |
| [#95610](https://github.com/openclaw/openclaw/issues/95610) OpenAI 缓存前缀失效 | OPEN，linked-pr-open | PR 已开但未合并，请推进 review |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) Gateway 事件循环阻塞 | OPEN | 部分修复已落地，需收尾验证 |
| 多个 stale PR：#122341、#111497、#110561、#116378（均 proof:sufficient + ready for maintainer look） | 卡在 review | 7 月提交、证明充分，建议批量清理 review 队列 |

**健康度小结**：项目社区活跃度和修复吞吐量优秀（关闭/新增比 > 0.8），但 P0 升级回归集中、memory-core 与资源治理类积压问题存在结构性风险，建议在下一个版本发布前冻结功能、集中收敛升级路径测试。

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告
**数据基准日：2026-09-10**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入“基础设施化”阶段：多个头部项目（OpenClaw、Hermes Agent、CoPaw）正被用户当作 7×24 常驻基础设施使用，而非聊天工具，由此催生对长期运行稳定性、资源治理、成本可观测性的系统性需求。生态呈现明显的分层竞争格局——OpenClaw 以规模和生态深度领跑，NanoBot/Zeroclaw/CoPaw 在健康度与工程化上各有亮点，垂直场景项目（PicoClaw 边缘设备、EasyClaw 电商运营、LobsterAI 国内桌面端）以差异化定位求生。跨项目共性趋势高度收敛：**持久记忆、多渠道消息可靠性、沙箱安全、token/成本治理、多平台会话共享**几乎是所有活跃项目的路线图重点。

---

## 2. 各项目活跃度对比

| 项目 | Issues 活动量 | PR 活动量 | 今日合并 | Release | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（311 活跃/189 关闭） | 500（243 待/257 闭） | 多条（含 armed automerge） | 无 | 🟢 高活跃；升级回归与 memory-core 积压构成结构风险 |
| **Hermes Agent** | 50（43 开/7 关） | 50（34 待/16 闭） | 16 | 无 | 🟢 高活跃；session-state 风险簇是主要技术债 |
| **CoPaw** | 28（13 开/15 关） | 36（24 待/12 闭） | 12 | 无（2.2.1 筹备中） | 🟢 健康，关闭/新增比 1.15，测试覆盖 +5pp |
| **Zeroclaw** | 25（22 开/3 关） | 50（49 待/仅 1 闭） | 1 | 无 | 🟡 讨论活跃但合并吞吐极低，49 PR 积压 |
| **NanoBot** | 4（2 开/2 关） | 21（11 闭） | 11 | 无 | 🟢 评审周期短、响应快，处于打磨期 |
| **NanoClaw** | 1 | 7（3 闭/4 待） | 3 | 无 | 🟢 小而有序，跨仓库协作规范 |
| **IronClaw** | 1 | 4（0 闭） | 0 | 无 | 🟡 低强度深耕 MCP 多租户架构 |
| **LobsterAI** | 20（16 活跃/4 关） | 13（11 闭/2 待） | 11 | 无 | 🟠 开发活跃，但 5 条安全披露零响应，triage 严重滞后 |
| **EasyClaw** | 0 | 0 | 0 | **2 个（v1.9.9/1.9.10）** | 🟡 维护者驱动，社区静默 |
| **PicoClaw** | 3（全 stale 关闭） | 5（0 合并） | 0 | 无 | 🔴 机器人清理 > 人工响应，贡献者流失风险 |
| NullClaw / TinyClaw / Moltis / ZeptoClaw | 0 | 0 | 0 | 无 | ⚪ 静默 |

---

## 3. OpenClaw 在生态中的定位

**规模绝对领先**：单日 500 条 Issue + 500 条 PR 更新约为第二梯队（Hermes/CoPaw）的 10–20 倍，社区贡献者梯队（@steipete、@obviyus 等）与自动化治理工具（clawsweeper、issue-rating）成熟度均为生态标杆。甚至出现 agent 自主提交 feature request 的现象（#6757），体现产品与 agent 生态的深度绑定。

**技术路线差异**：
- 认证体系向“原生优先”演进（#143588 Codex 原生登录统一），而 NanoBot 走“广接 Provider”路线，IronClaw 专注 MCP 托管多租户；
- OpenClaw 主打全渠道 IM 桥（Telegram/Slack/iMessage/WhatsApp/飞书）+ durable ingress drain 的可靠性纵深，多数竞品仅覆盖 1–3 个渠道；
- 作为事实上的“内核”，LobsterAI 等下游项目直接受其版本升级牵动（v2026.8.1 升级引发 LobsterAI 单日 8 个适配 PR），生态辐射力独一无二。

**核心短板**：升级路径回归密集（2026.9.x 线多条 P0/P1）、memory-core 稳定性积压（#136311 19GB 孤儿 DB、#143640 busy_timeout 耗尽）、长期运行资源治理（僵尸进程 #97616、SQLite 无限增长 #114612）。修复吞吐虽高（关闭/新增 > 0.8），但 P0 升级阻塞（#142585 无 fix PR）是口碑最大风险，建议下版前冻结功能、集中收敛升级测试。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **跨会话持久记忆** | NanoBot（#5721）、CoPaw（#7656/#7613/#7616）、OpenClaw（memory-core 系列）、LobsterAI（#2046/#2216）、Zeroclaw（#9713）、Hermes（#80646） | 生态最热的横向需求；MemCode 在两个项目同期提出商业化合作；插件化后端（OpenViking/ReMeLight/ADBPG）成为主流架构答案 |
| **成本可观测与 token 治理** | OpenClaw（#95610 缓存前缀、#141747 每回合 686 tokens）、Zeroclaw（#9816 预算失效、#10699 cache-write 计费）、LobsterAI（#2230 60M token、#2641 隐性消耗）、Hermes（#106963 幽灵调用 7.9M tokens） | 全生态痛点：重度 API 用户对计量准确性、prompt-cache 命中、运行时注入可配置化高度敏感 |
| **执行沙箱与安全边界** | NanoBot（#5628 Seatbelt、#5536 fail-closed）、Zeroclaw（#6996/#7821 沙箱策略 schema）、OpenClaw（凭证清理 #143647）、CoPaw（#7658 权限位）、LobsterAI（5 条未响应安全披露） | 沙箱从“可选”走向“架构级一等公民”；凭证/数据外泄是共性风险面 |
| **多渠道消息可靠性** | OpenClaw（durable ingress drain 推广）、NanoBot（Discord 压缩通知）、NanoClaw（WhatsApp 线程路由）、CoPaw（Telegram polling 黑洞）、PicoClaw（IRCv3/QQ） | IM 桥接是标配能力，排队/重连/线程路由的边缘 case 决定体验下限 |
| **升级路径稳定性** | OpenClaw（2026.9.x P0 回归群）、LobsterAI（v2026.8.1 适配）、Hermes（v0.21.0 回归） | 版本升级引发的“隐性破坏”是三项目共同的最大口碑风险 |
| **多平台/多会话共享** | Hermes（#4335/#97681）、Zeroclaw（#9727 系列）、CoPaw（#7237 竞态）、OpenClaw（多 Agent 编排 #43367） | “单端助手 → 常驻多平台智能体”演进方向共识 |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Zeroclaw | Hermes Agent | CoPaw | 垂直玩家 |
|---|---|---|---|---|---|---|
| **功能侧重** | 全渠道 IM 桥 + 模型认证 + memory-core | WebUI/TUI 双端体验 + 执行安全 | 架构 RFC（WASM 插件、事件溯源、沙箱） | Desktop + cron 自动化 + MCP OAuth | Console 多会话 + skill 生态（ClawHub） | PicoClaw：低配设备；EasyClaw：TikTok 电商；LobsterAI：国内桌面端 |
| **目标用户** | 自托管生产/重度用户 | 个人开发者、长会话用户 | 架构极客、贡献者社区 | “个人基础设施”用户（SSH/Docker/Tailscale） | 多通道企业/团队用户 | 边缘设备用户/运营人员/中文用户 |
| **架构特点** | Gateway + 多 IM 桥 + 插件目录 | 轻量、零新依赖沙箱 | RFC 治理驱动（FND 流程） | Gateway + Bot 协作 + Desktop 渲染器 | 内存后端插件化 + 测试冲刺 | 极简/垂直集成 |
| **治理风格** | 自动化标签 + 快速修复 | 评审周期最短 | 治理最重、交付最慢 | 维护者当日闭环 | 工程化长线投入 | 两极（EasyClaw 自维护 vs PicoClaw 失序） |

---

## 6. 社区热度与成熟度分层

- **快速迭代期**：OpenClaw（功能+修复双高速，但需防回归）、Hermes（当日 issue→fix 闭环）、LobsterAI（升级适配冲刺窗口）
- **质量巩固期**：CoPaw（测试覆盖 64%→69%、竞态修复集中落地）、NanoBot（WebUI 打磨 + 安全补强，11 PR/日合入）、NanoClaw（契约级修复有序推进）
- **设计沉淀期**：Zeroclaw（37 评论级 RFC 迭代至 Rev.10，但 49 PR 积压、合并吞吐瓶颈明显，社区自身已提案简化流程 #10549）
- **维护者驱动期**：EasyClaw（单日 2 版、社区零互动）
- **风险观察区**：PicoClaw（stale 关闭 > 人工响应、半年 PR 被弃）、IronClaw（低强度但方向清晰）、LobsterAI（开发热但安全响应缺失）

---

## 7. 值得关注的趋势信号

1. **记忆即生态入口**：MemCode 同期接触 NanoBot 与 CoPaw、OpenViking/ReMeLight 等后端涌现——“可插拔持久记忆后端”正在成为智能体项目的标准接口层，也是商业化公司切入开源生态的首选路径。
2. **成本计量成为信任基石**：Zeroclaw 预算上限因 $0 记录失效、Hermes 幽灵调用烧掉 7.9M tokens、OpenClaw 每回合 686 token 脚手架——随着 agent 长任务常态化，**精确的 per-turn 成本归因与运行时注入可配置化**将从 nice-to-have 变为选型硬指标。
3. **沙箱进入协议化阶段**：Zeroclaw 的 canonical sandbox_policy schema、NanoBot 的 Seatbelt 后端、IronClaw 的 SEP-414 调用归因，显示执行隔离正从 OS 级技巧演进为跨项目的标准化契约（MCP 生态协议演进尤为明显）。
4. **升级回归是规模化杀手**：三个头部项目同时被升级路径问题拖累口碑——对开发者的启示是：**agent 产品的状态迁移（workspace/SQLite/凭证）必须与代码同等投入测试资源**，下游适配成本（如 LobsterAI 单日 8 PR）会成倍放大上游回归。
5. **治理带宽决定社区天花板**：Zeroclaw 的 RFC 流程摩擦、PicoClaw 的机器人清理失序、LobsterAI 的安全披露零响应形成对照——在 agent 生态中，**评审与 triage 带宽比功能产出更稀缺**，NanoBot/CoPaw 的短评审周期模式值得借鉴。
6. **用户正在把 agent 当基础设施用**：7×24 部署、多实例管理（CoPaw 用户跑 7-8 个实例）、边缘设备部署诉求（PicoClaw）表明市场期待“常驻、自治、可观测”的 agent 运行时——进程治理、事件溯源（Zeroclaw #10526）、自愈路径是下一个竞争高地。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 · 2026-09-10

## 1. 今日速览

NanoBot 今日保持高活跃度：过去 24 小时内 PR 更新达 21 条（11 条已合并/关闭），Issues 更新 4 条（2 新开 / 2 关闭），无新版本发布。开发重心明显集中在 **WebUI 打磨**（会话标题、侧边栏、性能、编辑 diff 展示）与 **执行安全性**（macOS Seatbelt 沙箱、受限 shell fail-closed）两条线上。社区贡献者 @chengyongru 产出密集，多个 WebUI 改进被快速合入，显示维护团队响应速度快、评审周期短。整体健康度良好，处于持续迭代而非大版本冲刺阶段。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日关闭的 11 条 PR 中，多项重要改进落地：

**WebUI 体验持续优化**
- [#5703](https://github.com/HKUDS/nanobot/pull/5703)（已关闭）**性能优化**：减少长对话和工具密集响应中的重复渲染工作，限制历史渲染开销——对重度用户是显著提升。
- [#5715](https://github.com/HKUDS/nanobot/pull/5715)（已关闭）修复网关重启后 WebUI 会话标题不生成的问题，改为信任持久化的 `metadata.webui` 标记，配合关闭 [Issue #5647](https://github.com/HKUDS/nanobot/issues/5647)。
- [#5714](https://github.com/HKUDS/nanobot/pull/5714)（已关闭）将文件编辑 diff 移出可折叠的 reasoning 区块，避免 diff 被折叠隐藏。
- [#5717](https://github.com/HKUDS/nanobot/pull/5717)、[#5716](https://github.com/HKUDS/nanobot/pull/5716)（均已关闭）分别修复项目菜单创建话题时丢失项目选中、技能选择器列表不刷新的问题。

**TUI 与功能扩展**
- [#5705](https://github.com/HKUDS/nanobot/pull/5705)（已关闭）为 TUI 新增 `/usage` 面板，展示上下文占用与 token 使用图表，对齐 WebUI 能力。
- [#5662](https://github.com/HKUDS/nanobot/pull/5662)（已关闭，**P1**）为 OpenCode Zen/Go 请求发送 `x-opencode-session` 头，回应 OpenCode 官方 2026-09-06 起的强制要求，避免了缓存优化失效甚至报错，同时关闭 [Issue #5661](https://github.com/HKUDS/nanobot/issues/5661)。
- [#5628](https://github.com/HKUDS/nanobot/pull/5628)（已关闭）新增 macOS Seatbelt 沙箱后端（基于系统 `sandbox-exec`，零新依赖），是执行安全方向的重要补充。
- [#5708](https://github.com/HKUDS/nanobot/pull/5708)（已关闭）修复 exec 流式输出中跨 chunk 的 UTF-8 字符被截断的问题。

**小结**：今日合入/关闭 11 条 PR，覆盖性能、安全、兼容性、UX 四个维度，项目在稳定性和多端（WebUI/TUI）一致性上稳步前进。

## 4. 社区热点

- **[Issue #5721](https://github.com/HKUDS/nanobot/issues/5721)**（新开）：MemCode 创始人提议为 NanoBot 提供跨部署的持久化记忆后端（托管或自管理）。这是典型的商业化集成提案，触及“跨会话持久记忆”这一高频诉求，可能引发生态合作讨论。
- **[Issue #5719](https://github.com/HKUDS/nanobot/issues/5719)**（新开）+ **[PR #5720](https://github.com/HKUDS/nanobot/pull/5720)**：Discord 用户报告 `sendProgress: false` 时自动压缩通知仍会发送两条独立消息打断聊天。社区响应极快——fix PR 当天即提交，说明通道体验类问题受关注度高。
- **[Issue #5661](https://github.com/HKUDS/nanobot/issues/5661)**（已关闭，👍1）：OpenCode 会话亲和性头要求，涉及外部平台政策变化，是兼容性热点。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 状态 |
|---|---|---|
| P1 | [PR #5536](https://github.com/HKUDS/nanobot/pull/5536)（待合并）：受限 shell 模式下缺少沙箱时未 fail-closed，符号链接/shell 展开可绕过路径检查，存在安全风险 | **仍有修复 PR 待合入**，建议优先评审 |
| P2 | [Issue #5719](https://github.com/HKUDS/nanobot/issues/5719)：Discord 自动压缩通知绕过 `sendProgress` 抑制 | 已有 fix PR [#5720](https://github.com/HKUDS/nanobot/pull/5720) |
| P2 | [PR #4819](https://github.com/HKUDS/nanobot/pull/4819)（待合并）：`WeakValueDictionary` 导致 consolidation 锁可能被 GC，引发并发合并竞态 | 待合入 |
| P2 | [PR #4820](https://github.com/HKUDS/nanobot/pull/4820)（待合并）：web_fetch 非字符串 URL 被强转为缓存签名，可能干扰后续查找 | 待合入 |
| P2 | [PR #5641](https://github.com/HKUDS/nanobot/pull/5641)（待合并）：iOS PWA 侧边栏首点被吞、状态栏显示问题 | 待合入 |
| 已修复 | UTF-8 流式截断（#5708）、WebUI 重启后会话标题（#5715）、编辑 diff 被折叠（#5714）等 | 今日已关闭 |

值得注意的是 P1 安全问题 #5536 与 #5662 同为 P1，但 #5662（外部截止日期驱动）已合入而 #5536 尚在队列中，存在优先级倒挂的可能。

## 6. 功能请求与路线图信号

- **跨会话持久记忆**（[#5721](https://github.com/HKUDS/nanobot/issues/5721)）：与内存中已存在的 memory/consolidation 体系（见 PR #4819）契合度高，若维护者认可可插拔后端设计，有望进入路线图。
- **新搜索/生成 Provider**：[#5437](https://github.com/HKUDS/nanobot/pull/5437)（Serply 搜索）、[#5718](https://github.com/HKUDS/nanobot/pull/5718)（OpenRouter 原生图像生成）均在队列中，延续项目"广接 Provider"的策略，下一版本大概率包含。
- **WebUI 信息架构重构**（[#5710](https://github.com/HKUDS/nanobot/pull/5710)，标注 conflict）：侧边栏分离 Topics/Projects/Automations，是较大的导航重构，与已合入的 #5717/#5704 构成连贯的 WebUI 改版主线。
- **TUI onboarding 统一**（[#5498](https://github.com/HKUDS/nanobot/pull/5498)）持续更新，配合已合入的 `/usage` 面板，TUI 体验升级是明确方向。

## 7. 用户反馈摘要

- **Discord/IM 通道用户**：希望后台维护行为（如上下文压缩）对聊天完全透明，即使开启进度抑制也不应被打断（#5719）。
- **iOS/PWA 移动用户**：触控交互细节（首点失效）和状态栏渲染是真实痛点（#5641）。
- **OpenCode Zen/Go 用户**：受外部平台政策影响，急需 header 支持以恢复 prompt 缓存优化——已快速解决（#5661/#5662）。
- **重度/长会话用户**：长对话渲染性能（#5703）和 token 用量可视化（#5705）的合入反映这部分用户的核心关切得到回应。
- **多部署企业用户**（#5721）：需要跨实例共享记忆能力，暗示用户群正向多设备/团队场景扩展。

## 8. 待处理积压

以下 PR 更新时间较早但仍在队列中，且存在冲突（conflict）标注，建议维护者优先关注：

- **[PR #5536](https://github.com/HKUDS/nanobot/pull/5536)**（8-25，P1，conflict）：exec 安全 fail-closed，安全相关，积压最久的高优先级项。
- **[PR #4819](https://github.com/HKUDS/nanobot/pull/4819) / [#4820](https://github.com/HKUDS/nanobot/pull/4820)**（7-06 开启，P2）：memory 锁竞态与 web_fetch 签名校验，已积压两个多月。
- **[PR #5498](https://github.com/HKUDS/nanobot/pull/5498)**（8-23，conflict）：TUI onboarding 统一，需 rebase。
- **[PR #5710](https://github.com/HKUDS/nanobot/pull/5710)**（conflict）：WebUI 侧边栏重构，与近期高频合入的 WebUI PR 存在冲突风险，越晚处理冲突成本越高。
- **[Issue #5721](https://github.com/HKUDS/nanobot/issues/5721)**：MemCode 合作提案尚无维护者回应，建议明确官方态度以引导社区预期。

---
*数据来源：GitHub API，统计窗口为 2026-09-09 至 2026-09-10。链接均指向 HKUDS/nanobot 仓库。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 — 2026-09-10

## 1. 今日速览

Zeroclaw 今日保持高活跃度：过去 24 小时 Issues 更新 25 条（新开/活跃 22，关闭 3），PR 更新 50 条（待合并 49，合并/关闭仅 1）。项目重心仍集中在**架构级 RFC 讨论**（运行时会话、WASM 插件、事件历史、沙箱策略），多数处于多轮修订投票阶段；代码层面以大中型功能 PR 持续推进、合并节奏偏慢为特征。今日无新版本发布。整体判断：社区治理与设计讨论活跃，但合并吞吐量低，49 个待合并 PR 构成明显积压。

## 2. 版本发布

今日无新版本发布。（当前参考版本为 v0.8.5，见 #10690）

## 3. 项目进展

今日仅 1 个 PR 合并/关闭，代码层进展有限，但多个大型 PR 持续获得更新：

- **ZeroCode 多会话系列 Issue 关闭（3 条）**：[#9729](https://github.com/zeroclaw-labs/zeroclaw/issues/9729)（多并发会话追踪）、[#9730](https://github.com/zeroclaw-labs/zeroclaw/issues/9730)（agent 侧边栏）、[#9731](https://github.com/zeroclaw-labs/zeroclaw/issues/9731)（Quickstart 移入侧边栏）相继关闭，说明 #9727 ZeroCode 多会话体验系列正按依赖顺序落地。
- **沙箱策略落地推进**：[#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821)（canonical `sandbox_policy` schema + 应用层强制执行，对应已接受 RFC #6996）持续活跃，是安全架构的核心实现 PR。
- **新提交的修复 PR**：
  - [#10735](https://github.com/zeroclaw-labs/zeroclaw/pull/10735)：对 `process_line` 最大的分发分支做 heap-pin，修复 Windows 栈溢出（配对 Issue #10734，当日 issue→fix 闭环，响应迅速）。
  - [#10737](https://github.com/zeroclaw-labs/zeroclaw/pull/10737)：IPC socket 路径超平台限制时快速失败并给出可读错误。
- **A2A 出站客户端 Phase 1**（[#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324)）继续推进，实现 a2a_* 工具与共享 A2A v1.0 wire model。

## 4. 社区热点

讨论最活跃的均为架构 RFC，反映社区对核心运行时模型的深度参与：

| 条目 | 评论数 | 焦点 |
|---|---|---|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) Runtime-owned 会话与传输适配器 RFC | 37 | 已迭代至 Rev.5，前版投票快照被实质性替换，需重新开讨论窗口 |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) 统一文件/附件架构 RFC | 30 | 已迭代至 Rev.10，修订频繁，共识尚未固化 |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) 细粒度沙箱文件系统策略 RFC | 29 | 已接受，配套 PR #7821 推进中 |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) wire protocol 一等公民化 RFC | 19 | 受 FND-003 Rev.15 治理，等作者行动 |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) 维护者决策队列 Tracker | 15 | 决策积压的协调入口 |

**诉求分析**：核心贡献者（@NiuBlibing 等）密集推动运行时会话、事件溯源、WASM 插件三大架构支柱；同时 [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) 提出简化 RFC 投票流程（取消强制讨论窗口），表明社区自身也感到流程摩擦过大、决策速度拖慢交付。

## 5. Bug 与稳定性

按严重程度排列（P1 优先）：

**P1**
- [#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) Anthropic provider 全部 usage 记录 cost 为 $0.00，导致日/月预算上限**永远不会触发**。已接受、进行中，尚无 fix PR 关联。
- [#10697](https://github.com/zeroclaw-labs/zeroclaw/issues/10697) ZeroCode ACP 会话中，工具调用前的 assistant 文本被丢弃，仅渲染最后一段文字。P1、follow-up，未见 fix PR。

**P2 / S2（今日新报）**
- [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736)（今日新开）：流式请求在产出内容前失败时，日志声称回退到非流式但实际未发送请求。⚠️ **已有间接修复动向，需关注 #10442**（OpenRouter 保活，同类流稳定性问题）。
- [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734)（今日新开）：Windows 受限线程栈上 `process_line` 真实栈溢出（0xc00000fd）。✅ **已有 fix PR #10735**（同日提交）。
- [#10731](https://github.com/zeroclaw-labs/zeroclaw/issues/10731) `zeroclaw service logs` 在 macOS/Windows/OpenRC 上无输出（仅 systemd 正常）。
- [#10699](https://github.com/zeroclaw-labs/zeroclaw/issues/10699) 成本账本缺少 cache-write 费率，系统性低估成本。与 #9816、#10663 同属成本/缓存计量链条问题。
- [#10690](https://github.com/zeroclaw-labs/zeroclaw/issues/10690) Integrations 页 Configure 链接用显示名 slug 导致 Z.AI 跳转 404。已接受。

**CI/安全**
- [#10728](https://github.com/zeroclaw-labs/zeroclaw/issues/10728) npm audit 失败：js-yaml 高危漏洞（间接依赖），自动追踪 Issue。
- [#10277](https://github.com/zeroclaw-labs/zeroclaw/issues/10277) zerorelay 镜像 base tag 未按 digest 固定，供应链风险。

## 6. 功能请求与路线图信号

新功能需求与实现信号：

- **可组合 WASM 插件运行时**（[#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076)）：已明确与 #10526 事件历史 RFC 的职责边界（9 月 1 日实质修订），架构收敛中，是中期路线图重点。
- **Append-only 会话事件历史**（[#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526)）：统一 TurnEvent、日志、工具回执、成本记录为事件溯源模型，已被 WASM RFC 引用为唯一权威，落地意愿强。
- **Anthropic 1 小时 prompt cache TTL 可配置**（[#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663)）：与 #10699 cache-write 计费同链条，二者很可能一起进入下一版本的 provider/cost 改进包。
- **家庭边缘 mesh 拉取 worker**（[#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360)）：P3、等作者行动，属远期探索。
- **ZeroCode 子 agent 可视化**（[#8763](https://github.com/zeroclaw-labs/zeroclaw/issues/8763)）：已接受，配合刚关闭的多会话侧边栏系列，是 ZeroCode UI 下一步。

## 7. 用户反馈摘要

从 Issue 内容可提炼的真实痛点：

- **成本可观测性是最大信任问题**：用户发现预算上限因 $0 成本记录完全失效（#9816）、cache-write 溢价被低估（#10699）、缓存 TTL 不可控（#10663）——成本计量链条存在系统性缺陷，重度付费 API 用户尤其敏感。
- **跨平台体验不均**：`service logs` 在非 systemd 平台不可用（#10731）、Windows CI 栈溢出（#10734）、IPC 路径限制报错不友好（#10737）——macOS/Windows 是二等公民的观感明显。
- **UI 信息完整性**：ACP 转录丢文本（#10697）、子 agent 活动不可见（#8763）说明长任务可观测性是 ZeroCode 用户的核心诉求。
- **RFC 流程负担**：贡献者主动提案简化投票流程（#10549），并配套 PR #9817、#9927 收窄 RFC 入口——流程摩擦已是社区共识问题。

## 8. 待处理积压

- **49 个待合并 PR**，其中多个 XL 级、8 月中旬提交至今未合并，需维护者评审带宽：
  - [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) 沙箱策略 schema（6/17 提交，对应已接受 RFC #6996，阻塞最久的高价值 PR）
  - [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) A2A Phase 1（7/24）
  - [#10252](https://github.com/zeroclaw-labs/zeroclaw/pull/10252) 跨 agent 记忆授权（blocked/do-not-merge）
  - [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) token 裁剪事件记账（blocked/do-not-merge）
  - [#9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999) 输出受限响应分类（stacked，依赖 #9447）
- **needs-maintainer-review 的 RFC**：#9487、#9488、#10076、#10526 均需维护者开启新一轮讨论/投票窗口；决策队列 Tracker [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) 是统一入口，建议优先清理。
- **needs-author-action**：#8396、#10360、#10346、PR #9324/#10412/#10407/#10308/#10049/#10233 长期挂起，有回复后失联的风险。
- **P1 Bug #9816 与 #10697 尚无关联 fix PR**，预算失效问题影响生产用户，建议优先排期。

---
*数据来源：Zeroclaw GitHub 仓库过去 24 小时 Issue/PR 活动。总体健康度：讨论与设计活跃度高（健康），合并吞吐与维护者评审带宽是当前主要瓶颈（需关注）。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-09-10）

## 1. 今日速览

今日项目保持高活跃度：过去 24 小时共 50 条 Issue 更新（43 新开/活跃、7 关闭）与 50 条 PR 更新（34 待合并、16 合并/关闭），无新版本发布。议题焦点集中在**会话状态管理（sweeper:risk-session-state）**、**cron 自动化可靠性**和 **Desktop 端体验**三大主题，多个 P1 级 Bug 被快速响应并当日出修复 PR，显示维护者响应闭环效率较高。多个用户提出的 Feature（如 conclusion-only TTS）当日即有对应实现 PR，社区贡献节奏健康。

---

## 2. 版本发布

今日无新 Release。注：多处 Issue 提及 v0.21.0（2026-08-31）后出现的回归（如 #100268 `/proc/uptime` 消失），下次发版需重点关注 0.21.x 的兼容性收尾。

---

## 3. 项目进展

今日合并/关闭的 16 个 PR 中值得关注的：

- **#99023（已关闭）** [mcp_oauth] 修复服务器未返回 refresh_token 时的令牌丢失问题（RFC 6749 §6），解决 Google Workspace MCP 每小时需要重新浏览器授权的顽疾。— https://github.com/NousResearch/hermes-agent/pull/99023
- **#101022（已关闭）** [docker] 将 `HERMES_HOME` 根目录的 SOUL.md/USER.md/MEMORY.md 挂载进 terminal 容器，修复 #100900。— https://github.com/NousResearch/hermes-agent/pull/101022
- **#107064（已关闭）** [mcp] 401 恢复路径先尝试静默 refresh，避免无谓弹出浏览器授权页，对应今日新 Issue #107059，响应速度极快。— https://github.com/NousResearch/hermes-agent/pull/107064
- 长线大 PR #94266（Collective Wisdom Agent V1）持续推进 analytics 契约对齐；#93508（`hermes webapp` 浏览器托管 Desktop 渲染器）仍在审。

整体看，今日修复合集显著改善了 **MCP OAuth 链路**与 **Docker 隔离后端**两个长期痛点领域。

---

## 4. 社区热点

| Issue | 评论 | 焦点 |
|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index stale/degraded | 187 | 自动化巡检持续报警，Skills Hub 索引 29.8h 未刷新（上限 26h），涉及 skills-index.yml 与 deploy-site.yml 的 cron 协调问题，长期未根治 |
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) 全仓 godfile 拆分 Epic | 82 | #102117 后仍有约 2K 个拆分任务，"只拆分不回退"的架构治理政策引发持续讨论 |
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) Bot 群聊在 Desktop 关闭后继续运行 | 28 | 跨 gateway Bot 协作 + 多设备接续，是 gateway 架构方向的重要用户诉求 |
| [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) CLI ↔ Telegram 跨平台会话共享 | 19（👍4） | 多平台会话隔离是老牌痛点，自 3 月活跃至今 |

**诉求解读**：用户强烈期待 Hermes 从"单端助手"演进为"常驻多平台智能体"——会话/上下文跨端共享与后台自治运行是核心方向。

---

## 5. Bug 与稳定性（按严重度）

**P1**
- **#106963** gateway 回收 session 后未中断在途运行，结果被丢弃后仍消耗 51 次调用 / 7.9M tokens（费用风险）。— [Issue](https://github.com/NousResearch/hermes-agent/issues/106963)，暂无 fix PR
- **#106935** SSH 后端 idle-exit 误杀兄弟后端，Desktop 全量重启导致活跃 turn 被杀。— [Issue](https://github.com/NousResearch/hermes-agent/issues/106935)，暂无 fix PR
- **#100401** cron fire-claim 心跳死锁自栅栏，>60s 的任务全部被误标 "Interrupted by shutdown"。— [Issue](https://github.com/NousResearch/hermes-agent/issues/100401)，暂无 fix PR
- **#106459（已关闭）** 超限会话永久不可压缩的 pain cluster。— [Issue](https://github.com/NousResearch/hermes-agent/issues/106459)
- **#80646** `agent_context` 硬编码 "primary"，memory provider 的上下文跳过逻辑为死代码。— [Issue](https://github.com/NousResearch/hermes-agent/issues/80646)

**P2**
- **#106596** Desktop YouTube embed 报 Error 153（Referer 修复接到了未使用的 session partition）。— [Issue](https://github.com/NousResearch/hermes-agent/issues/106596)
- **#107016** Bot 工作区内新建普通会话被 `hidden=1`，全局不可见不可恢复。— [Issue](https://github.com/NousResearch/hermes-agent/issues/107016)
- **#100268** v0.21.0 后容器内 `/proc/uptime` 消失，宿主信息脚本失效。— [Issue](https://github.com/NousResearch/hermes-agent/issues/100268)
- **#100740** 本地 runtime GPU 探测仅识别 NVIDIA，AMD/Intel 机器装成 CPU 版 llama.cpp。— [Issue](https://github.com/NousResearch/hermes-agent/issues/100740)
- **#97296** macOS 27 上 Kanban dispatcher fork 线程化 gateway → SIGSEGV。— [Issue](https://github.com/NousResearch/hermes-agent/issues/97296)
- **#107059** MCP OAuth 401 恢复竞态导致无声刷新成功仍弹浏览器 → **已有 fix PR #107064（当日关闭）** ✅
- **#106994**（P3 但属设计缺陷）Kanban worker 派生子任务相互等待死锁。— [Issue](https://github.com/NousResearch/hermes-agent/issues/106994)

**模式观察**：`risk-session-state` 标签出现在近半数高危 Issue 中，会话生命周期管理（reap/evict/compress/interrupt）是当前最大的稳定性债务区。

---

## 6. 功能请求与路线图信号

很可能进入下一版本（已有实现 PR）：
- **Conclusion-only TTS**：#107056 ↔ PR #107065（当日提出、当日实现，含 `voice.tts_conclusion_only` 配置）
- **MCP allowed_tools 白名单**：PR #106989（安全修复，优先级应高）
- **Desktop 自动化生命周期 GUI**（Goals/Loops/Heartbeats）：#105434
- **Windows 更新保留所有权并重启**：#104687

管线中的大特性：
- `hermes webapp` 浏览器托管 Desktop（#93508）
- Mattermost live-thinking 气泡（#54230）
- MCP Tasks 扩展 / 长任务 RPC（#106805，尚无 PR）
- 跨平台会话共享（#4335）与 Bot 群聊离 Desktop 运行（#97681）——呼声高但工程量大，尚无对应 PR

---

## 7. 用户反馈摘要

- **痛点**：① 升级后"隐性破坏"频发（#95855 mcp==2.0.0 与 fastmcp 冲突致 Hindsight 每次更新后失效；#100268）；② token/费用失控焦虑（#106963 幽灵调用）；③ 会话一旦超限/中断即"永久坏死"，缺乏自愈路径（#106459、#92877）；④ Windows 与非 NVIDIA GPU 用户被边缘化（#104687、#100740、#107059）。
- **满意点**：Docker/SSH/多 profile 等进阶部署场景有真实深度用户在用并产出高质量诊断报告（#106935、#100900）；TTS/skills/plugins 生态参与度高，社区贡献者当日提 PR 的速度值得称道。
- **典型场景**：macOS Desktop + Tailscale SSH 连 Linux 主机、Docker 化 gateway + cron 监控（如 #107058 的销售漏斗监控）——Hermes 正被当作"个人基础设施"而非聊天工具使用。

---

## 8. 待处理积压

| 条目 | 状态 | 建议动作 |
|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index degraded | 187 评论，自 7/18 反复报警 | 优先修复 cron 与 deploy 工作流的索引协调 |
| [#100401](https://github.com/NousResearch/hermes-agent/issues/100401) cron 心跳死锁 (P1) | 9/1 报告，11 评论 | 尽快出 fix，影响所有长任务自动化 |
| [#80646](https://github.com/NousResearch/hermes-agent/issues/80646) agent_context 死代码 (P1) | 8/6 报告 | 涉及 memory 契约，需架构决策 |
| [#53416](https://github.com/NousResearch/hermes-agent/issues/53416) MCP 绕过 enabled_toolsets | 6/27 报告 | 与 PR #106989 相关，可一并审 |
| [#92877](https://github.com/NousResearch/hermes-agent/issues/92877) 空响应脚手架持久化 | 8/23，needs-repro | 补 repro 后修复 |
| [#57791](https://github.com/NousResearch/hermes-agent/pull/57791) QR code skill PR | 7/3 提交至今未合并 | 积压最久的 PR 之一，建议裁决 |
| [#94266](https://github.com/NousResearch/hermes-agent/pull/94266) Collective Wisdom Agent | 8/24 起大 PR 持续迭代 | 关注审评进度，避免烂尾 |

**健康度小结**：Issue 关闭率（7/50）偏低但多为快速闭环的新报 Bug；建议集中清理 session-state 风险簇与 Skills index 长期告警，以维持社区信任。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-09-10

## 1. 今日速览

PicoClaw 今日整体活跃度偏低，无新版本发布。Issues 侧以清理为主：3 条 issue 全部被关闭（其中 3 条标记为 stale，均为长期无活动的旧议题自动/批量关闭），无新增 bug 报告。PR 侧有 5 条更新，4 条仍处待合并状态、1 条被关闭，且今日无任何 PR 合并。综合看，项目处于维护与积压整理阶段，社区有持续的功能贡献意愿（多通道渠道增强类 PR），但合并节奏放缓，需关注维护者响应情况。

## 2. 版本发布

今日无新版本发布，省略。

## 3. 项目进展

今日无 PR 合并，仅有 1 条 PR 被关闭：

- **[#1349](https://github.com/sipeed/picoclaw/pull/1349) [CLOSED]** `feat(qq): support parsing and replying to more attachment types` — 该 PR 由 @aishannon 于 2026-03-11 提出，历经半年未合并，今日被关闭。内容为 QQ 频道附件消息（表情、语音、图片、视频、文件）的解析与回复支持。**遗留的 QQ 富媒体消息能力空缺值得关注，后续或有新 PR 替代实现。**

待合并 PR（详见第 8 节积压分析）今日均有活动更新，但推进有限，项目整体功能向前迈进幅度较小。

## 4. 社区热点

今日无新增评论热帖，但被关闭的议题中历史讨论较多：

- **[#3269](https://github.com/sipeed/picoclaw/issues/3269)**（9 条评论，1 👍）MCP server 连接失败导致 agent loop 挂起、聊天界面无响应 — 这是用户痛点最集中的稳定性问题，反映用户在真实多工具场景下对**运行时容错性**的强需求。虽被以 stale 关闭，但该问题模式（外部依赖失败 → 主循环阻塞）很可能再次出现，建议维护者确认是否已有修复或另行跟踪。
- **[#3265](https://github.com/sipeed/picoclaw/issues/3265)**（4 条评论）未配置 deltachat 却报 `channel deltachat has unknown type` — 反映**配置默认值与启动校验**的健壮性问题。值得注意的是，[#3222](https://github.com/sipeed/picoclaw/pull/3222) 的 deltachat 重构 PR 仍在待合并状态，可能与此相关。
- **[#3345](https://github.com/sipeed/picoclaw/issues/3345)** 家庭边缘计算轻量 worker 模式提案 — 契合 PicoClaw 低配设备（RISC-V/ARM/树莓派/旧安卓）的核心定位，被 stale 关闭略为可惜，但这类“分布式轻量节点”方向值得关注社区后续是否重提。

## 5. Bug 与稳定性

今日**无新报告 Bug**。历史 Bug 处理状态如下（按严重程度）：

| 严重程度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 高 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) MCP 连接失败致 agent loop 挂起、界面无响应 | 已关闭（stale） | 未见对应 fix PR ⚠️ |
| 中 | [#3265](https://github.com/sipeed/picoclaw/issues/3265) 未配置 deltachat 时网关启动失败 | 已关闭（stale） | 或与 PR #3222 重构相关，未确认 |

⚠️ 两个 bug 均以 stale 方式关闭而非确认修复，存在**问题未真正解决即沉没**的风险，建议社区用户验证最新 nightly 是否复现。

另有一条稳定性相关待合并 PR 值得推进：[#3353](https://github.com/sipeed/picoclaw/pull/3353) 限制工具反馈动画生命周期，防止消息被无限编辑 — 直接提升频道消息稳定性。

## 6. 功能请求与路线图信号

- **QQ 频道富媒体支持**：PR #1349 被关闭后，该能力空缺明显，是社区明确的需求信号，可能以新 PR 形式回归。
- **IRCv3 multiline 支持**：[#3354](https://github.com/sipeed/picoclaw/pull/3354) 待合并，将多行 IRC 消息聚合为单一入站消息，是 IRC 渠道体验的关键增强。
- **回复线程化**：[#3358](https://github.com/sipeed/picoclaw/pull/3358) 让非回复触发（如群内 @mention）的回答自动携带 `ReplyToMessageID`，直击群聊场景可用性。
- **轻量边缘 worker 模式**（#3345）：虽被关闭，但与项目低配设备定位高度契合，是潜在路线图方向的社区信号。
- **Deltachat 现代化重构**（[#3222](https://github.com/sipeed/picoclaw/pull/3222)，-200 LOC）：清理遗留特性、移除硬编码、重命名配置项（`invite_link` → `join_invite_link`），若合并将包含**破坏性配置变更**，需在 Release Notes 中强调。

## 7. 用户反馈摘要

- **稳定性敏感**：用户在 Qwen3 + MCP 多工具场景下遇到主循环挂起（#3269），说明生产化使用中对**外部依赖故障隔离**的期待高于当前水平。
- **开箱即用体验**：默认配置即启动失败（#3265）表明新用户的首次运行体验仍有打磨空间。
- **群聊场景可用性**：多个 PR（#3358 回复线程、#3353 动画上限）均围绕多用户频道场景，反映 PicoClaw 的主要使用形态是**群聊机器人/多渠道接入**，而非纯单机 CLI。
- **设备碎片化用户群**：边缘设备用户（树莓派、旧安卓、RISC-V 板卡）主动提出架构级建议，社区对“极低资源占用”有真实且强烈的认同。

## 8. 待处理积压

以下 PR 长期未合并，建议维护者优先审视：

1. **[#3222](https://github.com/sipeed/picoclaw/pull/3222)** deltachat 重构 — 挂起 2 个月余，且可能与已关闭 bug #3265 相关，尽快合并可消除一类启动故障。
2. **[#3358](https://github.com/sipeed/picoclaw/pull/3358)** 回复线程修复 — 已挂起 9 天且标记 stale，属低风险高价值修复。
3. **[#3354](https://github.com/sipeed/picoclaw/pull/3354)** IRCv3 multiline — 功能完整度高，等待 review。
4. **[#3353](https://github.com/sipeed/picoclaw/pull/3353)** 工具反馈动画上限 — 稳定性改进，建议优先合并。

**健康度提示**：今日 3 个 issue 全部以 stale 关闭、0 合并、0 新 issue，呈现“机器人清理 > 人工响应”的倾向。若持续，可能挫伤贡献者积极性（PR #1349 半年后被关闭即是信号），建议维护团队增加 review 带宽或明确各 PR 的处置时间表。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：** 2026-09-10 | **仓库：** [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw)

---

## 1. 今日速览

项目过去 24 小时整体活跃度**中等偏上**：共 8 条 Issues/PR 动态（1 Issue + 7 PR），其中 3 个 PR 已合并/关闭、4 个待合并。工程节奏以**缺陷修复为主**，集中在 agent-runner、WhatsApp 渠道和安装流程三个方向，无新版本发布。多个 PR 来自 core-team 成员，且 PR #3756 显示存在跨仓库协作（nanoco-gw#152、nanoco#534），表明团队正在推进一项关于用量限制（usage allowance）的系统性契约变更。社区贡献者（如 @horsehcj、@Koshkoshinsk）持续提交渠道侧修复，外部参与度健康。

---

## 2. 版本发布

今日无新版本发布。上一个发布周期以来的修复（详见下文）预计将随下一个版本一起发布。

---

## 3. 项目进展

今日共 **3 个 PR 合并/关闭**，4 个待合并：

### 已合并/关闭

- **[#3738](https://github.com/nanocoai/nanoclaw/pull/3738)** — `fix(agent-runner): thread replies from the message being answered`（core-team，跨 5 个 area 标签，09-07 创建、今日关闭）
  修复 `send_message`、`send_file` 和 `<message to>` 回复的线程路由问题，文件不再错误地落入主频道。`resolveRouting` 现在以被回复消息所在的线程为准，而非 `session_routing` 中的全局线程。这是对消息路由核心逻辑的重要修正。

- **[#3753](https://github.com/nanocoai/nanoclaw/pull/3753)** — `fix: community portal records the Echo image that actually landed`
  修复社区门户的 Echo 镜像记录与实际安装结果不一致的问题：此前登录时即提前写入 `NANOCLAW_HARDENED_IMAGE=true`，若浏览器选择流程中断会产生错误记录。现在记录反映机器上真实发生的状态。

- **[#3756](https://github.com/nanocoai/nanoclaw/pull/3756)** — `fix(agent-runner): a spent usage allowance is said in a sentence`（CLOSED）
  跨仓库三部曲的最后一环：Gateway 将用量超限变为 403 以结束回合（nanoco-gw#152）→ 契约传递（nanoco#534）→ 本 PR 决定用户最终读到的错误文案。使用体验闭环完成。

### 待合并（4 个）

- **[#3754](https://github.com/nanocoai/nanoclaw/pull/3754)** — setup 流程中未注册浏览器跳转只打印一个门户链接，消除“备选登录方式看似完整流程”的误导。
- **[#3755](https://github.com/nanocoai/nanoclaw/pull/3755)** — 清理 `processing_ack` 中消息已不存在的孤儿行；当前 `sqliteGetPendingMessages` 无时间边界地全表过滤，存在性能与正确性隐患。
- **[#3751](https://github.com/nanocoai/nanoclaw/pull/3751)** / **[#3752](https://github.com/nanocoai/nanoclaw/pull/3752)** — WhatsApp 渠道两个修复：入口处忽略 `@newsletter` JID；保证聊天中所有待回答问题均可被回答。

**整体评估：** 今日推进主要是**稳定性与 UX 打磨**，消息线程路由修复（#3738）和用量超限文案闭环（#3756）是含金量最高的两项，项目在多渠道消息处理的可靠性上又前进了一步。

---

## 4. 社区热点

今日无高评论量讨论。唯一活跃 Issue：

- **[#3705](https://github.com/nanocoai/nanoclaw/issues/3705)** `ncl tasks update --recurrence doesn't recompute the next scheduled fire`（@DawoudIO，1 条评论，09-09 有更新）
  用户反馈修改任务周期（如 weekly → daily）后 `process_after` 仍沿用旧调度，需手动干预。该 Issue 已活跃 6 天且有维护者回应迹象，是当前用户侧最受关注的调度正确性问题。

PR #3756 关联的跨仓库用量限制契约变更（nanoco-gw#152 / nanoco#534）虽评论数据缺失，但从其系统性设计看是本周工程侧的隐性热点。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#3755](https://github.com/nanocoai/nanoclaw/pull/3755) `processing_ack` 孤儿行无界堆积，`sqliteGetPendingMessages` 全表扫描，长期运行可能导致 pending 消息处理异常/性能退化 | 有 fix PR，待合并 |
| 🔴 高 | [#3705](https://github.com/nanocoai/nanoclaw/issues/3705) 任务周期变更不重算 `process_after`，调度语义错误 | Issue OPEN，暂无关联 fix PR |
| 🟡 中 | [#3752](https://github.com/nanocoai/nanoclaw/pull/3752) WhatsApp 聊天中待回答问题可能变得无法回答，直接影响用户交互 | 有 fix PR，待合并 |
| 🟡 中 | [#3738](https://github.com/nanocoai/nanoclaw/pull/3738) 回复/文件落错线程，污染主频道 | ✅ 已关闭 |
| 🟢 低 | [#3751](https://github.com/nanocoai/nanoclaw/pull/3751) `@newsletter` JID 进入处理边界 | 有 fix PR |
| 🟢 低 | [#3753](https://github.com/nanocoai/nanoclaw/pull/3753) / [#3754](https://github.com/nanocoai/nanoclaw/pull/3754) 门户记录与安装引导文案准确性 | ✅ 已关闭 / 待合并 |

无崩溃或回归类报告。

---

## 6. 功能请求与路线图信号

- 今日无明确的新功能请求。#3705 属于既有 CLI 能力（`ncl tasks update --recurrence`）的正确性补全，从其持续更新看，预计会被纳入下一批修复。
- PR #3756 揭示的用量限制（usage allowance → 403 → 友好文案）链路显示团队正在完善**商业化/配额体系**的用户体验，这可能是近期路线图方向之一。
- WhatsApp 渠道（#3751、#3752）连续两个外部 PR 表明渠道生态是社区贡献的活跃区，维护者审核这两个 PR 的速度将影响外部贡献者留存。

---

## 7. 用户反馈摘要

- **调度可靠性痛点（#3705）：** 用户依赖 `ncl tasks` 做周期任务，期望修改 recurrence 后自动按新节奏执行；当前需自行重算/重建任务，使用体验割裂。这是自动化场景（如日报、定时提醒）用户的核心诉求。
- **用量超限体验（#3756 背景）：** 用户此前在用量耗尽时收到的错误文本不清晰；新方案以一句话告知“用量已用尽”，说明团队在倾听并改进配额触达时的沟通质量。
- **安装引导混淆（#3754）：** “从其他设备登录”的备选块被误读为完整流程，反映新用户在 setup 阶段的认知负担，团队正通过简化输出缓解。

---

## 8. 待处理积压

- **[#3705](https://github.com/nanocoai/nanoclaw/issues/3705)** — 创建已 7 天，昨日仍有更新但尚无关联 fix PR。建议维护者明确认领或给出 workaround，避免调度类问题积累。
- **[#3754](https://github.com/nanocoai/nanoclaw/pull/3754)、[#3755](https://github.com/nanocoai/nanoclaw/pull/3755)、[#3751](https://github.com/nanocoai/nanoclaw/pull/3751)、[#3752](https://github.com/nanocoai/nanoclaw/pull/3752)** — 4 个 PR 均于 09-09 提交后待审，其中 #3755 涉及潜在数据堆积问题，建议优先评审。

---

**健康度小结：** 修复吞吐稳定（24h 内 3 合并/关闭）、核心团队与社区贡献并行、跨仓库协作有序；短板是 Issue 侧响应偏慢（仅 1 条活跃且未闭环）且无版本发布节奏信号。建议关注调度 Bug #3705 与待审 PR 队列。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-09-10

## 1. 今日速览

IronClaw 今日保持中低强度但持续的活跃状态：过去 24 小时内无 Release 发布，无 PR 合并/关闭，但有 1 条新 Issue 和 4 条活跃 PR 更新。核心开发者 @kirikov 集中在 MCP（Model Context Protocol）托管服务器架构上推进修复与增强（#8090、#8084、#8085），显示托管 MCP 的多用户隔离与调用归因是当前主线方向。社区侧，@supermomonga 报告了 WebChat v2 的 IME 输入法回退 Bug，属于影响中文/日文用户体验的高优先级问题，目前尚无对应 fix PR。整体看，项目处于“修内功”阶段，工程质量投入大于功能扩张。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 合并或关闭，以下为持续推进中的 PR（均为 OPEN 状态）：

- **[#8090](https://github.com/nearai/ironclaw/pull/8090) fix(mcp): 按 caller 而非按 extension 键控托管 MCP 目录** — @kirikov | 09-08 创建，今日（09-10）仍有更新，是当前最活跃的 PR。修复了一个多租户核心缺陷：托管 MCP 服务器的工具目录此前按 extension id 共享一个槽位，导致“最后发现者胜出”，用户 A 与用户 B 的工具互相覆盖。修复后按 caller 维度隔离目录。
- **[#8084](https://github.com/nearai/ironclaw/pull/8084) feat(mcp): 出站托管 MCP 调用可选携带 SEP-414 调用者归因** — @kirikov | 解决托管 MCP 服务器无法区分会话来源、无法识别重试调用的问题。使需要按会话维护状态、或需要避免对有副作用的调用重复计费的服务商有了标准化方案。
- **[#8085](https://github.com/nearai/ironclaw/pull/8085) fix(extensions): 操作员安装的包视同宿主内置包** — @kirikov | 修复构造器与校验器对 inline dynamic descriptor schemas 的 manifest 来源判定不一致，导致“能构建但不能使用”的操作员安装包问题。
- **[#8072](https://github.com/nearai/ironclaw/pull/8072) feat(telegram): 激活时注册 Bot API 命令菜单** — @thisisjoshford | 在扩展激活时通过 `setMyCommands` 注册 `/model`、`/status`、`/new`、`/stop`、`/interrupt` 等命令，停用时尽力清理。标签为 size: L / risk: low，主要是文档与依赖改动。

**进展评估**：四个 PR 全部待审，本周迭代重心清晰——托管 MCP 的多用户正确性（#8090、#8084）+ 扩展系统的安装一致性（#8085）+ Telegram 渠道体验（#8072）。合并节奏偏慢，建议关注 review 积压。

## 4. 社区热点

今日整体讨论热度低（各 Issue/PR 评论数为 0 或未记录），但值得关注的信号：

- **[#8091](https://github.com/nearai/ironclaw/issues/8091)** 是今日唯一新开 Issue，来自外部用户 @supermomonga，报告 WebChat v2 的 IME 确认回车误发消息问题。摘要明确指出这可能是**既往已修复行为的回归（recurrence）**——这类“回归复发”报告对维护者是强信号，通常意味着缺少回归测试覆盖。
- PR #8090 虽无评论，但今日有更新，说明 review/修改循环正在进行，是实质上最活跃的讨论点。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高（多用户数据正确性） | [#8090](https://github.com/nearai/ironclaw/pull/8090) 托管 MCP 工具目录跨用户互相覆盖，可能导致用户调用到他人凭据下发现的工具 | 已有 fix PR，待合并 |
| 🟡 中（可用性） | [#8085](https://github.com/nearai/ironclaw/pull/8085) 操作员安装的扩展包“可构建不可使用”，构造/校验逻辑不一致 | 已有 fix PR，待合并 |
| 🟡 中（CJK 用户体验回归） | [#8091](https://github.com/nearai/ironclaw/issues/8091) WebChat v2 中 Enter 确认输入法组合时会直接发送未完成的消息 | **尚无 fix PR**，建议维护者优先认领并补充 IME keydown/`isComposing` 回归测试 |
| 🟢 低（计费/幂等性） | [#8084](https://github.com/nearai/ironclaw/pull/8084) 托管 MCP 服务器无法识别重试调用，可能导致重复计费/重复副作用 | 已有 PR（opt-in 方案），待合并 |

## 6. 功能请求与路线图信号

- **SEP-414 调用者归因**（[#8084](https://github.com/nearai/ironclaw/pull/8084)）：引用标准化提案编号，表明项目正在跟进 MCP 生态的协议级演进。opt-in 设计意味着下一版本可能以实验性 flag 形式提供，预计被纳入近期版本。
- **Telegram 渠道深化**（[#8072](https://github.com/nearai/ironclaw/pull/8072)）：命令菜单注册属于渠道体验打磨，risk: low，接近可合并状态。
- **WebChat v2 IME 支持**（[#8091](https://github.com/nearai/ironclaw/issues/8091)）：虽为 Bug 报告，但暗示 CJK 用户群真实存在，属于国际化体验的隐性路线图信号。

综合判断：下一版本主线大概率是 **MCP 多租户修复包（#8090 + #8084 + #8085 组合）**。

## 7. 用户反馈摘要

- **@supermomonga（Issue #8091）**：作为 IME（输入法）用户，核心痛点是“确认候选词的回车”与“发送消息的回车”未区分，导致半成品消息被提前发出。诉求不是新功能，而是输入体验的基本正确性；并提示该问题历史上出现过，反映对回归质量的不满。使用场景：以中文/日文在 WebChat v2 中日常对话。
- 其余 PR 均由核心贡献者（@kirikov、@thisisjoshford）提交，属于维护者视角的架构问题（多用户隔离、幂等性、部署一致性），侧面反映 IronClaw 已有托管/多租户生产部署场景。

## 8. 待处理积压

- **[#8091](https://github.com/nearai/ironclaw/issues/8091)**（09-09 报告，0 回复）：新报告且涉及回归，是当前最需要维护者响应的 Issue。
- **PR #8090 / #8084 / #8085 / #8072**：四个 PR 全部处于待审状态（0 合并），其中 #8072 已开 6 天，建议维护者优先安排 review，避免修复类 PR（尤其是多用户数据覆盖的 #8090）积压过久。

---
*数据来源：GitHub API（过去 24 小时窗口）｜生成时间：2026-09-10*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-09-10

## 1. 今日速览

- 过去 24 小时项目保持**中高活跃度**：20 条 Issue 更新（16 活跃 / 4 关闭）、13 条 PR 更新（11 已合并或关闭、2 待处理），无新版本发布。
- 核心开发者 @btc69m979y-dotcom 今日集中产出 **8 个修复 PR**（#2633–#2641），几乎全部围绕 **OpenClaw v2026.8.1 升级适配**，显示项目正处于大规模升级后的密集修复窗口期。
- 值得关注的是，今日活跃 Issue 中有 **6 条安全类报告**（本地文件读取、SSRF 防护削弱、token 代理重放、NIM 文件外泄、HTML 预览符号链接泄露），全部由 @YLChen-007 提交且仍处于 stale 状态，是当前项目健康度的最大隐忧。
- 大量 5–7 月创建的 Issue 被批量标记 stale，社区诉求（记忆体系、性能、任务编排）长期未获官方响应。

---

## 2. 版本发布

今日无新版本发布。但 PR 内容密集指向 **OpenClaw v2026.8.1 内核升级适配**，可推断下一版本将以兼容性与稳定性修复为主。

---

## 3. 项目进展

今日合并/关闭 11 个 PR，是近期修复密度较高的一天，整体推进集中在三条线：

**① OpenClaw v2026.8.1 升级适配（主线，6 个 PR）**
- [#2638](https://github.com/netease-youdao/LobsterAI/pull/2638)：网关启动前迁移旧工作区状态至 SQLite，修复升级后对话被 `Legacy workspace setup state requires migration` 拦截的阻断性问题。
- [#2633](https://github.com/netease-youdao/LobsterAI/pull/2633)：Discord DM 配置 schema 适配，修复旧 `dm.policy` 字段导致网关无法启动。
- [#2637](https://github.com/netease-youdao/LobsterAI/pull/2637)：以受信插件源打包 Discord，解决 `openKeyedStore is only available for trusted plugins` 注册失败。
- [#2635](https://github.com/netease-youdao/LobsterAI/pull/2635)：加入有界退避重试，避免配置 hash 陈旧导致的网关无谓重启。

**② 模型选择与系统提示词治理（2 个 PR）**
- [#2639](https://github.com/netease-youdao/LobsterAI/pull/2639)：将 `default_model` 从 system prompt 中移除，保持对话前缀可复用（缓存命中率优化）。
- [#2640](https://github.com/netease-youdao/LobsterAI/pull/2640)：模型选择改为 session 级作用域，防止会话内切换污染 agent 默认配置。

**③ IM 渠道与 UX 修复**
- [#2634](https://github.com/netease-youdao/LobsterAI/pull/2634)：修复 QQ 关闭信号处理与桌面端消息同步，解决“手机 QQ 有回复但 LobsterAI 不显示”。
- [#2636](https://github.com/netease-youdao/LobsterAI/pull/2636)：修复切换语言后“关于”页更新按钮文案不刷新。
- [#2641](https://github.com/netease-youdao/LobsterAI/pull/2641)：技能自动评审（automatic skill review）改为 opt-in 开关，回应了隐性 token 消耗的用户痛点。

**整体评估**：今日修复覆盖升级阻断、IM 渠道、模型配置三大关键路径，项目在 OpenClaw 升级适配上前进明显，约完成本轮适配的主要收尾工作。

---

## 4. 社区热点

**安全类 Issue 群（最高热度，均由 @YLChen-007 提交）**
- [#2176](https://github.com/netease-youdao/LobsterAI/issues/2176) 任意本地文件读取（消息派生路径 → 特权 Electron 流程）
- [#2181](https://github.com/netease-youdao/LobsterAI/issues/2181) 默认恢复私网浏览器访问并削弱 SSRF 防护
- [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286) 未鉴权本地 token 代理可被任意进程重放
- [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287) NIM 出站媒体流可外泄主机本地文件
- [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288) HTML 预览服务器跟随根内符号链接泄露文件

这类系统性安全审计报告自 6 月起持续未获响应，是社区信任度的重大风险点，建议维护者优先分流处理。

**产品方向讨论**
- [#2239](https://github.com/netease-youdao/LobsterAI/issues/2239)：编程工具“OpenClaw 化”趋势判断，建议通过 MCP 打通 OpenCode/CodeBuddy 编程工具链 — 反映核心用户希望 LobsterAI 成为全流程编排中枢。
- [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046)：Agent 记忆体系深度建议（session 元数据持久化），呼应长期痛点。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | 安全类 × 5（见上文，本地文件读取/外泄、token 重放、SSRF） | 无 fix PR，长期未响应 |
| 🔴 高 | [#2214](https://github.com/netease-youdao/LobsterAI/issues/2214) 数据备份导致主进程 100% 卡死（Win11 + WAL 模式） | 无 fix PR |
| 🟠 中 | [#2216](https://github.com/netease-youdao/LobsterAI/issues/2216) Memory Search embedding provider 锁死为 OpenAI，DB 锁（EBUSY）阻塞索引重建 | 无 fix PR |
| 🟠 中 | [#2230](https://github.com/netease-youdao/LobsterAI/issues/2230) 同任务比 CodeBuddy 慢 10 倍、token 消耗 60M vs 67K — 执行效率与 token 泄漏 | 无 fix PR；#2641 已部分回应隐性 token 消耗 |
| 🟡 中低 | [#2215](https://github.com/netease-youdao/LobsterAI/issues/2215) NSIS 安装 `Resource extraction failed` | 无 fix PR |
| 🟡 低 | [#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) 执行结果窗口滚动到顶端假死 | 无 fix PR |

今日合并 PR 已修复的 Bug（升级路径）：工作区迁移阻断（#2638）、网关重启（#2635）、Discord/QQ 启动失败（#2633/#2637/#2634）。

---

## 6. 功能请求与路线图信号

- **跨模型子任务编排**：[#2132](https://github.com/netease-youdao/LobsterAI/issues/2132)、[#2180](https://github.com/netease-youdao/LobsterAI/issues/2180)（"AI Collaborator" 自然语言指挥台提案）。#2640 的 session 级模型选择已为多模型协作打了配置层基础，**纳入概率中高**。
- **Agent 记忆体系**：#2046 + #2216（embedding provider 可切换）显示记忆是刚需；#2638 将状态迁入 SQLite 的架构改动也为其铺路，**纳入概率中等**。
- **性能/资源治理**：#2243（skills watch 改手动）、#2641（技能评审 opt-in）方向一致，token/IO 治理**大概率进入下一版本**。
- **编程工具链联动**（#2239）：战略级提案，尚无对应 PR，属长期路线图。

---

## 7. 用户反馈摘要

**痛点**
- **token 消耗失控**是最集中的抱怨：重复输出吃 token（#2121）、同任务消耗 60M token（#2230）、自动技能评审隐性消耗（#2641 已修）。
- **升级体验差**：OpenClaw v2026.8.1 升级引发一连串启动阻断，用户被迫自行排查（#2215 的 NSIS 排查记录极为详细）。
- **Windows 稳定性弱**：备份卡死（#2214）、DB 锁（#2216）、安装失败均发生在 Win11。
- **记忆能力缺失**：跨 session 信息丢失，用户需手动维护上下文。

**满意点**
- 社区贡献者提交了高质量的缺陷分析与修复 PR（如 #2638 附带完整回归验证），说明核心用户群技术参与度高。
- 产品自由度（174 个技能、多 provider）受到高级用户认可，但配套的性能与配置治理未跟上。

---

## 8. 待处理积压

**⚠️ 建议维护者优先关注：**

1. **安全 Issue × 5**（#2176/#2181/#2286/#2287/#2288）— 提交于 6–7 月，零官方响应，涉及本地文件读取/外泄与凭证重放，**风险最高**。
2. **[#2214](https://github.com/netease-youdao/LobsterAI/issues/2214) 备份卡死** — 100% 可复现，用户只能强杀进程。
3. **[#2216](https://github.com/netease-youdao/LobsterAI/issues/2216)** — OpenAI 429 后记忆搜索完全不可用，单一 provider 锁定。
4. **待合并社区 PR**：
   - [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358)（session 重命名失败无提示，Fixes #670）
   - [#2373](https://github.com/netease-youdao/LobsterAI/pull/2373)（图片附件与模型 vision 能力同步）
   两个均为 7 月提交的小型 renderer 修复，长期挂起易造成贡献者流失。
5. **被 stale 的产品级建议**（#2046 记忆体系、#2239 编程工具联动、#2243 skills watch）— 建议至少给出 triage 标签或回应，避免社区判断项目方向不透明。

---

**健康度小结**：开发侧活跃且修复效率高（今日 8 个高质量 PR），但安全披露响应缺失、Issue triage 滞后（大量 stale 化）、Windows 端稳定性问题积压，是当前项目健康度的三个主要短板。

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

# CoPaw 项目动态日报（2026-09-10）

## 1. 今日速览

CoPaw 今日保持高活跃度：过去 24 小时内 Issues 更新 28 条（新开/活跃 13，关闭 15），PR 更新 36 条（待合并 24，已合并/关闭 12），无新版本发布。社区呈现“修复速度大于报障速度”的健康态势——Console 多会话竞态、history.db FTS 损坏等一批历史遗留 Bug 被集中关闭。当前 Open PR 中出现了多个新功能方向（Advisor Mode、ntfy 通道、长时记忆后端插件化），显示项目正从核心稳定性打磨向生态扩展过渡。

## 2. 版本发布

今日无新版本发布。（PR #7641 涉及桌面端发布流水线的 artifact 下载重试与校验，暗示 2.2.1 正在准备中。）

## 3. 项目进展

今日关闭/合并的 12 个 PR 中，重点包括：

- **#7237（已关闭）** — Console 多会话竞态防护：修复快速提交、切换会话/Agent、多标签页切换时消息串台问题，直接解决 #7011、#7231 等长期投诉的“消息发错会话”问题。这是 v2.x 以来最重要的前端稳定性修复之一。
- **#7577（已关闭）** — Chat 任务运行中不再返回 409，后续消息自动排队，改善交互体验。
- **#7640（已关闭）** — 修复 ClawHub skill 下载 URL，关闭 #7634。
- **#7616（已关闭）** — ADBPG 与 PowerContext 内存后端完成插件化迁移，内存架构解耦持续推进。
- **#6738（已关闭）** — Creator（PawApp）大批量功能：grounding search、时间线工作台、i18n、ASR、可靠性加固。

此外，进行中的高价值 PR 值得关注：

- **#7655** — 修复 history.db FTS 损坏与保留清理静默失败（#7596）
- **#7653** — 单测冲刺批次 2：新增 2475 个测试，覆盖率 64.41% → 69.43%（+5.02pp），工程化投入显著
- **#7658** — 备份恢复保住 SECRET_DIR 0o700 / .master_key 0o600 权限位，属安全修复
- **#7663** — 插件后端不可用时回退 ReMeLight，避免工作区启动失败
- **#7639** — Scroll 每次构建 agent 都跑 `PRAGMA quick_check` 的性能问题修复

整体看，项目在稳定性、安全、测试覆盖三条线上同步推进，进度扎实。

## 4. 社区热点

- **#7011（8 评论，今日关闭）** — Console 停止请求误杀活跃 Feishu 会话。该问题引发较多讨论，与 #7231/#7237 同属会话身份串扰系列，今日随竞态修复一并关闭，社区反馈积极。
- **#7177（8 评论）** — platform.agentscope.io/deploy 首页优化诉求：操作入口置顶、“打开”与“停止”按钮错位防误触。反映移动端 Web 用户体验仍是痛点。
- **#7597（7 评论，已关闭）** — 工具返回图片/PDF 以裸 base64 发送触发 400。AI 代笔 issue（已按政策披露），涉及文件传输协议规范。
- **#7363（6 评论）** — Windows 上同步调用阻塞事件循环、启动冻结 118–135 秒。至今未关闭，是当前最受关注的未决性能问题。
- **#7656（MemCode CEO 提出）** — 跨会话持久记忆的商业合作提案；与 PR #7613（OpenViking 记忆后端）形成呼应，记忆生态成为热点方向。
- **#7657** — ntfy 通道支持提案，作者已有可用实现，社区响应正面。

## 5. Bug 与稳定性（按严重程度）

| 严重度 | Issue | 状态 / Fix |
|---|---|---|
| 🔴 高 | **#7363** 同步调用阻塞事件循环、timeout 失效，桌面端启动/发消息冻结 2 分钟（Win） | Open，暂无 fix PR |
| 🔴 高 | **#7633** llama.cpp 5 位 build 号解析失败，has_update 误判并静默回滚用户升级的运行时 | Open，暂无 fix PR |
| 🔴 高 | **#7662** 代理黑洞下 Telegram polling 静默死亡，watchdog 无法触发重连（v2.2.0/main 均存在） | 今日新报，已快速关闭（疑似已修复或转移跟踪） |
| 🟡 中 | **#7661** 新建会话逻辑错误：二次提问时侧边栏又创建新会话 | 今日新报，Open |
| 🟡 中 | **#7642** Chrome 下 Console 流式输出不渲染直至回合完成（Safari 正常） | Open |
| 🟡 中 | **#7628** 上下文压缩仍可能超出完整请求预算导致回合失败 | Open |
| 🟢 已修 | **#7596** FTS 损坏 + 保留清理静默失败 → PR **#7655** | 修复中 |
| 🟢 已修 | **#7634** ClawHub 同名 skill 安装失败 → PR **#7640**（已关闭/合并） | 已修复 |

## 6. 功能请求与路线图信号

可能进入下一版本的功能：

- **消息排队**：#7577 已合并，follow-up 消息排队将成为默认行为
- **会话回滚分页**：#7542（scroll-back pagination）解决压缩后历史不可见问题，社区呼声高
- **Advisor Mode**（#7569）：强弱双模型配对循环模式，属创新性功能，在评审中
- **ntfy 通道**（#7657）：自带实现，契合自托管用户群，采纳概率高
- **记忆生态**：#7613 OpenViking 后端 + #7656 MemCode 合作 + skill 版本化元数据（#7557），记忆方向持续加码；#7663/#7616 表明插件化是记忆层的既定架构路线
- **企业网络支持**：#7659（信任运营商 CA）、#4175（MCP tls_verify/ca_file）指向企业部署场景的补强
- **QwenPaw-Data 0.3.0**（#7637）：数据分析引擎集成，扩展产品边界

## 7. 用户反馈摘要

- **移动端 Web 体验差**是高频痛点：入口位置不合理（#7177）、简洁模式无法切换 Agent（#5329）、按钮误触风险
- **多面板/多项目管理**需求：用户同时运行 7-8 个 CoPaw 实例，希望自定义网页标题（#7648）
- **自定义受限**：默认 Agent 关键参数（邮箱、模型路由）前端不可编辑（#7644），工作目录只能逐级点击（#7601）
- **企业/代理网络部署**摩擦：TLS 私有 CA、Telegram 代理黑洞、MCP timeout/tls 配置被静默丢弃（#3997）
- **正面信号**：用户深度使用多通道（Feishu/Telegram/手机浏览器）并主动提交带复现步骤的详细报告；自有生态活跃（ClawHub skills、skill 市场），社区贡献者提交了覆盖 2400+ 用例的测试 PR

## 8. 待处理积压

- **#7363**（8-27 创建，6 评论）— 事件循环阻塞 + Windows 冻结，影响可用性，无维护者明确响应，建议优先
- **#4175**（5-10 创建，4 个月）— MCP tls_verify/ca_file，企业部署刚需，长期未落地；相关 #7659 已提供桌面端侧 CA 方案，可一并评审
- **#7633 / #7661 / #7642 / #7628** — 今日前后新报，尚无 fix PR，需确认分派
- **#7363 之外的长龄 Open PR**：#7542（9-04）、#7569（9-05）处于待评审状态，建议加快 review 节奏

**健康度评估**：Issue 关闭/新开比 15/13 ≈ 1.15，修复吞吐健康；测试覆盖冲刺和插件化迁移表明维护团队在做长线工程投入；主要风险点是 Windows 性能问题（#7363）与发布工程稳定性（#7641）。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报（2026-09-10）

## 1. 今日速览

EasyClaw（TK Copilot）今日无任何 Issue 或 PR 活动（新开/活跃/关闭均为 0），社区讨论处于静默状态。但项目开发侧保持稳定输出，**单日发布 2 个小版本（v1.9.9、v1.9.10）**，聚焦于 Gateway 稳定性和联盟工作台体验优化。整体来看，项目处于“低社区互动、高发布节奏”的维护者驱动阶段，核心工作集中在生产环境可靠性与运维可观测性打磨。

## 2. 版本发布

### v1.9.10 — TK Copilot
[Release 链接](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.9.10)
- **联盟工作台队列增强**：双队列（affiliate workbench queues）新增独立排序控件，支持按最旧/最新优先排列；队列行内直接展示创作者标签，减少跳转查询成本。
- **Gateway 堆快照时机优化**：将 heap snapshot 的捕获时机从“OOM 发生时”提前到“内存超过阈值时”，避免了 OOM 临界点写入失败导致快照丢失的问题——对排查内存泄漏类问题是一项重要的可观测性改进。

### v1.9.9 — TK Copilot
[Release 链接](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.9.9)
- **修复 Gateway 崩溃循环（高价值稳定性修复）**：此前 Gateway 崩溃重启后会重放客服派发消息（customer-service dispatches），重放流量在启动瞬间即可打满 Gateway，可能导致持续崩溃循环。现改为由每小时定时清扫任务（hourly sweep）重新投递这些会话。
- **提案审核流程增强**：样例提案支持 Ignore 与处置标记（disposition）操作。

**迁移注意事项**：两个版本均为常规迭代，Release Notes 未标注破坏性变更；运维侧需注意 v1.9.9 后客服消息重投递延迟可能变长（最长约 1 小时），属可用性换稳定性的权衡。

## 3. 项目进展

今日无合并/关闭的 PR 记录（数据为 0）。项目进展主要由 2 个 Release 直接体现，实际推进内容集中在：
- Gateway 可靠性（崩溃循环修复、内存快照提前捕获）——运维/稳定性主线明显在持续投入；
- 联盟工作台与提案审核的交互细节完善——面向 TikTok 联盟运营场景的功能纵深。

## 4. 社区热点

今日无活跃 Issue/PR 讨论或互动，**无热点可报告**。建议持续观察 Release 后 24–72 小时内的用户反馈窗口。

## 5. Bug 与稳定性

今日无新报告 Bug。值得注意的是，**v1.9.9 与 v1.9.10 本身即是两项稳定性修复的交付**：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 高 | Gateway 重启后消息重放导致崩溃循环 | ✅ 已在 v1.9.9 修复 |
| 中 | OOM 时堆快照写入失败/丢失 | ✅ 已在 v1.9.10 修复 |

## 6. 功能请求与路线图信号

今日无新功能请求。从近期 Release 的迭代方向可推断路线图信号：
- **联盟（Affiliate）工作台**持续获得排序、标签展示类增强，是当前功能迭代主战场；
- **运维可观测性**（内存阈值快照、重投递机制）投入加大，暗示 Gateway 在生产负载下的稳定性仍是重点；
- 提案处置（disposition/Ignore）能力的引入，预示审核工作流后续可能进一步扩展。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼用户反馈。建议关注 v1.9.9 崩溃循环修复上线后，受影响用户是否回报问题解除。

## 8. 待处理积压

今日数据中无长期未响应的 Issue 或 PR，无积压提醒事项。

---

**健康度小结**：今日社区互动为零，但发布节奏健康（单日 2 版），且两项更新均为生产级稳定性修复，显示项目处于活跃自维护状态。风险点在于社区反馈渠道当前静默，无法交叉验证修复效果，建议维护者在 Release 后主动征集用户反馈。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*