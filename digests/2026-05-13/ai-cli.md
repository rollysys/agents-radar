# AI CLI 工具社区动态日报 2026-05-13

> 生成时间: 2026-05-13 03:40 UTC | 覆盖工具: 7 个

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

# AI CLI 工具生态横向对比分析报告 (2026-05-13)

## 1. 生态全景
当前 AI CLI 工具正经历从"对话助手"向"自主代理"的架构跃迁。**MCP (Model Context Protocol)** 协议的深度集成与 **守护进程化** 成为扩展能力边界的核心路径，而 **多代理协作** 与 **长任务自动化** 则是竞争的高地。然而，随着自主性的增强，**成本失控**（隐形 Token 消耗）、**资源泄漏**（内存/CPU）以及 **操作安全性**（文件损坏/误删）成为阻碍其进入企业级生产环境的三大共性挑战。

## 2. 各工具活跃度对比

| 工具名称 | 今日版本动态 | Issues 热度 (Top 内容) | PR 活跃度 | 核心关注点 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | v2.1.140 | 10+ (复制体验、MCP Token限制、内存泄漏) | 高 (插件生态、文档补充) | IDE 深度集成、企业级工作流、成本熔断 |
| **OpenAI Codex** | Rust v0.131.0-alpha.8 | 10+ (Windows Git风暴、多标签页、上下文丢失) | 极高 (UDS支持、权限重构、性能优化) | 跨平台稳定性、桌面端性能、结构化交互 |
| **Gemini CLI** | v0.43.0-preview.0 | 10+ (**隐形配额消耗**、Agent删代码、回退策略) | 高 (内存溢出修复、配额策略修复) | **成本控制危机**、长上下文性能、安全护栏 |
| **GitHub Copilot CLI** | v1.0.46 / v1.0.47-0 | 10+ (会话分支、Token过期、MCP连接僵死) | 低 (自动化工作流) | 会话管理灵活性、Agent 可控性、网络健壮性 |
| **Kimi Code CLI** | v1.43.0 | 10+ (模型思考机制争议、API兼容、内存泄漏) | 高 (资源管理、权限模式统一) | 模型行为控制、跨工具链互通、稳定性修复 |
| **OpenCode** | 无新版本 | 10+ (Opus 4.6 适配、子代理权限、SSE 连接) | 高 (测试基建迁移、移动端优化) | 多代理权限模型、新模型快速适配、性能抗噪 |
| **Qwen Code** | v0.15.11 | 10+ (任务自动停止 P1、守护进程架构、原子写入) | 极高 (Daemon 模式、Git Worktree、原子操作) | 架构服务化、文件操作安全、任务持续性 |

## 3. 共同关注的功能方向

