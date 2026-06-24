# AI CLI 工具社区动态日报 2026-06-24

> 生成时间: 2026-06-24 03:50 UTC | 覆盖工具: 8 个

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

# AI CLI 工具生态横向对比分析报告 (2026-06-24)

## 1. 生态全景
AI CLI 工具正从单一的代码辅助工具向**自主 Agent 平台**演进，MCP（模型上下文协议）已成为连接外部工具的事实标准。跨平台兼容性挑战凸显，原生二进制化在提升性能的同时引发了 Android/Termux 和 WSL 等非标准环境的适配危机。此外，**隐形资源消耗**（如 SSD 写入损耗、Token 逃逸）和**Agent 可控性**（如沙箱安全与自动执行的冲突）成为企业级落地的新痛点。

## 2. 各工具活跃度对比

| 工具名称 | Issues 热度 | PR 活跃度 | 版本动态 | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenAI Codex** | 极高 (SSD损耗、系统崩溃) | 极高 (10+ PRs, 架构解耦) | 8个Alpha版 (高频迭代) | 性能危机、架构重构 |
| **Claude Code** | 高 (移动端不可用、Token消耗) | 低 (少量安全更新) | v2.1.187 (沙箱增强) | 平台兼容、成本控制 |
| **Gemini CLI** | 高 (Agent假死、状态误报) | 高 (安全补丁、CI修复) | 发布失败 (CI故障) | Agent可靠性、安全加固 |
| **GitHub Copilot CLI**| 中高 (WSL回归、计费争议) | 低 (1个 PR) | v1.0.64 (权限/计费) | 用户体验、计费透明 |
| **DeepSeek TUI** | 中 (多模型路由、UI冻结) | 极高 (15+ PRs, Fleet架构) | 无发布 | 多模型支持、Fleet架构 |
| **Qwen Code** | 中高 (Daemon提案、语音) | 高 (浏览器扩展、Daemon) | v0.19.1 (MCP增强) | 服务化、语音交互 |
| **OpenCode** | 中 (内存泄漏、DB支持) | 中高 (桌面端优化) | 无发布 | 稳定性、扩展性 |
| **Kimi Code CLI** | 低 (计费争议) | 无 (无更新) | 无发布 | 计费模型争议 |

## 3. 共同关注的功能方向

