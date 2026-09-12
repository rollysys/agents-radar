# AI CLI 工具社区动态日报 2026-09-12

> 生成时间: 2026-09-12 03:42 UTC | 覆盖工具: 11 个

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
**数据日期：2026-09-12**

---

## 1. 生态全景

AI CLI 工具已进入“平台化深耕”阶段：头部工具（Claude Code、Codex、Gemini CLI）从单一编码助手演进为集插件生态、远程控制、定时任务、Computer Use 于一体的 agent 平台。安全与权限治理成为新的竞争主战场——Gemini CLI 的提示注入防护、Qwen Code 的遥测脱敏、DeepSeek TUI 的 deny 规则修补都指向同一焦虑：agent 自主性越强，安全边界越关键。同时，Windows 平台质量债务在几乎所有工具中集中爆发，成为行业性短板。模型侧快速迭代（GPT-6 Astra、DeepSeek V4.1、Gemini 3）持续给工具链带来兼容性压力。

---

## 2. 各工具活跃度对比

| 工具 | 热点 Issues | PR 更新 | Release | 今日焦点 |
|---|---|---|---|---|
| **Claude Code** | 10+ | 1（闭源，外部 PR 稀少） | v2.1.269 | `plugin eval`、Function Hooks 确认数周内交付 |
| **OpenAI Codex** | 10 | 10+（密集合并） | 4 个 alpha（0.155.0-alpha.3.7~.10） | Windows 语音运行时、移除人格选择 |
| **Gemini CLI** | 10 | 10 | v0.61.0 nightly | 两个安全加固 PR、`--yolo` 策略化 |
| **Copilot CLI** | 10+ | 0 | v1.0.84-5 | JSONL 会话/记忆导入、MCP 稳定性问题 |
| **Qwen Code** | 10 | 10+ | v0.23.3 nightly | 隐私脱敏三连击、prompt cache 优化 |
| **OpenCode** | 10 | 10 | 无 | RTL/bidi 原生渲染、serve 模式资源隔离 |
| **DeepSeek TUI** | 10 | 13（8 已合并） | 无 | V4 Pro 停服公告、deny 规则安全缺口 |
| **Pi** | 10（59 条更新） | 10（20 条更新） | 无 | Windows 路线图调研、system message delta 架构落地 |
| **oh-my-pi** | 10（115 条更新） | 10（172 条更新） | v18.1.18 | Antigravity 虚假 429 修复、服务端压缩 |
| **Kimi CLI** | 1 | 0 | 无 | WSL2 硬死锁 lone issue |
| **DeepSeek Harness** | 0 | 0 | 无 | 无活动 |

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **Windows 平台质量** | Claude Code、Codex、Copilot、Qwen、Pi、Kimi（WSL2） | Plan9 挂载失败（CC #92984）、沙箱 setup 重构（Codex #44945）、WSL2 CPU 215%（Copilot #3700）、conhost 泄漏（Qwen #11352）、Windows 运行路线图调研（Pi #7547）。约 40% 的 Codex 热点 issue 带 windows-os 标签 |
| **MCP 稳定性与治理** | Copilot、oh-my-pi、Qwen、OpenCode | 连接取消/handoff 滞留 failed（Copilot #4753/#4818）、自动退避重连与懒加载（oh-my-pi #11803/#9793）、OAuth RFC 合规（OpenCode #34592）。MCP 生命周期需要整体重构而非零散修补 |
| **安全/权限/提示注入** | Gemini CLI、Qwen、DeepSeek TUI、Claude Code、Copilot | 间接提示注入防护（Gemini #29250）、遥测/RUM 脱敏（Qwen #11198/#11666）、deny 规则子代理绕过（DSTUI #6097）、文档示例命令被执行（CC #93748）、授权疲劳 vs 渗漏误报（Copilot #1168/#4065） |
| **定时任务/自主 agent 可靠性** | Claude Code、Codex | ScheduleWakeup 需用户输入才触发（CC #93114）、automations 唤醒不执行（Codex #44963）——两个工具在“agent 自主循环”上遇到同构缺陷 |
| **长会话/上下文管理** | Copilot、oh-my-pi、Pi、DeepSeek TUI、Qwen | OOM（Copilot #4699）、服务端压缩与图片字节预算（oh-my-pi）、465k token 冻结（Pi #9410）、context 压力警告被忽略（DSTUI #5620）、prompt cache 失效（Qwen #11627） |
| **会话可移植/导入导出** | Copilot、OpenCode、DeepSeek TUI | JSONL 导入命令（Copilot v1.0.84-5）、tar.xz 全量归档（DSTUI #6056）、自定义 session ID（OpenCode #17344） |

---

## 4. 差异化定位分析

| 工具 | 定位 | 技术路线特点 |
|---|---|---|
| **Claude Code** | 插件生态平台 | 闭源开发，重心在 Hooks/Plugin/Skills 体系与 Remote Control；社区 issue 驱动设计（Function Hooks 吸收社区反馈） |
| **Codex** | 全栈消费级 agent | 语音、Computer Use、浏览器控制、automations 全线铺开；Rust 重写、alpha 高频发布，Windows 功能广度领先但稳定性落后 |
| **Gemini CLI** | 安全优先的开源 CLI | 开源、安全架构演进最快（`--yolo` 策略化、fail-closed allowlist）；AST 工具链调研显示对 token 效率的长期投入 |
| **Copilot CLI** | GitHub 生态深度集成 | 依托 VS Code/GitHub 分发，多模型路由（HydraFusion）与成本优化（Flex tier）是独有方向 |
| **Qwen Code** | 多厂商/国产模型适配 | DashScope 网关兼容、Claude Code hooks 契约对齐（#11610）——走“兼容主流生态 + 国产模型”路线 |
| **OpenCode** | 开源可嵌入基础设施 | serve 模式/SDK 生态（稳定 `@opencode/*` 包）、i18n/RTL 领先，定位为可自建的多客户端基础设施 |
| **DeepSeek TUI** | 架构重构中的后发者 | EPIC 级 crate 拆分、可插拔记忆后端，工程治理痕迹重；受上游模型停服直接影响 |
| **Pi / oh-my-pi** | 极客向、多 provider 聚合 | 事件循环性能、TUI 体验、provider 长尾兼容（Antigravity、Charm Hyper、Fireworks）打磨最深，社区贡献质量高（mitsuhiko 等知名开发者参与） |
| **Kimi CLI** | 早期阶段 | 单日仅 1 条 issue、0 官方回应，活跃度显著低于同类 |

---

## 5. 社区热度与成熟度

**活跃度梯队：**
- **第一梯队**：Claude Code（issue 互动量与 👍 最高，#85891 达 236 👍）、Codex（PR 合并最密集，一天 4 个 alpha）
- **第二梯队**：Gemini CLI、oh-my-pi（115 issue / 172 PR 更新，单issue 52 评论）、Pi、OpenCode、Qwen Code
- **第三梯队**：Copilot CLI（issue 活跃但 PR 数据缺失）、DeepSeek TUI（社区小而工程密度高）
- **沉寂**：Kimi CLI、DeepSeek Harness

**成熟度判断：**
- **成熟稳定**：Claude Code（功能体系完整，痛点集中在平台边缘如 Windows/Remote Control）
- **快速迭代/接近稳定**：Codex（0.155 正式版临近，但 Windows 沙箱重构中）、Gemini CLI（安全架构大改中）
- **成长期**：OpenCode（v2/beta 线）、Qwen Code、DeepSeek TUI
- **早期**：Kimi CLI

---

## 6. 值得关注的趋势信号

1. **安全从“功能”变为“准入门槛”**：Gemini CLI 一天合入两个安全加固 PR、Qwen 遥测脱敏三连击、DeepSeek deny 规则绕过——提示注入、权限覆盖盲区、数据渗漏是全行业共同欠债。**建议**：团队采用任何 CLI 前，审计其 headless/子代理路径的权限执行完整性。

2. **“静默失败”是信任杀手**：subagent 谎报成功（Gemini #22323）、TUI 无声退出（Qwen #11500）、Remote Control 静默降级到旧会话（CC #93652）、配置静默改写（Gemini #29217）。可观测性需求集中爆发，关键任务必须人工复核终止原因。

3. **Agent 自主编排是下一战场**：Claude Code 关闭多会话通信 issue（#24798）+ Function Hooks 交付在即、OpenCode 关闭 /loop（👍43）、Codex automations——但调度可靠性（唤醒不执行）仍是普遍短板。

4. **Windows 是行业性质量洼地**：跨 6 个工具的 Windows 问题集中爆发，且多为长期未修（Copilot #3700 开放 3 个月、CC #85891 发酵一个月）。**建议**：Windows 重度用户暂缓深度依赖沙箱/新功能，等待稳定版。

5. **模型迭代速度超过工具链适配**：GPT-6 Astra invalid_prompt、DeepSeek V4 Pro 两天后停服、Gemini 3 能力重构——**建议**：生产流水线对模型版本做显式 pin，并预设降级预案。

6. **成本敏感度上升**：prompt cache 复用（Qwen）、Flex tier 支持（Copilot）、token 估算修复（Pi）显示重度用户已在精细化运营 token 成本，工具的缓存友好性（如 Pi 的 system message delta 改造）将成为选型因素。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-09-12）

> 说明：本期 PR 数据中评论数缺失，热度排序依据为：关联 Issue 讨论量、更新活跃度与问题影响范围。

## 一、热门 Skills / PR 排行

