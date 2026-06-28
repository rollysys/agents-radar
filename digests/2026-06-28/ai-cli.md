# AI CLI 工具社区动态日报 2026-06-28

> 生成时间: 2026-06-28 04:04 UTC | 覆盖工具: 8 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告 (2026-06-28)

## 1. 生态全景
当前 AI CLI 工具生态正处于从"功能验证"向"生产可用"转型的关键深水区。各工具在 Agentic 能力（自主性、多 Agent 协同）上快速迭代的同时，普遍面临着**成本控制**、**权限安全**与**跨平台兼容性**的严峻挑战。开发者对 Token 消耗的敏感度达到新高，倒逼工具端优化缓存策略与计费透明度；同时，Windows on ARM 及 WSL 环境下的稳定性问题成为阻碍普及的共性短板。

## 2. 各工具活跃度对比

| 工具名称 | 版本发布 | 关键 Issue 热度 | PR 活跃度 | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenAI Codex** | 3 个 Alpha 版 | 🔥 极高 (Token 消耗激增 👍334) | 高 (10+ 核心PR) | 成本激增、MCP 重构、SSD 损耗 |
| **Gemini CLI** | 1 个 Nightly 版 | 高 (Agent 挂起、误报) | 高 (10+ 安全修复) | SSRF 防护、沙箱隔离、AST 感知 |
| **DeepSeek TUI** | 无 (v0.8.66 预热) | 高 (缓存命中率痛点) | 极高 (10+ 合并) | 缓存策略、ACP 协议、插件系统 |
| **Qwen Code** | 1 个正式版 (v0.19.2) | 中 (状态持久化诉求) | 高 (功能增强) | 跨设备同步、后台任务、Daemon |
| **OpenCode** | 无 | 中 (内存泄漏、CPU 占用) | 高 (架构重构) | WSL 重构、BYOM、性能优化 |
| **Claude Code** | 无 | 高 (Opus 4.7 思考摘要失效) | 低 (仅脚本修复) | 模型特性支持、Thinking 渲染 |
| **Copilot CLI** | 无 | 中 (Windows 回归问题) | 低 (文档为主) | 平台兼容、终端 UX、会话保持 |
| **Kimi Code** | 无 | 无 | 无 | - |

> **注**：PR 活跃度基于各仓库提交的“重要 PR 进展”数量统计；Issue 热度基于社区点赞数与讨论频次。

## 3. 共同关注的功能方向

