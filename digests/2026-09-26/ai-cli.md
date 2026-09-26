# AI CLI 工具社区动态日报 2026-09-26

> 生成时间: 2026-09-26 04:05 UTC | 覆盖工具: 11 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Pi](https://github.com/earendil-works/pi)
- [oh-my-pi](https://github.com/can1357/oh-my-pi)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告
**数据日期：2026-09-26 | 覆盖 10 款工具**

---

## 1. 生态全景

AI CLI 工具已从单纯的终端对话助手演进为**多模态（CLI/Desktop/移动端）、多 Agent（subagent/后台任务/远程控制）的开发操作系统**。头部玩家（Claude Code、Codex、Gemini CLI）竞争焦点转向**可扩展性（插件/MCP/hook）与企业级治理**，而 Pi、oh-my-pi、OpenCode 等轻量玩家则在多模型路由、成本控制和本地部署场景上快速卡位。值得注意的是，**Windows 平台支持、长会话稳定性、token 成本透明度**成为全行业共性短板——这三点是当前用户流失和抱怨的主要来源。

---

## 2. 各工具活跃度对比

| 工具 | 今日热点 Issues（量级） | 今日 PR（量级） | Release 情况 |
|---|---|---|---|
| Claude Code | 10+ 条热点（单条最高 218 评论） | ~5 条（全部聚焦 Mods） | v2.1.283 |
| OpenAI Codex | 10+ 条热点（Windows 回归集群） | 20+ 条合并 | 0.157.1 + 0.158 alpha ×3 + 0.159 alpha ×3 |
| Gemini CLI | 10 条热点（P1 ×4） | 10+ 条（P1 修复密集） | v0.63.0-nightly |
| GitHub Copilot CLI | 10 条热点 | **0 条** | v1.0.89-4 |
| Qwen Code | 10 条热点 | 10+ 条 | v0.24.6 三端同步（CLI/Desktop/TS SDK） |
| OpenCode | 10 条热点（2.x 迁移问题集中） | 10 条 | 无 |
| DeepSeek TUI (Codewhale) | 10 条 | **50 条更新**（0.10.1 冲刺） | 无 |
| Pi | 高活跃（110 条 Issue 更新） | 12 条 | 无 |
| oh-my-pi | 10 条 | 10 条 | v18.3.1 / v18.3.2 双补丁 |
| Kimi Code CLI / DeepSeek Harness | — | — | 无活动 |

**关键观察**：Codex 和 DeepSeek TUI 的 PR 吞吐量最高（单日 20-50 条），反映高强度开发；Copilot CLI 零 PR 但有 Release，属产品化节奏；Kimi/DeepSeek Harness 无活动，处于静默期。

---

## 3. 共同关注的功能方向

### 3.1 MCP 生态可靠性（8/10 款工具）
最普遍的共性痛点，且形态高度一致——**静默失败**：
- Claude Code #97336：MCP 结果被静默替换为占位符
- OpenCode #51437：MCP 启动失败后静默从工具列表消失
- Codex PR #48238/#48344：Windows MCP 弹窗与端点覆盖元数据丢失
- Pi #10051、Qwen #12165：MCP OAuth 兼容性问题
- Gemini CLI PR #29398：MCP 发现阶段卡满 10 分钟超时

**共识诉求：宁可报错，不要装没事。**

### 3.2 上下文压缩与 Token 成本（7/10 款工具）
- Claude Code：compact 时机误判（#92434）、指令文件重复注入（#97342）、缓存丢失（#94728）
- Copilot CLI：系统提示词固定吃掉 20,500 tokens（#2627，20 👍）
- Pi #10033、oh-my-pi #13336：压缩策略缺陷直接推高账单
- OpenCode：/usage 统一追踪呼声最高（34 👍）

**共识诉求：上下文成本可见性 + 压缩/缓存可靠性。**

### 3.3 认证与会话持久化（6/10 款工具）
长运行/无人值守场景下的致命短板：Copilot CLI token 停止刷新（#4929）、Claude Code Chrome 登录丢失（#97344）、Gemini CLI 认证无限循环（PR #29448）、OpenCode auth.json 非原子写入（PR #46131）。

### 3.4 Windows 一等公民化（5/10 款工具）
Codex 今日约一半 Issue 带 `windows-os` 标签（0.157.0 升级阻断级回归）；Qwen（/update 失败 + ripgrep 权限 + 编码乱码）、OpenCode（38GB 磁盘泄漏）、Gemini CLI（Wayland/WSL）均有集中反馈。

### 3.5 可扩展性 / 插件 API（5/10 款工具）
Claude Code Mods 提案（218 评论，年度最热）、DeepSeek TUI 迁移 TS+Cordis、Pi 引入 Codemode+MCP、oh-my-pi passive tool-call context、Gemini CLI 工具规模上限（128+ 工具报 400）。

### 3.6 Agent 编排与后台任务（5/10 款工具）
Claude Code 任务队列（#33323，56 👍）、Qwen Managed Agent 双路径架构（#12380，24 评论）、Codex Remote Control 附加会话（#37967）、oh-my-pi live steering、OpenCode 并行 subagent 上限（36 👍）。

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 技术路线 | 目标用户 |
|---|---|---|---|
| **Claude Code** | 企业级 Agent 开发平台 | 插件引擎（Mods）+ 网关治理 + 托管策略 | 企业开发团队、网关/合规场景 |
| **OpenAI Codex** | 全平台一体化（CLI+Desktop+移动） | Rust 核心 + daemon 架构 + copyberry 自动化交付 | 跨端办公用户（Windows 支持仍在补课） |
| **Gemini CLI** | Agent 可靠性工程 + 工具链创新 | 调度器层硬约束（非提示词层）、AST 感知探索、原生 bash + OS 沙箱 | 重度 Agent 用户、架构敏感型开发者 |
| **GitHub Copilot CLI** | GitHub 生态原生集成 | 模型路由优化 + Skills 体系 | GitHub 重度用户（开放性最弱，无 PR/系统提示不可配） |
| **Qwen Code** | Managed Agent 基础设施 | Session 持久化 + Workspace 绑定 + 三端发布流水线 | 多 Agent 编排、阿里云生态用户 |
| **OpenCode** | 开源多模型聚合 | 2.x 架构升级期，CLI+Desktop 双形态 | 本地模型用户（36 👍 并行限制需求）、成本敏感用户 |
| **DeepSeek TUI** | 信任与安全优先的 Rust TUI | 单一权威架构 + TS/Cordis 扩展宿主 + fail-closed 授权 | 安全审计敏感场景、可信 Agent 需求 |
| **Pi** | 极简、多后端兼容 | 自由组合 provider（OpenRouter/llama.cpp/本地） | 本地/自托管模型用户、非标准后端用户 |
| **oh-my-pi** | 多模型路由 + 实时协作 | live steering、failover/judge 路由、Collab | 多 provider 切换的重度用户 |

---

## 5. 社区热度与成熟度

**活跃度梯队**：

- **第一梯队（高热度 + 高交付）**：Claude Code（单 issue 218 评论，Mods 落地冲刺）、Codex（单日 20+ PR 合并，但 0.157.0 质量事故）
- **第二梯队（快速迭代期）**：Gemini CLI（P1 修复密集）、DeepSeek TUI（单日 50 条 PR 更新，0.10.1 冲刺）、Qwen Code（三端同步发布，流水线成熟）
- **第三梯队（稳定打磨期）**：Pi（清理积压 + 战略特性）、oh-my-pi（双补丁节奏）、OpenCode（2.x 迁移阵痛期）
- **静默期**：Kimi Code CLI、DeepSeek Harness

**成熟度判断**：Claude Code 和 Codex 功能最全但复杂度带来的回归风险也最高（Codex 0.157.0、Claude Code compact/权限问题）；Gemini CLI 和 DeepSeek TUI 展现最强的工程纪律（调度器层硬约束、测试绿门修复）；Pi 社区出现治理信号（#10008 自动关闭引发不满），需关注。

---

## 6. 值得关注的趋势信号

### 信号一：静默失败成为行业公敌
Claude Code、Gemini CLI、DeepSeek TUI、OpenCode、Codex 五家社区不约而同强调“fail loud”。**参考价值**：选型时应将错误传播链路作为评估维度；自研工具应避免任何“降级不告知”路径。

### 信号二：约束正在从提示词层下沉到架构层
Gemini CLI 调度器层强制执行“暂停”指令（PR #29394）、DeepSeek TUI 统一审批门消灭“第二权威”（PR #6583/#6588）、Qwen 修复 PreToolUse hook 竞态（#12683，deny 可被并发覆盖）。**趋势明确：安全约束靠提示词不可靠，必须机制化。**

### 信号三：Rust 核心 + TS 扩展宿主的混合架构成为主流
DeepSeek TUI 迁移 TS+Cordis、Qwen 分层架构、Codex Rust 核心——**核心循环保持系统语言保证安全，扩展生态用 TS 降低插件开发门槛**，是可预见的架构收敛方向。

### 信号四：企业网关/治理场景开始被产品化
Claude Code 的 prompt 分组头、`availableModelsMatch` 精确治理、Codex 的代理环境适配（PR #48198）——企业级计费、审计、模型管控正从附加需求变为核心卖点。

### 信号五：成本透明度是下一个竞争点
OpenCode /usage（34 👍）、Copilot CLI 系统提示词瘦身（20 👍）、Pi/OpenRouter 定价失真、oh-my-pi 缓存命中崩塌——**开发者对“隐性 token 消耗”的容忍度正在快速下降**，用量可见性工具将成为标配。

### 给开发者的实操建议
1. **Windows 生产环境暂缓依赖 Codex 0.157.x / Qwen self-update**，等待验证版本
2. **无人值守/CI 场景**优先验证认证持久化（Copilot #4929、Claude Code #97344 均为雷区）
3. **多 MCP 配置**场景务必主动验证服务可用性，当前所有工具的失败都可能是静默的
4. **关注 Claude Code Mods 发布窗口**（官方承诺数周内），function hooks 可能重新定义插件生态格局

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据来源：** github.com/anthropics/skills ｜ 数据截止：2026-09-26

---

## 一、热门 Skills 排行

> 注：本期 PR 评论数据缺失（undefined），按更新活跃度与议题关联度综合排序。

| # | Skill / PR | 功能与讨论热点 | 状态 |
|---|---|---|---|
| 1 | **skill-creator 触发评估修复** [#1298](https://github.com/anthropics/skills/pull/1298) | 修复 trigger eval 误报：per-worker 探针竞争、Windows `select()` 失败、运行时错误被误判为非触发。直接关联热门 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论：`claude -p` 触发率 0%） | OPEN（跨 6-9 月持续更新） |
| 2 | **mcp-builder 兼容修复** [#1742](https://github.com/anthropics/skills/pull/1742) | 支持 `mcp>=2` 的 `streamable_http_client` 重命名与自定义 header，修复 Issue [#1668]/[#1390](https://github.com/anthropics/skills/issues/1390)（eval 对真实 MCP server 全部 0 分） | OPEN（活跃更新中） |
| 3 | **docx 质量修复系列** [#1792](https://github.com/anthropics/skills/pull/1792) / [#1790](https://github.com/anthropics/skills/pull/1790) / [#541](https://github.com/anthropics/skills/pull/541) | LibreOffice 超时误报成功、`document.xml.rels` 缺失、tracked change `w:id` 冲突导致文档损坏——官方文档 Skill 是缺陷重灾区 | OPEN ×3 |
| 4 | **pyxel 复古游戏开发** [#525](https://github.com/anthropics/skills/pull/525) | Python 复古游戏的实现/调试/无头运行验证框架，由 Pyxel 作者本人提交，3 月至今持续活跃 | OPEN |
| 5 | **md2video-audio** [#1703](https://github.com/anthropics/skills/pull/1703) | Markdown → Marp 幻灯片 → 带真人配音的 MP4 视频，零成本内容再生产方向 | OPEN |
| 6 | **AWT AI E2E 测试** [#822](https://github.com/anthropics/skills/pull/822) | 赋予 Claude 视觉 + 浏览器控制的零代码 E2E 测试生成 | OPEN（长期活跃） |
| 7 | **testing-patterns** [#723](https://github.com/anthropics/skills/pull/723) | 全栈测试方法论：Testing Trophy、AAA、Testing Library 等 | OPEN |
| 8 | **blast-radius** [#1776](https://github.com/anthropics/skills/pull/1776) | 批量/破坏性写操作前的安全检查清单（删号、批量撤销权限等） | OPEN（新提交） |

---

## 二、社区需求趋势（源自 Issues）

1. **安全与信任边界（最高优先级）**：[#492](https://github.com/anthropics/skills/issues/492)（43 评论）社区 Skill 冒用 `anthropic/` 命名空间分发，用户可能在误信任下授予高权限——命名空间治理诉求强烈。
2. **组织级分发与共享**：[#228](https://github.com/anthropics/skills/issues/228)（16 评论）要求 Skills 在企业内部共享/技能库，替代手工传文件。
3. **可靠性工程（trigger/eval 机制）**：[#556](https://github.com/anthropics/skills/issues/556) Skill 触发率 0% 的评估框架缺陷，是元工具层的核心痛点。
4. **上下文效率**：[#1487](https://github.com/anthropics/skills/issues/1487) `claude-api` Skill 一次注入 ~156k token 耗尽上下文；[#1329](https://github.com/anthropics/skills/issues/1329) 提议 compact-memory 紧凑符号记忆。渐进加载是普遍期待。
5. **Agent 记忆与治理**：[#1329](https://github.com/anthropics/skills/issues/1329)（compact-memory）、[#412](https://github.com/anthropics/skills/issues/412)（agent-governance 安全模式）。
6. **工作流自动化/规格驱动**：[#1245](https://github.com/anthropics/skills/pull/1245) Notion spec → 实现任务分解；[#1385](https://github.com/anthropics/skills/issues/1385) 推理质量门禁流水线。
7. **企业文档场景**：[#1175](https://github.com/anthropics/skills/issues/1175) SharePoint 文档处理的安全与上下文顾虑。

---

## 三、高潜力待合并 Skills

| PR | 理由 |
|---|---|
| [#1742 mcp-builder 修复](https://github.com/anthropics/skills/pull/1742) | 修复确定性 bug，关联 Issue 明确，9 月仍活跃 |
| [#1792 / #1790 docx 修复](https://github.com/anthropics/skills/pull/1792) | 小而准的官方 Skill 缺陷修复，9 月下旬更新 |
| [#1298 skill-creator eval 修复](https://github.com/anthropics/skills/pull/1298) | 对应 0% 触发率的核心痛点，工程深度高 |
| [#525 pyxel](https://github.com/anthropics/skills/pull/525) | 上游作者维护，半年持续打磨 |
| [#723 testing-patterns](https://github.com/anthropics/skills/pull/723) | 覆盖通用测试场景，长期活跃迭代 |

---

## 四、生态洞察

**当前社区最集中的诉求：让 Skills “可信且可靠”**——即建立命名空间/安全信任边界，修复触发评估、上下文占用与文档处理等基础可靠性缺陷，其次才是更丰富的新 Skill 品类（测试、视频生成、HPC、安全治理）。

---

# Claude Code 社区动态日报 · 2026-09-26

## 1. 今日速览

Claude Code 发布 **v2.1.283**，新增 LLM 网关提示分组头和 `availableModelsMatch` 托管设置，面向企业网关与模型治理场景。社区最热门的 **Mods 扩展性提案（#91870）** 持续发酵（218 条评论），官方确认 function hooks 将在数周内发布，相关 PR 密集推进。今日新增 Issues 集中在 MCP/插件可靠性、上下文压缩成本、认证持久化三大痛点。

## 2. 版本发布

### v2.1.283
- 新增 `x-claude-code-prompt-id` 网关提示头，LLM 网关可将服务于同一用户 prompt 的请求分组；通过 `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1` 启用（企业网关观测/计费场景友好）
- 新增 `availableModelsMatch` 托管设置：设为 `"exact"` 时，`availableModels` 条目仅允许精确匹配的模型——收紧模型治理粒度

## 3. 社区热点 Issues（Top 10）

| # | Issue | 亮点 |
|---|-------|------|
| 1 | [#91870 Mods - make Claude 10x more extensible](https://github.com/anthropics/claude-code/issues/91870)（218 评论 / 126 👍） | 年度最热提案。官方 9/9 更新确认 function hooks “数周内”发布，社区高信号反馈已实质影响设计。相关 PR（#97334、#97293、#97241）本周密集落地 |
| 2 | [#2544 CLAUDE.md 强制规则被持续忽略](https://github.com/anthropics/claude-code/issues/2544)（24 评论 / 41 👍） | 跨仓库、跨平台复现，自 2025-06 存活至今的老牌 bug，指令遵循可靠性的标志性案例 |
| 3 | [#33323 任务队列：多 prompt 排队执行](https://github.com/anthropics/claude-code/issues/33323)（23 评论 / 56 👍） | 高票需求：顺序/并行排队 3-5 个任务，社区持续拿 Codex CLI 对比施压 |
| 4 | [#92434 Auto-compact 依据上一轮 token 计数决策，指令文件重注入撑爆窗口](https://github.com/anthropics/claude-code/issues/92434) | 压缩时机 bug：重注入的 instruction 文件未被纳入 compact 判定，导致上下文溢出 |
| 5 | [#97336 MCP 工具结果被静默替换为 `<<ccr:...>>` 占位符](https://github.com/anthropics/claude-code/issues/97336) | 今日新报，两个不相关 MCP server 均命中；模型完全无法读取结果，甚至“猜”输出内容——静默失败比报错更危险 |
| 6 | [#97342 压缩后 CLAUDE.md 指令附件保留旧版且紧随其后再次完整注入](https://github.com/anthropics/claude-code/issues/97342) | 今日新报：compact 后同文件在上下文中出现两份（一份过期），直接推高 token 成本 |
| 7 | [#81571 / #78719 Telegram 插件 poller 死亡与 MCP 启动失败](https://github.com/anthropics/claude-code/issues/81571) | channels 插件生态稳定性问题集中：二次会话杀死 poller、marketplace 刷新后 MCP 不 spawn，需手动 /mcp Reconnect |
| 8 | [#91953 Auto-mode 权限分类器阻断用户已授权的部署操作](https://github.com/anthropics/claude-code/issues/91953) | 权限安全设计反噬生产力：会话内拒绝会复合叠加，生产数据库只读查询也被拦截 |
| 9 | [#94728 恢复后台 subagent 时丢失 prompt cache](https://github.com/anthropics/claude-code/issues/94728) | resume 后 messages_changed 且无 thinking blocks，缓存未命中导致成本显著上升，cost 敏感用户关注 |
| 10 | [#96130 Opus 5.5 需要不稳定版 Claude Code 才能使用](https://github.com/anthropics/claude-code/issues/96130) | 新模型与 CLI 稳定通道脱节，模型可用性问题影响升级决策 |

> 其他值得留意：#97344（Chrome 扩展每次重启丢失登录，破坏无人值守自动化）、#96049（Desktop 切换账号后 Remote Control 链接丢失）、#96601（Opus 5.5 在工具链后忽略输出语言规则，英文占比 0.4% → 4.2%）。

## 4. 重要 PR 进展

本周 PR 活动全部来自 @poteat，且高度聚焦 **Mods 引擎与官方插件的协同发布**：

1. [#97334 sec-default: 会话保留行数可越过用户层级](https://github.com/anthropics/claude-code/pull/97334) — 依赖引擎 main 分支的 `session.append` 事件，test 变红是“设计使然”（等待 CLI 发布携带该事件的版本），典型的跨仓库协调发布模式
2. [#97241 sec-default: 系统提示词分段可越过用户层级](https://github.com/anthropics/claude-code/pull/97241) — 与 #97334 同族的分层覆盖机制，依赖引擎 `prompt.compose` 事件
3. [#97293 mods: 声明携带 process.run 截断标志与 fs.list 的 mtimeMs](https://github.com/anthropics/claude-code/pull/97293) — 为 Mods 暴露 `isStdoutTruncated`/`isStderrTruncated` 与文件时间戳，等待 npm CLI 释放对应字段后激活
4. [#96953 diff 插件 focus hook 双名称兼容](https://github.com/anthropics/claude-code/pull/96953)（已关闭）— 修复插件注册名与自报名不一致导致的 hook 匹配失败，体现插件命名约定尚未稳定
5. [#41611 补充缺失源码](https://github.com/anthropics/claude-code/pull/41611) — 社区长期挂起的补源码 PR，自 3 月未合并

**观察**：PR 仅 5 条且几乎全是 Mods 链路，验证了 #91870 “数周内交付”的承诺正在兑现；合并顺序均以引擎事件落地为前置条件，暗示近期将有一波联动版本发布。

## 5. 功能需求趋势

1. **可扩展性 / Mods**：#91870 一骑绝尘，function hooks + 插件 API 是当前最强呼声，官方 PR 已进入落地冲刺
2. **任务编排**：任务队列（#33323）、headless 远程控制守护进程（#30447，39 👍）——无人值守/服务器端部署场景需求旺盛
3. **上下文与成本管理**：compact 时机（#92434）、重复注入（#97342）、prompt cache 丢失（#94728）、/limit-reset 失效（#97348）——token 经济学是高频主题
4. **MCP / 插件可靠性**：今日新 Issues 中占比最高——静默占位符（#97336）、机器级失败缓存（#97314）、OAuth RFC 9728 检查 bug（#97346）
5. **跨端体验**：Desktop/mobile Remote Control（#96049、#97340）、Cursor 扩展 plan 预览（#97347）、Chrome 扩展登录持久化（#97344）
6. **新模型适配**：Opus 5.5 的 CLI 版本门槛（#96130）与指令遵循回归（#96601、#97305）

## 6. 开发者关注点（痛点总结）

- **静默失败是最大信任杀手**：MCP 结果占位符替换、headless 会话“成功”退出却遗孤 subagent（#85066）、插件失败缓存静默禁用 15 分钟（#97314）——开发者反复强调“宁可报错也不要装没事”
- **认证/会话持久化脆弱**：Chrome 重启丢登录、Desktop 切账号断链、Cowork 计划任务无法保存（#97341），自动化场景受害最深
- **权限分类器过于激进**：auto-mode 误拦合法只读操作且拒绝会复合（#91953），生产环境用户被迫降级手动模式
- **长会话漂移**：worktree 长驻会话运行过期 hook 脚本却无任何提示（#97349）
- **指令遵循回归**：从规则忽略（#2544）到 Opus 5.5 语言规则失效（#96601），用户对“模型升级带来行为回归”的警惕明显上升

---
*数据来源：anthropics/claude-code · 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-09-26）

## 📌 今日速览

Codex 团队今日发布节奏密集，0.158.0 稳定版（0.157.1 修复版）与 0.159.0 alpha 通道并行推进。**Windows 平台问题集中爆发**：0.157.0 升级引发 CLI 启动失败、多控制台窗口弹出、Desktop 白屏/卡加载等一系列回归，社区反馈强烈。团队已通过多个已合并 PR 修复 Windows daemon 与 MCP 服务器弹窗问题。

---

## 🚀 版本发布（过去24小时，共 8 个）

| 版本 | 通道 | 说明 |
|---|---|---|
| [0.157.1](https://github.com/openai/codex/compare/rust-v0.157.0...rust-v0.157.1) | 稳定版修复 | Chores 更新，无详细 changelog |
| 0.158.0-alpha.13 ~ alpha.15.1 | 预发布 | 0.159.0-alpha.1 ~ alpha.3 同步推进 |

**要点**：0.158 alpha 迭代速度极快（15+ 个 alpha），alpha 通道与 0.159 开发线并行，说明主分支处于高强度开发状态。0.157.1 的紧急修复可能与 #48043 报告的 0.157.0 Windows 启动失败相关。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#28969](https://github.com/openai/codex/issues/28969) — 请求可关闭60秒问题自动解析**（90 评论 / 210 👍）
   全场最热。自动应答机制在无人值守场景下造成困扰，Plus 用户强烈要求配置项。持续三个月未关闭，是社区满意度最相关的需求。

2. **[#48043](https://github.com/openai/codex/issues/48043) — 0.157.0 Windows CLI 因 daemon 权限错误无法启动**（11 评论）
   昨日新报的**升级阻断级回归**，0.156.1 正常。结合今日 0.157.1 的发布时机，很可能就是紧急修复的触发原因。

3. **[#44768](https://github.com/openai/codex/issues/44768) — Windows daemon 为每个 hook/shell 命令弹出可见控制台窗口**（7 评论）
   与 [#48023](https://github.com/openai/codex/issues/48023)（MCP 服务器弹窗）、[#48325](https://github.com/openai/codex/issues/48325)（发消息弹多个窗口）同根同源，构成今日 Windows 报告主力。对应修复 PR #48238 已合并。

4. **[#31836](https://github.com/openai/codex/issues/31836) — Desktop 项目排序仅对组内任务生效**（51 评论）
   高关注 UI 缺陷，“Last updated” 排序对项目本身无效，影响多项目管理体验。

5. **[#37967](https://github.com/openai/codex/issues/37967) — Remote Control 无法附加到进行中的 CLI 会话**（22 评论 / 31 👍）
   移动办公场景核心痛点：只能查看已完成线程，无法实时监控/批准正在运行的工作站任务。

6. **[#48212](https://github.com/openai/codex/issues/48212) — Linux Desktop 任务卡在 "Starting your task"**（7 评论）
   26.924 更新后 Desktop 不可用而 CLI 正常，疑似 app-server 通信问题。

7. **[#48216](https://github.com/openai/codex/issues/48216) / [#48313](https://github.com/openai/codex/issues/48313) / [#48333](https://github.com/openai/codex/issues/48333) — Windows 26.924.1866.0 灰屏/白屏/启动转圈**
   三个同类报告指向 Desktop 新版本启动渲染或 app-server 初始化问题，需手动杀 codex.exe 才能恢复，升级质量堪忧。

8. **[#48127](https://github.com/openai/codex/issues/48127) — 0.157.0 回归：Konsole/Wayland 中键/右键粘贴失效**（4 评论）
   明确的版本回归，用户被迫降级到 0.156.0。

9. **[#48233](https://github.com/openai/codex/issues/48233) — TUI 文本高亮约 0.5 秒延迟**（3 评论）
   0.157.0 性能回归，重度用户（频繁复制输出）已降级，与 #48127 共同指向本版 TUI 渲染问题。

10. **[#47054](https://github.com/openai/codex/issues/47054) / [#48140](https://github.com/openai/codex/issues/48140) / [#48180](https://github.com/openai/codex/issues/48180) — Windows 无法发送第二条消息**
    多份报告确认：首轮对话后 Send 按钮卡死或禁用，与 #44342（loading-local-config 阻塞）可能是同一 app-server 状态机缺陷。

---

## 🔧 重要 PR 进展（Top 10）

1. **[#48238](https://github.com/openai/codex/pull/48238) — 抑制 Windows 本地 MCP 服务器的控制台窗口**
   使用 `CREATE_NO_WINDOW` 标志启动 stdio MCP 服务器，直接修复 #48023 等弹窗问题。

2. **[#48272](https://github.com/openai/codex/pull/48272) — 防止 Windows daemon 继承启动器 stdio**
   修复分离式 daemon 继承输出管道导致调用方等待 EOF 挂起的问题，与多项 Windows 卡死报告相关。

3. **[#48318](https://github.com/openai/codex/pull/48318) — TUI 重连尝试持续到共享截止时间**
   移除五次尝试限制，改为在 120 秒预算内持续重试，提升长时故障恢复能力。

4. **[#48224](https://github.com/openai/codex/pull/48224) — Compaction 时保留 model 与 access program 配对**
   修复上下文压缩期间产生服务器拒绝的非法 model/program 组合，稳定性关键修复。

5. **[#48176](https://github.com/openai/codex/pull/48176) — 沙箱可写根目录下保护 `.aws` 目录**
   安全修复：防止授予写权限后 AWS credential helper 被篡改执行，沙箱安全模型加固。

6. **[#48190](https://github.com/openai/codex/pull/48190) — 解析前限制 agent message board SSE 帧大小**
   防御性修复：超大字段/未终止帧不再无限累积，缓解内存耗尽风险。

7. **[#48344](https://github.com/openai/codex/pull/48344) — 为 OpenAI provider 端点覆盖保留工具元数据**
   修复自定义端点下 MCP 归属信息丢失问题，对第三方/代理接入用户重要。

8. **[#48211](https://github.com/openai/codex/pull/48211) — 外部编辑器交接时保持 Codex 界面可见**
   TUI 体验修复：全屏模式下切换编辑器不再丢失草稿与提示信息。

9. **[#48198](https://github.com/openai/codex/pull/48198) — 遵循执行环境的代理配置要求**
   网络沙箱改进：受限命令在配置代理后可正常联网，企业代理环境受益。

10. **[#48199](https://github.com/openai/codex/pull/48199) — 空预览的归档线程保持可见**
    修复会话列表过滤逻辑，避免有效历史会话“消失”。

> 其他值得关注：#48206/#48205（TUI 警告查看器保留/关闭交互）、#48174（区分5小时/周限额的分析埋点）、#48197（Bazel 构建性能优化）。

---

## 📈 功能需求趋势

1. **Windows 平台一等公民化**（最迫切）：今日约一半 Issue 带 `windows-os` 标签，涵盖启动、渲染、沙箱、弹窗、认证全链路。
2. **移动端 Remote Control 深度集成**：实时附加会话（#37967）、iOS 推送送达（#32908）。
3. **CLI 细粒度控制**：`--effort` 选项（#48321）、可配置的自动应答行为（#28969）。
4. **MCP 生态兼容性**：注解类型容错（#38979）、Computer Use 官方集成路径（#44155）。
5. **TUI 交互完善**：对称文本粘贴（#17103）、渲染性能。

---

## ⚠️ 开发者关注点

- **0.157.0 升级风险**：Windows 用户建议暂缓升级，等待 0.157.1 验证；已受影响者可回退 0.156.x。
- **Desktop 26.924.1866.0（Windows）存在多处启动缺陷**（白屏/灰屏/转圈），CLI 是当前可靠 fallback。
- **Windows 控制台弹窗集群问题**已有对应 PR 合并（#48238、#48272），预计随下个版本落地。
- **高频痛点汇总**：第二轮对话发送失败（多报告）、TUI 性能回归、OAuth 多账号刷新 token 失效（#39199）。
- **积极信号**：copyberry 机器人驱动的 PR 交付节奏极快（单日 20+ 合并），问题从报告到修复的链路明显缩短。

---
*数据来源：github.com/openai/codex 公开 Issues / PR / Releases，统计窗口为过去 24 小时。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-09-26

## 📌 今日速览

Gemini CLI 今日发布 v0.63.0-nightly 版本，包含移除无效 `diff.external` 配置覆盖等修复。Agent 子系统仍是社区关注焦点：**P1 级 Subagent 状态误报问题**（#22323）和**通用 Agent 挂起问题**（#21409）持续发酵。PR 方向，多项涉及会话恢复、文件原子写入和 MCP 超时的高优先级修复正在推进中。

---

## 🚀 版本发布

### v0.63.0-nightly.20260926.g2fe7c2d3f
- **fix(core)**: 移除无效的 `diff.external` 配置覆盖（PR #29467）
- 自动化版本发布流程（PR #29471）

🔗 https://github.com/google-gemini/gemini-cli/releases

---

## 🔥 社区热点 Issues

### 1. Subagent 达到 MAX_TURNS 后误报为成功 [#22323] · P1
子代理 `codebase_investigator` 在触及最大轮次限制、未做任何分析的情况下，仍上报 `status: "success"`，掩盖了真实中断原因。这是**状态报告可信度**的核心问题，13 条评论，社区讨论热烈。
🔗 https://github.com/google-gemini/gemini-cli/issues/22323

### 2. 通用 Agent 无限挂起 [#21409] · P1
每当 CLI 委派给 generalist agent 时会永久挂起，连简单的创建文件夹操作也不例外，用户等待长达一小时。8 个 👍 表明影响面较广。
🔗 https://github.com/google-gemini/gemini-cli/issues/21409

### 3. 利用模型的 bash 亲和性：零依赖 OS 沙箱 + 执行后意图路由 [#19873] · P2
建议让 Gemini 3 模型充分发挥原生 POSIX 工具链（grep/sed/awk）能力，同时通过 OS 级沙箱保证安全。这是**架构方向性**的重要讨论。
🔗 https://github.com/google-gemini/gemini-cli/issues/19873

### 4. AST 感知的文件读取/搜索/代码库映射评估 [#22745] · P2
EPIC 级议题：探索 AST 感知工具能否减少对齐错误的读取、降低 token 噪音、提升代码库导航精度。
🔗 https://github.com/google-gemini/gemini-cli/issues/22745

### 5. Gemini 主动使用 skills 和 sub-agents 频率过低 [#21968] · P2
用户反馈即使任务高度相关（如 gradle/git skills），模型也不会自主调用子代理，需显式指令。反映了**工具选择策略**的短板。
🔗 https://github.com/google-gemini/gemini-cli/issues/21968

### 6. Auto Memory 安全隐患：需确定性脱敏 [#26525] · P2 / security
Auto Memory 将本地会话内容发送给后台提取模型后才做脱敏，密钥已进入模型上下文，且服务端可能记录 skill 内容。**隐私与安全问题值得关注**。
🔗 https://github.com/google-gemini/gemini-cli/issues/26525

### 7. Browser Agent 无视 settings.json 配置覆盖 [#22267] · P2
`AgentRegistry` 初始化时正确合并配置，但 Browser Agent 完全忽略 `maxTurns` 等覆盖项。
🔗 https://github.com/google-gemini/gemini-cli/issues/22267

### 8. Browser 子代理在 Wayland 下失败 [#21983] · P1
Linux Wayland 环境下 browser subagent 直接失败，影响 Linux 桌面用户。
🔗 https://github.com/google-gemini/gemini-cli/issues/21983

### 9. Auto Memory 无限重试低信号会话 [#26522] · P2
提取代理若跳过低信号会话，该会话永远不会被标记为已处理，导致反复浮现，浪费资源。
🔗 https://github.com/google-gemini/gemini-cli/issues/26522

### 10. 超过 128 个工具时触发 400 错误 [#24246] · P2
启用工具过多时 API 报 400，社区期待 agent 能智能裁剪工具作用域——MCP 生态扩展下的典型痛点。
🔗 https://github.com/google-gemini/gemini-cli/issues/24246

---

## 🔧 重要 PR 进展

### 1. 修复 shell 命令注入无法取消的问题 [#29459] · P1
`!{...}` 注入使用全新 `AbortController`，导致挂起命令永远无法被取消。本 PR 将调用方的取消信号传播到子进程。
🔗 https://github.com/google-gemini/gemini-cli/pull/29459

### 2. 持久化状态写入失败安全 [#29402] · P1
通过临时文件 + `fsync` + 原子重命名，防止中断的保存操作用截断 JSON 覆盖 `state.json` 并静默清空状态。
🔗 https://github.com/google-gemini/gemini-cli/pull/29402

### 3. 防止中断轮次导致的上下文污染和无限循环 [#29397]
SIGINT/超时中断后 CLI 追加合成 assistant 轮次到历史，引发严重的会话内上下文污染，本 PR 修复该问题。
🔗 https://github.com/google-gemini/gemini-cli/pull/29397

### 4. 调度器层强制执行用户“暂停”指令 [#29394] · P1
用户说“先别改”时 agent 仍执行破坏性工具调用。本 PR 在调度器层阻断 mutating tools，而非仅靠提示词约束。
🔗 https://github.com/google-gemini/gemini-cli/pull/29394

### 5. MCP 初始工具发现增加短超时 [#29398] · P1
MCP 服务器返回不匹配的 JSON-RPC id 时会卡满 10 分钟默认超时，本 PR 限制初始发现阶段的等待时间。
🔗 https://github.com/google-gemini/gemini-cli/pull/29398

### 6. 会话恢复时工具响应重复修复 [#29400] · P1
使用 `-r` 恢复会话时工具结果被双重持久化并重复回放，本 PR 消除重复的 `functionResponse`。
🔗 https://github.com/google-gemini/gemini-cli/pull/29400

### 7. 文件工具操作串行化 + 原子写入 [#29499] · P1
修复并行子代理对同一文件并发读写导致静默丢失更新的竞态条件。
🔗 https://github.com/google-gemini/gemini-cli/pull/29499

### 8. 修复认证无限循环 [#29448] · P1
解决 Windows/WSL/无头环境下因文件争用（如与 VS Code 扩展冲突）、无 keyring 环境导致的无限认证循环。
🔗 https://github.com/google-gemini/gemini-cli/pull/29448

### 9. 编辑时保留无关代码注释 [#29399]
强化 replace 工具契约，引导模型做最小化独立编辑而非重写大段代码块。
🔗 https://github.com/google-gemini/gemini-cli/pull/29399

### 10. 单个损坏扩展目录不再阻断全部扩展加载 [#29387]
将安全校验移入容错降级路径，避免一个 malformed 扩展导致整体加载失败。
🔗 https://github.com/google-gemini/gemini-cli/pull/29387

---

## 📈 功能需求趋势

1. **Agent 可靠性与状态透明**：Subagent 挂起、误报成功、上下文污染是本季度最集中的议题方向。
2. **AST 感知工具链**：社区与维护方均在探索 AST 感知的读取/搜索/映射（#22745、#22746），配合 "Tactful Extraction"（#19561）降低 token 消耗。
3. **原生 bash 能力 + 安全沙箱**：利用 Gemini 3 的 POSIX 原生优势，同时用 OS 级沙箱兜底（#19873）。
4. **Auto Memory 体系化改进**：脱敏、重试策略、无效补丁处理（#26525/#26522/#26523/#26516）形成完整的 memory 改进 workstream。
5. **文件级任务追踪替代上下文内 TODO**：以 CRUD 文件系统缓解 context rot（#18836、#21000）。
6. **Browser Agent 健壮性**：配置覆盖、会话锁恢复、Wayland 支持（#22267/#22232/#21983）。

---

## ⚠️ 开发者关注点

- **取消与中断处理普遍缺失**：多个 PR 集中修复取消信号传播、中断后的状态污染，说明这是当前 CLI 的系统性薄弱环节。
- **数据持久化的原子性**：state.json 截断、会话恢复重复回放、并发文件写入竞态——持久层可靠性成为修复热点。
- **工具规模上限**：MCP 生态扩张下 128+ 工具触发 400 错误，工具裁剪策略亟待解决。
- **Agent 行为可控性**：用户“暂停/先解释”指令被无视、`git reset --force` 等破坏性操作缺乏防护，社区呼吁在架构层而非提示词层约束。
- **安全与隐私**：Auto Memory 在脱敏前即发送内容的流程设计引发担忧，需确定性脱敏方案。

---

*数据来源：github.com/google-gemini/gemini-cli（过去 24 小时）*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-09-26）

## 1. 今日速览

昨日 Copilot CLI 发布 v1.0.89-4，重点优化模型路由体验（自动推荐路由层级、切换模型后的快速反馈提示）及插件安装的启停管理。社区方面，Skills 系统的 `disable-model-invocation` 行为缺陷（#4438）持续发酵，成为最热话题；长会话稳定性问题（token 失效、MCP 重连刷屏、空闲线程失控）集中显现，值得运维侧关注。过去 24 小时无 PR 更新。

## 2. 版本发布

**v1.0.89-4**
- **新增**：自动推荐路由层级（routing tier），支持快捷键或点击一键切换；手动切换模型后自动弹出快速反馈提示
- **改进**：直接安装的插件现可启用/禁用，已标记为禁用的插件将停止加载

## 3. 社区热点 Issues

1. **#4438** [OPEN] `disable-model-invocation: true` 导致 Skill 完全不可达（8 评论 / 11 👍）
   Skill 可在 `copilot skill list` 中列出，但模型 `skill()` 工具返回 "Skill not found"。这是配置语义与实际行为的根本冲突，与 #4637、#4838 共同构成 Skills 系统的系统性缺陷。
   https://github.com/github/copilot-cli/issues/4438

2. **#2627** [OPEN] 可配置系统提示词，削减固定 token 开销（5 评论 / 20 👍，今日最高赞）
   系统提示词启动即消耗约 20,500 tokens，加上工具定义共占用 200K 窗口的 10%+，社区对“瘦身”诉求强烈。
   https://github.com/github/copilot-cli/issues/2627

3. **#232** [OPEN] 请求 `--system-prompt` 参数（6 评论 / 11 👍）
   与 #2627 同源的长尾需求：目前无法在仓库级指令文件之外注入全局系统指令，已持续讨论近一年。
   https://github.com/github/copilot-cli/issues/232

4. **#4929** [OPEN] 进程级 auth token 停止刷新，所有请求失败直至重启（6 评论）
   长运行进程中认证永久失效，`/login` 无法恢复，仅重启可修复。对长时间 agent 任务是致命问题。
   https://github.com/github/copilot-cli/issues/4929

5. **#4775** [OPEN] Mission Control 仪表盘链接 404
   `/copilot/tasks/<uuid>` 路径不存在，实际会话位于 `/agents/tasks/<uuid>`，属于产品路径迁移遗留问题。
   https://github.com/github/copilot-cli/issues/4775

6. **#4887** [CLOSED] Model 模式 Auto 下 `/btw`、`/ask` 报错
   指定具体模型无问题，Auto 路由与斜杠命令组合触发错误——与今日新版的路由改进方向直接相关，或已被修复。
   https://github.com/github/copilot-cli/issues/4887

7. **#4680** [OPEN] CLI 向自定义 OpenAI 兼容端点发送错误 model ID
   配置了 `mimo-v2.5` 却实际发送 `gpt-5.4-nano`，直接杀死会话。BYOM（自带模型）场景的可靠性问题。
   https://github.com/github/copilot-cli/issues/4680

8. **#4710** [OPEN] 空闲会话中 `copilot-file-search` 线程失控
   会话 idle 状态下线程仍占用整核 CPU，并在 `~/.copilot/logs` 下无限写入诊断日志，存在磁盘占满风险。
   https://github.com/github/copilot-cli/issues/4710

9. **#4907** [OPEN] MCP 周期性重连通知刷屏对话历史
   同一服务器的 "connecting/connected" 消息反复追加到主对话，污染上下文并干扰模型行为。
   https://github.com/github/copilot-cli/issues/4907

10. **#4946** [OPEN] 后台 shell 完成通知触发 HTTP 400 `content[].thinking`
    跨回合的 system.notification 与 thinking 内容块组合导致请求被拒，属协议层兼容性 bug。
    https://github.com/github/copilot-cli/issues/4946

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新，本节从略。

## 5. 功能需求趋势

- **系统提示词可配置化**：#232、#2627 长期高热度，社区希望控制固定 token 开销并支持全局指令注入
- **跨应用会话同步**：#4082 请求 CLI 与桌面端会话互通（9 👍），反映多端工作流需求
- **模型路由与 BYOM**：#4680、#4960、#3053 均指向模型选择/自定义端点的可靠性，与官方近期路由优化方向吻合
- **Skills 系统成熟度**：#4438、#4637、#4838 显示 skill 解析在交互与 headless 模式下均有缺陷
- **生态兼容**：#4440（已关闭）请求读取 `.claude/rules`，体现双工具用户减少指令重复的诉求
- **编辑体验**：#2199（已关闭，Ctrl+Backspace 删词）、#3138、#4951 聚焦输入与显示细节

## 6. 开发者关注点

- **长会话稳定性是最大痛点**：token 刷新失效（#4929）、空闲资源泄漏（#4710）、MCP 通知刷屏（#4907）、压缩丢失上下文（#1571）集中出现，长时间 agent 运行场景可靠性不足
- **Skills 与 headless 模式组合缺陷**：`disable-model-invocation` 语义在多条代码路径中行为不一致，影响 CI/自动化脚本用户
- **插件生态健壮性**：marketplace 校验过于严格导致整体失败（#4969）、凭据助手冲突破坏私有仓库（#4103，已关闭）
- **上下文成本意识增强**：开发者对隐性 token 消耗（系统提示词、重复加载指令文件 #1527、MCP 噪音）日益敏感，官方或需提供用量透明度工具

---
*数据截至 2026-09-26，来源：github.com/github/copilot-cli*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-09-26

## 📰 今日速览

今日无新版本发布，社区活跃度集中在 Issue 与 PR 讨论上。热点集中在 **2.x 迁移兼容性问题**（旧 1.x 会话数据阻塞初始化、skills 文档与实现不一致）和 **Windows 桌面端体验**（插件安装目录泄漏 38GB、端口占用冲突）。PR 方面，多位贡献者提交了核心稳定性修复，包括 MCP OAuth 跨进程刷新串行化、auth.json 原子写入等。

---

## 🔥 社区热点 Issues

1. **[FEATURE] Add unified usage tracking via /usage (#9545)** — [#9281](https://github.com/anomalyco/opencode/issues/9281) | 34 👍 / 12 评论
   OAuth 登录后无法查看套餐/速率限制用量，需逐个打开 provider 页面。呼声最高的功能之一，已随 #9545 关闭（落地中）。

2. **设置并行 subagent 最大数量** — [#27110](https://github.com/anomalyco/opencode/issues/27110) | 36 👍 / 6 评论
   本地模型受内存限制，并行 subagent 会撑爆上下文。36 👍 显示本地模型用户群体庞大。

3. **更改项目路径不丢失会话历史** — [#29703](https://github.com/anomalyco/opencode/issues/29703) | 25 👍 / 10 评论
   会话数据与项目路径强绑定，目录重命名/迁移即丢失全部历史。数据持久化设计问题，已关闭。

4. **MCP 官方预热/预生成机制** — [#48743](https://github.com/anomalyco/opencode/issues/48743) | 6 评论
   Windows 桌面端配置 14+ 个本地 stdio MCP 时全部冷启动失败，需手动重启。与 #51437 一并反映 MCP 启动健壮性短板。

5. **2.x InitializationBlocked：1.x 旧会话数据触发** — [#51441](https://github.com/anomalyco/opencode/issues/51441) | 今日新报
   1.x → 2.x 升级后旧项目目录报 `core/instructions unavailable`，阻断使用。升级迁移的关键阻塞项，与 PR #51422 直接相关。

6. **Windows 插件安装 staging 目录无限泄漏（~38GB）** — [#51425](https://github.com/anomalyco/opencode/issues/51425) | 今日新报，已关闭
   未指定版本的插件导致 `packages/<spec>.staging-*` 目录无限累积，磁盘空间杀手级 bug。

7. **后台服务硬编码端口 49374 锁死同机第二客户端** — [#50672](https://github.com/anomalyco/opencode/issues/50672) | 4 评论
   多用户/WSL mirrored 场景下共享 loopback 时端口冲突，仅报通用超时，排查成本高。

8. **MCP 连接失败后不重试、静默从工具列表消失** — [#51437](https://github.com/anomalyco/opencode/issues/51437) | 今日新报
   启动批次失败后整个会话期间 MCP 不可用且无任何提示，与 #48743 构成 MCP 可靠性主题。

9. **skills 文档中的 slash frontmatter 在 v2.0.18 未实现** — [#51427](https://github.com/anomalyco/opencode/issues/51427) | 今日新报
   文档承诺的 `/skill-id` 调用方式实际未解析，文档与实现脱节的典型问题。

10. **桌面端缩放重启后重置为 100%** — [#50168](https://github.com/anomalyco/opencode/issues/50168)
    `wireZoom()` 显式重置为 1 且未持久化。已有对应 PR #50169 在路上。

---

## 🔧 重要 PR 进展

1. **fix(core): resolve configured instructions** — [PR #51422](https://github.com/anomalyco/opencode/pull/51422)
   V2 保留了 `instructions` 配置但未移植解析器，本 PR 恢复该能力，直接解决 2.x 升级阻塞（#51341/#51262/#51441 一系列问题）。

2. **fix(desktop): persist zoom across app restarts** — [PR #50169](https://github.com/anomalyco/opencode/pull/50169)
   持久化 Ctrl++/- 选择的缩放级别，关闭 #50168、#49096。

3. **fix(opencode): serialize MCP OAuth refreshes across processes** — [PR #50994](https://github.com/anomalyco/opencode/pull/50994)
   多进程并发用同一 refresh token 刷新导致 token 轮换失败，跨进程串行化刷新。修复 MCP 认证丢失类问题。

4. **fix(opencode): write auth.json atomically under a lock** — [PR #46131](https://github.com/anomalyco/opencode/pull/46131)
   两处 auth.json 凭据丢失缺陷：环境快照误持久化 + 非原子写入。

5. **fix(codemode): 递归深度/参数数量/thenable 链等六项加固** — [PR #51407](https://github.com/anomalyco/opencode/pull/51407)
   代码沙箱审计产出，修复可导致宿主挂起或无界分配的六个逃逸点。安全相关，值得 review。

6. **feat(cli): add --session-id** — [PR #51405](https://github.com/anomalyco/opencode/pull/51405)
   允许以指定 ID 创建新会话，供终端复用器/agent 宿主等外部工具编排。

7. **feat(cli): usage 货币显示选择** — [PR #51429](https://github.com/anomalyco/opencode/pull/51429)
   `display.currency` 配置，成本展示不再限定 USD。

8. **fix(desktop): preserve selected directories + 本地连接链接提案** — [PR #51431](https://github.com/anomalyco/opencode/pull/51431)
   修复目录选择 (#50821)，同时提出桌面端 loopback 连接 deep-link 设计（配套 Issue #51430）。

9. **fix(opencode): match absolute permission patterns outside the worktree** — [PR #40149](https://github.com/anomalyco/opencode/pull/40149)
   修复合并了四个历史未修 issue 的权限匹配根因，且指出反向风险（不该允许的规则实际放行）。

10. **fix(opencode): include attached image path in model context** — [PR #51168](https://github.com/anomalyco/opencode/pull/51168)
    附件图片/PDF 以 data: URL 到达模型时丢失路径上下文，补上路径注解。

---

## 📈 功能需求趋势

- **用量可见性**：/usage 统一追踪（34 👍）、货币显示、订阅配额报错——用户强烈要求透明消费 OAuth 计划额度。
- **2.x 迁移成熟度**：instructions 解析缺失、旧会话数据阻塞、skills 文档不同步，升级路径是目前最大的摩擦来源。
- **MCP 可靠性**：冷启动失败、无重试、静默消失、OAuth 并发刷新——MCP 生命周期管理是系统性短板。
- **本地模型资源控制**：并行 subagent 上限（36 👍）反映本地模型用户对内存/上下文预算的控制需求。
- **桌面端打磨**：缩放持久化、About 菜单、工作区路径残留、多实例端口冲突——Windows 桌面体验问题密集。
- **会话/工作区管理**：路径变更保历史、多工作目录切换、prompt 队列与中断控制。

## ⚠️ 开发者关注点

1. **升级即断档**：1.x → 2.x 后旧项目直接不可用，建议升级前备份并在迁移完成度明确前暂缓。
2. **Windows 桌面端问题高发**：崩溃、磁盘泄漏（#51425 的 38GB 案例）、CLI 被多实例删除（#35839），重度 Windows 用户建议定期检查 `packages/` 目录。
3. **MCP 用户需自查**：多 MCP 配置场景下确认服务实际可用，失败不会收到提示。
4. **模型行为异常**：工具调用死循环（#28596）、配额耗尽输出乱码（#39098）——模型侧错误未优雅降级，需人工中断。
5. **auth.json 脆弱性**：凭据偶发丢失有多个根因，相关修复 PR（#46131、#50994）尚未合并，建议关注合入进度。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-26

## 1. 今日速览

Qwen Code 今日发布 **v0.24.6**（CLI + Desktop + TypeScript SDK 同步），核心变化是 Java SDK 新增 Hosted Harness 私有客户端，Managed Agent 架构持续推进——今日 @wenshao 密集提交 W0c/O1 分片 PR 与配套测试，#12380 双路径架构提案讨论热度居首（24 条评论）。同时，**Windows `/update` 失败与 ripgrep 丢失执行权限**成为用户侧最集中的痛点。

---

## 2. 版本发布

### [v0.24.6](https://github.com/QwenLM/qwen-code/releases)
- **feat(sdk-java)**: 新增 Hosted Harness 私有客户端（[#12654](https://github.com/QwenLM/qwen-code/pull/12654) by @doudouO）
- 无破坏性变更

### [desktop-v0.24.6](https://github.com/QwenLM/qwen-code/releases)
- fix(serve): 保留会话创建失败的诊断信息（#12331）
- feat(sdk-java): 新增 managed runtime 支持

### [sdk-typescript-v0.1.16](https://github.com/QwenLM/qwen-code/releases)
- 捆绑 CLI 0.24.6

### [v0.24.5-nightly.20260925](https://github.com/QwenLM/qwen-code/releases)
- 含 Hosted Harness 私有客户端、runtime-broker guard 测试固定

---

## 3. 社区热点 Issues

1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380) Managed Agent 双路径架构提案**（24 评论）— 本周最热。定义分阶段交付的 Managed Agent 架构：Session 持久所有权、Workspace 绑定、可恢复工具执行。是当前所有 managed-agent PR 的总纲。

2. **[#12416](https://github.com/QwenLM/qwen-code/issues/12416) Remote-SSH 下所有 POST /session 报 EPIPE**（P1，13 评论）— Companion 0.24.2 在 Remote-SSH 场景完全不可用，影响 VS Code 远程开发用户。

3. **[#472](https://github.com/QwenLM/qwen-code/issues/472) is_background 属性缺失/非布尔**（14 评论）— 长期未决的 API 兼容问题，持续困扰 API 直调用户，已 in-review。

4. **[#11872](https://github.com/QwenLM/qwen-code/issues/11872) Web Terminal "PTY not available"**（已关闭，14 评论）— node-pty 未打包 + macOS 签名阻断 prebuilds，Web Shell 核心可用性问题，今日修复关闭。

5. **[#12727](https://github.com/QwenLM/qwen-code/issues/12727) / [#12687](https://github.com/QwenLM/qwen-code/issues/12687) Windows /update 升级失败**（同作者 @hantsy）— 升级后仍提示旧版本、路径引号错误。Windows 自更新链路系统性缺陷。

6. **[#12679](https://github.com/QwenLM/qwen-code/issues/12679) 全新安装的 ripgrep 丢失执行位**（P1）— 已在发布 tarball 上验证，self-update heal 无法覆盖，P1 级打包缺陷，关联 [#12668](https://github.com/QwenLM/qwen-code/issues/12668)。

7. **[#12683](https://github.com/QwenLM/qwen-code/issues/12683) PreToolUse hook 决策竞态**（已关闭）— 多 hook 并发时“最后完成者胜出”，deny 可被静默覆盖，属安全相关问题，值得所有 hook 用户关注。

8. **[#12169](https://github.com/QwenLM/qwen-code/issues/12169) Batch API 上传绕过代理 dispatcher**（5 评论）— 企业代理/TLS 拦截环境下批量任务必败，作者已给出一行修复演示。

9. **[#12723](https://github.com/QwenLM/qwen-code/issues/12723) / [#12724](https://github.com/QwenLM/qwen-code/issues/12724) Managed Agent O1 工具结果契约 & W0c 执行目录**（今日新建）— 核心团队对 #12380 的分片落地计划，今日配套 PR 已全部提交，节奏很快。

10. **[#8278](https://github.com/QwenLM/qwen-code/issues/8278) CP-866 等非 UTF-8 编码检测顺序错误**（3 评论）— 俄文/中日韩 Windows 用户 shell 输出乱码，今日已有修复 PR #12731。

---

## 4. 重要 PR 进展

| PR | 内容 |
|---|---|
| [#12698](https://github.com/QwenLM/qwen-code/pull/12698) | **ACP Bridge 跨引擎路由**：Legacy/Managed 双通道，服务器端引擎选择与会话 ID 预留 |
| [#12732](https://github.com/QwenLM/qwen-code/pull/12732) | **W0c-1**：Managed Runtime 工具在 Session Workspace 绑定目录中执行 |
| [#12729](https://github.com/QwenLM/qwen-code/pull/12729) | **O1a**：定义 `managed-tool-result/1` 契约，工具输出可持久化、按引用寻址 |
| [#12733](https://github.com/QwenLM/qwen-code/pull/12733) | Hosted no-tool 真实进程测试门禁，进入 CI |
| [#12713](https://github.com/QwenLM/qwen-code/pull/12713) | 启用私有 Hosted Harness 无工具文本回合（SSE/重放读取） |
| [#12731](https://github.com/QwenLM/qwen-code/pull/12731) | 修复编码检测：系统代码页优先于 chardet |
| [#12718](https://github.com/QwenLM/qwen-code/pull/12718) | 修复 Windows 夜间 CI 145 个失败（目录 fsync 拒绝容忍） |
| [#12561](https://github.com/QwenLM/qwen-code/pull/12561) | 新增 `MemoryChanged` hook，托管记忆变更通知集成方 |
| [#12276](https://github.com/QwenLM/qwen-code/pull/12276) | 本地 Notes 压缩策略选择器（summary / notes），`/settings` 可切换 |
| [#10644](https://github.com/QwenLM/qwen-code/pull/10644) | macOS/Linux 用 Shell 工具替代 glob/grep_search，内置 ripgrep 15 + bfs 4 |

其他值得留意：[#11854](https://github.com/QwenLM/qwen-code/pull/11854) 混合 code mode、[#10943](https://github.com/QwenLM/qwen-code/pull/10943)/[#10949](https://github.com/QwenLM/qwen-code/pull/10949) 后台 Agent View 会话（`--bg`、`sessions peek/answer`）、[#9417](https://github.com/QwenLM/qwen-code/pull/9417) heredoc 权限规则修复。

---

## 5. 功能需求趋势

- **Managed Agent / 多 Agent 架构**（最主线）：#12380 总纲 + W0/O1 分片，Session 持久化、Workspace 绑定、后台 Agent 恢复（#8586）、Agent Team 可视化（#11069），核心团队投入度极高。
- **会话与后台任务管理**：后台会话 CLI 控制、Live Voice/新建任务（#12620）、会话删除（#12619）等 Web Shell/Desktop 体验。
- **安装与自更新可靠性**：Windows 升级、ripgrep 执行位、打包权限——大量 P1/P2 集中于此。
- **IDE / 编辑器集成**：Zed ACP AskUserQuestion UI（#11361）、VS Code companion 消息编辑丢失（#12710）、Remote-SSH。
- **企业网络环境兼容**：代理/TLS 拦截（#12169）、MCP OAuth 发现（#12165）。

---

## 6. 开发者关注点

- **Windows 体验仍是重灾区**：/update 双 bug、编码检测、nightly CI 145 个失败、ripgrep 权限，建议 Windows 用户暂缓依赖 self-update。
- **Hook 安全语义**：PreToolUse 并发决策竞态（#12683）提示多 hook 用户检查自身配置风险。
- **企业/代理环境用户**：Batch API dispatcher 修复（#12169）落地前批量任务不可用。
- **观察信号**：Managed Agent 以“提案 issue + 分片 PR + CI 门禁”的节奏高频推进，是判断项目架构方向的最好窗口；今日 SDK/CLI/Desktop 三端同步发布表明发布流水线已较为成熟。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（Codewhale）社区动态日报

**日期：2026-09-26 | 数据来源：github.com/Hmbown/DeepSeek-TUI**

---

## 📌 今日速览

今日项目无新版本发布，但开发活动非常密集：0.10.1 的“broken-now + trust”修复线集中落地，多个核心 PR（信任与凭证安全、Runtime/TUI 架构拆分、Code Mode MCP 统一审批门）在同一天关闭，标志着 0.10.1 收尾冲刺。同时，创始人方向明确：插件与 MCP 扩展性将整体迁移至 TypeScript + Cordis（对齐 DeepSeek Harness 模型），首个 phase 1 PR 已开。社区侧新增两个外部贡献：Decision Gate 提案和多 TUI 会话 CPU 自旋 bug 报告。

---

## 🚀 版本发布

过去 24 小时无新 Release。从 Issue 内容推断，当前主线为 **0.10.0（已发布）→ 0.10.1（冲刺中）**。

---

## 🔥 社区热点 Issues（Top 10）

1. **#6603 [OPEN] 可选 Decision Gate 加速常规代理决策**（@Andrea-Bruno，今日新增）
   指出每条用户消息都唤醒大模型判断意图，简单操作也要 1-3 秒和真金白银。提议用轻量决策层拦截例行判断，是性能/成本方向的高价值提案，配套 PR #6604 已提交（shadow mode，默认关闭）。
   [链接](https://github.com/Hmbown/Codewhale/issues/6603)

2. **#6573 [OPEN] 多 TUI 会话争抢 Subagents Store → CPU 自旋**（@Gabriel-Degret）
   FreeBSD 15.0 上实测：多个空闲 codewhale 进程 CPU 打满。多会话并发是核心场景，此 bug 影响日常使用体验，需优先关注。
   [链接](https://github.com/Hmbown/Codewhale/issues/6573)

3. **#6585 [OPEN] 让"指令优先级"可校验：指令与记忆的来源追溯、agent 文本作为声明、诚实性不可覆盖**（@Hmbown）
   创始人批准的方向。为指令文件和 memory 增加来源标注，把 agent 输出降级为“声明”而非事实，是 agent 可信性方向的架构级设计。
   [链接](https://github.com/Hmbown/Codewhale/issues/6585)

4. **#6582 [OPEN] hooks：为 shell tool_call_after 提供结构化执行回执（stdin）**（@wuisabel-gif）
   来自 MemoryWhale 插件作者，希望 hook 能拿到命令、cwd、退出码、输出的结构化数据，便于本地记忆系统记录。反映插件生态对 hook 数据结构化的真实需求。
   [链接](https://github.com/Hmbown/Codewhale/issues/6582)

5. **#6510 [CLOSED] exec 不带 --auto 时绕过 Engine、存在两套提示词**
   非自动模式下 exec 不加载 BASE_PROMPT、AGENTS.md、skills、hooks、tools，也不写会话记录——“第二权威”问题。已由 PR #6588 修复，是权限/一致性安全面的重要收口。
   [链接](https://github.com/Hmbown/Codewhale/issues/6510)

6. **#6566 [CLOSED] 首次运行体验审计：新用户看不到 onboarding，首条消息丢失或重复**
   以全新用户视角（含 zh_CN、双分辨率）审计发现首次运行无引导、key 报错面向开发者等问题。已由 PR #6592 修复，新用户留存的关键改进。
   [链接](https://github.com/Hmbown/Codewhale/issues/6566)

7. **#6562 [CLOSED] Code Mode 支持 MCP 与插件：免重发现 + 单一审批门的类型化绑定**
   基于创始人 81 个会话、11,574 次工具调用的实证（MCP 仅占 3%，但 71% 集中在少数服务器），参考 Cursor 每服务器 schema 可省 46.9% token。设计研究质量很高，已由 PR #6583 落地。
   [链接](https://github.com/Hmbown/Codewhale/issues/6562)

8. **#6517 [CLOSED] 删除约 2,650 行无生产消费者的 crates/workflow 代码**
   大规模遗留代码清理：replay.rs、review 模块等仅在测试中引用。体现项目“不留第二权威”的工程纪律。
   [链接](https://github.com/Hmbown/Codewhale/issues/6517)

9. **#6528 [CLOSED] 凭证设置：剥离粘贴 key 中的不可见字符；认证错误指明提供商/主机/key 来源**
   粘贴的 API key 仅 `.trim()`，BOM/零宽空格导致 401 且极难排查。对新手极其友好的修复，已关闭。
   [链接](https://github.com/Hmbown/Codewhale/issues/6528)

10. **#6579 [CLOSED] 恢复 main 分支 Linux 全工作区测试绿门**（@aboimpinto）
    权威测试命令在干净的 upstream main 上即为红，影响所有 PR 验证可信度。质量基础设施的关键修复。
    [链接](https://github.com/Hmbown/Codewhale/issues/6579)

---

## 🔀 重要 PR 进展（Top 10）

1. **#6600 [OPEN] TypeScript + Cordis 扩展宿主 phase 1（flag 后置）**
   创始人方向落地：插件、MCP、扩展性整体迁向 TS + Cordis（DeepSeek Harness 同款模型），Rust 核心保持权威（turn loop、审批门、沙箱）。这是本项目最重要的架构转向之一。
   [链接](https://github.com/Hmbown/Codewhale/pull/6600)

2. **#6601 [OPEN] 信任修复包：凭证静态脱敏、诚实的审批超时、fail-closed 授权与工作区信任**
   工具输出在进入 transcript 时即脱敏，session JSON 不再泄漏凭证；授权默认失败关闭。0.10.1 信任线核心。
   [链接](https://github.com/Hmbown/Codewhale/pull/6601)

3. **#6586 [CLOSED] codewhale-runtime crate 拆分与边界棘轮（RS-0..RS-7）**
   创建独立 runtime crate，迁移无 UI 依赖模块，并用 ratchet 防止 runtime 代码反向依赖 TUI。架构治理的机制化。
   [链接](https://github.com/Hmbown/Codewhale/pull/6586)

4. **#6583 [CLOSED] Code Mode 中 MCP/插件调用统一走单一审批门**
   嵌套 MCP/插件调用也必须经过 `plan_tool_calls` 与 `request_tool_approval`，杜绝第二权威。
   [链接](https://github.com/Hmbown/Codewhale/pull/6583)

5. **#6588 [CLOSED] 单一 turn-loop 守卫覆盖子代理与 RLM 循环；exec/review 统一提示词权威**
   关闭 #6510/#6511：所有循环（含子代理、RLM、REPL/kernel 轮次）由一个守卫看管。
   [链接](https://github.com/Hmbown/Codewhale/pull/6588)

6. **#6592 [CLOSED] 首次运行修复：连接模型、消息不丢失不重复、审批保存 fail-closed**
   无可用 key 时直接打开提供商选择器；Esc 可返回。新用户体验的系统性修复。
   [链接](https://github.com/Hmbown/Codewhale/pull/6592)

7. **#6591 [OPEN] 会话回执（receipts）：基于已有记录列出会话做了什么**
   从 session 自身保留的记录生成操作清单，提升 agent 行为的可审计性。
   [链接](https://github.com/Hmbown/Codewhale/pull/6591)

8. **#6605 [OPEN] exec --auto 下存活于关闭的子管道；一次性 exec 剥离 DeepSeek DSML**
   修复 `codewhale doctor | head` 场景下 SIGPIPE 导致的静默 141 退出。
   [链接](https://github.com/Hmbown/Codewhale/pull/6605)

9. **#6580 [OPEN] runtime-api：在指定 turn 处 fork 线程**
   新增 `POST /v1/threads/{id}/fork-at-turn` 端点，客户端部分将在 VSCode 扩展中落地——IDE 集成方向信号。
   [链接](https://github.com/Hmbown/Codewhale/pull/6580)

10. **#6604 [OPEN] 可选 Superfast Decision Gate（shadow mode，默认关闭）**
    社区贡献，对应 Issue #6603。第一增量只测量与记录，不改变行为，评审风险低。
    [链接](https://github.com/Hmbown/Codewhale/pull/6604)

---

## 📈 功能需求趋势

- **扩展性架构转向 TS + Cordis**：插件/MCP 生态迁移是当前最大战略方向（#6600、#6562）。
- **信任、安全与可审计性**：凭证脱敏、fail-closed 授权、来源追溯、会话回执（#6601、#6585、#6591）——0.10.1 的主旋律。
- **性能与成本优化**：Decision Gate 提案直指每次交互的延迟与 token 成本（#6603/#6604）。
- **新用户与首次运行体验**：onboarding、提供商选择器、凭证录入容错（#6566、#6528、#6500）。
- **多会话/多实例稳定性**：store 争抢、CPU 自旋（#6573）。
- **Hook 数据结构化与本地记忆生态**：MemoryWhale 等插件要求结构化执行回执（#6582）。
- **IDE / VSCode 集成**：thread fork-at-turn API 的客户端在 VSCode 扩展中交付（#6580）。

---

## 🛠️ 开发者关注点（痛点总结）

1. **静默失败最难排查**：粘贴 key 含不可见字符导致 401（#6528）、config set 接受拼写错误且写入无人读取的键（#6563）、undo 快照损坏静默死亡（#6602）——社区反复要求“错误必须说出 Provider、来源和修复方法”。
2. **“第二权威”造成的功能不一致**：exec 绕过 Engine、Code Mode 嵌套调用绕过审批、两套提示词（#6510、#6562）——项目正在系统性消灭所有旁路。
3. **主分支测试红门**（#6579）削弱 PR 验证可信度，质量基建被优先修复。
4. **多实例资源竞争**：空闲进程 CPU 打满（#6573）对长开会话的重度用户是实际生产力损失。
5. **文档与死配置漂移**：大量 dead flags/env/文档存根需要清理（#6516），说明配置面增长快于文档维护。

---

*本报告基于过去 24 小时 GitHub 数据自动汇总，共追踪 15 条 Issue 更新与 50 条 PR 更新。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-09-26

## 今日速览

今日无新版本发布，但社区活动非常活跃：110 条 Issue 更新、12 条 PR 动态。最值得关注的是维护者 @mitsuhiko 提交了两个重量级 PR——**Codemode + MCP 支持**（#10040）和**实验性虚拟模型**（#10035），可能显著改变 Pi 的能力边界。同时多位高热度 bug（ESC 卡死、OpenRouter 成本统计偏差）在今日关闭，显示团队正在集中清理积压。

---

## 版本发布

过去 24 小时无新 Release。

---

## 社区热点 Issues（Top 10）

1. **[#10031](https://github.com/earendil-works/pi/issues/10031) [已关闭] ESC 中断思考后卡在 "Working..."** — 15 条评论。约自 v0.84.0 起，多台机器上复现，只能 Ctrl+C 退出后 `pi -c` 恢复。高频用户痛点，今日关闭，或已随近期修复落地。

2. **[#7885](https://github.com/earendil-works/pi/issues/7885) [已关闭] npm 搜索不索引新发布的 pi-packages** — 15 条评论。自 8 月 4 日起新包无法被 npm search 收录，直接影响 pi.dev 包画廊生态，困扰包作者已久，今日关闭。

3. **[#9361](https://github.com/earendil-works/pi/issues/9361) [开放] Windows shellPath 被非确定性忽略** — 11 条评论。加载扩展后 settings.json 中的 `shellPath` 被静默忽略，回退到 PATH 中的 WSL System32 bash.exe，对 Windows 用户是隐蔽且危险的行为。

4. **[#9803](https://github.com/earendil-works/pi/issues/9803) [已关闭] 0.86.0 回归：RPC steer 无法与扩展处理的输入关联** — 11 条评论。RPC 客户端无法可靠区分输入被消费还是入队，影响程序化集成场景的可靠性。

5. **[#8896](https://github.com/earendil-works/pi/issues/8896) [已关闭] /export HTML 静默丢弃 display:false 的消息** — 9 条评论。`display` 本应只影响 TUI 显示，却导致导出的 HTML 丢失模型实际看到的上下文，导出内容与真实会话不一致。

6. **[#9980](https://github.com/earendil-works/pi/issues/9980) [开放] OpenRouter 开源模型成本计算偏差 2-3 倍** — 5 条评论。目录使用最便宜 provider 的定价计算成本，对 GLM-5.3-flash 等多供应商热门模型普遍失真，直接影响用户成本核算。

7. **[#10033](https://github.com/earendil-works/pi/issues/10033) [开放] 压缩提示词包含全部 thinking 文本导致超上下文** — 5 条评论。对返回 thinking 的推理模型（如自托管 DeepSeek V4.1），自动压缩永远无法成功，是长会话用户的阻断性问题。

8. **[#9974](https://github.com/earendil-works/pi/issues/9974) [已关闭] llama.cpp Responses API 工具调用被重复/损坏执行** — 5 条评论。本地推理用户重要场景，Pi 对非标准 SSE 流的容错处理需加强。

9. **[#9967](https://github.com/earendil-works/pi/issues/9967) [已关闭] 负载均衡代理下重放 reasoning item id 破坏多轮对话** — 5 条评论。Bifrost 等网关用户多轮对话必现 400 错误，反映企业代理部署场景的真实需求（另见重复议题 #9966）。

10. **[#10008](https://github.com/earendil-works/pi/issues/10008) [已关闭] 社区质疑 bug 报告被自动关闭无人处理** — 4 条评论。用户情绪化但指向真实治理问题：自动关闭机制（no-action 标签）让报告者感到被忽视，值得维护团队关注社区体验。

---

## 重要 PR 进展（Top 10）

1. **[#10040](https://github.com/earendil-works/pi/pull/10040) [开放] Codemode 和 MCP 支持** — @mitsuhiko 的大型特性 PR。Codemode 为 Jev 等模型提供沙箱环境，同时引入 MCP 协议支持。作者对 MCP 态度谨慎但认为值得引入，是今日最具战略意义的 PR。

2. **[#10035](https://github.com/earendil-works/pi/pull/10035) [开放] 虚拟模型（Virtual Models）** — @mitsuhiko 提交的实验性特性，可能支持模型抽象/路由层的玩法，值得持续追踪。

3. **[#10057](https://github.com/earendil-works/pi/pull/10057) [已关闭] TUI：stdout 断开时不再直接退出进程** — 修复 #10056，EPIPE/ECONNRESET 等管道错误不再导致 `process.exit(1)`，提升管道/守护场景健壮性。

4. **[#10044](https://github.com/earendil-works/pi/pull/10044) [已关闭] 升级 openai SDK 至 7.19.0** — 为 GPT-6 Fast 模式正确计价铺路，直接呼应 Issue #10034（fast tier 记录 1x 而非 2x 价格）。

5. **[#10050](https://github.com/earendil-works/pi/pull/10050) [开放] 阻止扩展 console 输出污染 TUI** — 扩展内 `console.log` 等直写 tty 会破坏差分渲染帧，此 PR 将其引导到日志通道。

6. **[#10039](https://github.com/earendil-works/pi/pull/10039) [已关闭] 自定义主题支持 truecolor** — 根据环境与终端设置正确解析颜色模式，不再污染全局能力状态。

7. **[#10051](https://github.com/earendil-works/pi/pull/10051) [已关闭] MCP OAuth 动态注册不支持的友好错误映射** — 为常见 OAuth 兼容性问题提供用户可操作的错误提示，完善 MCP 体验。

8. **[#8262](https://github.com/earendil-works/pi/pull/8262) [开放] 所有 turn-start 路径统一分发 hooks** — 修复 `sendCustomMessage(triggerTurn: true)` 绕过 `input` hook 和 `before_agent_start` 的不一致，对扩展生态的行为一致性很重要。

9. **[#10037](https://github.com/earendil-works/pi/pull/10037) [已关闭] 性能优化：折叠历史工具输出** — 长会话渲染性能优化方向。

10. **[#6933](https://github.com/earendil-works/pi/pull/6933) [已关闭] 为本地 LLM 默认禁用 undici 空闲超时** — 解决 vLLM/LM Studio/Ollama 等慢推理后端在 prompt 评估期间被 5 分钟超时切断的问题，本地部署用户福音。

---

## 功能需求趋势

- **MCP 与可扩展性**：MCP 支持 PR（#10040）+ OAuth 错误处理（#10051）+ telemetry 扩展提案（#10006），生态集成是当前主线。
- **企业/代理部署场景**：负载均衡代理兼容（#9967/#9966）、RPC 可观测性（#9803、#9098 的 disposition 字段需求）、OTLP 导出提案。
- **成本核算准确性**：OpenRouter 定价偏差（#9980）、GPT-6 fast tier 计价（#10034）、工具集变更导致重复计费（#10024）。
- **本地/自托管模型**：llama.cpp 工具调用容错（#9974）、压缩超上下文（#10033）、undici 超时（#6933）。
- **TUI 体验打磨**：隐藏工具行模式（#10011）、双向 thinking 级别切换（#3790、#6281）、鼠标追踪可关闭（#8913）、CMD 模式 outputPad（#9946）。
- **长会话稳定性**：ESC 卡死（#10031）、压缩失败（#10033）、abort 后悬空 tool calls（#9986）。

---

## 开发者关注点

1. **会话生命周期健壮性是最大痛点**：卡死（#10031）、挂起不退出（#9840、#9997）、abort 后 tool call 无结果（#9986）——多个议题指向同一类“进程状态不一致”问题。
2. **上下文/计费透明度**：导出丢内容（#8896）、压缩含全量 thinking（#10033）、系统提示头移动导致重计费（#10024），用户强烈要求所见即所发、所发即所计费。
3. **非标准后端兼容性**：OpenAI 兼容生态（llama.cpp、GLM、Kimi、Codex）的流式差异持续产生 bug，需要更强的容错层。
4. **Windows 体验仍待改善**：shell 路径解析非确定性（#9361）这类隐蔽问题影响信任度。
5. **社区治理信号**：#10008 对自动关闭机制的不满值得警惕，建议对高评论量 issue 增加人工 triage。

---

*数据来源：github.com/earendil-works/pi · 统计窗口：2026-09-25 至 2026-09-26*

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# 📰 oh-my-pi 社区动态日报 — 2026-09-26

## 1️⃣ 今日速览

oh-my-pi 昨日连发 **v18.3.1 / v18.3.2** 两个补丁版本，核心是 Codex WebSocket 的实时 steering（中途插话）支持和工具调用静默丢参数的关键修复。社区方面，Advisor（评审代理）行为异常成为最热话题，两条高热度 Issue 反映其“过度干预工作流”。PR 侧，`andrebrait` 的 passive tool-call context 三部曲（#13266/#13267/#13269）与 RPC 队列消息管理系列持续推进，扩展能力显著增强。

## 2️⃣ 版本发布

### [v18.3.2](https://github.com/can1357/oh-my-pi/releases)
- **修复关键 Bug**：模型将文件内容误放入 intent 字段 `i`（如 `write` 的文件体）时，此前会带着残留参数静默执行；现在会显式报错并提示模型重试。对应 Issue [#13140](https://github.com/can1357/oh-my-pi/issues/13140)。

### [v18.3.1](https://github.com/can1357/oh-my-pi/releases)
- **新增** Codex WebSocket 传输的 live steering 支持——响应进行中即可追加用户输入
- **新增** passive tool-call context 支持，允许 hooks 和工具为后续模型处理注入额外上下文（对应 PR #13266/#13267/#13269）

## 3️⃣ 社区热点 Issues

| # | Issue | 关注点 |
|---|-------|--------|
| 1 | [#9745](https://github.com/can1357/oh-my-pi/issues/9745) | **Advisor 过期 WIP 状态卡死评审**：primary 已完成但 Advisor 仍持有旧 `inProgress` 状态，后续更新被阻塞在队列后。14 条评论，讨论热烈 |
| 2 | [#12917](https://github.com/can1357/oh-my-pi/issues/12917) | **Advisor 行为激进化**：近期更新后 Advisor 过度“执法”，干扰正常工作流，是 #12777 的延续追问。10 条评论，用户焦虑明显 |
| 3 | [#13059](https://github.com/can1357/oh-my-pi/issues/13059) | **Anthropic 服务端 fallback 硬编码 `claude-opus-5-5`**，API 对 `claude-fable-5-1` 直接返回 400。P1 已修复关闭 |
| 4 | [#13253](https://github.com/can1357/oh-my-pi/issues/13253) | **429 配额错误误判为 UsageLimit**：滚动窗口 TPM/RPM 超限被错误分类，编造 30 分钟等待并 fail-fast 终止回合。P2，已在 18.3.1 复验，影响自定义 provider 用户 |
| 5 | [#13182](https://github.com/can1357/oh-my-pi/issues/13182) | bash 工具可选字段被模型填成空/默认值时误判为 service 模式并拒绝执行——工具参数校验过于激进 |
| 6 | [#13336](https://github.com/can1357/oh-my-pi/issues/13336) | **Anthropic 缓存命中率崩塌**（20.1% → 2.0%）：两个 context handler 同时删/增消息导致 prompt cache 间歇性失效，190k 历史被迫重算，成本影响大 |
| 7 | [#13252](https://github.com/can1357/oh-my-pi/issues/13252) | Compaction 的 auto-shake 未达阈值仍提交 elided blocks，为省 3% token 付出数万 token 重处理。性能优化共识强 |
| 8 | [#13260](https://github.com/can1357/oh-my-pi/issues/13260) | ollama-cloud 的 API key 被错误用于 OpenAI 模型——provider 凭据隔离问题 |
| 9 | [#13116](https://github.com/can1357/oh-my-pi/issues/13116) | 支持 Windsurf Enterprise 遗留席位登录（Devin provider），解决 OAuth 401 问题 |
| 10 | [#13250](https://github.com/can1357/oh-my-pi/issues/13250) | legacy pi-ai shim 缺少 `anthropicMessagesApi`，阻塞 pi-background-tasks ≥2.6.0 安装，扩展兼容性痛点 |

**其他值得关注**：[#2956](https://github.com/can1357/oh-my-pi/issues/2956)（快捷键切换工具审批模式，15 👍，长尾高分需求）、[#13335](https://github.com/can1357/oh-my-pi/issues/13335)（SKILL.md 中按 skill 覆写 subagent 模型）。

## 4️⃣ 重要 PR 进展

1. **[#13355](https://github.com/can1357/oh-my-pi/pull/13355)** — Collab 主机在 relay 掉线后自动回收房间（150s 重试窗口），提升协作会话韧性
2. **[#13266](https://github.com/can1357/oh-my-pi/pull/13266) / [#13267](https://github.com/can1357/oh-my-pi/pull/13267) / [#13269](https://github.com/can1357/oh-my-pi/pull/13269)** — passive after-tool context 三部曲：工具执行后注入附加上下文 + TUI 上以 `↳ Context:` 行展示，对标 Claude 的 PostToolCallFailure hook
3. **[#13026](https://github.com/can1357/oh-my-pi/pull/13026)**（review:p1）— 修复内建 slash 命令意外清空 Ctrl+Enter 已分离的草稿
4. **[#13078](https://github.com/can1357/oh-my-pi/pull/13078)** — TUI 中 GitHub `#N` / `owner/repo#N` 引用渲染为 OSC 8 可点击超链接
5. **[#13289](https://github.com/can1357/oh-my-pi/pull/13289)** — Herdr 终端面板内启用 OSC 8 超链接（自动跳过嵌套 tmux/screen）
6. **[#11618](https://github.com/can1357/oh-my-pi/pull/11618) / [#11872](https://github.com/can1357/oh-my-pi/pull/11872)** — RPC 队列消息管理：follow-up 提升为 steering、按内容移除排队消息，含 Python/TS 客户端同步
7. **[#13027](https://github.com/can1357/oh-my-pi/pull/13027) / [#11834](https://github.com/can1357/oh-my-pi/pull/11834)** — 统一 RPC（ompweb）与终端的 input hook 行为，扩展一致性修复
8. **[#12273](https://github.com/can1357/oh-my-pi/pull/12273)** — 新增 `omp skills` CLI 命令，输出机器可读的 skills 列表，服务 ompweb 等外部 GUI
9. **[#12151](https://github.com/can1357/oh-my-pi/pull/12151)** — 同名 skills 按内容哈希命名空间化：字节相同静默合并、内容不同保留双份，解决冲突丢弃问题
10. **[#11803](https://github.com/can1357/oh-my-pi/pull/11803)**（已关闭）— http/sse MCP 服务器断线后按指数退避（15s → 5min）自动重连

## 5️⃣ 功能需求趋势

- **多模型路由与调度**：[#13317](https://github.com/can1357/oh-my-pi/issues/13317)（failover/rotate/judge-routed 策略）、[#12604](https://github.com/can1357/oh-my-pi/issues/12604)（模型分层路由）、#13335（per-skill 模型覆写）、#4977（GPT-5.6 Pro reasoning mode）——多模型智能调度是当前最集中的诉求方向
- **TUI 键盘导航体验**：滚动/跳转历史消息（#2956、#8726、#7893、#4754）是长期高频需求，tmux 下滚动尤其突出
- **扩展/插件生态**：插件命令自定义图标（#13220）、shim 兼容性（#13250）、agent 身份暴露（#10228）
- **Provider 兼容与凭据管理**：Anthropic fallback、ollama-cloud 凭据隔离、Windsurf Enterprise 登录
- **成本与 token 优化**：缓存命中（#13336）、compaction 策略（#13252）

## 6️⃣ 开发者关注点（痛点总结）

1. **Advisor 可靠性危机**：两条高热 Issue 指向 Advisor 状态管理和行为强度问题，近期更新后信任度下降，需官方回应
2. **工具调用参数容错**：模型填错字段（intent 混淆、空可选字段）时系统行为不可预测——v18.3.2 已修一例，但 #13182 类问题仍在
3. **错误分类与重试策略**：429 误判（#13253）直接终止回合，fail-fast 对生产用户伤害大
4. **Token 成本敏感**：缓存崩塌与无效 compaction 直接推高账单，社区对“省 token 反而费 token”的回归尤为警惕
5. **凭据/provider 隔离**：多 provider 共存时 API key 串用（#13260）暴露配置隔离不足

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*