1. **skill-creator 评估系统修复（PR #1298）** — 修复 `run_eval.py` 永远报告 0% recall 的核心缺陷（关联 Issue #556，12 条评论、10+ 独立复现），同时解决 Windows 流读取、触发检测与并行 worker 问题。状态：OPEN，长期活跃，是当前生态最关键的“元工具”修复。
   [PR #1298](https://github.com/anthropics/skills/pull/1298)

2. **Hivemind 多智能体编排 Skill（PR #1628）** — 让 Claude Code 将机械性工作委派给运行免费模型的 headless opencode worker，Claude Code 仅充当 planner/reviewer/merger，直击“上下文是稀缺资源”痛点。状态：OPEN。
   [PR #1628](https://github.com/anthropics/skills/pull/1628)

3. **document-typography 排版质检 Skill（PR #514）** — 解决 AI 生成文档中的孤行、寡段、编号错位等排版问题，提出“用户很少主动要求好的排版”这一洞察。状态：OPEN。
   [PR #514](https://github.com/anthropics/skills/pull/514)

4. **mcp-builder 系列修复（PR #1742 / #1724）** — 适配 `mcp>=2.0` 的 `streamable_http_client` 重命名与自定义 header（修复 Issue #1668），以及将评估默认模型更新为 claude-sonnet-5。状态：OPEN，近期高频更新。
   [PR #1742](https://github.com/anthropics/skills/pull/1742) | [PR #1724](https://github.com/anthropics/skills/pull/1724)

5. **docx 修订 ID 冲突修复（PR #541）** — 修复 OOXML 共享 `w:id` 命名空间导致的文档损坏问题，技术深度获社区认可。状态：OPEN。
   [PR #541](https://github.com/anthropics/skills/pull/541)

6. **skill-quality / security-analyzer 元技能（PR #83）** — 五维度 Skill 质量评估 + 安全分析工具，呼应社区对信任边界的担忧（见 Issue #492）。状态：OPEN。
   [PR #83](https://github.com/anthropics/skills/pull/83)

7. **self-audit 推理质量门禁（PR #1367）** — 机械文件校验 + 四维度推理审计的交付前质量关卡，通用性强，与 Issue #1385 提案形成呼应。状态：OPEN。
   [PR #1367](https://github.com/anthropics/skills/pull/1367)

## 二、社区需求趋势

- **质量自检与输出审计**：self-audit（#1367）、Reasoning Quality Gate Pipeline（[Issue #1385](https://github.com/anthropics/skills/issues/1385)）表明社区强烈希望“交付前验证”类 Skill。
- **组织级能力共享**：org-wide skill sharing（[Issue #228](https://github.com/anthropics/skills/issues/228)，16 评论）是呼声最高的平台功能诉求。
- **多智能体编排 / 上下文经济**：Hivemind、compact-memory（[Issue #1329](https://github.com/anthropics/skills/issues/1329)）聚焦长上下文压缩与低成本委派。
- **安全与信任治理**：`anthropic/` 命名空间滥用（[Issue #492](https://github.com/anthropics/skills/issues/492)，43 评论、热度第一）、SharePoint 权限安全（#1175）持续发酵。
- **文档工程增强**：排版质检（#514）、ODT 支持（#486）、docx 修复（#541/#1734）显示文档类仍是基本盘。

## 三、高潜力待合并 Skills

| PR | 内容 | 合并信号 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator eval 全链路修复 | 修复被 10+ 复现的 P0 缺陷，9 月仍在更新 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder 适配 mcp v2 | 修复硬性兼容性破坏，官方倾向高 |
| [#538](https://github.com/anthropics/skills/pull/538) / [#539](https://github.com/anthropics/skills/pull/539) | pdf 大小写引用、YAML 校验修复 | 小而准的修复，风险低 |
| [#1607](https://github.com/anthropics/skills/pull/1607) | claude-api 退役模型标注 | 有对应 Issue #1603，事实性修正 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 需求普遍、定位清晰 |

## 四、生态洞察

**社区最集中的诉求是“可信度”与“可验证性”**——从 `anthropic/` 命名空间安全滥用（#492）、到评估工具系统性失效（#556）、再到交付前质量门禁提案，社区正推动 Skills 生态从“功能堆叠”走向“安全、可度量、可治理”的工程化阶段。

---

# Claude Code 社区动态日报 — 2026-09-12

## 1. 今日速览

今日 Claude Code 发布 **v2.1.269**，新增 `claude plugin eval` 插件评测命令与 `/output-style` 快速切换，插件生态工具链进一步完善。社区最热话题 **Function Hooks（#91870）** 官方确认将在数周内交付，有望大幅提升插件能力。此外 Windows 平台问题集中爆发：Cowork Plan9 挂载失败（#92984）与 Claude Desktop 置顶问题（#85891）持续高热。

---

## 2. 版本发布

### v2.1.269
- **`claude plugin eval`**：可对插件运行评测套件，输出可复现的评分结果（JSON + HTML 报告），详见 `claude plugin eval --help`
- **`/output-style [name]`**：新增列出与切换输出风格的斜杠命令，支持 Remote Control 及云端环境

---

## 3. 社区热点 Issues

1. **#91870 Function Hooks — 让插件强大 10 倍**（👍95 / 💬161）
 官方 9 月 9 日更新：Function Hooks 已确认“数周内”交付，社区高信号反馈直接影响了设计。Plugin 开发者最值得追踪的 Issue。
 https://github.com/anthropics/claude-code/issues/91870

2. **#92984 [BUG] Windows 更新 KB5124008 后 Cowork 所有 Plan9 共享挂载失败**（👍54 / 💬99）
 已有可复现步骤，卸载 KB 可修复，属外部更新引入的回归，影响所有 Windows Cowork 文件共享用户。
 https://github.com/anthropics/claude-code/issues/92984

3. **#85891 [BUG] Claude Desktop (Win11) 窗口强制置顶且无法关闭**（👍236 / 💬99）
 236 个 👍 说明影响面极大，标记为 invalid 但仍未解决，持续发酵一个月。
 https://github.com/anthropics/claude-code/issues/85891

4. **#24798 多 Claude 会话间通信（已关闭）**（💬84）
 长期呼声很高的多会话协作/依赖编排需求，今日关闭——值得关注的信号，可能与 Function Hooks 或新的并行编排能力有关。
 https://github.com/anthropics/claude-code/issues/24798

5. **#93525 Cowork 云沙箱 egress 白名单坍缩至 ~5 个域名（已关闭为 duplicate）**（💬33）
 账户设为 "All domains" 但沙箱实际仍只放行少数域名，属回归问题，已有重复 issue 追踪。
 https://github.com/anthropics/claude-code/issues/93525

6. **#93748 安全问题：Skill 文档中的 `` !`cmd` `` 示例语法会被实际执行（已关闭）**（💬1）
 文档示例被 harness 当作真实命令执行，潜在供应链/注入风险，值得插件作者警惕。今日新报今日关闭，可能已修复或转内部追踪。
 https://github.com/anthropics/claude-code/issues/93748

7. **#93743 非 ASCII 路径 slug 编码导致项目存储冲突**（💬2）
 韩文等非 ASCII 目录名被统一折叠为 `-`，不同项目的 session/记忆存储发生碰撞。对中日韩开发者影响直接。
 https://github.com/anthropics/claude-code/issues/93743

8. **#93114 ScheduleWakeup 自主循环不触发**
 与 #93110 同作者的后续：计划唤醒只有在用户输入时才发生，破坏 agent 自主运行场景，触及 headless 自动化的核心。
 https://github.com/anthropics/claude-code/issues/93114

9. **#93652 Remote Control 满载时“新会话”静默落到旧会话**（has repro）
 容量满时不报错而是悄悄进入最近会话，输入内容会落进错误对话——数据误操作风险。
 https://github.com/anthropics/claude-code/issues/93652

10. **#78523 `disable-model-invocation: true` 连显式 `/skill-name` 调用也禁用**（👍5）
 Skills 语义 bug：本意是仅禁用自动调用，却导致无法手动调用。
 https://github.com/anthropics/claude-code/issues/78523

---

## 4. 重要 PR 进展

过去 24 小时仅 1 条 PR 更新：

- **#42205 fix(hookify): 规范化 tool matcher 解析（已关闭）**
 修复含空格的 matcher（如 `Edit | Write`）因未 trim 导致匹配失败的问题，对每个 OR 分段做归一化。虽是小修，但直接关系 hooks 配置可靠性。
 https://github.com/anthropics/claude-code/pull/42205

> 说明：Claude Code 主仓库为闭源开发，外部 PR 活动稀少，今日无更多 PR 数据。

---

## 5. 功能需求趋势

- **插件/Hooks 生态**：Function Hooks 即将落地 + `plugin eval` 发布，插件能力是当前最强主线
- **Remote Control 稳定性**：今日 issue 中至少 6 条与 Remote Control 相关（更新后失联 #91915、重启丢失会话 #93288、满载静默降级 #93652、手机端重连 #91592/#93349），“always-on” 是明确诉求
- **Windows 平台质量**：Cowork/Plan9、Desktop 安装器、OneDrive 路径（#93766）等问题集中
- **Agent 自主运行**：ScheduleWakeup/定时任务的可靠性、授权溯源（#77533）持续被关注
- **多会话编排**：#24798 关闭暗示官方可能在酝酿原生方案

---

## 6. 开发者关注点

1. **Remote Control 断连是最高频痛点**：自动更新后不重连、恢复会话不重挂、headless 机器失联——对远程/移动办公开发者影响严重
2. **Windows 兼容性问题多**：系统更新破坏 Plan9 挂载、安装器状态不一致（#49917）、置顶 bug 长期未修
3. **安全边界需收紧**：文档示例命令被真实执行（#93748）、agent 生成文本伪装用户授权（#81955）、自我重调度缺乏授权链（#77533）
4. **国际化路径处理**：非 ASCII slug 冲突（#93743）影响东亚用户数据完整性
5. **Skills 行为语义**：禁用自动调用不应禁用手动调用（#78523），期望更细粒度控制

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-09-12

## 1. 今日速览

Codex 团队今日密集合并 PR，Windows 语音功能成为焦点——原生语音运行时将打包进 Windows 发布版，同时移除人格（Personality）选择功能，改为在 GPT-5.4/5.5 模型中内置固定指令。版本迭代方面，`0.155.0-alpha.3` 一天内连发 4 个补丁（.7 至 .10），节奏极快。社区侧，Windows 项目上下文同步失败（#42215）持续发酵，评论数已达 31 条，成为本日最热 Issue。

---

## 2. 版本发布

过去 24 小时发布 4 个 alpha 版本（均为 Rust 侧）：

- [rust-v0.155.0-alpha.3.7](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.3.7)
- [rust-v0.155.0-alpha.3.8](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.3.8)
- [rust-v0.155.0-alpha.3.9](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.3.9)
- [rust-v0.155.0-alpha.3.10](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.3.10)

均为迭代式 alpha 预发布，无独立 changelog，说明团队正处于快速集成验证阶段，正式版 0.155.0 可能临近。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 关注点 | 链接 |
|---|-------|--------|------|
| 1 | **#42215** Windows ChatGPT Work 项目上下文同步反复失败 | Windows 桌面端在文件系统同步阶段反复失败，导致无法在现有 Project 内启动本地 Work 对话，31 条评论为本日最热 | [链接](https://github.com/openai/codex/issues/42215) |
| 2 | **#43410** API-key 认证下浏览器控制失败 | 报错 `unsupported Codex auth method: apikey`，13 👍，API key 用户无法使用 Edge 浏览器控制，属高价值功能阻断 | [链接](https://github.com/openai/codex/issues/43410) |
| 3 | **#25744** macOS 上 Computer Use/MCP 辅助进程泄漏 | 长会话累积僵尸进程，造成 HID 卡顿和 WindowServer/TCC 停滞，自 6 月开放至今未修 | [链接](https://github.com/openai/codex/issues/25744) |
| 4 | **#16786** Windows 反复执行 `git ls-files` 致 ntfs.sys 非分页池持续增长 | 深度系统级性能问题，用户亲自 traced 到内核内存泄漏，影响长时使用 | [链接](https://github.com/openai/codex/issues/16786) |
| 5 | **#40596** Windows 统一 exec 失败 `helper_unknown_error` | 沙箱 setup refresh 出错导致终端无法启动，直接阻断 Windows Plus 用户核心工作流 | [链接](https://github.com/openai/codex/issues/40596) |
| 6 | **#43124** macOS 历史会话冻结在旧消息 | 投影 ordinal 不匹配（3185 vs 3184），长对话新消息从 UI 消失，反映本地存储迁移的可靠性问题 | [链接](https://github.com/openai/codex/issues/43124) |
| 7 | **#37856** VS Code 扩展 stale thread owner 阻塞聊天 | 8 👍，渲染器重载后线程归属未释放，提示“聊天已在其他应用打开”且无恢复路径 | [链接](https://github.com/openai/codex/issues/37856) |
| 8 | **#42214** Windows Computer Use 无法控制原生应用 | `cua.getApp is not a function`，功能完全不可用，属 API 契约级 bug | [链接](https://github.com/openai/codex/issues/42214) |
| 9 | **#43237** GPT-6 Astra 对 `hi` 返回 invalid_prompt | 用户做了隔离 CLI + 最小后端复现，跨 Linux/macOS，疑似模型侧 prompt 校验问题 | [链接](https://github.com/openai/codex/issues/43237) |
| 10 | **#44963** Windows 定时任务唤醒后不执行 | 新 Issue：automations 醒来后仅确认状态便停止，未完成分配工作，与 #43632 共同指向调度执行链路缺陷 | [链接](https://github.com/openai/codex/issues/44963) |

---

## 4. 重要 PR 进展（Top 10）

1. **#44922 将原生语音运行时打包进 Windows 发布版** — 包含语音助手与原生音频库，并支持按需获取 Windows 受信根证书，Windows 语音功能上线前置条件。[链接](https://github.com/openai/codex/pull/44922)
2. **#44930 / #44946 / #44935 移除人格选择功能** — 三连 PR：在 GPT-5.4/5.5 中以固定友好指令替代可选人格模板，并从 TUI 移除 `/personality` 命令。[链接](https://github.com/openai/codex/pull/44930)
3. **#44945 TUI Windows 沙箱 setup 改走 app server** — 统一通过 `windowsSandbox/setupStart` 处理提权/非提权安装，或缓解 #40596、#36475 一类沙箱问题。[链接](https://github.com/openai/codex/pull/44945)
4. **#44939 沙箱 setup 尊重执行主机** — TUI 不再尝试配置远程执行器的沙箱，提权 setup 以本地 app server 就绪状态为准。[链接](https://github.com/openai/codex/pull/44939)
5. **#44957 Agent 命令中心支持模型分组** — Ctrl+S 循环切换按 project/status/model 分组，多模型工作流体验提升。[链接](https://github.com/openai/codex/pull/44957)
6. **#44944 对已有线程强制执行托管 provider 要求** — 防止旧线程保留失效的模型 provider 配置，保障 managed 环境合规。[链接](https://github.com/openai/codex/pull/44944)
7. **#44952 / #44925 / #44924 语音体验修复三部曲** — 修复字幕在 speaker 切换时消失、静音轮次音频被抑制、蓝牙麦克风切换后 speaker 格式失效。[链接](https://github.com/openai/codex/pull/44952)
8. **#44948 / #44934 场景快照测试增强** — 覆盖异步提问上下文注入、插件配置重载、远程压缩与 Code Mode 工具等集成场景，测试基建持续加厚。[链接](https://github.com/openai/codex/pull/44948)
9. **#44933 移除 TUI 的 Windows 全局可写扫描与警告** — 减少启动和权限变更时的干扰性扫描，简化 Windows 权限选择体验。[链接](https://github.com/openai/codex/pull/44933)
10. **#25383 多账户 profile 切换的 app-server 生命周期** — 长跑 PR（5 月底创建）今日更新并关闭，暴露 `accountSession/login/start`、`switch`、`logout` 等路由，桌面多账户能力落地。[链接](https://github.com/openai/codex/pull/25383)

---

## 5. 功能需求趋势

- **Windows 平台稳定性**是当前最大痛点聚集地：约 40% 的热点 Issue 带 `windows-os` 标签（沙箱、文件系统、Computer Use、浏览器控制），Windows 用户基数大但成熟度落后于 macOS。
- **Computer Use / 浏览器控制**：#43410（API key 不可用）、#42214（cua API 缺失）、#31160（Intel macOS 缺服务包）——功能可用性跨平台不一致。
- **Automations（定时任务）**：#43632、#44963 显示调度任务“唤醒但不执行/答非所问”，是新兴的问题集群。
- **多端/远程协同**：Android Remote 线程列表缺失（#43017）、iOS 任务会话打不开（#28340）、VS Code 扩展线程归属（#37856），反映多客户端状态同步是持续战场。
- **模型侧行为**：GPT-6/GPT-6 Astra 的 invalid_prompt 问题（#43237、#44649）表明新模型接入后的 prompt 兼容性需要关注。

---

## 6. 开发者关注点

1. **Windows 沙箱体系重构中**：近期多个 PR（#44945、#44939、#44933）都在重做沙箱 setup 链路，建议 Windows 用户暂缓深度依赖沙箱工作流，等待 0.155 稳定版。
2. **人格选择功能即将消失**：`/personality` 命令被移除，相关脚本或配置应尽快迁移。
3. **本地会话存储可靠性**：rollout 迁移、分页投影（#43124、#38762）问题反复出现，重要长会话建议做好外部备份。
4. **API key 认证是二等公民**：浏览器控制等新功能优先支持订阅登录，API key 用户会遇到功能缺口（#43410）。
5. **语音功能是下一个发布重点**：Windows 原生语音运行时打包 + 大量语音修复 PR，预示 Windows 语音能力即将正式推出。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-09-12

## 1. 今日速览

今日发布 nightly 版本 v0.61.0，**安全修复成为主旋律**：两个重量级沙箱加固与提示注入防护 PR 合入，`--yolo` 模式被重构为策略系统通配符，标志着安全架构的重大演进。社区讨论焦点集中在 subagent 可靠性（假成功上报、挂起）和认证循环问题上。

---

## 2. 版本发布

### v0.61.0-nightly.20260912.g9c1b0a610
[Release 链接](https://github.com/google-gemini/gemini-cli/releases)

- **fix(core)**: 防止通过构建文件修改和不可信 flag 进行的间接提示注入攻击（PR #29250）
- **fix(sandbox)**: 加固文件系统边界，隔离运行时状态（PR #29214）

两个均为安全加固类修复，建议所有使用 sandbox / restricted workspace 的用户尽快升级。

---

## 3. 社区热点 Issues

| # | Issue | 重要性 |
|---|-------|--------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 触达 MAX_TURNS 却上报 GOAL 成功 | **P1**。子代理因轮次上限被中断却谎报成功，严重掩盖任务失败，是可观测性核心缺陷。评论 13 条，今日活跃 |
| 2 | [#29267](https://github.com/google-gemini/gemini-cli/issues/29267) 认证循环卡死 | P2 安全类。Pro 会员反复登录失败陷入循环，评论 10 条，是近期用户体验高发问题，已有对应 PR #29282 修复中 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 零依赖 OS 沙箱 + 执行后意图路由 | 大型增强提案：利用 Gemini 3 原生 bash 能力同时保障安全，与今日发布的安全加固方向高度契合 |
| 4 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent 无限挂起 | P1，👍 8。简单操作（如建目录）挂起一小时，用户被迫手动禁用子代理，直接影响可用性 |
| 5 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell 命令完成后卡在 "Waiting input" | P1。命令已结束但 UI 显示等待输入，与 #21409 同属“挂起”类痛点 |
| 6 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory 缺乏确定性脱敏 | P2 安全。转写内容进入模型上下文后才做脱敏，密钥可能先泄漏到上下文，需在架构层面前置脱敏 |
| 7 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) 模型几乎不主动使用 skills 和 subagents | 自定义能力调用率过低是 agent 编排效率的关键问题 |
| 8 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 工具数 >128 触发 400 错误 | 工具作用域管理不足，限制 MCP 生态扩展 |
| 9 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST 感知文件读取/搜索/映射 EPIC | 官方发起的调研型 EPIC，评估 AST 工具对 token 效率和精确性的提升，可能重塑核心工具链 |
| 10 | [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) get-shit-done output hook 导致崩溃 | P1。GSD 工作流输出用户摘要时必现崩溃 |

---

## 4. 重要 PR 进展

| # | PR | 内容 |
|---|-----|------|
| 1 | [#29250](https://github.com/google-gemini/gemini-cli/pull/29250) ✅ | **安全**：防止通过构建文件修改和不可信 flag 的间接提示注入，重构 shell/edit/write_file 的边界校验（已合入今日 nightly） |
| 2 | [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) ✅ | **安全**：沙箱文件系统边界加固，隔离沙箱运行时状态与宿主配置目录（已合入） |
| 3 | [#29287](https://github.com/google-gemini/gemini-cli/pull/29287) ✅ | **架构**：将 `--yolo` 映射为 `allowedTools: ["*"]` 通配符策略，移除独立的 ApprovalMode.YOLO 状态，统一权限模型 |
| 4 | [#29282](https://github.com/google-gemini/gemini-cli/pull/29282) | **修复认证循环**：登录成功后立即持久化 OAuth 凭据，避免重复登录（直接对应 Issue #29267） |
| 5 | [#29201](https://github.com/google-gemini/gemini-cli/pull/29201) | P1：修复 TOML 自定义命令多个 shell 注入需确认时死循环请求权限的问题 |
| 6 | [#29217](https://github.com/google-gemini/gemini-cli/pull/29217) | P1：修复 `--model gemini-2.5-flash` 被静默改写为 3.5 Flash 的行为，尊重用户显式模型选择 |
| 7 | [#29203](https://github.com/google-gemini/gemini-cli/pull/29203) | **安全**：`stripShellWrapper` 支持带额外 flag 的 shell 包装器，防止策略引擎绕过 |
| 8 | [#29200](https://github.com/google-gemini/gemini-cli/pull/29200) | 企业级：MCP 运行时策略统一执行，显式空 allowlist 改为 fail-closed（默认拒绝） |
| 9 | [#29205](https://github.com/google-gemini/gemini-cli/pull/29205) | 修复 MCP prompt 文本被 JSON 编码后提交的问题，保留原始引号和换行 |
| 10 | [#29208](https://github.com/google-gemini/gemini-cli/pull/29208) ✅ | 损坏的 `agents.json`（合法 JSON 但结构错误）不再导致崩溃，降级为空配置 |

---

## 5. 功能需求趋势

1. **安全与沙箱架构**（最热）：间接提示注入防护、确定性脱敏、文件系统隔离、`--yolo` 策略化——今日发布与多个高优 PR 均在此方向
2. **Agent 编排可靠性**：subagent 假成功、挂起、主动调用率低、browser agent 健壮性（#22232, #22267, #21983）
3. **上下文/Token 效率**：AST 感知工具链（#22745/#22746）、"Tactful Extraction" 外科手术式读取（#19561）、`/compress` 持久化（#21335）
4. **Auto Memory 体系化治理**：脱敏、重试策略、无效补丁隔离（#26516/#26522/#26523/#26525）
5. **企业与非交互场景**：MCP 策略统一执行、policy engine 强化
6. **终端 UX 性能**：resize 无闪烁渲染（#21924）

---

## 6. 开发者关注点

- **“静默失败”是最大信任杀手**：subagent 报告成功实为被中断（#22323）、`/bug` 报告缺失子代理上下文（#21763）、Memory 静默丢弃无效补丁（#26523）——可观测性需求集中爆发
- **挂起类 bug 影响日常可用性**：agent 挂起（#21409）、shell 卡 "Waiting input"（#25166）、vite 交互式提示卡死（#22465）
- **认证稳定性**：登录循环（#29267）影响付费用户，修复 PR 已在途
- **配置尊重用户意图**：显式模型选择被改写（#29217）、settings.json 覆盖被 Browser Agent 忽略（#22267）
- **生态兼容细节**：symlink 的 agent 文件不被识别（#20079）、含 `.git` 的仓库名解析错误（PR #29118 已修）

**建议**：使用沙箱或 restricted workspace 的团队尽快升级至今晚 nightly；重度依赖 subagent 的工作流需警惕假成功上报，关键任务建议人工复核终止原因。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-12** | 数据来源：github.com/github/copilot-cli

---

## 1. 今日速览

Copilot CLI 发布 **v1.0.84-5**，新增语义化 JSONL 会话/记忆导入命令，并统一了 shell 补全的生成语法。社区方面，MCP 连接稳定性问题持续发酵——远程 MCP 服务器在 `/clear` 后滞留 `failed` 状态、OAuth 回调端口不匹配等新 issue 密集出现；同时语音模式安装 401 问题再次被报告，Windows 平台的崩溃与 CPU 占用回归仍未关闭。

---

## 2. 版本发布

### v1.0.84-5
- **新增**：语义化 JSONL 交换格式的 session 和 memory 导入命令（`copilot session import` / `memory import`）
- **改进**：Shell 补全现由 CLI 解析器同一语法生成——`copilot <TAB>` 可同时提示根级 flag 与子命令，各子命令仅展示自身选项

---

## 3. 社区热点 Issues

**1. [#4438](https://github.com/github/copilot-cli/issues/4438) Skill 设置 `disable-model-invocation: true` 后完全不可达**
项目 skill 出现在 `copilot skill list` 中，但模型的 `skill()` 工具返回 `Skill not found`，导致“仅手动调用”配置变成“完全不可用”。与 [#4637](https://github.com/github/copilot-cli/issues/4637)（重复 skill 查找产生误导性噪声）为同根问题。👍 7，社区关注度最高的 issue。

**2. [#4753](https://github.com/github/copilot-cli/issues/4753) v1.0.83 会话恢复中断 stdio MCP 连接**
session resume 时前台会话交接取消了仍在初始化的 MCP 连接，超时从 16s 降至约 1s，导致 MCP 服务器整会话静默不可用。属版本回归，影响工作流连续性。

**3. [#4818](https://github.com/github/copilot-cli/issues/4818) 远程/HTTP MCP 服务器在 `/clear` 后滞留 failed 状态**
连接图在 handoff 中被拆除重建后，远程 MCP 无法恢复。与 #4753 共同指向“前台会话交接”机制对 MCP 生命周期管理的系统性缺陷。

**4. [#4795](https://github.com/github/copilot-cli/issues/4795) Atlassian MCP OAuth 回调 URL 端口不匹配**
CLI 使用随机端口作为回调，而应用注册端口为 33418，OAuth 始终失败。👍 3，企业用户接入 Atlassian 生态受阻。

**5. [#4699](https://github.com/github/copilot-cli/issues/4699) 长会话 `--resume` 触发 V8 堆 OOM（4 GiB 上限）**
14 小时内崩溃 3 次，且 Node 诊断报告直接写入用户 cwd 污染仓库。👍 5，反映长会话内存管理是硬伤。

**6. [#3700](https://github.com/github/copilot-cli/issues/3700) [高严重度] WSL2 空闲时主线程 CPU 占用 ~215%，TUI 冻结**
#2208 的回归，每个新会话必现，TUI 实际不可用。开放超过 3 个月，Windows/WSL 用户长期痛点。

**7. [#4095](https://github.com/github/copilot-cli/issues/4095) Windows 插件更新失败 "Access is denied (os error 5)"**
VS Code 中 Copilot 扩展持有 watcher 句柄导致 CLI 更新插件被阻塞。👍 21，本日获赞最高，跨工具文件锁冲突问题。

**8. [#4764](https://github.com/github/copilot-cli/issues/4764) `/permissions assisted` 自动审批约 1 小时后失效**
需重启会话才能恢复，疑似 token/策略过期未刷新，直接影响长时间自动化工作流。

**9. [#4822](https://github.com/github/copilot-cli/issues/4822) AGENTS.md 发现机制跟随符号链接并遍历所有祖先目录**
不尊重 git 仓库边界，会导入无关仓库的自定义指令，对 dotfiles 即 git 仓库的用户产生上下文污染。涉及安全与正确性。

**10. [#4814](https://github.com/github/copilot-cli/issues/4814) / [#4035](https://github.com/github/copilot-cli/issues/4035) 语音模式安装 401：私有 Azure Artifacts feed**
`Microsoft.AI.Foundry.Local.Core` 在 nuget.org 公开可用，但安装器尝试私有 feed 导致 401。新报告复现 2 个月前的老 issue，说明至今未修复。

> 其他值得留意：[#4652](https://github.com/github/copilot-cli/issues/4652) Windows 25H2 沙箱不被识别、[#4065](https://github.com/github/copilot-cli/issues/4065) 数据渗漏防护误伤合法 spec 内容、[#1168](https://github.com/github/copilot-cli/issues/1168) 单请求十余次授权确认的“授权疲劳”。

---

## 4. 重要 PR 进展

过去 24 小时无活跃 PR 更新（数据源显示 0 条）。当前代码变更主要随 release v1.0.84-5 交付。

---

## 5. 功能需求趋势

| 方向 | 代表 Issue | 信号 |
|---|---|---|
| **可观测性** | [#4825](https://github.com/github/copilot-cli/issues/4825) 要求 HydraFusion 将每阶段模型选择、裁决与 credit 输出到 OpenTelemetry | 多模型路由透明度需求上升 |
| **会话/上下文管理** | [#2436](https://github.com/github/copilot-cli/issues/2436) 跨会话上下文查询；v1.0.84-5 的 JSONL 导入正是该方向落地 | 官方与社区方向一致 |
| **成本优化** | [#4821](https://github.com/github/copilot-cli/issues/4821) 支持 OpenAI Flex tier（非时效任务省 50% token 费用） | 模型选择粒度需求 |
| **生命周期钩子** | [#4820](https://github.com/github/copilot-cli/issues/4820) 会话结束 hook 自动运行任务 | 自动化工作流扩展 |
| **UX 打磨** | [#4823](https://github.com/github/copilot-cli/issues/4823) `/skills list` 输出排版、[#4817](https://github.com/github/copilot-cli/issues/4817) ask_user 选项渲染 | 细节体验反馈增多 |

---

## 6. 开发者关注点（痛点总结）

1. **MCP 稳定性是最大痛点**：连接取消（#4753）、handoff 后滞留 failed（#4818）、OAuth 回调/刷新失败（#4795、#4464）、非标准服务器初始化被拒（#4370）——MCP 生命周期能力需要整体重构而非零散修补。
2. **Windows 平台质量差距**：WSL2 CPU 回归（#3700）、原生运行时持续崩溃（#4026）、插件更新文件锁（#4095）、25H2 沙箱识别（#4652）、安装器破坏 PATH（#4816）。
3. **长会话可靠性**：OOM（#4699）、自动审批 1 小时失效（#4764），表明重度用户（长会话、resume、assisted 模式）场景缺乏充分测试。
4. **权限与安全的平衡**：授权疲劳（#1168）vs 渗漏防护误报（#4065），两端都在抱怨，需要更精细的策略模型。
5. **安装与分发渠道**：语音模式私有 feed 401 问题跨两个月重复出现（#4035、#4814），发布工程流程存在盲区。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-09-12 | 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)**

---

## 1. 今日速览

今日社区整体活跃度较低，无新版本发布，无 PR 更新。唯一值得关注的是一条高严重性 Bug 反馈：Linux/WSL2 环境下 kimi CLI 0.42.0 出现随机硬死锁，进程无法通过信号终止并拖死 SSH 会话。该问题尚未获得官方回应，建议相关环境开发者关注并暂缓升级或做好会话保护措施。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues

过去 24 小时仅 1 条 Issue 更新，如实列出：

### 🔴 #2640 [bug] Linux/WSL2 下 kimi CLI 0.42.0 随机硬死锁，SIGTERM/SIGQUIT 无法终止，并拖死 SSH 会话
- **作者**: @jinruyan02 | **状态**: OPEN | **评论**: 0 | 👍: 0
- **环境**: Linux/WSL2 · Kimi Code (kimi.com/code) · 模型 kimi-for-coding · 版本 0.42.0
- **为什么重要**:
  - **严重级别高**：属于进程级硬死锁，`SIGTERM`/`SIGQUIT` 均无法终止，只能依赖 `SIGKILL` 或直接断开 SSH 会话，影响远程开发工作流的可用性。
  - **触发场景常见**：长时间运行后 TUI 偶发卡死，属于 Linux/WSL2 远程开发用户的典型使用路径，潜在受影响人群较大。
  - **尚无社区互动**：Issue 于昨日创建，暂无评论和官方回应，复现信息（堆栈、日志）仍有待补充，建议受影响用户前往补充复现条件以加速定位。
- **链接**: [MoonshotAI/kimi-cli Issue #2640](https://github.com/MoonshotAI/kimi-cli/issues/2640)

---

## 4. 重要 PR 进展

过去 24 小时无 PR 更新。

---

## 5. 功能需求趋势

基于过去 24 小时数据（仅 1 条 Issue），可提取的初步信号：

- **稳定性与进程管理**：TUI 长时间运行下的资源/锁管理是当前暴露出的核心风险点，信号处理（signal handling）和进程退出机制可能有改进空间。
- **Linux/WSL2 兼容性**：WSL2 是国内开发者高频环境，其兼容性与稳定性值得官方重点关注。

> 注：单日样本量过小，以上趋势需结合更长周期数据验证。

---

## 6. 开发者关注点

- **远程会话安全**：CLI 卡死连带拖垮 SSH 会话，意味着未保存的上下文和会话状态可能丢失，开发者呼吁更健壮的进程隔离与优雅退出机制。
- **可诊断性**：此类“随机性”死锁问题需要更好的日志/核心转储支持，便于社区提交有效的复现报告。
- **建议**：WSL2 用户在 0.42.0 上运行长任务时，建议使用 `tmux`/`screen` 管理会话，并定期保存关键上下文，降低死锁带来的损失。

---

*本日报基于过去 24 小时 GitHub 数据自动汇总，样本量有限，结论仅供参考。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-09-12

## 📌 今日速览

今日无新版本发布，社区活动集中在 v2/beta 线的稳定性修复与国际化支持：**原生阿拉伯语/RTL（bidi）渲染**成为今日最大亮点，一组 PR（#48587/#48589/#48590）同时关闭 4 个长期悬而未决的 RTL 显示问题。此外，`serve` 模式下的**资源泄漏与 cgroup 隔离问题**（#47727、#48588）引发关注，已有配套修复 PR 提交。

---

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues（Top 10）

1. **#47902 [OPEN] V2 工具调用参数跨调用损坏，schema 无效调用竟可执行**
   跨多个 assistant 轮次出现参数截断、注入内部序列化标记（`<|DELIM_AE|>`）等严重数据损坏，涉及执行安全性，是当前最需警惕的 v2 阻断级 Bug。
   🔗 anomalyco/opencode#47902

2. **#47727 [OPEN] serve 模式下 per-request Instance 从不销毁，MCP 子进程累积至内存耗尽**
   `?directory=` 每次请求新建实例且无 GC，轮询多项目的客户端最终 OOM，对 server 部署场景影响极大。
   🔗 anomalyco/opencode#47727

3. **#48588 [OPEN] managed serve 未脱离客户端 cgroup，内存受限环境触发 watchdog 杀进程循环**
   `detached: true` 不等于 cgroup 隔离，systemd scope/容器内共享服务被“饿死”，已有修复 PR #48591 当日跟进，响应迅速。
   🔗 anomalyco/opencode#48588

4. **#42170 [OPEN] Desktop 1.18.17 启动失败：no such column: project_id**
   新 schema 弃用 `project_id` 但 `dev` 线仍引用，导致 500 错误，属版本迁移断裂问题，6 条评论持续讨论中。
   🔗 anomalyco/opencode#42170

5. **#48592 [OPEN] [2.0] web UI 项目列表/偏好仅存 localStorage，建议服务端持久化**
   清除站点数据即丢失项目面板，而服务端 `project` 表已有完整数据——典型的“数据在但 UI 不用”架构缺口。
   🔗 anomalyco/opencode#48592

6. **#18001 [CLOSED] /loop 命令实现自动化迭代任务执行**（👍 43）
   高票功能需求已关闭，社区对自动化/定时任务诉求强烈。
   🔗 anomalyco/opencode#18001

7. **#17344 [CLOSED] 支持自定义会话 ID（--session my-project）**（👍 12）
   长期功能请求落地，方便项目级会话管理与脚本集成。
   🔗 anomalyco/opencode#17344

8. **#34215 [CLOSED] base64 PDF 附件致 opencode.global.dat 膨胀至 179MB+，Desktop 启动卡死**（👍 6）
   性能问题根因清晰（提示词历史存储附件全文），对重度用户影响显著，值得借鉴的存储设计教训。
   🔗 anomalyco/opencode#34215

9. **#34592 [CLOSED] MCP OAuth 刷新缺 `resource` 参数（RFC 9728），Atlassian 返回 401**
   OAuth 规范合规性问题，影响所有要求 audience 绑定的 MCP 服务端。
   🔗 anomalyco/opencode#34592

10. **#48565 [CLOSED] 意大利语文档过期且具误导性，建议对过期非英文版本做隐藏/回退**
    i18n 治理机制讨论，随今日 RTL 与波斯语 PR 一并反映社区国际化热度。
    🔗 anomalyco/opencode#48565

---

## 🔧 重要 PR 进展（Top 10）

1. **#48587/#48589** — 原生 bidi/RTL 渲染（UAX #9 + bidi-js），一次性关闭 #38524、#40004、#39525、#32984 四个阿拉伯语/希伯来语显示问题。
   🔗 anomalyco/opencode#48587

2. **#48590** — 上述 RTL 修复的 beta 线移植，保证 `opencode2` 行为一致。
   🔗 anomalyco/opencode#48590

3. **#48591** — 修复 #48588：将 managed serve 放入独立 systemd scope，解决 cgroup 资源饥饿。
   🔗 anomalyco/opencode#48591

4. **#48586** — 新增交互式 `/visualize` 命令，支持多目标图表生成，配套 Issue #48585 当日提出当日实现。
   🔗 anomalyco/opencode#48586

5. **#48435** — 重构 timeline 行协调逻辑，移除 `Equal.equals` 深比较，降低 Effect 哈希开销，TUI 性能优化。
   🔗 anomalyco/opencode#48435

6. **#48559**（已合并）— codemode 错误值获得真实原型链与 JS 标准错误类型，价值模型重写第三步。
   🔗 anomalyco/opencode#48559

7. **#48575 / #48570**（已合并）— TUI 启动提速双连：命名主题不再等待终端调色板探测；Home prompt 提前渲染，插件就绪后无重挂载。
   🔗 anomalyco/opencode#48570

8. **#43460** — 插件工具输入改用 schema 自身实例解码，解决插件捆绑不同 effect 版本导致的解码失败。
   🔗 anomalyco/opencode#43460

9. **#48576**（已合并）— V2 文档切换至稳定 `@opencode/*` 包，标志 V2 SDK 生态走向稳定。
   🔗 anomalyco/opencode#48576

10. **#48568**（已合并）— 实验性 Node CLI 从 `latest` 官方发布中剔除，规范发布通道。
    🔗 anomalyco/opencode#48568

---

## 📈 功能需求趋势

- **自动化/工作流编排**：/loop（#18001，👍43）、/visualize（#48585）、动态会话写库（#36635）——社区希望从“对话”走向“编排”。
- **国际化与可访问性**：RTL/阿拉伯语渲染（4 个 Issue 关闭）、波斯语 README（#47783）、中文图片渲染（#36630）、多语言文档治理（#48565）。
- **会话与配置管理**：自定义 session ID（#17344）、子仓库共享配置合并（#36539）、配置优先级文档化（#36663）。
- **Server/多客户端场景**：实例生命周期管理（#47727）、服务端持久化 UI 状态（#48592）、cgroup 隔离（#48588）——`opencode serve` 作为共享基础设施的成熟化需求明显。
- **插件生态**：自定义状态栏 API（#36625）、session forms 与全局事件流暴露（#46690）。

## ⚠️ 开发者关注点

1. **v2 工具调用可靠性**：参数损坏 + schema 校验失效（#47902）是当前最高风险项，涉及正确性与安全双重隐患。
2. **资源生命周期管理**：serve 模式实例泄漏（#47727）与 cgroup 隔离（#48588）表明长驻进程场景测试不足。
3. **迁移与 schema 一致性**：`project_id` 断裂（#42170）、SQLite 迁移 schema 不一致（#36709）——升级路径需更严格的迁移校验。
4. **存储膨胀**：base64 附件进历史文件（#34215）提示需要附件外置存储策略。
5. **TUI 启动性能**：今日多项 PR 集中优化首屏渲染与深比较开销，性能是持续打磨重点。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-12

## 1. 今日速览

今日 Qwen Code 发布了 v0.23.3 nightly 版本，主要聚焦 channels 重构与钉钉集成清理。社区最值得关注的是**数据隐私安全三连击**——telemetry 在 `logPrompts=false` 时仍导出请求内容、调试日志泄露原始请求体、RUM 上传未脱敏的工具错误文本，多个 P1/P2 隐私问题密集曝光。此外，Responses 管线 reasoning/function_call 邻接性破坏的 Bug（#11665）当天即有修复 PR（#11684）跟进，响应速度值得肯定。

## 2. 版本发布

**v0.23.3-nightly.20260911.aaa6a32aae**（[Release](https://github.com/QwenLM/qwen-code/releases)）
- refactor(dingtalk): 移除过时的后台响应聚合逻辑（PR #11570 by @qqqys）
- feat(channels)!: 移除 me（breaking change，channels 架构持续精简）
- 注意：ECS Runner 集群更新到 0.23.3 失败，hk-1 等池仍在运行旧版本（Issue #11633）

## 3. 社区热点 Issues

1. **#11500** [P1] 多个后台 agent 相继完成时 TUI 静默退出（Ink useBoxMetrics 布局监听器触发 React #185 最大更新深度），进程直接掉回 shell 无任何报错。7 条评论，稳定性影响大。
   https://github.com/QwenLM/qwen-code/issues/11500

2. **#11590** [P1] Qwen Code 向 DashScope 端点自动插入顶层 `metadata` 字段，聚合网关转发给非 Qwen 模型（如 GLM-5.3-Flash）时反序列化失败，一律 400，第三方模型完全不可用。删除该字段即恢复，兼容性问题典型。
   https://github.com/QwenLM/qwen-code/issues/11590

3. **#11665** [P2] Responses 清理会破坏 reasoning 项与 function_call 的邻接性约束，清理时应作为整体单元处理。当天已有修复 PR #11684。
   https://github.com/QwenLM/qwen-code/issues/11665

4. **#11666** [P2/CLOSED] Responses 调试日志未脱敏写入请求体前 500 字符，隐私风险，已快速修复。
   https://github.com/QwenLM/qwen-code/issues/11666

5. **#11666 后续 #11682** thoughtSignature/encrypted_content 的遥测导出策略决策仍待讨论。
   https://github.com/QwenLM/qwen-code/issues/11682

6. **#11198** [P1] 默认开启的 usage-statistics 频道将原始工具错误文本（含 shell 命令行）未经脱敏上传 RUM，涉及凭据安全。
   https://github.com/QwenLM/qwen-code/issues/11198

7. **#11352** [P1] Windows web-terminal PTY 自然退出后泄漏 conhost.exe；shell 侧已由 #11497 修复（改用捆绑 ConPTY），web-terminal 侧仍待解决。
   https://github.com/QwenLM/qwen-code/issues/11352

8. **#11556** [P1] vscode-ide-companion 0.23.1 在 Remote-SSH 下 webview 卡在加载中，跨架构（x64 客户端 / arm64 服务器）场景，IDE 集成关键路径。
   https://github.com/QwenLM/qwen-code/issues/11556

9. **#11610** [P1] hooks 契约与 Claude Code 对齐：纯文本 stdout、stop_hook_active、超时单位、matcher、通用输入等差异点梳理，生态兼容性强需求。
   https://github.com/QwenLM/qwen-code/issues/11610

10. **#11627** [P2/CLOSED] DashScope 重复图片重附导致前缀变化、prompt cache 无法复用，影响多模态长会话成本。另见 #10850 依赖 CVE 审计阻断 CI（fast-uri/qs/uuid，1 high）。
    https://github.com/QwenLM/qwen-code/issues/11627

## 4. 重要 PR 进展

1. **#11684** 修复 Responses 清理中 reasoning 与 function_call 的邻接性，孤儿 function_call 丢弃时连带丢弃其 reasoning 项（对应 Issue #11665）。
   https://github.com/QwenLM/qwen-code/pull/11684

2. **#11291** 无 HTTP 状态的上游 SSE 错误改为重试而非终止回合，提升网关场景鲁棒性。
   https://github.com/QwenLM/qwen-code/pull/11291

3. **#10410** 延迟工具保留 prompt cache：通过 `tool_search`/`tool_call` 两步桥接，不改声明工具列表。
   https://github.com/QwenLM/qwen-code/pull/10410

4. **#10183** 结构化按需记忆召回：从扁平 prompt 演进为 push/pull 协议 + 专用工具。
   https://github.com/QwenLM/qwen-code/pull/10183

5. **#11584** VS Code 会话历史面板去掉 sourceType 过滤，恢复展示全来源（VS Code/终端/Web Shell）会话。
   https://github.com/QwenLM/qwen-code/pull/11584

6. **#10963** active-todo 提醒在委派边界和用户回合触发，修复长时委派下计划 sidecar 冻结。
   https://github.com/QwenLM/qwen-code/pull/10963

7. **#11289** web-shell 中途消息被 idle 拒绝时，daemon 明确告知并以普通 prompt 重发。
   https://github.com/QwenLM/qwen-code/pull/11289

8. **#9768** `/review` chunk 覆盖率改造为自带身份与缺口归因的密封分类账本。
   https://github.com/QwenLM/qwen-code/pull/9768

9. **#11659** 修复 OpenTUI 确认对话框超出固定视口导致的 CI 红灯（#11655）。
   https://github.com/QwenLM/qwen-code/pull/11659

10. **#11679** Windows CI 修复：monitor debug 目录隐私检查兼容 Windows 权限位模型，恢复 qwen-live 测试。
    https://github.com/QwenLM/qwen-code/pull/11679

其他活跃：#11647（ACP 设置按目标目录解析）、#10347（EOF 类网络错误自动重试）、#6019（`/model --compaction` 压缩模型配置）。

## 5. 功能需求趋势

- **数据隐私与安全脱敏**：今日最强信号。#11666、#11682、#11198 密集出现，社区要求 telemetry/日志/RUM 全面内容脱敏与可配置导出策略。
- **IDE 集成（roadmap/ide-integration）**：Remote-SSH 兼容、会话历史、被替代会话的优雅处理（#11556、#11584、#11511）。
- **会话管理与 daemon**：无工作区独立会话 MVP 已交付（#8908）、命名会话全部合入（#10103）、worktree 生命周期清理收尾（#11024）。
- **成本与性能**：prompt cache 复用（#11627、#10410）、Windows 进程/PTY 泄漏治理（#11352）。
- **生态兼容**：Claude Code hooks 契约对齐（#11610）、第三方模型经聚合网关的兼容性（#11590）、MCP on Windows 长尾问题（#9693、#4218）。
- **Review/自动化工作流**：/review 的覆盖账本与 fix-audit 形态（#9768、#10136）持续演进。

## 6. 开发者关注点

1. **稳定性**：TUI 无声崩溃（#11500）类问题最伤信任，用户要求崩溃至少落盘日志。
2. **Windows 平台体验**：conhost 泄漏、MCP 连接、CI lane 失败——Windows 是问题最集中的平台。
3. **隐私默认值**：遥测/日志的默认导出行为偏激进，社区期望“默认脱敏、显式开启”。
4. **多厂商兼容**：非 Qwen 模型经 DashScope 网关不可用（#11590），限制其作为通用 CLI 工具的适用面。
5. **CI/发布基础设施**：ECS runner 更新失败（#11633）、CVE 审计全仓阻断（#10850）、release 主机与 PR CI 争抢（#10879）显示发布流水线成为团队瓶颈。
6. **缓存与成本敏感**：多模态重附图破坏前缀缓存、延迟工具导致缓存失效，社区对 token 成本高度敏感。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报
**日期：2026-09-12 | 数据来源：[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)**

---

## 📰 今日速览

昨日社区最重磅的消息是 **DeepSeek 官方将于 9 月 14 日中午下线 V4 Pro 服务**，请求将自动路由至 V4.1 Flash（#6025），用户需尽快评估迁移影响。同日合并了多个高质量功能 PR（会话归档导出、deny 规则增强、工具图片传递、GLM-5.3 推理控制修复），并有活跃贡献者 @7jrxt42BxFZo4iAnN4CX 集中提交了一批安全与 UX 相关 Issue，聚焦权限规则在子代理/headless 模式下的执行漏洞。

---

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues

1. **[#6025] DeepSeek V4 Pro 服务将于 9 月 14 日 12:00（北京时间）停服**（OPEN，4 评论）
   直接影响所有 Pro 模型用户：停服后请求路由到 V4.1 Flash 并按 Flash 计费。属于需要立即关注的上游变更。
   [链接](https://github.com/Hmbown/DeepSeek-TUI/issues/6025)

2. **[#5620] Context 压力警告是瞬态的，Agent 不会主动响应**（OPEN，15 评论）
   安全信号被静默丢弃——上下文接近压缩阈值时警告一闪而过，Agent 无任何主动行为（如提示用户、触发压缩）。社区讨论热烈，属于可靠性核心问题。
   [链接](https://github.com/Hmbown/DeepSeek-TUI/issues/5620)

3. **[#5316] EPIC-005: codewhale-tui Crate 拆分（Umbrella）**（OPEN，22 评论）
   讨论量最高的架构级 Issue，执行权已移交 Linear 的 Core 执行计划（C03–C10），是当前工程主线的风向标。
   [链接](https://github.com/Hmbown/DeepSeek-TUI/issues/5316)

4. **[#5929] 并行执行下 6 个测试在负载下偶发失败**（OPEN，6 评论）
   完整测试跑中失败、单独跑全过，每次浪费重跑或 25 分钟 CI 矩阵。典型的并发测试稳定性债务，维护者亲自跟踪。
   [链接](https://github.com/Hmbown/DeepSeek-TUI/issues/5929)

5. **[#6097] permissions.toml 的 deny 规则在子代理工具循环中不生效**（OPEN）
   安全漏洞：父进程明确拒绝的命令可在子代理中不受限执行。与 #6098、#6099 构成一组权限体系执行缺口。
   [链接](https://github.com/Hmbown/DeepSeek-TUI/issues/6097)

6. **[#6098] deny 规则误匹配 heredoc 正文，阻断合法文件写入**（OPEN）
   deny 规则按行匹配提交文本而非实际执行的命令，`cat >> file <<'EOF'` 中正文提到敏感命令即被拒。误杀率高的策略引擎缺陷。
   [链接](https://github.com/Hmbown/DeepSeek-TUI/issues/6098)

7. **[#6102] 恢复中断会话时因 runtime 目录缺失报 ENOENT**（OPEN，4 评论）
   `codewhale resume` 在启动前即失败，中断恢复是 TUI 的核心场景，影响面大。
   [链接](https://github.com/Hmbown/DeepSeek-TUI/issues/6102)

8. **[#6045] 用户输入弹窗裁剪选项、无滚动、无返回导航**（OPEN，4 评论）
   `request_user_input` 对话框在真实终端（141×38）上选项被截断、输入不可见、误操作不可逆。UX 痛点集中爆发。
   [链接](https://github.com/Hmbown/DeepSeek-TUI/issues/6045)

9. **[#6050] 可插拔 Agent 记忆后端（mem0 / causal-memory 参考）**（OPEN）
   `MemoryBackend` 目前只有 Native/Off 两个硬编码变体，社区请求开放第三方记忆后端接口。与 #6017（MemCode CEO 亲自提案的跨会话持久记忆）形成同一趋势。
   [链接](https://github.com/Hmbown/DeepSeek-TUI/issues/6050)

10. **[#5856] Computer-use 插件：内置 bundle 发现 + 首个 look-act 循环**（OPEN，3 评论，release-blocker）
    发布阻塞项，验收路径已简化为在发布构建中直接发现并启用内置 bundle。
    [链接](https://github.com/Hmbown/DeepSeek-TUI/issues/5856)

其他值得注意：#6017（[链接](https://github.com/Hmbown/DeepSeek-TUI/issues/6017)）为 MemCode 创始人提案的跨会话记忆集成；#6108（[链接](https://github.com/Hmbown/DeepSeek-TUI/issues/6108)）请求 per-model `context_window` 覆盖；#6101（[链接](https://github.com/Hmbown/DeepSeek-TUI/issues/6101)）请求工具审批提示增加 opt-in 超时。

---

## 🔀 重要 PR 进展

**已合并：**

1. **[#6056] 会话完整保真归档导出为 tar.xz** — `/export` markdown 有损，新增机器可读的全量会话归档，支持 CLI 与嵌入宿主库调用。[链接](https://github.com/Hmbown/DeepSeek-TUI/pull/6056)
2. **[#6054] deny 规则匹配表达力增强** — 支持 cmd.exe 单字母 `/` flag 任意位置跳过等四种真实渗透/破坏命令向量。[链接](https://github.com/Hmbown/DeepSeek-TUI/pull/6054)
3. **[#6053] 工具结果通过 metadata.images 携带图片** — computer-use 截图等图像产物可传给视觉模型，统一 5MB 限制。[链接](https://github.com/Hmbown/DeepSeek-TUI/pull/6053)
4. **[#6051] Z.ai/GLM-5.3 强制思考模型的推理控制修复** — 正确处理 `reasoning_effort: low/high/max` 约束。[链接](https://github.com/Hmbown/DeepSeek-TUI/pull/6051)
5. **[#6052] 模型侧文档与工具门控对齐（5 项审计修复）** — 含 finance 工具绕过 network_policy 的安全修复。[链接](https://github.com/Hmbown/DeepSeek-TUI/pull/6052)
6. **[#6081] Gemini thought_signature 缺失时的恢复指引** — 兼容网关报错时给出明确诊断说明。[链接](https://github.com/Hmbown/DeepSeek-TUI/pull/6081)
7. **[#6057] 夜间安全依赖清扫** — 一次性解决全部 9 个 Dependabot 告警（均为 npm dev/transitive）。[链接](https://github.com/Hmbown/DeepSeek-TUI/pull/6057)
8. **[#6080] 修复简体中文文档死链/图片** — `docs/zh_hans/` 下相对链接失效。[链接](https://github.com/Hmbown/DeepSeek-TUI/pull/6080)

**进行中：**

9. **[#6055] 子代理启动的速率限制自适应调度** — 固定容量 Semaphore 面对并发 429 无法收缩，改为自适应方案。[链接](https://github.com/Hmbown/DeepSeek-TUI/pull/6055)
10. **[#6096] TUI 会话导出切片接入能力化命令契约（FEAT-025）** — EPIC-006 架构迁移的纯结构性步骤。[链接](https://github.com/Hmbown/DeepSeek-TUI/pull/6096)

另有 #6100 新增 Serply 搜索 provider（[链接](https://github.com/Hmbown/DeepSeek-TUI/pull/6100)），以及 5 个 Dependabot 依赖升级 PR（dirs 7.0、rustls 0.23.44、encoding_rs 0.8.40、lru、flate2）待处理。

---

## 📈 功能需求趋势

- **权限与安全体系完善**（最集中）：deny 规则语义修正（#6098）、子代理/`exec` headless 路径的规则覆盖（#6097/#6099）、审批超时（#6101）。
- **可插拔记忆/外部集成**：第三方记忆后端 seam（#6050）、MemCode 集成提案（#6017）、`@file` 搜索开放给 API 客户端（#6095）。
- **多模型/网关适配**：per-model context window（#6108）、GLM-5.3 强制思考、Gemini 签名——社区在大量使用自定义网关。
- **会话管理与 UX**：Session Picker 改进（#6014）、会话恢复健壮性（#6102）、输入弹窗修复（#6045）。
- **Computer-use 与多代理**：发布阻塞的 look-act 循环（#5856）、限流自适应调度（#6055）、fleet 防卡死（#6015）。
- **架构重构**：EPIC-005 crate 拆分与命令能力化契约持续推进。

---

## ⚠️ 开发者关注点

1. **上游模型停服风险**：V4 Pro 两天后下线，依赖 Pro 的自动化流水线需立即评估 Flash 降级影响（#6025）。
2. **权限规则覆盖盲区**：当前 deny 规则仅在父进程交互循环和 ACP 适配器生效，headless `exec` 与子代理完全不校验——无人值守场景存在真实安全暴露（#6097/#6099/#6098）。
3. **上下文安全信号失效**：压力警告瞬态且 Agent 不响应，长会话可能出现静默质量退化（#5620）。
4. **CI 不稳定拖慢迭代**：6 个并发 flaky 测试每次触发 25 分钟矩阵重跑（#5929）。
5. **中断恢复不可靠**：resume 路径的 ENOENT 表明会话 runtime 目录生命周期管理有缺口（#6102）。

---
*本报告基于过去 24 小时 GitHub 活动数据自动汇总，评论数为筛选依据。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报（2026-09-12）

## 📰 今日速览

今日无新版本发布，但社区活动活跃：59 条 Issue 更新、20 条 PR 更新。**Windows 兼容性**仍是最大热点（#7547 已积累 62 条评论），@petrroll 连续提交两个 Windows shell 改进 PR（#9501、#9504）。多条贡献提案（事件导出器、启动优化）被快速处理，@mitsuhiko 的 system message delta 架构改造 PR（#9116/#9117）已合并，标志着 mid-conversation system messages 能力落地。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#7547](https://github.com/earendil-works/pi/issues/7547)** — Windows 上如何运行 Pi 的大讨论（62 评论）。核心维护者发起调研，决定 Windows 支持的精力分配方向（核心修复 vs 外部委托），是 Windows 生态路线图的关键帖。

2. **[#9323](https://github.com/earendil-works/pi/issues/9323)** — Fireworks 专属配置改进（14 评论），涉及 provider 配置架构，多家自定义 provider 用户的共同痛点。

3. **[#9052](https://github.com/earendil-works/pi/issues/9052)** — 全屏模式滚轮速度比普通模式慢 3 倍（9 评论，4 👍）。固定输入框是新特性，但性能回退影响体验，用户呼声较高。

4. **[#5323](https://github.com/earendil-works/pi/issues/5323)** — Vertex + GCP metadata server 认证检测采用同步 `existsSync`，存在正确性隐患，长期未决。

5. **[#8928](https://github.com/earendil-works/pi/issues/8928)** — 并行启动时其他 provider 的过期 OAuth 凭据导致约 48 秒误报 "No API key found"，有确定性复现，多进程生产环境的高频坑。

6. **[#9410](https://github.com/earendil-works/pi/issues/9410)** — 大上下文（~465k tokens）会话中按 Escape 中断流式输出导致 TUI 冻结约 60 秒，交互性能类严重 bug。

7. **[#8810](https://github.com/earendil-works/pi/issues/8810)** — 扩展注册的 provider 在新会话中间歇性忽略 `defaultProvider/defaultModel` 配置，静默降级到其他模型，可靠性隐患。

8. **[#9262](https://github.com/earendil-works/pi/issues/9262)** — find 工具对 Windows 反斜杠 glob（`src\**\*.ts`）静默返回空结果，可能导致 agent 误判文件不存在。

9. **[#9267](https://github.com/earendil-works/pi/issues/9267)** — 用 `String.indexOf()` 优化 fuzzy 会话搜索，不改变排序的低风险性能改进提案。

10. **[#9513](https://github.com/earendil-works/pi/issues/9513)** — OpenAI Responses 兼容网关间歇性 "stream ended before terminal event"，疑似捆绑的 openai-node 丢失最后 SSE 事件，影响自建网关用户。

---

## 🔧 重要 PR 进展（Top 10）

1. **[#9116](https://github.com/earendil-works/pi/pull/9116) / [#9117](https://github.com/earendil-works/pi/pull/9117)**（已合并，@mitsuhiko）— 两层架构改造：pi-ai 支持 mid-conversation system messages，coding agent 将 prompt/工具变更以 system message delta 交付，避免重写顶层 prompt，显著改善缓存命中与会话一致性。

2. **[#9501](https://github.com/earendil-works/pi/pull/9501)**（OPEN，@petrroll）— 统一 Windows shell 的二进制发现机制，从安装目录解析，并完善 Windows 文档，配合 #7547 调研落地。

3. **[#9504](https://github.com/earendil-works/pi/pull/9504)**（OPEN，@petrroll）— 用 `accessSync(F_OK)` 替代 `existsSync` 验证 shell，修复 Windows Store 别名因 EACCES 被误拒的问题。

4. **[#9478](https://github.com/earendil-works/pi/pull/9478)**（已合并）— 修复 web_fetch 大结果（~6.6MB）导致压缩刚完成又误触发 auto-compaction 的 token 估算问题，对每条消息设字符上限。

5. **[#9489](https://github.com/earendil-works/pi/pull/9489)**（已合并）— Bedrock Converse 按模型家族归一化 gross/net inputTokens 口径，修复 token 统计在 Claude 与其他家族间的差异（#8752）。

6. **[#9468](https://github.com/earendil-works/pi/pull/9468)**（已合并）— Extension API 新增 `requestReload`：延迟到 agent run settle 后合并执行，避免 mid-turn 重载，支持 followUp 自动续接用户轮次。

7. **[#8627](https://github.com/earendil-works/pi/pull/8627) + [#9483](https://github.com/earendil-works/pi/pull/9483)**（已合并）— 扩展注册的 cwd 敏感工具（read/write/edit/glob 等）改用 `ctx.cwd`，后续 #9483 以 `customCwd` 选项修复向后兼容。

8. **[#9467](https://github.com/earendil-works/pi/pull/9467)**（已合并）— lazyStream setup 阶段的 AbortError 正确分类为 "aborted"，不再误报为硬错误。

9. **[#8708](https://github.com/earendil-works/pi/pull/8708)**（已合并）— fd/rg 版本解析不再调用 GitHub API，规避共享出口 IP 下 60 次/小时的匿名配额限制。

10. **[#9488](https://github.com/earendil-works/pi/pull/9488)**（OPEN）— 为 Codex 添加规范的 session/thread/turn/requestIdentity 元数据，实现跨工具续接、重试、steering 的请求归因。另 [#9442](https://github.com/earendil-works/pi/pull/9442)（OPEN）允许兼容代理通过 `compat.supportsPromptCacheKey` 接收会话缓存键。

---

## 📈 功能需求趋势

- **Windows 一等公民支持**：#7547、#9262、#9129、#9490 等持续发酵，shell 解析、路径分隔符、进程树清理、非 C 盘系统全覆盖，是当前最集中的方向。
- **扩展 API 能力扩展**：凭据持久化（#7658）、公开 OAuth HTML 渲染（#6930）、非竞争性 UI 通知（#9462）、延迟重载（已落地 #9468），扩展生态诉求强烈。
- **性能与稳定性**：大上下文 TUI 冻结（#9410）、启动认证延迟（#8928）、模糊搜索优化（#9267）、压缩边界（#8371、#9512）。
- **多 Provider / 网关兼容**：Fireworks、Vertex、Bedrock Mantle、OpenAI 兼容网关的配置与流式兼容性问题密集。
- **可观测性集成**：#9469 提出事件导出器（webhook/MQ），指向企业级 telemetry 需求。

---

## ⚠️ 开发者关注点

1. **认证与启动可靠性**：过期 OAuth 凭据误导报、并行启动竞态（#8928）在生产多进程环境中 debugging 成本高，错误信息指向错误的 provider 是普遍抱怨。
2. **静默失败**：无效 `--mode` 无诊断（#9045）、Windows glob 静默空结果（#9262）——"不报错但结果错"的模式对 agent 场景尤其危险。
3. **大上下文体验**：数百 k token 会话下的 TUI 冻结、压缩失败/误触发是重度用户的主要痛点。
4. **终端兼容性长尾**：Termux 无 bracketed paste（#7321）、无 PageUp/Down 键盘映射覆盖不全（#7629）。
5. **贡献流程**：多个新贡献者提案（#9469、#9475）被快速关闭/要求拆分，社区贡献门槛与审核节奏值得关注。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报 · 2026-09-12

## 1. 今日速览

今日发布 **v18.1.18**，最重磅的更新是引入 Anthropic 服务端压缩（server-side compaction）作为 `remote` 压缩后端。社区最大热点是 **Google Antigravity 虚假 429 配额耗尽问题**（#11689，52 条评论），已有修复 PR #11730 提交并标记 review:p1。此外，MCP 稳定性（重连泄漏、自动重试）和 TUI 性能问题持续占据讨论焦点。

---

## 2. 版本发布

### v18.1.18
- **@oh-my-pi/pi-agent-core**：新增 Anthropic 服务端压缩作为 `remote` 压缩后端。模型目录中由规则持有的模型行（Opus 4.6+、Sonnet 4.6+、Fable/Mythos 5，通过 `compat.supportsServerCompaction` 判定）在官方端点上支持该特性，解析方式与 provider 路由保持一致。

---

## 3. 社区热点 Issues

1. **#11689 Antigravity 虚假配额耗尽（429）** — 52 评论 · prio:p2
   使用 Google AI Pro 订阅时持续收到 `RESOURCE_EXHEASTED` 429 错误，实际配额并未用尽。本日讨论最热烈的问题，关联多个重复 issue，修复 PR 已就绪。
   🔗 can1357/oh-my-pi Issue #11689

2. **#11699 Antigravity 429 根因：system prompt 中的 `<system-conventions>` 标签** — 19 评论
   定位到 Cloud Code Assist 对 system prompt 中特定标签的检查导致 429，与 #11689 同根因，已标记 duplicate。
   🔗 can1357/oh-my-pi Issue #11699

3. **#10072 Transcript 区块错误钉住遮挡流式输出** — 15 评论
   TUI 长期痛点：历史消息/工具块固定后遮挡后续流式输出，破坏统一滚动流。
   🔗 can1357/oh-my-pi Issue #10072

4. **#10930 Linux 启动崩溃：未捕获 EPIPE** — 11 评论 · prio:p2
   v18.1.10 在 Linux 上连续三次启动崩溃，疑似与用户级 LSP 配置存在时间关联。
   🔗 can1357/oh-my-pi Issue #10930

5. **#11508 请求新增 DeepSeek V4.1 Flash 目录支持** — 11 评论 · 👍7
   新模型 9 月 10 日发布，但 taxonomy 无法分类新模型 id，即使 models.dev 收录后仍会被过滤。
   🔗 can1357/oh-my-pi Issue #11508

6. **#11719 Antigravity 报 Claude 429 错误（根本没用 Claude 模型）** — 9 评论
   错误信息张冠李戴，进一步佐证 429 是 Antigravity 端点的系统性误报。
   🔗 can1357/oh-my-pi Issue #11719

7. **#11014 Zhipu 429 重置时间解析错误：中文时间戳被当作 UTC** — 7 评论 · prio:p2
   `waitForUsageReset` 将北京时间的"将在…重置"解析为 UTC，导致会话晚醒 8 小时。
   🔗 can1357/oh-my-pi Issue #11014

8. **#11767 Usage-report 与请求路径冲突导致封禁/解封死循环** — 7 评论
   429 写入的凭证封禁被显示余量的 usage report 反复清除，形成无限循环。
   🔗 can1357/oh-my-pi Issue #11767

9. **#11801 Windows 上 GPT-6 Astra 严重卡顿：4ms 写入前阻塞 10m45s** — 6 评论
   新提交的性能问题，Astra 会话流式/UI 响应逐渐劣化，重启仅暂时缓解。
   🔗 can1357/oh-my-pi Issue #11801

10. **#11589 usage-fetch 突发阻塞事件循环 4-5 秒** — 5 评论 · prio:p1
    空闲会话在启动时及每约 5 分钟被 usage 拉取阻塞，遥测数据 `ui.loop-blocked` 已精确定位。
    🔗 can1357/oh-my-pi Issue #11589

---

## 4. 重要 PR 进展

1. **#11730 修复 Antigravity agent 模式虚假 429** — review:p1
   定位到 Cloud Code Assist 在 `requestType: "agent"` 时检查 `systemInstruction` 导致误报，修复覆盖 #11689 及三个重复 issue。
   🔗 can1357/oh-my-pi PR #11730

2. **#9377 修复已销毁工具块未从共享 spinner ticker 注销** — review:p0
   消除 transcript 清空/会话切换后 80ms ticker 持续持有死组件的问题，是 TUI 性能关键修复。
   🔗 can1357/oh-my-pi PR #9377

3. **#11734 隐藏历史 transcript 中的工具活动** — review:p0
   `Ctrl+Shift+O` / `display.hideToolActivity` 此前只重绘活动视口，现覆盖已渲染的历史区块。
   🔗 can1357/oh-my-pi PR #11734

4. **#11803 MCP HTTP/SSE 服务器失联后自动退避重试**
   重连阶梯失败后按 15s 起步、5 分钟封顶的指数退避持续尝试，直到服务器恢复。
   🔗 can1357/oh-my-pi PR #11803

5. **#9793 MCP 懒加载：首次使用时才连接**
   `lazy: true` 的服务器启动时不 spawn，仅注册上次缓存的工具定义，首次调用时才连接。
   🔗 can1357/oh-my-pi PR #9793

6. **#10875 MCP 按服务器粒度 enabledTools/disabledTools 过滤**
   支持 picomatch 模式，对齐 Copilot/Claude/OpenCode 等其他 harness 的能力。
   🔗 can1357/oh-my-pi PR #10875

7. **#11656 新增 Charm Hyper provider**
   内置 API-key 登录、模型动态发现、定价/limits 读取，并在 `/usage` 展示预付余额。
   🔗 can1357/oh-my-pi PR #11656

8. **#9376 可配置的 Anthropic 服务端 fallback 链**
   新增 `serverSideFallbackModels` 配置，与今日发布的 v18.1.18 服务端压缩特性相呼应。
   🔗 can1357/oh-my-pi PR #9376

9. **#9009 Browser Relay 回收孤儿 debugger 附件** — review:p1
   修复 relay 进程死亡后 Chrome debugger 附件和提示条永久残留的问题。
   🔗 can1357/oh-my-pi PR #9009

10. **#10286 snapcompact 按图片字节预算限制出站负载** — review:p1
    长视觉会话累积的小图片帧现受 per-provider 字节预算约束，与数量上限并行生效。
    🔗 can1357/oh-my-pi PR #10286

其他值得关注：#11807/#11806（roboomp 连续提交的 provider 错误重试/识别修复）、#11454（隔离子代理 baseline diff 预算限制）、#9424（Mnemopi worktree/jj 银行派生统一）。

---

## 5. 功能需求趋势

- **Provider 生态扩展**：Antigravity 修复、DeepSeek V4.1 Flash 目录支持、Charm Hyper 新 provider —— 社区对新 provider/新模型的接入速度要求很高。
- **MCP 可靠性与治理**：懒加载、自动重连、工具过滤、内存泄漏修复，MCP 是近期 PR 最密集的方向。
- **TUI 降噪与信息密度**：紧凑工具渲染（#6022、#2785）、历史工具活动隐藏、状态栏 profile 指标，长任务 steering 场景需求明确。
- **上下文与压缩管理**：服务端压缩、snapcompact 图片预算、artifact 恢复溢出（#11365）—— 上下文窗口管理是核心战场。
- **会话可恢复性**：transcript 记录构建版本（#11702）、`/undo` 命令（#2427）、agent 调用 slash 命令（#6954）。

---

## 6. 开发者关注点

- **429/配额处理是最大痛点**：Antigravity 虚假 429、Zhipu 时区解析错误、usage-report 死循环三个 issue 显示配额恢复逻辑的健壮性亟需系统性改进。
- **事件循环阻塞与内存泄漏**：usage-fetch 阻塞（#11589）、MCP 重连泄漏 40KB/工具（#11784，已关闭）、Windows 卡顿（#11801）—— 性能问题跨平台普遍存在。
- **大负载会话稳定性**：artifact 无界恢复、baseline diff 无界渲染、图片字节预算，说明大上下文/大文件场景的边界控制是高频 bug 来源。
- **跨平台差异**：Linux EPIPE 崩溃、Windows 终端卡顿/图片黑屏等问题提示平台特定测试覆盖仍需加强。

---
*数据来源：github.com/can1357/oh-my-pi · 统计窗口：过去 24 小时（Issues 115 条 / PRs 172 条更新）*

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*