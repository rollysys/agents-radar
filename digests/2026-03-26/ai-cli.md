# AI CLI 工具社区动态日报 2026-03-26

> 生成时间: 2026-03-26 02:37 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 开发工具生态横向分析报告 (2026-03-26)

## 1. 生态全景

2026年第一季度的 AI CLI 工具生态已从单纯的"命令行助手"演变为**高度集成化、Agent 化的开发环境核心**。各大厂商（Anthropic、OpenAI、Google、GitHub）的 CLI 工具正在通过 **MCP (Model Context Protocol)** 和 **ACP (Agent Client Protocol)** 构建统一的插件与连接器标准，争夺开发者入口的统治权。当前的竞争焦点已转移至**企业级权限管控**、**远程/云端开发能力**以及**IDE 深度集成**的稳定性，标志着 AI 编程工具正全面进入企业生产环境落地的深水区。

---

## 2. 各工具活跃度对比

| 工具名称 | Release 版本 | Issues 热度 (Top1 👍) | PR 活跃度 | 核心迭代方向 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | v2.1.84 | 238 (IME 输入法) | 高 (企服/插件) | 企业策略管理、Windows 支持、Hook 生态 |
| **OpenAI Codex** | 5个 Alpha (Rust) | 445 (远程开发) | 极高 (底层重构) | Rust 核心重构、遥测监控、沙箱兼容 |
| **Gemini CLI** | v0.35.1 / v0.36-preview | 26 (性能卡顿) | 高 (架构升级) | SDD (任务系统)、AST 感知、IDE 配置隔离 |
| **GitHub Copilot CLI**| v1.0.12-1 | 18 (MCP 连接) | 低 (无新 PR) | VS Code 终端集成、模型选择器 UI |
| **Kimi Code CLI** | v1.26.0 | N/A (交互体验) | **极高 (14 PRs)** | 稳定性修复、网络重连、插件系统 Beta |
| **OpenCode** | 无 | 48 (安全风险) | 高 (架构重构) | Effect 架构迁移、多模型适配、安全合规 |
| **Qwen Code** | v0.14.0-preview | N/A (VS Code 集成) | 高 (本土化) | VS Code 孤儿进程修复、云效集成、ACP 协议 |

> **注**：OpenAI Codex 单日发布 5 个 Rust Alpha 版本，显示出底层架构正在经历剧烈重构；Kimi Code CLI 单日合并 14 个 PR，体现出对稳定性的激进迭代。

---

## 3. 共同关注的功能方向

社区反馈呈现出惊人的趋同性，以下四大痛点已成为行业共识：

1.  **IDE 集成与进程管理的稳定性**
    *   **涉及工具**: Qwen Code, Copilot CLI, Kimi, Gemini
    *   **诉求**: "孤儿进程"（关闭 Tab 后后台进程不销毁）、ACP 协议连接中断、以及非 VS Code 编辑器（如 Zed, JetBrains）的兼容性问题频发。开发者渴望"打开即用、关闭即走"的原生体验。

2.  **远程与云端开发支持**
    *   **涉及工具**: OpenAI Codex (Top Issue 👍445), Gemini CLI, Claude Code
    *   **诉求**: 摆脱本地硬件限制，支持像 VS Code Remote 一样通过 SSH/Container 连接远程环境。这是从"本地工具"迈向"云端 Agent"的关键一步。

3.  **自动化下的权限与安全控制**
    *   **涉及工具**: OpenCode (Top Issue 👍48), Copilot CLI, Claude Code, Qwen
    *   **诉求**: 社区强烈抵制"全有或全无"的权限模式。开发者呼吁**细粒度的命令白名单**（如只允许 `npm test`）、配置的持久化（Windows 下重复弹窗问题），以及更安全的默认配置。

4.  **长上下文与任务管理 (SDD)**
    *   **涉及工具**: Gemini CLI, Claude Code, Kimi
    *   **诉求**: 随着 Agent 执行复杂任务能力增强，如何管理跨会话的"记忆"（Memory System）和"任务状态"（如 Gemini 的 SDD Phase 3）成为热点。用户希望 Agent 能像人类一样规划、中断和恢复复杂工作流。

---

## 4. 差异化定位分析

*   **Claude Code (企业管控派)**
    *   **侧重**: 独有的 `managed-settings.d/` 策略片段和 M365 连接器显示其 **ToB 市场野心**。
    *   **差异**: 强调 Hook 生态和可观测性，试图成为企业 DevOps 流程的"控制塔"。

*   **OpenAI Codex (底层重构派)**
    *   **侧重**: 密集的 Rust Alpha 发布和遥测 PR 显示其正经历 **"换血式"架构升级**。
    *   **差异**: 更加注重沙箱隔离和底层性能，可能正在为更复杂的本地/云端混合执行做准备。

*   **Gemini CLI (工程化先锋)**
    *   **侧重**: 独推 **SDD (Spec-Driven Development)** 和 AST 感知工具。
    *   **差异**: 试图通过引入 DAG 任务图和代码结构感知，解决 Agent "胡乱修改代码"的问题，强调结构化工程实践。

*   **Qwen Code & Kimi (本土化与体验派)**
    *   **侧重**: **Qwen** 集成阿里云云效 CI/CD，**Kimi** 优化中文交互与网络重连。
    *   **差异**: 两者在兼容主流协议（MCP/ACP）的同时，更注重国内网络环境适应性和本土开发者工作流（微信/钉钉集成）。

*   **OpenCode (开放架构派)**
    *   **侧重**: 激进地迁移至 **Effect 架构**。
    *   **差异**: 作为一个更开放生态的代表，它承载了社区对多模型切换（RLM 模式）和摆脱单一厂商锁定的期望。

---

## 5. 社区热度与成熟度

*   **第一梯队 (成熟期)**: **Claude Code** 和 **OpenAI Codex**。
    *   讨论焦点已从"怎么用"转向"怎么管"和"怎么集成到企业系统"。Bug 报告往往涉及复杂的权限和网络环境，说明已在生产环境广泛使用。
*   **第二梯队 (快速迭代期)**: **Gemini CLI** 和 **Qwen Code**。
    *   版本更新频繁（v0.35 vs v0.14），Issue 中包含大量架构级的功能请求（如 SDD），显示出产品形态正在快速成型。
*   **第三梯队 (起步/探索期)**: **Kimi Code CLI**。
    *   虽然处于 Beta 阶段，但单日 14 个 PR 的修复速度惊人，正集中精力解决基础的"能用"问题（如 JSON 解析、网络断连）。

---

## 6. 值得关注的趋势信号

1.  **MCP/ACP 正在成为新的 "HTTP"**：
    *   几乎所有工具的 Issue 列表都充满了关于 MCP Server 连接失败、权限配置的讨论。建议开发者**尽快熟悉这两种协议**，未来的 AI 工具开发将很大程度上基于这些协议构建插件和扩展。

2.  **Agent 正在获得"文件系统级"的读写权，安全风险激增**：
    *   OpenCode 关于默认权限过大的讨论（👍48）是一个警钟。随着 Agent 能够自动执行 Shell 命令，**"命令白名单"和"审计追踪"（Audit Trail）** 将成为企业采购的刚需。

3.  **本地模型与云端模型的混合调度**：
    *   OpenCode 对 RLM 模式的请求和 Codex 的远程开发支持表明，未来的 CLI 工具将不再依赖单一模型，而是根据任务复杂度自动路由到本地小模型或云端大模型，**成本控制**将成为核心考量。

4.  **非英语开发体验仍是短板**：
    *   Claude Code 的日语输入卡顿（👍238）和 Copilot 的德语键盘问题显示，尽管模型能力强大，但**终端 UI 层的国际化（IME 支持）** 仍是各大厂商忽视的技术债务。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告 (2026-03-26)

基于 `anthropics/skills` 官方仓库的数据分析，以下是最新的社区动态与技术趋势。

## 1. 热门 Skills 排行

以下 Skills 在社区中引发了较高关注（基于 PR 活跃度与功能性筛选）：

