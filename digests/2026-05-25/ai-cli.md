# AI CLI 工具社区动态日报 2026-05-25

> 生成时间: 2026-05-25 04:05 UTC | 覆盖工具: 8 个

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

# AI CLI 工具生态横向对比分析报告 (2026-05-25)

## 1. 生态全景
当前 AI CLI 工具正处于从"辅助编程"向"自主代理"转型的关键深水区。头部工具纷纷强化 Agent 的自主执行能力与长时任务支持，但随之而来的**安全边界控制**与**操作可逆性**成为社区最大的焦虑源头。同时，多模型适配、跨平台 UI 稳定性以及 Token 成本透明度，构成了当下开发者体验的核心三角。

## 2. 各工具活跃度对比

| 工具名称 | Issues 热度 | PR 活跃度 | 版本发布 | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 🔥 极高 (严重事故引发讨论) | 中 (侧重安全插件与文档) | 无 | 安全事故、权限控制、数据丢失 |
| **OpenAI Codex** | 🔥 高 (认证与回滚需求) | 高 (TUI 体验优化) | 无 | Review Story、认证故障、回滚机制 |
| **Gemini CLI** | 🔥 高 (稳定性痛点) | 极高 (核心机制修复) | 无 | 挂起修复、超时控制、安全防御 |
| **GitHub Copilot CLI** | 中 (UI 细节) | 低 (无公开 PR) | **3个版本** (密集修复) | 输入法兼容、终端渲染、扩展 API |
| **Kimi Code CLI** | 低 (仅 1 条生态兼容) | 高 (ACP 协议增强) | 无 | ACP 协议、跨平台换行符、生态兼容 |
| **OpenCode** | 🔥 高 (模型适配与计费) | 高 (工具调用修复) | 无 | 模型适配、性价比、工具调用崩溃 |
| **Qwen Code** | 中 (架构规划) | 极高 (Daemon 模式落地) | 1 个 Nightly | 守护进程、VSCode 兼容、防休眠 |
| **DeepSeek TUI** | 高 (品牌重塑) | 高 (权限与 UI 重构) | **3个版本** (品牌升级) | 品牌重塑、权限路由、取消恢复 |

> **注**：Issues 热度基于报告中提及的 Top Issues 反馈量与严重程度评估；PR 活跃度基于重要 PR 的数量与质量评估。

## 3. 共同关注的功能方向

### 3.1 安全护栏与操作可逆性
*   **涉及工具**：Claude Code, Gemini CLI, DeepSeek TUI (CodeWhale)
*   **具体诉求**：Claude Code 发生 Agent 误删仓库事故引发行业震动，社区强烈呼吁对高风险命令（如 `rm`, `gh repo`）实施二次确认或沙箱机制。Gemini CLI 引入了自定义安全检查器，DeepSeek TUI 则在构建基于类型的权限路由系统。开发者不再满足于"能用"，更关注"敢用"。

### 3.2 会话持久化与后台任务能力
*   **涉及工具**：OpenAI Codex, Qwen Code, Gemini CLI, Kimi Code CLI
*   **具体诉求**：OpenAI Codex 社区强烈请求 `/rewind` 功能以撤销代码变更；Qwen Code 大力推进 Mode B (Daemon Mode) 以支持长时间后台任务；Gemini CLI 和 Kimi CLI 都在修复会话恢复与历史重放问题。这表明 CLI 正在从"短对话工具"向"长期运行的后台助手"演进。

### 3.3 跨平台与终端 UI 兼容性
*   **涉及工具**：GitHub Copilot CLI, OpenAI Codex, Claude Code, DeepSeek TUI
*   **具体诉求**：无论是 GitHub Copilot 的中文输入法错位、DeepSeek TUI 的 Windows 启动卡死，还是 Claude Code 的 macOS 权限失效，终端渲染和系统级兼容性仍是困扰所有 CLI 工具的顽疾。

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **激进执行** | 追求极致效率的高级开发者 | 深度集成 Anthropic 模型，Agent 自主权极高，但安全滞后。 |
| **OpenAI Codex** | **交互体验** | VS Code 用户 & 审查团队 | 独创 "Review Story" 叙事化审查，TUI 深度集成 Vim 模式。 |
| **Gemini CLI** | **企业级安全** | 企业开发 & 复杂工程 | 强调 AST 级理解、外部安全检查器集成，架构偏向工程化与可控性。 |
| **Copilot CLI** | **生态集成** | GitHub 生态用户 | 强绑定 VS Code 与 GitHub，版本迭代快，注重 IDE 与终端的一致性。 |
| **Kimi Code CLI** | **协议集成** | Agent 开发者 | 核心 ACP (Agent Communication Protocol) 支持，侧重作为被调用的后端能力。 |
| **OpenCode** | **模型聚合** | 多模型尝鲜者 | 极速跟进最新模型 (GPT-5, Kimi K2, DeepSeek V4)，侧重性价比与模型选择自由度。 |
| **Qwen Code** | **全栈自动化** | 自动化脚本开发者 | 率先落地 Daemon Mode (守护进程)，支持跨客户端同步与防系统休眠。 |
| **DeepSeek TUI** | **终端原生** | 终端重度用户 | 品牌 重塑为 CodeWhale，专注 TUI 交互细节（如语音输入、权限策略路由）。 |

## 5. 社区热度与成熟度

*   **成熟稳定期**：**GitHub Copilot CLI** 与 **DeepSeek TUI**。两者均发布了稳定版本，前者密集修复 UI 细节，后者完成了品牌重塑与核心权限系统构建，显示出工程上的成熟度。
*   **快速迭代期**：**Qwen Code** 与 **Gemini CLI**。Qwen Code 正在攻克守护进程这一核心架构升级；Gemini CLI 提交了大量关于超时控制、死循环保护的核心修复，处于功能补全的关键期。
*   **高风险舆论期**：**Claude Code**。因删库事故与权限 Bug，社区处于焦虑状态，虽然贡献活跃（安全插件），但对官方信任度有所下降，急需官方回应安全机制。
*   **功能探索期**：**OpenCode**。社区讨论集中在模型适配的 Bug 与价格策略，显示其作为聚合平台正处于快速集成新模型但稳定性欠佳的阶段。

## 6. 值得关注的趋势信号

1.  **"删库跑路"风险倒逼安全架构升级**：Claude Code 的删库事件是一个行业信号。未来的 CLI 工具必须内置"沙箱机制"或"操作保险箱"，简单的 `yes/no` 确认已无法满足需求，基于 AST 的静态分析拦截与基于策略的权限路由将成为标配。
2.  **CLI 正在后台化**：Qwen Code 的 Mode B、Gemini CLI 的超时配置、防止系统休眠等特性表明，CLI 不再仅仅是交互式 Shell，正在演变为可长时间运行的守护进程。这意味着进程管理、资源回收、断点续传能力的竞争将加剧。
3.  **Token 经济学成为显学**：OpenCode 社区对订阅额度的敏感度、Qwen Code 对 Token 统计的需求，反映出开发者对成本的关注已从"大概多少"转向"精确控制"。未来的 CLI 工具需要提供类似"电表"的实时用量反馈。
4.  **协议层竞争初现端倪**：Kimi CLI 专注 ACP 协议支持，意味着 CLI 工具正在寻求被其他 Agent 调用的标准化接口。CLI 可能成为 AI 自动化链路中的一个"节点"，而非仅仅是终点工具。

**对开发者的建议**：当前阶段，在生产环境使用 AI CLI（尤其是自主执行模式）时，务必配置好 Git 保护或虚拟环境，不要盲目信任 AI 的文件操作能力；同时，关注 Qwen Code 和 Gemini CLI 在后台模式与安全机制上的进展，这代表了下一阶段的工程化方向。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告 (2026-05-25)

基于 `anthropics/skills` 官方仓库数据，分析社区最关注的 Skills 动态与发展趋势。

## 1. 热门 Skills 排行

以下 Skills 在社区中引发了较高关注（基于列表热度与功能影响力排序）：

