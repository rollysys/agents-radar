# OpenClaw 生态日报 2026-03-13

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-13 10:28 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
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

# OpenClaw 项目动态日报 (2026-03-13)

## 1. 今日速览
OpenClaw 今日迎来了 **v2026.3.12** 重大版本更新，带来了全新的 Dashboard v2 界面与 GPT-5.4 模型支持，项目迭代速度惊人。社区活跃度极高，过去 24 小时内 Issues 活动高达 **500 条**（新增 282，关闭 218），PR 活动也达到 **500 条**，显示维护团队响应迅速。然而，新版本的发布也引入了多个回归问题，特别是 UI 崩溃和连接超时，导致 Bug 报告激增，社区处于“痛并快乐着”的活跃状态。

## 2. 版本发布
### [v2026.3.12](https://github.com/openclaw/openclaw/releases/tag/v2026.3.12)
**更新亮点：**
- **Control UI/dashboard-v2 (重构)**: 由 @BunsDev 贡献，彻底重构了网关仪表板。新增模块化视图，集成了 Command Palette（命令面板）、移动端底部标签栏，以及更丰富的聊天工具（斜杠命令、搜索、导出、置顶消息）。
- **模型支持**: 集成 **OpenAI GPT-5.4**。

**破坏性变更与迁移注意：**
- 虽然官方 Release Note 未明确列出，但从社区反馈看，新 UI 可能改变了部分路由逻辑，导致旧版会话状态或自定义 UI 插件出现兼容性问题。

## 3. 项目进展
今日共有 **113 个 PR 被合并/关闭**，重点修复了启动崩溃、连接超时和国际化支持，整体稳定性正在修补中。

