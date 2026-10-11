# AI CLI 工具社区动态日报 2026-10-11

> 生成时间: 2026-10-11 04:43 UTC | 覆盖工具: 11 个

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

# AI CLI 工具生态横向对比分析报告（2026-10-11）

## 1. 生态全景

AI CLI 工具已从单轮对话工具演进为以 **多智能体编排、会话持久化、跨端协同** 为核心的复杂 agent 运行时。头部工具（Claude Code、Codex）的问题重心从基础功能转向平台质量（Windows 支持、沙箱一致性、成本控制），而快速追赶者（Qwen Code、oh-my-pi、Pi）正密集投入托管智能体架构与扩展 API。**静默失败、长会话稳定性、缓存/成本效率** 已成为全生态共性痛点，标志着这一赛道正从“能力竞争”进入“可靠性竞争”阶段。

## 2. 各工具活跃度对比

| 工具 | Issue 热点数 | PR 动态 | Release | 社区情绪基调 |
|---|---|---|---|---|
| Claude Code | 10+（含今日新报回归） | 2（低，内部开发为主） | 无 | 焦虑偏不满（长期 Bug 积压、客服滞后） |
| OpenAI Codex | 10+（Windows Dots 爆发） | 11（密集） | 无 | 焦虑（Windows Pro 用户受阻） |
| Gemini CLI | 10 | 10（多为性能优化） | 无 | 建设性（官方系统性建设 subagent） |
| Copilot CLI | 10（22 条更新，10 条新报） | 0 | 无（v1.0.95） | 中性偏批评（沙箱摩擦大） |
| Kimi Code CLI | 0 | 1（文档 PR） | 无 | 平静（低活跃） |
| OpenCode | 10 | 10+ | **v1.19.0**（V2 迁移通道） | 活跃、转型期（V1→V2） |
| Qwen Code | 10+ | 10 | **v0.25.1-preview.2** + nightly | 高度活跃（架构讨论热烈，#12380 达 51 评论） |
| DeepSeek TUI | 6 | 11 | 无 | 中性（质量治理为主） |
| Pi | 10+（48 条更新） | 7 | 无 | 活跃、积极响应 |
| oh-my-pi | 10（71 条更新） | 10+ | **v18.8.9 + v18.8.8** | 极活跃，当日闭环多个 P1 |
| DeepSeek Harness | 0 | 0 | 无 | 无活动 |

**要点**：oh-my-pi（71 条 Issue 更新）、Pi（48 条）、Codex（11 PR）为当日最活跃；Qwen Code、oh-my-pi、OpenCode 为仅有的三家发版工具，迭代节奏最快。

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **多智能体/子代理可靠性** | Gemini（假成功 #22323、挂起 #21409）、Codex（Dots 工具注入缺失）、Qwen（Session 阻塞/取消竞态）、DeepSeek TUI（handoff resume 失败） | 子代理工具注入、任务取消语义、崩溃恢复、真实状态上报 |
| **Windows 平台质量** | Claude Code（编码系列 Bug + 数据丢失 #92328）、Codex（约 60% 热点带 windows-os）、Qwen（#13861）、DeepSeek TUI（#6953）、Pi（#7547 调研帖） | 编码/CP936 兼容、WSL、shim 启动、原生支持路线 |
| **长会话稳定性与 compaction** | Claude Code（/compact 损坏会话 #101181）、Pi（#9512）、Codex（PR #52937）、oh-my-pi（#15311） | 压缩不丢关键上下文、限流回退策略、resume 可靠性 |
| **缓存与成本效率** | Claude Code（上下文膨胀 40-70K #91689）、Copilot（图片淘汰破坏缓存 #5111）、oh-my-pi（#15230）、OpenCode（#51993） | prompt cache 失效回归、隐性 token 消耗、配额异常 |
| **Headless/SDK/自动化** | Qwen（结果延迟 40s-5min #13851）、Pi（#10762 挂起）、oh-my-pi（--resume -p 挂起）、OpenCode（静默退出 0 #36413）、Claude Code（#89604） | 机器可检测信号、超时/重试、退出码可靠性 |
| **终端生态集成** | Copilot（OSC 7501）、Qwen（#13870）、Pi、oh-my-pi（tmux/Zellij/CMUX） | 状态上报协议、多路复用器支持、终端兼容性 |
| **权限/沙箱一致性** | Codex（#25590 Full Access 假显示）、Copilot（沙箱凭据/hook 冲突集群）、OpenCode（权限静默覆盖） | UI 与实际权限一致、凭据注入、细粒度策略 |

## 4. 差异化定位分析

- **Claude Code**：生态标杆但进入“存量维护期”——Issue 以长期 Bug 积压为主（#7134 超 1 年未修），PR 活动极少（内部开发），付费用户留存问题（#56281）暴露商业化支持短板。目标用户为 Pro/Max 订阅重度用户。
- **OpenAI Codex**：押注 **Dots + Computer Use + 云端任务** 的多端协同场景，但该战略在 Windows 上全面受阻；沙箱安全模型（macOS Seatbelt 类）是差异化投入，代价是与真实开发工作流摩擦大。
- **Gemini CLI**：走开源共建路线，子代理体系为架构主线，社区 PR 质量高（性能优化一揽子、安全修复）；战略上探索 AST 感知工具链、OS 级零依赖沙箱等前瞻方向。
- **Qwen Code**：技术野心最大——Managed Agent 双路径架构（#12380，51 评论）对齐“Session 持久所有权 + 可恢复执行”的 agent 运行时方向，WebShell/平台化分发显示其不止于 CLI，而是云端分发入口。
- **oh-my-pi / Pi**：轻量高性能路线，多 provider 目录 + 多凭据管理（ChatGPT 账户切换、BYOK）服务“多模型混合编排”用户；迭代速度极快（单日双版本、P1 当日闭环），适合技术前沿玩家。
- **OpenCode**：处于 V1→V2 大版本转型，开发者生态活跃但迁移成本引发社区不满；插件系统与主题可定制性是卖点。
- **Copilot CLI**：企业/合规导向（Managed policy、fine-grained PAT、沙箱），BYOK 多模型路由仍是架构短板。
- **Kimi CLI / DeepSeek 系**：处于生态早期，Kimi 今日零 Issue 活动，DeepSeek TUI 以代码质量治理为主，DeepSeek Harness 无活动——三家均未进入主流竞争队列。

## 5. 社区热度与成熟度

**热度梯队**：
- 🔥 高热：oh-my-pi（71 更新/双版本）、Codex（Dots 危机发酵）、Qwen Code（架构大讨论）、Pi（48 更新）
- 🔶 中热：Claude Code（长期痛点持续发酵但无官方动作）、Gemini CLI、OpenCode（转型期）、Copilot CLI
- 🔹 低热：DeepSeek TUI、Kimi CLI、DeepSeek Harness

**成熟度判断**：
- **成熟稳定期**：Claude Code（功能完备，问题在治理而非能力）、Copilot CLI（企业化但架构受限）
- **快速迭代期**：Qwen Code、oh-my-pi、Pi、Gemini CLI——发版频率高、P1 响应快（oh-my-pi 多个 P1 当日闭环值得称道）
- **转型震荡期**：OpenCode（V2 迁移）、Codex（Dots 生态 Windows 崩坏，处于战略投入与质量债的冲突中）

## 6. 值得关注的趋势信号

1. **“静默失败零容忍”成为新共识**：从 Gemini 子代理假成功、OpenCode 静默退出 0、Codex 模型静默降级，到官方 PR 主动改进重置透明度（Codex #52825）——可观测性正从 nice-to-have 变为采购决策项。开发者选型时应考察工具的**退出码语义与错误可检测性**。

2. **Windows 是全生态最大质量洼地**：四大工具同时爆发 Windows 相关阻断问题，Claude Code 的 `.cmd` 数据丢失 Bug（#92328）更提示——**在多字节编码环境运行 AI 生成脚本需建立人工审查关卡**。Windows 为主力环境的团队应将平台成熟度作为选型硬指标。

3. **Prompt cache 脆弱性直接影响成本**：至少 4 家工具出现“图片淘汰/上下文膨胀/多图会话”破坏缓存的回归。重度用户应监控**每请求缓存命中率**，并警惕 auto-compact 的全量重注入（Claude Code #91689 的 40-70K 基线即为例证）。

4. **Headless/SDK 模式是第二战场**：CI/自动化场景中“无超时、无重试、无退出信号”的挂起问题（Pi #10762、Qwen #13851）普遍存在。自动化管道中建议外层加超时守护，勿信任 agent 进程自行退出。

5. **AGENTS.md 等跨工具标准加速收敛**：Kimi 补齐 AGENTS.md 文档、Pi 读取 Claude Code `.mcp.json`、多工具采用 ACP 协议——**配置与协议层的互操作正在降低切换成本**，工具锁定的护城河将转移到 agent 编排能力与扩展生态。

6. **多智能体架构从功能走向“运行时”**：Qwen 的 Session 持久所有权、Codex 的 Dots 云端任务、Gemini 的 subagent Sprint 均指向同一方向——CLI 正在演化为可崩溃恢复、可取消、可跨端接管的 agent harness。关注各家在**崩溃恢复一致性**上的实测表现，这将是下一阶段的分水岭。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
（数据来源：github.com/anthropics/skills，截止 2026-10-11）

> ⚠️ 数据说明：本期 PR 评论数据缺失（undefined），以下排行基于 PR 活跃度（创建/更新时间跨度、Issue 关联度、话题热度）综合推断。

---

## 一、热门 Skills / PR 排行

