# AI CLI 工具社区动态日报 2026-07-08

> 生成时间: 2026-07-08 02:53 UTC | 覆盖工具: 8 个

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

# AI CLI 工具生态横向对比分析报告 (2026-07-08)

## 1. 生态全景
当前 AI CLI 工具生态正处于从"单一指令执行"向"代理操作系统"演进的关键过渡期。各主流工具竞相重构底层架构（如 Codex 的托管运行时、OpenCode 的 V2 架构），以解决会话持久化、多任务并行和资源隔离等核心痛点。然而，随着功能复杂度的提升，**稳定性（TUI 冻结、内存泄漏）与成本控制（Token 消耗激增）成为制约用户体验的两大瓶颈**，Windows 平台的兼容性顽疾也仍是普遍性挑战。

## 2. 各工具活跃度对比

| 工具名称 | 今日重点 Issue 数 | 今日重点 PR 数 | 版本动态 | 核心关键词 |
| :--- | :---: | :---: | :--- | :--- |
| **Claude Code** | 10+ | 2 | **v2.1.204** (严重回归) | 会话冻结、Token 消耗激增、计费争议 |
| **OpenAI Codex** | 10+ | 10+ | **v0.143.0** | 托管架构迁移、推理 Token 异常、内存泄漏 |
| **Gemini CLI** | 10+ | 10+ | 无发布 | 账户权限识别错误、代码误删、安全修复 |
| **GitHub Copilot CLI** | 10+ | 0 | **v1.0.69** | 沙箱策略、插件系统、工作流兼容性 |
| **Kimi Code CLI** | 1 | 0 | 无发布 | Figma MCP 集成 (功能请求) |
| **OpenCode** | 10+ | 10+ | **v1.17.15** | V2 架构重构、内存泄漏排查、国际化 |
| **Qwen Code** | 10+ | 10+ | **v0.19.7** | 多工作区架构 (RFC)、Fleet View、Token 优化 |
| **DeepSeek TUI** | 10+ | 10+ | **v0.8.67** (品牌重塑) | 稳定性修复、Windows IME、子代理编排 |

> *注：Issue/PR 数量基于日报中列出的 Top 热点条目统计。*

## 3. 共同关注的功能方向

### 3.1 上下文管理与成本控制
*   **涉及工具**：Claude Code, OpenAI Codex, Qwen Code, Gemini CLI。
*   **具体诉求**：社区对 Token 消耗的透明度和优化达到了焦虑级别。Claude Code 用户报告消耗激增 3-5 倍；OpenAI Codex 面临 GPT-5.5 推理 Token 聚集导致的降级；Qwen Code 则在优化 `/review` 技能的开销。用户迫切需要更精细的上下文裁剪策略（如动态加载 AGENTS.md）以降低成本。

### 3.2 架构重构与会话持久化
*   **涉及工具**：OpenAI Codex, OpenCode, Qwen Code。
*   **具体诉求**：工具正在经历"操作系统化"的重构。Codex 将代码模式迁移至托管运行时；Qwen Code 讨论"单守护进程多工作区"架构；OpenCode 全力投入 V2 迁移以解决会话恢复和插件生命周期问题。这表明**CLI 正从无状态工具转变为有状态的常驻服务**。

### 3.3 Windows 平台兼容性
*   **涉及工具**：Claude Code, OpenAI Codex, DeepSeek TUI, OpenCode。
*   **具体诉求**：Windows 几乎是所有工具的"阿喀琉斯之踵"。Claude Code 出现终端冻结；Codex 遭遇 MCP 进程池内存泄漏；DeepSeek TUI 存在严重的 IME 输入法死锁；OpenCode 遇到退出即关闭终端的问题。跨平台终端交互的稳定性是共同的技术债。

### 3.4 扩展性与 MCP 生态
*   **涉及工具**：GitHub Copilot CLI, OpenAI Codex, Kimi Code CLI。
*   **具体诉求**：插件系统成为标配。Copilot 新增插件仪表盘；Codex 默认启用远程插件；Kimi 用户呼吁 Figma MCP 支持。开发者希望通过标准协议（MCP）打通设计、文档和企业内部系统的数据孤岛。

## 4. 差异化定位分析

*   **Claude Code**：**"最强但也最傲娇"的领跑者**。依托模型能力具备最强代码生成潜力，但当前受困于严重的回归 Bug 和不透明的计费策略，安全过滤器的误杀率也较高，适合对能力要求极高但能容忍偶发故障的早期采用者。
*   **OpenAI Codex**：**"工程化架构"的激进变革者**。正在通过 Rust 重写和托管运行时解决底层稳定性问题，技术上最激进，但对 GPT-5.5 新模型的适配调试尚不成熟，适合追求底层控制权和架构先进性的极客开发者。
*   **GitHub Copilot CLI**：**"企业级安全"的稳健派**。聚焦于沙箱策略、权限控制和 BYOK（自带密钥），虽然功能迭代较慢（如 Hook 机制不如 Claude 丰富），但在合规性和 IDE 集成度上具有天然优势，适合企业标准化开发环境。
*   **Qwen Code & DeepSeek TUI**：**"高性价比与自主可控"的开源力量**。Qwen Code 侧重多任务架构和企业 IM 集成；DeepSeek (CodeWhale) 侧重本地自主执行。它们在 Token 成本和私有化部署上具有优势，吸引了关注成本和隐私的开发者。
*   **Gemini CLI**：**"追赶中的挑战者"**。目前处于修复基础可靠性（如账户权限、代码误删）的阶段，"Caretaker" 自动化系统显示了其在自动化运维上的潜力，但核心体验仍需打磨。

## 5. 社区热度与成熟度

*   **最高热度**：**Claude Code**（回归 Bug 与计费争议）与 **OpenAI Codex**（新模型推理问题）占据了社区讨论的"愤怒值"高点。
*   **最快迭代**：**OpenCode** 与 **Qwen Code**。两者均有大量架构级 PR 合并，显示出开源社区活跃的贡献节奏，正快速补齐企业级特性（如多会话管理、内存持久化）。
*   **相对沉寂**：**Kimi Code CLI**。今日动态极少，显示出该工具可能处于功能稳定期或战略调整期。

## 6. 值得关注的趋势信号

### 信号一：从"工具执行"转向"资源调度"
日报中频繁出现的"守护进程"、"托管运行时"、"多工作区支持"、"Fleet View"等关键词表明，CLI 工具不再仅仅是发送 Prompt 的客户端，而是正在演变为**本地开发环境的资源调度器**。开发者需要关注工具对内存、进程和网络资源的占用情况。

### 信号二：Token 消耗已成为生产级痛点
多个工具社区同时反馈 Token 消耗激增或计算逻辑不透明，这标志着 AI 编程已进入"精算时代"。**成本控制将成为选择工具的核心指标**。建议开发团队关注 Qwen Code 等工具在 Token 优化上的策略（如动态上下文加载），并警惕新模型（如 GPT-5.5）潜在的隐性推理成本。

### 信号三：Windows 仍是跨平台开发的"雷区"
几乎所有工具都在 Windows 平台遭遇了特定问题（尤其是终端渲染和输入法交互）。对于**全栈或需要在 Windows 环境开发的团队**，建议优先测试 DeepSeek TUI 或 Qwen Code 等对 Windows 有针对性修复的工具，或在 WSL2 环境下运行以规避原生兼容性问题。

### 信号四：安全与自动化在博弈中升级
Claude Code 的安全过滤器误报与 Copilot CLI 的沙箱策略优化形成了鲜明对比。行业趋势是**从"一刀切"的安全拦截转向"可配置"的权限边界**。开发者在选型时应考察工具是否提供了精细的权限控制（如 Codex 的 Hook 对等、Copilot 的沙箱绕过），以满足安全合规与自动化效率的双重需求。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告 (2026-07-08)

基于 `anthropics/skills` 官方仓库数据，本期分析重点关注社区对 Skills 可靠性、跨平台兼容性及企业级安全需求的深度讨论。

---

## 1. 热门 Skills 排行

以下 Skills 在近期引发了较高的技术讨论热度，主要集中在工具链修复与核心功能增强。

