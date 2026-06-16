# OpenClaw 生态日报 2026-06-16

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-06-16 04:28 UTC

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

# OpenClaw 项目动态日报 (2026-06-16)

## 1. 今日速览
OpenClaw 今日保持着极高的社区活跃度，Issues 与 PR 更新量均达到 500 条，显示出项目正处于快速迭代与功能扩展期。项目发布了 **v2026.6.8-beta.2** 版本，显著增强了 Telegram 和 WhatsApp 频道的富文本交付能力。然而，Issue 积压明显（新开/活跃 481 条 vs 关闭 19 条），且待合并 PR 数量高达 410 条，表明维护者面临较大的审核压力，部分关键安全与稳定性问题亟待解决。社区对跨平台客户端及多模态交互的需求持续高涨。

## 2. 版本发布
- **版本号**: `v2026.6.8-beta.2`
- **更新重点**:
  - **频道交付增强**: Telegram 和 WhatsApp 频道的消息交付变得更丰富且健壮。Telegram 现支持发送包含表格、列表、可折叠引用的结构化富文本。
  - **格式保留**: 改进了换行符的保留逻辑，优化了 CLI 后端交付时的 Prompt 保留机制。
  - **安全性**: 移除了原生草稿迁移功能，增强了富媒体处理的安全性。

## 3. 项目进展
今日共有 **90** 个 PR 合并或关闭，主要推进了以下领域：

- **稳定性修复**: PR #90846（已关闭）修复了媒体文件清理逻辑，避免了写入时的即时修剪，转而依赖配置的定时器，解决了潜在的竞态条件问题。
- **UI 功能扩展**: PR #41892 正在推进控制面板的 Cron 任务日历时间线视图，提升任务可视化能力；PR #40874 为 iOS 带来了 Liquid Glass UI 和灵动岛支持。
- **多通道支持**: PR #39496 正在整合飞书插件的全面增强，包括流式传输、去重和日历功能；PR #41265 修复了 Discord 动态/WebP 图片的内容类型丢失问题。
- **核心架构**: PR #71400 引入了“自适应重置模式”，尝试解决每日重置与空闲重置逻辑的冲突，防止活跃会话被意外中断。

## 4. 社区热点
今日讨论最热烈的问题集中在平台覆盖与核心交互体验上：

