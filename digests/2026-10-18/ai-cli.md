# AI CLI 工具社区动态日报 2026-10-18

> 生成时间: 2026-10-18 03:37 UTC | 覆盖工具: 11 个

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
**数据日期：2026-10-18**

---

## 1. 生态全景

AI CLI 工具已从简单的命令行补全演化为**多 Agent 编排 + 桌面/远程协同 + 企业级管控**的复杂系统。头部工具（Claude Code、Codex）的社区焦点正从“功能可用”转向“权限安全、成本可控、多会话可靠性”等生产化议题；第二梯队则在架构层面押注（Qwen Code 的 Managed Agent 双路径、Codex 的 app-server 性能重构）。值得注意的是，国产/开源力量（Pi、oh-my-pi、DeepSeek 系、OpenCode）展现出极强的响应速度和细分定位，形成对头部产品的差异化夹击。

---

## 2. 各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | Release | 今日核心事件 |
|---|---|---|---|---|
| **Claude Code** | 10+ 热点 | 2 | ❌ | Desktop 回归集中爆发（分组丢失、会话失控、pkill 误杀） |
| **OpenAI Codex** | 10 热点 | 6（全 bot、已关闭） | ✅ rust-v0.164.0-alpha.3 | Windows 缺陷聚集 + app-server 底层优化 |
| **Gemini CLI** | 10 热点 | 10 | ✅ v0.66.0-nightly | 新 Bug 当天出修复 PR，响应极快 |
| **Copilot CLI** | 21 | 0 | ❌ | HydraFusion 静默降级 + 1.0.99 权限双向回归 |
| **OpenCode** | 10 热点 | 10 | ❌ | 免费 403 风暴 + Skill 发现一揽子修复合并 |
| **Qwen Code** | 10 热点 | 10 | ✅ v0.25.2-nightly | Managed Agent Stage D/F/G/H 多线推进 |
| **DeepSeek TUI** | 10 热点 | 11+ | ❌ | 单人 7 个核心修复 PR；会话快照损坏问题 |
| **Pi** | 42 更新 | 9 | ❌ | 多个安全 bug 当日修复合关 |
| **oh-my-pi** | 10 热点 | 12+ | ✅ v18.12.1 / v18.12.0 | 并发子代理内存安全、多账号调度 |
| **DeepSeek Harness** | 0 | 0 | ✅ 2 个 rc | 新模型适配 + 插件生态 |
| **Kimi Code CLI** | 0 | 0 | ❌ | 无活动 |

**观察**：Pi（42 条 Issue 更新）和 Copilot CLI（21 条）交互最密集；Copilot CLI 是唯一“有大量 Issue 但零 PR 活动”的项目，修复响应明显滞后于问题发现。

---

## 3. 共同关注的功能方向

### 3.1 子代理（Subagent）可靠性 — *最普遍的痛点*
- **Claude Code**：并行 Subagent OOM（#101901）、MCP 过多致 prompt 超限（#37793）
- **Gemini CLI**：MAX_TURNS 误报 success（#22323）、代理无限挂起（#21409）——社区 workaround 是直接禁用
- **Codex**：Dots 委派任务缺 Computer Use/Chrome 工具（#49458、#49551）
- **OpenCode / oh-my-pi / Qwen Code**：结果串会话、40GiB 内存崩溃、并发 Turn 锁停滞

**结论**：多 Agent 并行是所有工具的共同方向，但也是所有工具的共同薄弱环节。

### 3.2 权限与沙箱安全的“双向失控”
- **过松**：Claude Code Auto Mode `pkill` 误杀 GUI（#100684）、Copilot CLI git commit 跳过审批（#5177）、OpenCode "ask" 规则被静默自动批准（#55593）
- **过严**：Codex 沙箱误拦已授权操作、Copilot CLI `mkdir && cd` 被硬拒（#5173）、DeepSeek TUI 只读管道被拦（#6963）

**结论**：审批判定的精确性是行业性缺口，双向回归同时出现说明权限测试覆盖普遍不足。

### 3.3 会话持久化与恢复
- Claude Code 会话失控派生、Gemini CLI 配额中断丢会话（#29799 修复）、DeepSeek TUI 快照损坏、OpenCode subagent 状态保留（#36349）、Qwen Code 256MiB Transcript 上限（#13113）

### 3.4 成本透明与静默降级
- Copilot CLI HydraFusion 三连 Issue（静默换小模型）、Claude Code 会话中途被换模型（#103106）、oh-my-pi 配额调度阻塞付费账号（#16104）——**“宁可报错，不要静默降级”已成社区共识**

### 3.5 MCP 生态健壮性
所有主流工具均有 MCP 相关 Issue：服务器崩溃不重启、工具定义膨胀（Copilot CLI 15K→260K tokens）、>128 工具报 400、生命周期残留进程。

### 3.6 Windows 平台成熟度
Codex 热点 Issue 过半为 Windows；OpenCode 403 集中在 Windows；Claude Code 分组回归也以 Windows 用户为主。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 技术路线 | 目标用户 |
|---|---|---|---|
| **Claude Code** | Desktop/IDE 全端体验、企业安全遥测（sec-default PR） | 闭源、官方托管 | 专业开发者 + 企业 |
| **Codex** | 多端协同（iOS/Android 远程）、Computer Use | Rust 重构 + app-server 架构 | ChatGPT 生态用户 |
| **Gemini CLI** | 上下文效率（AST 感知工具链）、免费层体验 | 开源 TS、nightly 高频迭代 | 免费层 + 开发者 |
| **Copilot CLI** | 多模型路由、企业合规 | 闭源、GitHub 生态绑定 | 企业 GitHub 用户 |
| **Qwen Code** | 多租户可靠性、ACP 标准化 | Managed Agent 双路径、writer fencing | 自托管/企业 |
| **Pi / oh-my-pi** | 可嵌入 Agent 内核（RPC/Durable）、多 Provider 路由 | 开源、Bun/Tokio 混合 | 二次开发/极客 |
| **DeepSeek 系** | 新模型快速适配、插件生态、国产 Provider | 开源、模型-工具一体化 | DeepSeek/中文用户 |
| **OpenCode** | 本地模型、免费层、权限精细化 | 开源、插件运行时共享 | 本地推理用户 |

**关键分野**：闭源头部走“全端 + 企业管控”，开源阵营分裂为三条路线——**可嵌入内核**（Pi）、**多租户基础设施**（Qwen Code）、**模型生态配套**（DeepSeek 系）。

---

## 5. 社区热度与成熟度

- **热度第一梯队**：Claude Code（#18435 达 914 👍 显示存量用户基数最大）、Codex、Copilot CLI——问题量大反映用户量大，但 Claude Code Desktop 近期回归频发、Copilot CLI 修复停滞，进入“规模换质量”阶段
- **响应速度标杆**：**Gemini CLI、Pi、oh-my-pi**——多个 P1 级问题当日报告当日修复合关，oh-my-pi 甚至有维护者亲自重构社区方案
- **快速迭代/架构攻坚期**：Qwen Code（Stage 体系多线推进）、Codex（alpha 通道 + 底层重构）——版本节奏快，适合跟进不适合生产重度依赖
- **生态建设初期**：DeepSeek Harness（插件索引、Agent 造插件）、Kimi Code CLI（几近静默）
- **社区质量亮点**：oh-my-pi、DeepSeek TUI 的 Issue 普遍附根因分析（如 SQLite 锁损坏引用官方 howtocorrupt 文档），社区技术素养高

---

## 6. 值得关注的趋势信号

1. **“静默失败”是下一个信任战场**：静默降级、静默丢配置、静默损坏文件（Claude Code `\uXXXX`、Pi 非 ASCII 损坏）、静默丢历史——各社区不约而同要求**显式失败 + 可观测性**（OTel 集成诉求在 Copilot CLI、Qwen Code 同时出现）。

2. **权限模型从“开关”走向“策略引擎”**：OpenCode 的权限编辑 API、Code Mode deny 强制、Qwen Code 审批白名单、Pi 的 trust 决策修复——精细化、可审计、per-session 隔离成为标配方向。

3. **多 Agent 并发是 2026 年的质量分水岭**：谁能先解决并发下的内存安全、结果路由、状态恢复（Qwen Code 的 writer fencing 是最激进的尝试），谁就能承接重度生产场景。

4. **成本工程成为一等公民**：缓存经济学分析（DeepSeek TUI #6969）、工具定义瘦身、thinking 区间控制、prompt cache 保活——token 预算感知正在从用户焦虑转化为产品功能。

5. **Agent 内核化/可嵌入化**（Pi 的 RPC MCP 注册、Durable Object 支持）预示 AI CLI 的终局形态可能不是独立应用，而是**可被任意宿主编排的执行单元**。

**给开发者的实操建议**：
- 生产环境升级前必查 Claude Code（Desktop 系列）、Copilot CLI（1.0.97–1.0.99 区间）的回归 Issue
- 需要定制/嵌入能力优先评估 Pi、oh-my-pi；需要多租户自托管关注 Qwen Code Managed Agent 进展
- 多 MCP 服务器重度用户注意工具定义体积与上下文预算的冲突（三家工具均有相关报告）
- Windows 用户当前在所有工具上均为二等体验，选型时需额外评估

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据来源**：github.com/anthropics/skills | 数据截止：2026-10-18

---

## 一、热门 Skills 排行（基于 PR 活跃度与社区讨论）

> 注：本批 PR 评论数据缺失，排序综合创建/更新时间、关联 Issue 热度及影响面判断。

