# OpenClaw 生态日报 2026-06-12

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-06-12 04:14 UTC

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

# OpenClaw 项目动态日报 (2026-06-12)

## 1. 今日速览

OpenClaw 今日发布了 **v2026.6.6-beta.2** 版本，核心聚焦于**全方位收紧安全边界**，涉及沙箱隔离、MCP stdio、Codex HTTP 访问及 Discord/Teams 审核等多个关键模块。项目活跃度持续走高，过去 24 小时内 Issues 更新量达 500 条，PR 更新量同样达 500 条，其中待合并 PR 高达 376 条，显示出社区提交热情高涨但审查压力较大。尽管新版本强化了安全性，但随之而来的配置复杂度提升引发了部分用户在沙箱权限和上下文配置方面的反馈。

## 2. 版本发布

**新版本：v2026.6.6-beta.2**

本次更新是一次重大的安全强化版本，主要变更包括：

*   **安全边界收紧**：大幅增强了 transcrisandbox binds、宿主环境继承、MCP stdio 等环节的隔离性。
*   **访问控制增强**：针对 Codex HTTP 访问、原生搜索策略引入了更严格的限制。
*   **平台治理**：加强了 Discord 审核和 Teams 群组操作的安全性检查，提升了 elevated sender checks 的力度。

## 3. 项目进展

今日共有 **124** 个 PR 被合并或关闭，主要进展集中在安全修复、新渠道集成和多智能体架构优化：

