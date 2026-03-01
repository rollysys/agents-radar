# AI CLI 工具社区动态日报 2026-03-01

> 生成时间: 2026-03-01 14:04 UTC | 覆盖工具: 6 个

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

**报告周期：2026-03-01**

---

## 1. 生态全景

当前 AI CLI 工具生态正处于**多极竞争与功能分化**阶段。头部玩家（Claude Code、OpenAI Codex）聚焦企业级协作与协议扩展，本土化工具（Qwen Code、Kimi Code CLI）深耕中文场景与用户体验，谷歌 Gemini CLI 则在 IDE 集成与远程代理基础设施上投入大量资源。**远程开发支持、MCP 协议扩展、多模态协作**成为行业共识的战略高地，而内存泄漏、性能稳定性等底层问题仍是普遍痛点。

---

## 2. 各工具活跃度对比

| 工具 | Issues 新增 | PR 新增 | Release | 核心热点领域 |
|:-----|:-----------:|:-------:|:-------:|:-------------|
| **Claude Code** | 50 | 8 | 无 | Token限制、MCP协议、RTL渲染、内存泄漏 |
| **OpenAI Codex** | ~30（估算） | 10+ | 无 | WebSocket稳定性、远程开发、团队协作 |
| **Gemini CLI** | ~20（Top10） | 10 | 无 | ReadFiles一致性、非交互模式、远程代理 |
| **Kimi Code CLI** | 4 | 5 | 无 | SSH远程、Task并发、文件补全 |
| **OpenCode** | 50 | 50 | 无 | GPT-5.3支持、内存泄漏(Critical)、Windows兼容性 |
| **Qwen Code** | 9 | 28 | v0.11.1开发中 | 中文处理、PDF读取、认证UX |

> 注：数据来源为 2026-03-01 GitHub 公开动态，OpenCode 在 PR 数量上领先，Claude Code 和 OpenCode 在 Issue 数量上并列最高。

---

## 3. 共同关注的功能方向

### 🔴 远程开发与跨平台协作

- **Claude Code**: MCP Elicitation（#2799，77评论）支持人机交互增强
- **OpenAI Codex**: SSH/Remote Hosts（#10450，217赞）最高赞功能请求
- **Gemini CLI**: Remote Agents Sprint 1-3（#20302）基础设施推进中
- **Kimi Code CLI**: SSH服务器场景（#1293）无法通信问题

**信号解读**：远程开发是所有工具的共识方向，预计将成为下一代 CLI 的标配能力。

### 🟠 协议扩展与 Agent 能力

- **Claude Code**: MCP Elicitation、Agent Teams 自定义定义
- **OpenAI Codex**: 原生团队命令 + 任务工具（PR #13155/56）
- **Qwen Code**: Modes Layer 专业代理配置（PR #1980）、SubAgent 精细化控制
- **OpenCode**: GitLab DAP 工作流模型集成

**信号解读**：从单一编码助手向**多 Agent 协作平台**演进是明确趋势。

### 🟡 稳定性与性能

- **Claude Code**: 内存泄漏至 120GB+（#4953，66评论）
- **OpenCode**: 内存泄漏导致内核软锁（#13230，Critical）
- **Kimi Code CLI**: Task 子任务并发卡顿（#1292）
- **Qwen Code**: PDF 读取失败导致会话报废（#2020）

**信号解读**：随着工具使用深度增加，**长时运行稳定性**成为核心痛点，影响生产环境可用性。

---

## 4. 差异化定位分析

| 工具 | 定位侧重 | 目标用户 | 技术路线特征 |
|:-----|:---------|:---------|:-------------|
| **Claude Code** | 企业级 Agent 协作平台 | 大型开发团队、企业用户 | MCP 协议生态、RTL/多语言国际化、安全护栏 |
| **OpenAI Codex** | 桌面端智能开发伴侣 | 开发者个人、团队协作 | WebSocket 实时通信、VS Code 深度集成 |
| **Gemini CLI** | 开发者生产力工具 | Google 生态用户 | VS Code 上下文集成、远程代理基础设施、无障碍支持 |
| **Kimi Code CLI** | 中文开发者效率工具 | 中文开发者、轻量用户 | 中文 NLP 优化、SSH 远程场景、Web UI |
| **OpenCode** | 开源多模型聚合终端 | 开源爱好者、多模型用户 | 多 Provider 整合（GitHub Copilot、GitLab DAP）、TUI 创新 |
| **Qwen Code** | 阿里云生态开发者工具 | 阿里云/国内开发者 | 中文处理专家、认证生态（免费/付费计划）、VS Code 侧边栏 |

---

## 5. 社区热度与成熟度

### 🥇 高度活跃：OpenCode

- PR 数量单日 50 条，社区贡献度极高
- 功能迭代速度快，涵盖模型支持、跨平台兼容、桌面端功能
- 处于快速成长期，Bug 修复与新功能并重

### 🥈 中高活跃：Claude Code、Qwen Code

- **Claude Code**: Issue 讨论质量高（Token 限制 81 评论、MCP 77 评论），但 PR 产出相对有限，核心开发主要由官方团队主导
- **Qwen Code**: PR 数量可观（28 条），v0.11.1 蓄势发布，社区对中文场景问题反馈积极

### 🥉 中等活跃：OpenAI Codex、Gemini CLI

- **OpenAI Codex**: 功能方向明确（远程开发、团队协作），但 Issue 讨论热度分散
- **Gemini CLI**: 远程代理基础设施处于早期建设阶段，Issue 聚焦核心功能修复

### 🏁 低活跃：Kimi Code CLI

- Issue 与 PR 数量均为最低，社区反馈量有限
- 可能处于功能稳定期或资源投入有限阶段

---

## 6. 值得关注的趋势信号

### 📈 开发者应重点关注的方向

| 趋势 | 影响范围 | 开发者建议 |
|:-----|:---------|:-----------|
| **远程开发基础设施** | 全行业 | 提前布局 SSH/容器化开发环境集成能力 |
| **多 Agent 协作协议** | Claude Code、OpenAI、Qwen | 关注 MCP 协议演进和 Agent Teams 标准 |
| **客户端安全与脱敏** | Qwen Code（VibeGuard） | 敏感信息本地脱敏将成为合规刚需 |
| **中文 NLP 处理** | Qwen Code、Kimi Code | 中文开发者场景的空格/标点处理仍需优化 |
| **内存/性能工程** | Claude Code、OpenCode | 长时运行场景需重点关注资源管理 |

### ⚠️ 风险预警

