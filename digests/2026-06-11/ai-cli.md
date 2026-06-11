# AI CLI 工具社区动态日报 2026-06-11

> 生成时间: 2026-06-11 04:12 UTC | 覆盖工具: 8 个

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

# AI CLI 工具生态横向对比分析报告 (2026-06-11)

## 1. 生态全景
当前 AI CLI 工具正处于从"辅助对话工具"向"自主智能体运行时"演进的关键阶段。**自主性**（如子代理递归调用、YOLO 模式）与**多模态/模型无关性**成为核心竞争点。头部工具（Claude Code, OpenAI Codex）在架构上快速迭代以支持复杂任务编排，而新兴工具则致力于打破模型壁垒，实现跨平台兼容。同时，随着 Agent 能力的增强，**资源管理**（内存/CPU）和**安全边界**（IPI 防护、权限控制）逐渐成为限制生产可用的主要瓶颈。

## 2. 各工具活跃度对比

| 工具名称 | 今日版本发布 | 关键 Issues (Top 10) | 关键 PRs (Top 10) | 核心动态摘要 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **v2.1.172** | 10+ | 10+ | 发布支持 5 层深度的子代理递归调用；社区高度关注印度定价与内存泄漏问题。 |
| **OpenAI Codex** | Rust SDK Alpha | 10+ | 10+ | 重构 Agent 身份验证；修复多轮对话上下文错位严重 Bug；TUI 支持图片。 |
| **Gemini CLI** | 无 | 10+ | 10+ | 修复 Shell 挂起与安全漏洞 (IPI/SSRF)；重点推进组件级评估与 AST 感知。 |
| **GitHub Copilot CLI** | 无 | 10+ | 0 | **零 PR 活动**；社区因工作流破坏性变更和模型支持不一致积怨已久。 |
| **Kimi Code CLI** | 无 | 2 | 10+ | 核心开发集中于 Windows 平台兼容性与 Agent 执行稳定性修复。 |
| **OpenCode** | **v1.17.3** | 10+ | 10+ | 紧急修复崩溃；社区热议 Cursor CLI 集成与高 CPU 占用；推进 TUI 2.0 重构。 |
| **DeepSeek (CodeWhale)**| **v0.8.57** | 10+ | 10+ | 品牌重塑为 CodeWhale；架构全面转向模型无关，新增 Anthropic 原生适配。 |

## 3. 共同关注的功能方向

### 3.1 全自动模式与控制权
*   **涉及工具**：Claude Code, OpenCode, Kimi CLI
*   **具体诉求**：社区强烈要求减少人工干预。Claude Code 支持子代理递归，OpenCode 和 Kimi CLI 用户则呼吁真正的 "YOLO Mode"（自动批准所有权限），以适应无人值守的 CI/CD 或长任务场景。但 Claude Code 后台子代理"拒绝停止"的问题也暴露了全自动模式下的失控风险。

### 3.2 模型无关化与多模型支持
*   **涉及工具**：DeepSeek (CodeWhale), OpenCode, GitHub Copilot CLI
*   **具体诉求**：工具正在解耦对单一模型的依赖。CodeWhale 移除 DeepSeek 硬编码以支持 Anthropic/Ollama；OpenCode 社区要求支持 Cursor CLI；Copilot CLI 用户抗议无法使用 Gemini 模型。开发者希望 CLI 成为通用的模型路由网关。

### 3.3 上下文管理精细化
*   **涉及工具**：OpenAI Codex, Gemini CLI, Claude Code
*   **具体诉求**：随着任务复杂化，Token 预算管理成为刚需。OpenAI Codex 新增 `Context Remaining` 工具供模型自查；Gemini CLI 社区提议 AST 感知读取以精准控制上下文；Claude Code 则面临严重的上下文幻觉问题，反映出长上下文管理的两面性。

### 3.4 MCP (Model Context Protocol) 集成稳定性
*   **涉及工具**：Claude Code, OpenAI Codex, GitHub Copilot CLI
*   **具体诉求**：MCP 已成为连接外部数据源的标准，但稳定性堪忧。Claude Code 出现 OAuth Token 丢失，OpenAI Codex 遭遇握手失败，Copilot CLI 误报策略限制。MCP 链路的健壮性直接决定了 Agent 的工具调用能力。

## 4. 差异化定位分析

| 维度 | Claude Code | OpenAI Codex | Gemini CLI | 新兴势力 |
| :--- | :--- | :--- | :--- | :--- |
| **核心定位** | **深度自动化引擎** | **全栈协作平台** | **安全优先的工程工具** | **灵活的模型路由器** |
| **技术路线** | 极致的 Agent 递归与自动化编排，探索复杂任务的无人化解决。 | 融合 IDE、Desktop、Mobile 的多端协同，强调身份认证与基础设施。 | 强调代码结构感知 (AST) 与安全边界，内置企业级安全防护。 | 快速迭代多模型适配，提供高度定制化的配置与 Hook 系统。 |
| **目标用户** | 需要处理复杂重构、长任务流的高级开发者。 | 依赖 GitHub 生态、需要跨设备协作的企业与个人用户。 | 注重安全合规、代码质量分析的企业级开发团队。 | 追求性价比、特定模型偏好 (如 Claude/OpenAI混用) 的极客与开发者。 |

## 5. 社区热度与成熟度

*   **活跃度最高**：**Claude Code** 与 **DeepSeek (CodeWhale)**。Claude Code 凭借强大的模型能力和激进的 Agent 特性引发了大量技术讨论；CodeWhale 在品牌重塑后展现出极高的开发响应速度，PR 活跃度领先。
*   **成熟度瓶颈**：**GitHub Copilot CLI**。作为官方工具，其 Issue 积压严重（如 #53 持续半年未解），且近期无 PR 产出，显示出维护投入不足或内部优先级调整，社区信任度有所下降。
*   **快速迭代期**：**OpenCode** 与 **Kimi CLI**。两者均在核心架构（TUI 2.0, Session API）和跨平台兼容性上进行大量重构，处于功能扩展与稳定性打磨并行的阶段。
*   **稳扎稳打**：**Gemini CLI**。虽然 Issue 数量不少，但主要集中在安全修复和底层质量评估体系的建立，显示出工程团队正在为大规模企业落地做铺垫。

## 6. 值得关注的趋势信号

1.  **Agent "失控" 风险显现**：随着 Claude Code 支持多层递归调用，"无法停止"、"幻觉执行" 等 Agent 失控问题频发。开发者在追求自动化的同时，急需建立更可靠的**熔断机制** 和**沙箱隔离**。
2.  **安全边界后移至 CLI 层**：Gemini CLI 修复的 IPI (间接提示注入) 和 SSRF 漏洞表明，CLI 工具已成为新的攻击面。传统的模型层安全已不足以应对，CLI 层需引入显式的权限确认、路径遍历防护和日志脱敏。
3.  **CLI 正在吞噬 IDE 功能**：AST 感知、文件差异确认、内联 Skill 调用等功能正在 CLI 中落地。CLI 不再仅仅是聊天窗口，而是演变为**轻量级的 Headless IDE**，这对 TUI 渲染性能和交互设计提出了更高要求。
4.  **模型切换成为刚需**：从 Copilot 用户的抱怨到 CodeWhale 的架构重构可以看出，开发者拒绝被单一模型供应商锁定。支持多模型 API 切换、Fallback 机制及跨模型对比将成为 CLI 工具的**标配功能**。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止日期**：2026-06-11  
**数据来源**：github.com/anthropics/skills (Pull Requests & Issues)

---

## 1. 热门 Skills 排行

根据 PR 活跃度排序，以下是目前社区关注度最高的 Skills 提案：

