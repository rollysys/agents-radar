# AI CLI 工具社区动态日报 2026-10-13

> 生成时间: 2026-10-13 05:59 UTC | 覆盖工具: 11 个

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
**数据日期：2026-10-13**

---

## 1. 生态全景

AI CLI 工具已从单一“终端补全”演化为覆盖 TUI 交互、多代理编排、Computer Use、企业部署的完整 agent 平台生态。头部工具（Claude Code、Codex）社区讨论焦点正从功能新增转向**可靠性、成本可预测性与安全护栏**，标志着产品进入成熟深水区。多代理/子代理编排是所有工具共同的主导技术方向，但各家成熟度差异显著——Gemini CLI 子代理仍在解决“误报成功/挂起”的基础问题，Qwen Code 已在探索 Kubernetes 运行时与跨控制面恢复。同时，Windows 平台支持成为新的竞争分水岭，Codex、DeepSeek TUI、Pi 均被 Windows 问题集中困扰。

---

## 2. 各工具活跃度对比

| 工具 | 热点 Issues（今日提及） | PR 动态 | Release | 核心事件 |
|---|---|---|---|---|
| **Claude Code** | 10 | 0 | 无 | prompt cache TTL 降级（#101685）、EOL 依赖安全隐患（#101683）|
| **OpenAI Codex** | 10 | 10+（copyberry 密集合入）| 无 | Windows CUA 阻塞（#52407, 67 评论）；TUI Issue 批量关闭预示大更新 |
| **Gemini CLI** | 10 | 10+ | v0.65.0-nightly | 子代理可靠性为 P1 焦点；扩展加载修复 |
| **GitHub Copilot CLI** | 10+ | 0 | **v1.0.96 → 1.0.97-2（3 版）** | 自定义 Agent hooks 上线；BYOK 缺陷簇集中爆发 |
| **OpenCode** | 10+ | 10+ | 无 | V1→V2 迁移缺陷集中复现；OpenAI 显式 prompt cache PR |
| **Qwen Code** | 10 | 10+ | v0.25.1-nightly | Managed Agent 架构推进（#12380, 57 评论）|
| **DeepSeek TUI** | 10 | 6 | 无（v0.10.2 待 tag）| Windows 兼容、会话持久化、分层定价 |
| **Pi** | 10 | 10+ | **v1.2.0** | OpenRouter per-key 模型列表；Windows 调研（#7547, 81 评论）|
| **oh-my-pi** | 10 | 10+ | v18.10.2 / 18.10.3 | Windows 误删目录 P1（#15511）；性能优化密集落地 |
| Kimi Code / DeepSeek Harness | — | — | — | 无活动 |

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **多代理/子代理编排** | 全部主流工具 | Codex：子代理完成触发唤醒父代理（#46120）；Gemini：并行协作与共享内存；Qwen：agent 身份契约（#13785）；oh-my-pi：跨会话消息、子代理最小 prompt（#4991）|
| **Prompt cache 与成本控制** | Claude Code、OpenCode、oh-my-pi | TTL 降级告警（#101685）、OpenAI 显式 cache 断点（PR #55041）、子代理唤醒导致 cache 全失效（#15523）|
| **会话持久化与恢复可靠性** | Codex、OpenCode、DeepSeek TUI、Pi、oh-my-pi | resume 后权限/工具丢失（PR #53419、Pi #10785）、8 MiB 会话无法恢复（#6955）、handoff 残留阻断 resume（#6954）|
| **权限与沙箱模型精细化** | Claude Code、Codex、Gemini、DeepSeek TUI、oh-my-pi | Worktree 误拦（#95122）、沙箱审批状态不一致（#53032）、Full Access 仍拦只读命令（#6963）、ACP 权限二元化（#15473）|
| **Windows 一等公民支持** | Codex、DeepSeek TUI、Pi、oh-my-pi、Copilot | CUA 启动失败（#52407）、Win10 1607 启动回归（#6962）、Gatekeeper 拦截（#970, 22👍）、盘符路径误删（#15511）|
| **多 Provider / BYOK 路由** | Copilot、Pi、OpenCode、oh-my-pi | BYOK 子 agent wire API 冲突（#5103）、跨模型 fallback（#7602 关闭）、per-key 模型过滤 |
| **MCP 资源与生命周期** | Claude Code、OpenCode、Copilot | 每会话复制 1GB 进程（#99831）、OAuth token 迁移丢失（#54879）、Entra 认证失败（#5068）|
| **国际化/本地化** | OpenCode、Qwen、Claude Code | 中文词典缺 93 key（#53858）、RTL 渲染错乱（#13837）、多语言 AGENTS.md（#6964）|

---

## 4. 差异化定位分析

- **Claude Code**：订阅制生态旗舰，焦点在权限模型（#16550 文件写入）、桌面多账号与 Mods 插件生态；痛点集中在成本异常与自动化场景的稳定性。
- **OpenAI Codex**：押注 **Computer Use + Windows 桌面端**，同时 TUI 体验打磨最积极（Vim 模式、配色、状态栏批量落地）；copyberry 机器人承担全部 PR 合入，自动化开发流程独树一帜。
- **Gemini CLI**：定位技术极客，社区产出大量**架构级提案**（OS 级沙箱、AST 感知检索、token 外科手术式读取）；但子代理基础可靠性（误报成功、挂起）尚未过关。
- **GitHub Copilot CLI**：企业级 + 生态整合路线，今日发布节奏最快（3 版本/日），核心投入在自定义 Agent hooks、沙箱交互与内联图片等开箱体验；BYOK 是其最弱一环。
- **OpenCode**：开源多 provider 聚合层，正处于 **V1→V2 架构迁移阵痛期**；跨模型 fallback + 显式 cache 表明其差异化在“成本与可用性双优”。
- **Qwen Code**：技术野心最大，Managed Agent 双路径架构（TS agent loop 与运行时解耦）+ Kubernetes 工具运行时 + Java SDK/SQL 权限体系，明显面向**平台化/企业级部署**。
- **DeepSeek TUI**：面向 endpoint 运营生态，引入**分层定价与 endpoint-scoped catalog**，商业化基础设施是独特卖点；Windows 兼容与发布纪律是其工程重点。
- **Pi / oh-my-pi**：轻量级多 provider 终端工具，主打 OpenRouter/多订阅路由与性能优化；oh-my-pi 在 macOS Computer Use 上投入密集（用户输入让行、元素 ref 跟随）。

---

## 5. 社区热度与成熟度

**活跃度梯队**：
- **第一梯队**：Claude Code（单 issue 最高 78👍）、Codex（单 issue 67 评论）、Gemini CLI——用户基数大、Issue 讨论深度高。
- **第二梯队**：Copilot CLI、OpenCode、Qwen Code、oh-my-pi——发布/PR 节奏快，社区以缺陷报告和架构讨论为主。
- **第三梯队**：Pi、DeepSeek TUI——核心维护者主导，社区规模较小但反馈质量高（如 DeepSeek TUI 收到 endpoint 运营方一线数据 #6889）。

**成熟度判断**：
- **快速迭代期**：Copilot CLI（日发 3 版）、Qwen Code（nightly + 架构重构）、OpenCode（V2 迁移）、oh-my-pi（v18.x 高频发布）。
- **成熟但承压期**：Claude Code（焦点从功能转向成本/稳定性/安全）、Codex（TUI 收尾但 Windows 质量塌方）。
- **基础夯实期**：Gemini CLI（子代理可靠性未解，尚不宜重负载编排）。

---

## 6. 值得关注的趋势信号

1. **成本可观测性成为新的信任底线**：Claude Code cache TTL 静默降级、oh-my-pi 子代理唤醒致 cache 失效、Pi 计费正确性 P0——三家同日出现 prompt cache/计费类问题，说明长会话成本透明度将是下一轮竞争焦点。开发者应监控自身 token 消耗异常，勿盲信订阅套餐。
2. **安全策略从“一刀切”走向“上下文感知”**：Claude Code 同时存在“无漏洞检查装 EOL 依赖”和“密码输入硬封锁”两类相反问题；DeepSeek TUI、oh-my-pi 均有权限过严误伤案例。默认安全 + 可配置 opt-in 是明确方向。
3. **Windows 是当前最大质量洼地，也是机会窗口**：五个工具同时被 Windows 问题困扰（CUA 失败、启动回归、路径误删、Gatekeeper）。谁能率先交付稳定 Windows 体验，将获得企业端差异化优势。
4. **子代理编排是共识方向，但状态可信度是前提**：Gemini “误报成功”、oh-my-pi `isError` 缺失均属同一类问题——agent 汇报不可信会污染上层决策。构建多代理系统时应引入独立的结果校验层。
5. **自动化开发流程兴起**：Codex 的 copyberry 机器人几乎独立完成全部 PR、oh-my-pi 出现 AI agent 自主验证并提交 issue（#15523），预示 AI CLI 工具自身正成为 AI 开发流程的首批大规模试验场。
6. **升级需谨慎的实操建议**：OpenCode V1 用户暂缓迁移（#54736/#54879）；依赖 `estimateImageContentTokens()` 的 oh-my-pi 代码需在 v18.10.3 前迁移；Windows + 企业 Entra 环境的 Copilot 用户暂无 workaround，建议关注官方修复。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

*数据来源：github.com/anthropics/skills，截止 2026-10-13*

---

## 一、热门 Skills 排行（PR）

> 注：本期数据中 PR 评论数均缺失，按更新活跃度与关联 Issue 讨论热度综合排序。

| # | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | **mcp-builder 修复** ([PR #1742](https://github.com/anthropics/skills/pull/1742)) | 适配 mcp>=2.0 的 `streamable_http_client` 重命名及自定义 HTTP 头注入方式 | mcp-builder 是官方核心 Skill，配套 Issue [#1390](https://github.com/anthropics/skills/issues/1390)（评测 0/N 分）显示其 MCP 兼容性问题被持续关注 | OPEN |
| 2 | **skill-creator 触发评测隔离** ([PR #1298](https://github.com/anthropics/skills/pull/1298)) | 隔离 trigger evals、修复 Windows `select()` 失败与误判 | 关联多个高热 Issue（#556、#1352、#1383），触发率误判为 0 是社区最痛的 Bug 之一 | OPEN |
| 3 | **skill-creator 评测查看器安全加固** ([PR #1961](https://github.com/anthropics/skills/pull/1961)) | 修复脚本逃逸、DNS rebinding、跨站 POST、XSS | 呼应 Issue [#1394](https://github.com/anthropics/skills/issues/1394)，eval-viewer 的 XSS 隐患引发安全讨论 | OPEN |
| 4 | **proofcore-contract-auditor** ([PR #1771](https://github.com/anthropics/skills/pull/1771)) | Solidity/Rust 合约静态分析 + TON 链上审计存证 | Web3 方向 Skill，社区对其商业推广性质存在争议 | OPEN |
| 5 | **md2video-audio** ([PR #1703](https://github.com/anthropics/skills/pull/1703)) | Markdown → Marp 幻灯片 → 带 AI 配音的 MP4 视频 | “零成本内容视频化”方向，9 月更新频繁 | OPEN |
| 6 | **docx 修复系列** ([PR #1792](https://github.com/anthropics/skills/pull/1792), [PR #1734](https://github.com/anthropics/skills/pull/1734)) | LibreOffice 超时正确报错并验证输出、检测孤儿批注 | 文档类官方 Skill 的可靠性打磨需求旺盛 | OPEN |
| 7 | **document-typography** ([PR #514](https://github.com/anthropics/skills/pull/514)) | AI 生成文档的排版质量控制（孤行、孤词、编号错位） | 长期未决但切中 AI 文档痛点 | OPEN |
| 8 | **notion-spec-to-implementation** ([PR #1245](https://github.com/anthropics/skills/pull/1245)) | 产品规格 → Notion 任务拆解 → Claude Code 实施 | Spec-to-Code 工作流自动化方向代表 | OPEN |

---

## 二、社区需求趋势（Issues 提炼）

1. **安全与信任边界**（最热，46 评论）：[Issue #492](https://github.com/anthropics/skills/issues/492) —— 社区 Skill 冒充 `anthropic/` 命名空间引发信任滥用担忧；配套出现多个安全修复 PR（#1961、#1980 shell 注入）。
2. **组织级协作**：[Issue #228](https://github.com/anthropics/skills/issues/228) —— 期望 Skill 在组织内共享/团队 Skill 库，而非 Slack 手动传文件。
3. **Skill 质量评测基础设施**：#556、#1352、#1383 集中反映 run_eval.py 触发率误判、Windows 兼容、benchmark 静默失败——社区需要可信的 Skill 评测工具链。
4. **上下文效率**：[Issue #1487](https://github.com/anthropics/skills/issues/1487) —— claude-api Skill 单次注入 ~156k token 爆上下文，按需加载是强烈诉求；另有 compact-memory（#1329）提案压缩 agent 状态。
5. **Agent 治理与质量门禁**：#412（agent-governance）、#1385（三段式质量门禁管线）—— 企业级 AI 输出管控方向。
6. **文档工作流**：ODT 支持（PR #486）、排版控制（PR #514）、SharePoint 文档处理安全（#1175）。

---

## 三、高潜力待合并 Skills（活跃 OPEN PR）

- **[PR #1742](https://github.com/anthropics/skills/pull/1742)** mcp-builder MCP 2.x 兼容修复 —— 修复核心官方 Skill，关联 Issue #1668，10 月仍活跃，合并概率高。
- **[PR #1298](https://github.com/anthropics/skills/pull/1298)** skill-creator 触发评测隔离 —— 覆盖 #556/#1352/#1383 三个高热 Issue 的痛点。
- **[PR #1961](https://github.com/anthropics/skills/pull/1961)** eval-viewer 安全加固 —— 直接回应 Issue #1394 的 XSS 报告，10 月持续更新。
- **[PR #1792](https://github.com/anthropics/skills/pull/1792)** docx 超时错误处理 —— 小而明确的可靠性修复，典型 fast-track 候选。
- **[PR #1681](https://github.com/anthropics/skills/pull/1681)** package_skill.py 可直接执行修复 —— 开发者体验改进，更新周期长且持续。
- **[PR #1245](https://github.com/anthropics/skills/pull/1245)** Notion spec-to-implementation —— 符合工作流自动化趋势，9 月底仍有活动。

---

## 四、生态洞察（一句话总结）

> **社区当前最集中的诉求是“Skill 的可信度工程”：安全（命名空间信任、注入/XSS 防护）、可评测（触发率与 benchmark 可靠性）与上下文效率（按需加载），其优先级已明显高于新增功能型 Skill。**

---

# Claude Code 社区动态日报 · 2026-10-13

## 1. 今日速览

今日无新版本发布、无 PR 活动，社区焦点集中在 **Issue 讨论**上。最值得关注的是两个当天新报的问题：**交互式会话的 prompt cache 从 1 小时 TTL 降级为 5 分钟**（疑似影响成本），以及 **Agent 安装带 37 个已知 CVE 的 EOL 依赖而毫无安全检查**的安全隐患。此外，Worktree 隔离下的 Bash 误拦截问题持续发酵，多账号/多会话场景的桌面端体验仍是高频痛点。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **#16550 允许 Claude 写入/更新项目文件**（👍 78，评论 40）
   长期热度最高的功能请求，围绕文件写入权限粒度的讨论持续至今，反映社区对权限模型灵活性的强烈诉求。
   https://github.com/anthropics/claude-code/issues/16550

2. **#101685 交互式会话 prompt cache 写入 5 分钟 TTL 而非 1 小时**（当天新报）
   2026-10-12 起交互式会话缓存 TTL 异常降级为 5 分钟，而 headless `claude -p` 仍为 1 小时，直接推高订阅用户成本，疑似服务端变更，值得密切跟踪。
   https://github.com/anthropics/claude-code/issues/101685

3. **#101683 Agent 安装含 37 个 CVE 的 EOL 依赖，无漏洞检查**
   一次注册表查询失败后，Agent 装上了已停止支持的 Electron 36.9.5（11 个高危），暴露出依赖安装环节缺少安全护栏的设计缺口。
   https://github.com/anthropics/claude-code/issues/101683

4. **#78160 密码输入硬封锁破坏合法开发/测试流程**（评论 15）
   完全禁止输入密码的安全策略与开发者自有测试环境（localhost + 明确授权）冲突，社区呼吁提供权限门控的 opt-in。
   https://github.com/anthropics/claude-code/issues/78160

5. **#95122 Worktree 隔离误拦截无 git 的 Bash 命令**（3 天内 75 次拒绝）
   变量赋值、`$(…)`、循环、heredoc 等常规 shell 语法在 2.1.272/273 中被误判拒绝，与 #100385（hook 显式 allow 也被覆盖）共同指向隔离层守卫逻辑的缺陷。
   https://github.com/anthropics/claude-code/issues/95122

6. **#99831 Desktop 每会话复制一份 stdio MCP server（约 1 GB/个）**
   10 个会话 ≈ 10 GB 重复进程，swap 耗尽，与 #63251（MCP 懒加载需求）共同构成 MCP 资源管理的核心痛点。
   https://github.com/anthropics/claude-code/issues/99831

7. **#74662 Desktop 多账号下无法打开/恢复另一账号的本地会话**
   侧边栏会话列表按账号服务端存储，切换账号后本地会话“消失”，影响个人+工作双账号用户。
   https://github.com/anthropics/claude-code/issues/74662

8. **#101577 上下文压缩后未重新加载记忆/协议文件**
   CLAUDE.md 明确要求压缩后先读 MEMORY.md，但模型直接基于压缩摘要继续工作，削弱了记忆系统的可靠性。
   https://github.com/anthropics/claude-code/issues/101577

9. **#95922 Max 个人计划无法导出 Docs artifact PDF**
   个人订阅误报“组织不允许导出”，账号层面权限判断错误。
   https://github.com/anthropics/claude-code/issues/95922

10. **#95963 Desktop 每日强制重登录 + 定时任务中途冻结并静默跳过后续运行**
    自 9 月 18 日起 `session_stale_relogin` 每日触发，叠加 Routines 任务冻结，严重影响无人值守自动化场景。
    https://github.com/anthropics/claude-code/issues/95963

## 4. 重要 PR 进展

过去 24 小时无 PR 更新，本节省略。

## 5. 功能需求趋势

- **权限与安全模型精细化**：文件写入权限（#16550）、密码输入 opt-in（#78160）、依赖漏洞检查（#101683）——社区希望默认安全但可配置。
- **Auto 模式分类器可控性**：独立模型配置环境变量（#69002，👍 26）、API 降级回退机制（#78263）。
- **MCP 资源与生命周期管理**：懒加载连接（#63251）、避免跨会话进程复制（#99831）。
- **多账号 / 多会话体验**：跨账号会话恢复（#74662）、跨会话消息稳定性（#100760）、多面板焦点抢占（#101689）。
- **后台任务与 Skills 增强**：`context: fork` 后台子代理同步（#101688）、`/agents` 命令回归诉求（#100477）。
- **桌面端插件生态**：mod 注册斜杠命令不可见（#99691）、插件吉祥物槽位（#99425）等 Mods 生态反馈开始出现。

## 6. 开发者关注点

- **成本异常是当前最高优先级警讯**：prompt cache TTL 降级（#101685）叠加历史上子代理递归消耗配额（#72619），成本不可预测性是订阅用户最大焦虑。
- **Worktree 隔离守卫过于激进**：误拦截常规 Bash（#95122）且覆盖用户 hook 的显式 allow（#100385），隔离安全性正在以牺牲可用性为代价，急需白名单/逃生机制。
- **长会话稳定性**：长时间会话出现 ECONNREFUSED 卡死（#101687）、每日强制重登录（#95963），长跑自动化场景可靠性不足。
- **安全护栏缺失与过度并存**：一边是无漏洞检查的依赖安装（#101683），一边是密码输入一刀切封锁（#78160）——安全策略需要从“粗粒度硬规则”走向“上下文感知”。
- **本地化支持薄弱**：西语、葡语、波兰语用户的低质量提问 Issue 表明文档与界面的国际化引导有待加强。

---
*数据来源：github.com/anthropics/claude-code · 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-10-13）

## 📰 今日速览

今日无新版本发布，但社区活跃度极高：Windows 桌面端问题集中爆发，尤其是 Dots CUA 启动器失败（#52407，67 条评论）和本地命令挂起问题持续发酵。同时大量 TUI 增强类 Issue 被批量关闭，结合数十个由 copyberry 提交的修复 PR 合入，暗示一次较大的 CLI/TUI 更新即将发布。

---

## 🐛 社区热点 Issues（Top 10）

### 1. [#52407](https://github.com/openai/codex/issues/52407) — Windows Dots: CUA MXC launcher 启动失败（HRESULT 0x80070003）⭐ 最热
67 条评论、10 👍。Windows 25H2 上 Dots 计算机使用功能在 shell 恢复后无法启动 CUA launcher。这是 Computer Use 在 Windows 落地的核心阻塞问题，社区讨论非常热烈，尚无官方修复方案。

### 2. [#52747](https://github.com/openai/codex/issues/52747) — Windows 桌面端注入未知配置项 + 强制清理拒绝
配置中出现用户未定义的 `code_mode_tool_description_first`，且系统执行不透明的强制清理。涉及配置安全与透明度，14 条评论，值得 Windows 桌面用户警惕。

### 3. [#50725](https://github.com/openai/codex/issues/50725) — Windows：本地命令在子进程 spawn 前无限挂起
即使 `echo` 这样的最小命令也无法返回任何输出，ChatGPT Windows 桌面端的本地命令执行完全被阻塞，属高危功能性故障。

### 4. [#51524](https://github.com/openai/codex/issues/51524) — Computer Use 在 `get_window_state` 处停止，无法读取浏览器 URL（Chrome/Edge）
10 月 6 日起 Windows 浏览器自动化突然失效，与 #52407 共同反映 Windows Computer Use 链路近期回归严重。

### 5. [#53407](https://github.com/openai/codex/issues/53407) — GPT-6.1 Sol (xhigh) 容量不足 + 长任务丢失响应流（macOS CLI 0.162.1）
10 月 10–12 日期间模型持续返回 at-capacity，纯文本回合也失败。涉及服务端容量而非客户端，值得长任务用户关注。

### 6. [#53032](https://github.com/openai/codex/issues/53032) — Sites 发布被阻：设置了 "Ask for approval" 仍报 `sandbox_approval=false`
沙箱审批状态与用户设置不一致，直接影响发布工作流。

### 7. [#51434](https://github.com/openai/codex/issues/51434) — 云环境发布失败后 setup chat 无法恢复
环境 panic 后会话永久卡死，影响云环境用户的工作连续性。

### 8. [#46120](https://github.com/openai/codex/issues/46120) — 功能建议：子代理完成后主动唤醒父代理
提出用完成触发式唤醒替代 `wait_agent` 轮询，对多代理编排性能有实质意义，属高质量架构级建议。

### 9. [#49167](https://github.com/openai/codex/issues/49167) —（已关闭）`fullscreen_transcript` 意外控制 diff 截断行为 ✅
用户发现配置项之间的隐性耦合（22 行 patch 只显示 3 行）。已关闭，可能与今日 TUI 批量修复相关。

### 10. [#21850](https://github.com/openai/codex/issues/21850) —（已关闭）Vim 模式默认从 Insert 模式启动 ✅
29 👍 的高票需求，今日关闭，推测已实现。Vim 党的胜利。

> 💡 另有十余个 TUI 增强 Issue 今日集中关闭（如 #17879 用户/助手消息配色、#26311 固定输入框、#21003 限额倒计时等），详见下文趋势分析。

---

## 🔧 重要 PR 进展（Top 10）

| PR | 内容 | 意义 |
|---|---|---|
| [#53451](https://github.com/openai/codex/pull/53451) | 将不完整响应（如 `max_output_tokens`）视为终态错误 | 防止到达输出上限后无意义重试和降级压缩 |
| [#53452](https://github.com/openai/codex/pull/53452) | 回合收尾时关闭输入准入 | 修复 turn 结束时输入乱序/丢失的竞态 |
| [#53406](https://github.com/openai/codex/pull/53506) | 网络代理拒绝重复 Host 头 | 安全修复，防止策略评估与上游解析不一致 |
| [#53453](https://github.com/openai/codex/pull/53453) | WSL 下优先使用 Windows 剪贴板并限制复制尝试 | 修复 WSLg 剪贴板无限阻塞，TUI 复制更可靠 |
| [#53419](https://github.com/openai/codex/pull/53419) / [#53424](https://github.com/openai/codex/pull/53424) | 恢复已保存线程的权限 + 回归测试 | 只读线程恢复时正确恢复网络授权，安全相关 |
| [#53436](https://github.com/openai/codex/pull/53436) | TUI 请求回复路由到原连接和线程 | 修复会话切换后请求 ID 复用导致的错乱 |
| [#53429](https://github.com/openai/codex/pull/53429) | 配置开关热生效 + 设置导航改进 | 免重启即可应用动画、composer 等设置 |
| [#53444](https://github.com/openai/codex/pull/53444) | `codex exec` 抑制重复 turn diff 输出 | 清理非交互模式的冗余输出 |
| [#53412](https://github.com/openai/codex/pull/53412) | arg0 辅助目录按操作系统隔离 | 修复 Windows/WSL 共享 `CODEX_HOME` 时互相清理对方进程 |
| [#53440](https://github.com/openai/codex/pull/53440) / [#53438](https://github.com/openai/codex/pull/53438) | 16 色终端保留状态栏配色 / 移除 Apple Terminal 误判 | 两个终端兼容性打磨 |

其他值得关注：[#53400](https://github.com/openai/codex/pull/53400) 本地消息板跨运行时共享、[#53389](https://github.com/openai/codex/pull/53389) Guardian 使用缓存凭证、[#53393](https://github.com/openai/codex/pull/53393) Guardian 压缩失败原因细分。

---

## 📈 功能需求趋势

1. **TUI 可视化与可读性**（最大 cluster，今日集中关闭）：用户/助手消息配色区分（#17879、#15736、#35299）、固定输入框（#26311）、静音/仅最终答案模式（#36845）、状态栏插件与多行自定义（#16921、#47651）、限额倒计时（#21003）、auto-compact 计数（#33939）。
2. **Vim 模式深度支持**：默认 Insert 模式（#21850 ✅）、`c*` 操作（#32745 ✅）。
3. **多代理/子代理编排**：完成触发唤醒父代理（#46120）、本地消息板共享（PR #53400）。
4. **Windows / Computer Use 稳定性**：CUA 启动器、浏览器窗口状态、沙箱配置（#52407、#51524、#52747）。
5. **会话管理**：`/resume` 显示全部历史会话（#30878 ✅）、`/side` 聊天持久化（#20262 ✅）、会话标题常驻（#33378 ✅）。

---

## ⚠️ 开发者关注点

- **Windows 桌面端质量是当前最大痛点**：命令挂起、CUA 失败、配置注入、清理拒绝等多个高危 Issue 同时悬而未决，Windows 用户暂建议谨慎升级。
- **模型容量/流稳定性**：GPT-6.1 Sol (xhigh) 容量问题影响长任务自动化（#53407）。
- **沙箱权限语义不透明**：审批设置与实际行为脱节（#53032），影响发布类工作流。
- **正面信号**：大量 TUI 需求今日批量关闭 + 修复密集合入（竞态、权限恢复、终端兼容），预示 CLI/TUI 体验将有一轮明显改善；copyberry 机器人承担了几乎全部 PR 工作，自动化开发流程值得关注。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-10-13

## 一、今日速览

今日发布 v0.65.0-nightly 版本，主要修复了扩展 allowlist 检查失败导致其他扩展无法加载的问题。社区方面，**Subagent（子代理）可靠性**仍是最高频痛点，包括 MAX_TURNS 误报成功、通用代理挂起等 P1 级 Bug 持续活跃讨论。PR 方面，快速 Ctrl-C 导致会话污染的竞态条件修复和 tmux 闪烁问题修复值得关注。

---

## 二、版本发布

### [v0.65.0-nightly.20261013.g51617c1bc](https://github.com/google-gemini/gemini-cli/releases)
- **fix(cli)**: 当某个扩展未通过 allowlist 检查时，继续加载其他扩展，而非整体中断（[PR #29720](https://github.com/google-gemini/gemini-cli/pull/29720)）

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 亮点 |
|---|-------|------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) [P1] Subagent 达到 MAX_TURNS 后误报 "success/GOAL" | 🔥 13 条评论。子代理被打断却报告为成功，严重误导上层决策，是可观测性核心缺陷 |
| 2 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) [P2] 利用模型 Bash 天性：零依赖 OS 沙箱 + 执行后意图路由 | 9 条评论。架构级提案：让 Gemini 3 原生使用 POSIX 工具链，同时保证安全 |
| 3 | [#21409](https://github.com/google-gemni/gemini-cli/issues/21409) [P1] 通用代理（generalist agent）无限挂起 | 👍 8。简单操作（如创建文件夹）也挂起，用户需等 1 小时以上，只能手动禁止子代理绕过 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) [P2] 评估 AST 感知的文件读取/搜索/代码库映射 | EPIC 级调研：AST 工具可精确定位方法边界，减少 token 浪费与错位读取 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) [P2] Gemini 不主动使用 skills 和 sub-agents | 用户普遍反映即使任务高度相关，模型也不自主调用自定义 skill，需显式指令 |
| 6 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) [P2] Browser Agent 无视 settings.json 配置（如 maxTurns） | AgentRegistry 正确合并了配置，但运行时完全未生效，配置链路断裂 |
| 7 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) [P2] 工具数 > 128 时触发 400 错误 | 期望 agent 更智能地限制工具作用域 |
| 8 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) [P1] Browser subagent 在 Wayland 下失败 | Linux 新显示协议兼容性问题，同样误报 GOAL 成功 |
| 9 | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) [P2] Agent 应阻止/抑制破坏性操作 | 模型偶发使用 `git reset --force` 等危险命令，需要更安全的行为护栏 |
| 10 | [#19561](https://github.com/google-gemini/gemini-cli/issues/19561) [P3] "Tactful Extraction" 节约 token 的外科手术式读取 | 基线 36.6k tokens/turn，大文件读取导致上下文膨胀 +15k/turn |

---

## 四、重要 PR 进展（Top 10）

| # | PR | 内容 |
|---|-----|------|
| 1 | [#29728](https://github.com/google-gemini/gemini-cli/pull/29728) [P1] | **修复快速双击 Ctrl-C 导致的会话污染竞态**：取消操作被 fire-and-forget，第二次 Ctrl-C 提前退出造成状态损坏 |
| 2 | [#29536](https://github.com/google-gemini/gemini-cli/pull/29536) [已关闭] | grep 工具命令行注入防护（CWE-88），使用 `-e` 显式分隔搜索模式 |
| 3 | [#29532](https://github.com/google-gemini/gemini-cli/pull/29532) [已关闭] | 修复 RetryInfo delay=0 被误判为终态配额错误，导致不必要的重试中止和模型回退 |
| 4 | [#29703](https://github.com/google-gemini/gemini-cli/pull/29703) | 原子写入临时文件名超 NAME_MAX（255 字节）导致 `ENAMETOOLONG` |
| 5 | [#29726](https://github.com/google-gemini/gemini-cli/pull/29726) | 修复 POSIX 下命令被误识别为 `trap`，导致 `sandbox.toml` 逐命令规则失效 |
| 6 | [#29725](https://github.com/google-gemini/gemini-cli/pull/29725) [P2] | 实现终端同步输出 + 隔离 spinner 渲染，消除 tmux 等多路复用器中的闪烁 |
| 7 | [#29727](https://github.com/google-gemini/gemini-cli/pull/29727) | `list_directory` 在条目被路径校验拒绝时静默返回空结果，现显式上报被省略条目 |
| 8 | [#29638](https://github.com/google-gemini/gemini-cli/pull/29638) | 移除 VS Code 插件每次激活时的 Marketplace 更新检查，减少启动网络请求 |
| 9 | [#29722](https://github.com/google-gemini/gemini-cli/pull/29722) | 修复 UTF-16/UTF-32 纯空白文件因 NUL 字符未被 trim 而误判为非空 |
| 10 | [#29568](https://github.com/google-gemini/gemini-cli/pull/29568) [P1，已关闭] | ChatRecordingService 改为增量 append-only 补丁 + 有界历史窗口，替代全量重写 |

其他：[#29699](https://github.com/google-gemini/gemini-cli/pull/29699)（Ctrl+R 反向搜索 Unicode 高亮偏移）、[#29644](https://github.com/google-gemini/gemini-cli/pull/29644)（终端宽度变化防抖刷新）、[#29723](https://github.com/google-gemini/gemini-cli/pull/29723)（清理过期 ROADMAP）。

---

## 五、功能需求趋势

1. **Subagent 体系成熟化**（最主流）：本地子代理 Sprint、并行协作与共享内存（[#18287](https://github.com/google-gemini/gemini-cli/issues/18287)）、轨迹共享（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）、bug 报告包含子代理上下文（[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）
2. **Token 效率与上下文工程**：AST 感知读取/搜索（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) / [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)）、文件化持久任务追踪替代 in-context WriteToDo（[#18836](https://github.com/google-gemini/gemini-cli/issues/18836)）
3. **安全与沙箱**：OS 级零依赖沙箱（[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)）、破坏性命令防护（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)）、per-workspace 权限策略（[#18397](https://github.com/google-gemini/gemini-cli/issues/18397)）
4. **浏览器代理健壮性**：会话接管/锁恢复（[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)）、Wayland 支持、配置生效
5. **终端渲染性能**：resize 防抖、无闪烁渲染（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）

---

## 六、开发者关注点（痛点总结）

- **子代理状态不可信**：挂起、误报成功是当前最高优先级 Bug，用户 workaround 是禁用子代理
- **模型工具调用不主动**：skills/sub-agents 需要显式提示才会使用，自动化编排体验打折扣
- **长文件名/Unicode/多编码边缘 Bug 多**：近半 PR 修复字符编码、NAME_MAX 等边界问题
- **工具数量上限**（128/400 tools 报 400 错误）：重度扩展用户的扩展性瓶颈
- **工作区卫生**：模型乱建临时脚本（[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)），清理成本高
- **交互式命令卡死**：如 vite create 触发交互式提示导致 agent 挂起（[#22465](https://github.com/google-gemini/gemini-cli/issues/22465)）

---
*数据来源：google-gemini/gemini-cli GitHub 公开数据 | 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-10-13**

---

## 📌 今日速览

今日 Copilot CLI 连发 v1.0.96 至 v1.0.97-2 三个版本，重点完善自定义 Agent 生态（agent 级声明式 hooks、深度嵌套 agent 发现修复）。社区方面，BYOK（自带 API Key）场景下子 Agent 模型匹配问题集中爆发，Windows 平台的 Entra 认证崩溃和企业部署需求仍是高频痛点。

---

## 🚀 版本发布

### v1.0.97-2
- **修复**：当仓库定义超过 100 个 agent 文件或存在深层嵌套时，仍能完整发现所有自定义 agents。

### v1.0.97-1
- 修复与改进（修复内容未详细列出）。

### v1.0.97-0
- **新增**：为自定义 agents 引入 **agent 级声明式 hooks**，扩展自动化能力边界。
- **改进**：内联图片在支持的主流终端中**默认渲染**，无需开启实验模式；可通过 `/settings inlineImages false` 关闭。
- **修复**：Autopilot 对 preToolUse hook 的 "ask" 决策处理不当的问题。

### v1.0.96
- 交互式沙箱设置会推荐可能的环境密钥，允许在保存前添加掩码主机。
- `/model` 和 `/config` 中模型 ID 大小写不敏感，并保存规范 ID。
- 企业策略解析期间 `/allow-all` 保持可用。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关注点 |
|---|-------|--------|
| 1 | [#970](https://github.com/github/copilot-cli/issues/970) 👍22 · 8评论 | **macOS Gatekeeper 拦截**：企业安全策略下 Homebrew 升级后每次被 Apple 恶意软件检查阻断，需手动到隐私与安全放行。22 个 👍 说明是企业环境的普遍痛点，长期未解决。 |
| 2 | [#5068](https://github.com/github/copilot-cli/issues/5068) 👍12 | **Windows MCP Entra 登录失败**：Azure DevOps MCP 服务器认证时报 "advertised scopes could not be safely validated"。Windows + 企业 MCP 场景受阻。 |
| 3 | [#5126](https://github.com/github/copilot-cli/issues/5126) | **BYOK 内置 agents 不用默认模型**：explore/task/research 等内置 agent 声明了默认模型却静默回退到会话模型，与 1.0.90→1.0.96 行为一致，疑为长期回归。 |
| 4 | [#5127](https://github.com/github/copilot-cli/issues/5127) | **BYOK 短名模型匹配失败**：SDK 配置 BYOK 时，模型短名无法匹配 provider 限定 ID，还抛出误导性的 "No GitHub OAuth token" 错误，与 #5126 同日提交，同一作者系统性排查 BYOK 缺陷。 |
| 5 | [#5103](https://github.com/github/copilot-cli/issues/5103) | **BYOK 子 Agent wire API 冲突**：会话级 `COPILOT_PROVIDER_WIRE_API` 强加给所有子 agent，跨模型家族（GPT vs Claude）的子 agent 返回 400。 |
| 6 | [#5100](https://github.com/github/copilot-cli/issues/5100) | **会话事件投递永久失败**：一次 120s 超时后事件持续投递失败，会话不可用，需 resume 才能恢复。长时间交互会话稳定性问题。 |
| 7 | [#5124](https://github.com/github/copilot-cli/issues/5124) | **`--agent` 选择竞态丢失**：启动指定自定义 agent 后约 1 秒被静默取消，疑与登录/MCP 重载竞态有关。 |
| 8 | [#5114](https://github.com/github/copilot-cli/issues/5114) | **会话限额后无法续传**：触达 session limit 后等待 5 小时再 "continue"，仍被 429 限流残留阻断，无法从中断处继续。 |
| 9 | [#5122](https://github.com/github/copilot-cli/issues/5122) | **多插件 additionalContext 丢失**：多个插件在 `userPromptSubmitted` 返回的上下文只有最后加载的插件能到达模型——hook 生态的关键可靠性问题（sessionStart 已在 #3589 修复）。 |
| 10 | [#5105](https://github.com/github/copilot-cli/issues/5105) | **macOS 沙箱阻断 Gradle daemon**：即使放行本地网络，Gradle 客户端仍连不上 localhost 上的 daemon，影响 Java 开发者工作流。 |

**其他值得留意：**
- [#5088](https://github.com/github/copilot-cli/issues/5088)：Windows 首次 Entra WAM 登录直接崩溃（msalruntime.dll 访问违例）。
- [#5118](https://github.com/github/copilot-cli/issues/5118)（已关闭）：Atlassian Rovo MCP 认证探测 HTTP 400，阻断 Jira/Confluence 工具调用。
- [#5120](https://github.com/github/copilot-cli/issues/5120)：CLI 崩溃后终端残留鼠标追踪/焦点上报模式，标签页不可用。
- [#5121](https://github.com/github/copilot-cli/issues/5121)：疑似误发邮件回复的垃圾 issue，等待 triage。

---

## 🔀 重要 PR 进展

过去 24 小时无 PR 更新（共 0 条），本节省略。

---

## 📈 功能需求趋势

1. **BYOK / 多 Provider 深度支持**（#5103、#5126、#5127）：模型短名匹配、子 agent 独立 wire API、内置 agent 默认模型——BYOK 场景的模型路由是当前最集中的缺陷簇。
2. **企业部署与合规**（#970、#5129、#5109）：系统级 Windows 安装器、绕过 Gatekeeper 的签名方案、托管策略刷新失败，企业采用意愿强烈但摩擦大。
3. **MCP 生态兼容性**（#5068、#5082、#5118、#5079、#4834）：Entra/Dataverse/Atlassian 认证失败、协议版本协商问题，MCP 集成的长尾兼容问题持续。
4. **会话管理与可观测性**（#5128、#5125、#5100）：会话重命名、执行耗时展示、事件投递可靠性——重度用户的效率诉求。
5. **Agent 可靠性**（#5124、#5030）：agent 选择的竞态与 ACP 模式下自定义 agent 启动失败。

---

## ⚠️ 开发者关注点

- **BYOK 用户请谨慎使用子 agent**：跨模型家族调用大概率 400，建议显式指定会话模型（#5103）。
- **Windows 企业用户**：Entra MCP 认证存在崩溃（#5088）与作用域校验失败（#5068）双重风险，暂无 workaround，建议关注官方修复。
- **升级提示**：v1.0.97 系列对自定义 agent 深度嵌套用户是重要修复；内联图片默认开启可能改变终端渲染行为，可用 `/settings inlineImages false` 关闭。
- **长期未决**：#970（macOS Gatekeeper，9 个月+）虽持续有社区共鸣，官方仍未给出签名时间表，企业用户需自行评估部署策略。
- **插件开发者**：多插件 `userPromptSubmitted` 上下文互相覆盖（#5122），上线前建议验证 additionalContext 是否真正送达模型。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-13

## 📌 今日速览

今日无新版本发布，但社区活跃度依然很高：多条 V1→V2 迁移相关的关键 Bug 得到复现确认（迁移中断、OAuth token 丢失、旧会话不可见），同时 @rekram1-node 密集提交 AI 层重构与 OpenAI 显式 prompt cache 支持的 PR，成为今日最活跃的贡献者。老牌高票需求「跨模型 Fallback」(#7602) 正式关闭，值得关注其落地去向。

---

## 🔥 社区热点 Issues

**1. [#7602] 跨模型 Fallback / Failover 支持（已关闭）**
创建于 2026-01-10，累计 32 条评论、120 👍。请求支持「模型 A 限流/报错时自动切换模型 B」，是长期高票需求，今日正式关闭，或预示已排期实现或方案已定。
🔗 [anomalyco/opencode#7602](https://github.com/anomalyco/opencode/issues/7602)

**2. [#54736] V1→V2 迁移因旧消息 ID 不符 Schema 而中断（已复现）**
旧版消息 ID 不满足 `Session.Message.ID` 的 `msg_` 前缀要求，迁移直接 abort，属升级阻断级问题。
🔗 [#54736](https://github.com/anomalyco/opencode/issues/54736)

**3. [#54879] 迁移不携带远程 MCP OAuth token（已复现）**
升级后所有 OAuth 保护的远程 MCP 服务器需重新认证，V1 的 refresh token 未迁移，直接影响重度 MCP 用户。
🔗 [#54879](https://github.com/anomalyco/opencode/issues/54879)

**4. [#54679] 迁移后旧 global 项目会话在默认列表中不可见（已关闭）**
V2 会话列表默认按 cwd scope 过滤，导致 V1 global 项目会话“消失”，迁移体验问题之三。
🔗 [#54679](https://github.com/anomalyco/opencode/issues/54679)

**5. [#54940] 非 Git 工作区文件搜索索引截断后静默丢失文件（已复现）**
索引仅覆盖 10 万文件上限，刷新后可能换成另一批文件，导致 `@` 补全时有时无。已有对应修复 PR #55039。
🔗 [#54940](https://github.com/anomalyco/opencode/issues/54940)

**6. [#54697] Compaction 请求向摘要模型暴露会话工具（已关闭）**
安全相关问题：执行压缩的摘要模型可以调用真实工具（写文件、跑命令），存在被滥用风险。
🔗 [#54697](https://github.com/anomalyco/opencode/issues/54697)

**7. [#51340] `opencode serve` RSS 内存增长且不回落（OPEN）**
活跃实例 7 小时内从 161MB 涨至约 1GB，空闲也不释放，长期运行服务场景的稳定性痛点。
🔗 [#51340](https://github.com/anomalyco/opencode/issues/51340)

**8. [#50363] 本地 MCP 服务器进程在会话结束后成为孤儿（OPEN）**
npx 启动的 MCP 子进程不随会话终止，长期累积占用系统资源，桌面版用户反馈集中。
🔗 [#50363](https://github.com/anomalyco/opencode/issues/50363)

**9. [#51107 / #53074] V2 不再读取托管配置目录（/etc/opencode 等）**
企业/管理员通过系统级不可覆盖配置进行管控的能力在 V2 丢失，两 Issue 均已关闭，值得确认后续方案。
🔗 [#51107](https://github.com/anomalyco/opencode/issues/51107) | [#53074](https://github.com/anomalyco/opencode/issues/53074)

**10. [#53858] 中文/繁中语言包落后英文 93 个 key（已复现）**
zh/zht 词典缺 93 个键，运行时回退英文导致界面中英混杂，中文用户社区关注度高。
🔗 [#53858](https://github.com/anomalyco/opencode/issues/53858)

其他值得留意：[#52281](https://github.com/anomalyco/opencode/issues/52281)（Windows 子进程弹窗抢焦点）、[#54683](https://github.com/anomalyco/opencode/issues/54683)（空输入工具调用挂死会话）、[#54690](https://github.com/anomalyco/opencode/issues/54690)（图片不计入上下文导致 400 而非压缩）。

---

## 🔧 重要 PR 进展

**1. [#55041] 支持 OpenAI 显式 prompt cache 断点**
为 GPT-5.6+ 的显式 prompt caching 写入 cache 断点，降低长上下文成本。基于 #55040 的重构。
🔗 [PR #55041](https://github.com/anomalyco/opencode/pull/55041)

**2. [#55040] 缓存格式默认值下沉到 Protocol/Provider 层**
架构性重构，将 prompt-cache 标记从统一的 cache-policy 移至协议与各 provider 工厂，为多缓存策略铺路。
🔗 [PR #55040](https://github.com/anomalyco/opencode/pull/55040)

**3. [#55042] Gemini 分段响应自动续传**
当 Gemini `finishReason: "CONTINUATION"` 时自动发起续传请求，拼接完整长回复。
🔗 [PR #55042](https://github.com/anomalyco/opencode/pull/55042)

**4. [#55039] 文件搜索接口上报索引截断状态**
修复 #54940：`/api/fs/find` 返回 `indexTruncated` 标志，用户可感知索引不完整。
🔗 [PR #55039](https://github.com/anomalyco/opencode/pull/55039)

**5. [#55038] 对话框焦点由栈统一管理**
修复「Select model → Manage models」嵌套对话框时输入落回 composer 的焦点错乱问题，改为焦点栈机制。
🔗 [PR #55038](https://github.com/anomalyco/opencode/pull/55038)

**6. [#55020] 修复 macOS ⌘V 粘贴失败与终端 Command 组合键冲突**
核心贡献者 @kitlangton 的 UX 精修系列之一。
🔗 [PR #55020](https://github.com/anomalyco/opencode/pull/55020)

**7. [#54482] `/btw` 侧问支持新附加的图片**
修复附件图片在旁路提问中被丢弃的问题。
🔗 [PR #54482](https://github.com/anomalyco/opencode/pull/54482)

**8. [#54590] 图片预览支持触控板缩放与平移**
右侧图片预览从「fit/native 切换」升级为手势缩放 + 双指平移。
🔗 [PR #54590](https://github.com/anomalyco/opencode/pull/54590)

**9. [#54992] 重试前完成流式片段的收尾（V2 回归测试移植）**
将 #52440 的流中断重试回归覆盖移植到 V2，含 HTTP 与 WebSocket 路径。
🔗 [PR #54992](https://github.com/anomalyco/opencode/pull/54992)

**10. [#54838] TUI 本地文件链接用系统处理器打开**
绝对路径和 `file://` 链接改用 OS 文件处理器，http(s) 仍走浏览器。
🔗 [PR #54838](https://github.com/anomalyco/opencode/pull/54838)

另外 #55032（chunk 超时提升至 15 分钟，适配 DeepSeek 等推理模型）今日关闭，值得追踪是否已合入。

---

## 📈 功能需求趋势

1. **V1→V2 迁移可靠性** —— 今日最强主题：消息 ID 校验、OAuth token、会话可见性、托管配置目录等多个迁移缺陷被集中复现/关闭。
2. **多模型路由与成本优化** —— 跨模型 fallback (#7602)、prompt cache 显式断点 (#55041)、SDK 多provider 支持，反映社区对成本与可用性的双重要求。
3. **Provider/模型生态扩展** —— 自定义 provider 配置失效 (#54109)、GUI 管理 provider (#33704)、新免费模型上架（Cat Jam Free）。
4. **MCP 稳定性** —— 孤儿进程、token 迁移、spawn 行为（Windows 弹窗）持续被提及。
5. **插件 API 能力扩展** —— TUI composer 暴露给插件 (#51209)、credential 列表/激活 API (#51410)、共享 `.agents/` 目录 (#47742)。
6. **国际化与本地化** —— 中文词典缺 key、DOCX 中文预览乱码 (#54985)，中文用户群活跃度显著。

---

## ⚠️ 开发者关注点

- **长会话稳定性**：内存不释放（#51340）、空工具调用挂死（#54683）、大附件导致 400 而非自动压缩（#54690），长时间 agent 任务的中断是高频痛点。
- **企业/受管环境**：V2 丢失 `/etc/opencode`、`%ProgramData%` 托管配置支持，影响管理员统一管控（#51107、#53074），企业用户升级需谨慎评估。
- **本地模型用户受阻**：自定义 provider（Ollama 等）配置被忽略（#54109），叠加 GUI 管理缺失，本地推理用户体验不佳。
- **Windows 体验**：子进程控制台弹窗抢焦点（#52281）影响日常使用。
- **搜索/索引可靠性**：大工作区索引静默截断（#54940）让 `@` 文件引用不可信，开发者难以判断 agent 是否能看到完整文件集。

**建议**：V1 用户在迁移关键缺陷（#54736、#54879）修复前暂缓升级；长时运行 `serve` 场景建议定期重启规避内存问题。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-10-13

## 一、今日速览

Qwen Code 发布 v0.25.1 nightly 版本，重点增强 Managed Agent 的 connector 与 broker 稳健性。Managed Agent 双路径架构（#12380，57 条评论）仍是社区讨论焦点，围绕其展开的可靠性修复（孤儿 Session 409、未启动进程的证明门禁、重启后重挂载等）密集落地。同时社区提出两项引人注目的新提案：harness SWE 基准测试套件（#14011）与 Web Shell 智能交互式 UI（#14019）。

---

## 二、版本发布

**v0.25.1-nightly.20261012.18f80f5666**
- fix(managed-agent): 落实 #12692 R2 评审中关于 connector 和 broker 稳健性的修复（[@wenshao](https://github.com/QwenLM/qwen-code/pull/13330)）
- 另含 managed-agent 相关 feat 更新（发布说明被截断）

---

## 三、社区热点 Issues

1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380)** — Managed Agent 双路径架构与分阶段交付提案（57 评论）。社区最重磅的架构讨论：保留现有 TS agent loop、模型推理与工具环境供给解耦、Session 持久所有权与可恢复工具执行。几乎所有近期的 managed-agent PR 都源于此。

2. **[#13078](https://github.com/QwenLM/qwen-code/issues/13078)** — 每日依赖 CVE 审计连续失败（19 评论）。安全供应链问题持续未解决，涉及可能的新的高危漏洞，需要维护者介入。

3. **[#13395](https://github.com/QwenLM/qwen-code/issues/13395)** — Kubernetes 工具运行时进度跟踪与跨平台交付门禁（19 评论）。当日有进度核对更新，是平台化方向的关键跟踪帖。

4. **[#13492](https://github.com/QwenLM/qwen-code/issues/13492)** — XML 工具调用恢复会丢弃含引用标记的外层调用（11 评论）。部分已修复（PR #13515 合并），剩余范围等待 PR #13579。

5. **[#10797](https://github.com/QwenLM/qwen-code/issues/10797)** — 非思考类脚手架标签（tool-result、system-reminder）泄漏到用户可见输出（10 评论）。长尾 bug，9 月初报告，最新验证在 main 上仍可复现，对输出质量影响明显。

6. **[#13785](https://github.com/QwenLM/qwen-code/issues/13785)** — Multi-Agent API：在公共契约上增加 agent 身份维度，使多智能体执行可归因、树状化、可中断（7 评论）。多智能体方向的顶层设计讨论。

7. **[#13838](https://github.com/QwenLM/qwen-code/issues/13838)** — P1：控制面被杀后子 Session 重挂载返回 409 hosted_session_already_attached（3 评论）。高优先级可靠性缺陷，已有对应修复 PR #14020。

8. **[#14011](https://github.com/QwenLM/qwen-code/issues/14011)** — 提案 harness SWE：专为测试 qwen code 自身功能面设计的特性型基准任务套件（5 评论、2 👍）。当日新提案，对项目自我验证能力有战略意义。

9. **[#13837](https://github.com/QwenLM/qwen-code/issues/13837)** — 聊天视图混排 RTL/LTR 文本渲染错乱，代码块强制 LTR、无 bidi 隔离（5 评论）。国际化用户体验的代表性问题。

10. **[#13680](https://github.com/QwenLM/qwen-code/issues/13680)** — P1（已关闭）：Linux Desktop 版捆绑的 ripgrep 为链接后被改写的 static-pie 二进制，启动探测必 SIGSEGV（4 评论）。打包管线问题的典型教训，已随修复关闭。

---

## 四、重要 PR 进展

1. **[#14021](https://github.com/QwenLM/qwen-code/pull/14021)** — fix(serve): 当 Broker 确证无进程被接纳时，在活动 Turn 内结算失败的背景 Shell 派发（对应 #13801/#13937 链条）。
2. **[#14020](https://github.com/QwenLM/qwen-code/pull/14020)** — fix(managed-agent): 控制面重启后被动重挂载子 relay Session，修复 #13838 的 409 问题。
3. **[#13996](https://github.com/QwenLM/qwen-code/pull/13996)** — feat(sdk-java): 新增私有 CSI Session 与原生 SQL 权限体系（Session 持久化请求钉定、不可变 SQL 执行授权等）。
4. **[#13737](https://github.com/QwenLM/qwen-code/pull/13737)** — fix(rewind): 按源身份解析历史 Turn，防止恢复的 legacy 会话密钥错误授权文件回滚。
5. **[#13955](https://github.com/QwenLM/qwen-code/pull/13955)** — feat(managed-agent): 团队成员间消息走 session_command 通道，无需 lead 侧模型回合即可端到端送达（H4e-b3c）。
6. **[#13816](https://github.com/QwenLM/qwen-code/pull/13816)** — fix(managed-agent): 工具回合进入 recovery blocked 时归还 Workspace 执行挂载租约。
7. **[#13986](https://github.com/QwenLM/qwen-code/pull/13986)** — fix(managed-agent): 使持有 Runtime 的排空义务在 Harness 重启/接管后依然生效（#13930 跟进）。
8. **[#13579](https://github.com/QwenLM/qwen-code/pull/13579)** — fix(core): 恢复含引用调用内容的完整外层 XML 调用，#13492 的收尾修复。
9. **[#11807](https://github.com/QwenLM/qwen-code/pull/11807)** — fix(cli): 解析 settings.json 前剥离 UTF-8 BOM，避免误判损坏并重置用户配置（社区贡献，值得尽快合入）。
10. **[#14016](https://github.com/QwenLM/qwen-code/pull/14016)** — fix(cli): 恢复裸 ↑/↓ 键在 Virtualized History 模式下切换输入历史的行为，回归 #12518 引入的键位变更。

其他值得留意：#13997（/acp WebSocket 升级挂起而非 406）、#13961（CI runner checkout 重置，对应 #13951 的 "unresolved delta" 失败）、#13970/#13897（下线 Qwen OAuth 模型的清理）。

---

## 五、功能需求趋势

- **Managed Agent / 多智能体平台化**：绝对主导方向。Session 持久化、控制面重启恢复、Kubernetes 运行时、团队消息通道、agent 身份契约（#12380、#13395、#13785、#13847）。
- **Web Shell / Desktop UI 增强**：智能交互式 UI 提案（#14019）、背景 subagent 实时状态展示（#13898）、VS Code Companion 本地化（#13967）。
- **输出正确性与流式解析**：XML 工具调用恢复、脚手架标签泄漏（#13492、#10797、#10700）——长尾但影响信任度。
- **生态集成**：第三方 web search MCP（You.com #13987）、OSC 7501 终端状态协议（#13870）。
- **质量基建**：harness SWE 自测基准（#14011）、CI 稳定性（#13951、#13961）。
- **商业模式讨论**：harness 与 LLM 订阅的利益冲突质疑（#14004），反映部分用户对 token 计费透明度的关切。

---

## 六、开发者关注点

1. **可靠性/崩溃恢复是最大痛点**：控制面被杀、Harness 崩溃、进程从未启动却报 running——大量 P1/P2 issue 集中在“故障后状态不一致”上，修复 PR 也最密集。
2. **CI 与供应链不稳定**：依赖 CVE 审计持续失败、runner checkout 报 "pack has 1 unresolved delta"、main CI 测试失败堆积（#12714），影响合并节奏。
3. **配置数据安全**：BOM 导致 settings.json 被重置（#11807）、workspace 信任状态突然全部失效（#13130），用户对“静默重置配置”高度敏感。
4. **多语言/国际化渲染**：RTL 文本、VS Code UI 本地化等 i18n 需求上升。
5. **边界行为的确定性**：多个 issue 讨论核心在于“能否确证进程未启动/身份是否合法”，社区对确定性证明（proof gate、ledger 行）的要求明显高于一般容错。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-10-13

## 📰 今日速览

v0.10.2 发布流程进入收尾阶段：维护者 @Hmbown 开出 [PR #6968](https://github.com/codewhale-hq/Codewhale/pull/6968)，整合 endpoint-scoped catalog、分层定价（#6396）及发布说明，处于"ready-to-tag"状态待维护者落地。Windows 侧问题集中爆发：v0.10.1 在 Win10 1607 上的启动回归（#6962）、运行时权限地板阻断只读管道命令（#6963）均获活跃讨论。此外，会话恢复/分叉相关的两个 8 MiB 限制与 sub-agent handoff 问题（#6954、#6955）值得核心开发者关注。

## 🚀 版本发布

过去 24 小时无新 Release（v0.10.2 正在走发布流程，见 PR #6968）。

## 🔥 社区热点 Issues

1. **#6968（关联 Issue #6396）— v0.10.2 发布分支就绪**
   [链接](https://github.com/codewhale-hq/Codewhale/pull/6968) | @Hmbown | 开放
   接手 0.10.2 交接分支并修至可打 tag 状态，包含 endpoint-scoped catalog 与精确分层定价。维护者明确“勿从此 PR 直接打 tag”，发布节奏受控。今日最重磅动态。

2. **#6962 — Windows 10 1607 启动回归防护缺失**
   [链接](https://github.com/codewhale-hq/Codewhale/issues/6962) | @Hmbown | Windows/packaging/ci
   v0.10.1 因 `DeriveCapabilitySidsFromName` 载入时导入缺失在 Win10 1607 上报 0xC0000139。虽然 830b86f 已修复，但 CI 无守护，下一个 release 仍可能复现。提议发布前加入 Windows import floor 检查。

3. **#6963 — Windows 运行时权限地板误伤只读管道命令**
   [链接](https://github.com/codewhale-hq/Codewhale/issues/6963) | @jayanthvee | 3 条评论
   #6827 的后续：非 npm 原生安装下，`SessionRuntimeRisk`（`auto_review.rs`）在 Full Access 模式下仍拒绝普通只读管道命令，权限模型过于保守的问题持续发酵。

4. **#6955 — 超 8 MiB 会话文档无法恢复/分叉**
   [链接](https://github.com/codewhale-hq/Codewhale/issues/6955)
   会话 journal 无上限累积，把文档推过 transport bound 后，报错信息未给出任何补救手段。长会话用户的核心痛点，与 #6842（journal 无界）直接相关。

5. **#6954 — 含原始 sub-agent handoff 的历史无法 resume**
   [链接](https://github.com/codewhale-hq/Codewhale/issues/6954)
   canonical acknowledgement 将 Engine 恢复的消息与已保存文档对比，任何残留的原始 handoff 都导致 resume 被拒。会话持久化可靠性缺陷，与 #6955 同属 resume 链路。

6. **#6923 — Gemini 429 时应等待并自动重试**
   [链接](https://github.com/codewhale-hq/Codewhale/issues/6923) | @Statter | 3 条评论
   遇到上游限流（429）时直接失败，社区希望自动等待重试最后一个任务。多 provider 场景下的高频可靠性诉求。

7. **#6889 — Provider 三种“看似其他故障”的失败模式**
   [链接](https://github.com/codewhale-hq/Codewhale/issues/6889) | @BX166（AICraft）
   第三方 endpoint 运营方实测反馈：冷模型首调用 145s+ 看似挂死等三类误判场景。来自 PROVIDERS.md 生态伙伴的宝贵一线数据，有助于改进 provider 容错与诊断。

8. **#6652 — 长时间运行后 TUI 滚动卡顿**
   [链接](https://github.com/codewhale-hq/Codewhale/issues/6652) | @luestr | Windows/performance
   运行数小时后滚动呈现“果冻感”——部分内容已滚动、部分未动。长期会话下的渲染/缓冲性能问题，与 #6955 的 journal 无界问题可能存在共同根因。

9. **#6915 — 从已验证的死 owner 发布中安全恢复 Engine 启动**
   [链接](https://github.com/codewhale-hq/Codewhale/issues/6915) | @Hmbown
   Unix 侧修复已本地提交（a8cdccc，覆盖 23 条 plugin/startup/approval 路径），Engine 推送与晋级归属 release owner。多进程 Engine 生命周期管理的进展跟踪。

10. **#6964 — `init` 按语言生成对应 AGENTS.md**
    [链接](https://github.com/codewhale-hq/Codewhale/issues/6964) | @Asteria1028
    希望根据项目语言生成多语言版 AGENTS.md，提升初始化体验的本地化/上下文相关性。

另：[#6650](https://github.com/codewhale-hq/Codewhale/issues/6650)（Ctrl+T 切换思考强度需按 4 次才生效的快捷键 bug）已于 10-12 关闭；[#6160](https://github.com/codewhale-hq/Codewhale/issues/6160)（Runtime API 终端契约：输入归因、重启安全身份、ConPTY）完成 0.10.1 下的再分诊。

## 🔧 重要 PR 进展

1. **#6968 — 0.10.2：endpoint-scoped catalog + 分层定价 + 发布说明**（@Hmbown，开放）
   [链接](https://github.com/codewhale-hq/Codewhale/pull/6968)
   今日核心 PR，接手交接分支并修至 ready-to-tag，含多项修复。

2. **#6952 — 修复自阻塞 workflow gate**（@Lstarsky0，已关闭）
   [链接](https://github.com/codewhale-hq/Codewhale/pull/6952)
   `role` 与 `blocks_role` 相同时 gate 卡死唯一能通过它的角色，导致调度失败。对应 #6945。

3. **#6967 — steer 测试不再依赖 2s 带内回执**（@Lstarsky0，开放）
   [链接](https://github.com/codewhale-hq/Codewhale/pull/6967)
   消除 `STEER_SETTLE_WAIT` 2s 超时导致的 windows-latest 稳定性 flake。

4. **#6966 — 放宽三条 subagent 审批时限至 30s**（@Lstarsky0，开放）
   [链接](https://github.com/codewhale-hq/Codewhale/pull/6966)
   250ms 的 fail-closed 断言在 Windows CI 上 4 次超限（3 次在 main），属 CI 稳定性修复。

5. **#6943 — 移除五个模块的 blanket dead_code allow**（@Lstarsky0，开放）
   [链接](https://github.com/codewhale-hq/Codewhale/pull/6943)
   #5587 的切片：清理陈旧 allow，暴露真实死代码，代码卫生改善。

6. **#6811 — 配对升级 React / React DOM 19.3**（dependabot，已关闭）
   [链接](https://github.com/codewhale-hq/Codewhale/pull/6811)
   修复 react-dom 停留在 19.2.8 导致 web 构建失败的问题，同步更新 @types/react 与 scheduler。

> 注：过去 24 小时仅 6 个 PR 更新，以上为全部有效条目。

## 📈 功能需求趋势

- **Windows 平台支持成熟度**：今日 4 条 Windows 相关动态（#6962、#6963、#6652、#6160），覆盖启动兼容、权限模型、渲染性能与 ConPTY，是最密集的诉求方向。
- **会话持久化与恢复**：resume/fork 链路问题集中（#6954、#6955、#6842），journal 无界 + 大小上限 + handoff 校验构成一组关联缺陷。
- **多 Provider 可靠性**：上游限流重试（#6923）、冷启动超时误判（#6889）、endpoint-scoped catalog（#6968），社区对 provider 容错与可观测性需求强烈。
- **定价与商业化能力**：分层定价进入 0.10.2，反映 endpoint 运营生态的精细化需求。
- **初始化与上下文体验**：按语言生成 AGENTS.md（#6964）等易用性改进。

## ⚠️ 开发者关注点

1. **Windows CI 稳定性是当前最大摩擦源**：多个 PR（#6966、#6967）专治 Windows runner 上的 flaky 测试，#6962 更暴露了发布前缺少最低版本 Windows 守护的流程漏洞。
2. **错误信息可操作性不足**：#6955 明确指出拒绝对话未提供任何补救路径，“报了错但没告诉用户怎么办”是可改进点。
3. **长会话性能退化**：#6652 的滚动卡顿大概率与无界 journal/历史累积相关，建议与 #6955 一并排查。
4. **权限模型过严**：Full Access 下仍拦截只读命令（#6963），说明风险评分与用户意图之间存在错配。
5. **发布流程纪律良好**：v0.10.2 分支明确“ready-to-tag 不自行打 tag”、修复需经 review 路径（#6915），工程治理规范值得肯定。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 — 2026-10-13

## 1. 今日速览

Pi 发布 **v1.2.0**，核心亮点是 OpenRouter 按密钥过滤模型列表（含上下文、最大输出与价格信息）。Windows 生态问题持续主导社区讨论（#7547 已积累 81 条评论），多个历史 bug 在近期修复浪潮中关闭。SDK 层面的会话/生命周期问题（abort、resume、compaction）成为本周高频议题。

---

## 2. 版本发布

### v1.2.0
- **Per-key OpenRouter 模型列表**：持有 OpenRouter 密钥时，Pi 仅列出该密钥可用的模型，并显示密钥对应的上下文大小、最大输出与价格，支持 `models.json` 中的区域端点。
- 相关实现：[#10672](https://github.com/earendil-works/pi/pull/10672)、[#10569](https://github.com/earendil-works/pi/pull/10569)，关闭需求 [#10353](https://github.com/earendil-works/pi/issues/10353)。

---

## 3. 社区热点 Issues

| # | 标题 | 关注点 |
|---|------|--------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | [Windows] 如何在 Windows 上使用 Pi？ | **81 条评论**的调研帖，官方在收集 Windows 用户运行方式（WSL/原生/Git Bash）以决定投入方向，是 Windows 生态的路线图讨论。 |
| [#9361](https://github.com/earendil-works/pi/issues/9361) | Windows shellPath 被非确定性忽略 | 加载扩展时 `settings.json` 的 shellPath 静默失效，回退到 PATH 上的 WSL bash.exe，直接影响 Windows 用户工具链正确性。 |
| [#10605](https://github.com/earendil-works/pi/issues/10605) | ChatGPT/OpenAI OAuth 403 | Plus 订阅用户登录后遭遇 `subscription_sharing_user_not_eligible`，OAuth 链路问题影响真实付费用户。 |
| [#8036](https://github.com/earendil-works/pi/issues/8036) | Edit 工具大 diff 渲染崩溃 TUI | 14.5 MB diff 导致 TUI 崩溃且 resume 也崩溃，标记 inprogress。 |
| [#9549](https://github.com/earendil-works/pi/issues/9549) | 大 transcript 每帧重渲染、每次 resize 全量重发 | Windows 双核环境下单核打满，性能瓶颈明确、有量化数据，社区期待渲染优化。 |
| [#10705](https://github.com/earendil-works/pi/issues/10705) | `abort()` 后已排队 continuation 仍执行 | SDK 1.1.0 生命周期漏洞：宿主停止会话后仍发出新的 HTTP 请求，对 SDK 集成方是可靠性风险。 |
| [#10785](https://github.com/earendil-works/pi/issues/10785) | 恢复会话丢失动态激活的工具 | P0 级：resume 后 `defaultActive: false` 与 `deferred` 工具失效，影响扩展生态核心体验。 |
| [#10645](https://github.com/earendil-works/pi/issues/10645) | Bun 编译版 resizeImage 返回 null | 0.87.x 起独立二进制中所有图片附件被丢弃，已有修复 PR（#10834）。 |
| [#10741](https://github.com/earendil-works/pi/issues/10741) | Groq Qwen3.8 27B 因 `developer` role 报 400 | 提供商兼容性问题，Pi 发送的角色名被 Groq 模板拒绝。 |
| [#10628](https://github.com/earendil-works/pi/issues/10628) | tmux 吞掉 OSC 52 剪贴板序列 | 全屏 TUI 在 tmux + SSH headless 场景无剪贴板穿透，3 👍，远程用户痛点。 |

**已关闭但值得回顾**：#6187（WSL Copilot 登录挂起，28 评论，配套修复 PR #10694）、#9688（容器内剪贴板回归）、#10267（P0：before_agent_start 提示词丢失导致重复计费）。

---

## 4. 重要 PR 进展

| PR | 内容 |
|----|------|
| [#10672](https://github.com/earendil-works/pi/pull/10672) ✅ | OpenRouter 按密钥列出可用模型（v1.2.0 主特性）。 |
| [#10569](https://github.com/earendil-works/pi/pull/10569) ✅ | 按 key 可用性过滤 OpenRouter 模型，支持区域端点（us.openrouter 等）。 |
| [#10694](https://github.com/earendil-works/pi/pull/10694) 🔄 | 修复 WSL 时钟偏快导致 Copilot OAuth `slow_down` 死循环——调整 device polling 间隔。 |
| [#10834](https://github.com/earendil-works/pi/pull/10834) ✅ | 修复 Bun image worker 返回 null 时无回退导致图片全部丢失（#10645）。 |
| [#10739](https://github.com/earendil-works/pi/pull/10739) ✅ | `sendMessage(triggerTurn: true)` 现在正确触发 `before_agent_start`，修复提示词缓存被中途破坏的问题（#5581）。 |
| [#10830](https://github.com/earendil-works/pi/pull/10830) ✅ | 限制跨成功 tool-use 轮次的重试预算，防止 error→toolUse 循环永不耗尽重试。 |
| [#10820](https://github.com/earendil-works/pi/pull/10820) ✅ | `x-opencode-session` 头按 endpoint 而非 provider id 发送，修复自定义 provider 无法使用 OpenCode Zen 的问题。 |
| [#10847](https://github.com/earendil-works/pi/pull/10847) 🔄 | 保留旧版模型 catalog 发布路由，兼容 0.80.8–0.84.4 旧客户端。 |
| [#10718](https://github.com/earendil-works/pi/pull/10718) 🔄 | `pi --export` HTML 输出补齐 system prompt，与交互式 `/export` 对齐。 |
| [#10533](https://github.com/earendil-works/pi/pull/10533) ✅ | durable 引擎：循环等待现在在闭合环处报错而非永久挂起。 |

其他：#10855（MiMo `thinking minimal` 映射为 low）、#10528（Nix 打包重构，进行中）。

---

## 5. 功能需求趋势

1. **Windows 一等公民支持**：#7547 调研 + #9361 shell 解析 + 历史问题（#6187）显示 Windows/WSL 是最大摩擦面，官方正在系统性投入。
2. **模型目录智能化**：OpenRouter per-key 过滤（v1.2.0）落地后，社区期待更多提供商（Codex 上下文窗口更新 #10840）的元数据自动同步。
3. **剪贴板/终端兼容性**：OSC 52、tmux 穿透、Crostini（#10743）、容器（#9688）——远程与容器化工作流的剪贴板是一波集中反馈。
4. **SDK/扩展生命周期健壮性**：abort 语义、resume 状态保持、before_agent_start 触发完整性，扩展开发者对确定性要求很高。
5. **Headless/自动化**：`pi -p` 超时缺失（#10762）、durable Workers 集成（#10846），CI 与嵌入式场景需求上升。

---

## 6. 开发者关注点

- **静默失败是最大痛点**：shellPath 静默忽略（#9361）、MCP 工具被 `--tools` 静默丢弃（#10838）、连接静默断开导致 headless 永久挂起（#10762）——社区反复要求“失败要可见”。
- **计费正确性敏感**：#10267（提示词丢失重计费）获 P0 + 4 👍，提示词缓存与 compaction 正确性是扩展作者的核心关切。
- **性能与资源占用**：TUI 渲染性能（#9549 单核饱和）、大 diff 崩溃（#8036）在低配/Windows 环境被放大。
- **版本升级破坏性**：#10502（v1.0.3 strict 字段导致全量请求失败）、#10864（pi update 剪枝正在使用的旧版本）提示升级路径需要更强的兼容保障。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# 📰 oh-my-pi 社区动态日报 · 2026-10-13

## 今日速览

今日发布 **v18.10.3**，包含一项 API 破坏性变更（`estimateImageContentTokens()` 被移除）。社区方面，**Windows 平台 `C:` 驱动器相对路径导致目录被删的 P1 级数据安全 Issue**（#15511）值得高度关注，此外 task 工具拒绝被误报为成功（#15573）当天即有对应修复 PR（#15576）。macOS computer-use 系列和性能优化系列 PR 活跃度较高。

---

## 🚀 版本发布

### [v18.10.3](https://github.com/can1357/oh-my-pi/releases)
**@oh-my-pi/pi-agent-core**
- ⚠️ **Breaking Change**：移除 `estimateImageContentTokens()`（`image-tokens` 模块），请改用 `Tokenizer.imageTokens(size, detail)`，新方法按读取模型的 catalog 图片规则计价（[PR #15446](https://github.com/can1357/oh-my-pi/pull/15446)）

### [v18.10.2](https://github.com/can1357/oh-my-pi/releases)
**@oh-my-pi/pi-agent-core**
- 新增 `AgentLoopConfig.onDetachedToolUpdate`：工具运行结束后（如后台任务持续上报）到达的 `onUpdate` 帧不再被丢弃，由 `Agent` 转发给订阅者

---

## 🔥 社区热点 Issues

**1. [#15511](https://github.com/can1357/oh-my-pi/issues/15511) · Windows 盘符相对路径解析错误导致误删目录（P1）**
`cd /c/Temp/x && rm -rf C:` 中的 `C:` 按 agent 进程 cwd 而非 shell cwd 解析，实际删除了 agent 启动目录。数据安全级别的缺陷，Windows 用户应立即警惕。

**2. [#15573](https://github.com/can1357/oh-my-pi/issues/15573) · task 工具拒绝被当作成功返回**
`createTaskModeError` 未设置 `isError`，SDK 宿主从 `tool_execution_end` 无法感知调用被拒。与 #11585 同类问题但位于未修复的站点。已确认波及 18.10.3 和 `main`。

**3. [#14158](https://github.com/can1357/oh-my-pi/issues/14158) · Codex steering 报原生 turn lane 错误（18 条评论）**
Steering 时报 `unsupported_native_inflight_message`，是本周讨论最热烈的 OpenAI Codex provider 问题，已标记 duplicate/triaged。

**4. [#15568](https://github.com/can1357/oh-my-pi/issues/15568) · DeepSeek thinking + openai-responses：孤儿工具结果触发 400**
不可修复的丢弃调用产生 `[Orphan tool result]`，导致下一请求被 DeepSeek 以 "reasoning_text must be passed back" 拒绝。

**5. [#15511 之外的平台类问题]（[#15524](https://github.com/can1357/oh-my-pi/issues/15524) / [#15513](https://github.com/can1357/oh-my-pi/issues/15513)）· tmux 下图像协议误判**
tmux 中对未知终端默认选 Kitty 图形协议，跳过 SIXEL 探测；姊妹 issue #15513 已确认可修复（tmux 会公布外层终端能力）。

**6. [#15473](https://github.com/can1357/oh-my-pi/issues/15473) · ACP bash 权限网关忽略 `bash.patterns`**
在 Zed 等 ACP 客户端中权限门是二元开关，allow-list 内命令仍需卡片确认，且一次 "Always allow" 会让未匹配命令静默执行——权限模型一致性缺口。

**7. [#13694](https://github.com/can1357/oh-my-pi/issues/13694) · web_search 默认无凭证流向第三方端点（隐私）**
无搜索引擎凭证的会话将全部 `web_search` 查询路由到 keyless Parallel 端点，无用户 opt-in，涉及隐私合规。

**8. [#15523](https://github.com/can1357/oh-my-pi/issues/15523) · 唤醒 parked 子代理导致 prompt cache 全部失效**
重新渲染 system prompt 使整个 prompt cache 作废，直接影响长会话成本。该发现来自 AI agent 的自主验证（含真实 transcript 复核）。

**9. [#4991](https://github.com/can1357/oh-my-pi/issues/4991) · 子代理无法选择最小化 system prompt**
Task 工具的子代理强制继承完整 harness prompt，对紧耦合编排场景浪费 token。长期高热度需求。

**10. [#15501](https://github.com/can1357/oh-my-pi/issues/15501) · bash `read` 从进程替换读取时挂起**
`read < <(...)` 永远收不到生产者字节直到超时，暴露底层 bash 工具的 fd/管道处理问题。

---

## 🔧 重要 PR 进展

**1. [#15576](https://github.com/can1357/oh-my-pi/pull/15576) · fix(task): 拒绝调用标记为错误**
当天响应 issue #15573 的修复，`task.batch` 拒绝现在正确设置 `isError`。

**2. [#15326](https://github.com/can1357/oh-my-pi/pull/15326) · fix(tui): Ctrl+O 恢复完整 bash 输出（review:p1）**
修复超过 100 行的 bash 输出在回放/恢复时被静默截断的回归，附回归测试。

**3. [#15222](https://github.com/can1357/oh-my-pi/pull/15222) · perf: 会话条目行 memoize，prune 只重写变更部分**
将 O(全会话字节) 的 prune 重写改为增量更新，持久化字节行为不变。同作者另有 [#15225](https://github.com/can1357/oh-my-pi/pull/15225)（reminder 注入零拷贝）和 [#15224](https://github.com/can1357/oh-my-pi/pull/15224)（main.ts 懒加载，启动模块求值从 ~1900 降至 ~101）。

**4. [#15562](https://github.com/can1357/oh-my-pi/pull/15562) · feat(computer): 用户输入时 agent 停止打字并重读**
macOS 下用户在 agent 正在输入的窗口打字时，agent 停止并重新观察，而非覆盖用户输入。基于 #15184/#15176 的系列工作。

**5. [#15574](https://github.com/can1357/oh-my-pi/pull/15574) · fix: macOS computer 元素 ref 在应用重建元素后保持有效**
修复 Automator 弹窗重建引发的 `StaleRef`，ref 现在跟随应用的元素替换。

**6. [#14263](https://github.com/can1357/oh-my-pi/pull/14263) · feat: 跨会话消息（Claude Code 对等能力）**
同机 peer-to-peer 会话发现与协调消息，不引入云/网络层。对应需求 issue #8077（13 👍）。

**7. [#10140](https://github.com/can1357/oh-my-pi/pull/10140) · feat(ai): 按错误 disposition 编译路由回退树**
注册时编译路由回退树为按 disposition 的目标列表，替代每次尝试时解释配置——改善多订阅模型路由。

**8. [#8204](https://github.com/can1357/oh-my-pi/pull/8204) / [#9410](https://github.com/can1357/oh-my-pi/pull/9410) / [#9413](https://github.com/can1357/oh-my-pi/pull/9413) · FriendliAI 内置 provider 系列**
三件套：provider 注册、models.dev catalog 打包、GLM-5.2 reasoning effort 方言，登录即用。

**9. [#12556](https://github.com/can1357/oh-my-pi/pull/12556) · fix(ai): 满足 OpenCode Zen 免费层门禁（review:p1）**
规范 User-Agent + 稳定 `ses_` 会话 token + tool-name body gate + 403 错误域收窄，修复 403 FreeTierError。

**10. [#15541](https://github.com/can1357/oh-my-pi/pull/15541) · feat(tui): /models hub 按智能/速度/价格排序**
多 provider 用户的模型选择体验改进，附 [#15339](https://github.com/can1357/oh-my-pi/pull/15339)（Read 行内图像/SVG 预览）。

---

## 📈 功能需求趋势

| 方向 | 信号 |
|---|---|
| **多会话协作/编排** | 跨会话消息（#8077, 13👍 + PR #14263）、会话分支拼接提案（#15440）、子代理最小 prompt（#4991）、子代理 cache 保值（#15523） |
| **Provider 生态扩展** | FriendliAI 三 PR、OpenCode Zen 修复、DeepSeek/Xiaomi/_codex 相关修复，自定义 provider 兼容性是高频主题 |
| **性能与成本** | 三个 perf PR（会话持久化、注入零拷贝、启动懒加载）、prompt cache 失效类 issue 集中 |
| **Computer Use / GUI 自动化** | @will-bogusz 密集提交 macOS computer 系列四件套 |
| **终端渲染体验** | tmux/SIXEL/Kitty 图像协议、bash 输出回放、Markdown 渲染 |

---

## ⚠️ 开发者关注点

- **SDK 集成可靠性**：`isError` 语义不完整（#15573 与历史 #11585 同类），SDK 宿主无法信任 `tool_execution_end`——建议修复模式应做全库扫描。
- **权限模型跨前端不一致**：TUI、ACP、bash.patterns 三套语义不统一（#15473），IDE 集成场景的安全隐患。
- **隐私默认值**：无凭证时 web_search 静默外发第三方（#13694），企业用户需注意。
- **Windows 路径语义**：盘符相对路径的 cwd 歧义（#15511）是实际数据丢失风险，升级前建议审查 agent 的 shell 工作目录策略。
- **升级注意**：依赖 `estimateImageContentTokens()` 的代码在 v18.10.3 会编译失败，需迁移至 `Tokenizer.imageTokens()`。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*