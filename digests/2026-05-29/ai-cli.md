# AI CLI 工具社区动态日报 2026-05-29

> 生成时间: 2026-05-29 03:54 UTC | 覆盖工具: 8 个

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

# AI CLI 工具生态横向对比分析报告 (2026-05-29)

## 1. 生态全景
AI CLI 工具正经历从"单一对话助手"向"多智能体编排平台"的范式跃迁。**Claude Code** 凭借 Opus 4.8 模型率先尝试大规模后台 Agent 编排，**Qwen Code** 和 **OpenAI Codex** 则在架构层面加速向 Daemon（守护进程）模式演进以支持多端复用。**MCP (Model Context Protocol)** 与 **ACP (Agent Communication Protocol)** 已成为连接 IDE 与外部工具的事实标准，各工具均在补齐协议短板。然而，新模型与新架构的引入也带来了显著的不稳定性，如会话状态损坏、上下文压缩失败及内存溢出等问题频发，"快速迭代"与"生产可用"之间的平衡成为当前核心挑战。

## 2. 各工具活跃度对比

| 工具名称 | 今日 Release 情况 | 重点 Issues (Top N) | 重点 PRs (Top N) | 核心动态摘要 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | v2.1.154 (新模型), v2.1.156 (修复) | 10 | 5 | 引入 Opus 4.8 支持多 Agent 编排，但 API 错误频发引发社区强烈反馈。 |
| **OpenAI Codex** | v0.135.0, v0.136.0-alpha.1 | 10 | 10 | 强化远程诊断与企业级 Hook 机制，Windows 平台兼容性成痛点。 |
| **Gemini CLI** | v0.45.0-preview.1, v0.44.1 | 10 | 10 | 专注 Agent 稳定性修复，大幅优化长会话加载性能。 |
| **GitHub Copilot CLI**| v1.0.56-1 | 10 | 0 (无更新) | 优化 MCP Token 消耗，但 WebSocket 连接错误与上下文限制问题爆发。 |
| **Kimi Code CLI** | v1.46.0 (发布中) | 8 | 10 | 完善国产 IDE (Zed) 集成体验，解决 ACP 协议实现缺失问题。 |
| **OpenCode** | v1.15.12 | 10 | 10 | 引入 WebSocket 传输，响应用户对模型成本（DeepSeek 降价）的关注。 |
| **Qwen Code** | v0.16.1-nightly | 10 | 10 | 重构 Daemon 架构与上下文压缩机制，向服务化转型。 |
| **DeepSeek TUI** | 无 | 10 | 10 | 社区聚焦多模型提供商支持与中文输入法本地化体验。 |

## 3. 共同关注的功能方向

### 3.1 架构服务化与多端复用
**Qwen Code**、**OpenAI Codex** 和 **Gemini CLI** 均在近期大力投入 Daemon（后台服务）模式的重构。社区强烈要求 CLI 工具能像语言服务器一样在后台运行，支持多客户端（IDE、Web、终端）共享同一个会话实例，解决资源独占和历史记录同步问题。

### 3.2 IDE 深度集成协议 (ACP)
**Kimi Code CLI** 和 **OpenCode** 集中精力修复 ACP 协议的实现缺陷，如历史记录回放、Token 统计上报等。这表明 CLI 工具正逐渐脱离单一终端场景，转而作为后端引擎嵌入到 Zed、VS Code 等现代编辑器中。

### 3.3 上下文管理的精细化
随着模型上下文窗口增大，简单的截断已无法满足需求。**Qwen Code** 引入"摘要+恢复附件"机制，**Claude Code** 探索多 Agent 上下文隔离，**Copilot CLI** 和 **Gemini CLI** 则致力于解决压缩失败或内存溢出问题。长对话的记忆管理已成为核心竞争力。

### 3.4 平台兼容性
**Windows 平台** 的兼容性问题在 **OpenAI Codex** (沙箱崩溃)、**Gemini CLI** (图片粘贴)、**OpenCode** (Shell 挂起) 等多个项目中同时出现。此外，**DeepSeek TUI** 和 **Gemini CLI** 均收到关于 CJK (中日韩) 输入法适配的反馈，显示出非英语市场的活跃度提升。

## 4. 差异化定位分析

| 工具 | 核心定位 | 技术路线差异 | 目标用户画像 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **前沿模型能力的先行者** | 激进引入最强模型 (Opus 4.8) 和动态工作流，不惜以牺牲短期稳定性换取功能领先。 | 需要处理极度复杂任务、愿意尝鲜并忍受 Bug 的极客开发者。 |
| **OpenAI Codex** | **企业级工程化平台** | 侧重远程连接诊断、Hook 扩展、权限管控与配置云端同步，架构扎实，注重可观测性。 | 注重稳定性、安全性与团队协作规范的企业开发团队。 |
| **Gemini CLI** | **稳健的基础设施** | 聚焦基础组件的评估与修复，如 AST 感知、大历史加载优化，强调工具的底层健壮性。 | 对工具稳定性要求高、希望深入定制底层行为的资深开发者。 |
| **Copilot CLI** | **IDE 内嵌助手** | 深度绑定 GitHub 生态，优化 Review 流程，但 CLI 本身架构迭代较慢，受限于产品形态。 | GitHub 重度用户，习惯在 IDE 内完成闭环的普通开发者。 |
| **Kimi / Qwen** | **国产/开源生态主力** | 快速跟进 ACP/MCP 协议，针对中文输入、本地网络环境及性价比模型进行深度优化。 | 中文开发者、追求性价比或开源替代方案的技术团队。 |
| **OpenCode** | **高性价比开源方案** | 敏捷响应用户对模型定价的诉求（如 DeepSeek 降价），提供灵活的模型接入与配置能力。 | 关注成本控制、喜欢折腾配置的开源社区开发者。 |

## 5. 社区热度与成熟度

*   **最活跃/迭代最快**: **Qwen Code** 与 **OpenCode**。两者均有大量架构级重构 PR，社区对协议实现、性能优化反馈热烈，显示出项目处于上升期，功能迭代迅速。
*   **最具争议/波动最大**: **Claude Code**。因新模型引入导致严重的 API 错误和数据丢失问题，社区负面反馈激增，属于典型的"功能驱动型"高速迭代，稳定性亟待补齐。
*   **相对平稳/沉淀期**: **GitHub Copilot CLI**。过去24小时无 PR 更新，Issues 集中在现有架构限制（如上下文窗口）和连接错误上，显示出产品可能进入维护期或受限于后端服务更新。
*   **垂直领域深耕**: **DeepSeek TUI**。社区活跃度集中在多模型适配和本地化体验修复，体现了其作为轻量级、可定制前端的核心价值。

## 6. 值得关注的趋势信号

### 6.1 "降本增效"驱动技术选型
**OpenCode** 社区迅速响应 DeepSeek V4 降价并要求调整配额，表明开发者对 Token 成本极其敏感。未来 CLI 工具不仅要比拼功能，更要比拼"路由能力"——即如何智能地在不同成本的模型间切换以实现最优性价比。

### 6.2 多智能体编排的阵痛期
**Claude Code** 的动态工作流和 **Gemini CLI** 的子 Agent 问题表明，多 Agent 编排已成为巨头竞赛的焦点。但当前的错误处理、状态同步和资源管理（如 CPU 占用）仍处于早期阶段，稳定性将是下一阶段的竞争高地。

### 6.3 数据主权与本地化诉求
**OpenAI Codex** 用户要求自定义存储路径，**Qwen Code** 和 **Kimi** 用户关注本地部署与数据隐私。这反映出 CLI 工具正从个人玩具转向生产力基础设施，企业对数据落地的控制权要求日益增强。

### 6.4 协议决定生态边界
ACP 和 MCP 的实现完整度直接决定了 CLI 工具能否顺利接入 IDE 生态。**Kimi** 和 **OpenCode** 的实践证明，谁能率先实现协议的无缝对接，谁就能在编辑器战场占据一席之地。开发者应关注这些协议的标准进展，避免被非标实现锁定。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告 (2026-05-29)

## 1. 热门 Skills 排行
以下 Skills 基于 PR 列表排序筛选，代表了社区当前最具代表性的功能拓展方向：

