# OpenClaw 生态日报 2026-09-12

> Issues: 496 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-09-12 03:42 UTC

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

# OpenClaw 项目动态日报 — 2026-09-12

## 1. 今日速览

OpenClaw 今日保持高活跃度：24 小时内 Issues 更新 496 条（新开/活跃 275，关闭 221），PR 更新 500 条（待合并 287，合并/关闭 213），社区讨论与代码合入节奏基本持平，项目处于高强度迭代期。**v2026.9.4 已发布**，主打“兼容性失败更新的自动回滚恢复”，但发布当天即被曝出多个升级路径上的 P0 级阻断问题（#144742、#144712、#145192），升级链路的稳定性成为当前最集中的风险区。核心维护者 @steipete 与 @obviyus 持续高频提交，今日新增 PR 多为中小型修复与测试重构，整体代码质量管控（proof 机制、merge-risk 标签）较为规范。

---

## 2. 版本发布

### v2026.9.4 ([Release](https://github.com/openclaw/openclaw/releases))

- **核心更新 — 兼容失败更新的恢复机制（#140339）**：更新失败时保留上一个包，当 schema 与配置检查确认回滚安全时，自动恢复上一版本配置和服务；数据库迁移仍要求验证过的更新前备份。
- **⚠️ 发布缺口**：#144742 指出 **#144208 未包含在 2026.9.4 中**（主分支合并晚于发布分支切出），导致残留的 version-1 handoff lease 行会使每次配置写入失败，且被标记为 release blocker。
- **迁移注意事项**：
  - 从 2026.9.2/9.3 升级到 9.4 的 managed update 可能因 #144742 的 handoff lease 兼容检查失败并回滚（#145192）。
  - npm 全局安装在 "global install swap" 阶段在多平台确定性失败（macOS #145072、Windows #145510/#144581），触发"recovery is unverified"误报（#144712，已关闭）。
  - **建议**：非紧急用户暂缓升级至 9.4，等待 9.5 或补丁版本；升级前务必验证备份可用。

---

## 3. 项目进展

今日 PR 活动以修复和打磨为主，重要方向：

