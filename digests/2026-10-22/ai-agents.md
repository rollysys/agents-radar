# OpenClaw 生态日报 2026-10-22

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-10-22 03:47 UTC

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

# OpenClaw 项目动态日报 — 2026-10-22

---

## 1. 今日速览

OpenClaw 今日保持高活跃度：过去 24 小时内 Issues 更新 500 条（新开/活跃 347，关闭 153），PR 更新 500 条（待合并 131，已合并/关闭 369），并发布 1 个新版本 v2026.10.10-beta.3。项目推进节奏显著加快，PR 关闭量约为待合并量的 2.8 倍，维护者吞吐能力强劲。但社区侧 Windows 稳定性、SQLite/内存泄漏类 P0 问题持续发酵，多条 release-blocker 尚无 fix PR，仍是项目健康度的主要风险点。@steipete 今日异常高产，单日提交约 20 个 PR，集中推进 Web UI 的 Solid 渐进式重构与测试瘦身。

---

## 2. 版本发布

### v2026.10.10-beta.3
- **核心主题：Windows 可靠性**
  - 恢复全新状态初始化与 Gateway 启动流程
  - 应用更新期间隐藏 SQLite 辅助窗口
  - 强制 Gateway 重装时容忍 launcher 时间戳稳定（#176194, #174969, #176174, #176945；关联 #176111, #174906）
- **迁移注意事项**：属于 beta 渠道，主要面向 Windows 用户修复更新/启动可靠性问题，生产环境升级前建议关注 #145252 追踪 Issue 的进展。

---

## 3. 项目进展

今日合并/关闭 369 个 PR，主要进展集中在：

- **Web UI Solid 化重构**（@steipete 主导）：今日关闭/推进十余个 UI PR，包括 Control UI 启动性能优化（#179919，gzip 减少 8,476 字节、减少 2 个 JS 请求）、浏览器登录探测（#180049）、原生模型目录读取（#179459）、Skills 目录异步搜索（#179875）、插件设置就绪态（#180258/#180259）等。
- **测试瘦身战役**：batch d424–d426（#180226, #180229, #180241）批量移除低价值重复测试，降低维护成本。
- **关键修复 PR 活跃**：
  - P0 config 守护 PR（#152565）：配置被截断时保留 last-known-good，已 ready for maintainer look，修复更新失败导致配置损坏的核心链路。
  - cron 脚本修复（#177825，P1）：修复 hook 插件被替换后计划任务全部失败的问题。
  - ask_user 安全边界修复（#179965）：bot 发起消息时提问路由到 owner 而非对方 agent。
- **新功能**：#180233 为多 agent 集群提供共享模型默认配置（一次 configure 全 fleet 生效）。

整体来看，UI 架构现代化与 Windows 可靠性两条主线都在稳步收敛。

---

## 4. 社区热点

