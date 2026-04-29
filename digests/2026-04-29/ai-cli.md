# AI CLI 工具社区动态日报 2026-04-29

> 生成时间: 2026-04-29 03:28 UTC | 覆盖工具: 7 个

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

# AI CLI 工具生态横向对比分析报告 (2026-04-29)

## 1. 生态全景
当前 AI CLI 工具正处于从"辅助生成"向"自主 Agent"转型的深水区。各主流工具在争夺模型能力高地（如支持百万级上下文、思维链模型）的同时，核心战场已转向**架构稳定性**与**安全可控性**。今日动态显示，随着 Agent 权限扩大，回归 Bug、数据丢失、权限失控等"成长的烦恼"频发，迫使 OpenAI Codex 等工具开始移除粗粒度的"全自动"模式，转向显式权限配置。此外，第三方模型兼容性（如 DeepSeek V4）和跨会话记忆增强成为新一轮技术攻坚的重点。

## 2. 各工具活跃度对比

| 工具名称 | 版本动态 | 热点 Issues (精选) | 重要 PRs (精选) | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | v2.1.122 | 10+ (回归Bug、数据丢失) | 6 (插件修复、文档) | 稳定性焦虑、会话持久化 |
| **OpenAI Codex** | Rust Core 4连更 (Alpha) | 10+ (上下文限制、架构调整) | 10+ (移除Full-Auto、沙盒重构) | 架构重构、安全收敛 |
| **Gemini CLI** | v0.40.0 (Stable) / v0.41.0 | 10 (AST感知、虚假成功) | 10 (自动续写、隐私修复) | 智能化增强、可靠性 |
| **GitHub Copilot CLI**| v1.0.39 | 10 (计费透明、白名单) | 2 (文档、Devcontainer) | 计费争议、交互体验 |
| **Kimi Code CLI** | v1.40.0 | 10 (自动化控制、句柄耗尽) | 10 (只读模式、Hooks增强) | 自动化工作流、IDE集成 |
| **OpenCode** | v1.14.29 | 10 (跨平台崩溃、进程孤儿) | 10 (工具扩展、SSE修复) | 桌面端稳定性、开源生态 |
| **Qwen Code** | v0.15.4 | 10 (思维链兼容、Rewind失效) | 10 (后台任务、压缩修复) | 第三方模型适配、任务管理 |

## 3. 共同关注的功能方向

