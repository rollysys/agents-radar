# AI CLI 工具社区动态日报 2026-04-22

> 生成时间: 2026-04-22 02:49 UTC | 覆盖工具: 7 个

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

# AI CLI 工具生态横向对比分析报告 (2026-04-22)

## 1. 生态全景
AI CLI 工具正处于从"单一对话助手"向"自动化开发智能体"转型的关键期。**协议标准化（ACP）与自动化集成**成为各厂商竞相发力的核心，CLI 正逐渐演变为可接入 IDE 和 CI/CD 的标准化 Agent 后端。与此同时，**多模型适配与长上下文管理**成为技术深水区，模型切换导致的"降智"或工具调用失效问题频发，显示出底层架构对模型能力的强依赖。**架构重构浪潮**正在发生，从 Rust 重写到 Memory 机制简化，各工具均在寻求性能与稳定性的平衡。

## 2. 各工具活跃度对比

| 工具名称 | 版本动态 | Issue 热度 (Top 10 反馈) | PR 活跃度 (核心更新) | 迭代特征 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | v2.1.117 | 高 (情感功能回归呼声高) | 低 (3个，文档与安全策略为主) | 体验优化，社区情绪波动大 |
| **OpenAI Codex** | 5个 Alpha 版 | 高 (性能瓶颈与远程开发) | 极高 (10个，重构 Sandbox/权限) | 架构激进重构，底层不稳 |
| **Gemini CLI** | v0.39.0-preview.2 | 中 (认证与AST感知) | 高 (10个，Memory架构大改) | 架构解耦，性能优化 |
| **Copilot CLI** | v1.0.35-2 | 高 (协议支持与模型可用性) | 低 (2个，工程化维护) | 协议推动，模型稳定性告急 |
| **Kimi Code CLI** | 无新版本 | 中 (模型能力对比) | 高 (10个，修挂起/兼容性) | 本土化适配，修稳定性 |
| **Qwen Code** | v0.15.0-preview.2 | 高 (认证故障与Web搜索) | 高 (10个，ACP集成/搜索) | 功能对齐竞品，本土化增强 |
| **OpenCode** | v1.14.20 | 中 (模型兼容性) | 高 (10个，PTY会话/LSP) | 开放模型生态，解决兼容性 |

## 3. 共同关注的功能方向

*   **自动化 Hooks 系统的深度集成**
    *   **涉及工具**: OpenAI Codex, GitHub Copilot CLI, Kimi Code CLI, Qwen Code
    *   **具体诉求**: 社区不再满足于简单的 Bash Hook，而是要求支持 HTTP Webhooks、MCP 工具调用拦截及输入重写。这表明 CLI 正试图成为 CI/CD 流程中的可控节点，而非仅仅是交互式玩具。

*   **非交互模式与无人值守运行**
    *   **涉及工具**: GitHub Copilot CLI, Qwen Code, OpenCode
    *   **具体诉求**: 开发者强烈要求解决 CLI 在自动化脚本中的阻塞问题（如 Trust Prompt 弹窗、MCP Sampling 拒绝、进程挂起不退出）。这反映了 AI Agent 正加速融入后台任务流。

*   **模型兼容性与工具调用稳定性**
    *   **涉及工具**: OpenCode, Qwen Code, Kimi Code CLI, GitHub Copilot CLI
    *   **具体诉求**: 随着多模型支持普及，工具调用在本地模型（Ollama）或第三方模型（GLM, DeepSeek）上频繁失效（"虚执行"或参数校验失败）。模型能力的差异正成为 CLI 工具泛化能力的最大阻碍。

*   **IDE 与协议标准化集成 (ACP)**
    *   **涉及工具**: GitHub Copilot CLI, Qwen Code, Kimi Code CLI
    *   **具体诉求**: 用户希望 CLI 能作为后端服务，通过 ACP (Agent Client Protocol) 接入 Neovim、VS Code 等前端。CLI 的边界正在模糊，逐渐演变为"Agent Server"。

## 4. 差异化定位分析

*   **Claude Code**: 侧重**用户体验与情感连接**。`/buddy` 功能的移除引发社区强烈反弹，显示出其用户群体对"陪伴感"的独特需求。其痛点集中在高昂的 Token 成本与 API 稳定性上。
*   **OpenAI Codex**: 侧重**底层架构现代化与企业级安全**。正在经历痛苦的 Rust 重写期，频繁发布 Alpha 版本修复沙箱与权限问题，目标是构建隔离性强、支持远程开发的稳健后端。
*   **Gemini CLI**: 侧重**代码深度理解与架构瘦身**。积极探索 AST 感知以提升代码修改精度，同时大刀阔斧移除 MemoryManager 子智能体，转向 Prompt 驱动，追求更轻量的架构。
*   **GitHub Copilot CLI**: 侧重**协议标准与生态核心**。作为 ACP 协议的主导者，其重心在于打通 IDE 与 CLI 的壁垒。目前的痛点主要是高阶模型配额限制，反映了其作为商业化产品的资源管控策略。
*   **Kimi / Qwen Code**: 侧重**本土化与快速跟进**。两者均在快速补齐 ACP、Hooks 等竞品特性，同时针对国内环境（Web 搜索源切换、网络环境）进行深度适配。Kimi 对思维链模型（K2.6）的调优反馈尤为积极。
*   **OpenCode**: 侧重**开放模型生态与 LSP 深度**。致力于解决各类开源模型（Qwen, Ollama）的工具调用兼容性痛点，并引入 PTY 持久化会话，致力于成为"模型无关"的通用 Agent 终端。

## 5. 社区热度与成熟度

*   **活跃度最高**: **OpenAI Codex** 与 **OpenCode**。前者处于架构重构期，Issue 与 PR 极其频繁；后者依托开源社区，快速响应模型兼容性问题。
*   **用户情绪最强烈**: **Claude Code**。`/buddy` 功能的争议显示了其拥有高粘性用户群，但也面临产品决策与用户期待的冲突。
*   **成熟度最高**: **GitHub Copilot CLI**。Issue 多集中在功能请求与协议支持，基础性 Bug（如挂起、崩溃）较少，显示出核心架构已趋于稳定，进入精细化运营阶段。
*   **快速迭代期**: **Gemini CLI** 与 **Qwen Code**。均在进行核心架构调整（Memory 重构、ACP 集成），版本号更新快，属于功能扩展与架构优化的并行期。

## 6. 值得关注的趋势信号

1.  **CLI 正在演变为 "Headless Agent Server"**
    开发者对 ACP 协议、HTTP Hooks、非交互模式的强烈需求表明，CLI 的使用场景正在从"终端聊天"迁移至"作为后端服务接入工作流"。**建议**：开发者在选型时应优先考察工具的 Headless 模式成熟度与协议支持情况。

2.  **多模型接入存在严重的"工具调用断层"**
    OpenCode 和 Qwen Code 的 Issue 显示，简单地切换模型 API Key 往往会导致工具调用失败。**建议**：目前 CLI 工具对多模型的支持仍停留在"能连上"层面，暂不适合在生产环境频繁切换非原生模型。

3.  **记忆管理从"子智能体"回归"Prompt驱动"**
    Gemini CLI 移除 MemoryManager 子智能体的动向值得关注。过度工程化的多智能体架构可能带来延迟与复杂度，Prompt 驱动的文件管理正在成为一种更轻量、更可控的替代方案。**建议**：关注轻量级上下文管理方案。

4.  **终端渲染性能成为隐形瓶颈**
    Copilot CLI 和 Claude Code 均报告了长对话下的 UI 卡顿或 CPU 飙升问题。TUI (Terminal UI) 渲染引擎的性能正成为制约长上下文会话体验的关键因素。**建议**：重度用户应关注工具的 TUI 框架选型与历史记录管理策略。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点分析报告

**数据截止日期**：2026-04-22  
**数据来源**：github.com/anthropics/skills (Issues & Pull Requests)

---

## 1. 热门 Skills 排行
基于 PR 提交内容的创新性与实用价值，以下是社区最关注的 Skills 动态：

