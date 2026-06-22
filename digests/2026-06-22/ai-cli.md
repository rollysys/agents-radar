# AI CLI 工具社区动态日报 2026-06-22

> 生成时间: 2026-06-22 04:43 UTC | 覆盖工具: 8 个

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

# AI CLI 工具生态横向对比分析报告 (2026-06-22)

## 1. 生态全景

当前 AI CLI 工具正从单一的代码辅助工具向**企业级智能体平台**演进。今日各主流工具的动态清晰地指向了三个核心趋势：**成本透明化**成为企业采用的先决条件，**多智能体协作与生命周期管理**取代简单的对话补全成为开发重心，**底层架构重构**（如 Rust 化、运行时解耦）则为复杂任务提供性能支撑。MCP（Model Context Protocol）生态的深度集成与安全加固标志着 CLI 工具正式迈入标准化插件时代。

## 2. 各工具活跃度对比

| 工具名称 | Issues 热度 | PR 活跃度 | 版本发布 | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenAI Codex** | 高 (成本激增引发大量讨论) | 极高 (10+ 核心重构PR) | 2 (Rust Alpha) | 成本争议、架构重构、Windows兼容 |
| **Claude Code** | 高 (兼容性危机) | 低 (仅2个维护PR) | 无 | 平台中断、成本管控、多Session |
| **Gemini CLI** | 中 (关注稳定性) | 高 (10+ 修复PR) | 无 | 安全修复、Agent挂起、会话持久化 |
| **Qwen Code** | 中 (语音功能适配) | 高 (10+ 功能PR) | 2 (v0.18.5) | 语音交互、工具循环修复、测试工程 |
| **DeepSeek TUI** | 中 (安全与重构) | 高 (安全加固PR) | 1 (更名CodeWhale) | 安全审查、Agent失控、架构重构 |
| **OpenCode** | 中 (用户体验) | 中 (功能优化PR) | 无 | MCP集成、用量API、TUI体验 |
| **Kimi Code CLI** | 低 (2个Issue) | 无 | 无 | 持久化记忆、MCP加载 |
| **GitHub Copilot** | - | - | - | 数据缺失 |

> **注**：Issues 热度基于点赞数与评论数综合评估；PR 活跃度基于重要功能提交数量。

## 3. 共同关注的功能方向

*   **成本透明度与配额管控**
    *   **涉及工具**: OpenAI Codex, Claude Code, OpenCode。
    *   **核心诉求**: 开发者对"静默消耗"表现出极度焦虑。OpenAI Codex 的 GPT-5.5 成本激增（Issue #28879）与 Claude Code 的后台配额消耗问题引发热议。社区强烈要求提供细粒度的 Token 用量 API 和熔断机制，企业级用户更关注计费逻辑的透明度。

*   **Agent 稳定性与生命周期管理**
    *   **涉及工具**: Gemini CLI, Qwen Code, DeepSeek TUI, Claude Code。
    *   **核心诉求**: Agent "失控"（挂起、死循环、状态误报）是普遍痛点。Gemini CLI 的 Agent 无限挂起、Qwen Code 的工具循环调用、DeepSeek TUI 的自我修改偏离，均显示出业界正致力于解决长周期任务下的可靠性问题。

*   **MCP 协议的深度集成与安全**
    *   **涉及工具**: OpenCode, Kimi CLI, OpenAI Codex, Qwen Code。
    *   **核心诉求**: 社区已不满足于基础的 MCP 连接，转向追求 OAuth 标准化认证、热重载支持以及沙箱环境下的安全隔离。这标志着 MCP 正从"能用"向"企业级安全"迈进。

## 4. 差异化定位分析

*   **OpenAI Codex**: **架构激进派**。率先进行 Rust 核心重构与会话运行时解耦，意在解决高并发下的性能瓶颈，显示了其构建底层"操作系统"级工具的野心。
*   **Claude Code**: **工作流编排派**。聚焦于跨 Session 通信与 Hook 可编程性，定位于复杂开发工作流的"胶水层"，但近期受困于平台兼容性（Android 不可用）与稳定性问题。
*   **Qwen Code**: **多模态先锋**。率先落地语音听写与视觉桥接功能，并在测试工程化上投入巨大，适合追求前沿交互体验的技术极客。
*   **Gemini CLI**: **安全与健壮性优先**。今日重点在于修复 Hook 注入漏洞与会话损坏恢复，体现了其对生产环境稳定性的严苛要求。
*   **DeepSeek TUI (CodeWhale)**: **本地化与控制狂**。通过项目更名与安全审查策略，强调对 Agent 行为的绝对控制（如编辑前读取、沙箱权限），适合对数据隐私和操作确定性要求高的场景。

## 5. 社区热度与成熟度

*   **OpenAI Codex**: **争议中快速迭代**。GPT-5.5 的成本问题引发了社区强烈的负面反馈，但底层架构的重构显示出团队正在为下一代能力铺路，处于"阵痛期"。
*   **Claude Code**: **成熟期的信任危机**。作为成熟度较高的工具，近期出现的 Android 平台彻底不可用及核心工具 Bug 正在消耗社区信任，官方响应速度显得滞后。
*   **Qwen Code & DeepSeek TUI**: **功能爆发期**。更名、语音功能上线、安全策略升级，显示出项目充满活力，对社区反馈响应迅速。
*   **Gemini CLI & OpenCode**: **稳步完善期**。主要集中在修复边缘场景 Bug 与优化开发者体验，社区氛围较为理性。

## 6. 值得关注的趋势信号

1.  **"Agent 经济学" 成为核心议题**：
    随着模型能力增强，Token 消耗不再线性增长。后台任务、思维链推理导致的"隐形账单"（如 OpenAI Codex Issue #26600）成为开发者痛点。**建议开发者**：在采用 CLI 工具时，优先选择具备实时成本看板或 Hook 拦截能力的工具，并设置硬性配额警报。

2.  **CLI 工具的"操作系统化"**：
    OpenAI Codex 的 Rust 重构与线程管理优化，Claude Code 的跨 Session 通信，均暗示 CLI 正演变为"开发环境操作系统"。**建议决策者**：关注支持 MCP 标准及具备插件生态的工具，避免被单一厂商的 CLI 生态锁定。

3.  **安全边界的左移**：
    DeepSeek TUI 的"自然语言审查"与 Gemini CLI 的"Hook 形状披露"表明，AI 工具正在补齐安全短板。AI 自动执行代码的权限将受到更严格的管控。**建议开发者**：尽早熟悉各工具的沙箱机制与权限配置，建立最小权限原则。

4.  **多模态交互的刚需化**：
    Qwen Code 的语音听写功能反馈热烈，预示着在复杂架构场景下，语音将成为替代长 Prompt 输入的高效通道。语音交互可能成为下一代 CLI 工具的标准配置。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告 (2026-06-22)

基于 `anthropics/skills` 官方仓库的 PR 与 Issue 数据，以下是社区动态分析。

## 1. 热门 Skills 排行

尽管部分 PR 评论数据缺失，但结合 Issue 反馈与 PR 提交内容的深度，以下 Skills 贡献目前最受关注：

