# OpenClaw 生态日报 2026-04-21

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-21 02:50 UTC

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

# OpenClaw 项目日报 (2026-04-21)

## 1. 今日速览
OpenClaw 项目今日保持了极高的活跃度，过去24小时内 Issues 与 PRs 更新量均达到 500 条。团队修复力度强劲，共关闭了 161 个 Issue 和 167 个 PR，显示出维护团队正在积极清理积压问题。项目重心目前明显偏向稳定性修复与性能优化，多个关键性回归 Bug 得到了处理。值得注意的是，待合并 PR 数量（333 条）依然处于高位，可能存在代码审核的积压风险。今日无新版本发布，预计正在为下一次更新积累关键修复。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日项目进展主要集中在关键 Bug 修复与性能优化，特别是针对成本计算和特定模型兼容性的修复：

*   **修复成本累积计算严重 Bug**：PR [#69403](https://github.com/openclaw/openclaw/pull/69403)（已合并）修复了会话持久化时成本累积而非快照统计的问题，该问题导致多轮对话中成本被重复计算 1-72 倍，严重影响用户对 Token 消耗的监控。
*   **OpenAI Codex 兼容性修复**：PR [#69336](https://github.com/openclaw/openclaw/pull/69336)（已合并）更新了 OpenAI Codex 的 Base URL，修复了因 OpenAI 服务端移除旧 API 别名导致的 403 错误。
*   **Slack 集成性能大幅优化**：PR [#69317](https://github.com/openclaw/openclaw/pull/69317) 通过延迟加载模块，将 Slack 频道的冷启动时间从 14.1秒 降低至 6.2秒，优化幅度达 56%。
*   **会话内存管理优化**：PR [#69404](https://github.com/openclaw/openclaw/pull/69404) 引入了默认会话维护模式，自动修剪旧会话，修复了生产环境中因会话文件过大导致的网关内存溢出（OOM）问题。
*   **模型回退逻辑改进**：PR [#69365](https://github.com/openclaw/openclaw/pull/69365)（已合并）修复了自动故障转移后模型配置被“锁定”的问题，确保下一轮对话能重试主模型。

## 4. 社区热点
今日社区讨论最热烈的议题集中在跨平台支持与稳定性问题上：

*   **跨平台客户端请求热度不减**：Issue [#75](https://github.com/openclaw/openclaw/issues/75) 依然是社区最关注的议题，Linux 和 Windows 客户端的缺失引发了大量讨论（评论 88 条，点赞 71 次）。用户 @steipete 指出目前仅有 macOS/iOS/Android 客户端，希望尽快补齐 Linux/Windows 支持。
*   **网关稳定性焦虑**：Issue [#48205](https://github.com/openclaw/openclaw/issues/48205) 报告了网关每约 50 分钟无理由重启的问题，引发了用户对服务可用性的担忧，目前该问题已得到维护者关注并关闭，预计已在最新代码中修复。
*   **Azure 模型兼容性回归**：Issue [#65603](https://github.com/openclaw/openclaw/issues/65603) 反映了升级到 2026.4.11 版本后，Azure AI Foundry 模型的工具调用功能失效，多个用户报告了类似问题，阻碍了企业用户的升级步伐。

## 5. Bug 与稳定性
今日报告了多个影响严重的关键 Bug，部分已有修复方案：

*   **[严重] 会话上下文损坏**：Issue [#37834](https://github.com/openclaw/openclaw/issues/37834) 报告长会话中出现工具调用 ID 孤立导致的永久性 400 错误循环。该问题会导致 Agent 陷入死循环，目前状态为 Open，需紧急关注。
*   **[严重] OAuth Token 丢失**：Issue [#52037](https://github.com/openclaw/openclaw/issues/52037) 指出 OpenAI Codex 的 OAuth Token 在刷新后未持久化到磁盘，导致服务重启后认证失效。
*   **[中等] 部署安装受阻**：Issue [#50294](https://github.com/openclaw/openclaw/pull/50294) 报告 `pnpm install` 在克隆私有依赖时因 SSH 密钥验证失败，阻碍了部分开发者的源码部署。
*   **[回归] SSRF 防护误杀**：Issue [#63132](https://github.com/openclaw/openclaw/issues/63132) 指出 v2026.4.7 的安全更新错误地拦截了本地语音转文字服务的请求。
*   **[修复中] Codex 图像循环**：PR [#69551](https://github.com/openclaw/openclaw/pull/69551) 正在修复 OpenAI Codex 模型可能陷入图像工具调用死循环的问题。

## 6. 功能请求与路线图信号
*   **Typecast TTS 支持**：PR [#10356](https://github.com/openclaw/openclaw/pull/10356) 正在添加 Typecast 作为新的 TTS 提供商，支持情感预设和亚洲语言语音优化。该功能有望合并，丰富语音交互生态。
*   **ACP 后端故障转移**：PR [#69542](https://github.com/openclaw/openclaw/pull/69542) 提出了针对 ACP (Agent Communication Protocol) 后端的故障转移机制，增强外部运行时的稳定性。
*   **原生 MCP 支持**：Issue [#34097](https://github.com/openclaw/openclaw/issues/34097) 呼吁原生集成 Model Context Protocol (MCP)，以适应 Claude Desktop 等工具的标准接口，这是未来扩展工具生态的重要方向。

## 7. 用户反馈摘要
*   **模型兼容性痛点**：用户对前沿模型的支持非常敏感，如 Issue [#37623](https://github.com/openclaw/openclaw/issues/37623) 中用户尝试配置 GPT-5.4 遇到运行时错误，反映出配置与运行时支持的脱节。
*   **UI 细节体验**：Issue [#34331](https://github.com/openclaw/openclaw/issues/34331) 关于 TUI 消息重复显示的 Bug 虽然影响范围小，但直接影响开发者调试体验。
*   **安装门槛**：依赖 Git 和 SSH 的安装方式在 Issue [#43419](https://github.com/openclaw/openclaw/issues/43419) 中被指出增加了普通用户的安装难度。

## 8. 待处理积压
*   **Linux/Windows 客户端开发**：Issue [#75](https://github.com/openclaw/openclaw/issues/75) 自 2026 年初创建以来一直是 Help Wanted 标签下的高优先级需求，建议维护者在近期版本规划中明确其路线图。
*   **Stale Issues 清理**：部分标记为 Stale 的 Bug 报告如 [#37757](https://github.com/openclaw/openclaw/issues/37757)（系统提示词拼写错误）和 [#37623](https://github.com/openclaw/openclaw/issues/37623)（GPT-5.4 支持）虽小但影响用户体验，建议纳入下一轮修复计划。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比分析报告 (2026-04-21)

## 1. 生态全景
当前开源 AI 智能体生态正处于从“功能验证”向“工程化落地”转型的关键时期。**稳定性与成本控制**成为头部项目的核心关切，如 OpenClaw 和 NanoBot 均重点修复了会话内存溢出和 Token 计费严重错误。**模型上下文协议 (MCP)** 已成为工具调用的标准接口共识，多项目（NanoBot, OpenClaw, PicoClaw）均在加速集成或修复相关兼容性。同时，生态呈现明显的**分层分化**：头部项目致力于多平台集成与架构重构，而新兴项目则侧重于硬件结合与隐私计算，探索端侧 AI 的边界。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新 | 今日发布 | 健康度/状态评估 | 关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500 | ~500 | 无 | **关注** (PR积压333) | 稳定性修复, 成本Bug, 客户端缺失 |
| **NanoBot** | ~14 (活跃) | 49 | 无 | **健康** (高效迭代) | 性能优化, MCP增强, 内存队列 |
| **Zeroclaw** | 27 | 49 | 无 | **里程碑** (架构重构) | 微内核架构, v0.7.4冲刺, Docker痛点 |
| **Hermes Agent** | 50 | 50 | 无 | **活跃** (PR积压40) | 多模型兼容, 隐私推理, 记忆持久化 |
| **PicoClaw** | 15 | 115 | Nightly | **风险** (PR积压107) | 架构重构, 鉴权失效, 回归问题多 |
| **NanoClaw** | 0 (静默) | 29 | 无 | **开发中** (功能冲刺) | 端侧硬件, Nostr/Signal, 隐私保护 |
| **NullClaw** | 低 | 3 | 无 | **稳固** (边缘计算) | CPU空转修复, K8s兼容, ARM架构 |
| **IronClaw** | 50 | 50 | 无 | **攻坚** (Bug Bash) | Engine V2, 多租户, 集成故障 |
| **LobsterAI** | 低 | 36 | 无 | **升级** (基建现代化) | React 19, 数据备份, 企业集成 |
| **TinyClaw** | 0 | 1 | 无 | **静默** (维护期) | 心跳修复 |
| **Moltis** | 9 (清零) | 12 | **v20260420.02** | **极佳** (极速响应) | 自我进化, Podman, 技能库扩展 |
| **CoPaw** | 41 | 50 | v1.1.3-beta.1 | **活跃** (品牌迁移) | 插件系统, 升级Bug, SIP语音 |
| **EasyClaw** | 0 | 0 | v1.8.0 | **交付** (低交互) | macOS兼容, 签名问题 |
| **ZeptoClaw** | 0 | 0 | 无 | **停滞** | 无活动 |

> *注：健康度评估基于 Issue 处理速度、PR 积压情况及版本发布频率。*

## 3. OpenClaw 在生态中的定位

*   **核心定位**：生态内的**企业级稳定性标杆**与**功能参照系**。作为核心参照项目，其动向直接反映了行业通用痛点。
*   **优势**：
    *   **成本控制精细度**：今日修复的“成本累积计算 Bug (1-72倍误差)”显示了其在 Token 计费监控上的深厚积累，这对企业用户至关重要。
    *   **稳定性优先策略**：集中修复网关 OOM 和会话上下文损坏，表明其已率先解决了阻碍生产环境部署的关键阻碍。
*   **劣势与挑战**：
    *   **审核瓶颈**：待合并 PR 数量高达 333 条，远超同类（PicoClaw 107, Hermes 40），代码审核积压严重，可能导致功能交付延迟。
    *   **跨平台短板**：社区呼声极高的 Linux/Windows 客户端缺失（Issue #75），相比其他项目（如 NanoClaw 支持嵌入式，Moltis 支持 Podman）在终端覆盖上存在短板。

## 4. 共同关注的技术方向

1.  **会话内存与上下文管理**
    *   **涉及项目**：OpenClaw, NanoBot, IronClaw, Hermes。
    *   **具体诉求**：OpenClaw 修复了会话 OOM 问题；NanoBot 引入有界队列防止内存无限增长；IronClaw 报告了上下文窗口溢出问题。这表明**长对话下的资源管理**是当前工程化的最大痛点。

2.  **模型上下文协议 (MCP) 标准化**
    *   **涉及项目**：OpenClaw, NanoBot, PicoClaw, Zeroclaw。
    *   **具体诉求**：OpenClaw 呼吁原生 MCP 支持；NanoBot 和 PicoClaw 正在集成 MCP 以扩展工具生态。MCP 正成为连接 Agent 与外部工具的“USB接口”。

3.  **多模型故障转移与路由**
    *   **涉及项目**：OpenClaw, Moltis, Hermes。
    *   **具体诉求**：OpenClaw 修复了模型回退逻辑锁定问题；Moltis 修复了 Fireworks Kimi 路由错误；Hermes 提出外部记忆支持以突破模型限制。用户需要**高可用的模型网关**，而非单一模型绑定。

## 5. 差异化定位分析

*   **OpenClaw vs. Hermes Agent**：
    *   OpenClaw 侧重**稳定性与监控**（修复计费、网关），适合对 SLA 要求高的生产环境。
    *   Hermes Agent 侧重**隐私与异构计算**（NEAR AI + Phala, 20+ Provider 支持），适合对数据主权和模型多样性有要求的开发者。

*   **OpenClaw vs. Moltis**：
    *   Moltis 走**自动化与自我进化**路线（自我改进 Agent 循环），更具实验性和前瞻性。
    *   OpenClaw 则更加**务实**，专注于解决现有架构下的性能与 Bug 问题。

*   **NanoClaw & NullClaw (细分赛道)**：
    *   这两个项目专注于**边缘计算与硬件结合**（如 T-Watch S3, 树莓派），填补了 OpenClaw 等大型项目在离线、端侧场景的空白。

## 6. 社区热度与成熟度

*   **快速迭代期**：**PicoClaw, CoPaw**。PR 提交量巨大，版本更新快，但伴随大量回归 Bug（如 PicoClaw 的鉴权失效），适合尝鲜用户，生产环境需谨慎。
*   **架构重构期**：**Zeroclaw, IronClaw, LobsterAI**。正进行微内核或前端架构升级，短期内可能有震荡，但长期利好。
*   **质量巩固期**：**OpenClaw, NanoBot**。活跃度高但重心在修 Bug 和性能优化，稳定性优于功能迭代速度，适合企业级部署。
*   **前沿探索期**：**NanoClaw, Moltis**。探索穿戴设备集成或自我进化机制，功能独特但社区规模相对较小。

## 7. 值得关注的趋势信号

1.  **从“模型至上”到“上下文至上”**：OpenClaw 和 IronClaw 的 Issue 反映出，随着模型能力趋同，**上下文管理**成为了新的瓶颈。如何高效修剪历史、防止 OOM、突破窗口限制，是 Agent 长期记忆的关键。
2.  **边缘侧 AI 的崛起**：NanoClaw (穿戴设备) 和 NullClaw (树莓派) 的动态显示，Agent 正在脱离 PC/手机，向**物联网终端**渗透。这对软件架构提出了无 GUI、低功耗、离线运行的新要求。
3.  **多租户与权限隔离**：LobsterAI 和 IronClaw 都在近期引入了多租户或数据隔离机制。这标志着开源 Agent 项目正在从“个人玩具”向**团队协作工具**演进，企业级权限模型将成为标配。
4.  **成本监控的精细化**：OpenClaw 修复了高达 72 倍的成本计算误差，这给所有开发者敲响了警钟——在多轮对话和工具调用场景下，**Token 消耗的透明度与准确性**直接决定了用户信任度。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-21)

## 1. 今日速览
NanoBot 项目今日呈现出极高的维护活跃度与迭代速度，过去 24 小时内 PR 更新量高达 49 条，其中 31 条已合并或关闭，显示出项目正处于密集的代码优化与功能完善阶段。Issue 处理效率显著，关闭了 8 个问题，新增了 6 个讨论，社区反馈响应及时。整体来看，项目正从功能扩展向性能优化（内存、队列、缓存）与稳定性增强（错误重试、Shell 安全）方向深耕，代码健康度稳步提升。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日合并/关闭了多项关键 PR，显著提升了系统的健壮性与性能：

*   **性能优化与架构重构**：合并了 PR [#3158](HKUDS/nanobot PR #3158) 及其系列拆分 PR（[#3180](HKUDS/nanobot PR #3180), [#3181](HKUDS/nanobot PR #3181), [#3182](HKUDS/nanobot PR #3182), [#3183](HKUDS/nanobot PR #3183), [#3184](HKUDS/nanobot PR #3184), [#3204](HKUDS/nanobot PR #3204)）。这些更新引入了有界 MessageBus 队列以防止内存无限增长，优化了历史记录 I/O 与工具模式缓存，并增加了性能分析基础设施，解决了 Agent 响应速度与资源消耗的痛点。
*   **MCP 生态增强**：合并了 PR [#2416](HKUDS/nanobot PR #2416) 支持 MCP 工具返回图片内容；PR [#2424](HKUDS/nanobot PR #2424) 允许通过 `allowedChats` 限定 MCP 服务器的生效范围；PR [#2523](HKUDS/nanobot PR #2523) 修复了 MCP 任务被错误委派给不具备能力的子 Agent 的问题。
*   **稳定性与容错**：PR [#2417](HKUDS/nanobot PR #2417) 增加了模型故障自动切换支持；PR [#3240](HKUDS/nanobot PR #3240) 加固了 Shell 命令保护以防绕过；PR [#3297](HKUDS/nanobot PR #3297) 修复了 Anthropic 模型因历史消息结尾格式错误导致的崩溃问题。

## 4. 社区热点
今日讨论最活跃的话题集中在错误处理与渠道支持上：

*   **Issue [#3143](HKUDS/nanobot Issue #3143)** (9 条评论)：用户反馈高频出现的 LLM 错误代码 1214（消息参数非法），涉及 Token 整合与消息分块逻辑，该问题已被关闭，表明维护者已定位并处理了该接口兼容性问题。
*   **Issue [#3324](HKUDS/nanobot Issue #3324)** (2 条评论，标记为 `good first issue`)：关于 Windows 平台集成 `chrome-devtools-mcp` 时出现的 `WinError 193` 错误。这是一个典型的跨平台兼容性问题，社区正在寻找修复方案。
*   **Issue [#2389](HKUDS/nanobot Issue #2389)** (3 条评论)：用户请求将 OpenWebUI 作为官方支持渠道，反映了用户对更多前端 UI 接入的强烈需求。

## 5. Bug 与稳定性
今日报告的新增 Bug 与回归问题如下：

*   **严重 (新)**：Issue [#3328](HKUDS/nanobot Issue #3328) 报告 Deepseek 模型调用时出现 "failed to deserialize" 错误，导致 Telegram 渠道无法使用。目前尚未有修复 PR。
*   **中等 (新)**：Issue [#3324](HKUDS/nanobot Issue #3324) 报告 Windows 下 MCP 服务器连接失败（WinError 193），影响 Windows 用户的 MCP 集成体验。
*   **已修复**：Issue [#3073](HKUDS/nanobot Issue #3073) 报告的 Agent 无限循环读取 `history.jsonl` 问题已随今日的性能优化 PR 一并解决。Issue [#3319](HKUDS/nanobot Issue #3319) 报告的 Cron 任务泄露工具提示问题已关闭。

## 6. 功能请求与路线图信号
社区提出了多项具有建设性的功能请求，部分已有对应实现或 PR：

*   **隐私保护**：Issue [#3341](HKUDS/nanobot Issue #3341) 建议在发送给 LLM 前增加 PII（个人身份信息）脱敏层。这与正在 Open 状态的 PR [#2414](HKUDS/nanobot PR #2414)（添加 Tirith 安全扫描）方向一致，预计安全与隐私将是下个版本的重点。
*   **人工接管**：Issue [#3322](HKUDS/nanobot Issue #3322) 请求支持暂停 Bot 以便人工介入对话，这是客服场景的刚需。
*   **静默重试**：Issue [#3246](HKUDS/nanobot Issue #3246) 提出的静默重试模式已关闭，推测相关优化已通过代码调整实现。

## 7. 用户反馈摘要
从 Issue 评论中提炼出以下用户痛点：

*   **错误干扰**：用户对错误重试时发送多条“嘈杂”的消息表示不满（Issue #3246），希望有更安静的错误恢复机制。
*   **上下文丢失**：用户指出执行 `/stop` 指令会导致当前会话上下文丢失，影响交互连续性（Issue #2966 已关闭，可能已修复）。
*   **Windows 兼容性**：Windows 用户在进行 MCP 高级集成时频频遇到路径和执行权限问题（Issue #3324），表明项目在跨平台兼容性上仍有提升空间。

## 8. 待处理积压
以下重要 Issue 长期未获响应或仍待解决，建议维护者关注：

*   **Issue [#2389](HKUDS/nanobot Issue #2389)**：OpenWebUI 渠道支持请求，自 3 月底开启，尚无官方回应。鉴于 OpenWebUI 在开源社区的流行度，建议纳入路线图。
*   **Issue [#2921](HKUDS/nanobot Issue #2921)**：Microsoft Teams 频道的重启通知配置已暴露但未实现，属于功能半成品状态，影响企业用户的使用体验。
*   **PR [#2414](HKUDS/nanobot PR #2414)**：关于命令安全扫描的大型 PR 自 3 月下旬开启，尚未合并，涉及核心安全逻辑，需尽快 Review 以防积压。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-04-21)

## 1. 今日速览
Zeroclaw 项目今日维持高热度开发状态，Issues 更新达 27 条，PR 更新达 49 条，显示社区与核心团队协作极为活跃。**架构演进迎来里程碑**，备受关注的 RFC #5574（微内核架构过渡）已正式关闭并被接受，确立了 v0.7.0 至 v1.0.0 的发展路线。项目当前重心聚焦于 **v0.7.4 版本的里程碑冲刺**，大量修复 PR（如 Gateway 路径工具注册、Shell 安全守卫）成功合并，显著提升了系统稳定性。此外，社区对部署便捷性（Docker 镜像）和底层架构（Provider 重构、Postgres 后端）的讨论与贡献十分热烈。

## 2. 版本发布
- **无新版本发布**。项目当前正处于 v0.7.4 的密集开发与修复阶段，未见正式版或补丁版发布。

## 3. 项目进展
今日项目在架构规划、稳定性修复和 CI 治理方面取得实质性突破：

- **架构里程碑**：Issue #5574 **[RFC: Intentional Architecture — ZeroClaw Microkernel Transition]** 已关闭并标记为 `accepted`。这标志着项目将正式从被动响应式代码库转向基于意图构建的微内核架构，为 v1.0.0 奠定基础。
- **关键功能修复**：
    - PR #5774 合并，修复了 Gateway 路径下 Skill 定义工具未被注册导致 "Unknown tool" 错误的严重问题（关联 Issue #5850 已关闭）。
    - PR #5773 合并，修复了 Shell 执行的安全守卫绕过漏洞，加强了命令白名单校验。
    - Issue #5816 关闭，解决了 Cron 任务记忆指数级堆积导致上下文溢出的问题。
- **CI 与发布管道**：
    - Issue #5811 关闭，修复了微内核拆分后导致根 crate 无法发布到 crates.io 的问题。
    - Issue #5915 关闭，清理了 5 个自动化混乱的 CI workflows。
    - Issue #5872 关闭，修复了 CI 中未固定的 Action 引用，为 Node.js 20 弃用做准备。
- **新功能合入**：
    - PR #5954 合并，针对 ACP 模式降低了默认日志级别至 WARN，解决了客户端解析错误问题。

## 4. 社区热点
- **[Issue #3642]** [Feature]: Provide a "full" docker image
  - **热度**：👍 3 | 评论：7
  - **分析**：用户强烈希望提供预编译所有功能（如 WhatsApp）的“完整版”Docker 镜像，以降低非技术用户的部署门槛。这是目前用户痛点最集中的反馈之一。
- **[Issue #5574]** RFC: Intentional Architecture — ZeroClaw Microkernel Transition
  - **热度**：评论：9
  - **分析**：作为架构转型的核心 RFC，其关闭标志着社区对项目未来方向达成了共识，讨论重点已从“是否做”转向“如何落地”。
- **[Issue #5849]** [Feature]: Dream Mode — Periodic Memory Consolidation
  - **热度**：评论：4
  - **分析**：社区正在探讨引入“梦境模式”进行记忆整理与反思学习，这显示了项目在 AI 原生特性上的探索深度。

## 5. Bug 与稳定性
今日报告并处理了多个严重级别（S1）的 Bug：

- **[S1 - Workflow Blocked]** [Issue #5815] Provider ignores llamacpp object
  - **描述**：配置文件中的 llamacpp 对象被忽略，导致默认值强制生效。自 Schema v2 后出现，目前尚无修复 PR。
  - **状态**：Open | 链接: [Issue #5815](https://github.com/zeroclaw-labs/zeroclaw/issue/5815)
- **[S1 - Workflow Blocked]** [Issue #5941] No tool call found for function call output
  - **描述**：用户发送消息时遇到工具调用 ID 无法匹配的错误，导致 Provider 请求失败。
  - **状态**：Open | 链接: [Issue #5941](https://github.com/zeroclaw-labs/zeroclaw/issue/5941)
- **[S1 - Workflow Blocked]** [Issue #5949] ACP mode does not follow prompt spec
  - **描述**：ACP 模式在 JSON 响应中错误地在顶层搜索 "prompt"，导致 agentic.nvim 编辑器报错，功能不可用。
  - **状态**：Open | 链接: [Issue #5949](https://github.com/zeroclaw-labs/zeroclaw/issue/5949)
- **[已修复]** [Issue #5850] Skill-defined tools return "Unknown tool"
  - **修复**：由 PR #5774 修复并合并。
  - **状态**：Closed

## 6. 功能请求与路线图信号
- **Postgres 存储后端**：[PR #5946] 提出添加可选的 Postgres 内存后端，目前已实现连接池和基本功能，表明项目正试图摆脱单一 SQLite 依赖，向生产环境高可用架构迈进。
- **Schema v3 迁移**：[Issue #5947] 提议将 Schema 版本升级至 v3，并批量处理破坏性字段变更，这将是下个大版本更新的关键前置任务。
- **Provider 架构重构**：[Issue #5937] 建议统一 Provider 架构和 Reqwest 客户端管理，解决当前配置碎片化和代码重复问题。
- **语音全双工支持**：[PR #5942] 引入了 VAD trait 和 VoiceEvent 协议，为 Gateway 的语音全双工通信铺平道路。
- **里程碑规划**：Issue #5877 (v0.7.4) 和 #5878 (v0.7.5) 正在紧锣密鼓地跟踪进度，v0.7.5 主题定为“发布自动化”。

## 7. 用户反馈摘要
- **部署痛点**：多极用户反馈默认 Docker 镜像缺失部分功能（如 WhatsApp），导致需要手动编译，增加了上手难度。
- **文档缺失**：Issue #5847 反馈 `gateway.web_dist_dir` 配置项缺乏文档说明，导致 Web Dashboard 无法加载，用户不知如何设置环境变量。
- **嵌入式设备兼容性**：Issue #4842 反映在树莓派（aarch64）上更新命令会下载错误架构的二进制文件，导致 "Exec format error"，该问题已存在一段时间仍未解决。

## 8. 待处理积压
- **[长期未解决]** [Issue #4842] update command downloads wrong architecture binary on aarch64
  - **描述**：ARM64 架构更新失败问题，自 3 月底报告至今未获实质性修复，严重影响树莓派等边缘设备用户体验。
  - **链接**：[Issue #4842](https://github.com/zeroclaw-labs/zeroclaw/issue/4842)
- **[长期未解决]** [Issue #4857] cannot add cron from the UI
  - **描述**：UI 添加定时任务被安全策略拦截，自 3 月底报告，虽被标记为 S2，但影响易用性。
  - **链接**：[Issue #4857](https://github.com/zeroclaw-labs/zeroclaw/issue/4857)
- **[PR 待处理]** [PR #5099] fix(channel): whatsapp-web feature flag wiring
  - **描述**：修复 WhatsApp Web 功能标志错误的 PR，自 3 月底开启，状态仍为 `needs-author-action`，可能导致用户编译困惑。
  - **链接**：[PR #5099](https://github.com/zeroclaw-labs/zeroclaw/pull/5099)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-04-21)

## 1. 今日速览
Hermes Agent 今日保持高活跃度，社区交互频繁，共产生 **50 条 Issue 更新**与 **50 条 PR 更新**。尽管无新版本发布，但项目处于快速迭代期，核心关注点集中在**多模型提供商兼容性**（如 Gemini, Vertex AI, Copilot）与**多平台适配**（如 Telegram, Feishu, Signal）。值得注意的是，PR 待合并数量高达 40 条，显示社区贡献热情高涨，但也面临一定的 Code Review 积压压力。今日修复了若干关键稳定性问题，同时在私有化推理和外部记忆支持方面有重要进展。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 10 个 PR 被合并或关闭，主要推进了以下修复与功能：

*   **提供商兼容性修复**：PR #11386 修复了运行时模型切换时丢失 Provider 特定 Headers 的问题，这对于 Kimi、Copilot 等需要特定认证头的后端至关重要。
*   **平台集成优化**：PR #10167 解决了 Discord `/skill` 命令同步失败 (HTTP 400) 的问题，修复了技能列表过长导致的网关启动故障。
*   **认证与安全增强**：PR #12201 提交了 NEAR AI + Phala AI 私有推理支持，引入了 Intel TDX 远程认证验证，显著增强了企业级隐私推理能力。
*   **新增平台支持**：PR #12940 新增了对腾讯**元宝**平台的支持，完善了国内企业 IM 生态的适配。

## 4. 社区热点
今日讨论最活跃的内容集中在模型提供商支持与系统架构优化：

*   **[Issue #6323] 外部记忆支持需求**：该 Issue 获得 **21 个 👍**，社区强烈呼吁引入 `mempalace` 模块以突破上下文窗口限制，实现跨会话的持久化记忆。这反映了用户对 Agent 长期记忆能力的迫切需求。
    *   链接: [NousResearch/hermes-agent Issue #6323](https://github.com/NousResearch/hermes-agent/issues/6323)
*   **[Issue #7893] Gemini Provider 认证冲突**：评论数达 17 条，讨论了在使用原生 Gemini Provider 时遇到的 "Multiple authentication credentials" 错误（HTTP 400），涉及 API Key 与 Vertex AI 凭据的冲突问题。
    *   链接: [NousResearch/hermes-agent Issue #7893](https://github.com/NousResearch/hermes-agent/issues/7893)
*   **[Issue #13265] Skills 系统架构缺陷**：用户指出 Skills 系统缺乏内容有效性校验与质量控制机制，可能导致低价值经验固化，引发了对 Agent“新陈代谢”能力的深层讨论。
    *   链接: [NousResearch/hermes-agent Issue #13265](https://github.com/NousResearch/hermes-agent/issues/13265)

## 5. Bug 与稳定性
今日报告的关键 Bug 主要涉及部署环境与特定后端交互：

*   **严重: 虚拟环境迁移导致命令丢失**
    *   [Issue #9792](https://github.com/NousResearch/hermes-agent/issues/9792): PR #8226 合并后，`hermes` 命令在容器外部交互式 Shell 中不可用，影响容器化部署的调试与运维。目前已有相关修复 PR #12802 正在处理跨驱动器路径问题。
*   **中等: OAuth 令牌刷新竞态条件**
    *   [Issue #10147](https://github.com/NousResearch/hermes-agent/issues/10147): 多进程并发刷新 Nous OAuth Token 导致会话被撤销，影响高并发场景下的登录稳定性。
*   **中等: Llama.cpp JSON 解析失败**
    *   [Issue #12068](https://github.com/NousResearch/hermes-agent/issues/12068): 在使用 llama.cpp 作为自定义端点时，Memory 保存工具因字符串转义问题导致 JSON 解析失败 (HTTP 500)。
*   **修复: Windows WhatsApp 桥接进程残留**
    *   PR #13270 修复了 Windows 断开连接时未能杀死子进程树的问题，提升了 Windows 平台的稳定性。

## 6. 功能请求与路线图信号
从 Pending PR 和活跃 Issue 中可窥见未来版本方向：

*   **Web 搜索集成**：PR #13268 提议将 Gemini 作为网页搜索后端，利用其 `google_search` grounding 能力，减少对第三方搜索 API 的依赖。
*   **模型能力扩展**：PR #13271 提交了 ComfyUI 技能，允许通过 CLI 编排 Stable Diffusion/Flux 工作流，表明项目正向“多模态创作工具链”方向扩展。
*   **提供商深度适配**：Issue #12639 呼吁原生支持 Google Vertex AI 以绕过 OpenRouter 的限速与计费问题，反映出用户对成本控制和原生 API 稳定性的强烈诉求。

## 7. 用户反馈摘要
*   **痛点**：用户在配置复杂提供商（如 Vertex AI, Copilot Enterprise）时经常遇到认证、端点适配和上下文窗口限制问题（Issue #7731, #12639）。
*   **场景**：大量用户在 Docker 容器和 Nix 环境中部署，相关路径处理和环境变量配置问题频发（Issue #9782, #12188）。
*   **满意度**：社区对新增元宝平台和私有化推理支持反响积极，认为这拓宽了 Hermes 在企业级场景的应用边界。

## 8. 待处理积压
*   **高优先级**: Issue #6323 的外部记忆支持需求热度居高不下，建议核心团队尽快纳入路线图。
*   **长期未决**: Issue #7731 关于 Copilot Provider 硬编码上下文窗口的问题尚未解决，影响企业版用户使用特定大上下文模型。
*   **PR 积压**: 当前有 40 个 PR 处于 Open 状态，其中包括重要的 Hook 扩展点特性 (PR #11747)，建议社区关注 Review 进度。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-21)

## 1. 今日速览
PicoClaw 项目今日保持高活跃度，共更新 115 个 PR（其中待合并 107 个，已合并/关闭 8 个），并发布了最新的 Nightly 构建版本。社区反馈热烈，过去 24 小时内产生了 15 条 Issue 更新，主要集中于 v0.2.6 版本引入的严重回归问题（如 API Key 丢失、WebUI 异常）。尽管代码提交频繁，但较高的 PR 积压量（107 个待合并）显示出项目正处于功能密集开发与架构重构期，维护者审核压力较大。

## 2. 版本发布
- **nightly: Nightly Build (v0.2.6-nightly.20260421.6421f146)**
  - **类型**: 自动化构建版本
  - **注意事项**: 官方提示此版本可能不稳定，建议谨慎用于生产环境。
  - **变更范围**: 对比 v0.2.6，包含最新的 main 分支代码，涉及大量重构与新功能尝试。
  - **链接**: [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

## 3. 项目进展
今日共有 8 个 PR 完成合并或关闭，重点修复了 Provider 兼容性问题及文档更新：
- **[CLOSED] PR #2343**: 修复 Antigravity Provider 支持 Gemini 3.1 模型的问题，将客户端版本升级至 1.25.0，解决了新模型不可用的阻断性故障。
- **[CLOSED] PR #2604**: 更新了文档中的微信二维码，属于常规维护。
- **Issue #2597 & #2584 关闭**: 修复了模型标识符大写导致网关启动失败的问题以及 DeepSeek Provider 鉴权失败的问题，提升了系统容错性。

项目整体正在向更健壮的 Agent 架构演进，多个大型重构 PR（如 Agent Looper 重构 #2585）正在推进中，尚未合并。

## 4. 社区热点
- **[OPEN] Issue #2578**: **OpenAI Compatible Provider 鉴权头丢失**
  - **热度**: 11 条评论
  - **分析**: 这是目前社区最关注的阻断性问题。用户反馈在 v0.2.6 版本中，`openai_compat` 提供者发送请求时静默丢弃了 `Authorization` header，导致所有依赖此配置的 HTTP 模型均无法工作。用户已通过抓包确认问题，急需官方修复。
  - **链接**: [sipeed/picoclaw Issue #2578](https://github.com/sipeed/picoclaw/issues/2578)

- **[OPEN] PR #2535**: **MCP 命令集成**
  - **热度**: 讨论数最多
  - **分析**: 该 PR 旨在增加 MCP 斜杠命令，允许用户直接从聊天频道查看 MCP 服务器状态和工具详情，极大地提升了 Agent 的可观测性与交互体验。

## 5. Bug 与稳定性
今日报告了多个严重级别 Bug，主要集中在配置解析与升级兼容性：

1.  **[严重] 配置静默失效**: Issue #2578 报告 API Key 在 v0.2.6 中被静默丢弃，影响范围极广。
2.  **[严重] 升级后 WebUI 不可用**: Issue #2598 报告从 v0.2.4 升级至 v0.2.6 后 WebUI 无法加载，属于升级路径中的回归问题。
3.  **[严重] OAuth 鉴权失败**: Issue #2602 报告 OpenAI 和 Antigravity 的 OAuth 授权失败，影响特定平台 用户。
4.  **[中等] 会话历史丢失**: Issue #2310 反映 WebUI 历史记录仅保存最后一两条，影响用户体验追溯。
5.  **[已修复] 模型标识符大小写敏感**: Issue #2597 曾导致网关启动失败，现已被关闭，推测已在 Nightly 中修复。

## 6. 功能请求与路线图信号
- **多用户与安全加固**: PR #2313 提出了多用户支持与 Agent Shield 安全套件集成，显示出项目正试图从个人工具向多租户/团队协作平台转型。
- **Email Channel 原生支持**: Issue #2421 请求增加 Email 作为原生 Channel，针对企业级与科学计算场景，目前已被标记为 Open，维护者未明确拒绝，可能纳入规划。
- **HTTP 消息入口**: PR #1657 提议增加 `POST /pico/message` 端点，允许外部系统触发 Agent，预示着 PicoClaw 正在增强其作为 AI 中台的 API 能力。

## 7. 用户反馈摘要
- **痛点**: v0.2.6 版本的稳定性备受质疑，尤其是配置加载逻辑的变更导致鉴权频频失败。用户对 "silent failure"（静默失败）表示不满，希望增加更明确的错误提示。
- **场景**: 用户广泛使用 PicoClaw 作为统一网关接入各种异构模型（如 DeepSeek, OpenAI 兼容接口），配置文件的微小变动对下游影响巨大。
- **评价**: 移动端 体验仍有瑕疵，如语言切换不全 (Issue #2367) 和模型配置同步问题 (Issue #2368)。

## 8. 待处理积压
当前项目 **待合并 PR 数量高达 107 个**，存在较严重的积压现象。以下重要 PR 需维护者重点关注：
- **PR #2585**: Agent Looper 核心重构，涉及 1500 行代码拆分，是架构优化的关键。
- **PR #2313**: 多用户与安全加固，属于重大功能性变更。
- **PR #2163**: 修复 Google Antigravity Token 刷新问题，解决长期存在的 OAuth 痛点。
- **Issue #1757**: 长期未解决的 Cron 任务频道错误问题，需要关注其与新版 Agent 的兼容性。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-21)

## 1. 今日速览
NanoClaw 今日呈现高强度的功能迭代态势，虽然无新版本发布且 Issue 趋于静默，但代码库迎来了 **29 条 PR 更新**，其中 7 条已合并，整体处于“编码冲刺”阶段。核心进展集中在 **通信渠道扩展**（Signal、Nostr、Matrix）与 **隐私安全增强**（Proton Suite、本地 Whisper），显示出项目正向“多渠道、强隐私、端侧协同”的 AI Agent 平台演进。社区贡献活跃，尤其是对本地模型（Ollama）和新硬件（T-Watch S3）的支持，标志着项目生态边界的进一步拓宽。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 7 个 PR 成功合并/关闭，显著增强了系统的兼容性与稳定性：

*   **模型后端解耦与支持扩展**：
    *   [PR #1859](qwibitai/nanoclaw PR #1859) 成功合并，新增 `/add-ollama-provider` 技能，允许用户将 Agent 路由指向本地 Ollama 实例，降低了对 Anthropic API 的强依赖，符合本地化部署趋势。
    *   [PR #1843](qwibitai/nanoclaw PR #1843) 已关闭，引入了通过 JSON-RPC 调用的 `codex` provider，提供了具有 Claude-SDK 功能对等的 Agent 循环实现，扩展了规划器选择。

*   **架构重构与修复**：
    *   [PR #1877](qwibitai/nanoclaw PR #1877) 重构了路由层的交互策略，新增了未知通道的注册流程，为多通道管理打下基础。
    *   [PR #1864](qwibitai/nanoclaw PR #1864) 修复了关键依赖问题，将 OpenCode SDK/CLI 锁定在 1.4.17 版本，解决了 1.14.x 版本导致的 API 破坏性变更。
    *   [PR #1873](qwibitai/nanoclaw PR #1873) 完善了 `.gitignore`，防止敏感环境变量文件被误提交。

## 4. 社区热点
尽管 Issues 板块无新增讨论，但 PR 区展示了社区对 **隐私通信** 和 **硬件集成** 的极高关注度：

*   **极致隐私的 Nostr DM 实现**：[PR #1882](qwibitai/nanoclaw PR #1882) 提出了基于 NIP-17 的端到端加密私信方案，亮点在于利用 Linux 内核密钥环隔离签名守护进程，确保私钥永不进入容器环境。这反映了用户对 AI Agent 权限隔离的严苛要求。
*   **可穿戴设备作为 AI 终端**：[PR #1881](qwibitai/nanoclaw PR #1881) 提出了将 $45 美元的 LilyGo T-Watch S3 变为腕戴式语音终端的方案，支持 OTA 固件更新与语音备忘录。这表明社区正在探索 AI Agent 脱离手机/PC 的独立硬件形态。
*   **多渠道适配方案竞争**：Signal 适配器出现了两个活跃方案，[PR #1878](qwibitai/nanoclaw PR #1878)（原生 signal-cli JSON-RPC）与 [PR #1875](qwibitai/nanoclaw PR #1875)（signal-sdk 封装）。前者追求零依赖，后者注重文档完整性，社区正在权衡最佳的集成路径。

## 5. Bug 与稳定性
今日未见严重崩溃报告，主要修复集中在兼容性与环境配置：

*   **依赖兼容性修复**：[PR #1864](qwibitai/nanoclaw PR #1864) 指出 `opencode-ai@latest` 升级导致 Session API 重大变更（UUID 改为 `ses_` 前缀），该 PR 已合并，修复了潜在的运行时崩溃。
*   **数据库规范化**：[PR #1845](qwibitai/nanoclaw PR #1845)（Open）提出将自动生成的时间戳标准化为 ISO 8601 格式，旨在解决 V2 版本中可能存在的时序数据处理不一致问题。
*   **用户体验优化**：[PR #1817](qwibitai/nanoclaw PR #1817)（Open）针对挂载路径错误提示进行了优化，引导用户检查父目录，降低了配置错误的排查难度。

## 6. 功能请求与路线图信号
从待合并的 PR 中可以清晰识别出 V2 版本的路线图信号：

1.  **语音交互本地化**：[PR #1879](qwibitai/nanoclaw PR #1879) 与 [PR #1876](qwibitai/nanoclaw PR #1876) 均聚焦于本地 Whisper 转写，显示项目正致力于降低语音功能的云端成本与延迟。
2.  **隐私工具套件**：[PR #1880](qwibitai/nanoclaw PR #1880) 整合了 Proton 全家桶（Mail, Pass, Drive 等），尽管 Calendar 需通过第三方变通实现，但显示出打造“隐私优先 AI 助手”的决心。
3.  **智能家居与基础设施**：长期运行的 [PR #1327](qwibitai/nanoclaw PR #1327) (Home Assistant) 和 [PR #1260](qwibitai/nanoclaw PR #1260) (Tailscale) 显示项目计划深度介入物联网与私有网络管理。

## 7. 用户反馈摘要
由于今日无 Issue 动态，反馈主要隐含在 PR 提交者的动机中：
*   **痛点**：用户对现有云端 API 的成本和延迟敏感，因此推动了 Ollama 和本地 Whisper 的集成。
*   **场景**：加密通信是硬需求，特别是 Nostr 和 Signal 的原生集成，表明技术型用户群体希望通过 AI Agent 管理私密通信。
*   **不满**：[PR #1880](qwibitai/nanoclaw PR #1880) 中提到 Proton Drive 被 SRP 协议阻断，反映了主流云服务对非官方客户端的限制仍是集成痛点。

## 8. 待处理积压
以下长期未合并的 PR 可能需要维护者关注以推进进度：

*   **智能家居集成停滞**：[PR #1327](qwibitai/nanoclaw PR #1327) (Home Assistant) 自 3 月 22 日创建以来仍未合并，需确认是否符合 V2 架构标准。
*   **网络基础设施**：[PR #1260](qwibitai/nanoclaw PR #1260) (Tailscale) 和 [PR #1188](qwibitai/nanoclaw PR #1188) (UnraidClaw) 均处于 Open 状态超过一个月，涉及底层网络与存储管理，可能是测试复杂度导致了延迟。
*   **时间戳标准化**：[PR #1845](qwibitai/nanoclaw PR #1845) 涉及数据库底层格式，建议尽快审查以防后续迁移成本增加。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 (2026-04-21)

## 1. 今日速览
NullClaw 项目今日整体活跃度中等偏高，虽然没有新的版本发布或代码合并，但社区提交了 3 个高质量的待合并 PR，显示出开发者在解决底层稳定性和硬件兼容性方面的积极投入。项目当前的重心明显偏向于修复关键 Bug 和提升系统健壮性，特别是针对边缘计算设备（如 Raspberry Pi）和容器化环境（K8s）的兼容性修补。Issue #851 报告了一个严重的 CPU 空转问题，随后迅速有 PR #853 提出修复方案，体现了社区快速响应的能力。整体来看，项目正处于密集的除虫与稳固阶段。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
本日无合并或关闭的 PR。目前的开发推进主要集中在以下待合并的修复分支：
-   **Gateway 稳定性修复：** 社区成员针对 Gateway 进程 CPU 占用过高的问题提交了修复 PR，虽然尚未合并，但已定位问题并提出了解决方案，旨在防止 transient failures 导致的死循环。
-   **网络 I/O 优化：** 针对 Zig 0.16 迁移后出现的网络挂起问题，有开发者提交了底层 POSIX 读写接口的绕过修复，试图解决 K8s 环境下的存活探针失败问题。
-   **嵌入式硬件支持：** 针对无 RTC 硬件的旧设备，有 PR 提出强化 SysVinit 脚本，扩展了项目在 ARMv5 等老旧设备上的适用范围。

## 4. 社区热点
今日讨论最活跃的议题是 **Issue #851**。
-   **链接：** [nullclaw/nullclaw Issue #851](https://github.com/nullclaw/nullclaw/issues/851)
-   **分析：** 该 Issue 报告了在 Raspberry Pi 5 (Debian 13) 上 Gateway 进程因 `accept4()` 系统调用返回 `EAGAIN` 而导致 CPU 100% 占用的问题。该问题引发了 3 条评论讨论，反映出用户对 NullClaw 在边缘计算场景下的资源效率高度关注。用户通过 `strace` 提供了详尽的诊断信息，显示社区技术氛围浓厚。该问题已被 PR #853 锁定并尝试修复。

## 5. Bug 与稳定性
今日报告及修复的 Bug 集中在底层网络与系统调度，按严重程度排列如下：

1.  **[严重] Gateway CPU 空转 (Busy-loop)**
    -   **描述：** 在 ARM 架构 (Raspberry Pi 5) 及特定内核版本下，Gateway 进程在空闲时仍占用 100% CPU。
    -   **原因：** `accept4()` 调用返回 `EAGAIN` 错误未被正确处理，导致死循环。
    -   **状态：** **已有 Fix PR** ([PR #853](https://github.com/nullclaw/nullclaw/pull/853))，增加了退避机制。
    -   **链接：** [Issue #851](https://github.com/nullclaw/nullclaw/issues/851)

2.  **[严重] K8s 环境下服务挂起**
    -   **描述：** Zig 0.16 迁移后，HTTP Gateway 在高负载下 `/health` 和 `/ready` 端点停止响应，导致 K8s 杀死 Pod (CrashLoopBackOff)。
    -   **原因：** 网络流处理层面的兼容性问题。
    -   **状态：** **已有 Fix PR** ([PR #858](https://github.com/nullclaw/nullclaw/pull/858))，采用直接 POSIX read/write 绕过问题层。
    -   **链接：** [PR #858](https://github.com/nullclaw/nullclaw/pull/858)

3.  **[中等] 无 RTC 硬件启动失败**
    -   **描述：** 缺少实时时钟 (RTC) 的硬件（如 PogoPlug V4）上，服务启动顺序可能出错。
    -   **状态：** **已有 Fix PR** ([PR #856](https://github.com/nullclaw/nullclaw/pull/856))，优化了启动依赖顺序。
    -   **链接：** [PR #856](https://github.com/nullclaw/nullclaw/pull/856)

## 6. 功能请求与路线图信号
本日无新增显式功能请求。但从现有 PR 分析，项目路线图呈现以下隐含趋势：
-   **边缘计算与物联网侧重：** 针对 Raspberry Pi 和 PogoPlug 等设备的频繁修复，表明项目正在积极适配轻量级、低功耗硬件，未来版本可能会加强对 IoT 场景的支持。
-   **生产环境健壮性：** PR #858 和 #853 都在处理极端情况下的崩溃或死循环，说明项目正从“功能可用”向“生产高可用”阶段过渡。

## 7. 用户反馈摘要
从 Issue #851 及相关 PR 的上下文中，提炼出以下用户痛点：
-   **资源敏感型场景：** 用户在嵌入式设备上运行 NullClaw，对 CPU 占用极其敏感。任何空转或死循环都会被迅速发现，这对软件的资源管理提出了极高要求。
-   **容器化部署痛点：** 用户正在 K8s 环境中大规模部署，健康检查接口的响应速度直接决定了服务的可用性。Zig 版本升级带来的性能回归或死锁问题让用户感到担忧。
-   **旧硬件兼容性：** 依然有用户在 ARMv5 等老旧硬件上尝试部署，说明用户群体覆盖范围较广，期望软件对底层硬件依赖（如 RTC）的处理更加宽容。

## 8. 待处理积压
目前有 3 个关键的修复 PR 处于开启状态，建议维护者优先关注：

1.  **[P0] PR #853 (修复 CPU 空转):** 该 PR 修复了会导致物理机资源耗尽的严重问题，且已有详细的分析和修复逻辑，建议尽快 Review 合并。
    -   链接：[nullclaw/nullclaw PR #853](https://github.com/nullclaw/nullclaw/pull/853)
2.  **[P0] PR #858 (修复 K8s 挂起):** 影响 K8s 生产环境稳定性，属于阻断性问题，建议优先验证并合并。
    -   链接：[nullclaw/nullclaw PR #858](https://github.com/nullclaw/nullclaw/pull/858)
3.  **[P1] PR #856 (SysVinit 加固):** 提升了旧硬件兼容性，建议合并以扩大硬件支持范围。
    -   链接：[nullclaw/nullclaw PR #856](https://github.com/nullclaw/nullclaw/pull/856)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报 (2026-04-21)**

### 1. 今日速览
IronClaw 项目今日保持**极高活跃度**，Issues 与 PR 更新量均达到 50 条，显示出开发团队正在紧密推进功能迭代与缺陷修复。当前工作重心明显向 **Engine V2 架构优化**、**多渠道集成（Telegram/Google Suite）稳定性**以及 **Web UI 交互体验**倾斜。项目正处于“Bug Bash”（漏洞突击排查）阶段，大量 P1/P2 级别的 Bug 被识别并修复，同时社区贡献的安全修复 PR 值得关注。整体来看，项目处于快速迭代期，质量管控与架构重构并行推进。

### 2. 版本发布
无新版本发布。

### 3. 项目进展
今日共有 17 个 PR 更新（合并/关闭），主要进展集中在 Web 网关重构、测试覆盖率提升及 UI 细节优化：

*   **Web 网关与配置重构**：PR #2762 已关闭，将多租户模式改为配置驱动，提升了部署灵活性；PR #2765 修复了 LLM 配置热重载的稳定性问题。
*   **UI 交互优化**：PR #2763 修复了网关斜杠自动补全和附件渲染问题，提升了聊天界面的用户体验；PR #2769 正在推进任务运行历史记录在 UI 中的展示。
*   **测试与质量守卫**：PR #2744 清理了 Staging 环境的测试积压，实现了 Rust 和 Playwright 测试套件的全绿；PR #2770 修复了 Engine V2 附件持久化测试的路径问题。
*   **功能特性**：PR #2727 引入了 `CLAWHUB_ENABLED` 开关，允许禁用公共技能注册中心，增强了私有化部署的控制粒度。

### 4. 社区热点
今日讨论最热烈的 Issues 集中在第三方集成与核心交互体验上：

*   **Google Sheets OAuth 阻塞问题 ([#2229](https://github.com/nearai/ironclaw/issues/2229))**：评论数达 10 条。用户在 Telegram bot 中触发 Google Sheets 授权时遭遇 `Error 400 invalid_request`，这是目前 Bug Bash 中反馈最集中的集成问题。
*   **聊天记录持久化故障 ([#2285](https://github.com/nearai/ironclaw/issues/2285))**：评论数 7 条。用户反馈页面刷新后消息丢失，但后台 Bot 仍在处理任务，暴露了前端状态管理与后端持久化之间的同步缺陷。
*   **WASM 凭证注入失败 ([#1537](https://github.com/nearai/ironclaw/issues/1537))**：评论数 4 条。NEAR AI 托管 TEE 环境中 WASM 工具无法获取运行时注入的凭证，影响了安全敏感型工具的正常运行。
*   **Engine V2 架构讨论 ([#2721](https://github.com/nearai/ironclaw/issues/2721))**：核心贡献者提出重构 Engine V2 的执行路径，减少对单一路径的依赖，旨在降低任务开销并提升最终化处理能力。

### 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，主要集中在集成与上下文管理：

*   **[P1] Telegram 集成缺陷**：
    *   Issue [#2731](https://github.com/nearai/ironclaw/issues/2731)：Telegram 消息被渲染为独立的会话，而非统一线程，破坏了上下文连贯性。
    *   Issue [#2580](https://github.com/nearai/ironclaw/issues/2580)：Agent 声称已发送 Telegram 消息，但实际上并未送达（已关闭，可能已修复）。
*   **[P1] 模型上下文溢出 ([#2408](https://github.com/nearai/ironclaw/issues/2408))**：输入超出模型 200K Token 限制导致报错，缺乏自动截断或摘要机制。
*   **[P1] 工具选择逻辑错误 ([#2732](https://github.com/nearai/ironclaw/issues/2732))**：Assistant 在内部搜索可用的情况下，仍建议用户使用 Brave Search API。
*   **[P2] Skill 大小限制 ([#2636](https://github.com/nearai/ironclaw/issues/2636))**：安装 Skill 时遭遇 65536 字节的大小限制报错，用户指出同类项目无此限制。
*   **兼容性风险**：Issue [#2766](https://github.com/nearai/ironclaw/issues/2766) 指出 MCP 工具名称若超过 64 字符将导致 AWS Bedrock 等提供商报错。

### 6. 功能请求与路线图信号
*   **凭证多账号支持 ([#2642](https://github.com/nearai/ironclaw/issues/2642))**：请求支持单个服务（如多个 Gmail 账号）配置多套凭证，这是目前单槽位凭证模型的重大痛点，直接关联到 Google Suite 集成的可用性。
*   **Engine V2 质量评估套件 ([#2722](https://github.com/nearai/ironclaw/issues/2722))**：计划构建回放/评估测试集，用于客观衡量 Engine V2 的质量回归，标志着项目正从功能开发转向质量工程。
*   **企业微信渠道支持 ([PR #2394](https://github.com/nearai/ironclaw/pull/2394))**：社区贡献者正在提交独立的 `wecom` WASM 渠道实现，目前处于 WIP 状态，有望丰富企业级通讯场景。

### 7. 用户反馈摘要
*   **痛点：集成流程割裂**：用户在使用 OAuth（Google Sheets/Linear）时频繁遇到授权失败或状态不同步的问题，表明第三方集成的认证链路仍需加固。
*   **痛点：Skill 限制过严**：开发者在安装大型 Skill 时遭遇字节数限制，对平台的扩展性提出质疑。
*   **痛点：上下文管理**：长对话场景下缺乏自动的上下文窗口管理，导致模型报错，用户期待更智能的上下文截断或压缩机制。
*   **正面信号**：社区对项目架构调整响应迅速，如多租户配置化重构和 Engine V2 的设计讨论，显示核心团队与社区在架构演进上有良好的互动。

### 8. 待处理积压
*   **安全漏洞修复待合并**：PR [#2093](https://github.com/nearai/ironclaw/pull/2093)（Zip bomb DoS 修复）和 PR [#2094](https://github.com/nearai/ironclaw/pull/2094)（SSRF 漏洞修复）自 4 月 7 日开启至今未合并，建议优先 Review 以消除安全隐患。
*   **核心 Bug 长期未决**：Issue [#1537](https://github.com/nearai/ironclaw/issues/1537)（WASM 凭证注入）创建于 3 月 21 日，涉及 TEE 安全环境核心功能，至今仍在更新但未解决，需重点关注。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-21)

## 1. 今日速览
LobsterAI 项目今日保持**高活跃度**开发态势，过去24小时内 PR 更新量高达 36 条，其中 13 条已顺利合并或关闭。项目重心目前呈现“双轨并行”的特征：一方面在**架构层面**积极推进核心依赖的现代化升级（React 19、Vite 8），另一方面在**用户体验层面**集中修复稳定性问题并增强 UI 细节。今日无新版本发布，但大量已合并的修复 PR 预示着下一次版本更新将显著提升应用的健壮性。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
今日共有 13 个 PR 被合并或关闭，主要集中在数据安全、安装体验优化及底层逻辑修复，项目整体稳定性迈上新台阶。

- **[Data Safety] SQLite 自动备份与恢复机制** (PR [#1752](https://github.com/netease-youdao/LobsterAI/pull/1752) - CLOSED/MERGED): 这是一个关键的数据安全性更新。引入了 SQLite 数据库的自动备份和恢复机制，应用启动时若检测到损坏可自动还原最近的健康快照，有效防止用户数据丢失。

- **[Platform/Windows] 修复覆盖安装丢失用户数据问题** (PR [#1759](https://github.com/netease-youdao/LobsterAI/pull/1759) - CLOSED/MERGED): 解决了 Windows 平台在进行覆盖安装（Overlay Upgrade）时，用户自建 Skills 被误删的严重痛点。通过延迟删除旧目录并回填数据，保障了升级体验的平滑性。

- **[UX] 更新流程优化** (PR [#1754](https://github.com/netease-youdao/LobsterAI/pull/1754) - CLOSED/MERGED): 重构了手动更新检查逻辑，将“发现新版本”与“立即下载”解耦，避免了用户在不知情情况下后台占用带宽，提升了用户对更新过程的掌控感。

- **[Integration] OpenClaw 适配与修复**:
    - PR [#1758](https://github.com/netease-youdao/LobsterAI/pull/1758): 修正了 `OPENCLAW_HOME` 路径映射错误，解决了执行权限审批文件找不到的问题。
    - PR [#1755](https://github.com/netease-youdao/LobsterAI/pull/1755): 禁用了内置的 `mcporter` skill，避免与 LobsterAI 自身的 MCP 集成产生混淆日志。

- **[Feature] 钉钉扫码配置与 Popo 文档支持** (PR [#1761](https://github.com/netease-youdao/LobsterAI/pull/1761), [#1762](https://github.com/netease-youdao/LobsterAI/pull/1762) - CLOSED): 增强了 IM 渠道的接入能力，支持钉钉机器人扫码一键配置，并扩展了对 Popo 云文档及群历史消息的获取能力。

## 4. 社区热点
尽管今日 Issues 讨论量较少，但代码提交方向清晰地反映了社区与开发者的关注重点：

- **核心技术栈升级争议与尝试**：
    - PR [#1764](https://github.com/netease-youdao/LobsterAI/pull/1764) (React 19.2.5 升级) 和 PR [#1766](https://github.com/netease-youdao/LobsterAI/pull/1766) (Vite 8.0.9 升级) 均处于 **Open** 状态。这表明项目正在尝试跨越式升级前端工具链。React 19 带来的新特性与 Vite 8 的性能优化将是下一次版本的重要看点，但也需关注潜在的重大变更适配成本。

- **UI/UX 细节打磨**：
    - PR [#1760](https://github.com/netease-youdao/LobsterAI/pull/1760) (支持 Agent 图片头像) 引人关注。这将改变 Agent 只能使用 Emoji 的历史，极大增强多 Agent 场景下的辨识度。
    - PR [#1770](https://github.com/netease-youdao/LobsterAI/pull/1770) 和 PR [#1769](https://github.com/netease-youdao/LobsterAI/pull/1769) 分别优化了空状态占位符和加载骨架屏，体现了对“白屏时间”和“用户等待焦虑”的精细化治理。

## 5. Bug 与稳定性
今日记录到 1 个新开 Issue 和多个修复类 PR，整体稳定性正在改善。

- **新报告 Bug**：
    - **[Medium] 定时任务通知文案错误** (Issue [#1751](https://github.com/netease-youdao/LobsterAI/issues/1751)): 用户反馈开启定时任务时，通知方式中的文案显示不正确。目前 Issue 处于 Open 状态，暂无关联修复 PR。

- **已修复/待合并 Bug**：
    - **[Critical] 爬虫任务无法停止** (PR [#1756](https://github.com/netease-youdao/LobsterAI/pull/1756) - OPEN): 修复了用户在对话框点击“停止”后，后台爬虫任务仍继续执行的严重逻辑漏洞。根因在于异步中止信号未正确传递，目前 PR 已提交待审核。
    - **[High] NIM 渠道配置状态显示错误** (PR [#1771](https://github.com/netease-youdao/LobsterAI/pull/1771) - OPEN): 修复了配置完网易云信（NIM）机器人后，Agent 设置页仍显示“未配置”的 Bug。

## 6. 功能请求与路线图信号
结合今日 PR 动态，项目路线图呈现出以下信号：

1.  **多模态与个性化增强**：PR [#1760](https://github.com/netease-youdao/LobsterAI/pull/1760) 显示项目正致力于提升 Agent 的个性化表达能力，从单纯的“工具”向“数字分身”演进。
2.  **企业级集成加深**：PR [#1761](https://github.com/netease-youdao/LobsterAI/pull/1761) (钉钉扫码) 和 PR [#1762](https://github.com/netease-youdao/LobsterAI/pull/1762) (Popo 集成) 表明项目正在强化对国内企业办公场景（钉钉、网易 Popo）的原生支持，降低企业用户的配置门槛。
3.  **底层架构现代化**：Dependabot 提出的 React 19 和 Vite 8 升级若通过，将标志着项目进入下一个技术代际，可能为未来的 RSC (React Server Components) 或更复杂的构建优化铺平道路。

## 7. 用户反馈摘要
- **痛点**：Issue #1751 反映了配置向导中的文案细节问题，虽然不影响核心功能，但会混淆用户视听，建议尽快修复以提升专业度。
- **场景**：Windows 用户在进行版本覆盖更新时，对“保留个人数据”有强烈需求（见 PR #1759 背景），说明该项目已有相当数量的活跃存量用户，且用户习惯于通过本地文件管理 Skills。

## 8. 待处理积压
- **长期未合并的依赖更新**：PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (Electron 大版本升级) 自 4 月初开启至今仍未合并。Electron 版本的滞后可能会带来安全隐患或限制新 API 的使用，建议维护者评估该 PR 的合并优先级或阻碍点。
- **待审核功能 PR**：PR [#1756](https://github.com/netease-youdao/LobsterAI/pull/1756) (修复爬虫无法停止) 涉及核心执行逻辑，建议优先进行 Code Review 并合入，以解决潜在的资损或资源浪费风险。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-04-21)

## 1. 今日速览
过去 24 小时，TinyClaw 项目整体活跃度处于低位，未观测到新开 Issue 或版本发布。社区开发重心主要集中在存量代码的维护与缺陷修复上，唯一的动态体现在合并了一个关于心跳机制的修复 PR。总体而言，项目当前处于稳定维护的静默期，代码库健康度平稳，无重大动荡或新功能引入的迹象。

## 2. 版本发布
无。

## 3. 项目进展
今日项目推进主要集中在 **配置逻辑的修正**，合并/关闭了 1 个 Pull Request：

*   **PR [#276](https://github.com/TinyAGI/tinyagi/pull/276) [CLOSED] fix(heartbeat): honor top-level heartbeat.enabled=false setting**
    *   **内容**：修复了 `settings.json` 中顶层 `heartbeat.enabled` 配置项被忽略的问题。此前，心跳开关仅在 `AgentConfig` 级别生效，导致顶层配置失效时 `startHeartbeat()` 仍被无条件调用。
    *   **意义**：此修复完善了配置系统的优先级逻辑，修复了用户无法在全局层面禁用心跳功能的 Bug，提升了配置管理的灵活性与预期的正确性。项目在稳定性与配置可控性上迈出了坚实的一小步。

## 4. 社区热点
今日社区讨论氛围平淡，无新开 Issue 或高热度讨论。

*   **唯一关注点**：PR [#276](https://github.com/TinyAGI/tinyagi/pull/276) 是今日唯一的活跃项。虽然评论数为 undefined（通常意味着较少或无额外讨论），但该 PR 的提交与合并表明维护者 @ZVNC28 正在积极响应并修正由于配置层级设计不合理导致的逻辑漏洞。

## 5. Bug 与稳定性
今日无新报告的 Bug 或崩溃问题。今日处理了一个已存缺陷：

*   **[已修复] 配置逻辑缺陷 - 心跳开关失效**
    *   **严重程度**：中等（影响功能可控性，非崩溃）。
    *   **详情**：顶层 `heartbeat.enabled=false` 设置未生效，导致心跳功能无法被全局禁用。
    *   **状态**：已通过 PR [#276](https://github.com/TinyAGI/tinyagi/pull/276) 修复并关闭。

## 6. 功能请求与路线图信号
今日无新增功能请求（Issue），无法提取新的路线图信号。从现有 PR 修复方向推断，项目当前阶段优先级侧重于**系统底层配置的正确性与健壮性**，而非激进的功能扩展。

## 7. 用户反馈摘要
由于今日无新增 Issue 评论，暂无直接的用户反馈数据。结合 PR [#276](https://github.com/TinyAGI/tinyagi/pull/276) 的内容推测，部分用户可能在之前的部署中遇到了“配置文件未生效”的困惑，特别是希望禁用心跳以节省资源或减少日志噪音的场景，这一痛点在今日得到了解决。

## 8. 待处理积压
根据今日数据快照，过去 24 小时内无长期未响应的 Issue 或 PR 产生新的动态。鉴于今日活跃度极低，建议维护者检查是否存在历史遗留的低优先级 Issue 待分类处理，以维持社区活跃度。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 (2026-04-21)

## 1. 今日速览
Moltis 项目今日呈现出极高的维护活跃度与版本迭代速度。过去 24 小时内，项目成功发布了新版本 `20260420.02`，合并了 12 个 PR，并实现了 Issues 清零（关闭 9 个，新开 0 个），展现出维护者极强的问题处理能力与社区响应速度。核心进展集中在引入“自我改进智能体循环”架构、大幅扩展默认技能库以及对 Podman/Slack/Fireworks 等环境的兼容性修复。整体项目健康度极佳，处于快速演进阶段。

## 2. 版本发布
- **版本号**: `20260420.02`
- **更新亮点**: 本版本是一次重大功能性更新，包含了核心架构升级与大量错误修复。
    - **核心功能**: 引入了自我改进智能体循环，支持自动技能创建与记忆生命周期管理 (#803)；默认捆绑 101 个预审技能 (#797)。
    - **模型支持**: 新增 Kimi K2.6 模型支持 (#809)；修复 Google Gemini 与 Fireworks Kimi 路由的兼容性问题 (#795, #812)。
    - **基础设施**: Sandbox 环境升级至 Node.js 22 LTS (#807)；修复 Podman BuildKit 镜像导出问题 (#811)。

## 3. 项目进展
今日合并的 PR 极大地推进了项目的智能化程度与兼容性：

- **架构升级**: PR #803 实现了“自我改进智能体循环”，允许智能体自主创建和修补技能，并优化了记忆提取机制，标志着 Moltis 从被动响应向自主进化迈出关键一步。
- **功能增强**: PR #797 将默认技能数量扩展至 101 个，增强了开箱即用能力；PR #808 改进了 Web 端 Markdown 渲染效果；PR #809 跟进支持了最新的 Kimi K2.6 模型。
- **生态兼容**: PR #805 修复了旧版 SSE MCP 传输协议支持；PR #794 统一了全渠道命令注册中心，修复了 Telegram 等平台的命令漂移问题。
- **稳定性修复**: PR #811 解决了 Podman 环境下沙箱镜像丢失的严重问题；PR #795 修复了 Google 模型函数调用缺失 `thought_signature` 的 Bug。

## 4. 社区热点
今日社区关注点主要集中在跨平台兼容性与架构逻辑澄清：

- **[Issue #769]**: 讨论热度最高（5 条评论）。用户对多智能体工作空间下的心跳机制与 Cron 任务行为存在困惑。维护者迅速响应并关闭该 Issue，推测已在文档或代码层面澄清逻辑。
- **[Issue #375]**: 获得最多点赞（👍3）。关于 Google 模型函数调用签名缺失的问题，该问题已通过 PR #795 得到解决，反映了用户对多模型兼容性的高度关注。

## 5. Bug 与稳定性
今日报告的 Bug 均已在同日修复，响应速度极快：

- **[严重] Podman 沙箱镜像丢失**: Issue #796 报告 BuildKit 构建后镜像未导出到 Podman Store，导致沙箱执行失败。
    - **状态**: 已由 PR #811 修复。
- **[严重] Fireworks Kimi K2.5 Turbo 400 错误**: Issue #810 报告使用特定路由时报错。
    - **状态**: 已由 PR #812 修复。
- **[中等] Slack 斜杠命令失效**: Issue #798 指出 Slack 命令返回“未知命令”错误。
    - **状态**: 已由 PR #804 修复。
- **[中等] Google 模型函数调用错误**: Issue #375 指出调用函数时缺少 `thought_signature`。
    - **状态**: 已由 PR #795 修复。

## 6. 功能请求与路线图信号
- **中止操作功能**: Issue #788 提出希望在 Telegram 端增加“中止当前操作”功能及模型回退机制。该 Issue 已关闭，考虑到今日 PR #803 提到了“Agentic memory lifecycle”及部署改进，该功能可能已被纳入新的架构或通过其他方式解决，值得用户关注后续 Release Note。
- **Nix Flake 支持**: PR #745 提交了 Nix Flake 支持，目前仍处于 Open 状态。这表明项目正在吸引更多打包生态的贡献，建议维护者尽快 Review 以降低 Linux 用户的安装门槛。

## 7. 用户反馈摘要
- **模型兼容性痛点**: 多名用户反馈在接入非 OpenAI 官方模型（如 Fireworks Kimi、Google Gemini、Openrouter）时遇到 Schema 不兼容或 400 错误（Issues #375, #793, #810）。这反映了 Moltis 用户群体广泛使用多样化的 LLM 后端，对模型适配层的鲁棒性要求极高。
- **容器环境复杂性**: Issue #796 反映了在非 Docker 环境（如 Rootless Podman）下运行沙箱的复杂性，表明部分高级用户正在生产环境中尝试更安全的容器隔离方案。

## 8. 待处理积压
- **PR #745 (Feature: Nix Flake)**: 已开放数日，尚未合并。Nix 是 Linux 开发者的重要安装方式，建议维护者优先审查。
- **文档更新批处理**: 存在 4 个文档相关的 PRs (#799, #800, #801, #802) 处于 Open 状态，涉及核心配置、语音、检查点等模块，需等待合并以完善官方文档。

---
*分析师注：Moltis 今日的表现属于典型的“高带宽”维护模式，核心开发者 @penso 几乎实时响应了所有 Issue 并提交修复。建议用户关注 `20260420.02` 版本的升级，特别是 Podman 用户和 Google/Fireworks 模型用户。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-04-21)

## 1. 今日速览
项目今日保持**高度活跃**状态， Issues 更新达 41 条，PR 更新达 50 条，显示社区参与度极高。项目发布了 **v1.1.3-beta.1** 版本，主要聚焦于控制台插件系统的增强。项目重心目前明显向 **QwenPaw** 品牌迁移，但同时也暴露了升级过程中的路径兼容性问题。整体来看，项目正处于功能快速迭代期，新功能（如 SIP 语音通道、计划模式）正在积极开发中，但需关注近期版本升级带来的环境配置与稳定性问题。

## 2. 版本发布
- **[v1.1.3-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.3-beta.1)**
  - **更新内容**：
    - **控制台插件系统增强**：PR [#3357](https://github.com/agentscope-ai/QwenPaw/pull/3357) 合并，引入了新的控制台插件功能。
    - **文档更新**：由 @zhijianma 提交，完善了相关插件文档。
    - **版本号升级**：由 @xieyxclack 提交。
  - **注意事项**：这是一个 Beta 版本，主要用于测试插件系统等新特性，生产环境请谨慎升级。

## 3. 项目进展
今日共有 **31 个 PR 被合并或关闭**，项目在多个关键领域取得实质性进展：

- **核心功能增强**：
  - **备份与恢复**：PR [#3534](https://github.com/agentscope-ai/QwenPaw/pull/3534) 已关闭（合并），引入了全量备份与恢复系统，用户可快照保存数据。
  - **Telegram 交互优化**：PR [#3585](https://github.com/agentscope-ai/QwenPaw/pull/3585) 已关闭，修复了工具执行期间“正在输入”状态消失的问题，提升了用户体验。
  - **MacOS 构建**：PR [#3622](https://github.com/agentscope-ai/QwenPaw/pull/3622) 修复了 MacOS 桌面端构建问题。

- **正在审查的重要 PR**：
  - **SIP 语音通道**：PR [#3449](https://github.com/agentscope-ai/QwenPaw/pull/3449) 正在审查中，拟支持 VoIP/LiveKit 双模式及流式 STT/TTS。
  - **前端测试框架**：PR [#3559](https://github.com/agentscope-ai/QwenPaw/pull/3559) 引入了 Vitest 测试框架，提升前端代码质量。
  - **Plan 模式**：PR [#2904](https://github.com/agentscope-ai/QwenPaw/pull/2904) 持续推进，计划将 PlanNotebook 集成到端到端流程中。

## 4. 社区热点
今日社区讨论主要集中在升级兼容性与具体功能的使用障碍上：

- **[Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) [OPEN]**: "Help Wanted: Open Tasks" 官方任务认领帖，评论数达 58 条，持续吸引贡献者认领任务。
- **[Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) [OPEN]**: **升级路径 Bug**。关于 QwenPaw 升级后工作目录仍指向旧 `.copaw` 目录的问题，引发大量讨论（20 条评论）。用户普遍遇到数据迁移困惑，需官方尽快澄清迁移机制或修复路径硬编码问题。
- **[Issue #2405](https://github.com/agentscope-ai/QwenPaw/issues/2405) [CLOSED]**: 关于 OpenRouter 小米 Mimo 模型的 API 调用问题，涉及 token 计费与模型兼容性讨论。

## 5. Bug 与稳定性
今日报告的 Bug 集中在**升级后的环境变量、认证机制及特定平台兼容性**上：

- **严重**:
  - **[Issue #3568](https://github.com/agentscope-ai/QwenPaw/issues/3568) [CLOSED]**: 无效的 YAML 格式会导致 QwenPaw 完全崩溃且无法响应。目前已有相关修复或处理。
  - **[Issue #3582](https://github.com/agentscope-ai/QwenPaw/issues/3582) [OPEN]**: 本地主机 (127.0.0.1) 认证绕过失效，返回 401 错误，与官方安全文档描述不符，存在安全隐患或回归问题。
  - **[Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) [OPEN]**: 升级后工作目录混乱，数据写入 `.copaw` 而非 `.qwenpaw`。

- **一般**:
  - **[Issue #3002](https://github.com/agentscope-ai/QwenPaw/issues/3002) [OPEN]**: 不兼容 OpenAI Responses API 格式，导致 Azure 代理网关请求失败。
  - **[Issue #3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) [OPEN]**: Cron 任务执行时报 `KeyError: channel not found: weixin`。
  - **[Issue #3625](https://github.com/agentscope-ai/QwenPaw/pull/3625) [OPEN]**: 修复 Windows 下文件路径包含非 ASCII 字符导致的 ValueError，待合并。

## 6. 功能请求与路线图信号
社区提出多项针对性需求，部分已有 PR 跟进：

- **模型分配优化**：[PR #3599](https://github.com/agentscope-ai/QwenPaw/pull/3599) 提出在前端 UI 支持为每个智能体单独分配模型，目前 PR 处于 Open 状态，极有可能合入下个版本。
- **多模态支持**：[Issue #3624](https://github.com/agentscope-ai/QwenPaw/issues/3624) 反馈 MiniMax Pro 套餐不支持视觉功能，引发对多模态适配的关注。
- **前端体验**：
  - [Issue #3572](https://github.com/agentscope-ai/QwenPaw/issues/3572): 请求代码块折叠功能。
  - [Issue #3627](https://github.com/agentscope-ai/QwenPaw/issues/3627): 建议前端 UI 风格向 Claude Code 靠拢。
- **智能体进化**：[Issue #3516](https://github.com/agentscope-ai/QwenPaw/issues/3516) 探讨引入 Hermes 理念实现智能体自动进化。

## 7. 用户反馈摘要
从评论中提炼出以下关键点：
- **迁移痛点**：用户对从 CoPaw 到 QwenPaw 的迁移感到困惑，特别是两个文件夹共存且数据流不一致的问题。
- **部署难度**：Docker 版本在特定环境下（如 ZimaOS, GLIBC 版本问题）存在启动失败的情况 ([Issue #3211](https://github.com/agentscope-ai/QwenPaw/issues/3211))。
- **模型接入**：用户希望更灵活地接入第三方模型（如 OpenRouter 上的免费模型、企业 Azure 网关），但在 Token 计费和 API 格式适配方面遇到阻碍。
- **功能易用性**：Cron 任务、企业微信通道的稳定性及配置便捷性是用户关注的焦点。

## 8. 待处理积压
- **[Issue #2953](https://github.com/agentscope-ai/QwenPaw/issues/2953) [OPEN]**: `copaw app` 启动后显示错误信息的问题，自 4 月 5 日创建以来尚未解决，评论数较少，需确认是否为偶发问题或文档指引不当。
- **[Issue #3002](https://github.com/agentscope-ai/QwenPaw/issues/3002) [OPEN]**: OpenAI API 格式兼容性问题，影响使用 Azure 代理网关的用户，目前无明确修复时间表。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-04-21)

**项目仓库**: [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. 今日速览
EasyClaw 项目今日处于**低交互、重交付**的状态。虽然代码提交、Issue 讨论与 PR 合并均为 0，但项目发布了重要的 **v1.8.0 (RivonClaw)** 版本，标志着开发周期进入了新的里程碑。整体来看，项目今日缺乏社区协作互动，但核心功能交付仍在稳步推进。此次更新重点解决了 macOS 平台的兼容性痛点，显示出维护者对跨平台用户体验的持续关注。

### 2. 版本发布
今日发布了 **v1.8.0 (RivonClaw v1.8.0)** 版本。

*   **更新重点**：此次更新显著优化了 macOS 平台的安装体验。Release Notes 明确指出并解决了 macOS Gatekeeper 安全机制拦截未签名应用的问题。
*   **关键变更**：
    *   针对 macOS 用户可能遇到的 **"'RivonClaw' is damaged and can't be opened"** 错误提供了官方解释与解决方案。
    *   提供了通过终端移除隔离属性的修复指引，降低了非签名应用在 macOS 上的使用门槛。
*   **迁移注意事项**：
    *   对于 macOS 用户，升级或安装 v1.8.0 后若遇到“文件损坏”提示，需意识到这是系统安全策略而非文件本身问题。
    *   用户需按照文档指引在终端执行命令（文档截断处推测为 `xattr -cr` 相关命令）以解除隔离。

**Release 链接**: [v1.8.0: RivonClaw v1.8.0](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.0)

### 3. 项目进展
今日无合并或关闭的 Pull Requests。项目进展完全体现在 v1.8.0 版本的发布上，表明上一个开发周期的代码已封版并交付，当前处于发布后的观察期或下一周期的规划期。

### 4. 社区热点
过去 24 小时内，Issues 与 PRs 更新数均为 0。社区讨论处于静默状态，暂无热点话题。推测用户关注点已转移至 v1.8.0 新版本的下载与实测中。

### 5. Bug 与稳定性
今日无新增 Bug 报告（Issues 为 0）。

*   **已知稳定性问题（来自 Release Notes）**：
    *   **问题**：macOS Gatekeeper 拦截导致应用无法启动。
    *   **严重程度**：中（不影响功能逻辑，但阻断启动流程，影响首次体验）。
    *   **状态**：官方文档已提供 Workaround（临时解决方案），暂无需修复 PR，属于环境配置类问题。

### 6. 功能请求与路线图信号
今日无新增功能请求或路线图相关讨论。由于缺乏社区输入，下一版本的功能优先级目前主要取决于维护者的内部规划。

### 7. 用户反馈摘要
由于今日无 Issue 评论数据，无法提炼具体的用户讨论痛点。但从版本更新日志侧重解决 macOS 安装障碍可以看出，**跨平台兼容性（特别是 macOS 签名与安全策略）**是当前用户反馈中的高频痛点，维护者已通过文档更新积极回应了这一诉求。

### 8. 待处理积压
今日无新增或活跃的 Issue/PR，暂无具体的积压告警。建议维护者在版本发布后密切关注后续 24-48 小时的用户反馈，特别是 v1.8.0 在 macOS 上的运行稳定性报告。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*