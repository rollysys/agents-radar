# AI CLI 工具社区动态日报 2026-07-11

> 生成时间: 2026-07-11 02:49 UTC | 覆盖工具: 8 个

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

# AI CLI 工具生态横向对比分析报告 (2026-07-11)

## 1. 生态全景
AI CLI 工具生态正处于从"辅助对话"向"自主代理"转型的深水区。头部工具普遍接入了 GPT-5.5/5.6 和 Claude Opus 等最新强模型，但随之而来的 **Agent 资源失控**（递归死循环、Token 消耗爆炸）和 **Windows 平台兼容性** 成为全行业痛点。各厂商开始在架构层面寻求突破，如 Qwen Code 和 DeepSeek TUI 重构多工作区架构，OpenAI 和 Gemini 则在底层安全与 Hooks 机制上频繁迭代，标志着 CLI 工具正从单点提效工具进化为需要严格治理的企业级研发基础设施。

## 2. 各工具活跃度对比

| 工具名称 | 今日版本动态 | 关键 Issues 数量 | 关键 PR 数量 | 核心焦点 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **v2.1.207** (Auto模式默认化) | 10 (高热度) | 6 | Agent 资源管控、Windows 兼容性 |
| **OpenAI Codex** | Rust SDK v0.145.0-alpha.4 | 10 (热议) | 10 | GPT-5.6 模型适配、推理 Token 异常 |
| **Gemini CLI** | 无 | 10 (企业阻断) | 10 (安全修复) | 性能挂起、企业认证逻辑、安全漏洞 |
| **GitHub Copilot** | **v1.0.71-0** | 10 | 1 | TUI 稳定性 (WSL/Win)、模型推理降级 |
| **Kimi Code CLI** | 无 | 0 | 4 | Web 端兼容性、初始化体验优化 |
| **OpenCode** | 无 | 10 | 10+ (高频) | V2 架构重构、GPT-5.6 适配、剪贴板修复 |
| **Qwen Code** | **v0.19.9** | 10 | 10+ | 多工作区架构、Web Shell 体验 |
| **DeepSeek TUI** | 无 (发布前夕) | 10 | 10+ | Fleet/Workflow 架构、安全审计 CI |

## 3. 共同关注的功能方向

1.  **Agent 资源管控与安全边界**
    *   **涉及工具**: Claude Code, Gemini CLI, DeepSeek TUI, OpenAI Codex。
    *   **具体诉求**: Claude Code 社区强烈抗议子 Agent 递归失控和后台任务无法取消；Gemini CLI 紧急修复了路径遍历漏洞和递归推理死循环；DeepSeek TUI 引入了严格的 CI 安全审计。这表明随着 Agent 自主权增强，**"失控"已成为核心风险**，限流、超时熔断和沙箱隔离成为刚需。

2.  **Windows 平台体验对齐**
    *   **涉及工具**: Claude Code, OpenAI Codex, GitHub Copilot CLI, OpenCode。
    *   **具体诉求**: Claude Code 的 Cowork 功能缺失、Codex 导致系统冻结、Copilot TUI 黑屏卡死。Windows 端的稳定性显著落后于 macOS/Linux，成为阻碍普及的普遍短板。

3.  **多模型支持与 BYOK (Bring Your Own Key)**
    *   **涉及工具**: OpenAI Codex, OpenCode, GitHub Copilot CLI。
    *   **具体诉求**: 开发者要求更灵活的模型切换能力，如 Codex 用户希望子代理能独立配置模型，Copilot 用户希望本地模型与会话解耦。这反映了用户不愿被单一模型供应商绑定，追求成本与能力的最佳平衡。

## 4. 差异化定位分析

*   **Claude Code**: **企业级 Auto Pilot 的激进派**。率先默认启用 Auto 模式，试图打造全自动开发体验，但当前受困于"油门踩到底"带来的资源失控问题，适合敢于尝鲜但需关注账单的高端用户。
*   **OpenAI Codex**: **前沿模型技术验证场**。紧密集成 GPT-5.5/5.6，Issues 集中在模型推理逻辑本身的缺陷（如 Token 聚集），适合追求最强模型智力边界的开发者。
*   **Gemini CLI**: **企业集成与安全的修理工**。今日重心在于修复严重的认证阻断和底层安全漏洞，处于补齐短板的阶段，但在 MCP 协议文档化方面较为领先。
*   **Qwen Code & OpenCode**: **架构创新的敏捷力量**。Qwen Code 领跑"多工作区"架构，OpenCode 快速跟进 GPT-5.6 支持。它们迭代极快，在功能灵活性上甚至超越了头部厂商，适合极客和开源社区爱好者。
*   **DeepSeek TUI (CodeWhale)**: **严谨的工程化实践者**。在发布 v0.8.68 前夜，重点放在 Fleet/Lane 编排模型和安全审计上，强调流程规范与架构清晰，适合重视工程化的专业团队。

## 5. 社区热度与成熟度

*   **最活跃且争议最大**: **OpenAI Codex** 与 **Claude Code**。前者因新模型推理异常引发热议，后者因 Auto 模式资源管控问题引发恐慌。两者代表了当前 AI CLI 的最高智力水平，但也暴露了最为棘手的稳定性问题。
*   **架构演进最快**: **Qwen Code** 与 **OpenCode**。单日 PR 数量多且质量高，涉及核心传输层重构，显示出极高的技术活力。
*   **相对沉寂/维护期**: **Kimi Code CLI**。今日无新 Issue，PR 集中在 Web 端细节体验，可能处于大版本间的维护期或功能储备期。
*   **发布前冲刺**: **DeepSeek TUI**。密集的架构定义与 Stopship Issue 修复，表明其正处在重大版本发布的临门一脚阶段。

## 6. 值得关注的趋势信号

1.  **"Daemon 化"与多工作区架构兴起**
    *   Qwen Code 的 RFC 和 DeepSeek TUI 的 Workflow 架构显示，CLI 正在从一个简单的命令行对话工具，转变为**常驻后台、管理多项目上下文的 Daemon 服务**。开发者需要的是跨会话、跨项目的全局 Agent，而非一次性的 REPL。

2.  **推理成本的不可观测性引发焦虑**
    *   Codex 的 Token 聚集问题和 Claude 的递归消耗问题，揭示了新模型的高智力往往伴随着不可控的成本。未来的 CLI 工具必须具备**细粒度的 Budget Control（预算控制）**和实时 Token 计费仪表盘，否则将在企业场景中遇冷。

3.  **安全左移成为内置属性**
    *   Gemini CLI 和 DeepSeek TUI 分别在代码层面和 CI 流程中强化了安全。随着 Agent 拥有执行 Shell 和修改文件的能力，**Prompt 注入防护、路径遍历防御**不再是可选项，而是工具能否进入生产环境的准入证。

4.  **Web Shell 正在反超原生 TUI**
    *   Qwen Code 和 Kimi Code 对 Web 端的投入，以及 Copilot 的 Dashboard 改进，表明纯粹的终端 TUI 在多模态、复杂交互上有局限性。**Web-first 的管理界面 + CLI-first 的执行后端**可能成为主流形态。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告 (2026-07-11)

基于 GitHub 官方仓库数据分析，以下是社区最关注的动态。

## 1. 热门 Skills 排行

以下 PR 代表了社区近期最活跃的贡献方向，主要集中在**工具链修复**、**文档增强**及**元技能开发**。

