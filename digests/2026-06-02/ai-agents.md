# OpenClaw 生态日报 2026-06-02

> Issues: 459 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-06-02 04:13 UTC

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

# OpenClaw 项目动态日报 (2026-06-02)

## 1. 今日速览
OpenClaw 项目今日保持极高活跃度，过去24小时内处理了 **459 条 Issues**（关闭 184 条）和 **500 条 PRs**（合并/关闭 105 条）。项目一日内连续发布了 `v2026.6.1-beta.1` 和 `v2026.6.1-beta.2` 两个版本，显示出核心团队正在加速迭代，重点解决 Agent 运行时的鲁棒性和多渠道消息投递的稳定性。尽管合并数量可观，但待合并 PR 积压仍有 395 条，表明代码审核与集成的压力依然巨大。

## 2. 版本发布
今日连续发布两个 Beta 版本，标志着 2026.6.1 版本进入冲刺阶段。

- **v2026.6.1-beta.2** ([Releases](https://github.com/openclaw/openclaw/releases))
- **v2026.6.1-beta.1** ([Releases](https://github.com/openclaw/openclaw/releases))

**更新亮点**：
- **运行时恢复增强**：Agents 和 CLI 支持的运行时现在可以更优雅地从被中断的工具调用、过期会话绑定、压缩交接和媒体投递重试中恢复 (Issues: #88129, #88136 等)。
- **渠道投递稳定性**：
  - `beta.1` 重点改善了 Telegram, WhatsApp, iMessage, Slack 的投递稳定性。
  - `beta.2` 扩展了对 iMe 的支持，并进一步巩固了上述渠道。

**迁移注意**：鉴于大量 Issue 提到 `doctor --fix` 迁移配置可能导致 Token 膨胀和 OAuth 失效，建议升级前备份现有配置，并关注运行时切换带来的开销变化。

## 3. 项目进展
今日项目在稳定性修复和架构重构上取得显著进展，尤其针对 Codex 运行时和渠道接入层。

**重要合并/关闭**：
- **Fix: Feishu 自动回复崩溃** ([PR #89148](https://github.com/openclaw/openclaw/pull/89148)): 修复了 `getFailedCounts` 缺失导致的 Dispatch TypeError，解决了飞书渠道的消息投递失败问题。
- **Fix: Doctor 迁移导致的 Token 膨胀** ([Issue #84038](https://github.com/openclaw/openclaw/issues/84038)): 确认并修复了 `doctor --fix` 错误迁移配置导致 Codex 运行时 Token 消耗激增 3-4 倍的问题。

**关键待合并 (Open PRs)**：
- **SQLite 迁移架构** ([Issue #88838](https://github.com/openclaw/openclaw/issues/88838)): 正在通过分支抽象接缝 策略推进核心会话/转录状态的 SQLite 迁移，旨在避免大规模重写风险。
- **Telegram 消息重复修复** ([PR #88968](https://github.com/openclaw/openclaw/pull/88968)): 旨在防止内存刷写失败中断用户回复，修复了 Telegram 渠道常见的消息重复发送 Bug。
- **Discord Gateway 限制调整** ([PR #89041](https://github.com/openclaw/openclaw/pull/89041)): 禁用了 `ws` 8.21.0 引入的严格 Receiver Limits，防止特定流量下连接被强制关闭。

## 4. 社区热点
今日社区讨论主要集中在模型支持、运行时迁移和架构设计上。

1.  **Gemini 模型版本更新请求** ([Issue #80380](https://github.com/openclaw/openclaw/issues/80380))
    - **热度**：👍 4, 评论 14
    - **分析**：用户请求将默认模型从预览版切换至 GA 版 `gemini-3.1-flash-lite`，以获得更好的速度与成本效益。这反映了用户对生产环境稳定性和成本控制的迫切需求。

2.  **Codex vs Pi 运行时一致性测试** ([Issue #80171](https://github.com/openclaw/openclaw/issues/80171))
    - **热度**：评论 15
    - **分析**：随着 OpenClaw 迁移至 Codex 作为默认运行时，社区正在进行大规模的 QA 一致性验证，关注点在于功能对等性和 Token 消耗差异。

3.  **SQLite 迁移架构讨论** ([Issue #88838](https://github.com/openclaw/openclaw/issues/88838))
    - **热度**：评论 12
    - **分析**：核心贡献者正在讨论如何安全地将会话存储迁移至 SQLite，社区对这种“小步快跑”的抽象层架构表示支持，认为能显著降低系统风险。

## 5. Bug 与稳定性
今日报告了多个严重 Bug，部分已定位根因并提交 PR。

**🔴 严重 / 高优**
- **[Regression] Telegram 消息重复发送** ([Issue #86519](https://github.com/openclaw/openclaw/issues/86519)): 更新后 Agent 在 Telegram 重复发送 2-10 次相同回复。涉及 `session write lock` 竞争条件，相关修复 PR ([#88968](https://github.com/openclaw/openclaw/pull/88968), [#89045](https://github.com/openclaw/openclaw/pull/89045)) 已提交。
- **[Bug] Codex App-Server Turn 停滞** ([Issue #88312](https://github.com/openclaw/openclaw/issues/88312)): 回归问题，Codex 运行时在多工具调用时中断且未确认完成。当前状态：Open，等待修复。
- **[Bug] 飞书群组消息无回复** ([Issue #77666](https://github.com/openclaw/openclaw/issues/77666)): 升级后飞书群聊消息被接收但 `replies=0`，直接影响生产环境可用性。

**🟡 中等**
- **[Bug] QQBot 消息重复与心跳泄漏** ([Issue #87177](https://github.com/openclaw/openclaw/issues/87177)): 已关闭，可能已在最新版修复或已有变通方案。
- **[Bug] ACP Runtime 忽略模型覆盖** ([Issue #87381](https://github.com/openclaw/openclaw/issues/87381)): 配置文件中的 `model.primary` 设置被忽略，导致无法为特定 Agent 指定模型。

## 6. 功能请求与路线图信号
- **本地模型优先支持** ([Issue #89265](https://github.com/openclaw/openclaw/issues/89265)): 用户呼吁将本地模型 视为一等公民，以应对日益增长的云端 API 成本。结合此前对 Ollama/OpenAI 兼容运行时的支持，本地化部署是重要方向。
- **MCP 工具调用审批流** ([Issue #78308](https://github.com/openclaw/openclaw/issues/78308)): 提议通过 Channel 进行工具调用的中介审批，增强安全性。
- **多智能体协作架构增强** ([Issue #35203](https://github.com/openclaw/openclaw/issues/35203)): 提出能力画像、共享黑板和分层内存架构。这是一个长期 RFC，需关注后续是否有相关 Draft PR 出现。

## 7. 用户反馈摘要
- **配置迁移痛点多**：多名用户反馈升级后配置被静默修改，导致运行时异常或 Token 消耗激增 ([Issue #84038](https://github.com/openclaw/openclaw/issues/84038))。
- **渠道接入不稳定**：Telegram 和飞书的接入问题占据了 Bug 报告的大部分，主要表现为消息丢失、重复或连接断开，用户对消息投递的“最终一致性”体验不佳。
- **文档需求强烈**：针对 SQLite 迁移和 ACP 状态管理，有开发者请求更详细的 API 文档和架构说明 ([PR #89320](https://github.com/openclaw/openclaw/pull/89320))。

## 8. 待处理积压
- **PR 积压预警**：目前有 **395 个 PR 处于 Open 状态**，其中包含多个高优先级修复（如 Telegram 修复、Session Lock 修复）。建议社区贡献者协助进行 Review，避免版本迭代速度受阻。
- **长期未决 Issue**：
  - **Android Node WebSocket 握手丢失事件** ([Issue #79552](https://github.com/openclaw/openclaw/issues/79552)): 影响移动端体验，长期未彻底解决。
  - **插件热重载** ([Issue #14438](https://github.com/openclaw/openclaw/issues/14438)): 开发体验增强需求，积压已久，等待架构支持。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比日报 (2026-06-02)

## 1. 生态全景
当前开源 AI 智能体生态正处于从**功能验证**向**生产可用**转型的关键期。核心项目普遍面临架构重构与稳定性治理的双重压力，重点解决多渠道接入一致性、长上下文会话恢复及 Token 成本控制等共性问题。多智能体协作、无状态架构迁移以及本地化/私有化部署能力成为技术演进的新高地，显示出生态正加速迈向企业级落地与自主可控阶段。

## 2. 各项目活跃度对比

| 项目名称 | Issues 活跃度 | PRs 活跃度 | 版本发布 | 健康度评估 | 核心进展摘要 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 极高 (459条) | 极高 (500条) | 2个 Beta 版本 | ⚠️ 高压 (PR积压395) | 双版连发修复运行时鲁棒性，积压严重需关注。 |
| **LobsterAI** | 低 (0条) | 高 (49条合并) | 正式版 v2026.6.1 | ✅ 健康 | 闭门冲刺后爆发式集成，MCP性能大幅优化。 |
| **IronClaw** | 中 | 极高 (32条合并) | 无 | ✅ 活跃 | 全面转向 Reborn 无状态架构，集成 GitHub/GSuite。 |
| **CoPaw** | 高 (50条) | 高 (38条) | v1.1.10 正式版 | ⚠️ 需观察 | 引入 Agent 自主生成 Subagent 能力，迁移遇阻。 |
| **Hermes Agent**| 高 (50条) | 高 (50条) | 无 | ⚠️ 中等 | 多渠道集成，暴露严重 Token 开销问题。 |
| **Zeroclaw** | 中 (36条) | 高 (37条) | 无 | ✅ 稳健 | 架构重构，引入评估框架，修复安全漏洞。 |
| **NanoBot** | 中 (25条关闭) | 中 (17条合并) | v0.2.1 | ✅ 健康 | WebUI 转型为工作台，完善本地语音与钉钉集成。 |
| **PicoClaw** | 中 (7条) | 中 (11条) | Nightly | ⚠️ 需观察 | 快速迭代修复模型兼容性，存在启动崩溃隐患。 |
| **ZeptoClaw** | 低 | 中 (18条) | 无 | ✅ 健康 | 强化工程化门禁，严控二进制体积。 |
| **NanoClaw** | 低 (2条) | 低 (5条) | 无 | ⚠️ 风险 | 核心会话崩溃循环待解，关键修复 PR 待合并。 |
| **Moltis** | 低 (0条) | 低 (3条) | 无 | ✅ 平静 | 集成 NEAR AI，重构 Provider 架构。 |
| **EasyClaw** | 低 (0条) | 低 (0条) | v1.8.23 | ✅ 平稳 | 常规维护，优化重试逻辑。 |
| **NullClaw** | 低 (0条) | 低 (1条) | 无 | ✅ 平静 | 修复 Telegram 交互反馈缺失。 |
| **TinyClaw** | 无 | 无 | 无 | 🔴 静默 | 过去24小时无活动。 |

## 3. OpenClaw 在生态中的定位

作为生态的**核心参照项目**，OpenClaw 展现出明显的规模效应与核心枢纽特征：
*   **规模优势与瓶颈**：其 Issue 与 PR 处理量级远超同类项目（如 Zeroclaw, Hermes），是生态中用户反馈最密集的入口。然而，高达 395 条的待合并 PR 积压表明其代码审核与集成流程已成为发展瓶颈，相比之下 IronClaw 和 LobsterAI 的合并效率更高。
*   **技术路线引领**：OpenClaw 率先在 `v2026.6.1` 中解决了 Codex 运行时恢复与多渠道投递稳定性问题，这通常是同类项目（如 NanoClaw, Hermes）后续版本的追赶方向。其在 SQLite 迁移上的架构讨论也常被其他项目作为参考范式。
*   **社区成熟度**：不同于 CoPaw 或 NanoBot 处于功能扩展期，OpenClaw 已进入深度的稳定性治理阶段，用户对配置迁移、Token 膨胀等细节问题的敏感度极高，反映出其用户群体已具备生产级使用经验。

## 4. 共同关注的技术方向

各项目在以下领域呈现出高度的需求共性：

1.  **成本控制与 Token 开销优化**
    *   **涉及项目**：OpenClaw, Hermes Agent, Zeroclaw, PicoClaw.
    *   **具体诉求**：OpenClaw 的迁移导致 Token 膨胀 3-4 倍，Hermes 报告 73% Token 为固定开销，Zeroclaw 讨论 Skill 编译以削减 Prompt 体积。**成本治理已成为生产环境的核心痛点**。

2.  **会话持久化与自愈能力**
    *   **涉及项目**：OpenClaw, NanoClaw, Hermes Agent.
    *   **具体诉求**：OpenClaw 关注运行时中断恢复，NanoClaw 出现 "中毒会话" 导致死循环，Hermes 修复了 Cron 任务感知缺失。**无状态化与会话级灾备**是架构演进重点。

3.  **多渠道接入的一致性与鲁棒性**
    *   **涉及项目**：OpenClaw, Zeroclaw, PicoClaw, Hermes Agent.
    *   **具体诉求**：Telegram 消息重复、飞书接口崩溃、Discord Gateway 限制是普遍问题。各项目均在致力于抹平不同 IM 平台底层协议差异带来的体验断层。

4.  **本地化与私有化部署**
    *   **涉及项目**：NanoBot, PicoClaw, Moltis, Zeroclaw.
    *   **具体诉求**：NanoBot 引入本地语音转录，PicoClaw 支持 NEAR AI 与本地模型，Zeroclaw 关注 Ollama 集成。用户对数据隐私和去云端化依赖的需求日益强烈。

## 5. 差异化定位分析

*   **架构演进方向**：
    *   **OpenClaw & Zeroclaw**：致力于单体架构的模块化拆分与存储迁移，强调**企业级稳定与扩展**。
    *   **IronClaw & CoPaw**：激进探索下一代架构。IronClaw 全面转向 Reborn 无状态架构，CoPaw 实现 Agent 生成 Agent 的动态编排，代表了**云原生与自主智能体**的前沿方向。
    *   **LobsterAI**：深耕底层协议优化（MCP 启动加速），定位为**高性能基础设施**。

*   **目标用户画像**：
    *   **NanoBot & PicoClaw**：更侧重**个人开发者与极客**，强调开箱即用的 WebUI 与本地模型支持。
    *   **ZeptoClaw & EasyClaw**：关注**边缘计算与嵌入式场景**，极度敏感于二进制体积与资源占用。
    *   **Hermes Agent**：作为 Web3/AI 融合生态的探索者，倾向于去中心化集成。

## 6. 社区热度与成熟度

*   **快速迭代期（功能驱动）**：
    *   **CoPaw, NanoBot, IronClaw**：这三个项目今日活跃度最高，频繁发布新版本或合并大量功能 PR（如 CoPaw 的 Subagent，IronClaw 的 OAuth 集成）。社区讨论围绕新功能体验展开，Bug 报告多集中于新特性。

*   **质量巩固期（稳定性驱动）**：
    *   **OpenClaw, Zeroclaw, ZeptoClaw**：主要精力在处理技术债务、架构重构（SQLite 迁移、Provider 重构）和 CI/CD 建设。社区反馈聚焦于升级兼容性与性能回归，显示出项目已进入成熟期。

*   **维护/静默期**：
    *   **TinyClaw, NullClaw, EasyClaw**：活跃度低，主要进行常规维护和小版本修补，缺乏重大功能更新。

## 7. 值得关注的趋势信号

1.  **"Agent 生成 Agent" 成为自主性新标杆**：
    CoPaw 引入 `spawn_subagent` 工具，标志着 AI 智能体从“被动执行”向“主动编排”跨越。这暗示未来 Agent 系统将更像操作系统内核，具备动态资源调度能力，开发者需关注多智能体生命周期管理的复杂性。

2.  **Token 经济性成为架构决定性因素**：
    Hermes 报告的 73% 固定开销与 OpenClaw 的配置迁移事故表明，Prompt 工程与上下文管理已不仅是算法问题，而是直接影响营收的系统架构问题。未来架构设计将更倾向于“按需加载”技能而非全量注入。

3.  **无状态架构崛起**：
    IronClaw 的 Reborn 架构迁移与 OpenClaw 的 SQLite 讨论反映出，为了支撑水平扩展与多租户隔离，**无状态** 正成为企业级 Agent 系统的标准范式。传统的会话内存存储方案正加速被持久化队列或外置存储替代。

4.  **安全沙箱与权限边界收紧**：
    Zeroclaw 修复工具白名单绕过漏洞，PicoClaw 优化 exec 指令安全守卫，显示出随着 Agent 权限扩大（如文件读写、Shell 执行），**安全边界防护** 已成为不可忽视的刚需，而非单纯的附加功能。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-02)

## 1. 今日速览
NanoBot 今日发布了重要的 **v0.2.1 版本**，标志着项目从单纯的对话代理向具备实际工作能力的智能体转型，WebUI 正式成为核心工作台。项目活跃度极高，过去 24 小时内关闭了 25 个 Issue，合并了 17 个 PR，显示出维护团队强劲的迭代推进能力和社区贡献的高涨热情（新增 17 位贡献者）。当前开发重心集中在 WebUI 的交互完善、多渠道接入以及系统稳定性优化上。

## 2. 版本发布
- **[v0.2.1](https://github.com/HKUDS/nanobot/releases/tag/v0.2.1)**
  - **核心更新**：本次更新合并了 84 个 PR，核心亮点在于 **WebUI 成为实际工作的场所**。聊天界面更加流畅、快速，增加了实时文件编辑活动显示和工具调用轨迹渲染，提升了用户对 Agent 操作的信任感和可见性。
  - **破坏性变更/迁移注意**：官方描述未明确提及破坏性变更，但鉴于 WebUI 定位的重大调整，建议用户关注配置文件中关于工作区权限的默认设置变化。

## 3. 项目进展
今日共有 17 个 PR 被合并，项目在多渠道支持和本地化能力上迈出一大步：
- **本地语音能力增强**：PR [#3723](https://github.com/HKUDS/nanobot/pull/3723) 被合并，引入了基于 faster-whisper 的本地语音转录支持，无需 API Key 即可运行，极大降低了隐私风险和使用成本。
- **钉钉渠道优化**：PR [#4016](https://github.com/HKUDS/nanobot/pull/4016) 合并，新增 `group_user_isolation` 配置，解决了群聊中多用户上下文混淆的问题。
- **WebUI 架构优化**：PR [#4135](https://github.com/HKUDS/nanobot/pull/4135) 重构了 WebUI 运行时状态管理，引入事件总线机制，为后续更复杂的前端交互打下基础。

## 4. 社区热点
今日社区讨论焦点集中在功能扩展与底层架构优化：
- **Issue [#2880](https://github.com/HKUDS/nanobot/issues/2880)** (18 条评论)：用户反馈 Agent 无论发什么都报错。该问题已关闭，表明在 v0.2.1 版本中可能已得到修复或提供了有效的排查方案，反映了用户对基础稳定性的高度关注。
- **PR [#4016](https://github.com/HKUDS/nanobot/pull/4016)**：关于钉钉群聊用户隔离的讨论热烈，反映了企业级用户对多租户隔离的强烈需求。
- **Issue [#4142](https://github.com/HKUDS/nanobot/issues/4142)**：针对 DeepSeek 等模型缓存缺失导致的 Token 成本优化讨论，显示出用户对 API 成本控制的精细化诉求。

## 5. Bug 与稳定性
今日报告并处理了多个关键 Bug，部分已有修复方案：
- **[Critical] Tool Call 孤立结果 (Issue [#4006](https://github.com/HKUDS/nanobot/issues/4006))**：对话历史中存在 tool result 但无对应的 tool_calls，导致严格校验的 API（如 OpenAI/Anthropic）拒绝请求。目前 Issue 仍处于 Open 状态，需关注后续修复。
- **[Medium] 消息重复归档 (Issue [#4128](https://github.com/HKUDS/nanobot/issues/4128))**：Session 压缩逻辑导致用户消息被重复归档，可能导致上下文不一致。已有相关重构 PR [#4143](https://github.com/HKUDS/nanobot/pull/4143) 提交并合并。
- **[Fixed] 并发写入冲突 (PR [#4147](https://github.com/HKUDS/nanobot/pull/4147))**：修复了 `append_history` 中游标分配未加锁导致的并发写入重复问题，提升了系统在高并发下的稳定性。

## 6. 功能请求与路线图信号
- **手动记忆模式 (PR [#4050](https://github.com/HKUDS/nanobot/pull/4050))**：正在开发中，允许用户手动控制记忆流，与 Issue [#3885](https://github.com/HKUDS/nanobot/issues/3885) 相关，预计很快合入。
- **QQ 渠道支持 (PR [#4146](https://github.com/HKUDS/nanobot/pull/4146))**：基于 Napcat 的 QQ 渠道支持已提交 PR，正在等待合并，这将极大地拓展 NanoBot 在国内 IM 市场的适用面。
- **云平台一键部署 (PR [#4139](https://github.com/HKSDS/nanobot/pull/4139))**：社区正在推进对 HuggingFace Spaces 和 ModelScope 的原生支持，降低云端部署门槛。
- **WebUI 消息编辑 (PR [#4148](https://github.com/HKUDS/nanobot/pull/4148))**：支持用户编辑已发送的历史消息并重新执行，这是构建高质量人机交互闭环的关键功能。

## 7. 用户反馈摘要
- **WebUI 交互体验**：用户对 v0.2.1 中 WebUI 的改进表示欢迎，特别是实时编辑反馈功能。
- **成本控制焦虑**：从 Issue [#4142](https://github.com/HKUDS/nanobot/issues/4142) 和 [#101](https://github.com/HKUDS/nanobot/issues/101) 可以看出，用户非常在意 API 成本，渴望对免费 API 的支持和对缓存 Token 的优化。
- **企业级隔离需求**：钉钉群隔离功能的迅速合并表明，企业用户对于上下文隔离有着刚性需求。

## 8. 待处理积压
- **Issue [#4006](https://github.com/HKUDS/nanobot/issues/4006)**：Tool Call ID 不匹配导致的 API 报错问题尚未解决，严重影响部分场景下的对话连续性，建议维护者优先处理。
- **PR [#4122](https://github.com/HKUDS/nanobot/pull/4122)**：WebUI 本地录音与 ASR 集成功能尚在 Draft 阶段，亟待社区 Review 以推进合入。
- **PR [#4050](https://github.com/HKUDS/nanobot/pull/4050)**：手动记忆模式 PR 仍处于 Open 状态，这是备受期待的功能，建议尽快安排 Review 进度。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-02)

## 1. 今日速览
Zeroclaw 项目今日保持高活跃度，社区与核心开发团队互动频繁，过去 24 小时内有 37 个 PR 更新与 36 个 Issue 更新。项目重心目前明显向**架构重构**与**稳定性修复**倾斜，核心开发者正在处理 V3 架构迁移中的遗留问题（如移除默认 Provider 回退逻辑），并推进 WASI 插件系统的落地。安全方面出现了一个中高危信号，涉及 Agent 工具白名单被绕过的风险，已有对应 PR 提出修复。整体来看，项目正处于 v0.8.0-beta2 发布前的关键打磨期，代码质量与架构合理性是当前主旋律。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **14 个 PR 合并/关闭**，主要集中在提升系统健壮性、修复特定 Provider 兼容性以及架构清理：

*   **Provider 兼容性修复**：PR [#7049](https://github.com/zeroclaw-labs/zeroclaw/pull/7049) 修复了 Kimi k2.6 模型因温度参数强制传递导致的 400 错误，解决了国内模型集成的一大痛点。
*   **安全性修复**：PR [#6974](https://github.com/zeroclaw-labs/zeroclaw/pull/6974) 修复了 `web_fetch` 工具未正确遵循私有 DNS 允许名单的问题，防止了潜在的 SSRF 风险。
*   **稳定性改进**：PR [#6983](https://github.com/zeroclaw-labs/zeroclaw/pull/6983) 优化了流式传输错误处理，在不可见错误发生时回退到非流式通道，提升了用户体验；PR [#7061](https://github.com/zeroclaw-labs/zeroclaw/pull/7061) 修复了 Provider 返回空白响应时被错误当作最终结果的问题。
*   **架构清理**：PR [#6904](https://github.com/zeroclaw-labs/zeroclaw/pull/6904) 精简了默认 Channel 打包集，移除了长尾集成以减小二进制体积；PR [#7066](https://github.com/zeroclaw-labs/zeroclaw/pull/7066) 开始着手移除 Channel 编排器中遗留的“默认模型 Provider”概念，强制显式配置。

## 4. 社区热点
今日社区讨论热度最高的议题集中在**性能优化**与**本地模型集成**：

*   **[Token 消耗优化]** Issue [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146)（评论 8 条）：用户提出通过“技能编译”机制最小化 Token 消耗。当前系统每次调用工具都会附带数百行的 `SKILL.md`，导致成本高昂。社区正在探讨编译器层的优化方案，这将是提升 Agent 经济性的关键。
*   **[Ollama 集成故障]** Issue [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)（评论 6 条）：本地 Ollama Provider 在涉及工具调用时报错并阻塞会话，严重影响了本地私有化部署体验，目前状态为 "In Progress"。
*   **[Discord 功能请求]** Issue [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378)（评论 6 条）：请求为 Discord Bot 增加白名单频道功能，限制 Bot 仅在指定频道响应，避免噪音干扰。
*   **[Gemini 历史记录 Bug]** Issue [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302)（评论 4 条）：Gemini 模型因历史记录序列化顺序问题（Assistant turn 在 User turn 之前）导致 400 错误，这是多模型支持中的典型边缘情况。

## 5. Bug 与稳定性
今日报告了若干影响工作流的关键 Bug，其中安全问题需优先关注：

*   **[S1 - 安全绕过]** Issue [#7063](https://github.com/zeroclaw-labs/zeroclaw/issues/7063)：Channel 启动的 Agent 绕过了工具白名单校验。安全策略配置仅允许 `file_read` 的 Agent 可能会在 Channel 中接收到 `shell` 等敏感工具定义。
    *   *Fix 状态*：已有 PR [#7064](https://github.com/zeroclaw-labs/zeroclaw/pull/7064) 提交修复，待合并。
*   **[S1 - 工作流阻塞]** Issue [#7068](https://github.com/zeroclaw-labs/zeroclaw/issues/7068)：Telegram Channel 在使用 Codex 后端时，意外将内部草稿/工具记录作为最终回复发送给用户，暴露了 Agent 的内部思考过程。
*   **[S2 - 架构退化]** Issue [#7059](https://github.com/zeroclaw-labs/zeroclaw/issues/7059)：Channel 编排器中存在过时的“默认模型 Provider”回退逻辑，这与 V3 架构的显式引用原则相悖，可能导致配置混乱。
    *   *Fix 状态*：已有 PR [#7066](https://github.com/zeroclaw-labs/zeroclaw/pull/7066) 提交修复。
*   **[S2 - 运行时崩溃]** Issue [#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472)：Gateway 在连接 Postgres 时发生 Panic（Cannot start a runtime from within a runtime），影响了使用 Postgres 作为存储后端的用户。

## 6. 功能请求与路线图信号
从今日的 Issues 和 PRs 中可以窥见项目下一阶段的演进方向：

*   **Agent 评估体系**：Issue [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) 与 PR [#7067](https://github.com/zeroclaw-labs/zeroclaw/pull/7067) 提出了建立 `zeroclaw eval` 评估框架的计划，引入确定性回放和 LLM-as-Judge 机制。这表明项目正在从“能用”向“好用且可量化”转型，为企业级应用做准备。
*   **WASI 插件化**：PR [#7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060) 提交了 WIT 接口定义文件，这是 FND-001 架构规划的一部分。Zeroclaw 正致力于构建更安全、可扩展的插件系统，可能将在 v0.8.x 版本中成为核心特性。
*   **企业级功能完善**：Issue [#5797](https://github.com/zeroclaw-labs/zeroclaw/pull/5797)（待合并）请求支持自定义 TLS CA 证书，以满足企业内网私有化部署需求，显示项目正在吸引更多复杂场景的企业用户。

## 7. 用户反馈摘要
*   **Token 成本痛点**：用户对 Agent 运行成本敏感，特别是每次请求携带完整 Skill 提示词导致的 Token 浪费（Issue #5146），希望能有更智能的按需加载或编译机制。
*   **本地化部署体验不佳**：Ollama 用户频繁遇到工具调用兼容性问题（Issue #5962），提示本地模型适配仍需打磨。
*   **Telegram 隐私泄露隐忧**：Issue #7068 反映的“内部思考过程暴露给用户”问题，对于生产环境是不可接受的风险，用户对 Channel 稳定性表示担忧。

## 8. 待处理积压
*   **[阻塞状态]** Issue [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391)：Daemon 节点的心跳检测机制尚未实现，导致节点状态监控不准确，目前处于 Blocked 状态，建议关注依赖项的进展。
*   **[长期悬置]** Issue [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)：关于从 `.well-known` URI 安装 Skills 的标准化提案，虽然社区呼声高，但推进缓慢，亟待维护者排期。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-02)

## 1. 今日速览
今日 Hermes Agent 项目呈现出极高的社区活跃度与维护节奏，过去24小时内共有 50 个 Issue 更新与 50 个 PR 更新，显示出项目正处于快速迭代与缺陷修复的密集期。尽管未发布新版本，但维护者与社区贡献者集中解决了 Docker 部署、Discord 网关集成及 Bedrock 适配等关键领域的阻塞问题。今日动态反映出项目正致力于提升多平台兼容性（如 Sendblue 集成）与系统健壮性，同时也暴露出 v0.15 版本引入的部分 UI/CLI 回归问题亟待解决。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 15 个 PR 被合并或关闭，主要集中在平台集成扩展与核心稳定性修复：

- **新增 Sendblue 消息渠道支持**：PR #3370 已合并，正式将 Sendblue 纳入一级网关平台支持，扩展了 Hermes 在消息推送渠道的能力。
- **Webhook 信号处理增强**：PR #2808 已合并，引入了 Cortex 信号传递机制，为 Webhook 管道增加了新的分发模式，提升了事件处理的灵活性。
- **Docker 文件系统安全性修复**：PR #32407 已合并，修复了 Docker 终端后端中文件工具可能写入沙箱镜像副本而非权威状态的关键安全漏洞。
- **Cron 子系统稳定性修复**：PR #37129 关闭了 CI 构建优化的讨论，同时社区提交了针对 Cron 任务调度中的 AttributeError 修复，确保异常配置不会导致子系统崩溃。

**待合并的重要 PR：**
- PR #36736 正在完善 Dashboard 管理面板功能，将实现 MCP 目录管理与系统统计的可视化，大幅提升运维体验。

## 4. 社区热点
今日社区讨论焦点集中在性能优化与核心功能缺陷上：

- **[Issue #4379] Token 开销分析引发热议**：用户 @Bichev 提交了详尽的性能分析报告，指出当前 API 调用中 73% 的 Token 消耗为固定开销，引发了关于 Agent 系统提示词与上下文管理效率的深度讨论。这反映了用户对生产环境成本控制的强烈需求。
- **[Issue #5143] 多角色自动路由功能请求**：该 Issue 获得 14 个点赞，用户 @OlegB333 提出了基于 Gateway Hooks 的多角色自动路由方案，旨在解决复杂场景下的 Agent 分流问题，显示出社区对智能化任务分发的强烈诉求。
- **[Issue #35595] v0.15 版本 UI 回归问题**：多个用户反馈 `/model` 命令在最新版本中返回原始字段列表而非人类可读信息，严重影响了 CLI 体验，目前该问题仍处于 Open 状态。

## 5. Bug 与稳定性
今日报告并处理了多个关键 Bug，部分已得到修复：

**严重 (P1)：**
- **[Issue #36208] Docker 容器启动失败**：自 v2026.5.28 起 Docker 容器无法启动。目前该 Issue 已关闭，推测已在主分支修复。 ([链接](https://github.com/NousResearch/hermes-agent/issues/36208))
- **[Issue #25935] Discord 图片附件处理异常**：非标准格式图片或混合文档导致 HTTP 400 错误，目前尚未有修复 PR 关联。 ([链接](https://github.com/NousResearch/hermes-agent/issues/25935))
- **[Issue #35595] CLI 交互体验回归**：`/model` 命令输出结构化字段导致可读性丧失，亟待修复。 ([链接](https://github.com/NousResearch/hermes-agent/issues/35595))

**重要 (P2)：**
- **[Issue #20500] Docker Dashboard 权限错误**：Docker 镜像中 root 权限文件导致 Dashboard Chat 标签页无法访问。 ([链接](https://github.com/NousResearch/hermes-agent/issues/20500))
- **[Issue #36211] Chrome CDP 兼容性问题**：v0.15.1 版本导致 DOM 操作频繁报错，用户需降级至 v0.15.0。 ([链接](https://github.com/NousResearch/hermes-agent/issues/36211))

**已修复：**
- **[Issue #29346] Discord 消息静默丢失**：工具调用响应在某些情况下被丢弃，目前 Issue 已关闭。 ([链接](https://github.com/NousResearch/hermes-agent/issues/29346))
- **[Issue #5726] Honcho 内存提供程序阻塞启动**：导致 Agent 初始化耗时 2 分钟以上，现已修复。 ([链接](https://github.com/NousResearch/hermes-agent/issues/5726))

## 6. 功能请求与路线图信号
- **Dashboard 身份传递 ([#35408](https://github.com/NousResearch/hermes-agent/issues/35408))**：用户希望 Dashboard 的 OAuth 认证身份能传递至 Agent 会话，以便实现个性化的记忆与权限控制。该功能若与正在开发的 Dashboard Admin Panel ([PR #36736](https://github.com/NousResearch/hermes-agent/pull/36736)) 结合，将显著提升多用户场景下的安全性。
- **Cron 任务感知能力 ([#37070](https://github.com/NousResearch/hermes-agent/issues/37070))**：用户指出 Agent 对自身定时任务的输出缺乏感知。目前已有 PR #37073 提交了通过系统提示注入 Cron 交付内容的解决方案，预计将很快合入主线。
- **Gemini Flex Inference 支持 ([#12700](https://github.com/NousResearch/hermes-agent/issues/12700))**：请求支持 Gemini 的 `service_tier: flex` 以降低成本，特别适合 Hermes 的后台任务场景。

## 7. 用户反馈摘要
- **Token 成本焦虑**：Issue #4379 中的详细分析表明，企业级用户对 Agent 推理成本极其敏感，任何固定开销的优化都能带来显著价值。
- **配置迁移痛点**：Issue #11312 与 #36771 暴露了配置路径一致性与命令行指引准确性的问题，用户在升级或迁移环境时容易受阻。
- **平台差异体验**：Discord 平台用户面临较多的附件处理与超时问题（Issue #19776, #25935），而 Docker 用户则受困于权限与启动失败，显示出不同部署环境下质量保障的不均衡。

## 8. 待处理积压
- **[Issue #20500] Docker EACCES 权限问题**：该 P2 级别 Bug 已存在近一个月，影响了 Docker 用户的 Dashboard 使用体验，需维护者尽快介入。 ([链接](https://github.com/NousResearch/hermes-agent/issues/20500))
- **[Issue #11665] 内存限制配置失效**：CLI/MCP 路径下的内存字符限制被忽略，可能导致上下文溢出或成本失控。 ([链接](https://github.com/NousResearch/hermes-agent/issues/11665))

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-02)

## 1. 今日速览
PicoClaw 项目今日保持高活跃度开发态势，发布了最新的 **v0.2.9-nightly** 自动构建版本。社区互动频繁，过去24小时内 Issues 更新量达 7 条，主要集中在模型兼容性和工具调用的稳定性上；PR 端则更为活跃，共有 11 条更新，其中 5 条已合并/关闭，显示维护者正在积极处理积压代码。尽管新 Issue 层出不穷，但包括 AWS Bedrock 兼容性、Token 消耗优化等关键修复已落地，项目整体处于快速迭代期，不过 Bug 解决速度（0 关闭）稍显滞后于新问题报告速度。

## 2. 版本发布
- **[nightly] Nightly Build (v0.2.9-nightly.20260602.426046fc)**
  - **类型**: 自动化构建版本
  - **更新范围**: 对比 `v0.2.9` 到 `main` 分支的完整变更。
  - **注意事项**: 官方提示该版本为自动构建，可能存在不稳定性，建议测试环境使用。
  - **链接**: [Release Page](https://github.com/sipeed/picoclaw/releases/tag/nightly)

## 3. 项目进展
今日共有 **5 条 PR 合并/关闭**，显著提升了系统的稳定性与兼容性：

- **修复 AWS Bedrock 兼容性**：PR [#2982](https://github.com/sipeed/picoclaw/pull/2982) 解决了 Claude Opus 4.8 模型因 `temperature` 参数被弃用而导致的调用失败问题，确保了最新模型的支持。
- **增强 Cron 工具能力**：PR [#2977](https://github.com/sipeed/picoclaw/pull/2977) 为 `cron` 工具添加了 `get` 和 `update` 操作，允许 Agent 更安全地管理定时任务。
- **性能优化**：PR [#2781](https://github.com/sipeed/picoclaw/pull/2781) 通过减少工具迭代中的 skill catalog token 消耗，显著降低了运行成本和延迟。
- **macOS 路径修复**：PR [#2890](https://github.com/sipeed/picoclaw/pull/2890) 修复了 macOS 上因符号链接导致路径验证失败的问题。
- **新接入渠道**：PR [#2893](https://github.com/sipeed/picoclaw/pull/2893) 合并了对 Server酱³ Bot (SC3Bot) 的支持，扩展了消息推送渠道。

## 4. 社区热点
今日讨论最热烈的 Issue 是 **[#1042 [BUG]exec工具的guardCommand方法问题](https://github.com/sipeed/picoclaw/issues/1042)**。

- **数据**: 评论 15 条，点赞 2 个。
- **分析**: 该 Issue 自 3 月创建至今仍活跃。用户指出 `exec` 工具在开启 `restrict_to_workspace` 时，其安全守卫的正则匹配过于“简单粗暴”。例如，执行天气查询 `curl wttr.in/Beijing` 会被误判为路径越界（匹配到 `Beijing` 被识别为相对路径）。
- **诉求**: 社区强烈呼吁重构 `guardCommand` 的路径检测逻辑，区分“URL/非路径命令”与“文件操作命令”，在保障安全的前提下避免误杀合法操作。

## 5. Bug 与稳定性
今日报告的 Bug 集中在模型兼容性与启动稳定性，部分已有修复方案：

1.  **[已修复] 模型参数弃用导致崩溃**:
    - Issue [#2939](https://github.com/sipeed/picoclaw/issues/2939): Claude Opus 4.7 因 `temperature` 参数报错。已由 PR [#2940](https://github.com/sipeed/picoclaw/pull/2940) 和 [#2982](https://github.com/sipeed/picoclaw/pull/2982) 解决。
    - Issue [#2941](https://github.com/sipeed/picoclaw/issues/2941): Claude Sonnet 默认配置 ID 格式错误。已有修复 PR [#2942](https://github.com/sipeed/picoclaw/pull/2942) 待合并。

2.  **[高优先级] 启动崩溃循环**:
    - Issue [#2720](https://github.com/sipeed/picoclaw/issues/2720): PID 文件检查未验证进程身份，导致系统复用 PID 时 PicoClaw 无法启动。修复 PR [#2813](https://github.com/sipeed/picoclaw/pull/2813) 已提交待合并。

3.  **[未处理] 历史记录丢失**:
    - Issue [#2796](https://github.com/sipeed/picoclaw/issues/2796): 多轮对话的历史记录中，用户只能看到最后一条消息，严重影响使用体验。

4.  **[未处理] RISC-V 架构兼容性**:
    - Issue [#2887](https://github.com/sipeed/picoclaw/issues/2887): .deb 版本在 RISC-V 架构上配合 OpenAI 模型无法工作。

## 6. 功能请求与路线图信号
- **Agent 协作机制**: PR [#2937](https://github.com/sipeed/picoclaw/pull/2937) 提出了“Agent Collaboration Bus”概念，旨在构建内部 Agent 间的持久化通信机制。这暗示 PicoClaw 正向多智能体协作架构演进，是未来版本的重要方向。
- **NEAR AI 云支持**: PR [#2917](https://github.com/sipeed/picoclaw/pull/2917) 正在集成 NEAR AI Cloud 作为新的 LLM Provider，扩展去中心化 AI 基础设施选项。
- **文档同步**: Issue [#2981](https://github.com/sipeed/picoclaw/issues/2981) 指出 v0.2.9 变更巨大，说明书需同步更新，反映了项目功能迭代速度较快。

## 7. 用户反馈摘要
- **痛点 - 工具安全性过当**: 用户反馈 `exec` 工具的安全沙箱过于敏感，导致非文件系统操作（如网络请求）被错误拦截，降低了自动化任务的执行成功率。
- **痛点 - 多模型适配滞后**: 随着 Anthropic 新模型发布，旧版 SDK 参数（如 `temperature`）导致 400/404 错误频发，用户希望 PicoClaw 能更快适配上游 API 变更。
- **体验问题**: 历史消息显示不全的问题让用户感到困惑，认为“压缩”逻辑不应影响用户查看历史。

## 8. 待处理积压
- **Issue #1042 (exec 工具误报)**: 自 2026-03-04 创建至今，该 Bug 严重影响了工具链的实用性，评论数持续增长，建议维护者优先 Review 并修复。
- **Issue #2720 (PID 检查崩溃)**: 该问题会导致服务意外宕机且难以排查，PR [#2813](https://github.com/sipeed/picoclaw/pull/2813) 已悬置较久，建议尽快合并发布以修复稳定性问题。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-02)

## 1. 今日速览
NanoClaw 项目今日呈现高度活跃状态，核心聚焦于系统稳定性修复与容器化兼容性改进。过去 24 小时内，社区共提交了 2 个新 Issue，均为严重影响用户体验的 Bug（会话崩溃与工具超时阻塞），同时有 1 个长期存在的 A2A 路由 Bug 被成功关闭。代码贡献方面，新增 5 个待合并 PR，主要针对“中毒会话自愈”、容器权限及附件挂载等关键问题。虽然今日无新版本发布，但针对高严重性故障的修复补丁已提交，显示出维护者对系统健壮性的快速响应能力。

## 2. 版本发布
无。

## 3. 项目进展
今日虽然没有合并 PR，但关闭了一个关键 Issue，并提交了多个高价值修复 PR，项目整体正在向更稳健的运行时架构迈进：

*   **Issue #2331 [CLOSED]:** 修复了多通道群组中 A2A (Agent-to-Agent) 回复路由错误的问题。该问题的解决标志着多代理协作场景下的会话管理逻辑更加精确。
*   **PR #2671 [OPEN]:** 修复了附件目录在代理容器中不可见的问题，确保 Channel adapters 能够正确处理入站附件，这对多模态交互至关重要。
*   **PR #2670 [OPEN]:** 针对 Issue #2669 提交了修复，实现了对“中毒”会话的自愈机制，防止因 transcript 损坏导致的死循环。
*   **PR #2667 [OPEN]:** 增强了容器运行时的兼容性，支持 rootless Podman 环境下的 root 容器用户映射，解决了特定环境下的安全启动限制。

## 4. 社区热点
今日社区关注点集中在**运行时稳定性**与**环境兼容性**上：

*   **[Issue #2669](https://github.com/nanocoai/nanoclaw/issues/2669)**: 关于 Agent 会话因 "thinking blocks cannot be modified" 错误导致崩溃循环的反馈最受关注。该问题直接导致服务不可用，且常规重启无法解决，引发了维护者的高度重视，修复 PR 已迅速提交。
*   **[PR #2666](https://github.com/nanocoai/nanoclaw/pull/2666)**: 提出了一套复杂的故障恢复机制（回滚、重放等），显示出核心贡献者正在试图构建一个更具容错能力的 Provider 层，这是项目架构演进的重要信号。

## 5. Bug 与稳定性
今日报告的 Bug 严重程度较高，主要集中在 Agent 会话生命周期管理：

1.  **[Critical] Agent 会话死循环崩溃**
    *   **Issue:** [#2669](https://github.com/nanocoai/nanoclaw/issues/2669)
    *   **现象:** 恢复会话时因 transcript 中包含无法修改的 thinking blocks 导致 API 400 错误，Agent 陷入无限重启循环，无法自愈。
    *   **状态:** **已有修复 PR** [#2670](https://github.com/nanocoai/nanoclaw/pull/2670)。

2.  **[High] MCP 工具超时阻塞会话**
    *   **Issue:** [#2668](https://github.com/nanocoai/nanoclaw/issues/2668)
    *   **现象:** 单个工具调用若挂起，会阻塞整个 SDK 轮次，导致心跳丢失，系统需等待长达 30 分钟才能强制终止，严重影响响应速度。
    *   **状态:** 暂无关联修复 PR，需关注。

3.  **[Fixed] A2A 路由错误**
    *   **Issue:** [#2331](https://github.com/nanocoai/nanoclaw/issues/2331)
    *   **状态:** 已关闭。

## 6. 功能请求与路线图信号
*   **精细化超时控制:** Issue #2668 暴露了当前缺乏“单工具超时”机制的短板。预计未来版本将引入更细粒度的工具调用超时配置，而非依赖全局心跳。
*   **健壮性架构升级:** PR #2666 提出的 "Provider failure recovery" 暗示项目正在从单纯的“调用层”向具备回滚和重放能力的“企业级容错层”演进，这可能是下一阶段架构重构的重点。

## 7. 用户反馈摘要
*   **痛点 - 会话持久化不可靠:** 用户 (@ddaniels) 反馈在 Resume 场景下极易遇到 transcript 损坏问题，且错误信息晦涩，表明目前的会话状态序列化机制在处理特殊 Block（如 thinking）时存在边缘情况缺陷。
*   **痛点 - 阻塞式调用风险:** 用户 (@mshirel) 指出 MCP 工具缺乏独立超时控制，导致单个工具卡死拖垮整个 Agent 会话，反映了生产环境中对异步隔离的强烈需求。
*   **场景 - 复杂环境部署:** PR #2667 显示社区用户正在尝试在 rootless Podman 等高安全限制环境下部署 NanoClaw，表明项目正在向更多样化的基础设施环境渗透。

## 8. 待处理积压
*   **PR #2346 [OPEN]**: 关于“将未知斜杠命令视为普通聊天”的修复已挂起近一个月（创建于 2026-05-08）。该修复解决了未识别命令导致响应静默丢弃的问题，建议维护者尽快 Review 以提升交互体验。
    *   链接: [PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 (2026-06-02)

## 1. 今日速览
过去 24 小时，NullClaw 项目整体活跃度处于低位，无新增 Issue 或版本发布。项目焦点集中在代码质量与用户体验优化上，唯一的动态来自社区贡献者提交的一个针对 Telegram 平台的 Bug 修复 PR。该 PR 旨在解决交互反馈缺失问题，显示项目正处于细节打磨与维护阶段，核心功能库保持稳定。

## 2. 版本发布
无。

## 3. 项目进展
今日无合并或关闭的 PR。项目当前有一个待处理的修复性 PR，预示着下个版本可能在交互体验上有小幅提升。

- **[OPEN] PR #943**: 修复了 Telegram 端处理回调查询时缺失“正在输入”指示器的问题。
  - **详情**: 该 PR 针对 Issue #942 提出。此前，用户在 Telegram 点击内联按钮（如 `nc_choices`）后，Agent 在处理请求（耗时 5-30 秒）期间聊天窗口无任何反馈，导致用户体验断层。
  - **意义**: 若此 PR 合并，将补齐 Telegram 适配器的交互反馈短板，显著提升用户在等待模型响应期间的感知流畅度，避免用户误以为 Bot 卡死。

## 4. 社区热点
今日社区活跃度极低，无讨论活跃的 Issue。唯一值得关注的是贡献者 @raskevichai 提交的 **[PR #943](https://github.com/nullclaw/nullclaw/pull/943)**。该 PR 涉及 Telegram 适配器的核心交互逻辑，反映出部分用户对实时反馈机制的强烈需求。在 AI 生成内容耗时较长的情况下，缺乏 UI 状态反馈是影响用户留存的关键痛点。

## 5. Bug 与稳定性
今日无新增崩溃或严重阻断性问题报告，仅有一个与平台特性相关的体验级 Bug 被提交修复：

- **[中等] Telegram 回调查询交互静默问题**
  - **现象**: 用户在 Telegram 点击内联按钮触发 Agent 处理时，界面无“Typing...”状态提示。
  - **影响**: 在模型推理耗时较长（5-30秒）时，用户界面完全静默，容易导致用户重复点击或误判系统失效。
  - **状态**: 已有修复方案 **[PR #943](https://github.com/nullclaw/nullclaw/pull/943)**，目前状态为 Open，等待维护者 Review。

## 6. 功能请求与路线图信号
今日无新增功能请求。从 **[PR #943](https://github.com/nullclaw/nullclaw/pull/943)** 的内容推断，项目近期路线图可能包含以下隐性重点：
- **多平台适配体验优化**: 开发者正致力于消除不同通信平台（如 Telegram）与 Agent 核心交互逻辑之间的体验差异。
- **长耗时任务的 UX 改进**: 针对 LLM 推理延迟问题，引入更友好的前端反馈机制是提升项目成熟度的重要方向。

## 7. 用户反馈摘要
今日无直接的用户 Issue 评论反馈。但从 **[PR #943](https://github.com/nullclaw/nullclaw/pull/943)** 提交者的描述中可以提炼出以下用户痛点：
- **痛点**: Telegram 机器人用户在进行选项选择后，对“无响应”的等待过程感到困惑，缺乏视觉上的“进行中”确认是主要的不满来源。

## 8. 待处理积压
- **PR #943 等待审核**: 该 PR 解决了一个明显的体验缺陷，建议维护者尽快进行 Code Review 并合并，以提升 Telegram 端用户的使用体验。
- **长期静默 Issue**: 今日数据中未显示长期未处理的积压项，但鉴于今日无任何 Issue 更新，建议维护者检查是否有早期的用户反馈未被处理。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-02)

## 1. 今日速览
IronClaw 项目今日表现出极高的开发活跃度，核心重心明显向 `reborn` 架构迁移与功能集成倾斜。过去 24 小时内共有 **32 个 PR 合并/关闭**，显示团队正在高速推进代码整合。主要进展集中在 **GitHub/GSuite 等外部能力的 Reborn 适配**、**OAuth 登录集成** 以及 **Trigger 调度系统的重构**。虽然无新版本发布，但大量功能性 PR 的合并预示着 Reborn 分支即将进入稳定期。Issues 方面，核心贡献者提交了多个关于 Compaction（内存压缩）和预算管理的深层逻辑缺陷，需引起重视。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 32 个 PR 被合并或关闭，进展显著，主要集中在以下领域：

*   **Reborn 架构下的外部能力集成：**
    *   **GitHub 全功能支持**：[PR #4280](https://github.com/nearai/ironclaw/pull/4280) 已合并，将 GitHub 能力从仅支持 Issues 扩展至完整的 v1 API 表面，并完善了 Auth 鉴权流。
    *   **GSuite 能力激活**：[PR #4293](https://github.com/nearai/ironclaw/pull/4293) 已合并，实现了 Gmail 和 Google Calendar 的动态密钥可见性与 API 网络策略。
    *   **OAuth 体系完善**：[PR #4297](https://github.com/nearai/ironclaw/pull/4297) 和 [PR #4300](https://github.com/nearai/ironclaw/pull/4300) 分别实现了 GSuite 和 Notion 的 OAuth 提供商支持，为多租户环境下的第三方集成打下基础。

*   **预算与成本治理：**
    *   [PR #3899](https://github.com/nearai/ironclaw/pull/3899) 已合并，这是针对 Reborn 成本预算系统的重要更新，修复了 #3841 的后续问题，完善了 Token 用量统计和限制逻辑。

*   **调度系统重构：**
    *   [PR #4301](https://github.com/nearai/ironclaw/pull/4301) 已合并，引入了后端无关的 `TriggerPollerWorker` 核心逻辑，为无状态 Agent 的定时触发功能奠定基础。

*   **Bug 修复与优化：**
    *   [PR #4299](https://github.com/nearai/ironclaw/pull/4299) 修复了二进制更新后因扩展清单哈希不匹配导致的启动失败问题，提升了版本升级的平滑度。

## 4. 社区热点
今日讨论主要集中在核心架构设计与未来规划上：

*   **Reborn 架构路线图探讨**：[Issue #4279](https://github.com/nearai/ironclaw/issues/4279) 引发了关于云原生部署与无状态 Agent 模型的讨论。用户对项目转向无状态架构表示赞赏，并询问后续路线图。这表明社区对 Reborn 分支带来的水平扩展能力抱有极高期待。
*   **Compaction 机制深度优化**：核心贡献者 @henrypark133 开启了系列讨论（如 [Issue #4312](https://github.com/nearai/ironclaw/issues/4312)），指出当前 Reborn 的内存压缩进度对用户不可见，导致长 Prompt 处理时看起来像卡死。这反映了对用户体验（UX）细节的精细化打磨需求。
*   **Slack 集成推进**：[PR #4272](https://github.com/nearai/ironclaw/pull/4272) 提议增加 Reborn Events API host ingress，正在推进 Slack 机器人的底层架构适配，吸引了关注。

## 5. Bug 与稳定性
今日报告了多个与 "Reborn" 架构相关的深层逻辑问题，虽未引发崩溃，但影响资源管理准确性：

*   **严重逻辑缺陷**：
    *   **Context 溢出处理失效**：[Issue #4310](https://github.com/nearai/ironclaw/issues/4310) 指出，在上下文溢出恢复时，系统发出了 `ShrinkContext` 指令，但执行器未执行压缩便重试，可能导致无限循环。**暂无 Fix PR**。
    *   **预算治理归类错误**：[Issue #4311](https://github.com/nearai/ironclaw/issues/4311) 指出模型网关将部分预算治理错误归类为“上下文溢出”，可能导致错误的自动恢复行为。**暂无 Fix PR**。
    *   **压缩数据竞态**：[Issue #4309](https://github.com/nearai/ironclaw/issues/4309) 指出压缩摘要写入可能在检查点失败后存活并阻塞重试，存在状态不一致风险。**暂无 Fix PR**。

*   **性能隐患**：
    *   [Issue #4278](https://github.com/nearai/ironclaw/issues/4278) 提出 ENGINE_V2 中会话历史作为单一 JSON 存储可能引发的上下文窗口耗尽问题，建议进行存储结构的优化。

*   **测试稳定性**：
    *   [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) 报告 Nightly E2E 测试失败，目前仍在处理中。

## 6. 功能请求与路线图信号
*   **WebUI OAuth 登录**：[Issue #4287](https://github.com/nearai/ironclaw/issues/4287) 请求在 WebUI 上集成 OAuth 登录。结合今日合并的 GSuite/Notion OAuth PR，项目后端鉴权已就绪，前端集成应指日可待。
*   **飞书集成**：[PR #4178](https://github.com/nearai/ironclaw/pull/4178) 正在添加飞书的 WebSocket 事件接入，表明项目正在积极拓展除 Slack/Discord 之外的 IM 渠道，特别是针对亚洲市场。
*   **MiniMax 模型升级**：[PR #4298](https://github.com/nearai/ironclaw/pull/4298) 建议将 MiniMax 默认模型升级至 M3，显示对最新 LLM 能力的跟进。

## 7. 用户反馈摘要
*   **架构认可**：用户 @liaoqianchuan 在 Issues 中表达了对 Reborn 无状态架构的认可，认为这是多租户环境下的关键改进。
*   **体验痛点**：用户指出在处理长 Prompt 时缺乏进度反馈（[Issue #4312](https://github.com/nearai/ironclaw/issues/4312)），系统看起来像“卡死”，急需 UI 层面的进度提示。
*   **模型支持**：社区持续关注并贡献对最新模型（如 MiniMax M3）的支持，说明项目在作为 LLM 网关/Agent 平台时的模型适配灵活性受到重视。

## 8. 待处理积压
*   **长期未解决的 E2E 失败**：[Issue #4108](https://github.com/nearai/ironclaw/issues/4108) 显示 Nightly E2E 测试已失败数日（自 05-27 起），需维护者优先排查 CI 稳定性。
*   **TriggerPollerWorker 重构建议**：[Issue #4303](https://github.com/nearai/ironclaw/issues/4303) 建议拆分庞大的 `worker.rs` 文件（约 2500 行），以提升代码可维护性，随着 [PR #4301](https://github.com/nearai/ironclaw/pull/4301) 的合并，此重构迫在眉睫。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-02)

## 1. 今日速览
LobsterAI 项目今日处于**高频发布与收尾阶段**。随着 `2026.6.1` 版本的正式发布，项目团队在 24 小时内集中合并了 49 个 Pull Requests，显示出极高强度的代码审查与功能集成活动。此次更新重点围绕 MCP（Model Context Protocol）性能优化、AI 会话深度思考能力控制以及系统稳定性增强展开。与此同时，Issue 板块今日无新增或活跃记录，表明当前版本主要处于功能迭代后的稳定期，用户反馈渠道暂时平静。

## 2. 版本发布
**新版本：** [LobsterAI 2026.6.1](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.1)

**更新重点：**
- **核心功能集成**：引入了 Expert Kit Store 与会话集成功能，增强了 AI 的专家系统能力。
- **插件生态增强**：新增针对 npm/clawhub 源的插件更新检查机制。
- **基础修复**：包含针对 MCP 的关键修复（具体细节 Release Note 截断，需关注 Commit 详情）。

**升级提示：** 本次更新涉及核心运行时适配与数据库迁移（如 Thinking Level 功能），建议升级前备份数据，并在测试环境验证 MCP 启动逻辑变更后的兼容性。

## 3. 项目进展
今日共有 49 个 PR 合并/关闭，1 个 PR 待合并，项目整体功能完整度与稳定性显著提升：

- **AI 模型控制增强**：PR [#1985](https://github.com/netease-youdao/LobsterAI/pull/1985) 合并，新增会话级 "Thinking Level"（思考等级）控制，支持从关闭到自适应多档调节，为用户提供了更精细的推理成本与质量平衡手段。
- **MCP 架构优化**：PR [#2091](https://github.com/netease-youdao/LobsterAI/pull/2091) 提交了重要优化，通过前置解析 `npx` 包路径，解决了 MCP 启动慢路径问题，显著提升会话启动速度；同时增加了首响计时日志，利于性能监控。
- **安全与隐私合规**：PR [#1962](https://github.com/netease-youdao/LobsterAI/pull/1962) 引入 `nsp-clawguard` 安全监控插件的热切换配置；PR [#1952](https://github.com/netease-youdao/LobsterAI/pull/1952) 修复了 macOS 语音输入权限被拒后的 Toast 提示缺失问题，改善了用户体验。
- **UI/UX 与稳定性修复**：PR [#2022](https://github.com/netease-youdao/LobsterAI/pull/2022) 优化了 HTML 预览体验并解决大文件卡顿；PR [#2025](https://github.com/netease-youdao/LobsterAI/pull/2025) 重构了 IM Bot 管理界面；PR [#2015](https://github.com/netease-youdao/LobsterAI/pull/2015) 修复了 OpenClaw 压缩重试与工具结果缺口问题，提升了底层通信健壮性。

## 4. 社区热点
由于今日 Issues 无活跃数据，社区关注点主要集中在新合并的功能特性上：
- **PR [#2091](https://github.com/netease-youdao/LobsterAI/pull/2091) [OPEN]**：该 PR 虽处于待合并状态，但内容极为关键。它试图解决 MCP 启动解析的性能瓶颈，通过将 `npx` 命令转换为稳定的 `node` 绝对路径调用，减少每次会话的开销。这反映了项目对运行时性能细节的深入打磨，预计合并后将显著改善用户在复杂 MCP 场景下的启动体验。

## 5. Bug 与稳定性
今日无新报 Bug 报告（Issue 0 条），但合并的 PR 中包含大量重要修复，属于主动治理：
- **[P1] 核心运行时逻辑修复**：PR [#2015](https://github.com/netease-youdao/LobsterAI/pull/2015) 修复了 OpenClaw 的 tool result gaps 问题，避免了工具调用中断导致的会话失败，属于稳定性关键修复。
- **[P2] 兼容性修复**：PR [#2000](https://github.com/netease-youdao/LobsterAI/pull/2000) 修复了 mimo 模型与 Anthropic 格式的兼容性问题；PR [#2032](https://github.com/netease-youdao/LobsterAI/pull/2032) 修复了自定义模型切换时的错误。
- **[P3] 体验优化**：PR [#2022](https://github.com/netease-youdao/LobsterAI/pull/2022) 解决了大文件源码预览的卡顿问题；PR [#2002](https://github.com/netease-youdao/LobsterAI/pull/2002) 修复了 Markdown 预览中本地图片路径解析失败的问题。

## 6. 功能请求与路线图信号
虽然没有显式的功能请求 Issue，但从已合并代码可窥见项目路线图方向：
- **深度思考控制**：Thinking Level 功能的上线标志着项目正探索更深层的模型推理控制能力，未来可能会结合模型特性提供更多样化的推理模式。
- **MCP 生态工具化**：PR [#2069](https://github.com/netease-youdao/LobsterAI/pull/2069) 增加了对 npm/clawhub 源的插件更新检查，暗示项目正着力构建插件生态的标准化管理工具。
- **安全模块化**：`nsp-clawguard` 的配置化引入（PR [#1962](https://github.com/netease-youdao/LobsterAI/pull/1962)）预示着安全组件将作为可选模块更灵活地集成，可能为未来企业级部署做准备。

## 7. 用户反馈摘要
今日无公开的 Issue 讨论，暂无法提炼用户痛点与声音。但从开发者的提交记录看，团队正着力解决 macOS 权限弹窗交互生硬（PR #1952）、浏览器/Webfetch 稳定性（PR #2023）等实际使用中的摩擦点。

## 8. 待处理积压
- **PR [#2091](https://github.com/netease-youdao/LobsterAI/pull/2091)**：作为目前唯一待合并的 PR，涉及 MCP 启动核心逻辑优化，建议维护者重点关注其测试覆盖范围，确保在 Windows/macOS 双平台的路径解析兼容性，尽快合并以提升 2026.6.1 后续补丁版本的性能表现。

---
**分析师结语**：LobsterAI 今日展现了“静默开发，爆发集成”的特征，Issue 社区端虽无声音，但代码端 49 个合并请求反映出项目正处于功能快速迭代后的锁定期。新版本在模型控制粒度（Thinking Level）和底层架构性能（MCP 优化）上均有实质性突破。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-06-02)

**项目：** Moltis (github.com/moltis-org/moltis)
**分析师：** AI 智能体与个人 AI 助手项目组

---

### 1. 今日速览
Moltis 项目今日整体呈现“重开发、轻交互”的稳健迭代态势。过去 24 小时内，项目未收到新的 Issue 反馈，但核心团队高效关闭了 3 个 Pull Requests，重点聚焦于 Provider 架构重构与生态扩展。其中，NEAR AI Cloud 的集成显示出项目向去中心化 AI 基础设施拓展的明确意图，同时对 OpenAI 能力判断逻辑的重构进一步夯实了系统的稳定性。总体而言，项目代码活跃度高，处于功能增强与架构优化的良性周期。

### 2. 版本发布
*无新版本发布。*

### 3. 项目进展
今日共有 3 个 PR 被关闭并合并，显著推进了多模型支持与底层架构的健壮性：

*   **架构重构与规范化**：PR [#1090](https://github.com/moltis-org/moltis/pull/1090) 已合并。该 PR 重构了 OpenAI 兼容 Provider 的能力检测机制，摒弃了以往基于 URL/名称的行为检查，转而采用显式的能力策略。此举将自定义 Provider 的行为限制在严格默认值下，同时为内置 Provider 提供了更规范的注册路径，有效提升了系统的可预测性与安全性。
*   **生态版图扩展**：PR [#1031](https://github.com/moltis-org/moltis/pull/1031) 已合并。正式引入 [NEAR AI Cloud](https://cloud-api.near.ai/v1) 作为新的 OpenAI 兼容 Provider。该功能不仅支持通过 `NEARAI_API_KEY` 接入，还实现了从公共目录发现模型以及 TEE（可信执行环境）感知的能力推荐，标志着 Moltis 在隐私计算与去中心化 AI 服务集成方面迈出重要一步。
*   **核心逻辑修复**：PR [#1088](https://github.com/moltis-org/moltis/pull/1088) 已合并。针对 OpenAI Codex Provider 修复了工具调用参数的处理逻辑，确保在流式传输未发出参数增量时，能够正确合成最终参数，解决了因参数缺失导致的潜在错误。

### 4. 社区热点
过去 24 小时内项目 Issues 列表静默，暂无公开的用户讨论或争议性话题。社区活跃度主要体现在代码贡献层面，PR 的顺利合并显示出维护者对当前开发方向的内部共识度较高。

### 5. Bug 与稳定性
*   **已修复**：PR [#1088](https://github.com/moltis-org/moltis/pull/1088) 解决了 OpenAI Codex 在处理最终工具调用参数时的边缘情况。此前，若流式传输未发出参数增量，可能导致解码诊断失败或参数丢失，该修复提升了 AI 智能体在复杂工具调用场景下的鲁棒性。
*   **新报告**：过去 24 小时内未收到新的 Bug 报告。

### 6. 功能请求与路线图信号
虽然无显性的功能请求 Issue，但从合并的代码可窥见路线图走向：
*   **去中心化与隐私计算**：[#1031](https://github.com/moltis-org/moltis/pull/1031) 的合并明确释放了支持 Web3 AI 基础设施（NEAR）及 TEE 隐私保护的信号，未来可能会继续深化对去中心化推理服务的支持。
*   **Provider 生态开放性**：[#1090](https://github.com/moltis-org/moltis/pull/1090) 的重构为后续引入更多非标准或半兼容的 OpenAI API 提供商铺平了道路，暗示项目正致力于成为更通用的 AI 模型网关。

### 7. 用户反馈摘要
由于今日无活跃的 Issue 评论，暂无法提炼具体的用户痛点或满意度反馈。从代码变更推断，对于需要接入 NEAR AI Cloud 或使用 OpenAI Codex 的用户而言，今日的更新将显著改善接入体验与调用稳定性。

### 8. 待处理积压
当前数据显示无长期未响应的 Issue 或 PR，项目队列处于健康状态。建议维护者关注新合并的 NEAR AI Cloud Provider 的文档完善情况，以便社区用户能快速上手新功能。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-06-02)

## 1. 今日速览
CoPaw 项目今日保持了极高的活跃度，共发布了 **v1.1.10** 和 **v1.1.10-beta.2** 两个版本，标志着项目在 Agent 自主性和 Coding Mode 交互上迈出了重要一步。社区方面，过去 24 小时内有 50 条 Issue 更新和 38 条 PR 更新，显示出用户对新增功能的积极反馈及对新版本稳定性的密切关注。开发重心明显向 **AgentScope 2.0 迁移** 靠拢，同时针对 Windows 平台的进程管理和资源清理问题进行了集中修复。整体来看，项目处于快速迭代期，新功能上线伴随着部分配置持久化和稳定性挑战。

## 2. 版本发布
今日发布 **v1.1.10** 正式版及 **v1.1.10-beta.2**。

### v1.1.10 更新详解
本次更新重点增强了 Agent 系统的灵活性和 Coding Mode 的用户体验：
*   **✨ Agent System - Spawn Subagent**：新增 `spawn_subagent` 工具，支持在当前工作区内执行临时的子智能体任务。这标志着 CoPaw 正式支持“Agent 生成 Agent”的动态编排能力，极大提升了复杂任务的自动化程度。
*   **✨ Coding Mode - Open Directory**：新增 "Open Directory" 标签页，允许用户直接引用本地路径，优化了代码编写时的文件交互体验。

### v1.1.10-beta.2 修复
*   修复了网站 Header 样式问题并添加了自动续播视频。
*   修复了 Skill 标签保留及启用/禁用状态的逻辑问题。

## 3. 项目进展
今日共有 **11 个 PR 合并/关闭**，主要集中在架构迁移、稳定性修复和功能扩展：

*   **架构迁移启动**：PR [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846) 开启了从 AgentScope 1.x 到 2.0 的迁移工作，这是一个 [Breaking Change] 标志性的 PR，预计将重构后端 Runtime 和 API 依赖。
*   **核心功能增强**：PR [#4857](https://github.com/agentscope-ai/QwenPaw/pull/4857) 增强了 `make-skill` 流程，支持后台执行和自演化技能创建，进一步释放了 Agent 的自主性。
*   **关键 Bug 修复**：
    *   PR [#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853) 修复了 Windows 平台上浏览器进程和临时目录锁定的顽疾，解决了会话结束后资源无法释放的问题。
    *   PR [#4827](https://github.com/agentscope-ai/QwenPaw/pull/4827) 修复了上下文压缩阈值读取错误的 Bug，恢复了用户配置的优先级。
    *   PR [#4822](https://github.com/agentscope-ai/QwenPaw/pull/4822) 修复了 Cron 任务在共享会话模式下执行轨迹为空的问题。

## 4. 社区热点
今日社区讨论焦点集中在架构升级与配置稳定性上：

1.  **后端架构迁移讨论**：Issue [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) 讨论了迁移至 AgentScope 2.0 的计划，获得 2 个点赞和 5 条评论，社区对新的 API 和 Runtime 模型表示期待，但也有用户对迁移成本表示担忧。
2.  **模型配置丢失问题**：Issue [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) 反映新建会话后 Models 配置页面丢失且无法加载，以 6 条评论成为今日最热 Bug，严重影响用户体验，需优先关注。
3.  **配置持久化痛点**：Issue [#4807](https://github.com/agentscope-ai/QwenPaw/issues/4807) 指出每次升级后被禁用的内置技能会重置为启用，引发了用户对配置“记忆”功能的强烈需求。

## 5. Bug 与稳定性
今日报告了多个影响使用的严重 Bug，部分已有修复方案：

*   **🔴 严重**：
    *   **模型配置丢失**：[#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) - 新建会话导致模型配置页面崩溃，提示 "Load failed"，目前仍在 Open 状态，需紧急修复。
    *   **任务执行失败**：[#4835](https://github.com/agentscope-ai/QwenPaw/issues/4835) - `jobs.json` 中的一条无效记录会导致整个 Workspace 启动失败，容错机制缺失。
*   **🟠 中等**：
    *   **资源泄露**：[#4834](https://github.com/agentscope-ai/QwenPaw/issues/4834) - 服务重启导致 MCP Server 进程累积，引起控制台加载缓慢。
    *   **上下文膨胀**：[#4872](https://github.com/agentscope-ai/QwenPaw/issues/4872) - 新会话直接加载原始历史而非压缩上下文，导致 Context 迅速溢出。
    *   **Windows 锁定**：[#4844](https://github.com/agentscope-ai/QwenPaw/issues/4844) - 浏览器调用后进程残留。**已有修复 PR [#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853)**。
*   **🟢 轻微**：
    *   [#4877](https://github.com/agentscope-ai/QwenPaw/issues/4877) - Custom Channel 保存设置时监听停止。**已有修复 PR [#4884](https://github.com/agentscope-ai/QwenPaw/pull/4884)**。

## 6. 功能请求与路线图信号
*   **多 Skill 路径支持**：PR [#4891](https://github.com/agentscope-ai/QwenPaw/pull/4891) 提议支持外部 Skill 路径注册，无需复制文件即可加载，这可能成为下一版本 Skill 管理的标准特性。
*   **更多模型提供商**：PR [#4722](https://github.com/agentscope-ai/QwenPaw/pull/4722) 计划增加小米 MiMo Token Plan 内置提供商，PR [#4881](https://github.com/agentscope-ai/QwenPaw/pull/4881) 增加 MiniMax M3 模型，显示项目正在积极扩展模型生态。
*   **安全披露渠道**：Issue [#4863](https://github.com/agentscope-ai/QwenPaw/issues/4863) 询问在阿里安全响应中心（ASRC）上报漏洞的方式，建议项目组尽快明确安全对接流程。

## 7. 用户反馈摘要
*   **升级体验痛点**：用户反馈升级过程并不平滑，存在配置重置（#4807）和虚拟环境被重置（#4875）的问题，破坏了用户的个性化设置。
*   **交互体验优化**：Coding Mode 下的对话切换存在全局刷新问题（#4819），且 Desktop 版字体过小难以调整（#4154），影响了长时间使用的舒适度。
*   **稳定性认可**：尽管有 Bug，用户对 `spawn_subagent` 的新能力表现出浓厚兴趣，认为这是迈向真正 Autonomous Agent 的关键一步。

## 8. 待处理积压
*   **[High Priority]** Issue [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666)：模型配置丢失问题影响核心功能，建议立即排查。
*   **[High Priority]** Issue [#4835](https://github.com/agentscope-ai/QwenPaw/issues/4835)：`jobs.json` 容错性差，会导致服务完全不可用。
*   **[Long-term]** Issue [#4154](https://github.com/agentscope-ai/QwenPaw/issues/4154)：Desktop 端字体调节功能缺失，影响用户体验，长期未解决。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-06-02)

## 1. 今日速览
ZeptoClaw 项目今日维护力度强劲，呈现“高吞吐、重质量”的特征。过去 24 小时内共处理了 **18 个 PR**，其中 17 个已合并或关闭，主要涵盖关键 Bug 修复、安全合规更新及大量依赖升级。项目当前核心焦点在于**工程化建设与二进制体积治理**，新增了 CI 硬性门禁以控制构建产物大小。虽然无新版本发布，但通过高频的依赖更新与核心修复，项目稳定性与安全性得到显著巩固。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日共有 17 个 PR 合并/关闭，项目在稳定性修复与 CI 基础设施建设上取得实质性突破：

*   **核心修复 [已落地]:** PR #610 修复了一个严重逻辑缺陷。此前 `infer_provider_name_for_model` 在关键字回退时会错误匹配未配置的 Provider，导致生产环境特定模型（如 `openai/gpt-oss-120b`）出现 100% 错误率。该修复通过 Cherry-pick 方式合并，解决了路由逻辑的致命问题。
    *   链接: [qhkm/zeptoclaw PR #610](https://github.com/qhkm/zeptoclaw/pull/610)
*   **CI 门禁升级 [待合并]:** PR #611 提议将 `binary-size` 检查从“事后记录”升级为“PR 门禁”，强制限制编译后体积。虽然为适应当前代码现状暂时将阈值放宽至 7.5MB，但标志着项目对构建产物的控制更加严格。
    *   链接: [qhkm/zeptoclaw PR #611](https://github.com/qhkm/zeptoclaw/pull/611)
*   **安全合规 [已落地]:** PR #594 清除了因 advisory DB 更新而产生的 6 个 RUSTSEC 警告，通过升级 `lettre` 和 `diesel` 依赖，恢复了全仓库 CI 的正常运行。
    *   链接: [qhkm/zeptoclaw PR #594](https://github.com/qhkm/zeptoclaw/pull/594)
*   **依赖维护:** 合并了 10+ 个 Dependabot PR，覆盖 Rust 核心库（`tower-http`, `uuid`, `clap`）、工具链（Rust 1.93 -> 1.95）及前端文档组件，技术栈保持最新状态。

## 4. 社区热点
今日讨论焦点集中在**性能与工程指标的权衡**上：

*   **Issue #612 [P2-high]:** 针对二进制体积 drift（漂移）的审计讨论。作者指出自 6.2MB 低水位以来，体积已增长约 800KB，且 PR #611 提议的 7.5MB 阈值远超 7MB 的战略目标。这反映出社区（及维护者）对软件“臃肿化”的警惕，正在寻求收紧门禁的策略。
    *   链接: [qhkm/zeptoclaw Issue #612](https://github.com/qhkm/zeptoclaw/issues/612)
*   **PR #592 [讨论已关闭]:** 关于 Provider 推断逻辑的修复引发了对 NIM-served Photon 实例兼容性的关注，暴露了关键字匹配机制在生产环境中的边界情况处理不足。

## 5. Bug 与稳定性
今日记录并处理了以下稳定性问题，按严重程度排序：

1.  **[Critical - 已修复] Provider 推断逻辑崩溃**
    *   **问题:** 关键字回退机制无视用户配置，强制路由到未配置的 Provider，导致特定模型不可用。
    *   **状态:** 已通过 PR #610 修复并关闭。
    *   链接: [qhkm/zeptoclaw PR #592](https://github.com/qhkm/zeptoclaw/pull/592) (原始讨论)
2.  **[High - 待处理] 二进制体积回归**
    *   **问题:** Issue #612 指出 Darwin-arm64 构建体积极其接近 7MB 红线（当前 6.98MB），存在超标风险。
    *   **状态:** 已提出缓解措施（PR #611 设为 7.5MB），但根本原因（800KB 漂移）待审计。
    *   链接: [qhkm/zeptoclaw Issue #612](https://github.com/qhkm/zeptoclaw/issues/612)

## 6. 功能请求与路线图信号
*   **严格构建约束:** Issue #612 明确发出了“收紧体积门禁”的信号，要求将 7MB 作为硬性指标。这预示着未来可能引入更激进的优化手段（如 feature flags 裁剪、依赖瘦身）。
*   **CI 自动化增强:** PR #611 展示了从“监控”向“阻断”转变的路线图，未来任何导致二进制体积显著增加的 PR 将无法轻易合入。

## 7. 用户反馈摘要
从 Issue 与 PR 描述中提炼的用户/开发者痛点：
*   **路由可靠性:** 在复杂模型 ID 场景下（如 `openai/gpt-oss-120b`），用户极度依赖智能推断，但之前的逻辑缺陷会导致服务不可用，用户期望推断逻辑优先遵守显式配置。
*   **部署成本:** 对二进制体积的关注（Issue #612）暗示用户对资源占用敏感，可能多用于边缘设备或容器化环境，体积增长直接影响部署体验。

## 8. 待处理积压
*   **PR #611 [Review Required]:** 该 PR 目前状态为 Open，是今日唯一的待合并项。它设置了一个临时的 7.5MB 上限。维护者需尽快 Review 并合入，以填补当前 CI 缺失体积检查的空白，随后需根据 Issue #612 制定后续优化计划。
    *   链接: [qhkm/zeptoclaw PR #611](https://github.com/qhkm/zeptoclaw/pull/611)

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-06-02)

**项目地址**：[github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

## 1. 今日速览
EasyClaw 项目今日整体处于**低交互、稳态维护**状态。过去 24 小时内，社区侧未产生新的 Issue 或 Pull Request，互动频率暂为低谷。尽管社区交互静默，项目组依然推送了 **v1.8.23** 版本更新，重点优化了后端 Airflow 重试机制与用户界面的文案说明。这表明项目当前处于“修缮与优化”周期，核心工作集中在提升系统稳定性与用户体验细节上，而非新功能开发。整体来看，项目维护节奏平稳，但社区活跃度有待提升。

## 2. 版本发布
今日发布了 **v1.8.23 (RivonClaw)** 版本，属于功能修补与体验优化版本。

- **更新详情**：
    - **后端逻辑优化**：改进了客服（customer-service）Airflow 的重试处理机制。引入了后端调度时间作为基准，以替代原有时间计算方式，从而提供更精确的重试窗口，减少因时间漂移导致的重复尝试失败。
    - **数据一致性**：保持客服会话重试快照与后端时间对齐，进一步降低了系统在异常流程下的状态不一致风险。
    - **前端/产品体验**：优化了桌面端 MAX 套餐的使用说明文案，解决了用户对高额套餐权益理解的模糊问题。
- **破坏性变更**：无。
- **迁移注意事项**：本次更新主要涉及后端调度逻辑，无需复杂的数据库迁移，建议运维人员关注更新后的 Airflow 任务调度日志，确认重试机制运行符合预期。

**相关链接**：[v1.8.23 Release Notes](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.23)

## 3. 项目进展
今日无合并或关闭的 Pull Request。项目代码库在前端交互层面无显性变更，所有变更均已包含在 v1.8.23 的发布中，主要推进了系统容错能力的提升。

## 4. 社区热点
过去 24 小时内无新开或活跃的 Issues 与 PRs，暂无社区热点讨论。当前社区处于观望或静默期，可能需要维护者通过运营活动（如 Roadmap 讨论、Good First Issue 标记）来激活社区参与度。

## 5. Bug 与稳定性
今日无用户报告的新 Bug 或崩溃问题。

**内部修复稳定性亮点**：
虽然无外部 Bug 报告，但 v1.8.23 版本主动修复了潜在的稳定性隐患：
- **时间漂移风险**：原有重试机制可能因客户端或中间件时间不同步导致重试窗口偏移，新版本通过锁定后端调度时间，显著提升了高并发或网络抖动场景下的服务恢复能力。

## 6. 功能请求与路线图信号
今日无新增功能请求。从 v1.8.23 的更新内容推断，项目近期路线图侧重于**系统鲁棒性**与**商业化体验优化**。针对 MAX 套餐文案的调整，暗示项目正在加强商业化变现环节的用户引导，未来可能会有更多关于付费权益区分的功能更新。

## 7. 用户反馈摘要
今日无直接的 Issue 评论反馈。从 Release Notes 中的“Clarify MAX plan usage copy”可间接推断，此前部分桌面端用户对 MAX 套餐的权益范围或使用限制存在困惑，此次更新回应了这一痛点，有助于提升付费用户的留存与满意度。

## 8. 待处理积压
由于今日无活跃 Issue，暂无具体的“长期未响应”案例可供列举。建议维护者关注以下几点以保持项目健康度：
- 定期清理过时的 Issue。
- 针对今日发布的 v1.8.23，观察后续 48 小时内是否有因时间逻辑调整引发的边界情况反馈。

---
*分析师注：本项目今日核心动态集中在版本发布，社区交互数据为零。建议关注后续版本的实际运行情况及社区对新版重试逻辑的反馈。*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*