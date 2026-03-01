# AI CLI 工具社区动态日报 2026-03-01

> 生成时间: 2026-03-01 15:22 UTC | 覆盖工具: 6 个

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

当前 AI CLI 工具生态正处于**功能同质化与差异化并存**的阶段。主流厂商围绕**远程开发环境、标准化项目配置（AGENTS.md）、多模态能力和安全合规**四大方向展开密集迭代。头部工具（Claude Code、Codex、OpenCode）社区活跃度相近，均处于功能快速堆砌期；中小型工具（Kimi Code、Qwen Code）则聚焦特定场景深耕。值得关注的是，**远程协作（SSH/Remote）和团队协作（Native Teams）**已成为行业共识的下一战场，各工具均在相关方向有显著投入。

---

## 2. 各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | Release | 核心热点 |
|------|-------------|---------|---------|----------|
| **Claude Code** | ~50 | ~50 | ❌ 无 | AGENTS.md 标准化、Windows Cowork 虚拟机、VS Code 集成 |
| **OpenAI Codex** | ~50 | ~50 | ❌ 无 | 远程开发（SSH）、WebSocket 稳定性、Native Teams |
| **Gemini CLI** | ~50 | ~50 | ❌ 无 | 远程 Agent 架构、终端性能、API 端点自定义 |
| **Kimi Code CLI** | 4 | 5 | ❌ 无 | 远程 SSH 支持、Task 执行稳定性、文件补全 |
| **OpenCode** | ~50 | ~50 | ❌ 无 | GitLab DAP 集成、内存泄漏修复、Windows 兼容性 |
| **Qwen Code** | 7 | **26** | ✅ **v0.11.1** | Modes Layer、skill 调用修复、客户端脱敏 |

> 注：活跃度数据根据各报告提及的“50条 Issues/PR 更新”估算，OpenCode、Claude Code、Codex、Gemini CLI 处于同一量级。

---

## 3. 共同关注的功能方向

### 3.1 远程开发环境支持

| 工具 | 具体诉求 |
|------|----------|
| **OpenAI Codex** | SSH/Remote Hosts 连接（#10450，217 赞） |
| **Kimi Code CLI** | 远程 SSH 服务器使用（#1293） |
| **Gemini CLI** | 远程 Agent 流式传输（Sprint 1-3 Epic） |

**解读**：远程开发是当前社区最高频需求，Codex 的 SSH 支持获得 217 赞印证了这一趋势的确定性。

### 3.2 项目标准化配置（AGENTS.md）

| 工具 | 进展 |
|------|------|
| **Claude Code** | PR #29835 插件化方案进行中 |
| **Qwen Code** | PR #2018 支持 AGENTS.md 作为默认上下文 |
| **OpenCode** | 已有相关功能实现 |

**解读**：AGENTS.md 已从社区约定演变为事实标准，头部厂商均在适配。

### 3.3 安全与合规

| 工具 | 功能 |
|------|------|
| **Claude Code** | push-guardrails 插件（防代码泄露） |
| **Qwen Code** | VibeGuard 风格客户端脱敏 |
| **Gemini CLI** | Policy Engine 无头模式支持 |

**解读**：企业级用例推动安全功能从“可选”变为“必选”。

### 3.4 终端/UI 体验优化

- **Claude Code**：RTL 文本渲染回归修复
- **Gemini CLI**：终端闪烁、滚动卡顿修复
- **OpenCode**：消息排队显示、压缩 UI
- **Qwen Code**：Terminal 输出格式化

**解读**：交互细节优化是提升留存的关键，各工具均在补齐体验短板。

---

## 4. 差异化定位分析

| 工具 | 定位差异 | 目标用户 | 技术路线 |
|------|----------|----------|----------|
| **Claude Code** | 企业级 AI 助手，强调 IDE 深度集成与安全合规 | 企业开发者、VS Code/VS 用户 | 插件化生态、Cowork 协作 |
| **OpenAI Codex** | 全栈开发者生产力工具，侧重远程开发与团队协作 | 远程团队、AI 增强开发 | 原生 Teams、WebSocket 优先 |
| **Gemini CLI** | Google 生态入口，强调 API 灵活性和 Agent 架构 | Google Cloud 用户、LLM 开发者 | 远程 Agent、多模态扩展 |
| **Kimi Code CLI** | 轻量级中文开发者助手，聚焦 SSH/远程场景 | 中文开发者、远程服务器用户 | 轻量化、特定场景优化 |
| **OpenCode** | 开源多模型聚合平台，强调 Provider 灵活性 | 多模型用户、GitLab 生态用户 | 模型无关、Worktree 支持 |
| **Qwen Code** | 阿里云百炼生态入口，侧重企业安全和模式化工作流 | 阿里云用户、国内企业 | Modes Layer、脱敏处理 |

---

## 5. 社区热度与成熟度

### 5.1 热度矩阵

| 热度等级 | 工具 | 判断依据 |
|----------|------|----------|
| 🔥 **高活跃** | Claude Code、OpenAI Codex、OpenCode、Gemini CLI | Issues/PR 双双 50 条量级，功能迭代密集 |
| ⚡ **中等活跃** | Qwen Code | PR 量（26）显著高于 Issues（7），功能推进主动 |
| 📉 **低活跃** | Kimi Code CLI | Issues 仅 4 条，社区反馈有限 |

### 5.2 成熟度评估

- **最成熟**：**Claude Code** — 插件生态完善、Issue 响应机制成熟、功能边界清晰
- **快速迭代**：**OpenAI Codex、OpenCode** — 功能快速堆砌，部分功能尚处实验阶段
- **成长期**：**Qwen Code** — 版本高频发布（v0.11.1），功能快速补齐
- **早期探索**：**Kimi Code CLI** — 功能聚焦但社区声量小，需扩大用户基础

---

## 6. 值得关注的趋势信号

### 6.1 行业趋势

| 趋势 | 证据 | 开发者建议 |
|------|------|------------|
| **远程开发基础设施化** | Codex 217 赞 SSH 需求、Gemini 远程 Agent Sprint | 提前调研远程开发集成方案 |
| **标准化配置从约定到实现** | AGENTS.md 成为多工具共识 | 项目中采用 AGENTS.md 规范 |
| **安全合规成为标配** | 客户端脱敏、push-guardrails、Policy Engine | 企业用户优先选择安全功能完善者 |
| **Mode/Pattern 系统兴起** | Qwen Modes Layer、Claude 模式化 | 关注工作流模式化配置能力 |
| **Provider 多元化** | OpenCode 多模型支持、Gemini 自定义端点 | 避免厂商锁定，关注互操作性 |

