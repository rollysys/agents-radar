# AI CLI 工具社区动态日报 2026-03-10

> 生成时间: 2026-03-10 02:21 UTC | 覆盖工具: 6 个

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

**报告日期：2026-03-10 | 覆盖工具：Claude Code、OpenAI Codex、Gemini CLI、Kimi Code CLI、OpenCode、Qwen Code**

---

## 一、生态全景

当前 AI CLI 工具生态呈现 **“三极主导、多元追赶”** 的格局：Claude Code 凭借工具生态和插件系统占据企业级应用高地，OpenAI Codex 聚焦开发者体验和 IDE 深度集成，Gemini CLI 则以高频版本迭代快速补齐功能短板。Kimi Code CLI、OpenCode 与 Qwen Code 三个中国背景项目分别围绕 MCP 协议、桌面端体验和本地模型支持形成差异化切口。六方均在**跨平台兼容性、认证机制、内存性能**三个维度面临相似的技术挑战，但解决路径各异。

---

## 二、各工具活跃度对比

| 工具 | 今日 Release | Issue 总量（更新） | PR 总量（更新） | 核心热点 |
|------|-------------|-------------------|----------------|----------|
| **Claude Code** | v2.1.72 | 10 条重点 Issue（Top2 累计 167+ 评论） | 9 条重点 PR | 内存泄漏、额度计算错误、工具搜索优化 |
| **OpenAI Codex** | rust-v0.113.0-alpha.2 | 10 条重点 Issue（Top1 98 评论） | 10 条重点 PR | CLI 挂起、敏感文件排除、401 认证错误 |
| **Gemini CLI** | v0.33.0-preview.6~10（5 个版本） | 10 条重点 Issue（最高 8 评论） | 10 条重点 PR | 计划模式截断、Windows 原生沙箱、压缩持久化 |
| **Kimi Code CLI** | v1.18.0 | 8 条 Issue（3 条 P0） | 15 条 PR（6 条已合并） | 代理配置失效、文件提及回退、ACP 终端报错 |
| **OpenCode** | v1.2.24 | 50 条更新（10 条重点） | 50 条更新（10 条重点） | TUI tmux 兼容性、内存泄漏、OAuth 失败 |
| **Qwen Code** | v0.12.0 | 27 条更新（10 条重点） | 20 条更新（10 条重点） | 空格键输入失效、YOLO 模式行为、Provider 重构 |

**关键数据洞察：**

- **版本发布最激进**：Gemini CLI 单日发布 5 个预览版本，迭代速度领先
- **Issue 讨论最活跃**：Claude Code 的 #19673（84% 额度耗尽）以 98 评论领跑社区互动
- **PR 产出最高**：Kimi Code CLI（15 条）、OpenCode（50 条）、Qwen Code（20 条）贡献最活跃
- **Issue 总量最大**：OpenCode 单日更新 50 条 Issue，显示出极高的社区活跃度或维护压力

---

## 三、共同关注的功能方向

### 1. 跨平台兼容性（全员关注）

| 工具 | 具体问题 |
|------|----------|
| Claude Code | excludedCommands 在 Linux 不生效、WSL 路径处理错误 |
| OpenAI Codex | WSL 配置覆盖问题、config.toml 路径错误、Windows Markdown 链接 |
| Gemini CLI | Windows 原生沙箱（PR #21807）、exit_plan_mode 策略处理 |
| Kimi Code CLI | Linux 代理配置失效、HTTP Header 特殊字符、IPv6 连接 |
| OpenCode | Windows 证书验证失败、tmux 中 TUI 损坏、aarch64 Linux release |
| Qwen Code | Windows CRLF/BOM 解析、引号命令执行失败、Mac 快捷键适配 |

**趋势解读**：跨平台兼容性是所有工具的必修课，其中 **Windows/WSL 生态** 和 **Linux 终端环境**（tmux、proxy、权限）是重灾区。

### 2. 认证与授权机制（5/6 工具涉及）

- **Claude Code**：excludedCommands、管道命令权限分离
- **OpenAI Codex**：401 未授权、令牌刷新失败（#9634）、OAuth 回调失败（#16281）
- **Kimi Code CLI**：代理配置导致登录失败
- **OpenCode**：MCP OAuth 首次连接失败、OpenAI OAuth 403 错误
- **Qwen Code**：认证超时问题长期存在（#784）

### 3. 内存与性能优化（4/6 工具涉及）

| 工具 | 问题描述 |
|------|----------|
| Claude Code | 内存泄漏至 120GB+（#4953） |
| OpenAI Codex | 服务端压缩（server_side_compaction）PR 推进中 |
| OpenCode | 多来源内存泄漏，长期使用 RAM 无限增长（#16697） |
| Qwen Code | 检测到高内存占用 7.83GB（#2223） |

### 4. 认证/计费透明度（2/6 工具特有问题）

- **Claude Code**：84% 使用率却提示限额耗尽（#19673，98 评论）
- **Qwen Code**：DashScope API 429 限流持续 3+ 天（#2191）

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|----------|----------|----------|
| **Claude Code** | 工具生态 + 企业级 | 大型企业、深度开发者 | MCP 协议、plugins 架构、CLAUDE.md 规范 |
| **OpenAI Codex** | IDE 集成 + 开发者效率 | VS Code/JetBrains 用户 | Rust 重构、code_mode 隔离执行、敏感文件排除 |
| **Gemini CLI** | 快速迭代 + 云原生 | Google 生态用户 | 计划模式、语音交互、Windows Sandbox |
| **Kimi Code CLI** | 编辑器集成 + 多模型 | Zed/VS Code 中文用户 | ACP 协议、Anthropic 兼容层、多 Provider |
| **OpenCode** | 桌面端 + 本地模型 | 本地 LLM 用户 | TUI/Desktop 双轨、LM Studio/Ollama 支持、插件系统 |
| **Qwen Code** | 本地部署 + 多模型对比 | 国内开发者 | Arena 多模型对比、Provider V4 重构、Hooks 事件系统 |

**差异化亮点：**

- **Claude Code** 在插件生态（Paper Writing、cc-taskrunner）和企业功能（Bedrock 认证）上领先一代
- **OpenCode** 是唯一同时投入 TUI 和 Desktop 双端的产品，且对本地模型支持最完善
- **Qwen Code** 的 Arena 功能（多模型并行对比）是独特创新点
- **Kimi Code CLI** 的 Vim 风格导航（j/k）和剪贴板视频粘贴填补了终端交互空白

---

## 五、社区热度与成熟度

### 成熟度梯队

| 梯队 | 工具 | 判断依据 |
|------|------|----------|
| **第一梯队** | Claude Code / OpenAI Codex | Issue 评论数最高（98 条量级）、长期问题持续跟踪（多个月度 Issue）、稳定版本节奏 |
| **第二梯队** | Gemini CLI / OpenCode | Issue 总量大（50 条/日）、功能快速迭代、但单 Issue 讨论深度较低 |
| **第三梯队** | Qwen Code / Kimi Code CLI | 功能快速交付（版本频发）、但 Issue 讨论量和长期维护问题积累相对较少 |

### 社区活跃度

- **最活跃**：OpenCode（50 条 Issue + 50 条 PR 日更新）、Claude Code（高评论互动）
- **最高产**：Kimi Code CLI（15 条 PR）、OpenCode（50 条 PR）
- **迭代最快**：Gemini CLI（5 个预览版/日）、Qwen Code（v0.12.0→v0.12.1 准备中）

---

## 六、值得关注的趋势信号

### 1. MCP 协议走向标准化

