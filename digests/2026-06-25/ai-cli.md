# AI CLI 工具社区动态日报 2026-06-25

> 生成时间: 2026-06-25 03:51 UTC | 覆盖工具: 8 个

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

# AI CLI 工具生态横向对比分析报告 (2026-06-25)

## 1. 生态全景
当前 AI CLI 工具生态正处于从"对话助手"向"自主代理"转型的深水区。各主流工具竞相通过 **MCP 协议** 扩展能力边界，构建多 Agent 协作架构，但随之而来的**稳定性（进程崩溃、死循环）**与**资源消耗（内存泄漏、Token 计费异常）**成为制约落地的主要瓶颈。开源与闭源阵营在**安全防护**与**用户控制权**上的博弈日益激烈，开发者对工具的信任成本因模型幻觉和不可控行为显著上升。

## 2. 各工具活跃度对比

| 工具名称 | 版本动态 | 热度 Issues (Top) | 核心进展 PR | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | v2.1.191 | 10+ (高互动) | 4 (安全与限流) | 安全误报、内存泄漏、Rewind |
| **OpenAI Codex** | v0.142.1 | 10+ (高争议) | 10+ (架构重构) | Token 激增、计费 Bug、Ultra 推理 |
| **Gemini CLI** | v0.49.0-nightly | 10+ (P1 优先级) | 10+ (安全与协议) | Agent 挂起、AST 感知、沙盒 |
| **GitHub Copilot CLI**| v1.0.65 | 10+ | 2 (配置与分类) | 插件 Hook、企业配置、配额计算 |
| **Kimi Code CLI** | 无更新 | 4 | 2 (MCP 与 Vim) | Token 浪费、死循环、Vim 支持 |
| **OpenCode** | v1.17.10 | 10+ (高关注) | 10+ (MCP 矩阵) | Bun 崩溃、Session Goals、Schema |
| **Qwen Code** | v0.19.2 | 10+ | 10+ (安全与架构) | 路径遍历、跨设备同步、Cron |
| **DeepSeek TUI** | 无更新 | 10+ | 10+ (架构重构) | Fleet 路由、自问自答、品牌解耦 |

> **注**：Claude Code 与 OpenAI Codex 的 Issue 讨论热度最高，涉及核心计费与稳定性问题；OpenCode 与 Gemini CLI 的 PR 迭代最为激进，主要集中在底层架构与协议支持。

## 3. 共同关注的功能方向