1.  **document-typography (文档排版质量控制)**
    *   **链接**: [PR #514](https://github.com/anthropics/skills/pull/514)
    *   **功能**: 专门解决 AI 生成文档中的常见排版痛点，如孤行、寡妇段落及编号错位，提升文档专业度。
    *   **状态**: [OPEN]
    *   **热点**: 直击 AI 生成内容"能用但不好看"的痛点，是提升输出质量的基础设施型 Skill。

2.  **ODT Skill (开放文档格式支持)**
    *   **链接**: [PR #486](https://github.com/anthropics/skills/pull/486)
    *   **功能**: 支持 OpenDocument 格式 的创建、填充与 HTML 转换。
    *   **状态**: [OPEN]
    *   **热点**: 填补了对开源/国际标准文档格式的支持空白，尤其受到政府与企业合规场景的关注。

3.  **shodh-memory (AI 持久化记忆)**
    *   **链接**: [PR #154](https://github.com/anthropics/skills/pull/154)
    *   **功能**: 为 AI Agent 提供跨对话的持久化上下文记忆能力。
    *   **状态**: [OPEN]
    *   **热点**: "记忆"是 Agent 系统当前最核心的难点之一，该 Skill 尝试解决上下文丢失问题，极具技术前瞻性。

4.  **ServiceNow Platform Skill (企业级平台集成)**
    *   **链接**: [PR #568](https://github.com/anthropics/skills/pull/568)
    *   **功能**: 覆盖 ServiceNow 平台的脚本、架构、ITAM/ITSM 等全方位开发辅助。
    *   **状态**: [OPEN]
    *   **热点**: 典型企业级应用场景，显示了 Skills 正从通用编程向垂直领域深度渗透。

5.  **AURELION Skill Suite (结构化认知框架)**
    *   **链接**: [PR #444](https://github.com/anthropics/skills/pull/444)
    *   **功能**: 提供一套包含核心、顾问、代理和记忆模块的认知框架，用于专业知识管理。
    *   **状态**: [OPEN]
    *   **热点**: 试图建立一套标准化的 AI 思考模式，属于高阶的元技能方向。

6.  **n8n-builder & n8n-debugger (工作流自动化)**
    *   **链接**: [PR #190](https://github.com/anthropics/skills/pull/190)
    *   **功能**: 自动构建和调试 n8n 自动化工作流。
    *   **状态**: [OPEN]
    *   **热点**: 结合了热门的 n8n 自动化工具，展示了 Claude Code 在 LLM orchestration 领域的潜力。

---

## 2. 社区需求趋势
从 Issues 讨论来看，社区关注点已超越单一功能实现，转向系统级能力：

*   **企业级协作与共享机制**
    社区强烈呼吁支持**组织内 Skill 共享** ([Issue #228](https://github.com/anthropics/skills/issues/228))。目前用户需手动下载 `.skill` 文件通过 IM 转发，缺乏统一的团队库管理，这已成为企业采纳的阻碍。

*   **跨平台兼容性与稳定性**
    大量反馈集中在 **Windows 平台兼容性** ([Issue #556](https://github.com/anthropics/skills/issues/556), [PR #1099](https://github.com/anthropics/skills/pull/1099)) 及**加载丢失/报错** ([Issue #62](https://github.com/anthropics/skills/issues/62))。此外，对 **AWS Bedrock** 的支持 ([Issue #29](https://github.com/anthropics/skills/issues/29)) 也是企业用户的重点诉求。

*   **安全与信任边界**
    社区对第三方 Skill 的安全性提出担忧，指出当前的命名空间机制可能误导用户认为社区 Skill 是官方安全的内容 ([Issue #492](https://github.com/anthropics/skills/issues/492))，呼吁建立权限隔离与审计机制。

*   **与 MCP 协议的融合**
    开发者希望将 Skills 暴露为标准化的 MCP (Model Context Protocol) 接口 ([Issue #16](https://github.com/anthropics/skills/issues/16))，以实现更通用的 API 调用和软件封装。

---

## 3. 高潜力待合并 Skills
以下 PR 虽处于 OPEN 状态，但修复了关键 Bug 或具有高实用价值，近期值得关注：

*   **Windows 平台关键修复 ([PR #1099](https://github.com/anthropics/skills/pull/1099))**
    *   **内容**: 修复了 `run_eval.py` 在 Windows 上的崩溃问题（子进程管道读取错误）。
    *   **价值**: 解决了 Windows 用户无法进行 Skill 评估的阻塞性问题，更新于 5 月下旬，非常活跃。

*   **Skill-Creator YAML 校验增强 ([PR #539](https://github.com/anthropics/skills/pull/539))**
    *   **内容**: 增加了对 YAML 中未加引号的特殊字符（如冒号）的预解析校验。
    *   **价值**: 防止静默解析失败，能显著降低 Skill 开发者的调试门槛。

*   **Document Skills 插件重复加载修复 ([Issue #189](https://github.com/anthropics/skills/issues/189))**
    *   **关联背景**: Issue 指出 `document-skills` 与 `example-skills` 插件存在内容重复。
    *   **趋势**: 社区已识别并着手解决插件生态中的冲突问题，预计相关补丁将很快合并。

---

## 4. Skills 生态洞察
**当前社区最集中的诉求是：从“个人工具”向“企业级协作平台”进化，急需解决跨平台稳定性、权限隔离与团队分发机制。**

---

# Claude Code 社区动态日报 (2026-05-29)

## 1. 今日速览
今日 Claude Code 迎来重大版本更新，**v2.1.154 正式引入 Opus 4.8 模型**，支持高努力模式与动态工作流，允许后台编排成百上千个 Agent。然而，新模型引入的 "Thinking Block" 修改问题导致 API 错误频发，虽然 **v2.1.156** 快速修复了部分问题，但又暴露出新的 `system role` 错误，导致社区反馈热烈。稳定性与新功能兼容性成为今日焦点。

## 2. 版本发布

### v2.1.156
- **修复**: 修复了使用 Opus 4.8 时 thinking blocks 被修改导致 API 错误的问题。

### v2.1.154
- **新模型**: Opus 4.8 上线，默认支持高努力模式 (`/effort xhigh`)，处理高难度任务。
- **新功能**: 引入**动态工作流**，支持后台编排数十到数百个 Agent，处理更大规模的复杂任务。

## 3. 社区热点 Issues (Top 10)

1.  **[OPEN] #27302 支持同一连接器的多账户登录**
    - **为何重要**: 长期高票需求 (👍250)，用户迫切需要在 Web 端和 Claude Code 中切换同一服务（如 GitHub）的不同账户。
    - **社区反应**: 持续活跃，评论数已达 189 条，是多账户工作流的核心痛点。
    - [链接](https://github.com/anthropics/claude-code/issues/27302)

2.  **[OPEN] #29579 Max 订阅用户遭遇 Rate Limit 错误**
    - **为何重要**: 严重影响付费用户体验，明明仅使用了 16% 配额却被限制，涉及 API 计费与订阅状态的同步问题。
    - **社区反应**: 评论 151 条，引起大量订阅用户共鸣。
    - [链接](https://github.com/anthropics/claude-code/issues/29579)

3.  **[OPEN] #10199 & #63147 Opus 4.8 "Thinking Block" 修改错误导致会话中断**
    - **为何重要**: 与今日发布的新版本直接相关。Opus 4.8 的 thinking blocks 机制变更导致 API 400 错误，使得会话无法恢复或永久损坏。
    - **社区反应**: 紧急度高，多个 Issue 报告了相同现象，官方已在 v2.1.156 尝试修复。
    - [链接](https://github.com/anthropics/claude-code/issues/10199) | [链接](https://github.com/anthropics/claude-code/issues/63147)

4.  **[OPEN] #63469 v2.1.156 引入新回归 Bug (System Role Error)**
    - **为何重要**: 这是针对今日修复版本的回归反馈。修复 Thinking Block 后，出现了 `messages[1].role must be either 'user' or 'assistant', but got 'system'` 错误，导致 VS Code 扩展无法使用。
    - **社区反应**: 新 Issue 增长迅速，显示新版稳定性存在问题。
    - [链接](https://github.com/anthropics/claude-code/issues/63469)

5.  **[OPEN] #48334 桌面端更新导致会话历史丢失**
    - **为何重要**: 数据安全问题。更新应用后 `sessions-index.json` 和 `.jsonl` 文件丢失，严重影响用户对工具的信任度。
    - **社区反应**: 多名用户确认跨版本更新时发生数据丢失。
    - [链接](https://github.com/anthropics/claude-code/issues/48334)

6.  **[OPEN] #22264 并行工具调用级联失败**
    - **为何重要**: 核心执行逻辑问题。当一批并行调用中有一个失败，其余调用被强制取消，降低了任务执行的容错性。
    - **社区反应**: 开发者希望能独立处理各工具调用的结果。
    - [链接](https://github.com/anthropics/claude-code/issues/22264)

7.  **[OPEN] #53442 Cowork Google Drive MCP 无法读取 Workspace 共享盘**
    - **为何重要**: 企业级功能缺陷。MCP 连接器无法访问企业共享盘内容，限制了在企业环境中的实用性。
    - **社区反应**: 企业用户反馈较多。
    - [链接](https://github.com/anthropics/claude-code/issues/53442)

8.  **[OPEN] #63196 Agent 进程闲置时 CPU 占用 100%**
    - **为何重要**: 性能问题。`claude agents` 守护进程在无任务时仍满载运行，影响本地开发体验。
    - **社区反应**: 已有用户确认问题。
    - [链接](https://github.com/anthropics/claude-code/issues/63196)

9.  **[OPEN] #29438 iOS 远程控制缺少推送通知**
    - **为何重要**: 移动端体验缺失。CLI 等待权限批准时，iOS App 无推送，用户需一直盯着屏幕，无法实现真正的异步操作。
    - **社区反应**: 远程办公场景下的高频需求。
    - [链接](https://github.com/anthropics/claude-code/issues/29438)

10. **[OPEN] #50640 Windows 11 下段错误崩溃**
    - **为何重要**: 平台兼容性。v2.1.112+ 版本在 Windows 11 上启动即崩溃，阻塞了 Windows 用户的升级路径。
    - [链接](https://github.com/anthropics/claude-code/issues/50640)

## 4. 重要 PR 进展

1.  **[OPEN] #63262 添加 side-threads 插件**
   - **内容**: 引入 `/thread` 和 `/back` 命令，支持在对话中开启类似 Slack 的分支线程，讨论结束后返回主流程。
   - **意义**: 增强复杂任务的上下文管理能力，避免主对话混乱。
   - [链接](https://github.com/anthropics/claude-code/pull/63262)

2.  **[OPEN] #63189 /commit-push-pr 命令支持 PR 模板**
   - **内容**: 使生成的 PR 描述自动遵循仓库内的 `.github/PULL_REQUEST_TEMPLATE.md` 格式。
   - **意义**: 规范化团队协作流程。
   - [链接](https://github.com/anthropics/claude-code/pull/63189)

3.  **[OPEN] #62941 修复 Ralph Wiggum stop hook 读取逻辑**
   - **内容**: 修复了 stop hook 仅读取最后一行日志导致无法正确提取文本块的问题。
   - **意义**: 提高了自定义 Hook 的稳定性。
   - [链接](https://github.com/anthropics/claude-code/pull/62941)

4.  **[OPEN] #63382 修复 Hookify 测试示例语义**
   - **内容**: 修正了测试用例中模糊的正则匹配写法，改为明确的 `not_contains` 检查。
   - **意义**: 提升文档与测试的准确性。
   - [链接](https://github.com/anthropics/claude-code/pull/63382)

5.  **[OPEN] #63467 & #63460 文档更新**
   - **内容**: 补充 Windows 平台 `gh CLI` 安装指令，更新过时的 `npm install` 警告。
   - **意义**: 降低新用户的入门门槛，特别是 Windows 用户群体。
   - [链接](https://github.com/anthropics/claude-code/pull/63467) | [链接](https://github.com/anthropics/claude-code/pull/63460)

## 5. 功能需求趋势

-   **新模型适配与稳定性**: 随着 Opus 4.8 的发布，社区高度关注新模型的 API 兼容性，特别是 "Thinking Blocks" 的处理机制。如何平衡新模型的深度推理能力与现有 API 架构的稳定性是当前核心挑战。
-   **多智能体与工作流编排**: v2.1.154 引入的动态工作流标志着产品向多 Agent 并行处理演进。社区对此表示关注，同时也带来了对资源管理（如 CPU 占用 Issue #63196）的新担忧。
-   **MCP 生态扩展**: 关于 Google Drive、Chrome 浏览器桥接的 Issue 增多，显示出用户希望 Claude Code 能更深度地接入外部工具和企业环境。

## 6. 开发者关注点

-   **API 错误频发**: 今日 Issues 中大量关于 API 400/422 错误的反馈，表明 Opus 4.8 的迭代对现有 Session 管理造成了冲击。开发者急需更清晰的错误提示和会话恢复机制。
-   **数据持久化**: Issue #48334 反映的更新后数据丢失问题引发了强烈担忧。开发者对本地会话历史的可靠性有极高要求，建议官方加强升级脚本的测试。
-   **权限与限制**: Rate Limit 误判问题依旧困扰用户，开发者希望订阅状态与 API 限制能更透明、准确地同步。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-05-29)

## 今日速览
OpenAI Codex 今日发布了 **v0.135.0** 正式版，重点增强了远程连接的诊断能力与状态显示，同时推出了 v0.136.0 的首个 Alpha 版本。社区方面，Windows 平台的兼容性问题（如沙箱崩溃、换行符混乱）引发热议，EU/挪威地区的 Chrome 插件限制成为用户反馈的焦点。此外，关于本地数据存储路径自定义和 Hook 机制扩展的功能需求受到高度关注。

---

## 版本发布

### rust-v0.135.0
**主要更新：**
- **诊断增强**：`codex doctor` 命令现在可以报告更详细的环境、Git、终端、应用服务器及线程清单信息，便于排查支持案例。
- **远程状态优化**：`/status` 命令在 TUI 通过远程传输连接时，新增显示远程连接详情和服务器版本信息。
- **Vim 模式**：更新日志提及 Vim 相关改进（原文截断，推测为模式兼容性修复）。

### rust-v0.136.0-alpha.1
- 发布了首个 Alpha 测试版，暂无详细变更日志。

---

## 社区热点 Issues

以下是今日最受关注的 10 个 Issue，涵盖了平台兼容性、功能请求和连接问题：

1.  **[Windows] Chrome 插件在 EU/挪威地区不可用** ([#21598](https://github.com/openai/codex/issues/21598))
    - **关注点**：即使插件显示已连接，Windows 桌面端在挪威/EU 地区仍无法使用 Chrome 插件。用户怀疑这是区域性灰度发布或限制导致，严重影响了欧洲用户的浏览器自动化体验。

2.  **[Windows] 文件修补后换行符混乱** ([#4003](https://github.com/openai/codex/issues/4003))
    - **关注点**：这是一个历史遗留的高赞问题（👍 44）。Codex 在 Windows 上修改文件时未保持原有换行符，导致文件格式混乱。这反映了跨平台开发的经典痛点仍未完全解决。

3.  **[Desktop] Context Compaction 失败导致流断开** ([#22107](https://github.com/openai/codex/issues/22107))
    - **关注点**：在本地编码会话中，上下文压缩失败导致远程流断开连接。这影响了长对话的稳定性，用户不得不重新开始会话。

4.  **[Feature Request] 可配置的 "Chats" 项目目录** ([#19909](https://github.com/openai/codex/issues/19909))
    - **关注点**：目前 Codex 强制将聊天数据存储在 `~/Documents/Codex`，这会触发 iCloud 同步并可能干扰版本控制。用户强烈希望能自定义该路径，以避免云同步冲突。

5.  **[Connector] Google Sheets 连接器写入权限错误** ([#24373](https://github.com/openai/codex/issues/24373))
    - **关注点**：Google Drive 连接器能读取但无法写入表格，报错缺失权限。重新安装插件无效，且伴随 429 配额错误，阻塞了数据处理工作流。

6.  **[Windows] 沙箱环境间歇性启动失败** ([#24259](https://github.com/openai/codex/issues/24259))
    - **关注点**：Windows 11 ARM64 平台上，沙箱执行 `spawn setup refresh` 命令时频发失败，尽管 `codex doctor` 检查通过。这影响了 CLI 在 ARM 架构上的稳定性。

7.  **[Feature Request] 移动工作区文件夹时保留线程历史** ([#15347](https://github.com/openai/codex/issues/15347))
    - **关注点**：用户迁移或重命名项目文件夹后，现有的线程历史无法关联到新环境。开发者希望能像 IDE 一样自动识别项目变更。

8.  **[Safety] 聊天被误标记为网络安全风险** ([#20873](https://github.com/openai/codex/issues/20873))
    - **关注点**：用户在进行看似正常的开发操作时被安全机制拦截。此类误报会中断开发流程，用户希望能有更细粒度的安全策略。

9.  **[Plugin] 技能名称长度限制过严** ([#24950](https://github.com/openai/codex/issues/24950))
    - **关注点**：插件技能的限定名称（`plugin_name:skill_name`）超过 64 字符即被拒绝加载。这对于具有描述性命名的复杂插件构成了限制。

10. **[Feature Request] PostToolUseFailure Hook** ([#24907](https://github.com/openai/codex/issues/24907))
    - **关注点**：目前的 Hook 仅在工具成功执行后触发。开发者请求增加工具执行失败时的 Hook 接口，以便于构建更健壮的错误处理和自动化流程。

---

## 重要 PR 进展

以下是今日值得关注的代码合并与进展，主要集中在架构重构、Hook 增强和跨平台修复：

1.  **新增 `/usage` 用量报告命令** ([#24124](https://github.com/openai/codex/pull/24124), [#24123](https://github.com/openai/codex/pull/24123), [#24122](https://github.com/openai/codex/pull/24122))
    - **进展**：引入了本地查看 Token 消耗详情的功能，支持按天或周查看技能、模型工具等的消耗占比。这是用户期待已久的透明化计费功能。

2.  **SessionStart Hook 支持 CODEX_ENV_FILE** ([#24805](https://github.com/openai/codex/pull/24805))
    - **功能**：允许 SessionStart Hook 通过环境变量文件设置持久化的 Shell 状态（如 PATH、虚拟环境），解决了 Hook 进程状态无法传递给后续命令的问题。

3.  **修复 Zsh Shell 快照中的 PATH 丢失问题** ([#16974](https://github.com/openai/codex/pull/16974))
    - **修复**：修正了 Zsh 环境下 PATH 等参数被错误过滤导致环境变量丢失的 Bug，提升了 Shell 兼容性。

4.  **过滤插件安装建议逻辑优化** ([#24996](https://github.com/openai/codex/pull/24996))
    - **改进**：插件建议系统现在会根据用户已安装的 App 进行相关性过滤，避免推荐与当前环境无关的插件。

5.  **引入持久会话接口** ([#24180](https://github.com/openai/codex/pull/24180))
    - **架构**：重构了代码模式的会话管理，引入 `CodeModeSession` 接口，为后续支持更复杂的会话持久化和跨进程执行奠定基础。

6.  **修复非 Windows 平台的 PowerShell 安全解析逻辑** ([#24946](https://github.com/openai/codex/pull/24946))
    - **修复**：防止在 Linux/macOS 上错误调用 Windows PowerShell 的安全分类器，修复了跨平台命令判断的逻辑漏洞。

7.  **支持实时会话模型版本覆盖** ([#24999](https://github.com/openai/codex/pull/24999))
    - **功能**：允许客户端在启动实时会话时动态指定模型和版本，而无需重启 app-server 或修改全局配置。

8.  **通过原生流水线路由扩展图像生成** ([#24972](https://github.com/openai/codex/pull/24972))
    - **改进**：统一了插件图像生成的处理方式，使其行为与原生图像生成保持一致，改善工件持久化和 UI 补全体验。

9.  **绑定 Skill 路径到执行器文件系统** ([#24992](https://github.com/openai/codex/pull/24992))
    - **安全**：修复了多执行环境下的路径解析安全隐患，确保技能路径始终与其所属的文件系统上下文绑定。

10. **切换运行时配置至云端配置包** ([#24622](https://github.com/openai/codex/pull/24622))
    - **架构**：完成了运行时配置加载的云迁移，移除了旧的本地运行时路径，标志着配置管理向云端统一迈出重要一步。

---

## 功能需求趋势

从近期 Issues 和 PRs 分析，社区关注的功能方向如下：

- **Windows 平台体验优化**：Windows 下的沙箱稳定性、换行符处理及插件区域限制是目前最高频的痛点，显示出 Codex 在跨平台一致性上仍有提升空间。
- **Hook 机制增强**：开发者正积极利用 Hook 系统扩展 Codex 能力，从请求失败处理（#24907）到环境变量持久化（#24805），显示出社区对可编程性的强需求。
- **数据主权与可配置性**：用户希望能更灵活地控制数据存储位置（#19909）和项目迁移（#15347），反映出 Codex 正逐渐被用于更大型、更正式的项目中。
- **远程与移动端支持**：随着远程控制功能的引入，移动端任务的稳定性（#24780）和远程连接状态的可视化（v0.135.0 更新）成为新焦点。

## 开发者关注点

- **环境配置传递**：开发者常遇到 Hook 或 Shell 快照无法正确传递环境变量的问题，今日的 PR #24805 和 #16974 直接回应了这一痛点。
- **误报与安全限制**：安全机制误拦截正常开发任务（#20873）及区域功能限制（#21598）增加了开发者的心智负担，社区期待更精细的控制或白名单机制。
- **多模型与自定义 Provider 支持**：Issue #24780 和 #24879 表明，开发者在使用自定义模型或 DeepSeek 等第三方 Provider 时，仍面临兼容性和功能缺失（如自动审核模型名称硬编码）的挑战。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-05-29)

## 1. 今日速览
今日 Gemini CLI 发布了 `v0.45.0-preview.1` 和 `v0.44.1` 两个补丁版本，主要修复了 Vim 模式下的按键映射问题。社区方面，开发者对 **Agent 执行稳定性**（如挂起、卡死）和 **工具调用限制** 表现出高度关注。此外，多项关键 PR 已合并，显著提升了大历史会话加载性能和 WSL 兼容性。

---

## 2. 版本发布
*   **v0.45.0-preview.1**: 修补版本，主要针对 `v0.45.0-preview.0` 进行了 cherry-pick 修复。
*   **v0.45.0-nightly.20260528**: 修复了 CLI 中未映射的 Vim 普通模式按键被错误处理的问题 ([PR #27102](https://github.com/google-gemini/gemini-cli/pull/27102))。欢迎新贡献者 @MukundaKatta。
*   **v0.44.1**: 紧急修复版本，解决了合并冲突相关的补丁问题。

---

## 3. 社区热点 Issues (Top 10)

1.  **[P1] Generalist agent 挂起问题** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409))
    *   **关注点**: 严重程度高，影响基本功能。用户反馈 CLI 在调用通用智能体时会无限期挂起，即使是简单的创建文件夹操作也会卡死。
    *   **现状**: 维护者标记为需要重新测试，社区点赞数较多（👍 8）。

2.  **[P1] Shell 命令执行卡死** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))
    *   **关注点**: 交互体验痛点。命令执行完毕后，CLI 仍显示 "Waiting input" 导致界面卡死，影响工作效率。

3.  **[P1] 组件级评估体系构建** ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353))
    *   **关注点**: 项目质量战略。旨在建立行为评估测试标准，目前已有 76 个行为测试用例，关注模型工具调用的准确性。

4.  **[P1] 子智能体 MAX_TURNS 状态误报** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))
    *   **关注点**: 可靠性问题。子智能体达到最大轮次限制被中断时，错误地报告为 "GOAL success"，掩盖了实际未完成的事实。

5.  **[P2] 工具数量超过 128 个时报 400 错误** ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))
    *   **关注点**: 扩展性瓶颈。随着 Skills 和 Tools 增多，API 限制导致无法正常调用，希望 Agent 能智能筛选工具。

6.  **[P2] Agent 应阻止破坏性行为** ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672))
    *   **关注点**: 安全性需求。用户建议 CLI 应避免在复杂操作中轻易使用 `git reset --force` 等高风险命令，需更安全的交互策略。

7.  **[P2] Gemini 未能充分使用 Skills 和 Sub-agents** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))
    *   **关注点**: 智能体调度能力。用户反馈模型极少主动调用自定义的 Skills（如 gradle, git），除非显式指令，导致自动化体验打折。

8.  **[P2] Auto Memory 安全与日志优化** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525))
    *   **关注点**: 数据隐私。建议在发送给模型前对敏感信息（secrets）进行确定性修订，减少日志泄露风险。

9.  **[P2] Theia IDE 集成失效** ([#20003](https://github.com/google-gemini/gemini-cli/issues/20003))
    *   **关注点**: 生态兼容性。安装 Gemini CLI Companion 扩展后，`/ide status` 显示不支持当前集成环境。

10. **[P2] AST 感知文件读取调研** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))
    *   **关注点**: 架构增强。探讨引入 AST（抽象语法树）感知能力，以减少模型读取代码时的 Token 浪费和误判，提高代码理解精度。

---

## 4. 重要 PR 进展 (Top 10)

1.  **[Merged] 大历史会话加载性能优化** ([#27028](https://github.com/google-gemini/gemini-cli/pull/27028))
    *   **内容**: 解决了 `/chat` 命令加载慢的问题。在 59 个会话/2.3GB 数据的测试中，加载时间从 25 秒降至 634ms，实现亚秒级加载。

2.  **[Open] 修复 API 调用中的 ID 字段错误** ([#27341](https://github.com/google-gemini/gemini-cli/pull/27341))
    *   **内容**: 修复了 Tool Call 后返回 400 错误 "Unknown name 'id'" 的问题，剥离了 Gemini API 不支持的内部 ID 字段。

3.  **[Open] 防止 Web-fetch 工具的 SSRF 漏洞** ([#27335](https://github.com/google-gemini/gemini-cli/pull/27335))
    *   **内容**: 安全性修复。防止通过 HTTP 重定向绕过 `isBlockedHost` 检查，堵住了潜在的内网元数据窃取漏洞。

4.  **[Merged] Windows 图片粘贴支持** ([#27054](https://github.com/google-gemini/gemini-cli/pull/27054))
    *   **内容**: 增强了 Windows Terminal 下的体验，支持从剪贴板无缝粘贴图片，并优化了粘贴图片的 UI 显示。

5.  **[Open] WSL 环境执行 Windows 可执行文件修复** ([#27354](https://github.com/google-gemini/gemini-cli/pull/27354))
    *   **内容**: 解决了 WSL 中运行 `.exe` 文件时的 PTY 互操作性问题，自动回退到标准 Node `child_process` 执行。

6.  **[Open] 启动时跳过缺失目录避免崩溃** ([#27329](https://github.com/google-gemini/gemini-cli/pull/27329))
    *   **内容**: 修复了 `settings.json` 中引用不存在的目录导致 CLI 启动崩溃的问题，改为跳过并容错处理。

7.  **[Open] 防止畸形 Schema 导致崩溃** ([#27348](https://github.com/google-gemini/gemini-cli/pull/27348))
    *   **内容**: 在 `write_file` 等工具中包装 Ajv 校验逻辑，防止 LLM 发送意外参数形状时导致程序崩溃。

8.  **[Open] 过滤思维链中的非英文字符** ([#27349](https://github.com/google-gemini/gemini-cli/pull/27349))
    *   **内容**: 解决模型在英文环境下输出包含 CJK（中日韩）字符的思维链文本问题（如 "Fixing Worker...控制:..."），保持输出纯净。

9.  **[Open] 校验命令输入防止自然语言注入** ([#27347](https://github.com/google-gemini/gemini-cli/pull/27347))
    *   **内容**: 防止模型将自然语言文本（如 "show directory"）错误保存为 shell 命令，增强了工具调用的安全性。

10. **[Merged] 移除 Shell:true 修复 Node 弃用警告** ([#27379](https://github.com/google-gemini/gemini-cli/pull/27379))
    *   **内容**: 适配 Node.js 22+ 版本，移除 `spawn` 中的 `shell: true` 参数，消除安全相关的弃用警告。

---

## 5. 功能需求趋势
*   **稳定性与恢复机制**: 社区强烈呼吁解决 Agent 挂起和死锁问题，并希望子智能体在达到限制时能正确报告状态而非误报成功。
*   **安全性与防御性编程**: 开发者关注 Agent 对高风险命令（如 `git reset`）的使用限制，以及防止通过工具调用执行非预期的自然语言命令。
*   **架构与性能优化**: 对 AST 感知工具的探索表明社区希望提高代码理解的准确性；大历史文件加载的优化反映了长期使用场景下的性能需求。
*   **跨平台兼容性**: WSL 和 Windows 环境下的兼容性修复（如图片粘贴、Shell 执行）依然是开发重点。

## 6. 开发者关注点
*   **执行流阻塞**: 开发者普遍反映 Shell 命令执行和 Agent 推理过程经常意外卡住，需要频繁人工干预。
*   **工具调用限制**: 随着项目复杂度增加，128 个工具的上限成为瓶颈，开发者期待更智能的工具动态加载机制。
*   **日志与调试**: Auto Memory 功能的日志记录和敏感信息处理引起了关注，开发者希望有更透明的控制机制。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-05-29)

## 1. 今日速览
过去24小时，Copilot CLI 连续发布了 v1.0.56-1 和 v1.0.56-0 两个更新版本，重点优化了 Code review agent 的模型灵活性，并显著降低了 MCP server 的 Token 消耗。然而，社区中关于 WebSocket 连接中出现 "Duplicate item" 错误的反馈激增，成为当前最急需解决的稳定性问题。此外，企业级权限管理和上下文窗口限制依然是开发者讨论的热点。

## 2. 版本发布
**最新版本：v1.0.56-1** (发布于 2026-05-29)

近期连续更新主要包含以下重点：
- **模型灵活性优化**：Code review agent 现在使用当前会话模型，而非固定默认模型，提供更一致的体验。
- **Token 消耗降低**：当 `gh` CLI 在 PATH 中时，GitHub MCP server 默认移除冗余的可替换工具，减少 Token 占用。
- **配置持久化修复**：修复了上下文窗口层级选择在会话事件中无法持久化的问题，确保配置在恢复会话时生效。
- **用户体验改进**：优化了受信任文件夹的确认消息，明确了权限记忆范围；修复了粘贴文本后的光标定位问题。

*(注：v1.0.55 亦于近日发布，新增了对 Claude Opus 4.8 的支持，并对 Token 计费用户增加了 Auto 模型选择限制。)*

## 3. 社区热点 Issues (Top 10)

1.  **[OPEN] 企业级 Token 权限可见性问题** (#223)
    - **链接**: [github/copilot-cli Issue #223](https://github.com/github/copilot-cli/issues/223)
    - **摘要**: 组织拥有的细粒度 Token 中缺少 "Copilot Requests" 权限显示。这阻碍了企业环境使用 PAT 进行自动化认证，是企业用户目前最关注的问题之一（73 👍）。

2.  **[OPEN] 频繁的 400 错误：请求体无效** (#1274)
    - **链接**: [github/copilot-cli Issue #1274](https://github.com/github/copilot-cli/issues/1274)
    - **摘要**: 用户在使用 CLI 进行代码审查时，高达 95% 的请求返回 400 错误。社区反馈活跃（24 评论），怀疑是服务端验证或 CLI 构造请求异常。

3.  **[OPEN] WebSocket "Duplicate item" 错误频发** (#3560)
    - **链接**: [github/copilot-cli Issue #3560](https://github.com/github/copilot-cli/issues/3560)
    - **摘要**: 昨晚突然出现的大面积故障。普通聊天正常，但在工具调用后的下一轮对话中触发 `Duplicate item found` 错误，严重影响工作流。

4.  **[OPEN] ACP 模式缺少斜杠命令支持** (#1044)
    - **链接**: [github/copilot-cli Issue #1044](https://github.com/github/copilot-cli/issues/1044)
    - **摘要**: Copilot ACP 未提供 `available_commands_update`，导致前端（如 Zed 编辑器）无法使用斜杠命令，集成体验受损。

5.  **[OPEN] 上下文窗口被系统/工具大量占用** (#3539)
    - **链接**: [github/copilot-cli Issue #3539](https://github.com/github/copilot-cli/issues/3539)
    - **摘要**: 配置多个 MCP 服务器后，System/Tools 占用 146k tokens（73%），导致新会话启动即触发自动压缩。这是目前 MCP 扩展性的一大痛点。

6.  **[OPEN] Claude Opus 上下文窗口限制过低** (#3355)
    - **链接**: [github/copilot-cli Issue #3355](https://github.com/github/copilot-cli/issues/3355)
    - **摘要**: Claude Opus 4.6 模型原生支持 1M tokens，但 CLI 强制限制在 200k，导致长对话频繁压缩。用户呼吁开放更大的上下文窗口。

7.  **[OPEN] 会话状态重放导致的重复项错误** (#3559)
    - **链接**: [github/copilot-cli Issue #3559](https://github.com/github/copilot-cli/issues/3559)
    - **摘要**: 与 #3560 类似，错误源于 session-state 重放时的 `fc_call_*` ID 冲突。这表明近期更新可能引入了会话状态管理的回归问题。

8.  **[OPEN] Windows 平台测试套件挂起** (#3308)
    - **链接**: [github/copilot-cli Issue #3308](https://github.com/github/copilot-cli/issues/3308)
    - **摘要**: 在 Copilot CLI 终端中运行 `npx vitest run` 会无限挂起，而在标准 PowerShell/cmd 中正常。这是 Windows 用户的重大阻碍。

9.  **[OPEN] 启动时输入延迟高达 30 秒** (#3543)
    - **链接**: [github/copilot-cli Issue #3543](https://github.com/github/copilot-cli/issues/3543)
    - **摘要**: 当 `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` 指向包含大量文件的目录（如 $HOME）时，启动时进行递归匹配导致界面冻结数十秒。

10. **[OPEN] Plan Mode 被忽略** (#1654)
    - **链接**: [github/copilot-cli Issue #1654](https://github.com/github/copilot-cli/issues/1654)
    - **摘要**: 即使设置了 Plan Mode 和自定义指令，CLI 仍经常忽略并直接生成代码，浪费 Token 且违背用户意图。

## 4. 重要 PR 进展
过去24小时内无 Pull Request 更新。这表明开发团队当前可能正集中于处理近期版本发布的稳定性反馈和 Bug 修复，暂未合并新的功能特性代码。

## 5. 功能需求趋势
- **大上下文窗口支持**: 开发者强烈希望解除 200k Token 的硬性限制，充分利用 Claude Opus 等模型的长上下文能力 (#3355, #3539)。
- **MCP 集成体验优化**: 社区对 MCP Server 的配置同步 (#39)、安全管控 (#3207) 及减少其对 Token 的消耗有迫切需求。
- **Agent 工作流控制**: 用户要求更精细的 Agent 行为控制，包括模型选择权重的保持 (#3565)、Plan Mode 的强制执行 (#1654) 以及权限管理的细节 (#223, #3042)。

## 6. 开发者关注点
- **稳定性回归**: 过去24小时内，"Duplicate item" 相关的 WebSocket 错误成为社区反馈最集中的故障，严重影响了 Agent 工具调用的连续性。
- **Token 消耗与成本**: 无论是系统工具对上下文的占用 (#3539)，还是模型选择对 Token 计费的影响 (#3527)，都显示出开发者对 Token 经济性的高度敏感。
- **企业级合规**: 细粒度 Token 权限 (#223) 和私有 MCP 注册表绕过问题 (#3207) 表明，随着 Copilot CLI 在企业中的普及，安全合规已成为核心诉求。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-05-29)

## 1. 今日速览
今日 Kimi Code CLI 社区活跃度较高，核心开发团队正积极推进 **v1.46.0 版本**的发布准备工作（PR #2391）。社区焦点主要集中在 **IDE 集成体验（特别是 Zed 编辑器）** 以及 **项目重构后的维护策略** 上，有用户对抛弃旧版 CLI 表示担忧。此外，针对 ACP 协议的实现完善和大 Context 下的网络超时问题成为技术反馈的热点。

## 2. 版本发布
过去24小时内无正式 Release 发布。但根据 PR #2391 显示，团队正在准备发布 **v1.46.0** 版本。

## 3. 社区热点 Issues

1.  **[争议] 重构导致社区分裂担忧**
    *   **链接**: [#2381](https://github.com/MoonshotAI/kimi-cli/issues/2381)
    *   **简评**: 作者质疑为何抛弃旧版 `kimi-cli` 重做新版，认为这伤害了将其作为生产力工具的用户的信任。这反映了社区对项目长期稳定性和维护策略的强烈关注。

2.  **[兼容性] 不支持递归加载嵌套 Skill 目录**
    *   **链接**: [#1894](https://github.com/MoonshotAI/kimi-cli/issues/1894)
    *   **简评**: Kimi CLI 无法像 Codex 那样递归识别 `.agents/skills/` 下的嵌套目录，导致部分高级配置在 Kimi 中失效。这是与竞品对齐的重要功能请求。

3.  **[性能] 大 Context 请求频繁 ConnectTimeout**
    *   **链接**: [#2384](https://github.com/MoonshotAI/kimi-cli/issues/2384)
    *   **简评**: 当 Context 超过 120k token 时，请求频繁超时，且 `httpx` 的 `connect_timeout` 目前不可配置，严重影响长会话体验。

4.  **[Bug] Zed 编辑器中查找文件陷入死循环**
    *   **链接**: [#2385](https://github.com/MoonshotAI/kimi-cli/issues/2385)
    *   **简评**: 集成 Zed 编辑器使用时，文件搜索功能会触发死循环，直接影响 IDE 集成的工作流。

5.  **[Bug] `kimi export` 在 Context 压缩时崩溃**
    *   **链接**: [#2396](https://github.com/MoonshotAI/kimi-cli/issues/2396)
    *   **简评**: 在会话进行 Context Compaction 时执行导出操作，会因 API 拒绝空文本内容而报错 400，这是一个典型的边缘情况崩溃 Bug。

6.  **[功能缺失] ACP 协议未上报 Token 使用量**
    *   **链接**: [#2394](https://github.com/MoonshotAI/kimi-cli/issues/2394)
    *   **简评**: 作为 ACP Server 运行时，Kimi 未向客户端返回 Token 消耗统计，导致宿主应用无法监控成本或用量。

7.  **[Bug] Zed 无法查询历史对话 (session/list 未实现)**
    *   **链接**: [#2127](https://github.com/MoonshotAI/kimi-cli/issues/2127)
    *   **简评**: ACP 协议部分方法未实现，导致 Zed 重启后无法加载历史记录，降低了 IDE 集成的可用性。

8.  **[已解决] 终端退出挂起及 MCP 连接泄漏**
    *   **链接**: [#1984](https://github.com/MoonshotAI/kimi-cli/issues/1984)
    *   **简评**: 长会话后退出导致终端无响应和防火墙报警的问题已在今日通过 PR #1985 修复，提升了程序退出的健壮性。

## 4. 重要 PR 进展

1.  **[版本] 发布 v1.46.0**
    *   **链接**: [#2391](https://github.com/MoonshotAI/kimi-cli/pull/2391)
    *   **内容**: 将 `kimi-cli` 版本号升级至 1.46.0，同步更新了发布说明和依赖包装器。

2.  **[修复] 过滤空文本部分以解决 API 400 错误**
    *   **链接**: [#2395](https://github.com/MoonshotAI/kimi-cli/pull/2395)
    *   **内容**: 针对 Issue #2396，在 Context Compaction 过程中过滤掉空的 TextPart，防止 API 报错。

3.  **[修复] 防止终端退出挂起并正确关闭 MCP 连接**
    *   **链接**: [#1985](https://github.com/MoonshotAI/kimi-cli/pull/1985)
    *   **内容**: 解决了退出时 TTY 阻塞和孤立 MCP 连接的问题，确保程序能干净利落地退出。

4.  **[修复] ACP Server 加载本地 MCP 配置**
    *   **链接**: [#2047](https://github.com/MoonshotAI/kimi-cli/pull/2047)
    *   **内容**: 修复了在 Zed 等编辑器中运行 `kimi acp` 时无法加载用户本地 `~/.kimi/mcp.json` 工具配置的问题。

5.  **[功能] ACP 会话历史回放**
    *   **链接**: [#2132](https://github.com/MoonshotAI/kimi-cli/pull/2132)
    *   **内容**: 实现了 ACP 运行时的历史持久化，并在加载会话时回放历史事件，解决 Zed 中无法查看历史的问题。

6.  **[功能] API Key 池支持并行 Subagent**
    *   **链接**: [#2369](https://github.com/MoonshotAI/kimi-cli/pull/2369)
    *   **内容**: 引入轮询机制的 API Key 池，支持并行执行子代理，提升并发任务处理能力。

7.  **[修复] 历史回放时修复孤立的 tool_calls**
    *   **链接**: [#2383](https://github.com/MoonshotAI/kimi-cli/pull/2383)
    *   **内容**: 修复了进程被强制终止或崩溃后，持久化上下文中存在孤立 tool_calls 导致的重放错误。

8.  **[修复] 转换不支持的图片格式**
    *   **链接**: [#2382](https://github.com/MoonshotAI/kimi-cli/pull/2382)
    *   **内容**: 自动将 `.ico` 等不支持的格式转换为 PNG，增强多模态文件读取的兼容性。

9.  **[修复] 映射 Undo 操作到 Context Turns**
    *   **链接**: [#2386](https://github.com/MoonshotAI/kimi-cli/pull/2386)
    *   **内容**: 修复了 `/undo` 命令在特定场景下（如本地斜杠命令）截断上下文不准确的问题。

10. **[体验] 更新欢迎链接与样式支持**
    *   **链接**: [#2390](https://github.com/MoonshotAI/kimi-cli/pull/2390)
    *   **内容**: 将欢迎页链接更新为 `kimi.com/code`，并支持富文本链接显示。

## 5. 功能需求趋势

*   **IDE 集成（ACP 协议）完善**：社区高度关注 Kimi CLI 作为后端接入 Zed 等编辑器的体验，要求补全 `session/list`、Token 统计上报等 ACP 协议特性，并解决死循环、配置加载等集成 Bug。
*   **稳定性与容错性**：针对大 Context 场景下的网络超时配置、Session 压缩时的异常数据处理、进程异常退出后的历史回放健壮性，社区提出了较多需求。
*   **配置灵活性**：用户希望能够更灵活地配置网络超时时间，以及像竞品一样支持复杂的 Skill 目录结构。

## 6. 开发者关注点

*   **长期维护承诺**：开发者对工具的“生存寿命”极其敏感，Issue #2381 表明，推翻重来式的重构可能会引发忠实用户的信任危机。
*   **大模型长上下文工程挑战**：在 120k+ token 下，不仅推理压力大，网络连接稳定性也成了瓶颈，开发者迫切需要底层 HTTP 客户端暴露更细粒度的超时配置。
*   **历史记录一致性**：无论是导出、撤销还是回放，开发者对会话状态的持久化和恢复准确性有很高的要求，相关 PR 修复量较大。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-05-29)

## 1. 今日速览
OpenCode 今日发布 **v1.15.12** 版本，重点引入了 OpenAI WebSocket 传输支持以优化响应速度，并增强了 ACP 集成功能。社区热议集中在 GPT 模型响应延迟问题以及 DeepSeek V4 降价后的配额调整需求。此外，多个修复 Windows 平台兼容性和并行处理性能的 PR 值得开发者关注。

## 2. 版本发布
**v1.15.12** 已发布，主要更新如下：
- **核心改进**：
  - ACP 集成现支持通过 `acp-next` 发送提示词、斜杠命令和使用情况更新。
  - 新增 WebSocket 传输支持 OpenAI 响应（需设置 `OPENCODE_EXPERIMENTAL_WEBSOCKETS=true`），有望改善流式响应体验。
- **Bug 修复**：
  - 启用了针对 Anthropic 模型的自适应推理控制。

## 3. 社区热点 Issues

1.  **[OPEN] GPT Models takes too long to respond** (#29079)
    - **关注度**：评论 104 | 👍 48
    - **简述**：用户反馈 GPT 模型（特别是 GPT 5.4）偶尔响应极慢，简单指令也需数分钟。这是目前社区最活跃的反馈，直接关联用户体验。
    - **链接**：[anomalyco/opencode Issue #29079](https://github.com/anomalyco/opencode/issues/29079)

2.  **[OPEN] [FEATURE]: Adjust Go usage limits after DeepSeek V4 Pro price reduction** (#28846)
    - **关注度**：评论 28 | 👍 47
    - **简述**：随着 DeepSeek V4 Pro API 永久降价 75%，用户呼吁 OpenCode 调整 Go 订阅的使用量限制以匹配成本变化。
    - **链接**：[anomalyco/opencode Issue #28846](https://github.com/anomalyco/opencode/issues/28846)

3.  **[OPEN] [FEATURE]: Official OpenCode VS Code extension** (#11176)
    - **关注度**：评论 18 | 👍 91
    - **简述**：高票需求，用户希望推出官方 VS Code 插件，以便在 IDE 内原生运行 OpenCode，替代目前的 CLI 或非官方方案。
    - **链接**：[anomalyco/opencode Issue #11176](https://github.com/anomalyco/opencode/issues/11176)

4.  **[CLOSED] [bug] Build mode stops executing before task is complete** (#7159)
    - **关注度**：评论 25 | 👍 5
    - **简述**：Build 模式下任务随机提前终止的老问题，影响 Playwright 等工具的执行完整性，今日有更新讨论。
    - **链接**：[anomalyco/opencode Issue #7159](https://github.com/anomalyco/opencode/issues/7159)

5.  **[OPEN] reasoning_content is missing when using DeepSeek V4 Flash in thinking** (#29618)
    - **关注度**：评论 11 | 👍 3
    - **简述**：使用 OpenRouter 调用 DeepSeek V4 时，思考模式下的 `reasoning_content` 未回传导致 API 报错，影响模型推理功能。
    - **链接**：[anomalyco/opencode Issue #29618](https://github.com/anomalyco/opencode/issues/29618)

6.  **[CLOSED] [Feature Request] Hotkey switch between "accept" and "approve" mid-session** (#2656)
    - **关注度**：评论 13 | 👍 18
    - **简述**：用户希望在会话中快捷切换 "accept all" 和 "approve edits" 模式，以提高对模型产出不确定时的操作效率。
    - **链接**：[anomalyco/opencode Issue #2656](https://github.com/anomalyco/opencode/issues/2656)

7.  **[OPEN] Desktop version UI display issue** (#29808)
    - **关注度**：评论 4
    - **简述**：Desktop 版本在新布局下，文件树和审查按钮在调整设置后消失，UI 状态管理存在问题。
    - **链接**：[anomalyco/opencode Issue #29808](https://github.com/anomalyco/opencode/issues/29808)

8.  **[OPEN] Qwen 3.5 Plus quota problem on Go subscription** (#23722)
    - **关注度**：评论 4
    - **简述**：订阅用户遇到 Qwen 3.5 Plus 配额错误提示，虽然模型实际可用，但错误提示持续干扰使用。
    - **链接**：[anomalyco/opencode Issue #23722](https://github.com/anomalyco/opencode/issues/23722)

9.  **[OPEN] Shell commands can hang on Windows after process exit** (#29822)
    - **关注度**：评论 2
    - **简述**：Windows 平台下 Shell 命令进程退出后偶发挂起，导致 OpenCode 无法获取结果，影响自动化流程。
    - **链接**：[anomalyco/opencode Issue #29822](https://github.com/anomalyco/opencode/issues/29822)

10. **[OPEN] Desktop chat logs cannot be recovered after being archived** (#29823)
    - **关注度**：评论 3
    - **简述**：移动项目文件夹后，Desktop 端无法自动更新路径引用，导致归档的聊天日志无法恢复。
    - **链接**：[anomalyco/opencode Issue #29823](https://github.com/anomalyco/opencode/issues/29823)

## 4. 重要 PR 进展

1.  **fix(opencode): dispatch subtasks in parallel instead of one at a time** (#29819)
    - **内容**：修复了子任务串行执行的问题，改为并行处理。这将显著提升多子任务场景下的运行效率。
    - **链接**：[anomalyco/opencode PR #29819](https://github.com/anomalyco/opencode/pull/29819)

2.  **fix(opencode): allow pid 0 in Pty.Info for Windows ConPTY** (#29828)
    - **内容**：修复 Windows ConPTY 下 PID 0 导致的崩溃问题（已合并），解决了昨日 v1.15.12 升级依赖后的副作用。
    - **链接**：[anomalyco/opencode PR #29828](https://github.com/anomalyco/opencode/pull/29828)

3.  **feat(TUI): Add inline $skill invocations with prepend + pasteText support** (#29217)
    - **内容**：TUI 界面增强，支持通过 `$` 符号内联调用技能，优化了 Prompt 编辑器的交互体验。
    - **链接**：[anomalyco/opencode PR #29217](https://github.com/anomalyco/opencode/pull/29217)

4.  **fix(opencode): enforce storage path invariants** (#29666)
    - **内容**：统一存储路径格式为正斜杠，修复 Windows 下因路径分隔符不一致导致会话列表加载失败的问题。
    - **链接**：[anomalyco/opencode PR #29666](https://github.com/anomalyco/opencode/pull/29666)

5.  **fix(opencode): enforce read deny rules in glob and grep results** (#29755)
    - **内容**：修复了 `**/.env*` 等拒绝规则在 glob/grep 搜索中失效的 Bug，增强了代码库隐私安全性。
    - **链接**：[anomalyco/opencode PR #29755](https://github.com/anomalyco/opencode/pull/29755)

6.  **fix(opencode): serialize mcp-auth.json writes** (#29820)
    - **内容**：修复并发写入 `mcp-auth.json` 导致文件损坏的问题，提升了认证模块的稳定性。
    - **链接**：[anomalyco/opencode PR #29820](https://github.com/anomalyco/opencode/pull/29820)

7.  **feat(core): add location-scoped config loading** (#29625)
    - **内容**：重构配置加载逻辑，支持全局、项目及 `.opencode` 目录的分层发现，提升了多环境配置的灵活性。
    - **链接**：[anomalyco/opencode PR #29625](https://github.com/anomalyco/opencode/pull/29625)

8.  **fix(session): skip persisting empty text parts** (#29815)
    - **内容**：修复模型直接进行工具调用时产生空文本片段并写入数据库的问题，避免无效数据存储。
    - **链接**：[anomalyco/opencode PR #29815](https://github.com/anomalyco/opencode/pull/29815)

9.  **feat(desktop-app): add menu item to open config file** (#29812)
    - **内容**：在 Desktop 应用菜单中增加直接打开配置文件的入口，提升易用性。
    - **链接**：[anomalyco/opencode PR #29812](https://github.com/anomalyco/opencode/pull/29812)

10. **fix(task): subagent explicit edit:allow overrides parent edit:deny** (#27654)
    - **内容**：修复子代理权限继承问题，确保显式允许编辑的子代理能覆盖父代理的拒绝规则。
    - **链接**：[anomalyco/opencode PR #27654](https://github.com/anomalyco/opencode/pull/27654)

## 5. 功能需求趋势

- **IDE 深度集成**：社区对官方 VS Code 扩展的呼声极高（#11176），希望获得类似 Copilot 的原生编码体验。
- **模型响应性能**：GPT 模型的延迟问题（#29079）引发广泛共鸣，用户急需优化网络传输或推理队列的解决方案。
- **成本与配额感知**：用户对模型价格变动非常敏感（#28846），期望 OpenCode 能及时同步供应商的降价红利到订阅额度中。
- **Desktop 稳定性**：UI 布局错乱、路径引用失效、WSL 连接问题频繁出现，反映出 Desktop 版本仍处于快速迭代和修复期。

## 6. 开发者关注点

- **Windows 平台兼容性**：今日多个 PR 和 Issue 涉及 Windows 路径、ConPTY 进程挂起等问题，Windows 端的稳定性是当前开发重点。
- **自动化与权限控制**：Build 模式中断、权限规则失效（#29755）、子任务权限继承等反馈表明，开发者在自动化工作流中对权限控制的细粒度要求很高。
- **日志与会话管理**：项目迁移后日志丢失、归档恢复困难等问题（#29823）反映了本地数据管理的痛点，开发者需要更灵活的项目迁移支持。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-05-29)

## 1. 今日速览
今日 Qwen Code 发布了 `v0.16.1-nightly` 版本，重点修复了 CLI 启动警告和 IDE 代理请求问题。社区讨论焦点集中在 **Daemon 模式架构重构**（Mode B 路线图）与 **长上下文压缩机制优化** 上，多项核心 PR 提交显示出项目正在向更稳定的服务端架构迈进。此外，关于 IDE 集成登录问题和 SSL 证书故障的 Issue 反响热烈，建议开发团队优先关注。

## 2. 版本发布
- **v0.16.1-nightly.20260529.7bed56b9b**
  - 主要更新：包含 CLI 启动警告显示修复及遥测相关的改进。此次更新为 nightly 构建，主要针对最新的 PR 合并进行了集成验证。

## 3. 社区热点 Issues (Top 10)

1.  **[核心路线图] proposal(serve): Mode B feature-priority roadmap toward v0.16 production-ready (#4175)**
    - **关注度**：评论 41 条
    - **解读**：这是关于 `qwen serve` 后台服务模式走向生产就绪的关键提案。目前 Stage 1 daemon 已合并，社区正在讨论剩余的功能优先级，关系到 Qwen Code 作为后台服务的稳定性和多路复用能力。
    - **链接**：https://github.com/QwenLM/qwen-code/issues/4175

2.  **[Bug] rider无法登录qwen code (#4493)**
    - **关注度**：评论 7 条
    - **解读**：JetBrains Rider 用户反馈 OAuth 登录流程陷入重定向死循环，无法调用阿里云 Token。属于阻断性 Bug，影响 IDE 集成体验。
    - **链接**：https://github.com/QwenLM/qwen-code/issues/4493

3.  **[性能优化] Memory grows unboundedly during long sessions (#2128)**
    - **关注度**：P1 优先级
    - **解读**：长时间运行会话导致内存无限增长（UI History 数组未限制）。这是影响 CLI 长期稳定性的核心痛点，目前仍待解决。
    - **链接**：https://github.com/QwenLM/qwen-code/issues/2128

4.  **[基础设施] [URGENT] SSL Cert Invalid on coder.qwen.ai (#4612)**
    - **状态**：已关闭
    - **解读**：`coder.qwen.ai` 域名出现 SSL 证书链错误，阻断用户开发。该 Issue 反应迅速，目前已修复关闭，但需留意是否彻底解决。
    - **链接**：https://github.com/QwenLM/qwen-code/issues/4612

5.  **[功能请求] API Exponential Backoff & Fallback Retry (#3004)**
    - **关注度**：P1 优先级
    - **解读**：请求引入指数退避和模型降级重试机制，以应对 529 等服务端错误。这是提升 API 调用鲁棒性的关键需求。
    - **链接**：https://github.com/QwenLM/qwen-code/issues/3004

6.  **[体验优化] feat(stats): 增强stats能力，支持跨session的全局用量统计 (#4597)**
    - **解读**：对标 Claude Code，请求增加持久化的用量统计仪表盘。当前 `/stats` 仅内存留存，用户希望看到跨会话的历史数据。
    - **链接**：https://github.com/QwenLM/qwen-code/issues/4597

7.  **[输入法问题] CJK (Chinese/Japanese/Korean) IME composition text appears at wrong position (#3456)**
    - **解读**：中日韩输入法在终端 UI 中的候选词位置显示异常（显示在底部而非光标处）。这是影响中文用户体验的老牌问题。
    - **链接**：https://github.com/QwenLM/qwen-code/issues/3456

8.  **[本地模型] Getting [API Error] when trying to run a local model (#4609)**
    - **解读**：使用 Ollama 运行本地模型时出现 `DOMException` 错误。随着本地部署需求增加，对 Ollama 集成的兼容性需加强。
    - **链接**：https://github.com/QwenLM/qwen-code/issues/4609

9.  **[架构优化] feat: comprehensive hot-reload system (#3696)**
    - **解读**：请求实现 Skills、MCP 和配置的热重载，避免修改配置后重启会话。属于提升开发体验的重要功能。
    - **链接**：https://github.com/QwenLM/qwen-code/issues/3696

10. **[会话管理] `/clear` should not switch to a new session ID (#4593)**
    - **解读**：当前 `/clear` 会创建新会话 ID，导致基于会话的日志追踪中断。用户期望仅清空内容而保持 ID 不变。
    - **链接**：https://github.com/QwenLM/qwen-code/issues/4593

## 4. 重要 PR 进展 (Top 10)

1.  **refactor(core): replace tail-preservation compaction with summary + restoration attachments (#4599)**
    - **内容**：重构历史记录压缩机制。放弃简单的“保留尾部30%”策略，转向 Claude Code 风格的“全量摘要 + 恢复附件”模型，旨在提升长上下文下的记忆连续性。
    - **链接**：https://github.com/QwenLM/qwen-code/pull/4599

2.  **feat(daemon): keep model & approval-mode state consistent across clients (#4613)**
    - **内容**：修复多客户端（Chat/IDE/Terminal）共享同一 Daemon Session 时，模型选择和审批模式状态不同步的问题。
    - **链接**：https://github.com/QwenLM/qwen-code/pull/4613

3.  **refactor(serve): extract DaemonWorkspaceService from AcpSessionBridge (#4563)**
    - **内容**：Daemon 架构重大重构，将工作区能力从 Session Bridge 中剥离，独立为 `DaemonWorkspaceService`，为后续多服务架构铺路。
    - **链接**：https://github.com/QwenLM/qwen-code/pull/4563

4.  **feat(desktop): Add desktop app package with Qwen ACP SDK integration (#3778)**
    - **内容**：正在推进桌面端应用的封装，集成 ACP SDK，意味着 Qwen Code 可能即将推出独立的桌面客户端。
    - **链接**：https://github.com/QwenLM/qwen-code/pull/3778

5.  **fix(core): use undici fetch for IDE proxy requests (#4607)**
    - **内容**：修复 IDE 场景下的代理请求问题，统一使用 `undici` fetch，解决部分网络环境下的连接异常。
    - **链接**：https://github.com/QwenLM/qwen-code/pull/4607

6.  **feat(serve): runtime MCP server add/remove (#4552)**
    - **内容**：支持运行时动态添加/移除 MCP Server，无需重启 Daemon，显著提升 MCP 扩展的灵活性。
    - **链接**：https://github.com/QwenLM/qwen-code/pull/4552

7.  **feat(ci): add PR review workflow using bundled /review skill (#4549)**
    - **内容**：引入自动化代码审查工作流，利用内置的 `/review` 技能自动审查 PR，提升社区协作效率。
    - **链接**：https://github.com/QwenLM/qwen-code/pull/4549

8.  **feat(web-shell): add /delete command with batch delete support (#4603)**
    - **内容**：Web Shell 增加 `/delete` 命令，支持批量删除会话数据文件，方便管理本地存储。
    - **链接**：https://github.com/QwenLM/qwen-code/pull/4603

9.  **feat(telemetry): add tool spans and session.id to daemon/ACP path (#4608)**
    - **内容**：增强 Daemon 模式的遥测能力，添加工具调用链路追踪和 Session ID，便于监控和调试。
    - **链接**：https://github.com/QwenLM/qwen-code/pull/4608

10. **fix(cli): surface startup warnings on stderr before TUI render (#4461)**
    - **内容**：改进 CLI 启动流程，确保在渲染 TUI 界面前将警告信息输出到 stderr，避免错误信息被界面遮挡。
    - **链接**：https://github.com/QwenLM/qwen-code/pull/4461

## 5. 功能需求趋势
- **Daemon 架构与服务化**：近期大量 PR（#4563, #4613, #4606）聚焦于 `qwen serve` 的解耦与稳定性，表明 Qwen Code 正加速向“Client-Server”架构转型，以支持多端同步和云端部署。
- **上下文管理智能化**：社区对内存泄漏（#2128）和压缩策略（#4599）的讨论热度不减，显示出用户对长会话记忆能力的强烈需求，传统的“截断”策略正被“摘要+挂载”模式取代。
- **多端与本地化体验**：桌面端应用（#3778）、本地模型支持（#4609）以及 IDE 集成（#4607）的活跃度表明，Qwen Code 正致力于打通 VSCode、JetBrains 及本地终端的全场景体验。

## 6. 开发者关注点
- **认证与连通性**：Rider IDE 登录失败（#4493）和 SSL 证书错误（#4612）是今日开发者反馈最集中的阻断性问题，建议优先排查 OAuth 流程与证书链配置。
- **长时运行稳定性**：内存溢出问题依旧悬而未决，对于需要长时间运行 Agent 任务的开发者来说，这是目前最大的稳定性隐患。
- **输入法体验**：CJK 输入法定位问题持续存在，影响了中文用户的终端交互体验，期待 TUI 渲染层面的优化。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报
**日期**: 2026-05-29  
**数据来源**: github.com/Hmbown/DeepSeek-TUI

## 1. 今日速览
今日社区活跃度较高，核心关注点集中在**多模型提供商支持**与**TUI 交互体验优化**。功能层面，开发者社区正在积极通过 PR 扩展对第三方 API（如 Atlas Cloud、SiliconFlow）的支持，以解决官方 API 单一性问题。同时，针对中文输入法适配、Shell 工具权限控制等本地化及安全痛点，社区提交了重要修复与增强方案。

## 2. 版本发布
过去 24 小时内无新版本 Release 发布。

## 3. 社区热点 Issues (Top 10)

1.  **[Feature] 支持自定义 DeepSeek 兼容 API 提供商** [#2247](https://github.com/Hmbown/CodeWhale/issues/2247)
    *   **关注度**: 高
    *   **理由**: 目前 CodeWhale 仅支持官方 API，用户强烈希望能接入本地部署或第三方兼容服务。这是社区最迫切的功能需求之一，直接关系到工具的适用范围。

2.  **[Bug] Docker 拉取运行乱码/崩溃** [#1615](https://github.com/Hmbown/CodeWhale/issues/1615)
    *   **关注度**: 极高 (评论 191 条)
    *   **理由**: 虽然该 Issue 已关闭，但历史评论量巨大，反映了 Docker 环境下的兼容性曾是（或仍是）用户最大的痛点之一，涉及部署稳定性问题。

3.  **[Bug] exec_shell 模式可用性不一致** [#2328](https://github.com/Hmbown/CodeWhale/issues/2328)
    *   **关注度**: 中
    *   **理由**: 用户发现 `exec_shell` 在 Agent 模式下受限，但在 YOLO 模式下可用，且文档未明确说明。这触及了工具权限控制与模式定义的模糊地带，影响自动化任务配置。

4.  **[Bug] 未适配中文输入法** [#2323](https://github.com/Hmbown/CodeWhale/issues/2323)
    *   **关注度**: 中
    *   **理由**: 在 TUI 环境中，中文输入法的候选拼音会错误显示在输入框或与界面冲突，严重影响中文用户的交互体验。

5.  **[Enhancement] 工具搜索默认结果数过少** [#2339](https://github.com/Hmbown/CodeWhale/issues/2339)
    *   **关注度**: 低
    *   **理由**: 用户指出 `tool_search` 默认仅返回 5 条结果，导致在多 MCP 服务器场景下无法发现全部相关工具。建议提升至 20 条，属于提升易用性的关键细节。

6.  **[Bug] Agent 实时输出中文乱码** [#1675](https://github.com/Hmbown/CodeWhale/issues/1675)
    *   **关注度**: 中
    *   **理由**: 在 Agent 执行任务时，输出的中文内容显示为乱码，影响任务监控和结果阅读，是本地化体验的重要缺陷。

7.  **[Enhancement] 支持 GLIBC_2.38** [#2299](https://github.com/Hmbown/CodeWhale/issues/2299)
    *   **关注度**: 低
    *   **理由**: 用户在较旧的 Linux 发行版（如 Debian Deepin）上运行时遇到 GLIBC 版本不兼容问题，限制了工具在部分旧环境下的部署。

8.  **[Bug] 消息无法以 "/" 开头** [#2310](https://github.com/Hmbown/CodeWhale/issues/2310)
    *   **关注度**: 低
    *   **理由**: TUI 将所有 `/` 开头的输入视为命令，缺乏转义机制，导致用户无法发送内容本身包含斜杠的代码或文本。

9.  **[Bug] allow_shell 安全策略不一致** [#2303](https://github.com/Hmbown/CodeWhale/issues/2303)
    *   **关注度**: 低
    *   **理由**: 安全门禁 `allow_shell` 阻止了 `exec_shell` 但未阻止 `task_shell_start`，导致安全策略存在绕过风险且逻辑令人困惑。

10. **[Enhancement] 支持输出文件点击预览** [#2342](https://github.com/Hmbown/CodeWhale/issues/2342)
    *   **关注度**: 新增
    *   **理由**: 用户希望在对话输出的文件路径支持点击预览，以减少在编辑器和终端间切换的成本，提升工作流效率。

## 4. 重要 PR 进展 (Top 10)

1.  **feat: integrate Atlas Cloud provider** [#2343](https://github.com/Hmbown/CodeWhale/pull/2343)
    *   **内容**: 集成 Atlas Cloud 作为新的提供商，扩展了模型支持的多样性，响应了社区对第三方 API 支持的呼声。

2.  **fix(tui): route IME-committed Chinese characters** [#2330](https://github.com/Hmbown/CodeWhale/pull/2330)
    *   **内容**: 修复中文输入法（IME）在 TUI 中的兼容性问题，解决了输入字符被错误缓冲或不显示的 Bug，显著提升中文用户体验。

3.  **feat: whale-size route taxonomy for model picker** [#2338](https://github.com/Hmbown/CodeWhale/pull/2338)
    *   **内容**: 重构模型选择器，引入“Whale-size”分类法，按推理深度对模型进行分类展示，优化模型选择的 UI 体验。

4.  **fix(tools): raise tool search default results** [#2344](https://github.com/Hmbown/CodeWhale/pull/2344)
    *   **内容**: 将工具搜索的默认返回结果上限从 5 提升至 20，直接解决了 Issue #2339 中提到的工具发现困难问题。

5.  **feat: add /cache stats** [#2336](https://github.com/Hmbown/CodeWhale/pull/2336)
    *   **内容**: 新增 `/cache stats` 命令，用于诊断前缀缓存稳定性及命中率，增强了系统的可观测性，帮助开发者调试性能问题。

6.  **fix(tui): treat slash-space input as message text** [#2340](https://github.com/Hmbown/CodeWhale/pull/2340)
    *   **内容**: 允许用户输入 `/ ` (斜杠加空格) 开头的文本作为普通消息发送，解决了无法发送以斜杠开头的普通文本的问题。

7.  **feat(hooks): allow message_submit to transform text** [#2318](https://github.com/Hmbown/CodeWhale/pull/2318)
    *   **内容**: 增强钩子系统，允许 `message_submit` 钩子修改提交的文本内容，为自动化处理输入（如自动翻译、格式化）提供了可能。

8.  **fix(tui): replace standalone compacting label with animation** [#2302](https://github.com/Hmbown/CodeWhale/pull/2302)
    *   **内容**: 优化 Compacting 阶段的 UI 反馈，将静态文本替换为带动画的工作标签，解决了用户在长时间压缩操作时误以为程序卡死的体验问题。

9.  **fix(tui): skip hidden worktrees in workspace discovery** [#2329](https://github.com/Hmbown/CodeWhale/pull/2329)
    *   **内容**: 在工作区发现逻辑中跳过隐藏的 git worktrees，显著减少了子代理在发布工作中的磁盘 I/O 和内存占用，提升性能。

10. **[Codex] Add SiliconFlow provider support** [#1868](https://github.com/Hmbown/CodeWhale/pull/1868)
    *   **内容**: 社区贡献的 SiliconFlow 提供商支持，进一步扩展了模型生态，符合社区多模型支持的主流趋势。

## 5. 功能需求趋势

*   **多模型与第三方 API 支持**: 社区正积极推动 CodeWhale 从单一 DeepSeek 官方客户端向通用 AI 编程终端转变。支持自定义 API Endpoint、SiliconFlow、Atlas Cloud 以及 GLM-5/Qwen 等模型的需求日益强烈。
*   **交互细节打磨**: 用户对 TUI 的细节体验要求提高，包括中文输入法适配、右键菜单汉化、Git 分支显示、文件预览链接等，显示出工具正从“能用”向“好用”过渡。
*   **安全与权限控制**: 关于 `exec_shell` 和 `task_shell` 的权限混淆问题表明，随着 Agent 自主能力的增强，用户对工具调用的安全边界和清晰度有了更高要求。

## 6. 开发者关注点

*   **本地化与国际化体验**: 开发者反馈集中在中文输入乱码、Agent 输出乱码以及界面语言混杂等问题上，说明非英语环境的适配仍有较大改进空间。
*   **TUI 性能与稳定性**: 开发者关注在复杂工作区（如包含大量 worktrees）下的性能瓶颈，以及 Docker 环境下的运行稳定性。
*   **文档与状态一致性**: 开发者指出实际配置目录 (`~/.codewhale`) 与官方文档不一致的问题，反映出项目重命名或重构后的文档维护滞后问题。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*