| 排名 | Skill / PR 名称 | 功能说明 | 状态 | 热点分析 |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **[fix(skill-creator): run_eval.py always reports 0% recall](https://github.com/anthropics/skills/pull/1298)** | 修复 `skill-creator` 评估脚本在 Windows 下的流读取与触发检测问题，解决召回率恒为 0% 的核心 Bug。 | **OPEN** | 这是目前最关键的修复 PR。关联 Issue #556，直接决定了 Skill 描述优化的可行性。修复了跨平台兼容性（Windows）和并行 Worker 问题，是生态工具链的基石。 |
| **2** | **[Add document-typography skill](https://github.com/anthropics/skills/pull/514)** | 为 AI 生成的文档提供排版质量控制，防止孤行、寡行及编号错位。 | **OPEN** | 针对高频痛点。AI 生成的文档常忽视排版美学，该 Skill 填补了“内容生成后”的格式化空白，具有极高的实用价值。 |
| **3** | **[Add ODT skill](https://github.com/anthropics/skills/pull/486)** | 支持 OpenDocument 格式（.odt, .ods）的创建、模板填充及 HTML 转换。 | **OPEN** | 填补了开源办公文档格式的空白，响应了对非微软生态（LibreOffice/ISO 标准）的支持需求。 |
| **4** | **[feat(skills): add self-audit](https://github.com/anthropics/skills/pull/1367)** | 一个“四维推理审计”Skill，在交付 AI 产出前进行机械验证与质量门控。 | **OPEN** | 代表了“元技能”趋势——用 Skill 检查 Skill 的产出。强调通用性与落地前的安全性检查，反映了社区对 AI 输出质量的担忧。 |
| **5** | **[Add skill-quality-analyzer & security-analyzer](https://github.com/anthropics/skills/pull/83)** | 向 Marketplace 添加两个元分析 Skill，用于评估 Skill 的质量与安全性。 | **OPEN** | 早期但重要的尝试，试图建立 Skill 自身的质量标准。涵盖结构、文档、安全漏洞扫描等维度。 |
| **6** | **[Improve frontend-design skill](https://github.com/anthropics/skills/pull/210)** | 重构前端设计 Skill，提升指令的可执行性与清晰度。 | **OPEN** | 针对现有热门 Skill 的优化。解决了原有指令过于抽象、难以在单次对话中落地的问题。 |
| **7** | **[feat: add testing-patterns skill](https://github.com/anthropics/skills/pull/723)** | 全面的测试模式 Skill，涵盖单元测试、React 组件测试及测试哲学。 | **OPEN** | 面向开发者的硬需求，补全了 Coding 场景下的测试环节，符合“AI 辅助工程化”的趋势。 |
| **8** | **[fix(skill-creator): Windows subprocess + encoding bugs](https://github.com/anthropics/skills/pull/1050)** | 修复 Windows 平台下 `run_loop.py` 的路径查找与编码错误。 | **OPEN** | 再次印证了 Windows 兼容性是当前工具链的一大痛点，社区正在积极修补这一鸿沟。 |

---

## 2. 社区需求趋势

从高讨论量的 Issues 中，提炼出社区最期待的三个发展方向：

### ① 安全与信任机制
*   **核心诉求：** 社区强烈呼吁解决 Skills 的信任边界问题。Issue **#492** (34条评论) 指出，社区 Skill 以 `anthropic/` 命名空间分发，导致用户无法区分官方与第三方 Skill，存在越权风险。
*   **期待方向：** 引入签名机制、命名空间隔离或明确的“官方认证”标识。

### ② 企业级协作与共享
*   **核心诉求：** Issue **#228** (14条评论) 提议支持组织内部 Skill 共享。
*   **期待方向：** 目前通过文件导入的方式过于原始，企业用户急需“Skill 库”或一键分享链接功能，以便在团队内标准化工作流。

### ③ 稳定的开发工具链
*   **核心诉求：** 多个 Issues (如 **#556**, **#1169**, **#1061**) 反馈 `skill-creator` 的评估脚本在 Windows 下崩溃、召回率计算错误等问题。
*   **期待方向：** 社区需要可靠的 Skill 开发与评估工具，特别是在跨平台兼容性（Windows vs Unix）上的支持。

---

## 3. 高潜力待合并 Skills (High-Potential Pending PRs)

以下 PR 虽处于 Open 状态，但解决了关键痛点或提供了重要功能，具备较高合并潜力：

*   **[PR #1298: fix(skill-creator) Windows & Eval fixes](https://github.com/anthropics/skills/pull/1298)**
    *   **理由：** 解决了 Skill 创建流程中“召回率为 0”的致命 Bug (#556)，直接影响 Skill 优化功能的可用性。该 PR 修复了底层流处理逻辑，是工具链修复的优先项。
*   **[PR #486: Add ODT skill](https://github.com/anthropics/skills/pull/486)**
    *   **理由：** ODT 是国际标准格式，填补了文档处理生态的重要拼图。PR 持续活跃，无竞争对手，是文档类 Skill 的自然延伸。
*   **[PR #514: Add document-typography](https://github.com/anthropics/skills/pull/514)**
    *   **理由：** 解决了 AI 生成文档的“最后一公里”问题（排版），具有较高的实用价值和用户粘性。
*   **[PR #210: Improve frontend-design](https://github.com/anthropics/skills/pull/210)**
    *   **理由：** 对现有高频使用的 Skill 进行了质量优化，符合“Better Defaults”的理念，讨论区反馈正面。

---

## 4. Skills 生态洞察

**当前社区核心诉求：从“功能实现”转向“生产可用”。**

社区不再仅仅满足于 Skill 的有无，而是集中火力解决**跨平台兼容性**、**输出质量审计**以及**企业级安全治理**问题，标志着 Claude Code Skills 正从极客尝鲜阶段迈向工程化落地阶段。

---

# Claude Code 社区动态日报 (2026-07-11)

## 1. 今日速览
Claude Code 发布 **v2.1.207** 版本，宣布 Auto 模式在 Bedrock、Vertex AI 和 Foundry 平台结束灰度，正式默认启用，同时修复了长文本输出时的终端卡顿问题。社区今日重点关注 **Agent 资源管控问题**，多项高热度 Issue 报告了子 Agent 递归失控、后台任务无法取消导致 Token 耗尽以及日志文件无限增长填满磁盘等严重故障。Windows 平台的兼容性依然是开发者反馈的痛点。

## 2. 版本发布
**v2.1.207**
- **Auto 模式默认化**：Bedrock、Vertex AI 和 Foundry 用户现无需手动开启 `CLAUDE_CODE_ENABLE_AUTO_MODE` 即可使用 Auto 模式，也可通过设置 `disableAutoMode` 关闭。
- **性能修复**：解决了在流式传输包含超长列表、表格或段落的响应时，终端冻结和按键延迟的问题。

## 3. 社区热点 Issues (Top 10)

1.  **[#69238](https://github.com/anthropics/claude-code/issues/69238) [BUG] Advisor 触发时 API 无响应**
    - **热度**：👍 76 | 💬 47
    - **简述**：macOS 平台 TUI 模式下，当 Advisor 功能触发时（特别是使用 Opus 4.8），频繁出现 "No response from API" 错误并导致长时间重试，严重影响工作流。
    - **社区反应**：这是今日评论数最高的 Issue，表明 Advisor 机制的稳定性是当前用户的核心痛点。

2.  **[#74649](https://github.com/anthropics/claude-code/issues/74649) [BUG] Cowork 在 Windows 11 Pro 上不可用**
    - **热度**：💬 43
    - **简述**：Windows 11 Pro 环境下提示缺失 HCS 服务 (vfpext)，导致 Cowork 功能完全无法运行。
    - **社区反应**：Windows 用户的普遍痛点，评论区聚集了大量受影响的开发者。

3.  **[#14828](https://github.com/anthropics/claude-code/issues/14828) [BUG] Windows 工具执行时控制台窗口闪烁**
    - **热度**：👍 33 | 💬 40
    - **简述**：长期存在的问题，在 Windows 上执行工具时会有烦人的控制台窗口闪烁。
    - **社区反应**：该 Issue 已存在半年多，今日再次活跃，说明 Windows 端用户体验优化仍需加强。

4.  **[#10065](https://github.com/anthropics/claude-code/issues/10065) [BUG] 桌面端长多步任务无警告丢弃/回滚**
    - **热度**：💬 23
    - **简述**：执行长耗时多步任务时，Claude Desktop 经常无预警地回滚或丢弃进度，造成重复劳动。
    - **社区反应**：属于影响生产力的严重缺陷，用户呼吁增加更健壮的状态保存机制。

5.  **[#68110](https://github.com/anthropics/claude-code/issues/68110) Agent 递归生成子 Agent 导致 Token 指数级消耗**
    - **热度**：💬 10
    - **简述**：General-purpose Agent 在执行研究任务时，能够递归调用自身生成子 Agent，且无深度限制，导致 Token 消耗呈指数级爆炸。
    - **重要性**：这是一个严重的成本和安全风险，Agent 缺乏必要的自我限制机制。

6.  **[#41737](https://github.com/anthropics/claude-code/issues/41737) 任务输出文件无限增长填满磁盘 (278 GB)**
    - **热度**：💬 7
    - **简述**：任务输出日志文件未设大小限制，曾有用户在几分钟内产生 278GB 日志，导致系统盘空间耗尽。
    - **重要性**：严重的资源管理缺陷，可能导致系统崩溃。

7.  **[#21167](https://github.com/anthropics/claude-code/issues/21167) ESC 键误杀所有后台任务**
    - **热度**：👍 9 | 💬 7
    - **简述**：按 ESC 键会立即杀死所有正在运行的后台任务和子 Agent，不支持选择性终止，严重影响并行工作流。
    - **重要性**：交互设计缺陷，无法精细化管理后台任务。

8.  **[#66005](https://github.com/anthropics/claude-code/issues/66005) `--resume` 导致 session 的 `--effort` 级别丢失**
    - **热度**：💬 6
    - **简述**：恢复会话时未保留原始的 effort 设置，导致 Prompt Cache 失效，增加不必要的成本。
    - **重要性**：影响成本控制和会话连续性。

9.  **[#75314](https://github.com/anthropics/claude-code/issues/75314) 后台 Agent 任务卡死 34+ 小时，消耗百万 Token**
    - **热度**：💬 5
    - **简述**：后台任务陷入死循环无法取消，长时间运行导致巨额 Token 消耗。
    - **重要性**：缺乏有效的任务超时和强制终止机制。

10. **[#69970](https://github.com/anthropics/claude-code/issues/69970) PreToolUse:Bash 钩子失效**
    - **热度**：👍 4 | 💬 3
    - **简述**：v2.1.176 版本后，注册的 Bash 工具前置钩子不再被触发，安全审查机制失效。
    - **重要性**：安全相关功能的回归 Bug。

## 4. 重要 PR 进展 (共 6 条)

1.  **[#41447](https://github.com/anthropics/claude-code/pull/41447) feat: 开源 Claude Code**
    - **简述**：社区开发者提交的旨在开源 Claude Code 的提案，目前处于 Open 状态，引发了对开源协议和核心架构的讨论。

2.  **[#76475](https://github.com/anthropics/claude-code/pull/76475) Flag innerHTML/outerHTML += append sink in security-guidance**
    - **简述**：增强了安全指南插件，修复了 XSS 检测规则遗漏 `innerHTML +=` 这类追加操作的漏洞。

3.  **[#76394](https://github.com/anthropics/claude-code/pull/76394) Add Claude Code Launcher - Windows CLI Application**
    - **简述**：为 Windows 平台引入了一个完整的 CLI 启动器，包含 14 个交互菜单选项，旨在改善 Windows 用户的命令行体验。

4.  **[#76298](https://github.com/anthropics/claude-code/pull/76298) docs: document Remote Control background-task panel**
    - **简述**：文档更新，记录了 v2.1.205 引入的 Web/Mobile 端后台任务面板及状态同步行为。

5.  **[#76289](https://github.com/anthropics/claude-code/pull/76289) examples/hooks: demonstrate compound-command pre-flight**
    - **简述**：扩展了 Bash 命令验证器示例，增加了对复合命令（如 `;`, `&&`, `||`）和管道的检测逻辑，提升了 Hook 的安全性示例。

6.  **[#76274](https://github.com/anthropics/claude-code/pull/76274) security-guidance: resolve review paths against the repo root**
    - **简述**：修复了安全指南插件在处理 diff 路径时未相对于仓库根目录解析的问题，并加固了 findings 数组的契约。

## 5. 功能需求趋势
- **Agent 资源管控与安全边界**：今日最显著的趋势。社区强烈要求限制 Agent 的递归深度 (#68110)、日志文件大小 (#41737) 以及提供强制停止后台任务的能力 (#75314, #21167)。Agent 的 "Autonomy" 与 "Control" 之间的平衡是当前的核心矛盾。
- **Windows 平台体验对齐**：Cowork 服务缺失 (#74649)、控制台闪烁 (#14828) 等 Issue 热度不减，表明 Windows 版本的稳定性与功能完整度显著落后于 macOS/Linux。
- **会话持久化与配置保留**：用户对 `--resume` 丢失配置 (#66005) 和长任务状态丢失 (#10065) 的反馈，显示出对长时间、跨会话工作流稳定性的迫切需求。

## 6. 开发者关注点
- **Auto Mode 的实际表现**：随着 Auto Mode 默认化，开发者开始关注其带来的隐性成本增加和行为不可控风险。
- **成本可观测性**：后台任务烧 Token (#75314) 和递归调用 (#68110) 让开发者对账单感到担忧，呼吁增加更细粒度的预算熔断机制。
- **Hook 系统可靠性**：PreToolUse 钩子静默失效 (#69970) 是一个危险信号，开发者依赖该机制进行安全审计，任何回归都可能导致严重的后果。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-07-11)

## 1. 今日速览
今日社区关注焦点集中在 **GPT-5.5/5.6 新模型的推理异常**与**Windows 平台的稳定性**上。Issue #30364 曝光了 GPT-5.5 在特定 token 阈值下的推理性能降级问题，引发热议；同时，GPT-5.6 Sol 被指存在强制子代理模型配置的 Bug。Windows 客户端在沙箱启动、UI 冻结及浏览器功能上反馈了大量缺陷。官方在 PR 侧响应迅速，重点推进了 GPT-5.6 Sol 作为 Bedrock 默认模型的设置，并优化了文件系统性能与 Hooks 信任机制。

---

## 2. 版本发布
- **Rust SDK v0.145.0-alpha.4**
  - 延续了 v0.145.0-alpha.3 的快速迭代，显示出 Rust SDK 端正在进行频繁的功能调整或修复。
  - 链接: [openai/codex Releases](https://github.com/openai/codex/releases)

---

## 3. 社区热点 Issues (Top 10)

1.  **[模型行为] GPT-5.5 推理 token 聚集导致性能下降** `#30364`
    - **为何重要**: 社区发现 GPT-5.5 的 `reasoning_output_tokens` 在 516/1034/1552 等固定边界出现异常聚集，怀疑模型内部截断或计算逻辑存在问题，直接影响复杂任务质量。
    - **社区反应**: 评论数达 183 条，点赞 284，是目前最活跃的 Issue。
    - 链接: [openai/codex Issue #30364](https://github.com/openai/codex/issues/30364)

2.  **[配置缺陷] GPT-5.6 Sol 无法指定子代理模型** `#31814`
    - **为何重要**: 新模型 GPT-5.6 Sol 强制所有子代理也使用 Sol 实例，忽略了用户自定义模型配置，阻碍了 MultiAgent 架构的灵活性。
    - **社区反应**: 评论 34 条，点赞 85，开发者对此设计表示强烈困惑。
    - 链接: [openai/codex Issue #31814](https://github.com/openai/codex/issues/31814)

3.  **[功能请求] CLI 增加设置以禁用“60秒自动解决”问题** `#28969`
    - **为何重要**: 用户希望 CLI 在遇到提问时不要自动超时解决，以便有更多时间思考或输入，这是影响工作流的关键体验问题。
    - **社区反应**: 获得 104 个点赞，需求强烈。
    - 链接: [openai/codex Issue #28969](https://github.com/openai/codex/issues/28969)

4.  **[Windows 严重 Bug] Codex App 导致系统频繁冻结/卡顿** `#20214`
    - **为何重要**: 尽管系统资源充足，Windows 11 Pro 上 Codex 仍导致 UI 冻结，严重影响可用性。
    - **社区反应**: 评论 32 条，多用户确认存在类似问题。
    - 链接: [openai/codex Issue #20214](https://github.com/openai/codex/issues/20214)

5.  **[Windows 启动失败] 原生沙箱设置助手模块缺失** `#28982`
    - **为何重要**: 更新后 Windows 应用启动沙箱失败，提示“找不到指定模块”，阻塞了部分用户的正常使用。
    - 链接: [openai/codex Issue #28982](https://github.com/openai/codex/issues/28982)

6.  **[macOS 稳定性] Computer Use 启动崩溃 (Swift 符号缺失)** `#32032`
    - **为何重要**: macOS 15.7.7 上 Computer Use 功能因运行时符号解析失败而无法启动，属于严重的兼容性问题。
    - 链接: [openai/codex Issue #32032](https://github.com/openai/codex/issues/32032)

7.  **[本地模型] CLI 0.133.0 破坏了 Ollama 本地提供商的子代理生成** `#24069`
    - **为何重要**: 回归问题导致本地 Ollama 用户无法正常使用子代理功能，影响开源模型集成体验。
    - 链接: [openai/codex Issue #24069](https://github.com/openai/codex/issues/24069)

8.  **[企业环境] Browser Use 被网络策略拦截** `#24814`
    - **为何重要**: 企业网络环境下应用内浏览器功能受限，即使是访问 example.com 也被拦截，限制了办公场景的使用。
    - 链接: [openai/codex Issue #24814](https://github.com/openai/codex/issues/24814)

9.  **[远程控制] 移动端错误屏蔽 Codex Cloud** `#30417`
    - **为何重要**: 移动端应用错误地将 Codex Cloud 功能与远程控制权限绑定，导致用户无法访问云端资源。
    - 链接: [openai/codex Issue #30417](https://github.com/openai/codex/issues/30417)

10. **[UI 故障] Windows 桌面端长对话滚动时文字闪烁重叠** `#32016`
    - **为何重要**: 最新版本 (26.707.x) 的 UI 渲染问题影响阅读体验。
    - 链接: [openai/codex Issue #32016](https://github.com/openai/codex/issues/32016)

---

## 4. 重要 PR 进展 (Top 10)

1.  **Make GPT-5.6 Sol the default Bedrock model** `#32288`
    - **内容**: 将 GPT-5.6 Sol、Terra 和 Luna 变体设为 Amazon Bedrock 静态目录的默认优选模型，取代 GPT-5.5。
    - **意义**: 标志着 GPT-5.6 系列模型在基础设施层面的集成优先级提升。
    - 链接: [openai/codex PR #32288](https://github.com/openai/codex/pull/32288)

2.  **Respect model support for reasoning summaries** `#32290`
    - **内容**: 新增 `supports_reasoning_summary_parameter` 元数据字段，默认兼容旧模型，但不支持的模型将省略相关参数。
    - **意义**: 解决了不同模型对推理摘要参数兼容性问题，可能关联 Issue #30364 的修复方向。
    - 链接: [openai/codex PR #32290](https://github.com/openai/codex/pull/32290)

3.  **Fix: Retry model capacity errors** `#31058`
    - **内容**: 对模型容量错误实施有限次数的重试机制（最多3次），而非直接报错结束。
    - **意义**: 显著提升服务在高峰期或容量波动时的健壮性。
    - 链接: [openai/codex PR #31058](https://github.com/openai/codex/pull/31058)

4.  **Core: Allow restricting subagent environments** `#31662`
    - **内容**: 允许在 `spawn_agent` 中通过 `environment_ids` 限制子代理的环境。
    - **意义**: 增强了多代理架构的隔离与控制能力，回应了社区对子代理管理的需求。
    - 链接: [openai/codex PR #31662](https://github.com/openai/codex/pull/31662)

5.  **[Performance] Speed up reverse history search** `#30887`
    - **内容**: 优化历史记录反向搜索机制，避免逐条锁定和扫描 `history.jsonl`，大幅提升查询速度。
    - **意义**: 改善了长历史会话下的 CLI 响应速度。
    - 链接: [openai/codex PR #30887](https://github.com/openai/codex/pull/30887)

6.  **Reduce redundant filesystem syscalls** `#31514`
    - **内容**: 优化文件写入逻辑，减少冗余的 `stat` 调用和文件重开操作。
    - **意义**: 底层 I/O 性能优化，对文件操作频繁的场景有显著提升。
    - 链接: [openai/codex PR #31514](https://github.com/openai/codex/pull/31514)

7.  **Trust hooks from materialized workspace plugins** `#32301`
    - **内容**: 对工作区插件的新安装或更新进行哈希记录，并将其视为受信任的 Hooks 来源。
    - **意义**: 改进了 Hooks 安全模型，支持动态插件的信任链传递。
    - 链接: [openai/codex PR #32301](https://github.com/openai/codex/pull/32301)

8.  **Add advisory Interrupt hooks for interrupted turns** `#26259`
    - **内容**: 为被中断的 Turn 添加专用的 `Interrupt` Hook，区别于普通的 `Stop` Hook。
    - **意义**: 允许开发者在中断发生时执行特定的上下文记录或清理逻辑，增强了生命周期控制。
    - 链接: [openai/codex PR #26259](https://github.com/openai/codex/pull/26259)

9.  **[Windows] Preserve line endings when applying patches** `#30882`
    - **内容**: 引入 `apply_patch_preserve_line_endings` 特性标志，保留源文件的换行符格式。
    - **意义**: 解决了 Windows 平台上因换行符不一致导致的补丁应用问题，改善了跨平台体验。
    - 链接: [openai/codex PR #30882](https://github.com/openai/codex/pull/30882)

10. **Improve file blob upload diagnostics** `#32305`
    - **内容**: 为 Blob 上传添加唯一请求 ID，并改进传输失败时的错误报告，隐藏敏感 URL。
    - **意义**: 提升了文件上传问题的排查效率与安全性。
    - 链接: [openai/codex PR #32305](https://github.com/openai/codex/pull/32305)

---

## 5. 功能需求趋势

1.  **新模型行为调优与控制**: 开发者对 GPT-5.5/5.6 的 Reasoning Token 机制、子代理模型强制绑定表现出极高关注度，要求更透明的模型参数控制和行为一致性。
2.  **Windows 平台稳定性**: 集中在沙箱权限、UI 渲染性能、系统冻结等问题，Windows 用户的负面反馈较多，急需官方解决原生体验缺陷。
3.  **多代理编排灵活性**: 社区希望对 Subagent 的环境隔离、模型选择有更精细的控制权（如 Issue #31814, #17598）。
4.  **本地与自定义模型集成**: Ollama 等本地提供商的兼容性回归问题受到关注，反映出开发者对本地开发环境集成的依赖。

---

## 6. 开发者关注点

- **CLI Hooks 系统的成熟度**: 多个 Issue 提及 Hooks 不触发或配置问题，PR 中也加强了 Hooks 信任机制，表明 Hooks 作为 CLI 的核心扩展点正处于快速迭代期。
- **Desktop App 的“重”体验**: Windows 用户普遍抱怨应用卡顿、冻结及沙箱启动慢，开发者呼吁优化 Electron/Native 混合架构的资源占用。
- **错误提示与调试信息**: 无论是在模型容量错误重试（PR #31058）还是文件上传诊断（PR #32305）中，开发者都希望能获得更清晰、非敏感的错误上下文。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-07-11)

## 1. 今日速览
本日 Gemini CLI 无新版本发布，社区焦点集中在性能瓶颈与企业级权限认证问题上。多个高优先级 Issue 反映 Gemini 3.x 模型在 CLI 中存在响应极度缓慢、思考卡死以及逻辑规划能力下降的情况。此外，官方合并了多项关键安全修复，涉及路径遍历漏洞及权限竞态条件，建议开发者关注相关 PR 以便及时更新。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues (Top 10)

1.  **[企业订阅 403 错误] #13190**
    *   **简介**：企业用户反馈遭遇 `403 Forbidden` 错误，提示必须在组织的 Gemini Code Assist Standard 订阅中成为指定用户。该问题阻碍了企业版正常使用，评论数高达 74 条，是目前最活跃的阻断性问题。
    *   **链接**：[google-gemini/gemini-cli Issue #13190](https://github.com/google-gemini/gemini-cli/issues/13190)

2.  **[模型人格调整] Make Gemini less of a sycophant #4556**
    *   **简介**：开发者呼吁 Gemini CLI 减少讨好式回复，希望其在架构设计等复杂任务中扮演更直接、专业的角色，而非使用大量无关的恭维语言。该 Issue 获得了 37 个点赞，反映了社区对模型交互风格的高关注度。
    *   **链接**：[google-gemini/gemini-cli Issue #4556](https://github.com/google-gemini/gemini-cli/issues/4556)

3.  **[严重性能问题] Too slow to answer #26197**
    *   **简介**：用户报告 CLI 在处理复杂项目时响应时间长达 10 分钟，几乎不可用。问题被标记为 P1 优先级，涉及性能瓶颈与 Agent 调度逻辑。
    *   **链接**：[google-gemini/gemini-cli Issue #26197](https://github.com/google-gemini/gemini-cli/issues/26197)

4.  **[指令忽视] `GEMINI.md` instructions are ignored #13852**
    *   **简介**：Gemini 3 Pro 忽略 `GEMINI.md` 中的指令（如“直接运行脚本而非创建文件”），导致开发体验严重受损。这是上下文理解与执行层面的核心缺陷。
    *   **链接**：[google-gemini/gemini-cli Issue #13852](https://github.com/google-gemini/gemini-cli/issues/13852)

5.  **[模型能力质疑] Gemini 3 Pro beyond bad... #13671**
    *   **简介**：用户严厉批评 Gemini 3 Pro 在编辑、思考和逻辑规划方面的能力远逊于竞品，质疑是 CLI 限制还是模型本身退步。该问题引发了关于模型版本与 CLI 集成质量的深度讨论。
    *   **链接**：[google-gemini/gemini-cli Issue #13671](https://github.com/google-gemini/gemini-cli/issues/13671)

6.  **[思考卡死] Gemini 3.1 Pro just stuck on thinking for 1h #26319**
    *   **简介**：更新至 0.40.1 版本后出现回归，模型在审查文件时陷入长达一小时的“思考”状态无输出，严重影响工作流。
    *   **链接**：[google-gemini/gemini-cli Issue #26319](https://github.com/google-gemini/gemini-cli/issues/26319)

7.  **[认证冲突] 403 Permission Denied for Gemini Advanced users #26564**
    *   **简介**：设置了 `GOOGLE_CLOUD_PROJECT` 环境变量的 Gemini Advanced 个人用户遭遇 403 错误。该问题涉及 OAuth 登录与 GCP 项目绑定的逻辑冲突。
    *   **链接**：[google-gemini/gemini-cli Issue #26564](https://github.com/google-gemini/gemini-cli/issues/26564)

8.  **[随机挂起] It's still hanging all the time randomly #26265**
    *   **简介**：CLI 在任务执行过程中频繁随机挂起，静默无响应长达 20 分钟。问题从 0.34.0 版本延续至今，尚未得到根本解决。
    *   **链接**：[google-gemini/gemini-cli Issue #26265](https://github.com/google-gemini/gemini-cli/issues/26265)

9.  **[登录无响应] 登录成功后请求gemini没有反馈 #22652**
    *   **简介**：中文用户反馈登录成功后请求长时间计时无反馈，疑似账号或网络层面的连接问题，影响基础可用性。
    *   **链接**：[google-gemini/gemini-cli Issue #22652](https://github.com/google-gemini/gemini-cli/issues/22652)

10. **[公共路线图] Public Roadmap #4191**
    *   **简介**：官方路线图追踪 Issue，获 98 个点赞。开发者希望借此了解项目未来走向及贡献机会。
    *   **链接**：[google-gemini/gemini-cli Issue #4191](https://github.com/google-gemini/gemini-cli/issues/4191)

## 4. 重要 PR 进展 (Top 10)

1.  **[关键修复] Ensure task cancellation aborts execution loop #28316**
    *   **内容**：修复了 Agent Mode 中取消任务后底层执行流未终止导致的“幽灵执行”漏洞，同时修复了多个竞态条件和内存泄漏问题，显著提升稳定性。
    *   **链接**：[google-gemini/gemini-cli PR #28316](https://github.com/google-gemini/gemini-cli/pull/28316)

2.  **[安全修复] Prevent path traversal in restore command #28353**
    *   **内容**：修复了 `restore` 命令中的路径遍历漏洞。此前攻击者可通过 `../../../etc/passwd` 等路径读取宿主机任意文件，属于深度防御性修复。
    *   **链接**：[google-gemini/gemini-cli PR #28353](https://github.com/google-gemini/gemini-cli/pull/28353)

3.  **[安全修复] Sanitize and wrap issue title in untrusted_context #28352**
    *   **内容**：修复了 Caretaker Agent 服务中的 Prompt Injection 漏洞，对不受信任的 Issue 标题进行了转义和包装处理，防止恶意指令注入。
    *   **链接**：[google-gemini/gemini-cli PR #28352](https://github.com/google-gemini/gemini-cli/pull/28352)

4.  **[架构重构] Enforce path trust check prior to environment loading #28319**
    *   **内容**：重构了 `a2a-server` 的初始化生命周期，确保工作区路径信任检查在加载环境变量之前执行，防止恶意路径注入环境变量。
    *   **链接**：[google-gemini/gemini-cli PR #28319](https://github.com/google-gemini/gemini-cli/pull/28319)

5.  **[安全修复] Set token file mode atomically to close TOCTOU window #28330**
    *   **内容**：修复了 IDE 伴侣进程写入 auth-token 文件时的 TOCTOU（Time-of-check to time-of-use）竞态漏洞，防止令牌在短暂窗口期被泄露。
    *   **链接**：[google-gemini/gemini-cli PR #28330](https://github.com/google-gemini/gemini-cli/pull/28330)

6.  **[逻辑修复] Guard customDeepMerge against circular references #28349**
    *   **内容**：修复了设置管理器中因循环引用导致的无限递归崩溃问题（RangeError），增强了对象合并逻辑的健壮性。
    *   **链接**：[google-gemini/gemini-cli PR #28349](https://github.com/google-gemini/gemini-cli/pull/28349)

7.  **[逻辑修复] Limit recursive reasoning turns per single user request #28164**
    *   **内容**：引入了单次请求递归推理轮次限制（默认 15 次），防止陷入死循环耗尽 CPU 或 API 额度。该 PR 已关闭，修复内容已合入。
    *   **链接**：[google-gemini/gemini-cli PR #28164](https://github.com/google-gemini/gemini-cli/pull/28164)

8.  **[Bug修复] Resolve MaxListenersExceededWarning and infinite auth loop #28348**
    *   **内容**：修复了 Windows 平台上 OAuth 认证后的无限循环问题，以及重试 API 调用时触发 MaxListenersExceededWarning 警告的问题。
    *   **链接**：[google-gemini/gemini-cli PR #28348](https://github.com/google-gemini/gemini-cli/pull/28348)

9.  **[文档改进] Explain MCP env expansion #28248**
    *   **内容**：补充了 MCP (Model Context Protocol) 服务器环境变量扩展的文档，明确了支持的语法（`$VAR`, `%VAR%`）和不支持的语法，降低了配置门槛。
    *   **链接**：[google-gemini/gemini-cli PR #28248](https://github.com/google-gemini/gemini-cli/pull/28248)

10. **[功能实现] Implement LLM triage orchestrator and container build #28345**
    *   **内容**：实现了基于 LLM 的分类协调器，用于自动化 Issue 处理流程，并包含了 Cloud Run Job 的容器构建定义，属于内部自动化工具链升级。
    *   **链接**：[google-gemini/gemini-cli PR #28345](https://github.com/google-gemini/gemini-cli/pull/28345)

## 5. 功能需求趋势
*   **稳定性与响应速度**：社区对 CLI 的响应延迟和随机挂起表现出强烈的焦虑，尤其是 Gemini 3.x 版本引入的“思考超时”问题，亟需性能优化。
*   **企业级认证体验**：随着 Gemini Code Assist 的推广，OAuth 登录、GCP 项目绑定及订阅验证的逻辑冲突成为高频痛点，急需更清晰的错误提示和降级方案。
*   **指令遵循能力**：开发者对 Agent 遵循 `GEMINI.md` 自定义指令的能力有硬性需求，模型忽略指令直接破坏了开发者的工具链信任。

## 6. 开发者关注点
*   **Agent 执行失控**：多个 Issue 提及任务执行中途卡死或陷入死循环，开发者急需更完善的超时机制和取消机制。
*   **文件系统安全**：本日多个 PR 涉及路径遍历和令牌文件权限修复，表明在 CLI 与本地文件系统交互（如 Restore 命令、环境变量加载）中存在安全隐患，开发者应关注后续版本更新。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-07-11)

## 1. 今日速览
GitHub Copilot CLI 今日发布了 **v1.0.71-0** 版本，重点增强了设置仪表盘的功能，新增了 Prompt 固定设置和仓库作用域标签页。社区方面，**模型推理能力削减**（xhigh reasoning 移除）引发了较高关注度，同时 **WSL2 环境下的 TUI 界面卡死**和**语音模式转录失败**成为开发者反馈最集中的稳定性问题。此外，MCP（Model Context Protocol）服务器的 OAuth 集成问题也值得开发者注意。

## 2. 版本发布
**版本号**: v1.0.71-0
**更新摘要**:
- **新增功能**:
  - `/settings` 仪表盘新增 Prompt 固定设置，允许用户控制提示词的固定行为。
  - 设置仪表盘新增 "Repo" 和 "Repo (local)" 作用域标签页，细化了配置粒度。
- **体验改进**:
  - 优化了验证命令的针对性，并默认提供更轻量的安装指引。
  - 调整快捷键逻辑：使用 `ctrl+x → x` 关闭会话，`ctrl+x → h` 隐藏侧边栏面板。

## 3. 社区热点 Issues (Top 10)

1.  **[OPEN] #3709 允许在同一会话中切换 BYOK/本地模型**
    - **链接**: [github/copilot-cli Issue #3709](https://github.com/github/copilot-cli/issues/3709)
    - **摘要**: 开发者强烈希望 `/model` 选择器能列出本地 BYOK 提供的模型，而不是让 BYOK 模式锁定整个会话。该需求获 17 个点赞，反映了高级用户对模型灵活切换的高频需求。

2.  **[CLOSED] #2739 GPT-5 系列模型移除了 xhigh reasoning 能力**
    - **链接**: [github/copilot-cli Issue #2739](https://github.com/github/copilot-cli/issues/2739)
    - **摘要**: 用户反馈 GPT-5.4 和 GPT-5.3-codex 移除了高推理（xhigh reasoning）模式，导致模型表现大幅下降。该 Issue 获 12 个点赞，已关闭但引发了对模型能力调整的广泛讨论。

3.  **[OPEN] #4069 WSL2 环境下 TUI 中途卡死**
    - **链接**: [github/copilot-cli Issue #4069](https://github.com/github/copilot-cli/issues/4069)
    - **摘要**: 在 WSL2 + Windows Terminal 环境下，会话中途会出现屏幕清除、输入无响应且无法通过 Ctrl+C 退出的严重问题。该问题与 stdout 的 EIO/EPIPE 错误有关，获 8 个点赞，影响极大。

4.  **[OPEN] #4024 语音模式所有 ASR 模型静默失败**
    - **链接**: [github/copilot-cli Issue #4024](https://github.com/github/copilot-cli/issues/4024)
    - **摘要**: `/voice` 功能虽然能录制音频，但三种 ASR 模型转录结果均为空。问题定位在 Foundry Local Core 的多模态处理器路由 Bug，属于功能性阻断问题。

5.  **[OPEN] #4093 Web_search 工具产生“幻觉”回答**
    - **链接**: [github/copilot-cli Issue #4093](https://github.com/github/copilot-cli/issues/4093)
    - **摘要**: 内置的 `web_search` 工具在未检索到相关内容时，会自信地返回完全虚构的答案，严重影响结果可信度。

6.  **[OPEN] #4089 Atlassian MCP 服务器 OAuth 成功但工具未加载**
    - **链接**: [github/copilot-cli Issue #4089](https://github.com/github/copilot-cli/issues/4089)
    - **摘要**: MCP 服务器集成问题。Atlassian MCP 服务器完成 OAuth 认证后，会话中无法暴露任何工具。这表明 MCP 的认证流程与工具发现机制存在兼容性断点。

7.  **[OPEN] #3331 插件启动时自动更新功能请求**
    - **链接**: [github/copilot-cli Issue #3331](https://github.com/github/copilot-cli/issues/3331)
    - **摘要**: 企业团队希望 CLI 启动时能通过 marketplace 标记自动更新插件，避免版本碎片化，保证团队开发环境一致性。

8.  **[OPEN] #4091 Linux Alpine (musl) 版本丢失独立二进制文件**
    - **链接**: [github/copilot-cli Issue #4091](https://github.com/github/copilot-cli/issues/4091)
    - **摘要**: `v1.0.70` 及后续版本的 `linuxmusl-x64` 发布包中意外移除了预编译二进制文件，对 Alpine Linux 用户构成破坏性更新。

9.  **[OPEN] #4077 Windows Terminal 中 TUI 黑屏卡死**
    - **链接**: [github/copilot-cli Issue #4077](https://github.com/github/copilot-cli/issues/4077)
    - **摘要**: Windows 平台下 `1.0.70-0` 版本常见的 TUI 渲染故障，导致中途黑屏。虽然可通过 `--resume` 恢复，但严重影响用户体验。

10. **[OPEN] #4088 Agent Skills 支持动态上下文注入**
    - **链接**: [github/copilot-cli Issue #4088](https://github.com/github/copilot-cli/issues/4088)
    - **摘要**: 建议在 `SKILL.md` 中支持 `!<command>` 占位符语法，以便在技能调用时动态注入命令执行结果，增强 Agent 的上下文感知能力。

## 4. 重要 PR 进展

过去 24 小时内仅更新了 1 个 PR，涉及安装体验优化：

- **[OPEN] #2565 修复重复安装导致的 PATH 环境变量重复添加问题**
  - **链接**: [github/copilot-cli PR #2565](https://github.com/github/copilot-cli/pull/2565)
  - **内容**: 解决了在未重启 Shell 的情况下重复运行安装脚本，导致 PATH 配置在 Shell Profile 中被重复追加的问题。脚本现在将增加更严格的检查逻辑，防止环境污染。

## 5. 功能需求趋势

1.  **模型灵活性与控制权**: 开发者对模型选择的控制权要求日益精细，从简单的 BYOK 支持转向要求在会话内自由切换云端与本地模型 (#3709)，以及对模型推理深度保留 (#2739)。
2.  **MCP 协议集成稳定性**: 随着生态扩展，MCP 服务器的连接、OAuth 认证及工具发现成为新的痛点 (#4089, #4085)，社区急需更健壮的外部集成标准。
3.  **高级上下文管理**: 用户希望通过动态命令注入 (#4088) 和跨应用会话同步 (#4082) 来增强 CLI 的上下文感知能力和连续性。

## 6. 开发者关注点与痛点

-   **终端 UI 稳定性**: WSL2 和 Windows Terminal 用户近期遭遇了严重的 TUI 卡死和黑屏问题 (#4069, #4077)，渲染层的不稳定成为了阻碍使用的首要因素。
-   **多模态功能缺陷**: 语音模式目前处于不可用状态 (#4024)，且涉及底层模型路由，严重打击了尝试新功能的积极性。
-   **企业级功能缺失**: 插件生命周期管理（如自动更新 #3331）和安全性配置（如 BYOK 自定义 Header #3399）的缺失，阻碍了 Copilot CLI 在标准化企业开发环境中的深度普及。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-07-11)

## 1. 今日速览
今日 Kimi Code CLI 无新版本发布，项目重心主要集中在提升 Web 端交互体验与修复核心逻辑缺陷。开发团队重点优化了 Web 界面的布局细节及 Safari 浏览器的输入法兼容性，并针对新用户初始化流程中的错误提示进行了易用性改进。

## 2. 版本发布
本统计周期内无新版本发布。

## 3. 社区热点 Issues
过去 24 小时内无新增或更新的 Issues。

## 4. 重要 PR 进展
过去 24 小时内共有 4 个 PR 更新，重点修复了 Web 端显示与核心逻辑问题：

*   **[#2353 [CLOSED] fix(web): tighten app layout spacing**
    *   **内容**：优化了 Web 端应用层级的布局间距，移除了外部沟槽同时保留了安全区域，并微调了会话侧边栏列表和搜索输入框的显示效果。
    *   **意义**：提升了 Web 端界面的精致度与视觉一致性。
    *   **链接**：[MoonshotAI/kimi-cli PR #2353](https://github.com/MoonshotAI/kimi-cli/pull/2353)

*   **[#2489 [OPEN] fix(soul): restore plan-mode tool bindings after /init creates throwaway soul**
    *   **内容**：修复了在运行 `/init` 指令时，因创建临时 Soul 实例导致共享工具实例被错误重新绑定的问题，恢复了 plan-mode 下的工具绑定状态。
    *   **意义**：解决了初始化流程可能导致的工具状态混乱问题，保证了 Agent 逻辑的稳定性。
    *   **链接**：[MoonshotAI/kimi-cli PR #2489](https://github.com/MoonshotAI/kimi-cli/pull/2489)

*   **[#2488 [OPEN] fix(soul): make LLMNotSet error message actionable for fresh installs**
    *   **内容**：优化了新安装用户（未执行 `kimi login`）遇到 "LLM not set" 错误时的提示信息，增加了明确的操作指引。
    *   **意义**：显著改善了首次使用体验，降低了新用户的上手门槛。
    *   **链接**：[MoonshotAI/kimi-cli PR #2488](https://github.com/MoonshotAI/kimi-cli/pull/2488)

*   **[#1815 [CLOSED] fix(web): prevent Enter from sending message during IME composition on Safari**
    *   **内容**：修复了 Safari 浏览器下，使用中文输入法时按下 Enter 键确认候选词会误触发发送消息的 Bug。
    *   **意义**：解决了 Safari 用户在中文输入场景下的严重体验问题。
    *   **链接**：[MoonshotAI/kimi-cli/pull/1815](https://github.com/MoonshotAI/kimi-cli/pull/1815)

## 5. 功能需求趋势
由于本期无新增 Issue，以下趋势基于近期 PR 动态分析：
*   **跨浏览器兼容性**：针对 Safari 等 WebKit 内核浏览器的兼容性修复（如 IME 输入问题）持续受到关注，表明团队致力于拓展 Web 端的用户覆盖范围。
*   **初始化体验优化**：针对新用户的 Onboarding 流程（如 `kimi login` 引导）正在被反复打磨，旨在减少“冷启动”时的配置困惑。

## 6. 开发者关注点
*   **输入法交互体验**：Web 端在 Safari 浏览器下的 IME（输入法编辑器）交互存在痛点，主要体现在 Enter 键的事件处理上，该问题已得到官方修复。
*   **错误提示的可操作性**：开发者反馈默认的错误信息过于简略，缺乏指导性。社区正在推动将抽象的错误转化为具体的行动建议，帮助用户快速定位并解决问题。
*   **Agent 状态管理**：核心逻辑中 Soul 实例与工具绑定的生命周期管理较为复杂，开发者需警惕 `/init` 等特殊指令对全局状态的副作用。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-07-11)

## 1. 今日速览
今日 OpenCode 社区聚焦于 **GPT-5.6 模型适配问题**与**客户端稳定性修复**。Issue #4283 关于剪贴板复制失效的问题引发热烈讨论（评论数破百），同时 GPT-5.6 Luna 模型在 ChatGPT OAuth 下的 404 错误也成为关注焦点。PR 方面，核心团队重点推进了 V2 版本的架构优化，包括 GitHub Copilot OAuth 移植和会话输出 Token 上限控制。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues (Top 10)

1.  **[#4283](https://github.com/anomalyco/opencode/issues/4283) [OPEN] Copy To Clipboard is not working**
    *   **热度**：评论 112 | 👍 103
    *   **解读**：用户在 TUI 模式下选择文本后无法复制到剪贴板，严重影响使用体验。该问题在 Windows/Linux 平台均有反馈，是目前社区反馈最强烈的 Bug。

2.  **[#10288](https://github.com/anomalyco/opencode/issues/10288) [OPEN] Feature Request: Mobile version of OpenCode**
    *   **热度**：评论 15 | 👍 89
    *   **解读**：社区强烈呼吁推出移动端，希望在 Android/iOS 或 Web UI 上使用 OpenCode，以便开发者随时随地处理代码审查和 AI 辅助。

3.  **[#2632](https://github.com/anomalyco/opencode/issues/2632) [CLOSED] Default permissions allow editing files and executing any commands**
    *   **热度**：评论 22 | 👍 4
    *   **解读**：关于安全策略的深度讨论。用户认为 OpenCode 默认允许编辑文件和执行命令过于激进，建议改为“默认询问”。该 Issue 虽已关闭，但引发了关于权限模型的持续反思。

4.  **[#36140](https://github.com/anomalyco/opencode/issues/36140) [OPEN] GPT-5.6 Luna returns model not found with ChatGPT OAuth**
    *   **热度**：评论 12 | 👍 49
    *   **解读**：用户在使用 ChatGPT OAuth 调用 `gpt-5.6-luna` 模型时遭遇 HTTP 404 错误。这是新模型集成中的典型问题，目前官方已在 PR 中跟进修复。

5.  **[#30086](https://github.com/anomalyco/opencode/issues/30086) [OPEN] High CPU usage in newer versions of OpenCode**
    *   **热度**：评论 20 | 👍 12
    *   **解读**：近期版本 CPU 占用率激增，导致多会话并发时系统卡顿甚至鼠标延迟。这可能与 V2 架构重构或后台服务管理有关，性能优化迫在眉睫。

6.  **[#26772](https://github.com/anomalyco/opencode/issues/26772) [OPEN] [FEATURE]: Integrated browser for desktop**
    *   **热度**：评论 12 | 👍 3
    *   **解读**：请求在桌面版中集成浏览器工作区，允许 AI Agent 直接与网页交互，拓展了 OpenCode 作为开发环境的能力边界。

7.  **[#34743](https://github.com/anomalyco/opencode/issues/34743) [OPEN] opencode ACP from Xcode 27 beta 2 uses default model**
    *   **热度**：评论 12 | 👍 0
    *   **解读**：在 Xcode 27 beta 2 集成中，OpenCode 忽略了配置文件中的模型设置，强制使用默认模型 `big-pickle`。IDE 集成的配置优先级问题需关注。

8.  **[#36211](https://github.com/anomalyco/opencode/issues/36211) [OPEN] [FEATURE]: Support Azure connect with GPT‑5.6 family**
    *   **热度**：评论 1 | 👍 5
    *   **解读**：目前的 v1.17.18 版本尚未支持 Azure 连接 GPT-5.6 系列模型，企业级用户对此功能需求较高。

9.  **[#35828](https://github.com/anomalyco/opencode/issues/35828) [OPEN] Windows TUI fails in v1.17.15 when project .opencode already exists**
    *   **热度**：评论 3 | 👍 2
    *   **解读**：Windows 平台下的启动失败问题，涉及目录初始化逻辑，阻碍了老用户升级新版本。

10. **[#9532](https://github.com/anomalyco/opencode/issues/9532) [OPEN] Why does opencode frequently encounter tool calling errors when using claude**
    *   **热度**：评论 7 | 👍 3
    *   **解读**：Claude 模型在调用工具时频繁报错，提示工具不可用。这反映了不同 LLM 提供商在工具调用协议上的兼容性差异。

## 4. 重要 PR 进展 (Top 10)

1.  **[#36143](https://github.com/anomalyco/opencode/pull/36143) fix(opencode): support GPT-5.6 Responses Lite**
    *   **内容**：修复 ChatGPT OAuth 用户调用 GPT-5.6 Luna/Sol 模型时的兼容性问题，调整了请求封装方式以适配 Codex 新版本。

2.  **[#36336](https://github.com/anomalyco/opencode/pull/36336) feat(core): port GitHub Copilot OAuth**
    *   **内容**：将 GitHub.com 和 Enterprise 的 Copilot 设备 OAuth 流程移植到 V2 架构，增强了对 Copilot 提供商的原生支持。

3.  **[#36339](https://github.com/anomalyco/opencode/pull/36339) feat(codemode): support Promise.any and new Promise construction**
    *   **内容**：在 CodeMode 沙箱解释器中实现了 `Promise.any` 和 `new Promise` 构造函数，完善了异步编程支持。

4.  **[#36333](https://github.com/anomalyco/opencode/pull/36333) fix(core): cap session output tokens**
    *   **内容**：将 V2 提供商的输出 Token 上限设为 32,000，防止模型输出过长导致上下文溢出或资源耗尽。

5.  **[#7756](https://github.com/anomalyco/opencode/pull/7756) feat(task): Add subagent-to-subagent delegation**
    *   **内容**：引入子智能体之间的委托机制，支持预算分配、持久化会话和分层导航，极大增强了复杂任务的分解与协作能力。

6.  **[#36275](https://github.com/anomalyco/opencode/pull/36275) fix(cli): report mismatched service status**
    *   **内容**：修复了 CLI 报告服务状态不一致的问题，优化了守护进程的健康检查逻辑。

7.  **[#34794](https://github.com/anomalyco/opencode/pull/34794) feat(provider): add --model free to pick a random zero-cost opencode model**
    *   **内容**：新增 `--model free` 参数，允许用户自动选择免费的 OpenCode Zen 模型，降低了使用门槛。

8.  **[#36341](https://github.com/anomalyco/opencode/pull/36341) feat(tui): show pending command resolution**
    *   **内容**：优化 TUI 界面，在 MCP 命令解析期间显示加载状态，解决了界面看似“假死”的用户体验问题。

9.  **[#36304](https://github.com/anomalyco/opencode/pull/36304) feat(codemode): support promise chaining with .then/.catch/.finally**
    *   **内容**：进一步丰富了 CodeMode 沙箱中的 Promise API，支持链式调用，提升了内嵌脚本能力的灵活性。

10. **[#36338](https://github.com/anomalyco/opencode/pull/36338) fix(tui): fork messages with agent attachments**
    *   **内容**：修复了在 TUI 中 Fork 带有 Agent 附件的消息时发生的 `DataCloneError` 错误，确保了消息分支功能的正常使用。

## 5. 功能需求趋势

*   **移动端与多平台支持**：社区对移动端的需求呼声极高，同时桌面端集成浏览器工作区的需求表明用户希望 OpenCode 成为一个全功能的开发环境。
*   **新模型快速适配**：随着 GPT-5.6 系列模型的发布，用户对 Azure、OAuth 等多种接入方式的支持需求非常迫切，模型兼容性是更新重点。
*   **性能与资源优化**：高 CPU 占用问题反映出 V2 架构下的性能回归，用户期待更轻量、更稳定的多会话管理。

## 6. 开发者关注点

*   **基础交互故障**：剪贴板复制失效 (#4283) 是最直观的痛点，严重干扰日常操作，开发者期待尽快修复底层交互逻辑。
*   **配置权限与安全**：默认权限过于宽泛的问题引发了对安全性的担忧，开发者倾向于更细粒度的权限控制。
*   **IDE 集成稳定性**：Xcode 集成中模型配置被忽略的问题表明，IDE 插件与 Core CLI 的配置同步机制仍需打磨。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# 2026-07-11 Qwen Code 社区动态日报

## 1. 今日速览
今日 Qwen Code 发布了 **v0.19.9** 正式版，重点修复了子代理工具调用死循环及历史链损坏检测问题，同时 **v0.19.8-nightly** 修正了 YOLO 模式异常跳转至 Plan 模式的关键体验问题。社区当前最热门的讨论聚焦于 **单 Daemon 多工作区架构** 的 RFC 设计与实现，相关底层传输层 PR 已进入关键阶段。此外，Web Shell 的交互体验（如工具栏重构、会话恢复）及长上下文下的稳定性优化也是今日开发重心。

---

## 2. 版本发布

### v0.19.9
- **核心修复**：解决了子代理重复调用工具导致死循环的问题 ([PR #6543](https://github.com/QwenLM/qwen-code/pull/6543))。
- **稳定性**：增强了对损坏历史链的检测与标记，替代了原有的静默截断逻辑。
- **发布备注**：虽然版本已发布，但根据 Issue 记录，其 CI 流程曾经历多次重试才最终成功。

### v0.19.8-nightly.20260711
- **体验优化**：修复了在 YOLO 模式下模型错误调用 `enter_plan_mode` 导致模式切换的问题 ([PR #6630](https://github.com/QwenLM/qwen-code/pull/6630))。
- **新功能**：CLI 增加了 `ask_user` 转发支持。

---

## 3. 社区热点 Issues (Top 10)

1.  **[RFC] 单 Daemon 支持多工作区架构** [#6378](https://github.com/QwenLM/qwen-code/Issue/6378)
    *   **关注度**：评论数最高 (20条)。
    *   **摘要**：社区正在讨论重构 `qwen serve` 守护进程，以支持单一进程管理多个工作区，打破目前 "1 daemon = 1 workspace" 的限制。这是实现 Web Shell 多工作区切换的基础架构提案。

2.  **API 长时间无响应导致流式超时** [#5975](https://github.com/QwenLM/qwen-code/Issue/5975)
    *   **痛点**：用户反馈升级后频繁出现 `No stream activity for 120000ms` 错误，严重影响使用体验。
    *   **状态**：P2 优先级，目前标记为 `status/needs-triage`，等待进一步排查。

3.  **YOLO 模式异常自动进入 Plan 模式回归** [#5970](https://github.com/QwenLM/qwen-code/Issue/5970)
    *   **修复验证**：用户报告在最新版本中 YOLO 模式失效，该问题已通过今日发布的 v0.19.8-nightly 修复 ([PR #6630](https://github.com/QwenLM/qwen-code/pull/6630))。

4.  **Glob 工具在大路径下导致 OOM** [#6614](https://github.com/QwenLM/qwen-code/Issue/6614)
    *   **严重性**：P1 级 Bug。在扫描大型目录时，Node 进程在输出截断前即发生内存溢出崩溃，需优化流式处理逻辑。

5.  **Web Shell 输入框工具栏重构提案** [#6699](https://github.com/QwenLM/qwen-code/Issue/6699)
    *   **功能**：提议在 Web Shell 输入框下方增加工作区切换、执行上下文选择及 Git 分支显示按钮，对标 Codex 桌面端体验。

6.  **Web Shell 会话中断后自动恢复** [#6695](https://github.com/QwenLM/qwen-code/Issue/6695)
    *   **功能**：提议在环境重启或会话加载后，自动调用 Daemon 接口恢复中断的对话轮次，提升服务可用性。

7.  **Tool_use 与 Tool_result 不匹配导致 API 报错** [#6654](https://github.com/QwenLM/qwen-code/Issue/6654)
    *   **问题**：模型输出的 `tool_use` 缺少对应的 `tool_result`，导致会话报错中断，涉及核心消息链构建逻辑。

8.  **模型切换硬限制导致上下文不可用** [#6384](https://github.com/QwenLM/qwen-code/Issue/6384)
    *   **Bug**：环境配置模型预留全量上下文窗口时，导致硬限制计算为 0，无法发送任何请求。

9.  **macOS 独立版无法粘贴图片** [#6590](https://github.com/QwenLM/qwen-code/Issue/6590)
    *   **原因**：Standalone 安装包缺失原生模块 `@teddyzhu/clipboard`，导致 macOS 下 Ctrl+V 粘贴图片功能失效。

10. **MCP Server 返回 401 时未触发 OAuth 恢复流** [#6639](https://github.com/QwenLM/qwen-code/Issue/6639)
    *   **集成问题**：使用 HTTP 传输的 MCP Server 在返回 401 时，Qwen Code 显示为离线状态，未能自动触发 OAuth 重连机制。

---

## 4. 重要 PR 进展 (Top 10)

1.  **feat(cli): workspace-qualified ACP transport (多工作区传输层)** [#6621](https://github.com/QwenLM/qwen-code/pull/6621)
    *   **意义**：这是多工作区支持的第四阶段工作，为 Daemon 增加了工作区隔离的 ACP 端点，是实现 Issue #6378 的核心基础设施。

2.  **fix(core): retry leaked protocol turns (协议层修复)** [#6683](https://github.com/QwenLM/qwen-code/pull/6683)
    *   **内容**：扩展了对泄露协议轮次的防护，当模型输出包含 `<analysis>/<summary>` 泄露标签时，即使包含工具调用也会重试，增强容错性。

3.  **fix(cli): keep model switches session-scoped (模型切换作用域优化)** [#6579](https://github.com/QwenLM/qwen-code/pull/6579)
    *   **改进**：将普通模型切换 (`/model`) 限制在当前会话作用域，避免意外更改全局默认模型，需显式使用 `/model --default` 才会持久化。

4.  **feat(web-shell): resume stopped sessions on load (会话恢复)** [#6697](https://github.com/QwenLM/qwen-code/pull/6697)
    *   **功能**：Web Shell 加载时自动检测并恢复中断的会话，关联 Issue #6695，提升重启后的体验。

5.  **feat(cli): workspace-qualified extensions REST (扩展管理)** [#6638](https://github.com/QwenLM/qwen-code/pull/6638)
    *   **内容**：为多工作区架构提供扩展管理的 REST API 支持，允许针对特定工作区安装/管理插件。

6.  **fix(memory): refresh instructions after remember (记忆机制)** [#6497](https://github.com/QwenLM/qwen-code/pull/6497)
    *   **改进**：修复了 `/remember` 写入后当前会话无法立即感知新指令的问题，实现实时刷新。

7.  **feat(cli): improve subagent observability (子代理可观测性)** [#6580](https://github.com/QwenLM/qwen-code/pull/6580)
    *   **内容**：优化子代理执行时的日志展示，显示未截断的实时命令和审批上下文，方便调试。

8.  **fix(core): make goal evaluation lifecycle-safe (Goal 指令)** [#6681](https://github.com/QwenLM/qwen-code/pull/6681)
    *   **修复**：确保 `/goal` 自动评估不会在后台任务运行时阻塞，将有效判决与评估失败分离，防止误判。

9.  **feat(channels): recover daemon sessions after restarts (频道恢复)** [#6680](https://github.com/QwenLM/qwen-code/pull/6680)
    *   **功能**：实现了 Daemon 重启后 Channel Worker 的会话自动恢复机制，解决连接断开后对话丢失的问题。

10. **feat(cli): show full reasoning content (思维链展示)** [#6678](https://github.com/QwenLM/qwen-code/pull/6678)
    *   **体验**：修复了流式传输中展开 Thinking Block 时只显示最后 4 行的问题，现在将通过 Markdown 渲染完整内容。

---

## 5. 功能需求趋势

1.  **多工作区架构**
    *   社区对 "单 Daemon 多工作区" 的呼声极高，相关 Issue (#6378) 和 PRs (#6621, #6638) 显示团队正在系统性重构底层传输与扩展层，预计将显著改变 Qwen Code 的多项目管理方式。

2.  **Web Shell 交互体验升级**
    *   近期 Issues (#6699, #6700, #6702) 集中提议在 Web Shell 底部工具栏增加“工作区选择器”、“Git 分支显示”及“执行上下文切换”，显示出 Web 端正在对标 IDE 原生体验靠拢。

3.  **长上下文与稳定性**
    *   针对 API 超时 (#5975)、OOM (#6614) 及协议泄露 (#6595) 的反馈增多，表明在复杂任务和长上下文场景下，内存管理与流式稳定性仍是核心优化方向。

---

## 6. 开发者关注点

-   **模式切换干扰**：YOLO 模式误触 Plan 模式曾是痛点，v0.19.8-nightly 的修复缓解了此问题，开发者更倾向于 Agent 能“记住”当前状态。
-   **API 稳定性焦虑**：长任务中 `No stream activity` 错误频发，开发者呼吁增加更健壮的重试机制或心跳检测。
-   **调试困难**：Debug 模式下日志文件未生成 (#6600) 及子代理输出难以追踪，表明开发者对黑盒环节的可观测性有更高要求。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 (2026-07-11)

## 1. 今日速览
v0.8.68 版本已进入发布前的最后冲刺阶段，核心团队集中修复了 TUI 状态路由、配置解析及 Android 端 QA 相关的关键阻断性问题。今日动态显示，项目架构正向更成熟的 **Fleet/Workflow/Lane** 编排模型演进，同时社区及核心贡献者引入了全面的安全审计 CI 流程，显著提升了代码库的安全基线。

## 2. 版本发布
过去 24 小时内无正式版本发布，但大量 PR 已针对 `v0.8.68` 里程碑进行了合并与修复，预计新版本发布在即。

## 3. 社区热点 Issues (Top 10)

1.  **[CLOSED] v0.8.68 执行看板与架构总览** [#4092](https://github.com/Hmbown/CodeWhale/issues/4092)
    *   **核心动态**：作为 v0.8.68 的总管 Issue，它定义了“Lane”泳道概念、依赖关系及代理协议。此 Issue 的关闭标志着该里程碑的核心架构定义已冻结，讨论热度极高（60条评论）。
2.  **[OPEN] Agent 未遵循 Constitution 规范** [#4032](https://github.com/Hmbown/CodeWhale/issues/4032)
    *   **核心动态**：用户反馈 Codewhale 倾向于编写临时脚本而非复用已有脚本，引发关于 Agent 记忆检索与指令遵循可靠性的深度讨论（33条评论），是目前最活跃的用户反馈之一。
3.  **[OPEN] v0.8.68 架构：Fleet / Workflow / Lane 模型定义** [#4175](https://github.com/Hmbown/CodeWhale/issues/4175)
    *   **核心动态**：确立了新的编排词汇表，明确了 Fleet（舰队）、Workflow（工作流）、Lane（泳道）与 Runtime（运行时）的职责边界，防止概念混淆。
4.  **[OPEN] Stopship 工作流验证** [#4178](https://github.com/Hmbown/CodeWhale/issues/4178)
    *   **核心动态**：针对关键阻断问题进行的端到端“吃自己的狗粮”测试，验证新架构在真实活跃问题上的表现。
5.  **[CLOSED] TUI 默认视图优化：紧凑模式** [#4095](https://github.com/Hmbown/CodeWhale/issues/4095)
    *   **核心动态**：认定当前默认 TUI 视图过于嘈杂，正式确定“紧凑模式”将作为 v0.8.68 的标准体验，以降低用户认知负荷。
6.  **[OPEN] Release Blocker: 配置选择器逻辑错误** [#4333](https://github.com/Hmbown/CodeWhale/issues/4333)
    *   **核心动态**：发现 TUI 的 Model 配置视图会将空 Provider Headers 误判为已配置状态，被标记为发布阻塞级 Bug，急需修复。
7.  **[OPEN] 功能请求：侧边栏会话面板** [#2934](https://github.com/Hmbown/CodeWhale/issues/2934)
    *   **核心动态**：用户提议增加持久化的侧边栏会话面板以替代现有的弹窗切换模式，旨在解决多会话管理不便的痛点。
8.  **[OPEN] Anthropic API 调用错误** [#4329](https://github.com/Hmbown/CodeWhale/issues/4329)
    *   **核心动态**：报告 Anthropic API 返回 HTTP 400 错误，提示 `tool_use` 缺少对应的 `tool_result`，涉及多轮对话工具调用的协议兼容性。
9.  **[CLOSED] Workflow 产品就绪追踪** [#4038](https://github.com/Hmbown/CodeWhale/issues/4038)
    *   **核心动态**：追踪 v0.8.68 工作流功能的完备性，确保其具备稳定的 CLI 运行路径和 TUI 视图。
10. **[OPEN] 离线计费卡 Provider 感知缺失** [#4335](https://github.com/Hmbown/CodeWhale/issues/4335)
    *   **核心动态**：指出当前计费统计仅基于模型 ID 忽略了 Provider，导致自定义代理或不同定价源的费用统计不准确。

## 4. 重要 PR 进展 (Top 10)

1.  **[CLOSED] fix: v0.8.68 TUI 状态与路由真实性修复** [#4332](https://github.com/Hmbown/CodeWhale/pull/4332)
    *   **内容**：修复发布阻塞级 Bug，确保只有有效的 Provider 配置才会被识别，过滤掉空白字段或畸形认证信息，修正 TUI 状态显示。
2.  **[CLOSED] feat(workflow): 无根模型调度持久化 Lane** [#4336](https://github.com/Hmbown/CodeWhale/pull/4336)
    *   **内容**：实现了 `codewhale workflow run` 通过 host-owned 工具直接调度，无需操作者模型轮次，增强了 Workflow 的自动化能力。
3.  **[CLOSED] fix(release): 集成 v0.8.68 TUI 及 Android QA** [#4337](https://github.com/Hmbown/CodeWhale/pull/4337)
    *   **内容**：合并了 Android/TUI 的 QA 验证，包含 Termux 环境下的 PTY 回归测试，标志着移动端适配趋于稳定。
4.  **[CLOSED] docs(release): 对齐 v0.8.68 文档** [#4331](https://github.com/Hmbown/CodeWhale/pull/4331)
    *   **内容**：更新了 FAQ 文档，将 `workflow status` 等示例修正为真实的 `lane status` 命令，确保文档与 v0.8.68 架构一致。
5.  **[CLOSED] fix: 升级依赖解决安全漏洞** [#4328](https://github.com/Hmbown/CodeWhale/pull/4328)
    *   **内容**：修复了 crossbeam-epoch 指针错误和 lopdf 栈溢出等 RUSTSEC 漏洞，显著提升了内存安全性。
6.  **[CLOSED] ci: 添加 RustSec 安全审计与 cargo-deny 检查** [#4272](https://github.com/Hmbown/CodeWhale/pull/4272)
    *   **内容**：引入了自动化的 `cargo-audit` 和 `cargo-deny` 流程，建立长期的安全基线防护机制。
7.  **[CLOSED] Add per-sub-agent provider 路由** [#3969](https://github.com/Hmbown/CodeWhale/pull/3969)
    *   **内容**：允许为子代理单独配置 Provider 路由，虽然被 held for v0.8.68 fleet lane，但为多模型协作提供了基础。
8.  **[OPEN] chore(deps): bump rmcp (MCP SDK)** [#4342](https://github.com/Hmbown/CodeWhale/pull/4342)
    *   **内容**：将 rmcp (Model Context Protocol SDK) 从 1.8.0 升级至 2.2.0，可能涉及新协议特性支持。
9.  **[OPEN] chore(deps): bump colored** [#4343](https://github.com/Hmbown/CodeWhale/pull/4343)
    *   **内容**：常规依赖升级，升级终端颜色输出库至 3.1.1 版本。
10. **[CLOSED] fix: update cargo-deny advisory ignore list** [#4330](https://github.com/Hmbown/CodeWhale/pull/4330)
    *   **内容**：更新安全审计忽略列表，配合 #4328 修复未被维护的衍生依赖问题。

## 5. 功能需求趋势
*   **工作流编排成为核心**：社区与开发重心已从单一功能开发转向宏观的 **Workflow/Fleet 架构**，强调任务的持久化、自动化调度及多代理协同。
*   **TUI 体验精简与降噪**：用户对界面信息密度提出了明确要求，倾向于默认“紧凑模式”，减少底层日志对主要工作流的干扰。
*   **会话持久化与恢复**：对 Session 的历史浏览、断点续传及跨会话记忆（Memory seed）的需求日益增长。
*   **安全性基建**：从最近的 Issue 和 PR 密集度来看，项目正在系统性地解决供应链安全、内存安全漏洞及配置校验问题。

## 6. 开发者关注点
*   **配置系统的健壮性**：开发者反馈在配置自定义 Provider（如 LM Studio）或处理空 Headers 时容易出现解析错误，期望配置加载逻辑更加严格和智能。
*   **API 协议兼容性**：Anthropic API 的 `tool_use` 错误表明，在处理多模态或多轮工具调用时，对不同模型提供商的协议适配仍是痛点。
*   **Agent 的指令遵循能力**：开发者关注 Agent 为何有时忽略“宪法”或既定脚本而选择自行其是，这指出了 Agent 底层推理与上下文权重分配的改进方向。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*