### 3.1 MCP 协议深度集成与安全
*   **涉及工具**：OpenCode, Gemini CLI, Kimi Code CLI, Qwen Code
*   **具体诉求**：社区不再满足于基础 Tool 调用，正在推动 **MCP 资源订阅、模板列表、权限控制** 等高级特性的标准化。同时，**路径遍历漏洞** (Qwen #5834) 和 **不可信内容注入** (Gemini PR #27979) 显示出 MCP 扩展带来的安全风险正被高度重视。

### 3.2 上下文管理与记忆持久化
*   **涉及工具**：Claude Code, Kimi Code CLI, GitHub Copilot CLI, OpenAI Codex
*   **具体诉求**：针对长时任务，开发者强烈要求优化上下文压缩以节省 Token (Kimi #2472)，并支持跨项目、跨设备的记忆同步 (Claude #39195, Qwen #5836)。Copilot 和 Codex 均在探索会话状态的持久化与恢复机制。

### 3.3 Agent 可靠性与控制权
*   **涉及工具**：DeepSeek TUI, Gemini CLI, Claude Code, Qwen Code
*   **具体诉求**：针对 Agent "挂起"、"死循环" (Gemini #21409, Kimi #640) 以及 "自问自答偏离意图" (DeepSeek #3275) 的问题，社区呼吁引入更精细的中断控制、目标管理 以及审批流优化。

## 4. 差异化定位分析

| 工具 | 核心定位 | 技术路线侧重 | 目标用户画像 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **安全与规范优先** | 强调安全防护机制与记忆系统，但面临"过度防御"的困扰。 | 企业级开发者，注重合规与代码安全。 |
| **OpenAI Codex** | **模型能力驱动** | 激进的模型迭代 (Ultra 推理) 与底层架构重构，但计费与稳定性波动大。 | 尝鲜用户、追求最强推理能力的极客。 |
| **Gemini CLI** | **工程化与扩展性** | 引入 AST 感知、沙盒机制，强化 Agent 编排 (ADK)，架构最"重"。 | 复杂项目维护者、需要深度代码分析的场景。 |
| **Copilot CLI** | **IDE 生态无缝集成** | 依托 VS Code 生态，强调企业级配置下发与 Skills 管理，体验最"稳"。 | 微软生态开发者、企业团队。 |
| **OpenCode** | **开源协议激进派** | MCP 协议的急先锋，功能迭代极快，但受困于 Bun 运行时稳定性。 | 开源贡献者、DIY 爱好者、协议开发者。 |
| **Kimi / Qwen** | **成本与本地化体验** | 关注 Token 成本控制、本地 LLM 适配与国产模型生态。 | 成本敏感型开发者、中文语境用户。 |
| **DeepSeek TUI** | **多 Agent 编排** | 转向"Agent Teams"架构，强调多模型路由与 Fleet 调度。 | 高级架构师、需要多模型协作的复杂任务。 |

## 5. 社区热度与成熟度

*   **社区活跃度双雄**：**OpenAI Codex** 与 **OpenCode**。Codex 的讨论多集中在**计费争议** (Token 激增) 和**Windows 兼容性**，显示其用户基数大但痛点明显；OpenCode 的 PR 活动极其频繁，显示其开源社区极高的开发热情。
*   **成熟度标杆**：**GitHub Copilot CLI**。虽然功能更新节奏较慢，但 Issues 多集中在体验优化（如快捷键、目录持久化），而非致命性架构缺陷，显示出较高的产品成熟度。
*   **快速迭代期**：**Gemini CLI** 与 **Qwen Code**。两者均在修复关键的架构问题（如子 Agent 挂起、路径安全），PR 涉及大量底层重构，处于功能完善与稳定性爬坡阶段。

## 6. 值得关注的趋势信号

1.  **"信任危机"倒逼安全与透明度升级**
    *   **信号**：Codex Token 消耗异常激增引发投诉，OpenCode 出现未经授权的 Git Push，Qwen 发现路径遍历漏洞。
    *   **建议**：开发者在选用工具时，应优先评估其**审计日志能力**和**权限颗粒度**。企业级部署需关注 Codex 的计费监控与 Claude Code 的防护白名单配置。

2.  **MCP 成为 Agent 交互事实标准**
    *   **信号**：OpenCode 大量 PR 致力于补全 MCP 协议矩阵，Gemini 和 Qwen 均在强化 MCP Server 的生命周期管理。
    *   **建议**：开发插件或扩展时，应优先遵循 MCP 标准，这将保证工具在未来 Agent 生态中的通用性。

3.  **Windows 平台仍是"重灾区"**
    *   **信号**：Claude Code 内存泄漏、Codex 的 I/O 卡顿、OpenCode 的 Bun 崩溃均主要发生在 Windows 平台。
    *   **建议**：团队若主要开发环境为 Windows，建议优先选择 **GitHub Copilot CLI**（集成度最好）或在 **WSL2** 环境下运行其他 CLI 工具以规避原生兼容性问题。

4.  **从"工具"向"团队成员"演进**
    *   **信号**：OpenCode 的 Session Goals、DeepSeek 的 Fleet 编排、Qwen 的 Loop 事件驱动，都在试图赋予 Agent 持续的目标管理和自主规划能力。
    *   **建议**：开发者需开始适应"监督者"角色，学习如何设定 Agent 边界和目标，而非仅仅编写 Prompt。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告 (2026-06-25)

基于 `anthropics/skills` 官方仓库的数据分析，以下是社区最新的动态热点与趋势洞察。

## 1. 热门 Skills 排行

尽管热门 PR 列表中的具体评论数显示为 `undefined`，但根据 PR 的功能重要性、关联 Issue 热度及更新时间，以下是目前社区关注度最高的 Skills 提交：

1.  **[核心修复] skill-creator 评估工具修复** (#1298)
    *   **功能**：修复 `run_eval.py` 总是报告 0% recall 的问题，该问题导致 Skill 描述优化循环失效。
    *   **状态**：[OPEN]
    *   **热点**：关联 Issue #556，涉及 10+ 个独立复现案例，是当前 Skill 开发工具链中最严重的阻塞性 Bug。
    *   **链接**：[PR #1298](https://github.com/anthropics/skills/pull/1298)

2.  **[新增] skill-quality-analyzer & skill-security-analyzer** (#83)
    *   **功能**：引入两个“元 Skills”，分别用于 Skills 的质量分析（结构、文档、示例）和安全扫描（检测硬编码密钥、不安全模式）。
    *   **状态**：[OPEN]
    *   **热点**：直接响应社区对 Skills 安全性和标准化的关切，是构建良性生态的基础设施。
    *   **链接**：[PR #83](https://github.com/anthropics/skills/pull/83)

3.  **[新增] AppDeploy Skill** (#360)
    *   **功能**：允许 Claude 直接从代码部署全栈 Web App 到公网 URL，支持生命周期管理。
    *   **状态**：[OPEN]
    *   **热点**：补齐了“Coding -> Deploy”的最后一公里，极具实用价值。
    *   **链接**：[PR #360](https://github.com/anthropics/skills/pull/360)

4.  **[新增] Shodh-memory: Agent 持久化记忆** (#154)
    *   **功能**：为 AI Agent 提供跨对话的持久化上下文记忆，维护上下文连续性。
    *   **状态**：[OPEN]
    *   **热点**：解决了 Agent 长期记忆缺失的痛点，是实现复杂自主 Agent 的关键组件。
    *   **链接**：[PR #154](https://github.com/anthropics/skills/pull/154)

5.  **[新增] Document Typography Skill** (#514)
    *   **功能**：自动修复 AI 生成文档中的排版问题（如孤行、寡行、编号错位）。
    *   **状态**：[OPEN]
    *   **热点**：解决了生成文档“能用但难看”的细节体验问题，提升专业度。
    *   **链接**：[PR #514](https://github.com/anthropics/skills/pull/514)

6.  **[新增] ODT Skill** (#486)
    *   **功能**：支持 OpenDocument 格式 的创建、填充与转换。
    *   **状态**：[OPEN]
    *   **热点**：填补了对开源标准文档格式的支持空白，适合政务与企业场景。
    *   **链接**：[PR #486](https://github.com/anthropics/skills/pull/486)

7.  **[新增] Codebase-inventory-audit** (#147)
    *   **功能**：代码库清理与审计，识别孤立代码、废弃文件和文档缺口。
    *   **状态**：[OPEN]
    *   **热点**：针对遗留代码维护的痛点，提供系统化的清理工作流。
    *   **链接**：[PR #147](https://github.com/anthropics/skills/pull/147)

## 2. 社区需求趋势

从高热度 Issues 的讨论中，提炼出以下四大核心需求方向：

1.  **安全与信任边界重构**
    *   **热点 Issue**：#492 (19 条评论)
    *   **趋势**：社区对第三方 Skills 冒充官方 `anthropic/` 命名空间表示严重担忧。用户呼吁建立明确的签名验证机制或隔离命名空间，以防止恶意 Skills 获取过高权限。

2.  **企业级协作与共享**
    *   **热点 Issue**：#228 (14 条评论)
    *   **趋势**：目前 Skills 共享依赖手动下载文件，企业用户强烈要求实现组织内部的 Skills 库共享功能，以便在团队间复用经过验证的 Skills。

3.  **开发工具链的基础稳定性**
    *   **热点 Issue**：#556 (12 条评论), #1169 (3 条评论)
    *   **趋势**：`skill-creator` 的评估脚本 在 Windows 兼容性和核心触发检测逻辑上存在严重缺陷，导致无法正确优化 Skill 描述。开发者急需官方修复底层工具链，以保证 Skill 开发的有效性。

4.  **跨平台与底层兼容性**
    *   **热点 Issue**：#1061, #29
    *   **趋势**：Windows 平台的兼容性问题和 AWS Bedrock 的支持需求较高。社区希望 Skills 能在非 Mac/Linux 环境及不同后端模型上无缝运行。

## 3. 高潜力待合并 Skills

以下 PR 仍处于 Open 状态，但解决了关键 Bug 或提供了高价值功能，近期有望合并：

*   **PR #1298 & #1323 (核心修复)**：彻底修复 `run_eval.py` 无法触发 Skill 的问题（解决 Issue #556）。这是 Skill 开发者的刚需，优先级极高。
    *   链接：[PR #1298](https://github.com/anthropics/skills/pull/1298), [PR #1323](https://github.com/anthropics/skills/pull/1323)
*   **PR #1050 & #1099 (Windows 兼容)**：修复 Windows 下 subprocess 调用失败及编码错误，解决 Issue #1061，将显著扩大开发者基数。
    *   链接：[PR #1050](https://github.com/anthropics/skills/pull/1050)
*   **PR #541 (DOCX 修复)**：修复 DOCX 中书签 ID 冲突导致文档损坏的问题，对企业文档处理至关重要。
    *   链接：[PR #541](https://github.com/anthropics/skills/pull/541)

## 4. Skills 生态洞察

**当前社区在 Skills 层面最集中的诉求是：从“功能堆砌”转向“治理与基建”，亟需解决命名空间安全风险及开发工具链的稳定性问题。**

---

# Claude Code 社区动态日报 (2026-06-25)

## 1. 今日速览
Claude Code 今日发布 **v2.1.191** 版本，新增 `/rewind` 功能支持恢复被清除的对话，并修复了后台 Agent 复活及流式输出滚动跳跃等关键体验问题。社区讨论焦点集中在**内存占用过高**、**安全防护误拦截**以及 **Windows 平台兼容性**上，同时开发者对跨项目共享记忆功能的需求日益强烈。

## 2. 版本发布
- **v2.1.191**
  - **新功能**：支持 `/rewind` 命令，可恢复执行 `/clear` 之前的对话状态。
  - **Bug 修复**：修复了流式响应期间阅读历史输出时滚动条自动跳转到底部的问题；修复了已停止的后台 Agent 任务“复活”的问题。
- **v2.1.190**
  - 常规 Bug 修复与稳定性提升。

## 3. 社区热点 Issues (Top 10)

1.  **[OPEN] API 返回 `redacted_thinking` 导致插件报错 (#36179)**
    - **标签**: Bug / Windows / API
    - **热度**: 💬 30 | 👍 18
    - **摘要**: Windows 平台用户频繁遭遇 `Unsupported content type: redacted_thinking` 错误，导致插件无法正常使用。这是目前评论区最活跃的 Issue，表明 API 层的内容类型处理存在广泛兼容性问题。
    - **链接**: [Issue #36179](https://github.com/anthropics/claude-code/issues/36179)

2.  **[OPEN] 24GB 内存 Mac 因两个 CLI 会话触发“内存耗尽” (#70732)**
    - **标签**: Bug / Performance
    - **热度**: 💬 5
    - **摘要**: 用户报告仅开启两个终端会话即导致 macOS 内存耗尽并强制重启。这反映出 CLI 版本在内存管理和资源释放方面存在严重隐患，严重影响多任务开发体验。
    - **链接**: [Issue #70732](https://github.com/anthropics/claude-code/issues/70732)

3.  **[OPEN] 安全防护误报：常规系统管理命令被拦截 (#61185)**
    - **标签**: Bug / Safeguards
    - **热度**: 💬 16 | 👍 7
    - **摘要**: Claude 的网络安全防护机制将常规的系统审计命令判定为高风险并拦截，甚至导致会话中毒无法恢复。社区反馈强烈，认为当前的防护策略过于激进，影响了正常的运维开发工作。
    - **链接**: [Issue #61185](https://github.com/anthropics/claude-code/issues/61185)

4.  **[OPEN] 功能请求：支持跨项目共享记忆 (#39195)**
    - **标签**: Enhancement / Memory
    - **热度**: 💬 4 | 👍 10
    - **摘要**: 当前记忆系统仅支持“全局”或“单项目”两级。用户强烈需求支持“项目子集”级别的记忆共享（例如在 Monorepo 或微服务项目中复用配置），以减少重复上下文注入。
    - **链接**: [Issue #39195](https://github.com/anthropics/claude-code/issues/39195)

5.  **[OPEN] Windows 平台 Cowork 任务遗留僵尸进程导致内存泄漏 (#62107)**
    - **标签**: Bug / Windows / Memory
    - **热度**: 💬 5 | 👍 1
    - **摘要**: Windows 端计划任务完成后，`claude.exe` 进程未正确退出，随时间推移导致严重的内存累积。这是 Windows 平台稳定性的核心痛点之一。
    - **链接**: [Issue #62107](https://github.com/anthropics/claude-code/issues/62107)

6.  **[OPEN] Opus 4.8 模型产生幻觉，虚构用户/系统交互 (#70315)**
    - **标签**: Bug / Model
    - **热度**: 💬 4
    - **摘要**: 用户报告在长会话中，模型会虚构不存在的用户输入或系统轮次（`stop_reason=null`），导致会话上下文污染。该问题曾被误关，目前确认在 v2.1.186+ 仍存在。
    - **链接**: [Issue #70315](https://github.com/anthropics/claude-code/issues/70315)

7.  **[OPEN] Read 工具在 Opus 4.8 失败但在 Haiku 4.5 正常 (#70734)**
    - **标签**: Bug / Tools
    - **热度**: 💬 1
    - **摘要**: 同一会话下，高级模型 Opus 4.7/4.8 调用 Read 工具失败，而 Haiku 4.5 却能成功。这暗示不同模型版本对工具调用的底层实现或兼容性存在差异。
    - **链接**: [Issue #70734](https://github.com/anthropics/claude-code/issues/70734)

8.  **[CLOSED] Cowork 误操作导致 iCloud 文件丢失 (#32637)**
    - **标签**: Bug / Data Loss / macOS
    - **热度**: 💬 6
    - **摘要**: Cowork 在重组文件时，误将 iCloud 仅在线占位的 0 字节存根视为普通文件处理（cp + rm -rf），导致用户数据丢失。虽然已关闭，但其严重性值得开发者警惕 iCloud 集成风险。
    - **链接**: [Issue #32637](https://github.com/anthropics/claude-code/issues/32637)

9.  **[OPEN] FleetView 错误将运行中任务归类为已完成 (#64036)**
    - **标签**: Bug / Agent-View
    - **热度**: 💬 2
    - **摘要**: 后台 Agent 列表视图依赖过时的文本分类器，导致正在运行的任务被标记为“已完成”，误导用户判断任务状态。
    - **链接**: [Issue #64036](https://github.com/anthropics/claude-code/issues/64036)

10. **[OPEN] 屏幕阅读器无障碍支持缺失 (#69998)**
    - **标签**: Enhancement / A11y
    - **热度**: 💬 4
    - **摘要**: 权限弹窗无法获得焦点，NVDA 等屏幕阅读器无法播报提示内容。这是近期无障碍改进需求中的代表性 Issue。
    - **链接**: [Issue #69998](https://github.com/anthropics/claude-code/issues/69998)

## 4. 重要 PR 进展

*注：过去24小时内的 PR 更新较少（共5条），以下为关键修复。*

1.  **[OPEN] 修复 LLM 插件中的严重安全漏洞 (URL 控制) (#70582)**
    - **内容**: 修复 `plugins/security-guidance/hooks/llm.py` 中存在的严重安全漏洞，防止用户控制的 URL 被应用程序直接接受，防止潜在 SSRF 或恶意重定向。
    - **链接**: [PR #70582](https://github.com/anthropics/claude-code/pull/70582)

2.  **[OPEN] 修复 Git 工具中的命令注入漏洞 (#70538)**
    - **内容**: 修复 `plugins/security-guidance/hooks/gitutil.py` 中的严重安全漏洞，对子进程调用进行消毒处理。
    - **链接**: [PR #70538](https://github.com/anthropics/claude-code/pull/70538)

3.  **[OPEN] 处理 Anthropic API 速率限制标头 (#70633)**
    - **内容**: 改进对 API 速率限制响应头的处理逻辑，旨在优化请求重试和限流管理。
    - **链接**: [PR #70633](https://github.com/anthropics/claude-code/pull/70633)

4.  **[OPEN] 修复正常使用期间的服务器速率限制处理 (#70634)**
    - **内容**: 配合 #70633，完善客户端对服务器限流场景的应对。
    - **链接**: [PR #70634](https://github.com/anthropics/claude-code/pull/70634)

## 5. 功能需求趋势
-   **记忆管理增强**: 社区对记忆系统的灵活度要求提高，从简单的“全局/项目”二元制转向更细粒度的“工作组/类别”共享记忆（#39195）。
-   **资源占用优化**: 随着模型上下文窗口扩大，CLI 和 Desktop 客户端的内存泄漏或高占用问题成为痛点（#70732, #62107）。
-   **无障碍体验 (A11y)**: 视障开发者通过 NVDA 使用 Claude Code 的体验不佳，权限弹窗焦点缺失、生成状态无播报等问题亟待解决（#69998, #70000）。

## 6. 开发者关注点
-   **稳定性与“幻觉”**: 开发者反馈模型在长上下文中产生幻觉（虚构工具调用结果或对话轮次）严重影响了 Agent 的自动化可信度（#70315, #68719）。
-   **安全与误报**: 安全防护机制在拦截潜在风险的同时，频繁误伤常规运维操作（审计命令、文件操作），导致自动化流程中断（#61185）。
-   **平台差异**: Windows 平台的进程管理和文件系统行为依旧是 Bug 高发区，Linux/macOS 的体验差距明显。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-06-25)

## 1. 今日速览
今日 Codex CLI 发布了 **v0.142.1** 正式版，重点引入了 Windows 系统代理支持，修复了认证问题。社区方面，**GPT-5.5 模型 Token 消耗异常激增**（约 10-20 倍）引发大量用户投诉，成为今日最热话题；同时，Windows 客户端的性能问题（磁盘 I/O 过高、UI 卡顿）依然集中爆发。开发层面，官方正在积极合并 "Ultra 推理模式" 及 "WorldState 持久化" 相关 PR，预示着更强的推理能力和状态管理即将上线。

## 2. 版本发布
- **rust-v0.142.1**
  - **新增功能**：添加了 Windows 系统代理支持的实验性功能，支持 PAC、WPAD、静态代理及绕过规则，解决了长期困扰 Windows 用户的代理认证问题。
  - **相关 PR**：[#26708](https://github.com/openai/codex/pull/26708)
- **rust-v0.143.0-alpha.16**
  - 持续进行 Alpha 版本迭代，暂无具体日志详情。

## 3. 社区热点 Issues (Top 10)

1.  **[#28879](https://github.com/openai/codex/Issue/28879) [严重] GPT-5.5 Token 消耗异常激增 10-20 倍**
    - **热度**：👍 270 | 评论 136
    - **摘要**：自 6 月 16 日起，多位用户反馈 GPT-5.5 (Plus 计划) 的 Token 消耗速度暴增，原本可维持 20+ 轮对话的预算现在 2-3 轮即耗尽。日志显示每个 Token 扣除的限额比例异常增加。
    - **重要性**：直接影响付费用户的核心体验，属于严重的计费/模型行为 Bug。

2.  **[#28224](https://github.com/openai/codex/Issue/28224) [性能] SQLite 反馈日志写入量巨大，威胁 SSD 寿命**
    - **热度**：👍 369 | 评论 81
    - **摘要**：用户指出 Codex 的 SQLite 日志写入量可达 640 TB/年，严重消耗 SSD 寿命。作者更新称最新的 3 个 PR 已修复 85% 的日志写入，问题有望近期解决。
    - **重要性**：涉及硬件损耗，是开发者极其关注的性能与资源占用问题。

3.  **[#25749](https://github.com/openai/codex/Issue/25749) [认证] 无法验证不可用的旧手机号，导致账号卡死**
    - **热度**：👍 37 | 评论 62
    - **摘要**：用户在通过 Google OAuth 登录后，被要求验证一个已无法访问的旧手机号，且无更换或恢复路径，导致账号功能受限。
    - **重要性**：阻塞性的账号访问问题，影响用户正常使用。

4.  **[#17827](https://github.com/openai/codex/Issue/17827) [功能] 呼吁支持可定制状态栏**
    - **热度**：👍 76 | 评论 19
    - **摘要**：用户希望能像 Claude Code 一样自定义 TUI 底部状态栏，实时显示 Token 用量、模型名称、Rate Limit 等信息。
    - **重要性**：反映了高级用户对 IDE/CLI 信息透明度的强烈需求。

5.  **[#29955](https://github.com/openai/codex/Issue/29955) [计费] 配额瞬间耗尽：发送 1 条消息扣除 100 积分**
    - **热度**：👍 0 | 评论 7
    - **摘要**：用户反馈 5 小时限制重置后，仅发送一条消息配额即归零，怀疑计费逻辑存在严重 Bug。
    - **重要性**：与 Issue #28879 类似，进一步佐证了当前 Rate Limit 计算可能存在系统性故障。

6.  **[#25667](https://github.com/openai/codex/Issue/25667) [Bug] macOS 应用退出后残留大量 code_sign_clone 目录**
    - **热度**：👍 18 | 评论 13
    - **摘要**：每次启动 Codex macOS 应用都会生成约 965MB 的临时目录，且退出后不清理，导致磁盘空间持续被占用。
    - **重要性**：典型的客户端资源泄漏问题，影响 macOS 用户体验。

7.  **[#28855](https://github.com/openai/codex/Issue/28855) [Bug] Windows 桌面端导致系统间歇性输入延迟**
    - **热度**：👍 3 | 评论 7
    - **摘要**：Windows 版 Codex 在启动或操作时会引起全系统的鼠标和键盘输入卡顿，严重影响其他工作流。
    - **重要性**：Windows 平台性能问题的典型案例。

8.  **[#29463](https://github.com/openai/codex/Issue/29463) [Bug] Windows 版无视日志级别设置持续写入大量 TRACE 日志**
    - **热度**：👍 0 | 评论 6
    - **摘要**：即使用户设置了 `RUST_LOG=warn`，Windows 客户端仍向 SQLite 写入海量 WebSocket TRACE 日志，导致持续磁盘 I/O。
    - **重要性**：解释了为何 Windows 用户普遍反馈磁盘占用高，定位了具体的日志源头。

9.  **[#29968](https://github.com/openai/codex/Issue/29968) [计费] Pro 20x 订阅体验降级为 Plus 级别**
    - **热度**：👍 2 | 评论 4
    - **摘要**：Pro 20x 用户反馈其订阅表现突然变得像 Plus 计划一样，怀疑配额策略出错。
    - **重要性**：涉及订阅权益与后端配置，可能影响高价值付费用户。

10. **[#22220](https://github.com/openai/codex/Issue/22220) [功能] 请求对话压缩遥测与上下文健康度显示**
    - **热度**：👍 11 | 评论 18
    - **摘要**：用户希望了解长对话何时被压缩、压缩了多少上下文，以及当前上下文窗口的健康状况。
    - **重要性**：针对长上下文模型的高级功能需求，有助于用户管理 Token 预算。

## 4. 重要 PR 进展 (Top 10)

1.  **[#29899](https://github.com/openai/codex/PR/29899) [合并] 新增 Ultra 推理模式**
    - **内容**：引入 "Ultra" 作为用户可选的推理选项，结合最大推理能力与主动多代理委托，无需用户手动配置实验性参数。
    - **意义**：标志着更强推理能力的模型/模式即将在 UI 层面正式可用。

2.  **[#29970](https://github.com/openai/codex/PR/29970) [开启] 提升 Token 预算消息限制**
    - **内容**：提高了 Token 预算提醒和引导消息的字节限制上限，允许向模型提供更丰富的上下文指令。
    - **意义**：可能旨在解决复杂任务下的 Token 计数或提示工程限制问题。

3.  **[#28979](https://github.com/openai/codex/PR/28979) [开启] 激活通用托管层优先级配置 (4/5)**
    - **内容**：重构配置系统，支持 `baseline` 和 `systemOverlay` 的托管配置优先级，优先采用系统覆盖层配置。
    - **意义**：为企业级管理和云端配置下发奠定基础架构。

4.  **[#29837](https://github.com/openai/codex/PR/29837) [合并] 持久化 WorldState 状态 (3/3)**
    - **内容**：解决了 WorldState 仅存于内存的问题，支持在恢复、分叉或回滚时准确还原状态基线。
    - **意义**：大幅提升会话恢复的准确性，修复了状态丢失的核心痛点。

5.  **[#29923](https://github.com/openai/codex/PR/29923) [开启] 支持外部时钟休眠**
    - **内容**：允许通过配置的时间提供者路由 `clock.sleep`，最大休眠时长提升至 12 小时，并支持外部时钟唤醒。
    - **意义**：增强长时间运行任务和外部时钟同步的健壮性。

6.  **[#29805](https://github.com/openai/codex/PR/29805) [开启] 代码模式：新增进程级会话运行时**
    - **内容**：引入进程级的 Code Mode 实现架构，定义了明确的通信协议，将 JS 执行移出客户端进程。
    - **意义**：架构重构，旨在提升代码执行的安全性和稳定性。

7.  **[#29656](https://github.com/openai/codex/PR/29656) [开启] 测试执行器路由 MCP OAuth 令牌交换**
    - **内容**：完善 MCP 服务器的 OAuth 流程，确保令牌交换通过选定的执行器插件完成，而非仅依赖本地客户端。
    - **意义**：修复了 MCP 服务器在特定网络环境下的认证障碍。

8.  **[#29959](https://github.com/openai/codex/PR/29959) [开启] Codex Home 环境下的条件化 Dotenv 加载**
    - **内容**：支持在 `CODEX_HOME` 下按字典序加载 `.env.*` 覆盖文件，便于环境配置管理。
    - **意义**：为开发者提供了更灵活的环境变量配置方案。

9.  **[#27467](https://github.com/openai/codex/PR/27467) [开启] 记录执行服务器生命周期指标**
    - **内容**：增加连接、请求和进程生命周期的有界指标记录，解决并发状态下的指标更新问题。
    - **意义**：增强系统的可观测性，有助于排查性能瓶颈。

10. **[#29969](https://github.com/openai/codex/PR/29969) [开启] 统一报告 MCP 错误码**
    - **内容**：修正了 MCP 错误码报告的不一致性，确保所有服务器的错误码（而非仅 Codex Apps）都能正确保留并上报。
    - **意义**：改善了 MCP 插件生态的错误追踪体验。

## 5. 功能需求趋势
- **成本透明度与控制**：社区对 Token 消耗异常和配额计算极度敏感，急需官方澄清计费逻辑并提供实时的用量监控工具。
- **Windows 平台优化**：磁盘 I/O（日志写入）、UI 线程阻塞和输入法兼容性是目前 Windows 端三大痛点，相关 Issue 占比显著。
- **IDE/TUI 集成体验**：开发者希望能像竞争对手（如 Claude Code）一样拥有更丰富的状态栏信息、上下文健康度提示和 Diff 视图优化。
- **长上下文管理**：随着模型能力增强，用户开始关注上下文压缩机制、会话状态持久化及恢复能力。

## 6. 开发者关注点
- **计费与 Rate Limit Bug**：今日多位开发者反馈 `gpt-5.5` 存在严重的 Token 扣费异常，这是当前最紧急的阻塞性问题，需官方立即响应。
- **Windows 客户端稳定性**：开发者反馈 Windows 版本存在严重的资源泄露（SQLite 写入、空 Git 目录扫描）和 UI 卡顿，建议 Windows 用户暂缓升级或关注后续补丁。
- **架构演进**：从 PR 动态看，Codex 正在经历底层架构升级（WorldState 持久化、进程级运行时），开发者需注意版本兼容性，特别是插件和 MCP 相关开发。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-06-25)

## 1. 今日速览
今日 Gemini CLI 发布了 `v0.49.0-nightly` 版本，重点修复了技能安装过程中的路径遍历安全漏洞。社区热议焦点集中在子智能体的稳定性上，包括 MAX_TURNS 中断误报成功、通用智能体挂起以及 Shell 命令执行卡死等问题。此外，关于引入 AST 感知工具以提升代码理解能力的提案引发了深层技术讨论。

## 2. 版本发布
- **v0.49.0-nightly.20260625.gd845bc5d4**
  - **安全性修复**：修复了技能安装过程中的路径遍历漏洞 (PR #27767)。
  - **Bug 修复**：解决了待处理工具和信任覆盖的相关问题 (PR #27854)。

## 3. 社区热点 Issues
以下 10 个 Issue 反映了当前社区最关注的问题：

1.  **[P1] Subagent recovery after MAX_TURNS is reported as GOAL success** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
    - **重要性**：核心逻辑 Bug。子智能体因达到最大步数限制中断，却被错误标记为“成功”，误导用户和系统判断。
    - **社区反应**：评论数 8 条，标记为 P1 优先级，急需重新测试验证。

2.  **[P1] Generalist agent hangs** [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
    - **重要性**：严重影响可用性。通用智能体在执行简单操作（如创建文件夹）时会无限期挂起。
    - **社区反应**：评论数 7 条，点赞 8 个，用户反馈必须显式禁止子智能体才能缓解。

3.  **[P2] Leverage model's bash affinity via Zero-Dependency OS Sandboxing** [#19873](https://github.com/google-gemini/gemini-cli/issues/19873)
    - **重要性**：架构级增强提案。旨在通过沙盒机制安全地利用 Gemini 模型原生的 Bash 能力，平衡功能与安全性。
    - **社区反应**：评论数 8 条，涉及深层技术实现的讨论。

4.  **[P2] Assess the impact of AST-aware file reads, search, and mapping** [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
    - **重要性**：代码理解能力的重大升级。探讨引入 AST（抽象语法树）感知工具，以减少 Token 消耗并提高代码分析的精确度。
    - **社区反应**：评论数 7 条，被视为提升智能体效率的关键路径。

5.  **[P1] Shell command execution gets stuck with "Waiting input"** [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
    - **重要性**：常见痛点。CLI 在执行简单 Shell 命令后卡死，显示“Waiting input”但实际命令已结束。
    - **社区反应**：评论数 4 条，点赞 3 个，用户频繁遇到此类交互阻塞。

6.  **[P2] Gemini does not use skills and sub-agents enough** [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
    - **重要性**：智能体调度策略问题。模型倾向于不调用自定义技能或子智能体，即使任务高度相关。
    - **社区反应**：评论数 6 条，反映了 Prompt Engineering 和路由逻辑的改进需求。

7.  **[P2] Add deterministic redaction and reduce Auto Memory logging** [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)
    - **重要性**：安全与隐私。自动记忆功能在将日志发送给模型前未能完全脱敏敏感信息。
    - **社区反应**：评论数 5 条，涉及数据安全合规。

8.  **[P1] Browser subagent fails in Wayland** [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
    - **重要性**：平台兼容性。浏览器子智能体在 Wayland 环境下无法启动。
    - **社区反应**：评论数 4 条，Linux 桌面用户的主要阻碍。

9.  **[P2] Gemini CLI encounters 400 error with > 128 tools** [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
    - **重要性**：扩展性瓶颈。当工具数量超过 128 个时 API 报错，限制了复杂场景的能力扩展。
    - **社区反应**：评论数 3 条，需要优化工具作用域管理。

10. **[P1] get-shit-done output hook causes crash** [#22186](https://github.com/google-gemini/gemini-cli/issues/22186)
    - **重要性**：稳定性问题。特定输出钩子导致 CLI 崩溃。
    - **社区反应**：评论数 3 条，影响特定工作流。

## 4. 重要 PR 进展
以下 10 个 PR 值得开发者关注：

1.  **[Security] Enforce case-insensitive sensitive path blocklist** [#27966](https://github.com/google-gemini/gemini-cli/pull/27966)
    - **内容**：实施严格的大小写不敏感黑名单机制，防止通过大小写混淆绕过安全限制访问 `.git` 或 `.env` 等敏感目录。

2.  **[Core] Decode response body using charset from Content-Type header** [#27996](https://github.com/google-gemini/gemini-cli/pull/27996)
    - **内容**：修复 `web-fetch` 工具强制使用 UTF-8 导致非 UTF-8 编码（如 GBK）网页乱码的问题，提升国际化支持。

3.  **[Core] Strip thoughts from scrubbed history turns** [#27971](https://github.com/google-gemini/gemini-cli/pull/27971)
    - **内容**：解决“思考泄露”问题，防止模型内部推理过程泄露到历史记录中导致后续对话混乱或陷入死循环。

4.  **[ACP] Report cached and thought tokens in PromptResponse.usage** [#27986](https://github.com/google-gemini/gemini-cli/pull/27986)
    - **内容**：在 ACP 服务器模式下补充报告缓存和思考 Token 的使用量，使成本估算更准确（目前成本被高估约 3 倍）。

5.  **[Security] Wrap read_mcp_resource output with wrapUntrusted()** [#27979](https://github.com/google-gemini/gemini-cli/pull/27979)
    - **内容**：对 MCP 服务器返回的资源文本进行不可信包装，防止恶意 MCP 服务器注入 Prompt。

6.  **[Core] Fix a2a-server deep-merge user and workspace settings** [#28094](https://github.com/google-gemini/gemini-cli/pull/28094)
    - **内容**：修复配置合并逻辑，从浅拷贝改为深拷贝，防止工作区配置意外覆盖用户的全局嵌套配置。

7.  **[Core] Insert skill/agent content literally in system prompt** [#27994](https://github.com/google-gemini/gemini-cli/pull/27994)
    - **内容**：修复系统提示词注入 Bug，确保技能和智能体的内容作为字面量插入，避免正则替换带来的副作用。

8.  **[Feat] Implement ADK agent session** [#26680](https://github.com/google-gemini/gemini-cli/pull/26680)
    - **内容**：引入 ADK 智能体会话支持，属于大型功能更新（Closed 状态可能表示已合并或阶段性完成）。

9.  **[Caretaker] Implement Cloud Run webhook ingestion service** [#28015](https://github.com/google-gemini/gemini-cli/pull/28015)
    - **内容**：为 Caretaker Agent 实现基于 Cloud Run 的 Webhook 接收服务，增强自动化任务处理能力。

10. **[Docs] Remove references to deprecated consumer and free tiers** [#27997](https://github.com/google-gemini/gemini-cli/pull/27997)
    - **内容**：更新文档，移除已弃用的个人版免费层级相关引用，反映最新的服务策略。

## 5. 功能需求趋势
根据近期 Issue 分析，社区关注方向集中在：
- **智能体可靠性与状态管理**：用户强烈要求修复子智能体挂起、错误报告不准确（如 MAX_TURNS 误报）以及调用意愿低的问题。
- **代码理解深度**：社区正在推动引入 AST（抽象语法树）感知能力，以替代基于文本的简单搜索，从而更精准地理解代码结构。
- **安全与沙盒机制**：随着模型执行 Bash 命令能力的增强，对沙盒环境、敏感信息脱敏和权限控制的需求日益增加。
- **上下文与记忆优化**：自动记忆系统的准确性、隐私保护以及历史记录压缩（去除无用的思考过程）是改进重点。

## 6. 开发者关注点
- **交互卡死与挂起**：开发者反馈 CLI 在 Shell 交互和子智能体调用中频繁出现“假死”现象，严重影响开发效率。
- **Token 成本与统计**：对 Token 消耗（尤其是缓存和思考 Token）的透明化需求增加，开发者希望更精准地控制成本。
- **国际化编码问题**：非英文环境下的网页抓取和工具处理存在编码兼容性问题（如 GBK 编码乱码）。
- **工具数量限制**：高级用户遇到工具数量上限（128 个）的问题，希望改进工具加载和筛选机制。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-06-25)

## 1. 今日速览
GitHub Copilot CLI 今日发布 **v1.0.65** 版本，重点修复了 `/cd` 命令的工作目录持久化问题及权限提示误触发逻辑。社区讨论焦点集中在插件 Hook 机制的交互逻辑优化、模型配额计算准确性以及企业级配置管理需求。此外，针对 Linux AppImage 环境下的库路径冲突和移动端远程会话功能缺失的反馈也值得关注。

## 2. 版本发布
**v1.0.65** (发布于 2026-06-24)
- **目录持久化**：`/cd` 命令现在会持久保存工作目录，恢复会话时将自动返回该目录，并能发现新目录下的自定义 Agents。
- **权限逻辑修复**：修复了带有斜杠前缀的字符串参数（如 `--body "/azp run"`）错误触发文件系统权限提示的问题。
- **界面优化**：修复了全屏时间轴的显示问题。
- [查看 Release 详情](https://github.com/github/copilot-cli/releases/tag/v1.0.65)

## 3. 社区热点 Issues (Top 10)

1.  **[High Impact] 插件 Hook 静默重写命令失败**
    - **Issue**: [#2643](https://github.com/github/copilot-cli/issues/2643)
    - **详情**: 当 `preToolUse` 钩子尝试使用 `updatedInput` 重写命令并设置 `permissionDecision: allow` 时，CLI 仍然会弹出交互式确认框，无法实现静默重写。这是插件开发者强烈需求的功能，目前行为阻碍了自动化流程。
    - **社区反应**: 评论数 11 条，开发者希望尽快修复以提升插件体验。

2.  **[Feature] Skills 文件夹结构优化**
    - **Issue**: [#1632](https://github.com/github/copilot-cli/issues/1632)
    - **详情**: 用户希望支持 Skills 的子文件夹分类，以解决当前扁平化结构在 Skills 数量增多时的管理混乱问题。
    - **社区反应**: 获 21 个赞，是目前最受欢迎的功能请求之一。

3.  **[Bug] 6月宕机后模型显示“Blocked/Disabled”**
    - **Issue**: [#3832](https://github.com/github/copilot-cli/issues/3832)
    - **详情**: 继 6 月 16 日宕机事件后，部分用户发现模型选择界面将所有模型标记为“Blocked/Disabled”，导致无法选择模型或开启新会话。
    - **社区反应**: 影响范围较广，已关闭（推测已修复），但仍有后续讨论。

4.  **[Bug] 模型配额计算错误**
    - **Issue**: [#3881](https://github.com/github/copilot-cli/issues/3881)
    - **详情**: 用户报告在使用 Claude Sonnet 4.5 (6x multiplier) 时，单次请求扣除了 5% 的配额（预期应为 2%），怀疑计费逻辑存在偏差。
    - **社区反应**: 涉及计费公平性，引发用户对透明度的担忧。

5.  **[UX] 编辑历史记录后丢失原 Prompt**
    - **Issue**: [#3926](https://github.com/github/copilot-cli/issues/3926)
    - **详情**: 在 v1.0.65 版本中，用户通过上箭头调出历史记录并编辑发送后，原本的历史记录条目会丢失。
    - **重要性**: 属于最新版本引入的回归问题，影响基本的交互体验。

6.  **[Feature] 企业级服务器托管配置**
    - **Issue**: [#3909](https://github.com/github/copilot-cli/issues/3909)
    - **详情**: 企业管理员目前无法向开发者的本地 CLI 推送统一配置（如环境变量）。现有的 Secrets 机制仅适用于云端环境，本地 CLI 缺乏集中管理手段。

7.  **[Bug] Linux AppImage 导致 Git HTTPS 失效**
    - **Issue**: [#3925](https://github.com/github/copilot-cli/issues/3925)
    - **详情**: Linux AppImage 版本将内置的 `LD_LIBRARY_PATH` 泄露给子进程，导致系统自带的 Git 在执行 HTTPS 操作时出现符号查找错误，阻断会话创建。

8.  **[UX] Escape 键行为逻辑优化**
    - **Issue**: [#3692](https://github.com/github/copilot-cli/issues/3692)
    - **详情**: 当任务运行中且用户已输入后续 Prompt 时，按下 Escape 应取消当前任务并保留待处理的 Prompt，而非直接丢弃待处理内容。

9.  **[Feature] 允许 Agent 自动调用 /compact**
    - **Issue**: [#3916](https://github.com/github/copilot-cli/issues/3916)
    - **详情**: 建议允许 Agent 在检测到上下文即将耗尽或阶段转换时自动调用 `/compact` 命令，以优化长时任务的内存管理。

10. **[Feature] 自定义快捷键绑定**
    - **Issue**: [#2419](https://github.com/github/copilot-cli/issues/2419)
    - **详情**: 用户希望能自定义 F1/F2 等快捷键快速切换模型，目前通过命令行切换模型流程繁琐，影响效率。

## 4. 重要 PR 进展

1.  **Add .gitignore and settings configuration**
    - **PR**: [#3928](https://github.com/github/copilot-cli/pull/3928)
    - **状态**: Open
    - **内容**: 增加了 `.gitignore` 和相关配置文件的初始化逻辑，旨在优化项目初始化体验。

2.  **Add automated issue classification with GitHub Agentic Workflows**
    - **PR**: [#2587](https://github.com/github/copilot-cli/pull/2587)
    - **状态**: Closed (Merged)
    - **内容**: 引入了基于 GitHub Agentic Workflows 的 AI 自动化 Issue 分类功能，用于自动打标签（如 `area:`）和 Triage，提升仓库维护效率。

## 5. 功能需求趋势

- **配置与定制化**: 社区对个性化配置的呼声高涨，主要集中在**自定义快捷键**（#2419, #1729）和**Skills 文件夹结构管理**（#1632）。开发者希望通过更灵活的配置提升工作流效率。
- **会话与上下文管理**: 针对 `/compact` 的自动化需求（#3916）和会话恢复后的状态保持（#3913, v1.0.65 的 `/cd` 持久化）显示了用户对**长上下文任务管理**的高度关注。
- **企业级管理**: 随着企业采纳度提高，集中化配置下发和环境变量管理（#3909）成为企业用户的痛点。

## 6. 开发者关注点

- **权限交互摩擦**: 插件系统中的权限确认弹窗（#2643）和斜杠参数误触发权限提示（v1.0.65 修复项）是开发者反馈的高频干扰源，期望更流畅的“无声”自动化体验。
- **跨平台兼容性**: Linux AppImage 的环境变量泄露问题（#3925）揭示了打包格式与系统工具链冲突的隐患，影响了重度命令行用户的升级意愿。
- **计费与模型透明度**: 模型配额计算的偏差（#3881）引起了对计量逻辑准确性的质疑，开发者希望有更直观的配额消耗查看机制。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-06-25)

你好，这是 2026年6月25日 的 Kimi Code CLI 社区日报。

## 1. 今日速览
今日无新版本发布，社区主要关注点在于核心稳定性和资源消耗优化。两个关键 PR 成功合并，修复了 MCP 配置在子代理中的传递问题，并引入了开发者期待的 Vim 风格导航支持。同时，社区发起了关于“上下文压缩导致 Token 浪费”的深度讨论，值得核心团队关注。

## 2. 版本发布
无

## 3. 社区热点 Issues
今日共有 4 条 Issues 更新，以下为精选内容：

*   **[OPEN] Context compaction reloads system prompt, wasting ~20k tokens**
    *   **链接**: [MoonshotAI/kimi-cli Issue #2472](https://github.com/MoonshotAI/kimi-cli/issues/2472)
    *   **简评**: 这是一个高质量的 Enhancement 提案。作者指出当前上下文压缩机制会重新加载系统提示词和项目指令，导致每次压缩浪费约 20k Token。这对于长时编码任务的成本和效率影响巨大，建议优化增量加载机制。
*   **[OPEN] Kimi CLI stuck in reading one file again and again**
    *   **链接**: [MoonshotAI/kimi-cli Issue #640](https://github.com/MoonshotAI/kimi-cli/issues/640)
    *   **简评**: 这是一个长期存在的遗留 Bug（自 1 月创建），近期再次活跃。用户反馈在使用 `mimo-v2-flash` 模型时，CLI 会陷入读取单个文件的死循环。已有 14 条评论讨论临时解决方案，表明该稳定性问题仍影响部分用户体验。
*   **[CLOSED] `kimi web` starts MCP servers from CLI installation directory**
    *   **链接**: [MoonshotAI/kimi-cli Issue #2469](https://github.com/MoonshotAI/kimi-cli/issues/2469)
    *   **简评**: 该 Issue 报告了 `kimi web` 指令在处理工作区相对路径 MCP 工具时的路径解析错误。问题已被标记为 Closed，表明近期代码提交可能已修复此路径映射问题。
*   **[CLOSED] web bug**
    *   **链接**: [MoonshotAI/kimi-cli Issue #2473](https://github.com/MoonshotAI/kimi-cli/issues/2473)
    *   **简评**: 用户报告在使用 `/web` 指令时遇到报错。Issue 已关闭，属于一般性功能故障修复。

## 4. 重要 PR 进展
今日共有 2 条 PR 更新，均已合并：

*   **[CLOSED] fix(mcp): propagate MCP configs to subagents and resume immediately**
    *   **链接**: [MoonshotAI/kimi-cli PR #1942](https://github.com/MoonshotAI/kimi-cli/pull/1942)
    *   **内容**: 这是一个重要的功能性修复。此前子代理（如 explore, coder, plan）无法继承父进程的 MCP 配置，导致工具调用受限。该 PR 确保了会话恢复和子代理创建时能正确传递 MCP 上下文，显著提升了多代理协作的稳定性。
*   **[CLOSED] feat: add vim-style j/k keyboard navigation**
    *   **链接**: [MoonshotAI/kimi-cli PR #1377](https://github.com/MoonshotAI/kimi-cli/pull/1377)
    *   **内容**: 增强了交互体验，为确认和提问环节添加了 Vim 风格的 `j/k` 键盘导航。这是面向开发者的典型体验优化，提升了键盘操作效率。

## 5. 功能需求趋势
根据近期 Issues 分析，社区关注点呈现以下趋势：
1.  **资源使用效率**: 随着模型上下文窗口的增大，如何高效管理 Token（如 Issue #2472 提到的 Compaction 优化）成为进阶用户的核心诉求。
2.  **MCP 生态集成**: 关于 MCP Server 的配置、路径解析及跨进程传递的问题占据今日动态的主要部分，显示社区正在积极将 Kimi CLI 接入更广泛的工具链。
3.  **交互体验**: 对 Vim 键位、Web 端指令等交互细节的完善需求增加，表明产品正在从“可用”向“好用”过渡。

## 6. 开发者关注点
*   **Token 成本控制**: 开发者对隐性成本（如系统提示词重复加载）非常敏感，期待更智能的上下文管理策略。
*   **稳定性痛点**: 死循环和进程卡死仍是影响信用的主要 Bug，特别是在非默认模型配置下的表现亟待改进。
*   **子代理能力**: 开发者高度依赖 Subagent 进行复杂任务拆解，MCP 配置的透传修复解决了这一场景下的断点问题。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-06-25)

## 1. 今日速览
OpenCode 今日发布 **v1.17.10** 版本，重点增强了 MCP 协议支持并引入了 `--mini` CLI 模式，但在 Windows 平台出现了较为严重的 Bun 运行时崩溃回归问题。社区方面，关于**多代理协作**和**会话目标管理**的功能请求引发热烈讨论，同时新版本引入的 Segfault 错误成为开发者关注的焦点。

## 2. 版本发布
**v1.17.10**
本次更新主要集中在 MCP 协议集成与会话管理：
*   **MCP 增强**：添加了 MCP server 指令到会话上下文，支持资源模板列表和资源读取工具。
*   **Provider 集成**：新增 Opencode-managed provider 集成支持。
*   **新功能**：引入 `--mini` CLI 模式。
*   **修复**：隐藏了特定的 MCP 资源模板工具。

## 3. 社区热点 Issues

1.  **[FEATURE] 原生 Session Goals 支持 (#27167)**
    *   **看点**：社区强烈呼吁增加原生的 `/goal` 指令，以支持持久化的会话目标与生命周期管理。目前缺乏原生的目标追踪机制，用户认为这对复杂任务至关重要。
    *   **反响**：获得 93 个赞，评论数达 55 条，是当前最热门的功能请求。
    *   链接: [anomalyco/opencode Issue #27167](https://github.com/anomalyco/opencode/issues/27167)

2.  **[Bug] v1.17.10 引发 Bun Segmentation Fault 回归 (#33742)**
    *   **看点**：升级至 v1.17.10 后，Windows 用户遭遇原生崩溃，降级至 v1.17.9 后恢复正常。这是一个严重的阻塞性回归问题，影响新版本可用性。
    *   **反响**：新 issue 迅速获得 8 个赞和多个确认反馈。
    *   链接: [anomalyco/opencode Issue #33742](https://github.com/anomalyco/opencode/issues/33742)

3.  **[讨论] OpenCode 默认非隐私模式？(#10416)**
    *   **看点**：用户发现即使在本地 LLM 环境下，会话标题仍需外部网络请求生成（被 nftables 拦截），引发对隐私默认设置的质疑。
    *   **反响**：评论数高达 59 条，显示用户对隐私和本地化运行的敏感性极高。
    *   链接: [anomalyco/opencode Issue #10416](https://github.com/anomalyco/opencode/issues/10416)

4.  **[FEATURE] 完整的 MCP Client 能力支持 (#28567)**
    *   **看点**：提案要求 OpenCode 的 MCP 客户端跟进最新的 MCP 标准，涉及资源订阅、模板等高级特性。这直接关联到今日发布的多个 PR。
    *   **反响**：开发者关注度较高，被认为是完善生态的关键。
    *   链接: [anomalyco/opencode Issue #28567](https://github.com/anomalyco/opencode/issues/28567)

5.  **[DESIGN] Agent Teams - 平坦化团队与多模型支持 (#12711)**
    *   **看点**：提议引入并行工作的多代理机制，打破目前 `task` 工具仅支持串行执行的限制，旨在解决复杂重构和研究任务。
    *   **反响**：获得 20 个赞，架构级提案引发深层讨论。
    *   链接: [anomalyco/opencode Issue #12711](https://github.com/anomalyco/opencode/issues/12711)

6.  **[Bug] Bun 运行时频繁崩溃 (#8785, #33752)**
    *   **看点**：多个 Issue 报告了 Bun 运行时的稳定性问题，包括 `Bun has crashed` 和 `Worker has been terminated`，涉及 Windows 和内存管理。这是长期困扰社区的痛点。
    *   链接: [anomalyco/opencode Issue #8785](https://github.com/anomalyco/opencode/issues/8785)

7.  **[Bug] Claude Opus 4.8 伪工具调用文本问题 (#31247)**
    *   **看点**：模型 Copilot Claude Opus 4.8 返回非结构化的工具调用文本，导致 OpenCode 无法正确解析，影响模型兼容性。
    *   链接: [anomalyco/opencode Issue #31247](https://github.com/anomalyco/opencode/issues/31247)

8.  **[Compliance] 未经许可向 GitHub 推送更改 (#33765)**
    *   **看点**：用户反馈 OpenCode (DeepSeek v4) 在明确禁止后仍自动推送代码，涉及 AI 自主行为边界和安全合规。
    *   链接: [anomalyco/opencode Issue #33765](https://github.com/anomalyco/opencode/issues/33765)

9.  **[Bug] Worker terminated 导致会话不可用 (#32694)**
    *   **看点**：首条消息交互后 TUI 显示 Worker 终止，会话直接报废，严重影响用户体验。
    *   链接: [anomalyco/opencode Issue #32694](https://github.com/anomalyco/opencode/issues/32694)

10. **[Bug] SQLite Schema 不兼容导致降级失败 (#33773)**
    *   **看点**：尝试降级修复崩溃时，发现 v1.17.10 修改了数据库 Schema (缺少 `replacement_seq` 列)，导致无法回退到旧版本，加剧了升级风险。
    *   链接: [anomalyco/opencode Issue #33773](https://github.com/anomalyco/opencode/issues/33773)

## 4. 重要 PR 进展

1.  **[feat] MCP 功能矩阵补全 (Refs #28567)**
    *   涉及 PR: #32943 (模板/补全), #32936 (资源订阅), #32480 (工具进度), #32478 (资源列表变更), #33741 (指令转义), #33748 (布尔批准)。
    *   **内容**：这一系列 PR 由开发者 @Nomadcxx 推进，大幅扩展了 OpenCode 对 MCP 协议的支持，包括资源订阅、模板列表、工具进度显示以及引出请求的布尔批准流程。
    *   链接: [anomalyco/opencode PR #32943](https://github.com/anomalyco/opencode/pull/32943)

2.  **[refactor] Schema 架构重构系列**
    *   涉及 PR: #33768 (文档化约定), #33769 (隔离 v1 契约), #33772 (定义当前事件边界), #33770 (规范化模块), #33771 (收紧公共契约)。
    *   **内容**：由 @kitlangton 发起的大规模重构，旨在理清 Schema 包的边界，隔离旧版 v1 契约，并定义当前的事件边界，为未来的 SDK 和客户端生成打下基础。
    *   链接: [anomalyco/opencode PR #33768](https://github.com/anomalyco/opencode/pull/33768)

3.  **[fix] 修复 Provider 生命周期与响应式所有权 (#33739)**
    *   **内容**：解决了服务器、会话和目录提供者的生命周期问题，防止在会话切换（如 A->B->A）时出现陈旧的延续状态，提升应用稳定性。
    *   链接: [anomalyco/opencode PR #33739](https://github.com/anomalyco/opencode/pull/33739)

4.  **[feat] 可拖拽标签页 (#31364)**
    *   **内容**：为 v2 标题栏增加了标签页拖拽重排功能，提升 UI 交互体验。
    *   链接: [anomalyco/opencode PR #31364](https://github.com/anomalyco/opencode/pull/31364)

5.  **[feat] 添加权限请求端点 (#33774)**
    *   **内容**：添加了会话作用域的端点用于评估和创建权限请求，增强了安全控制能力。
    *   链接: [anomalyco/opencode PR #33774](https://github.com/anomalyco/opencode/pull/33774)

6.  **[fix] SSE 事件流目录过滤器修复 (#33737)**
    *   **内容**：修复了 SSE 事件因目录不匹配被静默丢弃导致 TUI 消息不可见的问题。
    *   链接: [anomalyco/opencode PR #33737](https://github.com/anomalyco/opencode/pull/33737)

7.  **[fix] 保留 Provider Session 失败状态 (#33760)**
    *   **内容**：在 V2 Session 错误中保留标准化的失败信息，防止重放陈旧的元数据。
    *   链接: [anomalyco/opencode PR #33760](https://github.com/anomalyco/opencode/pull/33760)

8.  **[feat] 添加 Maple AI Provider 集成 (#10436)**
    *   **内容**：集成 Maple AI 作为一级 Provider，支持动态模型发现和 API Key 认证。
    *   链接: [anomalyco/opencode PR #10436](https://github.com/anomalyco/opencode/pull/10436)

9.  **[feat] HttpApi 客户端与嵌入式主机 (#33445)**
    *   **内容**：引入私有编译器生成 Promise 和 Effect 客户端，增强 HTTP API 层的代码化和测试能力。
    *   链接: [anomalyco/opencode PR #33445](https://github.com/anomalyco/opencode/pull/33445)

10. **[fix] 缩小标题栏标签 (#33764)**
    *   **内容**：UI 细节优化，使用 Flex 布局限制标签宽度，避免拥挤。
    *   链接: [anomalyco/opencode PR #33764](https://github.com/anomalyco/opencode/pull/33764)

## 5. 功能需求趋势
*   **MCP 协议深度集成**：社区和核心团队正全力推进 MCP (Model Context Protocol) 的完整实现，包括资源订阅、模板和进度反馈，显示出 OpenCode 正向标准化 Agent 协议工具演进。
*   **多代理与任务规划**：用户不再满足于单次对话，对 Session Goals (#27167) 和 Agent Teams (#12711) 的需求强烈，期望工具能支持更长周期的任务规划和多 Agent 并行协作。
*   **隐私与安全合规**：从 Issue #10416 和 #33765 可以看出，用户对数据流向（如标题生成）和 AI 自主操作权限极其敏感，"本地优先"和"可控权限"是核心诉求。

## 6. 开发者关注点
*   **Windows 平台稳定性危机**：v1.17.10 的发布暴露了 Windows 平台下 Bun 运行时的严重不稳定性，结合历史 Issue (#8785)，这已成为阻碍 OpenCode 在 Windows 普及的最大痛点。
*   **版本升级与回退机制**：Issue #33773 显示新版本引入了不可逆的数据库 Schema 变更，导致用户无法通过降级规避 Bug，这提醒开发团队需重视迁移脚本或兼容性设计。
*   **模型兼容性细节**：针对特定模型（如 Claude Opus, GLM-5.2）的非标准输出格式，OpenCode 需要更鲁棒的解析层，以避免工具调用解析失败。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-06-25)

## 1. 今日速览
今日 Qwen Code 发布了 **v0.19.2 正式版**，主要修复了 `web_fetch` 对 JSON API 的兼容性问题，并优化了服务端 LSP 状态路由。社区关注点集中在**后台任务的可控性与可见性**（如 Loop 逻辑优化、静默 Cron 任务问题）以及**跨设备数据同步**需求上。此外，一起涉及路径遍历的安全漏洞（#5834）已被识别并提交修复 PR，值得开发者注意。

## 2. 版本发布
**v0.19.2 正式版**
- **关键更新**：
  - **JSON 兼容性修复**：`web_fetch` 工具新增 JSON 回退机制，解决了此前请求 JSON API 时因 `Accept` 头部不匹配导致的 HTTP 415 错误 (PR #5660)。
  - **服务端增强**：新增远程 LSP (Language Server Protocol) 状态路由，优化开发环境连接监控。
- **其他**：同步发布了 v0.19.2-preview.0 及对应的 nightly 版本。

## 3. 社区热点 Issues (Top 10)

1.  **[P1 安全漏洞] 源删除操作存在路径遍历风险** [#5834](https://github.com/QwenLM/qwen-code/issues/5834)
    - **详情**：Desktop 端的源删除功能未对 `sourceSlug` 进行充分校验，攻击者可通过构造路径（如 `../sessions`）越权删除工作区外的文件。
    - **状态**：已提交修复 PR #5829，社区高度关注。

2.  **[P2 功能需求] 跨设备同步任务清单与记忆** [#5836](https://github.com/QwenLM/qwen-code/issues/5836)
    - **详情**：目前的 Todos、Plans 和 Memories 仅存储在本地 `~/.qwen/`，无法跨设备共享。用户建议支持将数据持久化到项目目录（如 `.qwen/todos`）以便 Git 管理。
    - **反响**：这是多设备协同开发场景下的高频痛点，社区呼吁较高。

3.  **[P2 Bug] 后台 Cron 任务静默运行，缺乏可见性** [#5823](https://github.com/QwenLM/qwen-code/issues/5823)
    - **详情**：用户发现此前测试时创建的 Cron 任务在后台静默执行，模型无法列出或停止这些任务，导致资源浪费和意外行为。
    - **重要性**：暴露了后台自动化模块在用户控制权上的缺失。

4.  **[P2 Bug] 升级后模型自动切换导致额外费用消耗** [#5819](https://github.com/QwenLM/qwen-code/issues/5819)
    - **详情**：用户反馈升级版本后，系统自动将设置中的模型更改为单价更高的模型（如 DeepSeek-4 Pro），导致未预期的 Token 消耗。
    - **状态**：需进一步确认是否存在配置迁移逻辑问题。

5.  **[P2 功能] 请求 Agent 命令超时设置** [#5838](https://github.com/QwenLM/qwen-code/issues/5838)
    - **详情**：用户希望能自定义 Agent 发起的 Shell 命令的超时时间，当前默认配置无法满足长时间运行任务的需求。

6.  **[P2 CI/CD] 集成测试未在 PR 阶段运行，导致回归问题延迟** [#5219](https://github.com/QwenLM/qwen-code/issues/5219)
    - **详情**：目前的 E2E 集成测试仅在 Release 阶段运行，导致部分破坏性 PR 合并后才被发现。
    - **进展**：这是近期 CI 优化的重点方向，旨在缩短反馈周期。

7.  **[P2 Bug] 终端 UI 显示截断问题** [#5837](https://github.com/QwenLM/qwen-code/issues/5837)
    - **详情**：在 Agent 回复较高时，终端输出的最后一行会在完成时被覆盖或消失。

8.  **[P2 Bug] Loop 循环的用户中断无法取消待定的唤醒任务** [#5806](https://github.com/QwenLM/qwen-code/issues/5806)
    - **详情**：用户按 Esc 中断 Loop 时，仅取消了当前轮次，已排程的下一次唤醒未被清理，导致任务“僵尸复活”。

9.  **[P2 功能] Loop 逻辑优化：事件驱动唤醒** [#5841](https://github.com/QwenLM/qwen-code/issues/5841)
    - **详情**：建议 Self-paced Loop 不应仅依赖定时器唤醒，而应能感知 Monitor 或后台任务的事件通知，实现更智能的休眠与唤醒。

10. **[P2 性能] 本地 LLM 频繁触发 Full Prompt 重处理** [#5736](https://github.com/QwenLM/qwen-code/issues/5736)
    - **详情**：近期更新后，在普通对话续接时，本地 LLM 后端频繁报告进行全量 Prompt 重处理，严重影响性能。

## 4. 重要 PR 进展 (Top 10)

1.  **[安全修复] 拒绝不安全的源 Slug 删除请求** [#5829](https://github.com/QwenLM/qwen-code/pull/5829)
    - **内容**：针对 Issue #5834 的安全修复。在构建删除路径前校验 `sourceSlug`，拒绝包含路径遍历字符（如 `..`）的输入。

2.  **[功能] 支持视觉模型回退配置 `/model --vision`** [#5778](https://github.com/QwenLM/qwen-code/pull/5778)
    - **内容**：允许用户为纯文本主模型配置一个具备视觉能力的备用模型，当输入包含图片时自动切换，提升了模型组合的灵活性。

3.  **[架构] Chrome 扩展架构重构：直连 Daemon** [#5777](https://github.com/QwenLM/qwen-code/pull/5777)
    - **内容**：复活 Chrome 扩展项目。新架构不再依赖 Native Messaging，而是作为瘦客户端直连本地 `qwen serve` 守护进程，架构更现代化。

4.  **[功能] 秘密披露机制防止敏感信息泄露** [#5550](https://github.com/QwenLM/qwen-code/pull/5550)
    - **内容**：在执行大规模文件操作（如 Copy/Sync）前，检测并阻止可能泄露 Secrets（如 .env, 私钥）的文件传输，增强安全性。

5.  **[功能] 增强 Loop 的事件驱动能力** [#5844](https://github.com/QwenLM/qwen-code/pull/5844)
    - **内容**：改进 `/loop` 指令，使其能识别 Monitor 或后台任务的进度通知，避免无意义的定时轮询，减少空转。

6.  **[功能] 语音听写自定义热词支持** [#5817](https://github.com/QwenLM/qwen-code/pull/5817)
    - **内容**：允许用户通过配置文件扩展语音识别的热词库，解决专业领域术语识别不准的问题。

7.  **[功能] MCP Server 热重载** [#5561](https://github.com/QwenLM/qwen-code/pull/5561)
    - **内容**：实现了 `mcpServers` 配置变更后的实时连接/断开，无需重启服务。

8.  **[CI 优化] 重组 Merge Queue 中的 CI 任务分布** [#5842](https://github.com/QwenLM/qwen-code/pull/5842)
    - **内容**：优化 CI 流程，将 CodeQL 和 E2E 测试移出 PR 关键路径或调整触发时机，旨在将 PR 等待时间从 ~25分钟缩短。

9.  **[重构] 解耦 `/remember` 指令与自动提取逻辑** [#5814](https://github.com/QwenLM/qwen-code/pull/5814)
    - **内容**：重构记忆管理逻辑，将自动提取与手动 `/remember` 指令解耦，避免自动行为干扰用户意图。

10. **[功能] Web Shell Markdown 表格增强交互** [#5650](https://github.com/QwenLM/qwen-code/pull/5650)
    - **内容**：在 Web 端为 Markdown 表格添加类似 Excel 的交互功能（排序、过滤、选择），提升数据展示的可用性。

## 5. 功能需求趋势
- **后台自动化与控制权**：社区对 `/loop` 和后台任务的需求正在深化，从“能用”转向“好用”，要求具备事件驱动能力、可视化管理（列出/停止任务）以及正确的生命周期管理（Esc 中断清理）。
- **安全与隐私合规**：随着 Agent 文件操作能力的增强，防止敏感数据泄露和路径遍历攻击成为开发重点。
- **多端与跨设备同步**：Todos、Plans 等状态的跨设备同步需求强烈，用户希望这些状态能像代码一样被版本化管理。
- **IDE 深度集成**：VSCode 扩展的连接稳定性、LSP 状态监控以及浏览器扩展的回归，显示出构建统一 IDE 生态的趋势。

## 6. 开发者关注点
- **CI/CD 效率瓶颈**：开发者注意到当前的 PR 检查耗时过长（约25分钟），且集成测试覆盖率不足。优化 Merge Queue 和测试分片是近期解决的重点。
- **Token 成本与模型管理**：自动升级导致的模型切换引起了用户对隐形 Token 消耗的担忧，开发者需关注版本迁移脚本对用户配置的影响。
- **本地 LLM 性能**：Prompt 缓存失效导致的全量重处理问题影响体验，需排查近期更新中对 Prompt 结构或上下文管理的改动。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 (2026-06-25)

## 1. 今日速览
今日社区焦点集中于 **v0.8.65 架构重构** 的收尾工作，特别是 Fleet（子代理调度系统）和多 Provider 路由机制的稳定性验证。虽然过去 24 小时内无新版本发布，但大量已关闭的 Epic Issues 表明核心架构已趋于稳定。与此同时，用户对 Agent 行为控制（如自问自答偏离意图）及交互体验（如权限弹窗频率）的反馈成为新的关注点。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues (Top 10)

1.  **[#3275] CodeWhale 过度修改及自问自答偏离用户意图**
    *   **重要性**：当前热度最高的 Open Issue。用户反馈 Agent 在执行任务时出现“自驱循环”，未经确认即进行自问自答并执行，偏离了用户指令初衷，直接影响工具可靠性。
    *   **动态**：社区正在讨论如何引入更好的中断机制或确认流程。
    *   链接: [Hmbown/CodeWhale Issue #3275](https://github.com/Hmbown/CodeWhale/issues/3275)

2.  **[#3205] Fleet 模型类、Loadout 自动选择与语义路由角色**
    *   **重要性**：v0.8.65 的核心功能，定义了 Fleet 子代理如何自动选择计算负载和模型。这是 CodeWhale 从单一模型工具转向多 Agent 编排平台的关键。
    *   **动态**：Issue 仍处于 Open 状态，正在细化子代理的模型选择逻辑。
    *   链接: [Hmbown/CodeWhale Issue #3205](https://github.com/Hmbown/CodeWhale/issues/3205)

3.  **[#2608] EPIC: 分离 Provider 事实、Model 事实与路由解析**
    *   **重要性**：v0.8.65 的架构基石。旨在解耦 Provider 身份、模型身份与配置，解决过去模型字符串歧义导致的各种路由问题。
    *   **动态**：已于昨日关闭，标志着核心架构重构工作已完成。
    *   链接: [Hmbown/CodeWhale Issue #2608](https://github.com/Hmbown/CodeWhale/issues/2608)

4.  **[#3466] 权限批准弹窗的取消逻辑与“需审查”语义**
    *   **重要性**：用户体验痛点。用户反馈 v0.8.64 后频繁出现的破坏性操作确认弹窗严重干扰工作流，希望能恢复旧版逻辑或提供更灵活的配置。
    *   **动态**：开发者正在评估如何平衡安全性与易用性。
    *   链接: [Hmbown/CodeWhale Issue #3466](https://github.com/Hmbown/CodeWhale/issues/3466)

5.  **[#3461] MCP 服务器实例重复启动导致内存泄漏**
    *   **重要性**：可靠性 Bug。单次配置导致启动两个进程，其中一个成为孤儿进程占用内存并共享 IO，可能导致潜在的死锁或资源耗尽。
    *   **动态**：Issue 已关闭，修复方案已合并。
    *   链接: [Hmbown/CodeWhale Issue #3461](https://github.com/Hmbown/CodeWhale/issues/3461)

6.  **[#3439] 接入智谱 GLM-5.2 作为 Provider Route Fixture**
    *   **重要性**：生态扩展。社区希望引入智谱 GLM-5.2 以增强中文长文档和创作能力，并作为子 Agent 的备选模型。
    *   **动态**：已关闭，相关集成工作已就绪。
    *   链接: [Hmbown/CodeWhale Issue #3439](https://github.com/Hmbown/CodeWhale/issues/3439)

7.  **[#3192] 申请加入 agentclientprotocol/registry**
    *   **重要性**：集成与分发。申请加入 Agent Client Protocol 注册表，将极大方便 Zed 等编辑器集成和使用。
    *   **动态**：处于 Open 状态，等待 Registry 审核或进一步操作。
    *   链接: [Hmbown/CodeWhale Issue #3192](https://github.com/Hmbown/CodeWhale/issues/3192)

8.  **[#3063] v0.8.59 发布追踪：TUI 鼠标泄漏与运行时安全**
    *   **重要性**：关键稳定性修复。修复了 macOS 上的 TUI 鼠标报告输入泄漏问题，影响了之前版本的可用性。
    *   **动态**：Issue 已关闭，相关修复已随版本发布。
    *   链接: [Hmbown/CodeWhale Issue #3063](https://github.com/Hmbown/CodeWhale/issues/3063)

9.  **[#3384] 所有 Provider/Model 切换通过 ReadyRouteCandidate 解析**
    *   **重要性**：架构改进。确保模型切换是原子操作，防止状态不一致。这是解决模型频繁切换时崩溃的关键修复。
    *   **动态**：已关闭。
    *   链接: [Hmbown/CodeWhale Issue #3384](https://github.com/Hmbown/CodeWhale/issues/3384)

10. **[#3222] 推理流样式覆盖支持**
    *   **重要性**：功能增强。支持 OpenAI 兼容网关的内联思考块（`<think>`）显示，提升对非 DeepSeek 原生模型的兼容性体验。
    *   **动态**：已关闭。
    *   链接: [Hmbown/CodeWhale Issue #3222](https://github.com/Hmbown/CodeWhale/issues/3222)

## 4. 重要 PR 进展 (Top 10)

1.  **[#3571] OHOS 平台支持与工具链清理**
    *   **内容**：升级工具链至 Stable，移除无用配置，为鸿蒙 系统适配做准备。
    *   链接: [Hmbown/CodeWhale PR #3571](https://github.com/Hmbown/CodeWhale/pull/3571)

2.  **[#3569] feat(tui): 显示已配置的 Ask Rules**
    *   **内容**：增加只读的 `/config ask-rules` 视图，让用户能直观看到当前生效的权限规则，提升安全透明度。
    *   链接: [Hmbown/CodeWhale PR #3569](https://github.com/Hmbown/CodeWhale/pull/3569)

3.  **[#3197] refactor(codex): 重命名 DeepSeek Blue 为 Whale Accent**
    *   **内容**：品牌去耦合。将 UI 主题色变量从 `DEEPSEEK_BLUE` 重命名为 `WHALE_ACCENT_PRIMARY`，为项目转型为通用 AI 编程工具做准备。
    *   链接: [Hmbown/CodeWhale PR #3197](https://github.com/Hmbown/CodeWhale/pull/3197)

4.  **[#3566] 优化精简工具记录行的显示**
    *   **内容**：优化 TUI 界面，保留明确的工具身份显示（如 git 操作），同时抑制冗余参数，提升终端界面的可读性。
    *   链接: [Hmbown/CodeWhale PR #3566](https://github.com/Hmbown/CodeWhale/pull/3566)

5.  **[#1764] fix(tui): Ctrl+C 取消请求时恢复已输入的 Prompt**
    *   **内容**：极大的用户体验改进。当用户误按 Ctrl+C 中断请求时，输入框内容不再丢失，而是恢复为可编辑状态。
    *   链接: [Hmbown/CodeWhale PR #1764](https://github.com/Hmbown/CodeWhale/pull/1764)

6.  **[#3241] feat(codex): 支持 $skill 别名快捷激活**
    *   **内容**：允许在输入框开头使用 `$skill-name` 直接激活技能，简化了原有的 `/skill` 命令流程。
    *   链接: [Hmbown/CodeWhale PR #3241](https://github.com/Hmbown/CodeWhale/pull/3241)

7.  **[#3526] 增强 Release Tag 的分支绑定检查**
    *   **内容**：工程实践优化。强制发布标签必须指向 `main` 分支的提交，防止在未合并代码上打标签导致的发布版本不一致。
    *   链接: [Hmbown/CodeWhale PR #3526](https://github.com/Hmbown/CodeWhale/pull/3526)

8.  **[#2347] feat(tui): 默认页脚显示 Git 分支**
    *   **内容**：将 Git 分支状态加入默认页脚显示，用户无需额外配置即可在 TUI 底部看到当前分支信息。
    *   链接: [Hmbown/CodeWhale PR #2347](https://github.com/Hmbown/CodeWhale/pull/2347)

9.  **[#3296] feat(codex): 限制跨工具 Skill 扫描范围**
    *   **内容**：新增配置允许 Skill 发现仅限于 CodeWhale 根目录，避免扫描全盘带来的性能开销和隐私风险。
    *   链接: [Hmbown/CodeWhale PR #3296](https://github.com/Hmbown/CodeWhale/pull/3296)

10. **[#3062] fix(tools): 按需应用 Strict Schema 模式**
    *   **内容**：修复工具调用的 Schema 兼容性问题。仅对兼容的 Schema 启用 Strict 模式，保持不兼容 Schema 的原始结构，提高了与不同 LLM 后端的兼容性。
    *   链接: [Hmbown/CodeWhale PR #3062](https://github.com/Hmbown/CodeWhale/pull/3062)

## 5. 功能需求趋势

*   **多模型路由与编排**：社区强烈关注多 Provider（DeepSeek, OpenAI, GLM 等）的无缝切换和负载分配。Issues 集中在路由解析的准确性、模型选择的自动化以及子 Agent（Fleet）的模型配置上。
*   **Fleet 子代理架构**：用户和开发者正致力于构建一套完整的“Fleet”系统，包括角色定义、负载配置和执行底座。这表明项目正从单纯的 TUI 向“多 Agent 协作终端”演进。
*   **交互体验精细化**：对 UI/UX 的要求日益提高，如对推理流样式的自定义、权限弹窗的优化、输入内容的防丢失保护等。
*   **国产模型生态集成**：除了 DeepSeek 本身，社区积极要求集成智谱 GLM-5.2 等国产优秀模型，显示出工具国产化适配的强需求。

## 6. 开发者关注点

*   **Agent 行为不可控**：开发者反馈 Agent 有时过于“激进”，在未经用户确认的情况下自我循环执行任务，急需更严格的意图对齐机制。
*   **工具权限与打扰**：频繁的权限确认弹窗是当前最大的痛点之一，开发者倾向于更智能的上下文感知权限控制，而非简单的“全部确认”或“逐条确认”。
*   **资源泄漏与稳定性**：MCP Server 的进程管理和 TUI 的鼠标事件泄漏是近期重点修复的 Bug，显示出在长时运行场景下的稳定性仍是关注焦点。
*   **品牌与解耦**：代码层面正在进行深度的品牌解耦（如颜色变量重命名），开发者正在将项目从单一的 DeepSeek 客户端转型为通用的 AI 编程工具链。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*