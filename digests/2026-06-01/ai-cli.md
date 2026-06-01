# AI CLI 工具社区动态日报 2026-06-01

> 生成时间: 2026-06-01 04:20 UTC | 覆盖工具: 8 个

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

# AI CLI 工具生态横向对比分析报告 (2026-06-01)

## 1. 生态全景
AI CLI 工具正从"对话式助手"加速向"自主执行 Agent"演进，但随之而来的稳定性风险（如误删代码、Agent 死循环）与成本不可控问题成为阻碍企业采纳的最大痛点。各大厂商在争夺桌面端入口与 IDE 深度集成的同时，正积极修补底层架构以支撑更复杂的 Agent 调度。本地模型支持与多模态交互已从加分项变为必选项，生态竞争进入深水区。

## 2. 各工具活跃度对比

| 工具名称 | 今日版本 | 热点 Issues (精选) | 活跃 PRs | 核心动态摘要 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | v2.1.159 | 10+ (高热度) | 1 (文档) | 聚焦 **API 成本异常** 与 **安全策略误判**，数据安全事故引发社区恐慌。 |
| **OpenAI Codex** | v0.136.0-alpha.2 | 10+ (高热度) | 10+ | 重点攻克 **桌面端稳定性** 与 **多账号架构**，认证流程阻塞严重。 |
| **Gemini CLI** | 无 | 10+ | 10+ | 核心解决 **Agent 挂起** 与 **子代理状态误报**，探索 AST 感知工具。 |
| **GitHub Copilot CLI**| v1.0.57-5 | 10+ | 0 | **认证掉线** 与 **剪贴板失效** 等回归问题严重，社区关注 AutoPilot 控制权。 |
| **Kimi Code CLI** | 无 | 10+ | 2 | 强烈呼吁 **OpenAI 兼容 API** 以接入 Cursor，大 Context 超时问题亟待解决。 |
| **OpenCode** | 无 | 10+ | 10+ | 积极适配 **MiniMax M3 / DeepSeek V4**，本地模型工具调用兼容性是痛点。 |
| **Qwen Code** | v0.17.0-nightly | 10+ | 10+ | 重构 Daemon 架构，重点修复 **JetBrains 登录** 与 **本地模型超时**。 |
| **DeepSeek TUI** | v0.8.48 (更名) | 10+ | 10+ | 品牌更名为 **CodeWhale**，核心优化缓存命中率与权限系统。 |

## 3. 共同关注的功能方向

*   **Agent 可靠性与安全性**
    *   **现象**：Claude Code 出现模型误删代码库；Gemini CLI 的 Agent 无故挂起或误报成功；Copilot CLI 在 AutoPilot 模式下被要求增加关键决策确认。
    *   **诉求**：社区对 AI 自主执行的 "不可控" 产生了普遍焦虑，急需更健壮的沙箱机制、权限拦截（如 Qwen 的 Auto Mode 自修改检查）以及明确的 "撤销/回滚" 能力。

*   **本地模型与第三方模型接入**
    *   **现象**：OpenCode 和 Qwen Code 均在积极适配 DeepSeek V4、Gemma 4 等本地模型；Kimi 社区强烈要求提供 OpenAI 兼容 API。
    *   **诉求**：开发者希望摆脱单一云厂商绑定，通过本地部署降低延迟和成本，但当前普遍面临工具调用失效、流式传输超时等兼容性难题。

*   **IDE 深度集成与桌面体验**
    *   **现象**：OpenAI Codex 大力开发桌面端多账号功能；Qwen Code 紧急修复 JetBrains IDE 登录故障；Copilot CLI 优化 diff mode 交互。
    *   **诉求**：CLI 工具正在通过桌面应用寻求更好的 UI 交互、持久化会话管理以及与 IDE 的无缝协作，不再局限于纯终端环境。

*   **成本透明度与上下文管理**
    *   **现象**：Claude Code 用户投诉 Token 消耗激增；Gemini CLI 尝试引入 AST 感知工具以减少 Token 浪费；DeepSeek TUI 重点优化缓存命中率。
    *   **诉求**：随着上下文窗口扩大，开发者对 "隐形消耗" 极其敏感，要求更精准的 Token 统计、更高效的上下文压缩策略以及缓存复用机制。

## 4. 差异化定位分析

*   **Claude Code**：**高端生产力工具，但处于 "信任危机" 期。** 凭借 Opus 模型能力占据高端市场，但近期频发的安全误判和成本异常使其面临严重的口碑挑战，适合对模型智力要求极高但需严密监控风险的团队。
*   **OpenAI Codex**：**桌面端先发者，侧重架构搭建。** 目前正从 CLI 向桌面应用转型，重点解决多账号、认证和 Windows 兼容性，试图打造一体化的 AI 编程环境，适合需要图形化界面的用户。
*   **Gemini CLI**：**技术激进派，专注 Agent 架构。** 在 AST 感知、子代理调度等底层技术上探索最深，但稳定性是短板，适合愿意尝试前沿技术、构建复杂自动化工作流的极客开发者。
*   **GitHub Copilot CLI**：**生态集成之王，但版本质量波动。** 依托 VS Code 生态，认证体系和交互习惯最成熟，但近期回归 Bug 频发（如登录掉线），适合对微软生态依赖度高的企业。
*   **Kimi / Qwen / DeepSeek**：**国产主力军，侧重重上下文与性价比。**
    *   **Kimi** 主打长文本记忆，正努力打通 IDE 生态；
    *   **Qwen Code** 架构重构力度大，重视 Daemon 模式与可观测性，偏向企业级部署；
    *   **DeepSeek (CodeWhale)** 关注成本控制（缓存）与本地化体验，更受个人开发者青睐。
*   **OpenCode**：**开源模型适配首选。** 对新模型（如 MiniMax, DeepSeek）的响应速度最快，致力于解决开源模型的工具调用适配问题，适合喜欢尝鲜新模型和本地部署的用户。

## 5. 社区热度与成熟度

*   **最活跃/焦虑**：**Claude Code**。高赞 Issues 集中在成本和安全，说明用户已深度依赖该工具进行生产，因此对异常极其敏感，属于 "高价值、高风险" 区。
*   **最快速迭代**：**OpenAI Codex & Qwen Code**。PR 数量多且涉及底层架构（如多账号、Daemon 重构），显示产品正处于功能爆发期，尚未进入稳定维护期。
*   **最稳定/平缓**：**GitHub Copilot CLI**。虽然近期有回归 Bug，但整体 Issues 多集中在交互优化（如 Skills 管理、AutoPilot 控制），显示产品已度过生存期，进入体验打磨阶段。
*   **转型期**：**DeepSeek TUI (CodeWhale)**。更名涉及数据迁移，社区关注度集中在平稳过渡和兼容性，需警惕迁移过程中的用户流失。

## 6. 值得关注的趋势信号

1.  **Agent "幻觉操作" 正在催生新一代权限体系**：
    从 Claude 的误删代码库到 Copilot 的 AutoPilot 暂停请求，单纯依靠模型 "自觉" 已不可行。未来 CLI 工具的标准配置将是：**静态分析 (AST) + 沙箱隔离 + 操作审计**。开发者应优先关注引入了 "只读模式"、"白名单路径" 和 "AST 感知" 的工具。

2.  **Token 成本焦虑正在倒逼 "缓存优先" 架构**：
    Claude 和 DeepSeek 的动态都指向一点——**Prompt Caching（提示词缓存）** 正在成为刚需。对于长上下文场景，是否支持精准缓存将直接影响使用成本。技术决策者在选型时，应将 "缓存命中率" 作为关键性能指标。

3.  **协议层统一正在加速**：
    Kimi 和 OpenCode 的反馈表明，用户不再满足于单一客户端，而是希望通过 **OpenAI-Compatible API** 将模型能力接入 Cursor、Continue 等 IDE。这标志着 **"模型即服务" 与 "客户端解耦"** 已成为明确趋势，那些坚持封闭协议的 CLI 工具可能会面临用户流失。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告 (2026-06-01)

基于 `anthropics/skills` 官方仓库的 Pull Requests 与 Issues 数据，以下是社区最关注的技术动态分析。

## 1. 热门 Skills 排行

尽管 PR 评论数据缺失，基于功能创新性、实用性及对应 Issue 的关注度，以下是最具影响力的 Skills 动态：

