# OpenClaw 生态日报 2026-09-21

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-21 03:57 UTC

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

# OpenClaw 项目动态日报（2026-09-21）

## 1. 今日速览

今日 OpenClaw 保持高度活跃：过去 24 小时 Issues 更新 500 条（新开/活跃 336，关闭 164），PR 更新 500 条（待合并 309，已合并/关闭 191），无新版本发布。**最突出的主题是 2026.9.x 系列升级链路的稳定性**——大量 P0 级升级失败/死锁报告集中爆发（#152759、#152884、#146887、#153704、#153882、#151467），`openclaw update` 已成为当前最大痛点。与此同时，以 @steipete 为首的贡献者今日提交了十余个修复/性能 PR，密集针对升级死锁、SQLite WAL 膨胀和事件循环阻塞问题，社区自愈能力较强。整体判断：项目处于**高活跃但稳定性承压**状态，9.5 版本升级路径亟需修复验证。

## 2. 版本发布

今日无新版本发布。当前最新版本为 2026.9.5，但该版本伴随多个 P0 升级阻断问题（见第 5 节），社区普遍反馈 9.4→9.5 升级体验较差。

## 3. 项目进展

今日无合并记录展示（合并数据混入已关闭 PR），但多个重要 PR 处于"ready for maintainer look"状态，直接对应今日热点问题：

