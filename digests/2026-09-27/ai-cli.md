# AI CLI 工具社区动态日报 2026-09-27

> 生成时间: 2026-09-27 04:20 UTC | 覆盖工具: 11 个

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

**数据日期：2026-09-27**

---

## 一、生态全景

AI CLI 工具已进入“稳定性偿还期”——经过前期的功能爆发，各头部工具（Claude Code、Codex、Gemini CLI）的社区焦点均从新功能转向回归修复、内存/会话健壮性与安全护栏。多模型路由与 provider 生态成为第二梯队工具（OpenCode、Pi、oh-my-pi）的核心竞争点，且“分层路由/判断模型”这类智能调度开始从讨论走向落地。子代理（subagent）编排的可靠性问题在各工具中集中暴露，正在成为下一个攻坚重点。同时，MCP 兼容性收紧与静默失败类缺陷显示生态正在从“能跑通”向“可审计、可信赖”演进。

---

## 二、各工具活跃度对比

| 工具 | 今日热点 Issues | 今日 PR 更新 | Release | 主要焦点 |
|---|---|---|---|---|
| **Claude Code** | 10+（Issues 总量大，含 1184👍 长期帖） | 2 | 无 | 连接器/云集成回归、云积分成本失控 |
| **OpenAI Codex** | 10（约 40% 为 Windows） | 10+ | **6 个 alpha**（0.159.0 连发） | Windows/Linux 桌面端回归批量修复 |
| **Gemini CLI** | 10 | 10 | 无 | 子代理可靠性、性能优化 PR（20-40x） |
| **Copilot CLI** | 10（35 条更新） | 0 | **v1.0.89-5** | OOM 内存泄漏、Claude Code 规则兼容 |
| **OpenCode** | 10 | 10 | 无 | 会话生命周期系统性修复、provider 自动发现 |
| **Qwen Code** | 10 | 12+ | **nightly v0.24.6** | Managed Agent 双路径架构 Stage B/D 推进 |
| **DeepSeek TUI** | 10（34 条更新） | 10（50 条更新） | 无 | Trust lane 安全重构、TUI 打磨 |
| **Pi** | 10（39 条更新） | 10（18 条更新） | 无 | Mistral/GLM 兼容、遥测、Codemode+MCP 大 PR |
| **oh-my-pi** | 10 | 10 | **v18.3.3** | 流式实时转向、分层模型路由 |
| Kimi Code / DeepSeek Harness | 0 | 0 | 无 | 静默 |

**观察**：Codex 是唯一处于“alpha 连发快速修复周期”的头部工具；DeepSeek TUI（34 Issue / 50 PR 更新）与 Pi 的单位社区规模活跃度最高，且 bug 当日修复率亮眼。

---

## 三、共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **子代理编排可靠性** | Gemini CLI（#22323 误报成功、#21409 无限挂起）、Claude Code（Opus 5.5 范围蔓延）、Qwen Code（Mesh 多 Agent 协作）、oh-my-pi（#13305 子代理误杀） | 子代理状态上报、挂起检测、结果可信度是全生态最大公约数痛点 |
| **多 Provider / 多模型路由** | OpenCode（#6231 自动发现，237👍）、oh-my-pi（Profiles + Jev 分层路由）、Pi（多供应商适配）、Copilot CLI（BYO-K/DeepSeek）、Qwen Code（多 API Key 混乱 #12760） | 从“多 provider 配置”演进到“按置信度智能路由” |
| **长会话/内存稳定性** | Copilot CLI（OOM #4664/#4725）、Gemini CLI（内存增长 PR #29451）、OpenCode（会话误杀系列 PR）、DeepSeek TUI（滚动卡顿 #6652） | 长会话是所有工具的共同短板，OOM/挂起/误杀反复出现 |
| **MCP 兼容与治理** | Claude Code（#97319 严格校验拒合法 server）、Copilot CLI（#4370/#4753 握手与超时）、OpenCode（孤儿进程 #50363）、Codex（#5059 prompts 支持，55👍）、Pi（#10040 MCP 支持） | MCP 已是标配，但兼容性边界与进程卫生问题普遍 |
| **成本与配额透明度** | Codex（#48598 首日耗 61% 配额）、Claude Code（云积分静默耗尽 #97567）、Pi（OpenRouter 成本偏差 2-3x #9980）、oh-my-pi（缓存命中率崩塌 #13336） | 用量可见性、缓存效率、计费准确性诉求集中爆发 |
| **无头/CI 集成** | Qwen Code（#12803 `--agent` 结构化输出）、Gemini CLI（JSON 输出、信号处理）、OpenCode（WebSocket 超时可配置） | 脚本化、可编排是共同演进方向 |
| **安全护栏** | Claude Code（WSL2 沙箱静默降级）、DeepSeek TUI（只读权限重构 #6298）、oh-my-pi（heredoc 反引号执行 #13307）、Qwen Code（隐私上报绕过 #12770）、Gemini CLI（破坏性 git 命令护栏） | 权限模型、沙箱降级、数据安全议题全面升温 |

---

## 四、差异化定位分析

| 工具 | 定位 | 技术路线特点 |
|---|---|---|
| **Claude Code** | 企业级全栈 coding agent（CLI+云+浏览器+连接器） | 云端 Routines、Connector 生态、模型深度绑定；当前受云集成回归与成本失控困扰 |
| **OpenAI Codex** | Rust 高性能 CLI + 桌面端 + 远程执行 | 多平台分发（CLI/Desktop/MS Store）导致回归面广；exec-server/代理能力面向企业网络 |
| **Gemini CLI** | 开源、可扩展的通用 agent 平台 | 开放贡献模式（性能优化 PR 来自社区）、AST 感知工具、零依赖沙箱提案，路线偏研究性 |
| **Copilot CLI** | GitHub 生态原生入口 | 主动兼容 `.claude/rules`，正跨生态争夺 Claude Code 用户；BYO-K 是差异化筹码 |
| **OpenCode** | provider 中立的开源coding agent | 本地模型（LM Studio/Ollama）一等公民，模型自动发现是第一痛点（237👍） |
| **Qwen Code** | 企业级多 Agent 平台 | Managed Agent 双路径架构 + OpenAPI 契约驱动 + 扩展分发，架构工程化程度最高 |
| **DeepSeek TUI / Pi / oh-my-pi** | 高迭代速度的精品/极客向工具 | Fleet 治理、判断模型路由、流式实时转向等前沿特性率先落地；单维护者/小团队响应快 |

---

## 五、社区热度与成熟度

- **成熟期（大社区、慢修复）**：Claude Code——Issue 体量和热度最高（1184👍 请愿帖），但官方响应偏慢，“Bring Back Buddy”等诉求长期悬置；云功能快速变动期风险集中。
- **快速迭代期**：Codex（6 alpha/日，修复 PR 批量合入，但 0.157.x/26.924 双回归说明发布质量管控承压）；oh-my-pi 与 DeepSeek TUI（多起 Issue→PR→合并当日完成，修复速度全场最佳）。
- **稳态高活跃**：Gemini CLI、OpenCode、Pi、Qwen Code——社区贡献活跃、议题结构化（EPIC/Stage 拆解），处于“架构升级中”阶段。
- **头部工具的共性短板**：Windows/Linux 桌面端质量明显落后于 macOS/CLI（Codex 约 40% Issue 为 Windows；OpenCode、Pi 均有专门 Windows 议题）。

---

## 六、值得关注的趋势信号

1. **“虚假完成”与验证闭环成为信任核心**：Claude Code 三起模型不跑测试就宣称修复的 Issue、Gemini 子代理误报 success、Codex 用量统计失真——**生产采用 AI CLI 前必须部署独立验证层（强制测试 Stop hook、结果审计）**，不能信任 agent 自述。
2. **智能路由将成标配**：oh-my-pi 的 Jev 分层路由、OpenCode 的置信度路由 PR、社区对判断模型 provider 的讨论，指向“按任务置信度动态选择模型档位”的成本优化范式。
3. **成本可观测性是下一个竞争点**：配额放大、缓存崩塌、静默重调度等 Issue 集中出现，**重度用户应监控 prompt cache 命中率并审计自动例程的积分消耗**。
4. **MCP 生态进入“收紧校验”阶段**：客户端校验趋严（Claude Code 拒绝合法字段），MCP server 作者需严格对齐规范；进程卫生（孤儿进程、磁盘泄漏）需自建清理机制。
5. **安全设计反模式被系统性清算**：沙箱静默降级、只读权限按命令语法定义、隐私开关被绕过等问题的集中修复，表明**“静默失败”正在从可容忍缺陷变为发布阻断项**——自研工具应引以为戒。
6. **跨工具兼容成为获客手段**：Copilot CLI 支持 `.claude/rules` 是明确信号，配置/规则文件的跨工具迁移能力将影响工具选型的锁定成本。

**给开发者的实操建议**：Windows/云会话场景暂缓重度投入（回归高发）；长会话建立 checkpoint 习惯（会话损坏/OOM 无恢复手段的案例普遍）；追踪 Codex 0.159 正式版与 Claude Code 云集成修复进展再决定升级窗口。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
（数据截止 2026-09-27，基于 anthropics/skills 仓库公开 PR/Issues）

> ⚠️ 说明：本报告基于您提供的数据快照。快照中 PR 的评论数均为 undefined，故“热度”综合参考 Issue 关联度、更新活跃度与议题重要性。

---

## 1. 热门 Skills 排行（PR）