1.  **Token 成本与缓存优化**
    *   **涉及工具**: OpenAI Codex, DeepSeek TUI, Claude Code, Qwen Code。
    *   **具体诉求**: 开发者对模型调用的成本极其敏感。OpenAI Codex 出现 Token 消耗异常激增 (Issue #28879)；DeepSeek TUI 社区强烈呼吁提高缓存命中率以降低成本；Claude Code 出现思考死循环导致浪费；Qwen Code 用户关注 Anthropic 缓存未命中问题。这表明"成本透明度"与"缓存效率"已成为 AI CLI 工具的核心竞争力。

2.  **安全边界与权限控制**
    *   **涉及工具**: Gemini CLI, OpenAI Codex, Claude Code, GitHub Copilot CLI。
    *   **具体诉求**: 随着 Agent 自主性增强，"越权"风险凸显。Gemini CLI 密集修复 SSRF 与路径遍历漏洞，并防止 Agent 静默扩大操作范围；OpenAI Codex 社区强烈要求 `.codexignore` 隔离敏感文件；Claude Code 用户担忧终端误触权限。行业趋势正从"全自动"转向"可控下的自动"。

3.  **跨平台兼容性 (Windows/ARM)**
    *   **涉及工具**: Claude Code, OpenCode, GitHub Copilot CLI, Gemini CLI。
    *   **具体诉求**: 随着 Snapdragon 设备普及，Windows ARM64 原生支持成为普遍痛点。WSL 路径映射错误、MCP 服务启动失败、GUI 渲染崩溃等问题在各工具中高频出现，显示出跨平台适配仍是工程化难点。

4.  **后台任务的可观测性**
    *   **涉及工具**: Qwen Code, DeepSeek TUI, Gemini CLI。
    *   **具体诉求**: 用户对 Agent 在后台的"静默执行"感到不安。Qwen Code 用户要求可视化后台 Loop 任务；Gemini CLI 修复 Subagent 状态误报；DeepSeek TUI 尝试解决 Agent 自我循环问题。开发者要求对 Agent 行为有更清晰的日志与控制面板。

## 4. 差异化定位分析

| 工具 | 核心定位 | 差异化优势 | 当前痛点/短板 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **深度推理与 IDE 集成** | 紧密结合 Opus 4.7 模型的长链推理能力，VS Code 扩展体验优秀。 | 模型特性支持滞后，底层架构对 Windows ARM 支持不足，社区反馈响应较慢（今日无发版）。 |
| **OpenAI Codex** | **企业级安全与协议** | MCP 生态建设积极，企业权限管控严格，迭代速度极快。 | Token 计费争议大，底层资源泄漏问题频发，稳定性有待夯实。 |
| **Gemini CLI** | **安全沙箱与原生能力** | 极度重视安全隔离（SSRF/沙箱），探索 AST 感知与原生 Bash 能力。 | Agent 稳定性较差（挂起、误报），用户体验偏向极客，易用性需打磨。 |
| **GitHub Copilot CLI** | **官方生态融合** | 与 GitHub 生态、VS Code 深度绑定，分发渠道广。 | 跨平台回归 Bug 频发，功能更新滞后于竞品，终端 UI 体验被诟病。 |
| **DeepSeek TUI** | **成本效能与开放架构** | 极致的 Token 成本优化（Cache-maximal），积极拥抱 ACP 协议与插件化。 | 缓存机制仍在调优，自研架构重构期存在稳定性波动。 |
| **Qwen Code** | **协作与状态持久化** | 强调多人协作与跨设备状态同步，Daemon 架构先进。 | UI 细节体验待提升，后台任务管理功能尚不完善。 |
| **OpenCode** | **开源与 BYOM (自带模型)** | 支持多种模型，致力于解决 WSL 与性能问题，社区活跃。 | 内存管理存在瓶颈，跨平台路径处理问题较多。 |

## 5. 社区热度与成熟度

*   **快速迭代期**: **DeepSeek TUI** 和 **Qwen Code**。两者均处于架构快速演进阶段，PR 合并频率高，功能创新多（如插件系统、Daemon 模式），但也面临较多的稳定性反馈，社区参与度极高。
*   **问题爆发期**: **OpenAI Codex** 和 **Claude Code**。随着模型升级和新架构引入，出现了一批影响核心体验的严重 Bug（如 Token 暴涨、Thinking 失效），社区热度主要集中在投诉与排雷，显示出大模型能力下沉到工具链时的磨合阵痛。
*   **维护调优期**: **Gemini CLI** 和 **OpenCode**。重点在于修复安全漏洞、性能瓶颈和兼容性问题，社区讨论偏向技术细节（如内存泄漏、SSRF），显示出产品已进入深水区。
*   **停滞/低活跃期**: **GitHub Copilot CLI** 和 **Kimi Code**。Copilot CLI 仅见零星回归 Bug，Kimi 无活动，相较于竞品的高频更新，显得动力不足。

## 6. 值得关注的趋势信号

1.  **"Thinking" 可视化成为新战场**:
    Claude Code 因 Opus 4.7 思考摘要渲染失效引发社区强烈反弹，DeepSeek 和 Qwen 也在优化思维链输出。这表明开发者不再满足于"黑盒"输出，**对模型推理过程的可观测性** 已成为核心需求，直接影响调试效率和信任度。

2.  **Agentic 控制权的回流**:
    从 Gemini CLI 限制静默扩大操作范围，到 Qwen Code 增加任务管理面板，再到各工具纷纷引入 `/undo` 或权限确认机制。行业正在修正"过度自动化"的倾向，**"人在环路" (HITL) 的交互设计正在回归主流**，旨在平衡效率与安全。

3.  **协议之争：MCP vs ACP**:
    OpenAI Codex 和 Gemini CLI 正全力修补 MCP (Model Context Protocol) 的漏洞与认证问题，将其作为扩展能力的标准；而 DeepSeek TUI 则在推进 ACP (Agent Client Protocol) 以实现与 Zed 等编辑器的集成。**工具链协议层的竞争与割裂** 可能会导致未来用户在选择编辑器集成时面临兼容性壁垒。

4.  **本地资源占用的警钟**:
    OpenAI Codex 的 SSD 写入损耗 和 OpenCode 的内存泄漏 问题揭示了 AI CLI 工具作为常驻进程的隐患。**"好公民"意识**——即不滥用磁盘 I/O、不泄露内存、不霸占 CPU，将成为 AI CLI 工具能否进入开发者主力环境的关键准入门槛。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告 (2026-06-28)

基于 `anthropics/skills` 官方仓库的数据分析，以下是社区最新动态与趋势洞察。

## 1. 热门 Skills 排行

以下 Skills 在社区中引发了较高关注（基于 Issue 关联度与 PR 描述的痛点匹配度筛选）：

1.  **[PR #1298] skill-creator 核心修复：解决 Eval 脚本 0% 召回率问题**
    *   **功能**：修复 `run_eval.py` 在所有场景下报告 `recall=0%` 的严重 Bug，涉及 Windows 流读取、触发检测及并行工作线程问题。
    *   **热点**：该 PR 直接解决了社区高热 Issue #556，是 Skill 开发者的核心工具链修复。
    *   **状态**：Open
    *   **链接**：[anthropics/skills PR #1298](https://github.com/anthropics/skills/pull/1298)

2.  **[PR #514] document-typography：文档排版质量控制**
    *   **功能**：解决 AI 生成文档中的常见排版问题（孤行、寡行、编号错位），提升文档专业度。
    *   **热点**：填补了文档生成后处理的空白，属于高频实用型 Skill。
    *   **状态**：Open
    *   **链接**：[anthropics/skills PR #514](https://github.com/anthropics/skills/pull/514)

3.  **[PR #486] ODT Skill：OpenDocument 格式支持**
    *   **功能**：支持创建、填充及转换 ODT/ODS 文件，对接 LibreOffice 等开源办公生态。
    *   **热点**：扩展了 Claude Code 在开源办公文档领域的处理能力。
    *   **状态**：Open
    *   **链接**：[anthropics/skills PR #486](https://github.com/anthropics/skills/pull/486)

4.  **[PR #83] Meta-Skills：Skill 质量与安全分析器**
    *   **功能**：新增 `skill-quality-analyzer` 与 `skill-security-analyzer`，用于自动评估 Skill 的质量与安全性。
    *   **热点**：Meta-Skill 概念体现了社区对 Skill 标准化与安全性的重视。
    *   **状态**：Open
    *   **链接**：[anthropics/skills PR #83](https://github.com/anthropics/skills/pull/83)

5.  **[PR #360] AppDeploy：全栈 Web 应用部署**
    *   **功能**：允许 Claude 直接部署和管理全栈 Web App 到公网 URL。
    *   **热点**：打通代码生成到部署的“最后一公里”，极具实战价值。
    *   **状态**：Open
    *   **链接**：[anthropics/skills PR #360](https://github.com/anthropics/skills/pull/360)

6.  **[PR #154] shodh-memory：Agent 持久化记忆**
    *   **功能**：为 AI Agent 提供跨对话的持久化上下文记忆能力。
    *   **热点**：解决了 AI 无状态限制，是构建长期运行 Agent 的关键组件。
    *   **状态**：Open
    *   **链接**：[anthropics/skills PR #154](https://github.com/anthropics/skills/pull/154)

## 2. 社区需求趋势

从 Issues 讨论中提炼出以下核心需求方向：

*   **安全性与信任边界**：Issue #492（23条评论）指出社区 Skill 冒用官方命名空间存在安全隐患，强烈呼吁建立官方认证或命名空间隔离机制。
*   **企业级协作功能**：Issue #228（14条评论）需求最高，用户希望支持组织内部 Skill 库共享，替代当前低效的手动文件传输。
*   **工具链稳定性**：Issue #556（12条评论）与 #1061 反映了 `skill-creator` 脚本在 Windows 平台的兼容性与核心评估逻辑存在严重缺陷，急需修复。
*   **Agent 基础设施**：Issue #1329 与 #412 显示，针对 Agent 治理、长期记忆压缩等底层架构能力的 Skill 正成为进阶用户的新焦点。

## 3. 高潜力待合并 Skills

以下 PR 解决了关键痛点且讨论活跃，具备较高合并潜力：

*   **[PR #1298 & #1323] skill-creator 评估逻辑修复**：直接回应 Issue #556 的核心 Bug，修复了 Skill 描述优化循环失效的问题，是维护工具链可用的关键更新。
*   **[PR #1050 & #1099] Windows 平台兼容性修复**：解决了 Windows 环境下子进程调用、管道读取和编码错误，将显著扩大 Skill 开发者群体的覆盖面。
*   **[PR #361] YAML 解析校验增强**：针对特殊字符导致的隐形解析失败增加了预校验，属于提升 Skill 开发体验的防御性修复。

## 4. Skills 生态洞察

**当前社区正从“功能拓展”转向“基础设施完善”，最集中的诉求是建立安全的分发机制与稳定的跨平台开发工具链。**

---

# Claude Code 社区动态日报 (2026-06-28)

## 1. 今日速览
今日社区关注焦点高度集中于 **Opus 4.7 模型的 Thinking Summaries（思考摘要）渲染问题**，多条高热度 Issue 指出该功能在 VS Code 扩展及 CLI 中失效，社区反馈强烈。此外，Windows on ARM64 (Snapdragon) 平台的 Cowork VM 兼容性问题和终端交互体验的优化需求也是讨论热点。过去 24 小时无新版本发布。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues (Top 10)

1.  **[Critical] Opus 4.7 思考摘要功能失效 (👍 75)**
    *   **Issue:** [#49268](https://github.com/anthropics/claude-code/issues/49268)
    *   **详情:** 用户升级至 Opus 4.7 后发现思考摘要不再显示。作者深入分析指出，原因在于 harness 未正确设置 `display: "summarized"` 参数。该问题严重影响长链推理的可观测性，目前评论数已达 46 条。

2.  **[Bug] VS Code 扩展无法渲染 Opus 4.7 思考摘要**
    *   **Issue:** [#49322](https://github.com/anthropics/claude-code/issues/49322)
    *   **详情:** 上述问题的 VS Code 扩展具体表现，用户在 IDE 中完全无法看到模型的思考过程摘要，影响了开发调试体验。

3.  **[Platform] Windows ARM64 (Snapdragon) Cowork VM 启动失败**
    *   **Issue:** [#39636](https://github.com/anthropics/claude-code/issues/39636)
    *   **详情:** 在搭载 Snapdragon X Plus 的 Windows 设备上，Cowork VM 内核无法启动，导致连接超时。随着 ARM 架构 Windows 设备普及，此底层兼容性问题亟待解决。

4.  **[UX] 终端可点击权限提示引发误操作风险 (👍 24)**
    *   **Issue:** [#70622](https://github.com/anthropics/claude-code/issues/70622)
    *   **详情:** 用户抱怨新的终端内可点击 Yes/No 提示极易导致误触（意外批准或取消操作），呼吁增加配置选项以切回键盘交互模式。

5.  **[Feature] 无法在 Claude Desktop 中删除 Code 环境**
    *   **Issue:** [#12294](https://github.com/anthropics/claude-code/issues/12294)
    *   **详情:** 长期存在的功能缺失，用户无法管理或删除 Claude Desktop 中创建的 Code 环境，导致环境列表混乱。

6.  **[Critical] 安全分类器宕机导致 Bash 命令全量阻断**
    *   **Issue:** [#69950](https://github.com/anthropics/claude-code/issues/69950)
    *   **详情:** 在自动批准模式下，若后端安全分类模型 (`claude-opus-4-8`) 不可用，Claude Code 会拒绝所有 Bash 命令，导致工作流完全中断。

7.  **[Bug] Thinking 阶段陷入重复 Token 循环**
    *   **Issue:** [#71945](https://github.com/anthropics/claude-code/issues/71945)
    *   **详情:** 模型在思考阶段偶尔会陷入死循环（如重复 "not called" 数百次），导致消耗约 2k+ 无效 Token，增加用户成本。

8.  **[Feature] 请求 VS Code 原生系统通知支持 (👍 14)**
    *   **Issue:** [#57230](https://github.com/anthropics/claude-code/issues/57230)
    *   **详情:** 目前 VS Code 扩展缺乏主动通知机制。用户建议增加系统级 Toast 通知，以便在任务完成或需要权限审批时及时提醒。

9.  **[Feature] Cowork 模式亟需手动压缩上下文功能**
    *   **Issue:** [#65114](https://github.com/anthropics/claude-code/issues/65114)
    *   **详情:** Cowork 模式目前仅支持自动压缩上下文，用户无法手动触发，导致在关键时刻无法自主控制上下文窗口。

10. **[Bug] 插件市场重载导致插件与 MCP 服务全失效**
    *   **Issue:** [#71948](https://github.com/anthropics/claude-code/issues/71948)
    *   **详情:** 使用 `/plugin` 或 `/reload-plugins` 时，CLI 与应用内核对路径处理不一致，导致目录被清空后无法重新克隆，所有插件加载失败。

## 4. 重要 PR 进展
*注：过去 24 小时内活跃 PR 较少，仅更新 2 条。*

1.  **[Open] 增强 Issue 标签编辑脚本的错误提示**
    *   **PR:** [#68787](https://github.com/anthropics/claude-code/pull/68787)
    *   **详情:** 修复了 `edit-issue-labels.sh` 脚本在无标签参数时静默退出的问题，增加了明确的错误信息输出，有助于维护工作流调试。

2.  **[Closed] 无效 PR 清理**
    *   **PR:** [#71798](https://github.com/anthropics/claude-code/pull/71798)
    *   **详情:** 一个内容为空的 PR 已被关闭。

## 5. 功能需求趋势
*   **IDE 集成体验优化:** 社区对 VS Code 扩展的通知系统 (#57230, #65241)、Opus 4.7 新特性支持 (#49268) 呼声极高，希望扩展能更好地融入开发者的日常工作流。
*   **跨平台兼容性:** 随着 Windows on ARM 设备的增多，ARM64 架构支持 (#39636) 成为紧迫需求。
*   **交互控制权回归:** 用户对自动化带来的副作用（如误触权限、不可控的上下文压缩）感到困扰，倾向于获得更多手动控制权 (#70622, #65114)。
*   **多 Agent 协同管理:** 随着 Cowork 和多 Agent 场景增多，集中式的权限管理与通知中心 (#70591) 成为新的架构需求。

## 6. 开发者关注点
*   **Token 消耗与模型稳定性:** 开发者对 Token 浪费极其敏感。思考阶段的死循环 (#71945)、模型忽视既定规则导致重复尝试 (#71938) 等问题直接影响成本和效率。
*   **权限与安全性:** 终端内的交互变革引发了安全隐患担忧，开发者希望权限审批流程既高效又防误触。
*   **MCP 与插件生态稳定性:** 插件系统的路径管理 Bug (#71948) 和 MCP 指令截断问题 (#43474) 显示出生态工具链在复杂配置下的脆弱性。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-06-28)

## 1. 今日速览
今日 OpenAI Codex 团队发布了三个 Rust Alpha 版本（v0.143.0-alpha.27/28/29），显示出高频的迭代节奏。社区最关注的焦点在于 **GPT-5.5 模型 Token 消耗异常激增** 的问题，多名开发者反馈限额预算在极少数提示词下即耗尽。此外，MCP（Model Context Protocol）相关的 OAuth 认证重构与资源泄漏修复成为开发重心。

## 2. 版本发布
过去 24 小时内连续发布了 3 个 Alpha 版本，重点可能在底层 Rust 组件的优化与问题修复：
- **[rust-v0.143.0-alpha.29](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.29)**
- **[rust-v0.143.0-alpha.28](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.28)**
- **[rust-v0.143.0-alpha.27](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.27)**

## 3. 社区热点 Issues (Top 10)

1.  **[Critical] Token 消耗速率异常暴增 (#28879)**
    - **链接**: [openai/codex Issue #28879](https://github.com/openai/codex/issues/28879)
    - **热度**: 👍 334 | 💬 186
    - **简评**: 开发者反馈自 6 月 16 日起，GPT-5.5 在 Plus 计划下的 Token 消耗成本激增 10-20 倍，导致 5 小时预算在 2-3 次提示后耗尽。这是目前社区投诉最强烈的问题，涉及计费与模型底层逻辑。

2.  **[Feature] 敏感文件排除机制 (.codexignore) (#2847)**
    - **链接**: [openai/codex Issue #2847](https://github.com/openai/codex/issues/2847)
    - **热度**: 👍 414 | 💬 79
    - **简评**: 长期需求，用户请求支持类似 `.gitignore` 的 `.codexignore` 文件，以防止 Agent 读取或上传敏感文件（如密钥、隐私数据）。这是企业级安全集成的关键功能。

3.  **[Bug] SQLite 日志写入导致 SSD 寿命损耗 (#28224)**
    - **链接**: [openai/codex Issue #28224](https://github.com/openai/codex/issues/28224)
    - **热度**: 👍 400 | 💬 93
    - **简评**: 之前版本中 Codex 的反馈日志写入量高达 640TB/年，严重消耗 SSD 寿命。虽已有 PR 修复了 85% 的日志量，但该 Issue 仍是性能监控的焦点。

4.  **[Bug] 模型不支持错误 (#30224)**
    - **链接**: [openai/codex Issue #30224](https://github.com/openai/codex/issues/30224)
    - **热度**: 👍 18 | 💬 52
    - **简评**: 使用特定头部 `X-OpenAI-Internal-Codex-Responses-Lite` 时 API 报错 "This model is not supported"，影响了部分自定义集成流程。

5.  **[Feature] 请求恢复 "/undo" 功能 (#9203)**
    - **链接**: [openai/codex Issue #9203](https://github.com/openai/codex/issues/9203)
    - **热度**: 👍 301 | 💬 51
    - **简评**: 社区强烈呼吁恢复 `/undo` 命令，用于撤销 Agent 意外删除文件或修改代码的操作，尤其是针对未提交 Git 的更改，这是保障开发安全性的刚需。

6.  **[Bug] macOS SQLite 日志持续写入问题 (#29532)**
    - **链接**: [openai/codex Issue #29532](https://github.com/openai/codex/issues/29532)
    - **热度**: 👍 7 | 💬 22
    - **简评**: v0.142.0 版本后，macOS 端 `~/.codex/logs_2.sqlite` 依然存在持续的日志写入（Churn），虽然频率降低但未彻底解决。

7.  **[Bug] Windows VS Code 扩展空白页问题 (#21863)**
    - **链接**: [openai/codex Issue #21863](https://github.com/openai/codex/issues/21863)
    - **热度**: 👍 1 | 💬 14
    - **简评**: Windows 平台下，VS Code Codex 扩展因自定义 URI 路由使用了 `fsPath` 导致编辑器面板打开空白，影响 Windows 用户体验。

8.  **[Bug] macOS 进程累积导致系统卡顿 (#25744)**
    - **链接**: [openai/codex Issue #25744](https://github.com/openai/codex/issues/25744)
    - **热度**: 👍 3 | 💬 8
    - **简评**: macOS 上长时间运行的 Codex 会话会累积 Computer Use/MCP 辅助进程及僵尸子进程，导致 HID 滞后和系统卡顿。

9.  **[Bug] MCP "Too many open files" 错误 (#26984)**
    - **链接**: [openai/codex Issue #26984](https://github.com/openai/codex/issues/26984)
    - **热度**: 👍 1 | 💬 7
    - **简评**: MCP stdio 服务器存在管道文件描述符泄漏和孤儿进程问题，长时间运行后导致 EMFILE 错误（系统错误 24），进程崩溃。

10. **[Bug] 桌面端后台消耗大量 Token (#30390)**
    - **链接**: [openai/codex Issue #30390](https://github.com/openai/codex/issues/30390)
    - **热度**: 👍 0 | 💬 3
    - **简评**: 新近报告，Codex 桌面端在后台生成首页 "环境建议" 时消耗了约 70k Token，用户质疑为何后台任务有如此高的成本。

## 4. 重要 PR 进展 (Top 10)

1.  **[Feature] 显示使用限制重置过期详情 (#30395)**
    - **链接**: [openai/codex PR #30395](https://github.com/openai/codex/pull/30395)
    - **内容**: 解决 Issue #29618，在客户端显示积累的使用限制重置额度的过期日期，提升配额透明度。

2.  **[Feature] 遥测：结构化工具与推理计时日志 (#30334)**
    - **链接**: [openai/codex PR #30334](https://github.com/openai/codex/pull/30334)
    - **内容**: 增加 JSON 格式的结构化日志，用于区分工具调度的排队时间和执行时间，提升诊断能力。

3.  **[Security] 运行时强制执行插件市场策略 (#29691)**
    - **链接**: [openai/codex PR #29691](https://github.com/openai/codex/pull/29691)
    - **内容**: 在运行时根据企业源策略过滤和禁用被阻止的已安装插件，增强企业环境下的安全性。

4.  **[Perf] 禁用 Rendezvous WebSockets 的 Nagle 算法 (#30269)**
    - **链接**: [openai/codex PR #30269](https://github.com/openai/codex/pull/30269)
    - **内容**: 在 WebSocket 连接上无条件禁用 Nagle 算法，以减少网络延迟，优化实时通信性能。

5.  **[API] 暴露环境信息 RPC (#30291)**
    - **链接**: [openai/codex PR #30291](https://github.com/openai/codex/pull/30291)
    - **内容**: 允许客户端在配置命名执行环境时，发现环境的 Shell 和工作目录路径，支持跨平台环境配置。

6.  **[Fix] MCP OAuth 认证栈重构 (#30294 等)**
    - **链接**: [openai/codex PR #30294](https://github.com/openai/codex/pull/30294)
    - **内容**: 这是一个 PR 堆栈，包括 #30292, #30293, #30295, #30296。旨在序列化 MCP OAuth 登录/注销/刷新事务，解决 OAuth Token 刷新失败和竞态条件问题，是对 MCP 连接稳定性的重大修复。

7.  **[Fix] 稳定化合成调用输出 ID (#30327)**
    - **链接**: [openai/codex PR #30327](https://github.com/openai/codex/pull/30327)
    - **内容**: 修复 `ContextManager::for_prompt` 中 "aborted" 输出缺乏稳定 ID 的问题，确保重试和恢复时的会话一致性。

8.  **[Fix] 规范化提示输出 ID 分配 (#30311)**
    - **链接**: [openai/codex PR #30311](https://github.com/openai/codex/pull/30311)
    - **内容**: 在 `ContextManager::for_prompt` 规范化之后运行 ID 分配器，确保所有输出路径（常规、重试、恢复）都具有唯一且稳定的 ID。

9.  **[Fix] 增加 currentTime/read 超时时间 (#30384)**
    - **链接**: [openai/codex PR #30384](https://github.com/openai/codex/pull/30384)
    - **内容**: 将外部 `currentTime/read` 请求的超时时间从 5 秒增加到 10 秒，减少网络波动导致的读取失败。

10. **[Test] MCP OAuth 并发与恢复测试 (#30089)**
    - **链接**: [openai/codex PR #30089](https://github.com/openai/codex/pull/30089)
    - **内容**: 添加针对 MCP OAuth 凭证存储并发访问和恢复场景的测试用例，验证上述认证重构的健壮性。

## 5. 功能需求趋势

*   **成本透明度与控制**: 社区对 Token 消耗异常（Issue #28879, #30390）极其敏感。用户迫切需要更精确的实时消耗监控、后台任务成本控制以及清晰的配额重置机制（PR #30395）。
*   **安全与隐私隔离**: 对 `.codexignore` 的需求持续高涨（Issue #2847），反映出用户对 Agent 沙箱机制的不信任感，希望在文件系统层面有明确的“禁止访问”界限。
*   **MCP 稳定性**: 大量 Issue 与 PR 集中在 MCP 进程泄漏、OAuth 认证失败和文件句柄耗尽问题上，表明 MCP 生态虽然扩展了能力，但也成为了当前系统不稳定的主要源头。

## 6. 开发者关注点

*   **Token 成本激增**: 开发者普遍报告 GPT-5.5 的 Token 成本非预期增加，这可能影响了 Codex 在实际开发工作流中的性价比。
*   **Undo 功能缺失**: 在 Agent 模式下，错误的代码修改难以撤销，开发者呼吁引入更强的安全网（如 `/undo`）来防止未提交代码的丢失。
*   **系统级资源泄漏**: macOS 和 Windows 平台上均报告了进程、文件句柄和 SSD 写入量的异常，开发者希望 Codex 能成为一个“好公民”，不影响宿主机性能。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-06-28)

## 1. 今日速览
今日 Gemini CLI 发布了 v0.51.0-nightly 版本，重点修复了安全路径黑名单的大小写敏感性问题。社区活跃度较高，核心关注点集中在 **Agent 自主行为的可靠性**（如子代理状态误报、挂起问题）以及**安全性增强**（SSRF 防护、环境变量过滤）。多起针对 Agent "静默扩大执行范围" 和 "交互式命令卡死" 的修复已提交 PR，显示出团队正在着力解决 Agent 的可控性与稳定性痛点。

## 2. 版本发布
- **v0.51.0-nightly.20260628.gae0a3aa7b**
  - **主要更新**：修复了安全模块中的大小写敏感问题，强制敏感路径黑名单不区分大小写，并修复了 VSCode HITL (Human-in-the-Loop) 相关逻辑。
  - **详情链接**：[Release v0.51.0-nightly.20260628](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260628.gae0a3aa7b)

## 3. 社区热点 Issues (Top 10)

1.  **[P1] Subagent 达到步数限制后被误报为成功** - [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
    - **关注点**：当 `codebase_investigator` 触及 `MAX_TURNS` 限制时，竟返回 `status: "success"`。这会误导用户认为任务已完成，实际上 Agent 并未执行任何分析，严重影响可靠性。

2.  **[P1] Generalist Agent 无限挂起** - [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
    - **关注点**：用户反馈在调用 Generalist Agent 时，CLI 会无限挂起，即便是简单的文件夹创建操作也会卡死。这是目前反馈最严重的阻塞性 Bug 之一。

3.  **[P1] Shell 命令执行卡死在 "Waiting input"** - [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
    - **关注点**：CLI 执行完 Shell 命令后，界面仍显示 "Awaiting user input" 导致进程挂起。这属于核心交互流程的 Bug，影响用户体验。

4.  **[P2] 利用模型 Bash 亲和力实现零依赖沙箱** - [#19873](https://github.com/google-gemini/gemini-cli/issues/19873)
    - **关注点**：这是一个大型架构改进提案。建议利用 Gemini 模型原生的 Bash 能力（grep/sed/awk 等）进行代码探索，同时引入操作系统级沙箱以确保安全，无需依赖沉重的容器化方案。

5.  **[P2] AST 感知文件读取与搜索评估** - [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
    - **关注点**：探讨引入 AST（抽象语法树）工具以减少 Token 消耗和误读。社区希望 Agent 能像 IDE 一样理解代码结构，而非仅通过正则或行号读取文件。

6.  **[P2] Auto Memory 日志隐私与重试机制** - [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) & [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)
    - **关注点**：Auto Memory 功能被指存在隐私风险（日志未脱敏）和死循环问题（低信噪比会话反复重试），这反映了后台自动化任务的设计缺陷。

7.  **[P2] Gemini 不主动使用自定义 Skills 和 Sub-agents** - [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
    - **关注点**：用户抱怨即使定义了特定的 Skill（如 gradle, git），Agent 也不会主动调用，仍倾向于手动输入命令。这是 Agent 智能调度能力的痛点。

8.  **[P1] Bugreport 缺失 Subagent 上下文** - [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)
    - **关注点**：提交 Bug 报告时，仅包含主会话日志，缺少 Subagent 的内部状态。这使得排查 Subagent 相关问题变得非常困难。

9.  **[P2] 工具数量超过 128 个时报 400 错误** - [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
    - **关注点**：当工具数量过多时 API 返回 400 错误，暴露了 CLI 在工具管理和筛选策略上的局限性。

10. **[P1] Browser Subagent 在 Wayland 环境下失败** - [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
    - **关注点**：Linux Wayland 显示协议下的兼容性问题，阻碍了部分开发者使用浏览器自动化功能。

## 4. 重要 PR 进展 (Top 10)

1.  **[Security] 修复 DNS 重绑定绕过 SSRF 防护** - [#28181](https://github.com/google-gemini/gemini-cli/pull/28181)
    - **内容**：修复了 `web_fetch` 工具中同步 IP 检查导致的 SSRF 漏洞，防止攻击者通过 DNS 重绑定绕过安全检查。

2.  **[Security] 移除 ISSUE_BODY/TITLE 环境变量白名单** - [#28179](https://github.com/google-gemini/gemini-cli/pull/28179)
    - **内容**：防止 CI 环境下的敏感信息泄露，不再允许 `ISSUE_BODY` 和 `ISSUE_TITLE` 绕过环境变量清洗机制。

3.  **[Security] 恢复防御性路径解析** - [#28180](https://github.com/google-gemini/gemini-cli/pull/28180)
    - **内容**：重新应用安全补丁，修复通过符号链接进行的路径遍历攻击，增强文件读写操作的安全性。

4.  **[Agent] 防止任务失败时的静默范围扩大** - [#28172](https://github.com/google-gemini/gemini-cli/pull/28172)
    - **内容**：修复当用户指定操作特定行或范围时，Agent 若失败会静默扩大范围（如读取全文件、运行脚本）的问题，增强了操作的确定性和安全性。

5.  **[Policy] 要求确认 Shell 参数扩展** - [#28175](https://github.com/google-gemini/gemini-cli/pull/28175)
    - **内容**：对包含 Shell 参数扩展的命令降级为需要用户确认，防止在 YOLO 模式下执行潜在的恶意或破坏性命令。

6.  **[Core] 修复 MCP 图像 MIME 类型嗅探** - [#27878](https://github.com/google-gemini/gemini-cli/pull/27878)
    - **内容**：解决了 Figma MCP 集成中 WebP 图像被误识别为 PNG 导致 API 报错的问题，通过本地二进制签名嗅探实现准确识别。

7.  **[Core] 修复 MCP OAuth 刷新逻辑** - [#27889](https://github.com/google-gemini/gemini-cli/pull/27889)
    - **内容**：修复了自动发现的 MCP 服务器在无静态 Client ID 时无法刷新 Token 的问题。

8.  **[Evals] 增加 Eval 覆盖率报告命令** - [#28169](https://github.com/google-gemini/gemini-cli/pull/28169)
    - **内容**：新增 `eval:coverage` 命令，用于统计内置工具的测试覆盖率，有助于提升代码质量。

9.  **[Agent] 修复 SSH 环境下扩展加载失败问题** - [#28059](https://github.com/google-gemini/gemini-cli/pull/28059)
    - **内容**：修复了当 workspace `.env` 文件不可读（权限问题）时，扩展系统加载崩溃的问题。

10. **[Bot] 要求批准 Bot Patch Artifacts** - [#28178](https://github.com/google-gemini/gemini-cli/pull/28178)
    - **内容**：强化了自动化 Bot 的发布流程，要求必须有明确的批准标记才能应用补丁，防止错误代码自动合并。

## 5. 功能需求趋势
- **更精细的 Agent 控制权**：社区强烈呼吁限制 Agent 的"自作主张"，特别是当初始方案失败时，Agent 不应静默扩大文件读取或执行范围，而应请求用户介入。
- **安全性与隔离性**：近期高频的安全 PR 显示，团队正在加固沙箱机制（SSRF、路径遍历、环境变量）。未来趋势是增强 OS 级别的隔离，以支持 Agent 执行更复杂的 Bash 命令。
- **上下文感知能力**：开发者希望 CLI 能从"文本处理"进化到"代码理解"，例如通过 AST 感知工具精准定位函数，而非消耗大量 Token 盲目读取文件。

## 6. 开发者关注点
- **稳定性与挂起问题**：多个 Issues 提到 CLI 在执行简单命令或调用 Subagent 时挂起，开发者对"无限等待"的容忍度极低，急需修复进程管理逻辑。
- **透明度与调试体验**：Bugreport 缺失 Subagent 日志、Auto Memory 的不可见行为，都增加了调试难度。开发者需要更完善的日志和状态反馈机制。
- **跨平台兼容性**：Wayland 等非标准环境的支持问题逐渐浮现，显示出 CLI 在不同操作系统配置下的适配仍有盲区。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-06-28)

## 1. 今日速览
今日社区活跃度较高，主要集中在 **Windows 平台的兼容性问题**及 **终端 UI 渲染体验**方面。多位开发者反馈最新版本（v1.0.65/66）在 Windows 环境下出现启动失败、复制功能失效及 MCP 服务器连接错误等回归问题。此外，关于终端交互体验（如 Alt-screen 视图、触控板滚动）的优化需求依然强烈。

## 2. 版本发布
过去 24 小时内无新版发布。

## 3. 社区热点 Issues
以下精选了 10 个值得关注的 Issue，涵盖关键 Bug 修复与功能改进：

1.  **[#3958 Windows 下 v1.0.66 启动 MCP 服务器失败 (回归问题)](https://github.com/github/copilot-cli/issues/3958)**
    *   **标签**: `triage`
    *   **摘要**: Windows 用户在升级至 v1.0.66 后，无法启动 `command` 为 `.bat/.cmd` 且带参数的 stdio MCP 服务器，报错“命令语法不正确”。这是一个严重的平台兼容性回归 Bug，影响工作流集成。

2.  **[#3949 Windows 11 复制功能失效](https://github.com/github/copilot-cli/issues/3949)**
    *   **标签**: `area:input-keyboard`, `area:platform-windows`
    *   **摘要**: 用户反馈在 Windows 11 环境下，尽管界面提示已复制，但剪贴板实际为空。这是基础交互功能的阻断性问题。

3.  **[#2165 Ubuntu 密钥环支持损坏](https://github.com/github/copilot-cli/issues/2165)**
    *   **标签**: `area:platform-linux`, `area:authentication`
    *   **热度**: 👍 20
    *   **摘要**: 这是一个长期存在的问题，Ubuntu 下若未安装 `secret-tool`，密钥环访问失败，且相关文档指引有误。该问题获得较高点赞，表明 Linux 用户对此痛点共鸣强烈。

4.  **[#1799 如何关闭 Alt-screen 视图？](https://github.com/github/copilot-cli/issues/1799)**
    *   **标签**: `area:configuration`, `area:terminal-rendering`
    *   **热度**: 👍 7
    *   **摘要**: 用户对新版默认开启的 Alt-screen 视图（全屏模式）感到困扰，希望能切回原始终端模式以保留历史记录。社区对于 UI 交互配置灵活性的需求较高。

5.  **[#3962 最新版 Copilot (1.0.65) 无法正常工作](https://github.com/github/copilot-cli/issues/3962)**
    *   **标签**: `triage`
    *   **摘要**: 用户反馈 v1.0.65 启动后无法正常执行命令（如 "review last commit"），具体表现为功能无响应。需官方进一步确认是否为环境配置问题。

6.  **[#3874 VS Code agent `preToolUse` Hook 拒绝操作失效](https://github.com/github/copilot-cli/issues/3874)**
    *   **标签**: `area:permissions`, `area:plugins`
    *   **摘要**: 在配置了拒绝所有命令的 Hook 后，Copilot CLI 依然执行了操作，表明权限控制逻辑可能存在漏洞，涉及安全性问题。

7.  **[#3959 TUI 删除文本后出现“幽灵”字符残留](https://github.com/github/copilot-cli/issues/3959)**
    *   **标签**: `triage`
    *   **摘要**: 在终端 UI 中退格删除文本时，视觉上残留未清除的字符，虽然逻辑上已删除，但严重影响用户体验。属于典型的 TUI 渲染层 Bug。

8.  **[#3957 MBP 触控板无法滚动查看历史记录](https://github.com/github/copilot-cli/issues/3957)**
    *   **标签**: `triage`
    *   **摘要**: macOS 用户反馈使用触控板滚动时，触发的不是窗口滚动，而是选中历史提示词，交互逻辑冲突。

9.  **[#3963 显示会话保留/过期日期](https://github.com/github/copilot-cli/issues/3963)**
    *   **标签**: `triage`
    *   **摘要**: 功能请求。用户希望能在状态栏查看当前会话的保留策略或过期时间，以避免会话意外丢失导致上下文丢失。

10. **[#3964 复制软换行输出时丢失空格 (回归问题)](https://github.com/github/copilot-cli/issues/3964)**
    *   **状态**: CLOSED
    *   **摘要**: 旧版修复的问题在 v1.0.65 中再次出现。复制自动换行的输出时，单词间的空格会丢失。虽然该 Issue 已关闭，但表明近期更新可能引入了不稳定因素。

## 4. 重要 PR 进展
过去 24 小时内 PR 更新较少，仅 3 条记录：

1.  **[#3928 添加 .gitignore 和设置配置](https://github.com/github/copilot-cli/pull/3928)**
    *   **状态**: OPEN
    *   **分析**: 旨在改进项目的配置管理，可能是为了解决一些文件忽略或环境设置相关的问题。

2.  **[#570 添加 macOS 安装说明](https://github.com/github/copilot-cli/pull/570)**
    *   **状态**: CLOSED
    *   **分析**: 这是一个由 Copilot 自动发起的文档更新 PR，最终被关闭，可能已被其他方式实现或不再需要。

3.  **[#3737 Jigg empire ai](https://github.com/github/copilot-cli/pull/3737)**
    *   **状态**: OPEN
    *   **分析**: 描述较为模糊，需关注官方是否会对这类低信息量的 PR 进行清理。

## 5. 功能需求趋势
从今日的 Issues 中，可以提炼出以下社区关注方向：

*   **终端交互体验优化**: 大量关于终端渲染（Alt-screen、幽灵字符、滚动）的反馈，显示用户对 CLI 的“手感”和原生终端体验有高要求。
*   **平台兼容性与稳定性**: Windows 平台的回归问题频发，涉及基础功能（复制、脚本启动），显示出近期版本在跨平台测试覆盖上可能存在不足。
*   **上下文与记忆管理**: 用户对会话生命周期（过期时间）和上下文保留（类似 Claude Code 的 `/btw` 功能）表现出浓厚兴趣，希望有更持久和可控的会话管理能力。

## 6. 开发者关注点
*   **Windows 用户的痛点**: 最近的 v1.0.65 和 v1.0.66 版本对 Windows 用户不太友好，出现了复制失效、MCP 启动失败等严重问题，建议开发团队优先修复此类阻断性回归 Bug。
*   **Linux 认证体验**: Ubuntu 下的密钥环问题长期未解，影响了开发者的认证体验，需更新文档或修复代码逻辑。
*   **权限控制的安全性**: Hook 机制失效的问题引起了关注，开发者期望插件和权限系统能有更可靠的行为保障。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-06-28)

## 1. 今日速览
今日 OpenCode 社区动态主要集中在**性能优化**与**跨平台兼容性**修复上。社区对内存泄漏和高 CPU 占用问题反馈强烈，开发者提交了大量针对 WSL 路径处理和 ARM64 架构的修复 PR。功能方面，新增的智能体工具集和会话撤销/重做功能成为亮点，显著提升了工具链的完整性。

## 2. 版本发布
过去24小时内无新的版本发布。

## 3. 社区热点 Issues

以下是今日最受关注的 10 个 Issue，涵盖了功能请求、关键 Bug 修复和性能优化：

1.  **[FEATURE] 提供 llms.txt 和 Markdown 文档 (#8816)**
    *   **链接**: [anomalyco/opencode Issue #8816](https://github.com/anomalyco/opencode/issues/8816)
    *   **热度**: 👍 34 | 💬 15
    *   **解读**: 社区强烈希望提供标准化的 `llms.txt` 文档，以便 LLM 更好地解析和理解 OpenCode 文档。这反映了开发者对 AI 辅助开发工具互操作性的重视。

2.  **[FEATURE] 支持加密货币支付 (#23153)**
    *   **链接**: [anomalyco/opencode Issue #23153](https://github.com/anomalyco/opencode/issues/23153)
    *   **热度**: 👍 24 | 💬 13
    *   **解读**: 用户呼吁 OpenCode Go 版本增加加密货币支付选项，显示了社区对多样化支付渠道的需求。

3.  **[BUG] Bun 1.3.14 在 Linux x86_64 上崩溃 (SIGILL) (#33890)**
    *   **链接**: [anomalyco/opencode Issue #33890](https://github.com/anomalyco/opencode/issues/33890)
    *   **热度**: 👍 5 | 💬 6
    *   **解读**: 用户报告在 AMD EPYC 处理器上运行 TUI 时出现段错误。这是一个严重的可用性阻碍，影响到服务器环境的部署。

4.  **[BUG] 服务端模式长时间运行导致内存泄漏 (#33213)**
    *   **链接**: [anomalyco/opencode Issue #33213](https://github.com/anomalyco/opencode/issues/33213)
    *   **热度**: 💬 5
    *   **解读**: `opencode serve` 模式下存在严重的内存堆积问题（高达 26GB+），直接影响了生产环境的稳定性，是急需修复的性能瓶颈。

5.  **[BUG] Windows ARM64 原生版 TUI 初始化失败 (#19130)**
    *   **链接**: [anomalyco/opencode Issue #19130](https://github.com/anomalyco/opencode/issues/19130)
    *   **热度**: 👍 5 | 💬 6
    *   **解读**: 随着 ARM 设备普及，Windows ARM64 原生支持的兼容性问题（如 `bun:ffi` 错误）日益凸显。

6.  **[BUG] OpenCode Desktop 占用大量 CPU 资源 (#34236)**
    *   **链接**: [anomalyco/opencode Issue #34236](https://github.com/anomalyco/opencode/issues/34236)
    *   **热度**: 👍 1 | 💬 3
    *   **解读**: 桌面端 CPU 占用过高（达 30%-50%），严重影响开发体验，需关注渲染进程或后台轮询逻辑。

7.  **[BUG] Desktop v1.16.0 错误转换 WSL 路径导致文件列表损坏 (#30895)**
    *   **链接**: [anomalyco/opencode Issue #30895](https://github.com/anomalyco/opencode/issues/30895)
    *   **热度**: 💬 6
    *   **解读**: Windows 桌面端与 WSL 服务端交互时的路径转换逻辑错误，是 WSL 用户的核心痛点。

8.  **[FEATURE] 无法调用 GitHub Copilot 企业版中的第三方模型 (#34030)**
    *   **链接**: [anomalyco/opencode Issue #34030](https://github.com/anomalyco/opencode/issues/34030)
    *   **热度**: 💬 4
    *   **解读**: 企业用户无法直接使用 Copilot 中配置的自定义模型，限制了 OpenCode 在企业环境中的模型适配能力。

9.  **[BUG] Desktop 渲染进程因丢失 Session 致命崩溃 (#32473)**
    *   **链接**: [anomalyco/opencode Issue #32473](https://github.com/anomalyco/opencode/issues/32473)
    *   **热度**: 💬 4
    *   **解读**: 当数据库中 Session 缺失时，桌面端直接崩溃而非降级处理，属于严重的鲁棒性问题。

10. **[BUG] 模型选择在应答后静默恢复 (#34207)**
    *   **链接**: [anomalyco/opencode Issue #34207](https://github.com/anomalyco/opencode/issues/34207)
    *   **热度**: 💬 4
    *   **解读**: 用户手动切换模型后，Agent 交互结束会自动恢复默认模型，导致后续指令使用了错误的模型，影响工作流一致性。

## 4. 重要 PR 进展

今日有多项功能性增强和关键修复合并或提交：

1.  **feat(tools): 增加智能体工具集 (#34273)**
    *   **链接**: [anomalyco/opencode PR #34273](https://github.com/anomalyco/opencode/pull/34273)
    *   **内容**: 新增 Git、格式化、诊断、内存/历史记录及 LSP Rename 等工具，并修复了 TUI spinner。极大丰富了 Agent 的自主操作能力。

2.  **feat(app): v2 WSL UI (#34233)**
    *   **链接**: [anomalyco/opencode PR #34233](https://github.com/anomalyco/opencode/pull/34233)
    *   **内容**: 重构 WSL 用户界面，旨在解决长期存在的路径映射和交互体验问题。

3.  **feat(tui): 实现会话重命名功能 (#34264)**
    *   **链接**: [anomalyco/opencode PR #34264](https://github.com/anomalyco/opencode/pull/34264)
    *   **内容**: 支持用户对 Session 进行重命名，完善了会话管理体验。

4.  **feat(tui): 接入撤销/重做及回退功能 (#34263)**
    *   **链接**: [anomalyco/opencode PR #34263](https://github.com/anomalyco/opencode/pull/34263)
    *   **内容**: 实现了 V2 会话的 `undo/redo/revert` API 接入，补齐了核心编辑功能。

5.  **fix(app): 保留附件文件路径 (#34234)**
    *   **链接**: [anomalyco/opencode PR #34234](https://github.com/anomalyco/opencode/pull/34234)
    *   **内容**: 修复了拖拽或粘贴附件时丢失文件路径的问题，允许 Agent 直接访问文件系统而非仅处理嵌入数据。

6.  **fix(tui): 支持 Wayland 系统的剪贴板读取 (#29881)**
    *   **链接**: [anomalyco/opencode PR #29881](https://github.com/anomalyco/opencode/pull/29881)
    *   **内容**: 修复了在 Wayland 环境下 Ctrl+V 无法读取文本的兼容性问题，提升了 Linux 桌面体验。

7.  **fix(agent): 修复模型 "inherit" 解析逻辑 (#33202)**
    *   **链接**: [anomalyco/opencode PR #33202](https://github.com/anomalyco/opencode/pull/33202)
    *   **内容**: 修复了自定义 `.md` 子智能体无法正确继承父级模型配置的问题。

8.  **fix(server): 拒绝处理外部目录提示 (#34256)**
    *   **链接**: [anomalyco/opencode PR #34256](https://github.com/anomalyco/opencode/pull/34256)
    *   **内容**: 解决了 WSL 和沙箱环境下的路径安全与混乱问题，防止访问工作区外的路径。

9.  **feat(opencode): 增加 Open WebUI provider (#18306)**
    *   **链接**: [anomalyco/opencode PR #18306](https://github.com/anomalyco/opencode/pull/18306)
    *   **内容**: 官方支持 Open WebUI 作为 Provider，扩展了自托管模型的使用场景。

10. **fix: 消息管道增加空内容守卫 (#34272)**
    *   **链接**: [anomalyco/opencode PR #34272](https://github.com/anomalyco/opencode/pull/34272)
    *   **内容**: 防止空消息内容导致的部分 Provider 报错，增强了多模型兼容性。

## 5. 功能需求趋势

*   **文档 AI 友好化**: 开发者希望 OpenCode 的文档能被 LLM 直接解析（`llms.txt`），表明用户倾向于将 OpenCode 集成到自动化工作流中。
*   **企业级模型集成**: 需求集中在 GitHub Copilot 企业版自定义模型、OpenRouter 及各种本地模型（GLM, Nemotron）的适配，显示出用户对“BYOM (Bring Your Own Model)”的高度依赖。
*   **资源与性能监控**: 高频出现的内存泄漏和 CPU 占用问题，表明 OpenCode 在长时间运行的后台服务模式下的资源管理亟待优化。
*   **跨平台体验一致性**: WSL 路径问题和 Windows ARM64 支持是核心诉求，用户要求在不同操作系统环境下享有无差别的使用体验。

## 6. 开发者关注点

*   **WSL 路径映射**: 开发者在 Windows Desktop + WSL Server 架构下频繁遭遇路径转换错误，导致工具调用失败和会话丢失。
*   **长会话稳定性**: 无论是服务端的内存泄漏还是客户端的冻结/崩溃，都指向长会话场景下的状态管理是目前的最大短板。
*   **模型行为一致性**: 用户关注模型切换后的状态保持、特定模型（如 GLM-5.1）的缓存失效以及思维链输出格式等问题，对多模型切换的流畅度要求较高。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-06-28)

## 1. 今日速览
今日 Qwen Code 发布了 **v0.19.2** 正式版，核心修复了 `web_fetch` 的 JSON 回退问题。社区热点集中在**后台自动化任务的可见性控制**与**跨设备状态同步**需求上，多位开发者呼吁支持项目级 Todo/Memory 持久化。此外，关于模型切换导致成本增加的 Bug 引起了广泛关注，建议用户升级前检查配置。

## 2. 版本发布
- **v0.19.2 (及 nightly 版本)**
  - **核心修复**：修复了核心模块中 `web_fetch` 无法正确回退到 JSON 处理的问题 ([PR #5660](https://github.com/QwenLM/qwen-code/pull/5660))。
  - **发布说明**：本次更新主要聚焦于稳定性修复，为后续 Mode B (`qwen serve`) 的生产环境部署打下基础。

## 3. 社区热点 Issues (Top 10)

1.  **[OPEN] 跨设备同步诉求：项目级 Todo 持久化** ([#5836](https://github.com/QwenLM/qwen-code/issues/5836))
    - **要点**：作者指出当前 Todos/Memories 仅存储在用户目录下，无法通过 Git 同步，导致换环境丢失状态。建议支持持久化到项目目录（如 `.qwen/todos`）。
    - **反响**：社区高度认同，认为这是多人协作和多环境开发的核心痛点。

2.  **[CLOSED] 严重成本问题：升级后自动切换高价模型** ([#5819](https://github.com/QwenLM/qwen-code/issues/5819))
    - **要点**：用户反馈升级版本后，`setting.json` 被自动修改为高价模型（DeepSeek-4 Pro），导致 API 费用异常消耗。同时指出新版本中文输出存在繁简转换问题。
    - **反响**：已关闭，但提醒开发者注意升级后的配置文件变更。

3.  **[OPEN] 自动化痛点：`/loop` 定时任务缺乏可见性** ([#5823](https://github.com/QwenLM/qwen-code/issues/5823))
    - **要点**：后台运行的 cron 任务静默执行，模型无法列出或停止已调度的任务，导致资源占用不可控。
    - **反响**：急需增加任务管理面板或查询命令。

4.  **[OPEN] 成本优化：Anthropic Provider 缓存未命中问题** ([#5942](https://github.com/QwenLM/qwen-code/issues/5942))
    - **要点**：分析指出 Qwen Code 在调用 Anthropic 接口时，因 Prompt 前缀不一致和断点位置问题导致 Cache Miss，增加了不必要的 API 成本。

5.  **[CLOSED] 高 CPU 占用：`cua-driver.exe` 后台占用** ([#5922](https://github.com/QwenLM/qwen-code/issues/5922))
    - **要点**：Windows 平台下 `cua-driver.exe` 在 Agent 闲置时仍占用较高 CPU，影响用户体验。

6.  **[OPEN] UI 交互缺陷：输出时滚动跳转** ([#5941](https://github.com/QwenLM/qwen-code/issues/5941))
    - **要点**：在大模型生成内容时，用户向上滚动查看历史会被强行跳回顶部，严重影响阅读体验。

7.  **[CLOSED] 架构进展：Mode B (`qwen serve`) 路线图** ([#4175](https://github.com/QwenLM/qwen-code/issues/4175))
    - **要点**：更新了 Mode B 的生产就绪路线图，Stage 1 Daemon 已合并，正在推进权限和会话复用功能。

8.  **[CLOSED] 功能增强：团队级 Memory 共享** ([#5867](https://github.com/QwenLM/qwen-code/issues/5867))
    - **要点**：提议在 Auto-memory 中增加 Git 共享的 "Team" 层级，实现团队知识库同步。

9.  **[CLOSED] 输出截断：默认 8K Token 限制问题** ([#5756](https://github.com/QwenLM/qwen-code/issues/5756))
    - **要点**：默认输出上限导致大文件生成被截断并陷入重试循环。Issue 追踪了相关修复进展。

10. **[OPEN] 浏览器集成提案：Chrome 扩展架构重构** ([#5626](https://github.com/QwenLM/qwen-code/issues/5626))
    - **要点**：提议基于 Daemon + WebUI 架构重构 Chrome 扩展，以复用现有工具链并提升浏览器控制能力。

## 4. 重要 PR 进展 (Top 10)

1.  **feat(channels): qwen tag — 多人在线协作代理** ([#5888](https://github.com/QwenLM/qwen-code/pull/5888))
    - **内容**：引入 `qwen tag` 概念，实现基于频道（钉钉优先）的常驻型多人协作 Agent。

2.  **feat(loop): 注入 `.qwen/loop.md` 任务文件** ([#5890](https://github.com/QwenLM/qwen-code/pull/5890))
    - **内容**：允许 `/loop` 命令在触发时读取持久化的 Markdown 任务文件，解决长时任务的状态保持问题。

3.  **feat(config): 支持项目级 Todo 持久化** ([#5928](https://github.com/QwenLM/qwen-code/pull/5928))
    - **内容**：新增 `todosDirectory` 配置，允许将 Todos 保存至项目目录，直接响应 Issue #5836。

4.  **fix(core): 修复 Shell 命令重复检查循环** ([#5944](https://github.com/QwenLM/qwen-code/pull/5944))
    - **内容**：针对反复执行 `git status` 等只读命令导致的死循环增加了保护机制。

5.  **feat(desktop): 桌面端语音听写功能** ([#5856](https://github.com/QwenLM/qwen-code/pull/5856))
    - **内容**：将 `/voice` 功能移植到桌面端，支持麦克风录音转文字。

6.  **refactor: 使用 Tree-sitter AST 替代字符串解析** ([#2652](https://github.com/QwenLM/qwen-code/pull/2652))
    - **内容**：重构核心解析逻辑，大幅提升对 Shell 命令解析的鲁棒性，这是一个长期维护的大型重构。

7.  **fix(core): 隔离 Anthropic SDK Abort 监听器泄漏** ([#5946](https://github.com/QwenLM/qwen-code/pull/5946))
    - **内容**：修复了 Anthropic SDK 在流式和非流式请求中的内存泄漏问题。

8.  **feat(web-shell): MCP 服务器资源浏览** ([#5879](https://github.com/QwenLM/qwen-code/pull/5879))
    - **内容**：在 Web Shell 的 `/mcp` 对话框中增加了资源列表浏览功能，提升前端交互体验。

9.  **feat(core): 可配置自动压缩阈值** ([#5868](https://github.com/QwenLM/qwen-code/pull/5868))
    - **内容**：允许用户自定义上下文自动压缩的触发阈值，优化长对话管理。

10. **fix(daemon): 修复 ACP 权限投票跨连接问题** ([#5912](https://github.com/QwenLM/qwen-code/pull/5912))
    - **内容**：解决了 Daemon 模式下权限请求无法跨连接响应的 Bug，提升了多端协作的稳定性。

## 5. 功能需求趋势
- **状态持久化与同步**：社区强烈需要 Todos、Plans、Memories 能够随项目代码一同管理，实现跨设备、跨团队成员的状态同步（#5836, #5867）。
- **后台任务可控性**：随着 `/loop` 和自动化任务的普及，用户急需任务的可视化列表、日志查看及停止能力（#5823, #5889）。
- **成本控制精细化**：用户对模型选择逻辑、Prompt 缓存命中率及 Token 计费非常敏感，期望有更透明的配置选项和防止误触高价模型的保护机制（#5819, #5942, #5597）。

## 6. 开发者关注点
- **意外成本消耗**：多个 Issue 反馈升级后模型自动切换或配置被篡改，建议开发者在升级逻辑中增加配置兼容性保护或变更提醒。
- **Windows 平台体验**：CPU 占用过高、UI 滚动异常等问题在 Windows 平台反馈较多，需重点关注桌面端性能优化。
- **长文本处理稳定性**：输出截断和编辑重试循环影响了代码生成的连贯性，Token 限制策略仍需优化。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 (2026-06-28)

## 1. 今日速览
今日项目开发节奏极快，核心开发者与社区贡献者合并了大量 PR，重点围绕 **v0.8.66 版本的发布准备**、**插件系统架构** 以及 **Token/缓存性能优化** 展开。尽管没有发布新版本，但已合入 v0.8.66 的 Release Ledger，标志着新版本即将定型。社区热议焦点依然集中在缓存命中率低导致 Token 消耗过高的问题上。

## 2. 版本发布
过去 24 小时内无正式版本发布，但已合并 v0.8.66 的发布账本（PR #3707），预计新版本将重点解决 Token 消耗、缓存命中率及 ACP 协议支持问题。

## 3. 社区热点 Issues (Top 10)

1.  **[#1177 输入缓存命中率过低](https://github.com/Hmbown/CodeWhale/issues/1177)**
    *   **热度：** 👍 0 | 💬 24
    *   **简评：** 社区最痛点的 Bug。用户反馈对比同类工具 DeepSeek-Reasonix，本工具的缓存命中率极低，导致成本显著上升。开发者正在 v0.8.66 中尝试通过 "cache-maximal" 模式修复。

2.  **[#1120 缓存命中问题持续存在](https://github.com/Hmbown/CodeWhale/issues/1120)**
    *   **热度：** 👍 0 | 💬 21
    *   **简评：** 与 #1177 类似，用户质疑 v0.8.17 修复后的效果，认为可能存在误报或未覆盖的场景，急需进一步优化缓存策略。

3.  **[#743 Token 消耗异常增大](https://github.com/Hmbown/CodeWhale/issues/743)**
    *   **热度：** 👍 0 | 💬 13
    *   **简评：** 用户报告半天消耗了 4 亿 Token，质疑请求过于密集或交互信息冗余，直指成本控制核心痛点。

4.  **[#3192 请求加入 agentclientprotocol/registry](https://github.com/Hmbown/CodeWhale/issues/3192)**
    *   **热度：** 👍 0 | 💬 12
    *   **简评：** 功能请求。希望 CodeWhale 被收录至 ACP 注册表，以便 Zed 等编辑器能更便捷地安装和使用，反映了社区对 IDE 集成的强需求。

5.  **[#3275 Agent 过度执行与自我问答循环](https://github.com/Hmbown/CodeWhale/issues/3275)**
    *   **热度：** 👍 0 | 💬 12
    *   **简评：** 可靠性问题。Agent 在未经用户确认的情况下自行扩展任务范围，进行“自问自答”，偏离用户意图，这是 Agentic 工具常见的控制流难题。

6.  **[#3205 Fleet 模型与 Loadout 自动选择逻辑](https://github.com/Hmbown/CodeWhale/issues/3205)**
    *   **热度：** 👍 0 | 💬 10
    *   **简评：** 架构设计讨论。旨在构建统一的模型选择器，为 TUI、CLI 和 Fleet workers 提供清晰的自动计算逻辑，属于底层核心重构。

7.  **[#2870 命令边界重构 EPIC](https://github.com/Hmbown/CodeWhale/issues/2870)**
    *   **热度：** 👍 0 | 💬 9
    *   **简评：** 代码质量治理。针对旧代码库的命令边界进行分阶段重构，旨在提升代码的可维护性和模块化程度。

8.  **[#2300 多模型兼容与 Provider 路由文档](https://github.com/Hmbown/CodeWhale/issues/2300)**
    *   **热度：** 👍 0 | 💬 7
    *   **简评：** 文档增强。请求改进关于 `provider=vllm` 和 `provider=openai` 的区别说明，这对本地部署和企业私有化部署用户至关重要。

9.  **[#3568 Plan 和 Agent 模式混淆](https://github.com/Hmbown/CodeWhale/issues/3568)**
    *   **热度：** 👍 1 | 💬 6
    *   **简评：** UX 问题。AI 无法正确感知模式切换，导致在 Plan 模式下执行了 Agent 模式的操作，用户体验受损。

10. **[#1747 缓存命中与 UI 可读性](https://github.com/Hmbown/CodeWhale/issues/1747)**
    *   **热度：** 👍 3 | 💬 4
    *   **简评：** 早期用户的反馈，指出 UI 追踪过程难以阅读，且缓存表现不如预期。

## 4. 重要 PR 进展 (Top 10)

1.  **[PR #3707 添加 v0.8.66 发布账本](https://github.com/Hmbown/CodeWhale/pull/3707)**
    *   **状态：** Closed
    *   **内容：** 记录了 v0.8.66 的候选功能、ACP 注册状态及未解决的发布阻碍，是下个版本的路线图文档。

2.  **[PR #3699 引入轻量级插件系统](https://github.com/Hmbown/CodeWhale/pull/3699)**
    *   **状态：** Closed
    *   **内容：** 新增插件架构，支持从文件系统发现和加载外部技能/MCP服务器，显著增强了工具的可扩展性。

3.  **[PR #3697 实现 Cache-maximal 上下文模式](https://github.com/Hmbown/CodeWhale/pull/3697)**
    *   **状态：** Closed
    *   **内容：** 针对 Issue #528 的核心修复。开启后将重新读取活跃文件全文而非总结，利用 DeepSeek V4 的低成本缓存特性，旨在解决缓存命中率低的问题。

4.  **[PR #3702 ACP 协议支持流式输出](https://github.com/Hmbown/CodeWhale/pull/3702)**
    *   **状态：** Closed
    *   **内容：** 修复了 ACP 适配器之前只能缓冲完整响应的问题，现在支持增量流式传输，极大改善了 Zed 等编辑器的集成体验。

5.  **[PR #3696 允许覆盖 Base Prompt](https://github.com/Hmbown/CodeWhale/pull/3696)**
    *   **状态：** Closed
    *   **内容：** 允许用户通过配置文件替换默认的系统提示词，满足了 Issue #3638 中提到的非编程场景（如文学创作）需求。

6.  **[PR #3705 工具错误后的 URL 降级建议](https://github.com/Hmbown/CodeWhale/pull/3705)**
    *   **状态：** Closed
    *   **内容：** 智能容错。当网络搜索失败时，利用错误信息中的域名建议 Agent 直接尝试访问 URL，提高了任务执行的鲁棒性。

7.  **[PR #3698 ACP 协议支持取消操作](https://github.com/Hmbown/CodeWhale/pull/3698)**
    *   **状态：** Closed
    *   **内容：** 实现了 `session/cancel` 的实时响应，解决了之前必须等待当前轮次结束才能处理取消请求的阻塞问题。

8.  **[PR #3703 工具调用错误的降级提示](https://github.com/Hmbown/CodeWhale/pull/3703)**
    *   **状态：** Closed
    *   **内容：** 在工具反复失败时向模型提供降级提示，避免 Agent 陷入死循环，优化了 Agent 的自主纠错能力。

9.  **[PR #3607 激活陈旧 Issue 清理流程](https://github.com/Hmbown/CodeWhale/pull/3607)**
    *   **状态：** Closed
    *   **内容：** 维护性 PR。引入了 `needs-info`、`stale` 等标签策略，自动清理长期未反馈的 Issue，保持 Issue 列表的整洁。

10. **[PR #3706 Registry 清理与文档验证](https://github.com/Hmbown/CodeWhale/pull/3706)**
    *   **状态：** Closed
    *   **内容：** 配合 Issue #2870 的重构工作，完成了注册表清理和文档验证，确保代码架构演进的正确性。

## 5. 功能需求趋势
*   **成本控制优先：** 大量 Issue 与 PR 聚焦于 Token 消耗和缓存命中率。随着 DeepSeek V4 模型特性被深入挖掘，"以空间换时间"（利用大上下文缓存）成为主流优化方向。
*   **IDE 与协议集成：** 社区对支持 ACP（Agent Client Protocol）表现出浓厚兴趣，渴望将 CodeWhale 作为后端集成到 Zed 等现代编辑器中。
*   **非编程场景拓展：** 用户开始尝试将工具用于写作、知识管理等非代码场景，促使开发者解耦硬编码的 Prompt，提供更高的自定义自由度。

## 6. 开发者关注点
*   **缓存机制有效性：** 开发者正试图通过底层架构调整（如 PR #3697）彻底解决缓存未命中导致的额外成本，这是当前最大的技术债。
*   **Agent 自主性边界：** 针对 Agent "自作主张" 的问题（Issue #3275），开发者正在探索如何平衡 Agent 的自主执行能力与用户的控制权。
*   **性能与延迟：** 有开发者提出使用 Rust 重写运行时以降低延迟（Issue #3541），表明 Node.js 运行时的开销已开始被部分高级用户感知。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*