Claude Code 的 MCP 生态（#32661 插件市场）和 OpenCode 的 MCP OAuth 修复（#15547）表明，**MCP 正在成为 AI CLI 工具的标配协议**。开发者如需扩展第三方工具集成，应优先考虑 MCP 而非私有协议。

### 2. 本地模型支持成为新战场

OpenCode（LM Studio、Ollama）、Qwen Code（多 Provider）、Kimi Code CLI（Azure Kimi、Google GenAI）均在本地部署场景布局。**“模型中立”** 成为差异化路线——不绑定单一 API 提供商。

### 3. 计划/审批模式从 Claude Code 向外扩散

Gemini CLI 的计划审批对话框修复（#20716）和 Claude Code 的会话限额继续操作需求（#13354）表明，**AI 自动执行前的用户确认机制正在成为行业标配**，这对企业安全合规至关重要。

### 4. 终端交互体验进入精细化竞争

- Vim 风格导航（Kimi Code CLI #1377）
- TUI 工作区支持（OpenCode v1.2.24）
- Tab 键阻断（Qwen Code #2211）
- 链接可点击性（OpenCode #1168，长期 49 赞）

**趋势**：CLI 工具正从“能用”向“好用”转型，终端交互细节成为产品差异化的重要维度。

### 5. 对开发者的参考建议

| 场景 | 推荐工具 | 理由 |
|------|----------|------|
| **企业级项目 / 复杂工作流** | Claude Code | 插件生态最成熟、工具链完整 |
| **VS Code 重度用户** | OpenAI Codex | IDE 集成最紧密、code_mode 隔离安全 |
| **本地 LLM 实验** | OpenCode | LM Studio/Ollama 原生支持、TUI+Desktop 双端 |
| **多模型对比评估** | Qwen Code | Arena 功能独家、Provider 配置灵活 |
| **中文开发者 / Zed 用户** | Kimi Code CLI | Zed ACP 深度集成、Vim 交互习惯 |
| **快速原型 / Google 生态** | Gemini CLI | 版本迭代快、功能实验性强 |

---

*本报告基于 2026-03-10 公开数据生成，仅供技术决策参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-03-10 | 来源：github.com/anthropics/skills**

---

## 1. 热门 Skills 排行