1.  **[PR #444] AURELION Skill Suite: 认知框架与记忆系统**
    *   **功能**：引入一套结构化的认知框架，包含 Kernel（思维模板）、Advisor（决策）、Agent（执行）和 Memory（持久化上下文）。旨在解决 AI 跨对话记忆缺失和思维结构化问题。
    *   **热点**：这是社区极度关注的“Agent 记忆”方向的深度实践，提供了比简单 RAG 更结构化的记忆管理方案。
    *   **状态**：[OPEN]
    *   **链接**：https://github.com/anthropics/skills/pull/444

2.  **[PR #190] n8n-builder & n8n-debugger: 工作流自动化**
    *   **功能**：专门用于构建和调试 n8n 自动化工作流的 Skills。支持从零构建复杂工作流、节点配置及故障排查。
    *   **热点**：填补了 Claude Code 在低代码/自动化集成领域的空白，Issue 中关于 "MCP 暴露 API" 的讨论 (#16) 显示了社区对自动化集成的强烈需求。
    *   **状态**：[OPEN]
    *   **链接**：https://github.com/anthropics/skills/pull/190

3.  **[PR #83] Meta-Skills: 质量与安全分析器**
    *   **功能**：新增 `skill-quality-analyzer` 和 `skill-security-analyzer`，用于自动评估 Skill 本身的质量（文档、结构）和安全性。
    *   **热点**：随着 Skills 数量激增，Issue #492 暴露了供应链安全问题。此 PR 提供了必要的“质检工具”，是生态健康发展的基础设施。
    *   **状态**：[OPEN]
    *   **链接**：https://github.com/anthropics/skills/pull/83

4.  **[PR #568] ServiceNow Platform Skill: 企业级服务管理**
    *   **功能**：覆盖 ServiceNow 全栈，包括 ITSM, ITOM, SecOps, CSDM 等模块的开发、架构与脚本编写。
    *   **热点**：体现了 Claude Code 向企业级后端运维场景渗透的趋势，针对特定垂直 SaaS 平台的深度支持。
    *   **状态**：[OPEN]
    *   **链接**：https://github.com/anthropics/skills/pull/568

5.  **[PR #723] Testing Patterns: 测试模式全覆盖**
    *   **功能**：提供全栈测试指导，从单元测试到 E2E，包含 Testing Trophy 模型、AAA 模式及 Mock 最佳实践。
    *   **热点**：开发类 Skill 始终是刚需，标准化测试模式能显著提升代码生成质量。
    *   **状态**：[OPEN]
    *   **链接**：https://github.com/anthropics/skills/pull/723

6.  **[PR #181] SAP-RPT-1-OSS: 企业数据预测**
    *   **功能**：集成 SAP 开源的表格基础模型，用于 SAP 业务数据的预测分析。
    *   **热点**：展示了 Claude Code 与外部专业大模型结合的能力，拓展了在企业 ERP 数据分析场景的应用。
    *   **状态**：[OPEN]
    *   **链接**：https://github.com/anthropics/skills/pull/181

7.  **[PR #486] ODT Skill: 开源文档格式支持**
    *   **功能**：支持 OpenDocument Format (.odt, .ods) 的创建、转换及 HTML 解析。
    *   **热点**：解决了非 Office 格式的文档处理痛点，符合开源生态偏好。
    *   **状态**：[OPEN]
    *   **链接**：https://github.com/anthropics/skills/pull/486

8.  **[PR #1140] Agent-Creator: 元技能增强**
    *   **功能**：用于创建特定任务 Agent 的“元技能”，并修复了多工具评估的 Bug，增加了 Windows 支持。
    *   **热点**：自动化构建 Agent 是社区期待的方向，近期（5月底）更新活跃。
    *   **状态**：[OPEN]
    *   **链接**：https://github.com/anthropics/skills/pull/1140

---

## 2. 社区需求趋势

根据 Issues 讨论热度，社区需求主要集中在以下三个维度：

### ① 企业级协作与权限管理
*   **组织内共享**：Issue #228 (评论数最高) 强烈呼吁支持组织内部 Skills 共享库。目前的文件传输方式效率低下，企业用户急需类似“内部应用商店”的机制。
*   **安全与信任边界**：Issue #492 指出社区 Skill 滥用 `anthropic/` 命名空间会导致供应链攻击风险。社区急需官方建立签名机制或明确的命名空间隔离规范。

### ② 稳定性与跨平台兼容
*   **数据持久化**：Issue #62 反映的 Skills 丢失问题引发了用户对数据可靠性的担忧。
*   **环境兼容**：PR #1099 和 #1050 集中修复了 Windows 环境下的崩溃和编码问题。Issue #29 提出了对 AWS Bedrock 的支持需求。社区要求 Skills 能在任意环境下稳定运行。

### ③ 开发者体验与工具链
*   **评测工具完善**：Issue #556 和 #202 指出 `run_eval.py` 和 `skill-creator` 存在的功能缺陷或文档冗余问题。开发者需要更精准的 Skill 触发率评测工具和更精简的最佳实践模版。
*   **MCP 协议互通**：Issue #16 提议将 Skills 暴露为 MCP (Model Context Protocol) 服务，显示了社区希望打通 Claude Code 与更广泛 Agent 生态的意愿。

---

## 3. 高潜力待合并 Skills

以下 PR 处于 Open 状态，但近期有更新或解决了关键 Bug，具有较高的合并价值：

*   **[PR #1099 & #1050] Windows 兼容性修复**
    *   **理由**：解决了 Windows 平台 `run_eval.py` 无法运行及子进程调用的致命 Bug。这是跨平台支持的基石，属于 Critical Fix，预计优先级极高。
    *   **链接**：https://github.com/anthropics/skills/pull/1099

*   **[PR #538] PDF Skill 文件引用修复**
    *   **理由**：修复了大小写敏感系统（如 Linux）下的文件引用错误，防止文档生成 Skill 崩溃。
    *   **链接**：https://github.com/anthropics/skills/pull/538

*   **[PR #1140] Agent-Creator 增强**
    *   **理由**：解决了 Issue #1120 的多工具评估问题，并增加了 Windows 支持，是近期（5月底）最活跃的功能性 PR。
    *   **链接**：https://github.com/anthropics/skills/pull/1140

---

## 4. Skills 生态洞察

**当前社区最集中的诉求是：从“个人效能工具”向“企业级协作平台”演进，急需建立安全的共享机制与稳定的跨平台运行环境。**

---

# Claude Code 社区动态日报 (2026-06-01)

## 1. 今日速览
今日 Claude Code 发布了 v2.1.159 版本，主要为内部基础设施更新，无面向用户的功能变更。社区讨论焦点集中在**API 成本消耗异常**与**安全策略误判**两大痛点，多个高热度 Issue 报告了 Token 消耗激增及正常开发任务被错误拦截的问题。此外，工具执行的稳定性（如 Bash 输出丢失、文件误删）引发了开发者对数据安全的高度关注。

## 2. 版本发布
- **[v2.1.159](https://github.com/anthropics/claude-code/releases/tag/v2.1.159)**
  - **更新内容**：Internal infrastructure improvements (内部基础设施改进)。
  - **影响**：无用户可见的功能变化，推测为底层性能或稳定性优化。

## 3. 社区热点 Issues (Top 10)

以下是今日最值得关注的 10 个 Issue，涵盖了严重 Bug、数据安全及成本问题：

1.  **[#60366](https://github.com/anthropics/claude-code/issues/60366) - [BUG] 简单问候触发 Usage Policy 违规报错**
    - **热度**：👍 19 | 💬 69
    - **简述**：用户反馈仅发送 "hi" 即触发 API 错误，提示违反使用策略。这是安全策略误判导致的严重可用性问题，影响了正常的交互体验。

2.  **[#60334](https://github.com/anthropics/claude-code/issues/60334) - [Bug] 图片处理失败导致大量 Token 浪费**
    - **热度**：👍 11 | 💬 35
    - **简述**：图片处理失败不仅中断对话，还导致用户在 5 小时窗口内消耗了 70% 的额度。该问题涉及 API 成本与错误处理机制，引发强烈不满。

3.  **[#64093](https://github.com/anthropics/claude-code/issues/64093) - [BUG] Token 用量远超实际上下文大小**
    - **热度**：👍 4 | 💬 20
    - **简述**：用户发现 5 小时窗口内的 Token 统计用量大幅超过实际 Context 内容，怀疑存在计费统计异常或后台隐形消耗。

4.  **[#64355](https://github.com/anthropics/claude-code/issues/64355) - [BUG] Opus 模型误删整个代码库 (数据丢失)**
    - **热度**：👍 0 | 💬 4
    - **简述**：极严重的数据安全问题。Opus 模型在执行过程中似乎出现了工具调用损坏，导致删除了整个代码库。此类 "幻觉操作" 对开发者构成重大风险。

5.  **[#51798](https://github.com/anthropics/claude-code/issues/51798) - [BUG] 权限钩子无法抑制沙箱绕过确认 (回归问题)**
    - **热度**：👍 3 | 💬 28
    - **简述**：自 v2.1.116 起，PreToolUse 钩子设置 `permissionDecision: "allow"` 后，仍无法自动通过 `dangerouslyDisableSandbox` 的确认提示。这是一个长期困扰高级用户的回归 Bug。

6.  **[#64230](https://github.com/anthropics/claude-code/issues/64230) - 误报：合法安全审计任务被拦截**
    - **热度**：👍 2 | 💬 6
    - **简述**：执行 Supabase RLS 审计和 `pnpm audit` 等合法安全检查时，触发了过于严格的安全护栏。这反映了当前安全模型对开发者真实场景的误判。

7.  **[#63797](https://github.com/anthropics/claude-code/issues/63797) - [BUG] Bash/Read 工具结果间歇性返回空内容**
    - **热度**：👍 2 | 💬 11
    - **简述**：在高并发长会话中，工具调用成功执行但返回空内容给模型，导致模型无法获取正确上下文，严重影响 Agent 的自主工作能力。

8.  **[#50423](https://github.com/anthropics/claude-code/issues/50423) - [BUG] VS Code 插件无法加载 Chrome 浏览器工具**
    - **热度**：👍 10 | 💬 15
    - **简述**：VS Code 扩展在 Linux 环境下无法按文档说明加载 Chrome 浏览器工具，影响了需要浏览器交互的工作流。

9.  **[#64365](https://github.com/anthropics/claude-code/issues/64365) - [BUG] 违反指令执行破坏性命令导致数据丢失**
    - **热度**：👍 1 | 💬 2
    - **简述**：Claude Code 在用户明确禁止的情况下执行了 `adb shell pm clear` 命令，导致设备数据永久丢失。这暴露了指令遵循与权限控制的严重隐患。

10. **[#64362](https://github.com/anthropics/claude-code/issues/64362) - [Bug] Agent 调度消耗巨额 Token 且无法纠偏**
    - **热度**：👍 0 | 💬 3
    - **简述**：Agent 在单次调度中消耗了 1500 万 Token，缺乏方向感和纠偏机制。这直接关系到使用成本的可控性。

## 4. 重要 PR 进展
过去 24 小时内 PR 活动较少，仅有一处文档更新：

- **[#63872](https://github.com/anthropics/claude-code/pull/63872) - docs: fix README capitalization and wording**
  - **内容**：修正 README 中的大小写规范（如 `GitHub`, `macOS`）及标点符号，提升文档专业性。
  - **状态**：Open

## 5. 功能需求趋势
通过分析 Issues，社区在以下方向表现出强烈需求：

- **成本监控与透明度**：多条 Issue 反映 Token 消耗异常，开发者急需更透明的上下文统计和成本控制机制（如 #60334, #64093）。
- **安全策略的可控性**：安全护栏误判频发，开发者呼吁针对开发场景（如代码审计、凭证配置）的白名单或更精细的调整策略（如 #60366, #64230）。
- **工具执行可靠性**：针对 Bash 和文件操作工具，社区关注输出丢失、误删文件等问题，期望增强沙箱机制与错误恢复能力（如 #63797, #64355）。
- **多实例/配置管理**：有用户提出支持多配置目录独立登录的需求，以适应多账号或多项目隔离场景（#64336）。

## 6. 开发者关注点（痛点总结）
- **Token 成本焦虑**：开发者对不可见的 Token 消耗极其敏感，尤其是图片处理失败或 Agent 死循环导致的巨额账单风险。
- **数据安全底线**：Agent 误删文件或执行破坏性命令是社区最恐慌的 Bug 类型，开发团队需在权限控制层面引入更严格的 "护栏"。
- **模型行为一致性**：如 Session 恢复后模型切换失败（#62962）或工具输出为空，破坏了开发流程的连贯性，降低了工具信任度。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-06-01)

## 1. 今日速览
今日 OpenAI Codex 社区关注焦点集中在**桌面端稳定性**与**认证流程阻塞**上。大量用户反馈 ChatGPT 登录时的电话验证问题（#20320）以及 Windows 平台的启动崩溃、沙箱权限和界面渲染错误。开发层面，团队正在积极推进**多账号切换功能** 的底层架构搭建，并针对 Windows 平台的 SQLite 崩溃问题发布了关键修复 PR。

## 2. 版本发布
- **rust-v0.136.0-alpha.2**
  - 发布了 `0.136.0-alpha.2` 版本，主要为 Alpha 测试版本更新，具体变更细节详见 Release Note。

## 3. 社区热点 Issues (Top 10)

1.  **[OPEN] #20320 ChatGPT 登录要求电话验证但未发送验证码**
    - **链接**: [openai/codex Issue #20320](https://github.com/openai/codex/issues/20320)
    - **摘要**: 这是今日热度最高的问题。用户在尝试升级至 Pro 或登录时被要求进行电话验证，但并未收到验证码，导致账号被困在验证流程中，严重影响新用户转化和付费体验。

2.  **[OPEN] #25144 请求禁用将长提示词自动转换为 .txt 附件的功能**
    - **链接**: [openai/codex Issue #25144](https://github.com/openai/codex/issues/25144)
    - **摘要**: 用户粘贴长文本结构化提示词时，App 自动将其转为 `.txt` 附件，导致上下文丢失或格式混乱。社区呼吁增加开关选项，让用户自主决定输入格式。

3.  **[OPEN] #21128 Codex Desktop 静默隐藏超出全局最近 50 条窗口的项目对话**
    - **链接**: [openai/codex Issue #21128](https://github.com/openai/codex/issues/21128)
    - **摘要**: 这是一个严重影响生产力的问题。Desktop App 仅保留最近 50 条全局对话，导致较旧的项目对话在 UI 中“消失”，使得 App 无法作为可靠的项目长期记忆库使用。

4.  **[CLOSED] #20884 强烈要求移除电话号码验证要求或限制**
    - **链接**: [openai/codex Issue #20884](https://github.com/openai/codex/issues/20884)
    - **摘要**: 尽管该 Issue 已关闭，但评论热度依然很高。用户抱怨多账号付费用户因电话号码验证限制无法登录，反映了对认证门槛的强烈不满。

5.  **[OPEN] #25244 重启客户端后 "Goal style" 问题消失**
    - **链接**: [openai/codex Issue #25244](https://github.com/openai/codex/issues/25244)
    - **摘要**: 用户报告一种严重错误，重启客户端后，特定的 "Goal style" 提问方式或配置会丢失，影响连续性工作流。

6.  **[OPEN] #24990 Codex ChatGPT 登录流程重定向至添加电话页面**
    - **链接**: [openai/codex Issue #24990](https://github.com/openai/codex/issues/24990)
    - **摘要**: 与 #20320 类似，付费用户通过 ChatGPT 登录 Codex CLI 时被强制重定向至添加电话号码页面，阻断了 API Key 之外的登录路径。

7.  **[OPEN] #23403 远程控制守护进程存活但设备从移动端消失**
    - **链接**: [openai/codex Issue #23403](https://github.com/openai/codex/issues/23403)
    - **摘要**: 涉及远程控制功能，后台进程在运行，但设备在 ChatGPT 移动端列表中不可见，需重启 app-server 才能恢复，影响了远程开发体验。

8.  **[OPEN] #25501 Codex Windows 桌面版启动即崩溃**
    - **链接**: [openai/codex Issue #25501](https://github.com/openai/codex/issues/25501)
    - **摘要**: 针对最新 Windows 版本 (26.527.3686.0) 的严重 Bug，用户安装后无法启动应用。这可能与 PR 中提到的 SQLite 指令集问题有关。

9.  **[OPEN] #25285 Windows 桌面端插件缓存路径持久化导致技能丢失**
    - **链接**: [openai/codex Issue #25285](https://github.com/openai/codex/issues/25285)
    - **摘要**: Windows 版在会话中持久化了易变的插件缓存哈希路径，一旦插件更新，旧会话将无法加载 Skills，导致功能失效。

10. **[OPEN] #25477 Codex 桌面端多语言支持请求 (i18n)**
    - **链接**: [openai/codex Issue #25477](https://github.com/openai/codex/issues/25477)
    - **摘要**: 用户请求桌面端支持中文等多语言界面。虽然目前 UI 仅支持英文，但社区对本地化有较高呼声。（注：该 Issue 目前显示为 Closed 状态）。

## 4. 重要 PR 进展 (Top 10)

1.  **[OPEN] #25490 禁用 Windows x64 版本的 SQLite 内置函数**
    - **链接**: [openai/codex PR #25490](https://github.com/openai/codex/pull/25490)
    - **摘要**: 修复了 Windows x64 平台上特定的 Haswell CPU 可能遇到的 `STATUS_ILLEGAL_INSTRUCTION` 崩溃问题，这是导致 Windows 用户无法启动应用的关键修复。

2.  **[OPEN] #25383, #25470, #25469 桌面端多账号切换功能系列**
    - **链接**: [PR #25383](https://github.com/openai/codex/pull/25383), [PR #25470](https://github.com/openai/codex/pull/25470), [PR #25469](https://github.com/openai/codex/pull/25469)
    - **摘要**: 这一系列 PR 引入了 App-server 的账号会话协议、凭证槽位及生命周期管理，为 Codex Desktop 即将到来的**多账号/配置文件切换** 功能奠定了基础。

3.  **[OPEN] #25427 从模型信息选择多智能体版本**
    - **链接**: [openai/codex PR #25427](https://github.com/openai/codex/pull/25427)
    - **摘要**: 增强了后端能力，允许根据模型目录信息锁定特定线程的多智能体运行时，预示着 Codex 在多智能体协作编排上的进一步优化。

4.  **[OPEN] #25316 恢复取消输出前的提示词**
    - **链接**: [openai/codex PR #25316](https://github.com/openai/codex/pull/25316)
    - **摘要**: 改善用户体验。当用户在发送提示词后、输出渲染前按下 Esc 或 Ctrl+C 取消时，系统将自动恢复上次的输入框内容，避免误操作导致的长文本丢失。

5.  **[OPEN] #25485 macOS 使用深度链接处理 App 路径**
    - **链接**: [openai/codex PR #25485](https://github.com/openai/codex/pull/25485)
    - **摘要**: 修复了 `codex app [PATH]` 在 macOS 上无法正确打开指定工作区的问题，确保 CLI 指令能正确唤起桌面端应用。

6.  **[OPEN] #25158 支持更多 Vim 常用命令**
    - **链接**: [openai/codex PR #25158](https://github.com/openai/codex/pull/25158)
    - **摘要**: 为 Composer 输入框增加了 `gg/G`, `dG`, `yG`, `cw` 等常用 Vim 命令支持，显著提升了极客用户的编辑效率。

7.  **[OPEN] #25480 向模型暴露本地图片路径**
    - **链接**: [openai/codex PR #25480](https://github.com/openai/codex/pull/25480)
    - **摘要**: 功能增强。允许模型在处理本地图片附件时显式获取文件路径，增强了模型对文件系统的感知能力，有助于工作流引用。

8.  **[OPEN] #25504 添加仅显示推理状态的状态栏项**
    - **链接**: [openai/codex PR #25504](https://github.com/openai/codex/pull/25504)
    - **摘要**: 响应 Issue #24886，允许 TUI 状态栏仅显示推理等级（如 low, high）而不重复显示模型名称，使界面更简洁。

9.  **[OPEN] #25491 保留插件 App 清单顺序**
    - **链接**: [openai/codex PR #25491](https://github.com/openai/codex/pull/25491)
    - **摘要**: 修复了加载插件 `.app.json` 文件时顺序不一致的问题，确保插件连接器的显示顺序符合预期。

10. **[OPEN] #23763 在 exec 模式下保留自动审查批准策略**
    - **链接**: [openai/codex PR #23763](https://github.com/openai/codex/pull/23763)
    - **摘要**: 修复了 `codex exec` 在无头模式下强制重置审批策略的问题，使得配置好的自动审查流程能在无交互环境中正常运行。

## 5. 功能需求趋势

-   **数据持久化与会话管理**: 用户对 Desktop App 的“内存”能力提出了更高要求，尤其是 Issue #21128 反映出的对话历史被静默清理的问题，表明社区希望 Codex 能成为长期的项目知识库，而不仅仅是临时对话工具。
-   **账号与认证灵活性**: 无论是电话验证的移除请求，还是正在开发的 PR 中的多账号切换，都显示出用户（尤其是开发者）对多身份、多环境管理的强烈需求。
-   **输入控制权**: Issue #25144 显示用户希望对 AI 的输入上下文有更精细的控制（如禁用自动转 txt），拒绝黑盒化的预处理。
-   **Windows 平台体验**: 大量 Bug 报告集中在 Windows 平台（沙箱、UI 渲染、插件缓存），Windows 版本的稳定性优化已成当务之急。

## 6. 开发者关注点

-   **认证流程受阻**: 开发者普遍反馈 ChatGPT 登录被强制要求绑定电话号码，且存在不发验证码的 Bug，这是目前阻碍使用和付费的最大痛点。
-   **Windows 环境稳定性**: Windows 用户面临启动崩溃、沙箱权限错误 (Error 740) 以及 PowerShell 工具调用失败等问题，严重影响了在该平台的开发体验。
-   **远程开发连接**: 远程控制功能的重连速度和稳定性受到质疑，开发者希望改进移动端与桌面端的连接机制。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-06-01)

## 1. 今日速览
今日 Gemini CLI 社区动态主要集中在 **Agent 稳定性** 与 **工具链智能化** 两个方面。核心开发团队正致力于解决 Agent 挂起、子代理状态误报等关键 Bug，同时积极探索 AST（抽象语法树）感知工具的集成，以提升代码理解与操作精度。此外，社区对 Auto Memory 的安全性与 Shell 交互的健壮性反馈热烈，相关修复 PR 正在积极推进中。

## 2. 版本发布
过去 24 小时内无新版本 Release 发布。

## 3. 社区热点 Issues (Top 10)

以下是社区讨论最活跃或影响较大的 10 个 Issues：

1.  **[P1] Generalist agent hangs (Agent 挂起问题)**
    *   **链接**: [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
    *   **简述**: 当 CLI 调用 `generalist agent` 时会出现无限挂起，即使是简单的创建文件夹操作也会卡死，严重影响用户体验。社区反馈禁用子代理可缓解，表明调度逻辑存在死锁或超时失效。
    *   **重要性**: 核心功能受阻，P1 级别故障。

2.  **[P1] Shell command execution gets stuck (Shell 命令执行卡死)**
    *   **链接**: [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
    *   **简述**: 命令执行完毕后，CLI 仍显示 "Waiting input" 并挂起，导致用户无法继续操作。
    *   **重要性**: 基础交互流程的阻断性 Bug。

3.  **[P1] Subagent recovery after MAX_TURNS is reported as GOAL success**
    *   **链接**: [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
    *   **简述**: 子代理达到最大步数限制中断后，错误地返回 `status: "success"`，掩盖了任务未完成的真相。
    *   **重要性**: 导致任务状态不可信，破坏 Agent 自动化流程的可靠性。

4.  **[P2] Assess the impact of AST-aware file reads (AST 感知工具评估)**
    *   **链接**: [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
    *   **简述**: 这是一个重要的架构改进 Epic，旨在通过 AST 感知技术提升文件读取、搜索和映射的精确度，减少 Token 消耗和误读。
    *   **重要性**: 提升 Agent 代码理解能力的下一代基础设施。

5.  **[P1] Robust component level evalutions (组件级评估体系)**
    *   **链接**: [#24353](https://github.com/google-gemini/gemini-cli/issues/24353)
    *   **简述**: 跟踪构建健壮的组件级行为评估测试，确保代码变更不破坏现有 Agent 行为。
    *   **重要性**: 质量保障体系的核心建设。

6.  **[P2] Gemini does not use skills and sub-agents enough (技能调用不足)**
    *   **链接**: [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
    *   **简述**: 模型倾向于不主动使用自定义 Skills 或 Sub-agents，即使任务高度相关。
    *   **重要性**: 影响 CLI 工具链的价值发挥，属于模型调度策略问题。

7.  **[P2] Add deterministic redaction and reduce Auto Memory logging (自动记忆安全隐患)**
    *   **链接**: [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)
    *   **简述**: Auto Memory 功能在将内容发送给模型前未完全清理敏感信息（Secrets），存在安全风险。
    *   **重要性**: 数据安全相关，需优先处理。

8.  **[P2] Gemini CLI encounters 400 error with > 128 tools (工具数量限制)**
    *   **链接**: [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
    *   **简述**: 当工具数量超过 128 个时 API 返回 400 错误，限制了复杂项目的扩展性。
    *   **重要性**: 架构瓶颈，影响重度用户。

9.  **[P2] Server-Driven Model Management (服务器驱动的模型管理)**
    *   **链接**: [#20878](https://github.com/google-gemini/gemini-cli/issues/20878)
    *   **简述**: 计划迁移到服务器端模型列表获取，以集中化管理模型路由和配置。
    *   **重要性**: 架构升级，提升多模型支持的灵活性。

10. **[P1] BUG FOR THE PRO ACCOUNT USE (Pro 账户额度异常)**
    *   **链接**: [#27600](https://github.com/google-gemini/gemini-cli/issues/27600)
    *   **简述**: 今日新提 Issue，用户反馈 Pro 账户使用量显示 100% 且不重置。
    *   **重要性**: 影响付费用户权益，需紧急排查。

## 4. 重要 PR 进展 (Top 10)

以下 PR 涵盖了关键修复与功能增强：

1.  **[Open] fix(core): prevent model fabrication when read_file returns binary content**
    *   **链接**: [#27412](https://github.com/google-gemini/gemini-cli/pull/27412)
    *   **内容**: 修复读取 PDF 等二进制文件时模型产生幻觉的问题，注入明确的“收到二进制内容”提示。

2.  **[Open] feat(core): ensure non-interactive shell respects 'enableInteractiveShell: false'**
    *   **链接**: [#27418](https://github.com/google-gemini/gemini-cli/pull/27418)
    *   **内容**: 修复非交互式 Shell 配置无效的问题，增强 Native Bridge 对非 UTF-8 字节的容错性。

3.  **[Open] feat(cli): add top-level /reload command**
    *   **链接**: [#24478](https://github.com/google-gemini/gemini-cli/pull/24478)
    *   **内容**: 新增 `/reload` 命令，允许用户一键重载 Skills、Agents、MCP Servers 和 Settings，提升开发调试效率。

4.  **[Open] fix(cli): add GATEWAY auth type to validateAuthMethod**
    *   **链接**: [#27553](https://github.com/google-gemini/gemini-cli/pull/27553)
    *   **内容**: 修复设置 `GOOGLE_GEMINI_BASE_URL` 时自定义网关认证失败的问题。

5.  **[Closed] fix(core): "gemini --resume crash" handle EBADF error**
    *   **链接**: [#27371](https://github.com/google-gemini/gemini-cli/pull/27371)
    *   **内容**: 修复恢复会话时因 PTY 文件描述符失效导致的崩溃问题。

6.  **[Closed] fix(core): prevent dropping valid model turns with empty text parts**
    *   **链接**: [#27170](https://github.com/google-gemini/gemini-cli/pull/27170)
    *   **内容**: 修复因过滤空文本导致模型有效的 Function Call 轮次被丢弃引发的 400 错误。

7.  **[Closed] fix(core): exclude .gemini/tmp/ from agent search tools**
    *   **链接**: [#27174](https://github.com/google-gemini/gemini-cli/pull/27174)
    *   **内容**: 防止 Agent 在搜索时递归扫描自身的会话日志文件，避免上下文污染。

8.  **[Open] Prevent extra spaces on width-0 CJK continuation cells**
    *   **链接**: [#27505](https://github.com/google-gemini/gemini-cli/pull/27505)
    *   **内容**: 修复中日韩（CJK）宽字符在终端渲染时的多余空格问题，优化国际化体验。

9.  **[Open] fix(policy): add EBUSY fallback and TOML parse recovery**
    *   **链接**: [#21541](https://github.com/google-gemini/gemini-cli/pull/21541)
    *   **内容**: 增强 Policy 文件读取的容错性，解决文件占用和解析错误导致的崩溃。

10. **[Open] Add a failing behavioral eval for parallel replace**
    *   **链接**: [#24429](https://github.com/google-gemini/gemini-cli/pull/24429)
    *   **内容**: 添加针对并行文件写入冲突的评估测试用例，为后续修复铺路。

## 5. 功能需求趋势

从近期 Issue 与 PR 活动来看，社区关注点呈现以下趋势：

*   **Agent 稳定性与可观测性**：用户对 Agent 挂起、状态误报（Success 实为 Failure）容忍度极低，要求更健壮的超时处理和状态恢复机制。
*   **代码理解深度**：对 AST 感知工具的需求强烈，社区希望 CLI 能像 IDE 一样理解代码结构，而非仅进行文本匹配，以减少 Token 浪费和误操作。
*   **安全性与隐私**：Auto Memory 功能引发了对敏感数据泄露的担忧，要求在本地端进行确定性清洗，防止数据上传至模型上下文。
*   **交互体验优化**：包括对 `/reload` 命令的需求、Shell 挂起修复以及 CJK 字符显示优化，显示出 CLI 作为一个终端工具，其基础体验正受到严格审视。

## 6. 开发者关注点

*   **工具链扩展瓶颈**：超过 128 个工具时报错的问题（#24246）表明当前架构在应对复杂项目（Monorepo 或多语言项目）时存在 API 限制，开发者希望看到更智能的工具筛选机制。
*   **Sub-agent 调度黑盒**：开发者反馈难以控制 Sub-agent 的行为（如不使用 Skills、挂起），迫切需要更透明的执行日志和干预手段。
*   **跨平台兼容性**：Wayland 下 Browser Agent 失败（#21983）等问题表明，Linux 桌面环境的多样性仍是兼容性痛点。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-06-01)

## 1. 今日速览
GitHub Copilot CLI 今日发布了 v1.0.57-4 和 v1.0.57-5 两个版本，重点优化了 diff mode 的交互体验并修复了 tmux 环境下的按键响应问题。社区方面，v1.0.56 版本引入的认证频繁掉线与剪贴板复制失效成为开发者反馈最集中的痛点，同时关于 Skills 文件夹管理与 AutoPilot 模式控制权的讨论热度较高。

## 2. 版本发布
### v1.0.57-4 & v1.0.57-5
- **Added**: 在 diff mode 下支持鼠标点击选择 diff 行。
- **Improved**: `preToolUse` hook 错误现在会直接拒绝工具调用，而非静默允许执行，提升了安全性。
- **Fixed**: 修复了在 tmux 环境下 Ctrl+C 等组合键失效的问题。
- **Fixed**: 修复了 @-mention 文件搜索时因大小写不一致导致匹配失败的问题。

## 3. 社区热点 Issues

1.  **[OPEN] 支持 Skills 子文件夹管理 (#1632)**
    - **链接**: [github/copilot-cli Issue #1632](https://github.com/github/copilot-cli/issues/1632)
    - **解读**: 随着 Skills 数量增加，用户对组织结构的需求日益强烈。作者希望将 skills 分类存放于子文件夹，但目前仅支持扁平结构。该 Issue 获得 14 个点赞，是今日最受关注的功能请求。

2.  **[OPEN] v1.0.56 升级后需频繁重新登录 (#3597)**
    - **链接**: [github/copilot-cli Issue #3597](https://github.com/github/copilot-cli/issues/3597)
    - **解读**: 这是一个严重的回归问题。用户报告升级后 24 小时内被要求重新登录超过 8 次，严重影响连续工作流。多名用户确认在多台机器上遇到此问题。

3.  **[OPEN] 无法从控制台复制内容 (v1.0.56 回归) (#3609)**
    - **链接**: [github/copilot-cli Issue #3609](https://github.com/github/copilot-cli/issues/3609)
    - **解读**: 另一个严重的回归 Bug。用户执行复制操作时显示 "copied to clipboard"，但实际剪贴板为空，严重阻碍了代码片段的提取。

4.  **[OPEN] AutoPilot 模式应在关键决策时暂停等待用户确认 (#3595)**
    - **链接**: [github/copilot-cli Issue #3595](https://github.com/github/copilot-cli/issues/3595)
    - **解读**: 涉及 AI Agent 自主性的核心讨论。用户希望在 AutoPilot 模式下，对于某些决策（如代码审查中的修复选择）能暂停并征求用户意见，而不是自动执行，反映了用户对自动化流程“掌控感”的需求。

5.  **[OPEN] 支持剪贴板粘贴图片 (#2675)**
    - **链接**: [github/copilot-cli Issue #2675](https://github.com/github/copilot-cli/issues/2675)
    - **解读**: 多模态交互需求。用户希望能在 CLI 对话中直接粘贴截图进行提问，目前该功能尚不支持，获得 5 个点赞。

6.  **[OPEN] Bash tool 丢弃非 ASCII 字符 (#3601)**
    - **链接**: [github/copilot-cli Issue #3601](https://github.com/github/copilot-cli/issues/3601)
    - **解读**: 国际化严重 Bug。由于环境变量设置问题，Bash tool 会静默剥离中文、日文等非 ASCII 字符，导致包含这些字符的文件路径无法解析。

7.  **[OPEN] [Critical] 孤立会话无法移除 (#3600)**
    - **链接**: [github/copilot-cli Issue #3600](https://github.com/github/copilot-cli/issues/3600)
    - **解读**: 用户报告存在运行了两个月的孤立会话无法清理，标记为 Critical Bug，涉及会话管理机制的健壮性。

8.  **[OPEN] 文件编码被强制改为 UTF-8 (#3604)**
    - **链接**: [github/copilot-cli Issue #3604](https://github.com/github/copilot-cli/issues/3604)
    - **解读**: Copilot 在编辑 Windows 1252 编码文件时会将其转换为 UTF-8，破坏了原有编码格式，这对维护旧项目造成了困扰。

9.  **[OPEN] 插件安装后 Skills 未即时生效 (#3606)**
    - **链接**: [github/copilot-cli Issue #3606](https://github.com/github/copilot-cli/issues/3606)
    - **解读**: 易用性问题。新安装插件的 skills 必须手动执行 `/skills reload` 才能使用，用户期望自动加载。

10. **[OPEN] Linux 下复制功能自 v1.0.49 起失效 (#3586)**
    - **链接**: [github/copilot-cli Issue #3586](https://github.com/github/copilot-cli/issues/3586)
    - **解读**: 特定平台的回归问题，影响 Linux 用户的基本操作。

## 4. 重要 PR 进展
过去 24 小时内无公开的 Pull Request 更新。

## 5. 功能需求趋势
- **Skills 组织与生态**: 社区对 Skills 的管理需求从“能用”转向“好用”，支持子文件夹分类 (#1632) 和安装后自动重载 (#3606) 是主要诉求。
- **Agent 控制权**: 随着 AutoPilot 功能的使用，用户开始寻求更细粒度的控制，希望在自动化执行与人工审核之间找到平衡点 (#3595)。
- **多模态交互**: 支持图片输入 (#2675) 依然是 CLI 向 IDE 功能对齐的重要方向。
- **多任务支持**: 开发者呼吁原生支持 Git Worktree (#2653)，以便在不干扰主仓库的情况下并行处理多个任务。

## 6. 开发者关注点
- **版本稳定性**: v1.0.56 版本引发了较多回归问题，尤其是**认证稳定性** (#3597, #3596) 和**剪贴板交互** (#3609, #3586)，建议开发团队优先修复此类阻断性问题。
- **非 ASCII 字符处理**: 国际化支持仍是弱项，Bash tool 对非英文路径的处理 (#3601) 需重点关注。
- **底层环境配置**: SDK 对 `process.env` 的静默修改 (#3602) 引起了高级开发者的警惕，这可能引发难以调试的副作用。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-06-01)

## 1. 今日速览
今日 Kimi Code CLI 社区活跃度较高，主要集中在 v1.46 版本升级后的稳定性修复与功能优化。社区对 **OpenAI 兼容 API** 的呼声持续高涨，希望借此接入 Cursor 等 IDE 工具。同时，开发者提交了关于网络超时配置和 JSON 解析的关键 PR，旨在解决大 Context 场景下的稳定性问题。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues (Top 10)

以下是社区最关注的 10 个 Issue，涵盖了关键 Bug 修复请求和重要功能增强：

1.  **[OPEN] [enhancement] Please make your kimi code api work as OpenAI-compatible API**
    *   **链接**: [MoonshotAI/kimi-cli Issue #2208](https://github.com/MoonshotAI/kimi-cli/issues/2208)
    *   **解读**: 社区强烈希望能将 Kimi K2.6 模型直接通过 OpenAI 兼容的 Base URL 集成到 Cursor 等 IDE 中。这是目前热度最高的功能请求，反映了用户对跨平台无缝集成的迫切需求。

2.  **[OPEN] [bug] Login to KimiCode getting error and unsuccesful after upgrade to 1.46**
    *   **链接**: [MoonshotAI/kimi-cli Issue #2403](https://github.com/MoonshotAI/kimi-cli/issues/2403)
    *   **解读**: 用户报告升级到 v1.46 后登录失败，这是一个阻塞性的关键 Bug，直接影响用户使用，需优先修复。

3.  **[OPEN] [bug] linux CLI输入异常**
    *   **链接**: [MoonshotAI/kimi-cli Issue #2410](https://github.com/MoonshotAI/kimi-cli/issues/2410)
    *   **解读**: Linux 环境下 CLI 输入出现异常，涉及特定命令的交互问题，影响了 Linux 用户的日常操作体验。

4.  **[OPEN] 大 context 请求频繁 ConnectTimeout**
    *   **链接**: [MoonshotAI/kimi-cli Issue #2384](https://github.com/MoonshotAI/kimi-cli/issues/2384)
    *   **解读**: 在 Context 超过 120k token 时频繁出现连接超时，且 `httpx` 的 `connect_timeout` 不可配置。这限制了长上下文场景的稳定性，是性能优化的关键点。

5.  **[OPEN] [bug] 重启kimi cli 会发送历史图片 污染会话**
    *   **链接**: [MoonshotAI/kimi-cli Issue #2413](https://github.com/MoonshotAI/kimi-cli/issues/2413)
    *   **解读**: 重启 CLI 后会自动重发历史图片，导致会话上下文被污染，影响多模态交互的准确性。

6.  **[OPEN] kimi acp 命令无响应**
    *   **链接**: [MoonshotAI/kimi-cli Issue #2412](https://github.com/MoonshotAI/kimi-cli/issues/2412)
    *   **解读**: `kimi acp` 命令执行后卡死无输出，严重影响 WSL2 环境下的使用体验。

7.  **[OPEN] [enhancement] increase the thinking lines window size**
    *   **链接**: [MoonshotAI/kimi-cli Issue #2411](https://github.com/MoonshotAI/kimi-cli/issues/2411)
    *   **解读**: 用户反馈当前的思考过程显示窗口仅 2 行，难以追踪 AI 的推理逻辑，建议增加行数或使其可配置。

8.  **[OPEN] [Bug Report]: Foreground subagent timeout defaults to 120s**
    *   **链接**: [MoonshotAI/kimi-cli Issue #2408](https://github.com/MoonshotAI/kimi-cli/issues/2408)
    *   **解读**: Schema 声明无默认超时，但实际代码默认 120s，导致文档与行为不一致，可能导致开发者误判任务执行时间。

9.  **[OPEN] bug: Tool call arguments double-encoding**
    *   **链接**: [MoonshotAI/kimi-cli Issue #2406](https://github.com/MoonshotAI/kimi-cli/issues/2406)
    *   **解读**: Moonshot API 在处理 Tool Call 参数时出现双重 JSON 编码问题，导致数组或字典参数验证失败，影响复杂工具调用。

10. **[OPEN] feat: /goal — autonomous mission completion**
    *   **链接**: [MoonshotAI/kimi-cli Issue #2404](https://github.com/MoonshotAI/kimi-cli/issues/2404)
    *   **解读**: 建议新增 `/goal` 命令，实现自主任务完成，减少用户频繁确认的操作，提升自动化工作流效率。

## 4. 重要 PR 进展

过去 24 小时内共有 2 个活跃 PR，均针对关键底层问题进行了修复：

1.  **fix: handle double-encoded JSON in tool call arguments (Moonshot API)**
    *   **链接**: [MoonshotAI/kimi-cli PR #2407](https://github.com/MoonshotAI/kimi-cli/pull/2407)
    *   **内容**: 修复 Moonshot API 返回 `function.arguments` 时 JSON 双重编码的问题。该 PR 解决了 Issue #2406 中提到的参数解析失败问题，确保嵌套对象能正确通过 Pydantic 验证。

2.  **fix(kosong): add default 120s timeout to create_openai_client**
    *   **链接**: [MoonshotAI/kimi-cli PR #2409](https://github.com/MoonshotAI/kimi-cli/pull/2409)
    *   **内容**: 修复 `create_openai_client()` 未传递 timeout 参数的问题。虽然 SDK 默认 600s，但在代理层可能提前超时，该 PR 显式设置了默认值，配合解决 Issue #2408 和 #2384 中的超时配置问题。

## 5. 功能需求趋势

*   **IDE 深度集成**: 用户不再满足于 CLI 交互，渴望通过标准化的 OpenAI API 协议将 Kimi 接入 Cursor 等主流 IDE，这是最核心的功能诉求。
*   **自动化与自主性**: 社区开始探索更高阶的自动化功能（如 `/goal` 指令），希望 AI 能在减少人工干预的情况下完成复杂任务链。
*   **配置灵活化**: 开发者要求对网络超时、UI 显示（Thinking Lines）等参数拥有更多的控制权，以适应不同的开发环境。

## 6. 开发者关注点

*   **版本升级稳定性**: v1.46 版本引入的登录失败和输入异常问题引发关注，开发者对新版本的稳定性存有顾虑。
*   **大 Context 性能瓶颈**: 在处理超长上下文（>120k tokens）时，网络超时成为主要瓶颈，开发者呼吁官方优化底层 HTTP 客户端的超时重试机制。
*   **协议兼容性细节**: API 返回数据的格式细节（如 JSON 编码）对 Tool Call 的影响较大，开发者希望官方能提供更稳健的解析层，屏蔽底层 API 差异。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-06-01)

## 1. 今日速览
过去 24 小时内 OpenCode 无新版本发布，社区讨论重心集中在**模型性能稳定性**与**本地模型兼容性**上。GPT 模型响应延迟问题引发热议，同时 Gemma 4 等本地模型在 Ollama 环境下的工具调用失效问题持续受到关注。开发层面，多名贡献者提交了针对 MiniMax M3、DeepSeek V4 等新模型的适配 PR，并优化了 TUI 界面的实时反馈体验。

## 2. 版本发布
过去 24 小时内无最新 Release 发布。

## 3. 社区热点 Issues (Top 10)

1.  **[性能瓶颈] GPT 模型响应延迟严重**
    Issue #29079 引起广泛共鸣（115 条评论），用户反馈 GPT 5.4 等模型在执行简单指令时响应时间从数秒波动至数分钟，严重影响开发效率。
    链接: [anomalyco/opencode Issue #29079](https://github.com/anomalyco/opencode/issues/29079)

2.  **[核心问题] 内存泄漏汇总帖**
    Issue #20695 为官方设立的内存问题集中讨论帖（83 条评论），开发者正收集堆快照以系统性解决 Effect.js 架构下的内存溢出问题。
    链接: [anomalyco/opencode Issue #20695](https://github.com/anomalyco/opencode/issues/20695)

3.  **[本地模型] Gemma 4 (Ollama) 工具调用失败**
    Issue #20995 指出 Gemma 4 通过 Ollama OpenAI 兼容 API 调用时，流式工具调用无法被 OpenCode 识别，导致本地模型可用性受损。
    链接: [anomalyco/opencode Issue #20995](https://github.com/anomalyco/opencode/issues/20995)

4.  **[本地模型] Gemma 4 陷入工具循环**
    Issue #21034 报告 Gemma-4-26b/31b 即使配合最新的 tokenizer 补丁，在 OpenCode 中仍频繁出现工具调用死循环或执行失败。
    链接: [anomalyco/opencode Issue #21034](https://github.com/anomalyco/opencode/issues/21034)

5.  **[新模型] Opus 4.8 开发分支存在 Bug**
    Issue #29786 报告在 dev 分支测试 Opus 4.8 模型时出现子代理错误，需关注官方修复进度。
    链接: [anomalyco/opencode Issue #29786](https://github.com/anomalyco/opencode/issues/29786)

6.  **[用户体验] 权限弹窗卡死无法交互**
    Issue #27436 反馈 TUI 界面中的权限请求弹窗（Allow/Reject）出现交互卡死，导致会话被迫中断，属于影响工作的阻断性 Bug。
    链接: [anomalyco/opencode Issue #27436](https://github.com/anomalyco/opencode/issues/27436)

7.  **[功能需求] 呼吁 "YOLO Mode" 跳过权限确认**
    Issue #9070 建议增加类似 Claude Code 的 `--dangerously-skip-permissions` 模式，方便高级用户在可信环境中流畅操作，减少频繁确认。
    链接: [anomalyco/opencode Issue #9070](https://github.com/anomalyco/opencode/issues/9070)

8.  **[严重故障] 启动时 SQLITE_CORRUPT 崩溃**
    Issue #30157 报告应用启动时因数据库损坏直接崩溃，用户无法恢复工作环境，属于严重稳定性问题。
    链接: [anomalyco/opencode Issue #30157](https://github.com/anomalyco/opencode/issues/30157)

9.  **[桌面端] MCP 面板显示异常**
    Issue #30070 指出 Desktop 端 MCP 面板显示 `0/0`，虽然 CLI 连接正常，但桌面端同步状态失效。
    链接: [anomalyco/opencode Issue #30070](https://github.com/anomalyco/opencode/issues/30070)

10. **[配置增强] 请求 Glob 规则配置**
    Issue #4716 建议支持基于 Glob 模式的规则设置，以便更灵活地管理不同文件类型的处理策略。
    链接: [anomalyco/opencode Issue #4716](https://github.com/anomalyco/opencode/issues/4716)

## 4. 重要 PR 进展 (Top 10)

1.  **[模型支持] 新增 MiniMax M3 模型**
    PR #30162 为 MiniMax 提供商目录添加了 MiniMax-M3 模型支持，扩展了模型生态。
    链接: [anomalyco/opencode PR #30162](https://github.com/anomalyco/opencode/pull/30162)

2.  **[模型支持] DeepSeek V4 新增 'none' 思考模式变体**
    PR #26653 为 DeepSeek V4 添加了非思考模式变体，解决了模型过度思考的问题，降低了推理成本。
    链接: [anomalyco/opencode PR #26653](https://github.com/anomalyco/opencode/pull/26653)

3.  **[功能增强] 支持 Kimi K2.6 和 Qwen 3.6 推理强度变体**
    PR #28943 修复了部分模型被误过滤的问题，正确暴露了 Kimi 和 Qwen 新版本的推理强度设置。
    链接: [anomalyco/opencode PR #28943](https://github.com/anomalyco/opencode/pull/28943)

4.  **[用户体验] TUI 底部显示实时 Token 吞吐量**
    PR #30164 增加了在 TUI 界面底部实时显示 Token 生成速率的功能，方便开发者监控模型性能。
    链接: [anomalyco/opencode PR #30164](https://github.com/anomalyco/opencode/pull/30164)

5.  **[系统支持] 新增 Fish 和 ZSH Shell 自动补全**
    PR #30168 扩展了 Shell 集成，现支持 Fish 和 ZSH 的命令自动补全。
    链接: [anomalyco/opencode PR #30168](https://github.com/anomalyco/opencode/pull/30168)

6.  **[跨平台] 修复 Windows 存储路径问题**
    PR #29666 统一了路径存储格式（强制使用正斜杠），解决了 Windows 环境下会话列表加载失败的兼容性问题。
    链接: [anomalyco/opencode PR #29666](https://github.com/anomalyco/opencode/pull/29666)

7.  **[功能增强] 保存文件附件到磁盘**
    PR #30153 实现了在处理前将上传的图片/PDF 保存到磁盘，解决了纯文本模型无法处理附件的问题。
    链接: [anomalyco/opencode PR #30153](https://github.com/anomalyco/opencode/pull/30153)

8.  **[UI 优化] 优化内联子代理显示**
    PR #30051 改进了 TUI 中子代理任务的状态显示，增加了完成状态标记和空白行分隔，提升了可读性。
    链接: [anomalyco/opencode PR #30051](https://github.com/anomalyco/opencode/pull/30051)

9.  **[Bug 修复] MCP 状态弹窗修复**
    PR #30170 修复了 Desktop 应用目录弹窗中 MCP 状态丢失的问题。
    链接: [anomalyco/opencode PR #30170](https://github.com/anomalyco/opencode/pull/30170)

10. **[核心架构] 项目路径与复制系统重构**
    PR #30139 引入了项目路径解析和复制的核心系统重构，旨在解决工作目录更新（如移动项目）后的路径引用问题。
    链接: [anomalyco/opencode PR #30139](https://github.com/anomalyco/opencode/pull/30139)

## 5. 功能需求趋势

*   **本地模型深度适配**：社区对 Gemma 4、DeepSeek V4 等开源/本地模型的关注度持续攀升，需求从单纯的“能用”转向“工具调用可靠”和“思考模式可控”。
*   **高效率工作流**：用户渴望更流畅的操作体验，如“YOLO Mode”（跳过权限检查）和更智能的权限管理，反映出 AI 辅助编程工具已深入核心开发流程。
*   **多模态与上下文管理**：关于文件附件处理、长会话内存压缩以及 AGENTS.md 自动加载的需求表明，用户对复杂项目上下文的管理能力提出了更高要求。

## 6. 开发者关注点

*   **响应速度不稳定性**：云端模型（特别是 GPT 系列）的高延迟波动是当前最大的痛点，开发者迫切需要稳定的推理速度以保证编码心流。
*   **本地 LLM 工具调用兼容性**：Ollama 等中间层与 OpenCode 的工具调用协议存在兼容性断层，导致本地模型常出现“能对话但不能干活”的尴尬局面。
*   **数据安全与稳定性**：SQLITE 数据库损坏和会话丢失等严重 Bug 虽然频率不高，但对用户信任度打击巨大，是开发者反馈中的红线问题。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-06-01)

## 1. 今日速览
今日 Qwen Code 发布了 v0.17.0-nightly 版本，重点修复了 Rewind 功能中的错误提示问题。社区关注点集中在 IDE 集成（特别是 JetBrains 登录故障）和本地模型（Ollama）的兼容性稳定性上。开发团队在底层架构重构和可观测性建设方面投入了大量精力，显著提升了 Daemon 模式的健壮性。

## 2. 版本发布
- **[v0.17.0-nightly.20260601.1c48e4121](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.0-nightly.20260601.1c48e4121)**
  - **修复**: 修复了在对话中断时出现错误的 "compressed turn" 提示问题 (`fix(rewind)`).
  - **变更**: 发布了 nightly 版本，包含最新的代码提交。

## 3. 社区热点 Issues (Top 10)

1.  **[Rider/JetBrains 登录死循环](https://github.com/QwenLM/qwen-code/issues/4493)** (Issue #4493)
    - **关键点**: 用户在使用 Rider 等 JetBrains IDE 时，OAuth 登录跳转后出现无限重定向，无法调用阿里云 Token Plan。
    - **现状**: [OPEN] 社区反馈活跃（9条评论），严重影响 IDE 用户体验，属于 P1 级别阻塞问题。

2.  **[本地模型 Qwen 3.6 无法完成任务](https://github.com/QwenLM/qwen-code/issues/4657)** (Issue #4657)
    - **关键点**: 结合 Ollama 使用 Qwen 3.6 模型时，任务创建等功能频繁失败，疑似与之前的超时 Bug 相关。
    - **现状**: [OPEN] 本地模型兼容性是社区高频痛点。

3.  **[v0.17.0 Daemon HTTP/SSE 能力缺口追踪](https://github.com/QwenLM/qwen-code/issues/4514)** (Issue #4514)
    - **关键点**: 追踪 `qwen serve` 在 HTTP/SSE 接口层面与 ACP 标准的差异，涉及远程客户端调用 Slash Command 的支持。
    - **现状**: [OPEN] 属于核心架构 Roadmap，标记为 `category/core`。

4.  **[MiniMax-M3 模型支持与 UI 优化](https://github.com/QwenLM/qwen-code/issues/4663)** (Issue #4663)
    - **关键点**: 用户请求增加 MiniMax-M3 模型的官方支持，并建议改进 API Key 配置界面的交互方式（多选框替代文本输入）。
    - **现状**: [OPEN] 反映了社区对第三方模型集成的强烈需求。

5.  **[Windows 平台 MCP 稳定性问题](https://github.com/QwenLM/qwen-code/issues/4641)** (Issue #4641)
    - **关键点**: Windows 10 环境下，配置的 8 个 MCP Server 启动后仅 3~5 个可用，连接状态极不稳定。
    - **现状**: [OPEN] 影响多工具协同工作的用户体验。

6.  **[项目级 .mcp.json 支持与安全审批](https://github.com/QwenLM/qwen-code/issues/4615)** (Issue #4615)
    - **关键点**: 建议支持项目级 `.mcp.json` 配置，并引入“待审批”状态，防止恶意 MCP 自动启动。
    - **现状**: [OPEN] 涉及安全性与多项目配置管理，具有较高的设计价值。

7.  **[OOM 崩溃时的自动内存诊断](https://github.com/QwenLM/qwen-code/issues/4651)** (Issue #4651)
    - **关键点**: 提议在检测到内存压力时自动 Dump 诊断信息到磁盘，解决崩溃后无日志可查的困境。
    - **现状**: [OPEN] 已标记为 `status/ready-for-agent`，是提升稳定性的重要改进。

8.  **[JetBrains OAuth 认证修复](https://github.com/QwenLM/qwen-code/issues/4637)** (Issue #4637)
    - **关键点**: 修复了旧配置中 `qwen-oauth` 导致用户在 JetBrains IDE 中陷入死胡同的问题。
    - **现状**: [CLOSED] 该问题已被修复，关联 PR 已合并，这对受影响的 IDE 用户是重大利好。

9.  **[Daemon OpenTelemetry 覆盖增强](https://github.com/QwenLM/qwen-code/issues/4554)** (Issue #4554)
    - **关键点**: 提议完善 `qwen serve` Daemon 进程的 OpenTelemetry 追踪，覆盖 HTTP 路由、Session 生命周期等盲区。
    - **现状**: [OPEN] 属于可观测性基础设施的重要一环。

10. **[Anthropic API 兼容性错误](https://github.com/QwenLM/qwen-code/issues/4619)** (Issue #4619)
    - **关键点**: 修复了转发消息给 Anthropic 兼容提供商时的 `tool_result` 结构错误。
    - **现状**: [CLOSED] 修复了 API 调用的关键 Bug。

## 4. 重要 PR 进展 (Top 10)

1.  **[加固 Auto Mode 自修改检查](https://github.com/QwenLM/qwen-code/pull/4572)** (PR #4572)
    - **内容**: 增强 Auto Mode 的安全性，防止 Agent 绕过分类器修改 Qwen Code 自身的配置文件或持久化数据。
    - **意义**: 防止模型“越狱”修改核心设置，提升工具安全性。

2.  **[修复本地模型流式传输超时](https://github.com/QwenLM/qwen-code/pull/4667)** (PR #4667)
    - **内容**: 引入可配置的 `bodyTimeout`，解决本地模型（如 Ollama）生成速度慢导致的 SSE 流超时问题。
    - **意义**: 直接响应 Issue #4657，改善本地大模型使用体验。

3.  **[架构重构: 抽取 DaemonWorkspaceService](https://github.com/QwenLM/qwen-code/pull/4563)** (PR #4563)
    - **内容**: 将工作区级别的状态、初始化、工具切换等逻辑从 `AcpSessionBridge` 中剥离，独立为 `DaemonWorkspaceService`。
    - **意义**: 优化 Daemon 模式架构，解耦 Session 与 Workspace 逻辑，利于后续维护。

4.  **[新增 InstructionsLoaded Hook](https://github.com/QwenLM/qwen-code/pull/4665)** (PR #4665)
    - **内容**: 添加指令文件加载时的 Hook 事件，允许插件感知上下文加载过程。
    - **意义**: 增强扩展能力，对应 Issue #4664。

5.  **[移除主动 Subagent 注入](https://github.com/QwenLM/qwen-code/pull/4587)** (PR #4587)
    - **内容**: 移除了强制模型“主动使用 Agent 工具”的系统提示词注入，减少过度代理行为。
    - **意义**: 优化 Agent 行为逻辑，减少不必要的子代理调用。

6.  **[交互级 TraceID 追踪](https://github.com/QwenLM/qwen-code/pull/4661)** (PR #4661)
    - **内容**: 为每次 Prompt 交互生成独立的 TraceID，而非共享 Session ID，并在所有 Span 中标记 `session.id`。
    - **意义**: 极大提升了问题排查和链路追踪的精确度。

7.  **[Daemon 跨会话泄漏与超时修复](https://github.com/QwenLM/qwen-code/pull/4666)** (PR #4666)
    - **内容**: 修复了历史记录跨会话“串号”泄漏、超时逻辑分支不可达等问题。
    - **意义**: 修复严重的数据隔离 Bug，提升多会话稳定性。

8.  **[支持 Shift+Enter 换行](https://github.com/QwenLM/qwen-code/pull/3103)** (PR #3103)
    - **内容**: 终端环境下支持 Shift+Enter 插入换行符而非直接发送消息。
    - **意义**: 解决长期以来的交互痛点，提升多行输入体验。

9.  **[Desktop App 包开发](https://github.com/QwenLM/qwen-code/pull/3778)** (PR #3778)
    - **内容**: 新增 `packages/desktop/` 包，集成 Qwen ACP SDK。
    - **意义**: 标志着官方桌面端应用开发正式提上日程。

10. **[持久化 /memory 开关状态](https://github.com/QwenLM/qwen-code/pull/4650)** (PR #4650)
    - **内容**: 修复 `/memory` 对话框关闭后开关状态重置的问题。
    - **意义**: 修复 UI 状态持久化 Bug，提升用户体验。

## 5. 功能需求趋势

- **IDE 集成体验优化**：JetBrains 系列 IDE 的 OAuth 认证和 Token 调用问题是当前最紧迫的需求。
- **本地模型兼容性**：针对 Ollama 等本地部署场景的超时、生成中断问题，社区期待更鲁棒的流式传输处理。
- **MCP 生态增强**：包括对 Windows 平台稳定性的要求，以及更精细的项目级 `.mcp.json` 安全管理机制。
- **可观测性与诊断**：用户和开发者对 OpenTelemetry 追踪、OOM 时的自动诊断信息保存需求日益增强。

## 6. 开发者关注点

- **认证流程阻塞**：多名开发者反馈在 JetBrains IDE 中无法正常登录，尤其是使用阿里云 Token Plan 的用户。
- **本地/第三方模型接入**：除了官方模型外，MiniMax、Ollama 等第三方或本地模型的接入配置仍显繁琐，且稳定性不足。
- **定价与成本反馈**：有用户反馈 `qwen3.7-max` 等套餐消耗过快，希望能有类似竞品的“重置用量套餐”或更具性价比的方案。
- **调试信息缺失**：进程崩溃（OOM）后缺乏现场证据，开发者难以复现和定位问题，期待自动 Dump 机制尽快落地。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 (2026-06-01)

## 1. 今日速览
DeepSeek TUI 今日发布 **v0.8.48 版本**，正式宣布项目更名为 **CodeWhale**，原有二进制文件作为过渡方案保留。社区关注焦点集中在更名后的数据迁移路径、缓存命中率的稳定性优化，以及 Windows 平台的输入法与终端兼容性问题上。

## 2. 版本发布
- **v0.8.48**: 项目更名为 **CodeWhale**。
  - 引入 `codewhale` 和 `codewhale-tui` 新二进制文件。
  - 旧版 `deepseek` 和 `deepseek-tui` 作为废弃垫片发布，打印警告并转发至新命令，将在 v0.9.0 移除。
  - 详情参见 `docs/REBRAND.md`。
  - 链接: [Release v0.8.48](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.48)

## 3. 社区热点 Issues
1.  **[OPEN] 缓存命中率问题持续排查 (#1120)**
    - 作者 @pmsleepcheck 指出相同项目的缓存命中率仍然存在异常。社区正在讨论是否为误报，以及除已知 bug 外的其他潜在原因。
    - 链接: [Issue #1120](https://github.com/Hmbown/CodeWhale/issues/1120)

2.  **[OPEN] 项目更名后的数据迁移疑问 (#1969)**
    - 作者 @AiurArtanis 询问更名后原会话和技能是否保留。由于文档未明确说明手动指定工作目录的迁移方式，引发用户对数据丢失的担忧。
    - 链接: [Issue #1969](https://github.com/Hmbown/CodeWhale/issues/1969)

3.  **[OPEN] Windows 终端崩溃导致输入泄漏 (#2261)**
    - 作者 @xiaowuguiya888 反馈在 Windows Terminal 中，TUI 进程崩溃后焦点丢失，导致后续输入直接被 PowerShell 当作命令执行，存在安全隐患。
    - 链接: [Issue #2261](https://github.com/Hmbown/CodeWhale/issues/2261)

4.  **[OPEN] Windows IME 输入死锁 (#1835)**
    - 作者 @TravisWangchn 报告在 Windows 上使用搜狗输入法时，TUI 输入框对按键无响应，疑似 IME 组合事件死锁。
    - 链接: [Issue #1835](https://github.com/Hmbown/CodeWhale/issues/1835)

5.  **[OPEN] 子代理无法访问 MCP 工具 (#2362)**
    - 作者 @buko 指出通过 `agent_open` 打开的子代理无法继承父会话配置的 MCP 工具，限制了多代理协作能力。
    - 链接: [Issue #2362](https://github.com/Hmbown/CodeWhale/issues/2362)

6.  **[OPEN] 国内网络搜索可用性问题 (#1681)**
    - 作者 @PsChina 提出国内用户无法使用默认搜索提供商，建议支持区域感知或自定义搜索源。
    - 链接: [Issue #1681](https://github.com/Hmbown/CodeWhale/issues/1681)

7.  **[OPEN] 类型化持久化权限规则需求 (#1186)**
    - 作者 @greyfreedom 提议增强执行策略，支持基于工具名、命令前缀和路径模式的持久化权限规则，以提升安全性。
    - 链接: [Issue #1186](https://github.com/Hmbown/CodeWhale/issues/1186)

8.  **[OPEN] 自定义搜索提供商支持 (#2436)**
    - 作者 @Artenx 请求支持自定义私有搜索 API，当前预定义提供商无法满足特定场景需求。
    - 链接: [Issue #2436](https://github.com/Hmbown/CodeWhale/issues/2436)

9.  **[OPEN] 启动更新检查配置化需求 (#2469)**
    - 作者 @buko 指出当前 TUI 启动时强制检查 GitHub API 更新，在企业内网或隔离环境会导致启动卡顿，建议支持配置化关闭。
    - 链接: [Issue #2469](https://github.com/Hmbown/CodeWhale/issues/2469)

10. **[OPEN] Config 配置文件路径碎片化问题 (#2369)**
    - 作者 @buko 反馈配置文件在不同 OS 和 Cygwin 环境下解析路径不一致，导致迁移时出现静默 Bug。
    - 链接: [Issue #2369](https://github.com/Hmbown/CodeWhale/issues/2369)

## 4. 重要 PR 进展
1.  **[OPEN] 准备 v0.8.48 发布分支 (#2382)**
    - 整合了 v0.8.48 的运行时与文档更新，包含子代理存活修复、Prompt 缓存稳定性及配置路径对齐。
    - 链接: [PR #2382](https://github.com/Hmbown/CodeWhale/pull/2382)

2.  **[OPEN] 重构：Workspace crates 整合 (14→11) (#2256)**
    - 作者 @Hmbown 删除了无依赖的 `tui-core` 并合并了 `hooks` 和 `agent` 层，优化代码结构，零行为变更。
    - 链接: [PR #2256](https://github.com/Hmbown/CodeWhale/pull/2256)

3.  **[OPEN] 前缀缓存稳定性强化 (#2477)**
    - 升级 `PrefixFingerprint`，使用完整的工具 JSON 哈希替代仅工具名，旨在提升缓存命中率（关联 Issue #2264）。
    - 链接: [PR #2477](https://github.com/Hmbown/CodeWhale/pull/2477)

4.  **[OPEN] 新增 Pro Plan 模式 (#1865)**
    - 引入 Pro Plan 模式，使用 Pro 模型进行规划与审查，使用 Flash 模型执行，以平衡成本与性能。
    - 链接: [PR #1865](https://github.com/Hmbown/CodeWhale/pull/1865)

5.  **[OPEN] Hooks 支持提交文本变换 (#2318)**
    - 实现 `message_submit` 钩子的可变性，允许通过 stdin/stdout 修改或拦截用户提交的文本。
    - 链接: [PR #2318](https://github.com/Hmbown/CodeWhale/pull/2318)

6.  **[OPEN] 独立滚动区域功能 (#2113)**
    - 将聊天区域拆分为“对话区”和“工具输出区”，支持独立滚动，优化多任务时的阅读体验。
    - 链接: [PR #2113](https://github.com/Hmbown/CodeWhale/pull/2113)

7.  **[OPEN] 实时 Shell 输出显示 (#2048)**
    - 支持在命令执行过程中实时显示 Shell 输出，而非等待命令结束。
    - 链接: [PR #2048](https://github.com/Hmbown/CodeWhale/pull/2048)

8.  **[OPEN] 端到端类型化权限系统 (#2242)**
    - 实现了完整的类型化工具权限规则系统，包含执行策略、审批流集成及 TUI 持久化 UI。
    - 链接: [PR #2242](https://github.com/Hmbown/CodeWhale/pull/2242)

9.  **[MERGED] 启动更新检查配置化 (#2472)**
    - 新增 `[update]` 配置表，允许用户禁用启动更新检查或配置镜像源，解决内网环境问题。
    - 链接: [PR #2472](https://github.com/Hmbown/CodeWhale/pull/2472)

10. **[OPEN] TLS 证书验证配置化 (#1893)**
    - 增加 `insecure_skip_tls_verify` 配置项，支持在特定环境下跳过 TLS 验证。
    - 链接: [PR #1893](https://github.com/Hmbown/CodeWhale/pull/1893)

## 5. 功能需求趋势
- **品牌迁移与兼容性**：随着更名至 CodeWhale，社区迫切需求明确的迁移指南，确保旧数据无缝兼容。
- **缓存机制优化**：前缀缓存和缓存命中率是当前优化的核心方向，旨在降低成本和延迟。
- **企业级控制与安全**：对权限管理、TLS 配置、内网更新检查的需求增加，显示产品正被纳入更严格的企业开发环境。
- **跨平台体验一致性**：Windows 平台的 IME 支持、Shell 兼容性及终端渲染稳定性成为高频痛点。

## 6. 开发者关注点
- **Windows 平台稳定性**：输入法死锁、焦点丢失导致的命令注入风险是目前开发者反馈最集中的阻断性问题。
- **数据迁移路径**：开发者对更名后的 `~/.deepseek` 到 `~/.codewhale` 的数据迁移存在疑虑，担心会话历史和技能配置丢失。
- **Agent 架构限制**：子代理无法继承 MCP 工具，限制了复杂工作流的自动化能力，是进阶用户的主要关注点。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*