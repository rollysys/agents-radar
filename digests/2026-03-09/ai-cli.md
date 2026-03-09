# AI CLI 工具社区动态日报 2026-03-09

> 生成时间: 2026-03-09 02:28 UTC | 覆盖工具: 6 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告

**报告周期：2026-03-09**

---

## 1. 生态全景

当前 AI CLI 工具正处于**多极竞争与功能分化阶段**。头部玩家（Claude Code、OpenAI Codex）已形成稳定迭代节奏，社区聚焦于体验精耕与平台兼容；新进入者（Gemini CLI、Qwen Code）则通过差异化功能（语音模式、多代理协作）寻求突破；垂直玩家（OpenCode、Kimi Code）在 IDE 集成与本地化场景深耕。整体呈现“基础能力趋同、生态增值分化”的格局。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issues | 今日 PR | Release | 社区活跃度 |
|------|-------------|---------|---------|-----------|
| **Claude Code** | 50 | 5 | 无 | 高 |
| **OpenAI Codex** | 50 | 10+ | 3 个版本 | 高 |
| **Gemini CLI** | 10 (热点) | 10 | 无 | 中 |
| **Kimi Code CLI** | 5 | 3 (依赖更新) | 无 | 中低 |
| **OpenCode** | 10+ (热点) | 10 | v1.2.22 | 中高 |
| **Qwen Code** | 12 | 30 | v0.12.0-preview.1 | 中高 |

> 注：Issue/PR 数量为社区披露数据，OpenCode/Qwen Code 因披露机制差异仅列示热点或明确数量项。

**关键发现**：Qwen Code PR 数量最活跃（30条），体现开发迭代强度高；Claude Code 与 OpenAI Codex Issue 数量持平，但后者有版本发布产出，节奏更快。

---

## 3. 共同关注的功能方向