- **[PR #154302](https://github.com/openclaw/openclaw/pull/154302)** (P1)：修复 session cleanup 在 reader 阻塞 checkpoint 时删除归档并放大 WAL 写入的问题——直接对应 WAL 膨胀 P0 bug #143524。
- **[PR #154244](https://github.com/openclaw/openclaw/pull/154244)**：减少主线程 coordinator 等待，修复 Gateway 事件循环停顿——对应 #149538 事件循环饥饿问题。
- **[PR #154200](https://github.com/openclaw/openclaw/pull/154200)** (P1)：修复源码更新在前台 Gateway 关闭完成前失败，缓解升级死锁系列问题。
- **[PR #154289](https://github.com/openclaw/openclaw/pull/154289)**（已关闭）：防止被拒绝的更新子进程在 EOF 后继续执行，消除 update 竞态。
- **[PR #154320](https://github.com/openclaw/openclaw/pull/154320)** (P1)：修复队列化自动化在原生回复后丢失授权。
- **[PR #154328](https://github.com/openclaw/openclaw/pull/154328)**：修复 Active Memory recall 工具被 Tool Search 压缩误删——对应 #134579。
- **[PR #154390](https://github.com/openclaw/openclaw/pull/154390)** (XL)：原生推理迁移至专用 worker，涉及架构演进。
- **[PR #154392](https://github.com/openclaw/openclaw/pull/154392)**：新增 session 级 operator 权限授予，权限模型细化。

**评估**：今日贡献（尤其 @steipete 的高产输出）与问题报告形成明显闭环，升级链路和资源泄漏两大顽疾均已有针对性 PR 待审，项目向前推进节奏健康。

## 4. 社区热点

| Issue | 评论 | 核心诉求 |
|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592)（已关闭） | 40 | 工具调用间文本泄漏到 Slack/iMessage 等消息渠道——内部处理输出被用户看到，涉及安全与 UX |
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | 36 | Windows 下 agent SQLite WAL 膨胀至 1.4–2.8GB 且不 checkpoint，阻断 Gateway 启动 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 31 | hook/tool 子进程未 reap，僵尸进程累积致运行时退化 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 29 | Gateway 内存泄漏：RSS 从 350MB 涨至 15.5GB，2-3 天触发 OOM |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | 20 | 632-agent 集群：Gateway ready 后 /health 全部超时，事件循环饥饿 |

**分析**：讨论热度最高的问题集中在两类长期未决的**资源治理缺陷**（内存泄漏、进程泄漏、WAL 膨胀）和**消息路由污染**（#25592、#143278 均为内部输出泄漏到聊天渠道）。多位报告者（如 #153257 的“8 小时故障恢复”长文）表达了对 9.x 系列质量回归的强烈不满。

## 5. Bug 与稳定性（按严重程度）

### P0 — 升级链路阻断（今日最集中）
- **[#152759](https://github.com/openclaw/openclaw/issues/152759)**（已关闭）：9.4→9.5 升级 `doctor-failed`，静默回滚且无 actionable 信息
- **[#153882](https://github.com/openclaw/openclaw/issues/153882)**（已关闭）：插件状态迁移因父进程自身 install-records lease 死锁，Gateway 停摆（state-migrated-no-rollback）
- **[#151467](https://github.com/openclaw/openclaw/issues/151467)**：6.33→9.4 自升级死锁 + 回滚 cron 失败
- **[#146887](https://github.com/openclaw/openclaw/issues/146887)**：升级四阶段失败（MCP 超时崩溃、lint 硬门禁、handoff-restore 失败）
- **[#152981](https://github.com/openclaw/openclaw/issues/152981)**：9.5 Gateway 启动挂起约 17 分钟后超时失败（回归）
- **[#145995](https://github.com/openclaw/openclaw/issues/145995)**：插件检查间歇性失败（manual-only 标签）
- ➡️ 对应 fix PR：#154200、#154289、#154354、#152727（均已提交，待合并）

### P0 — 运行时资源
- **[#143524](https://github.com/openclaw/openclaw/issues/143524)**：WAL 膨胀阻断启动，➡️ fix PR #154302 已提交
- **[#149538](https://github.com/openclaw/openclaw/issues/149538)**：事件循环饥饿 + RSS 失控，➡️ 相关 PR #154244
- **[#38327](https://github.com/openclaw/openclaw/issues/38327)**：google-vertex/gemini-3.1-pro 回归崩溃"Cannot convert undefined or null to object"（至今未修，👍 3）

### P1
- **[#137332](https://github.com/openclaw/openclaw/issues/137332)**（queueable-fix）：混合 terminal 批次重试死循环
- **[#144809](https://github.com/openclaw/openclaw/issues/144809)**：claude-cli 长回合完整回复丢失
- **[#134579](https://github.com/openclaw/openclaw/issues/134579)**：Active Memory 自动 recall 自 2026.8.1-beta.3 起失效，➡️ fix PR #154328 已提交
- **[#139215](https://github.com/openclaw/openclaw/issues/139215)**：cron 调度器自 9.1 起静默吞掉定时触发

## 6. 功能请求与路线图信号

- **[#45608](https://github.com/openclaw/openclaw/issues/45608)**（👍 4，needs-security-review）：/new 与每日 reset 前执行 agentic memory flush——与 memory-core 持续投入（PR #153895 dreaming 修复）方向一致，**大概率被纳入**。
- **[#119992](https://github.com/openclaw/openclaw/issues/119992)**：message 工具按回合发送预算，治理单回合重复回答风暴——与 #25592 泄漏问题同根，关联 PR 已开（linked-pr-open）。
- **[#96975](https://github.com/openclaw/openclaw/issues/96975)**：子代理完成结果与父上下文隔离，只回传状态+链接。
- **[#71058](https://github.com/openclaw/openclaw/issues/71058)**：单 Gateway 支持多 Azure/Teams bot。
- **[#120244](https://github.com/openclaw/openclaw/issues/120244)** RFC：cron 每日维护窗口 + 角色隔离。
- 架构信号：PR #154390（原生推理专用 worker）、PR #154392（session 级权限授予）显示项目正向**进程隔离与细粒度权限**方向演进。

## 7. 用户反馈摘要

**痛点（集中且尖锐）**：
- 升级恐惧：“我真后悔升级到 2026.9.5”（#153257），升级从例行操作变成“8 小时故障恢复”
- 资源失控成默认预期：内存泄漏（#91588）、进程泄漏（#97616）、WAL 膨胀（#143524）、插件构建临时目录日增 7.5GB（#153246）——运维型用户负担重
- 内部输出泄漏到聊天渠道（#25592、#143278）让面向最终用户部署者尴尬
- 幽灵问题：hardcode 工作路径 `/Users/wangtao`（#51429）、文档领先于发布版本（#48920，👍 4）——削弱信任

**正面信号**：
- issue 模板、clawsweeper 自动分诊标签体系运转成熟，报告质量高（含复现、日志、版本矩阵）
- 大量问题在报告后 1–2 天内获得 fix PR（如 #153882、#152884 当日关闭），响应速度快
- Windows/macOS/Linux/FreeBSD 多平台均有覆盖，用户群多样化

## 8. 待处理积压

- **[#91588](https://github.com/openclaw/openclaw/issues/91588)**（6/9 报告，29 评论）：Gateway 内存泄漏——P1 但存在 3 个月，needs-info 状态，**建议优先复现**
- **[#38327](https://github.com/openclaw/openclaw/issues/38327)**（3/6 报告）：google-vertex 回归 P0，6 个月未修，影响特定 provider 用户
- **[#97616](https://github.com/openclaw/openclaw/issues/97616)**：僵尸进程累积，6 月底报告至今无 fix PR
- **[#48920](https://github.com/openclaw/openclaw/issues/48920)**：文档领先发布，P0 标签但拖了 6 个月
- **[#114211](https://github.com/openclaw/openclaw/issues/114211)**：Matrix 渠道循环/会话回放问题，7 月底报告，needs-live-repro
- **PR 积压**：309 个待合并 PR，其中 #148193（llama-cpp 本地 OCR/vision，XL）已等维护者验收近一周；#131584（skills 前台修复）标记 security-boundary 需谨慎评审

---
*数据来源：GitHub API，统计窗口 2026-09-20 至 2026-09-21。链接格式为 `openclaw/openclaw#编号`，可在 github.com/openclaw/openclaw 下访问。*

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告
**数据窗口：2026-09-20 至 2026-09-21**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已明显分化为**三个梯队**：以 OpenClaw 为代表的头部项目进入“高活跃但稳定性承压”的大规模运营阶段，核心矛盾从功能交付转向升级链路与资源治理；中腰部项目（NanoBot、Hermes、Zeroclaw、CoPaw、LobsterAI）处于功能收敛与架构重构期，均在布局 memory 架构、子代理隔离、安全策略等下一代能力；尾部项目则呈维护/长尾状态。横向看，生态的共同技术命题高度趋同：**上下文/记忆管理、进程隔离与权限模型、多通道消息接入（WhatsApp/IRC/IM）、OpenAI 协议兼容**是各项目不约而同的演进方向。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（336 活跃/164 关闭） | 500（309 待合并/191 关闭） | 无 | ⚠️ 高活跃但 9.5 升级链路 P0 爆发，社区自愈快（1-2 天出 fix PR），积压 309 PR |
| **NanoBot** | 3（无关闭） | 53（19/34） | 无 | ✅ 健康，review 周期短、合并快；4 条核心 PR 标 conflict 待 rebase |
| **Zeroclaw** | 50（17/33） | 50（45/5） | 无 | ⚠️ RFC 治理成熟、决策吞吐高，但 45 PR 积压、XL 安全 PR 排队超 3 周 |
| **Hermes Agent** | 50（23/27） | 50（19/31） | 无 | ✅ 收敛健康（关闭>新增），安全决策积压（#59293 近 3 月未裁决） |
| **PicoClaw** | 4（3/1） | 5（3/2） | 无 | ⚠️ 中低活跃，v0.11.0 规划落地但 stale 扩散、review 滞后 |
| **NanoClaw** | 1 新增 | 40（2/38） | 无 | ✅ 单日清理 38 PR 疑似版本集结前夜 |
| **LobsterAI** | 3（2/1） | 15（8/7） | **4 个版本**（9.14→9.20） | ✅ 极高速迭代（2 天/版），但 3 月批次社区贡献 stale 6 个月 |
| **CoPaw** | 24（16/8） | 30（18/12） | 无（2.2.2-beta.3 验证中） | ✅ beta 收尾 + Hub 规划并行，节奏健康 |
| **IronClaw** | 0 | 8（4/4） | 无（1.4.1-rc.1 切割中） | ✅ 工程闭环完整，依赖 PR #7834 积压近 1 月 |
| **NullClaw / Moltis / EasyClaw** | ≤1 | ≤1 | EasyClaw 发 v1.9.19 | ⚪ 维护期，无风险信号 |
| **TinyClaw / ZeptoClaw** | 0 | 0 | 无 | ⚪ 无活动 |

---

## 3. OpenClaw 在生态中的定位

**规模断层领先**：单日 500 Issue + 500 PR 更新，约为第二梯队项目（50 左右）的 **10 倍**，社区问题分诊体系（issue 模板、clawsweeper 自动标签）是生态中最成熟的。

**优势**：
- 问题→修复闭环最快（P0 报告 1-2 天内出 fix PR，如 #153882 当日关闭）；
- 功能纵深最广（Active Memory、队列化自动化、多渠道路由、权限模型）；
- 已形成周边生态——LobsterAI 正围绕 OpenClaw 做“集成 + 数据迁移规范化”（PR #2689/#2675/#2665），OpenClaw 事实上扮演了**上游运行时/协议基座**角色。

**劣势与风险**：
- 2026.9.x 升级链路 P0 密集爆发（6+ 条），用户“升级恐惧”情绪明确（“8 小时故障恢复”）；
- 长期资源治理顽疾（内存泄漏 #91588 三个月未复现、僵尸进程 #97616、WAL 膨胀 #143524）拖累运维型用户；
- 硬编码路径、文档领先版本等“幽灵问题”削弱信任。

**技术路线差异**：相比 Zeroclaw 的 RFC 重治理路线和 Hermes 的桌面优先路线，OpenClaw 走的是“快速迭代 + 社区自愈”，当前正借 PR #154390（推理专用 worker）、#154392（session 级权限）向进程隔离与细粒度权限演进——与 Zeroclaw v0.9.0 安全架构方向殊途同归。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **上下文/记忆管理** | OpenClaw（memory flush #45608、Active Memory）、Zeroclaw（memory 三部曲 RFC #6850/#9103/#9048）、CoPaw（compaction 预算 #7628、base64 累积 #7853、记忆独立模型 #7719）、NanoBot（token 估算 #5403）、Hermes（会话存储插件化 #117813） | 长会话下的记忆持久化、裁剪预算准确性、记忆子系统架构化成为全生态第一痛点 |
| **升级/自更新可靠性** | OpenClaw（6 条 P0）、NanoBot（#5817 自更新）、Hermes（update 批量修复）、LobsterAI（更新器 #2730）、NanoClaw（symlink 缺失） | `update` 命令是各项目共同的故障高发区，版本分发基础设施普遍在建 |
| **子代理/会话隔离** | OpenClaw（PR #154392）、NanoBot（#5811 子代理私有会话）、LobsterAI（#2703 可见性）、OpenClaw（#96975 上下文隔离） | 多 Agent 协作下的权限边界与上下文污染防护 |
| **OpenAI 协议兼容** | Zeroclaw（Chat Completions profile #8603）、PicoClaw（#3366）、NanoBot（Unifically provider）、NanoClaw（OpenCode session header） | 用户要求用现有 SDK/Open WebUI/Aider 直连 agent，兼容端点是最大接入入口 |
| **安全策略与 shell 治理** | Zeroclaw（shell-policy #7155、sandbox #7821）、Hermes（#59293 CLI 绕过审批）、NanoBot（JEV 命令安全决策 #5825/#5815） | allow/ask/deny 逐次确认、沙箱 schema、审批层不可绕过 |
| **多通道接入（WhatsApp 为主战场）** | NanoClaw（#3858 身份识别）、Zeroclaw（WhatsApp 系列 4 PR）、LobsterAI（微信）、Hermes（Bot Mode 群聊）、PicoClaw（IRC 多行） | 群聊场景的发言者身份、消息完整性、媒体预览 |
| **Windows 平台稳定性** | OpenClaw（WAL 膨胀）、Hermes（#108327 锁内 IO）、LobsterAI（SIGKILL/ESM）、CoPaw（Ctrl 事件传播 #7908） | Windows 部署用户占比高但长期是二等公民 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构特点 |
|---|---|---|---|
| **OpenClaw** | 全功能个人 AI 助手运行时，消息渠道 + memory + 自动化 | 运维型重度用户、7×24 部署者 | Gateway 集中式架构，正向 worker 隔离演进 |
| **Zeroclaw** | 安全与治理优先，RFC 驱动架构演进 | 注重安全边界的企业/进阶用户 | Rust 系，ZeroRelay + sandbox_policy + 可插拔认证，治理最重 |
| **Hermes Agent** | 桌面端体验 + 多端一致（Desktop/TUI/CLI） | 桌面用户、免费模型用户群 | Electron + Gateway，会话存储插件化探索 |
| **NanoBot** | WebUI 体验 + Provider 层广度 | Web/API 集成型用户 | 轻量 Bun 运行时、JSONL 存储（正触达扩展边界） |
| **CoPaw** | 团队协作 Hub（多租户 2.2.0 规划） | 从个人转向团队生产使用 | AgentScope Platform 账号体系整合 |
| **LobsterAI** | 桌面 Agent 平台 + 数字员工市场 | 中文/Windows 用户群明显，商业化倾向 | 基于 OpenClaw 的上层产品封装 |
| **PicoClaw** | 消息通道机器人（IRC 等） | IRC/自托管 LLM 用户 | Go 实现，轻量嵌入式方向 |
| **NanoClaw** | 多通道群聊助手 | WhatsApp 群组场景用户 | channels 子包 + statusbar 桌面 |
| **IronClaw / EasyClaw / Moltis / NullClaw** | 垂直场景（企业部署 / 达人电商 / 工具策略 / Ollama 集成） | 各自细分人群 | 维护型，单点深入 |

---

## 6. 社区热度与成熟度分层

**快速迭代冲刺期**：
- **LobsterAI**（一周 4 版）、**CoPaw**（2.2.2-beta 验证 + 2.2.0 规划）、**NanoBot**（合并快、功能收敛）、**NanoClaw**（38 PR 清理，版本集结前夜）

**质量巩固/架构重构期**：
- **OpenClaw**（9.x 质量回归修复 + 推理 worker 迁移）、**Zeroclaw**（RFC 批量 accepted，v0.9.0 落地前夜）、**Hermes**（吞吐健康，桌面性能大修刚落地）、**IronClaw**（1.4.1-rc 流程中）

**平稳维护期**：PicoClaw（规划中但响应慢）、EasyClaw、Moltis、NullClaw

**静默期**：TinyClaw、ZeptoClaw（24h 零活动）

**成熟度洞察**：项目成熟度与“积压性质”强相关——头部项目的积压是**安全/架构决策类**（Zeroclaw XL 安全 PR、Hermes #59293），中腰部是**review 带宽类**（NanoBot conflict、CoPaw 大 PR 等 7 周），尾部则无积压也无人流。

---

## 7. 值得关注的趋势信号

1. **“记忆架构化”是下一轮竞争焦点**：OpenClaw 的 Active Memory、Zeroclaw 的 memory 三部曲 RFC、CoPaw/ NanoBot 的记忆与上下文成本优化几乎同步推进。会话历史与长期记忆分离、生命周期策略与存储后端解耦（Zeroclaw #6850）有望成为行业参考架构。

2. **升级链路成为留存生死线**：OpenClaw 的 P0 爆发与 Hermes 的批量修复、NanoBot/LobsterAI 自建 update 机制对照鲜明——**agent 作为长期驻留进程，其自更新可靠性直接决定用户信任**。原子升级 + 回滚保证将成为标配能力。

3. **进程隔离与细粒度权限成为共识架构**：OpenClaw（推理专用 worker、session 级授权）、Zeroclaw（sandbox_policy、shell allow/ask/deny）、Hermes（平台隔离而非整体中止）——LLM agent 正从“单进程信任执行”转向“最小权限 + 沙箱化”的安全模型。

4. **OpenAI 协议兼容是最大的生态入口**：Zeroclaw、PicoClaw、NanoBot、NanoClaw 均在补齐 Chat Completions 兼容端点。对开发者启示：**优先暴露 OpenAI 兼容 API，可免费接入 Open WebUI/Aider/LangChain 等既有客户端生态**。

5. **用户群结构变化**：免费/低成本模型用户（Hermes #117806、CoPaw #7882）、群聊家庭场景（Hermes #117472、NanoClaw #3858）、多面板重度生产用户（CoPaw）三类群体崛起，对 fallback 链健壮性、消息不丢、社会性上下文提出硬性要求。

6. **社区贡献治理出现“两极”警示**：LobsterAI 官方当日流转 vs 社区 PR 搁置 6 个月、Zeroclaw 安全 PR 排队 3 周——**review 带宽是各项目共同瓶颈**，自动化预审（Zeroclaw AI 辅助风险分类器 #10861、Hermes ci-reviewed）是值得借鉴的解法。

7. **错误可观测性是被低估的体验项**：NullClaw 用户靠 Wireshark 抓包定位问题、OpenClaw 升级静默回滚无 actionable 信息——模型/工具能力不匹配时的**前置校验与清晰错误提示**，对降低新用户流失的性价比极高。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-09-21

## 1. 今日速览

NanoBot 今日整体呈现**高活跃度开发状态**：过去 24 小时内共更新 53 条 PR（19 条待合并、34 条已合并/关闭），Issues 更新 3 条（均为活跃状态、无关闭），无新版本发布。活动重心集中在 WebUI 体验优化、Provider 层 Bug 修复以及 agent 架构重构（子代理私有会话化）。多位核心贡献者（@chengyongru、@Re-bin 等）密集提交，配合社区外部贡献者（@tilladam、@Amiirhosseini 等），项目处于健康的功能收敛期，合并节奏快、review 周期短。

## 2. 版本发布

今日无新版本发布。可关注 [#5817](https://github.com/HKUDS/nanobot/pull/5817)（`nanobot update` 稳定版/源码自更新流程），其落地后将显著改善未来版本分发与升级体验。

## 3. 项目进展

今日合并/关闭 34 条 PR，重点包括：

- **WebUI 事件协议迁移完成**：[#5823](https://github.com/HKUDS/nanobot/pull/5823) 删除遗留消息投影路径（`replay_transcript_to_ui_messages`），`/webui-thread` 无条件返回规范 events，WebUI 协议现代化收尾。
- **新 Provider 接入**：[#5832](https://github.com/HKUDS/nanobot/pull/5832) 新增 Unifically 内置 LLM Provider（走 OpenAI 兼容路径）。
- **WebUI OAuth 体验**：[#5836](https://github.com/HKUDS/nanobot/pull/5836) 区分 OAuth 凭证被拒与临时目录故障，授权失败时提供明确的“重新登录”入口。
- **MCP 生态扩展**：[#5830](https://github.com/HKUDS/nanobot/pull/5830) 新增 Baizhi Cloud Agent Toolkit MCP 预设。
- **CI 修复**：[#5835](https://github.com/HKUDS/nanobot/pull/5835) 修复 response-source 测试缺少 `consolidate_history` 回调导致的 main 分支 CI 失败，生产代码未变。

待合并的重要 PR：[#5811](https://github.com/HKUDS/nanobot/pull/5811)（子代理走私有会话，架构级重构，标记 conflict）、[#5838](https://github.com/HKUDS/nanobot/pull/5838)（API 请求 session_id 路由修复）、[#5837](https://github.com/HKUDS/nanobot/pull/5837)（临时会话跨导航保活）。

## 4. 社区热点

- **[#5833](https://github.com/HKUDS/nanobot/issues/5833)**（新开）：SSE Responses 消费者丢弃 `response.reasoning_text.*` 事件，而 SDK 消费者能正常处理——推理模型（xAI Grok、OpenAI Codex 路径）的思考过程在 SSE 模式下丢失。作者同日提交修复 PR [#5834](https://github.com/HKUDS/nanobot/pull/5834)，issue→fix 闭环迅速，值得称赞。
- **[#5509](https://github.com/HKUDS/nanobot/issues/5509)**：会话搜索在数百会话时全量扫描 JSONL 变慢，提议 SQLite FTS5 索引镜像。反映重度用户对规模化历史检索的诉求，尚无对应 PR。
- **[#5524](https://github.com/HKUDS/nanobot/issues/5524)**（good first issue）：WebUI 会话完成通知铃声，默认关闭。注意 [#5831](https://github.com/HKUDS/nanobot/pull/5831) 正在降低完成态 UI 噪音，二者诉求互补，可协调设计。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| **P1** | [#5403](https://github.com/HKUDS/nanobot/pull/5403) 本地 tiktoken 估算偏低 30-50%，token 整合（consolidation）永不触发，长对话可能超上下文窗口 | Fix PR 待合并，标记 conflict |
| **P2** | [#5833](https://github.com/HKUDS/nanobot/issues/5833) SSE 路径丢弃 reasoning_text 事件 | 已有 fix PR [#5834](https://github.com/HKUDS/nanobot/pull/5834) |
| **P2** | [#5838](https://github.com/HKUDS/nanobot/pull/5838) API 层所有请求固定 chat_id="default"，session 路由、cron 绑定、subagent 来源全部串到同一会话，存在**跨会话数据混淆风险** | Fix PR 待合并，建议尽快 review |
| **P2** | [#5605](https://github.com/HKUDS/nanobot/pull/5605) IMAP 消息被过滤拒绝仍标记 `\Seen`，可能导致邮件静默丢失 | Fix PR 待合并 |
| **P2** | [#5769](https://github.com/HKUDS/nanobot/pull/5769) NIM 风格超时被包成 `RuntimeError` 无法触发 failover | Fix PR 待合并 |
| **P2** | [#5807](https://github.com/HKUDS/nanobot/pull/5807) Discord 停止时 reaction 任务未清理，残留 pending 状态 | Fix PR 待合并 |
| **低** | [#5829](https://github.com/HKUDS/nanobot/pull/5829) TUI Markdown 链接不可点击 | Fix PR 待合并（依赖升级） |

## 6. 功能请求与路线图信号

- **自更新机制**（[#5817](https://github.com/HKUDS/nanobot/pull/5817)）：`nanobot update` + SHA-256 校验的私有 Bun 运行时，降低安装/升级门槛，属于分发基础设施，大概率纳入下一版本。
- **JEV（OpenRouter Decisions API）集成**：[#5825](https://github.com/HKUDS/nanobot/pull/5825)（可复用客户端）+ [#5815](https://github.com/HKUDS/nanobot/pull/5815)（exec shell 预检防护），显示团队正系统性布局 LLM 辅助的命令安全决策能力。
- **企业邮件场景**：[#5609](https://github.com/HKUDS/nanobot/pull/5609) Office365 OAuth 委托流，契合微软强制 OAuth2 的时间线，社区真实需求驱动。
- **搜索性能**（[#5509](https://github.com/HKUDS/nanobot/issues/5509)）：FTS5 索引方案尚无 PR，属路线图候选缺口。
- **多语言本地化**：[#5367](https://github.com/HKUDS/nanobot/pull/5367) 覆盖 10 个 locale 的 activity 标签本地化，国际化持续推进。

## 7. 用户反馈摘要

- **长任务等待焦虑**：WebUI 用户执行工具调用/shell 等长任务时无法感知完成（[#5524](https://github.com/HKUDS/nanobot/issues/5524)），且现有完成态 UI 噪音过多（[#5831](https://github.com/HKUDS/nanobot/pull/5831) 同步优化）——用户要的是“该提示时提示、不该打扰时安静”。
- **规模化痛点**：重度多会话用户遭遇搜索性能瓶颈（[#5509](https://github.com/HKUDS/nanobot/issues/5509)），JSONL 单一存储已到扩展边界。
- **推理模型透明度**：用户依赖 reasoning 文本理解 agent 决策过程（[#5833](https://github.com/HKUDS/nanobot/issues/5833)），说明推理可视化已成为核心需求。
- **API 集成可靠性**：API 用户暴露的会话路由混乱（[#5838](https://github.com/HKUDS/nanobot/pull/5838)）表明 OpenAI 兼容 API 的生产化使用在增长。

## 8. 待处理积压

- **[#5403](https://github.com/HKUDS/nanobot/pull/5403)**（P1，8-16 开启至今近一个月）：token 整合失效影响长会话稳定性，且存在 conflict，建议优先解决。
- **[#5811](https://github.com/HKUDS/nanobot/pull/5811) / [#5815](https://github.com/HKUDS/nanobot/pull/5815) / [#5817](https://github.com/HKUDS/nanobot/pull/5817)**：三条核心架构/基础设施 PR 均标记 conflict，需要维护者介入 rebase。
- **[#5524](https://github.com/HKUDS/nanobot/issues/5524)**（good first issue，8-25 开启近月未认领）：适合作为新贡献者入口，建议在社区渠道推广。
- **[#5509](https://github.com/HKUDS/nanobot/issues/5509)**：FTS5 搜索方案尚无官方回应性 PR，建议明确是否纳入路线图。

---
*数据来源：GitHub API（过去 24 小时），统计截至 2026-09-21。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 · 2026-09-21

## 1. 今日速览

Zeroclaw 今日保持高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 17，关闭 33），PR 更新 50 条（待合并 45，已合并/关闭 5），无新版本发布。项目当前处于明显的"RFC 收敛期"——大量历经数月讨论、多轮修订的架构/安全 RFC（#6850、#8603、#7155、#8303 等）在今日集中被关闭并标记 accepted，显示 v0.9.0 相关的架构决策正在批量落地。PR 队列以大型（size:XL）安全与运行时改动为主，Review 压力较大（45 个待合并 PR），维护者 @Audacity88 依旧是最核心的贡献者。整体健康度良好，但合并吞吐偏低，需关注积压。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日 PR 合并/关闭仅 5 条，主力工作集中在持续推进待 Review 的大型改动上：

- **ZeroRelay 阶段推进**：[PR #10525](https://github.com/zeroclaw-labs/zeroclaw/pull/10525)（relay-terminated 浏览器 enrollment frontdoor，phase 1，已 accepted 状态）与 [PR #10592](https://github.com/zeroclaw-labs/zeroclaw/pull/10592)（`relay claim` 自助注册，基于 Ed25519 域标签签名验证）构成 ZeroRelay 注册体系的两条支柱，均处于活跃更新中。
- **安全与沙箱**：[PR #7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821)（canonical `sandbox_policy` schema + 应用层强制执行）持续推进，[PR #10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) 修复 host launcher 在 workspace cwd 之前的路径解析顺序问题。
- **运行时可靠性**：[PR #10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480)（图片请求被拒后单次降级重试）、[PR #10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197)（ACP 中断回合进度持久化 checkpoint）均获更新。
- **通道能力补齐**：@RustLangLatam 密集提交 WhatsApp Web 系列：[PR #10979](https://github.com/zeroclaw-labs/zeroclaw/pull/10979)（create_room/invite_user）、[PR #10980](https://github.com/zeroclaw-labs/zeroclaw/pull/10980)（PDF 首页缩略图）、[PR #10982](https://github.com/zeroclaw-labs/zeroclaw/pull/10982)（图片内联预览）、[PR #10986](https://github.com/zeroclaw-labs/zeroclaw/pull/10986)（修复 channel-addressed 工具拿到的是无状态通道实例的 bug）。

整体看，今日是"决策落地 + Review 消化"型的一天，代码合并步伐小但方向明确。

## 4. 社区热点

讨论最热 Issue 基本全部在今日关闭，且多为 accepted，标志 RFC 阶段性收尾：

- [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)（26 评论）**内存生命周期策略与存储后端解耦**——Memory trait 只管存储，consolidation/governance 上收为统一生命周期策略，是 memory 子系统三连 RFC 的基础。
- [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)（25 评论）**Chat Completions profile**——让 Open WebUI、LobeChat、Continue.dev、Aider、LangChain 等 OpenAI 协议客户端可直连 Zeroclaw agent，生态兼容性诉求强烈，是外部用户接入的最大入口型需求。
- [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)（24 评论）**高危 shell 命令逐次确认 + allow/ask/deny 模式策略**（p1），已收敛为规范 shell-policy 契约。
- [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)（23 评论）**Goal mode v1**——跨多个 agent turn 的有界持久目标执行。
- [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)（22 评论）**Gemini Live 实时语音到语音通道**，broker 契约方案获 accepted（parking-lot）。
- 唯一保持 OPEN 的高热 Issue：[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) **维护者决策队列 tracker**（15 评论），是所有 RFC 的调度中枢，今日仍在活跃更新，反映社区对决策透明度的关注。

诉求主线清晰：用户希望**更开放的接入协议（OpenAI 兼容）、更强的安全边界（shell 确认、认证、沙箱）、更清晰的 memory 架构**。

## 5. Bug 与稳定性

今日 Bug 类 PR（按严重度排序，均为 OPEN，尚在 Review）：

1. **高** [#9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428)：Bluesky 与 Reddit 通道缺少发送者授权校验（安全域，波及几乎全部 channel 标签，needs-maintainer-review）——**已有 fix PR，等待 Review**。
2. **高** [#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480)：图片请求遭 HTTP 400 终止导致回合失败，PR 提供单次重试恢复。
3. **高** [#10860](https://github.com/zeroclaw-labs/zeroclaw/pull/10860)：`normalize_data_uri` 未校验 payload 是否为图片，非图片 data-URI 标记处理不当。
4. **高** [#10931](https://github.com/zeroclaw-labs/zeroclaw/pull/10931)：Windows 计划任务 stdout/stderr 日志无上限增长，已改为有界捕获。
5. **高** [#10172](https://github.com/zeroclaw-labs/zeroclaw/pull/10172)：`<family>.<alias>` 形式的 provider profile 身份在运行时切换/发现/RPC 中被静默折叠为裸 family。
6. **中** [#10986](https://github.com/zeroclaw-labs/zeroclaw/pull/10986)：会话绑定通道（如 WhatsApp Web）经工具路径调用时拿到的是新建的无状态 `Arc<dyn Channel>` 实例。
7. **低** [#11022](https://github.com/zeroclaw-labs/zeroclaw/pull/11022)：测试 fixture 过期（今日新建，非生产 bug）。

无崩溃/回归类重大报告，稳定性问题集中在通道边界的长尾 bug。

## 6. 功能请求与路线图信号

今日集中 accepted 的 RFC 群构成清晰的下一版本路线图信号（多数标注 Target v0.9.0）：

- **Memory 架构重构三部曲**：#6850（生命周期解耦）、[#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103)（权威存储与可选 enrichment 连接器分离）、[#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)（会话历史与长期记忆分离）——这是 memory 子系统的系统性重设计，很可能在下一版本落地。
- **身份与安全**：[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)（可插拔入站认证 + 规范主体，p1，in-progress）、[#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)（运行时安全决策管线）、[#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127)（`KeySource` trait，in-progress）、[#9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598)（SOP 能力权限契约）——配套 PR #7821 已在推进，v0.9.0 安全架构基本成型。
- **生态兼容**：#8603 Chat Completions profile 获 accepted，意味着 OpenAI 协议兼容端点有望近期实现。
- **parking-lot / icebox**（短期不做但已认可）：Gemini Live 语音通道（#8780）、A2A outbound（[#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106)）、产品遥测（[#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621)）、WASM Observer 能力（[#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822)）。
- 流程类 RFC（#9496 RFC 流程精简、#9990 PR 风险审批校准）与 [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) AI 辅助 PR 预审也全部 accepted，对应 [PR #10861](https://github.com/zeroclaw-labs/zeroclaw/pull/10861) 的 report-only 风险分类器已在 CI 中推进——项目自动化 Review 体系正在成型。

## 7. 用户反馈摘要

从 Issue/PR 讨论可提炼的真实痛点：

- **接入协议碎片化**：用户希望用熟悉的 OpenAI SDK、Open WebUI、Aider 等工具直连 agent，而不必适配 WebSocket/ACP/webhook（#8603 背后的核心诉求）。
- **配置保存 ≠ 生效**：用户修改安全策略/通道配置后，长生命周期子系统仍用旧状态，需完整 reload（[#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897)），运维体验痛点。
- **记忆/上下文丢失**：历史裁剪、daemon 重启后早期约束丢失，多会话场景尤为明显（[#9998](https://github.com/zeroclaw-labs/zeroclaw/issues/9998) 会话级持久 prompt 附件）。
- **能力误报与预算**：vision 支持误报、context window 回落到错误默认值 32k（[#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)），影响实际可用性。
- **WhatsApp 体验细节**：图片无预览、PDF 无缩略图（#10980/#10982）说明移动端通道的"小瑕疵"直接影响最终用户观感。
- **正向信号**：RFC 修订历史频繁出现"maintainer takeover revision"，显示维护者对社区提案深度接手打磨，社区与维护层协作质量高。

## 8. 待处理积压

需维护者重点关注：

- **Review 积压（45 个待合并 PR）**，其中多个 size:XL 且挂 `needs-maintainer-review` 超过 3 周：
  - [#9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428)（7-27 开启，安全修复，最高优先）
  - [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821)（6-17 开启，sandbox_policy，needs-author-action）
  - [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197)、[#10172](https://github.com/zeroclaw-labs/zeroclaw/pull/10172)、[#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351)、[#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381)、[#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337)、[#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480)、[#10596](https://github.com/zeroclaw-labs/zeroclaw/pull/10596) 均为 XL 级且待 Review 超 3 周。
- **决策队列 tracker [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** 仍 OPEN，是消化后续 RFC 的关键节点，今日关闭 33 个 Issue 中大量为 accepted 转入实施，需确保对应实施 PR 尽快排期。
- **ZeroRelay 双 XL PR（#10525/#10592）** 已挂 status:accepted 逾两周，属安全敏感路径，建议优先排期 Review 以解锁 phase 2。

**健康度小结**：决策吞吐高、RFC 治理成熟、贡献者梯队（distinguished/experienced contributor 分级）运转正常；主要风险在 Review 带宽——大型安全 PR 的排队时间偏长，若持续可能形成安全修复延迟落地。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-09-21）

## 1. 今日速览

今日项目保持高活跃度：过去 24 小时共 50 条 Issue 更新（新开/活跃 23、关闭 27）、50 条 PR 更新（待合并 19、已合并/关闭 31），无新版本发布。社区修复节奏显著快于问题累积，关闭数（Issue +27、PR 合并/关闭 +31）均超过新增，整体处于健康收敛状态。今日重点集中在三条线：会话状态可靠性（session-state 类风险清扫）、`hermes update` 跨版本兼容性（多条同类 bug 被批量关闭，暗示更新链路已修复）、以及桌面端渲染性能。值得注意的是，一个 P2 安全问题（CLI 绕过审批层写保护）讨论热度最高但尚未有对应 fix PR。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的重要 PR：

- **桌面端性能大修落地** [#117681](https://github.com/NousResearch/hermes-agent/pull/117681)：驻留 pane 释放 transcript、头像缓存设上限、渲染堆上限与 `electron_flags` 终于透传到 Chromium——直接回应了长期 P1 性能 Issue [#98394](https://github.com/NousResearch/hermes-agent/issues/98394)。这是今日最实质的用户可感知改进。
- **网关关机排空修复** [#116524](https://github.com/NousResearch/hermes-agent/pull/116524)：被取消的 executor 任务重新对关机 drain 可见，取消计数不再提前归零。
- **Electron SIGTRAP 崩溃修复** [#109202](https://github.com/NousResearch/hermes-agent/pull/109202)：禁用 Chromium c-ares 异步 DNS，同时修复 macOS（#69247）与相关崩溃（#100573）。
- **Windows 凭据守卫误伤修复** [#117150](https://github.com/NousResearch/hermes-agent/pull/117150)：composer 粘贴文件路径放行，Windows 桌面可用性提升。
- **A2A 流式回复丢失修复** [#117018](https://github.com/NousResearch/hermes-agent/pull/117018)：`message/send`/`message/stream` 不再返回空文本的 COMPLETED 状态。
- **桌面细节修复两连**：[#117408](https://github.com/NousResearch/hermes-agent/pull/117408)（rail 跳转后编辑器不可用）、[#117388](https://github.com/NousResearch/hermes-agent/pull/117388)（链接标题渲染器不加载登录墙）。

此外，更新链路相关 bug（#117305、#117438、#117364、#117341）今日集中关闭，表明近期一次代码合入批量修复了 `hermes update` 的 sys.modules 混用与 receipt 状态问题。今日新增待合并 PR 19 个，涵盖 fallback 解析、MCP SDK 2.x 兼容、会话存储插件化等，管线充足。

## 4. 社区热点

- **#59293（15 评论，OPEN，P2 安全）** [`hermes config set` 绕过系统配置写保护](https://github.com/NousResearch/hermes-agent/issues/59293)：v0.18.0 的审批层只拦截 shell 写 `config.yaml`，CLI 正门修改不受控——意味着有终端权限的 agent 回合可以自行关闭审批层。标记 `needs-decision`，讨论多但尚无定论与 fix PR，**建议维护者优先裁决**。
- **#102198（7 评论，CLOSED，P1）** [state.db 在 SIGTERM 后 0.9s 被写入致库损坏](https://github.com/NousResearch/hermes-agent/issues/102198)：优雅关机期间仍有写操作导致下次启动 "file is not a database"。已关闭，与 #116524 的排空修复方向一致。
- **#98394（6 评论，1 👍，OPEN，P1）** [桌面渲染器永久重渲染循环、空转 30–65% CPU](https://github.com/NousResearch/hermes-agent/issues/98394)：#117681 已合并，此 Issue 有望很快验证关闭。
- **#117472（4 评论，CLOSED）** [Bot Mode 群聊 Stop-hold 吞消息且无法禁用](https://github.com/NousResearch/hermes-agent/issues/117472)：真实家庭场景 90 分钟实测，反映 Bot Mode 在多用户群组下的消息可靠性诉求。

## 5. Bug 与稳定性

按严重程度排列：

| 问题 | 级别 | 状态/修复 |
|---|---|---|
| state.db 关机损坏 #102198 | P1 | 已关闭（对应 #116524 方向） |
| 桌面渲染循环 CPU 占用 #98394 | P1 | OPEN，#117681 已合并待验证 |
| 会话模型 pin 绕过 fallback，429 后会话死亡 #117806 | P2 | **已有 fix PR** [#117816](https://github.com/NousResearch/hermes-agent/pull/117816)（今日新开） |
| Windows process_registry 持锁做磁盘 IO 阻塞事件循环 #108327 | P2 | OPEN，暂无 PR |
| `hermes update` 后 ImportError / 跨版本模块混用 #88371、#117305、#117438 | P2 | 今日批量关闭，推测已修复 |
| Dashboard basic-auth 登录 200 后续 API 401 #117314 | P2 | OPEN，needs-repro |
| 自定义 endpoint 名含冒号永久 404 #117666 | P2 | OPEN |
| profile 下 api_server 端口被忽略 #117313 | P2 | OPEN |
| HERMES_DELEGATED_CHILD_CONTEXT 只写不清 #87650 | P2 | OPEN |
| 插件 system_prompt_section 注册后从不渲染 #117432 | P3 | OPEN，标记 invalid 待查 |

安全类：#59293（CLI 绕过审批，OPEN/needs-decision）、#116908（TTS shell=True 注入风险，已关闭）、#116899（redact kill-switch 仅环境变量，已关闭）。

## 6. 功能请求与路线图信号

- **可插约会话存储** [#117813](https://github.com/NousResearch/hermes-agent/pull/117813)（今日新开，P3 needs-decision）：SQLite 保持零配置默认，引入 `sessions.store` 抽象——架构级信号，若合入将打开多后端历史记录生态。
- **统一连接器体验** [#111008](https://github.com/NousResearch/hermes-agent/pull/111008)（P2，ci-reviewed）：后端一站式完成应用连接，Desktop/TUI/CLI 三端一致 setup 卡片，是近期最大的 UX 功能 PR。
- **HA watch 事件转发到其他消息平台** [#35060](https://github.com/NousResearch/hermes-agent/issues/35060)（P3，长期 OPEN）：智能家居多平台通知仍是待满足需求。
- 其他小项：#117836（插件技能跨表面暴露）、#117840（MCP SDK 2.x `read_only_hint`）显示社区正主动补齐插件/MCP 生态缺口。

## 7. 用户反馈摘要

- **更新体验是最大痛点集群**：今日多条 update 相关 Issue（#117305、#117438、#88371）均为"更新本身成功但收尾崩溃/留下脏状态"的体验，用户对新进程恢复正常表示可以接受但期待干净退出。
- **免费/低成本模型用户活跃**：#117056（opencode free）、#116620（OpenRouter `:free` SKU 被拒）、#117516（DeepSeek 退役 ID）反映大量用户跑免费模型，且 #117806 的 429 场景同样源于额度耗尽——fallback 链的健壮性（#117816）对此群体是刚需。
- **桌面端内存/CPU 与会话错乱**（#98394、#86106）是 Desktop 用户最高频抱怨；#117681 合并后值得观察后续反馈。
- **多平台 Bot Mode 家庭场景**（#117472）显示非技术用户在群组里 7×24 使用，对消息不丢、hold 可控有硬性要求。

## 8. 待处理积压

- **#59293** [CLI 绕过审批层](https://github.com/NousResearch/hermes-agent/issues/59293)：安全类 P2，7 月开至今近 3 个月，15 条评论仍 `needs-decision`，是当前最应优先裁决的积压项。
- **#108327** [Windows 网关锁内磁盘 IO](https://github.com/NousResearch/hermes-agent/issues/108327)：9-11 开启，P2，无 PR 认领，Windows 平台稳定性缺口。
- **#87650** [delegated child 标记永久污染长进程](https://github.com/NousResearch/hermes-agent/issues/87650)：8-16 开启，涉及 session-state 风险面。
- **#105379** [本地服务器指纹探测无鉴权 401 喷射](https://github.com/NousResearch/hermes-agent/issues/105379)：9-07 开启，P2，无进展。
- **#35060** [HA watch 事件转发](https://github.com/NousResearch/hermes-agent/issues/35060)：5 月底的 P3 功能请求，长期无响应，建议至少给出 roadmap 判断。
- **PR #74440** [open-policy 平台隔离而非整体中止网关](https://github.com/NousResearch/hermes-agent/pull/74440)：7-29 开启，多 sweeper 风险标签 + needs-decision，审查停滞近两月，阻塞了网关容错性改进。

**健康度总结**：吞吐健康（关闭 > 新增），修复响应快（#117806 当天出 PR），主要风险集中在安全决策积压与 Windows/桌面端长尾问题。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-09-21）

## 1. 今日速览

PicoClaw 今日整体保持中等活跃度：过去 24 小时共 4 条 Issue 更新（3 新开/活跃、1 关闭）、5 条 PR 更新（3 待合并、2 合并/关闭），无新版本发布。项目重心明显向 v0.11.0 迭代倾斜——sprint 计划文档已落地（[PR #3383](https://github.com/sipeed/picoclaw/pull/3383)），规划了 agentic web3、模块信任机制、ACP/mesh 深度支持等方向。IRC 多行消息支持（#3354）与 Web UI 卡顿修复相关动画治理（#3353）两个功能性 PR 仍在待合并状态。需要注意多条 Issue/PR 已被标记 `stale`，社区响应速度存在一定滞后。

## 2. 版本发布

今日无新版本发布。目前最近版本仍为 0.3.1（用户报告中提及），但 v0.11.0 sprint 已启动规划，可预期下个大版本。

## 3. 项目进展

- **[PR #3383](https://github.com/sipeed/picoclaw/pull/3383)（已关闭）**: v0.11.0 sprint 计划文档，包含 Tracks 67–75 的 ordering DAG、决策记录、风险登记表与验收清单。这是今日最具战略意义的变更，明确了下一周期路线图（agentic web3、module trust、ACP/mesh 深度支持）。
- **[PR #3367](https://github.com/sipeed/picoclaw/pull/3367)（已关闭）**: 文档新增 Pilot MCP 配置示例，包括健康检查命令、无 API key 安装说明，降低了新用户上手门槛。
- **待合并进展**：
  - [#3354](https://github.com/sipeed/picoclaw/pull/3354)：IRCv3 `draft/multiline` 接收支持，直接对应 Issue #3287 的诉求；
  - [#3353](https://github.com/sipeed/picoclaw/pull/3353)：工具反馈动画生命周期治理（5 分钟上限），与 Web UI 卡顿（#3281）相关；
  - [#3378](https://github.com/sipeed/picoclaw/pull/3378)：OAuth token 刷新时使用配置 scopes 而非硬编码，修复自建 OAuth provider 兼容性问题。

整体看，项目在消息通道健壮性（IRC、channels）与认证正确性上稳步推进，路线图层面完成了一次重要升级。

## 4. 社区热点

- **[#3281 Web UI 输入卡顿](https://github.com/sipeed/picoclaw/issues/3281)**（13 评论 / 2 👍）：讨论最热烈。用户在会话历史较长时输入明显卡顿，影响日常使用体验，反映前端状态管理/渲染性能是核心痛点。已有相关修复方向（PR #3353 的动画生命周期治理）。
- **[#3287 IRC 长消息支持](https://github.com/sipeed/picoclaw/issues/3287)**（13 评论）：IRC 用户群体诉求集中——512 字节限制导致长消息被拆分，PicoClaw 无法将其视为整体。已有对应 PR #3354 待合并，闭环在即。
- **[#3366 OpenAI 兼容 provider](https://github.com/sipeed/picoclaw/issues/3366)**（4 评论）：用户希望接入自托管路由（如 9Router），反映社区对可插拔 LLM 后端的强烈需求。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 高 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI 会话历史较长时输入严重卡顿（v0.3.1, Go 1.25.11） | OPEN (stale) | 部分相关：#3353 |
| 中 | [#3378](https://github.com/sipeed/picoclaw/pull/3378) OAuth RefreshAccessToken 硬编码 scopes 覆盖 provider 配置 | 待合并修复 PR | 即本 PR |
| 低 | [#3353](https://github.com/sipeed/picoclaw/pull/3353) 工具反馈动画因生命周期泄漏可无限编辑频道消息 | 待合并修复 PR | 即本 PR |

今日无新报告的崩溃或回归问题。

## 6. 功能请求与路线图信号

- **IRC 多行消息（[#3287](https://github.com/sipeed/picoclaw/issues/3287)）**：PR #3354 已实现，纳入下个版本概率高。
- **OpenAI 兼容自定义 provider（[#3366](https://github.com/sipeed/picoclaw/issues/3366)）**：与刚关闭的 #3369（OpenCode Go session header）同属 provider 可扩展性主题，且 v0.11.0 sprint 涉及 module trust / ACP，方向契合，有望纳入。
- **OpenCode Go session header（[#3369](https://github.com/sipeed/picoclaw/issues/3369)，已关闭，2 👍）**：说明 OpenAI 兼容 provider 需支持自定义 header 映射，是 #3366 的具体子需求。
- **路线图信号**：v0.11.0 sprint（#3383）明确 agentic web3、模块信任、ACP/mesh 三大方向，上述社区诉求的 provider/协议层增强与该方向一致。

## 7. 用户反馈摘要

- **痛点**：Web UI 在长会话下的性能退化是最直接的负面体验；IRC 用户受 512 字节消息拆分困扰，机器人理解上下文断裂。
- **使用场景**：用户通过 Web UI、IRC 等多渠道接入 PicoClaw；有用户自托管 LLM 路由（9Router）希望复用 OpenAI 兼容协议；有用户使用 OpenCode Go 作为后端，需要 session header 透传。
- **满意度信号**：功能请求均为增强型而非替代型，说明核心工作流可用；但多个高互动 Issue 被标 stale，用户可能感知到响应迟缓。

## 8. 待处理积压

以下条目已被标记 `stale`，建议维护者优先跟进：

1. **[#3281](https://github.com/sipeed/picoclaw/issues/3281)**（13 评论 / 2 👍，7 月开）：影响面最大的性能 Bug，若 PR #3353 仅部分解决，需补充前端渲染层面的优化。
2. **[#3287](https://github.com/sipeed/picoclaw/issues/3287)**（13 评论，7 月开）：对应 PR #3354 已挂起 3 周，建议尽快 review 合并。
3. **[#3378](https://github.com/sipeed/picoclaw/pull/3378)**（9 月 12 日开）：OAuth scopes 修复，正确性明确、改动小，适合快速合并。
4. **[#3366](https://github.com/sipeed/picoclaw/issues/3366)**（9 月 4 日开）：与路线图方向契合，建议纳入 v0.11.0 排期并回应社区。

**健康度小结**：项目功能演进与社区需求基本同频（IRC、provider 扩展均有对应 PR），但 stale 标记扩散和 PR review 周期偏长是当前主要风险点。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-09-21

## 1. 今日速览

- 过去 24 小时项目整体活跃度**中等偏上**：PR 更新 40 条（38 条已合并/关闭，2 条待合并），Issues 新增 1 条，无新版本发布。
- 值得关注的是单日 38 条 PR 关闭/合并，显示维护团队（尤其是 core-team 标签的 PR）正在进行一次**较大规模的 PR 队列清理/收尾**，其中大量为长期贡献者 @glifocat 的历史 PR。
- 新增 Bug #3858 聚焦 **WhatsApp 通道 sender display name 缺失**，属于原生 adapter 层的信息丢失问题，与此前多个 WhatsApp 相关修复形成延续主题。
- 项目无 Release 发布，当前主线版本仍为 v2.3.0（main @ 7902716b, channels @ 224827b9）。

## 2. 版本发布

今日无新版本发布。⚠️ 注意：单日关闭 38 个 PR（含多个 `follows-guidelines` 修复）可能预示一次版本集结正在酝酿，建议关注后续 Release 动态。

## 3. 项目进展

今日关闭的 PR 覆盖面广，主要方向：

**通道/消息层修复（WhatsApp / Chat SDK）**
- [PR #2565](https://github.com/nanocoai/nanoclaw/pull/2565) — 通过 `contextInfo.mentionedJid` 检测群组 @-提及
- [PR #2328](https://github.com/nanocoai/nanoclaw/pull/2328) — 多目的地群组中默认回复到消息来源
- [PR #2265](https://github.com/nanocoai/nanoclaw/pull/2265) — Chat SDK bridge 支持 `send_card` 显示卡片
- [PR #746](https://github.com/nanocoai/nanoclaw/pull/746) — 修复 WhatsApp 认证失败后服务重启风暴

**OpenCode provider 稳定性**
- [PR #3346](https://github.com/nanocoai/nanoclaw/pull/3346) — resumed session 空闲无工作时恢复（core-team 参与）
- [PR #2152](https://github.com/nanocoai/nanoclaw/pull/2152) — 杀掉 server 进程组 + 可配置 IDLE_TIMEOUT_MS

**CLI 与运维**
- [PR #2416](https://github.com/nanocoai/nanoclaw/pull/2416) — `ncl groups/wirings create` 补齐 companion rows
- [PR #2402](https://github.com/nanocoai/nanoclaw/pull/2402) — repo 更名后修复 CI workflow 守卫
- [PR #700](https://github.com/nanocoai/nanoclaw/pull/700) — 超大 JSONL session 轮转，防容器超时

**仍在待合并（2 条）**
- [PR #3420](https://github.com/nanocoai/nanoclaw/pull/3420) [core-team] — macOS statusbar Swift 代码适配 install-slug 标签（stacked on #3408）
- [PR #3463](https://github.com/nanocoai/nanoclaw/pull/3463) — opencode provider 对 `message.part.delta` 文本回退，修复 #2985 的 ~78ms 时序竞态

整体评估：一次性收敛大量历史 PR（部分可追溯至 3 月），通道层与 provider 稳定性显著推进，项目向“可发布下一版本”明显迈进。

## 4. 社区热点

- 今日评论数据缺失（评论数 undefined），无法严格排序热度。
- 活跃焦点判断：
  - [Issue #3858](https://github.com/nanocoai/nanoclaw/issues/3858)（今日新开，0 评论）——WhatsApp 群聊中 agent 只能看到 JID，无法区分参与者。
  - [PR #3420](https://github.com/nanocoai/nanoclaw/pull/3420)——今日（09-21）仍有更新，core-team 参与，macOS 安装 slug 迁移的后续适配，是当前最活跃的讨论线之一。
- 背后诉求：用户对**多通道（尤其 WhatsApp）群组场景下的身份/上下文识别能力**有持续强烈需求，这与今天集中关闭的一批 WhatsApp 相关 PR 互相印证。

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#3858](https://github.com/nanocoai/nanoclaw/issues/3858) WhatsApp 原生 adapter 不传递 sender display name，群聊中 agent 无法辨识参与者（v2.3.0，Linux） | OPEN，triage/unresolved，**尚无 fix PR** |
| 🟡 中 | [#2985](https://github.com/nanocoai/nanoclaw/issues/2985) opencode provider 末轮文本丢失（~78ms 竞态） | 已有 [PR #3463](https://github.com/nanocoai/nanoclaw/pull/3463) 待合并 |

## 6. 功能请求与路线图信号

- 今日无新功能请求 Issue，但从 PR 流向可读出路线图信号：
  - **macOS 桌面体验**（statusbar + install-slug 体系，#3408/#3420）是 core-team 当前投入方向，预计将进入下个版本。
  - **OpenCode provider 健壮性**连续多个 PR（#2152/#3346/#3463），显示 provider 层竞态/生命周期问题是下一阶段重点。
  - **Skill 生态**（#706 iCloud 工具、#2322 karpathy-llm-wiki v2 兼容）持续扩充，方向为日历/邮件/知识库集成。

## 7. 用户反馈摘要

- 今日新增反馈（#3858）：真实使用场景为 **WhatsApp 群聊中的 AI 助手**——用户期望 agent 能以昵称称呼成员、区分发言人，目前只能看到一串 JID，体验明显受损。这反映了多人群聊场景下“社会性上下文”是核心痛点。
- 历史 PR 描述中的隐含痛点：session 文件膨胀导致容器超时（#700）、升级后 CLI symlink 缺失（#2356）、SDK 压缩后上下文丢失（#2327）——表明用户对**长时间运行稳定性**和**平滑升级**最为敏感。

## 8. 待处理积压

- [Issue #3858](https://github.com/nanocoai/nanoclaw/issues/3858)：今日新开、0 评论，建议维护者尽快分派 triage，且与已关闭的 #2565（@-提及检测）同属 WhatsApp 身份识别域，可一并规划修复。
- [PR #3463](https://github.com/nanocoai/nanoclaw/pull/3463)：8/23 开启至今待合并，已定位到精确竞态根因，建议优先 review。
- [PR #3420](https://github.com/nanocoai/nanoclaw/pull/3420)：stacked on #3408，存在依赖链，需确认 #3408 合并顺序，避免再度积压一个月以上。

---
*数据来源：GitHub API（过去 24 小时窗口）。评论数字段今日缺失，热度分析基于时间戳与标签推断。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-09-21

## 1. 今日速览

NullClaw 今日整体活跃度较低，仅新增 1 条 Issue，无 PR 更新、无版本发布。唯一的社区动态是 Issue #1000，指出项目在与 Ollama 集成时对不支持 tools 的模型缺少清晰的错误提示。从开发者甚至动用 Wireshark 抓包排查问题来看，用户对项目的使用意愿强烈，但错误诊断体验有待提升。项目当前处于平稳维护期，无紧急稳定性风险信号。

## 2. 版本发布

今日无新版本发布，无破坏性变更或迁移事项。

## 3. 项目进展

今日无 PR 合并或关闭，无代码层面的实质推进。项目功能演进今日处于停滞状态。

## 4. 社区热点

- **[#1000] ollama incompatibility notification**（@aaafgcfg，1 条评论，👍 0）
  链接：https://github.com/nullclaw/nullclaw/issues/1000
  今日唯一活跃讨论。诉求很明确：当 Ollama 模型不支持 tools（Function Calling）时，NullClaw 仅抛出无描述的 adapter error，用户难以定位原因。该 Issue 已有 1 条评论互动，说明社区对此有共鸣，是当前最值得维护者关注的反馈。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 中 | [#1000](https://github.com/nullclaw/nullclaw/issues/1000) Ollama 不支持 tools 的模型调用时只报无描述的 adapter error，缺少明确的兼容性提示 | OPEN，暂无 fix PR |

该问题属于错误信息可观测性缺陷，不影响核心功能正确性，但显著增加用户排障成本，建议优先纳入修复。

## 6. 功能请求与路线图信号

- **请求类型**：enhancement
- **内容**：在检测到 Ollama 模型不支持 tools 时，主动弹出/返回兼容性通知（如模型能力探测或错误信息增强）。
- **实现信号**：Issue 作者（应为贡献者）表示“i need to add a notification”，暗示其有意自行提交 PR。目前尚无对应 PR 落地，建议维护者跟进认领。若实现，很可能随下一个小版本发布。

## 7. 用户反馈摘要

- **痛点**：NullClaw 与 Ollama 的集成在模型能力不匹配时静默失败，错误信息无描述，用户难以理解失败原因。
- **典型场景**：用户选择不支持 Function Calling 的 Ollama 模型接入 NullClaw 代理工作流，遇到 adapter error 却无从下手，最终只能通过 Wireshark 抓包分析 Ollama 通信才定位到根因——这反映出错误诊断链路的严重不足。
- **积极信号**：用户愿意投入较大成本（网络抓包）排查并主动提出修复意愿，说明核心用户粘性较高。

## 8. 待处理积压

- [#1000](https://github.com/nullclaw/nullclaw/issues/1000)（创建于 2026-09-20，目前仅 1 条评论，尚无维护者明确响应）：建议维护者尽快回复认领状态，若作者计划自提 PR，可协助明确实现方案（如在 adapter 层检测 Ollama `/api/tags` 返回的模型能力并前置校验）。

---

**健康度小结**：今日数据量小，无合并、无发布，活跃度处于低位；但 Issue #1000 质量较高（有明确动机与排障细节），且隐含潜在贡献者。建议关注错误信息可观测性方向的改进，以降低新用户（尤其是 Ollama 用户群）的上手门槛。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-09-21

> 数据来源：github.com/nearai/ironclaw | 统计窗口：过去 24 小时

---

## 1. 今日速览

今日 IronClaw 处于**中等活跃度、以工程收尾为主**的状态：共 8 条 PR 更新（4 条合并/关闭、4 条待合并），无新开 Issues，无正式 Release 发布。最值得关注的是 **v1.4.1-rc.1 版本切割 PR（#8105）已关闭合并**，表明项目正处于 1.4.1 候选版发布流程中；同时一条针对 Gmail/Google Calendar 扩展激活失败的关键修复（#8102）落地，为 1.4.1 的稳定性扫清了障碍。依赖维护方面，Dependabot 保持高频轮转，新开 2 条批量升级 PR 并关闭 2 条旧批次。整体来看项目推进节奏健康，但 Issue 追踪端今日零活跃，社区互动面偏静默。

---

## 2. 版本发布

今日**无正式 Release 发布**。但需注意：

- [PR #8105](https://github.com/nearai/ironclaw/pull/8105) 已将 `ironclaw` 包版本 bump 至 **1.4.1-rc.1**，为 Cut Ironclaw Release workflow 在 merge commit 上打 `ironclaw-v1.4.1-rc.1` 标签做准备。预计 rc 版本短期内会出现在 Releases 页面，可关注后续动态。

---

## 3. 项目进展

今日合并/关闭 4 条 PR，主要进展：

| PR | 内容 | 意义 |
|---|---|---|
| [#8105](https://github.com/nearai/ironclaw/pull/8105) `chore(release): cut 1.4.1-rc.1` | 版本号 bump 至 1.4.1-rc.1 | 进入 1.4.1 发布流程，release 脚本对 manifest 版本与请求版本强校验，此 PR 是打 tag 的前置条件 |
| [#8102](https://github.com/nearai/ironclaw/pull/8102) `fix(extensions): provider-instance readiness` | 修复通过 Web UI（管理员配置）而非环境变量配置 Google OAuth 时，Gmail/Google Calendar 完成 OAuth 全流程后激活失败的问题（`Provider...` 报错）；改为实时解析 provider-instance readiness，管理员配置优先 | 1.4.1 的关键用户侧修复，直接影响扩展可用性 |
| [#8099](https://github.com/nearai/ironclaw/pull/8099) `chore(deps): everything-else 组 25 项升级` | Rust 依赖批量升级（uuid 1.24→1.26.1、base64 0.22→0.23 等） | 旧批次收口，由 #8104 接续 |
| [#8079](https://github.com/nearai/ironclaw/pull/8079) `chore(deps): actions 组 6 项升级` | GitHub Actions 升级（claude-code-action、setup-node 4→7 等） | CI 基础设施维护，由 #8103 接续 |

**整体评估**：功能性推进集中在 #8102（扩展激活修复），配合版本切割 PR，项目向 1.4.1-rc.1 迈出了实质性一步，工程闭环完整。

---

## 4. 社区热点

今日无 Issue 活动，PR 评论数据未显示明显互动热点。相对最受关注的动态是依赖升级系列的持续推进：

- [#7834](https://github.com/nearai/ironclaw/pull/7834) wasm 组升级（wasmtime 等 4 项），标签显示 `size: L, risk: medium`，已挂起近一个月（2026-08-23 创建），是当前待合并 PR 中风险最高、最值得社区评审的一条。

---

## 5. Bug 与稳定性

今日**无新报告的 Bug/崩溃 Issue**。但今日合并的修复反映了近期存在的稳定性问题：

1. **【已修复】Gmail/Google Calendar 扩展激活失败**（严重程度：高，影响管理员通过 Web UI 配置 OAuth 的所有部署）— OAuth 授权全流程成功后在激活阶段抛 `Provider...` 错误。修复已随 [PR #8102](https://github.com/nearai/ironclaw/pull/8102) 合并，预计包含在 1.4.1-rc.1 中。
2. **【低风险待观察】wasm 依赖升级**（wasmtime 等被标记 `risk: medium`，见 [#7834](https://github.com/nearai/ironclaw/pull/7834)），合并前建议关注沙箱运行时回归测试结果。

---

## 6. 功能请求与路线图信号

- 今日无新功能请求 Issue。
- 路线图信号主要来自工程侧：**1.4.1-rc.1 即将发布**（[#8105](https://github.com/nearai/ironclaw/pull/8105)），结合 #8102 的内容，下一版本的核心卖点是**扩展 provider 配置的健壮性提升（管理员 Web UI 配置优先）**，属于自托管/企业部署场景的体验改进方向。

---

## 7. 用户反馈摘要

今日 Issue 零活跃，无直接用户评论可提炼。间接信号：

- #8102 修复的问题描述揭示了真实用户场景：**部署管理员倾向于通过 Web UI 配置 Google OAuth 客户端而非环境变量**，而此路径此前完全不可用——说明“配置方式不一致导致功能失效”是此类自部署 AI 助手产品的典型痛点，此次修复正面回应了该诉求。

---

## 8. 待处理积压

| PR | 挂起时长 | 内容 | 建议 |
|---|---|---|---|
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | **约 4 周**（08-23 创建） | wasm 组升级（wasmtime 等），`size: L, risk: medium` | 积压最久且风险最高，建议维护者优先安排评审与沙箱回归验证 |
| [#8078](https://github.com/nearai/ironclaw/pull/8078) | 约 2 周（09-06 创建） | tokio 生态升级（tower-http 0.7.0→0.7.1、tokio-tungstenite） | 小批量升级，建议尽快合入避免与 #8104 冲突 |
| [#8104](https://github.com/nearai/ironclaw/pull/8104) | 1 天 | everything-else 组 29 项升级 | 批量较大，注意与 #7834/#8078 的依赖交叉 |
| [#8103](https://github.com/nearai/ironclaw/pull/8103) | 1 天 | actions 组 8 项升级（含 setup-node 4→7 大版本跳跃） | CI 升级建议在 1.4.1 正式发布前完成验证 |

---

**健康度小结**：✅ 发布流程运转正常，关键 Bug 及时修复；⚠️ 依赖类 PR 积压（尤其 #7834 已近一个月）和 Issue 端零互动值得关注。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目动态日报（2026-09-21）

## 1. 今日速览

LobsterAI 今日保持高活跃度：24小时内 PR 更新 15 条（8 待合并、7 已合并/关闭），Issue 更新 3 条（2 活跃、1 关闭），并密集发布 4 个版本（2026.9.14 → 2026.9.20），迭代节奏约 2 天一版，呈现典型的发版冲刺期特征。核心开发由 @fisherdaddy 主导，集中在 OpenClaw 集成（网关修复、SQLite 迁移）、内置浏览器 Passkey/WebAuthn 支持、定时任务等方向。同时社区贡献者 @btc69m979y-dotcom、@alison-xx 等提交了多个高质量 PR，涵盖 Windows 网关恢复、IM 热配置、数字员工市场等。项目整体健康度良好，开发动力充足，但部分社区 Issue（多为 3 月提交）已标记 stale，响应 backlog 有积压迹象。

## 2. 版本发布

### LobsterAI 2026.9.20（最新）
- **feat: subagent session visibility**（PR #2703）— 提升子 Agent 会话可见性
- **feat(browser): 内置 Agent 浏览器支持 passkey/WebAuthn**（PR #2723）— 新增 browserPasskeys 模块，包含 macOS WebAuthn 集成与打包所需 entitlements，通过 notice 组件在应用内浏览器面板弹出 passkey 提示
- **feat: scheduled ta...**（定时任务相关，正文截断）

🔗 https://github.com/netease-youdao/LobsterAI/releases/tag/v2026.9.20

### LobsterAI 2026.9.17
- **feat(openclaw): 启动前迁移共享状态 schema**（PR #2689）
- **feat(openclaw): 修复快照回滚与 Agent 媒体迁移处理**（PR 后续条目截断）

### LobsterAI 2026.9.15
- **feat: openclaw 兼容性修复**（PR #2683）
- **feat(openclaw): xAI 认证凭据迁移至规范 SQLite 存储**（PR #2675）
- **fix(openclaw): rec...**（截断）

### LobsterAI 2026.9.14
- **feat: OpenClaw 升级至 v2026.8.1，改进 artifact 工作流**（PR #2665）
- **feat: 支持 Markdown 编辑**（PR #2659），含 inline 编辑改进

⚠️ **迁移注意**：本周期多个版本涉及 OpenClaw 数据迁移（共享状态 schema、xAI 凭据 → SQLite），建议升级前备份数据目录；9.17 版本自带修复快照回滚机制，升级失败可回退。

## 3. 项目进展

今日关闭/合并的重要 PR（7 条）：

| PR | 内容 | 影响 |
|---|---|---|
| [#2723](https://github.com/netease-youdao/LobsterAI/pull/2723) | 内置浏览器 Passkey/WebAuthn 支持（macOS） | 安全性/便利性重大提升，Agent 浏览器可登录 passkey 保护的站点 |
| [#2725](https://github.com/netease-youdao/LobsterAI/pull/2725) | Release/2026.9.18 发布 PR | 涉及 11 个 area 的汇总发版 |
| [#2724](https://github.com/netease-youdao/LobsterAI/pull/2724) | 移除 cowork 后台任务（background jobs）功能 | ⚠️ 功能删减：清理后台任务 store、IPC 通道与 UI 面板 |
| [#2722](https://github.com/netease-youdao/LobsterAI/pull/2722) | 定时任务：保留微信目标大小写 + 解释重发拒绝原因 | 修复微信通知发送失败问题 |
| [#2728](https://github.com/netease-youdao/LobsterAI/pull/2728) | 修复 openclaw SQLite 结果文件只读问题 | 稳定性 |
| [#2730](https://github.com/netease-youdao/LobsterAI/pull/2730) | 更新器支持可选定向更新候选（外部贡献，当日开当日关） | 分发能力增强 |
| [#2729](https://github.com/netease-youdao/LobsterAI/pull/2729) | Windows 网关退出恢复与一键修复（外部贡献，当日关闭） | 修复 Windows `SIGKILL 后进程未退出` 导致的重启失败 |

**整体评估**：一日之内合并 Passkey 支持、Windows 网关修复、微信通知修复等多项关键改动，且外部贡献当日提交当日处理，项目推进速度快、维护响应高效。OpenClaw 集成已从功能搭建进入“兼容性修复 + 数据迁移规范化”的稳定化阶段。

## 4. 社区热点

今日活跃度集中在 PR 侧，Issue 讨论较平淡（均标记 stale）：

- **PR #2726「数字员工、专家团队与能力市场」**（[@alison-xx](https://github.com/netease-youdao/LobsterAI/pull/2726)）— 社区最重量级功能提案：能力市场工作流（发现技能、创建数字员工、安装专家团队、浏览专家套件与工具插件、配置 MCP 工具暴露），基于 LobsterAI 原生 agents + SQLite 持久化。诉求指向**商业化/生态化**方向，若合入将显著扩展产品形态。
- **PR #2731「修复 nsp-clawguard 2.5.0 ESM 启动崩溃」**（[@btc69m979y-dotcom](https://github.com/netease-youdao/LobsterAI/pull/2731)）— 修复原生 ESM 下 `__dirname` 缺失导致网关反复重启退出 1 的问题，细致处理了 Windows 盘符/空格/中文路径。反映** Windows + 中文路径用户群**的实际痛点。
- **PR #2721「IM 配置免重启网关生效」**（[@alison-xx](https://github.com/netease-youdao/LobsterAI/pull/2721)）— 解决保存 IM 配置强制整网关重启、中断其他任务的问题，改走 live gateway 热更新。直击日常运维体验。

## 5. Bug 与稳定性

按严重程度排列：

1. **🔴 网关无限重启（Issue [#1007](https://github.com/netease-youdao/LobsterAI/issues/1007)，仍 OPEN/stale）** — Agent Engine 无限重启，用户求助配置解法。相关修复已在 PR #2729（Windows SIGKILL 退出确认）和 #2731（ESM 启动崩溃）中落地，**间接修复，待官方确认关联**。
2. **🟠 nsp-clawguard 插件启动崩溃** — ESM 加载下网关 ready 后退出 1 反复重启，**已有 fix PR #2731**（待合并）。
3. **🟠 Windows 网关一键修复失败** — `process did not exit after SIGKILL`，**已有 fix PR #2729**（已关闭）。
4. **🟡 SQLite 结果文件只读** — **已有 fix PR #2728**（已关闭，已随版本发布）。
5. **🟡 Notion MCP 环境变量未透传（Issue [#1003](https://github.com/netease-youdao/LobsterAI/issues/1003)，OPEN/stale）** — MCP Bridge spawn 时 env 丢失导致 401。**尚无对应 fix PR**，涉及第三方集成，建议维护者确认 Bridge 层 env 传递逻辑。
6. **🟢 删除 Agent 后任务列表不刷新（Issue [#1068](https://github.com/netease-youdao/LobsterAI/issues/1068)，已关闭）** — UI 层小问题，今日关闭。

## 6. 功能请求与路线图信号

近期信号显示下一阶段路线图可能聚焦：

- **能力市场/数字员工生态**：PR #2726 若合入，将成为产品从“个人助手”向“Agent 市场平台”演进的关键节点。
- **Prompt 模板库**（社区 PR [#1009](https://github.com/netease-youdao/LobsterAI/pull/1009)）与 **slash 命令技能选择器**（PR [#1013](https://github.com/netease-youdao/LobsterAI/pull/1013)）— 提效类功能，与官方近期 Markdown 编辑、定时任务方向契合，有合入可能。
- **可扩展 artifacts 预览管道**（PR [#1011](https://github.com/netease-youdao/LobsterAI/pull/1011)）— HTML/React/Mermaid 运行时预览，与 9.14 版 artifact 工作流改进方向一致，纳入概率较高。
- **预设 Agent 模板扩充**（PR [#1008](https://github.com/netease-youdao/LobsterAI/pull/1008)，新增 6 个场景）— 与 #2726 数字员工方向互补。
- **官方节奏**：Passkey（#2723）、subagent 可见性（#2703）表明官方优先级在浏览器能力与多 Agent 协同体验。

## 7. 用户反馈摘要

- **痛点：稳定性**——Agent Engine 无限重启（#1007）是最突出的用户痛点，影响日常可用性；Windows 环境问题占比高（#2729、#2731 均为 Windows 相关）。
- **痛点：第三方 MCP 集成**——Notion MCP 401（#1003）显示 MCP Bridge 的环境变量透传存在黑盒问题，用户自行排查多日无果。
- **痛点：配置变更代价高**——IM 配置保存即重启网关，中断进行中任务（#2721 背景诉求）。
- **使用场景画像**：用户深度使用多 Agent 管理（切换/删除 Agent）、微信通知推送（定时任务 + Weixin 渠道）、Notion 集成等真实生产力场景，中文路径/Windows 用户群体明显。
- **积极信号**：一周四版、外部贡献者当日响应处理，社区对项目响应速度的信任度较高，外部 PR 质量普遍优秀（附详细 Summary 与根因分析）。

## 8. 待处理积压

以下 Issue/PR 均创建于 2026-03 下旬、已 6 个月未实质响应并标记 stale，建议维护者集中清点：

| 条目 | 类型 | 状态 | 建议 |
|---|---|---|---|
| [#1003](https://github.com/netease-youdao/LobsterAI/issues/1003) Notion MCP env 未透传 | Bug | stale | 影响 MCP 生态信任度，建议排查 Bridge spawn 逻辑 |
| [#1007](https://github.com/netease-youdao/LobsterAI/issues/1007) Agent Engine 无限重启 | Bug | stale | 可关联 #2729/#2731 验证后关闭 |
| [#1008](https://github.com/netease-youdao/LobsterAI/pull/1008) 6 个预设 Agent 模板 | feat PR | stale | 与 #2726 方向协同，建议评审 |
| [#1009](https://github.com/netease-youdao/LobsterAI/pull/1009) Prompt 模板库 | feat PR | stale | 高用户价值，建议评审 |
| [#1011](https://github.com/netease-youdao/LobsterAI/pull/1011) artifacts 预览管道 | feat PR | stale | 与官方 artifact 方向一致，建议评审 |
| [#1013](https://github.com/netease-youdao/LobsterAI/pull/1013) slash 技能选择器 | feat PR | stale | 交互提升明显，建议评审 |

**健康度小结**：开发侧极度活跃（本周 4 版本、PR 当日流转），但 3 月批次社区贡献的长期搁置形成“两极”现象——建议建立 stale PR 的批量评审或关闭机制，避免社区贡献流失。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报（2026-09-21）

## 1. 今日速览
今日 Moltis 项目整体活跃度较低：无新开 Issue、无版本发布，仅 1 条待合并 PR 更新。该 PR（#1280）针对 Issue #1277 提交了 Bug 修复，属于小范围的行为修正类变更。整体呈现“维护节奏平稳、待修复项推进中”的状态，社区讨论热度平淡。

## 2. 版本发布
今日无新版本发布，最新 Releases 为空。省略详细说明。

## 3. 项目进展
今日无已合并/关闭的 PR。唯一进展为新增的待合并 PR：

- **[PR #1280](https://github.com/moltis-org/moltis/pull/1280) fix(tools): preserve preset tools for empty active_tools**（作者 @mikemikimike）
  - 将显式传入的空 `active_tools` 数组视为“无单次覆盖（no per-turn override）”，从而保留 preset 中配置的工具控制。
  - 非空的单次工具列表仍受 preset 的 allow/deny 策略约束。
  - 该修复直接解决 [Issue #1277](https://github.com/moltis-org/moltis/issues/1277)，属于行为语义澄清类修复，若被采纳可消除工具配置在边界情况下的歧义。

项目今日净进展有限，主要价值在于工具调用（tools）模块边界行为的规范化。

## 4. 社区热点
今日无活跃 Issue 或 PR 讨论（评论数为 0）。唯一值得关注的是修复型 PR #1280 与其对应 Issue #1277，反映社区对 **per-turn 工具覆盖与 preset 工具策略交互语义** 的关注——用户期望空数组不意外清除 preset 工具。

## 5. Bug 与稳定性
| 严重程度 | 问题 | 状态 |
|---|---|---|
| 中 | [#1277](https://github.com/moltis-org/moltis/issues/1277)：空 `active_tools` 数组错误地清除了 preset 配置的工具控制 | ✅ 已有 fix PR [#1280](https://github.com/moltis-org/moltis/pull/1280)，待合并 |

今日无其他新报告的 Bug、崩溃或回归问题。

## 6. 功能请求与路线图信号
今日无新增功能请求。从 PR #1280 可推断的工具模块演进方向：**更严格的 preset 与 per-turn 覆盖语义**（空数组 ≠ 覆盖为空），如被合并，有望在下一版本中体现为工具控制行为文档化与回归测试的补充。

## 7. 用户反馈摘要
今日 Issue 评论为空，缺乏可直接提炼的用户反馈。间接信号：Issue #1277 表明存在依赖 preset 工具配置的自动化调用场景，用户对“配置被意外重置”类行为敏感，期望工具策略具备可预测性。

## 8. 待处理积压
- **[PR #1280](https://github.com/moltis-org/moltis/pull/1280)**：今日新开、待审查合并，建议维护者优先 review 并补充回归测试，避免 #1277 类问题复发。
- **[Issue #1277](https://github.com/moltis-org/moltis/issues/1277)**：待 #1280 合并后关闭。

---
*数据来源：GitHub（moltis-org/moltis），统计窗口为过去 24 小时。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-09-21）

## 1. 今日速览

过去 24 小时 CoPaw 保持高活跃度：Issues 更新 24 条（新开/活跃 16、关闭 8），PR 更新 30 条（待合并 18、合并/关闭 12），无正式版本发布（但 v2.2.2-beta.3 正处于发布验证期，见 #7891）。今日新增多个高质量 Bug 报告，集中在**上下文管理、工具结果裁剪、Windows 稳定性**三大主题；同时社区围绕 QwenPaw Hub 多租户版（#7318，31 条评论）的讨论持续升温。整体看，项目处于 2.2.2 beta 收尾 + 2.2.0 Hub 功能规划并行阶段，开发节奏健康，但版本迭代中积累的上下文/会话类 Bug 值得关注。

## 2. 版本发布

过去 24 小时无正式 Release。注：[Release Duty Issue #7891](https://github.com/agentscope-ai/QwenPaw/issues/7891) 显示 **v2.2.2-beta.3** 已于 09-20 发布并进入安装验证流程（含平台化验收清单），正式版发布在即。

## 3. 项目进展

今日合并/关闭的 12 个 PR 中，值得关注的包括：

- **[#7887](https://github.com/agentscope-ai/QwenPaw/pull/7887) / [#7886](https://github.com/agentscope-ai/QwenPaw/pull/7886) fix(agents): 处理 input_audio 被拒绝的场景**——修复音频 part 被模型以 unknown-variant 拒绝后回退分类器不触发、会话永久卡死的问题（对应已关闭 Issue #7876）。
- **[#7894](https://github.com/agentscope-ai/QwenPaw/pull/7894) 前端测试补强**——纯测试 PR，Console 语句覆盖率从 64.45% 提升至 67.65%（+1027 语句 / +543 用例），体现 QA 自动化投入。
- **[#7901](https://github.com/agentscope-ai/QwenPaw/pull/7901) / [#7862](https://github.com/agentscope-ai/QwenPaw/pull/7862) 发布流水线优化**——release freeze 改为 workflow_run 触发即时解冻；产物发布加测试门禁、E2E watch 集阻断化。
- **[#5836](https://github.com/agentscope-ai/QwenPaw/pull/5836) Desktop 本地路径可点击打开文件管理器**——历时两个多月的长尾 PR 终于关闭，关闭 #4830。
- **[#7843](https://github.com/agentscope-ai/QwenPaw/pull/7843) AgentScope Platform 内置 Provider**——一键获取 API Key + 模型发现，降低新用户接入门槛。

**待合并的重要 PR**：[#7899](https://github.com/agentscope-ai/QwenPaw/pull/7899)（统一模型发现/定价/选择/思考控制，大型重构）、[#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565)（插件安全热重载与回滚）、[#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719)（ReMeLight 记忆写入支持独立模型，成本优化）、[#6668](https://github.com/agentscope-ai/QwenPaw/pull/6668)（GPT-5.6+ prompt caching）。

## 4. 社区热点

- **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) QwenPaw Hub 多租户版 2.2.0 路线征集**（31 评论，持续最热）——社区对团队协作场景诉求强烈，官方主动征集方向，是下一阶段产品重心。
- **[#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) ToolResultPruner 跳过媒体块导致 base64 无界累积**（6 评论）——`view_image` 图片永不裁剪直至撑爆上下文，直击核心架构痛点，讨论热度高。
- **[#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) 会话丢失**（5 评论）——桌面端用户反复遇到模型配置与历史会话丢失，关联 #7708，用户情绪较激动。
- **[#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) 上下文压缩仍可超出完整请求预算**（4 评论，今日仍活跃）——要求 compaction 基于完整 provider 请求而非仅可见上下文。

## 5. Bug 与稳定性（按严重程度）

**严重（数据丢失/服务崩溃）：**
- [#7908](https://github.com/agentscope-ai/QwenPaw/issues/7908)（今日新报）Windows 下 `execute_shell_command` 子进程的 Ctrl 事件可传播并终止整个 QwenPaw 主机/Uvicorn 服务。**无 fix PR。**
- [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) 桌面端会话与模型配置丢失。**无 fix PR，关联历史问题。**

**高（会话永久失败/上下文爆掉）：**
- [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) 图片 base64 无界累积撑爆上下文。**无 fix PR。**
- [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) 工具返回 PDF 被序列化为 OpenAI 嵌套 file part，DeepSeek 拒收 400——**2.2.1 仍可复现，此前修复(#7621)不完全，属回归。**
- [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) compaction 预算计算不完整导致活跃轮次失败。**无 fix PR。**

**中：**
- [#7905](https://github.com/agentscope-ai/QwenPaw/issues/7905) DoomLoopGate 在纯文本轮次误升级 TERMINATE——**已有 fix PR [#7906](https://github.com/agentscope-ai/QwenPaw/pull/7906)。**
- [#7856](https://github.com/agentscope-ai/QwenPaw/issues/7856) qwenpaw-pet 0.1.1 丢失 actor 参数致工具审批全挂——已有 [#7904](https://github.com/agentscope-ai/QwenPaw/pull/7904)（已关闭）及 [#7898](https://github.com/agentscope-ai/QwenPaw/pull/7898)。
- [#7907](https://github.com/agentscope-ai/QwenPaw/issues/7907)（今日新报）Responses API schema 清洗移除 nullable + 隐式 strict，`recall_history` 可选日期参数无法省略。
- [#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888) 聊天页卡死：浏览器插件注入 `<font>` 包裹 React 文本节点触发 insertBefore NotFoundError（Edge 153）。
- [#7895](https://github.com/agentscope-ai/QwenPaw/issues/7895)（今日新报）空闲清理丢弃其他 consumer 停止期间收到的消息（基于 main 分支代码审查）。
- [#7890](https://github.com/agentscope-ai/QwenPaw/issues/7890) 零停机 reload 丢失插件 runtime hook（middleware 保留），语义不一致。
- [#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882) OpenCode“免费”模型 API 实际 403，UI 标记误导——对应 PR [#7869](https://github.com/agentscope-ai/QwenPaw/pull/7869)（补 session header）在审。

## 6. 功能请求与路线图信号

- **多租户 Hub（#7318）**：官方已明确 2.2.0 方向，结合 #7903（社区与站内信集成）推测 Hub 将与 Platform 账号体系（PKCE 授权）深度打通。
- **统一模型管理（#7899 PR + Issue [#5182](https://github.com/agentscope-ai/QwenPaw/issues/5182) 统一模型配置）**：大型 PR 已在审，很可能进入 2.2.2 正式版，同时可顺带缓解 #7810/#7832 的一系列上下文窗口配置混乱问题。
- **记忆成本优化（#7719）**：记忆写入独立模型，社区呼声高，在审。
- **小而美需求**：[#7648](https://github.com/agentscope-ai/QwenPaw/issues/7648) 网页标题自定义（多面板用户刚需）、[#4974](https://github.com/agentscope-ai/QwenPaw/issues/4974) Agent 头像（已关闭，或已实现）——均为低成本高感知的 Console 改进。

## 7. 用户反馈摘要

- **痛点集中在“上下文与历史”**：压缩后历史翻不到（#7884 用户情绪激烈：“聊天记录多存点，做不到么？”）、会话丢失（#7724）、图片撑爆上下文（#7853）——说明 2.2.x 引入的 compaction/裁剪机制在真实长会话场景下尚未打磨成熟。
- **多 Agent / 多面板重度用户增多**：管理 7-8 个项目面板的用户要求自定义标题（#7648）、快速切换 Agent（#4974），用户群正从个人尝鲜转向生产使用。
- **生态积极性高**：社区自发产出 Skill（#5567 Issue 反馈助手，含隐私脱敏）、插件（qwenpaw-pet）、覆盖率 +543 用例的测试 PR（#7894）——贡献者社区已形成自动化协作模式（QPQAT 标签的署名提交）。
- **对插件热重载的可靠性有明确诉求**（#7890、#7565 PR），插件生态扩张后“升级不断服”成为新预期。

## 8. 待处理积压

- **[#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) 会话/模型丢失**（09-12 提出，5 评论，关联 #7708 历史问题）——数据丢失类问题长期未定位，建议优先投入。
- **[#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) compaction 预算问题**（09-08 提出，今日仍活跃但无 fix PR）——与 #7853 同属上下文管理核心链路，建议与 #7832 PR 一并统筹。
- **[#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) PDF 序列化回归**——上一轮修复不彻底，涉及 DeepSeek 兼容性，影响多模型用户。
- **PR [#6668](https://github.com/agentscope-ai/QwenPaw/pull/6668)**（prompt caching，08-04 提交，在审近 7 周）与 **[#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565)**（插件热重载）均为大型改动，建议给出明确的 review 时间表，避免贡献者流失。
- **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)** 路线讨论将于 2.2.0 落地，建议近期发布官方汇总以收束社区预期。

---
*数据来源：GitHub API（过去 24 小时），统计截至 2026-09-21。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目日报（2026-09-21）

## 1. 今日速览

今日 EasyClaw 仓库整体处于**低活跃但持续交付**状态：过去 24 小时无 Issue 新增或更新，无 PR 提交、合并或关闭，社区讨论暂告静默。与此同时，项目发布了新版本 **v1.9.19（TK Copilot）**，表明核心维护者仍以稳定节奏推进迭代，开发重心集中在达人联盟（Affiliate）工作台的时间筛选与多语言本地化完善上。综合来看，项目健康度良好：无积压 Bug 报告，版本发布节奏未中断，属于典型的“维护者驱动型”平稳期。

## 2. 版本发布

### v1.9.19: TK Copilot v1.9.19
🔗 https://github.com/gaoyangz77/easyclaw/releases

**更新内容：**
- **达人联盟工作台队列时间筛选**：每个队列（queue）均可按本地时间预设或自定义日期范围进行筛选，默认保持“全部时间”（all time），降低默认行为变化带来的使用习惯冲击。
- **样品申请信息增强**：样品申请页面现展示所申请的 SKU。
- **卖家关系备注**：新增卖家关系（seller relationship）备注功能，便于达人/运营记录合作背景。
- **多语言工具标签补全**：补全所有支持语言的工具标签翻译，提升国际化一致性。

**破坏性变更：** 无。本次为功能增强与本地化完善，未涉及 API 或数据结构变更。

**迁移注意事项：** 无需特殊迁移，升级即用。时间筛选默认值为“全部时间”，与旧行为一致。

## 3. 项目进展

- 今日**无 PR 合并或关闭**（待合并 0，已合并/关闭 0）。项目进展主要体现为 v1.9.19 的直接发布，推断维护者以直接推送主干的方式交付，功能面聚焦于 Affiliate 工作台的可用性打磨，属于小步快跑式迭代。

## 4. 社区热点

- 今日无活跃 Issue 或 PR 讨论。如需了解近期历史讨论，可查看：https://github.com/gaoyangz77/easyclaw/issues

## 5. Bug 与稳定性

- 今日**无新增 Bug 报告**（0 条 Issue），无已知崩溃、回归问题，无需修复 PR。当前稳定性面板干净。

## 6. 功能请求与路线图信号

- 今日无新功能请求。从 v1.9.19 的更新方向可推断近期路线图信号：
  - **本地时区适配**持续深化（本次时间筛选按 local-time 处理），后续可能在更多报表/导出场景统一时区逻辑；
  - **多语言完整性**被列为优先项，预计未来版本将继续补齐文案翻译缺口；
  - **卖家关系管理**能力开始出现（备注字段），可能演化为更完整的 CRM 类功能。

## 7. 用户反馈摘要

- 今日无 Issue 评论可提炼。间接信号：v1.9.19 针对 Affiliate 队列筛选和样品申请 SKU 展示的改进，反映用户在此前的使用中存在**按时间排查任务/订单不便**、**样品申请信息不透明**等痛点，本版本已针对性响应。

## 8. 待处理积压

- 今日无长期未响应的 Issue 或 PR 需要提醒（Issue/PR 总更新均为 0）。建议关注后续是否有静默积压浮现：https://github.com/gaoyangz77/easyclaw/pulls

---

**健康度小结：** 交付节奏 ✅ 稳定（v1.9.19 按期发布）｜ 社区互动 ⚪ 静默（0 Issue / 0 PR）｜ 稳定性 ✅ 无新增缺陷报告。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*