*   **成本控制与透明度**
    *   **涉及工具**: Gemini CLI, Claude Code, Kimi Code。
    *   **具体诉求**: Gemini CLI 爆发的 "隐形配额消耗" (Issue #26860) 引发信任危机；Claude Code 用户呼吁 `/goal` 命令增加熔断机制 (Issue #58550)；Kimi Code 优化 429 错误提示。社区强烈要求工具具备精确的 Token 计量、后台静默消耗的阻断能力以及明确的降级策略。

*   **会话持久化与多任务管理**
    *   **涉及工具**: GitHub Copilot CLI, OpenAI Codex, Qwen Code。
    *   **具体诉求**: 开发者不再满足于线性对话。Copilot 用户请求 "会话分支" 以处理支线任务 (Issue #2058)；Codex 呼吁多标签页支持 (Issue #12098)；Qwen Code 正在实现 `Daemon` 守护进程模式 (PR #3889) 和 `/goal` 驱动的长任务，标志着 CLI 正向 "后台服务" 进化。

*   **资源管理与稳定性**
    *   **涉及工具**: OpenAI Codex, Claude Code, Gemini CLI, Kimi Code, Qwen Code。
    *   **具体诉求**: 内存泄漏和 CPU 飙升问题普遍存在。Codex 在 Windows 上引发 Git 进程风暴 (Issue #20933)；Claude Code 报告 738GB/h 的极端内存泄漏 (Issue #58272)；Gemini CLI 处理大目录时堆溢出。这表明当前的 Agent 运行时在资源回收和调度上普遍存在短板。

*   **MCP 生态的健壮性**
    *   **涉及工具**: Claude Code, GitHub Copilot CLI, OpenCode, Qwen Code。
    *   **具体诉求**: 随着工具链扩展，MCP 带来了稳定性挑战。Claude Code 遇到 MCP Token 超限 (Issue #37793)；Copilot 出现 HTTP 连接池僵死 (Issue #3257)；Qwen Code 优化了 MCP 启动阻塞。MCP 正从 "能用" 向 "稳定、非阻塞、低开销" 阶段过渡。

## 4. 差异化定位分析

*   **Claude Code**: **企业级 IDE 深度集成者**。依托 Anthropic 模型优势，重点打通 VS Code 工作流，强调 MCP 插件的丰富性（如 NeonPanel），适合追求极致 IDE 体验和复杂工作流编排的团队。
*   **OpenAI Codex**: **跨平台桌面应用探索者**。致力于提供统一的桌面端体验，注重底层协议优化（如 UDS、Sandbox 权限），但在 Windows 平台面临严峻的资源管理挑战，适合需要图形化界面的多模型用户。
*   **Gemini CLI**: **性价比与长上下文的激进派**。主打 Flash/Pro 模型的成本优势，但近期暴露出的配额管控问题严重损害了用户信任。其快速迭代的修复机制显示出其试图挽回口碑的努力。
*   **GitHub Copilot CLI**: **Git 原生的开发者伴侣**。深度绑定 Git 工作流，核心痛点在于会话的连续性与分支管理，致力于解决 "无人值守编码" 中的断点恢复问题，适合重度 GitHub 用户。
*   **Kimi Code CLI**: **模型可控性与兼容性挑战者**。在模型 "思考模式" 的控制粒度上探索（K2.5 vs K2.6），并提供 OpenAI 兼容接口以切入 Cursor 等生态，显示出其作为 "底层能力提供者" 的野心。
*   **OpenCode**: **极客向的多代理架构实验室**。关注权限系统的精细化设计（Commander-Worker 模式）和新模型（DeepSeek, Opus 4.6）的底层适配，适合需要自定义多代理协作的高级开发者。
*   **Qwen Code**: **架构演进的激进重构者**。率先推进 Daemon 守护进程模式，引入原子文件写入和 Git Worktree 隔离，强调数据安全与任务持久化，在架构层面领先于其他 CLI 工具。

## 5. 社区热度与成熟度

*   **活跃度最高**: **OpenAI Codex** 和 **Qwen Code**。Codex 拥有大量的 PR 提交（重构权限、优化底层协议），显示出团队正在快速修补桌面端缺陷。Qwen Code 的 PR 涵盖了架构级更新（Daemon 模式、原子写入），显示出强劲的演进动力。
*   **争议最大**: **Gemini CLI**。关于隐形消耗和删库的 Issues 引发了 P1 级别的信任危机，社区情绪紧张，但这反过来促进了大量的修复 PR 提交。
*   **成熟稳健**: **Claude Code** 和 **GitHub Copilot CLI**。讨论焦点已从基础功能转向体验优化（如复制粘贴、会话分支），表明产品已度过早期粗糙期，进入精细化打磨阶段。
*   **快速迭代**: **Kimi Code** 和 **OpenCode**。专注于特定模型特性的适配（如思考模式、Prefill）和内存/连接池等基础性能修复，处于功能扩展与稳定性并重的爬坡期。

## 6. 值得关注的趋势信号

1.  **CLI 向 "Agent Runtime" 演进**: Qwen Code 提出的 Daemon 模式和 OpenCode 的权限隔离表明，CLI 不再仅仅是命令行工具，而是正在演变为常驻后台的 **Agent 运行时环境**，具备独立的生命周期管理、文件系统隔离和权限边界。
2.  **"成本恐慌" 推动管控需求**: Gemini CLI 的隐形扣费和 Claude Code 的无限循环烧 Token 事件表明，**成本不可控** 是 AI Agent 落地的最大阻碍。未来版本中，"熔断机制"、"分级预算" 和 "实时账单看板" 将成为标配。
3.  **原子操作与数据安全觉醒**: 开发者对 Agent 修改文件的安全性容忍度正在降低。Qwen Code 的原子写入 PR 和 Claude Code 对静默截断的反馈表明，**操作的可预测性和可回滚性**（如 `/rewind` 支持文件恢复）将成为核心竞争壁垒。
4.  **模型能力的 "双刃剑" 效应**: Kimi Code 和 OpenCode 的反馈显示，模型的 "思考" 能力并不总是正向收益，在特定编码场景下会增加延迟和幻觉。**模型行为的精细控制**（如开关思考模式、限制上下文窗口）将成为工具层的关键职责。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告 (2026-05-13)

基于 `anthropics/skills` 官方仓库的最新数据，以下是社区动态分析：

## 1. 热门 Skills 排行 (PRs)

尽管部分 PR 评论数据显示异常，但根据排序权重与功能重要性，以下 Skills 处于社区关注焦点：

1.  **[文档排版质量控制] `document-typography` Skill**
    *   **链接**: [PR #514](https://github.com/anthropics/skills/pull/514)
    *   **功能**: 解决 AI 生成文档中的典型排版问题（如孤行、寡行、编号错位），提升文档专业度。
    *   **状态**: `[OPEN]`
    *   **热度分析**: 该 PR 列表排序第一，直击 AI 生成内容“可用但难看”的痛点，是目前社区最期待的功能改进之一。

2.  **[前端设计优化] `frontend-design` Skill 改进**
    *   **链接**: [PR #210](https://github.com/anthropics/skills/pull/210)
    *   **功能**: 重构前端设计技能，增强指令的可执行性与清晰度，确保 Claude 能在单次对话中精准落地设计需求。
    *   **状态**: `[OPEN]`

3.  **[元技能分析] `skill-quality-analyzer` & `skill-security-analyzer`**
    *   **链接**: [PR #83](https://github.com/anthropics/skills/pull/83)
    *   **功能**: 引入“技能质检”与“安全分析”两大元技能，用于评估 Skills 的结构质量与安全性。
    *   **状态**: `[OPEN]`
    *   **热度分析**: 标志着社区开始关注 Skills 本身的安全性与标准化构建。

4.  **[全栈部署] `AppDeploy` Skill**
    *   **链接**: [PR #360](https://github.com/anthropics/skills/pull/360)
    *   **功能**: 允许 Claude 直接将全栈 Web 应用部署到公网 URL，打通“代码生成到上线”的最后一公里。
    *   **状态**: `[OPEN]`

5.  **[测试模式] `testing-patterns` Skill**
    *   **链接**: [PR #723](https://github.com/anthropics/skills/pull/723)
    *   **功能**: 提供全栈测试方法论（Testing Trophy 模型、单元测试、React 组件测试等），规范 AI 编写测试的逻辑。
    *   **状态**: `[OPEN]`

6.  **[文档格式支持] `ODT` Skill (OpenDocument)**
    *   **链接**: [PR #486](https://github.com/anthropics/skills/pull/486)
    *   **功能**: 补充对 `.odt` 等开源文档格式的支持，包括创建、填充与 HTML 转换。
    *   **状态**: `[OPEN]`

7.  **[系统自动化] `sensory` Skill (macOS AppleScript)**
    *   **链接**: [PR #806](https://github.com/anthropics/skills/pull/806)
    *   **功能**: 摒弃截图识别，通过 AppleScript 直接操控 macOS 系统级功能，分为不同权限层级。
    *   **状态**: `[OPEN]`

8.  **[企业级预测] `SAP-RPT-1-OSS` Predictor**
    *   **链接**: [PR #181](https://github.com/anthropics/skills/pull/181)
    *   **功能**: 结合 SAP 开源表格基础模型，为 SAP 业务数据提供预测分析能力。
    *   **状态**: `[OPEN]`

---

## 2. 社区需求趋势

从高热度 Issues 中提炼出以下核心诉求：

1.  **企业级协作与分享机制 (Top 1 需求)**
    *   **来源**: [Issue #228](https://github.com/anthropics/skills/issues/228) (11 评论)
    *   **痛点**: 目前 Skills 仅支持个人上传，企业内部无法高效共享。
    *   **诉求**: 建立组织级 Skills 库或一键分享链接，取代目前“下载文件 -> IM传输 -> 手动上传”的低效流程。

2.  **安全信任边界与命名空间规范**
    *   **来源**: [Issue #492](https://github.com/anthropics/skills/issues/492) (6 评论)
    *   **痛点**: 社区 Skills 默认挂在 `anthropic/` 命名空间下，导致用户误以为官方背书，存在权限滥用风险。
    *   **诉求**: 明确区分官方与社区 Skills 的身份标识，建立信任边界。

3.  **开发者工具链与调试支持**
    *   **来源**: [Issue #556](https://github.com/anthropics/skills/issues/556), [Issue #202](https://github.com/anthropics/skills/issues/202)
    *   **痛点**: `skill-creator` 指导性差，`run_eval.py` 存在触发失败 Bug，企业用户缺少 API Key 支持。
    *   **诉求**: 提供更健壮的 Skills 创建、调试与评估工具链。

4.  **MCP 协议与跨平台集成**
    *   **来源**: [Issue #16](https://github.com/anthropics/skills/issues/16), [Issue #29](https://github.com/anthropics/skills/issues/29)
    *   **诉求**: 将 Skills 暴露为 MCP (Model Context Protocol) 接口，并支持 AWS Bedrock 等非 Claude.ai 平台。

---

## 3. 高潜力待合并 Skills

以下 PR 针对现有系统的关键缺陷进行了修复，具有较高的合并优先级：

1.  **PDF 文件引用修复 (PR #538)**
    *   **链接**: [PR #538](https://github.com/anthropics/skills/pull/538)
    *   **价值**: 修复了 PDF Skill 中文件名大小写敏感问题，解决了在 Linux/Unix 环境下的崩溃 Bug，属于关键性修复。

2.  **DOCX 书签冲突修复 (PR #541)**
    *   **链接**: [PR #541](https://github.com/anthropics/skills/pull/541)
    *   **价值**: 修复了在包含书签的文档中添加修订时的 `w:id` 冲突导致的文档损坏问题。

3.  **YAML 解析校验增强 (PR #539)**
    *   **链接**: [PR #539](https://github.com/anthropics/skills/pull/539)
    *   **价值**: 在 `skill-creator` 中增加预校验，防止 YAML 描述符中的特殊字符导致静默解析失败。

4.  **贡献指南补充 (PR #509)**
    *   **链接**: [PR #509](https://github.com/anthropics/skills/pull/509)
    *   **价值**: 添加 `CONTRIBUTING.md`，补齐社区健康度短板，虽然非功能性，但对开源治理至关重要。

---

## 4. Skills 生态洞察

**当前社区最集中的诉求是：从“个人尝鲜”迈向“团队协作与企业级安全治理”。**

社区不再仅仅满足于单一功能的 Skill 实现，而是迫切需要组织级分发能力、官方/社区技能的隔离信任机制，以及更稳定的文档处理底层能力。

---

# Claude Code 社区动态日报 (2026-05-13)

## 1. 今日速览
Claude Code 今日发布了 **v2.1.140** 版本，主要优化了 Agent 工具的匹配逻辑并修复了 `/goal` 命令的挂起问题。社区热点集中在终端复制粘贴体验、macOS 网络连接稳定性以及 MCP 子代理的 Token 限制问题上。此外，关于 VS Code 扩展的实时输出流和成本消耗异常的反馈也引发了较多讨论。

## 2. 版本发布
**v2.1.140**
- **Agent 工具优化**：改进了 `subagent_type` 的匹配机制，现支持不区分大小写和分隔符的值（例如输入 `"Code Reviewer"` 可自动解析为 `code-reviewer`）。
- **界面更新**：更新了 Agent 的调色板配色。
- **Bug 修复**：修复了当设置 `disableAllHooks` 或 `allowManagedHooksOnly` 时，`/goal` 命令会静默挂起的问题，现在会正常显示反馈。

🔗 [查看 Release 详情](https://github.com/anthropics/claude-code/releases/tag/v2.1.140)

---

## 3. 社区热点 Issues (Top 10)

1.  **[体验痛点] 终端复制文本包含多余的缩进和尾随空格** (#18170)
    - **热度**：👍 236 | 💬 108
    - **简述**：用户反馈从 Claude Code 终端复制代码块或段落时，会自动带上对齐提示符的缩进和末尾空格，影响代码粘贴使用体验。
    - 🔗 [Issue #18170](https://github.com/anthropics/claude-code/issues/18170)

2.  **[网络故障] macOS 持续出现 ECONNRESET 网络连接错误** (#5674)
    - **热度**：👍 25 | 💬 34
    - **简述**：macOS 用户长期受 ECONNRESET 错误困扰，导致任务中断。用户反馈同一网络下的 Windows 和 Linux 设备无此问题，疑似 macOS 特有的网络堆栈问题。
    - 🔗 [Issue #5674](https://github.com/anthropics/claude-code/issues/5674)

3.  **[功能请求] VS Code 扩展实时流式输出 Bash 命令** (#14280)
    - **热度**：👍 39 | 💬 15
    - **简述**：开发者希望在 VS Code 扩展中实时显示 Bash 命令的输出，而不是等待命令结束后才显示，以便更好地监控长时间运行的任务。
    - 🔗 [Issue #14280](https://github.com/anthropics/claude-code/issues/14280)

4.  **[架构限制] MCP 服务器过多导致子代理 Token 超限失败** (#37793)
    - **热度**：👍 18 | 💬 15
    - **简述**：配置了大量 MCP 服务器的用户发现，子代理（如 Explore、Plan）在启动时因工具定义超出 200k Token 限制而直接失败，无法执行任何工具调用。
    - 🔗 [Issue #37793](https://github.com/anthropics/claude-code/issues/37793)

5.  **[数据安全] Cowork 工具静默截断文件内容** (#53940)
    - **热度**：👍 3 | 💬 8
    - **简述**：Cowork Edit/Write 工具在处理文件时存在“字节节省缓冲区上限”，导致文件被静默截断，可能导致数据丢失或代码损坏，且无任何错误提示。
    - 🔗 [Issue #53940](https://github.com/anthropics/claude-code/issues/53940)

6.  **[回归问题] Chat 上下文的自定义快捷键被忽略** (#50020)
    - **热度**：👍 2 | 💬 8
    - **简述**：自 v2.1.105 起出现回归，用户在 `keybindings.json` 中为 Chat 上下文定义的快捷键被静默忽略，影响自定义工作流。
    - 🔗 [Issue #50020](https://github.com/anthropics/claude-code/issues/50020)

7.  **[严重性能] macOS 出现严重内存泄漏 (~738 GB/h)** (#58272)
    - **热度**：👍 1 | 💬 3
    - **简述**：一位用户报告 CLI 在 macOS 上出现极高速率的内存泄漏（每小时数百 GB），导致 CLI 完全无响应。虽是个案，但问题性质严重。
    - 🔗 [Issue #58272](https://github.com/anthropics/claude-code/issues/58272)

8.  **[成本控制] /goal 评估器缺乏熔断机制导致无限烧 Token** (#58550)
    - **热度**：👍 0 | 💬 2
    - **简述**：如果 `/goal` 的条件无法满足，评估器会在每次助手回复后无限循环运行，直到用户手动清除，可能导致大量不必要的 Token 消耗。
    - 🔗 [Issue #58550](https://github.com/anthropics/claude-code/issues/58550)

9.  **[UI 缺陷] VS Code 模型选择器默认值不符** (#35789)
    - **热度**：👍 2 | 💬 5
    - **简述**：VS Code 扩展的模型选择器显示推荐 "Opus 4.6"，但实际状态栏却显示设置为 `claude-sonnet-4-6`，存在 UI 与实际行为不一致的问题。
    - 🔗 [Issue #35789](https://github.com/anthropics/claude-code/issues/35789)

10. **[认证问题] OAuth 登录陷入“创建账户”死循环** (#58566)
    - **热度**：👍 0 | 💬 3
    - **简述**：部分 Max 订阅用户在 OAuth 登录时被重定向到新用户引导页，导致账户被锁死无法登录桌面端。
    - 🔗 [Issue #58566](https://github.com/anthropics/claude-code/issues/58566)

---

## 4. 重要 PR 进展

1.  **feat: Add developer-utilities plugin** (#11713)
    - **内容**：新增 `developer-utilities` 插件，提供 5 个社区急需但原生未支持的命令，补充了实用开发工具。
    - 🔗 [PR #11713](https://github.com/anthropics/claude-code/pull/11713)

2.  **Add `neonpanel` plugin v1.0.0** (#58126)
    - **内容**：集成 NeonPanel 插件，为 Amazon 卖家提供包含供应链、营销、财务等 8 个领域代理的 AI 工作力，展示了 MCP 在垂直领域的深度应用。
    - 🔗 [PR #58126](https://github.com/anthropics/claude-code/pull/58126)

3.  **docs: add PostToolUse continueOnBlock option** (#58323)
    - **内容**：文档更新，补充了 PostToolUse 钩子中 `continueOnBlock` 选项的说明，该功能允许在被拦截时将原因反馈给 Claude 并继续当前轮次。
    - 🔗 [PR #58323](https://github.com/anthropics/claude-code/pull/58323)

4.  **docs: add CLAUDE_PROJECT_DIR environment variable** (#58314)
    - **内容**：文档更新，补充了 MCP stdio 服务器接收 `CLAUDE_PROJECT_DIR` 环境变量的说明，帮助开发者更好地进行环境感知。
    - 🔗 [PR #58314](https://github.com/anthropics/claude-code/pull/58314)

---

## 5. 功能需求趋势

- **IDE 深度集成**：社区对 VS Code 扩展的期待已超越基础聊天，转向实时流式输出 (#14280)、模型选择一致性 (#35789) 以及远程控制启动配置 (#56778)。
- **MCP 扩展性与限制**：随着用户配置的 MCP 服务器增多，Token 限制成为瓶颈 (#37793)，社区迫切需要针对大型工具集的优化方案或分页加载机制。
- **企业级工作流支持**：出现了关联源码仓库作为组织技能来源的需求 (#28729)，表明企业用户希望将 Claude Code 纳入内部 DevOps 流程。

## 6. 开发者关注点

- **成本计量准确性**：多个 Issue (#58557, #41346, #58550) 反映了 Token 消耗统计异常或不可控的问题。开发者对成本极其敏感，特别是在扩展思考和目标评估等后台功能上，呼吁增加熔断机制和透明日志。
- **平台特异性稳定性**：macOS 平台的 ECONNRESET (#5674) 和内存泄漏 (#58272) 问题突出，Windows 平台则面临安装崩溃 (#57159) 和 Cowork 功能异常。跨平台稳定性是目前的主要痛点。
- **数据安全与静默错误**：Cowork 工具静默截断文件 (#53940) 和删除未提交代码 (#46444) 的问题引发了开发者对自动化操作安全性的担忧，呼吁增加更明显的错误提示或保护机制。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-05-13)

## 1. 今日速览
今日 OpenAI Codex 发布了 Rust 客户端 v0.131.0-alpha.8 版本。社区讨论焦点集中在桌面端性能优化与 UI 交互细节上，Windows 平台因 Git 进程资源占用过高引发大量反馈，macOS 用户则关注文件树交互与沙箱权限问题。开发团队正积极重构权限系统并优化底层连接协议（如 UDS 支持），以提升稳定性。

## 2. 版本发布
- **rust-v0.131.0-alpha.8**
  - 发布了最新的 Alpha 版本，主要为 Rust 客户端的迭代更新。
  - [查看 Release 详情](https://github.com/openai/codex/releases/tag/rust-v0.131.0-alpha.8)

## 3. 社区热点 Issues (Top 10)

1.  **[macOS] 文件树切换功能不可靠**
    - **链接**: [Issue #20552](https://github.com/openai/codex/issues/20552)
    - **详情**: macOS 桌面端 `View > Toggle File Tree` 功能启用后无法稳定显示文件树，影响用户操作流畅度。社区反馈该问题在最新版本中依然存在。

2.  **[功能提案] 交互式结构化问答工具 (`ask_user_question`)**
    - **链接**: [Issue #9926](https://github.com/openai/codex/issues/9926)
    - **详情**: 建议引入 `ask_user_question` 工具，允许 Agent 以结构化问卷形式向用户提问，减少反复对话的歧义。该提案获得 24 个点赞，显示出社区对提升交互效率的强烈需求。

3.  **[功能提案] 扩展/VS Code 多标签页会话支持**
    - **链接**: [Issue #12098](https://github.com/openai/codex/issues/12098)
    - **详情**: 用户希望在 VS Code/Cursor 扩展中支持多标签页并行聊天会话，以减少切换成本。这是社区呼声极高的用户体验改进（26 个点赞）。

4.  **[核心错误] Context compact 错误导致上下文丢失**
    - **链接**: [Issue #21343](https://github.com/openai/codex/issues/21343)
    - **详情**: Pro 用户报告在进行上下文压缩时频繁报错，严重影响长任务的连贯性。这是一个阻塞性问题，需引起重视。

5.  **[Windows] 桌面端引发 Git 进程风暴导致 CPU 飙升**
    - **链接**: [Issue #20933](https://github.com/openai/codex/issues/20933)
    - **详情**: 在 Windows 上打开项目时，Codex 会触发多个 `git.exe add -A` 进程并行执行，导致严重的磁盘 I/O 和 CPU 占用，甚至致使用户机器卡顿。

6.  **[macOS] 自定义 Prompts 不再显示**
    - **链接**: [Issue #14459](https://github.com/openai/codex/issues/14459)
    - **详情**: macOS 客户端更新后无法读取 `~/.codex/prompts` 目录下的自定义提示词，导致高级用户的工作流中断。

7.  **[数据持久化] 桌面端“静默”隐藏历史对话**
    - **链接**: [Issue #21128](https://github.com/openai/codex/issues/21128)
    - **详情**: 桌面端仅保留全局最近 50 条对话，导致旧项目的对话记录从 UI 中消失，被批评为“不可靠的工作记忆”。

8.  **[支付问题] Stripe 结算页面无法打开**
    - **链接**: [Issue #22238](https://github.com/openai/codex/issues/22238)
    - **详情**: 用户在尝试购买额度时，Stripe 支付页面报错无法加载，直接影响商业化转化。

9.  **[模型错误] GPT-5.2 模型 404 导致连接循环**
    - **链接**: [Issue #22368](https://github.com/openai/codex/issues/22368)
    - **详情**: CLI 端调用 `gpt-5.2` 模型时返回 404 Not Found，导致 WebSocket 不断回退并重连。

10. **[UI 交互] 禁用鼠标悬停自动弹出右侧边栏**
    - **链接**: [Issue #22168](https://github.com/openai/codex/issues/22168)
    - **详情**: 用户抱怨鼠标移至窗口右侧时侧边栏意外弹出，干扰文本选择和复制操作，建议增加禁用选项。

## 4. 重要 PR 进展 (Top 10)

1.  **支持 Unix Domain Sockets (UDS) 连接**
    - **链接**: [PR #22414](https://github.com/openai/codex/pull/22414)
    - **内容**: 为 `codex --remote` 模式引入 UDS 支持，TUI 现在优先通过 UDS 连接本地 app-server，有望提升本地通信效率与稳定性。

2.  **修复 Windows 插件安装可靠性**
    - **链接**: [PR #21013](https://github.com/openai/codex/pull/21013)
    - **内容**: 针对 Windows 平台插件升级时可能出现的冲突，改进了缓存目录结构，将版本化安装并列存放，避免替换正在运行的插件目录。

3.  **修复 macOS 沙箱权限限制文档渲染**
    - **链接**: [PR #22416](https://github.com/openai/codex/pull/22416)
    - **内容**: 修复了 macOS Seatbelt 策略生成问题，解决了 LibreOffice 等无头文档渲染工具无法初始化 AppKit 的问题。

4.  **引入严格配置解析模式**
    - **链接**: [PR #20559](https://github.com/openai/codex/pull/20559)
    - **内容**: 新增可选的严格模式解析 `config.toml`，帮助用户检测拼写错误或无效配置项，提升配置排查体验。

5.  **缓存远程插件市场数据**
    - **链接**: [PR #21830](https://github.com/openai/codex/pull/21830)
    - **内容**: 在启动时缓存远程市场列表，优化 `plugin/list` 请求性能，减少重复拉取，加快应用启动速度。

6.  **重构权限系统：工作区 Roots 迁移至线程状态**
    - **链接**: [PR #22401](https://github.com/openai/codex/pull/22401)
    - **内容**: 重构权限管理架构，将工作区根目录纳入线程状态管理，为权限配置文件的动态切换打下基础。

7.  **优化 ChatWidget 输入流模块化**
    - **链接**: [PR #22407](https://github.com/openai/codex/pull/22407)
    - **内容**: 将 `chatwidget.rs` 中庞大的输入处理逻辑拆分为独立模块，提升代码可维护性。

8.  **MCP 启动状态线程隔离**
    - **链接**: [PR #21624](https://github.com/openai/codex/pull/21624)
    - **内容**: 解决了 `/review` UI 更新阻塞问题，使 MCP 启动状态线程独立，避免全局状态共享带来的生命周期冲突。

9.  **优化 Git Worktrees 钩子加载逻辑**
    - **链接**: [PR #21969](https://github.com/openai/codex/pull/21969)
    - **内容**: 修复了链接 Worktree 加载钩子声明不一致的问题，确保仓库在不同检出目录下行为一致。

10. **工具命名空间描述自动推断**
    - **链接**: [PR #22406](https://github.com/openai/codex/pull/22406)
    - **内容**: 优化 Code Mode 工具元数据生成逻辑，直接从 ToolSpecs 推断命名空间描述，减少冗余代码。

## 5. 功能需求趋势

-   **多任务并行体验**: 开发者强烈呼吁 IDE 扩展和桌面端支持**多标签页** 或并行会话，以应对复杂开发场景。
-   **交互结构化**: 对于 Agent 交互，社区倾向于**结构化问卷** (`ask_user_question`) 而非无限的自由对话，以提高信息收集效率。
-   **跨平台性能一致性**: Windows 平台的资源占用和进程管理问题成为近期投诉重灾区，迫切需要优化 Git 操作和后台进程调度。

## 6. 开发者关注点

-   **Windows 平台稳定性**: 多个 Issue (#20933, #22085) 指出 Codex 在 Windows 上触发大量 Git 进程导致 CPU 飙升，开发者对后台自动化行为缺乏控制感（如无法关闭自动 `git add`）。
-   **上下文与历史管理**: "Context compact error" 和历史对话被静默隐藏 (#21128) 引发了开发者对**工作记忆可靠性**的担忧，认为这破坏了 AI 辅助编程的连续性。
-   **UI 细节干扰**: 悬停触发侧边栏、文件树切换失效等 UI 问题虽然不致命，但高频出现严重干扰了开发者的心流体验。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-05-13)

## 1. 今日速览
今日 Gemini CLI 发布了 **v0.43.0-preview.0**，重点优化了模型编辑工具的精准度和自动记忆功能的文档说明。然而，社区焦点集中在严重的**隐形配额消耗**问题上，多名用户报告 CLI 在后台自动消耗大量 API 配额，引发了对成本控制的强烈担忧。此外，模型回退逻辑缺陷导致的资源浪费和内存泄漏问题也成为了热议话题。

## 2. 版本发布
### v0.43.0-preview.0
*   **功能优化**：引导模型使用 Edit Tool 进行更精准的“手术式”编辑，减少不必要的文件改动。
*   **文档更新**：澄清了 Auto Memory（自动记忆）关于记忆更新和技能提案的机制。
*   **链接**：[Release v0.43.0-preview.0](https://github.com/google-gemini/gemini-cli/pull/26480)

### v0.42.0
*   **修复**：修复了自动更新机制错误地将用户切换到不稳定频道的问题。
*   **链接**：[Release v0.42.0](https://github.com/google-gemini/gemini-cli/pull/26132)

## 3. 社区热点 Issues (Top 10)

1.  **[严重 Bug] 配额在无操作情况下被自动消耗**
    *   **编号**：[#26860](https://github.com/google-gemini/gemini-cli/Issue/26860)
    *   **摘要**：用户报告在未发送任何请求的情况下，账户配额从 15% 自动激增至 28%。社区反应强烈，认为这是严重的成本失控问题。
    *   **重要性**：P1 级别故障，直接影响用户资金和信任度。

2.  **[严重 Bug] 配额自动异常增加**
    *   **编号**：[#26837](https://github.com/google-gemini/gemini-cli/Issue/26837)
    *   **摘要**：与上述问题类似，用户通过 `/resume` 恢复会话后配额异常增加。这表明 CLI 的后台进程或会话恢复机制存在严重漏洞。

3.  **[功能缺失] 默认回退策略缺少 gemini-2.5-flash-lite**
    *   **编号**：[#26841](https://github.com/google-gemini/gemini-cli/Issue/26841)
    *   **摘要**：当 Pro 和 Flash 配额耗尽时，CLI 直接报错，未回退至仍有大量配额的 Flash-Lite 模型，导致资源浪费。
    *   **社区反应**：已被开发者确认并提交 PR 修复。

4.  **[安全隐患] Agent 自动执行脚本导致源代码永久丢失**
    *   **编号**：[#26767](https://github.com/google-gemini/gemini-cli/Issue/26767)
    *   **摘要**：Agent 在执行自动化任务时逻辑出错，删除了核心源代码。
    *   **重要性**：P1 级别，涉及 AI Agent 的操作安全性，引发了关于“人类监督”必要性的讨论。

5.  **[体验问题] 简单命令耗时过长**
    *   **编号**：[#26919](https://github.com/google-gemini/gemini-cli/Issue/26919)
    *   **摘要**：简单的 MD 文件更新和提交操作耗时超过 7 分钟，用户怀疑与上下文膨胀有关。反映了 CLI 在长会话中的性能瓶颈。

6.  **[成本控制] `--model` 参数固定失效，隐形消耗 Pro 配额**
    *   **编号**：[#26938](https://github.com/google-gemini/gemini-cli/Issue/26938)
    *   **摘要**：用户指定使用特定模型（如 Lite），CLI 却在后台通过硬编码或回退机制静默消耗高成本模型（如 Pro）的配额。
    *   **重要性**：直接违背了用户的成本控制意图。

7.  **[内存泄漏] 内存占用高达 7.46GB 且模型配置不匹配**
    *   **编号**：[#26750](https://github.com/google-gemini/gemini-cli/Issue/26750)
    *   **摘要**：运行 Python 脚本时触发 7.46GB 内存警告，且配置的 1.5-flash 模型未生效，实际运行的是 3.1-lite。涉及资源管理和配置读取的双重 Bug。

8.  **[兼容性] Windows 下 URI 链接解析失败**
    *   **编号**：[#26902](https://github.com/google-gemini/gemini-cli/Issue/26902)
    *   **摘要**：点击包含行号和列号的文件链接（如 `file:line:column`）时，Windows 平台解析失败导致编辑器报错。

9.  **[容量问题] 429 容量错误缺乏有效重路由**
    *   **编号**：[#26862](https://github.com/google-gemini/gemini-cli/Issue/26862)
    *   **摘要**：遇到 429 错误时，CLI 反复重试同一已满负荷模型，而不是智能切换到其他可用模型，导致任务卡死。

10. **[权限问题] 无法退出数据收集计划**
    *   **编号**：[#26839](https://github.com/google-gemini/gemini-cli/Issue/26839)
    *   **摘要**：用户在隐私设置中选择“No”试图退出数据收集时，操作无响应且报错“无权限”。

## 4. 重要 PR 进展 (Top 10)

1.  **[核心修复] 解决大型目录导致的 JavaScript 堆内存溢出**
    *   **编号**：[#26657](https://github.com/google-gemini/gemini-cli/PR/26657)
    *   **内容**：使用流式 `fs.opendir` 替代同步文件系统操作，解决处理大型目录时 CLI 崩溃的问题。

2.  **[核心修复] 修复 Vertex AI 请求因参数命名风格报错**
    *   **编号**：[#26652](https://github.com/google-gemini/gemini-cli/PR/26652)
    *   **内容**：将 `thoughtSignature` 改为 `thought_signature` 以适配 Vertex AI 的 snake_case 要求，修复 400 错误。

3.  **[核心修复] 将 gemini-2.5-flash-lite 加入默认回退链**
    *   **编号**：[#26914](https://github.com/google-gemini/gemini-cli/PR/26914) / [#26845](https://github.com/google-gemini/gemini-cli/PR/26845)
    *   **内容**：修复默认模型回退策略，确保在 Pro 和 Flash 配额耗尽时自动切换到 Flash-Lite，避免服务中断。

4.  **[核心修复] 修复遥测缓冲区在禁用状态下无限增长**
    *   **编号**：[#26404](https://github.com/google-gemini/gemini-cli/PR/26404)
    *   **内容**：当遥测功能被禁用时，停止缓冲事件，防止内存无限占用（特别是发生 API 错误时的大对象缓冲）。

5.  **[会话恢复] 修复跨会话的快照持久化问题**
    *   **编号**：[#26939](https://github.com/google-gemini/gemini-cli/PR/26939)
    *   **内容**：确保会话快照在重启后依然有效，关联 Issue #26927。

6.  **[体验优化] 用户干预确认反馈**
    *   **编号**：[#26498](https://github.com/google-gemini/gemini-cli/PR/26498)
    *   **内容**：当用户在会话中提交干预提示时，增加即时确认反馈，解决之前“无反应”的焦虑感。

7.  **[安全修复] 清理 Keychain 错误信息中的敏感元数据**
    *   **编号**：[#23278](https://github.com/google-gemini/gemini-cli/PR/23278)
    *   **内容**：防止原生密钥链错误向用户泄露敏感的系统元数据。

8.  **[兼容性] 为 ripgrep 检测添加系统级回退机制**
    *   **编号**：[#26536](https:///google-gemini/gemini-cli/PR/26536)
    *   **内容**：解决特定安装环境下 CLI 无法找到内置 ripgrep 二进制文件而崩溃的问题，增加系统 PATH 查找回退。

9.  **[交互修复] 增加 F10 作为审批模式切换的备用快捷键**
    *   **编号**：[#26088](https://github.com/google-gemini/gemini-cli/PR/26088)
    *   **内容**：解决部分 Windows/WezTerm 终端环境下 Shift+Tab 无法识别的问题。

10. **[核心优化] 优化 System Prompt 以提升 Token 效率**
    *   **编号**：[#26129](https://github.com/google-gemini/gemini-cli/PR/26129)
    *   **内容**：重构系统提示词，使其更短、更聚焦且无矛盾，旨在降低 Token 消耗并提高指令遵循度。

## 5. 功能需求趋势

*   **成本可控性与透明度**：这是目前社区最核心的诉求。用户迫切需要 CLI 能够准确报告配额消耗、严格遵守用户指定的模型选择，以及避免后台静默消耗。
*   **智能化的资源降级策略**：用户希望 CLI 在遇到 429 错误或配额限制时，能更智能地自动切换到低成本模型（如 Flash-Lite），而不是直接报错或死循环重试。
*   **资源占用优化**：针对内存泄漏和高内存占用问题的反馈显著增加，尤其是长上下文会话场景下的稳定性。

## 6. 开发者关注点

*   **隐形“烧钱”恐慌**：多个 Issue 提及 CLI 在闲置或恢复会话时自动消耗配额，开发者对工具的信任度正在下降，要求增加“只读模式”或更严格的操作审批流。
*   **Agent 自主权边界**：Agent 自动删除代码或长时间运行高成本任务引发了关于“安全护栏”的讨论，开发者希望有更明确的权限控制（如禁止删除文件）。
*   **终端兼容性**：Windows 平台的文件链接解析、特定终端的快捷键映射等底层兼容性问题依然困扰部分用户。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-05-13)

## 1. 今日速览
GitHub Copilot CLI 今日发布了 **v1.0.46** 稳定版及 **v1.0.47-0** 预览版，重点优化了 Diff 视图交互体验并修复了 PowerShell 启动兼容性问题。社区热议集中在 Agent 会话管理上，用户强烈希望能实现会话分支功能以便在不打断主任务的情况下处理“支线任务”。此外，MCP（Model Context Protocol）连接稳定性和 Agent 模型调用的透明度成为开发者新的关注焦点。

## 2. 版本发布

### v1.0.47-0 (预览版)
*   **新增功能**：
    *   Diff 视图支持 `j/k` 键进行上下导航，提升键盘操作效率。
*   **体验改进**：
    *   `--resume` 功能得到增强，现已支持 Copilot cloud agent 尚未推送任何更改到分支的会话恢复。

### v1.0.46 (稳定版)
*   **版本生命周期管理**：当 CLI 版本过时可能导致高级模型访问受限时，增加警告提示。
*   **兼容性修复**：修复了当 `pwsh` 作为 .NET 全局工具 shim 安装时无法正确启动 PowerShell 的问题。
*   **显示优化**：Diff 视图中的长行现在会根据终端宽度自动换行，而非被截断。
*   **功能完善**：完善了只读模式的 `gh` CLI 命令支持（如 list, view 等）。

---

## 3. 社区热点 Issues (Top 10)

1.  **[功能建议] 会话分支功能以支持“支线任务”**
    *   **链接**: [#2058](https://github.com/github/copilot-cli/issues/2058)
    *   **热度**: 👍 7 | 💬 8
    *   **解读**: 这是社区最期待的功能之一。用户指出，在多步骤任务执行中，如果提问与主目标无关的“支线问题”，Copilot 会偏离主目标。用户希望能像 Git 分支一样“fork”出一个临时会话来处理支线问题，处理完后继续主任务，防止 Agent“跑偏”。

2.  **[配置问题] 自定义指令目录配置无效**
    *   **链接**: [#1433](https://github.com/github/copilot-cli/issues/1433)
    *   **热度**: 👍 6 | 💬 7
    *   **解读**: 长期存在的配置问题。用户反馈在 Linux 环境下，通过环境变量 `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` 指向 NFS 磁盘上的自定义指令文件无法生效，影响了大型项目中统一 Copilot 行为的配置能力。

3.  **[归属权争议] 请求移除自动添加的 Co-author**
    *   **链接**: [#3181](https://github.com/github/copilot-cli/issues/3181)
    *   **热度**: 👍 0 | 💬 4
    *   **解读**: 开发者就 AI 工具的归属权展开讨论。部分用户不希望提交记录中出现 Copilot 的 Co-author 信息，认为 AI 是工具而非合作者。该 Issue 已被关闭，但反映了社区对 AI 辅助编码身份认同的不同看法。

4.  **[稳定性] 会话令牌过期导致任务中断**
    *   **链接**: [#2818](https://github/copilot-cli/issues/2818)
    *   **热度**: 👍 5 | 💬 3
    *   **解读**: 在长时间运行 Autopilot 任务时，会话 Token 意外过期导致任务中止，严重破坏了“无人值守”编码的体验。用户呼吁增加自动刷新或更稳健的会话保持机制。

5.  **[Bug] GPT 模型会话频繁报 API 错误**
    *   **链接**: [#3242](https://github/copilot-cli/issues/3242)
    *   **热度**: 👍 0 | 💬 2
    *   **解读**: 过去一周，使用 GPT 模型进行 Plan 相关操作时频繁出现“Transient API error”。虽然修改代码文件正常，但规划功能受阻，影响了依赖 GPT 模型的用户工作流。

6.  **[Bug] /research 命令无法保存研究报告**
    *   **链接**: [#3123](https://github/copilot-cli/issues/3123)
    *   **热度**: 👍 1 | 💬 2
    *   **解读**: Agent 完成研究后，因“create”工具不可用导致无法将报告写入文件，导致 `/research` 功能实际上处于不可用状态。

7.  **[Bug] HTTP MCP 服务器连接池“僵死”问题**
    *   **链接**: [#3257](https://github/copilot-cli/issues/3257)
    *   **热度**: 👍 0 | 💬 1
    *   **解读**: 这是一个高质量的技术 Bug 报告。当 CLI 空闲一段时间后，底层的 TCP 连接被防火墙或 NAT 静默丢弃，导致复用连接时 `fetch failed`。这反映了 CLI 在网络连接保活和重试机制上的短板。

8.  **[行为争议] 后台 Agent 静默替换模型**
    *   **链接**: [#3266](https://github/copilot-cli/issues/3266)
    *   **热度**: 👍 0 | 💬 0
    *   **解读**: 用户发现后台 Agent 任务会静默替换用户指定的模型，且没有任何警告。这种“自作主张”的行为降低了开发者的控制感和信任度，用户希望模型替换能有明确提示。

9.  **[功能建议] 增加暂停/停止 Agent 的斜杠命令**
    *   **链接**: [#3265](https://github/copilot-cli/issues/3265)
    *   **热度**: 👍 0 | 💬 0
    *   **解读**: 随着 Agent 推理能力的增强，用户希望有更优雅的中断方式。目前强制取消会打断思考过程，用户建议增加 `/pause` 命令，让 Agent 在完成当前推理步骤后暂停，以便进行人工干预。

10. **[兼容性] Rocky Linux 8.10 启动失败**
    *   **链接**: [#3276](https://github/copilot-cli/issues/3276)
    *   **热度**: 👍 0 | 💬 0
    *   **解读**: 由于发行版自带的 GLIBC 版本过低，导致 CLI 中的原生模块无法加载。这表明 CLI 的二进制分发对旧版 Linux 内核的支持仍有待提升。

---

## 4. 重要 PR 进展

过去 24 小时内 PR 活动较少，仅更新了 1 条记录：

*   **[已关闭] 自动化 Issue 分类工作流**
    *   **链接**: [#2587](https://github.com/github/copilot-cli/pull/2587)
    *   **内容**: 该 PR 引入了 GitHub Agentic Workflows (`gh-aw`)，旨在利用 AI 自动为新开启或重新打开的 Issue 打上 `area:` 和 `triage` 标签。这有助于维护者更快地分流和管理社区反馈，虽然已关闭，但展示了项目维护自动化的方向。

---

## 5. 功能需求趋势

根据近期 Issues 分析，社区对以下功能方向表现出强烈兴趣：

1.  **会话管理与多任务处理**：用户不再满足于单一的线性对话，强烈呼吁支持**会话分支** 和 **挂起/恢复** 机制，以应对复杂的开发场景。
2.  **Agent 可控性与透明度**：开发者希望对 Agent 的行为有更强的掌控，包括明确模型是否被替换 (#3266)、更温和的中断方式 (#3265) 以及去除非必要的元数据注入 (#3181)。
3.  **MCP 生态稳定性**：随着 MCP (Model Context Protocol) 的使用增加，关于 MCP 服务器连接稳定性、鉴权流程和内容传递的反馈显著增多。

## 6. 开发者关注点

*   **痛点：网络连接的脆弱性**。多个 Issue (#3257, #3242, #2818) 指出在网络波动或空闲后，CLI 容易出现连接错误或 Token 过期，开发者希望 CLI 能具备更健壮的断线重连和状态恢复能力。
*   **痛点：跨平台兼容性**。从 PowerShell 的启动路径问题 (#3259) 到旧版 Linux 的 GLIBC 依赖缺失 (#3276)，环境适配问题依然是阻碍部分开发者升级的主要障碍。
*   **需求：更友好的错误提示**。无论是 Skills 加载失败 (#3263) 还是 Agent 内部错误，开发者普遍反映 CLI 的报错信息过于笼统，难以排查根因。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-05-13)

## 1. 今日速览
Kimi Code CLI 今日发布 **v1.43.0** 版本，重点优化了 UI 交互体验（Shell 间距、链接高亮）及遥测数据的生命周期追踪。社区方面，开发者对新版模型 K2.6 的“思考”机制在实际 Coding 场景中的表现提出质疑，引发关于模型创造力与幻觉的讨论；同时，关于内存泄漏和连接池复用的底层修复成为 PR 热点，显示项目正致力于提升稳定性。

## 2. 版本发布
**v1.43.0**
- **UI 优化**：改进了 Shell 间距、链接高亮显示及通知提示的持续时间，提升交互体验 ([PR #2230](https://github.com/MoonshotAI/kimi-cli/pull/2230))。
- **遥测增强**：重构了事件 Schema，增加了结果枚举、生命周期追踪和错误详情丰富化，有助于更好地分析用户行为与错误。

## 3. 社区热点 Issues
1.  **[OPEN] 模型体验争议：Kimi K2.5 vs K2.6** ([#1925](https://github.com/MoonshotAI/kimi-cli/issues/1925))
    *   **摘要**：用户反馈 K2.6 模型的“思考”过程削弱了创造性并增加了幻觉，失去了模型个性，请求切回 K2.5 模型。社区正在讨论如何平衡推理深度与 Coding 灵活性。
2.  **[OPEN] 请求支持 OpenAI 兼容 API** ([#2208](https://github.com/MoonshotAI/kimi-cli/issues/2208))
    *   **摘要**：用户希望 Kimi Code API 能提供 OpenAI-compatible 接口，以便在 Cursor 等 IDE 中直接调用 Kimi K2.6 模型。这反映了用户对跨工具链互通的强烈需求。
3.  **[OPEN] 功能请求：Shift+Enter 换行支持** ([#1585](https://github.com/MoonshotAI/kimi-cli/issues/1585))
    *   **摘要**：用户抱怨当前的 `Ctrl+J` 换行操作体验不佳（“稀烂的换行模式”），希望支持更通用的 `Shift+Enter` 快捷键，获得社区点赞支持。
4.  **[OPEN] v1.43.0 回归问题：MCP stderr 导致 TUI 崩溃** ([#2251](https://github.com/MoonshotAI/kimi-cli/issues/2251))
    *   **摘要**：升级至 1.43.0 后，MCP stdio server 的 stderr 输出导致 TUI 渲染异常。这是一个影响用户体验的关键 Bug。
5.  **[OPEN] 功能请求：支持类似 Codex 的 /goal 长任务** ([#2218](https://github.com/MoonshotAI/kimi-cli/issues/2218))
    *   **摘要**：开发者提议增加 `/goal` 命令以支持长任务的持续执行，提升 CLI 在复杂任务场景下的自主性。
6.  **[OPEN] Bug: VSCode OAI 兼容模式请求失败** ([#1947](https://github.com/MoonshotAI/kimi-cli/issues/1947))
    *   **摘要**：在 VSCode 中使用 OAI 兼容模式时出现请求失败，涉及特定 Request ID，表明兼容层可能存在稳定性问题。
7.  **[OPEN] Bug: Theme Mode 下 Diff 渲染错误** ([#2247](https://github.com/MoonshotAI/kimi-cli/issues/2247))
    *   **摘要**：用户报告在特定主题模式下代码 Diff 显示异常。
8.  **[CLOSED] 安全漏洞：Pillow CVE-2026-25990** ([#2153](https://github.com/MoonshotAI/kimi-cli/issues/2153))
    *   **摘要**：依赖库 Pillow 存在越界写入漏洞，导致部分安全环境无法安装。该问题已通过升级依赖解决。
9.  **[CLOSED] /clear 命令缺乏历史恢复入口** ([#2204](https://github.com/MoonshotAI/kimi-cli/issues/2204))
    *   **摘要**：用户指出 `/clear` 旋转了上下文文件但未提供恢复 GUI/CLI 入口，导致数据虽在磁盘但不可达的困惑。
10. **[CLOSED] MCP OAuth 启动警告** ([#2203](https://github.com/MoonshotAI/kimi-cli/issues/2203))
    *   **摘要**：配置 MCP 服务时启动打印 `AuthlibDeprecationWarning`，已通过升级 FastMCP 解决。

## 4. 重要 PR 进展
1.  **[OPEN] feat(shell): 统一审批模式与工具栏徽章** ([#2249](https://github.com/MoonshotAI/kimi-cli/pull/2249))
    *   旨在解决 `--yolo`, `--afk` 等四种审批模式的混乱现状，引入统一的工具栏徽章和临时 Toast 提示，优化权限控制体验。
2.  **[OPEN] fix(utils): 修复内存泄漏** ([#2236](https://github.com/MoonshotAI/kimi-cli/pull/2236))
    *   为 BroadcastQueue 设置边界并限制 Web Store 缓存，防止慢速消费者导致 OOM，显著提升长时间运行的稳定性。
3.  **[OPEN] fix(aiohttp): 复用 TCPConnector** ([#2231](https://github.com/MoonshotAI/kimi-cli/pull/2231))
    *   引入连接池复用机制，解决并行操作下文件描述符耗尽问题，减少 TCP 握手开销。
4.  **[OPEN] feat(shell): 增加 --prompt-interactive 选项** ([#2246](https://github.com/MoonshotAI/kimi-cli/pull/2246))
    *   允许通过参数传入初始 Prompt 并保持交互会话，便于脚本化启动 CLI。
5.  **[OPEN] fix: 优化 429 错误提示体验** ([#2245](https://github.com/MoonshotAI/kimi-cli/pull/2245))
    *   统一了各表面的错误提示格式，区分配额耗尽与临时限流，避免打印令人困惑的全量堆栈信息。
6.  **[CLOSED] feat(toolset): 工具调用去重** ([#2242](https://github.com/MoonshotAI/kimi-cli/pull/2242))
    *   在工具层引入去重逻辑，防止模型在同一步骤或跨步骤中重复执行相同的工具调用，节省 Token 和时间。
7.  **[CLOSED] fix(deps): 升级 Pillow 至 12.2.0** ([#2187](https://github.com/MoonshotAI/kimi-cli/pull/2187))
    *   修复了 CVE-2026-25990 安全漏洞，解决了严格安全环境下的安装受阻问题。
8.  **[CLOSED] feat(loop): 实现 /loop 循环调度器** ([#2248](https://github.com/MoonshotAI/kimi-cli/pull/2248))
    *   实现了基于 Cron 表达式的 `/loop` 命令，支持周期性任务调度，扩展了 CLI 的自动化能力。
9.  **[CLOSED] fix(mcp): 升级 FastMCP OAuth 存储** ([#2241](https://github.com/MoonshotAI/kimi-cli/pull/2241))
    *   解决了旧版 FastMCP 引发的 `AuthlibDeprecationWarning`，更新了 OAuth 处理逻辑。
10. **[CLOSED] ci: 构建 macOS x64 CLI 发布产物** ([#2243](https://github.com/MoonshotAI/kimi-cli/pull/2243))
    *   完善了 CI 流程，确保 macOS x64 架构的构建产物正常发布。

## 5. 功能需求趋势
- **模型可控性**：用户不再满足于“能用”，而是精细地要求控制模型的“思考”程度（如 K2.5 vs K2.6），倾向于在特定 Coding 任务中关闭 Chain-of-Thought 以减少干扰。
- **跨平台集成**：对 OpenAI-compatible API 的呼声极高，表明用户希望将 Kimi Code 作为底层能力接入 Cursor、Copilot 等其他流行 IDE 工具。
- **自动化与长任务**：`/goal` 和 `/loop` 的提议显示用户希望 CLI 能承担更复杂的自动化工作流，从单次问答向持续执行演进。

## 6. 开发者关注点
- **内存与资源管理**：近期多个 PR 聚焦于内存泄漏和连接泄漏修复，表明 CLI 在长时间运行或高并发工具调用场景下曾面临严峻的资源管理挑战。
- **快捷键与交互细节**：`Shift+Enter` 换行问题的持续讨论反映出开发者对高频操作细节的敏感度，基础交互体验仍是核心痛点。
- **安全性**：依赖库漏洞（如 Pillow CVE）被迅速修复并关闭 Issue，显示了团队对企业级安全合规的重视。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-05-13)

## 1. 今日速览
今日 OpenCode 社区聚焦于**模型兼容性**与**多代理权限机制**的深度讨论。Opus 4.6 预填充错误引发高频反馈，同时 GPT-5.5 上下文窗口配置偏差成为焦点。核心开发层面，项目正进行大规模的测试基础设施迁移（向 Effect Runner），并持续优化移动端触控与前端性能。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues

1.  **[OPEN] Opus 4.6 模型不支持 Assistant Message Prefill (#13768)**
    *   **关注点**：使用 Github Copilot 配合 Opus 4.6 时频繁中断，报错提示模型不支持预填充。
    *   **重要性**：这是当前评论数最高的问题，直接影响高级模型的核心对话体验，社区正在积极寻求解决方案。
    *   链接: [anomalyco/opencode Issue #13768](https://github.com/anomalyco/opencode/issues/13768)

2.  **[OPEN] SSE 事件流在连接后立即关闭 (#26697)**
    *   **关注点**：服务器端 `GET /event` 连接后立即断开，导致客户端无法接收实时消息。
    *   **重要性**：影响实时交互功能，属于核心架构层面的 Bug。
    *   链接: [anomalyco/opencode Issue #26697](https://github.com/anomalyco/opencode/issues/26697)

3.  **[CLOSED] 子代理权限继承过度限制显式权限委托 (#26700)**
    *   **关注点**：为了修复安全漏洞，新版本导致父代理的 Deny 规则被强制复制到子代理，覆盖了子代理本身的权限配置。
    *   **重要性**：严重影响了“指挥官-工作者”模式的灵活性，社区反馈强烈的权限逻辑回归问题。
    *   链接: [anomalyco/opencode Issue #26700](https://github.com/anomalyco/opencode/issues/26700)

4.  **[CLOSED] GPT-5.5 上下文窗口计算错误（约 27.2万 而非 100万）(#27199)**
    *   **关注点**：用户指出 GPT-5.5 的上下文窗口配置长期偏低，严重影响模型长文本能力。
    *   **重要性**：主流模型配置错误的修复滞后引发了用户不满。
    *   链接: [anomalyco/opencode Issue #27199](https://github.com/anomalyco/opencode/issues/27199)

5.  **[CLOSED] DeepSeek 思考模式需回传 reasoning_content (#24104)**
    *   **关注点**：使用 DeepSeek 思考模式时，后续 API 调用未回传推理内容导致会话卡死。
    *   **重要性**：国产模型集成中的关键 Bug，已修复，对使用 DeepSeek 的开发者至关重要。
    *   链接: [anomalyco/opencode Issue #24104](https://github.com/anomalyco/opencode/issues/24104)

6.  **[CLOSED] 如何关闭 1.4.4 版本的音效和动画 (#22528)**
    *   **关注点**：新版本终端模式下的启动动画和音效引发用户反感（👍 41）。
    *   **重要性**：反映了社区对“极简/专业”工具定位的坚持，希望有开关控制非功能性干扰。
    *   链接: [anomalyco/opencode Issue #22528](https://github.com/anomalyco/opencode/issues/22528)

7.  **[CLOSED] 子代理无法访问工具（Commander+Worker 模式）(#26758)**
    *   **关注点**：在主代理无权限、子代理有权限的架构下，子代理依然无法调用工具。
    *   **重要性**：多代理协作模式的核心痛点，与 Issue #26700 相关，涉及权限传递机制。
    *   链接: [anomalyco/opencode Issue #26758](https://github.com/anomalyco/opencode/issues/26758)

8.  **[OPEN] Linux 下复制显示成功但剪贴板无内容 (#24713)**
    *   **关注点**：TUI 模式下复制功能反馈虚假成功。
    *   **重要性**：影响 Linux 开发者的基础工作流效率。
    *   链接: [anomalyco/opencode Issue #24713](https://github.com/anomalyco/opencode/issues/24713)

9.  **[OPEN] Linux x86_64 图片附件被强制移除 (#27109)**
    *   **关注点**：Photon WASM 加载器失败导致所有图片被系统判定为“超限”而移除。
    *   **重要性**：阻碍了 Linux 平台的多模态功能使用。
    *   链接: [anomalyco/opencode Issue #27109](https://github.com/anomalyco/opencode/issues/27109)

10. **[OPEN] 1.14.48 版本快捷键冲突（Dvorak 键盘布局）(#27096)**
    *   **关注点**：更新后快捷键读取扫描码而非键码，导致非 QWERTY 布局用户操作混乱。
    *   **重要性**：影响特定用户群体的可用性回归问题。
    *   链接: [anomalyco/opencode Issue #27096](https://github.com/anomalyco/opencode/issues/27096)

## 4. 重要 PR 进展

1.  **[OPEN] feat(app): 移动端触控优化 (#18767)**
    *   **内容**：针对移动/触控设备优化 OpenCode App，保留桌面体验的同时解决触控交互问题。
    *   链接: [anomalyco/opencode PR #18767](https://github.com/anomalyco/opencode/pull/18767)

2.  **[OPEN] perf(app): 虚拟化会话时间轴行 (#26949)**
    *   **内容**：通过虚拟化技术优化会话时间轴的渲染性能，解决长会话下的卡顿问题。
    *   链接: [anomalyco/opencode PR #26949](https://github.com/anomalyco/opencode/pull/26949)

3.  **[OPEN] core: 暴露 v2 模型列表 API (#25821)**
    *   **内容**：提供 V2 版本的模型列表接口，包含定价、能力、提供商详情，便于客户端编程发现模型。
    *   链接: [anomalyco/opencode PR #25821](https://github.com/anomalyco/opencode/pull/25821)

4.  **[OPEN] fix(task): 防止 subagent_type 幻觉 (#23299)**
    *   **内容**：修复 Task 工具 Prompt 中虚构示例导致模型错误调用不存在的代理类型的问题。
    *   链接: [anomalyco/opencode PR #23299](https://github.com/anomalyco/opencode/pull/23299)

5.  **[CLOSED] fix(mcp): 修复 Streamable HTTP Accept 头 (#25654)**
    *   **内容**：修复 MCP SDK 在 SSE 请求中缺少必要的 Accept 头导致部分服务器（如智谱）连接失败的问题。
    *   链接: [anomalyco/opencode PR #25654](https://github.com/anomalyco/opencode/pull/25654)

6.  **[OPEN] fix: 标准化 Windows 桌面会话路径 (#26580)**
    *   **内容**：修复 Windows 桌面版重启后会话历史丢失的 Bug，涉及路径标准化处理。
    *   链接: [anomalyco/opencode PR #26580](https://github.com/anomalyco/opencode/pull/26580)

7.  **[CLOSED] refactor: 测试基础设施大规模迁移至 Effect Runner**
    *   **内容**：今日合并了多个由 @kitlangton 提交的 PR（如 #27235, #27238, #27226 等），将 PTY、Server、MCP 等模块的测试从 Promise 风格迁移至 Effect Runner，提升测试的可维护性与稳定性。
    *   链接: [anomalyco/opencode PR #27235](https://github.com/anomalyco/opencode/pull/27235) (代表链接)

8.  **[CLOSED] fix(beta): 使用 htmlrewriter2 替代 HTMLRewriter 以兼容 Node (#26309)**
    *   **内容**：解决 webfetch 工具在 Node 环境下的兼容性问题（HTMLRewriter 仅 Bun 支持）。
    *   链接: [anomalyco/opencode PR #26309](https://github.com/anomalyco/opencode/pull/26309)

9.  **[OPEN] feat(tui): 允许会话名称换行显示 (#6166)**
    *   **内容**：解决 TUI 界面中会话标题过长时的显示问题，允许换行展示。
    *   链接: [anomalyco/opencode PR #6166](https://github.com/anomalyco/opencode/pull/6166)

10. **[OPEN] adjust permission array logic (#27168)**
    *   **内容**：调整权限数组逻辑，可能与近期热议的子代理权限继承问题修复相关。
    *   链接: [anomalyco/opencode PR #27168](https://github.com/anomalyco/opencode/pull/27168)

## 5. 功能需求趋势

*   **多代理架构精细化控制**：社区对子代理的权限继承、工具调用范围提出了极高要求，不再满足于简单的代理转发，而是需要精细化的权限边界控制（如 #26700, #26758）。
*   **新模型快速适配**：随着 Claude Opus 4.6、GPT-5.5、DeepSeek Thinking 等模型发布，用户对 OpenCode 的适配速度和配置准确性（如上下文窗口、Prefill 支持）敏感度极高。
*   **跨平台体验一致性**：Linux 下的剪贴板、图片处理，以及非 QWERTY 键盘布局的支持，反映出开发者希望工具在不同环境下都能“开箱即用”。

## 6. 开发者关注点

*   **权限系统回归**：近期权限系统的安全修复引入了新的限制，导致复杂工作流（Commander-Worker 模式）受阻，开发者呼吁更灵活的权限传递机制。
*   **性能与干扰**：用户对 UI 动画和音效的负面反馈强烈，显示出开发者群体偏好“静默、高效”的工具界面。同时，针对长会话的虚拟化渲染优化正当时。
*   **API 兼容性细节**：如 DeepSeek 的 `reasoning_content` 回传、SSE Header 的正确设置，这些底层 API 细节直接决定了特定模型的可用性。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-05-13)

## 1. 今日速览
今日 Qwen Code 发布 **v0.15.11** 正式版，重点优化了核心性能，特别是 Session 列表元数据读取的内存管理。社区方面，关于 **守护进程模式** 的架构设计讨论热度不减；同时，多项提升稳定性的关键 PR（如 MCP 非阻塞启动、原子写入文件）正在积极推进，显示出项目正从功能构建向性能与可靠性深水区迈进。

## 2. 版本发布
- **v0.15.11**
  - **核心更新**：针对核心模块进行了深度性能优化。通过限制 Session 列表元数据读取范围，引入缓冲池与懒加载消息计数机制，显著降低了内存占用并提升了列表渲染效率 ([PR #3897](https://github.com/QwenLM/qwen-code/pull/3897))。
  - **其他**：同步稳定了 main e2e 测试流程。

## 3. 社区热点 Issues (Top 10)

1.  **[P1 Bug] 更新后任务自动停止问题** - **高度关注**
    用户反馈升级后，即使运行重型任务，Qwen Code 会未经用户指令自动发送停止命令，严重影响长时任务稳定性。目前已被标记为 P1 优先级。
    [链接](https://github.com/QwenLM/qwen-code/issues/3730)

2.  **[架构提案] Daemon 守护进程模式设计**
    @wenshao 提出了完整的守护进程设计提案，旨在让 `qwen serve` 以后台服务形式运行。这是社区长期期待的架构升级，涉及 HTTP/SSE 桥接及 SDK 客户端设计。
    [链接](https://github.com/QwenLM/qwen-code/issues/3803)

3.  **[Bug] 终端界面无限滚动/刷新循环**
    在模型输出代码或文本时，终端界面出现疯狂的刷新循环与滚动条无限拉长，导致内容无法阅读。该问题被确认为渲染层 UI Bug。
    [链接](https://github.com/QwenLM/qwen-code/issues/3838)

4.  **[功能需求] 原子文件写入与事务回滚**
    开发者指出当前文件写入缺乏原子性保护，进程崩溃可能导致文件损坏。建议实现基于备份的回滚机制，保障文件操作的安全性。
    [链接](https://github.com/QwenLM/qwen-code/issues/4095)

5.  **[功能需求] Cowork 模式 (对标 Claude Cowork)**
    建议增加多 Agent 协作桌面模式，支持 Artifact、AskUserQuestion 等交互，旨在让非开发者也能利用 Qwen Code 进行复杂工作流协作。
    [链接](https://github.com/QwenLM/qwen-code/issues/4026)

6.  **[Bug] 简单需求陷入死循环思考**
    用户报告在处理极简单的文档修改需求时，模型陷入长达 10-15 分钟的“循环思考”状态，无法给出有效答复，影响用户体验。
    [链接](https://github.com/QwenLM/qwen-code/issues/4055)

7.  **[Bug] 上下文窗口显示不准确**
    状态栏显示的上下文使用百分比与实际 Token 占用不符，导致用户误判，要么过早触发 compact，要么在即将爆满时未做处理。
    [链接](https://github.com/QwenLM/qwen-code/issues/4025)

8.  **[性能] 等待外部进程时 CPU 占用过高**
    在执行下载依赖或编译等非模型计算任务时，Qwen Code 占用大量 CPU 资源，可能导致机器发热或卡顿。
    [链接](https://github.com/QwenLM/qwen-code/issues/4033)

9.  **[安全] 敏感配置加密存储**
    呼吁对 `settings.json` 中的 API Key 和 Token 进行 AES-256-GCM 加密存储，防止配置文件同步时泄露敏感信息。
    [链接](https://github.com/QwenLM/qwen-code/issues/4016)

10. **[Bug] 工具调用未返回实际内容**
    部分用户报告对话时工具调用似乎没有返回实际内容，导致工作流中断，需关注兼容性问题。
    [链接](https://github.com/QwenLM/qwen-code/issues/4076)

## 4. 重要 PR 进展 (Top 10)

1.  **[Feature] qwen serve 守护进程 (Stage 1)** - **架构级更新**
    实现了守护进程的第一阶段，支持 ACP NDJSON over HTTP + SSE，包含健康检查、会话管理等基础路由，为后续全功能 Daemon 模式打下基础。
    [链接](https://github.com/QwenLM/qwen-code/pull/3889)

2.  **[Perf] MCP 不再阻塞首次输入**
    优化了初始化流程，MCP 服务发现不再阻塞 CLI 的首次输入。对于配置了多个 MCP 服务器的用户，TTI（首次交互时间）显著缩短。
    [链接](https://github.com/QwenLM/qwen-code/pull/3994)

3.  **[Perf] 启动性能优化**
    将语法高亮库 `lowlight` 从主入口拆分出去，仅在首次渲染代码块时加载，减少了约 36-60ms 的 V8 解析成本，加快启动速度。
    [链接](https://github.com/QwenLM/qwen-code/pull/4070)

4.  **[Feature] 原子文件写入**
    实现了通用的 `atomicWriteFile` 函数，支持 flush、权限保留及跨设备回退，并将其接入 Write/Edit 工具，彻底解决写入中断导致文件损坏的隐患。
    [链接](https://github.com/QwenLM/qwen-code/pull/4096)

5.  **[Feature] Git Worktree 支持**
    新增 `enter_worktree` 和 `exit_worktree` 工具，允许 Agent 在独立的 worktree 中进行隔离操作，避免污染主工作区，适合并行任务处理。
    [链接](https://github.com/QwenLM/qwen-code/pull/4073)

6.  **[Feature] `/goal` 命令与目标驱动**
    新增 `/goal` 命令用于设定会话级目标。通过 LLM-as-judge 机制在每次回复结束时判断目标是否达成，未达成则自动继续，提升任务完成率。
    [链接](https://github.com/QwenLM/qwen-code/pull/4088)

7.  **[Fix] 修复 OpenAI 流式输出重复问题**
    解决了部分 OpenAI 兼容接口（如 DashScope）发送累积文本而非增量文本导致的输出重复问题。
    [链接](https://github.com/QwenLM/qwen-code/pull/3896)

8.  **[Feature] `/rewind` 支持文件恢复**
    扩展了 `/rewind` 命令功能，除了回退对话历史，现在还能恢复被 Agent 修改的文件，提供了更完善的“后悔药”机制。
    [链接](https://github.com/QwenLM/qwen-code/pull/4064)

9.  **[Fix] ESC 取消后的提示词恢复**
    修复了用户在提交后立即按 ESC 取消时，提示词丢失且无法在历史记录中找回的问题。
    [链接](https://github.com/QwenLM/qwen-code/pull/4023)

10. **[Feature] Explore 子 Agent 使用快速模型**
    优化内置的 Explore（搜索/读取）子 Agent，使其优先调用配置的 `fastModel`（如 flash 版本），降低成本并提升响应速度。
    [链接](https://github.com/QwenLM/qwen-code/pull/4086)

## 5. 功能需求趋势
- **稳定性与数据安全**：随着用户将 Qwen Code 用于更核心的开发工作，对**文件写入原子性**、**配置加密存储**以及**任务执行的稳定性**（如防止自动停止、死循环）的需求急剧上升。
- **性能与资源占用**：社区对**启动速度**（TTI）和**空闲资源占用**非常敏感，期待更轻量的运行时和非阻塞的任务调度机制。
- **高级交互模式**：除了现有的 REPL 模式，**守护进程** 和 **多 Agent 协作** 正在成为架构演进的重要方向。

## 6. 开发者关注点
- **上下文管理透明度**：开发者希望状态栏的上下文百分比能真实反映 Token 占用，以便精准执行 `/compact`，目前的显示偏差导致了困扰。
- **外部模型兼容性**：针对 DashScope、GLM-5 等非标准 OpenAI 接口的适配问题（如流式传输、Token 统计）依然是高频反馈点。
- **UI/UX 细节**：终端渲染的流畅度（无限滚动问题）以及 Markdown 链接的可点击性，直接影响日常使用的舒适度。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*