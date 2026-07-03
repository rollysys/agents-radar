# AI CLI 工具社区动态日报 2026-07-03

> 生成时间: 2026-07-03 03:31 UTC | 覆盖工具: 8 个

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

# AI CLI 工具生态横向对比分析报告 (2026-07-03)

## 1. 生态全景
AI CLI 工具正处于从"单轮对话助手"向"多代理协作平台"演进的关键期，核心竞争焦点集中在 **Agent 架构的稳定性**与**企业级安全合规**。各大工具都在通过架构重构（如 OpenCode v2、Gemini Cloud Run）来解决子代理并发、状态汇报和资源泄漏问题。同时，Windows/WSL 平台的体验割裂和数据持久化完整性成为阻碍生产落地的主要痛点。

## 2. 各工具活跃度对比

| 工具名称 | Issues 热度 | PR 活跃度 | 版本发布情况 | 核心动态摘要 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 高 (数据丢失热议) | 低 (4 PRs) | **v2.1.199** | 增强技能堆叠调用；社区爆发会话数据静默丢失与交互超时投诉。 |
| **OpenAI Codex** | 极高 (Linux需求681赞) | 高 (10+ PRs) | 2 Alpha | 密集提交安全加固PR (Git/PowerShell)；社区关注SQLite日志膨胀与Windows卡顿。 |
| **Gemini CLI** | 中 (Agent可靠性) | 高 (10+ PRs) | **v0.51.0-nightly** | 引入 Cloud Run 服务骨架；重点修复 JSON/IPYNB 文件损坏与 Agent 状态误报。 |
| **GitHub Copilot CLI** | 中 (模型报错) | 极低 (无有效PR) | 无 | 无版本发布；社区反馈 GPT-5.3 模型不可用，Agent 模式存在死循环 Bug。 |
| **Kimi Code CLI** | 低 | 低 (1 PR) | 无 | 关注文件读取死循环与 Windows 剪贴板体验修复。 |
| **OpenCode** | 中 (WSL2性能) | 高 (10+ PRs) | 无 | 推进 Core v2 架构升级，实现 MCP Elicitation 与后台 Subagent 运行。 |
| **Qwen Code** | 高 (企业集成) | 高 (10+ PRs) | **v0.19.5** | 新增企业微信机器人通道；优化 Prompt Cache 命中率，解决 Token 计算错误。 |
| **DeepSeek TUI** | 中 (内存溢出) | 中 (多批次修复) | 无 (修复批次) | 修复 Fleet 模式内存溢出 (15GB+)；重构首次运行引导流程。 |

## 3. 共同关注的功能方向

1.  **子代理的稳定性与可观测性**
    *   **涉及工具**: Claude Code, Gemini CLI, OpenCode, DeepSeek TUI, GitHub Copilot CLI。
    *   **具体诉求**: 社区不再满足于简单的任务执行，而是强烈要求 Subagent 具备准确的**状态汇报能力**（如区分“中断”与“成功”）。Claude Code 和 Gemini CLI 均报告了子代理挂起或误报成功的问题；OpenCode 和 DeepSeek TUI 则致力于通过架构改造支持后台运行和内存隔离。这是当前 Agent 落地最核心的痛点。

2.  **Windows/跨平台体验一致性**
    *   **涉及工具**: Claude Code, OpenAI Codex, Kimi Code CLI, OpenCode, DeepSeek TUI。
    *   **具体诉求**: Windows 平台成为“重灾区”。Codex 出现沙箱启动失败和界面卡顿，Claude Code 和 OpenCode 的 WSL 用户遭遇严重的 TUI 滚动或渲染卡顿，Kimi Code 修复了剪贴板兼容问题。跨平台终端交互层的适配质量急需提升。

3.  **数据持久化与完整性**
    *   **涉及工具**: Claude Code, OpenAI Codex, Gemini CLI。
    *   **具体诉求**: Claude Code 爆发的会话静默丢失问题引发了信任危机；Codex 的 SQLite 日志无限增长（高达 640TB/年）威胁存储寿命；Gemini CLI 修复了破坏 JSON/Jupyter 文件结构的严重 Bug。开发者对工作成果留存和数据安全表现出高度敏感。

4.  **自动化与 CI/CD 集成**
    *   **涉及工具**: Claude Code, Qwen Code, GitHub Copilot CLI。
    *   **具体诉求**: 开发者寻求更完善的 Headless 模式支持。Claude Code 在 Headless 模式下意外退出，Copilot CLI 的 `init` 命令无法自动退出，Qwen Code 社区则呼吁增加后台守护进程以支持定时任务。这表明 AI CLI 正试图融入 DevOps 流水线。

## 4. 差异化定位分析

*   **Claude Code**: 定位为**工作流编排专家**。通过"技能堆叠调用"等特性强调复杂任务的链式处理，但近期数据安全问题暴露了其在基础持久化机制上的短板，适合敢于尝鲜的高级开发者。
*   **OpenAI Codex**: 定位为**企业级安全卫士**。今日密集的安全相关 PR（Git 过滤器、PowerShell 解析）显示其将安全边界置于功能之上，适合对合规性要求高的大型企业环境，但 Windows 端体验仍有待打磨。
*   **Gemini CLI**: 定位为**云原生代理服务**。引入 Cloud Run 服务骨架和 AST 代码理解能力，显示其试图将本地 CLI 与云端基础设施深度绑定，适合 Google Cloud 生态用户。
*   **GitHub Copilot CLI**: 定位为**IDE 辅助的延伸**。重点在于模型接入与 VS Code 生态打通，但在 Agent 自主性和 CLI 独立性功能上进展相对滞后（如无有效 PR，模型报错）。
*   **Qwen Code**: 定位为**企业通讯集成中枢**。新增企业微信通道和对 Token 成本的精细控制，显示出强烈的 B 端落地意图，适合国内企业内部办公自动化场景。
*   **OpenCode**: 定位为**前沿架构实验田**。Core v2 架构和会话 Fork 机制显示出其在技术路线上的激进探索，适合热衷于最新架构和开源贡献的极客用户。

## 5. 社区热度与成熟度

*   **最活跃/成熟**: **OpenAI Codex** 和 **Qwen Code**。Codex 社区对 Linux 桌面版的呼声极高（681 赞），且官方对安全问题的响应迅速（多 PR 合并）；Qwen Code 功能迭代快，企业集成需求讨论热烈。
*   **快速迭代期**: **Gemini CLI** 和 **OpenCode**。两者都在进行深度的架构重构（Cloud Run 服务、Core v2），PR 活跃度高，处于功能快速扩张与修补阶段。
*   **问题爆发期**: **Claude Code**。虽然功能创新（技能堆叠）吸引人，但严重的数据丢失 Bug 和 TUI 体验回归问题导致社区负面情绪较重，急需修复信任危机。
*   **相对沉寂**: **GitHub Copilot CLI** 和 **Kimi Code CLI**。Copilot CLI 无版本发布且有效 PR 极少，社区主要围绕模型可用性吐槽；Kimi Code 讨论量较低，处于维护状态。

## 6. 值得关注的趋势信号

1.  **Agent 的“可靠性危机”已至**: 社区关注点已从“能跑 Agent”转向“跑对 Agent”。Gemini CLI 的误报成功、Copilot CLI 的死循环、Claude Code 的子代理钩子失效，均表明多代理系统的编排与状态管理是下一阶段技术攻坚的核心。
2.  **企业级安全边界的建立**: OpenAI Codex 对 Git 钩子和 PowerShell 解析的严防死守，以及 Qwen Code 引入参数级权限控制，标志着 AI CLI 正从“个人玩具”向“企业生产工具”转型，安全防御粒度正在细化到命令注入和参数校验层面。
3.  **Token 效率焦虑**: Qwen Code 社区对 System Prompt 高达 22k Token 的讨论，以及 Anthropic Prompt Cache 的优化，揭示了长上下文模型普及下的隐形成本问题。未来 CLI 工具的竞争力将部分取决于谁更能“省 Token”。
4.  **MCP (Model Context Protocol) 生态的阵痛**: 多个工具（Copilot CLI, Gemini CLI, OpenCode）都在解决 MCP 分页、资源冲突和 Elicitation 支持。MCP 正成为连接外部工具的事实标准，但其复杂度也在引发兼容性挑战。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告 (2026-07-03)

## 1. 热门 Skills 排行

基于 Pull Requests 的排序与内容分析，以下是目前社区关注度最高的 Skills 动态：

