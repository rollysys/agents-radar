# AI CLI 工具社区动态日报 2026-05-31

> 生成时间: 2026-05-31 04:06 UTC | 覆盖工具: 8 个

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

# AI CLI 工具生态横向对比分析报告 (2026-05-31)

## 1. 生态全景
当前 AI CLI 工具生态正处于从“功能验证”向“生产级稳定性”跨越的关键阶段。头部工具（Claude Code, Codex）面临大规模用户反馈下的细节打磨与平台兼容性挑战，社区对**稳定性**（如内存泄漏、会话崩溃）和**成本控制**的关注度首次超过了对新功能的渴望。开源与新兴力量则在架构重构（Daemon 模式、ACP 协议）与本土化适配上积极突围。整体来看，**Agent 自主性的提升带来了对安全边界和资源管理的严峻考验**，MCP（Model Context Protocol）正逐渐成为事实上的工具扩展标准。

## 2. 各工具活跃度对比

| 工具名称 | Issues 热度 (Top 10 概览) | PR 活跃度 | Release 情况 | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 高 (情感/成本/模型Bug) | 中 (6 docs/fixes) | 无 | `/buddy` 移除、Token 损耗、Opus 4.8 Bug |
| **OpenAI Codex** | 高 (平台兼容/数据丢失) | 高 (10 features) | 无 | Windows 沙箱、历史记录丢失、MCP 懒加载 |
| **Gemini CLI** | 高 (核心稳定性) | 高 (10 core fixes) | 无 | Agent 挂起、内存泄漏、并发写入、AST |
| **GitHub Copilot CLI** | 中 (安全回归/输入法) | 低 (0 updates) | **v1.0.57-3** | 权限绕过、德语键盘、MCP 启动失败 |
| **Kimi Code CLI** | 中 (信任危机/认证) | 中 (6 ACP focus) | 无 | 项目重构争议、登录失败、ACP 协议 |
| **OpenCode** | 中 (延迟/沙箱) | 高 (10 core/ui) | **v1.15.13** | Plan Mode 违规、GPT 延迟、思维块保留 |
| **Qwen Code** | 高 (OOM/IDE集成) | 高 (10 daemon/cli) | **v0.17.0-nightly** | 内存溢出 (OOM)、JetBrains 认证、本地路由 |
| **DeepSeek TUI** | 中 (本土化/体验) | 高 (10 features) | 无 | 中文输入法、百度搜索、RISC-V、MiMo 模型 |

## 3. 共同关注的功能方向

*   **会话持久化与上下文管理**
    *   **涉及工具**：Claude Code, OpenAI Codex, Gemini CLI, Qwen Code。
    *   **具体诉求**：用户极度依赖长周期会话，对“会话限制中断”（Claude #13354）、“历史记录丢失/隐藏”（Codex #21128）以及“恢复会话时的内存溢出”（Qwen #4624）表现出强烈痛点。工具方正在通过增加 `/compress` 命令、修复 Rewind 逻辑、优化历史重放机制来应对。

*   **MCP (Model Context Protocol) 生态集成**
    *   **涉及工具**：OpenAI Codex, GitHub Copilot CLI, OpenCode, Qwen Code。
    *   **具体诉求**：MCP 已成为扩展能力的核心。社区关注点从“能用”转向“好用”，重点解决了 **MCP 懒加载**（Codex #24987）、**Windows 启动失败**（Copilot #3576）以及**连接稳定性**（Qwen #4641）等问题。

*   **跨平台兼容性 (Windows/Linux)**
    *   **涉及工具**：OpenAI Codex, GitHub Copilot CLI, Gemini CLI, DeepSeek TUI。
    *   **具体诉求**：Windows 平台的“沙箱权限”和“路径解析”问题频发，Linux/Wayland 下则面临剪贴板和输入法适配难题。这表明 CLI 工具在系统级交互上的跨平台一致性仍是主要短板。

## 4. 差异化定位分析

*   **Claude Code：模型驱动的体验标杆**
    *   **定位**：深度绑定 Anthropic 最新模型特性（如 Opus 4.8 扩展思维），追求极致的模型能力释放。
    *   **差异点**：社区对功能的情感连接极深（如 `/buddy` 事件），更关注 Token 成本与模型幻觉等 AI 原生问题，而非纯软件工程问题。

*   **OpenAI Codex & GitHub Copilot：企业级与平台化**
    *   **定位**：强调工作流集成与安全性。
    *   **差异点**：重点发力 **Desktop 应用**、**企业账户管理**及 **Hooks/Env 集成**。相比其他工具，更注重在 IDE 和 Desktop 端的一致体验，但也背负了更重的历史包袱（如 Windows 沙箱）。

*   **Gemini CLI：工程化与底层架构**
    *   **定位**：面向开发者的健壮 Agent 框架。
    *   **差异点**：关注点下沉至 **AST 感知**、**PTY 内存管理**、**并发锁**等系统级层面。比起 UI 交互，更倾向于解决 Agent 的自主性和稳定性问题（如自动脱敏、组件评估）。

*   **开源/本土系：架构创新与定制化**
    *   **定位**：灵活、轻量、本土化。
    *   **差异点**：
        *   **Kimi Code**：激进推进 **ACP (Agent Communication Protocol)** 协议标准化。
        *   **Qwen Code**：大力推进 **Daemon 模式** 与 **本地/云端混合路由**。
        *   **DeepSeek TUI**：深耕 **本土化搜索（百度）**、**国产模型支持**及 **中文交互体验**。

## 5. 社区热度与成熟度

*   **成熟稳健型**：**Claude Code** 和 **GitHub Copilot CLI**。
    *   社区反馈已从基础功能转向细节体验（如情感化功能移除、UI 高亮回归）。用户基数大，对破坏性更新（Buddy 移除）或安全漏洞（权限绕过）极为敏感，处于“高关注度、高风险”区间。
*   **快速迭代型**：**Qwen Code**、**Gemini CLI**、**OpenCode**。
    *   PR 活跃度高，密集修复核心架构问题（Daemon 重构、PTY 泄漏、OOM）。社区正处于功能爆发后的“填坑期”，代码提交频繁，问题修复速度快，属于技术极客型发展阶段。
*   **特色探索型**：**Kimi Code**、**DeepSeek TUI**。
    *   关注点相对集中（协议标准化、本土化）。Kimi 面临战略信任危机，DeepSeek 则在特定硬件和语言环境下深耕，社区粘性来自差异化特色。

## 6. 值得关注的趋势信号

1.  **Agent 稳定性成为分水岭**
    *   随着工具能力的增强，**“不可控”成为最大风险**。Plan Mode 下违规写入、Agent 进程疯狂复制（Claude #55586）、子代理误报成功等问题频发。开发者应重点关注**沙箱隔离**与**权限确认机制**的鲁棒性，未来“安全沙箱”将是 CLI 工具的标配。

2.  **上下文管理进入“精细化”时代**
    *   简单的长上下文已无法满足需求。工具正在通过 **AST 感知读取**（Gemini）、**显式上下文缓存**（OpenCode）、**会话压缩**（Gemini/Qwen）等技术来优化 Token 效率。开发者需警惕长会话带来的 **OOM（内存溢出）风险**，这是近期 Qwen 和 Gemini 共同修复的重点。

3.  **协议标准化势在必行**
    *   **MCP** 正迅速统一工具扩展接口，而 **ACP** 的出现暗示了 Agent 间通信的标准化需求。对于开发者而言，编写兼容 MCP 标准的工具将是未来扩展 AI CLI 能力的最佳路径。

4.  **“混合架构” 成为性能优化方向**
    *   多个工具开始引入 **Daemon（守护进程）模式** 和 **懒加载机制**。这标志着 AI CLI 正从简单的脚本工具向常驻后台服务演进，旨在解决冷启动慢、环境变量丢失及多客户端状态同步问题。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告 (2026-05-31)

基于 `anthropics/skills` 官方仓库数据，分析社区近期最关注的 Skills 动态与需求趋势。

## 1. 热门 Skills 排行

由于部分 PR 评论数据缺失，本榜单依据功能实用性、社区讨论关联度及更新活跃度综合选出。