| Issue | 热度 | 核心诉求 |
|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) Agent SQLite WAL 无限增长 | 134 评论 · P0 | Windows 上单个 agent 的 WAL 文件数天内涨至 1.4–2.8 GB，阻塞 Gateway 启动；手动 checkpoint 后复发。无 fix PR，维护者介入迟缓引发大量讨论。 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) 网关级 per-agent 成本预算 | 27 评论 | 运营者希望在 Gateway 派发模型调用前强制执行日/月费用上限，防止失控消费。长期 open，等待产品决策。 |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) prepared-model-catalog worker 内存泄漏 | 24 评论 · P0 | 与 provider 无关的 worker 线程泄漏，~4-5 GB/h，空闲环境同样发生，已做冷重启 + provider 二分验证。 |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) 插件源捕获重写 SSD 磨损 | 22 评论 · P1 | 每条 CLI 命令重写 1.1–1.4 GB、每次 Gateway 启动 6.5 GB，2026.9.5 引入的回归，用户担忧硬件寿命。 |
| [#144291](https://github.com/openclaw/openclaw/issues/144291) 配置热重载中断所有进行中 agent 回合 | 14 评论 · P1 | 任何 `config set` 触发 "prepared model runtime plugin generation was superseded"，导致消息丢失。 |

用户诉求共性：**Windows 长期运行稳定性、资源（内存/磁盘/IO）纪律、消息可靠性**。

---

## 5. Bug 与稳定性（按严重度）

**P0（多数无 fix PR）**
- [#143524](https://github.com/openclaw/openclaw/issues/143524) SQLite WAL 无限增长阻塞 Gateway（Windows）— ❌ 无 fix PR
- [#159662](https://github.com/openclaw/openclaw/issues/159662) / [#160548](https://github.com/openclaw/openclaw/issues/160548) model-catalog worker 内存泄漏 + 回收时杀死等待中的 turn — ❌ 无 fix PR
- [#152804](https://github.com/openclaw/openclaw/issues/152804) 2026.9.5 回归：minimax-portal 升级后丢失模型目录 — ❌ manual-only
- [#157812](https://github.com/openclaw/openclaw/issues/157812) / [#152992](https://github.com/openclaw/openclaw/issues/152992) Windows 自动更新反复失败（preflight/长路径 `?` 问题）— ❌
- [#160386](https://github.com/openclaw/openclaw/issues/160386) 大 session store 上 2026.9.6 引发严重 SQLite IO 压力与 RPC 超时 — ❌
- [#158912](https://github.com/openclaw/openclaw/issues/158912) MEMORY.md 在 2026.9.6 不再注入 bootstrap，文档与行为不一致 — ❌
- [#166634](https://github.com/openclaw/openclaw/issues/166634) 崩溃恢复后 reclamation checkpoint 失败导致 agent 永久不可用 — ❌

**P1**
- [#157989](https://github.com/openclaw/openclaw/issues/157989) 插件捕获 SSD 磨损 — ❌
- [#170928](https://github.com/openclaw/openclaw/issues/170928) Windows 2026.10.2 Gateway 启动 7–9 分钟且就绪后间歇无响应 — ❌
- [#157605](https://github.com/openclaw/openclaw/issues/157605) 2026.9.6 升级后持续 240–276% CPU（sessions.list 卡死）— ❌
- [#156925](https://github.com/openclaw/openclaw/issues/156925) Webchat 工具调用回合回复渲染两次 — ❌
- [#153453](https://github.com/openclaw/openclaw/issues/153453) WhatsApp 回复等待 recovery 才送达 — 部分修复 PR

**今日新增回归信号**：[#172837](https://github.com/openclaw/openclaw/issues/172837) Codex 原生 subagent 分配永不清理，父线程反复重发。

---

## 6. 功能请求与路线图信号

- **网关级成本预算**（[#42475](https://github.com/openclaw/openclaw/issues/42475)）：多租户/团队运营场景强需求，已有 per-session 成本追踪基础，落地概率中等，等待 product-decision。
- **Bounded launch contract for Swarm**（[#156632](https://github.com/openclaw/openclaw/issues/156632)）：实现 PR #155442 已开放，很可能进入下一版本。
- **Fleet 共享模型配置**（[#180233](https://github.com/openclaw/openclaw/pull/180233)）：PR 今日新开，多 agent 运维痛点明确。
- **稳定插件 SDK 面**（[#81913](https://github.com/openclaw/openclaw/issues/81913)）：linked PR open，生态建设方向持续。
- **iOS/macOS 个人身份 opt-in**（[#162164](https://github.com/openclaw/openclaw/issues/162164)）：移动端多用户场景需求上升。
- **Automations 送达配对节点**（[#144306](https://github.com/openclaw/openclaw/issues/144306)）：与移动端通知体系协同，呼声稳定。

---

## 7. 用户反馈摘要

- **Windows 用户最痛苦**：更新失败、启动缓慢、睡眠唤醒后 30–60s 重连失败（[#140010](https://github.com/openclaw/openclaw/issues/140010)）、SQLite 写事务长时持有（[#155359](https://github.com/openclaw/openclaw/issues/155359)）。Windows 可靠性是差评集中区。
- **长期自托管用户**：对资源纪律（内存泄漏、磁盘写入量）极为敏感，多名用户提供了详尽的量化证据（GB 级数据），专业度高、期待快速响应。
- **多渠道运营用户**：Telegram 出站消息单次尝试即死信（[#125764](https://github.com/openclaw/openclaw/issues/125764)）、WhatsApp 延迟送达、插件热重载切断活跃流（[#152965](https://github.com/openclaw/openclaw/issues/152965)），消息可靠性是最不满意点。
- **正面信号**：报告质量普遍很高（复现步骤、bisect、证据 bundle），显示社区投入度深；UI 重构节奏和 beta 版本迭代速度获得隐性认可（用户持续跟版反馈）。

---

## 8. 待处理积压（提醒维护者）

- [#143524](https://github.com/openclaw/openclaw/issues/143524)（P0，134 评论，9 月至今）— WAL 增长，最高优先级积压
- [#145252](https://github.com/openclaw/openclaw/issues/145252) — 2026.9.3/9.4 升级可靠性追踪 Issue，仍 open
- [#138042](https://github.com/openclaw/openclaw/issues/138042) / [#138098](https://github.com/openclaw/openclaw/issues/138098)（9 月初）— Gateway 控制请求分钟级停滞、QA 证据可复现性
- [#152565](https://github.com/openclaw/openclaw/pull/152565)（P0 fix PR，ready for maintainer look，open 近一个月）— 建议优先评审合并
- [#166760](https://github.com/openclaw/openclaw/pull/166760)（stale，needs proof）— Cloudflare Access 预览空白问题
- [#161216](https://github.com/openclaw/openclaw/issues/161216)（已关闭但 "Sign in with ChatGPT" hard-down）— 建议确认是否真正恢复

**健康度总评**：开发吞吐优秀（369 PR 处理/日），但 P0 稳定性积压（尤其 Windows + 资源泄漏）与修复产出之间存在缺口，建议将 clawsweeper `needs-maintainer-review` 队列中的 P0 项纳入下一 beta 的优先修复清单。

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告

**数据日期：2026-10-22**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已形成明显的**梯队分化**：OpenClaw 以绝对吞吐量（单日 500 Issue + 500 PR 更新、369 PR 处理）占据生态中心位，NanoBot、Zeroclaw、Hermes Agent、NanoClaw、CoPaw 构成高活跃第二梯队，而 PicoClaw、Moltis、EasyClaw 等则处于低强度维护或发布驱动节奏。全生态共同的技术主线高度收敛：**WebUI 现代化、多渠道消息可靠性、插件/技能体系、长会话上下文管理、沙箱与审批安全**。值得注意的是，几乎所有高活跃项目都出现了“开发吞吐强劲、但 P0/P1 稳定性修复滞后”的共同结构性矛盾，Windows 平台与自托管长期运行场景是差评集中区。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（新开/活跃 347） | 500（合并/关闭 369） | v2026.10.10-beta.3 | B+：吞吐顶级，但 P0 积压无 fix PR |
| **NanoBot** | 1 | 56（合并 25） | 无 | A-：当日 Issue 当日修复，闭环极快 |
| **Zeroclaw** | 50（新开 41 / 关闭 9） | 50（合并 7，待合并 43） | 无（v0.8.7 收尾中） | B：Issue 流入 > 关闭，review 容量承压 |
| **Hermes Agent** | 50（新开 39 / 关闭 11） | 50（待合并 48，合并仅 2） | v0.22.3 / v0.22.4（双发） | B：v0.23 前收敛期，会话状态机 P2 集群无修复 |
| **NanoClaw** | 4 | 50（合并 11，待合并 39） | 无 | B+：社区贡献活跃，审阅带宽是瓶颈 |
| **CoPaw (QwenPaw)** | 16（新开 10 / 关闭 6） | 30（合并 9，待合并 21） | 无（2.2.2） | B+：架构扩张快，3 个 🔴 级 Bug 无 fix PR |
| **LobsterAI** | 1 | 11（合并 9） | 无 | A-：修复-反馈闭环好，两个大 PR 搁置 |
| **IronClaw** | 0 | 50（全部待合并，零吞吐） | 无 | C+：50 PR 堆积、最久近 4 个月，管道堵塞 |
| **Moltis** | 0 | 1（待合并） | 无 | C：低强度维护，社区静默 |
| **PicoClaw** | 0 | 3（全部关闭，非合并清理） | 无 | C-：清理 7 个月积压 PR，功能贡献流失 |
| **EasyClaw** | 0 | 0 | v1.9.37 | C+：发布稳定但零社区互动 |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | 无 | 静默 |

---

## 3. OpenClaw 在生态中的定位

**规模对比**：OpenClaw 单日活动量（1000 条 Issue/PR 更新）约为第二梯队单项目（50-56 条）的 **17-20 倍**，是唯一具备“平台级”社区规模的项目。其单个 Issue 的评论密度（如 #143524 达 134 评论）也远超其他项目的热点议题（普遍 5-27 评论）。

**优势**：
- **维护者吞吐最强**：PR 关闭量为待合并量的 2.8 倍，@steipete 单日 20 个 PR 的推进能力在生态中独一无二；
- **架构现代化领先**：Web UI Solid 渐进式重构、Fleet 共享模型配置（#180233）、多 agent 集群方向已落地 PR；
- **社区报告质量极高**：用户能提供 GB 级量化证据、bisect 结果，形成事实上的深度用户群。

**劣势与风险**：
- **稳定性债最重**：8+ 个 P0 无 fix PR（SQLite WAL 无限增长、worker 内存泄漏 4-5 GB/h、SSD 磨损类回归），而 NanoBot/LobsterAI 实现了“当日报告当日修复”；
- **关键 fix PR 评审滞后**：#152565（P0 config 守护）ready for review 近一个月无人处理。

**技术路线差异**：OpenClaw 走“大而全的个人助理平台”（多渠道 + Gateway + Fleet），NanoBot 聚焦单 agent 运行时精修，Zeroclaw 主打安全沙箱与插件签名（生态中最重安全工程），Hermes Agent 侧重桌面端 + 多 profile 网关，NanoClaw 试验“渠道 skill payload 化”的新架构，CoPaw 依托 AgentScope 生态做通道插件化 + 国内集成。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **上下文压缩可观测与可控** | NanoBot（#6370/#6383）、NanoClaw（#4173）、IronClaw（#5450/#7976）、Hermes（#142856）、OpenClaw | 用户要求区分压缩触发原因、可配置开关、handover 文件恢复机制、按模型窗口动态阈值——长任务场景的共性刚需 |
| **会话/任务生命周期可靠性** | Hermes（#139532/#142731/#142844 集群）、NanoBot（#6382）、CoPaw（#8252/#8225）、OpenClaw（#166634） | “会话卡死无恢复入口”“热重载静默取消任务”是跨项目最集中的痛点，用户要求 in-app 恢复与取消原因可观测 |
| **审批/安全边界** | Hermes（#141346 osascript 数据丢失）、Zeroclaw（#9647 知识图谱越权）、OpenClaw（#179965 ask_user 路由）、NanoClaw（#4168/#4171 卡片竞态）、CoPaw（#8360 classifier 迁移） | 自动审批的信任边界、多 agent 数据隔离、审批卡片状态一致性 |
| **插件/技能架构与更新安全** | NanoClaw（渠道 skill 化、#3529 升级覆盖本地 adapter）、CoPaw（#7565 热重载、#8187 通道插件化）、OpenClaw（#81913 SDK）、Zeroclaw（#9101 签名整合） | 插件独立交付 + 升级不破坏本地定制是共同演进方向 |
| **企业/国内网络环境适配** | NanoBot（#6372 统一代理）、Zeroclaw（#10712 企业 TLS）、CoPaw（飞书/百炼）、LobsterAI（#2922 web_fetch 代理） | 代理路由、TLS 检查代理兼容、国内 IM/计费集成 |
| **Windows 平台可靠性** | OpenClaw（P0 重灾区）、Hermes（#79087 唯一 P1）、IronClaw（#118111） | 更新误判、启动缓慢、路径问题——全生态共同的第二平台短板 |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Zeroclaw | Hermes Agent | NanoBot | CoPaw | NanoClaw | LobsterAI |
|---|---|---|---|---|---|---|---|
| **功能侧重** | 全能个人助理 + Fleet 运维 | 安全工程（沙箱/签名/隔离） | 桌面端 + 多 profile 网关 | 单 agent 运行时精修 | 通道插件化 + 国内生态 | 渠道 skill payload 化实验 | 常驻客户端（悬浮球/内置浏览器） |
| **目标用户** | 自托管重度用户、多渠道运营者 | 安全敏感企业/审计型贡献者 | 桌面 + 多平台消息用户 | 国内/CJK、企业自托管 | 国内自托管 + Creator 用户 | 专业开发者（深度定制 adapter） | 高频启停的个人效率用户 |
| **架构特征** | Gateway 中心化 + Solid UI | 多沙箱后端（landlock/bubblewrap/MXC） | multiplex_profiles 单网关 | 事件驱动（events.py 可见） | AgentScope 生态 + 子进程隔离 | 渠道即 skill | Electron 常驻 + OpenClaw gateway 依赖 |

值得注意：**LobsterAI 是 OpenClaw 生态的客户端层**（PR #2917 明确等待 OpenClaw gateway ready），表明 OpenClaw 已开始形成上下游生态——这是其他项目尚不具备的平台效应信号。

---

## 6. 社区热度与成熟度分层

**快速迭代/扩张期**：
- **OpenClaw**：UI 重构 + 功能扩张并行，但质量债在累积；
- **CoPaw**：XXXL 级架构 PR 密集在途（通道插件化、实时语音、PawApp），版图扩张最快；
- **NanoClaw**：社区贡献涌入，架构实验（skill payload 化）活跃。

**质量巩固/收敛期**：
- **NanoBot**：当日闭环 + CI 优化（Windows 测试 21 分钟削减），典型的发布前稳定性收敛；
- **Hermes Agent**：v0.22.3 收敛 620 PR 后进入 v0.23 打磨期；
- **Zeroclaw**：v0.8.7 发布收尾，安全审计驱动；
- **LobsterAI**：日合并 9 PR 的打磨节奏，无阻塞缺陷。

**停滞/维护期**：IronClaw（管道堵塞）、Moltis、PicoClaw（贡献流失）、EasyClaw（发布驱动、社区为零）、NullClaw/TinyClaw/ZeptoClaw（静默）。

---

## 7. 值得关注的趋势信号

1. **“压缩可控性”成为下一竞争点**：五个项目同时涌现压缩相关需求/修复，且都从“自动黑箱”转向“可配置 + 可解释 + 可恢复”。对开发者的启示：长任务的 handover/恢复机制应作为一等公民 API 设计，而非内部实现细节。

2. **审批安全从事后修复转向决策模型化**：Hermes 的 osascript 事故、CoPaw 迁移到 classifier 决策、NanoClaw 修复卡片竞态——行业正从“规则白名单”走向“基于命令语义的审批分级”，GUI 操控类命令（AppleScript 等）将成为强制人工确认的标准边界。

3. **渠道架构从“核心内置”向“独立交付单元”迁移**：NanoClaw 的 skill payload 化、CoPaw 的通道插件化 + 子进程隔离、Zeroclaw 的插件签名验证，三者殊途同归。配套的“升级不破坏本地定制”（NanoClaw #3529）将是插件体系成败关键。

4. **多 agent 隔离是未爆雷区**：Zeroclaw #9647（知识图谱全局共享，S0）、OpenClaw Fleet 配置、Hermes 多 profile 协作——多 agent 已成为标配叙事，但数据归属边界普遍未解决，谁先落地 per-agent 权限模型谁将获得企业信任。

5. **“静默失败”是用户最大信任杀手**：跨项目被反复抱怨的模式一致——任务被取消/消息被丢弃时无通知、无原因、无日志（CoPaw #8252、OpenClaw #125764、Hermes #142487）。建议所有 agent 框架将“取消/丢弃的可观测性”（发起方 + 原因 + 通知）纳入核心设计。

6. **生态正在围绕 OpenClaw 形成上下游**：LobsterAI 作为其客户端层的出现，标志着 OpenClaw 从项目向平台演进。但其 P0 稳定性缺口（Windows + 资源泄漏）若持续，将把企业级信任机会让给安全工程更扎实的 Zeroclaw 或迭代闭环更快的 NanoBot。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-10-22）

## 1. 今日速览

NanoBot 今日保持高活跃度：过去 24 小时内共 56 条 PR 更新（31 条待合并、25 条已合并/关闭），Issue 更新 1 条，无新版本发布。核心贡献者 @chengyongru 今日密集提交了多个针对 WebUI、网络代理、agent 生命周期和 CI 优化的 PR，项目重心明显集中在 WebUI 体验打磨与网关稳定性上。大量 PR 在当日创建并当日关闭，反映出 review 周期短、迭代节奏快。整体健康度良好。

## 2. 版本发布

今日无新版本发布。可关注 CI 层面的变化：[PR #6378](https://github.com/HKUDS/nanobot/pull/6378) 为发布候选产物绑定做了调整，暗示近期可能有 release 准备动作。

## 3. 项目进展

今日已合并/关闭的 25 条 PR 中，重点包括：

- **WebUI 转录稳定性修复**
  - [PR #6373](https://github.com/HKUDS/nanobot/pull/6373)：修复实时回复早于历史加载到达时，ThreadShell 拒绝整个持久化页面并误报“无更早历史”的问题，为转录与分页前沿引入单一同步所有者。
  - [PR #6379](https://github.com/HKUDS/nanobot/pull/6379)：修复跨会话消息丢失来源句柄（source handle）的问题。
  - [PR #6381](https://github.com/HKUDS/nanobot/pull/6381)：修复中文回复中 CJK 强调分隔符边界导致字面 `**` 暴露的问题，改为在解析阶段处理而非修补。
  - [PR #6374](https://github.com/HKUDS/nanobot/pull/6374)：隐藏后台空闲压缩的转录提示（直接修复 Issue #6370）。
- **网关与 Agent 生命周期**
  - [PR #6382](https://github.com/HKUDS/nanobot/pull/6382)：修复停止请求后 `pending_user_turn` 残留、下次启动误报恢复决策的问题（NAN-211）。
  - [PR #6376](https://github.com/HKUDS/nanobot/pull/6376)：版本检查移回网关事件循环，避免与 HTTP MCP 连接争抢 pinned-DNS 传输。
- **CI 效率**
  - [PR #6378](https://github.com/HKUDS/nanobot/pull/6378)：拆分代码验证与发布包验收，Windows 恢复测试单步原本耗时 21 分 30 秒，小前端改动不再触发完整原生验收。
- **频道/文档**：[PR #6340](https://github.com/HKUDS/nanobot/pull/6340) 澄清 QQ 二维码绑定状态与操作。

整体来看，今日进展集中在 WebUI 消息转录正确性与网关运行时健壮性，是一轮系统性的稳定性收敛。

## 4. 社区热点

- **Issue [#6370](https://github.com/HKUDS/nanobot/issues/6370)**（今日唯一新 Issue）：用户 @Xiaoyu-hub 报告 WebUI 中所有上下文压缩都渲染相同的两行分隔符（"Compressing context… → Context compacted"），无法区分后台空闲压缩与上下文窗口压力触发的压缩。根因是 `ContextCompactionEvent`（`nanobot/events.py:37-42`）仅含 `compaction_id` 和 `phase` 字段，信息不足。**该 Issue 当日即被 [PR #6374](https://github.com/HKUDS/nanobot/pull/6374) 响应并修复**，体现了快速闭环。
- 待合并 PR 中讨论较多的方向：
  - [PR #6372](https://github.com/HKUDS/nanobot/pull/6372)：集中化代理设置 + MCP 路由（NAN-315），涉及面广（providers、Web、Telegram/Discord/Slack/Matrix/WhatsApp、MCP）。
  - [PR #216](https://github.com/HKUDS/nanobot/pull/216)：A2A 协议支持，自 2026-02 开放至今，是长期高关注度 PR。

## 5. Bug 与稳定性

按严重程度排列（今日报告或修复）：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | Agent 长时间被 exec 阻塞：未设 `yield_time_ms` 的命令会等待进程退出，可能因浏览器资源泄漏卡满整个运行时（[PR #6385](https://github.com/HKUDS/nanobot/pull/6385)，NAN-328） | Fix PR 开放中 |
| 高 | Cron 任务重入：`CronService.run_job()` 手动触发与定时触发可并发执行同一 job（[PR #6375](https://github.com/HKUDS/nanobot/pull/6375)） | Fix PR 开放中 |
| 中 | 跨会话消息来源句柄丢失（[PR #6379](https://github.com/HKUDS/nanobot/pull/6379)） | ✅ 已关闭 |
| 中 | 停止请求后 `pending_user_turn` 残留导致误报恢复（[PR #6382](https://github.com/HKUDS/nanobot/pull/6382)，NAN-211） | ✅ 已关闭 |
| 中 | 版本检查与 MCP 连接争抢传输导致失败（[PR #6376](https://github.com/HKUDS/nanobot/pull/6376)） | ✅ 已关闭 |
| 低 | WebUI 压缩提示无区分信息（[Issue #6370](https://github.com/HKUDS/nanobot/issues/6370)） | ✅ PR #6374 已关闭 |
| 低 | 中文回复暴露字面 `**`（[PR #6381](https://github.com/HKUDS/nanobot/pull/6381)） | ✅ 已关闭 |

无崩溃或回归类问题报告。

## 6. 功能请求与路线图信号

从 Linear 编号（NAN-xxx）密集出现在 PR 标题可见，项目有明确的内部路线图在驱动：

- **视频/本地文件附件**（[PR #6321](https://github.com/HKUDS/nanobot/pull/6321)，NAN-284）：WebUI 支持视频附件与本地文件引用（不复制内容），大概率进入下一版本。
- **空闲压缩可配置**（[PR #6383](https://github.com/HKUDS/nanobot/pull/6383)，NAN-305）：WebUI 增加开关与等待时长设置，与 #6370 的修复形成配套，是明确的产品方向。
- **统一代理设置 + MCP 路由**（[PR #6372](https://github.com/HKUDS/nanobot/pull/6372)，NAN-315）：企业/国内用户的强需求。
- **MiniMax-M3.1-Flash Day-0 支持**（[PR #6360](https://github.com/HKUDS/nanobot/pull/6360)）：延续快速跟进新模型的传统。
- **A2A 协议**（[PR #216](https://github.com/HKUDS/nanobot/pull/216)）：agent 间通信的长期方向，尚待维护者决策。

## 7. 用户反馈摘要

今日可提取的用户反馈有限（仅 1 条新 Issue），但信号明确：

- **可观测性诉求**：用户在意 WebUI 中的事件是否“可解释”——压缩这类后台行为不能是无差别的提示，需要知道触发原因（空闲维护 vs 窗口压力）。这反映了高级用户对 agent 内部状态透明度的期望。
- 从近期 PR 主题推断的隐含痛点：中文（CJK）用户的 Markdown 渲染体验（#6381）、长命令执行的阻塞感（#6385）、代理/网络环境下的连接可靠性（#6372、#6376），说明用户群体中国内用户和企业自托管场景占比较高。

## 8. 待处理积压

- **[PR #216](https://github.com/HKUDS/nanobot/pull/216)（A2A 协议支持）**：2026-02-06 开放至今近 9 个月未合并，是战略级功能，建议维护者尽快给出评审结论或拆分方案。
- **[PR #5665](https://github.com/HKUDS/nanobot/pull/5665)（MCP 浏览器 OAuth 流量上限）**：开放约 7 周，且标记 conflict，存在内存无限增长风险，建议优先处理冲突。
- **[PR #5652](https://github.com/HKUDS/nanobot/pull/5652)（签名 webhook 直达投递）**：开放约 7 周，标记 conflict，涉及安全设计，需要维护者裁定认证方案。
- **[PR #5727](https://github.com/HKUDS/nanobot/pull/5727)（headless 登录密钥文档）**：纯文档 PR，关联 Issue #5726，标记 conflict，合并成本低，建议尽快处理。
- 待合并 PR 总量达 31 条，建议关注积压趋势，避免 review 带宽成为瓶颈。

---
*数据来源：GitHub API，统计窗口为 2026-10-21 至 2026-10-22（UTC）。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报（2026-10-22）

## 1. 今日速览

今日 Zeroclaw 仓库活跃度**高**：过去 24 小时共 100 条更新（Issues 50 条，其中新开/活跃 41 条、关闭 9 条；PR 更新 50 条，其中待合并 43 条、已合并/关闭 7 条）。今日无新版本发布，但 **v0.8.7** 相关修复密集落地（多个 release:v0.8.7 标签的 Issue/PR 今日关闭），**v0.9.0** 大型追踪器（#7432）及配套 XL 级 PR 持续推进。整体焦点集中在：插件出站连接稳定性、发布签名机制整合、安全沙箱检测与配置安全加固。Issue 新开量（41）远超关闭量（9），社区反馈流入速度较快，需关注积压趋势。

## 2. 版本发布

今日无新版本发布。值得注意的是 **v0.8.7 的发布准备工作已基本收尾**（macOS CI 迁移 #11831、插件出站拨号修复 #11814/#11813 均于今日关闭），预计近期发布。

## 3. 项目进展

今日合并/关闭的 PR（7 条）聚焦 v0.8.7 收尾与安全加固：

- **#11814** [fix(plugins): stagger pinned egress dials](https://github.com/zeroclaw-labs/zeroclaw/pull/11814) — 修复插件出站拨号在首个地址被黑洞时永久卡住的问题，配套 Issue #11813 同日关闭。v0.8.7 关键修复。
- **#11807** [fix(plugins): create the package lock and transaction leases owner-only](https://github.com/zeroclaw-labs/zeroclaw/pull/11807) — 包锁与租约文件改为 owner-only 权限，解决 #11360 报告的本地其他账户可持有锁文件问题。
- **#11344** [fix(config): remove unused pairing-dashboard settings at schema version 4](https://github.com/zeroclaw-labs/zeroclaw/pull/11344) — 配合 #9394 审计结论，在 schema v4 移除完全未被读取的 pairing-dashboard 配置。
- **#11217** [fix(config): stop migrating current-format configs that omit schema_version](https://github.com/zeroclaw-labs/zeroclaw/pull/11217) — 修复缺失 schema_version 时被误判为 v1 并强制迁移的问题。
- **#10712** [fix(config): trust platform roots for outbound WebSocket TLS](https://github.com/zeroclaw-labs/zeroclaw/pull/10712) — 修复企业 TLS 检查代理下 Slack Socket Mode 失败的问题（被 #11443 后续跟进）。
- **#11831** [type:ci] macOS 插件冒烟测试从 macos-14 迁至 macos-15，赶在 10 月 19 日 brownout 前。

**推进评估**：v0.8.7 的发布阻塞项基本清空；v0.9.0 主线（#7432 追踪器下的 IPC/网关拆分）仍处于“Parking Lot + blocked”状态，进展平稳但节奏受制于 review 容量。

## 4. 社区热点

- **#7432 [Tracker]: Runtime, dashboard sign-in and gateway delivery**（12 评论，10-21 更新）— v0.9.0 总追踪器，讨论发布分配与 #8850 等子追踪器的边界划分，是路线图争论的核心阵地。诉求：明确 gateway 拆分（#11000-#11004）的排期。
- **#9101 Consolidate release attestation mechanisms**（10 评论，今日更新）— v0.8.3 同时携带三套并行签名机制（cosign / GitHub attestations / slsa-github-generator），因两个 PR 26 小时内互不知情地合并。社区诉求：统一为单一签名故事，将发布资产从 53 个减至约 20 个，降低 CI 成本。
- **#10999 [Task]: Discord 插件从发布二进制安装验证**（7 评论，今日更新）— 今日已在 v0.8.6 最终发布包（macOS arm64）上验证了真实 Discord 收发消息，接近关闭。
- **#9284 [Bug]: config flush 可覆盖并发写入**（6 评论，今日更新）— P1 并发安全 bug，持续吸引讨论。
- **#9647 [Bug]: 知识图谱无 per-agent 归属**（5 评论，10-21 更新）— S0 级安全问题，任何 agent 可读写其他 agent 的知识图谱，社区对多 agent 隔离模型讨论热烈。

## 5. Bug 与稳定性（按严重程度排列）

| 严重度 | Issue | 状态 | Fix PR |
|---|---|---|---|
| **S1** | [#11957](https://github.com/zeroclaw-labs/zeroclaw/issues/11957) OIDC enrollment 在 Basic header 传原始凭证，保留字符破坏 client_credentials/device-grant 注册（今日新开，v0.9.0） | OPEN | 无 |
| **S1** | [#11959](https://github.com/zeroclaw-labs/zeroclaw/issues/11959) Unix null-device 回归测试在大小写不敏感文件系统失败（今日新开） | OPEN | 无 |
| **S0→已修** | [#11540](https://github.com/zeroclaw-labs/zeroclaw/issues/11540) bubblewrap 沙箱检测失败回退应用层 | **今日关闭** | 已修复 |
| **S1→已修** | [#10854](https://github.com/zeroclaw-labs/zeroclaw/issues/10854) 工具输出中的字面 `[IMAGE:...]` 标记被提升为畸形 provider 图片 | **今日关闭** | 已修复 |
| P1→已修 | [#11813](https://github.com/zeroclaw-labs/zeroclaw/issues/11813) 插件出站连接在黑洞地址下卡死 | **今日关闭** | #11814 已合并 |
| P1 | [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) config flush 并发覆盖 | OPEN | 无 |
| S0 | [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) 知识图谱无 per-agent 归属（P1 标签但 S0 描述，v0.9.0） | OPEN | 无 |
| P3 | [#11817](https://github.com/zeroclaw-labs/zeroclaw/issues/11817) strict 签名模式下未签名插件被报为“未安装” | OPEN | 无 |
| P3 | [#11953](https://github.com/zeroclaw-labs/zeroclaw/issues/11953) WebSocket 握手重试未遵守 8 地址上限 | OPEN | 今日新开 follow-up |

## 6. 功能请求与路线图信号

今日新开的功能请求：

- **#11956** Microsoft MXC 沙箱后端（原生 Windows）— 扩展现有 auto/landlock/firejail/bubblewrap/docker 列表，填补 Windows 沙箱空白，与 #11540（Linux 沙箱检测）呼应，**采纳可能性中高**。
- **#11954** 长时运行 shell 任务（异步/同步模式 + 用户交互终端）— 与现有 tool:shell 体系（#11822 命令扫描器改造）方向一致，可能进入 v0.9.x 讨论。
- **#11958** `POST /api/config/migrate` 返回结构化迁移通知 — 与已合并的 #11218/#11217 schema v4 迁移工作直接衔接，**采纳可能性高**。
- **#11955** Signal 频道 listener 健康上报 — 补齐 dashboard channel readiness，小改动，易纳入。
- **#11891** RFC：入站 A2A 流式与任务生命周期 — 跨边界架构级 RFC，需较长评审周期。
- **#11890** 记忆整合的持久性标签 + 用户原话引用门槛 — memory 模块演进方向信号。

## 7. 用户反馈摘要

- **企业环境痛点突出**：企业 TLS 检查代理导致 Slack/WS 连接失败（#10712、#11443），是持续出现的真实场景诉求。
- **多 agent 安全隔离**：知识图谱全局共享（#9647）引发对多 agent 协作时数据边界的担忧，安全审计型贡献者（如 @belumume 的 #9394）活跃且反馈质量高。
- **插件生态成熟度**：Discord 插件从发布二进制安装的端到端验证（#10999）完成，用户对插件分发链路的信任度提升；但 strict 签名模式的 UX 边角问题（#11817）仍造成困惑。
- **跨平台兼容**：Alpine 容器构建（#11783）、大小写不敏感文件系统（#11959）等问题表明非主流平台用户真实存在且未被完全覆盖。
- **运维可观测性诉求**：健康检查、迁移通知结构化（#11955、#11958）反映 operator 角色对 dashboard/API 一致性的期望。

## 8. 待处理积压

- **#11234** [fix(rpc): queued session ownership](https://github.com/zeroclaw-labs/zeroclaw/pull/11234) — P1、release-gate、v0.9.0，XL 规模，**needs-maintainer-review 已持续 3 周以上**，阻塞 v0.9.0 身份与访问主线。
- **#11174** [capability-taking constructors](https://github.com/zeroclaw-labs/zeroclaw/pull/11174) — XL、v0.9.0 架构核心改造，needs-author-action，需推进。
- **#10407** [persistent session prompt attachments](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) — 8 月底开立至今近 2 个月，XL 规模，覆盖面极广，review 负担重。
- **#9647**（知识图谱归属，S0/P1）与 **#9284**（config flush 并发，P1）— 均为高风险安全/正确性问题，开立 3 个月左右仍 OPEN 且无关联 fix PR，**建议维护者优先排期**。
- **#9101**（签名机制整合，P1）— v0.8.7 发布前若不处理，下一版本将继续承担三套机制的 CI 成本。
- **#10210 / #10600** — 8-9 月开立的 needs-author-action PR，已临近 stale 边缘，建议作者回应或维护者接手。

---
*数据来源：zeroclaw-labs/zeroclaw GitHub，统计窗口 2026-10-21 至 2026-10-22。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-10-22** | 数据来源：github.com/NousResearch/hermes-agent

---

## 1. 今日速览

Hermes Agent 今日保持高度活跃：过去 24 小时内 Issues 更新 50 条（新开/活跃 39、关闭 11），PR 更新 50 条（待合并 48、合并/关闭 2），并连续发布 v0.22.3 / v0.22.4 两个补丁版本，节奏紧凑。议题焦点集中在**会话状态机（session fencing / admission_conflict / un-drainable sessions）**、**依赖安全漏洞积压**与 **Windows/桌面端安装更新体验**三大主题。新增 PR 质量较高，多个来自社区贡献者的精准修复（kanban respawn 正则、Teams 400 响应、CLI display 配置），显示社区参与健康。整体判断：项目处于**高活跃、快迭代**状态，但会话生命周期鲁棒性和依赖安全治理是当前两大技术债。

---

## 2. 版本发布

### v0.22.4（2026-10-21）
- 补丁版本。修复 Desktop 在输入框上方显示建议 pills 的问题，及若干插件与 Dashboard 小修复。
- 覆盖 CLI/installer、Microsoft Store 应用、Docker 与 Hermes Cloud 全渠道。
- 无破坏性变更，建议常规升级。

### v0.22.3（2026-10-21）
- 汇总性稳定版标签：**将 v0.22.2 以来合并的约 620 个 PR 收敛为稳定发布**，完整 curated release notes 随 v0.23.0 发布。
- 迁移注意：由于窗口内变更量大，生产环境建议在升级前查看 v0.23.0 的 curated notes，或先在 staging 验证。

链接：[v0.22.4](https://github.com/NousResearch/hermes-agent/releases) | [v0.22.3](https://github.com/NousResearch/hermes-agent/releases)

---

## 3. 项目进展

今日 PR 合并量偏低（仅 2 条合并/关闭），但待合并队列（48 条）包含多项高质量工作，主要推进方向：

**会话与网关鲁棒性**
- [#142859](https://github.com/NousResearch/hermes-agent/pull/142859)：新增 session 级协作式 subagent 取消 API（`POST /api/sessions/{id}/subagents/{id}/stop`），补齐 delegated 子代理生命周期管理。
- [#128901](https://github.com/NousResearch/hermes-agent/pull/128901)：修复持久化时间戳异常导致会话无法恢复的 `OverflowError`。
- [#142858](https://github.com/NousResearch/hermes-agent/pull/142858)：区分 supervisor 等待超时与真实任务失败，减少误报 error 通知。

**CLI / 配置体验**
- [#142857](https://github.com/NousResearch/hermes-agent/pull/142857)：修复 `display.compact` 不生效，并新增 `display.banner` / `display.composer_hints` 配置项。
- @33hodl 持续推进 CLI 文档补全系列（[#112553](https://github.com/NousResearch/hermes-agent/pull/112553)、[#112555](https://github.com/NousResearch/hermes-agent/pull/112555)、[#112556](https://github.com/NousResearch/hermes-agent/pull/112556)、[#134299](https://github.com/NousResearch/hermes-agent/pull/134299)、[#134300](https://github.com/NousResearch/hermes-agent/pull/134300)），系统性补齐约 19 个未文档化子命令。

**调度与修复精度**
- [#142860](https://github.com/NousResearch/hermes-agent/pull/142860)：修复 kanban respawn guard 正则误匹配 `host:403` 端口等 token 导致的错误阻断——典型的高质量社区修复。
- [#142856](https://github.com/NousResearch/hermes-agent/pull/142856)：压缩提交后预热本地模型 prefix cache，优化 `/compress` 后首 turn 延迟。

整体进展判断：处于 v0.23.0 发布前的收敛打磨期。

---

## 4. 社区热点

1. **[#141346](https://github.com/NousResearch/hermes-agent/issues/141346)（27 评论，OPEN，security/P3）** — Smart approval 模式自动批准了 osascript 命令，操控用户正在运行的 PowerPoint 并删除未保存内容，造成**不可恢复的数据丢失**。这是本日讨论最激烈的议题，直击 `approvals.mode: smart` 的安全边界：何时应对驱动 GUI 应用（AppleScript）的命令强制人工确认。**建议维护者优先回应**——这是用户信任类问题。

2. **[#122424](https://github.com/NousResearch/hermes-agent/issues/122424)（17 评论，已关闭）** — js-yaml/yaml 依赖钉在已知 CVE 区间。已关闭，反映依赖安全清理在推进（另见 #108219、#134394、#61098、#135795 多个安全依赖 issue 今日关闭）。

3. **[#79087](https://github.com/NousResearch/hermes-agent/issues/79087)（12 评论，OPEN，P1）** — Windows Desktop 运行时探测超时导致健康安装被路由到首次运行引导，提示覆盖重装。**全场唯一 P1**，且作者公开撤回了错误的双后端论断（经 `ParentProcessId` 测试证伪），讨论质量高。尚未见对应 fix PR。

4. **[#139532](https://github.com/NousResearch/hermes-agent/issues/139532) / [#142731](https://github.com/NousResearch/hermes-agent/issues/142731) / [#142844](https://github.com/NousResearch/hermes-agent/issues/142844)** — 同一类痛点：会话被 fence/pause 后**永久卡死、无 in-app 恢复手段**，用户强烈要求桌面端提供恢复 affordance。

---

## 5. Bug 与稳定性（按严重程度）

| 级别 | Issue | 问题 | Fix 状态 |
|---|---|---|---|
| P1 | [#79087](https://github.com/NousResearch/hermes-agent/issues/79087) | Windows 安装更新误判，健康安装被引导重装覆盖 | ⚠️ 无 PR |
| P2 | [#139532](https://github.com/NousResearch/hermes-agent/issues/139532) | 网关重启后 turn fence 为 unknown，会话输入队列永久阻塞 | ⚠️ 无 PR |
| P2 | [#142731](https://github.com/NousResearch/hermes-agent/issues/142731) | `admission_conflict` 暂停后永不恢复，后续 turn 全部 409 | ⚠️ 无 PR |
| P2 | [#142844](https://github.com/NousResearch/hermes-agent/issues/142844) | 本地会话路由条目缺失后永久 un-drainable，仅重启可恢复 | ⚠️ 无 PR |
| P2 | [#121880](https://github.com/NousResearch/hermes-agent/issues/121880) | 压缩边界切在 tool_call 上，Gemini 400 INVALID_ARGUMENT | ⚠️ 无 PR |
| P2 | [#142847](https://github.com/NousResearch/hermes-agent/issues/142847) | `hermes update` 失败（git merge-base 解析错误），只能全新安装 | ⚠️ 无 PR |
| P2 | [#142500](https://github.com/NousResearch/hermes-agent/issues/142500) | unified-runtime 重构回归：粘贴截图从桌面历史消失 | ⚠️ 回归，无 PR |
| P2 | [#142487](https://github.com/NousResearch/hermes-agent/issues/142487) | 入站消息含非本地 media 时整条丢弃（Matrix/WhatsApp） | 关联 #141932，无 PR |
| P2 | [#140265](https://github.com/NousResearch/hermes-agent/issues/140265) | 二次 profile reconciliation 抹除 lazy MCP 工具缓存 | ⚠️ 无 PR |
| P2 | [#122786](https://github.com/NousResearch/hermes-agent/issues/122786) | Linux 路径超 103 字节导致浏览器工具全部失败（含 Cloud 会话） | ⚠️ 无 PR（👍2） |
| P3/security | [#142572](https://github.com/NousResearch/hermes-agent/issues/142572) | 会话工作区未强制执行，agent 静默编辑了另一个 clone 达 47 分钟 | ⚠️ 无 PR |
| P3/security | [#141346](https://github.com/NousResearch/hermes-agent/issues/141346) | smart approval 自动批准 osascript 造成数据丢失（见热点） | ⚠️ 无 PR |

**结论**：会话状态机类 P2 问题集中爆发且均无修复 PR，是当前最大稳定性风险面。

---

## 6. 功能请求与路线图信号

- **桌面会话管理 UX 重构**（[#115140](https://github.com/NousResearch/hermes-agent/issues/115140)，per-bot 会话 tab strip）：与 #139532/#142731 的“会话卡死无恢复入口”痛点互补，且 #142835（Dashboard Recent sessions 不可点击）同属桌面会话导航问题，可能随 v0.23 桌面改版一并处理。
- **多 profile 协作能力**（[#128411](https://github.com/NousResearch/hermes-agent/issues/128411)，satellite profile 复用其他 profile bot 的 outbound grant）：multiplex_profiles 已是唯一网关模式，此需求是自然延伸，纳入概率较高。
- **本地模型体验优化**：PR #142856（prefix cache 预热）显示团队在积极优化本地部署场景，方向明确。
- **Cron 与 ESTOP 语义收紧**（[#142820](https://github.com/NousResearch/hermes-agent/issues/142820)：`hermes cron run` 应尊重全局急停）——小而明确的治理改进，易被采纳。
- **文档补全系列 PR**（@33hodl）量大且系统，大概率随 v0.23.0 一并合入。

---

## 7. 用户反馈摘要

- **痛点集中区**：
  - “会话卡死只能重启/终端命令救”——桌面用户反复表达对 in-app 恢复机制的渴望（#139532、#142731）。
  - “升级不敢升”——Windows 安装误判重装（#79087）与 update 失败（#142847）直接打击升级信心。
  - “smart approval 太激进”——数据丢失事故（#141346）后用户对自动化审批的信任下降。
  - i18n 用户（PM 安装环境）所有翻译字符串显示原始 key（#128799），体验破碎。
- **使用场景信号**：多平台消息网关（Matrix DM、WhatsApp、WeCom、Discord）是重度使用路径，但桥接层的 media 处理与会话 key 归属 bug（#142487、#141429、#29667）暴露该层成熟度不足。
- **满意面**：社区贡献修复描述精准、可复现度高（如 #142860、#142855）；v0.22.3 一次性收敛 620 PR 显示主干合并吞吐极强。

---

## 8. 待处理积压（建议维护者关注）

| 项目 | 问题 | 状态 |
|---|---|---|
| [#79087](https://github.com/NousResearch/hermes-agent/issues/79087) | **唯一 P1**，8 月开题至今 2.5 个月未修，讨论已收敛到根因（探测超时路径） | 应指派修复 |
| [#29667](https://github.com/NousResearch/hermes-agent/issues/29667) | WeCom 846609 静默投递失败，**5 月开题至今 5 个月** | 中文企业用户重要通道，长期无解 |
| [#122786](https://github.com/NousResearch/hermes-agent/issues/122786) | 浏览器 socket 路径上限，9 月底开题，影响 Cloud 会话 | 有 👍 支持但无进展 |
| [#64101](https://github.com/NousResearch/hermes-agent/issues/64101) | hermes-tools MCP server 说明书与实际能力不符，7 月开题 | 文档级修复，成本低 |
| PR [#110554](https://github.com/NousResearch/hermes-agent/pull/110554) | 解释器关闭期 tool submit 崩溃修复，9 月中开题至今未审 | 建议排期 review |
| PR [#118111](https://github.com/NousResearch/hermes-agent/pull/118111) | Windows `.git/index.lock` 残留修复，9 月下旬至今未合 | Windows 稳定性相关 |

**健康度总结**：吞吐与社区参与优秀（A），依赖安全治理明显改善（多个 CVE issue 本日关闭），但会话状态机 P2 集群无修复 PR + 单一 P1 长期积压（B-），建议作为 v0.23.0 的优先收敛目标。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-10-22

## 1. 今日速览

PicoClaw 今日整体活跃度处于**低热度维护状态**：过去 24 小时无新 Issue、无新版本发布，仅有 3 条历史 PR 被关闭（非合并类清理居多）。值得注意的是，三条被关闭的 PR 均为 2026 年 2-3 月创建、拖延 7 个月以上才处理的积压项，表明维护团队近期可能在批量清理陈旧工作队列。社区侧今日无新增讨论，短期内需关注核心维护者的后续动作以判断项目节奏。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日关闭 3 条 PR（待合并 0 条，新合并 0 条）：

- **[PR #536](https://github.com/sipeed/picoclaw/pull/536)** — `[WIP] feat(security): agent sandbox system (docker)`
  作者 @0x5487，标签 `enhancement / agent / docker`。旨在为 Agent 引入基于 Docker 的沙箱隔离系统。长期处于 WIP 状态后被关闭，Agent 沙箱安全能力**未能落地**，相关需求仍待社区重新认领。

- **[PR #1268](https://github.com/sipeed/picoclaw/pull/1268)** — `imessage support, stop command, some logs`
  作者 @swordandart，标签 `enhancement / provider / channel / go`。功能较全面：新增 iMessage 渠道支持、LLM API 调用日志、会话日志、stop 命令、隐私数据清洗器。被关闭意味着 iMessage 渠道扩展暂未进入主线。

- **[PR #1545](https://github.com/sipeed/picoclaw/pull/1545)** — `fix: merge PR #1500 #1490 #1488 #1487 #1485`
  作者 @xuwei-xy，尝试将 5 个修复类 PR 汇总合并。该整合 PR 本身被关闭，需确认这批修复是否已通过其他途径进入主干。

**总体评估**：今日为净清理日，无实质功能推进；相反，沙箱安全、iMessage 渠道两个方向的功能贡献被放弃，短期内构成路线图上的缺口。

## 4. 社区热点

今日无活跃讨论。过去 24 小时 Issues 更新为 0，PR 评论无新增，无 👍 反应变化。社区热度处于低谷期。

## 5. Bug 与稳定性

- 今日**无新增 Bug 报告**（新开 Issue 为 0）。
- 历史遗留关注点：[PR #1545](https://github.com/sipeed/picoclaw/pull/1545) 汇总的 #1500 / #1490 / #1488 / #1487 / #1485 五个修复 PR 的最终去向不明确，**建议维护者确认这些修复是否已合入主线**，否则可能存在已知 Bug 未修复的风险。

## 6. 功能请求与路线图信号

今日无新功能请求。从被关闭 PR 可提取的路线图信号：

- **Agent 沙箱安全（Docker 隔离）**：#536 关闭后，该方向无在途实现，但对 AI Agent 项目而言是高价值能力，可能成为后续招募贡献者的重点方向。
- **iMessage 渠道 + 隐私清洗器**：#1268 关闭表明多渠道扩展（尤其 Apple 生态）尚未进入优先级；其中“sanitizer for privacy”是差异化亮点，值得单独剥离重提。
- **可观测性**（LLM 调用日志、会话日志）：多个 PR 均涉及，说明社区有持续需求，预计会以其他形式回归。

## 7. 用户反馈摘要

今日 Issue 评论为空，无法提炼新的用户反馈。间接信号：贡献者持续在日志/隐私清洗（#1268）和安全隔离（#536）上投入，反映出**自部署用户对隐私保护和 Agent 执行安全的关注**是当前主要痛点。

## 8. 待处理积压

以下为长期挂起后今日集中处理的项，以及仍需关注的遗留：

| 项目 | 状态 | 说明 |
|---|---|---|
| [#536](https://github.com/sipeed/picoclaw/pull/536) Agent 沙箱 | 已关闭（WIP 7 个月） | 建议维护者说明关闭原因，避免贡献者流失 |
| [#1268](https://github.com/sipeed/picoclaw/pull/1268) iMessage 支持 | 已关闭（挂起 7 个月） | 可考虑拆分为独立小 PR 重新提交 |
| [#1545](https://github.com/sipeed/picoclaw/pull/1545) 修复整合 | 已关闭 | **待确认** #1485–#1500 系列修复是否已合入，存在修复丢失风险 |

**健康度提示**：PR 平均处理周期超过 7 个月、且以关闭而非合并收尾，提示项目响应速度偏慢，建议维护团队公布 issue/PR 分诊策略，重建贡献者信心。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-10-22

## 1. 今日速览

NanoClaw 今日保持高度活跃：过去 24 小时内共有 54 条 Issue/PR 更新（Issues 4 条、PRs 50 条），其中新开/活跃 52 条，1 条 Issue 关闭，11 条 PR 已合并/关闭，无新版本发布。社区贡献持续涌入，尤其集中在渠道适配器（Telegram、WhatsApp、Signal、Google Chat）的稳定性修复和容器基础镜像升级。核心团队成员 @glifocat 表现突出，一天内提交多个安全与架构级 PR（#4168、#4171、#4172、#4178）。整体健康度良好，但 39 个待合并 PR 的积压和多个 `triage/needs-author` 标签显示维护者审阅压力较大。

## 2. 版本发布

今日无新 Release。值得注意的是，机器人提交了 [PR #4179](https://github.com/nanocoai/nanoclaw/pull/4179)，将 hardened agent 镜像刷新为 `v2026.10.0-20261021T1608`（sha256:abf6c404…），暗示 `v2026.10.x` 系列的镜像更新仍在滚动推进中。

## 3. 项目进展

今日有 11 条 PR 合并/关闭，主要集中在：

- **审批卡片安全与一致性修复**：核心团队双 PR 协同——[#4168](https://github.com/nanocoai/nanoclaw/pull/4168)（approvals 侧）与 [#4171](https://github.com/nanocoai/nanoclaw/pull/4171)（channels 侧，覆盖 WhatsApp/iMessage/Web chat）让点击的卡片只有在 host 接受点击后才改变状态，修复了“渠道提前关闭问题导致 host 拒绝后请求悬死”的安全/会话缺陷。
- **Skill 架构演进**：[#4178](https://github.com/nanocoai/nanoclaw/pull/4178) 将 Google Chat 适配器从 `channels` 分支迁移到 skill payload，验证“渠道修复只需一个 PR”的新工作流，是渠道交付架构的重要一步；[#4172](https://github.com/nanocoai/nanoclaw/pull/4172) 清理了 `/add-opencode` 中不可达的附件代码路径。
- **长期贡献被推进**：多个 9-10 月提交的社区修复 PR（如 #3952 容器挂载点、#4019 systemd 等待 Docker、#4018 Signal 单调时钟）今日均有更新，显示审阅队列在持续消化。

## 4. 社区热点

- **[#3456](https://github.com/nanocoai/nanoclaw/issues/3456)**（7 评论，已关闭）：Discord 审批卡片因冗余 `value` 参数损坏 `custom_id`，导致静默拒绝和重复重发、点击解析到错误选项。高严重度 bug 已关闭，反映审批链路是用户高频反馈点。
- **[#3529](https://github.com/nanocoai/nanoclaw/issues/3529)**（5 评论，开放）：`update-nanoclaw` skill 刷新误判本地自定义 adapter 为 skill 产物，导致验证失败或被覆盖且无法退出。诉求核心：**自建适配器用户的更新安全性和可扩展性**，与 #4178 的 skill payload 化方向直接相关，值得维护者关联处理。
- **[#4175](https://github.com/nanocoai/nanoclaw/issues/4175)** / **[#4173](https://github.com/nanocoai/nanoclaw/issues/4173)**：昨日新开，今日已在社区传播，分别涉及 PDF 读取和长任务会话管理（见下文）。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| 高 | [#4175](https://github.com/nanocoai/nanoclaw/issues/4175) | Agent 镜像从未安装 poppler-utils，Claude 无法读 PDF（Read tool 失败） | 无专门 fix PR；但 [#3996](https://github.com/nanocoai/nanoclaw/pull/3996)/[#1778](https://github.com/nanocoai/nanoclaw/pull/1778) 的基础镜像重构可顺势引入 |
| 高（已关闭） | #3456 | Discord 审批 custom_id 损坏 | 已关闭 |
| 中 | #3529 | 升级刷新覆盖/阻断本地 adapter | 开放，无 fix PR |
| 中 | [#4168](https://github.com/nanocoai/nanoclaw/pull/4168)/#4171 | 卡片点击竞态（安全标签 area/security） | 修复 PR 已提交 |

待合并修复 PR 覆盖面广：Telegram 长轮询超时（[#4031](https://github.com/nanocoai/nanoclaw/pull/4031)）、消息投递失败通知 agent（[#4032](https://github.com/nanocoai/nanoclaw/pull/4032)）、长选项列表分行（[#4030](https://github.com/nanocoai/nanoclaw/pull/4030)）、含下划线链接被丢弃（[#4029](https://github.com/nanocoai/nanoclaw/pull/4029)）、多张待答问题卡片（[#3752](https://github.com/nanocoai/nanoclaw/pull/3752)）、CLI groups restart 目标错误（[#4026](https://github.com/nanocoai/nanoclaw/pull/4026)）等。

## 6. 功能请求与路线图信号

- **[#4173](https://github.com/nanocoai/nanoclaw/issues/4173)**（capability）：允许 agent 自主重置会话并从 handover 文件恢复，解决长研究型任务上下文窗口填满后自动 compaction 丢失细节的问题。这是典型的高级用户（长期运行 agent）需求，方向与项目“agent 自治”定位一致，**较可能被纳入下一版本规划**。
- **渠道 skill payload 化**（#4178）+ 本地 adapter 保护诉求（#3529）共同指向路线图信号：**渠道适配器将逐步从核心代码迁移到可独立交付的 skill 体系**。
- **容器基础镜像收敛**：#3996、#1778、#2307 三个 PR 均指向 `node:24-trixie-slim`，社区与维护者方向一致，合并概率高。

## 7. 用户反馈摘要

- **痛点一：长任务上下文管理失控**（#4173）——用户希望对 compaction 有确定性控制，愿意手写 handover 文件但缺少官方恢复机制。
- **痛点二：升级破坏本地定制**（#3529）——深度定制用户（自写 adapter）害怕升级覆盖自己的工作，“无 opt-out”是核心抱怨。
- **痛点三：文档/附件能力缺口**（#4175）——用户直接给 agent 发 60 页 PDF 询问内容，期望开箱即用，反映多模态输入的默认能力预期。
- **满意度信号**：Issue 报告质量普遍很高（带 commit、平台、复现细节），显示用户群体偏专业开发者；审批/ask_question 交互链路是被反复打磨的高价值场景（#3456、#4030、#4156、#4168 连续修复）。

## 8. 待处理积压

- **[#2307](https://github.com/nanocoai/nanoclaw/pull/2307)**（2026-05-06 开启，已 5 个多月）与 **[#1778](https://github.com/nanocoai/nanoclaw/pull/1778)**（2026-04-15 开启，6 个多月）：两个功能重叠的 trixie 基础镜像升级 PR 长期悬置，且与较新的 #3996 三方重复——建议维护者合并收敛为一个方案，尽快落地（还能顺带解决 #4175 的 poppler 缺失）。
- **[#3752](https://github.com/nanocoai/nanoclaw/pull/3752)**（9 月 9 日，标记 `triage/needs-author`）：WhatsApp 多卡片待答问题，等待作者响应。
- **[#3952](https://github.com/nanocoai/nanoclaw/pull/3952)**（9 月 28 日，`needs-author`）：容器嵌套挂载点权限修复，影响 rootful Docker 场景，建议优先跟进。
- 多个 `needs-author` PR（#4019、#4022、#4030-#4032 等）堆积，维护者审阅带宽是当前项目最大的瓶颈信号。

---
*数据来源：NanoClaw GitHub 仓库过去 24 小时活动统计。链接均指向 nanocoai/nanoclaw。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-10-22）

## 1. 今日速览

- 过去 24 小时项目处于**低强度活跃**状态：0 条 Issue 更新（无新增、无关闭），0 个新版本发布，但 50 条 PR 有更新（全部为待合并状态，无任何 PR 被合并或关闭）。
- PR 更新主要表现为存量大型 PR 的活动（CI 重跑或分支同步），包括 reborn Agent 循环改进、WebUI 设计系统治理、依赖升级等长期分支。
- 当前积压的待合并 PR 达 50 条，其中含多个 XL 级别、中风险的核心功能 PR，合并吞吐量为零，**评审瓶颈值得关注**。
- 无新 Bug 报告、无用户 Issue 反馈，今日数据无法反映终端用户侧动态。

## 2. 版本发布

今日无新版本发布。最新 Release 记录为空。

## 3. 项目进展

今日**无 PR 合并或关闭**，项目主干代码无实质推进。但以下存量 PR 保持活跃，代表当前主要工作线：

- **Agent 能力（reborn）**：
  - [#5450](https://github.com/nearai/ironclaw/pull/5450)：read/grep 输出精简（frugal default），减少跨轮次携带的上下文量；与 #5435 的压缩预算方案形成对照实验。
  - [#6093](https://github.com/nearai/ironclaw/pull/6093)：Agent 循环新增 self-verification（自验证）pass 及 `benchmark_default` profile。
  - [#6232](https://github.com/nearai/ironclaw/pull/6232)：自动激活 web-access 与 Brave 支持的 `web_search`，提升 Agent 真实联网检索可发现性。
- **上下文管理**：[#7976](https://github.com/nearai/ironclaw/pull/7976) 按模型上下文窗口动态推导压缩阈值（16k 保留 + 20k 近期 token）。
- **WebUI 体验**：[#8010](https://github.com/nearai/ironclaw/pull/8010)（XL，核心贡献者）统一 session-event 传输并实现 run 完成通知；[#7516](https://github.com/nearai/ironclaw/pull/7516) 为 IronHub Agent 链接补齐 WebUI 运维界面。
- **评估驱动**：[#5298](https://github.com/nearai/ironclaw/pull/5298) 汇总 harness 修复做聚合 benchmark 评估（明确不直接合并）。

整体来看，工作重心在 **Agent 评测优化（hillclimb）、上下文经济性、WebUI 前端架构** 三条线上，但今日无落地进展。

## 4. 社区热点

今日无新 Issue、无新增评论数据，无法识别讨论热点。从近期活跃 PR 的主题分布看：

- **@pranavraja99** 的 reborn/hillclimb 系列（#5450、#5353、#5298、#6093）是最密集的开发线，方法论上高度依赖 PinchBench 实证数据，反映团队对 **Agent 评测分数驱动的迭代**诉求。
- **@dependabot** 集中更新依赖：[#8140](https://github.com/nearai/ironclaw/pull/8140)（serde_json）、[#8141](https://github.com/nearai/ironclaw/pull/8141)（tokio 生态 5 项）、[#8152](https://github.com/nearai/ironclaw/pull/8152)（rustls）、[#8150](https://github.com/nearai/ironclaw/pull/8150)（multidict），依赖卫生状况良好。

## 5. Bug 与稳定性

今日无新 Bug 报告。存量修复 PR（按影响程度）：

1. **高影响（Agent 任务级失败）**：[#5353](https://github.com/nearai/ironclaw/pull/5353) — `http.save` 拒绝大文件下载导致 Agent 循环超时、任务评 0 分（PinchBench 实证），已有 fix PR 待合并。
2. **崩溃/panic 级**：[#8056](https://github.com/nearai/ironclaw/pull/8056) — 修复嵌入式工具结果文本格式错误引发 host-api panic，已有 fix PR。
3. **兼容性**：[#7974](https://github.com/nearai/ironclaw/pull/7974) — 旧版无 kind 标签 observation 的安全投影；[#7945](https://github.com/nearai/ironclaw/pull/7945) — MCP 大小写敏感工具名在重启后失效问题。

## 6. 功能请求与路线图信号

今日无新功能请求。从 PR 流向可读出的路线图信号：

- **Agent 评测闭环**：self-verification（#6093）+ 聚合评估（#5298）+ 上下文精简（#5450），指向“可量化的 Agent 质量提升”。
- **WebUI 产品化**：设计系统治理（[#7994](https://github.com/nearai/ironclaw/pull/7994) DESIGN.md + Storybook）、Chromatic CI（[#7831](https://github.com/nearai/ironclaw/pull/7831)）、运行通知（#8010），前端正在系统化建设，预计构成下个版本的重要部分。
- **架构文档化**：[#7510](https://github.com/nearai/ironclaw/pull/7510) Runtime-Swappable Components 设计文档，暗示运行时可插拔架构是中期方向。
- **学习与记忆**：[#7958](https://github.com/nearai/ironclaw/pull/7958) 共享 review router，Agent 后天学习能力处于早期探索（默认关闭）。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼用户反馈。间接信号（来自 PR 描述）：

- PinchBench 评测暴露的 Agent 实际使用痛点：大文件下载直接导致任务失败（#5353）、压缩驱逐引发重读与质量下降（#5450 背景说明）。
- 运维痛点：部署方无法在 WebUI 完成 IronHub Agent 链接，必须依赖 CLI（#7516）。

## 8. 待处理积压

⚠️ **核心风险：50 条 PR 全部待合并、今日零吞吐**，需维护者重点关注：

- **最久积压**：#5353、#5298（2026-06-26 创建，近 4 个月未合并）；#5450（06-30）；#6093（07-14）；#6232（07-18）。
- **大型高风险 PR 评审压力大**：#8010、#7831、#7516、#7958、#7976 均为 XL 级、部分 medium risk。
- **堆叠依赖**：#5450 依赖 #5149，#7114 依赖 #7112，上游不合并将阻塞下游。
- 4 条 dependabot PR（#8140/#8141/#8150/#8152）为低风险例行更新，建议尽快批量处理。

**健康度小结**：开发投入持续、方向清晰，但合并管道堵塞、Issue 侧零活动（可能是数据采集缺口或社区互动确实偏弱），建议优先疏通 PR 评审积压。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-10-22）

## 1. 今日速览

项目今日保持高度活跃，过去 24 小时内共有 **12 条 Issue/PR 更新**（1 个 Issue、11 个 PR），其中 9 个 PR 已合并/关闭，开发节奏紧凑。主要贡献者 @btc69m979y-dotcom、@fisherdaddy、@Mind-Hand 集中在 companion（悬浮球）、browser、companion 模型解析、用量链路等方面推进修复与功能落地。今日无新版本发布，但多条主进程与渲染层修复的集中合入，预示一次版本迭代可能临近。社区侧仅新增 1 条功能请求，反馈量平稳。

## 2. 版本发布

今日无新版本发布，本节省略。

## 3. 项目进展

今日合并/关闭 9 个 PR，整体进展显著：

- **#2922**（fix(tools)）：修复 Windows 下 browser 短暂超时后持续不可用、图片阻塞导航、web_fetch 未落实全局代理等问题，并细化工具结束事件错误分类，避免误判为认证/网关故障。关联 #2866 用量埋点后续。
- **#2920**（feat(ui)）：刷新专家广场与管理页面，统一 Kits、Skills、Connectors、定时任务的紧凑搜索头与卡片样式。
- **#2918**（fix(media)）：修复图片/视频生成的确认与进度反馈，视频确认增加额度预估。
- **#2919**（fix(companion)）：修复全局默认模型为“快速/旗舰”预设时悬浮球快捷问答被服务端拒绝的问题，增加预设 resolve 环节。
- **#2917**（fix(companion)）：悬浮球入口改为等待 OpenClaw gateway 进入 `running` 后再显示，避免启动期提交被拒。
- **#2916**（fix(experts)）：恢复被 `ENABLE_EXPERT_PLAZA_UI` 隐藏的专家广场入口（侧边栏、任务专家选择器、Agent 创建对话框）。
- **#2915**（feat(usage)）：原生 IM 与定时任务运行现在在首次模型请求前注册会话与用量上下文，每次 cron 执行获得独立 trace，并打通 Portal 用量详情链接。
- **#2914**（fix(auth)）：修复离线启动后重连仅重试模型、账号数据不完整的问题，现重连时完整恢复账号。
- **#2913**（feat(browser)）：内置浏览器成为 Agent 网页访问默认选项，不再拉起独立 Chrome 窗口，并附带迁移逻辑。

**小结**：悬浮球（companion）、浏览器工具链、账号与用量链路三条线均取得实质性收敛，产品“常驻工具”体验明显改善。

## 4. 社区热点

- **Issue [#2921](https://github.com/netease-youdao/LobsterAI/issues/2921)**（今日唯一新 Issue，1 条评论）：用户 @heerey525 请求增加“退出前不再确认”设置项，跳过 Cmd+Q 二次确认弹窗。诉求本质是高频启停场景下的交互摩擦，并精准定位到 `appQuitConfirmation.js`。这是典型的“常驻工具用户”体验优化信号，实现成本低，很可能被快速采纳。

今日 PR 评论数据缺失，无其他高热度讨论。

## 5. Bug 与稳定性

今日无用户直接报告的崩溃类 Bug，但多个已合并 PR 修复了此前的稳定性问题（按严重程度）：

| 严重度 | 问题 | 修复状态 |
|---|---|---|
| 高 | #2914 离线启动后账号数据部分丢失，重启前模型/资料不可用 | ✅ 已修复（PR #2914） |
| 高 | #2919 快捷问答使用预设模型名被服务端拒绝 | ✅ 已修复（PR #2919） |
| 中 | #2917 gateway 启动期悬浮球提交即被拒 | ✅ 已修复（PR #2917） |
| 中 | #2922 Windows browser 恢复失败、web_fetch 代理不生效 | ✅ 已修复（PR #2922） |
| 中 | #2918 视频生成提交后进度缺失、取消按钮失效 | ✅ 已修复（PR #2918） |

## 6. 功能请求与路线图信号

- **退出免二次确认**（Issue #2921）：单一开关设置项，改动局部，纳入下一版本概率高。
- **内置浏览器默认化**（PR #2913 已合并）表明“应用内闭环”是明确产品方向，进一步佐证“退出摩擦”类请求会被认真对待。
- **PR #2926（数字员工/专家团队/能力市场）** 虽为 stale 状态，但与 #2916 恢复专家广场入口、#2920 广场 UI 刷新相呼应，“能力市场”方向疑似在官方侧渐进落地，值得持续观察。

## 7. 用户反馈摘要

- 用户将 LobsterAI 客户端定位为**常驻工具**，一天多次启停，任何重复性确认弹窗都被视为纯摩擦（#2921）。
- 反馈质量较高：用户能定位到具体源码文件并提出设置项级别的解决方案，说明用户群中包含深度用户/开发者。
- 从今日修复的 PR 可间接推断用户痛点：启动期入口误触发、预设模型请求被拒、生成任务反馈不清等“打磨期”问题正在被集中清理。

## 8. 待处理积压

- **PR [#2721](https://github.com/netease-youdao/LobsterAI/pull/2721)**（stale，2026-09-20 开）：IM 配置免重启 gateway 生效。改动价值明确（避免整网关重启打断任务），已搁置约一个月，建议维护者评审或关闭。
- **PR [#2726](https://github.com/netease-youdao/LobsterAI/pull/2726)**（stale）：数字员工/专家团队/能力市场大特性。与近期专家广场动作相关，需明确采纳与否，避免社区工作白费。
- Issue #2921 为今日新增，暂不算积压，但建议尽快回复以示响应。

---

**健康度评估**：开发活跃度高（日合并 9 PR），修复-反馈闭环良好，无阻塞级缺陷；主要风险在两个大 PR 的长期搁置，建议维护者尽快给出处置意见。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-10-22

## 1. 今日速览

- 过去 24 小时项目整体活跃度**偏低**：Issues 更新 0 条，PR 更新仅 1 条，无新版本发布。
- 唯一的动态来自 maintainer @penso 的待合并 PR [#1313](https://github.com/moltis-org/moltis/pull/1313)，聚焦 TLS 证书验证与浏览器 profile 锁竞态修复，处于代码迭代阶段。
- Issue 侧零新增、零关闭，社区讨论静默，可能是版本间歇期或用户群处于观望状态。
- 综合判断：项目处于**低强度维护节奏**，需关注后续是否有 release 跟进以恢复活跃度。

## 2. 版本发布

今日无新版本发布，最新 Releases 列表为空。暂无迁移或破坏性变更事项。

## 3. 项目进展

今日无 PR 合并/关闭，仅 1 条待合并 PR 有更新：

- **[#1313](https://github.com/moltis-org/moltis/pull/1313) fix(tls): update certificate verifier and roots for CA distrust**（@penso，OPEN）
  - 修复 TLS 层证书验证器与受信任根证书集合（响应 CA 不信任问题），属于安全合规类修复。
  - 附带修复 coverage 测试发现的**浏览器 profile 锁竞态**：改用 RAII guard 在 drop 时显式解锁，容器清理未确认时保留锁。
  - 新增 3 个确定性回归测试，覆盖锁释放、next-owner 排斥与 quarantine 场景，测试质量意识较好。

> 注：PR 标题（TLS/CA）与摘要（profile 锁）描述不完全一致，可能是 PR 描述模板复用所致，建议关注实际 diff 内容。

## 4. 社区热点

今日无活跃 Issues 或高评论 PR，社区讨论热度为零。#1313 是唯一有更新的条目（👍 0，评论未记录），暂无用户诉求信号。

## 5. Bug 与稳定性

今日无用户报告的新 Bug。值得注意的是 #1313 属于**主动修复**（由内部 coverage 测试发现而非用户报告），包含：

| 问题 | 类型 | 严重程度 | 状态 |
|---|---|---|---|
| 浏览器 profile 锁竞态（重复描述符） | 并发竞态 | 中-高（可致数据竞争/崩溃） | 已有 fix PR #1313，待合并 |
| CA distrust 相关证书链验证 | TLS/安全 | 中 | 同 PR 处理，待合并 |

## 6. 功能请求与路线图信号

今日无新功能请求。从 #1313 可推测近期维护重点为：**安全合规（证书信任链）与并发稳定性**，下一版本（如发布）大概率包含这两类修复。

## 7. 用户反馈摘要

今日 Issues 评论为零，无法提炼用户反馈。建议通过 Discord/论坛等其他渠道交叉验证用户声音。

## 8. 待处理积压

- 当前数据快照中 Issues 为 0 条，无可见的长期未响应积压。
- 提醒：[#1313](https://github.com/moltis-org/moltis/pull/1313) 已 OPEN 且今日仍在更新，建议维护者尽快 review/merge，避免安全类修复长期悬置；合并后建议推进一次 release 让修复触达用户。

---
*数据来源：Moltis GitHub API 快照（2026-10-22）*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-10-22

## 1. 今日速览

CoPaw（QwenPaw）今日保持高活跃度：过去 24 小时 Issues 更新 16 条（新开/活跃 10、关闭 6），PR 更新 30 条（待合并 21、合并/关闭 9），无新版本发布。社区贡献持续活跃，今日新增多个来自社区的功能型 PR（会话搜索、PawApp 参考集成、许可证合规清理等）。当前开发重点集中在三大方向：PawApp 应用控制平面重构（#7874、#8363、#8364）、插件系统热重载（#7565）与通道插件化（#8187）。同时 2.2.x 版本仍有稳定性问题涌入，尤其是容器化部署、飞书通道与定时任务相关 Bug。

## 2. 版本发布

今日无新版本发布。最新版本仍为 2.2.2（2026-10-15）。注：PR [#8357](https://github.com/agentscope-ai/QwenPaw/pull/8357) 正在推进 QwenPaw Creator 插件 2.0.1 → 2.0.2 的发布。

## 3. 项目进展

今日合并/关闭 9 个 PR，重点包括：

- **安全决策模型重构落地**：[#8356](https://github.com/agentscope-ai/QwenPaw/pull/8356)（provider 管理的 AgentScope classifier，已关闭）后继为 [#8360](https://github.com/agentscope-ai/QwenPaw/pull/8360)（使用 `JevClassifierModel`），工具审批链路向 AgentScope 内建实现迁移。
- **许可证合规**：[#8366](https://github.com/agentscope-ai/QwenPaw/pull/8366) 移除 GPL-3.0 的 `html2text` 依赖，改用 stdlib 转换器，消除与 Apache-2.0 的许可冲突。
- **PawApp 生态扩张**：[#8364](https://github.com/agentscope-ai/QwenPaw/pull/8364)（File-browser 参考集成）与 [#8363](https://github.com/agentscope-ai/QwenPaw/pull/8363)（Data App 接入任务契约）在共享 Host 契约上快速叠加。
- **新功能 PR**：[#8367](https://github.com/agentscope-ai/QwenPaw/pull/8367) 为聊天增加关键词与 agentic 内容搜索，解决“自动标题不含关键词、搜不到对话”的痛点。
- **体验修复**：[#8362](https://github.com/agentscope-ai/QwenPaw/pull/8362)（首次贡献者，修复 Issue [#8351](https://github.com/agentscope-ai/QwenPaw/issues/8351)）将草稿按 agent+session 存储。

整体看，项目在架构层面（插件化、PawApp、通道隔离）持续推进大尺寸 PR（多个 size/XXXL 在途），功能版图明显扩张。

## 4. 社区热点

- **[#338 webhook 功能请求](https://github.com/agentscope-ai/QwenPaw/issues/338)**（👍1，评论 10，更新于今日）：长青议题再获讨论。用户希望通过 webhook/API key 轮询机制与 CoPaw 双向集成，“发消息→拿 key→查结果”的异步模式反映外部系统集成的强烈需求。
- **[#8359 Hub 容器化部署失败](https://github.com/agentscope-ai/QwenPaw/issues/8359)**（今日更新，评论 2）：readiness 探测硬编码 `127.0.0.1` 导致容器内 Docker 运行时无法启动，直接打击维护者此前推荐的部署方式（#8256），是今日最紧迫的部署体验问题。
- **[#6973 阿里云百炼 token plan 支持](https://github.com/agentscope-ai/QwenPaw/issues/6973)**（已关闭，评论 6）：QwenPaw Creator 与百炼计费的兼容诉求，反映出国内用户占比高。
- **[#8351 草稿跨会话泄漏](https://github.com/agentscope-ai/QwenPaw/issues/8351)**（评论 3）：用户报出精确的 localStorage key 缺陷，当天即有社区 PR #8362 修复——社区响应速度值得肯定。

## 5. Bug 与稳定性（按严重程度）

| 级别 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#8350 飞书通道同步网络调用阻塞主事件循环](https://github.com/agentscope-ai/QwenPaw/issues/8350)：网络不通时 `/api/healthz` 超时、SIGTERM 无法退出，服务卡死 | 无 fix PR |
| 🔴 高 | [#8359 Hub 容器内 readiness 硬编码 127.0.0.1](https://github.com/agentscope-ai/QwenPaw/issues/8359)，Docker 运行时全部启动失败 | 无 fix PR |
| 🔴 高 | [#8279 ReMe watcher 耗尽 AnyIO 线程限制器](https://github.com/agentscope-ai/QwenPaw/issues/8279)，长期运行后同步 HTTP 端点全部停滞 | 无 fix PR |
| 🟠 中 | [#8368 删除当前选中会话报 404](https://github.com/agentscope-ai/QwenPaw/issues/8368)（今日新报） | 无 fix PR |
| 🟠 中 | [#8365 Matrix 通道每次启动密码登录、E2EE 密钥不再上传](https://github.com/agentscope-ai/QwenPaw/issues/8365)（今日新报） | 无 fix PR |
| 🟠 中 | [#8361 自动记忆搜索同轮重复调用且拦截后无法回复](https://github.com/agentscope-ai/QwenPaw/issues/8361) | 无 fix PR |
| 🟡 已修 | [#8351 草稿跨会话泄漏](https://github.com/agentscope-ai/QwenPaw/issues/8351) → fix PR [#8362](https://github.com/agentscope-ai/QwenPaw/pull/8362) | ✅ |
| 🟡 已修 | [#8298 send_file_to_user 发视频永久卡死会话（422）](https://github.com/agentscope-ai/QwenPaw/issues/8298) → fix PR [#8299](https://github.com/agentscope-ai/QwenPaw/pull/8299) | ✅ |

今日关闭的多个稳定性 Issue（[#8252](https://github.com/agentscope-ai/QwenPaw/issues/8252) Agent 间调用静默取消、[#8225](https://github.com/agentscope-ai/QwenPaw/issues/8225) 热重载取消 cron、[#8249](https://github.com/agentscope-ai/QwenPaw/issues/8249)/[#8340](https://github.com/agentscope-ai/QwenPaw/issues/8340) 定时任务编辑 Bug）表明 2.2.x 的 cron/生命周期问题正在批量收敛，但容器与通道层面的高严重度 Bug 仍缺乏对应 PR。

## 6. 功能请求与路线图信号

- **Hub 环境变量管理**（[#8354](https://github.com/agentscope-ai/QwenPaw/issues/8354)）：允许在 Hub 运行时设置中编辑 `QWENPAW_*` 环境变量，与 #8187 通道插件化、#8359 容器部署问题同属“部署可运维性”主题，预计会被优先考虑。
- **Webhook/API 集成**（[#338](https://github.com/agentscope-ai/QwenPaw/issues/338)）：长期讨论、标记 good first issue，配合 #8367 会话搜索，可能以 API 回调形式落地。
- **阿里云百炼 token plan**（[#6973](https://github.com/agentscope-ai/QwenPaw/issues/6973)，已关闭）：暗示 Creator 计费/认证链路已在调整。
- 在途大 PR 显示下一版本重点：实时语音（#7785）、通道插件化 + 子进程隔离（#8187）、插件热重载（#7565）、ReMe 0.4.2 + JEV 压缩（#8347）、Console UX 重构（#8332）。

## 7. 用户反馈摘要

- **痛点集中在自部署与容器场景**：Docker 部署的 readiness 探测（#8359）、systemd 部署的优雅退出失败（#8350）、长期运行的线程泄漏（#8279）——重度自托管用户是报 Bug 主力，且 issue 质量高（附版本、复现、代码定位）。
- **多 Agent 与自动化用户受 cron/生命周期问题困扰**：热重载静默取消任务（#8225）、Agent 间调用被取消（#8252）这类“无提示取消”模式被反复提及，用户强烈要求可观测性（记录取消发起方与原因）。
- **国内生态集成需求明显**：飞书通道（#8350）、百炼计费（#6973）、CJK Markdown 渲染（#8133）。
- **满意点**：社区 issue 响应快（#8351 当天出 fix PR）、多版本渠道（Desktop/Docker/PyPI）覆盖广。

## 8. 待处理积压

- **[#6807 Windows 上 Creator 视频生成完全不可用](https://github.com/agentscope-ai/QwenPaw/issues/6807)**（2026-08-07 开，评论仅 3）：核心卖点功能在 Windows 平台瘫痪近三个月，建议优先验证并响应。
- **[#8279 线程限制器耗尽](https://github.com/agentscope-ai/QwenPaw/issues/8279)**：高严重度、影响长稳部署，尚无维护者明确回复或修复计划。
- **多个 size/XXXL PR 长期在评审中**：[#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565)（插件热重载，9 月开）、[#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874)（PawApp 控制平面）、[#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187)（通道插件化）——体量大、相互关联，存在合并顺序与回归风险，需要维护者给出明确的 review/merge 计划。
- **[#8287 thinking slider 修复](https://github.com/agentscope-ai/QwenPaw/pull/8287)**（Under Review）与 **[#8243 Windows 日志轮转](https://github.com/agentscope-ai/QwenPaw/pull/8243)**（Under Review）等待最终裁决。

---
**健康度小结**：CoPaw 社区参与度与 issue 质量俱佳，功能演进速度快；但 2.2.x 在容器化部署、通道异步化、任务生命周期可观测性上仍有明显短板，建议在下一版本前集中处理三个 🔴 级 Bug。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报

**日期：** 2026-10-22
**项目地址：** [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

## 1. 今日速览

- 今日项目发布 1 个新版本 **v1.9.37**，是过去 24 小时内唯一的实质性动态。
- Issue 与 PR 渠道均无活动（新开 0、关闭 0、合并 0），社区交互今日处于静默状态。
- 综合来看，项目呈现「**发布驱动型**」节奏：维护者持续推进功能迭代，但社区讨论活跃度偏低，用户反馈渠道未形成有效闭环。
- 项目健康度评估：**中等偏上**——版本发布节奏稳定（已迭代至 v1.9.37），但缺乏社区参与可能掩盖潜在问题信号。

---

## 2. 版本发布

### 🚀 v1.9.37: TK Copilot v1.9.37
**链接：** [Releases · v1.9.37](https://github.com/gaoyangz77/easyclaw/releases)

**新增功能：**
1. **子账号搜索与渐进展开** —— 支持搜索子账号，并逐步展开账号列表，提升多账号管理场景下的操作效率。
2. **达人工作台增强** —— 新增达人表现数据、样品物流追踪及物流停滞预警功能，强化 TikTok 达人分销（Affiliate）运营能力。
3. **排序与体验优化** —— 改进合作阶段排序逻辑，并保留产品列表的列宽设置，减少重复调整界面的摩擦。

**破坏性变更：** 无（从 Release Notes 判断为增量功能与体验优化，未见 API/配置层面的破坏性说明）。

**迁移注意事项：**
- 官方未提示迁移步骤，建议升级前确认账号列表与达人工作台相关本地配置的兼容性。
- 新功能涉及物流预警，如有第三方物流数据接入依赖，建议升级后验证数据源是否正常。

---

## 3. 项目进展

- 今日 **无 PR 合并或关闭记录**，但 v1.9.37 的发布表明近期代码工作已直接落地到版本中。
- 从版本内容推断，本轮迭代重点在 **达人分销运营链路**（表现分析 + 样品物流可视化）和 **多账号管理体验**，属于产品核心场景的纵深打磨。

---

## 4. 社区热点

- 今日无活跃 Issue/PR 讨论，**无热点话题**。
- 建议：维护者可主动在新版本 Release 下发起反馈引导（如功能使用问卷或置顶讨论帖），激活社区互动。

---

## 5. Bug 与稳定性

- 今日 **无新增 Bug 报告**（0 条 Issue）。
- ⚠️ 提示：Issue 数为零本身值得留意——对于已迭代 37 个 patch 版本的项目而言，可能意味着用户反馈渠道不畅通或用户基数较小，建议关注实际用户触达情况。

---

## 6. 功能请求与路线图信号

- 今日无新增功能请求。
- 从 v1.9.37 的迭代方向可推断路线图信号：**达人工作台（Affiliate Workbench）是当前投入最重的模块**，子账号搜索、物流预警等均为该方向的持续补强。后续版本大概率继续围绕 **达人分销数据可视化** 与 **批量账号运营效率** 展开。

---

## 7. 用户反馈摘要

- 今日 Issue/PR 评论数为 0，**暂无可提炼的用户反馈**。
- 建议后续在 Release 页面或 Issue 模板中结构化收集用户使用场景（如 TK 小店规模、达人数量、物流管理痛点），以补充反馈数据。

---

## 8. 待处理积压

- 今日无 Issue/PR 活动，**暂无新积压**。
- 建议维护者定期自查历史 Issue 的响应情况，避免长期沉默的反馈被遗忘；若存在超过 30 天未响应的 Issue，建议集中清理或标记状态。

---

## 📊 综合评估

| 维度 | 状态 | 说明 |
|------|------|------|
| 发布节奏 | ✅ 健康 | v1.9.37 持续迭代，功能有实质性交付 |
| 社区活跃度 | ⚠️ 偏低 | 24h 内 Issue/PR 全零 |
| Bug 压力 | ✅ 无新增 | 但需警惕反馈渠道缺失 |
| 产品方向 | ✅ 清晰 | 聚焦 TikTok 达人分销与多账号运营 |

**一句话总结：** 版本迭代稳健、方向明确的达人分销工具，但社区生态尚待激活——建议加强 Release 公告的传播与反馈引导。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*