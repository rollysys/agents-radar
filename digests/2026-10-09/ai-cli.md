# AI CLI 工具社区动态日报 2026-10-09

> 生成时间: 2026-10-09 05:10 UTC | 覆盖工具: 11 个

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

# AI CLI 工具生态横向对比分析报告（2026-10-09）

## 1. 生态全景

AI CLI 工具已进入**功能深化与工程化攻坚并行**阶段：头部工具（Claude Code、Codex）重心从能力堆叠转向企业级安全合规（fail-closed 语义、HIPAA、凭据掩码），中间梯队（Qwen Code、OpenCode、oh-my-pi）在 Managed Agent 架构、多 provider 路由和成本效率（prompt-cache 感知）上快速演进。安全漏洞（命令注入、路径穿越、沙箱绕过）在本周期集中爆发并被密集修复，成为各社区共同的最高优先级。Windows 平台支持质量成为普遍短板，跨工具均有大规模投诉集群。

## 2. 各工具活跃度对比

| 工具 | Issue 更新 | PR 更新 | Release | 本日焦点 |
|---|---|---|---|---|
| Claude Code | 高（10+ 热点） | 低（7 条，5 已关闭） | v2.1.295 | Hooks fail-closed、桌面端稳定性 |
| OpenAI Codex | 高（Windows 回归集群） | 高（10+ 重要 PR） | v0.162.0 + 4 alpha | Windows sandbox/updater 崩溃集群 |
| Gemini CLI | 中高 | 高（10+ 安全 PR 密集合入） | 无 | v0.63.0 yolo 回归、安全修复潮 |
| Copilot CLI | 中高（47 条更新） | 极低（1 条） | 5 个版本 | 沙箱失效、Entra 认证 |
| Qwen Code | 高（架构讨论主导） | 高 | 无（发布失败） | Managed Agent 双路径架构 |
| OpenCode | 高（50 条） | 高（50 条） | 无 | 浏览器工具重构、性能优化 |
| Pi | 极高（116 条） | 高（22 条） | 无 | Windows 调研、provider 适配 |
| oh-my-pi | 中高 | 高 | v18.8.5/18.8.6 | 缓存感知裁剪、OAuth 恢复 |
| DeepSeek TUI (Codewhale) | 中 | 高（贡献者活跃） | 无（0.10.2 候选中） | 性能回归、Terminal dock |
| Kimi Code / DeepSeek Harness | 无 | 无 | 无 | 停滞 |

## 3. 共同关注的功能方向

- **安全 fail-closed 语义**：Claude Code（`onFailure: "block"`、hookify 系列 PR）、Qwen Code（heredoc 执行漏洞 #13705 当日修复）、Gemini CLI（命令注入/路径穿越 P1 修复潮）、Codex（凭据掩码 PR #52302）、Copilot CLI（ACP 沙箱失效 #5089）— 全生态共识：**hook/沙箱异常必须阻断而非放行**。
- **Windows 一等公民化**：Codex（os error 32 集群、updater 0xC0000005）、Pi（#7547 官方调研帖，78 评论）、Qwen Code（browser-use 不可用）、oh-my-pi（TUI 冻结）、Copilot CLI（WAM 崩溃）— 跨所有工具的最大质量缺口。
- **上下文/压缩可靠性**：Claude Code（auto-compact 时机错误 #92434）、Codex（图片循环压缩 #33493）、OpenCode（compact 吞 prompt、token 上限续写 PR #53876）、DeepSeek TUI（journal 无上限 #6842）— 长会话是普遍痛点。
- **多账号/认证健壮性**：Claude Code（Connector 多账号 264 评论）、oh-my-pi（Codex 配额故障转移 #14997）、Copilot CLI（Entra broker）、Pi（OAuth 403、设备码轮询）。
- **子代理编排与可观测性**：Claude Code（#87874 无 join/取消语义）、Gemini CLI（假成功上报 #22323）、Qwen Code（H4b 子 Session）、oh-my-pi（abort 语义 #14968）。
- **多 Provider/BYOK 路由**：OpenCode（Vertex Mistral）、Pi（OpenRouter 可用性过滤）、Copilot CLI（#3709）、oh-my-pi（多账号故障转移）。

## 4. 差异化定位分析

| 工具 | 定位 | 技术路线特点 |
|---|---|---|
| Claude Code | 企业级安全合规平台 | Hooks 生态 + 合规配置（HIPAA），桌面/云端协同，但闭源引发 #41447 玩笑 PR |
| OpenAI Codex | 重度专业用户全平台 | Rust 重写 + worktree/Command Center，Windows 端质量与野心不匹配 |
| Gemini CLI | 开源快速迭代 | 安全修复响应最快（当日 PR 修复当日回归），AST 感知工具链实验前瞻 |
| Copilot CLI | GitHub 生态整合 | 发布节奏最密（日 5 版），BYOK + Entra 企业认证，社区 PR 参与度极低 |
| Qwen Code | 托管 Agent 平台化 | 最激进的架构演进（K8s 运行时、Session 持久化、A2A），走向云端分发 |
| OpenCode | 开源多协议聚合 | Provider 矩阵最广，浏览器工具数据驱动重构（96 会话基线）体现工程严谨性 |
| Pi / oh-my-pi | 可扩展 Agent 内核 | 扩展 API + 成本工程（prompt-cache 感知裁剪），被嵌入集成的基础设施定位 |
| DeepSeek TUI | 社区驱动轻量 TUI | 贡献者单日多 PR，但维护者“禁 agent 加测试/注释”新规方向存争议 |

## 5. 社区热度与成熟度

- **热度第一梯队**：Pi（116 Issue 更新/日，且多为深度技术讨论）、OpenCode（Issue/PR 各 50）、Codex（问题驱动型高热，Pro 付费用户情绪压力大）。
- **成熟稳定期**：Claude Code（Issue 转向体验打磨与治理，PR 活跃度低，闭源模式限制社区贡献）、Copilot CLI（官方主导、社区 PR 近乎为零，依赖内部迭代）。
- **快速迭代期**：Gemini CLI、Qwen Code、oh-my-pi — 均呈现“当日问题当日修”的高响应特征，但 Qwen CI/发布流程不稳定（发布失败、CVE 审计连续失败）。
- **停滞/风险信号**：Kimi Code、DeepSeek Harness 零活动；DeepSeek TUI 性能回归三连（CPU/内存/滚动）且 0.10.2 迟迟未落地。

## 6. 值得关注的趋势信号

1. **安全从“功能”变“底线”**：全生态在同周期密集修复注入/绕过/沙箱失效，fail-closed 成为准入标准。对开发者的启示：自动化工作流中的 hook/沙箱必须验证其失效路径行为，而非仅验证正常路径。
2. **企业合规市场开启**：Claude Code 的 HIPAA 配置、Codex 的凭据掩码与审计日志、Gemini 的代理沙箱 PR，均指向受监管行业采购需求。合规能力将成为下一轮选型分水岭。
3. **成本工程成为竞争维度**：oh-my-pi 的缓存感知裁剪、Gemini 的 AST 感知工具链（36.6k tokens/turn 基线）、Codex 移除工具调用截断 — token 效率从优化项升级为核心架构考量。
4. **托管/持久化 Agent 是下一代形态**：Qwen Code 的 Managed Agent + K8s 运行时、Claude Code 的 Workflow、oh-my-pi 的 durable 会话，均预示 CLI 工具正从“交互式终端”演变为“长时任务基础设施”。
5. **Windows 缺口即机会**：跨所有工具的 Windows 问题集群表明该平台测试覆盖系统性不足，Windows 深度用户选型时应显著调低对各家宣传功能的预期，优先验证核心路径。
6. **升级需谨慎**：Codex 26.1002.x、Gemini v0.63.0 本日均曝严重回归，生产环境建议锁定版本、延迟 1-2 个补丁周期再跟进。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
（数据来源：github.com/anthropics/skills，截止 2026-10-09）

> 说明：本期热门 PR 的评论数数据缺失（undefined），以下排行综合 PR 更新活跃度、关联 Issue 讨论热度与功能影响力排序；所有列出的 PR 当前均为 **OPEN** 状态。

---

## 一、热门 Skills 排行（PR）

