# AI CLI 工具社区动态日报 2026-06-27

> 生成时间: 2026-06-27 03:40 UTC | 覆盖工具: 8 个

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

# AI CLI 工具生态横向对比分析报告 (2026-06-27)

## 1. 生态全景
当前 AI CLI 工具生态正处于从"可用性完善"向"可靠性攻坚"的关键转型期。**Agent 编排的稳定性**（如死循环、假死、状态错乱）已取代基础功能缺失，成为各社区最核心的痛点。同时，随着模型能力的增强，**成本控制的不可预测性**（Token 消耗激增、计费异常）引发了开发者的信任危机。此外，**长期记忆与上下文隔离**技术的架构升级，标志着工具正从"对话助手"向"自主智能体"演进。

## 2. 各工具活跃度对比

| 工具名称 | Issues 热度 (Top话题) | PR 活跃度 | 版本动态 | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 高 (封号事故、IDE集成) | 低 (2 PRs) | v2.1.195 | 账户信任危机、VS Code 体验、Opus 稳定性 |
| **OpenAI Codex** | 极高 (Token激增、LSP需求) | 高 (10 PRs) | v0.142.3 | 成本激增、架构重构、资源泄漏 |
| **Gemini CLI** | 中 (Agent挂起、状态误报) | 极高 (10 PRs) | Nightly 失败 | Agent 编排、AST 感知、会话持久化 |
| **GitHub Copilot CLI** | 中 (剪贴板失效、上下文泄露) | 低 (1 PR) | v1.0.66-1 | 跨平台兼容、企业管控、记忆隔离 |
| **Kimi Code CLI** | 低 (状态机Bug、API鉴权) | 低 (2 PRs) | 无 | 状态管理、API 兼容性 |
| **OpenCode** | 高 (订阅定价、UI遮挡) | 高 (9 PRs) | 无 | 性价比、UI 交互阻断、子代理管理 |
| **Qwen Code** | 高 (进程泄漏、OOM) | 高 (10 PRs) | v0.19.2-nightly | Windows 稳定性、后台任务管控、安全漏洞 |
| **DeepSeek TUI** | 中 (架构升级、记忆后端) | 高 (10 PRs) | 无 | 记忆架构、模型生态、安装体验 |

> **注**：PR 活跃度反映了工程迭代速度，Gemini CLI、OpenAI Codex 和 Qwen Code 在架构重构与功能迭代上投入巨大。

## 3. 共同关注的功能方向

### 3.1 Agent 稳定性与状态管理
几乎所有工具都在对抗 Agent 的"不可控"问题。
*   **Gemini CLI** 与 **Qwen Code** 均报告了严重的进程/会话死锁问题，如子代理误报成功、僵尸进程导致 OOM。
*   **Claude Code** 的 Opus 4.8 模型工具调用格式错误，**Kimi Code** 的 Plan Mode 状态机死锁，反映出模型与工具链交互逻辑的脆弱性。

### 3.2 成本透明度与计费公平性
*   **OpenAI Codex** 社区爆发了对 GPT-5.5 Token 消耗激增 10-20 倍的质疑。
*   **Claude Code** 出现严重的付费即封号事故。
*   **OpenCode** 用户呼吁根据模型降价调整订阅额度。
开发者对"预算不可控"表现出极低的容忍度，要求透明的用量仪表盘。

### 3.3 记忆、上下文隔离与安全
*   **GitHub Copilot CLI** 报告了跨仓库记忆泄露问题。
*   **DeepSeek TUI** 正在集成 Moraine 记忆后端。
*   **Qwen Code** 修复了路径遍历漏洞。
这表明"记忆"不仅是功能，更是安全隐患的高发区，数据隔离成为刚需。

## 4. 差异化定位分析

*   **Claude Code & OpenAI Codex (领跑者的困境)**：作为第一梯队，两者都面临"信任危机"（封号、计费异常）。Claude Code 更侧重于 IDE 深度集成体验（Diff 视图），而 OpenAI Codex 正在推进**远程插件架构**，试图建立更安全的平台化标准。
*   **Gemini CLI (架构探索者)**：专注于底层代码理解能力的提升，如 AST 感知工具，试图解决 Agent "知其然不知其所以然"的问题，定位偏向技术极客与底层架构优化。
*   **GitHub Copilot CLI (企业级管控)**：重点发力企业级功能（子智能体管控、技能审查），强调与企业现有工作流的合规性整合，而非单纯的模型能力竞赛。
*   **OpenCode & Qwen Code & DeepSeek TUI (性价比与开放生态)**：
    *   **OpenCode** 敏锐响应市场价格战，主打性价比与 UI 交互优化。
    *   **Qwen Code** 在多端协作（钉钉/飞书桥接）和自动化上发力明显。
    *   **DeepSeek TUI** 极力扩展模型生态，支持多种后端，并在记忆架构上进行深度创新。

## 5. 社区热度与成熟度

*   **最活跃/焦虑的社区**：**Claude Code** 与 **OpenAI Codex**。因涉及资金与封号问题，社区情绪波动最大，但功能迭代速度依然领先。
*   **工程迭代最快**：**Gemini CLI**、**Qwen Code**、**DeepSeek TUI**。PR 数量多且质量高，专注于修复底层 Bug 和架构重构，处于快速迭代期。
*   **相对平稳**：**GitHub Copilot CLI**。老牌工具，遗留问题（如剪贴板、PowerShell 兼容）长期存在，企业级功能稳步推进，社区热度中等。

## 6. 值得关注的趋势信号

1.  **"静默" Agent 的崛起**：从 Qwen Code 的 `/loop` 后台任务、Gemini CLI 的后台唤醒，到 Copilot 的子智能体管控，行业正在从"对话式 Chat"转向"后台 Autonomous"，**可观测性与管控权**（暂停/注入/日志）将成为下一阶段的核心竞争力。
2.  **模型能力的边界摩擦**：Claude Code (Opus 4.8) 和 OpenAI Codex (GPT-5.5) 的接连翻车表明，**新模型与旧工具链的适配**存在严重滞后。模型厂商升级模型逻辑（如推理深度、Token 计算）往往会导致现有 CLI 工具出现灾难性 Bug，开发者需警惕"模型升级即系统崩溃"的风险。
3.  **Windows 平台的"二等公民"待遇**：从 Qwen Code 的 Powershell 进程泄漏、Gemini 的 Wayland 问题，到 Copilot 的剪贴板失效，**Windows 生态的兼容性**依然是 CLI 工具的阿喀琉斯之踵，针对 Windows 的专项优化蕴含着获客机会。
4.  **UX 的非阻断化设计**：OpenCode 和 Claude Code 社区均对"全屏遮挡"、"抢占焦点"表达了强烈反感。未来的趋势是 **Heads-up Display (HUD)** 式交互——信息透明叠加，而非模态对话框阻断工作流。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告 (2026-06-27)

基于 `anthropics/skills` 官方仓库的最新数据，以下是社区动态分析：

## 1. 热门 Skills 排行 (PR)

尽管部分 PR 评论数据显示为空，但结合关联 Issues 讨论热度与功能重要性，以下是目前最受关注的 Skills 动态：