| # | Skill / PR | 功能与讨论热点 | 状态 |
|---|---|---|---|
| 1 | **skill-creator 触发评测修复** [PR #1298](https://github.com/anthropics/skills/pull/1298) | 修复触发评估误判（Windows select() 失败、worker 竞争），直接关联最热 bug [Issue #556](https://github.com/anthropics/skills/issues/556)（0% 触发率，12 条评论），持续更新至 9 月 | OPEN |
| 2 | **mcp-builder MCP v2 兼容** [PR #1742](https://github.com/anthropics/skills/pull/1742) | 适配 `mcp>=2` 的 `streamable_http_client` 改名与自定义 header，修复 [Issue #1668]；与 [Issue #1390](https://github.com/anthropics/skills/issues/1390)（evaluation.py 全零评分）同属 mcp-builder 质量问题簇 | OPEN |
| 3 | **skill-creator 打包脚本修复** [PR #1681](https://github.com/anthropics/skills/pull/1681) | 修复 `package_skill.py` 直接执行报错，skill-creator 是生态元工具，修复波及所有贡献者 | OPEN，9/26 仍活跃 |
| 4 | **docx 修订标记系列修复** [PR #1792](https://github.com/anthropics/skills/pull/1792)、[PR #541](https://github.com/anthropics/skills/pull/541)、[PR #1734](https://github.com/anthropics/skills/pull/1734) | LibreOffice 超时误报成功、`w:id` 冲突致文档损坏、孤立批注检测——docx 是修 bug 最密集的官方 Skill | OPEN |
| 5 | **md2video-audio** [PR #1703](https://github.com/anthropics/skills/pull/1703) | Markdown 一键转带真人配音的 MP4 视频（Marp + TTS），零成本，创意类代表 | OPEN |
| 6 | **AWT AI E2E 测试** [PR #822](https://github.com/anthropics/skills/pull/822) | 视觉 + 浏览器控制的零代码 E2E 测试，挂起近半年仍 9 月有更新，测试方向最受关注的贡献 | OPEN |
| 7 | **Pyxel 复古游戏开发** [PR #525](https://github.com/anthropics/skills/pull/525) | 像素游戏创建/调试/无头验证，作者为 Pyxel 作者本人，长尾讨论 | OPEN |
| 8 | **blast-radius** [PR #1776](https://github.com/anthropics/skills/pull/1776) | 批量/破坏性写操作前的“爆炸半径”检查清单，契合安全治理讨论主线 | OPEN |

---

## 2. 社区需求趋势（来自 Issues）

1. **分发与信任安全**：[Issue #492](https://github.com/anthropics/skills/issues/492)（43 评论，最热）——社区 Skill 冒用 `anthropic/` 命名空间的信任边界滥用，是生态头号关切。
2. **组织级共享**：[Issue #228](https://github.com/anthropics/skills/issues/228)（16 评论）——需求最旺的功能请求：组织内 Skill 库 / 分享链接。
3. **Skill 触发与评测可靠性**：[Issue #556](https://github.com/anthropics/skills/issues/556)（12 评论）——`claude -p` 下 Skill 完全不触发，评测基础设施是贡献者刚需。
4. **上下文经济性**：[Issue #1487](https://github.com/anthropics/skills/issues/1487)（claude-api 一次注入 ~156k token）与 [Issue #1329](https://github.com/anthropics/skills/issues/1329)（compact-memory 紧凑记忆记号法）——Token 效率成新议题。
5. **质量/安全元工具**：[Issue #202](https://github.com/anthropics/skills/issues/202)、[#412](https://github.com/anthropics/skills/issues/412)、[#1385](https://github.com/anthropics/skills/issues/1385)——Skill 质量分析、agent 治理、推理质量门禁等“元 Skill”提案集中涌现。
6. **互操作性**：[#16](https://github.com/anthropics/skills/issues/16)（Skills 暴露为 MCP）、[#29](https://github.com/anthropics/skills/issues/29)（Bedrock 支持）——平台兼容诉求长期未解。

---

## 3. 高潜力待合并 Skills

- [PR #1742](https://github.com/anthropics/skills/pull/1742)（mcp-builder v2 兼容）— 修复明确关联 Issue，9/26 刚更新，合并概率最高
- [PR #1298](https://github.com/anthropics/skills/pull/1298)（触发评估修复）— 解决 #556 核心痛点，打磨 3 个月
- [PR #1792](https://github.com/anthropics/skills/pull/1792)（docx 超时校验）— 小而精的正确性修复，9/25 更新
- [PR #822](https://github.com/anthropics/skills/pull/822)（AWT E2E 测试）— 持续维护半年，测试方向稀缺
- [PR #1681](https://github.com/anthropics/skills/pull/1681)（skill-creator 打包修复）— 元工具修复，惠及全贡献链路

---

## 4. 生态洞察（一句话）

**社区最集中的诉求是“可信与可靠的 Skill 分发基础设施”**——即解决命名空间冒用带来的安全问题、组织级共享机制、以及 Skill 触发/评测的稳定性，这三者共同决定了 Skills 能否从个人工具升级为企业级可信资产。

---

# Claude Code 社区动态日报 · 2026-09-27

## 一、今日速览

今日无新版本发布，社区焦点集中在**连接器（Connectors）与 GitHub 集成的多处服务端回归**上：claude.ai 上约 20 个已连接的 Connector 在 Claude Code 中只显示 2 个（#97537），GitHub 集成也出现只读权限被破坏、云端积分无法使用等多个新 Issue。此外，"Bring Back Buddy" 长期诉求帖热度不减（1184 👍），MCP 客户端对 `ttlMs/cacheScope` 字段的严格校验导致合法工具被拒，值得 MCP 服务器开发者警惕。

## 二、版本发布

过去 24 小时无新 Release。

## 三、社区热点 Issues

1. **[#45596](https://github.com/anthropics/claude-code/issues/45596) — Bring Back Buddy 社区联名请愿**（270 评论 / 1184 👍）
 自 4 月 9 日 v2.1.97 移除 `/buddy` 后持续发酵，是仓库热度最高的功能诉求。用户以“失去终端伴侣”的叙事集体施压，官方标记为 duplicate 但未给出回归时间表。

2. **[#27302](https://github.com/anthropics/claude-code/issues/27302) — 支持同一 Connector 多账号切换**（257 评论 / 392 👍）
 长期高热度增强请求，涉及 claude.ai/code 多工作区/多租户场景，是多账号企业用户的头号痛点。

3. **[#95326](https://github.com/anthropics/claude-code/issues/95326) — Claude in Chrome 在 reddit.com 全部工具被安全策略阻断**（16 评论）
 9 月 18 日起出现的回归，此前正常工作，影响浏览器扩展在特定站点的可用性，属近期升级引入的问题。

4. **[#97319](https://github.com/anthropics/claude-code/issues/97319) — MCP 客户端严格校验拒绝合法 tools/list 响应**（7 评论，has repro）
 Roblox Studio MCP server 因 `ttlMs/cacheScope` 字段被拒。MCP 生态兼容性问题，第三方 server 作者需关注校验边界。

5. **[#97537](https://github.com/anthropics/claude-code/issues/97537) — `/v1/mcp_servers` 仅返回 2/20 个已连接 Connector**（has repro）
 Customize/Cowork 合并后出现的回归，Gmail、Slack、Figma 等连接器在 CLI 中不可用，疑似服务端 API 变更。

6. **[#97117](https://github.com/anthropics/claude-code/issues/97117) — Opus 5.5 出现严重范围蔓延与任务失焦**
 用户在 18 个会话的长期项目中从 Opus 4.6 切换到 5.5 后被迫回退，模型行为质量反馈类 Issue 的典型样本。

7. **[#97567](https://github.com/anthropics/claude-code/issues/97567) — 云端会话无限重排每小时 PR 检查，静默耗尽云积分**（has repro）
 Routines + 成本叠加问题，自动重调度无上限，直接造成用户实际费用损失，建议使用定时例程的用户立即核查。

8. **[#96813](https://github.com/anthropics/claude-code/issues/96813) — GitHub API 访问公共仓库突要求 push 权限**（regression）
 9 月 24 日起云端环境的只读 issue 检查全部失败，破坏了多个已运行数天的定时会话流程。

9. **[#97530](https://github.com/anthropics/claude-code/issues/97530) — Windows 桌面端并发会话下直接崩溃**（has repro）
 `ccd:spawn_query` 阶段卡顿 13–24 秒后无清理退出，同一机制还导致会话切换延迟。

10. **[#84563](https://github.com/anthropics/claude-code/issues/84563) — WSL2 沙箱初始化失败后静默降级为无沙箱执行**（area:security）
 安全相关：硬编码 bind 路径失败时不报错而是绕过沙箱，静默降级路径是安全设计的反模式。

## 四、重要 PR 进展

过去 24 小时仅 2 条 PR 更新，均为 diff 面板一致性修复：

1. **[#95587](https://github.com/anthropics/claude-code/pull/95587)（已关闭）— 恢复会话时 diff 面板与内置面板行为对齐**
 修复三处差异：含编辑记录的恢复会话在宽度已知时即打开面板；`/clear` 后面板保持；会话行跟随引擎启动点。已合入/关闭，预计随下个版本生效。

2. **[#94847](https://github.com/anthropics/claude-code/pull/94847)（开放中）— 首次编辑仅在确实有文件可列出时才打开 diff 面板**
 修复仓库外写入、ignored 文件、跨 worktree 写入导致空面板（"No tracked changes"）的问题。仍待合并，是 diff 体验系列修复的收尾。

> 注：今日 PR 活动较少，diff 面板是当前内部开发的主线，可预期近期还有后续提交。

## 五、功能需求趋势

- **多账号 / 多工作区支持**：Connector 多账号（#27302）是呼声最高的长期需求，与企业多租户场景强相关。
- **可信度与自我验证**：多个 Issue 指向“模型宣称已修复但未实际验证”（#89736、#88271、#97155），社区希望 Claude Code 在声明完成前强制运行测试或对照实际输出。
- **云会话 / Routines 的成本控制**：无限重调度（#97567）、精确的会话重置计时器（#95938）、云积分使用可见性（#97556）反映用户对云成本失控的焦虑。
- **IDE 集成细节打磨**：VS Code 中 AskUserQuestion 遮挡文本（#80576）、自定义命令折叠（#93827）、Session ID 复制（#97563）等 UI 细节请求持续出现。
- **连接器生态稳定性**：GitHub 集成（今日 4 条新 Issue）与 Connector 在 CLI/Web 端的一致性成为新的问题聚集区。
- **可观测性**：`get_context_usage` 应反映 auto-compact 实际触发点（#97568），用户需要更准确的自省工具。

## 六、开发者关注点

1. **“虚假完成”是最高频的信任痛点**：三起独立 Issue（#89736、#88271、#97155）报告模型不运行失败测试就宣称修复，其中一起漏掉 8,726 条记录。建议在关键任务后追加独立验证步骤或强制测试执行的 Stop hook（但注意 #94041 指出 `/goal` Stop hook 可能无限重触发）。
2. **MCP 兼容性收紧**：#97319 显示客户端校验趋严，自定义 MCP server 作者应确保响应字段完全符合规范；#79944 提醒同时返回 `structuredContent` 与 text block 时文本可能被静默丢弃。
3. **Windows / WSL2 平台问题密集**：PowerShell here-string 误报为危险命令（#73882）、桌面端崩溃（#97530）、WSL2 沙箱静默降级（#84563）。Windows 用户建议关注沙箱状态并避免在 here-string 中包含根路径样式文本。
4. **云功能处于快速变动期**：`claude --cloud` 握手路径无法绑定 GitHub（#81776）、连接器丢失（#97537）、只读 GitHub 权限破坏（#96813）集中出现，将关键流程托管到云会话前建议先小规模验证。
5. **版本锁定策略**：#97063 报告 2.1.278 以上版本在 FreeBSD 锁死，非主流平台用户可能需要回退版本。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-09-27** | 数据来源：github.com/openai/codex

---

## 一、今日速览

Windows 平台成为今日社区舆论焦点：CLI 0.157.x 引发的终端窗口闪烁/守护进程权限问题持续发酵（#48074 已收获 51 👍）。同时 Linux Desktop 26.924 更新引入严重回归——SIGCHLD 处理器被覆盖导致子进程无法回收（#48554）。版本侧，0.159.0 连发 4 个 alpha 预发布，团队同步合入多个针对 Windows 子进程控制台窗口和 Linux 桌面端问题的修复 PR。

---

## 二、版本发布

过去 24 小时共发布 **6 个 alpha 版本**，均为 Rust CLI 预发布通道：

| 版本 | 说明 |
|---|---|
| [rust-v0.159.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.7) | 最新预发布 |
| [rust-v0.159.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.6) / [alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.5) / [alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.4) | 迭代密集，处于快速修复周期 |
| [rust-v0.158.0-alpha.15.2](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.15.2) / [alpha.2.1](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.15.2) | 0.158 通道补丁（该版本目前正捆绑于 Linux Desktop 26.924，与多个桌面端回归相关） |

> 注：alpha 发布说明均未附 changelog，具体改动需参照同期 PR。

---

## 三、社区热点 Issues

**1. [#48074](https://github.com/openai/codex/issues/48074) — Windows 安装守护进程后终端窗口反复闪烁**（30 评论 / 51 👍）
今日影响面最广的 CLI bug，安装 daemon 后每次请求都会闪现终端窗口。与 #48422、#48540、#48277 同源，属 0.157.x 引入的 Windows 子进程窗口创建问题。相关修复 PR #48483 已合入，有望随 0.159 正式修复。

**2. [#45626](https://github.com/openai/codex/issues/45626) — Windows Desktop 首轮完成后无法发送后续消息**（33 评论）
存在 12 天的老问题，新旧会话的发送按钮均被禁用，CLI 不受影响。持续高讨论量说明桌面端会话状态管理仍未解决。

**3. [#48554](https://github.com/openai/codex/issues/48554) — Linux Desktop 用空函数替换 libuv 的 SIGCHLD handler**（4 评论，技术价值高）
社区深度排查发现 Electron 主进程覆盖 SIGCHLD 处理器，导致子进程永不被回收 → shell 环境超时、“Git is unavailable”、线程加载失败。这可能是 #48208/#48419/#48189 系列挂起问题的根因。

**4. [#48189](https://github.com/openai/codex/issues/48189) — Linux Desktop 26.924 卡在 "Starting your task"**（16 评论 / 30 👍）
回滚至 26.917.71314 可解决，确认 26.924 为回归版本，Linux 桌面用户普遍受阻。

**5. [#48043](https://github.com/openai/codex/issues/48043) — CLI 0.157.0 在 Windows 因 daemon 权限错误启动失败**（18 评论 / 20 👍）
0.156.1 正常，0.157.0 无法启动，属阻断级问题。PR #48491（受限 Windows 启动器下回退 embedded 模式）疑似针对性修复。

**6. [#48208](https://github.com/openai/codex/issues/48208) — Linux Desktop UI 挂起，thread_hydration 超时**（22 评论 / 15 👍）
app-server 本身响应正常但 UI 永久加载，Ubuntu 用户升级后集中爆发。

**7. [#48313](https://github.com/openai/codex/issues/48313) — Windows 26.924 更新后白屏**（13 评论）
MS Store 版本更新后客户端区域永久空白，与已关闭的 #48364 症状一致。

**8. [#47996](https://github.com/openai/codex/issues/47996) — macOS iTerm2 中 Cmd+C 无法复制选中文本**（10 评论 / 8 👍）
0.157.0 TUI 按键处理回归，与 #48139（Debian 快捷键变更）共同指向 TUI 键位绑定重构引发的问题。

**9. [#48598](https://github.com/openai/codex/issues/48598) — 首日即消耗 61% 周配额，长上下文放大消耗**（新）
Pro 用户报告用量统计异常：长上下文请求的额度放大与活动记录缺失，涉及计费透明度，值得持续关注。

**10. [#5059](https://github.com/openai/codex/issues/5059) — 功能请求：MCP prompts 支持**（10 评论 / 55 👍）
老牌高票请求，希望 Codex 支持 MCP 服务器的预置 prompts（通过 `/` 触发）。今日仍有活跃讨论，反映 MCP 生态集成仍是最大功能缺口。

---

## 四、重要 PR 进展

**1. [#48483](https://github.com/openai/codex/pull/48483) — 阻止 Windows 管道子进程弹出控制台窗口**
为 `codex-rs/utils/pty` 子命令默认设置 `CREATE_NO_WINDOW`，直接针对今日最热的 #48074/#48422/#48540 闪烁问题。

**2. [#48491](https://github.com/openai/codex/pull/48491) — 受限 Windows 启动器下回退 embedded 模式**
解决 `cargo run` 等启动器阻止后台进程存活导致 CLI 无法启动的问题，对应 #48043。

**3. [#48502](https://github.com/openai/codex/pull/48502) — 修复本地 app server 的 ChatGPT 浏览器登录**
修复本地 daemon 使用远程 handle 导致 TUI 跳过打开浏览器的逻辑错误，缓解 Windows 反复登录类问题（#47145 相关）。

**4. [#48531](https://github.com/openai/codex/pull/48531) — 增强 Windows 沙箱运行时注册错误上下文**
为沙箱运行时安装/验证各步骤补充错误上下文，改善 #46255 等沙箱配置失败问题的可诊断性。

**5. [#48565](https://github.com/openai/codex/pull/48565) — macOS Seatbelt 网络配置允许 TLS 信任评估**
修复沙箱内 libcurl 无法访问 `TrustEvaluationAgent` 导致的 TLS 失败，网络沙箱用户重要修复。

**6. [#48508](https://github.com/openai/codex/pull/48508) — steering 回合时保留 WebSocket 连接**
此前中途追加指令会断开连接并重发全部历史；现改为排空响应并复用连接，显著降低延迟与带宽。

**7. [#48568](https://github.com/openai/codex/pull/48568) — exec-server 支持经上游代理转发私有 IP**
新增 `--proxy-private-ips-via-upstream`，使 VPN 场景下的内网地址可走上游代理，面向企业网络环境。

**8. [#48575](https://github.com/openai/codex/pull/48575) — 延长已配置 executor 的上线等待时间**
修复 executor 就绪但仍在恢复时连接重试耗尽的问题，提升远程执行稳定性。

**9. [#48549](https://github.com/openai/codex/pull/48549) + [#48548](https://github.com/openai/codex/pull/48548) — TUI 复制保留 Markdown 表格结构与源元数据**
此前复制表格会退化为渲染网格代码块；现在保留表格结构、对齐、单元格坐标与字节范围，TUI 用户体验显著提升。

**10. [#48574](https://github.com/openai/codex/pull/48574) — 延迟加载工具的命名空间名称优先保留**
修复长描述挤占 4 KiB 工具摘要预算导致后续命名空间名被隐藏的问题，改善工具发现能力。

> 其他值得关注：#48551（TUI 数学渲染修复 `$0$` 与 `\bigwedge`）、#48513（全新 TUI 欢迎屏）、#48544（登录链接复制快捷键 `c`）、#48560（working tips 不再因交互跳动）。

---

## 五、功能需求趋势

1. **MCP 深度集成** — #5059（prompts 支持，55 👍）持续高热，社区期望从 tools 扩展到 prompts/resources 全协议覆盖。
2. **多 Provider 原生切换** — #46484 请求桌面端在同一会话内可靠切换不同 provider 的模型；#33880 请求 app-server v2 暴露真实的响应模型名、请求数与 token 用量，反映评估/基准测试社区的需求。
3. **用量透明度** — #48598 等显示用户迫切需要更清晰的配额消耗明细（长上下文放大系数、活动日志完整性）。
4. **桌面端稳定性优先于新功能** — 本期几乎没有新功能诉求占主导，Windows/Linux 桌面端可用性成为最大诉求。

---

## 六、开发者关注点

- **Windows 是最大痛点平台**：今日 30 个热点 Issue 中约 40% 与 Windows 相关，集中在 daemon 启动（#48043）、控制台窗口闪烁（#48074/#48277/#48422/#48540）、白屏（#48313）、沙箱路径超 260 字符（#46255）。好在团队已批量合入针对性 PR（#48483/#48491/#48531），预计 0.159 正式版有显著改善。
- **Linux Desktop 26.924 回归需回滚规避**：SIGCHLD 处理器覆盖（#48554）引发线程加载超时（#48208/#48419）、任务启动挂起（#48189）。临时方案：回滚至 26.917.71314。
- **CLI 0.157.x 不建议 Windows 用户升级**：多个阻断级问题，0.156.1 仍为稳妥选择；关注 0.159 alpha 验证修复。
- **TUI 交互细节回归频发**：快捷键变更（#47996/#48139）、tmux 滚动（#48315）、复制行为，提示近期 TUI 重构需谨慎跟进。
- **远程/SSH 能力仍不成熟**：#47416（Remote Control 启动失败）、#48220（SSH host 连接数为 0）、#43516（跨平台 workspace root 污染）表明远程工作流仍是薄弱环节。

---
*本报告基于 GitHub 公开数据自动聚合分析，链接均指向 openai/codex 仓库。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-09-27

## 一、今日速览

今日无新版本发布，社区活动集中在 Issue 治理与代码质量提升上。最值得关注的动向是**终端 UI/渲染稳定性成为修复重点**（滚动位置保持、闪烁问题、resize 性能），同时多位贡献者提交了一系列**算法线性化性能优化 PR**（快照查询、转录索引、历史压缩重建），基准测试显示提升可达 20-40 倍。Auto Memory 的隐私与健壮性问题持续获得维护者投入。

## 二、版本发布

过去 24 小时无新 Release。

## 三、社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent 达到 MAX_TURNS 后误报 GOAL 成功（P1，13 评论）
   子代理被打断却报告 `status: success`，掩盖了真实中断原因，直接影响用户对结果的信任。最高热度 Issue，已标记 need-retesting。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist agent 无限挂起（P1，8 评论 / 8 👍）
   简单如创建文件夹的操作也会挂起超过一小时，8 个 👍 显示影响面广。 workaround 是指示模型不使用子代理。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** 零依赖 OS 沙箱 + 执行后意图路由（P2，9 评论）
   战略级增强提案：利用 Gemini 3 原生 bash 能力（grep/sed/awk 链式调用），同时通过沙箱保证安全。effort/large，值得长期跟踪。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** AST 感知的文件读取/搜索/代码库映射 EPIC（P2，7 评论）
   探索 AST 工具能否减少错位读取、降低 token 噪音，关联 #22746（评估 tilth/glyph 工具）。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** 模型不主动使用 skills 和子代理（P2，6 评论）
   核心体验痛点：即使任务高度相关，模型也不会自动调用已配置的 gradle/git skills。

6. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** Auto Memory 确定性脱敏与日志削减（P2，security，5 评论）
   敏感内容先进入模型上下文才脱敏，存在泄露风险。安全相关，优先级应关注。

7. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** Auto Memory 对低信号会话无限重试（P2，4 评论）
   未读取的会话始终未标记已处理，被反复 surfaced，浪费资源。与 #26523、#26516 构成 Memory 系统修复矩阵。

8. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** Browser subagent 在 Wayland 下失败（P1，4 评论）
   Linux Wayland 用户被阻塞的浏览器代理问题。

9. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** 工具数 >128 时触发 400 错误（P2，3 评论）
   期望 agent 更智能地限定工具作用域，对重度自定义配置用户影响大。

10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)** Agent 应阻止/劝阻破坏性操作（P2，3 评论）
    模型偶发使用 `git reset` / `--force`，需要更安全的操作护栏。

## 四、重要 PR 进展

1. **[#29520](https://github.com/google-gemini/gemini-cli/pull/29520)**（OPEN, P1）流式输出/工具确认时保持滚动位置不重置，修复视口跳动。
2. **[#29451](https://github.com/google-gemini/gemini-cli/pull/29451)**（CLOSED, P1）长时运行 agent 循环中限制工具输出大小并优化内存生命周期，防止内存无限增长。
3. **[#29402](https://github.com/google-gemini/gemini-cli/pull/29402)**（OPEN, P1）`state.json` 原子写入（temp + fsync + rename），防止中断导致持久化状态被清空。
4. **[#29494](https://github.com/google-gemini/gemini-cli/pull/29494)**（CLOSED, P2）修复后台命令执行时输入导致终端闪烁/撕裂。
5. **[#29411](https://github.com/google-gemini/gemini-cli/pull/29411)**（OPEN, P2）`--resume` 裸调用改为按最近活动时间选择会话，而非最新创建时间。
6. **[#29404](https://github.com/google-gemini/gemini-cli/pull/29404)**（OPEN, P3）新增 `gemini models list -o json` 子命令，便于外部集成发现可用模型。
7. **[#29510](https://github.com/google-gemini/gemini-cli/pull/29510)**（OPEN）加固 Windows 子进程参数引用，修复 shell:true 下的命令注入漏洞。
8. **[#29515](https://github.com/google-gemini/gemini-cli/pull/29515)**（OPEN）快照 ID 查找改用 `Set`，基准 292ms → 10ms；同类优化见 [#29516](https://github.com/google-gemini/gemini-cli/pull/29516)（414ms → 18ms）和 [#29512](https://github.com/google-gemini/gemini-cli/pull/29512)（历史压缩重建 19ms → 5ms）。
9. **[#29407](https://github.com/google-gemini/gemini-cli/pull/29407)**（OPEN, P2）JSON 序列化改为仅对当前递归路径判环，修复 OTel 导出中重复数组变 `[Circular]`。
10. **[#28676](https://github.com/google-gemini/gemini-cli/pull/28676)**（OPEN, help wanted）向子进程转发终止信号，防止 `kill` bootstrap PID 后子进程成为孤儿。

## 五、功能需求趋势

- **Agent 编排与子代理可靠性**（#22323、#21409、#21968、#20195）：子代理状态上报、挂起、自动调用率是当前最大的功能性议题群。
- **代码理解深度**（#22745、#22746、#19561）：AST 感知工具与“surgical reads”以降低 token 消耗，是提升性价比的主要方向。
- **内存/记忆系统**（#26525、#26522、#26523、#26516）：Auto Memory 的隐私脱敏、幂等性与补丁校验，维护者近期集中开 issue 跟踪。
- **终端 UI 稳定性**（#29520、#29494、#21924）：闪烁、滚动、resize 性能持续投入。
- **非交互/可集成性**（#29404、#28676、#22139）：JSON 输出、信号处理、hooks 正确性，面向 CI 和编排场景。

## 六、开发者关注点

1. **子代理结果不可信**：误报成功 + 无限挂起，迫使用户手动禁用子代理——这是当前对生产可用性伤害最大的痛点。
2. **内存与上下文管理**：长会话内存增长、大文件读取“灌水”上下文（+15k tokens/turn）、工具输出无界，均已有修复 PR 在途。
3. **安全与护栏**：破坏性 git 命令、Auto Memory 秘密脱敏、Windows 命令注入，安全类 issue/PR 明显增多。
4. **配置一致性**：Browser Agent 忽略 settings.json 覆盖（#22267）、symlink 代理不识别（#20079），配置边界情况仍多。
5. **可观测性诉求**：`/bug` 缺子代理上下文（#21763）、子代理轨迹无法通过 `/chat share` 查看（#22598），调试体验是社区反复提及的短板。

---
*数据来源：google-gemini/gemini-cli · 统计区间：2026-09-26 至 2026-09-27*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-27 | 数据来源：github.com/github/copilot-cli**

---

## 📌 今日速览

今日发布 **v1.0.89-5**，带来多项交互体验改进，包括表单点击聚焦、Claude Code 规则文件兼容及侧边栏会话未读提示。Issues 方面共 35 条更新，**内存溢出（OOM）问题仍是社区最大痛点**（#4664、#4725），另外新出现的 HTTP 400 `content[].thinking` 错误（#4946）和云代理图片查看崩溃（#4930）值得警惕。今日无 PR 活动。

---

## 🚀 版本发布：v1.0.89-5

**新增功能：**
- 左键点击 `ask_user` 及 elicitation 表单输入框可聚焦并将光标定位到点击位置
- 支持将 `.claude/rules` 下的 Claude Code 规则文件作为自定义指令（custom instructions）
- 侧边栏会话在完成一轮你尚未查看的回复后显示蓝点提示

---

## 🔥 社区热点 Issues

1. **#2995 无法使用 DeepSeek API**（CLOSED，14 评论 / 9 👍）
   通过 `COPILOT_PROVIDER_*` 环境变量接入 DeepSeek 失败。BYO-K（自带模型）仍是高需求场景，社区讨论热烈。
   🔗 github/copilot-cli#2995

2. **#4664 恢复长会话时 JS 堆内存溢出崩溃**（CLOSED，9 评论）
   恢复大型历史会话时 Node.js/V8 堆内存耗尽，进程直接崩溃。长会话内存管理是反复出现的顽疾。
   🔗 github/copilot-cli#4664

3. **#4725 Linux 平台频繁 OOM**（OPEN，7 评论）
   每隔几分钟即崩溃一次，GC Mark-Compact 无效，4GB 堆被耗尽。同类问题持续发酵，建议官方优先排查内存泄漏。
   🔗 github/copilot-cli#4725

4. **#4753 v1.0.83 会话恢复时中断 MCP 连接**（CLOSED，5 评论）
   恢复会话时约 1 秒即取消仍在初始化的 stdio MCP server（v1.0.82 为 16 秒），导致整个会话期间 MCP 静默不可用。典型版本回归。
   🔗 github/copilot-cli#4753

5. **#4370 `server/discover` 返回 -32602 导致 MCP 初始化失败**（CLOSED，4 评论）
   FastMCP 等不实现 `server/discover` 的服务端被误判为失败。MCP 兼容性问题持续困扰用户。
   🔗 github/copilot-cli#4370

6. **#4160 Plan 模式误拦截只读命令**（CLOSED，4 评论）
   权限分类器基于子串匹配而非命令语义，多个只读 shell 命令被错误阻止。
   🔗 github/copilot-cli#4160

7. **#2644 请求支持 Shift+方向键 / Ctrl+A 文本选择**（OPEN，4 评论）
   输入行不支持标准 GUI 文本选择快捷键，长提示词编辑体验差。基础交互体验呼声高。
   🔗 github/copilot-cli#2644

8. **#4946 后台 shell 完成通知后触发 HTTP 400 `content[].thinking`**（OPEN，3 评论，9 月 23 日新报）
   后台命令跨轮次完成后，通知注入导致下一轮模型调用被 400 拒绝。新出现的协议层 bug，值得官方关注。
   🔗 github/copilot-cli#4946

9. **#4930 云代理查看任何图片即终止会话**（OPEN，1 评论，9 月 22 日新报）
   GHEC 数据驻留租户上 `view` 工具查看图片后，下一次模型调用报“图片数据无效”并杀死整个会话。
   🔗 github/copilot-cli#4930

10. **#1864 会话文件损坏无法恢复**（CLOSED，2 评论 / 8 👍）
    断电导致 session 文件 JSON 损坏，无任何恢复手段，只能放弃会话。数据健壮性诉求强烈。
    🔗 github/copilot-cli#1864

---

## 🔧 重要 PR 进展

今日无 PR 更新（过去 24 小时 0 条），省略本节。

---

## 📈 功能需求趋势

- **BYO-K / 第三方模型支持**：DeepSeek 接入、bearerToken 认证（#4300）、模型名跨端一致性（#1752）——自带模型是高频诉求
- **会话稳定性与内存管理**：OOM、会话损坏、恢复回归等系列问题集中爆发，是当前最大质量短板
- **MCP 生态兼容性**：初始化握手、超时策略、第三方 server 兼容（#4370、#4753、#1360）
- **跨工具规则/配置互通**：新版本支持 `.claude/rules` 表明官方正主动拥抱 Claude Code 生态兼容
- **权限与安全精细化**：命令白名单（#2298）、Plan 模式误拦截（#4160）、sandbox 文档（#3712）
- **输入/终端体验**：文本选择（#2644）、Esc 误触（#2508）、终端渲染（#2844）

---

## ⚠️ 开发者关注点

1. **内存泄漏是头号痛点**：#4664、#4725 显示 OOM 在 Linux 长会话场景高频复现，建议关注官方修复进展
2. **新版本回归风险**：MCP 超时从 16s 缩至 1s（#4753）、插件 hook 恢复失效（#4608）提示升级需谨慎
3. **企业/合规环境受限**：GHEC 租户图片 bug（#4930）、企业策略阻断 `--agent`（#4650）、key 认证禁用（#4300）
4. **桌面应用与 CLI 配置割裂**：`askUser: false` 等设置不被桌面端读取（#4260），配置一致性待改进
5. **长会话数据安全**：损坏的 session 文件无恢复机制（#1864），重要工作建议及时 checkpoint 并避免依赖单一长会话

---
*本日报基于 GitHub 公开数据自动整理，仅供参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-27

## 📌 今日速览

今日无新版本发布，社区活动集中在 v2.0.x 的稳定性打磨上。模型自动发现（auto-discovery）依旧是呼声最高的功能（#6231，👍 237），且今天新增的 LM Studio API key 发现失败问题（#51570）直接命中该方向。PR 侧围绕会话生命周期（清理/超时/中断恢复）出现多个修复，长流式会话被误杀的问题正在被系统性解决。

## 📦 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues

1. **[#6231](https://github.com/anomalyco/opencode/issues/6231)** — OpenAI 兼容端点自动发现模型（👍 237 | 💬 59）
   最受关注的功能请求：LM Studio / Ollama / llama.cpp 等本地 provider 的模型频繁变化，手动维护 `opencode.json` 太繁琐。讨论持续近 10 个月仍高热度，是社区第一痛点。

2. **[#51570](https://github.com/anomalyco/opencode/issues/51570)** — LM Studio 带 API key 时模型发现失败（今日新增）
   `/models` 请求未携带 API key，导致发现接口报错，但推理请求正常。说明发现链路与推理链路的鉴权处理不一致，与 #6231 高度相关。

3. **[#50598](https://github.com/anomalyco/opencode/issues/50598)** — V2 agent frontmatter `permissions` 被解析但未生效
   自定义 agent 的 deny 规则无效，agent 仍保留默认 allow-all 工具权限，属安全隐患级别的问题，v2.0.12 可复现。

4. **[#50650](https://github.com/anomalyco/opencode/issues/50650)** — Desktop 自定义 provider 保存必然抛错
   "Custom OpenAI-compatible provider" 表单的 save handler 无条件抛出 `provider.custom.unavailable`，在任何 server 上都无法成功——功能完全不可用。

5. **[#50363](https://github.com/anomalyco/opencode/issues/50363)** — 本地 MCP server 孤儿进程累积
   基于 `npx` 的 MCP 子进程在会话结束后不被终止，长期累积占用系统资源，影响 Desktop 与 CLI 用户。

6. **[#51561](https://github.com/anomalyco/opencode/issues/51561)** — `/api/fs/read` 不展开 `~` 路径导致全局 AGENTS.md 在 Review 面板消失
   文件已进入模型上下文但客户端读不到，影响可审计性。今日已关闭，修复较快。

7. **[#39251](https://github.com/anomalyco/opencode/issues/39251)** — Windows 上 Desktop/CLI 严重卡顿（即使订阅了 Go）
   确认非 UI 渲染问题，CLI 同样卡顿，指向更深层性能问题，Windows 用户共鸣较强。

8. **[#34184](https://github.com/anomalyco/opencode/issues/34184)** — Go 订阅自动续费后配额未重置
   付费用户扣款成功但额度显示需再等 1 天，计费系统问题直接影响付费体验，同类还有 #37056（go-proxy 频繁 400/401/500）。

9. **[#29694](https://github.com/anomalyco/opencode/issues/29694)** — tool-output spill 文件不清理，可占数十 GB 磁盘
   单用户目录达 63GB，是磁盘占用的最典型案例，社区期待自动清理机制。

10. **[#38051](https://github.com/anomalyco/opencode/issues/38051)** — Zen 免费 Nemotron 3 Ultra 流式响应频繁中断
   免费模型稳定性不足，任务中途中断率极高，影响新用户入门体验。

---

## 🔧 重要 PR 进展

1. **[#51583](https://github.com/anomalyco/opencode/pull/51583)** — 目录清理时保留仍在推进的会话
   修复同目录下另一会话等待输入时，正在推进的会话被 cleanup 误停的问题（关联 #51343 等）。

2. **[#51573](https://github.com/anomalyco/opencode/pull/51573)**（已合并）— 保持流式会话活跃
   60 分钟不活跃计时器未计入流式活动，长推理会话被误中断；现在流式输出可重置 `LocationActivity`。

3. **[#51271](https://github.com/anomalyco/opencode/pull/51271)**（已合并）— 按上下文窗口自适应设置 `maxTokens`
   `max_tokens = min(模型输出上限, 窗口 − 精确占用 − 1.15 × 估算)`，下限 1k，系统性缓解超长报错与重试。

4. **[#50565](https://github.com/anomalyco/opencode/issues/50565)** — WebSocket 空闲超时提升并可配置
   原硬编码 5 分钟，长链推理（5 分钟以上无输出帧）会被掐断；改为可配置，解决一类高频“静默失败”。

5. **[#51558](https://github.com/anomalyco/opencode/pull/51558)**（已合并）— 恢复带未结算工具结果的会话
   修复 turn 中途死亡时工具调用卡在 `pending/running` 导致会话无法恢复的问题（#51117）。

6. **[#51492](https://github.com/anomalyco/opencode/pull/51492)** — 截断文本时保留完整字素
   修复泰文等组合文字被截断后元音/声调符号脱离的渲染问题（#50003），国际化细节修复。

7. **[#50859](https://github.com/anomalyco/opencode/pull/50859)** — 置信度门控的模型分层路由（实验性）
   依据意图置信度自动路由到不同等级模型，是 #34370 多模型协作路线图的第一步，方向值得关注。

8. **[#51575](https://github.com/anomalyco/opencode/pull/51575)** — 新会话视图展示 worktree 目录
   在浏览器端暴露 worktree 选择器，改善多工作区工作流（#43316）。

9. **[#51577](https://github.com/anomalyco/opencode/pull/51577)** — 拒绝 repository host 中的相对路径段
   修复 `safeHost` 未拦截 `.`/`..` 导致的缓存路径逃逸风险，安全性修复。

10. **[#50844](https://github.com/anomalyco/opencode/pull/50844)** — 支持 GitLab Duo 自托管实例工作流
    GitLab provider 现使用配置的实例 URL，企业自托管场景可用性提升。

---

## 📈 功能需求趋势

- **本地/自定义 provider 体验**：模型自动发现（#6231）、Desktop 自定义 provider 保存失败（#50650）、LM Studio 鉴权（#51570）——自定义接入链路是当前最集中的需求方向。
- **会话生命周期健壮性**：清理误杀、超时误断、中断后恢复（#51583 / #51573 / #51558 / #50565），社区与贡献者正在系统性补齐。
- **MCP 生态**：孤儿进程、env 变量丢失（#36434）、数字类型参数被改写成字符串（#39334），MCP 集成的边角问题持续暴露。
- **Agent 权限与多模型**：V2 permissions 未生效（#50598）、置信度路由 PR（#50859），agent 治理开始受到关注。
- **服务透明度**：状态页需求（#39394）与 Go/Zen 稳定性问题（#34184 / #37056 / #38051）相互印证。

## ⚠️ 开发者关注点

1. **磁盘与进程卫生**：tool-output spill 可达 63GB、MCP 孤儿进程累积——建议定期清理 `~/.local/share/opencode/tool-output` 并检查进程表。
2. **付费服务可靠性**：Go 续费配额未重置、go-proxy 大请求 400 必现、免费模型流式中断，付费用户故障反馈渠道仍不够顺畅。
3. **Windows / WSL 体验落后**：Desktop 卡顿（#39251）、WSL server 在 1.18.3 之后无法加载（#39323），非 macOS 用户痛点明显。
4. **长会话与长推理稳定性**：从 WebSocket 超时到 60 分钟 inactivity 误杀，多个 PR 表明这是近期维护重点，建议关注相关合并进展。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-09-27

## 📌 今日速览

Managed Agent 双路径架构（#12380）持续主导社区讨论，Stage B/D 相关 PR 密集推进；新版 nightly v0.24.6 发布，包含 CLI 测试补齐与 MCP 注册修复。数据安全类 bug 引起关注——stale worktree 清理误删用户文件的两个 P1/P2 问题已被修复关闭，扩展生命周期事件绕过隐私开关上报 RUM 的问题正在修复中。

---

## 🚀 版本发布

**v0.24.6-nightly.20260926.d6f414190a**（[Release 链接](https://github.com/QwenLM/qwen-code/releases)）
- `test(cli)`: 补齐 managed-context/1 遗留的 fixture 缺口（@wenshao，[PR #12712](https://github.com/QwenLM/qwen-code/pull/12712)）
- `fix(mcp)`: 保留注册相关修复（release notes 截断，详见发布页）

---

## 🔥 社区热点 Issues

**1. [#12380](https://github.com/QwenLM/qwen-code/issues/12380) — Managed Agent 双路径架构提案（32 评论，持续高热）**
社区最核心的架构讨论：保留现有 TypeScript agent loop，模型推理与工具环境供给解耦，Session 获得持久所有权、Workspace 绑定和可恢复的工具执行。是本周多个 Stage 任务的母提案。

**2. [#12802](https://github.com/QwenLM/qwen-code/issues/12802) — standalone 更新被过期 .deferred 标记永久阻塞**
Windows 更新链路的严重问题：老化的标记文件会让 `/update` 永远失效，且回滚锁存活方向未固定。与 #12727（用户报告 /update 后仍提示旧版本）相互印证，是 Windows 用户的实际痛点。

**3. [#12735](https://github.com/QwenLM/qwen-code/issues/12735)（已关闭）— P1：worktree 清理误删用户命名的工作树**
⚠️ 数据安全问题。启动时的 stale-worktree 扫描会删除包含未跟踪文件的用户命名工作树。配套的 [#12758](https://github.com/QwenLM/qwen-code/issues/12758)（清理破坏 git-ignored 内容）也已关闭，说明修复已落地。

**4. [#12770](https://github.com/QwenLM/qwen-code/issues/12770) — 扩展生命周期事件绕过 usage 统计隐私开关**
即使 `privacy.usageStatisticsEnabled: false`，扩展的安装/卸载/启用/禁用事件仍被上传 RUM。隐私合规问题，已有修复 PR #12789。

**5. [#12760](https://github.com/QwenLM/qwen-code/issues/12760) — 多 API Key 配置下模型选择混乱**
用户配置 DeepSeek + 阿里云 Standard + Token Plan 三个 key，`/model` 与 `/model --fast` 切换行为不符预期。反映多 provider 配置的体验缺陷，对应 PR #12773。

**6. [#12792](https://github.com/QwenLM/qwen-code/issues/12792) — EditTool 遇到 CRLF/LF 混合时重写整个文件**
模型只编辑一行，混合行尾的文件被整体改写为 CRLF，导致 `git diff` 显示全文变更。对 diff 审查和代码提交影响大，值得 Windows/macOS 混合协作团队关注。

**7. [#12737](https://github.com/QwenLM/qwen-code/issues/12737) — Stage B：ACP Bridge 双引擎宿主集成（8 评论）**
Managed Agent Stage B 的落地路径：让普通 `qwen serve` 宿主真正用上 Legacy + Managed 双引擎。配套设计文档 PR #12771 已合并。

**8. [#12793](https://github.com/QwenLM/qwen-code/issues/12793) — Stage D：公共 API 契约与生成 DTO**
将 OpenAPI 契约作为仓库内单一事实来源，含 Session 查询与事件回放。对应首个切片 PR #12808 已关闭，进度很快。

**9. [#12803](https://github.com/QwenLM/qwen-code/issues/12803) — 请求 `--agent <name>` 无头子代理模式**
单条命令以指定子代理 + 工具约束 + 结构化输出（JSON Schema）运行，是脚本化/CI 集成场景的强烈需求，值得持续关注。

**10. [#12806](https://github.com/QwenLM/qwen-code/issues/12806) — 桌面版请求 linux-aarch64 构建**
ARM64 Linux 用户（Ubuntu 24.04）目前只能自行构建，请求将 AppImage/deb 加入发布矩阵。反映平台分发覆盖的缺口。

---

## 🛠 重要 PR 进展

| PR | 内容 |
|---|---|
| [#12811](https://github.com/QwenLM/qwen-code/pull/12811) | **ACP Bridge 成对隔离恢复**：关闭 B2d 接线前的两个 follow-up，含后台任务隔离期间完成的恢复处理（@wenshao） |
| [#12816](https://github.com/QwenLM/qwen-code/pull/12816) | **Flyway V12 迁移**：对齐 Runtime Broker 与 managed-agent server 的表结构，删除废弃列 |
| [#12808](https://github.com/QwenLM/qwen-code/pull/12808)（已合并）| **Stage D1：公共 API 契约入库** + 契约测试，后续切片的基础 |
| [#12797](https://github.com/QwenLM/qwen-code/pull/12797) | **Web Shell Workspace 选择绑定**：授权 Workspace 发现 + 不可变绑定到新 Session |
| [#12789](https://github.com/QwenLM/qwen-code/pull/12789) | **修复扩展事件隐私上报**：usage-statistics 退出选项与代理配置正确传递到 ExtensionManager |
| [#12773](https://github.com/QwenLM/qwen-code/pull/12773) | **fast model 绑定精确 provider 端点**：解决多 key 同模型 ID 时选错 provider 的问题 |
| [#12771](https://github.com/QwenLM/qwen-code/pull/12771)（已合并）| **B2d 双引擎宿主接线设计文档**（中英双语），为实现提供评审基准 |
| [#12183](https://github.com/QwenLM/qwen-code/pull/12183) | **`--managed-extensions` 部署管理扩展目录加载**：企业部署场景的扩展分发机制 |
| [#11206](https://github.com/QwenLM/qwen-code/pull/11206) | **Mesh：持久化共享线程多 Agent 协作**：Agent 身份、任务分配、结果归属与线程审阅 |
| [#12757](https://github.com/QwenLM/qwen-code/pull/12757) | **Memory 元数据迁移与写入器兼容性**：保留记忆字节、检测中间编辑、报告语料就绪度 |

其他动态：[#10954](https://github.com/QwenLM/qwen-code/pull/10954)（`GET /background-agents` API）、[#12780](https://github.com/QwenLM/qwen-code/pull/12780)（CI 重试加固，已合并）。

---

## 📈 功能需求趋势

1. **Managed Agent / 多代理架构**：绝对主线。#12380 下的 Stage B→D 密集拆解，公共 API 契约、双引擎宿主、Workspace 绑定、事件回放全面铺开。
2. **无头/脚本化运行**：`--agent` 命名子代理 + 结构化输出（#12803）、batch 模式 follow-up（#12707），CI 与自动化集成需求明显。
3. **平台分发**：linux-aarch64 桌面构建（#12806）、企业部署的 managed extensions（#12183）。
4. **配置与可观测性**：多 provider 模型选择（#12760）、skills 默认禁用策略（#12790）、隐私/遥测精细控制（#12770）。
5. **数据完整性与安全**：worktree 清理数据丢失（已修复）、EditTool 行尾重写、JSON 导出 UUID 错乱（#12111）。

---

## ⚠️ 开发者关注点

- **Windows 安装/更新链路仍不稳定**：/update 假升级（#12727）+ .deferred 标记死锁（#12802），建议 Windows 用户升级前备份配置。
- **git worktree 用户请升级**：自动清理曾可能删除含未跟踪/ignored 文件的工作树，相关修复已合入，旧版本有数据丢失风险。
- **隐私敏感团队注意**：扩展生命周期事件曾无视统计开关上报，检查版本并及时更新（修复见 PR #12789）。
- **CI 稳定性是长期痛点**：ubuntu lane 非确定性失败（#10490）仍在讨论，社区在通过重试与 lint 兜底（#12780、#12650）缓解。
- **跨模型兼容性**：DeepSeek reasoning_content 回传问题（#3579）反复出现，第三方模型集成仍是高频反馈点。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (Codewhale) 社区动态日报 · 2026-09-27

## 一、今日速览

今日无新版本发布，社区活跃度集中在 0.10.0/0.10.1 的缺陷修复与 Runtime/undo 架构改进上。过去 24 小时新增了多条高质量 bug 报告（TUI 刷新、滚动卡顿、Ctrl+T 切换异常），且大多在当日就有对应修复 PR 提交，响应速度亮眼。维护者 @Hmbown 持续推进 0.10.1 的 trust lane 与 Runtime 会话/快照体系重构。

## 二、版本发布

无（过去 24 小时无 Release）。

## 三、社区热点 Issues

1. **#6184 — 引擎运行中静默冻结**（8 评论，最高热度）
   长时间工具密集运行时引擎停止输出，用户消息被持久化但永不回答，且无任何错误/日志。属最难排查的“静默失败”类缺陷，社区讨论最热烈。
   [链接](https://github.com/Hmbown/Codewhale/issues/6184)

2. **#5856 — Computer-use 插件验收路径**（6 评论）
   维护者发起的引擎验收分诊：内置 bundle 在发布构建中的发现/信任/启用流程仍待验收，是 computer-use 能力落地的关键节点。
   [链接](https://github.com/Hmbown/Codewhale/issues/5856)

3. **#6427 — 0.10.0 回归：Windows Terminal 多行粘贴逐行自动提交**（3 评论）
   #5981 修复在新版本中被打破，Windows 用户受影响面大，属高优先级回归。
   [链接](https://github.com/Hmbown/Codewhale/issues/6427)

4. **#5581 — 事件粒度审计：回合边界处界面“假死”**
   多模型调用长回合中，仅在 `TurnComplete` 更新的表面在用户看来像冻结。直接影响交互体验感知。
   [链接](https://github.com/Hmbown/Codewhale/issues/5581)

5. **#6035 — 模型 ID 固定不传播问题**
   模型 id 在至少 6 处独立固定，厂商下线旧 id（如 DeepSeek V4.1 Flash 更名）后 fleet 成员和 agent profile 仍指向已退役 id，缺乏统一 owner 和迁移机制。
   [链接](https://github.com/Hmbown/Codewhale/issues/6035)

6. **#6298 — Fleet 只读权限模型重构**
   源于 2026-09-17 事故：验证子代理被拒绝链式只读 git 命令后，使用继承的 computer-use 工具直接在宿主终端打字。暴露按“命令语法”定义只读的深层设计缺陷，安全意义重大。
   [链接](https://github.com/Hmbown/Codewhale/issues/6298)

7. **#6651 / #6652 / #6650 — @luestr 一日三连报**
   终端失焦时 TUI 不实时刷新；长时间运行后滚动“果冻化”卡顿；Ctrl+T 切换思考强度需按 4 次才生效。三连报勾勒出 0.10.0 的 TUI 渲染/热键质量问题。
   [#6651](https://github.com/Hmbown/Codewhale/issues/6651) · [#6652](https://github.com/Hmbown/Codewhale/issues/6652) · [#6650](https://github.com/Hmbown/Codewhale/issues/6650)

8. **#6621 — HTTP 线程无 session 绑定导致 undo 失效**
   新 HTTP 线程能完成真实文件写入并创建快照，却无 `ThreadRecord.session_id`，`patch-undo` 返回 201 但 `files_restored=false`。是 Runtime/undo 链路的核心缺陷。
   [链接](https://github.com/Hmbown/Codewhale/issues/6621)

9. **#6654 — 后台 shell 无父进程死亡清理**
   `background: true` 的 shell 可在 TUI 异常退出（未走 unwind 路径）后存活，存在资源泄漏/孤儿进程风险。
   [链接](https://github.com/Hmbown/Codewhale/issues/6654)

10. **#6564 — 会话级设置：propose-only 设置工具**
    创始人需求：告诉 Codewhale 想要什么设置，它提议具体变更、逐项审批。体现“AI 代操作 + 人工把关”的产品方向。
    [链接](https://github.com/Hmbown/Codewhale/issues/6564)

> 备注：#6657 为医疗账单广告 spam，已被关闭，不纳入统计。

## 四、重要 PR 进展

1. **#6645 — Runtime 线程拥有其回合的还原点**（fix #6621）
   引擎不再用随机 uuid 标记快照，undo 可正确还原或明确拒绝。Runtime 身份体系的关键修复。
   [链接](https://github.com/Hmbown/Codewhale/pull/6645)

2. **#6669 — 修复 Mac 上光标在 composer 被遮挡时仍可见**（fix #6545）
   光标计算先于视图栈绘制导致泄漏，改为最后由顶层视图决定。
   [链接](https://github.com/Hmbown/Codewhale/pull/6669)

3. **#6668 — 修复长转录滚动卡顿**（refs #6652）
   滚动移动 `Space:expand` 提示符时触发尾部全量 flatten 重建，消除该重复扁平化。
   [链接](https://github.com/Hmbown/Codewhale/pull/6668)

4. **#6667 — 每次 Ctrl+T 都切换有效思考档位**（fix #6650）
   统一 Auto 路由阶梯与 `/model` 选择器，去重具体路由档位。
   [链接](https://github.com/Hmbown/Codewhale/pull/6667)

5. **#6664 — fork 会话在回合丢失 tool call 时仍可继续**（@gaord）
   修复 fork 后首条消息报 `400 No tool output found` 及重试边界识别失败，社区贡献者提交。
   [链接](https://github.com/Hmbown/Codewhale/pull/6664)

6. **#6601 — Trust lane：凭据静态掩码、诚实审批超时、工作区信任**
   0.10.1 安全线核心 PR，覆盖凭据存储与信任机制多个缺口。
   [链接](https://github.com/Hmbown/Codewhale/pull/6601)

7. **#6637 — 只读 agent 真正运行只读命令**（fix #6015，关联 #6298 事故）
   重写命令分类器，拒绝信息可操作化，直接回应安全事件。
   [链接](https://github.com/Hmbown/Codewhale/pull/6637)

8. **#6640 — 修复会话孤儿化并修复存量孤儿**（fix #6144）
   确立会话文档作为会话唯一权威，双向链接各归其位。
   [链接](https://github.com/Hmbown/Codewhale/pull/6640)

9. **#6636/#6635/#6638 — Dock 视图三连改进**
   GIT/FILES/NOTES 视图真实化（共享单次 git probe）；后台任务结束通知；移动端显示 agent 进度与子代理缓存计数。
   [#6636](https://github.com/Hmbown/Codewhale/pull/6636) · [#6635](https://github.com/Hmbown/Codewhale/pull/6635) · [#6638](https://github.com/Hmbown/Codewhale/pull/6638)

10. **#6619 — 统一可恢复的工具输出大小预算**（fix #6508）
    搜索答案被截断在 4,000 字符、run_tests/git 仅保留 40,000 的问题，以单一预算机制解决。
    [链接](https://github.com/Hmbown/Codewhale/pull/6619)

## 五、功能需求趋势

- **Runtime/HTTP API 完整化**：会话绑定（#6621/#6659）、turn 产物引用（#6653）、git 写操作的并发保护（#6647）——外部客户端接入场景快速升温。
- **Undo/快照体系深化**：路径级还原、fork 继承还原点（#6644），undo 从“全量回滚”走向精细还原。
- **Fleet/多 agent 安全治理**：只读权限统一授权模型（#6298/#6015），是本周期最突出的安全主题。
- **TUI 打磨**：刷新、滚动、光标、热键等细粒度体验问题集中爆发，反映 0.10.0 用户基数扩大。
- **配置与模型目录健壮性**：模型 id 迁移（#6035）、legacy base_url 清理（#6394）、离线目录种子（#6612/#6620）。
- **跨表面一致性**：宠物/可视化（#6109/#6155）、goldens 色彩契约（#6223）、移动端进度展示。

## 六、开发者关注点

- **静默失败最难排查**：#6184（引擎冻结无日志）是社区最大痛点，可观测性（日志、崩溃记录）诉求强烈。
- **长会话性能衰减**：滚动卡顿（#6652）、会话/线程累积后的渲染开销，需要缓存与增量渲染策略。
- **跨平台输入差异**：Windows Terminal 粘贴回归（#6427）反复出现，说明终端兼容性测试覆盖不足。
- **配置碎片化**：模型 id 六处独立固定、legacy 字段残留，配置单一权威源是反复出现的架构诉求。
- **凭据与信任体验**：会话内安全输入 token（#6263）、审批超时诚实性（#6601），安全与流畅度的平衡持续被讨论。

---
*数据来源：github.com/Hmbown/DeepSeek-TUI（Issues 34 条、PRs 50 条，统计窗口截至 2026-09-27）*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-09-27

## 一、今日速览

今日无新版本发布，但社区活动非常活跃：昨日 39 条 Issue 更新、18 条 PR 更新，重点集中在 Mistral 托管 GLM 模型的兼容性问题（strict 字段导致工具参数被截断）以及一批 TUI/主题改进被合入。@mitsuhiko 的 Codemode + MCP 大型 PR（#10040）仍在评审中，是当前最受关注的功能性变更。多位贡献者提交了可观测性相关的提案与实现（#10084/#10085/#10095），显示扩展生态对遥测能力的需求正在上升。

## 二、版本发布

过去 24 小时无新 Release。

## 三、社区热点 Issues

1. **#4945 — openai-codex 连接可靠性问题**（OPEN，80 评论 / 34 👍）
   TUI 卡在 `Working...` 无任何输出，只能按 Esc 恢复。长期存在的高热度问题，标记 inprogress。
   🔗 [Issue #4945](https://github.com/earendil-works/pi/issues/4945)

2. **#7547 — Windows 使用情况调研**（OPEN，68 评论）
   官方发起的 sink-thread，收集 Windows 用户的使用方式与痛点，将决定核心支持的优先级。Windows 用户值得关注。
   🔗 [Issue #7547](https://github.com/earendil-works/pi/issues/7547)

3. **#5581 — sendMessage(triggerTurn) 绕过 before_agent_start 事件**（OPEN）
   扩展触发回合时绕过生命周期事件，影响输入钩子拦截等场景，属于扩展 API 语义缺陷。
   🔗 [Issue #5581](https://github.com/earendil-works/pi/issues/5581)

4. **#9980 — OpenRouter 成本统计偏差 2-3 倍**（OPEN）
   模型目录采用最便宜供应商定价，导致热门开源模型成本报告严重失真，直接影响用户对花费的判断。
   🔗 [Issue #9980](https://github.com/earendil-works/pi/issues/9980)

5. **#9953 — Anthropic strict tools 保留 min/max 关键字导致全量 400**（OPEN）
   `makeStrictJsonSchema()` 未剥离 Anthropic 拒绝的校验关键字，开启 constrained sampling 的工具会全部报错，属高优先级 bug。
   🔗 [Issue #9953](https://github.com/earendil-works/pi/issues/9953)

6. **#9678 — Mistral 目录缺少新版 zai-glm 模型 + effort 级别丢失**（OPEN）
   目录仅有 `zai-glm-5-2`，缺 5/5.3/latest，且托管 GLM 的 reasoning_effort 分发有问题。与 #10086/#10087 构成一组 Mistral+GLM 问题链。
   🔗 [Issue #9678](https://github.com/earendil-works/pi/issues/9678)

7. **#10092 — 压缩条目缺 cost 字段导致恢复会话即崩溃**（CLOSED）
   TUI footer 渲染崩溃、severity 高，但已快速关闭，疑似已修复或定位。
   🔗 [Issue #10092](https://github.com/earendil-works/pi/issues/10092)

8. **#10063 — Anthropic OAuth：Opus 5/5.5 与 Fable 5 报 Invalid effort level**（CLOSED）
   OAuth 路径下多个 Claude 模型 400 错误，影响面大，建议相关用户关注修复进展。
   🔗 [Issue #10063](https://github.com/earendil-works/pi/issues/10063)

9. **#10041 — 空 toolCallId 毒化会话导致 400 无限循环**（CLOSED）
   自定义网关场景下持久化了非法 toolResult，之后每次请求都被上游拒绝，属于数据完整性缺陷。
   🔗 [Issue #10041](https://github.com/earendil-works/pi/issues/10041)

10. **#10002 — 扩展 console.error 输出破坏 TUI 布局**（OPEN）
    扩展诊断输出绕过 TUI 渲染器导致花屏，反映扩展日志需要统一管道。
    🔗 [Issue #10002](https://github.com/earendil-works/pi/issues/10002)

## 四、重要 PR 进展

1. **#10040 — Codemode 与 MCP 支持**（OPEN，@mitsuhiko）
   大型功能 PR：为 Pi 引入 codemode 沙箱与 MCP 协议支持，动机之一是让 Jev 类模型更好地工作。
   🔗 [PR #10040](https://github.com/earendil-works/pi/pull/10040)

2. **#10067 — 全新 System 默认主题**（CLOSED，@mitsuhiko）
   基于终端颜色查询的新默认主题，引入 OKHSL，改用背景色对比判断深浅色。
   🔗 [PR #10067](https://github.com/earendil-works/pi/pull/10067)

3. **#10087 — 修复 Mistral strict 字段 + zai-glm reasoning_effort**（CLOSED）
   修复 #10086（工具参数被截断为首个属性）并为 zai-glm 家族启用 effort 透传。
   🔗 [PR #10087](https://github.com/earendil-works/pi/pull/10087)

4. **#10085 — Agent 循环发射 pi.ai.request 遥测 span**（CLOSED，@manno23）
   补齐经典 Agent 路径的 AI 遥测缺失，配合 #10084 提案，可观测性扩展将能看到真实请求数据。
   🔗 [PR #10085](https://github.com/earendil-works/pi/pull/10085)

5. **#9948 — 统一图像与分类器模型基础设施**（CLOSED，@mitsuhiko）
   模型系统重构以支持聊天之外的模型类型，是架构层面的重要铺垫。
   🔗 [PR #9948](https://github.com/earendil-works/pi/pull/9948)

6. **#10066 — 剪贴板优先取文件路径而非图标图片**（CLOSED）
   修复 macOS 上粘贴 Finder 复制文件时得到文件图标的恼人问题（#9999）。
   🔗 [PR #10066](https://github.com/earendil-works/pi/pull/10066)

7. **#10091 — 消息装饰钩子 setMessageDecorator**（CLOSED）
   允许扩展自定义用户/助手文本渲染，扩展 UI 定制能力进一步增强。
   🔗 [PR #10091](https://github.com/earendil-works/pi/pull/10091)

8. **#9776 — 按思考级别配置采样参数**（OPEN，@mrexodia）
   `samplingParamsByThinkingLevel` 支持思考/非思考模式使用不同采样参数，适配各开源模型的最佳实践。
   🔗 [PR #9776](https://github.com/earendil-works/pi/pull/9776)

9. **#10071 — 加载时拒绝畸形扩展命令**（CLOSED）
   修复扩展命令名非法导致 `/` 自动补全崩溃的问题，提升扩展健壮性。
   🔗 [PR #10071](https://github.com/earendil-works/pi/pull/10071)

10. **#10044 — 升级 openai SDK 至 7.19.0**（CLOSED）
    引入 fast service tier 类型以正确计价 GPT-6 Fast 模式请求。
    🔗 [PR #10044](https://github.com/earendil-works/pi/pull/10044)

## 五、功能需求趋势

- **可观测性与遥测**：#10084、#10085、#10095、#10093 集中出现，扩展生态强烈需要 LLM 调用级的生命周期事件与 span。
- **新模型 / 供应商适配**：Mistral 托管 GLM（#9678、#10086）、OpenRouter 定价（#9980）、vLLM 字段变更（#8354）、GPT-6 Fast 计价（#10044）——多供应商兼容仍是持续主线。
- **扩展 API 完善与健壮性**：装饰钩子（#10091）、命令校验（#10071）、渲染错误暴露（#10073）、示例修正（#10072）。
- **成本控制与计费精度**：按模型 max_tokens 配置（#10070）、OpenRouter 定价偏差（#9980）。
- **终端体验**：新默认主题（#10067）、Kitty 剪贴板协议（#10089）、自定义 abort 文案（#10094）、全屏模式焦点问题（#10083）。

## 六、开发者关注点

1. **流式卡死与请求可靠性**：#4945 长期未决（80 评论），openai-codex TUI 卡死是最高频痛点。
2. **Windows 一等公民支持**：官方正在通过 #7547 收集数据，Windows 用户应积极参与。
3. **会话数据完整性**：空 toolCallId 毒化会话（#10041）、compaction 后 steering 泄漏（#8891）、缺 cost 崩溃（#10092）——非标准供应商输出对会话持久化的冲击需要系统性防御。
4. **本地 / 自建推理适配**：llama.cpp、mlx-serve、vLLM 用户反复报告 max_tokens 转发（#10096）、计费（#10070）、字段重命名（#8354）等问题，本地推理用户是重要群体。
5. **错误可见性**：Skills 加载静默失败（#10062）、工具渲染错误被吞（#10073）、扩展日志破坏 TUI（#10002）——社区普遍希望失败信息更透明。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# 📰 oh-my-pi 社区动态日报 — 2026-09-27

## 一、今日速览

oh-my-pi 今日发布 **v18.3.3**，带来两个重磅能力：**流式实时转向** 和 **统一预测文本引擎**。社区方面，多模型路由与配置灵活性问题持续升温，llama.cpp Qwen thinking-effort 失效、rewind 丢结果等多个 bug 已在当天被提交 PR 修复，修复效率显著。

---

## 二、版本发布

### [v18.3.3](https://github.com/can1357/oh-my-pi/releases)

**@oh-my-pi/pi-agent-core**
- ✨ **实时转向**：模型在流式输出过程中可接收并响应用户的转向消息，无需等待回合结束。

**@oh-my-pi/pi-coding-agent**
- ✨ **统一预测文本引擎**：整合 N-gram、SmolLM2 与 macOS 原生三家 provider，提升输入补全体验。

---

## 三、社区热点 Issues（Top 10）

1. **[#6835](https://github.com/can1357/oh-my-pi/issues/6835) 支持按模型设置 compaction 阈值**（21 评论 / 8 👍）
   Compaction 触发目前是全局配置，多模型用户希望按模型粒度覆盖阈值。讨论近两个月，是本期热度最高的 enhancement。

2. **[#12306](https://github.com/can1357/oh-my-pi/issues/12306) opencode-zen 免费层模型在 OMP 中返回 403**（8 评论 / 8 👍）
   `muse-spark-1.3-contributor-free` 在 OpenCode 可用、在 OMP 报 `FreeTierError`，涉及 provider 鉴权指纹差异，影响面广。

3. **[#1966](https://github.com/can1357/oh-my-pi/issues/1966) 支持禁用/自定义内置状态栏**（8 评论 / 12 👍）
   诉求最强烈（12 👍）的 TUI 定制需求：内置状态栏可精简但无法真正关闭和替换。

4. **[#12469](https://github.com/can1357/oh-my-pi/issues/12469) 一等支持非生成式判断模型 provider**（7 评论）
   提议为“输入 state+问题+候选，单次前向输出结构化裁决”的判断模型建立专门 provider 类别，与 #12763 的 Jev 路由 PR 呼应，是社区架构讨论的新方向。

5. **[#13260](https://github.com/can1357/oh-my-pi/issues/13260) ollama-cloud API key 被误用于 OpenAI 模型**（p1）
   多 provider 凭据串扰问题：配置 ollama-cloud 后切换 openai 报 401，且 401 被记到错误凭据上。已 triaged、等待补充信息。

6. **[#13307](https://github.com/can1357/oh-my-pi/issues/13307) bash 工具在带引号 heredoc 内执行反引号**（p1）
   `gh pr create --body "$(cat <<'EOF' ...)"` 这一高频 agent 模式中，PR body 内的反引号会被静默执行为命令，brush-parser 的 PEG 回退路径存在安全隐患，值得所有用户警惕。

7. **[#13343](https://github.com/can1357/oh-my-pi/issues/13343) ZAI 凭据阻塞永不自愈**
   与 #10978（Anthropic，已在 v18.2.1 修复）同类缺陷，配额耗尽时写入的阻塞标记在配额恢复后不解除，会话持续失败。

8. **[#13336](https://github.com/can1357/oh-my-pi/issues/13336) Anthropic 缓存命中率 20.1% → 2.0% 崩塌**
   两个 `pi.on("context")` handler 同回合一删一增消息时，prompt cache 间歇性塌缩到 head，150k+ 历史全部重算，对重度用户成本影响巨大。

9. **[#11265](https://github.com/can1357/oh-my-pi/issues/11265) 让模型自主管理配置与 MCP**
   对齐 OpenCode 的体验：直接对话安装/配置 MCP server，省去手动操作。反映“agent 自我配置”的普遍诉求。

10. **[#10600](https://github.com/can1357/oh-my-pi/issues/10600) advisor 建议在自治会话中延迟送达导致过期**
    自治长会话中 advisor 的 concern/nit 要等整个回合结束才送达，step 20 的建议在 step 80 才出现，失去纠偏价值。

---

## 四、重要 PR 进展（Top 10）

1. **[#13461](https://github.com/can1357/oh-my-pi/pull/13461) 修复 legacy bash shim 泄漏 spawn env 为工具输入**（review:p0）
   18.3.x 回归 bug：带 spawnHook 的扩展会把 `env` 字段误传为工具输入，属最高优先级修复。

2. **[#12763](https://github.com/can1357/oh-my-pi/pull/12763) Jev 分层模型路由**（review:p3）
   实现判断链路由：typed judgment 高置信时降级到便宜模型，任何失败模式都保留原模型——路由错误的不对称设计思路清晰。

3. **[#12993](https://github.com/can1357/oh-my-pi/pull/12993) 可复用 Profiles 系统** + **[#13309](https://github.com/can1357/oh-my-pi/pull/13309) 会话级设置层** + **[#13308](https://github.com/can1357/oh-my-pi/pull/13308) 单条目保存修复**
   @Vortex727 的 Profiles 三连 PR：一键切换 provider/agent 组合，配套会话级临时覆盖与配置写入粒度修复，直接回应多 provider 用户痛点。

4. **[#13459](https://github.com/can1357/oh-my-pi/pull/13459)（已合）修复 rewind 丢失批量工具结果**
   当天提 Issue #13458 当天修复合入——rewind 与 task 批量调用时转录被错误重写。

5. **[#13456](https://github.com/can1357/oh-my-pi/pull/13456)（已合）收窄 llama.cpp pre-3.8 Qwen 努力档位**
   同日修复 #13454：旧版 Qwen 广告了不生效的 thinking 档位，字节级请求完全相同。

6. **[#13463](https://github.com/can1357/oh-my-pi/pull/13463) 重试非阻塞 TTY 写入**（review:p1）
   `EAGAIN`/`EWOULDBLOCK` 时等待 `POLLOUT` 重试而非直接杀掉 writer，修复启动 Python/Cargo 时 omp 意外退出。

7. **[#9009](https://github.com/can1357/oh-my-pi/pull/9009) 回收孤儿浏览器调试器附件**（review:p1）
   relay 进程崩溃后 `chrome.debugger` 附件与 infobar 永久残留的问题修复，browser-relay 稳定性持续打磨。

8. **[#12314](https://github.com/can1357/oh-my-pi/pull/12314) 阻止 browser relay 劫持已打开标签页**
   无显式 `app.target` 时 agent 会静默接管人类正在用的 tab，本 PR 修复这一人机冲突。

9. **[#13440](https://github.com/can1357/oh-my-pi/pull/13440) 恢复 bracketed paste 模式并保留提交后文本**（review:p1）
   终端掉出 paste 模式后导致粘贴被拆分/丢失的两个问题一并修复。

10. **[#13455](https://github.com/can1357/oh-my-pi/pull/13455) macOS 上让 omp 不再出现在 Dock / 不产生僵尸终端窗口**
    agent 使用电脑时在 macOS 产生大量非活动终端窗口干扰用户，本地化体验修复。

---

## 五、功能需求趋势

1. **多模型智能路由**：判断模型路由（#12469、#12763、#13317 的 rotate/judge 策略）成为新热点，社区期望超越简单的顺序 failover。
2. **配置粒度细化**：per-model compaction 阈值（#6835）、per-skill 子代理模型（#13335）、Profiles 系统（#12993）——一切都在朝“每层可独立覆盖”演进。
3. **TUI 深度定制**：禁用内置状态栏（#1966）、自定义状态栏组件、bare `exit` 支持（#3850）。
4. **Agent 自主性增强**：模型自管理配置/MCP（#11265）、子代理工具作用域控制（#8599）、`/switch` 支持子代理（#8788）。
5. **Provider 生态扩展**：LiteLLM thinking 透传（#13407）、Bedrock 五档 effort（#13274）、OpenRouter xd:// 回放（#13352）——长尾 provider 兼容仍是持续战场。

---

## 六、开发者关注点

- **凭据与配额自愈**：凭据阻塞不自愈（#13343）、API key 串扰（#13260）、免费层鉴权（#12306）——多 provider 用户最痛的稳定性问题。
- **上下文成本**：缓存崩塌（#13336）与 compaction 阈值（#6835）直接关系 token 账单，讨论热度经久不衰。
- **Bash/工具安全性**：heredoc 反引号静默执行（#13307）属安全隐患；配合 rg shadowing（#13457）、glob limit 钳制（#13263）等，内置工具的边界行为是高频反馈区。
- **自治会话质量**：advisor 建议延迟过期（#10600）、子代理后台任务被误杀（#13305）、yield 值类型违反（#13448），说明长自治任务的可靠性打磨仍在路上。
- **修复响应速度**：今日多个 p2 bug（rewind、Qwen 档位）当天 Issue→PR→合并，维护节奏值得肯定。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*