| 功能方向 | 涉及工具 | 具体诉求 |
|----------|----------|----------|
| **跨平台/系统兼容性** | Claude Code、OpenAI Codex、OpenCode、Qwen Code | Windows 内存/路径、macOS Intel、WSL、ARM 等多平台支持 |
| **Token/成本优化** | Claude Code (#4556)、OpenCode (#4986)、OpenAI Codex | 代码库语义索引、本地 Relevance Index，减少 API 消耗 |
| **IDE 深度集成** | OpenAI Codex、Qwen Code、Claude Code、Kimi Code | VSCode 侧边栏、@提及优化、扩展功能增强 |
| **自动化/可扩展性** | OpenAI Codex (#2109)、Qwen Code (#2203)、Claude Code | Event Hooks、事件钩子系统、插件机制 |
| **认证/权限管理** | Claude Code (#1757)、OpenAI Codex | 登录流程优化、权限请求工具、refresh token 稳定性 |

**解读**：跨平台兼容与 Token 成本是全行业共识痛点，自动化 hooks 能力正在成为标配功能。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|----------|----------|----------|
| **Claude Code** | 企业级稳定性、插件生态、MCP 扩展 | 大型企业、深度开发者 | 强调认证安全、Windows 兼容、Token 优化 |
| **OpenAI Codex** | TUI 交互创新、Event Hooks、模型选择器 | 追求生产力的专业开发者 | 快速迭代、Alpha/Beta 双通道、IDE 深度绑定 |
| **Gemini CLI** | 语音模式（Voice Mode）、远程代理基础设施 | 探索多模态交互、远程协作场景 | 语音优先、并行化性能优化、远程工作流 |
| **Kimi Code CLI** | VSCode 集成优化、项目级配置 | 中文开发者、Moonshot 生态用户 | 轻量级、配置灵活性、IDE 辅助 |
| **OpenCode** | 本地模型集成（Ollama）、TUI 增强、symlink 兼容 | 本地化部署偏好者、跨平台用户 | 跨平台 shell 替代、语义搜索、本地优先 |
| **Qwen Code** | 多代理协作、事件钩子、VSCode 侧边栏 | 中文开发者、阿里云生态用户 | 基于 Gemini CLI 定制、事件驱动架构 |

**关键差异**：OpenAI Codex 与 Claude Code 聚焦通用企业市场，Gemini CLI 押注语音交互未来，Qwen Code 与 Kimi Code 侧重中文生态与阿里系整合，OpenCode 则走本地化轻量路线。

---

## 5. 社区热度与成熟度

### 热度梯队

| 梯队 | 工具 | 评估依据 |
|------|------|----------|
| **第一梯队** | Claude Code、OpenAI Codex | Issue 基数大（50+）、讨论活跃、多版本持续输出 |
| **第二梯队** | Qwen Code、OpenCode | PR 活跃（30、10+）、功能迭代快、有明确版本规划 |
| **第三梯队** | Gemini CLI | PR 数量可观但 Issue 讨论集中于少数热点，功能尚未完全成熟 |
| **第四梯队** | Kimi Code CLI | 社区声量较低，以依赖更新为主，活跃度有限 |

### 成熟度判断

- **成熟期**：Claude Code（Issue #1757 达 60 条评论，社区治理完善）、OpenAI Codex（多版本并行、Alpha/Beta 通道稳定）
- **成长期**：Qwen Code（功能快速叠加，多代理协作等大工程推进中）、OpenCode（v1.2.22 发布，symlink 等工程问题收敛中）
- **探索期**：Gemini CLI（语音模式尚在 scaffold 阶段，多 PR 并行但功能碎片化）
- **初始期**：Kimi Code CLI（社区规模小，Issue/PR 以 bugfix 为主）

---

## 6. 值得关注的趋势信号

### 行业趋势

1. **语音交互正在成为下一代 CLI 标配**
   - Gemini CLI 投入大量 PR 构建 Voice Mode 完整链路（scaffold → 帮助 → 建议 → 可视化 → TTS 适配）
   - 预计 2026 下半年语音交互将从“亮点功能”演变为“基础能力”

2. **Event Hooks / 事件钩子进入主流视野**
   - OpenAI Codex (#2109) 475 👍、Qwen Code 实现 10 个核心钩子
   - 自动化工作流需求明确，插件化生态基础正在夯实

3. **本地模型与语义索引需求爆发**
   - OpenCode 自动检测 Ollama 模型、Codex 5.3 需求 121 👍
   - 开发者对“离线优先”“成本可控”的本地化方案需求强烈

4. **跨平台兼容性从“加分项”变为“准入门槛”**
   - Windows（Claude Code 内存/路径问题）、macOS Intel（Codex 105 评论）、ARM（Claude Code #30864）、symlink（OpenCode 多 Issue）
   - 多平台测试与兼容将成为社区投诉高发区

### 开发者参考建议

| 角色 | 关注重点 | 行动建议 |
|------|----------|----------|
| **企业决策者** | 认证稳定性、Token 成本、跨平台兼容 | 优先评估 Claude Code（稳定性）或 OpenAI Codex（生产力） |
| **工具链开发者** | Event Hooks、插件生态、MCP 规范 | 关注 Claude Code MCP 服务器配置、Qwen Code 事件钩子实现 |
| **AI 应用开发者** | 语音交互、本地模型集成、VSCode 深度集成 | 跟进 Gemini CLI 语音模式成熟度、OpenCode Ollama 集成 |
| **中文生态用户** | 中文支持、阿里系整合 | 关注 Qwen Code 多代理协作、Kimi Code 配置灵活性 |

---

**报告说明**：本分析基于 2026-03-09 各工具 GitHub 公开数据，数据完整性受限于各项目披露策略，供参考而非决策唯一依据。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（2026-03-09）

---

## 1. 热门 Skills 排行

基于 PR 内容深度、创建时间及社区反馈，以下是当前最受关注的 Skills：

| # | PR | 功能概述 | 讨论热点 | 状态 |
|---|-----|---------|---------|------|
| 1 | **[#514 document-typography](https://github.com/anthropics/skills/pull/514)** | 解决 AI 生成文档的排版问题：孤儿行、寡妇段落、编号错位 | 几乎所有 Claude 生成的文档都受影响，需求广泛 | OPEN |
| 2 | **[#210 frontend-design](https://github.com/anthropics/skills/pull/210)** | 改进前端设计技能的清晰度和可执行性 | 确保指令在单次对话内可执行，提升可操作性 | OPEN |
| 3 | **[#83 skill-quality/security-analyzer](https://github.com/anthropics/skills/pull/83)** | 添加元技能：技能质量分析 + 安全分析 | 5 维度质量评估框架，安全风险检测 | OPEN |
| 4 | **[#147 codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | 代码库清理和文档审计，识别孤儿代码、未使用文件 | 10 步工作流，生成 CODEBASE-STATUS.md | OPEN |
| 5 | **[#154 shodh-memory](https://github.com/anthropics/skills/pull/154)** | AI 代理持久记忆系统，跨对话保持上下文 | `proactive_context` 调用时机、记忆结构设计 | OPEN |
| 6 | **[#444 AURELION skill suite](https://github.com/anthropics/skills/pull/444)** | AURELION 认知+记忆框架：kernel/advisor/agent/memory | 5 层认知框架，专业知识管理 | OPEN |
| 7 | **[#288 8 new skills](https://github.com/anthropics/skills/pull/288)** | 批量新增：tutorial-builder、quiz-generator、a11y-auditor、changelog-curator、data-storytelling 等 | 覆盖教程生成、无障碍审计、变更日志、数据叙事 | OPEN |
| 8 | **[#368 flutter-theme-factory](https://github.com/anthropics/skills/pull/368)** | Flutter 主题工厂，12 个预建主题 + Google Fonts 配对 | 主题系统完整度高，light/dark 双模式 | OPEN |

---

## 2. 社区需求趋势

从 Issues 中提炼的核心诉求：

| 方向 | 具体需求 | 相关 Issue |
|------|---------|------------|
| **🔐 安全治理** | AI 代理系统的安全模式：策略执行、威胁检测、信任评分、审计追踪 | [#412](https://github.com/anthropics/skills/issues/412) |
| **⚙️ 技能质量提升** | skill-creator 应遵循最佳实践，改进文档风格和 token 效率 | [#202](https://github.com/anthropics/skills/issues/202) |
| **🔌 集成与兼容性** | Skills 作为 MCP 暴露 API；与 AWS Bedrock 集成 | [#16](https://github.com/anthropics/skills/issues/16), [#29](https://github.com/anthropics/skills/issues/29) |
| **🐛 Bug 修复** | 技能消失、API 500 错误、skills 触发率为 0 等稳定性问题 | [#62](https://github.com/anthropics/skills/issues/62), [#403](https://github.com/anthropics/skills/issues/403), [#556](https://github.com/anthropics/skills/issues/556) |
| **📦 插件冲突** | document-skills 与 example-skills 内容重复 | [#189](https://github.com/anthropics/skills/issues/189) |

---

## 3. 高潜力待合并 Skills

以下 PR 评论/活动较活跃，或解决关键痛点，预计近期可能合并：

| PR | 亮点 | 活跃度 |
|----|------|--------|
| **[#509 CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** | 解决社区健康指标缺口（当前仅 25%），贡献指南是关键补全 | 新建，官方支持 |
| **[#284 skill-creator UTF-8 fix](https://github.com/anthropics/skills/pull/284)** | 修复跨平台编码问题，提升稳定性 | 小型修复 |
| **[#363 feature-dev workflow fix](https://github.com/anthropics/skills/pull/363)** | 修复 TodoWrite 覆盖导致 Phase 6/7 跳过的问题 | 针对性 bugfix |
| **[#532 skill-creator API key issue](https://github.com/anthropics/skills/issues/532)** | 企业/SSO 用户无法使用描述优化功能（需解决） | Issue 活跃 |

---

## 4. Skills 生态洞察

> **一句话总结**：当前社区最集中的诉求是 **「提升 Skills 质量与安全性」**——从质量分析工具、安全治理框架，到 skill-creator 最佳实践，再到企业级兼容性修复，社区正在推动 Skills 从「可用」走向「可信」与「专业」。

---

*报告生成时间：2026-03-09 | 数据来源：github.com/anthropics/skills*

---

# Claude Code 社区动态日报 | 2026-03-09

---

## 今日速览

今日 Claude Code 社区热度较高，共产生 50 条活跃 Issue 和 5 条 PR 更新。**认证登录问题**持续成为社区焦点（Issue #1757 累计 60 条评论），Windows 平台的多个问题（内存占用、路径访问、API 限流）引发广泛讨论。社区提交了 2 个新插件增强功能。

---

## 版本发布

**无新版本发布**

过去 24 小时内暂无 Release 更新。

---

## 社区热点 Issues

| # | 标题 | 关键信息 | 重要性 |
|---|------|---------|--------|
| **#1757** | **[BUG] Claude code requires users to constantly login** | 用户需每天通过网页认证，频率过高。60 评论、43 👍，热度最高 | 🔥 认证流程繁琐影响日常使用 |
| **#22277** | **Claude Code Web/Mobile: "Repository or branches not found" — persistent 404 on git_proxy endpoint** | 自 1 月 20 日起 Web/Mobile 端持续 404 错误 | 🔥 影响 Web 端核心功能 |
| **#895** | **Error: InputValidationError: Write tool missing `content` parameter** | Write 工具偶发缺少 content 参数 | ⚠️ 偶发但影响文件操作 |
| **#29583** | **[BUG] Cowork: Cannot use folders outside home directory on Windows (secondary drive)** | Windows 副盘符目录无法在 Cowork 中访问 | 🔥 Windows 文件系统兼容性问题 |
| **#29579** | **[BUG] API Error: Rate limit reached despite Claude Max subscription and only 16% usage** | 订阅用户仍遭遇限流，实际使用仅 16% | 🔥 付费用户权益问题 |
| **#4556** | **Feature request: Add codebase indexing** | 建议添加代码库索引功能以节省 Token 消耗 | 💡 50 👍 高需求功能建议 |
| **#24840** | **Extreme memory consumption on Windows (13GB RSS, 47GB commit) with Bun Canary** | Windows 内存占用达 13GB RSS、47GB 虚拟内存 | 🔥 严重性能问题 |
| **#30864** | **cowork for ARM processor** | 请求 ARM 处理器支持 | 💡 平台扩展需求 |
| **#26259** | **Desktop Extension MCP servers not passed to Cowork VM** | MCP 服务器未传递至 Cowork VM | ⚠️ 扩展功能失效 |
| **#15199** | **[BUG] CLI output formatting artifacts break copy/paste** | CLI 输出格式导致复制问题，浪费 Token 清理 | ⚠️ 34 👍 影响日常工作流 |

> 🔥 = 高优先级 / 💡 = 功能建议 / ⚠️ = 问题修复

---

## 重要 PR 进展

| # | 标题 | 内容摘要 |
|---|------|---------|
| **#32278** | **Add i18n-spinner-tips plugin** | 新增国际化旋转提示插件，支持 8 种语言（中、日、韩、法、西、德、葡、英）显示双语开发提示 |
| **#32142** | **Add usage transparency plugin** | 新增配额透明度插件，帮助用户诊断限流、配额耗尽、订阅冲突等问题 |
| **#32250** | **Add iterative PR workflow to implementation phase** | 将实现阶段拆分为多个可审查的增量，引入 PR 创建与用户确认机制 |
| **#32136** | **Add BrewLab concept document** | 新增 BrewLab 精品咖啡冲泡应用的概念文档 |
| **#32094** | **Add swarm-dev orchestration plugin** (CLOSED) | 新增 swarm-dev 编排插件，包含 5 个专业代理和研究→构建→验证工作流 |

---

## 功能需求趋势

从 Issues 中提炼出以下社区关注方向：

| 方向 | 相关 Issue | 热度 |
|------|-----------|------|
| **认证/授权优化** | #1757、#29579、#29579 | 🔥🔥🔥 |
| **Windows 平台兼容性** | #29583、#24840、#32277、#32268 | 🔥🔥 |
| **Token/成本优化** | #4556、#15199 | 🔥🔥 |
| **Cowork/VM 功能增强** | #29583、#30864、#26259 | 🔥 |
| **沙箱/安全** | #32275、#31804、#32285 | 🔥 |
| **多标签页协调** | #32292、#32290 | 新兴需求 |

---

## 开发者关注点

1. **认证疲劳**：用户对每日需要重新登录 Web 认证强烈不满，呼吁改善认证流程
2. **Windows 平台问题集中**：内存占用、路径访问、API 限流等多维度问题影响用户体验
3. **成本敏感**：代码索引功能需求强烈，开发者希望通过本地索引减少 Token 消耗
4. **MCP 生态**：MCP 服务器配置、插件市场预注册等问题反映开发者对扩展性的期待
5. **输出格式**：CLI 格式化问题导致复制粘贴需要额外清理，浪费开发者时间

---

> 本日报基于 GitHub `anthropics/claude-code` 仓库公开数据生成 | 2026-03-09

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-03-09)

## 今日速览

今日 Codex 社区继续保持活跃，共发布 3 个新版本（包括 v0.112.0 正式版），社区反馈的 50 条 Issues 中 macOS Intel 支持和 Event Hooks 仍是焦点。开发团队在 TUI 交互体验和权限管理方面有多个重要 PR 推进。

---

## 版本发布

### v0.112.0 正式版
**更新亮点：**
- **@plugin 提及功能**：用户可在对话中直接引用插件，自动关联其 MCP/app/skill 上下文
- **模型选择器更新**：TUI 选择流程中新增最新模型目录变更展示

🔗 https://github.com/openai/codex/releases/tag/rust-v0.112.0

### 其他版本
- **rust-v0.113.0-alpha.1**：alpha 测试版
- **rust-v0.112.0-alpha.13**：alpha 测试版

🔗 https://github.com/openai/codex/releases

---

## 社区热点 Issues

| # | Issue | 关键点 | 热度 |
|---|-------|--------|------|
| 1 | **[macOS Intel (x86_64) 支持](https://github.com/openai/codex/issues/10410)** | 请求桌面应用支持 Intel Mac 或提供通用二进制，105 条评论，135 👍 | 🔥🔥🔥 |
| 2 | **[Event Hooks 事件钩子](https://github.com/openai/codex/issues/2109)** | 允许用户定义模式匹配的事件钩子，在 Codex 行为前后触发脚本/命令，58 条评论，475 👍 | 🔥🔥🔥 |
| 3 | **[Token 刷新失败](https://github.com/openai/codex/issues/9634)** | refresh token 已使用导致无法刷新，需重新登录 | 🔥 |
| 4 | **[Windows IDE "Thinking" 卡住](https://github.com/openai/codex/issues/12161)** | VS Code/Cursor/Windsurf 扩展在 Windows 上 stuck 在 Thinking 状态 | 🔥 |
| 5 | **[ChatGPT 集成](https://github.com/openai/codex/issues/2153)** | 希望将 Codex 会话迁移至 ChatGPT 进行头脑风暴，15 条评论，85 👍 | 🔥🔥 |
| 6 | **[每周限额刷新异常](https://github.com/openai/codex/issues/7354)** | 使用量限额突然下降，已关闭 | 🐛 |
| 7 | **[语义代码库索引与搜索](https://github.com/openai/codex/issues/5181)** | 提议添加语义搜索能力，14 条评论，28 👍 | 🔥🔥 |
| 8 | **[WSL 环境下 Codex 无法打开](https://github.com/openai/codex/issues/13488)** | Windows 下 WSL 配置问题，已关闭 | 🐛 |
| 9 | **[回复历史消息而非最新](https://github.com/openai/codex/issues/8648)** | 多轮对话中偶尔回复早期消息 | 🐛 |
| 10 | **[多终端标签页](https://github.com/openai/codex/issues/11427)** | 建议在 App 中支持多终端/标签页 | 💡 |

---

## 重要 PR 进展

| # | PR | 内容摘要 | 状态 |
|---|-----|---------|------|
| 1 | **[#13593](https://github.com/openai/codex/pull/13593)** | 稳定化 flaky tests，修复竞态条件而非简单增加超时 | OPEN |
| 2 | **[#13841](https://github.com/openai/codex/pull/13841)** | TUI 优化：明确 pending steer 和排队 follow-up 的区分 | OPEN |
| 3 | **[#14012](https://github.com/openai/codex/pull/14012)** | 修复交错流式响应中 active item 逻辑错误导致的路由问题 | OPEN |
| 4 | **[#13978](https://github.com/openai/codex/pull/13978)** | 添加服务端压缩 feature flag，优化上下文管理 | OPEN |
| 5 | **[#13092](https://github.com/openai/codex/pull/13092)** | 新增 request_permissions 工具，支持运行时请求额外权限 | OPEN |
| 6 | **[#14018](https://github.com/openai/codex/pull/14018)** | TUI/CLI 迁移至进程内 app-server，减少重复逻辑 | OPEN |
| 7 | **[#14004](https://github.com/openai/codex/pull/14004)** | TUI 渲染 request_permissions 调用 | OPEN |
| 8 | **[#14017](https://github.com/openai/codex/pull/14017)** | 修复 WebSocket 失败后的错误传递稳定性 | OPEN |
| 9 | **[#13665](https://github.com/openai/codex/pull/13665)** | 支持 config.toml 中自定义模型别名 | OPEN |
| 10 | **[#13678](https://github.com/openai/codex/pull/13678)** | 添加 watchdog 运行时支持和管理生命周期 | OPEN |

---

## 功能需求趋势

从 50 条 Issues 提炼的社区核心诉求：

| 方向 | 说明 | 热度 |
|------|------|------|
| **跨平台兼容性** | macOS Intel、WSL、Windows PowerShell 等多平台支持需求强烈 | 🔥🔥🔥 |
| **IDE 集成体验** | VS Code/Cursor 扩展的 Thinking 卡住、UI 交互优化 | 🔥🔥 |
| **模型与上下文** | 语义搜索、每周限额、模型选择行为是持续痛点 | 🔥🔥 |
| **自动化与编排** | Event hooks、codex inject、ChatGPT 集成等能力 | 🔥🔥 |
| **权限与安全** | 沙箱权限、工作区访问控制、refresh token 稳定性 | 🔥 |

---

## 开发者关注点

**痛点总结：**
1. **Windows 平台问题集中**：WSL 集成、PowerShell 宿主、会话权限等多条反馈
2. **Token 消耗异常**：后台进程轮询导致不必要 API 调用（#13733）
3. **响应状态异常**：Thinking 卡死、回复历史消息等交互 bug
4. **版本兼容性**：打包版 CLI 与独立版表现不一致（#13747）

**高频需求：**
- 多终端/标签页支持
- 语义化代码搜索
- Event Hooks 自动化能力
- macOS Intel 兼容性

---

*本日报基于 GitHub openai/codex 过去 24 小时数据生成*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-03-09）

## 今日速览

过去 24 小时内，Gemini CLI 项目未发布新版本。社区重点聚焦于**语音模式（Voice Mode）功能完善**、**远程代理基础设施构建**以及**启动性能优化**三大方向。其中多个 PR 推进了语音交互体验改进，同时 Epic 级别的远程代理和子代理 UX 优化工作流持续推进。

---

## 版本发布

本期无新版本发布。

---

## 社区热点 Issues

| 序号 | Issue | 重要性说明 | 社区反应 |
|:---:|-------|-----------|----------|
| 1 | **[#20716](https://github.com/google-gemini/gemini-cli/issues/20716)** - 计划审批对话框截断问题 | **讨论最活跃（8条评论）**。用户在退出计划模式时，对话框仅显示前15行内容，后续被隐藏，影响任务完整预览 | 开发者关注度高，需优先解决 |
| 2 | **[#2866](#2866)** - 改进变更查看体验 | 已关闭（4条评论，6👍）。用户希望像 Claude Code 一样自动在编辑器中查看变更 | 代表性需求：增强变更可视化 |
| 3 | **[#21461](https://github.com/google-gemini/gemini-cli/issues/21461)** - Shell 命令别名不支持 | 用户在 `.bash_profile` 中设置的别名无法在 Gemini CLI 中使用 | 影响日常开发效率 |
| 4 | **[#20550](https://github.com/google-gemini/gemini-cli/issues/20550)** - JS 堆内存溢出 | 严重稳定性问题，附带完整 traceback | 需关注内存管理 |
| 5 | **[#20217](https://github.com/google-gemini/gemini-cli/issues/20217)** - 输入文件路径时闪烁 | UI 交互问题（2评论，1👍），附演示视频 | 影响输入体验 |
| 6 | **[#21646](https://github.com/google-gemini/gemini-cli/issues/21646)** - 通过并行化优化启动延迟 | **性能优化方向**：审计并并行化异步网络和 I/O 调用 | 核心性能改进需求 |
| 7 | **[#21596](https://github.com/google-gemini/gemini-cli/issues/21596)** - 警告用户可疑策略 | 企业级安全需求：检测并提醒明显不安全的策略配置 | 提升安全防护 |
| 8 | **[#21433](https://github.com/google-gemini/gemini-cli/issues/21433)** - 清理无头模式并实现详细级别 | 1.0 发布前的关键需求：确保脚本/自动化场景的可靠性 | 面向生产环境 |
| 9 | **[#21423](https://github.com/google-gemini/gemini-cli/issues/21423)** - 输入提示超出高度时添加滚动条 | UI 改进：解决长输入时的显示问题 | 交互细节优化 |
| 10 | **[#20193](https://github.com/google-gemini/gemini-cli/issues/20193)** - API 响应解析鲁棒性 | Epic 级别：解决后端 proto 变更导致的客户端崩溃问题 | 稳定性保障 |

---

## 重要 PR 进展

| 序号 | PR | 功能/修复内容 |
|:---:|---|--------------|
| 1 | **[#21532](https://github.com/google-gemini/gemini-cli/pull/21532)** - 实验性 `--voice` 模式脚手架 | 为语音交互界面建立架构基础，支持 Gemini 多模态音频流 |
| 2 | **[#20681](https://github.com/google-gemini/gemini-cli/pull/20681)** - 支持 `GOOGLE_GEMINI_BASE_URL` | 允许自定义 API 端点，支持 Ollama、LiteLLM 等本地代理 |
| 3 | **[#21648](https://github.com/google-gemini/gemini-cli/pull/21648)** - 并行化用户配额和实验获取 | **性能优化**：在认证流程中并行获取数据，减少启动延迟 |
| 4 | **[#21540](https://github.com/google-gemini/gemini-cli/pull/21540)** - 语音模式帮助和退出命令 | 增强语音模式可用性，支持会话内命令提示 |
| 5 | **[#21536](https://github.com/google-gemini/gemini-cli/pull/21536)** - 语音模式建议系统 | "Did you mean?" 机制，模糊匹配用户输入并提供建议 |
| 6 | **[#20989](https://github.com/google-gemini/gemini-cli/pull/20989)** - 语音友好响应格式化器 | 将 Markdown/ANSI 格式转换为纯文本，适配 TTS 播放 |
| 7 | **[#21215](https://github.com/google-gemini/gemini-cli/pull/21215)** - 恢复未发送的草稿 | 防止 Ctrl+C 等操作意外丢失输入内容 |
| 8 | **[#21650](https://github.com/google-gemini/gemini-cli/pull/21650)** - LLM 建议的策略范围 | 工具批准时使用 Gemini Flash 推荐更优的策略规则 |
| 9 | **[#21651](https://github.com/google-gemini/gemini-cli/pull/21651)** - 多模态语音模式配置架构 | 为 GSoC 2026 语音模式建立配置 schema |
| 10 | **[#21115](https://github.com/google-gemini/gemini-cli/pull/21115)** - 语音模式波形可视化 | 音频波形 Ink 组件：idle/listening/processing/speaking 四种状态 |

---

## 功能需求趋势

从 Issue 和 PR 数据分析，社区关注的功能方向如下：

| 方向 | 热度 | 说明 |
|------|------|------|
| **语音模式（Voice Mode）** | ⭐⭐⭐⭐⭐ | 多 PR 并行推进：scaffold、帮助命令、建议系统、响应格式化、波形可视化 |
| **性能优化** | ⭐⭐⭐⭐ | 启动延迟、并行网络调用、I/O 缓存、异步调用优化 |
| **远程代理（Remote Agents）** | ⭐⭐⭐⭐ | Epic 级别工作流：Sprint 1/2/3 基础设施、OAuth、后台操作 |
| **子代理 UX** | ⭐⭐⭐ | 可折叠任务组、历史记录 Expander、System Instructions 精简 |
| **无头/非交互模式** | ⭐⭐⭐ | 1.0 发布前重点：详细级别控制、脚本兼容性 |
| **企业级安全** | ⭐⭐ | 可疑策略警告、OAuth 配置修复、策略范围建议 |
| **Windows 兼容性** | ⭐⭐ | 交互式 Shell 方向键导航修复 |

---

## 开发者关注点

根据 Issue 和 PR 反馈，开发者主要关注以下痛点和高频需求：

1. **启动性能**：多个 Issue/PR 聚焦于减少启动延迟，开发者对响应速度敏感
2. **语音交互完整性**：语音模式作为新功能，社区积极参与功能补全（帮助、建议、可视化）
3. **变更体验**：用户期望更直观的代码变更查看方式
4. **稳定性问题**：内存溢出、API 响应解析崩溃等问题影响生产使用
5. **Windows 兼容性**：方向键导航问题仍需完善
6. **配置显示**：对象类型设置显示为 `[object Object]` 的问题被修复

---

*本日报基于 2026-03-09 GitHub 数据生成*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**2026-03-09**

---

## 1. 今日速览

今日社区活跃度较高，共收到 5 条新 Issue 和 3 个依赖更新 PR。**VSCode 扩展的 @ 提及功能优化**成为开发者关注的焦点，同时项目级配置需求和 Ubuntu 连接问题也引发讨论。过去 24 小时内无新版本发布。

---

## 2. 版本发布

📦 **过去 24 小时无新版本发布**

---

## 3. 社区热点 Issues

| # | 标题 | 类型 | 重要性说明 | 社区反应 |
|---|------|------|------------|----------|
| #1270 | VSCode 扩展 @ 提及应优先显示已打开文件 | Enhancement | 提升文件选择效率，符合开发者工作流 | 👍 0, 💬 1 |
| #1366 | CLI 应支持通过参数选择历史会话 | Enhancement | 增强会话管理能力，改善多会话体验 | 👍 0, 💬 0 |
| #1365 | 需要项目级别的 MCP/Subagents 配置 | Enhancement | 解决团队协作和项目隔离需求 | 👍 1, 💬 0 |
| #1364 | Ubuntu 下 HTTP 头非法值导致连接错误 | Bug | 影响 Linux 用户体验，需紧急修复 | 👍 0, 💬 0 |
| #1363 | Web 端无法通过 --agent-file 挂载自定义 Agent | Bug | 限制自定义工作流灵活性 | 👍 0, 💬 0 |

---

## 4. 重要 PR 进展

| # | 标题 | 依赖项 | 更新内容 |
|---|------|--------|----------|
| #884 | bump ruff 0.14.14 → 0.15.0 | dev | Python linter 升级，提升代码检查性能 |
| #905 | bump fastapi 0.128.0 → 0.128.1 | core | Web 框架小版本更新，修复潜在问题 |
| #883 | bump fastmcp 2.12.5 → 2.14.5 | core | MCP 协议实现升级，修复内存泄漏 |

> 📝 注：以上 PR 均为依赖自动更新，由 Dependabot 发起。

---

## 5. 功能需求趋势

从今日 Issue 分布来看，社区关注的功能方向集中在：

| 方向 | 占比 | 具体表现 |
|------|------|----------|
| **IDE 集成** | 40% | VSCode 扩展功能优化（#1270） |
| **配置灵活性** | 40% | 项目级 MCP/Subagents 配置（#1365）、历史会话选择（#1366） |
| **跨平台兼容性** | 20% | Ubuntu 连接问题修复（#1364） |

---

## 6. 开发者关注点

### 🔴 核心痛点

1. **配置管理不灵活**  
   现有仅支持全局 MCP/Subagents 配置，开发者强烈呼吁项目级配置支持，减少每次启动时的手动参数传递

2. **Ubuntu/Linux 兼容性问题**  
   HTTP 头非法值导致连接错误，影响 Linux 用户正常使用

3. **Web 端功能受限**  
   `--agent-file` 参数在 Web 模式下无法正常工作，限制自定义 Agent 的使用场景

### 🟡 高频需求

- VSCode 扩展的文件提及体验优化
- CLI 会话管理能力增强（历史会话列表、选择性继续）

---

*日报由 AI 生成，数据来源：github.com/MoonshotAI/kimi-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-03-09

## 今日速览

今日 OpenCode 社区活跃度较高：v1.2.22 版本发布，带来 TUI 目录规范化等多项修复；symlink 相关问题成为今日焦点，多个关联 Issue 和 PR 解决或正在修复中；社区对 Codex 5.3、Ollama 本地模型自动检测等功能呼声很高。

---

## 版本发布

**v1.2.22** 已发布，更新内容：

| 类别 | 描述 |
|------|------|
| Core | Canonicalize current working directory after changing directories in TUI |
| Core | Fix broken MCP toggling in TUI |
| Core | Update database path test to verify correct channel-based filename |
| Core | Allow beta channel to share database with stable channel |
| Core | Add OPENCODE_SKIP_MIGRATIONS flag to bypass migrations |

📎 Release: https://github.com/anomalyco/opencode/releases

---

## 社区热点 Issues

### 🔥 Top 10 热门 Issue

| # | Issue | 热度 | 关注点 |
|---|-------|------|--------|
| 1 | **[#8598](https://github.com/anomalyco/opencode/issues/8598)** Copilot requested model not supported<br>用户报告更新后 Codex 5.2、Raptor 等模型提示需要启用功能，但在 VSCode Copilot 可用 | 41💬 7👍 | **模型兼容性** |
| 2 | **[#11112](https://github.com/anomalyco/opencode/issues/11112)** always stuck at "Preparing write..."<br>Prometheus 一直卡在写入准备阶段，已重试多次 | 38💬 17👍 | **TUI 写入卡顿** |
| 3 | **[#13768](https://github.com/anomalyco/opencode/issues/13768)** Opus 4.6 不支持 assistant message prefill<br>使用 Opus 4.6 时频繁中断，提示模型不支持预填充 | 23💬 11👍 | **模型兼容性** |
| 4 | **[#12954](https://github.com/anomalyco/opencode/issues/12954)** 5.3 Codex for Github Copilot provider<br>请求支持最新 Codex 5.3 模型，功能建议获得 121 赞 | 17💬 121👍 | **新模型支持** ⭐高票 |
| 5 | **[#16470](https://github.com/anomalyco/opencode/issues/16470)** Code output unreadable in light mode<br>浅色模式下格式化代码不可见，颜色方案问题 | 12💬 1👍 | **UI/主题** |
| 6 | **[#11439](https://github.com/anomalyco/opencode/issues/11439)** Support parsing `<think>` and `<thinking>` tags<br>请求支持将 `<thinking>` 标签解析为推理块显示 | 11💬 8👍 | **推理能力增强** |
| 7 | **[#14273](https://github.com/anomalyco/opencode/issues/14273)** Free usage exceeded (Zen free models)<br>使用 Zen 免费模型时报额度超限，但账户有余额 | 11💬 0👍 | **计费系统** |
| 8 | **[#4986](https://github.com/anomalyco/opencode/issues/4986)** Support for a local Relevance Index<br>请求支持本地相关性索引，解决上下文窗口数据丢失 | 9💬 1👍 | **语义索引** |
| 9 | **[#16647](https://github.com/anomalyco/opencode/issues/16647)** Symlinked project directories break after realpath resolution<br>symlink 项目目录在 realpath 解析后出现问题 | 9💬 0👍 | **symlink 兼容性** |
| 10 | **[#6265](https://github.com/anomalyco/opencode/issues/6265)** Integrate mgrep for Semantic Code Search<br>请求集成 mgrep 语义搜索工具 | 8💬 0👍 | **代码搜索** |

---

## 重要 PR 进展

### ⭐ 重点 PR 10 个

| PR | 功能/修复内容 | 状态 |
|----|--------------|------|
| **[#16653](https://github.com/anomalyco/opencode/pull/16653)** feat: auto-detect local Ollama models | 自动检测本地 Ollama 模型并注册provider，新增 `--local` flag | OPEN |
| **[#16286](https://github.com/anomalyco/opencode/pull/16286)** refactor: replace Bun shell in core flows | 用 `Process.text()` 和 `Process.lines()` 替代 Bun shell，提升跨平台兼容性 | OPEN |
| **[#16670](https://github.com/anomalyco/opencode/pull/16670)** fix: cache provider list and sync connected state | 缓存 provider list，解决启动慢和重复大请求问题 | OPEN |
| **[#16668](https://github.com/anomalyco/opencode/pull/16668)** docs: document supported plugin spec conventions | 补充 plugin spec 文档，澄清 `file:///` 等格式 | OPEN |
| **[#16655](https://github.com/anomalyco/opencode/pull/16655)** fix: keep shared sessions fresh | 修复共享会话链接不包含最新内容的问题 | OPEN |
| **[#16654](https://github.com/anomalyco/opencode/pull/16654)** fix: keep streamed text when providers skip text-start | 修复 provider 未发送 text-start 时丢失流式文本 | OPEN |
| **[#12679](https://github.com/anomalyco/opencode/pull/12679)** feat(tui): vim motions in prompt input | TUI 提示符支持 Vim 快捷键（`tui.vim: true` 开启） | OPEN |
| **[#16665](https://github.com/anomalyco/opencode/pull/16665)** fix: canonicalize filepath in Instance.containsPath() | 修复 symlink 场景下路径检查失败 | OPEN |
| **[#16651](https://github.com/anomalyco/opencode/pull/16651)** fix: resolve symlinks in Instance cache | 解决 symlink 导致重复实例的缓存问题 | OPEN |
| **[#16263](https://github.com/anomalyco/opencode/pull/16263)** feat: support slash commands mid-prompt | 支持在输入中间使用斜杠命令（`/undo`, `/new` 等） | OPEN |

---

## 功能需求趋势

根据 Issue 和 PR 分析，社区关注的功能方向如下：

| 方向 | 热度 | 说明 |
|------|------|------|
| **🤖 新模型支持** | ⭐⭐⭐⭐⭐ | Codex 5.3、GPT-5.4、Opus 4.6 等新模型兼容性需求强烈 |
| **🔗 symlink 兼容性** | ⭐⭐⭐⭐ | 今日热点，realpath 解析导致多个问题，已在修复中 |
| **📡 本地模型集成** | ⭐⭐⭐⭐ | Ollama 自动检测、mgrep 语义搜索等本地化需求 |
| **🖥️ TUI 增强** | ⭐⭐⭐ | Vim 快捷键、斜杠命令支持、会话刷新 |
| **💬 推理能力** | ⭐⭐ | `<thinking>` 标签解析、推理块显示 |
| **🔍 语义索引** | ⭐⭐ | 本地 Relevance Index、向量数据库集成 |
| **🧩 插件系统** | ⭐⭐ | plugin spec 规范化、Claude Code hooks 兼容 |

---

## 开发者关注点

### 痛点总结

1. **symlink 路径问题**（高发）
   - 项目目录为 symlink 时导致 TUI 冻结、重复实例、路径解析错误
   - 相关 Issue: #16647, #15482, #16528, #16522, #16659

2. **模型兼容性**
   - Copilot/Codex 新模型支持不完善，Opus 4.6 预填充问题
   - 相关 Issue: #8598, #13768, #12954, #16265

3. **TUI 稳定性**
   - 写入卡顿、会话卡在 "Thinking"、tmux 下 TUI 渲染异常
   - 相关 Issue: #11112, #16351, #16646

4. **共享会话缓存**
   - 分享链接不包含最新对话内容
   - 相关 Issue: #9988（已修复中）

### 高频需求

- **自动检测本地模型**（Ollama）
- **斜杠命令增强**（支持中间输入）
- **Vim 操作支持**
- **主题/配色修复**（浅色模式代码不可见）

---

*日报生成时间: 2026-03-09 | 数据来源: github.com/anomalyco/opencode*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# 2026-03-09 Qwen Code 社区动态日报

## 1. 今日速览

今日 Qwen Code 社区持续活跃，发布了 **v0.12.0-preview.1** 及对应 nightly 版本，重点修复了 Windows 平台 Markdown 命令解析和代码高亮 tabWidth 支持问题。社区提交了 12 条 Issues 和 30 条 PR，其中多代理协作、VSCode 侧边栏集成、事件钩子系统等功能开发进展显著。

---

## 2. 版本发布

| 版本 | 发布类型 | 更新内容 |
|------|----------|----------|
| **v0.12.0-preview.1** | Preview | [链接](https://github.com/QwenLM/qwen-code/releases/tag/v0.12.0-preview.1) |
| **v0.12.0-nightly.20260309.d63798cc** | Nightly | [链接](https://github.com/QwenLM/qwen-code/releases/tag/v0.12.0-nightly.20260309.d63798cc) |

**本次更新：**
- **fix(cli):** 修复 Windows 平台 Markdown 命令 frontmatter 解析在 CRLF/BOM 格式下的兼容性问题 [@zy6p](https://github.com/QwenLM/qwen-code/pull/2078)
- **feat:** 为 CodeColorizer 添加 tabWidth 支持，并将制表符替换为空格 [@lgzzzz](https://github.com/QwenLM/qwen-code/pull/2077)

---

## 3. 社区热点 Issues（10 条）

| # | 标题 | 类型 | 关键信息 |
|---|------|------|----------|
| **#311** | [qwen code is working slowly](https://github.com/QwenLM/qwen-code/issues/311) | P1/P2 Bug+Feature, Performance | ⭐ 5 👍 · 💬 18 条评论 · 持续 7 个月的性能问题，用户反映基于 Gemini CLI 的 Qwen Code 响应速度明显慢于原生 Gemini CLI |
| **#1815** | [Agent Team - Multi-Agent Collaboration](https://github.com/QwenLM/qwen-code/issues/1815) | Feature Request | ⭐ 7 👍 · 💬 1 条评论 · 社区呼声很高的多代理协作功能，允许用户协调多个 AI 代理作为团队工作 |
| **#2105** | [Error message not cleared after switching model](https://github.com/QwenLM/qwen-code/issues/2105) | Bug | ⭐ 0 👍 · 💬 5 条评论 · 切换模型后错误提示未清除，影响用户体验 |
| **#2191** | [Error during web search: 429 Too Many Requests](https://github.com/QwenLM/qwen-code/issues/2191) | Bug | ⭐ 1 👍 · 💬 4 条评论 · DashScope API 限流问题持续 3+ 天，影响搜索功能可用性 |
| **#2012** | [Lot's of failed bash tool calls](https://github.com/QwenLM/qwen-code/issues/2012) | Bug | ⭐ 0 👍 · 💬 4 条评论 · bash 工具调用大量失败，涉及多个不同项目 |
| **#2198** | [Cannot type spacebar character in CLI input](https://github.com/QwenLM/qwen-code/issues/2198) | Bug | ⭐ 0 👍 · 💬 1 条评论 · CLI 输入框无法输入空格字符的严重 bug |
| **#2201** | [Often the read tool ends up in a loop reading a file](https://github.com/QwenLM/qwen-code/issues/2201) | Bug | ⭐ 0 👍 · Read 工具陷入循环，反复读取文件前 100-300 行 |
| **#2200** | [compress not working](https://github.com/QwenLM/qwen-code/issues/2200) | Bug | ⭐ 0 👍 · 上下文压缩后窗口大小未变化 |
| **#2196** | [ignored directives at ~/.qwen/QWEN.md](https://github.com/QwenLM/qwen-code/issues/2196) | Bug | ⭐ 0 👍 · 每次 CLI 启动需重新读取全局配置和指令 |
| **#2194** | [Add --worktree flag for isolated parallel sessions](https://github.com/QwenLM/qwen-code/issues/2194) | Feature Request | ⭐ 0 👍 · 请求使用 Git worktree 实现隔离的并行会话 |

**🔥 重点关注：**
- **#311** 性能问题是长期痛点，P1/P2 双优先级说明官方高度重视
- **#1815** 多代理协作获得最高社区点赞（7 👍），是明确的需求趋势

---

## 4. 重要 PR 进展（10 条）

| # | 标题 | 状态 | 关键内容 |
|---|------|------|----------|
| **#2203** | [feat(hooks): Implement 10 core event hooks](https://github.com/QwenLM/qwen-code/pull/2203) | OPEN | 实现 10 个核心事件钩子，覆盖会话生命周期、工具执行、对话管理、通知和子代理操作 |
| **#2202** | [feat: support skills in .agents directory](https://github.com/QwenLM/qwen-code/pull/2202) | OPEN | 支持从 `.agent/skills/`、`.cursor/skills/` 等多目录加载技能 |
| **#2195** | [feat(vscode): add sidebar chat view](https://github.com/QwenLM/qwen-code/pull/2195) | OPEN | 添加 VS Code 侧边栏聊天视图 |
| **#2192** | [fix: clear retry error even without countdown timer](https://github.com/QwenLM/qwen-code/pull/2192) | CLOSED | 修复切换模型后错误消息残留问题（#2105） |
| **#1828** | [feat: Implement AskUserQuestionTool](https://github.com/QwenLM/qwen-code/pull/1828) | CLOSED | 实现交互式用户查询工具，支持 Agent 在任务执行中向用户提问 |
| **#2159** | [feat(ui): add setting to suppress home directory warning](https://github.com/QwenLM/qwen-code/pull/2159) | CLOSED | 添加 `ui.suppressHomeDirectoryWarning` 设置项 |
| **#2174** | [feat(core): discover project skills from .agents/skills](https://github.com/QwenLM/qwen-code/pull/2174) | CLOSED | 支持从 `.agents/skills` 发现项目级技能 |
| **#2170** | [fix(vscode): restore thinking messages from JSONL sessions](https://github.com/QwenLM/qwen-code/pull/2170) | CLOSED | 修复从 JSONL 会话恢复思考消息 |
| **#2160** | [fix(ui): clear static retry error on new query](https://github.com/QwenLM/qwen-code/pull/2160) | CLOSED | 新查询时清除静态重试错误 |
| **#2162** | [fix(auth): preserve selected auth type when init auth fails](https://github.com/QwenLM/qwen-code/pull/2162) | CLOSED | 认证失败时保留选择的认证类型 |

**✨ 亮点：**
- **#2203** 事件钩子系统将大幅提升 Qwen Code 的可扩展性
- **#2195** VSCode 侧边栏集成是 IDE 生态的重要补全
- **#1828** AskUser 功能已合并，增强人机交互能力

---

## 5. 功能需求趋势

基于 Issue 和 PR 分析，当前社区关注的功能方向如下：

| 方向 | 热度 | 说明 |
|------|------|------|
| **IDE 集成增强** | 🔥 高 | VSCode 侧边栏聊天、工具标签统一、session 恢复优化 |
| **多代理协作** | 🔥 高 | Agent Team 功能获得 7 赞，是最强需求信号 |
| **性能优化** | ⚠️ 重点 | 响应速度慢是长期痛点，P1/P2 双重优先级 |
| **可扩展性** | 📈 上升 | 事件钩子系统（10 个核心钩子）、技能目录多路径支持 |
| **人机交互** | 📈 上升 | AskUser 工具、用户clarification支持 |
| **输入能力** | 📌 待改进 | CLI 空格输入、更多输入形式（checkbox/tabs） |

---

## 6. 开发者关注点

### 🔴 高频痛点

1. **性能问题**：Qwen Code 基于 Gemini CLI，但响应速度明显更慢（#311）
2. **API 限流**：DashScope 搜索 429 错误持续 3 天（#2191）
3. **工具调用失败**：bash 工具大量失败（#2012），Read 工具循环读取（#2201）
4. **CLI 输入问题**：空格键无法输入（#2198）

### 🟡 配置与状态

- 全局配置（QWEN.md、settings.json）每次启动被忽略（#2196）
- 切换模型后错误提示残留（#2105）

### 🟢 积极信号

- 事件钩子系统、多代理协作、VSCode 侧边栏等大型功能正在推进
- AskUser 功能已正式合并
- 工具命名规范统一工作持续进行

---

*本日报由 AI 技术分析师生成，数据截止至 2026-03-09*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*