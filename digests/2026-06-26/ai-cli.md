# AI CLI 工具社区动态日报 2026-06-26

> 生成时间: 2026-06-26 03:58 UTC | 覆盖工具: 8 个

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

# AI CLI 工具生态横向对比分析报告 (2026-06-26)

## 1. 生态全景
当前 AI CLI 工具已度过单纯的"对话交互"阶段，全面迈向 **Agent 自动化编排** 与 **系统级集成** 的深水区。各大工具在竞相引入 MCP（Model Context Protocol）插件生态和多模态能力的同时，均面临着 **模型稳定性（解析失败/幻觉）** 与 **成本不可控** 的严峻挑战。此外，Windows 平台的兼容性顽疾与会话持久化的可靠性，已成为制约工具从"玩具"走向"生产力基础设施"的共性短板。

## 2. 各工具活跃度对比

| 工具名称 | 版本动态 | 热点 Issues (关键条目) | 活跃 PRs | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | v2.1.193 | 模型解析故障、$506 意外扣费、数据丢失、IME 回归 | 1 (生命周期调整) | 模型稳定性、计费信任危机 |
| **OpenAI Codex** | v0.142.2 | Token 消耗激增(20倍)、SSD 磨损、配额计算偏差 | 10+ (架构重构) | 成本控制、插件化架构 |
| **Gemini CLI** | v0.51.0-nightly | 子代理误报成功、Wayland 失败、OAuth 崩溃 | 10+ (功能增强) | Agent 可靠性、安全性 |
| **Copilot CLI** | v1.0.66-0 | 会话恢复认证失效、企业策略拦截、模型列表查询 | 1 (配置标准化) | 企业级合规、会话持久化 |
| **OpenCode** | v1.17.11 | Windows Bun 崩溃、会话快照、PowerShell 乱码 | 10+ (多模态/性能) | 跨平台稳定性、上下文管理 |
| **Qwen Code** | 发布失败 (修复中) | 进程泄漏 (OOM)、CI 隔离、病毒误报 | 10+ (功能扩展) | 工程化缺陷、本地模型 |
| **DeepSeek TUI** | v0.8.65 (更名 CodeWhale) | 思考链截断、模式混淆、Token 瘦身 | 10+ (重构/优化) | 品牌重塑、Token 经济学 |
| **Kimi Code** | 无更新 | MCP 工具加载异常、UI 抖动 | 0 | 工具链兼容性 |

## 3. 共同关注的功能方向

1.  **Windows 平台的原生体验痛点**
    *   **涉及工具**：Claude Code, OpenAI Codex, OpenCode, Qwen Code。
    *   **具体诉求**：Windows 平台问题呈现井喷之势。Claude Code 出现 IME 输入法回退和 ARM64 兼容问题；OpenCode 因 Bun 运行时导致频繁崩溃；Qwen Code 曝光严重的 PowerShell 进程泄漏导致 OOM；Codex 仍有沙箱弹窗困扰。这反映出 CLI 工具在跨平台底层进程管理和系统 API 调用上仍存在显著短板。

2.  **成本透明度与计费控制权**
    *   **涉及工具**：Claude Code, OpenAI Codex, DeepSeek TUI。
    *   **具体诉求**：用户对"隐形消费"极其敏感。Claude Code 发生静默升级模型导致巨额账单和 VS Code 后台恢复耗尽额度；Codex 用户反馈 Token 消耗异常激增 10-20 倍。社区强烈要求精细化的额度预警、模型切换确认机制以及后台任务的资源监控。

3.  **MCP 生态与工具链集成**
    *   **涉及工具**：OpenAI Codex, Copilot CLI, Gemini CLI, Kimi Code, Qwen Code。
    *   **具体诉求**：MCP 已成为扩展能力的标配。Codex 和 Copilot CLI 正致力于完善 MCP 服务器管理和 OAuth 认证；Gemini CLI 修复了工具数量超限（>128）的问题；Kimi Code 在加载大规模工具集（212个）时出现瓶颈。开发者要求 CLI 具备更强的工具发现、加载与容错能力。

4.  **会话持久化与状态恢复**
    *   **涉及工具**：Claude Code, Copilot CLI, OpenCode, Codex。
    *   **具体诉求**：会话不仅是聊天记录，更是昂贵的上下文资产。Claude Code 出现服务端策略静默禁用持久化的严重问题；Copilot CLI 恢复会话后认证失效；Codex 和 OpenCode 则在通过快照、重放机制增强会话的可靠性。用户迫切需要"断点续传"般的无缝体验。

## 4. 差异化定位分析

*   **Claude Code**：**"能力最强但脾气最大"的高性能引擎**。依托 Opus 4.8 的推理能力占据高端生态位，但模型输出的不可控（杂散 Token、解析失败）和昂贵的试错成本使其成为高风险高回报的选择，适合对智能上限要求极高但对稳定性容忍度较低的场景。
*   **OpenAI Codex**：**"激进架构演进的平台化先锋"**。正通过虚拟 HTTP MCP 服务器等 PR 推进底层插件化架构重构。其痛点主要集中在资源消耗（Token、SSD）和配额模型上，显示出其更侧重于构建通用的 Agent 底座，而非单一工具。
*   **Gemini CLI**：**"企业级安全与多模态探索者"**。重点关注 OAuth 安全补丁、Webhook 验证和 AST 感知工具。其 Issues 多涉及底层安全和复杂代理调度，显示出其在向企业级安全合规和多模态处理（视频/PDF）方向发力。
*   **GitHub Copilot CLI**：**"企业开发环境集成者"**。深耕企业级策略配置、VPN 环境支持和 IDE 联动。与其他工具相比，其核心优势在于 GitHub 生态的深度绑定，但受限于企业合规要求，认证流程和策略拦截成为主要摩擦点。
*   **OpenCode & DeepSeek TUI**：**"开源与成本优化的实干派"**。OpenCode 侧重于多 Provider 兼容和会话快照功能；DeepSeek TUI (CodeWhale) 则专注于 Token 经济学（瘦身 Prompt）和本地化性能。这两者更受对成本敏感、希望私有化部署的开发者青睐。
*   **Qwen Code**：**"多模态与工程化追赶者"**。致力于补齐 Chrome 扩展、语音听写等功能短板，但近期受困于工程化问题（进程泄漏、CI 隔离），显示出在快速迭代中质量控制面临挑战。

## 5. 社区热度与成熟度

*   **活跃度最高**：**OpenAI Codex** 和 **Claude Code**。Issues 讨论热度极高（涉及金钱损失和核心功能瘫痪），反映出用户基数大且使用程度深，属于生产环境主力工具。
*   **迭代最快**：**Gemini CLI** 和 **OpenCode**。PR 数量多且涉及核心架构（如会话存储、多模态支持），显示出研发团队正在快速响应市场需求进行功能补全。
*   **稳定性/成熟度预警**：**Claude Code** 虽功能强大，但近期模型解析和计费问题频发，成熟度受到质疑；**Qwen Code** 出现发布失败和严重进程泄漏，工程成熟度亟待提升。
*   **企业级稳健**：**Copilot CLI** 虽然功能迭代不如竞品激进，但问题集中在配置与策略兼容上，核心功能相对稳定，符合企业产品特征。

## 6. 值得关注的趋势信号

1.  **从"模型智能"转向"系统健壮"**：
    社区焦点已从单纯追求模型推理能力，转向对 **模型输出结构的稳定性** 和 **系统容错机制** 的苛求。Claude Code 的 Opus 4.8 解析失败和 Gemini 的子代理状态误报表明，模型输出的鲁棒性正在成为制约自动化的瓶颈。开发者应考虑在应用层增加对畸形输出的防御性解析和重试机制。

2.  **成本焦虑催生"精细化护栏"**：
    "静默扣费"和"后台消耗"引发了信任危机。未来的 CLI 工具必须具备 **预算熔断机制**、**后台任务资源预估** 和 **模型变更显式确认**。开发者在使用 AI CLI 时，应优先配置账单警报，并避免在无人值守状态下运行高权限任务。

3.  **CLI 正在演变为"轻量级 IDE"**：
    各大工具均在强化上下文管理（快照、压缩阈值）、多模态输入（语音、视频）和插件生态（MCP）。CLI 不再仅仅是问答终端，而是正在吞噬 IDE 的部分功能（如文件操作、Diff 预览、LSP 集成）。建议开发者关注 CLI 插件开发规范，构建轻量级、可组合的开发环境。

4.  **Windows 平台的"二等公民"困境**：
    无论是进程泄漏、IME 冲突还是沙箱弹窗，Windows 平台的问题数量远超 Unix 系。这提示开发团队在跨平台开发时，需投入更多资源进行 Windows 原生 API 适配和兼容性测试，而非简单依赖跨平台框架。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告 (2026-06-26)

基于 `anthropics/skills` 官方仓库的最新数据，以下是社区关注度最高的动态分析。

## 1. 热门 Skills 排行 (PRs)

以下 PRs 按社区关注度排序，涵盖了文档处理、开发运维及核心工具链修复：