### 6.2 开发者行动建议

1. **选型参考**：若侧重远程开发，优先考虑 Codex；若有安全合规需求，关注 Claude Code 和 Qwen Code
2. **生态迁移**：AGENTS.md 已成为跨工具标准，建议在项目中统一采用
3. **关注迭代**：Qwen Code 版本迭代活跃，国内开发者可重点关注其发展
4. **风险提示**：OpenCode 内存泄漏问题影响生产环境，部署前需评估；Kimi Code CLI 社区较小，问题响应周期可能较长

---

> **结论**：2026 年 Q1，AI CLI 工具竞争焦点从“能力堆砌”转向“场景深耕”和“安全合规”。远程开发与标准化配置是确定性趋势，开发者应根据自身场景（远程协作、安全要求、多模型需求）选择合适工具，同时关注 AGENTS.md 等行业标准以保持跨工具兼容性。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-03-01**

---

## 1. 热门 Skills 排行

| 排名 | PR 标题 | 功能概述 | 社区讨论热点 | 状态 |
|:---:|---------|---------|-------------|:----:|
| #1 | **Add skill-quality-analyzer and skill-security-analyzer** | 为市场新增两个元技能：质量分析器（五维评估结构/文档/资源/示例/一致性）和安全分析器 | 社区对 Skill 质量保障工具需求强烈，涵盖结构化评估标准 | [OPEN](https://github.com/anthropics/skills/pull/83) |
| #2 | **Improve frontend-design skill clarity and actionability** | 改进前端设计技能的清晰度、可操作性和内部一致性，确保指令可在单次对话内执行 | 提升 Skill 实操性的最佳实践探讨 | [OPEN](https://github.com/anthropics/skills/pull/210) |
| #3 | **Add comprehensive system documentation and flowcharts** | 创建完整的证据管理系统文档：系统概览、架构、流程图、生命周期等 | 文档即技能的规范化探索 | [OPEN](https://github.com/anthropics/skills/pull/95) |
| #4 | **Add codebase-inventory-audit skill** | 代码库清理和文档审计技能，识别孤儿代码、未使用文件、文档缺口 | 10步工作流产出 CODEBASE-STATUS.md 作为单一信源 | [OPEN](https://github.com/anthropics/skills/pull/147) |
| #5 | **Add 8 new skills: foundation, standards, and development series** | 批量新增8个技能：tutorial-builder、quiz-generator、a11y-auditor、changelog-curator、data-storytelling 等 | 一次性扩展 Skills 生态的基础设施级贡献 | [OPEN](https://github.com/anthropics/skills/pull/288) |
| #6 | **Add masonry-generate-image-and-videos skill** | Masonry AI 图像/视频生成技能（Imagen 3.0、Veo 3.1） | 多模态生成能力集成 | [OPEN](https://github.com/anthropics/skills/pull/335) |
| #7 | **Add Buildr skill - Telegram bridge for Claude Code** | Telegram 桥接技能，镜像消息、转发权限、任务控制 | 移动端远程控制 Claude Code 的场景 | [OPEN](https://github.com/anthropics/skills/pull/419) |
| #8 | **Add AURELION skill suite (kernel, advisor, agent, memory)** | 认知+记忆框架技能套件，5层结构化思维模板 | 专业知识管理和 AI 协作框架 | [OPEN](https://github.com/anthropics/skills/pull/444) |

> **注**：所有热门 PR 评论数均显示 undefined，可能与数据采集时评论未同步有关，但从提交频率和内容深度可判断社区关注度。

---

## 2. 社区需求趋势

### 🔥 最活跃的 Issue 方向

| Issue | 需求类型 | 关键洞察 |
|-------|---------|---------|
| **#62** (10评论) | **用户痛点** | 用户创建的 12 个复杂技能凭空消失并报错 → 技能持久化/迁移问题 |
| **#202** (8评论) | **最佳实践** | skill-creator 应改为操作指令而非开发文档，违反命名规范 → **Token 效率**和**规范化**诉求 |
| **#412** | **新技能方向** | agent-governance：AI 代理系统的安全模式、政策执行、威胁检测、信任评分、审计追踪 |
| **#189** | **生态问题** | document-skills 与 example-skills 内容重复导致上下文窗口冗余 |
| **#16** | **架构提议** | 将 Skills 暴露为 MCPs，实现 API 标准化封装 |
| **#185** | **基础设施** | Skills MCP — AI 代理的包管理器提案 |

### 📌 趋势提炼

1. **治理与安全**：社区明确提出需要 agent-governance 类技能，关注 AI 系统的安全合规
2. **质量规范化**：skill-creator 的最佳实践争议表明社区重视 Skill 撰写规范
3. **多模态集成**：图像/视频生成、远程控制（Telegram）等场景技能需求增长
4. **基础设施**：MCP 集成、包管理、API 稳定性是底层诉求

---

## 3. 高潜力待合并 Skills

以下 PR 虽无公开评论，但功能完整度高，可能近期合并：

| PR | 功能 | 合并潜力 |
|----|------|:--------:|
| **#362** | 修复 skill-creator UTF-8 多字节字符 panic | ⭐⭐⭐ |
| **#284** | 指定 UTF-8 编码读取 SKILL.md | ⭐⭐⭐ |
| **#236** | 统一技能名称长度验证（40 vs 64 字符） | ⭐⭐⭐ |
| **#246** | 用户偏好配置技能（NL/EN + Dutch） | ⭐⭐ |
| **#181** | SAP-RPT-1-OSS 预测分析技能 | ⭐⭐ |
| **#386** | ShieldCortex：持久化内存+安全 | ⭐⭐ |

---

## 4. Skills 生态洞察

> **一句话总结**：当前社区最集中的诉求是 **Skill 质量规范化与安全治理能力**，同时对多模态交互和远程控制场景的扩展需求快速增长，底层基础设施（MCP 集成、API 稳定性）仍是生态健康的关键瓶颈。

---