*   **大上下文与记忆管理**
    *   **现象**：OpenAI Codex (#19464)、GitHub Copilot (#2967) 用户均强烈抗议上下文窗口限制低于 API 标称值；Claude Code 出现静默删除历史问题 (#46621)。
    *   **诉求**：开发者需要真实可用的长上下文，以及透明的上下文压缩/管理策略（如 Gemini 的自动续写 PR #26159）。

*   **精细化权限与安全控制**
    *   **现象**：OpenAI Codex 废弃 `--full-auto` 并重构沙盒权限 (#20133)；GitHub Copilot (#1973) 和 Kimi Code (#2105) 社区强烈呼吁工具白名单和统一的自动模式。
    *   **诉求**：社区正在抛弃"全有或全无"的权限模式，追求"只读白名单"、"显式信任"等精细化的安全控制，以平衡自动化效率与代码安全。

*   **Agent 执行可靠性 (可靠性焦虑)**
    *   **现象**：Gemini CLI 出现子代理误报成功 (#22323)；Claude Code 恶意软件误拦截回归 (#49363)；Qwen Code 的 DeepSeek V4 思维链兼容问题 (#3579)。
    *   **诉求**：开发者对 Agent 任务执行的确定性要求极高，对"假阳性"成功、模型幻觉导致的工具调用失败零容忍。

## 4. 差异化定位分析

*   **Claude Code**：**企业级安全与插件生态**。重点解决 Bedrock 企业级服务和 MCP 插件系统的稳定性，但近期受困于严重的回归 Bug 和数据持久化问题，显示出在快速迭代中质量控制的挑战。
*   **OpenAI Codex**：**架构激进派**。以一天 4 个 Alpha 版本的速度重构底层（Rust Core），率先在安全架构上"开倒车"（移除 Full-Auto）以求长远安全，技术决策激进且果断。
*   **Gemini CLI**：**智能化与代码感知**。通过引入 AST 感知搜索 (#22745) 和工具调用自动修复 (#26158)，试图在模型层面提升 Agent 的"智商"，减少低级错误，走技术驱动路线。
*   **GitHub Copilot CLI**：**商业化与集成**。核心痛点集中在计费透明度 (#2591) 和 IDE 深度集成体验上，作为付费闭源产品，用户对其"隐形消耗"和功能阉割（如 UI 选项缺失）更为敏感。
*   **Kimi Code CLI / Qwen Code**：**国产化与模型兼容先锋**。重点发力第三方模型（如 DeepSeek）的思维链适配和本土化 IDE 集成，功能迭代快，更注重本地化开发体验（如后台任务管理）。
*   **OpenCode**：**开源跨平台方案**。专注于桌面端体验和自托管模型支持，但在跨平台兼容性（Windows/Mac M1）上遭遇瓶颈，主要解决基础稳定性问题。

## 5. 社区热度与成熟度

*   **最活跃/激进**：**OpenAI Codex** 和 **Gemini CLI**。两者 PR 提交频繁，架构调整幅度大，显示出官方团队正在为下一阶段的 Agent 能力做底层铺垫。
*   **痛点最多**：**Claude Code**。近期回归 Bug 和数据丢失问题引发社区强烈反弹，表明其功能迭代与稳定性维护之间存在失衡，急需质量回溯。
*   **需求最明确**：**GitHub Copilot CLI**。社区讨论高度集中在"价值感知"（计费、上下文限制）上，反映出成熟商业产品用户对"性价比"和"透明度"的严苛要求。

## 6. 值得关注的趋势信号

1.  **思维链模型的适配难题**：Qwen Code 对 DeepSeek V4 的适配问题揭示了新一代推理模型的通病——`reasoning_content` 的上下文回传处理尚未标准化。所有接入第三方推理模型的 CLI 工具都将面临这一架构挑战。
2.  **"全自动"模式的退潮**：OpenAI Codex 废弃 `--full-auto` 是一个标志性事件。这表明行业正在修正对 AI Agent "放任不管"的激进路线，转向"人机协同、关键点确认"的务实路线。
3.  **Agent "可观性"成为刚需**：从 GitHub Copilot 的 Token 指示器需求 (#2052) 到 Kimi Code 的后台任务可视化，开发者不再满足于 Agent "跑完就行"，而是要求实时监控其思维过程、Token 消耗和后台状态。
4.  **回归基础质量**：多个工具（Claude, OpenCode, Gemini）今日均报告了严重的崩溃、卡死或状态错误。在追求 Agentic 能力之前，**稳定性**（进程守护、会话恢复、沙盒隔离）已成为 CLI 工具能否进入生产环境的第一道门槛。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告 (2026-04-29)

基于 `anthropics/skills` 官方仓库的最新数据，以下是社区动态分析报告。

## 1. 热门 Skills 排行（高关注度 PR）

尽管部分 PR 缺乏具体的评论数据，但根据摘要内容的技术深度、解决痛点的普遍性以及 Issue 中的相关讨论，以下是最具影响力的 Skills 动态：

*   **[#83] Add skill-quality-analyzer and skill-security-analyzer**
    *   **功能**：引入两个关键的“元 Skills”，分别用于 Skills 的质量分析（结构、文档、示例）和安全审计。
    *   **热度分析**：这是生态走向成熟的标志。社区开始关注 Skills 本身的质量标准和安全性，而非单纯的功能堆砌。
    *   **状态**：[OPEN] | 链接：https://github.com/anthropics/skills/pull/83

*   **[#514] Add document-typography skill**
    *   **功能**：解决 AI 生成文档中的排版痛点（如孤行、寡行、编号错位）。
    *   **热度分析**：直击 AI 生成内容的“最后一公里”问题。用户习惯了内容正确但格式粗糙的输出，该 Skill 提供了精细化的排版控制，极具实用价值。
    *   **状态**：[OPEN] | 链接：https://github.com/anthropics/skills/pull/514

*   **[#806] feat: add sensory skill (macOS automation)**
    *   **功能**：通过 AppleScript 实现原生 macOS 自动化，替代基于截图的 Computer Use 方案。
    *   **热度分析**：相比截图识别，直接调用系统 API 更稳定、更快速。这是从“视觉交互”向“API 交互”的范式转变，极大拓展了 Claude 在本地的操作能力。
    *   **状态**：[OPEN] | 链接：https://github.com/anthropics/skills/pull/806

*   **[#723] feat: add testing-patterns skill**
    *   **功能**：提供全栈测试模式指导，涵盖测试哲学、单元测试、React 组件测试等。
    *   **热度分析**：开发类 Skills 始终是核心需求。该 Skill 提供了标准化的测试范式，有助于解决 AI 生成代码“能跑但难测”的问题。
    *   **状态**：[OPEN] | 链接：https://github.com/anthropics/skills/pull/723

*   **[#210] Improve frontend-design skill clarity**
    *   **功能**：优化现有的前端设计 Skill，提升指令的可执行性和一致性。
    *   **热度分析**：对现有 Skills 的迭代优化。社区开始修正早期 Skills 指令模糊、Token 消耗高的问题，追求更精准的行为控制。
    *   **状态**：[OPEN] | 链接：https://github.com/anthropics/skills/pull/210

*   **[#616] add: HADS skill (Human-AI Document Standard)**
    *   **功能**：定义一种轻量级 Markdown 规范，使文档同时适合人类阅读和 AI 处理。
    *   **热度分析**：随着 AI 辅助编程的普及，文档的“AI 可读性”成为新需求。该 Skill 提出了一套文档标准，具有前瞻性。
    *   **状态**：[OPEN] | 链接：https://github.com/anthropics/skills/pull/616

## 2. 社区需求趋势（Issues 分析）

从高评论文档的 Issues 中，提炼出以下核心诉求：

*   **企业级协作与共享机制**
    *   **需求**：Issue #228 强烈呼吁支持组织内部 Skills 共享。目前分享需手动下载上传，流程繁琐。
    *   **趋势**：Skills 正从“个人工具”转向“团队资产”，企业用户急需权限管理和版本分发能力。

*   **平台稳定性与基础体验**
    *   **需求**：Issue #62（Skills 消失）、#406（上传报错）、#403（删除失败）集中反映了平台基础功能的稳定性问题。
    *   **趋势**：随着用户 Skills 数量增加，存储、版本管理和加载机制的可靠性成为基础门槛。

*   **安全与信任边界**
    *   **需求**：Issue #492 指出社区 Skills 使用 `anthropic/` 命名空间存在误导风险，可能导致用户授予过高权限。
    *   **趋势**：社区开始重视 Skills 的来源验证和权限隔离，安全治理提上日程。

*   **MCP 协议集成**
    *   **需求**：Issue #16 提出 Skills 应作为 MCP (Model Context Protocol) 暴露，实现标准化调用。
    *   **趋势**：Skills 与 MCP 的融合是技术演进的必然方向，旨在解决工具调用的通用性和互操作性问题。

## 3. 高潜力待合并 Skills（活跃 PR）

以下 PR 针对具体痛点进行了修复或增强，处于 Open 状态但具有较高的合并价值：

*   **[#541] fix(docx): prevent tracked change w:id collision**
    *   **理由**：修复了 OOXML 格式中 ID 冲突导致文档损坏的严重 Bug，直接影响文档生成的可用性。
    *   **链接**：https://github.com/anthropics/skills/pull/541

*   **[#539] fix(skill-creator): warn on unquoted description**
    *   **理由**：修复了 YAML 解析的静默失败问题，提升了 Skill Creator 工具的健壮性，减少用户踩坑。
    *   **链接**：https://github.com/anthropics/skills/pull/539

*   **[#509] docs: add CONTRIBUTING.md**
    *   **理由**：填补了社区健康度短板（此前仅 25%），为贡献者提供了标准指南，有助于规范社区贡献流程。
    *   **链接**：https://github.com/anthropics/skills/pull/509

*   **[#666] Remove duplicate skill-creator skill**
    *   **理由**：清理冗余代码，解决上下文窗口污染问题（Issue #189 相关），维护生态清洁。
    *   **链接**：https://github.com/anthropics/skills/pull/666

## 4. Skills 生态洞察

**当前社区最集中的诉求是：从“功能实现”转向“企业级治理与稳定性”，即用户不再满足于单一 Skills 的能力展示，而是迫切需要稳定可靠的平台支持、安全的权限管理以及团队协作机制。**

---

# Claude Code 社区动态日报 (2026-04-29)

## 1. 今日速览
Claude Code 今日发布了 **v2.1.122** 版本，主要增强了 Bedrock 服务层级选择功能，并改进了 `/resume` 对 PR 链接的识别能力。社区方面，**回归 Bug** 成为焦点，尤其是恶意软件提醒导致子智能体拒绝执行的问题（#49363）引发了大量讨论。此外，数据丢失风险（会话历史被静默删除）和服务稳定性问题（Dispatch 离线、Web 端执行失败）是用户反馈的痛点。

## 2. 版本发布
- **[v2.1.122](https://github.com/anthropics/claude-code/releases/tag/v2.1.122)**
  - **新增环境变量**：支持 `ANTHROPIC_BEDROCK_SERVICE_TIER`，可配置 Bedrock 服务层级（`default`、`flex`、`priority`），对应 `X-Amzn-Bedrock-Service-Tier` 请求头。
  - **功能改进**：在 `/resume` 搜索框中粘贴 PR URL 现在可以找到创建该 PR 的会话。

## 3. 社区热点 Issues (Top 10)

1.  **[OPEN] #49363 回归 Bug：恶意软件提醒仍导致子智能体拒绝执行**
    *   **重要性**：严重影响 Agent Teams 功能。此问题曾在 v2.1.92 修复，但在 v2.1.111 及后续版本复发，导致 `Read` 和 `Grep` 操作被拦截。
    *   **社区反应**：评论数 21，点赞 25。用户抱怨旧 Bug 复发极大地破坏了自动化工作流。
    *   链接: [anthropics/claude-code Issue #49363](https://github.com/anthropics/claude-code/issues/49363)

2.  **[OPEN] #45937 Dispatch 主会话永久离线**
    *   **重要性**：跨设备协作功能受阻。移动端显示桌面端离线，但 Cowork 任务却能正常运行，表明连接逻辑存在断层。
    *   **社区反应**：评论数 21。用户反馈该问题已持续数周，严重影响远程办公体验。
    *   链接: [anthropics/claude-code Issue #45937](https://github.com/anthropics/claude-code/issues/45937)

3.  **[OPEN] #45775 Gmail MCP 回归：create_draft 缺少 threadId 参数**
    *   **重要性**：MCP 集成问题。Gmail 工具无法正确处理邮件线程，导致起草邮件功能失效。
    *   **社区反应**：评论数 20，点赞 19。作为高频使用的 MCP 工具，该回归问题影响面较广。
    *   链接: [anthropics/claude-code Issue #45775](https://github.com/anthropics/claude-code/issues/45775)

4.  **[OPEN] #46621 严重：Claude Code 静默删除会话历史**
    *   **重要性**：数据安全问题。系统自动清理 `~/.claude/projects/` 下的 `.jsonl` 文件，且无通知或配置项，导致用户丢失重要上下文。
    *   **社区反应**：被标记为 "data-loss"，引发用户对数据持久性的严重担忧。
    *   链接: [anthropics/claude-code Issue #46621](https://github.com/anthropics/claude-code/issues/46621)

5.  **[OPEN] #54509 Claude Code Web — 4月28日宕机导致所有会话被销毁**
    *   **重要性**：服务端故障。昨日的服务中断似乎引发了账户级别的数据损坏，导致用户登录后无法恢复之前的会话。
    *   **社区反应**：今日新鲜出炉的 Issue，影响了 Web 端用户的连续性。
    *   链接: [anthropics/claude-code Issue #54509](https://github.com/anthropics/claude-code/issues/54509)

6.  **[OPEN] #15762 [FEATURE] 智能会话重命名**
    *   **重要性**：高频需求。用户希望能根据上下文自动或便捷地重命名会话，以便管理多任务窗口。
    *   **社区反应**：点赞数高达 36，表明用户体验层面的优化需求强烈。
    *   链接: [anthropics/claude-code Issue #15762](https://github.com/anthropics/claude-code/issues/15762)

7.  **[OPEN] #24479 [FEATURE] ~/.claude.json 应存储在 ~/.claude 目录**
    *   **重要性**：文件管理规范。避免用户 Home 目录被隐藏文件“污染”。
    *   **社区反应**：点赞数 32，社区对规范化配置文件路径的呼声很高。
    *   链接: [anthropics/claude-code Issue #24479](https://github.com/anthropics/claude-code/issues/24479)

8.  **[OPEN] #53872 Opus 4.7 [1M] 上下文被限制在 500K**
    *   **重要性**：计费与权限问题。Max x20 订阅用户无法使用宣称的 1M 上下文，疑似服务端旧标志位未清除。
    *   **社区反应**：用户反映全新安装也无法解决，怀疑是服务端强制限制。
    *   链接: [anthropics/claude-code Issue #53872](https://github.com/anthropics/claude-code/issues/53872)

9.  **[OPEN] #53563 远程控制：Token 过期导致所有活跃会话崩溃**
    *   **重要性**：稳定性问题。OAuth Token 刷新机制失效，直接导致进程崩溃而非重连。
    *   **社区反应**：远程控制功能的可靠性问题影响了重度用户。
    *   链接: [anthropics/claude-code Issue #53563](https://github.com/anthropics/claude-code/issues/53563)

10. **[OPEN] #30039 [FEATURE] 原生上下文图谱**
    *   **重要性**：长期记忆增强。提议构建时序知识图谱以防止幻觉，弥补当前 `MEMORY.md` 平面文本的不足。
    *   **社区反应**：较为高阶的功能讨论，关注跨会话的学习能力。
    *   链接: [anthropics/claude-code Issue #30039](https://github.com/anthropics/claude-code/issues/30039)

## 4. 重要 PR 进展

今日共有 6 个 PR 更新，主要集中在修复插件系统的 Bug 和文档改进：

1.  **[OPEN] #54429 修复 hookify 导入前缀问题**
    *   解决了 hookify 插件在版本化缓存中无法正确解析导入路径的问题。
    *   链接: [anthropics/claude-code PR #54429](https://github.com/anthropics/claude-code/pull/54429)

2.  **[OPEN] #54103 修复 commit-commands 中 Bash 调用权限**
    *   补充了 `/commit-push-pr` 命令中缺失的 `git diff` 和 `git branch` 等操作的 `allowed-tools` 权限，避免流程中断。
    *   链接: [anthropics/claude-code PR #54103](https://github.com/anthropics/claude-code/pull/54103)

3.  **[OPEN] #54094 修复插件钩子命令中的路径空格问题**
    *   修复了当 `$CLAUDE_PLUGIN_ROOT` 路径包含空格时，Shell 会错误分割路径导致钩子执行失败的问题。
    *   链接: [anthropics/claude-code PR #54094](https://github.com/anthropics/claude-code/pull/54094)

4.  **[OPEN] #54424 文档：明确 manifest 中 repository 字段格式**
    *   明确了插件清单中 `repository` 字段仅接受字符串，修正了文档中模棱两可的描述。
    *   链接: [anthropics/claude-code PR #54424](https://github.com/anthropics/claude-code/pull/54424)

5.  **[OPEN] #54391 文档：完善 Bug 报告计算类问题的指引**
    *   优化了 Issue 模板，要求用户提供更精确的计算输入和假设，便于排查费用、精度等问题。
    *   链接: [anthropics/claude-code PR #54391](https://github.com/anthropics/claude-code/pull/54391)

6.  **[OPEN] #54134 修正 README 中的 MacOS 拼写**
    *   将文档中的 `MacOS` 统一修正为官方标准写法 `macOS`。
    *   链接: [anthropics/claude-code PR #54134](https://github.com/anthropics/claude-code/pull/54134)

## 5. 功能需求趋势

*   **会话持久化与管理**：用户对会话的连续性要求极高。从"智能重命名"（#15762）、"恢复任意会话"（#44063）到"撤销清空"（#39975），再到对"静默删除历史"（#46621）的恐慌，表明当前的会话管理机制尚不能满足重度用户的需求。
*   **跨会话记忆增强**：社区开始探讨超越简单 `MEMORY.md` 的解决方案，如构建"原生上下文图谱"（#30039），以实现跨会话学习和防止幻觉。
*   **IDE 深度集成**：VS Code 扩展的功能对齐（如粘贴图片 #52647）以及 MCP 工具的稳定性（如 Gmail 回归问题 #45775）是开发者关注的重点。

## 6. 开发者关注点

*   **回归 Bug 频发**：今日最受关注的 Issue 之一是关于子智能体拒绝执行的回归（#49363），结合之前的 WSL1 损坏（#38788），开发者对版本升级带来的不稳定性感到焦虑。建议在升级关键版本前做好回滚准备。
*   **Token 与上下文限制**：多名开发者报告了 Opus 模型上下文窗口被意外限制的问题（#53872），以及 Token 过期导致的崩溃（#53563），这直接影响了开发效率和成本控制。
*   **插件与扩展开发**：近期 PR 集中在修复插件系统的路径和权限问题（#54429, #54094），说明插件生态正在活跃发展中，但基础路径解析和权限配置仍需注意。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-04-29)

## 1. 今日速览
今日 OpenAI Codex 团队发布节奏紧凑，Rust 核心组件在一天内连续迭代了 4 个 Alpha 版本（v0.126.0-alpha.9 至 .12），显示出底层架构正在经历快速重构。社区方面，关于 GPT-5.5 在 Codex 中 400K 上下文窗口限制的讨论持续升温，开发者强烈呼吁对齐 API 的 1M 上下文支持。此外，CLI 正在经历重大的沙盒权限架构调整，标志性的 `--full-auto` 模式即将被废弃。

## 2. 版本发布
- **Rust Core v0.126.0-alpha.9 ~ v0.126.0-alpha.12**
  - **更新内容**：过去 24 小时内密集发布了 4 个 Alpha 版本，主要涉及底层依赖更新和性能优化，为即将到来的 v0.126.0 正式版做最后冲刺。

## 3. 社区热点 Issues (Top 10)

1.  **[热议] 请求支持 GPT-5.5 的 1M Token 上下文**
    - **链接**: [#19464](https://github.com/openai/codex/issues/19464)
    - **看点**: 社区对 GPT-5.5 在 Codex 中仅有 400K 上下文表示不满，认为与 API 版本的 1M 能力不对等，影响了长代码库任务的连续性。目前评论数已达 74 条，是今日最热议题。

2.  **[功能] 项目级 MCP (Model Context Protocol) 配置支持**
    - **链接**: [#2628](https://github.com/openai/codex/issues/2628)
    - **看点**: Issue 已关闭，相关功能可能已在开发或部分实现。社区长期渴望能为不同项目配置独立的 MCP 服务器，以便更好地管理工具链上下文。

3.  **[Bug] WSL 环境下遗留空 .codex 文件导致沙盒回归问题**
    - **链接**: [#16088](https://github.com/openai/codex/issues/16088)
    - **看点**: 影响 WSL 用户的顽固 Bug，当项目目录无配置文件时，Codex 会遗留空文件干扰后续运行，目前仍处于 Open 状态。

4.  **[Bug] Windows CLI 自 v0.100 版本起输入延迟严重**
    - **链接**: [#11678](https://github.com/openai/codex/issues/11678)
    - **看点**: 该 Issue 已关闭，困扰 Windows 用户多时的 TUI 输入卡顿问题有望在最新版本中解决。

5.  **[Bug] macOS Intel 版 "Computer Use" 插件不可用**
    - **链接**: [#18404](https://github.com/openai/codex/issues/18404)
    - **看点**: 尽管设置中显示 MCP 服务器已启用，但 Intel Mac 用户仍无法使用 Computer Use 功能，影响面较广。

6.  **[功能] 请求桌面端 App 支持自定义模型提供商**
    - **链接**: [#10867](https://github.com/openai/codex/issues/10867)
    - **看点**: CLI 已支持切换自定义模型，但桌面端 App 仍受限，开发者呼吁统一两端体验。

7.  **[功能] CLI 支持 Auto 推理模式**
    - **链接**: [#8649](https://github.com/openai/codex/issues/8649)
    - **看点**: 用户希望 CLI 能根据任务复杂度自动选择推理层级，优化成本与性能的平衡。

8.  **[Bug] GPT-5.5 更新后桌面端侧边栏自动化入口消失**
    - **链接**: [#19747](https://github.com/openai/codex/issues/19747)
    - **看点**: 近期更新引入的 UI 回归问题，导致部分设置和菜单失效。

9.  **[功能] CLI 增加 --worktree 和 --tmux 标志**
    - **链接**: [#12862](https://github.com/openai/codex/issues/12862)
    - **看点**: 开发者希望简化工作流，通过一条命令即可在隔离的 Git worktree 和 tmux 会话中启动 Codex。

10. **[安全] 安全扫描页面创建后加载失败**
    - **链接**: [#19793](https://github.com/openai/codex/issues/19793)
    - **看点**: Codex Security 功能在新扫描创建后报错 "Invalid URL"，影响了企业用户的安全审计流程。

## 4. 重要 PR 进展 (Top 10)

1.  **[架构调整] 废弃 CLI 的 --full-auto 模式**
    - **链接**: [#20133](https://github.com/openai/codex/pull/20133)
    - **内容**: 出于安全考虑，移除 TUI 中的 `--full-auto` 选项，并标记 CLI 标志为废弃，转而推荐更精细的一次性信任流程。

2.  **[沙盒重构] 增加 Sandbox 权限配置显式控制**
    - **链接**: [#20117](https://github.com/openai/codex/pull/20117)
    - **内容**: 引入显式的沙盒权限配置文件，允许用户脱离隐式配置，更精确地定义沙盒行为，这是权限系统模块化的重要一步。

3.  **[沙盒重构] 增加 Sandbox 回放 JSON 模式**
    - **链接**: [#20119](https://github.com/openai/codex/pull/20119)
    - **内容**: 配合权限重构，允许通过 JSON 文件忠实回放已解析的沙盒状态，便于调试和测试。

4.  **[性能] apply_patch 流式解析器优化**
    - **链接**: [#19160](https://github.com/openai/codex/pull/19160)
    - **内容**: 重构 `apply_patch` 为状态化的增量解析器，处理大型补丁的速度提升 10-15 倍。

5.  **[MCP] 使用远程插件缓存提升 Skills 和 MCP 加载速度**
    - **链接**: [#20096](https://github.com/openai/codex/pull/20096)
    - **内容**: 引入远程插件状态缓存，解决 Skills 加载必须依赖本地市场条目的问题，提升远程 MCP 服务器的启动效率。

6.  **[安全] 强化 Linux 沙盒对工作区元数据的保护**
    - **链接**: [#19852](https://github.com/openai/codex/pull/19852)
    - **内容**: 确保 `.git`、`.agents` 等关键元数据目录在可写工作区内保持只读，除非策略显式允许写入，防止 AI 误操作破坏版本库。

7.  **[Bug修复] 修复 Heredoc 解析中的文件重定向回归问题**
    - **链接**: [#20113](https://github.com/openai/codex/pull/20113)
    - **内容**: 修正了 PR #10941 引入的回归 Bug，防止 Heredoc 语法绕过规则进行文件重定向批准。

8.  **[功能] 持久化 Hook 启用状态**
    - **链接**: [#19840](https://github.com/openai/codex/pull/19840)
    - **内容**: 允许客户端持久化用户的 Hook 偏好设置，并在已打开的会话中生效，提升自动化脚本的易用性。

9.  **[UI] 插件市场移除功能**
    - **链接**: [#19843](https://github.com/openai/codex/pull/19843)
    - **内容**: 在 `/plugins` 菜单中增加移除用户配置的市场源的功能，完善了插件管理体验。

10. **[架构] 沙盒移除 full-auto 快捷方式**
    - **链接**: [#20120](https://github.com/openai/codex/pull/20120)
    - **内容**: 配合 #20133 的废弃计划，从沙盒子命令中移除 `--full-auto` 快捷方式，推动显式权限配置。

## 5. 功能需求趋势
- **大上下文支持**: 开发者对 GPT-5.5 的 1M 上下文支持呼声极高，这已成为制约 Codex 处理大型单体应用的主要瓶颈。
- **精细化权限与安全**: 最近的 PR 动向显示，Codex 正在移除粗粒度的 "Full Auto" 模式，转向更安全的显式权限配置，社区对此持观望态度，关注新工作流的易用性。
- **多平台体验一致性**: macOS Intel 版本的 Bug、Windows 的性能问题以及 App 端缺失自定义模型功能，显示出用户对不同平台体验一致性的强烈需求。

## 6. 开发者关注点
- **迁移成本**: 随着 `--full-auto` 的废弃和沙盒权限系统的重构，现有自动化脚本和工作流可能面临调整，建议开发者关注后续的迁移文档。
- **性能优化**: `apply_patch` 解析器的显著提速是一个积极信号，表明团队正在关注代码修改层面的性能瓶颈。
- **MCP 生态**: 社区对项目级 MCP 的持续关注和官方对远程插件缓存的优化，表明 MCP 作为 Codex 工具链扩展的核心地位正在加强。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-04-29)

## 1. 今日速览
今日 Gemini CLI 发布了 **v0.40.0 正式版**与 **v0.41.0 预览版**，重点修复了 OpenSSL 流传输错误及 UI 交互细节。社区热议集中在 **Agent 的自主性与稳定性**，包括 AST 感知代码搜索的架构探讨、子代理达到步数限制后误报成功的严重 Bug，以及针对大文件对话导致的崩溃修复。此外，隐私保护与 API Key 兼容性修复也成为关注焦点。

## 2. 版本发布

### v0.40.0 (Stable)
- **核心修复**：针对 OpenSSL 3.x 版本在流式传输中出现的 SSL 错误增加了重试机制，显著提升了网络不稳定环境下的连接稳定性。
- **链接**：[v0.40.0 Changelog](https://github.com/google-gemini/gemini-cli/releases/tag/v0.40.0)

### v0.41.0-preview.0 & Nightly
- **UI 优化**：修复了空输入时错误显示 `list` 提示的问题；修复了自定义主题文本 Schema 中缺失的响应键。
- **更新体验**：当自动更新失败时，新增手动更新命令的提示指引。
- **链接**：[v0.41.0-preview.0 Changelog](https://github.com/google-gemini/gemini-cli/releases/tag/v0.41.0-preview.0)

## 3. 社区热点 Issues

1.  **[EPIC] AST 感知文件读取与搜索评估** [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
    - **重要性**：这是一个高层架构改进提案，旨在通过 AST（抽象语法树）感知工具减少 Token 噪音并提高代码读取精度。社区认为这是提升 Agent 处理大型代码库能力的关键方向。

2.  **[P1] 子代理在 MAX_TURNS 后误报 "GOAL Success"** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
    - **重要性**：严重的状态管理 Bug。当子代理步数达到上限被中断时，系统错误地将其标记为“成功”，导致主代理误判任务完成，掩盖了实际发生的错误。

3.  **CLI 重复请求同一文件权限** [#24916](https://github.com/google-gemini/gemini-cli/issues/24916)
    - **重要性**：影响用户体验的痛点。用户反馈“记住权限”或“以后允许”设置偶尔失效，导致频繁打断工作流。

4.  **Shell 命令执行后卡死在 "Waiting input"** [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
    - **重要性**：严重的主进程阻塞问题。简单 Shell 命令执行完毕后，CLI 界面仍显示等待输入，导致用户无法继续操作。

5.  **Agent 工具数量超过 128 个时触发 400 错误** [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
    - **重要性**：扩展性瓶颈。随着工具生态丰富，Agent 注册工具过多会导致 API 报错，需优化工具范围管理策略。

6.  **模型频繁在随机位置创建临时脚本** [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)
    - **重要性**：代码整洁度问题。模型倾向于生成临时编辑脚本散落在各目录，增加了清理成本，建议限制或规范生成路径。

7.  **实现截断响应的自动续写功能** [#26157](https://github.com/google-gemini/gemini-cli/issues/26157)
    - **重要性**：长上下文处理需求。建议当响应因 Token 限制被截断（`finishReason: MAX_TOKENS`）时，自动检测并提示模型继续，保持对话连贯。

8.  **Browser Agent 忽略 settings.json 配置** [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)
    - **重要性**：配置系统缺陷。Browser Agent 未正确读取合并后的全局或项目级设置（如 `maxTurns`），导致配置覆盖失效。

9.  **子代理需感知当前的审批模式** [#23582](https://github.com/google-gemini/gemini-cli/issues/23582)
    - **重要性**：Agent 协作优化。子代理目前不了解当前处于“计划模式”还是“自动编辑模式”，常导致指令冲突。

10. **[UI] SSH 环境下文本显示乱码** [#24202](https://github.com/google-gemini/gemini-cli/issues/24202)
    - **重要性**：远程开发环境兼容性问题。Windows 用户通过 SSH 连接 Linux 时出现界面乱码，影响 CLI 在服务器端的可用性。

## 4. 重要 PR 进展

1.  **feat(core): 实现截断响应的自动续写** [#26159](https://github.com/google-gemini/gemini-cli/pull/26159)
    - **内容**：实现了 Issue #26157 的需求，针对旧版 Agent 会话，在检测到 `MAX_TOKENS` 截断时自动恢复对话上下文，提升长文本生成的鲁棒性。

2.  **feat(core): 实现工具调用的自动修复** [#26158](https://github.com/google-gemini/gemini-cli/pull/26158)
    - **内容**：引入模糊匹配和标准化逻辑，自动修复模型输出的轻微拼写错误或格式错误的工具名称，减少因模型幻觉导致的调用失败。

3.  **fix(auth): 兼容包含特殊字符的 API Key** [#25578](https://github.com/google-gemini/gemini-cli/pull/25578)
    - **内容**：修复了从 AI Studio 获取的包含句点（.）的 API Key 无法粘贴的问题，遵循 RFC 3986 标准处理未保留字符。

4.  **fix(core): 处理超大对话对象的 RangeError 崩溃** [#25364](https://github.com/google-gemini/gemini-cli/pull/25364)
    - **内容**：解决了极长对话历史导致 `JSON.stringify` 抛出 `Invalid string length` 并致使 CLI 崩溃的问题，增加了健壮的错误捕获。

5.  **feat(core): 遥测日志中的隐私保护修复** [#26153](https://github.com/google-gemini/gemini-cli/pull/26153)
    - **内容**：修复了在 `logPrompts: false` 配置下，仍向 OpenTelemetry 发送用户敏感内容的问题，确保遥测数据合规。

6.  **feat(mcp): 优化 list 命令性能** [#25376](https://github.com/google-gemini/gemini-cli/pull/25376)
    - **内容**：解耦了 MCP 列表命令与连接检查，默认跳过强制 Ping，显著提升了 MCP 服务器管理速度。

7.  **feat(core): 事件驱动的 Hook 系统消息** [#25957](https://github.com/google-gemini/gemini-cli/pull/25957)
    - **内容**：重构了 Hook 消息处理机制，改为事件驱动，解决了 UI 未订阅时消息丢失的问题。

8.  **fix(core): 流式传输错误的自动重试** [#25360](https://github.com/google-gemini/gemini-cli/pull/25360)
    - **内容**：将 `ERR_STREAM_PREMATURE_CLOSE` 加入可重试错误列表，防止长文本生成过程中因网络抖动意外中断。

9.  **refactor(acp): ACP 客户端模块化重构** [#26143](https://github.com/google-gemini/gemini-cli/pull/26143)
    - **内容**：将巨大的 `acpClient.ts` 文件拆分为多个专注模块，提升代码可维护性，完成 ACP 重构计划的第一阶段。

10. **feat: Eval 评估总结与失败分析** [#25361](https://github.com/google-gemini/gemini-cli/pull/25361)
    - **内容**：引入结构化的评估摘要，自动聚合失败原因并提供可执行建议，优化开发者的调试体验。

## 5. 功能需求趋势

-   **Agent 智能与稳定性**：社区强烈呼吁提升 Agent 的上下文感知能力（如 AST 感知、权限状态感知）和任务执行的可靠性（如自动重试、状态正确报告）。对“假阳性”成功状态的修复需求迫切。
-   **长上下文与大文件支持**：随着使用场景复杂化，针对超大对话历史的内存管理、响应截断后的自动续写成为刚需。
-   **远程与容器化环境兼容**：SSH 乱码、临时路径报错等问题的提出，显示出 CLI 在非本地标准环境下的兼容性仍有提升空间。

## 6. 开发者关注点

-   **工具调用容错性**：开发者希望 CLI 具备更高的鲁棒性，能够容忍模型输出的微小错误（如工具名拼写错误），而不是直接失败。
-   **隐私与安全**：对 `logPrompts` 配置项的实际生效情况高度敏感，关注代码中是否泄露敏感信息到遥测系统。
-   **UI/UX 细节**：界面卡死、权限弹窗循环、乱码等直接影响使用体验的问题反馈集中，开发者期待更流畅的 TUI（终端用户界面）交互。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-04-29)

## 1. 今日速览
GitHub Copilot CLI 今日发布了 **v1.0.39** 版本，重点增强了 ACP（Agent Client Protocol）会话的控制能力，新增了后台任务切换快捷键（Ctrl+x → b）及多个实用的斜杠命令。社区讨论热点集中在模型上下文窗口管理、高级请求计费的透明度问题，以及对交互模式下工具权限白名单的强烈需求。

## 2. 版本发布
**版本号：v1.0.39** (发布于 2026-04-28)

本次更新显著提升了会话控制与交互体验：
*   **ACP 增强**：允许 ACP 客户端通过会话配置切换 `allow-all` 权限模式；新增 `/compact`、`/context`、`/usage` 和 `/env` 斜杠命令。
*   **任务管理**：引入快捷键 `Ctrl+x → b`，支持将当前运行的任务或 Shell 命令移至后台运行。
*   **体验优化**：改进了 `--resume` 会话选择器的布局与状态显示；`/remote` 状态输出现为每种连接状态提供可操作的提示；修复了子进程标准流的瞬态管道错误。

## 3. 社区热点 Issues

以下筛选了 10 个最具代表性的 Issues，涵盖了模型配置、计费争议与功能请求：

1.  **[#2725](https://github.com/github/copilot-cli/issues/2725) GPT-5.4 模型选择器隐藏 "Extra High" 选项**
    *   **状态**：已关闭
    *   **看点**：用户发现 UI 选择器中 GPT-5.4 仅显示 Low/Medium/High，但 `xhigh` 参数实际可用且有效。这导致了 UI 与运行时能力的不一致，官方已修复该显示 Bug。

2.  **[#2591](https://github.com/github/copilot-cli/issues/2591) 单次会话消耗大量 Premium 请求额度**
    *   **状态**：已关闭
    *   **看点**：用户报告一次请求消耗了 80-100 次 Premium 请求。原因在于 Agent 在思考和工具调用过程中触发了多次后台请求。这是社区对计费机制透明度高度关注的体现。

3.  **[#1973](https://github.com/github/copilot-cli/issues/1973) 交互模式急需“工具白名单”功能**
    *   **状态**：开放
    *   **看点**：目前交互模式要么逐个批准只读操作（如 grep、cat），要么使用风险较高的 `/allow-all`。社区强烈呼吁引入工具白名单配置，以平衡效率与安全（👍 12）。

4.  **[#2967](https://github.com/github/copilot-cli/issues/2967) Opus 4.7 模型上下文窗口过小导致频繁压缩**
    *   **状态**：开放
    *   **看点**：Opus 4.7 在 Copilot Pro+ 下的有效上下文窗口似乎比同类模型小，导致 Auto-compact 触发过于频繁，严重影响长任务体验。

5.  **[#2052](https://github.com/github/copilot-cli/issues/2052) 请求增加持久的 Token/Context 使用量指示器**
    *   **状态**：开放
    *   **看点**：开发者希望界面能像状态栏一样实时显示上下文使用率（如 "45% context used"），以便更好地管理 Prompt 长度（👍 10）。

6.  **[#2205](https://github.com/github/copilot-cli/issues/2205) 终端滚动行为导致无法查看历史输出**
    *   **状态**：开放
    *   **看点**：在特定终端（如 Terminator）中，鼠标滚动不再浏览 Agent 生成的历史记录，而是切换之前的输入，这严重影响了可用性。

7.  **[#1044](https://github.com/github/copilot-cli/issues/1044) ACP 模式缺少斜杠命令支持**
    *   **状态**：开放
    *   **看点**：Copilot ACP 未提供 `available_commands_update`，导致前端（如 Zed 编辑器）无法使用斜杠命令。这反映了 CLI 与编辑器集成的兼容性问题。

8.  **[#2282](https://github.com/github/copilot-cli/issues/2282) 无法连接 MCP 服务器**
    *   **状态**：开放
    *   **看点**：Windows 安装版常见的 MCP 连接失败问题，用户在启动 Copilot 时遭遇连接错误，阻碍了工具扩展功能的使用。

9.  **[#2643](https://github.com/github/copilot-cli/issues/2643) preToolUse Hook 无法静默重写命令**
    *   **状态**：开放
    *   **看点**：即使 Hook 设置了 `permissionDecision: allow`，重写命令时仍会弹出确认框。开发者希望能实现“静默重写”以自动化工作流。

10. **[#334](https://github.com/github/copilot-cli/issues/334) 请求添加 Shell 自动补全支持**
    *   **状态**：开放
    *   **看点**：经典的用户体验需求，希望支持生成 zsh/bash 等 Shell 的 Tab 补全脚本（👍 11）。

## 4. 重要 PR 进展

过去 24 小时内 PR 活动较少，主要以文档维护为主，未发现功能性代码 PR 更新。

1.  **[#3018 Update README.md](https://github.com/github/copilot-cli/pull/3018)**
    *   **内容**：更新项目 README 文档，可能涉及合规性或说明文档的修正。
    *   **状态**：已关闭。

2.  **[#2970 Create devcontainer.json](https://github.com/github/copilot-cli/pull/2970)**
    *   **内容**：添加了 `devcontainer.json` 配置，便于开发者在容器化环境中进行项目开发。
    *   **状态**：已关闭。

## 5. 功能需求趋势

根据近期 Issues 分析，社区功能需求呈现以下三大趋势：

*   **上下文可视化与管理**：随着模型能力增强，上下文窗口管理成为瓶颈。用户不仅需要可视化的 Token 用量指示器（#2052），还需要更精细的自动压缩阈值控制（#1688）和针对特定模型（如 Opus 4.7）的优化。
*   **细粒度的权限控制**：用户对“全有或全无”的权限模式感到沮丧。针对只读工具的白名单配置（#1973, #2174）是目前呼声最高的功能之一，旨在减少交互打断的同时保持安全性。
*   **ACP 与外部集成标准化**：随着 ACP 协议的推广，用户希望 CLI 能更好地支持外部前端（如 Zed），提供更完整的斜杠命令支持和元数据返回（#1044, #1262）。

## 6. 开发者关注点

*   **计费透明度焦虑**：#2591 的热度表明，开发者对 AI 工具的“隐形消耗”非常敏感。Agent 在后台的多轮思考和工具调用导致 Premium 配额迅速耗尽，引发了用户对计费模型的信任危机。
*   **多模型适配问题**：GPT-5.4 和 Opus 4.7 等新模型引入后，出现了 UI 选项缺失（#2725）和上下文策略不兼容（#2967）的问题。开发者希望 CLI 能更快跟进新模型的特性与参数配置。
*   **自动化工作流的阻碍**：高级用户尝试通过 Hooks 实现自动化，但当前的确认弹窗机制（#2643）成为了阻碍，反映出开发者希望 CLI 能提供更深层次的脚本化控制能力。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-04-29)

## 1. 今日速览
Kimi Code CLI 今日发布 **v1.40.0** 版本，重点优化了 Shell 交互体验与 OAuth 认证的稳定性。社区方面，开发者对自动化工作流的控制粒度（如超时配置、自动模式统一）讨论热度较高，同时针对 VS Code 扩展的通知机制提出了明确的改进需求。

## 2. 版本发布
### [v1.40.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.40.0)
- **状态栏增强**：在 Prompt 状态栏中显示当前活跃的 Agent 任务数量，提升多任务并行时的可见性。
- **认证修复**：修复了 OAuth 流程在遇到瞬时故障后的恢复机制，提升了登录稳定性。
- **其他修复**：修正了 `/usage` 命令的显示问题。

## 3. 社区热点 Issues
以下筛选了 10 个最具代表性的 Issue，涵盖了稳定性、用户体验和功能增强：

1.  **[Feature Request] 审批请求超时配置化 ([#1823](https://github.com/MoonshotAI/kimi-cli/issues/1823))**
    - **关注点**：用户希望将硬编码的 5 分钟审批超时改为可配置，甚至无限等待。该 Issue 虽已关闭，但标题备注 "NOT ACTUALLY CLOSED"，显示社区对该功能的迫切需求尚未完全解决。

2.  **[bug] "Too many open files" 导致 Agent 崩溃 ([#2111](https://github.com/MoonshotAI/kimi-cli/issues/2111))**
    - **关注点**：v1.40.0 版本在 macOS 上出现文件句柄耗尽导致程序崩溃的问题，影响了长时间运行任务的稳定性，属于关键 Bug。

3.  **[Feature Request] VS Code 扩展审批通知优化 ([#2040](https://github.com/MoonshotAI/kimi-cli/issues/2040))**
    - **关注点**：当 VS Code 窗口最小化时，用户无法感知审批请求。建议集成 VS Code 原生通知 API (`showInformationMessage`)，改善 IDE 集成体验。

4.  **[Feature Request] 统一“全自动模式” ([#2105](https://github.com/MoonshotAI/kimi-cli/issues/2105))**
    - **关注点**：当前自动批准、非交互模式等标志分散。建议整合为第一类特性的 "Auto Mode"，统一管理 `--yolo`、`--auto-approve` 等行为。

5.  **[bug] MCP 工具列表过长导致初始化错误 ([#2096](https://github.com/MoonshotAI/kimi-cli/issues/2096))**
    - **关注点**：MCP 服务器暴露工具过多会导致初始化失败。随着 MCP 生态发展，对大型工具集的兼容性变得尤为重要。

6.  **[bug] Windows 11 企业版启动缓慢 ([#2106](https://github.com/MoonshotAI/kimi-cli/issues/2106))**
    - **关注点**：通过 `uv` 安装在 Win 11 企业版上启动需耗时 1 分钟以上，严重影响了 Windows 平台的开发体验。

7.  **[bug] Zed ACP Plan 模式下无法写入文件 ([#1745](https://github.com/MoonshotAI/kimi-cli/issues/1745))**
    - **关注点**：在 Zed 编辑器集成环境中，Plan 模式的文件写入权限存在问题，影响了非 VS Code 用户的开发工作流。

8.  **[bug] 子 Agent 超时时间过短 ([#2103](https://github.com/MoonshotAI/kimi-cli/issues/2103))**
    - **关注点**：复杂任务调用子 Agent 时执行时间受限，建议允许更长的超时时间配置。

9.  **[bug] 窗口切换导致焦点事件信息打印在输入框 ([#2107](https://github.com/MoonshotAI/kimi-cli/issues/2107))**
    - **关注点**：Linux (i3wm) 环境下终端焦点事件被错误地作为用户输入处理，属于特定环境下的交互干扰。

10. **[bug] 401 Authentication Error (TUN Mode) ([#1971](https://github.com/MoonshotAI/kimi-cli/issues/1971))**
    - **关注点**：开启 TUN 模式（代理）时认证失败，已通过 PR #2004 修复，关联了网络环境适配问题。

## 4. 重要 PR 进展
以下 PR 反映了项目最新的技术演进方向：

1.  **[Merged] feat(hooks): 支持透明命令重写 ([#1935](https://github.com/MoonshotAI/kimi-cli/pull/1935))**
    - **内容**：新增 `PreToolUse` hook 支持 `updatedInput`，允许在工具执行前透明地重写命令，极大增强了 Agent 的可编程性和控制力。

2.  **[Merged] fix(yolo): 解耦 AFK 模式与自动批准 ([#2045](https://github.com/MoonshotAI/kimi-cli/pull/2045))**
    - **内容**：修复了 `--yolo` 模式下误判为非交互模式的问题，并将“自动批准”与“离开键盘 (AFK)”语义解耦，逻辑更清晰。

3.  **[Open] feat(mcp): 大型 MCP 工具列表防护 ([#2112](https://github.com/MoonshotAI/kimi-cli/pull/2112))**
    - **内容**：针对 Issue #2096 的修复，通过内部注册但在暴露给模型时进行截断或保护，防止请求体过大导致失败。

4.  **[Open] feat(soul): 新增 `/reload-skills` 命令 ([#2097](https://github.com/MoonshotAI/kimi-cli/pull/2097))**
    - **内容**：允许在不重启会话的情况下重新加载技能目录，提升开发调试效率。

5.  **[Open] 只读模式实现 ([#2109](https://github.com/MoonshotAI/kimi-cli/pull/2109))**
    - **内容**：引入 `--readonly` 启动参数和 `/readonly`、`/execute` 命令，支持安全地审查代码变更后批量执行，满足安全审计需求。

6.  **[Open] feat(ui): 自定义输入回显颜色 ([#2110](https://github.com/MoonshotAI/kimi-cli/pull/2110))**
    - **内容**：新增 `/prompt-color` 命令，允许用户自定义输入文本的颜色，解决长对话中用户输入难以区分的问题。

7.  **[Open] fix(acp): Terminal 命令包装修复 ([#2113](https://github.com/MoonshotAI/kimi-cli/pull/2113))**
    - **内容**：修复 ACP (Agent Communication Protocol) 中终端命令的转发逻辑，确保通过 `bash -c` 正确执行。

8.  **[Merged] fix(web): 保留手动设置的会话标题 ([#2102](https://github.com/MoonshotAI/kimi-cli/pull/2102))**
    - **内容**：修复了 Web UI 中自动生成标题流程覆盖用户手动修改标题的问题。

9.  **[Merged] test(ai): 增加端到端精度测试 ([#2085](https://github.com/MoonshotAI/kimi-cli/pull/2085))**
    - **内容**：引入基于 Terminal Bench 2 的准确率测试集，标志着项目开始量化评估 Agent 变更对任务成功率的影响。

10. **[Open] RalphFlow 架构：防止无限循环 ([#1960](https://github.com/MoonshotAI/kimi-cli/pull/1960))**
    - **内容**：提出了一种带临时上下文和收敛检测的迭代架构，旨在解决 Agent 长时间运行时的死循环问题。

## 5. 功能需求趋势
从近期 Issue 和 PR 的动向来看，社区需求呈现以下趋势：
- **自动化与控制权**：用户希望 CLI 在“全自动”和“安全可控”之间有更细致的调节能力，如可配置的超时时间、只读模式、统一 Auto Mode 概念。
- **IDE 深度集成**：对 VS Code 和 Zed 等编辑器的集成要求不再局限于基础功能，而是追求通知系统、文件权限管理等深层交互体验。
- **扩展性与兼容性**：随着 MCP (Model Context Protocol) 的使用加深，对大规模工具集的加载稳定性和过滤机制需求迫切。

## 6. 开发者关注点
- **稳定性痛点**：文件句柄耗尽 (`Too many open files`) 和网络认证恢复是当前影响持续工作的主要障碍。
- **性能体验**：Windows 平台的启动速度优化、Agent 任务调度的超时控制是提升流畅度的关键。
- **可观测性**：开发者对会话 ID、PID 映射（PR #2082）及遥测数据的需求增加，表明在复杂环境下调试和监控 Agent 行为变得愈发重要。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-04-29)

## 1. 今日速览
OpenCode 今日发布 **v1.14.29** 版本，重点优化了会话路径保持、Shell 取消逻辑及 Moonshot/Kimi 模型的兼容性。社区方面，桌面端的稳定性问题（如 Windows 卡死、Mac M1 白屏）引发较多讨论，同时开发团队提交了多项 PR 以扩展内置工具集并修复底层 SSE 挂起等关键 Bug。

## 2. 版本发布
**v1.14.29**
- **Core**: Session 现在保留相对工作区路径，提升了环境迁移的稳定性。
- **Provider**: 针对 Moonshot 和 Kimi 模型清理了 Tool Schemas，以避免工具调用被拒；OAuth 错误信息现已更贴近原生 API 风格。
- **Shell**: 修复了取消操作后的收尾逻辑。

## 3. 社区热点 Issues
1.  **[Windows] 更新后应用卡死无法启动** `#14337`
    - **看点**：Windows 10 用户升级后卡在 "Just a moment..." 界面，终端窗口冻结，严重影响使用。
    - 链接：[anomalyco/opencode Issue #14337](https://github.com/anomalyco/opencode/issues/14337)
2.  **[Mac] M1 Pro 设备通过 Rosetta 2 运行时白屏崩溃** `#15185`
    - **看点**：由于二进制文件包含 Rosetta 2 不支持的 AVX-512 指令，导致桌面版直接 SIGILL 崩溃，属于严重的架构兼容性问题。
    - 链接：[anomalyco/opencode Issue #15185](https://github.com/anomalyco/opencode/issues/15185)
3.  **[Feature] Agent 模型降级策略支持** `#9575`
    - **看点**：社区呼吁在特定 Agent 配置中增加模型降级机制，以便在主模型不可用时自动切换，获得较高点赞数（+14）。
    - 链接：[anomalyco/opencode Issue #9575](https://github.com/anomalyco/opencode/issues/9575)
4.  **[Bug] OpenCode 导致整个终端会话崩溃** `#1220`
    - **看点**：在 Kitty + Tmux 环境下，OpenCode 崩溃会连带整个终端关闭，影响恶劣，评论数达 18 条。
    - 链接：[anomalyco/opencode Issue #1220](https://github.com/anomalyco/opencode/issues/1220)
5.  **[Config] 模型配置找不到可用模型** `#22472`
    - **看点**：中文用户反馈使用 CCSwitch 配置 Claude code 或其他模型时提示找不到模型，涉及 API 端点适配问题。
    - 链接：[anomalyco/opencode Issue #22472](https://github.com/anomalyco/opencode/issues/22472)
6.  **[Bug] 进程孤儿化，终端关闭后 OpenCode 仍在后台运行** `#12767`
    - **看点**：缺乏 SIGHUP 处理导致终端关闭后进程不退出，长期积累会占用大量内存。
    - 链接：[anomalyco/opencode Issue #12767](https://github.com/anomalyco/opencode/issues/12767)
7.  **[Feature] 请求 Ollama Cloud AUTH 登录支持** `#4581`
    - **看点**：用户希望直接通过云端 Ollama 实例使用，而不仅限于本地部署。
    - 链接：[anomalyco/opencode Issue #4581](https://github.com/anomalyco/opencode/issues/4581)
8.  **[Bug] Git Rebase 流程因 nvim-treesitter 报错中断** `#15217`
    - **看点**：Agent 在执行 git rebase 时因 jsonc 解析器安装失败而卡死，影响自动化工作流。
    - 链接：[anomalyco/opencode Issue #15217](https://github.com/anomalyco/opencode/issues/15217)
9.  **[Feature] 屏幕阅读器无障碍支持** `#8565`
    - **看点**：TUI 界面目前的 Emoji 和动画对视障用户不友好，呼吁增加无障碍模式。
    - 链接：[anomalyco/opencode Issue #8565](https://github.com/anomalyco/opencode/issues/8565)
10. **[Bug] UI 渲染重复，助手消息显示两次** `#14935`
    - **看点**：界面渲染 Bug 导致 Assistant 回复文本重复显示，影响阅读体验。
    - 链接：[anomalyco/opencode Issue #14935](https://github.com/anomalyco/opencode/issues/14935)

## 4. 重要 PR 进展
1.  **feat(tool): add open tool for files and URLs** `#24891`
    - **内容**：新增内置 `open` 工具，支持调用系统默认程序打开本地文件、文件夹或 HTTP(S) 链接。
    - 链接：[anomalyco/opencode PR #24891](https://github.com/anomalyco/opencode/pull/24891)
2.  **feat(tool): add hash tool for file checksums** `#24887`
    - **内容**：新增 `hash` 工具，用于计算文件摘要并验证校验和，提升文件操作安全性。
    - 链接：[anomalyco/opencode PR #24887](https://github.com/anomalyco/opencode/pull/24887)
3.  **fix(desktop): recover from renderer reload white screen** `#24884`
    - **内容**：修复桌面端渲染进程重载后出现的白屏问题，增强了 URL 状态校验。
    - 链接：[anomalyco/opencode PR #24884](https://github.com/anomalyco/opencode/pull/24884)
4.  **fix: SSE stream hang causing run --format json to hang indefinitely** `#24762`
    - **内容**：修复在弱网环境下 SSE 连接静默掉线导致程序无限挂起的问题，增加了超时检测。
    - 链接：[anomalyco/opencode PR #24762](https://github.com/anomalyco/opencode/pull/24762)
5.  **[beta] feat: bash->shell tool + pwsh/powershell/cmd support** `#20039`
    - **内容**：将 `bash` 工具重命名为 `shell`，并针对 PowerShell/Cmd 提供特定提示词，优化 Windows 体验。
    - 链接：[anomalyco/opencode PR #20039](https://github.com/anomalyco/opencode/pull/20039)
6.  **fix(core): run sessions with the same directory they were created with** `#24877`
    - **内容**：修复重开或继续会话时工作目录错乱的问题，确保使用会话创建时的目录。
    - 链接：[anomalyco/opencode PR #24877](https://github.com/anomalyco/opencode/pull/24877)
7.  **feat: add free model resolution** `#21907`
    - **内容**：新增模型解析逻辑，支持将 `--model free` 自动解析为随机的免费模型。
    - 链接：[anomalyco/opencode PR #21907](https://github.com/anomalyco/opencode/pull/21907)
8.  **[contributor] Add native LLM core foundation** `#24712`
    - **内容**：引入基于 Effect 的原生 LLM 核心，重构了请求/事件 Schema 和 Provider 适配器，为未来优化铺路。
    - 链接：[anomalyco/opencode PR #24712](https://github.com/anomalyco/opencode/pull/24712)
9.  **fix(config): make resource loading deterministic** `#24652`
    - **内容**：修复配置加载顺序不确定的问题，改用同步排序加载，避免非确定性行为。
    - 链接：[anomalyco/opencode PR #24652](https://github.com/anomalyco/opencode/pull/24652)
10. **fix(app): improve sidebar session load more behavior** `#24867`
    - **内容**：优化侧边栏会话加载逻辑，增加分页大小，减少用户点击“加载更多”的次数。
    - 链接：[anomalyco/opencode PR #24867](https://github.com/anomalyco/opencode/pull/24867)

## 5. 功能需求趋势
- **跨平台兼容性**：Windows 端的稳定性（卡死、崩溃）和 Mac 端的架构适配（M1/Rosetta）是目前最紧迫的需求。
- **模型支持的灵活性**：社区对模型降级策略、第三方 API 兼容（如 OpenAI compatible、Ollama Cloud）以及特定模型参数（如 reasoning_content）的处理有较高期待。
- **工具链增强**：开发者希望 Agent 能更好地与本地环境交互，例如复制代码到剪贴板、打开外部文件/链接、文件校验等。

## 6. 开发者关注点
- **Session 管理与持久化**：开发者反馈了 Session 路径保持、进程孤儿化、上下文丢失等问题，表明在长时间运行的会话管理上仍有优化空间。
- **TUI/桌面端体验细节**：包括非 ASCII 路径支持、退出时的乱码、UI 文本重复渲染等细节问题影响了开发者的日常使用体验。
- **网络与连接稳定性**：SSE 流挂起、OAuth 授权错误提示不明确等网络层问题受到关注，特别是针对不稳定网络环境下的鲁棒性。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-04-29)

## 1. 今日速览
今日 Qwen Code 发布了 **v0.15.4 稳定版**及 **v0.15.3 nightly 版本**，重点引入了 MCP 配置的 CLI 支持及加泰罗尼亚语国际化。社区方面，DeepSeek V4 思维模式的 API 兼容性问题引发热议，同时关于 IDE 集成下的 Rewind 功能失效及后台任务管理的架构改进成为关注焦点。

## 2. 版本发布
**主要版本更新：**
- **v0.15.4**: 新增加泰罗尼亚语支持；修复了 VS Code Companion 中斜杠命令提交后无法触发补全的问题；优化了 CLI 渐变渲染逻辑。
- **v0.15.3-nightly.20260429**: 实现了通过 CLI 参数配置 MCP Server 的功能 (`mcp config as cli`)；修复了模型切换时静态头部刷新的问题。
- **SDK TypeScript v0.1.7**: 捆绑了最新的 CLI v0.15.3 版本。

## 3. 社区热点 Issues
以下筛选了 10 个最具代表性的 Issue，涵盖关键 Bug 与功能规划：

1.  **[#3579](https://github.com/QwenLM/qwen-code/issues/3579) DeepSeek API 报错：思维模式需回传 reasoning_content**
    - **热度**: 👍 0 | 评论 9
    - **解读**: 用户在使用 DeepSeek V4 模型时频繁遇到 400 错误。社区讨论指出这是因为在多轮对话中未正确将模型生成的 `reasoning_content` 回传给 API，导致上下文断裂。这是当前集成第三方思维链模型最紧迫的兼容性问题。

2.  **[#3652](https://github.com/QwenLM/qwen-code/issues/3652) 内部错误：输入长度超出范围**
    - **热度**: 👍 0 | 评论 5
    - **解读**: 在长对话中触发 `Algo.InvalidParameter` 错误，表明自动压缩机制未能及时削减上下文长度。开发者已在 PR #3698 中针对此问题提交了修复方案。

3.  **[#3644](https://github.com/QwenLM/qwen-code/issues/3644) Rewind 功能在 IDE 集成模式下失效**
    - **热度**: 👍 0 | 评论 3
    - **解读**: 当开启 `ide.enabled` 配置时，`/rewind` 回滚功能无法正常工作。这对于依赖 IDE 集成进行开发调试的用户是一个明显的阻碍，急需修复。

4.  **[#3634](https://github.com/QwenLM/qwen-code/issues/3634) 后台任务管理路线图**
    - **热度**: 👍 0 | 评论 2
    - **解读**: 这是一个追踪性质的 Issue，详细规划了后台任务功能的阶段性进展。目前 Phase A/B 已合并，正在推进 Shell 与任务系统的深度整合，反映了项目向更强大的异步任务处理能力演进的意图。

5.  **[#3696](https://github.com/QwenLM/qwen-code/issues/3696) 提议：技能、扩展与配置的热重载系统**
    - **热度**: 👍 0 | 评论 2
    - **解读**: 开发者提出希望在运行时动态加载/重载技能和 MCP 配置，而无需重启会话。这将极大提升开发调试效率，是社区高度期待的开发体验改进。

6.  **[#3304](https://github.com/QwenLM/qwen-code/issues/3304) 会话中途切换模型导致 API 失败**
    - **热度**: 👍 0 | 评论 2
    - **解读**: 用户在对话中途切换模型（如从 Gemini 切换到其他支持思维链的模型）时触发 API 错误。这暴露了会话状态管理在不同模型上下文切换时的健壮性问题。

7.  **[#2786](https://github.com/QwenLM/qwen-code/issues/2786) Agent 思维链处理时无法响应用户中断**
    - **热度**: 👍 1 | 评论 3
    - **解读**: 用户希望能在 Agent 深度思考时插入指令进行纠偏，但当前必须等待思维链处理完毕。这反映了交互体验上的痛点，用户对实时控制权有强烈需求。

8.  **[#3697](https://github.com/QwenLM/qwen-code/issues/3697) 功能请求：Rewind 应支持同步回滚文件修改**
    - **热度**: 👍 0 | 评论 1
    - **解读**: 当前的 `/rewind` 仅回滚对话历史，不撤销磁盘上的文件修改，导致对话状态与代码状态不一致。社区呼吁增加“连文件一起回滚”的选项。

9.  **[#3718](https://github.com/QwenLM/qwen-code/issues/3718) MCP 命令行添加/移除 Bug**
    - **热度**: 👍 0 | 评论 0
    - **解读**: 新近提出的 Bug，涉及 `qwen mcp add` 无法添加 headers 及 `remove` 命令失效的问题，直接关联到今日发布的 CLI 配置功能，需重点关注。

10. **[#3715](https://github.com/QwenLM/qwen-code/issues/3715) DeepSeek V4 Pro 思维模式 400 错误**
    - **热度**: 👍 0 | 评论 0
    - **解读**: 类似于 #3579，进一步证实了 DeepSeek 思维模式在当前版本中存在广泛的兼容性问题。

## 4. 重要 PR 进展
以下 10 个 PR 代表了当前的核心开发动向：

1.  **[#1279](https://github.com/QwenLM/qwen-code/pull/1279) feat: mcp config as cli** [已合并]
    - **内容**: 允许通过命令行参数配置 MCP Server。这使得 CI/CD 集成和脚本化配置更加便捷，是今日版本发布的关键特性。

2.  **[#3698](https://github.com/QwenLM/qwen-code/pull/3698) fix(acp): run auto compression before model sends** [Open]
    - **内容**: 针对 Issue #3652 的修复。在发送请求前强制执行自动压缩流程，防止上下文超长导致的 API 报错，显著提升长对话稳定性。

3.  **[#3720](https://github.com/QwenLM/qwen-code/pull/3720) feat(cli): wire background shells into combined tasks dialog** [Open]
    - **内容**: 将后台 Shell 进程整合到统一的任务管理界面中，配合 Issue #3634 的规划，统一了 SubAgent 和 Shell 的管理视图。

4.  **[#3717](https://github.com/QwenLM/qwen-code/pull/3717) feat(core): add FileReadCache** [Open]
    - **内容**: 引入文件读取缓存，避免在长会话中重复读取未变更的文件内容，有助于减少 Token 消耗和提升响应速度。

5.  **[#3663](https://github.com/QwenLM/qwen-code/pull/3663) fix(cli): harden TUI flicker and streaming output stability** [Open]
    - **内容**: 针对 Issue #3279，集中修复了终端界面（TUI）闪烁、流式输出断流等问题，旨在改善终端下的视觉体验。

6.  **[#3680](https://github.com/QwenLM/qwen-code/pull/3680) feat(cli): expand TUI markdown rendering** [Open]
    - **内容**: 扩展终端对 Markdown 的渲染能力，支持 Mermaid 图表、数学公式等复杂格式，让 CLI 输出更加直观易读。

7.  **[#3721](https://github.com/QwenLM/qwen-code/pull/3721) fix(cli): bound SubAgent display by visual height** [Open]
    - **内容**: 修复 SubAgent 运行时在窄终端下的显示溢出问题，通过动态计算高度防止界面闪烁。

8.  **[#3491](https://github.com/QwenLM/qwen-code/pull/3491) feat: add /diff command** [Open]
    - **内容**: 新增 `/diff` 命令，提供结构化的 Git Diff 统计信息，增强代码变更感知能力。

9.  **[#3684](https://github.com/QwenLM/qwen-code/pull/3684) feat(core): event monitor tool** [Open]
    - **内容**: 实现后台任务路线图的 Phase C，增加监控工具以支持长时运行命令的流式输出捕获。

10. **[#2953](https://github.com/QwenLM/qwen-code/pull/2953) feat(core): support QWEN_HOME env var** [Open]
    - **内容**: 支持通过环境变量自定义配置目录，解决了外挂磁盘或多环境配置隔离的需求。

## 5. 功能需求趋势
- **第三方思维链模型兼容性**: DeepSeek V4 等支持 `reasoning_content` 的模型兼容性问题集中爆发，社区迫切需要完善的思维链上下文管理机制。
- **IDE 集成深度优化**: Rewind 功能失效、上下文注入方式重构（Issue #3712）表明，IDE 集成正从简单的连接向更深度的状态同步演进。
- **任务管理可视化**: 随着 Background Tasks 路线图的推进，用户对后台任务、Agent 执行过程的可视化和控制需求日益增加。

## 6. 开发者关注点
- **API 上下文管理**: 开发者频繁遭遇上下文长度超限错误，自动压缩策略的时机和效果是核心痛点。
- **交互响应性**: Agent 思考时的阻塞问题以及 TUI 的闪烁/渲染稳定性，直接影响了开发者的日常使用体验。
- **配置灵活性**: MCP 配置的 CLI 化和环境变量支持，显示出社区对自动化、脚本化部署场景的重视。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*