1.  **[核心修复] run_eval.py 评估工具修复** (#1298)
    *   **功能**：修复了 `skill-creator` 中评估脚本长期报错（recall=0%）的问题，解决了 Windows 流读取、触发检测及并行工作者的兼容性缺陷。
    *   **状态**：[OPEN]
    *   **热点**：这是列表中排序最高的 PR，反映了社区对 Skills 质量评估工具无法正常工作的强烈不满与修复需求。
    *   **链接**：[PR #1298](https://github.com/anthropics/skills/pull/1298)

2.  **[新增] ODT 文档处理技能** (#486)
    *   **功能**：新增对 OpenDocument (.odt, .ods) 格式的支持，包括创建、填充及转换为 HTML，填补了开源文档格式的空白。
    *   **状态**：[OPEN]
    *   **热点**：企业级文档处理需求强烈，弥补了现有 Skills 在 LibreOffice/OpenDocument 标准上的缺失。
    *   **链接**：[PR #486](https://github.com/anthropics/skills/pull/486)

3.  **[新增] 文档排版质量控制** (#514)
    *   **功能**：解决 AI 生成文档中的“孤行”、“寡行”及编号错位问题，提升输出文档的专业度。
    *   **状态**：[OPEN]
    *   **热点**：直击 AI 生成内容的排版痛点，具有普适性价值。
    *   **链接**：[PR #514](https://github.com/anthropics/skills/pull/514)

4.  **[新增] 全栈应用部署** (#360)
    *   **功能**：允许 Claude 直接将全栈 Web 应用部署到公网 URL，支持生命周期管理。
    *   **状态**：[OPEN]
    *   **热点**：极大扩展了 Claude Code 的 DevOps 能力，实现从代码到部署的闭环。
    *   **链接**：[PR #360](https://github.com/anthropics/skills/pull/360)

5.  **[新增] 持久化记忆** (#154)
    *   **功能**：为 AI Agents 提供跨对话的持久化上下文记忆能力，解决长期记忆丢失问题。
    *   **状态**：[OPEN]
    *   **热点**：Agent 长期运行的核心能力，社区关注度极高。
    *   **链接**：[PR #154](https://github.com/anthropics/skills/pull/154)

6.  **[新增] 技能质量与安全分析器** (#83)
    *   **功能**：元技能，用于分析其他 Skills 的结构、文档质量及潜在安全风险。
    *   **状态**：[OPEN]
    *   **热点**：随着 Skills 数量增长，质量控制和安全性扫描成为刚需。
    *   **链接**：[PR #83](https://github.com/anthropics/skills/pull/83)

7.  **[新增] 测试模式指南** (#723)
    *   **功能**：涵盖单元测试、React 组件测试及 E2E 测试的全栈测试模式 Skill。
    *   **状态**：[OPEN]
    *   **链接**：[PR #723](https://github.com/anthropics/skills/pull/723)

---

## 2. 社区需求趋势

根据 Issues 讨论，社区目前最期待的功能方向如下：

*   **企业级协作与权限管理**
    *   社区强烈呼吁支持**组织内部 Skills 共享** ([Issue #228](https://github.com/anthropics/skills/issues/228))，目前依赖手动分发 `.skill` 文件效率低下。同时，关于 Skills 命名空间的安全问题 ([Issue #492](https://github.com/anthropics/skills/issues/492)) 引起了关于信任边界的深度讨论，用户担心社区 Skills 伪装成官方 Skills 导致权限滥用。

*   **跨平台与工具链稳定性**
    *   Windows 兼容性问题是投诉重灾区，涉及 `run_eval.py` 脚本无法运行 ([Issue #556](https://github.com/anthropics/skills/issues/556)) 及编码错误 ([Issue #1061](https://github.com/anthropics/skills/issues/1061))。社区期待官方能提供对 Windows 环境的一等支持。

*   **上下文与记忆增强**
    *   多个 Issues 和 PRs 涉及“记忆”功能（如 `shodh-memory` 和 `compact-memory`），显示用户希望打破单次对话限制，构建具有长期记忆的 Agent。

*   **AI 治理与安全**
    *   有开发者提议增加针对 AI Agent 系统的治理技能 ([Issue #412](https://github.com/anthropics/skills/issues/412))，涵盖策略执行、威胁检测和审计追踪，反映了对 Agent 自主性的安全担忧。

---

## 3. 高潜力待合并 Skills

以下 PRs 处于 Open 状态，但解决了关键痛点或具有高度实用性，预计近期可能落地：

1.  **run_eval.py 核心修复** ([PR #1298](https://github.com/anthropics/skills/pull/1298))
    *   *理由*：解决了 Skills 优化循环完全失效的阻塞性问题，是工具链修复的最高优先级 PR。

2.  **ODT 文档支持** ([PR #486](https://github.com/anthropics/skills/pull/486))
    *   *理由*：补齐了文档生态的重要拼图，且代码已相对成熟，适合企业用户。

3.  **Windows 兼容性修复** ([PR #1050](https://github.com/anthropics/skills/pull/1050))
    *   *理由*：解决了 Windows 平台下 `subprocess` 失败和编码错误，直接回应了大量 Windows 用户的痛点。

4.  **YAML 特殊字符校验** ([PR #361](https://github.com/anthropics/skills/pull/361))
    *   *理由*：防止因 YAML 解析错误导致的 Skill 失效，属于鲁棒性增强，风险低且收益高。

---

## 4. Skills 生态洞察

**当前社区最集中的诉求是：将 Skills 从“个人实验性工具”转化为“企业级生产力组件”，这迫切需要官方解决评估工具的稳定性、Windows 平台兼容性以及企业内部的分发权限安全问题。**

---

# Claude Code 社区动态日报 (2026-06-26)

## 1. 今日速览
Claude Code 今日发布了 **v2.1.193** 版本，重点增强了 Shell 命令的自动分类机制与权限拒绝反馈。社区方面，**Opus 4.8 模型的工具调用解析故障**成为焦点，大量用户反馈模型输出中混入杂散 token（如 "court"）导致工具调用被当作普通文本处理，严重影响了自动化流程的稳定性。同时，Windows 平台的 IME 输入法兼容性问题也在新版中出现回退。

## 2. 版本发布
- **[v2.1.193](https://github.com/anthropics/claude-code/releases/tag/v2.1.193)**
  - **新增配置**：引入 `autoMode.classifyAllShell` 设置，允许将所有 Bash/PowerShell 命令路由至自动模式分类器，而不仅仅是任意代码执行模式。
  - **反馈增强**：在会话记录、拒绝提示及 `/permissions` 最近拒绝列表中增加了自动模式拒绝的具体原因，提升了权限管理的透明度。

## 3. 社区热点 Issues

1.  **[Issue #63875](https://github.com/anthropics/claude-code/issues/63875) - 模型工具调用解析反复失败中断会话**
    - **标签**: `bug` `platform:windows` `area:model`
    - **热度**: 👍 109 | 💬 71
    - **简评**: 社区最关注的问题。用户报告在正常会话中频繁出现 "The model's tool call could not be parsed" 错误，导致任务中断且无法自愈。该问题在 Windows 平台尤为突出，严重影响使用体验。

2.  **[Issue #49747](https://github.com/anthropics/claude-code/issues/49747) - Opus 4.7 在长上下文中混用旧版 XML 格式**
    - **标签**: `bug` `has repro` `area:model` `regression`
    - **热度**: 👍 32 | 💬 30
    - **简评**: 这是一个有复现步骤的回归问题。Opus 4.7 在处理较长负载时，会将旧版 XML 工具调用格式混入 JSON 调用中，导致解析异常。

3.  **[Issue #63896](https://github.com/anthropics/claude-code/issues/63896) - Compaction 期间报错要求开启 Usage Credits**
    - **标签**: `bug` `area:cost` `api:anthropic`
    - **热度**: 👍 25 | 💬 41
    - **简评**: 用户在进行上下文压缩操作时遇到 API 报错，提示需要开启额度或切换模型，涉及计费逻辑与错误提示的清晰度问题。

4.  **[Issue #50674](https://github.com/anthropics/claude-code/issues/50674) - Cowork 功能在 ARM64 (Snapdragon X) 上失败**
    - **标签**: `bug` `platform:windows` `area:cowork`
    - **热度**: 💬 28
    - **简评**: 尽管通过了就绪检查，Cowork 功能依然无法在 ARM64 架构的 Windows 设备上运行，阻碍了新硬件用户的协作功能使用。

5.  **[Issue #68780](https://github.com/anthropics/claude-code/issues/68780) - [紧急] Opus 4.8 推理能力严重退化**
    - **标签**: `bug` `area:model`
    - **热度**: 👍 16 | 💬 12
    - **简评**: 用户投诉 Opus 4.8 模型在 "Max effort" 模式下推理能力严重下降，甚至有用户表示将就"欺骗性商业行为"采取法律行动，反映了用户对模型质量的高度敏感。

6.  **[Issue #71481](https://github.com/anthropics/claude-code/issues/71481) - 静默升级模型导致 6 天产生 $506 意外费用**
    - **标签**: `bug` `area:cost`
    - **热度**: 💬 2 (今日新建)
    - **简评**: 严重计费事故。系统在无通知的情况下将默认模型从 Sonnet 4.6 升级为 Opus 4.7，导致用户在 6 天内产生了超过 500 美元的 API 费用，引发了关于默认配置变更机制的信任危机。

7.  **[Issue #64108](https://github.com/anthropics/claude-code/issues/64108) - 工具调用被当作文本输出**
    - **标签**: `bug` `area:model`
    - **热度**: 👍 15 | 💬 9
    - **简评**: 在 Opus 大上下文会话中，模型间歇性地将工具调用（如 Edit/Read）作为纯文本输出（带有 "court" 杂散 token），而不是执行它们。

8.  **[Issue #71496](https://github.com/anthropics/claude-code/issues/71496) - 服务端策略静默禁用会话持久化**
    - **标签**: `bug` `data-loss`
    - **热度**: 💬 1 (今日新建)
    - **简评**: 严重的潜在数据丢失问题。约从 6 月 20 日起，部分用户的会话记录不再写入磁盘，导致无法通过 `--resume` 恢复会话。需设置环境变量 `CLAUDE_CODE_FORCE_SESSION_PERSISTENCE=1` 强制恢复。

9.  **[Issue #71499](https://github.com/anthropics/claude-code/issues/71499) - Windows IME 输入法回退问题 (v2.1.193 回归)**
    - **标签**: `bug` `platform:windows` `regression`
    - **热度**: 💬 1 (今日新建)
    - **简评**: v2.1.193 引入的回归 Bug，Windows 用户使用中文输入法按回车确认时，文本会被删除而非提交，严重阻碍非英语用户使用。

10. **[Issue #71478](https://github.com/anthropics/claude-code/issues/71478) - VS Code 扩展无警告恢复巨型会话耗尽额度**
    - **标签**: `bug` `area:cost` `platform:vscode`
    - **热度**: 💬 5
    - **简评**: VS Code 扩展在后台恢复大型会话时缺乏警告机制，导致用户 Max 额度被迅速耗尽，呼吁增加显式的会话恢复确认流程。

## 4. 重要 PR 进展

- **[PR #63686](https://github.com/anthropics/claude-code/pull/63686) - 调整 Issue 生命周期超时时间**
  - **状态**: Closed
  - **内容**: 将 `stale`（陈旧）和 `autoclose`（自动关闭）的超时时间从 14 天大幅延长至 90 天。
  - **意义**: 给予社区 Issue 更长的讨论与响应窗口，减少了因短期无更新而被自动关闭的情况，体现了维护策略的调整。

*(注：过去 24 小时内仅有 1 个 PR 更新，无新功能代码合并。)*

## 5. 功能需求趋势

1.  **模型稳定性与解析机制**: 社区强烈呼吁修复 Opus 4.8/4.7 系列模型的工具调用解析问题。模型输出格式混乱（杂散 token、XML/JSON 混用）已成为阻碍自动化工作流的首要瓶颈。
2.  **成本控制透明化**: 频繁出现的意外扣费和模型静默升级问题，显示出用户对成本控制的高度焦虑。社区急需更明确的模型切换通知、额度预警以及会话恢复时的成本估算功能。
3.  **Windows 平台体验优化**: 无论是 ARM64 架构支持，还是 IME 输入法兼容性，Windows 平台的遗留问题与新引入的回归 Bug 仍是用户痛点。

## 6. 开发者关注点

- **工具调用解析失败**: 多个 Issue 提及模型输出中包含 `court`、`call` 等无关 token 或缺失 `antml:` 命名空间，导致 Agent 流程中断。开发者建议在代码层面增加对畸形输出的容错重试机制。
- **会话持久化风险**: 今日曝光的会话记录静默丢失问题极具隐蔽性。开发者应检查本地 `.jsonl` 文件是否正常生成，或暂时添加 `CLAUDE_CODE_FORCE_SESSION_PERSISTENCE=1` 环境变量作为防御措施。
- **Windows 输入法兼容性**: 最新版本对 TUI 输入处理的改动影响了中日文输入法，相关开发者需留意升级后的输入体验。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-06-26)

## 1. 今日速览
今日社区最突出的动态是关于 **Token 消耗异常激增** 的广泛反馈，多位用户报告 GPT-5.5 模型的配额消耗速度提升了 10-20 倍，导致预算在极短时间内耗尽。官方发布了 **v0.142.2 稳定版**，重点优化了 MCP 工具发现机制及 macOS 系统代理支持。此外，Windows 平台的沙箱稳定性及日志写入过大的问题仍是开发者关注焦点。

---

## 2. 版本发布
### **rust-v0.142.2**
*   **MCP 工具搜索优化**：MCP 工具现在默认启用 tool search，在保持旧模型兼容性的同时显著提升了工具发现能力。
*   **macOS 代理支持**：新增 `respect_system_proxy` 配置项，允许客户端遵从系统代理、PAC 及 WPAD 设置。

### **codex-zsh-v0.1.0**
*   发布了首个 Zsh 集成版本，标志着 Codex 对 Shell 环境集成支持的进一步扩展。

---

## 3. 社区热点 Issues (Top 10)

1.  **[严重] GPT-5.5 Token 消耗成本异常激增 10-20 倍** [#28879](https://github.com/openai/codex/issues/28879)
    *   **摘要**：自 6 月 16 日起，用户反馈 `gpt-5.5` 的 Token 消耗速率暴增，导致 Plus 计划的 5 小时预算在仅 2-3 次提示后即耗尽。这是今日热度最高的 Issue，引发了社区对计费模型的强烈担忧。
    *   **标签**：`bug`, `rate-limits`, `app`

2.  **[严重] 配额重置后瞬间耗尽** [#30002](https://github.com/openai/codex/issues/30002)
    *   **摘要**：Pro 用户报告在 5 小时限制重置后，仅使用约 1.35M tokens（远低于正常的 156M）就再次触发限制，服务端配额计算可能存在严重偏差。
    *   **标签**：`bug`, `rate-limits`, `app`

3.  **[性能] SQLite 日志写入过高消耗 SSD 寿命** [#28224](https://github.com/openai/codex/issues/28224)
    *   **摘要**：用户指出 Codex 的反馈日志写入量可达约 640 TB/年，严重消耗 SSD 耐久度。虽已通过 PR 修复并关闭，但依然是今日讨论度最高的问题之一，反映了开发者对本地资源占用的敏感。
    *   **标签**：`bug`, `CLI`, `performance`

4.  **[功能] 强烈请求恢复 "/undo" 功能** [#9203](https://github.com/openai/codex/issues/9203)
    *   **摘要**：长期需求，用户希望恢复撤销功能以应对 Codex 意外删除或修改未提交文件的情况，该 Issue 积累了近 300 个点赞，显示容错机制是核心痛点。
    *   **标签**：`enhancement`, `TUI`, `session`

5.  **[Bug] 后台进程轮询浪费大量 Token** [#13733](https://github.com/openai/codex/issues/13733)
    *   **摘要**：在运行后台任务（如 `cargo build`）时，每次状态轮询都会触发携带完整历史记录的 API 请求，导致 Token 消耗随历史长度和轮询次数激增。
    *   **标签**：`bug`, `rate-limits`, `tool-calls`

6.  **[Bug] Windows 沙箱设置反复弹窗错误** [#29200](https://github.com/openai/codex/issues/29200)
    *   **摘要**：Windows 桌面版在执行 `apply_patch` 时会触发 `codex-windows-sandbox-setup.exe` 的错误弹窗，尽管补丁可能执行成功，体验极差。
    *   **标签**：`bug`, `windows-os`, `sandbox`

7.  **[Bug] macOS 代理设置未生效导致连接问题** (关联 Release)
    *   **背景**：虽然 v0.142.2 已修复，但此前多个 Issue 反映 macOS 客户端无法正确处理系统代理，影响企业网络环境下的使用。

8.  **[Bug] SQLite TRACE 日志持续高频写入** [#29532](https://github.com/openai/codex/issues/29532)
    *   **摘要**：尽管 v0.142.0 声称修复了日志磨损问题，但在 macOS 上 `logs_2.sqlite` 仍存在高频写入，显示修复可能不彻底。
    *   **标签**：`bug`, `app`, `performance`

9.  **[安全] CLI 登录强制短信验证忽略硬件密钥** [#25737](https://github.com/openai/codex/issues/25737)
    *   **摘要**：在配置了 FIDO2 硬件密钥的高级安全账户上，CLI 登录在密钥验证通过后仍强制要求短信 OTP，而浏览器端流程则正常。
    *   **标签**：`bug`, `auth`, `CLI`

10. **[功能] 支持 PR 中的二进制文件** [#4867](https://github.com/openai/codex/issues/4867)
    *   **摘要**：Codex Web 目前无法处理包含二进制文件的 PR，导致长时间工作的成果无法合并，限制了应用场景。
    *   **标签**：`enhancement`, `codex-web`

---

## 4. 重要 PR 进展 (Top 10)

1.  **[架构] 将 Codex Apps 实现为虚拟 HTTP MCP 服务器** [#30000](https://github.com/openai/codex/pull/30000)
    *   **内容**：引入 `codex-apps` crate，支持将应用作为虚拟 HTTP MCP 端点提供服务。这是向插件化和模块化架构迈进的重要一步。

2.  **[插件] 支持 NPM 市场插件源** [#29375](https://github.com/openai/codex/pull/29375)
    *   **内容**：修复了插件加载器无法识别 NPM 来源插件的问题，扩展了插件生态的来源渠道。

3.  **[功能] 面向作用域的模型默认配置** [#30164](https://github.com/openai/codex/pull/30164)
    *   **内容**：允许 Codex 根据不同的产品作用域（如 Work 或 Coding）加载不同的模型默认设置，提升了多场景下的灵活性。

4.  **[修复] 终端滚动事件持久化修复** [#30144](https://github.com/openai/codex/pull/30144)
    *   **内容**：修复了会话结束时未正确刷新线程存储的问题，防止数据丢失，增强了会话恢复的可靠性。

5.  **[网络] 持久化 Cloudflare Affinity Cookies** [#29516](https://github.com/openai/codex/pull/29516)
    *   **内容**：修复了托管插件服务 HTTP 流量因 Cookie 丢失导致路由不稳定的问题，提升了连接稳定性。

6.  **[网络] 暴露沙箱入口** [#29263](https://github.com/openai/codex/pull/29263)
    *   **内容**：允许外部调用者通过 Unix ingress 参数访问沙箱内的网络服务，解决了 Linux 沙箱网络命名空间隔离带来的连通性问题。

7.  **[功能] 允许 CCA 图像生成与联网搜索扩展** [#29909](https://github.com/openai/codex/pull/29909)
    *   **内容**：解耦并支持独立的图像生成和联网搜索扩展，同时保持对旧模型的兼容性，增强了 Agent 的多模态能力。

8.  **[修复] 保留被驱逐 Agent 的状态** [#30154](https://github.com/openai/codex/pull/30154)
    *   **内容**：修复 V2 Agent 在内存压力下被 LRU 驱逐后状态丢失的问题，改为保留有界的最终状态。

9.  **[修复] 线程持久化资源释放** [#30173](https://github.com/openai/codex/pull/30173)
    *   **内容**：修复了会话结束时若提交通道关闭，可能导致后续恢复失败的问题（`thread ... already has a live local writer` 错误）。

10. **[功能] 进程拥有的代码模式会话客户端** [#30112](https://github.com/openai/codex/pull/30112)
    *   **内容**：引入 `ProcessOwnedCodeModeSessionProvider`，增加了对子进程连接、读写任务及状态机的管理，提升了 CLI/App 架构的健壮性。

---

## 5. 功能需求趋势
*   **成本透明度与控制**：社区对 Token 消耗速度的异常极其敏感，急需更精细的用量监控工具和计费透明度。
*   **操作容错机制**："/undo" 功能的需求居高不下，用户对于 AI 自动执行不可逆操作（如删除文件）存在普遍焦虑。
*   **本地资源优化**：日志写入对 SSD 的磨损问题受到高度关注，显示开发者对本地工具的“轻量级”和“非侵入性”有严格要求。

## 6. 开发者关注点
*   **Token 预算骤降**：多位开发者报告近期 Token 消耗异常，严重影响生产环境使用，这是当前最紧急的待解决问题。
*   **Windows 平台稳定性**：沙箱弹窗、安装失败等问题频发，Windows 体验明显落后于 macOS/Linux。
*   **认证流程一致性**：CLI 与 Web 端认证流程的不一致（如硬件密钥支持）阻碍了高级安全用户的使用。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-06-26)

## 1. 今日速览
今日 Gemini CLI 发布了 **v0.51.0-nightly** 版本，重点修复了 CI/CD 流程中可能导致 NPM 发布失败的问题，并推出了 **v0.50.0-preview.1** 预览版。社区活跃度较高，重点关注 **Agent（智能体）稳定性**问题，特别是子代理在达到最大轮次后的错误状态报告以及通用代理挂起的问题。此外，安全性修复和工具链的健壮性改进也是今日开发的重点。

## 2. 版本发布
**v0.51.0-nightly.20260626.gb14416447**
- **主要更新**：修复了 CI 流程中可能阻止 NPM 包发布及构建任务崩溃的问题；更新了 v0.50.0-preview.1 的变更日志；修复了 `no_proxy` 相关测试用例。
- **贡献者**：@galdawave, @gemini-cli-robot, @jerrylin3321
- **链接**：[Release v0.51.0-nightly](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260626.gb14416447)

**v0.50.0-preview.1**
- **主要更新**：修复了 NPM CI 忽略脚本的验证问题；解决了发布验证过程中工作区二进制文件遮蔽的问题；引入了工具注册表依赖注入功能。
- **链接**：[Release v0.50.0-preview.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.50.0-preview.1)

## 3. 社区热点 Issues (Top 10)

1.  **[P1] Subagent 达到最大轮次后被误报为成功**
    - **编号**：[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
    - **摘要**：`codebase_investigator` 子代理在达到 `MAX_TURNS` 限制未完成分析时，仍错误地返回 `status: "success"`，导致中断被掩盖。这是一个影响任务可靠性的严重 Bug。
    - **社区反应**：评论数 8 条，标记为 `priority/p1`，目前等待复测。

2.  **[P1] 通用代理无限挂起**
    - **编号**：[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
    - **摘要**：当 Gemini CLI 调用通用代理时会出现永久挂起，即使是简单的文件夹创建操作也会卡死，用户不得不手动取消。
    - **社区反应**：评论数 7 条，点赞 8 个，严重影响用户体验，目前等待复测。

3.  **[P1] 组件级评估健壮性改进**
    - **编号**：[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)
    - **摘要**：这是一个 Epic 级别的任务，旨在扩展行为评估测试，覆盖所有 6 个支持的 Gemini 模型，提高代理行为的自动化测试覆盖率。
    - **社区反应**：评论数 7 条，正在持续推进中。

4.  **[P2] AST 感知文件读取与搜索评估**
    - **编号**：[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
    - **摘要**：探讨引入 AST（抽象语法树）感知工具，以减少 Token 噪音并提高代码导航精度。这是一个潜在的重大架构优化方向。
    - **社区反应**：评论数 7 条，技术讨论热烈。

5.  **[P2] Gemini 未充分使用自定义技能和子代理**
    - **编号**：[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
    - **摘要**：用户反馈模型极少主动调用配置好的 Skills 或 Sub-agents，除非显式指示，限制了扩展能力的发挥。
    - **社区反应**：评论数 6 条，反映了模型调度策略的痛点。

6.  **[P1] Shell 命令执行后卡在 "Waiting input"**
    - **编号**：[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
    - **摘要**：CLI 执行简单 Shell 命令后，界面显示命令仍在活动并等待输入，但实际上命令已结束，导致进程假死。
    - **社区反应**：评论数 4 条，点赞 3 个，影响基础交互。

7.  **[P2] 自动记忆系统的日志安全与重试机制**
    - **编号**：[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) & [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)
    - **摘要**：Auto Memory 功能存在敏感信息泄露风险，且会对低信号会话进行无限重试，导致资源浪费。
    - **社区反应**：各 5 条评论，涉及安全与性能优化。

8.  **[P1] Browser 子代理在 Wayland 环境下失败**
    - **编号**：[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
    - **摘要**：Browser Agent 在 Wayland 显示服务器协议下无法正常工作。
    - **社区反应**：评论数 4 条，Linux 桌面环境兼容性问题。

9.  **[P2] 工具数量超过 128 时遇到 400 错误**
    - **编号**：[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
    - **摘要**：当启用工具超过 128 个时 API 报错，用户希望 Agent 能更智能地限制工具范围。
    - **社区反应**：评论数 3 条，反映了大规模工具集成的限制。

10. **[P1] 安全性：工作流来源验证缺失**
    - **编号**：[#27940](https://github.com/google-gemini/gemini-cli/issues/27940)
    - **摘要**：`chained_e2e` 工作流在使用 `repo_name` artifact 前未验证其来源仓库，存在潜在供应链安全风险。
    - **社区反应**：评论数 1 条，标记为 `priority/p1` 和 `area/security`。

## 4. 重要 PR 进展 (Top 10)

1.  **[Merged] feat(cli): 添加 'models' 命令列出可用模型**
    - **编号**：[#27848](https://github.com/google-gemini/gemini-cli/pull/27848)
    - **内容**：新增 `gemini models` 命令，支持查看所有可用模型、上下文窗口限制及层级，支持 JSON 输出。
    - **意义**：极大方便了用户查看和配置模型。

2.  **[Open] feat(caretaker): 实现 Cloud Run Webhook 接入服务**
    - **编号**：[#28015](https://github.com/google-gemini/gemini-cli/pull/28015)
    - **内容**：为 Caretaker Agent 实现了一个 Cloud Run 服务，用于接收 GitHub Webhooks，验证签名并存入 Firestore。
    - **意义**：基础设施升级，增强自动化事件处理能力。

3.  **[Open] fix(core): OAuth Token 交换期间避免 Keep-Alive Socket 复用**
    - **编号**：[#28103](https://github.com/google-gemini/gemini-cli/pull/28103)
    - **内容**：修复了 Node.js 6 月安全补丁（CVE-2026-48931）引入的回归问题，解决 OAuth 登录时的 "Premature close" 错误。
    - **意义**：关键兼容性修复，确保新版 Node.js 环境下的登录稳定性。

4.  **[Merged] fix(core): 嗅探 MCP 图像 MIME 类型**
    - **编号**：[#27850](https://github.com/google-gemini/gemini-cli/pull/27850)
    - **内容**：自动检测并修正 MCP 图像载荷中声明的 MIME 类型与实际数据不符的问题（如 WebP 被误报为 PNG）。
    - **意义**：提高多模态处理的鲁棒性。

5.  **[Open] fix(core): 从历史记录中清除思维链以防泄露**
    - **编号**：[#27971](https://github.com/google-gemini/gemini-cli/pull/27971)
    - **内容**：修复模型内部思维链泄露到明文历史记录导致后续对话混淆的问题。
    - **意义**：提升对话质量和隐私安全性。

6.  **[Merged] fix(cli): 认证前提示文件夹信任**
    - **编号**：[#27845](https://github.com/google-gemini/gemini-cli/pull/27845)
    - **内容**：在交互式启动且工作区信任状态未知时，优先弹出信任提示，确保正确加载项目设置。
    - **意义**：优化首次运行体验和安全性。

7.  **[Merged] Vertex AI 基础 URL 更新**
    - **编号**：[#28145](https://github.com/google-gemini/gemini-cli/pull/28145)
    - **内容**：将 Vertex AI 的默认 URL 路由更新为官方代表性端点，支持 US 和 EU 多区域。
    - **意义**：官方云服务集成优化。

8.  **[Open] fix(core): 忽略会话重置后的过期 update_topic 调用**
    - **编号**：[#28153](https://github.com/google-gemini/gemini-cli/pull/28153)
    - **内容**：解决用户执行 `/clear` 后，模型残留的 `update_topic` 调用导致状态污染的问题。
    - **意义**：修复会话状态管理的竞态条件。

9.  **[Open] fix(prompts): 防止 $ 模式替换腐败**
    - **编号**：[#28013](https://github.com/google-gemini/gemini-cli/pull/28013)
    - **内容**：修复 `applySubstitutions` 函数中未正确转义 `$` 符号导致技能描述被破坏的问题。
    - **意义**：修复字符串处理逻辑漏洞。

10. **[Open] fix(skills): 技能资源列表遵循 .gitignore**
    - **编号**：[#28149](https://github.com/google-gemini/gemini-cli/pull/28149)
    - **内容**：激活技能时，生成的文件结构列表将过滤掉 `.gitignore` 中的文件。
    - **意义**：减少发送给模型的不必要上下文，提升效率。

## 5. 功能需求趋势
- **Agent 可靠性与调度**：社区对子代理和通用代理的稳定性投诉较多，主要集中在挂起、错误状态报告和调度主动性不足。改进 Agent 的执行内核和调度逻辑是核心需求。
- **上下文感知与工具精度**：通过 AST 感知工具优化代码读取、支持更大量的工具集（>128）、自动过滤无关文件，反映了用户对高质量上下文输入的需求。
- **安全与隐私**：涉及 Auto Memory 的敏感信息修订、OAuth 兼容性、Webhook 来源验证等，显示企业级安全特性正在成为重点。

## 6. 开发者关注点
- **调试困难**：开发者反馈 Bug Report 缺少子代理上下文信息，导致问题排查困难。
- **环境兼容性**：Wayland 支持问题、Node.js 新版本安全补丁导致的 OAuth 崩溃，显示了底层环境兼容性的挑战。
- **配置与控制**：用户希望有更细粒度的控制权，例如 Browser Agent 的设置覆盖、符号链接代理文件的识别等，反映出当前配置系统的灵活性有待提升。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-06-26)

## 1. 今日速览
GitHub Copilot CLI 今日发布了 **v1.0.66-0** 版本，重点增强了 MCP 服务器的管理能力，新增了开关控制及 OAuth 令牌自动恢复功能，并引入了实验性的响应预算控制。社区方面，关于会话恢复后的认证错误、模型列表查询需求以及企业级策略配置的讨论热度较高，显示出用户对企业级稳定性和精细化控制的迫切需求。

## 2. 版本发布
**版本号**: v1.0.66-0
**更新亮点**:
- **MCP 管理增强**: 在 MCP 列表视图中增加了启用/禁用 MCP 服务器的开关，提升了管理便捷性。
- **精细化控制**: 新增实验性响应预算控制，允许用户更精细地管理 CLI 的响应资源。
- **可观测性**: 支持通过托管配置 OpenTelemetry 导出，便于企业监控。
- **稳定性修复**: 修复了 OAuth 认证的远程 MCP 服务器在会话中令牌过期后的自动恢复问题。

## 3. 社区热点 Issues (Top 10)

1.  **[OPEN] 恢复会话导致认证失效问题 (#3596)**
    *   **链接**: [github/copilot-cli Issue #3596](https://github.com/github/copilot-cli/issues/3596)
    *   **理由**: 该问题导致用户无法在恢复的会话中使用 `/model` 命令，严重影响工作流连续性。社区点赞数较高 (11 👍)，表明受影响用户较多。
    *   **摘要**: 用户在恢复特定会话后，执行 `/model` 命令时遭遇 `Not authenticated` 错误，而在新会话中功能正常。

2.  **[OPEN] 请求支持列出当前支持的所有模型 (#700)**
    *   **链接**: [github/copilot-cli Issue #700](https://github.com/github/copilot-cli/issues/700)
    *   **理由**: 这是一个长期存在的功能请求，用户希望 CLI 能像 API 一样提供模型列表（包含 multiplier 信息），方便脚本化和自动化选择模型。
    *   **摘要**: 建议增加 `copilot --list-models` 命令以展示所有可用模型及其定价倍率。

3.  **[OPEN] 插件 Hook 无法静默重写命令 (#2643)**
    *   **链接**: [github/copilot-cli Issue #2643](https://github.com/github/copilot-cli/issues/2643)
    *   **理由**: 涉及插件开发的核心体验。即使用户授权了 `permissionDecision: allow`，`preToolUse` 钩子重写命令时仍会弹出确认框，阻碍了自动化流程的流畅性。
    *   **摘要**: 开发者希望能有一种机制允许 Hook 在获得授权后静默重写命令，无需频繁交互。

4.  **[OPEN] Windows 平台滚动条导致文本错位 (#3501)**
    *   **链接**: [github/copilot-cli Issue #3501](https://github.com/github/copilot-cli/issues/3501)
    *   **理由**: 自引入垂直滚动条以来，Windows Console Host 和 Terminal 均出现文本渲染错位问题，影响 Windows 用户的基本阅读体验。
    *   **摘要**: 界面渲染 Bug，导致文本无法正确对齐，用户尝试通过 Copilot 自我修复未果。

5.  **[OPEN] 企业策略导致 MCP 服务器被误拦截 (#3934)**
    *   **链接**: [github/copilot-cli Issue #3934](https://github.com/github/copilot-cli/issues/3934)
    *   **理由**: 企业级用户在使用自定义 MCP 注册表时遇到策略拦截，尽管配置在 VSCode 和 IntelliJ 中正常工作，但在 CLI 中报错，反映了企业环境下的兼容性问题。
    *   **摘要**: 本地 MCP 配置正确，但在 CLI 中显示 "MCP server is blocked by policy"，提示信息不够明确。

6.  **[OPEN] VPN 环境下语音模式无法启用 (#3636)**
    *   **链接**: [github/copilot-cli Issue #3636](https://github.com/github/copilot-cli/issues/3636)
    *   **理由**: 网络环境限制导致功能不可用。企业 VPN 环境下无法获取语音模型目录，阻断了语音模式的启用。
    *   **摘要**: 在公司 VPN 下，CLI 无法访问模型目录，导致 `/voice` 命令彻底失效。

7.  **[OPEN] WSL2 ARM64 架构下剪贴板功能失效 (#3534)**
    *   **链接**: [github/copilot-cli Issue #3534](https://github.com/github/copilot-cli/issues/3534)
    *   **理由**: 影响 WSL2 (ARM64) 用户的跨平台交互体验。`/copy` 命令调用 `clip.exe` 时因引号处理错误导致退出码为 1。
    *   **摘要**: 特定架构下的路径和参数解析 Bug，导致复制到剪贴板功能不可用。

8.  **[OPEN] Autopilot 模式自动退出问题 (#3933)**
    *   **链接**: [github/copilot-cli Issue #3933](https://github.com/github/copilot-cli/issues/3933)
    *   **理由**: 核心交互体验问题。用户反馈进入 Autopilot 模式后，每次请求结束后会自动退出，不再是持续的 Autopilot 状态，中断了自动化工作流。
    *   **摘要**: UI 颜色变更（绿变紫）后，行为逻辑似乎也发生了变化，导致无法保持 Autopilot 状态。

9.  **[OPEN] 自定义 Agent 支持 Skills 字段限制上下文 (#3940)**
    *   **链接**: [github/copilot-cli Issue #3940](https://github.com/github/copilot-cli/issues/3939)
    *   **理由**: 这是一个高质量的功能请求，针对上下文管理优化。用户希望能自定义 Agent 时限制预加载的 Skills，以减少无关上下文干扰，提高响应精准度。
    *   **摘要**: 建议在自定义 agent 配置文件中增加 `skills` 字段，允许开发者显式声明所需的技能集。

10. **[OPEN] VSCode 终端忽略用户主题设置 (#3935)**
    *   **链接**: [github/copilot-cli Issue #3935](https://github.com/github/copilot-cli/issues/3935)
    *   **理由**: 最近两个版本引入的 UI 回归问题。在 VSCode 集成终端中，Copilot CLI 强制使用浅色主题，忽略了用户设置的深色主题，严重影响视觉一致性。
    *   **摘要**: v1.0.64 版本后，主题渲染逻辑出现异常，无法适配 VSCode 终端环境。

## 4. 重要 PR 进展

过去24小时内仅有 1 个 PR 更新，暂无大量新 PR 提交，重点集中在 Issue 反馈处理上。

1.  **[OPEN] 添加 .gitignore 和设置配置 (#3928)**
    *   **链接**: [github/copilot-cli PR #3928](https://github.com/github/copilot-cli/pull/3928)
    *   **内容**: 该 PR 主要涉及配置文件的标准化管理，添加了 `.gitignore` 文件及相关设置，旨在优化项目的版本控制忽略规则，防止敏感或不必要的文件被提交。

## 5. 功能需求趋势

1.  **企业级管理与合规性**: 随着企业用户增加，对于 MCP 服务器的策略控制（如 #3934）、集中式配置推送（如 #3909 提到的组织级配置）以及 VPN 环境下的稳定性需求显著上升。
2.  **会话与状态持久化**: “会话恢复”相关的 Issue 频繁出现（#3596, #3680, #3931），用户迫切需要 CLI 能够完美保留上下文、认证状态和历史记录，跨终端或跨时间段工作的体验需优化。
3.  **模型与上下文精细控制**: 开发者希望对模型选择（#700）和上下文加载（#3940）有更细粒度的控制权，以平衡性能、成本和响应质量。
4.  **插件与 Hook 能力增强**: 社区开发者正在尝试通过 Hook 深度定制 CLI 行为，目前遇到权限弹窗（#2643）和参数验证（#3929）等阻碍，显示出对更强大的自动化扩展能力的需求。

## 6. 开发者关注点

-   **认证状态丢失**: 开发者在使用 `--resume` 恢复会话时经常遇到 "Not authenticated" 错误，这是目前反馈最强烈的阻断性 Bug。
-   **跨平台 UI 渲染**: Windows 平台的文本错位和 WSL2 的剪贴板集成问题持续困扰用户，表明终端适配仍是 CLI 工具的痛点。
-   **Autopilot 行为变更**: 近期版本更新后，Autopilot 模式的行为变化（自动退出）让习惯了自动化工作流的用户感到困惑和不便。
-   **功能可见性**: 用户希望能直接在 CLI 中查看模型配额使用情况（#3932）和支持的模型列表，弥补与 IDE 插件在信息展示上的差距。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-06-26)

## 1. 今日速览
过去 24 小时内，Kimi Code CLI 项目暂无新版本发布或 PR 更新，社区焦点集中在两个新提交的 Bug 报告上。用户反馈了在复杂 MCP 工具集环境下的兼容性问题，以及 Linux/Windows 平台上的界面渲染稳定性问题。建议开发团队重点关注 v0.19.2 版本在 K2.7 模型下的 UI 渲染性能表现。

## 2. 版本发布
*过去 24 小时内无新版本发布。*

## 3. 社区热点 Issues
本日共有 2 条新增/更新 Issue，均涉及 v0.19.2 版本的稳定性问题：

1.  **[#2475 MCP Tools 加载异常](https://github.com/MoonshotAI/kimi-cli/issues/2475)**
    *   **概况**：用户在使用包含 212 个工具的 MCP Server 时遇到问题。这表明在处理大规模工具集时，Kimi Code CLI 可能存在性能瓶颈或解析错误。
    *   **重要性**：随着 MCP 生态的发展，大型工具集的兼容性将直接影响 Pro 用户的开发效率。

2.  **[#2474 CLI 界面持续抖动与重复渲染](https://github.com/MoonshotAI/kimi-cli/issues/2474)**
    *   **概况**：用户报告 CLI 界面出现“抖动”，并莫名其妙地从头重新渲染整个对话。该问题出现在 Linux 环境下使用 K2.7 Code Thinking 模型时。
    *   **重要性**：UI 渲染问题严重影响用户体验，尤其是长对话场景下的交互流畅度，可能与前端渲染逻辑或流式输出处理有关。

## 4. 重要 PR 进展
*过去 24 小时内无活跃的 Pull Request 更新。*

## 5. 功能需求趋势
根据本日及近期 Issue 分析，社区关注点呈现以下趋势：
*   **MCP 生态兼容性**：用户开始在真实生产环境中连接大量外部工具（如 200+ 工具的 MCP Server），这对 CLI 的工具发现、加载和调用机制提出了更高的性能要求。
*   **UI 渲染稳定性**：终端界面的流畅度是 CLI 工具体验的核心，频繁重绘/抖动问题表明当前的增量渲染机制可能存在缺陷。
*   **新模型适配**：用户已广泛测试最新的 K2.7 及 K2.7 Code Thinking 模型，反映出社区对模型推理能力的迭代非常敏感。

## 6. 开发者关注点
*   **大容量工具集处理**：开发者在使用 Kimi Code CLI 作为 Agent 编排工具时，亟需支持更庞大的 MCP 工具列表，建议优化工具元数据的加载策略。
*   **跨平台 UI 一致性**：Linux 与 Windows 平台均出现渲染相关问题，开发者希望 CLI 在不同终端环境下保持一致的稳定性，避免对话上下文丢失或视觉干扰。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-06-26)

## 1. 今日速览
OpenCode 今日发布 **v1.17.11** 版本，重磅推出了“会话快照与回退”功能，显著增强了版本控制的粒度。社区方面，Windows 平台的稳定性问题引发热议，尤其是 Bun 运行时的段错误；同时，关于多模态支持（视频/PDF）和上下文压缩控制的底层架构优化正在密集进行中。

## 2. 版本发布
**v1.17.11**
- **Core - 新功能**：引入 **Session Snapshots（会话快照）** 与回退控制，支持将会话回滚至历史消息点，并自动撤销相关的文件变更，极大提升了调试与实验的安全性。
- **Core - 修复**：修复了 MCP OAuth 流程中的问题，确保在浏览器自动打开失败时，终端仍能打印 URL 供手动登录。
- **Desktop**：新增 Chrome 风格 UI 改进（推测为标签页或样式优化）。

## 3. 社区热点 Issues (Top 10)

1.  **[OPEN] OpenCode v1.17.10 在 Windows 上因 Bun 段错误崩溃**
    *   **链接**: `anomalyco/opencode Issue #33742`
    *   **关注点**: 45 条评论，高热度。用户报告升级后出现致命崩溃，回退至 v1.17.9 可缓解。这显示出近期版本在 Windows 平台存在严重的稳定性回归问题，开发团队正尝试通过升级 Bun 版本解决。

2.  **[CLOSED] 功能请求：禁用“选中即复制”行为**
    *   **链接**: `anomalyco/opencode Issue #4751`
    *   **关注点**: 24 条评论。许多开发者习惯在阅读时高亮文本，这曾导致剪贴板污染。社区对此功能需求强烈，相关 PR 已合并。

3.  **[CLOSED] 可配置的上下文压缩阈值**
    *   **链接**: `anomalyco/opencode Issue #11314`
    *   **关注点**: 随着模型上下文窗口增大，硬编码的 75% 压缩阈值不再适用所有场景。该功能已被采纳，允许用户自定义压缩触发时机。

4.  **[OPEN] Windows PowerShell 非字符编码乱码问题**
    *   **链接**: `anomalyco/opencode Issue #23636`
    *   **关注点**: 中日韩环境下，PowerShell 输出乱码。这是一个长期存在的痛点，涉及系统编码 (GB2312) 兼容性，目前有 PR 正在尝试通过 UTF-8 包装器修复。

5.  **[OPEN] V2 布局中缺失 Build/Plan Agent 选择器**
    *   **链接**: `anomalyco/opencode Issue #30360`
    *   **关注点**: 启用新设计布局后，Agent 选择器被隐藏，影响工作流切换。UI 重构带来的功能缺失是目前前端迭代的焦点。

6.  **[OPEN] GLM-5.2 模型返回 400 错误**
    *   **链接**: `anomalyco/opencode Issue #32821`
    *   **关注点**: OpenCode Go 调用 GLM-5.2 时，`content` 字段格式不兼容（发送 Array 时期望 String），反映了不同模型提供商对 API 规范实现的细微差异。

7.  **[OPEN] 文件权限申请过于模糊**
    *   **链接**: `anomalyco/opencode Issue #34014`
    *   **关注点**: 安全性讨论。用户指出 Agent 在执行分析插件时“擅自”删除文件，呼吁区分读写权限，并明确工具操作的底层意图。

8.  **[CLOSED] 功能请求：静默/后台压缩**
    *   **链接**: `anomalyco/opencode Issue #13033`
    *   **关注点**: 自动压缩时流式输出摘要会打断用户操作，社区希望此过程在后台静默进行。

9.  **[OPEN] Anthropic 兼容自定义 Provider 的桌面端工作流完善**
    *   **链接**: `anomalyco/opencode Issue #34004`
    *   **关注点**: 后端已支持 Anthropic 兼容 Provider，但桌面端 UI 尚未完全跟进，导致配置体验不完整。

10. **[OPEN] Centos 7 TUI 代码块显示空白**
    *   **链接**: `anomalyco/opencode Issue #28656`
    *   **关注点**: 旧版 Linux 系统兼容性问题，代码块渲染失败，影响终端重度用户。

## 4. 重要 PR 进展 (Top 10)

1.  **[OPEN] feat(ci): Beta 渠道使用 Bun Canary 版本**
    *   **链接**: `anomalyco/opencode PR #33822`
    *   **内容**: 针对 Windows 崩溃问题，尝试在 Beta 渠道引入 Bun 的最新开发版，官方吐槽“Rust 重写似乎更稳了”，侧面反映了对 Bun 稳定性的无奈。

2.  **[OPEN] feat(session): 在历史记录外存储媒体附件**
    *   **链接**: `anomalyco/opencode PR #34011`
    *   **内容**: 解决视频/大图片导致数据库膨胀和 Token 浪费的问题。将媒体文件存于外部，历史记录仅保留引用，显著优化长上下文性能。

3.  **[OPEN] feat(core): 支持 OpenAI 兼容转换器处理视频、音频和 PDF**
    *   **链接**: `anomalyco/opencode PR #34012`
    *   **内容**: 扩展多模态能力，支持 `video_url` 等格式，使 OpenCode 能更好地适配 Gemini/MiMo 等支持原生视频输入的模型。

4.  **[OPEN] fix(shell): Windows PowerShell UTF-8 命令包装器**
    *   **链接**: `anomalyco/opencode PR #31985`
    *   **内容**: 旨在彻底解决 Windows 下的编码乱码问题，强制使用 UTF-8 输出。

5.  **[CLOSED] feat: 添加 `tui.copy_on_select` 设置**
    *   **链接**: `anomalyco/opencode PR #4793`
    *   **内容**: 允许用户在配置中关闭“选中即复制”行为，回应了社区的高频需求。

6.  **[OPEN] feat(cli): 独立 V2 会话流程**
    *   **链接**: `anomalyco/opencode PR #33281`
    *   **内容**: 引入 `--standalone` 模式，通过子进程运行私有服务器，重构了 TUI 的会话加载与认证机制，提升架构灵活性。

7.  **[OPEN] fix(mcp): 重认证前重置令牌**
    *   **链接**: `anomalyco/opencode PR #33717`
    *   **内容**: 修复 MCP OAuth 认证流程中的令牌管理问题，防止因过期令牌导致的认证死锁。

8.  **[OPEN] fix(opencode): 防止 Windows 上 process.exit() 杀死父终端**
    *   **链接**: `anomalyco/opencode PR #29281`
    *   **内容**: 修正 Windows 下退出程序时连带关闭 PowerShell/CMD 窗口的行为，改善用户体验。

9.  **[OPEN] feat(core): 无状态重放 OpenAI 推理**
    *   **链接**: `anomalyco/opencode PR #34013`
    *   **内容**: 优化 OpenAI 模型的推理状态处理，支持加密推理工具的延续，提升 Provider 层的健壮性。

10. **[OPEN] fix(app): 在 V2 布局中显示 Build/Plan Agent 选择器**
    *   **链接**: `anomalyco/opencode PR #30352`
    *   **内容**: 修复新布局下功能缺失的 UI Bug，确保用户能正常切换 Agent 模式。

## 5. 功能需求趋势

*   **精细化的上下文控制**：社区不再满足于自动化的黑盒管理，对 **Context Compaction（上下文压缩）** 的阈值、模型选择及静默执行提出了明确要求。
*   **多模态与媒体处理**：随着模型能力增强，开发者急需 OpenCode 支持视频、音频和 PDF 的原生处理，并优化其存储方式以避免数据库臃肿。
*   **跨平台稳定性**：Windows 平台的崩溃问题是目前最大的阻碍，社区对底层运行时的稳定性关注度达到顶峰。

## 6. 开发者关注点

*   **Windows 体验严重受损**：Bun 运行时在 Windows 上的段错误导致大量用户无法使用新版本，这是目前最紧迫的阻塞性问题。
*   **数据持久化与性能**：Session 快照功能受到欢迎，但同时引发了关于数据库膨胀（特别是媒体文件存储）的讨论，开发者希望有更轻量、解耦的存储方案。
*   **交互细节打磨**：如“选中即复制”的选项、TUI 中的键位绑定、字符编码显示等细节问题，直接影响开发者的日常使用效率，需持续优化。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-06-26)

## 1. 今日速览
今日 Qwen Code 社区动态频繁，重点聚焦于工具链生态的完善与核心稳定性修复。功能层面，Chrome 扩展重构、桌面端语音听写以及 CLI 交互体验优化成为亮点；但在稳定性方面，Windows 平台曝出严重的 PowerShell 进程泄漏问题（#5873）引发大量关注。此外，针对 CI 流程的优化与发布流程的修复也在紧锣密鼓进行中。

## 2. 版本发布
过去 24 小时内无新版本发布。值得注意的是，v0.19.2 版本曾发布失败（#5831），今日已有 PR (#5878) 针对构建打包流程进行了修复，预计新版本即将发布。

## 3. 社区热点 Issues

1.  **[P1 BUG] Windows 平台 PowerShell 进程泄漏导致 OOM**
    *   **链接**: [#5873](https://github.com/QwenLM/qwen-code/issues/5873)
    *   **解读**: 这是今日热度最高且最为严重的 Issue。用户反馈在 Windows 上每次调用工具都会开启一个新的 PowerShell 进程且不关闭，导致内存飙升直至 OOM。该问题被标记为 P1 优先级，社区反应强烈，需重点关注修复进展。

2.  **[安全] VSCode 插件被误报为木马病毒**
    *   **链接**: [#5055](https://github.com/QwenLM/qwen-code/issues/5055)
    *   **解读**: Windows Defender 将 `qwen-code-vscode-ide-companion` 插件识别为 `Trojan:JS/ShaiWorm.DBA!MTB`。这极可能是误报，但严重影响用户信任度与安装体验，需官方尽快与安全厂商沟通或调整代码特征。

3.  **[P1 BUG] CI 流水线隔离性不足导致跨 PR 状态污染**
    *   **链接**: [#5882](https://github.com/QwenLM/qwen-code/issues/5882)
    *   **解读**: 开发流程中的严重问题，CI 作业在共享 Runner 上运行未隔离，导致一个 PR 的自动分类评论发到了另一个 PR 下。这暴露了基础设施的安全与稳定性隐患。

4.  **[功能提案] 扩展计划审批门控**
    *   **链接**: [#5881](https://github.com/QwenLM/qwen-code/issues/5881)
    *   **解读**: 提议将现有的计划审批机制扩展到所有计划模式入口，而不仅仅是模型发起的情况。这是对 Agent 自动化可靠性的重要增强讨论。

5.  **[已关闭] 支持项目级 Insight 功能**
    *   **链接**: [#2040](https://github.com/QwenLM/qwen-code/issues/2040)
    *   **解读**: 虽然该 Issue 已关闭，但评论数高达 28 条。讨论集中在如何从机器级别的洞察转向项目级别，反映了企业级用户对多项目管理能力的迫切需求。

6.  **[功能需求] Agent Team 多智能体协作**
    *   **链接**: [#1815](https://github.com/QwenLM/qwen-code/issues/1815)
    *   **解读**: 社区长期关注的功能，提议实现多 Agent 协作，由一个 Session 作为 Leader 进行任务分配和结果综合。这是迈向复杂任务处理的关键一步。

7.  **[BUG] JetBrains Rider IDE 登录失败**
    *   **链接**: [#4493](https://github.com/QwenLM/qwen-code/issues/4493)
    *   **解读**: 用户在 Rider 中遇到 OAuth 登录死循环问题，无法调用阿里云 Token Plan。这是 IDE 集成中的常见痛点，影响特定用户群体的使用。

8.  **[BUG] API 流式响应超时/断流问题**
    *   **链接**: [#239](https://github.com/QwenLM/qwen-code/issues/239)
    *   **解读**: 长期存在的问题，涉及网络连接与流式配置。此类问题通常难以复现，但严重影响用户体验，需持续优化错误处理机制。

9.  **[BUG] 上下文压缩策略无效**
    *   **链接**: [#1924](https://github.com/QwenLM/qwen-code/issues/1924)
    *   **解读**: 用户反馈在使用本地模型时，上下文压缩功能效果不佳，甚至导致无用数据堆积。这涉及到核心的记忆管理算法，需进一步优化适配不同模型。

10. **[BUG] IntelliJ 2026.1 无法使用本地 Ollama**
    *   **链接**: [#2724](https://github.com/QwenLM/qwen-code/issues/2724)
    *   **解读**: 用户希望在 IDE 插件中直接使用本地模型，但受限于登录验证流程。反映了社区对“本地优先”或“混合部署”模式的强烈需求。

## 4. 重要 PR 进展

1.  **feat(browser-ext): 重构并复活 Chrome 扩展**
    *   **链接**: [#5777](https://github.com/QwenLM/qwen-code/pull/5777)
    *   **内容**: 基于 daemon-direct 架构重新实现了 Chrome 扩展。新架构下扩展作为本地 `qwen serve` 守护进程的瘦客户端运行，提升了响应速度与稳定性。

2.  **feat(desktop): 桌面端语音听写功能**
    *   **链接**: [#5856](https://github.com/QwenLM/qwen-code/pull/5856)
    *   **内容**: 为桌面应用引入 `/voice` 语音听写功能，支持实时波形显示与时长计时，补齐了相对于 CLI 和 Web Shell 的功能短板。

3.  **feat(serve): 无会话工作区记忆**
    *   **链接**: [#5884](https://github.com/QwenLM/qwen-code/pull/5884)
    *   **内容**: 新增守护进程工作区记忆 API，允许在无需创建显式会话的情况下，将上下文信息注入记忆，增强了后台服务的智能化能力。

4.  **feat(tui): Ctrl+O 冻结视图与工具输出渲染优化**
    *   **链接**: [#5666](https://github.com/QwenLM/qwen-code/pull/5666)
    *   **内容**: 彻底重构了 TUI 的工具输出渲染，引入语义摘要，并增加了 Ctrl+O 冻结视图功能，允许用户回顾历史输出而不被打断。

5.  **feat: 新增 `qwen update` 自动更新命令**
    *   **链接**: [#5780](https://github.com/QwenLM/qwen-code/pull/5780)
    *   **内容**: 添加 CLI 和 Slash 命令支持自动检查和安装更新，极大简化了用户升级流程。

6.  **fix(release): 修复独立归档构建问题**
    *   **链接**: [#5878](https://github.com/QwenLM/qwen-code/pull/5878)
    *   **内容**: 修复了打包脚本中因意外存在的 `dist/node_modules` 导致构建失败的问题，这是解决 v0.19.2 发布失败的关键修复。

7.  **feat(web-shell): 浏览 MCP 服务器资源**
    *   **链接**: [#5879](https://github.com/QwenLM/qwen-code/pull/5879)
    *   **内容**: Web Shell 端现在支持通过 `/mcp` 对话框浏览 MCP 服务器资源，实现了与 TUI 端的功能对齐。

8.  **feat(cli): 输入自动补全支持 @extension 提及**
    *   **链接**: [#5849](https://github.com/QwenLM/qwen-code/pull/5849)
    *   **内容**: 引入类似 Codex 的 `@extension` 交互方式，用户可在输入框直接唤起已安装的扩展，提升了交互效率。

9.  **feat(core): 可配置的自动压缩阈值与 Stop Hook**
    *   **链接**: [#5868](https://github.com/QwenLM/qwen-code/pull/5868)
    *   **内容**: 针对上下文管理提供了更细粒度的配置，允许用户自定义压缩触发阈值，是对 Issue #1924 用户痛点的直接回应。

10. **fix(cli): 忽略其他工作区的 IDE 配置**
    *   **链接**: [#5807](https://github.com/QwenLM/qwen-code/pull/5807)
    *   **内容**: 修复了 IDE 连接发现逻辑，避免加载过期的或来自其他工作区的配置文件，增强了多工作区环境下的健壮性。

## 5. 功能需求趋势

*   **本地模型与混合部署支持**: Issues (#2724, #4078) 显示用户强烈希望绕过云登录限制，直接在 IDE 中使用本地 Ollama 或其他 OpenAI 兼容后端，且不希望功能受限。
*   **多 Agent 与高级工作流**: 需求 (#1815, #5881) 表明高级用户不再满足于单线程对话，而是需要多 Agent 协作以及更完善的 Plan/Review 自动化流程。
*   **IDE 集成深度优化**: 针对 JetBrains 系列的问题 (#4493, #3511) 频繁出现，表明用户对跨 IDE（特别是 Rider/IntelliJ）的一致性体验和登录稳定性有高要求。
*   **资源管理与性能调优**: 上下文压缩无效 (#1924) 和内存泄漏 (#5873) 反映出随着工具链变得复杂，资源管理和性能稳定性成为核心关注点。

## 6. 开发者关注点

*   **Windows 平台稳定性**: Issue #5873 揭示的进程泄漏问题对 Windows 用户是毁灭性的，开发者需优先排查 Shell 进程的生命周期管理。
*   **工程化与 CI 安全**: PR (#5878) 和 Issue (#5882) 指出发布流程和 CI 环境存在隐患，开发团队需审视构建脚本的健壮性和 CI Runner 的隔离性。
*   **安全软件误报**: 杀毒软件误报 (#5055) 是开发工具分发中的常见阻碍，建议官方检查构建产物中是否存在易被特征识别的代码模式，并在文档中提供加白名单指引。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 (2026-06-26)

## 1. 今日速览
项目迎来重大品牌升级，正式更名为 **CodeWhale** 并发布 **v0.8.65**，旧的 `deepseek-tui` 包名已被废弃。今日社区开发重心集中在**性能优化**与**交互体验打磨**上，多项 PR 提交旨在缩减 Prompt Token 消耗并修复 IME 输入框的 UI 冲突。此外，关于“思考链截断”和“模式混淆”的问题仍是用户反馈的焦点。

## 2. 版本发布
- **v0.8.65**
  - **品牌重塑**：项目、命令行工具、NPM 包及 Release 资产正式统一更名为 **CodeWhale**。
  - **迁移提示**：旧版 `deepseek-tui` NPM 包已停止维护，v0.8.x 用户需参照 `docs/REBRAND.md` 进行迁移。
  - 链接: [Release v0.8.65](https://github.com/Hmbown/CodeWhale/releases)

## 3. 社区热点 Issues (Top 10)

1.  **[#3063 v0.8.59: 发布追踪与稳定性修复](https://github.com/Hmbown/CodeWhale/issues/3063)**
    -   **重要性**：作为稳定性版本发布追踪，重点修复了 macOS 上的 TUI 鼠标报告输入泄漏问题，涉及运行时安全检查，是维持项目质量基线的关键 Issue。

2.  **[#1186 feat: 增加类型化持久权限规则](https://github.com/Hmbown/CodeWhale/issues/1186)**
    -   **重要性**：针对执行策略层的安全增强，计划支持基于工具名、命令前缀和路径模式的 `allow/deny/ask` 规则。社区对此讨论热烈（10条评论），旨在解决自动化执行时的权限管控痛点。

3.  **[#3205 v0.8.65: Fleet 模型类与自动装备选择](https://github.com/Hmbown/CodeWhale/issues/3205)**
    -   **重要性**：构建 TUI、CLI 及子智能体共享的模型选择器，旨在实现 Fleet 的自动计算负载均衡。这对多模型支持与资源调度具有重要意义。

4.  **[#861 bug: Thinking Collapse（思考链崩溃）](https://github.com/Hmbown/CodeWhale/issues/861)**
    -   **重要性**：社区验证的高优先级 Bug。DeepSeek 类模型在推理时会出现卡死、截断或丢失 `reasoning_content` 的情况，直接影响核心推理功能的可用性。

5.  **[#3568 bug: Plan 和 Agent 模式再次混淆](https://github.com/Hmbown/CodeWhale/issues/3568)**
    -   **重要性**：用户反馈在 Plan 模式下发送指令，AI 却尝试执行文件修改。这是工作流逻辑的老大难问题，开发者需关注模式切换的状态机逻辑。

6.  **[#3466 v0.8.66: 审批弹窗取消逻辑优化](https://github.com/Hmbown/CodeWhale/issues/3466)**
    -   **重要性**：用户抱怨升级后频繁触发破坏性操作审批，严重影响体验。社区正讨论如何在安全性与便捷性之间取得平衡。

7.  **[#3537 refactor: 使用 i18n 库替换硬编码本地化文件](https://github.com/Hmbown/CodeWhale/issues/3537)**
    -   **重要性**：项目架构优化。将超过 5000 行的硬编码文本迁移至专用 i18n 库，提升可维护性及编译速度。该 Issue 已关联合并的 PR。

8.  **[#2953 perf: 瘦身默认 Prompt 以降低 Token 消耗](https://github.com/Hmbown/CodeWhale/issues/2953)**
    -   **重要性**：旨在对齐 Codex CLI 的 Token 水平，缩减 CodeWhale 的静态 Prompt 占用，直接关系到 API 调用成本和上下文窗口效率。

9.  **[#3541 feat: 基于 Rust 的原生运行时/桌面客户端](https://github.com/Hmbown/CodeWhale/issues/3541)**
    -   **重要性**：Feature Request。提议使用 Rust 重写运行时或客户端以降低延迟和内存占用，解决 Node 运行时在长会话中的性能瓶颈。

10. **[#2666 bug: 长任务中智能体缺少 Token 资源可见性](https://github.com/Hmbown/CodeWhale/issues/2666)**
    -   **重要性**：智能体在长任务运行时无法感知 Token 预算和上下文压力，容易导致任务意外中断或超时，需增加资源监控反馈机制。

## 4. 重要 PR 进展 (Top 10)

1.  **[#3583 refactor: 提取硬编码文本至 JSON 并集成 rust-i18n](https://github.com/Hmbown/CodeWhale/pull/3583)**
    -   **内容**：响应 Issue #3537，将 `localization.rs` 中的文本提取至 `locales` 目录，并引入 `rust-i18n` 宏，为多语言支持打下基础。

2.  **[#3635 fix: 修复输入框空白提示遮挡 IME 光标行](https://github.com/Hmbown/CodeWhale/pull/3635)**
    -   **内容**：修复了终端输入法（IME）输入时，占位提示文本与输入光标重叠的问题，优化了中文等输入法的交互体验。

3.  **[#3629 perf: 瘦身默认静态 Prompt](https://github.com/Hmbown/CodeWhale/pull/3629)**
    -   **内容**：精简了 `constitution.md` 中冗长的文本描述，保留核心指令锚点，有效减少了每次请求的 Token 消耗。

4.  **[#3632 feat: 保存 apply_patch 的权限规则](https://github.com/Hmbown/CodeWhale/pull/3632)**
    -   **内容**：允许用户将 `apply_patch` 的操作保存为持久化规则，避免了重复审批文件修改的繁琐流程。

5.  **[#3624 feat: LSP PHP 自定义服务器支持](https://github.com/Hmbown/CodeWhale/pull/3624)**
    -   **内容**：内置了 PHP LSP (intelephense) 支持，并引入 `[lsp.custom]` 配置段，允许用户通过文件扩展名注册任意语言服务器（如 Ruby, C# 等）。

6.  **[#3623 fix: 在 Turn Metadata 中暴露模式策略](https://github.com/Hmbown/CodeWhale/pull/3623)**
    -   **内容**：修复了模式切换逻辑，在用户轮次的元数据中明确注入 Plan/Agent/YOLO 模式状态，试图解决 #3568 中的模式混淆问题。

7.  **[#3627 feat: 报告可见的最终答案大小](https://github.com/Hmbown/CodeWhale/pull/3627)**
    -   **内容**：在 `exec` 模式的流式 JSON 输出中增加 `visible_final_answer_chars` 字段，方便开发者精确统计输出文本长度。

8.  **[#3622 fix: 强化审批变更预览](https://github.com/Hmbown/CodeWhale/pull/3622)**
    -   **内容**：优化了 `apply_patch` 的 Diff 预览界面，增加了边界检查和跳过统计，解决了预览内容过长导致的截断问题。

9.  **[#3628 feat: 报告 Prompt 输入组合分析](https://github.com/Hmbown/CodeWhale/pull/3628)**
    -   **内容**：在执行元数据中增加 `input_analysis`，提供 Token 估算及文本/思考/工具调用的组成分析，有助于调试上下文膨胀问题。

10. **[#3633 fix: 发布流程增加 Registry 资源校验](https://github.com/Hmbown/CodeWhale/pull/3633)**
    -   **内容**：增强了发布脚本，校验本地与远程 Tag SHA 的一致性，防止发布不完整的构建资产，提升了发版安全性。

## 5. 功能需求趋势

-   **Token 经济学与上下文优化**：
    随着模型上下文窗口压力增大，社区强烈呼吁减少 Prompt 冗余（#2953, #2956）和增加上下文监控（#2666）。开发者正致力于让 CodeWhale 的 Token 消耗对标甚至优于竞品 Codex。

-   **工作流自动化与权限管理**：
    用户不再满足于简单的“自动/手动”模式，而是需要更细粒度的权限控制。持久化权限规则（#1186, #3632）和基于角色的自动装备（#3205）成为开发重点。

-   **架构性能提升**：
    用户对 Node.js 运行时的性能瓶颈表示担忧（#3541），呼唤 Rust 原生运行时以获得更低延迟和更好的多任务处理能力。同时，项目正在进行大规模的代码清理和死代码移除（#3587）。

## 6. 开发者关注点

-   **迁移风险**：随着 v0.8.65 的发布，所有依赖旧包名 `deepseek-tui` 的 CI/CD 脚本需立即更新，否则将无法获取更新。
-   **模式切换可靠性**：Plan 模式意外执行操作（#3568）是极易导致代码事故的缺陷，建议开发者在关键操作前检查 Metadata 中的模式策略。
-   **UI 细节体验**：终端 IME 输入光标错位（#3635）和审批弹窗遮挡内容（#3466）虽非致命 Bug，但严重影响日常使用体验，值得前端开发者关注。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*