1.  **[核心修复] skill-creator 评估工具链修复**
    *   **功能**：修复 `run_eval.py` 在所有测试中报告召回率为 0% 的严重 Bug，同时修复了 Windows 流读取和并行工作者问题。
    *   **热点**：这是 Skill 开发者的核心工具，直接影响 Skill 描述的优化循环。该问题导致优化算法“对噪声进行优化”，阻碍了高质量 Skill 的生成。
    *   **状态**：[OPEN] | 链接：[PR #1298](https://github.com/anthropics/skills/pull/1298)

2.  **[新增功能] document-typography 排版质量控制**
    *   **功能**：解决 AI 生成文档中的常见排版问题（如孤行、寡行、编号错位）。
    *   **热点**：填补了文档生成美观度的空白，属于“用户虽少提及但影响体验”的痛点，被认为对提升文档类 Skill 质量有重要意义。
    *   **状态**：[OPEN] | 链接：[PR #514](https://github.com/anthropics/skills/pull/514)

3.  **[新增功能] ODT (OpenDocument) 支持**
    *   **功能**：提供 OpenDocument 格式文件的创建、填充、解析能力，支持 ODT/ODS 格式。
    *   **热点**：扩展了 Claude Code 在开源办公文档领域的能力，弥补了对非微软系办公文档支持的缺失。
    *   **状态**：[OPEN] | 链接：[PR #486](https://github.com/anthropics/skills/pull/486)

4.  **[新增功能] Self-audit 自我审计机制**
    *   **功能**：在 AI 输出前进行“机械验证+四维推理”的质量门禁检查。
    *   **热点**：近期提交的高价值 Skill，旨在解决 AI 输出的幻觉与文件缺失问题，强调“交付前的自我校验”，契合企业级可靠性需求。
    *   **状态**：[OPEN] | 链接：[PR #1367](https://github.com/anthropics/skills/pull/1367)

5.  **[新增功能] Meta-skills (质量与安全分析器)**
    *   **功能**：引入 `skill-quality-analyzer` 和 `skill-security-analyzer` 两个元技能，用于评估 Skill 本身的结构与安全性。
    *   **热点**：标志着生态开始重视“治理”与“自我进化”，为 Skill 市场的质量把关提供基础设施。
    *   **状态**：[OPEN] | 链接：[PR #83](https://github.com/anthropics/skills/pull/83)

6.  **[改进] Frontend-design 技能增强**
    *   **功能**：重构前端设计 Skill，提升指令的清晰度和可执行性。
    *   **热点**：针对 Skill 指导过于宽泛的问题，致力于让 Claude 能在单次对话中生成更精准的前端代码。
    *   **状态**：[OPEN] | 链接：[PR #210](https://github.com/anthropics/skills/pull/210)

7.  **[新增功能] Testing-patterns 测试模式指南**
    *   **功能**：覆盖全栈测试最佳实践，包括 AAA 模式、React 组件测试、端到端测试等。
    *   **热点**：测试是软件工程的核心环节，该 Skill 旨在标准化 Claude 生成测试代码的逻辑。
    *   **状态**：[OPEN] | 链接：[PR #723](https://github.com/anthropics/skills/pull/723)

---

## 2. 社区需求趋势

通过分析热门 Issues，社区目前最期待的发展方向如下：

*   **安全与信任边界机制 (Top Priority)**
    *   **Issue #492** (34条评论) 指出社区 Skill 冒充官方 Skill 分发（`anthropic/` 命名空间）导致信任边界模糊。社区强烈呼吁建立严格的命名空间隔离和权限验证机制，以防止权限滥用。

*   **跨平台兼容性**
    *   **Issue #1061** 与 **PR #1099/1050** 持续反映 Windows 平台兼容问题（编码错误、子进程调用失败、Pipe 读取异常）。目前 Skill 开发工具链严重偏向 Unix-like 系统，Windows 用户急需官方修复。

*   **企业级协作与共享**
    *   **Issue #228** (14条评论) 呼吁支持组织内部 Skill 共享库。目前的分享方式（手动下载上传）效率低下，企业用户急需类似“内部市场”或链接分享的功能。

*   **Skill 开发工具链的稳定性**
    *   **Issue #556** 与 **#1169** 反映 `run_eval.py` 和描述优化循环失效（Recall=0%），导致开发者无法有效优化 Skill 触发描述。这是当前阻碍 Skill 生态质量提升的最大技术障碍。

*   **多样化文档格式支持**
    *   除了主流的 PDF/DOCX，社区对 ODT (#486)、排版细节 (#514) 以及 SharePoint 集成 (#1175) 的需求正在上升，表明 Claude Code 正在深入办公文档自动化场景。

---

## 3. 高潜力待合并 Skills

以下 PR 虽处于 OPEN 状态，但解决了核心痛点或讨论活跃，极有可能在近期合并：

1.  **PR #1298 - fix(skill-creator)**
    *   **理由**：解决了 Skill 创建工具链中“召回率为零”的致命 Bug，属于核心基础设施修复，直接影响 Skill 开发者体验。
    *   **链接**：[PR #1298](https://github.com/anthropics/skills/pull/1298)

2.  **PR #1367 - feat: add self-audit**
    *   **理由**：提供通用输出校验能力，概念新颖且切中 AI 输出可靠性痛点，近期更新活跃（2026-07-02）。
    *   **链接**：[PR #1367](https://github.com/anthropics/skills/pull/1367)

3.  **PR #83 - Add skill-quality-analyzer**
    *   **理由**：引入了 Skill 市场所需的质量评估标准，有助于提升生态整体质量标准。
    *   **链接**：[PR #83](https://github.com/anthropics/skills/pull/83)

4.  **PR #486 - Add ODT skill**
    *   **理由**：填补了 OpenDocument 格式支持的空白，属于功能拓展类的高优先级需求。
    *   **链接**：[PR #486](https://github.com/anthropics/skills/pull/486)

---

## 4. Skills 生态洞察

当前社区最集中的诉求是：**从“功能可用性”转向“生产级可靠性”，核心矛盾在于开发工具链的不稳定性（Windows/评估脚本）与安全信任机制的缺失。**

---

# Claude Code 社区动态日报 (2026-07-03)

## 1. 今日速览
今日 Claude Code 发布 **v2.1.199** 版本，主要增强了斜杠命令的技能堆叠调用能力，并修复了 SSL 证书错误重试机制。社区方面，**交互超时** 与 **会话数据静默丢失** 成为热议焦点，多个严重 Bug 报告指出自动清理机制可能导致重要工作记录无法恢复。此外，子代理系统的稳定性与钩子机制的完整性也是开发者关注的核心。

## 2. 版本发布
- **v2.1.199**
  - **技能堆叠调用**：支持在一次命令中堆叠加载多个技能（如 `/skill-a /skill-b do XYZ`），最多可加载前导 5 个技能，提升了工作流编排的灵活性。
  - **SSL 错误处理优化**：修复了 TLS 检查代理、证书缺失或过期等情况下的重试消耗问题，现在能更快给出可操作的指导建议，避免无谓的重试浪费。

## 3. 社区热点 Issues (Top 10)

1.  **[#73125](https://github.com/anthropics/claude-code/issues/73125) [BUG] AskUserQuestion: "No response after 60s — continued without an answer"**
    - **热度**：👍 228 | 💬 69
    - **理由**：这是目前社区讨论最激烈的 Bug。用户反馈在 TUI 和 VSCode 环境下，交互式提问常在 60 秒后超时并自动继续，导致用户意图丢失或流程中断，严重影响体验。

2.  **[#65833](https://github.com/anthropics/claude-code/issues/65833) [BUG] v2.1.150: scroll wheel no longer scrolls conversation — sends arrow keys instead**
    - **热度**：👍 53 | 💬 30
    - **理由**：这是一个回归 Bug，影响所有 WSL 用户。滚轮原本用于滚动对话，现在却变成了发送箭头键切换历史命令，导致无法正常查看长对话，严重阻碍日常使用。

3.  **[#59248](https://github.com/anthropics/claude-code/issues/59248) [BUG] Silent retention cleanup deletes session transcripts with no warning**
    - **热度**：👍 10 | 💬 19
    - **理由**：严重的数据完整性问题。用户报告活跃工作区的会话记录被静默清理，无警告且不可恢复。这直接威胁到用户的工作成果留存，引发了社区对数据安全机制的担忧。

4.  **[#41458](https://github.com/anthropics/claude-code/issues/41458) [BUG] cleanupPeriodDays: 99999 ignored — 490 sessions silently deleted**
    - **热度**：👍 2 | 💬 18
    - **理由**：与上一条相关，用户设置了超长保留期（99999天），但系统仍删除了近 500 个会话。配置项失效表明底层的清理逻辑存在严重缺陷。

5.  **[#21943](https://github.com/anthropics/claude-code/issues/21943) Feature Request: Expose subscription usage data via local file or API**
    - **热度**：👍 40 | 💬 11
    - **理由**：高频功能请求。目前查看订阅配额只能通过 `/usage` 命令在终端查看，开发者希望能通过 API 或本地文件读取，以便构建监控工具或集成到其他面板中。

6.  **[#34692](https://github.com/anthropics/claude-code/issues/34692) [BUG] PreToolUse/PostToolUse hooks do not fire for subagent (Agent tool) tool calls**
    - **热度**：👍 7 | 💬 7
    - **理由**：影响高级用户的工作流。当主会话生成子代理时，子代理的工具调用不会触发钩子，导致基于钩子的安全检查、命令重写或监控失效，存在安全隐患。

7.  **[#72639](https://github.com/anthropics/claude-code/issues/72639) [BUG] Opus 4.8 (1M) stream hangs after first chunk since 2.1.154**
    - **热度**：👍 0 | 💬 5
    - **理由**：影响模型使用。Opus 4.8 (1M上下文) 在新版本中流式传输会在第一个块后挂起，阻碍了需要长上下文模型的高级用户工作流。

8.  **[#50911](https://github.com/anthropics/claude-code/issues/50911) [BUG] CronCreate durable:true silently dropped**
    - **热度**：👍 1 | 💬 7
    - **理由**：定时任务功能缺陷。设置 `durable: true` 后，任务仍仅存在于会话中，会话结束即丢失，无法写入持久化配置文件，导致计划任务功能不可用。

9.  **[#73453](https://github.com/anthropics/claude-code/issues/73453) [BUG] 2.1.198: headless -p run exits ~50s after model launches Agent subagent**
    - **热度**：👍 0 | 💬 1
    - **理由**：影响 CI/CD 自动化流程。Headless 模式下，模型启动后台子代理约 50 秒后进程会意外退出，导致自动化任务无法完成。

10. **[#73706](https://github.com/anthropics/claude-code/issues/73706) [BUG] Agent tool calls silently dropped in parallel <invoke> blocks**
    - **热度**：新 Issue
    - **理由**：严重的运行时错误。并行调用 Agent 时，部分 `<invoke>` 块被静默丢弃不执行，且无报错。这会导致复杂任务链执行不完整，难以调试。

## 4. 重要 PR 进展

本日活跃 PR 数量较少（共 4 条），主要集中在文档修复与基础配置。

1.  **[#72451](https://github.com/anthropics/claude-code/pull/72451) fix: remove statsig.anthropic.com from init-firewall.sh**
    - **内容**：从防火墙初始化脚本中移除 `statsig.anthropic.com`。
    - **理由**：该域名已不再解析，导致 devcontainer 启动失败。这是一个影响开发环境搭建的实用修复。

2.  **[#73476](https://github.com/anthropics/claude-code/pull/73476) docs: fix GitHub capitalization in README**
    - **内容**：修正 README 中 "Github" 为 "GitHub" 的大小写拼写错误。

3.  **[#72866](https://github.com/anthropics/claude-code/pull/72866) docs: fix Github -> GitHub typo in README**
    - **内容**：同上，修正文档拼写。

4.  **[#72543](https://github.com/anthropics/claude-code/pull/72543) Create Cha**
    - **状态**：内容不明，可能是无效或测试 PR。

## 5. 功能需求趋势

-   **数据持久化与会话管理**：
    社区对会话数据的控制权表现出强烈的焦虑。自动清理机制的不可预测性（如 #41458）和数据静默丢失（#59248）促使开发者呼吁更精细的会话管理功能，如“固定/书签”特定会话以防误删（#63842）。

-   **可观测性与 API 扩展**：
    开发者不再满足于 CLI 内的交互，更希望将 Claude Code 的能力集成到现有的监控体系中。暴露订阅使用量 API（#21943）是高票需求，表明在企业级使用场景中，配额监控至关重要。

-   **代理系统稳定性**：
    随着多代理工作流的普及，子代理的可靠性成为痛点。钩子不触发（#34692）、结果路由错误（#69212）、并行调用丢失（#73706）等问题表明，Agent 框架层面的健壮性急需加强。

## 6. 开发者关注点

-   **TUI 交互体验倒退**：WSL 和 Linux 用户普遍反映滚轮行为异常（#65833），这属于典型的“能用但很难受”的体验问题，需优先修复以恢复操作手感。
-   **网络环境兼容性**：SSL 证书相关错误在 v2.1.199 中得到官方关注，但仍有大量历史遗留的网络连接问题（#53346），表明在企业防火墙或代理环境下部署仍存在挑战。
-   **Headless 模式的成熟度**：开发者尝试在 CI/CD 中使用 Claude Code，但遇到超时退出（#73453）和交互默认值自动提交（#73650）等问题，说明自动化场景下的无人值守运行机制仍需打磨。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-07-03)

## 1. 今日速览
今日 OpenAI Codex 团队主要致力于**底层安全性与沙箱隔离机制的重构**，提交了多项关于 Git 操作权限、PowerShell 命令解析和补丁应用的 PR，显示出对系统安全边界的严格管控。社区方面，**Windows 平台的兼容性问题**（如沙箱启动失败、应用卡顿）以及**配额消耗异常**引发了大量用户反馈，成为当前的痛点焦点。

## 2. 版本发布
过去 24 小时内发布了两个 Rust 客户端的 Alpha 版本，主要涉及底层依赖更新：
- **[rust-v0.143.0-alpha.35](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.35)**
- **[rust-v0.143.0-alpha.34](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.34)**

## 3. 社区热点 Issues (Top 10)

1.  **[Linux 桌面版需求] Codex desktop app for Linux** (Issue [#11023](https://github.com/openai/codex/issues/11023))
    - **热度**: 👍 681 | 评论 139
    - **点评**: 这是社区呼声最高的功能请求。用户指出 macOS 版本存在耗电问题，强烈希望在 Linux 桌面端获得官方支持。尽管创建已久，但依然是社区最渴望的功能之一。

2.  **[严重性能问题] Codex SQLite feedback logs can write ~640 TB/year** (Issue [#28224](https://github.com/openai/codex/issues/28224))
    - **热度**: 👍 420 | 评论 129
    - **点评**: SQLite 日志写入量惊人，可能严重消耗 SSD 寿命。作者提到已有 3 个 PR 合并以减少 85% 的日志，但 Issue 状态仍为 Open，值得持续关注修复效果。

3.  **[核心 Bug] Codex replies to earlier messages instead of latest one** (Issue [#8648](https://github.com/openai/codex/issues/8648))
    - **热度**: 👍 55 | 评论 73
    - **点评**: 多轮对话中 AI 回复旧消息导致上下文错乱，这是严重影响开发效率的逻辑缺陷，目前仍未解决。

4.  **[用户体验] Add setting to disable the auto-resolve in 60 seconds** (Issue [#28969](https://github.com/openai/codex/issues/28969))
    - **热度**: 👍 74 | 评论 10
    - **点评**: CLI 用户希望在提问后禁用 60 秒自动解析功能，以获得更灵活的控制权，反映了自动化与手动控制之间的权衡需求。

5.  **[计费异常] Usage limits draining abnormally fast on Plus** (Issue [#30918](https://github.com/openai/codex/issues/30918))
    - **热度**: 👍 1 | 评论 5
    - **点评**: 有用户反馈 Plus 账号在 6 分钟内限额从 70% 跳至 100%，疑似计量系统 Bug，直接关系到用户权益，需官方尽快排查。

6.  **[Windows 兼容] Windows Codex Desktop: node_repl/js fails** (Issue [#29193](https://github.com/openai/codex/issues/29193))
    - **热度**: 👍 4 | 评论 21
    - **点评**: Windows 桌面版 MCP 沙箱策略缺失导致 JS 执行工具失败，阻碍了 Windows 用户的代码执行能力。

7.  **[Windows 性能] Codex App frequently freezes/stutters on Windows 11** (Issue [#20214](https://github.com/openai/codex/issues/20214))
    - **热度**: 👍 39 | 评论 23
    - **点评**: 尽管系统资源充足，Windows 11 上 App 仍频繁卡顿，表明客户端性能优化仍有很大提升空间。

8.  **[日志膨胀] logs_2.sqlite-wal grows without bound** (Issue [#28997](https://github.com/openai/codex/issues/28997))
    - **热度**: 👍 3 | 评论 11
    - **点评**: SQLite WAL 文件无限增长至数十 GB，与 Issue #28224 类似，属于数据库管理的严重缺陷。

9.  **[沙箱故障] codex-windows-sandbox-setup.exe fails with module not found** (Issue [#29418](https://github.com/openai/codex/issues/29418))
    - **热度**: 👍 9 | 评论 13
    - **点评**: Windows 沙箱安装程序报错“找不到指定模块”，导致沙箱功能不可用。

10. **[功能请求] Feature request: first-class Computer Use support from CLI** (Issue [#20851](https://github.com/openai/codex/issues/20851))
    - **热度**: 👍 9 | 评论 4
    - **点评**: 用户希望将 Computer Use（电脑操控）能力从桌面端插件下沉为 CLI 的一等公民功能，以实现更强大的自动化脚本。

## 4. 重要 PR 进展 (Top 10)

今日 PR 动态主要集中在**安全加固**与**Git 操作规范化**，核心贡献者 `bookholt-oai` 提交了多个关键修复。

1.  **[安全加固] Trust protected PowerShell parsers and reject opaque wrappers** (PR [#30628](https://github.com/openai/codex/pull/30628))
    - **内容**: 防止恶意 PowerShell 命令绕过检查。系统现在只信任受保护的解析器，拒绝不透明的包装脚本，封堵了 Windows 平台的潜在提权漏洞。

2.  **[安全加固] Validate approval responses against pending authority** (PR [#30963](https://github.com/openai/codex/pull/30963))
    - **内容**: 修复了审批响应仅匹配字符串 ID 导致的鉴权漏洞，防止执行响应误消耗补丁等待队列，强化了权限边界的校验。

3.  **[安全加固] Block selected Git filters before staging patch paths** (PR [#30850](https://github.com/openai/codex/pull/30850))
    - **内容**: 在 `git add` 阶段阻止仓库选择的过滤器运行，防止恶意文件通过过滤器在未检查的情况下执行代码。

4.  **[核心功能] Support interleaved response items** (PR [#30876](https://github.com/openai/codex/pull/30876))
    - **内容**: 支持交错响应项目。允许推理摘要和文本增量事件在流式传输中交错进行，优化了 TUI 输出的完整性和去重逻辑，提升了交互体验。

5.  **[配置增强] Wire reasoning summary delivery configuration** (PR [#30752](https://github.com/openai/codex/pull/30752))
    - **内容**: 新增 `reasoning_summary_delivery` 配置选项，支持 sequential/concurrent 等模式，让开发者能精细控制推理摘要的推送方式。

6.  **[Git 安全] Derive effective patch paths through Git** (PR [#30837](https://github.com/openai/codex/pull/30837))
    - **内容**: 改用 Git 原生命令推导补丁路径，而非自行解析 diff 头，避免了因重命名或复制操作导致的路径校验错误，提升了补丁应用的安全性。

7.  **[安全加固] Preserve command identity across repeated approvals** (PR [#30969](https://github.com/openai/codex/pull/30969))
    - **内容**: 修复命令项在多次审批回调中身份丢失的问题，防止后续回调覆盖父命令元数据。

8.  **[Git 安全] Bind Git worktree helpers to a trusted executable** (PR [#30833](https://github.com/openai/codex/pull/30833))
    - **内容**: 强制 worktree 辅助工具使用绝对路径的可信 Git 可执行文件，防止仓库通过 PATH 环境变量注入恶意 Git 指令。

9.  **[安全加固] Deny implicit transport for local-only Git operations** (PR [#29470](https://github.com/openai/codex/pull/29470))
    - **内容**: 阻止本地 Git 操作（如 diff/status）意外触发远程网络连接，防止在部分克隆场景下仓库触发恶意的传输助手。

10. **[配置功能] Add configurable multi-agent mode hint text** (PR [#30493](https://github.com/openai/codex/pull/30493))
    - **内容**: 允许通过配置自定义多智能体模式的提示文本，为企业部署提供了更灵活的策略控制。

## 5. 功能需求趋势
- **跨平台支持**: Linux 桌面版需求依然高居榜首，macOS 的能耗问题也促使部分用户转向 Linux。
- **稳定性与性能**: Windows 平台的卡顿、冻结及 Sandbox 初始化失败是反馈的重灾区；SQLite 日志膨胀问题对 SSD 寿命的威胁引发开发者担忧。
- **计费与限额透明度**: 近期关于用量限额消耗过快的投诉激增，社区对计费逻辑的透明度提出质疑。
- **CLI 能力增强**: 开发者希望 CLI 能拥有与桌面版同等的能力（如 Computer Use），并拥有更细粒度的控制选项（如禁用自动解析）。

## 6. 开发者关注点
- **安全边界防御**: 官方团队正在密集修补与 Git 钩子、过滤器、PowerShell 解析相关的安全漏洞，建议开发者尽快更新版本以规避潜在的供应链攻击风险。
- **Windows 体验割裂**: Windows 端目前存在较多关于沙箱、MCP 工具（如 node_repl）和 UI 响应的 Bug，建议 Windows 用户关注 Issue 进展，生产环境谨慎使用 Sandbox 功能。
- **存储与日志管理**: 鉴于日志文件可能无限增长，建议开发者定期检查本地存储占用，或暂时通过配置限制日志级别。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-07-03)

## 1. 今日速览
今日 Gemini CLI 发布了 `v0.51.0-nightly` 版本，主要引入了 **Caretaker Egress Cloud Run 服务骨架**，标志着项目在云原生代理服务架构上的进一步探索。社区方面，热点集中在 **Subagent（子代理）的稳定性与状态汇报准确性**，多个高优先级 Bug 反映了代理在达到最大轮次限制时错误汇报成功状态、以及在特定环境下挂起的问题。此外，针对 **JSON/Notebook 文件损坏** 和 **Windows/WSL 启动性能** 的修复成为今日 PR 的亮点。

## 2. 版本发布
- **v0.51.0-nightly.20260703.gf7af4e518**
  - **更新重点**：新增 `caretaker` 模块的 Egress Cloud Run 服务骨架。这是一个轻量级 HTTP 服务，旨在接收并处理来自 Triage Worker 的已验证操作事件，为后续的自动化运维和云端代理交互奠定了基础架构。
  - [查看完整 Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260702.gff00dacd9...v0.51.0-nightly.20260703.gf7af4e518)

## 3. 社区热点 Issues
以下筛选了 10 个最具代表性的 Issue，反映了当前社区在代理自主性、稳定性和工具链方面的核心痛点：

1.  **[P1 Bug] Subagent 达到最大轮次后错误汇报成功**
    - **链接**：[Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)
    - **解析**：`codebase_investigator` 子代理在触及 `MAX_TURNS` 限制中断时，仍汇报 `status: "success"`。这严重误导用户和主代理，导致任务未完成却被标记为成功，是当前 Agent 编排中最危险的可靠性问题之一。

2.  **[P1 Bug] Generalist Agent（通用代理）无限挂起**
    - **链接**：[Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)
    - **解析**：用户反馈调用通用代理时经常出现永久卡死，即便简单的创建文件夹操作也会挂起。该问题迫使用户手动禁用子代理功能，直接影响工具的可用性。

3.  **[P2 Enhancement] 零依赖 OS 沙箱与 Bash 亲和性增强**
    - **链接**：[Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)
    - **解析**：提议利用模型原生的 Bash 能力结合沙箱技术，在不依赖 Docker 等重型容器的情况下实现安全执行。这是社区呼声很高的方向，旨在平衡模型能力与系统安全性。

4.  **[P2 Feature] AST（抽象语法树）感知的文件读取与搜索**
    - **链接**：[Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)
    - **解析**：建议引入 AST 工具以精确读取方法边界，减少 Token 浪费和误读。这反映了开发者对代码理解精度的更高要求，是从“文本拼接”向“代码理解”演进的关键一步。

5.  **[P1 Bug] Shell 命令执行完成后卡在 "Waiting input"**
    - **链接**：[Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)
    - **解析**：CLI 在执行完简单 Shell 命令后未能正确识别结束状态，导致界面假死。这是终端交互层的核心体验问题。

6.  **[P2 Bug] 模型未充分利用自定义 Skills 和 Sub-agents**
    - **链接**：[Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)
    - **解析**：即便定义了高度相关的 Skills（如 Gradle/Git），模型仍倾向于自行处理而非调用工具。这揭示了当前 Prompt 策略或模型路由逻辑在工具调用决策上的短板。

7.  **[P2 Security] 自动记忆功能需增加确定性脱敏**
    - **链接**：[Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)
    - **解析**：Auto Memory 在处理本地日志时，仅在模型上下文中进行脱敏提示，存在泄露风险。社区要求在写入或发送前进行确定性的敏感信息过滤。

8.  **[P1 Bug] Browser Subagent 在 Wayland 环境下失败**
    - **链接**：[Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)
    - **解析**：Linux 桌面环境兼容性问题，Browser Agent 无法在现代 Wayland 显示协议下正常工作，阻碍了 Linux 开发者的使用。

9.  **[P2 Bug] 工具数量超过 128 个时触发 400 错误**
    - **链接**：[Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)
    - **解析**：Gemini CLI 在工具集过大时缺乏智能筛选机制，直接触达 API 限制。需要改进工具过滤逻辑以支持复杂项目。

10. **[P2 Bug] ~/.gemini/agents 不识别符号链接文件**
    - **链接**：[Issue #20079](https://github.com/google-gemini/gemini-cli/issues/20079)
    - **解析**：用户习惯用符号链接管理配置，此限制降低了工作流灵活性。

## 4. 重要 PR 进展
今日有多项关键修复和功能合并，重点解决了文件处理、性能和云服务集成问题：

1.  **[Merged] feat(caretaker): egress cloud run service skeleton**
    - **链接**：[PR #28167](https://github.com/google-gemini/gemini-cli/pull/28167)
    - **内容**：构建了 Cloud Run 服务骨架，用于处理代理的出口流量事件，为云端托管代理行为提供基础设施支持。

2.  **[Open] fix(cli): detect available editors lazily to avoid slow startup**
    - **链接**：[PR #28144](https://github.com/google-gemini/gemini-cli/pull/28144)
    - **内容**：将编辑器探测逻辑改为懒加载，解决 Windows 等进程创建开销大的系统上 CLI 启动缓慢的问题。

3.  **[Open] fix(core-tools): bypass LLM correction for JSON and IPYNB files**
    - **链接**：[PR #28223](https://github.com/google-gemini/gemini-cli/pull/28223)
    - **内容**：修复了 `write_file` 和 `replace` 工具破坏 JSON 和 Jupyter Notebook 文件格式的严重问题，针对结构化文件绕过 LLM 的文本纠正逻辑。

4.  **[Open] Fix #28227: add support for AGENTS.md out of the box**
    - **链接**：[PR #28240](https://github.com/google-gemini/gemini-cli/pull/28240)
    - **内容**：默认支持读取 `AGENTS.md` 文件作为上下文，无需手动配置，增强了对多代理协作项目的原生支持。

5.  **[Open] fix(deps): patch shell command dependency advisories**
    - **链接**：[PR #28140](https://github.com/google-gemini/gemini-cli/pull/28140)
    - **内容**：升级 `shell-quote` 和 `simple-git` 依赖以修复安全漏洞，涉及 Shell 命令处理和 Git 操作，属于预防性安全维护。

6.  **[Open] fix(core): resolve MCP resources by server to prevent cross-server confusion**
    - **链接**：[PR #28143](https://github.com/google-gemini/gemini-cli/pull/28143)
    - **内容**：修复了当多个 MCP 服务器暴露相同 URI 资源时，读取错误服务器内容的问题，增强了多源集成环境下的稳定性。

7.  **[Closed] fix(cli): sync footer branch name on filesystems without fs.watch events**
    - **链接**：[PR #28012](https://github.com/google-gemini/gemini-cli/pull/28012)
    - **内容**：解决了在 WSL 挂载点或网络驱动器上，Git 分支切换后 CLI 底部状态栏不同步的问题。

8.  **[Open] fix(core): honor GOOGLE_CLOUD_LOCATION for Vertex AI with API key**
    - **链接**：[PR #28142](https://github.com/google-gemini/gemini-cli/pull/28142)
    - **内容**：修复了使用 API Key 认证 Vertex AI 时忽略 `GOOGLE_CLOUD_LOCATION` 环境变量的 Bug，确保请求路由到正确的区域端点。

9.  **[Open] docs(policy-engine): use a safe test command instead of rm -rf /**
    - **链接**：[PR #28244](https://github.com/google-gemini/gemini-cli/pull/28244)
    - **内容**：修正了文档中演示策略引擎时的危险示例命令，将 `rm -rf /` 替换为更安全的测试命令，避免用户误操作。

10. **[Closed] fix(prompts): use function replacer in applySubstitutions**
    - **链接**：[PR #28013](https://github.com/google-gemini/gemini-cli/pull/28013)
    - **内容**：修复了在替换变量时 `$` 模式字符导致文本损坏的问题，保障了 Skill 和 Subagent 描述注入的安全性。

## 5. 功能需求趋势
从近期 Issues 的聚合分析来看，Gemini CLI 正处于从“能用”向“好用、可信”的转型期：

1.  **代理行为的可观测性与可靠性**：社区不再满足于简单的任务执行，而是强烈要求 Subagent 具备准确的状态汇报能力（如区分“中断”与“成功”）和更健壮的错误恢复机制。
2.  **结构化代码理解 (AST)**：随着项目规模扩大，传统的文本匹配和正则搜索已无法满足需求，AST 级别的代码感知成为提升代理编码精度的必经之路。
3.  **安全与权限控制的细化**：从防止 `rm -rf` 到自动内存的脱敏，用户对 CLI 在本地执行高风险命令和传输敏感数据时的安全性提出了更高要求。
4.  **性能优化**：针对 Windows/WSL 的启动速度优化、Shell 执行的卡顿修复，表明社区正在积极打磨跨平台体验的细节。

## 6. 开发者关注点
- **文件完整性风险**：近期 PR 显示，CLI 曾存在破坏 JSON 和 IPYNB 文件结构的风险，建议开发者立即升级至最新 Nightly 版本以避免数据损坏。
- **WSL/Windows 体验改善**：启动速度和文件监听问题正在被针对性修复，Windows 平台的开发体验有望显著提升。
- **环境变量配置注意**：使用 Vertex AI 的开发者需注意检查 `GOOGLE_CLOUD_LOCATION` 是否生效，相关修复已提交。
- **多云/多源支持**：MCP 资源解析的修复意味着在集成多个外部工具源时将更加可靠，建议关注相关更新的开发者进行测试。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-07-03)

## 1. 今日速览
今日 GitHub Copilot CLI 社区活跃度较高，虽然没有新版本发布，但 Issues 讨论热烈。社区焦点集中在**新模型支持**与**稳定性**上，出现了关于 `gpt-5.3-codex` 模型不可用的报错反馈，以及关于自定义模型端点的强烈需求。此外，Windows 平台的渲染问题和 Agent 模式下的死循环问题依然是用户痛点。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues (Top 10)

1.  **[模型支持] gpt-5.3-codex 模型不可用导致 Agent 运行失败**
    *   **链接:** [Issue #3997](github/copilot-cli Issue #3997)
    *   **亮点:** 用户报告在使用 Agent 模式时遇到 `Model "gpt-5.3-codex" is not available` 错误。这表明 CLI 可能正在适配新模型，但当前版本存在可用性问题，影响了核心的代码生成功能。
    *   **社区反应:** 评论数 6 条，用户确认存在类似问题，等待官方修复。

2.  **[UI/渲染] Windows 终端滚动条导致文本错位**
    *   **链接:** [Issue #3501](github/copilot-cli Issue #3501)
    *   **亮点:** 这是一个长期存在的问题，Windows 平台引入垂直滚动条后，文本渲染出现对齐问题，严重影响阅读体验。尽管有 9 个点赞，但目前尚未有彻底的修复方案。
    *   **社区反应:** 👍 9，受影响用户众多，急需解决。

3.  **[Agent 稳定性] Agent 陷入 Plan→Compact→Re-Plan 死循环**
    *   **链接:** [Issue #3158](github/copilot-cli Issue #3158)
    *   **亮点:** 高严重性 Bug。当上下文填满时，Agent 没有执行任务，而是在“压缩上下文”和“重新规划”之间无限循环（报告称达 217 次），导致零产出。这反映了当前 Agent 在长上下文处理上的逻辑缺陷。
    *   **社区反应:** 评论数 3 条，被标记为高优先级关注。

4.  **[功能需求] 支持自定义模型端点**
    *   **链接:** [Issue #4003](github/copilot-cli Issue #4003)
    *   **亮点:** 用户希望 CLI 能像 VS Code 那样支持配置自定义模型端点，以便接入本地模型或企业私有模型。这是企业级应用和本地开发者的核心需求。
    *   **社区反应:** 评论数 2 条，功能呼声高。

5.  **[编辑器集成] Ctrl+G 编辑时应展开粘贴的文本块**
    *   **链接:** [Issue #3936](github/copilot-cli Issue #3936)
    *   **亮点:** 功能对齐请求。当前粘贴大段代码后显示为折叠的 Token，使用 `$EDITOR` 编辑时写入的是字面量 Token 而非实际内容，严重影响工作流。用户希望能像 Claude Code 一样自动展开。

6.  **[MCP 集成] 添加 MCP Server 时界面渲染混乱**
    *   **链接:** [Issue #4014](github/copilot-cli Issue #4014)
    *   **亮点:** 在使用 `/mcp` 命令添加服务器时，UI 界面渲染完全错乱。MCP (Model Context Protocol) 是扩展 Copilot 能力的关键路径，此类 UI Bug 会严重阻碍新用户配置环境。

7.  **[BYOK] 自定义模型不支持 reasoning effort 参数**
    *   **链接:** [Issue #4012](github/copilot-cli Issue #4012)
    *   **亮点:** 用户在使用 BYOK (Bring Your Own Key) 配置 `glm-5.2:cloud` 模型时，尝试设置推理深度 (`--reasoning-effort`) 失败。说明 CLI 对第三方模型的参数适配还不够完善。

8.  **[自动化] `/init` 命令不支持非交互模式**
    *   **链接:** [Issue #4011](github/copilot-cli Issue #4011)
    *   **亮点:** 用户希望在 Shell 脚本中运行 `copilot init`，但当前命令在创建文件后会挂起等待输入，无法自动退出。阻碍了 CI/CD 流程的自动化集成。

9.  **[MCP 协议] 未遵循 MCP tools/list 分页规范**
    *   **链接:** [Issue #4006](github/copilot-cli Issue #4006)
    *   **亮点:** 技术细节 Bug。CLI 在获取 MCP 工具列表时忽略了 `nextCursor` 分页符，只加载第一页工具，导致部分工具丢失。这违反了 MCP 规范，影响插件生态的完整性。

10. **[平台差异] Windows 下 .claude/settings.json 钩子执行失败**
    *   **链接:** [Issue #4001](github/copilot-cli Issue #4001)
    *   **亮点:** Windows 环境下，Copilot 强制通过 PowerShell 而非 Bash 执行钩子脚本，且未设置关键环境变量，导致所有钩子脚本运行失败。这对跨平台支持构成了挑战。

## 4. 重要 PR 进展
过去 24 小时内更新的 PR 数量较少（仅 2 条），且内容多为非功能性提交或疑似垃圾内容，**暂无值得关注的重要功能性 PR 进展**。

*   *(注：现有 PR #3880 和 #3873 内容疑似无关代码片段或测试提交，未予收录)*

## 5. 功能需求趋势
从今日的 Issues 中可以提炼出以下核心关注方向：

1.  **模型灵活性与 BYOK (Bring Your Own Key):**
    社区强烈希望 CLI 能打破默认模型限制，支持自定义端点（本地模型）、自定义模型参数以及更广泛的外部模型接入。同时，对新版模型（如 GPT-5.3）的稳定性关注度极高。

2.  **MCP (Model Context Protocol) 生态完善:**
    随着 MCP 的推广，用户开始深入使用，暴露出分页加载、UI 渲染、服务器配置文件注册等一系列集成问题。这表明 MCP 正从实验性功能转向核心依赖，稳定性亟需提升。

3.  **自动化与 CI/CD 集成:**
    开发者寻求更完善的非交互模式支持，希望 CLI 能无缝嵌入自动化脚本和流水线中，解决诸如 `init` 挂起、钩子执行环境不一致等问题。

## 6. 开发者关注点
*   **Windows 平台体验断层:** 滚动条渲染、触屏滚动支持 (#3570)、Hook 执行环境等问题集中爆发，Windows 用户的 CLI 体验明显落后于 macOS/Linux。
*   **Agent 模式的可靠性:** 长上下文下的死循环问题让开发者对 Agent 模式的稳定性感到担忧。
*   **UI 细节体验:** 主题设置无法保存 (#4015)、剪贴板复制失败 (#3996, #4010) 等细节问题影响了日常使用的流畅度。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-07-03)

## 1. 今日速览
今日 Kimi Code CLI 社区整体活跃度平稳，无新版本发布。社区关注点主要集中在长期存在的稳定性问题及跨平台兼容性优化上。一个关于文件读取死循环的 Bug 再次引发讨论，同时有一项针对 Windows 终端剪贴板体验的 PR 正在审核中。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues
今日共有 2 条 Issue 更新，详情如下：

*   **[#640 [OPEN] [bug] Kimi CLI stuck in reading one file again and again and stuck in a loop](https://github.com/MoonshotAI/kimi-cli/issues/640)**
    *   **重要性**：这是一个影响核心工作流的高优先级 Bug。用户报告 CLI 在 Arch Linux 环境下使用 custom anthropic endpoint 时，会陷入文件读取的死循环，导致程序卡死。该 Issue 创建于 1 月，今日再次活跃，累计评论已达 16 条，说明该问题具有一定的复现难度或普遍性，急需官方关注。
*   **[#1111 [CLOSED] [bug] kimi web use tailscale websocket connecttion error](https://github.com/MoonshotAI/kimi-cli/issues/1111)**
    *   **重要性**：该 Issue 涉及特定网络环境（Tailscale）下的 WebSocket 连接问题。 Issue 已被关闭，表明该网络兼容性问题已得到解决或不再复现，对遇到类似网络穿透问题的用户具有参考价值。

## 4. 重要 PR 进展
今日共有 1 条 PR 更新，详情如下：

*   **[#2481 [OPEN] fix(shell): read clipboard media on BracketedPaste for Windows terminals](https://github.com/MoonshotAI/kimi-cli/pull/2481)**
    *   **内容**：该 PR 修复了 Windows Terminal 和 VS Code 集成终端中的一个体验痛点。在 Windows 环境下，`Ctrl+V` 通常触发 `BracketedPaste` 事件，导致二进制内容（如图片）无法作为文本传递，进而粘贴失败。作者改进了 `_handle_bracketed_paste()` 逻辑，优先尝试读取剪贴板媒体内容，显著提升了 Windows 用户的图片粘贴体验。

## 5. 功能需求趋势
基于近期 Issue 反馈，社区关注方向如下：

*   **稳定性与容错性**：CLI 在执行长时任务或特定模型配置下的稳定性是用户最关心的点，如文件系统操作的死循环问题。
*   **跨平台体验一致性**：Windows 端的终端交互体验（如粘贴板支持）仍需打磨，社区正积极贡献代码填补差距。
*   **网络环境兼容性**：针对 Tailscale 等特殊网络环境的连接兼容性也是部分用户的关注重点。

## 6. 开发者关注点
*   **程序假死与循环依赖**：开发者反馈在特定配置下（如自定义 endpoint），CLI 容易陷入逻辑死循环，需优化错误处理或循环中断机制。
*   **Windows 终端交互**：Windows 开发者对剪贴板操作（特别是富文本/媒体内容）的体验敏感，希望获得与 GUI 应用类似的流畅粘贴体验。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-07-03)

## 1. 今日速览
今日 OpenCode 社区重点聚焦于 **Core v2 架构升级与多 Agent 协同能力增强**。核心开发团队提交了多项关键 PR，包括支持 MCP elicitation、会话 Fork 机制以及后台运行 Subagents，显著提升了工具的可扩展性与并行处理能力。同时，社区对 WSL2 环境下的性能回归问题（TUI 卡顿）反响强烈，建议开发者关注相关稳定性修复。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues

1.  **[WSL2] TUI 周期性卡顿严重影响体验**
    *   **链接**: [anomalyco/opencode Issue #5361](https://github.com/anomalyco/opencode/issues/5361)
    *   **摘要**: 用户报告在 WSL2 环境下，TUI 会出现约 2-10 秒的周期性冻结，输入缓冲滞后，严重影响编码效率。这是一个回归问题，引起大量 Windows 开发者共鸣（👍 15）。

2.  **快捷键 Shift-Return 无法换行**
    *   **链接**: [anomalyco/opencode Issue #4046](https://github.com/anomalyco/opencode/issues/4046)
    *   **摘要**: 自 v1.0 起，Shift-Return 快捷键在多个终端（如 Ghostty、macOS Terminal）中失效，无法输入换行符。这是一个影响日常输入体验的基础交互问题。

3.  **功能请求：切换会话时保留模型与 Agent 设置**
    *   **链接**: [anomalyco/opencode Issue #4930](https://github.com/anomalyco/opencode/issues/4930)
    *   **摘要**: 用户希望在会话间切换时，系统能记住当前选择的模型和 Agent，而非重置为默认值。这是工作流连续性的一大痛点。

4.  **Figma MCP 连接返回 HTTP 405 错误**
    *   **链接**: [anomalyco/opencode Issue #5636](https://github.com/anomalyco/opencode/issues/5636)
    *   **摘要**: 尝试连接远程 Figma MCP Server 时遭遇认证失败（405 Method Not Allowed）。集成设计工具是开发者的常见需求，此问题阻碍了设计开发工作流。

5.  **macOS 主题 OSC 11 检测失效**
    *   **链接**: [anomalyco/opencode Issue #23196](https://github.com/anomalyco/opencode/issues/23196)
    *   **摘要**: 自 4 月起，OpenCode 在 macOS 上无视终端背景色，始终渲染浅色主题变体，导致深色模式用户视觉体验极差。

6.  **Ministral 3 模型兼容性报错**
    *   **链接**: [anomalyco/opencode Issue #5034](https://github.com/anomalyco/opencode/issues/5034)
    *   **摘要**: 使用 Mistral 新推出的 Ministral 3 时报错 "Only user, assistant and tool roles are supported, got system"。模型适配是 AI 工具迭代的关键。

7.  **Linux 下的复制粘贴行为异常**
    *   **链接**: [anomalyco/opencode Issue #4754](https://github.com/anomalyco/opencode/issues/4754)
    *   **摘要**: Linux 环境下 OpenCode 干扰了系统原生的 X11 primary selection（中键粘贴），导致复制粘贴行为不符合预期。

8.  **功能请求：桌面版支持通过 WSL 运行后端**
    *   **链接**: [anomalyco/opencode Issue #5635](https://github.com/anomalyco/opencode/issues/5635)
    *   **摘要**: Windows 用户的开发环境常位于 WSL 中，目前的桌面应用仅启动原生 Windows 后端，导致无法访问 WSL 内的项目，社区强烈呼吁支持 WSL 后端（👍 40）。

9.  **请求支持 Ty + Ruff LSP 替代 Pyright**
    *   **链接**: [anomalyco/opencode Issue #5345](https://github.com/anomalyco/opencode/issues/5345)
    *   **摘要**: 开发者指出 Astral 的 `ty` LSP 比 Pyright 性能更优，请求将其作为 Python 语言服务器选项，反映了社区对极致性能的追求。

10. **自定义 Provider 文档错误**
    *   **链接**: [anomalyco/opencode Issue #5937](https://github.com/anomalyco/opencode/issues/5937)
    *   **摘要**: 官方文档关于添加非标准 OpenAI-compatible provider 的说明与实际 CLI 行为不符，导致用户配置受阻。

## 4. 重要 PR 进展

1.  **feat(core): MCP Elicitation 支持**
    *   **链接**: [anomalyco/opencode PR #35064](https://github.com/anomalyco/opencode/pull/35064)
    *   **摘要**: 核心 v2 架构中实现了 MCP (Model Context Protocol) 的 elicitation 支持，允许模型主动请求信息或操作，增强了 Agent 的交互能力。

2.  **feat(tui): 后台运行 Subagents**
    *   **链接**: [anomalyco/opencode PR #34566](https://github.com/anomalyco/opencode/pull/34566)
    *   **摘要**: 实现了在 TUI 中通过 `Ctrl+B` 将子任务放入后台运行的功能，这是迈向多任务并行处理的关键一步。

3.  **feat(core): 实现 v2 会话 Fork 机制**
    *   **链接**: [anomalyco/opencode PR #34343](https://github.com/anomalyco/opencode/pull/34343)
    *   **摘要**: 引入会话 Fork 功能，允许基于当前会话状态创建子会话，便于开发者在不影响主线的情况下探索不同路径。

4.  **fix(opencode): 忽略 Reasoning 块中的工具调用**
    *   **链接**: [anomalyco/opencode PR #35059](https://github.com/anomalyco/opencode/pull/35059)
    *   **摘要**: 修复了 Qwen、Kimi 等 Reasoning 模型在推理块中错误发出工具调用导致程序崩溃的问题，提升了模型兼容性。

5.  **refactor(core): 内置工具迁移为内部插件**
    *   **链接**: [anomalyco/opencode PR #34956](https://github.com/anomalyco/opencode/pull/34956)
    *   **摘要**: 完成架构重构，将所有内置工具（如 Shell、Glob）转换为通过插件接口注册，统一了内部与外部插件的扩展机制。

6.  **fix(core,tui): 修复 Compaction 状态卡死问题**
    *   **链接**: [anomalyco/opencode PR #34919](https://github.com/anomalyco/opencode/pull/34919)
    *   **摘要**: 解决了执行 `/compact` 指令后 TUI 状态永久卡在 "running" 的问题，优化了会话压缩流程的事件处理。

7.  **feat(server): 内存模拟文件系统**
    *   **链接**: [anomalyco/opencode PR #35065](https://github.com/anomalyco/opencode/pull/35065)
    *   **摘要**: 新增内存模拟文件系统支持，为沙箱环境运行和测试提供了基础设施，防止宿主文件系统被意外修改。

8.  **fix(core): 允许恢复 Subagents**
    *   **链接**: [anomalyco/opencode PR #35025](https://github.com/anomalyco/opencode/pull/35025)
    *   **摘要**: 增加了 `subagent_id` 输入支持，允许模型复用并继续已有的子会话，提升了长任务的连贯性。

9.  **fix(tui): 修复 v2 Question 事件监听**
    *   **链接**: [anomalyco/opencode PR #35068](https://github.com/anomalyco/opencode/pull/35068)
    *   **摘要**: 修正了 TUI 同步层监听 v1 事件导致无法接收服务器 v2 事件的 Bug，确保问答交互流程正常。

10. **fix(tui): 修复主屏幕 @file 自动补全失效**
    *   **链接**: [anomalyco/opencode PR #34829](https://github.com/anomalyco/opencode/pull/34829)
    *   **摘要**: 解决了在无会话的主屏幕下输入 `@` 无法触发文件补全的问题，提升了初始配置的便捷性。

## 5. 功能需求趋势
*   **多 Agent 与并发控制**：社区强烈需求后台任务执行（PR #34566）和会话 Fork（PR #34343），显示出开发者正尝试将 AI 编码助手融入更复杂的并发工作流中。
*   **跨平台体验一致性**：WSL2 性能问题、Linux 复制粘贴、macOS 主题检测等问题集中出现，表明 OpenCode 在不同操作系统环境下的兼容性打磨仍是重点。
*   **模型兼容性与扩展**：用户关注最新的模型（如 Ministral 3, Kimi K2）及 Reasoning 模型的适配，同时希望有更灵活的自定义 Provider 接入能力。

## 6. 开发者关注点
*   **WSL2 性能回归**：Issue #5361 反映的周期性卡顿已成为 Windows 用户的最大痛点，需要尽快定位 WSL 特定环境下的 I/O 或渲染瓶颈。
*   **Reasoning 模型适配**：随着 DeepSeek R1、Kimi K2 等 Reasoning 模型流行，如何正确处理其特殊的输出格式（如 `<think>` 块内的错误工具调用）是工具层面临的挑战（PR #35059）。
*   **上下文管理**：从文件附件处理到会话 Compact 状态，开发者对上下文的加载、压缩和持久化非常敏感，任何导致上下文丢失或界面卡死的行为都会严重影响体验。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-07-03)

## 1. 今日速览
今日 Qwen Code 发布了 **v0.19.5 正式版**，重点强化了 Daemon（守护进程）管理的 Channel Worker 稳定性，并修复了 Web Shell 的会话创建逻辑。社区关注度主要集中在**多模态模型支持**（Vision Bridge UI）、**Token 上下文窗口计算准确性**以及**企业级通讯软件集成**（企业微信机器人）上。此外，针对性能优化，社区提出了关于 System Prompt 开销过大和 Anthropic Prompt Cache 命中率的问题。

## 2. 版本发布
### v0.19.5 (Stable)
- **核心更新**：
    - **Daemon 加固**：增强了 CLI 中 Daemon 管理的 Channel Worker 机制 ([PR #6098](https://github.com/QwenLM/qwen-code/pull/6098))。
    - **Web Shell 修复**：延迟会话创建直到首次提示输入，优化资源占用。
- **详细链接**：[Release v0.19.5](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.5)

### v0.19.5-nightly.20260703
- **核心更新**：
    - **移动端性能优化**：修复了移动端 Web Shell 切换会话时的卡顿问题，通过 memoized timeline signature 和 replay-first dispatch 优化了渲染性能 ([PR #618](https://github.com/QwenLM/qwen-code/pull/618))。
- **详细链接**：[Release v0.19.5-nightly](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.5-nightly.20260703.b16baf1ff)

## 3. 社区热点 Issues (Top 10)

1.  **[P2] Daemon UI 需支持 Vision Bridge 模型选择** ([#6195](https://github.com/QwenLM/qwen-code/issues/6195))
    - **摘要**：目前 CLI 已支持通过 `/model --vision` 选择视觉模型，但 Daemon UI 尚未适配。社区呼吁在 UI 中增加视觉桥接模型的持久化配置选项，以完善多模态体验。

2.  **[P2] 上下文窗口 计算错误** ([#6144](https://github.com/QwenLM/qwen-code/issues/6144))
    - **摘要**：用户配置了 64k 上下文的模型，但 Qwen-Code 计算出的窗口大小严重不符。这涉及核心的 Token 管理逻辑，直接影响长上下文模型的使用体验。

3.  **[P2] Web Shell 思考过程显示异常 ("Thought for 0s")** ([#6175](https://github.com/QwenLM/qwen-code/issues/6175))
    - **摘要**：使用 OpenAI 兼容接口流式输出 `reasoning_content` 时，UI 显示思考耗时为 0s，且思考内容非流式显示。这是对 Reasoning 模型体验影响较大的 Bug。

4.  **[P1] VSCode 伴生插件发布失败 (Secret Token 检测)** ([#6199](https://github.com/QwenLM/qwen-code/issues/6199))
    - **摘要**：发布流程中 `vsce` 工具错误地将 Slack Token 正则表达式识别为硬编码密钥，导致 v0.19.5 的 VSCode 插件发布受阻，属于 CI/CD 层面的阻碍性问题。

5.  **[P2] 本地常驻 `/schedule` 守护进程功能请求** ([#6112](https://github.com/QwenLM/qwen-code/issues/6112))
    - **摘要**：社区期望增加类似 Claude Code 的后台定时任务功能，允许在没有交互会话的情况下本地运行 Cron 任务，这是迈向自动化 Agent 的关键特性。

6.  **[P2] System Prompt 固定开销过高 (~22k Tokens)** ([#6097](https://github.com/QwenLM/qwen-code/issues/6097))
    - **摘要**：开发者发现即使输入极简内容，System Prompt 的 Token 消耗也高达 2 万以上，导致有效信噪比极低。这引发了关于 Prompt 压缩和优化机制的深入讨论。

7.  **[P2] 淘宝镜像源更新滞后** ([#6218](https://github.com/QwenLM/qwen-code/issues/6218))
    - **摘要**：国内用户反馈淘宝 NPM 镜像源落后官方三个版本，导致更新受阻，影响了国内开发者的使用体验。

8.  **[P2] Windows 非 UTF-8 控制台下 Shell 命令乱码** ([#6214](https://github.com/QwenLM/qwen-code/issues/6214))
    - **摘要**：在 Windows 默认代码页环境下，`run_shell_command` 输出乱码。这是跨平台兼容性的典型痛点。

9.  **[P2] 新增企业微信 机器人通道** ([#6208](https://github.com/QwenLM/qwen-code/issues/6208))
    - **摘要**：开发者请求内置企业微信智能机器人的 Channel 适配器，以便通过 Web Shell 集成企业办公场景。

10. **[P1] 移动端会话切换严重卡顿** ([#6181](https://github.com/QwenLM/qwen-code/issues/6181))
    - **摘要**：详细分析了移动端 Web Shell 切换会话时的卡顿原因（全量历史加载、同步渲染阻塞），该问题已在今日的 Nightly 版本中尝试修复。

## 4. 重要 PR 进展 (Top 10)

1.  **feat(channels): add WeCom intelligent robot channel** ([#6224](https://github.com/QwenLM/qwen-code/pull/6224))
    - **内容**：新增企业微信智能机器人通道支持，使用官方 SDK 替代自建应用回调，简化了配置流程。这是响应社区企业集成需求的重要更新。

2.  **fix(core): preserve OpenAI reasoning as raw thoughts** ([#6192](https://github.com/QwenLM/qwen-code/pull/6192))
    - **内容**：修复 OpenAI 兼容接口的 Reasoning 内容解析问题，不再尝试解析 Gemini 风格的结构化思维，而是保留原始流式思维描述，修复了 Issue #6175 相关的问题。

3.  **fix(cache): preserve tools prefix in side-query for Anthropic prompt-cache hits** ([#6225](https://github.com/QwenLM/qwen-code/pull/6225))
    - **内容**：优化 Anthropic Prompt Cache 策略，修复了 Side-query（建议模式）剥离 tools 导致缓存键变更的问题，预计可显著提升缓存命中率和降低成本。

4.  **feat(core): add Tool(param:value) permission syntax** ([#6106](https://github.com/QwenLM/qwen-code/pull/6106))
    - **内容**：引入参数级权限控制语法，允许用户基于输入参数值授权或拒绝工具调用（如 `Agent(model:opus)` 限制特定模型），极大增强了权限控制的精细度。

5.  **feat(daemon): add session artifact APIs** ([#5895](https://github.com/QwenLM/qwen-code/pull/5895))
    - **内容**：实现了 Daemon 会话 Artifacts 的完整 API，允许 Agent 和工具将结构化元数据附加到会话中，为后续的 UI 展示和复杂任务管理打下基础。

6.  **ci(autofix): run agents on dedicated ECS runners** ([#6207](https://github.com/QwenLM/qwen-code/pull/6207))
    - **内容**：将 Autofix Agent 任务路由到专用的自托管 ECS Runner，解决资源竞争问题，提升 CI 自动修复流水线的稳定性。

7.  **fix(cli): stream long responses into scrollback to stop scroll-to-top lock** ([#6170](https://github.com/QwenLM/qwen-code/pull/6170))
    - **内容**：修复了 CLI 在流式输出长回复（特别是包含 Markdown 表格）时，视口被强制锁定在顶部的 Bug，显著改善了终端交互体验。

8.  **fix(web-shell): improve session restore and loading feedback** ([#6220](https://github.com/QwenLM/qwen-code/pull/6220))
    - **内容**：优化 Web Shell 会话恢复体验，增加骨架屏加载状态，避免旧历史记录在新会话加载时产生动画干扰，提升了 UI 响应感知速度。

9.  **feat(cua-driver): sync vendored cua-driver 0.6.8 → 0.7.0** ([#6212](https://github.com/QwenLM/qwen-code/pull/6212))
    - **内容**：同步 CUA (Computer Use Agent) 驱动更新，支持 Action-time modality 和 Honest verification，提升了 Agent 操作 GUI 的准确性。

10. **fix(core): make read_file respect git-ignore settings** ([#6154](https://github.com/QwenLM/qwen-code/pull/6154))
    - **内容**：统一文件读取逻辑，使 `read_file` 遵循 `.gitignore` 规则，解决了与 `list_directory` 行为不一致导致的上下文污染问题。

## 5. 功能需求趋势

- **企业级通讯集成**：随着 WeCom (企业微信)、DingTalk (钉钉) 和 QQ Bot 的 PR 与 Issue 密集出现，Qwen Code 正向“企业办公自动化中枢”演进。
- **后台自动化**：`/schedule` 命令、Daemon-managed workers 和 Loop 功能的需求表明，用户不再满足于交互式使用，更倾向于无值守的后台任务执行。
- **精细化权限与成本控制**：参数级权限语法、Prompt Cache 优化和 Token 开销讨论，反映出生产环境用户对安全性和成本的敏感度上升。

## 6. 开发者关注点

- **分发渠道维护**：国内镜像源滞后和 Brew 更新慢的问题反复被提及，需要项目方建立更可靠的发布同步机制。
- **跨平台兼容性**：Windows 编码问题和 macOS 沙箱文件缺失仍是阻碍落地的主要障碍。
- **Token 效率焦虑**：高达 22k 的 System Prompt 开销让开发者对 Token 消耗感到担忧，社区渴望更轻量级的 Agent 模式或 Prompt 裁剪机制。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 (2026-07-03)

## 1. 今日速览
今日项目无新版本 Release 发布，但核心开发者在 **v0.8.67** 版本基础上合并了重要的正确性修复批次，重点解决了 Fleet（多代理调度）模块的内存溢出和并发状态损坏问题，并修复了多处新引入的引导流程（Onboarding）UX 缺陷。社区讨论焦点集中在 Windows 平台的稳定性（如界面冻结、输入法死锁）以及 v0.8.67 版本中“宪法”配置流程的用户体验优化上。

## 2. 版本发布
过去 24 小时内无新版发布。

## 3. 社区热点 Issues (Top 10)

1.  **[#3793 Constitution 创建器 UX 重构讨论**
    *   **重要性**：核心功能讨论。针对 v0.8.67 引入的 "Constitution"（宪法/规则配置）功能，作者提出不应仅提供空白编辑器，而应构建引导式的本地化创建流程，且明确禁止在文件内直接翻转运行时安全设置。
    *   **社区反应**：引发了对安全边界与易用性平衡的深入探讨。

2.  **[#3882 [CLOSED] Fleet 子代理导致 TUI 内存耗尽 (Release Blocker)**
    *   **重要性**：严重缺陷。用户报告在使用 Fleet 功能时内存占用高达 15.26 GB，已被开发者确认为 v0.8.67 的发布阻塞问题，目前已修复。
    *   **社区反应**：确认了多代理并发场景下的资源泄漏风险。

3.  **[#1812 [OPEN] Windows 11 下 TUI 间歇性冻结**
    *   **重要性**：长期遗留 Bug。Windows 11 下 UI 会完全无响应但进程存活，涉及 `crossterm` 轮询机制。该问题长期困扰部分 Windows 用户，评论区持续更新排查进度。

4.  **[#3867 [CLOSED] 项目级指令被过度拒绝**
    *   **重要性**：工作流阻断。多项目工作流中 `instructions` 配置被硬性阻断，导致用户体验极差。该 Issue 已通过自动发现 `.codewhale/rules/` 目录的功能修复。

5.  **[#2261 [OPEN] TUI 对话崩溃导致输入内容泄露至 PowerShell 执行**
    *   **重要性**：安全隐患。Windows 下 TUI 崩溃后，后续输入内容直接泄露到 PowerShell 终端并被当作命令执行，存在明显的安全风险。

6.  **[#3792 首次运行引导流程优化**
    *   **重要性**：用户留存。建议将首次运行体验设计为“启动应用”而非“编辑配置”，强调语言优先和分离安全控制。

7.  **[#1607 [OPEN] Token 成本估算增加货币单位**
    *   **重要性**：本地化需求。用户建议增加人民币（￥）等货币单位显示，反映了中国区用户的具体需求。

8.  **[#3927 引导流程中 API Key 步骤过于强制**
    *   **重要性**：UX 缺陷。新用户若不输入 DeepSeek API Key 便无法进入应用，缺乏“跳过”或“使用其他提供商”的选项，阻碍了新用户尝试。

9.  **[#1835 [OPEN] Windows 输入法死锁导致输入框无响应**
    *   **重要性**：特定平台兼容性。使用中文输入法（如搜狗）时，TUI 输入框可能完全失去响应，是影响中文用户体验的关键 Bug。

10. **#3314 重构 App 结构以解耦“上帝对象”**
    *   **重要性**：架构健康度。开发者指出 `App` 结构体过大（约 150 个字段），计划将其拆分为独立子模块，这是后续性能优化和维护的基础。

## 4. 重要 PR 进展 (Top 10)

1.  **[#3960 [CLOSED] v0.8.67 正确性修复批次**
    *   一次性修复了引导流程、信任机制、技能调度等多个关键 Bug（涵盖 #3918-#3929），提升了版本稳定性。

2.  **[#3892 [CLOSED] 自动发现项目规则目录**
    *   新增自动发现 `.codewhale/rules/` 和 `.claude/rules/` 目录功能，修复了项目级指令不可用的痛点，增强了上下文感知能力。

3.  **[#3936 [CLOSED] 修复子代理并发写入状态损坏**
    *   修复了 Fleet 模块在高并发下持久化状态可能损坏的严重 Bug，改用原子写入机制。

4.  **[#3931 [CLOSED] 限制 Fleet 递归深度与 Task ID 随机性**
    *   强制限制子代理递归深度上限，防止无限循环；增加了任务 ID 的熵值，避免冲突。

5.  **[#3902 [OPEN] 性能优化：修复渲染与输入热路径**
    *   针对 5 个性能热点问题进行修复，包括任务侧边栏重复计算等，旨在提升 TUI 的流畅度。

6.  **#3865 [CLOSED] 子代理状态持久化路径迁移**
    *   将子代理状态文件从旧的 `.deepseek/` 目录迁移至 `.codewhale/`，完成了品牌重塑后的路径遗留问题清理。

7.  **#3643 [CLOSED] 新增设置向导总结步骤**
    *   在引导流程结束时增加总结视图，展示 MCP 服务器、技能和插件的状态，提升了新手引导的完整性。

8.  **#3901 [CLOSED] Fleet 本地工作进程内存报告**
    *   修复并完善了 Fleet 本地工作进程的内存使用报告功能，便于监控资源消耗。

9.  **#3894 [OPEN] 清理 Fleet 模块死代码**
    *   移除了 Fleet 任务管理器中未使用的包装函数和相关配置字段，优化了代码库结构。

10. **#3764 [CLOSED] 改进 `/config ask-rules` 诊断信息**
    *   增强了对 `permissions.toml` 配置文件状态的诊断反馈，帮助用户排查权限配置问题。

## 5. 功能需求趋势

*   **引导体验重塑**：社区与开发者均高度关注首次运行体验，趋势是从“配置文件编辑”转向“交互式向导”，强调可视化、安全默认值与错误预防。
*   **多代理架构增强**：Fleet 功能成为重点，虽然近期修复了大量内存与稳定性问题，但对代理间路由、模型选择词汇表的支持需求依然强烈。
*   **本地化与合规**：出现了关于货币单位（￥）、本地化规则目录发现的需求，显示出工具在国际化和本地环境适配上的发展趋势。
*   **IDE/编辑器集成**：虽然 Issue 列表主要聚焦 TUI，但“Spatial Workbench”等概念的提出暗示了向更复杂交互界面发展的意图。

## 6. 开发者关注点

*   **Windows 平台稳定性**：Windows 下的 UI 冻结、IME 输入法冲突及焦点丢失是用户反馈的高频痛点，亟待底层终端交互库的修复或规避方案。
*   **安全与信任模型**：v0.8.67 引入了严格的安全与信任机制，开发者正密集修复因此导致的“过度拦截”或“配置失效”问题，试图在安全与便捷之间寻找平衡。
*   **性能与资源占用**：TUI 的渲染性能及 Fleet 模式的内存占用是开发者关注的重点，已有专门的 PR 针对渲染热路径和子代理内存隔离进行优化。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*