1. **OpenCode 内存泄漏为 Critical 级别**，可能导致生产环境系统崩溃，使用前需评估风险
2. **WebSocket 连接问题**在 OpenAI Codex 和 Claude Code 中均存在，可能影响实时交互体验
3. **认证流程复杂性**在多个工具中引发不满，需关注 OAuth 优化

---

## 结语

2026 年 Q1 的 AI CLI 工具生态呈现**功能趋同但体验分化**的格局。远程开发、多 Agent 协作、跨平台稳定性是共同方向，但在具体实现路径上各有权重：Claude Code 押注 MCP 协议生态，OpenCode 专注开源多模型聚合，Qwen Code 深耕中文场景，Gemini CLI 布局远程代理基础设施。开发者选择时需综合考虑**语言偏好、云生态绑定、协作场景需求**三大因素。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截止：2026-03-01 | 来源：github.com/anthropics/skills

---

## 1. 热门 Skills 排行

| # | PR | 功能摘要 | 状态 |
|---|-----|----------|------|
| 1 | **[#83](https://github.com/anthropics/skills/pull/83)** | 新增 skill-quality-analyzer 和 skill-security-analyzer，提供五维质量分析（结构、文档、安全等）和安全审计能力 | OPEN |
| 2 | **[#210](https://github.com/anthropics/skills/pull/210)** | 改进 frontend-design skill，提升指令清晰度和可操作性，确保单轮对话内可执行 | OPEN |
| 3 | **[#147](https://github.com/anthropics/skills/pull/147)** | codebase-inventory-audit：代码库清理与文档审计，10 步工作流生成 CODEBASE-STATUS.md | OPEN |
| 4 | **[#288](8](https://github.com/anthropics/skills/pull/288))** | 批量新增 8 个技能：tutorial-builder、quiz-generator、a11y-auditor、changelog-curator、data-storytelling 等 | OPEN |
| 5 | **[#444](https://github.com/anthropics/skills/pull/444)** | AURELION 认知框架套件（kernel、advisor、agent、memory），提供结构化思维模板 | OPEN |
| 6 | **[#181](https://github.com/anthropics/skills/pull/181)** | SAP-RPT-1-OSS 预测分析技能，集成 SAP 开源表格基础模型 | OPEN |
| 7 | **[#419](https://github.com/anthropics/skills/pull/419)** | Buildr：Telegram 与 Claude Code 桥接，支持消息镜像、远程控制 | OPEN |
| 8 | **[#386](https://github.com/anthropics/skills/pull/386)** | ShieldCortex：AI 代理持久记忆系统，内置安全防护 | OPEN |

**热点分析**：当前热门 PR 聚焦于**企业级工具集成**（SAP、Telegram）、**质量与安全审计**、**认知/记忆框架**，反映社区对 Skills 从实验走向生产的需求。

---

## 2. 社区需求趋势

| 需求方向 | 相关 Issue | 核心诉求 |
|----------|------------|----------|
| **治理与安全** | [#412](https://github.com/anthropics/skills/issues/412) - agent-governance 提案 | 政策执行、威胁检测、信任评分、审计追踪 |
| **工具链集成** | [#29](https://github.com/anthropics/skills/issues/29)、[#16](https://github.com/anthropics/skills/issues/16) | AWS Bedrock 支持、将 Skills 暴露为 MCP 协议 |
| **生态规范化** | [#202](https://github.com/anthropics/skills/issues/202)、[#189](https://github.com/anthropics/skills/issues/189) | skill-creator 应为操作指南而非文档、插件重复问题 |
| **记忆与状态** | [#185](https://github.com/anthropics/skills/issues/185) - Skills MCP | AI Agent 的包管理器，持久化能力 |
| **API 稳定性** | [#406](https://github.com/anthropics/skills/issues/406)、[#403](https://github.com/anthropics/skills/issues/403)、[#389](https://github.com/anthropics/skills/issues/389) | 上传/删除技能报错、API 服务宕机 |

**趋势洞察**：社区从“创造 Skills”转向“运维 Skills”——关注**安全治理**、**多平台集成**、**持久化存储**和**API 可靠性**。

---

## 3. 高潜力待合并 Skills

以下 PR 具备技术价值或社区呼声较高，有望近期合并：

| PR | 亮点 | 潜在价值 |
|----|------|----------|
| **[#236](https://github.com/anthropics/skills/pull/236)** | 统一 skill 名称长度验证（40 vs 64 字符问题） | 规范基础设施修复 |
| **[#362](https://github.com/anthropics/skills/pull/362)** + [#361](https://github.com/anthropics/skills/pull/361) | 修复 UTF-8 多字节字符 panic + YAML 特殊字符检测 | 核心工具链稳定性提升 |
| **[#282](https://github.com/anthropics/skills/pull/282)** | webapp-testing 添加 requirements.txt 依赖提示 | 改善开发者体验 |
| **[#284](https://github.com/anthropics/skills/pull/284)** | skill-creator 显式指定 UTF-8 编码 | 跨平台兼容性修复 |

> 注：大部分高星 PR 为基础设施修复（bugfix），而非新功能特性。

---

## 4. Skills 生态洞察

> **一句话总结**：当前社区最集中的诉求是 **将 Skills 从“实验性功能”推向“生产级工具链”**——要求更强的安全治理、多平台集成（MCP/Bedrock）、持久化能力，以及核心工具链的稳定性和规范化。

---

**报告说明**：本分析基于 github.com/anthropics/skills 公开数据，评论数以 Issue 区活跃度为参考。部分 PR 标注 `评论: undefined` 可能表示未开启评论功能或数据未抓取。

---

# Claude Code 社区动态日报（2026-03-01）

## 今日速览

今日 Claude Code 社区活跃度较高，共新增 50 条 Issues 和 8 条 Pull Requests。**热点集中在三个方面**：Token 输出限制问题引发大量讨论（81 条评论），MCP Elicitation 功能请求持续发酵（77 条评论），以及多个平台（包括 Windows、macOS、Linux）的 RTL 文本渲染回归问题出现。社区开发者正通过 PR 积极修复 v2.1.63 引入的 RTL 渲染 regress。

---

## 版本发布

**无新版本发布**

过去 24 小时内暂无新 Release。

---

## 社区热点 Issues

### 1. API Error: Claude's response exceeded the 32000 output token maximum
- **链接**: https://github.com/anthropics/claude-code/issues/24055
- **评论**: 81 | **👍**: 58
- **重要性**: 核心功能限制，影响长代码生成场景，社区反馈强烈

### 2. [Feature Request]: Add support for MCP Elicitation
- **链接**: https://github.com/anthropics/claude-code/issues/2799
- **评论**: 77 | **👍**: 141
- **重要性**: MCP 协议重要特性，可增强人机交互能力，呼声很高

### 3. Claude Code Memory Leak - Process Grows to 120+ GB RAM
- **链接**: https://github.com/anthropics/claude-code/issues/4953
- **评论**: 66 | **👍**: 54
- **重要性**: 严重性能问题，导致生产环境 OOM，亟需解决

### 4. Claude Desktop cannot install on Windows - redirects to Microsoft Store
- **链接**: https://github.com/anthropics/claude-code/issues/28892
- **评论**: 43 | **👍**: 12
- **重要性**: Windows 安装体验问题，影响用户上手

### 5. [BUG] InputValidationError: Write failed - missing content parameter
- **链接**: https://github.com/anthropics/claude-code/issues/895
- **评论**: 27
- **重要性**: 间歇性 Write 工具错误，影响文件操作可靠性

### 6. [FEATURE] Allow custom .claude/agents/ definitions as agent team teammates
- **链接**: https://github.com/anthropics/claude-code/issues/24316
- **评论**: 17 | **👍**: 18
- **重要性**: Agent Teams 扩展性需求，支持自定义 agent 定义

### 7. /remote-control (/rc) not recognized in existing session
- **链接**: https://github.com/anthropics/claude-code/issues/28322
- **评论**: 16 | **👍**: 6
- **重要性**: CLI 命令识别问题，影响工作流连续性

### 8. Terminal Paste Corruption from Bracketed Paste Mode
- **链接**: https://github.com/anthropics/claude-code/issues/3134
- **评论**: 15 | **👍**: 28
- **重要性**: macOS 终端粘贴功能损坏，影响日常使用

### 9. Agent Teams: support per-teammate working directory, CLAUDE.md, and MCP configs
- **链接**: https://github.com/anthropics/claude-code/issues/23669
- **评论**: 11 | **👍**: 6
- **重要性**: 多仓库协作场景核心需求

### 10. [BUG] I cannot uninstall Claude Code because I do not have an active paid account
- **链接**: https://github.com/anthropics/claude-code/issues/11789
- **评论**: 10
- **重要性**: 卸载流程设计缺陷，用户自主权受限

---

## 重要 PR 进展

### 1. fix: RTL text rendering regression in VSCode webview since v2.1.63
- **链接**: https://github.com/anthropics/claude-code/pull/29759
- **内容**: 修复 v2.1.63 引入的全局 CSS 规则导致的 RTL 文本渲染问题
- **状态**: OPEN

### 2. docs(plugin-dev): clarify skill naming in skill-development guide
- **链接**: https://github.com/anthropics/claude-code/pull/29757
- **内容**: 规范 skill 命名规范，使用 lowercase-hyphenated 格式
- **状态**: OPEN

### 3. feat: add verified-code-answers plugin to fix unverified assertions
- **链接**: https://github.com/anthropics/claude-code/pull/29755
- **内容**: 新增插件区分验证与未验证的代码答案，提升回答可信度
- **状态**: OPEN

### 4. feat: Add push-guardrails plugin to prevent accidental code exposure
- **链接**: https://github.com/anthropics/claude-code/pull/29732
- **内容**: 新增推送护栏，防止私有代码意外暴露到公开仓库
- **状态**: OPEN

### 5. docs: use lowercase hyphenated format for skill name examples
- **链接**: https://github.com/anthropics/claude-code/pull/29731
- **内容**: 文档示例统一使用小写连字符格式
- **状态**: OPEN

### 6. fix: handle unbound PROMPT_PARTS array in ralph-wiggum setup
- **链接**: https://github.com/anthropics/claude-code/pull/29668
- **内容**: 修复 `set -u` 下的数组未绑定导致的崩溃问题
- **状态**: OPEN

### 7. Fix GitHub Actions shell injection vulnerability
- **链接**: https://github.com/anthropics/claude-code/pull/29656
- **内容**: 修复 YAML 脚本中的 shell 注入漏洞
- **状态**: OPEN

### 8. edit redme.md
- **链接**: https://github.com/anthropics/claude-code/pull/29606
- **内容**: 文档更新
- **状态**: OPEN

---

## 功能需求趋势

| 方向 | 描述 | 相关 Issues |
|------|------|-------------|
| **MCP 协议扩展** | Elicitation 支持、per-teammate MCP 配置 | #2799, #23669 |
| **Agent Teams 增强** | 自定义 agent 定义、多工作目录支持 | #24316, #23669, #28520 |
| **多平台 UI/UX** | RTL 文本渲染、终端粘贴修复、VSCode 集成 | #3134, #29785, #29811 |
| **安全与权限** | 推送护栏、认证流程、卸载限制 | #29732, #11789, #26865 |
| **性能优化** | 内存泄漏修复、子进程清理 | #4953, #20369, #19045 |

---

## 开发者关注点

### 痛点（高频反馈）

1. **内存泄漏严重** — 多位开发者报告长时间运行后内存飙升至 120GB+，子进程未正确清理
2. **Token 输出限制** — 32000 token 上限无法满足复杂代码生成需求
3. **认证/授权繁琐** — 需要每小时重新登录、SSH 会话无法读取 Keychain
4. **安装/卸载体验** — Windows 安装跳转商店、付费账户才能卸载

### 需求（社区期待）

1. **MCP Elicitation** — 让 MCP 服务器能主动请求用户输入
2. **Agent Teams 多工作目录** — 支持团队成员独立配置工作环境
3. **自定义 Agent 定义** — 扩展 .claude/agents/ 能力
4. **RTL 全面支持** — 修复 Hebrew/Arabic 文本显示
5. **推送安全护栏** — 防止敏感代码泄露

---

*日报生成时间: 2026-03-01 | 数据来源: github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# 2026-03-01 OpenAI Codex 社区动态日报

## 今日速览

WebSocket 连接问题持续发酵，多个平台（Linux/Windows/macOS）出现 1008 Policy 错误导致回退至 HTTPS；远程开发功能请求获得最高关注度（217 赞），社区强烈呼吁 Codex Desktop App 支持 SSH/Remote Hosts；团队协作功能正在积极开发中，原生团队命令和任务工具 PR 已提交。

---

## 社区热点 Issues（Top 10）

| # | Issue | 关键信息 | 重要性 |
|---|-------|---------|--------|
| 1 | **[WebSocket 升级成功后服务器关闭 (1008 Policy)](https://github.com/openai/codex/issues/13041)** | 32 评论 / 31 赞 - 多平台（Arch Linux）WebSocket 传输在升级后立即被服务器关闭，触发回退机制 | ⭐⭐⭐ 影响核心连接稳定性 |
| 2 | **[远程开发支持 (SSH/Remote Hosts)](https://github.com/openai/codex/issues/10450)** | 29 评论 / 217 赞 - 功能请求：希望 Desktop App 支持远程开发，呼声极高 | ⭐⭐⭐ 最高赞功能请求 |
| 3 | **[沙盒内 GPU 访问](https://github.com/openai/codex/issues/3141)** | 28 评论 / 32 赞 - Linux 沙盒阻断 NVIDIA GPU 访问 | ⭐⭐ 开发者性能需求 |
| 4 | **[CLI 401 未授权错误](https://github.com/openai/codex/issues/12764)** | 28 评论 - codex-cli 0.104.0 认证失败 | ⭐⭐ 认证问题影响使用 |
| 5 | **[手动 /compact 命令](https://github.com/openai/codex/issues/11325)** | 21 评论 / 21 赞 - CLI 支持但 App 缺失的功能 | ⭐ 功能增强需求 |
| 6 | **[v26.227.1448 流式 UI 回归问题](https://github.com/openai/codex/issues/13106)** | 18 评论 / 18 赞 - 应用聚焦时流式更新不渲染 | ⭐⭐ 桌面端回归 bug |
| 7 | **[XDG Base Desktop 规范遵循](https://github.com/openai/codex/issues/1980)** | 16 评论 / 65 赞 - Linux 数据存储路径应遵循 XDG 规范 | ⭐ 跨平台兼容性 |
| 8 | **[Windows 重复命令执行批准](https://github.com/openai/codex/issues/10187)** | 6 评论 - 尽管设置了自动批准仍频繁弹窗 | ⭐ 用户体验问题 |
| 9 | **[模型选择不显示 Spark 模型](https://github.com/openai/codex/issues/13126)** | 5 评论 - 已关闭 | UI 显示问题 |
| 10 | **[速率限制导致使用量下降 2-4 倍](https://github.com/openai/codex/issues/13167)** | 2 评论 - 用户反馈令牌消耗异常 | ⭐ 服务稳定性 |

---

## 重要 PR 进展（Top 10）

| # | PR | 功能/修复内容 | 状态 |
|---|-----|-------------|------|
| 1 | **[#13156](https://github.com/openai/codex/pull/13156) 添加原生团队命令 + Shift+Down 代理选择器** | TUI 新增 `/team` 斜杠命令和快捷键 | OPEN |
| 2 | **[#13155](https://github.com/openai/codex/pull/13155) 持久化原生团队并添加团队任务工具** | TeamRegistry + task_create/list/get/update 工具 | OPEN |
| 3 | **[#13157](https://github.com/openai/codex/pull/13157) 添加本地代理团队 README 说明** | 文档更新 | OPEN |
| 4 | **[#12864](https://github.com/openai/codex/pull/12864) 插件加载支持** | config.toml 插件配置，PluginsManager 集成 | OPEN |
| 5 | **[#13096](https://github.com/openai/codex/pull/13096) 回滚重建可恢复** | RolloutReconstructionState 支持断点续传 | OPEN |
| 6 | **[#12293](https://github.com/openai/codex/pull/12293) 请求用户输入支持中断时部分提交** | Esc/Ctrl-C 可提交已确认答案 | OPEN |
| 7 | **[#11841](https://github.com/openai/codex/pull/11841) 修复 Apps 模式下 MCP 工具丢失** | 保留非 codex_apps MCP 工具 | CLOSED |
| 8 | **[#12951](https://github.com/openai/codex/pull/12951) OSC-52 支持 /copy** | SSH 环境下复制支持 | OPEN |
| 9 | **[#13100](https://github.com/openai/codex/pull/13100) 修复 macOS 浏览器 MCP 调用恢复** | 传输失败后重试机制 | CLOSED |
| 10 | **[#13053](https://github.com/openai/codex/pull/13053) 技能权限与沙盒合并** | 技能脚本默认合并当前沙盒权限 | OPEN |

---

## 功能需求趋势分析

基于当日 Issues 聚类分析，社区关注的核心方向如下：

| 方向 | 热度 | 具体需求 |
|------|------|----------|
| **远程开发** | ⭐⭐⭐ | SSH/Remote Hosts 支持（#10450 最高赞） |
| **协作功能** | ⭐⭐⭐ | 团队协作、原生代理团队（PR #13155/56 积极开发） |
| **连接稳定性** | ⭐⭐⭐ | WebSocket 多平台问题（#13041, #13168, #13169） |
| **GPU/性能** | ⭐⭐ | 沙盒内 GPU 访问（#3141） |
| **平台规范** | ⭐ | Linux XDG 规范遵循（#1980） |
| **CLI 增强** | ⭐ | /compact 命令（#11325）、自定义 personality（#11538） |
| **MCP 扩展** | ⭐ | 环境变量扩展（#2680）、插件系统（PR #12864） |

---

## 开发者关注点

1. **连接与认证问题**
   - WebSocket 在各平台的不稳定表现是最大痛点，多个 Issue 反馈回退至 HTTPS
   - CLI 401 错误影响认证流程

2. **远程开发刚需**
   - 远程开发支持是社区最期待的功能，217 赞远超其他功能请求
   - 与 VS Code Remote 机制对齐是核心诉求

3. **回归问题**
   - v26.227.1448 引入的流式 UI 回归受关注（18 评论）
   - Windows 权限弹窗重复问题仍未完全解决

4. **团队协作**
   - 原生团队功能正在积极开发，PR 已覆盖团队持久化、任务管理、快捷键等
   - 预计将成为下一个重点迭代方向

5. **平台兼容性**
   - Windows EOL 处理、macOS 自动化权限、Linux XDG 规范等问题反映跨平台细节打磨需求

---

*本日报基于 2026-03-01 GitHub 公开数据整理*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-03-01)

## 📰 今日速览

2026年3月1日，Gemini CLI 社区继续保持活跃。**ReadFiles 不一致行为**成为今日最热话题（10条评论），非交互模式下的策略引擎问题也持续引发讨论。社区在测试完善、IDE集成、远程代理等方向均有重要贡献。

---

## 🚀 版本发布

**暂无新版本发布**

过去24小时内无 Release 更新。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 重要性分析 |
|---|-------|------------|
| 1 | **[#20521](https://github.com/google-gemini/gemini-cli/issues/20521) ReadFiles 不一致行为** | ⭐⭐⭐⭐⭐ 核心功能问题，ReadFiles 有时失败导致回退到 cat，影响代码调试和生成质量 |
| 2 | **[#16012](https://github.com/google-gemini/gemini-cli/issues/16012) 非交互模式 --allowed-tools 策略失败** | ⭐⭐⭐⭐⭐ P2优先级，导致 "denied by policy" 错误，影响自动化场景 |
| 3 | **[#20142](https://github.com/google-gemini/gemini-cli/issues/20142) AskUser 支持 ctrl+r 搜索历史** | ⭐⭐⭐⭐ 用户高频需求，提升聊天体验 |
| 4 | **[#15749](https://github.com/google-gemini/gemini-cli/issues/15749) 认证显示成功但实际失败** | ⭐⭐⭐⭐ 认证流程存在 bug，影响用户使用 |
| 5 | **[#20618](https://github.com/google-gemini/gemini-cli/issues/20618) Stats/Usage 重置异常** | ⭐⭐⭐ 用户配额显示不一致，需调查配额重置逻辑 |
| 6 | **[#20749](https://github.com/google-gemini/gemini-cli/issues/20749) VS Code IDE 添加选中文本周围上下文** | ⭐⭐⭐ IDE 集成改进，提升代码理解能力 |
| 7 | **[#20540](https://github.com/google-gemini/gemini-cli/issues/20540) Generalist Sub-agent 不可用** | ⭐⭐⭐ 子代理功能问题 |
| 8 | **[#20302](https://github.com/google-gemini/gemini-cli/issues/20302) Remote Agents Epic - Sprint 1** | ⭐⭐⭐ 远程代理基础设施 P0 级工作流 |
| 9 | **[#19514](https://github.com/google-gemini/gemini-cli/issues/19514) Plan 模式下 AskUser 显示原始标签** | ⭐⭐ 计划模式下的 UI 渲染问题 |
| 10 | **[#18953](https://github.com/google-gemini/gemini-cli/issues/18953) 执行复杂 Shell 命令性能问题** | ⭐⭐ P2优先级 UX 问题，执行速度比直接运行慢100倍 |

---

## 🔧 重要 PR 进展（Top 10）

| # | PR | 功能/修复内容 |
|---|-----|---------------|
| 1 | **[#20759](https://github.com/google-gemini/gemini-cli/pull/20759) test(core): add missing tests for errorClassification** | 为 `classifyFailureKind` 添加完整单元测试，覆盖4个分支 |
| 2 | **[#20758](https://github.com/google-gemini/gemini-cli/pull/20758) fix(cli): enable skipped cleanupExpiredSessions error handling test** | 启用之前跳过的测试，修复 vi.mock 问题 |
| 3 | **[#20757](https://github.com/google-gemini/gemini-cli/pull/20757) fix(test): use for...of instead of for...in** | 修复数组迭代 bug，for...in 遍历的是索引而非值 |
| 4 | **[#20754](https://github.com/google-gemini/gemini-cli/pull/20754) feat(vscode): add custom commands to context menu** | VS Code 集成：将 ~/.gemini/commands/*.toml 暴露为命令 |
| 5 | **[#20259](https://github.com/google-gemini/gemini-cli/pull/20259) fix: prevent spam loop when preferredEditor is invalid** | 修复无效编辑器配置导致的无限 spam 问题 |
| 6 | **[#19173](https://github.com/google-gemini/gemini-cli/pull/19173) fix(core): fallback to child_process for WSL Windows binaries** | 修复 WSL 下运行 Windows 二进制文件的挂起问题 |
| 7 | **[#19954](https://github.com/google-gemini/gemini-cli/pull/19954) feat(core): enable live streaming for discovered tools** | 为发现工具启用实时输出流和 stderr 转播 |
| 8 | **[#20108](https://github.com/google-gemini/gemini-cli/pull/20108) fix: fatal hard-crash on loop detection** | 修复循环检测导致的进程崩溃问题 |
| 9 | **[#20750](https://github.com/google-gemini/gemini-cli/pull/20750) Fix(accessibility): add screen reader support to RewindViewer** | 无障碍改进：为 /rewind 命令添加屏幕阅读器支持 |
| 10 | **[#20752](https://github.com/google-gemini/gemini-cli/pull/20752) fix(core): Resolve TOCTOU Data Loss Race Condition** | 修复 MemoryTool 中的 TOCTOU 竞态条件漏洞 |

---

## 📈 功能需求趋势

基于 Issue 分析，社区最关注的功能方向：

| 方向 | 热度 | 具体表现 |
|------|------|----------|
| **IDE 集成增强** | 🔥🔥🔥 | VS Code 上下文菜单、自定义命令、文本选择上下文 |
| **非交互/头模式** | 🔥🔥🔥 | 策略引擎支持、会话持久化、stats 输出 |
| **远程代理** | 🔥🔥🔥 | Sprint 1-3 持续推进，认证、后台操作、子代理 |
| **子代理能力** | 🔥🔥 | 本地子代理、通用子代理可用性、文档完善 |
| **无障碍访问** | 🔥🔥 | 屏幕阅读器支持、历史搜索（ctrl+r） |
| **性能优化** | 🔥🔥 | Shell 命令执行速度、内存溢出问题 |

---

## 🎯 开发者关注点

### 痛点反馈

1. **核心功能不稳定**：ReadFiles 行为不一致导致用户体验波动
2. **非交互模式支持不完善**：策略引擎、allowed-tools 在 headless 模式下失效
3. **认证流程问题**：显示成功但实际失败，需要更好的错误诊断

### 高频需求

- **更好的调试能力**：Agent 输出截断改为 tail 模式
- **会话管理**：跨文件夹恢复会话、空会话持久化
- **测试覆盖率**：多个 PR 聚焦于补充缺失的单元测试

### 积极信号

- 远程代理基础设施建设正在稳步推进（Sprint 1-3）
- 社区贡献活跃，多个 first-time contributors 提交 PR
- 无障碍和国际化改进受到重视

---

*本日报由 AI 技术分析师生成，数据来源：github.com/google-gemini/gemini-cli*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**2026-03-01**

---

## 1. 今日速览

今日社区活跃度较为平淡，无新版本发布。Issue 区新增 4 条反馈，主要集中在 Bug 报告和功能增强需求；Pull Request 区有 5 条更新，其中 1 条已关闭。社区反馈显示用户对 SSH 远程使用场景和 Task 并发执行稳定性较为关注。

---

## 2. 版本发布

本期无新版本发布。

---

## 3. 社区热点 Issues

> 共 4 条新 Issue 更新，以下为详情：

| 序号 | Issue | 类型 | 关注度 | 摘要 |
|:---:|------|------|:------|------|
| 1 | [#1293](https://github.com/MoonshotAI/kimi-cli/issues/1293) | 🐛 Bug | 🔶 中 | **远程 SSH 服务器上无法交流** - 在无图形界面且无法修改 DNS 配置的 SSH 环境下使用 Kimi CLI 时，无法正常通信。该问题影响服务器端开发场景。 |
| 2 | [#1292](https://github.com/MoonshotAI/kimi-cli/issues/1292) | 🐛 Bug | 🔶 中 | **调用 Task 时有时会卡住** - 在调用 Task 子任务时，部分子任务会卡住，疑似并发执行稳定性问题。涉及平台：Darwin 25.3.0 arm64。 |
| 3 | [#1287](https://github.com/MoonshotAI/kimi-cli/issues/1287) | ✨ Enhancement | 🔶 中 | **执行任务时无法为下一个任务写 prompt** - 当前任务执行期间，无法提前准备下一个任务的 prompt，输入字段被锁定。社区认为该需求可提升多任务连续执行效率。 |
| 4 | [#1276](https://github.com/MoonshotAI/kimi-cli/issues/1276) | 🐛 Bug | 🔷 低 | **@ 自动补全缺少文件** - 在 Linux 6.17.0-14-generic 环境下，@ 符号触发文件自动补全时部分文件缺失。版本：1.16.0，模型：kimi-k2.5。 |

---

## 4. 重要 PR 进展

> 共 5 条 PR 更新，以下为详情：

| 序号 | PR | 类型 | 状态 | 摘要 |
|:---:|------|------|:-----|------|
| 1 | [#1286](https://github.com/MoonshotAI/kimi-cli/pull/1286) | ✨ Feature | Open | **优先扫描浅层子文件夹用于补全** - 优化文件补全逻辑，优先查找浅层目录以提升响应速度。作者：@hongquan |
| 2 | [#1236](https://github.com/MoonshotAI/kimi-cli/pull/1236) | ✨ Feature | Open | **在创建 aiohttp.ClientSession 时启用 trust_env** - 支持代理环境变量，提升网络配置灵活性。作者：@CyCle1024 |
| 3 | [#1127](https://github.com/MoonshotAI/kimi-cli/pull/1127) | 🎨 Style | Open | **调整部分 Web UI 细节** - 优化前端界面细节体验。作者：@anxndsgn |
| 4 | [#743](https://github.com/MoonshotAI/kimi-cli/pull/743) | 🔧 Chore | Open | **更新 pyproject.toml 中的 uv_build 版本要求** - 依赖版本维护。作者：@jetjinser |
| 5 | [#173](https://github.com/MoonshotAI/kimi-cli/pull/173) | 🔧 Chore | Closed | **升级版本到 0.50** - 版本发布相关维护。作者：@stdrc |

---

## 5. 功能需求趋势

基于本期 Issue 和 PR 反馈，社区关注的功能方向如下：

| 方向 | 描述 | 热度 |
|------|------|:----:|
| **远程/服务器端支持** | SSH 环境下稳定运行、DNS/网络配置灵活性 | 🔥 |
| **并发任务处理** | Task 子任务执行稳定性、多任务流水线支持 | 🔥 |
| **代码补全增强** | @ 文件自动补全准确性、浅层目录优先扫描 | 🔶 |
| **网络配置** | 代理环境变量支持（trust_env） | 🔶 |
| **UI/UX 优化** | Web 界面细节打磨 | 🔷 |

---

## 6. 开发者关注点

1. **SSH 远程使用场景** - 多个开发者反馈在无图形界面的服务器环境下无法正常使用，问题可能与 DNS 或网络配置相关
2. **Task 并发执行稳定性** - 子任务调用时出现卡顿，影响多任务工作流体验
3. **代码补全准确性** - @ 符号文件自动补全功能存在遗漏问题
4. **多任务流水线** - 执行当前任务时无法提前准备下一个任务的 prompt，限制连续工作效率

---

*本日报由 AI 生成，数据截至 2026-03-01*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-03-01)

## 今日速览

今日 OpenCode 社区继续保持高度活跃，共新增 **50 条 Issues** 和 **50 条 Pull Requests**。最受关注的话题集中在 **GPT-5.3 Codex 模型支持**（104 点赞，13 评论）以及 **GitLab Duo Agent Platform (DAP) 集成**。同时，社区正在积极处理多个严重问题，包括 Linux 内存泄漏导致系统崩溃的 Critical 级别 Bug 和 Windows 平台的 Bun 兼容性问题。

---

## 社区热点 Issues

### 1. [FEATURE] 5.3 Codex for Github Copilot provider
- **链接**: https://github.com/anomalyco/opencode/issues/12954
- **重要性**: 社区热度最高，获得 104 点赞、13 条评论。用户迫切希望支持 GitHub Copilot 最新发布的 GPT-5.3 Codex 模型
- **标签**: `[OPEN]` `[discussion]` `[FEATURE]`

### 2. [Critical] Memory leak causes kernel soft lockups
- **链接**: https://github.com/anomalyco/opencode/issues/13230
- **重要性**: Critical 级别问题。单个进程内存膨胀至 116GB Virtual / 21GB RSS，导致 7/8 CPU 软锁、OOM 杀死，危害严重
- **标签**: `[OPEN]` `[perf]` `Critical`

### 3. Latest opencode update on latest Bun is unusable
- **链接**: https://github.com/anomalyco/opencode/issues/14734
- **重要性**: Windows + Bun 组合的严重兼容性问题，导致程序启动即崩溃（段错误），影响大量用户
- **标签**: `[CLOSED]` `[bug]` `[windows]` `[perf]`

### 4. integrate GitLab Duo Agent Platform (DAP) workflow models
- **链接**: https://github.com/anomalyco/opencode/issues/15560
- **重要性**: 新增 GitLab DAP 工作流模型集成，补全 GitLab 生态支持，已 Closed
- **标签**: `[CLOSED]` `[core]` `[feat]`

### 5. Can't copy text from opencode through mouse selection
- **链接**: https://github.com/anomalyco/opencode/issues/5046
- **重要性**: Windows Terminal 用户反馈强烈的体验问题，涉及 TUI 文本复制功能
- **标签**: `[OPEN]` `[bug]` `[opentui]`

### 6. BUG: exit code when an invalid model is passed
- **链接**: https://github.com/anomalyco/opencode/issues/15558
- **重要性**: CLI 行为不一致的 Bug，无效模型传入时仍返回退出码 0，影响自动化脚本
- **标签**: `[OPEN]` `[bug]` `[core]`

### 7. a weird nul file (Reserved device name on Windows)
- **链接**: https://github.com/anomalyco/opencode/issues/15480
- **重要性**: Windows 11 特有的文件名冲突问题，OpenCode 错误创建了 `nul` 保留设备文件
- **标签**: `[CLOSED]` `[bug]` `[windows]`

### 8. Claude OAuth token requires re-authentication after every usage limit reset
- **链接**: https://github.com/anomalyco/opencode/issues/15562
- **重要性**: OAuth 认证流程问题，用户需频繁重新授权，体验不佳
- **标签**: `[OPEN]` `[bug]` `[core]`

### 9. flickering in TUI when running in Ghostty terminal
- **链接**: https://github.com/anomalyco/opencode/issues/15580
- **重要性**: 新终端模拟器 Ghostty 的兼容性问题，TUI 闪烁影响使用
- **标签**: `[OPEN]` `[bug]` `[opentui]`

### 10. Auto-compaction infinite loop when assistant ended its turn
- **链接**: https://github.com/anomalyco/opencode/issues/15533
- **重要性**: 自动压缩逻辑缺陷，可能导致无限循环，严重影响会话稳定性
- **标签**: `[OPEN]` `[core]`

---

## 重要 PR 进展

| PR | 描述 | 链接 |
|---|---|---|
| **#15573** | feat: integrate GitLab Duo Agent Platform (DAP) workflow models | https://github.com/anomalyco/opencode/pull/15573 |
| **#15579** | refactor: restructure TUI args and navigation data handling | https://github.com/anomalyco/opencode/pull/15579 |
| **#15578** | feat(app): add compact UI | https://github.com/anomalyco/opencode/pull/15578 |
| **#15574** | feat(desktop): add /copy session transcript command | https://github.com/anomalyco/opencode/pull/15574 |
| **#14707** | fix: recover from 413 Request Entity Too Large via auto-compaction | https://github.com/anomalyco/opencode/pull/14707 |
| **#15501** | feat(vscode): Add ACP Chat Participant for VS Code | https://github.com/anomalyco/opencode/pull/15501 |
| **#15483** | fix: symlink path resolution causing duplicate instances | https://github.com/anomalyco/opencode/pull/15483 |
| **#14287** | fix(project): repair split project IDs across worktrees | https://github.com/anomalyco/opencode/pull/14287 |
| **#15563** | fix(app): enable Safari autocorrect in normal mode, disable in shell mode | https://github.com/anomalyco/opencode/pull/15563 |
| **#15538** | fix(provider): normalize openai-compatible schema required field | https://github.com/anomalyco/opencode/pull/15538 |

---

## 功能需求趋势

根据 Issues 标签和内容分析，社区当前关注的功能方向主要包括：

1. **新模型支持**
   - GitHub Copilot GPT-5.3 Codex
   - GitLab DAP 工作流模型
   - Routstr Provider
   - VS Code LM API 原生集成

2. **跨平台与终端兼容性**
   - Windows 平台问题（Bun 兼容性、nul 文件、复制功能）
   - Ghostty 终端 TUI 闪烁
   - Safari autocorrect 行为

3. **会话管理与体验**
   - /timeline 显示日期+时间
   - 会话重命名
   - 复制会话记录
   - 编辑器拒绝隐藏

4. **性能与稳定性**
   - 内存泄漏（Critical）
   - 自动压缩逻辑
   - 上下文压缩效率

---

## 开发者关注点

根据今日 Issues 反馈，开发者群体的核心关注点可归纳为：

1. **稳定性压倒一切** — Critical 级别的内存泄漏问题导致系统级崩溃，是当前最需优先解决的痛点

2. **Windows 生态兼容** — 多个 Windows 相关 Bug（ Bun 崩溃、nul 文件冲突、TUI 复制）反映出 Windows 平台仍需更多适配工作

3. **认证与授权流程** — Claude OAuth 频繁需要重新授权、Zen 模式支付方式错误等问题影响用户使用连续性

4. **自动恢复能力** — 413 错误自动恢复、上下文压缩、symlink 路径解析等改进表明开发者重视容错机制

5. **桌面端功能完善** — 多个 Desktop 相关 PR（会话重命名、复制 transcript）说明桌面端功能正在快速补全

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-03-01）

## 今日速览

v0.11.1 版本开发进入冲刺阶段，多项关键修复和功能增强正在合并。社区活跃度较高，今日新增 9 条 Issues 和 28 条 Pull Requests。值得关注的是，中文处理相关的 Bug 修复和认证流程 UX 优化成为近期开发重点。

---

## 版本发布

**v0.11.1 蓄势待发**

- 🔄 正在准备版本升级：PR #2026 将版本号从 0.11.0 提升至 0.11.1
- 预计近期发布，包含多项 Bug 修复和功能更新

---

## 社区热点 Issues

### 🔴 高优先级 Bug

1. **[#2032] 模型输出数字与汉字之间强制添加空格**
   - 严重程度：高 | 影响：导致文件名包含"数字+汉字"组合的文件无法读取
   - 摘要：用户报告使用 Qwen3.5-Plus 模型时，输出内容会在数字和汉字之间强制插入空格，即使明确要求不加空格也无法去除
   - 👉 https://github.com/QwenLM/qwen-code/issues/2032

2. **[#2025] 调用 skill 时自动添加空格导致无限循环**
   - 严重程度：高 | 影响：中文命名 skill 无法正常调用
   - 摘要：模型调用 skill 时会多加上一个空格，导致 lookup 失败进入无限循环；已通过 PR #2027 修复
   - 👉 https://github.com/QwenLM/qwen-code/issues/2025

3. **[#2020] PDF 文件读取失败后服务不可用**
   - 严重程度：高 | 影响：API 返回 400 错误后整个会话报废
   - 摘要：尝试读取 PDF 文件失败后，所有后续请求都返回 API Error: 400；已通过 PR #2028 修复
   - 👉 https://github.com/QwenLM/qwen-code/issues/2020

4. **[#1708] 无法使用 hooks**
   - 严重程度：中 | 影响：setting.json 中配置 hooks 无法识别
   - 摘要：用户在 settings.json 中配置 hooks 后无法正常使用
   - 👉 https://github.com/QwenLM/qwen-code/issues/1708

### 🟡 功能需求

5. **[#2016] /auth 对话框重构：将 Coding Plan 提升至顶层选项**
   - 摘要：当前 /auth 对话框为两级嵌套结构，计划改为扁平三选项布局，提升 Coding Plan 区域选择的 UX
   - 👉 https://github.com/QwenLM/qwen-code/issues/2016

6. **[#1983] 引导免费用户升级到 Coding Plan**
   - 摘要：当免费配额用尽时，错误提示应引导用户升级到阿里云百炼 Coding Plan，而非仅显示通用错误信息
   - 👍 1
   - 👉 https://github.com/QwenLM/qwen-code/issues/1983

7. **[#2023] VSCode Companion 支持 /insight 命令**
   - 摘要：目前 /insight 仅在 CLI 可用，VSCode 中调用返回 "command not supported"，计划添加支持
   - 👉 https://github.com/QwenLM/qwen-code/issues/2023

8. **[#2022] /insight 报告应尊重用户语言设置**
   - 摘要：当前的 /insight HTML 报告所有内容均为英文，应根据用户 UI 语言设置生成对应语言报告
   - 👉 https://github.com/QwenLM/qwen-code/issues/2022

9. **[#2033] 无法编辑工作空间外的文件**
   - 状态：已关闭
   - 👉 https://github.com/QwenLM/qwen-code/issues/2033

---

## 重要 PR 进展

### 🔧 核心功能增强

1. **[#1980] Modes Layer：实现专业代理配置文件**
   - 作者：@impulse22-ru
   - 内容：新增 @qwen-code/modes 包，包含 ModeManager、ToolRouter、PromptComposer；内置 6 种模式（Architect、Code、Ask、Debug、Review、Orchestrator）；添加 /mode 斜杠命令
   - 👉 https://github.com/QwenLM/qwen-code/pull/1980

2. **[#2030] [0.11.1] 优化 auth 对话框 UX**
   - 作者：@tanzhenxin
   - 内容：重新设计认证对话框为清晰的三选项布局，每种认证方式显示描述性标签（免费/付费、请求限制、可用模型）
   - 👉 https://github.com/QwenLM/qwen-code/pull/2030

3. **[#2031] 添加 VibeGuard 风格客户端脱敏**
   - 作者：@inkdust2021
   - 内容：在发送请求前自动脱敏配置的关键词/正则/内置模式，防止敏感信息/PII 发送给模型提供商
   - 👉 https://github.com/QwenLM/qwen-code/pull/2031

4. **[#1954] VSCode 辅助侧边栏支持**
   - 作者：@buaoyezz
   - 内容：支持在 VS Code 辅助侧边栏显示 Qwen Code 扩展，允许用户将聊天界面放置在次级侧边栏
   - 👉 https://github.com/QwenLM/qwen-code/pull/1954

5. **[#2018] 支持 AGENTS.md 作为默认上下文文件**
   - 作者：@LaZzyMan
   - 内容：新增对 AGENTS.md 的支持，与 QWEN.md 并列作为默认上下文文件，实现开箱即用的 AGENTS.md 标准兼容
   - 👉 https://github.com/QwenLM/qwen-code/pull/2018

### 🐛 关键 Bug 修复

6. **[#2028] fix(gemini): 将 PDF 转换为文本以防止 API 错误** ✅ 已关闭
   - 作者：@echoVic
   - 修复：解决了 #2020，Gemini API 不支持 PDF 文件直接上传，转换后解决问题
   - 👉 https://github.com/QwenLM/qwen-code/pull/2028

7. **[#2027] fix(tools): 去除 skill 名称空白符** ✅ 已关闭
   - 作者：@echoVic
   - 修复：解决了 #2025，在 validateToolParams 中 trim skill 名称
   - 👉 https://github.com/QwenLM/qwen-code/pull/2027

8. **[#2029] fix(tools): 为 shell 工具添加 bash/sh 别名**
   - 作者：@echoVic
   - 修复：模型常使用 bash 或 sh 而非注册的 run_shell_command，导致工具找不到
   - 👉 https://github.com/QwenLM/qwen-code/pull/2029

9. **[#2021] fix: 检测并保护被截断的工具调用输出**
   - 作者：@sundapeng
   - 修复：当 LLM 输出达到 max_tokens 时，JSON 可能被截断；部分提供商误报 finish_reason 为 "stop" 而非 "length"
   - 👉 https://github.com/QwenLM/qwen-code/pull/2021

10. **[#2007] fix: 清理终端输出中的控制字符**
    - 作者：@tengfeiwang1
    - 修复：解决 Windows 风格行结尾 (\r\n) 或单独 \r 导致的终端界面错位问题
    - 👉 https://github.com/QwenLM/qwen-code/pull/2007

### 📚 体验优化

11. **[#2005] feat(i18n): 强化 output-language.md 模板**
    - 作者：@zhangxy-zju
    - 将软性偏好改为强制规则（"You MUST always respond"），解决多轮对话中语言不一致问题

12. **[#1993] fix(subagent): 追加 output-language.md 到 subagent**
    - 作者：@zhangxy-zju
    - 修复 SubAgent 缺少全局用户内存上下文的问题，支持项目级设置覆盖

13. **[#1975] feat(cli): 添加 mcp enable/disable 命令**
    - 作者：@sherman-yang
    - 新增 qwen mcp enable/disable 命令，支持 --scope user|project

---

## 功能需求趋势

| 方向 | 相关 Issue/PR | 热度 |
|------|---------------|------|
| **IDE 集成增强** | #1954（辅助侧边栏）、#2023（VSCode /insight） | ⭐⭐⭐ |
| **国际化/多语言** | #2022（insight 报告语言）、#2005（输出语言强化） | ⭐⭐⭐ |
| **认证/订阅流程** | #2016、#1983、#2030 | ⭐⭐⭐ |
| **中文处理优化** | #2032、#2025、#2027 | ⭐⭐⭐ |
| **安全/脱敏** | #2031 | ⭐⭐ |
| **SubAgent 能力** | #1782、#1993、#2001 | ⭐⭐ |
| **文件操作增强** | #2033 | ⭐ |

---

## 开发者关注点

### 🔥 痛点问题

1. **中文语言处理缺陷**：多个 Issue 反馈模型输出时在数字与汉字、中文命名 skill 时添加多余空格，严重影响使用
2. **PDF 等二进制文件处理不稳定**：API 错误后会话状态损坏
3. **认证流程复杂**：免费用户配额用尽后缺乏明确引导

### 💡 高频需求

1. **UX 优化**：认证对话框、VSCode 集成、侧边栏布局
2. **国际化**：报告和界面尊重用户语言设置
3. **SubAgent 精细化控制**：技能可见性配置、系统提示词限制文档
4. **安全增强**：客户端敏感信息脱敏

---

*数据来源：github.com/QwenLM/qwen-code | 统计周期：2026-03-01 过去 24 小时*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*