| # | PR | 功能概述 | 讨论热点 | 状态 |
|---|-----|---------|---------|------|
| 1 | **[#514 document-typography](https://github.com/anthropics/skills/pull/514)** | 文档排版质量控制：防止孤儿行、寡妇段落、编号错位等 AI 文档常见问题 | 聚焦"每份 Claude 生成的文档都会受影响"的普遍痛点 | OPEN |
| 2 | **[#210 frontend-design](https://github.com/anthropics/skills/pull/210)** | 重构前端设计技能，提升清晰度、可操作性和内部一致性 | 确保每条指令可在单次对话内执行，指南需足够具体以引导行为 | OPEN |
| 3 | **[#83 skill-quality/security-analyzer](https://github.com/anthropics/skills/pull/83)** | 技能质量分析 + 安全分析两个元技能，覆盖结构、文档、权限等维度 | 填补 Skills 市场质量保障空白 | OPEN |
| 4 | **[#154 shodh-memory](https://github.com/anthropics/skills/pull/154)** | AI 代理持久化内存系统：跨会话维护上下文 | 解决"Claude Code 每次会话重置上下文"的长期痛点 | OPEN |
| 5 | **[#486 ODT skill](https://github.com/anthropics/skills/pull/486)** | OpenDocument 文本创建、模板填充、ODT 转 HTML | 扩展文档格式支持，覆盖 LibreOffice/OpenOffice 用户 | OPEN |
| 6 | **[#521 record-knowledge](https://github.com/anthropics/skills/pull/521)** | 知识记录技能：将发现持久化到 `.claude/knowledge/` | 配合 shodh-memory，实现跨会话知识传承 | OPEN |
| 7 | **[#522 plan-task](https://github.com/anthropics/skills/pull/522)** | 任务计划持久化：多步骤计划及进度跨会话保存 | 解决多步骤工作流无法跨越会话的痛点 | OPEN |
| 8 | **[#299 google-workspaces](https://github.com/anthropics/skills/pull/299)** | 6 个 GOG CLI 技能：邮件分类、草稿、日历、任务管理 | 企业级个人助理能力延伸 | OPEN |

---

## 2. 社区需求趋势

从 Issues 中提炼出以下核心诉求：

| 方向 | 典型 Issue | 需求说明 |
|------|------------|---------|
| **🔧 技能质量与安全** | #202、#83 | skill-creator 应遵循最佳实践；需质量分析 + 安全分析元技能 |
| **💾 跨会话持久化** | #521、#522、#154 | 内存、知识、任务计划均需跨会话保留（高优先级） |
| **📄 文档格式扩展** | #514、#486 | 排版质量控制 + ODT 支持，反映深度文档处理需求 |
| **🏢 企业集成** | #181、#299 | SAP 预测分析 + Google Workspace，连接主流企业工具 |
| **🔐 安全与权限** | #492 | 社区技能伪装官方命名空间，存在信任边界滥用风险 |
| **🔌 MCP 暴露** | #16、#369 | 期待 Skills 能以 MCP 形式暴露 API |
| **⚙️ 基础设施** | #62、#61、#406 | 技能加载/上传/删除等核心功能的稳定性问题 |

---

## 3. 高潜力待合并 Skills

以下 PR 评论/关注度较高或修复关键问题，有望近期合并：

| PR | 亮点 | 潜在价值 |
|----|------|----------|
| **[#509 CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** | 填补社区健康指标空白，提升贡献体验 | 低门槛、高影响 |
| **[#362 skill-creator UTF-8 panic fix](https://github.com/anthropics/skills/pull/362)** | 修复多字节字符导致 Rust panic 的严重 bug | 基础能力修复 |
| **[#361 YAML special characters detection](https://github.com/anthropics/skills/pull/361)** | 预防 YAML 解析静默错误 | 质量保障 |
| **[#284 UTF-8 encoding fix](https://github.com/anthropics/skills/pull/284)** | 跨平台兼容性修复 | 基础能力修复 |
| **[#143 docx whitespace preservation](https://github.com/anthropics/skills/pull/143)** | 保持 Word 文档原始格式 | 文档处理增强 |

---

## 4. Skills 生态洞察

> **一句话总结：社区当前最集中的诉求是——让 Claude Code 具备「跨会话记忆」能力，同时提升 Skills 本身的「质量与安全」标准。**

具体表现为：
- **3 个 Skills 直接解决持久化问题**（shodh-memory、record-knowledge、plan-task）
- **文档处理成为细分热点**（typography、ODT、docx）
- **企业工具集成需求旺盛**（SAP、Google Workspace）
- **Skill 创建工具本身需优化**（UTF-8、YAML、API Key 依赖）

---

*报告生成时间：2026-03-10 | 数据来源：anthropics/skills GitHub 仓库*

---

# Claude Code 社区动态日报 (2026-03-10)

## 今日速览

今日 Claude Code 社区活跃度较高：v2.1.72 版本发布带来工具搜索和文件写入的优化；Issue 区涌现多个高关注度问题，其中「使用限额已达84%却提示限额耗尽」和「内存泄漏导致120GB+」持续引发热议；社区贡献的 9 个 PR 涵盖文档完善、插件开发等多个方向。

---

## 版本发布

### v2.1.72 发布

**更新内容：**

- 🔧 **工具搜索优化**：当设置环境变量时，工具搜索绕过第三方代理网关（同时移除了 `CLAUDE_CODE_PROXY_SUPPORTS_TOOL_REFERENCE` 变量）
- ✍️ **`/copy` 命令增强**：新增 `w` 键，可将焦点选择内容直接写入文件，绕过剪贴板（在 SSH 等场景下尤为实用）

---

## 社区热点 Issues

### Top 10 值得关注的问题

| # | Issue | 关键信息 | 热度 |
|---|-------|---------|-----|
| 1 | **[BUG] You've hit your limit while usage at 84%** (#19673) | 用户会话仅使用84%却频繁收到限额耗尽提示，影响 macOS 平台 API 使用 | 98 评论 / 72 👍 |
| 2 | **[BUG] Memory Leak - Process Grows to 120+ GB RAM** (#4953) | 严重内存泄漏问题，Linux 环境下进程膨胀至120GB+后被 OOM 杀死 | 69 评论 / 59 👍 |
| 3 | **[FEATURE] Continue when session limit reached** (#13354) | 请求在达到会话限额后支持继续操作的功能 | 23 评论 / 32 👍 |
| 4 | **[FEATURE] AWS Bedrock authentication support** (#16128) | Chrome 扩展支持 AWS Bedrock 认证的需求 | 17 评论 / 79 👍 |
| 5 | **[BUG] excludedCommands doesn't work** (#10524) | Linux 平台下 excludedCommands 设置不生效 | 12 评论 / 20 👍 |
| 6 | **[BUG] Permission prompt on cd instead of command** (#28240) | Windows 平台复合 bash 语句中权限提示位置错误 | 11 评论 / 10 👍 |
| 7 | **[FEATURE] Support @include for CLAUDE.md** (#13614) | 支持 CLAUDE.md 文件的 @include 指令以实现复用 | 4 评论 / 2 👍 |
| 8 | **[META] Systematic completion-integrity failures** (#32650) | 汇总 16 个完成度完整性问题，涉及 6 个阶段 | 4 评论 |
| 9 | **[BUG] Cowork fails with HCS 0x800707de** (#32172) | Windows 11 + virtiofs/Plan9 挂载错误后 Cowork 失败 | 3 评论 |
| 10 | **[BUG] Plugin marketplace creates Windows paths in WSL2** (#32661) | WSL2 环境下插件市场在工作目录创建 Windows 风格路径 | 3 评论 |

---

## 重要 PR 进展

### 近期合并/关注的 PR

| PR | 内容概述 |
|----|---------|
| **#32408** - Paper Writing Plugin | 新增论文写作插件，提供 6 阶段学术论证工作流，含主命令、3 个专业 Agent |
| **#32629** - cc-taskrunner plugin | 新增自主任务队列插件，支持无人值守任务执行、分支隔离 |
| **#32625** - CLAUDE.md for repo | 为 Claude Code 仓库添加 CLAUDE.md 开发指南 |
| **#32430** - Plugin examples clarification | 明确 plugins 目录下的插件为示例性质，非内置功能 |
| **#32488** - Dedupe workflow improvement | 改进重复评论检测工作流和插件元数据一致性 |
| **#17776** - security-guidance plugin README | 为安全指南插件添加文档 |
| **#28850** - Windows install requires PowerShell | 明确 Windows 安装需在 PowerShell 而非 CMD 中执行 |
| **#32142** - Usage transparency plugin | 新增配额排查透明插件 |
| **#31543** - Piped commands permission | 说明管道命令需要分别为每个命令添加权限 |

---

## 功能需求趋势

从 Issue 标签和内容分析，当前社区关注的功能方向集中于：

| 方向 | 说明 | 代表 Issue |
|-----|------|-----------|
| **🚀 性能/内存优化** | 内存泄漏问题持续高热，120GB+ 泄漏和 macOS 快速泄漏均有反馈 | #4953, #32674 |
| **🔐 认证/授权** | Bedrock 认证、Okta SSO 等企业级认证需求 | #16128, #32670 |
| **📱 移动端/远程** | 手机端无 Escape 键、远程连接断开频繁等问题 | #32676, #32675 |
| **☁️ 云平台集成** | Bedrock API 参数配置（effort level、缓存 TTL） | #32672, #32671 |
| **🪟 Windows/WSL** | WSL 路径处理、权限提示位置、cowork 兼容性 | #28240, #32661 |
| **📝 指令文件复用** | CLAUDE.md 支持 @include 指令 | #13614 |
| **🔌 插件生态** | 插件市场功能、webMCP 支持 | #30645, #32661 |

---

## 开发者关注点

根据 Issue 评论和反馈，开发者当前的痛点集中在：

1. **🔴 额度计算不一致**：84% 使用率却提示限额耗尽，计费逻辑不透明（#19673）
2. **🔴 严重内存泄漏**：长时间会话内存持续增长直至 OOM（#4953）
3. **🟡 权限机制混乱**：`excludedCommands` 不生效、权限提示位置错误、管道命令需分别授权
4. **🟡 企业环境适配**：WSL2 路径问题、Okta/Bedrock 认证、远程连接稳定性
5. **🟢 插件体验**：插件市场功能待完善、文档与实际行为不一致

---

*报告生成时间：2026-03-10 | 数据来源：github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# 2026-03-10 OpenAI Codex 社区动态日报

## 1. 今日速览

今日社区活跃度较高，主要聚焦于**CLI稳定性**与**跨平台兼容性**问题。最热门的Issue是关于CLI在所有模型上挂起的Bug（#14048），已积累98条评论和76个点赞。同时，Windows/WSL环境下的配置问题持续引发讨论，多个相关Issue今日有更新。此外，代码模式（code_mode）和服务端压缩等新功能正在积极开发中。

---

## 2. 版本发布

**rust-v0.113.0-alpha.2** 已发布

- 这是一个Rust版本的Alpha预览版更新
- [查看Release](https://github.com/openai/codex/releases/tag/rust-v0.113.0-alpha.2)

---

## 3. 社区热点 Issues（精选10条）

| # | Issue | 关键信息 |
|---|-------|---------|
| 1 | **[CLI挂起问题 #14048](https://github.com/openai/codex/issues/14048)** | **最热门**：所有模型的Codex CLI在所有提示符下无限挂起，无响应生成。已关闭，98条评论，76赞。影响v0.111.0和v0.112.0版本，Windows+WSL环境为主要问题区 |
| 2 | **[敏感文件排除 #2847](https://github.com/openai/codex/issues/2847)** | 功能请求：希望添加`.codexignore`机制显式标记代理不可读取或发送给模型的文件/路径。60条评论，246赞（最高），长期需求 |
| 3 | **[401未授权错误 #12764](https://github.com/openai/codex/issues/12764)** | CLI返回401 Unauthorized错误，51条评论，影响v0.104.0版本 |
| 4 | **[令牌刷新失败 #9634](https://github.com/openai/codex/issues/9634)** | 访问令牌刷新失败提示"refresh token was already used"，22条评论，涉及v0.88.0 |
| 5 | **[Windows Markdown链接 #12661](https://github.com/openai/codex/issues/12661)** | Markdown文件链接在Windows上默认打开Edge而非VS Code，19条评论 |
| 6 | **[macOS App失败 #13747](https://github.com/openai/codex/issues/13747)** | Codex App打包的codex-cli 0.108.0-alpha.12在macOS上失败，13条评论 |
| 7 | **[消息导出Markdown #2880](https://github.com/openai/codex/issues/2880)** | 功能请求：希望能够将消息复制/导出为Markdown格式，11条评论，33赞 |
| 8 | **[WSL配置覆盖 #13549](https://github.com/openai/codex/issues/13549)** | Windows版Codex在WSL模式下仍引用Windows的config.toml，9条评论 |
| 9 | **[MCP服务器加载 #13025](https://github.com/openai/codex/issues/13025)** | Codex Desktop忽略项目的.codex/config.toml MCP服务器配置，9条评论 |
| 10 | **[网络访问被忽略 #10390](https://github.com/openai/codex/issues/10390)** | macOS的network_access = true配置被沙箱静默忽略，6条评论，11赞 |

---

## 4. 重要 PR 进展（精选10条）

| # | PR | 内容概述 |
|---|-----|---------|
| 1 | **[#13996](https://github.com/openai/codex/pull/13996)** | refactor: 移除linux sandbox bwrap toggle |
| 2 | **[#13978](https://github.com/openai/codex/pull/13978)** | 添加服务端压缩功能（server_side_compaction）特性标志 |
| 3 | **[#13767](https://github.com/openai/codex/pull/13767)** | 通过实验特性让网络代理默认启用，无需显式配置 |
| 4 | **[#14155](https://github.com/openai/codex/pull/14155)** | 为macOS沙箱添加Launch Services、Contacts、Reminders权限 |
| 5 | **[#14152](https://github.com/openai/codex/pull/14152)** | 将工具输出重构为trait实现，改进类型安全 |
| 6 | **[#13860](https://github.com/openai/codex/pull/13860)** | 添加guardian评估线程项，支持自动审批审查状态显示 |
| 7 | **[#14149](https://github.com/openai/codex/pull/14149)** | 统一图片保存到/tmp目录，提升稳定性 |
| 8 | **[#13418](https://github.com/openai/codex/pull/13418)** | 添加code_mode实验功能，比js_repl更隔离的代码执行模式 |
| 9 | **[#12389](https://github.com/openai/codex/pull/12389)** | 添加managed filesystem deny_read阻止列表，支持requirements.toml配置 |
| 10 | **[#14150](https://github.com/openai/codex/pull/14150)** | 为spawn_agent添加继承的模型覆盖支持 |

---

## 5. 功能需求趋势

从Issue和PR中提炼出社区最关注的功能方向：

| 方向 | 热度 | 说明 |
|------|------|------|
| **安全/沙箱控制** | ⭐⭐⭐ | 敏感文件排除(#2847)、文件系统拒绝列表(#12389)、沙箱权限精细化 |
| **跨平台兼容性** | ⭐⭐⭐ | Windows/WSL集成问题频发，包括配置路径、Markdown链接、代理设置等 |
| **认证/授权** | ⭐⭐ | 401错误、令牌刷新失败、API订阅兼容性问题 |
| **CLI/TUI增强** | ⭐⭐ | 消息导出Markdown、Plan模式支持、终端标题覆盖 |
| **IDE集成** | ⭐⭐ | VS Code扩展功能改进、线程重命名、崩溃恢复 |
| **性能优化** | ⭐⭐ | 服务端压缩、代码模式、内存使用优化 |

---

## 6. 开发者关注点

根据今日Issue反馈，总结开发者主要痛点：

1. **认证问题频发** - 401未授权和令牌刷新失败是高频问题，影响开发体验
2. **Windows/WSL生态** - 配置混乱（config.toml路径、WSL模式下工作目录）仍是重灾区
3. **CLI稳定性** - 挂起、无响应问题在多个版本存在，社区反馈强烈
4. **沙箱限制** - macOS网络访问配置被忽略、权限粒度不足
5. **信息导出** - 缺乏消息导出为Markdown的原生支持，影响文档和协作流程

---

*本日报由AI生成，数据截至2026-03-10 24:00*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-03-10）

## 今日速览

今日 Gemini CLI 社区活跃度较高，发布了 **v0.33.0-preview.6~10** 五个预览版本，主要为 bug 修复的 cherry-pick 更新。Issue 方面，计划模式对话框截断、exit_plan_mode 策略处理、--resume 无效 ID 错误提示等用户体验问题引发较多讨论。PR 方向聚焦于 Windows 原生沙箱、压缩状态持久化、语音模式增强等核心功能改进。

---

## 版本发布

| 版本 | 更新内容 | 链接 |
|------|----------|------|
| **v0.33.0-preview.10** | cherry-pick commit 936f624 修复 SSE 损坏 JSON 处理问题 | [#21800](https://github.com/google-gemini/gemini-cli/pull/21800) |
| **v0.33.0-preview.9** | cherry-pick commit 4f4431e 修复发布版本问题 | [#21782](https://github.com/google-gemini/gemini-cli/pull/21782) |
| **v0.33.0-preview.8** | cherry-pick 修复相关问题 | [#21782](https://github.com/google-gemini/gemini-cli/pull/21782) |
| **v0.33.0-preview.7** | 例行预览版本更新 | - |
| **v0.33.0-preview.6** | cherry-pick commit 7837194 修复环境变量白名单问题 | [#21720](https://github.com/google-gemini/gemini-cli/pull/21720) |

> 📌 **技术说明**：近期版本发布频繁，主要通过 cherry-pick 方式快速向预览分支推送关键修复，显示出团队对稳定性的重视。

---

## 社区热点 Issues

### 🔥 Top 10 值得关注的 Issue

| # | Issue | 重要性说明 | 评论数 |
|---|-------|------------|--------|
| 1 | **[#20716](https://github.com/google-gemini/gemini-cli/issues/20716)** 计划审批对话框截断问题 | 用户反馈计划内容超过15行后被隐藏，影响长流程审批体验 | 8 |
| 2 | **[#20549](https://github.com/google-gemini/gemini-cli/issues/20549)** 退出计划模式时路径错误导致卡死 | P1优先级，用户频繁遇到无法退出计划模式的阻塞性问题 | 7 |
| 3 | **[#2784](https://github.com/google-gemini/gemini-cli/issues/2784)** vi-mode 键绑定功能请求 | 经典功能请求，6赞，社区对终端编辑效率提升有持续需求 | 6 |
| 4 | **[#21764](https://github.com/google-gemini/gemini-cli/issues/21764)** --resume 无效ID时显示可用会话 | UX 改进，用户希望直接看到可用会话而非额外命令 | 3 |
| 5 | **[#21806](https://github.com/google-gemini/gemini-cli/issues/21806)** exit_plan_mode 策略 allow 被忽略 | 策略配置生效问题，影响用户自定义工作流 | 3 |
| 6 | **[#21535](https://github.com/google-gemini/gemini-cli/issues/21535)** 语音模式"您是否要？"建议 | 实验性功能增强，已合并，提升语音交互容错性 | 2 |
| 7 | **[#21773](https://github.com/google-gemini/gemini-cli/issues/21773)** 黄色背景可视性差 | UI 主题问题，影响日常使用舒适度 | 2 |
| 8 | **[#21461](https://github.com/google-gemini/gemini-cli/issues/21461)** Shell 命令不支持别名 | 用户希望在 Gemini CLI 中使用已配置的 shell 别名 | 2 |
| 9 | **[#21808](https://github.com/google-gemini/gemini-cli/issues/21808)** 输入框/光标闪烁 | 终端渲染性能问题，影响交互体验 | 1 |
| 10 | **[#21421](https://github.com/google-gemini/gemini-cli/issues/21421)** 定期反思并推荐创建技能 | 智能化功能建议，AI 主动建议创建自定义技能 | 1 |

---

## 重要 PR 进展

### ⭐ 值得关注的核心 PR

| PR | 描述 | 领域 |
|----|------|------|
| **[#21812](https://github.com/google-gemini/gemini-cli/pull/21812)** fix: preserve saved memory in state_snapshot contract | 修复压缩快照未保存用户内存的契约问题 | 核心功能 |
| **[#21807](https://github.com/google-gemini/gemini-cli/pull/21807)** feat: implement native Windows sandboxing | 实现 Windows 原生沙箱（Restricted Tokens + MIC） | 安全/平台 |
| **[#21811](https://github.com/google-gemini/gemini-cli/pull/21811)** feat: include available sessions in --resume error message | --resume 无效ID时直接在错误中显示可用会话 | UX |
| **[#21802](https://github.com/google-gemini/gemini-cli/pull/21802)** fix: handle policy ALLOW for exit_plan_mode | 修复策略 allow 决策被忽略的问题 | 策略系统 |
| **[#21796](https://github.com/google-gemini/gemini-cli/pull/21796)** refactor: rename 'return' key to 'enter' internally | 内部键名标准化，对齐 VS Code 等主流工具 | 内部重构 |
| **[#21794](https://github.com/google-gemini/gemini-cli/pull/21794)** feat: enable retryFetchErrors by default | 网络错误自动重试默认启用，提升容错性 | 网络/稳定性 |
| **[#21473](https://github.com/google-gemini/gemini-cli/pull/21473)** fix: whitelist TERM and COLORTERM in environment sanitization | 终端编辑能力所需环境变量放行 | 终端兼容性 |
| **[#21037](https://github.com/google-gemini/gemini-cli/pull/21037)** fix: prevent plan truncation in approval dialog | 修复计划审批对话框截断问题（对应 Issue #20716） | UI |
| **[#21536](https://github.com/google-gemini/gemini-cli/pull/21536)** feat: voice mode "Did you mean?" suggestions | 语音模式命令纠错建议（已合并） | 语音交互 |
| **[#18499](https://github.com/google-gemini/gemini-cli/pull/18499)** feat: Add voice input with pluggable backend | 语音输入支持（Gemini 转录 + Whisper 可选） | 语音/新功能 |

---

## 功能需求趋势

基于 Issue 标题和摘要分析，当前社区关注的功能方向如下：

| 趋势方向 | 相关 Issue | 热度评估 |
|----------|------------|----------|
| **UX/UI 改进** | #20716, #21773, #21808, #21453, #21452 | ⭐⭐⭐ 高 |
| **计划模式增强** | #20716, #20549, #21743 | ⭐⭐⭐ 高 |
| **策略系统完善** | #21806, #21596, #20331 | ⭐⭐ 中 |
| **远程代理/子代理** | #20302, #20303, #20304, #20886 | ⭐⭐ 中 |
| **Shell/终端兼容性** | #21461, #21473 | ⭐⭐ 中 |
| **语音交互** | #21535, #18499 | ⭐⭐ 中 |
| **性能优化** | #21646, #21528, #21519, #21518 | ⭐⭐ 中 |
| **Windows 平台支持** | #21807 | ⭐ 新兴 |

---

## 开发者关注点

### 痛点与高频需求

1. **计划模式体验问题**
   - 截断、卡死、路径错误等问题频繁出现，开发者正在通过多个 Issue 推进修复

2. **终端交互细节**
   - 光标闪烁、vi 键绑定、shell 别名支持等终端用户习惯兼容

3. **错误信息可读性**
   - --resume 无效 ID 时需额外命令查询可用会话，应直接在错误中展示

4. **网络稳定性**
   - retryFetchErrors 默认启用呼声高，需配合用户通知机制

5. **Windows 平台能力**
   - 原生沙箱实现填补了 Windows 安全能力空白

---

*本报告基于 GitHub 公开数据生成，仅供参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-03-10

## 今日速览

Kimi Code CLI 1.18.0 正式发布，重点增强了 ACP 模式下对 Zed 编辑器 `@` 文件引用的支持以及 Anthropic 模型的会话用户 ID 传递功能。社区今日活跃度较高，新增 8 个 Issue 和 15 个 PR，其中代理配置问题、文件提及功能和会话管理是开发者关注的焦点。

---

## 版本发布

### v1.18.0 已发布 🚀

**更新亮点：**

- **LLM 增强**：支持通过 metadata 将 session user_id 传递给 Anthropic 模型（#1336）
- **ACP 优化**：支持在 ACP 模式下嵌入 Zed 编辑器的资源内容，解决 `@` 文件引用无法识别的问题（#1264）
- **Bug 修复**：修正了 "published to public" 的拼写错误

> 📎 Release: https://github.com/MoonshotAI/kimi-cli/releases/tag/1.18.0

---

## 社区热点 Issues

### 1. 代理配置失效问题 🔴 P0
**#1234** - Environment variable based proxy is not working due to aiohttp default settings when using `kimi login`

- **作者**：@CyCle1024 | **评论**：10 | **状态**：OPEN
- **摘要**：Linux 环境下使用环境变量配置代理时失效，原因是 aiohttp 的默认设置覆盖了代理配置
- **重要性**：高优先级——影响用户登录和基础使用，已有 10 条讨论

> 🔗 https://github.com/MoonshotAI/kimi-cli/issues/1234

---

### 2. 文件提及功能失效 🔴 P0
**#1375** - File mentions (@) can't find the files

- **作者**：@sudokai | **评论**：3 | **状态**：OPEN
- **摘要**：v1.18.0 版本中，Zed 编辑器的 `@` 文件提及功能无法找到文件
- **重要性**：这是 v1.18.0 主打功能的回归问题，需紧急修复

> 🔗 https://github.com/MoonshotAI/kimi-cli/issues/1375

---

### 3. ACP 终端工具报错 🔴 P0
**#1380** - ACP terminal tool fails with 'module acp has no attribute TerminalHandle' in v1.17 & v1.18

- **作者**：@gp3t1 | **评论**：0 | **状态**：OPEN（今日新增）
- **摘要**：ACP 模式下使用终端工具时抛出属性错误
- **重要性**：影响核心功能使用，属于阻断性问题

> 🔗 https://github.com/MoonshotAI/kimi-cli/issues/1380

---

### 4. JSON 解析控制字符错误 ⚠️ P1
**#1378** - JSON parsing error when tool call arguments contain control characters

- **作者**：@AlejandroEsquivel | **评论**：0 | **状态**：OPEN
- **摘要**：LLM 生成的工具调用参数包含控制字符时导致 JSON 解析失败
- **重要性**：已提交 PR #1379 修复

> 🔗 https://github.com/MoonshotAI/kimi-cli/issues/1378

---

### 5. 连接错误问题 ⚠️ P1
**#1371** - LLM provider error: Connection error

- **作者**：@liushuo1024 | **评论**：0 | **状态**：OPEN
- **摘要**：IPv6 环境下出现连接错误
- **重要性**：网络兼容性问题，影响部分用户

> 🔗 https://github.com/MoonshotAI/kimi-cli/issues/1371

---

### 6. HTTP Header 特殊字符导致连接失败 ⚠️ P1
**#1368** - Connection error on Linux when platform.version() contains # character in HTTP header

- **作者**：@chenyuchen993-cmyk | **评论**：0 | **状态**：OPEN
- **摘要**：当平台版本号包含 `#` 字符时，HTTP Header 导致连接错误
- **重要性**：特定环境下的兼容性问题

> 🔗 https://github.com/MoonshotAI/kimi-cli/issues/1368

---

### 7. 会话选择功能需求 💡
**#1366** - Add arguments for cli to select the history session

- **作者**：@bakey | **评论**：3 | **状态**：OPEN
- **摘要**：希望添加 CLI 参数来列出和选择历史会话，而非仅支持 `-C` 继续上一个会话
- **重要性**：功能增强需求，已关联 PR #1376

> 🔗 https://github.com/MoonshotAI/kimi-cli/issues/1366

---

### 8. Zed ACP 文件识别（已关闭）✅
**#1054** - Zed ACP is unable to recognize the files I am currently handling

- **作者**：@iGxnon | **评论**：3 | **状态**：CLOSED
- **摘要**：Zed 编辑器无法识别当前处理的文件
- **重要性**：已在 v1.18.0 中修复

> 🔗 https://github.com/MoonshotAI/kimi-cli/issues/1054

---

## 重要 PR 进展

### 1. CLI 会话管理功能 ✨
**#1376** - feat: add --sessions/--list-sessions CLI options & fix CJK shorten

- **作者**：@DRunkPiano114 | **状态**：OPEN
- **内容**：新增 `--sessions` / `--list-sessions` 参数，支持交互式选择历史会话
- **关联 Issue**：#1366

> 🔗 https://github.com/MoonshotAI/kimi-cli/pull/1376

---

### 2. Vim 风格键盘导航 ✨
**#1377** - feat: add vim-style j/k keyboard navigation for approval and question

- **作者**：@IAMLEIzZ | **状态**：OPEN
- **内容**：为审批和问答交互添加 Vim 风格的 j/k 键盘导航

> 🔗 https://github.com/MoonshotAI/kimi-cli/pull/1377

---

### 3. 工具调用控制字符修复 🔧
**#1379** - fix: Tool call arguments that contain control characters

- **作者**：@AlejandroEsquivel | **状态**：OPEN
- **内容**：修复 Issue #1378，控制字符导致的 JSON 解析错误

> 🔗 https://github.com/MoonshotAI/kimi-cli/pull/1379

---

### 4. Azure Kimi 配置增强 🔧
**#1223** - fix(llm): allow default_query/custom_headers for Azure Kimi

- **作者**：@kingdomseed | **状态**：OPEN
- **内容**：支持向 OpenAI 客户端传递 `default_query` 和 `custom_headers`，启用 Kimi K2.5 等模型的高级配置

> 🔗 https://github.com/MoonshotAI/kimi-cli/pull/1223

---

### 5. 推理模式优化 🔧
**#1358** - fix(llm): avoid implicit reasoning-off for responses

- **作者**：@wey-gu | **状态**：OPEN
- **内容**：修复 OpenAI Responses 请求中的隐式推理关闭问题，确保 `reasoning_effort` 设置正确传递

> 🔗 https://github.com/MoonshotAI/kimi-cli/pull/1358

---

### 6. 剪贴板视频粘贴支持 ✨
**#1369** - feat: support pasting video files from clipboard via Ctrl-V

- **作者**：@RealKai42 | **状态**：CLOSED
- **内容**：扩展 Ctrl-V 剪贴板粘贴功能，支持视频文件（mp4, mov, mkv 等）

> 🔗 https://github.com/MoonshotAI/kimi-cli/pull/1369

---

### 7. 搜索快捷键平台适配 🔧
**#1372** - fix(web): use platform-specific modifier key for search shortcut

- **作者**：@YoungY620 | **状态**：CLOSED
- **内容**：修复搜索快捷键（Cmd+F / Ctrl+F）在不同平台的误触发问题

> 🔗 https://github.com/MoonshotAI/kimi-cli/pull/1372

---

### 8. WebSocket 重连斜杠命令恢复 🔧
**#1359** - fix(web): preserve slash commands on reconnect and add initialize retry logic

- **作者**：@YoungY620 | **状态**：CLOSED
- **内容**：WebSocket 重连时保留斜杠命令，并添加初始化重试逻辑

> 🔗 https://github.com/MoonshotAI/kimi-cli/pull/1359

---

### 9. 公共网络绑定修复 🔧
**#1055** - fix(cli/web): allow binding to all addresses if not lan_only

- **作者**：@tpoisonooo | **状态**：CLOSED
- **内容**：修复 `--public` 参数无法正确绑定到 `0.0.0.0` 的问题

> 🔗 https://github.com/MoonshotAI/kimi-cli/pull/1055

---

### 10. Google GenAI 工具参数兼容 🔧
**#739** - fix(kosong): strip JSON Schema metadata from Google GenAI tool parameters

- **作者**：@xiaoju111a | **状态**：OPEN
- **内容**：移除 Google GenAI 工具参数中的 JSON Schema 元数据，解决 MCP 工具兼容性问题

> 🔗 https://github.com/MoonshotAI/kimi-cli/pull/739

---

## 功能需求趋势

根据 Issue 和 PR 分析，社区最关注的功能方向如下：

| 方向 | 热度 | 说明 |
|------|------|------|
| **IDE 集成增强** | 🔥🔥🔥 | Zed、VS Code 等编辑器的 `@` 文件引用、ACP 模式支持 |
| **CLI 会话管理** | 🔥🔥 | 历史会话的列表、选择、继续功能 |
| **网络/代理兼容** | 🔥🔥 | 代理配置、IPv6、特殊字符处理 |
| **用户体验优化** | 🔥 | Vim 风格导航、剪贴板增强、快捷键适配 |
| **多模型支持** | 🔥 | Azure Kimi、Google GenAI 兼容性增强 |

---

## 开发者关注点

### 🔴 痛点问题

1. **代理配置失效** - Linux 环境下环境变量代理不生效（#1234，10 条讨论）
2. **网络连接问题** - IPv6 环境、特殊字符导致的连接错误（#1371, #1368）
3. **新版本功能回退** - v1.18.0 的文件提及功能失效（#1375）

### 💡 高频需求

1. **会话管理增强** - 多个用户请求 CLI 支持历史会话选择
2. **编辑器深度集成** - Zed 的 `@` 引用、ACP 终端工具稳定性
3. **跨平台体验一致性** - 快捷键、剪贴板功能的平台适配

### ✅ 社区贡献活跃

- **@RealKai42**：持续发布版本并参与多个功能修复
- **@YoungY620**：Web 端交互优化（搜索快捷键、WebSocket 重连）
- **@DRunkPiano114**：CLI 会话管理功能开发

---

*📊 数据统计：Issue 新增 8 条（其中 3 条为 Bug），PR 新增 15 条（6 条已合并）*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-03-10)

## 今日速览

今日 OpenCode 社区继续保持活跃，共更新 50 条 Issue 和 50 条 PR。v1.2.24 版本带来了 TUI 工作区支持、1M 上下文窗口和 Copilot GPT-5.4 集成等重要更新。社区热点集中在 TUI 兼容性、认证流程和内存泄漏等问题的讨论上。

---

## 版本发布

### v1.2.24

**Core 更新**
- 新增 TUI 工作区初始支持
- 向 GitLab 发送 `context-1m-2025-08-07` beta header，启用 1M 上下文窗口（@Krule）
- 新增 Copilot GPT-5.4 xhigh 支持

**Desktop 更新**
- 修复应用滚动抖动和循环问题
- 修复会话标题旋转器显示问题

[查看 Release](https://github.com/anomalyco/opencode/releases/tag/v1.2.24)

### v1.2.23

**Core 更新**
- 禁用小模型请求的回退到免费 nano 方案

**TUI 更新**
- 在 `run --attach` 中传递缺失的 auth headers（@ericclemmons）

**Desktop 更新**
- 移除应用中的 oc-1 主题
- 修复侧边栏工作区容器尺寸，防止内容溢出

[查看 Release](https://github.com/anomalyco/opencode/releases/tag/v1.2.23)

---

## 社区热点 Issues

### 1. 代码输出在浅色模式下不可读
**#16470** | [查看](https://github.com/anomalyco/opencode/issues/16470)

格式化代码在浅色模式下几乎不可见，可能是颜色方案 bug。Issue 附带了截图作为复现步骤。

> 👁️ 13 条评论 | 👍 3

---

### 2. TUI 在 tmux 中损坏（已找到根因）
**#16351** | [查看](https://github.com/anomalyco/opencode/issues/16351)

自 v1.2.17 起，TUI 在 tmux 中运行时间歇性损坏。文本输入区域渲染为灰色框，键盘快捷键失效。这是高优先级问题，社区反应强烈。

> 👁️ 11 条评论 | 👍 10

---

### 3. 原生 Claude Code Hooks 兼容性
**#12472** | [查看](https://github.com/anomalyco/opencode/issues/12472)

OpenCode 已支持 Claude Code 的 rules 和 skills，但缺少 hooks 系统（PreToolUse、PostToolUse、Stop）的支持。用户希望实现完整的 hooks 兼容性。

> 👁️ 9 条评论 | 👍 7

---

### 4. LM Studio 本地 7B 模型错误
**#11141** | [查看](https://github.com/anomalyco/opencode/issues/11141)

使用 LM Studio 本地 LLM 时报错："Cannot truncate prompt with n_keep (15028) >= n_ctx (7424)"。用户希望在配置中找到调整 n_ctx 的选项。

> 👁️ 9 条评论 | 👍 5

---

### 5. /undo 和 /timeline 无法撤销文件编辑
**#4704** | [查看](https://github.com/anomalyco/opencode/issues/4704)

/undo 和 /timeline 命令无法恢复文件编辑，即使在 Git 项目中也是如此。这是一个长期未解决的问题，影响日常使用。

> 👁️ 8 条评论 | 👍 9

---

### 6. Windows 证书验证错误
**#12408** | [查看](https://github.com/anomalyco/opencode/issues/12408)

Windows 终端显示 "unknown certificate verification error Failed to fetch models.dev" 错误，导致无法使用 OpenCode。影响用户基数较大。

> 👁️ 7 条评论 | 👍 0

---

### 7. OpenAI ChatGPT Pro/Plus 浏览器登录失败
**#16281** | [查看](https://github.com/anomalyco/opencode/issues/16281)

OpenCode 通过浏览器完成 OpenAI 授权后，令牌交换失败并返回 403 错误。OAuth 回调服务器正常启动，但 token exchange 步骤出错。

> 👁️ 7 条评论 | 👍 1

---

### 8. 多个内存泄漏导致长期使用时 RAM 无限增长
**#16697** | [查看](https://github.com/anomalyco/opencode/issues/16697)

在长期使用中，OpenCode 存在来自多个独立来源的无限内存增长。该问题已由 20+ 贡献者独立报告和调查，引发了大量 PR 来全面解决问题。

> 👁️ 6 条评论 | 👍 1

---

### 9. TUI 中 "view subagents" 无法点击
**#16796** [CLOSED] | [查看](https://github.com/anomalyco/opencode/issues/16796)

TUI 中 "view subagents" 按钮无法点击，只能使用键盘快捷键 `Ctrl+X+Down` 访问。该 Issue 已在最新版本中修复。

> 👁️ 5 条评论 | 👍 0

---

### 10. 功能请求：使链接可点击
**#1168** | [查看](https://github.com/anomalyco/opencode/issues/1168)

希望 OpenCode 中显示的链接可以通过 Ctrl+左键在默认浏览器中打开。这是一个长期存在的功能请求，社区支持度高。

> 👁️ 5 条评论 | 👍 49

---

## 重要 PR 进展

### 1. 修复 MCP OAuth 首次连接失败
**#15547** [CLOSED] | [查看](https://github.com/anomalyco/opencode/pull/15547)

修复 OpenCode 自动连接需要 OAuth 的远程 MCP 服务器时，首次连接失败的问题。

---

### 2. 添加 API shape 字段区分 API 格式
**#14487** [OPEN] | [查看](https://github.com/anomalyco/opencode/pull/14487)

新增 `api_shape` 字段以区分不同 API 格式（如 Azure 上某些模型仅支持 completions API 而非 responses API）。

---

### 3. LSP 服务器和核心改进重构
**#16825** [OPEN] | [查看](https://github.com/anomalyco/opencode/pull/16825)

重构 LSP 服务器和核心组件，包括：LSP 服务器更新、配置改进、Provider 和插件增强、核心工具改进。

---

### 4. 修复会话列表跨工作树泄漏
**#16827** [OPEN] | [查看](https://github.com/anomalyco/opencode/pull/16827)

将会话列表范围限定在当前工作目录，防止跨工作树会话泄漏。修复多个 git worktrees 共享同一 project_id 导致的问题。

---

### 5. 新增 session.stopping 插件钩子
**#16598** [OPEN] | [查看](https://github.com/anomalyco/opencode/pull/16598)

为插件系统新增 `session.stopping` 钩子，支持在会话停止时执行自定义逻辑。

---

### 6. 工具输出预览
**#5817** [CLOSED] | [查看](https://github.com/anomalyco/opencode/pull/5817)

新增工具输出预览功能，支持在对话框中尊重 `scroll_speed` 配置，同时保留 Ctrl+左键打开文件的默认行为。

---

### 7. 修复移动端 AI 流式输出滚动闪烁
**#16625** [OPEN] | [查看](https://github.com/anomalyco/opencode/pull/16625)

添加移动端触摸事件支持，防止 AI 流式响应期间的无限滚动闪烁问题。

---

### 8. Zen 成本块格式修复
**#16817** [OPEN] | [查看](https://github.com/anomalyco/opencode/pull/16817)

修复成本块始终以 provider 原始格式（如 Anthropic `event: ping`）发送，而非客户端请求格式的问题。

---

### 9. 插件侧边栏贡献 API
**#16804** [OPEN] | [查看](https://github.com/anomalyco/opencode/pull/16804)

新增插件侧边栏贡献 API，允许插件通过 sidebar items 为应用提供扩展功能。

---

### 10. TUI 提及弹出层快速打开文件/目录
**#16811** [OPEN] | [查看](https://github.com/anomalyco/opencode/pull/16811)

在 @ 提及自动完成弹出层中，新增从弹出层快速打开文件或目录到系统默认应用的功能。

---

## 功能需求趋势

基于 Issue 分析，社区最关注的功能方向包括：

| 方向 | 热度 | 说明 |
|------|------|------|
| **TUI/终端体验** | 🔥🔥🔥 | 链接可点击性、subagent 点击、tmux 兼容性、快速打开文件 |
| **IDE/编辑器集成** | 🔥🔥 | 撤销功能、Ctrl+P 搜索行号 (如 VSCode)、符号链接支持 |
| **认证与 OAuth** | 🔥🔥 | ChatGPT Pro/Plus 浏览器登录、MCP OAuth、Google Vertex AI |
| **本地模型支持** | 🔥 | LM Studio、Ollama、GLM 等本地部署模型兼容性 |
| **多平台支持** | 🔥 | Windows 证书问题、aarch64 Linux release、tmux 兼容性 |
| **性能优化** | 🔥 | 内存泄漏修复、大目录快照保护 |

---

## 开发者关注点

### 🔴 高优先级痛点

1. **内存泄漏问题** - 长期使用导致 RAM 无限增长，已有 20+ 贡献者参与修复
2. **TUI 稳定性** - tmux 兼容性问题、滚动闪烁、subagent 点击失效
3. **认证失败** - OpenAI OAuth 403 错误、Windows 证书验证失败

### 🟡 功能增强需求

1. **TUI 快捷键暴露** - favorite model cycling 虽已实现但缺少默认快捷键
2. **CLI 增强** - 支持斜杠命令在提示中输入
3. **插件系统** - 新增 session.stopping 钩子、侧边栏贡献 API

### 🟢 社区生态

1. **生态系统项目** - OpenGUI 等第三方项目申请加入生态列表
2. **文档完善** - 建议将 OpenGUI 添加到生态项目文档

---

*本日报由 AI 技术分析师生成，数据来源为 github.com/anomalyco/opencode*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-03-10）

## 今日速览

v0.12.0 正式发布，带来 CLI 在 Windows CRLF 环境的兼容修复和代码高亮的 tabWidth 支持。过去24小时内社区活跃度较高：新增 27 条 Issue 更新和 20 条 PR 动态，重点集中在 UX 交互（空格键输入、YOLO 模式）、API 限流问题及多 Provider 配置重构等方向。

---

## 版本发布

**v0.12.0** 已发布，更新内容：

| 修复/功能 | 描述 |
|---------|------|
| 🐛 fix(cli) | 修复 Windows CRLF/BOM 环境下 markdown command frontmatter 解析问题（[@zy6p](https://github.com/QwenLM/qwen-code/pull/2078)） |
| ✨ feat | CodeColorizer 新增 tabWidth 支持，将 Tab 替换为空格（[@lgzzzz](https://github.com/QwenLM/qwen-code/pull/2077)） |

> 相关 PR：v0.12.1 已在准备中（[#2226](https://github.com/QwenLM/qwen-code/pull/2226)）

---

## 社区热点 Issues（10 个值得关注）

| # | Issue | 重要性说明 | 社区反应 |
|---|-------|-----------|---------|
| 1 | **[#2198](https://github.com/QwenLM/qwen-code/issues/2198)** CLI 输入法空格键失效 | 🔴 P1 严重 Bug，用户无法输入含空格的命令 | 5 评论，VS Code/Windows 多平台复现 |
| 2 | **[#2101](https://github.com/QwenLM/qwen-code/issues/2101)** 空格按钮无法点击 | 与 #2198 相关，UX 交互问题 | 9 评论，5 👍 |
| 3 | **[#1922](https://github.com/QwenLM/qwen-code/issues/1922)** 编辑工具无法修改 Python 文件 | 🔴 P1 核心功能失效，问题在 0.10.5 版本重现 | 6 评论，历史反馈较多 |
| 4 | **[#2206](https://github.com/QwenLM/qwen-code/issues/2206)** YOLO 模式下仍打开 VSCode diff 编辑器 | 与 YOLO 模式设计初衷冲突 | 1 评论 |
| 5 | **[#2222](https://github.com/QwenLM/qwen-code/issues/2222)** Shell 命令含引号时执行失败 | Windows 平台特定问题 | 1 评论 |
| 6 | **[#2223](https://github.com/QwenLM/qwen-code/issues/2223)** 检测到高内存占用：7.83 GB | 潜在稳定性/内存泄漏问题 | 0 评论 |
| 7 | **[#2191](https://github.com/QwenLM/qwen-code/issues/2191)** Web Search API 429 限流错误 | DashScope API 限流，持续 3+ 天 | 5 评论，2 👍 |
| 8 | **[#2227](https://github.com/QwenLM/qwen-code/issues/2227)** 提示快捷键未适配 Mac | 快捷键显示 Ctrl+Y 而非 Cmd | 新发布，暂无评论 |
| 9 | **[#793](https://github.com/QwenLM/qwen-code/issues/793)** 视觉模型无法描述图片文件 | 🔴 P1 功能缺失 | 6 评论，5 👍 |
| 10 | **[#784](https://github.com/QwenLM/qwen-code/issues/784)** 认证超时 | OAuth 认证问题 | 13 评论，长期反馈 |

---

## 重要 PR 进展（10 个值得关注）

| # | PR | 内容摘要 | 状态 |
|---|-----|---------|------|
| 1 | **[#2220](https://github.com/QwenLM/qwen-code/pull/2220)** Refactor model provider configuration (V4) | 模型 Provider 配置重构为 providerId-keyed 结构，新增 `--providerId` CLI 参数，实现 V3→V4 迁移 | 🟢 OPEN |
| 2 | **[#2221](https://github.com/QwenLM/qwen-code/pull/2221)** fix: skip openDiff in YOLO mode | 修复 YOLO 模式下仍打开 VSCode diff 编辑器的问题 | 🟢 OPEN |
| 3 | **[#2226](https://github.com/QwenLM/qwen-code/pull/2226)** chore: bump version to 0.12.1 | 例行版本升级，准备发布 0.12.1 | 🟢 OPEN |
| 4 | **[#2202](https://github.com/QwenLM/qwen-code/pull/2202)** feat: support skills in .agents directory | 支持从 `.agent/skills/`、`.cursor/skills/` 等多目录加载 Skills | 🟢 OPEN |
| 5 | **[#1912](https://github.com/QwenLM/qwen-code/pull/1912)** feat(arena): Add agent collaboration arena | 新增多模型竞争执行 Arena 功能，可并行对比多模型结果 | 🟢 OPEN |
| 6 | **[#2203](https://github.com/QwenLM/qwen-code/pull/2203)** feat(hooks): Implement 10 core event hooks | 实现 10 个核心事件钩子，支持会话生命周期、工具执行等扩展 | 🟢 OPEN |
| 7 | **[#2188](https://github.com/QwenLM/qwen-code/pull/2188)** feat(vscode-ide-companion): sidebar view | VS Code 插件新增侧边栏视图和多位置聊天布局 | 🟢 OPEN |
| 8 | **[#1890](https://github.com/QwenLM/qwen-code/pull/1890)** fix(windows): resolve silent failures by CRLF | 🔴 修复 Windows 子代理/Skills 因 CRLF 行尾被静默忽略的严重问题 | ✅ CLOSED |
| 9 | **[#2208](https://github.com/QwenLM/qwen-code/pull/2208)** fix: improve MCP & Extension Management TUI | 改进 MCP 和扩展管理 TUI，修复 6 个反馈问题（3 P1 + 3 P2） | ✅ CLOSED |
| 10 | **[#2211](https://github.com/QwenLM/qwen-code/pull/2211)** fix(cli): block Tab key during AI streaming | 修复 Tab 键在 AI 响应时意外切换模式导致中断的问题 | 🟢 OPEN |

---

## 功能需求趋势

从 Issue 和 PR 标题分析，社区关注的功能方向如下：

| 方向 | 热度 | 说明 |
|-----|------|-----|
| **UX/交互优化** | 🔥🔥🔥 | 空格键输入、YOLO 模式行为、快捷键适配、Tab 键阻断 |
| **多 Provider 支持** | 🔥🔥 | V4 配置重构、Arena 多模型对比、Provider 目录扩展 |
| **IDE 集成** | 🔥🔥 | VS Code 侧边栏、diff 编辑器控制、IDE Companion 增强 |
| **API 稳定性** | 🔥 | DashScope 限流、认证超时、代理 NO_PROXY 支持 |
| **系统稳定性** | 🔥 | 内存占用、进程终止、Windows CRLF 兼容 |
| **扩展性** | 🔥 | Hooks 事件系统、MCP 管理、Skills 加载 |

---

## 开发者关注点

### 🔴 痛点问题

1. **输入交互 Bug 集中爆发**：空格键无法输入（#2198、#2101）影响基本使用体验
2. **Windows 兼容性**：CRLF 解析（已修复 #1890）、引号命令执行（#2222）
3. **API 限流**：DashScope 搜索频繁触发 429 错误

### 🟡 高频需求

1. **YOLO 模式行为一致性**：用户期望自动应用修改，但 diff 编辑器仍会弹出
2. **多模型对比能力**：Arena 功能呼声较高（#1912）
3. **更强的扩展性**：Hooks 事件系统（#2203）、Skills 目录灵活性（#2202）
4. **配置迁移**：V3→V4 配置结构变更需要平滑迁移路径

### 📌 建议关注

- v0.12.1 即将发布，建议关注版本兼容性
- Provider 配置重构可能影响现有用户设置
- Hooks 系统和 Arena 功能有望成为新版本亮点

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*