1.  **[PR #1298] fix(skill-creator): run_eval.py recall=0% 根本性修复**
    *   **功能**：修复了 `run_eval.py` 在所有测试中召回率报告为 0% 的严重 Bug，涉及 Windows 流读取、触发检测及并行工作线程问题。
    *   **热点**：该问题导致 Skill 描述优化循环失效（Issue #556 有 10+ 独立复现），是当前 Skill 开发工具链中最关键的功能性修复。
    *   **状态**：[OPEN]
    *   **链接**：[anthropics/skills PR #1298](https://github.com/anthropics/skills/pull/1298)

2.  **[PR #514] Add document-typography skill**
    *   **功能**：解决 AI 生成文档中的排版问题（孤行、寡行、编号错位）。
    *   **热点**：直击用户痛点，弥补了 Claude 生成文档时常被忽视的视觉格式缺陷，具有较高的普适价值。
    *   **状态**：[OPEN]
    *   **链接**：[anthropics/skills PR #514](https://github.com/anthropics/skills/pull/514)

3.  **[PR #1367] feat: add self-audit — 四维推理质量门控**
    *   **功能**：在 AI 输出前进行自审计，包含机械验证与四维推理，确保文件存在性与逻辑一致性。
    *   **热点**：作为元技能，它试图解决“AI 幻觉”问题，提升生成结果的交付可信度，是社区对高质量输出的探索方向。
    *   **状态**：[OPEN]
    *   **链接**：[anthropics/skills PR #1367](https://github.com/anthropics/skills/pull/1367)

4.  **[PR #486] Add ODT skill — OpenDocument 支持**
    *   **功能**：支持创建、填充及解析 ODT/ODS 文件，填补开源标准文档格式的处理空白。
    *   **热点**：响应了企业级用户对非微软生态文档格式的需求。
    *   **状态**：[OPEN]
    *   **链接**：[anthropics/skills PR #486](https://github.com/anthropics/skills/pull/486)

5.  **[PR #83] Add skill-quality-analyzer & skill-security-analyzer**
    *   **功能**：提供 Skill 质量分析（结构与文档）与安全性扫描，防止恶意 Skill 注入。
    *   **热点**：随着 Skill 数量增加，自动化质量与安全检测成为刚需。
    *   **状态**：[OPEN]
    *   **链接**：[anthropics/skills PR #83](https://github.com/anthropics/skills/pull/83)

---

## 2. 社区需求趋势

从 Issues 讨论中提炼出以下核心诉求：

*   **安全信任边界重构 (Issue #492)**
    社区强烈关注社区贡献的 Skills 混淆在官方 `anthropic/` 命名空间下的问题。用户呼吁建立明确的签名机制或隔离命名空间，以防止权限滥用和钓鱼攻击（34 条评论）。

*   **企业级协作与共享 (Issue #228)**
    用户希望支持组织内部 Skill 库共享，替代当前低效的手动分发方式（14 条评论）。

*   **跨平台兼容性 (Issue #1061, #556)**
    Windows 平台的兼容性成为众矢之的。`run_eval.py` 在 Windows 上的编码错误、子进程调用失败严重阻碍了开发者在 Win 环境下的 Skill 开发流程。

*   **Agent 治理与内存优化 (Issue #1329, #412)**
    针对 Long-running Agent 的治理模式（审计、威胁检测）及内存压缩技能（Compact-memory）需求浮现，显示 Skill 正从单一任务向复杂 Agent 系统演进。

---

## 3. 高潜力待合并 Skills

以下 PR 解决了阻塞性问题或提出了高价值功能，且近期有更新，具备较高合并潜力：

*   **[PR #1298] fix(skill-creator): run_eval.py 修复**
    解决了 Skill 创建工具链的核心故障，关联 Issue #556，是恢复社区 Skill 开发能力的关键补丁。
    *   **链接**：[anthropics/skills PR #1298](https://github.com/anthropics/skills/pull/1298)

*   **[PR #1050] & [PR #1099] skill-creator Windows 兼容性修复**
    两个 PR 均致力于解决 Windows 下子进程与编码崩溃问题。这是社区长期投诉的痛点，合并需求迫切。
    *   **链接**：[PR #1050](https://github.com/anthropics/skills/pull/1050) | [PR #1099](https://github.com/anthropics/skills/pull/1099)

*   **[PR #541] fix(docx): 修复文档损坏 Bug**
    修复了特定场景下（书签 ID 冲突）导致 DOCX 文件损坏的具体 Bug，属于高确定性的安全修复。
    *   **链接**：[anthropics/skills PR #541](https://github.com/anthropics/skills/pull/541)

---

## 4. Skills 生态洞察

**当前社区最集中的诉求是：从“功能可用”向“工程化可靠”转变，迫切需要解决跨平台兼容性、安全信任边界及工具链稳定性问题。**

---

# 2026-07-08 Claude Code 社区动态日报

## 1. 今日速览
Claude Code 今日发布 **v2.1.204** 版本，主要修复了无头会话中 Hook 事件流中断导致 Worker 被回收的关键问题。然而，新版本似乎引入了严重的回归 Bug，导致 `--resume` 功能在多平台（Windows/macOS/WSL）下出现终端冻结或无响应。此外，社区关于 Max Plan Token 消耗激增的讨论持续发酵，成本控制与计费透明度仍是用户核心痛点。

## 2. 版本发布
**最新版本：v2.1.204** ([Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.204))
*   **关键修复**：解决了无头会话期间 `SessionStart` hooks 不流式传输事件的问题，防止远程 worker 因空闲被错误回收。
*   **注意**：根据社区最新反馈，此版本可能存在严重的 TUI 渲染/输入处理问题，建议关注后续补丁。

**上一版本：v2.1.203**
*   登录过期前增加警告提示。
*   手动权限模式下在页脚显示灰色 ⏸ 徽章。
*   增加会话额外工作目录的配置支持。

## 3. 社区热点 Issues (Top 10)

1.  **[严重回归] v2.1.204 导致会话恢复功能失效**
    *   **Issue**: [#75496](https://github.com/anthropics/claude-code/issues/75496), [#75521](https://github.com/anthropics/claude-code/issues/75521), [#75497](https://github.com/anthropics/claude-code/issues/75497)
    *   **摘要**: v2.1.204 发布后，社区密集反馈 `claude --resume` 和 `--continue` 指令出现严重问题。在 WSL2、macOS 和 Windows 平台上均出现 TUI 界面冻结、无法接收键盘输入或无法选择会话的情况，严重影响工作流。
    *   **重要性**: 新版本的严重回归，阻塞了核心的会话恢复功能。

2.  **[高热度] Max Plan Token 消耗异常激增 3-5 倍**
    *   **Issue**: [#41506](https://github.com/anthropics/claude-code/issues/41506)
    *   **摘要**: 自 3 月底以来，大量 Max Plan 用户报告在配置未变的情况下，Token 消耗量激增 3-5 倍，导致原有的额度不再够用。该问题已持续数月，评论数达 54 条，是目前社区最关注的成本问题。
    *   **重要性**: 影响核心付费用户的成本效益，涉及计费模型变更或潜在统计 Bug。

3.  **[安全隐患] 会话/缓存疑似在不同工作空间或账户间泄漏**
    *   **Issue**: [#74066](https://github.com/anthropics/claude-code/issues/74066)
    *   **摘要**: 用户报告在登录 Enterprise ZDR 工作空间时，Agent 突然表现出其他用户的行为（如构建 Minecraft 模型），怀疑存在会话或缓存隔离失效。
    *   **重要性**: 涉及企业级数据隔离与安全性，属于严重信任危机问题。

4.  **[平台缺陷] Windows 11 Cowork 功能持续不可用**
    *   **Issue**: [#47327](https://github.com/anthropics/claude-code/issues/47327)
    *   **摘要**: Windows 平台用户长期无法使用 Cowork 标签页，显示 "yukonSilver unsupported"，自 3 月起未得到有效解决。
    *   **重要性**: 核心协作功能在主流平台缺失。

5.  **[计费逻辑] Code Review 错误报告组织额度超限**
    *   **Issue**: [#39678](https://github.com/anthropics/claude-code/issues/39678)
    *   **摘要**: GitHub Code Review 功能错误地提示组织的超额消费限额已达标，而实际消费为 $0/$250，导致代码审查功能被误拦截。
    *   **重要性**: 影响集成开发工作流，属于计费逻辑误判。

6.  **[工具故障] 安全分类器 不可用阻塞工具执行**
    *   **Issue**: [#63819](https://github.com/anthropics/claude-code/issues/63819)
    *   **摘要**: 在 Auto 模式下，Opus 4.8 模型的安全分类器频繁报告 "temporarily unavailable"，导致 Bash/Write/Edit 等基础工具被阻断，仅能使用 Read。
    *   **重要性**: 核心编码能力受限，影响开发效率。

7.  **[误报拦截] 安全研究被安全过滤器误判拦截**
    *   **Issue**: [#75506](https://github.com/anthropics/claude-code/issues/75506)
    *   **摘要**: 用户进行合法的内存取证文档和工具开发时，被 Opus 4.8 安全过滤器误判为威胁并中断会话。
    *   **重要性**: 安全策略过于敏感，干扰合法开发工作。

8.  **[功能缺陷] VS Code 终端内文本选择复制失效**
    *   **Issue**: [#61021](https://github.com/anthropics/claude-code/issues/61021)
    *   **摘要**: 最近版本修改了 VS Code 终端的交互逻辑，导致在 Claude Code 运行时无法方便地选中文本复制，影响基础操作体验。

9.  **[逻辑冲突] Fable 5 安全校门拦截自身输出**
    *   **Issue**: [#75517](https://github.com/anthropics/claude-code/issues/75517)
    *   **摘要**: 用户反馈 Fable 5 的安全机制过于严格，甚至拦截了模型自己之前的输出内容，导致无法进行上下文重整，质疑设计逻辑。

10. **[MCP 问题] Zoho Books 连接器无法附加文件**
    *   **Issue**: [#75502](https://github.com/anthropics/claude-code/issues/75502)
    *   **摘要**: MCP 连接器在处理文件附件时参数传递错误，导致无法正常上传文件到销售订单。

## 4. 重要 PR 进展
过去 24 小时内仅更新了 2 个文档类 PR，无功能性代码更新：
*   **PR #73476**: 修正 README 中 "Github" 为 "GitHub" 的拼写错误。([链接](https://github.com/anthropics/claude-code/pull/73476))
*   **PR #75252**: 澄清插件 MCP 配置的作用域，区分插件打包配置与用户级配置。([链接](https://github.com/anthropics/claude-code/pull/75252))

## 5. 功能需求趋势
1.  **成本透明度与稳定性**：社区对 Token 消耗计算逻辑的不透明和异常激增表现出强烈焦虑，急需官方解释或修复计费统计逻辑。
2.  **TUI/终端交互健壮性**：随着 v2.1.204 的发布，`--resume` 和 TUI 渲染的稳定性成为新焦点，尤其是在 WSL 和 macOS 环境下的兼容性问题频发。
3.  **安全策略精准度**：开发者频繁反馈安全过滤器误报，特别是在安全研究、逆向工程等场景，呼吁调整威胁模型以减少误杀。

## 6. 开发者关注点
*   **版本升级风险**：开发者应警惕 v2.1.204 版本在 `--resume` 场景下的潜在冻结风险，生产环境升级建议暂缓或密切观察。
*   **远程/无头模式改进**：v2.1.204 针对 headless sessions 的修复对 CI/CD 场景是利好，但需验证是否引入了新副作用。
*   **跨平台一致性**：Windows 平台的诸多限制（如 Cowork、特定工具不可用）仍是长期痛点，开发团队对 Win 平台的投入产出比似乎较低。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-07-08)

## 1. 今日速览
OpenAI Codex 今日发布 **v0.143.0 正式版**，默认启用远程插件并支持系统代理路由。社区热度最高的话题集中在 **GPT-5.5 模型推理 Token 聚集**导致的性能降级问题，以及 Windows 平台下 MCP 进程池内存泄漏等稳定性问题。底层架构方面，Codex 正在将代码模式迁移至托管运行时，并重构线程生命周期管理。

## 2. 版本发布
**rust-v0.143.0**
- **默认启用远程插件**：提供了更丰富的目录行、npm marketplace 源支持，并支持显示远程/本地版本差异。
- **系统代理支持**：Codex 现可将认证和 Responses API 流量通过 macOS 和 Windows 系统代理（支持 PAC 配置）进行路由。
- 链接：[openai/codex Release v0.143.0](https://github.com/openai/codex/releases/tag/rust-v0.143.0)

## 3. 社区热点 Issues (Top 10)

1.  **[模型行为] GPT-5.5 推理 Token 异常聚集导致性能降级** (#30364)
    - **摘要**：社区发现 `gpt-5.5` 在复杂任务中，`reasoning_output_tokens` 经常固定在 516、1034、1552 等数值，疑似模型特定行为导致推理质量下降。
    - **反响**：评论数达 156 条，点赞 252，是目前最受关注的问题，开发者正在深入分析其与 Reasoning Token 限制的关联。
    - 链接：[openai/codex Issue #30364](https://github.com/openai/codex/issues/30364)

2.  **[稳定性] Windows Desktop MCP 进程池内存泄漏** (#31499)
    - **摘要**：Windows 版 Codex 在运行 `app-server` 时重复生成 MCP stdio 进程（产生上百个 node.exe），导致占用 13GB+ 内存且无法回收。
    - **重要性**：严重影响 Windows 用户系统性能，可能与近期更新有关。
    - 链接：[openai/codex Issue #31499](https://github.com/openai/codex/issues/31499)

3.  **[功能请求] 实现 Claude Code 完整 Hook 对等** (#21753)
    - **摘要**：用户请求 Codex 提供与 Claude Code 相当的完整 Hook 机制（29+），以实现更精细的生命周期自动化控制。
    - **反响**：获 19 个点赞，反映了高级用户对自动化扩展能力的强烈需求。
    - 链接：[openai/codex Issue #21753](https://github.com/openai/codex/issues/21753)

4.  **[功能请求] 动态加载嵌套 AGENTS.md** (#12115)
    - **摘要**：请求支持像 Claude Code 一样，在访问子目录时动态加载其中的 `AGENTS.md` 文件，而非一次性加载所有上下文。
    - **反响**：获 83 个点赞，上下文管理是目前开发者最关心的功能方向之一。
    - 链接：[openai/codex Issue #12115](https://github.com/openai/codex/issues/12115)

5.  **[应用] App 频繁重连问题** (#14297)
    - **摘要**：用户反馈新版 Codex App 在回复前需执行 5 次 "Reconnecting..." 才能响应，严重影响体验。
    - **重要性**：连接稳定性问题依然是基础体验的痛点。
    - 链接：[openai/codex Issue #14297](https://github.com/openai/codex/issues/14297)

6.  **[集成] Meta Ads MCP OAuth 登录失败** (#24103)
    - **摘要**：官方 Meta Ads MCP 在进行 OAuth 登录时报 `invalid_client_metadata` 错误，导致集成不可用。
    - **重要性**：第三方 MCP 集成的认证问题阻碍了企业用户的使用。
    - 链接：[openai/codex Issue #24103](https://github.com/openai/codex/issues/24103)

7.  **[性能] VS Code 插件 Linux 下 inotify 资源耗尽** (#23574)
    - **摘要**：在大型工作区中，VS Code Codex 扩展创建约 100 万个 inotify watches，超出系统限制，导致监控失效。
    - **重要性**：文件监控机制在大规模项目中的性能瓶颈。
    - 链接：[openai/codex Issue #23574](https://github.com/openai/codex/issues/23574)

8.  **[平台] Mac 锁屏状态下 Computer Use 失败** (#24086)
    - **摘要**：Mac mini M4 在锁屏状态下运行 Locked Computer Use 功能时报 `cgWindowNotFound` 错误，解锁后正常。
    - **重要性**：Computer Use 功能在自动化场景下的关键 Bug。
    - 链接：[openai/codex Issue #24086](https://github.com/openai/codex/issues/24086)

9.  **[沙箱] Windows 沙箱环境下的 "Filename too long" 错误** (#31511)
    - **摘要**：在受限权限配置下，`apply_patch` 和 `view_image` 报 "os error 206"（文件名过长），实际路径仅 60-70 字符。
    - **重要性**：Windows 沙箱权限校验逻辑疑似存在误判。
    - 链接：[openai/codex Issue #31511](https://github.com/openai/codex/issues/31511)

10. **[数据] 会话历史在重启后丢失** (#25397)
    - **摘要**：用户频繁遇到重启 Codex App 后会话列表消失的问题。
    - **重要性**：数据持久化稳定性问题，影响用户信任度。
    - 链接：[openai/codex Issue #25397](https://github.com/openai/codex/issues/25397)

## 4. 重要 PR 进展 (Top 10)

1.  **[架构] code-mode: 默认切换至托管模式** (#31500)
    - **内容**：将 `code_mode_host` 提升至稳定版并设为默认开启，同时保留降级开关。这意味着 Codex 核心逻辑将更多在独立进程中运行，提升稳定性。
    - 链接：[openai/codex PR #31500](https://github.com/openai/codex/pull/31500)

2.  **[功能] 将插件命令迁移至 Skills** (#31482)
    - **内容**：将命令到技能的转换逻辑迁移至核心插件模块，解决依赖循环，增强插件原子化安装能力。
    - 链接：[openai/codex PR #31482](https://github.com/openai/codex/pull/31482)

3.  **[性能] 减少冗余文件系统调用** (#31514)
    - **内容**：优化文件写入逻辑，避免重复打开临时文件；优化目录分类逻辑，减少重复的 `stat` 调用。预计将显著降低 CPU 和 I/O 开销。
    - 链接：[openai/codex PR #31514](https://github.com/openai/codex/pull/31514)

4.  **[功能] 向客户端返回 Web 搜索预览** (#31516, #31515)
    - **内容**：解析独立搜索接口的 URL、标题和摘要，并持久化到历史记录中，增强 Web 搜索功能的可视化和可追溯性。
    - 链接：[openai/codex PR #31516](https://github.com/openai/codex/pull/31516)

5.  **[兼容性] 支持 SQLite 禁用的降级模式** (#31509)
    - **内容**：允许在 `[features] sqlite = false` 配置下运行，适用于 NFS 等不支持本地数据库的环境，提供状态恢复的降级方案。
    - 链接：[openai/codex PR #31509](https://github.com/openai/codex/pull/31509)

6.  **[体验] 检测 pnpm 管理的安装** (#31503)
    - **内容**：修复了使用 pnpm 全局安装时，CLI 错误回退到 npm 逻辑的问题，使 `codex doctor` 和更新流程更准确。
    - 链接：[openai/codex PR #31503](https://github.com/openai/codex/pull/31503)

7.  **[诊断] 捕获工具搜索管道诊断信息** (#31466)
    - **内容**：替换旧的日志诊断方式，引入常驻的、有界的线程级工具搜索快照，便于排查工具调用问题。
    - 链接：[openai/codex PR #31466](https://github.com/openai/codex/pull/31466)

8.  **[底层] 线程生命周期序列化与原子化** (#31349, #31338)
    - **内容**：引入会话过渡锁，序列化 Turn 的开始、中止和结束操作；优化线程活动的原子性。这是近期底层并发重构的一部分，旨在解决竞态条件和崩溃问题。
    - 链接：[openai/codex PR #31349](https://github.com/openai/codex/pull/31349)

9.  **[扩展] 支持扩展拥有的 Turn Items** (#31283)
    - **内容**：新增 `codex-extension-items` crate，允许扩展定义自己的 `TurnItem` schema，解耦核心代码与扩展功能，支持如独立图像生成等场景。
    - 链接：[openai/codex PR #31283](https://github.com/openai/codex/pull/31283)

10. **[测试] 添加延迟执行服务器传输** (#31427)
    - **内容**：为宏基准测试提供模拟网络延迟的能力，无需依赖 Docker，增强远程执行场景的测试覆盖率。
    - 链接：[openai/codex PR #31427](https://github.com/openai/codex/pull/31427)

## 5. 功能需求趋势
- **上下文管理精细化**：开发者强烈呼吁支持动态加载子目录配置（如 `AGENTS.md`），以适应大型项目，减少无效上下文干扰。
- **Hook 与自动化**：社区期望 Codex 能达到竞品 的 Hook 覆盖率，以便在更多生命周期节点注入自定义逻辑。
- **跨平台稳定性**：Windows 平台的沙箱机制、内存占用和 UI 适配问题依然是反馈的高发区。

## 6. 开发者关注点
- **模型推理异常**：GPT-5.5 的 Token 聚集现象引发了对底层模型推理机制的担忧，开发者担心这是否会影响复杂任务的可靠性。
- **本地资源占用**：inotify 监控数量过多、MCP 进程池泄漏等问题反映出 Codex 在本地资源管理上仍有优化空间。
- **插件与 MCP 生态**：远程插件默认启用标志着生态扩张，但随之而来的 OAuth 兼容性和进程管理问题成为新的调试焦点。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-07-08)

## 1. 今日速览
今日 Gemini CLI 无新版本发布，社区关注点主要集中在**账户订阅识别异常**（Pro/Ultra 账户被误判为 Standard）以及**智能体执行效率与稳定性**（如项目扫描过慢、上下文泄露、代码误删）上。后台开发方面，团队正大力投入 "Caretaker" 自动化分类系统的建设，并修复了多个涉及文件损坏和 OAuth 安全的关键 Bug。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues (Top 10)

1.  **[账户权限] Pro 账户被识别为 Standard 层级**
    *   **链接**: [#23973](https://github.com/google-gemini/gemini-cli/issues/23973)
    *   **看点**: 这是一个高优先级问题，用户反映拥有 Google AI Pro 订阅却无法使用 CLI，日志显示为 standard-tier。该问题涉及账户权限校验逻辑，影响付费用户体验，目前仍需重新测试。

2.  **[核心性能] 过度的项目扫描导致简单代码修补失败**
    *   **链接**: [#25672](https://github.com/google-gemini/gemini-cli/issues/25672)
    *   **看点**: 用户在修改 Go 代码时，CLI 强制扫描整个工作区和标准库，导致操作缓慢甚至失败。这反映了 CLI 在大规模项目中的上下文管理策略存在问题，亟需优化增量分析能力。

3.  **[数据安全] Gemini CLI 仍然会删除部分代码 (March 2026)**
    *   **链接**: [#23497](https://github.com/google-gemini/gemini-cli/issues/23497)
    *   **看点**: 用户强烈反馈 CLI 在执行任务时会破坏或删除用户代码，认为这是不可接受的核心缺陷。此类可靠性问题严重打击开发者信任，需持续关注官方修复进展。

4.  **[认证登录] MacOS 及 WSL 上的凭证损坏与认证失败**
    *   **链接**: [#24835](https://github.com/google-gemini/gemini-cli/issues/24835) | [#23848](https://github.com/google-gemini/gemini-cli/issues/23848)
    *   **看点**: macOS Tahoe 和 Ubuntu (WSL) 用户频繁遭遇凭证损坏或无法通过 Google 账户认证的问题。作为阻断性 Bug，这直接影响了特定平台用户的入门体验。

5.  **[订阅识别] Google AI Ultra 订阅在 CLI OAuth 中未被识别**
    *   **链接**: [#24112](https://github.com/google-gemini/gemini-cli/issues/24112)
    *   **看点**: 类似于 Pro 账户问题，Ultra 订阅用户也遭遇了权限降级，只能使用 Flash 模型。这表明 CLI 的订阅校验模块可能存在系统性缺陷。

6.  **[智能体行为] “思考”卡死 15 小时与上下文泄露**
    *   **链接**: [#25667](https://github.com/google-gemini/gemini-cli/issues/25667) | [#25595](https://github.com/google-gemini/gemini-cli/issues/25595)
    *   **看点**: 智能体在执行任务时陷入无限循环或卡死，且存在子代理上下文泄露的问题。这暴露了 Agent 调度与资源管理机制的不稳定性。

7.  **[功能缺失] read_file 20MB 文件限制未记录在案**
    *   **链接**: [#19344](https://github.com/google-gemini/gemini-cli/issues/19344)
    *   **看点**: 文档缺失导致用户困惑，错误信息难以排查。完善的文档是提升开发者体验的关键一环。

8.  **[平台兼容] macOS Intel 启动崩溃 (sysctl ENOENT)**
    *   **链接**: [#24142](https://github.com/google-gemini/gemini-cli/issues/24142)
    *   **看点**: 在特定 Node.js 版本和 macOS Intel 架构下，CLI 启动即崩溃。这类环境兼容性问题影响了老旧设备用户的升级路径。

9.  **[功能建议] 在发送上下文前增加密钥扫描**
    *   **链接**: [#25837](https://github.com/google-gemini/gemini-cli/issues/25837)
    *   **看点**: 社区提出安全增强建议，希望在发送请求前自动检测并移除凭证和 PII，防止敏感信息泄露。这反映了企业级用户对安全性的高度关注。

10. **[网络体验] 使用 VPN 时访问极其缓慢**
    *   **链接**: [#24062](https://github.com/google-gemini/gemini-cli/issues/24062)
    *   **看点**: 用户反馈使用 VPN 时频繁遭遇 429 错误和延迟，关闭 VPN 后恢复正常。这可能与 API 的流量风控策略有关，影响了特定网络环境下的可用性。

## 4. 重要 PR 进展 (Top 10)

1.  **[关键修复] 修复 JSON 和 IPYNB 文件写入/替换损坏问题**
    *   **链接**: [#28223](https://github.com/google-gemini/gemini-cli/pull/28223)
    *   **内容**: 解决了 `write_file` 和 `replace` 工具破坏 Jupyter Notebook 和 JSON 文件的关键 Bug，通过绕过 LLM 的自动修正逻辑来确保文件完整性。

2.  **[核心修复] 修复历史记录中的思想泄露**
    *   **链接**: [#27971](https://github.com/google-gemini/gemini-cli/pull/27971)
    *   **内容**: 修复了模型的内部推理过程泄露到纯文本历史记录中，导致后续对话混乱或陷入死循环的问题。

3.  **[自动化] Caretaker Agent 分类系统基础建设**
    *   **链接**: [#28306](https://github.com/google-gemini/gemini-cli/pull/28306) | [#28307](https://github.com/google-gemini/gemini-cli/pull/28307)
    *   **内容**: 实现了基于 Cloud Run 的 Caretaker Triage Worker 主循环和 LLM 分类编排器，旨在自动化处理 Issue 分类和标签管理，提升仓库维护效率。

4.  **[安全修复] OAuth 元数据发现中的 SSRF 防护**
    *   **链接**: [#28112](https://github.com/google-gemini/gemini-cli/pull/28112)
    *   **内容**: 防止 OAuth 发现流程中因直接使用 MCP 服务器返回的 URL 而导致的服务端请求伪造 (SSRF) 漏洞。

5.  **[安全修复] OAuth 令牌交换期间的 Keep-Alive Socket 重用问题**
    *   **链接**: [#28103](https://github.com/google-gemini/gemini-cli/pull/28103)
    *   **内容**: 修复了 Node.js 安全补丁 (CVE-2026-48931) 引入的兼容性问题，解决 OAuth 登录时的 "Premature close" 错误。

6.  **[功能增强] 添加 Eval 覆盖率报告命令**
    *   **链接**: [#28169](https://github.com/google-gemini/gemini-cli/pull/28169)
    *   **内容**: 新增 `eval:coverage` 命令，用于报告内置工具的测试覆盖率，有助于提升代码质量监控。

7.  **[用户体验] 无 Code Assist 层级时显示明确消息**
    *   **链接**: [#28304](https://github.com/google-gemini/gemini-cli/pull/28304)
    *   **内容**: 优化 `/privacy` 命令的错误提示，避免向企业用户或无项目账户展示难以理解的后端原始错误信息。

8.  **[功能修复] 支持 settings.json 中的注释**
    *   **链接**: [#28219](https://github.com/google-gemini/gemini-cli/pull/28219)
    *   **内容**: 修复 CLI 父进程无法读取包含注释的 `settings.json` 文件的问题，提升了配置文件的容错性。

9.  **[UI 修复] 避免截断显示字符串时分割 Emoji**
    *   **链接**: [#28224](https://github.com/google-gemini/gemini-cli/pull/28224)
    *   **内容**: 修复了字符串截断逻辑在处理 UTF-16 代理对（如 Emoji）时产生的乱码问题，提升终端显示体验。

10. **[文档更新] 移除文档中危险的测试命令**
    *   **链接**: [#28244](https://github.com/google-gemini/gemini-cli/pull/28244)
    *   **内容**: 将策略引擎文档中的测试示例从 `rm -rf /` 修改为更安全的命令，防止用户误操作导致系统损坏。

## 5. 功能需求趋势

*   **账户与权限识别**: 社区对 Pro/Ultra 订阅识别失败的反馈强烈，显示出 CLI 在账户鉴权模块存在系统性缺陷，需尽快修复以保障付费权益。
*   **智能体执行效率**: "项目全量扫描"导致的性能瓶颈成为高频槽点，开发者迫切需要更智能的增量上下文加载机制。
*   **数据安全与合规**: 关于密钥扫描、代码误删、文件损坏的 Issue 频出，显示出企业级用户对工具可靠性和安全性的高度敏感。
*   **模型支持**: 开发者期待 CLI 尽快支持最新的 Gemini 3 系列模型。

## 6. 开发者关注点

*   **可靠性痛点**: 代码被误删、文件损坏是开发者最不能容忍的问题，此类 Issue 往往伴随较高的情绪化反馈。
*   **认证障碍**: WSL 和 macOS 上的认证问题阻碍了新用户上手，建议优先排查 Node.js 版本兼容性和凭证存储逻辑。
*   **性能优化**: 针对大型项目（如 Go 项目）的扫描策略亟需优化，目前的“暴力扫描”模式严重影响了日常开发效率。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-07-08)

你好！我是专注于 AI 开发工具的技术分析师。以下是根据 github.com/github/copilot-cli 最新数据生成的社区动态日报。

## 1. 今日速览
GitHub Copilot CLI 今日发布了 **v1.0.69** 版本，重点优化了沙箱策略的交互体验与插件管理功能，允许内置文件编辑在用户批准后绕过沙箱，并新增了插件仪表盘。社区方面，关于工作流兼容性、沙箱网络策略限制以及插件系统的稳定性成为讨论焦点，尤其是长期悬而未决的命令兼容性问题再次引发热议。

## 2. 版本发布
**v1.0.69 (含 v1.0.69-3 更新)** - 发布于 2026-07-07

本次更新主要集中在沙箱机制的细粒度控制与插件体验优化：
*   **沙箱策略优化**：调整了内置文件编辑的标签显示，从 `(sandboxed)` 改为 `(sandbox policy)`，表明其遵循尽力而为的策略而非操作系统级沙箱。
*   **绕过机制**：新增功能允许内置文件编辑在用户批准后绕过沙箱；`web_fetch` 工具现在遵循活动的沙箱网络策略，并支持在特定条件下通过用户批准进行一次性绕过。
*   **插件管理增强**：支持在不重启会话的情况下重新加载已安装的插件扩展；新增 `/plugins` 仪表盘用于管理插件。

## 3. 社区热点 Issues (Top 10)

以下筛选了 10 个最值得关注的 Issue，涵盖长期痛点、严重 Bug 及新功能需求：

1.  **[OPEN] Bring back the GitHub Copilot in the CLI commands to not break workflows (#53)**
    *   **重要性**：🔥 **社区最关注**（👍 75, 评论 37）。
    *   **内容**：用户反馈 CLI 命令的变更破坏了现有工作流，且长达 6 个月未收到官方明确回复，社区已开始自发开发替代版本（如 `shell-ai`）。这是目前反应最强烈的 Issue。
    *   **链接**：[github/copilot-cli Issue #53](https://github.com/github/copilot-cli/issues/53)

2.  **[OPEN] TUI hangs at 'Loading: N skills' on NFS/GPFS (#4053)**
    *   **重要性**：严重的基础设施兼容性问题。
    *   **内容**：在 Linux 环境下的 NFS/GPFS 文件系统上，当 MCP 配置包含异常退出的服务器时，CLI 会在加载技能阶段无限卡死（SIGCHLD 竞态条件），导致工具完全不可用。
    *   **链接**：[github/copilot-cli Issue #4053](https://github.com/github/copilot-cli/issues/4053)

3.  **[OPEN] web_fetch tool fails on all URLs in IPv4-only sandbox environments (#4041)**
    *   **重要性**：网络工具的核心功能缺陷。
    *   **内容**：在仅支持 IPv4 的沙箱环境中，`web_fetch` 工具对所有 URL（包括 `example.com`）均报错 "TypeError: fetch failed"。这直接影响了 Agent 联网获取信息的能力。
    *   **链接**：[github/copilot-cli Issue #4041](https://github.com/github/copilot-cli/issues/4041)

4.  **[OPEN] Skills not invocable as slash commands for repo-level plugins (#4048)**
    *   **重要性**：插件生态系统的一个关键 Bug。
    *   **内容**：通过仓库配置文件自动安装的插件，其技能无法作为斜杠命令（`/skill_name`）调用，也不在 `/skills` 列表中显示，严重阻碍了团队共享插件的使用。
    *   **链接**：[github/copilot-cli Issue #4048](https://github.com/github/copilot-cli/issues/4048)

5.  **[OPEN] /resume broken for all non-git sessions (#4054)**
    *   **重要性**：影响会话恢复功能。
    *   **内容**：在非 Git 仓库目录下创建的会话无法使用 `/resume` 恢复，因为恢复选择器强制要求 Git 仓库检查，导致逻辑死锁。
    *   **链接**：[github/copilot-cli Issue #4054](https://github.com/github/copilot-cli/issues/4054)

6.  **[OPEN] BYOK support for GitHub Copilot CLI in ACP server mode (#4037)**
    *   **重要性**：企业级功能需求。
    *   **内容**：JetBrains 等 IDE 正通过 ACP 协议集成 Copilot，但目前不支持自带模型（BYOK）。开发者呼吁在 ACP 服务器模式下支持自定义 LLM 模型。
    *   **链接**：[github/copilot-cli Issue #4037](https://github.com/github/copilot-cli/issues/4037)

7.  **[OPEN] Holding Ctrl+V pastes the same image repeatedly (#4045)**
    *   **重要性**：影响用户体验的 UI Bug。
    *   **内容**：在输入框粘贴图片时，长按 `Ctrl+V` 会触发无防抖的重复粘贴，短短几秒可能插入上百张相同图片。
    *   **链接**：[github/copilot-cli Issue #4045](https://github.com/github/copilot-cli/issues/4045)

8.  **[OPEN] explore tool hardcodes model to gpt-5.4-mini (#3954)**
    *   **重要性**：模型配置灵活性受限。
    *   **内容**：`explore` 工具目前硬编码使用 `gpt-5.4-mini` 模型，忽略了用户配置的自定义模型（如 DeepSeek），导致 API 调用失败。
    *   **链接**：[github/copilot-cli Issue #3954](https://github.com/github/copilot-cli/issues/3954)

9.  **[OPEN] Project-scoped extension canvases are declared but not routable (#4056)**
    *   **重要性**：插件开发深度问题。
    *   **内容**：项目级扩展创建的 Canvas 虽然已注册，但未添加到路由表中，导致 `open_canvas` 无法找到该画布，限制了插件界面的交互能力。
    *   **链接**：[github/copilot-cli Issue #4056](https://github.com/github/copilot-cli/issues/4056)

10. **[OPEN] ask_user tool should allow Ctrl-G for long freeform answers (#4050)**
    *   **重要性**：交互体验优化建议。
    *   **内容**：建议 `ask_user` 工具支持调用 `$EDITOR` 编辑器，以便用户输入多段落的长文本回复，解决当前输入框对长文本的限制。
    *   **链接**：[github/copilot-cli Issue #4050](https://github.com/github/copilot-cli/issues/4050)

## 4. 重要 PR 进展
过去 24 小时内无更新的 Pull Requests。

## 5. 功能需求趋势
从近期 Issues 分析，社区功能需求集中在以下方向：
*   **沙箱控制权**：开发者希望对沙箱有更灵活的控制，特别是在网络请求和文件编辑方面，希望能在安全与便利之间手动权衡。
*   **插件与扩展生态**：对插件的发现、管理（`/plugins`）、技能调用（斜杠命令）以及生命周期管理（重载、清理）提出了更高要求。
*   **模型灵活性**：BYOK（自带密钥/模型）需求强烈，尤其是企业集成场景；同时希望所有工具（如 `explore`）都能遵循用户的模型配置。
*   **会话与工作流连续性**：`/resume` 的健壮性、跨设备/跨会话的状态保持、以及与 Git 工作流的深度集成是开发者的核心痛点。

## 6. 开发者关注点
*   **稳定性与挂起问题**：多个 Issue 反映 CLI 在特定环境（NFS/GPFS、Windows、非 Git 目录）下会出现卡死、进程残留或功能失效，稳定性仍是首要关注点。
*   **MCP (Model Context Protocol) 集成**：MCP 服务器的连接、生命周期管理及工具调用错误是近期高频出现的 Bug 来源，表明该功能仍处于快速迭代期。
*   **UI/UX 细节**：从输入框随机字符、图片粘贴防抖到状态栏遮挡问题，开发者对终端界面的交互细节要求日益提高。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-07-08)

## 1. 今日速览
过去 24 小时内，Kimi Code CLI 项目代码库相对平静，无新版本发布及 Pull Request 更新。社区唯一的活跃动态集中在功能增强请求上，开发者对 Figma MCP（Model Context Protocol）的支持呼声较高，显示出对 Design-to-Code 工作流深度集成的强烈需求。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues
过去 24 小时内仅更新了 1 条 Issue，因其涉及重要的工作流集成方向，建议重点关注：

*   **[#1604 [enhancement] Figma MCP Support](https://github.com/MoonshotAI/kimi-cli/issues/1604)**
    *   **状态**: Open
    *   **摘要**: 作者 @maoxian-1 提议 Kimi CLI 支持 [Figma MCP](https://www.figma.com/mcp-catalog/)。
    *   **重要性**: 随着 MCP 协议在 AI 编码工具领域的普及，打通设计工具与代码生成之间的壁垒已成为提升开发效率的关键路径。Figma 作为主流设计工具，其 MCP 支持将允许 CLI 直接读取设计上下文，极大提升 UI 代码生成的准确率。目前该 Issue 已获得 2 个赞同，且有用户跟进讨论。

## 4. 重要 PR 进展
过去 24 小时内无活跃的 Pull Request 更新。

## 5. 功能需求趋势
基于近期的 Issue 动态，社区关注点呈现以下趋势：

*   **MCP 生态扩展**: 开发者不再满足于 CLI 仅作为代码生成工具，而是希望其成为连接开发链路的枢纽。从 Figma MCP 的请求可以看出，用户迫切需要将设计语境无缝导入编码环境。
*   **外部工具集成**: 社区倾向于通过标准协议（如 MCP）集成外部服务，而非孤立的功能迭代，这表明 Kimi CLI 正向“AI IDE 中枢”的角色演进。

## 6. 开发者关注点
*   **Design-to-Code 的实操性**: 开发者关注的痛点在于如何降低从设计稿到代码的转换成本。支持 Figma MCP 意味着减少了手动导出标注、手写样式的繁琐流程，是提升前端开发效率的核心诉求。
*   **新特性的准入门槛**: Issue 中提到 Figma MCP "需要预注册"，开发者希望工具层面能简化这一流程或提供官方适配，以降低新技术的接入难度。

---
*数据来源: github.com/MoonshotAI/kimi-cli | 分析时间: 2026-07-08*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-07-08)

## 1. 今日速览
OpenCode 今日发布了 **v1.17.15** 版本，重点优化了 Z.ai 上下文溢出的错误处理及配置读取的容错性。社区方面，**内存占用问题**成为关注焦点，官方发起了集中收集 Heap Snapshot 的呼吁；同时，**V2 架构迁移**工作持续推进，多项关于会话恢复、插件系统及 TUI 重构的 PR 正在积极审阅中。

## 2. 版本发布
**v1.17.15**
- **Core 修复**：
    - 改进了对 Z.ai 上下文窗口溢出错误的分类，使超大请求的失败模式更加明确 (贡献者: @fengjikui)。
    - 优化了配置文件读取逻辑，当配置目录不可用时处理更加优雅。
- **Desktop 改进**：
    - 恢复了模型选择器中的模型详情提示框 功能。

## 3. 社区热点 Issues
1.  **[OPEN] Memory Megathread** (#20695)
    - **关注理由**：社区当前最热点，评论数达 108 条。官方发现分散的内存问题报告，决定集中处理。明确指出 LLM 给出的内存优化建议通常无效，呼吁用户提交 Heap Snapshots 以协助排查底层泄漏问题。
    - 链接：anomalyco/opencode Issue #20695

2.  **[OPEN] Tool execution aborted/terminated** (#26063)
    - **关注理由**：本地模型支持痛点。用户在使用 LM Studio (Qwen3.6) 时遇到工具执行中断问题，反映了 OpenCode 与本地推理后端交互的稳定性挑战。
    - 链接：anomalyco/opencode Issue #26063

3.  **[OPEN] [tui, 2.0] Track TUI migration to @opencode-ai/client** (#34359)
    - **关注理由**：V2 架构迁移进度表。该 Issue 追踪了 TUI 从旧版 SDK 向新生成的 Promise client 迁移的过程，是 V2 发布前的关键路径。
    - 链接：anomalyco/opencode Issue #34359

4.  **[OPEN] [bug, core, 2.0] V2: first Location can expose an empty plugin generation** (#35556)
    - **关注理由**：V2 核心并发问题。涉及 `PluginSupervisor` 在初始化重载期间的竞态条件，可能导致首次请求观察到空插件，属于架构层面的重要缺陷。
    - 链接：anomalyco/opencode Issue #35556

5.  **[OPEN] [BUG] TUI prompt input fail on Enter** (#31217)
    - **关注理由**：影响中文用户体验。TUI 输入框在按 Enter 后文本消失但未提交，中英文输入法均受影响，属于交互层面的高频痛点。
    - 链接：anomalyco/opencode Issue #31217

6.  **[OPEN] /exit command closes parent terminal on Windows** (#35327)
    - **关注理由**：Windows 平台严重体验问题。`/exit` 命令意外触发了关闭整个父终端窗口的行为，影响了 Windows 用户的日常操作。
    - 链接：anomalyco/opencode Issue #35327

7.  **[OPEN] [2.0, gang-grill] V2: route progressive AGENTS.md through durable Instructions** (#34341)
    - **关注理由**：V2 功能设计讨论。关于如何在 V2 中持久化处理路径作用域内的 `AGENTS.md` 指令，直接关系到 Agent 的上下文感知能力。
    - 链接：anomalyco/opencode Issue #34341

8.  **[OPEN] [FEATURE]: i18n / Locale support (Portuguese and other languages)** (#35831)
    - **关注理由**：国际化需求。用户指出项目已有 i18n 基础设施，并正在完善葡萄牙语支持，显示了社区对多语言界面的迫切需求。
    - 链接：anomalyco/opencode Issue #35831

9.  **[OPEN] Code parts are blank in TUI on Centos 7** (#28656)
    - **关注理由**：老旧系统兼容性。在 CentOS 7 环境下 TUI 输出的代码块显示为空白，影响企业级老旧环境用户的使用。
    - 链接：anomalyco/opencode Issue #28656

10. **[OPEN] [Bug] Desktop v1.17.14 Provider.list() TypeError crash** (#35772)
    - **关注理由**：启动崩溃问题。Desktop 版本在启动时因无法读取 Provider 属性导致崩溃，属于严重的回归 Bug。
    - 链接：anomalyco/opencode Issue #35772

## 4. 重要 PR 进展
1.  **[OPEN] fix(core): resume sessions after restart** (#35820)
    - **内容**：实现了服务重启后会话的持久化恢复机制，确保中断的执行能够被序列化恢复，提升 V2 核心稳定性。
    - 链接：anomalyco/opencode PR #35820

2.  **[OPEN] feat(i18n): complete Portuguese (Brazil) translation for UI and app** (#35836)
    - **内容**：完善了 UI 和 App 端的巴西葡萄牙语翻译，填补了 100+ 缺失的翻译键值，显著提升了国际化程度。
    - 链接：anomalyco/opencode PR #35836

3.  **[OPEN] fix(cli): elect one managed daemon** (#35826)
    - **内容**：引入进程级锁机制解决多实例并发时的守护进程选举问题，防止服务注册冲突，是多实例运行的基础修复。
    - 链接：anomalyco/opencode PR #35826

4.  **[OPEN] fix(core): wait for plugin readiness** (#35755)
    - **内容**：在 V2 Session agent 解析前增加了插件就绪屏障，解决了因插件加载延迟导致的 "AgentNotFoundError" 问题。
    - 链接：anomalyco/opencode PR #35755

5.  **[OPEN] feat(core): implement models fallback** (#35188)
    - **内容**：新增 Agent 模型回退机制，允许为 Agent 指定备用模型，增强了服务的鲁棒性。
    - 链接：anomalyco/opencode PR #35188

6.  **[OPEN] fix(tool): decode webfetch bodies using declared charset via iconv-lite** (#35838)
    - **内容**：修复了 `webfetch` 工具仅使用 UTF-8 解码的问题，现在支持根据 Content-Type 声明的字符集（如 Windows-1252）正确解码。
    - 链接：anomalyco/opencode PR #35838

7.  **[OPEN] feat(core): make path-local instruction discovery durable** (#35497)
    - **内容**：重构了 V2 中 `AGENTS.md` 等指令的发现机制，从短暂的消息注入转变为持久的指令存储，防止因压缩导致的上下文丢失。
    - 链接：anomalyco/opencode PR #35497

8.  **[OPEN] fix(core): preserve AI SDK provider metadata** (#35812)
    - **内容**：修复了 AI SDK 适配层中 Provider 特定元数据丢失的问题，保留了推理签名等关键信息，对复杂链路调用至关重要。
    - 链接：anomalyco/opencode PR #35812

9.  **[OPEN] feat(app): add inline file browser tabs** (#35829)
    - **内容**：为 V2 审查面板添加了内联文件浏览、项目树和文件搜索功能，增强了 UI 的文件交互体验。
    - 链接：anomalyco/opencode PR #35829

10. **[OPEN] fix(core): refresh stale @latest npm package cache on load** (#35777)
    - **内容**：解决了插件系统缓存导致 `@latest` 版本插件无法更新的问题，现在会在加载时检查注册表更新。
    - 链接：anomalyco/opencode PR #35777

## 5. 功能需求趋势
- **内存优化与诊断**：随着 Memory Megathread 的发酵，社区对降低内存占用和提供更透明的内存诊断工具表现出强烈需求。
- **V2 架构稳定性**：当前开发重心明显向 V2 倾斜，集中在会话恢复、插件生命周期管理及错误处理健壮性上。
- **本地模型与 Provider 兼容性**：针对 LM Studio、Ollama 等本地模型 Provider 的兼容性修复和错误反馈依然是高频需求。
- **国际化 (i18n)**：多语言支持正在快速完善，葡萄牙语翻译的 PR 显示了社区驱动的本地化趋势。

## 6. 开发者关注点
- **插件开发体验**：开发者反馈 V2 插件 API 存在注册后不可见（Issue #33896）或元数据丢失（PR #35812）的问题，插件系统的稳定性和文档是当前痛点。
- **Windows 平台体验**：终端退出崩溃（Issue #35327）和 CLI 路径冲突（Issue #35839）等 Windows 平台特有问题影响了开发者体验。
- **配置管理一致性**：V2 与旧版在环境变量（如 `OPENCODE_CONFIG_DIR`）处理上的差异（Issue #32825）导致开发者困惑，期待统一的行为规范。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-07-08)

## 1. 今日速览
Qwen Code 今日发布了 **v0.19.7** 正式版，重点优化了 PR 门禁检测机制并完善了企业微信通道文档。社区热议焦点集中在架构层面，关于**单守护进程支持多工作区**的 RFC 讨论度极高，同时 Token 消耗优化和内存管理稳定性仍是开发者关注的核心痛点。功能层面，新增的 Fleet View（多会话管理）和 `/learn` 命令 PR 值得重点关注。

## 2. 版本发布
**v0.19.7** 已发布，主要更新如下：
*   **核心修复**：加强了 PR 门禁机制，增加了批量检测、问题存在性检查以及危险信号模式识别，提升代码合入安全性。
*   **文档更新**：在通道概览中添加了企业微信的集成文档。

## 3. 社区热点 Issues (Top 10)

1.  **[RFC] 单守护进程支持多工作区** [#6378](https://github.com/QwenLM/qwen-code/issues/6378)
    *   **热度**：评论 19 条
    *   **简述**：社区正在讨论重构 `qwen serve` 架构，打破 "1 daemon = 1 workspace" 的限制，以支持单进程管理多工作区。这是目前讨论最激烈的架构级提案，涉及会话隔离与资源复用。

2.  **`/review` 技能消耗大量 Token** [#6264](https://github.com/QwenLM/qwen-code/issues/6264)
    *   **热度**：评论 8 条
    *   **简述**：用户反馈 `/review` 技能在实际使用中 Token 开销巨大，希望优化 Prompt 或提供分块审查策略，平衡效果与成本。

3.  **环境配置模型导致上下文硬限制为 0** [#6384](https://github.com/QwenLM/qwen-code/issues/6384)
    *   **热度**：评论 5 条
    *   **简述**：特定模型配置下，系统预留全部上下文窗口用于输出，导致输入 Token 硬限制变为 0，阻塞请求。这是影响特定部署环境的关键 Bug。

4.  **优化守护进程会话创建路径开销** [#6312](https://github.com/QwenLM/qwen-code/issues/6312)
    *   **热度**：评论 5 条
    *   **简述**：针对 Daemon 模式下创建/恢复会话时的同步 I/O 性能瓶颈进行追踪，旨在降低长时间运行后的延迟。

5.  **流式传输期间缺乏消息展示 Hook 事件** [#6488](https://github.com/QwenLM/qwen-code/issues/6488)
    *   **热度**：评论 3 条
    *   **简述**：开发者请求增加流式响应过程中的 Hook 事件，以便在 LLM 输出中途（而非结束）时触发回调，满足实时 UI 更新或监控需求。

6.  **内存索引在 `/remember` 后过期** [#6487](https://github.com/QwenLM/qwen-code/issues/6487)
    *   **热度**：评论 2 条
    *   **简述**：内存持久化写入磁盘后，系统指令中的索引未及时刷新，导致长会话中记忆丢失或过时，影响 Agent 的上下文记忆能力。

7.  **Worktree 会话共享项目内存导致污染** [#6449](https://github.com/QwenLM/qwen-code/issues/6449)
    *   **热度**：评论 2 条
    *   **简述**：使用 Git Worktree 进行多任务并行时，所有会话共享同一份项目记忆文件，导致不同任务的信息相互干扰（噪音污染）。

8.  **Skill 功能增强讨论** [#6452](https://github.com/QwenLM/qwen-code/issues/6452)
    *   **热度**：评论 2 条
    *   **简述**：探讨了 "Prompt as Code" 的局限性，建议增强 Skill 机制，解决 CLI 版本更新导致 Prompt 行为变化及模型间性格差异问题。

9.  **VSCode 插件连接 Agent 失败** [#6414](https://github.com/QwenLM/qwen-code/issues/6414)
    *   **热度**：评论 4 条
    *   **简述**：部分用户反馈 VSCode 扩展无法连接到本地 Qwen Agent，属于高频用户接入问题。

10. **请求在默认模式下也显示权限徽章** [#6496](https://github.com/QwenLM/qwen-code/issues/6496)
    *   **热度**：评论 2 条
    *   **简述**：UI/UX 改进建议，希望在默认（询问权限）模式下也在页脚显示徽章，以消除状态歧义。

## 4. 重要 PR 进展 (Top 10)

1.  **新增 Fleet View：多会话全屏管理界面** [#6451](https://github.com/QwenLM/qwen-code/pull/6451)
    *   **功能**：引入类似 Claude Code Fleet View 的全屏 TUI，允许用户通过快捷键管理多个 CLI 会话，支持状态预览和快速切换，极大提升多任务并行效率。

2.  **新增 `/learn` 命令：用户自主创建技能** [#6440](https://github.com/QwenLM/qwen-code/pull/6440)
    *   **功能**：允许用户基于本地目录、URL 或对话历史生成可复用的 `SKILL.md`，降低自定义 Agent 能力的门槛。

3.  **Agent 工具支持 `working_dir` 参数锁定子代理** [#6456](https://github.com/QwenLM/qwen-code/pull/6456)
    *   **功能**：为子代理增加工作目录锁定功能，支持在现有 Git Worktree 中独立运行，解决并行开发时的文件冲突问题。

4.  **修复 Shell 安全漏洞：阻止危险 Kill 命令** [#6377](https://github.com/QwenLM/qwen-code/pull/6377)
    *   **修复**：增强了对 `kill` 命令的检测，防止通过命令替换（如 `kill -9 $(pgrep node)`）误杀系统进程或 Qwen Code 自身。

5.  **修复内存刷新逻辑** [#6497](https://github.com/QwenLM/qwen-code/pull/6497)
    *   **修复**：解决了 Issue #6487 的问题，确保 `/remember` 操作完成后立即重新加载分层内存并刷新系统指令。

6.  **Webhook 触发通道任务** [#6495](https://github.com/QwenLM/qwen-code/pull/6495)
    *   **功能**：支持通过外部 Webhook 触发 `qwen serve` 任务，增强与第三方 CI/CD 或自动化工具的集成能力。

7.  **OpenAI 流式响应中检测非 SSE 200 响应** [#6466](https://github.com/QwenLM/qwen-code/pull/6466)
    *   **修复**：针对网关拦截场景（HTTP 200 但内容为 HTML 错误页）增加了识别逻辑，避免流式解析卡死或日志记录错误。

8.  **默认模式下显示权限徽章** [#6498](https://github.com/QwenLM/qwen-code/pull/6498)
    *   **功能**：响应 Issue #6496，在默认权限模式下也在 Footer 显示状态指示，提升 UX 清晰度。

9.  **优化流式表格渲染性能** [#6421](https://github.com/QwenLM/qwen-code/pull/6421)
    *   **修复**：解决了大型流式表格渲染时的“滚动锁定”、“头部闪烁”和“内容堆积”问题，显著提升 CLI 输出体验。

10. **SDK 增强：支持传输层与查询选项配置** [#6491](https://github.com/QwenLM/qwen-code/pull/6491)
    *   **功能**：扩展了 Python 和 TypeScript SDK，新增 `forkSession` 等选项，提供更强的二次开发控制能力。

## 5. 功能需求趋势

*   **多任务与隔离架构**：社区强烈需要更强大的多任务管理能力。从 RFC #6378（多工作区支持）到 PR #6451（Fleet View）和 PR #6456（Worktree 锁定），显示项目正从单会话工具向**多任务调度平台**演进。
*   **企业级集成与自动化**：企业微信、钉钉及 Webhook 等集成需求的增加，表明 Qwen Code 正在被更多地集成到企业内部工作流和 IM 平台中。
*   **上下文与记忆精细化管理**：关于 Token 消耗、Memory 隔离、PDF 大文件读取的 Issue 频现，说明随着使用深度增加，用户对**上下文窗口的精细控制**和**长期记忆的可靠性**提出了更高要求。

## 6. 开发者关注点

*   **性能与开销**：Daemon 模式下的会话启动延迟、Token 消耗过大以及 KV-cache 失效问题，是资深用户反馈的主要性能瓶颈。
*   **跨平台兼容性**：Windows 环境下的 Shell 命令执行问题依然存在，跨平台的一致性体验仍是开发重点。
*   **错误提示与调试体验**：诸如 "Hard limit: 0" 等模糊错误提示，以及非标准 HTTP 响应导致的解析失败，开发者希望能获得更直观的错误归因信息。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 (2026-07-08)

## 1. 今日速览
项目迎来重大品牌重塑，v0.8.67 版本发布，正式将项目名称迁移至 **CodeWhale**，原 `deepseek-tui` npm 包停止维护。社区当前主要精力集中在 v0.8.68 里程碑的开发上，重点攻克子代理工作流的稳定性、TUI 渲染性能以及 Windows 平台的输入法兼容性问题。

## 2. 版本发布
- **v0.8.67**: 正式宣布品牌重塑。
  - 项目、命令行工具、npm 包及发布资产名称统一变更为 **CodeWhale**。
  - 旧版 npm 包 `deepseek-tui` 已标记为废弃，不再提供更新。
  - 用户需参照 `docs/REBRAND.md` 进行迁移。

## 3. 社区热点 Issues (Top 10)

1.  **[#2487](https://github.com/Hmbown/CodeWhale/issues/2487) [bug] Yolo 模式下频繁卡死无响应**
    *   **看点**: 用户在使用 `yolo` 自动化模式时遭遇严重卡死，提示 "Turn stalled - no completion signal received"，且无法通过 `continue` 恢复。这是目前评论数最高的问题，严重影响了自动化工作流的可靠性。

2.  **[#1812](https://github.com/Hmbown/CodeWhale/issues/1812) [bug] Windows 11 下 TUI 间歇性冻结**
    *   **看点**: Windows 平台上的老牌顽疾，TUI 会完全失去响应但进程未崩溃。社区提供了详细的日志和线程状态分析，定位可能与 `crossterm` 轮询机制有关。

3.  **[#2261](https://github.com/Hmbown/CodeWhale/issues/2261) [bug] Windows 焦点丢失导致输入泄露至 PowerShell**
    *   **看点**: 严重的安全隐患。在某些情况下，TUI 输入框失去焦点，用户输入的敏感指令（如密钥或系统命令）可能被 PowerShell 直接执行。

4.  **[#4092](https://github.com/Hmbown/CodeWhale/issues/4092) [planning] v0.8.68 执行看板与里程碑规划**
    *   **看点**: 维护者发布的 v0.8.68 核心规划文档，定义了代理协议、执行通道及依赖关系，是理解项目下一阶段开发方向的关键入口。

5.  **[#1835](https://github.com/Hmbown/CodeWhale/issues/1835) [bug] Windows 中文输入法 (IME) 导致死锁**
    *   **看点**: 在使用搜狗等中文输入法时，TUI 输入框完全无法响应键盘输入，这严重阻碍了中文用户的使用体验。

6.  **[#4094](https://github.com/Hmbown/CodeWhale/issues/4094) [bug] 子代理详情面板空白且导致 TUI 冻结**
    *   **看点**: v0.8.68 狗粮测试中发现的阻塞性问题，查看运行中的子代理时 UI 为空白且可能导致主界面冻结。

7.  **[#3144](https://github.com/Hmbown/CodeWhale/issues/3144) [enhancement] 引入自然语言自动审查策略**
    *   **看点**: 探讨在 CI/CD 或 Pre-push 阶段引入类似 Cursor 的自动审查机制，平衡完全自主执行与人工审核之间的矛盾。

8.  **[#2953](https://github.com/Hmbown/CodeWhale/issues/2953) [enhancement] 对标 Codex CLI 优化 Token 消耗**
    *   **看点**: 社区对比发现 CodeWhale 的默认 Prompt 足迹比 Codex CLI 大得多，正在推动精简默认 Prompt 路径以降低成本。

9.  **[#2061](https://github.com/Hmbown/CodeWhale/issues/2061) [enhancement] MMO 风格快捷栏**
    *   **看点**: 用户体验改进提案，计划在侧边栏底部增加类似游戏技能栏的快捷操作条，将高频操作映射到单键触发。

10. **[#2721](https://github.com/Hmbown/CodeWhale/issues/2721) [release-blocker] v0.9.0 稳定门控计划**
    *   **看点**: 为 v0.9.0 大版本设立的稳定门控标准，明确指出必须解决 Windows 兼容性、大仓库处理及子代理状态管理的遗留问题。

## 4. 重要 PR 进展 (Top 10)

1.  **[#4099](https://github.com/Hmbown/CodeWhale/pull/4099) v0.8.68 发布序列：工作流修正与安全加固**
    *   **内容**: 整合了 v0.8.68 版本的多个修复波次，包括修复轮询失败、取消操作的实际中断逻辑、TUI 稳定性及权限加固。

2.  **[#4182](https://github.com/Hmbown/CodeWhale/pull/4182) 修复子代理详情面板空白问题**
    *   **内容**: 填充了运行中子代理的活动日志显示，解决了 Issue #4094 中提到的 UI 空白和冻结问题，提升了子代理的可观测性。

3.  **[#4180](https://github.com/Hmbown/CodeWhale/pull/4180) 规范化 Ctrl+C 信号处理**
    *   **内容**: 修复了 PTY/原始模式下的退出流程，规范化 `0x03` 字节处理，确保双击 Ctrl+C 能稳定退出空闲状态。

4.  **[#3902](https://github.com/Hmbown/CodeWhale/pull/3902) 性能优化：修复五大渲染/输入热路径**
    *   **内容**: 针对 TUI 的性能瓶颈进行了深度优化，例如修复了任务侧边栏每帧重复计算两次的问题，显著提升响应速度。

5.  **[#4181](https://github.com/Hmbown/CodeWhale/pull/4181) Fleet 设置角色/配置编辑器重构**
    *   **内容**: 改进了 Fleet 配置界面的交互逻辑，支持多提供商模型路由选择，并修复了配置预览中的错误。

6.  **[#4191](https://github.com/Hmbown/CodeWhale/pull/4191) 修复 Models.dev 解析器兼容性**
    *   **内容**: 适配了 `models.dev` 返回的两种不同 `interleaved` 字段格式，确保模型目录解析的健壮性。

7.  **[#4045](https://github.com/Hmbown/CodeWhale/pull/4045) 修复 UTF-8 模糊匹配光标崩溃**
    *   **内容**: 修复了在处理多字节 UTF-8 字符（如中文）时，光标定位错误导致的 Panic 问题，对中文用户至关重要。

8.  **[#4044](https://github.com/Hmbown/CodeWhale/pull/4044) 本地化动态欢迎步骤**
    *   **内容**: 实现了首次启动欢迎画面的本地化支持，并优化了引导逻辑，预配置用户仅看到必要的步骤。

9.  **[#4035](https://github.com/Hmbown/CodeWhale/pull/4035) 文档新增 VS Code GUI 前端链接**
    *   **内容**: 在 README 中添加了社区维护的 VS Code GUI 扩展链接，标志着生态系统的扩展。

10. **[#3761](https://github.com/Hmbown/CodeWhale/pull/3761) 延迟启动维护清理任务**
    *   **内容**: 将启动时的清理任务（如过期会话清理）从同步路径移至后台线程，显著缩短应用启动等待时间。

## 5. 功能需求趋势

*   **稳定性与可靠性**: "Turn stalled"、"TUI Freeze"、"Stream stalled" 等关键词频繁出现，社区对 Agent 自动化执行过程中的稳定性（特别是网络波动或长时间运行场景）要求极高。
*   **子代理 编排**: 随着项目向 CodeWhale 演进，关于 Sub-agent 的 UI 展示、任务分配、结果回传以及 Whitelabel 的讨论显著增加。
*   **Token 与成本优化**: 对比竞品 的 Token 消耗分析成为重点，开发者正致力于减少重复的 Transcript 输入和 Tool Result Payload，以适应 DeepSeek V4 的缓存策略。
*   **跨平台体验一致性**: Windows 平台的 IME 支持、终端焦点管理、渲染卡顿问题占据了 Bug 报告的很大比例，是下一阶段急需解决的技术债。

## 6. 开发者关注点

*   **Windows 平台痛点**: 开发者反馈集中在 Windows Terminal 下的输入法兼容性、焦点丢失及渲染冻结，这表明当前的跨平台底层库 可能存在未覆盖的边缘情况。
*   **更名迁移成本**: v0.8.67 的发布意味着开发者需要手动迁移配置和别名，文档 `REBRAND.md` 的清晰度备受关注。
*   **自主模式控制权**: 在 "Yolo" 模式下，用户希望有更明确的干预机制（如 Issue #2487 提到的无法 resume），避免 Agent 陷入死循环或无响应状态。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*