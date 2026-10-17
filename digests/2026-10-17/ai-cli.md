# AI CLI 工具社区动态日报 2026-10-17

> 生成时间: 2026-10-17 03:30 UTC | 覆盖工具: 11 个

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
**数据日期：2026-10-17**

---

## 1. 生态全景

AI CLI 工具已进入“多 agent 编排 + 桌面端扩张 + 无人值守自动化”的深水区：头部工具（Claude Code、Codex）在快速堆功能的同时正为 Windows 桌面端回归和成本/配额可信度付出代价。中期工具（Gemini CLI、OpenCode、Qwen Code）集中攻坚 subagent 可靠性与“静默失败”问题——无错误即最坏的错误成为社区共识性焦虑。垂直与新兴工具（Pi、oh-my-pi、DeepSeek TUI、Kimi CLI）则靠 Windows 一等公民化、性能优化和东亚用户本地化细分切入。整体看，竞争焦点已从“能不能用”转向“长会话可靠性、token 成本可控性与自动化场景的权限设计”。

---

## 2. 各工具活跃度对比

| 工具 | 热点 Issues 提及数 | 重要 PR 数 | Release | 今日核心主题 |
|---|---|---|---|---|
| **Claude Code** | 10（+多条关联） | 1 | v2.1.302 | macOS 睡眠唤醒 token 暴涨（资费级）、Windows 桌面回归 |
| **OpenAI Codex** | 10 | 10 合入 + 3 在途 | 2 个 alpha | Windows 问题簇、配额暴跌 67% 证据、MCP/会话修复密集合入 |
| **Gemini CLI** | 10 | 10 | nightly v0.66.0 | Subagent 误报成功/挂起（多个 P1）、AST 代码理解探索 |
| **Copilot CLI** | 10 | 0 | 3 个版本 | 新回归（权限拒绝、rewind 备份敏感文件）、遥测开关落地 |
| **Qwen Code** | 10 | 10 | v0.25.3-preview | CI 基础设施故障、消息无限重投（1444 次/90 秒） |
| **OpenCode** | 10 | 10 | v1.19.3 | 高危安全缺陷（`--` 绕过权限）、provider 兼容性回归 |
| **DeepSeek TUI** | 10（+3 关闭） | 10 | 无（0.10.2 在途） | 会话恢复/长会话数据安全、token 压缩方案 |
| **Pi** | 10 | 10 | 无 | Windows 一等公民化、压缩输出上限根治 |
| **oh-my-pi** | 10（+4 快速关闭） | 10 | 2 个版本 | 工具静默失败、性能优化（单贡献者 12 PR） |
| **Kimi CLI** | 0 | 2 | 无 | CJK IME 修复、Windows 编码 |
| **DeepSeek Harness** | 0 | 0 | alpha.5 | 版本消化期 |

**观察**：Codex 今日合入 PR 最多（10 条），还债节奏最猛；Claude Code PR 活动最弱（仅 1 条），与其高热 Issue 存量形成反差；Copilot CLI 无 PR 记录但 release 节奏最快（3 版/日）。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **Subagent/多 agent 可靠性** | Gemini CLI（误报 GOAL #22323、挂起 #21409）、Qwen Code（并行批次静默失败 #14410）、oh-my-pi（恢复后不发布结果 #15948）、DeepSeek TUI（handoff 会话无法恢复 #6954） | 子代理的失败可见性、挂起超时、结果发布链路是跨工具共性短板 |
| **Token/上下文成本可控** | Claude Code（睡眠重发 81 次请求、缓存 TTL 退化）、Gemini CLI（Tactful Extraction #19561）、DeepSeek TUI（fastctx #6991）、oh-my-pi（提示词继承过大 #4991） | 上下文膨胀与成本失控已成用户最强焦虑 |
| **长会话持久化与恢复** | DeepSeek TUI（8 MiB 上限、供应商删除锁死会话）、OpenCode（V2 迁移会话消失 #49827）、Pi（abort 后遗留 tool call #9986） | resume/fork/journal 的数据完整性是信任基石 |
| **Windows/桌面端质量** | Claude Code（Routines 隐藏）、Codex（约 60% 热点 Issue 属 Windows）、Copilot CLI（Git Bash）、Pi（#7547 官方调研）、Kimi CLI（GBK 编码） | Windows 是全行业共同的质量洼地 |
| **无人值守场景的权限/超时设计** | Claude Code（定时任务权限无超时 #85820、远程控制权限不渲染 #35637）、DeepSeek TUI（output-limit 需手动 continue #6990）、OpenCode（流中断合成消息污染 #56295） | 自动化场景缺权限超时、降级与故障通报机制 |
| **MCP 集成健壮性** | Codex（取消语义、`_meta` 元数据）、Copilot CLI（OAuth 回退 #3100）、Qwen Code/oh-my-pi（故障感知） | MCP 认证回退与故障可见性 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 全栈 agent + 桌面 Cowork + 定时任务 | 付费重度专业开发者 | 闭源客户端，模型-工具深度耦合，auto mode/压缩服务端化 |
| **Codex** | 桌面端自动化（Computer Use）、多智能体 dot、多环境 | ChatGPT 订阅用户 | Rust 核心 + alpha 高频通道，引擎层系统性还债 |
| **Gemini CLI** | Subagent 体系、AST 代码理解、沙箱安全设计 | 开发者 + 研究型社区（大量设计提案） | 开源 TS，社区驱动探索（tilth/ast-grep 评估） |
| **Copilot CLI** | 企业集成（Entra/Enterprise）、沙箱代理、BYOK | GitHub 企业生态用户 | 快速 release 交付，重策略/遥测可控 |
| **OpenCode** | 推理模型一等公民、多 provider、session goal/todo | 开源 + 第三方/本地模型用户 | 开放 provider 生态，V1/V2 双轨演进 |
| **Qwen Code** | 多 agent roadmap、CI 门禁体系、Web Shell | 国内生态 + SDK 消费方 | fork 自 Gemini 系，工程化程度高（FG 故障门系列） |
| **Pi / oh-my-pi** | 终端体验极致打磨、性能、扩展/advisor 生态 | 终端重度用户、本地模型用户 | 轻量内核 + 扩展协议，贡献者驱动 |
| **DeepSeek TUI/Harness、Kimi CLI** | 国产模型深度适配、i18n | 成本敏感 + 东亚用户 | 聚焦编码兼容性与本地化细节 |

---

## 5. 社区热度与成熟度

- **第一梯队（高热度 + 高成熟度）**：Claude Code（单 Issue 85 👍，但老 Issue 数月未解，信任摩擦累积）；Codex（Issue 密度最高，社区自行日志取证，挫败感与修复速度并存）。
- **快速迭代期**：Codex（双 alpha + 10 PR/日）、Copilot CLI（3 release/日，但回归频发）、oh-my-pi（单贡献者一周 12 个 perf PR，响应极快，1-2 天关闭 P2）。
- **系统性建设期**：Qwen Code（CI 分层门禁重构）、Gemini CLI（subagent Sprint + 大量设计型 Issue，社区研究氛围最浓）。
- **垂直深耕期**：Pi（Windows 投入最坚决，官方调研驱动）、OpenCode（安全审计与 provider 兼容补课）、DeepSeek TUI（会话数据生命周期攻坚）。
- **早期/低活跃**：Kimi CLI（2 PR 一个月未合并）、DeepSeek Harness（纯版本消化期）。

---

## 6. 值得关注的趋势信号

1. **“静默失败”成为行业公敌**：Gemini subagent 误报成功、Qwen 消息静默截断、oh-my-pi find 只读 375 字节、Pi 图片静默丢弃——agent 可观测性与失败显式化是下一步竞争的关键差异点。
2. **计费/配额可信度是新的资费级风险面**：Claude 睡眠重发、Codex 38 秒跌 67%、OpenCode 误报余额不足——三家头部同日出现付费信任问题，建议用户开启用量监控并避免夜间无人值守挂机。
3. **权限模型安全审计需求上升**：OpenCode `--` 绕过、rewind 备份敏感文件、合成消息污染上下文——权限检查需要独立的审计日志（OpenCode #56271 方向值得全行业借鉴）。
4. **Windows 是份额争夺的胜负手**：从 Pi 官方调研到 Codex 60% Issue 集中于 Windows，谁先补齐 IME/编码/终端协议/沙箱兼容，谁拿到被忽视的增量用户。
5. **上下文工程（context engineering）显学化**：AST 感知读取、fastctx 压缩、压缩输出上限、缓存 TTL——从“塞更多上下文”转向“外科手术式最小读取 + 精准缓存”。
6. **多 agent 编排从功能竞赛转向可靠性竞赛**：各家 subagent 框架已就绪，胜负取决于挂起超时、结果发布、失败重试等工程细节。
7. **对开发者的实操建议**：升级前在非关键环境验证（本周 Copilot/OpenCode 均有新回归）；生产环境暂缓 alpha 通道；自建安全 hook 时注意跨语言误报（Claude #57888 案例）。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

*数据截止：2026-10-17 | 来源：anthropics/skills*

---

## 一、热门 Skills 排行（PR 动态）

> 注：本期数据中 PR 评论数缺失，以下按更新活跃度与技术影响力综合排序。

| # | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | **mcp-builder 修复** — [PR #1742](https://github.com/anthropics/skills/pull/1742) | 适配 `mcp>=2.0` 的 `streamable_http_client` 重命名与自定义 HTTP 头 | MCP SDK v2 破坏性变更导致连接失败，关联 Issue [#1390](https://github.com/anthropics/skills/issues/1390)（评估脚本对真实 MCP 服务器全打 0 分） | OPEN |
| 2 | **skill-creator 触发评估加固** — [PR #1298](https://github.com/anthropics/skills/pull/1298) | 隔离触发评估、修复 Windows `select()` 失败 | 关联 #556（`claude -p` 触发率 0%）与 #1383（六项可复现问题），是元工具类最集中的痛点 | OPEN |
| 3 | **skill-creator 安全加固** — [PR #1961](https://github.com/anthropics/skills/pull/1961) | 修复 eval viewer 的脚本逃逸、DNS rebinding、XSS | 与 Issue [#1394](https://github.com/anthropics/skills/issues/1394)（display-path XSS）呼应，社区对模型生成内容的本地渲染安全高度关注 | OPEN |
| 4 | **harness SDD 套件** — [PR #2039](https://github.com/anthropics/skills/pull/2039) / [#2040](https://github.com/anthropics/skills/pull/2040) | 规范驱动开发（spec→dispatch→对抗性审查→架构决策）三件套 + architecture-advisor | SDD 方法论进入 Skills 生态，实战项目验证，为 10 月最新提交 | OPEN |
| 5 | **notion-spec-to-implementation** — [PR #1245](https://github.com/anthropics/skills/pull/1245) | 将产品/技术 Spec 转为 Notion 可执行任务（含验收标准与进度追踪） | 存活近 4.5 个月且持续更新（至 10-15），说明维护者投入度高 | OPEN |
| 6 | **md2video-audio** — [PR #1703](https://github.com/anthropics/skills/pull/1703) | Markdown 一键编译为带拟真人配音的 MP4 视频（Marp + TTS） | 零成本内容生产方向，社区兴趣点 | OPEN |
| 7 | **skill-quality/security-analyzer** — [PR #83](https://github.com/anthropics/skills/pull/83) | 五维度 Skill 质量评估 + 安全扫描的元 Skills | “用 Skill 审 Skill”的元工具方向，与生态安全议题（#492）共振 | OPEN |
| 8 | **document-typography** — [PR #514](https://github.com/anthropics/skills/pull/514) | 修复 AI 生成文档的孤行、寡段、编号错位 | “AI 生成文档排版”是用户普遍但未被言明的痛点 | OPEN |

---

## 二、社区需求趋势（来自 Issues）

1. **安全与信任边界（最热）**：[#492](https://github.com/anthropics/skills/issues/492)（46 条评论）——社区 Skill 冒用 `anthropic/` 命名空间构成信任滥用，呼声最高；配套需求是 Skill 签名/来源验证与质量·安全分析工具（PR #83）。
2. **组织级分发与共享**：[#228](https://github.com/anthropics/skills/issues/228)——期待 Claude.ai 原生组织内 Skill 库，取代 Slack 传 `.skill` 文件的手工流程。
3. **Skill 评估与元工程可靠性**：[#556](https://github.com/anthropics/skills/issues/556)、[#1383](https://github.com/anthropics/skills/issues/1383)、[#1390](https://github.com/anthropics/skills/issues/1390)——skill-creator 与 mcp-builder 的评估框架在真实环境大面积失效，社区要求可信的触发率/质量基准。
4. **上下文效率**：[#1487](https://github.com/anthropics/skills/issues/1487)——`claude-api` 单次注入 ~156k token 打爆上下文；[#1329](https://github.com/anthropics/skills/issues/1329) 提出 compact-memory（符号化压缩 agent 状态），轻量化 Skill 是明确方向。
5. **文档处理深度增强**：docx 系列缺陷（[#2018](https://github.com/anthropics/skills/issues/2018) merge_runs 写坏 XML）+ ODT 支持（[PR #486](https://github.com/anthropics/skills/pull/486)）+ 排版质量控制（#514），办公文档仍是最大使用场景。
6. **AI 质量门禁/治理流程**：[#1385](https://github.com/anthropics/skills/issues/1385)（校准→对抗审查→交付验证三重门）、[#412](https://github.com/anthropics/skills/issues/412)（agent-governance）——把开发流程规范固化为 Skill 的诉求上升。

---

## 三、高潜力待合并 Skills（活跃且未合并）

| PR | 理由 |
|---|---|
| [#1245](https://github.com/anthropics/skills/pull/1245) notion-spec-to-implementation | 6 月创建、10 月中仍在更新，长周期维护信号强 |
| [#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder 修复 | 关联正式 Issue #1668，修复 MCP v2 兼容是刚需 |
| [#1792](https://github.com/anthropics/skills/pull/1792) docx LibreOffice 超时报错修复 | 小而精准，配合活跃的 docx 缺陷报告链 |
| [#2039](https://github.com/anthropics/skills/pull/2039) / [#2040](https://github.com/anthropics/skills/pull/2040) harness SDD 套件 | 最新提交、方法论完整、MIT 实战验证 |
| [#1997](https://github.com/anthropics/skills/pull/1997) skill-creator YAML frontmatter 解析修复 | 同作者（BichengWang）连发多个精准修复（含 #2004），贡献质量高 |
| [#1961](https://github.com/anthropics/skills/pull/1961) eval viewer 安全加固 | 直接回应已确认的 XSS Issue #1394 |

---

## 四、生态洞察

**当前社区最集中的诉求是：建立 Skills 生态的“信任与可靠性基础设施”——命名空间安全治理、可信的评估工具链、以及上下文高效的轻量 Skill，其热度已超过新功能 Skill 本身。**

---

# Claude Code 社区动态日报 · 2026-10-17

## 1. 今日速览

Claude Code 发布 **v2.1.302**，新增 auto mode 分类器模型配置项及 `/config` 中的空闲压缩（Idle compaction）开关。社区方面，**Desktop 2.37337.1 更新导致 Windows 端 Routines 侧边栏强制隐藏**成为今日最集中的新 Bug 报告点；此外两条关于 **macOS 睡眠唤醒引发后台 agent 全量上下文重发、造成巨额 token 消耗**的资费类 Issue 值得高度关注。

## 2. 版本发布

### v2.1.302（[Release](https://github.com/anthropics/claude-code/releases)）
- 新增环境变量 `CLAUDE_CODE_AUTO_MODE_MODEL`，可指定客户端 auto mode 分类器使用的模型（不影响服务端 auto mode 的模型选择）。
- `/config` 新增 "Idle compaction" 配置行，可开启/关闭空闲压缩，并在空闲压缩后显示相应通知。

## 3. 社区热点 Issues

**1. [#1669](https://github.com/anthropics/claude-code/issues/1669) — Claude Code 频繁丢失当前工作目录**
老牌高热 Issue（53 评论 / 85 👍，挂 `oncall` 标签），模型常误判所在目录导致命令失败，用户认为甚至有误操作风险。持续数月未解，是社区信任度最高的痛点之一。

**2. [#102150](https://github.com/anthropics/claude-code/issues/102150) / [#102142](https://github.com/anthropics/claude-code/issues/102142) — Desktop 2.37337.1 强制隐藏 Routines 侧边栏（Windows 回归）**
10-14 桌面端更新后，Windows Store/MSIX 版 Routines 分区每次启动都被重置为隐藏，且无 UI 开关恢复。两条 Issue 合计 27 条评论，是当前最活跃的新回归。

**3. [#102597](https://github.com/anthropics/claude-code/issues/102597) — macOS 合盖后后台 agent 在每次 DarkWake 重发全量上下文**
夜间 6.5 小时内发送 81 次请求（单次 400–580K tokens），睡眠期间持续消耗额度。直接影响付费用户成本。

**4. [#102780](https://github.com/anthropics/claude-code/issues/102780) — 睡眠中断响应触发无上限、无缓存的全量上下文再生循环**
与上条同源：macOS 每 ~15 分钟休眠切断响应，触发后台 agent 不受控的上下文重建。两条 Issue 共同指向**电源管理与请求重试机制的系统性缺陷**。

**5. [#101685](https://github.com/anthropics/claude-code/issues/101685) — 交互式会话提示缓存退化为 5 分钟 TTL（应为 1 小时）**
自 10-12 起交互会话主对话缓存只写 5 分钟 TTL，headless `claude -p` 不受影响，直接影响缓存命中率和成本。

**6. [#35637](https://github.com/anthropics/claude-code/issues/35637) — Remote Control 移动端不渲染权限提示**
移动端会话看似冻结，实际权限提示只在桌面终端等待，远程控制体验的关键阻断点（25 评论）。

**7. [#34437](https://github.com/anthropics/claude-code/issues/34437) — Git worktree 应与主仓库共享项目目录**
每个 worktree 在 `~/.claude/projects/` 下生成独立目录，割裂了对话历史、auto-memory 和项目配置（47 👍），重度 worktree 用户的长期诉求。

**8. [#64968](https://github.com/anthropics/claude-code/issues/64968) — VS Code 聊天面板无语法高亮**
代码块渲染为纯等宽文本，多次上报被关闭后重开（39 👍），反映 VS Code 扩展体验与原生面板差距。

**9. [#97504](https://github.com/anthropics/claude-code/issues/97504) — 面向用户的消息被输出为隐藏 thinking 块**
含工具调用的回复中间歇性出现，用户永远看不到该消息。属于模型输出格式层面的罕见但严重的交互丢失。

**10. [#85820](https://github.com/anthropics/claude-code/issues/85820) — 定时任务会话权限请求无超时，卡死任务队列数天**
无人值守 scheduled task 撞上权限请求后无限等待并占用执行槽，阻塞后续所有 cron 触发。自动化场景的关键可靠性问题。

## 4. 重要 PR 进展

过去 24 小时仅 1 条 PR 更新：

- **[#57888](https://github.com/anthropics/claude-code/pull/57888)（已关闭）— 将 `child_process_exec` 安全规则限定到 JS/TS 文件，修复 Python 误报**
  原 hook 用子串 `"exec("` 匹配，会误命中 Python 的 `asyncio.create_subprocess_exec(`。该 PR 提出按文件类型收窄规则范围。关闭状态或因上游自行处理，但对自定义安全 hook 的编写者有参考价值。

## 5. 功能需求趋势

1. **桌面端 / Cowork 体验**：多文件夹跨仓库工作区（[#56853](https://github.com/anthropics/claude-code/issues/56853)）、本地状态推送（[#92288](https://github.com/anthropics/claude-code/issues/92288)）、桌面/浏览器会话同步（[#102909](https://github.com/anthropics/claude-code/issues/102909)）——Desktop Code tab 生态需求集中增长。
2. **成本与缓存控制**：缓存 TTL 退化（#101685）、睡眠期间 token 浪费（#102597/#102780）表明用户对**上下文成本可控性**的诉求强烈。
3. **IDE 集成质量**：VS Code 语法高亮（#64968）、PDF 自定义编辑器旁路（[#81482](https://github.com/anthropics/claude-code/issues/81482)）。
4. **自动化与无人值守可靠性**：定时任务权限超时（#85820）、hooks 文件系统级触发（[#87356](https://github.com/anthropics/claude-code/issues/87356)）。
5. **编辑器细节**：vim 模式光标形状（[#32469](https://github.com/anthropics/claude-code/issues/32469)，55 👍）持续高票。

## 6. 开发者关注点

- **成本失控风险**：后台 agent + macOS 睡眠唤醒 = 无缓存全量重发，是本周最需官方回应的资费级 Bug；建议夜间挂机用户关注 #102597 / #102780 的修复进展。
- **Windows 桌面端回归频发**：Routines 隐藏（#102150/#102142）、statusLine 取消后 `taskkill /T` 进程堆积（[#102907](https://github.com/anthropics/claude-code/issues/102907)）、MCP 服务器静默失效（[#102910](https://github.com/anthropics/claude-code/issues/102910)）。
- **无人值守场景的权限与超时设计**：权限提示在定时任务、远程控制等场景缺少超时/降级机制（#85820、#35637）。
- **工具行为的“暗改”副作用**：Bash 内置 `grep` 因 `.gitignore` 通配规则误跳过未被 git 忽略的文件（[#102875](https://github.com/anthropics/claude-code/issues/102875)），提醒依赖 shell snapshot 工具链的用户注意搜索结果完整性。
- **模型行为可预期性**：消息进入 thinking 块（#97504）、安全护栏误拦用户明确请求的 MCP 读取（[#102884](https://github.com/anthropics/claude-code/issues/102884)）、任务范围蔓延（[#102889](https://github.com/anthropics/claude-code/issues/102889)）——模型侧行为类反馈呈上升趋势。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-10-17 | 数据来源：github.com/openai/codex**

---

## 📌 今日速览

Codex 连续发布两个 alpha 版本（0.164.0-alpha.1/2），版本迭代节奏加快。社区侧，Windows 平台问题持续发酵——“workspace settings 阻塞新会话”和“Computer Use 无法读取浏览器状态”成为讨论最热的两大 Bug。开发团队今天合入了大量修复 PR，涵盖 MCP 体验、TUI 稳定性、发布流程和内存优化等多个方向。

---

## 🚀 版本发布

- **[rust-v0.164.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.2)** — alpha 迭代
- **[rust-v0.164.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.1)** — alpha 迭代

两个版本间隔发布，无详细 changelog，属于高频 alpha 预发布通道的常规推进。

---

## 🔥 社区热点 Issues

**1. [#51917](https://github.com/openai/codex/issues/51917) — Windows 更新后 workspace settings 加载失败仍阻塞新会话**
最严重的可用性问题之一。原报告者 10-11 追踪确认在最新版本 26.1007.21434 上依然复现。24 条评论、7 个 👍，与 #52874、#51691、#53964 等多个同类 issue 共同指向 Windows 桌面端的系统性配置加载故障。

**2. [#51524](https://github.com/openai/codex/issues/51524) — Windows Computer Use 在 get_window_state 处停止，无法识别浏览器 URL**
10-06 起功能完全失效，影响 Chrome 和 Edge。24 条评论说明受影响面较广，Computer Use 是 Codex 桌面端的核心能力，此回归值得关注。

**3. [#54677](https://github.com/openai/codex/issues/54677) — 桌面端周配额 38 秒内暴跌 67 个百分点**
用户从本地日志中提取出硬证据：剩余额度 38 秒内从 77% 跌至 10%。涉及计费/配额统计准确性，结合 #54176（明明有余量却提示无额度），配额系统可信度是当前敏感话题。

**4. [#38128](https://github.com/openai/codex/issues/38128) — Remote Control 阻止 GrapheneOS 上的 Android 设备配对**
存在两个月的长期 issue，23 条评论、12 个 👍。未 root 的官方 GrapheneOS 上 enrollment 被安全检查误拦截，反映安全策略过于保守的问题。

**5. [#53891](https://github.com/openai/codex/issues/53891) — macOS 更新检查因 appcast 端点 HTTP 520 失败**
14 条评论、9 个 👍，服务端问题而非客户端 bug，可能影响大量 macOS 用户的更新通道。

**6. [#50077](https://github.com/openai/codex/issues/50077) / [#50704](https://github.com/openai/codex/issues/50704) — dot 无法读取本地会话线程（macOS/Windows）**
两个平台均报告 cloud reader 拒绝本地 chat ID，报 `unsupported placement format version`，而原生读取成功。涉及 dot 多智能体协作与本地线程的兼容性问题，同一根因的两个表现。

**7. [#14411](https://github.com/openai/codex/issues/14411) — Windows 活跃线程被意外重定向到“新会话”页**
存在 7 个月的老问题，与 #53901、#53570、#52491、#17494 共同构成一个跨平台的“会话意外跳转”问题簇，macOS 上已有用户定位到隐藏 Page prewarm 导航的可能根因。

**8. [#44917](https://github.com/openai/codex/issues/44917) — Linux 上 app-server 泄漏 node 辅助进程，耗尽 io_uring 预算**
每个会话泄漏一对进程，最终耗尽 per-user io_uring 限制。Linux 用户的典型资源泄漏问题，长期运行环境受损严重。

**9. [#54322](https://github.com/openai/codex/issues/54322) / [#53985](https://github.com/openai/codex/issues/53985) — Windows 桌面端“无头启动”：后台进程存在但无窗口**
Store 更新及全新重装后仍复现，9 月初更新引入，多个 issue 交叉验证，属 Windows 渠道的高严重性回归。

**10. [#48582](https://github.com/openai/codex/issues/48582) — 请求添加 `codex usage` CLI 命令查询剩余配额**
功能需求类。与配额类 bug 呼应——用户迫切需要在终端直接查看用量，而不用打开网页。实现成本低、价值高。

---

## 🔧 重要 PR 进展

**1. [#54766](https://github.com/openai/codex/pull/54766) — TUI 未知配置字段遵循共享 strict-config 策略**
移除 keymap/profile 设置上的 `deny_unknown_fields`，未开启严格校验时未知字段不再导致反序列化失败，改善配置兼容性。

**2. [#54763](https://github.com/openai/codex/pull/54763) — 停止对托管守护进程应用 macOS 后台优先级**
移除 `taskpolicy -b` 包装，app-server 和 updater 不再被降级为后台优先级，可能改善 macOS 端响应性。

**3. [#54761](https://github.com/openai/codex/pull/54761) — 升级 `zip` 至 9.0.0 并更新插件归档解压**
插件归档保留可执行权限但剥离 setuid/setgid/sticky 位——安全加固。

**4. [#54754](https://github.com/openai/codex/pull/54754) — 降低工具 JSON Schema 内存开销**
Schema 不可变集合收紧容量、内联可选 map，直接降低运行时内存占用。

**5. [#54674](https://github.com/openai/codex/pull/54674) + [#54741](https://github.com/openai/codex/pull/54741) — 新增多环境间文件复制工具（feature flag 门控）**
`codex-multi-env-copy-file` 扩展支持跨环境复制文件而不将内容载入模型上下文，配合 #50704/#50077 的多环境场景，值得关注。

**6. [#54686](https://github.com/openai/codex/pull/54686) — 保留 MCP tool-list 的 `_meta` 元数据**
工具发现响应的元数据不再被丢弃，改善 server-status 客户端的可观测性。

**7. [#54681](https://github.com/openai/codex/pull/54681) — TUI 会话选择绑定其后端**
Resume/fork 不再仅凭 thread ID 操作，防止连接替换后误操作另一个后端的会话——直击会话串扰类问题。

**8. [#54679](https://github.com/openai/codex/pull/54679) — 区分 MCP 审批取消原因**
区分用户主动取消、请求中断和 exec 模式自动取消，错误信息不再一律报"user cancelled"。

**9. [#54716](https://github.com/openai/codex/pull/54716) + [#54724](https://github.com/openai/codex/pull/54724) — 发布流程修复**
预发布保持草稿直至资产上传完成，并确保发布时正确发出 `prereleased` 事件，避免暴露不完整版本。

**10. [#54708](https://github.com/openai/codex/pull/54708) — Windows 卸载时尊重 home 删除偏好**
卸载前读取 `desktop.uninstall_codex_home` 配置，默认保留用户数据——避免卸载误删配置的重要保护。

**仍在进行中（OPEN）**：[#30866](https://github.com/openai/codex/pull/30866) 线程恢复时对账历史记录、[#31591](https://github.com/openai/codex/pull/31591) Codex Apps 并行工具调用、[#31657](https://github.com/openai/codex/pull/31657) 文件上传瞬时失败重试。

---

## 📈 功能需求趋势

1. **配额透明化**：`codex usage` CLI 命令请求 + 配额计量 bug 频发，用户强烈要求用量可见、可查、可信。
2. **多智能体（dot）与本地线程互操作**：dot 读取/委托本地会话的失败案例集中出现，多智能体与本地状态的一致性是新前线。
3. **Computer Use 稳定性**：浏览器状态读取、app-server 泄漏等问题表明桌面自动化仍是质量短板。
4. **新模型覆盖**：#54293 反映 GPT-6.1 Sol 在 ChatGPT Work 可用但 Codex 桌面模型选择器缺失，模型同步发布是持续诉求。
5. **多环境（multi-env）能力**：跨环境文件复制工具已在开发中，环境管理（编辑/删除失败如 #50251）也是痛点。

---

## ⚠️ 开发者关注点

- **Windows 是问题重灾区**：今日热点 issue 中约 60% 与 Windows 桌面端相关，集中在 workspace settings 加载、无头启动、会话跳转三大簇，且多数跨版本复现。
- **配额/计量可信度危机**：38 秒暴跌 67 个点、“有余量却报无额度”，涉及付费权益，情绪风险高。
- **长尾老问题未解**：#14411（7 个月）、#38128（2 个月）等持续活跃，用户在 issue 内自行交叉引用和日志取证，社区已有明显挫败感。
- **积极信号**：今日合入 PR 数量多、粒度细（MCP 取消语义、会话后端绑定、内存优化），显示核心引擎层面在系统性还债；建议 Windows 用户关注 alpha 通道验证修复是否落地。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-10-17 | 数据来源：google-gemini/gemini-cli**

---

## 一、今日速览

今日发布 v0.66.0-nightly 版本，新增了关于 Gemini CLI 尚未针对 Gemini 4 优化的横幅提示。社区讨论焦点仍集中在 **Subagent 子代理的稳定性与可靠性**上——多个 P1 级 bug（挂起、误报成功、上下文丢失）持续引发关注。PR 方面，一批修复核心问题的贡献（web 搜索超时、终端回滚丢失、IDE 重连等）被合并或进入评审。

---

## 二、版本发布

### v0.66.0-nightly.20261017.ged96faedf
**链接：** [Release 页面](https://github.com/google-gemini/gemini-cli/releases/tag/v0.66.0-nightly.20261017.ged96faedf)

- 新增横幅提示：Gemini CLI 尚未针对 Gemini 4 优化（[PR #29774](https://github.com/google-gemini/gemini-cli/pull/29774)）
- 更新 README，移除过时内容（[PR #29775](https://github.com/google-gemini/gemini-cli/pull/29775)）
- CI 修复若干

---

## 三、社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 触发 MAX_TURNS 后误报 GOAL 成功**（P1）
   子代理在达到轮次上限、未完成任何分析时仍报告 `success`/`GOAL`，掩盖了中断事实。这是 agent 可观测性的核心缺陷，13 条评论反映影响面广。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent 无限挂起**（P1，👍 8）
   通用代理在简单操作（如创建文件夹）时永久挂起，用户需等待 1 小时以上。8 个 👍 说明是高频痛点。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 利用模型 bash 原生能力的零依赖 OS 沙箱 + 执行后意图路由**（P2）
   深度设计提案：Gemini 3 模型天然擅长链式 POSIX 工具操作，社区探索在安全与体验间取得平衡。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST 感知的文件读取、搜索与代码库映射评估**（P2，Epic）
   评估 AST 工具（tilth、glyph、ast-grep）能否减少读取错位、降低 token 噪音，是代码理解方向的重要探索。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 几乎不主动使用 skills 和子代理**（P2）
   用户反馈自定义 skills 需显式指令才会触发，暴露了代理调度策略的短板。

6. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent 在 Wayland 下失败**（P1）
   Linux Wayland 用户浏览器代理不可用，虽同样误报 `GOAL` 终止。

7. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent 忽略 settings.json 配置覆盖（如 maxTurns）**（P2）
   配置合并逻辑存在断链，`AgentRegistry` 读取但未生效。

8. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 工具数超过 128 时触发 400 错误**（P2）
   大量启用工具时 API 报错，需更智能的工具范围限制。

9. **[#19561](https://github.com/google-gemini/gemini-cli/issues/19561) "Tactful Extraction" 节俭 token 的外科手术式读取**（P3）
   当前基线约 36.6k tokens/回合，大文件读取导致上下文膨胀，提案建立 grep 优先的代码发现层级。

10. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186) get-shit-done output hook 导致崩溃**（P1）
    输出即将完成时触发崩溃，影响工作流稳定性。

---

## 四、重要 PR 进展

1. **[#29608](https://github.com/google-gemini/gemini-cli/pull/29608) [已关闭] Web 搜索 30 秒超时修复**（P1）
   `GoogleSearch`/`WebFetch` 此前仅传递调用方 abort 信号，LLM 调用不返回时 agent 永久卡在 `Thinking...`（报告 30+ 分钟挂起）。修复高价值。

2. **[#29611](https://github.com/google-gemini/gemini-cli/pull/29611) [已关闭] 支持带点号的 Gemini 3 型号多模态函数响应**
   解析模型别名，防止 `gemini-3.8-flash` 等型号上图片工具输出触发 HTTP 错误。

3. **[#29757](https://github.com/google-gemini/gemini-cli/pull/29757) [已关闭] 验证激活二进制更新，防止 PATH 遮蔽假成功**
   修复自动更新在多安装路径下报告成功但实际运行旧版本的问题。

4. **[#29792](https://github.com/google-gemini/gemini-cli/pull/29792) [评审中] 视口刷新时保留终端回滚缓冲**
   修复 `\x1b[3J` 清除保存行导致滚动历史丢失的问题，改善终端体验。

5. **[#29744](https://github.com/google-gemini/gemini-cli/pull/29744) [评审中] /ide enable 支持在 IDE 服务器重启后重连**
   解决 VS Code 重载窗口后 CLI 集成终端持续报 Disconnected 的问题。

6. **[#29773](https://github.com/google-gemini/gemini-cli/pull/29773) [已关闭] keybindings.json 支持 keys 数组**
   允许一条绑定定义多个组合键，修复 schema 校验失败。

7. **[#29790](https://github.com/google-gemini/gemini-cli/pull/29790) [已关闭] 从 bootstrap 父进程转发终止信号到子进程**
   防止 SIGTERM/SIGINT 等信号被忽略导致子进程残留。

8. **[#29700](https://github.com/google-gemini/gemini-cli/pull/29700) [评审中] 同步 workspace 依赖版本与 lockfile 并在 CI 强制校验**
   为 Nix 等封闭构建工具提供可复现构建保障。

9. **[#29606](https://github.com/google-gemini/gemini-cli/pull/29606) [已关闭] 自定义 header 仅在合法 RFC 9110 token 前分割**
   修复含 JSON 元数据的 header 值（如 portkey metadata）被错误拆分。

10. **[#29607](https://github.com/google-gemini/gemini-cli/pull/29607) [已关闭] nightly eval 无报告时使汇总失败**
    堵住 `continue-on-error` 导致静默失败的 CI 漏洞，提升 eval 可信度。

---

## 五、功能需求趋势

- **Subagent 体系深化**：绝对主线。本地子代理 Sprint（#20195）、并行协作与共享内存（#18287）、settings.json 子代理发现（#18285）、轨迹分享（#22598）等大量需求聚焦于此。
- **AST 感知的代码理解**：#22745/#22746/#22747 系列 Epic，社区探索用语法树工具替代暴力文件读取，兼顾质量与 token 效率。
- **Token 效率优化**："Tactful Extraction"（#19561）、文件化任务跟踪替代 WriteToDo（#18836、#21000），反映对上下文膨胀的普遍焦虑。
- **浏览器代理健壮性**：会话接管与锁恢复（#22232）、Wayland 支持（#21983）、配置覆盖（#22267）。
- **安全性增强**：零依赖 OS 沙箱（#19873）、破坏性命令防护（#22672）。

---

## 六、开发者关注点

1. **子代理可靠性是最大痛点**：挂起（#21409）、误报成功（#22323）、上下文缺失于 bug report（#21763）、不主动调用（#21968）——用户信任度直接受损，多个 P1 问题待修复。
2. **挂起/无响应类 bug 频发**：除子代理外，web 搜索挂起（PR #29608 已修）、交互式提示卡死（#22465）表明超时与中断处理机制需系统性加强。
3. **配置与环境的边缘问题**：symlink 子代理不识别（#20079）、Wayland 失败（#21983）、工具数超限 400 错误（#24246），非标准环境下兼容性不足。
4. **终端体验细节**：resize 闪烁（#21924）、滚动缓冲丢失（PR #29792），CLI 作为终端工具的基本体验仍需打磨。
5. **版本与模型过渡**：新横幅提示 Gemini 4 优化未就绪，暗示用户升级新模型时需注意兼容性窗口期。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-10-17 | 数据来源：github.com/github/copilot-cli**

---

## 一、今日速览

过去 24 小时 Copilot CLI 连发三个版本（v1.0.99-3 → v1.0.100-1），统一 Sessions 浏览器成为默认体验，并新增 `--disable-client-telemetry` 开关回应隐私诉求。社区方面，macOS 更新后 `.mcp-writer.binding` 导致会话瘫痪的问题正式关闭，但新版本引入的权限回归问题（#5173）和 rewind 快照备份敏感文件（#5172）值得升级用户警惕。

---

## 二、版本发布

### v1.0.100-1（最新）
- `/sessions`、`/session`、`/resume` 默认使用统一 Sessions 浏览器
- 会话浏览的账号发现上限设为 500 条，并遵循 `Retry-After` 提示自动刷新
- 修复：沙箱 host-rule 流量现在正确走 `HTTPS_PROXY` / `HTTP_PROXY`

### v1.0.100-0
- 当掩码主机变更时，提示更新沙箱代理 CA 证书
- 修复：托管策略变更时，已在会话中激活的托管插件可正确更新
- 修复：MCP server 加载工具挂起不再导致会话卡死数分钟
- 修复：Gemini 工具调用相关问题

### v1.0.99-3
- **新增** `--disable-client-telemetry` 标志，可关闭 CLI 客户端遥测上传
- 修复：沙箱 shell 命令在凭据代理证书信任失败时给出解释，并可在批准后于沙箱外重跑
- 修复：重新打开未完成的 `/diff` 审查时保留已保存的评论

---

## 三、社区热点 Issues

1. **[#4998]（已关闭）macOS 更新/重启后 `.mcp-writer.binding` 残留过期设备 ID 导致 CLI 不可用**（11 评论 / 11 👍）
   影响最广的近期 bug：macOS 安全更新重启后所有会话（新旧均受影响）无法处理提示。已随新版本修复关闭，受影响用户建议尽快升级。链接：[Issue #4998](https://github.com/github/copilot-cli/issues/4998)

2. **[#3709]（开放）允许 `/model` 在同一会话内切换多模型，含 BYOK/本地 provider**（10 评论 / 34 👍）
   👍 数最高的功能请求：BYOK 模式通过 `COPILOT_MODEL` 钉死单一模型，`/model` 选择器不显示本地模型。反映重度用户对混合模型工作流的强烈需求。链接：[Issue #3709](https://github.com/github/copilot-cli/issues/3709)

3. **[#5173]（新，开放）1.0.99-0 起，`cd` 进同一命令新建目录会被直接拒绝（无提示）**
   新版本回归问题：组合命令 `mkdir && cd && git status` 被权限检查硬拒绝，报 "unusable session working directory"，严重影响日常使用。链接：[Issue #5173](https://github.com/github/copilot-cli/issues/5173)

4. **[#5172]（新，开放）Rewind 文件追踪会备份 gitignored 敏感文件，需要排除项或关闭开关**
   `/rewind` 自 1.0.78 去 git 化后，快照备份所有变更文件——包括 `.env` 等敏感文件，存在安全隐患。链接：[Issue #5172](https://github.com/github/copilot-cli/issues/5172)

5. **[#1436]（已关闭）支持 shell 模式加载 PowerShell profile**
   Windows 用户的长期诉求（`-NoProfile` 导致别名/函数缺失）已关闭，推测随近期版本落地。链接：[Issue #1436](https://github.com/github/copilot-cli/issues/1436)

6. **[#3100]（开放）带 Bearer token 的 HTTP MCP server 因 OAuth 探测失败而不回退到 headers 认证**（11 👍）
   MCP 集成的老问题：CLI 强制尝试 OAuth discovery 失败后不降级，导致配置 `Authorization` header 的 server 无法使用。链接：[Issue #3100](https://github.com/github/copilot-cli/issues/3100)

7. **[#5165]（新，开放）1.0.98 Enterprise 账号被路由至 api.business.githubcopilot.com，模型目录 401**
   企业认证路由问题：有效 token 仍报 "Authentication failed"，headless Linux 环境尤受影响。链接：[Issue #5165](https://github.com/github/copilot-cli/issues/5165)

8. **[#508 / #1034]（开放）Windows Git Bash 支持**
   两条相关 issue 均活跃更新：Windows 用户持续要求用 Git Bash 替代默认 PowerShell，是 Windows 平台呼声最高的需求之一。链接：[Issue #508](https://github.com/github/copilot-cli/issues/508)、[Issue #1034](https://github.com/github/copilot-cli/issues/1034)

9. **[#5164]（新，开放）侧栏切换会话泄漏插件 MCP server 和 extension host（OOM）**
   每次切换未打开过的会话都会新启一组 stdio MCP server，旧进程不释放，最终内存耗尽。链接：[Issue #5164](https://github.com/github/copilot-cli/issues/5164)

10. **[#5157]（开放）Guest 账号无法为 MCP server 指定特定 Entra 租户认证**
    `/mcp auth` 只用 home tenant，多租户企业用户（如 MSFT Fabric 场景）无法接入目标租户的 MCP server。链接：[Issue #5157](https://github.com/github/copilot-cli/issues/5157)

---

## 四、重要 PR 进展

过去 24 小时内无 PR 更新记录。功能改动主要通过 release 节奏交付，可关注下个版本对 #5173、#5172 等新回归问题的修复。

---

## 五、功能需求趋势

1. **多模型灵活切换**：`/model` 支持会话内切换、BYOK/本地模型纳入选择器（#3709, 34 👍）
2. **Windows 平台体验**：Git Bash 支持（#508, #1034）、PowerShell profile（#1436 已关闭）持续升温
3. **MCP 生态健壮性**：认证回退机制（#3100）、多租户认证（#5157）、ACP 会话 OAuth 静默续期（#4994）
4. **隐私与可控性**：遥测开关已落地（v1.0.99-3），rewind 快照排除规则（#5172）是下一诉求
5. **会话管理**：更快恢复、更清晰加载 UI（#4714）、更高历史记录上限（#5159，当前上限 1000）

---

## 六、开发者关注点

- **新版本回归风险**：1.0.99-0 引入的权限拒绝回归（#5173）与 1.0.88→1.0.89 的 MCP OAuth 回归（#4994）表明快速迭代下升级前建议先在非关键环境验证
- **沙箱与代理**：v1.0.100 系列集中修复沙箱代理/证书问题，使用企业代理的用户应升级至 1.0.100-1
- **资源泄漏**：会话切换导致的 MCP server / extension host 泄漏（#5164）在长时间工作中会触发 OOM，重度插件用户需留意
- **敏感文件安全**：rewind 快照会落盘 gitignored 密钥文件（#5172），企业用户建议临时清理 `session-state/` 目录或暂缓升级
- **企业认证边缘案例**：Enterprise 路由 401（#5165）、Entra EMU 受众配置（#4796）仍有个例，headless 环境尤为脆弱

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-10-17）

> 仓库：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. 今日速览

今日仓库无新版本发布、无活跃 Issue 更新，社区动态集中于两个仍处 OPEN 状态的 PR：修复 CJK 输入法下 Enter 误提交问题的 [#2658](https://github.com/MoonshotAI/kimi-cli/pull/2658)，以及解决 Windows GBK 编码控制台 `UnicodeEncodeError` 崩溃的 [#2657](https://github.com/MoonshotAI/kimi-cli/pull/2657)。两者均在今日更新，指向国际化与 Windows 兼容性这一持续痛点。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 社区热点 Issues

今日无 Issue 更新，暂无条目可推荐。（可参考 PR 中关联的历史 Issue：[#2643](https://github.com/MoonshotAI/kimi-cli/issues/2643) IME 输入问题、[#2629](https://github.com/MoonshotAI/kimi-cli/issues/2629) Windows 编码问题）

---

## 4. 重要 PR 进展

**#2658 [OPEN] fix(web): preserve IME composition on Enter submission**
- 作者：@dvd233 | 今日有更新
- 修复 `kimi web` 中 CJK 输入法组合未确认时按 Enter 误提交 prompt 的问题。根因是 macOS/WKWebView 下 WebKit 在 keydown 处理器运行前就清除了 `isComposing` 标记，且该问题在多种 IME 中可复现。
- 链接：[PR #2658](https://github.com/MoonshotAI/kimi-cli/pull/2658)

**#2657 [OPEN] fix(print): handle unsupported stdout encodings**
- 作者：@dvd233 | 今日有更新
- 修复 print 模式在 Windows 传统编码（如 GBK）控制台下输出非 GBK 字符触发 `UnicodeEncodeError` 导致命令终止的问题。方案是在写 stdout 前按其实际编码对输出做净化处理。
- 链接：[PR #2657](https://github.com/MoonshotAI/kimi-cli/pull/2657)

---

## 5. 功能需求趋势

今日无新增 Issue 数据，基于 PR 动向可观察到两条主线：

- **国际化/多语言输入支持**：CJK IME 兼容性（#2658）表明东亚用户群体活跃，输入体验是重点打磨方向。
- **跨平台兼容性（尤其 Windows）**：遗留编码、控制台行为差异（#2657）是 Windows 用户的高频障碍。

---

## 6. 开发者关注点

- **输入法组合事件处理的平台差异**：WebKit 提前清除 `isComposing` 的行为属于浏览器级怪癖，提示 Web 端 keydown 逻辑需做防御性处理。
- **Windows 编码健壮性**：流式输出直接写 stdout 的模式在非 UTF-8 环境下脆弱，建议关注该 PR 的净化策略是否推广到其他输出路径。
- 两个 PR 均创建于 9 月 20 日但尚未合并，社区可关注其评审进度，必要时参与测试验证。

---

*数据来源：GitHub API，统计窗口为过去 24 小时。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-17

## 一、今日速览

OpenCode 今日发布 **v1.19.3**，核心改进为模型推理选项的配置化变体生成。安全方面值得关注：两个 **severity:high** 的已复现 Issue（pwsh 下 `--` 绕过 shell 权限检查、流中断自动续写以未标记的合成用户消息送达模型）值得所有用户警惕。此外，`@Te-River` 的 session goal/todo 系列与多模态、性能优化 PR 稳步推进，社区贡献活跃。

---

## 二、版本发布

### v1.19.3
- **Core 改进**：支持配置模型推理选项以生成推理变体，替代目录变体（catalog variants），同时保留用户已配置的变体覆盖。这解决了模型选择器中推理能力显示不准确的底层问题。

---

## 三、社区热点 Issues

1. **[#51424](https://github.com/anomalyco/opencode/issues/51424) [已关闭] Go 订阅明明激活且用量 0%，模型却报"余额不足"**
   12 条评论、5 👍，是过去一天讨论最热烈的问题。涉及付费用户核心体验，与同期的多笔支付失败 Issue（#43152、#43153）共同指向订阅/计费链路问题。

2. **[#49827](https://github.com/anomalyco/opencode/issues/49827) [开放] V1→V2 升级后非 git 目录会话"消失"**
   V2 按目录创建项目导致 global 项目中的历史会话被 TUI 选择器过滤，10 条评论。升级迁移的数据可见性问题，影响存量用户信任。

3. **[#54393](https://github.com/anomalyco/opencode/issues/54393) [开放·高危] pwsh 中裸 `--` 完全绕过 shell 权限检查**
   已复现的安全缺陷：即使规则为 `shell * deny`，追加 ` --` 即可执行任意命令。Windows 用户应立即关注。

4. **[#55726](https://github.com/anomalyco/opencode/issues/55726) [开放·已复现] openai-compatible 模型同时发送 `max_tokens` 和 `max_completion_tokens`，严格端点全部拒绝**
   v2.0.28 起的回归（源自 #54694），导致第三方 provider 请求和压缩全部失败，影响面广。

5. **[#55378](https://github.com/anomalyco/opencode/issues/55378) [开放·已复现] 纯 reasoning 结束的回合被静默结算，agent 无声停止**
   #49673 在 V2 上的延续，DeepSeek 等推理型模型的“空响应即停”问题仍未根治。

6. **[#56285](https://github.com/anomalyco/opencode/issues/56285) [开放·已复现] 桌面端快速上滚会被弹回底部，历史逐块加载**
   长会话滚动体验问题，与 #54293 等渲染性能 PR 系列直接相关。

7. **[#54933](https://github.com/anomalyco/opencode/issues/54933) [开放·已复现] `~/.config/opencode` 为 symlink 时热重载失效（inotify ENOTDIR）**
   dotfiles 用户的常见配置方式，配套修复 PR #56294 已合并（见下文）。

8. **[#56295](https://github.com/anomalyco/opencode/issues/56295) [开放·高危] 流中断后的自动续写以普通用户消息身份送达模型**
   合成消息未加标记，可能污染对话上下文，被模型误认为用户指令。

9. **[#56112](https://github.com/anomalyco/opencode/issues/56112) [开放] GLM-5.3-Flash Free 从已登录 Zen 账号的模型列表中缺失**
   免费模型可用性问题，用户无法选择或调用。

10. **[#55921](https://github.com/anomalyco/opencode/issues/55921) [已关闭] 1.19.1 上 agent steps 上限失效，达到上限后工具仍以 `tool_choice: auto` 发送**
    步数限制形同虚设导致成本失控风险，2.0.30 已修复，暴露 V1/V2 行为分叉问题。

---

## 四、重要 PR 进展

1. **[#56294](https://github.com/anomalyco/opencode/pull/56294) [已合并] fix(core): 解析 symlink 后再监听配置目录**
   修复 symlink 配置目录热重载失效（#54933），当日快速闭环。

2. **[#55286](https://github.com/anomalyco/opencode/pull/55286) [已合并] fix(core): 未分类的超大请求拒绝通过纯文本压缩恢复**
   解决代理/网关返回泛化 400 时会话卡死的问题，长会话稳定性重要修复。

3. **[#56286](https://github.com/anomalyco/opencode/pull/56286) [开放] fix(ai): 容忍未知/未类型化的流事件**
   对齐 Pi 和 Codex 的做法，单个未识别事件不再终止整个 run，提升 provider 兼容性。

4. **[#55100](https://github.com/anomalyco/opencode/pull/55100) [开放] fix(core): 暴露模型推理能力**
   修复模型选择器 tooltip 恒显示 "No reasoning" 的问题（#50257），与今日 v1.19.3 的推理变体改进相呼应。

5. **[#54799](https://github.com/anomalyco/opencode/pull/54799) / [#55744](https://github.com/anomalyco/opencode/pull/55744) feat: session goal 与 todo 系列**
   四阶段系列的前两步：持久化契约 + 协议端点，为会话级目标追踪和任务管理打地基，是当前最大的新功能线。

6. **[#54496](https://github.com/anomalyco/opencode/pull/54496) [开放] feat(read): 为多模态模型附加音频和视频文件**
   `read` 工具从图像/PDF 扩展到音视频，补齐多模态输入能力。

7. **[#56271](https://github.com/anomalyco/opencode/pull/56271) [开放] fix(core): 恢复权限决策诊断日志**
   恢复 V2 中丢失的权限评估/ask/reply Info 级日志，对排查权限问题（如 #54393 类缺陷）至关重要。

8. **[#56287](https://github.com/anomalyco/opencode/pull/56287) [开放] fix(tui): `/copy` 在回答以空 assistant 消息结尾时失败**
   小而实用的 TUI 修复，与 #56295 的“纯 reasoning 消息”问题同源。

9. **[#54293](https://github.com/anomalyco/opencode/pull/54293) [开放] fix(app): 限制时间线行布局范围以削减滚动开销**
   桌面端长会话滚动性能系列的核心 PR，直指 #56285 的用户体验问题。

10. **[#55126](https://github.com/anomalyco/opencode/pull/55126) [开放] fix(core): 迁移脚本按两种分隔符切分路径**
    修复 Windows 路径分隔符问题，跨平台构建可靠性改进。

---

## 五、功能需求趋势

- **会话管理与结构化目标**：session goal/todo 系列（#54799/#55744）显示社区希望 agent 具备任务级追踪与自主续跑能力。
- **多模态扩展**：音频/视频输入（#54496）延续了对非文本模态的需求。
- **推理模型一等公民支持**：v1.19.3 的推理变体配置、#55100、#55378 均指向推理型模型（DeepSeek、GLM 等）的深度适配。
- **性能与长会话体验**：滚动性能（#54293/#54302）、上下文压缩（#55286、#55930）是持续热点。
- **升级迁移与数据完整性**：V1→V2 迁移（#49827、#55126）表明平滑升级是用户留存关键。
- **安装与可定制性**：Windows 安装目录选择（#55931）、安装脚本环境变量（#42974）等桌面端分发需求反复出现。

---

## 六、开发者关注点

1. **权限模型的安全性是最大隐忧**：`--` 绕过（#54393）、shell 重定向绕过 external_directory（#42979）接连出现，权限检查的诊断日志恢复（#56271）将帮助社区参与审计。
2. **Provider 兼容性回归频发**：#55726（重复 token 参数）显示与 openai-compatible 生态的兼容性测试不足，第三方网关/本地模型用户（Ollama 等）是主要受影响群体。
3. **计费与订阅链路不稳定**：Go 订阅误报余额不足、支付失败无诊断信息，付费转化路径仍需打磨。
4. **V1/V2 行为分叉**：#55921、#55378 等问题表明两代版本的修复节奏不一致，V1 用户升级预期需要更清晰的管理。
5. **可观测性欠缺**：多处反馈缺少堆栈/诊断信息（#43110、#55283），提升错误报告质量是降低支持成本的杠杆。

---

*数据来源：github.com/anomalyco/opencode · 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-10-17

## 1. 今日速览

Qwen Code 发布 **v0.25.3-preview.0** 预览版，核心修复为 managed-agent 中 `team_plan_approval` 的 journal-only 中断轮次结算问题（#14160）。CI 基础设施成为今日焦点：ECS 自托管 runner 池的 MySQL AIO 问题导致 reference distribution 大面积失败（P1 级 #14416），多条修复 PR 密集提交中。社区方面，subagent 并行批次静默失败（#14410）和跨会话消息无限重投（P1 级 #14409，90 秒内重投 1444 次）两个高严重度 bug 引发活跃讨论。

## 2. 版本发布

- **v0.25.3-preview.0**：[Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.3-preview.0)
  - fix(managed-agent): 将 `team_plan_approval` 纳入 journal-only interrupted-turn settle (#13847, PR #14160 by @wenshao)
- **v0.25.2-nightly.20261016**：包含同一修复的 nightly 构建。

## 3. 社区热点 Issues

1. **[#14410](https://github.com/QwenLM/qwen-code/issues/14410) [P2] Agent 工具并行批次静默失败**（8 评论）
   批量启动多个 subagent 时无结果、无错误、无通知，`list_agents` 显示空——单个 agent 正常。0.25.2 版本多 agent 工作流的核心可用性问题，影响 roadmap/subagents-tools 主线。

2. **[#14409](https://github.com/QwenLM/qwen-code/issues/14409) [P1] 跨会话消息失败后无限重投**（3 评论）
   模型调用失败后消息无退避、无上限地重复提交，90 秒内达 1444 次。P1 级 + 潜在资源风暴，已有人提 PR #14431 修复。

3. **[#14416](https://github.com/QwenLM/qwen-code/issues/14416) [P1] reference distribution CI 在 ECS 池全面失败**（3 评论）
   MySQL AIO 耗尽 + 陈旧 RUNNER_TEMP，自 10-16 22:49Z 起几乎每个 PR 都挂。当前发布流程的最高优先级阻塞项。

4. **[#13851](https://github.com/QwenLM/qwen-code/issues/13851) [P1] headless/SDK 模式 result 输出延迟 40 秒至 5 分钟**（5 评论）
   终端 `result` 需等待托管自动记忆任务（28k–36k token 调用）完成才输出，而 TUI/ACP 立即返回。SDK 消费方的核心延迟痛点。

5. **[#13078](https://github.com/QwenLM/qwen-code/issues/13078) 每日依赖 CVE 审计连续失败**（23 评论）
   自 9-30 起持续告警，讨论量最高，可能存在新的高危漏洞或 npm audit 端点不可用，安全态势需关注。

6. **[#13800](https://github.com/QwenLM/qwen-code/issues/13800) [P1] recovery-blocked Session 卡死同 daemon 其他 Session**（6 评论，已关闭）
   journal 停在 `hostedModelAttempt` 后、模型不再被调用。P1 级 daemon 稳定性问题，已修复关闭。

7. **[#14381](https://github.com/QwenLM/qwen-code/issues/14381) [P2] main 分支 1 小时 35 分钟无人发现编译失败**（4 评论）
   push 到 main 时无任何 job 编译 managed-agent-server 源码，暴露 CI 覆盖盲区。配套方案见 PR #14397（合并前门禁）。

8. **[#14266](https://github.com/QwenLM/qwen-code/issues/14266) [P2] 删除定时任务强关会话，不检查运行中后台 agent**（6 评论，已关闭）
   影响 roadmap/background-automation 线，涉及 daemon 会话生命周期设计。

9. **[#12961](https://github.com/QwenLM/qwen-code/issues/12961) [P2] 未闭合 `<system-reminder>` 标签静默截断消息**（4 评论）
   `stripSystemReminderBlocks` 用 indexOf 扫描，open tag 无 close 时丢弃其后全部文本——隐蔽的数据丢失类 bug。

10. **[#14418](https://github.com/QwenLM/qwen-code/issues/14418) [P3] `/effort auto` 自适应推理档位**（3 评论）
    按任务阶段自动切换 low/medium/xhigh，减少手动调优负担。社区对推理成本/质量平衡的典型诉求。

## 4. 重要 PR 进展

1. **[#14431](https://github.com/QwenLM/qwen-code/pull/14431)** — 修复跨会话消息在模型调用失败后无限重投（对应 #14409），提交回调携带失败原因以驱动 drain 决策。
2. **[#14429](https://github.com/QwenLM/qwen-code/pull/14429)** — CI 修复：reference distribution 的 MySQL 改为显式步骤启动并禁用 native AIO，直击 P1 级 #14416。
3. **[#14397](https://github.com/QwenLM/qwen-code/pull/14397)** — 新增 "Managed Agent gate" 工作流，在 Managed Agent 相关变更合并前跑完整 SDK Java 套件。
4. **[#14317](https://github.com/QwenLM/qwen-code/pull/14317)（已合并）** — runtime-broker 支持 AES-256-GCM 凭证密钥轮换，通过 previous-key map 解密旧密文，修复 #13202 的密钥孤儿问题。
5. **[#14297](https://github.com/QwenLM/qwen-code/pull/14297)** — Web Shell 支持按组删除会话历史消息，支持非连续多选。
6. **[#13652](https://github.com/QwenLM/qwen-code/pull/13652)** — 工具结果体积从生产到注入全链路核算，重试/fork/回放不重复计数，为上下文预算打基础。
7. **[#14428](https://github.com/QwenLM/qwen-code/pull/14428)** — 修正模拟 `sed -i` 中 `^`/`$` 在分组和交替边界的锚点语义，对齐 GNU sed。
8. **[#14430](https://github.com/QwenLM/qwen-code/pull/14430) / [#14396](https://github.com/QwenLM/qwen-code/pull/14396)** — CI 缓存治理：自托管池关闭 Maven cache 保存（repo 已 host-shared），hosted runner 保留。
9. **[#14390](https://github.com/QwenLM/qwen-code/pull/14390)** — FG10a 故障门：workflow `child_run` 摘要完整性验证，篡改的 launch envelope 被拒绝。
10. **[#11562](https://github.com/QwenLM/qwen-code/pull/11562)** — one-shot system reminder 不再混入用户自己的消息（transcript、↑-recall、取消后回填等多处）。

## 5. 功能需求趋势

- **多 Agent / 后台自动化**：subagent 并行调度（#14410）、父子会话生命周期（#13875）、定时任务与后台 agent 协调（#14266）、FG 系列故障门（#14164、#14425、#14390）是当前 roadmap 主战场。
- **扩展生态**：#13749 请求实现 Claude Code 风格的 Mod 运行时（`register/on/$` API），显示社区希望降低 Claude Mods 迁移成本。
- **IDE / Web Shell 体验**：VS Code 国际化（#13967）、tokens/sec 实时指示器（#14226，已实现）、消息组删除（#14297）、diff 长行换行（#13272）。
- **推理效率**：自适应 effort（#14418）、模型切换与内容生成联动。
- **官方平台整合**：#14025 将 ModelStudio 入口替换为千问AI平台 / QwenCloud 并置顶——官方渠道收敛信号。

## 6. 开发者关注点

- **CI 稳定性是最大痛点**：ECS 池故障（#14416）、main 编译盲区（#14381）、classify_pr 队列 49-64 分钟（#14219）、间歇性测试失败（#14361、#14400）——团队正通过分层门禁（#14392、#14397）系统性重构，但过渡期摩擦明显。
- **静默失败模式频发**：subagent 无结果（#14410）、消息静默截断（#12961）、审批卡片隐藏后投递失败不可见（#14351）——社区反复强调“无错误即最坏的错误”。
- **SDK/headless 一致性**：非交互模式与 TUI/ACP 行为不对齐（#13851 的 result 延迟）持续困扰 SDK 消费方。
- **安全运维**：CVE 审计连败（#13078）+ 凭证密钥轮换落地（#14317）表明凭证安全处于活跃加固期，遗留发现（#14408 的 key ring 误绑定无检测手段）仍待跟进。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-10-17）

## 1. 今日速览

今日无新版本发布，但 **0.10.2 候选 PR #6968 已于昨日完成并关闭**，涵盖端点级目录、分层定价与 Windows 修复，版本发布在即。社区焦点集中在**会话恢复与历史数据兼容性**上：供应商删除后无法恢复会话、8 MiB 以上会话文档无法 resume/fork、旧 Fleet 账本迁移等多个高优先级 bug 待处理。此外 @luestr 提交了基于 fastctx 的 **token 消耗优化方案**，引发对上下文开销的讨论。

## 2. 版本发布

过去 24 小时无新 Release。（0.10.2 候选已合入，预计近期发布，见 PR #6968）

## 3. 社区热点 Issues

1. **#6981 Context compression 失败**（[链接](https://github.com/codewhale-hq/Codewhale/issues/6981)）— 压缩时报 "Chat API response missing choices"，导致新会话无法建立。7 条评论，讨论活跃，属核心可靠性问题。
2. **#6996 供应商删除后历史会话无法打开**（[链接](https://github.com/codewhale-hq/Codewhale/issues/6996)）— 过期供应商被删除后，关联历史会话全部不可用。涉及数据所有权与降级读取策略，日常使用场景痛点。
3. **#6978 Turn snapshots 自 10-12 起 git commit-tree 失败**（[链接](https://github.com/codewhale-hq/Codewhale/issues/6978)）— 0.10.0 回滚自 0.10.1 后快照持续报错，且旧用户回合被重新投递；用户持有 99 MB 长期会话，数据安全令人担忧。
4. **#6955 超 8 MiB 会话文档无法 resume/fork**（[链接](https://github.com/codewhale-hq/Codewhale/issues/6955)）— journal 无上限增长将文档推过限制，报错信息也未给出补救方案。与 #6842 journal 无界问题关联。
5. **#6954 含原始 sub-agent handoff 的会话无法恢复**（[链接](https://github.com/codewhale-hq/Codewhale/issues/6954)）— canonical acknowledgement 校验 Engine 恢复消息与保存文档不一致即拒绝，属会话持久化设计缺陷。
6. **#6991 基于 fastctx 大幅降低 token 消耗**（[链接](https://github.com/codewhale-hq/Codewhale/issues/6991)）— 引入 [yc-duan/fastctx](https://github.com/yc-duan/fastctx) 方案压缩上下文开销，成本敏感用户高度关注。
7. **#7007 Linux 沙箱：$HOME 为符号链接时所有命令失败**（[链接](https://github.com/codewhale-hq/Codewhale/issues/7007)）— bwrap 无法挂载符号链接目标，沙箱下连 `ls` 都无法执行，属环境兼容性硬阻断。
8. **#6990 纯推理输出停止时自动续跑**（[链接](https://github.com/codewhale-hq/Codewhale/issues/6990)）— 子 agent 因 output-limit 停止后需人工输入 "continue"，长时间协调任务体验差，自动化场景刚需。
9. **#6866 MCP boot 服务器失败时应向模型通报**（[链接](https://github.com/codewhale-hq/Codewhale/issues/6866)）— MCP 服务器启动失败时模型收不到信号，只能猜测工具缺失原因；设计讨论值得跟进。
10. **#6964 codewhale init 按语言生成 AGENTS.md**（[链接](https://github.com/codewhale-hq/Codewhale/issues/6964)）— 多语言 AGENTS.md 支持，国际化与项目初始化体验改进。

已关闭值得留意：**#6980**（Termux 下 EACCES，0.10.1 引入）、**#7008**（旧 Fleet 账本迁移恢复）、**#6962**（Windows 10 1607 导入下限 CI 防护，由维护者提出）。

## 4. 重要 PR 进展

1. **#6968 0.10.2 候选（已关闭）**（[链接](https://github.com/codewhale-hq/Codewhale/pull/6968)）— 端点级模型目录与分层定价、Windows 命令审批/输入/登录状态修复、超大会话诊断改进。本周期最重要的 PR。
2. **#6993 修复 settings 页 footer 预览文案不一致**（[链接](https://github.com/codewhale-hq/Codewhale/pull/6993)）— 预览使用真实 footer 渲染器但传入原始设置值，视觉不符。
3. **#6998 修复 /theme 第 10 行起列错位**（[链接](https://github.com/codewhale-hq/Codewhale/pull/6998)）— 行号固定宽度导致双位数行整体右移一列，改为右对齐。
4. **#6995 /help 头名词缩短仅限英文**（[链接](https://github.com/codewhale-hq/Codewhale/pull/6995)）— 英文语序的省词逻辑误用于其他语言，i18n 细节修复。
5. **#6999 rmcp 3.5.0 → 3.5.1**（[链接](https://github.com/codewhale-hq/Codewhale/pull/6999)）— MCP Rust SDK 补丁升级。
6. **#7002 tokio-util 0.7.19 → 0.7.20**（[链接](https://github.com/codewhale-hq/Codewhale/pull/7002)）— 异步运行时工具库例行升级。
7. **#7004 objc2 0.6.4 → 0.6.5**（[链接](https://github.com/codewhale-hq/Codewhale/pull/7004)）— macOS 平台绑定升级。
8. **#7000 aws-lc-rs 1.18.1 → 1.18.2**（[链接](https://github.com/codewhale-hq/Codewhale/pull/7000)）— 加密库安全补丁。
9. **#7006 rust-toolchain Action 升级**（[链接](https://github.com/codewhale-hq/Codewhale/pull/7006)）— CI 基础设施更新。
10. **#7003 / #7005 setup-node v7.1.0、download-artifact v8.0.2**（[链接](https://github.com/codewhale-hq/Codewhale/pull/7003)）— GitHub Actions 例行维护，保障发布流水线稳定。

## 5. 功能需求趋势

- **上下文与成本优化**：token 压缩方案（#6991 fastctx）、context compression 稳定性（#6981）是近期最强诉求。
- **会话持久化与可恢复性**：resume/fork 大小限制（#6955）、sub-agent handoff 恢复（#6954）、供应商删除后会话访问（#6996）、快照损坏（#6978）——会话数据生命周期成为系统性短板。
- **多供应商/API 协议灵活性**：自定义供应商支持 `/responses` 端点（#6997）、端点级定价目录（PR #6968）。
- **跨平台兼容**：Linux 符号链接沙箱（#7007）、Windows 1607 兼容防护（#6962）、Termux（#6980）。
- **Agent 自动化体验**：reasoning 停止自动续跑（#6990）、MCP 故障感知（#6866）。
- **i18n / 工程规范化**：多语言 AGENTS.md（#6964）、非英文 UI 文案处理（PR #6995）。

## 6. 开发者关注点

1. **长会话数据安全是最大焦虑**：多条 issue 涉及大体积会话无法恢复、journal 无界增长、快照损坏——用户长期积累的工作成果存在丢失风险，亟需官方恢复工具或明确上限策略。
2. **依赖供应链失效的连锁反应**：删除过期供应商即锁死历史会话，说明会话与供应商耦合过紧，需要降级/归档机制。
3. **沙箱与特殊环境兼容性**：SELinux/符号链接等环境下沙箱直接不可用，建议发布前增加环境矩阵测试（呼应 #6962 的 Windows 导入下限 CI 防护思路）。
4. **多 agent 长时任务需要无人值守能力**：output-limit 停止、MCP 故障静默等问题在自动化流水线中被放大。
5. **成本敏感**：token 消耗与分层定价透明度（PR #6968）持续受到关注。

---
*数据来源：github.com/Hmbown/DeepSeek-TUI | 生成时间：2026-10-17*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-10-17

## 📌 今日速览

今日无新版本发布，但 PR 活动密集：Windows 体验成为主线——PowerShell 工具默认启用、剪贴板回退修复等多个 PR 落地。压缩（compaction）输出上限问题以 #11036 的合并正式解决，长期困扰高思考等级用户的摘要截断故障有望终结。

---

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues

**1. [#7547](https://github.com/earendil-works/pi/issues/7547) — Windows 使用方式调研（88 评论）**
官方发起的 Windows 生态摸底：运行方式过多导致维护精力分散。持续两个多月的长期讨论帖，是 Windows 方向所有工作的源头，今日再获更新。

**2. [#9549](https://github.com/earendil-works/pi/issues/9549) — 大型会话每帧全量重渲染，单核打满（16 评论）**
Windows Terminal + 大 transcript 场景下性能严重退化，resize 触发整个 transcript 重发。报告者已用 `pi -ne` 验证非扩展问题，是当前最重要的性能 Issue。

**3. [#10256](https://github.com/earendil-works/pi/issues/10256) — mintty 下终端颜色查询应答泄漏进提示符（13 评论）**
0.99.x 回归：颜色查询应答混入 prompt，BEL 触发外部编辑器。与 #10884 同属“终端查询协议”一类问题，影响非 Windows Terminal 用户。

**4. [#10884](https://github.com/earendil-works/pi/issues/10884) — 1.2.0 启动后键盘输入失灵（8 评论）**
未终结的终端应答导致 StdinBuffer 永久等待，按方向键可恢复但已输入内容丢失。新版本引入的输入层 bug，修复进行中。

**5. [#9602](https://github.com/earendil-works/pi/issues/9602) — 压缩时纳入早前省略的 thinking 消息导致上下文溢出（11 评论，已关闭）**
长会话 + 本地模型场景的溢出 bug，与 #9075、#9512 同属压缩家族，均已被今日合并的 #11036 系列修复覆盖。

**6. [#9566](https://github.com/earendil-works/pi/issues/9566) — models.json 自定义模型沿用错误的 128k 默认上下文（10 评论）**
当自定义模型 ID 与 provider 已有模型重名时，contextWindow/cost 等配置被静默忽略。对本地模型（llama.cpp）用户影响大。

**7. [#10645](https://github.com/earendil-works/pi/issues/10645) — 编译版（Bun）可执行文件中图片附件全部丢失（9 评论）**
`resizeImage` 在编译产物中返回 null，0.87.x 起所有图片附件被静默省略。RPC 模式宿主应用的核心阻塞问题，修复中。

**8. [#9497](https://github.com/earendil-works/pi/issues/9497) — Windows CJK 输入法卡顿、候选窗不显示（5 评论）**
中文/日文/韩文 IME 体验接近不可用，`showHardwareCursor` 可绕过。对中文用户是头号痛点。

**9. [#9986](https://github.com/earendil-works/pi/issues/9986) — 工具执行中途 abort 后遗留未应答的 tool call（7 评论）**
被截断的 tool call 永久留在历史中且无任何提示，后续请求可能因此失败。涉及会话一致性的核心问题。

**10. [#10956](https://github.com/earendil-works/pi/issues/10956) — cacheWarming idle 模式静默失效（5 评论）**
扩展监听 turn_end + 上下文含压缩消息时，空闲预热从不触发（507 个事件全为空）。缓存预热可靠性问题的最新案例。

---

## 🔀 重要 PR 进展

| PR | 内容 | 状态 |
|---|---|---|
| [#11036](https://github.com/earendil-works/pi/pull/11036) | **移除压缩摘要的固定输出上限**——高思考等级下摘要截断的根治性修复，关联 #9075/#9512/#9602 | 已合并 |
| [#11047](https://github.com/earendil-works/pi/pull/11047) | 边界上下文刷新后保持 cache warming，关联 #10956 | 已合并 |
| [#11042](https://github.com/earendil-works/pi/pull/11042) | streamSimple 路径保留 `serviceTier`，修复 Codex fast tier 丢失 | 已合并 |
| [#11038](https://github.com/earendil-works/pi/pull/11038) | 从 JSON Schema 自动生成 models.json 字段文档，补齐 #9898 删掉的参考 | 已合并 |
| [#11028](https://github.com/earendil-works/pi/pull/11028) | WSL + tmux/zellij 下剪贴板回退到 PowerShell，修复 WT_SESSION 误判 | 已合并 |
| [#11054](https://github.com/earendil-works/pi/pull/11054) / [#11053](https://github.com/earendil-works/pi/pull/11053) | Windows 默认启用 PowerShell 工具；bash/PowerShell 并存时优先 PowerShell | 已关闭（配合 Sapling stack 迭代） |
| [#11037](https://github.com/earendil-works/pi/pull/11037) | 工具搜索支持 Unicode 分词，修复多语言查询（#10816） | 开放中 |
| [#11039](https://github.com/earendil-works/pi/pull/11039) | 恢复并扩充扩展开发指南：hook 流程图、事件选择规则、示例索引 | 开放中 |
| [#10910](https://github.com/earendil-works/pi/pull/10910) | NVIDIA 默认模型切换为 Nemotron 3.5 Super VL，与 NVIDIA 团队协作 | 已关闭 |
| [#10528](https://github.com/earendil-works/pi/pull/10528) | Nix 打包重构：makeBinaryWrapper、剔除 .map/.d.ts——预计解决 #10519 的 PATH 污染问题 | 进行中 |

---

## 📈 功能需求趋势

1. **Windows 一等公民化**：#7547 调研 + PowerShell 默认启用 + IME/剪贴板/mintty 一系列修复，Windows 是当前最集中的投入方向。
2. **压缩与上下文管理健壮性**：多个摘要截断、溢出 Issue 被统一修复，社区对长会话可靠性诉求强烈。
3. **OpenAI 兼容生态兼容性**：`developer` role、空 tool call、空白 tool result 等导致 400 的边缘 case 持续被报告（#9508、#10741、#10299）。
4. **企业级配置管理**：#10895 提出系统级（MDM）最高优先级配置，反映企业部署需求。
5. **多语言/国际化**：CJK 输入（#9497）、Unicode 工具搜索（#11037）。

---

## ⚠️ 开发者关注点

- **终端协议兼容是近期 bug 高发区**：mintty、ConPTY、未终结应答导致的输入失灵（#10256、#10884、#10442），非主流终端用户升级需谨慎。
- **静默失败类 bug 值得警惕**：图片附件静默丢弃（#10645）、abort 后 tool call 无提示丢失（#9986）、cache warming 静默停止（#10956）——建议升级后验证关键功能。
- **自定义 models.json 用户注意**：ID 冲突会导致配置被忽略（#9566），本地模型用户尤其受影响。
- **1.2.0 输入失灵已有临时方案**：按一次方向键可恢复输入（#10884）。
- **文档正在系统性重建**：models.json 参考（#11038）与扩展指南（#11039）回归，扩展开发者值得关注。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# 📰 oh-my-pi 社区动态日报 · 2026-10-17

## 1️⃣ 今日速览

oh-my-pi 连发 v18.11.2 / v18.11.3 两个版本，聚焦 agent-core 队列/会话恢复能力增强与 JSON Schema 解析修复。社区侧，工具层（find/read/ast_grep）报告了一批“静默失败”类 bug，一批由 @yuzu-octopus 提交的性能优化与 TUI 修复 PR 持续推进中。

---

## 2️⃣ 版本发布

### [v18.11.3](https://github.com/can1357/oh-my-pi/releases)
- **pi-agent-core (Added)**：`prepareQueuedMessages` 现在可感知批次来源队列（`steering` 或 `followUp`），便于上层区分处理引导消息与后续任务（[#16026](https://github.com/can1357/oh-my-pi/pull/16026)）
- **pi-ai (Fixed)**：修复 JSON Schema 解引用时错误改写 `const`、`enum` 等字面量值的问题

### [v18.11.2](https://github.com/can1357/oh-my-pi/releases)
- **pi-agent-core (Added)**：`agent_start` 事件携带 `resumedToolCallIds`，续跑时首次执行未配对 assistant 尾部的工具调用可被正确追踪
- **pi-agent-core (Fixed)**：后台任务完成后取消 `ask`，现在正确上报用户取消，而非误导模型重试

---

## 3️⃣ 社区热点 Issues

| # | Issue | 关注理由 |
|---|-------|---------|
| 1 | [#12306](https://github.com/can1357/oh-my-pi/issues/12306) 🔥14评论 | OpenCode Zen 免费模型在 OMP 中返回 403 `FreeTierError`，同一模型在 OpenCode 原生可用——跨工具兼容性问题持续近一个月未解，8 👍 |
| 2 | [#4991](https://github.com/can1357/oh-my-pi/issues/4991) | 子代理强制继承完整 harness 系统提示词，无法选择最小契约式提示词，浪费 token 且污染窄域编排代理。长期高热度增强需求 |
| 3 | [#15452](https://github.com/can1357/oh-my-pi/issues/15452) | 最近更新引发多个 TUI 异常：随机“无 TUI”状态、resume/compaction 后界面延迟等，10 评论 |
| 4 | [#14833](https://github.com/can1357/oh-my-pi/issues/14833) | opencode-go 免费模型在模型列表中不显示/不刷新，影响免费层用户上手 |
| 5 | [#15948](https://github.com/can1357/oh-my-pi/issues/15948) ✅已关闭 | provider 失败后恢复的子代理，最终回复不发布到 `agent://` 输出也不通知父代理（.md 保持 0 字节）——关键编排链路 bug 已修复 |
| 6 | [#16005](https://github.com/can1357/oh-my-pi/issues/16005) | Windows Terminal SIXEL 渲染三连问题：实时图表覆盖历史、残留像素、SVG 图落定为过期栅格 |
| 7 | [#14852](https://github.com/can1357/oh-my-pi/issues/14852) | 凭据切换后回放旧的 `encrypted_content` 加密推理导致持久 400 循环——会话状态与凭据生命周期耦合的安全/可用性问题 |
| 8 | [#15963](https://github.com/can1357/oh-my-pi/issues/15963) | grep/read 预览输出未过滤原始终端转义序列，会把 pane 卡死在 alt-screen + 鼠标模式，安全隐患 |
| 9 | [#16027](https://github.com/can1357/oh-my-pi/issues/16027) | `find` 对单个显式文件只检查前 ~375 字节就报“无命中”——典型静默失败，易误导 agent 结论 |
| 10 | [#15912](https://github.com/can1357/oh-my-pi/issues/15912) | 请求为 advisor 消息增加 `info` 别名（显示为 `⟨info⟩`），反映自定义 advisor 生态（omp-verifier 等）正在成型 |

> 另有 @shoucandanghehe 一日密集提交的一批 read 工具 bug（[#15954](https://github.com/can1357/oh-my-pi/issues/15954)、[#15955](https://github.com/can1357/oh-my-pi/issues/15955)、[#15956](https://github.com/can1357/oh-my-pi/issues/15956)、[#15981](https://github.com/can1357/oh-my-pi/issues/15881)）均已快速关闭，read 工具的网页/RSS 解析路径得到集中修复。

---

## 4️⃣ 重要 PR 进展

| # | PR | 内容 |
|---|-----|------|
| 1 | [#16049](https://github.com/can1357/oh-my-pi/pull/16049) | 新增审批选项 **"Ask and remember"**，对读写操作的记忆化授权，减少重复确认 |
| 2 | [#15327](https://github.com/can1357/oh-my-pi/pull/15327) (P1) | 修复 eval/PTY/replay 路径中 SIXEL payload 被截断或清洗破坏的问题，含 14 个回归测试 |
| 3 | [#15336](https://github.com/can1357/oh-my-pi/pull/15336) (P1) | 统一 thinking-toggle 到单一 display-resync 辅助函数，修复 `/settings` 隐藏思考块时静默删除回答的 P0 bug |
| 4 | [#16021](https://github.com/can1357/oh-my-pi/pull/16021) (P1) | Codex Responses 传输层支持显式端点与调用方身份头，兼容非官方 ChatGPT 后端 |
| 5 | [#16019](https://github.com/can1357/oh-my-pi/pull/16019) (P2) | OAuth 凭据不再因单次瞬时刷新失败被永久禁用，先重试确认后再 disable |
| 6 | [#15207](https://github.com/can1357/oh-my-pi/pull/15207) | 流式热路径性能优化：削减每个 token delta 的重复切片/扫描开销 |
| 7 | [#15222](https://github.com/can1357/oh-my-pi/pull/15222) | 会话修剪只重写变化行，从 O(整个会话) 降为增量写入 |
| 8 | [#15224](https://github.com/can1357/oh-my-pi/pull/15224) | main.ts 懒加载 130 个非启动路径模块，首帧前模块评估从 ~1900 降至 ~101 |
| 9 | [#16022](https://github.com/can1357/oh-my-pi/pull/16022) | Codex 空白 delta 上限（256 连续帧 / 16 KiB）改为可配置，防止退化流挂死 |
| 10 | [#15335](https://github.com/can1357/oh-my-pi/pull/15335) (P1) | Ctrl+O 取消通用工具卡片 12 行展开上限与 64 KiB 预切片限制 |

> @yuzu-octopus 本周贡献了约 12 个 perf/fix PR（另见 [#15225](https://github.com/can1357/oh-my-pi/pull/15225)、[#15326](https://github.com/can1357/oh-my-pi/pull/15326)、[#15308](https://github.com/can1357/oh-my-pi/pull/15308)、[#15437](https://github.com/can1357/oh-my-pi/pull/15437)），覆盖启动性能、内存分配、类型安全与 TUI 交互，是当前最活跃的贡献者。

---

## 5️⃣ 功能需求趋势

1. **子代理编排精细化**：最小提示词契约（#4991）、隔离执行语义（#15987）、恢复/发布链路可靠性（#15948）——多代理工作流是核心诉求
2. **Provider 兼容性与免费层**：OpenCode Zen 403（#12306）、opencode-go 模型不可见（#14833）、AWS Kiro 支持（#1571）——社区对第三方/免费模型接入需求强烈
3. **TUI 稳定性与渲染**：SIXEL 图表（#16005/#16007）、滚动（#9824）、随机无 TUI（#15452）、转义序列泄漏（#15963）——终端渲染是 bug 高发区
4. **平台支持**：Windows 相关问题（白窗残留 #5397、SIXEL）持续存在
5. **可扩展性/生态**：advisor 别名（#15912）显示社区在自建 advisor 与 verifier 工具链

---

## 6️⃣ 开发者关注点

- **工具“静默失败”是最大痛点**：find 只读前 375 字节、ast_grep 模式解析失败报“无匹配”、read 单行长内容返回 0B——这类假成功直接误导 agent 决策，证据/审计场景危害尤大
- **凭据与会话状态生命周期**：凭据切换后加密推理回放死循环、OAuth 误禁用，反映 provider/auth 层需要更健壮的状态失效策略
- **Token 效率**：提示词继承过大、skill 描述被截断（#15598）、意外停止分类器误判（#6540），用户对上下文成本高度敏感
- **维护节奏积极**：大量 P2 级 bug 在 1-2 天内被 triage 并关闭，工具层 read 系列问题响应尤其迅速

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

# DeepSeek Harness 社区动态日报
**日期：2026-10-17**

---

## 1. 今日速览

DeepSeek Harness 今日发布 **dsh-v0.2.1-alpha.5** 版本，聚焦稳定性修复，涵盖插件系统会话同步、终端恢复性能优化及 PTC Mode 文档完善。过去 24 小时内 Issues 与 PR 无新增动态，社区整体处于版本消化期。

---

## 2. 版本发布

### dsh-v0.2.1-alpha.5
🔗 [github.com/deepseek-ai/deepseek-harness/releases](https://github.com/deepseek-ai/deepseek-harness/releases)

**问题修复：**
- 修复插件页启用/停用插件后，已打开会话的 `/` 菜单未更新技能列表的问题（@grllll）
- 减少新建与恢复多个终端时的重复查询，避免失效终端在切换面板后反复重试（@LegGasai）
- 补充 PTC Mode 缺失的部分指引，统一 SDK、Web 和 headless 的模型身份说明（@koalazf99）
- 修复 Windows 和 Linux 下右侧栏收起时，输入框按 Page 键的异常行为

**简评**：本次为 alpha 迭代版本，无新功能，主要面向 v0.2.1 正式版打磨细节。终端恢复逻辑的优化对多会话重度用户尤为友好。

---

## 3. 社区热点 Issues

> 过去 24 小时内无 Issue 更新，本节今日省略。

---

## 4. 重要 PR 进展

> 过去 24 小时内无 PR 更新，本节今日省略。
> 从 Release 内容可见近期合入的贡献来自 @grllll、@LegGasai、@koalazf99 等社区成员。

---

## 5. 功能需求趋势

由于今日无活跃 Issue 数据，基于近期版本脉络可观察到以下方向：

- **插件系统体验**：插件启停后的会话状态同步是持续打磨重点
- **终端稳定性与性能**：多终端场景下的查询去重、失效重试是高频修复点
- **跨平台一致性**：Windows / Linux 的 UI 行为差异持续收敛
- **文档与指引**：PTC Mode、SDK / Web / headless 的统一说明，降低多端使用门槛

---

## 6. 开发者关注点

- **多终端会话稳定性**：恢复/切换场景下的重复查询与重试问题，说明重度用户依赖多面板工作流
- **插件生态可靠性**：技能列表的实时同步影响插件开发者的调试体验
- **alpha 版本迭代节奏**：v0.2.1 系列密集发布小版本，建议生产环境用户暂缓跟进，关注正式版发布说明

---

*数据来源：github.com/deepseek-ai/deepseek-harness · 本日报由自动化流程生成*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*