| # | Skill / PR | 功能与热点 | 状态 |
|---|---|---|---|
| 1 | **mcp-builder 修复** — [PR #1742](https://github.com/anthropics/skills/pull/1742) | 适配 `mcp>=2.0.0` 的 `streamable_http_client` 重命名与自定义 HTTP headers。关联 Issue #1668/#1390（评测对真实 MCP server 全部 0 分的问题），是 MCP 生态最痛的兼容性修复 | OPEN |
| 2 | **skill-creator 评测加固** — [PR #1298](https://github.com/anthropics/skills/pull/1298) | 隔离 trigger evals 的 worker 竞争、修复 Windows `select()` 失败，直接回应 Issues #1352/#1383（并行 worker 交叉匹配导致触发率≈0 的静默错误）| OPEN |
| 3 | **skill-creator eval viewer 安全加固** — [PR #1961](https://github.com/anthropics/skills/pull/1961) | 修复脚本逃逸、DNS rebinding、跨站 POST，呼应 Issue #1394（viewer.html XSS）。skill-creator 是全仓被审计最多的组件 | OPEN |
| 4 | **md2video-audio** — [PR #1703](https://github.com/anthropics/skills/pull/1703) | Markdown → Marp 幻灯片 → MP4 视频 + 拟人配音的零成本内容转换，内容创作者方向的高需求 Skill | OPEN |
| 5 | **Pyxel 复古游戏开发** — [PR #525](https://github.com/anthropics/skills/pull/525) | Pyxel 游戏的实现引导、无头输入驱动运行与帧级验证，存活超 7 个月、由 Pyxel 作者提交 | OPEN |
| 6 | **AWT (AI Watch Tester)** — [PR #822](https://github.com/anthropics/skills/pull/822) | 赋予 Claude 视觉 + 浏览器控制能力的零代码 E2E 测试生成，测试自动化方向代表 | OPEN |
| 7 | **Notion spec → 实现任务** — [PR #1245](https://github.com/anthropics/skills/pull/1245) | 将产品/技术 Spec 拆解为带验收标准的 Notion 任务，项目管理自动化 | OPEN |
| 8 | **skill-quality/security-analyzer** — [PR #83](https://github.com/anthropics/skills/pull/83) | 对 Skill 本身做五维质量分析与安全审计的"元 Skill"，与社区安全议题高度共振 | OPEN |

---

## 二、社区需求趋势（Issues 提炼）

1. **信任与安全机制**：[Issue #492](https://github.com/anthropics/skills/issues/492)（43 条评论，本期内最热）——社区 Skill 冒用 `anthropic/` 命名空间构成信任边界漏洞；[Issue #1175](https://github.com/anthropics/skills/issues/1175) 关注 SKILL.md 内写权限逻辑的安全性。**命名空间签名/验证是第一大诉求。**
2. **评测与 Skill 质量工具链**：#556、#1352、#1383、#1390、#1394 集中暴露 run_eval.py、benchmark、eval-viewer 的静默失败与 XSS——可靠的 Skill 触发评测框架需求强烈。
3. **组织级分发与共享**：[Issue #228](https://github.com/anthropics/skills/issues/228)（16 条评论）——组织内 Skill 库/直接分享链接，替代目前的 Slack 传 `.skill` 文件。
4. **上下文效率**：[Issue #1487](https://github.com/anthropics/skills/issues/1487)——claude-api Skill 一次注入 ~156k tokens 耗尽上下文；[Issue #1329](https://github.com/anthropics/skills/issues/1329) 提议 compact-memory 符号化压缩 agent 状态。**Skill 的按需加载/瘦身是普遍痛点。**
5. **新方向提案**：agent-governance（AI 治理，#412）、推理质量门禁流水线（#1385）、测试自动化（AWT）、HPC/Slurm 运维（#1615）、Web3 合约审计（#1771）——从个人生产力向**工程化、企业化场景**扩展。

---

## 三、高潜力待合并 Skills（活跃 OPEN PR）

- [PR #1742](https://github.com/anthropics/skills/pull/1742) — mcp-builder MCP2 兼容修复，10-08 仍有更新，修复高优 Bug
- [PR #1298](https://github.com/anthropics/skills/pull/1298) — skill-creator 评测隔离修复，覆盖多个已确认 Issue
- [PR #1681](https://github.com/anthropics/skills/pull/1681) — package_skill.py 直接执行修复（ModuleNotFoundError），10-08 更新
- [PR #1703](https://github.com/anthropics/skills/pull/1703) — md2video-audio，内容生成方向功能完整
- [PR #1245](https://github.com/anthropics/skills/pull/1245) — Notion spec 转实现，9-30 更新
- [PR #1730](https://github.com/anthropics/skills/pull/1730) — claude-api 死链修复（已 curl 验证），低风险易合并
- [PR #1961](https://github.com/anthropics/skills/pull/1961) / [PR #1980](https://github.com/anthropics/skills/pull/1980) — 两个安全加固 PR，与官方安全优先策略契合

---

## 四、生态洞察（一句话总结）

> 当前社区在 Skills 层面最集中的诉求是：**建立可信的 Skill 分发与安全边界（命名空间验证、代码审计），并让 skill-creator 评测工具链和 Skill 加载机制变得可靠、省上下文**——即生态正从"功能丰富"转向"质量、安全与可运营性"。

---

# Claude Code 社区动态日报（2026-10-09）

## 1. 今日速览

Claude Code 发布 **v2.1.295**，重点强化了 Hooks 安全语义（`onFailure: "block"`）并新增 OSC 7501 终端协议支持。社区今日最活跃的话题仍是多 Connector 账号支持（#27302，264 条评论）和模型行为问题（强制详细注释，#65961）。值得注意的是，今天新增了多个与 **Hooks 安全绕过**和 **Remote Control 会话恢复**相关的新 Issue，显示桌面端稳定性和 hook 可靠性是当前主要痛点。

## 2. 版本发布

### v2.1.295
- **`onFailure: "block"` 选项**：command 和 HTTP hooks 若无法启动、超时或异常退出，将阻断动作而非放行 — fail-closed 语义，对安全敏感工作流是重要改进
- **OSC 7501（Program Status Protocol）支持**：兼容终端可显示 Claude Code 运行状态

## 3. 社区热点 Issues

1. **[#27302](https://github.com/anthropics/claude-code/issues/27302)** — 多 Connector 账号支持（同一 connector、不同账号）。264 条评论 / 404 👍，长期高热度需求，企业多租户场景刚需。
2. **[#65961](https://github.com/anthropics/claude-code/issues/65961)** — Claude 默认生成冗长代码注释且无视停止指令。250 👍，影响产出代码质量的模型级行为问题。
3. **[#95125](https://github.com/anthropics/claude-code/issues/95125)** — 桌面端 Enter 换行 / Ctrl+Enter 提交的可配置键位请求，长提示词用户的普遍痛点。
4. **[#92434](https://github.com/anthropics/claude-code/issues/92434)** — Auto-compact 基于上一轮 token 计数决策，导致重注入的指令文件撑爆上下文窗口，有完整复现。
5. **[#95822](https://github.com/anthropics/claude-code/issues/95822)** — 短命令（如 `claude auth status`）启动 OAuth 刷新后提前退出，refresh token 被白白消耗，可能导致账号被登出。
6. **[#96221](https://github.com/anthropics/claude-code/issues/96221)** — Opus 5.5 模型选择器缺少 Fast mode 开关，疑似模型 catalog 数据缺失（模型本身支持）。
7. **[#79953](https://github.com/anthropics/claude-code/issues/79953)** — Workflow 内部 `agent()` 调用不受 PreToolUse hook 管控、无运行时预算限制，是自动化安全管控的盲区。
8. **[#87874](https://github.com/anthropics/claude-code/issues/87874)** — Subagent 编排缺乏并发模型（无 join、无取消语义），且语义在版本间静默变更，深度自动化用户的核心关切。
9. **[#98839](https://github.com/anthropics/claude-code/issues/98839)** — Cowork（web）插件重同步移动 hook 脚本导致会话永久阻塞，影响云端长会话可用性。
10. **[#100685](https://github.com/anthropics/claude-code/issues/100685)**（已关闭）— 用户质疑 bug 被归类为 "safety issue" 的标准不透明，反映分类机制沟通问题。

## 4. 重要 PR 进展

1. **[#85716](https://github.com/anthropics/claude-code/pull/85716)**（已关闭）— hookify 插件从祖先 `.claude` 目录加载规则，防止安全规则被静默绕过。
2. **[#84747](https://github.com/anthropics/claude-code/pull/84747)**（已关闭）— 修复 `load_rules()` 绕过事件过滤器的逻辑漏洞，规范规则评估范围。
3. **[#84711](https://github.com/anthropics/claude-code/pull/84711)**（已关闭）— 修复 YAML 注入和 symlink 凭据覆盖漏洞。
4. **[#84364](https://github.com/anthropics/claude-code/pull/84364)**（已关闭）— hookify PreToolUse 异常时 fail-closed（deny 而非放行），与今日新版的 `onFailure: "block"` 方向一致。
5. **[#84365](https://github.com/anthropics/claude-code/pull/84365)**（已关闭）— 允许任何用户的 thumbs down 阻止 issue 自动关闭，改进社区治理。
6. **[#100293](https://github.com/anthropics/claude-code/pull/100293)**（开放）— 新增 HIPAA 合规配置示例（settings-hipaa.json、managed-mcp-hipaa.json），面向医疗合规企业的数据外发管控。
7. **[#41447](https://github.com/anthropics/claude-code/pull/41447)**（开放，标志性玩笑 PR）— "open source claude code"，聚合了大量开源请求 issue。

> 注：过去 24 小时仅 7 个 PR 更新，其中 5 个已关闭（多为 hookify 安全修复系列），活跃度较低。

## 5. 功能需求趋势

- **桌面端体验**：Remote Control 会话恢复（#95491、#100114、#100694）、界面警告条可关闭（#100278、#100676）、键位自定义（#95125）— 今日新增 Issue 密集，是最活跃方向
- **多账号/认证**：Connector 多账号（#27302）、OAuth refresh token 管理（#95822）
- **Hooks 与自动化管控**：Workflow 内部 agent 管控（#79953）、hook 可靠性（#95440、#100696）、hook 阻断语义（#100695）
- **子代理编排**：并发模型、取消语义、多会话批量回复（#87874、#86963、#97746）
- **模型能力**：Opus 5.5 Fast mode 支持（#96221）、注释行为控制（#65961）
- **用量与成本透明度**：用量警告可配置（#97679）

## 6. 开发者关注点

1. **安全语义的 fail-open 风险**：多个 Issue/PR 聚焦 hook 异常时放行而非阻断 — v2.1.295 的 `onFailure: "block"` 正面回应了此诉求，但 #100695（被阻断的 prompt 仍发送到 API）表明仍有缺口。
2. **静默更新破坏会话**：桌面端 stealth auto-update 导致 Remote Control 丢失、移动端会话归档，是跨平台高频投诉。
3. **上下文管理不可靠**：auto-compact 时机错误（#92434）和上下文溢出后会话失联（#97232）影响长会话工作流。
4. **配置错误的静默失败**：agent `.md` 缺 `name:` 被静默跳过（#98058）这类"零反馈失败"模式消耗大量排障时间，社区呼吁更明确的启动校验与警告。
5. **UI 噪音**：Max effort 用量警告反复弹出（#100278、#100676）被用户视为骚扰，需要持久化的关闭选项。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-10-09

## 📌 今日速览

Windows 桌面端迎来新一轮严重问题爆发：**sandbox 初始化 sharing violation（os error 32）** 与 **windows-updater.node 崩溃（0xC0000005）** 相关 Issue 今日集中涌现，多个版本（26.1002.x）受影响，是目前社区最强烈的痛点。与此同时，团队发布了 **v0.162.0 正式版**（含 Git worktree 管理、Command Center 任务置中等新功能）并持续推进 v0.163.0 alpha 迭代；PR 侧集中在**线程已读状态、TUI 体验和遥测/可观测性**等基础设施完善。

---

## 🚀 版本发布

### [rust-v0.162.0](https://github.com/openai/codex/releases/tag/rust-v0.162.0)
- **Git worktree 工具**：可为受信任的本地项目创建和列出托管 Git worktrees（启用 worktrees 特性后生效，#50148）
- **Command Center 任务置中**：按 `p` 可固定任务，并在服务器支持时保留在共享 Pinned 分组（#51500）
- 终端导航与复制功能改进

### Alpha 版本
- [rust-v0.163.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.2)
- [rust-v0.163.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.1)
- [rust-v0.162.0-alpha.17.2](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.17.2)（说明 0.162 线仍有补丁迭代）

---

## 🔥 社区热点 Issues

### 1. [#51601](https://github.com/openai/codex/issues/51601) — Windows sandbox 校验自身运行时触发 sharing violation
**评论 97 · 👍 26**。26.1002.51308 版本所有命令执行均失败，sandbox 在校验自己正在使用的运行时文件时发生共享冲突。今日多个新 Issue（#51932、#52127、#52269、#52360、#52391、#52389）均指向同一根因（os error 32 / node_repl.exe），已形成明显的回归问题集群。

### 2. [#36040](https://github.com/openai/codex/issues/36040) — iOS Remote 仅列出近期有对话的项目
**评论 73**。iOS 远程控制配对 macOS 主机时的项目列表回归，自 7 月底持续未修复，是长期未解决的移动端核心体验问题。

### 3. [#49731](https://github.com/openai/codex/issues/49731) — WSL 模式下所有命令失败
**评论 32 · 👍 19**。"Run agent in WSL" 场景中 exec-server 删除 helper 目录导致 "No such file or directory"，WSL 用户基本无法使用。

### 4. [#33493](https://github.com/openai/codex/issues/33493) — Compaction v2 未限制图片负载，引发循环压缩
**评论 29**。图片密集型长会话因上下文中残留的 input_image 负载反复触发自动压缩，与 #24550 的 WebSocket 回退问题同属上下文管理痛点。

### 5. [#47577](https://github.com/openai/codex/issues/47577) — `@codex review` 静默忽略 fork PR
**👍 33**（今日最高）。GitHub 集成中 fork 来源的 PR 完全无评审反应，同仓库分支 PR 正常，9 月 20 日起回归。高 👍 说明影响面广。

### 6. [#48938](https://github.com/openai/codex/issues/48938) — Windows 渲染器反复崩溃与严重输入延迟
**评论 24**。Pro 付费用户对稳定性问题的强烈投诉，反映了重度用户对 Windows 端质量的不满情绪。

### 7. [#51824](https://github.com/openai/codex/issues/51824) — ChatGPT Windows 在 windows-updater.node 崩溃
**评论 20**。与 [#51340](https://github.com/openai/codex/issues/51340)、[#52029](https://github.com/openai/codex/issues/52029)（相同偏移 0x1A779/0x1A789）构成第二个崩溃集群：应用启动 30–60 秒后闪退，重装无效。

### 8. [#46114](https://github.com/openai/codex/issues/46114) — 提权 sandbox 报 "requires effective :root read access"
**评论 16 · 👍 5**。所有线程初始化失败，修复、重置、管理员重启均无效，长期悬而未决。

### 9. [#50769](https://github.com/openai/codex/issues/50769) — Dots 授权跨任务不可靠
**评论 19**。用户已授权开发任务，但后续只读报告仍被旧授权范围阻塞，Dots 委托授权模型存在一致性缺陷（另见 [#50887](https://github.com/openai/codex/issues/50887)、[#51558](https://github.com/openai/codex/issues/51558)、[#50697](https://github.com/openai/codex/issues/50697)）。

### 10. [#24550](https://github.com/openai/codex/issues/24550) — 大图导致 Responses WebSocket 回退
**评论 15**。压缩后的 replacement_history 内联大图触发连接降级，是多模型大上下文场景的关键限制。

---

## 🔧 重要 PR 进展

1. [#52337](https://github.com/openai/codex/pull/52337) — 持久化线程已读状态（revision 校验更新），配合 [#52350](https://github.com/openai/codex/pull/52350)、[#52384](https://github.com/openai/codex/pull/52384)、[#52395](https://github.com/openai/codex/pull/52395)，构成完整的多窗口已读/未读同步方案。
2. [#52268](https://github.com/openai/codex/pull/52268) — 取消工具调用元数据 8 KiB / 32 KiB 截断限制，保留完整执行记录，利于审计与回放。
3. [#52302](https://github.com/openai/codex/pull/52302) — 沙箱代理会话的可选凭据掩码（credential masking），默认关闭，提升企业场景安全性。
4. [#52381](https://github.com/openai/codex/pull/52381) — gRPC Code Mode 保留每会话路由 token，确保会话状态路由到正确主机。
5. [#52363](https://github.com/openai/codex/pull/52363) — Realtime v3 新增 16 个语音并独立校验。
6. [#52273](https://github.com/openai/codex/pull/52273) — TUI 可配置 leader 快捷键前缀（默认 `ctrl-x`），Vim 风格操作体验。
7. [#52270](https://github.com/openai/codex/pull/52270) — TUI footer 支持鼠标选中文本复制。
8. [#52278](https://github.com/openai/codex/pull/52278) — 关闭 analytics 时不再影响自定义 OTLP metrics exporter，自建可观测性独立生效。
9. [#52277](https://github.com/openai/codex/pull/52277) — 修复网络域名通配符匹配的 UTF-8 字节语义，`?` 在非 ASCII 主机上行为恢复正确。
10. [#52274](https://github.com/openai/codex/pull/52274) — Guardian 评审与后台评分的结构化追踪，含重试调度日志，可观测性增强。

其他值得注意：[#52325](https://github.com/openai/codex/pull/52325)（历史初始化元数据分类）、[#52304](https://github.com/openai/codex/pull/52304)（远程控制 RPC 偏好持久化）、[#52330](https://github.com/openai/codex/pull/52330)（修复终端超链接 remapping panic）。

---

## 📈 功能需求趋势

- **Dots / 委托任务编排**：授权一致性、本地任务回执、附件读取成为新高频方向（#50769、#50887、#51558、#50697、#50169）
- **Windows 平台稳定性**：sandbox 与更新器是当前最大规模的问题集群
- **上下文与多模态管理**：大图负载的压缩/传输问题持续受关注（#33493、#24550）
- **远程控制与多端协同**：iOS Remote 回归修复、RPC 偏好持久化
- **可观测性与审计**：OTLP exporter、结构化 tracing、完整工具调用记录

---

## ⚠️ 开发者关注点

1. **Windows 26.1002.x 建议暂缓升级**：os error 32 sandbox 故障与 updater 崩溃两个集群均无修复版本，受影响用户可关注 #51601 跟进。
2. **付费用户情绪压力**：#48938、#46690 等 Issue 显示 Pro 用户对 Windows 渲染器崩溃/内存泄漏（4–7 GB）积怨较深，官方响应速度成为焦点。
3. **沙箱与 Node 子进程的长期兼容问题**：#18473（stdout 捕获丢失）、#41175（spawnSync EPERM）自 4 月起仍未解决，影响 Linux/WSL 自动化工作流。
4. **企业级安全需求浮现**：凭据掩码、代理沙箱、结构化审计日志等 PR 显示项目正在向受控环境场景演进。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-09）

## 📰 今日速览

今日无新版本发布，但 v0.63.0 引发的 **yolo 模式回归问题**（#29682）成为最紧急的新 Issue，涉及安全警告误判对自动化流程的阻断。PR 方面，安全类修复密集合入，包括命令注入、路径穿越、权限校验等多个 P1 级修复；同时性能优化（ignore 过滤）和 A2A server 批量工具调用修复也在推进中。

---

## 🚨 社区热点 Issues（Top 10）

### 1. v0.63.0 破坏 yolo 模式（新，5 评论）
[#29682](https://github.com/google-gemini/gemini-cli/issues/29682) — 新版本中未受信命令标记检测（Untrusted Command Flags）在 yolo 模式下触发 CRITICAL SECURITY WARNING，直接阻断自动化工作流。刚发布一天即获 5 条评论，属版本回归类紧急问题，与新合入的 #29672 直接相关。

### 2. 子代理达到 MAX_TURNS 后误报成功（P1，13 评论）
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — `codebase_investigator` 子代理在未做任何分析就触及轮次上限时，仍报告 `status: success` / `Termination Reason: GOAL`，掩盖了中断事实。这是可观测性层面的核心缺陷，今日仍在活跃讨论。

### 3. 通用代理无限挂起（P1，8 评论，👍8）
[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — 主代理委派给 generalist agent 后挂起，连建文件夹这样的简单操作也会卡死一小时以上。👍 数说明影响面广。

### 4. grep 工具命令行注入漏洞（P2 安全，4 评论）
[#29627](https://github.com/google-gemini/gemini-cli/issues/29627) — 以连字符开头的搜索模式被直接作为位置参数传给 git grep / 系统 grep，可被注入任意命令行标志。与近期安全修复潮相呼应，值得关注。

### 5. Gemini 不主动使用 skills 和子代理（P2，7 评论）
[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — 用户反馈即使在高度相关的任务中，模型也不会自主调用自定义 skills/subagents，只在显式指令下才使用。这触及 agent 路由的核心体验问题。

### 6. 零依赖 OS 沙箱 + 执行后意图路由（P2 大型增强，9 评论）
[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 提议利用 Gemini 3 原生 bash 能力（grep/cat/sed/awk 链式调用），配合 OS 级沙箱在安全与体验间取得平衡。方向性架构提案，讨论热度高。

### 7. Browser Agent 忽略 settings.json 配置（P1，4 评论）
[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — Browser Agent 完全无视 `maxTurns` 等全局/项目级配置覆盖，`AgentRegistry` 初始化正确但未生效。配置一致性问题。

### 8. 超过 128 个工具时触发 400 错误（P2，3 评论）
[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — 启用工具过多时 API 直接报 400，社区期望 agent 能智能裁剪工具作用域。对重度扩展用户是硬阻断。

### 9. get-shit-done 输出 hook 导致崩溃（P1，3 评论）
[#22186](https://github.com/google-gemini/gemini-cli/issues/22186) — 输出 hook 在打印用户摘要阶段反复使 CLI 崩溃，影响核心工作流稳定性。

### 10. 浏览器子代理在 Wayland 下失败（P1，4 评论）
[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Linux Wayland 环境下 browser subagent 无法工作，但错误信息却报 "GOAL" 完成——与 #22323 的“假成功”问题同源，值得合并排查。

---

## 🔧 重要 PR 进展（Top 10）

### 安全类（密集合入）

1. **[#29480](https://github.com/google-gemini/gemini-cli/pull/29480)** (P1，已关闭) — 修复 Windows 命令安全校验绕过：`git diff --output=<path>` 等写/执行标志可静默覆盖任意文件，甚至可被上下文文件中的提示注入利用。
2. **[#29479](https://github.com/google-gemini/gemini-cli/pull/29479)** (P1，已关闭) — 修复 checkpoint 路径穿越：`x/../../secret` 类标签可导致 checkpoint 目录外文件被读取/删除。
3. **[#29491](https://github.com/google-gemini/gemini-cli/pull/29491)** (P1，已关闭) — 修复 CI 权限漏洞：任何已认证用户在已合并 PR 上发 `/patch` 即可触发发布调度，现增加显式写权限校验。
4. **[#29492](https://github.com/google-gemini/gemini-cli/pull/29492)** (已关闭) — 修复 sandbox 构建中的 shell 插值问题，含元字符的 checkout 路径可导致任意命令执行。
5. **[#29672](https://github.com/google-gemini/gemini-cli/pull/29672)** (已关闭) — 消除未受信命令标记与复合循环检测的误报（`ls -ld`、`grep -rn` 等无害标志），**直接关联 #29682 的 yolo 模式回归**。

### 核心功能与修复

6. **[#29490](https://github.com/google-gemini/gemini-cli/pull/29490)** (P1，已关闭) — 修复会话恢复（`-r`）时工具响应被重复回放导致的历史污染。
7. **[#29476](https://github.com/google-gemini/gemini-cli/pull/29476)** (P1，已关闭) — 修复 IDE 集成终端下 Enter 按键确认无响应的挂起问题。
8. **[#29489](https://github.com/google-gemini/gemini-cli/pull/29489)** (P2，已关闭) — 阻止 Flash-Lite 模型继承 `ThinkingLevel.HIGH`，引入 `thinkingBudget: 0` 配置，保障轻量模型的低延迟定位。
9. **[#29683](https://github.com/google-gemini/gemini-cli/pull/29683)** (P1，开放中) — A2A server 中将工具拒绝隔离到当前调用，避免批量文件修改中一个被拒导致整批失败。
10. **[#29582](https://github.com/google-gemini/gemini-cli/pull/29582)** (P1，开放中) — 性能优化：层级目录状态记忆化 + 通配符子树剪枝 + symlink 缓存，解决大仓库多秒级阻塞延迟。

其他值得留意：[#29481](https://github.com/google-gemini/gemini-cli/pull/29481)（配置文件不可读时静默重新启用所有已禁用扩展）、[#29482](https://github.com/google-gemini/gemini-cli/pull/29482)（可选的快速 Decision Gate 前置分类器）、[#29678](https://github.com/google-gemini/gemini-cli/pull/29678)（.env 加载顺序竞态修复）。

---

## 📈 功能需求趋势

1. **Agent 路由与自主性**：子代理/skills 的自主调用率（#21968）、假成功上报（#22323、#21983）、代理挂起（#21409）是 workstream-rollup 中最集中的主题。
2. **安全与沙箱**：社区同时追求“释放模型原生 bash 能力”（#19873）与“约束破坏性行为”（#22672），零依赖沙箱方案讨论热烈；近期安全 PR 密集合入也印证这是官方重点。
3. **AST 感知工具链**（#22745、#22746、#19561）：通过 AST 感知的文件读取/搜索/代码库映射减少 token 浪费（当前基线约 36.6k tokens/turn），是性能方向的重要实验线。
4. **浏览器代理健壮性**（#22267、#22232）：配置覆盖失效、会话锁恢复等实用性问题。
5. **MCP/OAuth 生态**：远程 MCP 服务器的 OAuth 刷新（#29578）、ACP 权限请求信息完善（#29596）、扩展 Gallery 索引延迟（#29356）。

---

## 🔍 开发者关注点（痛点总结）

- **版本回归风险高**：v0.63.0 的安全检测误报直接破坏 yolo 模式（#29682），自动升级用户首当其冲，建议生产环境暂缓升级并关注补丁版本。
- **子代理可观测性不足**：假成功报告、bugreport 缺少子代理上下文（#21763）、轨迹难以查看（#22598），调试子代理行为成本高。
- **稳定性问题反复**：挂起（#21409、#22465）、hook 崩溃（#22186）等长时间未解，多条 P1 已挂 `need-retesting` 数月。
- **上下文/工具管理**：工具数超限即 400（#24246）、大文件读取“灌水”上下文（#19561）、临时脚本乱建（#23571）。
- **环境兼容性**：Wayland（#21983）、Podman 沙箱（#29408）、symlink 代理文件（#20079）等非标准环境下问题偏多。

---
*数据来源：github.com/google-gemini/gemini-cli | 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-09** | 数据来源：github.com/github/copilot-cli

---

## 一、今日速览

过去 24 小时 Copilot CLI 密集发布了 v1.0.94-4 至 v1.0.95-2 共 5 个版本，重点修复 MCP 配置恢复、沙箱凭证配置，并引入 macOS 原生 Entra 认证。社区方面，issue 活跃度较高（47 条更新），沙箱安全性（ACP 模式下沙箱失效）、MCP 服务器管理与跨平台兼容性（Windows 崩溃、Asahi Linux）成为讨论焦点。此外，社区贡献者提交了修复安装脚本校验漏洞的安全 PR，值得关注。

---

## 二、版本发布

| 版本 | 类型 | 要点 |
|---|---|---|
| [v1.0.95-2](github/copilot-cli/releases) | Fixed | `copilot config` 支持沙箱凭证 `injectHosts` 键，Bash/Zsh/Fish 下支持键名补全 |
| [v1.0.95-1](github/copilot-cli/releases) | Added | macOS 可用时使用原生 Microsoft Entra broker 认证，失败时回退浏览器 |
| [v1.0.95-0](github/copilot-cli/releases) | Improved/Fixed | 托管插件安装失败后改为每小时或策略变更时重试；`--context` 现在正确作用于新建与恢复的 ACP 会话 |
| [v1.0.94 / 94-4 / 94-5](github/copilot-cli/releases) | Fixed | 新增 Claude Haiku 5.5 模型选择；`copilot mcp add` 可从中断的配置初始化中恢复；MCP enable/disable 在服务器发现前即可工作；Assisted permissions 将 shell 代码发送给权限判定器，减少不必要的手动审批 |

---

## 三、社区热点 Issues（Top 10）

1. **[#770](github/copilot-cli Issue #770)** Claude Opus 4.5 处理 prompt 时冻结，连续 3 次各消耗 3 倍 premium 请求（16 评论）。计费与冻结的耦合是社区长期痛点，现已关闭。
2. **[#892](github/copilot-cli Issue #892)** 沙箱功能请求：限制 CLI 仅访问指定工作目录（👍49，12 评论）。高票需求，已随沙箱能力落地而关闭，与近期多个沙箱相关 issue 呼应。
3. **[#1941](github/copilot-cli Issue #1941)** 大量 `CAPIError: 400 The requested model is not supported` 报错（13 评论），反映模型路由稳定性问题。
4. **[#4998](github/copilot-cli Issue #4998)** macOS 更新/重启后 `.mcp-writer.binding` 保留过期设备 ID 导致 CLI 完全不可用（10 评论，👍11），影响面广的严重 bug，已关闭。
5. **[#3709](github/copilot-cli Issue #3709)** 开放中：支持在一个会话内通过 `/model` 切换多模型（含 BYOK/本地 provider）（👍34）。BYOK 用户核心诉求。
6. **[#4802](github/copilot-cli Issue #4802)** 疑似 Assisted Permissions 导致 PRU 配额被清零，涉及计费公平性，仍在 triage。
7. **[#5091](github/copilot-cli Issue #5091)** 会话 prompt 全部排队不执行、MCP 反复重连，重启无效——可靠性新报。
8. **[#5092](github/copilot-cli Issue #5092)** 秘密脱敏（redaction）损坏 JSON 输出：工具结果含 `Bearer ` 等无害字符串时 `--output-format json` 输出非法 JSON，影响自动化集成。
9. **[#5089](github/copilot-cli Issue #5089)** ⚠️ 安全相关：ACP 模式忽略 `--sandbox` 与 `sandbox.enabled`，shell 命令在未沙箱化状态下运行。与 #892 的沙箱需求形成对照，建议优先处理。
10. **[#5088](github/copilot-cli Issue #5088)** Windows 首次 Entra broker (WAM) 登录时 msalruntime.dll 访问违例崩溃——恰与 v1.0.95-1 新增的原生 Entra 认证相关，新功能引入的回归风险需观察。

其他值得关注：[#5079](github/copilot-cli Issue #5079)（MCP 协议 ping 与 refresh token 复用）、[#4977](github/copilot-cli Issue #4977)（Asahi Linux 16KB 页下 ripgrep 崩溃）、[#3981](github/copilot-cli Issue #3981)（Windows 剪贴板失效）。

---

## 四、重要 PR 进展

过去 24 小时仅 1 条 PR 更新：

1. **[#5093](github/copilot-cli PR #5093)** `install: verify the checksum entry matching the downloaded tarball`
   修复安装脚本校验漏洞：当前 `sha256sum -c --ignore-missing SHA256SUMS.txt` 在下载的 tarball 不在清单中时会产生"空验证"（vacuous verification），即报告成功但实际未校验任何内容。该 PR 确保只校验与实际下载文件匹配的条目，属于供应链安全加固，建议尽快合入。

---

## 五、功能需求趋势

- **沙箱与安全**：文件系统沙箱（#892）、沙箱凭证注入（v1.0.95-2）、ACP 沙箱失效（#5089）——安全隔离是当前最活跃的主线。
- **MCP 生态成熟度**：懒加载 MCP 服务器（#2901，👍17）、MCP 反复重连（#5091）、过多 MCP 导致上下文持续压缩（#3024）。
- **多模型/BYOK**：会话内切换模型与本地 provider（#3709，👍34）、Claude Haiku 5.5 已加入——模型灵活性需求持续升温。
- **可观测性与计费**：OTel span 缺失计费属性（#4224、#4858）、premium 请求消耗控制（#1988、#4802）。
- **平台兼容性**：Windows PowerShell profile（#1436）、Asahi Linux ARM64（#4977）、macOS 设备 ID（#4998）。
- **UX 打磨**：启动加载异步化（#5090）、`/skills` 文本复制（#3741）、单选/多选 UI 区分（#5087）。

---

## 六、开发者关注点

1. **计费公平性**是最大情绪点：模型冻结/崩溃仍扣 premium 请求（#770）、PRU 被异常清零（#4802），用户强烈要求失败请求不计费。
2. **沙箱信任缺口**：沙箱功能快速迭代，但 ACP 模式下完全失效（#5089）和 `/ide` 沙箱内失效（#4909）削弱了用户信任。
3. **MCP 稳定性**：从配置初始化恢复到重复重连、启动耗时，MCP 管理的健壮性与性能是高频抱怨。
4. **自动化集成受阻**：JSON 输出被脱敏逻辑破坏（#5092）、ACP 会话索引回归（#5053）、`--resume` ID 混淆（#4130），影响 CI/脚本化使用场景。
5. **新认证路径的回归风险**：macOS 原生 Entra broker 刚发布，Windows WAM 崩溃（#5088）提示跨平台认证实现需要更多测试覆盖。

---
*本报告基于过去 24 小时 GitHub 公开数据自动汇总，链接请以 `github.com/github/copilot-cli` 仓库内对应编号为准。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-09

## 1. 今日速览

今日无新版本发布，但社区活跃度依然很高：50 条 Issue 与 50 条 PR 在过去 24 小时内有更新。重点动态集中在 **Desktop 端稳定性问题集中收敛**（大量 pending close）、**浏览器工具链大重构**（PR #53861）以及 **Vertex Mistral 路由落地**（PR #54058）。此外 `@rekram1-node` 单日提交多个 PR，涵盖性能、UI 细节与 token 限制续写能力。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues

1. **[#53841](https://github.com/anomalyco/opencode/issues/53841)** 多模型/多提供商间歇性报 `Endpoint is unavailable`（7 评论，已关闭待确认）——影响面广的上游请求失败，是本日讨论最多的 Issue。

2. **[#53011](https://github.com/anomalyco/opencode/issues/53011)** `edit` 工具数字替换时重复插入变更值（6 评论，仍开放）——`640 → 900900` 的诡异重复（观察到的重复次数 2x–129x），直击核心编辑工具可靠性，尚无修复。

3. **[#53109](https://github.com/anomalyco/opencode/issues/53109)** 上下文尾部截断拆散 tool-call 组导致 HTTP 400（5 评论，开放）——严格 OpenAI 兼容网关下每一轮都会卡住会话，属于协议层设计缺陷。

4. **[#53426](https://github.com/anomalyco/opencode/issues/53426)** Kimi K3 via NVIDIA NIM 思考阶段无限卡死（5 评论，开放）——Windows CLI + Desktop 均复现，清缓存无效，社区尚在排查。

5. **[#53862](https://github.com/anomalyco/opencode/issues/53862)** 运行中执行 `/compact` 吞掉排队 prompt（4 评论，待关闭）——压缩摘要覆盖了尚未回答的用户消息，交互语义问题值得注意。

6. **[#53840](https://github.com/anomalyco/opencode/issues/53840)** Anthropic 协议无法往返 `openrouter:tool_search`（4 评论，待关闭）——OpenCode 在未配置 OpenRouter 时也注入该服务端工具，导致 websearch 全挂。

7. **[#48093](https://github.com/anomalyco/opencode/issues/48093)** opencode-go + deepseek-v4-flash 长会话返回 400 且错误体不透明（4 评论，开放）——~93k token 上下文的续会问题，错误信息完全无法定位。

8. **[#49085](https://github.com/anomalyco/opencode/issues/49085)** CLI 从编辑器扩展启动报 `--port` 未识别（👍 19，开放）——本日点赞最多的 Issue，直接影响 VSCode 扩展集成路径。

9. **[#51828](https://github.com/anomalyco/opencode/issues/51828)** 60 分钟位置不活跃驱逐 SIGTERM 杀死活跃后台 shell（3 评论，开放）——服务进程未死但 Shell/Pty 图被拆除，长时间任务场景的隐患。

10. **[#53857](https://github.com/anomalyco/opencode/issues/53857)** TUI i18n 基础设施提案（4 评论，待关闭）——TUI 约 700–1000 条硬编码英文字符串，i18n 落地是国际化社区的重要信号。

---

## 4. 重要 PR 进展

1. **[#53861](https://github.com/anomalyco/opencode/pull/53861)** 重构 agent 浏览器工具：基于 offscreen tabs、locators 和真实等待——数据驱动（96 会话、29% 子调用失败率），解决隐藏标签页不渲染等根因，本日最重要的功能 PR。

2. **[#54058](https://github.com/anomalyco/opencode/pull/54058)** 新增 Vertex Mistral 路由（已合并）——落地 Issue #49741，含适配 Vertex 422 的 body 调整。

3. **[#54060](https://github.com/anomalyco/opencode/pull/54060)** 恢复 Desktop 快速冷启动（已合并）——Windows 冷启动 Home 就绪时间从 44.8s 降至 9.7s，效果显著。

4. **[#53876](https://github.com/anomalyco/opencode/pull/53876)** 输出 token 上限后续写响应（开放）——`stop_reason: length` 时注入合成指令继续输出，实用性很强的新能力。

5. **[#53826](https://github.com/anomalyco/opencode/pull/53826)** 在 Desktop/TUI 时间线展示会话执行错误（已合并），但相关投影改动被 **[#54061](https://github.com/anomalyco/opencode/pull/54061)** 部分回滚——`/agent`、`/model` 后 stranded prompt 处理回归，值得关注回滚原因。

6. **[#53350](https://github.com/anomalyco/opencode/pull/53350)** 修复缺失会话的删除流程（开放）——typed-404 删除回滚问题。

7. **[#53934](https://github.com/anomalyco/opencode/pull/53934)** TUI 剪贴板复制真实反馈（开放）——修复“提示已复制但实际未复制”的误导性 toast。

8. **[#53711](https://github.com/anomalyco/opencode/pull/53711)** locale 截断保留字素簇（开放）——修复 `str.slice` 按 UTF-16 码元切分导致的 emoji/CJK 破碎。

9. **[#51482](https://github.com/anomalyco/opencode/pull/51482)** 支持 AI SDK v4 媒体输入（开放）——修复 v4 provider 将工具图片序列化为 null 的问题。

10. **[#52075](https://github.com/anomalyco/opencode/pull/52075)** ACP 支持 `--url` 附着到运行中的 server（开放）——改善多客户端事件流可见性（关联 #46733）。

---

## 5. 功能需求趋势

- **提供商/模型广度**：Vertex Mistral、Google Vertex OpenAI 兼容模型（#49741）、NVIDIA NIM、opencode-go 网关模型——社区对 provider 矩阵扩展诉求持续强烈。
- **桌面端稳定性**：后台服务 70s 重启（#53849）、renderer 空转（#53859）、静默退出（#53469）、长文本粘贴挂死（#38932）——Desktop 2.0.x 是当前质量攻坚焦点。
- **上下文管理可靠性**：compact 吞 prompt、尾部截断破坏 tool-call 组、token 上限续写（PR #53876）。
- **国际化（i18n）**：TUI 全量 i18n 提案（#53857）显示多语言支持进入规划。
- **IDE / 编辑器集成**：`--port` 标志失败（#49085）反映 VSCode 扩展集成是高优先级路径。
- **输出体验**：Clean Output Mode（#37003，👍 3）、时间线文件链接确定性检测（PR #53641）。

---

## 6. 开发者关注点

- **错误可观测性不足**：多个 Issue 反馈失败信息不透明（#48093 的裸错误体、#53469 零崩溃日志），诊断体验是普遍痛点。
- **核心工具可靠性**：`edit` 数字重复插入（#53011）动摇了对基础文件编辑能力的信任，且仍未关闭。
- **长时间会话/大项目场景**：大 untracked 目录导致 `Snapshot.capture()` 卡死（#48657）、60 分钟后台 shell 被杀（#51828）、~93k token 续会 400——长任务场景稳定性短板明显。
- **协议兼容边界**：对严格 OpenAI 兼容网关的 tool-call 序列校验（#53109）、Anthropic 协议与 server tool 的往返（#53840）暴露了多协议适配的脆弱点。
- **配置/权限一致性**：`/skills` 显示已删除和已禁用技能（#41030）、plugin 拿到 placeholder `limit.context`（#53477）——插件与配置生命周期需要更严格的同步机制。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-10-09）

## 1. 今日速览

今日无新版本发布（v0.25.1-preview.1 发布流程昨日失败后已处理关闭）。社区焦点高度集中在 **Managed Agent 双路径架构**的推进上——Kubernetes 工具运行时（#13395）、H4b 子 Session 运行时（PR #13550）和 Stage D 持久化生命周期均有实质进展。同时曝出一个 **P1 级安全问题**：daemon 的 git worktree guard 在 heredoc 喂给 shell/解释器时仍会执行被剥离的代码体，修复 PR 已当日提交（#13724）。

---

## 2. 版本发布

过去 24 小时无正式 Release。

---

## 3. 社区热点 Issues

**1. [#12380](https://github.com/QwenLM/qwen-code/issues/12380) Managed Agent 双路径架构提案（50 评论）**
项目核心路线图讨论，定义分阶段交付的 Managed Agent 架构：Session 持久化所有权、Workspace 绑定、可恢复的工具执行与稳定的 WebSocket 通道。持续占据讨论热度榜首。

**2. [#12867](https://github.com/QwenLM/qwen-code/issues/12867) Stage D 后续：持久生命周期 / Turns / Actions / AgentDefinition（19 评论）**
@doudouOUC 与 @wenshao 协作推进 #12380 的 Stage D 落地，涵盖 `java_durable` 准入配置和 AgentDefinition 契约。

**3. [#13395](https://github.com/QwenLM/qwen-code/issues/13395) Kubernetes 工具运行时追踪（16 评论）**
今日更新进度：Draft PR #13526 修正跨平台交付门禁问题，是平台化分发路线的关键节点。

**4. [#13705](https://github.com/QwenLM/qwen-code/issues/13705) 【P1 安全】daemon worktree guard 的 heredoc 执行漏洞（4 评论）**
`bash <<'EOF'` 这类 heredoc 的 body 会被当作数据剥离，但当接收方是 shell/解释器时 body 就是程序——攻击面被低估。当日已有修复 PR #13724，响应速度值得肯定。

**5. [#13650](https://github.com/QwenLM/qwen-code/issues/13650) 【P1】Hosted Session journal 在跨 activation 续期故障后永久死亡（4 评论）**
控制面宕机跨越一次 activation renewal 会导致 journal 永久失效，后续所有操作返回 503 且无法恢复。托管服务可用性的核心风险。

**6. [#13689](https://github.com/QwenLM/qwen-code/issues/13689) Subagent 定义中的 `${identifier}` 导致 templateString 崩溃（5 评论）**
`.qwen/agents/*.md` 中即使代码块内文档性地包含 `${...}` 也会使子代理启动失败，影响面广、易触发。

**7. [#13492](https://github.com/QwenLM/qwen-code/issues/13492) XML 工具调用恢复丢弃含引号标记的外层调用（8 评论）**
#13515 已合并修复部分场景，剩余外层调用恢复依赖 PR #13579，处于 in-review。

**8. [#13663](https://github.com/QwenLM/qwen-code/issues/13663) Windows 上 browser-use skill 完全不可用（4 评论）**
Native Messaging host 仅注册 macOS/Linux，Windows 用户得到的是无法生效的安装指引；PR #13675 已将提示改为诚实报错。

**9. [#13078](https://github.com/QwenLM/qwen-code/issues/13078) 每日依赖 CVE 审计持续失败（15 评论）**
连续多日失败的定时安全审计仍未关闭，需关注是否有未处理的高危漏洞。

**10. [#13709](https://github.com/QwenLM/qwen-code/issues/13709) / [#13708](https://github.com/QwenLM/qwen-code/issues/13708) H4b 子 Session 运行时遗留问题（各 3 评论）**
@wenshao 对 PR #13550 的自我审查产物：前台子调用不可 checkpoint 恢复、PostToolUse 已知未来挂载未在子准入时计数，均属多代理一致性问题。

---

## 4. 重要 PR 进展

**1. [#13550](https://github.com/QwenLM/qwen-code/pull/13550) H4b 子 Session 运行时**
Managed Agent 多代理架构核心切片，实现子代理运行时与子接受记录契约。

**2. [#13583](https://github.com/QwenLM/qwen-code/pull/13583) A2A 协作迁移至 chat sessions**
删除旧的 thread 后端，多代理协作全面切换到 Session 机制，架构瘦身的关键一步。

**3. [#13724](https://github.com/QwenLM/qwen-code/pull/13724) heredoc 喂 shell 解释器时 fail-closed**
当日问题当日修，配合 #13705 解决安全漏洞。

**4. [#13530](https://github.com/QwenLM/qwen-code/pull/13530) AgentDefinition 固定版本执行**
Session 创建时固定 agent ID/revision/digest，重放保持原始 pin，实现可审计的代理配置。

**5. [#13654](https://github.com/QwenLM/qwen-code/pull/13654) 工具发布异步验证**
将发布回读与流验证移至持久后台 worker，上传提交即返回 202，提升吞吐。

**6. [#13674](https://github.com/QwenLM/qwen-code/pull/13674) 公共前台 Shell 准入（默认关闭）**
公开 REST/WebShell Workspace Session 可选用前台 Shell profile，强制审批模式。

**7. [#13579](https://github.com/QwenLM/qwen-code/pull/13579) 恢复含引号调用内容的外层 XML 调用**
#13492 的剩余修复，保持引号内标记为惰性数据。

**8. [#12280](https://github.com/QwenLM/qwen-code/pull/12280) 引号隐藏异步操作符时保留 Write deny 规则**
修复了可绕过 `deny` 规则覆写受保护文件的提权路径，安全相关。

**9. [#13675](https://github.com/QwenLM/qwen-code/pull/13675) browser-use 在 Windows 上诚实报“不支持”**
短期止血方案，避免误导用户。

**10. [#13128](https://github.com/QwenLM/qwen-code/pull/13128) LSP 诊断失败时显式报错**
杜绝“诊断拿不到却报 clean”的假阴性，对代码质量信任度至关重要。

其他值得关注：#13716（Web Shell 浏览历史轨迹窗口）、#13718（下载 changed 状态的 workspace artifacts）、#13665（非交互 `/update` 尊重 enableAutoUpdate 设置）。

---

## 5. 功能需求趋势

- **Managed Agent / 平台化分发（最热）**：#12380、#12867、#13395、#13617、#13674 等大量 issue 围绕 Session 持久化、Kubernetes 运行时、托管工作区展开，是当前绝对主线。
- **多代理（Multi-agent）与 A2A**：H4b 子 Session 运行时、A2A 迁移到 sessions、Session handover 命令。
- **权限与安全**：AUTO 模式环境配置命令（#13691）、heredoc 执行漏洞、deny 规则绕过、CVE 审计。
- **Windows / 跨平台体验**：Native Messaging、ConPTY hook 窗口最小化（#13662）、ARM64 ripgrep（#13704）、BOM 解析（#13710）。
- **内存与 Token 效率**：auto-memory 提取冷却策略（#13004）、工具结果尺寸统计（#13652/#13719）。

---

## 6. 开发者关注点

- **托管服务的可靠性**：journal 永久死亡（#13650）、checkpoint 恢复缺口（#13708）表明跨故障恢复仍是薄弱环节。
- **Shell/命令解析的安全边界**：heredoc、引号、异步操作符等边缘场景反复出现绕过 deny 规则的问题，解析器健壮性是长期战场。
- **Windows 一等公民地位不足**：多个平台级 bug 集中在 Windows（browser-use、hooks 窗口、MCP 导入 BOM），社区对 Windows 支持质量不满。
- **模板/标记语言转义**：`${identifier}`、`</state_snapshot>` 等字面内容被误解析为模板或标记，说明 prompt 渲染管道需要更强的上下文感知。
- **CI/发布稳定性**：发布 workflow 与主分支 CI 失败较频繁（#13696、#13702、#12714），依赖自动化修复循环（autofix）运转但存在积压。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（Codewhale）社区动态日报 · 2026-10-09

## 一、今日速览

今日无新版本发布，但 **0.10.2 候选 PR #6907** 持续推进，集成了 Terminal dock、shell 等待控制和 Runtime 恢复修复等重大功能。社区贡献者 @SparkofSpike 一日连发三个针对性修复 PR（shell 重定向误拦截、网络策略热加载、goal 里程碑交还），同时多位外部贡献者的 fixes 被合并，社区参与度明显上升。性能问题（CPU 回归、内存无上限、滚动卡顿）仍是讨论焦点。

---

## 二、版本发布

过去 24 小时无新 Release（最新已发布版本仍为 v0.10.1，0.10.2 处于候选阶段）。

---

## 三、社区热点 Issues

1. **#6931 — 0.10.2：所有 Bash/shell 操作需可检查、可停止**
   针对大量 `run` 卡片场景下，用户无法可靠查看/终止仍在运行的静默任务。这是 0.10.2 的核心 UX 需求，今日新建。
   [链接](https://github.com/codewhale-hq/Codewhale/issues/6931)

2. **#6925 — 修复 ChatGPT 登录被"不支持的 originator 参数"拒绝**
   0.10.1 的 ChatGPT 登录在授权前即 HTTP 400 失败，排查已隔离出多余的查询参数，正在 0.10.2 修复中。
   [链接](https://github.com/codewhale-hq/Codewhale/issues/6925)

3. **#6842 — 会话 journal 无上限：compaction 后旧版本消息仍留在内存**
   深度技术分析指出内存增长与 compaction 机制的矛盾，是长会话用户的核心痛点。
   [链接](https://github.com/codewhale-hq/Codewhale/issues/6842)

4. **#6728 — CPU 使用率回归：v0.9.12 → v0.10.0 逐版恶化**
   FreeBSD 用户基于二进制分析确认性能回归趋势，跨三个版本的量化证据很有说服力。
   [链接](https://github.com/codewhale-hq/Codewhale/issues/6728)

5. **#6652 — TUI 长时间运行后滚动卡顿（果冻感）**
   可稳定复现（约 3-5 小时），影响日常使用体验的典型性能问题。
   [链接](https://github.com/codewhale-hq/Codewhale/issues/6652)

6. **#6866 — MCP 启动服务器失败/恢复时应向模型发送简报**
   优秀的设计讨论：工具静默消失导致模型调用 `unknown tool`，提出失败与恢复时都应通知模型。
   [链接](https://github.com/codewhale-hq/Codewhale/issues/6866)

7. **#6804 — 号召成立开源汉化组**
   社区自发组织翻译英文/日文开源文档，已有 6 条回复，体现社区生态建设的意愿。
   [链接](https://github.com/codewhale-hq/Codewhale/issues/6804)

8. **#6923 — Gemini 429 错误时应等待并自动重试**
   限流处理缺失，属于 provider 可靠性的高频诉求。
   [链接](https://github.com/codewhale-hq/Codewhale/issues/6923)

9. **#6865 — 拓宽 MCP OAuth 与 PKCE 登录的 300 秒浏览器回调窗口**
   人机交互认证等待被硬编码 300 秒封顶，实际使用中经常超时。
   [链接](https://github.com/codewhale-hq/Codewhale/issues/6865)

10. **#6914 — 实现规范的会话永久删除（含可恢复与能力协商）**
    Runtime API 目前只有 GET/PATCH，删除语义不完整，涉及数据安全设计。
    [链接](https://github.com/codewhale-hq/Codewhale/issues/6914)

其他动态：#6471（安全底线验证）、#6909（后台任务等待解绑）、#6926（xAI 登录巡检）已关闭，进入 PR #6907 候选。

---

## 四、重要 PR 进展

1. **#6907 — 0.10.2 主候选：Terminal dock、shell 等待控制、恢复与贡献者修复**
   本周期最重要 PR，聚合了 Terminal dock、Ctrl+B 等待解绑、共享 Runtime 恢复与主页重构。
   [链接](https://github.com/codewhale-hq/Codewhale/pull/6907)

2. **#6920 — Pet 模式成为主视图（已合并）**
   `/pet on` 将动画鲸鱼设为终端主视图，保留消息框、粘贴、权限控制等完整功能。
   [链接](https://github.com/codewhale-hq/Codewhale/pull/6920)

3. **#6929 — 修复：重定向不是命令分隔符**
   Windows 上含单独 `&` 的命令被安全门误拦截，修复 execpolicy 分类逻辑。
   [链接](https://github.com/codewhale-hq/Codewhale/pull/6929)

4. **#6928 — 修复：/network allow 无需重启即生效**
   网络策略在会话启动时被一次性捕获，导致"保存后重试仍被拒"，改为热重载。
   [链接](https://github.com/codewhale-hq/Codewhale/pull/6928)

5. **#6930 — 修复：允许模型在里程碑处交还 goal**
   agent 现在会一路跑到终止，方向错误时代价高昂；恢复"阶段完成即暂停"能力。
   [链接](https://github.com/codewhale-hq/Codewhale/pull/6930)

6. **#6924 — 每个 runtime store 一个控制端点、每个 workspace 一个 driver**
   解决 VS Code 扩展多 workspace 场景下控制 socket 冲突导致互拒的问题。
   [链接](https://github.com/codewhale-hq/Codewhale/pull/6924)

7. **#6921 — 修复：hook 日志写入状态库旁而非 cwd（已合并）**
   修复 app-server 在项目目录里写入 `.deepseek/events.jsonl` 污染项目的问题。
   [链接](https://github.com/codewhale-hq/Codewhale/pull/6921)

8. **#6922 — 更新五种语言包的 /provider 描述（已合并）**
   es-419、ja、pt-BR、vi、zh-Hans 翻译滞后于英文源文案的典型案例修复。
   [链接](https://github.com/codewhale-hq/Codewhale/pull/6922)

9. **#6927 — 维护者准则变更：除非明确要求，agent 不新增测试和代码注释（已合并）**
   创始人方向性决策，对贡献工作流影响深远，值得所有贡献者注意。
   [链接](https://github.com/codewhale-hq/Codewhale/pull/6927)

10. **#6917 — 夜间安全依赖升级（next 16.3.6 → 16.3.8）**
    修复导致 main 分支 `npm-audit` 失败的高危漏洞。
    [链接](https://github.com/codewhale-hq/Codewhale/pull/6917)

---

## 五、功能需求趋势

- **TUI 可观测性与可控性**：Terminal dock、shell 任务检查/停止、等待解绑（#6907、#6912、#6931、#6909）是 0.10.2 的主线。
- **Provider 认证与可靠性**：ChatGPT 登录修复、xAI 巡检、Gemini 429 重试、OAuth/PKCE 超时拓宽（#6925、#6926、#6923、#6865）。
- **性能与资源治理**：CPU 回归、内存无上限、滚动卡顿（#6728、#6842、#6652）持续升温。
- **上下文管理**：compaction 与会话保存的冲突、journal 边界（#6721、#6842）。
- **Runtime/嵌入式架构**：多 store 控制端点、遥测 surface 命名、会话删除 API（#6924、#6916、#6914）。
- **国际化**：本地化翻译滞后（#6922、#6919）与社区汉化倡议（#6804）。

## 六、开发者关注点

1. **性能回归是最大痛点**：从 CPU 占用到内存增长再到渲染卡顿，三个独立 issue 均指向近期版本的资源管理退化，建议维护者优先做性能基线对比。
2. **认证流程脆弱**：OAuth 回调窗口过短、登录参数错误、provider 限流无重试，多 provider 用户摩擦明显。
3. **安全门误伤**：Windows shell 分类过于保守（#6929），安全与易用性需再平衡。
4. **贡献流程变化**：新规禁止 agent 自动添加测试与注释（#6927），外部贡献者需适应新 AGENTS.md 准则；contribution-gate 类小修复 PR 是良好的入门路径。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报（2026-10-09）

## 📌 今日速览

今日无新版本发布，但社区活动极为活跃：24 小时内 Issues 更新 116 条、PR 更新 22 条。Windows 平台支持仍是讨论焦点（#7547 已积累 78 条评论），OpenRouter 模型可用性过滤、MCP OAuth 兼容性、DashScope 重试策略等方向出现了多个快速合并的修复 PR。

---

## 🔥 社区热点 Issues

1. **[#7547](https://github.com/earendil-works/pi/issues/7547) [Windows] 你在 Windows 上如何使用 Pi？遇到哪些问题？**
   讨论热度最高（78 条评论）。官方希望梳理 Windows 的多种运行方式，决定核心应聚焦哪些体验（bug 修复、开箱即用文档）vs. 下放给扩展。Windows 用户的必读帖。

2. **[#10645](https://github.com/earendil-works/pi/issues/10645) [inprogress] 编译版（Bun）中 resizeImage 返回 null，0.87.x 起所有图片附件被静默丢弃**
   影响 RPC 模式的嵌入方应用，且已标记 inprogress，修复在途中。涉及版本 0.87.1 至 1.0.4。

3. **[#10031](https://github.com/earendil-works/pi/issues/10031) [bug] ESC 中断思考后 Pi 偶发卡死在 "Working..."**
   已修复关闭。自 v0.84.0 起跨多台机器复现的高频问题，影响日常使用体验。

4. **[#9773](https://github.com/earendil-works/pi/issues/9773) `before_provider_request` 对压缩/摘要请求不触发**
   扩展 API 行为与文档不一致：压缩和分支摘要请求绕过该钩子，扩展无法拦截/改写 payload。与 #10267 一起反映扩展生命周期钩子的边界问题。

5. **[#10267](https://github.com/earendil-works/pi/issues/10267) 无用户提示的运行会丢弃 `before_agent_start` 注入的 prompt，导致全量重新计费**
   后台任务通知、plan-mode continue、retry、resume 均受影响，直接产生额外 token 成本，扩展开发者高度关注。

6. **[#10019](https://github.com/earendil-works/pi/issues/10019) Anthropic 订阅请求在 UTC :00/:30 挂起（200 + ping 但无 message_start）**
   用户在 Anthropic 订阅模式下遇到规律性会话冻结，疑似与服务端定时行为相关，尚在排查中。

7. **[#10605](https://github.com/earendil-works/pi/issues/10605) ChatGPT/OpenAI OAuth 403 错误**
   Plus 订阅用户重新登录仍报 "not eligible for subscription sharing"，OAuth 认证链路问题持续困扰用户（另见 #10666 已有修复 PR）。

8. **[#10656](https://github.com/earendil-works/pi/issues/10656) DashScope/Qwen 429 "insufficient_quota" 被误判为不可重试的计费错误**
   阿里云用该码表示瞬时限流，Pi 却按 OpenAI 语义终止重试。当天即有修复 PR #10677 关闭，响应速度值得点赞。

9. **[#9986](https://github.com/earendil-works/pi/issues/9986) 工具执行中途中止会留下未应答的 tool calls**
   批量工具执行时 abort，尾部调用从历史中消失且无错误提示，破坏会话完整性，影响 tool-use 回放与压缩。

10. **[#10415](https://github.com/earendil-works/pi/issues/10415) stdin 为未关闭的非 TTY 管道时启动无限挂起**
    `readPipedStdin()` 死锁问题，影响嵌入式/管道调用场景，对将 Pi 作为子进程集成的开发者是硬伤。

---

## 🔀 重要 PR 进展

1. **[#10677](https://github.com/earendil-works/pi/pull/10677)（已合并）fix(ai): DashScope 配额限流归类为可重试**
   修复 #10656，区分 OpenAI 计费耗尽与阿里云瞬时限流语义。

2. **[#10690](https://github.com/earendil-works/pi/pull/10690)（已合并）fix(mcp): OAuth Basic 凭证改为 form 编码**
   符合 RFC 6749 §2.3.1，修复 MCP OAuth token 请求兼容性问题。

3. **[#10689](https://github.com/earendil-works/pi/pull/10689)（已合并）fix(agent): prepareRequest 后同步工具声明**
   修复 `prepareRequest` 替换上下文后 tool 声明与实际可执行工具不一致的问题。

4. **[#10672](https://github.com/earendil-works/pi/pull/10672) / [#10569](https://github.com/earendil-works/pi/pull/10569) feat: OpenRouter 只列出当前 key 可用的模型**
   两个并行 PR 分别从不同角度实现 #10353（P0 需求）：通过认证的 `GET /models/user` 过滤模型列表，同步上下文长度、价格等元数据。

5. **[#10703](https://github.com/earendil-works/pi/pull/10703) feat(durable): 允许扩展标注中止的工具结果**
   增强持久会话中 abort 语义的可观测性，配套 #9986 一类问题。

6. **[#9501](https://github.com/earendil-works/pi/pull/9501) + [#9504](https://github.com/earendil-works/pi/pull/9504) fix: Windows shell 解析统一化**
   @petrroll 的系列 Windows 改进：从安装目录解析 shell、支持 Windows Store 别名（existsSync 对 Store alias 返回 EACCES 的 Node 问题），是 #7547 讨论的直接落地。

7. **[#10694](https://github.com/earendil-works/pi/pull/10694) fix(ai): OAuth 设备轮询在 slow_down 后调整余量**
   针对 WSL 时钟偏快导致 Copilot OAuth 永远不成功的 workaround，很有实战色彩。

8. **[#10680](https://github.com/earendil-works/pi/pull/10680)（已合并）fix: 支持 npm 12 的 pack JSON 输出格式变化**
   npm 12 将 `npm pack --json` 从数组改为对象，导致打包/发布流程全部失败，本 PR 兼容两种格式。

9. **[#10668](https://github.com/earendil-works/pi/pull/10668)（已合并）fix(tui): 扩展模态框打开时隐藏可见 overlay**
   修复 `ctx.ui.select()` 等模态被自定义 overlay 遮挡、焦点丢失的 UI 问题。

10. **[#10663](https://github.com/earendil-works/pi/pull/10663) feat(cli): `pi auth --continue`**
    通用认证续接入口，支持从其他环境（如 Web）发起的登录流程在 CLI 中完成，改善复杂环境（企业代理、远程服务器）下的登录体验。

---

## 📈 功能需求趋势

- **Windows 一等公民化**：#7547、#6817、#10616、#10631 显示 Windows 路径匹配、`.cmd` 执行、终端兼容性仍是最大摩擦来源，官方已开始系统性投入。
- **OpenRouter / 多供应商精细化**：模型可用性过滤（#10353）、真实计费成本（#10286）、各家 OAuth/限流语义差异，社区希望 Pi 对 provider 行为差异做更智能的适配。
- **扩展 API 完整性**：钩子覆盖范围（#9773、#10267）、overlay/UI 行为（#10648）、keybindings 单例（#4748）——扩展生态成熟期的典型打磨需求。
- **MCP 集成健壮性**：环境变量展开（#10654）、OAuth 编码、shutdown 时序（#10249）等边缘问题集中出现。
- **Durable / 后台会话**：可附加子进程执行持久生成（#10659）等需求表明社区在把 Pi 用作长时间任务基础设施。

---

## ⚠️ 开发者关注点

1. **会话稳定性**：卡死（#10031）、挂起（#10019、#10415）、abort 后状态不一致（#9986）是最常见的“只能 Ctrl+C 重启”类痛点。
2. **认证链路脆弱**：OpenAI OAuth 403（#10605）、GitHub 自动登出（#6686）、WSL 时钟导致的设备码流程失败，登录问题横跨多个 provider。
3. **嵌入/编译版回归**：Bun 编译产物中图片处理失效（#10645）提示 standalone binary 路径缺乏足够回归测试。
4. **扩展与宿主的模块边界**：`node_modules` 重复解析导致单例失效（#4748）、pnpm symlink 解析问题（#8112），monorepo 结构的包解析需谨慎。

---
*数据来源：github.com/earendil-works/pi 过去 24 小时活动 | 由 AI 自动生成*

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报（2026-10-09）

## 一、今日速览

oh-my-pi 发布 **v18.8.5 / v18.8.6** 两个版本，重点优化 prompt-cache 感知的会话裁剪与 OAuth 恢复机制。社区围绕 **/vibe 模式循环守卫误触发**（#15011 / PR #15012）、**Windows TUI 冻结诊断困难**（#14998）以及 **Codex 多账号配额故障转移失败**（#14997）展开密集讨论，维护者 @roboomp 当天已提交对应修复 PR。

---

## 二、版本发布

### [v18.8.6](https://github.com/can1357/oh-my-pi/releases) — pi-agent-core
- **缓存感知的会话裁剪**：裁剪后的历史保留在模型 prompt-cache 回看窗口内，同时维持 Anthropic prompt-cache 效率（对长会话成本优化意义重大）。
- 新增 `AgentLoopConfig.hasQueuedAsides`（`Agent` 上亦可访问），用于感知排队的旁路消息。

### [v18.8.5](https://github.com/can1357/oh-my-pi/releases) — pi-ai
- `oauth.refresh(id, signal, { reason: "auth-recovery" })` 支持向委托的 auth broker 转发 401 恢复意图。
- `AuthStorageOptions.refreshOAuthCredentialMints` 标记自管 token 交换的 `refreshOAuthCredential` hook。

---

## 三、社区热点 Issues

1. **[#7982](https://github.com/can1357/oh-my-pi/issues/7982) 为单次 task 调用设置模型**（17 评论 / 9 👍）
   长期热门需求：允许用户在 task 工具与 eval 的 `agent()` 中安全地为单次调用指定模型，且不覆盖 agent 文件配置。社区讨论活跃，属 triaged 待实现。

2. **[#14817](https://github.com/can1357/oh-my-pi/issues/14817) `/model` 因 AWS 凭据拒绝访问导致崩溃**（P2）
   Linux 下 `~/.aws/credentials` 不可读时打开模型选择器触发未处理 rejection 直接退出。涉及权限隔离环境，稳定性问题需优先修复。

3. **[#14997](https://github.com/can1357/oh-my-pi/issues/14997) Codex 配额耗尽不故障转移到健康 OAuth 账号**（P2）
   多 ChatGPT 订阅场景下账号 A 耗尽后 B 不自动接管，手动 pin 也需重选模型才生效。多账号工作流的核心痛点。

4. **[#14998](https://github.com/can1357/oh-my-pi/issues/14998) Windows TUI 冻结 88% 日志 phase 为 "unknown"**（P2）
   UI loop 阻塞冻结无法归因定位。报告者正在调查并已配套提交 PR #15001 改善日志标注。

5. **[#14923](https://github.com/can1357/oh-my-pi/issues/14923) `openai-responses` V2 压缩跳过标准工具/上下文准备**（P2）
   深度技术分析贴：V2 压缩请求发送的工具定义与共享历史与普通轮次不一致，导致 cached-input 命中率偏低，v18.8.4 起仍存在。

6. **[#14956](https://github.com/can1357/oh-my-pi/issues/14956) Mnemopi 记忆提取无长度上限 → 39GB 僵尸进程**（P1）
   长会话下整个未 retain 的 transcript 直接送入提取 LLM，导致 ORT OOM 与 30 秒挂起。严重资源安全问题。

7. **[#15011](https://github.com/can1357/oh-my-pi/issues/15011) `vibe_wait` 合法等待触发工具调用循环守卫**（P2）
   `/vibe` 模式中按提示重新发起的等待调用在 5 次后被守卫拦截，与工具自身指引矛盾。维护者当天已开 PR #15012 豁免。

8. **[#2785](https://github.com/can1357/oh-my-pi/issues/2785) 低噪声操控的简洁工具显示模式**（10 评论 / 8 👍）
   TUI 默认展示完整工具调用细节，长任务操控时视觉噪音大。与 #4411（折叠行数上限）同属 TUI 信息密度优化方向。

9. **[#14968](https://github.com/can1357/oh-my-pi/issues/14968) 扩展 `ctx.abort()` 被记为"用户中断"**（P2）
   子代理被扩展中止时向父代理误报用户取消，影响 agent 编排语义正确性。报告者附带了完整的各 host binding 位置表。

10. **[#14784](https://github.com/can1357/oh-my-pi/issues/14784)（已关闭）`/switch` 选择器 TUI 崩溃**（P1）
    v18.7.0 起 `/switch` 必现 TypeError 崩溃，已在 18.8.x 修复关闭——版本升级用户值得关注。

---

## 四、重要 PR 进展

1. **[PR #15012](https://github.com/can1357/oh-my-pi/pull/15012)**（@roboomp）豁免 `vibe_wait` 的循环守卫，直接回应 #15011，当日修复速度值得肯定。

2. **[PR #15013](https://github.com/can1357/oh-my-pi/pull/15013)**（P1 review）Mnemopi 不再仅凭共享时间范围建立记忆边，防止边表膨胀至数百万行导致写入延迟。

3. **[PR #15001](https://github.com/can1357/oh-my-pi/pull/15001)**（P1 review）为循环看门狗标注 retain/recall/embedding 持久化阶段，解决 #14998 的 "unknown" 日志问题。

4. **[PR #15009](https://github.com/can1357/oh-my-pi/pull/15009) / [PR #15010](https://github.com/can1357/oh-my-pi/pull/15010)**（@roboomp）分别修复纯文件 Markdown 读取不渲染（#15007）与 PowerShell 语法高亮回退问题（#15008）。

5. **[PR #14961](https://github.com/can1357/oh-my-pi/pull/14961)**（P1 review）slow 完成路径正确传递显式 thinking effort，处理 max/off/fallback 继承与能力钳制。

6. **[PR #14962](https://github.com/can1357/oh-my-pi/pull/14962)** 为 completion handle 暴露路由元数据（模型、思考等级、回退路径），JS/Python 双端支持。

7. **[PR #13965](https://github.com/can1357/oh-my-pi/pull/13965)** 缓存过期自动 shake 扩展至每次 provider 请求前及子代理，进一步压低缓存失效成本。

8. **[PR #14925](https://github.com/can1357/oh-my-pi/pull/14925)**（P1 review）修复增量结构化 yield 的形状保持问题，覆盖 schema、运行时校验与 TUI 装配四层。

9. **[PR #8301](https://github.com/can1357/oh-my-pi/pull/8301)** `/prune` 会话分支裁剪 + 归档代替删除 + 树中 Shift+A，长会话管理三件套。

10. **[PR #15006](https://github.com/can1357/oh-my-pi/pull/15006)** 通用 judge 机制（jev / system-one 风格模型）跨 provider 支持，基于 `models.yml` 的 per-model 判定覆盖。

---

## 五、功能需求趋势

- **多账号/多 provider 认证健壮性**：Codex 故障转移（#14997）、Antigravity 权限差异账号（#14924）、OAuth 恢复（v18.8.5）——认证层是当前 bug 密集区。
- **TUI 信息密度与布局**：简洁工具显示（#2785）、折叠行数上限（#4411）、全屏底部停靠栏（#11600）、本地化（#1229）。
- **缓存/成本效率**：缓存感知裁剪（v18.8.6）、V2 压缩缓存命中率（#14923）、缓存过期 autoshake（PR #13965）。
- **Agent 编排语义**：单次调用模型选择（#7982）、abort 语义（#14968）、eval 预算硬约束（#14946）、子代理 usage 归集（#14945）。
- **生态扩展**：ElevenLabs 语音生成（#14391）、通用 judge（PR #15006）、TTSR AST 条件（PR #10754）。

## 六、开发者关注点

1. **可观测性不足**：Windows 冻结 88% 日志无 phase（#14998）、RPC `session_settled` 永不触发（#14948）——诊断体验是高频抱怨。
2. **资源泄漏与失控**：Mnemopi 39GB 僵尸进程（#14956）、共享 headless Chrome 杀不死（#14379）。
3. **Windows 平台质量**：冻结、高亮、渲染多个 P2 集中在 Windows 原生环境。
4. **SDK/扩展生态稳定性**：扩展导入 `pi-tui/native/*` 在编译二进制中无法加载（#14834，已关闭）、robomp PR 审核状态误标（#14859）。
5. **长会话工作流**：裁剪、归档、上下文管理相关需求贯穿 Issues 与 PRs，是重度用户的核心诉求。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*