*   **安全架构重构**：PR [#84172](https://github.com/openclaw/openclaw/pull/84172) 正在重构命令授权机制，引入 Tree-sitter 支持的命令规划器，以替代原本临时的 POSIX 授权路径，这将显著提升 `exec` 工具的安全性和可控性。
*   **关键隐私修复**：PR [#92339](https://github.com/openclaw/openclaw/pull/92339) 修复了 #91804 中报告的严重问题，防止内部推理过程泄露给终端用户，目前已被合并。
*   **多平台集成推进**：PR [#92081](https://github.com/openclaw/openclaw/pull/92081) 实现了 Microsoft Teams 的语音（CVI）、聊天及治理集成，扩展了企业级应用场景；PR [#92340](https://github.com/openclaw/openclaw/pull/92340) 新增了飞书 VC 会议邀请处理能力。
*   **多智能体执行后端**：PR [#84758](https://github.com/openclaw/openclaw/pull/84758) 为 `sessions_spawn` 引入了执行后端放置契约，为未来支持分布式/远程智能体运行奠定了基础。

## 4. 社区热点

今日讨论最活跃的议题集中在跨平台支持和底层架构优化：

1.  **[Issue #75] Linux/Windows Clawdbot Apps**
    *   **热度**：109 评论 | 👍 79
    *   **诉求**：社区强烈呼吁补齐 Linux 和 Windows 平台的客户端支持，当前仅有 macOS/iOS/Android。这已成为目前点赞数最高的议题，反映出桌面端用户的巨大缺口。
2.  **[Issue #9443] Request: Prebuilt Android APK releases**
    *   **热度**：25 评论 | 👍 2
    *   **诉求**：用户希望在 GitHub Releases 中直接提供预编译的 Android APK，而非仅提供源码，以降低移动端部署门槛。
3.  **[Issue #32473] control ui requires device identity**
    *   **热度**：17 评论 | 👍 5
    *   **诉求**：新版本的安全收紧导致部分 VPS/Docker 用户无法访问控制 UI，引发了关于 HTTPS 和 localhost 安全上下文配置的讨论。

## 5. Bug 与稳定性

今日报告了多个影响核心功能的 Bug，部分已有修复方案：

### 严重
*   **[Bug] 内部推理泄露**：v2026.6.5 版本被发现会将智能体内部思考过程暴露给用户。
    *   状态：**已修复** (见 [PR #92339](https://github.com/openclaw/openclaw/pull/92339))。
*   **[Issue #32296] 会话上下文混淆**：智能体错误回复上一条消息而非当前消息，导致对话错位。这是一个影响交互体验的严重会话状态 Bug。
    *   状态：Open，P1 优先级。
*   **[Issue #40001] 写入工具缺乏追加模式**：隔离的定时任务会覆盖共享文件，导致数据丢失。
    *   状态：Open，P1 优先级。

### 中等
*   **[Issue #31331] Docker 沙箱工作区访问故障**：在 Docker-in-Docker 环境下，沙箱无法正确绑定工作区。
*   **[Issue #38327] Gemini 3.1 崩溃**：更新后使用 `google-vertex/gemini-3.1-pro-preview` 时出现 "Cannot convert undefined or null to object" 错误。
*   **[Issue #40540] Windows 更新失败**：`openclaw update` 命令在 Windows 上因 EBUSY 错误失败。

## 6. 功能请求与路线图信号

社区与贡献者正在推动以下关键功能：

*   **多智能体协作增强** ([Issue #35203](https://github.com/openclaw/openclaw/issues/35203))：提议引入能力画像、共享黑板和分层记忆机制，解决多智能体间信息孤岛和任务委派模糊的问题。这与 PR #84758 的后端架构改进相呼应，可能是下一阶段的发展重点。
*   **Slack Block Kit 支持** ([Issue #12602](https://github.com/openclaw/openclaw/issues/12602))：请求支持 Slack Block Kit 消息，以实现更丰富的交互界面。
*   **密钥遮蔽机制** ([Issue #10659](https://github.com/openclaw/openclaw/issues/10659))：请求实现 "Masked Secrets"，允许智能体使用 API Key 但无法读取明文，以防止意外泄露。

## 7. 用户反馈摘要

*   **平台覆盖不足**：大量用户在 Issue #75 中表达了对 Linux 和 Windows 原生客户端的迫切需求，目前的缺失严重限制了开发者用户群的扩展。
*   **安全配置复杂度上升**：随着 v2026.6.6-beta.2 的发布，多项默认安全策略（如 HTTPS 强制、沙箱隔离）导致部分老用户配置失效，反馈主要集中在 "配置了密钥但仍报错" 和 "本地开发环境受限" 等问题上。
*   **多智能体稳定性**：部分高级用户反馈在进行并发智能体调度时，存在配置覆盖和会话锁定失败的问题（Issue #43367），表明多智能体编排在生产环境中尚不稳定。

## 8. 待处理积压

*   **[Issue #75] Linux/Windows 客户端支持**：自 2026-01-01 开放至今，长期未得到官方明确排期，已积累 109 条评论，建议维护者尽快给出 Roadmap 反馈。
*   **[Issue #10659] 密钥遮蔽功能**：作为高安全需求的核心功能，自 2 月份提出以来未有实质性进展，建议纳入近期安全强化路线图。

---

## 横向生态对比

# 2026-06-12 开源 AI 智能体生态横向对比分析报告

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正处于**架构重构与生产就绪**的关键过渡期。头部项目正从单一智能体功能堆叠转向**多智能体协作架构**（Multi-Agent Orchestration）与**安全隔离**的深水区。随着 MCP（Model Context Protocol）等协议的普及，项目间的互操作性增强，但**Windows 平台支持薄弱**与**配置复杂度过高**成为阻碍开发者入门的普遍痛点。社区对“生产环境稳定性”的诉求压倒了“新功能尝鲜”，倒逼项目方优先解决内存溢出（OOM）、沙箱逃逸和并发控制等核心难题。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新/合并 | 版本发布情况 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 (合并 124, 待合并 376) | **v2026.6.6-beta.2** (重大安全更新) | 🔥 极高活跃，但 PR 积压严重，审查压力大 |
| **Zeroclaw** | 50 | 50 (合并 3, 待合并 47) | **v0.8.0** (架构重构) | ⚠️ 发布后阵痛期，严重 Bug 较多，需修复回归 |
| **IronClaw** | 32 | 47 (合并 26) | 无 (筹备 v0.29.1) | 🟢 高效治理，生产环境切换冲刺期，响应迅速 |
| **CoPaw** | 30 | 39 (合并数未详述) | **v1.1.11.post1/post2** (紧急修复) | ⚠️ 桌面端稳定性存疑，频繁发版修复 SSL/内存问题 |
| **LobsterAI** | 低 | 15 (合并 15) | 无 | 🟢 极高代码质量，高效清理积压，功能迭代快 |
| **Hermes Agent**| 42 | 高 (合并 4, 待合并 46) | 无 | ⚠️ PR 积压严重，桌面端崩溃问题待解 |
| **NanoBot** | 中 | 18 (合并 12, 待合并 6) | 无 | 🟢 活跃开发中，架构调整方向明确，社区贡献强 |
| **PicoClaw** | 10 | 31 (合并 18) | Nightly Build | 🟢 开发迭代平稳，依赖更新及时 |
| **NanoClaw** | 低 | 14 (合并 9) | 无 | 🟢 小而美，架构优化中，治理效率高 |
| **Moltis** | 低 | 1 (待合并) | 无 | 🟡 维护期，聚焦连接器修复 |
| **NullClaw** | 1 | 0 | 无 | 🔴 静默期，仅有个别 Bug 反馈 |
| **TinyClaw** | 0 | 0 | 无 | 🔴 无活动 |
| **ZeptoClaw** | 0 | 0 | 无 | 🔴 无活动 |
| **EasyClaw** | 0 | 0 | 无 | 🔴 无活动 |

## 3. OpenClaw 在生态中的定位

*   **核心参照地位**：OpenClaw 在活跃度上遥遥领先（Issue/PR 更新均达 500 级别），是生态内的“风向标”项目。其 **v2026.6.6-beta.2** 版本对安全边界的收紧（沙箱、MCP stdio、平台审核）树立了行业安全标杆。
*   **优势对比**：相比 Zeroclaw 和 Hermes Agent 遭遇的严重稳定性问题（OOM、桌面崩溃），OpenClaw 虽有配置复杂度上升的副作用，但其核心架构的重构（如 Tree-sitter 授权规划）更为激进且具前瞻性。其平台治理能力（Discord/Teams 集成）也领先于侧重单一功能的 PicoClaw 或 NanoClaw。
*   **技术路线差异**：OpenClaw 走的是“强管控、重安全”的企业级路线，倾向于通过严格的隔离机制解决问题；而 NanoBot/NanoClaw 等项目则更注重轻量化与灵活适配，OpenClaw 的社区规模效应带来了巨大的贡献者基数，但也导致了审查瓶颈（376 个待合并 PR），这是其目前最大的治理痛点。

## 4. 共同关注的技术方向

1.  **多智能体协作架构**
    *   **涉及项目**：Zeroclaw (v0.8.0 核心特性), OpenClaw (PR #84758 会话后端), LobsterAI (Issue #1462 强烈需求), NanoClaw (PR #2733 多实例)。
    *   **具体诉求**：从单点工具向“Agent 小组”、“Manager Agent”调度模式演进，解决任务委派、上下文共享和工作区隔离问题。

2.  **安全边界与权限控制**
    *   **涉及项目**：OpenClaw (沙箱收紧), Zeroclaw (Issue #6699 工具过滤失效), PicoClaw (Issue #3109 Channel 级权限)。
    *   **具体诉求**：在赋予 Agent 自主执行能力的同时，防止“内部推理泄露”、“未授权工具调用”和“跨会话数据污染”。

3.  **本地模型与自定义 Provider 兼容**
    *   **涉及项目**：NanoBot (Issue #4305 多提供商), NullClaw (Issue #952 Ollama 截断), Hermes Agent (Issue #16525 模型路由), PicoClaw (Issue #3111 Gemini 兼容)。
    *   **具体诉求**：打破单一模型绑定，支持 Ollama/LocalAI 等本地推理框架，实现“云端复杂任务+本地简单任务”的混合路由。

4.  **桌面端体验与跨平台支持**
    *   **涉及项目**：Hermes Agent (多处崩溃), CoPaw (Windows 内存泄漏), OpenClaw (Issue #75 Linux/Windows 缺失)。
    *   **具体诉求**：解决 Windows 平台上的 SSL 错误、路径分隔符问题和进程残留，完善 Linux/Windows 客户端覆盖。

## 5. 差异化定位分析

| 维度 | **OpenClaw** | **Zeroclaw / IronClaw** | **NanoBot / NanoClaw** | **CoPaw / LobsterAI** |
| :--- | :--- | :--- | :--- | :--- |
| **核心定位** | 企业级平台治理与安全 | 架构激进创新 | 轻量化与开发者体验 | 多模态与自动化流程 |
| **功能侧重** | 沙箱隔离、平台集成 | 多 Agent 单进程、插件化 | 记忆系统、多机器人支持 | ASR 语音、UI 交互、邮件触发 |
| **目标用户** | 企业开发者、平台运维 | 极客、高阶架构师 | 个人开发者、嵌入式场景 | 办公自动化用户 |
| **架构特征** | 重权限、微服务倾向 | Daemon 守护进程模式 | 核心剥离、SDK 增强 | 桌面端 重度依赖 |

## 6. 社区热度与成熟度

*   **快速迭代期（活跃度高，但波动大）**：
    *   **OpenClaw**：热度最高，正处于功能爆发期，但需警惕社区维护过载。
    *   **Zeroclaw**：发布 v0.8.0 大改版，虽引入先进架构，但正经历“发布阵痛”，稳定性需打磨。
    *   **CoPaw**：版本发布频繁，频繁修复严重 Bug，处于“边跑边修”的状态。

*   **质量巩固期（活跃度中高，治理高效）**：
    *   **IronClaw**：正全力冲刺生产环境就绪，Issue 关闭率高，代码质量较稳。
    *   **LobsterAI**：PR 合并率极高，积压少，显示出成熟的维护节奏和清晰的路线图。
    *   **NanoBot**：处于架构调整期，有序推进模块解耦。

*   **探索/维护期（活跃度低，方向垂直）**：
    *   **PicoClaw / NanoClaw**：专注于特定技术点（如 MCP 协议、记忆系统），社区规模小但讨论质量高。
    *   **Moltis / NullClaw**：处于维护状态，响应速度较慢，仅解决关键阻塞性问题。

## 7. 值得关注的趋势信号

1.  **模型路由策略成为刚需**：Hermes Agent 社区提出的“Agent 自主选择模型”需求，结合 NanoBot 对多自定义 Provider 的呼声，预示着下一代 AI 助手将不再是单一模型的壳，而是具备成本意识与性能调度的“路由器”。
2.  **安全性 vs 易用性的博弈加剧**：OpenClaw 的安全收紧导致配置门槛激增，Zeroclaw 的工具过滤失效引发安全担忧。这表明行业正面临“如何在不牺牲易用性的前提下实现企业级安全”的严峻挑战，这将是后续架构设计的分水岭。
3.  **Windows 平台是兵家必争之地**：多个项目集中爆发 Windows 平台的文件系统、进程管理和 SSL 证书问题。对于开源项目而言，解决 Windows 兼容性痛点将直接带来巨大的用户增量红利。
4.  **“静默失败”是用户体验大敌**：用户对数据库写入静默失败、工具调用无回显、消息发送无回执等“无声错误”容忍度极低。未来的趋势将是增强 Observability（可观测性），确保 Agent 执行过程对开发者透明可见。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-12)

## 1. 今日速览
NanoBot 项目今日保持**高度活跃**状态，社区贡献势头强劲。过去 24 小时内共有 18 个 PR 更新，其中 12 个处于待合并状态，显示出开发者在功能迭代和代码重构上的高强度投入。项目重心正经历一次重要的**架构调整**，核心开发团队开始将桌面端应用从主仓库剥离，以保持开源核心的轻量化。同时，针对 MCP (Model Context Protocol) 重连崩溃的严重 Bug 已有修复方案提交，稳定性维护正在进行中。整体来看，项目正处于功能扩展与架构优化的并行期。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 6 个 PR 被合并或关闭，主要推进了生态兼容性与用户体验的优化：

*   **生态集成增强**：PR [#4281](https://github.com/HKUDS/nanobot/pull/4281) 合并，新增 SiliconFlow 作为转录服务提供商，扩展了语音识别的后端选择；PR [#4289](https://github.com/HKUDS/nanobot/pull/4289) 合并，为 Slack 频道增加了 `groupRequireMention` 配置，优化了群聊机器人的响应逻辑。
*   **本地模型支持优化**：PR [#4020](https://github.com/HKUDS/nanobot/pull/4020) 合并，允许为不同 Provider 单独配置 `stream-idle timeout`，解决了本地 LLM (如 LM Studio, Ollama) 在重推理任务下易超时断连的痛点。
*   **消息处理修复**：PR [#4257](https://github.com/HKUDS/nanobot/pull/4257) 合并，修复了长消息分割时可能破坏代码块结构的 Bug，提升了多段消息的渲染一致性。

## 4. 社区热点
今日社区关注点集中在架构调整与多提供商支持上：

*   **核心仓库架构重组**：PR [#4294](https://github.com/HKUDS/nanobot/pull/4294) 提议将桌面端应用从核心仓库中移除，引发了关于项目未来分发模式的讨论。此举意在将 NanoBot 核心运行时与桌面 GUI 解耦，目前该 PR 处于 Open 状态，是今日最受关注的变动。
*   **多自定义提供商需求**：Issue [#4305](https://github.com/HKUDS/nanobot/issues/4305) 提出了对多个自定义 OpenAI 兼容提供商的支持需求。目前系统限制只能配置一个 "custom" 提供商，这限制了高级用户同时连接多个私有/混合 API 端点的能力。该需求与长期未合并的 PR [#3239](https://github.com/HKUDS/nanobot/pull/3239) 高度相关，显示出社区对多模型路由能力的迫切需求。

## 5. Bug 与稳定性
今日报告了数个影响系统稳定性的关键问题，部分已有修复进度：

*   **[严重] Gateway 崩溃 (已有 Fix PR)**：Issue [#4302](https://github.com/HKUDS/nanobot/issues/4302) 报告了 MCP 会话终止重连时导致 Gateway 崩溃的问题。开发者 @michaelxer 迅速响应并提交了修复 PR [#4303](https://github.com/HKUDS/nanobot/pull/4303)，通过修复异步任务中的作用域错误防止 GC 崩溃。
*   **[中等] 孤立 Tool Results (已有 Fix PR)**：PR [#4306](https://github.com/HKUDS/nanobot/pull/4306) 修复了 Session 历史记录中残留无主 `tool_call_id` 的问题，该问题会导致与 OpenAI/Anthropic API 不兼容。
*   **[已解决] Bubblewrap 沙箱问题**：Issue [#4236](https://github.com/HKUDS/nanobot/issues/4236) 关于 Ubuntu 24.04 上 bwrap 沙箱权限问题已于今日关闭，相关限制已得到确认或处理。

## 6. 功能请求与路线图信号
*   **Python SDK 增强**：PR [#4296](https://github.com/HKUDS/nanobot/pull/4296) 正在大幅扩展 Python SDK 的控制能力，增加了更丰富的运行时元数据和会话管理接口。这表明项目正在加强开发者体验（DX），向更成熟的 Agent 框架演进。
*   **自动化任务调度改进**：PR [#4299](https://github.com/HKUDS/nanobot/pull/4299) 计划将 Cron 自动化任务绑定到特定会话，并在会话空闲时执行，这将大幅提升定时任务的可靠性和上下文管理能力。
*   **多提供商支持**：结合 Issue [#4305](https://github.com/HKUDS/nanobot/issues/4305) 和旧 PR [#3239](https://github.com/HKUDS/nanobot/pull/3239)，"支持多个自定义 Provider" 极有可能是下一版本的重点功能，解决用户混合调用不同模型 API 的痛点。

## 7. 用户反馈摘要
*   **配置灵活性痛点**：用户 @smurfix 在 Issue [#4305](https://github.com/HKUDS/nanobot/issues/4305) 中指出，当前的 Provider 配置机制过于僵化，无法满足“既用 OpenAI 又用本地自定义 API”的混合场景，这是高级用户的核心阻碍。
*   **系统健壮性反馈**：Issue [#4302](https://github.com/HKUDS/nanobot/issues/4302) 反映在网络波动导致 MCP 断连时，系统缺乏足够的容错重连机制，直接导致服务崩溃，这提示在 Agent 长期运行的稳定性方面仍需加固。

## 8. 待处理积压
*   **长期 PR 待合并**：PR [#3239](https://github.com/HKUDS/nanobot/pull/3239)（支持多个自定义提供商）自 4 月开启至今未合并，今日因新 Issue #4305 再次活跃。建议维护者重点关注此 PR，它解决了近期用户反复提出的功能诉求。
*   **Gateway 稳定性修复**：PR [#4303](https://github.com/HKUDS/nanobot/pull/4303) 修复了严重的 Gateway 崩溃问题，建议优先 Review 并合并，以保障生产环境稳定性。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-12)

## 1. 今日速览
Zeroclaw 今日正式发布了具有里程碑意义的 **v0.8.0 版本**，标志着项目架构从单一 Agent 向“单守护进程支持多命名 Agent”的重大转型。社区活跃度极高，过去 24 小时内有 50 条 Issue 更新与 50 条 PR 更新，显示出新版本发布后的强烈反响。然而，Issue 关闭率极低（仅 3/50），且积压了大量高优先级 Bug（如 MCP 工具过滤失效、OOM、Dashboard 不可用），表明 v0.8.0 的大规模重构引入了显著的稳定性挑战，项目目前处于“发布后阵痛期”，亟需修复回归问题。

## 2. 版本发布
### **v0.8.0 - 架构重构重大更新**
- **核心变更**：实现了“单 Daemon 运行多命名 Agent”的架构模式。每个 Agent 现在拥有独立的工作区、记忆、模型提供者、安全策略、通道和人格配置。
- **配置迁移**：重写了配置 Schema，支持自动迁移现有配置。
- **破坏性变更/风险**：
  - 新架构带来了复杂的配置依赖，已出现若干配置解析与运行时加载问题（如 #6699）。
  - Dashboard 构建路径变更，导致部分安装方式下前端不可用（#7523）。

## 3. 项目进展
今日共有 3 个 PR 合并/关闭，主要集中在修复 v0.8.0 引入的阻塞性问题：
- **[PR #7517](https://github.com/zeroclaw-labs/zeroclaw/pull/7517)** (已合并): 修复了 Subagents 在 ACP 会话中无法继承 `cwd` 的问题。这是 v0.8.0 多 Agent 架构下的关键修复，解决了子代理被错误“监禁”在默认工作区的问题。
- **[PR #7519](https://github.com/zeroclaw-labs/zeroclaw/pull/7519)** (已合并): 修复了 MCP Servers 配置持久化逻辑中的 Bug，解决了增量写入器无法处理数组字段的问题，这对依赖 MCP 工具的用户至关重要。
- **[PR #7520](https://github.com/zeroclaw-labs/zeroclaw/pull/7520)** (已合并): 修复了 CI 流程中 ARM 架构构建失败的问题，确保了 v0.8.0 版本在 ARM 平台上的分发。

**未合并进展**：有大量高质量 PR 处于 Open 状态（47 个），特别是 Discord 通道的功能增强（Slash Commands, Intents 重构）和 MCP 自动重连机制，等待 Review 合并。

## 4. 社区热点
今日讨论最热烈的问题集中在 v0.8.0 的新功能与稳定性矛盾上：
1.  **[Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)** (评论: 7): `tool_filter_groups` 对真实 MCP 工具失效。社区担忧安全策略在 v0.8.0 架构下被绕过，导致未授权工具调用风险。
2.  **[Issue #7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470)** (评论: 7): 委托 Agent 模式下的安全策略冲突。用户在尝试使用 v0.8.0 的多 Agent 协作功能时，发现安全配置互斥导致工作流阻断。
3.  **[Issue #7523](https://github.com/zeroclaw-labs/zeroclaw/issues/7523)** (评论: 1): v0.8.0 Dashboard 不可用。新用户升级后立即遇到的阻碍，反映了发布流程中的构建或打包缺失问题。

## 5. Bug 与稳定性
v0.8.0 发布后暴露了多处严重 Bug，需引起高度重视：

**S0/S1 级别（严重/阻断性）：**
- **[Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)** [S0]: WSL2 环境下连续发生 OOM (Out of Memory)，导致进程被杀。这是一个长期未解决的数据丢失风险问题。
- **[Issue #7523](https://github.com/zeroclaw-labs/zeroclaw/issues/7523)** [S1]: MacOS Brew 安装后 Dashboard 无法加载，提示需手动构建前端，严重影响开箱即用体验。
- **[Issue #6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302)** [S1]: Gemini 模型调用报 400 错误，历史序列化逻辑违反了 Gemini 的 API 约束。
- **[Issue #7263](https://github.com/zeroclaw-labs/zeroclaw/issues/7263)** [S1]: (已通过 PR #7517 修复) Subagents 工作目录继承问题。

**高优先级修复中：**
- **[Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)**: MCP 工具前缀匹配 Bug 导致安全过滤失效。
- **[Issue #6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361)**: OpenAI 兼容 Provider（如 MiniMax）上下文压缩导致 Tool 循环调用。

## 6. 功能请求与路线图信号
- **Discord 集成增强**：一组 PR ([#7524](https://github.com/zeroclaw-labs/zeroclaw/pull/7524), [#7526](https://github.com/zeroclaw-labs/zeroclaw/pull/7526), [#7490](https://github.com/zeroclaw-labs/zeroclaw/pull/7490)) 正在推进 Discord 机器人支持 Slash Commands、Reactions 监听及动态 Intents。这表明社区正积极完善 Zeroclaw 作为 Discord Bot 的能力。
- **插件系统演进**：[PR #7429](https://github.com/zeroclaw-labs/zeroclaw/pull/7429) 引入了 Wasmtime 依赖，意在逐步替代 Extism。这是 Runtime 层面向高性能插件化的重要信号。
- **远程节点管理**：[Issue #6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390) 和 [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) 呼吁实现 Daemon 节点的真实心跳检测与 CLI 注册功能，表明用户对多机集群部署有强烈需求。

## 7. 用户反馈摘要
- **配置复杂度激增**：v0.8.0 的多 Agent 配置虽然强大，但用户反馈在配置 `risk_profile`、`tool_filter_groups` 以及 MCP Server 时极易踩坑，且错误提示不明显。
- **文档滞后**：Issue #6760 和 #7523 均提到 Docker 或 Brew 部署时的文档缺失或路径不一致问题，用户难以通过现有文档完成部署。
- **资源消耗**：WSL2 用户持续反馈内存占用过高 (#5542)，严重影响在资源受限环境下的使用。

## 8. 待处理积压
以下高优先级 Issue 长期未解决或处于 Blocked 状态，建议维护者优先关注：
- **[Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)**: WSL2 OOM 问题（严重级 S0），自 4 月初至今未有根治方案。
- **[Issue #5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)**: MCP stdio 进程在心跳机制下持续泄漏，每个心跳周期产生一个孤儿进程。
- **[PR #5892](https://github.com/zeroclaw-labs/zeroclaw/pull/5892)**: 针对 Provider 兼容性的大型修复 PR（涉及 tool_choice 等核心逻辑），已停滞较长时间，阻塞了部分模型的使用。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-12)

## 1. 今日速览
Hermes Agent 今日社区活跃度显著，过去24小时内新增及活跃 Issue 达 42 条，显示用户反馈积极。然而，项目合并节奏相对较缓，仅关闭/合并 4 个 PR，待合并 PR 积压高达 46 条，反映出代码审查面临较大压力。今日焦点集中在 **Desktop 桌面端稳定性**（多处崩溃与 UI 异常）、**Windows/WSL 平台支持完善** 以及 **多平台 Gateway 适配优化**。整体来看，项目处于功能快速迭代与缺陷修复并行的阶段，亟需加快 PR 处理速度以缓解积压。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
尽管今日合并数量较少（4 条），但待处理队列中包含多项关键改进，预示着下一版本将有较大更新：

*   **Windows 体验重大改进 (PR #44158)：** 提交了 WSL2 执行后端支持，允许 Windows 用户直接在 WSL2 环境中运行工具，解决了长期以来 Windows 本地执行环境的兼容痛点。
*   **性能与稳定性修复 (PR #44577, #25558)：** 
    *   针对今日反馈的 WebSocket 超时问题 (Issue #44560)，提交了修复 PR #44577，通过缓存自定义 Provider 模型发现结果来解除阻塞。
    *   PR #25558 修复了 Gateway 历史记录深度限制未被遵守的 P1 级问题，有助于控制上下文成本。
*   **多平台消息适配：**
    *   PR #44614 增强了 WhatsApp 引用回复上下文的解析。
    *   PR #44647 修复了飞书视频通话邀请卡片的解析问题。
    *   PR #44650 修复了 Cron 任务意外继承交互式会话环境变量的问题，提升了任务隔离性。

## 4. 社区热点
今日讨论最热烈的话题集中在智能化路由与系统健壮性：

*   **[Feature] 智能体自主模型路由 (Issue #16525)：** 该 Issue 获得了 7 条评论和 3 个点赞。用户强烈希望能将 `model_switch` 暴露为 Agent 可调用的工具，使 Agent 能根据任务复杂度自主选择模型（如简单任务用 Flash，复杂任务用 Pro）。这反映了用户对 **成本效益与性能平衡** 的深度诉求，目前的手动或规则路由无法满足动态场景需求。
    *   链接: [NousResearch/hermes-agent Issue #16525](https://github.com/NousResearch/hermes-agent/issues/16525)
*   **[Bug] Skills Index 监控报警 (Issue #38240)：** 自动化监控 Bot 报告 Skills 索引数据陈旧或降级，引发 11 条评论讨论。这表明社区对 **文档与技能中心可用性** 的高度关注。
    *   链接: [NousResearch/hermes-agent Issue #38240](https://github.com/NousResearch/hermes-agent/issues/38240)
*   **[Bug] 桌面端审批弹窗失效 (Issue #37812)：** 该已关闭 Issue 引起广泛讨论（7 评论, 4 点赞）。问题涉及 macOS 桌面端在 `manual` 模式下无法渲染审批弹窗，涉及 Electron GUI 与底层权限流的交互，影响了高风险操作的安全性管控。
    *   链接: [NousResearch/hermes-agent Issue #37812](https://github.com/NousResearch/hermes-agent/issues/37812)

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，主要集中在 Desktop 客户端和配置加载：

*   **P2 | 严重性能问题：WebSocket 超时 (Issue #44560)**
    *   **现象：** `model.options` 处理程序同步调用 HTTP 请求阻塞主线程，导致 WebSocket 超时。
    *   **状态：** **已有修复 PR (#44577)**，通过引入内存缓存解决。
    *   链接: [NousResearch/hermes-agent Issue #44560](https://github.com/NousResearch/hermes-agent/issues/44560)
*   **P3 | Desktop 前端崩溃 (Issue #44562, #41693)**
    *   **现象：** 多名用户报告 Desktop GUI 在处理工具返回数据时触发 `tapClientLookup: Index out of bounds` 错误，导致白屏/崩溃。
    *   **分析：** 前端对非预期数据结构的鲁棒性不足。
    *   链接: [NousResearch/hermes-agent Issue #44562](https://github.com/NousResearch/hermes-agent/issues/44562)
*   **P2 | Windows 更新死锁 (Issue #44557)**
    *   **现象：** Hermes Studio 更新器要求关闭应用，但关闭主进程会连带杀死更新器子进程，导致更新流程卡死。
    *   链接: [NousResearch/hermes-agent Issue #44557](https://github.com/NousResearch/hermes-agent/issues/44557)
*   **P2 | OAuth 认证失败 (Issue #44592)**
    *   **现象：** 部分平台（如 GitHub）OAuth Token 端点返回 `x-www-form-urlencoded` 格式，导致 SDK 解析失败。
    *   链接: [NousResearch/hermes-agent Issue #44592](https://github.com/NousResearch/hermes-agent/issues/44592)
*   **P2 | 配置优先级错误 (Issue #39753)**
    *   **现象：** OpenRouter 目录意外覆盖了用户显式配置的自定义 Provider 设置。
    *   链接: [NousResearch/hermes-agent Issue #39753](https://github.com/NousResearch/hermes-agent/issues/39753)

## 6. 功能请求与路线图信号
*   **WSL2 原生支持 (PR #44158)：** 随着 WSL2 后端 PR 的提交，Windows 用户的开发体验将得到质的飞跃，预计将被高优先级合并。
*   **自定义 Provider UI 配置 (Issue #38975)：** 用户请求在 Desktop UI 中直接配置 OpenAI 兼容的自定义 Provider，而无需手动编辑 YAML，这符合降低使用门槛的趋势。
*   **自主模型切换 (Issue #16525)：** 虽然目前尚未有对应 PR，但该需求讨论热度高，可能成为后续 Agent 智能化能力的重要更新方向。

## 7. 用户反馈摘要
*   **痛点：**
    *   **Windows 支持缺陷明显：** 用户反馈安装程序有死锁问题，本地执行支持不完善（需依赖 WSL2 PR 修复）。
    *   **前端稳定性不足：** Desktop 用户遭遇频繁的界面崩溃和白屏。
    *   **配置逻辑混乱：** 多个 Issue 反映配置优先级（CLI vs Env vs YAML）不符合预期，尤其是 OpenRouter 干扰自定义配置的情况。
*   **满意度：** 用户对项目快速响应新平台需求（如飞书 CardKit 支持 PR #44594）表示认可，但希望提升 Desktop 端的 QA 测试覆盖。

## 8. 待处理积压
*   **PR 积压严重：** 当前有 **46 个 PR** 处于 Open 状态，其中包括关键的 P1 级修复 PR #25558（Gateway 历史深度限制）和 WSL2 支持 PR #44158。建议维护者优先 Review 这两个 PR 以解决核心体验问题。
*   **长期 Issue：** Issue #16525（模型自主路由）自 4 月底开启至今，虽有热度但无明确 Assignee，建议纳入 Roadmap 讨论。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-12)

## 1. 今日速览
PicoClaw 项目今日保持了极高的开发活跃度，共处理了 **31 个 PR 更新**（其中 18 个已合并/关闭）和 **10 个 Issue 更新**。项目刚刚发布了最新的 **Nightly Build (v0.2.9-nightly.20260612)**，包含了对 MCP 协议、依赖库的重要更新以及多项 Bug 修复。社区方面，用户对多模态模型兼容性和平台适配问题关注度较高，特别是在 Windows 平台文件系统操作和 Telegram 机器人论坛功能支持上出现了新的反馈。

## 2. 版本发布
- **版本号**: `nightly` (Nightly Build)
- **Tag**: `v0.2.9-nightly.20260612.413d3749`
- **说明**: 这是一个自动化构建版本，可能存在不稳定性。
- **变更范围**: 相比 `v0.2.9`，包含了主分支最新的代码提交，主要涉及依赖库升级（AWS SDK, MCP SDK, Vite 等）和近期合并的 Bug 修复。
- **链接**: [GitHub Release](https://github.com/sipeed/picoclaw/releases/tag/v0.2.9-nightly.20260612.413d3749)

## 3. 项目进展
今日共有 **18 个 PR 被合并或关闭**，项目整体质量与稳定性显著提升：

- **核心功能修复**：
    - [PR #2957](https://github.com/sipeed/picoclaw/pull/2957) **[已合并]**：修复了 Pico Channel 流式传输过程中 `tool_calls` 消息丢失的问题，这是针对 Issue #2958 的关键修复，保障了工具调用场景的稳定性。
    - [PR #2696](https://github.com/sipeed/picoclaw/pull/2696) **[已合并]**：支持 MCP 请求从 Channel 上下文动态传递 Headers，增强了鉴权与上下文流转能力。
    - [PR #3067](https://github.com/sipeed/picoclaw/pull/3067) **[已合并]**：修复了 Web UI 中 "Session Scope" 设置无法持久化保存的问题。
- **平台兼容性**：
    - [PR #2934](https://github.com/sipeed/picoclaw/pull/2934) **[已合并]**：修复了 WhatsApp 原生模式下的配置检测逻辑，支持 `use_native` 标志。
- **依赖维护**：
    - 进行了大规模依赖库升级，包括 `aws-sdk-go-v2`、`golang.org/x/sync`、`MCP Go SDK` (v1.5.0 -> v1.6.1) 以及前端构建工具链，确保项目依赖的安全性与新特性支持。

## 4. 社区热点
今日社区讨论焦点主要集中在平台兼容性与协议完善：

- **[Issue #2472](https://github.com/sipeed/picoclaw/issues/2472)**: Windows 平台路径分隔符问题持续引发关注。用户指出 `list_dir` 在 Windows 下因反斜杠与 Go `fs.FS` 要求不兼容而报错，该 Issue 活跃度较高（👍 1），反映出桌面端用户对跨平台兼容性的强烈需求。
- **[Issue #2984](https://github.com/sipeed/picoclaw/issues/2984)**: 针对 Pico WebSocket 客户端提议增加显式的 "Turn Completion" 信号。这反映了开发者在构建复杂 Agent 客户端时，对于确定 Agent 状态机流转（何时结束一轮对话）的刚需，目前该提议已获 2 个赞。
- **[Issue #3109](https://github.com/sipeed/picoclaw/issues/3109)**: 提出了 Channel 级别的权限范围控制需求，建议限制群组/频道中的危险操作。这显示了用户将 PicoClaw 应用于生产环境时的安全顾虑。

## 5. Bug 与稳定性
今日新增及处理的 Bug 如下，按严重程度排序：

- **🔴 严重**:
    - [Issue #3080](https://github.com/sipeed/picoclaw/issues/3080) **[已关闭]**: 首次运行设置时的 `allowed_cidrs` 安全限制可通过本地回环代理绕过。该安全漏洞已在近期提交中修复。
- **🟠 中等**:
    - [Issue #3111](https://github.com/sipeed/picoclaw/issues/3111): 使用最新的 **Gemini 3.5 Flash** 模型执行工具时报 `400 Bad Request`，原因疑似后端 Schema 缺少 `thought_signature` 字段。这是对新模型支持的阻断性问题。
    - [Issue #3110](https://github.com/sipeed/picoclaw/issues/3110): Telegram Adapter 在 Forum（话题群）模式下回复消息错位，回复内容被发送到默认话题而非具体子话题，影响群组用户体验。
    - [Issue #3094](https://github.com/sipeed/picoclaw/issues/3094): 异步子代理任务完成时产生重复消息推送，影响消息流的整洁性。
- **🟡 一般**:
    - [Issue #3108](https://github.com/sipeed/picoclaw/issues/3108): 非视觉模型（如 DeepSeek V4）尝试处理图片请求时产生幻觉，而非报错或提示不支持，需增加模型能力检测。

## 6. 功能请求与路线图信号
- **Agent 协作架构**: [PR #2937](https://github.com/sipeed/picoclaw/pull/2937) 正在推进内部 Agent Collaboration Bus，引入持久化邮箱和协作线程。尽管目前尚未合并，但这表明 PicoClaw 正向多智能体协作架构演进。
- **权限模型细化**: Issue #3109 提出的 Channel 级权限控制建议，可能成为后续安全模块优化的方向，特别是针对群聊机器人的操作沙箱机制。
- **协议完善**: Issue #2984 关于 WebSocket 会话结束信号的讨论，预示着 Pico Protocol 可能会在下一版本中增加更完善的会话状态同步机制。

## 7. 用户反馈摘要
- **跨平台痛点**: Windows 用户在文件操作方面体验不佳（Issue #2472），期望有更好的路径兼容性处理。
- **新模型适配焦虑**: 用户希望第一时间使用最新模型（如 Gemini 3.5 Flash），但常因 Schema 变动遭遇兼容性问题（Issue #3111）。
- **消息推送体验**: 在异步子代理场景下，用户对消息的准确性和排版有较高要求，不希望收到未经处理的中间结果（Issue #3094）。

## 8. 待处理积压
- **长期未解决**: [Issue #2472](https://github.com/sipeed/picoclaw/issues/2472) (Windows path bug) 自 4 月开启至今未修复，建议维护者优先处理以改善 Windows 用户开发体验。
- **停滞 PR**: [PR #2956](https://github.com/sipeed/picoclaw/pull/2956) 关于 `security.yml` 合并逻辑的修复，以及 [PR #3048](https://github.com/sipeed/picoclaw/pull/3048) 关于 MCP 参数解析的修复，目前处于 Open 状态且近期无更新，建议维护者 Review 是否可以合并。
- **架构性 PR**: [PR #2937](https://github.com/sipeed/picoclaw/pull/2937) 涉及核心 Agent 协作机制，代码量大且影响面广，目前仍处于 Open 状态，建议社区持续关注其评审进度。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-12)

## 1. 今日速览
NanoClaw 项目今日展现出极高的开发活跃度，尽管没有新版本发布，但代码合并率极高（14次更新中9次已合并/关闭），显示出维护者对代码库的高效治理。核心进展集中在底层架构重构，特别是对多机器人底层支撑和多渠道适配器的修复。社区方面，关于智能体记忆系统的长期规划引起了重点讨论，显示出项目正从功能堆叠向架构优化阶段过渡。整体项目健康度良好，Bug 响应速度极快。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 **9 个 PR 被合并或关闭**，项目在架构扩展性与稳定性修复方面取得了显著突破：

*   **架构重构与功能增强**：
    *   **PR #2733 [MERGED]**: 实现了 "Native channel-instance dimension"，引入多机器人底层支持，这是向多实例并行运行迈出的关键一步。
    *   **PR #2734 [MERGED]**: 增加了 `getDeliveryAction` 读取侧支持，完善了动作注册机制。
    *   **PR #2737 [MERGED]**: 新增审批解决回调注册功能，允许模块以附加方式观察审批状态。
    *   **PR #2740 [MERGED]**: 实现按组空闲超时功能，优化了临时会话的清理逻辑。

*   **关键修复**：
    *   **PR #2738 [MERGED]**: 修复了 `writeOutboundDirect` 以只读模式打开数据库导致静默丢弃指令的严重 Bug，直接解决了 Issue #2495。
    *   **PR #2736 [MERGED]**: 修复了刚唤醒容器的陈旧处理声明问题，增加了宽限期。

## 4. 社区热点
今日讨论最活跃的话题聚焦于 **智能体记忆系统的重构**：

*   **Issue #1356 [OPEN]**: 作者 @Ordinath 指出当前基于 Markdown 索引的记忆系统虽然能支撑目前规模（~54个文件），但已显现扩展瓶颈。该 Issue 提议重新设计一套更全面、可扩展的记忆架构，获得了 6 个赞和 2 条深度评论。这反映了社区对 NanoClaw 从"能跑"到"大规模生产可用"的强烈诉求。
    *   链接: [nanocoai/nanoclaw Issue #1356](https://github.com/nanocoai/nanoclaw/issues/1356)

## 5. Bug 与稳定性
今日修复了多个影响运行时稳定性的关键 Bug，部分新提交的修复正等待合并：

*   **【严重 - 已修复】数据库写入静默失败**
    *   **Issue**: #2495 描述了 `writeOutboundDirect` 错误地以只读模式打开数据库，导致指令被静默丢弃且未抛出异常。
    *   **状态**: 已通过 **PR #2738** 修复并合并。
    *   链接: [nanocoai/nanoclaw Issue #2495](https://github.com/nanocoai/nanoclaw/issues/2495)

*   **【中等 - 待合并】CLI 创建连线副作用缺失**
    *   **Issue**: PR #2743 指出 `ncl wirings create` 跳过了创建 `agent_destinations` 的副作用，导致代理发送的消息被丢弃。
    *   **状态**: 修复 PR 已提交，等待审核。

*   **【中等 - 待合并】Signal 适配器反应丢失**
    *   **Issue**: PR #2744 报告 Signal 适配器静默丢弃了代理的 `add_reaction` 输出。
    *   **状态**: 修复 PR 已提交，等待审核。

## 6. 功能请求与路线图信号
*   **记忆系统重构 (Issue #1356)**: 社区正在寻求超越简单文件存储的记忆解决方案，可能涉及向量数据库或结构化存储的引入，这是下一阶段架构演进的重要信号。
*   **PR Factory 工作流 (PR #2742)**: **PR #2742** 提出了一个有趣的 "PR Factory" 配方，旨在自动化 PR 的审查、分类和测试流程。虽然目前是一个配方而非核心代码，但这表明社区正在探索利用 NanoClaw 自身能力来辅助开发运维。
    *   链接: [nanocoai/nanoclaw PR #2742](https://github.com/nanocoai/nanoclaw/pull/2742)

## 7. 用户反馈摘要
从今日的 Issue 和 PR 描述中提炼出以下用户/开发者痛点：
*   **静默失败是最大痛点**: 无论是 #2495 的数据库写入失败，还是 #2744 的 Signal 表情回应丢失，用户对"操作看似成功但实际无效果"的情况容忍度很低。
*   **扩展性焦虑**: Issue #1356 表明核心用户已经开始担心现有架构在大规模智能体场景下的表现，渴望更健壮的底层存储机制。
*   **多实例支持需求**: PR #2733 的合并表明，单实例运行已无法满足部分高级用户的场景，多实例/多机器人支持是刚需。

## 8. 待处理积压
*   **PR #2685**: 关于 Signal 群组输入状态、回应及引用回复的文档更新已提交 8 天，目前仍处于 Open 状态。建议维护者及时审核合并，以便用户更好地使用新功能。
    *   链接: [nanocoai/nanoclaw PR #2685](https://github.com/nanocoai/nanoclaw/pull/2685)
*   **PR #2732**: 针对 Host 和 Agent-runner 的加固修复，涉及对抗性验证的安全审计，属于关键基础设施改进，建议优先处理。
    *   链接: [nanocoai/nanoclaw PR #2732](https://github.com/nanocoai/nanoclaw/pull/2732)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-06-12)

## 1. 今日速览
NullClaw 项目今日整体活跃度处于低位，代码库无变更。过去 24 小时内未观测到任何 Pull Request 的合并、关闭或新开，也无新版本发布。社区方面仅新增 1 条 Issue 讨论，聚焦于本地模型集成的兼容性问题。整体而言，项目今日处于维护静默期，需关注本地模型适配的稳定性反馈。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
过去 24 小时内无合并或关闭的 PR，代码提交活跃度为零。项目在功能迭代和代码重构方面今日未有实质性推进。

## 4. 社区热点
今日社区唯一活跃点是关于本地模型运行的 Bug 反馈。
*   **Issue #952 [bug] Local model using ollama returns incomplete answers**
    *   链接: [https://github.com/nullclaw/nullclaw/issues/952](https://github.com/nullclaw/nullclaw/issues/952)
    *   分析: 该 Issue 报告了在使用 Ollama 运行 Gemma 模型时，智能体返回的答案不完整，句子被截断。这反映了用户对于本地部署的强烈需求，以及在非默认模型适配上的稳定性挑战。

## 5. Bug 与稳定性
今日新增 1 个 Bug 报告，暂无修复 PR：
*   **[中等] 本地模型输出截断 (#952)**
    *   详情: 用户在使用 Ollama 部署 Gemma 模型时，智能体无法输出完整语句。
    *   严重程度: 中等。虽然未导致程序崩溃，但严重影响基于本地模型场景下的可用性与用户体验。
    *   状态: OPEN，暂无官方回复或修复 PR。
    *   链接: [https://github.com/nullclaw/nullclaw/issues/952](https://github.com/nullclaw/nullclaw/issues/952)

## 6. 功能请求与路线图信号
今日无新增功能请求。结合 Issue #952 可推断，**本地模型适配** 是用户关注的核心方向。项目若能提升对 Ollama 等本地推理框架的兼容性与容错率，将是下一阶段优化用户体验的重要切入点。

## 7. 用户反馈摘要
*   **痛点**: 用户在实际操作中，将 NullClaw 与本地模型结合时遇到了输出中断的问题，表明项目在处理本地模型流式响应或 Token 限制方面可能存在缺陷。
*   **场景**: 用户希望在离线或私有化环境下通过 Ollama 运行 Gemma 等开源模型，替代默认云端模型。

## 8. 待处理积压
*   **新增积压**: Issue #952 需要维护者关注。建议开发团队排查是否为响应流解析错误、最大 Token 限制配置问题，或是特定模型Prompt模板不兼容导致。

---
*数据来源: NullClaw GitHub Repository | 分析师: AI*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报 (2026-06-12)**

### 1. 今日速览
IronClaw 项目今日保持极高的活跃度，核心焦点集中在 **"IronClaw Reborn"** 架构的稳定性构建与 WebUI v2 的用户体验完善。过去 24 小时内共有 47 个 PR 更新与 32 个 Issue 更新，Issues 的关闭数与新开数持平（各 16 条），显示维护团队对社区反馈的响应速度极快。项目目前正处于生产环境切换的关键冲刺期，大量修复围绕本地开发环境配置、工具调用容错及前端交互细节展开。

### 2. 版本发布
今日无新版本 Release 发布。
*注意：PR #3708 正在进行版本发布准备工作，计划将 `ironclaw` 版本从 0.24.0 升级至 0.29.1，涉及部分 API 破坏性变更，建议关注后续合并动态。*

### 3. 项目进展
今日共有 **26 个 PR 被合并/关闭**，显著推进了 Reborn 版本的生产就绪度：

*   **生产环境切换就绪**：PR #4763 关闭了 Issue #4621，完成了生产环境切换的最终验收与回滚机制验证，标志着 Reborn 版本向生产环境迈出了决定性的一步。
*   **可观测性增强**：PR #4760 成功将 WebUI v2 的日志页面连接至真实的运行时日志源，解决了此前日志页面为空的痛点（Issue #4758）。
*   **工具调用稳定性修复**：PR #4784 修复了工具运行时不可用导致 Agent 循环意外中止的问题，现在能够将其正确处理为工具调用失败并尝试恢复。
*   **前端交互修复**：PR #4757 修复了自动化页面点击触发运行后的空白页问题；PR #4782 统一了出站状态存储，修复了 Slack 消息投递默认设置失效的问题。
*   **安全与集成**：PR #4744 加固了 GSuite OAuth 运行时，并修复了扩展激活的鉴权门禁逻辑。

### 4. 社区热点
今日讨论最活跃的 Issue 是关于项目架构演进的长线规划：
*   **[#3036 [EPIC] Configuration-as-Code for IronClaw Reborn](https://github.com/nearai/ironclaw/issues/3036)**：该 Issue 获得了 7 条评论和 1 个点赞。社区与维护者正在讨论如何实现声明式配置，以解决当前 `.env`、JSON 配置和运行时标志混杂导致的难以审计和版本化的问题。这表明项目正致力于提升企业级部署的可维护性。

### 5. Bug 与稳定性
今日报告了多个影响本地开发体验的 Bug，主要集中在 WebUI v2 和本地凭证管理：

*   **[P0 - 核心功能阻塞]** [Issue #4761](https://github.com/nearai/ironclaw/issues/4761)：Agent 在工具调用连续失败后会直接停止运行，无法自我恢复。目前无修复 PR，需关注。
*   **[P1 - 配置/认证]** [Issue #4703](https://github.com/nearai/ironclaw/issues/4703)：NEAR AI 模型选择器错误地保存了显示名称而非模型 ID，导致配置失效。
*   **[P1 - 配置/认证]** [Issue #4766](https://github.com/nearai/ironclaw/issues/4766) (已关闭)：重启后 Chat runtime 无法读取 UI 保存的凭证。
*   **[P2 - 文件系统]** [Issue #4759](https://github.com/nearai/ironclaw/issues/4759)：使用工作区相对路径创建文件时出现路径重复（如 `workspace/workspace/demo/a.txt`）。
*   **[P2 - UI交互]** [Issue #4748](https://github.com/nearai/ironclaw/issues/4748)：代码块的“自动换行/不换行”切换按钮无实际效果。

### 6. 功能请求与路线图信号
*   **自动化测试覆盖率提升**：Issue #4775 提议建立 Reborn 二进制文件的自动化 QA 体系，目标是实现零人工介入的 E2E 测试。这是确保 Reborn 架构稳定性的关键基建。
*   **全局工具权限设置**：Issue #4776 建议增加“总是允许符合条件的工具”的全局设置，以减少频繁的交互式审批弹窗，提升 Agent 自主运行的流畅度。
*   **外部挂载与扩展**：PR #4785 提出了 Reborn 持久化租户沙箱及 Agent 自构建扩展的设计文档，预示着未来 Agent 将具备更强的自我进化与环境隔离能力。

### 7. 用户反馈摘要
从活跃用户 @sunglow666 的反馈中可以看出，用户在**本地部署和初次使用**阶段遇到较多阻碍：
*   **SSO 与凭证管理痛点**：用户反馈本地环境下 SSO 设置失败（#4705）、凭证重启后丢失、模型配置保存错误等问题，说明本地鉴权流程仍需打磨。
*   **UI 反馈缺失**：用户指出 Shell 命令被拒绝后无任何提示（#4764）、文件创建后在 WebUI 中不可见（#4750），反映出前端与后端状态同步存在盲区。
*   **对 Agent 容错能力的期待**：用户希望 Agent 在遇到工具错误时能更具韧性，而不是直接停止（#4761）。

### 8. 待处理积压
*   **PR #3708 (Release)**：作为版本发布的核心 PR，已打开近一个月，涉及多个 Crate 的破坏性更新，建议优先处理合并或跟进进度。
*   **Issue #3036 (Config-as-Code)**：作为长线 Epic，今日有更新，建议持续关注其里程碑进展，这将是 Reborn 版本走向大规模生产部署的关键特性。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-12)

## 1. 今日速览
LobsterAI 今日开发活跃度极高，呈现出显著的“功能迭代与积压清理”并行状态。过去 24 小时内项目合并/关闭了 15 个 PR，仅有 1 个 PR 处于待合并状态，显示出维护团队高效代码审查与合并节奏。重点推进了实时语音输入（ASR）、HTML 分享能力增强及系统稳定性修复。社区方面，用户对多 Agent 协作架构表现出强烈需求，同时对 Token 消耗异常保持高度敏感。整体项目健康度良好，正处于功能丰富与稳定性优化的快速上升期。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **15 个 PR 被合并或关闭**，主要围绕新特性开发与历史积压清理，项目在交互体验与底层稳定性上取得重大进展：

*   **新特性上线：**
    *   **实时语音输入**：PR [#2148](https://github.com/netease-youdao/LobsterAI/pull/2148) 为 Cowork 模块引入实时 ASR 模式，支持 WebSocket 流式传输音频，显著提升语音交互体验。
    *   **分享能力增强**：PR [#2146](https://github.com/netease-youdao/LobsterAI/pull/2146) 和 [#2151](https://github.com/netease-youdao/LobsterAI/pull/2151) 完善了 HTML 分享功能，支持公开访问与分享码切换，并引入文件分享机制。
    *   **自动化与容错**：PR [#1483](https://github.com/netease-youdao/LobsterAI/pull/1483) 引入模型自动故障转移机制；PR [#1484](https://github.com/netease-youdao/LobsterAI/pull/1484) 新增 Gmail 邮件触发 Agent 自动化能力。

*   **稳定性与性能修复：**
    *   **内存溢出修复**：PR [#2149](https://github.com/netease-youdao/LobsterAI/pull/2149) 针对 OpenClaw 网关进程在多渠道长时运行下的 OOM 崩溃问题，显式提升了 V8 堆内存限制。
    *   **超时与竞态优化**：PR [#2152](https://github.com/netease-youdao/LobsterAI/pull/2152) 将预发送模型同步超时时间延长至 90s，修复了慢网关导致的消息丢失问题；PR [#2147](https://github.com/netease-youdao/LobsterAI/pull/2147) 修复了会话启动停止时的竞态条件。

*   **积压清理**：
    *   合并了一批 4 月份提交的优化 PR，涉及技能安装体验优化 ([#1479](https://github.com/netease-youdao/LobsterAI/pull/1479), [#1480](https://github.com/netease-youdao/LobsterAI/pull/1480))、UI 细节修复 ([#1481](https://github.com/netease-youdao/LobsterAI/pull/1481)) 及内存泄漏修复 ([#1478](https://github.com/netease-youdao/LobsterAI/pull/1478))。

## 4. 社区热点
今日最活跃的讨论集中在功能需求的表达上，反映了用户对产品架构演进的期待：

*   **Issue [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) [多 Agent 协作与模型绑定]**
    *   **热度**：评论 2 条，虽标记为 Stale 但用户持续关注。
    *   **分析**：用户明确提出了“Manager Agent”调度模式的需求，期望实现 Agent 小组协作。这反映了 LobsterAI 作为单点工具已无法满足复杂场景，用户正寻求从“对话工具”向“自动化工作流平台”的跨越。用户特别提到竞品体验不如 LobsterAI，这是留住核心用户的关键机会点。

*   **Issue [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) [Token 重复输出疑云]**
    *   **热度**：评论 1 条，新近提出。
    *   **分析**：用户怀疑存在重复输出导致 Token 浪费。这直接关系到用户成本（Money），属于高优先级痛点，需官方尽快确认是前端渲染问题还是后端逻辑缺陷。

## 5. Bug 与稳定性
今日报告的关键 Bug 集中在资源消耗与逻辑异常，部分已有修复方案：

*   **[严重] 内存溢出崩溃 (OOM)**
    *   **描述**：OpenClaw 网关在长时间运行及多渠道负载下频发 OOM 崩溃。
    *   **状态**：**已修复**。PR [#2149](https://github.com/netease-youdao/LobsterAI/pull/2149) 已合并，通过提高堆内存限制缓解问题。
*   **[中等] Token 消耗异常怀疑**
    *   **描述**：Issue [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) 报告输出文字重复，怀疑大量消耗 Token。
    *   **状态**：待确认/待处理。
*   **[中等] 慢网关消息丢失**
    *   **状态**：**已修复**。PR [#2152](https://github.com/netease-youdao/LobsterAI/pull/2152) 解决了冷启动或进程卡顿导致的消息丢弃问题。
*   **[轻微] 定时任务编辑覆盖 Bug**
    *   **描述**：编辑定时任务后描述被清空、状态被强制覆盖。
    *   **状态**：**已修复**。PR [#1482](https://github.com/netease-youdao/LobsterAI/pull/1482) 已合并。

## 6. 功能请求与路线图信号
结合 Issue 与今日合并的 PR，路线图呈现出以下趋势：

*   **多模态交互增强**：PR [#2148](https://github.com/netease-youdao/LobsterAI/pull/2148)（实时 ASR）的合并表明项目正发力语音交互体验，这为未来更自然的 Agent 对话打下基础。
*   **高可用与容灾**：PR [#1483](https://github.com/netease-youdao/LobsterAI/pull/1483)（模型故障转移）合并，响应用户对服务稳定性的需求，可能是下一版本的重要卖点。
*   **多 Agent 架构呼声**：Issue [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) 再次呼吁“单 Agent 绑定模型”及“Agent 小组”。目前项目已具备单实例多渠道能力，多 Agent 编排（Orchestration）极可能成为下一阶段的核心竞争力，建议纳入路线图规划。

## 7. 用户反馈摘要
*   **痛点**：Token 消耗透明度低，用户对重复输出极其敏感（Issue [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121)）。
*   **场景**：自动化办公需求强烈，用户已尝试使用 Gmail 触发（对应 PR [#1484](https://github.com/netease-youdao/LobsterAI/pull/1484)）及多 Agent 协作（Issue [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462)）。
*   **满意度**：UI 交互体验获得认可，有用户表示相比竞品“交互体验确实不如 lobster ai”（Issue [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) 评论），这是项目的重要护城河。

## 8. 待处理积压
*   **PR [#1459](https://github.com/netease-youdao/LobsterAI/pull/1459) [技能 Tooltip 优化]**
    *   状态：Open。该 PR 优化了技能 Hover 时的描述展示，属于体验优化类，已停留较长时间（Stale），建议维护者评估是否合并以提升技能市场的易用性。
*   **Issue [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) [多 Agent 协作能力]**
    *   状态：Stale。这是一个长期需求，目前官方尚未给出明确的排期或回应。鉴于今日有用户再次激活该 Issue，建议产品团队对此进行规划反馈，避免核心用户流失。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 (2026-06-12)

## 1. 今日速览
Moltis 项目今日整体活跃度平稳，核心开发活动集中在修复连接器层面的关键问题。虽然暂无新版本发布，但项目组针对 WhatsApp 网关的消息丢失问题提交了重要修复 PR，显示出维护者对系统稳定性的持续关注。社区方面，今日新增一个关于 Fastmail MCP 授权失败的 Bug 报告，表明用户正在积极尝试将 Moltis 应用于更广泛的邮件与 AI Agent 集成场景。整体而言，项目处于“修内功、稳连接”的维护阶段。

## 2. 版本发布
无。

## 3. 项目进展
今日无已合并的 PR，但有一个关键修复 PR 提交待审核：

*   **PR #1116: 修复 WhatsApp 回复消息在隐私聊天中静默丢失的问题**
    *   **链接:** [moltis-org/moltis PR #1116](https://github.com/moltis-org/moltis/pull/1116)
    *   **进展详情:** 该 PR 由 @juanlotito 提交，旨在解决向启用了隐私设置的 WhatsApp 用户（@lid chats）发送回复时消息被静默丢弃的问题。此前，网关虽然成功生成回复并调用发送接口，但消息无法送达且无回执。该修复通过重写 PN JID 的方式确保消息正确路由。
    *   **推进评估:** 这是一个针对特定场景（隐私用户）的关键性修复，解决了“假发送”的严重体验问题，一旦合并，将显著提升 WhatsApp 渠道的可靠性。

## 4. 社区热点
今日社区讨论焦点主要集中在新集成的兼容性问题上：

*   **Issue #1115: Fastmail MCP 授权失败**
    *   **链接:** [moltis-org/moltis Issue #1115](https://github.com/moltis-org/moltis/issues/1115)
    *   **热度分析:** 该 Issue 为今日新开，迅速获得关注。用户报告在使用 Fastmail 进行 MCP (Model Context Protocol) 授权时遇到阻断性错误。
    *   **背后诉求:** 这反映了用户希望将 Moltis 作为个人 AI 助理中枢，结合邮件服务（Fastmail）进行自动化处理的强烈需求。MCP 作为连接 AI 与外部数据源的关键协议，其授权流程的顺畅度直接决定了用户的首用体验（OBE）。

## 5. Bug 与稳定性
今日报告的 Bug 按严重程度排列如下：

*   **P1 - 功能受损/数据丢失 (已有 Fix PR)**
    *   **问题描述:** WhatsApp 网关向隐私用户发送回复时消息静默丢失，用户界面显示已发送，但实际未送达。
    *   **状态:** 修复方案已提交 ([PR #1116](https://github.com/moltis-org/moltis/pull/1116))，等待合并。

*   **P2 - 功能阻断/授权失败**
    *   **问题描述:** Fastmail MCP 集成无法完成授权流程，导致邮件相关功能不可用。
    *   **状态:** Issue 已开 ([Issue #1115](https://github.com/moltis-org/moltis/issues/1115))，目前暂无修复 PR 提交，等待开发团队响应。

## 6. 功能请求与路线图信号
*   **MCP 生态扩展:** Issue #1115 侧面印证了用户对 MCP 协议支持广度的需求。Fastmail 作为一个注重隐私的邮件服务商，其用户群与 Moltis 的开源/隐私导向用户群高度重合。这暗示项目后续版本应加强对第三方 MCP 服务器授权标准（如 OAuth 2.0 流程差异）的兼容性测试。

## 7. 用户反馈摘要
*   **痛点:** 用户 @kmath313 在 Issue #1115 中反馈授权环节受阻，这表明在集成第三方服务时，错误提示信息或预检步骤可能不够明确，导致用户在配置过程中受阻。
*   **场景:** 用户正尝试构建“AI + 个人邮件系统”的自动化工作流，期待 Moltis 能成为连接 LLM 与私人数据的桥梁。

## 8. 待处理积压
基于今日数据，以下事项需维护者优先关注：

1.  **待合并 PR:** [PR #1116](https://github.com/moltis-org/moltis/pull/1116) 涉及消息投递可靠性，建议维护者尽快 Code Review 并合并，避免影响用户体验。
2.  **新 Issue 响应:** [Issue #1115](https://github.com/moltis-org/moltis/issues/1115) 涉及新用户接入，建议尽快确认是文档说明不足还是代码层面的 Bug，以免挫伤新贡献者积极性。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (QwenPaw) 项目动态日报 - 2026-06-12**

### 1. 今日速览
今日 QwenPaw 项目呈现高活跃度状态，过去 24 小时内共有 30 个 Issue 更新与 39 个 PR 更新。项目团队紧急发布了 v1.1.11.post1 和 v1.1.11.post2 两个修补版本，重点解决了 v1.1.11 引入的严重桌面端 SSL 证书错误与启动崩溃问题。社区方面，关于后端架构从 AgentScope 1.x 迁移至 2.0 的讨论热度较高，同时 Windows 桌面端的内存泄漏与进程残留问题成为新的用户痛点。整体来看，项目正处在架构重构与稳定性修复并行的关键阶段。

### 2. 版本发布
**v1.1.11.post2 & v1.1.11.post1**
- **更新内容**：主要针对 v1.1.11 版本的回归问题进行修复。包括回退了导致 Discord 打包后编译检查失败的提交，修复了 OpenSSL 3.5 版本回归导致的桌面端无法启动问题，并对 UI 样式进行了微调（工具卡片标题截断）。
- **破坏性变更**：无明确破坏性 API 变更，但修复了上一版本中严重的启动阻塞问题。
- **迁移注意事项**：建议所有 v1.1.11 用户尽快升级至 post2 版本，以避免 SSL 错误导致的桌面端不可用。Windows 用户需注意新版可能仍存在进程残留问题（见 Bug 章节）。
- **链接**：[v1.1.11.post2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.11.post2)

### 3. 项目进展
今日项目在架构重构与稳定性修复两方面均有显著进展：
- **架构重构**：核心 PR #5067 提出引入统一的 Agent OS Driver 抽象层，旨在解决外部能力调用（MCP/A2A/ACP）协议差异大的问题；PR #5078 提出了 Runtime 2.0 模块化架构，重构了 Runner 执行路径。这两个 PR 标志着项目正在向更解耦、易扩展的下一代架构演进。
- **功能修复与优化**：PR #5125 加强了 Windows CI 构建流程以应对 crates.io 的网络波动；PR #5144 修复了向量模型配置在特定 UI 操作下丢失的 Bug；PR #5136 合并了巴西葡萄牙语的完整翻译。
- **安全增强**：PR #5028（已关闭）解决了不同安装实例共享 OS 钥匙串主密钥的安全隐患，隔离了安装目录的密钥权限。

### 4. 社区热点
- **[OPEN] AgentScope 2.0 迁移讨论** ([#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727))
  - **热度**：9 评论，2 点赞
  - **诉求**：维护者 @rayrayraykk 发起的重大迁移计划，计划将后端依赖从 AgentScope 1.x 升级至 2.0。社区关注点在于新架构的 API 兼容性及运行时模型的变更，此 Issue 标志着项目将迎来一次底层大换血。
- **[OPEN] Windows 客户端进程持续增加** ([#5138](https://github.com/agentscope-ai/QwenPaw/issues/5138))
  - **热度**：3 评论
  - **诉求**：用户反馈 v1.1.11.post2 版本在 Windows 下仍存在严重的内存泄漏与进程残留问题，导致内存占用超 90%，影响系统稳定性。
- **[OPEN] 定时任务无法触发** ([#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064))
  - **热度**：8 评论
  - **诉求**：用户报告 Agent 生成的定时任务虽创建成功但无法触发执行，且不支持手动编辑，严重影响自动化工作流。

### 5. Bug 与稳定性
今日报告的 Bug 集中在桌面端稳定性与 UI 配置持久化上，严重程度较高：
1.  **[严重] Windows 桌面端内存泄漏** ([#5138](https://github.com/agentscope-ai/QwenPaw/issues/5138))
    - 状态：Open
    - 描述：v1.1.11.post2 版本打开后进程持续增加，内存占用飙升至 90% 以上。
    - 修复：暂无 Fix PR，需高度关注。
2.  **[严重] SSL 证书错误与无限进程占满内存** ([#5106](https://github.com/agentscope-ai/QwenPaw/issues/5106))
    - 状态：Closed (旧版已修复/新版仍有相关问题)
    - 描述：Tauri 端 SSL 证书异常导致黑屏死机。相关修复已包含在今日发布的 post 版本中，但与 #5138 存在关联性。
3.  **[中等] 向量模型配置丢失** ([#5137](https://github.com/agentscope-ai/QwenPaw/issues/5137))
    - 状态：Open
    - 描述：工作区配置页面中，若未展开自动记忆搜索卡片即点击保存，会导致配置丢失。
    - 修复：已有 PR #5144 提交修复方案，待合并。
4.  **[中等] 附件下载错误** ([#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140))
    - 状态：Open
    - 描述：v1.1.11.post2 版本中，docx/pdf 等非纯文本文件点击下载时报 404 错误。

### 6. 功能请求与路线图信号
- **Agent OS Driver 抽象层** ([#5067](https://github.com/agentscope-ai/QwenPaw/pull/5067))：提议统一外部能力调用接口，可能成为 Runtime 2.0 的核心组件。
- **Agent 团队协作模式** ([#5139](https://github.com/agentscope-ai/QwenPaw/issues/5139))：用户请求增加类似 WorkBuddy 的 Agent Team/Swarm 协作能力，这符合多智能体协作的发展趋势。
- **上下文压缩集成** ([#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063))：提议集成 Headroom 压缩层以减少 60-95% 的 Token 消耗，针对长上下文场景的优化需求强烈。
- **代码补全支持** ([#5131](https://github.com/agentscope-ai/QwenPaw/issues/5131))：用户请求在 Coding 模式下支持代码补全功能，补全 IDE 能力拼图。

### 7. 用户反馈摘要
- **桌面端体验下滑**：近期版本（v1.1.11 系列）在 Windows 平台频繁出现 SSL 错误、进程残留和内存泄漏，导致部分用户回退至旧版（v1.1.5.post2），稳定性成为最大槽点。
- **UI 配置易用性问题**：折叠面板的设计导致表单验证逻辑存在盲区，用户在未展开面板的情况下保存会丢失关键配置（如向量模型），需优化交互逻辑。
- **功能缺失反馈**：相比竞品，用户对对话队列、Token 统计准确性、引用回复等功能呼声较高。
- **开源贡献活跃**：社区贡献了 UI 设计语言、葡萄牙语翻译以及核心架构的 PR，显示项目社区生态较为健康。

### 8. 待处理积压
- **#4727 [AgentScope 2.0 迁移]**：此重大变更 Issue 目前处于 Open 状态，尚未有合并的 PR，建议维护者尽快明确迁移时间表与 Breaking Change 细节。
- **#5064 [定时任务失效]**：该 Bug 已持续数日，目前仍无官方回复或修复 PR，影响自动化场景用户的使用信心。
- **#5138 [Windows 进程泄漏]**：作为今日新发的严重 Bug，急需维护者确认并在下一版本中修复。

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