1.  **document-typography (PR #514)**
    *   **功能**：解决 AI 生成文档中的排版痛点，如孤行、寡妇行及编号错位问题。
    *   **热点**：直击 AI 生成内容“可用但难看”的痛点，提升了文档生成的专业度。
    *   **状态**：[OPEN]
    *   **链接**：[PR #514](https://github.com/anthropics/skills/pull/514)

2.  **ODT Skill (PR #486)**
    *   **功能**：支持 OpenDocument 格式 (.odt, .ods) 的创建、填充与 HTML 转换。
    *   **热点**：填补了开源办公文档格式的支持空白，适配 LibreOffice 等场景。
    *   **状态**：[OPEN]
    *   **链接**：[PR #486](https://github.com/anthropics/skills/pull/486)

3.  **skill-quality-analyzer & skill-security-analyzer (PR #83)**
    *   **功能**：两个“元技能”，分别用于分析 Skills 的质量和检测潜在安全风险。
    *   **热点**：随着 Skills 数量激增，质量评估与安全审计成为刚需，属于生态建设的基础设施。
    *   **状态**：[OPEN]
    *   **链接**：[PR #83](https://github.com/anthropics/skills/pull/83)

4.  **Frontend-design Improvement (PR #210)**
    *   **功能**：重写前端设计技能，提升指令的清晰度与可执行性。
    *   **热点**：针对现有高频技能的优化，反映了社区对“可用性”与“精确控制”的追求。
    *   **状态**：[OPEN]
    *   **链接**：[PR #210](https://github.com/anthropics/skills/pull/210)

5.  **AURELION Skill Suite (PR #444)**
    *   **功能**：一套包含核心、顾问、代理和记忆的认知框架，用于结构化知识管理。
    *   **热点**：引入了“持久记忆”和“结构化思考”概念，探索 AI 自主性与上下文保持能力。
    *   **状态**：[OPEN]
    *   **链接**：[PR #444](https://github.com/anthropics/skills/pull/444)

6.  **ServiceNow Platform Skill (PR #568)**
    *   **功能**：覆盖 ServiceNow 平台的脚本、架构、安全及运维全流程。
    *   **热点**：企业级 ITSM 领域的强力补充，显示了 Skills 向垂直企业场景渗透。
    *   **状态**：[OPEN]
    *   **链接**：[PR #568](https://github.com/anthropics/skills/pull/568)

7.  **Testing Patterns (PR #723)**
    *   **功能**：覆盖测试哲学、单元测试、React 组件测试等全套测试模式。
    *   **热点**：测试是开发核心环节，该技能补全了代码生成后的质量保障拼图。
    *   **状态**：[OPEN]
    *   **链接**：[PR #723](https://github.com/anthropics/skills/pull/723)

8.  **n8n-builder & n8n-debugger (PR #190)**
    *   **功能**：自动化工作流 n8n 的构建与调试专家技能。
    *   **热点**：顺应 Agent 与自动化工具结合的趋势，降低了工作流编排门槛。
    *   **状态**：[OPEN]
    *   **链接**：[PR #190](https://github.com/anthropics/skills/pull/190)

---

## 2. 社区需求趋势

从 Issues 讨论中提炼出以下核心诉求方向：

*   **企业级协作与共享 (Top Priority)**
    *   **Issue #228** (13条评论) 强烈呼吁支持组织内 Skills 共享。目前依赖手动下载上传的方式效率低下，企业用户急需统一的技能库管理方案。
    *   相关 Issue：Skills 的权限管理与安全边界（Issue #492 提出的命名空间冒充风险）。

*   **跨平台与底层兼容性**
    *   **Issue #29**：对 AWS Bedrock 的支持需求。
    *   **Issue #1099 / #1050**：Windows 平台的兼容性修复被多次提及，显示大量开发者使用 Windows 环境进行 Skills 开发与运行。

*   **生态健壮性与工具链**
    *   **Issue #556**：评估工具 `run_eval.py` 存在触发失败问题，影响开发者验证 Skills 效果。
    *   **Issue #202**：呼吁更新 `skill-creator` 最佳实践，表明社区需要更标准化的 Skill 开发指南。

*   **协议互通 (MCP Integration)**
    *   **Issue #16**：希望将 Skills 暴露为 MCP (Model Context Protocol) 端点，实现更通用的 API 化调用，这代表了 Skills 从“Prompt 工程”向“标准化工具接口”演进的技术趋势。

---

## 3. 高潜力待合并 Skills

以下 PR 处于 Open 状态但具有较高的实用价值或活跃度，有望近期落地：

1.  **SAP-RPT-1-OSS Predictor (PR #181)**
    *   **理由**：结合 SAP 开源大模型进行预测分析，针对特定企业数据场景，具有较高的商业价值，且符合企业级应用趋势。
    *   **链接**：[PR #181](https://github.com/anthropics/skills/pull/181)

2.  **Document Typography (PR #514)**
    *   **理由**：解决了通用文档生成的顽疾，适用面广，通用性强，是典型的“小切口大收益”改进。
    *   **链接**：[PR #514](https://github.com/anthropics/skills/pull/514)

3.  **Skill Analyzers (PR #83)**
    *   **理由**：作为“元工具”，它对仓库维护者审核和管理 Skills 至关重要，极有可能被官方采纳以提升入库质量。
    *   **链接**：[PR #83](https://github.com/anthropics/skills/pull/83)

4.  **Windows Compatibility Fixes (PR #1099 / #1050)**
    *   **理由**：虽然属于 Bug 修复，但解决了 Windows 平台无法运行评估脚本的关键阻断问题，合并优先级应较高。
    *   **链接**：[PR #1099](https://github.com/anthropics/skills/pull/1099)

---

## 4. Skills 生态洞察

**当前社区在 Skills 层面最集中的诉求是：从“个人工具”向“企业级可共享、可治理、可互操作的标准化资产”转型。**

---

# Claude Code 社区动态日报 (2026-05-25)

## 1. 今日速览
过去 24 小时内，Claude Code 社区主要聚焦于**安全性与稳定性问题**。用户报告了一起严重的 Agent 误删代码仓库事件，引发了对工具调用安全边界的广泛担忧；同时，macOS 平台的权限模式无法开启以及会话记录静默删除等高危 Bug 仍居高热不下。社区贡献方面，新增了凭证保护插件 PR，且有贡献者提交了大量故障排除文档，显著提升了社区自助解决问题的能力。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues

以下筛选出 10 个最具影响力的 Issue，涵盖了严重 Bug、安全隐患及高频功能请求：

1.  **[Critical] Agent 误删用户主项目仓库** [#62091](https://github.com/anthropics/claude-code/issues/62091)
    *   **理由**：严重的安全事故。Agent 误解 `gh repo fork` 的重命名行为，导致用户数年工作的主项目仓库被删除。这引发了关于 AI Agent 权限控制和危险操作确认机制的激烈讨论。
    *   **社区反应**：用户极度担忧，呼吁加强对高风险 Bash 命令的拦截。

2.  **[Bug] macOS 无法启用“绕过权限”模式** [#61415](https://github.com/anthropics/claude-code/issues/61415)
    *   **理由**：高热度 Issue（23 条评论）。macOS Desktop 版本中，尝试启用“Bypass Permissions”模式会自动还原并报错，严重影响高级用户的操作效率。
    *   **社区反应**：标签已确认为 Bug，受影响用户众多。

3.  **[Bug] 会话记录静默删除，无警告且无法恢复** [#59248](https://github.com/anthropics/claude-code/issues/59248)
    *   **理由**：数据丢失问题。Claude Code 的静默清理机制会自动删除旧的工作区会话记录，导致用户无法恢复历史上下文。
    *   **社区反应**：用户对数据保留策略缺乏透明度表示不满。

4.  **[Bug] 升级计划陷入 void_invoice 死循环** [#54204](https://github.com/anthropics/claude-code/issues/54204)
    *   **理由**：支付阻塞问题。用户尝试从 Max 5x 升级到 Max 20x 时，服务器持续返回已取消的 PaymentIntent，导致付费流程卡死。
    *   **社区反应**：已标记为 `invalid` 但仍有大量用户反馈类似情况，急需官方修复。

5.  **[Feature] VS Code 扩展需支持 `/btw` 命令** [#37323](https://github.com/anthropics/claude-code/issues/37323)
    *   **理由**：高频需求（61 个赞）。CLI 支持的快速提问命令 `/btw` 在 VS Code 扩展中缺失，用户希望实现跨平台体验一致性。
    *   **社区反应**：广泛支持，希望尽快补齐功能短板。

6.  **[Bug] 插件外部 hooks.json 文件加载失败** [#16288](https://github.com/anthropics/claude-code/issues/16288)
    *   **理由**：开发者工具链核心问题。Plugin 引用的外部 hooks 配置无法被加载或执行，阻碍了复杂插件系统的构建。
    *   **社区反应**：已有复现步骤，等待官方修复。

7.  **[Bug] Jupyter Notebook 编辑未自动刷新** [#15379](https://github.com/anthropics/claude-code/issues/15379)
    *   **理由**：数据科学工作流痛点。Claude Code 修改 Jupyter 文件后，VS Code 编辑器不自动刷新，需手动重载，严重影响体验。
    *   **社区反应**：21 个赞，确认影响最新版本。

8.  **[Bug] 桌面端强制 1M Context 导致 Sonnet 无法使用** [#62114](https://github.com/anthropics/claude-code/issues/62114)
    *   **理由**：模型配置缺陷。Desktop 强制 Sonnet 使用 1M 上下文，若用户额度不足则直接报错，无法回退到标准 200k 模式。
    *   **社区反应**：新提出的 Issue，讨论了模型选择的灵活性限制。

9.  **[Bug] VS Code 终端间歇性渲染损坏** [#59915](https://github.com/anthropics/claude-code/issues/59915)
    *   **理由**：UI/UX 问题。在 VS Code 集成终端中输出内容偶尔乱码，需手动选择文本触发重绘。
    *   **社区反应**：37 个赞，表明受影响用户基数大。

10. **[Bug] Read 工具处理本地图片失败** [#60601](https://github.com/anthropics/claude-code/issues/60601)
    *   **理由**：多模态能力受损。所有本地图片读取均返回 400 错误，阻塞了涉及图像分析的工作流。

## 4. 重要 PR 进展

社区贡献活跃，主要集中在安全增强和文档完善：

1.  **[New Plugin] 凭证保护插件** [#62099](https://github.com/anthropics/claude-code/pull/62099)
    *   新增 `credential-guard` 插件，利用 PreToolUse 钩子扫描写入操作，防止硬编码凭证泄露到文件中，直接响应了安全风险需求。

2.  **[Proposal] CLI 与 Desktop 会话同步** [#61969](https://github.com/anthropics/claude-code/pull/61969)
    *   提案旨在同步 CLI 的会话历史到 Desktop 应用，解决 CLI 会话仅限本地存储、难以在图形界面回溯的问题。

3.  **[Docs] AskUserQuestion 回退检查点故障排除** [#61968](https://github.com/anthropics/claude-code/pull/61968)
    *   文档贡献，解释了 `AskUserQuestion` 回答不创建回退点的原因及变通方案。

4.  **[Docs] Tmux 环境下未授权消息故障排除** [#61966](https://github.com/anthropics/claude-code/pull/61966)
    *   针对 Tmux 会话中出现“幽灵消息”的问题，提供了原因分析和配置建议。

5.  **[Docs] SSH 远程会话插件损坏故障排除** [#61964](https://github.com/anthropics/claude-code/pull/61964)
    *   解决了 SSH 上传本地插件时因压缩包损坏导致的连接失败问题。

6.  **[Docs] 版本升级后模型 ID 无效故障排除** [#61708](https://github.com/anthropics/claude-code/pull/61708)
    *   针对更新后出现的 400 错误，分析了 AWS 区域配置与模型 ID 前缀不匹配的问题。

7.  **[Docs] 后台任务静默重复启动故障排除** [#61697](https://github.com/anthropics/claude-code/pull/61697)
    *   记录了上下文压缩导致任务元数据丢失进而引发重复启动的问题及修复思路。

8.  **[Docs] 统计缓存冻结故障排除** [#61702](https://github.com/anthropics/claude-code/pull/61702)
    *   解决 `stats-cache.json` 停止更新的问题，提出了缓存版本控制方案。

9.  **[Docs] WebFetch 结果泄露 system-reminder 故障排除** [#61696](https://github.com/anthropics/claude-code/pull/61696)
    *   针对 v2.1.150 版本回归问题，记录了 system-reminder 块泄露到 WebFetch 结果中的情况。

10. **[Fix] 修正 GitHub Workflow 触发词** [#62023](https://github.com/anthropics/claude-code/pull/62023)
    *   修复了 CI 中 `@claude` 触发词误匹配 `@claude-*` 插件名称的问题，使用词边界正则优化。

## 5. 功能需求趋势

*   **安全与控制**：近期 Agent 误删仓库事件使“安全操作护栏”成为焦点，社区迫切希望引入对高风险命令（如 `gh repo`、`rm`）的二次确认或沙盒机制。
*   **跨平台体验一致性**：VS Code 插件与 CLI 的功能割裂感仍存（如 `/btw` 命令、Jupyter 刷新），社区要求 Desktop、CLI 和 IDE 插件在功能和支持度上保持一致。
*   **上下文与内存管理**：会话记录丢失、上下文压缩导致的 Session Name 丢失、以及 CLAUDE.md 文件的父子目录继承排除问题，显示出用户对长期记忆和工作区状态保持的高度关注。

## 6. 开发者关注点

*   **插件与 Hook 系统稳定性**：开发者反馈外部 hooks 加载失败，以及 Hook 输入中缺少 `active_skill` 字段，限制了基于 Skill 的精细权限控制。
*   **Windows 平台兼容性**：UNC 路径不支持、内存泄漏、安装失败等问题频发，Windows 开发者的体验亟待优化。
*   **多模态处理**：图片处理工具频频报错（API 400），影响了依赖视觉能力的开发工作流。
*   **故障排除文档的价值**：今日大量 PR 为文档贡献，说明官方文档滞后于 Bug 修复速度，开发者目前严重依赖社区贡献的故障排除指南来解决日常问题。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-05-25)

## 1. 今日速览
今日 Codex 社区重点关注 **TUI 交互体验增强**与**会话稳定性修复**。开发团队提交了一系列关于“Review Story”功能的 PR，旨在通过生成式叙事帮助开发者审查代码变更。与此同时，社区讨论热度集中在认证故障和上下文窗口管理上，针对 Windows 平台的兼容性问题反馈依然占据相当比例。

## 2. 版本发布
过去 24 小时内无官方 Release 版本更新。

## 3. 社区热点 Issues (Top 10)

1.  **[CLOSED] [bug, auth] 手机号验证失效导致账户锁定**
    *   **链接**: [Issue #20161](https://github.com/openai/codex/issues/20161)
    *   **点评**: 本评论量最高的 Issue (158条)。用户反馈 SSO 登录时强制要求手机验证但无法收到验证码，导致账户不可用。此类认证阻断问题严重影响用户体验，需优先关注。

2.  **[OPEN] [enhancement, TUI] 请求增加 `/rewind` 检查点恢复功能**
    *   **链接**: [Issue #11626](https://github.com/openai/codex/issues/11626)
    *   **点评**: 社区高度期待的功能 (👍 141)。用户希望 CLI 能像 Git 一样，不仅回滚对话，还能自动撤销 Codex 应用的代码修改。这反映了开发者对 Agent 操作“可逆性”的强需求。

3.  **[OPEN] [bug, context] 模型上下文窗口耗尽错误**
    *   **链接**: [Issue #9046](https://github.com/openai/codex/issues/9046)
    *   **点评**: 即使在对话初期也会遇到 Context Window 溢出问题。这暴露了当前上下文压缩或管理策略可能存在边界情况 Bug。

4.  **[OPEN] [bug, auth] ChatGPT 要求验证手机号但未发送验证码**
    *   **链接**: [Issue #20320](https://github.com/openai/codex/issues/20320)
    *   **点评**: 与 Issue #20161 类似，也是认证流程阻塞问题，影响了 Pro 付费用户的正常升级与使用。

5.  **[OPEN] [bug, app, automations] Desktop 频繁心跳导致界面卡顿**
    *   **链接**: [Issue #19563](https://github.com/openai/codex/issues/19563)
    *   **点评**: 涉及 Desktop 应用与后端自动化连接的稳定性，多个心跳任务同时运行时会导致 UI 响应迟钝，影响工作流效率。

6.  **[OPEN] [bug, windows-os] Windows GUI 启动失败 (SQLite 初始化错误)**
    *   **链接**: [Issue #23848](https://github.com/openai/codex/issues/23848)
    *   **点评**: 提供了具体的修复方案。Codex 在 Windows 上因无法初始化本地 SQLite 数据库导致 GUI 崩溃，这是 Windows 用户的常见痛点。

7.  **[OPEN] [bug, skills] Desktop 安装后 Skills 列表显示大量无关应用**
    *   **链接**: [Issue #24361](https://github.com/openai/codex/issues/24361)
    *   **点评**: 安装 Desktop 后，Skills 列表被数千个不可用的生态应用（如韩语本地生活应用）污染，严重影响功能发现。

8.  **[OPEN] [enhancement] 功能请求：在 Desktop 应用中显示本地 CLI 会话**
    *   **链接**: [Issue #24197](https://github.com/openai/codex/issues/24197)
    *   **点评**: 开发者希望打通 CLI 与 Desktop 的边界，能在 GUI 中管理和查看纯 CLI 产生的会话历史，实现跨端无缝体验。

9.  **[OPEN] [bug, plan] 规划模式下 Agent 陷入死循环消耗配额**
    *   **链接**: [Issue #23164](https://github.com/openai/codex/issues/23164)
    *   **点评**: Codex 在 Planning Mode 下因未正确调用提问工具而陷入循环，导致用户配额被意外耗尽，严重影响计费公平性和信任度。

10. **[OPEN] [bug, extension] VS Code 扩展未显示上下文使用率指示器**
    *   **链接**: [Issue #24272](https://github.com/openai/codex/issues/24272)
    *   **点评**: 上下文窗口占用情况对开发者调整策略至关重要，扩展端缺失该指标降低了开发的可观测性。

## 4. 重要 PR 进展 (Top 10)

1.  **[OPEN] feat(review-story): 添加交互式代码审查叙事界面**
    *   **链接**: [PR #24358](https://github.com/openai/codex/pull/24358)
    *   **内容**: 引入“Review Story”概念，将枯燥的 Diff 转化为有序的、带锚点的叙事性文档，帮助开发者像读故事一样审查代码变更，这是 Codex 辅助代码审查体验的重大创新。

2.  **[OPEN] Add auto-compaction death-loop guard (自动压缩死循环保护)**
    *   **链接**: [PR #23585](https://github.com/openai/codex/pull/23585)
    *   **内容**: 防止 Agent 在上下文压缩后仍处于高占用状态，导致不断触发自动压缩的死循环，直接回应了社区对稳定性和资源占用的担忧。

3.  **[OPEN] feat(tui): add vim text object bindings**
    *   **链接**: [PR #24382](https://github.com/openai/codex/pull/24382)
    *   **内容**: 为 TUI 的 Vim 模式增加了 `ciw`, `daw` 等文本对象操作，大幅提升 Vim 用户的编辑效率。

4.  **[OPEN] Prevent invalid images from poisoning resumed threads**
    *   **链接**: [PR #23494](https://github.com/openai/codex/pull/23494) (及相关 PR #24376, #24169)
    *   **内容**: 修复了一个顽固 Bug：无效的图片输入会污染会话历史，导致恢复会话时反复报错。该系列 PR 通过拦截无效 Base64 图片和清理历史记录解决了此问题。

5.  **[OPEN] feat(review-story): generate stories progressively**
    *   **链接**: [PR #24353](https://github.com/openai/codex/pull/24353)
    *   **内容**: 优化 Review Story 的生成体验，允许先展示大纲，后台生成详细说明，提升交互流畅度。

6.  **[OPEN] Add doctor thread inventory audit**
    *   **链接**: [PR #24305](https://github.com/openai/codex/pull/24305)
    *   **内容**: 增强诊断工具 `doctor` 功能，用于比对 SQLite 数据库与磁盘上的 JSONL 状态，帮助用户找回“丢失”的会话。

7.  **[OPEN] feat(tui): add transcript search**
    *   **链接**: [PR #23539](https://github.com/openai/codex/pull/23539)
    *   **内容**: 为 TUI 增加会话记录搜索功能 (Ctrl+F)，解决长对话难以定位的问题，提升 CLI 工具的可用性。

8.  **[OPEN] Respect hook trust bypass during TUI startup**
    *   **链接**: [PR #24317](https://github.com/openai/codex/pull/24317)
    *   **内容**: 修复 `--dangerously-bypass-hook-trust` 标志在 TUI 启动时未生效的问题，这对 CI/CD 或自动化脚本场景至关重要。

9.  **[OPEN] [codex] add compaction metadata to turn headers**
    *   **链接**: [PR #24368](https://github.com/openai/codex/pull/24368)
    *   **内容**: 在会话元数据中增加压缩记录标识，提升了上下文管理的透明度，有助于调试复杂的上下文问题。

10. **[OPEN] fix(tui): avoid modifyOtherKeys for unknown tmux formats**
    *   **链接**: [PR #24371](https://github.com/openai/codex/pull/24371)
    *   **内容**: 修复了在特定 tmux 配置下（尤其是 iTerm2）按键映射错乱的问题，提升终端兼容性。

## 5. 功能需求趋势
*   **会话可逆性与回滚**: 开发者强烈需要类似 Git 的细粒度回滚功能，不仅是聊天记录，更包括代码文件的原子性撤销。
*   **跨平台体验一致性**: Issues 集中在 Windows 平台的路径处理、权限和 GUI 启动问题，显示 Windows 端的适配仍需加强。
*   **IDE 与 CLI 融合**: 用户希望 CLI 和 Desktop App 的会话能互通，反映出多终端、多入口协同工作的趋势。
*   **上下文可见性**: 无论是 CLI 还是 VS Code 扩展，用户都迫切需要直观的上下文窗口占用指标，以便主动管理 Token 消耗。

## 6. 开发者关注点
*   **认证流程稳定性**: 近期 Issues 显示手机号验证环节成为高频故障点，建议 OpenAI 审查其短信网关或验证逻辑。
*   **资源消耗与死循环**: Agent 在规划或压缩阶段陷入死循环导致配额浪费，是开发者极其痛恨的问题，需更多熔断机制。
*   **外部工具集成故障**: Google Sheets、GitHub CLI 等外部工具的连接与权限问题频发，说明 Tool Calling 的鲁棒性仍有提升空间。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-05-25)

## 1. 今日速览
今日 Gemini CLI 社区活跃度较高，重点集中在提升 Agent 自主性的稳定性与安全性。核心开发团队与社区贡献者提交了多项关键修复，包括解决 Shell 执行卡死、模型输出异常字符过滤以及防止历史上下文丢失等重要问题。同时，Issues 列表显示用户对 Agent 挂起、工具调用限制及安全防护机制的关注度显著上升。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues (Top 10)

1.  **[P1] Generalist agent hangs (Agent 挂起问题)**
    *   **链接**: [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
    *   **看点**: 严重级 Bug。当 CLI 调用通用子 Agent（Generalist agent）时会出现永久挂起，即使简单的文件夹创建操作也会受阻。社区反馈强烈（👍 8），目前状态为 "need-retesting"，是影响用户体验的核心阻碍。

2.  **[P1] Shell command execution gets stuck (Shell 命令执行卡死)**
    *   **链接**: [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
    *   **看点**: 严重级 Bug。命令执行完毕后 CLI 仍显示 "Waiting input" 导致进程挂起。这直接影响了自动化脚本的稳定性，是开发者反馈的高频痛点。

3.  **[P1] Robust component level evaluations (组件级行为评估)**
    *   **链接**: [#24353](https://github.com/google-gemini/gemini-cli/issues/24353)
    *   **看点**: Epic 级需求。旨在建立更健壮的行为评估测试体系，确保 Agent 行为符合预期。这标志着项目正从功能堆砌向质量保障阶段过渡。

4.  **[P2] Strengthen prompt-injection defenses (加强提示词注入防御)**
    *   **链接**: [#23114](https://github.com/google-gemini/gemini-cli/issues/23114)
    *   **看点**: 安全性增强。提议在读取项目内容（如 README）时增强防御，防止恶意文件内容劫持 Agent 意图。对于在不可信代码库运行的场景至关重要。

5.  **[P2] Assess AST-aware file tools (AST 感知文件工具评估)**
    *   **链接**: [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
    *   **看点**: 架构优化。探讨引入 AST（抽象语法树）感知能力，以减少 Token 消耗并提高代码读取精确度，这是提升 Agent 编程能力的重要方向。

6.  **[P1] Subagent recovery after MAX_TURNS (子 Agent 达到轮次上限误报成功)**
    *   **链接**: [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
    *   **看点**: 可靠性问题。子 Agent 触发最大轮次限制中断后，错误地报告为 "GOAL success"，掩盖了任务失败的事实，极易导致隐蔽的逻辑错误。

7.  **[P2] Auto Memory logging and redaction (自动记忆日志与脱敏)**
    *   **链接**: [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)
    *   **看点**: 隐私安全。指出当前自动记忆功能在将内容发送给模型前未完全脱敏敏感信息，存在泄露风险。

8.  **[P2] Gemini does not use skills and sub-agents enough (Agent 不主动使用技能)**
    *   **链接**: [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
    *   **看点**: 智能性反馈。用户指出即便有相关描述，Agent 也极少主动调用自定义 Skills 或 Sub-agents，需显式指令才触发，反映了路由策略的不足。

9.  **[P2] 400 error with > 128 tools (工具数量超限报错)**
    *   **链接**: [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
    *   **看点**: 扩展性瓶颈。当可用工具超过 128 个时 CLI 会报 400 错误，限制了复杂环境下的工具集成能力。

10. **[P1] Browser subagent fails in Wayland (浏览器子 Agent 在 Wayland 下失败)**
    *   **链接**: [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
    *   **看点**: 环境兼容性。Browser Agent 在 Wayland 图形环境下运行失败，影响 Linux 用户的 Web 自动化功能。

## 4. 重要 PR 进展 (Top 10)

1.  **feat: Add configurable per-tool-call timeout (新增工具调用超时配置)**
    *   **链接**: [#27423](https://github.com/google-gemini/gemini-cli/pull/27423)
    *   **内容**: 引入 `tools.callTimeout` 设置，允许用户限制单个工具调用的最长执行时间，解决了 Shell 命令无限期运行的问题。

2.  **fix: Prevent dropping valid model turns (防止丢弃有效的模型对话轮次)**
    *   **链接**: [#27170](https://github.com/google-gemini/gemini-cli/pull/27170)
    *   **内容**: 修复了当模型返回 `functionCall` 伴随空文本时，CLI 错误地丢弃整个对话轮次导致 API 400 错误的问题。

3.  **fix: Exclude .gemini/tmp/ from agent search (排除临时目录搜索)**
    *   **链接**: [#27174](https://github.com/google-gemini/gemini-cli/pull/27174)
    *   **内容**: 修复 Agent 递归搜索自身会话日志文件导致性能下降的问题，默认排除 `.gemini/tmp/` 目录。

4.  **fix: Strip CJK characters from model thought (过滤模型思考过程中的异常字符)**
    *   **链接**: [#27349](https://github.com/google-gemini/gemini-cli/pull/27349)
    *   **内容**: 修复模型在英文语境下偶尔输出中日韩（CJK）字符的问题，提升了输出的一致性。

5.  **fix: Wrap Ajv validate() in try/catch (Ajv 校验崩溃修复)**
    *   **链接**: [#27348](https://github.com/google-gemini/gemini-cli/pull/27348)
    *   **内容**: 针对 LLM 返回异常参数结构导致 Ajv 校验器崩溃的问题添加了 try/catch 保护，增强了系统鲁棒性。

6.  **fix: Prevent model fabrication for binary content (防止二进制内容导致的模型幻觉)**
    *   **链接**: [#27412](https://github.com/google-gemini/gemini-cli/pull/27412)
    *   **内容**: 当读取 PDF 等二进制文件时，注入明确的提示防止模型捏造内容，确保模型能正确处理无法识别的二进制数据。

7.  **feat: Support for custom external safety checkers (支持自定义外部安全检查器)**
    *   **链接**: [#27186](https://github.com/google-gemini/gemini-cli/pull/27186)
    *   **内容**: 企业级功能增强，允许组织集成自定义的安全策略和合规检查可执行文件到 CLI 流程中。

8.  **fix: "gemini --resume crash" handle EBADF error (恢复会话崩溃修复)**
    *   **链接**: [#27371](https://github.com/google-gemini/gemini-cli/pull/27371)
    *   **内容**: 修复使用 `--resume` 恢复会话时因 PTY 文件描述符失效导致的 `ioctl(2) failed, EBADF` 崩溃。

9.  **fix: Add command validation (增加命令校验)**
    *   **链接**: [#27347](https://github.com/google-gemini/gemini-cli/pull/27347)
    *   **内容**: 防止自然语言输入被错误地保存为 Shell 命令配置，避免了后续执行错误。

10. **feat: Add ephemeral session mode (新增临时会话模式)**
    *   **链接**: [#27365](https://github.com/google-gemini/gemini-cli/pull/27365)
    *   **内容**: 添加 `--ephemeral` 标志，支持无日志残留的一次性任务执行，适合数据标注等自动化场景。

## 5. 功能需求趋势
*   **稳定性与容错性**: 社区对 Agent 长时间运行的稳定性提出了更高要求，包括子 Agent 的错误恢复、超时控制以及避免挂起。
*   **代码理解深度**: 越来越多的需求倾向于让 Agent 具备 AST（抽象语法树）级的代码理解能力，而非仅依赖文本匹配，以提升代码修改的精准度。
*   **安全与合规**: 企业级安全特性需求上升，包括 Prompt 注入防御、敏感信息脱敏以及自定义安全检查器的集成。

## 6. 开发者关注点
*   **执行阻塞**: 开发者普遍反馈 CLI 在执行 Shell 命令或调用子 Agent 时容易出现"假死"或挂起现象，严重影响了 CI/CD 流程和日常开发效率。
*   **工具调用策略**: 模型未能有效识别并调用已配置的 Skills/Sub-agents，导致需要频繁的人工干预或显式指令，降低了自动化的流畅度。
*   **环境兼容性**: 在特定环境（如 Wayland、非 UTF-8 环境、Termux 触控设备）下的输入输出处理和稳定性仍是主要痛点。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-05-25)

## 1. 今日速览
过去 24 小时内，GitHub Copilot CLI 团队密集发布了 v1.0.53 至 v1.0.55 三个版本，重点修复了单可执行应用程序（SEA）模式下的扩展启动故障，并解决了多行提示显示和 Shell 会话挂起等稳定性问题。社区方面，终端渲染兼容性（如中文输入法、滚动条适配）和 Agent/Plugin 生态的扩展能力（如子代理工具声明）成为讨论焦点。

## 2. 版本发布
近期发布频率较高，主要更新内容如下：

- **[v1.0.55-0](https://github.com/github/copilot-cli/releases/tag/v1.0.55-0)**
  - **修复**: 解决了 CLI 作为单可执行应用程序运行时扩展无法正确启动的问题。

- **[v1.0.54](https://github.com/github/copilot-cli/releases/tag/v1.0.54)**
  - **更新**: 包含多项修复与变更（官方未列出详细变更日志）。

- **[v1.0.53](https://github.com/github/copilot-cli/releases/tag/v1.0.53)**
  - **修复**: 多行提示词现在可以完整显示，不再被裁剪或选择偏移。
  - **修复**: `/skills` 选择器现在能正确遵循 `--config-dir` 设置保存偏好。
  - **修复**: 修复了当环境变量中设置 `PS0` 或 `PROMPT_COMMAND` 时，Bash Shell 会话挂起的问题。

## 3. 社区热点 Issues (Top 10)

以下筛选了 10 个最受关注或最具代表性的 Issues：

1.  **[macOS 注音输入法预编辑文本堆积](https://github.com/github/copilot-cli/issues/3502)** `#3502` `OPEN`
    - **摘要**: 在 macOS 上使用内置注音输入法时，预编辑文本错误地显示在终端右下角而非光标处。
    - **关注点**: 该问题获得了 **27 个点赞**，是近期最受关注的 UI 交互问题，严重影响非英语用户的输入体验。

2.  **[Bash History 被截断问题](https://github.com/github/copilot-cli/issues/2317)** `#2317` `OPEN`
    - **摘要**: Copilot 执行 Bash 命令时会截断用户的 `~/.bash_history`，忽略用户的 `HISTSIZE` 设置。
    - **关注点**: 老问题复现，获得了 **8 个点赞**。涉及数据安全与完整性，属于高危级别的 Bug。

3.  **[终端调整大小后内容裁剪与滚动失效](https://github.com/github/copilot-cli/issues/3497)** `#3497` `OPEN`
    - **摘要**: 调整终端窗口大小后，长响应内容被裁剪且无法通过滚动条访问隐藏文本。
    - **关注点**: 获得 **7 个点赞**。这是典型的终端 UI 渲染问题，影响多场景下的使用体验。

4.  **[Windows 滚动条导致文本错位](https://github.com/github/copilot-cli/issues/3501)** `#3501` `OPEN`
    - **摘要**: 自引入垂直滚动条以来，Windows 控制台/终端中的文本渲染出现错位。
    - **关注点**: 获得 **6 个点赞**。Windows 平台的渲染回归问题，影响范围较广。

5.  **[扩展生命周期钩子丢失工作目录信息](https://github.com/github/copilot-cli/issues/3508)** `#3508` `OPEN`
    - **摘要**: 自 v1.0.51 起，扩展生命周期钩子（如 `onSessionStart`）接收到的 `workingDirectory` 为空字符串。
    - **关注点**: 这是一个严重的回归问题，直接影响插件开发者获取上下文环境的能力。

6.  **[Android/Termux 支持中断](https://github.com/github/copilot-cli/issues/3333)** `#3333` `OPEN`
    - **摘要**: v1.0.48 引入的原生 Rust 插件依赖 glibc，导致无法在 Android/Termux（使用 Bionic libc）上运行。
    - **关注点**: 持续有人关注，影响移动端开发者的使用，属于平台兼容性硬伤。

7.  **[GNOME Wayland 粘贴功能回归](https://github.com/github/copilot-cli/issues/3414)** `#3414` `OPEN`
    - **摘要**: v1.0.49 版本在 Ubuntu GNOME Wayland 环境下导致粘贴功能失效，此前版本正常。
    - **关注点**: Linux 桌面环境特定的输入兼容性问题。

8.  **[请求支持子代理声明工具需求](https://github.com/github/copilot-cli/issues/3506)** `#3506` `OPEN`
    - **摘要**: 当自定义代理作为子代理通过 `task` 工具调用时，其声明的 `tools` 配置被忽略，导致功能受限。
    - **关注点**: 功能需求，反映了社区对 Agent 架构更深层次的编排需求。

9.  **[请求支持多代理目录](https://github.com/github/copilot-cli/issues/3505)** `#3505` `OPEN`
    - **摘要**: 目前代理必须放在 `.copilot/agents` 目录，用户请求支持配置多个代理目录（类似 Skills 的配置方式）。
    - **关注点**: 改进配置管理的易用性需求，便于管理多来源的代理脚本。

10. **[请求内置 /create-* 技能](https://github.com/github/copilot-cli/issues/3503)** `#3503` `OPEN`
    - **摘要**: 用户希望 CLI 能像 VS Code 一样提供内置的 `/create-*` 指令，用于快速创建 skill、agent、hook 等资源。
    - **关注点**: 易用性改进，有助于降低用户编写配置文件的成本。

## 4. 重要 PR 进展
过去 24 小时内无公开的 Pull Requests 更新记录。

## 5. 功能需求趋势
根据近期 Issues 分析，社区功能需求集中在以下方向：
- **Agent 编排能力增强**：开发者希望子代理能继承父代理的工具权限配置（#3506），并支持更灵活的多目录管理（#3505），显示出用户正尝试构建更复杂的自动化工作流。
- **脚手架工具集成**：用户渴望类似 VS Code 的快速生成模板功能（#3503），以降低编写 Agent 和 Skill 的门槛。
- **跨平台兼容性**：对 Android/Termux（#3333）和 Wayland（#3414）的支持需求依然强烈，反映了开发者希望在更多非标准环境下使用 CLI 的意愿。

## 6. 开发者关注点
- **终端渲染稳定性**：近期 Issues 显示，输入法交互（#3502）、滚动条布局（#3501）及窗口重绘（#3497）等 UI 层面的问题频发，尤其是非英语环境的输入体验亟待优化。
- **插件与扩展 API 变更**：v1.0.51+ 版本引入的回归问题导致 Hook 数据缺失（#3508），表明近期底层架构调整可能影响了 API 稳定性，建议插件开发者关注版本升级带来的兼容性风险。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-05-25)

## 1. 今日速览
今日社区开发活跃度较高，重点集中在 **ACP（Agent Communication Protocol）协议支持** 与 **跨平台兼容性** 优化。多位贡献者提交了关于 ACP 流式消息 ID、会话历史重放及权限模式切换的 PR，显著增强了 Kimi CLI 作为 Agent 后端的集成能力。此外，针对文件换行符（CRLF/LF）被破坏的长期痛点已有修复方案提交，解决了跨平台开发的核心兼容性问题。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues
今日仅更新 1 条 Issue，重点关注 CLI 与 Codex 的生态兼容性。

*   **#1894 [OPEN] Kimi CLI 无法递归加载嵌套 skill 目录**
    *   **链接：** [MoonshotAI/kimi-cli Issue #1894](https://github.com/MoonshotAI/kimi-cli/issues/1894)
    *   **解读：** 该 Issue 指出 Kimi CLI 在处理复杂项目结构时的局限性。目前 Kimi 无法像 Codex 那样递归识别 `.agents/skills/{name}/skills/xxx` 目录，导致在 `cloudlive` 等复杂仓库中无法自动发现嵌套的 skill 定义。这对于希望从 Codex 迁移到 Kimi CLI 的企业级项目构成了阻碍，社区呼吁尽快对齐目录加载逻辑。

## 4. 重要 PR 进展
今日共有 7 个 PR 更新，其中 ACP 协议增强与构建修复是核心主题。

*   **#2364 [OPEN] feat(acp): support permission mode switching**
    *   **链接：** [MoonshotAI/kimi-cli PR #2364](https://github.com/MoonshotAI/kimi-cli/pull/2364)
    *   **内容：** 实现了协议层的 ACP 权限模式切换功能，允许会话动态调整权限策略。这是支持自动化 Agent 集成的关键特性。

*   **#2363 [OPEN] fix(acp): replay loaded session history**
    *   **链接：** [MoonshotAI/kimi-cli PR #2363](https://github.com/MoonshotAI/kimi-cli/pull/2363)
    *   **内容：** 修复了 ACP `session/load` 过程中的历史记录重放问题，确保在加载恢复会话时上下文完整性，依赖 #2359 合并。

*   **#2359 [OPEN] fix(acp): assign message ids to streamed content**
    *   **链接：** [MoonshotAI/kimi-cli PR #2359](https://github.com/MoonshotAI/kimi-cli/pull/2359)
    *   **内容：** 为流式传输的内容分配 `messageId`，解决了 PwrAgent 等第三方客户端集成时消息追踪缺失的问题，提升了协议兼容性。

*   **#2362 [OPEN] fix: retain the original line break style of the file**
    *   **链接：** [MoonshotAI/kimi-cli PR #2362](https://github.com/MoonshotAI/kimi-cli/pull/2362)
    *   **内容：** 修复了 `StrReplaceFile` 和 `WriteFile` 工具在 Windows/Linux 混合环境下破坏文件原有换行符（CRLF/LF）的问题。这是长期困扰跨平台开发的痛点，修复后将显著减少文件差异噪音。

*   **#2361 [OPEN] docs: clarify hooks notification example**
    *   **链接：** [MoonshotAI/kimi-cli PR #2361](https://github.com/MoonshotAI/kimi-cli/pull/2361)
    *   **内容：** 修正了文档中关于 Hooks 通知示例的错误，澄清了 `matcher` 的匹配逻辑，防止开发者误用 `permission_prompt`。

*   **#2335 [OPEN] docs: fix Notification hook matcher example**
    *   **链接：** [MoonshotAI/kimi-cli PR #2335](https://github.com/MoonshotAI/kimi-cli/pull/2335)
    *   **内容：** 同样针对文档中的 Notification Hook 示例进行了修正，确保配置示例与实际后台任务通知类型一致。

*   **#2358 [OPEN] fix(build): correct module-name type in pyproject.toml files**
    *   **链接：** [MoonshotAI/kimi-cli PR #2358](https://github.com/MoonshotAI/kimi-cli/pull/2358)
    *   **内容：** 修复了 `pyproject.toml` 中 `module-name` 的类型定义错误，解决了构建配置层面的回归问题。

## 5. 功能需求趋势
基于近期 Issue 和 PR 动向，社区关注点呈现以下趋势：
*   **生态兼容性：** 用户强烈要求 Kimi CLI 能够兼容 Codex 的配置规范（如嵌套 skill 目录），降低迁移成本。
*   **Agent 协议集成 (ACP)：** 开发者正在积极补齐 ACP 协议的支持细节（如消息 ID、会话重放、权限控制），显示 Kimi CLI 正在向“可被其他 Agent 调用”的底层工具链角色演进。
*   **跨平台体验：** 文件系统操作的稳定性（如换行符保留）依然是开发者关注的基石功能。

## 6. 开发者关注点
*   **文件系统副作用：** 开发者反馈 AI 自动修改代码时破坏文件格式（换行符）是主要痛点，PR #2362 的合并在社区备受期待。
*   **集成能力：** 第三方开发者正在尝试将 Kimi 接入更广泛的自动化系统（如 PwrAgent），表明 Kimi CLI 正在拓展其在 CI/CD 或自动化工作流中的应用场景。
*   **文档准确性：** 连续两个文档修复 PR 表明，Hooks 和 Notification 等高级功能的文档说明需要更加精确，以降低开发者的试错成本。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-05-25)

## 1. 今日速览
今日社区聚焦于**模型适配稳定性**与**订阅性价比**两大主题。Kimi K2.5/K2.6 及 GPT-5 系列模型频发工具调用错误与响应延迟问题，引发用户对模型兼容性的担忧；同时，DeepSeek V4 Pro 大幅降价后，社区强烈呼吁官方调整订阅额度。代码层面，开发者正积极修复自动压缩死循环、TodoRead 工具丢失及进程残留等关键 Bug。

## 2. 版本发布
过去 24 小时内无官方 Release 发布。

## 3. 社区热点 Issues

1.  **[#20650](https://github.com/anomalyco/opencode/issues/20650) Kimi k2.5 工具调用报错 (🔥 热度 48)**
    *   **摘要**：Kimi k2.5 模型在进行工具调用时频繁出现 JSON 解析失败，导致无法正常执行 Bash 等命令。
    *   **点评**：作为热度最高的问题，反映了特定模型集成的脆弱性，直接影响用户体验。

2.  **[#15585](https://github.com/anomalyco/opencode/issues/15585) 免费模型额度疑问 (热度 37)**
    *   **摘要**：用户在使用免费模型时遇到 "free usage exceed" 错误，质疑 OpenCode 对标称的“免费”模型是否存在隐性限制。
    *   **点评**：涉及用户权益与计费逻辑透明度，需官方明确说明额度策略。

3.  **[#29079](https://github.com/anomalyco/opencode/issues/29079) GPT 模型响应延迟严重 (热度 33)**
    *   **摘要**：GPT-5.4 等模型在简单指令下偶发数分钟延迟，响应速度极不稳定。
    *   **点评**：性能稳定性是开发工具的生命线，此类问题严重影响工作流效率。

4.  **[#21032](https://github.com/anomalyco/opencode/issues/21032) 插件版本兼容性问题 (热度 25)**
    *   **摘要**：升级至 v1.3.14 后，`oh-my-openagent` 插件加载失败且无法注册，回退至 v1.3.13 后恢复正常。
    *   **点评**：版本迭代导致的插件兼容性破坏，需关注生态系统的向后兼容。

5.  **[#12570](https://github.com/anomalyco/opencode/issues/12570) GPT-5.3-Codex 响应中断 (热度 17)**
    *   **摘要**：模型在调用子代理后突然停止，无法继续完成任务，该问题在其他模型上未见。
    *   **点评**：特定模型特有的逻辑中断问题，排查难度较高，需针对性适配。

6.  **[#27530](https://github.com/anomalyco/opencode/issues/27530) 启动报错：Unexpected server error (热度 12)**
    *   **摘要**：应用启动时提示 Provider 配置请求失败，导致无法进入应用。
    *   **点评**：严重的阻塞性 Bug，直接影响用户首次使用或升级体验。

7.  **[#28846](https://github.com/anomalyco/opencode/issues/28846) 呼吁调整 Go 订阅额度 (热度 9)**
    *   **摘要**：DeepSeek V4 Pro API 永久降价 75%，用户请求 OpenCode 同步上调 Go 订阅计划的使用限额。
    *   **点评**：反映了用户对订阅性价比的敏锐关注，建议官方跟进市场定价策略。

8.  **[#28480](https://github.com/anomalyco/opencode/issues/28480) Windows 11 无法启动 (热度 9)**
    *   **摘要**：部分 Win11 用户遇到无报错静默启动失败，无法继续使用。
    *   **点评**：平台兼容性问题，缺失错误日志增加了排查难度。

9.  **[#29154](https://github.com/anomalyco/opencode/issues/29154) Kimi k2.6 权限验证错误 (热度 4)**
    *   **摘要**：使用 opencode-go/kimi-k2.6 模型时出现 "Extra inputs are not permitted" 验证错误，疑似 Provider 字段变更导致。
    *   **点评**：紧随 #20650 之后的新问题，表明 Kimi 系列模型集成存在持续性适配挑战。

10. **[#29129](https://github.com/anomalyco/opencode/issues/29129) OpenAI 流式响应卡死 (热度 6)**
    *   **摘要**：OpenAI 流式传输时 UI 显示“工作中”但实际 CPU 空转，无法产生输出，需手动重启。
    *   **点评**：网络连接管理或流处理逻辑的潜在缺陷，会导致用户被迫中断会话。

## 4. 重要 PR 进展

1.  **[#29150](https://github.com/anomalyco/opencode/pull/29150) 修复自动压缩死循环**
    *   **内容**：修复了当模型上下文限制配置小于实际 Provider 限制时，自动压缩机制陷入无限循环的问题。
    *   **意义**：解决了会导致资源无限消耗的严重逻辑漏洞。

2.  **[#29158](https://github.com/anomalyco/opencode/pull/29158) 支持 AdaL Token 压缩代理**
    *   **内容**：透传 `ADAL_APP_URL` 环境变量，允许 Desktop 端使用 AdaL CLI 进行 Token 压缩。
    *   **意义**：通过代理优化 Token 使用量，降低成本，实用性极高。

3.  **[#25112](https://github.com/anomalyco/opencode/pull/25112) 新增 TUI 自定义 Provider 配置**
    *   **内容**：在 TUI 界面增加自定义 Provider 设置流程，简化 OpenAI 兼容端点的配置。
    *   **意义**：显著提升非内置模型的接入易用性。

4.  **[#12594](https://github.com/anomalyco/opencode/pull/12594) 恢复 TodoReadTool 功能**
    *   **内容**：重新启用了之前重构中被误删的 `TodoReadTool`，修复了任务列表不显示的问题。
    *   **意义**：直接回应了 Issue #12680，恢复核心功能。

5.  **[#26178](https://github.com/anomalyco/opencode/pull/26178) 修复会话中断后的孤儿工具**
    *   **内容**：处理流中断或重试时遗留的“孤儿”工具调用，防止后续运行错误。
    *   **意义**：增强了会话生命周期的健壮性，避免脏数据影响后续交互。

6.  **[#28342](https://github.com/anomalyco/opencode/pull/28342) 修复 ESM 启动兼容性**
    *   **内容**：将 bin 入口重命名为 `.cjs`，解决 Node.js 在 ESM 模式下无法找到 `require` 的报错。
    *   **意义**：修复了模块化规范冲突导致的启动崩溃问题。

7.  **[#29156](https://github.com/anomalyco/opencode/pull/29156) 修复待处理工具名称异常**
    *   **内容**：在工具调用写入数据库前对工具名称进行清洗，防止畸形名称导致进程崩溃。
    *   **意义**：提升了对模型输出异常数据的容错能力。

8.  **[#29025](https://github.com/anomalyco/opencode/pull/29025) 保留原生 Provider 选项**
    *   **内容**：修复了 DeepSeek 等模型的推理续写字段在协议转换中丢失的问题。
    *   **意义**：确保特定模型的高级功能（如思维链续写）在 OpenCode 中正常工作。

9.  **[#28788](https://github.com/anomalyco/opencode/pull/28788) 改进 Desktop V2 启动与控制**
    *   **内容**：优化 Desktop V2 的首页、会话编辑器及状态栏控制，增加项目和分支选择支持。
    *   **意义**：提升桌面端的 UI 交互体验与功能完整度。

10. **[#27231](https://github.com/anomalyco/opencode/pull/27231) 新增已连接 Provider 编辑功能**
    *   **内容**：允许用户在界面上直接编辑已连接的 Provider 配置。
    *   **意义**：解决了配置调整需删除重连的繁琐操作，提升易用性。

## 5. 功能需求趋势

*   **模型适配的广度与深度**：社区对前沿模型（如 GPT-5.x, DeepSeek V4, Kimi K2.x, Qwen 3.7）的跟进速度要求极高。除了简单的接入，用户更关注特定模型下的工具调用稳定性、流式响应性能及 Token 计费逻辑。
*   **订阅性价比与透明度**：随着 API 市场价格波动，用户强烈希望订阅额度能动态调整。同时，“免费模型”的隐性限制引发了对计费透明度的质疑。
*   **UI/UX 易用性优化**：TUI 自定义 Provider 配置、Desktop 版本的进程残留问题、以及更灵活的快捷键绑定（如 Enter 换行）是用户高频提及的改进方向。

## 6. 开发者关注点

*   **工具调用与协议兼容性**：Kimi 和 GPT 系列模型频繁出现的 JSON 解析失败和工具未注册错误，表明在处理不同模型输出协议时仍需增强鲁棒性。
*   **进程生命周期管理**：Windows 启动失败、TUI 挂起、进程残留不退出等问题，指向了跨平台进程管理模块的不稳定性。
*   **数据持久化与迁移**：数据库迁移导致的 `project_id` 错误（PR #29109 修复）以及 Session 恢复时的白屏问题，反映出在版本迭代中数据结构平滑迁移的挑战。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-05-25)

## 1. 今日速览
今日 Qwen Code 发布了 **v0.16.1-nightly** 版本，主要修复了构建过程中的 TS5055 错误。社区方面，核心关注点集中在 **Mode B (Daemon Mode)** 的生产就绪路线图规划（#4175）及**跨客户端实时同步**等架构级改进上。同时，用户对 VSCode 插件兼容性及 Token 消耗统计的需求显著增加，多个功能增强 PR（如防止系统休眠、本地上下文文件支持）正在积极审议中。

## 2. 版本发布
- **v0.16.1-nightly.20260525.84f408017**
  - **更新内容**：修复了构建过程中因陈旧输出文件导致的 TypeScript TS5055 错误，通过在 `tsc --build` 前清理陈旧输出提升了构建稳定性。
  - **贡献者**：@doudouOUC
  - **链接**：[Release v0.16.1-nightly](https://github.com/QwenLM/qwen-code/releases/tag/v0.16.1-nightly.20260525.84f408017)

## 3. 社区热点 Issues
以下筛选了 10 个最具代表性的 Issue，涵盖了核心规划、关键 Bug 及功能请求：

1.  **[核心规划] proposal(serve): Mode B feature-priority roadmap toward v0.16 production-ready (#4175)**
    - **重要性**：定义了 v0.16 版本核心功能 Mode B（守护进程模式）的生产就绪路线图，涉及 Stage 1 合并及后续安全、多路复用等关键特性。
    - **社区反应**：讨论热烈（38 条评论），开发者正在细化分支策略与功能优先级。
    - **链接**：[Issue #4175](https://github.com/QwenLM/qwen-code/issues/4175)

2.  **[关键Bug] oom-crash (#4276)**
    - **重要性**：用户报告了严重的内存溢出（OOM）崩溃问题，涉及 GC 机制与内存占用，直接影响工具稳定性。
    - **状态**：待分类，已有 8 条评论讨论复现环境与日志。
    - **链接**：[Issue #4276](https://github.com/QwenLM/qwen-code/issues/4276)

3.  **[UI兼容] qwen code插件(v0.16.0)在vscode左侧栏不显示 (#4488)**
    - **重要性**：影响用户体验的关键 Bug，新版本 VSCode (1.120.0) 存在兼容性问题，导致插件闪退或不显示。
    - **状态**：新建 Issue，已有用户确认复现。
    - **链接**：[Issue #4488](https://github.com/QwenLM/qwen-code/issues/4488)

4.  **[功能请求] 需要一个功能统计Qwen Code每日消耗的Token数量 (#4479)**
    - **重要性**：反映了用户对成本控制的强需求，希望直观了解 Token 消耗情况。
    - **社区反应**：简短但切中痛点，获得关注。
    - **链接**：[Issue #4479](https://github.com/QwenLM/qwen-code/issues/4479)

5.  **[诊断工具] feat(diagnostics): 本地问题诊断框架 (#4421)**
    - **重要性**：提议建立本地 Ring Buffer 诊断机制，解决用户难以反馈 API 异常、断流等“事后无日志”的痛点，属于可观测性建设的重要一环。
    - **链接**：[Issue #4421](https://github.com/QwenLM/qwen-code/issues/4421)

6.  **[已实现] Feature Request: Add project-level local context file (#4091)**
    - **重要性**：允许开发者通过 `.qwen/QWEN.local.md` 添加本地专属上下文，避免污染全局或团队共享配置。
    - **状态**：已关闭，功能已在 PR #4394 中实现。
    - **链接**：[Issue #4091](https://github.com/QwenLM/qwen-code/issues/4091)

7.  **[已修复] Weixin channel bot 发送图片后微信端显示灰色占位 (#3993)**
    - **重要性**：集成微信渠道时的典型 Bug，图片发送失败导致用户体验受损。
    - **状态**：已关闭，相关修复 PR #4464 已合并。
    - **链接**：[Issue #3993](https://github.com/QwenLM/qwen-code/issues/3993)

8.  **[系统交互] PC when to sleep when working... (#4257)**
    - **重要性**：长时间任务执行中系统休眠导致任务中断，影响自动化流程的可靠性。
    - **状态**：Open，已有相关 PR #4434 提出解决方案。
    - **链接**：[Issue #4257](https://github.com/QwenLM/qwen-code/issues/4257)

9.  **[遥测Bug] bug(telemetry): qwen-code.interaction span has wrong trace id (#4486)**
    - **重要性**：技术债务，Session 根上下文未正确传递导致链路追踪 ID 错误，影响监控数据的准确性。
    - **链接**：[Issue #4486](https://github.com/QwenLM/qwen-code/issues/4486)

10. **[模型行为] it responds in English... (#4481)**
    - **重要性**：模型语言跟随能力问题，用户要求重写为英文但模型无响应变化，需关注提示词或模型策略。
    - **链接**：[Issue #4481](https://github.com/QwenLM/qwen-code/issues/4481)

## 4. 重要 PR 进展
以下筛选了 10 个重要的 Pull Request，涵盖核心功能、修复与优化：

1.  **[核心合并] chore(integration): merge daemon_mode_b_main into main (#4490)**
    - **内容**：将 `daemon_mode_b_main` 分支合并至主分支，包含 F1-F4 预备功能及 F5 alpha 文档。这是 Mode B 路线图的关键集成步骤。
    - **链接**：[PR #4490](https://github.com/QwenLM/qwen-code/pull/4490)

2.  **[功能] feat(cli): prevent system sleep while running (#4434)**
    - **内容**：引入运行时睡眠抑制器，防止 Qwen Code 在执行长时间任务时系统自动休眠，解决 Issue #4257。
    - **链接**：[PR #4434](https://github.com/QwenLM/qwen-code/pull/4434)

3.  **[功能] feat(cli): add auto-improve command (#4161)**
    - **内容**：新增 `/auto-improve` 斜杠命令，支持在会话范围内循环执行小型、可验证的仓库改进任务。
    - **链接**：[PR #4161](https://github.com/QwenLM/qwen-code/pull/4161)

4.  **[功能-已合] feat(memory): load .qwen/QWEN.local.md as project-local context (#4394)**
    - **内容**：支持加载项目级本地上下文文件，允许开发者定义本地专属指令。已关闭（已合并）。
    - **链接**：[PR #4394](https://github.com/QwenLM/qwen-code/pull/4394)

5.  **[架构] feat(daemon+sdk): cross-client real-time sync completeness (#4484)**
    - **内容**：修复守护进程模式下，同一会话的多客户端（SSE订阅）间动作同步缺失的 5 个缺口，提升多端协同体验。
    - **链接**：[PR #4484](https://github.com/QwenLM/qwen-code/pull/4484)

6.  **[安全] Add AUTO mode denial observability and caps (#4476)**
    - **内容**：增强 AUTO 模式的安全性，增加了结构化的拒绝原因边界、分类器拦截钩子以及累积拒绝上限。
    - **链接**：[PR #4476](https://github.com/QwenLM/qwen-code/pull/4476)

7.  **[修复-已合] fix(weixin): send decryptable image payloads (#4464)**
    - **内容**：修复微信渠道图片发送问题，确保客户端能正确解密并显示图片，解决灰色占位问题。
    - **链接**：[PR #4464](https://github.com/QwenLM/qwen-code/pull/4464)

8.  **[修复] fix(core): prevent auto-skill creation from overwriting existing skills (#4489)**
    - **内容**：修复自动技能创建逻辑可能覆盖同名现有技能文件的漏洞，增加了更严格的检查。
    - **链接**：[PR #4489](https://github.com/QwenLM/qwen-code/pull/4489)

9.  **[权限] fix(permissions): make command substitution ask, not deny (#4386)**
    - **内容**：调整权限策略，包含命令替换（如 `$()`）的命令不再直接拒绝，而是降级为“询问”用户，提升交互灵活性。
    - **链接**：[PR #4386](https://github.com/QwenLM/qwen-code/pull/4386)

10. **[性能] feat(core)!: redesign auto-compaction thresholds with three-tier ladder (#4345)**
    - **内容**：重构自动压缩触发机制，从单一比例阈值升级为“警告/自动/硬性”三级阶梯，优化长上下文内存管理。
    - **链接**：[PR #4345](https://github.com/QwenLM/qwen-code/pull/4345)

## 5. 功能需求趋势
从近期 Issues 和 PRs 分析，社区关注的功能方向主要集中在：
- **可观测性与成本控制**：用户对 Token 消耗统计、本地诊断日志、链路追踪的需求日益增强，希望在本地能掌控运行状态和成本。
- **IDE 集成与兼容性**：VSCode 插件在新版客户端下的显示与稳定性是用户投诉的重灾区，需要优先解决。
- **后台任务稳定性**：防止系统休眠、Session 恢复、OOM 崩溃修复等需求，表明用户越来越倾向于将 Qwen Code 用于长时间、无人值守的后台任务。
- **Mode B (Daemon Mode) 生产化**：守护进程模式的稳定性、跨客户端同步、安全性校验是核心开发团队当前的重点。

## 6. 开发者关注点
- **VSCode 新版兼容性问题**：Issue #4488 显示 v0.16.0 在 VSCode 1.120.0 版本中存在侧边栏闪退现象，建议前端团队优先排查。
- **长任务执行中断**：系统休眠导致的任务中断（Issue #4257）已通过 PR #4434 修复，建议开发者关注后续测试与合并进展。
- **本地化配置需求**：`.qwen/QWEN.local.md` 功能（PR #4394）已合入，开发者现在可以在本地环境自定义上下文而无需修改团队共享配置，这一工作流改进值得注意。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 (2026-05-25)

## 1. 今日速览
今日项目迎来重大品牌升级，**DeepSeek-TUI 正式更名为 CodeWhale**，并发布了 v0.8.42 至 v0.8.44 系列版本完成迁移。开发团队正全力推进 v0.8.45 版本的开发，重点聚焦于**智能体控制平面**、**UI 交互优化**及**权限管理系统**的增强，社区对 Windows 平台兼容性和取消操作的用户体验讨论热烈。

## 2. 版本发布
- **v0.8.44 (含 v0.8.43, v0.8.42)**
  - **核心变更**：项目正式更名为 **CodeWhale**。
  - **兼容性**：旧的 `deepseek` 和 `deepseek-tui` 二进制文件暂时保留作为过渡，运行时会打印警告并转发至新命令 `codewhale` / `codewhale-tui`，计划在 v0.9.0 版本移除。
  - **链接**：[Release v0.8.44](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.44)

## 3. 社区热点 Issues (Top 10)

1.  **[#1757] [体验优化] Ctrl+C 取消请求后恢复输入内容**
    - **关注度**：评论 9 条。
    - **理由**：用户在终端复制粘贴不便，误操作或取消请求后内容丢失是高频痛点。社区呼吁实现 Ctrl+C 后自动回滚输入内容至编辑框的功能。
    - **链接**：[Hmbown/CodeWhale Issue #1757](https://github.com/Hmbown/CodeWhale/issues/1757)

2.  **[#765] [Bug] Windows npm 全局安装后无响应**
    - **关注度**：评论 8 条。
    - **理由**：影响范围广，Windows 用户通过 npm 安装后界面卡在 "Working" 状态，导致无法正常使用。
    - **链接**：[Hmbown/CodeWhale Issue #765](https://github.com/Hmbown/CodeWhale/issues/765)

3.  **[#1879] [规划] v0.8.45 控制平面与恢复机制追踪**
    - **关注度**：官方核心 Issue。
    - **理由**：定义了 v0.8.45 版本的核心主题——让智能体工作流可中断、可恢复，防止状态损坏或进度丢失，是迈向成熟 Agent 工具的关键一步。
    - **链接**：[Hmbown/CodeWhale Issue #1879](https://github.com/Hmbown/CodeWhale/issues/1879)

4.  **[#1579] [UI] 用户反馈配色丑陋**
    - **关注度**：评论 6 条。
    - **理由**：UI 体验直接影响工具粘性。直接的用户反馈推动了 v0.8.45 对默认调色板的重新设计。
    - **链接**：[Hmbown/CodeWhale Issue #1579](https://github.com/Hmbown/CodeWhale/issues/1579)

5.  **[#1620] [性能] 思考过程输出极慢**
    - **关注度**：评论 6 条。
    - **理由**：反映流式输出性能问题，严重影响交互体验，需排查是网络层还是渲染层瓶颈。
    - **链接**：[Hmbown/CodeWhale Issue #1620](https://github.com/Hmbown/CodeWhale/issues/1620)

6.  **[#891] [功能] 支持 Codex 长时运行任务模式**
    - **关注度**：评论 6 条。
    - **理由**：用户希望 Agent 能持续工作直至达成目标，而非单次响应即停止，这符合 Agentic Workflow 的发展趋势。
    - **链接**：[Hmbown/CodeWhale Issue #891](https://github.com/Hmbown/CodeWhale/issues/891)

7.  **[#1679] [Bug] SSE 多智能体在 Windows 11 下超时及 UI 错乱**
    - **关注度**：评论 3 条。
    - **理由**：多智能体并行是高级功能，但在 Windows 环境下出现 45s 超时和 UI 渲染错误，影响平台一致性。
    - **链接**：[Hmbown/CodeWhale Issue #1679](https://github.com/Hmbown/CodeWhale/issues/1679)

8.  **[#2012] [规划] v0.8.45 主题：刷新默认 Whale Dark 调色板**
    - **关注度**：官方核心 Issue。
    - **理由**：针对用户对 UI 的反馈，官方计划引入深海/海军蓝风格，提升视觉舒适度。
    - **链接**：[Hmbown/CodeWhale Issue #2012](https://github.com/Hmbown/CodeWhale/issues/2012)

9.  **[#1186] [功能] 添加持久化权限规则**
    - **关注度**：评论 2 条。
    - **理由**：安全相关的重要功能，允许用户配置工具执行、命令前缀等权限策略，是实现自动化工作流的基础。
    - **链接**：[Hmbown/CodeWhale Issue #1186](https://github.com/Hmbown/CodeWhale/issues/1186)

10. **[#2052] [Bug] macOS 无法运行（安全验证问题）**
    - **关注度**：评论 1 条。
    - **理由**：最新版本在 macOS 上遭遇签名/公证问题，提示恶意软件风险，阻碍用户升级。
    - **链接**：[Hmbown/CodeWhale Issue #2052](https://github.com/Hmbown/CodeWhale/issues/2052)

## 4. 重要 PR 进展 (Top 10)

1.  **[#2049] chore(release): 准备 v0.8.45 发布**
    - **内容**：升级版本号至 0.8.45，更新 CHANGELOG，并添加了从 `deepseek-tui` 迁移到 `codewhale` 的重品牌指南。
    - **链接**：[Hmbown/CodeWhale PR #2049](https://github.com/Hmbown/CodeWhale/pull/2049)

2.  **[#2047] feat(tui): 语音输入与 RLM 会话对象**
    - **内容**：增加了语音输入功能，并暴露了 RLM 符号化会话对象，修复了斜杠命令恢复的问题。
    - **链接**：[Hmbown/CodeWhale PR #2047](https://github.com/Hmbown/CodeWhale/pull/2047)

3.  **[#2053] feat(tui): 基于类型的权限策略路由**
    - **内容**：集成了 Issue #1186 的功能，让 Shell 和文件工具调用前先经过 `ExecPolicyEngine` 检查，支持 "allow/deny/ask" 规则。
    - **链接**：[Hmbown/CodeWhale PR #2053](https://github.com/Hmbown/CodeWhale/pull/2053)

4.  **[#2059] feat(web): 添加 Metaso 搜索提供商**
    - **内容**：新增对 Metaso AI 搜索 的支持，扩展了工具的联网搜索能力。
    - **链接**：[Hmbown/CodeWhale PR #2059](https://github.com/Hmbown/CodeWhale/pull/2059)

5.  **[#2048] feat(tui): Shell 执行实时输出显示**
    - **内容**：解决了命令执行时 TUI 界面静默的问题，现在可以在命令运行时实时看到 Shell 输出。
    - **链接**：[Hmbown/CodeWhale PR #2048](https://github.com/Hmbown/CodeWhale/pull/2048)

6.  **[#2056] fix(tui): 修复 Model Picker 中 Esc 键行为**
    - **内容**：修复了用户在切换模型时按 Esc 退出会重置为旧模型的问题，现在的逻辑符合直觉。
    - **链接**：[Hmbown/CodeWhale PR #2056](https://github.com/Hmbown/CodeWhale/pull/2056)

7.  **[#2060] fix(engine): 修复小窗口下的自动压缩逻辑**
    - **内容**：修复了自托管环境（上下文窗口 < 500K）下，预算计算错误导致自动压缩功能失效的问题。
    - **链接**：[Hmbown/CodeWhale PR #2060](https://github.com/Hmbown/CodeWhale/pull/2060)

8.  **[#2046] feat(execpolicy): 添加类型化权限规则配置**
    - **内容**：为 Issue #1186 提供配置层支持，定义了 Schema 以支持持久化权限规则的存储。
    - **链接**：[Hmbown/CodeWhale PR #2046](https://github.com/Hmbown/CodeWhale/pull/2046)

9.  **[#1856] fix(tools): 使用 Semaphore 替换 RwLock 防止死锁**
    - **内容**：修复了工具调用运行时的潜在死锁风险，提升了高并发下的稳定性。
    - **链接**：[Hmbown/CodeWhale PR #1856](https://github.com/Hmbown/CodeWhale/pull/1856)

10. **[#2041] fix: 同步“记住此操作”复选框状态**
    - **内容**：修复了勾选“记住”后，同一线程后续工具调用仍需手动审批的 Bug。
    - **链接**：[Hmbown/CodeWhale PR #2041](https://github.com/Hmbown/CodeWhale/pull/2041)

## 5. 功能需求趋势

1.  **交互可控性与恢复能力**
    社区对 Agent 运行过程中的控制权需求强烈（如 #1757, #1879）。用户不希望任务一旦开始就“黑盒”运行，而是希望能随时中断、回滚输入或恢复中断的会话。

2.  **自动化权限管理**
    随着工具执行能力的增强，用户对于安全性和便捷性的平衡提出了更高要求。持久化权限规则（#1186, #2053）成为热门需求，旨在减少重复确认操作的同时保障安全。

3.  **UI/UX 细节打磨**
    除了整体的“更名换姓”，用户对终端界面的细节体验敏感度极高，包括配色美观度（#1579）、模型选择器的交互逻辑（#2056）以及实时反馈（#2048）。

4.  **跨平台稳定性**
    Windows 平台的兼容性问题（#765, #1679）和高版本 macOS 的安全验证问题（#2052）仍是阻碍用户留存的关键因素。

## 6. 开发者关注点

- **品牌迁移适配**：随着 DeepSeek-TUI 更名为 CodeWhale，开发者需留意配置文件路径（从 `.deepseek` 迁移至 `.codewhale`）及二进制命令的变更。
- **长时任务稳定性**：针对大文本处理、多智能体协作场景下的超时和卡死问题（#1679, #1425）是当前开发的攻坚重点。
- **自托管模型适配**：针对小上下文窗口模型的适配修复（#2060）表明项目正在积极支持更多样化的本地或开源模型后端。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*