1.  **[document-typography](https://github.com/anthropics/skills/pull/514)** `[OPEN]`
    *   **功能**：专注于 AI 生成文档的排版质量控制，解决孤行、寡行及编号错位等“细微但致命”的排版问题。
    *   **热点**：填补了生成内容“可用性”到“专业性”之间的空白，被评价为影响每一份生成文档的刚需功能。

2.  **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** `[OPEN]`
    *   **功能**：元技能，用于分析其他 Skills 的质量（结构、文档）与安全性。
    *   **热点**：社区对 Skills 自身治理能力的关注提升，该 PR 提供了标准化的质量评估维度，具有极高的生态基建价值。

3.  **[testing-patterns](https://github.com/anthropics/skills/pull/723)** `[OPEN]`
    *   **功能**：覆盖全栈测试（单元测试、React 组件测试、集成测试）的最佳实践指导。
    *   **热点**：解决了开发场景中“如何测试”的核心痛点，由社区贡献的完整测试哲学与方法论。

4.  **[shodh-memory](https://github.com/anthropics/skills/pull/154)** `[OPEN]`
    *   **功能**：为 AI Agent 提供跨对话的持久化上下文记忆能力。
    *   **热点**：解决了大模型“无状态”导致的上下文丢失问题，是构建长期陪伴型 Agent 的关键基础设施。

5.  **[sensory (macOS automation)](https://github.com/anthropics/skills/pull/806)** `[OPEN]`
    *   **功能**：通过 AppleScript 实现原生 macOS 自动化，替代基于截图的交互方式。
    *   **热点**：相比模拟点击，原生脚本执行更稳定、权限更可控，是操作系统级自动化的优选方案。

6.  **[HADS (Human-AI Document Standard)](https://github.com/anthropics/skills/pull/616)** `[OPEN]`
    *   **功能**：定义一种同时服务于人类阅读与 AI 解析的轻量级文档标准。
    *   **热点**：提出“一次编写，双重受众”理念，旨在降低 AI 理解文档的 Token 成本与幻觉风险。

---

## 2. 社区需求趋势
从 Issues 讨论中提炼出以下核心诉求：

*   **企业级协作与共享**
    Issue [#228](https://github.com/anthropics/skills/issues/228)（9 评论/5 点赞）高票呼吁支持**组织内部 Skill 共享**。目前用户需手动下载 `.skill` 文件并通过 IM 分发，社区急需官方支持的“共享库”或链接分发机制。
*   **平台稳定性与底层兼容**
    Issue [#62](https://github.com/anthropics/skills/issues/62)（10 评论）与 [#406](https://github.com/anthropics/skills/issues/406) 反映了 Skills 消失、上传失败等严重故障。此外，[#29](https://github.com/anthropics/skills/issues/29)（4 评论）强烈要求支持 **AWS Bedrock**，表明企业用户对跨平台兼容性的迫切需求。
*   **安全性与信任边界**
    Issue [#492](https://github.com/anthropics/skills/issues/492) 指出社区 Skills 冒用 `anthropic/` 命名空间带来的安全风险。社区呼吁建立更严格的命名规范与权限隔离机制，防止权限滥用。
*   **协议互通 (MCP)**
    Issue [#16](https://github.com/anthropics/skills/issues/16)（4 评论）提出将 Skills 暴露为 MCP (Model Context Protocol) 服务，反映了社区希望 Skills 能从“提示词片段”进化为标准化的 API 服务。

---

## 3. 高潜力待合并 Skills
以下 PR 目前处于 `[OPEN]` 状态，但更新活跃且解决了实际痛点，近期落地可能性较高：

*   **[ODT Skill](https://github.com/anthropics/skills/pull/486)**  
    *状态*：近期更新至 04-14。填补了 OpenDocument 标准格式的生成与解析空白，适合办公自动化场景。
*   **[DOCX Bug Fix](https://github.com/anthropics/skills/pull/541)**  
    *状态*：近期更新至 04-16。修复了 DOCX 文档中书签与修订记录 ID 冲突导致文档损坏的严重 Bug，属于关键性修复。
*   **[YAML Validation Fix](https://github.com/anthropics/skills/pull/539)**  
    *状态*：近期更新至 04-16。修复了 Skill 元数据解析中的 YAML 语法陷阱，提升了工具链的健壮性。

---

## 4. Skills 生态洞察
**当前社区最集中的诉求是：从“个人尝鲜”向“团队生产与系统集成”转型。**  
社区关注的焦点已不再局限于单一的 Prompt 技巧，而是转向企业级分发（Org-sharing）、跨平台支持（Bedrock）、标准化协议（MCP）以及系统级自动化，标志着 Claude Code Skills 正从个人效率工具向企业级 AI 基础设施演进。

---

# Claude Code 社区动态日报 (2026-04-22)

## 1. 今日速览

今日 Claude Code 发布 **v2.1.117** 版本，重点增强了子智能体的外部构建支持及模型选择的持久化体验。社区方面，关于恢复 `/buddy` 功能的呼声持续高涨（#45596 已获近 900 个赞），同时 API 连接稳定性及 Token 消耗异常问题引发了较多开发者讨论。

## 2. 版本发布

### **v2.1.117**
本次更新主要聚焦于智能体功能与用户体验优化：
*   **子智能体支持增强**：现在可通过设置环境变量 `CLAUDE_CODE_FORK_SUBAGENT=1` 在外部构建中启用分叉子智能体功能。
*   **Agent 配置加载**：通过 `--agent` 启动的主线程会话现在可以正确加载 Agent frontmatter 中的 `mcpServers` 配置。
*   **模型选择持久化**：改进了 `/model` 命令，用户的选择在重启后得以保留，即使项目固定了特定模型配置也会生效。

---

## 3. 社区热点 Issues (Top 10)

以下是社区讨论最热烈或影响较大的 10 个 Issue：

1.  **[#45596] Bring Back Buddy — A Consolidated Plea from the Community**
    *   **标签**: `enhancement` `area:tui` `area:skills`
    *   **热度**: 👍 892 | 💬 198
    *   **链接**: [Issue #45596](https://github.com/anthropics/claude-code/issues/45596)
    *   **点评**: 自 4 月 9 日 `/buddy` 功能被悄然移除后，社区反响强烈。该 Issue 已成为开发者表达不满的集中地，认为该功能对终端交互体验至关重要，呼吁官方重新评估或提供替代方案。

2.  **[#46987] [BUG] API Error: Stream idle timeout - partial response received**
    *   **标签**: `platform:macos` `api:anthropic`
    *   **热度**: 👍 98 | 💬 109
    *   **链接**: [Issue #46987](https://github.com/anthropics/claude-code/issues/46987)
    *   **点评**: 严重的连接稳定性问题。用户频繁遭遇 API 流超时导致的部分响应错误，直接中断工作流，是当前影响使用体验的主要 Bug 之一。

3.  **[#18435] [FEATURE] Add the ability to manage multiple Claude accounts**
    *   **标签**: `enhancement` `area:auth`
    *   **热度**: 👍 388 | 💬 68
    *   **链接**: [Issue #18435](https://github.com/anthropics/claude-code/issues/18435)
    *   **点评**: 高票功能请求。开发者迫切需要在 Claude Desktop 应用中管理多个账户并快速切换配置文件，这对于同时处理个人与工作项目的用户来说是刚需。

4.  **[#31012] [BUG] Claude Max 20x subscription not recognized**
    *   **标签**: `bug` `invalid`
    *   **热度**: 👍 5 | 💬 23
    *   **链接**: [Issue #31012](https://github.com/anthropics/claude-code/issues/31012)
    *   **点评**: 订阅识别异常。部分购买了 Max 20x 订阅的用户发现账户仍显示为 Free Plan，导致无法使用 Claude Code 的 Pro/Max 功能，涉及付费权益问题。

5.  **[#33045] [BUG] Agent tool isolation: "worktree" has no effect for team agents**
    *   **标签**: `bug` `area:agents` `platform:wsl`
    *   **热度**: 👍 8 | 💬 15
    *   **链接**: [Issue #33045](https://github.com/anthropics/claude-code/issues/33045)
    *   **点评**: 涉及 Agent 隔离机制。用户发现 `worktree` 配置对团队 Agent 无效，Agent 仍在主仓库中运行，这可能导致并发操作时的代码冲突和安全隐患。

6.  **[#43013] [BUG] 🚨 `--continue` and `-p` are now seriously broken together**
    *   **标签**: `bug` `regression` `area:cli`
    *   **热度**: 👍 2 | 💬 11
    *   **链接**: [Issue #43013](https://github.com/anthropics/claude-code/issues/43013)
    *   **点评**: 严重的回归问题。CLI 参数 `--continue` 和 `-p` 组合使用时出现故障，影响了自动化脚本和连续对话场景。

7.  **[#51560] [BUG] Claude Code 2.1.116 freezes with main thread in V8/JSC tight loop**
    *   **标签**: `bug` `perf:cpu`
    *   **热度**: 👍 0 | 💬 3
    *   **链接**: [Issue #51560](https://github.com/anthropics/claude-code/issues/51560)
    *   **点评**: 严重影响性能的 Bug。应用在 macOS 上出现主线程死循环导致 100% CPU 占用且无法恢复，需强制终止进程，影响了开发环境的稳定性。

8.  **[#51809] [BUG] Per-turn overhead ~6-8k tokens on Sonnet 4.6**
    *   **标签**: `bug` `area:cost`
    *   **热度**: 👍 0 | 💬 1
    *   **链接**: [Issue #51809](https://github.com/anthropics/claude-code/issues/51809)
    *   **点评**: 今日新增的重要反馈。用户发现 Sonnet 4.6 模型每轮对话存在约 6-8k 的 Token 开销，且与内容复杂度无关，这直接增加了 API 调用成本，值得重点排查。

9.  **[#51728] [BUG] Claude repeatedly violates its own persistent instructions**
    *   **标签**: `bug` `memory`
    *   **热度**: 👍 1 | 💬 1
    *   **链接**: [Issue #51728](https://github.com/anthropics/claude-code/issues/51728)
    *   **点评**: 记忆与指令遵循问题。即使读取了 `CLAUDE.md` 和记忆文件，Claude 仍反复违反既定规则，反映了 Agent 在长程约束遵守上的局限性。

10. **[#11334] [FEATURE] Allow configuration to prevent auto-collapsing of long Bash outputs**
    *   **标签**: `enhancement` `area:tui`
    *   **热度**: 👍 20 | 💬 11
    *   **链接**: [Issue #11334](https://github.com/anthropics/claude-code/issues/11334)
    *   **点评**: 用户体验改进。开发者希望能够配置 Bash 输出的自动折叠行为，以便在调试长日志时无需频繁手动展开。

---

## 4. 重要 PR 进展

过去 24 小时内共有 3 个 PR 更新：

1.  **[#41611] add the missing source to claude code**
    *   **作者**: @tornikeo
    *   **链接**: [PR #41611](https://github.com/anthropics/claude-code/pull/41611)
    *   **内容**: 补充了 Claude Code 中缺失的源代码引用，有助于提升代码库的完整性和合规性。

2.  **[#51452] Update README.md**
    *   **作者**: @Ewanjohndennis
    *   **链接**: [PR #51452](https://github.com/anthropics/claude-code/pull/51452)
    *   **内容**: 重写了 README 文档以提升清晰度，移除了 AI 生成的痕迹（如填充词），简化了安装说明并修复了损坏的 npm 徽章。

3.  **[#51451] Revise security policy and reporting guidelines**
    *   **作者**: @Ewanjohndennis
    *   **链接**: [PR #51451](https://github.com/anthropics/claude-code/pull/51451)
    *   **内容**: 修订了安全策略文档，强制要求仅通过 HackerOne 报告漏洞，并明确了不在范围内的安全问题，加强了安全性管理流程。

---

## 5. 功能需求趋势

从近期 Issues 分析，社区关注的功能方向如下：

*   **陪伴性与交互体验**：社区对移除 `/buddy` 功能反应激烈，显示出开发者对终端内情感陪伴或辅助角色的强烈需求。
*   **多账户与跨端同步**：多账户管理（#18435）及 CLI 与 Desktop 历史记录同步（#28791）需求迫切，反映了多场景办公的用户习惯。
*   **精细化控制**：用户希望对 Token 开销、Bash 输出折叠、Sandbox 权限等有更细致的配置权。
*   **Agent 隔离与并发**：随着 Agent 模式使用深入，关于 worktree 隔离、并发安全性的问题逐渐浮出水面。

---

## 6. 开发者关注点

*   **稳定性痛点**：API 流超时和 CPU 100% 死循环是开发者目前最头疼的阻断性问题，直接影响了工具的基本可用性。
*   **成本控制**：#51809 提出的异常 Token 开销问题引发了关注，开发者对隐形 Token 消耗非常敏感，建议官方提供透明的 Token 计数工具。
*   **配置与指令遵循**：开发者反馈 Agent 经常忽略 `CLAUDE.md` 或记忆文件中的指令，如何提高 Agent 对长上下文规则的执行力是核心诉求之一。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-04-22)

## 1. 今日速览
2026年4月22日，OpenAI Codex Rust 客户端迎来密集更新，连续发布了 5 个 Alpha 版本，显示出底层架构的快速迭代。社区焦点主要集中在桌面应用的性能瓶颈（高 CPU/内存占用）和远程开发功能的缺失上。官方团队正积极重构权限与沙箱系统，并推动 MCP 工具与 Hooks 系统的深度融合。

## 2. 版本发布
- **Rust Client v0.123.0-alpha 系列**
  - 过去24小时内连续发布了从 `alpha.3` 到 `alpha.7` 的 5 个版本。
  - **链接**: [Releases](https://github.com/openai/codex/releases)
  - **分析**: 如此高频的 Alpha 版本发布通常意味着正在进行核心组件的重大重构或新功能的快速验证，可能与近期 PR 中频繁出现的沙箱策略和权限系统重构有关。

## 3. 社区热点 Issues (Top 10)

1.  **[OPEN] 远程开发支持 (#10450)**
    - **重要性**: 社区呼声最高（👍 581），用户强烈要求 Codex Desktop App 支持远程开发，以匹配 VS Code 的现有工作流。
    - **反应**: 开发者普遍认为目前仅支持本地是重大限制。
    - **链接**: [openai/codex Issue #10450](https://github.com/openai/codex/issues/10450)

2.  **[OPEN] 严重性能问题：高 CPU 占用 (#18463)**
    - **重要性**: 被标记为 `[critical]`。用户报告 Codex App 在打开或重新打开时会导致 CPU 占用率飙升（120%+），且渲染进程无法正常退出。
    - **反应**: 严重影响可用性，需紧急关注。
    - **链接**: [openai/codex Issue #18463](https://github.com/openai/codex/issues/18463)

3.  **[OPEN] 沙箱回归问题：频繁弹出审批提示 (#14936)**
    - **重要性**: 用户反馈 `bwrap` 沙箱机制存在回归 Bug，几乎每个命令都需要审批，严重打断工作流。
    - **反应**: 社区对频繁的权限弹窗感到沮丧。
    - **链接**: [openai/codex Issue #14936](https://github.com/openai/codex/issues/14936)

4.  **[OPEN] VS Code 扩展高 CPU/GPU 占用 (#15397)**
    - **重要性**: 扩展在 macOS 上因大量广播未支持的请求导致 CPU/GPU 负载过高。
    - **反应**: IDE 集成的性能问题仍是痛点。
    - **链接**: [openai/codex Issue #15397](https://github.com/openai/codex/issues/15397)

5.  **[OPEN] 上下文压缩挂起 (#14346)**
    - **重要性**: 使用高配置模型时，上下文压缩功能会导致扩展卡死。
    - **反应**: 影响长时间任务的稳定性。
    - **链接**: [openai/codex Issue #14346](https://github.com/openai/codex/issues/14346)

6.  **[OPEN] 内存泄漏疑虑 (#17257)**
    - **重要性**: 在高吞吐量使用 `Extra High` 模式时，扩展疑似出现内存泄漏。
    - **反应**: 长期运行稳定性受挑战。
    - **链接**: [openai/codex Issue #17257](https://github.com/openai/codex/issues/17257)

7.  **[OPEN] MCP 子进程泄漏 (#18881)**
    - **重要性**: 长时间运行的守护进程会积累大量孤立的 MCP 子进程。
    - **反应**: 影响 MCP 服务器的稳定性与资源管理。
    - **链接**: [openai/codex Issue #18881](https://github.com/openai/codex/issues/18881)

8.  **[OPEN] 自动化权限控制请求 (#18247)**
    - **重要性**: 用户希望为自动化流程配置不受限的权限，目前的权限配置过于繁琐。
    - **反应**: 反映了进阶用户对“无人值守”模式的需求。
    - **链接**: [openai/codex Issue #18247](https://github.com/openai/codex/issues/18247)

9.  **[OPEN] Mac Intel 版本 UI 渲染故障 (#18341)**
    - **重要性**: Intel Mac 用户报告应用界面出现模糊/半透明覆盖层，体验极差。
    - **反应**: Intel Mac 支持仍是遗留问题。
    - **链接**: [openai/codex Issue #18341](https://github.com/openai/codex/issues/18341)

10. **[OPEN] 功能请求：Recap 与 Btw 命令 (#18884)**
    - **重要性**: 用户希望对标 Claude Code 的功能，增加 `/recap` 命令和 `/btw` 别名。
    - **反应**: 社区对提升交互体验的功能呼声较高。
    - **链接**: [openai/codex Issue #18884](https://github.com/openai/codex/issues/18884)

## 4. 重要 PR 进展 (Top 10)

1.  **[OPEN] 支持在 Hooks 中使用 MCP 工具 (#18385)**
    - **内容**: 扩展生命周期钩子以支持 MCP 工具，打破目前仅限 Bash 工具的限制。
    - **意义**: 极大增强了 Codex 与外部工具集成的可编程性。
    - **链接**: [openai/codex PR #18385](https://github.com/openai/codex/pull/18385)

2.  **[OPEN] 添加 Sticky Environment API 与线程状态 (#18897)**
    - **内容**: 引入“粘性环境”选择机制，并在线程启动/轮次启动流程中持久化这些选择。
    - **意义**: 为多环境开发支持奠定基础，可能关联远程开发功能。
    - **链接**: [openai/codex PR #18897](https://github.com/openai/codex/pull/18897)

3.  **[OPEN] 修复 Linux 沙箱策略中的保留路径问题 (#18446)**
    - **内容**: 修复沙箱策略遗漏保留路径的问题，防止 `.codex`、`.git` 等关键目录被错误阻止。
    - **意义**: 修复沙箱可能导致代码运行失败的严重 Bug。
    - **链接**: [openai/codex PR #18446](https://github.com/openai/codex/pull/18446)

4.  **[OPEN] 优化 Skill 描述的上下文预算裁剪 (#18925)**
    - **内容**: 在上下文预算不足时，优先保留 Skill 名称/路径，公平裁剪描述内容。
    - **意义**: 优化 Prompt 组装策略，确保关键信息不被误删，提升模型理解准确性。
    - **链接**: [openai/codex PR #18925](https://github.com/openai/codex/pull/18925)

5.  **[OPEN] 派生活跃权限配置文件 (#18277)**
    - **内容**: 重构权限系统，确保 `Permissions` 不存储可能漂移的独立配置文件，而是从受约束的值中动态派生。
    - **意义**: 提升权限管理的安全性与一致性。
    - **链接**: [openai/codex PR #18277](https://github.com/openai/codex/pull/18277)

6.  **[OPEN] 保持远程 App-Server 事件排空 (#18932)**
    - **内容**: 修复远程客户端在 WebSocket 断连后事件通道堵塞导致界面卡死的问题。
    - **意义**: 解决 Issue #18860，提升远程连接稳定性。
    - **链接**: [openai/codex PR #18932](https://github.com/openai/codex/pull/18932)

7.  **[OPEN] 支持 AgentIdentity JWT 环境变量加载 (#18904)**
    - **内容**: 允许通过环境变量直接配置 JWT 认证信息。
    - **意义**: 简化程序化调用和 CI/CD 场景下的认证配置。
    - **链接**: [openai/codex PR #18904](https://github.com/openai/codex/pull/18904)

8.  **[OPEN] TUI 侧对话后保留权限状态 (#18924)**
    - **内容**: 修复在 `/side` 对话结束后，主线程重放可能恢复旧权限设置的问题。
    - **意义**: 修复权限状态同步 Bug，提升安全性。
    - **链接**: [openai/codex PR #18924](https://github.com/openai/codex/pull/18924)

9.  **[OPEN] 增加 Responses API 调用分析 (#18028, #18029, #18030)**
    - **内容**: 一系列 PR 引入了对 Responses API 调用事件的监控与分析 Schema。
    - **意义**: 不记录敏感内容的前提下监控上下文健康度，辅助性能优化。
    - **链接**: [openai/codex PR #18028](https://github.com/openai/codex/pull/18028)

10. **[CLOSED] 修复远程 App-Server 关闭竞争 (#18936)**
    - **内容**: 解决在关闭过程中 WebSocket 工作线程提前结束导致的竞争条件。
    - **意义**: 提升服务关闭时的稳定性。
    - **链接**: [openai/codex PR #18936](https://github.com/openai/codex/pull/18936)

## 5. 功能需求趋势

-   **远程与环境管理**: 社区强烈要求支持远程开发，官方 PR 中出现的“Sticky Environment”和“Named Environment”配置显示团队正在构建多环境支持架构。
-   **沙箱与权限灵活性**: 用户对频繁的沙箱审批提示感到厌倦，更倾向于“白名单”或“全自动”模式。官方正在重构权限派生逻辑以应对。
-   **MCP 生态集成**: 开发者希望更深度的 MCP 支持，不仅仅是调用，还包括在 Hooks 中的生命周期管理。
-   **上下文管理优化**: 随着 Context Window 的扩大，如何有效压缩和利用上下文成为关注点。

## 6. 开发者关注点

-   **性能瓶颈**: 桌面应用和 VS Code 扩展的高 CPU/内存占用是目前最大的痛点，影响了日常开发体验。
-   **遗留平台支持**: macOS Intel 版本的 Bug 反映了旧架构适配的边缘问题。
-   **自动化体验**: 开发者希望自动化脚本运行时能绕过交互式审批，目前的安全机制与效率需求存在冲突。
-   **连接稳定性**: 远程/WebSocket 断连后的状态恢复能力仍需加强。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-04-22)

## 1. 今日速览
今日 Gemini CLI 发布了 **v0.39.0-preview.2**，主要修复了 Agent 刷新时的重复初始化问题，显示了团队在稳定 v0.39.0 预览版方面的快速迭代。社区方面，讨论热点集中在 Agent 记忆管理架构的重构、Shell 命令执行的稳定性以及 Windows 平台的兼容性改进上。团队还合并了多项关于启动性能优化和记忆管理机制的重要 PR，标志着底层架构正在向更高效、更智能的方向演进。

## 2. 版本发布
- **v0.39.0-preview.2**
  - **更新内容**：Cherry-pick 了 commit d6f88f8，修复了 Agent 刷新时的重复初始化调用问题。这是在 preview.1 基础上的紧急修补，旨在提高 Agent 运行时的稳定性。
  - **关联 PR**：[#25776](https://github.com/google-gemini/gemini-cli/pull/25776)

## 3. 社区热点 Issues (Top 10)

1.  **[CLOSED] Sign in with Google 验证后提示 403 API Error** [#24880](https://github.com/google-gemini/gemini-cli/issues/24880)
    - **重要性**：今日评论数最高的 Issue（34条）。尽管已关闭，但大量用户反馈登录后遭遇 403 权限错误，说明认证机制或 API 配额限制仍是新用户的最大痛点之一。

2.  **[OPEN] Shell 命令执行后卡在 "Waiting input"** [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
    - **重要性**：核心体验问题。用户报告 CLI 执行简单命令后挂起，错误地显示正在等待用户输入，严重影响交互流畅度。

3.  **[OPEN] 评估 AST 感知文件读取的影响** [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
    - **重要性**：架构级探索。探讨引入 AST（抽象语法树）感知能力，以减少模型读取文件的 Token 消耗并提高代码修改精度，是提升 Agent 智能水平的关键方向。

4.  **[OPEN] Gemini CLI 反复请求同一文件的权限** [#24916](https://github.com/google-gemini/gemini-cli/issues/24916)
    - **重要性**：用户体验问题。即便用户选择了“始终允许”，CLI 仍反复询问权限，导致工作流中断，涉及权限持久化机制的缺陷。

5.  **[OPEN] Token 超限导致生成失败 (1.25M > 1M)** [#19727](https://github.com/google-gemini/gemini-cli/issues/19727)
    - **重要性**：模型上下文窗口管理问题。当上下文超过模型支持上限时报错，社区期待 CLI 能更智能地处理上下文截断或压缩。

6.  **[OPEN] Agent 频繁在随机位置创建临时脚本** [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)
    - **重要性**：代码整洁度问题。Agent 在执行 Shell 命令时会创建临时编辑脚本，导致工作区难以清理，用户希望有更规范的临时文件管理策略。

7.  **[OPEN] 子 Agent 对审批模式缺乏感知** [#23582](https://github.com/google-gemini/gemini-cli/issues/23582)
    - **重要性**：多 Agent 架构协同问题。子 Agent 未能识别主 Agent 的审批模式，导致工具调用被策略引擎拦截，引发不必要的错误循环。

8.  **[OPEN] 实现全局与项目级的记忆路由** [#22819](https://github.com/google-gemini/gemini-cli/issues/22819)
    - **重要性**：记忆系统优化。讨论如何区分用户全局偏好（如 commit 风格）和项目特定上下文，是打造个性化 Agent 的基础。

9.  **[OPEN] 工具数量超过 128 个时遇到 400 错误** [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
    - **重要性**：扩展性瓶颈。当可用工具过多时触发 API 限制，需要更智能的工具过滤机制。

10. **[OPEN] 流式传输期间表格渲染损坏** [#25218](https://github.com/google-gemini/gemini-cli/issues/25218)
    - **重要性**：UI/UX 细节。在屏幕阅读器模式下，表格在流式输出时布局破碎，影响无障碍访问体验。

## 4. 重要 PR 进展 (Top 10)

1.  **[OPEN] feat(core): 连接新的 ContextManager 和 AgentChatHistory** [#25409](https://github.com/google-gemini/gemini-cli/pull/25409)
    - **内容**：重构核心上下文管理逻辑，引入新的历史记录管理机制，旨在优化长对话和上下文处理能力。

2.  **[OPEN] perf(core): 异步获取实验配置与配额以修复启动慢问题** [#25758](https://github.com/google-gemini/gemini-cli/pull/25758)
    - **内容**：将初始化时的网络请求改为异步，显著减少 CLI 启动时间，解决用户等待痛点。

3.  **[OPEN] fix(cli): 海量日志导致滚动卡顿** [#25352](https://github.com/google-gemini/gemini-cli/pull/25352)
    - **内容**：在调试控制台增加搜索和过滤功能，解决大量日志输出时的 UI 卡顿问题。

4.  **[OPEN] feat(cli): 添加 /note 命令** [#25775](https://github.com/google-gemini/gemini-cli/pull/25775)
    - **内容**：新增 `/note` 命令，允许用户快速记录笔记并保存到 `notes.md`，增强了工作区辅助功能。

5.  **[OPEN] Fix/command injection shell** [#24170](https://github.com/google-gemini/gemini-cli/pull/24170)
    - **内容**：修复 Shell 命令注入漏洞，防止命令替换语法（如 `$()`）被执行，提升安全性。

6.  **[OPEN] feat(cli): Windows Shell 互操作性支持 (&&, ||, /dev/null)** [#25769](https://github.com/google-gemini/gemini-cli/pull/25769)
    - **内容**：增强跨平台支持，使 Windows CMD/PowerShell 支持常见的 Unix 风格命令链操作。

7.  **[OPEN] fix(core): 限制 Shell 文本输出 UI 更新频率** [#25461](https://github.com/google-gemini/gemini-cli/pull/25461)
    - **内容**：解决高频数据流导致的 React 重渲染性能问题，将文本输出更新节流至 1 秒。

8.  **[OPEN] feat(ci): 恢复打包与解锁 16 核测试速度** [#25426](https://github.com/google-gemini/gemini-cli/pull/25426)
    - **内容**：现代化 CI 基础设施，通过预构建产物和多核并行测试提升 CI 效率。

9.  **[CLOSED] refactor(memory): 用提示驱动的编辑替换 MemoryManagerAgent** [#25716](https://github.com/google-gemini/gemini-cli/pull/25716)
    - **内容**：架构重大调整，移除了独立的 MemoryManager 子 Agent，改为通过 Prompt 引导主 Agent 直接编辑 Markdown 文件来管理记忆，简化了架构并可能提升了响应速度。

10. **[CLOSED] fix(core): 移除 Agent 刷新时的重复初始化调用** [#25670](https://github.com/google-gemini/gemini-cli/pull/25776)
    - **内容**：这是今日 v0.39.0-preview.2 版本的主要修复内容，解决了 Agent 重载时的逻辑错误。

## 5. 功能需求趋势
- **架构解耦与性能优化**：社区和团队正致力于将核心功能（如 Memory, Context）从复杂的子 Agent 架构转向更直接的 Prompt 驱动或核心层管理，以提升响应速度和稳定性（如 #25716, #25758）。
- **代码理解深度**：关于 AST 感知能力的讨论（#22745）表明，CLI 正试图从简单的文本处理向深度代码理解转型，以提供更精准的重构和阅读能力。
- **跨平台体验一致性**：Windows 平台的支持持续受到关注，包括 Shell 命令兼容性（#25769）和路径处理问题。

## 6. 开发者关注点
- **认证与权限痛点**：403 错误和反复的权限请求是开发者最直观的阻碍，影响了工具的可用性信任度。
- **上下文管理策略**：随着模型 Token 限制和项目规模扩大的矛盾，开发者对 CLI 如何管理长上下文、Token 计数以及记忆持久化表现出高度关注。
- **Agent 行为的可控性**：开发者希望 Agent 能更“懂规矩”，例如不随意创建临时文件、正确理解审批模式、避免破坏性操作，这反映了对 Agent 自主性与安全性平衡的担忧。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-04-22)

## 1. 今日速览
GitHub Copilot CLI 今日发布了 **v1.0.35-2** 版本，新增了速率限制下的自动模型切换配置，并引入了 HTTP Hook 支持，显著增强了自动化能力。社区方面，**ACP 协议集成**议题持续发酵，同时关于 **Claude Opus 高阶模型**在订阅中的可用性问题引发了大量用户反馈，成为今日关注焦点。

## 2. 版本发布
**最新版本：v1.0.35-2** (含 v1.0.35-0 至 v1.0.35-2 系列更新)

本次更新主要集中在自动化流程优化和工具能力扩展：
*   **自动化体验优化**：新增 `continueOnAutoMode` 配置选项，当遇到速率限制时可自动切换至 Auto 模式，避免任务中断；修复了 Auto 模式切换模型时的 reasoning effort 兼容性错误。
*   **Hooks 增强**：新增 HTTP Hook 支持，允许通过 POST 请求发送 JSON payload 到指定 URL，不再局限于本地命令，极大地扩展了 CI/CD 集成的可能性。
*   **工具改进**：`grep` 和 `glob` 工具现支持多路径搜索；修复了状态栏中自定义代理名称不可见的问题，并优化了时间线中子代理思考过程的显示。

## 3. 社区热点 Issues
以下筛选出 10 个最具代表性的 Issues，涵盖了协议支持、模型可用性及核心功能体验：

1.  **[ACP] Support for ACP (Agent Client Protocol)** [#222](https://github.com/github/copilot-cli/issues/222)
    *   **热度**：👍 146 | 💬 25
    *   **解读**：虽然已关闭，但作为社区最关注的功能之一，用户强烈呼吁支持 ACP 协议以实现与 IDE 和编辑器的标准化集成。这反映了将 Copilot CLI 作为后端 Agent 引擎接入各种前端环境的强烈需求。

2.  **"Copilot Requests" permission for fine-grained tokens** [#223](https://github.com/github/copilot-cli/issues/223)
    *   **热度**：👍 65 | 💬 21
    *   **解读**：企业级用户关注的核心问题。组织级别的 PAT 令牌中缺少 "Copilot Requests" 权限显示，阻碍了企业环境下的合规自动化部署。

3.  **Copilot Pro subscription and Opus models** [#2873](https://github.com/github/copilot-cli/issues/2873)
    *   **热度**：💬 4
    *   **解读**：今日突发热点，多名 Pro 用户报告无法使用 Claude Opus 模型。用户担心高阶模型被移除或限制，影响了重度依赖高智商模型的工作流。

4.  **Claude Opus 4.6 (high) returns "model not supported" error** [#2867](https://github.com/github/copilot-cli/issues/2867)
    *   **热度**：💬 4
    *   **解读**：与上述问题相关，Pro+ 用户在额度重置后尝试使用 Opus 4.6 遭遇 "model not supported" 错误，反映出模型后端配额管理与客户端状态同步存在异常。

5.  **Support pasting images from the system clipboard** [#1276](https://github.com/github/copilot-cli/issues/1276)
    *   **热度**：👍 7 | 💬 10
    *   **解读**：多模态交互的基础功能缺失。用户希望像在 IDE 中一样直接粘贴截图（如报错日志、UI 界面）到 CLI 中进行分析，这是提升 CLI 实用性的关键路径。

6.  **Poor rendering performance** [#2625](https://github.com/github/copilot-cli/issues/2625)
    *   **热度**：💬 4
    *   **解读**：随着对话上下文增长，终端渲染性能急剧下降甚至卡死 30-45 秒。这是当前 CLI 架构面临的技术瓶颈，直接影响用户体验。

7.  **Add launch flag to bypass trust folder prompt** [#2866](https://github.com/github/copilot-cli/issues/2866)
    *   **热度**：💬 2
    *   **解读**：自动化场景下的强需求。开发者希望在非交互式脚本运行时，能够通过 flag 自动信任文件夹，避免手动修改配置文件。

8.  **MCP Sampling is Always Declined in Non-Interactive Mode** [#2882](https://github.com/github/copilot-cli/issues/2882)
    *   **热度**：新建
    *   **解读**：MCP (Model Context Protocol) 工具在非交互模式（`-p`）下即使开启了 `--allow-all` 也会被拒绝，这限制了 Copilot CLI 作为自动化 Agent 后端的能力。

9.  **Add shell completions** [#334](https://github.com/github/copilot-cli/issues/334)
    *   **热度**：👍 11 | 💬 4
    *   **解读**：作为 CLI 工具的基础设施，Tab 自动补全功能的缺失长期被开发者诟病，该 Issue 持续受到关注。

10. **invalid session id** [#1161](https://github.com/github/copilot-cli/issues/1161)
    *   **热度**：👍 15 | 💬 23
    *   **解读**：近期影响较大的 Bug，导致 macOS 用户无法执行 Bash 任务。虽然已关闭，但高评论量显示了其对用户基础操作的影响。

## 4. 重要 PR 进展
过去 24 小时内活跃 PR 较少，主要集中在工程化维护：

1.  **Add safe cleanup of older direct-install copilot binaries** [#2887](https://github.com/github/copilot-cli/pull/2887)
    *   **内容**：解决了通过 `install.sh` 重装或更新时旧版本二进制文件残留的问题，增加了自动清理机制，提升版本管理的整洁性。

2.  **Add initial devcontainer configuration** [#2800](https://github.com/github/copilot-cli/pull/2800)
    *   **内容**：添加了初始 devcontainer 配置，旨在降低贡献者搭建开发环境的门槛，鼓励社区参与代码共建。

## 5. 功能需求趋势
从今日的 Issue 动态中，可以提炼出以下三大核心趋势：

*   **IDE 与协议标准化集成**：社区对 ACP (Agent Client Protocol) 的呼声极高，表明用户不再满足于 CLI 作为独立工具，而是希望将其作为通用的 AI Agent 后端，无缝集成到 Neovim、VS Code 等各类编辑器中。
*   **高阶模型稳定性与访问权**：随着 Claude Opus 等高阶模型能力的提升，专业开发者对其可用性极为敏感。今日关于 Opus 模型“消失”或报错的集中反馈，显示出高付费用户对模型访问权限稳定性的严苛要求。
*   **非交互式与自动化增强**：无论是 HTTP Hooks 的发布，还是绕过信任提示、修复 MCP 非交互模式的请求，都指向一个明确趋势：Copilot CLI 正在被广泛应用于 CI/CD 流水线和自动化脚本中，对“无头模式”的支持需求日益增长。

## 6. 开发者关注点
*   **性能瓶颈**：长对话下的渲染卡顿（Issue #2625）已成为阻碍深入使用的严重障碍，开发者希望官方能尽快优化内存和渲染机制。
*   **多模态输入缺失**：在处理复杂 Bug（如 UI 截图、架构图）时，无法粘贴图片迫使开发者转向其他工具，这是 CLI 相比 GUI 客户端的明显短板。
*   **企业级权限控制**：企业用户强烈呼吁在 Fine-grained Tokens 中完善 Copilot 权限控制，以便在符合企业安全规范的前提下使用 CLI。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-04-22)

## 1. 今日速览
今日社区焦点集中在模型版本选择与核心稳定性修复上。关于 **Kimi K2.5 与 K2.6 模型表现差异**的讨论引发热议，用户反馈新版本的思维链机制可能影响创造力。在工程进展方面，开发者提交了关键修复，解决了**终端退出挂起**及 **Anthropic API 规范兼容性**问题，显著提升了工具的健壮性。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues

1.  **[OPEN] 模型表现争议：希望切回 Kimi K2.5 (#1925)**
    *   **为何重要**：涉及核心模型能力评估。用户指出 K2.6 的 "thinking" 机制导致创造力下降并增加幻觉，强烈要求支持切换回旧版模型提示词。
    *   **社区反应**：评论数达 6 条，引起共鸣。
    *   **链接**: [MoonshotAI/kimi-cli Issue #1925](https://github.com/MoonshotAI/kimi-cli/issues/1925)

2.  **[OPEN] VSCode 插件交互优化建议 (#1560)**
    *   **为何重要**：影响 IDE 用户体验。用户指出目前选中 skill 后会立即发起请求，无法补充内容，希望与命令行行为保持一致。
    *   **社区反应**：获 3 个点赞，证实该痛点具有普遍性。
    *   **链接**: [MoonshotAI/kimi-cli Issue #1560](https://github.com/MoonshotAI/kimi-cli/issues/1560)

3.  **[OPEN] 严重 Bug：终端退出挂起与 MCP 连接泄漏 (#1984)**
    *   **为何重要**：核心稳定性问题。长时间会话后退出会导致终端无响应，且系统报告孤立的 MCP 连接，严重影响使用体验。
    *   **链接**: [MoonshotAI/kimi-cli Issue #1984](https://github.com/MoonshotAI/kimi-cli/issues/1984)

4.  **[OPEN] 功能请求：支持语音输入模式 (#1934)**
    *   **为何重要**：功能对齐需求。用户希望像 Claude Code 一样支持语音输入，以便在长提示词或解放双手场景下使用。
    *   **链接**: [MoonshotAI/kimi-cli Issue #1934](https://github.com/MoonshotAI/kimi-cli/issues/1934)

5.  **[OPEN] 文件索引限制：无法索引 vendor 目录 (#1962)**
    *   **为何重要**：代码理解能力受限。Go/PHP 等依赖 vendor 目录的项目无法通过 `@` 引用依赖代码，降低了辅助开发的准确性。
    *   **链接**: [MoonshotAI/kimi-cli Issue #1962](https://github.com/MoonshotAI/kimi-cli/issues/1962)

6.  **[OPEN] Anthropic API 规范违规导致错误 (#1975)**
    *   **为何重要**：底层 SDK 兼容性 Bug。`kosong` 提供商将并行 tool_result 拆分为多条消息，违反 Anthropic API 规范，导致调用失败。
    *   **链接**: [MoonshotAI/kimi-cli Issue #1975](https://github.com/MoonshotAI/kimi-cli/issues/1975)

7.  **[OPEN] OAuth 认证下 Subagent 失败 (#1983)**
    *   **为何重要**：多智能体协作受阻。使用 OAuth 登录时，子智能体无法继承认证状态，返回 401 错误。
    *   **链接**: [MoonshotAI/kimi-cli Issue #1983](https://github.com/MoonshotAI/kimi-cli/issues/1983)

8.  **[OPEN] Undo 命令回退逻辑异常 (#1974)**
    *   **为何重要**：基础操作可靠性。用户反馈 `undo` 命令实际回退的轮次比预期多（约 4 轮），导致历史记录管理混乱。
    *   **链接**: [MoonshotAI/kimi-cli Issue #1974](https://github.com/MoonshotAI/kimi-cli/issues/1974)

9.  **[OPEN] VSCode 插件快捷键冲突 (#1968)**
    *   **为何重要**：编辑器集成体验。Mac 下 `Cmd+N` 会同时新建 Kimi 会话和空白文件，干扰原生工作流。
    *   **链接**: [MoonshotAI/kimi-cli Issue #1968](https://github.com/MoonshotAI/kimi-cli/issues/1968)

10. **[OPEN] WSL2 + Tmux 环境下的显示问题 (#1965)**
    *   **为何重要**：跨平台兼容性。在 WSL2 Tmux 环境下存在边缘字符截断和光标定位问题。
    *   **链接**: [MoonshotAI/kimi-cli Issue #1965](https://github.com/MoonshotAI/kimi-cli/issues/1965)

## 4. 重要 PR 进展

1.  **[OPEN] 修复终端挂起及 MCP 连接泄漏 (#1985)**
    *   **内容**：针对 Issue #1984 的修复。将 TTY 设为非阻塞模式，并在关闭时主动清理 MCP 连接，防止进程僵死。
    *   **链接**: [MoonshotAI/kimi-cli PR #1985](https://github.com/MoonshotAI/kimi-cli/pull/1985)

2.  **[OPEN] 修复 Anthropic 并行 tool_result 合并问题 (#1978)**
    *   **内容**：修复 `kosong` 提供商违反 API 规范的问题，将连续的 tool_result 合并为单条 user message，解决 Issue #1975。
    *   **链接**: [MoonshotAI/kimi-cli PR #1978](https://github.com/MoonshotAI/kimi-cli/pull/1978)

3.  **[OPEN] 新增可视化上下文进度条 (#1972)**
    *   **内容**：UI 增强。将原本纯文本的上下文百分比替换为彩色 Unicode 进度条，提升终端视觉体验。
    *   **链接**: [MoonshotAI/kimi-cli PR #1972](https://github.com/MoonshotAI/kimi-cli/pull/1972)

4.  **[OPEN] 引入 RalphFlow 架构优化迭代循环 (#1960)**
    *   **内容**：架构级更新。引入临时上下文隔离和收敛检测机制，旨在解决 Agent 无限循环问题并提升工作流鲁棒性。
    *   **链接**: [MoonshotAI/kimi-cli PR #1960](https://github.com/MoonshotAI/kimi-cli/pull/1960)

5.  **[OPEN] 支持 AWS Bedrock Mantle 平台登录 (#1784)**
    *   **内容**：平台扩展。在 `/login` 流程中增加对 AWS Bedrock Mantle 的原生支持，方便企业用户集成。
    *   **链接**: [MoonshotAI/kimi-cli PR #1784](https://github.com/MoonshotAI/kimi-cli/pull/1784)

6.  **[OPEN] 支持 PreToolUse Hook 修改输入 (#1935)**
    *   **内容**：增强 Hook 能力。允许 `PreToolUse` 钩子通过 `updatedInput` 动态重写工具输入，实现透明的命令重写。
    *   **链接**: [MoonshotAI/kimi-cli PR #1935](https://github.com/MoonshotAI/kimi-cli/pull/1935)

7.  **[OPEN] 修复 ACP list_sessions 返回空列表问题 (#1957)**
    *   **内容**：修复 Zed 等编辑器客户端无法获取会话历史的问题，当缺少 `cwd` 参数时正确返回所有会话。
    *   **链接**: [MoonshotAI/kimi-cli PR #1957](https://github.com/MoonshotAI/kimi-cli/pull/1957)

8.  **[OPEN] 修复 UserPromptSubmit Hook 提示词丢失 (#1832)**
    *   **内容**：解决第三方 Hook 在特定输入格式下无法捕获用户实际输入的问题。
    *   **链接**: [MoonshotAI/kimi-cli PR #1832](https://github.com/MoonshotAI/kimi-cli/pull/1832)

9.  **[OPEN] 改进审批取消的用户反馈 (#1979)**
    *   **内容**：修复超时取消审批时显示误导性 "Rejected by user" 消息的问题，优化 UX 体验。
    *   **链接**: [MoonshotAI/kimi-cli PR #1979](https://github.com/MoonshotAI/kimi-cli/pull/1979)

10. **[OPEN] Shell 界面用户输入高亮优化 (#1600)**
    *   **内容**：UI 细节优化。将用户输入文本高亮为亮蓝色并添加分隔线，增强可读性。
    *   **链接**: [MoonshotAI/kimi-cli PR #1600](https://github.com/MoonshotAI/kimi-cli/pull/1600)

## 5. 功能需求趋势
*   **模型可控性增强**：用户对模型行为（如思维链长度、创造力）的控制需求强烈，希望支持多版本模型并存及系统级提示词自定义。
*   **IDE 深度集成**：VSCode 和 JetBrains 插件的交互细节（如 Skill 触发、快捷键冲突）成为优化重点，用户期待更原生的体验。
*   **多模态交互**：语音输入功能的呼声出现，预示着 CLI 工具正朝着更自然的人机交互方向发展。
*   **高级自动化**：开发者希望通过 Hook 机制实现更深度的流程控制（如输入重写），以满足特定的自动化工作流需求。

## 6. 开发者关注点
*   **稳定性与异常处理**：终端挂起、死循环、API 规范违规等稳定性问题是当前最痛点的反馈。
*   **上下文管理局限**：无法索引特定目录（如 vendor）及上下文丢失是影响代码生成质量的主要瓶颈。
*   **跨平台一致性**：WSL、Tmux 及不同 Linux 发行版下的兼容性问题仍需持续打磨。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-04-22)

## 1. 今日速览

OpenCode 今日发布 **v1.14.20**，重点修复了 TUI 系统主题回归问题，并改进了 Windows 平台下的插件加载机制。社区方面，模型兼容性问题成为讨论焦点，特别是 Qwen3-Coder 和 Ollama 的工具调用失败引发了大量反馈。此外，关于持久化 PTY 会话的 PR 引起了开发者的浓厚兴趣，预示着 Agent 自动化能力将显著增强。

## 2. 版本发布

**v1.14.20** 已发布，主要更新内容如下：
- **Core**：修复了 TUI 中系统主题检测的回归问题；新增 `GET /config` 实验性 HTTP API；修复了 Windows 下 Node 运行时本地动态导入失败的问题，提升了插件加载的稳定性。
- **TUI**：修复了远程工作区权限回复发送目标错误的问题。

详细日志请查看：[Release v1.14.20](https://github.com/anomalyco/opencode/releases/tag/v1.14.20)

## 3. 社区热点 Issues

1.  **[#6918](https://github.com/anomalyco/opencode/issues/6918) - [bug] qwen3-coder 调用编辑工具失败**
    *   **重要性**：评论数高达 45 条。用户在使用 OpenRouter 的 qwen3-coder 模型时，频繁遭遇 `edit` 工具参数校验失败，严重阻碍编码工作流。
    *   **社区反应**：社区成员积极提供日志和复现步骤，确认该问题影响范围较广，急需修复。

2.  **[#7030](https://github.com/anomalyco/opencode/issues/7030) - [bug] Ollama (qwen2.5-coder) 工具调用虚执行**
    *   **重要性**：本地模型用户反馈，工具调用显示执行成功但并未实际创建或修改文件。
    *   **社区反应**：这反映了本地大模型集成的复杂性，用户希望 OpenCode 能更好地兼容 Ollama 的工具调用模式。

3.  **[#22408](https://github.com/anomalyco/opencode/issues/22408) - [FEATURE] Kimi K2.6 集成请求**
    *   **重要性**：高赞（18 👍）需求，用户希望尽快集成最新的 Kimi K2.6 模型。
    *   **社区反应**：需求强烈，表明用户对前沿模型的支持非常敏感。

4.  **[#23196](https://github.com/anomalyco/opencode/issues/23196) - [bug] macOS 终端 OSC 11 主题检测失效**
    *   **重要性**：导致深色主题无法正确加载，影响用户体验。虽然今日发布的版本修复了相关问题，但仍有用户在特定终端下遇到问题。
    *   **社区反应**：涉及 macOS 多款主流终端，被标记为高优先级 Bug。

5.  **[#17516](https://github.com/anomalyco/opencode/issues/17516) - `opencode run` 完成后进程挂起**
    *   **重要性**：该问题导致 CI/CD 流程中 OpenCode 无法自动退出，必须手动 kill。
    *   **社区反应**：开发者对此表示困扰，这阻碍了 OpenCode 在自动化脚本中的可靠应用。

6.  **[#21079](https://github.com/anomalyco/opencode/issues/21079) - 忽略 `.npmrc` 配置生成 package-lock.json**
    *   **重要性**：企业用户使用私有 npm 源时受阻，OpenCode 强制使用默认源。
    *   **社区反应**：企业级部署的常见痛点，涉及网络隔离环境下的可用性。

7.  **[#23521](https://github.com/anomalyco/opencode/issues/23521) - 系统深色主题默认失效**
    *   **重要性**：20 个赞，影响视觉一致性。系统为深色模式时，OpenCode 强制切换为亮色主题。
    *   **社区反应**：作为体验回归问题，用户反馈较为直接和负面。

8.  **[#14462](https://github.com/anomalyco/opencode/issues/14462) - [FEATURE] 请求支持 Roslyn LSP**
    *   **重要性**：现有 C# LSP 功能较弱，用户希望引入微软官方的 `roslyn-language-server` 以获得更好的 C# 开发体验。
    *   **社区反应**：C# 开发者社区呼声较高，认为现有的 `csharp-ls` 功能已滞后。

9.  **[#21155](https://github.com/anomalyco/opencode/issues/21155) - 插件 Zod v3/v4 冲突导致崩溃**
    *   **重要性**：插件生态的基础设施问题。当插件依赖 Zod v4 时，会导致 OpenCode 核心崩溃。
    *   **社区反应**：插件开发者关注此问题，这限制了插件的技术选型。

10. **[#23772](https://github.com/anomalyco/opencode/issues/23772) - [Windows] 旧 CPU 不支持 AVX2 导致 Panic**
    *   **重要性**：Windows 下部分老旧 CPU 无法运行新版本，提示 AVX2 指令集错误。
    *   **社区反应**：虽然受众较小，但反映了跨硬件兼容性的边缘情况。

## 4. 重要 PR 进展

1.  **[#23760](https://github.com/anomalyco/opencode/pull/23760) - feat: 添加交互式终端工具**
    *   **内容**：引入持久化 PTY 会话支持，允许 Agent 与长时间运行的进程（如 REPL、服务器）进行交互，而不仅仅是单次命令执行。这将极大提升 Agent 的能力边界。

2.  **[#23770](https://github.com/anomalyco/opencode/pull/23770) - feat: 允许配置工具输出截断限制**
    *   **内容**：将工具输出的截断阈值（行数/字节）从硬编码改为可配置，解决长输出被意外截断的问题。

3.  **[#23360](https://github.com/anomalyco/opencode/pull/23360) - feat: TUI 添加 /cd 命令**
    *   **内容**：允许用户在 TUI 运行时动态切换工作目录，方便在 Monorepo 或多项目间快速切换。

4.  **[#12042](https://github.com/anomalyco/opencode/pull/12042) - feat: 提供 SDK v2**
    *   **内容**：为解决向后兼容性问题，提供新版 SDK，让插件作者能利用最新 API 而不破坏旧版插件。

5.  **[#18767](https://github.com/anomalyco/opencode/pull/18767) - feat: 移动端触摸优化**
    *   **内容**：针对移动设备优化 Web UI 的触摸体验，保留了桌面端的原有体验。

6.  **[#23778](https://github.com/anomalyco/opencode/pull/23778) - fix: 修复安装升级检查逻辑**
    *   **内容**：修复了升级检查绕过包管理器元数据直接请求 registry 的问题，使版本检测更准确。

7.  **[#21343](https://github.com/anomalyco/opencode/pull/21343) - fix: 修复阅读历史记录时的滚动回弹**
    *   **内容**：修复了在 LLM 流式输出时向上滚动查看历史，视图会被强制拉回底部的问题，提升阅读体验。

8.  **[#22147](https://github.com/anomalyco/opencode/pull/22147) - fix: 将依赖安装重定向至 .cache**
    *   **内容**：避免插件包直接污染用户 `.config` 目录，统一使用 `.cache` 目录存放依赖。

9.  **[#18306](https://github.com/anomalyco/opencode/pull/18306) - feat: 添加 Open WebUI provider**
    *   **内容**：增加了对 Open WebUI 的原生支持，方便连接自托管或第三方兼容接口。

10. **[#23766](https://github.com/anomalyco/opencode/pull/23766) - fix: 禁用特定 Provider 的 toolStreaming**
    *   **内容**：针对 `@ai-sdk/anthropic` 相关 Provider 的特定版本注入了不兼容的流式参数问题进行了规避修复。

## 5. 功能需求趋势

*   **模型兼容性与扩展**：用户对最新模型（如 Kimi K2.6）的跟进需求非常迅速，同时对本地模型（Ollama）和特定模型（Qwen3-Coder）的工具调用稳定性有极高要求。
*   **自动化与后台运行**：`opencode run` 的非交互模式和进程退出机制是开发者的核心诉求，旨在将 OpenCode 更好地集成到 CI/CD 或自动化脚本中。
*   **LSP 深度集成**：用户不再满足于基础的代码补全，开始要求集成更强大的官方 LSP（如 Roslyn），以获得接近 IDE 的代码分析能力。

## 6. 开发者关注点

*   **工具调用的可靠性**：近期关于 Qwen 和 Ollama 的 Issue 显示，不同模型对 Function Calling 的实现差异导致了工具调用失败，这成为目前开发者最头疼的兼容性问题。
*   **环境配置与隔离**：`.npmrc` 被忽略和插件依赖冲突（Zod v3/v4）表明，OpenCode 在处理复杂的项目环境和插件依赖隔离方面仍有改进空间。
*   **遗留硬件支持**：关于 AVX/AVX2 指令集的报错说明，部分开发者仍在使用老旧硬件，二进制编译时的指令集优化策略可能需要调整以保证更广泛的兼容性。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-04-22)

## 1. 今日速览
Qwen Code 今日发布了 **v0.15.0-preview.2**，重点增强了 ACP（Agent Communication Protocol）集成的 Hooks 支持并优化了紧凑模式的用户体验。社区方面，**认证故障（401 Token Expired）** 成为反馈焦点，大量用户报告登录状态异常；同时，针对 Web 搜索功能的国内 API 兼容性及第三方模型（如 GLM）的调用稳定性引发了热烈讨论。功能层面，CLI 易用性改进与 VS Code 插件的功能对齐是开发者关注的核心方向。

## 2. 版本发布
**v0.15.0-preview.2** 已发布，主要更新如下：
*   **ACP 集成增强**：新增完整的 Hooks 支持，方便开发者接入 ACP 协议 ([PR #3248](https://github.com/QwenLM/qwen-code/pull/3248))。
*   **UX 优化**：改进了紧凑模式的快捷键、设置同步及安全性 ([PR #3100](https://github.com/QwenLM/qwen-code/pull/3100))。
*   **功能扩展**：新增 HTTP Hooks 支持（根据提交记录推断）。

## 3. 社区热点 Issues (Top 10)

1.  **[OPEN] webSearch 功能兼容性讨论 (#3496)**
    *   **重点**：用户询问免费额度耗尽后的替代方案，并强烈建议兼容阿里云百炼、字节、GLM 等国内搜索 API。
    *   **反响**：评论数 5 条，反映了国内用户对网络搜索工具链的强依赖。
    *   链接：[QwenLM/qwen-code Issue #3496](https://github.com/QwenLM/qwen-code/issues/3496)

2.  **[OPEN] VS Code 扩展持续 401 认证错误 (#3506)**
    *   **重点**：用户在多版本 VS Code 扩展中均遭遇 `401 invalid access token` 错误，导致无法使用。
    *   **反响**：这是近期高频出现的 Bug，严重影响用户体验。
    *   链接：[QwenLM/qwen-code Issue #3506](https://github.com/QwenLM/qwen-code/issues/3506)

3.  **[CLOSED] 功能请求：CLI 直接设置 API Key (#2427)**
    *   **重点**：开发者吐槽目前 API Key 配置繁琐，需手动修改 settings.json，呼吁参考竞品在 CLI 内置模型提供商配置流程。
    *   **反响**：引发共鸣，体验优化的呼声很高。
    *   链接：[QwenLM/qwen-code Issue #2427](https://github.com/QwenLM/qwen-code/issues/2427)

4.  **[CLOSED] 请求子智能体系统与 Claude Code 功能对齐 (#2409)**
    *   **重点**：指出目前 Qwen Code 仅实现了 Claude Code 约 40-45% 的子智能体功能，希望补齐差距。
    *   **反响**：功能对齐类的高票需求，官方已关注。
    *   链接：[QwenLM/qwen-code Issue #2409](https://github.com/QwenLM/qwen-code/issues/2409)

5.  **[OPEN] 上下文窗口爆满导致卡顿且无法自动压缩 (#3447)**
    *   **重点**：执行长程任务时，上下文未能自动压缩，导致任务变慢、卡顿，`/compress` 命令失效。
    *   **反响**：核心性能问题，影响长上下文场景的使用。
    *   链接：[QwenLM/qwen-code Issue #3447](https://github.com/QwenLM/qwen-code/issues/3447)

6.  **[OPEN] 第三方模型（GLM 等）降智严重 (#3464)**
    *   **重点**：用户反馈切换至 GLM 等第三方模型时，工具调用失败率高，模型表现不如原生 Qwen 模型。
    *   **反响**：揭示了多模型适配中的 System Prompt 兼容性问题。
    *   链接：[QwenLM/qwen-code Issue #3464](https://github.com/QwenLM/qwen-code/issues/3464)

7.  **[CLOSED] VS Code 扩展认证方式单一 (#2134)**
    *   **重点**：请求 VS Code 插件支持像 CLI 一样丰富的认证方式（如 Coding Plan、API Key），目前仅支持 OAuth。
    *   **反响**：IDE 与 CLI 体验不一致的典型反馈。
    *   链接：[QwenLM/qwen-code Issue #2134](https://github.com/QwenLM/qwen-code/issues/2134)

8.  **[OPEN] 功能请求：CLI 语音输入支持 (#3110)**
    *   **重点**：开发者提议增加 `/voice` 命令支持语音输入，缓解键盘输入疲劳。
    *   **反响**：交互方式多样化的需求。
    *   链接：[QwenLM/qwen-code Issue #3110](https://github.com/QwenLM/qwen-code/issues/3110)

9.  **[CLOSED] WriteFile 工具处理大文件失败 (#3049)**
    *   **重点**：创建大型 HTML 文件时因 `max_tokens` 限制导致工具调用参数不全，抛出缺少 `file_path` 错误。
    *   **反响**：涉及模型输出长度与工具参数完整性的边界情况处理。
    *   链接：[QwenLM/qwen-code Issue #3049](https://github.com/QwenLM/qwen-code/issues/3049)

10. **[OPEN] 认证错误频发 (#3501, #3497 等)**
    *   **重点**：多个 Issue 报告 `Internal error: 401 invalid access token`，显示登录态管理存在稳定性问题。
    *   链接：[QwenLM/qwen-code Issue #3501](https://github.com/QwenLM/qwen-code/issues/3501)

## 4. 重要 PR 进展 (Top 10)

1.  **feat(web-search): add GLM (ZhipuAI) web search provider (#3502)**
    *   **内容**：新增智谱 AI（GLM）网络搜索 API 支持，直接响应了国内用户对网络搜索功能的需求。
    *   链接：[QwenLM/qwen-code PR #3502](https://github.com/QwenLM/qwen-code/pull/3502)

2.  **feat(session): add rename, delete, and auto-title generation (#3093)**
    *   **内容**：引入会话重命名、删除及自动标题生成功能，完善了 CLI 和 VS Code 的会话管理体验。
    *   链接：[QwenLM/qwen-code PR #3093](https://github.com/QwenLM/qwen-code/pull/3093)

3.  **perf(filesearch): move @-picker crawl to worker_threads (#3455)**
    *   **内容**：将文件索引构建移至 Worker 线程，解决大仓库中按 `@` 符号时界面卡顿的问题，显著提升性能。
    *   链接：[QwenLM/qwen-code PR #3455](https://github.com/QwenLM/qwen-code/pull/3455)

4.  **fix(core): reject truncated subagent write_file calls (#3505)**
    *   **内容**：修复因 Token 截断导致子智能体写入文件参数不全的问题，防止生成错误文件。
    *   链接：[QwenLM/qwen-code PR #3505](https://github.com/QwenLM/qwen-code/pull/3505)

5.  **feat(cli): auto-detect terminal theme (#3460)**
    *   **内容**：支持终端主题自动检测（Light/Dark），优化视觉体验。
    *   链接：[QwenLM/qwen-code PR #3460](https://github.com/QwenLM/qwen-code/pull/3460)

6.  **feat(cli): Phase 2 — slash command multi-mode expansion (#3377)**
    *   **内容**：扩展斜杠命令支持非交互模式和 ACP 模式，增强自动化脚本能力。
    *   链接：[QwenLM/qwen-code PR #3377](https://github.com/QwenLM/qwen-code/pull/3377)

7.  **feat(cli): cap inline shell output (#3508)**
    *   **内容**：限制 Shell 输出的行内显示行数，防止长日志刷屏，保持界面整洁。
    *   链接：[QwenLM/qwen-code PR #3508](https://github.com/QwenLM/qwen-code/pull/3508)

8.  **fix(core): use empty string instead of null for reasoning-only content (#3499)**
    *   **内容**：修复部分模型（如 Ollama）在流式输出仅有推理内容而无文本时崩溃的问题。
    *   链接：[QwenLM/qwen-code PR #3499](https://github.com/QwenLM/qwen-code/pull/3499)

9.  **fix(vscode-ide-companion): fix auto-scroll bounce (#3260)**
    *   **内容**：修复 VS Code 插件自动滚动“回弹”问题，提升聊天流式输出的视觉流畅度。
    *   链接：[QwenLM/qwen-code PR #3260](https://github.com/QwenLM/qwen-code/pull/3260)

10. **feat(cli): add slashCommands.disabled setting (#3445)**
    *   **内容**：允许通过配置禁用特定斜杠命令，满足企业级或多租户场景的安全管控需求。
    *   链接：[QwenLM/qwen-code PR #3445](https://github.com/QwenLM/qwen-code/pull/3445)

## 5. 功能需求趋势

*   **Web 搜索增强与本地化**：社区对 Web 搜索功能的依赖度极高，且强烈要求兼容国内主流模型服务商（如阿里云百炼、智谱 GLM）的搜索 API，以解决网络访问和额度限制问题。
*   **IDE 与 CLI 功能对齐**：VS Code 插件用户迫切希望拥有与 CLI 一致的功能，特别是认证方式（API Key 配置）和会话管理能力。
*   **易用性与配置简化**：用户希望摒弃繁琐的 JSON 配置，转向 CLI 交互式配置，降低上手门槛。
*   **模型兼容性与稳定性**：随着用户尝试接入更多第三方模型（GLM、DeepSeek 等），对工具调用稳定性和 System Prompt 兼容性的需求日益凸显。

## 6. 开发者关注点

*   **认证系统稳定性**：今日大量 Issue 涉及 401 Token 失效，无论是 OAuth 还是 API Key 方式，登录态的稳定性是目前最大的痛点。
*   **长上下文管理**：上下文窗口爆满后的自动压缩机制失效，直接影响了复杂长程任务的执行效率，开发者期待更智能的内存管理。
*   **第三方模型“降智”**：使用非 Qwen 模型时出现工具调用失败或逻辑能力下降，开发者关注是否针对特定模型进行了 System Prompt 优化。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*