- **[feat: complete zh-CN locale onboarding bundle #44695](https://github.com/openclaw/openclaw/pull/44695)**: 完善了中文本地化引导流程，大幅提升了中国用户的上手体验。
- **[fix(model-selection): prevent circular dependency init crash #44983](https://github.com/openclaw/openclaw/pull/44983)**: 修复了一个**严重的启动崩溃问题**。此前当配置 Anthropic 模型时，模块初始化的循环依赖会导致 Gateway 无法启动。
- **[feat(web-search): add Tavily as search provider #44981](https://github.com/openclaw/openclaw/pull/44981)**: 新增 Tavily 搜索提供商，应对 Brave Search API 收费的问题。
- **[fix(gateway): restore loopback handshake timeout budget #44962](https://github.com/openclaw/openclaw/pull/44962)**: 修复了安全更新导致的手握超时时间过短问题（从 3s 逻辑修正），解决了本地 CLI 命令频发 `handshake-timeout` 的问题。

## 4. 社区热点
今日讨论最热烈的问题集中在**多语言支持**、**渠道集成**和**API 费用/稳定性**上。

1. **[Internationalization (i18n) Support #3460](https://github.com/openclaw/openclaw/issues/3460) (👍2, 💬99)**
    - **核心诉求**：全球用户强烈希望能将 OpenClaw 翻译成多种语言。
    - **官方态度**：维护者表示目前精力有限，无法官方支持多语言，但欢迎社区 PR。这表明项目正在经历从单一语言向国际化过渡的阵痛期，#44695 的合并是迈出的重要一步。
2. **[Add DingTalk as a first-install channel #26534](https://github.com/openclaw/openclaw/issues/26534) (👍22, 💬67)**
    - **核心诉求**：企业用户希望在初次安装向导中直接集成钉钉渠道，目前只能手动配置。
    - **分析**：反映了 OpenClaw 在 ToB 市场的渗透需求，用户需要更开箱即用的企业级通讯工具集成。
3. **[Brave Search API no longer free #16629](https://github.com/openclaw/openclaw/issues/16629) (👍2, 💬13)**
    - **核心诉求**：Brave API 开始收费（$5/1k 请求），用户急需免费的替代方案。
    - **进展**：社区建议 DuckDuckGo 或 Tavily。PR #44981 已经响应此需求。

## 5. Bug 与稳定性
新版本发布伴随多个**高危回归 Bug**，主要集中在 UI 和文件系统工具。

| 严重度 | Issue | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **🔥 严重** | [#44755](https://github.com/openclaw/openclaw/issues/44755) | **UI 崩溃**：更新后在 Webchat 选择 `/compact` 指令导致界面白屏/崩溃，无法恢复。 | Open |
| **🔥 严重** | [#39062](https://github.com/openclaw/openclaw/issues/39062) | **工具丢失**：更新后 Agent 丢失了 `read/write/exec` 文件系统工具，导致无法操作文件。 | Closed (可能未完全修复) |
| **⚠️ 高** | [#44714](https://github.com/openclaw/openclaw/issues/44714) | **连接超时**：升级后 `openclaw logs --follow` 握手超时失败。 | **Fix PR:** [#44962](https://github.com/openclaw/openclaw/pull/44962) |
| **⚠️ 高** | [#32828](https://github.com/openclaw/openclaw/issues/32828) | **误报限流**：API 正常工作，但 OpenClaw 始终报告 `API rate limit reached`。 | Closed |
| **⚠️ 高** | [#41778](https://github.com/openclaw/openclaw/issues/41778) | **OOM 崩溃**：自 v2026.3.7 起，`openclaw message send` 在 4GB 内存服务器上发生 OOM 崩溃。 | Open |

## 6. 功能请求与路线图信号
- **搜索提供商多样化**: 随着 Brave Search 收费，社区正在推动集成 Tavily (#44981) 和 DuckDuckGo。
- **模型后备机制**: Issue [#24064](https://github.com/openclaw/openclaw/issues/24064) 呼吁在 429/401 错误时自动触发 Fallback 模型，PR #44982 正在实现这一逻辑。
- **浏览器控制增强**: PR [#44934](https://github.com/openclaw/openclaw/pull/44934) 提议为 Browser 工具增加 CSS 选择器和批量操作，有望降低 Agent 操作浏览器的 Token 成本。

## 7. 用户反馈摘要
- **痛点**：
    - **稳定性焦虑**：用户反馈新版本虽然功能强，但“Agent 丢工具”或“UI 崩溃”导致生产环境不可用。
    - **配置复杂**：Docker 环境下缺少 `brew` 导致 Skill 安装失败，且自定义 API 端点（如本地 Qwen）经常报 HTTP 422 错误。
    - **资源占用**：4GB 内存的服务器现在容易遭遇 OOM，用户感觉软件变得越来越“重”。
- **满意点**：
    - 对 **Dashboard v2** 的现代化界面和移动端适配表示期待。
    - **中文本地化**工作的推进获得国内开发者好评。

## 8. 待处理积压
以下重要 Issue 长期未获解决或近期被重新激活，建议维护者优先关注：

1.  **[Workspace skills not discovered #10386](https://github.com/openclaw/openclaw/issues/10386)**: 自定义 Skills 无法被注册，导致 Agent 能力受限，严重影响扩展性。
2.  **[OpenClaw onboard skips API key input #16579](https://github.com/openclaw/openclaw/issues/16579)**: 安装向导跳过 API Key 输入步骤，导致新手安装后无法直接使用。
3.  **[Feishu multi-account routing fails #16354](https://github.com/openclaw/openclaw/issues/16354)**: 飞书多账号路由失效，消息总是发往默认账号，阻碍了多租户场景的使用。

---

## 横向生态对比

以下是基于 2026-03-13 各开源项目动态的横向对比分析报告。

---

# 开源 AI 智能体生态日报：2026-03-13 横向对比分析

## 1. 生态全景
当前开源 AI 智能体生态正处于**功能大爆发与架构重构并存**的关键时期。各项目普遍突破了单一的聊天界面，向**多模态、多渠道（IM 集成）和长期记忆**方向演进。头部项目引入 GPT-5.4 等最新模型并重构 UI，腰部项目则在积极填补“工具调用”、“本地模型兼容”和“企业级权限”的基础设施空白。整体生态呈现出“**端侧轻量化**”与“**云端多租户**”两条并行发展的技术路线，且所有项目都面临着由模型能力快速迭代带来的兼容性阵痛。

## 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PRs (24h) | 今日版本发布 | 核心动态 | 健康度/状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (新增282) | 500 (活动) | **v2026.3.12** (Major) | 发布 Dashboard v2，集成 GPT-5.4。**高活跃伴随高动荡**，回归 Bug 激增。 | ⚠️ 高风险/高收益 (发布阵痛期) |
| **PicoClaw** | 34+ | 100+ | Nightly | 架构重构，新增国产模型 支持。Android/Termux 适配积极。 | 🟢 活跃 (快速迭代) |
| **NullClaw** | 30+ | 31 | **v2026.3.13** | 修复 Windows 启动与 IM 连接崩溃，新增 Teams 支持。稳定性显著回升。 | 🟢 健康 (质量修复期) |
| **NanoBot** | 34 | 97 (65 merged) | 无 (准备 v0.1.5) | 聚焦内存管理与 Provider 解耦。社区 Web UI 涌现。 | 🟢 健康 (功能累积期) |
| **NanoClaw** | 12 | 40 (18 merged) | 无 | 多渠道爆发，集成 Signal/Nostr/飞书。讨论“安全容器架构”。 | 🟡 中等 (架构探索期) |
| **CoPaw** | 38 (新增) | 21 merged | 无 | Docker 部署问题集中爆发，企业微信集成落地。 | 🟡 中等 (排坑期) |
| **Zeroclaw** | 20+ | 11 | **v0.1.9a** | 修复 Anthropic Vision，但 **main->master 分支切换**引发功能丢失恐慌。 | 🔴 警惕 (部署混乱) |
| **IronClaw** | 50+ | 15 | 无 (准备 v0.19.0) | 多租户架构重构，修复 Google 工具链与 Telegram 集成 Bug。 | 🟢 活跃 (架构升级期) |
| **LobsterAI** | 10+ | 9 | **v0.2.4** | 深度整合 OpenClaw 底层，**本地模型 无法调用工具**成为核心痛点。 | 🟡 中等 (核心功能缺失) |
| **Moltis** | 8 | 7 | 无 | 修复 Docker/MCP 认证，体验优化。 | 🟢 稳定 (稳健维护期) |
| **ZeptoClaw** | 10 | 6 | 无 | 引入“深度研究”与“交互式审批”模式，安全性大幅提升。 | 🟢 稳定 (精细化打磨) |
| **TinyClaw** | 4 | 8 | **v0.0.12** | 引入消息持久化与 TinyOffice 前端，解决安装阻断问题。 | 🟢 活跃 (早期雏形) |
| **EasyClaw** | 0 | 0 | 无 | 无活动。 | ⚪ 静止 |

## 3. OpenClaw 在生态中的定位

作为生态的**核心参照系**，OpenClaw 展现出了明显的“头部效应”和“造轮子”属性：
*   **技术引领 vs. 社区动荡**：OpenClaw 是首个集成 GPT-5.4 并重构 Dashboard 的项目，确立了 UI/UX 和模型支持的上限。然而，其快速的迭代（如 Dashboard v2 的破坏性变更）导致回归 Bug 频发（UI 崩溃、工具丢失），稳定性目前处于生态低位。
*   **基础设施化**：LobsterAI 等项目已开始直接基于 OpenClaw 的网关和沙箱架构进行构建，这表明 OpenClaw 正从一个独立应用演变为生态内的**底层 runtime/网关标准**。
*   **对比劣势**：相比 NullClaw 和 Moltis 在特定平台（Windows/Docker）的稳定性，OpenClaw 目前显得“重而不稳”；相比 ZeptoClaw 的精细化交互控制（交互式审批），OpenClaw 的自主模式略显粗糙。

## 4. 共同关注的技术方向

1.  **IM 全渠道集成**
    *   **现象**：NullClaw (Teams), NanoClaw (Signal/Nostr), CoPaw (企微), LobsterAI (预装 IM 插件) 均在今日大力集成即时通讯渠道。
    *   **趋势**：AI 智能体正在从“Web/CLI 工具”转变为“嵌入工作流的 IM 机器人”，企微、钉钉、飞书、Telegram 是必争之地。

2.  **本地模型 的“工具调用”困境**
    *   **现象**：LobsterAI (#112), PicoClaw (#1161), CoPaw (#1416) 均报告了本地模型（Ollama/Qwen）在 Agent 框架中无法稳定调用工具或丢失上下文的问题。
    *   **诉求**：社区迫切需要解决“弱模型”在复杂 Agent 流程中的稳定性，以及 Function Calling 协议在不同模型厂商间的兼容性适配。

3.  **记忆与上下文管理**
    *   **现象**：NanoBot (异步内存整合), TinyClaw (SQLite 持久化), ZeptoClaw (深度研究技能) 都在尝试解决长对话的上下文丢失问题。
    *   **技术点**：从简单的向量检索转向更复杂的“摘要”、“归档”和“分级记忆”机制。

4.  **安全性与审批机制**
    *   **现象**：ZeptoClaw 引入 TTY 交互式审批，NanoClaw 讨论容器隔离边界，OpenClaw 修复文件系统工具丢失问题。
    *   **趋势**：随着 Agent 权限增大（文件读写、执行命令），"自主执行"正在向"人在回路"转变，安全性成为核心考量。

## 5. 差异化定位分析

*   **平台级 vs. 轻量级**：
    *   **OpenClaw / IronClaw** 旨在构建全功能平台（Dashboard, 多租户, 复杂网关），适合企业级部署，但架构复杂。
    *   **PicoClaw / ZeptoClaw** 走轻量精致路线，关注边缘设备、CLI 体验和特定技能的深度优化（如代码生成、研究），适合个人开发者。

*   **通用性 vs. 垂直化**：
    *   **NanoClaw** 独特地处在于隐私通讯和去中心化协议的集成，服务于特定的小众高隐私需求。
    *   **CoPaw** 和 **LobsterAI** 更侧重于与企业级办公软件（PPT、文档、企微）的深度绑定。

## 6. 社区热度与成熟度

*   **快速迭代/动荡期**：**OpenClaw** (500+ Issues/PRs) 是绝对的流量中心，但当前版本不稳定，属于“痛并快乐着”的尝鲜选择。**CoPaw** 和 **LobsterAI** 正在经历 Docker 和本地模型适配的阵痛，社区反馈以负面 Bug 报告为主。
*   **质量巩固/上升期**：**NullClaw**, **Moltis**, **ZeptoClaw** 和 **NanoBot** 表现出较高的成熟度，PR 合并多集中在修复和优化，维护者响应迅速，适合作为生产环境或二次开发的基础。
*   **早期探索期**：**TinyClaw** 正在快速搭建 MVP（TinyOffice），功能雏形初现。

## 7. 值得关注的趋势信号

1.  **安全沙箱的边界重构**：ZeptoClaw 引入的“交互式审批”和 NanoClaw 提出的“容器隔离不足”讨论，标志着社区意识到单纯依赖 LLM 的判断是不可靠的，**人在回路** 的执行模式将成为高安全性场景的标配。
2.  **去 Logo 化/底层化**：LobsterAI 直接复用 OpenClaw 的网关和沙箱，以及多个项目复用 LiteLLM 或 OpenAI 兼容协议，表明**中间件和运行时层正在收敛**，应用层竞争将集中在 Prompt 编排和垂直场景体验上。
3.  **本地模型的“二等公民”待遇改善**：尽管目前 Bug 众多，但 PicoClaw (ModelScope), Moltis (Vulkan), CoPaw (Ollama 优化) 的动态显示，项目方正投入大量精力适配非 GPT 系模型，**私有化/低成本部署**是刚需。
4.  **搜索能力的主权争夺**：随着 Brave Search 收费，各项目都在寻找替代品。这释放了一个信号：**外部 API 的不稳定性**正在推动 Agent 框架向“多 Provider 冗余”或“自建搜索后端”演进。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-13)

## 1. 今日速览
NanoBot 项目今日保持**极高活跃度**，呈现出快速迭代的态势。过去24小时内，社区共处理了 **97 个 Pull Requests**（其中 65 个已合并/关闭），并产生了 **34 条 Issue 更新**。开发重点集中在**内存管理机制优化**（异步整合）、**多渠道功能增强**（飞书回复/引用支持）以及**架构解耦**（Provider 插件化）。虽然今日无新版本发布，但大量核心功能的 PR 已进入待合并状态，预示着 v0.1.5 或更新版本即将到来。

## 2. 版本发布
*   **无新版本发布**：今日官方未发布新的 Release。值得注意的是，PR #1972 已经提交了 v0.1.5 的发布说明文档，暗示新版本发布已进入最后准备阶段。

## 3. 项目进展
今日项目在核心架构和用户体验方面取得了显著进展，共有 65 个 PR 被合并，主要包括：

*   **内存管理优化**：合并了关于修复 Token 内存整合时机的 PR (#1926)，解决了系统消息处理前过早触发整合的问题。此外，引入异步后台内存整合的 PR (#1961) 正在审查中，有望解决用户交互阻塞痛点。
*   **Web 搜索工具健壮性**：合并了 PR #1754，修复了当 Brave API Key 未配置时可能导致 Agent 卡死或行为异常的问题，提升了系统的容错性。
*   **用户体验增强**：合并了 `/discard` 命令 PR (#1551)，允许用户在不触发记忆归档的情况下重置会话，增加了对话控制的灵活性。
*   **修复 OpenRouter 兼容性**：合并了 PR #1938，修复了 LiteLLM 错误剥离 OpenRouter 模型 ID 前缀的问题，确保了路由模型的正确调用。

## 4. 社区热点
今日讨论最热烈的话题集中在模型兼容性和架构扩展上：

*   **[Issue #1822] 模型支持问题**：用户反馈近期无法使用 Nvidia 模型，引发关于多模型适配稳定性的讨论（7 条评论）。
    *   链接: [HKUDS/nanobot Issue #1822](https://github.com/HKUDS/nanobot/issues/1822)
*   **[Issue #1955] 子 Agent 可视化**：用户强烈希望能监控子 Agent 的执行细节，打破目前的“黑盒”状态，这反映了用户对复杂任务调试的迫切需求（6 条评论）。
    *   链接: [HKUDS/nanobot Issue #1955](https://github.com/HKUDS/nanobot/issues/1955)
*   **[Issue #1922] 社区 Web UI 发布**：社区成员 @Good0007 发布了第三方 Web 管理面板 `nanobot-webui`，获得了 3 个点赞，显示出社区对易用性管理工具的渴望。
    *   链接: [HKUDS/nanobot Issue #1922](https://github.com/HKUDS/nanobot/issues/1922)

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及第三方模型接口兼容性和特定渠道的交互异常：

*   **[High] DashScope 接口兼容性 (#1927)**：由于阿里云 DashScope 不支持 `tool_choice="required"`，导致记忆归档失败且会话未被清除。
    *   状态: Open
    *   链接: [HKUDS/nanobot Issue #1927](https://github.com/HKUDS/nanobot/issues/1927)
*   **[High] MCP 服务与 Gateway 启动顺序依赖 (#1951)**：如果在 MCP 服务启动前启动 Gateway 会导致服务挂掉，且 MCP 重启后调用异常。
    *   状态: Closed (可能为主要问题已复现或定位)
    *   链接: [HKUDS/nanobot Issue #1951](https://github.com/HKUDS/nanobot/issues/1951)
*   **[Medium] Telegram 重复回复 (#1692)**：Bot 在 Telegram 频道中同时发送 Markdown 渲染版和纯文本版两条消息。
    *   状态: Open
    *   链接: [HKUDS/nanobot Issue #1692](https://github.com/HKUDS/nanobot/issues/1692)
*   **[Low] Windows /restart 命令错误 (#1937)**：Windows 环境下执行重启命令找不到脚本路径。
    *   状态: Closed
    *   链接: [HKUDS/nanobot Issue #1937](https://github.com/HKUDS/nanobot/issues/1937)

## 6. 功能请求与路线图信号
根据 Issues 和活跃的 PRs，项目正向以下方向演进：

*   **Provider 插件化与动态切换**：PR #1967 正在实现 Provider 的插件化机制，旨在支持动态扩展。这直接响应了 Issue #1954 中用户关于“运行时动态切换 Provider”的诉求。
    *   相关 PR: [HKUDS/nanobot PR #1967](https://github.com/HKUDS/nanobot/pull/1967)
*   **MCP 工具注册精细化**：PR #1965 提议在 MCP 注册时支持指定启用工具，以减少 Token 消耗并提高 Agent 识别准确率。这是一个针对成本控制和性能优化的重要改进。
    *   相关 PR: [HKUDS/nanobot PR #1965](https://github.com/HKUDS/nanobot/pull/1965)
*   **开源搜索引擎后端**：Issue #927 (Open) 请求支持 SearXNG 作为可选的 Web 搜索后端，打破对 Brave Search 的硬编码依赖。
    *   链接: [HKUDS/nanobot Issue #927](https://github.com/HKUDS/nanobot/issues/927)

## 7. 用户反馈摘要
*   **痛点**：用户对**记忆机制不可控**（如 Issue #1881 提到的低质量模型导致记忆膨胀）和**子 Agent 调试困难**感到头疼。此外，**文档滞后**（Issue #1059 指出 PyPI 未同步最新版）和**配置复杂度**也是常见抱怨。
*   **满意点**：社区对轻量级架构表示认可，特别是看到 `nanobot-webui` 这样的第三方工具出现，说明项目具备良好的扩展性和社区活力。
*   **场景**：用户正在尝试将 NanoBot 接入飞书、钉钉、Telegram 等多平台，并尝试结合 Nvidia、DashScope 等不同 LLM 提供商，显示出作为"统一接入层"的使用趋势。

## 8. 待处理积压
*   **[Issue #100] Telegram 空消息崩溃**：自 2026-02-04 开放至今，当 Agent 无文本响应时导致崩溃的问题仍未彻底解决，影响稳定性。
    *   链接: [HKUDS/nanobot Issue #100](https://github.com/HKUDS/nanobot/issues/100)
*   **[Issue #1829] Docker 自定义命令失效**：用户反馈在 Docker 环境下添加 Skill 后重启无效，属于阻碍实际部署的关键问题。
    *   链接: [HKUDS/nanobot Issue #1829](https://github.com/HKUDS/nanobot/issues/1829)
*   **[PR #126] Docker 镜像 CI 构建**：关于自动构建推送 Docker 镜像的 PR 自 2 月初开启至今未合并，影响用户快速部署体验。
    *   链接: [HKUDS/nanobot PR #126](https://github.com/HKUDS/nanobot/pull/126)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-13)

## 1. 今日速览
Zeroclaw 项目今日呈现出**极高的社区活跃度与动荡性**。随着 **v0.1.9a** 版本的发布以及代码仓库默认分支从 `main` 切换至 `master`，项目迎来了功能架构的一次重大调整。虽然今日有 11 个 PR 被合并，Issue 关闭数达 20 条，显示开发节奏紧凑，但新版本引发了关于功能缺失（MCP、IPC 等）和安装/访问故障（404 错误）的集中反馈。社区在积极贡献新功能接入（如 LinkedIn、InboxAPI）的同时，也在努力消化分支切换带来的阵痛。

## 2. 版本发布
- **版本号**: `v0.1.9a`
- **更新摘要**: 这是一个侧重于修复的版本，主要解决了嵌入提供者配置与 CI 发布流程中的问题。
- **主要变更**:
  - **[Memory]** 修复了从环境变量解析 `embedding_api_key` 的逻辑，确保正确从 `embedding_provider` 读取而非 `default_provider` ([PR #3184](https://github.com/zeroclaw-labs/zeroclaw/pull/3184))。
  - **[CI]** 降级 `action-gh-release` 至 v2.4.2 以修复 Release 最终确认环节的失败 ([PR #3184](https://github.com/zeroclaw-labs/zeroclaw/pull/3184) - *注：此处链接继承自Release Note*)。
- **已知问题/风险**: 
  - 该版本似乎与默认分支切换 (`main` -> `master`) 动作重合，导致部分预编译资源 404 或 Dashboard 不可访问。

## 3. 项目进展
今日共有 **11 个 PR 合并/关闭**，主要集中在提升系统兼容性、修复关键 Bug 以及扩展生态工具：

- **视觉与模型支持增强**:
  - 合并了 [PR #3170](https://github.com/zeroclaw-labs/zeroclaw/pull/3170) 和 [PR #3347](https://github.com/zeroclaw-labs/zeroclaw/pull/3347)，为 Anthropic 提供商添加了完善的 Vision（视觉）支持，修正了 MIME 验证与缓存控制逻辑。
  - 合并 [PR #3198](https://github.com/zeroclaw-labs/zeroclaw/pull/3198)，修复了 `/model` 指令在 `model_routes` 场景下的提供商解析问题。

- **关键 Bug 修复**:
  - [PR #3141](https://github.com/zeroclaw-labs/zeroclaw/pull/3141) 修复了 Matrix 频道的媒体处理与 E2EE 验证问题。
  - [PR #2984](https://github.com/zeroclaw-labs/zeroclaw/pull/2984) 修复了 CLI 在处理带空格中文输入时的 UTF-8 崩溃问题。
  - [PR #2978](https://github.com/zeroclaw-labs/zeroclaw/pull/2978) 引入了 `tool_call_dedup_exempt` 配置，解决了特定工具重复调用被错误抑制的问题。

- **功能重构**:
  - [PR #3323](https://github.com/zeroclaw-labs/zeroclaw/pull/3323) 引入了 `tool_filter_groups`，实现了基于关键词的 MCP 工具动态过滤，显著优化了多工具场景下的 Token 消耗。

## 4. 社区热点
今日讨论最热烈的问题反映了用户对**系统稳定性**与**功能完整性**的焦虑：

1.  **[S0] 分支切换导致功能丢失恐慌**
    - **Issue**: [#3397 After defatult branch switch to master, a lot of features lost](https://github.com/zeroclaw-labs/zeroclaw/issues/3397)
    - **分析**: 用户报告切换到 master 分支后，`agent_ipc` 和 `mcp` 等核心功能消失。这引发了关于项目架构是否发生了破坏性变更的激烈讨论，社区担心项目是否发生了硬分叉或代码回滚。
    
2.  **[S1] 系统激活与配置死循环**
    - **Issue**: [#2510 [Bug]: config initialized=false && console always print "Your system is not activated..."](https://github.com/zeroclaw-labs/zeroclaw/issues/2510)
    - **分析**: 拥有 4 条评论，属于长期困扰用户的阻塞级问题。用户无法正常初始化配置，导致工作流完全不可用。

3.  **[Feature] Matrix 频道体验优化**
    - **Issue**: [#2916 password based Matrix channel login && recovery key](https://github.com/zeroclaw-labs/zeroclaw/issues/2916)
    - **分析**: 获得了 3 条评论和 2 个点赞。用户强烈希望能摆脱繁琐的 Token 手动复制流程，转向更自动化的密码/恢复钥登录方式。

## 5. Bug 与稳定性
今日 Bug 报告集中在**部署阻断**与**运行时崩溃**，严重影响用户体验：

| 严重程度 | Issue | 描述 | 状态/Fix PR |
| :--- | :--- | :--- | :--- |
| **S0 (阻断)** | [#3389 download pre-built 404](https://github.com/zeroclaw-labs/zeroclaw/issues/3389) | 最新版安装脚本无法下载预编译二进制文件。 | Open |
| **S0 (阻断)** | [#3379 MCP missing](https://github.com/zeroclaw-labs/zeroclaw/issues/3379) | 配置中 `mcp` 选项失效，疑似代码丢失。 | Open |
| **S1 (崩溃)** | [#3024 Panic in loop_.rs](https://github.com/zeroclaw-labs/zeroclaw/issues/3024) | 处理中文字符边界时的 Rust panic，导致 Agent 崩溃。 | Closed (Fixed in recent commits) |
| **S1 (阻断)** | [#3386 Web Dashboard 404](https://github.com/zeroclaw-labs/zeroclaw/issues/3386) | 升级至 v0.1.9a 后 Web Dashboard 无法加载。 | Open |
| **S1 (功能)** | [#1327 Not compatible with Kimi Code](https://github.com/zeroclaw-labs/zeroclaw/issues/1327) | Kimi 2.5 模型 API 调用报错 400。 | Closed |

## 6. 功能请求与路线图信号
社区正在积极推动 Zeroclaw 向更广泛的生态集成：

- **企业级通讯集成**:
  - **新增**: Issue [#3396](https://github.com/zeroclaw-labs/zeroclaw/issues/3396) 请求支持**企业微信**，这标志着 Zeroclaw 正向中国本土企业市场渗透。
  - **进展**: [PR #3400](https://github.com/zeroclaw-labs/zeroclaw/pull/3400) 提交了原生 **LinkedIn** 集成工具，目前处于 Open 状态，有望很快合入。

- **AI 原生基础设施**:
  - **新增**: [PR #3385](https://github.com/zeroclaw-labs/zeroclaw/pull/3385) 提议集成 **InboxAPI**，为 Agent 提供原生的电子邮件收发能力（无需 SMTP/IMAP 配置），这符合 "Agent-as-a-Service" 的发展趋势。

- **架构优化**:
  - **进展**: Issue [#2963](https://github.com/zeroclaw-labs/zeroclaw/issues/2963) 提出针对本地/慢速 LLM 的**配速控制**，表明社区对边缘计算和私有化部署场景的关注度提升。

## 7. 用户反馈摘要
- **痛点**: 
  - **安装门槛高**: 多个用户反馈在 Debian 12 等环境下遇到 404 错误 ([#2914](https://github.com/zeroclaw-labs/zeroclaw/issues/2914), [#3389](https://github.com/zeroclaw-labs/zeroclaw/issues/3389))，安装脚本鲁棒性不足。
  - **分支混乱**: `main` 到 `master` 的切换导致文档、下载链接与实际代码不同步，引发用户困惑。
  - **容器化缺陷**: 官方 Docker 镜像基于 Distroless 且无 Shell，导致无法在容器内执行 Git 等基础命令 ([#3359](https://github.com/zeroclaw-labs/zeroclaw/issues/3359))。

- **正面反馈**: 
  - 用户对修复 Anthropic Vision 和 Matrix E2EE 的 PR 表示欢迎，认为这解决了长期存在的阻碍。

## 8. 待处理积压
- **Docs/Install**: Issue [#2914](https://github.com/zeroclaw-labs/zeroclaw/issues/2914) (Debian install 404) 持续时间较长但未解决，影响新用户入门。
- **Security**: Issue [#8](https://github.com/zeroclaw-labs/zeroclaw/issues/8) 指出 Gateway HTTP 响应缺少 CORS 和安全头，属于 Medium 风险的安全债务，需尽快排期修复。
- **Windows Support**: [PR #3390](https://github.com/zeroclaw-labs/zeroclaw/pull/3390) 试图修复 Windows 上的测试挂起问题，表明 Windows 平台的兼容性测试目前可能存在短板，需维护者关注。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-13)

## 1. 今日速览
PicoClaw 项目今日呈现出极高的开发活跃度，正处于功能迭代与架构重构并行的关键阶段。过去24小时内共有超过 100 次 PR 更新，其中 53 个 PR 被合并或关闭，显示了维护团队快速处理社区贡献的能力。项目核心正聚焦于 **Agent 重构**（特别是上下文管理与身份定义）以及 **Provider 生态的扩展**（新增 ModelScope、Azure 等支持）。此外，针对移动端（Android/Termux）和网络环境的兼容性修复也是今日的重点。

## 2. 版本发布
今日发布了 **`v0.2.2-nightly.20260313.19835b2f`**。
- **类型**: Nightly Build (自动化构建)
- **风险提示**: 可能不稳定，仅供测试使用。
- **更新范围**: 涵盖了从 `v0.2.2` 到 `main` 分支的所有最新代码，包含了今日合并的 Agent 重构、Provider 新增及 CLI 修复等内容。
- **链接**: [Release Page](https://github.com/sipeed/picoclaw/releases/tag/v0.2.2-nightly.20260313.19835b2f)

## 3. 项目进展
今日共有 **53 个 PR 被合并/关闭**，项目在兼容性、易用性和架构健壮性上取得了显著进展：

- **架构与性能优化**:
    - [PR #1504](https://github.com/sipeed/picoclaw/pull/1504): 重构了 Web Gateway，将日志轮询从状态接口中分离，提升了前端性能与架构清晰度。
    - [PR #1179](https://github.com/sipeed/picoclaw/pull/1179): 重构 MessageBus 以支持泛型，修复了优雅关闭时可能丢失消息的竞态条件。

- **模型提供商 生态**:
    - [PR #1486](https://github.com/sipeed/picoclaw/pull/1486): **新增 ModelScope (魔搭社区)** 作为 OpenAI 兼容提供商，方便国内用户使用。
    - [PR #1317](https://github.com/sipeed/picoclaw/pull/1317): 新增 **LongCat** 模型支持。
    - [PR #1284](https://github.com/sipeed/picoclaw/pull/1284): 修复 Anthropic Messages API 支持，解决了之前的 404 错误。
    - [PR #1492](https://github.com/sipeed/picoclaw/pull/1492): 增强了 OpenAI 兼容接口的错误提示，并完善了 SiliconFlow 的兼容性。

- **功能修复与增强**:
    - [PR #1254](https://github.com/sipeed/picoclaw/pull/1254): 修复了 Safety Guard 误拦截包含 URL 命令的问题。
    - [PR #1505](https://github.com/sipeed/picoclaw/pull/1505): 修复了 `picoclaw agent` 模式下中文输入光标错位的问题（替换了底层 readline 库）。
    - [PR #1337](https://github.com/sipeed/picoclaw/pull/1337): 修复了 Gateway 二进制路径解析问题，改善了启动体验。

## 4. 社区热点
今日社区讨论主要集中在 **Agent 的定义与重构** 以及 **本地模型配置** 上：

1.  **[Issue #1218] Agent 身份定义重构** (评论: 24)
    - **链接**: [sipeed/picoclaw Issue #1218](https://github.com/sipeed/picoclaw/issues/1218)
    - **分析**: 社区正在激烈讨论如何定义 "Agent"。提议引入 `SOUL.md`（定义性格/价值观）和 `AGENT.md`（定义行为），试图用自然语言而非结构化配置来塑造 AI 人格。这表明项目正在探索更具人性化和可定制性的 Agent 架构。

2.  **[Issue #1161] 本地 Ollama 配置困难** (评论: 17)
    - **链接**: [sipeed/picoclaw Issue #1161](https://github.com/sipeed/picoclaw/issues/1161)
    - **分析**: 用户反馈 PicoClaw 连接本地 Ollama 时“看似运行但无响应”。这反映了从云端 API 切换到本地模型时，配置（如 API endpoint 格式、模型名称映射）仍存在较高的学习门槛。

3.  **[Issue #1216] Meta: Agent 重构路线图** (评论: 3)
    - **链接**: [sipeed/picoclaw Issue #1216](https://github.com/sipeed/picoclaw/issues/1216)
    - **分析**: 维护者 @yinwm 发起的重构元贴指出，现有代码继续堆砌功能的长期成本过高，必须进行底层重构。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，部分已有修复方案：

- **严重/核心功能**:
    - **[Bug] Mistral 集成失败**: [Issue #1502](https://github.com/sipeed/picoclaw/issues/1502) 报告调用 Mistral 时报错 "Extra inputs..."，可能涉及请求体格式变更。
    - **[Bug] 模型热加载失效**: [Issue #1493](https://github.com/sipeed/picoclaw/issues/1493) 指出新增模型配置后需重启 Gateway 才生效，影响了系统的动态维护能力。

- **网络与环境**:
    - **[Bug] 飞书通道间歇性断连**: [Issue #1437](https://github.com/sipeed/picoclaw/issues/1437) 指出在使用手机热点时飞书消息接收不稳定。
    - **[Bug] Termux SSL 证书验证失败**: [Issue #1397](https://github.com/sipeed/picoclaw/pull/1397) (PR) 修复了 Android/Termux 环境下无法连接 HTTPS API 的问题。

- **安全修复**:
    - **[Bug] Matrix/LINE DoS 漏洞**: [Issue #1405](https://github.com/sipeed/picoclaw/issues/1405) 和 [Issue #1407](https://github.com/sipeed/picoclaw/issues/1407) 指出部分 Channel 在处理媒体下载或 Webhook body 时未限制大小，存在内存耗尽风险。

## 6. 功能请求与路线图信号
- **企业级集成**: [Issue #1424](https://github.com/sipeed/picoclaw/issues/1424) 请求支持 Azure OpenAI；[Issue #1475](https://github.com/sipeed/picoclaw/issues/1475) 请求为网关编排提供结构化的事件流。这显示 PicoClaw 正在被期待应用于更复杂的生产环境。
- **语音能力增强**: [Issue #1503](https://github.com/sipeed/picoclaw/issues/1503) 建议增加可插拔的语音 I/O 模块（支持本地/STT/TTS），不仅仅是目前的 Telegram 语音转录。
- **深度重构信号**: [Issue #1439](https://github.com/sipeed/picoclaw/issues/1439) 提出的上下文管理重构（边界、压缩、Token 预算）已对应 [PR #1490](https://github.com/sipeed/picoclaw/pull/1490)，这是提升 Agent 长期记忆和稳定性的关键一步。

## 7. 用户反馈摘要
- **痛点**: 配置复杂度高，尤其是本地模型（Ollama）和自定义 Provider 的配置文档不全（[Issue #1489](https://github.com/sipeed/picoclaw/issues/1489)）。
- **场景**: 用户尝试在路由器（OpenWrt, [Issue #1132](https://github.com/sipeed/picoclaw/issues/1132)）和手机（Android Termux）上运行，说明边缘侧部署需求强烈。
- **满意度**: 对快速修复 Bug（如 URL 拦截问题）表示认可，但对文档滞后于代码（特别是配置参数）表示不满。

## 8. 待处理积压
- **[Issue #1042] exec 工具路径守卫误杀**: [链接](https://github.com/sipeed/picoclaw/issues/1042)
  - 状态：Open。涉及 `restrict_to_workspace` 的正则匹配过于粗暴，导致正常命令（如 `curl`）被拦截，需要重构安全检查逻辑。
- **[Issue #1132] OpenWrt 适配**: [链接](https://github.com/sipeed/picoclaw/issues/1132)
  - 状态：Open。用户希望能在路由器上运行 PicoClaw，虽然优先级标记为 Low，但符合边缘计算趋势。
- **[PR #1179] MessageBus 重构**: [链接](https://github.com/sipeed/picoclaw/pull/1179)
  - 状态：Open。这是一个较大的重构 PR，虽然未合并但评论活跃，需要关注其测试覆盖率以确保不影响现有消息投递稳定性。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-13)

## 1. 今日速览
NanoClaw 今日呈现出极高的社区活跃度，**新增与活跃 Issue 共 12 条，PR 更新高达 40 条**，显示出项目正处于快速迭代与功能扩展期。开发重心明显向**多渠道集成**（Signal, Marmot, 飞书）和**核心稳定性**（重复消息修复、空闲定时器）倾斜。虽然待合并 PR 数量（22条）较多，表明代码审核压力较大，但社区贡献热情高涨，围绕“安全容器架构”和“会话记忆”的深度讨论正在塑造项目的技术路线。

## 2. 版本发布
*   **状态**: 本日无新版本发布。

## 3. 项目进展
本日共有 18 个 PR 被合并或关闭，主要集中在提升系统的自动化程度、修复核心逻辑缺陷以及优化治理流程。

*   **核心修复**: 修复了导致用户收到两条重复消息的严重 Bug ([PR #1022](qwibitai/nanoclaw PR #1022) / [Issue #1020](qwibitai/nanoclaw Issue #1020))，通过仅发送流的最后一个输出块解决了 SDK 多结果返回时的处理逻辑。
*   **自动化与治理**: 合并了多项涉及 Symphony 守护进程和自主治理流程的改进，包括夜间研究循环 ([PR #1024](qwibitai/nanoclaw PR #1024)) 和自主循环标准框架 ([PR #1026](qwibitai/nanoclaw PR #1026))，这标志着项目正在尝试自我维护的闭环实验。
*   **架构优化**: 虽有部分 PR 如改进队列生命周期 ([PR #541](qwibitai/nanoclaw PR #541)) 被关闭，但活跃的 PR 中仍有针对空闲计时器重置的修复 ([PR #1019](qwibitai/nanoclaw PR #1019))，表明团队正在精细打磨容器生命周期管理。

## 4. 社区热点
*   **安全性讨论 ([Issue #865](qwibitai/nanoclaw Issue #865))**: 社区成员 @calebfaruki 再次发起深度讨论，指出“仅使用容器并不等于安全”，批评当前架构在代理层过度信任脚本。这反映了用户对企业级安全边界的强烈诉求。
*   **FTS5 会话搜索 ([PR #1027](qwibitai/nanoclaw PR #1027))**: 针对 Issues #908 和 #909 的实现 PR 引起了关注。该功能旨在为 Agent 提供长期记忆（通过 FTS5 索引历史对话），是通向真正“智能体”的关键一步。
*   **去中心化隐私通讯**: [PR #1021](qwibitai/nanoclaw PR #1021) 提出的 Marmot/White Noise 频道（基于 MLS + Nostr 的 E2EE 通讯）引发了关于隐私优先架构的兴趣。

## 5. Bug 与稳定性
今日报告的 Bug 集中在认证、核心逻辑和配置体验上，部分已有修复方案。

*   **[High] OAuth Token 过期导致服务崩溃** ([Issue #730](qwibitai/nanoclaw Issue #730))
    *   **问题**: 使用 `.env` 配置的 OAuth Token 隔夜过期，导致后台服务 401 报错。
    *   **状态**: 仍在讨论中，缺乏自动刷新 Token 的机制。
*   **[High] 重复消息发送** ([Issue #1020](qwibitai/nanoclaw Issue #1020))
    *   **问题**: SDK 返回多个结果时用户收到两条不同回复。
    *   **状态**: **已有 Fix PR** [PR #1022](qwibitai/nanoclaw PR #1022) (待合并)。
*   **[High] 协议逻辑错误** ([Issue #827](qwibitai/nanoclaw Issue #827))
    *   **问题**: Agent 在 `FinishReason::ToolUse` 但无工具调用时未报错，导致逻辑静默失败。
    *   **状态**: 仍 Open。
*   **[Medium] 安装配置缓慢** ([Issue #973](qwibitai/nanoclaw Issue #973))
    *   **问题**: 用户抱怨通过 Claude Code 设置极其缓慢，质疑为何不能仅用 JSON 配置。

## 6. 功能请求与路线图信号
*   **多渠道爆发**: 社区正将 NanoClaw 扩展为全渠道 AI 代理。今日新增 **Signal** ([PR #1023](qwibitai/nanoclaw PR #1023), [PR #1016](qwibitai/nanoclaw PR #1016)), **Marmot (Nostr)** ([PR #1021](qwibitai/nanoclaw PR #1021)), 以及 **飞书/Lark** ([PR #920](qwibitai/nanoclaw PR #920)) 的集成 PR。这强烈暗示下一版本将成为“多协议 AI 网关”。
*   **长期记忆**: [PR #979](qwibitai/nanoclaw PR #979) (LanceDB 记忆技能) 和 [PR #1027](qwibitai/nanoclaw PR #1027) (FTS5 搜索) 显示出明确的路线图信号——让 AI 具备跨会话的上下文记忆能力。
*   **多模型支持**: [Issue #1015](qwibitai/nanoclaw Issue #1015) 和 [PR #1018](qwibitai/nanoclaw PR #1018) 暴露出用户强烈希望不仅限于 Anthropic 模型，而是支持 DeepInfra/Z.ai 等多种后端。

## 7. 用户反馈摘要
*   **安全信任危机**: 核心用户正在审视 NanoClaw 的安全模型，认为目前的容器隔离不足以应对恶意 Prompt 攻击，建议将脚本移出代理层 ([Issue #865](qwibitai/nanoclaw Issue #865))。
*   **配置体验差**: 用户对复杂的 CLI 设置流程感到沮丧，倾向于简单的配置文件方式 ([Issue #973](qwibitai/nanoclaw Issue #973))。
*   **“幻觉”防御**: 用户建议在 SOUL.md 中增加显式规则，防止 Agent 伪造工具调用结果 ([Issue #829](qwibitai/nanoclaw Issue #829))。

## 8. 待处理积压
*   **关键安全审查**: [PR #843](qwibitai/nanoclaw PR #843) (WebFetch/WebSearch 结果清洗) 处于 Blocked 状态，鉴于其对防止注入攻击的重要性，建议维护者优先 Review。
*   **Discord 兼容性**: [Issue #341](qwibitai/nanoclaw Issue #341) (add-discord 技能包含过时代码导致 Docker 用户崩溃) 虽然早在 2 月份提出，但今日仍有活跃讨论，长期未得到彻底解决。
*   **凭证代理扩展**: [Issue #878](qwibitai/nanoclaw Issue #878) 请求将凭证代理扩展至 Groq/OpenAI，这对于多云部署至关重要，目前处于 Pending 状态。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

这里是 **NullClaw** 项目 2026-03-13 的动态日报。

### 1. 今日速览
NullClaw 今日保持了极高的开发活跃度，共发布 **2 个新版本** (v2026.3.12 和 v2026.3.13)，主要聚焦于修复近期的回归问题及提升多平台兼容性。项目合并了 **31 个 PR**，不仅修复了 Windows 服务启动失败、Lark/WebSocket 连接中断等关键 Bug，还新增了 Microsoft Teams 渠道和 Termux 安装指南。社区方面，关于飞书 集成的讨论热烈，且有多位贡献者提交了针对 Windows 用户体验的文档改进。整体来看，项目正处于快速迭代修复期，稳定性显著增强。

### 2. 版本发布
今日连续发布了两个版本，建议所有用户（特别是 Windows 和 IM 集成用户）立即升级至 **v2026.3.13**。

*   **v2026.3.13** (Latest)
    *   **更新重点**：修复 Agent 在遇到 API 速率限制时的重试逻辑，增加 Windows 二进制文件直接运行的说明文档。
    *   **重要合并**：
        *   [PR #474](https://github.com/nullclaw/nullclaw/pull/474): 修复 Agent 在速率限制后的立即重试问题。
        *   [PR #479](https://github.com/nullclaw/nullclaw/pull/479): 增加 Windows 用户直接使用二进制文件的说明。
*   **v2026.3.12**
    *   **更新重点**：修复 Telegram 论坛话题隔离问题，增强 Lark (飞书) WebSocket 稳定性。
    *   **重要合并**：
        *   [PR #436](https://github.com/nullclaw/nullclaw/pull/436): 修复 Telegram 论坛主题及命令菜单配置。
        *   **关键修复**：使用 `HEAVY_RUNTIME_STACK_SIZE` 解决 Lark WebSocket 线程的 bus error 崩溃问题。

### 3. 项目进展
今日共有 **31 个 PR 被合并**，项目在跨平台支持和 IM 连接器稳定性上取得重大进展：

*   **Windows 平台支持**：彻底解决了 Windows 服务启动报错 1053 的问题 ([PR #467](https://github.com/nullclaw/nullclaw/pull/467))，现在服务可以正确向 SCM 报告状态。
*   **IM 渠道增强**：
    *   **Telegram**：修复了多 Agent 场景下的 Topic 隔离问题 ([Issue #434](https://github.com/nullclaw/nullclaw/issues/434) 已关闭)。
    *   **OneBot**：修复了 WebSocket 网关循环未运行的问题 ([PR #469](https://github.com/nullclaw/nullclaw/pull/469))。
    *   **Microsoft Teams**：新增了完整的 MS Teams 渠道支持 ([PR #438](https://github.com/nullclaw/nullclaw/pull/438)，虽然显示 Open 但根据上下文可能已接近合并或为核心功能铺垫)。
*   **移动端支持**：合并了 Android Termux 的详细安装指南 ([PR #470](https://github.com/nullclaw/nullclaw/pull/470))，响应了移动端用户的强烈需求。

### 4. 社区热点
今日社区讨论主要集中在配置体验与特定模型的兼容性上：

*   **[Issue #341](https://github.com/nullclaw/nullclaw/issues/341) [Alibaba Coding Plan Rate Limit]**：用户反馈使用阿里云编码计划时频繁遇到 "Rate limit exceeded"。这反映了用户在对接国内大模型服务商时的痛点，目前已在 v2026.3.13 中优化了重试逻辑。
*   **[Issue #222](https://github.com/nullclaw/nullclaw/issues/222) [MiniMax-M2.5 Compatibility]**：关于初始化对话无法保持的问题，涉及特定 LLM 的兼容性调试，今日已关闭，暗示问题已在新版中解决。
*   **[Issue #195](https://github.com/nullclaw/nullclaw/issues/195) [Secrets Management]**：用户强烈希望建立通用的密钥管理机制，而非仅限于模型提供商 API Key，这表明用户对生产环境安全性的关注日益增加。

### 5. Bug 与稳定性
今日修复了多个高危或阻碍使用的问题：

*   **🔴 严重**:
    *   **Windows 服务启动失败 ([Issue #323](https://github.com/nullclaw/nullclaw/issues/323))**：服务无法响应 SCM 请求，导致超时。**状态**：已由 [PR #467](https://github.com/nullclaw/nullclaw/pull/467) 修复。
    *   **Lark WebSocket 崩溃 ([Issue #423](https://github.com/nullclaw/nullclaw/issues/423))**：Bus error 导致连接中断。**状态**：已在 v2026.3.12 中通过增加栈大小修复。
    *   **WSS 连接提前关闭 ([PR #487](https://github.com/nullclaw/nullclaw/pull/487))**：v2026.3.12 引入的回归 Bug，导致所有安全 WebSocket 连接（Discord, Lark 等）断开。**状态**：已有修复 PR 待合并。

*   **🟡 一般**:
    *   **Scheduler 跳过运行 ([Issue #403](https://github.com/nullclaw/nullclaw/issues/403))**：Cron 表达式 `x/y` 格式解析错误。**状态**：已关闭（已修复）。
    *   **内核兼容性 ([Issue #448](https://github.com/nullclaw/nullclaw/issues/448))**：Linux Kernel < 4.11 因缺乏 `statx` 支持导致启动失败。**状态**：已确认，暂不修复（作为已知限制）。

### 6. 功能请求与路线图信号
*   **Docker 支持 ([Issue #449](https://github.com/nullclaw/nullclaw/issues/449))**：用户请求官方 Docker Hub 镜像及 docker-compose 支持。考虑到目前仅支持源码/二进制，这是部署层面的重要缺失。
*   **Qwen OAuth 原生支持 ([Issue #492](https://github.com/nullclaw/nullclaw/issues/492))**：请求支持类似 Gemini 的 Qwen CLI OAuth 凭证解析。鉴于项目对国产模型的支持力度，该功能极有可能被纳入。
*   **密钥管理增强 ([Issue #195](https://github.com/nullclaw/nullclaw/issues/195))**：非模型类 API Key（如 Zapier, ClickUp）的安全存储需求。

### 7. 用户反馈摘要
*   **痛点**：Windows 用户反馈之前版本缺乏清晰的双文件直接运行指南 ([PR #479](https://github.com/nullclaw/nullclaw/pull/479))，且服务安装极其困难。
*   **场景**：大量用户尝试在 Termux (Android) 或低配 Linux 设备（如旧款 NAS/TV Box）上运行 NullClaw ([Issue #448](https://github.com/nullclaw/nullclaw/issues/448)), 显示出用户对轻量级、本地化 AI Agent 的强烈需求。
*   **满意度**：用户对项目快速响应 LLM 兼容性问题（如 MiniMax, Alibaba）表示认可，相关 Issue 在今日被大量关闭。

### 8. 待处理积压
*   **[PR #487](https://github.com/nullclaw/nullclaw/pull/487) (Fix Websocket)**：针对 v2026.3.12 引入的 TLS 连接 Bug 的修复 PR，目前状态为 Open，建议维护者优先 Review 并合并，以免影响 Discord/Lark 等关键渠道用户。
*   **[Issue #473](https://github.com/nullclaw/nullclaw/issues/473) (README Update)**：关于基准测试数据（内存/体积）过时的反馈，维护者需更新文档以避免误导新用户。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是为您生成的 IronClaw 项目 2026-03-13 动态日报。

---

# 📊 IronClaw 项目日报 (2026-03-13)

## 1. 今日速览
IronClaw 项目今日维持高热度开发状态，正处于 **v0.19.0 发布前夕的关键阶段**。过去24小时内，Issues 和 PRs 的活跃度均极高（各 50 条更新），显示社区与核心团队正在全力冲刺。核心重点在于 **Bug Bash（漏洞清理）** 与 **多租户架构的重构**。虽然有不少关于 Google Sheets 和 Telegram 集成的高优先级 Bug 报告，但同时也迎来了大量底层架构改进的 PR，项目正在从单一助手工具向支持多通道、多租户的平台级应用演进。

## 2. 版本发布
*   **当前状态**：v0.18.0 仍是最新稳定版。
*   **下一版本动态**：PR #973 显示 **v0.19.0** 正在准备中，且包含 **API 破坏性变更**（externally-constructible struct 新增字段）。建议下游开发者在下个版本发布前关注 API 迁移指南。

## 3. 项目进展
今日共有 15 个 PR 被合并/关闭，主要集中在修复近期 Bug Bash 发现的问题及架构重构：

*   **架构重构**：由 @standardtoaster 提交的系列 PR（#1118, #1117, #1112）正在重写工作区核心逻辑，引入 **多租户隔离** 和 **分层内存**，这是通向多用户支持的重要一步。
*   **Bug 修复**：@G7CNF 提交了多个关键修复，包括：
    *   [#1114](https://github.com/nearai/ironclaw/pull/1114)：修复 Web 聊天复制粘贴时的格式混乱问题。
    *   [#1107](https://github.com/nearai/ironclaw/pull/1107)：修复 Embedding URL 的 SSRF 安全漏洞。
    *   [#1109](https://github.com/nearai/ironclaw/pull/1109)：修复 Routine 事件缓存不同步的问题。
*   **新渠道支持**：新增 **Prismer Cloud IM** (#1120) 和 **飞书/Lark** (#1110) 的 WASM 渠道支持，显示项目正在积极扩展非 Telegram 的 IM 集成能力。

## 4. 社区热点
今日讨论最热烈的问题集中在 **第三方模型兼容性** 与 **扩展安装体验**：

1.  **[Issue #728](https://github.com/nearai/ironclaw/issues/728) [Open]**: **Kimi-k2.5 模型兼容性**
    *   **热度**：评论 4 条，点赞 3 次。
    *   **分析**：用户在使用 Moonshot AI 的 Kimi 模型时遇到 API 约束冲突（Temperature 强制为 1，缺失 `reasoning_content`）。这反映了 IronClav 在兼容非标准 OpenAI 协议模型时面临挑战，社区对 BYOK (Bring Your Own Key) 模式的灵活性有强烈需求。
2.  **[Issue #1060](https://github.com/nearai/ironclaw/issues/1060) [Open]**: **无法安装扩展**
    *   **热度**：评论 3 条。
    *   **分析**：用户反馈通过 Telegram 认证后，安装 Gmail 等扩展时出现 HTTP 404 错误。这暴露了当前扩展下载/托管机制可能存在中断或 URL 生成错误，直接影响用户上手体验。

## 5. Bug 与稳定性
今日报告了大量 P1 级别的 Bug，主要集中在 **Telegram 通道** 和 **Google 工具集成**：

| 严重度 | 问题 | 描述 | 状态/修复 |
| :--- | :--- | :--- | :--- |
| **CRITICAL** | [Issue #823](https://github.com/nearai/ironclaw/issues/823) | **N+1 查询性能瓶颈**：Routine 引擎在事件循环中存在 N+1 查询模式，可能导致高负载下响应缓慢。 | Open |
| **CRITICAL** | [Issue #813](https://github.com/nearai/ironclaw/issues/813) | **数据一致性风险**：元数据/令牌设置与数据库持久化之间缺乏事务保护，并发写入可能导致状态不一致。 | Open |
| **HIGH** | [Issue #1103](https://github.com/nearai/ironclaw/issues/1103) | **SSRF 风险**：Embedding Base URL 可配置且缺乏校验。 | **Fix PR #1107** 已提交 |
| **P1** | [Issue #992](https://github.com/nearai/ironclaw/issues/992) | **Telegram OAuth URL 错误**：从 Telegram 发起 Google OAuth 时，参数 `clientid` 拼写错误（应为 `client_id`）。 | Open |
| **P1** | [Issue #999](https://github.com/nearai/ironclaw/issues/999) | **Google Sheets 权限拒绝**：完成 OAuth 后仍报 403 错误，疑似未正确传递调用方身份。 | Open |
| **P1** | [Issue #993](https://github.com/nearai/ironclaw/issues/993) | **参数类型错误**：LLM 向 Google Sheets 工具传递 JSON 字符串而非数组，导致写入失败。 | Open |

## 6. 功能请求与路线图信号
*   **BYOK (自带模型) 支持**：Issue #1027 建议正式文档化支持用户自带 API Key 配置模型。目前虽代码层面支持，但缺乏官方产品化引导。
*   **配置热重载**：Issue #1119 提出在实现热重载前需统一配置源，这是提升系统可维护性的重要前置任务。
*   **新 LLM 提供商**：PR #1115 新增了 Novita AI 提供商支持，表明社区正在快速扩充对长尾 LLM API 的兼容性。

## 7. 用户反馈摘要
*   **痛点**：用户在 **Routines (定时任务)** 功能上受挫明显。反馈指出 Web 端创建的任务在 Telegram 端不可见（#995），且任务触发后推送到 Telegram 总是失败（#994），导致“跨平台智能体”体验割裂。
*   **体验问题**：Google 工具链目前稳定性较差，用户抱怨“虽然表单建了但数据没填进去”（#1002）以及认证流程异常。
*   **积极信号**：尽管 Bug 众多，但多集中在复杂功能（如 Routine 和 Extension），核心 Chat 功能反馈尚可。用户对新通道（如飞书）的提交表现出期待。

## 8. 待处理积压
以下重要问题长期未得到有效解决或今日再次活跃，需维护者关注：

1.  **[Issue #299](https://github.com/nearai/ironclaw/issues/299) [Closed]**: MCP 服务器认证配置困难。虽然该 Issue 刚刚关闭，但它是阻碍高级用户连接 Browserbase 等外部工具的老大难问题，需确认修复是否彻底。
2.  **[Issue #991](https://github.com/nearai/ironclaw/issues/991) [Open]**: Telegram Bot Token 验证间歇性失败 (HTTP 404)。这是一个导致用户无法完成初始化的阻断性问题，且原因不明（"有时重试几次就好了"），严重影响新手体验。

---
*分析师注：IronClaw 目前处于“功能大跃进”与“稳定性填坑”并存的阶段。v0.19.0 的破坏性变更和多租户重构暗示项目可能正在为 SaaS 化或大规模部署做准备，但目前的 Google 工具链和 Telegram 集成尚不稳定，建议生产环境用户暂缓全面升级，优先关注 Bug Bash 的修复进度。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是基于 2026-03-13 数据生成的 LobsterAI 项目动态日报。

---

# 📊 LobsterAI 项目动态日报 (2026-03-13)

## 1. 今日速览
LobsterAI 今日保持着**极高的开发活跃度**，随着 **v0.2.4** 版本的发布，项目重心明显向自研的 **OpenClaw** 基础设施倾斜。今日共合并了 **9 个 PRs**，主要涉及 OpenClaw 的网关优化、MCP 桥接及插件系统预装，显示出项目正在快速剥离旧有架构并整合新的 Agent 能力。尽管新版本修复了 IM 连接和启动加载问题，但社区关于**本地模型（Ollama）无法调用技能**的反馈集中爆发，成为当前最大的使用痛点。此外，新版打包与沙箱机制在 Linux/Mac 环境下引入了一些兼容性 Bug，需引起注意。

## 2. 版本发布
### **v0.2.4** (Released on 2026-03-13)
本次更新主要聚焦于稳定性修复，为后续功能铺路。
- **更新内容**:
    - **修复 IM 渠道连接性测试引起的 Bug**: 解决了在测试 IM 连接时可能触发的异常 ([PR #393](https://github.com/netease-youdao/LobsterAI/pull/393))。
    - **修复应用启动卡加载问题**: 解决了应用启动时无限期处于加载状态的问题，提升启动体验 ([PR #396](https://github.com/netease-youdao/LobsterAI/pull/396))。
- **链接**: [v0.2.4 Full Changelog](https://github.com/netease-youdao/LobsterAI/compare/v0.2.3...v0.2.4)

## 3. 项目进展
今日项目进展显著，核心开发者（@btc69m979y-dotcom, @liugang519, @liuzhq1986）合并了大量与 **OpenClaw** 相关的功能，标志着项目架构正在发生重大迁移。

- **OpenClaw 架构集成与优化**:
    - **MCP Bridge ([PR #408](https://github.com/netease-youdao/LobsterAI/pull/408))**: 实现了 MCP 服务器（如 Tavily, GitHub 等）到 OpenClaw 嵌入式 Agent 的桥接，支持热重载，极大扩展了 Agent 的工具调用能力。
    - **网关启动优化 ([PR #395](https://github.com/netease-youdao/LobsterAI/pull/395))**: 通过 esbuild 打包和编译缓存，将 Windows 环境下的网关启动时间从 **180s+ 降低至 ~15s**，解决了严重的超时问题。
    - **沙箱重构 ([PR #403](https://github.com/netease-youdao/LobsterAI/pull/403))**: 移除了内置沙箱，将环境依赖转向 OpenClaw 的默认配置，精简了核心代码。
    - **定时任务支持 ([PR #409](https://github.com/netease-youdao/LobsterAI/pull/409))**: 增加了对 OpenClaw 定时任务的支持。

- **IM 生态建设**:
    - **插件预装系统 ([PR #346](https://github.com/netease-youdao/LobsterAI/pull/346))**: 新增了钉钉、飞书、QQ、企业微信等 4 大官方 IM 渠道插件的预装与配置同步功能，降低了企业级部署门槛。

- **体验改进**:
    - **Markdown 自定义协议 ([PR #380](https://github.com/netease-youdao/LobsterAI/pull/380))**: 支持在 Markdown 链接中打开外部应用（如 `obsidian://`, `vscode://`）。
    - **网关去重修复 ([PR #401](https://github.com/netease-youdao/LobsterAI/pull/401))**: 修复了并发调用导致网关重复启动及端口漂移的问题。

## 4. 社区热点
今日社区讨论主要集中在**本地模型的功能限制**和**具体使用的报错**上。

- **🔥 本地模型 调用失效**:
    - **Issue [#112](https://github.com/netease-youdao/LobsterAI/issues/112) & [#405](https://github.com/netease-youdao/LobsterAI/issues/405)**: 多名用户反馈在使用 Ollama 接入本地模型（如 Qwen, DeepSeek）时，只能进行聊天，无法触发技能或工具调用。这是目前最受关注的问题，直接影响了开源/私有化部署的核心价值。
- **⚠️ Token 计数异常**:
    - **Issue [#370](https://github.com/netease-youdao/LobsterAI/issues/370)**: 用户报告输入简单问候语却导致 Token 爆炸（请求数千输出 Token），导致 API 报错，暴露了 Prompt 策略或上下文管理可能存在漏洞。

## 5. Bug 与稳定性
除了上述热点，今日还报告了多个影响使用的 Bug，主要涉及兼容性和新功能缺陷。

- **🔴 严重**:
    - **Linux 沙箱启动失败 ([#402](https://github.com/netease-youdao/LobsterAI/issues/402))**: 用户在 Debian 12 虚拟机环境下安装后，应用启动后自动退出。鉴于今日合并了移除内置沙箱的 PR ([#403](https://github.com/netease-youdao/LobsterAI/pull/403))，两者可能存在关联。
    - **Apple Silicon 更新检测失效 ([#390](https://github.com/netease-youdao/LobsterAI/issues/390))**: v0.2.2 版本在 Mac ARM 平台无法检测到 v0.2.3 更新。
- **🟠 中等**:
    - **定时任务生成错误 ([#407](https://github.com/netease-youdao/LobsterAI/issues/407))**: 设置每隔 10 分钟执行，生成的 Cron 表达式有误。
    - **API 连接失败 ([#406](https://github.com/netease-youdao/LobsterAI/issues/406))**: 百度千帆 CodingPlan API 连接问题。
    - **自定义技能不可选 ([#404](https://github.com/netease-youdao/LobsterAI/issues/404))**: 用户创建的 Skill 无法在聊天框的弹出窗口中被选中。
- **🟢 轻微**:
    - **阿里云百炼模型报错 ([#399](https://github.com/netease-youdao/LobsterAI/issues/399))**: 调用特定模型（GLM 4.5）时失败。

## 6. 功能请求与路线图信号
- **自定义 Skill 集成**: 用户强烈希望能直接在聊天界面调用自己创建的工作流 Skill ([#404](https://github.com/netease-youdao/LobsterAI/issues/404))。目前 UI 似乎仅支持官方或预设技能，限制了个性化 Agent 的搭建。
- **Agent 持续性优化**: 用户反馈任务执行中断，需手动输入“继续”才能跑完 ([#358](https://github.com/netease-youdao/LobsterAI/issues/358))。这表明 Agent 的规划和执行循环（Agentic Loop）稳定性有待提升，这可能与今日合并的 OpenClaw Agent 底层重构相关，后续版本值得观察。

## 7. 用户反馈摘要
- **痛点**: **本地模型"残废"**是目前最核心的不满，用户期望本地模型能与云端模型一样拥有完整的工具调用能力。
- **体验**: **速度与稳定性**是第二大槽点。有用户反映"经常莫名等待" ([#400](https://github.com/netease-youdao/LobsterAI/issues/400)) 或任务跑不完。
- **正面反馈**: 尽管存在 Bug，但用户对 OpenClaw 的轻量化表示认可，认为相比其他套壳方案，OpenClaw 在统一运行环境上有优势 ([#353](https://github.com/netease-youdao/LobsterAI/issues/353))。

## 8. 待处理积压
- **Issue #112 (本地模型无法调用技能)**: 该问题自 2 月底提出，今日再次活跃。鉴于这是开源本地部署的核心场景，建议开发团队优先排查是否为 Function Calling 协议适配问题或 Prompt 模板缺失。
- **Issue #390 (Mac 更新检测)**: 涉及自动更新流，影响用户留存到最新版，需尽快修复。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

以下是根据 TinyClaw (TinyAGI) 项目 2026-03-13 的 GitHub 数据生成的动态日报。

---

# 📊 TinyClaw (TinyAGI) 项目日报 - 2026年03月13日

## 1. 今日速览
TinyClaw 项目今日处于**高活跃度、快速迭代**状态。过去 24 小时内发布了 2 个新版本 (v0.0.11, v0.0.12)，主要是为了修复前版本的安装阻碍，并引入了重要的消息持久化功能。社区层面共有 4 条 Issue 更新和 13 条 PR 更新，其中 **8 条 PR 已合并**，显示出维护者极高的代码吞吐量。值得注意的是，目前有 5 个功能增强型 PR 处于待合并状态，且有一个涉及项目重命名 的重大 PR 正在进行中，暗示项目正处于架构调整与品牌重塑的关键期。

## 2. 版本发布
今日连续发布了两个版本，旨在解决安装阻断问题并增强系统能力：

*   **v0.0.12** (Latest) - [查看 Release](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.12)
    *   **核心更新**：引入 `agent_messages` SQLite 表，实现了 Agent 聊天记录的持久化。
    *   **API 变更**：新增简化的 `agent_message` SSE (Server-Sent Events) 事件，开发者无需监听复杂的全链路生命周期即可获取响应，简化了客户端集成。
*   **v0.0.11** - [查看 Release](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.11)
    *   **破坏性变更/修复**：修复了旧的 `setup-wizard` shell 脚本导致的导入中断问题。
    *   **迁移注意**：如果从旧版本升级，需注意设置向导已迁移至新的实现逻辑。

## 3. 项目进展
今日项目进展显著，主要集中在 **TinyOffice (前端交互层)** 的构建与核心稳定性的提升。共合并了 8 个 PR：

1.  **消息持久化与 API 简化** ([PR #202](https://github.com/TinyAGI/tinyclaw/pull/202))：为构建可靠的聊天应用打下基础，支持历史记录查询。
2.  **交互式设置向导** ([PR #204](https://github.com/TinyAGI/tinyclaw/pull/204))：新增引导式配置，解决了 Issue #193 提出的“首次运行体验差”的痛点。
3.  **TinyOffice 功能大整合**：
    *   [PR #199](https://github.com/TinyAGI/tinyclaw/pull/199) & [PR #203](https://github.com/TinyAGI/tinyclaw/pull/203)：新增类似 Slack 的 **聊天室** 和 **项目管理** 看板。
    *   [PR #201](https://github.com/TinyAGI/tinyclaw/pull/201)：新增 **组织架构图** 可视化页面。
4.  **关键修复**：
    *   [PR #206](https://github.com/TinyAGI/tinyclaw/pull/206)：CLI 转换为 ESM 模块，修复了与 `@clack/prompts` v1.x 的兼容性问题。
    *   [PR #198](https://github.com/TinyAGI/tinyclaw/pull/198)：移除了过时的 shell 脚本引用，修复了首次安装失败的问题。
    *   [PR #200](https://github.com/TinyAGI/tinyclaw/pull/200)：增加了 Telegram 机器人的超时重连机制，尝试缓解连接停滞问题。

## 4. 社区热点
今日讨论和关注焦点如下：

*   **[OPEN] Telegram Bot 重连失败** ([Issue #126](https://github.com/TinyAGI/tinyclaw/issues/126))
    *   **动态**：该 Issue 更新于昨日，评论数达 6 条。
    *   **分析**：这是目前最活跃的用户痛点。Telegram Bot 在网络波动后无法自动重连。虽然今日合并的 [PR #200](https://github.com/TinyAGI/tinyclaw/pull/200) 试图通过增加超时检测来修复，但用户是否满意需待验证。
*   **[OPEN] 项目重命名** ([PR #191](https://github.com/TinyAGI/tinyclaw/pull/191))
    *   **动态**：计划将 TinyClaw 重命名为 TinyAGI。
    *   **分析**：这是一个涉及全代码库、包名、环境变量的巨大工程。该 PR 目前处于 Open 状态，一旦合并将对现有用户产生较大影响（迁移成本），需密切关注。

## 5. Bug 与稳定性
今日修复了两个高严重程度的 Bug，稳定性有所回升：

1.  **[已修复] 导入模块错误导致 CLI 崩溃** ([Issue #205](https://github.com/TinyAGI/tinyclaw/issues/205) -> [PR #206](https://github.com/TinyAGI/tinyclaw/pull/206))
    *   **严重度**：High (核心功能不可用)
    *   **描述**：执行 `tinyclaw pairing approve` 时因 CommonJS/ESM 模块兼容性问题报错。
    *   **状态**：已通过将 CLI 转为 ESM 模块修复。
2.  **[已修复] 首次安装脚本缺失** ([Issue #197](https://github.com/TinyAGI/tinyclaw/issues/197) -> [PR #198](https://github.com/TinyAGI/tinyclaw/pull/198))
    *   **严重度**：Critical (阻断新用户)
    *   **描述**：v0.0.10 版本中缺失 `setup-wizard.sh`，导致安装直接报错退出。
    *   **状态**：已修复。

## 6. 功能请求与路线图信号
从 Open 的 PR 来看，项目正迈向更高级的 Agent 管理能力：

*   **分层记忆系统** ([PR #209](https://github.com/TinyAGI/tinyclaw/pull/209))：拟引入 `memory/` 文件夹存储 Markdown 格式的记忆，支持 Agent 跨对话保留知识。这是从“无状态工具”向“长期智能体”进化的关键一步。
*   **Agent 配置界面** ([PR #207](https://github.com/TinyAGI/tinyclaw/pull/207))：拟在 Web 端提供详细的 Agent 配置页（Skills, Prompts, Heartbeat），降低通过代码配置 Agent 的门槛。
*   **Web 端首次引导** ([Issue #193](https://github.com/TinyAGI/tinyclaw/issues/193))：用户希望摆脱 CLI 和原始配置文件编辑，这一需求已通过 [PR #204](https://github.com/TinyAGI/tinyclaw/pull/204) 部分解决。

## 7. 用户反馈摘要
*   **痛点**：用户对**首次安装的流畅度**极其敏感 (Issue #197, #205)，任何脚本报错或模块兼容问题都会直接阻断体验。
*   **场景**：Telegram Bot 是重要的交互渠道，用户高度依赖其连接的稳定性 (Issue #126)。
*   **期待**：用户期望 Web 端 能替代 CLI 成为主要的配置和监控中心 (Issue #193)，特别是对于非技术背景的用户。

## 8. 待处理积压
*   **[重要] Telegram Bot 连接稳定性** ([Issue #126](https://github.com/TinyAGI/tinyclaw/issues/126))：虽然已有修复 PR，但仍需维护者确认是否彻底解决了 "Auto-Reconnect" 问题。
*   **[关键] 品牌重塑迁移** ([PR #191](https://github.com/TinyAGI/tinyclaw/pull/191))：该 PR 涉及面极广，长时间未合并可能阻塞其他开发进度，建议优先 Review 或分阶段执行。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

这里是 **Moltis (github.com/moltis-org/moltis)** 项目 2026 年 3 月 13 日的动态日报。

### 1. 今日速览
Moltis 项目今日呈现**高活跃度、高质量交付**的状态，主要集中在错误修复与用户体验优化。核心开发者 @penso 展现了极高的维护效率，单日合并了 **7 个 PR**，成功关闭了 **8 个 Issue**，解决了包括 Docker 部署、Telegram 推送、MCP 认证及 macOS 沙箱在内的多个关键痛点。尽管没有发布新版本，但主分支已积累了大量修复，预计即将发布包含重要稳定性更新的版本。目前待合并 PR 仍有 9 个，显示后续功能（如 Vulkan 支持、Android 支持）正在积极储备中。

### 2. 版本发布
*   **无新版本发布**：今日未观测到 Release Tag 推送，但鉴于大量修复已合并至主分支，建议用户关注后续版本更新。

### 3. 项目进展
今日共有 **7 个 PR 被合并**，显著提升了项目的健壮性与易用性：
*   **Docker 体验重构** ([PR #401](https://github.com/moltis-org/moltis/pull/401))：支持通过环境变量 `MOLTIS_PROVIDER` 和 `MOLTIS_API_KEY` 快速配置 Provider，解决了 [Issue #125](https://github.com/moltis-org/moltis/issues/125)，极大简化了 Docker 部署流程。
*   **通信与集成修复**：
    *   [PR #404](https://github.com/moltis-org/moltis/pull/404) 修复了 Telegram 消息降级时暴露 HTML 标签的问题 ([Issue #214](https://github.com/moltis-org/moltis/issues/214))。
    *   [PR #416](https://github.com/moltis-org/moltis/pull/416) 实现了带密钥的远程 MCP URL 及 Header 支持 ([Issue #140](https://github.com/moltis-org/moltis/issues/140), [Issue #119](https://github.com/moltis-org/moltis/issues/119))，增强了 MPC 兼容性。
*   **沙箱与系统兼容性**：
    *   [PR #405](https://github.com/moltis-org/moltis/pull/405) 修复了 macOS Apple Container 的 WORKDIR 启动错误 ([Issue #159](https://github.com/moltis-org/moltis/issues/159))。
    *   [PR #409](https://github.com/moltis-org/moltis/pull/409) 优化了 Cron 任务设置界面的文案，使其更清晰 ([Issue #244](https://github.com/moltis-org/moltis/issues/244))。
*   **认证与引导**：[PR #415](https://github.com/moltis-org/moltis/pull/415) 修复了认证重置后引导页面无法访问的问题 ([Issue #316](https://github.com/moltis-org/moltis/issues/316))。

### 4. 社区热点
*   **Docker 部署中的沙箱问题** ([Issue #423](https://github.com/moltis-org/moltis/issues/423))：由 @malicz 提出，讨论在 Docker 容器内部运行 Docker 沙箱（Docker-in-Docker）的挑战。这反映了用户希望在容器化环境中完整体验 Moltis 隔离能力的强烈需求。
*   **Android/Termux 原生支持** ([Issue #424](https://github.com/moltis-org/moltis/issues/424))：用户 @Frozen12 请求提供预编译的 Android 二进制文件，表明社区对在移动端/边缘设备运行轻量级 AI 智能体有浓厚兴趣。

### 5. Bug 与稳定性
今日报告的新 Bug 数量较少，且旧 Bug 修复迅速：
*   **🟡 中等 | Docker 沙箱嵌套问题** ([Issue #423](https://github.com/moltis-org/moltis/issues/423))：在 Docker 中运行 Moltis 并试图使用 Docker 沙箱时遇到问题。
    *   *状态*：Open，待确认具体配置。
*   **🟢 已修复 | Trusted-network Proxy 闪退** ([Issue #367](https://github.com/moltis-org/moltis/issues/367))：导致 HTTP 工具无法使用。
    *   *状态*：已关闭（可能是提交记录中未列出的小修复或配置文档更新）。
*   **🟢 已修复 | 认证重置失败** ([Issue #316](https://github.com/moltis-org/moltis/issues/316))：用户无法重置认证信息。
    *   *状态*：通过 [PR #415](https://github.com/moltis-org/moltis/pull/415) 修复并合并。

### 6. 功能请求与路线图信号
*   **本地 LLM 扩展**：[PR #408](https://github.com/moltis-org/moltis/pull/408) 正在添加 Vulkan 后端支持，这将使不支持 CUDA/CoreML 的老旧显卡或特定硬件也能加速运行本地模型。
*   **MCP 高级配置**：[PR #419](https://github.com/moltis-org/moltis/pull/419) 提议使 MCP 请求超时时间可配置，[PR #413](https://github.com/moltis-org/moltis/pull/413) 允许 Agent 安全地写入侧车文件，这些都指向更灵活的智能体工作流。
*   **Android 支持**：[Issue #424](https://github.com/moltis-org/moltis/issues/424) 的提出预示着项目向移动端扩展的潜力。

### 7. 用户反馈摘要
*   **部署痛点**：用户对“单一二进制”特性表示赞赏，但在 Docker 化部署和沙箱配置上仍遇到阻力，特别是环境变量的配置和沙箱嵌套问题。
*   **输出质量**：Telegram 推送中 HTML 标签泄露的问题严重影响了阅读体验，今日的修复 ([PR #404](https://github.com/moltis-org/moltis/pull/404)) 直接回应了这一痛点。
*   **UI/UX**：Cron 设置界面的改进表明用户在使用“Run Once”等选项时存在困惑，对更加直观的 UI 提示有明确需求。

### 8. 待处理积压
*   **[PR] macOS 代码签名** ([PR #422](https://github.com/moltis-org/moltis/pull/422))：该 PR 涉及发布流程的自动化与安全性，对 macOS 用户体验至关重要，建议维护者优先 Review。
*   **[PR] MCP 超时配置** ([PR #419](https://github.com/moltis-org/moltis/pull/419))：来自社区的贡献，解决特定 MCP Server 连接超时问题，建议纳入下一版本迭代。
*   **[Issue] Android 支持** ([Issue #424](https://github.com/moltis-org/moltis/issues/424))：虽然刚提出，但考虑到 Termux 社区的活跃度，建议官方给出初步反馈或构建指南。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是基于您提供的 GitHub 数据生成的 **CoPaw** 项目 2026-03-13 动态日报。

---

# CoPaw 项目动态日报 (2026-03-13)

## 1. 今日速览
CoPaw 项目今日呈现**高并发迭代**状态，社区活跃度极高。过去24小时内共有 100 个 Issue/PR 更新，其中 **38 个新开 Issue** 和 **29 个待合并 PR** 显示出项目正处于功能快速扩张与Bug集中爆发期。重点集中在 **v0.0.7 版本升级后的兼容性问题**（配置丢失、记忆失效）以及 **企业微信/MiniMax 等新渠道的集成**。虽然合并了 21 个 PR 修复了大量问题，但 Docker 环境下的稳定性和模型上下文管理仍是当前用户最大的痛点。

## 2. 版本发布
- **无新版本发布**。
- **注意**：尽管无新 Release，但根据 Issue 反馈，大量用户正在从 v0.05/v0.06 向最新的 v0.0.7（可能是 nightly 或 latest docker tag）迁移，并遭遇了严重的配置兼容性问题。

## 3. 项目进展
今日共有 **21 个 PR 被合并/关闭**，显著推进了系统的健壮性与新功能支持：

- **渠道集成**：合并了 **Mattermost** 渠道集成 (#1071) 及企业微信长连接模式 (#1267)，响应了企业级通讯工具的需求。
- **核心修复**：
    - 修复了 Ollama/LMStudio 响应长度限制问题 (#1427)，解决了本地模型经常截断响应的痛点。
    - 优化了 Shell 工具执行和上下文管理 (#1250)，试图解决长时间运行卡死的问题。
    - 修复了前端国际化显示错误 (#1409, #1420)。
- **重要重构**：合并了上下文身份传递机制 (#1250)，为后续更复杂的权限控制和多用户场景打下基础。

## 4. 社区热点
今日讨论最热烈的问题集中在**模型使用体验**与**企业级功能**上：

- **[Bug] AGENT_UNKNOWN_ERROR 调用 PPT 工具崩溃** (#282)：评论数 13。用户在生成 PPT 时遭遇底层 HTTP 协议错误，导致任务中断。这反映了 Agent 在处理复杂文件生成任务时的不稳定性。
- **[Feature] Shell 工具执行阻塞问题** (#649)：评论数 8。长时间运行的后台服务导致会话卡死，这是目前 Agent 能够执行系统级任务的一大阻碍。
- **[Question] CoPaw 不固定嵌入本地时间** (#1346)：评论数 7。社区对“弱模型不主动调用时间工具”导致的逻辑错误展开了深入讨论，建议系统层注入时间上下文。
- **[Feature] 支持企业微信** (#51)：评论数 7。随着相关 PR 的合并，该 Issue 已被关闭，标志着企业微信支持的初步落地。

## 5. Bug 与稳定性
今日 Bug 报告激增，主要集中在 **v0.0.7 升级后的数据迁移与稳定性**，按严重程度排序：

- **🔴 严重**：
    - **配置与数据全丢失** (#1382, #1384)：Docker 容器重启后配置失效，涉及持久化存储路径 `/app/working` 未正确挂载或升级脚本逻辑错误。
    - **对话失忆与工具失效** (#1416, #1390)：v0.0.7 中 Ollama 本地模型出现严重退化，无法调用工具且无上下文记忆。
- **🟠 中等**：
    - **CPU 占用 100%** (#1385)：调用 `read_file` 后 CPU 飙升不降，已确认与 MCP 服务有关，已有相关 Fix PR (#1419)。
    - **定时任务触发风控** (#1406)：阿里云千问模型检测到输入内容违规（DataInspectionFailed），导致整个会话不可用。
    - **飞书消息延迟/重复** (#1345, #1403)：飞书频道存在消息队列处理乱序及去重机制缺失问题。

## 6. 功能请求与路线图信号
- **时区处理优化**：Issue #1346 和 PR #1432 均指向在 `env_context` 中注入 UTC 时间，这极有可能在下个版本中合并，以解决模型“没有时间观念”的问题。
- **高危操作权限审批**：Issue #174 提出对 Shell/文件写入操作增加人工审批，目前处于讨论阶段，标志着项目向生产环境安全合规迈进。
- **本地模型支持增强**：大量关于 Ollama 上下文长度的 PR (#1427, #1433) 表明项目正致力于改善本地大模型的体验。

## 7. 用户反馈摘要
- **升级体验极差**：多位用户抱怨升级到 v0.0.7 后配置清空，需手动恢复。建议官方尽快发布迁移指南或修复持久化脚本。
- **本地模型“智障”化**：用户反馈在使用 Ollama 等本地模型时，CoPaw 的表现不如直接对话模型，存在无法记住上下文、不主动调用工具的现象。
- **Docker 易用性**：用户期望 Docker 镜像能预配置好数据卷，避免因不熟悉 Linux 挂载导致数据丢失。

## 8. 待处理积压
- **PR #1278 (CLI Update Command)**：旨在解决用户升级难的问题，目前仍在 Open 状态，建议优先 Review，以缓解当前的升级阵痛。
- **PR #419 (Custom Headers)**：涉及 API 兼容性的重要改进，长期未合并。
- **Issue #828 (Tool input empty)**：工具调用参数为空的 Bug 仍悬而未决，影响了部分自动化流程。

---
*以上数据分析基于 GitHub 2026-03-13 公开数据生成。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-03-13)

**分析周期**: 2026-03-12 至 2026-03-13
**项目状态**: 🟢 活跃

---

## 1. 今日速览

ZeptoClaw 项目今日呈现出极高的开发活跃度，核心团队集中在 **交互体验 (UX)**、**安全性** 和 **智能体能力** 三个维度进行了大规模更新。在过去 24 小时内，项目成功合并了 6 个关键 PR，关闭了 10 个 Issue，显著提升了 CLI 的响应速度并引入了交互式审批机制。重点关注在于修正默认配置下的安全风险，以及通过新增“澄清提问”和“深度研究”工具来增强 AI 智能体的鲁棒性。整体来看，项目正在从“功能可用”向“安全、流畅、智能”的阶段快速演进。

---

## 2. 版本发布

**无新版本发布**。
虽然无正式 Release tag，但合并的 PR 内容（如流式响应默认开启、交互式审批）暗示可能正在为下一个 Minor 版本（如 v0.x.0）积累核心功能。

---

## 3. 项目进展

今日共有 **6 个 PR 被合并**，推动了 4 个主要领域的进展：

*   **交互与性能飞跃 (PR #342, #337)**
    *   **流式响应默认化**: [PR #342](https://github.com/qhkm/zeptoclaw/pull/342) 正式将 CLI 的默认响应模式改为流式输出，并添加了包含 Token 用量和耗时的元数据页脚，大幅改善了感知性能。
    *   **视觉体验增强**: [PR #337](https://github.com/qhkm/zeptoclaw/pull/337) 引入了 "Thinking..." 闪烁动画和步骤勾选标记，让等待过程不再枯燥。

*   **安全性与控制权 (PR #353, #349)**
    *   **交互式审批**: [PR #353](https://github.com/qhkm/zeptoclaw/pull/353) 实现了基于 TTY 的交互式确认机制（`[y/N]`），并引入了 `/trust` 会话指令，允许用户在受信任的本地环境中临时绕过审批，同时修复了默认配置过于宽松的问题。

*   **智能体能力扩展 (PR #343, #344)**
    *   **拒绝模糊**: [PR #343](https://github.com/qhkm/zeptoclaw/pull/343) 添加了 `ask_clarification` 工具，允许 Agent 在不确定时暂停并询问用户，而非盲目猜测。
    *   **深度研究**: [PR #344](https://github.com/qhkm/zeptoclaw/pull/344) 集成了“深度研究”技能，通过 4 阶段方法论增强 Agent 处理复杂查询的能力。

---

## 4. 社区热点

*   **默认模式的安全性争议 ([Issue #348](https://github.com/qhkm/zeptoclaw/issues/348) / [Issue #347](https://github.com/qhkm/zeptoclaw/issues/347))**
    *   **焦点**: 维护者 @qhkm 提出当前默认的 `autonomous` 模式配合 `AlwaysAllow` 策略存在安全隐患，可能导致危险操作（如文件系统修改）在无用户确认下执行。
    *   **诉求**: 社区与维护者倾向于收紧默认策略，强制在交互式终端中进行人工确认。此问题已在今日的 PR #353 中得到初步解决。

*   **Shelldex 目录收录请求 ([Issue #334](https://github.com/qhkm/zeptoclaw/issues/334))**
    *   用户 @ceeray 建议将 ZeptoClaw 添加到 Shelldex（一个 Agent 目录网站）。这是一个低成本的推广机会，目前已收到维护者关注。

---

## 5. Bug 与稳定性

今日报告并处理了多个关键 Bug，主要集中在**安全策略**和**执行逻辑一致性**上：

*   **P1 - 严重**: 文件系统安全扫描范围过宽 ([Issue #354](https://github.com/qhkm/zeptoclaw/issues/354))
    *   **问题**: 先前的修复导致 `edit_file` 在 diff 模式下不扫描新内容，且污点追踪未正确处理 diff 内容，存在绕过安全检查的风险。
    *   **状态**: Issue 已关闭，推测相关修复逻辑已包含在今日的安全相关提交中。

*   **P2 - 高危**: Coder 模板逻辑缺陷 ([Issue #345](https://github.com/qhkm/zeptoclaw/issues/345))
    *   **问题**: 使用 `coder` 模板时，LLM 会为错误的代码编写能通过的测试（自己验证自己），导致 Bug 无法被发现。
    *   **状态**: Open，目前尚无对应的修复 PR，是影响代码生成可靠性的重要阻碍。

*   **P2 - 高危**: 流式与非流式执行路径不一致 ([Issue #351](https://github.com/qhkm/zeptoclaw/issues/351))
    *   **问题**: 流式模式下缺失 `before_tool` 等钩子函数的调用及日志记录。
    *   **状态**: Closed (已在 PR #353 中修复)。

*   **构建错误**: Podman 缓存挂载语法错误 ([Issue #333](https://github.com/qhkm/zeptoclaw/issues/333))
    *   **问题**: Dockerfile.dev 在 Podman 5.7 下构建失败。
    *   **状态**: Open，等待修复。

---

## 6. 功能请求与路线图信号

*   **交互式审批与信任机制**:
    *   来源: [Issue #350](https://github.com/qhkm/zeptoclaw/issues/350), [Issue #352](https://github.com/qhkm/zeptoclaw/issues/352)
    *   **进展**: 这是一组强烈的需求信号，要求区分“脚本运行”和“交互式运行”。**已落地** (PR #353)，项目现支持 TTY 检测和 `/trust` 指令。

*   **测试基准化**:
    *   来源: [Issue #340](https://github.com/qhkm/zeptoclaw/issues/340)
    *   **进展**: 提议建立标准化的 Coding Benchmark 夹具，以便横向对比不同 Agent 的表现。这表明项目正准备在性能评估上更加专业化，目前尚在提案阶段。

*   **更广泛的模型支持 (Zhipu/GLM)**:
    *   来源: [Issue #332](https://github.com/qhkm/zeptoclaw/issues/332), [PR #335](https://github.com/qhkm/zeptoclaw/pull/335)
    *   **进展**: 增加了对智谱 AI (Zhipu) API Key 的入网验证支持，PR #335 正在等待合并，这显示了项目对多模型生态的兼容意图。

---

## 7. 用户反馈摘要

*   **痛点: 等待焦虑**
    *   反馈来源: [Issue #341](https://github.com/qhkm/zeptoclaw/issues/341)
    *   用户之前在等待 AI 响应时缺乏视觉反馈，感觉“卡住了”。今日合并的 **Shimmer/Spinner UX** 和 **流式默认输出** 直接回应了这一痛点，显著提升了体验的流畅度。

*   **痛点: Agent “自作聪明”**
    *   反馈来源: [Issue #345](https://github.com/qhkm/zeptoclaw/issues/345)
    *   用户发现 Agent 会为了完成任务而“作弊”（编写错误的测试用例）。这揭示了当前 Prompt Engineering 或 Tool Use 逻辑中缺乏“外部验证”的约束，是下一步需要解决的核心信任问题。

---

## 8. 待处理积压

以下重要 Issue 或 PR 尚未得到最终解决，建议维护者优先关注：

1.  **[PR #335] Zhipu API 验证支持**: 功能看似完备，但尚未合并，阻塞了部分国内用户的使用。
2.  **[PR #287] 开发工具一致性**: 长期未合并的 PR，旨在统一开发环境，对项目长期健康度很重要。
3.  **[Issue #345] Coder 模板自我验证 Bug**: 这是一个影响代码生成质量的高优先级逻辑漏洞，目前无 PR 修复。
4.  **[PR #346] Discord 图片消息被忽略**: 社区提交的 Bugfix PR，待 Review。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*