1.  **[PR #514] document-typography**
    *   **功能**：解决 AI 生成文档中的排版问题（孤行、寡行、编号错位）。
    *   **热点**：直击 LLM 生成内容的“通病”——格式规范问题，具有极高的普适性和实用价值。
    *   **状态**：[OPEN]
    *   **链接**：[anthropics/skills #514](https://github.com/anthropics/skills/pull/514)

2.  **[PR #486] ODT (OpenDocument) Support**
    *   **功能**：支持创建、填充和转换 ODT/ODS 文件，填补了开源文档格式的空白。
    *   **热点**：响应了非微软生态用户的需求，支持 LibreOffice 等开源标准。
    *   **状态**：[OPEN]
    *   **链接**：[anthropics/skills #486](https://github.com/anthropics/skills/pull/486)

3.  **[PR #1298] skill-creator 核心修复**
    *   **功能**：修复 `run_eval.py` 报告 0% 召回率的严重 Bug，修正了 Skill 描述优化循环的基准。
    *   **热点**：关联 Issue #556（高热度 Bug），直接关系到 Skill 开发工具链的可用性。
    *   **状态**：[OPEN]
    *   **链接**：[anthropics/skills #1298](https://github.com/anthropics/skills/pull/1298)

4.  **[PR #83] skill-quality-analyzer & skill-security-analyzer**
    *   **功能**：两个元技能，分别用于评估 Skill 的质量和安全性。
    *   **热点**：随着 Skill 数量增长，社区对“用来评估 Skill 的 Skill”需求迫切，涉及安全与标准化议题。
    *   **状态**：[OPEN]
    *   **链接**：[anthropics/skills #83](https://github.com/anthropics/skills/pull/83)

5.  **[PR #154] shodh-memory**
    *   **功能**：为 Agent 提供跨会话的持久化上下文记忆。
    *   **热点**：解决 AI 无状态问题，是实现复杂 Agent 工作流的关键基础设施。
    *   **状态**：[OPEN]
    *   **链接**：[anthropics/skills #154](https://github.com/anthropics/skills/pull/154)

6.  **[PR #210] frontend-design 改进**
    *   **功能**：重写前端设计 Skill，提高指令的清晰度和可执行性。
    *   **热点**：优化现有高频 Skill 的实际执行效果，反映了社区对“可用性”的追求。
    *   **状态**：[OPEN]
    *   **链接**：[anthropics/skills #210](https://github.com/anthropics/skills/pull/210)

## 2. 社区需求趋势

从 Issues 讨论来看，社区关注点已从“单一功能实现”转向“生态协作与企业级需求”：

*   **企业协作与共享机制**：[Issue #228](https://github.com/anthropics/skills/issues/228)（14条评论）高居榜首，用户强烈要求支持组织内的 Skill 共享库，解决目前手动传输 `.skill` 文件的低效问题。
*   **安全与信任边界**：[Issue #492](https://github.com/anthropics/skills/issues/492) 指出社区 Skill 冒用官方命名空间存在安全隐患，呼吁建立清晰的信任机制；[Issue #1175](https://github.com/anthropics/skills/issues/1175) 讨论了 SharePoint 集成的权限控制，显示企业用户对安全的高度敏感。
*   **开发工具链稳定性**：[Issue #556](https://github.com/anthropics/skills/issues/556)（12条评论）与 [Issue #1169](https://github.com/anthropics/skills/issues/1169) 集中反馈 `skill-creator` 脚本在 Windows 环境下的兼容性问题及评估指标失效，开发者急需稳定的基础设施。
*   **Agent 治理与记忆**：[Issue #412](https://github.com/anthropics/skills/issues/412) 提出 Agent 治理模式，[Issue #1329](https://github.com/anthropics/skills/issues/1329) 探讨紧凑记忆符号，显示社区正探索更复杂的 Agentic 工作流。

## 3. 高潜力待合并 Skills

以下 PR 处于 OPEN 状态，但解决了关键痛点或提升了核心能力，具有较高的合并潜力：

*   **[PR #1298]**：修复了 Skill 评估工具的致命 Bug，是 `skill-creator` 正常运作的前置条件，属于关键性修复。
*   **[PR #362]**：修复 UTF-8 字符处理导致的 Panic，解决了多语言环境下的崩溃问题，是基础稳定性保障。
*   **[PR #539]**：增加了 YAML 解析前的格式校验，防止因特殊字符导致的配置静默失败，提升了开发体验。
*   **[PR #509]**：添加 `CONTRIBUTING.md`，完善社区文档，响应了 Issue #452 的需求，属于生态建设的基础改进。

## 4. Skills 生态洞察

**社区正从“尝鲜创作”迈入“企业级应用”，核心诉求已转变为：稳定的开发工具链、组织级共享能力与安全可信的执行环境。**

---

# Claude Code 社区动态日报 (2026-06-22)

## 1. 今日速览
今日社区焦点集中在**平台兼容性危机**与**成本透明度**两大领域。Android/Termux 用户受 v2.1.113+ 原生二进制更新影响导致工具彻底不可用的 Issue (#50270) 讨论热度极高，暂无官方解决方案。同时，多个关于 Token 消耗监控、Hook 数据暴露及配额管理的 Issue 活跃度居高不下，显示开发者对企业级成本管控的迫切需求。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues

以下是今日最值得关注的 10 个 Issue：

1.  **[Android 兼容性中断] v2.1.113+ 在 Termux/Android 上不可用**
    *   **链接**: [Issue #50270](https://github.com/anthropics/claude-code/issues/50270)
    *   **热度**: 👍 51 | 评论 53
    *   **解读**: 这是一个严重的回归问题。新版本放弃了 JS 入口点转而使用 glibc 原生二进制，导致 Android 内核无法运行且无 JS 回退。大量移动端开发者的工作流受阻，目前尚无官方修复时间表。

2.  **[核心工具 Bug] Write 工具偶发缺少 `content` 参数导致失败**
    *   **链接**: [Issue #895](https://github.com/anthropics/claude-code/issues/895)
    *   **热度**: 👍 12 | 评论 54
    *   **解读**: 该 Bug 存在已久且难以复现，模型在使用 Write 工具时偶尔遗漏必填参数，导致工作流中断。作为核心功能，其不稳定性引发了社区广泛担忧。

3.  **[网络/沙箱] macOS Desktop 更新阻断局域网 SSH/网络访问**
    *   **链接**: [Issue #37994](https://github.com/anthropics/claude-code/issues/37994)
    *   **热度**: 👍 5 | 评论 12
    *   **解读**: 3月的一次 Desktop 更新引入了 `OPERON_SANDBOXED_NETWORK` 机制，意外阻断了局域网访问。这严重影响了依赖本地服务器或 SSH 的开发场景。

4.  **[功能需求] 多 Claude 会话间的通信机制**
    *   **链接**: [Issue #24798](https://github.com/anthropics/claude-code/issues/24798)
    *   **热度**: 👍 18 | 评论 38
    *   **解读**: 随着项目规模扩大，用户常并行运行多个 Session。该请求希望实现跨 Session 的工作流编排，反映了将 Claude Code 作为多智能体协作平台的趋势。

5.  **[成本管理] 请求在 Hook 输入中暴露 Token 用量与成本数据**
    *   **链接**: [Issue #11008](https://github.com/anthropics/claude-code/issues/11008)
    *   **热度**: 👍 25 | 评论 23
    *   **解读**: 社区强烈需要可编程的成本控制手段。目前 Hook 无法获知实时开销，导致开发者难以构建自定义的计费看板或熔断机制。

6.  **[核心稳定性] 自动压缩 未能触发导致 CLI 停止响应**
    *   **链接**: [Issue #66144](https://github.com/anthropics/claude-code/issues/66144)
    *   **热度**: 👍 11 | 评论 11
    *   **解读**: 上下文窗口满载时 Auto-compact 逻辑失效，直接导致进程卡死。这是影响日常使用体验的关键稳定性问题。

7.  **[模型/成本] `/compact` 强制使用 1M 上下文模型导致额度错误**
    *   **链接**: [Issue #63634](https://github.com/anthropics/claude-code/issues/63634)
    *   **热度**: 👍 5 | 评论 9
    *   **解读**: 即使显式设置了 Sonnet 模型，`/compact` 指令仍在后台调用 1M 上下文模型，引发额度不足错误。这揭示了内部指令路由逻辑的缺陷。

8.  **[系统稳定性] macOS Desktop 泄漏 PTY 文件描述符导致终端崩溃**
    *   **链接**: [Issue #65995](https://github.com/anthropics/claude-code/issues/65995)
    *   **热度**: 👍 4 | 评论 4
    *   **解读**: Claude Desktop 主进程累积 PTY 连接而不释放，约2小时后耗尽系统资源，导致系统终端全面瘫痪。属于严重的资源泄漏 Bug。

9.  **[数据完整性] UTF-16 孤立代理导致会话永久损坏**
    *   **链接**: [Issue #68325](https://github.com/anthropics/claude-code/issues/68325)
    *   **热度**: 👍 0 | 评论 3
    *   **解读**: 模型输出的工具调用中包含错误的 UTF-16 字符，会导致 HTTP 400 错误循环，且无法恢复，必须重建会话。这对长周期运行的 Agent 威胁极大。

10. **[配额异常] Claude Max 计划用量在 MCP/Agent 重度使用下异常耗尽**
    *   **链接**: [Issue #69931](https://github.com/anthropics/claude-code/issues/69931)
    *   **热度**: 👍 1 | 评论 2
    *   **解读**: 用户报告在使用 MCP (如 Gmail) 时，配额消耗速度远超预期，且后台缺乏细粒度的用量归因工具，引发对计费透明度的质疑。

## 4. 重要 PR 进展

过去 24 小时仅有 2 个 PR 更新：

1.  **修复 Issue Label 编辑脚本的静默退出问题**
    *   **链接**: [PR #69916](https://github.com/anthropics/claude-code/pull/69916)
    *   **内容**: 修复了 `scripts/edit-issue-labels.sh` 在缺少参数时静默失败的问题，增加了错误信息输出。属于仓库维护性质的修复。

2.  **新增 Bash/Zsh/Fish Shell 自动补全支持**
    *   **链接**: [PR #4943](https://github.com/anthropics/claude-code/pull/4943)
    *   **内容**: 一个长期待合并的功能 PR，为 CLI 添加静态补全脚本。虽非今日创建，但近期有更新动态。社区期待官方支持集成式补全功能。

## 5. 功能需求趋势

从今日 Issues 分析，社区关注点集中在以下方向：

*   **成本透明度与可编程性**: 多个 Issue (#11008, #50926, #59709) 均呼吁开放 Token 消耗数据的 API 或 Hook 接口，显示企业用户对“可控成本”的强需求。
*   **多智能体协作**: Issue #24798 提出的跨 Session 通信，表明用户正尝试将 Claude Code 应用于更复杂的分布式工作流，而非单一辅助工具。
*   **平台兼容性**: Android/Termux 的支持断层 (#50270) 提醒官方需重视非标准 Linux 环境的兼容性测试。

## 6. 开发者关注点

*   **资源泄漏与稳定性**: macOS 端的 PTY 泄漏 (#65995) 和网络沙箱阻断 (#37994) 表明，Desktop 端的系统级集成仍存在隐患，影响长时间运行稳定性。
*   **后台任务与配额**: 用户反馈离线或后台会话仍在消耗额度 (#69526)，以及对复杂 Agent 任务 (如 Deep Research) 缺乏事前成本预警 (#68703)，显示出对“静默消耗”的焦虑。
*   **会话容错能力**: UTF-16 编码错误导致会话“变砖” (#68325) 和图片处理错误杀死会话 (#47391) 凸显了当前架构在异常数据处理上的脆弱性，开发者希望有更强的 Session 自愈机制。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# 2026-06-22 OpenAI Codex 社区动态日报

## 1. 今日速览
今日社区最强烈的反馈集中在 **GPT-5.5 模型 Token 消耗成本异常激增**的问题上，多位用户报告预算在极少数提示词下即耗尽。开发团队在底层架构上动作频繁，发布了两个 Rust alpha 版本，并提交了大量关于 **会话运行时重构** 和 **线程性能优化** 的 PR，预示着 Codex 正在为更高并发和更复杂的任务调度做准备。

## 2. 版本发布
过去 24 小时内发布了两个 Rust 核心库的 Alpha 版本，显示底层基础设施正在进行高频迭代：
*   **[rust-v0.142.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.9)**
*   **[rust-v0.142.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.10)**

## 3. 社区热点 Issues (Top 10)

1.  **[Critical] GPT-5.5 Token 成本激增 10-20 倍 (#28879)**
    *   **链接:** [openai/codex Issue #28879](https://github.com/openai/codex/issues/28879)
    *   **详情:** 这是今日最热门的 Issue。用户报告自 6 月 16 日起，使用 GPT-5.5 (Plus Plan) 时，每个 Token 消耗的配额比例增加了 10-20 倍，导致原本支持 20+ 轮对话的预算在 2-3 轮内耗尽。社区反应强烈（196 👍），普遍认为这严重影响了 Plus 用户的可用性。

2.  **[Bug] 账号验证死锁：无法访问旧手机号导致无法验证 (#25749)**
    *   **链接:** [openai/codex Issue #25749](https://github.com/openai/codex/issues/25749)
    *   **详情:** 用户通过 Google OAuth 登录且已开启 MFA，但系统仍要求验证一个已无法访问的旧手机号，且无恢复路径。该问题导致用户完全无法使用服务，目前已有 57 条评论寻求解决方案。

3.  **[Regression] VS Code 插件无法打开历史会话记录 (#18993)**
    *   **链接:** [openai/codex Issue #18993](https://github.com/openai/codex/issues/18993)
    *   **详情:** VS Code 扩展（v1.117.0）出现回退问题，用户无法加载过去的对话历史，严重影响工作流连续性。

4.  **[Bug] Windows 沙箱回退：全局代理环境下 apply_patch 失败 (#29178)**
    *   **链接:** [openai/codex Issue #29178](https://github.com/openai/codex/issues/29178)
    *   **详情:** Windows Desktop 26.616 版本出现回退，在设置了全局代理的环境下，`apply_patch` 和 `fs-helper` 工具调用失败。用户需回退至旧版本才能恢复工作。

5.  **[Bug] 配额在未活跃使用时自动缓慢流失 (#26600)**
    *   **链接:** [openai/codex Issue #26600](https://github.com/openai/codex/issues/26600)
    *   **详情:** 用户观察到即使未主动操作 Codex，使用配额仍在后台逐渐减少。引发社区对后台任务或"僵尸"会话消耗资源的担忧。

6.  **[Bug] Windows 桌面版频繁弹出沙箱设置错误弹窗 (#29200)**
    *   **链接:** [openai/codex Issue #29200](https://github.com/openai/codex/issues/29200)
    *   **详情:** 更新后，每次调用 `apply_patch` 都会触发 `codex-windows-sandbox-setup.exe` 的错误弹窗，尽管操作本身可能成功，但极大破坏了用户体验。

7.  **[Bug] 任务时长统计严重偏差，导致配额超额扣减 (#28492)**
    *   **链接:** [openai/codex Issue #28492](https://github.com/openai/codex/issues/28492)
    *   **详情:** 用户报告一个实际耗时 15 小时的任务被系统记录为 27 小时，导致配额被错误地超额扣除。这反映了后台计时与计费逻辑的潜在缺陷。

8.  **[Bug] macOS Dock 崩溃：Codex Desktop 递归调用导致崩溃 (#27694)**
    *   **链接:** [openai/codex Issue #27694](https://github.com/openai/codex/issues/27694)
    *   **详情:** macOS 版 Codex 通过 `CodexDockTilePlugin` 设置 Dock 图标时发生递归调用，导致应用崩溃。

9.  **[Feature] 建议增加项目管理功能 (#25498)**
    *   **链接:** [openai/codex Issue #25498](https://github.com/openai/codex/issues/25498)
    *   **详情:** 用户呼吁 Codex Desktop 应提供一等公民级的项目管理支持，如注册本地文件夹、在不同项目间移动会话线程等，目前管理大型项目较为混乱。

10. **[Bug] Windows CLI 沙箱执行失败 (CreateProcessAsUserW) (#26158)**
    *   **链接:** [openai/codex Issue #26158](https://github.com/openai/codex/issues/26158)
    *   **详情:** Windows CLI 0.136.0+ 版本中沙箱设置刷新失败，报错 OS Error 740。大量 Windows 用户受影响，被迫回退至旧版本。

## 4. 重要 PR 进展 (Top 10)

1.  **[Feature] 支持 npm 市场插件源 (#29375)**
    *   **链接:** [openai/codex PR #29375](https://github.com/openai/codex/pull/29375)
    *   **详情:** 新增支持从 npm 市场安装插件，允许通过 `npm install` 进行物料化管理。这标志着 Codex 插件生态正在标准化，开发者将能更方便地分发和集成工具。

2.  **[Arch] 会话运行时架构重构系列 (Cell 与 Observation 解耦) (#29290, #29291, #29292)**
    *   **链接:** [PR #29290](https://github.com/openai/codex/pull/29290) | [PR #29291](https://github.com/openai/codex/pull/29291) | [PR #29292](https://github.com/openai/codex/pull/29292)
    *   **详情:** 开发团队正在重构代码模式的会话运行时，将 Cell 的创建与观察操作解耦，并暴露传输层无关的运行时接口。这是为了支持更复杂的异步任务处理和跨进程状态管理。

3.  **[Perf] 线程列表与恢复性能优化系列 (#29352, #29355, #29357, #29367)**
    *   **链接:** [PR #29352](https://github.com/openai/codex/pull/29352) | [PR #29355](https://github.com/openai/codex/pull/29355) | [PR #29357](https://github.com/openai/codex/pull/29357) | [PR #29367](https://github.com/openai/codex/pull/29367)
    *   **详情:** 一系列针对 `thread/list` 和 `thread/resume` 的性能优化。通过引入轻量级 SQLite 投影、检查点边界回滚重建等机制，大幅减少加载长会话历史的耗时，解决长上下文下的卡顿问题。

4.  **[Feature] 允许 Codex 沙箱消费 MCP 沙箱状态 (#29358)**
    *   **链接:** [openai/codex PR #29358](https://github.com/openai/codex/pull/29358)
    *   **详情:** 增强 MCP (Model Context Protocol) 集成，允许 `codex sandbox` 直接接受来自 MCP 服务器的沙箱状态元数据，简化了 REPL 等工具的转发逻辑。

5.  **[Core] 迁移环境上下文至模型世界状态 (#29249)**
    *   **链接:** [openai/codex PR #29249](https://github.com/openai/codex/pull/29249)
    *   **详情:** 将环境上下文从临时的 turn values 迁移到可重放、类型化的模型世界状态中。这为模型提供了更稳定的上下文视图，有助于提升 Agent 在复杂环境中的决策稳定性。

6.  **[UI] 新增工作区标题状态栏项 (#28232)**
    *   **链接:** [openai/codex PR #28232](https://github.com/openai/codex/pull/28232)
    *   **详情:** 在 TUI 状态栏增加可配置的 `workspace-headline` 显示，实时展示当前工作区的标题，改善多工作区切换时的用户体验。

7.  **[Safety] 传播安全缓冲事件至客户端 (#29371)**
    *   **链接:** [openai/codex PR #29371](https://github.com/openai/codex/pull/29371)
    *   **详情:** 修复了安全审查的缓冲状态元数据未传递给客户端的问题，允许前端渲染正在进行的安全审查状态，提升透明度。

8.  **[Core] 采样前刷新环境上下文 (#29073)**
    *   **链接:** [openai/codex PR #29073](https://github.com/openai/codex/pull/29073)
    *   **详情:** 解决了远程环境启动延迟导致的上下文不同步问题，确保模型采样时能获取到最新加载完成的环境信息。

9.  **[UX] 更新 Plan Mode 提示词 (#29301)**
    *   **链接:** [openai/codex PR #29301](https://github.com/openai/codex/pull/29301)
    *   **详情:** 优化计划模式的提示词，使得 Codex 在规划完实现方案后能引导用户退出计划模式直接执行，减少手动切换操作。

10. **[Core] 环境上下文与自动压缩控制 (#28260)**
    *   **链接:** [openai/codex PR #28260](https://github.com/openai/codex/pull/28260)
    *   **详情:** 添加了内部开关以允许禁用自动上下文压缩，作为解决上下文窗口溢出或意外压缩行为的紧急逃生舱。

## 5. 功能需求趋势

*   **成本与配额透明化:** Issue #28879 和 #28492 反映出用户对 GPT-5.5 的高昂成本极其敏感。社区迫切需要更精确的 `/cost` 指令回归 (#20087)、后台消耗监控以及配额计算的透明度。
*   **企业级项目管理:** 随着用户在 Codex 中处理的项目增多，简单的文件夹结构已无法满足需求。多项目会话管理、线程迁移 (#25498) 等功能成为高频请求。
*   **Windows 平台稳定性:** Windows 沙箱、代理环境和权限管理相关的 Bug 占据了 Issues 列表的半壁江山，Windows 生态的兼容性是目前最大的稳定性痛点。

## 6. 开发者关注点

*   **配额"偷跑"与消耗过快:** 开发者对隐性成本消耗表现出极大的焦虑。不仅是单价上涨，后台进程（如 Chronicle memory writer #26808）或计时错误导致的配额流失，直接影响了开发者的信任度和持续使用的意愿。
*   **IDE 集成的断连与回退:** VS Code 扩展的历史记录加载失败 (#18993) 和 Remote SSH 连接挂起 (#14620) 是开发者的核心痛点，IDE 集成的稳定性直接决定了开发效率。
*   **MCP 工具链的成熟度:** 开发者正在尝试利用 MCP 扩展 Codex 能力（如 Canva 集成 #29210），但目前存在预览渲染失败、传输协议报错等问题，显示出该生态仍处于早期磨合阶段。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-06-22)

## 1. 今日速览
今日无新版本发布，但社区活跃度较高。开发重心集中在修复 Agent 执行过程中的挂起与状态错误问题，并针对会话持久化与恢复机制提交了大量修复 PR。此外，安全性修复成为今日亮点，多个 PR 解决了信任对话框中潜在的 Hook 注入风险。

## 2. 版本发布
过去 24 小时内无最新 Release 发布。

## 3. 社区热点 Issues

以下筛选了 10 个最受关注或高优先级的 Issue：

1.  **[P1] Generalist agent hangs indefinitely** (#21409)
    *   **摘要**：当 Gemini CLI 调用 Generalist 子代理时会出现无限挂起，导致简单的文件夹创建等操作都无法完成。
    *   **重要性**：严重影响基础功能可用性，社区点赞数较高 (👍8)，属于阻塞性 Bug。
    *   **链接**：[google-gemini/gemini-cli Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

2.  **[P1] Subagent misreports success after hitting MAX_TURNS** (#22323)
    *   **摘要**：`codebase_investigator` 子代理在达到最大交互轮数限制被中断后，仍错误地报告状态为 "success"，掩盖了实际未完成的事实。
    *   **重要性**：导致任务结果不可信，影响自动化流程的可靠性判断。
    *   **链接**：[google-gemini/gemini-cli Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

3.  **[P1] Shell command execution stuck with "Waiting input"** (#25166)
    *   **摘要**：CLI 执行简单的 Shell 命令后，常卡在 "Waiting input" 状态，尽管命令已执行完毕。
    *   **重要性**：核心交互体验问题，导致用户误以为程序崩溃。
    *   **链接**：[google-gemini/gemini-cli Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

4.  **[P2] Gemini CLI encounters 400 error with > 128 tools** (#24246)
    *   **摘要**：当可用工具数量超过阈值（如 400 个）时，CLI 直接报错 400，未能智能筛选工具范围。
    *   **重要性**：限制了复杂项目中工具集成的规模。
    *   **链接**：[google-gemini/gemini-cli Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

5.  **[P2] Model underutilizes custom skills and sub-agents** (#21968)
    *   **摘要**：模型倾向于不主动使用用户定义的 Skills 和 Sub-agents，即使任务高度相关，需要显式指令才会调用。
    *   **重要性**：削弱了 CLI 的自动化能力和自定义扩展的价值。
    *   **链接**：[google-gemini/gemini-cli Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

6.  **[P2] Auto Memory security risks with secret redaction** (#26525)
    *   **摘要**：Auto Memory 功能在将内容发送给后台提取 Agent 前未进行确定性脱敏，存在日志泄露敏感信息的风险。
    *   **重要性**：涉及敏感数据处理的安全合规问题。
    *   **链接**：[google-gemini/gemini-cli Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)

7.  **[P1] Nightly Release Failed for v0.49.0** (#28087)
    *   **摘要**：昨晚的自动化构建流程失败，影响最新特性的分发。
    *   **重要性**：发布流程阻塞，需 DevOps 团队关注。
    *   **链接**：[google-gemini/gemini-cli Issue #28087](https://github.com/google-gemini/gemini-cli/issues/28087)

8.  **[P1] ACP: Token usage estimates inflated by omitting cache** (#27985)
    *   **摘要**：作为 ACP 服务器运行时，Token 用量统计忽略了缓存和推理 Token，导致客户端成本估算虚高。
    *   **重要性**：影响企业级部署的成本监控准确性。
    *   **链接**：[google-gemini/gemini-cli Issue #27985](https://github.com/google-gemini/gemini-cli/issues/27985)

9.  **[P1] Robust component level evaluations** (#24353)
    *   **摘要**：关于建立组件级行为评估测试体系的 Epic，旨在提升代码质量回归检测能力。
    *   **重要性**：项目基础设施改进，关注度高。
    *   **链接**：[google-gemini/gemini-cli Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)

10. **[P2] AST-aware file reading investigation** (#22745)
    *   **摘要**：探讨引入 AST（抽象语法树）感知的文件读取工具，以减少 Token 消耗并提高代码定位精度。
    *   **重要性**：未来的核心架构优化方向。
    *   **链接**：[google-gemini/gemini-cli Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

## 4. 重要 PR 进展

以下筛选了 10 个关键 PR，主要集中在安全修复与会话管理稳定性：

1.  **[Security] fix(core): trust dialog discloses the hook shape that never runs** (#27915)
    *   **内容**：修复了工作区信任对话框显示的 Hook 信息与实际执行不符的安全漏洞，防止恶意 Hook 在用户不知情下执行。
    *   **状态**：Open
    *   **链接**：[google-gemini/gemini-cli PR #27915](https://github.com/google-gemini/gemini-cli/pull/27915)

2.  **[Security] fix(trust): disclose hooks declared in canonical nested shape** (#27903)
    *   **内容**：补全了信任对话框对嵌套结构定义的 Hook 的解析，确保所有潜在的危险命令都能被展示给用户。
    *   **状态**：Open
    *   **链接**：[google-gemini/gemini-cli PR #27903](https://github.com/google-gemini/gemini-cli/pull/27903)

3.  **[Agent] fix(core): bound web search tool latency** (#27910)
    *   **内容**：为 `google_web_search` 工具调用添加 120 秒超时限制，防止 Agent 因网络问题无限等待。
    *   **状态**：Open
    *   **链接**：[google-gemini/gemini-cli PR #27910](https://github.com/google-gemini/gemini-cli/pull/27910)

4.  **[Agent] fix(cli): don't offer to resume a session that wasn't saved** (#27914)
    *   **内容**：修复了当会话文件因磁盘空间不足未保存时，CLI 退出时仍提示用户可以恢复会话的误导性问题。
    *   **状态**：Open
    *   **链接**：[google-gemini/gemini-cli PR #27914](https://github.com/google-gemini/gemini-cli/pull/27914)

5.  **[Agent] fix(core): validate GCP project ID format in memory** (#27916)
    *   **内容**：验证 GCP Project ID 格式，防止 Auto Memory 存储无效别名导致后续会话报错。
    *   **状态**：Open
    *   **链接**：[google-gemini/gemini-cli PR #27916](https://github.com/google-gemini/gemini-cli/pull/27916)

6.  **[Core] fix(core): recover sessions with a corrupt or missing metadata line** (#27912)
    *   **内容**：增强 JSONL 会话读取器的健壮性，使其能跳过损坏或缺失的元数据行，避免加载失败。
    *   **状态**：Open
    *   **链接**：[google-gemini/gemini-cli PR #27912](https://github.com/google-gemini/gemini-cli/pull/27912)

7.  **[Core] fix(core): load JSONL sessions when projectHash is missing** (#27904)
    *   **内容**：修复了因缺少 `projectHash` 导致旧版会话无法加载的问题，提升了向后兼容性。
    *   **状态**：Open
    *   **链接**：[google-gemini/gemini-cli PR #27904](https://github.com/google-gemini/gemini-cli/pull/27904)

8.  **[Core] fix(core): keep recreated session files loadable after deletion** (#27905)
    *   **内容**：解决了会话文件在运行时被删除后，再次写入导致文件格式损坏无法加载的问题。
    *   **状态**：Open
    *   **链接**：[google-gemini/gemini-cli PR #27905](https://github.com/google-gemini/gemini-cli/pull/27905)

9.  **[Core] fix(cli): skip background session cleanup when listing sessions** (#27906)
    *   **内容**：修复了启动时后台清理任务与 `--list-sessions` 列表读取任务的竞争条件，避免文件扫描错误。
    *   **状态**：Open
    *   **链接**：[google-gemini/gemini-cli PR #27906](https://github.com/google-gemini/gemini-cli/pull/27906)

10. **[Telemetry] Fix issue truncate telemetry metric attributes** (#27729)
    *   **内容**：修复了遥测指标属性超过 1024 字符导致 GCP 导出失败并刷屏终端的问题。
    *   **状态**：Closed (Merged)
    *   **链接**：[google-gemini/gemini-cli PR #27729](https://github.com/google-gemini/gemini-cli/pull/27729)

## 5. 功能需求趋势

1.  **Agent 稳定性与自主性**：社区持续关注子代理的死锁、挂起以及任务状态误报问题，对 Agent 能够自我恢复和准确上报状态有强烈需求。
2.  **内存与上下文管理**：Auto Memory 功能的隐私安全（密钥脱敏）和重试逻辑成为近期热点，用户希望 CLI 能更智能、安全地管理长期记忆。
3.  **工具链集成能力**：关于 AST 感知文件读取的讨论表明，开发者希望 CLI 具备更深层的代码理解能力，而非仅停留在文本处理层面，以减少 Token 消耗并提高准确度。

## 6. 开发者关注点

1.  **交互卡死与状态同步**：Shell 命令挂起和子代理无限等待是开发者最痛恨的痛点，严重影响开发效率。
2.  **成本透明度**：开发者对 Token 消耗统计的准确性非常敏感，特别是缓存 Token 和推理 Token 的遗漏会导致成本估算偏差。
3.  **配置与工具限制**：工具数量上限（128/400）导致的错误引发了广泛讨论，开发者希望 CLI 在处理大规模工具集时能更加智能地进行筛选或分片。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-06-22)

## 1. 今日速览
今日 Kimi Code CLI 代码库无新版本发布及 Pull Request 更新，开发节奏相对平缓。社区焦点集中在长期规划的功能需求与紧急 Bug 修复上：关于“跨会话持久化记忆系统”的讨论持续升温，同时有开发者报告了 ACP 模式下 MCP 服务器加载失效的关键问题，建议关注后续修复进展。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues
过去 24 小时内共有 2 条活跃 Issue，均具有较高的关注度或优先级：

*   **[Feature] Memory System - Persistent context across sessions**
    *   **链接**: [MoonshotAI/kimi-cli Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)
    *   **重要性**: 这是一个高价值的功能增强请求。用户强烈希望 CLI 能够具备“记忆”能力，自动或手动保存项目模式和用户偏好，解决每次启动新会话需重复配置上下文的痛点。该 Issue 自 2 月创建以来持续有讨论，表明这是社区的核心诉求之一。
    *   **状态**: OPEN (评论: 6)

*   **[Bug] `kimi acp` does not load MCP servers**
    *   **链接**: [MoonshotAI/kimi-cli Issue #2464](https://github.com/MoonshotAI/kimi-cli/issues/2464)
    *   **重要性**: 这是一个影响工作流的关键 Bug。报告指出在 ACP (Agent Communication Protocol) 模式下，MCP 服务器无法加载，导致相关工具缺失，严重阻碍了依赖 MCP 工具链的开发者使用最新版本 (v1.47.0)。
    *   **状态**: OPEN (评论: 0) | **影响版本**: 1.47.0

## 4. 重要 PR 进展
过去 24 小时内无 Pull Request 更新。

## 5. 功能需求趋势
基于今日及近期的 Issue 讨论，社区功能需求呈现以下趋势：

*   **上下文持久化**: 开发者迫切需要 AI 具备“长时记忆”，能够跨会话保持对项目背景、编码风格的理解，减少重复交互成本。
*   **MCP 生态深度集成**: 随着 MCP (Model Context Protocol) 的普及，用户希望在不同运行模式（如 Interactive 与 ACP）下都能无缝调用外部工具，对工具链的兼容性和稳定性要求极高。

## 6. 开发者关注点
*   **工具链一致性**: 开发者反馈在 ACP 模式下 MCP 配置文件失效，暴露了不同运行模式下配置加载逻辑的不一致问题。这提醒开发团队需确保各模式下功能特性的对等性。
*   **智能辅助体验**: 用户不再满足于单次问答，更倾向于拥有一个能够“记住”习惯和项目细节的智能代理，这将是 CLI 工具从“工具”向“助手”演进的关键节点。

---
*数据来源: GitHub Kimi Code CLI Repository*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-06-22)

## 1. 今日速览
今日 OpenCode 社区活跃度较高，重点关注 **MCP 服务器集成的安全性增强**与**成本控制透明度**。热门议题集中在通过 OAuth 2.1 简化 MCP 安装流程，以及用户对订阅用量 API 的强烈需求。开发层面，团队正积极推进核心代码重构与测试覆盖率提升，并修复了多处影响用户体验的 TUI 和 Desktop 端 Bug。

## 2. 版本发布
过去 24 小时内无新版本发布。

## 3. 社区热点 Issues (Top 10)

1.  **[Feature] MCP Remote OAuth 支持** (#988)
    *   **重要性**：评论数最高（39条），社区呼声极高。
    *   **内容**：建议支持 OAuth 2.1 协议连接 MCP 服务器，避免手动复制密钥，提升安全性与易用性。
    *   **链接**：[anomalyco/opencode Issue #988](https://github.com/anomalyco/opencode/issues/988)

2.  **[Feature] Go Plan 用量/Balance API 接口** (#16017)
    *   **重要性**：点赞数最高（73 👍），用户对企业级监控需求强烈。
    *   **内容**：请求公开 API 接口以查询订阅计划的滚动/周/月使用量数据，方便集成到内部 Dashboard。
    *   **链接**：[anomalyco/opencode Issue #16017](https://github.com/anomalyco/opencode/issues/16017)

3.  **[UX] Ctrl+C 快捷键冲突导致意外退出** (#7957)
    *   **重要性**：影响用户体验的痛点问题（37 👍）。
    *   **内容**：在 Windows/Linux 上 `Ctrl+C` 是通用复制快捷键，但在 OpenCode 中会直接退出应用，用户容易误触。
    *   **链接**：[anomalyco/opencode Issue #7957](https://github.com/anomalyco/opencode/issues/7957)

4.  **[Bug] 新安装用户遭遇黑屏** (#10221)
    *   **重要性**：严重影响新用户留存的阻塞性 Bug（31条评论）。
    *   **内容**：部分用户安装后启动 TUI 仅显示黑屏，需排查日志定位原因。
    *   **链接**：[anomalyco/opencode Issue #10221](https://github.com/anomalyco/opencode/issues/10221)

5.  **[Feature] 支持 macOS Cmd+ 快捷键** (#653)
    *   **重要性**：Mac 用户体验优化的基础需求（42 👍）。
    *   **内容**：当前仅支持 Ctrl/Alt/Shift，缺乏对 macOS 标准 Command 键的支持。
    *   **链接**：[anomalyco/opencode Issue #653](https://github.com/anomalyco/opencode/issues/653)

6.  **[Bug] OpenCode Zen Claude Opus 模型不可用** (#30192)
    *   **重要性**：核心付费服务功能受阻。
    *   **内容**：用户反馈 Zen 服务的 Claude Opus 4.6 模型报错 "no provider available"，影响生产使用。
    *   **链接**：[anomalyco/opencode Issue #30192](https://github.com/anomalyco/opencode/issues/30192)

7.  **[Feature] YOLO Mode - 自动批准所有权限** (#11831)
    *   **重要性**：高级用户工作流优化（30 👍）。
    *   **内容**：提议增加“YOLO 模式”以自动跳过工具权限确认弹窗，适合信任环境下的快速操作。
    *   **链接**：[anomalyco/opencode Issue #11831](https://github.com/anomalyco/opencode/issues/11831)

8.  **[Bug] Zen API CORS 预检失败阻断浏览器客户端** (#31041)
    *   **重要性**：影响浏览器端集成的关键缺陷。
    *   **内容**：Zen API 端点未正确处理 OPTIONS 请求，导致浏览器端调用失败。
    *   **链接**：[anomalyco/opencode Issue #31041](https://github.com/anomalyco/opencode/issues/31041)

9.  **[Bug] Desktop 版大 Diff 导致渲染进程卡死** (#33195)
    *   **重要性**：Electron 桌面端性能瓶颈。
    *   **内容**：打开包含大文件 Diff（20KB+）的会话时，GUI 进程无响应，TUI 端不受影响。
    *   **链接**：[anomalyco/opencode Issue #33195](https://github.com/anomalyco/opencode/issues/33195)

10. **[Feature] 扩展状态存储支持的数据库类型** (#14212)
    *   **重要性**：架构扩展性需求。
    *   **内容**：随着迁移至 Drizzle，社区希望支持 PostgreSQL 等更多数据库作为会话存储后端。
    *   **链接**：[anomalyco/opencode Issue #14212](https://github.com/anomalyco/opencode/issues/14212)

## 4. 重要 PR 进展 (Top 10)

1.  **feat(app): add server-keyed session routes** (#32570)
    *   **内容**：重构路由系统，支持 `/server/:serverKey/session/:id` 新布局，优化了会话路由逻辑。
    *   **链接**：[anomalyco/opencode PR #32570](https://github.com/anomalyco/opencode/pull/32570)

2.  **refactor(core): simplify integration test fixtures** (#33292)
    *   **内容**：核心测试重构，默认使用内存数据库并简化连接逻辑，提升 CI 效率。
    *   **链接**：[anomalyco/opencode PR #33292](https://github.com/anomalyco/opencode/pull/33292)

3.  **fix(tui): render skill load errors inline** (#33298)
    *   **内容**：修复 TUI 中 Skill 加载失败时静默返回空列表的问题，现在会正确展示错误信息。
    *   **链接**：[anomalyco/opencode PR #33298](https://github.com/anomalyco/opencode/pull/33298)

4.  **fix(tui): correct duration() days/hours calculation** (#33095)
    *   **内容**：修正时长计算函数在超过24小时时的显示错误（天数计算恒为0）。
    *   **链接**：[anomalyco/opencode PR #33095](https://github.com/anomalyco/opencode/pull/33095)

5.  **feat: mcp-search tool for lazy loading mcp** (#12520)
    *   **内容**：提议引入 MCP 搜索工具以实现延迟加载，优化启动性能。
    *   **链接**：[anomalyco/opencode PR #12520](https://github.com/anomalyco/opencode/pull/12520)

6.  **fix(docker): handle sigterm & sigint** (#31624)
    *   **内容**：修复 Docker 容器运行时无法正确响应终止信号的问题。
    *   **链接**：[anomalyco/opencode PR #31624](https://github.com/anomalyco/opencode/pull/31624)

7.  **fix(core): fix mentions for files in hidden folders** (#32193)
    *   **内容**：修复无法通过 `@` 提及隐藏文件夹（如 `.agents/`）中文件的问题。
    *   **链接**：[anomalyco/opencode PR #32193](https://github.com/anomalyco/opencode/pull/32193)

8.  **feat(core): port V1 fuzzy edit matching to V2** (#32761)
    *   **内容**：将 V1 版本中的模糊编辑匹配策略移植到 V2 核心工具，增强编辑工具的容错性。
    *   **链接**：[anomalyco/opencode PR #32761](https://github.com/anomalyco/opencode/pull/32761)

9.  **fix(opencode): skip watching $HOME to avoid slow FSEvents** (#30209)
    *   **内容**：优化文件监视逻辑，避免监听根目录导致的大量资源消耗和启动缓慢。
    *   **链接**：[anomalyco/opencode PR #30209](https://github.com/anomalyco/opencode/pull/30209)

10. **fix(acp): surface subagent sessions and route child permissions** (#33293)
    *   **内容**：修复 ACP 协议中子代理会话不可见的问题，确保权限正确路由。
    *   **链接**：[anomalyco/opencode PR #33293](https://github.com/anomalyco/opencode/pull/33293)

## 5. 功能需求趋势

*   **安全与便捷性**：社区强烈希望简化 MCP 服务器的配置流程，特别是引入 OAuth 替代手动管理 Secret。
*   **成本与监控**：开发者对 Token 消耗的透明度要求提高，希望获得更细粒度的 API 用量统计（Issue #16017, #30320）。
*   **跨平台体验一致性**：对 macOS 原生快捷键的支持以及对 Windows/Linux 通用快捷键冲突的解决是用户体验的重点改进方向。
*   **架构扩展性**：随着项目成熟，用户对支持更多数据库后端和自定义 API 端点的需求增加。

## 6. 开发者关注点

*   **TUI/桌面端稳定性**：黑屏问题、大文件 Diff 卡死以及快捷键冲突是目前反馈最集中的痛点。
*   **模型可用性**：OpenCode Zen 作为托管服务，其模型调用的稳定性（如 CORS 错误、Provider 不可用）直接关系到用户信任度。
*   **性能优化**：文件监听范围优化（PR #30209）和测试架构重构（PR #33292）显示出团队正在着手解决底层性能瓶颈。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-06-22)

## 1. 今日速览
Qwen Code 今日发布了 **v0.18.5 稳定版**，主要修复了 Plan Mode 的交互逻辑并优化了发布流程。社区当前最热门的话题集中在 **语音听写功能的跨平台适配与后续优化**，以及 **后台子智能体的会话恢复机制**。此外，针对长上下文任务中出现的工具重复调用问题，社区提出了重要的修复方案。

## 2. 版本发布
- **[v0.18.5](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.5)**
  - **核心修复**：Plan Mode 现在需要用户显式选择加入才能使用提示词，避免了自动激活可能带来的干扰 ([#5433](https://github.com/QwenLM/qwen-code/pull/5433))。
  - **测试优化**：移除了重复的 gitdiff 未跟踪文件计数测试用例。
- **[v0.18.5-nightly.20260622](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.5-nightly.20260622.6bc3f853e)**
  - 包含最新的 CI/CD 自动发布更新，同步了 VSCode companion 的发布流程。

## 3. 社区热点 Issues (Top 10)

1.  **[IDEA 插件交互阻塞] #4888**  
    IDEA 插件中 `ask_user_question` 功能异常，提问文本不显示且用户无法输入，导致交互中断。这是目前评论数最高的未解决问题，严重影响了 IDE 集成体验。  
    [链接](https://github.com/QwenLM/qwen-code/issues/4888)

2.  **[长上下文工具循环调用] #5019**  
    在长程任务中，模型陷入工具重复调用的死循环，导致 API 报错并终止会话。该问题影响核心稳定性，目前已有相关修复 PR 提交。  
    [链接](https://github.com/QwenLM/qwen-code/issues/5019)

3.  **[后台子智能体复活机制] #5540**  
    功能请求：希望已完成的 Background Sub-agent 能通过 `send_message` 重新激活。目前一旦状态变为 `completed`，会话即视为结束，无法继续。  
    [链接](https://github.com/QwenLM/qwen-code/issues/5540)

4.  **[语音输入模式支持] #5431**  
    请求在 TUI 终端交互中增加语音输入模式，以便在复杂任务中提高输入效率，特别是针对长 Prompt 的场景。  
    [链接](https://github.com/QwenLM/qwen-code/issues/5431)

5.  **[语音功能跨平台原生库缺失] #5580**  
    新的语音听写功能在 `win32-arm64`、Alpine (musl) 等平台缺少原生预编译包，可能导致部分用户无法使用流式语音输入。  
    [链接](https://github.com/QwenLM/qwen-code/issues/5580)

6.  **[外部注入内容的安全审查] #5424**  
    建议允许外部注入的指令在 Agent 执行前经过 TUI 界面的人工审查和批准，增强自动化流程的安全性。  
    [链接](https://github.com/QwenLM/qwen-code/issues/5424)

7.  **[无 AK 集成测试支持] #5559**  
    提议增加轻量级的 Fake OpenAI Server，以便在没有真实 API Key 的情况下运行集成测试，降低 CI 门槛建设成本。  
    [链接](https://github.com/QwenLM/qwen-code/issues/5559)

8.  **[独立发布包不支持流式语音] #5582**  
    独立发布版未捆绑语音捕获的原生 Addon，导致流式语音功能不可用，需修复打包脚本。  
    [链接](https://github.com/QwenLM/qwen-code/issues/5582)

9.  **[CI 集成测试覆盖率不足] #5219**  
    指出目前的 E2E 集成测试仅在发布流水线中运行，PR 阶段无法捕获回归问题，建议将测试前置到 PR 检查中。  
    [链接](https://github.com/QwenLM/qwen-code/issues/5219)

10. **[会话恢复后 Thinking Block 渲染截断] #5555**  
    使用 `--resume` 恢复会话并预览思考块时，内容渲染被截断，影响上下文阅读体验。  
    [链接](https://github.com/QwenLM/qwen-code/issues/5555)

## 4. 重要 PR 进展 (Top 10)

1.  **[feat(voice): 语音听写功能] #5502**  
    引入了完整的语音听写支持，包括原生音频捕获、流式传输和关键词偏置。这是近期最重大的功能更新，引发了大量后续的跨平台适配讨论。  
    [链接](https://github.com/QwenLM/qwen-code/pull/5502)

2.  **[fix(core): 防止连续相同的工具调用] #5573**  
    针对 Issue #5019 提出的“工具调用死循环”问题，将连续相同调用的检查从“可选”提升为“默认开启”，以强制中断失控的循环。  
    [链接](https://github.com/QwenLM/qwen-code/pull/5573)

3.  **[feat(mcp): MCP 服务器配置热重载] #5561**  
    实现了 MCP Server 的运行时热重载功能，修改 `settings.json` 后无需重启即可连接或断开 MCP 服务。  
    [链接](https://github.com/QwenLM/qwen-code/pull/5561)

4.  **[feat: 可恢复的后台子智能体] #5556**  
    配合 Issue #5540，实现了后台子智能体的持久化和恢复机制，允许向已完成的子智能体发送新指令。  
    [链接](https://github.com/QwenLM/qwen-code/pull/5556)

5.  **[feat(vision-bridge): 纯文本模型的视觉桥接] #5126**  
    为仅支持文本的模型提供了自动视觉桥接能力，能将图片转发给视觉模型转文后处理，极大扩展了模型选型的灵活性。  
    [链接](https://github.com/QwenLM/qwen-code/pull/5126)

6.  **[feat(core): Artifact 工具发布交互页面] #5557**  
    新增实验性 `artifact` 工具，允许模型生成并保存自包含的交互式 HTML 页面，增强了输出能力的丰富度。  
    [链接](https://github.com/QwenLM/qwen-code/pull/5557)

7.  **[test(integration): 无 AK 的伪 OpenAI 服务器] #5560**  
    响应 Issue #5559，添加了用于集成测试的 Mock Server，使得 CI 流程不再依赖真实 API Key。  
    [链接](https://github.com/QwenLM/qwen-code/pull/5560)

8.  **[feat(cli): 添加 --safe-mode 标志] #4943**  
    引入安全模式，启动时禁用所有自定义配置（hooks, extensions, skills 等），为故障排查提供纯净环境。  
    [链接](https://github.com/QwenLM/qwen-code/pull/4943)

9.  **[refactor(cli): 文件命名规范化] #5592**  
    执行代码库重构，将 `serve` 模块的文件名统一改为 kebab-case 风格，提升代码一致性。  
    [链接](https://github.com/QwenLM/qwen-code/pull/5592)

10. **[fix(ci): 增强测试报告健壮性] #5548**  
    改进了 tmux 真实用户测试的报告机制，修复了 HTML 转义问题，并优化了对超时和错误结果的判定。  
    [链接](https://github.com/QwenLM/qwen-code/pull/5548)

## 5. 功能需求趋势

-   **多模态与交互增强**：语音听写相关的 Issue 集中爆发，显示社区对**语音交互**的关注度极高，尤其是跨平台支持、隐私保护和输入体验优化。同时，视觉桥接功能的开发表明用户希望在不同能力的模型间获得一致的多模态体验。
-   **会话生命周期管理**：关于后台子智能体的恢复、中断会话的无损接续（Issue #5030）需求强烈，反映出用户希望长时间运行的任务具备更强的**容错性和连续性**。
-   **测试与工程质量**：社区开发者非常关注 CI/CD 流程的完善，特别是如何在没有敏感凭据的情况下运行端到端测试，以及对代码风格规范化的追求。

## 6. 开发者关注点

-   **IDE 插件稳定性**：JetBrains 插件中 UI 交互失效（Issue #4888）是目前反馈最强烈的 Bug，直接影响了重度 IDE 用户的开发体验。
-   **工具调用可靠性**：长上下文下的工具循环调用问题（Issue #5019）是核心痛点，开发者担心这会导致昂贵的 API 调用浪费和任务中断。
-   **平台兼容性**：随着引入原生依赖（如音频捕获），Windows/Linux/macOS 的二进制兼容性和打包完整性成为新的维护负担，开发者对 standalone 包的功能完整性提出了更高要求。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 (2026-06-22)

## 1. 今日速览
项目正式宣布更名为 **CodeWhale**，并发布 **v0.8.63** 版本，旧版 `deepseek-tui` npm 包已停止维护。开发重心已全面转向 **v0.8.64**，重点聚焦于安全性加固和架构重构，社区对 TUI 冻结、智能体失控及上下文管理等稳定性问题的讨论热度居高不下。

## 2. 版本发布
- **v0.8.63**
  - **更名公告**：项目名称、命令、NPM 包及发布资源已统一更名为 **CodeWhale**。
  - **迁移提示**：旧版 `deepseek-tui` 包已弃用，老用户需参照 `docs/REBRAND.md` 进行迁移。

## 3. 社区热点 Issues
以下筛选了今日最受关注或影响较大的 10 个 Issue：

1.  **[v0.8.64] 安全加固与代码扫描修复追踪** [#3368](https://github.com/Hmbown/CodeWhale/issues/3368)
    - **重要性**：v0.8.64 版本发布的阻碍项，旨在整合 CodeQL 扫描结果与安全报告，明确发布前的安全门禁标准。
    - **社区反应**：评论数达 27 条，核心开发者正在集中讨论如何在不公开漏洞细节的前提下完成验证。

2.  **[Bug] TUI 频繁卡死：Turn stalled - no completion signal received** [#2487](https://github.com/Hmbown/CodeWhale/issues/2487)
    - **重要性**：严重影响用户体验的可靠性问题。在 `yolo` 模式下，操作经常冻结并提示无完成信号，无法恢复。
    - **社区反应**：评论数 17 条，多位用户反馈遇到相同卡死情况，寻求稳定解决方案。

3.  **[v0.8.64] 增加自然语言自动审查策略与预推送门禁** [#3144](https://github.com/Hmbown/CodeWhale/issues/3144)
    - **重要性**：功能增强，参考 Cursor 的 SDK 机制，试图在全自动执行和手动确认之间寻找平衡点，提升代码安全性。

4.  **[Bug] CodeWhale 过度自我修改，偏离用户意图** [#3275](https://github.com/Hmbown/CodeWhale/issues/3275)
    - **重要性**：Agent 行为控制问题。模型在未经确认的情况下扩展工作范围，陷入“自问自答”循环，导致不可预期的修改。
    - **社区反应**：评论数 11 条，用户抱怨模型“过于自作主张”，急需权限控制机制。

5.  **[Bug] Windows 11 下 TUI 间歇性卡死** [#1812](https://github.com/Hmbown/CodeWhale/issues/1812)
    - **重要性**：跨平台兼容性问题。UI 完全无响应但进程存活，日志显示与 `crossterm` 轮询机制有关。

6.  **[Refactor] 提取 Provider 注册表以优化庞大配置文件** [#2608](https://github.com/Hmbown/CodeWhale/issues/2608)
    - **重要性**：架构重构。核心配置文件行数过万，新增 Provider 需修改大量代码，急需模块化改造。

7.  **[Bug] 沙箱阻止 Git worktree 写入操作** [#3355](https://github.com/Hmbown/CodeWhale/issues/3355)
    - **重要性**：影响多工作流用户。沙箱机制误判 worktree 路径，导致非信任模式下 Git 操作失败。

8.  **[Enhancement] 增加 `reasoning_style` 覆盖以支持 MiniMax/Qwen 等模型** [#3222](https://github.com/Hmbown/CodeWhale/issues/3222)
    - **重要性**：模型兼容性。当前解析器无法正确处理部分模型的内联推理内容，需增加适配层。

9.  **[v0.8.64] 增加“编辑前读取”防护栏** [#3364](https://github.com/Hmbown/CodeWhale/issues/3364)
    - **重要性**：旨在减少 Agent 产生的错误编辑，强制在修改前进行文件读取验证，提升操作可靠性。

10. **[Bug] 自动生成多个 Agent 后 UI 冻结** [#3289](https://github.com/Hmbown/CodeWhale/issues/3289)
    - **重要性**：多 Agent 协作场景下的严重 Bug，在规划模式生成子 Agent 后界面卡死。

## 4. 重要 PR 进展
以下筛选了 10 个重要的功能更新与修复 PR：

1.  **v0.8.64 安全与发布集成** [#3373](https://github.com/Hmbown/CodeWhale/pull/3373)
    - 内容：v0.8.64 版本的主合并请求，集成了安全加固、自动审查及 CI 工作流修复。

2.  **修复 CLI：解决调度器异常退出导致的子进程孤立问题** [#3378](https://github.com/Hmbown/CodeWhale/pull/3378)
    - 内容：修复了 SIGKILL 或崩溃时，被委托的 server 子进程未被清理的 Bug，提升服务可靠性。

3.  **功能(TUI)：运行时应用文件权限规则** [#3379](https://github.com/Hmbown/CodeWhale/pull/3379)
    - 内容：将 `permissions.toml` 中的文件路径规则接入 TUI 运行时，增强了对敏感文件操作的控制。

4.  **修复(UI)：降低侧边栏显示的最小终端宽度要求** [#3371](https://github.com/Hmbown/CodeWhale/issues/3371)
    - 内容：解决了常见终端配置下侧边栏不显示的问题，将最小宽度限制从 100 降低。

5.  **修复：ACP 会话中保持多轮对话历史** [#3372](https://github.com/Hmbown/CodeWhale/pull/3372)
    - 内容：修复了 ACP 服务器每次 prompt 都丢失上下文的问题，确保多轮对话连续性。

6.  **修复(CI)：恢复 Nightly 交叉编译构建与自动标签幂等性** [#3374](https://github.com/Hmbown/CodeWhale/pull/3374)
    - 内容：解决了最近 CI 构建失败的问题，确保发布流程顺畅。

7.  **功能：增加开发服务器就绪检测工具** [#3376](https://github.com/Hmbown/CodeWhale/pull/3376)
    - 内容：新增 `wait_for_dev_server` 工具，支持本地回环检测，优化 Agent 启动服务的流程。

8.  **修复：UI 等待状态下的倒计时显示优化** [#3375](https://github.com/Hmbown/CodeWhale/pull/3375)
    - 内容：优化了模型等待时的 Footer 显示逻辑，避免在短时等待时显示无意义的倒计时。

9.  **集成：新增企业微信智能机器人桥接** [#3370](https://github.com/Hmbown/CodeWhale/pull/3370)
    - 内容：扩展了第三方集成能力，支持将 CodeWhale 接入企业微信。

10. **修复：沙箱允许 Worktree Git 元数据写入** [#3356](https://github.com/Hmbown/CodeWhale/pull/3356)
    - 内容：解决了 Git worktree 环境下沙箱拦截 `.git` 指针文件写入的问题。

## 5. 功能需求趋势
- **安全与控制**：社区强烈需求在自动化执行与安全控制之间取得平衡，如自动审查策略、编辑前读取验证及更细粒度的沙箱权限控制。
- **架构解耦**：项目核心文件（如 `config.rs`, `runtime_api.rs`）过于庞大，重构与模块化拆分成为开发重点，旨在降低维护成本并提高扩展性。
- **多模型适配**：随着对 MiniMax、Qwen、GLM 等模型的支持需求增加，统一的推理风格适配层成为必要的功能扩展方向。
- **Agent 可靠性**：针对 Agent“跑偏”、卡死、上下文溢出等问题，社区期待更健壮的会话管理和错误恢复机制。

## 6. 开发者关注点
- **稳定性痛点**：Windows 平台卡死、YOLO 模式下的 Turn stalled 错误是当前反馈最集中的稳定性问题。
- **上下文管理**：长对话中的上下文压缩与历史记录保持是开发者的核心痛点，影响了复杂任务的执行效果。
- **配置复杂度**：庞大的配置文件和复杂的 Provider 匹配逻辑让开发者在添加新模型或自定义配置时感到困扰。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*