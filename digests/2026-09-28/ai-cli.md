# AI CLI 工具社区动态日报 2026-09-28

> 生成时间: 2026-09-28 04:20 UTC | 覆盖工具: 11 个

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
**数据日期：2026-09-28**

---

## 1. 生态全景

AI CLI 工具已进入“可靠性攻坚期”——各工具基础能力（多模型、MCP、agent 循环）趋于同质，竞争焦点转向长会话稳定性、企业级安全审计和平台兼容性。同时，架构升级成为主旋律：Codex 重写为 Rust、OpenCode 推进 V2、Qwen Code 落地 Managed Agent 双路径、oh-my-pi 完成异步任务栈，均在为持久化、可恢复的多智能体架构铺路。Windows 和本地/自托管模型是两个普遍的质量洼地，几乎每个项目都在为此付出修复成本。

---

## 2. 各工具活跃度对比

| 工具 | 24h Issue 更新 | 24h PR 更新 | Release | 今日焦点 |
|---|---|---|---|---|
| Claude Code | 50 条 | 1 条 | 0 | 静默数据丢失 (#93482)、Windows/MCP 回归 |
| OpenAI Codex | 高（多 issue 40+ 评论） | 10+ 条 | **7 个 alpha** | Windows daemon 风暴、Linux 26.924 回归 |
| Gemini CLI | 摘要缺失 | — | — | 无法评估 |
| Copilot CLI | 50 条 | 1 条（疑似垃圾 PR） | 0 | 权限白名单、BYOK 缺陷 |
| Kimi Code CLI / DeepSeek Harness | 0 | 0 | 0 | 无活动 |
| OpenCode | 高（10+ 热点） | 10 条 | 0 | V2 稳定性、Basic Auth 401 |
| Qwen Code | 高（含 36 评论大讨论） | 10+ 条 | 0（nightly 失败） | Managed Agent 架构、凭据泄露 |
| DeepSeek TUI | 6 条 | 5 条合并 | 0（v0.10.1 集成中） | 修复周期收官、响应极快 |
| Pi | 26 条 | 5 条 | 0 | 性能退化、codemode+MCP 大 PR |
| oh-my-pi | 高（10 热点） | 10 条 | **3 个版本** | 遥测迁移、异步进度栈收尾 |

**观察**：Codex 与 oh-my-pi 是仅有的发布节奏密集的项目；Claude Code、Copilot CLI 呈“Issue 多、PR 少”的重反馈轻修复状态（可能开发在闭源侧）；Qwen Code、OpenCode、DeepSeek TUI 社区贡献质量高（Issue+PR 成对出现）。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **长会话/compaction 可靠性** | Claude Code (#82017, #94252)、Copilot CLI (#1571)、Pi (#10033, #10092)、OpenCode (#38851)、oh-my-pi (#12765) | 压缩丢上下文/技能、恢复即崩溃、过早压缩浪费窗口——全生态最大公约数痛点 |
| **静默失败与可观测性** | Claude Code (#93482, #97677)、oh-my-pi（图片静默丢弃）、DeepSeek TUI (#6689)、OpenCode (#51767) | “没有报错比报错更糟”，hooks/遥测需暴露真实执行状态 |
| **安全与凭据保护** | Claude Code (#94675, PR #97688)、Qwen Code (#12856, #12844)、DeepSeek TUI (#6684, #6685)、oh-my-pi (#13441) | 凭据泄露、hooks 防 prompt-injection、组织级审计穿透、git 写前置条件 |
| **MCP 兼容与健壮性** | Claude Code (#97616, #97707)、Copilot CLI (#4907, #4602)、OpenCode (#51743)、Codex (#48783)、Pi (PR #10040) | 工具名限制、静默丢弃、超大帧、失效 server 阻塞会话 |
| **权限分级/审批** | Copilot CLI (#1973, #179)、DeepSeek TUI (hooks 准入)、Claude Code（沙箱 ENV_SCRUB） | 只读操作免审批、危险操作单独管控 |
| **BYOK/本地模型** | Copilot CLI (#3709, #4950)、Pi (#9974)、OpenCode (DeepSeek 系列)、oh-my-pi (多账户) | 模型切换自由度、采样参数可配、llama.cpp/自托管容错 |
| **Windows/多平台质量** | Claude Code (3 项)、Codex (4 项)、OpenCode、oh-my-pi | 路径/转义、daemon、沙箱、构建链 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 企业级安全审计（PR #97688）、Cowork/多智能体、Skills 生态 | 付费企业用户、Bedrock 客户 | 闭源核心 + 开源 Issue 跟踪，生态绑定 Anthropic |
| **Codex** | 桌面应用 + daemon + 语音 + Browser Use，全形态覆盖 | OpenAI 订阅用户、Windows/Mac 桌面用户 | Rust 重写，alpha 高速迭代（24h 7 版） |
| **Copilot CLI** | 权限模型、GitHub 生态集成（worktree、managedSettings） | GitHub 重度用户、企业 | 开源 CLI + BYOK 扩展 |
| **OpenCode** | V2 服务化部署（serve）、多 provider/网关兼容 | 自托管团队、provider 多元化用户 | 开源、社区驱动、LSP/Formatter 服务化 |
| **Qwen Code** | Managed Agent 双路径、Runtime Broker、会话持久化与可恢复执行 | 架构前沿探索者、长时 agent 场景 | 开源、大容量 RFC 式社区协作（#12380 36 评论） |
| **DeepSeek TUI** | 轻量多 provider TUI、安全加固、并发安全 | 个人开发者、中文社区 | 单维护者高产，当日修复当日合并 |
| **Pi / oh-my-pi** | 扩展生态、本地模型、性能基准 | 极客、扩展开发者 | 开源 monorepo、breaking change 节奏快 |

---

## 5. 社区热度与成熟度

- **最活跃**：Claude Code、Codex（评论数/👍 数量级领先，反映用户基数最大）
- **快速迭代期**：Codex（7 alpha/日）、oh-my-pi（3 版本/日）、DeepSeek TUI（v0.10.1 冲刺）——功能扩张与回归并存
- **架构转型期**：OpenCode（V2）、Qwen Code（Managed Agent）——Issue/PR 讨论深度最高
- **成熟稳定但欠账累积**：Claude Code、Copilot CLI——PR 活动近乎停滞，长期 issue（#179 存活近一年、#82017、#25826 四个月）未解
- **维护精力风险**：DeepSeek TUI 单点维护；Kimi CLI、DeepSeek Harness 零活动

---

## 6. 值得关注的趋势信号

1. **“静默失败”成为信任头号杀手**：数据丢失、MCP 静默丢弃、图片静默丢弃、后台任务静默取消——多个项目同步收紧失败信号与审计路径（compaction reason 记录、hooks 执行回执、collector 穿透）。工具选型时应考察失败可观测性设计。
2. **会话持久化/可恢复执行是下一代架构共识**：Qwen Code 的 journal/ABANDONED 终态、oh-my-pi 的 broker 重启接管、Codex 的线程预热，均指向“长时运行、可断点续跑的 agent”。中间件式的状态管理（SQL Session Store、Runtime Broker）值得自研团队借鉴。
3. **企业安全边界精细化是付费方向**：组织级遥测穿透、hooks 消息来源区分、git 写前置条件、工作区信任模型——企业采购的差异化卖点正在形成。
4. **本地/自托管模型兼容性仍是二等公民**：llama.cpp、vLLM、DeepSeek 自托管在各工具中 bug 密集，BYOK 用户短期需有工程兜底预期。
5. **回归集中在发布密集窗口**：Codex 0.157、Claude Code 2.1.28x、Copilot 1.0.81 均为升级即坏。**生产环境建议锁定版本、滞后 1-2 个补丁再升级**，尤其 Windows 用户。
6. **多智能体 + 异步任务是下一个 UX 战场**：Bash 自动转后台、异步进度流式、A2A 协作 UI——人机交互正从“同步等待”转向“任务监督”。

---
*局限性说明：Gemini CLI 数据缺失，Kimi CLI、DeepSeek Harness 无活动，横向对比未覆盖；各工具 Issue 编号口径（开放/关闭）与统计窗口可能存在差异。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-09-28 | 来源：github.com/anthropics/skills**

> ⚠️ 说明：本期 PR 数据中评论数与点赞数均为空（数据缺失），无法按评论热度排序，以下排序综合 PR 主题在 Issues 中的讨论热度、更新活跃度与作者贡献记录得出。

---

## 一、热门 Skills 排行（PR）

| # | Skill / PR | 功能与讨论热点 | 状态 |
|---|---|---|---|
| 1 | **skill-creator 修复系列** — [PR #1298](https://github.com/anthropics/skills/pull/1298)、[PR #539](https://github.com/anthropics/skills/pull/539)、[PR #1681](https://github.com/anthropics/skills/pull/1681) | 修复触发评估（trigger evals）误报、Windows 兼容性、YAML 特殊字符校验、`package_skill.py` 独立执行报错等。skill-creator 是本期 Issues 中被投诉最多的组件（#556、#1383、#1394、#202），修复 PR 持续活跃至 9 月底 | OPEN |
| 2 | **mcp-builder** — [PR #1742](https://github.com/anthropics/skills/pull/1742) | 适配 `mcp>=2.0.0` 的 `streamable_http_client` 重命名与自定义 header 机制，修复 #1668。mcp-builder 的评估框架被 Issue [#1390](https://github.com/anthropics/skills/issues/1390) 报告“对任何真实 MCP server 评分均为 0/N”，评估可靠性是讨论焦点 | OPEN |
| 3 | **docx 修复系列** — [PR #541](https://github.com/anthropics/skills/pull/541)、[PR #1792](https://github.com/anthropics/skills/pull/1792)、[PR #1734](https://github.com/anthropics/skills/pull/1734) | 修复 OOXML 共享 ID 空间冲突导致文档损坏、LibreOffice 超时误报成功、孤立批注检测。docx 是社区使用频率最高、问题反馈最多的官方 Skill 之一 | OPEN |
| 4 | **blast-radius** — [PR #1776](https://github.com/anthropics/skills/pull/1776) | 批量/破坏性写操作前的安全检查清单（删数据、批量邮件、权限回收前“爆炸半径”评估），切中 Agent 安全这一核心焦虑，9 月新增即获关注 | OPEN |
| 5 | **md2video-audio** — [PR #1703](https://github.com/anthropics/skills/pull/1703) | Markdown → Marp 幻灯片 → 带拟真人配音的 MP4 视频，零成本自动化内容生产，代表“文档 → 多媒体”的新方向 | OPEN |
| 6 | **document-typography** — [PR #514](https://github.com/anthropics/skills/pull/514) | 解决 AI 生成文档的孤行、寡行段落、编号错位等排版问题，“用户不要求但影响每一次输出”的隐形刚需 | OPEN |
| 7 | **pyxel 复古游戏开发** — [PR #525](https://github.com/anthropics/skills/pull/525) | 像素游戏创建/调试/无头运行验证，由 Pyxel 作者本人提交，跨 6 个月仍持续更新（9 月下旬） | OPEN |
| 8 | **testing-patterns** — [PR #723](https://github.com/anthropics/skills/pull/723) | 覆盖 Testing Trophy、AAA、React Testing Library 等完整测试方法论，对应社区对“测试生成”方向的持续需求 | OPEN |

---

## 二、社区需求趋势（Issues 提炼）

1. **安全与信任边界**（最热）— [Issue #492](https://github.com/anthropics/skills/issues/492)（43 评论）：社区 Skill 冒用 `anthropic/` 命名空间造成信任滥用；配套诉求包括 blast-radius（#1776）、agent-governance（#412）、SharePoint 权限控制（#1175）等安全治理类提案。
2. **企业级分发与共享** — [Issue #228](https://github.com/anthropics/skills/issues/228)：组织内 Skill 共享库、直接分享链接，替代当前 Slack 手传 `.skill` 文件的原始方式。
3. **Skill 质量工程化** — 触发评估失灵（[#556](https://github.com/anthropics/skills/issues/556)）、benchmark 静默失败（[#1383](https://github.com/anthropics/skills/issues/1383)）、skill-quality-analyzer 元技能（PR #83）：社区希望 Skill 开发本身有可靠的测试与评测工具链。
4. **上下文效率** — [Issue #1487](https://github.com/anthropics/skills/issues/1487)：`claude-api` 单次注入 ~156k tokens 耗尽上下文；compact-memory 紧凑记忆符号（[#1329](https://github.com/anthropics/skills/issues/1329)）：减少 Skill/Agent 自身的 token 开销。
5. **文档与办公自动化** — ODT 支持（PR #486）、docx/pdf 系列修复、排版控制（PR #514）：办公文档 Skill 是使用量最大、迭代最频繁的赛道。

---

## 三、高潜力待合并 Skills

| PR | 内容 | 落地信号 |
|---|---|---|
| [#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder 修复 | 明确 Fixes #1668，9/27 刚更新 | 官方核心 Skill 修复，合并优先级高 |
| [#1792](https://github.com/anthropics/skills/pull/1792) docx 超时修复 | 修复静默失败 + 输出验证，9/25 更新 | 官方 Skill 缺陷修复，典型易合入 PR |
| [#1298](https://github.com/anthropics/skills/pull/1298) skill-creator 触发评估隔离 | 对应 3 个高热 Issues（#556/#1383） | 作者持续打磨至 9/16 |
| [#538](https://github.com/anthropics/skills/pull/538) pdf 大小写引用修复 | 单行级文档修复，合入阻力最小 | 老牌贡献者 @Lubrsy706 |
| [#541](https://github.com/anthropics/skills/pull/541) docx ID 冲突修复 | 修复真实文档损坏，根因分析清晰 | 同上，质量高 |
| [#1776](https://github.com/anthropics/skills/pull/1776) blast-radius | 契合安全热点，PR 描述精炼 | 新增但方向契合官方安全叙事 |

---

## 四、生态洞察

**社区最集中的诉求是：让 Skills 从“能用的提示词集合”升级为“可信的工程化组件”** —— 即解决命名空间信任/安全问题、补齐可复现的评测与触发验证工具链、并控制 Skill 注入对上下文窗口的侵蚀，三者共同指向 Skills 生态的企业级成熟度。

---

# Claude Code 社区动态日报 · 2026-09-28

## 1. 今日速览

今日无新版本发布，社区活跃度集中在 Issue 反馈（24 小时内更新 50 条）。数据丢失类 bug 成为焦点：**Cowork 的 `device_commit_files` 覆盖写入静默滞后一个提交**（#93482，14 条评论）风险最高。此外，多个平台稳定性问题持续发酵——Windows 斜杠命令选择器失效、macOS Bedrock 会话永久空闲、MCP 工具名超 64 字符导致会话永久死亡等。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 重要性 |
|---|-------|--------|
| 1 | [#93482](https://github.com/anthropics/claude-code/issues/93482) Cowork `device_commit_files` 覆盖写入时磁盘内容滞后一个提交，mtime 却更新（**数据丢失**，已标注 has repro） | 🔴 最严重的静默数据丢失 bug，14 条评论，涉及 Cowork 核心 |
| 2 | [#89398](https://github.com/anthropics/claude-code/issues/89398) Windows 桌面端斜杠命令选择器仅在 "/" 为首字符时弹出，但提交后命令仍执行 | 15 条评论、7 👍，UI 行为不一致，Windows 用户高频痛点 |
| 3 | [#92007](https://github.com/anthropics/claude-code/issues/92007) `/model opusplan` 报 "Unsupported model"，此前数月正常 | 12 👍，疑似服务端模型配置回归，影响付费用户工作流 |
| 4 | [#94252](https://github.com/anthropics/claude-code/issues/94252) Bedrock 会话在 kevent64 中永久空闲：tool_result 丢失 / compaction 卡死 / 队列输入未被消费（2.1.268–2.1.283） | 企业 Bedrock 用户稳定性核心问题，同作者相关 issue #94335、#94261 已关闭 |
| 5 | [#97616](https://github.com/anthropics/claude-code/issues/97616) ToolSearch 加载超 64 字符 MCP 工具名后，下一请求 400 且**会话永久死亡** | 回归类 bug，工具引用残留在历史中无法恢复 |
| 6 | [#94675](https://github.com/anthropics/claude-code/issues/94675) `UserPromptSubmit` 对 agent/系统注入消息也触发，payload 无 `prompt_source`/`is_meta` | 安全类：hooks 无法区分用户输入与注入内容，构成 prompt-injection 攻击面 |
| 7 | [#86092](https://github.com/anthropics/claude-code/issues/86092) `--resume <id> --bg` 未加 `--fork-session` 也会 fork 会话 | 与文档行为不符，影响后台会话管理，已复现 |
| 8 | [#97409](https://github.com/anthropics/claude-code/issues/97409) Windows Bash 工具把每对反斜杠减半后才传给 bash | Windows 路径/转义处理的基础性 bug，CLI 与桌面端均复现 |
| 9 | [#97730](https://github.com/anthropics/claude-code/issues/97730) 2.1.281 沙箱 `ENV_SCRUB` 拒绝 `$HOME/actions-runner`，自托管 GitHub Actions runner 上所有 Bash 调用失败 | CI/CD 集成场景直接被阻断，今日新增 |
| 10 | [#82017](https://github.com/anthropics/claude-code/issues/82017) compaction 续接的会话丢失 skill 清单，模型对全部技能“路由失明” | Skills 生态的核心缺陷，长期未修复 |

其他值得留意：#97685（Linux Cowork 无法注册设备，已关闭）、#97736（resume 后左箭头浏览 agents 意外 fork 会话）、#97677（VS Code 中插件 MCP server 被 claude.ai 同 URL connector 静默丢弃）。

---

## 4. 重要 PR 进展

过去 24 小时仅 1 条 PR 更新：

- **[#97688](https://github.com/anthropics/claude-code/pull/97688)** `sec-default: collector records continue past the user tier`
  由 @poteat 提交的安全增强：当组织层面启用 sec-default 时，用户插件将**无法丢弃或重写**发往 collector 的遥测记录——collector 的 `telemetry.log` 流现在与 `classic.*`、`settings.read` 一样穿透用户层。这是企业级审计/合规能力的重要补强。

*注：本期 PR 数量较少，故无法凑满 10 条，以上为全部有效 PR。*

---

## 5. 功能需求趋势

- **会话/Agent 生命周期管理**：fork 行为不受控（#86092、#97736）、resume/后台会话语义混乱，是反复出现的主题。
- **可观测性与安全审计**：#94675（hooks 需区分消息来源）、#78985（沙箱环境需允许测试登录流程）、PR #97688，反映企业用户对安全边界的精细化需求。
- **跨端体验一致性**：iPad 上本地 Remote Control 会话与云会话不可区分（#97734）、VS Code UI 改进（#95721 上下文指示器误触 /compact）。
- **Compaction/Skills 健壮性**：压缩后续接会话丢失技能清单（#82017）、compaction 卡死（#94261/#94252），长会话可靠性仍是短板。

---

## 6. 开发者关注点（痛点汇总）

1. **静默失败最伤信任**：数据丢失（#93482）、MCP server 静默丢弃（#97677）、hook 不触发（#97716）——用户反复强调“没有报错比报错更糟”。
2. **Windows 平台质量欠账明显**：今日热点中 Windows 相关 bug 占比最高（斜杠命令、反斜杠、Bash 沙箱、模型切换）。
3. **MCP 生态兼容性**：协议 2026-07-28 的 cache hints 校验过严（#88128）、64 字符工具名限制（#97616）、agent 内联 MCP 参数丢失（#97707），MCP 集成仍是回归高发区。
4. **CI/CD 与沙箱**：自托管 runner 布局与沙箱默认策略冲突（#97730），自动化场景需要更宽松/可配置的环境清理规则。
5. **企业/Bedrock 稳定性**：事件循环空闲且无错误输出的“假死”问题（#94252 系列）缺乏诊断手段，开发者希望有更明确的失败信号。

---

*数据来源：anthropics/claude-code（截至 2026-09-28）*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-09-28

---

## 📌 今日速览

Codex 团队发布节奏密集，24 小时内推出 7 个 alpha 版本（rust-v0.159.0-alpha 系列为主）。社区最突出的痛点集中在 **Windows 平台 daemon 引发的终端窗口闪烁问题**（多个 Issue 高赞聚集）以及 **Linux Desktop 26.924 版本回归导致的子进程回收失效**。同时团队合并了大量 TUI 打磨与稳定性修复 PR，包括 Windows 沙箱服务启动、MCP 状态发现优化等。

---

## 🚀 版本发布（7 个）

| 版本 | 说明 |
|---|---|
| rust-v0.159.0-alpha.12 | 最新 alpha，0.159 系列迭代最快 |
| rust-v0.159.0-alpha.11/10/9/8 | 0.159 系列连续推进 |
| rust-v0.158.0-alpha.15.4 / .3 | 0.158 分支补丁修复 |

> 团队明显在为 0.159 正式版收敛，0.158 分支仍在并行热修。0.157.x 的 Windows daemon 问题预计在新版中修复。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#48074](https://github.com/openai/codex/issues/48074) Windows daemon 导致终端窗口反复闪烁**（42 评论 / 79 👍）
   今日最高热度。安装 daemon 后每次请求都弹闪终端窗口，0.157.0 引入，影响大量 Windows 用户。

2. **[#48422](https://github.com/openai/codex/issues/48422) 每次会话/回合 shell 子进程弹出可见控制台窗口**（19 评论 / 23 👍）
   与 #48074 同源，确认是 daemon shell 子进程创建方式问题，Windows 体验严重受损。

3. **[#48043](https://github.com/openai/codex/issues/48043) CLI 0.157.0 在 Windows 因 daemon 权限错误无法启动**（24 评论 / 23 👍）
   0.156.1 正常、0.157.0 失败，升级即阻断性故障。

4. **[#48554](https://github.com/openai/codex/issues/48554) [Linux] Electron 运行时替换 libuv 的 SIGCHLD handler，子进程永不回收**（24 评论 / 14 👍）
   技术含量最高的报告：导致 shell env 超时、"Git is unavailable"、线程无法加载，26.924 版本严重回归。

5. **[#48397](https://github.com/openai/codex/issues/48397) [Linux] 26.924 回归：已有线程无法加载**（5 评论）
   9 月 25 日更新后即出现，与 #48554 疑似同根因，TUI 端正常、Desktop 端异常。

6. **[#48853](https://github.com/openai/codex/issues/48853) Windows daemon 安装 FSCTL_SET_REPARSE_POINT 报 os error 5**（今日新建）
   0.157.1 daemon 安装被拒绝访问，又一例 daemon 相关阻断问题。

7. **[#48624](https://github.com/openai/codex/issues/48624) [Linux] Codex 任务卡在 "Starting your task"**（4 评论，已找到临时方案）
   Linux Desktop 高频卡死问题，社区已给出 workaround。

8. **[#47996](https://github.com/openai/codex/issues/47996) [macOS] iTerm2 中 Cmd+C 无法复制选中的转录文本**（11 评论 / 10 👍）
   0.157.0 TUI 回归，影响基本工作流。

9. **[#28382](https://github.com/openai/codex/issues/28382) 请求增加“禁止自动消耗已购 Codex 额度”开关**（7 评论 / 28 👍）
   高赞功能需求：额度用尽时应暂停而非自动扣费，反映计费透明度诉求。

10. **[#25826](https://github.com/openai/codex/issues/25826) Windows Desktop 最大化窗口溢出到相邻显示器**（36 评论）
    长期未解的多显示器 UI 问题，持续活跃近 4 个月。

---

## 🔧 重要 PR 进展（Top 10）

1. **[#48829](https://github.com/openai/codex/pull/48829) 等待 Windows 沙箱服务启动（最多 5 秒轮询）** — 直接针对 Windows 沙箱初始化失败系列问题。
2. **[#48799](https://github.com/openai/codex/pull/48799) 修复 Windows 终端捕获的 SGR 鼠标上报** — ConPTY 鼠标事件翻译修复，改善 Windows TUI 交互。
3. **[#48812](https://github.com/openai/codex/pull/48812) 空闲线程历史感知预热** — `prewarm_with_history()` 复用历史响应，降低首轮延迟。
4. **[#48783](https://github.com/openai/codex/pull/48783) 单服务器 MCP 状态发现 + 线程连接复用** — 避免全量 inventory 发现，MCP 性能优化。
5. **[#48828](https://github.com/openai/codex/pull/48828) 允许归档首轮对话前的新线程** — 修复新线程归档报 missing-rollout 错误。
6. **[#48824](https://github.com/openai/codex/pull/48824) 语音 RTP 时间戳对齐 20ms 包** — 修复静音切换后音频被接收端拒绝的问题。
7. **[#48796](https://github.com/openai/codex/pull/48796) Guardian 熔断中断的可选结构化错误** — opt-in 兼容旧客户端的错误格式升级。
8. **[#48830](https://github.com/openai/codex/pull/48830) 简化 TUI 中断提示文案** — 中断回合改为次要样式短提示，UX 打磨。
9. **[#48805](https://github.com/openai/codex/pull/48805) 模态框打开时允许转录滚轮滚动** — 解决长计划确认时无法回看上下文的痛点。
10. **[#48772](https://github.com/openai/codex/pull/48772) 修复长符号链接路径下的 Unix socket 连接** — 超长路径时解析重试，提升远程/复杂环境稳定性。

其他值得一提：#48814（Mermaid 标点保留）、#48827（Ghostty/Kitty 手势指针）、#48807（短回合耗时显示）。

---

## 📈 功能需求趋势

- **Windows daemon 可靠性**：0.157 引入的 app-server daemon 是当前最大风暴中心（窗口闪烁、权限错误、安装失败），用户呼吁提供禁用 daemon 的开关。
- **Desktop 应用稳定性**：Linux 26.924 回归（SIGCHLD、线程加载）+ Windows 认证卡死（#48383）、管理员启动失败（#48421）。
- **计费/额度控制**：自动消耗购买额度的行为引发不满（#28382、#48010 扩展端额度显示不可用）。
- **Browser Use / Chrome 集成**：权限校验失败（#48573）、崩溃（#48449）、JSON 导航被拦截（#34983）持续有报告。
- **Remote SSH / 多机协同**：远程连接不启动（#48220）、本地额度耗尽殃及远程（#48599）、git.exe 风暴 OOM（#41982）。

---

## ⚠️ 开发者关注点

1. **暂缓升级 0.157.x（Windows 用户）**：daemon 相关问题集中且阻断性强，0.156.1 仍为安全版本；关注 0.158.0-alpha.15.4 补丁。
2. **Linux Desktop 26.924 存在严重回归**：如遇 "Git is unavailable" / 线程加载失败，参考 #48554 与 #48624 中的 workaround，等待修复版本。
3. **远程 MCP 配置**：失效的远程 MCP 服务器会阻塞新会话创建（#29376，约 40s 超时），建议清理失效配置。
4. **TUI 交互持续打磨**：近期 PR 密集改善 Ghostty/Kitty/Windows Terminal 兼容性，终端用户建议跟进 0.159 alpha 体验改进。

---
*数据来源：github.com/openai/codex | 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-28 | 数据来源：github.com/github/copilot-cli**

---

## 一、今日速览

过去 24 小时无新版本发布，社区活跃度集中在 Issues 讨论（50 条更新）。热点聚焦于三大方向：**权限白名单精细化控制**（#1973、#179 持续高热度）、**长会话稳定性问题**（认证失效、MCP 重连刷屏、压缩丢失上下文）以及 **BYOK/本地模型支持的多项缺陷**。桌面端（Desktop app）相关的新问题在本周密集出现，值得官方优先关注。

---

## 二、版本发布

无新版本发布（过去 24 小时）。

---

## 三、社区热点 Issues（Top 10）

1. **[#1973](https://github.com/github/copilot-cli/issues/1973) — 交互模式工具白名单**（👍29 | 💬13）
   最高热度需求：只读操作（grep、cat、git log）不应逐次审批，而 `/allow-all` 又会放行危险操作。社区强烈呼吁类似 Claude Code 的分级权限配置。

2. **[#1857](https://github.com/github/copilot-cli/issues/1857) — 取消排队中的消息**（👍29 | 💬12）
   Agent 忙碌时通过 `Ctrl+Q` 排队的消息无法撤销，只能眼睁睁等错误指令被执行。高频工作流痛点。

3. **[#4929](https://github.com/github/copilot-cli/issues/4929) — 进程级认证令牌停止刷新**（💬9）
   长时间运行后所有 prompt 报授权错误，`/login` 无法恢复，只能重启进程。今日仍在更新，疑似本周新出现的严重回归。

4. **[#3709](https://github.com/github/copilot-cli/issues/3709) — 单会话内切换多模型（含 BYOK/本地）**（👍33 | 💬8）
   `/model` 选择器不显示本地 BYOK 供应商的模型，会话被 `COPILOT_MODEL` 锁死。BYOK 用户核心诉求。

5. **[#4905](https://github.com/github/copilot-cli/issues/4905) — 桌面端会话数分钟即失效**（💬6）
   "GitHub credential registration no longer available" 导致 github-mcp-server 目录失效，桌面端稳定性问题的代表。

6. **[#2627](https://github.com/github/copilot-cli/issues/2627) — 可配置系统提示词，削减固定 token 开销**（👍21 | 💬6）
   系统提示词 + 工具定义在会话启动即占用约 3 万 token（200K 窗口的 ~15%），用户要求可裁剪。

7. **[#1613](https://github.com/github/copilot-cli/issues/1613) — 内置 git worktree 生命周期管理**（👍38 | 💬4）
   让 Copilot 自主创建/销毁 worktree 以隔离并行任务，👍 数最高的功能需求之一。

8. **[#179](https://github.com/github/copilot-cli/issues/179) — 全局配置允许的工具列表**（👍43 | 💬4）
   与 #1973 同源的权限主题，要求在 config.json 全局层面配置 allow 列表。2025 年的老需求至今仍活跃。

9. **[#4950](https://github.com/github/copilot-cli/issues/4950) — BYOK 强制 temperature=0 导致推理模型退化**（💬2）
   CLI 1.0.81+ 对自定义供应商硬编码贪婪采样参数，thinking 模型退化且上下文溢出时静默挂起。新近报出、影响面可能扩大。

10. **[#4907](https://github.com/github/copilot-cli/issues/4907) — MCP 重连通知刷屏会话历史**（💬3）
    空闲会话持续追加 "connecting…connected" 生命周期消息，污染上下文并触发不必要压缩。

---

## 四、重要 PR 进展

过去 24 小时仅 1 条 PR 更新：

- **[#3817](https://github.com/github/copilot-cli/pull/3817) — kCreate "#"**（OPEN，👍0）
  内容异常（标题与描述为无意义字符），疑似垃圾/测试 PR，建议维护者关闭。

> 本周期无有效代码合入活动，官方开发动向需关注后续 Release。

---

## 五、功能需求趋势

| 方向 | 代表 Issue | 热度 |
|---|---|---|
| **权限与安全配置** | #1973、#179 | 🔥🔥🔥 最高呼声：白名单/全局 allow 列表 |
| **BYOK 与多模型** | #3709、#4950、#3195 | 🔥🔥 模型切换自由度 + 采样参数可配 |
| **上下文与 token 效率** | #2627、#1571、#3703、#1697 | 🔥🔥 压缩质量、系统提示词瘦身、会话分叉 |
| **会话/任务管理** | #1857、#1613 | 🔥 消息队列控制、worktree 隔离 |
| **桌面端体验** | #4905、#4924 | 📈 近一周集中爆发的新问题域 |
| **MCP 生态健壮性** | #4602、#4838、#3125、#4623 | 📈 企业场景 + 工具列表动态更新 |

---

## 六、开发者关注点（痛点总结）

1. **长会话可靠性是最大痛点**：认证失效（#4929）、MCP 重连刷屏（#4907）、企业 managedSettings 失败导致 MCP 全部剥离（#4602）、压缩丢失正在执行任务（#1571）——长时间运行后“越用越不稳”是普遍体验。
2. **审批流程过重**：安全与效率的矛盾突出，社区明确要求只读操作免审批、危险操作单独管控。
3. **BYOK 体验尚不成熟**：模型锁定、采样参数硬编码、reasoning 字段解析缺失、vLLM 兼容性差，本地模型用户流失风险高。
4. **Token 经济性**：~15% 上下文被固定开销占用，重度用户对系统提示词可配置化的诉求强烈。
5. **桌面端质量问题抬头**：会话早死、worktree 中自定义 agent 扫描失败（#4924），桌面 App 1.1.x 版本需重点回归测试。
6. **交互细节打磨**：复制命令含不可见字符（#2285）、Markdown 链接未转 OSC 8（#2033）等终端渲染问题虽小但影响日常使用。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-28

## 一、今日速览

今日无新版本发布，但社区活跃度依然很高：V2 架构相关的 Bug 修复密集推进，多位贡献者（含 @gszep、@ccw751517015-hue）针对会话核心、TUI 交互提交了成对的高质量 Issue+PR。核心维护者 @jlongster 亲自提交了会话唤醒重试的修复，V2 稳定性成为当前主线。同时暴露出 Basic Auth 认证失败、模型目录加载失效等影响可用性的回归问题。

## 二、版本发布

过去 24 小时无新 Release。（注：#51773 显示发布流水线曾因 pinned 模型 `gpt-5.4` 访问被禁而失败，已切换至 `gpt-6-luna` 修复。）

## 三、社区热点 Issues

1. **[#45856](https://github.com/anomalyco/opencode/issues/45856) [OPEN] v2 serve：配置的 Basic Auth 凭证始终返回 401** — `opencode2 serve` 无法用环境变量配置的凭证登录，浏览器陷入无限登录提示，直接阻塞 V2 服务化部署，5 条评论持续追讨。
2. **[#17648](https://github.com/anomalyco/opencode/issues/17648) [CLOSED] 会话处理器无限指数退避重试，无最大重试数/熔断器** — 上游 LLM 瞬时错误导致无界重试，属于可靠性硬伤，9 条评论、6 👍，为本日讨论最多的 Issue。
3. **[#51739](https://github.com/anomalyco/opencode/issues/51739) [CLOSED] models.dev 目录对所有 Provider 均不生效** — 除内置 opencode provider 外全部报 `Model unavailable`，目录机制近乎失效，属高危回归。
4. **[#38851](https://github.com/anomalyco/opencode/issues/38851) [CLOSED] gpt-5.6-sol 下 compaction 在 30–35% 上下文即触发** — 过早压缩浪费大半上下文窗口，6 条评论，与 #51767 的 compaction reason 记录改进相关。
5. **[#50969](https://github.com/anomalyco/opencode/issues/50969) [OPEN] V2 /models 对话框无法切换模型收藏（V1→V2 回归）** — 3 条评论，已有对应 PR #51760，属典型的 V2 迁移语义漂移案例。
6. **[#48520](https://github.com/anomalyco/opencode/issues/48520) [OPEN] 库依赖的 console.* 输出污染 TUI 备用屏** — Ajv 编译第三方 MCP schema 时原始警告直接打到终端，破坏显示，涉及较深的输出流隔离设计。
7. **[#51759](https://github.com/anomalyco/opencode/issues/51759) [OPEN] [FEATURE] 项目级标签页 + 左侧面板按项目分组会话列表** — 4 条评论，多项目用户的核心 UX 痛点，反映对工作区管理的强烈需求。
8. **[#39204](https://github.com/anomalyco/opencode/issues/39204) [CLOSED] deepseek-v4-flash-free 每次工具调用后中断 agent 循环** — 4 👍，免费模型兼容性问题影响面广。
9. **[#28639](https://github.com/anomalyco/opencode/issues/28639) [CLOSED] npm 二进制 `.exe` 后缀泄漏至进程名（macOS/Linux）** — 自 v1.15.5 起 tmux 窗口标题显示 `opencode.exe`，5 条评论，打包链路问题。
10. **[#51764](https://github.com/anomalyco/opencode/issues/51764) [OPEN] Anthropic system updates 拒绝可恢复的工具历史** — 时间戳在 tool call 与 result 之间的系统更新被拒，同日即有修复 PR #51765，处理速度快。

> 值得一提：@ccw751517015-hue 单日提交 4 个 Issue（#51744–#51747），全部已关闭，覆盖 PID 复用误杀、Windows 硬链接静默失败、inbox 输入滞留、compaction 摘要校验过松——均为核心可靠性边界条件的深度报告。

## 四、重要 PR 进展

1. **[#51751](https://github.com/anomalyco/opencode/pull/51751) fix(core): 重试失败的会话唤醒** — 核心维护者 @jlongster 提交，修复 prompt 持久化入队后因 wake 失败而滞留的问题。
2. **[#46974](https://github.com/anomalyco/opencode/pull/46974) fix: 保持 revert 一致性** — 按会话串行化 revert 变更与 prompt 准入，合并 4 个历史 Issue/PR，长期 OPEN 中。
3. **[#51765](https://github.com/anomalyco/opencode/pull/51765) fix(ai): 推迟 system updates 至本地工具结果产出** — 解决 #51764 的 Anthropic 历史校验拒绝问题。
4. **[#51768](https://github.com/anomalyco/opencode/pull/51768) fix(ai): 保留 Gemini thought signatures（OpenAI Chat 工具调用）** — 修复 Gemini 兼容层下并行工具调用重放被 400 拒绝的问题，已 CLOSED。
5. **[#51760](https://github.com/anomalyco/opencode/pull/51760) fix(tui): 模型收藏不依赖已连接 integration** — 修复 `useConnected()` 语义变化导致 #50969 收藏失效。
6. **[#51743](https://github.com/anomalyco/opencode/pull/51743) fix(core): 超大 MCP stdio 帧报错而非关闭传输** — 本地 MCP 返回 >10 MiB 消息不再整个连接崩掉。
7. **[#51767](https://github.com/anomalyco/opencode/pull/51767) feat(core): 记录 overflow 作为 compaction 原因** — 区分 provider 拒绝过长与自身容量检查，改进可观测性，配合 #38851 排查。
8. **[#51549](https://github.com/anomalyco/opencode/pull/51549) fix: Provider 超时配置应用于 Cloudflare AI Gateway 模型**（已合并）— 修复超时参数落在 fetch wrapper 未覆盖网关模型的问题。
9. **[#51757](https://github.com/anomalyco/opencode/pull/51757) fix(tui): 修饰键点击超链接交由终端原生处理** — 消除授权链接打开双标签页的问题。
10. **[#51766](https://github.com/anomalyco/opencode/pull/51766) feat(tui): 再次粘贴时展开折叠的 paste 占位符**（已合并）— 对齐主流 CLI agent 的粘贴交互习惯。

## 五、功能需求趋势

- **V2 架构成熟化**：最主线方向。LSP/Formatter 服务移植（#38528）、TUI/Web 各类 V1→V2 回归修复占据大量篇幅。
- **多项目/会话管理**：项目级标签页（#51759）、后台会话 roster 视图（#39583）、跨项目会话搜索工具 oos（#50083）均指向同一诉求。
- **Provider 兼容性**：DeepSeek、Gemini thought signatures、Cloudflare AI Gateway、models.dev 目录等，社区对新模型/网关的接入质量要求提升。
- **可靠性工程**：重试上限/熔断（#17648）、compaction 触发策略与原因记录、进程退出窗口期数据一致性（#51746）。
- **国际化**：RTL 语言翻译补全（#34697）持续完善。
- **移动端 Web 体验**：Question 控件溢出（#51770）开始被关注。

## 六、开发者关注点

1. **V2 serve 安全配置不可用**：Basic Auth 401 问题未解（#45856），阻碍团队部署。
2. **Provider 目录与配额感知**：models.dev 失效（#51739）、模型余额无法暴露给插件（#51754）、Console relay 对 DeepSeek 参数组合返回 400（#48180），模型接入层碎片化痛点明显。
3. **TUI 输出健壮性**：第三方库 console 输出破坏备用屏（#48520）、`.exe` 进程名泄漏（#28639），打磨细节需求集中。
4. **Agent 循环稳定性**：弱模型单步即停（#39204）、`length` finish 无内容（#51741）、输入滞留 inbox——需要更多自动续跑与恢复机制。
5. **Windows 体验**：SchemaError 全工具失败（#39600）、硬链接跨盘静默失败（#51745）表明 Windows 路径仍是薄弱环节。
6. **MCP 超时与帧限制**：5 分钟超时上限（#39584）、10 MiB 帧限制，长任务 MCP 场景受限。

---
*数据来源：github.com/anomalyco/opencode · 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-28

## 1. 今日速览

今日无新版本发布，但昨晚 nightly 发布流程再次失败（#12880），v0.24.6 的 ripgrep 执行位问题（P1）已出现修复 PR（#12892）。Managed Agent 双路径架构（#12380，36 条评论）仍是社区讨论焦点，围绕 Stage B/D 及 Runtime Broker 的恢复性设计持续推进。安全方面发现辅助模型选择器会明文泄露 baseUrl 中的凭据（#12856）。

## 2. 版本发布

过去 24 小时无正式 Release。夜间版本 `v0.24.6-nightly.20260927.3f5ae3ffeb` 发布失败（integration_none 任务），追踪于 [#12880](https://github.com/QwenLM/qwen-code/issues/12880)。

## 3. 社区热点 Issues

| # | Issue | 关注理由 |
|---|---|---|
| 1 | [#12380](https://github.com/QwenLM/qwen-code/issues/12380) Managed Agent 双路径架构提案（36 评论） | 社区最大讨论主线：定义分阶段交付的 Managed Agent 架构，Session 持久化所有权、Workspace 绑定、可恢复工具执行 |
| 2 | [#12679](https://github.com/QwenLM/qwen-code/issues/12679) 全局安装后 vendored ripgrep 缺失执行位（P1，ready-for-human） | 影响全新安装用户的基础可用性，自更新修复路径也不覆盖，修复 PR #12892 已提交 |
| 3 | [#12826](https://github.com/QwenLM/qwen-code/issues/12826) Webview 因 CodeMirror EditorView.update 竞态崩溃（P1，已关闭） | Remote-SSH 下使用 @file 引用即触发，0.24.6 高频 UI 崩溃 |
| 4 | [#12856](https://github.com/QwenLM/qwen-code/issues/12856) 辅助模型选择器持久化 NUL 分隔 baseUrl，凭据随所有公开表面泄露 | 安全问题：`https://user:sk-...@host` 形式的 baseUrl 含凭据被原样输出，修复见 PR #12862 |
| 5 | [#12737](https://github.com/QwenLM/qwen-code/issues/12737) ACP Bridge Stage B：Legacy 与 Managed 双引擎宿主集成（9 评论） | wenshao 主导，让普通 `qwen serve` 宿主真正使用双引擎能力 |
| 6 | [#12835](https://github.com/QwenLM/qwen-code/issues/12835) 排除 Skill 工具后 Skills 列表仍被注入（ready-for-agent） | 无谓占用上下文预算，与上下文性能路线图相关，修复 PR #12838 已就绪 |
| 7 | [#12859](https://github.com/QwenLM/qwen-code/issues/12859) fastjson2 2.0.65 负刻度 BigDecimal JDBC 持久化后不可读 | 重现 #12798 刚修复的不可读行不变量，Runtime Broker 数据一致性风险 |
| 8 | [#12844](https://github.com/QwenLM/qwen-code/issues/12844) `qwen mcp reconnect` 在禁用统计时仍上传 session_start 事件 | 隐私违规：用户明确 opt-out 后仍有遥测外发，修复 PR #12857 |
| 9 | [#12766](https://github.com/QwenLM/qwen-code/issues/12766) Runtime Broker 重启后无法接管或退役本地 worker | 可恢复的本地进程供给是 Managed Agent 落地的关键缺口，配套 PR #12865 |
| 10 | [#12889](https://github.com/QwenLM/qwen-code/issues/12889) Deferred tool_call schema 允许必填字段为空 | 工具调用校验漏洞，模型可传入空参数绕过必填字段，已 ready-for-human |

其他值得关注：[#12670](https://github.com/QwenLM/qwen-code/issues/12670)（主机重启后 LOST 绑定永久卡死）、[#12874](https://github.com/QwenLM/qwen-code/issues/12874)（macOS 右侧面板无法关闭，修复 PR #12876）。

## 4. 重要 PR 进展

1. **[#12892](https://github.com/QwenLM/qwen-code/pull/12892)** — 在运行时选择 vendored ripgrep 时恢复执行位（chmod 0755），直接修复 P1 安装问题 #12679
2. **[#12862](https://github.com/QwenLM/qwen-code/pull/12862)** — 从辅助模型选择器对外输出中清洗 userinfo 凭据，修复安全问题 #12856
3. **[#12848](https://github.com/QwenLM/qwen-code/pull/12848)** — 为 Hosted Workspace 增加门控的前台 Shell 轮次，完整 stdout/stderr 存入 SQL Session Store
4. **[#12851](https://github.com/QwenLM/qwen-code/pull/12851)** + **[#12858](https://github.com/QwenLM/qwen-code/pull/12858)** — A2A 1.0 访问与 Web Shell 协作 UI，为持久化 workspace agents 提供任务发现/取消/重试与共享聊天
5. **[#12865](https://github.com/QwenLM/qwen-code/pull/12865)** / **[#12869](https://github.com/QwenLM/qwen-code/pull/12869)** — Broker 重启后采用持久化本地 worker、可信重启后恢复 Workspace holder（W0e-3）
6. **[#12839](https://github.com/QwenLM/qwen-code/pull/12839)** — W0e 终态恢复围栏：journal 丢失的执行可进入不可变 `ABANDONED` 状态，不伪造工具结果
7. **[#12883](https://github.com/QwenLM/qwen-code/pull/12883)**（已关闭）— M3 严格配置快照与 Managed 兼容性评估，会话切到 Managed 引擎前的预检
8. **[#10183](https://github.com/QwenLM/qwen-code/pull/10183)** — Auto Memory 结构化按需召回，前置 PR 已合并，本 PR 进入收尾阶段（评审债转至 #12853）
9. **[#12891](https://github.com/QwenLM/qwen-code/pull/12891)** — 主 CLI 集成 Mem0（opt-in），自动注册 MCP server 并提供稳定 scope
10. **[#12838](https://github.com/QwenLM/qwen-code/pull/12838)** / **[#12857](https://github.com/QwenLM/qwen-code/pull/12857)** / **[#12876](https://github.com/QwenLM/qwen-code/pull/12876)** — 分别修复 Skills 注入、遥测 opt-out、macOS 面板关闭三个热点 bug

## 5. 功能需求趋势

- **Managed Agent / 多智能体架构**：绝对主线，Issue/PR 中占比最高（#12380 系列的 Stage B/D、W0e、H0a/H0b、M3），围绕会话持久化、执行可恢复性、公开 API 契约展开
- **上下文与内存优化**：Auto Memory 结构化召回（#10151/#10183）、Mem0 集成（#12891）、32K 上下文预算的自定义 provider 指南（#12886）、Skills 注入裁剪（#12835）
- **平台分发覆盖**：Linux aarch64 Desktop 构建（#12806）、安装打包质量（#12679、#12829）
- **Web Shell / Desktop UX**：消息引用到输入框（#12682）、屏幕抖动（#12890）、面板交互（#12874）
- **隐私与遥测合规**：opt-out 尊重（#12844）、NO_PROXY 语法对齐（#12852）

## 6. 开发者关注点

- **安装与发布可靠性**是当前最大痛点：P1 的 ripgrep 执行位问题、连续失败的 nightly 发布、cua-sdk 不走代理的下载失败，均直接影响新用户上手
- **凭据与隐私安全**：baseUrl 凭据泄露（#12856）与禁用统计后仍上报（#12844）说明配置面扩大后 egress 路径缺乏统一的凭据/隐私审计
- **上下文预算紧张**：32K 小上下文模型用户要求可裁剪初始工具/系统负载
- **数据一致性与可恢复性**：Runtime Broker 的 BigDecimal 边界、重启后 worker 接管、LOST 绑定等边角场景持续暴露，反映出社区对长时间运行 agent 的稳定性要求很高
- **UI 细节体验**：Desktop/Web Shell 的崩溃竞态、面板交互、屏幕稳定性等小但高频的问题持续累积

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (Codewhale) 社区动态日报 — 2026-09-28

## 1. 今日速览

今日无新版本发布，但 v0.10.1 的集成 PR（#6672）已开启，标志着一次集中修复周期的收官。过去 24 小时内维护者 @Hmbown 高产修复并关闭了 5 个 PR，覆盖 exec 大提示词、OpenRouter 计费、首次启动路由等关键问题。社区新增 3 条 Issue，其中 exec 的 E2BIG 限制问题在当天即被修复关闭，响应速度极快。

## 2. 版本发布

过去 24 小时无新 Release。v0.10.1 正通过集成 PR [#6672](https://github.com/Hmbown/Codewhale/pull/6672) 整合已就绪的修复，预计近期发布。

## 3. 社区热点 Issues

1. **[#6688](https://github.com/Hmbown/Codewhale/issues/6688) exec 只接受 argv 传 prompt，超 ~128 KiB 即 E2BIG** — 实测确认 Linux 单参数上限 131071 字节，长 prompt 场景完全不可用。**当天由 PR #6692 修复（新增 `--prompt-file` / stdin 支持）**，是今日响应最快的问题。
2. **[#6690](https://github.com/Hmbown/Codewhale/issues/6690) v0.10.0 OpenRouter 会话成本永远显示 "rate unavailable"** — `~` 别名模型 ID 导致 provider-lake 刷新失败，计费链路断裂，影响所有 OpenRouter 用户。已由 PR #6691 修复。
3. **[#6573](https://github.com/Hmbown/Codewhale/issues/6573) 多 TUI 会话争抢 Subagents Store 导致 CPU 空转** — 空闲进程打满 CPU 的性能级 bug，疑似跨平台，是当前最严重的运行时问题之一，尚待修复。
4. **[#6695](https://github.com/Hmbown/Codewhale/issues/6695) 新增 Tsubasa provider 预设描述符** — 通过现有兼容传输即可支持，作者主动请求维护者确认后再开发，是社区贡献流程的良好范例。
5. **[#6689](https://github.com/Hmbown/Codewhale/issues/6689) hooks: 向 `tool_call_after` 导出准入后执行回执** — hook 目前拿不到 admission/重写后的**实际执行命令**，安全隐患与审计需求并存。
6. **[#6546](https://github.com/Hmbown/Codewhale/issues/6546) 待办列表无法清理/删除** — 从 0.9.11 起跨版本存在的可用性问题，macOS 用户多次尝试无果，说明 TUI 交互引导有缺口。

> 今日活跃 Issue 共 6 条，已全部列出。核心信号：exec/计费类问题响应极快，多会话资源争抢和 hooks 可观测性是遗留重点。

## 4. 重要 PR 进展

1. **[#6672](https://github.com/Hmbown/Codewhale/pull/6672) v0.10.1 集成 PR** — 将所有就绪 PR 合并统一跑 CI，避免 CHANGELOG 冲突反复重跑，发布流程工程化的典型做法。
2. **[#6692](https://github.com/Hmbown/Codewhale/pull/6692) ✅ fix(exec): 支持 `--prompt-file` / stdin 传入 prompt** — 解决 #6688 的 E2BIG 限制，当日提出当日修复。
3. **[#6691](https://github.com/Hmbown/Codewhale/pull/6691) ✅ fix(pricing): OpenRouter 按 lake 与声明费率计费** — 单条坏行不再拖垮整个 `/v1/models` 刷新。
4. **[#6694](https://github.com/Hmbown/Codewhale/pull/6694) ✅ fix(tui): 首次启动直达已配置路由** — 不再弹出 provider picker 并错误高亮 DeepSeek 默认项。
5. **[#6696](https://github.com/Hmbown/Codewhale/pull/6696) ✅ fix(tui): 切换 provider 到需 key 路由时清除 launch 缺 key 状态** — 根因定位到 tmux 全局环境变量泄漏，诊断过程值得借鉴。
6. **[#6687](https://github.com/Hmbown/Codewhale/pull/6687) fix(tui): 首次启动不劫持配置去用本地 Ollama** — 修复“配置了 OpenAI 兼容端点却跑 `qwen3:4b`”的严重路由错误。
7. **[#6684](https://github.com/Hmbown/Codewhale/pull/6684) fix(rlm): RLM 回合纳入子进程 wall-clock 预算** — 此前 `turn_timeout()` 返回 None，卡死模型可无限占用回合。
8. **[#6685](https://github.com/Hmbown/Codewhale/pull/6685) fix(tui): anchors/notes/registry 统一经受限 open 读取** — 安全加固：工作区文件不可经符号链接逃逸，pinned anchors 仅在可信工作区读取。
9. **[#6648](https://github.com/Hmbown/Codewhale/pull/6648) runtime_api: git 写操作支持可选前置条件** — 防止 stage/discard 提交用户未审查的字节，多窗口并发安全的重要补强。
10. **[#6682](https://github.com/Hmbown/Codewhale/pull/6682) fix(tui): `/undo` 作用域限定在被撤销步骤改动的路径** — 替换全树 restore，大幅降低误撤销风险。

## 5. 功能需求趋势

- **Provider 生态扩展**：#6695（Tsubasa 预设）、#6690（OpenRouter 别名模型）显示社区对“开箱即用”的多 provider 支持需求旺盛。
- **非交互/exec 场景成熟度**：#6688 反映 CLI 大规模自动化场景（超长 prompt）是重度用户刚需。
- **Hooks 可观测性与审计**：#6689 要求暴露真实执行命令，指向企业级安全审计方向。
- **TUI 基础可用性**：待办管理（#6546）、thinking 标签显示（#6686）、Ctrl+T 切换（#6667）等细粒度交互打磨需求持续存在。
- **文档国际化**：#5482 EPIC 下的中文文档 Tier-2/3 翻译（PR #6662/#6663）接近完成，中文社区投入显著。

## 6. 开发者关注点

1. **多会话/多窗口并发安全**是当前最大痛点：CPU 空转（#6573）、git 并发写竞态（#6648）、线程快照所有权（#6660）均属此类。
2. **首次启动体验脆弱**：provider 路由被环境变量或本地 Ollama 劫持（#6687/#6694/#6696），三个 PR 才收敛，说明初始化路径需要系统性测试。
3. **计费透明度**：OpenRouter "rate unavailable" 直接影响成本可观测性，社区对此类回归零容忍。
4. **安全边界收紧进行中**：受限文件 open、undo 作用域、git 前置条件等 PR 表明维护者在主动加固工作区信任模型。
5. **发布流程瓶颈**：CHANGELOG 冲突导致 CI 反复重跑，v0.10.1 集成 PR 是对此的流程性回应，值得其他项目参考。

---
*数据来源：github.com/Hmbown/DeepSeek-TUI | 生成时间：2026-09-28*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-09-28

## 📌 今日速览

今日无新版本发布。社区活跃度较高，过去 24 小时共更新 26 条 Issues 和 5 条 PR，其中新提交的 Issues 集中在性能退化（会话创建延迟、渲染开销）、TUI 稳定性（TTY EIO 崩溃）和扩展生态体验上。mitsuhiko 的大型 PR #10040（Codemode + MCP 支持）持续引发讨论，是本周最受关注的功能性变更。

---

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues（Top 10）

1. **#10031 [CLOSED] ESC 中断思考后 Pi 间歇性卡死在 "Working..."**
   影响面最广的 bug 之一，自 v0.84.0 起持续约一个月，多台机器可复现，16 条评论，只能靠 Ctrl+C 退出后 `pi -c` 恢复。已关闭（no-action）。
   🔗 earendil-works/pi Issue #10031

2. **#10092 [CLOSED] compaction 持久化缺少 cost 字段导致恢复会话时 footer 崩溃**
   Crash-on-resume 级别问题：provider 未返回 `usage.cost` 时直接透传落盘，TUI 渲染 footer 即崩溃。0.87.1 版本受影响。
   🔗 earendil-works/pi Issue #10092

3. **#10101 [CLOSED] AGENTS.md 被读取但从未注入系统提示词**
   strace 证实资源加载器打开了文件并完成了完整祖先目录遍历，但 `usage.cacheRead` 显示内容未进入系统提示——所有模式下 AGENTS.md 实际失效。
   🔗 earendil-works/pi Issue #10101

4. **#10105 [CLOSED] 每次新建会话重新加载全部扩展：4s → >280s**
   34 个 packages、70+ 扩展的环境下，`new_chat` 每次付出完整扩展加载成本且在长驻进程中持续累积。与 #10104（会话创建延迟 15.5s → >140s）为同环境姊妹报告，性能类问题的典型代表。
   🔗 earendil-works/pi Issue #10105 / #10104

5. **#10110 [CLOSED] 关闭终端/断开 SSH 时 read EIO 触发未捕获崩溃**
   tmux/zellij pane 被杀、SSH 断开等日常场景导致 `uncaughtException`，应视为终端死亡优雅退出。体验类高频痛点。
   🔗 earendil-works/pi Issue #10110

6. **#10033 [OPEN] 压缩提示词包含全部 thinking 文本，撑爆上下文窗口**
   `serializeConversation()` 将完整 thinking 块写入总结提示词，导致长会话 + 推理模型（如 DeepSeek V4.1）下自动压缩永远失败。核心架构级问题。
   🔗 earendil-works/pi Issue #10033

7. **#8810 [OPEN] 扩展注册的 provider 被间歇性忽略，回退到其他默认模型**
   扩展通过 `pi.registerProvider()` 注册后，新会话偶发不遵守 `defaultProvider/defaultModel` 配置，静默切换模型，影响计费与行为可预测性。
   🔗 earendil-works/pi Issue #8810

8. **#9974 [OPEN] llama.cpp 的 Responses API 工具调用被重复且损坏地执行**
   SSE 流解析对 llama.cpp 返回的 function_call 处理不当，造成重复/损坏调用，本地推理用户受阻。
   🔗 earendil-works/pi Issue #9974

9. **#7739 [OPEN] 设定启动时间预算，对标 jcode 的延迟与内存**
   社区持续施压启动性能：benchmark 显示与 jcode 存在可量化差距，诉求是建立明确预算并逐版本收敛。
   🔗 earendil-works/pi Issue #7739

10. **#9905 [OPEN] Anthropic thinking.display 被硬编码为 "summarized" 且 CLI 无法修改**
    类型定义只允许 `"summarized" | "omitted"`，用户无法控制思考内容的展示策略，限制了高级用法。
    🔗 earendil-works/pi Issue #9905

---

## 🔀 重要 PR 进展

> 今日仅 5 条 PR 更新，按重要性排列：

1. **#10040 [OPEN] feat: Codemode 与 MCP 支持**（@mitsuhiko）
   近期最重磅的功能 PR：一次性引入 codemode 与 MCP。动机是让 Jev 等模型获得良好的沙箱执行环境。体量大，社区对 MCP 纳入态度存在分歧。
   🔗 earendil-works/pi PR #10040

2. **#8572 [OPEN] feat: Amazon Bedrock Mantle API 支持**（@cristinaponcela）
   Amazon 新增的 Mantle API 面（含 openai.gpt-5.x 模型）此前被错误路由至 Converse 而报 Validation error，此 PR 补齐支持。仍为 WIP，等待 API 权限做 e2e 测试。
   🔗 earendil-works/pi PR #8572

3. **#10100 [CLOSED] fix: 保留仅含签名的 reasoning detail 增量**（@Serenity-2026）
   修复 Claude via OpenRouter 流式输出中 `reasoning.text` 只含 `signature` 无 `text` 时签名丢失的问题——签名丢失会导致后续 turn 被拒。
   🔗 earendil-works/pi PR #10100

4. **#10113 [CLOSED] shell 输出截断时保留关键行**（@arjunkshah12345-hash）
   bash/PowerShell 输出只保留尾部 2000 行/50KB，此 PR 让截断结果中的关键行（借助压缩 API）仍能被模型看到，提升长输出场景的工具可用性。
   🔗 earendil-works/pi PR #10113

5. **#10099 [CLOSED] 无关 PR（Git 课程作业）**
   学生实验提交，与项目无关，已关闭。维护者需注意仓库被用作教学目标的问题。
   🔗 earendil-works/pi PR #10099

---

## 📈 功能需求趋势

1. **性能与资源占用**：最强烈的信号。启动延迟（#7739）、会话创建成本（#10104/#10105）、压缩期内存尖峰（#9010）、流式渲染每帧开销随会话增长（#10102）多条 issue 共振。
2. **扩展生态与可编程性**：扩展无法持久化 API key 到 auth.json（#7658）、`ModelRuntime.create()` 缺少 `authContext` 透传（#10112）、扩展注册 provider 配置失效（#8810）。
3. **多 Provider / 本地模型兼容**：llama.cpp 工具调用（#9974）、跨 provider 工具调用 ID 冲突（#10106）、代理错误重试识别（#9735）。
4. **TUI 体验打磨**：主题无法关闭粗体（#10111）、outputPad 对 CMD 模式无效（#9946）、/bug 外部编辑器丢失大段粘贴（#10103）。
5. **MCP 与沙箱执行**：PR #10040 代表的 codemode + MCP 方向，为非主流模型提供确定性执行环境。

## ⚠️ 开发者关注点（痛点总结）

- **长会话稳定性**：压缩失败（#10033）、恢复即崩溃（#10092）、卡死（#10031）集中出现在长会话场景，是当前最高优先级的质量风险。
- **本地/自托管模型支持是薄弱环节**：llama.cpp、DeepSeek 自托管等场景 bug 密集，重试与流解析逻辑对非官方实现容错不足。
- **进程生命周期管理**：扩展重复加载、TTY 异常、终端断开等生命周期事件处理粗糙，长驻进程（如 pi-web-ui 服务端）问题被放大。
- **API 表面不一致**：`pi-ai` 与 `pi-coding-agent` 之间选项暴露不同步（authContext），扩展开发者被迫绕路。

---
*数据来源：github.com/earendil-works/pi · 统计窗口：2026-09-28 前后 24 小时*

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报 · 2026-09-28

## 📌 今日速览

oh-my-pi 今日发布 **v18.4.0**，将遥测命名空间迁移至 `omp.*`，并调整了凭证轮换 API（Breaking Change）。社区方面，**Debian 13 完全无法启动**（p1）和**纯文本主模型丢弃粘贴图片**两大高优先级 bug 引发热议；异步进度系列 PR（#9368–#9374）持续推进，同时 `omp usage` 不识别扩展注册的用量提供方的问题已被快速修复。

---

## 🚀 版本发布

**v18.4.0**（今日发布）
- `pi-agent-core`：遥测属性命名空间从 `pi.*` 迁移至 `omp.*`
- `pi-ai` ⚠️ Breaking：`LimitsApi.rotate()` 改为返回 `CredentialRotation` 对象（`{ switched, afterSiblingWait? }`），不再返回布尔值

**v18.3.5** / **v18.3.4**（近24小时内）
- `pi-ai` ⚠️ Breaking：移除流级 Anthropic prompt-cache 保活机制（`anthropicCacheRefresh` 等），缓存预热移至编码代理会话级
- `pi-ai` Fix：Anthropic OAuth 请求输出上限从 64k 恢复至模型完整上限（Opus 5.5 为 128k），与 Claude Code 及 API key 行为对齐
- `pi-coding-agent` ⚠️ Breaking：替换 `task` 工具的 `complexity` 字段

---

## 🔥 社区热点 Issues

1. **#13441**（CLOSED，11 评论）[非自愿 Jev 调用](https://github.com/can1357/oh-my-pi/issues/13441) — 用户从未登录或授权，agent 却调用了 Jev 服务，涉及 auth/隐私安全问题，讨论热度最高，已关闭。

2. **#3850**（OPEN，11 评论）[支持裸 `exit`/`quit` 退出 TUI](https://github.com/can1357/oh-my-pi/issues/3850) — 经典 UX 诉求，长期开放，社区持续讨论中（标记 wontfix 但仍有互动）。

3. **#13480**（OPEN，p2，7 评论）[纯文本主模型静默丢弃粘贴图片](https://github.com/can1357/oh-my-pi/issues/13480) — 回归 bug：`modelRoles.vision` 路由失效，图片未送达模型，影响混合模型架构用户。

4. **#4614**（OPEN，7 评论）[会话级选择活跃 ChatGPT 账户](https://github.com/can1357/oh-my-pi/issues/4614) — 多账户场景下缺少手动切换入口，多账户用户的核心痛点。

5. **#13525**（CLOSED，p1，6 评论）[Debian 13 上完全无法启动](https://github.com/can1357/oh-my-pi/issues/13525) — 无输出、忽略 ^C、单核 100% 占用，p1 级启动崩溃，已修复关闭。

6. **#13579**（OPEN，p2，5 评论）[`omp usage` 忽略扩展注册的用量提供方](https://github.com/can1357/oh-my-pi/issues/13579) — 生态扩展性问题，第三方提供方账户被错误归入无用量列表；对应修复 PR #13581 当天已提交。

7. **#13493**（CLOSED，p1，5 评论）[Nix 构建失败、构建耗时 10 分钟以上](https://github.com/can1357/oh-my-pi/issues/13493) — 影响 NixOS 部署路径，已关闭。

8. **#13470**（CLOSED，p2，5 评论）[Windows 上 `omp update` 成功却报错退出码 1](https://github.com/can1357/oh-my-pi/issues/13470) — #13373 引入的回归，误报"未完成"，已修复。

9. **#13345**（OPEN，p3，5 评论）[`task` 子代理持续调用错误模型](https://github.com/can1357/oh-my-pi/issues/13345) — task agent 模型配置存在多处定义、切换不生效，与 v18.4.0 中 task 工具改动直接相关。

10. **#7061**（OPEN，5 评论）[agent `tools:` 白名单静默丢弃未知工具名](https://github.com/can1357/oh-my-pi/issues/7061) — 配置错误无警告且 `write`/`hub` 意外获得授权，兼具可用性与安全隐患。

---

## 🔀 重要 PR 进展

1. **#13468** [feat(tui): Ctrl+S 暂存提示词草稿](https://github.com/can1357/oh-my-pi/pull/13468) — 对齐 Claude Code 行为，保留光标、Vim 模式与折叠粘贴，支持草稿互换。
2. **#13581** [fix: `omp usage` 加载扩展用量提供方](https://github.com/can1357/oh-my-pi/pull/13581) — 当天响应 Issue #13579 的快速修复。
3. **#13530** [fix(utils): 恢复以其他错误形式暴露的损坏 SQLite 存储](https://github.com/can1357/oh-my-pi/pull/13530) — 解决 `agent.db` 损坏导致启动即崩的问题。
4. **#12765** [fix(plan): 压缩失败执行控制](https://github.com/can1357/oh-my-pi/pull/12765) — 新增 `plan.executeAfterCompactionFailure` 选项，压缩失败时可保留上下文不派发执行回合。
5. **#9372** [feat: Bash 命令自动转后台](https://github.com/can1357/oh-my-pi/pull/9372) — `async: "auto"`：超时后同一进程（不重启）晋升为后台任务，异步进度系列（Stack 5/7）核心。
6. **#9370** [feat: 监管进程输出流式传输 v4 协议](https://github.com/can1357/oh-my-pi/pull/9370) — 订阅先于进程启动注册，重连保序（Stack 3/7）。
7. **#9374** [feat(tui): TUI 中展开异步进度](https://github.com/can1357/oh-my-pi/pull/9374) — 折叠进度块 + Ctrl+O 查看完整 3000 字节预览（Stack 7/7，系列收尾）。
8. **#9368** [fix: 保持已接受的 broker socket 存活](https://github.com/can1357/oh-my-pi/pull/9368) — 修复认证进行中 socket 被空闲关闭的问题（Stack 1/7，review:p1）。
9. **#9925** [feat(tui): 编辑器 Redo](https://github.com/can1357/oh-my-pi/pull/9925) — 补齐 undo/redo 往返能力，修复误撤销不可恢复的痛点。
10. **#13133** [fix(brush-core): 从已删除的 cwd 恢复](https://github.com/can1357/oh-my-pi/pull/13133)（CLOSED/已合并）— 目录被删不再导致 shell 整场会话瘫痪。

---

## 📈 功能需求趋势

- **异步/后台任务体验**：异步进度系列 7 个 PR 持续推进，是当前最活跃的功能主线（Bash 自动后台、进度流式、Hub monitor）。
- **多账户与凭证管理**：ChatGPT 账户切换（#4614）、凭证轮换（#13555）、SuperGrok 多账户负载均衡（#13136）反映多提供方用户诉求集中。
- **新模型/图像能力**：gpt-image-2.5 支持（#11322）、vision 路由修复（#13480）、OpenRouter 图片读取（#13486）。
- **TUI/UX 打磨**：草稿暂存、redo、状态栏指标、裸 `exit` 等高频小改进。
- **扩展生态**：`omp usage` 扩展提供方、pi-ai shim 兼容性（#13250）表明第三方插件生态正在成长，接口兼容性问题需关注。

---

## ⚠️ 开发者关注点

1. **启动与环境兼容性**：Debian 13 启动失败（#13525）、Nix 构建失败（#13493）、flake CI 红（#12689）——非标准环境下的安装路径仍脆弱。
2. **Windows 平台回归频发**：`omp update` 误报（#13470）、`/tmp` 解析到盘符根（#11603）、代理劫持 unix-socket fetch（#13505）。
3. **Breaking Changes 节奏快**：连续三个版本含 Breaking Change（rotate API、prompt-cache 保活移除、task complexity 移除），扩展/脚本作者需频繁适配。
4. **静默失败模式**：图片被静默丢弃、工具白名单静默忽略、后台任务被静默取消（#11564）——缺少可观测性是反复出现的反馈主题。
5. **配置分散导致行为不一致**：task agent 多处定义（#13345）、`/new` 继承旧会话思考级别（#13383）等，配置解析的单一来源问题值得投入。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*