| # | PR | 主题 | 状态 | 热点分析 |
|---|----|------|------|---------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder 修复**：适配 mcp>=2 的 `streamable_http_client` 导入与自定义 Header | OPEN | 关联 #1668，9-10 月持续活跃更新，是官方核心工具链 Skill 的兼容性关键修复 |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 修复**：隔离 trigger evals、处理 Windows 及运行时失败 | OPEN | 对应社区高热问题 #556/#1352/#1383（trigger rate 为 0 的评测缺陷），6 月提交后持续讨论至 9 月 |
| 3 | [#1961](https://github.com/anthropics/skills/pull/1961) | **skill-creator eval viewer 安全加固**（脚本逃逸、DNS rebinding、XSS） | OPEN | 直接响应 #1394 XSS 问题，安全类 PR 近期高密度出现 |
| 4 | [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio**：Markdown 直出带配音的 MP4 视频 | OPEN | 零成本内容创作方向，社区关注度较高的新 Skill 提案 |
| 5 | [#822](https://github.com/anthropics/skills/pull/822) | **AWT（AI Watch Tester）**：AI 驱动的视觉 E2E 测试 | OPEN | 3 月提交后讨论延续至 9 月，测试自动化赛道的代表提案 |
| 6 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography**：AI 生成文档的排版质量控制 | OPEN | 切中“AI 生成文档质量”普遍痛点，长尾活跃 |
| 7 | [#1792](https://github.com/anthropics/skills/pull/1792) | **docx 修复**：LibreOffice 超时报错并校验修订标记 | OPEN | 与 #1734（孤儿批注检测）共同反映 docx Skill 的可靠性问题 |
| 8 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer**：Skill 质量与安全元分析工具 | OPEN | 最早的元 Skill 提案之一，随 #492 信任危机话题升温 |

---

## 二、社区需求趋势（来自 Issues）

1. **Skill 信任与安全机制**（最热）：[#492](https://github.com/anthropics/skills/issues/492)（43 评论）指出社区 Skill 冒用 `anthropic/` 命名空间造成信任边界滥用；配套需求是 #83 的安全分析器、eval viewer 加固（#1961、#1394）。
2. **组织级协作与分发**：[#228](https://github.com/anthropics/skills/issues/228)（16 评论）要求 Claude.ai 内的 org 级 Skill 共享库；#62 反映 Skill 文件管理的易丢失问题。
3. **Skill 可评测性**：#556、#1352、#1383、#1390 集中爆发——trigger rate 评测系统性失效（多 worker 竞争、Windows 兼容、mcp-builder 评分归零），是工具链最迫切的技术需求。
4. **Token 效率与上下文管理**：#1487（claude-api 单次注入 156k token）、#1329（compact-memory 紧凑符号记忆）反映对轻量化 Skill 的强烈诉求。
5. **新兴 Skill 方向提案**：AI Agent 治理（#412）、推理质量门禁流水线（#1385）、HPC/Slurm 集群操作（PR #1615）、智能合约审计（PR #1771）——Skill 正从文档/办公向 DevOps、安全、科研基础设施扩展。

---

## 三、高潜力待合并 Skills

- **[#1742](https://github.com/anthropics/skills/pull/1742)** mcp-builder mcp>=2 兼容修复 —— 阻塞性 Bug 修复，10 月仍在更新，合并优先级高
- **[#1298](https://github.com/anthropics/skills/pull/1298)** skill-creator eval 隔离与 Windows 兼容 —— 对应 3 个以上高热 Issue，落地呼声强
- **[#1961](https://github.com/anthropics/skills/pull/1961)** eval viewer 安全加固 —— 安全类修复，社区验收动机明确
- **[#1681](https://github.com/anthropics/skills/pull/1681)** skill-creator 打包脚本直接执行修复 —— 小而确定的可用性修复
- **[#822](https://github.com/anthropics/skills/pull/822)** AWT E2E 测试 Skill —— 讨论周期长（3 月至 9 月），测试自动化空白方向
- **[#1792](https://github.com/anthropics/skills/pull/1792) / [#1734](https://github.com/anthropics/skills/pull/1734)** docx 可靠性修复组合 —— 官方文档 Skill 的直接改进

---

## 四、生态洞察（一句话总结）

**社区最集中的诉求是“可信与可靠”**：既要解决 Skill 的命名空间/安全信任问题（#492 为最高热 Issue），也要修复官方核心工具链（skill-creator 评测失效、mcp-builder 兼容性、docx 可靠性）——即从“有多少 Skill”转向“Skill 是否安全、可评测、token 高效”。

---

# Claude Code 社区动态日报（2026-10-11）

## 📌 今日速览

今日无新版本发布，社区活动集中在 Bug 反馈上。最值得关注的是 Windows 平台编码问题持续发酵（#7134 已累积 32 条评论），以及 2.1.296 新版引入的 `/compact` 会导致会话损坏的回归问题（#101181）。付费升级失败且客服无响应的问题（#56281）也引发较多讨论。

---

## 🔥 社区热点 Issues（Top 10）

### 1. Windows 文件编码被破坏（32 评论 / 30 👍）
**#7134** | bug · duplicate · windows · tools | 2025-09-04 创建，至今未修复
Claude Code 不尊重文件原始编码，损坏 Windows-1252 文件。运行已一年多，仍是 Windows 用户最痛的问题之一，与下方多个编码相关 Issue 同根同源。
[链接](https://github.com/anthropics/claude-code/issues/7134)

### 2. Max 5x → 20x 升级支付失败（28 评论）
**#56281** | invalid | 2026-05-05 创建
多次尝试升级订阅均支付失败，客服长期无响应。商业付费路径受阻直接影响高价值用户留存，社区共鸣强烈。
[链接](https://github.com/anthropics/claude-code/issues/56281)

### 3. TUI 硬换行破坏 Markdown 内容（16 评论 / 68 👍）
**#43113** | enhancement · tui
请求增加 flag 让终端自行处理软换行，而非在词边界插入硬换行符。68 个 👍 是本期最高，说明对输出内容完整性（尤其 prose/markdown）的需求非常普遍。
[链接](https://github.com/anthropics/claude-code/issues/43113)

### 4. 持续性 ECONNRESET 连接中断（16 评论，已关闭）
**#87500** | bug · networking · api:anthropic
持续 5 小时的 API 连接掉线问题，引发大量用户跟进确认，疑似服务端波动。
[链接](https://github.com/anthropics/claude-code/issues/87500)

### 5. 新会话上下文基线异常膨胀（40-70K tokens）
**#91689** | bug · macos · core · mcp
作者通过 session transcript 提供直接证据：新会话基线即占用 40-70K tokens，且每次 auto-compact 全量重注入文件。对长会话成本影响显著，证据扎实。
[链接](https://github.com/anthropics/claude-code/issues/91689)

### 6. ⚠️ 高危数据丢失：cmd 脚本编码错误导致误删全目录文件
**#92328** | bug · has repro · windows · tools · high-priority · data-loss
Write 工具以 UTF-8 + LF 输出 `.cmd` 文件，cmd.exe (CP932) 吞掉多字节字符后的 LF，使 `del /F /Q "%VAR%"` 退化为 `del /F /Q ""` 并**删除当前目录所有文件**。标签为 data-loss，是最危险的编码系列 Bug。
[链接](https://github.com/anthropics/claude-code/issues/92328)

### 7. 2.1.296 新版回归：手动 /compact 损坏会话
**#101181** | bug · has repro · macos · core | 今日新报
`/compact` 后下一轮请求报 400 错误（空 system message），导致会话无法恢复。新版本回归，建议受影响用户暂缓升级。
[链接](https://github.com/anthropics/claude-code/issues/101181)

### 8. 单个损坏 MCP 配置静默杀死所有冷启动会话
**#86756** | bug · windows · mcp · desktop
`claude_desktop_config.json` 中一条坏的 MCP server 条目会导致所有会话冷启动失败且无报错，应降级容错而非整体崩溃。
[链接](https://github.com/anthropics/claude-code/issues/86756)

### 9. 用量配额消耗异常加快
**#100746** | bug · linux · cost | 10-09 创建
周配额与会话配额消耗速度远超上周，与 #91689 的上下文膨胀问题可能相关，Pro/Max 用户成本敏感度极高。
[链接](https://github.com/anthropics/claude-code/issues/100746)

### 10. WorktreeCreate hook 会话记录位置与文档不符
**#77565** | bug · has repro · windows · hooks
文档声称进入/退出 worktree 会迁移 session transcript，实际行为不符，影响 `/resume` 与会话管理。
[链接](https://github.com/anthropics/claude-code/issues/77565)

---

## 🔀 重要 PR 进展

今日仅 2 条 PR 更新（本仓库 PR 活动较少，主要开发在内部进行）：

1. **#101131 [已关闭]** security-guidance 与 claude-plugins-official 同步（2.0.13）—— 修复 marketplace 安装的 security-guidance 版本落后问题。([链接](https://github.com/anthropics/claude-code/pull/101131))
2. **#6754 [开启]** 补充 Claude CLI 在 VS Code 中的 RTL（希伯来语/阿拉伯语/波斯语）渲染支持文档，长期未合并。([链接](https://github.com/anthropics/claude-code/pull/6754))

---

## 📈 功能需求趋势

- **编码与国际化**：Windows 编码系列问题（#7134、#81187、#92328）构成最大痛点集群，中文/日文等多字节环境用户受害最深
- **上下文与成本控制**：上下文膨胀（#91689）、配额异常消耗（#100746）、桌面端会话交接以降低重发成本（#100913）
- **桌面端体验**：AskUserQuestion 抢占回车键（#101166）、长提示无法折叠（#80672）、Bash 工具挂起（#101154）
- **TUI 渲染**：软换行支持呼声最高（#43113，68 👍）、iTerm2 启动残留 "GOK" 字符（#99985）
- **平台覆盖**：Fedora/Arch 官方仓库（#101177）、Vision Pro 支持（#101074）

---

## ⚠️ 开发者关注点

1. **Windows 是 Bug 重灾区**：今日热点中约半数涉及 Windows（编码、MCP、桌面端、进程残留），且多个长期未修
2. **数据丢失风险**：#92328 的 del 通配删除 Bug 标记为 high-priority + data-loss，Windows + 日文/中文环境用户应警惕 AI 生成的 `.cmd` 脚本
3. **新版回归需警惕**：2.1.296 的 `/compact` 损坏会话问题（#101181）为今日新报，升级前建议备份会话
4. **Headless/SDK 场景兼容性差**：headless 会话误报 MCP connector 需认证（#89604）、自定义网关下模型被静默替换（#89972），自动化集成用户受影响
5. **支持响应滞后**：付费升级失败问题持续 5 个月未解决（#56281），反映客服与 issue 分诊能力有待提升

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-10-11

## 1. 今日速览

今日无新版本发布。社区讨论焦点集中在 **Windows 桌面端的 Dots/Computer Use 工具缺失与沙箱权限问题**——多条高热度 Issue（#49458、#49488、#49731 等）均指向 Windows 平台上委派任务无法获得浏览器/桌面控制工具。PR 方面活动密集，11 条更新均围绕 TUI 稳定性、MCP 依赖升级与剪贴板/粘贴性能优化。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

**1. [#49458](https://github.com/openai/codex/issues/49458) — [Windows] dot 委派的本地任务缺少 Computer Use 工具**（72 评论 / 25 👍）
本周最热 Issue。普通本地 Codex 会话正常，但 dot 启动的任务缺失 Computer Use 工具，直接影响 dot 用户的核心工作流，社区反馈量极大，是 Windows Dots 工具链问题的集中爆发点。

**2. [#49731](https://github.com/openai/codex/issues/49731) — WSL 模式下所有命令执行失败**（39 评论 / 24 👍）
"Run agent in WSL" 下每条命令都报 `Failed to create unified exec process: No such file or directory`，根因疑似 Windows exec-server 删除了 helper 目录。该问题使 WSL 模式完全不可用。

**3. [#52407](https://github.com/openai/codex/issues/52407) — Windows Dots CUA MXC 启动器 HRESULT 0x80070003 失败**（29 评论）
Shell 恢复后 Computer Use 启动器崩溃，涉及沙箱与 CUA 插件交互，是 Dots 生态在 Windows 上的又一阻断性问题。

**4. [#49488](https://github.com/openai/codex/issues/49488) — [Windows][dot] Computer 任务缺失浏览器/桌面工具，MCP 启动持续失败**（28 评论 / 8 👍）
与 #49458 同类但聚焦 MCP durable startup 失败，佐证这是一个系统性问题而非个案。

**5. [#42514](https://github.com/openai/codex/issues/42514) — Intel Mac 缺失 Computer Use 服务**（22 评论 / 6 👍）
自 9 月初持续未解，x86_64 macOS 用户完全无法使用桌面控制功能，涉及架构支持缺失。

**6. [#25590](https://github.com/openai/codex/issues/25590) — UI 显示 Full Access 但实际沙箱仍为 workspace-write**（17 评论）
安全相关：恢复会话时沙箱权限与 UI 显示不一致，长线程反复索要权限。权限状态持久化的可靠性问题值得安全敏感用户关注。

**7. [#49551](https://github.com/openai/codex/issues/49551) — Dots 委派任务缺少 Chrome 工具（macOS）**（16 评论 / 9 👍）
证明工具缺失问题不限于 Windows——macOS 上手动 Chat 可控制 Chrome，但 Dots 委派任务缺失 `node_repl js` 工具，指向跨平台的 Dots 工具注入缺陷。

**8. [#50136](https://github.com/openai/codex/issues/50136) — 云端任务在桌面/Web/iOS/dot 间可见性与行为不一致**（14 评论）
跨端同步问题：dot 创建的任务在 Web/iOS 不可见，用户自建任务却能被 dot 读取，暴露了云端任务列表的架构不一致。

**9. [#50171](https://github.com/openai/codex/issues/50171) — dot 无法继续已连接的 Windows 本地任务（CloudThreadNotFoundError）**（12 评论）
placement format version 2 与线程查找失败的组合错误，阻碍 dot 的核心“接管本机任务”场景。

**10. [#45971](https://github.com/openai/codex/issues/45971) — 长会话回退 HTTP 后每月可产生数百 GB 冗余上传**（6 评论）
性能/成本影响重大的边界案例：WebSocket 增量路径丢失后，每次提交全量历史（~22.5 MiB/次），对流量计费用户是实质损失。

## 4. 重要 PR 进展

**1. [#52990](https://github.com/openai/codex/pull/52990) — TUI 新增可搜索 `/config` 偏好面板**
将偏好设置分为外观、通知、输入、会话、文本选择等标签页并支持搜索，TUI 配置体验大幅改善。

**2. [#52972](https://github.com/openai/codex/pull/52972) — 升级 `rmcp` 至 3.5.1 并加固生命周期测试**
MCP 核心依赖升级，迁移至 `ClientConfig`/`ServerConfig`，配合近期大量 MCP 启动失败报告值得关注。

**3. [#52967](https://github.com/openai/codex/pull/52967) — WSL 剪贴板读取器复用与预热**
修复 WSL 下每次粘贴都拉起 PowerShell 导致共享剪贴板 worker 卡死的问题，与 #49731 的 WSL 场景直接相关。

**4. [#52964](https://github.com/openai/codex/pull/52964) — 原始粘贴突发时延迟 transcript 重绘**
粘贴数千字符/按键事件时跳过全量重绘，提升 TUI 大段粘贴的响应性。

**5. [#52825](https://github.com/openai/codex/pull/52825) — exec 运行时重置后先上报再接受请求**
gRPC code-mode 运行时替换会丢失存储值和运行中的 cell，此 PR 避免静默丢失，提升透明度。

**6. [#52937](https://github.com/openai/codex/pull/52937) — compaction 时保留客户端标记的工具输出**
`retain: true` 的工具输出（可能承载任务指令）不再被压缩裁剪，保证上下文完整性。

**7. [#52946](https://github.com/openai/codex/pull/52946) — agent command center 行序稳定化**
修复进度更新导致任务排序抖动的问题，改进多 agent 任务面板的可用性。

**8. [#52968](https://github.com/openai/codex/pull/52968) — 终端输入排空超时时保护启动模态框**
防止未完成的终端控制序列阻断启动弹窗处理，边界条件下的 TUI 健壮性修复。

**9. [#52952](https://github.com/openai/codex/pull/52952) — 验证 code-mode host 恢复时的重置通知**
扩展测试以断言 host 替换后的首步执行正确上报丢失状态，配合 #52825 形成完整覆盖。

**10. [#52959](https://github.com/openai/codex/pull/52959) — 降低异步 TUI 测试栈占用**
通过 `box_future!` 宏将大 future 移出调用者栈帧，解决深层 async 测试栈溢出隐患。

## 5. 功能需求趋势

- **Dots/子代理工具注入可靠性**：最高频主题。#49458、#49488、#49551、#50600 等跨平台 Issue 一致表明，委派任务无法正确获得 Computer Use/浏览器工具是当前最大痛点。
- **Windows 平台质量**：约 60% 的热点 Issue 带 `windows-os` 标签，覆盖 WSL、沙箱、浏览器控制、认证等多个子系统。
- **权限/沙箱一致性**：UI 显示与实际执行权限不符（#25590、#50640、#50927、#53036）反复出现，"Always allow" 设置被忽略形成聚类问题。
- **跨端（桌面/Web/iOS/dot）同步一致性**：#50136、#50171 反映云端任务在不同客户端的可见性/连续性割裂。
- **MCP/Skills 生态健壮性**：#53002（Skills 资源声明与 read 拒绝不一致）、#49488 的 MCP 启动失败。

## 6. 开发者关注点

1. **Windows 上 Dots 基本不可用**：工具缺失 + exec 失败 + 线程接管失败的组合使 Windows Pro 用户的生产力场景严重受阻，社区情绪偏焦虑（高评论数、高 👍）。
2. **权限持久化不可信**：用户明确允许的站点/权限在重启或恢复会话后仍被拒绝，开发者需要反复干预，缺乏可靠 workaround。
3. **认证与工作区初始化脆弱**：#49924（登录态不持久）、#52470（DeviceCheck 失败）、#52874/#53035（workspace settings 验证阻塞新会话）在 10 月集中涌现，疑似与近期版本升级相关。
4. **长会话成本与稳定性**：全量历史上传（#45971）、流中断（#37996）、插件工具陈旧需重启（#50600）对重度用户影响显著。
5. **透明度诉求**：PR #52825/#52937 显示官方也在改进运行时重置和上下文压缩的可见性，开发者对“静默失败”的容忍度正在下降。

---
*数据来源：github.com/openai/codex | 统计窗口：2026-10-11 前后 24 小时*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-10-11

## 📌 今日速览

今日无新版本发布，社区活跃度集中在 Issues 讨论侧——**子代理（subagent）体系**仍是绝对焦点，从虚假成功状态上报（#22323）到 generalist agent 挂起（#21409），多个 P1 级 bug 持续发酵。PR 方面，一批社区贡献的性能优化 PR 被关闭处理，ACP 协议时序修复与 VSCode 插件资源泄漏修复是今日亮点。

---

## 🐛 社区热点 Issues

**1. #22323 子代理 MAX_TURNS 中断被误报为 GOAL 成功**（P1，13 评论）
`codebase_investigator` 触发最大轮数限制后仍上报 `success`/`GOAL`，掩盖真实中断原因，直接影响任务可靠性判断。评论最热，属核心可观测性问题。
[链接](https://github.com/google-gemini/gemini-cli/issues/22323)

**2. #21409 Generalist agent 无限挂起**（P1，8 评论 / 8 👍）
简单操作（如创建文件夹）转交 generalist agent 后永久挂起，用户等待一小时以上。👍 数最高的 bug 之一，实用体验伤害大。
[链接](https://github.com/google-gemini/gemini-cli/issues/21409)

**3. #19873 零依赖 OS 沙箱 + 执行后意图路由**（P2，9 评论）
大型 enhancement：利用 Gemini 3 原生 bash 能力链式调用 POSIX 工具，同时不牺牲安全性。方向性架构讨论，值得关注。
[链接](https://github.com/google-gemini/gemini-cli/issues/19873)

**4. #22745 AST 感知文件读取/搜索/映射评估 EPIC**（P2，7 评论）
评估 AST-aware 工具能否减少读偏、降低 token 噪音，配套 #22746（tilth/glyph 代码库映射）、#22747（ast-grep 搜索）两个子任务，是 agent 效率优化的战略方向。
[链接](https://github.com/google-gemini/gemini-cli/issues/22745)

**5. #21968 模型极少主动使用 skills 和子代理**（P2，7 评论）
用户反馈自定义 skill/subagent 几乎不会被自主调用，仅显式指令才触发——路由/调度策略层面的信任问题。
[链接](https://github.com/google-gemini/gemini-cli/issues/21968)

**6. #22186 get-shit-done 输出 hook 导致崩溃**（P1，3 评论）
输出摘要打印阶段反复触发 CLI 崩溃，P1 级稳定性问题。
[链接](https://github.com/google-gemini/gemini-cli/issues/22186)

**7. #21983 Browser 子代理在 Wayland 下失败**（P1，4 评论）
Linux Wayland 环境 browser agent 直接失败，桌面环境兼容性问题。
[链接](https://github.com/google-gemini/gemini-cli/issues/21983)

**8. #22267 Browser Agent 无视 settings.json 配置**（P2，4 评论）
`maxTurns` 等全局/项目配置在 Browser Agent 上完全失效，AgentRegistry 读取了配置但未生效，疑似合并后丢失。
[链接](https://github.com/google-gemini/gemini-cli/issues/22267)

**9. #24246 工具数 > 128 时 API 返回 400**（P2，3 评论）
维护者自报：工具过多直接报错，需要更智能的工具作用域裁剪机制，对重度定制用户影响大。
[链接](https://github.com/google-gemini/gemini-cli/issues/24246)

**10. #21924 终端 resize 高性能无闪烁渲染**（P2，2 评论）
Ink 渲染迁移 RenderStatic + 分批更新历史，属于 TUI 体验的持续打磨。
[链接](https://github.com/google-gemini/gemini-cli/issues/21924)

---

## 🔧 重要 PR 进展

**1. #29708 fix(acp): session/load 历史回放时序修复**
修复 ACP 客户端在响应到达前收不到完整回放通知的问题，符合 ACP 规范要求响应在回放完成后返回。
[链接](https://github.com/google-gemini/gemini-cli/pull/29708)

**2. #29510 fix(editor): Windows 子进程参数引用加固（已关闭）**
引入 `quoteCmdArg` 修复 Windows 下 `shell: true` 的路径命令注入风险——**安全修复，值得审视自家 fork 是否受影响**。
[链接](https://github.com/google-gemini/gemini-cli/pull/29510)

**3. #29621 fix(core): 保留子代理多模态工具响应**
修复子代理回传工具结果时，function response 旁边的图像数据被丢弃的问题，直接改善多模态子代理链路。
[链接](https://github.com/google-gemini/gemini-cli/pull/29621)

**4. #29709 fix(vscode-ide-companion): 追踪所有 disposables**
逗号表达式导致命令注册未进入 `context.subscriptions`，造成插件卸载后资源泄漏。
[链接](https://github.com/google-gemini/gemini-cli/pull/29709)

**5. #29517 perf(core): truncateHistoryToBudget 线性化重构（已关闭）**
历史截断中逐个 `unshift()` 改为 push+reverse，消除 O(n²) 行为。
[链接](https://github.com/google-gemini/gemini-cli/pull/29517)

**6. #29515 perf: 状态快照 ID 查找用 Set 替代数组（已关闭）**
合成基准 291.95ms → 10.26ms（28 倍提升）。
[链接](https://github.com/google-gemini/gemini-cli/pull/29515)

**7. #29516 perf: 缓存 transcript 轮次索引（已关闭）**
`indexOf()` 逐节点调用改 Map 缓存，414.20ms → 17.91ms。
[链接](https://github.com/google-gemini/gemini-cli/pull/29516)

**8. #29512 perf: 聊天压缩历史重建线性化（已关闭）**
与 #29517 同系列的数组操作优化。
[链接](https://github.com/google-gemini/gemini-cli/pull/29512)

**9. #29622 fix(core): tildeifyPath 限定路径段边界**
修复与 home 目录同前缀的兄弟目录被错误显示为 `~` 下的路径。
[链接](https://github.com/google-gemini/gemini-cli/pull/29622)

**10. #29705 fix(cli): 时长显示单位边界前先取整**
`1000ms` 正确显示为 `1.0s` 等边界修整，小而美的 UX 修复（help wanted）。
[链接](https://github.com/google-gemini/gemini-cli/pull/29705)

---

## 📈 功能需求趋势

1. **子代理体系成熟化**（最大主线）：并行子代理协作与共享内存（#18287）、本地子代理 Sprint（#20195）、子代理轨迹可分享（#22598）、`/bug` 报告含子代理上下文（#21763）——官方在系统性建设 subagent 基础设施。
2. **代码理解效率**：AST 感知工具链（#22745/#22746/#22747）、“Tactful Extraction” 省 token 精准读取（#19561）、文件化任务跟踪替代 WriteToDo（#18836）。
3. **安全与沙箱**：OS 级零依赖沙箱（#19873）、破坏性命令防护（#22672）、per-workspace 权限策略（#18397）。
4. **Browser Agent 健壮性**：配置生效（#22267）、会话接管与锁恢复（#22232）、Wayland 支持（#21983）。

---

## ⚠️ 开发者关注点（痛点总结）

- **子代理不可靠**：挂起、假成功、配置失效是当前最高频痛点，多个 P1 待修；建议在 prompt 中显式限制子代理使用作为临时规避。
- **挂起与交互卡死**：interactive prompt 卡死（#22465）、generalist 挂起（#21409）。
- **上下文/token 开销**：大文件读取“灌水”上下文、任务列表造成 context rot，社区强烈诉求精准读取。
- **工具数量上限**：重度自定义场景触发 400 错误（#24246）。
- **Windows / Linux 兼容性**：Windows 命令注入修复与 Wayland 支持缺口。
- **性能**：一揽子热路径优化 PR 已被官方关闭处理，长会话/大历史场景性能正在显著改善。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-11 | 数据来源：github.com/github/copilot-cli**

---

## 1. 今日速览

今日无新版本发布，但社区活跃度较高：过去 24 小时共有 22 条 Issue 更新，其中 10 条为昨日新提交的 bug 报告。**沙箱权限（sandbox）相关问题是当前最大痛点集群**，涉及 macOS 网络沙箱阻断 Gradle、git 凭据覆盖、sessionStart hook 失效等多个场景。此外，会话稳定性（session 事件投递超时导致会话卡死）和 BYOK 子代理模型路由失败等深层架构问题也引发关注。

---

## 2. 版本发布

过去 24 小时无新 Release。（社区报告显示当前版本为 1.0.95）

---

## 3. 社区热点 Issues

**1. [#5109](https://github.com/github/copilot-cli/issues/5109) — copilot-cli 完全不可用（Managed policy 刷新失败）**
昨日新报，用户启动时反复报 "Managed account policy could not be refreshed" 导致 CLI 无法进入交互。属于阻断级问题，值得官方优先响应。

**2. [#5100](https://github.com/github/copilot-cli/issues/5100) — 长会话事件投递超时后会话永久卡死**
一次 120s 的 `tool.execution_partial_result` 事件 ack 超时后，事件投递永久失败，只能 resume 恢复。长会话可靠性是重度用户的核心诉求。

**3. [#5103](https://github.com/github/copilot-cli/issues/5103) — BYOK 下子代理强制使用会话级 wire API，跨模型家族必报 400**
`COPILOT_PROVIDER_WIRE_API` 全局生效，导致子代理无法使用另一 API 家族的模型。直击 BYOK/混合模型编排的架构限制。

**4. [#5102](https://github.com/github/copilot-cli/issues/5102) — 沙箱 git 无法使用与登录身份不同的凭据（回归）**
沙箱注入空 `credential.helper` 覆盖，丢弃用户的 fine-grained PAT。企业多账号场景受影响明显。

**5. [#5105](https://github.com/github/copilot-cli/issues/5105) — macOS 沙箱阻断 Gradle daemon 的 localhost 连接**
尽管 local networking 已放行，Gradle 客户端仍无法连接本机 daemon。Java/JVM 生态用户在 macOS 沙箱下的典型阻碍。

**6. [#5098](https://github.com/github/copilot-cli/issues/5098) — 配置 sandbox.userPolicy.filesystem 路径后 sessionStart hook 停止运行**
权限配置与 hook 生命周期出现相互影响，昨日新报。

**7. [#5111](https://github.com/github/copilot-cli/issues/5111) — 图片上限硬编码 50，且超额逐出会重写 prompt-cache 前缀**
`max_prompt_images` 模型能力字段被忽略，且每次淘汰图片都破坏缓存，直接影响成本与延迟。技术含量较高的报告。

**8. [#4946](https://github.com/github/copilot-cli/issues/4946) — 后台 shell 完成通知触发 HTTP 400 `content[].thinking`**
跨回合投递 notification 时消息结构非法，7 条评论持续讨论中。

**9. [#5108](https://github.com/github/copilot-cli/issues/5108) — ACP session/list 每页全量扫描，数千会话需数分钟**
ACP 协议客户端的分页性能问题，影响第三方客户端集成体验。

**10. [#5112](https://github.com/github/copilot-cli/issues/5112) — 请求支持 OSC 7501 程序状态协议**
让终端实时显示 agent 状态（working/blocked 等），是与现代终端生态对接的前瞻性功能请求。

其他值得关注：[#5107](https://github.com/github/copilot-cli/issues/5107)（HOME 覆盖误报 `script_action_changed`）、[#5097](https://github.com/github/copilot-cli/issues/5097)（HydraFusion 路由失败后静默降级到低阶模型）。

---

## 4. 重要 PR 进展

过去 24 小时无 PR 更新。

---

## 5. 功能需求趋势

- **沙箱灵活性与凭据管理**：filesystem 路径策略、git 凭据注入、本地网络放行（#5098/#5102/#5105/#5107），是本期最密集的需求方向。
- **会话可靠性与生命周期管理**：事件投递容错、ACP 分页性能、桌面端会话归组到项目（#5100/#5108/#5104）。
- **BYOK 与多模型路由**：子代理独立 wire API、HydraFusion 策略路由（#5103/#5097）。
- **插件/Hook 能力增强**：仅展示层的脱敏 hook、display-only hook（#5099）。
- **终端生态集成**：OSC 7501 状态上报（#5112）、footer 身份信息完整显示（#4666）。
- **可访问性与主题**：暗色背景下 thinking 文本对比度、输入/回复视觉区分等历史问题已陆续关闭（#3866/#2746），显示官方在 UX 打磨上有进展。

---

## 6. 开发者关注点

1. **沙箱是最大摩擦点**：macOS 沙箱与 Gradle/本地 daemon、git 凭据、hook 触发的多重冲突，说明沙箱安全模型与真实开发工作流的适配仍未成熟。
2. **长会话稳定性**：事件超时后会话永久失效（#5100）对长时间编码 agent 场景是硬伤，社区期望自动重连/恢复机制。
3. **静默降级缺乏透明度**：HydraFusion 路由失败静默切换低阶模型（#5097），用户对“不知情的模型降级”明显不满。
4. **缓存效率**：图片淘汰重写 prompt-cache 前缀（#5111）这类隐性成本问题开始被深度用户追踪。
5. **历史问题清理中**：#2494（login 回归）、#4614（macOS MallocStackLogging）等多个老 issue 近期关闭，修复节奏在改善。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-10-11 | 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)**

---

## 1. 今日速览

今日 Kimi Code CLI 社区整体较为平静：过去 24 小时无新版本发布、无活跃 Issue 更新，仅有一条 PR 状态变更。唯一的动态是文档类 PR #1718 于昨日（10-10）更新后关闭，涉及 AGENTS.md 专题文档、安全边界说明及首页导览的新增。建议持续关注下一个版本周期的功能迭代动向。

---

## 2. 版本发布

过去 24 小时无新版本发布，本节省略。

---

## 3. 社区热点 Issues

过去 24 小时内无 Issue 更新，本节省略。

> 💡 提示：今日数据采集窗口内 Issue 活动为零，可能与周末/节假日周期相关，建议关注后续工作日的讨论回升。

---

## 4. 重要 PR 进展（1 条）

### [#1718] docs: 新增 AGENTS.md 专题页、安全边界说明和首页导览 [CLOSED]
- **作者**：@liwang614 | 创建于 2026-04-02，更新于 2026-10-10
- **链接**：[MoonshotAI/kimi-cli PR #1718](https://github.com/MoonshotAI/kimi-cli/pull/1718)
- **内容**：本 PR 是一项重要的文档增强，新增内容包括：
  - `docs/{zh,en}/customization/agents-md.md`：**AGENTS.md 专题页**（中英双语），系统阐述：
    - AGENTS.md 与 README.md 的区别与定位
    - 加载行为说明：仅在**工作目录**加载，且**大写文件名优先**
    - `/init` 命令的生成流程
    - 推荐写入 AGENTS.md 的内容类型及更新时机
  - **安全边界说明**及**首页导览**页面
- **意义**：AGENTS.md 是当前 AI 编码工具生态中的通用配置标准（类似 CLAUDE.md、.cursorrules），该文档的完善表明 Kimi CLI 正在强化对这一标准化机制的投入，降低新用户上手门槛，属于体验优化的关键一环。

---

## 5. 功能需求趋势

由于今日无活跃 Issue 数据，无法直接提炼趋势。基于 PR #1718 可间接观察到以下方向信号：

- **文档与上手体验**：官方持续投入双语文档建设，AGENTS.md 专题、首页导览等表明降低配置门槛是当前重点。
- **配置标准化兼容**：对 AGENTS.md 加载行为的规范化说明，呼应社区对 AI 工具间配置文件互通的普遍期待。

---

## 6. 开发者关注点

- **AGENTS.md 使用规范**是近期文档更新的核心主题，开发者可重点关注其加载规则（仅工作目录、大写优先）以避免配置不生效的问题。
- **安全边界**说明的加入，反映官方对工具权限与安全性的透明化沟通，值得关注其后续在 CLI 权限模型上的演进。
- 今日数据量有限，建议结合近一周数据综合研判社区痛点趋势。

---

*本日报基于 GitHub 公开数据自动整理，如有遗漏或误差请以仓库实际内容为准。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-10-11）

## 1. 今日速览

OpenCode v1.19.0 发布，引入 `opencode upgrade --major` 一键升级到 OpenCode 2 的通道，标志着 V1 进入维护期、V2 成为主线。今日 Issue/PR 活动高度活跃，多条与 V2 迁移相关：大量 V1 PR 被关闭并要求重定向到 V2 `dev` 分支。当日新增两个 V2 TUI 回归问题（回复区空白渲染、透明主题 modal 遮罩），且社区贡献者当天即提交了对应修复 PR。

## 2. 版本发布

**v1.19.0**（[Release](https://github.com/anomalyco/opencode/releases)）
- **Core**
  - 改进：新增 `opencode upgrade --major` 命令，引导升级至 OpenCode 2
  - 修复：允许 OpenAI `ultrafast` 服务层级
  - 修复：PTY 连接在校验存在性前先验证 origin 与 ticket
- **TUI**
  - 改进：可用 `/update` 直接安装 OpenCode 更新

## 3. 社区热点 Issues

1. **#38801 [CLOSED] `message="exiting loop"` 反复中断会话**（23 评论）— 老牌高频痛点，作者称因该问题多次弃用 TUI，OpenAI API 配置下尤为严重，长尾讨论后终于关闭，值得关注是否随版本修复。https://github.com/anomalyco/opencode/issues/38801
2. **#51993 [OPEN] deepseek-v4.1-flash 新增图片后 prompt cache 失效回退**（12 评论）— 影响成本与延迟的缓存回归问题，多图会话中首图之后全部按未缓存输入重新计费。https://github.com/anomalyco/opencode/issues/51993
3. **#36413 [OPEN] `opencode run` 工具调用被拒后静默退出 0**（9 评论）— 非交互模式下无任何 stdout/stderr 信号，严重威胁 CI/自动化可靠性。https://github.com/anomalyco/opencode/issues/36413
4. **#37891 [OPEN] Desktop 聊天中文件路径不可点击**（8 评论，6 👍）— 高赞 UX 需求：无法在编辑器/Finder 中打开助手引用的路径。https://github.com/anomalyco/opencode/issues/37891
5. **#47831 [OPEN] 工具调用修复丢失无名调用的 `tool` 字段**（7 评论）— `experimental_repairToolCall` 对空工具名的回退处理有缺陷，已有配套修复 PR #54444。https://github.com/anomalyco/opencode/issues/47831
6. **#53839 [CLOSED] 项目级 `.opencode` 目录配置不被发现**（7 评论）— 项目 agents 与 `opencode.jsonc` 完全不加载，属配置系统基础性 bug，今日快速关闭。https://github.com/anomalyco/opencode/issues/53839
7. **#53702 [OPEN] 官方 v2 curl 安装器极慢**（5 评论）— 已复现：走安装脚本需数分钟，直连 npmjs 仅 0.3 秒，直接影响新用户首次体验。https://github.com/anomalyco/opencode/issues/53702
8. **#39923 [OPEN] macOS + SSH 下 TUI 渲染完全不可读**（4 评论）— 相比 v1.15.13 的明显回归，SSH 远程用户无法使用。https://github.com/anomalyco/opencode/issues/39923
9. **#42856 [OPEN] V2 用户自定义本地 provider 模型未进入模型目录**（4 评论，5 👍）— 阻断本地模型用户迁移到 V2 的关键问题。https://github.com/anomalyco/opencode/issues/42856
10. **#54447 [OPEN] V2 TUI 助手回复永不渲染（v2.0.26 空白回复区）**（今日新增，2 评论）— V2 最新版核心功能回归，用户消息发送后回复区空白，优先级极高。https://github.com/anomalyco/opencode/issues/54447

## 4. 重要 PR 进展

1. **#54444 [OPEN]** 流式 chat 调用中空工具名的回归测试与修复，关闭 #47831。https://github.com/anomalyco/opencode/pull/54444
2. **#54433 [OPEN]** 新增 `background.backdrop` 主题 token，允许透明主题保留终端半透明背景（修复 #54420）。https://github.com/anomalyco/opencode/pull/54433
3. **#54430 [OPEN]** agents 新增可选 `effort` 设置，推理力度可独立于模型配置。https://github.com/anomalyco/opencode/pull/54430
4. **#54448 [OPEN]** 修复 tree-sitter-powershell 无法解析裸 `--` 时遗留扫描器漏检命令的问题。https://github.com/anomalyco/opencode/pull/54448
5. **#54427 [OPEN]** session UI 流式 delta 改为按 path 追加 markdown store，性能优化。https://github.com/anomalyco/opencode/pull/54427
6. **#54396 [OPEN]** SQLITE_BUSY 锁超时改为带抖动退避重试（从 V1 #47567 移植到 V2），避免多进程写入互杀 prompt。https://github.com/anomalyco/opencode/pull/54396
7. **#54426 [OPEN]** iOS 语音委派消息在桌面/Web 端渲染为 Voice 消息，跨端体验补齐。https://github.com/anomalyco/opencode/pull/54426
8. **#51482 [OPEN]** 支持 AI SDK v4 media 输入，修复 v4 provider 工具图片序列化为 null 的问题。https://github.com/anomalyco/opencode/pull/51482
9. **#54436 / #54437 [OPEN]** 社区贡献：仅回退消息不回退文件、以及解除排在运行轮次后的排队 prompt（作者注明 V1 仅维护，将另行提交 V2 版本）。https://github.com/anomalyco/opencode/pull/54436
10. **#54439 [CLOSED，已合并方向]** console 下载端点支持任意 release 文件名重定向到 latest，为所有构建产物提供稳定链接。https://github.com/anomalyco/opencode/pull/54439

## 5. 功能需求趋势

- **V1 → V2 迁移支持**：升级命令、V2 API 补齐（#41828）、本地 provider 目录（#42856）、安装器性能（#53702）成为当前主线诉求
- **TUI/主题可定制性**：透明背景、渲染回归、modal 遮罩等视觉体验问题集中爆发
- **会话管理命令**：`/verify`、`/context`、`/simplify`、`/btw`、`/loop` 等一批借鉴 Claude Code 的 slash command 需求（多为 #419xx 系列）
- **Desktop 深度集成**：路径点击打开、编辑器/Finder 联动（#37891）
- **模型与缓存成本**：prompt cache 回归（#51993）、Zen 计费余额可用性（#54242）、新模型服务层级支持

## 6. 开发者关注点

- **自动化/CI 可靠性**：`opencode run` 静默成功退出（#36413）、未知工具调用被误报为 completed（#54238），机器可检测信号缺失是脚本化用户的最大痛点
- **静默失败普遍存在**：插件因单个非函数导出被整体禁用无提示（#41234）、权限提示不持久化导致“假死”（#41823/41849）、UI 权限设置被 opencode.json 静默覆盖（#41846）——错误不可见性是反复出现的主题
- **多客户端/多进程稳定性**：多 TUI 共享 server 时事件串目录（#39181）、SQLite 并发锁问题（#54396）
- **配置发现机制**：项目级 `.opencode` 加载失败（#53839）直接影响 subagent 工作流
- **V1 贡献者迁移成本**：多个 PR 因 V1 停止接收而被迫重定向 V2，插件系统迁移负担被多次提及

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-10-11

## 📌 今日速览

今日发布 v0.25.1-preview.2 预览版，修复了远程 Hosts 替换丢失绑定的问题。**Managed Agent（托管多智能体架构）继续主导社区讨论**，H4b/H4f 交付切片新增多个 P1/P2 级稳定性问题，包括会话永久阻塞和子代理取消失效等严重缺陷。此外，headless/SDK 模式因自动记忆任务导致结果延迟 40 秒至 5 分钟的 P1 问题值得 SDK 用户关注。

---

## 🚀 版本发布

### [v0.25.1-preview.2](https://github.com/QwenLM/qwen-code/releases)
- **fix(agents)**: 替换选中的远程 Hosts 时不再丢失绑定（PR #13430，@yiliang114）
- **test(core)**: 关闭 #12693 合并后审查跟进
- 同日发布 [v0.25.0-nightly.20261010](https://github.com/QwenLM/qwen-code/releases)，包含相同修复内容

---

## 🔥 社区热点 Issues

### 1. [#12380 · Managed Agent 双路径架构提案](https://github.com/QwenLM/qwen-code/issues/12380) · 💬 51 评论
定义分阶段托管智能体架构：保留现有 TypeScript 智能体循环、模型推理与工具环境解耦、Session 持久所有权与可恢复工具执行。这是当前社区讨论最热烈的架构级提案，已进入 in-progress 状态。

### 2. [#13078 · 每日依赖 CVE 审计失败](https://github.com/QwenLM/qwen-code/issues/13078) · 💬 17 评论
例行安全审计连续失败，可能存在新的高危漏洞，涉及 CI/CD 流程，运维侧需持续关注。

### 3. [#13851 · headless/SDK 模式结果输出延迟（P1）](https://github.com/QwenLM/qwen-code/issues/13851) · 💬 4 评论
非交互模式的最终 `result` 需等待托管自动记忆任务（extract + dream）完成，每个任务消耗 28k–36k token，导致 40 秒至 5 分钟的输出空窗，而 TUI/ACP 模式即时返回。**对 SDK 集成方影响直接，已标记 ready-for-agent。**

### 4. [#13873 · 唤醒泵与接管续跑竞态导致 Session 永久阻塞（P1）](https://github.com/QwenLM/qwen-code/issues/13873) · 💬 3 评论
Harness 在前台代理等待期间重启且 journal 中存在唤醒输入时，Session 将被永久阻塞。H4b 后续发现的严重稳定性缺陷，今日新提。

### 5. [#13785 · Multi-Agent 公共契约上的智能体身份维度](https://github.com/QwenLM/qwen-code/issues/13785) · 💬 5 评论
让多智能体执行在已发布的公共契约上可表达——可归因、树状结构、可中断。明确声明不是新服务而是 API 设计问题，已 ready-for-human。

### 6. [#13492 · XML 工具调用恢复丢失外层调用](https://github.com/QwenLM/qwen-code/issues/13492) · 💬 9 评论
PR #13515 已合并修复引号内工具标记被误派发，但外层调用恢复仍待 PR #13579。相关问题 [#13787](https://github.com/QwenLM/qwen-code/issues/13787) 指出恢复过程在多调用大响应上重复前缀扫描导致性能退化。

### 7. [#13746 · H4f 公共任务取消与子任务事件流](https://github.com/QwenLM/qwen-code/issues/13746) · 💬 5 评论
Stage H4 交付图的 H4f 切片：公共任务取消 API 及子任务的 task-event / output-cursor 流。配套修复 PR #13877 今日提交（见下文）。

### 8. [#13847 · 批内无 Runtime 工作的 Harness 崩溃阻塞主 Session](https://github.com/QwenLM/qwen-code/issues/13847) · 💬 5 评论
仅含后台代理启动或 team 调用的 Turn 在 Harness 崩溃后缺少 mid-batch 持久化标记，替换 Harness 无法恢复。

### 9. [#13875 · 父 Session 关闭等待而非停止运行中的子 Turn](https://github.com/QwenLM/qwen-code/issues/13875) · 💬 3 评论
cancel-then-close 后子代理仍在运行——关闭语义与取消语义冲突，今日新提。

### 10. [#13861 · Python SDK 无法在 Windows 上启动 qwen.cmd shim](https://github.com/QwenLM/qwen-code/issues/13861) · 💬 4 评论
npm 安装的 Windows shim 导致 SDK 抛出 `WinError 2`，Windows 平台 SDK 用户的基础可用性问题。

---

## 🔀 重要 PR 进展

| PR | 内容 | 作者 |
|---|---|---|
| [#13877](https://github.com/QwenLM/qwen-code/pull/13877) | 修复 H4f 真实栈验收发现的问题：Hosted Harness 重启后任务取消在半开连接上永久挂起，流关闭不再等待读取方持有的锁 | @wenshao |
| [#13872](https://github.com/QwenLM/qwen-code/pull/13872) | #13753 I2 跟进：停止的 worktree 运行现在会正确丢弃 worktree，合并前完成审查遗留项 | @wenshao |
| [#13682](https://github.com/QwenLM/qwen-code/pull/13682) | 恢复 dispatcher 附件缓存丢失后已接受的 Workspace 审批应答，协调并发会话标题 | @yiliang114 |
| [#13674](https://github.com/QwenLM/qwen-code/pull/13674) | 默认关闭的部署开关：授权公共 REST/WebShell Workspace Session 使用前台 Shell 配置（强制审批模式） | @doudouOUC |
| [#13654](https://github.com/QwenLM/qwen-code/pull/13654) | 工具发布读回与流验证移至持久化有界后台 worker，上传在输入就绪记录提交后才返回 HTTP 202 | @doudouOUC |
| [#13773](https://github.com/QwenLM/qwen-code/pull/13773) | 子代理准入时预计算 result-hook 挂载数，前后台请求均可在创建子任务前拒绝并解释原因 | @yiliang114 |
| [#13737](https://github.com/QwenLM/qwen-code/pull/13737) | 回退（rewind）通过 source 身份解析 legacy Turn，恢复的会话密钥不能授权文件恢复 | @yiliang114 |
| [#13681](https://github.com/QwenLM/qwen-code/pull/13681) | WebShell 新增"Send now"：Turn 运行中排队的消息可立即发送，保留排队/可编辑/可删除原有行为 | @wenshao |
| [#13867](https://github.com/QwenLM/qwen-code/pull/13867) | 新增 `HostedTeamLeadMySqlIT`，CI 中用真实 Spring + MySQL 端到端跑 H4e-b1 team 流程 | @wenshao |
| [#13219](https://github.com/QwenLM/qwen-code/pull/13219) | 为 managed-agent 全栈异步重试循环加上预算与终态，修复永久卡死的消息投影 | @wenshao |

---

## 📈 功能需求趋势

1. **Managed Agent / 多智能体（最热）**：#12380、#13785、#13746、#13847、#13873、#13875 等十余条 Issue 围绕托管智能体架构的会话管理、任务取消、崩溃恢复展开，是当前绝对的路线图主线。
2. **WebShell / 平台化分发**：Session cwd 切换（PR #13760）、公共前台 Shell（PR #13674）、移动端 UX 建议（#13111、#13880）持续演进。
3. **SDK / 非交互模式稳定性**：#13851 结果延迟、#13863 重连包装器泄漏、#13861 Windows 启动失败——SDK 侧问题密集。
4. **长上下文与 Token 管理**：#12333 呼吁为 token 节省改动建立工具召回率/任务成功率的基准门槛；#13876 compaction 上限作用域问题。
5. **终端 UI 体验**：OpenTUI 对话框溢出（#13758）、RTL/LTR 双向文本渲染（#13837）、Unicode 补充字符补全损坏（#13865）、OSC 7501 状态协议支持（#13870）。

---

## ⚠️ 开发者关注点

- **崩溃恢复与状态一致性是最大痛点**：managed-agent 栈近期密集暴露“Harness 重启后 Session 阻塞/审批丢失/子代理失控”类问题，异步重试无终态是共性根因。
- **headless/SDK 延迟**：自动记忆任务阻塞最终结果的 P1 问题影响 CI/自动化管道，建议关注修复进度。
- **性能回归**：XML 恢复的重复前缀扫描（#13787）、内存写入触发 prompt 重处理（#11550）在长上下文场景下被反复报告。
- **平台兼容性**：Windows shim 启动失败（#13861）、Linux close/delete 复测（#13871）提示跨平台验收仍在补课。
- **安全**：每日 CVE 审计持续失败（#13078），依赖升级待确认。

---
*数据来源：GitHub QwenLM/qwen-code（过去 24 小时）· 由 AI 自动生成，仅供参考*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-10-11

## 📌 今日速览

过去 24 小时无新版本发布，但社区活跃度较高：v0.10.1 在 Windows 10 1607 上曝出启动失败的关键 bug（#6953），同时新增两个与 session resume/fork 相关的边界条件问题（#6954、#6955）。PR 侧以质量治理为主——一批 `dead_code` 清理 PR 合入，多个 dependabot 依赖升级完成合入，Windows 下目录 junction 导致 artifacts 写入失败的修复也已关闭。

---

## 🐛 社区热点 Issues（共 6 条，全部列出）

1. **#6953 [bug]** Windows 10 1607 上 v0.10.1 启动失败：未解析的导入 `DeriveCapabilitySidsFromName`（0xC0000139）
   作者 @LmeSzinc | [链接](https://github.com/codewhale-hq/Codewhale/issues/6953)
   **关注度最高的 issue**：从 v0.10.0 升级后程序完全无法启动，属回归性严重问题，涉及较旧版本 Windows 的兼容性，建议相关环境用户暂缓升级。

2. **#6955 [needs-triage]** 超过 8 MiB 的 session 文档无法 resume/fork，且拒绝提示未给出补救方案
   作者 @7jrxt42BxFZo4iAnN4CX | [链接](https://github.com/codewhale-hq/Codewhale/issues/6955)
   指出 journal 无上限增长是超出限制的根源，与 #6842（journal 无边界）问题相关，影响长会话用户。

3. **#6954 [needs-triage]** 含原始 sub-agent handoff 的历史会话无法 resume——确认比对逻辑与保存文档不一致
   作者 @7jrxtJ42BxFZo4iAnN4CX | [链接](https://github.com/codewhale-hq/Codewhale/issues/6954)
   与 #6955 同属 resume 可靠性问题，两 issue 报告质量高，均待官方 triage。

4. **#6951 [security, bot]** 每日安全扫描 2026-10-10
   @devin-ai-integration[bot] | [链接](https://github.com/codewhale-hq/Codewhale/issues/6951)
   CodeQL 告警列表因 `GITHUB_CODEWHALE_SECURITY_PAT` 未配置而无法拉取——**自动化安全流程存在配置缺口，值得关注**。

5. **#5836 [OPEN]** Cloud dispatch：退役旧 launcher 并明确 Computer provider 边界
   @Hmbown | [链接](https://github.com/codewhale-hq/Codewhale/issues/5836)
   长期规划项，0.10.1 时点重新 triage 为未启动，涉及 provider-neutral trait 设计，是架构层重要决策。

6. **#5837 [CLOSED]** Computer image 重建（含 codewhale app-server）
   @Hmbown | [链接](https://github.com/codewhale-hq/Codewhale/issues/5837)
   已关闭。Board 决议：**移除 openvscode-server sidecar 与 VS Code 扩展，路线图中不再支持 VS Code**；方向转向 AWS Lambda microVM。

---

## 🔧 重要 PR 进展（11 条中选取关键项）

**新开 / 进行中：**

1. **#6950** feat(plugins): CLI 安装与应用内 OAuth 登录 — @LIghtJUNction
   [链接](https://github.com/codewhale-hq/Codewhale/pull/6950)
   补齐 PR #6805 引入的 OAuth provider 体验：无需单独终端命令即可登录，简化插件从源码安装的入口。用户体验向的重要改进。

2. **#6952** fix(workflow): 修复 gate 阻塞自身角色导致 run 失败 — @Lstarsky0
   [链接](https://github.com/codewhale-hq/Codewhale/pull/6952)
   修复 #6945：`role: "implement"` 且 `blocks_role: "implement"` 的 gate 使流程死锁，phase 派发时直接失败。

3. **#6943** chore(tui): 移除五个模块的 blanket dead_code allow — @Lstarsky0
   [链接](https://github.com/codewhale-hq/Codewhale/pull/6943)
   #5587 代码清理系列的一环，暴露出部分 allow 已经过时。

**已合入 / 关闭：**

4. **#6947** fix(artifacts): 解析链接的 state root，修复迁移后 Codewhale home 失效 — @SparkofSpike
   [链接](https://github.com/codewhale-hq/Codewhale/pull/6947)
   **Windows 用户重要修复**：通过 junction 将 `.codewhale` 放到其他卷时，所有 session-artifact 写入失败、`/compact` 直接报错。

5. **#6948** fix(tui): session 切换被拒时指明阻塞的具体工作 — @SparkofSpike
   [链接](https://github.com/codewhale-hq/Codewhale/pull/6948)
   改进错误提示，明确告知是哪个 turn / 维护任务 / 后台任务阻塞了切换。

6. **#6946** chore: 移除 30 个不再覆盖任何内容的 dead_code allows — @Lstarsky0
   [链接](https://github.com/codewhale-hq/Codewhale/pull/6946)
   使用 `RUSTFLAGS="--force-warn dead_code"` 系统性清理陈旧 allow。

7. **#6823/#6824/#6826** 依赖升级：thiserror 2.0.21、encoding_rs 0.8.42、uuid 1.27.0 — @dependabot[bot]
   [thiserror](https://github.com/codewhale-hq/Codewhale/pull/6823) | [encoding_rs](https://github.com/codewhale-hq/Codewhale/pull/6824) | [uuid](https://github.com/codewhale-hq/Codewhale/pull/6826)
   常规依赖维护批量合入。

8. **#6822** build(deps): rio-vt 0.5.26 → 0.5.28 | **#6825** CI toolchain 升级 — @dependabot[bot]
   [rio-vt](https://github.com/codewhale-hq/Codewhale/pull/6822) | [toolchain](https://github.com/codewhale-hq/Codewhale/pull/6825)

---

## 📈 功能需求趋势

- **Session 持久化可靠性**：resume/fork 的边界条件（大小上限 #6955、sub-agent handoff #6954）是当前最高频的新问题方向。
- **插件与认证体验**：CLI 安装 + 应用内 OAuth（#6950）表明社区在推动插件生态的易用性。
- **云端执行架构**：Computer image 重建、AWS Lambda microVM 方向（#5836/#5837）是长期架构主线。
- **代码质量治理**：#5587 系列持续产出，dead_code 清理已成常态化工作流。

## ⚠️ 开发者关注点

1. **Windows 兼容性是最大痛点**：旧版 Win10 启动崩溃（#6953）与 junction 路径问题（#6947）集中出现。
2. **错误提示质量**：多处反馈拒绝性错误未说明原因或补救方式（#6955、#6948），可观测性有提升空间。
3. **安全自动化配置缺口**：安全扫描的 PAT 未配置（#6951），CodeQL 告警实际处于盲区。
4. **旧版本环境支持策略**：Win10 1607 这类 LTSB 环境是否继续支持需要官方表态。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-10-11

## 📌 今日速览

今日无新版本发布，但社区活跃度高（48 条 Issue 更新、7 个 PR）。核心动态集中在三方面：**Linux 原生包分发（.deb/.rpm）** 的需求与实现同步推进、**扩展 API 的中止/续跑（abort-with-continuation）** 能力落地 PR、以及一批 TUI 渲染与网络健壮性问题被集中报告和关闭。

---

## 🔥 社区热点 Issues

1. **[#7547](https://github.com/earendil-works/pi/issues/7547) [Windows] Pi 在 Windows 上的使用方式调研** — 80 条评论，官方发起的 Windows 支持路线讨论，涉及 WSL、原生、mintty 等多种运行方式，是决定 Windows 投入方向的投票帖，持续发酵中。

2. **[#10031](https://github.com/earendil-works/pi/issues/10031) [bug] ESC 中止思考后卡在 "Working..."** — 28 条评论后关闭。自 ~v0.84.0 起多机器复现的高频卡死问题，仅能 Ctrl+C 后 `pi -c` 恢复，关闭意味着已有修复。

3. **[#10762](https://github.com/earendil-works/pi/issues/10762) Headless `pi -p` 在连接静默断开时永久挂起** — 当日创建即关闭。OpenAI 兼容 provider 掐断连接时超时不生效，30 分钟内三波挂死，对 headless/自动化场景是致命问题。

4. **[#8036](https://github.com/earendil-works/pi/issues/8036) [bug] Edit 工具渲染超大 diff 时 TUI 崩溃** — 14.5 MB 的 HTML diff 直接拖崩 TUI，编辑本身成功但界面崩溃，影响大文件工作流。

5. **[#10605](https://github.com/earendil-works/pi/issues/10605) [bug] ChatGPT/OpenAI OAuth 403** — OpenAI Plus 订阅用户登录即报 `subscription_sharing_user_not_eligible`，阻断 ChatGPT 订阅用户接入。

6. **[#10256](https://github.com/earendil-works/pi/issues/10256) [bug] 0.99.x mintty 下终端颜色查询泄漏进提示符** — 终端颜色查询应答文本泄漏到 prompt 且 BEL 意外打开外部编辑器，0.87.1 正常，属回归。

7. **[#9512](https://github.com/earendil-works/pi/issues/9512) [last-read] GPT-6 Astra max 推理下压缩撞输出上限** — Context compaction 摘要被 token cap 截断导致恢复失败，高推理档模型长会话稳定性问题。

8. **[#10758](https://github.com/earendil-works/pi/issues/10758) 修改 Git 包 pinned SHA 后启动不更新 checkout** — 直接编辑 settings.json 换 SHA 会静默加载旧代码，配置与实际运行不一致，属安全隐患级 bug，当日关闭。

9. **[#10785](https://github.com/earendil-works/pi/issues/10785) 恢复会话丢失动态激活的工具** — resume 后 `defaultActive: false` 和 `deferred` 工具被移除，影响扩展生态的会话连续性体验。

10. **[#10764](https://github.com/earendil-works/pi/issues/10764) 交互提案：附带提问后保留原任务** — 中文社区提出的交互改进：运行中插问后原任务被静默终止，需要“继续”才能恢复，反映 steering 体验的真实痛点。

---

## 🔧 重要 PR 进展

1. **[#10766](https://github.com/earendil-works/pi/pull/10766) 扩展中止后同 run 续跑**（CLOSED）— 实现 `ctx.abort()` 后恢复同一 run、注入提醒继续执行，解决 #10767 的 stranded follow-up 问题，是扩展 API 的重要能力补齐。

2. **[#10784](https://github.com/earendil-works/pi/pull/10784) / [#10782](https://github.com/earendil-works/pi/pull/10782) Linux .deb/.rpm 包构建**（CLOSED）— 配套 #10783/#10786，将独立二进制重打包为原生包，让 apt/dnf 可管理安装。

3. **[#10789](https://github.com/earendil-works/pi/pull/10789) 合并 session-JSONL 写系统调用**（CLOSED）— 初始创建/重写从每条一写优化为一次写，appends 保持同步持久，I/O 性能优化。

4. **[#10751](https://github.com/earendil-works/pi/pull/10751) 采用 pi.dev 配置 schema 为规范 $id**（OPEN）— models/settings/keybindings/theme schema 统一指向官方端点，配置生态标准化。

5. **[#10774](https://github.com/earendil-works/pi/pull/10774) 修复 herdr 中的 kitty 图片**（OPEN）— #10573 导致 1.1.0 在 herdr 中内联图片失效，此 PR 恢复其 kitty 图形协议支持。

6. **[#10726](https://github.com/earendil-works/pi/pull/10726) codemode 忽略 Node watch 通知**（CLOSED）— 修复 `node --watch` 下 SDK host 因依赖通知被误判为损坏消息而报 "Sandbox bridge broken"。

7. **[#10779](https://github.com/earendil-works/pi/issues/10779) Durable 通用虚拟模型路由贡献提案**（Issue，已关闭）— 完整实现 host 提供的虚拟模型到物理模型的解析 + 重试 checkpoint 持久化，社区高质量贡献。

---

*（今日 PR 共 7 条，其余 3 条为上述 .deb/.rpm 的重复提交与合并请求）*

---

## 📈 功能需求趋势

- **分发与安装体验**：.deb/.rpm 原生包（多条 Issue + PR 齐推）、Windows 支持路线收敛（#7547 热议），社区对“非 npm 用户”的安装体验诉求强烈。
- **扩展 API 健壮性**：abort 后续跑（#10766/#10767）、可靠消息发布确认（#8023）、resume 后工具状态保持（#10785）——扩展作者对会话生命周期能力需求集中。
- **网络与 Provider 韧性**：静默断连超时失效（#10762）、Copilot 硬编码 5s 超时无重试（#10775/#10238）、OAuth 403（#10605）、图像模型走错端点（#10652）。
- **TUI 渲染细节**：终端兼容性（mintty/ConPTY、herdr、VS Code 内嵌终端）与鼠标/选区交互成为高频词。
- **生态互操作**：读取 Claude Code `.mcp.json`（#10281）、包目录索引（#10145）。

---

## ⚠️ 开发者关注点

1. **稳定性优先**：卡 "Working..."、headless 挂起、TUI 崩溃等核心可用性问题虽然当日批量关闭，但反映回归测试覆盖（尤其 0.99.x→1.1.0）是当前最大风险面。
2. **Headless/自动化不可靠**：无超时、无重试、无退出的“三无”挂起，直接影响 CI 与 agent 编排场景。
3. **长上下文管理**：GPT-6 Astra max 推理下 compaction 失败，说明各家模型输出上限差异需差异化处理。
4. **配置一致性**：直接编辑 settings.json 的场景（Git 包 SHA）缺乏校验与反馈，静默不一致最伤信任。
5. **终端碎片化**：mintty、herdr、WezTerm、VS Code 终端各有怪癖，能力探测与降级策略是长期工程负担。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报（2026-10-11）

## 📰 今日速览

今日发布 **v18.8.9**，新增能力驱动的多路复用终端启动（tmux/Zellij/Herdr/CMUX）。昨日的 v18.8.8 引入 `Agent.setModelResolver()` 等核心 API。Issue 活跃度很高（71 条更新），主要集中在提供商目录准确性、SDK 多会话隔离和 Tern 原生 TUI 稳定性；维护者 roboomp 今天密集合并修复 PR，多个 P1/P2 问题当日闭环。

---

## 🚀 版本发布

### v18.8.9
- **pi-ai**：state 字段渲染去除尾部空白、规范化空集合格式，保证 prompt 输出一致性
- **pi-coding-agent**：新增能力驱动的扩展终端启动，支持 tmux、Zellij、Herdr、CMUX

### v18.8.8
- **pi-agent-core**：新增 `Agent.setModelResolver()`，对 agent 通过 `setModel` 采用的每个模型（含当前模型）在使用前进行适配（[PR #15048](https://github.com/can1357/oh-my-pi/pull/15048) by @H4vC）
- 新增 `CompactionSettings` 相关配置

---

## 🔥 社区热点 Issues（Top 10）

1. **#7982 为每次 task 调用设置模型的安全方式**（18 评论 / 9 👍）
   持续两月的热门增强需求：允许在 task 工具和 eval 脚本中按调用粒度指定模型，且不污染 agent 文件中的默认模型。是 SDK/编排场景的刚需。
   [链接](https://github.com/can1357/oh-my-pi/issues/7982)

2. **#4614 允许会话选择活跃 ChatGPT 账户**（9 评论）
   多账户登录后缺少切换入口，与 #4829（`/usage switch` 子命令）同属多凭据管理这一高频痛点。
   [链接](https://github.com/can1357/oh-my-pi/issues/4614)

3. **#4627 OverlayFS 后端持续导致损坏、子代理看到无关变更**（9 评论，已关闭）
   隔离后端将可写的父仓库作为 overlay lower 层，子代理隔离形同虚设。P1 级架构性问题的关闭进展值得关注。
   [链接](https://github.com/can1357/oh-my-pi/issues/4627)

4. **#15314 智谱 glm-5.3-flashx 缺失于内置目录**（5 评论，已关闭）
   FlashX 曾被当作“非推理”SKU 排除，但其已强制开启 thinking。当日由 PR #15315 修复。
   [链接](https://github.com/can1357/oh-my-pi/issues/15314)

5. **#15229 SDK：子代理异步结果被投递到无关的顶层会话**（5 评论，已关闭，P1）
   同一 Bun 进程管理多个顶层会话时，子代理的 IRC 异步结果写入错误会话并触发其继续执行。报告者已提供确定性复现，当日修复。
   [链接](https://github.com/can1357/oh-my-pi/issues/15229)

6. **#15230 图片预算钳制逐请求驱逐旧图，重写整个 Anthropic prompt cache**（5 评论）
   每张新截图都会使缓存失效，直接影响 GUI 自动化场景的成本与延迟。
   [链接](https://github.com/can1357/oh-my-pi/issues/15230)

7. **#15302 Tern 恢复长会话白屏：首帧超 24 MiB 消息上限**（4 评论，已关闭）
   18.8.9 + Tern 0.7.2 原生 TSP 模式下长会话恢复空白，当日由 PR #15303 修复。
   [链接](https://github.com/can1357/oh-my-pi/issues/15302)

8. **#15311 Anthropic 限流时自动压缩睡眠等待、无回退无报错**（3 评论）
   429 时原样等待 retry-after（案例中长达 16.7 小时），不切换压缩模型或方法。PR #15313 当日提交修复。
   [链接](https://github.com/can1357/oh-my-pi/issues/15311)

9. **#5380 RPC 模式下增加 set_mode 命令切换 plan 模式**（4 评论）
   GUI 宿主（如 Paseo）无法在运行时切换 plan 模式，headless/RPC 集成的长期诉求。
   [链接](https://github.com/can1357/oh-my-pi/issues/5380)

10. **#15243 OpenCode Go/Zen 的 Claude Haiku 5.5 走错 API 路径**（3 评论）
    被 OpenCode 端点以 Anthropic Messages 暴露的模型却被 OMP 路由到 Chat Completions，反映目录 API 声明准确性问题的普遍性。
    [链接](https://github.com/can1357/oh-my-pi/issues/15243)

---

## 🔧 重要 PR 进展（Top 10）

1. **[PR #15321](https://github.com/can1357/oh-my-pi/pull/15321) fix(session): 阻断 print 模式的 todo 提醒续跑**（已关闭）
   修复 `omp --resume -p` 回答后残留 todo 触发无限续跑、进程不退出的问题（对应 Issue #15320）。

2. **[PR #15319](https://github.com/can1357/oh-my-pi/pull/15319) fix(ai): 恢复环境变量 OAuth 令牌的 Claude 配额显示**（已关闭）
   修复 `ANTHROPIC_API_KEY` 传入 OAuth 令牌时 `/usage` 丢失配额（对应 #15318）。

3. **[PR #15303](https://github.com/can1357/oh-my-pi/pull/15303) fix(tui): 限制原生帧大小并恢复丢失表面**（已关闭）
   解决 Tern 长会话恢复白屏（#15302）。

4. **[PR #15315](https://github.com/can1357/oh-my-pi/pull/15315) fix(catalog): 智谱目录补齐 GLM-5.3-FlashX**（已关闭）

5. **[PR #15313](https://github.com/can1357/oh-my-pi/pull/15313) fix(compaction): 跳过超长 provider 重试等待**（开放）
   429 时按 methodOrder 推进到下一个压缩方法，而非等满 16.7 小时。

6. **[PR #15043](https://github.com/can1357/oh-my-pi/pull/15043) feat: 将子代理暴露为 ACP 子代理会话**（开放）
   实现 ACP Subagent Sessions RFD，让 T3 Code 等 harness UI 以独立会话形式展示每个子代理，是 SDK 集成方向的重大改进。

7. **[PR #15268](https://github.com/can1357/oh-my-pi/pull/15268) feat: 在多路复用器面板中打开注解文件**（开放）
   复用 18.8.9 的终端启动抽象，扩展 `/annotate` 的 Ctrl+G 在 tmux/Zellij 新面板中用 `$VISUAL`/`$EDITOR` 打开文件。

8. **[PR #15280](https://github.com/can1357/oh-my-pi/pull/15280) feat(computer): 应用静默后以 diff 报告输入变化**（开放）
   点击后不再让模型花下一轮读回整个窗口，显著降低 GUI 自动化的 token 消耗。

9. **[PR #15322 / #15323](https://github.com/can1357/oh-my-pi/pull/15322) fix(catalog): Groq 兼容修复**（开放，review:p1）
   一个修复 Groq 拒绝 `reasoning_content`/`enable_thinking` 导致 Kimi/Qwen 400 的问题；另一个让 Groq 实时模型列表替换内置目录（过滤掉 Whisper 等非 chat 模型）。

10. **[PR #15206 / #15207](https://github.com/can1357/oh-my-pi/pull/15206) perf: 流式热路径优化**（开放）
    diff 渲染每行只解析一次、消除每 token 的数组拷贝、削减每 chunk 的流处理开销——纯性能向贡献。

---

## 📈 功能需求趋势

- **多凭据/多账户管理**：ChatGPT 账户切换（#4614）、`/usage switch`（#4829）、OAuth 配额显示（#15318）集中出现，多凭据轮换是付费用户核心诉求。
- **SDK / headless 集成深化**：按调用设模型（#7982）、RPC set_mode（#5380）、ACP 子代理会话（PR #15043）、extension handler 预算（#15290 / PR #15295）。
- **提供商目录准确性**：智谱 FlashX、OpenCode Zen Jev 定价缺失、Devin 工具调用 ID 规范化、Groq 字段兼容——第三方提供商生态的“长尾维护”占今日 Issue 相当大比重。
- **TUI 可读性与体验**：折叠工具调用/思考块（#15198）、计划模式内细化计划（#15239）、状态栏紧凑指标（PR #9314）。
- **成本与缓存效率**：图片预算钳制破坏 prompt cache（#15230）、计算机工具 diff 化回报（PR #15280）。

---

## ⚠️ 开发者关注点

1. **SDK 多会话隔离脆弱**：#15229（P1，已修复）暴露异步结果跨会话串扰，SDK 用户应关注此类竞态修复。
2. **`--resume -p` / headless 模式的收尾可靠性**：todo 提醒续跑导致进程挂起（#15320），自动化管道用户建议升级。
3. **缓存友好性**：多图会话（截图密集型 GUI 自动化）目前每请求重写 prompt cache，成本敏感用户需注意（#15230）。
4. **压缩回退策略**：限流时可能长时间静默等待（#15311），建议显式配置 `compaction.methodOrder` 并关注 PR #15313。
5. **Tern 原生 TUI 仍在快速打磨**：白屏（#15302）、bash 卡片标题缺失（#15281）等问题在 18.8.8–18.8.9 间密集出现，遇到异常可先尝试 `PI_TUI_NATIVE=0` 规避。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*