1.  **document-typography** - 文档排版质量控制
    *   **功能**：解决 AI 生成文档中的常见排版问题（如孤行、寡行、编号错位）。
    *   **热点**：直击 AI 生成内容“只重内容不重形式”的痛点。
    *   **状态**：[OPEN](https://github.com/anthropics/skills/pull/514)

2.  **Google Workspaces (GOG CLI)** - 个人助理集成
    *   **功能**：通过 GOG CLI 集成 Google 邮件、日历和任务管理。
    *   **热点**：标志着 Claude Code 向“可执行 Agent”迈进的重要一步，实用性极高。
    *   **状态**：[OPEN](https://github.com/anthropics/skills/pull/299)

3.  **session-memory** - 跨会话技术事实记忆
    *   **功能**：在上下文压缩或会话重启时保留关键技术事实，零依赖。
    *   **热点**：试图解决 LLM “无状态”导致的信息丢失问题，是 Agent 持续工作的基础设施。
    *   **状态**：[OPEN](https://github.com/anthropics/skills/pull/629)

4.  **Foundation & Development Series** - 开发基础套件
    *   **功能**：一次性添加 8 个技能，包括教程构建、无障碍审计 (a11y)、数据叙事等。
    *   **热点**：提供了一整套标准化的开发辅助工具，覆盖面广。
    *   **状态**：[OPEN](https://github.com/anthropics/skills/pull/288)

5.  **shodh-memory** - Agent 持久化上下文
    *   **功能**：维护跨对话的持久化记忆，主动调用上下文。
    *   **热点**：与 session-memory 类似，社区正在探索多种实现“长期记忆”的最佳路径。
    *   **状态**：[OPEN](https://github.com/anthropics/skills/pull/154)

6.  **codebase-inventory-audit** - 代码库盘点与清理
    *   **功能**：识别僵尸代码、未使用文件和文档缺失，生成代码库状态报告。
    *   **热点**：针对遗留代码维护的强力工具，符合企业级代码治理需求。
    *   **状态**：[OPEN](https://github.com/anthropics/skills/pull/147)

7.  **Masonry AI (Image/Video Gen)** - 多模态生成
    *   **功能**：集成 Masonry CLI，支持通过 Imagen 3.0 和 Veo 3.1 生成图像和视频。
    *   **热点**：填补了 Claude Code 在原生多模态生成方面的空白。
    *   **状态**：[OPEN](https://github.com/anthropics/skills/pull/335)

8.  **plan-task** - 任务进度持久化
    *   **功能**：将多步计划和进度保存为 Markdown 文件，支持 Git 追踪。
    *   **热点**：解决了复杂任务在会话中断后必须重来的问题。
    *   **状态**：[OPEN](https://github.com/anthropics/skills/pull/522)

## 2. 社区需求趋势

从 Issues 讨论中提炼出四大核心诉求：

*   **记忆与连续性**：
    *   强烈需求能够跨会话保留上下文、技术决策和进度的能力。
    *   典型代表：[Issue #62 (Skills disappear)](https://github.com/anthropics/skills/issues/62), [PR #629 (session-memory)](https://github.com/anthropics/skills/pull/629)。

*   **外部工具集成**：
    *   呼吁 Claude Code 打通外部系统，特别是 Google Workspace、邮件系统和企业内部工具，将其转化为实际的“操作 Agent”。
    *   典型代表：[PR #299 (Google Workspaces)](https://github.com/anthropics/skills/pull/299)。

*   **安全与信任边界**：
    *   关注第三方 Skills 的安全性，担心社区 Skills 伪装成官方 Skills 导致权限滥用。需要建立信任评分或治理机制。
    *   典型代表：[Issue #492 (Trust boundary abuse)](https://github.com/anthropics/skills/issues/492), [Issue #412 (Agent Governance)](https://github.com/anthropics/skills/issues/412)。

*   **开发者体验 (DX) 与标准化**：
    *   需要更友好的 `skill-creator` 工具、去除重复的示例 Skills、以及对 MCP (Model Context Protocol) 协议的支持。
    *   典型代表：[Issue #202 (Update skill-creator)](https://github.com/anthropics/skills/issues/202), [Issue #16 (Expose Skills as MCPs)](https://github.com/anthropics/skills/issues/16)。

## 3. 高潜力待合并 Skills

以下 PR 虽处于 Open 状态，但功能成熟且解决了核心痛点，具有较高的合并潜力：

*   **[PR #521 record-knowledge](https://github.com/anthropics/skills/pull/521)**：提供通用的知识记录机制，直接解决上下文丢失问题，通用性强。
*   **[PR #522 plan-task](https://github.com/anthropics/skills/pull/522)**：与 `record-knowledge` 互补，专注于任务流的管理，是企业级工作流的基础。
*   **[PR #486 ODT skill](https://github.com/anthropics/skills/pull/486)**：支持 OpenDocument 格式，填补了开源办公文档处理的空白，符合 ISO 标准。

## 4. Skills 生态洞察

**当前社区最集中的诉求是：赋予 Claude Code “持久记忆”与“真实世界操作能力”，使其从“一次性代码生成器”进化为可靠的“长期协作 Agent”。**

---

# Claude Code 社区动态日报 (2026-03-26)

## 1. 今日速览

Claude Code 今日发布 **v2.1.84** 版本，正式引入 **Windows PowerShell 工具**（预览版），并增强了模型能力的自定义环境变量配置。社区方面，**Microsoft 365 连接器的权限限制问题**引发 Max 个人版用户强烈讨论，同时多起关于 **IME 输入法兼容性** 和 **终端 UI 滚动** 的 Bug 报告持续受到关注。

---

## 2. 版本发布

### v2.1.84 (Latest)
- **新增 PowerShell 工具**：Windows 用户可选择性启用 PowerShell 工具（预览功能），详见[文档](https://code.claude.com/docs/en/tools-reference#powershell-tool)。
- **模型能力覆盖变量**：新增 `ANTHROPIC_DEFAULT_{OPUS,SONNET,HAIKU}_MODEL_SUPPORTS` 环境变量，允许开发者覆盖固定默认模型的 effort/thinking 能力检测。

### v2.1.83
- **策略管理增强**：支持 `managed-settings.d/` 目录，允许不同团队部署独立的策略片段，按字母顺序合并。
- **Hook 事件扩展**：新增 `CwdChanged` 和 `FileChanged` 钩子事件，支持响应式环境管理（如 direnv 集成）。

---

## 3. 社区热点 Issues (Top 10)

| 优先级 | Issue | 标签 | 焦点概述 |
|:---:|:---|:---|:---|
| 🔥 | [#20469](https://github.com/anthropics/claude-code/issues/20469) | `enhancement`, `cost`, `mcp` | **M365 连接器权限争议**：Max 个人版用户（$100-200/月）无法使用 M365 连接器，而更便宜的 Team 计划反而支持。社区讨论热烈（42 评论），认为定价逻辑不合理。 |
| 🐛 | [#1547](https://github.com/anthropics/claude-code/issues/1547) | `bug`, `macos`, `tui`, `a11y` | **IME 输入性能问题**：macOS 上日语输入法导致性能下降和重复候选项，长期未解决（238 👍），影响国际化用户体验。 |
| 🐛 | [#36582](https://github.com/anthropics/claude-code/issues/36582) | `bug`, `macos`, `tui` | **长对话自动滚动到顶部**：对话变长后终端不断自动回滚，严重影响交互体验（72 👍）。 |
| ✅ | [#36765](https://github.com/anthropics/claude-code/issues/36765) | `bug`, `linux`, `tui` | **原生终端光标支持**：Linux 下的终端光标渲染问题（73 👍），已关闭，可能已在近期版本修复。 |
| 💸 | [#29330](https://github.com/anthropics/claude-code/issues/29330) | `bug`, `api` | **1M 上下文窗口限流**：Opus 模型 1M context 突然触发 Rate Limit，200K 正常，影响 Max/Team 用户。 |
| ⚠️ | [#37765](https://github.com/anthropics/claude-code/issues/37765) | `bug`, `windows`, `permissions` | **权限跳过失效**：`--dangerously-skip-permissions` 无法绕过 `.claude/` 目录写入的确认提示。 |
| 🧩 | [#24122](https://github.com/anthropics/claude-code/issues/24122) | `enhancement`, `tui` | **Zellij 终端复用器支持**：Agent Teams 功能请求支持 Zellij 分屏模式（60 👍），目前仅支持 tmux/iTerm2。 |
| 🔌 | [#33431](https://github.com/anthropics/claude-code/issues/33431) | `bug`, `hooks`, `plugins` | **插件路径空格问题**：`${CLAUDE_PLUGIN_ROOT}` 路径含空格时导致 hook 命令执行失败。 |
| 🧠 | [#34874](https://github.com/anthropics/claude-code/issues/34874) | `enhancement`, `core` | **自适应推理强度**：请求根据提示词复杂度自动调整 reasoning effort，优化成本与性能平衡。 |
| 📋 | [#25689](https://github.com/anthropics/claude-code/issues/25689) | `enhancement` | **上下文阈值 Hook 事件**：请求在上下文接近耗尽前触发 Hook，支持 plan-and-continue 工作流。 |

---

## 4. 重要 PR 进展

| PR | 类型 | 说明 |
|:---|:---|:---|
| [#38105](https://github.com/anthropics/claude-code/pull/38105) | `feat` | **WhatsApp 通道插件**：通过 Baileys 协议实现 WhatsApp 双向消息通道，与现有 Telegram/Discord 功能对齐。 |
| [#37800](https://github.com/anthropics/claude-code/pull/37800) | `feat` | **claude-tunnels 多项目编排插件**：引入 Project Orchestrator 层，支持从 Slack/Teams 路由任务到正确项目并构建依赖感知的执行计划。 |
| [#38728](https://github.com/anthropics/claude-code/pull/38728) | `feat` | **memory-alert 内存监控插件**：监控 Claude Code 进程的 RSS 内存，超过阈值时在终端告警，支持 macOS/Linux。 |
| [#38636](https://github.com/anthropics/claude-code/pull/38636) | `feat` | **multi-setup 并行工作区插件**：支持从当前仓库克隆创建并行开发工作区。 |
| [#20448](https://github.com/anthropics/claude-code/pull/20448) | `feat` | **web4-governance 治理插件**：为 AI Agent 提供轻量级治理框架，包含 T3 信任张量和 R6 审计追踪。 |
| [#23853](https://github.com/anthropics/claude-code/pull/23853) | `fix` | **Dockerfile 安装方式更新**：替换已弃用的 `npm install -g` 为官方原生安装脚本。 |
| [#39043](https://github.com/anthropics/claude-code/pull/39043) | `chore` | **前端设计技能调整**：移除 "retro-futuristic" 风格推荐（作者强调 "Trust me on this one"）。 |

---

## 5. 功能需求趋势

根据近期 Issues 讨论，社区关注集中在以下方向：

1.  **企业级集成与权限**：Microsoft 365、Slack、Teams 等企业工具连接器的可用性和权限一致性是付费用户的痛点。
2.  **终端 UI 体验 (TUI)**：长对话滚动、IME 输入法兼容（中日韩）、终端状态恢复等影响日常开发效率。
3.  **上下文与成本管理**：自适应 reasoning effort、上下文阈值 Hook、上下文压缩前后的 Hook 事件等，帮助用户在长任务中平衡成本与性能。
4.  **Hook 与插件生态**：路径空格兼容、PreCompact/PostCompact 事件、Exit 前 Hook 等扩展能力需求。
5.  **平台一致性**：Windows 支持（PowerShell、bash 进程清理）、macOS/Linux 终端复用器集成（tmux/iTerm2/Zellij）。

---

## 6. 开发者关注点

- **权限配置一致性**：`settings.json` 中的权限规则和 `--dangerously-skip-permissions` 在 CLI 和桌面端表现不一致，导致自动化脚本受阻。
- **模型限流与配额**：1M 上下文窗口的 Rate Limit 问题频发，影响复杂任务执行。
- **终端兼容性**：多种终端（WezTerm、VS Code integrated terminal、Cursor）下的键盘序列解析和状态恢复问题。
- **国际化支持**：IME 输入法的性能和显示问题持续存在，影响非英语用户。

---

**总结**：今天的更新重点在于 **Windows 平台支持增强**和**企业级策略管理改进**，但社区焦点集中在 **M365 权限争议** 和 **TUI 体验问题**。建议关注后续版本是否针对 IME 和滚动问题进行修复，以及 Anthropic 是否会调整连接器的订阅计划限制。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-03-26)

你好，我是你的 AI 开发工具技术分析师。以下是今日 OpenAI Codex GitHub 仓库的重点动态汇总。

## 1. 今日速览
今日 OpenAI Codex 团队保持了高频的迭代速度，一天内连续发布了 5 个 Rust 核心库的 Alpha 版本（v0.117.0），显示出底层架构正在经历重大调整或优化。社区方面，**Token 消耗过快**以及 **Linux Bubblewrap 沙箱权限**问题引发了大量讨论，成为今日最大的痛点。此外，从最新的 PR 动向来看，团队正在密集构建 **遥测监控体系**和 **远程开发支持**，预示着产品稳定性和连接能力的下一阶段重点。

## 2. 版本发布
过去 24 小时内发布了 **5 个** `rust` 系列的新版本，版本号均为 `0.117.0` 的不同 Alpha 迭代（从 alpha.15 到 alpha.19）。这种高密度的发布通常意味着核心底层正在进行的快速重构或针对特定底层 Bug 的紧急修复测试。

- **相关链接**: [Releases for rust-v0.117.0](https://github.com/openai/codex/releases)

## 3. 社区热点 Issues (Top 10)

以下筛选了今日最受关注或影响最大的 Issues：

1.  **[#14593] Token 消耗速度异常快**
    *   **标签**: `bug` `rate-limits`
    *   **热度**: 👍 86 | 💬 264
    *   **解读**: 这是目前社区最火爆的帖子。Business 订阅用户反映 Token 消耗速度极不正常，似乎存在计费或统计上的 Bug。这直接影响了用户的成本控制，建议相关订阅用户密切关注。
    *   **链接**: [Issue #14593](https://github.com/openai/codex/issues/14593)

2.  **[#10450] Codex 桌面端远程开发支持**
    *   **标签**: `enhancement` `app`
    *   **热度**: 👍 445 | 💬 81
    *   **解读**: 功能请求中呼声最高的一项。用户希望 Codex 桌面应用能像 VS Code Remote 一样连接到远程服务器/容器进行开发，而不仅仅是在本地运行。这是打通云端开发体验的关键缺口。
    *   **链接**: [Issue #10450](https://github.com/openai/codex/issues/10450)

3.  **[#14919] Linux 沙箱报错: bwrap: Failed RTM_NEWADDR**
    *   **标签**: `bug` `sandbox` `regression`
    *   **热度**: 👍 30 | 💬 15
    *   **解读**: 自 CLI v0.115.0 更新后，Linux 环境下的 Bubblewrap 沙箱机制出现权限回归问题，导致子代理无法执行命令。Linux 用户需留意此兼容性问题。
    *   **链接**: [Issue #14919](https://github.com/openai/codex/issues/14919)

4.  **[#12764] CLI 报错 401 Unauthorized**
    *   **标签**: `bug` `auth` `agent`
    *   **热度**: 👍 4 | 💬 88
    *   **解读**: 大量用户反馈在 CLI 中遇到认证失败（401），问题似乎与 `chatgpt.com` 的后端 API 连接有关，影响了 CLI 的基础可用性。
    *   **链接**: [Issue #12764](https://github.com/openai/codex/issues/12764)

5.  **[#15307] Pro 版限额体验急剧下降**
    *   **标签**: `enhancement` `rate-limits`
    *   **热度**: 👍 10 | 💬 12
    *   **解读**: 用户抱怨近期 Pro 账号的限流策略变得过于严格，以前够用的额度现在不到两天就耗尽。这反映了 OpenAI 对高负载账户的策略调整。
    *   **链接**: [Issue #15307](https://github.com/openai/codex/issues/15307)

6.  **[#14936] 沙箱频繁弹出审批提示**
    *   **标签**: `bug` `sandbox` `regression`
    *   **热度**: 👍 13 | 💬 25
    *   **解读**: 同样是 v0.115.0 引入的回归问题，沙箱模式的审批逻辑似乎出了问题，几乎每个命令都需要用户手动确认，严重打断工作流。
    *   **链接**: [Issue #14936](https://github.com/openai/codex/issues/14936)

7.  **[#9224] Codex 远程控制功能**
    *   **标签**: `enhancement` `CLI`
    *   **热度**: 👍 214 | 💬 25
    *   **解读**: 用户希望能通过手机上的 ChatGPT App 远程控制 PC 上运行的 Codex CLI。这代表了“移动端编程/监控”的强烈需求。
    *   **链接**: [Issue #9224](https://github.com/openai/codex/issues/9224)

8.  **[#14860] 远程压缩任务超时**
    *   **标签**: `bug` `context`
    *   **热度**: 👍 9 | 💬 15
    *   **解读**: 在执行上下文压缩时出现“等待子进程退出超时”错误，这可能与今日发布的 Rust 核心库更新有关，影响了长对话的上下文管理。
    *   **链接**: [Issue #14860](https://github.com/openai/codex/issues/14860)

9.  **[#11981] 桌面应用 CPU 占用 100%**
    *   **标签**: `bug` `app`
    *   **热度**: 👍 0 | 💬 19
    *   **解读**: 即便只有一个 Agent 在运行，Codex 桌面应用在 macOS 上也会导致 CPU 满载。这是性能优化的典型案例，影响笔记本续航和散热。
    *   **链接**: [Issue #11981](https://github.com/openai/codex/issues/11981)

10. **[#9634] Token 刷新机制失效**
    *   **标签**: `bug` `auth` `CLI`
    *   **热度**: 👍 4 | 💬 33
    *   **解读**: 较早的 Issue，涉及 Refresh Token 被重复使用导致无法刷新访问令牌的问题，至今仍有用户反馈，表明认证模块可能存在长期遗留 Bug。
    *   **链接**: [Issue #9634](https://github.com/openai/codex/issues/9634)

## 4. 重要 PR 进展 (Top 10)

今日 PR 活动主要集中在遥测、认证架构重构和系统兼容性修复上：

1.  **[#14853] 客户端远程应用服务器认证透传**
    *   **内容**: 实现了客户端到远程服务器的 WebSocket 认证透传机制。这是支持远程开发功能（如 Issue #10450 所求）的底层基础设施。
    *   **链接**: [PR #14853](https://github.com/openai/codex/pull/14853)

2.  **[#15693] 修复旧版系统 Bubblewrap 兼容性**
    *   **内容**: 针对今日热议的 Issue #14919，该 PR 修复了旧版系统 bwrap 拒绝 `--argv0` 参数的问题，避免强制回退到 vendored 版本。
    *   **链接**: [PR #15693](https://github.com/openai/codex/pull/15693)

3.  **[#15531] 增加 PostToolUse Hook 支持**
    *   **内容**: 为工具调用后的钩子增加了非流式 Shell 支持，允许开发者在工具执行后进行拦截或处理，扩展了插件的钩子能力。
    *   **链接**: [PR #15531](https://github.com/openai/codex/pull/15531)

4.  **[#15800] 改进自定义 MCP (Model Context Protocol) 交互**
    *   **内容**: 优化了自定义 MCP 工具的调用流程，增加了“不再询问”选项，并修复了在 YOLO 模式下的运行逻辑。
    *   **链接**: [PR #15800](https://github.com/openai/codex/pull/15800)

5.  **[#15821] 添加监控指标到分析事件**
    *   **内容**: 开始将监控指标集成到分析流中。这表明团队正在加强产品的可观测性，以便更好地排查性能和错误问题。
    *   **链接**: [PR #15821](https://github.com/openai/codex/pull/15821)

6.  **[#15805] 添加 MCP 连接器指标**
    *   **内容**: 详细记录 MCP 调用的耗时、工具名称和连接器 ID。这对于调试外部工具集成时的延迟问题非常有帮助。
    *   **链接**: [PR #15805](https://github.com/openai/codex/pull/15805)

7.  **[#15817] Windows 平台路径展开支持**
    *   **内容**: 修复了 Windows 下 `~` 路径解析的问题，提升了跨平台体验。
    *   **链接**: [PR #15817](https://github.com/openai/codex/pull/15817)

8.  **[#15812] 移除技能脚本的 execve 特殊处理**
    *   **内容**: 简化了 Skill 脚本的执行逻辑，使其遵循标准的沙箱和执行策略，可能会改变现有自定义脚本的权限行为。
    *   **链接**: [PR #15812](https://github.com/openai/codex/pull/15812)

9.  **[#15816] 修复非 ASCII 路径的 Markdown 链接解码**
    *   **内容**: 解决了包含中文或特殊字符的文件路径在 Markdown 渲染中显示错误的问题，提升了本地文件引用的鲁棒性。
    *   **链接**: [PR #15816](https://github.com/openai/codex/pull/15816)

10. **[#15197] Codex Apps 文件映射重写**
    *   **内容**: 改进了工具调用时的文件上传流程，将本地路径参数自动映射为模型可识别的对象，增强了文件操作工具的稳定性。
    *   **链接**: [PR #15197](https://github.com/openai/codex/pull/15197)

## 5. 功能需求趋势

根据近期 Issues 的标签和内容分析，社区关注点集中在以下方向：

*   **远程与云端开发**: 开发者强烈要求 Codex 具备连接远程环境（SSH/Container）的能力，摆脱本地硬件限制。
*   **资源限额与计费透明度**: "Rate-limits" 标签的 Issue 数量激增，用户对 Token 消耗速度和新订阅策略感到困惑和不满。
*   **跨平台一致性**: Windows 和 Linux 平台的沙箱权限、路径处理和 UI 渲染问题依然突出。
*   **深度 IDE 集成**: 用户希望 VS Code 插件能提供更原生的体验，如重命名会话标题、更好的主题适配等。

## 6. 开发者关注点 (痛点)

*   **稳定性回归**: 最近几个版本（特别是 CLI v0.115.0 和 App 更新）引入了较多沙箱和网络连接相关的回归 Bug。
*   **认证机制脆弱**: 401 错误和 Token 刷新失败是高频出现的阻塞性问题，影响了连续工作流。
*   **性能开销**: 桌面端在空闲或轻负载下的高 CPU/GPU 占用问题亟待优化。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-03-26)

你好，我是你的 AI 开发工具技术分析师。以下是基于 GitHub 数据生成的 Gemini CLI 社区动态日报。

## 1. 今日速览
今日 Gemini CLI 发布了 **v0.35.1** 稳定版及 **v0.36.0-preview.3** 预览版，主要聚焦于修复近期版本中的回归问题并为下一阶段功能做铺垫。社区方面，**Agent（智能体）的执行性能**（如卡顿、死循环）和**任务追踪系统的重构**（SDD 流程）成为开发者和维护团队讨论的焦点。此外，多项 PR 显示团队正在着力优化 UI 交互细节及内部评估系统的稳定性。

## 2. 版本发布
*   **v0.35.1**
    *   **类型**: 稳定版补丁
    *   **更新**: 主要针对 v0.35.0 的后续修复，具体变更详见 [Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.35.0...v0.35.1)。
    *   **链接**: [Release v0.35.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.35.1)
*   **v0.36.0-preview.3**
    *   **类型**: 预览版
    *   **更新**: 修补了版本 v0.36.0-preview.0 中的特定问题 (cherry-pick 055ff92)。
    *   **链接**: [Release v0.36.0-preview.3](https://github.com/google-gemini/gemini-cli/releases/tag/v0.36.0-preview.3)

## 3. 社区热点 Issues (Top 10)
以下筛选出今日最受关注或影响最大的 10 个 Issue：

1.  **[性能瓶颈] Gemini CLI 在执行小规模编辑任务时极其缓慢或卡死**
    *   **链接**: [Issue #22141](https://github.com/google-gemini/gemini-cli/issues/22141)
    *   **简评**: 社区反馈最激烈的 Issue（👍 26, 评论 39）。用户报告在编辑少量文件时 CLI 经常卡顿超过 1 小时，甚至陷入 Agent 循环。这直接影响了开发效率，是当前急需解决的核心体验问题。
2.  **[Agent 行为] 退出 Plan 模式后模型未按预期切换**
    *   **链接**: [Issue #23230](https://github.com/google-gemini/gemini-cli/issues/23230)
    *   **简评**: 涉及工作流自动化。用户期望在 Plan 确认后自动切换至 `gemini-3-flash-preview` 模型以节省成本或提高速度，但目前功能失效。
3.  **[架构重构] SDD: 实现持久化项目级 Tracker 存储策略**
    *   **链接**: [Issue #23724](https://github.com/google-gemini/gemini-cli/issues/23724)
    *   **简评**: 重要的架构改进。计划将任务状态从临时目录迁移至 `.gemini/tracker/`，支持 Git 提交，这意味着任务状态可以在不同会话和团队成员间共享。
4.  **[架构重构] SDD Phase 3: 任务集成**
    *   **链接**: [Issue #23320](https://github.com/google-gemini/gemini-cli/issues/23320)
    *   **简评**: 标志着 SDD (Spec-Driven Development) 的重大升级。计划用原生的 `TrackerService` 替代 Markdown 检查清单，引入基于 DAG（有向无环图）的任务管理系统。
5.  **[核心功能] A2A Server 应支持多工作区目录**
    *   **链接**: [Issue #18487](https://github.com/google-gemini/gemini-cli/issues/18487)
    *   **简评**: 功能请求。目前 `CODER_AGENT_WORKSPACE_PATH` 仅支持单目录，限制了 Agent 在多仓库场景下的应用能力。
6.  **[模型行为] 模型有时陷入循环或思考模式时间过长**
    *   **链接**: [Issue #4535](https://github.com/google-gemini/gemini-cli/issues/4535)
    *   **简评**: 老牌 P1 优先级问题。模型输出大量 "Thought" 内容但无实际文本输出，属于模型推理层面的顽疾。
7.  **[核心体验] 支持 `/plan` 命令直接接收文本参数**
    *   **链接**: [Issue #22855](https://github.com/google-gemini/gemini-cli/issues/22855)
    *   **简评**: 交互体验优化。提议 `/plan` 直接跟随描述文本，实现单指令触发规划，减少交互轮次。
8.  **[代码能力] 评估 AST 感知文件读取、搜索和映射的影响**
    *   **链接**: [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)
    *   **简评**: 技术探索。讨论引入 AST（抽象语法树）感知工具，以更精准地读取代码方法边界，减少 Token 噪音，提升 Agent 理解代码的能力。
9.  **[内存管理] 实现全局与项目级内存路由**
    *   **链接**: [Issue #22819](https://github.com/google-gemini/gemini-cli/issues/22819)
    *   **简评**: 智能化改进。区分全局偏好（如代码风格）和项目特定记忆（如特定库用法），让 Agent 更好地处理上下文。
10. **[子代理] 子代理对审批模式的感知**
    *   **链接**: [Issue #23582](https://github.com/google-gemini/gemini-cli/issues/23582)
    *   **简评**: 解决策略冲突。当前子代理的指令可能与全局审批模式（如 Auto-Edit）冲突，导致逻辑混乱。

## 4. 重要 PR 进展 (Top 10)
今日有以下值得关注的代码合并与更新：

1.  **[UI 交互] 实现圆形 8 点盲文加载动画**
    *   **链接**: [PR #23844](https://github.com/google-gemini/gemini-cli/pull/23844)
    *   **内容**: 替换了旧的 3 点垂直动画，使用更流畅的双字符盲文圆形效果，提升终端视觉体验。
2.  **[核心修复] 修复 ask question 对话框高度限制**
    *   **链接**: [PR #23693](https://github.com/google-gemini/gemini-cli/pull/23693)
    *   **内容**: 移除了选择性问题 15 行的高度限制，允许在长终端窗口中利用全屏高度显示信息。
3.  **[功能实现] 支持扩展贡献 Tracker 目录及项目优先级**
    *   **链接**: [PR #23836](https://github.com/google-gemini/gemini-cli/pull/23836)
    *   **内容**: 为即将到来的 SDD 扩展做准备，允许扩展定义任务追踪目录，并确保用户项目级配置拥有最高优先级。
4.  **[稳定性] 评估系统增加 500/503 错误重试机制**
    *   **链接**: [PR #23626](https://github.com/google-gemini/gemini-cli/pull/23626)
    *   **内容**: 针对内部评估运行时的 API 瞬态错误增加鲁棒性，防止因服务器临时故障阻塞 PR 流程。
5.  **[功能实现] ACP 客户端独立配置存储**
    *   **链接**: [PR #23818](https://github.com/google-gemini/gemini-cli/pull/23818)
    *   **内容**: 修复 IDE 集成配置持久化问题，为不同编辑器（如 VS Code）隔离存储 "Always Allow" 策略，防止配置冲突。
6.  **[沙箱] 动态 Linux 沙箱扩展及 Worktree 支持**
    *   **链接**: [PR #23692](https://github.com/google-gemini/gemini-cli/pull/23692)
    *   **内容**: 让 Linux 沙箱管理与 macOS Seatbelt 对齐，支持动态路径解析和 Git worktree，这对在沙箱环境中进行多分支开发至关重要。
7.  **[文档] 更新 API Key 免费层限制说明**
    *   **链接**: [PR #23764](https://github.com/google-gemini/gemini-cli/pull/23764)
    *   **内容**: 清理文档中过时的硬编码配额限制，引导用户查看最新的动态配额指南。
8.  **[工具优化] 实现紧凑型工具输出**
    *   **链接**: [PR #20974](https://github.com/google-gemini/gemini-cli/pull/20974)
    *   **内容**: 旨在减少工具调用在终端占用的空间，提供高信号密度的输出模式，改善终端的人机工程学。
9.  **[基础建设] 引入开发 Worker 基础设施**
    *   **链接**: [PR #23814](https://github.com/google-gemini/gemini-cli/pull/23814)
    *   **内容**: 预研性质的基础设施 PR，为未来支持高性能远程开发卸载和生命周期自动化做准备。
10. **[修复] 修复评估测试中的快照与导入路径错误**
    *   **链接**: [PR #23842](https://github.com/google-gemini/gemini-cli/pull/23842)
    *   **内容**: 修正了 `tracker.eval.ts` 等文件中工具日志抓取时机错误的问题，确保自动化测试的准确性。

## 5. 功能需求趋势
根据近期 Issues 的标签和内容分析，社区功能需求呈现以下趋势：
*   **SDD (Spec-Driven Development) 深度集成**: 从简单的 Markdown 清单向基于 DAG 的持久化任务系统 (`TrackerService`) 演进，强调任务状态的跨会话保存和 Git 协作能力。
*   **Agent 记忆与上下文管理**: 社区和团队都在致力于解决 Agent "记性差" 的问题，包括区分全局/项目级记忆、优化内存写入时机以及 AST 级别的代码理解。
*   **IDE 集成体验增强**: ACP (Agent Client Protocol) 相关的改进增多，特别是关于配置隔离、多工作区支持和原始输入输出的可见性。

## 6. 开发者关注点
*   **性能与稳定性**: 开发者对 Agent 执行过程中的 "卡顿" 和 "死循环" 容忍度极低，尤其是 v0.35.x 版本引入的性能退步引发了大量讨论。
*   **自动化干扰**: 模型在受限模式下（如沙箱或自动批准模式）生成大量临时脚本或清理文件，增加了维护负担。
*   **配置与权限**: 多环境（不同 IDE、命令行）下的配置冲突和权限管理是痛点，用户希望有更清晰、隔离的配置策略。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

你好！我是你的 AI 开发工具技术分析师。根据提供的 GitHub 数据，为你整理了 2026年3月26日 的 GitHub Copilot CLI 社区动态日报。

---

# 📅 GitHub Copilot CLI 社区动态日报 (2026-03-26)

## 1. 今日速览
今日 GitHub Copilot CLI 连续发布了 **v1.0.12-0** 和 **v1.0.12-1** 两个版本，重点优化了模型选择器界面并修复了 VS Code 终端兼容性问题。社区方面，**MCP 服务器连接失败**和**API 限流**问题引发了大量用户反馈，成为今日最受关注的痛点。此外，关于会话分支和精细权限控制的功能请求讨论热度持续上升。

## 2. 版本发布

### **v1.0.12-1** (最新补丁)
*   **改进**: 状态栏载荷增加 `session_name` 字段，与 `session_id` 并存。
*   **修复**:
    *   VS Code 终端现已支持 OSC 8 超链接点击。
    *   修正了 PowerShell 中 `/flag` 类型参数（如 `/all`）被误识别为文件路径的问题。
    *   优化了受信任文件夹访问提示的逻辑。

### **v1.0.12-0** (功能更新)
*   **配置增强**: 现支持读取 `.claude/settings.json` 作为额外的仓库配置源。
*   **UI 交互**: 模型选择器改为全屏视图，支持使用 `←` / `→` 方向键实时调整推理消耗。
*   **可观测性**: OTEL 钩子执行记录方式从子跨度调整为事件，以减少遥测数据的复杂度。

---

## 3. 社区热点 Issues (Top 10)

以下是今日社区中最值得关注的 10 个 Issue，涵盖了阻塞故障、安全合规和核心体验问题：

1.  **[#2101] 频繁遭遇 API 瞬态错误与限流**
    *   **标签**: `OPEN` `triage`
    *   **热度**: 👍 2 | 💬 7
    *   **解读**: 多名用户报告即使付费使用，仍频繁遇到 "transient API error" 和误报的限流提示，严重影响工作流。这是目前反馈最集中的连接性问题。
    *   **链接**: [github/copilot-cli Issue #2101](https://github.com/github/copilot-cli/issues/2101)

2.  **[#2236] 组织注册的 MCP 服务器神秘消失**
    *   **标签**: `OPEN` `triage`
    *   **热度**: 👍 18 | 💬 4
    *   **解读**: 自 v1.0.11 起，通过组织注册表配置的 MCP 服务器在使用一周后消失，且错误提示“已被组织策略禁用”，被用户确认为误报。该问题严重阻碍了企业级用户的使用。
    *   **链接**: [github/copilot-cli Issue #2236](https://github.com/github/copilot-cli/issues/2236)

3.  **[#970] macOS Gatekeeper 阻止应用运行**
    *   **标签**: `OPEN` `triage`
    *   **热度**: 👍 18 | 💬 5
    *   **解读**: 在 macOS 企业安全策略下，每次通过 HomeBrew 升级后，Copilot CLI 都会被 Gatekeeper 拦截，需手动在隐私设置中放行。这已成为长期困扰 Mac 用户的合规痛点。
    *   **链接**: [github/copilot-cli Issue #970](https://github.com/github/copilot-cli/issues/970)

4.  **[#953] 权限请求范围过大**
    *   **标签**: `OPEN` `triage`
    *   **热度**: 👍 1 | 💬 6
    *   **解读**: 用户呼吁支持细粒度权限控制。目前认证过程请求对账户下所有内容的读写权限，对于仅需操作特定仓库的场景显得过于激进，引发安全和隐私担忧。
    *   **链接**: [github/copilot-cli Issue #953](https://github.com/github/copilot-cli/issues/953)

5.  **[#1313] 请求支持会话分支功能**
    *   **标签**: `OPEN` `triage`
    *   **热度**: 👍 5 | 💬 5
    *   **解读**: 这是一个高价值的功能请求。用户希望能够像 Git 分支一样，基于当前对话历史创建“分支”，以便在不破坏原有上下文的情况下探索不同的解决方案。
    *   **链接**: [github/copilot-cli Issue #1313](https://github.com/github/copilot-cli/issues/1313)

6.  **[#2294] 许可证澄清：Linux 发行版打包**
    *   **标签**: `OPEN` `triage`
    *   **热度**: 👍 0 | 💬 0
    *   **解读**: Arch Linux 维护者请求澄清许可证条款，希望能将 Copilot CLI 打包进入非商业性的开源发行版仓库。这反映了开源社区对集成该工具的强烈兴趣。
    *   **链接**: [github/copilot-cli Issue #2294](https://github.com/github/copilot-cli/issues/2294)

7.  **[#1723] VS Code `/ide` 命令连接失败**
    *   **标签**: `OPEN` `triage`
    *   **热度**: 👍 2 | 💬 5
    *   **解读**: 在最新版 macOS 上，CLI 无法检测到正在运行的 VS Code 工作区，导致 `/ide` 功能失效。这属于核心集成功能的回归问题。
    *   **链接**: [github/copilot-cli Issue #1723](https://github.com/github/copilot-cli/issues/1723)

8.  **[#2298] 呼吁细粒度命令白名单**
    *   **标签**: `OPEN` `triage`
    *   **解读**: 用户对目前的“全部允许”或“全部拒绝”机制感到沮丧，希望能够预设一组受信任的命令（如 `dotnet` 构建），减少运行时的频繁确认打断。
    *   **链接**: [github/copilot-cli Issue #2298](https://github.com/github/copilot-cli/issues/2298)

9.  **[#2278] 缺乏对存储记忆的管理功能**
    *   **标签**: `OPEN` `triage`
    *   **解读**: 随着记忆功能的引入，大型仓库中积累了大量记忆数据，但用户无法查看、删除或针对个人退出该功能。这引发了数据可控性的担忧。
    *   **链接**: [github/copilot-cli Issue #2278](https://github.com/github/copilot-cli/issues/2278)

10. **[#1999] 德语键盘无法输入 `@` 符号**
    *   **标签**: `OPEN` `triage`
    *   **解读**: 键盘映射 Bug 导致德语布局用户无法输入 `@` 符号（AltGr+Q），这导致 CLI 在非英语环境下几乎不可用。
    *   **链接**: [github/copilot-cli Issue #1999](https://github.com/github/copilot-cli/issues/1999)

---

## 4. 重要 PR 进展
*过去24小时内无更新的 Pull Requests。*

---

## 5. 功能需求趋势
基于今日的 Issue 动态，社区功能需求集中在以下方向：

1.  **MCP (Model Context Protocol) 稳定性与兼容性**: 企业用户对 MCP 服务器的依赖度显著增加，任何连接中断或策略误判都会导致工作停摆。
2.  **权限与安全合规**: 用户强烈要求降低认证权限范围（最小权限原则），并解决 macOS 上的代码签名/安全拦截问题。
3.  **会话管理高级功能**: 开发者希望 CLI 能提供类似 IDE 的会话管理能力，如“会话分支”和基于 AI 的“自动重命名”。
4.  **交互体验优化**: 包括命令执行的白名单机制、音频提醒以及键盘布局兼容性，显示出用户希望 CLI 能更好地融入复杂的工作流。

## 6. 开发者关注点
*   **稳定性焦虑**: 开发者对 API 限流和瞬态错误表现出极大的挫败感，尤其是付费用户认为这违背了服务承诺。
*   **Agent 自主性控制**: 随着 Agent 模式的使用增加，开发者需要更精细的控制权（如命令预审批、Hook 触发机制），而不是简单的全自动或全手动。
*   **跨平台一致性**: 从键盘输入到文件路径解析，Windows (PowerShell) 和 macOS 上的特有 Bug 仍然是影响体验的主要因素。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-03-26)

## 1. 今日速览
Kimi Code CLI 今日发布了 **v1.26.0** 版本，重点修复了 JSON 解析、网络重连和终端交互等稳定性问题，并将插件系统标记为 Beta 阶段。社区活跃度极高，单日合并了 **14 个 PR**，同时出现了大量关于操作体验（如换行快捷键、任务队列）和插件系统的高质量功能请求。

## 2. 版本发布
### [v1.26.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.26.0)
本次更新聚焦于稳定性提升和 Bug 修复，主要变更包括：
- **插件系统**：正式标记为 Beta 版本 ([#1558](https://github.com/MoonshotAI/kimi-cli/pull/1558))。
- **核心修复**：
  - 修复 JSON 解析错误：使用 `json.loads(strict=False)` 处理 LLM 输出中的控制字符 ([#1580](https://github.com/MoonshotAI/kimi-cli/pull/1580))。
  - 增强网络稳定性：支持流式传输中断自动重试，增加 504 Gateway Timeout 重试机制 ([#1544](https://github.com/MoonshotAI/kimi-cli/pull/1544), [#1577](https://github.com/MoonshotAI/kimi-cli/pull/1577))。
  - 修复 Shell 交互：解决子进程 TTY 竞争导致的卡死问题，防止交互式提示符阻塞 ([#1579](https://github.com/MoonshotAI/kimi-cli/pull/1579))。
  - 修复 Gemini 兼容性：移除 Function Call 中导致报错的 `id` 字段 ([#1582](https://github.com/MoonshotAI/kimi-cli/pull/1582))。

## 3. 社区热点 Issues
以下是今日最值得关注的 10 个 Issue，反映了用户的痛点和期待：

1.  **[#1585 换行快捷键支持 (Shift+Enter)](https://github.com/MoonshotAI/kimi-cli/issues/1585)**
    *   **关注点**：用户体验。
    *   **摘要**：用户抱怨当前 `Ctrl+J` 的换行操作不符合直觉，强烈请求支持通用的 `Shift+Enter`，该提议引发了迅速共鸣。
2.  **[#1589 Yolo 模式容错性](https://github.com/MoonshotAI/kimi-cli/issues/1589)**
    *   **关注点**：自动化体验。
    *   **摘要**：在全自动运行（Yolo）模式下，单个 Tool Call 报错会导致整个任务终止。用户希望增加“跳过错误继续执行”的选项。
3.  **[#1375 大型仓库文件搜索失效](https://github.com/MoonshotAI/kimi-cli/issues/1375)**
    *   **关注点**：性能/功能性 Bug。
    *   **摘要**：在文件数量极多（如 65k+）的大型仓库中，使用 `@` 提及文件时无法找到文件。已有社区开发者提交了修复 PR ([#1588](https://github.com/MoonshotAI/kimi-cli/pull/1588))。
4.  **[#1334 JetBrains IDE 不可用](https://github.com/MoonshotAI/kimi-cli/issues/1334)**
    *   **关注点**：生态集成。
    *   **摘要**：持续的集成问题导致部分 JetBrains IDE 用户无法正常使用 Kimi，这是影响核心开发群体的关键 Bug。
5.  **[#1283 跨会话记忆系统](https://github.com/MoonshotAI/kimi-cli/issues/1283)**
    *   **关注点**：核心能力增强。
    *   **摘要**：请求实现类似 Claude Code 的 Memory System，以便在会话间保留项目偏好和上下文，这是迈向“智能体”的重要一步。
6.  **[#1566 插件系统兼容性疑问](https://github.com/MoonshotAI/kimi-cli/issues/1566)**
    *   **关注点**：新功能困惑。
    *   **摘要**：随着插件系统上线（v1.25），用户急切想知道是否兼容 Claude Code 或 Open Code 的现有插件生态，以及安装方法。
7.  **[#1583 任务队列功能](https://github.com/MoonshotAI/kimi-cli/issues/1583)**
    *   **关注点**：交互逻辑。
    *   **摘要**：请求改进多任务处理逻辑，希望在 Agent 执行任务时输入的新指令能进入队列排队，而不是直接打断当前任务。
8.  **[#1572 Web 工具无效报错](https://github.com/MoonshotAI/kimi-cli/issues/1572)**
    *   **关注点**：功能性 Bug。
    *   **摘要**：v1.25 版本中出现了 `SearchWeb` 和 `FetchURL` 工具无效的错误，直接影响联网功能。
9.  **[#1531 终端输出导致卡死](https://github.com/MoonshotAI/kimi-cli/issues/1531)**
    *   **关注点**：稳定性。
    *   **摘要**：Kimi 执行任务时，如果后台终端有意外的文本输出，会导致 UI 卡死。该问题在 v1.26 中已尝试修复。
10. **[#1570 编辑工具卡顿](https://github.com/MoonshotAI/kimi-cli/issues/1570)**
    *   **关注点**：核心工具稳定性。
    *   **摘要**：Edit tool 频繁卡住，严重影响代码修改体验。

## 4. 重要 PR 进展
今日共有大量 PR 被合并，主要集中在提升稳定性和修复网络/终端问题上：

1.  **[#1580 修复 JSON 解析崩溃](https://github.com/MoonshotAI/kimi-cli/pull/1580)** (Merged)
    *   解决了 LLM 生成包含控制字符的参数时导致的解析崩溃问题。
2.  **[#1581 重定向 MCP 调试输出](https://github.com/MoonshotAI/kimi-cli/pull/1581)** (Merged)
    *   解决了启动时 OAuth MCP 服务器的冗余日志污染终端的问题。
3.  **[#1588 修复大仓库文件提及](https://github.com/MoonshotAI/kimi-cli/pull/1588))** (Open)
    *   由社区贡献，通过使用 `git ls-files` 替代传统遍历，解决大型仓库中 `@` 文件搜索失效的问题。
4.  **[#1579 修复 Shell 交互卡死](https://github.com/MoonshotAI/kimi-cli/pull/1579)** (Merged)
    *   通过立即关闭 stdin 和设置 `GIT_TERMINAL_PROMPT=0`，防止子进程等待输入导致的挂起。
5.  **[#1587 增强交互式 Shell 模式](https://github.com/MoonshotAI/kimi-cli/pull/1587)** (Open)
    *   改进：将 Shell 模式（Ctrl+X）的输出注入上下文，并持久化 `cd` 目录变更，使体验更接近真实 Shell。
6.  **[#1577 网络流重试机制](https://github.com/MoonshotAI/kimi-cli/pull/1577)** (Merged)
    *   映射 `httpx.ProtocolError` 并增加 504 重试，显著改善弱网环境下的可用性。
7.  **[#1576 后台任务实时流输出](https://github.com/MoonshotAI/kimi-cli/pull/1576)** (Merged)
    *   修复了后台任务运行时，浏览器端 `/task` 查看输出为空的问题，实现实时日志流。
8.  **[#1512 重写 ACP 认证流程](https://github.com/MoonshotAI/kimi-cli/pull/1512)** (Open)
    *   一个大型重构 PR，旨在完整支持终端登录和 OAuth Device Flow，目前仍在审核中。
9.  **[#1590 全局配置合并支持](https://github.com/MoonshotAI/kimi-cli/pull/1590)** (Open)
    *   功能：支持加载全局 `~/.kimi/AGENTS.md` 并与本地配置智能合并，方便统一管理 Prompt 规则。
10. **[#1586 网络异常捕获](https://github.com/MoonshotAI/kimi-cli/pull/1586)** (Open)
    *   修复 `SearchWeb` 工具因未捕获 `aiohttp.ClientError` 导致的 Agent Loop 崩溃。

## 5. 功能需求趋势
根据今日 Issues 的关键词分析，社区关注点集中在以下方向：
1.  **交互体验优化**：对 `Shift+Enter` 换行、输入队列不打断任务等细节体验的呼声极高，表明用户正将 Kimi CLI 用于高强度的日常开发，对流畅度要求苛刻。
2.  **插件与扩展生态**：随着插件系统进入 Beta，用户不仅关注如何使用，更关注**兼容性**（是否能复用 Claude Code 生态），这表明用户希望拥有统一的 AI 工具配置标准。
3.  **自动化与稳定性**：对 Yolo 模式的健壮性要求提高。用户希望 Agent 具备更强的**容错能力**（跳过错误、自动重试），而非遇到报错即停止。

## 6. 开发者关注点
*   **网络连接稳定性**：v1.26 的大量修复集中在流式传输的重连和超时处理上，说明在复杂网络环境下（如代理、热点）的稳定性仍是开发者痛点。
*   **IDE 集成故障**：JetBrains 插件不可用的问题持续未解，这可能是由于特定版本的兼容性或底层通信协议变更引起的。
*   **大型项目性能**：文件搜索在大型 Mono-repo 中的失效提醒开发者，未来的性能优化需要针对大规模代码库进行专门优化（如索引、异步搜索）。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-03-26)

## 1. 今日速览
OpenCode 社区今日活跃度较高，主要焦点集中在**模型兼容性**与**系统稳定性**上。开发者 @sbrunecker 报告了 Opus 4.6 配合 Github Copilot 使用时出现的预填充报错问题，引发了社区对大模型适配的广泛讨论。此外，核心开发团队 @kitlangton 密集提交了多项基于 Effect 架构的重构 PR，旨在优化 LSP 服务、配置管理和 MCP 连接的稳定性。

## 2. 版本发布
过去 24 小时内无官方 Release 发布。

## 3. 社区热点 Issues

以下筛选了 10 个最具代表性的 Issue，涵盖了模型适配、安全、性能和核心功能缺陷：

1.  **[#13768](https://github.com/anomalyco/opencode/issues/13768) [bug] Opus 4.6 模型预填充不支持**
    *   **重要性**：热门度最高（31条评论）。
    *   **内容**：配合 Github Copilot 使用 Opus 4.6 时，频繁中断并提示 "This model does not support assistant message prefill"。
    *   **社区反应**：用户普遍反馈影响工作流，正在排查是否为 SDK 兼容性问题。

2.  **[#5076](https://github.com/anomalyco/opencode/issues/5076) [security] OpenCode 默认配置存在安全风险**
    *   **重要性**：高赞（48 👍）。
    *   **内容**：指出 OpenCode 默认拥有过高权限（如读取任意文件），建议改为更安全的“拒绝优先”策略。

3.  **[#8554](https://github.com/anomalyco/opencode/issues/8554) [feat] 支持 RLM (Recursive Language Model) 模式**
    *   **重要性**：高价值功能讨论（13 👍）。
    *   **内容**：提议增加内置工具，允许 LLM 编写代码以编程方式循环调用子 LLM，实现真正的递归语言模型能力。

4.  **[#17910](https://github.com/anomalyco/opencode/issues/17910) [bug] OAuth 认证导致 Claude 模型全线 HTTP 400**
    *   **重要性**：严重功能性 Bug（已关闭）。
    *   **内容**：自 3 月 17 日起，使用 OAuth 认证调用 Claude 模型必现 400 错误，根因是 SDK 错误注入了 `cache_control`。

5.  **[#15714](https://github.com/anomalyco/opencode/issues/15714) [zen] BigPickle 免费额度耗尽**
    *   **重要性**：服务可用性。
    *   **内容**：用户反馈 OpenCode Zen 的 BigPickle 模型开始提示额度超限，质疑免费政策变更未通知。

6.  **[#12741](https://github.com/anomalyco/opencode/issues/12741) [docs] Skills 自动检测失败**
    *   **重要性**：功能易用性。
    *   **内容**：文档声称 `~/.agents/skills/` 下的技能会被自动检测，但实际上并未生效，用户怀疑文档过时或路径解析有误。

7.  **[#19168](https://github.com/anomalyco/opencode/issues/19168) [perf] 本地 MCP 进程泄露**
    *   **重要性**：资源管理缺陷。
    *   **内容**：每个 Session 会开启新的 stdio MCP 进程，但 Session 结束后进程从不销毁，导致内存占用持续攀升。

8.  **[#19196](https://github.com/anomalyco/opencode/issues/19196) [bug] Web UI 会话随机消失**
    *   **重要性**：数据持久化故障。
    *   **内容**：最新版 Web UI 中，历史聊天记录经常随机消失且无法恢复。

9.  **[#6096](https://github.com/anomalyco/opencode/issues/6096) [feat] 显示 Tokens/s 计算指标**
    *   **重要性**：性能可视化需求（22 👍）。
    *   **内容**：建议在消息响应中实验性显示每秒生成的 Token 数（TPS），以便量化模型速度。

10. **[#12083](https://github.com/anomalyco/opencode/issues/12083) [bug] Intranet 环境连接失败**
    *   **重要性**：网络环境兼容性。
    *   **内容**：内网环境下无法连接，即使尝试了所有已知解决方案仍报错 "Unable to connect"。

## 4. 重要 PR 进展

核心团队今日主要进行了架构重构与性能优化：

1.  **[#19200](https://github.com/anomalyco/opencode/pull/19200) fix(mcp): 修复 MCP 连接泄露**
    *   解决 Issue #19168。在连接超时或失败时确保关闭 Transport，防止子进程残留。

2.  **[#19195](https://github.com/anomalyco/opencode/pull/19195) fix: 添加 Skill 安全警告**
    *   在系统提示中标记仓库提供的 Skill 内容为“不可信”，防止供应链攻击。

3.  **[#19150](https://github.com/anomalyco/opencode/pull/19150) refactor(lsp): LSP 服务 Effect 化重构**
    *   将 LSP 服务迁移至 Effect 架构，引入 `InstanceState` 管理生命周期，提升稳定性与可追踪性。

4.  **[#19192](https://github.com/anomalyco/opencode/pull/19192) feat(opencode): 增加 `quota` 命令**
    *   新增 CLI 指令 `opencode quota`，支持查询并展示 Provider 的配额信息。

5.  **[#19139](https://github.com/anomalyco/opencode/pull/19139) refactor: Config 服务 Effect 化**
    *   将 Config 服务迁移至 Effect 运行时，解决全局缓存与实例状态同步问题。

6.  **[#18767](https://github.com/anomalyco/opencode/pull/18767) feat(app): 移动端触控优化**
    *   优化 App 在移动/触屏设备上的交互体验，同时保留桌面端功能。

7.  **[#18433](https://github.com/anomalyco/opencode/pull/18433) feat: AI SDK v6 支持**
    *   升级底层 AI SDK 至 v6 版本，可能涉及模型调用逻辑的重大变更。

8.  **[#17803](https://github.com/anomalyco/opencode/pull/17803) refactor: 移除 Electron 内置 CLI**
    *   改为在 Electron 主进程中直接启动 Server，移除了 CLI 的打包，旨在减小体积或统一逻辑。

9.  **[#19159](https://github.com/anomalyco/opencode/pull/19159) fix(app): 规范化工作区 Key**
    *   修复 Windows 路径斜杠不一致导致 Session 无法正确恢复的问题。

10. **[#13854](https://github.com/anomalyco/opencode/pull/13854) fix(tui): 修复 TUI 消息渲染不全**
    *   修复 Markdown/代码块在消息完成后停止渲染的问题，确保显示完整内容。

## 5. 功能需求趋势

*   **模型适配与兼容性**：随着 Claude Opus 4.6 和 Sonnet 4.6 的普及，社区急需解决 Assistant Prefill 和 Reasoning Opaque 数据的处理兼容性。
*   **安全与权限控制**：用户对“默认信任”策略表示担忧，倾向于更细粒度的权限控制和安全提示。
*   **高级架构模式**：开发者对 RLM（递归语言模型）和 Multi-Agent 编排表现出浓厚兴趣。
*   **性能可视化**：对 TPS（Tokens per second）等实时性能指标的需求日益增长。

## 6. 开发者关注点

*   **稳定性痛点**：MCP 进程泄露和 Web UI 会话丢失是当前最影响体验的稳定性问题。
*   **跨平台一致性**：Windows 平台依然存在路径处理、终端粘贴和内网连接等特有 Bug。
*   **架构演进**：项目正在经历大规模的 "Effect化" 重构，表明团队正在为未来的扩展性和稳定性打下基础，开发者需注意 API 变动。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-03-26)

你好，我是你的 AI 开发工具技术分析师。以下是基于 GitHub 数据生成的 Qwen Code 社区日报。

## 1. 今日速览
Qwen Code 今日发布了 **v0.14.0-preview.0** 及对应的 Nightly 版本，主要修复了非 GitHub 源的扩展安装问题及内存显示逻辑。社区当前热点集中在 **IDE 集成（特别是 VS Code 与 ACP 协议）** 的稳定性上，尤其是进程孤儿化和权限持久化的问题引发了大量讨论。此外，针对阿里云云效 CI/CD 和 Vim 模式的功能请求显示了社区对工作流深度集成的强烈需求。

## 2. 版本发布
*   **v0.14.0-preview.0**: 这是一个预览版，开启了 0.14.0 的迭代周期。
    *   [查看完整变更日志](https://github.com/QwenLM/qwen-code/compare/v0.13.0...v0.14.0-preview.0)
*   **v0.13.0-nightly.20260326.28e62882f**: 包含两个关键修复。
    *   **fix(extensions)**: 修复了扩展安装不支持非 GitHub Git URL 的问题 ([PR #2539](https://github.com/QwenLM/qwen-code/pull/2539))。
    *   **fix(cli)**: 修复了 `/memory show` 命令无法显示所有已配置上下文文件（如 `AGENTS.md`）的问题 ([PR #23](https://github.com/QwenLM/qwen-code/pull/23))。

## 3. 社区热点 Issues (Top 10)

1.  **[P1] VS Code 扩展 "Preparing" 卡死与进程残留**
    *   **Issue**: [#2382](https://github.com/QwenLM/qwen-code/Issue/2382) | [#2665](https://github.com/QwenLM/qwen-code/Issue/2665)
    *   **点评**: 多名用户反馈扩展无法启动或关闭 Tab 后子进程不销毁（孤儿进程）。这直接影响了 VS Code 插件的核心体验，相关修复 PR (#2662) 已提交，值得重点关注。
2.  **[Bug] Windows 权限设置无法持久化**
    *   **Issue**: [#2669](https://github.com/QwenLM/qwen-code/Issue/2669) | [#2640](https://github.com/QwenLM/qwen-code/Issue/2640)
    *   **点评**: Windows 用户在授权 "Always allow" 后，每次仍会被重复询问。这是一个影响工作流的体验问题，目前已有 PR (#2670) 尝试通过修复路径大小写敏感性问题来解决。
3.  **[Bug] CLI 在 Linux 下请求权限时崩溃**
    *   **Issue**: [#2626](https://github.com/QwenLM/qwen-code/Issue/2626)
    *   **点评**: Ubuntu Server 环境下，当触发用户权限请求时 CLI 会直接 Crash 并显示 "Terminated"。这是一个严重的阻塞性 Bug，影响 Linux 服务端用户。
4.  **[Feature] 支持阿里云云效 CI/CD 集成**
    *   **Issue**: [#2649](https://github.com/QwenLM/qwen-code/Issue/2649)
    *   **点评**: 社区希望 Qwen Code 能像支持 GitHub Actions 一样深度集成阿里云云效，以适应国内开发环境，这反映了本土化集成的强需求。
5.  **[Feature] 增加 /loop 周期性执行命令**
    *   **Issue**: [#2638](https://github.com/QwenLM/qwen-code/Issue/2638)
    *   **点评**: 提议增加 `/loop` 指令以实现自动化监控（如监控 CI 状态）。这是一个高价值的自动化功能增强，对应的 PR (#2643) 已经在开发中。
6.  **[Bug] LSP 功能大面积不可用**
    *   **Issue**: [#1873](https://github.com/QwenLM/qwen-code/Issue/1873) | [#2106](https://github.com/QwenLM/qwen-code/Issue/2106)
    *   **点评**: 用户反馈 C++/Java/Python 的 LSP 功能（如跳转定义、查找引用）返回空结果。LSP 是代码理解的核心，修复 PR (#2547) 提及是因为缺少 `textDocument/didOpen` 通知。
7.  **[Bug] 会话内答案未保存**
    *   **Issue**: [#2640](https://github.com/QwenLM/qwen-code/Issue/2640)
    *   **点评**: 在同一个会话中，已经回答过的问题（如 Bash 授权）会被反复询问。这不仅打断思路，也增加了操作负担。
8.  **[Feature] Vim 模式快捷键优化**
    *   **Issue**: [#2561](https://github.com/QwenLM/qwen-code/Issue/2561)
    *   **点评**: Vim 用户希望在自动补全菜单中使用 `Ctrl+p/n` 代替方向键。这是提升编辑器内体验的细节优化需求。
9.  **[Bug] Debug 模式日志无法关闭**
    *   **Issue**: [#2660](https://github.com/QwenLM/qwen-code/Issue/2660)
    *   **点评**: 用户反馈始终显示 "Debug mode enabled" 且无法通过配置关闭，产生的日志文件可能占用资源，需要提供更清晰的日志级别配置。
10. **[Bug] ACP 模式在 Zed 编辑器中初始化失败**
    *   **Issue**: [#2671](https://github.com/QwenLM/qwen-code/Issue/2671) | [#1131](https://github.com/QwenLM/qwen-code/Issue/1131)
    *   **点评**: 在 Zed 编辑器中使用最新版 Qwen Code 时出现 OpenAI logger 初始化错误。这表明 Qwen Code 在非 VS Code 的 IDE 适配（通过 ACP 协议）上仍存在兼容性问题。

## 4. 重要 PR 进展 (Top 10)

1.  **[Feat] 新增 /loop 周期性任务命令** ([PR #2643](https://github.com/QwenLM/qwen-code/PR/2643))
    *   实现定时执行 Prompt 的能力，支持自动化工作流（如轮询 CI 结果），状态为 Open。
2.  **[Feat] 支持 Telegram 和 WeChat 频道** ([PR #2628](https://github.com/QwenLM/qwen-code/PR/2628))
    *   引入 Channels 功能，允许通过 Telegram 和微信与 Qwen Code 交互，极大地扩展了使用场景。
3.  **[Fix] 彻底解决 VS Code 孤儿进程问题** ([PR #2662](https://github.com/QwenLM/qwen-code/PR/2662))
    *   修复关闭 Tab 后 ACP 子进程不退出的 Bug，涉及 CLI 和扩展两端的重构，解决社区痛点。
4.  **[Feat] 增加阿里云标准 API Key 认证流** ([PR #2668](https://github.com/QwenLM/qwen-code/PR/2668))
    *   在 `/auth` 中增加阿里云标准 API Key 的独立选项，支持选择国内/国际 Region，提升国内用户体验。
5.  **[Fix] Windows 路径大小写导致权限失效** ([PR #2670](https://github.com/QwenLM/qwen-code/PR/2670))
    *   修复 Windows 下因路径比较区分大小写导致的权限配置无法读取的问题。
6.  **[Feat] VSCode Companion 支持 /export** ([PR #2592](https://github.com/QwenLM/qwen-code/PR/2592))
    *   允许在 IDE 中直接导出当前会话，与 CLI 功能对齐。
7.  **[Fix] 修复 LSP 对 C++/Java/Python 的支持** ([PR #2547](https://github.com/QwenLM/qwen-code/PR/2547))
    *   通过补发 `textDocument/didOpen` 通知，修复了非 TS 语言的 LSP 功能失效问题。
8.  **[Feat] VS Code ACP 连接重试与自动重连** ([PR #2666](https://github.com/QwenLM/qwen-code/PR/2666))
    *   增加指数退避重试逻辑，解决网络波动或启动延迟导致的连接失败。
9.  **[Feat] 上下文感知的 Follow-up Suggestions** ([PR #2525](https://github.com/QwenLM/qwen-code/PR/2525))
    *   任务完成后自动建议下一步操作（如 "commit", "run tests"），类似 Claude Code 的 NES 功能。
10. **[Fix] 默认上下文文件名修改为 AGENTS.md** ([PR #2654](https://github.com/QwenLM/qwen-code/PR/2654))
    *   将默认文件名从 `QWEN.md` 改为 `AGENTS.md`，同时也保持对前者的兼容，可能是为了迎合更通用的 Agent 规范。

## 5. 功能需求趋势
*   **IDE 深度集成与稳定性**: 社区对 VS Code 插件的稳定性（特别是 ACP 协议实现）关注度最高，包括进程管理、UI 容器报错和 LSP 支持。
*   **自动化工作流**: `/loop` 命令和 CI/CD 集成（云效）的需求表明，用户希望 Qwen Code 能成为自动化流水线的一部分，而不仅仅是辅助工具。
*   **多渠道交互**: Telegram 和微信支持的 PR 显示出将 AI Coding 能力延伸到即时通讯软件的趋势。
*   **本土化与鉴权**: 针对阿里云 API Key 的优化需求强烈，反映出国内用户对 DashScope/阿里云生态集成的依赖。

## 6. 开发者关注点
*   **权限管理痛点**: 重复的授权弹窗是开发者反馈最频繁的体验问题。
*   **Context 管理**: 多个 Issue 涉及上下文文件（Memory）的读取、清理和压缩策略，说明在长上下文处理上仍需优化。
*   **非 VS Code 环境**: Zed 等其他 IDE 用户开始通过 ACP 协议接入，但遇到了初始化错误，显示多 IDE 支持仍需打磨。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*