1.  **[OPEN] `skill-creator` 核心修复：评估脚本召回率归零问题**
    *   **链接**: [PR #1298](https://github.com/anthropics/skills/pull/1298)
    *   **功能**: 修复 `run_eval.py` 在所有评估中均报告 `recall=0%` 的严重 Bug，该问题导致 Skill 描述优化循环失效。同时修复了 Windows 环境下的流读取和并行工作问题。
    *   **状态**: OPEN
    *   **热点**: 该 PR 直接回应了 Issue #556 中的关键问题，涉及 Skill 开发工具链的核心可用性，是当前开发者最关注的修复之一。

2.  **[OPEN] `skill-creator` 触发检测修复**
    *   **链接**: [PR #1323](https://github.com/anthropics/skills/pull/1323)
    *   **功能**: 修复 `run_eval.py` 无法正确检测 Skill 名称且在遇到非 Skill 工具时过早退出的 Bug。
    *   **状态**: OPEN
    *   **热点**: 与 #1298 类似，针对 Skill 自动化测试流程的准确性进行修复，对 Skill 质量控制至关重要。

3.  **[OPEN] 新增 `appdeploy` Skill：全栈应用部署**
    *   **链接**: [PR #360](https://github.com/anthropics/skills/pull/360)
    *   **功能**: 允许 Claude 直接从对话中部署全栈 Web 应用到公网 URL，支持生命周期管理。
    *   **状态**: OPEN
    *   **热点**: 极大地扩展了 Claude Code 的落地能力，将 AI 辅助编程延伸至 DevOps 领域，具有极高的实用价值。

4.  **[OPEN] `document-typography` Skill：文档排版质量控制**
    *   **链接**: [PR #514](https://github.com/anthropics/skills/pull/514)
    *   **功能**: 解决 AI 生成文档中常见的排版问题（如孤行、寡妇段落、编号错位）。
    *   **状态**: OPEN
    *   **热点**: 针对 AI 生成内容“可用但难看”的痛点，填补了文档生成的最后一公里。

5.  **[OPEN] `testing-patterns` Skill：全栈测试模式指南**
    *   **链接**: [PR #723](https://github.com/anthropics/skills/pull/723)
    *   **功能**: 提供全面的测试哲学、单元测试模式、React 组件测试等指导。
    *   **状态**: OPEN
    *   **热点**: 强化代码质量保障，符合企业级开发需求。

6.  **[OPEN] Windows 平台兼容性修复**
    *   **链接**: [PR #1050](https://github.com/anthropics/skills/pull/1050), [PR #1099](https://github.com/anthropics/skills/pull/1099)
    *   **功能**: 修复 `skill-creator` 脚本在 Windows 上的子进程调用失败、编码错误及管道读取问题。
    *   **状态**: OPEN
    *   **热点**: 解决了大量 Windows 用户的阻断性问题，关注度随 Issue #1061 持续走高。

## 2. 社区需求趋势

从 Issues 讨论中提炼出以下核心需求方向：

1.  **安全与信任边界**
    *   **热点**: 社区对 Skills 的命名空间安全性表示担忧。Issue [#492](https://github.com/anthropics/skills/issues/492)（21条评论）指出，社区贡献的 Skill 以 `anthropic/` 命名空间分发，可能导致用户误以为是官方安全 Skill 而授予过高权限。
    *   **诉求**: 建立明确的 Skill 来源签名机制或命名空间隔离策略。

2.  **企业级协作与权限管理**
    *   **热点**: Issue [#228](https://github.com/anthropics/skills/issues/228)（14条评论）呼吁支持组织内部的 Skill 共享库。
    *   **诉求**: 目前 Skills 主要面向个人，企业用户急需“组织级 Skill 市场”或直接分享链接功能，以替代目前的手动文件传输。

3.  **工具链稳定性**
    *   **热点**: Issue [#556](https://github.com/anthropics/skills/issues/556) 和 [#1169](https://github.com/anthropics/skills/issues/1169) 反映了 `run_eval.py` 和描述优化循环的长期故障。
    *   **诉求**: 社区迫切需要稳定、可靠的 Skill 开发与评估工具链，尤其是自动化测试脚本。

4.  **生态互操作性**
    *   **热点**: Issue [#16](https://github.com/anthropics/skills/issues/16) 提出 Skill 与 MCP (Model Context Protocol) 的整合。
    *   **诉求**: 希望将 Skills 标准化为 API 接口，促进 Agent 之间的互操作性。

## 3. 高潜力待合并 Skills (PR)

以下 PR 解决了关键痛点且处于活跃状态，近期合并可能性较高：

*   **[PR #1298](https://github.com/anthropics/skills/pull/1298) & [PR #1323](https://github.com/anthropics/skills/pull/1323)**:
    **理由**: 解决了 Skill 创建工具链的核心瘫痪问题（0% recall），属于 P0 级别修复。鉴于 Issues 中大量用户反馈此问题，官方极大概率会优先合并此类修复。

*   **[PR #538](https://github.com/anthropics/skills/pull/538)**:
    **理由**: 修复 PDF Skill 中的文件引用大小写敏感问题（Linux 兼容性）。属于低风险、高确定性的 Bug 修复，容易通过审查并合并。

*   **[PR #509](https://github.com/anthropics/skills/pull/509)**:
    **理由**: 添加 `CONTRIBUTING.md`。仓库目前社区健康评分较低，该 PR 直接回应了社区规范需求，属于基础设施建设，阻力最小。

*   **[PR #361](https://github.com/anthropics/skills/pull/361)**:
    **理由**: 修复 YAML 解析中特殊字符导致的静默错误。这是 Skill 开发中常见的“坑”，修复后能显著提升开发体验。

## 4. Skills 生态洞察

**当前社区最集中的诉求是：完善基础设施的稳定性与安全性。**

社区正处于从“尝鲜功能”向“生产可用”过渡的阶段，开发者不再仅满足于单一功能的实现，而是更关注 **开发工具链的可靠性**（如 eval 脚本修复）、**跨平台兼容性**（Windows 支持）以及 **企业级的安全治理**（命名空间与权限控制）。

---

# 2026-06-27 Claude Code 社区动态日报

## 1. 今日速览
今日 Claude Code 发布 **v2.1.195** 版本，主要修复了 hook 匹配逻辑并新增了全屏模式下的鼠标控制开关。社区关注度最高的问题依然是 **Max 5x 计划付费后账户被封禁** 的严重事故（#5088），评论数已超 170 条。此外，Opus 4.8 模型在工具调用时的格式错误问题（#63604）以及 Windows ARM64 平台的兼容性障碍（#39636）也是开发者讨论的热点。

## 2. 版本发布
### v2.1.195
- **新增功能**：引入 `CLAUDE_CODE_DISABLE_MOUSE_CLICKS` 环境变量，允许在全屏模式下禁用鼠标点击/拖动/悬停，但保留滚轮滚动功能，防止误操作。
- **Bug 修复**：修复了带连字符标识符（如 `code-reviewer`, `mcp__brave-search`）的 hook 匹配器意外进行子字符串匹配的问题，现已改为精确匹配，提升了系统的安全性与准确性。

## 3. 社区热点 Issues (Top 10)

1.  **[#5088](https://github.com/anthropics/claude-code/issues/5088) [严重] Claude Code Max 5x 计划付费后账户被封禁**
    - **热度**：👍 58 | 💬 177
    - **摘要**：这是目前社区最严重的燃眉之急。用户在支付 Max 5x 计划后立即遭遇账户封禁，无法访问 Claude Code 或 Web 端。由于涉及支付与封号，该问题引发了大量受影响用户的共鸣与焦虑，官方需尽快处理支付通道与账户审核逻辑的冲突。

2.  **[#33932](https://github.com/anthropics/claude-code/issues/33932) [功能请求] VS Code 扩展需改进 Diff 审查 UI**
    - **热度**：👍 123 | 💬 25
    - **摘要**：社区强烈呼吁 VS Code 扩展提供类似 GitHub Copilot Edits Review 的 Diff 视图。目前 Claude Code 修改代码的展示方式不够直观，开发者希望能更清晰地审查 AI 的代码变更。

3.  **[#32726](https://github.com/anthropics/claude-code/issues/32726) [Bug] VS Code 扩展面板自动抢占焦点**
    - **热度**：👍 39 | 💬 10
    - **摘要**：当 Claude 输出内容时，VS Code 侧边栏面板会自动弹出并抢占光标焦点，严重打断用户在编辑器中的输入工作流。此问题影响日常开发体验，急需修复。

4.  **[#39636](https://github.com/anthropics/claude-code/issues/39636) [Bug] Snapdragon X Plus (ARM64) 上 Cowork VM 无法启动**
    - **热度**：👍 9 | 💬 31
    - **摘要**：Windows on ARM 设备日益普及，但 Claude Code 的 Cowork VM 功能在该架构下连接超时，导致相关功能完全不可用，阻碍了新硬件用户的接入。

5.  **[#36351](https://github.com/anthropics/claude-code/issues/36351) [Bug] Desktop 更新后 Max 计划丢失 1M 上下文选项**
    - **热度**：👍 11 | 💬 17
    - **摘要**：在 v1.1.7714 更新后，部分 Max 计划用户发现模型选择器中不再显示 1M context window 选项，导致无法使用长上下文功能，严重影响大代码库分析任务。

6.  **[#63604](https://github.com/anthropics/claude-code/issues/63604) [Bug] Opus 4.8 持续发送格式错误的 tool_use 块**
    - **热度**：👍 14 | 💬 11
    - **摘要**：Opus 4.8 模型在生成工具调用时频繁出现格式错误，导致整个响应被丢弃，而 4.7 版本工作正常。这影响了依赖工具调用的高级 Agent 流程稳定性。

7.  **[#71729](https://github.com/anthropics/claude-code/issues/71729) [Bug] Desktop 重启后 Code 会话历史记录丢失**
    - **热度**：今日创建
    - **摘要**：Claude Desktop for Windows 的 `</> Code` 标签页在关闭并重启应用后，会话记录会静默丢失，且 Claude 无法感知上下文缺失，可能导致错误的决策或重复工作。

8.  **[#30407](https://github.com/anthropics/claude-code/issues/30407) [工作流] Issue 未经审查即被自动关闭**
    - **热度**：👍 4 | 💬 16
    - **摘要**：用户质疑当前的 Issue 管理策略，认为许多有效的 Bug 报告被自动关闭而未得到人工审查，这引发了社区对反馈渠道有效性的担忧。

9.  **[#71734](https://github.com/anthropics/claude-code/issues/71734) [Bug] 优先加载内置 skill 而非仓库自定义 skill**
    - **热度**：今日创建
    - **摘要**：Claude Code 当前错误地优先匹配 Anthropic 提供的内置 code-review skill，忽略了用户在仓库中自定义的同名 skill，破坏了定制化工作流。

10. **[#71671](https://github.com/anthropics/claude-code/issues/71671) [模型行为] 反复忽略记忆与用户指令导致生产数据丢失**
    - **热度**：今日更新
    - **摘要**：用户报告模型反复忽略保存的脚本、记忆和明确指令，导致连续 5 次生产环境数据丢失。这反映了模型上下文遵循能力的可靠性问题，需引起高度重视。

## 4. 重要 PR 进展
*注：过去24小时内更新的 PR 仅 2 条，且多为文档或合并清理。*

1.  **[#71627](https://github.com/anthropics/claude-code/pull/71627) docs(sandbox): 说明提示批准的主机仅限会话作用域**
    - **状态**：Open
    - **内容**：补充了沙箱配置文档，明确指出通过提示批准的网络域名仅在当前会话有效，重启后会丢失，帮助开发者理解安全沙箱的生命周期。

2.  **[#71530](https://github.com/anthropics/claude-code/pull/71530) Merge pull request #1**
    - **状态**：Closed
    - **内容**：看似是一个无效的合并 PR，已被关闭。

## 5. 功能需求趋势
根据今日 Issues 的标签与内容分析，社区关注重心如下：

- **IDE 集成体验优化**：VS Code 扩展是目前的痛点集中区，主要集中在 **Diff 视图审查** (#33932)、**焦点管理** (#32726) 以及 **自动打开标签页的控制** (#68395)。开发者希望 AI 助手能更“安静”地辅助，而不是频繁打断工作流。
- **跨平台兼容性**：随着 Windows on ARM 设备的普及，**ARM64 架构支持** (#39636) 成为新的功能短板。同时，Windows 平台的内存泄漏 (#45889) 和路径处理问题依然存在。
- **模型能力与稳定性**：用户对 **Opus 4.8** 的稳定性表示担忧 (#63604)，同时强烈要求在 UI 中明确并保留 **1M 上下文** 选项 (#36351)。
- **Desktop 与 CLI 功能对齐**：用户希望 Desktop 版拥有 CLI 的 **消息队列注入** 功能，以便在任务执行中途进行干预 (#71726)。

## 6. 开发者关注点
- **账户与支付安全**：Max 计划付费即封号的问题 (#5088) 是当前最严重的信任危机，开发者对此类支付系统的可靠性表示强烈担忧。
- **数据持久化与可靠性**：无论是 Desktop 的会话丢失 (#71729)，还是模型忽略记忆/指令 (#71671)，都反映出开发者对 **上下文一致性** 和 **数据安全** 的高敏感度。
- **Hook 与 Skill 系统的可预测性**：v2.1.195 修复了 hook 匹配问题，但 Skill 的优先级覆盖逻辑 (#71734) 仍让高级用户感到困惑，说明自定义扩展机制仍需更清晰的规范。

---
*数据来源：GitHub anthropics/claude-code | 统计时间：2026-06-27*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-06-27)

> **数据来源**: github.com/openai/codex
> **分析师**: AI 开发工具技术分析师

---

### 1. 今日速览
今日社区最核心的讨论集中在 **GPT-5.5 模型 Token 消耗异常激增** 的问题上，多位用户反馈在订阅额度不变的情况下，预算消耗速度提升了 10-20 倍，引发大量关注。此外，之前引发热议的 "SQLite 日志写入 640TB/年" 问题已确认修复。开发层面，官方正在大力推进远程插件架构的默认启用，并针对 WebSocket 连接安全、性能优化提交了多项关键 PR。

### 2. 版本发布
- **rust-v0.142.3**: 这是一个维护性补丁版本，自 0.142.2 起无面向用户的变更。
- **rust-v0.143.0-alpha.26**: 发布了最新的 Alpha 测试版本，包含最新的实验性功能。

### 3. 社区热点 Issues (Top 10)

1.  **[#28879](https://github.com/openai/codex/issues/28879) [严重] GPT-5.5 Token 消耗成本激增 10-20 倍**
    - **关注度**: 👍 326 | 💬 175
    - **摘要**: 自 6 月 16 日起，Plus 用户在使用 GPT-5.5 时发现 Codex 预算消耗速度异常，原本 5 小时的额度在 2-3 次提示词交互后即耗尽。日志显示每个 Token 的限制消耗百分比激增。这是目前社区最活跃的 Issue，急需官方回应。
    
2.  **[#28224](https://github.com/openai/codex/issues/28224) [已修复] SQLite 反馈日志导致 SSD 寿命快速耗尽**
    - **关注度**: 👍 393 | 💬 89
    - **摘要**: 此前反馈 Codex CLI 的日志写入量高达 640 TB/年，严重影响 SSD 寿命。作者更新称相关修复 PR 已合并至 0.142.0 版本，可减少 85% 的日志写入，该 Issue 已关闭。

3.  **[#8745](https://github.com/openai/codex/issues/8745) [需求] CLI 内置 LSP 支持（自动检测与安装）**
    - **关注度**: 👍 392 | 💬 54
    - **摘要**: 社区强烈希望 Codex CLI 能内置 Language Server Protocol (LSP) 支持，以实现自动诊断和符号智能感知，提升代码生成质量。这是一个长期高票需求。

4.  **[#30224](https://github.com/openai/codex/issues/30224) [Bug] 使用自定义模型时报错 "Not supported"**
    - **关注度**: 👍 4 | 💬 15
    - **摘要**: 用户在使用 `X-OpenAI-Internal-Codex-Responses-Lite` 配置自定义模型时遇到兼容性报错，影响了非标准模型接入的灵活性。

5.  **[#27536](https://github.com/openai/codex/issues/27536) [Bug] macOS 自动更新导致 62GB+ 垃圾文件残留**
    - **关注度**: 👍 0 | 💬 10
    - **摘要**: macOS 版 Codex 在自动更新时，会在临时目录遗留大量 `code_sign_clone` 目录，长时间未清理可占用超过 62GB 空间。

6.  **[#18357](https://github.com/openai/codex/issues/18357) [Bug] 升级 Pro 计划后仍提示 "Out of Codex messages"**
    - **关注度**: 👍 5 | 💬 9
    - **摘要**: 用户升级到 Pro 计划后，服务端未正确同步权限状态，导致无法使用 Codex，属于账户与计费系统的同步问题。

7.  **[#26984](https://github.com/openai/codex/issues/26984) [Bug] MCP stdio 服务器导致文件描述符泄漏**
    - **关注度**: 👍 1 | 💬 6
    - **摘要**: 长期运行的 CLI 会话中，MCP stdio 服务器未正确关闭管道和孤儿进程，最终导致系统报错 "Too many open files" (EMFILE)。

8.  **[#30212](https://github.com/openai/codex/issues/30212) [Bug] 用量额度异常耗尽（5小时额度仅用1小时）**
    - **关注度**: 👍 8 | 💬 6
    - **摘要**: 类似于 Issue #28879，Pro 用户反馈 20 倍用量额度在极短时间内被消耗，可能与后台计费或度量逻辑有关。

9.  **[#29922](https://github.com/openai/codex/issues/29922) [需求] 支持后台事件唤醒 Agent 的 Monitor 工具**
    - **关注度**: 👍 0 | 💬 4
    - **摘要**: 开发者希望 Codex 能支持非轮询方式的监控工具，允许 Agent 在后台日志、文件变动或 CI 事件发生时被动唤醒，以实现更自动化的工作流。

10. **[#30299](https://github.com/openai/codex/issues/30299) [需求] 增加 CLI 命令管理 Memories**
    - **关注度**: 👍 0 | 💬 4
    - **摘要**: 随着 Codex 的 "记忆" 功能积累，用户发现全局记忆文件过大，急需官方提供 CLI 命令来检查、修剪和删除记忆条目。

### 4. 重要 PR 进展 (Top 10)

1.  **[#30297](https://github.com/openai/codex/pull/30297) [Feature] 默认启用远程插件**
    - **内容**: 将远程插件功能从开发阶段提升为稳定版，并默认启用。这标志着 Codex 架构向更松耦合、更安全的插件模型迁移迈出关键一步。

2.  **[#30315](https://github.com/openai/codex/pull/30315) [Security] 为 app-server WebSocket 增加生成令牌认证**
    - **内容**: 自动为 WebSocket 监听器生成 256-bit URL 安全令牌，增强了本地服务器的安全性，防止未授权连接。

3.  **[#30320](https://github.com/openai/codex/pull/30320) [Policy] Guardian 策略更新**
    - **内容**: 更新了 Guardian 提示模板，明确沙箱限制不适用于审查模型，并细化了对低严重性违规的处理逻辑，提升了安全审查的准确性。

4.  **[#30286](https://github.com/openai/codex/pull/30286) [Perf] 重叠 Diff Root 发现与世界状态构建**
    - **内容**: 优化了文件系统元数据获取的并发逻辑，将独立的 diff-root 发现过程与世界状态构建重叠执行，减少了首次模型请求前的延迟。

5.  **[#30281](https://github.com/openai/codex/pull/30281) [Perf] 在 Root 发现前缓存 Snapshots**
    - **内容**: 解决了远程文件系统上元数据探测延迟高的问题，优化了 Skill 加载性能，尤其是在会话初始化阶段。

6.  **[#30325](https://github.com/openai/codex/pull/30325) [Feature] 从安全缓冲事件读取更快的模型**
    - **内容**: 支持从第三方流量的安全缓冲元数据中读取 `faster_model` 字段，优化了模型降级或切换的响应机制。

7.  **[#30201](https://github.com/openai/codex/pull/30201) [Fix] 避免远程控制令牌刷新重试风暴**
    - **内容**: 修复了 WebSocket 重连时因 502 错误导致有效令牌被丢弃，进而引发无限重试刷新风暴的问题，提升了连接稳定性。

8.  **[#30269](https://github.com/openai/codex/pull/30269) [Network] 通过签名路径控制 Rendezvous TCP_NODELAY**
    - **内容**: 通过签名 URL 控制 TCP_NODELAY 标志，优化了执行器与远程环境的网络延迟性能，对实时交互场景有重要意义。

9.  **[#30302](https://github.com/openai/codex/pull/30302) [Fix] 保留自定义工具调用的命名空间**
    - **内容**: 修复了在响应反序列化过程中自定义工具调用命名空间丢失的问题，确保了工具调度和参数处理的准确性。

10. **[#29691](https://github.com/openai/codex/pull/29691) [Security] 运行时强制执行 Marketplace 来源策略**
    - **内容**: 增强了插件安全性，根据企业策略在运行时过滤和禁用不符合来源要求的已安装插件，防止潜在的安全风险。

### 5. 功能需求趋势
- **成本与用量透明化**: 社区对 Token 消耗计算方式的关注度达到顶峰（Issue #28879），要求官方提供更透明的计费日志或实时用量仪表盘。
- **资源占用优化**: 继日志写入问题后，开发者对 SSD 寿命、内存泄漏（如 Issue #27536, #26984）表现出极高的敏感度，呼吁更完善的资源清理机制。
- **LSP 与 IDE 深度集成**: 内置 LSP 支持依旧是开发者最期待的功能（Issue #8745），表明社区希望 AI 工具能更深地融入现有开发环境，而非仅作为独立聊天窗口。
- **Agent 自主性增强**: 开发者开始要求 Agent 具备后台监听和被动唤醒能力（Issue #29922），显示出从"交互式助手"向"后台自动化 Agent"演进的需求。

### 6. 开发者关注点
- **Token 计费异常**: 大量开发者反馈新版模型或后台策略变更导致预算快速耗尽，这是当前最大的痛点，可能影响用户留存。
- **系统稳定性**: 包括 macOS 的磁盘膨胀问题、Windows 上的浏览器插件丢失问题，以及 WSL 下的路径兼容性问题，表明跨平台体验仍需打磨。
- **CLI 工具链完善**: 开发者希望获得对内部状态（如 Memories）的直接控制权，以及对 CLI 性能（如启动速度、并发处理）的持续优化。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-06-27)

## 1. 今日速览
今日 Gemini CLI 社区重点关注 **Agent 稳定性与可靠性**，多个高优先级（P1）Issue 集中反馈了子代理挂起、任务误报成功及 Shell 执行卡死等核心问题。功能方面，社区对 AST 感知工具和 Auto Memory 机制的安全性讨论热度较高。此外，今日 Nightly 构建发布失败，需关注修复进度。

## 2. 版本发布
过去 24 小时内无正式版本发布。
> **注意**：Nightly Release 工作流今日运行失败，详情见 [Issue #28168](https://github.com/google-gemini/gemini-cli/issues/28168)。

## 3. 社区热点 Issues (Top 10)

1.  **[P0] Nightly 发布失败**
    *   **链接**: [Issue #28168](https://github.com/google-gemini/gemini-cli/issues/28168)
    *   **简评**: 今日 Nightly 版本发布流程中断，属于优先级最高的阻塞性问题，需维护者立即介入。

2.  **[P1] 通用代理无限挂起**
    *   **链接**: [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)
    *   **简评**: 用户反馈 `gemini-cli` 在调用通用代理时会无限期卡死，甚至连简单的文件夹创建操作都会失败，严重影响使用体验，目前仍有较多讨论。

3.  **[P1] 子代理 MAX_TURNS 耗尽后误报成功**
    *   **链接**: [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)
    *   **简评**: `codebase_investigator` 子代理在达到最大轮次限制中断后，仍报告 `status: "success"`。这种“假成功”会误导主代理，导致任务流程错误，是 Agent 编排中的严重 Bug。

4.  **[P1] Shell 命令执行后卡死在 "Waiting input"**
    *   **链接**: [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)
    *   **简评**: CLI 执行简单命令后，界面持续显示 "Awaiting user input" 但实际进程已结束，导致会话卡死，用户必须手动强制退出。

5.  **[P2] 探索 AST 感知文件读取与搜索**
    *   **链接**: [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)
    *   **简评**: 这是一个重要的架构优化 Epic，旨在引入 AST（抽象语法树）感知能力，减少 Token 消耗，提高代码读取和映射的精确度，社区对此技术方向讨论热烈。

6.  **[P2] 工具数量超过 128 个时报 400 错误**
    *   **链接**: [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)
    *   **简评**: 随着 Skills 和 Tools 的增加，用户遇到 API 限制。社区正在讨论如何智能筛选和限制 Tool Scope 以解决此瓶颈。

7.  **[P2] Auto Memory 存在敏感信息泄露风险**
    *   **链接**: [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)
    *   **简评**: Auto Memory 功能在将本地日志发送给模型提取记忆前，未能有效过滤 Secrets，存在安全隐患，需引入确定性编辑机制。

8.  **[P2] Gemini 未充分使用自定义 Skills 和 Sub-agents**
    *   **链接**: [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)
    *   **简评**: 用户反馈模型自主调用自定义 Skills 的意愿极低，除非显式指令要求，这限制了 CLI 的扩展能力发挥。

9.  **[P1] Browser Agent 在 Wayland 环境下失败**
    *   **链接**: [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)
    *   **简评**: Linux Wayland 环境下的兼容性问题，Browser Agent 启动后直接报错终止，影响了 Linux 用户的浏览器自动化体验。

10. **[P3] 提升代理的自我认知能力**
    *   **链接**: [Issue #21432](https://github.com/google-gemini/gemini-cli/issues/21432)
    *   **简评**: 建议让 Agent 更清楚地了解自身的运行机制（如 CLI flags、快捷键），以便更好地指导用户使用，体现了对 Meta-cognition 的需求。

## 4. 重要 PR 进展 (Top 10)

1.  **[已关闭] 支持原生拖拽与剪贴板图片粘贴**
    *   **链接**: [PR #27859](https://github.com/google-gemini/gemini-cli/pull/27859)
    *   **内容**: 实现了终端内的拖拽文件和 `Cmd+V`/`Ctrl+V` 粘贴图片功能，补齐了多模态输入体验的重要短板。

2.  **[已关闭] 修复 Pending Tool Responses 过大问题**
    *   **链接**: [PR #27870](https://github.com/google-gemini/gemini-cli/pull/27870)
    *   **内容**: 解决了大型 Tool Result 导致的 Pending 状态问题，修复了潜在的上下文溢出风险。

3.  **[Open] 修复 Thought 泄露问题**
    *   **链接**: [PR #27971](https://github.com/google-gemini/gemini-cli/pull/27971)
    *   **内容**: 解决了模型内部思维链泄露到纯文本历史记录中导致后续对话混淆或陷入死循环的问题，提升了长对话的稳定性。

4.  **[Open] 限制单次请求的递归推理轮次**
    *   **链接**: [PR #28164](https://github.com/google-gemini/gemini-cli/pull/28164)
    *   **内容**: 引入了硬性限制（默认 15 轮），防止 Agent 陷入无限循环，保护用户 CPU 和 API 额度。

5.  **[Open] 修复 `@` 引用文件的路径解析错误**
    *   **链接**: [PR #28053](https://github.com/google-gemini/gemini-cli/pull/28053)
    *   **内容**: 修复了模型传入 `@` 前缀路径时文件系统工具报 "File not found" 的防御性 Bug。

6.  **[Open] 修复 MCP 工具名称解析逻辑**
    *   **链接**: [PR #28033](https://github.com/google-gemini/gemini-cli/pull/28033)
    *   **内容**: 优化了带下划线的服务器名称的匹配逻辑，修复了工具路由错误。

7.  **[Open] Caretaker Agent: Egress Cloud Run 服务**
    *   **链接**: [PR #28167](https://github.com/google-gemini/gemini-cli/pull/28167)
    *   **内容**: 新增自动化机器人基础设施，用于处理 GitHub Webhook 并执行自动化操作，提升项目维护自动化水平。

8.  **[Open] 修复 WSL 文件系统监听缺失导致分支名不同步**
    *   **链接**: [PR #28012](https://github.com/google-gemini/gemini-cli/pull/28012)
    *   **内容**: 针对 WSL 挂载的 Windows 驱动器无 `fs.watch` 事件的问题，引入了同步机制修复底部状态栏分支名不更新的 Bug。

9.  **[Open] 修复 .env 文件无读权限导致扩展加载失败**
    *   **链接**: [PR #28059](https://github.com/google-gemini/gemini-cli/pull/28059)
    *   **内容**: 增强了沙箱环境下的鲁棒性，即使 `.env` 文件因权限不可读也不会阻断扩展系统的加载。

10. **[Open] 修复 Prompt 模板中的美元符号处理**
    *   **链接**: [PR #28055](https://github.com/google-gemini/gemini-cli/pull/28055)
    *   **内容**: 修复了模板替换逻辑错误导致内容中的 `$` 符号被错误转义的问题。

## 5. 功能需求趋势

*   **Agent 编排与稳定性**：社区高度关注子代理的表现，包括错误的成功状态汇报 (#22323)、子代理的自主调用意愿 (#21968) 以及无限挂起问题 (#21409)。用户期望 Agent 不仅是“能用”，更要“可控、可信”。
*   **上下文与记忆管理**：Auto Memory 的隐私安全 (#26525) 和思维链泄露 (#27971) 成为焦点，反映出用户对长期记忆功能的依赖同时，对数据隐私和上下文污染的担忧。
*   **开发体验 (DX)**：对 AST 感知工具的需求 (#22745) 显示用户希望 CLI 能更深入理解代码结构，而不仅仅是文本处理。同时，多模态输入（拖拽/粘贴）的补齐也备受期待。

## 6. 开发者关注点

*   **“假死”与无响应**：这是当前最痛点的体验问题，包括主进程挂起、Shell 命令卡死、交互式提示符卡死等，开发者急需更完善的超时机制和状态恢复能力。
*   **跨平台兼容性**：Wayland 环境下的 Browser Agent 失效 (#21983) 和 WSL 文件监听问题 (#28012) 表明，非标准开发环境下的兼容性仍是主要挑战。
*   **安全与权限**：针对敏感文件和环境的访问控制日益受到重视，如敏感信息自动编辑和受限目录的访问策略。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-06-27)

## 1. 今日速览
GitHub Copilot CLI 今日发布 **v1.0.66-1** 版本，重点增强了企业级用户对子智能体的控制能力，并引入了桌面通知与技能审查工作流。社区方面，Linux/Windows 平台的剪贴板功能失效问题持续发酵，同时开发者对新版本中模型硬编码（忽略自定义配置）及上下文隔离问题表现出强烈关注。

## 2. 版本发布
**版本号**: v1.0.66-1
**更新摘要**:
- **子智能体管理**：针对基于用量计费的用户，新增在 `/settings` 中配置子智能体并发数和深度限制的功能，提升了对复杂任务流的控制力。
- **技能审查工作流**：引入 `/chronicle skills review` 命令，允许用户对拟议的草稿技能变更进行接受、拒绝或延期操作。
- **桌面通知**：增加了针对注意力提示和空闲会话的桌面通知功能，提升用户交互响应效率。

## 3. 社区热点 Issues (Top 10)

1.  **[OPEN] Linux 平台剪贴板快捷键失效 (#2082)**
    *   **链接**: [github/copilot-cli Issue #2082](github/copilot-cli Issue #2082)
    *   **关注点**: 这是一个高热度老问题，影响 Ubuntu 用户。`ctrl+shift+c` 快捷键无法复制，严重干扰终端操作习惯，社区积压了较多反馈（👍 11, 评论 22）。

2.  **[OPEN] 上下文记忆跨仓库泄露 (#3945)**
    *   **链接**: [github/copilot-cli Issue #3945](github/copilot-cli Issue #3945)
    *   **关注点**: 严重的数据隔离问题。用户报告在全新仓库中，Copilot 错误地引用了其他仓库的“记忆”。这对于多项目开发者是重大隐患，可能导致代码逻辑混淆或隐私泄露。

3.  **[OPEN] `explore` 工具硬编码模型导致 API 调用失败 (#3954)**
    *   **链接**: [github/copilot-cli Issue #3954](github/copilot-cli Issue #3954)
    *   **关注点**: 技术深度问题。Agent 在调用 `explore` 工具时强制使用 `gpt-5.4-mini`，忽略了用户配置的 DeepSeek 等自定义 API 端点，导致工作流中断，反映出工具链与模型耦合度过高的问题。

4.  **[OPEN] 请求支持暂停 Copilot 工作 (#1928)**
    *   **链接**: [github/copilot-cli Issue #1928](github/copilot-cli Issue #1928)
    *   **关注点**: 交互体验优化。用户希望在 Agent 走偏时能暂停并注入新指令，而非终止或只能事后修正。这是目前 Agent 类工具普遍存在的交互痛点。

5.  **[OPEN] Windows 11 剪贴板复制功能失效 (#3949)**
    *   **链接**: [github/copilot-cli Issue #3949](github/copilot-cli Issue #3949)
    *   **关注点**: 与 Linux 问题类似，Windows 平台也出现了复制失败且无错误提示的情况，UI 提示与实际系统剪贴板状态不一致，严重影响用户体验。

6.  **[OPEN] 网络获取工具 `web_fetch` 全面报错 (#3948)**
    *   **链接**: [github/copilot-cli Issue #3948](github/copilot-cli Issue #3948)
    *   **关注点**: 核心工具链故障。用户报告 `web_fetch` 持续返回 `TypeError: fetch failed`，且非代理配置问题，怀疑是底层网络库或环境兼容性问题。

7.  **[OPEN] 子智能体会话导出内容未做限制 (#3944)**
    *   **链接**: [github/copilot-cli Issue #3944](github/copilot-cli Issue #3944)
    *   **关注点**: 性能与日志管理。子智能体的完整调用日志被原样内联进父会话导出文件，缺乏摘要和大小限制，可能导致日志文件膨胀难以阅读。

8.  **[OPEN] PowerShell 兼容性请求 (#3951)**
    *   **链接**: [github/copilot-cli Issue #3951](github/copilot-cli Issue #3951)
    *   **关注点**: 平台拓展需求。开发者呼吁 CLI 能更好地兼容 PowerShell，生成原生的 PowerShell Commandlets，以提升 Windows 生态下的自动化体验。

9.  **[OPEN] 自定义指令泄露至仓库分析 (#3946)**
    *   **链接**: [github/copilot-cli Issue #3946](github/copilot-cli Issue #3946)
    *   **关注点**: 上下文管理。与记忆泄露类似，用户发现全局自定义指令意外污染了特定仓库的分析上下文，导致分析结果不准确。

10. **[OPEN] CVE 安全漏洞分配请求 (#3906)**
    *   **链接**: [github/copilot-cli Issue #3906](github/copilot-cli Issue #3906)
    *   **关注点**: 安全合规。用户已提交安全报告并申请 CVE ID，显示项目正在进行外部安全审计，需关注后续补丁发布。

## 4. 重要 PR 进展
过去24小时内 PR 活动较少，仅记录到以下 1 条：

1.  **[CLOSED] macOS 安装文档更新 (#570)**
    *   **链接**: [github/copilot-cli PR #570](github/copilot-cli PR #570)
    *   **内容**: Copilot 自动生成的 PR，旨在向 README.md 添加 macOS 特定的安装说明，现已关闭。这显示了项目自动化文档维护的尝试。

## 5. 功能需求趋势
从今日的 Issue 列表中，可以提炼出以下三个核心趋势：
1.  **上下文隔离与内存管理**：随着 Agent 记忆能力的增强，用户对上下文的隔离提出了更高要求（#3945, #3946），不希望跨项目的信息发生混淆。
2.  **跨平台体验一致性**：Linux 和 Windows 平台的基础交互（如剪贴板、PowerShell 支持）仍是痛点，用户期望 CLI 能像原生终端一样稳定工作。
3.  **模型与工具的解耦**：社区强烈希望工具调用（如 `explore`）不要硬编码特定模型，以便灵活接入本地模型或第三方 API（#3954）。

## 6. 开发者关注点
*   **基础交互故障**：剪贴板功能失效（Linux/Windows）是最高频的反馈，开发者对基础 UI 交互的稳定性容忍度极低。
*   **Agent 控制权缺失**：开发者希望拥有对 Agent 执行过程的“暂停/注入”控制权，以及更精细的子智能体并发限制，这反映了从“全自动”向“人机协同”的需求转变。
*   **配置灵活性受限**：无论是自定义模型被忽略，还是 SSO 环境下的插件报错（#3950），都显示出在企业级和高级自定义场景下，CLI 的健壮性仍有提升空间。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-06-27)

## 1. 今日速览
今日社区重点关注核心功能的稳定性与开发体验优化。开发者提交了针对 OpenAI SDK 推理参数处理的关键修复 PR，同时社区反馈了 Plan Mode 状态机逻辑及 Linux 终端交互层面的潜在 Bug，显示出项目正处于精细化打磨阶段。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues
今日共有 3 条 Issues 更新，以下为详细分析：

*   **[#2425 [CLOSED] [bug] 403 Kimi For Coding is currently only available for Coding Agents...](https://github.com/MoonshotAI/kimi-cli/issues/2425)**
    *   **重要性**：涉及核心鉴权逻辑。用户在使用 `kimi-for-coding` 模型时遇到 403 错误，提示该模型仅限特定 Coding Agents 使用。
    *   **社区反应**：该 Issue 已关闭，点赞数 3。尽管用户环境符合要求，但鉴权端可能存在判定异常，官方关闭此 Issue 意味着可能已定位或修复了相关的 API 访问权限问题。

*   **[#2478 [OPEN] [Bug] ExitPlanMode reports "Not in plan mode" while system reminder claims plan mode is active](https://github.com/MoonshotAI/kimi-cli/issues/2478)**
    *   **重要性**：**核心功能阻断性 Bug**。Plan Mode（规划模式）是 AI 编码工具的核心工作流之一。系统提示处于 Plan Mode，但调用 `ExitPlanMode` 却报错 "Not in plan mode"，导致 AI 陷入状态死锁，无法正常退出规划模式。
    *   **社区反应**：昨日新建 Issue，已引起开发者注意，状态管理逻辑的不一致是亟待解决的问题。

*   **[#2477 [OPEN] [bug] Kimi CLI Bug Report — Double Enter Key & `/sessions` Feedback Loss](https://github.com/MoonshotAI/kimi-cli/issues/2477)**
    *   **重要性**：影响 Linux 用户体验的交互 Bug。在 Ubuntu 环境下出现“双击回车”现象，且使用 `/sessions` 命令时会丢失上下文反馈。
    *   **社区反应**：昨日新建 Issue，涉及终端输入处理和会话持久化逻辑，需关注后续修复进展。

## 4. 重要 PR 进展
今日共有 2 条 PR 更新：

*   **[#2476 [OPEN] fix(kosong): omit reasoning_effort instead of sending null when thinking is off](https://github.com/MoonshotAI/kimi-cli/pull/2476)**
    *   **内容**：修复了当 thinking 模式关闭时，参数处理逻辑错误地向 OpenAI SDK 发送 `null` 而非省略该字段的问题。
    *   **意义**：这是一个关键的兼容性修复。显式传递 `null` 可能导致部分模型 API 解析错误或行为异常，改为 `omit`（省略）符合 OpenAI API 规范，提升了模型调用的健壮性。

*   **[#2287 [OPEN] docs(readme): add prerequisites list to Development section](https://github.com/MoonshotAI/kimi-cli/pull/2287)**
    *   **内容**：在 README 的开发指南部分添加了 `Prerequisites`（前置依赖）列表。
    *   **意义**：完善贡献者文档，解决了新贡献者在执行 `make prepare` 前因缺少依赖而失败的问题，有助于降低社区贡献门槛。

## 5. 功能需求趋势
根据今日 Issue 反馈，社区关注点呈现以下趋势：
*   **状态管理稳定性**：Plan Mode 的状态同步问题（#2478）表明用户对 AI 工作流的状态机稳定性有极高要求，任何状态不一致都会打断编码心流。
*   **跨平台兼容性**：Linux 环境下的输入与显示问题（#2477）仍是痛点，需确保在 Ubuntu 等主流开发环境中 CLI 的交互体验与 macOS 一致。

## 6. 开发者关注点
*   **API 调用规范**：PR #2476 显示开发团队正在细致处理 OpenAI SDK 的参数序列化细节，表明项目正在向工业级稳定性迭代，注重处理边缘情况下的 API 兼容性。
*   **权限与鉴权逻辑**：Issue #2425 的关闭提示开发团队可能在后台调整了 "Kimi For Coding" 模型的 Agent 身份验证机制，开发者需注意 API 返回的错误码变化。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-06-27)

## 1. 今日速览
今日 OpenCode 无新版本发布，社区重点讨论集中在订阅计费策略调整与 UI 交互体验优化上。针对 DeepSeek V4 Pro 降价，社区呼吁调整 Go 订阅额度限制引发热议。同时，多项核心 PR 修复了 Question Tool UI 遮挡内容的问题，并引入了子代理（Child Agent）选择器功能，显著提升了多任务交互体验。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues
以下是今日最受关注的 10 个 Issue，涵盖了计费、UI 交互与核心稳定性问题：

1.  **[FEATURE] 建议调整 DeepSeek V4 Pro 降价后的 Go 订阅额度**
    *   **链接**: [Issue #28846](https://github.com/anomalyco/opencode/issues/28846)
    *   **热度**: 👍 82 | 💬 85
    *   **解析**: 随着 DeepSeek V4 Pro API 价格永久下调 75%，用户强烈呼吁 OpenCode 同步上调 Go 订阅计划的使用额度限制。这是今日讨论度最高的话题，反映了用户对性价比的高度敏感。

2.  **[FEATURE] UI 支持 reasoning_effort 参数**
    *   **链接**: [Issue #450](https://github.com/anomalyco/opencode/issues/450)
    *   **热度**: 👍 26 | 💬 15
    *   **解析**: 用户希望在 UI 界面中直接控制模型的 `reasoning_effort` 参数（如 OpenAI/Gemini/DeepSeek 支持），以便在复杂任务中调整推理深度，目前该参数只能通过代码配置。

3.  **Question Tool UI 遮挡对话内容且无法最小化**
    *   **链接**: [Issue #28956](https://github.com/anomalyco/opencode/issues/28956)
    *   **热度**: 👍 0 | 💬 5
    *   **解析**: 当 AI 使用 Question Tool 询问用户时，弹出的对话框会全屏覆盖之前的对话记录，导致用户无法回看上下文。多个相关 Issue (#32791, #19400) 均指向此痛点，急需折叠/最小化功能。

4.  **工具调用截断导致死循环**
    *   **链接**: [Issue #18108](https://github.com/anomalyco/opencode/issues/18108)
    *   **热度**: 👍 2 | 💬 7
    *   **解析**: 当 LLM 生成的 Tool Call 参数超过 `maxOutputTokens` 导致 JSON 被截断时，OpenCode 错误地将其标记为无效调用，未提供修复信号，导致会话陷入不可恢复的死循环。

5.  **OpenCode 处理请求时无响应**
    *   **链接**: [Issue #32149](https://github.com/anomalyco/opencode/issues/32149)
    *   **热度**: 👍 2 | 💬 6
    *   **解析**: 用户反馈提交 Prompt 后显示 "thinking" 状态随后停止，无任何响应输出。这是一个影响核心可用性的 Bug。

6.  **[FEATURE] 支持加密货币支付 Go 订阅**
    *   **链接**: [Issue #23153](https://github.com/anomalyco/opencode/issues/23153)
    *   **热度**: 👍 23 | 💬 12
    *   **解析**: 社区用户请求增加 Crypto（如 Monero, ETH）支付方式，以满足不同地区用户的支付需求。

7.  **TUI 不再显示已修改的文件列表**
    *   **链接**: [Issue #17797](https://github.com/anomalyco/opencode/issues/17797)
    *   **热度**: 👍 1 | 💬 4
    *   **解析**: 在较新版本中，TUI 右侧原本显示文件增删行数的面板消失，降低了用户对代码变更的感知度。

8.  **Windows 端更新后无法启动 (v1.1.53)**
    *   **链接**: [Issue #12598](https://github.com/anomalyco/opencode/issues/12598)
    *   **热度**: 👍 0 | 💬 16
    *   **解析**: Windows 用户升级后出现启动黑屏/无反应问题，虽然该 Issue 状态已关闭，但仍有一定讨论热度，需注意版本兼容性。

9.  **macOS 内核 NFS 消息泄露至 TUI 界面**
    *   **链接**: [Issue #34146](https://github.com/anomalyco/opencode/issues/34146)
    *   **热度**: 👍 0 | 💬 2
    *   **解析**: 在 macOS OrbStack 环境下，内核的 NFS 状态消息会“串扰”到 OpenCode TUI 界面中，破坏显示布局。

10. **本地文件路径在终端输出中不可点击**
    *   **链接**: [Issue #19005](https://github.com/anomalyco/opencode/issues/19005)
    *   **热度**: 👍 2 | 💬 6
    *   **解析**: 用户希望生成的报告或图片路径能在终端中直接点击打开，而不是需要手动复制路径执行 `open` 命令。

## 4. 重要 PR 进展
今日有多个重要的 PR 合并或更新，主要集中在 UI 重构和核心逻辑修复：

1.  **[FEATURE] Question Tool UI 修复与体验增强**
    *   **链接**: [PR #34116](https://github.com/anomalyco/opencode/pull/34116)
    *   **内容**: 这是一个高价值 PR，一次性解决了 #14924, #32791, #28956 等 6 个 Issues。增加了问题对话框的折叠/展开功能，修复了文本截断问题，并允许用户在回答前查看历史对话。

2.  **[FEATURE] 添加子代理选择器**
    *   **链接**: [PR #34135](https://github.com/anomalyco/opencode/pull/34135) (TUI), [PR #34127](https://github.com/anomalyco/opencode/pull/34127) (App)
    *   **内容**: 在 TUI 和 Desktop App 中引入了子代理选择器，允许用户快速切换或查看正在运行的子会话，优化了多任务并行场景下的管理体验。

3.  **生成完整的协议客户端代码**
    *   **链接**: [PR #34143](https://github.com/anomalyco/opencode/pull/34143)
    *   **内容**: 重构了代码生成流程，从 Server HttpApi 组生成 Promise 和 Effect 客户端，为未来的 API 扩展和类型安全打下基础。

4.  **[FIX] 处理项目路径移动/删除逻辑**
    *   **链接**: [PR #34137](https://github.com/anomalyco/opencode/pull/34137)
    *   **内容**: 解决了当用户在文件系统中移动项目目录后，Desktop App 无法正确定位项目的问题，自动提升新路径并迁移会话数据。

5.  **[FIX] Windows 终端进程退出问题**
    *   **链接**: [PR #29281](https://github.com/anomalyco/opencode/pull/29281)
    *   **内容**: 修复了 Windows 上 `process.exit()` 导致父终端（pwsh/cmd）意外关闭的问题，改为优雅退出。

6.  **[FIX] MCP OAuth 认证流程优化**
    *   **链接**: [PR #34125](https://github.com/anomalyco/opencode/pull/34125)
    *   **内容**: 修复了 MCP OAuth 刷新令牌的作用域问题，并改进了认证失败时的错误提示，解决了 Datadog MCP 等服务静默认证失败的问题。

7.  **[FIX] Gemini 模型 Schema 校正**
    *   **链接**: [PR #34129](https://github.com/anomalyco/opencode/pull/34129)
    *   **内容**: 修复了 Google 函数调用 API 对 "required" 字段的校验错误，防止在处理非对象类型 Schema 时请求失败。

8.  **[FIX] 过滤 Go 端点不支持的模型列表**
    *   **链接**: [PR #33547](https://github.com/anomalyco/opencode/pull/33547)
    *   **内容**: 修复了 `/zen/go/v1/models` 返回不兼容模型导致调用失败的问题，现在仅返回 Go 端点实际支持的模型。

9.  **[REFACTOR] 重构位置节点功能**
    *   **链接**: [PR #34119](https://github.com/anomalyco/opencode/pull/34119)
    *   **内容**: 核心架构重构，将 LayerNode 图构建移入核心模块，优化了全局服务和位置生命周期的管理。

10. **[FIX] TUI Modified Files 面板显示修复**
    *   **链接**: [PR #34131](https://github.com/anomalyco/opencode/issues/34131) (关联 Issue)
    *   **内容**: 修复了 TUI 侧边栏“已修改文件”面板在 AI 编辑文件后始终不渲染的 Bug。

## 5. 功能需求趋势
根据今日 Issues 整理，社区功能需求呈现以下趋势：

*   **精细化模型控制**: 用户不再满足于简单的模型切换，更希望能控制 `reasoning_effort` 等底层参数，以平衡成本与推理质量。
*   **UI 交互的非阻断性**: 针对 Question Tool 和弹窗遮挡内容的问题，用户强烈要求“最小化”、“折叠”或“透明化”功能，强调工作流的连续性。
*   **支付灵活性**: 加密货币支付的需求持续高涨，显示出开发者群体对支付渠道多样化的强烈诉求。
*   **容错与稳定性**: 针对长上下文导致的 Token 截断、工具调用死循环、项目路径变更后的会话丢失等问题，社区对鲁棒性有更高要求。

## 6. 开发者关注点
*   **"Question Tool" 体验灾难**: 多个 Issue 反馈 AI 提问时会完全遮挡对话历史，这迫使开发者在 PR #34116 中进行了紧急修复，这是目前 UX 层面最紧迫的痛点。
*   **多 Agent 会话管理**: 随着子代理功能的引入，如何清晰地查看和切换子任务成为新焦点，今日的 PR #34135 正是响应了这一需求。
*   **自定义模型集成困难**: Issue #6169 显示自定义提供商模型在 UI 中加载不全，表明第三方模型接入的兼容性测试仍是开发者的痛点。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-06-27)

## 1. 今日速览
今日 Qwen Code 发布了 v0.19.2 的 nightly 版本，主要修复了核心功能中的 JSON 回退问题，并更新了 CUA 驱动以支持相对坐标。社区焦点集中在**Windows 平台稳定性**与**资源管理**上，尤其是 Powershell 进程泄漏导致的 OOM 问题引发热烈讨论。此外，安全加固与后台自动化任务的改进也是今日开发的重点。

## 2. 版本发布
- **v0.19.2-nightly.20260627.d93bec905**
  - **核心修复**：修复了 `core` 模块中 `web_fetch` 的 JSON 回退逻辑 ([PR #5660](https://github.com/QwenLM/qwen-code/pull/5660))。
  - **发布记录**：由 CI Bot 自动发布，包含最新的代码提交。
- **cua-driver-rs v0.6.8**
  - **跨平台支持**：提供了 macOS (codesigned + notarized)、Linux (x86_64/arm64) 和 Windows 的预编译二进制文件。
  - **新功能**：启用了相对坐标支持，增强了跨平台 GUI 自动化能力。

## 3. 社区热点 Issues (Top 10)

1.  **[P1] Windows Powershell 进程泄漏导致 OOM ([#5873](https://github.com/QwenLM/qwen-code/issues/5873))**
    - **摘要**：用户反馈在 Windows 上每次工具调用都会开启一个新的 Powershell 进程且不关闭，最终导致内存溢出（OOM）。该问题复现率极高，引发了社区强烈反响，目前已被关闭（可能已修复或转为其他追踪）。
    - **重要性**：严重影响 Windows 用户的可用性，是近期稳定性修复的重点。

2.  **[Feature] 模式 B 生产就绪路线图 ([#4175](https://github.com/QwenLM/qwen-code/issues/4175))**
    - **摘要**：关于 `qwen serve` (Mode B) 的功能优先级路线图讨论，涉及 Daemon 重构、Session 多路复用等核心架构。
    - **重要性**：核心架构演进的关键追踪 Issue，决定了服务端模式的发展方向。

3.  **[Bug] TUI 卡死与僵尸进程问题 ([#5083](https://github.com/QwenLM/qwen-code/issues/5083))**
    - **摘要**：Linux 下 TUI 界面无响应，诊断发现是僵尸子进程未被回收所致。
    - **重要性**：涉及进程管理和会话生命周期的核心稳定性问题。

4.  **[Bug] 升级后模型参数被擅自修改导致资费异常 ([#5819](https://github.com/QwenLM/qwen-code/issues/5819))**
    - **摘要**：用户反馈升级版本后，配置文件中的模型被自动切换为高价模型，导致 Token 消耗异常。
    - **重要性**：涉及用户资产安全和配置管理，影响用户信任度。

5.  **[Feature] "Qwen Tag" 多人协作频道常驻 Agent ([#5887](https://github.com/QwenLM/qwen-code/issues/5887))**
    - **摘要**：提议实现类似 Claude Tag 的功能，支持多人通过 @ 召唤同一个共享 Agent 进行协作。
    - **重要性**：展示了社区对多用户协作场景的强烈需求。

6.  **[Bug] Cron 任务缺乏可见性与管理能力 ([#5823](https://github.com/QwenLM/qwen-code/issues/5823))**
    - **摘要**：`/loop` 创建的定时任务在后台静默运行，模型无法列出或停止这些任务，导致不可控的资源消耗。
    - **重要性**：自动化功能安全性的重要反馈。

7.  **[Feature] 允许调整 Agent 命令超时时间 ([#5838](https://github.com/QwenLM/qwen-code/issues/5838))**
    - **摘要**：用户希望能够自定义 Agent 执行命令的超时时间，以适应长耗时任务。
    - **重要性**：提升工具链对复杂任务的适应性。

8.  **[Security] Source 删除路径遍历漏洞 ([#5834](https://github.com/QwenLM/qwen-code/issues/5834))**
    - **摘要**：发现 Desktop 端的 source 删除接口存在路径遍历风险，可能越权删除工作区外文件。目前已关闭，相关修复已合入。
    - **重要性**：关键安全漏洞修复。

9.  **[Bug] MCP Server 显示已连接但工具不可用 ([#4218](https://github.com/QwenLM/qwen-code/issues/4218))**
    - **摘要**：Windows 上文件系统 MCP Server 连接成功但模型无法调用工具，涉及 MCP 协议在特定平台下的兼容性。
    - **重要性**：阻碍了外部工具集成的核心体验。

10. **[Bug] 默认 8K 输出上限导致大文件写入循环失败 ([#5756](https://github.com/QwenLM/qwen-code/issues/5756))**
    - **摘要**：默认的输出 Token 限制导致生成大型文件时被截断，进而触发失败重试循环。
    - **重要性**：涉及模型输出限制与工具调用的配合逻辑。

## 4. 重要 PR 进展 (Top 10)

1.  **[feat] Qwen Tag: 多人协作频道常驻 Agent ([#5888](https://github.com/QwenLM/qwen-code/pull/5888))**
    - **内容**：实现了基于钉钉等频道的多人协作 Agent 功能，支持“一个群一个共享助手”。
    - **意义**：扩展了 Qwen Code 的协作场景，向“Agentic Workflow”迈进。

2.  **[fix] Windows Source 路径安全校验 ([#5914](https://github.com/QwenLM/qwen-code/pull/5914))**
    - **内容**：强化了 Desktop 端 source slug 到文件路径的转换逻辑，防止路径遍历攻击。
    - **意义**：修复了关键的安全隐患。

3.  **[feat] 循环任务注入 .qwen/loop.md ([#5890](https://github.com/QwenLM/qwen-code/pull/5890))**
    - **内容**：为 `/loop` 任务增加了持久化的任务列表文件，允许用户在运行时编辑任务内容。
    - **意义**：解决了后台任务不可见、不可控的问题 ([Issue #5889](https://github.com/QwenLM/qwen-code/issues/5889))。

4.  **[feat] 可恢复的 ACP 会话流 ([#5852](https://github.com/QwenLM/qwen-code/pull/5852))**
    - **内容**：支持通过 `Last-Event-ID` 恢复中断的会话流，增强了 Daemon 模式的连接稳定性。
    - **意义**：提升了服务端模式的鲁棒性。

5.  **[fix] 交互式 Shell 超时前警告 ([#5918](https://github.com/QwenLM/qwen-code/pull/5918))**
    - **内容**：在交互式命令即将超时（最后 15 秒）时显示警告，提示用户可转为后台运行。
    - **意义**：优化了用户体验，避免任务意外中断。

6.  **[fix] 屏蔽 Schema 未知格式警告 ([#5915](https://github.com/QwenLM/qwen-code/pull/5915))**
    - **内容**：消除了 Ajv 校验器对 MCP/OpenAPI 自定义格式的重复警告噪音。
    - **意义**：清理了终端输出干扰，提升了易用性。

7.  **[feat] Web Shell 代码块流式高亮 ([#5869](https://github.com/QwenLM/qwen-code/pull/5869))**
    - **内容**：实现了代码块在流式输出过程中的实时语法高亮，解决了闪烁问题。
    - **意义**：显著提升了 Web 端的交互体验。

8.  **[feat] 运行时上下文注入 ([#5847](https://github.com/QwenLM/qwen-code/pull/5847))**
    - **内容**：增加了 RuntimeContext 存储，允许外部调用者在每轮对话中注入系统提示。
    - **意义**：为 SDK 和 Daemon 模式提供了更灵活的扩展能力。

9.  **[feat] 本地模型禁用后续建议 ([#5821](https://github.com/QwenLM/qwen-code/pull/5821))**
    - **内容**：针对 localhost 的 OpenAI 兼容后端，默认关闭 UI 的后续建议功能。
    - **意义**：优化了本地模型的使用体验，减少不必要的计算开销。

10. **[feat] 添加 Vision 模型回退配置 ([#5778](https://github.com/QwenLM/qwen-code/pull/5778))**
    - **内容**：允许通过 `/model --vision` 配置专用的视觉模型，当文本模型收到图片时自动切换。
    - **意义**：增强了多模态处理的灵活性。

## 5. 功能需求趋势

1.  **稳定性与资源管理**
    - Windows 平台的进程管理和内存泄漏是当前最大的痛点。
    - 长时间运行任务的会话恢复和内存优化需求强烈。

2.  **自动化与后台任务**
    - 社区迫切需要对 `/loop` 等后台任务的可视化管理。
    - 多人协作 Agent（Qwen Tag）成为新的关注热点。

3.  **安全性与配置安全**
    - 路径遍历、凭证缓存安全等“纵深防御”相关的修复频繁。
    - 用户对自动修改模型配置导致资费异常的行为高度敏感。

## 6. 开发者关注点

- **Windows 兼容性**：Powershell 进程泄漏和僵尸进程问题表明 Windows 平台的进程管理机制仍需深度优化。
- **Token 消耗控制**：模型自动切换和输出截断逻辑引发了用户对成本的担忧，开发者需在设计默认行为时更加谨慎。
- **可观测性**：无论是后台任务还是 MCP 工具调用，开发者都希望有更清晰的日志和状态反馈（如 #5897 中的日志噪音清理和 #5918 的超时提示）。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 (2026-06-27)

## 1. 今日速览
今日社区核心动向集中在 **架构升级** 与 **模型生态扩展**。开发团队重点推进了 Moraine 记忆后端的集成工作，旨在为 Agent 提供长期记忆支持；同时新增了对 **OpenModel 提供商** 的原生支持，并默认配置接入 `deepseek-v4-flash` 模型。此外，关键的安装脚本故障与编辑器崩溃问题已得到快速修复，显著提升了新用户的接入体验。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues (Top 10)

1.  **[OPEN] #3582 安装脚本端点返回 HTML 导致安装失败**
    *   **重要性**：严重级别 Bug，阻碍新用户安装。
    *   **内容**：官方文档推荐的 `curl | sh` 安装方式因端点返回 HTML 页面而非 Shell 脚本而失败。
    *   **链接**：[Hmbown/CodeWhale Issue #3582](https://github.com/Hmbown/CodeWhale/issues/3582)

2.  **[OPEN] #3657 编辑器冻结导致应用崩溃**
    *   **重要性**：严重影响 TUI 核心交互体验。
    *   **内容**：用户在 Composer 模式下打开编辑器时，整个应用冻结，需强制杀死进程恢复。该问题影响日常开发流程。
    *   **链接**：[Hmbown/CodeWhale Issue #3657](https://github.com/Hmbown/CodeWhale/issues/3657)

3.  **[OPEN] #3495 v0.8.66: 采用 Moraine 作为记忆后端**
    *   **重要性**：下一代架构核心功能。
    *   **内容**：计划集成 Moraine 项目作为 Agent 的长期记忆后端，支持无损会话持久化与 MCP 回调工具，将显著增强 Agent 的上下文能力。
    *   **链接**：[Hmbown/CodeWhale Issue #3495](https://github.com/Hmbown/CodeWhale/issues/3495)

4.  **[OPEN] #3638 暴露主提示词以支持更多用例**
    *   **重要性**：社区对可定制性的强需求。
    *   **内容**：用户希望将 TUI 扩展至文学创作等非编程场景，建议将硬编码的提示词文件改为可配置链接，以便自定义 Agent 人格。
    *   **链接**：[Hmbown/CodeWhale Issue #3638](https://github.com/Hmbown/CodeWhale/issues/3638)

5.  **[OPEN] #3407 v0.8.67: 工具、MCP 与插件设置向导**
    *   **重要性**：降低高级功能配置门槛。
    *   **内容**：现有的 MCP 服务器和插件配置分散，计划引入统一的 Setup Wizard 步骤，自动发现并安全验证环境。
    *   **链接**：[Hmbown/CodeWhale Issue #3407](https://github.com/Hmbown/CodeWhale/issues/3407)

6.  **[OPEN] #2870 EPIC: 命令边界重构**
    *   **重要性**：大规模代码重构计划。
    *   **内容**：为了解耦架构，追踪 #2791 相关的重构层，旨在优化 TUI 的命令边界处理。
    *   **链接**：[Hmbown/CodeWhale Issue #2870](https://github.com/Hmbown/CodeWhale/issues/2870)

7.  **[OPEN] #3490 v0.8.71: 遗留代码清理**
    *   **重要性**：代码库健康度维护。
    *   **内容**：清理 `allow(dead_code)` 标记和过时的 "follow-up" 注释，为 v0.9 版本架构扩展做准备。
    *   **链接**：[Hmbown/CodeWhale Issue #3490](https://github.com/Hmbown/CodeWhale/issues/3490)

8.  **[OPEN] #2967 Telegram 桥接：流处理与韧性加固**
    *   **重要性**：集成功能的稳定性提升。
    *   **内容**：针对 Telegram 桥接进行生产级加固，包括进度编辑、MarkdownV2 支持及重试机制等。
    *   **链接**：[Hmbown/CodeWhale Issue #2967](https://github.com/Hmbown/CodeWhale/issues/2967)

9.  **[CLOSED] #2612 Composer: IME 输入法占位符遮挡问题**
    *   **重要性**：修复中日韩用户输入体验。
    *   **内容**：修复了在 IME 输入（拼音/假名等）时，占位符文本遮挡输入 UI 的问题。
    *   **链接**：[Hmbown/CodeWhale Issue #2612](https://github.com/Hmbown/CodeWhale/issues/2612)

10. **[CLOSED] #1490 app-server --stdio 线程消息流缺失**
    *   **重要性**：第三方集成接口修复。
    *   **内容**：修复了 `--stdio` 模式下 `thread/message` 未流式返回模型输出的问题。
    *   **链接**：[Hmbown/CodeWhale Issue #1490](https://github.com/Hmbown/CodeWhale/issues/1490)

## 4. 重要 PR 进展 (Top 10)

1.  **[OPEN] #3575 feat(memory): 接入 Moraine MCP 作为召回工具源**
    *   **内容**：实现 Issue #3495 的核心功能，将 Moraine 集成为默认的记忆召回工具，并增加配置门控。
    *   **链接**：[Hmbown/CodeWhale PR #3575](https://github.com/Hmbown/CodeWhale/pull/3575)

2.  **[CLOSED] #3677 feat(provider): 增加 OpenModel 支持**
    *   **内容**：合并自 #3585，新增 OpenModel 作为一级提供商，使用 Anthropic 协议并默认指向 `deepseek-v4-flash` 模型。
    *   **链接**：[Hmbown/CodeWhale PR #3677](https://github.com/Hmbown/CodeWhale/pull/3677)

3.  **[OPEN] #3681 fix(memory): 完成 Moraine 回退门控逻辑**
    *   **内容**：重构 PR #3584，确保在 Moraine 不可用时能够优雅回退，并在上下文中一致地忽略旧版 memory 标签。
    *   **链接**：[Hmbown/CodeWhale PR #3681](https://github.com/Hmbown/CodeWhale/pull/3681)

4.  **[CLOSED] #3678 docs: 增加 WeCom (企业微信) 桥接部署指南**
    *   **内容**：补充了企业微信桥接的部署架构与安全边界文档，完善了多端集成生态。
    *   **链接**：[Hmbown/CodeWhale PR #3678](https://github.com/Hmbown/CodeWhale/pull/3678)

5.  **[CLOSED] #3675 build(deps): 升级 rusqlite 至 0.39.0**
    *   **内容**：关键依赖升级，解决了 Dependabot 自动升级导致的编译问题，提升数据库层稳定性。
    *   **链接**：[Hmbown/CodeWhale PR #3675](https://github.com/Hmbown/CodeWhale/pull/3675)

6.  **[CLOSED] #3673 fix(hash): 支持 sha2 0.11 digest hex**
    *   **内容**：配合 sha2 库升级，修复了摘要输出格式，确保跨组件的哈希计算一致性。
    *   **链接**：[Hmbown/CodeWhale PR #3673](https://github.com/Hmbown/CodeWhale/pull/3673)

7.  **[CLOSED] #3674 refactor(runtime-api): 提取认证辅助函数**
    *   **内容**：代码重构，将认证逻辑从主路由文件中剥离，提升了移动端 Cookie 流程与 Token 认证的代码可维护性。
    *   **链接**：[Hmbown/CodeWhale PR #3674](https://github.com/Hmbown/CodeWhale/pull/3674)

8.  **[OPEN] #3607 chore: 重启过期 Issue 自动清理**
    *   **内容**：引入 GitHub Action 工作流，自动标记和清理标记为 `needs-info` 的过期 Issue，保持 Issue 列表整洁。
    *   **链接**：[Hmbown/CodeWhale PR #3607](https://github.com/Hmbown/CodeWhale/pull/3607)

9.  **[CLOSED] #3679 ci: 重试 OHOS 依赖图探测**
    *   **内容**：CI/CD 改进，针对 OHOS 平台的依赖探测增加了重试机制，解决偶发的构建失败。
    *   **链接**：[Hmbown/CodeWhale PR #3679](https://github.com/Hmbown/CodeWhale/pull/3679)

10. **[OPEN] #3680 docs: 修复贡献指南中的陈旧文件路径**
    *   **内容**：修正了 `CONTRIBUTING.md` 中失效的命令路径，降低新贡献者的上手难度。
    *   **链接**：[Hmbown/CodeWhale PR #3680](https://github.com/Hmbown/CodeWhale/pull/3680)

## 5. 功能需求趋势

*   **记忆系统架构升级**：社区与开发团队正集中精力将记忆后端从简单的本地存储迁移至 Moraine 架构，这表明“长期记忆”和“上下文连续性”是下一阶段 AI 编程工具的核心竞争力。
*   **模型接入灵活性**：通过新增 OpenModel 支持，项目正在打破单一模型限制，用户对接入自定义模型端点（特别是 DeepSeek V4 系列）的需求强烈。
*   **多端集成部署**：从 Telegram 桥接到企业微信（WeCom）部署文档的完善，显示用户不仅限于在终端使用，更希望将 AI 助手嵌入到日常通讯和协作流中。

## 6. 开发者关注点

*   **稳定性与体验**：开发者对 TUI 编辑器的崩溃（#3657）和 IME 输入遮挡（#2612）反馈强烈，说明作为核心交互界面的 TUI，其流畅度和输入法兼容性是用户留存的关键。
*   **安装流程的健壮性**：安装脚本返回 HTML 的 Bug（#3582）被迅速关闭和修复，显示了维护者对新用户引导体验的高度重视。
*   **定制化能力**：高级用户希望突破预设的编程助手限制，将工具用于文学创作等场景（#3638），这暴露了当前 Prompt 配置的灵活性不足，提示词解耦将是未来的改进方向。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*