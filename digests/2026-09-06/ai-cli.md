# AI CLI 工具社区动态日报 2026-09-06

> 生成时间: 2026-09-06 03:33 UTC | 覆盖工具: 11 个

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
**数据窗口：2026-09-06（过去 24 小时）**

---

## 1. 生态全景

AI CLI 工具已从简单的命令行补全演进为**多 agent 编排平台**，subagent/Fleet/worktree 并行成为各家标配方向。市场竞争呈现“头部厂商（Anthropic/OpenAI/Google）押注新模型落地、独立工具（OpenCode/Pi/oh-my-pi）拼架构灵活性、国产工具（Kimi/Qwen/DeepSeek）追生态兼容”的三层格局。值得注意的是，**新模型上线初期的适配问题**（GPT-6 Astra、Fable 5.1、Gemini 3.5）在各社区集中爆发，成为当前 bug 的主要来源。同时“静默失败”（静默降级、静默截断、静默改写参数）已成为跨所有工具的最强负面口碑关键词。

---

## 2. 各工具活跃度对比

| 工具 | 热点 Issues 数 | 活跃 PR 数 | Release | 本日核心动态 |
|---|---|---|---|---|
| **Claude Code** | 10 | 2 | v2.1.263 | Function Hooks 提案发酵（112 评论），Windows 问题集中 |
| **OpenAI Codex** | 10+ | 10+ | 无 | 语音/WebRTC 栈密集合入（10+ PR），会话历史 bug 爆发 |
| **Gemini CLI** | 10 | 10 | v0.60.0-nightly | 模型名静默改写两个竞争修复方案，P1 挂起问题多 |
| **GitHub Copilot CLI** | 10 | 0 | 无 | 2.98.0 升级致 Worktree 全面失效，无 PR 活动 |
| **OpenCode** | 10 | 10 | 无 | 社区高性能 PR 密集（netlog 级分析），timeline 架构重构 |
| **Qwen Code** | 10 | 10 | v0.23.0 / v0.23.1-preview | Web Shell 工作流可视化，CI/CD 债务成瓶颈 |
| **CodeWhale (DeepSeek TUI)** | 10 | 10+ | v0.9.12 | 品牌迁移，dogfooding 修复当日闭环 |
| **Pi** | 10 | 10 | v0.85.1 | GPT-6 Astra 支持，但发布打包事故 |
| **oh-my-pi** | 10 | 10 | v18.1.11 | persona 架构演进，TUI 性能专项 |
| **Kimi Code CLI** | 2 | 0 | 无 | 静默期，仅 VS Code 渲染丢字符新报 |
| **DeepSeek Harness** | 0 | 0 | 无 | 完全无活动 |

**观察**：OpenCode、CodeWhale、Pi、oh-my-pi 呈现“issue 即修复”的高转化节奏；Copilot CLI 与 Kimi 本日社区投入明显不足；Codex 虽无 release，但 bot 密集提交 PR 表明内部开发强度极高。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **多 Agent / Subagent 正确性** | Claude Code、Gemini CLI、CodeWhale、oh-my-pi、Copilot CLI | 子代理隔离性破坏（CC #92426）、误报成功（Gemini #22323）、write claim 泄漏（CW #5906）、cwd 错误（OMP #10914）、内置子代理与工具集不匹配（Copilot #4729） |
| **会话数据完整性与回滚** | Codex、Copilot CLI、OpenCode、Pi | `/rewind` 双向回滚（Codex #11626，👍212）、升级丢会话（OpenCode、Copilot worktree 失效）、timeline 数据模型重构 |
| **Windows 平台一等公民化** | Claude Code、Codex、Gemini CLI、CodeWhale、Pi、oh-my-pi、Copilot CLI | CC 桌面端崩溃/置顶、Codex 进程泄漏与启动失败、Pi 52 条评论调研帖、CW CRLF 静默改写——**7/11 工具报告 Windows 专项问题** |
| **MCP 可靠性** | Claude Code、Copilot CLI、Gemini CLI、Qwen Code、oh-my-pi | 连接状态与可用性脱节、工具超时后永久剥离、config 不加载、参数被静默改写 |
| **计费/配额透明度** | Codex、OpenCode、Claude Code、Pi | WebSocket 重连烧额度、百分比求和误封（OpenCode #47547）、cache TTL 计费错误 |
| **新模型首日适配** | Codex、Pi、oh-my-pi、Claude Code、Gemini CLI | GPT-6 Astra 路由错误、Fable 降级/计费话术、模型名静默改写 |
| **上下文/压缩优化** | Pi、oh-my-pi、Copilot CLI、Codex、Gemini CLI | 服务端压缩、system delta 增量传递、缓存 TTL 联动 compact |
| **可编程扩展点** | Claude Code、OpenCode、Pi、oh-my-pi | Function Hooks（112 评论）、session lifecycle hooks、句中调用 skills |

---

## 4. 差异化定位分析

| 工具 | 定位 | 技术路线特点 |
|---|---|---|
| **Claude Code** | 企业级深度编码代理 | 插件/Hooks 生态最成熟，社区提案驱动；短板在桌面端与 Windows |
| **OpenAI Codex** | 全栈交互平台（激进扩张） | 原生语音 WebRTC 栈 + 多端（Android/Web）协同，功能面最广但会话可靠性欠账 |
| **Gemini CLI** | 开源可扩展框架 | P1 稳定性问题多，但架构提案（OS 沙箱、AST 工具）有前瞻性；迁移兼容是切入点 |
| **GitHub Copilot CLI** | GitHub 生态集成入口 | 本日无 PR、升级回归严重，处于工程投入低谷；prompt cache 优化提案见社区水准 |
| **OpenCode** | 模型中立的开源枢纽 | 架构最活跃（timeline、ACP v2、按模型工具策展），社区 PR 质量极高（附 netlog 数据） |
| **Qwen Code** | Web Shell / daemon 化探索 | 独特的 serve/web-shell 三端统一路线，但 CI 债务拖累发布节奏 |
| **CodeWhale** | 多 Agent Fleet 编排（转型期） | 创始人 dogfooding 驱动，当日修复闭环速度全场最快；正从 DeepSeek TUI 品牌迁移 |
| **Pi / oh-my-pi** | 极客向轻量框架 | mitsuhiko 系统消息重构、多 provider 接入最快（Astra 首日支持）；Pi 的发布工程是短板 |
| **Kimi Code CLI** | 模型入口型 CLI | 主打第三方 Agent 集成（在 Claude Code 中用 K2），本日近静默 |

---

## 5. 社区热度与成熟度

- **最活跃**：Claude Code（单 issue 112 评论）、Codex（语音 PR 风暴）、OpenCode（社区驱动开发标杆）
- **快速迭代期**：CodeWhale v0.9.x（当日 issue→PR 闭环）、Pi 0.85.x（版本快但发布质量欠佳）、Qwen 0.23.x、oh-my-pi 18.x
- **成熟稳定但欠账**：Claude Code（Windows 桌面端）、Copilot CLI（升级机制系统性缺陷）
- **低活跃/观望**：Kimi CLI、DeepSeek Harness

**成熟度悖论**：头部厂商工具 issue 绝对量大但修复响应分层（Codex 快、CC 慢）；小工具响应快但回归风险高（Pi 连续两版打包事故、OpenCode 1.17.x 性能回归）。

---

## 6. 值得关注的趋势信号

1. **“Truthful Failure” 成为新共识**：静默截断（CC Bash 8KB）、静默降级（Fable→Opus）、静默参数改写（OMP MCP）在所有社区引发最强烈反感——**宁可报错，不可静默**，应成为自建 agent 工具的设计铁律。

2. **会话数据模型是下一个竞争焦点**：Codex 的 ordinal/timeline 问题、OpenCode 的 timeline PR、oh-my-pi 桥接 Astra 压缩，均指向“可回滚、可分叉、可审计”的会话数据结构将是基础设施级差异点。

3. **语音交互进入 AI CLI**：Codex 单日合入 10+ WebRTC/Opus PR，预示 CLI 工具将从纯文本走向多模态，值得提前关注客户端架构（RTP 处理、跨平台构建）。

4. **多 Agent 并发正确性问题开始暴露**：write claim 泄漏、子代理隔离破坏、cwd 错误——多 agent 并行写入的协调机制（锁、声明生命周期）是被低估的工程难点。

5. **升级风险普遍化，锁定版本是当下务实策略**：Copilot worktree 失效、OpenCode 丢会话、Pi 全局安装即坏——生产环境建议版本锁定 + 会话数据库备份。

6. **ACP 互操作协议正在成型**：OpenCode（ACP v2 实现）、Qwen（ACP 委托 Claude Code）、CodeWhale 均在推进，跨工具 agent 互操作可能成为 2026 Q4 的关键变量。

7. **Windows 与中文/IME 支持是被忽视的增量市场**：7/11 工具报告 Windows 问题，Pi/CodeWhale 的 IME 问题反复出现——谁先补齐，谁获得这部分用户红利。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据来源：github.com/anthropics/skills | 截止 2026-09-06**

---

## 一、热门 Skills 排行（按社区关注度）