| 排名 | Skill 名称 | 功能概述 | 社区动态与状态 |
| :--- | :--- | :--- | :--- |
| 1 | **document-typography** | **AI 文档排版质检**。解决生成文档中的孤行、寡行及编号错位问题，填补了 AI 生成内容“最后一公里”的排版质量空白。 | **[OPEN]** 针对性强，解决了普遍存在的文档美观度痛点。<br/>[PR #514](https://github.com/anthropics/skills/pull/514) |
| 2 | **ODT (OpenDocument)** | **开放文档格式支持**。支持 .odt/.ods 文件的创建、模板填充及 HTML 转换，降低对私有格式的依赖。 | **[OPEN]** 响应开源标准需求，更新活跃至 4 月。<br/>[PR #486](https://github.com/anthropics/skills/pull/486) |
| 3 | **AURELION Suite** | **结构化认知框架**。包含 Kernel, Advisor, Agent, Memory 四个模块，为 AI 提供结构化思维与持久化记忆能力。 | **[OPEN]** 高级认知架构尝试，旨在提升 Agent 的专业度。<br/>[PR #444](https://github.com/anthropics/skills/pull/444) |
| 4 | **ServiceNow Platform** | **企业级平台助手**。覆盖 ITSM, SecOps, ITAM 等企业服务管理场景，不仅是脚本辅助，而是全平台专家。 | **[OPEN]** 面向企业级工作流，实用价值高。<br/>[PR #568](https://github.com/anthropics/skills/pull/568) |
| 5 | **Meta Skills (Analyzer)** | **Skill 元分析工具**。包含 `skill-quality-analyzer` 和 `skill-security-analyzer`，用于评估 Skill 自身的质量与安全性。 | **[OPEN]** 属于“技能开发基础设施”，对于 Skill 生态治理至关重要。<br/>[PR #83](https://github.com/anthropics/skills/pull/83) |
| 6 | **n8n-builder & debugger** | **自动化工作流构建**。帮助用户通过自然语言构建 n8n 工作流并进行调试。 | **[OPEN]** 连接 Claude Code 与自动化工具，市场需求明显。<br/>[PR #190](https://github.com/anthropics/skills/pull/190) |
| 7 | **frontend-design** | **前端设计指南改进**。优化现有 Skill 的清晰度与可执行性，确保指令在单次对话中可落地。 | **[OPEN]** 对现有核心 Skill 的优化迭代，提升了实操体验。<br/>[PR #210](https://github.com/anthropics/skills/pull/210) |

## 2. 社区需求趋势

根据 Issues 讨论热度，社区关注点集中在以下三个方向：

*   **企业级协作与权限治理**：呼声最高的是 **组织内 Skill 共享功能** ([Issue #228](https://github.com/anthropics/skills/issues/228))。目前分享 Skill 需手动下载上传，效率低下，企业用户急需团队级 Skill 库。同时，**安全命名空间问题** ([Issue #492](https://github.com/anthropics/skills/issues/492)) 也引发关注，社区担心第三方 Skill 冒充官方 Skill 带来安全风险。
*   **底层稳定性与兼容性**：**Windows 平台兼容性** 是痛点，多个 Issues 和 PRs 指出在 Windows 下运行脚本或触发 Skill 失败 ([Issue #556](https://github.com/anthropics/skills/issues/556), [PR #1099](https://github.com/anthropics/skills/pull/1099))。此外，**Skills 丢失/加载失败** ([Issue #62](https://github.com/anthropics/skills/issues/62)) 影响了生产环境的使用信心。
*   **工作流自动化集成 (MCP & n8n)**：社区希望 Skills 能更深入集成到现有开发流中。需求包括将 Skills 暴露为 MCP 协议 ([Issue #16](https://github.com/anthropics/skills/issues/16))、支持 n8n 自动化构建 ([PR #190](https://github.com/anthropics/skills/pull/190)) 以及支持 AWS Bedrock 后端 ([Issue #29](https://github.com/anthropics/skills/issues/29))。

## 3. 高潜力待合并 Skills

以下 PRs 修复了关键缺陷或完善了核心流程，具有较高的合并价值，值得关注：

*   **[PR #509] docs: add CONTRIBUTING.md** [OPEN]
    填补了仓库社区健康文件的缺失，为贡献者提供了明确指南，直接响应了社区对贡献流程的困惑。
    *链接*: [PR #509](https://github.com/anthropics/skills/pull/509)
*   **[PR #538] & [PR #541] Bug Fixes for document skills** [OPEN]
    修复了 PDF 引用路径大小写敏感问题及 DOCX 追踪修订的 ID 冲突问题，直接解决了文档类 Skills 的实际使用 Bug。
    *链接*: [PR #538](https://github.com/anthropics/skills/pull/538), [PR #541](https://github.com/anthropics/skills/pull/541)
*   **[PR #723] feat: add testing-patterns skill** [OPEN]
    提供全面的测试模式 Skill（从单元测试到 E2E），覆盖测试金字塔最佳实践，通用性极强，适合大多数开发场景。
    *链接*: [PR #723](https://github.com/anthropics/skills/pull/723)

## 4. Skills 生态洞察

**当前社区最集中的诉求是：打破“个人工具”边界，实现企业级团队共享与跨平台（Windows/MCP/Bedrock）的稳定集成。**

---

# Claude Code 社区动态日报 (2026-05-31)

## 1. 今日速览
今日社区情绪最为高涨的话题集中在功能缺失与成本损耗上。备受喜爱的 `/buddy` 功能移除引发的超千赞 Issue 持续发酵，同时多项关于 Opus 4.8 新模型的严重 Bug（如幻觉、工具调用异常）及 API Token 消耗统计错误被曝光。此外，并行工具调用导致会话崩溃的回归问题也成为开发者关注的焦点。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues (Top 10)

1.  **[OPEN] Bring Back Buddy — A Consolidated Plea from the Community** [#45596](https://github.com/anthropics/claude-code/issues/45596)
    *   **热度：** 👍 1127 | 💬 255
    *   **理由：** 社区目前最关注的议题。自 v2.1.97 移除 `/buddy` 功能后，用户强烈要求恢复该陪伴型技能。该 Issue 汇总了社区心声，指出该功能对开发者体验的重要性，不仅是功能需求，更是一种情感连接的断裂。

2.  **[OPEN] [FEATURE] Multi-account switching in Claude Mobile app without shared email** [#36151](https://github.com/anthropics/claude-code/issues/36151)
    *   **热度：** 👍 288 | 💬 76
    *   **理由：** 移动端多账户切换的痛点。用户希望在移动应用中便捷切换账户，而无需共享邮箱验证，反映了多角色开发者的实际需求。

3.  **[OPEN] [FEATURE] Continue when the session limit reached** [#13354](https://github.com/anthropics/claude-code/issues/13354)
    *   **热度：** 👍 115 | 💬 51
    *   **理由：** 长期需求。用户希望在达到会话限制时能无缝继续工作，而不是被强制中断，这是提升工作流连续性的关键改进点。

4.  **[CLOSED] [Bug] Anthropic API Error: Image processing failures causing conversation token waste** [#60334](https://github.com/anthropics/claude-code/issues/60334)
    *   **热度：** 👍 11 | 💬 33
    *   **理由：** 严重的成本损耗问题。用户反馈在无图片的情况下遇到图片处理错误，导致消耗了 5 小时窗口中 70% 的 Token。此类 Bug 直接影响用户钱包，需高度警惕。

5.  **[OPEN] Feature Request: Message queue mode** [#50246](https://github.com/anthropics/claude-code/issues/50246)
    *   **热度：** 👍 57 | 💬 14
    *   **理由：** 交互体验优化。建议增加消息队列模式，允许用户在 AI 执行任务时排队输入后续指令，而非打断当前任务，可显著提升交互效率。

6.  **[OPEN] [Bug] 1M context incorrectly requires extra usage on Max plan** [#45390](https://github.com/anthropics/claude-code/issues/45390)
    *   **热度：** 👍 26 | 💬 31
    *   **理由：** 订阅权益识别错误。Max 计划用户在使用 Opus 4.6 (1M context) 时被错误提示需要额外付费，属于计费逻辑或权限判断的严重 Bug。

7.  **[OPEN] [BUG] Agent Teams: Single teammate spawn creates 10-151 duplicate worker instances** [#55586](https://github.com/anthropics/claude-code/issues/55586)
    *   **热度：** 👍 1 | 💬 7
    *   **理由：** 严重的系统资源漏洞。Agent Teams 功能在生成队友时会出现疯狂复制进程（最高达 151 个），每个进程都消耗上下文并编辑文件，极可能导致系统崩溃或高额账单。

8.  **[OPEN] [BUG] API Error: Server is temporarily limiting requests** [#53915](https://github.com/anthropics/claude-code/issues/53915)
    *   **热度：** 👍 5 | 💬 16
    *   **理由：** 服务稳定性问题。用户频繁遇到服务端限流错误，影响了开发进度，尤其是在批量处理任务时更为明显。

9.  **[OPEN] [BUG] Extended thinking: signed thinking block 'cannot be modified' (400) permanently wedges session** [#63335](https://github.com/anthropics/claude-code/issues/63335)
    *   **热度：** 👍 10 | 💬 10
    *   **理由：** 核心会话崩溃问题。在使用扩展思维模式时，若签名思维块被意外修改，会导致整个会话永久卡死（400 错误），必须重置会话才能恢复。

10. **[OPEN] [BUG] Regression in 2.1.158: claude spirals into redundant/invented tool calls** [#63935](https://github.com/anthropics/claude-code/issues/63935)
    *   **热度：** 👍 1 | 💬 2
    *   **理由：** 最新版本的回归问题。v2.1.158 版本在读取文件时会陷入冗余或虚构的工具调用循环，严重影响任务执行效率，建议用户暂时回退至 2.1.157。

## 4. 重要 PR 进展

今日 PR 活动主要集中在文档改进与修复，共更新 6 条：

1.  **[OPEN] Remove "retro-futuristic" recommendation from Frontend Design Skill** [#39043](https://github.com/anthropics/claude-code/pull/39043)
    *   提议从前端设计技能中移除“复古未来主义”建议，作者建议开发者信任自己的判断。

2.  **[OPEN] docs: fix README capitalization and wording** [#63872](https://github.com/anthropics/claude-code/pull/63872)
    *   标准化 README 中的产品名称大写（如 GitHub, macOS）并优化标点符号，提升文档专业性。

3.  **[OPEN] docs: add Windows gh CLI install instruction** [#63467](https://github.com/anthropics/claude-code/pull/63467)
    *   补充了 Windows 平台安装 `gh` CLI 的指南，完善了跨平台文档支持。

4.  **[CLOSED] docs: expand CLAUDE_CODE_ACCESSIBILITY docs** [#45150](https://github.com/anthropics/claude-code/pull/45150)
    *   扩展了无障碍功能文档，增加了屏幕阅读器相关指导，提升了工具的可访问性。

5.  **[CLOSED] docs: add FORCE_HYPERLINK environment variable documentation** [#45151](https://github.com/anthropics/claude-code/pull/45151)
    *   文档新增 `FORCE_HYPERLINK` 环境变量说明，解决了在 tmux 或 screen 等终端下的链接兼容性问题。

6.  **[CLOSED] docs: fix accidental strikethrough in Korean Tool Search docs** [#45156](https://github.com/anthropics/claude-code/pull/45156)
    *   修复了韩文文档中意外的删除线格式错误。

## 5. 功能需求趋势

*   **交互体验人性化：** 社区对 `/buddy` 功能的强烈呼唤表明，开发者不仅将 Claude Code 视为工具，更看重其作为“编程伙伴”的情感价值。
*   **任务连续性与队列：** 针对 Session Limit 的中断问题（#13354）以及任务进行中的消息输入需求（#50246），显示出用户对更流畅、不被打断的长时工作流的渴望。
*   **Agent 稳定性控制：** 随着 Agent 功能的深入使用，用户对多 Agent 协作的稳定性提出了更高要求，特别是针对并行工具调用和子 Agent 管理的防崩溃机制。

## 6. 开发者关注点

*   **Token 消耗异常：** 多个 Issue（如 #60334, #64093）报告了 Token 统计与实际消耗不符、或因错误导致额度被大量浪费的情况。这已成为开发者最痛恨的 Bug 类型之一。
*   **Opus 4.8 模型适配问题：** 新模型 Opus 4.8 在 CLI 中暴露出较多问题，包括无法选择（#63456）、产生幻觉（#63884）以及在工具调用时卡死。建议开发者在生产环境中对新模型保持谨慎观察。
*   **并行工具调用风险：** 取消并行工具调用批次极易导致会话损坏（#63335, #63192），这是一个存在于核心层的严重稳定性隐患，目前建议避免频繁中断高并发的工具调用过程。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-05-31)

## 1. 今日速览
今日 OpenAI Codex 无新版发布，社区关注焦点集中在 Windows 平台的稳定性问题及 Desktop 应用会话管理体验上。多个高热度 Issue 反映了沙箱环境初始化失败、历史会话丢失等严重影响使用的问题。PR 方面，开发团队正在密集提交关于 MCP（Model Context Protocol）懒加载优化、工作区管理及 Session Hooks 增强的代码，显示出对工具链稳定性和扩展性的持续投入。

## 2. 版本发布
过去 24 小时内无官方 Release 发布。

## 3. 社区热点 Issues

以下筛选了 10 个最受关注或影响较大的 Issue：

1.  **[#23794](https://github.com/openai/codex/issues/23794) [CLOSED] Desktop 端移除了 Token/Context 使用量指示器**
    *   **热度:** 👍 155 | 💬 158
    *   **简评:** 过去 24 小时讨论最热烈的 Issue。用户抱怨更新后无法直观看到 Token 消耗，影响成本控制与上下文管理。虽已关闭，但引发了大量关于 UI 信息可见性的讨论。

2.  **[#21128](https://github.com/openai/codex/issues/21128) [OPEN] Desktop 静默隐藏全局最近 50 条之外的项目对话**
    *   **热度:** 👍 15 | 💬 16
    *   **简评:** 严重的数据可见性问题。Desktop 应用仅保留最近 50 条对话，导致旧的项目会话“消失”，严重影响长期项目的连续性和用户信任。

3.  **[#13117](https://github.com/openai/codex/issues/13117) [OPEN] 回归问题：Codex 再次对每个文件读取请求权限弹窗**
    *   **热度:** 👍 8 | 💬 14
    *   **简评:** Windows 平台上的经典痛点回归。沙箱权限未正确记住用户选择，导致工作流被频繁弹窗打断，严重影响开发效率。

4.  **[#24391](https://github.com/openai/codex/issues/24391) [OPEN] Windows CLI 0.133.0 沙箱初始化刷新失败**
    *   **热度:** 👍 16 | 💬 10
    *   **简评:** Windows 平台 CLI 核心功能受阻。升级后 shell 命令因沙箱设置问题无法执行，阻断了基础开发流程。

5.  **[#25084](https://github.com/openai/codex/issues/25084) [OPEN] Desktop 隐藏本地仍存在的聊天历史**
    *   **热度:** 👍 0 | 💬 10
    *   **简评:** 与 #21128 类似的数据丢失错觉问题。本地文件存在但 UI 不加载，用户不得不手动操作恢复，体验极差。

6.  **[#25203](https://github.com/openai/codex/issues/25203) [OPEN] Windows GitHub OAuth 回调失败**
    *   **热度:** 👍 5 | 💬 8
    *   **简评:** Desktop 应用无法连接 GitHub，报错 "Unable to find Electron app"，阻断了代码同步与集成功能。

7.  **[#25144](https://github.com/openai/codex/issues/25144) [OPEN] 请求增加禁用“自动将长 Prompt 转为 .txt 附件”的选项**
    *   **热度:** 👍 14 | 💬 8
    *   **简评:** 用户对输入控制权的呼声。自动转换破坏了结构化 Prompt 的意图，希望提供开关由用户决定。

8.  **[#22164](https://github.com/openai/codex/issues/22164) [OPEN] 功能请求：CLI 支持 Chrome 插件**
    *   **热度:** 👍 7 | 💬 3
    *   **简评:** 用户希望在 CLI 环境下也能使用浏览器自动化能力（Computer Use），目前仅 Desktop 端支持。

9.  **[#18507](https://github.com/openai/codex/issues/18507) [CLOSED] macOS CLI Computer Use 麦克风权限错误**
    *   **热度:** 👍 4 | 💬 11
    *   **简评:** macOS 权限管理问题导致 Computer Use 失败，涉及 Apple 事件签名验证，影响 Mac 用户使用自动化功能。

10. **[#25355](https://github.com/openai/codex/issues/25355) [OPEN] 提案：跨会话 Agent 一致性的 Repo-local 项目状态工具**
    *   **热度:** 👍 0 | 💬 3
    *   **简评:** 高质量的功能提案。建议增加工具让 Agent 能理解项目中的持久化协调文件（如合同、交接文档），解决长期多会话协作中的上下文断层问题。

## 4. 重要 PR 进展

以下筛选了 10 个值得关注的功能改进与修复 PR：

1.  **[#24805](https://github.com/openai/codex/pull/24805) [OPEN] 添加 CODEX_ENV_FILE 支持 SessionStart Hooks**
    *   **内容:** 允许 SessionStart 钩子设置环境变量文件，使得后续 shell 命令能继承环境状态（如 PATH、Conda 环境），解决环境持久化问题。

2.  **[#25351](https://github.com/openai/codex/pull/25351) [OPEN] 锁定多 Agent 运行时版本**
    *   **内容:** 防止恢复或分叉的线程运行时配置发生漂移，确保父/子线程行为一致性，提高多 Agent 架构的稳定性。

3.  **[#23620](https://github.com/openai/codex/pull/23620) [OPEN] App-server 调度排队任务**
    *   **内容:** 引入任务队列机制，当线程空闲时自动拉取并执行排队的后续任务，为异步工作流奠定基础。

4.  **[#24987](https://github.com/openai/codex/pull/24987) [OPEN] MCP 懒加载工具搜索支持**
    *   **内容:** 优化启动性能，不再阻塞等待非必须的 MCP 服务器初始化，而是在模型需要时按需加载工具。

5.  **[#25335](https://github.com/openai/codex/pull/25335) [OPEN] TUI 新增工作区目录命令**
    *   **内容:** 添加 `/cwd [path]` 和 `/workspace` 命令，允许用户在 TUI 中直接查看和修改工作目录，提升多目录操作体验。

6.  **[#25344](https://github.com/openai/codex/pull/25344) [OPEN] 暴露账户 Token 使用情况 API**
    *   **内容:** 为终端客户端提供官方的 Token 使用量查询接口，支持在 CLI 中查看账户级额度消耗。

7.  **[#25214](https://github.com/openai/codex/pull/25214) [OPEN] 保留显式 MCP 依赖的就绪状态**
    *   **内容:** 确保用户显式调用的工具即使处于懒加载列表中，也会在当次 Turn 中等待其初始化完成，避免不必要的调用失败。

8.  **[#25338](https://github.com/openai/codex/pull/25338) [OPEN] 项目工作区变更审批机制**
    *   **内容:** 针对工作区根目录变更等敏感操作，增加专门的审批提示，提升安全性。

9.  **[#24812](https://github.com/openai/codex/pull/24812) [OPEN] 状态栏显示企业月度信用额度**
    *   **内容:** 让企业用户能在状态栏看到月度额度限制，补充了现有的额度显示逻辑。

10. **[#25364](https://github.com/openai/codex/pull/25364) [OPEN] SessionStart Hook 环境变量覆盖**
    *   **内容:** 与 #24805 配合，提供结构化的方式让 Hook 将环境变量传递给后续会话。

## 5. 功能需求趋势

根据近期 Issues 分析，社区需求呈现以下趋势：

*   **会话与历史管理痛点集中:** 大量用户反馈历史记录丢失、会话列表限制（50条）、跨设备同步失败等问题。用户将 Codex 视为长期工作记忆，对数据持久化和可检索性有强需求。
*   **Windows 平台体验亟待修复:** Windows 平台的沙箱机制、路径处理（如 `\\?\` 前缀）、OAuth 回调及权限弹窗问题频发，成为当前最大的稳定性短板。
*   **自动化与可控性增强:** 开发者希望通过 Hooks、环境变量注入等方式更深地集成 Codex 到现有工作流中，同时对 AI 行为（如自动转 txt 附件）希望有更细粒度的控制开关。
*   **跨端能力对齐:** CLI 用户希望获得与 Desktop 相同的能力（如 Chrome 插件/Computer Use），移动端用户则希望更好地同步桌面端的项目状态。

## 6. 开发者关注点

*   **Windows 兼容性仍是最大痛点:** 过去 24 小时内超过 40% 的高频 Issue 涉及 Windows 平台的沙箱失败、权限循环弹窗及路径解析错误。开发者对在 Windows 环境下使用 CLI 和 Desktop 的稳定性感到担忧。
*   **上下文连续性至关重要:** 开发者非常依赖长周期的项目会话，任何导致历史记录“消失”或“隐藏”的 UI 变更（如 #21128, #25084）都会引发强烈的负面反馈。
*   **环境集成需求上升:** 从 PR 和 Issue 趋势看，开发者越来越关注如何将 Codex 嵌入到现有的 Shell、Conda 和 Node 环境中，对 `SessionStart` Hooks 和环境变量传递表现出浓厚兴趣。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-05-31)

## 1. 今日速览
今日 Gemini CLI 社区活跃度较高，核心关注点集中在**Agent 稳定性**与**系统底层修复**。社区反馈了多个关于 Agent 卡死、挂起以及子代理状态误报的关键 Bug，开发团队正在积极排查。此外，近期合并的 PR 修复了严重的 PTY 内存泄漏和文件并发写入竞态问题，显著提升了工具的鲁棒性。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues (Top 10)

1.  **[P1] Generalist agent hangs (通用代理挂起)**
    *   **链接**: [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
    *   **解读**: 这是一个高优先级 Bug。用户反馈当 CLI 调用 Generalist Agent 时会无限挂起，即使是简单的创建文件夹操作也会卡死。这严重影响了用户体验，目前状态标记为 "need-retesting"，社区关注度高 (👍 8)。

2.  **[P1] Robust component level evaluations (组件级行为评估)**
    *   **链接**: [#24353](https://github.com/google-gemini/gemini-cli/issues/24353)
    *   **解读**: 这是一个 Epic 级别的需求，旨在建立更健壮的组件级行为评估测试。这是提升 AI Agent 质量的基础设施工作，目前已有 76 个行为评估测试用例，是项目质量保障的关键一环。

3.  **[P1] Subagent recovery after MAX_TURNS is reported as GOAL success (子代理状态误报)**
    *   **链接**: [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
    *   **解读**: 关键可靠性问题。子代理在达到最大轮次限制中断后，错误地报告 `status: "success"`，掩盖了实际失败的情况。这会导致 Agent 无法正确恢复或重试，属于隐蔽性较高的 Bug。

4.  **[P1] Shell command execution gets stuck (Shell 命令执行卡死)**
    *   **链接**: [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
    *   **解读**: 另一个影响 Core 功能的 Bug。Gemini 执行完 Shell 命令后，界面仍显示 "Waiting input" 导致进程挂起，影响自动化流程的顺畅执行。

5.  **[P2] Assess the impact of AST-aware file reads (AST 感知文件读取评估)**
    *   **链接**: [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
    *   **解读**: 功能增强调研。探讨是否引入 AST（抽象语法树）感知能力，以便更精确地读取方法边界、减少 Token 噪音。这代表了 CLI 向更智能代码理解方向发展的趋势。

6.  **[P2] Gemini does not use skills and sub-agents enough (技能与子代理调用不足)**
    *   **链接**: [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
    *   **解读**: 用户反馈模型显式定义了 Skills（如 gradle, git），但模型在相关任务中极少主动调用。这反映了 Prompt Engineering 或路由逻辑上的痛点，即如何让模型更智能地使用工具。

7.  **[P2] Add deterministic redaction and reduce Auto Memory logging (自动记忆敏感信息处理)**
    *   **链接**: [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)
    *   **解读**: 安全性改进。目前的 Auto Memory 功能在提取记忆时，敏感信息（Secrets）是在进入模型上下文后才进行脱敏，存在潜在泄露风险。该 Issue 旨在前置脱敏逻辑。

8.  **[P2] Gemini CLI encounters 400 error with > 128 tools (工具数量限制报错)**
    *   **链接**: [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
    *   **解读**: 扩展性问题。当工具数量超过限制（标题提及128，摘要提及400）时，CLI 直接报 400 错误。社区期望 Agent 能更智能地管理工具作用域，而非简单报错。

9.  **[P1] get-shit-done output hook causes crash (Hook 导致崩溃)**
    *   **链接**: [#22186](https://github.com/google-gemini/gemini-cli/issues/22186)
    *   **解读**: 稳定性问题。特定的输出 Hook 在打印摘要时会导致 CLI 崩溃，直接影响工作流。

10. **[P1] Browser subagent fails in Wayland (浏览器子代理兼容性)**
    *   **链接**: [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
    *   **解读**: 平台兼容性问题。Browser Agent 在 Wayland 显示服务器环境下运行失败，限制了 Linux 桌面用户的使用。

## 4. 重要 PR 进展 (Top 10)

1.  **[Merged] fix(core): prevent PTY memory leak (修复 PTY 内存泄漏)**
    *   **链接**: [#27154](https://github.com/google-gemini/gemini-cli/pull/27154)
    *   **内容**: 修复了 `ShellExecutionService` 中严重的内存和文件描述符泄漏问题。通过同步删除 PTY 条目，解决了因后台流清理失败导致条目无法被垃圾回收的问题。

2.  **[Merged] fix(core): serialize concurrent edits to the same file (并发编辑序列化)**
    *   **链接**: [#27153](https://github.com/google-gemini/gemini-cli/pull/27153)
    *   **内容**: 修复了同一文件并发写入的竞态条件。引入了文件级锁定机制，确保 `read -> compute -> write` 模式的原子性，防止数据覆盖。

3.  **[Merged] feat(acp): add /compress slash command (新增 /compress 命令)**
    *   **链接**: [#27151](https://github.com/google-gemini/gemini-cli/pull/27151)
    *   **内容**: 为 ACP 会话添加了 `/compress` 命令，允许在长对话中主动压缩历史记录以释放上下文窗口，防止超出 Token 限制。

4.  **[Merged] fix(cli): make --skip-trust actually load workspace settings (修复 --skip-trust 标志)**
    *   **链接**: [#27137](https://github.com/google-gemini/gemini-cli/pull/27137)
    *   **内容**: 修复了 `--skip-trust` 标志失效的问题。此前该标志无法正确加载工作区的 `.gemini/settings.json`，现已修正，方便 CI/CD 场景使用。

5.  **[Merged] fix(core): upgrade pty dependencies (升级 PTY 依赖)**
    *   **链接**: [#27147](https://github.com/google-gemini/gemini-cli/pull/27147)
    *   **内容**: 升级 node-pty 依赖至 `1.2.0-beta12`，修复了 macOS 上 `/dev/ptmx` 泄漏的上游 Bug，提升了 macOS 用户的稳定性。

6.  **[Open] Fix Node 20 Compatibility (Node 20 兼容性修复)**
    *   **链接**: [#27385](https://github.com/google-gemini/gemini-cli/pull/27385)
    *   **内容**: 修复了在 Node 20.x 环境下运行时的 `URL.parse` 兼容性崩溃问题，并顺带修复了 Windows 平台的符号链接测试失败。

7.  **[Open] fix(cli): support WSL2 clipboard image paste (WSL2 剪贴板支持)**
    *   **链接**: [#27588](https://github.com/google-gemini/gemini-cli/pull/27588)
    *   **内容**: 增强了 WSL 环境支持。通过 PowerShell 互操作实现了从 Windows 剪贴板粘贴图片到 WSL 的功能，填补了跨平台体验的短板。

8.  **[Open] fix(cli): fall back for oversized bug report URLs (Bug 报告链接过长处理)**
    *   **链接**: [#27591](https://github.com/google-gemini/gemini-cli/pull/27591)
    *   **内容**: 修复了在 Android/Termux 环境下 `/bug` 命令生成的 URL 过长导致崩溃的问题，增加了超长 URL 的回退机制。

9.  **[Open] fix(core): skip missing includeDirectories (配置容错处理)**
    *   **链接**: [#27329](https://github.com/google-gemini/gemini-cli/pull/27329)
    *   **内容**: 改进启动稳定性。当 `settings.json` 中包含不存在的 `includeDirectories` 路径时，不再直接崩溃报错退出，而是跳过并继续运行。

10. **[Open] feat(ui): experimental fullscreen mode (实验性全屏模式)**
    *   **链接**: [#22632](https://github.com/google-gemini/gemini-cli/pull/22632)
    *   **内容**: 引入了集成 Shell 和后台 Shell 的全屏模式实验性功能，提供了更沉浸的终端操作体验，目前处于 Stale 状态待 Review。

## 5. 功能需求趋势

*   **Agent 可靠性与自主性增强**：社区高度关注 Agent 的执行稳定性（解决 Hangs/Stucks 问题）以及状态汇报的准确性（Fixing false success）。同时，希望 Agent 能更智能地自主调用 Skills 和 Sub-agents，减少人工干预。
*   **深度的代码理解能力 (AST)**：从文本匹配转向语法树级别的代码理解，引入 AST-aware 工具成为提升代码操作精度的关键路径，旨在减少 Token 浪费并提高修改准确性。
*   **Auto Memory 系统的安全性优化**：针对自动记忆功能，社区和开发者正在推动敏感信息的确定性脱敏和无效补丁的隔离，确保本地存储和模型交互的安全性。

## 6. 开发者关注点

*   **资源泄漏与进程管理**：近期核心修复集中在 PTY 内存泄漏和僵尸进程处理上，表明开发者在长期运行 CLI 或执行后台任务时，资源管理仍是主要痛点。
*   **并发写入冲突**：PR #27153 的合并解决了文件并发编辑的竞态问题，反映出开发者在多任务并行处理场景下对数据一致性的高要求。
*   **环境兼容性 (WSL2 & Node 20)**：对 WSL2 剪贴板支持和 Node 20 兼容性的持续修复，显示了社区对跨平台开发环境（特别是容器化和特殊 Linux 环境）的重视。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-05-31)

## 1. 今日速览
昨日发布的 **v1.0.57-3** 版本重点修复了崩溃后的会话恢复机制，并优化了高对比度模式下的视觉体验。然而，社区反馈显示新版本引入了多处严重的交互回归问题，包括 Linux 平台的复制功能失效、Windows 平台 MCP 服务启动失败，以及一个高危的权限确认自动绕过问题。开发者对工具的基础稳定性和跨平台兼容性表达了强烈关注。

## 2. 版本发布
**版本号**: `v1.0.57-3`
- **改进**: 优化了高对比度差异背景的颜色深度，提升了文本可读性。
- **修复**: 修复了因崩溃导致会话日志残留部分数据从而无法正确恢复会话的问题。
[查看 Release 详情](github/copilot-cli Release v1.0.57-3)

## 3. 社区热点 Issues (Top 10)

1.  **[高危] 权限钩子被自动绕过 (#3590)**
    *   **链接**: [github/copilot-cli Issue #3590](github/copilot-cli Issue #3590)
    *   **摘要**: 自 v1.0.53 起，当 `PreToolUse` 钩子返回 `permissionDecision: "ask"` 时，TUI 权限对话框会闪现后立即自动批准，导致安全确认流程失效，存在安全隐患。

2.  **[痛点] 德语键盘无法输入 "@" 符号 (#1999)**
    *   **链接**: [github/copilot-cli Issue #1999](github/copilot-cli Issue #1999)
    *   **摘要**: 这是一个长期存在的阻塞性问题，德语键盘布局下 Alt-Gr + Q 无法输入 "@"，导致 CLI 在该地区几乎不可用。社区对此问题的解决进度表示焦虑。

3.  **[回归] Linux 平台复制功能失效 (#3586)**
    *   **链接**: [github/copilot-cli Issue #3586](github/copilot-cli Issue #3586)
    *   **摘要**: 用户报告自 v1.0.49 起 Linux 平台复制功能停止工作，严重影响了基本的工作流效率，虽然之前有类似报告，但问题似乎并未完全解决或出现了回归。

4.  **[平台] Windows MCP 服务启动失败 (#3576)**
    *   **链接**: [github/copilot-cli Issue #3576](github/copilot-cli Issue #3576)
    *   **摘要**: 在 Windows v1.0.56-1 版本中，所有使用 `npx` 启动的 stdio MCP 服务器均无法启动（报错 ENOENT/EINVAL），阻碍了 Windows 用户的插件使用。

5.  **[稳定性] Windows 崩溃导致日志损坏 (#3593)**
    *   **链接**: [github/copilot-cli Issue #3593](github/copilot-cli Issue #3593)
    *   **摘要**: 尽管新版修复了会话恢复逻辑，但仍有用户报告 Windows 崩溃后 `events.jsonl` 处于损坏状态，导致无法恢复会话。

6.  **[功能] 请求恢复任务中途切换自动驾驶模式 (#2203)**
    *   **链接**: [github/copilot-cli Issue #2203](github/copilot-cli Issue #2203)
    *   **摘要**: 社区强烈呼吁恢复 v0.0.421 之前的行为，允许用户在 Agent 执行任务时通过 Shift+Tab 动态切换到自动驾驶模式，此功能对工作流灵活性至关重要。

7.  **[认证] MCP 静默令牌刷新失败 (#3583)**
    *   **链接**: [github/copilot-cli Issue #3583](github/copilot-cli Issue #3583)
    *   **摘要**: 使用 Azure AD 的 MCP 服务器在空闲约 60 分钟后，因令牌刷新发送了错误的参数格式导致认证失败 (AADSTS90009)，影响长时间连接的稳定性。

8.  **[无障碍] 视觉高亮移除引发回归 (#3591)**
    *   **链接**: [github/copilot-cli Issue #3591](github/copilot-cli Issue #3591)
    *   **摘要**: 此前为了解决视觉抱怨移除了用户提示的背景高亮，但这破坏了长对话中的认知解析便利性，社区呼吁提供配置选项以恢复该无障碍特性。

9.  **[交互] 快捷键绑定失效 (#3587)**
    *   **链接**: [github/copilot-cli Issue #3587](github/copilot-cli Issue #3587)
    *   **摘要**: 用户报告在 MacOS/Tmux 环境下，`Ctrl+C`（取消请求）和 `Ctrl+Shift+J`（换行）快捷键失效，严重影响操作体验。

10. **[配置] MCP 配置忽略 disabled 字段 (#3582)**
    *   **链接**: [github/copilot-cli Issue #3582](github/copilot-cli Issue #3582)
    *   **摘要**: 在配置文件中设置 `"disabled": true` 的 MCP 服务器仍然会被加载，配置逻辑失效，导致无法灵活管理工具集。

## 4. 重要 PR 进展
过去 24 小时内无 PR 更新。

## 5. 功能需求趋势
*   **稳定性和健壮性优先**: 近期关于崩溃恢复、会话日志损坏、长会话报错的反馈激增，显示出用户对底层稳定性的关注度超过了新功能。
*   **企业级与生态集成 (MCP)**: MCP (Model Context Protocol) 相关问题占据显著比例，包括 Windows 启动支持、认证刷新、配置管理等，表明用户正积极尝试构建和集成自定义工具链。
*   **交互体验控制权**: 开发者希望对 Agent 行为有更细粒度的控制，如请求恢复“自动驾驶模式切换”功能 (#2203)、设置默认 Agent (#3571) 以及精确控制权限钩子。

## 6. 开发者关注点
*   **基础交互回归**: 开发者对新版本中出现的“复制失效”、“键盘快捷键失效”等基础功能退化表示不满，这直接影响了开发效率。
*   **跨平台一致性**: Windows 和 Linux 平台在输入法和 MCP 服务启动上的差异化问题频发，反映出跨平台测试覆盖的不足。
*   **长会话支持**: Issue #3588 指出超长会话会导致模型响应失败，开发者呼吁优化内存或上下文管理机制以支持长时间运行的复杂任务。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-05-31)

## 1. 今日速览
今日社区最显著的动态是用户对项目战略方向的质疑，针对“抛弃旧版 kimi-cli 重做 Kimi Code”引发了关于信任与社区分裂的激烈讨论。技术层面，开发者重点关注 ACP（Agent Communication Protocol）协议的深度集成，多个相关 PR 正在推进会话历史重放与权限控制功能。此外，v1.46 版本出现的登录失败问题成为急需修复的阻断性 Bug。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues
本期精选 6 条活跃 Issue，重点涵盖战略质疑、阻断性 Bug 及兼容性需求。

1.  **[OPEN] 为什么抛弃kimi-cli重做kimi code?老的没做好还要分裂社区？ (#2381)**
    *   **重要程度**：⭐⭐⭐⭐⭐
    *   **简述**：用户强烈质疑 MoonshotAI 放弃原有 `kimi-cli` 另起炉灶的行为，认为这损害了生产力工具用户的信任，并导致社区分裂。这反映了核心用户对产品长期维护策略的深层担忧。
    *   **链接**：[MoonshotAI/kimi-cli Issue #2381](https://github.com/MoonshotAI/kimi-cli/issues/2381)

2.  **[OPEN] [bug] Login to KimiCode getting error and unsuccesful after upgrade to 1.46 (#2403)**
    *   **重要程度**：⭐⭐⭐⭐⭐
    *   **简述**：升级至 v1.46 后出现登录失败，属于阻断性 Bug，直接影响用户正常使用，需官方尽快介入修复。
    *   **链接**：[MoonshotAI/kimi-cli Issue #2403](https://github.com/MoonshotAI/kimi-cli/issues/2403)

3.  **[OPEN] [bug] Error: [compaction.failed] APIStatusError: 400 The request was rejected because it was considered high risk (#2402)**
    *   **重要程度**：⭐⭐⭐⭐
    *   **简述**：用户在使用 Kimi-k2.6 模型时触发“高风险”拦截导致压缩任务失败，涉及安全策略误伤问题，影响工作流连续性。
    *   **链接**：[MoonshotAI/kimi-cli Issue #2402](https://github.com/MoonshotAI/kimi-cli/issues/2402)

4.  **[OPEN] Feature Request: Support loading CLAUDE.md alongside AGENTS.md for Claude Code compatibility (#2401)**
    *   **重要程度**：⭐⭐⭐
    *   **简述**：开发者请求支持读取 `CLAUDE.md`，以便在混合工作流中复用已有的 Claude Code 项目配置，体现了跨工具兼容性需求。
    *   **链接**：[MoonshotAI/kimi-cli Issue #2401](https://github.com/MoonshotAI/kimi-cli/issues/2401)

5.  **[CLOSED] Feature Request: PermissionRequest hook event for programmatic auto-approval (#2154)**
    *   **重要程度**：⭐⭐⭐
    *   **简述**：请求增加 Hook 事件以支持自动化权限批准，旨在减少重复性操作的确认弹窗，提升自动化工作流效率。
    *   **链接**：[MoonshotAI/kimi-cli Issue #2154](https://github.com/MoonshotAI/kimi-cli/issues/2154)

6.  **[CLOSED] Feature request: Configurable prompt symbols in config.toml (#2155)**
    *   **重要程度**：⭐⭐
    *   **简述**：请求将 TUI 提示符中的 Emoji 改为可配置字符，解决了终端搜索历史记录不便的痛点。
    *   **链接**：[MoonshotAI/kimi-cli Issue #2155](https://github.com/MoonshotAI/kimi-cli/issues/2155)

## 4. 重要 PR 进展
本期共有 6 个活跃 PR，主要聚焦于 ACP 协议栈优化与 Shell 交互体验改进。

1.  **[OPEN] feat(acp): support permission mode switching (#2364)**
    *   **内容**：实现协议级的 ACP 权限模式切换，允许会话动态调整权限策略，属于 Agent 通信协议栈的关键功能增强。
    *   **链接**：[MoonshotAI/kimi-cli PR #2364](https://github.com/MoonshotAI/kimi-cli/pull/2364)

2.  **[OPEN] fix(acp): replay loaded session history (#2363)**
    *   **内容**：修复并增强会话历史重放功能，确保在 ACP 协议下加载会话时能正确回放历史上下文。
    *   **链接**：[MoonshotAI/kimi-cli PR #2363](https://github.com/MoonshotAI/kimi-cli/pull/2363)

3.  **[OPEN] fix(acp): assign message ids to streamed content (#2359)**
    *   **内容**：为流式传输的内容分配 `messageId`，解决了与服务端 Agent（如 PwrAgent）交互时的消息追踪问题。
    *   **链接**：[MoonshotAI/kimi-cli PR #2359](https://github.com/MoonshotAI/kimi-cli/pull/2359)

4.  **[OPEN] fix(shell): persist pasted text placeholders (#2388)**
    *   **内容**：修复长文本粘贴后的占位符在会话历史召回后丢失的问题，提升了多轮对话中粘贴代码的持久化体验。
    *   **链接**：[MoonshotAI/kimi-cli PR #2388](https://github.com/MoonshotAI/kimi-cli/pull/2388)

5.  **[CLOSED] fix(shell): enhance shell completion navigation and tab handling (#776)**
    *   **内容**：改进 Shell 补全的导航和 Tab 键处理逻辑，提升终端交互的流畅度。
    *   **链接**：[MoonshotAI/kimi-cli PR #776](https://github.com/MoonshotAI/kimi-cli/pull/776)

6.  **[CLOSED] feat(ui): append space automatically after file completion (#777)**
    *   **内容**：文件路径补全后自动追加空格，优化命令行输入体验。
    *   **链接**：[MoonshotAI/kimi-cli PR #777](https://github.com/MoonshotAI/kimi-cli/pull/777)

## 5. 功能需求趋势
*   **跨工具兼容性**：开发者希望在 Kimi Code 与 Claude Code 等竞品之间无缝切换，要求支持通用的配置文件（如 `CLAUDE.md`）。
*   **自动化与 Hooks**：社区对 Hook 系统的诉求从简单的“拦截”扩展到“自动批准”，显示出将 CLI 集成到无人值守 CI/CD 流水线的强烈意向。
*   **可配置性 UI**：用户希望摆脱硬编码的 UI 元素（如 Emoji 提示符），追求更符合个人习惯的终端交互环境。

## 6. 开发者关注点
*   **产品战略信任危机**：重做项目而非迭代旧版的决策引发了开发者对“技术负债处理”和“产品生命周期管理”的担忧，这是今日社区情绪的焦点。
*   **版本稳定性**：v1.46 升级导致的登录失败再次提醒开发者，CLI 工具的鉴权模块稳定性是用户信心的基石。
*   **协议层标准化**：从 PR 动态来看，开发团队正大力投入 ACP（Agent Communication Protocol）支持，暗示未来 Kimi Code CLI 将作为客户端连接更复杂的云端 Agent 服务。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-05-31)

## 1. 今日速览
OpenCode 今日发布 **v1.15.13** 版本，重点修复了 Anthropic Opus 4.7+ 自适应推理中思维块丢失的问题，并增强了 Session 元数据存储能力。社区方面，**GPT 模型响应延迟**与**沙箱隔离机制**引发高度讨论，同时 **Plan Mode 下的文件写入违规**问题再次成为焦点。功能层面，社区对**动态工作流**和**递归 LLM (RLM)** 等高级架构的支持呼声渐高。

## 2. 版本发布
**v1.15.13** 已发布，主要更新如下：
- **Bugfixes**: 修复了 Gateway Anthropic Opus 4.7+ 自适应推理返回空思维块的问题，现保留摘要思维内容。
- **Improvements**:
  - Session 现支持通过 API 和 SDK 存储自定义元数据（贡献者 @shantur）。
  - 优化配置加载逻辑，现支持从打开位置向上递归查找配置。

## 3. 社区热点 Issues (Top 10)

1.  **[#29079 GPT Models takes too long to respond](https://github.com/anomalyco/opencode/issues/29079)**
    *   **热度**: 👍 48 | 💬 113
    *   **解读**: 用户报告 GPT 模型（特别是 GPT-5.4）在处理简单指令时偶尔会出现数分钟的延迟。这是目前社区反馈最活跃的问题，涉及到模型网关的稳定性与性能优化。

2.  **[#2242 Is there a way to sandbox the agent ?](https://github.com/anomalyco/opencode/issues/2242)**
    *   **热度**: 👍 50 | 💬 40
    *   **解读**: 长期悬而未决的安全性问题。用户询问是否有限制 Agent 仅访问当前目录的沙箱机制（类似 macOS 的 seatbelt）。鉴于 Agent 权限控制的敏感性，该 Issue 一直备受关注。

3.  **[#25263 Bug Report: File Write Executed in Plan Mode](https://github.com/anomalyco/opencode/issues/25263)**
    *   **热度**: 👍 0 | 💬 5
    *   **解读**: 严重的安全/逻辑漏洞。用户报告在 Plan Mode（只读模式）下，Agent 仍然执行了文件写入操作。这打破了系统的安全边界承诺，需引起开发团队高度重视。

4.  **[#20802 Custom OpenAI-compatible providers: image file attachments error](https://github.com/anomalyco/opencode/issues/20802)**
    *   **热度**: 👍 6 | 💬 14
    *   **解读**: 兼容性问题。使用自定义 OpenAI 兼容提供商时，图像附件无法正确传递给视觉模型，影响了多模态功能的通用性。

5.  **[#29059 Add Dynamic workflows for repeatable multi-step automation](https://github.com/anomalyco/opencode/issues/29059)**
    *   **热度**: 👍 8 | 💬 2
    *   **解读**: 功能请求。用户希望引入项目级本地工作流，以支持可重复的多步骤自动化任务。这是向 Agent 系统化、流程化演进的重要需求。

6.  **[#13393 Add a new experimental "hashline" edit mode](https://github.com/anomalyco/opencode/issues/13393)**
    *   **热度**: 👍 28 | 💬 3
    *   **解读**: 高赞同功能请求。提议引入新的 "hashline" 编辑模式，据称在某些场景下比现有编辑策略更高效，社区期待更精细的代码编辑控制。

7.  **[#26587 v1.14.42+ flagged by Microsoft Defender SmartScreen](https://github.com/anomalyco/opencode/issues/26587)**
    *   **热度**: 👍 0 | 💬 6
    *   **解读**: 信任问题。自 v1.14.42 起，Windows 安装包被 Defender 标记，影响了用户的安装体验与信任度。

8.  **[#27692 Enable explicit context caching for Alibaba Cloud Models](https://github.com/anomalyco/opencode/issues/27692)**
    *   **热度**: 👍 0 | 💬 4
    *   **解读**: 针对阿里云 DashScope/Qwen 模型的优化请求。显式启用 Context Cache 可显著降低延迟和成本，反映了国内用户对国产模型支持细节的关注。

9.  **[#29703 Allow changing project folder path without losing session history](https://github.com/anomalyco/opencode/issues/29703)**
    *   **热度**: 👍 2 | 💬 3
    *   **解读**: 项目管理痛点。移动项目目录会导致 Session 历史丢失，用户希望 OpenCode 能支持路径迁移或使用相对路径存储元数据。

10. **[#30039 In plan mode the IA modified a file](https://github.com/anomalyco/opencode/issues/30039)**
    *   **热度**: 👍 0 | 💬 3
    *   **解读**: 与 #25263 类似，再次证实 Plan Mode 约束失效的问题，该问题已在今日被关闭，可能已有修复方案。

## 4. 重要 PR 进展 (Top 10)

1.  **[#30051 feat(tui): add synthetic scenario previews](https://github.com/anomalyco/opencode/pull/30051)**
    *   **内容**: 为 TUI 添加合成场景预览模式，引入确定性合成会话数据，用于测试并行子代理、工具错误等复杂情况，提升 UI 测试的稳定性。

2.  **[#30046 fix(session): preserve Anthropic thinking signature](https://github.com/anomalyco/opencode/pull/30046)**
    *   **内容**: 修复 Anthropic API 在扩展思维模式下出现的 "thinking blocks cannot be modified" 错误，确保思维签名在跨模型调用时得以保留。

3.  **[#29858 feat(ui): add collapsible reasoning summaries](https://github.com/anomalyco/opencode/pull/29858)**
    *   **内容**: 新增可折叠的推理摘要 UI 组件，优化长推理内容的展示体验，避免界面过于冗长。

4.  **[#29860 fix(opencode): bound compaction request payload](https://github.com/anomalyco/opencode/pull/29860)**
    *   **内容**: 修复 `/compact` 接口在处理超大会话时可能发生的负载溢出问题，提升了系统的稳定性。

5.  **[#30042 fix(session): use parentID instead of ID ordering for loop exit](https://github.com/anomalyco/opencode/pull/30042)**
    *   **内容**: 修复会话循环退出条件的逻辑错误。使用 ID 排序判断退出不可靠，改为使用 parentID 确保逻辑正确性。

6.  **[#23755 fix: preserve thinking/redacted_thinking blocks in Anthropic message transforms](https://github.com/anomalyco/opencode/pull/23755)**
    *   **内容**: 另一个针对 Anthropic 思维块保留的修复 PR，解决消息转换过程中思维内容丢失导致的 API 报错。

7.  **[#30003 fix(opencode): wait for shell output before returning](https://github.com/anomalyco/opencode/pull/30003)**
    *   **内容**: 修复 Shell 工具的竞态条件，确保在返回前 stdout/stderr 流已完全排空，解决命令输出截断问题。

8.  **[#29928 fix(desktop): collapse full-context git diffs](https://github.com/anomalyco/opencode/pull/29928)**
    *   **内容**: 优化桌面端 Git Diff 显示，折叠全文件上下文，解决生成大补丁时渲染整个文件导致的性能问题。

9.  **[#28584 fix(command): fetch MCP prompts dynamically instead of caching at init](https://github.com/anomalyco/opencode/pull/28584)**
    *   **内容**: 改进 MCP 提示词加载机制，从启动时静态缓存改为动态获取，解决了配置更新不生效的问题。

10. **[#29217 feat(tui): Add inline $skill invocations](https://github.com/anomalyco/opencode/pull/29217)**
    *   **内容**: 增强提示词编辑器，支持通过 `$` 内联调用技能，提升了交互效率和技能使用的便捷性。

## 5. 功能需求趋势

*   **安全与沙箱隔离**: 社区对 Agent 的权限控制关注度极高，特别是文件系统访问限制和 Plan Mode 的只读约束失效问题。
*   **高级模型适配**: 针对 Anthropic Opus 4.7+ 的 "Thinking" 模式适配、阿里云模型的 Context Cache 支持等需求增加，显示用户对最新模型特性的追逐。
*   **自动化工作流**: 用户不再满足于单次问答，开始要求支持可复用、多步骤的 Dynamic Workflows 和 RLM (Recursive Language Model) 模式。
*   **多模态兼容性**: 自定义 Provider 的视觉能力接入问题频发，表明 OpenCode 正被广泛用于接入各类非标准 OpenAI 接口的模型。

## 6. 开发者关注点

*   **稳定性痛点**: GPT 模型响应延迟、Shell 输出竞态、会话压缩溢出等问题表明系统在高负载或特定模型下的稳定性仍需打磨。
*   **项目管理与迁移**: 项目路径变更导致 Session 丢失是开发者反馈的普遍痛点，反映出本地会话存储机制在灵活性上的不足。
*   **IDE 集成体验**: JetBrains 插件模型记忆问题、文件目录同步延迟等问题显示桌面端与 IDE 的集成体验仍有优化空间。
*   **安全信任**: 代码签名问题导致的杀毒软件误报直接影响开发者体验，需解决分发渠道的信任度问题。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-05-31)

## 1. 今日速览
Qwen Code 今日发布了 **v0.17.0-nightly** 版本，主要修复了 Rewind 功能中的错误提示问题。社区今日焦点集中在**稳定性和认证体验**上，开发者反馈了 JetBrains IDE 插件的登录死循环（OAuth 废弃遗留问题）及 `--resume` 模式下的严重内存泄漏（OOM）。核心团队正在推进 Daemon 模式重构、独立安装包的自动更新支持以及 Linux 剪贴板兼容性修复，整体架构正向更健壮的 ACP 协议和桌面端应用演进。

## 2. 版本发布
- **v0.17.0-nightly.20260531.c699738f9**
  - **主要更新**：
    - 修复了在对话中段进行 Rewind（回溯）时出现错误的 "compressed turn" 提示的问题 (`fix(rewind)`)。
  - **链接**：[Release v0.17.0-nightly.20260531.c699738f9](https://github.com/QwenLM/qwen-code/releases/tag/v0.17.0-nightly.20260531.c699738f9)

## 3. 社区热点 Issues (Top 10)

1.  **[P1] JetBrains IDE 认证死循环陷阱** `#4637`
    - **概述**：由于旧版 `qwen-oauth` 已废弃但仍在配置中返回，导致 JetBrains 用户在认证时陷入死循环，无法正常使用。
    - **重要性**：这是一个 P1 级别的严重阻断性问题，影响 IDE 端用户接入。
    - **链接**：[QwenLM/qwen-code Issue #4637](https://github.com/QwenLM/qwen-code/issues/4637)

2.  **`--resume` 模式下子进程内存溢出 (OOM)** `#4624`
    - **概述**：用户报告在使用 `--resume` 恢复会话时，子进程内存持续增长直至崩溃，疑似上下文记录未正确释放。
    - **重要性**：严重影响长会话开发的稳定性，已有对应 PR 正在修复。
    - **链接**：[QwenLM/qwen-code Issue #4624](https://github.com/QwenLM/qwen-code/issues/4624)

3.  **Rider 无法登录与重定向循环** `#4493`
    - **概述**：Rider IDE 用户在网页登录状态下遭遇无限重定向，无法调用阿里云 Token Plan。
    - **重要性**：IDE 集成的常见痛点，影响用户体验。
    - **链接**：[QwenLM/qwen-code Issue #4493](https://github.com/QwenLM/qwen-code/issues/4493)

4.  **macOS 自动更新权限失败** `#4627`
    - **概述**：全局安装模式下（需 root 权限），自动更新因 `EACCES` 错误失败。
    - **重要性**：影响 CLI 用户的升级体验，社区已提出降级方案。
    - **链接**：[QwenLM/qwen-code Issue #4627](https://github.com/QwenLM/qwen-code/issues/4627)

5.  **Windows 环境 MCP 连接极不稳定** `#4641`
    - **概述**：配置 8 个 MCP Server 时，每次启动仅 3-5 个可用，连接状态随机。
    - **重要性**：MCP 是扩展核心，稳定性至关重要。
    - **链接**：[QwenLM/qwen-code Issue #4641](https://github.com/QwenLM/qwen-code/issues/4641)

6.  **SubAgent 执行脚本缺少上下文环境变量** `#4645`
    - **概述**：建议在 SubAgent 执行脚本时自动注入 `Session ID` 等环境变量，以便日志追踪。
    - **重要性**：对生产环境调试和可观测性有重要意义。
    - **链接**：[QwenLM/qwen-code Issue #4645](https://github.com/QwenLM/qwen-code/issues/4645)

7.  **IntelliJ IDEA 本地 Ollama 模型无法工作** `#2724`
    - **概述**：插件强制登录云服务，导致无法使用本地 Ollama 模型。
    - **重要性**：本地模型支持是开发者的强需求。
    - **链接**：[QwenLM/qwen-code Issue #2724](https://github.com/QwenLM/qwen-code/issues/2724)

8.  **CLI Loading 提示语引发反感** `#4642`
    - **概述**：用户抱怨 CLI 启动时的 "正在努力搬砖" 等随机提示语无法关闭，希望提供配置选项。
    - **重要性**：UI/UX 细节反馈，反映了部分开发者的极简主义偏好。
    - **链接**：[QwenLM/qwen-code Issue #4642](https://github.com/QwenLM/qwen-code/issues/4642)

9.  **ACP 协议 v2 Draft Message ID 支持** `#4503`
    - **概述**：请求支持 Agent Client Protocol v2 草案中的 Message ID 特性，以优化会话管理。
    - **重要性**：协议层面的升级，有助于多端同步和会话追踪。
    - **链接**：[QwenLM/qwen-code Issue #4503](https://github.com/QwenLM/qwen-code/issues/4503)

10. **本地/云端模型智能路由请求** `#4640`
    - **概述**：用户建议增加“智能路由”功能，简单任务走本地模型，复杂任务走云端 API。
    - **重要性**：极具价值的功能需求，能显著降低使用成本。
    - **链接**：[QwenLM/qwen-code Issue #4640](https://github.com/QwenLM/qwen-code/issues/4640)

## 4. 重要 PR 进展 (Top 10)

1.  **feat(daemon): 保持多客户端会话状态一致性** `#4613`
    - **内容**：修复了多个客户端（Chat、Terminal、IDE）共享同一 Daemon 会话时，模型和审批模式状态不同步的问题。
    - **意义**：大幅提升多端协同开发体验。
    - **链接**：[QwenLM/qwen-code PR #4613](https://github.com/QwenLM/qwen-code/pull/4613)

2.  **fix(core,cli): 修复 Resume 导致的 OOM** `#4644`
    - **内容**：将全量历史记录的深拷贝替换为浅拷贝或尾部读取，避免长会话内存爆炸。
    - **意义**：直接解决 Issue #4624，关键性能修复。
    - **链接**：[QwenLM/qwen-code PR #4644](https://github.com/QwenLM/qwen-code/pull/4644)

3.  **fix(acp): 移除废弃的 Qwen OAuth 方法** `#4639`
    - **内容**：停止在 ACP 认证方法中广播已废弃的 `qwen-oauth`，防止用户陷入死循环。
    - **意义**：解决 Issue #4637 的关键修复。
    - **链接**：[QwenLM/qwen-code PR #4639](https://github.com/QwenLM/qwen-code/pull/4639)

4.  **fix(clipboard): Linux 平台原生图片粘贴支持** `#4647`
    - **内容**：在 Linux/WSL2+Wayland 环境下替换原生模块，改用 `wl-paste`/`xclip` 处理剪贴板图片。
    - **意义**：解决了 Linux 桌面端长期存在的剪贴板兼容痛点。
    - **链接**：[QwenLM/qwen-code PR #4647](https://github.com/QwenLM/qwen-code/pull/4647)

5.  **feat(cli): 独立安装包自动更新支持** `#4629`
    - **内容**：为非 npm 安装的独立二进制版本提供自动更新能力，包含校验和验证。
    - **意义**：完善 CLI 的分发和更新机制。
    - **链接**：[QwenLM/qwen-code PR #4629](https://github.com/QwenLM/qwen-code/pull/4629)

6.  **feat(daemon): 限制超大同理媒体体积** `#4646`
    - **内容**：引入 `clampInlineMediaPart` 工具，将大于 10MB 的内联媒体替换为占位符，防止请求过大。
    - **意义**：防止因粘贴大文件导致的服务端报错或 Token 超限。
    - **链接**：[QwenLM/qwen-code PR #4646](https://github.com/QwenLM/qwen-code/pull/4646)

7.  **feat(desktop): 桌面端应用打包** `#3778`
    - **内容**：增加 `packages/desktop/`，集成 Qwen ACP SDK。
    - **意义**：标志着官方桌面客户端开发正式启动。
    - **链接**：[QwenLM/qwen-code PR #3778](https://github.com/QwenLM/qwen-code/pull/3778)

8.  **fix(config): 提前加载 .env 变量** `#4474`
    - **内容**：修复 `settings.json` 中引用的环境变量无法被 `~/.qwen/.env` 解析的问题。
    - **意义**：修复了配置加载顺序的逻辑漏洞。
    - **链接**：[QwenLM/qwen-code PR #4474](https://github.com/QwenLM/qwen-code/pull/4474)

9.  **feat(cli): 增加 CPU Profiling 支持** `#4620`
    - **内容**：增加生成 `.cpuprofile` 文件的功能，支持通过环境变量或信号触发，方便性能分析。
    - **意义**：为排查性能瓶颈（如 CPU 飙高）提供了专业工具。
    - **链接**：[QwenLM/qwen-code PR #4620](https://github.com/QwenLM/qwen-code/pull/4620)

10. **refactor(serve): 提取 DaemonWorkspaceService** `#4563`
    - **内容**：重构 AcpSessionBridge，提取工作区级别的状态管理服务。
    - **意义**：核心架构重构，为后续功能解耦打基础。
    - **链接**：[QwenLM/qwen-code PR #4563](https://github.com/QwenLM/qwen-code/pull/4563)

## 5. 功能需求趋势

1.  **IDE 深度集成与认证修复**：JetBrains 系列插件（Rider, IntelliJ）的登录认证问题是当前最高频的反馈点，用户迫切需要解决 OAuth 死循环和本地模型（Ollama）接入受限的问题。
2.  **本地/云端混合路由**：开发者希望工具能智能识别任务复杂度，自动在本地模型和云端 API 之间切换，以平衡成本与性能。
3.  **MCP 稳定性**：随着 MCP（Model Context Protocol）生态的扩展，Windows 及多平台下的 MCP 连接稳定性成为新的关注焦点。
4.  **可观测性与调试能力**：社区对 SubAgent 注入环境变量、CPU Profiling 等功能的需求增加，表明用户正在将 Qwen Code 用于更严肃的生产环境开发。

## 6. 开发者关注点

-   **内存管理**：长会话和 `--resume` 模式下的内存泄漏（OOM）是开发者最担忧的痛点，今日已有针对性的修复 PR，值得持续关注合并情况。
-   **安装与权限**：macOS 全局安装后的自动更新权限问题（EACCES）影响了升级体验，开发者呼吁更优雅的降级或独立安装方案。
-   **UI 噪音**：部分开发者对 CLI 中的花哨 Loading 文案表示反感，倾向于更专业、纯粹的交互界面。
-   **配置灵活性**：用户希望通过 `.env` 或 `settings.json` 灵活控制模型行为和环境变量注入，现有配置加载逻辑的 Bug 亟待修复。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 (2026-05-31)

## 1. 今日速览
今日社区活跃度较高，重点围绕**本土化体验优化**与**模型生态扩展**展开。虽然无正式版本发布，但多项 PR 显示开发重心已转向修复中文输入法适配、增加百度搜索后端以解决国内网络问题，并引入了小米 MiMo 等国产模型支持。此外，RISC-V 架构支持的合并标志着项目正在向更广泛的硬件平台延伸。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues (Top 10)

1.  **[Bug] config.toml 中开启记忆功能无效** [#2353](https://github.com/Hmbown/CodeWhale Issue #2353)
    *   **重要性**：核心功能受阻。用户按文档配置后仍报错 "user memory is disabled"，直接影响上下文记忆能力的使用。
    *   **社区反应**：7 条评论，确认了配置文件指令与实际行为不符。

2.  **[Bug] 未适配中文输入法** [#2323](https://github.com/Hmbown/CodeWhale Issue #2323)
    *   **重要性**：阻碍性 Bug。在 TUI 中使用中文输入法时会出现提示框不隐藏、弹窗输入错乱等问题，严重影响中文用户体验。
    *   **社区反应**：开发者确认了多种复现场景，是本土化亟需解决的问题。

3.  **[Enhancement] 中国市场改进追踪** [#755](https://github.com/Hmbown/CodeWhale Issue #755)
    *   **重要性**：战略级路线图。涵盖 Mac 键位适配、Web 搜索后端替换（适应国内网络）、Agent 功能增强等关键任务。
    *   **社区反应**：作为长期 Issue，持续有开发者跟进讨论细节。

4.  **[Bug] 中国用户无法访问 DuckDuckGo 搜索** [#2376](https://github.com/Hmbown/CodeWhale Issue #2376)
    *   **重要性**：网络连通性。默认搜索后端在国内不可用，导致 Web Search 功能失效。
    *   **社区反应**：用户建议切回 Bing 或支持自定义，PR #2371 已对此做出响应。

5.  **[Enhancement] 支持自定义 DeepSeek 兼容 API 提供商** [#2247](https://github.com/Hmbown/CodeWhale Issue #2247)
    *   **重要性**：生态扩展。允许接入本地部署或第三方中转 API，打破了官方 API 的单一限制。
    *   **社区反应**：需求强烈，已关闭并可能通过其他 PR 实现。

6.  **[Bug] 终端内容渲染混乱** [#2374](https://github.com/Hmbown/CodeWhale Issue #2374)
    *   **重要性**：UI 稳定性。长时间使用后会出现画面重叠和覆盖，影响阅读体验。
    *   **社区反应**：用户反馈该问题在连续操作复现率高。

7.  **[Proposal] 非 Docker 模式下独立启动多项目** [#2217](https://github.com/Hmbown/CodeWhale Issue #2217)
    *   **重要性**：权限管理痛点。官方镜像非 root 用户运行缺乏 sudo 权限，限制了安装依赖等操作。
    *   **社区反应**：提出了具体的权限提升方案和安全性讨论。

8.  **[Bug] Windows 终端执行长进程脚本后输入失效** [#1690](https://github.com/Hmbown/CodeWhale Issue #1690)
    *   **重要性**：跨平台兼容性。Windows 端缺乏 Unix 的进程树管理能力，导致遗留进程问题。
    *   **社区反应**：已定位原因，正在进行修复方案讨论。

9.  **[Bug] Statusline 选择器隐藏未配置项** [#2309](https://github.com/Hmbown/CodeWhale Issue #2309)
    *   **重要性**：可发现性。UI 仅显示配置文件中已有的项，用户无法通过界面发现新的可用功能。
    *   **社区反应**：建议 UI 应展示所有可用选项而非仅配置项。

10. **[Enhancement] 建立微信群** [#978](https://github.com/Hmbown/CodeWhale Issue #978)
    *   **重要性**：社区建设。热度最高的 Issue 之一（16 条评论），反映了国内用户对即时交流渠道的强烈需求。

## 4. 重要 PR 进展 (Top 10)

1.  **feat: add Baidu AI Search backend for web_search** [#2371](https://github.com/Hmbown/CodeWhale PR #2371)
    *   **内容**：新增百度 AI 搜索后端，解决中国大陆用户无法使用默认 DuckDuckGo/Bing 的问题，增强本土化搜索能力。

2.  **feat: add Xiaomi MiMo provider support** [#2240](https://github.com/Hmbown/CodeWhale PR #2240) / [#2246](https://github.com/Hmbown/CodeWhale PR #2246)
    *   **内容**：集成小米 MiMo 大模型（mimo-v2.5-pro 等），支持思维链切换，扩展了国产大模型生态支持。

3.  **feat: per-cell thinking fold/unfold via Space key** [#2385](https://github.com/Hmbown/CodeWhale PR #2385)
    *   **内容**：允许通过空格键折叠/展开 Thinking 块，优化长思考内容的阅读体验，解决输出过长干扰对话流的问题。

4.  **fix: gate task_shell_start behind allow_shell** [#2384](https://github.com/Hmbown/CodeWhale PR #2384)
    *   **内容**：安全修复。修复 `task_shell_start` 绕过 `allow_shell` 安全门禁的漏洞，统一了 Shell 权限控制边界。

5.  **feat: read global AGENTS.md from ~/.agents/** [#2236](https://github.com/Hmbown/CodeWhale PR #2236)
    *   **内容**：已合并。支持全局读取 `~/.agents/AGENTS.md`，方便开发者跨项目复用系统级 Prompt 规则，无需在每个项目中重复配置。

6.  **Add RISC-V (riscv64gc-unknown-linux-gnu) prebuilt binary support** [#2383](https://github.com/Hmbown/CodeWhale PR #2383)
    *   **内容**：增加 RISC-V 架构的预编译二进制支持，适配国产芯片及边缘计算场景。

7.  **feat(state): add parent_entry_id on the message table for fork support** [#2308](https://github.com/Hmbown/CodeWhale PR #2308)
    *   **内容**：已合并。为数据库增加 `parent_entry_id` 字段，为会话分叉功能打下基础，支持更复杂的对话树结构。

8.  **fix(tui): keep task shell tools eagerly loaded** [#2271](https://github.com/Hmbown/CodeWhale Issue #2271)
    *   **内容**：已合并。修复 Task Shell 工具首次调用失败的问题，解决 Windows 环境下的工具延迟加载导致的功能中断。

9.  **feat(lsp): add default Java and Vue language server mappings** [#2367](https://github.com/Hmbown/CodeWhale PR #2367)
    *   **内容**：已合并。默认支持 Java 和 Vue 的语言服务器映射，提升前后端主流技术栈的代码补全与诊断能力。

10. **feat: add Baidu AI Search backend for web_search** [#2161](https://github.com/Hmbown/CodeWhale PR #2161)
    *   **内容**：引入 `SlopLedger` 架构，用于追踪跨会话的“架构残留”，提升 Agent 在长时间运行后的可观测性。

## 5. 功能需求趋势

*   **本土化与网络适配**：社区对本土化体验的关注度飙升，主要集中在网络访问（DuckDuckGo 失效需替换百度）、中文输入法兼容性以及国产模型（如 MiMo）的集成上。
*   **UI/UX 细节打磨**：针对 TUI 界面的渲染性能、状态栏遮挡、思考块折叠等交互细节的优化需求明显，用户更倾向于直观、清爽且不干扰视线的界面设计。
*   **模型生态中立化**：用户不再满足于单一官方 API，对自定义 API 端点、本地部署支持以及多模型切换的需求日益常态化。

## 6. 开发者关注点

*   **配置系统稳健性**：Issue #2353 显示配置项不生效的问题打击了用户信心，开发者呼吁加强对配置文件解析与生效逻辑的测试覆盖。
*   **跨平台一致性**：Windows 端的进程管理、终端渲染以及中文输入法问题是反馈的高频区，跨平台体验一致性仍是主要痛点。
*   **权限与安全控制**：在赋予 Agent 更大权限（如 Shell 操作）的同时，如何精细化管理权限边界（如 #2384 的修复）是核心开发者关注的安全重心。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*