| # | Skill / PR | 功能与讨论热点 | 状态 |
|---|---|---|---|
| 1 | **mcp-builder 修复**（[PR #1742](https://github.com/anthropics/skills/pull/1742)） | 适配 `mcp>=2.0` 的 `streamable_http_client` 重命名与自定义 HTTP 头机制；关联多个 mcp-builder 质量问题的核心修复（另见 Issue #1390 评测全 0 分问题） | OPEN |
| 2 | **skill-creator 触发评测隔离**（[PR #1298](https://github.com/anthropics/skills/pull/1298)） | 修复触发评估误报、Windows `select()` 兼容、运行失败被误判为非触发等问题；是 skill-creator 一系列质量问题（Issues #556、#1383）的关键修复 | OPEN |
| 3 | **skill-creator eval viewer 安全加固**（[PR #1961](https://github.com/anthropics/skills/pull/1961)） | 修复脚本逃逸、DNS rebinding、跨站 POST 等 XSS/安全漏洞；呼应 Issue #1394 | OPEN |
| 4 | **harness SDD 套件**（[PR #2039](https://github.com/anthropics/skills/pull/2039) / [#2040](https://github.com/anthropics/skills/pull/2040)） | Spec 驱动开发三件套 + architecture-advisor，含对抗式审查流程；近期最完整的多 Skill 提交 | OPEN |
| 5 | **md2video-audio**（[PR #1703](https://github.com/anthropics/skills/pull/1703)） | 零成本将 Markdown 编译为带真人配音的 MP4 视频（Marp + TTS），媒体生成方向代表作 | OPEN |
| 6 | **notion-spec-to-implementation**（[PR #1245](https://github.com/anthropics/skills/pull/1245)） | 将产品/技术 Spec 拆解为 Notion 任务并附带验收标准；项目管理自动化方向，活跃至 10 月中旬 | OPEN |
| 7 | **document-typography**（[PR #514](https://github.com/anthropics/skills/pull/514)） | 解决 AI 生成文档的孤行、寡行、编号错位等排版问题，属长尾痛点 | OPEN |
| 8 | **skill-creator YAML 解析修复**（[PR #1997](https://github.com/anthropics/skills/pull/1997)） | 修复 `parse_skill_md` 元数据解析偏差，影响评测与描述优化链路 | OPEN |

---

## 二、社区需求趋势（来自 Issues）

1. **安全与信任治理**（最热，46 评论）：[Issue #492](https://github.com/anthropics/skills/issues/492) —— 社区 Skill 冒用 `anthropic/` 命名空间造成信任边界滥用；配套诉求为 Skill 质量分析器（PR #83）。同时 eval-viewer XSS（#1394）、merge_runs XML 损坏（#2018）等安全/正确性问题频发。
2. **组织级分发与共享**：[Issue #228](https://github.com/anthropics/skills/issues/228) —— 组织内 Skill 库、直接分享链接；另有 #189 插件重复安装问题。
3. **Skill 质量评测工具链**：#556（触发率 0%）、#1383、#1385 —— 社区强烈需要可靠的触发评测与“质量门禁”流水线。
4. **文档处理深度增强**：docx/pdf/odt 方向持续活跃（#486、#2018、PR #1792、#1734），排版质量控制需求明确。
5. **Agent 记忆与治理类元 Skill**：compact-memory（#1329）、agent-governance（#412）—— 长上下文压缩与 agent 安全治理是新兴方向。
6. **上下文效率**：#1487 —— claude-api Skill 一次注入 ~156k token 耗尽上下文，引发对 Skill 轻量化设计的关注。

---

## 三、高潜力待合并 Skills

- **[PR #1742](https://github.com/anthropics/skills/pull/1742)**：mcp-builder 对 MCP 2.x 的适配，是阻塞性修复，合并优先级高。
- **[PR #1298](https://github.com/anthropics/skills/pull/1298)**：解决 skill-creator 评测在 Windows/运行时失败的核心缺陷，对应多个高热 Issue。
- **[PR #1961](https://github.com/anthropics/skills/pull/1961)** + **[PR #1997](https://github.com/anthropics/skills/pull/1997)**：skill-creator 安全与解析修复，社区贡献者 BichengWang 密集提交相关 bug（#2018、#1868），形成修复浪潮。
- **[PR #1245](https://github.com/anthropics/skills/pull/1245)**：Notion 集成，10 月仍有更新，合并意向明显。
- **[PR #2039/#2040](https://github.com/anthropics/skills/pull/2039)**：SDD 套件，来自成熟开源项目，工程完整度高。

---

## 四、生态洞察

**社区最集中的诉求：为 Skills 建立“可信的分发与质量保障体系”**——即解决社区 Skill 冒用官方命名空间的信任危机、修复 skill-creator 评测链路使其真正可用、并让 Skill 交付轻量可靠（安全、上下文效率、跨平台正确性）。

---

# Claude Code 社区动态日报 — 2026-10-18

数据来源：github.com/anthropics/claude-code

---

## 1. 今日速览

今日无新版本发布，社区焦点集中在 Desktop 应用的多处回归问题上：Code 标签页失去 "Group by" 分组功能（62 条评论）、会话级联自动生成失控（单日 46 个会话）、以及 Auto Mode 下 Bash 执行带来的安全隐患（`pkill` 误杀全部 GUI 应用）。同时，多账号管理功能需求（914 👍）热度持续领跑。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues

1. **[#18435](https://github.com/anthropics/claude-code/issues/18435) 多账号管理与快速切换（Desktop）** — 914 👍 / 202 评论，长盛不衰的头号功能需求，工作/个人账号隔离是刚需。

2. **[#102088](https://github.com/anthropics/claude-code/issues/102088) Desktop 2.37337.1 移除 "Group by" 分组选项（回归）** — 62 评论 / 41 👍，Windows 用户的会话管理体验严重受损，属近期升级引入的 UI 回归。

3. **[#90450](https://github.com/anthropics/claude-code/issues/90450) Auto Mode Bash 优先指令静默禁用嵌套 CLAUDE.md 规则** — 48 👍，涉及权限与项目规则的可预测性，企业用户尤为关注。

4. **[#37793](https://github.com/anthropics/claude-code/issues/37793) 大量 MCP 服务器导致 Subagent "prompt is too long"（已关闭）** — 用户级配置过多 MCP 工具定义超 200k token，Subagent 直接失败且无可见错误提示。

5. **[#98134](https://github.com/anthropics/claude-code/issues/98134) Apple Max 20x 订阅被识别为 Pro（macOS）** — 订阅等级识别错误直接影响可用额度与功能，19 条评论反映影响面较广。

6. **[#100684](https://github.com/anthropics/claude-code/issues/100684) Auto Mode 运行 `pkill -f "cat"` 杀死 macOS 所有 GUI 应用** — Auto Mode 权限边界问题的典型案例，安全隐患显著，值得安全审计关注。

7. **[#102625](https://github.com/anthropics/claude-code/issues/102625) Desktop 级联生成失控会话（单日 46 个）** — 会话自发派生会话，造成资源与费用失控，与最近 Desktop 更新相关。

8. **[#101901](https://github.com/anthropics/claude-code/issues/101901) 并行后台 Subagent 导致 VS Code 扩展宿主 OOM（Windows）** — 仅 2 个并行 Agent 即可触发，三种缓解手段均无效。

9. **[#72957](https://github.com/anthropics/claude-code/issues/72957) Write/Edit 工具静默解码 `\uXXXX` 破坏文件内容** — 无法写入字面转义序列，对涉及 Unicode 处理的代码库是数据损坏级问题。

10. **[#103106](https://github.com/anthropics/claude-code/issues/103106) 会话中途模型被切换（fable-5 → opus-4-8）** — 忽略 `switchModelsOnFlag: false` 配置，今日新报，涉及模型一致性与成本控制。

---

## 4. 重要 PR 进展

过去 24 小时仅 2 条 PR 更新（数据源仅提供以下条目，故不做凑数列举）：

1. **[#97688](https://github.com/anthropics/claude-code/pull/97688) sec-default：collector 记录突破用户层级（OPEN）** — 组织启用 sec-default 后，用户插件无法篡改/丢弃发往安全收集器的记录，属企业安全遥测加固，对合规场景意义重大。

2. **[#27140](https://github.com/anthropics/claude-code/pull/27140) memory-bridge 会话上下文整合插件（CLOSED）** — 提供 `/bridge` 命令将会话学习成果沉淀至 MEMORY.md/CLAUDE.md，含上下文压缩预警 Stop hook。已被关闭，社区对持久记忆方向的探索仍在继续。

---

## 5. 功能需求趋势

- **多账号 / 订阅管理**：#18435（914 👍）、#98134，工作与个人场景隔离需求强烈。
- **Auto Mode 权限与安全性**：#90450、#100684、#103107，自动执行模式的安全护栏是最大争议点。
- **会话管理体验**：#102088（分组回归）、#92717（跨设备分组同步）、#102625（会话失控），Desktop 会话组织能力有待系统性设计。
- **MCP 生态健壮性**：#37793、#102965（重连残留进程）、#16837（超时上限），多服务器场景的资源配置与生命周期管理。
- **Linux 桌面支持**：#103071 呼吁 CLI Computer use 支持 Linux（X11/Wayland）。
- **成本与缓存优化**：#95728（prompt cache 保活）、#103064（合盖后仍发请求），费用可见性与浪费控制。

---

## 6. 开发者关注点

- **Auto Mode 的双刃剑**：便捷性换来的是权限规则失效、危险命令误执行，社区迫切需要更明确的边界与审批机制。
- **Desktop 回归频发**：近几个版本连续引入 UI 回归（分组丢失、Remote Control 失效 #92276）、会话失控，质量保障流程受质疑。
- **Subagent 稳定性**：OOM 崩溃（#101901）、transcript 计量不准（#97763）、prompt 超限（#37793），多 Agent 并行仍是薄弱环节。
- **企业级管控**：sec-default PR 显示官方在加强组织层安全遥测；但 Remote Control 403（#100526）、Trusted Devices 等功能边界仍混乱。
- **成本失控焦虑**：模型被静默切换、合盖后隐性重试，用户对不可见的 token 消耗高度敏感。

---
*本日报基于过去 24 小时 GitHub 公开数据自动生成，评论数排序选取。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-10-18**

---

## 📌 今日速览

今日 Codex 发布 **rust-v0.164.0-alpha.3** 预发布版本，社区持续处于活跃反馈期。Windows 平台依然是问题重灾区，Computer Use、沙箱误拦截和 Dots 委派任务工具缺失占据热门 Issue 榜首。同时合入多个 app-server 性能优化 PR（WebSocket zstd 压缩、缓存保持），显示团队正在底层架构上发力。

---

## 🚀 版本发布

- **rust-v0.164.0-alpha.3** — 预发布版本，官方未附详细变更说明，属于 alpha 迭代通道。
  链接：[openai/codex Release 0.164.0-alpha.3](https://github.com/openai/codex/releases)

---

## 🔥 社区热点 Issues（Top 10）

1. **[#49458](https://github.com/openai/codex/issues/49458)** — [Windows] Dots 发起的本地任务缺少 Computer Use 工具，而普通本地会话正常（85 评论 / 26 👍）。Dots 委派任务与本地会话能力不一致，是当前讨论最激烈的缺陷。
2. **[#35446](https://github.com/openai/codex/issues/35446)** — Win10 Computer Use 在 FrameArrived 中等待 SoftwareBitmap 转换时死锁（36 评论），长期未修复的稳定性问题。
3. **[#41982](https://github.com/openai/codex/issues/41982)** — Android 远程打开任务触发 git.exe 崩溃风暴导致系统级 OOM（24 评论），严重级别的资源失控问题。
4. **[#35705](https://github.com/openai/codex/issues/35705)** — Chrome 扩展 nodePath 缺失无法启动（22 评论），影响 Windows 用户接入。
5. **[#49551](https://github.com/openai/codex/issues/49551)** — Dots 委派任务缺少 Chrome 工具（`node_repl js`），手动创建的 Chat 正常（17 评论 / 9 👍），与 #49458 同属 Dots 工具能力缺失家族。
6. **[#50329](https://github.com/openai/codex/issues/50329)** — Windows App 中 `read_thread` 对已完成的 ChatGPT 回复只返回 content-reference（14 评论），影响 MCP 集成。
7. **[#50346](https://github.com/openai/codex/issues/50346)** — [已关闭] Linux 桌面版移除 Ctrl+Shift+D 听写快捷键（13 评论），回归问题已获处理。
8. **[#34289](https://github.com/openai/codex/issues/34289)** — Hooks 的 PostToolUse 无失败信号、PostToolUseFailure 从不触发（12 评论），CLI 自动化集成的关键缺口。
9. **[#25431](https://github.com/openai/codex/issues/25431)** — Windows 桌面端请求拼写检查开关设置（11 评论 / 28 👍），高票功能请求。
10. **[#50157](https://github.com/openai/codex/issues/50157)** — Dot 无法读取已存在的远程会话：不支持的 placement format 版本 1/2（11 评论），与 #49729 相关，跨版本会话兼容问题。

---

## 🔀 重要 PR 进展

> 注：过去 24 小时仅 6 个 PR 更新，全部为 bot 提交且已关闭，以下按重要性全量列出。

1. **[#54930](https://github.com/openai/codex/pull/54930)** — app-server WebSocket 协商 zstd 压缩（`zstd-stream-v1`），压缩 JSON 以二进制消息传输，本地/TCP 均支持。
2. **[#54949](https://github.com/openai/codex/pull/54949)** — 将 WebSocket 压缩置于 feature flag 之后（默认关闭），作为上一 PR 的安全开关。
3. **[#54961](https://github.com/openai/codex/pull/54961)** — 允许 agent 消息在 feature flag 下唤醒空闲 root session，解决 worker 晚于父会话完成任务时的消息丢失场景。
4. **[#54946](https://github.com/openai/codex/pull/54946)** — 凭据轮换时基于稳定账户 ID 保留模型目录缓存，避免重复拉取。
5. **[#54945](https://github.com/openai/codex/pull/54945)** — 工具声明改为 `Arc` 共享，避免 ResponseItem 克隆时深拷贝，降低内存开销。
6. **[#54776](https://github.com/openai/codex/pull/54776)** — 上下文 prompt fragments 支持类型化 ContentItem，保留分类与归因信息，为非文本内容铺路。

---

## 📈 功能需求趋势

- **Dots / Subagent 能力对齐**：#49458、#49551、#50157 集中反映委派任务缺少工具/会话读取能力，是当前最强烈的诉求方向。
- **Windows 平台成熟度**：热门 Issue 中过半与 Windows 相关（Computer Use、沙箱误拦、app-server 卡顿），平台差距亟待收敛。
- **沙箱策略精细化**：#45986、#45232、#54962 反映 PowerShell 命令被误判拦截，用户要求更准确的意图识别和人工授权通道。
- **远程/移动协同**：iOS 远程查看会话（#51053、#50157）和远程触发的问题（#41982）需求旺盛。
- **可配置性**：拼写检查开关（#25431，28 👍）、用量效率与低成本实验（#54956）。

---

## ⚠️ 开发者关注点

1. **沙箱误拦截是高频痛点**：多条 Issue 报告用户已明确授权的本地操作仍被 "blocked by policy" 拒绝（#45986、#46364、#54962），且无审查记录可追溯。
2. **MCP / Hooks 集成缺口**：失败事件不触发（#34289）、线程读取返回空引用（#50329）、空闲 STDIO MCP 耗尽 Tokio 阻塞池（#42740），自动化工作流开发者受影响最大。
3. **内容过滤误伤**：图片过滤器误报（#54740）和 "regurg plugin" 频繁中断正常编码输出（#54966），今日新增报告值得关注。
4. **资源泄漏与性能**：后台对 157 个会话发出 742 次无效读取（#51572）、git.exe 崩溃风暴（#41982）表明 Windows 端资源管理仍需加固。

---
*数据来源：github.com/openai/codex | 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-18）

## 一、今日速览

今日发布 nightly 版本 v0.66.0。社区动态集中在**子代理稳定性**与**配额/认证体验**两大方向：一个针对 customAliases 丢失 generateContentConfig 的新 Bug（#29804）当天即有修复 PR 提交（#29810），响应速度值得关注。此外，@seokjeongeum 密集提交多个核心修复 PR，覆盖配额中断会话保护、模型层级回退、MCP 代理等关键路径。

## 二、版本发布

- **v0.66.0-nightly.20261018.ged96faedf**（自动化 nightly 版本，由 #29809 触发）
  [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.66.0-nightly.20261017.ged96faedf...v0.66.0-nightly.20261018.ged96faedf)

## 三、社区热点 Issues

1. **#22323** [p1] 子代理达到 MAX_TURNS 后误报 "success"，掩盖了中断事实——直接影响任务可靠性判断，13 条评论讨论热烈。[链接](https://github.com/google-gemini/gemini-cli/issues/22323)
2. **#21409** [p1] 通用代理挂起：简单如创建文件夹的操作也会无限等待（用户实测等待 1 小时），👍 8，是子代理类问题中用户共鸣最强的。[链接](https://github.com/google-gemini/gemini-cli/issues/21409)
3. **#19873** [p2] 利用模型原生 bash 能力的零依赖 OS 沙箱 + 执行后意图路由，9 条评论，是安全性与能力释放的核心设计讨论。[链接](https://github.com/google-gemini/gemini-cli/issues/19873)
4. **#21968** [p2] Gemini 很少主动使用自定义 skills 和子代理，需显式指令才触发——反映编排调度的实际短板。[链接](https://github.com/google-gemini/gemini-cli/issues/21968)
5. **#22745** [p2] AST 感知文件读取/搜索/代码库映射 EPIC，配套 #22746、#22747，是提升 agent 效率的重要技术探索。[链接](https://github.com/google-gemini/gemini-cli/issues/22745)
6. **#22267** [p2] Browser Agent 完全忽略 settings.json 中的 maxTurns 等配置覆盖。[链接](https://github.com/google-gemini/gemini-cli/issues/22267)
7. **#24246** [p2] 工具数量超过 128 个时触发 400 错误，工具范围管理需要更智能。[链接](https://github.com/google-gemini/gemini-cli/issues/24246)
8. **#29804** 新增 Issue：customAliases 的 model 为层级名（如 flash-lite）时 generateContentConfig 被丢弃，当天已有修复 PR（#29810）。[链接](https://github.com/google-gemini/gemini-cli/issues/29804)
9. **#23571** [p2] 模型频繁在随机目录创建临时脚本，增加提交前清理负担。[链接](https://github.com/google-gemini/gemini-cli/issues/23571)
10. **#22672** 社区诉求：agent 应阻止/劝阻 `git reset --force` 等破坏性操作，在数据库等资源管理上需更谨慎。[链接](https://github.com/google-gemini/gemini-cli/issues/22672)

## 四、重要 PR 进展

1. **#29810** 修复 customAliases 在 model tier 解析时丢失 generateContentConfig 的问题（对应 #29804）。[链接](https://github.com/google-gemini/gemini-cli/pull/29810)
2. **#29800** [xl] 重构 Auto 模式配额耗尽处理：仅在 Auto 配额真正耗尽时跨模型层级（Pro ↔ Flash）回退，容量类故障不再记为永久不可用。[链接](https://github.com/google-gemini/gemini-cli/pull/29800)
3. **#29799** 配额错误/取消中断时保留最新 prompt 和已完成的工具轮次，Escape 可立即停止重试退避，会话可在退出/登出后恢复。[链接](https://github.com/google-gemini/gemini-cli/pull/29799)
4. **#29762** [p1] 修复 `/auth signin` 用启动快照覆盖磁盘配置，导致新增 MCP server、主题修改等丢失的问题。[链接](https://github.com/google-gemini/gemini-cli/pull/29762)
5. **#29801** 修复 Node 26 下 NO_PROXY 选择外部 Undici dispatcher 时 MCP discovery 报 `Unexpected content type: null`。[链接](https://github.com/google-gemini/gemini-cli/pull/29801)
6. **#29806** 修复 WSL2 下 Alt+V 粘贴图片：增加显示服务器检测回退，支持 image/bmp 等非 PNG 格式。[链接](https://github.com/google-gemini/gemini-cli/pull/29806)
7. **#29621**（已关闭）保留子代理工具响应中的多模态部分，修复图片数据被丢弃的问题。[链接](https://github.com/google-gemini/gemini-cli/pull/29621)
8. **#29703** 修复原子写入临时文件名超出 NAME_MAX（255 字节）导致的 ENAMETOOLONG。[链接](https://github.com/google-gemini/gemini-cli/pull/29703)
9. **#29807** 修复泰语/老挝语 SARA AM 字符宽度计算，解决 tmux 中光标错位、输入行重复跳动。[链接](https://github.com/google-gemini/gemini-cli/pull/29807)
10. **#29708** 修复 ACP `session/load` 在历史重放完成前就返回响应，导致客户端事件乱序的问题。[链接](https://github.com/google-gemini/gemini-cli/pull/29708)

## 五、功能需求趋势

- **子代理体系深化**（最主流）：本地子代理 Sprint（#20195）、并行协作与共享内存（#18287）、轨迹共享（#22598）、bug 报告含子代理上下文（#21763）、symlink 识别（#20079）等，area/agent 占热点 Issue 绝对多数。
- **上下文效率**：AST 感知工具链（#22745/#22746/#22747）、"Tactful Extraction" 精准读取（#19561）、文件化任务追踪替代 WriteToDo（#18836/#21000），目标都是降低 token 消耗与 context rot。
- **安全与沙箱**：零依赖 OS 沙箱（#19873）、破坏性操作防护（#22672）、per-workspace 权限策略（#18397）。
- **终端体验**：resize 无闪烁渲染（#21924）、`\n` 转义处理（#22466）、国际化字符宽度（#29807）。
- **质量保障**：内部 eval 稳定化（#23166）、行为 eval 覆盖交互卡死场景（#22465）。

## 六、开发者关注点

1. **子代理可靠性是最大痛点**：挂起（#21409）、误报成功（#22323）、配置不生效（#22267）、上下文丢失（#21763）——用户对“deferred to subagent 后失控”普遍不满，workarounds 是禁用子代理。
2. **配置与状态的持久性焦虑**：认证操作覆盖磁盘配置（#29762）、配额中断丢会话（#29799）、settings.json 被 Browser Agent 忽略（#22267），多处以“静默丢失”形式出现，信任成本高。
3. **工具与上下文规模管理**：>128 工具报 400（#24246）、大文件读取“firehose”式上下文膨胀（#19561），反映 agent 在复杂环境下缺乏自我约束。
4. **多环境兼容性**：Wayland（#21983）、WSL2（#29806）、tmux 国际化字符（#29807）等边缘环境问题持续有社区贡献者认领修复。
5. **配额体验**：配额不可用时的提示缺失（#29802）、层级回退策略（#29800）成为近期 PR 密集区，免费层用户的配额感知与自动降级是活跃方向。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-10-18 | 数据来源：github.com/github/copilot-cli**

---

## 📰 今日速览

今日无新版本发布、无活跃 PR，社区焦点完全集中在 Issues 上（24 小时内更新 21 条）。**HydraFusion 多模型路由的稳定性问题**（#5042、#5097、#5166）持续发酵，用户报告路由失败后静默降级、会话中途切换模型导致上下文溢出。同时，10 月 17 日密集出现多个与 **1.0.99-0 权限系统改动**及 **agent harness 迁移**相关的回归问题（#5173、#5177），值得维护团队优先关注。

---

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues（Top 10）

### 1. 模型路由与策略问题（高优先级集群）

**#5042 [OPEN]** — [HydraFusion：400 错误后会话被重路由至小上下文模型，静态提示无法加载](https://github.com/github/copilot-cli/issues/5042)
37 分钟的会话在 `gpt-5.6-sol` 返回 400 后被静默切换到 `mai-code-1.1-flash`，其上下文窗口无法容纳静态提示，且工具集在会话中途发生变更。这是对长会话连续性的实质性破坏，涉及 context-memory、models、tools 三个领域。

**#5097 [OPEN]** — [HydraFusion (policy max)：路由器返回策略外的模型并静默降级至 gpt-5.6-luna](https://github.com/github/copilot-cli/issues/5097)
路由失败后仅显示一行提示就继续使用低配模型，用户在不知情的情况下付出了“max 策略”的代价却获得了降级服务。静默降级缺乏透明度是核心痛点。

**#5166 [OPEN]** — [CLI 1.0.97 在 prompt 模式下启动了仓库 allowlist 之外的模型](https://github.com/github/copilot-cli/issues/5166)
涉及模型治理合规——对企业用户尤为重要，allowlist 被绕过可能是阻断性问题。

### 2. 权限与安全回归

**#5173 [OPEN]** — [自 1.0.99-0 起，cd 进入同命令新建目录的 Bash 命令被硬拒绝](https://github.com/github/copilot-cli/issues/5173)
`mkdir x && cd x && git status` 这类常见命令模式被无提示拒绝（"unusable session working directory"），直接影响日常工作流。**1.0.99-0 引入的新回归，建议优先修复。**

**#5177 [OPEN]** — [回归：harness 迁移后仓库变更类 Git 命令不再请求人工审批](https://github.com/github/copilot-cli/issues/5177)
10 月 agent harness 迁移后 `git add` / `git commit` 等操作跳过审批直接执行。这是**安全敏感的回归**，与 #5173 方向相反（一个过严、一个过松），提示权限判定逻辑需要系统性梳理。

**#5172 [OPEN]** — [Rewind 文件追踪会备份 gitignore 的密钥文件，需要排除机制或关闭开关](https://github.com/github/copilot-cli/issues/5172)
明文密钥被快照到 `session-state/.../rewind-file-snapshots/`，存在潜在敏感信息泄露风险。

### 3. 稳定性与资源问题

**#5176 [OPEN]** — [Linux sandbox：超 10 秒的 shell 命令被 SIGKILL（bwrap 父进程死亡信号绑定到已退出线程）](https://github.com/github/copilot-cli/issues/5176)
根因分析清晰（bubblewrap parent-death signal 绑定问题），长时构建/测试命令在沙箱下全部失败，无任何错误信息。

**#5164 [OPEN]** — [Sessions 侧边栏切换会话导致 MCP 服务器与扩展宿主泄漏（OOM）](https://github.com/github/copilot-cli/issues/5164)
多会话重度用户的内存泄漏问题，旧的 stdio MCP 服务器和 `extension_bootstrap.mjs` 进程持续存活。

### 4. 其他值得关注

**#5178 [OPEN]** — [`--agent code-review` 在推理前失败："system prompt callback is unavailable"](https://github.com/github/copilot-cli/issues/5178)
今日新报：内置 agent profile 直接启动失败，但协调器以子任务方式调用同一 agent 可正常工作，指向 agent 初始化路径的缺陷。

**#5151 [OPEN]** — [回归：工具定义从 15K 膨胀至 ~260K tokens，default-context Sol 模型首条提示即被拒](https://github.com/github/copilot-cli/issues/5151)
约 10 月 14 日起出现，工具定义体积暴涨 17 倍直接挤爆默认上下文预算，疑似近期工具集变更的连带影响。

---

## 🔀 重要 PR 进展

过去 24 小时无活跃 PR 更新。

---

## 📈 功能需求趋势

从本期 Issues 中可提炼出以下社区关注方向：

| 方向 | 相关 Issues | 说明 |
|---|---|---|
| **多模型路由透明度与可控性** | #5042、#5097、#4825、#5166 | HydraFusion 用户强烈要求：降级需显式告警、路由决策需可观测（OTel 集成）、策略/allowlist 必须严格遵守 |
| **权限模型精细化** | #5173、#5177、#5172 | 审批判定准确性（不误杀也不漏放）+ 敏感文件排除机制 |
| **可观测性 / OTel** | #4825 | 希望将 per-phase 模型、verdict、credit 消耗等会话事件导出到 OpenTelemetry |
| **终端集成标准化** | #5112 | 支持 OSC 7501 Program Status 协议，向宿主终端上报 working/blocked 状态 |
| **MCP 生态成熟度** | #5175、#5164、#5151 | MCP 认证续期路径缺失、服务器生命周期管理、工具定义体积控制 |
| **工作流性能** | #4849 | Subagent 启动/交接/审查循环延迟过高，社区希望缩短 round-trip 时间 |

---

## ⚠️ 开发者关注点

1. **静默降级是最大信任危机**：HydraFusion 相关三个 Issue 均指向同一模式——失败后不声不响地换模型继续跑。社区共识是宁可报错也不要静默降级。
2. **权限系统的双向回归**：1.0.99-0 与 harness 迁移分别引入了“过严”（#5173）和“过松”（#5177）的回归，安全审批逻辑的测试覆盖明显不足。
3. **企业场景摩擦**：Enterprise 账户 401 认证失败（#5165）、allowlist 绕过（#5166）显示企业级部署路径仍不成熟。
4. **资源与生命周期管理**：会话切换的进程泄漏（#5164）和 rewind 快照的敏感文件备份（#5172）表明 CLI 作为长驻进程的资源治理需要加强。
5. **静态上下文膨胀**：工具定义从 15K 涨到 260K tokens（#5151）直接压缩了可用上下文，是影响所有用户的系统性问题。

**建议关注版本**：1.0.97–1.0.99-0 区间为近期多个回归的共同来源，升级前建议先查阅上述 Issue。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-10-18

## 📌 今日速览

今日无新版本发布。社区焦点集中在 **免费模型 403 报错**（"free tier can only be used from within OpenCode"），Windows 用户在官方 TUI/Desktop 中大面积复现，成为评论数最高的 Issue（#56324，41 条评论）。维护方面，Skill 发现机制的一揽子修复 PR（#55597）已合并，一次性关闭了 NixOS inotify 泄漏（#55367）等多个长期问题。

---

## 🚨 社区热点 Issues

1. **[#56324](https://github.com/anomalyco/opencode/issues/56324)** [HIGH] Windows 官方 TUI 中免费模型全部返回 403 "free tier can only be used from within OpenCode"（v2.0.32）。41 条评论、20 👍，为今日最热问题，影响面大，尚无修复。

2. **[#56368](https://github.com/anomalyco/opencode/issues/56368)** CLI 请求免费模型同样出现 403，与 #56324 同源，正在 triage 中；关联的 **[#56338](https://github.com/anomalyco/opencode/issues/56338)**（Desktop 版）表明该问题横跨 TUI/Desktop/CLI。

3. **[#56605](https://github.com/anomalyco/opencode/issues/56605)** Desktop 手动 compaction 后 context meter 显示 `0`，直到下一条消息才恢复。上下文未丢失，纯显示 bug，已有修复 PR（见下文 #56645）。

4. **[#56636](https://github.com/anomalyco/opencode/issues/56636)** [已复现] v2 长请求期间 warming prompt 被反复重发（15 分钟间隔重试 3 次），最终导致 session 中断。对长上下文本地模型用户影响严重。

5. **[#55367](https://github.com/anomalyco/opencode/issues/55367)** [已复现已关闭] NixOS 上 file watcher 将 `/nix/store` 作为父目录监听，消耗约 **52.3 万个 inotify watch** 导致全系统 ENOSPC。今日被合并的 #55597 修复。

6. **[#55454](https://github.com/anomalyco/opencode/issues/55454)** Server-channel 插件因 `@opentui/core` env-registry 单例冲突被丢弃（与 #42338 同机制不同表现），暴露插件运行时隔离的深层问题。

7. **[#55593](https://github.com/anomalyco/opencode/issues/55593)** [HIGH已关闭] 权限规则 "ask" 被共享后台服务静默自动批准——无权限请求创建、无事件日志，属安全敏感问题。

8. **[#53226](https://github.com/anomalyco/opencode/issues/53226)** stdio MCP server 崩溃后不重启，工具静默从 agent 工具列表消失，只能重启 session。对依赖 MCP 的工作流可靠性影响大。

9. **[#36349](https://github.com/anomalyco/opencode/issues/36349)** v2 核心需求：managed server 重启后保留 subagent 父子完成关系，保证后台 subagent 结果能回传父任务。7 月提出至今仍开放。

10. **[#41582](https://github.com/anomalyco/opencode/issues/41582)** OpenCode Go 模型（DeepSeek-V4-Pro/Kimi-K3 等）流式响应中途截断，属服务端问题，波及多个模型。

---

## 🔧 重要 PR 进展

1. **[#55597](https://github.com/anomalyco/opencode/pull/55597)**（已合并）一揽子修复 Skill 发现与 watch 范围：跳过依赖树、限制 symlink watch，同时关闭 #55367、#45961、#51080，并整合了 #55479/#55234 两位贡献者的工作。**今日最重要合并**。

2. **[#56659](https://github.com/anomalyco/opencode/pull/56659)** 新增编辑已保存权限的 API，可将过宽的 `shell: *` 审批收窄——权限审计 UI（#50600）的前置能力。

3. **[#56645](https://github.com/anomalyco/opencode/pull/56645)** compaction 后上下文用量标记为“未测量”（显示 `—`），修复 #56605 的 `0` 显示问题。

4. **[#56644](https://github.com/anomalyco/opencode/pull/56644)** 让 server 插件共享宿主的 OpenTUI 运行时，解决 #55454 的单例冲突。

5. **[#56511](https://github.com/anomalyco/opencode/pull/56511)** Code Mode 强制执行 deny 策略——此前 Code Mode 可绕过权限请求直接执行，deny 规则形同虚设。

6. **[#56642](https://github.com/anomalyco/opencode/pull/56642)** 修复 HTTP server 在 request listener 挂载前到达的请求被丢弃的竞态问题。

7. **[#56651](https://github.com/anomalyco/opencode/pull/56651)** TUI 的 question tool 答复支持附加图片（重开自 #56650，原 PR 因目标分支退役被自动关闭）。

8. **[#56321](https://github.com/anomalyco/opencode/pull/56321)**（已合并）Shell 退出状态仅在输出捕获完成后上报，修复轮询客户端读到空输出的问题。

9. **[#54001](https://github.com/anomalyco/opencode/pull/54001)**（已合并）权限模式按 session 隔离，避免为一个任务开启 auto-accept 影响所有会话。

10. **[#55857](https://github.com/anomalyco/opencode/pull/55857)** 优化 Markdown 流式渲染：增量投影替代全量重词法分析，长会话渲染性能改进。

---

## 📈 功能需求趋势

- **免费层/认证可用性**：403 问题的三个关联 Issue 表明客户端身份识别机制是当前最大痛点。
- **权限与安全管控**：权限编辑 API、Code Mode deny 强制、per-session 权限模式——权限精细化是活跃开发方向。
- **Compaction 与上下文管理**：context meter 显示、warming prompt 重发、subagent 状态保留，多条 Issue 聚焦压缩/恢复链路的正确性。
- **本地模型与流式性能**：vLLM/Ollama 上下文缓存失效（#37489）、Go 模型截断、Markdown 渲染优化，本地推理体验持续受关注。
- **插件运行时隔离**：OpenTUI 单例冲突（#55454 等）推动宿主/插件运行时共享方案的落地。
- **MCP 可靠性**：崩溃不重启（#53226）、stale daemon 重复 MCP server（#42270）。

## 👨‍💻 开发者关注点

1. **Windows 体验仍偏弱**：403 报错、npm/yarn 全局安装失败、worktree 删除受阻均出现在 Windows。
2. **长会话稳定性**：200K 上下文场景下 warming 重发、subagent 状态丢失，重度用户（本地大模型）受影响最明显。
3. **可观测性不足**：SQLite 错误 cause 被丢弃（#55598）、权限事件无日志，排障困难。
4. **Graceful degradation 缺失**：单张不支持格式的图片导致整个 prompt 失败（#43262），期望降级而非中断。
5. **非 UTF-8 环境兼容**：GBK 编码支持（#37602）、filePath 未 trim 导致文件名带换行符，本地模型输出健壮性需加强。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-10-18）

## 📌 今日速览

今日发布 nightly 版本 v0.25.2，修复了 managed-agent 中 team_plan_approval 的 journal-only 中断回合处理问题。社区讨论焦点依然集中在 **Managed Agent 双路径架构**（#12380，评论已达 71 条）及其各阶段（Stage D/F/G/H）的落地进展。此外， telemetry OTLP/HTTP 导出空 body、Linux 下进程容器化等多个新 bug 被报告。

---

## 🚀 版本发布

**v0.25.2-nightly.20261017.39c237af3b**
- fix(managed-agent): 将 team_plan_approval 纳入 journal-only 中断回合的结算路径（#13847，by @wenshao）
- [Release 链接](https://github.com/QwenLM/qwen-code/releases)

---

## 🔥 社区热点 Issues

1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380) — Managed Agent 双路径架构提案**（评论 71）
 架构总纲 issue，定义 Session 持久所有权、Workspace 绑定、可恢复工具执行与稳定 WebSocket。几乎所有近期 managed-agent 工作都由此派生，是理解项目方向的必读文档。

2. **[#12952](https://github.com/QwenLM/qwen-code/issues/12952) — Stage G：权威 Session 历史与 writer fencing**（评论 10）
 外置权威 Session 历史/检查点，在移除 owner 亲和前验证写入者围栏与接管，是多租户可靠性的关键前置。

3. **[#13333](https://github.com/QwenLM/qwen-code/issues/13333) — ≥8 并发 Turn 在普通硬件上停滞（P1）**（评论 8）
 store 路径锁车队（lock convoy）导致并发会话在模型回答后卡住，直接影响生产可用性。

4. **[#14166](https://github.com/QwenLM/qwen-code/issues/14166) — D7-2 java_durable 操作的原始命令对账**
 Stage D 持久化工具执行的三片拆分之一，是暴露 `java_durable` 的硬性前置条件。

5. **[#13113](https://github.com/QwenLM/qwen-code/issues/13113) — Session 无法打开：Transcript 快照超 256 MiB 硬编码上限（P1）**
 长会话 `.jsonl` 二次方增长后彻底无法加载，属用户侧高影响 bug，已 ready-for-human。

6. **[#14165](https://github.com/QwenLM/qwen-code/issues/14165) — Stage F 容错门 FG10（workflow child_run）**
 容错测试门禁持续推进，当前被 blocked，等待依赖就绪。

7. **[#14466](https://github.com/QwenLM/qwen-code/issues/14466) — OTLP/HTTP 导出发送空 POST body**
 社区用户 @Michael-Logies 报告：span 正常产生但接收端收不到任何数据，可观测性用户受影响明显。

8. **[#14453](https://github.com/QwenLM/qwen-code/issues/14453) — Linux 下原生存储注册在 birth-time 时钟拍内失败（P1）**
 根目录 marker 落在同一时钟拍时被误判，导致间歇性 `Workspace execution authority is unavailable`。

9. **[#14503](https://github.com/QwenLM/qwen-code/issues/14503) / [#14502](https://github.com/QwenLM/qwen-code/issues/14502) — 进程容器化缺口**
 stdio MCP server 可在 Runtime worker 死亡后存活；Hook 进程可能残留在无人追踪的 cgroup 单元中。两个 Linux 进程生命周期问题同日报告，值得安全与稳定性关注。

10. **[#14419](https://github.com/QwenLM/qwen-code/issues/14419) — Hosted Harness 对 answered verb 的 store 失败错误码不一致**
 同类失败 `answered` 返回 400 而非 `execute` 的 503，语义不一致影响控制面重试逻辑。

---

## 🔧 重要 PR 进展

1. **[#14523](https://github.com/QwenLM/qwen-code/pull/14523)** — 恢复 receipt 完整的私有 CSI 文件回合：后继 Hosted owner 可完成原始工具检查点未决的回合。
2. **[#14488](https://github.com/QwenLM/qwen-code/pull/14488)**（已合并）— 修复 runtime MCP 状态与权限同步：子进程替换时清除已退役 server 记录，避免会话被错误固定到 Legacy 路径。
3. **[#14490](https://github.com/QwenLM/qwen-code/pull/14490)** — 新增 FG13c Hook owner-restart 容错门，首个针对命令 Hook 域的容错测试片。
4. **[#14499](https://github.com/QwenLM/qwen-code/pull/14499)**（已关闭）— FG12a MCP 回复丢失容错门：三种丢回复场景均需通过状态查询解析重试。
5. **[#14514](https://github.com/QwenLM/qwen-code/pull/14514)** — 补齐 sealed Managed commit-proof 子句的测试见证：损坏锁记录时写入者获取失败即关闭（fail closed）。
6. **[#14522](https://github.com/QwenLM/qwen-code/pull/14522)** — 将 daemon 恢复等待 `hosted_lifecycle_recovery_required` 改为自清式等待，操作保持 pending 且预算豁免。
7. **[#14521](https://github.com/QwenLM/qwen-code/pull/14521)** — 所有 Hosted IT 类统一纳入共享 fork 预算，替代逐类枚举的守卫。
8. **[#14345](https://github.com/QwenLM/qwen-code/pull/14345)** — Web Shell 新增审批模式白名单（`ui.allowedApprovalModes`），支持宿主级强制覆盖。
9. **[#14297](https://github.com/QwenLM/qwen-code/pull/14297)** — Web Shell 会话历史分组删除：支持非连续消息组勾选删除，用户体验显著增强。
10. **[#14493](https://github.com/QwenLM/qwen-code/pull/14493)** — CI 改进：Java 失败直接以 bot 评论形式挂到 PR，附作业链接与测试名。

---

## 📈 功能需求趋势

- **Managed Agent 多阶段交付**：Stage D（持久工具执行）、F（容错门 FG10–FG13）、G（Session 历史/writer fencing）、H（任务流/生命周期）并行推进，是当前绝对主线。
- **可观测性（Telemetry）**：OTLP 导出修复（#14466）、reasoning effort span 属性（#14508）——企业用户对 tracing 完整性需求上升。
- **桌面端体验**：Desktop 客户端 LSP 开关（#14507）、Web Shell 历史删除（#14297）与审批白名单（#14345）。
- **Linux 进程隔离与容器化**：cgroup、MCP/Hook 进程生命周期（#14502、#14503、#14453）成为可靠性新焦点。
- **ACP 协议标准化**：交互问题映射为标准 ACP permission request（PR #13852）、WebSocket upgrade 处理（PR #13997）。

---

## ⚠️ 开发者关注点

- **并发与锁**：InnoDB gap-lock 死锁残留（#13374）、≥8 并发 Turn 停滞（#13333）、workspace 锁重试预算偏紧（PR #14033 提议 10→30 次）——多会话高并发下的锁竞争是反复出现的痛点。
- **长会话可靠性**：Transcript 无界增长导致会话不可打开（#13113），256 MiB 硬编码上限亟需可配置化。
- **网络分区半开连接**：Hosted Harness 事件流缺少心跳，半开连接被无限读取（#14135）。
- **错误码语义一致性**：同类失败在不同 verb 下返回不同错误码/状态码（#14419、#14451/#14452 的容量拒绝码），影响上游重试策略。
- **CI 稳定性**：MariaDB lane（#14494）、Hosted 容错门测试驱动自身 bug（#14495）等 flaky test 持续消耗维护精力。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报
**日期：2026-10-18 | 数据来源：github.com/Hmbown/DeepSeek-TUI (codewhale-hq/Codewhale)**

---

## 1. 今日速览

今日无新版本发布，但 @asto18089 一口气提交了 **7 个 contribution-gate 修复 PR**（#7014–#7020），集中修复 providers 路由、Anthropic 流解码、归因追踪与压缩恢复等多个核心缺陷。Issues 侧，社区对**上下文压缩失败（#6981）**、**Windows 下 /undo 与会话快照损坏**等可靠性问题反应强烈，汉化组倡议（#6804）也持续吸引贡献者加入。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues

| # | 标题 | 关注理由 |
|---|------|---------|
| [#6652](https://github.com/codewhale-hq/Codewhale/issues/6652) 🔒 | TUI 长时间运行后滚动卡顿 | 14 条评论，Windows 高频性能问题，已关闭但社区持续讨论根治方案 |
| [#6804](https://github.com/codewhale-hq/Codewhale/issues/6804) | 号召成立汉化组 | 7 条评论，社区自发组织中文文档本地化，反映简中用户活跃度上升 |
| [#6981](https://github.com/codewhale-hq/Codewhale/issues/6981) | 上下文压缩失败 | 报错 `Chat API response missing choices`，新会话也受影响，7 条评论排障中 |
| [#6978](https://github.com/codewhale-hq/Codewhale/issues/6978) | Turn 快照 `git commit-tree` 失败 | 自 10-12 起损坏用户回合并重复投递旧消息，涉及 99 MB 长会话数据 |
| [#6963](https://github.com/codewhale-hq/Codewhale/issues/6963) | Windows 运行时下限误拦只读管道命令 | #6827 后续，原生（非 npm）安装下 Full Access 仍被 `SessionRuntimeRisk` 拒绝 |
| [#6955](https://github.com/codewhale-hq/Codewhale/issues/6955) | >8 MiB 会话文档无法 resume/fork | 与无界 journal（#6842）叠加导致，错误信息未给出补救路径 |
| [#6970](https://github.com/codewhale-hq/Codewhale/issues/6970) | /undo 只回滚文件不回滚对话 | Windows 下可复现，多次重试后仍不一致，用户信任受损 |
| [#6923](https://github.com/codewhale-hq/Codewhale/issues/6923) | Gemini 429 错误应等待自动重试 | 限流处理策略的增强讨论，多数用户支持 |
| [#7007](https://github.com/codewhale-hq/Codewhale/issues/7007) | Linux 沙箱 bwrap 符号链接挂载失败 | `$HOME` 为 symlink 时所有命令（含只读）均中止，阻塞 Linux 用户 |
| [#6969](https://github.com/codewhale-hq/Codewhale/issues/6969) | 延迟工具箱驱逐在 prompt caching 下净负收益 | 高质量经济性分析：全前缀重填充成本远超工具预算收益 |

---

## 4. 重要 PR 进展

| PR | 内容 |
|----|------|
| [#7020](https://github.com/codewhale-hq/Codewhale/pull/7020) | **fix(route)**: 自定义 provider 表的 `wire` 字段在运行时路由中被忽略，导致 Responses/Anthropic 协议退化为 Chat Completions |
| [#7019](https://github.com/codewhale-hq/Codewhale/pull/7019) | **fix(client)**: 捕获并回放 Anthropic `redacted_thinking` 块，修复被丢弃后 tool_use 回放失败 |
| [#7018](https://github.com/codewhale-hq/Codewhale/pull/7018) | **fix(engine)**: `TurnComplete` 终止事件补齐 turn/submission 归因，preflight 拒绝不再丢失上下文 |
| [#7017](https://github.com/codewhale-hq/Codewhale/pull/7017) | **fix(compaction)**: 按时代划分旧版检查点识别，防止误匹配摘要头部导致静默丢历史 |
| [#7015](https://github.com/codewhale-hq/Codewhale/pull/7015) | **fix(kimi)**: Moonshot 空 `items` schema 修复而非静默丢工具（browse 工具受影响） |
| [#7014](https://github.com/codewhale-hq/Codewhale/pull/7014) | **fix(client)**: Claude 5 代与 Haiku 5.5 丢弃采样参数，绕过 Messages API 限制 |
| [#7013](https://github.com/codewhale-hq/Codewhale/pull/7013) 🔒 | **fix(catalog)**: 一次修复 5 个缺陷，使自定义 OpenAI 兼容中继的模型列表能到达 `/model` |
| [#7016](https://github.com/codewhale-hq/Codewhale/pull/7016) | **ci(sync)**: CNB 镜像 token 缺失时跳过，修复 fork 上必红的问题 |
| [#7012](https://github.com/codewhale-hq/Codewhale/pull/7012) 🔒 | **fix(tui)**: /statusline Mode 提示统一为 "work"（配套 #6466 标签清理） |
| [#7009](https://github.com/codewhale-hq/Codewhale/pull/7009) | **refactor(commands)**: 13 个核心导航命令迁移到可移植 Shapes，为后续 crate 拆分铺路 |

另有多个 dependabot 依赖升级（tokio-util、rmcp、aws-lc-rs、objc2、uuid 等）已合并关闭。

---

## 5. 功能需求趋势

- **成本与 token 优化**：#6991 提议引入 fastctx 式方案大幅降低上下文开销；#6969 从缓存经济学角度质疑工具驱逐策略；#6603 提议 Decision Gate 让小模型处理常规决策
- **会话可靠性**：resume/fork/journal 一组问题（#6954、#6955、#6842）指向会话存储架构需要上限设计与原子写入（#6555）
- **本地化与多语言**：#6804 汉化组、#6964 按语言生成 AGENTS.md、俄语用户持续提交详细缺陷报告（#6986、#6987）
- **Provider 兼容性**：Gemini 429 重试（#6923）、Kimi schema、Claude 5 采样参数、自定义中继发现（#7013）——新模型/中继适配需求旺盛
- **Windows 体验**：滚动卡顿、/undo、运行时权限拦截（#6963）、cargo install 版本钉死 0.10.0（#6976）

---

## 6. 开发者关注点

1. **会话数据安全是最大痛点**：快照损坏（#6978）、>8 MiB 无法恢复（#6955）、/undo 不一致（#6970）——用户在长会话中丢失工作成果，且错误信息缺少补救指引
2. **跨平台一致性**：Windows 与 Linux（bwrap 沙箱 #7007）各有阻断性问题；审计类 issue（#6553、#6555）提示异步运行时阻塞与崩溃原子性是系统性风险
3. **成本透明度**：开发者希望 token 预算感知 wire 字节数并考虑 provider 缓存定价，而非仅本地字节预算
4. **CI/贡献门槛**：contribution-gate 标签的批量 PR 显示项目对外部贡献有严格审查流程；CNB 镜像与版本戳 CI 问题（#6911）也消耗维护者精力

> 注：数据中 Issue/PR 链接均指向 codewhale-hq/Codewhale 仓库，与数据来源标注的 Hmbown/DeepSeek-TUI 存在仓库指向差异，可能为镜像或改名关系，请以实际链接为准。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-10-18

## 📰 今日速览

今日 Pi 社区活跃度极高：过去 24 小时内有 42 条 Issue 更新、9 个 PR 更新，但无新版本发布。多个高关注度 bug（trust 决策失效、PowerShell 降级、compaction 并发冲突）已在当天由 PR 修复并关闭，社区响应速度显著。RPC 模式的 MCP 会话级注册能力（#11082）是当日最重要的功能合入。

---

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues

1. **#7730 [OPEN] macOS 长会话 CPU 占用高达 100%+**
   最老的高热 bug（创建于 8 月，20 评论 / 11 👍），CPU 在 50–110% 波动、内存 600–800MB，疑似与会话/上下文长度相关，持续未解。
   链接：earendil-works/pi Issue #7730

2. **#10947 [OPEN] isProjectTrusted() 无视已保存的 "Do not trust" 决策 → 当天已被 PR #11074 修复关闭**
   安全相关的信任模型 bug：无 trust-requiring 资源时，“不信任” 项目被放行，修复响应极快。
   链接：earendil-works/pi Issue #10947

3. **#10976 [OPEN] Microsoft Store 版 pwsh 7 导致 powershell 工具降级到 5.1**
   Store 安装是零长度 reparse point，`fs.existsSync` 失败后回落到旧版 PowerShell，配套修复 PR #11080 同日合入。
   链接：earendil-works/pi Issue #10976

4. **#10074 [OPEN] Anthropic 工具调用中非 ASCII edit 参数静默损坏**
   韩文等非 ASCII 文件频繁被写坏（`\uXXXX` 丢字符变成控制字符），用户追踪三周，影响数据安全，值得优先关注。
   链接：earendil-works/pi Issue #10074

5. **#10982 [OPEN] sendMessage(triggerTurn) 在手动 compaction 期间并发启动 run → PR #11077 修复**
   会破坏消息顺序并使用未压缩上下文，当日修复关闭。
   链接：earendil-works/pi Issue #10982

6. **#10645 [inprogress] Bun 编译产物中 resizeImage 返回 null，图片附件自 0.87.x 全部丢失**
   Windows standalone 二进制用户所有图片附件被静默忽略，影响 RPC 模式的宿主应用集成。
   链接：earendil-works/pi Issue #10645

7. **#11067 [CLOSED] RPC 模式缺少会话级 MCP 注册 → PR #11082 同日实现**
   stdin RPC 此前无任何 MCP 命令，阻塞 ACP 适配器实现；当日新增 register/unregister/get 三个 RPC 命令。
   链接：earendil-works/pi Issue #11067

8. **#10953 / #11033 [CLOSED] ChatGPT Business 订阅登录失败 `3p_delegated_access_policy_denied`**
   多人复现：新登录流程失败而 legacy Codex 登录可用，指向组织级委托访问策略问题，官方 Codex CLI 正常。
   链接：earendil-works/pi Issue #10953 / Issue #11033

9. **#11086 [bug] Windows 终端在客户端 CPU 高负载时符号泄漏进输入框**
   SSH 远程使用 + 本地高负载时输入被污染的渲染竞态问题，1.3 版本新报。
   链接：earendil-works/pi Issue #11086

10. **#10995 [pkg:ai] 切换模型后前一模型的 thinking 被转为明文，污染新模型输出**
    GLM-5.3 → Kimi K3 场景下新模型模仿可见推理文本，影响多模型混用工作流。
    链接：earendil-works/pi Issue #10995

---

## 🔧 重要 PR 进展

1. **#11082 [CLOSED] feat: RPC 会话级 MCP 服务器注册**
   新增 register_mcp_server / unregister_mcp_server / get_mcp_servers 命令，与扩展 API 规则一致，关闭 #11067。
   链接：earendil-works/pi PR #11082

2. **#11074 [CLOSED] fix: 无 trust-requiring 资源时尊重已保存信任决策**
   修复 trust-store 查询逻辑短路问题，关闭 #10947。
   链接：earendil-works/pi PR #11074

3. **#11077 [CLOSED] fix: compaction 期间延迟 sendMessage triggerTurn**
   避免并发 run 导致消息顺序损坏，关闭 #10982。
   链接：earendil-works/pi PR #11077

4. **#11080 [CLOSED] fix: PowerShell 接受 Store 版 app-execution alias**
   修复 PATH 解析对 reparse point 的 `existsSync` 误判，关闭 #10976。
   链接：earendil-works/pi PR #11080

5. **#11079 [CLOSED] feat(durable): 注入 timer 用于 task sleep**
   解决长 backoff/轮询在 Cloudflare Durable Object 等宿主中持有内存计时器的问题，补全可注入时钟体系。
   链接：earendil-works/pi PR #11079

6. **#11039 [CLOSED] docs: 恢复扩展开发指南细节**
   恢复 hook 流程图、事件选择规则、TUI 与 provider 配方，回应 #10297 的文档缺失。
   链接：earendil-works/pi PR #11039

7. **#11081 [CLOSED] fix(tui): 双击选词保留 `~` 前缀**
   小但实用的 TUI 修复，与 #7746 同族的选词边界问题。
   链接：earendil-works/pi PR #11081

8. **#11072 [OPEN] fix: 选择器列表限制窗口高度为 10 行**
   长扩展列表渲染全量导致选中项滚出屏幕，改为居中截断窗口并显示 `(selection/total)`。
   链接：earendil-works/pi PR #11072

9. **#10716 [OPEN] fix(env): pi-env 启动错误包含 stderr**
   daemon 早退时只报 exit code，加入 stderr 输出便于诊断 login shell 配置问题。
   链接：earendil-works/pi PR #10716

10. **#11071 / #11087 相关（Issue 侧）：结构化 provider 错误元数据与 error.cause 透传**
    多方反馈连接错误只显示 "Connection error."，社区对错误信息可观测性的诉求集中爆发（见下方趋势）。
    链接：earendil-works/pi Issue #11071

---

## 📈 功能需求趋势

- **宿主/嵌入集成（RPC & Durable）**：RPC MCP 注册、durable 存储删除会话（#11026）、客户端工具审批（#10852）、Code Mode 自定义输出写入器（#11070）—— Pi 作为可嵌入式 agent 内核的定位需求明显增强。
- **错误可观测性**：#11071、#11087、#10716 等集中要求保留 HTTP 状态码、provider 错误码、`error.cause` 和可重试标记。
- **多模型/多 provider 兼容**：模型切换 thinking 污染（#10995）、扩展 provider 目录过期静默换模型（#10623）、OpenAI 兼容 content array 兼容 flag（#11084）、下线模型仍可选（#11089）。
- **Windows 体验**：PowerShell Store 安装、终端符号泄漏、非 ASCII 编码损坏等 Windows 专项问题占比高。
- **安全与企业管控**：MDM 级系统配置优先级（#10895）、项目信任模型修复（#10947/#11074）。

---

## ⚠️ 开发者关注点

- **数据正确性风险最痛**：非 ASCII 文件静默损坏（#10074）与图片附件静默丢失（#10645）属于“无报错但结果错误”类，重试成本高，社区呼声大。
- **登录/认证受组织策略影响**：ChatGPT Business 的委托访问策略拒绝是近期高频问题，临时方案是 legacy Codex 登录。
- **长会话资源占用**：macOS 高 CPU（#7730）与 compaction 文件列表无限增长（#9945）仍待根治。
- **扩展生态 API 缺口**：扩展无法复用宿主 ModelRuntime（#11076）、skills 名称校验警告不可操作（#10919）、subagent 示例的 execPath 失效（#11078），表明扩展开发者仍是摩擦较多的群体。

---
*数据来源：github.com/earendil-works/pi · 统计窗口：2026-10-17 ~ 2026-10-18*

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# 📰 oh-my-pi 社区动态日报 · 2026-10-18

## 1️⃣ 今日速览

oh-my-pi 今日发布 **v18.12.1 与 v18.12.0** 两个版本，分别修复了 TLS 代理下压缩上传失败和 Cursor 流式对话中断两大问题。社区热度集中在 **多账号/多会话资源调度**（配额、fallback 链、子代理隔离）和 **TUI 稳定性** 上，贡献者 @yuzu-octopus 单日提交多个修复 PR，DeepSeek Search API 引擎出现两个竞合 PR 同日提交。

---

## 2️⃣ 版本发布

### [v18.12.1](https://github.com/can1357/oh-my-pi/releases) — `@oh-my-pi/pi-ai`
- 修复 TLS 检查型代理环境下的请求失败问题：当代理拒绝压缩上传并返回非 JSON 的 400/403/415，或剥离 `Content-Encoding` 导致 Anthropic API 报 "request body is not valid JSON" 时，自动改为**未压缩重发**。

### [v18.12.0](https://github.com/can1357/oh-my-pi/releases) — `@oh-my-pi/pi-agent-core`
- 修复 Cursor 对话中上一轮仍在流式输出时，后台任务完成、延迟诊断或提醒等 follow-up 到达导致 `PROVIDER_ERROR` 的问题（[PR #15821](https://github.com/can1357/oh-my-pi/pull/15821) by @robfeldmann）。

---

## 3️⃣ 社区热点 Issues

| # | Issue | 亮点 |
|---|-------|------|
| 1 | [#3351 无卸载程序](https://github.com/can1357/oh-my-pi/issues/3351) | 长期悬而未决（6月提出，15条评论）。用户批评“没有卸载器始终是个坏味道”，直指企业采用障碍。 |
| 2 | [#16067 pi-natives 40GiB 异常分配崩溃](https://github.com/can1357/oh-my-pi/issues/16067) | 8 个并发子代理 + 788k token 上下文时，tokio 工作线程请求 40GiB 分配并崩溃。**当日报告当日关闭**，响应迅速。重度并发场景的内存安全值得跟踪。 |
| 3 | [#4201 火山引擎 Coding Plan 支持](https://github.com/can1357/oh-my-pi/issues/4201) | 12 条评论，中文社区持续推动国内 Provider 接入。 |
| 4 | [#15452 TUI 近期更新异常](https://github.com/can1357/oh-my-pi/issues/15452) | resume/压缩后 TUI 长时间不渲染，被标记为汇总性 duplicate，反映 TUI 回归问题较多。 |
| 5 | [#15586 grep 破坏 SQLite 锁导致凭据库损坏](https://github.com/can1357/oh-my-pi/issues/15586) | 进程内 ripgrep 关闭文件时释放同进程 SQLite 的 POSIX 锁，可致 `agent.db` WAL 被误删、**凭据存储损坏**。P1 级数据安全问题，报告质量极高。 |
| 6 | [#15229 SDK 子代理结果串会话](https://github.com/can1357/oh-my-pi/issues/15229) | 单 Bun 进程多会话时，子代理 async-result 被写入无关会话并被执行。已有确定性复现，**已修复关闭**。SDK 多租户用户必读。 |
| 7 | [#16050 18.11.3 后子代理启动失败](https://github.com/can1357/oh-my-pi/issues/16050) | 回归问题：`task` 接口强制要求 `seance` 专属字段，普通子代理全部失败。已关闭。升级 18.11.3 的用户注意。 |
| 8 | [#15845 Anthropic OAuth SIGTERM 后失效](https://github.com/can1357/oh-my-py/issues/15845) | 关闭时启动 token 刷新但未持久化轮换后的令牌，5 天内 3 次触发 `invalid_grant` 需手动重登。已修复。 |
| 9 | [#16104 Antigravity 配额耗尽阻塞付费账号](https://github.com/can1357/oh-my-pi/issues/16104) | 免费账号 Gemini 4 配额耗尽后，反而阻止付费账号的 Gemini 3.8 Flash 请求——多账号调度逻辑缺陷。 |
| 10 | [#16127 Termux OAuth 回调失败](https://github.com/can1357/oh-my-pi/issues/16127) | Android 上 `os.networkInterfaces()` 未捕获 `EACCES`，所有 OAuth 流程在启动前即崩。移动端可用性问题的代表。 |

---

## 4️⃣ 重要 PR 进展

| # | PR | 内容 |
|---|-----|------|
| 1 | [#16135 显示子代理实际模型与 fallback](https://github.com/can1357/oh-my-pi/pull/16135) | 将 `resolvedModel`/fallback 信息暴露到 `<task-result>`，父代理无需再解析子会话 JSONL。可观测性提升。 |
| 2 | [#16136 DeepSeek Search 引擎](https://github.com/can1357/oh-my-pi/pull/16136) | 接入 DeepSeek 新 Search API（复用 `DEEPSEEK_API_KEY`）。已合并。与 [#16130](https://github.com/can1357/oh-my-pi/pull/16130) 为同日竞合实现。 |
| 3 | [#15174 后台浏览器截图不再抢占前台](https://github.com/can1357/oh-my-pi/pull/15174) | CDP 截图原地捕获，Chrome 不再跳到前台“吃掉”用户按键。P0 review，已合并。体验口碑 PR。 |
| 4 | [#16110 LSP TypeScript 诊断重复修复](https://github.com/can1357/oh-my-pi/pull/16110) | 复用缓存 clean diagnostics，解决 reload 后诊断风暴。P1。 |
| 5 | [#9009 浏览器 Relay 回收孤儿 debugger 附件](https://github.com/can1357/oh-my-pi/pull/9009) | 修复 relay 进程死亡后 Chrome 调试器附件和 infobar 永久残留。8月提交至今仍在迭代，P1。 |
| 6 | [#15153 `/update` 就地更新命令](https://github.com/can1357/oh-my-pi/pull/15153) | 长期呼声最高的功能之一：单键 y/n 确认的就地升级。 |
| 7 | [#15751 损坏 history.db 自动抢救](https://github.com/can1357/oh-my-pi/issues/15751) | 历史库损坏时不再崩溃，复用隔离路径恢复。维护者亲自重构缩至 +270 行，已合并。 |
| 8 | [#16129 子代理切换回主会话花屏修复](https://github.com/can1357/oh-my-pi/pull/16129) | 根因是 `renderInitialMessages` 并发调用。改为串行 + 丢弃过期重建。当日提交当日合并。 |
| 9 | [#16029 `auto:<floor>-<ceiling>` 思考区间](https://github.com/can1357/oh-my-pi/pull/16029) | 为 GPT-6 Luna、Claude Haiku 5.5 等轻量模型设定思考力度上下限，控制成本与质量平衡。 |
| 10 | [#16133 `browser.close({all:true})` 作用域隔离](https://github.com/can1357/oh-my-pi/pull/16133) | 修复子代理清理自己标签页时误关全进程共享标签。多代理协作场景关键修复。 |

其他值得注意：[#15753 扩展直接控制内置会话模式](https://github.com/can1357/oh-my-pi/pull/15753)、[#15175 macOS 后台 App 无障碍选中文本](https://github.com/can1357/oh-my-pi/pull/15175)。

---

## 5️⃣ 功能需求趋势

1. **国产/新模型 Provider 接入**：火山引擎 Coding Plan（#4201）、GLM-5.2（#2446）、DeepSeek Search（双 PR），中文社区推动力显著。
2. **多账号与配额智能调度**：Antigravity 配额阻塞（#16104）、advisor fallback 链继承错误（#15101）——用户期望 provider 路由更透明、更智能。
3. **浏览器/计算机控制不打扰用户**：后台截图、无障碍操作、takeover 语义（#15174/#15175/#15173）形成一条完整的产品线，核心诉求是“agent 工作时用户不被打断”。
4. **可观测性与成本控制**：子代理模型可见性（#16135）、thinking 区间（#16029）、状态栏 token 分解（#9314）。
5. **多代理并发稳定性**：40GiB 崩溃（#16067）、结果串会话（#15229）、标签页作用域（#16133）表明重并发子代理是当前质量攻坚重点。

---

## 6️⃣ 开发者关注点

- **升级回归频发**：18.11.3 子代理启动失败（#16050）、TUI 回归（#15452）说明发版节奏快但回归测试覆盖不足，升级前建议关注 release notes 中的 issue 链接。
- **代理/企业网络环境**：v18.12.1 专门修复 TLS 检查代理问题，叠加 SSH ControlPath（#15974）、OAuth 回调（#16127）等，企业受限网络是痛点富矿。
- **数据安全与凭据完整性**：SQLite 锁被 grep 破坏（#15586）、OAuth token 丢失（#15845）、history.db 损坏（#15751）——本地状态管理的健壮性是信任基石。
- **反馈报告质量高**：多篇 issue 附根因分析与文档引用（如 SQLite howtocorrupt），社区技术素养强，维护者响应快（多个 P1/P2 当日关闭）。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

# DeepSeek Harness 社区动态日报
**日期：2026-10-18** | 数据来源：[deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)

---

## 1. 今日速览

今日项目迎来 `v0.2.1` 系列两个候选版本发布：`dsh-v0.2.1-rc.2` 完成了对 DeepSeek-V4.1-Flash-1017 新模型的适配，并接入 DeepSeek Search 与 Fetch API；`dsh-v0.2.1-rc.1` 则聚焦插件生态，带来自定义插件索引源、Agent 创造插件等重磅功能。过去 24 小时内暂无 Issue 和 PR 更新，社区讨论热度平稳。

---

## 2. 版本发布

### 📦 dsh-v0.2.1-rc.2
[Release 链接](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.2)

**新增功能：**
- 适配 DeepSeek-V4.1-Flash-1017 上线（@LegGasai）— 第一时间支持官方最新模型
- 适配 DeepSeek Search 与 Fetch API，可在网页搜索设置中开启（@yudshj, @LegGasai）— 为 Agent 提供原生联网搜索与网页抓取能力

### 📦 dsh-v0.2.1-rc.1
[Release 链接](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.1)

作为 `0.2.1` 系列首个候选版本，汇总自 `v0.2.0-rc.2` 以来的主要变更：

**新增功能：**
- 允许用户从“自定义插件索引源”发现和安装插件（@turtle1999）
- 插件管理页新增「让 Agent 创建插件」入口，可保留草稿进入创造模式（@ZiyaZhang）
- 支持插件启用、停用、卸载等完整生命周期管理

---

## 3. 社区热点 Issues

> ⚠️ 过去 24 小时内无 Issue 更新，本节今日暂无可报道内容。

---

## 4. 重要 PR 进展

> ⚠️ 过去 24 小时内无 PR 更新。不过本期两个 Release 中合入了以下值得关注的贡献：
> - DeepSeek-V4.1-Flash-1017 模型适配（@LegGasai）
> - Search / Fetch API 集成（@yudshj, @LegGasai）
> - 自定义插件索引源（@turtle1999）
> - Agent 插件创造模式（@ZiyaZhang）

---

## 5. 功能需求趋势

从近期 Release 方向可观察到两条主线：

1. **插件生态建设**：自定义索引源、Agent 创建插件、完整生命周期管理，表明项目正加速构建开放式插件体系，降低第三方扩展门槛。
2. **模型与能力同步**：快速跟进官方新模型（V4.1-Flash-1017）与原生搜索/抓取 API，反映出社区对“开箱即用支持最新 DeepSeek 能力”的高期待。

---

## 6. 开发者关注点

- **新模型适配时效性**：每次官方模型上线后，社区期望 Harness 能快速跟进，建议关注 rc 版本尝鲜。
- **插件分发与信任机制**：自定义索引源的引入意味着插件来源多元化，插件的审核、安全与版本兼容性可能成为后续讨论焦点。
- **联网能力默认开启策略**：Search / Fetch API 目前需手动在网页搜索设置中开启，易用性与安全性之间的平衡值得关注。

---

*本日报基于过去 24 小时 GitHub 数据自动整理，Issue/PR 板块今日无更新数据。*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*