-   **Agent 自主性与可靠性**
    多个工具社区均在抱怨 Agent "假死"、"误报成功"或"无限挂起"。
    -   **Gemini CLI**: Subagent 达到步数限制却误报 Success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))。
    -   **Kimi Code**: YOLO 模式下仍频繁阻断请求批准 ([#2448](https://github.com/MoonshotAI/kimi-cli/issues/2448))。
    -   **DeepSeek TUI**: YOLO 模式下出现 Turn stalled 卡死 ([#2487](https://github.com/Hmbown/CodeWhale/issues/2487))。

-   **资源消耗与隐形成本**
    开发者对后台资源占用的敏感度急剧上升。
    -   **OpenAI Codex**: SQLite 日志异常写入导致年写入量达 640 TB，威胁 SSD 寿命 ([#28224](https://github.com/openai/codex/issues/28224))。
    -   **Claude Code**: 自动压缩机制导致数百万 Token 浪费，且存在重复计费嫌疑 ([#70459](https://github.com/anthropics/claude-code/issues/70459))。
    -   **Kimi Code**: K2.6 模型思维链导致 Token 消耗远超预期，可用次数缩水 ([#1994](https://github.com/MoonshotAI/kimi-cli/issues/1994))。

-   **安全边界的重构**
    随着自动化程度提高，工具正加强防御机制。
    -   **Claude Code**: 新增沙箱凭证隔离，防止敏感信息泄露。
    -   **Qwen Code**: 讨论拦截破坏性 Git 命令 (如 `git reset --hard`) ([#5749](https://github.com/QwenLM/qwen-code/issues/5749))。
    -   **Gemini CLI**: 修复 OAuth SSRF 漏洞及工作流伪造漏洞。

## 4. 差异化定位分析

-   **OpenAI Codex**：**Rust 重构与性能激进派**。正经历高频的架构解耦（Core 与 App Server 分离），意图构建更底层的性能优势，但当前版本引发了严重的硬件损耗争议，适合追求极致性能但愿意承担不稳定风险的用户。
-   **Claude Code**：**企业治理与安全优先**。重点发力于沙箱隔离和组织级模型限制，是最注重合规与数据安全的 CLI 工具，但受限于原生二进制依赖，跨平台兼容性（移动端/旧架构）目前最差。
-   **Qwen Code**：**服务化与多端融合**。率先提出 Daemon 守护进程架构，试图将 CLI 转变为常驻后台服务，以支持浏览器扩展和语音听写，在多模态交互和长时运行任务上领先。
-   **DeepSeek TUI (CodeWhale)**：**多模型路由与 Fleet 架构**。致力于构建支持多提供商（如 GLM-5.2）的路由层和子代理（Fleet）系统，强调开源生态的灵活性和本地化模型支持。
-   **GitHub Copilot CLI**：**商业化与集成体验**。专注于计费透明度和 IDE 集成，但在 WSL 和 Windows 平台存在严重的回归问题，目前处于功能迭代平稳期，重点在于商业化落地的细节打磨。

## 5. 社区热度与成熟度

-   **高活跃度 & 高风险区**：**OpenAI Codex**。社区对资源占用的投诉（SSD 损耗）极其强烈，虽然修复迅速，但暴露了底层架构调整期的阵痛。
-   **高活跃度 & 稳健迭代区**：**Claude Code** 和 **Qwen Code**。前者在企业功能上稳健推进，后者在架构创新上引领潮流。
-   **活跃度较低 & 转型期**：**Kimi Code CLI**。社区活跃度极低，且负面反馈集中在核心计费模型与实际体验的落差上，需警惕用户流失风险。
-   **重度重构区**：**Gemini CLI** 和 **DeepSeek TUI**。均在重构核心执行层（Gemini 的 Agent 状态机，DeepSeek 的路由架构），处于"痛并快乐着"的开发阶段。

## 6. 值得关注的趋势信号

1.  **从 CLI 到 Daemon 的架构跃迁**
    Qwen Code 提出的 Daemon 提案 ([#5768](https://github.com/QwenLM/qwen-code/issues/5768)) 指明了未来方向：CLI 不再仅仅是命令行工具，而是常驻后台的 Agent 服务进程。这将直接打通浏览器、桌面端和定时任务的壁垒。

2.  **“隐形损耗”引发信任危机**
    OpenAI Codex 的 SSD 磨损问题 和 Claude Code 的 Token 逃逸问题 揭示了一个新趋势：开发者开始通过系统级监控工具（如 `iotop`）审计 AI 工具的资源消耗。**资源透明度**将成为未来工具竞争的关键指标。

3.  **Agent 状态管理的“黑洞”**
    Gemini 和 Kimi 的 Issues 显示，Agent 在长链路执行中的状态同步极不可靠（假死、误报）。未来竞争的重点将从"模型推理能力"下沉到"任务编排的可靠性"，谁能解决 Agent 的确定性执行，谁就能赢得企业级市场。

4.  **平台碎片化的代价**
    随着 Windows ARM、WSL、Android/Termux 等环境的普及，过度依赖原生二进制的工具遭遇了严重的兼容性滑铁卢。建议开发团队重新评估 **JavaScript/Go 等跨平台语言的回退方案**，而非一味追求原生性能。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告 (2026-06-24)

基于 `anthropics/skills` 官方仓库的 Pull Requests 与 Issues 数据，以下是社区最新动态分析。

## 1. 热门 Skills 排行

本榜单综合 PR 评论热度与功能影响力，筛选出社区最关注的提交。

1.  **[核心修复] skill-creator 评估工具修复 (PR #1298)**
    *   **功能**：修复 `run_eval.py` 始终报告召回率为 0% 的严重 Bug，涉及 Windows 流读取、触发检测及并行工作器修复。
    *   **热点**：这是目前最活跃的 PR，直接关系到 Skill 描述词优化循环是否有效运行，解决了 #556 等多个独立复现的阻断性问题。
    *   **状态**：Open
    *   **链接**：[anthropics/skills PR #1298](https://github.com/anthropics/skills/pull/1298)

2.  **[新增功能] document-typography 排版质量控制 (PR #514)**
    *   **功能**：解决 AI 生成文档中的排版痛点，如孤行、寡行及编号错位问题。
    *   **热点**：直击文档生成类 Skill 的通用痛点，具有极高的实用价值，用户普遍关注生成文档的专业度。
    *   **状态**：Open
    *   **链接**：[anthropics/skills PR #514](https://github.com/anthropics/skills/pull/514)

3.  **[新增功能] ODT (OpenDocument) 技能支持 (PR #486)**
    *   **功能**：支持创建、填充及转换 ODT/ODS 文件，补齐了开源文档格式的支持短板。
    *   **热点**：响应了社区对非 Microsoft 格式的需求，特别是 LibreOffice 用户群体的强烈诉求。
    *   **状态**：Open
    *   **链接**：[anthropics/skills PR #486](https://github.com/anthropics/skills/pull/486)

4.  **[新增功能] Skill 质量与安全分析器 (PR #83)**
    *   **功能**：引入 `skill-quality-analyzer` 和 `skill-security-analyzer` 两个元技能，用于评估 Skill 的结构、文档质量及安全风险。
    *   **热点**：标志着社区开始重视 Skill 本身的工程化标准与安全性，是生态成熟化的重要标志。
    *   **状态**：Open
    *   **链接**：[anthropics/skills PR #83](https://github.com/anthropics/skills/pull/83)

5.  **[改进] Frontend-design 技能优化 (PR #210)**
    *   **功能**：重构 frontend-design skill，提高指令的可执行性与清晰度。
    *   **热点**：开发者对原有模糊指令的修正，旨在减少 Claude 在前端开发中的理解歧义。
    *   **状态**：Open
    *   **链接**：[anthropics/skills PR #210](https://github.com/anthropics/skills/pull/210)

6.  **[新增功能] AppDeploy 一键部署技能 (PR #360)**
    *   **功能**：集成 AppDeploy.ai，允许 Claude 直接部署全栈 Web 应用并管理生命周期。
    *   **热点**：拓展了 Claude Code 的边界，从“写代码”延伸到“交付运行”，极具 DevOps 价值。
    *   **状态**：Open
    *   **链接**：[anthropics/skills PR #360](https://github.com/anthropics/skills/pull/360)

## 2. 社区需求趋势

从 Issues 讨论中提炼出以下核心需求方向：

*   **企业级协作与共享机制**
    社区强烈呼吁支持组织内的 Skill 共享库 (#228)。目前通过文件手动分发的方式效率低下，企业用户急需基于组织架构的权限管理与一键部署功能。

*   **Skill 测试与评估工具链稳定性**
    开发者对 `skill-creator` 的自动化评估脚本依赖度高，但频繁遭遇 Windows 兼容性 (#1061)、编码错误 (#362) 及评估失效 (#556) 问题。社区正致力于修复底层工具链，以支撑 Skill 的自动化迭代优化。

*   **安全性与命名空间治理**
    Issue #492 指出社区 Skill 滥用 `anthropic/` 命名空间导致信任边界模糊。用户需要更明确的官方/社区认证机制，以及针对 Agent 系统的治理与审计 Skill (#412)。

*   **跨平台与协议互通**
    用户希望 Skills 能支持 AWS Bedrock (#29) 或转化为 MCP (Model Context Protocol) 接口 (#16)，显示出将 Claude Code 能力标准化、跨平台复用的强烈意愿。

## 3. 高潜力待合并 Skills

以下 PR 虽未合并，但针对性强、修复关键问题或功能完善，建议密切关注：

*   **[Critical] 修复 Windows 兼容性与评估脚本的严重 Bug (PR #1323 & PR #1298)**
    这一系列 PR 修复了 `run_eval.py` 无法正确触发 Skill 检测的致命问题。这是 Skill 开发者的核心工具，预计将被优先合并。
    *   链接：[PR #1298](https://github.com/anthropics/skills/pull/1298), [PR #1323](https://github.com/anthropics/skills/pull/1323)

*   **[Feature] 记忆持久化技能 shodh-memory (PR #154)**
    为 AI Agent 提供跨会话的持久化上下文记忆能力。解决了当前 Claude 会话状态丢失的问题，对长周期任务至关重要。
    *   链接：[PR #154](https://github.com/anthropics/skills/pull/154)

*   **[Feature] 代码库审计技能 codebase-inventory-audit (PR #147)**
    提供系统化的代码清理与文档审计工作流，输出唯一的代码状态报告。适合大型遗留项目重构，需求刚性。
    *   链接：[PR #147](https://github.com/anthropics/skills/pull/147)

## 4. Skills 生态洞察

**当前社区在 Skills 层面最集中的诉求是：从“功能实现”转向“工程化治理”，迫切需要解决评估工具链的可靠性、企业级共享机制以及安全性边界问题。**

---

# Claude Code 社区动态日报 (2026-06-24)

## 1. 今日速览
Claude Code 今日发布了 **v2.1.187** 版本，重点增强了沙箱环境下的凭证安全隔离，并引入了组织级的模型使用限制功能。社区方面，跨平台兼容性问题持续发酵，Android/Termux 用户因原生二进制依赖问题面临工具不可用的困境，同时 iOS 远程控制功能的崩溃问题也成为讨论焦点。此外，自动压缩机制导致的 Token 消耗异常引发了开发者对成本控制的高度关注。

## 2. 版本发布
**v2.1.187**
- **沙箱安全性增强**：新增 `sandbox.credentials` 设置，阻止沙箱化命令读取凭证文件和敏感环境变量，防止敏感信息泄露。
- **企业治理功能**：在模型选择器、`--model` 参数、`/model` 命令及 `ANTHROPIC_MODEL` 环境变量中增加了组织配置的模型限制，符合企业合规需求。

## 3. 社区热点 Issues (Top 10)

1.  **[重大回归] Android/Termux 平台不可用 (v2.1.113+)**
    - **链接**：[#50270](https://github.com/anthropics/claude-code/issues/50270)
    - **简评**：自 v2.1.113 起，CLI 切换至原生 glibc 二进制文件，导致 Android/Termux 用户无法启动（缺少 JS 回退机制）。该 Issue 已累积 59 条评论和 51 个点赞，是当前社区最痛点的跨平台兼容性问题。

2.  **[高热度] Advisor 触发时 API 无响应错误**
    - **链接**：[#69238](https://github.com/anthropics/claude-code/issues/69238)
    - **简评**：在使用 Sonnet 并触发 Opus Advisor 时频繁出现 "No response from API" 错误。该问题影响工作流连续性，已获 33 个点赞，显示其普遍性。

3.  **[严重 Bug] 自动压缩 导致数百万 Token 浪费**
    - **链接**：[#70459](https://github.com/anthropics/claude-code/issues/70459)
    - **简评**：用户报告自动压缩功能存在严重缺陷，不仅保留了过时的预计算摘要（约 20 万 tokens），还反复以"创建缓存"而非"读取缓存"模式计费，导致成本异常飙升。

4.  **[功能请求] 原生支持 Mermaid 图表渲染**
    - **链接**：[#14375](https://github.com/anthropics/claude-code/issues/14375)
    - **简评**：社区强烈希望在输出中直接渲染 Mermaid 图表，以便更好地可视化代码结构和流程图。该请求已获得 38 个点赞。

5.  **[崩溃] iOS App 远程控制会话导致主线程栈溢出**
    - **链接**：[#70165](https://github.com/anthropics/claude-code/issues/70165)
    - **简评**：iOS 最新版 App 在打开远程控制会话时发生硬崩溃，涉及 Swift KeyPath 元数据栈溢出，严重影响移动端用户的使用。

6.  **[兼容性] Windows ARM64 (Snapdragon X) Cowork 功能失效**
    - **链接**：[#50674](https://github.com/anthropics/claude-code/issues/50674)
    - **简评**：尽管通过了就绪检查，但在 Windows ARM64 设备上 Cowork 功能依然失败，阻碍了新硬件平台用户的协作功能使用。

7.  **[回归问题] Chrome MCP 工具导航拦截**
    - **链接**：[#43255](https://github.com/anthropics/claude-code/issues/43255)
    - **简评**：Chrome 扩展中的 MCP 工具错误地拦截了所有域名的导航，报错 "Navigation to this domain is not allowed"，导致浏览器自动化功能瘫痪。

8.  **[网络稳定性] 间歇性 "No Response from API" 错误**
    - **链接**：[#69538](https://github.com/anthropics/claude-code/issues/69538)
    - **简评**：自 6 月 17 日以来，大量用户报告间歇性 API 无响应，需自动重试，显著降低了交互效率。另有类似反馈见 [#69660](https://github.com/anthropics/claude-code/issues/69660)。

9.  **[架构限制] 浏览器自动化工具 与沙箱代理冲突**
    - **链接**：[#11791](https://github.com/anthropics/claude-code/issues/11791)
    - **简评**：由于 Web 沙箱代理不支持 HTTPS CONNECT 隧道，Playwright/Puppeteer 等工具无法运行。社区呼吁文档明确说明此限制，以免用户浪费时间排查。

10. **[功能请求] 统一 CLI 国际化 (i18n) 支持**
    - **链接**：[#70490](https://github.com/anthropics/claude-code/issues/70490)
    - **简评**：开发者提议统一 CLI 的多语言支持架构，整合目前分散的西班牙语、葡萄牙语等本地化请求。

## 4. 重要 PR 进展

过去 24 小时内更新的 PR 数量较少，重点关注以下长期贡献：

1.  **[插件] Web4 治理插件**
    - **链接**：[#20448](https://github.com/anthropics/claude-code/pull/20448)
    - **内容**：引入 Web4 治理插件，支持 R6 工作流、T3 信任张量和实体见证，旨在为 AI Agent 时代提供可验证的责任追溯能力。

## 5. 功能需求趋势

- **跨平台兼容性**：随着 Windows ARM 和移动端用户的增加，社区对原生二进制文件的兼容性诉求强烈，特别是针对非标准 Linux 环境（如 Termux）的支持。
- **成本控制与透明度**：自动压缩和后台 Agent 的 Token 消耗机制成为关注焦点，开发者希望有更精细的成本控制和日志审计，避免无效 Token 燃烧。
- **可视化与交互体验**：对 Mermaid 图表渲染、UI 本地化（i18n）以及无障碍访问 的需求日益增长。
- **沙箱与自动化**：用户试图在沙箱环境中运行更复杂的浏览器自动化任务，但受到现有安全代理架构的限制，急需更灵活的解决方案。

## 6. 开发者关注点

- **原生二进制迁移的副作用**：从 JS 到原生 Binary 的迁移虽然提升了性能，但破坏了 Android/Termux 等非标准环境的兼容性，开发者呼吁提供 JS 回退方案。
- **凭证安全与沙箱隔离**：新版本中的 `sandbox.credentials` 功能受到欢迎，但如何在保障安全的同时允许必要的自动化操作（如浏览器测试）成为新的痛点。
- **API 稳定性**：近期频繁出现的 "No response from API" 错误让开发者对网络层的健壮性产生质疑，希望能优化重试逻辑或提供更明确的错误上下文。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# 2026-06-24 OpenAI Codex 社区动态日报

## 1. 今日速览
OpenAI Codex 团队今日在 Rust 核心层面进行了高频迭代，一日内发布了 8 个 Alpha 版本（v0.143.0-alpha.4 至 .13），同时提交了大量架构解耦相关的 PR。社区方面，桌面端的性能问题持续发酵，特别是关于 SQLite 日志过度写入导致 SSD 损耗的严重 Bug 已确认修复。此外，macOS 系统策略守护进程资源耗尽和 Windows 平台的兼容性问题仍是用户投诉的焦点。

## 2. 版本发布
过去 24 小时内发布了 **8 个** Rust Alpha 版本：
- **v0.143.0-alpha.13** 至 **v0.143.0-alpha.4**
- **点评**：极高的发版频率表明 Codex 核心正在经历快速的功能迭代或重构验证，建议开发者关注后续稳定版的发布说明。

## 3. 社区热点 Issues (Top 10)

1.  **[性能/严重] Codex SQLite 反馈日志可写入约 640 TB/年，迅速消耗 SSD 寿命**
    - **链接**: [Issue #28224](https://github.com/openai/codex/issues/28224)
    - **点评**: 极高热度（👍 335）。用户反馈日志写入量惊人，可能导致硬件过早损坏。作者已确认通过 3 个 PR 修复了 85% 的冗余日志，问题已关闭。这是今日最严重的生产环境影响问题。

2.  **[macOS/系统] macOS Codex 重启循环耗尽 syspolicyd 文件描述符并阻止应用启动**
    - **链接**: [Issue #25243](https://github.com/openai/codex/issues/25243)
    - **点评**: 这是一个严重的系统级 Bug，会导致 macOS 系统策略守护进程崩溃，进而影响其他应用的启动。Pro 用户反馈强烈，尚未解决。

3.  **[Windows/兼容] Codex APP (Windows) 无法打开 JetBrains IDEA**
    - **链接**: [Issue #13937](https://github.com/openai/codex/issues/13937)
    - **点评**: 长期存在的集成问题，影响开发者核心工作流，评论数持续增加。

4.  **[macOS/性能] Codex Desktop 在 macOS 上触发持续的 syspolicyd/trustd CPU 峰值**
    - **链接**: [Issue #16767](https://github.com/openai/codex/issues/16767)
    - **点评**: 影响系统性能，CPU 占用异常，可能与 macOS 的安全策略检查机制冲突有关。

5.  **[CLI/回归] macOS 26 Intel 版本在工具调用时触发 SIGTRAP 崩溃 (v0.141.0 回归)**
    - **链接**: [Issue #29047](https://github.com/openai/codex/issues/29047)
    - **点评**: 严重阻碍了 Intel Mac 用户的 CLI 使用，已确认是 v0.141.0 引入的回归问题，V8 引擎初始化失败。

6.  **[服务/容量] 模型处于容量状态，请求失败**
    - **链接**: [Issue #28515](https://github.com/openai/codex/issues/28515)
    - **点评**: 用户在使用 GPT-5.5 xhigh 模型时频繁遇到容量限制，影响服务可用性。

7.  **[Windows/沙盒] Windows 沙盒设置失败："找不到指定的模块"**
    - **链接**: [Issue #29418](https://github.com/openai/codex/issues/29418)
    - **点评**: 阻碍了 Windows 用户使用沙盒隔离功能进行安全执行。

8.  **[Windows/存储] Windows 版在含中文用户路径下反复创建运行时目录填满磁盘**
    - **链接**: [Issue #28258](https://github.com/openai/codex/issues/28258)
    - **点评**: 典型的本地化路径处理 Bug，可能导致磁盘空间迅速耗尽，已关闭但值得观察修复效果。

9.  **[macOS/性能] Codex Desktop 导致 Apple Silicon Mac 高 CPU 使用率和过热**
    - **链接**: [Issue #29374](https://github.com/openai/codex/issues/29374)
    - **点评**: 新报告的问题，影响硬件性能和续航。

10. **[功能请求] 允许关闭 Steer 功能**
    - **链接**: [Issue #16015](https://github.com/openai/codex/issues/16015)
    - **点评**: 用户对 UI 交互细节的反馈，希望能灵活控制会话引导功能。

## 4. 重要 PR 进展 (Top 10)

1.  **[安全性] 隔离插件同步 Git 环境**
    - **链接**: [PR #29785](https://github.com/openai/codex/pull/29785)
    - **内容**: 修复了一个可能导致用户数据丢失（如文件被删除、分支重置）的严重 Bug。现在插件同步过程将在隔离的 Git 环境变量下运行，防止污染用户仓库。

2.  **[架构重构] 将配置层来源类型移至 `codex-config`**
    - **链接**: [PR #29722](https://github.com/openai/codex/pull/29722)
    - **内容**: 将 `ConfigLayer` 等类型从 `app-server` 迁移到 `codex-config` crate，旨在解除核心逻辑对服务器端 wire API 的依赖。

3.  **[架构重构] 独立 Turn 生命周期重放逻辑**
    - **链接**: [PR #29725](https://github.com/openai/codex/pull/29725)
    - **内容**: 解耦历史回放逻辑，使得核心模块在不依赖 app-server 的情况下也能处理会话恢复和分叉。

4.  **[网络/安全] 集成实验性凭证代理**
    - **链接**: [PR #29752](https://github.com/openai/codex/pull/29752)
    - **内容**: 之前的网络代理 PR (#28034) 引入了凭证代理，此 PR 将其集成到 Codex 核心，防止子进程直接继承真实凭证，提升安全性。

5.  **[功能] 支持 Host-authenticated Apps MCP servers**
    - **链接**: [PR #29652](https://github.com/openai/codex/pull/29652)
    - **内容**: 支持 Codex Cloud Agent 注册其 Actor 认证的 MCP 服务器，改进云端代理的集成能力。

6.  **[稳定性] 确保 app-server 监听器在代理前就绪**
    - **链接**: [PR #29778](https://github.com/openai/codex/pull/29778)
    - **内容**: 增加 `--ensure-listener` 模式，防止在 app-server 未准备好时进行代理转发，提升启动稳定性。

7.  **[策略管理] 运行时强制执行 Marketplace 源策略**
    - **链接**: [PR #29691](https://github.com/openai/codex/pull/29691)
    - **内容**: 企业级功能，允许在运行时根据策略过滤和禁用不符合规定的插件源，增强管控能力。

8.  **[功能] 允许 ChatGPT-hosted MCP servers 使用会话认证**
    - **链接**: [PR #29733](https://github.com/openai/codex/pull/29733)
    - **内容**: 明确安全边界，允许由 ChatGPT 托管的 MCP 端点显式使用当前会话凭证。

9.  **[架构重构] 连接器独立 App 元数据类型**
    - **链接**: [PR #29723](https://github.com/openai/codex/pull/29723)
    - **内容**: 进一步的架构解耦，将连接器元数据类型从 app-server DTO 中分离出来，明确依赖方向。

10. **[修复] 在 Linux 上精确归因网络请求**
    - **链接**: [PR #29697](https://github.com/openai/codex/pull/29697)
    - **内容**: 修复了当多个 exec 并发运行时，网络请求无法正确归属到具体执行上下文的问题，改善监控和调试体验。

## 5. 功能需求趋势

1.  **桌面端资源占用的可控性**：社区对 Codex Desktop 的磁盘写入量（SSD 寿命）、CPU/GPU 占用率高度敏感。日志系统的优化（Issue #28224）受到极大欢迎，未来版本需更加注重后台静默行为。
2.  **系统集成的稳定性**：无论是 macOS 的 `syspolicyd` 问题还是 Windows 的路径/IDE 集成问题，都显示出社区迫切需要 Codex 在不同操作系统环境下与原生系统服务更稳定的共存。
3.  **配置与更新的鲁棒性**：Windows 自动更新后配置文件路径失效（Issue #26011）表明，随着版本迭代，迁移逻辑的健壮性成为用户痛点。

## 6. 开发者关注点

1.  **硬件损耗担忧**：日志写入过量问题虽然已修复，但引发了开发者对本地运行 AI Agent 工具资源消耗的警惕。建议开发者升级到最新版本以保护 SSD。
2.  **架构解耦信号**：今日大量的 PR 集中于将核心逻辑（config, rollout, protocol）从 `app-server` 中剥离。这预示着 Codex 可能正在为更好的离线支持、更轻量级的 CLI 或第三方集成做准备，开发者可关注后续 API 变化。
3.  **Intel Mac 兼容性危机**：随着 Apple Silicon 的普及，Intel Mac 上的 CLI 崩溃问题（Issue #29047）提醒开发者，在旧架构硬件上运行最新版本工具可能面临风险，需保留降级方案。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-06-24)

## 1. 今日速览
今日 Gemini CLI 社区动态主要集中在 **Agent 稳定性** 和 **安全性增强**。昨晚构建发布失败，开发者正在紧急修复 CI 流程；社区讨论热点集中在子代理状态误报、通用代理挂起以及工具数量限制等核心问题。此外，多个涉及 OAuth 兼容性和 SSRF 防护的安全补丁正在审核中。

## 2. 版本发布
*   **无新版本发布**。
*   **异常说明**: 原定于今日发布的 `v0.49.0-nightly` 构建失败，主要原因是 npm 认证配置问题，已有 PR (#28116) 正在尝试修复。

## 3. 社区热点 Issues (Top 10)

1.  **[P1] Subagent 在达到最大步数后误报成功** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
    *   **摘要**: `codebase_investigator` 子代理在触达 `MAX_TURNS` 限制中断后，错误地返回 `status: "success"` 和 `Termination Reason: "GOAL"`。这导致上层代理无法感知任务被中断，严重影响任务链的可靠性。
    *   **重要性**: P1 级 Bug，直接破坏 Agent 自动化流程的真实性验证。

2.  **[P1] 通用代理 无限挂起** [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
    *   **摘要**: 当 CLI 调用通用子代理时频繁出现永久挂起，甚至简单的文件夹创建操作也会卡死。
    *   **重要性**: 核心功能不可用，严重影响用户体验，社区反馈强烈（8 👍）。

3.  **[P1] Shell 命令执行后卡在 "Waiting input"** [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
    *   **摘要**: CLI 执行完 Shell 命令后，界面仍显示命令处于活动状态并等待输入，导致会话无法继续。
    *   **重要性**: 基础交互阻塞，影响开发效率。

4.  **[P1] 昨晚构建发布失败** [#28115](https://github.com/google-gemini/gemini-cli/issues/28115)
    *   **摘要**: Nightly Release 工作流在认证阶段报错，导致 v0.49.0 版本未能如期发布。
    *   **重要性**: 阻塞最新特性的交付通道。

5.  **[P2] 工具数量超过 128 个时报 400 错误** [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
    *   **摘要**: 当可用工具超过 128 个时，CLI 直接报错，而非智能筛选或分批处理。
    *   **重要性**: 限制了复杂项目或插件丰富场景下的 Agent 能力上限。

6.  **[P1] Auto Memory 日志中的敏感信息泄露风险** [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)
    *   **摘要**: Auto Memory 功能在提取记忆时会记录技能凭证等敏感信息，且当前的修订机制不够完善。
    *   **重要性**: 安全合规风险，可能导致密钥泄露。

7.  **[P1] CLI 在 Shell 命令确认提示时崩溃** [#14561](https://github.com/google-gemini/gemini-cli/issues/14561)
    *   **摘要**: 当 AI 尝试执行 Shell 命令并弹出用户确认菜单时，CLI 直接崩溃退出。
    *   **重要性**: 严重的基础交互 Bug，导致无法安全执行命令。

8.  **[P2] Browser Agent 在 Wayland 环境下失败** [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
    *   **摘要**: Browser 子代理在 Linux Wayland 显示协议下无法正常工作。
    *   **重要性**: 影响Linux 桌面开发者的浏览器自动化功能。

9.  **[P2] 评估 AST 感知文件读取的价值** [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
    *   **摘要**: 探讨引入 AST（抽象语法树）感知工具，以减少 Token 消耗并提高代码读取的准确性。
    *   **重要性**: 架构层面的优化，有望显著提升 Agent 的代码理解能力。

10. **[P2] Gemini 未能充分调用自定义 Skills 和 Sub-agents** [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
    *   **摘要**: 即使任务与自定义技能高度相关，模型也很少主动调用，往往需要显式指令才会触发。
    *   **重要性**: 影响 Agent 的自主性和智能化水平。

## 4. 重要 PR 进展 (Top 10)

1.  **修复 Nightly Release 认证问题** [#28116](https://github.com/google-gemini/gemini-cli/pull/28116)
    *   **内容**: 针对 Issue #28115，修复了 CI 流程中 npm 认证映射错误的问题，确保 Nightly 版本能够正常发布。

2.  **[Security] 修复工作流伪造漏洞** [#27753](https://github.com/google-gemini/gemini-cli/pull/27753)
    *   **内容**: 修复了 E2E 流水线中的 `workflow_run` 构件投毒漏洞，防止 Fork PR 利用仓库密钥执行恶意代码。已合并。

3.  **[Security] OAuth 发现接口增加 SSRF 防护** [#28112](https://github.com/google-gemini/gemini-cli/pull/28112)
    *   **内容**: 在 OAuth 元数据发现流程中增加了 SSRF 校验，防止通过 MCP 服务器响应进行服务器端请求伪造攻击。

4.  **修复 Node.js 24.17+ OAuth 握手失败** [#28103](https://github.com/google-gemini/gemini-cli/pull/28103)
    *   **内容**: 解决了高版本 Node.js 中 Socket 复用导致的 `ERR_STREAM_PREMATURE_CLOSE` 错误，修复了 Google 登录失败的问题。

5.  **修复 "思维泄露" (Thought Leakage) 问题** [#27971](https://github.com/google-gemini/gemini-cli/pull/27971)
    *   **内容**: 修复了模型内部推理过程泄露到历史记录中，导致后续对话陷入死循环的问题。

6.  **增强敏感路径黑名单** [#27966](https://github.com/google-gemini/gemini-cli/pull/27966)
    *   **内容**: 强制对 `.git`, `.env` 等敏感目录执行不区分大小写的黑名单检查，并修复了相关的 Prompt 注入漏洞。

7.  **MCP 资源解析作用域隔离** [#27964](https://github.com/google-gemini/gemini-cli/pull/27964)
    *   **内容**: 防止不同 MCP 服务器之间的 URI 冲突，避免恶意服务器通过同名 URI 覆盖受信任资源。

8.  **修复无效会话的恢复提示** [#27914](https://github.com/google-gemini/gemini-cli/pull/27914)
    *   **内容**: 当磁盘空间不足导致会话未保存时，CLI 之前仍会提示用户恢复该会话，导致恢复失败。此 PR 移除了误导性提示。

9.  **Cloud Run Webhook 引入服务** [#28015](https://github.com/google-gemini/gemini-cli/pull/28015)
    *   **内容**: 为 Caretaker Agent 实现了 Cloud Run Webhook 服务，用于接收和处理 GitHub Webhooks，提升自动化运维能力。

10. **工具注册表发现机制** [#28113](https://github.com/google-gemini/gemini-cli/pull/28113)
    *   **内容**: 引入了 AST 提取工具名的功能，用于构建评估报告的工具注册表，有助于分析 Agent 的工具调用行为。

## 5. 功能需求趋势
*   **Agent 自主性与可靠性**: 社区强烈要求解决 Agent "假死"、"假成功" 和 "挂起" 问题，对 Agent 执行链路的可靠性关注达到新高。
*   **工具链扩展性**: 随着用户定义更多的 Skills 和 MCP 工具，现有的工具数量限制（>128 error）成为瓶颈，迫切需要更智能的工具筛选机制。
*   **代码理解深度**: 关于 AST 感知工具的讨论表明，开发者希望 CLI 从单纯的"文本处理"转向更精准的"代码语义理解"。

## 6. 开发者关注点
*   **环境兼容性**: 开发者反馈了 Node.js 新版本（24.17+）和 Linux Wayland 环境下的兼容性问题，影响基础功能（登录、浏览器控制）的使用。
*   **安全与隐私**: Auto Memory 的日志记录和 MCP 资源冲突引发了安全担忧，显示出企业级用户对 CLI 安全边界的敏感性增加。
*   **交互卡顿**: 多个 Issue 提到 CLI 在执行 Shell 命令或调用子代理时的 UI 无响应问题，这是当前影响开发体验的最大痛点之一。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-06-24)

## 1. 今日速览
GitHub Copilot CLI 昨日发布了 **v1.0.64** 版本，重点增强了权限透明度与按量计费预算管理。然而，新版本引发了 WSL 启动失败和 Windows 滚动条渲染错位等严重回归问题，社区反馈激烈。此外，Session 状态文件无限堆积导致系统资源耗尽、ACP 认证状态失效以及 UI 线程阻塞等深层架构问题成为开发者关注的新焦点。

## 2. 版本发布
**版本号**: v1.0.64 (发布于 2026-06-23)
**更新要点**:
- **权限透明化**: 路径访问提示现在会显示解析后的符号链接目标，用户可确切看到被授予访问权的具体内容。
- **预算管理优化**: 启动时显示按需付费的额外使用预算；当请求因触及消费限额被拒时会刷新显示，并提供友好的提示信息。

## 3. 社区热点 Issues
以下筛选了 10 个最值得关注的 Issue，涵盖严重的回归错误、计费争议及架构缺陷：

1.  **[v1.0.64 回归] WSL 启动失败** (#3901)
    *   **重要性**: 严重级别回归错误。用户在 Windows 端升级至 1.0.64 后，WSL 环境下的 CLI 无法启动，阻断跨平台开发工作流。
    *   **链接**: [github/copilot-cli Issue #3901](https://github.com/github/copilot-cli/issues/3901)

2.  **[Windows] 滚动条导致文本错位** (#3501)
    *   **重要性**: 高票 Issue (👍 9)。自引入垂直滚动条以来，Windows 控制台出现文本渲染对齐错误，影响核心阅读体验。
    *   **链接**: [github/copilot-cli Issue #3501](https://github.com/github/copilot-cli/issues/3501)

3.  **Session 状态文件堆积导致系统崩溃** (#3892)
    *   **重要性**: 严重资源泄露问题。CLI 不会清理 `~/.copilot/session-state`，大量文件堆积导致 EMFILE 错误（文件描述符耗尽），甚至拖垮 VS Code。
    *   **链接**: [github/copilot-cli Issue #3892](https://github.com/github/copilot-cli/issues/3892)

4.  **Premium 配额计算异常** (#3881)
    *   **重要性**: 计费准确性问题。用户反馈使用 6x 倍率模型时扣除了 5% 的配额而非预期的 2%，引发对计费逻辑的质疑。
    *   **链接**: [github/copilot-cli Issue #3881](https://github.com/github/copilot-cli/issues/3881)

5.  **ACP 模式下认证状态无法刷新** (#3902)
    *   **重要性**: 企业/自动化场景阻断。在 ACP 模式下，即便认证成功，进程内部状态仍停留在未认证，导致自动化流程失效。
    *   **链接**: [github/copilot-cli Issue #3902](https://github.com/github/copilot-cli/issues/3902)

6.  **密钥过滤阻塞 UI 线程** (#3900)
    *   **重要性**: 性能瓶颈。秘密扫描同步运行在 UI 线程，大响应对象会导致 TUI 界面冻结。
    *   **链接**: [github/copilot-cli Issue #3900](https://github.com/github/copilot-cli/issues/3900)

7.  **功能请求：计划任务/周期性提示** (#2056)
    *   **重要性**: 热门功能需求。开发者希望 CLI 能支持定时或触发的自动化 Agent 工作流，而非仅响应手动输入。
    *   **链接**: [github/copilot-cli Issue #2056](https://github.com/github/copilot-cli/issues/2056)

8.  **多账户环境下 Git Push 身份混淆** (#3897)
    *   **重要性**: 权限管理痛点。当存在多个 GitHub 账户（如企业 EMU + 个人）时，CLI 可能选错身份导致 Push 403 错误。
    *   **链接**: [github/copilot-cli Issue #3897](https://github.com/github/copilot-cli/issues/3897)

9.  **深色模式下思考文本不可见** (#3866)
    *   **重要性**: UI 可访问性问题。推理过程中的 "Thinking..." 文本硬编码为深灰色，在深色背景终端下几乎不可见。
    *   **链接**: [github/copilot-cli Issue #3866](https://github.com/github/copilot-cli/issues/3866)

10. **MCP Server 命名冲突无警告** (#3893)
    *   **重要性**: 插件生态问题。不同插件注册同名 MCP Server 时，仅加载最后一个，缺乏冲突警告机制，导致调试困难。
    *   **链接**: [github/copilot-cli Issue #3893](https://github.com/github/copilot-cli/issues/3893)

## 4. 重要 PR 进展
过去 24 小时内仅有 1 个 PR 更新：

1.  **feat: Add initial console log for greeting** (#3873)
    *   **内容**: 添加了初始化时的控制台问候日志。
    *   **状态**: Open
    *   **链接**: [github/copilot-cli PR #3873](https://github.com/github/copilot-cli/pull/3873)

## 5. 功能需求趋势
从近期 Issues 中可提炼出以下核心关注方向：

-   **自动化与 Agent 能力增强**: 社区强烈呼吁将 CLI 从被动交互工具转变为主动的自动化代理，支持计划任务和后台运行。
-   **企业级权限与网络控制**: 针对企业环境的 ReFS 支持、私有网络访问控制及多账户管理的需求日益增加。
-   **计费透明度**: 随着 Premium 模型的引入，用户对配额计算逻辑的透明度和准确性表现出高度敏感。

## 6. 开发者关注点
-   **稳定性回归**: Windows 平台的渲染问题和 WSL 的启动失败是当前最大的痛点，影响了基础开发体验。
-   **性能隐患**: Session 文件句柄泄露和 UI 线程同步阻塞表明底层存在潜在的性能瓶颈，需架构层优化。
-   **跨环境一致性**: ACP 协议集成、插件市场同步及 BYOK (Bring Your Own Key) 模式下的行为一致性是高级用户关注的重点。

---
*数据来源: github.com/github/copilot-cli*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-06-24)

## 1. 今日速览
今日社区活跃度较低，无新版本发布或 PR 更新。讨论焦点主要集中在 **K2.6 模型的 Token 消耗计费争议** 上，用户反馈思维链过长导致实际可用次数远低于官方宣传。此外，有开发者报告 YOLO 模式下存在非预期的交互阻断，影响自动化体验。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues
今日仅有 2 条 Issue 更新，均为未解决的痛点问题，值得重点关注：

1.  **[#1994 kimiCode用量计算有问题](https://github.com/MoonshotAI/kimi-cli/issues/1994)**
    *   **重要原因**：该问题引发了较高关注（👍 7），核心矛盾在于官方宣传的“高频并发”与实际“Token 消耗过快”之间的巨大落差。
    *   **社区反应**：用户指出 K2.6 模型的思维链消耗了大量 Token，导致订阅额度在极少请求下即耗尽，质疑计费逻辑与宣传不符。官方暂未在贴内给出明确解决方案，用户期待更透明的 Token 用量明细。

2.  **[#2448 [bug] Kimi CLI is prompting for approval in yolo mode](https://github.com/MoonshotAI/kimi-cli/issues/2448)**
    *   **重要原因**：影响核心工作流体验。YOLO 模式（全自动模式）本应减少人工干预，此 Bug 导致自动化流程中断。
    *   **社区反应**：用户反馈在 v0.12.0 版本中，即便开启了 YOLO 模式，CLI 仍频繁请求批准，降低了开发效率。

## 4. 重要 PR 进展
过去 24 小时内无活跃的 Pull Request 更新。

## 5. 功能需求趋势
基于今日 Issues 及近期反馈，社区关注点呈现以下趋势：
*   **成本透明化与控制**：随着 K2.6 等强推理模型的使用，开发者对 Token 消耗（特别是思维链部分的隐藏消耗）极为敏感，急需用量预估工具或更明确的计费说明。
*   **自动化模式的稳定性**：开发者依赖 CLI 实现无人值守编码，YOLO 模式下的任何非预期中断都会直接打断工作流，对模式的鲁棒性要求较高。

## 6. 开发者关注点
*   **Token 消耗 "刺客"**：K2.6 模型虽然推理能力强，但其内部思维链带来的 Token 成本不可忽视。开发者普遍认为官方文档中的“支持约 300-1200 次请求”的描述在当前模型行为下具有误导性，呼吁优化计费策略或提供 Token 消耗预估。
*   **工作流连续性**：CLI 工具的核心价值在于提效，YOLO 模式的失效直接打击了用户信任，开发者希望尽快修复阻碍自动化的交互逻辑。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-06-24)

## 1. 今日速览
今日 OpenCode 社区聚焦于稳定性与性能优化，核心开发者 @thdxr 发起了内存问题汇总帖 (#20695)，呼吁社区协助提供堆快照以彻底解决内存泄漏问题。桌面端修复了 WSL 路径转换及会话导航性能问题，同时社区对数据库扩展支持（如 PostgreSQL）及外部工具集成（Diff/Pager）的讨论热度较高。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues

1.  **[OPEN] Memory Megathread** (#20695)
    *   **重要性**：官方发起的内存问题专项治理帖，作者明确指出目前 LLM 生成的修复建议无效，急需社区提供 Heap Snapshots 进行诊断。这是当前优先级最高的稳定性问题。
    *   **链接**：[anomalyco/opencode Issue #20695](https://github.com/anomalyco/opencode/issues/20695)

2.  **[OPEN] Write tool fails silently on large files (~1000+ lines)** (#19604)
    *   **重要性**：核心工具 `Write` 在处理大文件时静默失败，严重影响代码生成任务的可靠性，被标记为 High Impact。
    *   **链接**：[anomalyco/opencode Issue #19604](https://github.com/anomalyco/opencode/issues/19604)

3.  **[OPEN] File path location error in skill** (#18370)
    *   **重要性**：Skill 机制存在路径解析 Bug，导致无法正确读取 Skill 目录内的文件，阻碍了自定义 Skill 的开发与使用。
    *   **链接**：[anomalyco/opencode Issue #18370](https://github.com/anomalyco/opencode/issues/18370)

4.  **[OPEN] @ file mentions do not include files created after startup** (#32747)
    *   **重要性**：影响开发体验的常见问题，新创建的文件无法即时在 `@` 提及功能中索引，需重启应用才能生效。
    *   **链接**：[anomalyco/opencode Issue #32747](https://github.com/anomalyco/opencode/issues/32747)

5.  **[OPEN] [FEATURE]: Support more DBMS' for OpenCode state storage** (#14212)
    *   **重要性**：随着迁移至 Drizzle，社区强烈希望支持 PostgreSQL 等更多数据库作为状态存储后端，以适应企业级部署需求。
    *   **链接**：[anomalyco/opencode Issue #14212](https://github.com/anomalyco/opencode/issues/14212)

6.  **[OPEN] Desktop v1.16.0 converts WSL /mnt/c/... workspace to Windows C:\... path** (#30895)
    *   **重要性**：影响 WSL 用户的严重 Bug，桌面端路径转换错误导致文件列表和会话中断。
    *   **链接**：[anomalyco/opencode Issue #30895](https://github.com/anomalyco/opencode/issues/30895)

7.  **[OPEN] OpenCode Go Performance is abysmal** (#17173)
    *   **重要性**：用户反馈 OpenCode Go 订阅服务在调用工具时代理启动和响应极慢，影响付费用户体验。
    *   **链接**：[anomalyco/opencode Issue #17173](https://github.com/anomalyco/opencode/issues/17173)

8.  **[OPEN] [FEATURE]: support configurable external diff, pager, and Markdown renderer tools** (#33581)
    *   **重要性**：开发者希望集成 `delta`、`bat` 等外部工具，提升 Diff 查看和文档渲染的可定制性。
    *   **链接**：[anomalyco/opencode Issue #33581](https://github.com/anomalyco/opencode/issues/33581)

9.  **[OPEN] [Bug] opencode session freezes after macOS lock screen** (#15431)
    *   **重要性**：macOS 平台特有问题，长时间锁屏后会导致会话卡死，UI 无响应。
    *   **链接**：[anomalyco/opencode Issue #15431](https://github.com/anomalyco/opencode/issues/15431)

10. **[OPEN] [FEATURE]: Add `/export` to desktop app** (#31453)
    *   **重要性**：桌面端功能缺失，用户无法像 TUI 一样导出 Markdown 格式的会话记录。
    *   **链接**：[anomalyco/opencode Issue #31453](https://github.com/anomalyco/opencode/issues/31453)

## 4. 重要 PR 进展

1.  **[OPEN] feat(cli): add standalone v2 session flow** (#33281)
    *   **内容**：引入 `--standalone` 模式，通过 V2 API 运行经过认证的私有服务器子进程，重构了会话数据加载机制。
    *   **链接**：[anomalyco/opencode PR #33281](https://github.com/anomalyco/opencode/pull/33281)

2.  **[OPEN] feat: LLM command-approval classifier (auto mode)** (#33586)
    *   **内容**：提出使用 LLM 分类器来自动审批工具调用命令，旨在平衡自动化操作与安全性，目前处于 Draft 阶段等待设计审查。
    *   **链接**：[anomalyco/opencode PR #33586](https://github.com/anomalyco/opencode/pull/33586)

3.  **[OPEN] feat: add MCP Apps support for rich iframe UIs** (#15926)
    *   **内容**：支持 MCP 服务器在沙箱化 iframe 中渲染交互式 UI，允许通过 `_meta.ui.visibility` 控制工具可见性，增强 MCP 生态能力。
    *   **链接**：[anomalyco/opencode PR #15926](https://github.com/anomalyco/opencode/pull/15926)

4.  **[OPEN] fix(skill): emit base directory as filesystem path, not file:// URL** (#33580)
    *   **内容**：修复 Skill 工具将路径错误编码为 `file://` URL 的问题，直接返回文件系统路径，解决了 #18370 中的路径解析错误。
    *   **链接**：[anomalyco/opencode PR #33580](https://github.com/anomalyco/opencode/pull/33580)

5.  **[OPEN] [beta] fix(app): make session navigation stable and fast** (#33569)
    *   **内容**：优化桌面端会话导航体验，通过保留前一个会话画面和预加载路由模块，减少冷启动加载时间和白屏现象。
    *   **链接**：[anomalyco/opencode PR #33569](https://github.com/anomalyco/opencode/pull/33569)

6.  **[CLOSED] feat(opencode): add linux_clipboard_selection config** (#29967)
    *   **内容**：增加了对 Linux X11 PRIMARY 缓冲区的支持，允许用户直接使用鼠标选中即复制的功能。
    *   **链接**：[anomalyco/opencode PR #29967](https://github.com/anomalyco/opencode/pull/29967)

7.  **[CLOSED] fix(tui): sort model picker by release date** (#33558)
    *   **内容**：优化 TUI 模型选择器排序逻辑，优先展示收藏和最新发布的模型，改善模型切换体验。
    *   **链接**：[anomalyco/opencode PR #33558](https://github.com/anomalyco/opencode/pull/33558)

8.  **[CLOSED] fix(app): route new sessions through tabs** (#33582)
    *   **内容**：修复桌面端从主页创建新会话时的路由逻辑，统一通过标签页系统管理，避免状态不同步。
    *   **链接**：[anomalyco/opencode PR #33582](https://github.com/anomalyco/opencode/pull/33582)

9.  **[OPEN] feat(opencode): Message logger** (#32381)
    *   **内容**：引入消息日志记录功能，旨在增强调试能力和会话状态的可观测性。
    *   **链接**：[anomalyco/opencode PR #32381](https://github.com/anomalyco/opencode/pull/32381)

10. **[CLOSED] fix(app): throttle directory tree loading** (#33576)
    *   **内容**：限制目录树加载的并发请求数（最多3个），防止在打开大型项目时前端卡顿。
    *   **链接**：[anomalyco/opencode PR #33576](https://github.com/anomalyco/opencode/pull/33576)

## 5. 功能需求趋势

*   **存储与扩展性**：随着 Issue #14212 的讨论，社区对 OpenCode 支持外部数据库（如 PostgreSQL）的需求日益强烈，希望摆脱对文件系统或默认 SQLite 的依赖。
*   **工具链集成**：开发者倾向于更强的本地工具集成能力，如支持外部 Diff 工具（delta）、Pager（bat）和 Markdown 渲染器 (#33581)。
*   **桌面端功能对齐**：桌面端用户持续要求 TUI 已有的功能，如会话导出 (#31453) 和更精细的快捷键设置 (#33568)。
*   **MCP 生态增强**：通过 MCP Apps 支持富媒体 UI (#15926) 显示出将 OpenCode 打造为更通用 Agent 平台的趋势。

## 6. 开发者关注点

*   **内存稳定性**：内存泄漏是目前社区反馈最集中的痛点，官方已明确表示需要社区协助提供诊断数据。
*   **大文件处理可靠性**：`Write` 工具在处理千行以上大文件时的静默失败 (#19604) 是工作流中的主要阻碍。
*   **平台特定体验**：WSL 路径处理 (#30895) 和 Linux 剪贴板支持 (#29967) 表明跨平台兼容性仍是开发重点。
*   **安全性自动化**：关于工具调用自动审批的 PR (#33586) 引发了关于如何安全地让 Agent 自主执行命令的思考，开发者希望在便利性与安全性之间找到平衡。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-06-24)

## 1. 今日速览
Qwen Code 今日发布了 **v0.19.1 正式版**，重点增强了 MCP 资源发现能力。社区目前最热烈的讨论集中在**架构层面的“Daemon 守护进程”提案**，旨在支持后台任务、浏览器扩展集成及长时运行的服务。此外，针对语音听写、本地 LLM 缓存优化以及 UI 一致性的改进也是今日的焦点。

## 2. 版本发布
- **v0.19.1**
  - **MCP 增强**：支持按名称匹配 MCP 资源补全，并优化了服务器发现机制 ([PR #5733](https://github.com/QwenLM/qwen-code/pull/5733))。
  - 链接：[Release v0.19.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.1)

## 3. 社区热点 Issues
以下是今日最受关注的 10 个 Issue，涵盖了架构讨论、性能优化和用户体验改进：

1.  **[架构讨论] Protocol / AuthType Decoupling** ([#5758](https://github.com/QwenLM/qwen-code/issues/5758))
    - **重要性**：核心架构讨论。提出将 `providerId` 与协议解耦，以解决 CLI 与 VSCode/ACP 之间配置不兼容的问题，对自定义模型接入影响重大。
2.  **[功能请求] 定时任务宿主：引入 qwen daemon** ([#5768](https://github.com/QwenLM/qwen-code/issues/5768))
    - **重要性**：高优先级提案。建议引入可选的常驻后台进程，支持定时任务、自定步循环及 Chrome 扩展的持久化连接。
3.  **[性能问题] 本地 LLM 频繁触发全量 Prompt 重处理** ([#5736](https://github.com/QwenLM/qwen-code/issues/5763))
    - **重要性**：影响本地模型用户体验。用户反馈近期更新导致 llama.cpp 频繁进行全量 prompt 重处理，效率下降。
4.  **[功能提案] 复活 Chrome 扩展** ([#5626](https://github.com/QwenLM/qwen-code/issues/5626))
    - **重要性**：集成方向。提议基于 Daemon + WebUI 架构重新启用并增强 Chrome 扩展，实现浏览器侧的深度集成。
5.  **[安全性] 自动模式下增加破坏性 Git 命令的拦截** ([#5749](https://github.com/QwenLM/qwen-code/issues/5749))
    - **重要性**：核心安全。请求在代码层面硬编码拦截 `git reset --hard` 等破坏性命令，防止 Agent 自动执行导致数据丢失。
6.  **[用户体验] 为新用户默认启用内置状态栏** ([#5789](https://github.com/QwenLM/qwen-code/issues/5789))
    - **重要性**：新用户引导。建议默认显示模型、Git 分支等信息，降低新用户发现 `/statusline` 命令的成本。
7.  **[功能请求] Web Shell 与桌面端支持语音听写** ([#5796](https://github.com/QwenLM/qwen-code/issues/5796))
    - **重要性**：多端体验一致性。请求将目前仅 CLI 支持的语音输入功能扩展到 Web Shell 和桌面端。
8.  **[安全性] WebFetch 应拒绝包含 userinfo 的 URL** ([#5782](https://github.com/QwenLM/qwen-code/issues/5782))
    - **重要性**：安全修复。防止 URL 中嵌入的用户名密码泄露到日志或诊断界面。
9.  **[功能请求] llama.cpp slot state 缓存优化** ([#5760](https://github.com/QwenLM/qwen-code/issues/5760))
    - **重要性**：性能优化。提议利用 llama.cpp 的 slot state save/restore 替代文本压缩，彻底消除上下文压缩后的 re-prefill 开销。
10. **[开发者体验] Worktree node_modules 智能符号链接** ([#5790](https://github.com/QwenLM/qwen-code/issues/5790))
    - **重要性**：工程效率。建议根据依赖变更情况智能决定是否共享 node_modules，平衡磁盘空间与隔离性。

## 4. 重要 PR 进展
以下是今日值得关注的 10 个 Pull Request，涉及核心功能与体验优化：

1.  **feat(browser-ext): 基于 Daemon 架构复活 Chrome 扩展** ([#5777](https://github.com/QwenLM/qwen-code/pull/5777))
    - 抛弃了 Native Messaging 方案，改为连接本地 `qwen serve` Daemon，实现更轻量的浏览器集成。
2.  **feat: 添加 `qwen update` 和 `/update` 自动更新命令** ([#5780](https://github.com/QwenLM/qwen-code/pull/5780))
    - 支持自动检测并安装新版本（standalone）或指导更新，极大提升升级体验。
3.  **feat(voice): 使用 Fast Model 优化 ASR 转录结果** ([#5794](https://github.com/QwenLM/qwen-code/pull/5794))
    - 在语音转文字后通过模型去除口语废话（"嗯"、"那个"），优化输入质量。
4.  **feat(cli): 默认启用内置状态栏预设** ([#5792](https://github.com/QwenLM/qwen-code/pull/5792))
    - 对应 Issue #5789，新用户无需手动配置即可看到上下文信息。
5.  **feat(tui): 按类型分区展示工具调用** ([#5661](https://github.com/QwenLM/qwen-code/pull/5661))
    - 优化 TUI 显示：读取/搜索类工具折叠显示，变更类工具独立展示，减少屏幕噪点。
6.  **fix(core): 拒绝包含 userinfo 的 WebFetch URL** ([#5783](https://github.com/QwenLM/qwen-code/pull/5783))
    - 安全修复，对应 Issue #5782。
7.  **feat(config): Provider 协议映射** ([#5793](https://github.com/QwenLM/qwen-code/pull/5793))
    - 实现了 Issue #5758 中提出的解耦方案，允许自定义 provider 复用现有 SDK 协议。
8.  **feat(core): PreToolUse hook 'ask' 支持 TUI 确认** ([#5629](https://github.com/QwenLM/qwen-code/pull/5629))
    - 增强安全性，当 hook 返回 `ask` 时弹出 TUI 确认框，而非静默拒绝。
9.  **feat(serve): Daemon 工作区语音与控制 API** ([#5765](https://github.com/QwenLM/qwen-code/pull/5765))
    - 为 Daemon 模式添加了 REST API 支持，包括语音配置、权限管理和 LSP 状态查询。
10. **Add a Secret Disclosure mandate** ([#5550](https://github.com/QwenLM/qwen-code/pull/5550))
    - 防止在批量文件操作（如复制）中意外泄露密钥或敏感数据。

## 5. 功能需求趋势
从近期的 Issues 和 PRs 可以看出社区关注点正在向以下方向演进：

- **Daemon 化与服务化**：社区强烈倾向于将 Qwen Code 打造成一个常驻后台服务，以支持浏览器扩展、定时任务和远程调用，摆脱单一 CLI 进程的限制。
- **多端语音交互统一**：语音功能不再局限于终端，正在向 Web 和桌面端延伸，且对识别后的文本处理质量提出了更高要求。
- **本地模型深度优化**：随着本地 LLM 使用的增加，针对 llama.cpp 的缓存策略和 token 消耗优化成为刚需。
- **安全性与可控性增强**：对 Agent 自动执行破坏性命令的担忧增加，推动了对 Hook 确认机制和硬性拦截规则的开发。

## 6. 开发者关注点
- **配置系统的复杂性**：模型提供商配置与协议的耦合导致自定义模型接入困难，开发者呼吁更灵活的路由映射机制。
- **UI 渲染细节**：终端 UI 的背景色渲染、Emoji 兼容性（建议改用 Unicode 符号）以及状态栏信息的直观性是用户吐槽的高频点。
- **资源管理**：在 Git Worktree 场景下，`node_modules` 的冗余占用问题受到关注，开发者希望有更智能的依赖共享策略。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# 2026-06-24 DeepSeek TUI (CodeWhale) 社区动态日报

## 1. 今日速览
今日项目 **CodeWhale** (原 DeepSeek TUI) 迎来了密集的代码合并与架构重构。核心团队重点推进了 **v0.8.65 版本的多提供商路由架构** 和 **Fleet 子代理执行基座**，合并了超过 15 个功能与修复 PR。社区方面，关于 Windows 平台稳定性、GLM-5.2 模型接入以及代理行为可控性的讨论热度居高不下。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues (Top 10)

1.  **[#2487] `yolo` 模式下频繁出现 "Turn stalled" 导致卡死**
    *   **标签**: `bug` `reliability` `v0.8.70`
    *   **理由**: 影响核心体验的严重 Bug。用户反馈在自主操作模式下，会话经常停滞且无法通过 `continue` 恢复，是当前稳定性痛点。
    *   **链接**: [Hmbown/CodeWhale Issue #2487](https://github.com/Hmbown/CodeWhale/issues/2487)

2.  **[#3439] 请求接入智谱 GLM-5.2 模型**
    *   **标签**: `enhancement` `model-lab`
    *   **理由**: 反映了社区对多模型支持的强烈需求。用户希望利用 GLM-5.2 在中文长文档理解上的优势，通过 `agent` 工具进行子任务分发。
    *   **链接**: [Hmbown/CodeWhale Issue #3439](https://github.com/Hmbown/CodeWhale/issues/3439)

3.  **[#3275] 代理过度自作主张，偏离用户意图**
    *   **标签**: `bug` `reliability`
    *   **理由**: 涉及 AI 控制权的核心难题。用户抱怨 CodeWhale 经常自我问答并执行未确认的操作，开发者正在寻求自主性与用户确认之间的平衡点。
    *   **链接**: [Hmbown/CodeWhale Issue #3275](https://github.com/Hmbown/CodeWhale/issues/3275)

4.  **[#2608] 架构重构：分离提供商事实、模型事实与路由解析**
    *   **标签**: `enhancement` `EPIC`
    *   **理由**: v0.8.65 的核心架构变更。旨在解决当前架构混淆模型 ID 与提供商身份的问题，为多模型路由打下基础。
    *   **链接**: [Hmbown/CodeWhale Issue #2608](https://github.com/Hmbown/CodeWhale/issues/2608)

5.  **[#1812] Windows 11 上 TUI 间歇性冻结**
    *   **标签**: `bug` `tui` `Windows`
    *   **理由**: Windows 平台用户的长期痛点。UI 会完全无响应但进程存活，严重影响跨平台体验。
    *   **链接**: [Hmbown/CodeWhale Issue #1812](https://github.com/Hmbown/CodeWhale/issues/1812)

6.  **[#3461] MCP 服务器进程重复启动问题**
    *   **标签**: `bug` `tools`
    *   **理由**: 资源泄露问题。单次配置会启动两个进程，浪费内存且可能导致冲突。该问题已在今日的 PR #3534 中修复。
    *   **链接**: [Hmbown/CodeWhale Issue #3461](https://github.com/Hmbown/CodeWhale/issues/3461)

7.  **[#3144] 添加自然语言自动审查策略与推送前审查门控**
    *   **标签**: `enhancement` `security`
    *   **理由**: 重要的安全功能探索。借鉴 Cursor 的思路，试图在全自动执行和手动审批之间建立中间层。
    *   **链接**: [Hmbown/CodeWhale Issue #3144](https://github.com/Hmbown/CodeWhale/issues/3144)

8.  **[#3154] Fleet 执行基座：为配置文件工作器提供持久化执行**
    *   **标签**: `enhancement` `EPIC` `subagents`
    *   **理由**: 子代理架构的核心 Epic。旨在建立持久的执行层，支持代理角色的配置、加载与委托。
    *   **链接**: [Hmbown/CodeWhale Issue #3154](https://github.com/Hmbown/CodeWhale/issues/3154)

9.  **[#3474] macOS 终端选择器文本对比度极低**
    *   **标签**: `bug` `ux`
    *   **理由**: 严重的 UI 可用性问题。`/model` 和 `/sessions` 弹窗文字难以辨认，今日已通过 PR #3500 修复。
    *   **链接**: [Hmbown/CodeWhale Issue #3474](https://github.com/Hmbown/CodeWhale/issues/3474)

10. **[#2300] 多模型兼容性与提供商文档改进**
    *   **标签**: `documentation` `enhancement`
    *   **理由**: 用户希望更清晰地理解 `vllm` 与 `openai` 提供商配置的区别，反映了文档滞后于架构演进的问题。
    *   **链接**: [Hmbown/CodeWhale Issue #2300](https://github.com/Hmbown/CodeWhale/issues/2300)

## 4. 重要 PR 进展 (Top 10)

1.  **[#3534] 修复 API 调用中 MCP 进程重复实例化问题**
    *   **内容**: 解决了 HTTP API 端点每次调用都创建新 `McpPool` 导致进程重复的资源泄露 Bug，修复了 Issue #3461。
    *   **链接**: [Hmbown/CodeWhale PR #3534](https://github.com/Hmbown/CodeWhale/pull/3534)

2.  **[#3536] Fleet 管理器支持从 Ledger 恢复**
    *   **内容**: 实现了子代理 Fleet 的持久化恢复功能。即使崩溃或分离，也能根据 Ledger 状态恢复任务，提升系统鲁棒性。
    *   **链接**: [Hmbown/CodeWhale PR #3536](https://github.com/Hmbown/CodeWhale/pull/3536)

3.  **[#3530] 国际化 (i18n) Phase 1-4b 合并与修复**
    *   **内容**: 整合了 @gordonlu 的国际化工作，修复了大量编译错误，标志着多语言支持（i18n）即将正式落地。
    *   **链接**: [Hmbown/CodeWhale PR #3530](https://github.com/Hmbown/CodeWhale/pull/3530)

4.  **[#3527] 远程 MCP 支持 OAuth 登录**
    *   **内容**: 为基于 URL 的 MCP 服务器添加了 OAuth 2.0 和 Bearer 认证支持，扩展了远程工具集成的能力。
    *   **链接**: [Hmbown/CodeWhale PR #3527](https://github.com/Hmbown/CodeWhale/pull/3527)

5.  **[#3521] 基于 RouteResolver 的运行时切换门控**
    *   **内容**: 重构了模型/提供商切换逻辑，强制在变更状态前解析完整的 `ReadyRouteCandidate`，防止配置状态不一致。
    *   **链接**: [Hmbown/CodeWhale PR #3521](https://github.com/Hmbown/CodeWhale/pull/3521)

6.  **[#3523] 将路由限制注入上下文预算**
    *   **内容**: 将解析后的 `RouteLimits`（如上下文窗口、输出上限）与 App 状态绑定，完善了模型切换后的资源管理机制。
    *   **链接**: [Hmbown/CodeWhale PR #3523](https://github.com/Hmbown/CodeWhale/pull/3523)

7.  **[#3500] 修复选择器 UI 文本对比度问题**
    *   **内容**: 针对 macOS 终端上 `/model` 和 `/sessions` 弹窗文字不可见的问题进行了样式修复。
    *   **链接**: [Hmbown/CodeWhale PR #3500](https://github.com/Hmbown/CodeWhale/pull/3500)

8.  **[#3519] 选择器支持鼠标滚轮滚动**
    *   **内容**: 为提供商、会话、命令面板等多个弹窗组件添加了鼠标滚轮支持，提升 TUI 交互体验。
    *   **链接**: [Hmbown/CodeWhale PR #3519](https://github.com/Hmbown/CodeWhale/pull/3519)

9.  **[#3535] 贡献者信用调和**
    *   **内容**: 非功能性但重要的社区维护工作。通过脚本扫描历史提交，找回并恢复了之前因合并操作丢失的贡献者署名信息。
    *   **链接**: [Hmbown/CodeWhale PR #3535](https://github.com/Hmbown/CodeWhale/pull/3535)

10. **[#3531] 防止审查意图覆盖显式模式**
    *   **内容**: 修复了一个逻辑问题，防止带有 "review" 或 "check" 字眼的指令意外将显式的 Agent/YOLO 模式降级为 Plan 模式。
    *   **链接**: [Hmbown/CodeWhale PR #3531](https://github.com/Hmbown/CodeWhale/pull/3531)

## 5. 功能需求趋势

*   **多模型与 Fleet 架构**: 社区与开发重心明显向“多提供商支持”和“Fleet 子代理架构”倾斜。Issue #2608、#3154、#3205 显示项目正在解耦模型标识与提供商，构建类似 Swarm 的多代理协作底座。
*   **本地/国产模型集成**: 在 GLM-5.2 (#3439) 和本地模型端点 (#2300) 的需求推动下，项目正在加强自定义 Provider 的接入能力。
*   **可控性与安全性**: Issue #3144 (自动审查) 和 #3275 (防止意图偏离) 表明，随着 Agent 能力增强，用户对“控制权”和“安全边界”的焦虑感上升，需要更细粒度的审查门控。

## 6. 开发者关注点

*   **稳定性与冻结 Bug**: "Turn stalled" (#2487) 和 Windows 冻结 (#1812) 是长期存在的痛点，开发者期待在新的路由架构下解决底层事件循环的可靠性问题。
*   **配置透明度**: 开发者反馈无法在 TUI 中直接编辑某些配置项 (#3303)，且对 `provider` 与 `model` 的概念混淆感到困惑，急需更直观的路由状态面板 (#3083)。
*   **资源可见性**: 在长任务中，代理对 Token 预算和资源使用情况“盲飞” (#2666)，开发者呼吁增加运行时的资源监控 UI。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*