| # | Skill / PR | 功能与热点 | 状态 |
|---|---|---|---|
| 1 | **skill-creator eval 修复** [#1298](https://github.com/anthropics/skills/pull/1298) | 修复 `run_eval.py` 恒报 0% recall 的核心缺陷，关联 Issue #556（10+ 独立复现），描述优化循环此前在“优化噪音”。社区关注度最高的工具链修复 | OPEN |
| 2 | **document-typography** [#514](https://github.com/anthropics/skills/pull/514) | 解决 AI 生成文档的孤行、寡段落、编号错位等排版问题，被视为“所有 Claude 生成的文档都受益”的通用型 Skill | OPEN |
| 3 | **skill-quality/security-analyzer 元技能** [#83](https://github.com/anthropics/skills/pull/83) | 用于分析 Skill 本身质量与安全性的元技能，五维度评分，与社区安全讨论（#492）高度呼应 | OPEN |
| 4 | **frontend-design 改进** [#210](https://github.com/anthropics/skills/pull/210) | 重写官方前端设计 Skill，提升指令的可执行性与内部一致性，讨论活跃 | OPEN |
| 5 | **ODT Skill** [#486](https://github.com/anthropics/skills/pull/486) | OpenDocument 创建/模板填充/转 HTML，补齐开放格式文档生态 | OPEN |
| 6 | **Hivemind 多智能体编排** [#1628](https://github.com/anthropics/skills/pull/1628) | 用免费模型的 headless opencode worker 承担机械工作，Claude 只做规划/审查——“昂贵上下文才是稀缺资源”的理念引发共鸣 | OPEN |
| 7 | **self-audit 推理质量门禁** [#1367](https://github.com/anthropics/skills/pull/1367) | 交付前先做机械文件校验、再做四维推理审计，通用性强 | OPEN |
| 8 | **ServiceNow 平台 Skill** [#568](https://github.com/anthropics/skills/pull/568) | 覆盖 ITSM/SecOps/CSDM 等企业级场景，是企业工作流方向的代表 | OPEN |

---

## 二、社区需求趋势（源自 Issues）

1. **安全与信任机制**（最热，#492，43 评论）：社区 Skill 冒用 `anthropic/` 命名空间造成信任边界滥用，签名/命名空间隔离诉求强烈。
2. **组织内 Skill 共享**（#228，16 评论）：期望团队级 Skill 库与直接分享链接，替代 Slack 手动传文件。
3. **Skill 工具链可靠性**（#556、#1390、#1362）：评估脚本失效、跨平台（Windows）兼容、打包脚本破损——开发者最痛的日常问题。
4. **上下文效率**（#1487）：claude-api Skill 单次注入 ~156k token，社区呼吁渐进式加载设计。
5. **AI 输出质量管控**（#1385、#1329）：交付前审计、紧凑记忆符号等“元能力”类 Skill 需求上升。
6. **平台与协议互通**（#16、#29）：Skill 暴露为 MCP、支持 AWS Bedrock 等企业部署路径。

---

## 三、高潜力待合并 Skills（活跃且未合并）

- **#1298 skill-creator eval 修复** — 根因明确、复现充分，关联高热度 Issue，合并概率最高
- **#1602 跨组件稳定性修复**（mcp-builder 序列化、基准指标、编码）— 系统性 bug 修复包
- **#541 / #538**（docx ID 冲突、pdf 大小写路径）— 小而确定的官方文档 Skill 修复，@Lubrsy706 高产贡献者
- **#1367 self-audit** — 对应 Issue #1385 的提案落地，议题闭环完整
- **#514 document-typography** — 通用价值明确，讨论周期长且持续有更新

---

## 四、生态洞察

> **社区最集中的诉求是“让 Skills 本身可信、可靠、可共享”**——从修复评估工具链、治理命名空间安全，到组织级分发与上下文高效加载，均指向构建一个可持续的 Skill 生产与消费生态，而非单纯追求更多功能型 Skill。

---

# Claude Code 社区动态日报 — 2026-09-06

## 1. 今日速览

今日 Claude Code 发布 **v2.1.263**，为常规 bug 修复与稳定性改进版本。社区讨论焦点集中在两处：[@poteat](https://github.com/anthropics/claude-code/issues/91870) 提出的 **Function Hooks** 插件增强提案持续发酵（评论已破百），以及 Windows 平台上 Claude Desktop 的**窗口置顶（WS_EX_TOPMOST）**系列问题获得新的技术根因分析。此外，Fable 5/5.1 模型相关的降级、计费和平台行为问题仍是高频反馈领域。

---

## 2. 版本发布

**v2.1.263**（过去 24 小时）
- Bug fixes and reliability improvements（官方未提供详细 changelog）
- [Release 链接](https://github.com/anthropics/claude-code/releases)

---

## 3. 社区热点 Issues

1. **[#91870](https://github.com/anthropics/claude-code/issues/91870) — Function Hooks：让插件能力提升 10 倍** [OPEN]
   评论 112 / 👍 72，本周最热提案。借鉴 Express/Koa 的 `next` 中间件模型，通过参数化 `$` 对象上的副作用追踪实现深度且安全的插件定制能力。社区参与度极高，值得插件开发者持续跟进。

2. **[#53247](https://github.com/anthropics/claude-code/issues/53247) — Windows 下 Claude Desktop 崩溃后无法启动（Silo/Job Object 泄漏）** [OPEN]
   评论 66。崩溃后遗留孤儿 Job Object 导致 HRESULT 0x80070020，仅注销/重启可恢复。长期未修的 Windows 桌面端硬伤。

3. **[#92337](https://github.com/anthropics/claude-code/issues/92337) — Windows 主窗口间歇性获得 WS_EX_TOPMOST（Alt+Tab "失效"）** [OPEN, has repro]
   新提交的高质量复现，已捕获与 `LocalSessions.setFocusedSession` 的相关性，为置顶问题家族（#66516、#87895）提供了首个根因级线索。

4. **[#91188](https://github.com/anthropics/claude-code/issues/91188) — 请求将 MEMORY.md 压缩提醒阈值可配置** [OPEN]
   评论 24。auto-memory 硬编码加载 200 行 / 25KB，接近阈值时的提醒干扰工作流，用户要求可配置或可抑制。

5. **[#85111](https://github.com/anthropics/claude-code/issues/85111) — Bash 工具静默截断 >8KB 命令并误报为引号错误** [OPEN]
   隐蔽性强的工具层 bug，长命令（如 heredoc、内联脚本）场景下极具迷惑性。

6. **[#86875](https://github.com/anthropics/claude-code/issues/86875) — HTTP MCP server 显示已连接但调用工具报 "No such tool"** [OPEN, has repro]
   `/mcp` 列出工具正常，但实际调用失败，重启也无法解决。对依赖 HTTP 传输 MCP 的用户影响较大。

7. **[#90688](https://github.com/anthropics/claude-code/issues/90688) — Windows/VS Code: 睡眠唤醒后 OAuth refresh token 被拒（2.1.247 起回归）** [OPEN]
   被迫每日 `/login`，扩展启动时刷新竞态疑似根因，标记为 regression。

8. **[#91488](https://github.com/anthropics/claude-code/issues/91488) — Fable 5.1 套餐内额度不可用，弹窗话术误导** [CLOSED]
   Team 席位明明有未使用的 Fable 配额，切换模型却提示"需单独购买 credits"。近期 Fable 计费链路问题的典型案例。

9. **[#91991](https://github.com/anthropics/claude-code/issues/91991) — claude.ai/code Remote Control "New session" 附着到最近会话而非新建** [OPEN, has repro]
   Web 端远程控制的核心交互 bug。

10. **[#92426](https://github.com/anthropics/claude-code/issues/92426) — Agent 工具无视 subagent 定义，子代理继承主会话全部 prompt 和工具** [OPEN, has repro]
    今日新提交，若确认，对 subagent 机制的隔离性是根本性破坏，值得关注官方回应。

---

## 4. 重要 PR 进展

> 本周期内仅 2 个活跃 PR：

1. **[#87079](https://github.com/anthropics/claude-code/pull/87079) — 修复 `**` glob 模式不匹配零深度路径**
   `fnmatch` 中裸 `*` 已跨 `/`，导致 security-patterns.json 中 `**/*.ts` 规则静默漏掉顶层文件。因涉及**安全规则的静默失效**，建议优先审查合并。

2. **[#89404](https://github.com/anthropics/claude-code/pull/89404) — 修复 validate-agent.sh 首个警告即中止的问题**
   `set -euo pipefail` 与 `((x++))` 返回值交互导致误报有效 agent 文件（关联 #83803），由 @bcherny 提交。

---

## 5. 功能需求趋势

- **插件/Hooks 扩展能力**：Function Hooks 提案（#91870）热度断层领先，社区渴望更深的可编程定制点。
- **跨机器配置同步**：`~/.claude/`（skills、plugins、MCP、statusline）账号级同步需求持续存在（#66303）。
- **模型选择与成本可控性**：Fable 5.1 的模型路由、classifier fallback 可配置（#74311）、token 消耗（#91289）集中爆发。
- **内存/记忆机制精细化**：MEMORY.md 阈值可配置（#91188）。
- **自动化闭环**：分析阶段发现的 bug 直接自动修复而非转交其他模型（#92428）。

---

## 6. 开发者关注点

- **Windows 平台体验仍是重灾区**：Desktop 启动失败（#53247）、窗口置顶（#92337）、MSIX 抢占 .docx/.pdf 文件关联（#91750）、模型在 Windows 上顽固使用 Bash（#91477、#92407）——Windows 用户痛点贯穿桌面端与 CLI。
- **Fable 5/5.1 模型链路问题**：静默降级到 Opus 5（#91747）、计费话术错误（#91488）、token 消耗过快（#91289），新模型上线初期的适配问题集中。
- **MCP 可靠性**：连接状态与实际可用性脱节（#86875）、误导性超时提示与日志缺失（#91898）。
- **Subagent/Agents 机制一致性**：SendMessage 工具缺失（#92134）、子代理定义被无视（#92426），多代理编排的稳定性受到质疑。
- **IDE 集成回归频发**：VS Code 扩展的 OAuth（#90688）、剪贴板（#91860）、skill 阻塞输出（#87066）等问题在近期版本迭代中反复出现。

---
*数据来源：github.com/anthropics/claude-code | 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-09-06

## 📌 今日速览

今日无新版本发布，但社区活跃度持续走高。最突出的动态是：**原生语音（Voice）技术栈迎来大规模 PR 合入**，涵盖 WebRTC 会话、Opus RTP 处理、跨平台 Bazel 构建等十余项改进；同时 **GPT-6 Astra 在 Windows 桌面端模型选择器缺失**、**会话历史 ordinal 复用导致历史冻结** 两类问题在 Issues 中集中爆发。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#11626](https://github.com/openai/codex/issues/11626)** — CLI 增加 `/rewind` 检查点恢复（同时回滚对话上下文与代码改动）
 👍 212 / 💬 41。社区呼声最高的功能需求，当前 Esc 回滚仅作用于对话侧，开发者强烈要求双向一致回滚。

2. **[#35746](https://github.com/openai/codex/issues/35746)** — 分页历史丢弃有效 rollout 记录并复用 ordinal
 💬 39。长会话数据完整性 bug，与今日多个新报的“历史冻结”问题同源，影响面广。

3. **[#42853](https://github.com/openai/codex/issues/42853)** / **[#43143](https://github.com/openai/codex/issues/43143)**（已关闭）— Windows 桌面端 GPT-6 Astra 缺失于模型选择器
 ChatGPT Pro 合格账户无法选用新模型，其中 #43143 已快速修复关闭，说明官方在积极跟进。

4. **[#41922](https://github.com/openai/codex/issues/41922)** — 上下文压缩后对话不可用并打印内部校验错误
 💬 7，涉及 Desktop App 核心会话生命周期，压缩后数据损坏问题严重。

5. **[#29079](https://github.com/openai/codex/issues/29079)** — Windows 桌面端 Node/MCP 辅助进程泄漏直至系统卡死
 👍 4。长期存在的资源泄漏问题，疑似与 subagent/MCP 重度使用相关。

6. **[#42501](https://github.com/openai/codex/issues/42501)** — Windows 更新后 cua_node 无法复制 node_repl.exe 导致 UI 无法启动
 💬 9。新版本引入的启动级回归，完全阻断使用。

7. **[#43129](https://github.com/openai/codex/issues/43129)** — macOS 最新优先线程查询返回两天前的旧 turn
 今日新报，本地 transcript 与投影状态不一致，与 ordinal 问题系列呼应。

8. **[#43045](https://github.com/openai/codex/issues/43045)** — GPT-6 Astra WebSocket 重连循环持续消耗已购额度
 计费相关的高严重性问题：重连风暴持续烧钱直至 HTTPS 回退生效。

9. **[#43131](https://github.com/openai/codex/issues/43131)** — Astra Light 在授权的 bug 分诊任务中反复触发 cyber_policy
 今日新增，安全策略误判已导致任务五次失败，反映策略过滤过严的问题。

10. **[#42765](https://github.com/openai/codex/issues/42765)** / **[#43135](https://github.com/openai/codex/issues/43135)** — 周配额异常清零 & 请求“周池模式”替代 5 小时上限
 计费透明度与配额灵活性成为 Pro 用户的持续痛点。

---

## 🛠 重要 PR 进展（Top 10）

> 今日 PR 均由 @copyberry[bot] 提交并已合入，呈现两条主线：**原生语音栈建设** 与 **工程体验改进**。

**语音/WebRTC 主线：**

1. **[#43097](https://github.com/openai/codex/pull/43097)** — 新增 helper 支持的实时 WebRTC 会话 API（`RealtimeWebrtcSession`），含协商、音频控制、电平表。
2. **[#43100](https://github.com/openai/codex/pull/43100)** — 有界入站 Opus RTP 处理（64 包 / 2 MiB 上限），防止媒体队列堆积。
3. **[#43090](https://github.com/openai/codex/pull/43090)** — 将处理后的麦克风音频经 RTP 发送，补齐语音上行链路。
4. **[#43079](https://github.com/openai/codex/pull/43079)** — helper 增加可选本地音频设备（CPAL 跨平台），初始静默策略。
5. **[#43144](https://github.com/openai/codex/pull/43144)** — Windows MSVC Bazel 原生语音库构建目标（x64 + ARM64），配合 #43114/#43111/#43099 完成跨平台构建体系。

**工程体验主线：**

6. **[#43120](https://github.com/openai/codex/pull/43120)** — TUI 新增 `/worktree` 命令：可将对话 fork 到独立受管 checkout，支持并行任务。
7. **[#43147](https://github.com/openai/codex/pull/43147)** — 按模型能力门控实验性上下文特性，子会话不再盲目继承父级 token 预算配置。
8. **[#43110](https://github.com/openai/codex/pull/43110)** — 在 feature flag 后记录 reasoning effort 变更到会话历史。
9. **[#43113](https://github.com/openai/codex/pull/43113)** — subagent 与 memory 的启用确认改经 app server 持久化写入配置。
10. **[#43104](https://github.com/openai/codex/pull/43104)** — Guardian 线程上下文迁移至 `guardianv2` 配置结构。

---

## 📈 功能需求趋势

- **会话完整性与回滚**：`/rewind` 双向回滚（#11626）、历史投影/ordinal 一致性（#35746、#43124、#43142、#43129）——本周期最集中的需求簇。
- **新模型可用性**：GPT-6 Astra 在 Windows、计费、安全策略（cyber_policy）层面的落地问题集中出现。
- **Windows 桌面端质量**：进程泄漏、启动失败、Computer Use 延迟（#42790 报告 21–42 秒确定性延迟）等，Windows 是当前 bug 重灾区。
- **远程/移动协同**：Remote Control（#40167、#31110）、Android 线程列表（#43017）、agent 创建任务可见性（#32614）持续有反馈。
- **配额与计费灵活性**：5 小时滚动上限 vs 周池模式之争（#43135）。
- **可配置性**：Windows 默认 shell 配置（#16579，👍 45）、AGENTS.md 去重（#34193）。

---

## ⚠️ 开发者关注点

1. **会话数据可靠性是最大痛点**：rollout 分页/ordinal 系列问题跨越 CLI 与桌面端，长会话用户（Codex 核心重度用户）直接丢失可见历史，建议关注 #35746 后续修复。
2. **计费风险**：WebSocket 重连烧额度（#43045）与配额异常清零（#42765）值得 Plus/Pro 用户警惕，使用 Astra 时注意监控用量。
3. **语音能力即将到来**：今日密集合入的 WebRTC/Opus/Bazel 语音 PR 表明 Codex 原生语音交互正在快速成型。
4. **Windows 用户升级需谨慎**：26.901 系列版本出现多个启动级与资源级回归。
5. **OAuth/MCP 集成**：MCP login scopes 缺失（#20503）长期未修，影响 Fastmail 等需要动态注册 scope 的 MCP 服务器接入。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-09-06

## 1. 今日速览

今日发布 v0.60.0-nightly 版本，进入 0.60 稳定版迭代周期。社区讨论焦点集中在 **Agent/子代理（subagent）稳定性** 与 **Auto Memory 隐私安全** 两条主线，多个 P1 级问题持续活跃。PR 方面，`--model gemini-2.5-flash` 被静默改写为 3.5 Flash 的模型解析 bug 收到两个竞争性修复方案，值得持续关注。

## 2. 版本发布

- **v0.60.0-nightly.20260906.g85aca163f**（[Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.60.0-nightly.20260905.g85aca163f...v0.60.0-nightly.20260906.g85aca163f)）
  例行 nightly 构建递增，配套自动版本 PR 为 [#29223](https://github.com/google-gemini/gemini-cli/pull/29223)。

## 3. 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1) 子代理命中 MAX_TURNS 后仍上报 `success/GOAL`，掩盖了中断事实。这直接影响任务结果可信度，13 条评论为今日最热。
2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, 👍8) 通用代理挂起，简单操作（如建目录）可挂 1 小时，8 个 👍 说明影响面广。
3. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1) Shell 命令已执行完毕但 CLI 卡在 "Waiting input"，阻塞交互流程。
4. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2) Auto Memory 在脱敏前就把本地转录内容送入模型上下文，安全敏感，要求确定性脱敏。
5. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** (P2) 提出"零依赖 OS 沙箱 + 执行后意图路由”架构提案，释放 Gemini 3 的原生 bash 能力，方向性讨论价值高。
6. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** (P2) AST 感知的文件读取/搜索/代码库映射 Epic，可减少误读取轮次和 token 噪声，是工具链演进的长期方向。
7. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2) 模型几乎不会主动调用自定义 skills 和子代理，编排能力问题引发共鸣。
8. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** (P2) 工具数超限时触发 400 错误，需更智能的工具作用域裁剪。
9. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1) browser 子代理在 Wayland 下失败，Linux 桌面用户痛点。
10. **[#26523](https://github.com/google-gemini/gemini-cli/issues/26523) / [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** Auto Memory inbox 静默丢弃非法 patch、无限重试低信号会话，记忆系统健壮性待补齐。

## 4. 重要 PR 进展

1. **[#29217](https://github.com/google-gemini/gemini-cli/pull/29217)** / **[#29222](https://github.com/google-gemini/gemini-cli/pull/29222)** (P1) 两份修复方案解决 `--model gemini-2.5-flash` 被 `endsWith('flash')` 逻辑静默改写为 `gemini-3.5-flash` 的问题（Vertex 等无权限环境直接报错）。
2. **[#29163](https://github.com/google-gemini/gemini-cli/pull/29163)** (P1/security) 修复 macOS Seatbelt 等受限权限下 Git 仓库内启动时认证崩溃。
3. **[#29125](https://github.com/google-gemini/gemini-cli/pull/29125)** 修复 hooks 迁移中超时单位秒/毫秒错配（`timeout: 30` 秒被当成 30ms）。
4. **[#29124](https://github.com/google-gemini/gemini-cli/pull/29124)** 修复迁移时 `SubagentStop` 事件名大小写不匹配导致 hook 被静默丢弃。
5. **[#29211](https://github.com/google-gemini/gemini-cli/pull/29211)** 修复在 React state updater 内嵌套 setState 导致的调度违规，消除潜在渲染竞态。
6. **[#29195](https://github.com/google-gemini/gemini-cli/pull/29195)** checkpoint 文件 `history` 非数组时降级处理而非让 `/resume` 裸崩。
7. **[#29126](https://github.com/google-gemini/gemini-cli/pull/29126)** a2a-server 中将 `express.json()` 移到 SDK 路由之前，修复 JSON-RPC `req.body` 为 undefined。
8. **[#28967](https://github.com/google-gemini/gemini-cli/pull/28967)**（已关闭）修复静态刷新时清空终端 scrollback 的问题。
9. **[#28968](https://github.com/google-gemini/gemini-cli/pull/28968)**（已关闭）skills 目录符号链接去重，支持 `.gemini` ↔ `.agents` 链接共存。
10. **[#28966](https://github.com/google-gemini/gemini-cli/pull/28966)**（已关闭）修正 `excludeTools` 文档中永远不匹配的示例写法，命令级拦截指向 policy engine。

## 5. 功能需求趋势

- **Agent 编排与自主性**：子代理调度、技能自动触发（#21968）、子代理轨迹可见性（#22598）是最大需求集群。
- **安全与沙箱**：OS 级零依赖沙箱（#19873）、确定性脱敏（#26525）、破坏性命令防护（#22672）呼声集中。
- **Token 效率**：AST 感知工具（#22745/#22746）、"Tactful Extraction" 精准读取（#19561）、文件化任务跟踪替代 WriteToDo（#18836）。
- **模型选择透明度**：显式 pin 的模型不应被静默改写（PR #29217/#29222），社区对模型解析黑盒化敏感。
- **平台兼容性**：Wayland（#21983）、symlink（#20079）、终端 resize 性能（#21924）等环境适配问题持续存在。

## 6. 开发者关注点

- **挂起/卡死类 P1 频发**：通用代理挂起（#21409）、shell 卡 "Waiting input"（#25166）、交互式 prompt 卡死（#22465），等待/输入处理是稳定性重灾区。
- **结果可信度**：子代理误报成功（#22323）+ `/bug` 报告缺子代理上下文（#21763），排查问题成本高。
- **Memory 系统成熟度**：隐私脱敏、patch 校验、重试策略（#26516 系列）仍需系统性打磨。
- **迁移兼容性**：从 Claude Code 迁移时单位、事件名等静默失效（PR #29125/#29124），建议迁移后人工核对 hooks 配置。
- **工具数量上限**：>128 工具即 400 错误（#24246），重度 MCP/扩展用户需注意工具裁剪。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-09-06

## 1. 今日速览

过去 24 小时无新版本发布、无 PR 活跃更新，社区焦点集中在 Issues 上。最值得关注的动态是：升级到 desktop 2.98.0 / runtime 1.1.15 后大规模出现 "Worktree missing" 报告（#4734），以及自动更新机制会静默覆写桌面应用内置 CLI 导致会话无法恢复的严重问题（#4728）。同时高赞功能请求 #1857（允许取消已排队的消息）持续获得社区共鸣（28 👍）。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#4734](https://github.com/github/copilot-cli/issues/4734) — 升级 2.98.0 后所有 Worktree 会话报 "Worktree missing"**
   升级 desktop 2.98.0 / runtime 1.1.15 后，所有项目会话（含新建）均报 worktree 缺失，疑似回归性 Bug，影响面广，值得官方优先响应。

2. **[#4728](https://github.com/github/copilot-cli/issues/4728) — 自动更新覆写桌面应用内置的 copilot.exe**
   终端中运行 `copilot` 触发的自动更新会改写桌面应用捆绑的 CLI，导致应用无法恢复任何会话，且无任何提示，属于升级机制层面的严重问题。

3. **[#1857](https://github.com/github/copilot-cli/issues/1857) — 允许取消/移除已排队消息（28 👍，11 评论）**
   长期高热度请求：agent 忙碌或 `/compact` 期间通过 Ctrl+Q 排队的消息无法撤销，是交互体验的核心痛点。

4. **[#4731](https://github.com/github/copilot-cli/issues/4731) — MCP 工具调用超时后 tools/list 刷新失败，工具被永久剥离**
   工具调用超时后立刻向同一被阻塞的 stdio MCP 服务器派发刷新请求，连锁超时导致该服务器工具在进程生命周期内不可用。

5. **[#4725](https://github.com/github/copilot-cli/issues/4725) — Linux 上频繁 JS 堆内存溢出崩溃**
   每隔几分钟发生 Mark-Compact 分配失败并崩溃（堆涨至约 4GB），疑似内存泄漏，稳定性影响大。

6. **[#4721](https://github.com/github/copilot-cli/issues/4721) — JSON-RPC 参数序列化损坏，Canvas 工具调用失败**
   参数被拼接 `}{}` 后缀导致 JSON 畸形、中途截断，直接影响扩展工具链可用性。

7. **[#4735](https://github.com/github/copilot-cli/issues/4735) — 工具调用前的用户可见文本被折叠进 "Thought for Ns"**
   推理块 + 正文 + 工具调用同轮出现时，正文被误归类为 reasoning 而不展示，影响输出可信度。

8. **[#4724](https://github.com/github/copilot-cli/issues/4724) — 按提示缓存 TTL 空闲自动 compact（功能提案）**
   利用约 5 分钟的 prompt cache TTL，在空闲后自动压缩上下文以降低成本和延迟，是有见地的性能优化方向。

9. **[#4729](https://github.com/github/copilot-cli/issues/4729) — 内置 research 子代理指示调用不存在的 github/get_me 工具**
   子代理提示词与实际暴露的 MCP 工具不匹配，agent 启动即陷入自我调适，暴露内置提示词与工具注册的同步问题。

10. **[#4272](https://github.com/github/copilot-cli/issues/4272)（已关闭）— 企业策略下新模型置灰不可选**
    组织策略禁用新模型但设置页无启用入口，企业用户模型可用性配置的典型困惑案例。

其他值得留意：#4732（模型被静默切换为 GPT-5 mini 且中途弃任务）、#4652（Windows 25H2 沙箱不受支持）、#4551（SSH 远程会话剪贴板失效）、#4722（Markdown 解析吞掉前导下划线）。

## 4. 重要 PR 进展

过去 24 小时无 PR 更新。

## 5. 功能需求趋势

- **会话/队列控制**：取消排队消息（#1857）、交互式启动提示（#4723）——用户希望对 agent 执行流有更强干预能力。
- **上下文与成本优化**：基于缓存 TTL 的智能 compact（#4724）、token 截断续传（#4733）。
- **键盘/终端体验**：Ctrl+E 上下文敏感接受补全（#4736）、Markdown 渲染准确性（#4722）。
- **MCP/扩展生态**：工具刷新可靠性（#4731）、JSON-RPC 序列化正确性（#4721）、子代理提示词一致性（#4729）。
- **可观测性**：OTel span 完整性（#4726）、非流式模式语义正确性（#4677）。

## 6. 开发者关注点

1. **升级与自更新是当前最大雷区**：2.98.0 升级引发 worktree 全面失效（#4734），自动更新还会破坏桌面应用（#4728），建议生产环境暂缓升级并锁定版本。
2. **稳定性问题集中爆发**：内存泄漏崩溃（#4725）、模型静默降级（#4732）直接影响日常可用性。
3. **MCP/插件集成质量参差**：参数序列化、工具生命周期管理、内置提示词与工具集不匹配等问题密集出现，扩展生态的健壮性亟待加强。
4. **长上下文场景成本焦虑**：社区开始关注 prompt cache 生命周期与 compact 策略的联动，反映重度用户的实际开销痛点。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：** 2026-09-06 | **数据来源：** [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 一、今日速览

今日仓库无新版本发布、无 PR 更新，整体动态较为平静。社区侧共更新 2 条 Issue：一条关于第三方 Coding Agent（Claude Code）集成文档完善的增强建议正式关闭，另一条为新增的 VS Code 扩展流式渲染丢字符问题报告，值得关注后续修复进展。

---

## 二、版本发布

过去 24 小时无新版本发布，省略。

---

## 三、社区热点 Issues

今日仅 2 条 Issue 更新，全部列出如下：

### 1. VS Code 扩展：流式聊天文本在渲染/复制层丢失单个字符（🆕 新 Issue）
- **编号：** [#2635](https://github.com/MoonshotAI/kimi-cli/issues/2635) | 状态：OPEN
- **为什么重要：** 报告者通过 session wire log 对比验证，底层模型输出完整无损，字符丢失发生在**渲染层或从面板复制的环节**。这类“静默丢字”问题直接影响代码片段复制的可靠性，对开发者体验伤害较大，且定位清晰的 bug 报告有助于快速修复。
- **社区反应：** 暂无评论，等待官方回应。

### 2. [在第三方 Coding Agent 中使用] 文档部分完善（已关闭）
- **编号：** [#1210](https://github.com/MoonshotAI/kimi-cli/issues/1210) | 状态：CLOSED
- **为什么重要：** 反馈指出文档中 “Claude Code 中使用 tab 键切换 Kimi K2 Thinking 模型” 的说明过于简略，且每次需手动 `export` 环境变量的方式不够便捷，建议参考智谱 BigModel 的 Claude Code 集成文档改进。该 Issue 已关闭，推测官方已跟进文档完善。
- **社区反应：** 1 条评论，最终以关闭收尾。

---

## 四、重要 PR 进展

过去 24 小时无 PR 更新，省略。

---

## 五、功能需求趋势

从近期 Issue 中可提炼出以下方向：

1. **第三方 Coding Agent 集成体验**：在 Claude Code 等 Agent 中使用 Kimi 模型（如 K2 Thinking）的场景受到关注，社区期待更完善的文档和更简化的配置方式（如免去重复 export 变量）。
2. **VS Code 扩展质量**：聊天面板渲染与复制层的正确性问题浮现，IDE 扩展的稳定性是当前社区反馈焦点之一。

---

## 六、开发者关注点

- **配置便捷性**：环境变量需手动 export 的流程被吐槽，开发者希望提供一键式或持久化的配置方案。
- **输出完整性与可靠性**：流式渲染丢字符问题表明开发者对“所见即所得”的输出有强需求，尤其在复制 AI 生成代码时容错率为零。
- **文档深度**：面向第三方 Agent 集成的文档粒度不足，社区希望补充操作细节（如模型切换快捷键、多模型对比）。

---

*本日报基于 GitHub 公开数据自动整理，如有遗漏请以仓库实际动态为准。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-09-06

## 📌 今日速览

今日无新版本发布，但社区开发活动非常活跃：@Hona 提交了三个针对 Desktop 客户端请求队列和网络性能的高质量修复 PR，核心团队推进了 timeline 会话历史、Astra 异步工具、ACP v2 等重要架构功能。Issues 方面，Go 订阅配额计算方式引发新争议（#47547），而长期存在的 `@` 文件索引过期问题热度最高。

---

## 🔥 社区热点 Issues

1. **[#32747](https://github.com/anomalyco/opencode/issues/32747) [OPEN] `@` 文件提及不包含启动后新建的文件**
   讨论最多的开放 Issue（15 评论 / 13 👍），存在近 3 个月。启动后创建的新文件无法通过 `@` 提及，需重启才能索引，疑似 TUI 搜索状态过期。属于影响日常使用的高频痛点。

2. **[#47547](https://github.com/anomalyco/opencode/issues/47547) [OPEN] Go 订阅被误封 — 月度用量按“各模型百分比之和”而非实际美元计算**
   今日新报：各模型配额均未耗尽（总额远低于 $60 上限），但百分比求和达 100% 导致订阅被封 15 天。直接影响付费用户，需官方尽快回应。

3. **[#35009](https://github.com/anomalyco/opencode/issues/35009) [CLOSED] 1.17.11 → 1.17.13 资源占用激增**
   升级后 RSS 达 ~1GB、CPU 22%，10 条评论，已关闭。与 #35717（1.17.14 硬盘占用极大）共同指向 1.17.x 系列的性能回归问题。

4. **[#35690](https://github.com/anomalyco/opencode/issues/35690) [CLOSED] 升级后会话历史消失**
   1.17.14 升级后 session 列表为空。与 #35750（path 列未回填导致旧会话被隐藏）是同一类数据迁移缺陷，社区反馈强烈。

5. **[#34030](https://github.com/anomalyco/opencode/issues/34030) [CLOSED] 无法调用 Copilot Enterprise 的第三方模型**
   企业场景适配问题，9 条评论。企业自定义模型是付费用户刚需。

6. **[#35741](https://github.com/anomalyco/opencode/issues/35741) [CLOSED] WebChat 中 LLM 幻觉自答用户问题**
   Agent 提问后自行编造用户回答并继续执行，属于安全性和交互可靠性问题，值得所有 agent 类产品关注。

7. **[#31916](https://github.com/anomalyco/opencode/issues/31916) / [#32046](https://github.com/anomalyco/opencode/issues/32046) 大文件 diff 渲染导致 TUI/Renderer 冻结**
   两个同类 Issue：大内容（150+ 行）触发 "Preparing to write..." 无限挂起或应用无响应，Windows 上尤为明显。与今日 PR #47549（渲染帧动画重构）方向相关。

8. **[#28695](https://github.com/anomalyco/opencode/issues/28695) [CLOSED] 会话生命周期 hooks 以支持插件持久状态**
   社区长期呼吁的插件 API 能力，构建在早期 SessionStart hook 需求之上，6 条评论后关闭，可能与 #47552 timeline 重构有关。

9. **[#35611](https://github.com/anomalyco/opencode/issues/35611) [CLOSED] Windows 上 Go 订阅模型在既有会话中卡死**
   v1.17.14 回归：既有会话中模型推理极慢或卡在 "thinking"，新建会话可规避。Windows 平台稳定性问题再次凸显。

10. **[#35703](https://github.com/anomalyco/opencode/issues/35703) [CLOSED] 统一 Desktop 与 TUI 的数据目录**
    会话/插件/配置在 Desktop（Electron）与 CLI 之间不互通（另见 #29071），是双客户端架构下最直接的整合诉求。

---

## 🚀 重要 PR 进展

1. **[#47564](https://github.com/anomalyco/opencode/pull/47564) 修复慢速 git 读取阻塞请求队列**
   附带详细 netlog 数据（`GET /api/vcs` p50 达 1789ms），针对 4 槽 FIFO 队列被慢请求占满的问题，工程质量很高。

2. **[#47561](https://github.com/anomalyco/opencode/pull/47561) 合并事件风暴引发的 catalog 重复请求**
   7 秒内 `GET /api/mcp` 被请求 192 次——每个 MCP server 状态变更都触发 invalidate+sync，此 PR 做去重合并。

3. **[#47560](https://github.com/anomalyco/opencode/pull/47560) [CLOSED] 保留 CORS 头使 preflight 可缓存**
   310 秒内 1519 请求中一半是 OPTIONS preflight，修复后预计显著降低本地调用延迟。

4. **[#47552](https://github.com/anomalyco/opencode/pull/47552) 基于 timeline 的会话历史共享**
   Fork 引用冻结前缀、undo 提交到新 timeline——会话数据模型的重要重构，或成为解决会话消失/迁移问题的基础。

5. **[#47536](https://github.com/anomalyco/opencode/pull/47536) Astra 异步工具调用与实时 steering**
   支持 Responses API 的 async function calls 和纯文本实时干预，是向新一代交互模式演进的关键功能。

6. **[#47559](https://github.com/anomalyco/opencode/pull/47559) 按模型优化工具集**
   为 GPT/Claude 模型省略 `grep`/`glob` 工具，引入模型级 optimization 插件体系——工具策展方向的起点。

7. **[#47548](https://github.com/anomalyco/opencode/pull/47548) [CLOSED] Bedrock 凭据自动发现**
   接通 AWS 默认凭据链（IAM role/IMDS），直接解决 #35798 中 EC2 实例角色无法启用 Bedrock 的问题。

8. **[#44524](https://github.com/anomalyco/opencode/pull/44524) ACP v2 draft 协议实现**
   对标 Agent Client Protocol v2 草案规范的 WIP 实现，关乎 OpenCode 与其他编辑器/工具的互操作性。

9. **[#47549](https://github.com/anomalyco/opencode/pull/47549) TUI 动画改用渲染帧驱动 + FPS 配置**
   替换独立 16ms 定时器，动画静止时释放渲染资源——对 #31916/#32046 的性能问题有直接帮助。

10. **[#47293](https://github.com/anomalyco/opencode/pull/47293) Console 托管 Web 搜索**
    从 Console v2 加载组织级 web-search 服务并代理凭据，含端点归属验证和重定向拒绝的安全设计。

---

## 📈 功能需求趋势

- **性能与资源占用**：1.17.x 系列多次回归（内存、CPU、磁盘 IO、渲染冻结）是当前最大负面口碑来源，今日多个性能修复 PR 也是回应。
- **会话数据可靠性**：升级迁移丢会话、Desktop/TUI 目录割裂、session lifecycle hooks —— 会话数据模型是社区最强诉求，timeline PR (#47552) 正面回应。
- **企业/自托管集成**：Copilot Enterprise 第三方模型、Bedrock IAM role、自定义 OpenAI 兼容端的 Claude thinking / GPT-5.5 工具调用路径。
- **模型与订阅体验**：Go 订阅计费透明度、DeepSeek/GPT 模型工具调用兼容、成本异常。
- **插件与扩展 API**：`background.extend()` 注入消息、skill 资源读取权限（#47554）。
- **桌面端 UX**：侧边栏浏览器预览、界面细节打磨（@iamdavidhill 系列贡献者 PR）。

## ⚠️ 开发者关注点

1. **订阅计费可信度**：#47547 的百分比求和封禁逻辑若属实，付费用户可能在配额远未用尽时被封，建议关注官方回应。
2. **升级风险**：1.17.13–1.17.14 涉及性能回归与会话迁移缺陷，生产环境升级前建议备份 `opencode.db`。
3. **Windows 平台稳定性**：TUI 挂起、PowerShell 5.1 兼容、模型卡死等问题集中在 Windows。
4. **大 diff / 大上下文场景**：大文件渲染冻结与 260k token 上下文下的 `_noop` 工具调用限制（#30340）仍需注意规避。

---
*数据来源：github.com/anomalyco/opencode | 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-09-06）

## 一、今日速览

Qwen Code 昨日发布 v0.23.0 nightly 与 v0.23.1-preview.0 双版本，核心亮点是 Web Shell 动态工作流的可视化管理，但连续多次 release 流水线失败（quality / integration_docker 阶段）成为当前最受关注的工程问题。社区讨论焦点集中在导出 HTML 体积优化、`qwen serve` 长会话稳定性以及 CI/CD 基础设施债务上。

---

## 二、版本发布

### [v0.23.0-nightly.20260905](https://github.com/QwenLM/qwen-code/releases)（两个构建：0c945a6136 / e3d26283e6）
- **feat(web-shell)**: 动态工作流运行的可视化与管理（[#10594](https://github.com/QwenLM/qwen-code/pull/10594)）
- **perf(web-shell)**: 会话工作流派生优化

### [v0.23.1-preview.0](https://github.com/QwenLM/qwen-code/releases)
包含与上述 nightly 相同的核心变更。

⚠️ 注意：两个版本均出现过 release workflow 失败（[#11138](https://github.com/QwenLM/qwen-code/issues/11138)、[#11114](https://github.com/QwenLM/qwen-code/issues/11114)、[#11122](https://github.com/QwenLM/qwen-code/issues/11122)），后续已自动修复关闭，但 #11109 指出 release.yml 存在大量重复工作与超时风险。

---

## 三、社区热点 Issues

1. **[#11031](https://github.com/QwenLM/qwen-code/issues/11031)** [P1] 导出的 HTML 文件（空会话约 19.5 MB）内嵌了完整 Web Shell 运行时与 React。导出体积系列优化的主追踪 Issue，5 条评论，是当前 web-shell 性能治理的核心。
2. **[#11091](https://github.com/QwenLM/qwen-code/issues/11091)** [P2] Mermaid（约 6 MB）仍被打平进导出 transcript renderer。#11031 的后续分项，标记 need-discussion，评论最多（6 条）。
3. **[#11119](https://github.com/QwenLM/qwen-code/issues/11119)** [P1] `qwen serve` 会话 runtime 回收时后台 shell 输出与唤醒通知被静默丢弃，导致会话卡死。P1 级 daemon 稳定性问题。
4. **[#11141](https://github.com/QwenLM/qwen-code/issues/11141)** [P2] 作为 ACP 在 IntelliJ IDEA 26.1.1 中提问无法回答/无法展示。今日新报的 IDE 集成 bug，中文用户报告，等待补充信息。
5. **[#7771](https://github.com/QwenLM/qwen-code/issues/7771)** 持久化的 mcp_config 在主进程 MCP proxy 启动时未被加载。7 月底的老问题，今日有社区 PR（#11145）尝试修复，讨论重新活跃。
6. **[#10879](https://github.com/QwenLM/qwen-code/issues/10879)** [P1] 发布主机 hk4 同时承担共享 ecs-qwen 标签，导致发布与 PR CI 争抢资源。CI 容量规划的关键问题，已 ready-for-human。
7. **[#11109](https://github.com/QwenLM/qwen-code/issues/11109)** [P2] release.yml 重复执行已完成的工作，其中一个 20 分钟步骤实际不校验任何内容。两次发布超时的直接原因，CI 效率治理重点。
8. **[#10922](https://github.com/QwenLM/qwen-code/issues/10922)** PR #10858 的延迟审查发现。autofix 机制自动沉淀的技术债追踪，体现项目工程化运作特色。
9. **[#10865](https://github.com/QwenLM/qwen-code/issues/10865)** [P2] 会话工作流投影每次渲染被计算三次，索引重复构建。ready-for-agent，性能优化好入口。
10. **[#10892](https://github.com/QwenLM/qwen-code/issues/10892)** [P2] `vi.waitFor` 默认 1s 超时无全局覆盖，2047 处调用点受影响。测试基础设施在慢 CI 机器上的系统性脆弱点。

---

## 四、重要 PR 进展

1. **[#11003](https://github.com/QwenLM/qwen-code/pull/11003)** by @wenshao — 子代理可通过 ACP 将回合委托给外部编码代理（首选 Claude Code）。互操作性的重大特性。
2. **[#11086](https://github.com/QwenLM/qwen-code/pull/11086)** — 扩展目录按 workspace runtime 作用域加载，支持 workspace 级 daemon 与 SDK 访问。
3. **[#11089](https://github.com/QwenLM/qwen-code/pull/11089)** by @qqqys — 动态工作流返回 run handle 并持久化内联脚本，含 run id、journal 路径、agent 派发/缓存统计与开销。
4. **[#11145](https://github.com/QwenLM/qwen-code/pull/11145)** — ACP 预热后立即调用 `reconcileMcpConfiguration()`，修复 #7771 的 MCP 配置启动加载问题。
5. **[#11144](https://github.com/QwenLM/qwen-code/pull/11144)** — 将实时的 sessionTranscript 磁盘读取阻塞于进行中的工具结果写入之后，修复并发加载时 "Tool result missing"（#9704）。
6. **[#11053](https://github.com/QwenLM/qwen-code/pull/11053)** — 全局 turn 导航 Phase 2 客户端数据层：按 fetch 切片记录 transcript 窗口，未加载区间显式建模。
7. **[#10957](https://github.com/QwenLM/qwen-code/pull/10957)** by @yiliang114 — CLI 直接导入核心子模块替代包根导入，启动/加载性能优化。
8. **[#10906](https://github.com/QwenLM/qwen-code/pull/10906)** — Web Shell 任务详情面板可直接查看 Shell/Monitor 的实时与持久化输出。
9. **[#10347](https://github.com/QwenLM/qwen-code/pull/10347)** — 将 4xx 包装的网络中断（EOF）分类为可重试传输错误，无 Ctrl+Y 场景下自动重试。
10. **[#11134](https://github.com/QwenLM/qwen-code/pull/11134)** — macOS E2E 偶发全绿分片死亡增加单次预算门控重试，对齐 Linux 已有机制。

---

## 五、功能需求趋势

- **导出数据瘦身**（#11031 / #11091 / #11100 / #11142）：从移除内嵌 runtime 到剥离 Mermaid 与 daemon hook，是当前最密集的专项治理。
- **daemon / serve 稳定性**（#11119 / #9704 / #10780）：长会话、后台任务、重连洪泛等场景的可靠性是高优路线图方向。
- **Web Shell 统一化**（#5883）：聊天面板在 web-shell、VSCode webview、桌面端三端归一的提案持续讨论。
- **外部 agent 互操作**（PR #11003）：ACP 委托外部编码代理，打开多 agent 生态集成空间。
- **IDE / ACP 集成**（#11141、#10989）：IntelliJ/VS Code 侧 ACP 行为的一致性问题持续出现。

## 六、开发者关注点

- **CI/CD 债务突出**：release 超时、发布与 PR 抢占同一 runner、release.yml 冗余步骤（#10879 / #11109 / #11138），是发布节奏的直接瓶颈。
- **测试时序脆弱性**：`vi.waitFor` 1s 硬编码、分片测试对主机共享 CPU 敏感（#10892 / #10879），慢机器上测试不稳定是高频痛点。
- **会话数据一致性**：工具结果延迟写入、半写 turn 可见、重连历史重放（#9704 / #11144 / #10780）是多用户并发场景的核心可靠性诉求。
- **启动健壮性**：只读目录下 output-language 文件写入崩溃（PR #10455）等边缘环境问题持续被修复，说明开发者部署环境多样。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报
**日期：2026-09-06 | 数据来源：github.com/Hmbown/Codewhale**

---

## 一、今日速览

v0.9.12 发布后的清理与修复工作成为主线：项目已正式以 **CodeWhale** 品牌运营，旧 npm 包 `deepseek-tui` 停止维护。今日社区围绕 0.9.12 dogfooding 反馈密集行动——Fleet 菜单精简、MCP 启动进度可视化、Windows computer-use 误报成功等关键问题均有对应 PR 提交，其中多个已在当日关闭，响应速度显著。

---

## 二、版本发布

### v0.9.12
- 正式确立 **CodeWhale** 为 Shannon Labs 公开产品名，`codewhale` 命令、npm 包名与 release 资产名保持小写技术标识
- 遗留 npm 包 `deepseek-tui` 已废弃，不再发布新版本；v0.8.x 的 `deepseek` / `d` 命令用户需迁移
- 发布过程暴露了 Cargo 打包问题（见 Issue #5892 / PR #5890、#5893），已快速修复

---

## 三、社区热点 Issues（Top 10）

1. **[#5573](https://github.com/Hmbown/Codewhale/issues/5573) — v0.9.12 milestone tracker**
   当前版本的统一入口，含运营交接、工作分支、PR/reinstall/自测步骤，24 条评论，是了解发布节奏的最佳窗口。

2. **[#5888](https://github.com/Hmbown/Codewhale/issues/5888) — Fleet 菜单选项过多**
   创始人 dogfooding 反馈 Fleet 菜单“东西太多”，v0.9.13 将精简。已有 PR #5905 当日响应（14 个动词 → 5 个）。

3. **[#5887](https://github.com/Hmbown/Codewhale/issues/5887) — MCP 启动长时间停留在 "20 connecting"**
   用户无法判断启动进度或服务器是否卡死，直接影响日常体验。PR #5897 已改为逐个服务器上报进度。

4. **[#5906](https://github.com/Hmbown/Codewhale/issues/5906) — Fleet 写权限声明泄漏**
   已 parked/取消的子 agent 永久持有 write claim，阻塞同 worktree 的兄弟任务，属多 agent 编排的核心正确性问题，建议优先关注。

5. **[#5904](https://github.com/Hmbown/Codewhale/issues/5904) — web fetch 对 JS-shell 页面提取失败且无重试**
   Explore/scout agent 间歇性报 URL 不可达，实际是缓存状态依赖的提取失败，影响 agent 自主调研可靠性。

6. **[#5891](https://github.com/Hmbown/Codewhale/issues/5891) — Cargo 安装版本误报 "(dev)"**
   crates.io 正式安装显示 `codewhale 0.9.12 (dev)`，损害发布可信度；PR #5899 已修复，未打 stamp 的包将显示真实版本号。

7. **[#5909](https://github.com/Hmbown/Codewhale/issues/5909) — write_file 静默将 CRLF 转 LF**
   `edit_file` 保留行尾风格但 `write_file` 不保留，Windows 用户文件被静默改写。PR #5911 当日提交修复。

8. **[#5908](https://github.com/Hmbown/Codewhale/issues/5908) — Windows computer-use 输入误报成功**
   PowerShell 失败时仍返回 `{action_sent: true}`，且 left_mouse_down 丢失按键。连带 #5896 已由 PR #5903、#5910 修复关闭。

9. **[#5901](https://github.com/Hmbown/Codewhale/issues/5901) — /theme 选择器不显示自定义主题**
   `custom:<name>` 主题 overlay 可用但不可见，属于易修复的 UX 缺口，PR #5907 已提交。

10. **[#2323](https://github.com/Hmbown/Codewhale/issues/2323) — 未适配中文输入法**
    长期悬置的中文用户痛点（拼音输入穿透到命令区），与中文用户群增长及文档中文化 EPIC #5482 相互呼应，值得关注推进。

---

## 四、重要 PR 进展（Top 10）

| PR | 内容 | 状态 |
|---|---|---|
| [#5905](https://github.com/Hmbown/Codewhale/pull/5905) | Fleet 菜单精简：/fleet 动词 14 → 5，其余下沉到 `/fleet help` 分组 | OPEN |
| [#5897](https://github.com/Hmbown/Codewhale/pull/5897) | MCP 启动逐服务器上报进度，就绪工具立即可用 | OPEN |
| [#5911](https://github.com/Hmbown/Codewhale/pull/5911) | write_file 保留既有文件 CRLF 行尾，与 edit_file 行为对齐 | OPEN |
| [#5910](https://github.com/Hmbown/Codewhale/pull/5910) | win32 computer-use 如实上报输入失败，修复 mouse-down 丢按键 | CLOSED ✅ |
| [#5899](https://github.com/Hmbown/Codewhale/pull/5899) | 已发布的 Cargo 包去掉 "(dev)" 标记，开发 checkout 保留 | OPEN |
| [#5907](https://github.com/Hmbown/Codewhale/pull/5907) | /theme 选择器扫描并展示用户自定义主题 overlay | OPEN |
| [#5900](https://github.com/Hmbown/Codewhale/pull/5900) | shell 工具指引按实际解释器（PowerShell/cmd/Bash 等）生成，防模型猜错语法 | OPEN |
| [#5893](https://github.com/Hmbown/Codewhale/issues/5893) | 发布前对所有 21 个 crate tarball 做完整 dry-run 校验，堵住 0.9.12 打包漏洞 | CLOSED ✅ |
| [#5890](https://github.com/Hmbown/Codewhale/pull/5890) | 16 个 computer-use 嵌入文件移入 TUI crate 内，修复无法发布问题 | CLOSED ✅ |
| [#5895](https://github.com/Hmbown/Codewhale/pull/5895) | HarmonyOS 文件读取清理限定在自有临时目录，避免误删系统临时文件 | CLOSED ✅ |

其他值得注意：[#5902](https://github.com/Hmbown/Codewhale/pull/5902)（FEAT-023 会话生命周期命令形状重构，属 EPIC-005 crate 拆解）、[#5868](https://github.com/Hmbown/Codewhale/pull/5868)（OpenCode Go 提供商加 x-opencode-session 头，优化 prompt 缓存）。

---

## 五、功能需求趋势

1. **多 Agent / Fleet 编排**：菜单可用性（#5888）、写权限声明生命周期（#5906）成为焦点，说明多 agent 并行是核心使用场景。
2. **可观测性与反馈**：MCP 启动进度（#5887）、输入/抓取结果如实上报（#5908、#5904），用户对“静默失败”容忍度极低。
3. **Windows 体验**：CRLF 处理、PowerShell 后端、CI 回归测试（#5898）多条线并行，Windows 一等公民化进行中。
4. **编辑器/协议集成（ACP）**：#5863、#5864（session/list、session/load、模式暴露）均已关闭，ACP 集成推进顺利。
5. **本地模型与提供商生态**：Ollama 32K 窗口预算钳制（#5820）、Muse Spark 1.3 reasoning effort（#5853）、OpenCode Go 会话头。
6. **中文与国际化**：输入法适配（#2323）、文档全面中文化 EPIC（#5482），中文用户群增长明确。
7. **个性化与语音输入**：自定义主题（#5901）、本地 STT + API 回退（#5846）。

---

## 六、开发者关注点

- **发布工程可靠性**是当前最大痛点：0.9.12 上传中途失败（#5892）、版本误报（#5891）、CI 间歇红（#5898），团队正系统性补齐发布门禁。
- **“静默错误”类缺陷高频出现**：CRLF 转换、输入误报成功、fetch 缓存依赖失败——社区对 truthful failure 的诉求强烈，几乎所有今日修复都指向这一原则。
- **多 agent 并发正确性**（write claim 泄漏）尚无修复 PR，是 v0.9.13 前的潜在风险点。
- **跨平台一致性**（Windows/HarmonyOS/Linux）持续消耗维护精力，EpicStyle + FEAT 拆解（EPIC-005）的 crate 化重构是长期解法。

---
*本报告基于过去 24 小时 GitHub 公开数据自动汇总，issue/PR 状态以链接页面实时为准。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-09-06

## 一、今日速览

Pi 发布 **v0.85.1**，新增 GPT-6 Astra 模型支持（通过 OpenAI API Key 或 Codex 订阅使用），但发布后暴露出 npm 包依赖声明缺失的打包问题（#9132、#9218）。社区当天围绕 **Windows 体验**（#7547 讨论已达 52 条评论）、**0.85.x 回归 bug**（Ollama 流中断 #9216）及多项打包/发布质量修复保持高度活跃。mitsuhiko 继续推进系统消息架构重构系列 PR。

---

## 二、版本发布

### v0.85.1
- **GPT-6 Astra** 上线：可通过 OpenAI API Key 及 OpenAI Codex 订阅使用，详见 [API Keys 文档](https://github.com/earendil-works/pi/blob/v0.85.1/packages/coding-agent/docs/providers.md#api-keys)。
- ⚠️ 注意：该版本仍存在依赖声明缺失问题（`@earendil-works/pi-server`、`pi-client` 未声明），影响全局安装下的 subagent 运行，见 Issue #9218。

---

## 三、社区热点 Issues

1. **[#7547](https://github.com/earendil-works/pi/issues/7547) [OPEN] Windows 使用方式调研（52 评论）**
   官方发起的 sink-thread，收集 Windows 用户的使用方式与痛点，用于决定核心投入方向（bug 修复、文档、开箱即用 vs 外部委托）。Windows 生态是当前社区讨论最热的议题。

2. **[#9218](https://github.com/earendil-works/pi/issues/9218) [CLOSED] 0.85.1 全局安装后 subagent 无法运行**
   发布的 npm 包未声明 `pi-server`/`pi-client` 依赖，导致 pi-subagents 子会话全部失败。与 #9132 同源的打包缺陷，是本版本最关键的发布事故。

3. **[#9216](https://github.com/earendil-works/pi/issues/9216) [CLOSED] Ollama 0.84→0.85 干净回归：流 `terminated` 错误**
   本地 Ollama 重度工具调用场景下频繁流中断，且自动压缩后不再重新触发，疑似 0.85.x 回归，本地模型用户需留意。

4. **[#9209](https://github.com/earendil-works/pi/issues/9209) [CLOSED] GitHub Copilot 的 GPT-6 Astra 被路由到不支持的端点**
   `github-copilot/gpt-6-astra` 被错误路由到 `/chat/completions` 被 Copilot 拒绝。新模型支持的首日适配问题。

5. **[#9212](https://github.com/earendil-works/pi/issues/9212) [CLOSED] 网关下 sonnet-5 有 13% edit 工具调用被截断为 `edits:[{}]`**
   一周内 134 次调用中 18 次 schema 校验失败，fable 为 0%，指向网关/模型侧输出截断问题，对可靠性敏感的用户影响较大。

6. **[#8896](https://github.com/earendil-works/pi/issues/8896) [OPEN] /export HTML 静默丢弃 display:false 的消息**
   文档明确 `display` 仅影响 TUI 显示，但导出 HTML 时会丢掉这些消息，导致导出内容与模型实际收到的上下文不一致，影响会话审计与归档。

7. **[#8684](https://github.com/earendil-works/pi/issues/8684) [OPEN] `PI_OFFLINE` 静默禁用全部模型发现，与文档矛盾**
   文档称仅禁用启动时的网络操作（更新检查/遥测），实际还禁用了整个会话的 provider 模型目录发现，离线/受限网络用户受影响。

8. **[#9221](https://github.com/earendil-works/pi/issues/9221) [OPEN] 工具运行中执行 reload 会把成功结果存为错误**
   RPC 模式下扩展调用 `ctx.reload()` 缺少 busy-state 检查，可污染工具结果。当天已有配套修复 PR #9222。

9. **[#9220](https://github.com/earendil-works/pi/issues/9220) [CLOSED] 斜杠命令自动补全异步竞态：快速输入/IME 提交裸 `/re`**
   中文拼音 IME 下尤其易复现，`/` 触发菜单是异步的，首字符提交时补全菜单尚未挂载。中文用户高频痛点。

10. **[#6300](https://github.com/earendil-works/pi/issues/6300) [OPEN] Windows 下输入行每个字符重绘一行**
    长期存在的 Windows TUI 渲染问题，持续有用户跟进，与 #7547 的 Windows 投入讨论相呼应。

---

## 四、重要 PR 进展

1. **[#9222](https://github.com/earendil-works/pi/pull/9222) fix: 拒绝在会话活跃操作期间 reload** — 配套 #9221，在 RPC reload 前检查 `isStreaming`，防止工具结果被错误覆盖。

2. **[#9096](https://github.com/earendil-works/pi/pull/9096) feat: 新增 Meta provider（Muse 订阅 OAuth）** — 新增 Meta 模型接入，token 每日重铸机制较特殊，流式目前为“伪流式”整包输出。

3. **[#9170](https://github.com/earendil-works/pi/pull/9170) / [#9172](https://github.com/earendil-works/pi/pull/9172) fix: 声明 pi-server 运行时依赖 + 防止包根损坏发布** — 直接修复 #9132/#9218 的打包缺陷，并从发布流程上杜绝同类问题再次出现。

4. **[#9214](https://github.com/earendil-works/pi/pull/9214) feat: 支持句中调用 skills 与 prompt templates** — 解决 #8457，`/skill:name args` 不再仅限输入开头，提升工作流灵活性。

5. **[#9116](https://github.com/earendil-works/pi/pull/9116) / [#9117](https://github.com/earendil-works/pi/pull/9117) feat: mid-conversation system messages 系列**（mitsuhiko）— 系统架构重构：支持会话中途插入 system message，工具/prompt 变更以增量 system delta 传递而非重写顶层 prompt，对缓存命中和长会话意义重大。

6. **[#9137](https://github.com/earendil-works/pi/pull/9137) feat: 新增 Nix flake** — NixOS 用户期待的原生打包支持，WIP 中。

7. **[#9215](https://github.com/earendil-works/pi/pull/9215) fix: 允许零高度自定义 footer** — fullscreen 模式下空 footer 不再残留空白行，修复 #8919。

8. **[#9219](https://github.com/earendil-works/pi/pull/9219) fix: wrapUIPromptContext 保留原型方法与 Proxy traps** — 对象展开丢失原型链导致嵌入方 UI 上下文损坏，RPC 嵌入场景的兼容性修复。

9. **[#9163](https://github.com/earendil-works/pi/pull/9163) feat(tui): 简化剪贴板处理** — 内联原生剪贴板逻辑，减少对重量级 Rust 库依赖，同时为 NixOS 构建铺路。

10. **[#8734](https://github.com/earendil-works/pi/pull/8734) feat: OpenAI Responses 兼容 provider 支持顶层 instructions** — 允许将动态 system prompt 移至顶层 `instructions`，配合 Responses API 的服务端状态管理更高效。

---

## 五、功能需求趋势

- **新模型/Provider 接入**：GPT-6 Astra（已发布）、Meta Muse（PR #9096）、LLM Gateway（PR #7610）、Requesty（#5473）——社区对新 provider 生态扩张需求旺盛。
- **Server-side 能力利用**：OpenAI `previous_response_id`/服务端压缩（#7317、#6676）、异步工具调用（#9113）、顶层 instructions（PR #8734）——减少历史重放、降低 token 成本。
- **扩展性 API**：向扩展暴露 ModelRuntime（#8791）、包命名空间 `pi.namespace`（#8834）、句中调用 skills（#8457/PR #9214）——扩展/嵌入开发者是活跃的需求来源。
- **TUI 打磨**：IME 兼容（#9220、#5200）、fullscreen 渲染（#9169）、滚动指示（PR #7970）、Alt 加速滚动（PR #9166）。
- **打包与分发**：Nix 支持（PR #9137）、npm 发布完整性（#9132、#9170、#9172）。

---

## 六、开发者关注点

1. **发布质量是当前最大痛点**：0.85.0/0.85.1 连续两个版本出现依赖声明缺失，导致全新安装即坏；#9172 的发布防护机制是关键改进，社区对发布流程可靠性期望较高。
2. **Windows 一等公民化呼声强烈**：#7547 的 52 条评论 + #6300、#9169 等长期未决 bug，Windows 用户在等待官方明确投入优先级。
3. **中文/IME 用户输入体验**：#9220 的拼音 IME 竞态、#5200 的候选窗定位，是中文用户重复报告的高频问题。
4. **长会话与成本优化**：服务端压缩、缓存 TTL 计费准确性（#9210 的 1h cacheWrite 误按 5m 计费）、system delta 架构（PR #9116/9117）共同指向对长工具密集会话的 token 成本与稳定性关切。
5. **本地模型（Ollama）回归风险**：#9216 显示 0.85.x 对本地 provider 存在干净回归，提示版本升级前应保留本地场景的回归测试覆盖。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报
**日期：2026-09-06** | 数据来源：[can1357/oh-my-pi](https://github.com/can1357/oh-my-pi)

---

## 📌 今日速览

今日发布 **v18.1.11**，修复了 GitHub Copilot Enterprise 用户无法登录的关键问题。社区焦点集中在 **google-antigravity 提供商的 Subagent 100% 崩溃**（#10781，16 条评论）以及 TUI 流式输出性能退化（#10955）。PR 侧最亮眼的是 **agent 定义文件可作为主会话 persona** 的新架构方案（#11004），性能优化类 PR 持续活跃。

---

## 🚀 版本发布

### v18.1.11
- **@oh-my-pi/pi-ai**：GitHub Copilot 登录现在仅请求基础 profile 权限，修复了 Enterprise 组织因拒绝 repository/gist/Codespaces 权限而登录失败的问题（[#10656](https://github.com/can1357/oh-my-pi/issues/10656)）

---

## 🔥 社区热点 Issues

1. **#10781** Subagent 在 google-antigravity 提供商下 100% 崩溃（16 评论）— `TypeError: rt.getWorkPoolYieldItems`，首次 prompt 前即崩溃，100% 可复现，标记为 duplicate，社区高度关注。
   [链接](https://github.com/can1357/oh-my-pi/issues/10781)

2. **#3351** 缺少卸载程序（14 评论）— 长期开放的老问题，用户要求安装可完整回滚，涉及 setup/cli 体验。
   [链接](https://github.com/can1357/oh-my-pi/issues/3351)

3. **#7537** hub 消息仅限进程内通信（10 评论）— 两个 OMP 主 agent 无法互相寻址，`IrcBus` 为进程内单例，社区提出基于 `IrcBridge.deliver` 语义的跨进程方案。
   [链接](https://github.com/can1357/oh-my-pi/issues/7537)

4. **#10955** 流式输出时 TUI 严重掉帧（9 评论）— Write 工具流式写入 markdown 时（约 20 行后开始）TUI 卡顿跳帧，其他应用正常，今日仍活跃更新。
   [链接](https://github.com/can1357/oh-my-pi/issues/10955)

5. **#7294** 复合 Bash 命令权限控制（8 评论，5 👍）— 用户希望 `&&` 连接的每段命令都命中 allow 规则时整体放行，权限粒度问题呼声较高。
   [链接](https://github.com/can1357/oh-my-pi/issues/7294)

6. **#9653** MCP 静默重写模型参数并丢弃未知字段（8 评论）— `write` 调用与 MCP `tools/call` 之间参数被悄然改名/丢弃，涉及工具层正确性，被标记 wontfix 引发讨论。
   [链接](https://github.com/can1357/oh-my-pi/issues/9653)

7. **#10862** [已关闭] git repo 内不再加载 ~/AGENTS.md（7 评论）— 升级后全局指令静默失效，属于“静默破坏性变更”类问题，已修复关闭。
   [链接](https://github.com/can1357/oh-my-pi/issues/10862)

8. **#10914** isolated:true 子代理 cwd 错误（6 评论，p1）— 隔离子代理的 bash 调用实际运行在父会话目录而非分配的 worktree，可能导致跨分支误操作，优先级最高的问题之一。
   [链接](https://github.com/can1357/oh-my-pi/issues/10914)

9. **#10940** 运行中创建的 RULES.md 不生效（5 评论）— 新会话（含 /clear）仍使用旧规则，必须重启进程，违背 RULES.md 的文档承诺。
   [链接](https://github.com/can1357/oh-my-pi/issues/10940)

10. **#10920** 提议桥接 OpenAI Codex 的 Astra 压缩/历史方法（7 评论）— 新的上下文保留与检索机制，避免传统 compaction 丢失细节，方向性功能讨论。
    [链接](https://github.com/can1357/oh-my-pi/issues/10920)

---

## 🔧 重要 PR 进展

1. **#11004** agent 定义文件作为主会话 persona — `omp --agent reviewer` 直接以任意 task agent 启动主会话，关闭 #6836/#5306/#7056，以更简架构取代已关闭的 #9510。
   [链接](https://github.com/can1357/oh-my-pi/pull/11004)

2. **#10795** [perf, p0] memories 只读会话文件前 64KB 头部 — `collectThreads` 改用有界头切片，显著降低内存扫描开销。
   [链接](https://github.com/can1357/oh-my-pi/pull/10795)

3. **#11002** [perf, p0] /copy 改为尾部重放 + 缓存选择器行 — 只重放最近 600 条目，直接回应 #10955 类的 TUI 卡顿问题。
   [链接](https://github.com/can1357/oh-my-pi/pull/11002)

4. **#10998** [fix, p0] memory:// URL 绑定调用会话 — 修复跨会话内存解析错乱，按 stable session-manager ID 隔离。
   [链接](https://github.com/can1357/oh-my-pi/pull/10998)

5. **#10792** [fix, p1] 会话 pin 切换跨进程锁 + 原子替换 — 复用 MCP config-writer 的 write-temp-then-rename 模式，消除并发写损坏。
   [链接](https://github.com/can1357/oh-my-pi/pull/10792)

6. **#10999** [fix, p1] cwd 变更后等待 memory 重绑定 — 交互与 headless 路径统一，回滚/rescope 场景覆盖。
   [链接](https://github.com/can1357/oh-my-pi/pull/10999)

7. **#10892** [fix, p1] Eval 工具遵守 spawn 递归深度 — 达到 `maxRecursionDepth` 时不再向模型宣传 `agent()` 能力。
   [链接](https://github.com/can1357/oh-my-pi/pull/10892)

8. **#9009** [fix, p1] browser-relay 回收孤儿 debugger 附件 — relay 进程死亡后 Chrome 调试附件永久残留的问题（#8930）。
   [链接](https://github.com/can1357/oh-my-pi/pull/9009)

9. **#10971** [feat] Brave API-key 登录支持 — 接入现有登录 catalog，保留环境变量回退。
   [链接](https://github.com/can1357/oh-my-pi/pull/10971)

10. **#8301** [feat] /prune 会话分支清理 + 归档替代删除 + 树视图 Shift+A — 三项独立提交，完善会话管理体验。
    [链接](https://github.com/can1357/oh-my-pi/pull/8301)

---

## 📈 功能需求趋势

- **子代理/多代理架构**：Subagent 崩溃（#10781/#10915）、worktree 隔离（#10914）、跨进程 agent 通信（#7537）、registry 污染（#10973）——多代理是问题与需求最集中的区域。
- **TUI/UX 性能与体验**：流式掉帧（#10955）、alternate-screen 转录模式（#10232，5 👍）、状态栏指标（#9314）、会话管理（#8301、#6085 /btw 分支）。
- **提供商生态扩展**：antigravity 登录资格（#10747）、OpenRouter 403 诊断（#10906）、Qwen/Codex/Astra 新模型能力适配（#10924、#10920）、thinking effort 语义映射（#10994）。
- **权限与安全控制**：复合 Bash 命令审批粒度（#7294）、RPC 模式 MCP 工具缺失（#10904）。
- **上下文与记忆系统**：RULES.md 热加载（#10940）、memory URL 会话绑定（#10998）、Astra 式历史压缩（#10920）。

---

## ⚠️ 开发者关注点

1. **antigravity 提供商稳定性**：spawn 100% 崩溃 + 登录资格问题，是多条 issue 的共同根源，急需修复。
2. **静默失效类问题高发**：AGENTS.md 不加载、RULES.md 不热更、MCP 参数被静默改写——用户反复强调“宁可报错也不要静默改变行为”。
3. **文件/状态管理的并发正确性**：session-pins 锁、memory 绑定、cursor 会话 JSONL 丢失（#10965）表明多进程状态一致性是系统性痛点。
4. **插件 SDK 兼容性**：pi-cliproxyapi、pi-blackhole 等扩展因 API 变更（`ctx.isProjectTrusted`、`calculateContextTokens`）接连失败，SDK 稳定性承诺缺失。
5. **卸载/回滚能力**：无卸载程序（#3351）+ 社区自制 omp-sync 快照工具（#11003）反映出用户对安装可管理性的实际需求。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*