1.  **Linux/Windows 客户端需求** (Issue #75)
    - **热度**: 👍 79 | 评论 109
    - **诉求**: 社区强烈希望补齐 Linux 和 Windows 的原生客户端，目前仅有 macOS/iOS/Android 支持，导致桌面端用户体验缺失。
2.  **工具调用间的文本泄露** (Issue #25592)
    - **热度**: 评论 32 | 标签: `impact:security`
    - **诉求**: Agent 在工具调用间的“内心独白”或错误处理文本意外发送到了消息频道（Slack/iMessage），被视为严重的 UX 和安全隐患。
3.  **Android 预编译包缺失** (Issue #9443)
    - **热度**: 评论 25
    - **诉求**: 用户呼吁在 Release 中提供预编译的 Android APK，目前需自行编译源码，门槛较高。
4.  **Webchat 安全上下文问题** (Issue #32473)
    - **热度**: 评论 17
    - **诉求**: Docker 部署后控制台 UI 要求 HTTPS 或 localhost 安全上下文，导致部分 VPS 用户无法正常使用。

## 5. Bug 与稳定性
今日报告了多个 P1 级别的严重 Bug，主要集中在会话管理和多模态处理：

- **[P1] Signal 守护进程竞态条件** (Issue #22676)
  - **问题**: SIGUSR1 重启时，旧进程未退出导致新进程启动失败，引发孤立进程和发送失败。
  - **状态**: 待修复。
- **[P1] Gemini Vertex 崩溃** (Issue #38327)
  - **问题**: 升级到 `2026.3.2` 后，使用 google-vertex/gemini-3.1-pro-preview 模型时抛出 "Cannot convert undefined or null to object" 错误。
  - **状态**: 回归问题，待修复。
- **[P1] Bootstrap 文件静默忽略** (Issue #29387)
  - **问题**: Agent 目录下的引导文件（如 SOUL.md）未被注入系统提示词，仅工作区目录生效，导致 Agent 行为异常。
  - **状态**: 待修复。
- **[P1] Windows 更新失败** (Issue #40540)
  - **问题**: Windows 上执行 `openclaw update` 时因 EBUSY 错误失败，无法自更新。

## 6. 功能请求与路线图信号
- **安全沙箱与密钥管理**: Issue #10659 提出“掩码密钥”功能，防止 Agent 读取原始 API Key；Issue #6731 建议引入类似 Rust 的安全/不安全模式，限制本地沙箱权限。这反映了用户对 AI Agent 自主操作安全性的深切担忧。
- **上下文管理优化**: Issue #22438 提出分层引导文件加载，以节省 Token 消耗；Issue #35203 提出 RFC 以增强多 Agent 协作（能力画像+共享黑板）。这预示着项目正从单点功能向复杂的协作架构演进。
- **企业级特性**: Issue #12602 请求支持 Slack Block Kit 以实现富交互，表明 OpenClaw 正在从“玩具”向生产力工具转型。

## 7. 用户反馈摘要
- **部署痛点**: 多个用户反馈在 Docker 环境下遇到权限和网络配置问题（如 Issue #32473），且 Android 用户对缺乏官方 APK 表示失望。
- **Agent 行为不可控**: 用户对 Agent 在错误处理时的行为感到困惑（Issue #25592），特别是内部日志泄露到用户对话频道，降低了专业感。
- **多模态体验**: 飞书和 Telegram 用户对媒体文件处理（图片丢失、格式转换）提出了较高要求，相关 PR（#39496, #41265）受到关注。

## 8. 待处理积压
- **Linux/Windows 客户端支持** (Issue #75): 长期高热度需求，目前仍无明确进展，建议项目方纳入路线图。
- **动态模型发现** (Issue #10687): OpenRouter 等提供商模型更新快，静态模型列表导致兼容性滞后。
- **Slack Block Kit 支持** (Issue #12602): 提升企业级用户体验的关键功能，目前讨论热度高但尚无实现 PR。

---

## 横向生态对比

# AI 智能体与个人助手开源生态日报 (2026-06-16 横向对比分析)

## 1. 生态全景
当前 AI 智能体开源生态正处于从“单一对话工具”向“多模态生产力平台”与“多智能体协作架构”转型的关键期。OpenClaw、CoPaw 等头部项目在跨平台交付和多模态交互上高速迭代，Zeroclaw、Hermes Agent 则在架构安全性、多智能体隔离等企业级特性上深入探索。生态整体呈现出“前端体验重交互、后端架构重隔离”的趋势，MCP（Model Context Protocol）与 A2A（Agent-to-Agent）协议正逐渐成为连接工具与智能体的事实标准。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新 | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **~500** | **~500** | v2026.6.8-beta.2 | ⚠️ **高压预警**：更新量巨大，但 PR 积压严重 (410+)，Issue 债务高企，维护者审核压力极大。 |
| **CoPaw (QwenPaw)** | 47 | 50 | 无 | 🟢 **活跃开发**：品牌重塑后处于架构重构期，PR 合并率高，社区反馈热烈，正向良性发展。 |
| **Zeroclaw** | 50 | 50 | 无 | 🟢 **稳健迭代**：PR 积压适中，聚焦企业级安全与架构重构，Issue 质量高，涉及核心协议与权限。 |
| **Hermes Agent** | 50 | 50 | 无 | 🟡 **修复攻坚**：v0.16.0 引入严重回归 Bug，社区正密集提交修复，处于稳定性维护期。 |
| **IronClaw** | 44 | 50 | 无 | 🟢 **快速响应**：针对 OAuth 与扩展问题修复迅速，PR 合并率高，项目处于功能补全阶段。 |
| **NanoBot** | 6 | 26 | 无 | 🟢 **平稳推进**：Issue 少但 PR 活跃，核心功能开发中，无明显积压。 |
| **PicoClaw** | 低 | 13 | Nightly | 🟢 **质量巩固**：集中修复底层 Panic 风险，代码质量意识强。 |
| **LobsterAI** | 低 | 11 | 无 | 🟢 **功能打磨**：重构语音架构，社区活跃度低但开发节奏稳定。 |
| **NanoClaw** | 0 | 12 | 无 | 🔵 **静默开发**：无社区噪音，专注底层修复与 MCP 集成。 |
| **NullClaw** | 2 | 1 | 无 | 🔵 **低频维护**：聚焦运行时配置，依赖社区反馈驱动。 |
| **Moltis** | 0 | 2 | 无 | 🔵 **功能迭代**：开发者自驱型，社区互动缺失。 |
| **TinyClaw / ZeptoClaw / EasyClaw** | 0 | 0 | 无 | ⚪ **静默**：过去 24 小时无活动。 |

## 3. OpenClaw 在生态中的定位

*   **生态核心参照**：OpenClaw 是当前生态中流量与更新量最大的项目，充当着“风向标”的角色。
*   **优势**：
    *   **跨平台交付能力**：在 Telegram/WhatsApp 等即时通讯渠道的富文本交付能力上遥遥领先（v2026.6.8-beta.2 核心卖点）。
    *   **社区规模**：Issue 讨论热度（如 Linux 客户端需求）远超同类，具备显著的用户基数优势。
*   **劣势与风险**：
    *   **维护瓶颈**：410 个待合并 PR 显示出严重的审核阻塞，相比 CoPaw 和 IronClaw 的高效合并，OpenClaw 面临“维护过载”风险。
    *   **稳定性债务**：P1 级别的竞态条件和泄露问题频发，相比 Zeroclaw 的安全架构和 PicoClaw 的 Panic 修复，OpenClaw 在工程质量上显得较为粗放。
*   **技术路线差异**：相比 Hermes Agent 的“单守护进程多 Agent”架构和 Zeroclaw 的“企业级网关”路线，OpenClaw 更偏向**消费级助手**产品，强调全端覆盖与交互体验，而非底层架构的隔离与安全。

## 4. 共同关注的技术方向

*   **多模态与富媒体交付**：
    *   **涉及项目**：OpenClaw, NanoBot, Zeroclaw。
    *   **诉求**：解决图片/视频在容器环境下的路径挂载问题，以及跨平台（Discord/飞书/WhatsApp）的格式兼容与渲染。
*   **MCP 协议与工具链生态**：
    *   **涉及项目**：NanoClaw, Zeroclaw, CoPaw, NanoBot。
    *   **诉求**：全面拥抱 MCP 标准，支持 HTTP/SSE 远程传输，解决静态工具列表导致的兼容性滞后，实现工具的动态发现。
*   **安全隔离与权限管控**：
    *   **涉及项目**：OpenClaw, Zeroclaw, Hermes Agent, PicoClaw。
    *   **诉求**：防止“内心独白”泄露、沙箱逃逸、Agent 越权操作；普遍引入密钥掩码、权限显式传递和沙箱隔离机制。
*   **上下文管理策略**：
    *   **涉及项目**：OpenClaw, CoPaw, Zeroclaw。
    *   **诉求**：长对话下的 Token 消耗优化、压缩策略以及上下文注入方式，避免任务中断或信息丢失。

## 5. 差异化定位分析

| 维度 | **OpenClaw** | **Zeroclaw / Hermes** | **CoPaw / IronClaw** | **Nano 系列 / PicoClaw** |
| :--- | :--- | :--- | :--- | :--- |
| **核心定位** | **全平台消费级助手** | **企业级/架构级框架** | **集成化/桌面化应用** | **轻量化/特定场景组件** |
| **目标用户** | C端用户、IM 自动化玩家 | 开发者、企业运维、安全敏感场景 | 个人开发者、生产力极客 | 嵌入式开发者、私有化部署用户 |
| **架构重心** | 渠道适配、富交互 | 多智能体路由、安全网关、WASM | 插件系统、UI/UX、工作流 | 运行时性能、低资源占用 |
| **主要痛点** | 维护带宽不足、稳定性 | 认证复杂度、协议兼容性 | 桌面端崩溃、重命名混乱 | 环境兼容性、功能覆盖度 |

## 6. 社区热度与成熟度

*   **爆发期/高压期**：
    *   **OpenClaw**：流量巨大但积压严重，处于功能扩展与维护债务的博弈期。
    *   **CoPaw**：品牌重塑引发讨论，架构重构活跃，处于上升期。
*   **快速迭代期**：
    *   **Zeroclaw, Hermes Agent, IronClaw**：功能开发迅速，社区反馈活跃，主要集中在解决企业级特性（OAuth、多Agent）和关键 Bug 修复。
*   **质量巩固期**：
    *   **PicoClaw, NanoBot**：更新量适中，侧重于代码健壮性和底层 Bug 清理，无明显维护危机。
*   **静默/维护期**：
    *   **Moltis, NullClaw**：社区互动冷淡，主要由核心开发者推动特定功能，处于长尾维护状态。

## 7. 值得关注的趋势信号

1.  **客户端与渠道的“最后三公里”困境**：
    *   OpenClaw 对 Linux/Windows 客户端（Issue #75）和 CoPaw 对桌面端稳定性的强烈诉求表明，**跨平台客户端开发是当前 AI 助手落地的最大瓶颈**。Web 端已成熟，但原生桌面端集成（如灵动岛、系统托盘）仍极具挑战。
2.  **“安全上下文”成为企业级刚需**：
    *   Zeroclaw 的 CA 证书支持和 OpenClaw 的文本泄露问题反映出用户不再满足于“能用”，而是对**数据隐私、操作审计和权限隔离**提出了严苛要求。安全特性已成为区分“玩具”与“生产工具”的分水岭。
3.  **智能体架构从单体向协作演进**：
    *   Hermes 的 CICS 架构、Zeroclaw 的 A2A 发现机制以及 OpenClaw 的多 Agent RFC 显示，**多智能体协作架构** 已成为头部项目的必经之路。单一 Agent 正在向“调度器”角色转变。
4.  **模型兼容性与成本控制焦虑**：
    *   各项目均在加强对本地模型（Ollama）、OpenAI 兼容接口及 Token 压缩技术的支持。在 Token 成本高企的背景下，**上下文压缩策略**（如 CompressionDecorator）和**Token 实时统计**将成为标配功能。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-16)

## 1. 今日速览
NanoBot 项目今日保持高度活跃，共有 **26 个 PR 更新**与 **6 个 Issue 更新**，显示出项目正处于快速迭代期。社区贡献主要集中在**多模型适配优化**（Kimi K2.7, Mistral）、**WebUI 功能增强**以及**稳定性修复**。虽然今日无新版本发布，但大量待合并 PR（21 个）表明下一个版本将包含丰富的功能更新。值得注意的是，出现了关于安装脚本的阻断性 Bug，需维护者优先关注。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 2 个 PR 被关闭（主要为准入合并或修复），另有大量功能性 PR 正在审核中，项目在以下方面取得显著进展：

*   **Agent 核心逻辑优化**：PR [#4359](https://github.com/HKUDS/nanobot/pull/4359) 修复了目标延续上下文的刷新机制，确保长任务创建的目标能即时生效；PR [#4358](https://github.com/HKUDS/nanobot/pull/4358) 修复了空响应重试时的用户消息重复记录问题。
*   **模型生态支持**：PR [#4361](https://github.com/HKUDS/nanobot/pull/4361) 新增了对 Kimi K2.7 模型的思维链支持；PR [#4351](https://github.com/HKUDS/nanobot/pull/4351) 显著增强了对 Mistral API 的兼容性。
*   **WebUI 与自动化**：PR [#4330](https://github.com/HKUDS/nanobot/pull/4330) 提交了自动化管理视图，大幅提升了前端交互体验。

## 4. 社区热点
*   **Issue [#4360](https://github.com/HKUDS/nanobot/issues/4360) - 安装脚本报错**：今日新开 Issue，引发 4 条评论讨论。用户报告在 Debian 13 Docker 容器中安装时出现 "end of file unexpected" 语法错误，这可能影响新用户的部署体验。
*   **Issue [#4362](https://github.com/HKUDS/nanobot/issues/4362) - A2A/MCP 集成**：MetaVision AI 宣布其工具现已兼容 A2A 和 MCP 协议，展示了项目生态扩展的潜力。
*   **PR [#4330](https://github.com/HKUDS/nanobot/pull/4330) - WebUI 自动化管理**：作为正在进行的大型功能更新，吸引了社区对前端管理能力的关注。

## 5. Bug 与稳定性
今日报告的问题主要集中在安装环境兼容性和运行时异常处理：

*   **P0 - 阻断性安装问题**：
    *   [OPEN] [#4360](https://github.com/HKUDS/nanobot/issues/4360)：官方 Debian 13 镜像下安装程序崩溃，疑似 Shell 脚本兼容性问题。**暂无 Fix PR。**
*   **P1 - 运行时逻辑错误**：
    *   [OPEN] [#4287](https://github.com/HKUDS/nanobot/issues/4287)：DeepSeek 模型返回空响应时未能触发备用模型回退机制。
    *   [FIXED] [#4359](https://github.com/HKUDS/nanobot/pull/4359)：修复了持续目标上下文丢失问题。
    *   [FIXED] [#4309](https://github.com/HKUDS/nanobot/issues/4309)：`nanobot serve` API 返回 token 用量始终为 0 的问题已关闭。
*   **P2 - 会话与上下文问题**：
    *   [FIXED] [#4348](https://github.com/HKUDS/nanobot/pull/4348)：修复了自动压缩会话时可能截断用户消息的问题。
    *   [OPEN] [#4322](https://github.com/HKUDS/nanobot/issues/4322)：合并代码后出现 `session_key` 未定义错误，目前标记为 `stale`，建议确认是否存在合并冲突残留。

## 6. 功能请求与路线图信号
*   **审计与可观测性**：PR [#4320](https://github.com/HKUDS/nanobot/pull/4320) 提议增加 `tools.audit` 配置，用于记录 Agent 行为，显示出企业级应用对安全审计的需求。
*   **静默任务调度**：PR [#4357](https://github.com/HKUDS/nanobot/pull/4357) 提出为 Cron 任务增加 `silent` 模式，允许后台监控任务仅在触发条件满足时通知用户，优化了自动化体验。
*   **搜索能力扩展**：PR [#4350](https://github.com/HKUDS/nanobot/pull/4350) 集成了 Keenable 搜索引擎，进一步丰富了内置搜索源。

## 7. 用户反馈摘要
*   **部署痛点**：用户在特定纯净环境下的安装脚本报错，反映出脚本对环境依赖的脆弱性。
*   **API 兼容性**：用户对 OpenAI 兼容接口的期望不仅是协议对齐，还包括返回数据的完整性（如 Token 用量统计），Issue #4309 的关闭表明团队正积极完善此类细节。
*   **多模态交互**：PR #4353 关于 WhatsApp 语音转文字的修复，以及 #4354 的已读回执功能，显示了个人助理场景下用户对即时通讯工具集成的强烈需求和细节要求。

## 8. 待处理积压
*   **Issue [#4322](https://github.com/HKUDS/nanobot/issues/4322)**：虽然标记为 `stale`，但 `NameError` 级别的崩溃通常意味着代码合并存在问题，建议重新激活或确认修复状态。
*   **Issue [#4287](https://github.com/HKUDS/nanobot/issues/4287)**：关于空响应回退逻辑的缺陷，目前尚未有明确指派的修复 PR，影响高并发下的服务稳定性。
*   **PR 积压**：目前有 21 个待合并 PR，部分（如 #4330, #4320）涉及较大架构变动，建议维护者加快 Review 进度以避免分支冲突。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-16)

## 1. 今日速览
Zeroclaw 项目今日保持极高的社区活跃度，Issue 与 PR 更新量均达到 50 条，显示出强劲的迭代势头。项目重心目前明显向 **架构安全性**、**多智能体协作** 和 **企业级部署支持** 倾斜，社区不仅提交了大量修复补丁，还发起了多个关于 WebAssembly 和供应链安全的 RFC 讨论。尽管无新版本发布，但 v0.8.1 和 v0.9.0 的路线图规划已非常清晰，大量 P1/P2 级别的缺陷修复正在排队合入，整体处于版本发布前的密集维护期。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
尽管过去 24 小时仅有 1 个 PR 被合并/关闭，但活跃的 PR 数量高达 49 个，主要集中在底层架构重构与关键 Bug 修复：

*   **多渠道集成增强**：[PR #7098](https://github.com/zeroclaw-labs/zeroclaw/pull/7098) 为 Mattermost 频道引入了可选的 WebSocket 监听模式，显著降低延迟；[PR #7535](https://github.com/zeroclaw-labs/zeroclaw/pull/7535) 实现了 WhatsApp 的表情反应功能。
*   **核心体验优化**：[PR #7223](https://github.com/zeroclaw-labs/zeroclaw/pull/7223) 为 Gateway Web 聊天界面增加了斜杠命令支持，提升了交互效率；[PR #7637](https://github.com/zeroclaw-labs/zeroclaw/pull/7637) 修复了 Quickstart 中 Agent 别名输入的自动规范化问题。
*   **安全性修复**：[PR #7640](https://github.com/zeroclaw-labs/zeroclaw/pull/7640) 修复了 Delegate 工具在 OAuth 提供商下的凭证回退漏洞；[PR #7340](https://github.com/zeroclaw-labs/zeroclaw/pull/7340) 重构了 URL 验证逻辑，修补了 IPv6 格式的校验缺失。

## 4. 社区热点
今日讨论最热烈的话题集中在架构演进与企业级需求适配：

*   **[Issue #2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) Multi-Agent Routing** (👍 9): 社区对“多智能体路由”功能呼声极高，该议题旨在实现单 Gateway 下的多账号绑定与隔离 Workspace，是向成熟多租户平台演进的关键一步。
*   **[Issue #1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458) 自定义 CA 证书支持** (评论 8): 该 Issue 已关闭，但引发了大量关于企业内网自签名证书适配的讨论，反映出 Zeroclaw 在企业私有化部署场景中的用户基数正在增长。
*   **[Issue #7673](https://github.com/zeroclaw-labs/zeroclaw/issues/7673) 上下文压缩 RFC** (评论 3): 提出了 `CompressionDecorator` 方案，旨在解决长上下文场景下的 Token 消耗问题，是性能优化的核心提案。
*   **[Issue #7674](https://github.com/zeroclaw-labs/zeroclaw/issues/7674) 移除 Node.js 依赖 RFC**: 激进地提议全面转向 WebAssembly 以消除 npm 供应链风险，引发了关于技术栈未来的深度探讨。

## 5. Bug 与稳定性
今日报告了多个影响核心流程的 Bug，部分已有对应修复 PR：

*   **P1 严重**:
    *   **[Issue #7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) MCP 工具作用域失效**: 配置解析了 `mcp_bundles` 但运行时未强制执行，导致隔离安全策略实际上无效。
    *   **[Issue #7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542) Gateway ask_user 崩溃** (已关闭): WebSocket 会话中调用 `ask_user` 瞬间失败，严重影响交互式 Agent 体验。
*   **P2 高危**:
    *   **[Issue #7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) Anthropic 模型工具调用失效**: 在 `wire_api=responses` 配置下，Native/MCP 工具列表未发送给模型，导致 Agent 无法调用工具。
    *   **[Issue #7753](https://github.com/zeroclaw-labs/zeroclaw/issues/7753) 会话持久化竞态条件**: 同一发件人的并发消息可能导致会话历史乱序。
    *   **[PR #7755](https://github.com/zeroclaw-labs/zeroclaw/pull/7755)** 修复了运行时锁中毒导致的崩溃问题，提升了系统鲁棒性。

## 6. 功能请求与路线图信号
结合 Issue 追踪器与 PR 动态，下一版本 (v0.8.1/v0.9.0) 的重点已浮出水面：

*   **多智能体与互操作性**: [Issue #7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) 提出的 A2A Agent 发现机制已被接受，旨在通过 `.well-known/agent-card.json` 实现跨平台 Agent 互通。
*   **安全性与权限**: [Issue #7743](https://github.com/zeroclaw-labs/zeroclaw/issues/7743) 计划支持 Delegate 工具的显式权限传递，解决当前子 Agent 继承父 Agent 权限受限的问题。
*   **配置灵活性**: [Issue #7749](https://github.com/zeroclaw-labs/zeroclaw/issues/7749) 请求支持 Per-agent 的 `prompt_injection_mode` 覆盖，以满足不同 Agent 对安全策略的差异化需求。

## 7. 用户反馈摘要
*   **私有化部署痛点**: 多个 Issue (如 #1458, #551) 反映用户在对接企业内网自定义推理端点时，遭遇 SSL 证书验证问题，急需更灵活的 CA 导入或忽略证书选项。
*   **工具链稳定性**: 用户反馈在使用 Anthropic 模型时偶发工具调用失败，以及对 `mcp_bundles` 配置未生效感到困惑，表明工具链的配置一致性校验仍需加强。
*   **开发体验**: 社区对 CLI 和配置文件的易用性提出了具体建议，如 [Issue #7468](https://github.com/zeroclaw-labs/zeroclaw/issues/7468) 要求支持别名重命名，以及 Web UI 对斜杠命令的渴望 ([PR #7223](https://github.com/zeroclaw-labs/zeroclaw/pull/7223))。

## 8. 待处理积压
*   **[Issue #551](https://github.com/zeroclaw-labs/zeroclaw/issues/551) [blocked]**: 允许对 OpenAI 兼容端点进行不安全 HTTPS 请求。该 Issue 自 2 月创建，状态仍为 `blocked`，涉及安全风险，需维护者尽快给出明确的设计决策。
*   **[Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) [in-progress]**: 追踪并恢复此前批量回滚丢失的 153 个提交。这是一个长期维护任务，对代码历史完整性至关重要。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-16)

## 1. 今日速览
Hermes Agent 今日保持了极高的社区活跃度，过去24小时内 Issues 与 PR 更新数均达到 50 条，显示出项目正处于密集开发与调试阶段。尽管没有发布新版本，但社区提交了大量针对 v0.16.0 版本回归问题的修复 PR，核心关注点集中在**多会话并发隔离**、**桌面端稳定性**以及**网关平台的兼容性**上。目前项目处于修复迭代期，暂无破坏性变更发布，但待合并 PR 积压较多（44条），建议维护者优先关注 P0/P1 级别的安全与崩溃修复。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日无合并记录（PR 更新多为新建或讨论中），但在关键架构优化和 Bug 修复方面有显著推进：
- **并发与隔离架构**：社区提交了重要 PR [#47027](https://github.com/NousResearch/hermes-agent/pull/47027)，引入了基于 CICS 模型的三层架构，旨在实现单守护进程下的多智能体隔离，这是对 Issue [#18715](https://github.com/NousResearch/hermes-agent/issues/18715)（远程 Agent 本地工具执行）诉求的直接响应。
- **严重回归修复**：针对 v0.16.0 引入的 SQLite 崩溃问题，PR [#47031](https://github.com/NousResearch/hermes-agent/pull/47031) 和 [#47025](https://github.com/NousResearch/hermes-agent/pull/47025) 分别提供了针对缺少 trigram tokenizer 环境的修复方案。
- **会话污染修复**：PR [#47029](https://github.com/NousResearch/hermes-agent/pull/47029) 针对高优先级的并发会话内存污染问题（Issue [#46303](https://github.com/NousResearch/hermes-agent/issues/46303)）提出了解决方案。
- **安全性更新**：PR [#8050](https://github.com/NousResearch/hermes-agent/pull/8050) 提出移除代码执行沙箱中的根路径，防止凭据窃取，正在等待合并。

## 4. 社区热点
今日讨论最热烈的 Issue 集中在输出限制与多平台兼容性：
- **[#7237 [CLOSED] [Bug]: Error: Response truncated due to output length limit](https://github.com/NousResearch/hermes-agent/issues/7237)**  
  评论数高达 50 条。用户反馈在 CLI 和 Gateway（Telegram/Discord）中长文本生成常被截断。该 Issue 虽已关闭，但讨论热度极高，反映了用户对长上下文处理的强烈需求。
- **[#40187 [OPEN] macOS Desktop fails to compile](https://github.com/NousResearch/hermes-agent/issues/40187)**  
  评论数 8 条。macOS 桌面端编译失败是当前桌面用户的痛点，涉及 Electron 构建配置问题，影响了开发者的本地部署体验。
- **[#18715 [OPEN] Support remote Hermes agent with local tool execution](https://github.com/NousResearch/hermes-agent/issues/18715)**  
  评论数 4 条，点赞数 15。用户强烈希望能分离 Agent 计算层与工具执行层，以便利用远程算力同时保持本地环境操作，这是架构演进的重要信号。

## 5. Bug 与稳定性
今日报告了多个影响使用的严重 Bug，部分已有修复方案：

**P1 - 致命/崩溃级**
- **[Bug] SessionDB 初始化崩溃 (SQLite Trigram)**：Issue [#47002](https://github.com/NousResearch/hermes-agent/issues/47002) 指出 v0.16.0 在缺少 trigram tokenizer 的 SQLite 环境下直接崩溃。
  - *Fix PR*: [#47031](https://github.com/NousResearch/hermes-agent/pull/47031) (Open)
- **[Bug] Telegram Gateway 冻结**：Issue [#40691](https://github.com/NousResearch/hermes-agent/issues/40691) 报告 Telegram 网关在轮询冲突后停止处理所有消息。

**P2 - 严重功能缺陷**
- **[Bug] 并发会话交叉污染**：Issue [#46303](https://github.com/NousResearch/hermes-agent/issues/46303) 指出多会话并发时存在内存注入和 Git 工作树冲突。
  - *Fix PR*: [#47029](https://github.com/NousResearch/hermes-agent/pull/47029) (Open)
- **[Bug] 飞书平台代码块截断**：Issue [#46941](https://github.com/NousResearch/hermes-agent/issues/46941) 报告终端命令在飞书消息块中被截断。
- **[Bug] 桌面端僵尸进程**：Issue [#46975](https://github.com/NousResearch/hermes-agent/issues/46975) 报告切换配置文件时累积大量僵尸 dashboard 进程。

## 6. 功能请求与路线图信号
- **多智能体架构演进**：Issue [#18715](https://github.com/NousResearch/hermes-agent/issues/18715) 与 PR [#47027](https://github.com/NousResearch/hermes-agent/pull/47027) 显示项目正在向支持远程 Agent 与本地工具分离的单守护进程多 Agent 架构演进，这是未来版本的重要方向。
- **技能管理优化**：Issue [#22620](https://github.com/NousResearch/hermes-agent/issues/22620) 提出技能列表膨胀导致上下文窗口溢出，建议引入向量路由或懒加载。这表明随着 Skill 数量增加，上下文管理将成为性能瓶颈。
- **桌面端用户体验**：Issue [#46097](https://github.com/NousResearch/hermes-agent/issues/46097) 请求桌面端字体大小设置，显示桌面端 UI 细节正在被社区细化关注。

## 7. 用户反馈摘要
- **安装与网络痛点**：Issue [#46839](https://github.com/NousResearch/hermes-agent/issues/46839) 反映国内用户在安装桌面端时因网络问题导致失败，希望官方优化代理配置或提供镜像支持。
- **平台差异体验**：用户反馈在 Feishu、Telegram 等不同平台上，Markdown 渲染和长文本截断表现不一致，希望统一网关行为。
- **并发隔离需求**：高级用户开始尝试在多会话环境下并发运行 Agent，但对目前的内存和文件系统隔离机制感到不满，认为存在数据安全风险。

## 8. 待处理积压
- **[P0 安全] PR [#8050](https://github.com/NousResearch/hermes-agent/pull/8050)**：关于移除代码执行沙箱中 Python 根路径的安全修复。该 PR 创建于 4 月，至今未合并，存在凭据泄露风险，建议立即合并或给予反馈。
- **[P2 功能] Issue [#22620](https://github.com/NousResearch/hermes-agent/issues/22620)**：关于技能懒加载的功能请求，创建于 5 月，至今未有明确进展，随着用户技能库增大，该问题紧迫性上升。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-16)

## 1. 今日速览
PicoClaw 项目今日处于**高维护活跃度**状态，虽然 Issue 互动量维持低位，但代码提交频繁，共有 13 个 PR 更新。项目重心明显向**代码质量与系统健壮性**倾斜，开发者 @chengzhichao-xydt 集中提交了多个修复 PR，旨在消除潜在 Panic 风险并规范错误处理。随着 `nightly` 版本的发布和重要安全性问题的解决，项目整体稳定性得到进一步提升，但在 Windows 平台的适配性上仍有待解决的具体问题。

## 2. 版本发布
- **nightly: Nightly Build (v0.2.9-nightly.20260616.c1ff5aa6)**
  - **更新说明**：自动构建版本，基于 `main` 分支最新代码，涵盖了近期的稳定性修复。
  - **注意事项**：官方提示此为自动构建版本，可能存在不稳定性，建议测试环境优先使用。
  - **变更日志**：[查看对比](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. 项目进展
今日共有 3 个 PR 成功合并/关闭，主要集中在安全性增强与用户体验优化：

- **安全性增强**：PR #3126 已合并，针对 Issue #3069 提出的 Launcher 访问控制绕过风险，改进了诊断日志，增强了启动时的安全提示，明确追踪了 `allow_localhost_bypass` 的配置状态，防止本地代理导致的 CIDR 限制失效。
- **UI/UX 优化**：PR #3097 已合并，在 Web 聊天编辑器下方添加了 `Shift + Enter` 换行提示，解决了用户在输入时难以发现换行操作的问题。
- **文档更新**：PR #3096 已合并，更新了 README 中的 Banner 信息。

*注：目前仍有 10 个待合并 PR，其中包含多个关键的错误处理修复，预示着下一版本将大幅提升底层稳定性。*

## 4. 社区热点
今日社区讨论主要集中在平台兼容性与特定场景下的连接问题：

- **RISC-V 平台支持问题** ([Issue #2887](https://github.com/sipeed/picoclaw/issues/2887))：
  - 该 Issue 于今日关闭。用户报告在 RISC-V 架构的 Debian 系统上使用 OpenAI 模型时 `.deb` 版本无法运行。该问题的解决标志着项目对 RISC-V 生态的支持正在完善。
  
- **Windows 平台 QQ 频道连接故障** ([Issue #3015](https://github.com/sipeed/picoclaw/issues/3015))：
  - 该 Issue 依然开放且处于活跃状态。用户反馈在 Windows 构建版本中，QQ 频道因 Token 获取超时导致启动失败，而 Pico 频道正常。这表明 Windows 环境下的网络适配仍存在特定 Bug。

## 5. Bug 与稳定性
今日修复与暴露的问题主要集中在底层错误处理和网络安全性，按严重程度排序如下：

- **🔴 [严重] 核心 Goroutine Panic 风险** (待合并)
  - **问题**：核心路径的 Goroutine 缺乏 Panic 恢复机制，可能导致单个协程崩溃拖垮整个进程。
  - **进展**：PR [#3132](https://github.com/sipeed/picoclaw/pull/3132) 已提交，通过 defer-recover 机制防止进程级崩溃，强烈建议优先合并。

- **🟠 [中等] 安全配置绕过风险**
  - **问题**：Issue #3069 指出 Launcher 的 IP 白名单 (`allowed_cidrs`) 可能被同主机的反向代理绕过。
  - **进展**：相关 PR #3126 已合并，通过增强诊断日志提示用户注意配置风险。

- **🟡 [一般] 多处资源未正确处理 Panic 风险** (待合并)
  - **问题**：多处代码存在类型断言未检查（如 #3131, #3054）、错误返回值被忽略（如 #3128, #3129, #3127）的情况。
  - **进展**：开发者今日集中提交了修复 PR，规范化了 `sync.Map` 类型断言及资源关闭逻辑，防止潜在的运行时 Panic。

## 6. 功能请求与路线图信号
- **Telegram 群组交互优化**：PR [#2975](https://github.com/sipeed/picoclaw/pull/2975) 提议将回复 Bot 消息视为 @提及。虽然 PR 创建于 5 月 30 日，但今日仍有活跃更新。这表明项目正在致力于提升多平台（特别是 IM 平台）的交互自然度，符合 AI 助手的易用性发展趋势。
- **Web 端会话历史完整性**：PR [#3047](https://github.com/sipeed/picoclaw/pull/3047) 致力于恢复会话详情的完整 JSONL 历史。这说明项目正在加强数据持久化与追溯能力，对用户审计和长对话场景有重要价值。

## 7. 用户反馈摘要
- **平台适配痛点**：用户对非 x86 架构（尤其是 RISC-V）的支持有明确需求，但当前在特定 OS（Debian）与 Model（OpenAI）组合下仍存在兼容性挑战。
- **Windows 网络组件问题**：Windows 版本在网络请求（特别是 QQ 频道 Token 获取）方面的超时问题影响了部分用户体验，反馈显示该问题具有持续性（创建于 6 月 6 日，今日仍有更新）。
- **安全意识提升**：社区提交的安全报告显示用户对内网部署的安全性有较高要求，特别是反向代理场景下的访问控制。

## 8. 待处理积压
- **Windows QQ 频道连接失败** ([Issue #3015](https://github.com/sipeed/picoclaw/issues/3015))：该 Bug 已持续 10 天，建议维护者关注 Windows 环境下的网络栈或 Token 获取机制。
- **大量稳定性修复 PR 待合并**：今日提交的多个修复 PR（#3132, #3131, #3130 等）目前均处于 Open 状态。考虑到它们主要涉及 Panic 恢复和类型安全，建议项目组尽快进行 Code Review 并合并，以防止夜间构建版出现不稳定情况。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-16)

## 1. 今日速览
NanoClaw 项目今日整体呈现出**“开发活跃、社区静默”**的态势。过去24小时内虽然无新增 Issue 和版本发布，但代码库迎来了 12 次 PR 更新，显示出核心团队正在密集修复边缘场景 Bug 并拓展 MCP（Model Context Protocol）生态支持。今日共有 3 个 PR 顺利合并，主要解决了 Codex 会话归档碎片化和 OneCLI 网关版本同步的关键运维痛点。整体来看，项目正处于功能迭代与稳定性加固并行的阶段，对 Docker 容器化环境下的媒体处理和远程服务集成进行了深度优化。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 3 个 PR 合并/关闭，显著提升了系统的运维可靠性和数据一致性：

*   **运维体验优化**：PR #2774 已关闭（推测已合并），修复了 `update-nanoclaw` 在版本更新时静默跳过 OneCLI 网关升级的问题。这解决了新旧代码与旧网关不兼容导致的潜在故障，确保了升级过程的一致性。
    *   链接: [nanocoai/nanoclaw PR #2774](https://github.com/nanocoai/nanoclaw/pull/2774)
*   **数据存储修复**：PR #2772 已关闭，修复了 Codex (CDX-004) 会话归档碎片化问题。此前每个交换周期都会生成独立文件，导致 `conversations/` 目录散落大量碎片，现在已改为基于线程 ID 追加写入，大幅提升了会话历史的可读性与管理效率。
    *   链接: [nanocoai/nanoclaw PR #2772](https://github.com/nanocoai/nanoclaw/pull/2772)
*   **文档清理**：PR #2773 移除了冗余的 TTY 警告说明，优化了 `add-codex` 技能的文档指引。
    *   链接: [nanocoai/nanoclaw PR #2773](https://github.com/nanocoai/nanoclaw/pull/2773)

## 4. 社区热点
由于今日无新增 Issue，热点主要集中在具有较高技术含量的待合并 PR 上，反映出社区对**多渠道集成**和**MCP 协议扩展**的强烈关注：

*   **WhatsApp 媒体流修复 (PR #2778)**：这是一个关键修复，解决了入站媒体文件（图片/视频）因容器挂载路径不匹配导致 Agent 无法访问的问题。这反映了用户在实际生产环境中对多模态消息处理的强需求。
    *   链接: [nanocoai/nanoclaw PR #2778](https://github.com/nanocoai/nanoclaw/pull/2778)
*   **MCP 远程服务支持 (PR #2776)**：该 PR 提议支持 HTTP/SSE 传输协议的远程 MCP 服务器，突破了现有的 stdio 限制。这表明项目正在积极向更开放的 Agent 工具链生态演进。
    *   链接: [nanocoai/nanoclaw PR #2776](https://github.com/nanocoai/nanoclaw/pull/2776)

## 5. Bug 与稳定性
今日报告/修复的 Bug 主要集中在**容器隔离环境下的路径映射**和**特定渠道的消息处理逻辑**：

1.  **[高危] WhatsApp 媒体文件丢失 (PR #2778 - OPEN)**
    *   **问题**：`downloadInboundMedia` 将文件写入宿主机 `data/attachments/`，但 Agent 容器仅挂载了会话级目录，导致 Agent 无法看到文件。
    *   **状态**：已有 Fix PR，待合并。
    *   **链接**: [nanocoai/nanoclaw PR #2778](https://github.com/nanocoai/nanoclaw/pull/2778)
2.  **[中危] 预算耗尽时消息被静默丢弃 (PR #2759 - OPEN)**
    *   **问题**：当 LLM 调用因 Token/预算耗尽失败时，系统直接丢弃了该轮对话，而非返回错误提示，导致用户困惑。
    *   **状态**：已有 Fix PR，待合并。
    *   **链接**: [nanocoai/nanoclaw PR #2759](https://github.com/nanocoai/nanoclaw/pull/2759)
3.  **[中危] Signal 服务静默重启失败 (PR #2626 - OPEN)**
    *   **问题**：macOS 下 `launchctl kickstart` 在特定情况下返回成功但服务未启动，且错误输出被忽略。
    *   **状态**：Fix PR 已提交，待合并。
    *   **链接**: [nanocoai/nanoclaw PR #2626](https://github.com/nanocoai/nanoclaw/pull/2626)
4.  **[低危] CLI `--id` 参数被忽略 (PR #2628 - OPEN)**
    *   **问题**：`ncl groups create` 强制使用 UUID 覆盖用户指定的 ID，影响自动化脚本的幂等性。
    *   **状态**：Fix PR 已提交，待合并。
    *   **链接**: [nanocoai/nanoclaw PR #2628](https://github.com/nanocoai/nanoclaw/pull/2628)

## 6. 功能请求与路线图信号
从活跃 PR 中可以洞察出项目下一阶段的重点方向：

*   **深化 MCP 生态集成**：PR #2777 (Strava 技能) 和 PR #2776 (远程 MCP 支持) 显示项目正致力于降低第三方服务接入门槛。Strava 的接入模式（OAuth + MCP）可能成为后续更多垂直领域服务（如 CRM、项目管理工具）集成的标准范式。
    *   链接: [nanocoai/nanoclaw PR #2777](https://github.com/nanocoai/nanoclaw/pull/2777)
*   **容器性能调优**：PR #2771 提议将 Agent 容器的 `/dev/shm` 提升至 1GB 并启用 `--init`。这暗示项目正面临需要运行重型 Headless Browser（如 Chromium）的 Agent 场景，未来可能会加强在浏览器自动化任务方面的支持。
    *   链接: [nanocoai/nanoclaw PR #2771](https://github.com/nanocoai/nanoclaw/pull/2771)

## 7. 用户反馈摘要
虽然今日无新开 Issue，但从 PR 提交者的痛点描述中可提炼出以下用户反馈：

*   **多模态体验受损**：WhatsApp 用户反馈发送的图片/文件“石沉大海”，Agent 无法处理。这是容器化架构带来的副作用，表明用户对无缝的多模态交互有刚性需求。
*   **错误提示模糊**：用户在使用过程中遇到预算耗尽等限制时，系统缺乏明确的错误反馈，导致调试困难（PR #2759）。
*   **跨平台 Emoji 兼容性差**：用户在不同 IM 渠道间使用 Emoji 反应时遇到格式不兼容问题（PR #2627），表明用户期望 AI 在跨平台沟通时能自动处理协议差异。

## 8. 待处理积压
以下长期未合并的重要 PR 需维护者重点关注，建议尽快 Review：

*   **PR #2627 (fix: reactions schema)**：修复跨平台 Emoji 反应问题，涉及多个主流渠道的兼容性，对用户体验影响较大。
    *   链接: [nanocoai/nanoclaw PR #2627](https://github.com/nanocoai/nanoclaw/pull/2627)
*   **PR #2628 (fix: CLI --id flag)**：涉及资源创建的幂等性问题，对自动化运维场景至关重要。
    *   链接: [nanocoai/nanoclaw PR #2628](https://github.com/nanocoai/nanoclaw/pull/2628)
*   **PR #2771 (perf: container shm-size)**：性能优化类 PR，建议尽快合并以防止 Agent 在执行浏览器任务时崩溃。
    *   链接: [nanocoai/nanoclaw PR #2771](https://github.com/nanocoai/nanoclaw/pull/2771)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-06-16)

## 1. 今日速览
NullClaw 项目今日整体处于平稳维护状态，无新版本发布。社区活跃度主要集中在问题排查与依赖更新，过去 24 小时内共有 2 个 Issue 更新及 1 个依赖更新 PR。用户侧关注点集中在作为 Agent Runtime 运行时的配置灵活性（如速率限制）以及对本地模型（Ollama）的兼容性表现。目前暂无核心功能代码合并，项目健康度保持良好，但需关注本地模型集成的稳定性反馈。

## 2. 版本发布
无

## 3. 项目进展
今日无已合并的 Pull Requests。
*   **依赖更新待合并**：PR #956 提议将 Docker 基础镜像 Alpine 从 3.23 升级至 3.24。虽然属于常规依赖维护，但有助于提升容器环境的安全性与构建效率，目前等待维护者审核合并。
    *   链接: [nullclaw/nullclaw PR #956](https://github.com/nullclaw/nullclaw/pull/956)

## 4. 社区热点
今日讨论最活跃的内容集中在配置与兼容性问题上：
*   **配置透明度诉求**：Issue #957 涉及运行时 "Rate Limit" 错误，用户希望了解配置机制并自定义阈值。这反映出高级用户对 NullClaw 内部流量控制机制的黑盒状态存在困惑，渴望更细粒度的控制权。
    *   链接: [nullclaw/nullclaw Issue #957](https://github.com/nullclaw/nullclaw/issues/957)
*   **本地模型集成难点**：Issue #952 继续活跃，讨论 Ollama 本地模型返回不完整答案的问题。这表明 NullClaw 在非标准 LLM（非 OpenAI 等商业 API）后端的适配层可能存在解析或超时处理缺陷。
    *   链接: [nullclaw/nullclaw Issue #952](https://github.com/nullclaw/nullclaw/issues/952)

## 5. Bug 与稳定性
今日报告及活跃的 Bug 主要影响异构环境下的稳定性，目前均无修复 PR：

*   **[中等] 本地模型输出截断** (#952)
    *   **描述**：使用 Ollama 运行 Gemma 模型时，Agent 返回不完整的句子。
    *   **严重程度**：中等。直接影响核心推理功能，但仅限于本地模型环境。
    *   **状态**：Open，正在社区讨论中。
    *   **链接**: [nullclaw/nullclaw Issue #952](https://github.com/nullclaw/nullclaw/issues/952)

*   **[低] 运行时配置读取速率限制** (#957)
    *   **描述**：无记忆模式下 JSON 输出时触发配置读取器的速率限制错误。
    *   **严重程度**：低。属于配置瓶颈或误解，不影响核心数据完整性，但阻碍特定场景使用。
    *   **状态**：Open。
    *   **链接**: [nullclaw/nullclaw Issue #957](https://github.com/nullclaw/nullclaw/issues/957)

## 6. 功能请求与路线图信号
从 Issue #957 的反馈中提取到潜在的功能增强信号：
*   **可配置的流量控制**：用户明确提出了修改 "Rate Limit" 阈值的需求。目前该阈值似乎被硬编码。建议将其纳入下一版本路线图，在配置文件中暴露 `rate_limit` 相关参数，增强 Agent Runtime 在高并发或特定模式下的适应性。

## 7. 用户反馈摘要
*   **使用场景深化**：用户正尝试将 NullClaw 作为纯粹的 "Agent Runtime"（无记忆模式），并结合本地 Ollama 及结构化 JSON 输出使用，这表明项目正从单一框架向生产级运行时组件演进。
*   **痛点**：
    *   **黑盒配置**：用户对内部默认限制感到困惑，文档缺失对 "config reader rate limit" 的解释。
    *   **本地模型适配**：相比于云端 API，本地模型的兼容性仍是主要痛点，特别是流式输出解析环节。

## 8. 待处理积压
*   **Issue #952 (Ollama 兼容性)**：该问题自 6 月 11 日创建至今未关闭，今日虽有活跃讨论但仍无官方定论或修复方案。考虑到本地部署是 AI Agent 趋势，建议维护者优先排查是否为 Token 截断或 EOS (End of Sequence) 处理逻辑问题。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-16)

## 1. 今日速览
IronClaw 项目今日活跃度极高，共有 44 条 Issue 更新和 50 条 PR 更新。项目重心明显向 **Reborn** 版本的稳定性与用户体验倾斜，尤其是针对 Google Workspace (Calendar/Gmail) 扩展和 OAuth 认证流程进行了大量修复与重构。虽然今日无新版本发布，但核心功能如多模态视觉支持 (#4871) 和凭证作用域修复 (#4939) 的 PR 已就绪，预示着下一次版本更新将包含重要改进。整体来看，项目处于快速迭代修复期，开发者响应迅速，社区反馈主要集中在扩展集成的易用性上。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 18 个 PR 被合并或关闭，显著推进了以下领域：

*   **多模态能力增强**：PR [#4871](https://github.com/nearai/ironclaw/pull/4871) 已合并，正式支持图像附件传递给视觉模型，弥补了 Reborn 在多模态输入上的短板。
*   **自动化与分发优化**：PR [#4780](https://github.com/nearai/ironclaw/pull/4780) 合并，改进了例程（Routine）分发机制，引导模型在使用触发器前先发现 outbound targets，提升了自动化任务的可靠性。
*   **关键 Bug 修复就绪**：
    *   针对长期困扰用户的凭证作用域问题，PR [#4939](https://github.com/nearai/ironclaw/pull/4939) 提出了修复方案，将凭证所有权从 `thread_id` 迁移至 `owner` 级别，解决了跨会话重复授权的痛点。
    *   针对权限拒绝后的死循环问题，PR [#4944](https://github.com/nearai/ironclaw/pull/4944) 已提交，确保模型能正确接收拒绝信号而非无限重试。
*   **安全性更新**：针对 RUSTSEC-2026-0182 漏洞，PR [#4950](https://github.com/nearai/ironclaw/pull/4950) 和 [#4949](https://github.com/nearai/ironclaw/pull/4949) 均已提交，快速完成了 Wasmtime 依赖的升级。

## 4. 社区热点
今日讨论最热烈的问题集中在认证体验与工具调用稳定性：

*   **[#4825 [CLOSED] "Always allow" 权限持久化问题](https://github.com/nearai/ironclaw/issues/4825)**：
    *   **热度**：评论数 3。
    *   **分析**：用户强烈不满在设置 "always allow" 后，切换新会话仍需重复授权。这反映了用户对**无感化权限管理**的迫切需求。该 Issue 已关闭，推测关联 PR #4939 的进展。
*   **[#4908 [OPEN] Google Calendar 扩展状态显示混乱](https://github.com/nearai/ironclaw/issues/4908)**：
    *   **热度**：评论数 3。
    *   **分析**：扩展页显示 "ACTIVE" 但配置弹窗仍提示 "Activate"，导致用户困惑。这暴露了扩展状态机在前端展示的不一致。
*   **[#4644 [OPEN] Reborn 通用附件支持](https://github.com/nearai/ironclaw/issues/4644)**：
    *   **热度**：评论数 2。
    *   **分析**：作为高优先级功能（P1），用户对 Reborn 版本支持文件附件有很高期待，目前的 PR #4902 正在推进 Inline Images 支持。

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，按严重程度排列如下：

### 严重 - 阻断使用
1.  **Google OAuth 成功后 Run 失败** [Issue #4907](https://github.com/nearai/ironclaw/issues/4907)：用户完成 Google Calendar 认证后，原本的运行流直接失败而非恢复执行，严重打击扩展使用体验。
2.  **Gmail 扩展授权后无响应** [Issue #4921](https://github.com/nearai/ironclaw/issues/4921)：Gmail 授权成功后，相关 Prompt 直接失败无回复。
3.  **凭证跨会话失效** [Issue #4913](https://github.com/nearai/ironclaw/issues/4913)：Google Calendar 授权无法在新会话复用。*(Fix: PR #4939)*

### 中等 - 影响体验/需手动干预
1.  **Agent 重复工具失败后停止** [Issue #4761](https://github.com/nearai/ironclaw/issues/4761)：Agent 在遇到工具失败时直接停止，缺乏重试或恢复机制，用户需手动推进。*(Fix: PR #4841 旨在解决此类 'run-borking' 错误)*
2.  **工具调用失败不可见** [Issue #4942](https://github.com/nearai/ironclaw/issues/4942)：工具调用失败后，UI 不刷新，用户无法感知错误。
3.  **拒绝 Shell 权限无反馈** [Issue #4764](https://github.com/nearai/ironclaw/issues/4764)：用户拒绝 Shell 审批后，工具调用挂起，无任何反馈。*(Fix: PR #4944 旨在解决 Auth-gate denial 问题)*

### 轻微 - UI/文案问题
1.  **Automations 面板布局拥挤** [Issue #4915](https://github.com/nearai/ironclaw/issues/4915)：卡片文字换行异常。
2.  **扩展安装流程碎片化** [Issue #4890](https://github.com/nearai/ironclaw/issues/4890)：用户在安装后不清楚下一步操作（Configure 还是 Auth）。

## 6. 功能请求与路线图信号
*   **自动化开发闭环**：Issue [#4880](https://github.com/nearai/ironclaw/issues/4880) 提议建立自动化代码审查与解决工作流，Issue [#4882](https://github.com/nearai/ironclaw/issues/4882) 提议构建云端 Coding Agent 工作流。这表明项目方正在探索利用 AI 智能体辅助自身的代码开发与维护，属于战略性基础设施投入。
*   **Slack 个人令牌支持**：PR [#4941](https://github.com/nearai/ironclaw/pull/4941) 增加了 `slack_user_tool`，允许智能体以用户身份执行搜索等 Bot 令牌无法支持的操作，扩展了 Slack 集成的深度。

## 7. 用户反馈摘要
*   **痛点**：
    *   **认证流程繁琐且脆弱**：用户在 Issue #4886 和 #4854 中反馈，安装扩展后需多次点击审批，且认证状态在不同页面不一致，导致"不知道下一步该干嘛"。
    *   **错误信息不透明**：Issue #4914 显示，OAuth 错误直接返回 Raw JSON，对普通用户极不友好。
*   **场景**：
    *   用户频繁使用 Google Calendar 和 GitHub 扩展处理日常查询和代码管理（Issue #4907, #4807）。
    *   用户期望自动化任务能稳定运行，目前 Automations 面板显示 "Scheduled" 但实际未运行引起用户困惑（Issue #4917）。
*   **满意点**：
    *   对 "Always allow" 功能的期待很高，希望能减少重复交互（Issue #4825）。

## 8. 待处理积压
*   **[PR] #3705 依赖更新积压**：Wechat 渠道的 `rand` 依赖升级 PR 创建于 5 月，至今未合并，建议维护者确认是否需要处理或关闭。
*   **[Issue] #4644 Universal Attachments**：虽然已有 PR #4902 和 #4933 推进，但该 Epic 仍处于 Open 状态，建议持续关注其对 Reborn 文件处理能力的提升进度。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-16)

## 1. 今日速览
LobsterAI 项目今日保持较高的开发活跃度，共有 11 个 PR 更新，其中 5 个 PR 已合并/关闭，主要集中在语音输入功能重构与协同工作体验优化。虽然无新版本发布，但多项关键修复（如实时 ASR 流程简化）已合入主干，显著提升了代码质量。社区方面，有 2 个历史 Issue 因 stale 机制更新，暂无新开的 Bug 报告。整体来看，项目正处于功能打磨与工程化维护阶段，依赖更新频繁，技术债务清理工作有序进行。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 5 个 PR 关闭/合并，主要推进了以下工作：

*   **语音输入架构简化与优化**：PR #2160 合并，移除了短语音 ASR 上传流程及相关 IPC 接口，将语音输入统一为实时 ASR 模式，降低了系统复杂度；PR #2163 优化了听录 UI 与配额管理，为 2026.6.11 发布分支做准备。
*   **协同交互体验提升**：PR #2168 新增了协同对话中的“滚动到底部”悬浮按钮，支持平滑滚动与国际化；PR #2162 修复了语音输入合并后的取消逻辑冲突，保障了会话切换时的稳定性。
*   **常规维护**：PR #2161 更新了“关于”页面信息。

项目整体向更精简的实时语音交互架构迈进，协同功能的交互细节持续完善。

## 4. 社区热点
今日社区互动主要集中在历史遗留问题的重新激活：

*   **[Issue #1426](netease-youdao/LobsterAI Issue #1426)**：用户反馈上传本地技能后无成功提示且列表未刷新。
*   **[Issue #1427](netease-youdao/LobsterAI Issue #1427)**：用户反馈本地添加技能时可重复添加，导致同名技能冗余。
*   **[PR #1428](netease-youdao/LobsterAI PR #1428)**：社区贡献者提出的“后台会话完成/报错系统通知”功能 PR。

**分析**：前两个 Issue 均涉及技能管理的交互反馈缺失问题，反映了用户对操作确定性的强烈需求。PR #1428 虽未合并，但针对“后台运行时缺乏通知”这一痛点提出的解决方案极具价值，与竞品（如 Cursor）的体验对标明显，值得维护者优先审查。

## 5. Bug 与稳定性
今日报告/更新的 Bug 主要为交互逻辑层面的体验问题，无严重崩溃报告：

*   **中等 - 状态反馈缺失**：[Issue #1426](netease-youdao/LobsterAI Issue #1426) 报告技能上传后缺乏成功提示与列表刷新，导致用户无法确认操作结果。
*   **中等 - 输入校验缺失**：[Issue #1427](netease-youdao/LobsterAI Issue #1427) 报告允许重复添加同名技能，可能导致配置冲突。
*   **已修复 - 语音逻辑冲突**：[PR #2162](netease-youdao/LobsterAI PR #2162) 已解决语音输入在代码合并后的取消逻辑冲突，提升了稳定性。

## 6. 功能请求与路线图信号
*   **系统级通知机制**：[PR #1428](netease-youdao/LobsterAI PR #1428) 提出的系统通知功能尚未合并，但鉴于今日合并的 PR 中包含大量 Cowork 场景优化，该通知功能极有可能是下一阶段的重点，用以补全后台任务体验。
*   **实时语音优先**：[PR #2160](netease-youdao/LobsterAI PR #2160) 移除非实时 ASR 模式，明确释放了路线图信号：LobsterAI 将全面转向实时流式语音交互，放弃传统的录音上传识别模式。

## 7. 用户反馈摘要
从 Issues 互动中提炼出以下用户痛点：
*   **操作透明度不足**：用户在执行“添加技能”等关键操作后，因缺乏 Toast 提示或列表自动刷新，感到困惑，不确定操作是否生效。
*   **数据一致性担忧**：重复添加技能产生的冗余项让用户担心配置污染，期望有更严格的去重校验。
*   **后台感知缺失**：用户期待在窗口未聚焦时，依然能通过系统通知感知 AI 任务（如代码生成、对话完成）的进度。

## 8. 待处理积压
以下重要 Issue/PR 长期未获最终处理，建议维护者关注：

*   **[PR #1277](netease-youdao/LobsterAI PR #1277)**：Electron 及 electron-builder 大版本升级（v40 -> v42），涉及核心框架更新，已挂起 2 个多月，需评估兼容性风险。
*   **[PR #1428](netease-youdao/LobsterAI PR #1428)**：系统通知功能实现，处于 Stale 状态，该功能对用户体验提升显著，建议重启 Review。
*   **[Issue #1426](netease-youdao/LobsterAI Issue #1426) / [Issue #1427](netease-youdao/LobsterAI Issue #1427)**：技能管理交互问题已标记 Stale，但严重影响基础功能体验，建议纳入修复计划。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 (2026-06-16)

## 1. 今日速览
Moltis 项目在过去 24 小时内呈现“开发活跃、社区静默”的态势。虽然无新增 Issue、无新版本发布且无用户互动，但核心贡献者提交了 2 个重要的功能性 PR，分别聚焦于外部智能体配置与聊天上下文自动化。整体来看，项目正处于功能迭代的关键开发期，代码层面持续推进，但社区反馈与交互数据今日处于空白状态。

## 2. 版本发布
无

## 3. 项目进展
今日无合并或关闭的 PR，项目推进主要体现在新功能的提案与开发阶段，重点增强了 Agent 的扩展能力：

*   **外部智能体配置增强**：PR [#1125](https://github.com/moltis-org/moltis/pull/1125) 提交了对 `external-agent` 的模型与工作量选择的支持。该 PR 引入了 `models` 和 `efforts` 配置项，并改进了 `/model` 接口，使得外部智能体能够像内置智能体一样进行资源分配与元数据持久化，显著提升了多模型部署的灵活性。
*   **聊天上下文自动化**：PR [#1124](https://github.com/moltis-org/moltis/pull/1124) 新增了 `chat.context_command` 配置支持。该功能允许在每个聊天轮次前自动执行命令并将其输出注入上下文，解决了部署环境中动态生成上下文的痛点，减少了手动粘贴信息的需求。

## 4. 社区热点
过去 24 小时内无活跃讨论的 Issues 或 PRs，社区互动热度为零。新增的 PR 暂未收到评论或反馈，需关注后续 Review 进展。

## 5. Bug 与稳定性
过去 24 小时内无新增 Bug 报告或崩溃反馈，项目稳定性指标正常。

## 6. 功能请求与路线图信号
今日提交的两个 PR 清晰地指明了项目下一阶段的发展方向：

*   **混合智能体架构深化**：通过 [#1125](https://github.com/moltis-org/moltis/pull/1125) 可以看出，Moltis 正致力于打通内部模型与外部 Agent 提供商之间的壁垒，未来的版本将更侧重于异构智能体的统一管理与调度。
*   **自动化交互体验**：[#1124](https://github.com/moltis-org/moltis/pull/1124) 显示项目正在探索通过脚本化手段增强 AI 的“记忆”与“感知”能力。这表明项目正从单纯的对话工具向可集成的自动化助理平台演进，预计此类“自动化注入”功能将成为下一版本的核心卖点。

## 7. 用户反馈摘要
由于今日无新增 Issues 或评论，暂无具体的用户反馈数据。

## 8. 待处理积压
今日无长期未响应的 Issue 显现。需特别关注目前处于 **OPEN** 状态的两个 PR ([#1125](https://github.com/moltis-org/moltis/pull/1125), [#1124](https://github.com/moltis-org/moltis/pull/1124))，它们均由 @gptme-thomas 提交，建议维护团队尽快安排 Code Review，以避免功能分支积压。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-06-16)

## 1. 今日速览
项目整体活跃度保持高位，过去24小时内 Issues 更新达 47 条，PR 更新 50 条。项目正处于从 CoPaw 向 QwenPaw 品牌重塑后的调整期，社区对更名后的路径残留问题（#5104）及新版本稳定性给予了高度关注。核心开发重点集中在架构解耦（Agent OS Driver）、前端体验优化（UI 布局、Token 统计）以及多渠道适配（飞书、小艺）。虽然无新版本发布，但多个重要功能 PR 已合并，显示出项目正在为下一次大版本更新积蓄力量。

## 2. 版本发布
- **无新版本发布**。当前社区主要聚焦于 v1.1.11.post2 版本的稳定性修复与反馈收集。

## 3. 项目进展
今日共有 **32 个 PR 被合并或关闭**，项目在架构与体验层面均有实质性推进：

- **架构重构与解耦**：
  - [PR #5067](https://github.com/agentscope-ai/QwenPaw/pull/5067) **[CLOSED]** 引入 **Agent OS Driver**，统一了外部能力调用抽象层，支持 MCP/A2A/ACP 等多种协议，为未来扩展打下基础。
  - [PR #4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) **[OPEN]** 正在推进插件加载器与 Agent 启动的解耦，旨在解决打包环境下插件系统初始化超时的问题。

- **前端与交互优化**：
  - [PR #5212](https://github.com/agentscope-ai/QwenPaw/pull/5212) **[CLOSED]** 增加了聊天界面的宽屏模式切换。
  - [PR #5123](https://github.com/agentscope-ai/QwenPaw/pull/5123) **[CLOSED]** 更新了技能市场 UI，增加了平台预览功能。
  - [PR #5203](https://github.com/agentscope-ai/QwenPaw/pull/5203) **[OPEN]** 正在重构模型设置页面，带来供应商聚合视图与全新卡片 UI。

- **功能修复**：
  - [PR #5146](https://github.com/agentscope-ai/QwenPaw/pull/5146) **[CLOSED]** 修复了技能斜杠注入及显示异常问题（关联 Issue #5031）。

## 4. 社区热点
今日社区讨论焦点集中在第三方渠道适配与核心功能体验上：

1.  **[渠道适配] 小艺频道接入疑难** ([Issue #1911](https://github.com/agentscope-ai/QwenPaw/issues/1911))
    - **评论数：22**。这是目前评论数最高的 Issue，自 3 月创建以来持续活跃。用户反馈在华为小艺开放平台测试正常，但在手机端接入 CoPaw 时遭遇“开小差/网络拥堵”错误，且对话列表同步异常。该问题涉及跨平台调试，社区急需官方排查指引。

2.  **[体验痛点] 飞书流式卡片长回复卡顿** ([Issue #5167](https://github.com/agentscope-ai/QwenPaw/issues/5167))
    - **评论数：5**。用户反馈飞书 CardKit 流式卡片在长回复场景下渲染缓慢，“一个字一个字往外吐”，严重影响可用性。建议优化刷新策略。

3.  **[Bug 反馈] 插件依赖安装导致 CMD 窗口疯狂弹窗** ([Issue #5181](https://github.com/agentscope-ai/QwenPaw/issues/5181))
    - **评论数：5**。v1.1.11.post2 版本中，插件系统在网络不佳时尝试重试安装依赖，导致 CMD 窗口频繁弹窗，严重影响桌面端体验。

## 5. Bug 与稳定性
今日报告了多个影响体验的 Bug，部分已有对应修复方案：

- **严重**：
  - [Issue #5209](https://github.com/agentscope-ai/QwenPaw/issues/5209)：QwenPaw Desktop (Tauri) 在 macOS ARM64 上陷入崩溃循环（每分钟重启一次），堆栈显示为 `EXC_BAD_ACCESS`。
  - [Issue #5181](https://github.com/agentscope-ai/QwenPaw/issues/5181)：插件依赖安装失败引发无限重试与弹窗。

- **中等**：
  - [Issue #5140](https://github.com/agentscope-ai/QwenPaw/issues/5140)：v1.1.11.post2 版本非纯文本文件（docx/pdf 等）下载报错 404。
  - [Issue #5171](https://github.com/agentscope-ai/QwenPaw/issues/5171)：上下文压缩逻辑缺陷，在人设文件较大时可能导致上下文被完全清空，任务中断。
  - [Issue #5184](https://github.com/agentscope-ai/QwenPaw/issues/5184)：v1.1.11.post2 本地模型供应商配置无法正确显示。

- **已处理/修复中**：
  - [Issue #5199](https://github.com/agentscope-ai/QwenPaw/issues/5199) **[CLOSED]**：对话中发送二进制文件附件报错问题已确认并关闭。
  - [PR #5141](https://github.com/agentscope-ai/QwenPaw/pull/5141)：正在修复 Shell 命令工具卡片的加载动画问题，解决无输出时的无响应感。

## 6. 功能请求与路线图信号
社区提出了多项旨在提升智能化与易用性的需求：

- **智能化进化**：[Issue #5205](https://github.com/agentscope-ai/QwenPaw/issues/5205) 提出构建 Agent 自我进化机制，建议 Agent 能从错误中自动学习并修正行为规则（Auto-correct），而非仅依赖静态规则文件。
- **性能优化**：[Issue #5063](https://github.com/agentscope-ai/QwenPaw/issues/5063) 建议集成 Headroom 作为可选的上下文压缩层，以减少 60-95% 的 Token 消耗，该方向与目前的架构解耦趋势相符。
- **UI 增强**：
  - [Issue #5211](https://github.com/agentscope-ai/QwenPaw/issues/5211) 建议优化桌面端 UI 布局比例，减少顶部导航栏空间占用。
  - [Issue #5103](https://github.com/agentscope-ai/QwenPaw/issues/5103) **[CLOSED]** 请求引入类似 OpenClaw 的对话队列机制及 Token 实时统计，已获官方回应（可能已纳入开发计划）。

## 7. 用户反馈摘要
- **品牌重塑遗留问题**：多位用户指出从 CoPaw 改名为 QwenPaw 后，存在路径混乱（`~/.copaw/` vs `~/.qwenpaw/`）及插件安装失败问题 ([Issue #5104](https://github.com/agentscope-ai/QwenPaw/issues/5104))。
- **模型兼容性**：用户在使用 MiniMax-M2.5 模型时，思考过程返回 XML 格式导致解析失败，呼吁增强对不同模型输出格式的兼容性 ([Issue #4625](https://github.com/agentscope-ai/QwenPaw/issues/4625))。
- **上下文焦虑**：用户对长对话后的 Token 消耗、上下文压缩效果及无响应问题表现出显著焦虑，希望前端能提供更直观的上下文用量显示和队列管理功能。

## 8. 待处理积压
- **长期未决的渠道问题**：[Issue #1911](https://github.com/agentscope-ai/QwenPaw/issues/1911)（小艺频道接入）自 3 月创建至今，评论数已达 22 条，建议维护者优先排查或给出明确的调试指南。
- **关键功能请求**：[Issue #5063](https://github.com/agentscope-ai/QwenPaw/issues/5063)（集成 Headroom 压缩层）获得了较高关注，建议纳入路线图评估。

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