**数据来源**：[anthropics/skills](https://github.com/anthropics/skills) | 统计截止：2026-03-01

---

# Claude Code 社区动态日报 | 2026-03-01

---

## 1. 今日速览

今日 Claude Code 社区热度集中在 **AGENTS.md 标准化支持** 和 **Windows Cowork 虚拟机兼容性问题** 两个方向。Issue #6235 关于 AGENTS.md 支持的请求已获得 2927 赞同，社区呼声极高；与此同时，多个 PR 正在推进 AGENTS.md 插件化解决方案。Windows 平台的 Cowork 功能仍存在大量 "Virtualization is not enabled" 报错，影响用户体验。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 社区热点 Issues

| # | Issue | 摘要 | 评论/热度 | 为何重要 |
|---|-------|------|-----------|----------|
| 1 | **[#6235](https://github.com/anthropics/claude-code/issues/6235)** | Feature Request: Support AGENTS.md | 214 评论 · 2927 👍 | 社区最热门需求！Codex、Amp、Cursor 等工具已围绕 AGENTS.md 标准化，Claude Code 需要兼容以提升协作能力 |
| 2 | **[#28892](https://github.com/anthropics/claude-code/issues/28892)** | Claude Desktop cannot install on Windows - redirects to Microsoft Store | 44 评论 · 12 👍 | Windows 安装流程存在严重障碍，影响用户首次使用 |
| 3 | **[#8509](https://github.com/anthropics/claude-code/issues/8509)** | VS Code Extension 2.0.0 no longer opens a diff in a separate window | 20 评论 · 10 👍 | IDE 集成回归 bug，影响开发者工作流 |
| 4 | **[#15942](https://github.com/anthropics/claude-code/issues/15942)** | Add support for Visual Studio 2026 Integration | 15 评论 · 82 👍 | Visual Studio 2026 新版本集成需求，82 赞表明较强需求 |
| 5 | **[#19503](https://github.com/anthropics/claude-code/issues/19503)** | Cowork 'Failed to create bridge sockets' error on session resume | 12 评论 · 4 👍 | macOS Cowork 功能关键 bug，导致任务在确认步骤失败 |
| 6 | **[#24962](https://github.com/anthropics/claude-code/issues/24962)** | Cowork VM fails on Windows 11 Home: wrong DNS config, missing sessiondata.vhdx | 11 评论 · 5 👍 | Windows 11 Home 特定环境兼容性问题 |
| 7 | **[#11789](https://github.com/anthropics/claude-code/issues/11789)** | I cannot uninstall Claude Code because I do not have an active paid account | 11 评论 · 3 👍 | 用户体验问题 — 付费墙阻碍卸载 |
| 8 | **[#18322](https://github.com/anthropics/claude-code/issues/18322)** | Plugin marketplace shows 'installed' for project-scoped plugins from other projects | 9 评论 · 5 👍 | 插件系统 UI 混乱问题 |
| 9 | **[#12676](https://github.com/anthropics/claude-code/issues/12676)** | Video Input Support in Claude Code | 9 评论 · 17 👍 | 多模态能力扩展需求 |
| 10 | **[#19649](https://github.com/anthropics/claude-code/issues/19649)** | MODEL: Frequently uses Bash tools when use-case is well aligned to builtin tools | 6 评论 · 25 👍 | 模型工具选择优化建议 |

---

## 4. 重要 PR 进展

| # | PR | 摘要 | 状态 |
|---|-----|------|------|
| 1 | **[#29835](https://github.com/anthropics/claude-code/pull/29835)** | feat: Add agents-md plugin for AGENTS.md fallback support | OPEN |
| 2 | **[#29833](https://github.com/anthropics/claude-code/pull/29833)** | feat: Add agents-md plugin for AGENTS.md fallback support | CLOSED |
| 3 | **[#29759](https://github.com/anthropics/claude-code/pull/29759)** | fix: RTL text rendering regression in VSCode webview since v2.1.63 | OPEN |
| 4 | **[#29757](https://github.com/anthropics/claude-code/pull/29757)** | docs(plugin-dev): clarify skill naming in skill-development guide | OPEN |
| 5 | **[#29755](https://github.com/anthropics/claude-code/pull/29755)** | feat: add verified-code-answers plugin to fix unverified assertions | OPEN |
| 6 | **[#29732](https://github.com/anthropics/claude-code/pull/29732)** | feat: Add push-guardrails plugin to prevent accidental code exposure | OPEN |
| 7 | **[#29731](https://github.com/anthropics/claude-code/pull/29731)** | docs: use lowercase hyphenated format for skill name examples | OPEN |
| 8 | **[#29668](https://github.com/anthropics/claude-code/pull/29668)** | fix: handle unbound PROMPT_PARTS array in ralph-wiggum setup | OPEN |
| 9 | **[#29656](https://github.com/anthropics/claude-code/pull/29656)** | Fix GitHub Actions shell injection vulnerability | OPEN |
| 10 | **[#29606](https://github.com/anthropics/claude-code/pull/29606)** | edit redme.md | OPEN |

**亮点 PR 解读：**

- **#29835 / #29833** — AGENTS.md 插件化方案，通过 SessionStart hook 自动检测并加载 AGENTS.md 文件，是回应社区最高热度需求的解决方案
- **#29759** — 修复 RTL 文本渲染回归问题，影响阿拉伯语、希伯来语等用户
- **#29755** — 新插件区分验证与非验证代码回答，提升答案可信度透明度
- **#29732** — push-guardrails 插件防止意外将私有代码推送到公开仓库，直接回应 #29225 的安全事件

---

## 5. 功能需求趋势

从 50 条 Issues 中提炼出以下社区关注方向：

| 方向 | 热度 | 典型 Issue |
|------|------|-------------|
| **AGENTS.md / CLAUDE.md 标准化** | ⭐⭐⭐⭐⭐ | #6235 (2927 赞) |
| **IDE 集成增强** | ⭐⭐⭐⭐ | #15942 (VS 2026), #8509 (VS Code diff) |
| **Cowork 功能稳定性** | ⭐⭐⭐⭐ | 多条 Windows 虚拟机报错 |
| **多模态能力** | ⭐⭐⭐ | #12676 (视频输入) |
| **跨平台兼容性** | ⭐⭐⭐ | Windows 11 Home, macOS 各平台问题 |
| **模型工具选择优化** | ⭐⭐ | #19649 (减少不必要的 Bash 调用) |
| **安全与隐私** | ⭐⭐ | #29732 PR (push-guardrails) |

---

## 6. 开发者关注点

### 痛点总结

1. **Windows Cowork 虚拟机问题集中爆发**
   - 过去 24 小时内多条相关 Issues 更新，"Virtualization is not enabled" 错误在多个 Windows 11 配置上复现
   - 包括 Home/Pro 版本、Intel/AMD CPU 等多种组合

2. **安装与卸载体验不佳**
   - Windows 安装重定向到 Microsoft Store
   - 付费账户才能卸载的限制

3. **VS Code 扩展回归**
   - v2.1.63 引入的 RTL 文本渲染问题和 diff 窗口行为变化

### 高频需求

- **标准化配置支持**：AGENTS.md 已成为行业事实标准，社区强烈要求兼容
- **IDE 深度集成**：Visual Studio 2026 支持、VS Code 功能完善
- **多模态扩展**：视频输入能力
- **安全防护**：代码泄露防护、答案验证机制

---

*本日报基于 2026-03-01 GitHub 公开数据生成*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**2026年3月1日**

---

## 1. 今日速览

今日 Codex 社区活跃度较高，**WebSocket 连接问题**成为焦点，多个用户报告 Linux 平台下 WebSocket 频繁回退至 HTTPS；**远程开发功能**获得大量关注（217 赞），表明用户对 SSH/Remote Hosts 支持的强烈需求。同时 Native Teams 功能相关 PR 持续推进，预示着团队协作能力即将上线。

---

## 2. 版本发布

**今日无新版本发布**（过去24小时内无 Release）

---

## 3. 社区热点 Issues（TOP 10）

| # | Issue | 摘要 | 评论/点赞 | 为什么重要 |
|---|-------|------|-----------|------------|
| 1 | **[#10450](https://github.com/openai/codex/issues/10450)** 远程开发支持 | 请求在 Codex Desktop App 中支持 SSH/Remote Hosts 连接远程开发环境 | 29 / **217** 🔥 | 呼声最高的功能需求，直接对标 VS Code Remote Development，用户量巨大 |
| 2 | **[#13041](https://github.com/openai/codex/issues/13041)** WebSocket 1008 Policy 错误 | WebSocket 升级成功后被服务器关闭，触发回退 HTTPS 循环 | 33 / 37 | 影响所有 Linux 用户，连接可靠性问题，讨论热度最高 |
| 3 | **[#3141](https://github.com/openai/codex/issues/3141)** 沙盒内 GPU 访问 | 沙盒环境无法访问 NVIDIA GPU，阻碍深度学习开发 | 28 / 32 | 开发者核心需求，AI/ML 工作流关键能力 |
| 4 | **[#12764](https://github.com/openai/codex/issues/12764)** CLI 401 未授权错误 | Codex CLI 频繁返回 401 未授权错误 | 28 / 0 | 影响 CLI 正常使用，认证问题需优先解决 |
| 5 | **[#1980](https://github.com/openai/codex/issues/1980)** Linux XDG 规范遵循 | 建议将数据存储路径从 `~/.codex` 改为 XDG 标准路径 | 16 / 65 | Linux 桌面生态兼容性，符合开源最佳实践 |
| 6 | **[#13106](https://github.com/openai/codex/issues/13106)** 流式 UI 更新回归 | v26.227.1448 版本聚焦时流式输出不渲染 | 18 / 18 | 明确的回归 bug，影响日常使用体验 |
| 7 | **[#5547](https://github.com/openai/codex/issues/5547)** /review 配置化 | 期望可配置 /review 返回的 issue 数量 | 10 / 34 | 代码审查体验优化，实用功能增强 |
| 8 | **[#13148](https://github.com/openai/codex/issues/13148)** Windows EOL 处理问题 | Codex 总是修改 Windows 换行符，导致脚本执行失败 | 4 / 1 | Windows 用户痛点，跨平台兼容性 bug |
| 9 | **[#13167](https://github.com/openai/codex/issues/13167)** 使用额度下降 2-4 倍 | 用户报告 Token 消耗速率异常增加 | 2 / 1 | 涉及计费问题，多名用户反馈 |
| 10 | **[#13121](https://github.com/openai/codex/issues/13121)** 英语语言不可用 | 更新后无法切换至英语界面 | 3 / 7 | 本地化 bug，影响广泛 |

---

## 4. 重要 PR 进展（TOP 10）

| # | PR | 摘要 | 状态 | 意义 |
|---|-----|------|------|------|
| 1 | **[#13156](https://github.com/openai/codex/pull/13156)** TUI 原生团队命令 + Shift+Down | 添加 `/team` 斜杠命令和快捷键，改进 agent picker | OPEN | 团队协作入口优化，交互体验提升 |
| 2 | **[#13155](https://github.com/openai/codex/pull/13155)** 持久化原生团队 + team task tools | 添加 TeamRegistry 和任务工具，支持团队任务管理 | OPEN | Native Teams 核心功能，数据持久化 |
| 3 | **[#13157](https://github.com/openai/codex/pull/13157)** README 团队功能文档 | 添加原生代理团队使用说明 | OPEN | 文档完善，降低上手门槛 |
| 4 | **[#12864](https://github.com/openai/codex/pull/12864)** 插件加载功能 | 支持通过 `plugins.<name>` 配置加载插件 | OPEN | 扩展性重大更新，支持第三方集成 |
| 5 | **[#13096](https://github.com/openai/codex/pull/13096)** 回滚可恢复重建 | 添加可恢复的 RolloutReconstructionState，支持回退操作 | OPEN | 增强会话恢复能力，提升可靠性 |
| 6 | **[#12293](https://github.com/openai/codex/pull/12293)** 中断时部分提交答案 | 在 Esc/Ctrl-C 时提交已承诺答案 | OPEN | 输入体验优化，中断处理更友好 |
| 7 | **[#11841](https://github.com/openai/codex/pull/11841)** 保留非 App MCP 工具 | 修复 Apps 模式下隐藏非 codex_apps MCP 工具的回归 | CLOSED ✅ | Bug 修复，保证工具可见性 |
| 8 | **[#12951](https://github.com/openai/codex/pull/12951)** /copy 支持 OSC-52 | 为 SSH 场景添加 OSC-52 剪贴板支持 | OPEN | 远程开发场景关键能力 |
| 9 | **[#13122](https://github.com/openai/codex/pull/13122)** 限制 memory stage-1 来源 | 可配置记忆阶段摄入来源 | OPEN | 记忆功能定制化，隐私控制 |
| 10 | **[#13100](https://github.com/openai/codex/pull/13100)** macOS 浏览器 MCP 传输恢复 | 修复浏览器 MCP 传输失败后的恢复机制 | CLOSED ✅ | macOS 可靠性提升 |

---

## 5. 功能需求趋势

从 Issues 中提炼出社区最关注的功能方向：

| 方向 | 需求描述 | 相关 Issue |
|------|----------|------------|
| **🏢 远程开发** | SSH / Remote Hosts 支持、远程机器代码开发 | #10450, #12951 |
| **⚡ 性能/资源** | 沙盒 GPU 访问、Token 消耗优化 | #3141, #13167 |
| **🔧 平台兼容** | Windows EOL 处理、Linux XDG 规范、WSL 支持 | #13148, #1980, #13151 |
| **🔐 认证/授权** | 401 错误修复、WebSocket 稳定性 | #12764, #13041, #13168 |
| **📱 CLI/TUI 增强** | /compact 命令、/review 配置、帮助 agent | #11325, #5547, #13161 |
| **🔌 扩展生态** | 插件系统、MCP 环境变量支持 | #12864, #2680 |
| **👥 团队协作** | Native Teams、任务管理、团队持久化 | #13155, #13156 |

---

## 6. 开发者关注点

### 🔴 关键痛点

1. **认证与连接稳定性**
   - 多起 401 未授权错误报告
   - Linux 平台 WebSocket 频繁回退 HTTPS
   - 影响核心使用体验

2. **Windows 兼容性**
   - EOL 换行符被强制修改
   - Markdown 文件链接错误打开浏览器
   - 自动批准设置失效

3. **资源访问限制**
   - 沙盒无法使用 GPU
   - Token 消耗异常（可能影响预算）

### 🟢 高频需求

- **远程开发环境**：SSH/RDP 支持是最高赞功能请求
- **插件系统**：加载插件功能已在 PR 中实现
- **团队协作**：Native Teams 功能正在积极开发
- **Linux 桌面集成**：XDG 规范遵循符合开源标准

---

*本日报基于 GitHub openai/codex 仓库 2026-03-01 公开数据整理*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 (2026-03-01)

## 1. 今日速览

今日 GitHub 活跃度较高，共 50 条 Issues 和 50 条 PR 更新。**热点集中在用户体验优化**（终端闪烁、滚动卡顿）和**远程 Agent 架构**（Sprint 1-3 Epic）。同时出现多个关于 API 端点自定义和工具安全性的重要修复。

---

## 2. 版本发布

**暂无新版本发布**（过去 24 小时内无 Release）

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 重要性说明 | 评论数 |
|---|-------|-----------|-------|
| 1 | **[#20142](https://github.com/google-gemini/gemini-cli/issues/20142)** - AskUser open questions 不支持 Ctrl+R 搜索历史 | 用户交互体验痛点，在开放性问题输入时无法快速检索历史记录 | 8 |
| 2 | **[#18896](https://github.com/google-gemini/gemini-cli/issues/18896)** - Windows 终端滚动时屏幕闪烁 | P2 优先级，影响 Windows 用户日常使用，尤其是大文件列表和设置菜单 | 5 |
| 3 | **[#20302](https://github.com/google-gemini/gemini-cli/issues/20302)** - [Epic] 远程 Agent：Sprint 1 (P0) 基础设施与核心 UX | 核心架构级功能，远程 Agent 流式传输支持，P0 优先级 | 3 |
| 4 | **[#20181](https://github.com/google-gemini/gemini-cli/issues/20181)** - AskUser 支持外部编辑器回答开放问题 | 提升长文本输入体验，与常规聊天保持一致性 | 3 |
| 5 | **[#19514](https://github.com/google-gemini/gemini-cli/issues/19514)** - Plan 模式下 AskUser 输出原始标签 | Bug 修复，影响 Plan 模式下的用户体验 | 3 |
| 6 | **[#18953](https://github.com/google-gemini/gemini-cli/issues/18953)** - Agent 执行带"magic"的 CLI 命令非常慢 | 性能问题，执行复杂 shell 命令比直接运行慢 100 倍 | 3 |
| 7 | **[#20461](https://github.com/google-gemini/gemini-cli/issues/20461)** - 支持对 Plan 进行迭代反馈标注 | Plan 模式功能增强，Agent 审核文件后提交审批 | 2 |
| 8 | **[#20217](https://github.com/google-gemini/gemini-cli/issues/20217)** - 输入文件路径时闪烁 | UI 交互问题，影响输入体验 | 2 |
| 9 | **[#20195](https://github.com/google-gemini/gemini-cli/issues/20195)** - [Agents] 本地子 Agent Sprint 1 | 子 Agent 功能开发，实验性功能推进 | 2 |
| 10 | **[#20058](https://github.com/google-gemini/gemini-cli/issues/20058)** - Policy Engine 应支持 Headless 模式 | P1 优先级，无头模式下策略引擎功能缺失 | 2 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 内容摘要 |
|---|-----|------|----------|
| 1 | **[#19173](https://github.com/google-gemini/gemini-cli/pull/19173)** | Bugfix | 修复 WSL 运行 Windows 二进制文件时的死锁问题（关键） |
| 2 | **[#20108](https://github.com/google-gemini/gemini-cli/pull/20108)** | Bugfix | 修复循环检测导致的致命崩溃（AbortError 竞态条件） |
| 3 | **[#20754](https://github.com/google-gemini/gemini-cli/pull/20754)** | Feature | VSCode 集成：添加上下文菜单，暴露 ~/.gemini/commands/*.toml |
| 4 | **[#20681](https://github.com/google-gemini/gemini-cli/pull/20681)** | Feature | 支持 GOOGLE_GEMINI_BASE_URL 环境变量，自定义 API 端点（支持 Ollama/LiteLLM） |
| 5 | **[#20762](https://github.com/google-gemini/gemini-cli/pull/20762)** | Bugfix | 修复 --allowed-tools 对 MCP 工具无效的问题 |
| 6 | **[#20752](https://github.com/google-gemini/gemini-cli/pull/20752)** | Bugfix | 修复 MemoryTool 中的 TOCTOU 数据丢失竞态条件 |
| 7 | **[#20760](https://github.com/google-gemini/gemini-cli/pull/20760)** | Bugfix | 修复 Policy commandPrefix 正则匹配（空格和连字符处理错误） |
| 8 | **[#20751](https://github.com/google-gemini/gemini-cli/pull/20751)** | Feature | 支持空聊天会话持久化，扩展 --resume 跨项目恢复 |
| 9 | **[#19954](https://github.com/google-gemini/gemini-cli/pull/19954)** | Feature | 发现工具支持实时流式输出和 stderr 转发 |
| 10 | **[#20691](https://github.com/google-gemini/gemini-cli/pull/20691)** | Feature | --resume 支持跨项目文件夹通过会话 ID 恢复 |

---

## 5. 功能需求趋势

从 Issues 中提炼出以下**社区关注方向**：

| 方向 | 具体需求 | 热度 |
|------|----------|------|
| **远程/子 Agent 架构** | Remote Agents Sprint 1-3、本地子 Agent、Agent 实验默认启用 | 高 |
| **UI/UX 优化** | 终端闪烁、滚动卡顿、键盘快捷键标准化 | 中高 |
| **API 灵活性** | 自定义 API 端点（GOOGLE_GEMINI_BASE_URL）、OAuth 支持 | 中 |
| **Plan 模式增强** | 迭代反馈、外部编辑器支持、Plan 目录设置 | 中 |
| **无头模式支持** | Policy Engine、--allowed-tools 在非交互模式下工作 | 中 |
| **终端性能** | Shell 命令执行速度优化、循环检测改进 | 中 |

---

## 6. 开发者关注点

### 痛点
1. **Windows/WSL 兼容性**：死锁问题、终端闪烁严重影响日常使用
2. **循环检测崩溃**：Fatal hard-crash 影响稳定性
3. **MCP 工具权限**：--allowed-tools 在非交互模式失效

### 高频需求
- **会话恢复**：跨项目 --resume、持久化空会话
- **Policy 匹配**：正则表达式修复、commandPrefix 支持
- **发现工具**：实时输出流式传输支持

---

*报告生成时间：2026-03-01 | 数据来源：google-gemini/gemini-cli*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**2026年3月1日**

> ⚠️ **数据说明**：本日报基于 GitHub 数据源，过去 24 小时内共收录 **4 条 Issues** 和 **5 条 PRs**，部分分析基于现有数据的合理推断。

---

## 1. 今日速览

2026年3月1日，Kimi Code CLI 社区保持活跃。Issue 区新增 4 条问题反馈，主要集中在 **远程 SSH 使用场景** 和 **Task 任务执行** 方面的 bug；PR 区有 5 条更新，包含文件扫描优化和环境变量信任等功能改进。当前暂无新版本发布。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 社区热点 Issues

| # | 类型 | 标题 | 重要性分析 |
|---|------|------|------------|
| #1287 | 🆕 enhancement | [enhancement] 执行当前任务时无法为下一个任务编写 prompt | **高** - 涉及多任务流水线操作的用户体验痛点，用户希望在连续任务处理场景中能提前准备下一个 prompt，提升工作效率 |
| #1293 | 🆕 bug | 在远程 SSH 服务器上使用 Kimi CLI 时无法交流 | **高** - SSH 无图形界面环境下的阻塞性问题，影响远程开发场景，可能与 DNS 解析或网络配置相关 |
| #1292 | 🆕 bug | 调用 Task 子任务时会卡住 | **中** - macOS 平台上的任务执行稳定性问题，可能导致开发者工作流中断 |
| #1276 | bug | `@` 自动完成缺失文件 | **中** - 文件引用自动补全功能异常，影响代码编写效率 |

> 📊 社区反应：所有 Issue 均处于 OPEN 状态，暂无官方响应记录。Issue #1287 和 #1293 获得评论互动，反映用户对远程开发和多任务流的需求较强。

---

## 4. 重要 PR 进展

| # | 类型 | 标题 | 内容摘要 |
|---|------|------|----------|
| #1286 | 🆕 feat | feat(cli): 扫描补全器时优先浅层子文件夹 | 优化文件索引策略，优先处理浅层目录以提升自动补全响应速度 |
| #1236 | 🆕 feat | feat(auth): 启用 trust_env 支持 | 在 aiohttp.ClientSession 中启用 trust_env，修复代理环境下的认证问题 |
| #743 | feat | Update uv_build version requirement | 依赖版本更新，保持构建工具兼容性 |
| #1127 | style | style(web): 调整 Web UI 细节 | UI 细节优化，提升界面一致性 |
| #173 | 📦 chore | chore: bump version to 0.50 | 版本更新（已关闭） |

> 🔍 趋势观察：近期 PR 集中在 **功能增强** 和 **体验优化**，未涉及重大架构变更。Trust_env 支持和文件扫描优化是开发者社区关注的功能改进。

---

## 5. 功能需求趋势

基于现有 Issues 分析，社区关注的功能方向如下：

| 方向 | 相关 Issue | 热度评估 |
|------|-----------|----------|
| **远程开发/SSH 支持** | #1293 | ⭐⭐⭐ 高 |
| **多任务流水线** | #1287 | ⭐⭐⭐ 高 |
| **Task 执行稳定性** | #1292 | ⭐⭐ 中 |
| **文件引用自动补全** | #1276 | ⭐⭐ 中 |

> 📌 **总结**：远程开发场景支持（SSH 环境）和多任务协作流是当前社区最迫切的需求，其次是任务执行的稳定性和补全功能的完善。

---

## 6. 开发者关注点

### 🔴 核心痛点

1. **SSH 远程环境兼容性** - 在无图形界面、无法修改 DNS 的远程服务器上无法正常使用 CLI 工具
2. **Task 任务执行卡顿** - 子任务调用时出现卡住现象，影响开发效率
3. **Prompt 输入限制** - 任务执行期间无法提前准备下一个 prompt，阻断连续工作流

### 🟡 高频需求

- 文件 `@` 引用自动补全功能修复
- 代理/环境变量场景下的认证支持（#1236 已覆盖）
- 文件扫描性能优化（#1286 已覆盖）

---

**日报编制说明**：本报告基于 2026-03-01 GitHub 数据整理，Issues 和 PRs 收录以 24 小时为周期。如有遗漏或需深入分析特定议题，请随时告知。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-03-01)

## 今日速览

今日 OpenCode 社区继续保持高度活跃。**GitLab Duo Agent Platform (DAP) 集成**相关 Issue 和 PR 双双落地，成为最大亮点。社区焦点集中在**内存泄漏严重问题**、**Windows 平台兼容性**以及**TUI/应用功能对标**上。同时出现了多个高关注度的功能提案（如语音输入、Vim 快捷键），反映了用户对生产力提升的强烈诉求。

---

## 版本发布

**暂无新版本发布**。过去 24 小时内无 Release 更新。

---

## 社区热点 Issues（精选 10 个）

| # | 标题 | 重要性说明 | 社区反应 |
|---|------|-----------|----------|
| [#1764](https://github.com/anomalyco/opencode/issues/1764) | **[FEATURE] vim motions in input box** | 用户强烈呼吁在输入框支持 Vim 键盘快捷键（对标 ClaudeCode），105 赞、17 评论，热度最高 | 长期讨论，开发者持续关注 |
| [#4695](https://github.com/anomalyco/opencode/issues/4695) | **[FEATURE] Speech-to-Text Voice Input** | 语音输入功能提案，面向"懒人"开发者，89 赞、18 评论 | 新兴需求，用户期待度高 |
| [#13230](https://github.com/anomalyco/opencode/issues/13230) | **[Critical] Memory leak causes kernel soft lockups** | 严重内存泄漏导致 OOM 和系统崩溃，影响 Linux 生产环境 | 高优先级Bug，需紧急修复 |
| [#15560](https://github.com/anomalyco/opencode/issues/15560) | **[core] feat: integrate GitLab Duo Agent Platform (DAP)** | 新增 GitLab DAP 工作流模型支持，官方功能扩展 | 已合并，社区欢呼 |
| [#13369](https://github.com/anomalyco/opencode/issues/13369) | **[bug, windows] Undeletable `nul` file** | Windows 下创建无法删除的 `nul` 文件，影响用户体验 | 典型平台 Bug，报告详细 |
| [#5635](https://github.com/anomalyco/opencode/issues/5635) | **[web] feat(desktop): Add option to run OpenCode backend via WSL** | Windows 用户希望在 WSL 环境中运行后端，26 赞、6 评论 |WSL 用户刚需 |
| [#12570](https://github.com/anomalyco/opencode/issues/12570) | **[bug, zen] Responses using GPT-5.3-Codex terminate early** | OpenAI Codex 模型响应提前终止，影响特定模型使用 | 模型兼容性问题 |
| [#13217](https://github.com/anomalyco/opencode/issues/13217) | **[bug] Stops after compaction** | 自动压缩后任务中断，需手动"keep going" | 影响长任务流畅性 |
| [#14539](https://github.com/anomalyco/opencode/issues/14539) | **[bug, windows, web] Tool usages in Copilot sometimes consumes premium request** | GitHub Copilot 工具调用消耗超额请求 | 付费模型费用异常 |
| [#15562](https://github.com/anomalyco/opencode/issues/15562) | **[bug, core] Claude OAuth token requires re-authentication** | Claude OAuth 每当使用限制重置后需重新授权 | 认证流程痛点 |

---

## 重要 PR 进展（精选 10 个）

| # | 标题 | 类型 | 说明 |
|---|------|------|------|
| [#15573](https://github.com/anomalyco/opencode/pull/15573) | **feat: integrate GitLab Duo Agent Platform (DAP) workflow models** | 新功能 | 集成 GitLab DAP 工作流模型，支持动态模型发现和 DWS WebSocket 协议 |
| [#15587](https://github.com/anomalyco/opencode/pull/15587) | **feat(app): show which messages are queued** | 新功能 | 应用端显示排队消息，对齐 TUI 行为 |
| [#15578](https://github.com/anomalyco/opencode/pull/15578) | **feat(app): add compact ui** | 新功能 | 添加压缩逻辑，匹配 TUI |
| [#15574](https://github.com/anomalyco/opencode/pull/15574) | **feat(desktop): add /copy session transcript command** | 新功能 | 桌面端支持复制会话 transcript 命令 |
| [#14707](https://github.com/anomalyco/opencode/pull/14707) | **fix: recover from 413 Request Entity Too Large via auto-compaction** | Bug修复 | 自动压缩恢复 413 实体过大错误 |
| [#15538](https://github.com/anomalyco/opencode/pull/15538) | **fix(provider): normalize openai-compatible schema required field** | Bug修复 | 规范化 OpenAI 兼容 schema 的 required 字段 |
| [#15559](https://github.com/anomalyco/opencode/pull/15559) | **fix(tui): decode percent-encoded file URIs in initial prompts** | Bug修复 | 修复 TUI 初始提示中文件 URI 百分号编码显示问题 |
| [#15483](https://github.com/anomalyco/opencode/pull/15483) | **fix: symlink path resolution causing duplicate instances** | Bug修复 | 解决符号链接导致的重复实例和 TUI 冻结 |
| [#14287](https://github.com/anomalyco/opencode/pull/14287) | **fix(project): repair split project IDs across worktrees** | Bug修复 | 修复 git worktrees 项目 ID 拆分问题 |
| [#15045](https://github.com/anomalyco/opencode/pull/15045) | **fix: resolve config file read/write mismatch in update endpoint** | Bug修复 | 解决配置端点读写不匹配的关键 bug |

---

## 功能需求趋势

基于 Issue 分析，社区关注的功能方向如下：

1. **跨平台与终端兼容性**
   - Windows 支持（WSL 后端运行、`nul` 文件、Explorer 上下文菜单）
   - 终端模拟器适配（Ghostty TUI 闪烁、Windows Terminal 复制）
   - macOS 特定优化（剪贴板 fallback）

2. **编辑器/IDE 集成**
   - Vim 快捷键支持
   - 多行编辑
   - 自定义 LSP 支持（Bicep 文件语言 ID）

3. **AI 模型与 Provider 扩展**
   - GitLab DAP 工作流模型集成
   - Routstr Provider 支持
   - 免费模型使用限制处理

4. **用户界面与交互**
   - 消息排队状态显示
   - 时间线显示日期+时间
   - 拒绝编辑的可见性

5. **核心性能与稳定性**
   - 内存泄漏修复（Critical）
   - 自动压缩逻辑优化
   - 上下文溢出恢复

---

## 开发者关注点

1. **内存与性能** - 严重内存泄漏导致系统崩溃是当前最紧迫的痛点，影响生产环境使用。

2. **Windows 平台** - 多个相关 Issue（WSL、`nul` 文件、Explorer 集成、Copilot 费用），表明 Windows 用户群体庞大且遇到多样化问题。

3. **认证与授权** - Claude OAuth 频繁需重新授权、免费模型使用限制错误，影响用户使用连续性。

4. **TUI 与 App 功能对齐** - 多个 PR 致力于让 Web/Desktop 端实现 TUI 已有的功能（如消息排队、压缩、复制 transcript）。

5. **错误处理与恢复** - 413 错误自动恢复、无效模型退出码、配置读写不一致等，体现对健壮性的追求。

---

> 📊 今日共 50 条 Issues 更新，50 条 PR 更新。社区活跃度维持高位，功能迭代与 Bug 修复并行。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-03-01)

## 今日速览

今日 Qwen Code 社区保持高度活跃，共处理 **7 个 Issues** 和 **26 个 Pull Requests**。版本迭代至 v0.11.1，重点解决了 skill 调用空格问题、PDF 读取崩溃等关键 bug，同时在安全防护（MCP 服务脱敏）、IDE 集成（VSCode 辅助侧边栏）、用户引导等方面有重要功能更新。

---

## 版本发布

### v0.11.0-nightly.20260301.14df5a57 发布

**Full Changelog**: https://github.com/QwenLM/qwen-code/compare/v0.11.0...v0.11.0-nightly.20260301.14df5a57

同日合并 PR #2026 将版本正式标记为 **0.11.1**，进入正式版发布流程。

---

## 社区热点 Issues

### 1. 模型输出数字与汉字间强制添加空格 🔴 高优先级
**#2032** | 作者: @chi-xin-yan | 状态: OPEN | 👍 0 | 评论 1

**问题描述**：模型在输出的数字和汉字之间强制添加空格，导致文件名如 `12.txt` 读取失败。使用内置 Qwen3.5-Plus 模型通过网页授权时必现，网页版 Qwen Chat 无此问题。

**影响**：涉及文件读写功能的严重兼容性问题

🔗 https://github.com/QwenLM/qwen-code/issues/2032

---

### 2. 调川 skill 时自动添加空格导致无限循环 🔴 高优先级
**#2025** | 作者: @yuffo | 状态: OPEN | 评论 1

**问题描述**：skill 名称包含中文时，模型调用时会多加上一个空格，导致 lookup 失败进入无限循环。

**社区反应**：已关联 PR #2027 修复中

🔗 https://github.com/QwenLM/qwen-code/issues/2025

---

### 3. hooks 配置无法识别
**#1708** | 作者: @1likebeef | 状态: OPEN | 评论 3

**问题描述**：在 setting.json 中配置 hooks 无法被识别使用。

🔗 https://github.com/QwenLM/qwen-code/issues/1708

---

### 4. PDF 读取失败后 API 不可用
**#2020** | 作者: @LeslieZhang1314 | 状态: OPEN | 评论 1

**问题描述**：尝试让模型读取 PDF 时返回 API 错误，之后所有请求都持续返回 "API Error: 400"，会话完全不可用。

**状态**：已关联 PR #2028 修复

🔗 https://github.com/QwenLM/qwen-code/issues/2020

---

### 5. 建议引导免费用户升级到 Coding Plan
**#1983** | 作者: @tanzhenxin | 状态: OPEN | 👍 1

**功能建议**：免费配额用尽时，应引导用户升级到阿里云百炼 Coding Plan，而非仅显示通用错误信息。

🔗 https://github.com/QwenLM/qwen-code/issues/1983

---

### 6. /auth 对话框重构：提升 Coding Plan 层级
**#2016** | 作者: @tanzhenxin | 状态: OPEN

**功能建议**：将 /auth 对话框从嵌套的两级结构改为扁平的三选项布局，改善 Coding Plan 区域选择体验。

**进展**：已关联 PR #2030 实现中

🔗 https://github.com/QwenLM/qwen-code/issues/2016

---

### 7. 无法编辑工作空间外的文件
**#2033** | 作者: @yuffo | 状态: CLOSED

**功能建议**：用户希望能够编辑工作空间外的文件。

🔗 https://github.com/QwenLM/qwen-code/issues/2033

---

## 重要 PR 进展

| # | 标题 | 状态 | 重要性 |
|---|------|------|--------|
| **#1980** | feat: 实现 Modes Layer（6种内置模式） | OPEN | ⭐⭐⭐ |
| **#2030** | feat: 改进 auth 对话组 UX（三选项布局） | OPEN | ⭐⭐⭐ |
| **#2027** | fix: 去除 skill 名称空格（修复#2025） | OPEN | ⭐⭐⭐ |
| **#2028** | fix: PDF 转文本避免 API 错误（修复#2020） | **CLOSED** | ⭐⭐⭐ |
| **#2031** | feat: 添加 VibeGuard 风格客户端脱敏 | OPEN | ⭐⭐ |
| **#1954** | feat: VSCode 辅助侧边栏支持 | OPEN | ⭐⭐ |
| **#2029** | fix: 添加 bash/sh 别名支持 | OPEN | ⭐⭐ |
| **#2021** | fix: 检测截断的工具调用输出 | OPEN | ⭐⭐ |
| **#2018** | feat: 支持 AGENTS.md 作为默认上下文 | OPEN | ⭐⭐ |
| **#2005** | feat: 加强输出语言合规性模板 | OPEN | ⭐ |

### 重点 PR 解读

**#1980 - Modes Layer 实现**
新增 @qwen-code/modes 包，包含 ModeManager、ToolRouter、PromptComposer，提供 6 种内置模式：Architect、Code、Ask、Debug、Review、Orchestrator。支持 /mode 命令切换和 settings.json 自定义配置。

🔗 https://github.com/QwenLM/qwen-code/pull/1980

**#2031 - VibeGuard 风格客户端脱敏**
在请求模型前脱敏敏感信息（PII/密钥），使用 `__VG_<CATEGORY>_<hash12>__` 占位符，防止数据泄露至模型提供商。

🔗 https://github.com/QwenLM/qwen-code/pull/2031

**#2029 - bash/sh 别名支持**
解决模型常用 `bash`/`sh` 而非注册名 `run_shell_command` 导致的工具找不到问题。

🔗 https://github.com/QwenLM/qwen-code/pull/2029

---

## 功能需求趋势

基于本期 Issues 和 PR 归纳：

| 方向 | 热度 | 描述 |
|------|------|------|
| **UX/UI 优化** | 🔥🔥🔥 | auth 对话框重构、VSCode 侧边栏、Terminal 输出格式化 |
| **模型输出问题** | 🔥🔥 | 空格注入、截断检测、语言合规性 |
| **工具调用稳定性** | 🔥🔥 | skill 名称处理、shell 别名、PDF 读取 |
| **企业/安全功能** | 🔥 | 客户端脱敏 (VibeGuard)、MCP 服务管理 |
| **Subagent 能力** | 🔥 | skills 可见性配置、系统提示词限制文档化 |
| **用户引导** | 🔥 | 免费配额升级引导、Coding Plan 推广 |

---

## 开发者关注点

1. **模型输出格式问题**：数字与汉字间空格、截断检测是高频痛点，影响文件操作可靠性
2. **中文场景兼容**：skill 名称、hooks 配置的中文支持需完善
3. **错误恢复机制**：PDF 读取失败导致会话永久不可用的问题需健壮处理
4. **认证体验**：免费用户升级引导、auth 对话框信息透明度有待提升
5. **安全合规**：客户端脱敏需求显现，体现企业级使用场景

---

*本日报由 AI 技术分析师生成 | 数据截至 2026-03-01 24:00*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*