- **升级与恢复链路修复**
  - [PR #145547](https://github.com/openclaw/openclaw/pull/145547)：候选能力探测与状态迁移解耦，避免 debug capture 开启时 `target-native-unsupported` 拒绝——直接回应今日多个升级失败 Issue。
  - [PR #145426](https://github.com/openclaw/openclaw/pull/145426) (P0, XL)：多 agent 安装中单个 agent 数据库副本分叉时，放行健康 agent，避免整个 Gateway 不可用（Fixes #144689）。
- **消息与回复可靠性**
  - [PR #145428](https://github.com/openclaw/openclaw/pull/145428)：流式块失败后仍保留最终答案——缓解 #139847/#141252 一族“reply 期间消息丢失”回归。
  - [PR #145051](https://github.com/openclaw/openclaw/pull/145051) (XL)：使聊天登录与模型访问恢复可操作，含 Telegram E2E 证明。
- **性能优化**
  - [PR #145576](https://github.com/openclaw/openclaw/pull/145576)：降低繁忙 Gateway 上 Prometheus 日志开销。
  - [PR #145571](https://github.com/openclaw/openclaw/pull/145571)：降低仓库 checkpoint 延迟。
  - [PR #143494](https://github.com/openclaw/openclaw/pull/143494)：标题/锚点读取脱离全量 transcript reader。
- **语音与模型能力**
  - [PR #145382](https://github.com/openclaw/openclaw/pull/145382) (XL)：支持 GPT-Live 公开模型 `gpt-live-1` 与默认 Talk-by-account。
  - [PR #145190](https://github.com/openclaw/openclaw/pull/145190)：登录后即时发现账户可用模型。
- **客户端体验**
  - [PR #145572](https://github.com/openclaw/openclaw/pull/145572)：Tauri 伴侣端支持内联浏览器面板（security-boundary 风险待验证）。
  - Web UI 一批骨架屏/交互统一修复（#145417、#145418、#145167、#145525、#145545）。

**评估**：今日方向明确指向 9.x 系列最大痛点——升级可靠性与消息丢失，P0 修复 PR 均已进入 maintainer review 阶段，预计 9.5 将是稳定性版本。

---

## 4. 社区热点

| Issue | 热度 | 核心诉求 |
|---|---|---|
| [#119720](https://github.com/openclaw/openclaw/issues/119720) (17 评论) | P1 | 同步 agent 持久化阻塞 Gateway 事件循环；部分修复已落地（#140231、#138984），用户持续追踪验证 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) (15 评论) | P1 | hook/tool 子进程僵尸泄漏导致运行时退化，长期未修，用户持续施压 |
| [#142585](https://github.com/openclaw/openclaw/issues/142585) (15 评论) | **P0** | 2026.9.3 Doctor 拒绝迁移合法的 legacy workspace/attestation，为 7.1→9.3 升级阻断 |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) (15 评论) | P1 | WhatsApp 图片消息卡住主 lane 约 3 分钟，多模态会话状态悬挂 |
| [#140620](https://github.com/openclaw/openclaw/issues/140620) (12 评论) | **P0** | 升级后 transcript 对账仅导入 27/1500 会话即停滞，旧会话无法搜索——数据可迁移性是硬需求 |

**PR 侧**：[#145426](https://github.com/openclaw/openclaw/pull/145426)（多 agent 升级保护）与 [#145382](https://github.com/openclaw/openclaw/pull/145382)（GPT-Live）关注度最高，均带 compatibility 风险标记。

**诉求分析**：社区最强烈的两条主线是 **(1) 大规模/长期部署的升级安全**（1500 会话级用户、600+ agent 用户反复受挫）和 **(2) 消息通道可靠性**（Telegram/WhatsApp 消息丢失与卡顿）。运维型重度用户是当前最活跃也最不满的群体。

---

## 5. Bug 与稳定性（按严重程度）

### P0
| Issue | 问题 | Fix PR |
|---|---|---|
| [#144742](https://github.com/openclaw/openclaw/issues/144742) | 9.4 缺 #144208，handoff lease 行导致配置写入全失败 | ❌ 无（发布流程问题） |
| [#145192](https://github.com/openclaw/openclaw/issues/145192) | 9.2→9.4 升级在 candidate-Doctor 确定性失败 | 部分（#144208 已合但未发布） |
| [#142585](https://github.com/openclaw/openclaw/issues/142585) | Doctor 拒绝合法 legacy 迁移 | ❌ |
| [#140620](https://github.com/openclaw/openclaw/issues/140620) | transcript 对账停滞，旧会话丢失 | ❌ |
| [#123326](https://github.com/openclaw/openclaw/issues/123326) | 多 agent Codex 迁移 crash-loop | ❌ |
| [#136203](https://github.com/openclaw/openclaw/issues/136203) | Windows de-DE 升级后 Doctor 阻塞 | ❌ |

### P1
- [#141252](https://github.com/openclaw/openclaw/openclaw/issues/141252) / [#139847](https://github.com/openclaw/openclaw/issues/139847)：2026.9.2 回归——reply 运行中到达的消息失败"no active tool authority snapshot"（fix-shape-clear 标记，方向明确但 PR 未出）
- [#144911](https://github.com/openclaw/openclaw/issues/144911)：**9.4 新报** MCP server init 超时未处理 rejection 使整个 Gateway 崩溃（fix-shape-clear）
- [#142476](https://github.com/openclaw/openclaw/issues/142476)：cron reaper 在 632-agent 网关上每几分钟同步阻塞事件循环 14–76 秒（fix-shape-clear）
- [#126246](https://github.com/openclaw/openclaw/issues/126246)：Telegram 出站消息卡 `send_attempt_started`，重启后丢失
- [#94716](https://github.com/openclaw/openclaw/issues/94716)：claude-cli provider 发送过期 user-agent 导致认证失败（有 linked PR）
- [#145266](https://github.com/openclaw/openclaw/issues/145266)：**9.4 新报** Doctor 从 npm 刷新 Codex 插件遮蔽重建版本

### P2 值得注意
- [#141747](https://github.com/openclaw/openclaw/issues/141747)：`<system-reminder>` 每轮注入 ~686 token 无 opt-out（成本敏感用户关注）
- [#145562](https://github.com/openclaw/openclaw/issues/145562)：**今日新报** 原生 Gemini 的 systemInstruction 缺失 available_skills 目录（fix-shape-clear）
- [#125333](https://github.com/openclaw/openclaw/issues/125333)：totalTokens 膨胀在 beta.2 仍复现（有 linked PR）

**结论**：升级/Doctor 链路的 P0 缺陷修复 PR 覆盖率低，是当前最大健康度隐患；消息丢失类回归已有修复方向。

---

## 6. 功能请求与路线图信号

- **语音实时能力**：#145382（GPT-Live 支持）已 ready for maintainer review，语音是明确的路线图方向；配套 #145450（macOS 捕获清理）同步推进，**大概率进入下一版本**。
- **Tauri/Linux 桌面端浏览器面板**（#145572）：补齐与 macOS 应用对齐的 inline Browser 能力，security-boundary 待验证。
- **Telegram 持久会话委托**（[PR #145543](https://github.com/openclaw/openclaw/pull/145543)）：暴露 sessions_spawn 线程绑定，社区对多会话管理需求上升。
- **OpenRouter 成本暴露**（[#9016](https://github.com/openclaw/openclaw/issues/9016)，长期未决）：与 #141747 的 token 注入问题同属“成本可观测性”诉求，维护者已参与讨论，存在纳入可能。
- **会话 fork/resume/continue**（[#59109](https://github.com/openclaw/openclaw/issues/59109)）：长期 feature request，尚无进展。
- **无障碍**：[#126876](https://github.com/openclaw/openclaw/issues/126876)（盲人用户 13 项 screen reader 障碍）已关闭但反映产品包容性缺口。

---

## 7. 用户反馈摘要

- **痛点集中区**：
  - **升级恐惧症**：多个用户报告 7.1→8.x/9.x 升级需要“数次手动干预”（#136203），Windows 用户尤其受挫（#137377、#138260、#144581）。
  - **重度部署性能**：632-agent 网关（#142476）、1500 会话（#140620）用户暴露了中等规模以上的工程短板，同步 I/O 阻塞事件循环是反复出现的模式。
  - **消息可靠性信任**：Telegram 消息静默丢失（#126246）、reply 中消息失败（#139847）直接损害“个人助理”的核心承诺。
  - **成本透明**：686 token/turn 的隐藏注入（#141747）引发对 API 成本上涨的不满。
- **满意点**：9.4 的回滚恢复机制方向获认可（#144712 中用户确认 rollback 本身工作正常）；诊断报告（update failure report）自动化程度高，便于 issue 复现；部分长期问题（#140339、#139583）修复得到社区正向验证（#142476 明确确认前序修复生效）。
- **使用场景画像**：活跃用户多为多 agent、多通道（Telegram/WhatsApp/Discord/飞书）、7×24 常驻部署的运维型用户，而非轻量尝鲜者。

---

## 8. 待处理积压（需维护者关注）

| Issue | 状态 | 提醒 |
|---|---|---|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 僵尸进程泄漏，6月底至今 P1 | no-new-fix-pr，长期无修复计划，运行时长用户持续受影响 |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 事件循环阻塞，needs-maintainer-review + needs-product-decision | 部分修复后仍开放，需要架构层面决策（异步持久化） |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp 多模态卡顿 | 6月底至今，多模态路径性能未根治 |
| [#126246](https://github.com/openclaw/openclaw/issues/126246) | Telegram 消息丢失 | no-new-fix-pr，消息可靠性核心问题 |
| [#112475](https://github.com/openclaw/openclaw/issues/112475) | 设备配对恢复失败，7月底至今 P0 | stale 风险，安全相关 |
| [#125333](https://github.com/openclaw/openclaw/issues/125333) | totalTokens 膨胀，有 linked PR 但 PR 长期未合 | 数据完整性 |
| [#114158](https://github.com/openclaw/openclaw/issues/114158) | fs-safe 0o600 硬编码破坏 NFS/SMB 共享工作区 | 多审批标签阻塞（security/product/maintainer） |
| [#134993](https://github.com/openclaw/openclaw/issues/134993) | 大型 skill/agent 集群下 CPU 忙循环 | needs-info，9.1 报告至今未复现确认 |

**健康度总评**：吞吐量与修复节奏优秀（今日关闭 Issue 221 条），但 **9.4 发布流程缺口（#144742）与升级链路 P0 集群**表明发布前回归验证需要加强；建议维护者优先推送含 #144208 的补丁版本，并为 9.x 升级路径建立统一的 E2E 矩阵（npm global / Windows / macOS / managed update × 各起始版本）。

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告

**数据日期：2026-09-12 | 数据窗口：过去 24 小时**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入**“重度使用驱动的稳定化竞赛”阶段**：头部项目（OpenClaw、Zeroclaw、Hermes Agent）日均 Issue/PR 活动均达数百条量级，核心用户群体从尝鲜者转变为 7×24 多 agent、多通道（Telegram/WhatsApp/飞书/Discord）常驻部署的运维型重度用户。生态竞争焦点已从功能堆叠转向**升级可靠性、长会话性能、token 成本透明度**三大工程硬指标——这三点恰恰是当前几乎所有项目的回归重灾区。同时，语音实时交互（GPT-Live 类）、MCP 工具生态、多租户/团队化（Hub）成为明确的方向性投入。生态分层明显：约半数项目（NullClaw、IronClaw、TinyClaw、ZeptoClaw）已陷入静默，马太效应加剧。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 关键事件 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 496（新/活 275，关 221） | 500（待合 287，合 213） | ✅ v2026.9.4 | 发布当天曝 P0 升级阻断集群 | ⭐⭐⭐⭐ 吞吐极高，但发布质量管控失分 |
| **Zeroclaw** | 50（新/活 39，关 11） | 50（待合 48，合 2） | ❌ | Anthropic 缓存失效 Bug 链集中爆发 | ⭐⭐⭐ 报告质量高，但合并吞吐严重不足 |
| **Hermes Agent** | 50（新/活 45，关 5） | 50（待合 35，合 15） | v0.21.2（昨日） | v0.21.0 重构回归消化期 | ⭐⭐⭐⭐ 报障—修复闭环健康 |
| **CoPaw (QwenPaw)** | 20（新/活 15，关 5） | 24（待合 15，合 9） | ✅ v2.2.1 | Hub 多租户路线图讨论（26 评论） | ⭐⭐⭐⭐⭐ 版本节奏稳健，社区贡献活跃 |
| **NanoBot** | 3 | 33（待合 15，合 18） | ❌（版本酝酿中） | 批量关闭 8 月积压 PR | ⭐⭐⭐⭐ 集中清积压，为发版准备 |
| **NanoClaw** | 5 | 38（待合 29，合 9） | ❌ | 安装链路修复 + 语音通道 PR 组合 | ⭐⭐⭐⭐ 修复响应快，合并积压略升 |
| **LobsterAI** | 3 | 6（合 4） | ❌ | Windows 插件系统修复密集落地 | ⭐⭐⭐ 修复质量高，配置持久化积压 2-6 月 |
| **PicoClaw** | 4 | 2 | ❌ | Slack 修复落地，多条 stale | ⭐⭐ 维护者响应是瓶颈 |
| **Moltis** | 1 | 1（0 合并） | ❌ | 新 Bug #1264 待 triage | ⭐⭐ 低活跃，review 节奏慢 |
| **EasyClaw** | 0 | 0 | ✅ v1.9.15 | 静默交付补丁版本 | ⭐⭐ 发布节奏稳，社区零参与 |
| NullClaw / IronClaw / TinyClaw / ZeptoClaw | 0 | 0 | — | 无活动 | 静默/停滞 |

---

## 3. OpenClaw 在生态中的定位

**规模上：绝对头部。** 日均 Issue/PR 活动量（约 1000 条）是第二名 Zeroclaw/Hermes（约 100 条）的 **10 倍**，Issue 编号已进入 14 万量级，社区体量和讨论密度（单 Issue 15-17 评论）均为生态之最。

**技术上：最激进的迭代节奏与最重的技术债并存。**
- **优势**：proof 机制、merge-risk 标签等代码质量管控规范；v2026.9.4 的自动回滚恢复机制方向获社区认可；P0 修复 PR 进入 maintainer review 的响应速度快。
- **风险**：发布流程存在结构性缺口——#144208 主分支合并晚于发布分支切出导致 9.4 当天即出现 P0 阻断（#144742），叠加 npm 全局安装多平台确定性失败（macOS/Windows），形成“发布日即事故日”的模式。这是所有项目中发布质量与迭代速度失衡最典型的案例。
- **对比差异**：Zeroclaw 走深度架构路线（OIDC 身份合同 10 级 stacked PR、RFC 治理流程）；Hermes 重本地/自托管推理生态；OpenClaw 则以多通道消息集成 + 多 agent Gateway 规模化为核心壁垒（632-agent、1500 会话级用户的存在本身就是定位证明）。

**用户画像差异**：OpenClaw 用户是运维型重度部署者；Hermes 核心群体是本地推理/自托管用户；CoPaw 正向团队协作平台迁移；PicoClaw/Moltis/EasyClaw 面向轻量/边缘场景。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **① 升级/发布链路可靠性** | OpenClaw（P0 集群）、CoPaw（#7716 MCP 升级回归）、Hermes（update 生命周期 3 个 Issue）、NanoClaw（全新安装 3 连 Bug） | 生态第一大共性痛点：升级破坏现有部署，用户被迫滞留旧版本（CoPaw 用户停留在 2.1.1b3，OpenClaw 建议“暂缓升级 9.4”） |
| **② Token 成本可观测性与缓存效率** | Zeroclaw（缓存前缀重写族 #10777/#10778）、OpenClaw（686 token/turn 隐藏注入 #141747）、Hermes（花费低估 72% #108775）、CoPaw（KV-cache 可观测 #7717） | 重度 API 用户用抓包级数据举证，成本透明已成硬需求 |
| **③ 语音实时交互（GPT-Live 类）** | OpenClaw（#145382）、NanoClaw（#3764/#3772 双 PR） | 全双工语音是最明确的方向性投入，两个头部项目同期推进 |
| **④ 长会话/大规模性能** | OpenClaw（事件循环阻塞、632-agent）、NanoBot（大会话回放增量化）、Zeroclaw（200k-token 多会话） | 同步 I/O 阻塞事件循环是多项目反复出现的架构模式问题 |
| **⑤ 消息通道可靠性与多模态** | OpenClaw、Zeroclaw（#5514）、Moltis、CoPaw、LobsterAI（飞书） | Telegram/WhatsApp 消息丢失、媒体批处理、多模态会话悬挂跨项目普遍存在 |
| **⑥ Provider 兼容性矩阵扩张** | NanoBot（DeepSeek/Gemini 修复）、CoPaw（Serply/Atlas）、Moltis（Requesty）、PicoClaw（#3366 OpenAI Compatible）、Hermes（Cloudflare Workers AI） | OpenAI 兼容接口已成为事实标准，自托管路由需求上升 |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Zeroclaw | Hermes Agent | CoPaw | NanoBot | 其余（长尾） |
|---|---|---|---|---|---|---|
| **功能侧重** | 多 agent Gateway + 多通道消息 | 身份安全架构 + 重度 CLI/TUI 工作流 | 本地推理 + 桌面端 profile | Hub 多租户团队协作 | WebUI 体验 + 渠道扩张（Linear/MS 邮箱） | 单点场景（客服 EasyClaw、边缘 PicoClaw） |
| **目标用户** | 运维型重度部署者 | 全天候重度 API 用户 | 本地/自托管模型用户 | 个人→团队过渡用户 | 自托管爱好者 | 轻量/垂直场景 |
| **架构特点** | Node/Gateway 中心化，大规模并发 | Rust 系（栈溢出问题佐证），stacked PR 工程化 | Python，cron 调度 + state.db | 插件化 Hub 演进 | asyncio Python | — |
| **治理成熟度** | 高（proof/merge-risk） | 最高（RFC 投票、决策队列） | 中高 | 中高 | 中 | 低 |

**关键观察**：LobsterAI 是特殊的“寄生生态”——其当日修复全部围绕 OpenClaw Gateway 集成（插件清理、clawguard 兼容），说明 OpenClaw 正在成为下游项目的运行时基座，间接扩大其生态影响力。

---

## 6. 社区热度与成熟度分层

- **快速迭代期（高风险高回报）**：OpenClaw（高强度迭代 + 发布质量失血）、Hermes（大重构回归消化）、Zeroclaw（安全架构攻坚 + 评审积压 48 PR）
- **质量巩固/发版酝酿期**：CoPaw（v2.2.1 刚落地，消化升级回归）、NanoBot（批量清积压，版本在途）、NanoClaw（安装链路加固 + 语音特性孵化）
- **稳定维护期**：EasyClaw（静默交付）、LobsterAI（修复驱动，无路线图信号）
- **响应瓶颈期（⚠️）**：PicoClaw、Moltis——高质量社区贡献因 stale/无 review 面临流失，是典型的衰退前兆
- **停滞**：NullClaw、IronClaw、TinyClaw、ZeptoClaw

**成熟度悖论**：活跃度最高的三个项目恰好都有“配置/数据在重启或升级后被覆盖/丢失”类问题（OpenClaw transcript 对账停滞 #140620、LobsterAI #2293/#1006/#2654、Hermes profile 回归），说明持久化层是这类系统成熟度的共同短板。

---

## 7. 值得关注的趋势信号

1. **“升级恐惧”成为生态级信任危机**。至少 5 个项目同日出现升级阻断报告。对开发者的启示：升级路径需要独立的 E2E 测试矩阵（OpenClaw 维护者已自我诊断此点），回滚机制（OpenClaw 9.4 方向）将从加分项变为必备项。

2. **用户从“功能消费者”变为“成本审计者”**。Zeroclaw 用户抓包对比缓存读写、Hermes 用户实测花费被低估 72%、OpenClaw 用户逐 token 统计隐藏注入——重度用户正在用财务级精度审视 agent 框架的 token 效率。缓存前缀稳定性（Zeroclaw 的 #10777/#10778 族）和成本记账准确性将直接决定框架口碑。

3. **语音实时化是下一个竞争窗口**。OpenClaw 与 NanoClaw 同期推进 GPT-Live 全双工语音，暗示“文本频道 agent”向“实时多模态助理”的迁移已经开始，1-2 个版本周期内头部项目都会跟进。

4. **从个人工具到团队平台的结构性分化**。CoPaw Hub 多租户（26 评论官方讨论）是明确信号；与之对照，OpenClaw/Hermes 用户的多 agent 大规模部署实质上也在走向“个人基础设施”。开发者应提前考虑多租户隔离、身份（Zeroclaw 的 OIDC/RFC 7141 栈）与审计日志（Hermes #104102）。

5. **自托管/私有化是不可逆的需求主线**。PicoClaw 的 OpenAI Compatible Provider、NanoBot 的 Telegram 自建端点、Hermes 的 Termux/Ollama 群体、Moltis 的 Requesty——用户要求“数据不出域 + 模型可替换”，OpenAI 兼容层已是集成的事实标准。

6. **维护者带宽是长尾项目的生死线**。当日 12 个项目中 4 个零活动、3 个处于 stale 危机，而头部项目还在为评审积压挣扎（Zeroclaw 48 待合、OpenClaw 287 待合）。对贡献者的建议：优先参与修复响应在 24 小时内的项目（NanoClaw、Hermes、CoPaw 当日均有同日 fix PR），其社区协作闭环质量最高。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 · 2026-09-12

## 1. 今日速览

NanoBot（HKUDS/nanobot）今日整体处于**高度活跃的开发推进期**：过去 24 小时内共 33 条 PR 更新（15 个待合并、18 个已合并/关闭），Issues 更新 3 条（新开/活跃 2、关闭 1），无新版本发布。PR 活动以 WebUI 性能修复、多渠道（Linear/Telegram/Email）功能增强和 Provider 兼容性修复为主线，大量 8 月提交的长周期 PR（如 #5214、#5230、#5356）在今日集中被关闭/合并，显示维护者正在批量清理积压、为下一次版本发布做准备。社区侧相对平静，但 AnySearch 团队的连续集成请求（#5505、#5731）和 P1 级 headless 部署密码问题（#5726）值得维护者优先关注。

## 2. 版本发布

今日无新版本发布。但 18 个 PR 的集中关闭（含多个 P1 修复）暗示版本酝酿中，建议关注后续 tag。

## 3. 项目进展

今日关闭/合并的 18 个 PR 中，重点包括：

**P1 级修复（稳定性核心）**
- [PR #5214](https://github.com/HKUDS/nanobot/pull/5214)（已关闭）：修复 DeepSeek 推理内容经 OpenAI Responses API 转发时的反序列化失败，保障多 Provider 对话路由稳定。
- [PR #5230](https://github.com/HKUDS/nanobot/pull/5230)（已关闭）：修复 Gemini 3 拒绝无 thought signature 的重放函数调用问题，提供签名回退机制，解决跨 Provider 会话迁移。
- [PR #5215](https://github.com/HKUDS/nanobot/pull/5215)（已关闭）：Gateway 停止时确定性释放 exec session / MCP 子进程资源，消除 asyncio 关闭噪音与停机卡死。

**WebUI 体验与性能**
- [PR #5742](https://github.com/HKUDS/nanobot/pull/5742)（已关闭）：修复删除 automation 后侧边栏和页面失去响应的问题，含回归测试。
- [PR #5741](https://github.com/HKUDS/nanobot/pull/5741)（已关闭）：工具进度帧中剔除 base64 二进制数据，将图片读取场景从数 MB 级 WebUI 记录降回正常体积，显著节省带宽与回放开销。
- [PR #5356](https://github.com/HKUDS/nanobot/pull/5356)（已关闭）：全面重构聊天渠道设置流程（分组目录、依赖安装与激活解耦、本地化文案），是长期占据积压榜首的大体量 PR。
- [PR #5255](https://github.com/HKUDS/nanobot/pull/5255)（已关闭）：WebUI API 状态面板真实反映外部管理的 `nanobot serve` 实例状态。

**Provider / 图像**
- [PR #5216](https://github.com/HKUDS/nanobot/pull/5216)（已关闭）：Gemini Flash 图像提示改经 `generationConfig.imageConfig` 传递，修复 HTTP 400 错误。

**整体评估**：今日关闭量约为待合并量的 1.2 倍，且覆盖多个 P1 修复，项目在稳定性与 WebUI 打磨两条线上同步推进，健康度良好。

## 4. 社区热点

- [Issue #5505](https://github.com/HKUDS/nanobot/issues/5505)（已关闭，8 条评论，今日话题度最高）：AnySearch 团队请求作为 web_search 新 Provider 集成。8 条评论显示社区对“免 Key、匿名配额”的搜索方案有讨论分歧——最终关闭可能意味着首次提案被拒或已转入其他路径。
- [Issue #5731](https://github.com/HKUDS/nanobot/issues/5731)（开放，昨日新开）：同一团队转向请求将 AnySearch extract 作为 `web_fetch` 后端，属于对 #5505 结果的策略调整，反映第三方服务方希望深度嵌入 NanoBot 工具链的强烈诉求，维护者需警惕营销式提案的质量把关。
- [Issue #5726](https://github.com/HKUDS/nanobot/issues/5726)（开放，P1）：headless 服务器用户因默认浏览器无 JS 无法完成首次设置，且不知 WebUI 初始密码。2 条评论。暴露了**无头部署/服务器场景首次配置体验缺失**的真实痛点，建议提供 CLI 初始化密码或 headless 安装文档。

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| P1 | [#5726](https://github.com/HKUDS/nanobot/issues/5726) headless 安装后 WebUI 初始密码不明，首次设置受阻 | 开放 | ❌ 暂无 |
| P2 | [#5675](https://github.com/HKUDS/nanobot/pull/5675)（PR）主模型挂起耗尽 runner deadline，`FallbackProvider` 回退机制完全失效 | 待合并（即 fix PR） | ✅ 本身即修复 |
| P2 | [#5605](https://github.com/HKUDS/nanobot/pull/5605)（PR）被过滤拒绝的邮件仍被标记 `\Seen`，可能丢件 | 待合并 | ✅ 本身即修复 |

已修复合并的今日稳定性成果：#5214（DeepSeek 反序列化）、#5230（Gemini 签名回退）、#5215（Gateway 资源释放）、#5742（automation 删除后 UI 锁死）。

## 6. 功能请求与路线图信号

**可能进入下一版本**（已有活跃 PR 支撑）：
- **渠道生态扩张**：[PR #5495](https://github.com/HKUDS/nanobot/pull/5495) 原生 Linear Agent 渠道（OAuth+PKCE、webhook 去重队列）；[PR #5609](https://github.com/HKUDS/nanobot/pull/5609) Microsoft 委托 OAuth 邮箱接入（应对 Office365 基础认证下线）；[PR #4919](https://github.com/HKUDS/nanobot/pull/4919) Telegram 自定义 Bot API 端点（自建/企业网关场景）。三者均持续更新至今日，是渠道战略的明确信号。
- **性能优化方向**：[PR #5745](https://github.com/HKUDS/nanobot/pull/5745)（P1）大型历史回放增量化+缓存，与已合并的 #5741 一脉相承，表明**大会话性能**是当前主线。
- **Token/上下文治理**：[PR #5388](https://github.com/HKUDS/nanobot/pull/5388) MCP schema 字节预算（opt-in、fail-open），为重度 MCP 用户控制上下文成本。

**待决策**：[#5731](https://github.com/HKUDS/nanobot/issues/5731) AnySearch 作为 web_fetch 后端——#5505 已被关闭，是否接纳同源服务需维护者明确表态，避免反复消耗评审资源。

## 7. 用户反馈摘要

- **无头/服务器部署用户**（#5726）：默认行为假设桌面浏览器环境，远程用户被初始密码挡在门外，且文档未覆盖——反映文档与部署形态覆盖不足。
- **隐私与自托管倾向**（#4919）：Telegram 用户希望对接自建 Bot API 服务器，说明社区中自托管、数据不出域诉求明显。
- **共享邮箱场景**（#5606）：多别名共用一个收件箱的用户需要按收件地址过滤，真实多租户使用场景正在出现。
- **大历史会话卡顿**（#5745、#5741 连续 PR）：长会话用户遭遇多 MB 级进度帧与缓慢回放，性能问题已是近期最高频痛点类别。
- **外部工具生态方**（#5505/#5731）：第三方服务主动寻求集成，侧面验证项目影响力和工具链扩展价值。

## 8. 待处理积压

- [PR #5495](https://github.com/HKUDS/nanobot/pull/5495)（8/23 提交，标记 conflict）：Linear 渠道，体量大且存在合并冲突，需作者 rebase，避免长期漂移。
- [PR #4919](https://github.com/HKUDS/nanobot/pull/4919)（7/14 提交，约 2 个月，标记 conflict）：Telegram 自定义 API 端点，长期未合并，建议维护者给出明确评审结论。
- [PR #5388](https://github.com/HKUDS/nanobot/pull/5388)（8/13 提交，标记 conflict）：MCP schema 预算，设计决策类 PR，需架构层面拍板。
- [Issue #5726](https://github.com/HKUDS/nanobot/issues/5726)（P1，昨日创建）：尚无维护者修复动作，作为唯一开放 P1，建议今日内响应。
- 多个 #5602–#5609 系列 PR（8/30 提交，均标记 conflict）出现集中冲突，提示 main 分支近期变动较大，建议批量协调 rebase 以降低合并成本。

---
*数据来源：GitHub API，统计窗口为过去 24 小时。链接前缀均为 `https://github.com/HKUDS/nanobot/`。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 — 2026-09-12

> 数据来源：github.com/zeroclaw-labs/zeroclaw 过去 24 小时 GitHub 活动

---

## 1. 今日速览

- 项目延续高活跃状态：过去 24 小时 **Issues 更新 50 条**（新开/活跃 39、关闭 11），**PR 更新 50 条**（待合并 48、合并/关闭 2），无新版本发布。
- 今日是“问题发现日”：多位核心贡献者（@Audacity88、@danieliyahu1、@IftekharUddin）集中报告了一批围绕 **Anthropic 提示缓存（prompt caching）失效** 的高严重度 Bug 链，成为当日最突出的技术主题。
- OIDC 身份与访问里程碑（#8289）的巨型 PR 栈持续推进，10+ 个 stacked PR 今日均有更新，显示安全架构重构处于攻坚阶段。
- 社区治理层面，RFC 投票流程简化提案（#10549）和维护者决策队列（#8692）持续吸引讨论，项目流程透明度建设活跃。
- 合并吞吐偏低（仅 2 个 PR 合并/关闭 vs 48 待合并），**评审积压是当前项目健康度的主要风险信号**。

---

## 2. 版本发布

今日无新版本发布。当前讨论中的 Bug 多数标注基于 v0.8.5，暗示下一次版本（可能为 v0.8.6 或 v0.9.0）将集中修复缓存失效、重试策略与上下文压缩问题。

---

## 3. 项目进展

今日合并/关闭的 PR 数量少但价值明确：

- **PR #10262（已关闭）** — `fix(rpc): close RPC connections on daemon reload and unstick zerocode quickstart`：维护者确认最新 head 已通过必需 CI（run 34618807959），完成多次干净的 master 机械合并后推进。该修复解决 daemon reload 时 RPC 连接悬挂导致 zerocode quickstart 卡死的问题。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10262)
- 今日关闭的 11 个 Issue 中多个关联修复落地：Telegram 媒体组批处理（#5514）、zerocode 启动目录问题（#10609，S1 级）、配置降级修复误调不同二进制（#10532）、工具结果截断不可见（#10115）等。

仍在推进中的大型工作：

- **OIDC 里程碑 PR 栈**（#10248 → #10255 → #10259 → #10263 → #10265 → #10268 → #10270 → #10274 → #10275 → #10321）：构成 RFC 7141 身份合同的完整实现路径（canonical principals → 存储隔离 → principal 会话 → 浏览器 PKCE/跨面注册 → Nevis 退役）。今日全栈更新，是最接近落地的大版本特性。
- **PR #10197** `fix(acp): persist interrupted turn progress`：为中断的 Code/ACP 轮次做检查点持久化，直接对应当日新开的 #10788（失败轮次丢弃历史），修复方向已明确。

---

## 4. 社区热点

**热度第一：维护者决策队列 Tracker（15 条评论）**
[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — RFC、设计 Issue 与发布政策问题的决策队列，自 7 月持续活跃至今，反映社区对“决策可见性”的强烈诉求，以及维护者评审带宽紧张的现实。

**RFC：简化 RFC 投票流程（9 条评论）**
[#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) — 提议取消强制的 48/72 小时讨论窗口，并让 REVISE 状态中止当前快照。作者指出固定计时器在实践中并未带来更多评审，是流程性摩擦。社区正在认真权衡“减少摩擦”与“保障评审充分性”。

**Telegram 多模态批处理（8 条评论，已关闭）**
[#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) — 多图发送被拆成多次 LLM 请求的问题今日关闭，是长期用户体验痛点的解决。

**Windows 栈溢出对（6 + 3 条评论）**
[#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) 与 [#10753](https://github.com/zeroclaw-labs/zeroclaw/issues/10753) — 两个独立报告指向同一问题：`RpcDispatcher::process_line` 在 2 MB 栈保护测试中从 9 月 7 日通过变为 9 月 10 日溢出（0xc00000fd），#10753 已关闭（作为重复/已有跟进），#10734（P1）保持 in-progress。

---

## 5. Bug 与稳定性（按严重度排列）

### S1 / P1 级（高风险）

| Issue | 问题 | Fix 状态 |
|---|---|---|
| [#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785) | zerocode 通知延迟触发 `begin_notification_resync → session/cancel`，一次性取消所有运行中轮次（含 ~200k token 会话） | 无 fix PR，今日新开 |
| [#10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778) | 多模态图片上限驱逐重写更早的历史消息，使缓存前缀从该点全部失效（有抓包证据，197→243 消息会话对比） | accepted，暂无 PR |
| [#10777](https://github.com/zeroclaw-labs/zeroclaw/issues/10777) | thinking/effort 配置在轮次间翻转，重写整个已缓存历史段（第二turn 读 40k 缓存却写 129k） | accepted，暂无 PR |
| [#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788) | Code/ACP 轮次失败时，已接受的 prompt 和已完成的工具交互全部丢弃，不写入持久历史 | 对应 PR [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197)（in review） |
| [#10782](https://github.com/zeroclaw-labs/zeroclaw/issues/10782) | 渠道 reply-intent 预检丢弃 LLM usage，分类器成本/配额从不记账 | 无 fix PR |
| [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) | Windows 下 `session/new` 栈溢出，距 2 MB 保护线仅 2% | in-progress |
| [#10731](https://github.com/zeroclaw-labs/zeroclaw/issues/10731) | `zeroclaw service logs` 在 macOS/Windows/OpenRC 上健康运行时输出为空 | in-progress |

### P2 / S2 级（中风险）

- [#10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787)：Anthropic 过载（529）仅获一次无退避立即重试，忽略 `provider_retries`。
- [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736)：流式前置失败跳过已宣告的非流式回退（in-progress）。
- [#10786](https://github.com/zeroclaw-labs/zeroclaw/issues/10786)（已关闭）：Anthropic 丢弃上一轮 thinking 块导致每轮边界重写缓存历史。
- [#10779](https://github.com/zeroclaw-labs/zeroclaw/issues/10779)：OpenCode 429 配额耗尽仍以亚秒退避重试而非快速失败。
- [#10759](https://github.com/zeroclaw-labs/zeroclaw/issues/10759)：SOP RPC run-detail 遗漏 `failure_reason`。

**稳定性主题判断**：今日 Bug 报告高度聚焦一个共性根因——**Anthropic 提示缓存前缀被无意重写**（#10777、#10778、#10786、#10701 同族），直接推高用户 token 成本，是当前最值得优先解决的系统性问题。

---

## 6. 功能请求与路线图信号

**上下文压缩回归（P1，强烈信号）**
[#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) + [#10781](https://github.com/zeroclaw-labs/zeroclaw/issues/10781)：v0.8.5 缺失主动的 token 预算驱动上下文压缩，多个配置键（`context_compression.*`、`keep_recent`、`collapse_tool_results`）是“惰性”的。**与待合并 PR [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535)（按模型窗口比例锚定压缩预算）高度契合**，该 PR 若合并可部分回应此诉求，很可能进入下一版本。

**OIDC 里程碑（确定性最高）**
[#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) Tracker 加上 10 级 stacked PR 链，构成本项目最明确的路线图，预计按栈序逐步合并。

**其他值得关注的请求**
- [#10754](https://github.com/zeroclaw-labs/zeroclaw/issues/10754)：记忆偏好分类需区分“内容作者身份”与“传输渠道”，安全域深化。
- [#9967](https://github.com/zeroclaw-labs/zeroclaw/issues/9967)：建立可重复的 harness 评估框架，为开发方向提供量化依据。
- [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549)：RFC 流程简化，若通过将改变所有后续贡献的节奏。

---

## 7. 用户反馈摘要

- **成本焦虑真实且具体**：多条 Issue 附带精确的 token 抓包数据（如 #10777 “读了 40,310 缓存却写入 129,982”），表明核心用户群是重度 API 用户，缓存失效直接 translate 成账单，容忍度极低。
- **重度多会话工作流暴露稳定性短板**：#10785（3 个 200k-token 会话并行）和 #9092（长会话 TUI 卡顿）说明用户把 Zeroclaw 当全天候主力工具用，而产品在长时/高负载场景的鲁棒性尚未跟上。
- **配置承诺与行为不符损害信任**：#10781 用户明言“设置这些键以为能省 token，结果什么都没发生”——文档与实现的偏差比功能缺失更伤口碑。
- **修复响应速度获认可**：多个 Issue（#5514、#10609、#10690）从报告到关闭节奏较快，且大量 follow-up issue 建立在已合并修复之上（#10757、#10787），显示维护者对反馈的闭环处理质量较高。

---

## 8. 待处理积压（维护者关注建议）

1. **PR 评审积压（48 个待合并）**：尤其 OIDC PR 栈（#10248–#10321）虽为 distinguished contributor 产出并今日仍活跃，但栈底 #10248 标记 `needs-author-action`，**栈底不合并则整栈冻结**，建议优先推动。
2. [#9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428)（7 月 27 日开，risk:high）：Bluesky/Reddit 入站适配器从未校验 `peer_groups` 授权，是安全类修复却标记 `needs-author-action` 拖延月余，建议升级优先级。
3. [#9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635)（8 月 1 日，risk:high）：`git -C` 全局选项导致风险分类器误判，同样 `needs-author-action` 超 40 天。
4. [#10609](https://github.com/zeroclaw-labs/zeroclaw/issues/10609) 等多 Issue 今日关闭但关联修复未随版本发布，建议评估是否触发补丁版本（v0.8.6）以缩短用户获得 S1 修复的周期。
5. **今日新开的 P1 缓存/重试族 Bug（#10777、#10778、#10785、#10788）尚无任何 fix PR**，建议在下一迭代规划中作为统一主题（“cache prefix stability”）立项而非零散修复。

---

**健康度小结**：✅ 社区参与度和 Bug 报告质量极高（含抓包级证据）；✅ 安全/身份架构推进有序；⚠️ 合并吞吐不足、PR 栈阻塞、缓存相关成本问题集中爆发，是下一周期需要重点收敛的三件事。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-09-12

---

## 1. 今日速览

项目今日维持高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 45，关闭 5），PR 更新 50 条（待合并 35，已合并/关闭 15），社区贡献持续涌入。昨日发布 **v0.21.2 补丁版本**（state.db 修复），但 v0.21.0 会话存储重写引发的一系列回归问题（profile 切换、update 流程、桌面端混合配置等）仍是今日讨论焦点。当天新开多个高质量 Issue（#108707、#108729、#108735 等），并有对应修复 PR 在同日提交，形成良性的“报障—修复”闭环。总体判断：项目处于**快速迭代 + 回归消化期**，健康度良好但稳定性压力较大。

---

## 2. 版本发布

### v0.21.2 (v2026.9.11) — The state.db Patch Release
- **发布日期：** 2026-09-11
- **性质：** 补丁版本，针对 v0.21.0 大规模重写 session store 连接处理后的稳定性问题
- **核心问题：** v0.21.0 在部分安装环境下导致 `state.db` 变得脆弱：第二个写入者相互取消对方的锁，以及（摘要截断，推测涉及健康连接判定问题）
- **迁移注意：** 若从 v0.21.0 升级，建议尽快更新至 v0.21.2；但注意 v0.21.x 系列仍存在已知的 profile 切换回归（见 #102163，已关闭）与 update 流程问题（见 #107402），升级前建议备份 `state.db`

---

## 3. 项目进展

今日合并/关闭 15 个 PR，主要进展方向：

**Agent 核心与推理逻辑**
- [#99355](https://github.com/NousResearch/hermes-agent/pull/99355)（已关闭）：修复未终止 reasoning block 被误判为 "Thinking Budget Exhausted" 的问题，跳过长度续写梯子的逻辑得到纠正——提升长推理会话可靠性
- [#108762](https://github.com/NousResearch/hermes-agent/pull/108762)：从出站消息中剥离 llama.cpp 多模态 media marker，修复 Ollama/llama-server 本地模型的会话污染

**安全与依赖治理**
- [#72683](https://github.com/NousResearch/hermes-agent/pull/72683)（已关闭）：ESLint 升级至 10，清除 web/ui-tui 工作区 npm audit 高危告警（ui-tui 7 high → 0）
- 另有 [#107376](https://github.com/NousResearch/hermes-agent/pull/107376)、[#108777](https://github.com/NousResearch/hermes-agent/pull/108777) 两个 npm 安全修复 PR 待合并，形成安全加固集群

**调度与并发**
- [#108772](https://github.com/NousResearch/hermes-agent/pull/108772)（已关闭，标记 duplicate）：修复 cron heartbeat_fire_claim 的 AB-BA 死锁（fire_fence → jobs_lock 锁序问题）

**评估：** 今日推进主要集中在推理循环健壮性、cron 调度并发安全与依赖安全三大方向，配合昨日补丁版本，项目重心明显放在 v0.21 系列的稳定化上。

---

## 4. 社区热点

**评论最活跃的讨论：**

1. **[#2825](https://github.com/NousResearch/hermes-agent/issues/2825)（28 评论，已关闭）** — Termux/proot Ubuntu 环境安装问题。长尾安装支持需求旺盛，移动端/低配环境用户群体真实存在，社区互助氛围浓厚。

2. **[#107402](https://github.com/NousResearch/hermes-agent/issues/107402)（14 评论，P1，OPEN）** — `hermes update` 在网关延迟重启场景下留下永久性 "did not restart running gateways" 警告。用户诉求：更新流程的可观测性与状态准确性。**与今日新报的 [#108729](https://github.com/NousResearch/hermes-agent/issues/108729)（update 烧满 1875s drain 预算）同属 update 生命周期问题，建议统一治理。**

3. **[#67605](https://github.com/NousResearch/hermes-agent/issues/67605)（13 评论，已关闭）** — Dashboard/desktop profile 切换是"混合体"：MCP 工具不加载、secrets 从启动 profile 解析。P2 安全相关，反映桌面端多 profile 架构的共享 compute-host 进程设计存在根本性张力。

4. **[#87654](https://github.com/NousResearch/hermes-agent/issues/87654)（11 评论，P1，OPEN）** — vision 工具在首次可用性探测后静默消失（`_AuxProbeClientStub` 被缓存）。长驻进程中工具可用性状态漂移，Dashboard 显示与实际不符。

5. **[#102163](https://github.com/NousResearch/hermes-agent/issues/102163)（9 评论，已关闭）** — v0.21.0 profile 切换回归（slot 上限 3 硬性执行 + 会话所有权锁）。

**趋势解读：** 热点高度集中于 **桌面端 profile/session 管理稳定性** 与 **更新流程可靠性**，正是 v0.21.0 大重构的波及面。

---

## 5. Bug 与稳定性（按严重程度排列）

### P1
| Issue | 摘要 | Fix 状态 |
|---|---|---|
| [#107402](https://github.com/NousResearch/hermes-agent/issues/107402) | update 留下永久性 stale 警告（延迟重启 + 立即校验竞态） | 未见于今日 PR，待修 |
| [#87654](https://github.com/NousResearch/hermes-agent/issues/87654) | vision 工具长驻进程后静默消失 | 未见于今日 PR，待修 |
| [#92758](https://github.com/NousResearch/hermes-agent/issues/92758) | MCP OAuth 桌面端回调丢失 RFC 9207 `iss` 参数，认证失败 | 未见于今日 PR，待修 |

### P2
- **[#108729](https://github.com/NousResearch/hermes-agent/issues/108729)**（今日新报）：update 耗尽 1875s drain 预算——网关 teardown 11.2s 完成但残留平台 ws 线程 + 事件循环未静默，旧进程永不退出。*待修*
- **[#108735](https://github.com/NousResearch/hermes-agent/issues/108735)**（今日新报）：Windows update 在 "Installing managed uv" 处永久挂起（PowerShell 子进程缺少 `-NoProfile`）。与 [#38617](https://github.com/NousResearch/hermes-agent/issues/38617)（3 👍，同为 Windows managed uv 问题）构成同类集群。*待修*
- **[#107905](https://github.com/NousResearch/hermes-agent/issues/107905)**：resume guard 把压缩世代副本计入行数，4.7k 消息的会话被拒（20,001 > 20,000 限制）。*待修*
- **[#108785](https://github.com/NousResearch/hermes-agent/issues/108785)**（今日新报）：桌面端自定义端点 Save 按钮反而清除 API key。**已有 fix PR [#108786](https://github.com/NousResearch/hermes-agent/pull/108786)**（同日提交，响应迅速）
- **[#108707](https://github.com/NousResearch/hermes-agent/issues/108707)**（今日新报）：命令中 `#` 注释里的单引号使 hardline 审批的引号追踪失步，良性命令被误拦（fail-closed）。*待修*
- **[#68263](https://github.com/NousResearch/hermes-agent/issues/68263)**：smart approval 硬编码 `max_tokens=16` 对推理模型不兼容。*待修*
- **[#108768](https://github.com/NousResearch/hermes-agent/issues/108768)**：custom provider 因 free_tier_bootstrap 竞态，setup.status 永久报 `provider_configured: false`。*待修*
- **[#108775](https://github.com/NousResearch/hermes-agent/issues/108775)**：未定价模型被静默记为 $0，用户实测 3 天花费被低估 72%。**已有 fix PR [#108781](https://github.com/NousResearch/hermes-agent/pull/108781)（版本化定价覆盖）**

### P3 / 安全
- [#108761](https://github.com/NousResearch/hermes-agent/issues/108761)：`web_extract` 将凭据类查询参数转发给提取服务商（secret-URL 启发式不一致）——安全边界问题，值得关注
- [#84102](https://github.com/NousResearch/hermes-agent/issues/84102)：本地 TTS 写 Vorbis 到 `.ogg`，平台语音气泡静默降级

---

## 6. 功能请求与路线图信号

**有活跃 PR 支撑、很可能进入下一版本：**
- **模型定价覆盖**：[#104102](https://github.com/NousResearch/hermes-agent/issues/104102) 相关的 [#108781](https://github.com/NousResearch/hermes-agent/pull/108781)（版本化 model_pricing 覆盖）——直接回应 #108775 的用户痛点
- **Cloudflare Workers AI provider**：[#108691](https://github.com/NousResearch/hermes-agent/pull/108691)，provider 生态持续扩张
- **首次启动引导流**：[#108317](https://github.com/NousResearch/hermes-agent/pull/108317)（NS-859，stacked PR），桌面端 onboarding 体验重塑
- **网关生命周期通知独立通道**：[#108780](https://github.com/NousResearch/hermes-agent/pull/108780)，回应频繁重启部署的通知噪音问题

**需求明确、尚无 PR：**
- [#104102](https://github.com/NousResearch/hermes-agent/issues/104102)：全路径审批决策持久化审计日志（安全合规诉求强烈）
- [#91813](https://github.com/NousResearch/hermes-agent/issues/91813)：Bot Mode 群组活动暴露 bot 级实时会话转录（多智能体可监督性）
- [#108783](https://github.com/NousResearch/hermes-agent/issues/108783)：macOS 统一内存上本地运行时 ctx-window 限制旋钮（64GB M1 Max 实测 swap 近满）——本地模型用户体验的重要信号

**UX 集群信号：** [#86266](https://github.com/NousResearch/hermes-agent/issues/86266) 与 [#108751](https://github.com/NousResearch/hermes-agent/issues/108751) 均诉求桌面端分栏均分，可合并处理。

---

## 7. 用户反馈摘要

- **升级焦虑普遍：** v0.21.0 重写后，profile 切换、session 恢复、update 流程集中出问题，多位用户（#102163、#107905、#107402）在升级后受阻塞，社区对补丁版本 v0.21.2 抱有期待。
- **本地/自托管用户是核心群体：** Termux 安装求助（#2825，28 评论）、LM Studio/Ollama 集成（#108768、#108762）、macOS 本地模型内存管理（#108783）——本地推理用户占比高，对资源开销和兼容性敏感。
- **成本可观测性痛点：** #108775 用户实测花费被低估 72%（¥8.20 vs ≈¥29），说明重度用户依赖成本统计做决策，静默 $0 记录损害信任。
- **桌面端体验成为口碑分水岭：** 正面在于多 pane、profile 等高级功能受关注；负面在于 Save 清除 API key（#108785）、"Setup Required" 误报（#108768）等细节 bug 直接阻断使用。
- **平台集成国际化明显：** 飞书、钉钉、企业微信、WhatsApp 相关 Issue/PR 活跃，中文社区参与度高（多个 Issue 以中文提交且附详尽实测数据，质量上乘）。

---

## 8. 待处理积压

以下重要 Issue 长期开放、今日有活动但无明确修复进展，建议维护者优先关注：

| Issue | 开启时间 | 优先级 | 说明 |
|---|---|---|---|
| [#38617](https://github.com/NousResearch/hermes-agent/issues/38617) | 2026-06-04 | P2，3 👍 | Windows managed uv 安装失败——已积压 3 个月，今日又新增同源问题 #108735，**建议一次性治理 Windows update 链路** |
| [#8896](https://github.com/NousResearch/hermes-agent/issues/8896) | 2026-04-13 | P3 | 飞书审批卡超时/过期生命周期拆分——积压近 5 个月 |
| [#12525](https://github.com/NousResearch/hermes-agent/pull/12525) | 2026-04-19 | P2 | HA 服务调用后实体状态校验 PR——积压近 5 个月待评审 |
| [#84102](https://github.com/NousResearch/hermes-agent/issues/84102) | 2026-08-11 | P2 | TTS Vorbis/Opus 编码错误，影响平台语音交付 |
| [#87654](https://github.com/NousResearch/hermes-agent/issues/87654) | 2026-08-16 | **P1** | vision 工具静默消失——P1 级别积压近一个月，11 评论无 fix，**最应优先** |
| [#92758](https://github.com/NousResearch/hermes-agent/issues/92758) | 2026-08-23 | **P1** | MCP OAuth RFC 9207 桌面端失败——阻断桌面端 MCP 生态接入 |

**维护者建议：** ① 集中处理 Windows update/uv 链路（3+ 个关联 Issue）；② 为两个 P1（#87654、#92758）分配修复资源或发布 workaround；③ 评审积压 5 个月的 #12525。

---

*数据来源：GitHub API，统计窗口为过去 24 小时（截至 2026-09-12）。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-09-12）

## 1. 今日速览

PicoClaw 过去 24 小时整体活跃度中等偏低，共有 4 条 Issues 更新（2 新开/活跃、2 关闭）和 2 条 PR 更新（1 待合并、1 已关闭），无新版本发布。值得注意的是，多条 Issue/PR 被打上 `[stale]` 标签，显示部分社区贡献正因缺乏维护者响应而面临自动关闭风险。Slack 媒体上传 Bug 的修复 PR 已关闭（Issue 同步关闭），而 Web UI 卡顿修复 PR 仍在等待评审，是当前最值得关注的待合并代码。

## 2. 版本发布

今日无新版本发布。（最新用户报告环境涉及 picoclaw 0.3.x 与 nightly-50-gbbf6893c）

## 3. 项目进展

- **PR #3340 已关闭**（[链接](https://github.com/sipeod/picoclaw/pull/3340) → 正确链接：sipeed/picoclaw PR #3340）：`fix(slack): set FileSize on media upload params`。该修复解决了 Slack 渠道媒体上传必然失败的问题（`file.upload.v2: file size cannot be 0`），对应 Issue #3338 已同步关闭。Slack 渠道的媒体发送功能恢复可用，这是今日最实质的进展。
- **PR #3347 仍处 OPEN 状态**（[链接](https://github.com/sipeed/picoclaw/pull/3347)）：`fix laggy interface`，由社区开发者 @iMilnb 提交的 Web UI 长文本卡顿修复，已通过实测验证（桌面与移动端 Brave 浏览器），等待维护者评审合并。

整体看，项目向前推进幅度较小，今日进展以 Bug 收尾为主，无新功能落地。

## 4. 社区热点

- **Issue #3366（OPEN，2 评论）**：[Feature] Add support for OpenAI compatible providers（[链接](https://github.com/sipeed/picoclaw/issues/3366)）。用户 @ItachiSan 希望增加"OpenAI Compatible"自定义 Provider，以接入自托管路由（如 9Router）。诉求核心是**摆脱对官方 Provider 的绑定，支持私有化/自建模型网关**，反映了自托管用户群体的典型需求。
- **Issue #3338（CLOSED，4 评论，今日讨论最多）**：Slack 图片附件上传失败 Bug（[链接](https://github.com/sipeed/picoclaw/issues/3338)），已随修复 PR #3340 关闭。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复情况 |
|---|---|---|---|
| 高 | [#3338](https://github.com/sipeed/picoclaw/issues/3338) Slack 媒体上传全部失败（FileSize 未设置，SDK 前置拒绝） | 已关闭 | ✅ 已有 fix PR #3340 并关闭 |
| 中 | [#3346](https://github.com/sipeed/picoclaw/issues/3346) RKLLM 在 ARM 开发板上回复异常（Qwen3.5-0.8B_w4） | 已关闭 | 已关闭但标记 stale，需确认是修复还是自动关闭 |
| 中 | [#3355](https://github.com/sipeed/picoclaw/issues/3355) 飞书连接报错：`config.json contains unknown field(s): channel_list.feishu.app_id` | OPEN | 用户附带了**解决方案**，等待维护者跟进（可能是配置字段变更导致的破坏性变更文档缺失） |

## 6. 功能请求与路线图信号

- **OpenAI Compatible Provider**（[#3366](https://github.com/sipeed/picoclaw/issues/3366)）：实现成本低（可复用 OpenAI Provider 逻辑），且契合 PicoClaw 面向自托管/边缘设备的定位，有较大概率纳入后续版本。目前无关联 PR。
- **Web UI 性能优化**（PR #3347）：虽是修复性质，但直接影响日常使用体验，建议优先评审。

## 7. 用户反馈摘要

- **痛点一：渠道配置兼容性差**——nightly 版本中飞书配置字段校验报错（#3355），用户需自行排查并给出方案，说明配置迁移文档或向后兼容处理不足。
- **痛点二：本地模型体验不稳定**——在 ARM 板上运行量化模型（RKLLM + Qwen3.5-0.8B_w4）出现异常回复（#3346），边缘部署场景仍是薄弱环节。
- **痛点三：Web UI 大量文本时卡顿**——影响桌面和移动端日常使用（PR #3347），社区用户已主动贡献修复。
- **正面信号**：社区参与度高，多个 Bug 均由用户附上根因分析和现成修复方案（Slack FileSize、飞书配置、UI 卡顿），说明用户群技术能力强、粘性好。

## 8. 待处理积压 ⚠️

以下条目均被标记 `[stale]`，面临自动关闭，**请维护者优先关注**：

1. **PR #3347**（fix laggy interface）：已完成实测验证的高价值社区修复，stale 状态可能流失贡献者。
2. **Issue #3366**（OpenAI Compatible Provider）：有明确实现路径的功能请求，仅 2 条评论后陷入停滞。
3. **Issue #3355**（飞书配置报错）：用户已附解决方案，适合快速确认合入，若 stale 关闭将遗留配置兼容性问题。

**健康度小结**：项目社区贡献质量高，但维护者响应速度是当前瓶颈——今日 4 条 Issue/PR 中 3 条处于 stale 状态，建议加强评审与回复节奏，避免高质量社区贡献流失。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-09-12

## 1. 今日速览

NanoClaw 今日维持中高活跃度：过去 24 小时内 Issues 更新 5 条（新开/活跃 3，关闭 2），PR 更新 38 条（待合并 29，合并/关闭 9），无新版本发布。核心团队（@glifocat 为主力）持续高频提交，重点集中在**安装引导（setup/bootstrap）稳定性**与**语音通道（voice channel）新能力**两条线。多条修复 PR 快速响应了 9 月 11 日集中报告的全新安装问题，修复节奏健康，但 29 个待合并 PR 显示合并积压略有上升。

## 2. 版本发布

今日无新版本发布。上一次 CHANGELOG 相关活动仍为 v2.1.17（#2798，今日关闭）。

## 3. 项目进展

今日合并/关闭 9 个 PR，主要进展：

- **安装链路修复落地**：#3771 修复 uvx 引导后 pnpm 不可用问题（父进程 PATH 未继承 `~/.local/bin`，退出码 127），直接关闭了对应 Bug #3769，全新安装体验的回归被快速堵上。
- **历史积压清理**：一批陈年 PR 今日集中关闭，包括 #3291（限制 pending 消息轮询边界）、#3249（处理 Node 版本不在支持范围的情况）、#1598（rclone 远程存储 skill，4 月开立）、#2086/#2082（v2 文档系列）。这表明维护者做了一轮主动的队列清理与整理。
- **供应链治理**：#3649（修复 CODEOWNERS：默认 owner、自动化面、供应链文件归属）关闭，代码审查责任划分更明确。
- **新功能推进中（未合并）**：
  - #3764 `/add-voice`：基于 GPT-Live-1 的浏览器全双工语音通话，配合 #3772（channels registry 上的 voice adapter）形成完整方案，是目前最值得关注的功能组合。
  - #3713：per-agent-group delivery mode 的配置字段已铺好管线（尚无消费方），为不支持 envelope 合同的模型提供出站工具投递路径。
  - #3763：配合 #3762 清理 pre-cli-tools 时代的 Dockerfile guard test。

## 4. 社区热点

评论/互动最多的是安装类问题：

- **#3576** [OPEN]（[链接](https://github.com/nanocoai/nanoclaw/issues/3576)）— 限流回合通过 `deliverErrorResult` 重复向频道投递错误通知，无退避/去重。这是存在时间较长（8/27 开立）的运行时体验问题，在生产环境实际发生过刷屏，用户诉求是错误投递需要节流与合并。
- **#3204** [CLOSED]（[链接](https://github.com/nanocoai/nanoclaw/issues/3204)）— add-opencode skill 文档与 Dockerfile 重构脱节，今日随修复关闭，反映 skill 文档与代码演进同步的持续痛点。
- **#3762** [OPEN]（[链接](https://github.com/nanocoai/nanoclaw/issues/3762)）— 升级/移除路径遗留过时 guard test，已有对应 fix PR #3763。

## 5. Bug 与稳定性（按严重程度）

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | **#3769** 全新 uvx 引导因 PATH 缺失 `~/.local/bin` 导致 pnpm not found、退出 127 | ✅ 已修复（#3771 关闭） |
| 高 | **#3765** 全新安装时 host 与 initializer 并发执行 SQLite 迁移可致初始化失败 | ⚠️ 仍 OPEN，暂无 fix PR，建议优先处理 |
| 中 | **#3776**（PR）exe.dev 镜像（2026-09-09 起）上 `curl \| sh` 安装器路径劫持风险，改用绝对路径系统 shell | fix PR 待合并，涉及 credentials/setup 区域 |
| 中 | **#3774**（PR）Docker 将丢失的临时 CA 文件重建为 root 目录，SDK 抛 `EISDIR`，阻断新 agent 启动 | fix PR 待合并 |
| 低 | **#3762** add-opencode 升级遗留旧 Dockerfile guard test | fix PR #3763 待合并 |
| 低 | **#3576** 限流错误通知无退避/去重刷屏 | OPEN，无 fix PR |

## 6. 功能请求与路线图信号

- **语音通道**（#3764 + #3772）：skill + adapter 双 PR 架构已完整成型，core-team 标签齐备，是最可能进入下一版本的大特性。NanoClaw 正从文本频道向实时多模态交互扩展。
- **投递模式解耦**（#3713）：per-group delivery mode 字段已入库（“column and plumbing only"），暗示后续将支持非 envelope 模型走 outbound tools 投递，是多 provider 兼容路线的铺垫。
- **远程存储 skill**（#1598，WebDAV/S3 via rclone + systemd）今日被关闭，短期内不会进入主线，社区如有需求需重新提案。
- **Dial 通道文档补全**（#3501）仍待合并，说明电话通道（#3050）已实质落地，只差文档收尾。

## 7. 用户反馈摘要

- **痛点集中在首次安装**：三个 9/11 报告的 Bug（#3769、#3765、#3762）均来自全新 VM/机器安装场景，且都在 macOS 上复现——安装引导的健壮性是新用户的第一道坎，好消息是 #3769 当天即修。
- **skill 与主仓库演进不同步**是反复出现的主题（#3204、#3762），用户通过 `/add-*` 安装的旧产物在 main 演进后变成“孤儿”，升级/移除路径需要更好的迁移清理。
- **生产环境可用性诉求**：#3576 的限流刷屏来自真实生产部署，用户期望错误处理具备退避、冷却与去重等生产级语义。
- 正面信号：问题报告质量高（含复现 commit、平台、步骤），维护者响应快（多 Bug 当日有 fix PR），社区协作模式成熟。

## 8. 待处理积压

- **#3576**（8/27 开立，16 天）：限流错误刷屏，生产影响明确，尚无修复 PR，建议维护者优先排期。
- **#3765**：并发 SQLite 迁移竞态，影响全新安装成功率，无 fix PR。
- **长期待合并 PR 积压**：29 个待合并，其中 #3156（7/30 开立，附件作为结构化 parts 传给 provider，44 天）、#3583（8/27，task_log series id）、#3652（8/29，provider 流式期间的 opt-in 心跳保活）等待时间较长，值得维护者评审推进。
- **#3656**（CI stale 策略 dry-run）与 #3501（Dial 文档）为低风险收尾项，可快速合并以减少队列噪音。

---
*数据来源：NanoClaw GitHub 仓库（github.com/qwibitai/nanoclaw），统计窗口为 2026-09-11 至 2026-09-12。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-09-12）

## 1. 今日速览

LobsterAI 过去24小时保持较高开发活跃度：6 条 PR 更新（4 条已合并/关闭）、3 条 Issue 活跃更新，但无新版本发布。核心开发者 @fisherdaddy 与社区贡献者 @btc69m979y-dotcom 密集提交修复，重点集中在 OpenClaw Gateway 稳定性、插件系统健壮性及打包优化。值得注意的是，社区持续反馈的“重启后配置/工作空间被重置”类问题今日出现了根因分析（#2654），问题脉络逐渐清晰。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日共关闭 4 条 PR，集中在 Gateway 与插件系统修复：

- **PR [#2656](https://github.com/netease-youdao/LobsterAI/pull/2656)** — `fix: openclaw gateway startup selfheal`（@fisherdaddy）：修复 OpenClaw Gateway 启动自愈逻辑，提升服务可用性。
- **PR [#2653](https://github.com/netease-youdao/LobsterAI/pull/2653)** — `fix(openclaw): preserve host runtime during plugin cleanup`（@btc69m979y-dotcom）：修复 Windows 下 `fs.rmSync` 递归删除经由插件 `node_modules` junction 误删宿主运行时的严重问题，清理时保留 host runtime。
- **PR [#2652](https://github.com/netease-youdao/LobsterAI/pull/2652)** — `fix(plugins): patch nsp-clawguard native require compatibility`（@btc69m979y-dotcom）：修复启用 `nsp-clawguard 2.5.0` 后因 `graceful-fs` interop 代理问题破坏宿主 `fs.close` 导致 Gateway 启动失败的问题。
- **PR [#2655](https://github.com/netease-youdao/LobsterAI/pull/2655)** — `chore: optimize package size`（@fisherdaddy）：跨 Windows/macOS 的安装包体积优化。

待合并 2 条：
- **PR [#2657](https://github.com/netease-youdao/LobsterAI/pull/2657)** — 修复缩略图渲染与原生依赖构建问题，覆盖 renderer/main/openclaw 多模块，是当前最大的待审 PR。
- **PR [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181)** — 隐藏 Cowork 会话列表中的 OpenClaw 主 agent 内部会话（详见第 8 节）。

**评估**：今日修复密度高、质量导向明确，Windows 平台稳定性显著受益（#2652、#2653 均为 Windows 相关严重故障），项目整体在“插件生态健壮性”方向迈进了一步。

## 4. 社区热点

- **Issue [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293)**（5 条评论，今日更新）：多 agent 下 USER.md 重启后被主 agent 内容覆盖，已持续 2 个多月未解决，被标记 stale。这是“配置重置”问题家族中最受关注的一条。
- **Issue [#2654](https://github.com/netease-youdao/LobsterAI/issues/2654)**（今日新开）：贡献者 @maxbxkj 给出高质量根因分析——`openclawConfigSync.ts` 中 `getUserPlugins` 未返回 `hooks` 字段，导致 `syncToDisk` 时 hooks 配置丢失，并附明确修复建议（表结构加列 + 合并字段）。这为整个“重启后配置被重置”类问题（#2293、#1006）提供了排查方向。

**背后诉求**：用户强烈需要“用户自定义内容在重启后持久保留”，当前模板重新生成/覆盖机制已成为最大痛点。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | [#2652 修复的] 启用 nsp-clawguard 后 Gateway 启动失败（宿主 fs 被污染） | ✅ 已有修复 PR（已关闭） |
| 🔴 高 | [#2653 修复的] Windows 插件清理误删宿主 runtime，Gateway 重试失败 | ✅ 已有修复 PR（已关闭） |
| 🟠 中高 | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) 多 agent USER.md 重启后被主 agent 覆盖 | ❌ 无 fix PR，已 stale |
| 🟠 中高 | [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) 配置文件与工作空间文件（AGENTS.md、openclaw.json）重启被模板重置 | ❌ 无 fix PR |
| 🟡 中 | [#2654](https://github.com/netease-youdao/LobsterAI/issues/2654) Gateway 重启后 hooks 配置丢失 | ❌ 根因已明确，等待实现 |
| 🟡 中 | [#2657 待合并] 缩略图渲染与原生依赖构建问题 | 🔄 修复 PR 审核中 |

**关键判断**：#2293、#1006、#2654 本质上是同一问题域——“syncToDisk/启动同步机制过度覆盖用户数据”，建议维护者统一规划修复。

## 6. 功能请求与路线图信号

- **配置持久化机制**（#1006）：用户请求官方方式持久化用户配置；结合 #2654 的修复建议，持久化字段扩展（hooks → 表结构加列）很可能纳入下个迭代。
- **会话列表体验优化**（PR #1181）：隐藏内部 OpenClaw 主 agent 会话，社区贡献已就绪，若被合并将改善 Cowork UX。
- **打包体积优化**（PR #2655）已落地，暗示团队在为下个正式版本的分发质量做准备。

## 7. 用户反馈摘要

- **痛点集中且一致**：多 agent 用户（#2293）无法为不同 agent 维护独立人设；集成用户（#1006）的飞书 streaming 等自定义配置反复被覆盖，被迫用 crontab 定时还原文件——“保护机制过于激进”。
- **使用场景信号**：用户在多 agent 并行、飞书渠道集成、插件 hooks 自动化等深度场景使用 LobsterAI，说明核心用户黏性较高。
- **正面信号**：社区贡献质量提升，#2654、#2653、#2652 均为外部贡献者提供的深度根因分析与完整修复，生态参与度健康。

## 8. 待处理积压

- **Issue [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293)**：开放 2 个多月、5 条评论、疑似版本更新引入的回归，已被标记 stale——建议优先处理，避免数据覆盖造成用户实际损失。
- **Issue [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006)**：开放近 6 个月，同类根因，可与 #2293/#2654 合并治理。
- **PR [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181)**：开放 5 个多月、标记 stale 的社区贡献，功能完整（数据库加 hidden 列），建议维护者评估是否合并或给出反馈。

---
*数据来源：LobsterAI GitHub 仓库过去24小时活动统计。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 · 2026-09-12

## 1. 今日速览

今日 Moltis 仓库整体活跃度处于**低位平稳**状态：过去 24 小时仅 1 条 Issue 更新（新开 1，关闭 0）、1 条 PR 更新（待合并 1，合并 0），无新版本发布。新增 Bug 报告 #1264 指向 Telegram 共享频道下工具调用失效问题，涉及核心工具链路，值得维护者优先关注。长期挂起的 PR #1143（Requesty 供应商接入）昨日刚有更新但今日仍未合并，显示 review 节奏偏慢。总体看，项目无重大变动，但新增 Bug 与积压 PR 反映出响应速度是当前健康度的短板。

## 2. 版本发布

今日无新版本发布，可省略。

## 3. 项目进展

今日**无 PR 被合并、无 Issue 被关闭**，项目功能面无实质推进。

- [#1143 Add Requesty as an OpenAI-compatible provider](https://github.com/moltis-org/moltis/pull/1143)（@Thibaultjaigu，2026-07-02 创建，09-11 更新）：待合并状态已持续约 2.5 个月。该 PR 将 Requesty 作为表驱动的 OpenAI 兼容供应商接入，尽量复刻现有 `openrouter` 的接线方式（Base URL `https://router.requesty.ai/v1`，Bearer 鉴权）。昨日刚有活动说明作者仍在跟进，但缺乏维护者 review 是合并的主要阻塞点。

## 4. 社区热点

今日社区讨论热度极低，无高评论/高反应条目。

- 唯一活跃条目为今日新开的 Bug [#1264](https://github.com/moltis-org/moltis/issues/1264)（0 评论、0 👍，尚处早期传播阶段）。诉求核心：在 **Telegram 共享频道**场景下，工具（Tools）停止工作，直接影响多用户协作场景下 AI 智能体的可用性——这通常意味着共享部署场景是 Moltis 的重要使用形态，此类环境下的回归问题影响面可能被低估。

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 说明 |
|---|---|---|---|
| 🔴 较高（暂定） | [#1264 [Bug]: Tools stop working in shared Telegram channels](https://github.com/moltis-org/moltis/issues/1264) | OPEN，新建 | Telegram 共享频道中工具调用失效。作者已完成 preflight（确认最新版本、无重复报告），但**未附完整会话上下文**，复现信息不足，尚无 fix PR。 |

**备注**：该 Bug 尚无复现细节与影响范围数据，建议维护者先索取 session log 确认是权限/会话隔离问题还是工具链路回归。

## 6. 功能请求与路线图信号

- 今日无新功能请求。
- 待合并的 [#1143](https://github.com/moltis-org/moltis/pull/1143) 表明社区对**扩展 OpenAI 兼容供应商矩阵**（Requesty 等 LLM 路由器）有持续需求；若该模式（表驱动接入）被接受，预计后续还会有类似的低成本供应商接入 PR，可能成为下一版本的一个小方向。

## 7. 用户反馈摘要

今日可提取的用户反馈有限，来自 #1264 单条信号：

- **使用场景**：用户将 Moltis 部署在 Telegram 共享频道中供多人使用，工具调用（Tools）是核心依赖能力。
- **痛点**：共享环境下工具突然失效，且报告时未附带会话上下文，侧面反映用户排障成本较高、报障流程引导（preflight checklist 第三项未勾选）未完全落地。
- **满意点**：用户报障时确认“已使用最新版本”，说明升级意愿和跟进度较好。

## 8. 待处理积压

- ⚠️ **[PR #1143](https://github.com/moltis-org/moltis/pull/1143)**：开放逾 2 个月、昨日有更新但仍无维护者合并动作，建议尽快安排 review 或给出修改意见，避免贡献者流失。
- ⚠️ **[Issue #1264](https://github.com/moltis-org/moltis/issues/1264)**：今日新开、0 响应。因涉及共享频道工具失效（疑似影响核心功能），建议 24–48 小时内 triage 并请求复现信息。

---

*数据来源：Moltis GitHub 仓库 2026-09-11 ~ 2026-09-12 窗口。整体健康度提示：单日样本量小，建议结合 7 日/30 日趋势观察响应时长（time-to-first-response）与 PR 合并周期。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**日期：2026-09-12** | 数据周期：过去 24 小时

---

## 1. 今日速览

项目处于**高活跃度**状态：过去 24 小时内 Issues 更新 20 条（新开/活跃 15、关闭 5），PR 更新 24 条（待合并 15、已合并/关闭 9），并发布了 1 个新版本 **v2.2.1**。社区热度集中在三方面：v2.2.1 发布后的安装验证与升级反馈、多租户版 Hub（#7318，26 条评论）的路线图讨论、以及子代理模型路由（subagent model）相关的 bug 集中爆发。整体看，版本节奏稳健、社区贡献（含多个 first-time-contributor PR）活跃，但 2.2.x 升级后暴露的 MCP 连接、子代理超时等回归问题需要关注。

---

## 2. 版本发布

### v2.2.1（Stable）

✨ **Added — Models, Agents & Memory**
- 支持为每个 Agent 单独配置模型路由，包括 provider 偏好与 fallback 行为（[PR #7501](https://github.com/agentscope-ai/QwenPaw/pull/7501)）— 这直接呼应了长期悬而未决的多模型协作需求（[#4901](https://github.com/agentscope-ai/QwenPaw/issues/4901)）
- 新增 Auto Fin 主动记忆审查（proactive memory review），并升级 ReMe

配套流程：[Issue #7692](https://github.com/agentscope-ai/QwenPaw/issues/7692) 为发布后 4 小时内完成的多平台安装验证 Duty（已关闭）。

**迁移注意事项：** beta 版本用户（2.2.1-beta.1/beta.2）报告了 `subagent_model` 不生效的问题（#7676，已关闭，疑似由正式版修复）；从 2.1.1b3 升级 Hub 的用户遇到 MCP 连接失败（#7716，未解决），建议 Hub 用户暂缓升级或关注后续补丁。

---

## 3. 项目进展

今日关闭/合并的 9 个 PR 主要推进了以下方向：

| 方向 | PR | 内容 |
|---|---|---|
| **模型路由修复** | [#7677](https://github.com/agentscope-ai/QwenPaw/pull/7677) | API 对非有限数校验输入返回 422 |
| **上下文管理** | [#7652](https://github.com/agentscope-ai/QwenPaw/pull/7652) | 保留 provider 解析的上下文窗口，避免过早触发 compaction |
| **Console 体验** | [#7688](https://github.com/agentscope-ai/QwenPaw/pull/7688) | 分组会话列表改为 "Load More" 分页，移除 Collapse List |
| **Telegram 渲染** | [#7590](https://github.com/agentscope-ai/QwenPaw/pull/7590)（Under Review 后关闭）| Markdown 表格以 `<pre>` 渲染，替代原始管道符 |
| **发布流程** | [#6994](https://github.com/agentscope-ai/QwenPaw/pull/6994) | v2.1.0 发布说明整理（长尾收尾）|

**整体评估：** v2.2.1 稳定版的落地 + 关键稳定性修复（上下文窗口、422 校验）合并，是本周最实质的推进。待合并队列中还有相当分量的工作（见下），预计下个版本节奏依然密集。

---

## 4. 社区热点

### 🔥 [Issue #7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) — QwenPaw Hub 多租户版路线图讨论（26 评论，👍 4）
官方发起的 Discussion：Hub 多租户版将于 2.2.0+ 推出，征集社区下一步建设方向。**这是当前项目从“个人助手”向“团队协作平台”演进的核心信号**。配套 PR [#7696](https://github.com/agentscope-ai/QwenPaw/pull/7696)（本地管理员引导 `qwenpaw hub --init-admin`）已在推进，说明 Hub 落地速度较快。

### [Issue #7676](https://github.com/agentscope-ai/QwenPaw/issues/7676) — `subagent_model` 不生效（3 评论，今日关闭）
Beta 用户发现 spawn 的子代理始终继承父级 `active_model`，关联 #4901（按任务选模型）与 #6302（引入 `subagent_model`）。**反映出社区对“廉价模型跑简单子任务以省 token”的强烈诉求**——正是 v2.2.1 模型路由功能要覆盖的场景。配套诊断 PR [#7680](https://github.com/agentscope-ai/QwenPaw/pull/7680)（修复 subagent 模型 override 被静默吞掉的异常）仍在待合并。

### [Issue #7177](https://github.com/agentscope-ai/QwenPaw/issues/7177) — Web 端部署页 UI 优化建议（10 评论，今日关闭）
高频移动端用户对操作入口布局、按钮顺序的细致反馈，代表了一批重 Web/移动端使用者的体验诉求。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716) | **升级 2.2.x 后 MCP 无法连接和注册**（2.1.1b3 Hub 可用）| ⚠️ 暂无 fix PR，升级用户的阻塞级回归 |
| 🔴 高 | [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | Windows 2.2.0 上 spawn subAgent **全部超时失败**，延长 timeout 无效 | 无明确 fix；与 #7676/#7680 同一功能域，#7680 待合并 |
| 🟠 中 | [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | Web 端点停止后 UI 显示已停但**任务实际仍在执行**，后续指令触发 409 | 无 |
| 🟠 中 | [#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) | 使用中大模型配置**随机丢失**，需重选（多次复现）| 无 |
| 🟠 中 | [#7709](https://github.com/agentscope-ai/QwenPaw/issues/7709) | 定时任务结果被折叠进 thinking 或无输出 | 无 |
| 🟡 低 | [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) | Daily Paper 在 arxiv 不可达时**静默失败**，错误信息掩盖真实原因（httpx 连接错误），且无代理/端点配置 | 无 |
| 🟡 低 | [#7705](https://github.com/agentscope-ai/QwenPaw/issues/7705) | Agent 工作目录设置不生效，且“基于文件夹的项目会话”入口不明确 | 无 |

**已修复/关闭：** #7676（subagent_model，beta 期问题）、#7698（会话索引与磁盘不同步的“幽灵会话”，标记 invalid 关闭——建议维护者复查是否应转为 bug 追踪）。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 配套 PR | 纳入下版可能性 |
|---|---|---|---|
| Serply 作为 web_search 第三后端 | [#7711](https://github.com/agentscope-ai/QwenPaw/issues/7711) | [#7712](https://github.com/agentscope-ai/QwenPaw/pull/7712)（同日提交，first-time-contributor）| **高**，issue+PR 齐备，默认行为不变 |
| Telegram Rich Messages 渲染表格 | — | [#7713](https://github.com/agentscope-ai/QwenPaw/pull/7713) | 高，替代 #7590 的临时方案 |
| Telegram 中间消息清理 | — | [#7592](https://github.com/agentscope-ai/QwenPaw/pull/7592)（默认关闭，opt-in）| 高 |
| 会话/工具会话历史分组 | [#7710](https://github.com/agentscope-ai/QwenPaw/issues/7710) | 无 | 中 |
| 自定义默认 Loop 模式 | [#7714](https://github.com/agentscope-ai/QwenPaw/issues/7714) | 无 | 中 |
| DeepSeek 原生能力元数据 + KV-cache 可观测性 | [#7717](https://github.com/agentscope-ai/QwenPaw/issues/7717) | 无 | 中低，工程量较大 |
| 文档预览移至右侧 | [#7700](https://github.com/agentscope-ai/QwenPaw/issues/7700) | [#7704](https://github.com/agentscope-ai/QwenPaw/pull/7704)（文件抽屉右移）| 高 |
| 按任务选模型（多模型协作） | [#4901](https://github.com/agentscope-ai/QwenPaw/issues/4901)（6 月提出）| v2.2.1 已部分覆盖（#7501）+ #7680 诊断修复 | **进行中** |

---

## 7. 用户反馈摘要

**痛点集中在三类：**

1. **升级体验**：2.2.x 升级路径问题密集——MCP 连不上（#7716）、模型配置丢失（#7708）、子代理超时（#7678）。有 Hub 用户被迫停留在 2.1.1b3。
2. **执行状态可信度**：停止不生效（#7567）、定时任务输出被折叠（#7709）、多图生成中审核通过导致任务永久卡 RUNNING（[#7693](https://github.com/agentscope-ai/QwenPaw/issues/7693)）——用户反复强调“UI 显示”与“实际执行”不一致带来的焦虑（“手机上每次操作都很紧张，怕误点到停止”）。
3. **移动端可用性**：安卓输入法换行即提交、无法输入长文本（#7707）；Web 移动端整体获得正面评价（“体验已经比较好了”），属于**满意中的细节改进诉求**。

**正面信号：** 移动 Web 体验明显改善获得认可；社区贡献热情高（多个 first-time-contributor 提交高质量 PR，含测试修复 #7701、安全加固 #7699）；Hub 路线图讨论参与度高。

---

## 8. 待处理积压

| 项 | 说明 | 建议 |
|---|---|---|
| [#4901](https://github.com/agentscope-ai/QwenPaw/issues/4901)（6/02 提出，仍 OPEN） | 按任务选模型，v2.2.1 部分覆盖但未关闭 | 结合 #7678/#7680 验证后正式关闭或更新状态 |
| [#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716) | **升级后 MCP 不可用**，阻塞级回归，今日新报 | 优先排期，发布已知问题公告 |
| [#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776)（8/07 提出） | Playwright 驱动连接自愈，ready-for-human-review 状态停留月余 | 建议维护者尽快人工审查，影响浏览器功能长期稳定性 |
| [#6499](https://github.com/agentscope-ai/QwenPaw/pull/6499)（7/27 提出） | Atlas Cloud provider，first-time-contributor，等待近 7 周 | 审查或给贡献者反馈，避免流失 |
| [#7592](https://github.com/agentscope-ai/QwenPaw/pull/7592) | Telegram 消息清理，默认关闭的低风险改动 | 可随 #7713 一并评估 |
| [#7698](https://github.com/agentscope-ai/QwenPaw/issues/7698) | “幽灵会话”以 invalid 关闭但用户描述了明确的数据丢失 | 建议维护者复核关闭理由 |

---

**健康度小结：** 活跃度 ⭐⭐⭐⭐⭐ | 社区贡献 ⭐⭐⭐⭐⭐ | 稳定性 ⭐⭐⭐（2.2.x 升级回归需重点关注）| 维护响应 ⭐⭐⭐⭐（老 PR 审查略有积压）。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报
**日期：2026-09-12** | 数据来源：[gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

## 1. 今日速览

- 今日项目呈现 **低互动、稳迭代** 状态：Issues 与 PR 均无更新（各 0 条），但发布了新版本 **v1.9.15**，表明项目处于持续维护、小步快跑的发布节奏。
- 无社区讨论热点，无新报 Bug，当前无可见的社区风险信号。
- 综合判断：项目健康度良好，活跃度以维护者驱动的版本发布为主，社区参与度今日为零，建议关注长期社区激活情况。

## 2. 版本发布

### [v1.9.15: TK Copilot v1.9.15](https://github.com/gaoyangz77/easyclaw/releases)

**更新内容：**
- 客服会话重试派发前自动从归档状态恢复，确保中断会话能够正常继续（Restore archived customer-service sessions before retrying dispatch）。

**评估：**
- 属于缺陷修复型小版本（Patch 级），主要解决客服会话中断后无法恢复的问题。
- **无破坏性变更**，无 API 或配置变更，用户可平滑升级。
- 迁移注意：macOS 用户升级后如遇 **"RivonClaw is damaged and can't be opened"** 提示，为 macOS Gatekeeper 拦截所致，非应用本身损坏，按官方说明放行即可。

## 3. 项目进展

- 今日无 PR 合并或关闭（数据为 0）。
- 但 v1.9.15 的发布表明上一个开发周期的修复工作（客服会话归档恢复逻辑）已完成并交付用户，属于**稳定性方向的小步推进**。

## 4. 社区热点

- 今日无活跃 Issues / PRs 讨论，无热点可析。
- 链接入口：[Issues 列表](https://github.com/gaoyangz77/easyclaw/issues) | [PR 列表](https://github.com/gaoyangz77/easyclaw/pulls)

## 5. Bug 与稳定性

- 今日无新报 Bug、崩溃或回归问题。
- v1.9.15 本身可视为对「客服会话中断后无法继续」这一已知痛点的修复，已随版本发布，无需额外 fix PR。

## 6. 功能请求与路线图信号

- 今日无新功能请求，无路线图信号可提取。
- 从近期发布节奏（客服会话、派发机制相关修复）推测，**客服 Copilot 场景的会话连续性与稳定性**是当前迭代重点，预计后续版本将继续围绕该方向打磨。

## 7. 用户反馈摘要

- 今日无 Issue 评论，无法提炼用户反馈。
- 间接信号：Release 说明中专门提及 macOS Gatekeeper 报错的处理，提示 **macOS 用户在安装/升级环节存在摩擦**，是实际用户痛点，可考虑在 README 中置顶说明。

## 8. 待处理积压

- 今日数据中未发现长期未响应的 Issue 或 PR（24 小时内更新数为 0，无存量活跃项曝光）。
- 建议维护者自查：[open issues](https://github.com/gaoyangz77/easyclaw/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-asc) 中按更新时间升序排查是否有沉默超过 30 天的条目。

---

**总结：** 今日 EasyClaw 处于「静默交付」状态——社区零互动，但版本按节奏发布。核心风险不在代码质量，而在于社区参与度偏低，建议通过 Release 公告引导用户反馈、建立 Issue 模板等方式激活社区生态。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*