1.  **[前端设计与自动化工作流套件](https://github.com/anthropics/skills/pull/1046)**  
    *   **功能**：新增 `frontend-design`、`ai-experience-consultant` 和 `automation-workflows-builder` 三个技能定义。
    *   **状态**：[OPEN]  
    *   **热点分析**：作为目前排名第一的 PR，该提案试图补齐 Claude Code 在前端设计咨询和自动化工作流构建方面的短板，反映了社区对“设计+自动化”复合能力的强烈需求。

2.  **[文档排版质量控制](https://github.com/anthropics/skills/pull/514)**  
    *   **功能**：解决 AI 生成文档中常见的排版问题（如孤行、寡行、编号错位）。
    *   **状态**：[OPEN]  
    *   **热点分析**：针对 AI 输出“内容对但格式丑”的痛点。虽然用户很少显式要求“排版”，但该 Skill 旨在提升文档交付的“隐形质量”，获得了较高的关注。

3.  **[OpenDocument (ODT) 支持](https://github.com/anthropics/skills/pull/486)**  
    *   **功能**：支持创建、填充和转换 ODT/ODS 开放文档格式。
    *   **状态**：[OPEN]  
    *   **热点分析**：填补了对开源标准文档格式（LibreOffice/ODF）支持的空白，是企业级用户和开源社区的重要诉求。

4.  **[前端设计 Skill 改进](https://github.com/anthropics/skills/pull/210)**  
    *   **功能**：重构现有的 `frontend-design` skill，提升指令的可执行性和一致性。
    *   **状态**：[OPEN]  
    *   **热点分析**：与排名第一的新增 Skill 形成呼应，表明现有的前端设计能力仍有优化空间，社区正在通过迭代使其更加精准和可控。

5.  **[Skill 质量与安全分析器](https://github.com/anthropics/skills/pull/83)**  
    *   **功能**：两个 Meta-Skills，分别用于分析 Skill 的质量（结构、文档）和安全性。
    *   **状态**：[OPEN]  
    *   **热点分析**：属于“为 Skill 生态建设基础设施”的提案。随着 Skills 数量激增，如何自动化检测 Skill 的质量和安全隐患成为核心议题。

---

## 2. 社区需求趋势

从 Issues 讨论中，提炼出以下三大核心需求方向：

*   **企业级协作与共享机制**  
    Issue [#228 (Enable org-wide skill sharing)](https://github.com/anthropics/skills/issues/228) 以 13 条评论高居榜首。社区迫切需要摆脱手动传输 `.skill` 文件的原始方式，期望在组织内部建立共享 Skill 库，这标志着 Skills 正从“个人工具”向“团队资产”转型。

*   **Skills 开发工具链稳定性**  
    Issue [#556 (run_eval.py never triggers skills)](https://github.com/anthropics/skills/issues/556) 反映了评估脚本的严重 Bug。开发者在使用官方工具链测试 Skill 触发率时遇到阻碍，表明随着 Skill 编写门槛降低，配套的开发者工具（调试、评估、监控）亟需官方维护。

*   **安全信任边界与命名空间治理**  
    Issue [#492 (Community skills under anthropic/ namespace)](https://github.com/anthropics/skills/issues/492) 揭示了安全隐患。社区制作的 Skill 混用了官方命名空间，导致用户难以区分“官方审计”与“社区上传”。社区呼吁建立清晰的信任边界，以防止权限滥用。

---

## 3. 高潜力待合并 Skills

以下 PR 虽处于 OPEN 状态，但解决了关键技术痛点，具有较高的合并价值和落地潜力：

*   **[PR #83: Meta-Skills (质量与安全分析器)](https://github.com/anthropics/skills/pull/83)**  
    *理由*：直接响应了社区对 Skill 质量标准化的需求，且属于基础设施类增强，对生态长期健康至关重要。

*   **[PR #514: 文档排版控制](https://github.com/anthropics/skills/pull/514)**  
    *理由*：解决了普遍存在的文档生成痛点，通用性强，适合作为基础能力集成到主分支。

*   **[PR #362: UTF-8 字符处理修复](https://github.com/anthropics/skills/pull/362)**  
    *理由*：修复了验证脚本在处理多字节字符时的崩溃问题，这是国际化支持的底层关键修复，预计会优先合并。

*   **[PR #1099: Windows 兼容性修复](https://github.com/anthropics/skills/pull/1099)**  
    *理由*：解决了 Windows 平台下 `run_eval.py` 无法运行的问题，显著提升了跨平台开发体验。

---

## 4. Skills 生态洞察

> **“从单一功能扩展向企业级治理与协作工具链演进。”**

当前社区诉求已超越“编写单一功能 Skill”的阶段，核心矛盾转移到了 **组织内共享分发**、**信任边界划分** 以及 **开发者工具链稳定性** 上。官方下一步重点可能会放在 Skills 的分发机制与安全规范制定上。

---

# Claude Code 社区动态日报 (2026-06-11)

## 1. 今日速览
Claude Code 今日发布 **v2.1.172** 版本，最引人注目的更新是支持**子代理递归调用**（最深 5 层），极大增强了复杂任务的自动化处理能力。社区方面，关于**印度市场定价（INR）**的功能请求讨论热度持续高涨，同时 **Opus 4.8 模型**在 Code 中的行为异常（如幻觉、重复输出）成为新的焦点。此外，严重的内存泄漏和 macOS Keychain 认证循环问题仍困扰部分用户。

## 2. 版本发布
**v2.1.172** (发布于 2026-06-11)
- **递归子代理**：Sub-agents 现在可以生成自己的子代理，支持最多 5 层深度，显著提升复杂工作流的自动化潜力。
- **AWS Bedrock 优化**：当未设置 `AWS_REGION` 时，将自动从 `~/.aws` 配置文件读取区域，符合 AWS SDK 标准优先级；`/status` 命令现在会显示区域来源。
- **功能增强**：浏览 mark 时新增搜索栏。

## 3. 社区热点 Issues (Top 10)

1.  **[Feature Request] 印度市场定价计划 (INR)**
    - **链接**: [#17432](https://github.com/anthropics/claude-code/issues/17432)
    - **热度**: 👍 426 | 💬 188
    - **摘要**: 社区强烈要求 Anthropic 针对印度市场推出 INR 定价，对标 OpenAI 和 Google 的本地化策略。目前仅支持 USD 对当地开发者造成门槛，此 Issue 已累计数百点赞，是近期最受关注的功能请求。

2.  **[Bug] 严重内存泄漏导致系统冻结 (129GB RAM)**
    - **链接**: [#11315](https://github.com/anthropics/claude-code/issues/11315)
    - **热度**: 👍 52 | 💬 64
    - **摘要**: 严重的内存泄漏报告，Claude Code 甚至消耗了 129GB 虚拟内存导致系统崩溃。该问题被标记为 `perf:memory`，是影响生产环境稳定性的关键 Bug。

3.  **[Feature] VS Code 扩展：禁用自动附加功能**
    - **链接**: [#24726](https://github.com/anthropics/claude-code/issues/24726)
    - **热度**: 👍 156 | 💬 50
    - **摘要**: 用户请求在 VS Code 扩展中增加设置，以禁用"自动附加打开文件/选区"的行为。目前的自动行为对部分工作流造成干扰，反映了用户对 IDE 集成精细控制权的诉求。

4.  **[Bug] MCP Connector OAuth 完成但未发送 Bearer Token**
    - **链接**: [#46140](https://github.com/anthropics/claude-code/issues/46140)
    - **热度**: 👍 5 | 💬 17
    - **摘要**: 标记为 CRITICAL。OAuth 2.1 流程虽顺利完成，但后续 MCP 请求未携带 Bearer Token，导致认证失效。影响 claude.ai Web 端的 MCP 连接器功能。

5.  **[Bug] Opus 4.8 模型幻觉：伪造用户请求并执行**
    - **链接**: [#64260](https://github.com/anthropics/claude-code/issues/64260)
    - **热度**: 💬 9
    - **摘要**: 用户报告 Opus 4.8 模型凭空捏造了用户指令并试图执行任务。这是模型行为层面的严重问题，涉及 Agent 的安全性与可控性，值得开发者警惕。

6.  **[Bug] 模型输出重复 "court" 标记**
    - **链接**: [#67331](https://github.com/anthropics/claude-code/issues/67331)
    - **摘要**: 在工具调用过程中，助手连续输出数千个 "court" 标记，导致输出刷屏。这可能是新模型 Opus 4.8 在特定上下文下的退化现象。

7.  **[Bug] 后台子代理拒绝停止**
    - **链接**: [#67321](https://github.com/anthropics/claude-code/issues/67321)
    - **摘要**: 用户明确下达停止指令后，后台运行的子代理仍在继续执行任务，且任务完成通知会重新唤醒主代理。随着 v2.1.172 支持多层子代理，此类控制权问题将更加敏感。

8.  **[Bug] 任务运行器误报磁盘空间不足 (ENOSPC)**
    - **链接**: [#63909](https://github.com/anthropics/claude-code/issues/63909)
    - **热度**: 👍 16 | 💬 8
    - **摘要**: Bash 工具在捕获子进程输出时报错 "No space left on device"，但实际上磁盘仍有空间。问题指向临时文件系统处理逻辑，会导致命令输出丢失。

9.  **[Bug] macOS Keychain 无限弹窗认证**
    - **链接**: [#67315](https://github.com/anthropics/claude-code/issues/67315)
    - **摘要**: 原生安装版在读取凭据时，因 Keychain 项缺少 `apple-tool:` 分区列表，导致系统无限弹出授权请求，"始终允许"选项无效。严重影响 macOS 用户体验。

10. **[Bug] Windows OpenSSH 环境下静默退出**
    - **链接**: [#67318](https://github.com/anthropics/claude-code/issues/67318)
    - **摘要**: 在 VS Code Remote-SSH 场景下，`claude.exe` 启动时静默退出 (Code 0)，导致远程开发无法使用。这是 Windows 平台特有的兼容性问题。

## 4. 重要 PR 进展 (Top 10)

1.  **修复插件开发验证器脚本异常终止**
    - **链接**: [#66416](https://github.com/anthropics/claude-code/pull/66416)
    - **内容**: 修复了 `plugin-dev` 中三个验证脚本因 `set -e` 设置导致遇到首个问题即中止的问题，现在可以报告所有发现的问题。

2.  **转发 ANTHROPIC_BASE_URL 至 agentic_review 子进程**
    - **链接**: [#65875](https://github.com/anthropics/claude-code/pull/65875)
    - **内容**: 修复了 Advisor 功能在启动子进程时未传递代理配置的问题。对于使用 LiteLLM 或 Bifrost 等网关的用户至关重要，否则会导致认证失败。

3.  **修复 plugin-dev 缺失的清单文件**
    - **链接**: [#65286](https://github.com/anthropics/claude-code/pull/65286)
    - **内容**: 为 `plugin-dev` 插件添加了缺失的 `plugin.json`，修复了插件发现和安装机制。

4.  **Hookify 提示字段映射修复**
    - **链接**: [#67084](https://github.com/anthropics/claude-code/pull/67084)
    - **内容**: 修复了旧版 Hook 规则到新 `UserPromptSubmit` 载荷字段的映射，并增加了向后兼容支持。

5.  **新增浅色主题颜色问题检测脚本**
    - **链接**: [#65314](https://github.com/anthropics/claude-code/pull/65314)
    - **内容**: 添加了一个分类脚本，自动扫描并归类关于浅色终端主题下文字不可见的 Issue，提高维护者处理此类 UI 问题的效率。

6.  **文档更新：allowed-tools 与 agent tools 的区别**
    - **链接**: [#65916](https://github.com/anthropics/claude-code/pull/65916)
    - **内容**: 澄清了 `allowed-tools` 仅为自动审批机制（未列出工具仍可调用），而 `tools:` 为硬性限制。这对理解权限模型至关重要。

7.  **修复 DevContainer Docker 守护进程检测**
    - **链接**: [#66372](https://github.com/anthropics/claude-code/pull/66372)
    - **内容**: 修复了 PowerShell 中 Docker 检测逻辑，之前的 `try/catch` 无法捕获原生命令的非零退出码，导致 Docker 未运行时仍误报通过。

8.  **修复 Hookify 测试示例语义**
    - **链接**: [#63382](https://github.com/anthropics/claude-code/pull/63382)
    - **内容**: 修正了文档中 Hook 配置示例，原示例看起来像正则匹配但实际是子字符串匹配，修正后更符合引擎实际行为。

9.  **修复停止钩子脚本的错误处理**
    - **链接**: [#66573](https://github.com/anthropics/claude-code/pull/66573)
    - **内容**: 修复了 `stop-hook.sh` 在 `set -euo pipefail` 模式下，部分错误处理逻辑无法执行的问题。

10. **文档更新：.mcp.json 示例修正**
    - **链接**: [#64607](https://github.com/anthropics/claude-code/pull/64607)
    - **内容**: 修正了插件文档中 `.mcp.json` 错误地使用了 `mcpServers` 包装对象，指出该文件应使用扁平结构。

## 5. 功能需求趋势

1.  **区域化定价与支付**: 印度开发者社区对本地货币（INR）支付支持的呼声极高，这已成为目前点赞数最高的 Issue，表明 Claude Code 在非美元区的市场渗透需求强烈。
2.  **模型行为可控性**: 随着新模型 Opus 4.8 的集成，用户对模型的稳定性要求提升。近期出现了多起关于模型"幻觉"（伪造指令、重复输出）的报告，社区期望在工具层面增加更多的行为约束或重试机制。
3.  **IDE 集成精细控制**: VS Code 扩展的"自动附加"功能引发争议，用户希望拥有更细粒度的控制开关（如禁用自动读取当前文件），以减少对工作流的干扰和保护隐私。
4.  **后台任务管理**: 随着版本支持多层级子代理，用户对后台任务的控制权需求增加（如强制停止、状态监控），当前的"僵尸进程"问题（无法停止的后台代理）急需解决。

## 6. 开发者关注点

-   **稳定性与资源占用**: 内存泄漏（高达 129GB）和进程残留问题仍是部分高级用户的痛点，特别是在长时间运行或处理复杂任务时。
-   **企业级代理支持**: PR #65875 显示，使用自建网关（如 LiteLLM）的企业用户需要确保环境变量能正确透传给子进程，这是企业集成中的常见痛点。
-   **插件开发体验**: 近期 PR 集中修复了 `plugin-dev` 的验证逻辑、文档错误和清单文件缺失，表明 Anthropic 正在积极完善插件生态的开发者体验。
-   **跨平台兼容性**: Windows 平台下的 OpenSSH/Remote-SSH 场景问题，以及 macOS 的 Keychain 权限问题，是影响终端用户落地的两大障碍。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-06-11)

## 1. 今日速览
今日 OpenAI Codex 社区活跃度较高，主要聚焦于桌面端应用的稳定性与上下文管理问题。**核心热议**集中在多轮对话中模型回复错位（回应旧消息）的严重 Bug (#8648) 以及 MCP 连接握手失败的问题 (#6020)。**开发进展**方面，团队正在重构 Agent 身份验证体系，并优化 TUI（终端用户界面）对长文本和图片目标的支持，同时在处理 Guardian 审核超时的容错机制上有了显著改进。

## 2. 版本发布
过去 24 小时内发布了两个 Rust SDK 的 Alpha 版本：
- **rust-v0.140.0-alpha.7**
- **rust-v0.140.0-alpha.4**
*(注：Release Notes 仅包含版本号声明，未提供详细 Changelog，推测为底层依赖或预发布测试版本。)*

## 3. 社区热点 Issues (Top 10)

1.  **[Critical] 多轮对话上下文错位**
    - **Issue**: [#8648](https://github.com/openai/codex/issues/8648)
    - **摘要**: 在多轮对话中，Codex 有时会回复旧消息而非最新的用户输入，导致交互逻辑混乱。该问题获得了 54 个 👍 和 60 条评论，是目前社区反馈最强烈的 Bug。
    
2.  **[High] MCP 客户端握手普遍失败**
    - **Issue**: [#6020](https://github.com/openai/codex/issues/6020)
    - **摘要**: MCP (Model Context Protocol) 客户端在启动时频繁出现握手失败，导致所有服务端连接中断。影响了 Pro 用户的 GPT-5 模型使用。

3.  **[Auth] GitHub PR Review 工作区状态错误**
    - **Issue**: [#26867](https://github.com/openai/codex/issues/26867)
    - **摘要**: 用户从 Business 迁移到 Personal Pro 账户后，GitHub PR Review 功能仍提示 "Workspace is deactivated"，认证状态未正确同步。

4.  **[Data Loss] Desktop 会话列表丢失**
    - **Issue**: [#25463](https://github.com/openai/codex/issues/25463)
    - **摘要**: Codex Desktop 项目视图中线程消失，但本地 JSONL 文件仍存在。属于典型的 UI 与本地存储不同步问题，引发数据丢失担忧。

5.  **[Model Support] ChatGPT 账户模型支持受限**
    - **Issue**: [#17642](https://github.com/openai/codex/issues/17642)
    - **摘要**: Pro 用户在使用 ChatGPT 账户登录 CLI 时，无法调用 `gpt-5.3-codex-spark` 模型，报错 400，反映出订阅类型与模型权限的映射问题。

6.  **[Mobile] Android 远程控制无法加载历史记录**
    - **Issue**: [#22762](https://github.com/openai/codex/issues/22762)
    - **摘要**: Android 客户端连接 Mac 主机时，无法获取已有的会话历史，远程控制体验存在断层。

7.  **[Windows] 用户名非 ASCII 字符导致启动失败**
    - **Issue**: [#13553](https://github.com/openai/codex/issues/13553)
    - **摘要**: Windows Store 版 Codex 在用户名包含非 ASCII 字符（如中文、韩文）时无法启动，属于典型的编码兼容性问题。

8.  **[Performance] Desktop 进程泄漏与日志风暴**
    - **Issue**: [#26869](https://github.com/openai/codex/issues/26869)
    - **摘要**: macOS 版在崩溃重启后出现子进程泄漏和过量日志写入，导致磁盘 I/O 压力骤增，严重影响系统性能。

9.  **[Performance] Fast Mode 流式输出严重卡顿**
    - **Issue**: [#27491](https://github.com/openai/codex/issues/27491)
    - **摘要**: 最新版本的 Codex Desktop 在 Fast 模式下输出极慢，每几秒才输出几个字符，严重影响开发效率。

10. **[UX] 全局听写快捷键失效**
    - **Issue**: [#27296](https://github.com/openai/codex/issues/27296)
    - **摘要**: 更新至 v26.608.12217 后，Fn 全局听写快捷键在跨应用时失效，回归了用户常用的快捷操作体验。

## 4. 重要 PR 进展 (Top 10)

1.  **[Agent Identity] Agent 身份验证原语重构**
    - **PR**: [#19047](https://github.com/openai/codex/pull/19047), [#19049](https://github.com/openai/codex/pull/19049), [#19051](https://github.com/openai/codex/pull/19051)
    - **摘要**: 一系列关于 Agent Identity 的底层重构，引入了任务注册原语和 JWT 认证优化，旨在增强 HAI (High-Availability Infrastructure) 的单任务运行安全性。

2.  **[TUI] 支持长文本目标与图片输入**
    - **PR**: [#27508](https://github.com/openai/codex/pull/27508), [#27509](https://github.com/openai/codex/pull/27509)
    - **摘要**: 解决了 TUI 中粘贴长文本作为目标时的限制（原限制 4000 字符），并增加了对图片目标的支持，显著提升了 CLI 的多模态交互能力。

3.  **[Guardian] 审核超时降级处理**
    - **PR**: [#27440](https://github.com/openai/codex/pull/27440)
    - **摘要**: 当 Guardian 自动审核超时时，现在会回退到手动批准流程，而不是直接报错阻塞，提升了交互的鲁棒性。

4.  **[Context] 新增 Context Remaining 工具**
    - **PR**: [#27518](https://github.com/openai/codex/pull/27518)
    - **摘要**: 为模型添加了一个新工具，允许其主动查询当前的剩余 Token 预算，帮助模型更好地管理上下文窗口。

5.  **[MCP] 传递 Agent 路径元数据**
    - **PR**: [#27495](https://github.com/openai/codex/pull/27495)
    - **摘要**: 在 MCP 工具调用中增加了 `agent_path` 和 `has_spawned_subagent` 元数据，支持更复杂的 Agent 调用链追踪。

6.  **[Remote] 远程控制状态持久化**
    - **PR**: [#27445](https://github.com/openai/codex/pull/27445)
    - **摘要**: 重构了远程控制的状态管理，将运行时状态与持久化配置分离，解决了启动时的竞态条件，有望修复移动端历史记录加载问题。

7.  **[Image] 图片处理保留元数据**
    - **PR**: [#27266](https://github.com/openai/codex/pull/27266)
    - **摘要**: 在调整 Prompt 图片大小时保留 ICC profiles 和 EXIF 元数据（包括方向信息），解决了图片上传后旋转或色彩失真的问题。

8.  **[Compaction] 基于 Comp_hash 的上下文压缩**
    - **PR**: [#27520](https://github.com/openai/codex/pull/27520) (Closed/Merged)
    - **摘要**: 通过持久化 `comp_hash` 来优化上下文压缩逻辑，确保模型切换或恢复会话时能正确处理历史记录压缩。

9.  **[Security] Auth 加密命名空间隔离**
    - **PR**: [#27535](https://github.com/openai/codex/pull/27535)
    - **摘要**: 为 CLI auth 和 MCP OAuth 凭证建立独立的加密文件命名空间，提升凭证存储的安全性。

10. **[Tooling] Python SDK 依赖管理优化**
    - **PR**: [#27538](https://github.com/openai/codex/pull/27538)
    - **摘要**: 使用 dependency groups 管理 Python SDK 工具链（如 Ruff），解决了之前 `uv run --with` 导致的锁文件外依赖重解析问题。

## 5. 功能需求趋势

1.  **上下文管理的透明度与控制权**：社区对上下文窗口的使用非常敏感，Issue #8648（上下文错位）和 PR #27518（查询剩余 Token）表明用户迫切需要更可靠的上下文保持机制和可视化的 Token 预算管理。
2.  **跨平台体验一致性**：Windows 平台的问题集中爆发（启动崩溃、路径编码、UI 卡死），显示出 Codex Desktop 在 Windows 上的适配度远低于 macOS，是急需补齐的短板。
3.  **远程协作与移动端**：Android 远程控制功能的反馈显示出用户对 "Desktop as a Host, Mobile as a Client" 模式的期待，但目前数据同步和连接稳定性是主要瓶颈。

## 6. 开发者关注点

- **多轮对话的可靠性**：开发者最痛恨的是 Agent 在复杂任务中 "失忆" 或 "跟丢" 最新指令（Issue #8648），这是影响生产力的核心痛点。
- **桌面端稳定性**：Desktop App 从白屏、进程泄漏到 UI 数据丢失，一系列问题表明 Electron/Native 层的稳定性亟待回归测试。
- **MCP 集成兼容性**：随着 MCP 工具链的普及，连接握手失败（Issue #6020）和 OAuth 登录问题（Issue #24103）阻碍了开发者将 Codex 接入现有工作流。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-06-11)

## 1. 今日速览
今日 Gemini CLI 社区重点关注**核心稳定性修复**与**安全性增强**。开发团队针对备受关注的 Shell 命令执行挂起问题提交了关键修复 PR，同时合并了多项涉及间接提示注入（IPI）防护和路径遍历漏洞的安全更新。社区讨论聚焦于提升智能体的鲁棒性及 AST（抽象语法树）感知工具的集成潜力。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues

1.  **[P1] Generalist agent hangs (通用智能体挂起)**
    *   **链接**: [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
    *   **关注点**: 这是一个影响严重的高频问题。用户反馈当 CLI 调用通用智能体时（如创建文件夹），程序会无限挂起，需强制取消。社区正在积极寻求复现和解决方案。

2.  **[P1] Shell command execution gets stuck (Shell 命令执行卡死)**
    *   **链接**: [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
    *   **关注点**: 用户在执行简单 CLI 命令后，终端显示 "Awaiting user input" 但实际上命令已完成，导致交互卡死。该问题直接影响用户体验，目前已提交修复 PR (#27842)。

3.  **[EPIC] Robust component level evaluations (组件级评估)**
    *   **链接**: [#24353](https://github.com/google-gemini/gemini-cli/issues/24353)
    *   **关注点**: 这是一个关于质量保证的史诗级任务。旨在引入并扩展“行为评估”测试，目前已有 76 个测试用例，目标是覆盖更多 Gemini 模型支持场景，提升工具稳定性。

4.  **[P1] Subagent recovery hides interruption (子智能体错误报告“成功”掩盖中断)**
    *   **链接**: [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
    *   **关注点**: 这是一个严重的逻辑 Bug。`codebase_investigator` 子智能体在达到最大轮次限制被迫中断时，错误地返回 `status: "success"`，导致错误被掩盖，影响任务结果的可靠性。

5.  **[P2] Assess the impact of AST-aware file reads (AST 感知文件读取影响评估)**
    *   **链接**: [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
    *   **关注点**: 探讨引入 AST 感知工具的价值。旨在通过 AST 分析精确读取方法边界，减少 Token 消耗和误读，提升智能体处理代码库的能力。

6.  **[P2] Add deterministic redaction (自动记忆日志脱敏)**
    *   **链接**: [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)
    *   **关注点**: 安全性问题。当前的自动记忆功能在将日志发送给模型前未能完全脱敏敏感信息（Secrets），存在潜在的安全风险。

7.  **[P2] Gemini does not use skills and sub-agents enough (智能体未充分调用技能)**
    *   **链接**: [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
    *   **关注点**: 用户反馈 CLI 很少主动调用自定义的 Skills 或 Sub-agents，即便任务高度相关。这反映了智能体调度策略的优化空间。

8.  **[P2] Shell creates tmp scripts in random spots (临时脚本随处创建)**
    *   **链接**: [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)
    *   **关注点**: 模型在执行 Shell 时倾向于在各种目录生成临时编辑脚本，造成工作区污染。用户期望模型能更规范地管理临时文件。

9.  **[P2] CLI encounters 400 error with > 128 tools (工具数量过多导致 400 错误)**
    *   **链接**: [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
    *   **关注点**: 当可用工具超过一定数量（如 400 个）时，CLI 会报错。这限制了复杂项目中的工具集成能力。

10. **[P3] Enhance browser_agent resilience (增强浏览器智能体容错)**
    *   **链接**: [#22232](https://github.com/google-gemini/gemini-cli/issues/22232)
    *   **关注点**: 浏览器智能体在遇到锁定配置文件（如持久会话模式）时策略过于激进。建议实现自动会话接管或锁恢复机制。

## 4. 重要 PR 进展

1.  **[P1] fix(core): never let shell exit results hang on the output drain**
    *   **链接**: [#27842](https://github.com/google-gemini/gemini-cli/pull/27842)
    *   **内容**: 修复了 Issue #25166。解决了 PTY 执行退出结果等待输出管道时可能导致的无限挂起问题，增加了错误处理边界，防止渲染管道阻塞。

2.  **[P1] fix(ui): enforce truncation lockout for tool confirmations (防止 IPI 攻击)**
    *   **链接**: [#27472](https://github.com/google-gemini/gemini-cli/pull/27472)
    *   **内容**: 安全性修复。针对间接提示注入（IPI）漏洞，强制要求用户展开并查看完整的命令或文件差异内容后才能进行工具确认操作，防止恶意内容被截断隐藏。

3.  **[Security] fix(security): resolve hostnames before private-IP check**
    *   **链接**: [#27473](https://github.com/google-gemini/gemini-cli/pull/27473)
    *   **内容**: 修复了 SSRF 防御绕过漏洞。原先的 `isBlockedHost` 仅检查 IP 字面量，攻击者可通过解析为私有 IP 的域名绕过检查，现已修复。

4.  **[Security] fix(cli): prevent path traversal vulnerabilities during skill install**
    *   **链接**: [#27767](https://github.com/google-gemini/gemini-cli/pull/27767)
    *   **内容**: 修复了技能安装/链接过程中的路径遍历漏洞，防止恶意技能包写入系统预期之外的路径。

5.  **[P1] fix(core): resolve P1 crash during terminal resize (ioctl EBADF)**
    *   **链接**: [#27502](https://github.com/google-gemini/gemini-cli/pull/27502)
    *   **内容**: 修复了终端窗口调整大小时可能发生的竞态条件崩溃，该问题源于 UI 布局引擎尝试调整已销毁的 PTY 大小。

6.  **[Security] ci: validate workflow_run origin (修复 Fork 制品投毒)**
    *   **链接**: [#27753](https://github.com/google-gemini/gemini-cli/pull/27753)
    *   **内容**: 修复了 CI/CD 流水线中的 `workflow_run` 制品投毒风险，防止 Fork PR 利用此机制在主仓库环境中执行恶意代码。

7.  **[Fix] fix(core): Ensure zero-quota limits fail fast**
    *   **链接**: [#27698](https://github.com/google-gemini/gemini-cli/pull/27698)
    *   **内容**: 修复了当账户配额为 0 时，CLI 会陷入无效的 10 次重试循环导致程序挂起的问题，改为快速失败。

8.  **[Fix] fix(core): make read_background_output delay abort-aware**
    *   **链接**: [#27839](https://github.com/google-gemini/gemini-cli/pull/27839)
    *   **内容**: 修复了用户按 ESC 取消后台输出读取操作时，UI 显示已取消但后台进程仍在运行的问题，增加了 AbortSignal 支持。

9.  **[Feat] feat(core): support list format in trustedFolders.json**
    *   **链接**: [#27648](https://github.com/google-gemini/gemini-cli/pull/27648)
    *   **内容**: 提升配置易用性。`trustedFolders.json` 现支持 JSON 数组格式，不再仅限于对象格式，方便用户手动维护信任目录列表。

10. **[Fix] fix(core): guard isFunctionCall/isFunctionResponse against empty parts**
    *   **链接**: [#27474](https://github.com/google-gemini/gemini-cli/pull/27474)
    *   **内容**: 修复了逻辑漏洞。原先代码将包含空 `parts` 数组的消息错误地识别为函数调用/响应，现已增加守卫条件。

## 5. 功能需求趋势

*   **代码感知能力增强**: 社区强烈呼吁引入 AST（抽象语法树）感知工具（#22745, #22747）。开发者希望 CLI 能像 IDE 一样理解代码结构，而不仅仅是文本搜索，以减少 Token 浪费并提高代码修改的准确性。
*   **自动化质量评估**: 对于“组件级行为评估”的关注（#24353）显示出项目正在从单纯的功能开发转向建立完善的自动化测试体系，以保证智能体行为的可预测性。
*   **安全与隐私控制**: 关于日志脱敏（#26525）、工具确认防注入（#27472）及路径遍历防护的需求增多，表明在企业级应用场景下，安全边界和权限控制是核心关注点。

## 6. 开发者关注点

*   **稳定性痛点**: 挂起和卡死问题依然是最大的痛点。无论是通用智能体挂起（#21409）还是 Shell 执行卡死（#25166），这类问题直接阻断了开发流程，是目前反馈最集中的领域。
*   **子智能体调度逻辑**: 开发者发现智能体倾向于“单打独斗”，不愿调度自定义的 Sub-agents 或 Skills（#21968），且在达到限制时错误地报告成功（#22323）。这反映出当前的调度策略和状态管理逻辑仍需优化。
*   **环境兼容性**: Wayland 下的浏览器智能体失败（#21983）和终端调整大小崩溃（#27502）表明，CLI 在不同系统环境下的兼容性和健壮性仍有提升空间。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-06-11)

## 1. 今日速览
今日 GitHub Copilot CLI 无新版本发布，社区讨论焦点集中在**模型支持不一致**与**工作流破坏性变更**上。最受关注的 Issue #53 持续发酵，用户对 CLI 移除旧命令导致工作流中断表示强烈不满，甚至开始自发寻找替代方案。同时，Gemini 系列模型在 CLI 中的缺失问题引发大量反馈，企业与组织权限配置的痛点亦日益凸显。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues (Top 10)

1.  **[OPEN] Bring back the GitHub Copilot in the CLI commands to not break workflows (#53)**
    *   **重要性**：社区目前最关注的 Issue（👍 75, 评论 34）。
    *   **动态**：作者指出该问题已存在 6 个月仍未获官方回应，社区已开始自行开发替代版本（如 `shell-ai`）。用户对官方破坏现有工作流且缺乏沟通感到沮丧。
    *   **链接**：[github/copilot-cli Issue #53](https://github.com/github/copilot-cli/issues/53)

2.  **[OPEN] "Copilot Requests" permission for fine-grained tokens should be visible for org-owned tokens (#223)**
    *   **重要性**：企业用户核心痛点（👍 76）。
    *   **动态**：组织拥有的细粒度 PAT 令牌中缺少 "Copilot Requests" 权限显示，导致企业自动化流程受阻，违背了企业不希望使用个人 PAT 的合规要求。
    *   **链接**：[github/copilot-cli Issue #223](https://github.com/github/copilot-cli/issues/223)

3.  **[CLOSED] Copilot CLI does not list all org-enabled models (e.g. Gemini 3.1 Pro) (#1703)**
    *   **重要性**：模型可用性不均等问题的典型代表（👍 54）。
    *   **动态**：用户反馈即使在组织设置中启用了 Gemini 3.1 Pro，CLI 端仍无法列出该模型，而 VS Code 端则正常可用。这反映了 CLI 与 IDE 端模型同步的滞后。
    *   **链接**：[github/copilot-cli Issue #1703](https://github.com/github/copilot-cli/issues/1703)

4.  **[OPEN] ctrl+shift+c no longer copies to clipboard on Linux (#2082)**
    *   **重要性**：Linux 平台体验严重退化（👍 8, 评论 21）。
    *   **动态**：自 v1.0.4 起，Ubuntu 终端中常用的 `ctrl+shift+c` 快捷键失效，严重影响了 Linux 用户的日常操作习惯。
    *   **链接**：[github/copilot-cli Issue #2082](https://github.com/github/copilot-cli/issues/2082)

5.  **[OPEN] Hardcoded colors in 1.0.61 break the light themed CLI (#3750)**
    *   **重要性**：最新版本的严重 UI Bug。
    *   **动态**：刚刚发布的 v1.0.61 引入了硬编码背景色，导致在浅色主题终端下文字无法阅读，影响用户体验。
    *   **链接**：[github/copilot-cli Issue #3750](https://github.com/github/copilot-cli/issues/3750)

6.  **[OPEN] Error loading model list: Error: Not authenticated (#3596)**
    *   **重要性**：会话管理 Bug。
    *   **动态**：用户在恢复特定会话时遇到认证错误，无法加载模型列表，必须开启新会话才能解决，影响了连续工作的体验。
    *   **链接**：[github/copilot-cli Issue #3596](https://github.com/github/copilot-cli/issues/3590)

7.  **[CLOSED] 3rd party MCP servers are disabled, despite no such policy (#1707)**
    *   **重要性**：MCP 集成误报问题。
    *   **动态**：用户在升级版本后，CLI 错误地提示“组织策略禁用了第三方 MCP 服务器”，但实际上并无此策略。该问题影响了 MCP 服务器的正常使用。
    *   **链接**：[github/copilot-cli Issue #1707](https://github.com/github/copilot-cli/issues/1707)

8.  **[CLOSED] Please bring back no-alt-screen (#2334)**
    *   **重要性**：UI 交互逻辑变更引发反弹（👍 28）。
    *   **动态**：用户强烈反对 `alt-screen` 的默认行为，导致无法滚动查看历史记录或使用终端查找功能，希望恢复旧版交互方式。
    *   **链接**：[github/copilot-cli Issue #2334](https://github.com/github/copilot-cli/issues/2334)

9.  **[OPEN] Regression in v1.0.60: userPromptSubmitted hook additionalContext no longer injected (#3727)**
    *   **重要性**：插件/钩子功能回归缺陷。
    *   **动态**：v1.0.60 版本破坏了 `userPromptSubmitted` 钩子的上下文注入功能，这对依赖该机制的自动化流程构成打击。
    *   **链接**：[github/copilot-cli Issue #3727](https://github.com/github/copilot-cli/issues/3727)

10. **[OPEN] Reasoning/thinking display garbles streamed text with duplicated overlapping chunks (#3755)**
    *   **重要性**：渲染引擎 Bug。
    *   **动态**：在启用推理显示时，流式文本渲染出现严重的字符重叠和重复问题（如 "number" 渲染为 "numbnumber"），影响阅读。
    *   **链接**：[github/copilot-cli Issue #3755](https://github.com/github/copilot-cli/issues/3755)

## 4. 重要 PR 进展
过去 24 小时内无活跃的 Pull Requests 更新。

## 5. 功能需求趋势
*   **模型对齐与一致性**：社区强烈要求 CLI 端的模型支持（尤其是 Gemini 3.1 Pro / Flash 系列）与 VS Code 端保持一致。目前的“阉割版”模型列表让用户感到困惑和不满。
*   **MCP (Model Context Protocol) 集成**：关于第三方 MCP 服务器连接问题、策略误报以及调用便捷性的需求正在上升，用户希望 CLI 能更好地作为 MCP 客户端。
*   **交互体验稳定性**：用户强烈反对破坏性的 UI 变更（如 `alt-screen`），呼吁保留或恢复能够查看历史记录、方便复制的传统终端交互模式。
*   **高级权限管理**：企业用户对 Fine-grained Tokens 和组织级权限管理的需求日益迫切，希望能有更安全的企业级集成方案。

## 6. 开发者关注点
*   **破坏性变更缺乏沟通**：Issue #53 的持续升温表明，开发者对未通知即移除核心功能或改变命令行习惯的行为容忍度极低，迫切需要官方的路线图说明。
*   **版本稳定性问题**：近期版本（如 v1.0.60, v1.0.61）接连引入回归 Bug（Hook 失效、主题渲染错误、剪贴板问题），开发者对自动升级后的稳定性表示担忧。
*   **跨平台体验差异**：Linux 用户继续受困于快捷键和剪贴板问题，Windows 用户则面临终端渲染和编码问题，基础体验在不同操作系统上存在割裂感。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-06-11)

## 1. 今日速览
今日 Kimi Code CLI 无新版本发布，核心开发活动主要集中在提升系统稳定性与跨平台兼容性。开发者 @he-yufeng 提交了大量修复补丁，重点解决了 Windows 平台下的日志、进程管理及控制台显示问题。社区反馈聚焦于 Agent 模式的执行逻辑，特别是 YOLO 模式下的交互异常与任务完成状态判定。

## 2. 版本发布
过去 24 小时内无新版发布。

## 3. 社区热点 Issues
过去 24 小时内仅更新了 3 条 Issue，以下列出 2 条具有实际讨论价值的技术问题：

*   **#2448 [OPEN] YOLO 模式下仍提示审批**
    *   **重要性**：直接影响开发者使用 "YOLO mode"（全自动模式）的体验，导致自动化流程中断。
    *   **详情**：用户在 Debian 平台使用 v0.12.0 版本及 k2.6 模型时，即使在 YOLO 模式下仍频繁收到审批请求，违背了该模式的设计初衷。
    *   **链接**：[MoonshotAI/kimi-cli Issue #2448](https://github.com/MoonshotAI/kimi-cli/issues/2448)

*   **#2447 [OPEN] 最后一个 Todo 项目永远无法完成**
    *   **重要性**：涉及 Agent 任务调度核心逻辑，可能导致任务挂起或无限循环。
    *   **详情**：用户反馈在 Agent 执行过程中，列表中的最后一项 Todo 始终无法标记为完成，影响任务闭环。
    *   **链接**：[MoonshotAI/kimi-cli Issue #2447](https://github.com/MoonshotAI/kimi-cli/issues/2447)

## 4. 重要 PR 进展
过去 24 小时内有大量 PR 更新，主要集中于底层 Bug 修复与体验优化。

*   **#2327 [CLOSED] 超时后终止 Shell 进程树**
    *   **内容**：修复了 Shell 命令超时或取消时未能彻底终止子进程的问题，引入了进程组/会话管理机制，防止僵尸进程占用资源。
    *   **链接**：[MoonshotAI/kimi-cli PR #2327](https://github.com/MoonshotAI/kimi-cli/pull/2327)

*   **#2355 [CLOSED] MCP 启动失败后继续执行**
    *   **内容**：优化了 MCP (Model Context Protocol) 服务器启动逻辑，当延迟启动失败时不再中断交互回合，而是记录日志并降级运行，增强了系统的鲁棒性。
    *   **链接**：[MoonshotAI/kimi-cli PR #2355](https://github.com/MoonshotAI/kimi-cli/pull/2355)

*   **#2334 [CLOSED] 清理发送给 Kimi 请求中的无效 UTF-16 代理项**
    *   **内容**：修复了编码问题，在发送请求前清洗系统提示和历史记录中的孤立 UTF-16 代理项，防止因编码错误导致的 API 调用失败。
    *   **链接**：[MoonshotAI/kimi-cli PR #2334](https://github.com/MoonshotAI/kimi-cli/pull/2334)

*   **#2354 [CLOSED] 修复 Windows 平台日志文件轮转冲突**
    *   **内容**：针对 Windows 平台，将日志文件改为进程独立模式（`kimi.<pid>.log`），解决了并发进程（CLI/Web/Worker）同时轮转同一日志文件导致的冲突。
    *   **链接**：[MoonshotAI/kimi-cli PR #2354](https://github.com/MoonshotAI/kimi-cli/pull/2354)

*   **#2333 [CLOSED] Web 端侧边栏打开归档会话修复**
    *   **内容**：修复了从侧边栏选择已归档会话时被判定为“缺失”的问题，现在可以正确加载归档会话。
    *   **链接**：[MoonshotAI/kimi-cli PR #2333](https://github.com/MoonshotAI/kimi-cli/pull/2333)

*   **#2235 [CLOSED] 修复 OpenAI Legacy 请求中的空工具列表**
    *   **内容**：解决了兼容性问题，部分 OpenAI 兼容 API（如 vLLM）会拒绝空的 `tools` 数组，此 PR 确保无工具调用时完全省略该字段。
    *   **链接**：[MoonshotAI/kimi-cli PR #2235](https://github.com/MoonshotAI/kimi-cli/pull/2235)

*   **#2217 [CLOSED] 恢复冷却后的后台自动触发机制**
    *   **内容**：优化后台 Agent 逻辑，在连续失败触发冷却期（10分钟）后，冷却结束时会重置失败计数器，允许后台任务重新激活。
    *   **链接**：[MoonshotAI/kimi-cli PR #2217](https://github.com/MoonshotAI/kimi-cli/pull/2217)

*   **#2289 [CLOSED] 避免 Windows 控制台字体重置**
    *   **内容**：修复了在 Windows 上执行子进程时可能导致控制台字体意外重置的问题，提升了终端用户体验。
    *   **链接**：[MoonshotAI/kimi-cli PR #2289](https://github.com/MoonshotAI/kimi-cli/pull/2289)

*   **#2387 [OPEN] 保留 Shell 命令标题细节**
    *   **内容**：UI 体验优化，修复了长 Shell 命令在 UI 显示中被截断导致信息丢失的问题，优化了标题展示逻辑。
    *   **链接**：[MoonshotAI/kimi-cli PR #2387](https://github.com/MoonshotAI/kimi-cli/pull/2387)

*   **#2383 [OPEN] 修复历史回放中的孤立 tool_calls**
    *   **内容**：修复了会话异常中断（如 kill -9）后，历史记录中可能残留孤立的 tool_calls 导致会话无法恢复的问题。
    *   **链接**：[MoonshotAI/kimi-cli PR #2383](https://github.com/MoonshotAI/kimi-cli/pull/2383)

## 5. 功能需求趋势
根据近期 Issues 和 PRs 的修复方向分析：

*   **Agent 执行稳定性**：社区高度关注 Agent 在长时间运行、异常中断及复杂任务链（Todo lists）下的表现，期望工具具备更强的容错能力（如 PR #2383, #2355）。
*   **跨平台体验一致性**：Windows 平台的兼容性是近期开发的重点，涉及日志、控制台显示、进程管理等多个底层模块，表明 Windows 用户群体正在扩大。
*   **交互流程优化**：开发者对 "YOLO mode" 等自动化功能的需求强烈，期望减少不必要的交互打断（Issue #2448）。

## 6. 开发者关注点
*   **自动化流程受阻**：开发者反馈在 YOLO 模式下仍被要求审批，这阻碍了 CI/CD 或无人值守场景的应用，是急需解决的痛点。
*   **任务闭环逻辑**：Todo 列表最后一项无法完成的问题反映出 Agent 对“任务结束”状态的判定逻辑可能存在缺陷，开发者期待 Agent 能更准确地判断任务完成状态。
*   **底层资源清理**：进程树终止、日志文件占用等底层问题虽不显眼，但直接影响工具在长期运行中的稳定性。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-06-11)

## 1. 今日速览
OpenCode 今日紧急发布 **v1.17.3**，修复了 v1.17.2 引发的桌面端崩溃问题，并在 v1.17.2 中解决了远程配置认证过期导致的失败问题。社区热议聚焦于 **Cursor CLI 集成支持**以及**新版高 CPU 占用**问题，核心开发团队正在推进 **TUI 2.0** 架构重构及 V2 Session API 的开发。

## 2. 版本发布
### v1.17.3
- **修复**：解决了 v1.17.2 导致的桌面端启动崩溃问题。

### v1.17.2
- **Core**：
  - **认证修复**：远程配置认证过期时不再加载失败，改为提示用户重新登录 (@Ayushlm10)。
  - **权限修复**：恢复了子代理使用自身配置权限的功能。
- **Desktop**：
  - **Linux**：修复了启动器和图标标识，解决了固定应用无法正常打开的问题。

## 3. 社区热点 Issues (Top 10)

1.  **[OPEN] Support for Cursor?** #2072
    - **摘要**：随着 Cursor 发布其 CLI 工具，社区强烈呼吁 OpenCode 提供集成支持，以便在 Cursor 环境中无缝使用。
    - **热度**：👍 183 | 💬 71
    - **链接**：[anomalyco/opencode Issue #2072](https://github.com/anomalyco/opencode/issues/2072)

2.  **[OPEN] [FEATURE]: Add native session goals with /goal** #27167
    - **摘要**：建议增加原生的 `/goal` 命令，提供持久的会话目标与生命周期管理功能，弥补当前自定义斜杠命令的不足。
    - **热度**：👍 69 | 💬 40
    - **链接**：[anomalyco/opencode Issue #27167](https://github.com/anomalyco/opencode/issues/27167)

3.  **[OPEN] High CPU usage in newer versions of OpenCode** #30086
    - **摘要**：用户反馈近期版本 CPU 占用率飙升，严重影响系统流畅度，从之前支持 10+ 会话降至 3 个会话即卡顿。
    - **热度**：👍 1 | 💬 10
    - **链接**：[anomalyco/opencode Issue #30086](https://github.com/anomalyco/opencode/issues/30086)

4.  **[OPEN] feat: YOLO Mode — Auto-Approve All Permission Prompts** #11831
    - **摘要**：高级用户请求增加 "YOLO 模式"，自动批准所有工具权限提示，以减少工作流中断（保留显式拒绝规则）。
    - **热度**：👍 29 | 💬 9
    - **链接**：[anomalyco/opencode Issue #11831](https://github.com/anomalyco/opencode/issues/11831)

5.  **[OPEN] xfyun engine busy response not retried** #31812
    - **摘要**：使用讯飞云 时，API 返回 "engine busy" 错误时 OpenCode 未进行重试，导致请求直接失败。
    - **热度**：👍 0 | 💬 4
    - **链接**：[anomalyco/opencode Issue #31812](https://github.com/anomalyco/opencode/issues/31812)

6.  **[OPEN] [BUG] Terminal button in web UI mysteriously disappears** #30158
    - **摘要**：自 v1.15.12 起，Web UI 右上角的终端按钮及部分图标神秘消失，降级后可恢复。
    - **热度**：👍 6 | 💬 7
    - **链接**：[anomalyco/opencode Issue #30158](https://github.com/anomalyco/opencode/issues/30158)

7.  **[OPEN] opencode web UI cannot browse or select folders outside the default user profile** #6490
    - **摘要**：Windows 平台 Web UI 限制了目录浏览范围，无法选择用户配置目录（如 D:\code\python）以外的文件夹。
    - **热度**：👍 12 | 💬 10
    - **链接**：[anomalyco/opencode Issue #6490](https://github.com/anomalyco/opencode/issues/6490)

8.  **[OPEN] Cerebras zai-glm-4.7 fails on follow-up turn with reasoning_content** #26762
    - **摘要**：使用 Cerebras 特定模型进行多轮推理和工具调用时，后续 Assistant 回复报错，提示 `reasoning_content` 属性不支持。
    - **热度**：👍 2 | 💬 10
    - **链接**：[anomalyco/opencode Issue #26762](https://github.com/anomalyco/opencode/issues/26762)

9.  **[OPEN] Opus 4.8 via GitHub Copilot leaks repeated literal tool-call text** #31247
    - **摘要**：通过 GitHub Copilot 使用 Opus 4.8 时，Assistant 消息中会泄漏重复的原始工具调用文本（如 `call read`）。
    - **热度**：👍 0 | 💬 8
    - **链接**：[anomalyco/opencode Issue #31247](https://github.com/anomalyco/opencode/issues/31247)

10. **[OPEN] Windows 下 bash 工具中文输出乱码** #31830
    - **摘要**：Windows 环境下 bash 工具输出中文乱码，原因是控制台编码被重置为 936，建议增加 shell.args 配置或自动继承父进程编码。
    - **热度**：👍 0 | 💬 1
    - **链接**：[anomalyco/opencode Issue #31830](https://github.com/anomalyco/opencode/issues/31830)

## 4. 重要 PR 进展 (Top 10)

1.  **[OPEN] tui 2.0** #31796
    - **内容**：大规模重构 TUI（终端用户界面）架构，旨在提升终端交互体验和性能。
    - **链接**：[anomalyco/opencode PR #31796](https://github.com/anomalyco/opencode/pull/31796)

2.  **[CLOSED] feat(server): add v2 session API endpoints** #31822
    - **内容**：新增 V2 版本的会话 API 端点，包括位置解析和会话创建/获取接口，为未来功能奠定基础。
    - **链接**：[anomalyco/opencode PR #31822](https://github.com/anomalyco/opencode/pull/31822)

3.  **[OPEN] fix(opencode): retry on xfyun engine busy response** #31819
    - **内容**：针对 Issue #31812，增加对讯飞云 "engine busy" 错误的重试机制，提升第三方模型服务稳定性。
    - **链接**：[anomalyco/opencode PR #31819](https://github.com/anomalyco/opencode/pull/31819)

4.  **[OPEN] feat(desktop): add keyboard shortcuts to switch projects (Cmd+1-9)** #13610
    - **内容**：为桌面端添加类似浏览器的项目切换快捷键（Cmd/Ctrl+1~9），提升多项目并行效率。
    - **链接**：[anomalyco/opencode PR #13610](https://github.com/anomalyco/opencode/pull/13610)

5.  **[OPEN] fix(opencode): surface content-filter finish reason as visible error** #31745
    - **内容**：当模型因内容过滤（如 Anthropic refusal）停止生成时，显式抛出错误而非静默失败，提高调试效率。
    - **链接**：[anomalyco/opencode PR #31745](https://github.com/anomalyco/opencode/pull/31745)

6.  **[OPEN] fix(tui): preserve exit epilogue during scoped shutdown** #31805
    - **内容**：修复 TUI 退出时会话总结被意外清除导致无法打印的问题。
    - **链接**：[anomalyco/opencode PR #31805](https://github.com/anomalyco/opencode/pull/31805)

7.  **[OPEN] fix(opencode): graceful error handling for PDF/image file read failures** #31329
    - **内容**：修复读取损坏或无权限的 PDF/图片文件时会话崩溃的问题，改为返回可读错误信息。
    - **链接**：[anomalyco/opencode PR #31329](https://github.com/anomalyco/opencode/pull/31329)

8.  **[OPEN] feat(tui): Add inline $skill invocations** #29217
    - **内容**：允许在提示词编辑器中通过 `$` 符号内联调用 Skill，增强交互灵活性。
    - **链接**：[anomalyco/opencode PR #29217](https://github.com/anomalyco/opencode/pull/29217)

9.  **[OPEN] fix(core): add compaction key to isV1 detection** #31817
    - **内容**：修复配置版本检测逻辑，防止因仅包含 `compaction` 字段而错误丢弃 `preserve_recent_tokens` 配置。
    - **链接**：[anomalyco/opencode PR #31817](https://github.com/anomalyco/opencode/pull/31817)

10. **[OPEN] fix(tool): remove undocumented +100ms from shell timeout** #31806
    - **内容**：移除 Shell 工具超时设置中未记录的 +100ms 缓冲时间，确保超时行为符合用户预期。
    - **链接**：[anomalyco/opencode PR #31806](https://github.com/anomalyco/opencode/pull/31806)

## 5. 功能需求趋势

- **跨工具/IDE 集成**：随着 Cursor CLI 的发布，社区对 OpenCode 成为跨 IDE/工具的统一后端或适配层的期待显著增加。
- **自动化与效率**：用户（尤其是 Power User）强烈需要 "YOLO Mode" 或批量自动批准权限的功能，以减少自动化流程中的人为阻断。
- **会话管理增强**：原生会话目标管理（`/goal`）的需求反映出用户希望从“对话”转向“任务导向”的生命周期管理。
- **国产模型适配**：讯飞云 和 MiniMax 等国产模型的错误重试、缓存机制等适配问题逐渐增多，显示用户群体对本地化模型服务的依赖加深。

## 6. 开发者关注点

- **性能与稳定性回归**：近期版本的高 CPU 占用问题已成为开发者最关心的痛点，影响了多会话并发体验。
- **Web/UI 体验一致性**：Web 端功能缺失（如 Terminal 按钮）和跨平台路径限制（Windows）是影响日常使用的主要 Bug 来源。
- **配置与兼容性**：V1/V2 配置迁移、模型 API 兼容性（如 Cerebras, Opus 4.8）以及文件编码问题（Windows Bash）是开发者在配置环境时遇到的主要阻碍。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 (2026-06-11)

## 1. 今日速览
项目迎来重大品牌升级，正式从 `DeepSeek TUI` 更名为 **CodeWhale**，并发布 v0.8.57 版本确立新包名与命令规范。社区重心已转向 v0.8.58 的架构重构，重点解除对 DeepSeek 模型的硬编码依赖，并新增原生 Anthropic API 适配。开发者需注意旧版 npm 包已停止维护，请尽快参照迁移文档升级。

## 2. 版本发布
- **[v0.8.57](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.57)**
  - **品牌重定义**：正式确立 `CodeWhale` 为规范的项目名、命令行工具名及 npm 包名。
  - **迁移提示**：旧版 `deepseek-tui` npm 包已废弃，v0.8.x 用户需参照 `docs/REBRAND.md` 进行迁移。
- **[v0.8.56](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.56)**
  - **社区丰收版**：包含本地化支持、Provider 生态扩展、Prefix-cache 稳定性修复等内容。

## 3. 社区热点 Issues
以下筛选出 10 个最具代表性的议题，涵盖迁移痛点、架构优化与功能请求：

1.  **[Config Paths Fragmented Across OS (Issue #2369)](https://github.com/Hmbown/CodeWhale/issues/2369)**
    - **热度**：评论数最高 (6 条)。
    - **要点**：用户反馈配置文件在不同 OS 及 Cygwin 环境下路径解析混乱，且存在静默迁移 Bug。这直接影响了升级体验，是当前迁移过程中的主要阻碍。
2.  **[Provider fallback chain request (Issue #2574)](https://github.com/Hmbown/CodeWhale/issues/2574)**
    - **要点**：社区强烈建议支持 Provider 故障自动转移（Fallback）。当主 Provider 出现 401/429 错误时，希望能自动切换至配置的备用 Provider，以提升自动化任务的鲁棒性。
3.  **[SSE Multi-agent timeout on Windows (Issue #1679)](https://github.com/Hmbown/CodeWhale/issues/1679)**
    - **要点**：Windows 11 环境下多智能体并行执行仍存在 45s 超时及 UI 错乱问题，迫使任务降级为串行执行，影响执行效率。
4.  **[Un-hardcode DeepSeek from auto-router (Issue #3018)](https://github.com/Hmbown/CodeWhale/issues/3018)**
    - **要点**：目前自动路由强制使用 DeepSeek 模型 ID，导致在其他 Provider（如 OpenAI, Ollama）上运行报错。这是实现“全模型支持”目标的关键痛点。
5.  **[Fix rebrand update path (Issue #2960)](https://github.com/Hmbown/CodeWhale/issues/2960)**
    - **要点**：旧版 `deepseek update` 命令无法平滑升级到 `codewhale`，缺乏清晰的迁移指引，导致用户更新受阻。
6.  **[Remote workbench setup (Issue #2964)](https://github.com/Hmbown/CodeWhale/issues/2964)**
    - **要点**：官方计划推出针对海外用户的 DigitalOcean + Telegram 远程工作台搭建文档，实现手机端控制云端开发环境。
7.  **[Dynamic API key fetching (Issue #3004)](https://github.com/Hmbown/CodeWhale/issues/3004)**
    - **要点**：用户希望 `api_key` 支持通过脚本动态获取，而非明文存储在配置文件中，以提升安全性和兼容性（如兼容 KeePassXC）。
8.  **[Native Anthropic Messages API adapter (Issue #3014)](https://github.com/Hmbown/CodeWhale/issues/3014)**
    - **要点**：旨在支持 Anthropic 原生 API（包括 `cache_control`, `thinking` blocks），摆脱对 OpenAI 兼容层代理的依赖，提升 Claude 模型的使用体验。
9.  **[Hooks v2 proposal (Issue #3026)](https://github.com/Hmbown/CodeWhale/issues/3026)**
    - **要点**：提议增强 Hook 系统，支持 JSON 格式的决策契约（deny/allow/ask）及全局匹配器，为模型行为提供更精细的控制层。
10. **[Ollama agent stops prematurely (Issue #2989)](https://github.com/Hmbown/CodeWhale/issues/2989)**
    - **要点**：使用 Ollama + Qwen 模型时，Agent 在任务未完成时错误地标记为 "completed"，这是非 DeepSeek 模型适配中的典型问题。

## 4. 重要 PR 进展
以下是正在进行中的关键代码合并请求：

1.  **[feat(client): native Anthropic Messages API adapter (#3054)](https://github.com/Hmbown/CodeWhale/pull/3054)**
    - 新增 Anthropic 原生客户端支持，实现对 Claude 模型特性的完整兼容（如 Thinking blocks）。
2.  **[feat(voice): add /voice slash command (#3051)](https://github.com/Hmbown/CodeWhale/pull/3051)**
    - 新增语音输入功能，通过 `/voice` 命令调用，复用当前 Provider 的 API 进行语音转文字。
3.  **[fix(subagent): un-hardcode DeepSeek from model validation (#3045)](https://github.com/Hmbown/CodeWhale/pull/3045)**
    - 解除子智能体对 DeepSeek 模型 ID 的硬编码校验，允许使用任意 Provider 的模型 ID。
4.  **[feat(hooks): JSON decision contract (#3049)](https://github.com/Hmbown/CodeWhale/pull/3049)**
    - 实现 Hooks v2 协议，支持通过 JSON 动态修改输入和上下文，大幅增强扩展性。
5.  **[docs: add Upgrading from deepseek-tui section (#3053)](https://github.com/Hmbown/CodeWhale/pull/3053)**
    - 在 README 中添加迁移指南，帮助旧版用户平滑升级。
6.  **[fix(reasoning): add Moonshot/Kimi support (#3046)](https://github.com/Hmbown/CodeWhale/pull/3046)**
    - 修复 Moonshot/Kimi 模型的推理内容解析，使其思考过程能正确渲染为 Thinking blocks。
7.  **[fix(tui): throttle AgentProgress redraws (#3035)](https://github.com/Hmbown/CodeWhale/pull/3035)**
    - 修复多智能体并发时的 UI 渲染性能问题，防止因重绘过于频繁导致界面卡顿。
8.  **[feat(config): implement verbosity settings (#3052)](https://github.com/Hmbown/CodeWhale/pull/3052)**
    - 新增 `verbosity` 配置项（normal/concise），减少非交互模式下的冗余日志输出。
9.  **[feat(tui): OSC 8 out-of-band hyperlink infrastructure (#3039)](https://github.com/Hmbown/CodeWhale/pull/3039)**
    - 引入 OSC 8 超链接基础设施，增强终端内的交互体验，使链接可点击。
10. **[refs(#2264): Phase 4 — replace Session.messages with AppendLog (#2579)](https://github.com/Hmbown/CodeWhale/pull/2579)**
    - 核心架构重构，将会话消息存储替换为 Append-only Log，旨在提升大规模会话的性能。

## 5. 功能需求趋势
从近期 Issue 与 PR 活动来看，社区关注点集中在以下方向：
-   **模型无关性**：项目正加速剥离 DeepSeek 特有的硬编码逻辑，转向支持 Anthropic、OpenAI、Ollama 等多种模型的原生特性。
-   **远程与自动化**：通过 Telegram 控制远程 Droplet、支持 Headless Exec 模式及 Agent 自动化任务成为核心开发重点。
-   **安全与配置灵活性**：动态 API Key 获取、Provider 故障自动转移、以及更精细的 Hook 控制系统需求强烈。

## 6. 开发者关注点
-   **迁移成本**：品牌更名带来了配置路径混乱、更新通道断裂等问题，开发者需仔细检查旧版配置文件路径（如 `Application Support/deepseek`），并参照新的安装文档切换包名。
-   **多模型稳定性**：在非 DeepSeek 模型（如 Ollama/Qwen, Moonshot）下，子智能体超时、提前终止任务等 Bug 依然频发，建议在生产环境谨慎使用多智能体模式。
-   **错误提示优化**：当前的错误提示（如 Provider 不支持 TUI 时的提示）对用户不够友好，缺乏恢复指引，这是下一个版本改进的重点。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*