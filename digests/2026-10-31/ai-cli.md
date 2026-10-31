# AI CLI 工具社区动态日报 2026-10-31

> 生成时间: 2026-10-31 04:38 UTC | 覆盖工具: 11 个

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

**数据日期：2026-10-31 · 数据来源：12 个主流 AI CLI 工具 GitHub 社区动态**

---

## 一、生态全景

AI CLI 工具已从单纯的“终端对话助手”演化为覆盖桌面端、无人值守 Agent、多 Agent 协作的完整开发平台。头部工具（Claude Code、Codex、Gemini CLI）竞争焦点转向**企业级能力**（共享预算、多仓库、安全治理）与**可靠性工程**（认证、上下文连续性、长会话稳定）。同时，开源/中立工具（OpenCode、Pi、oh-my-pi）以多云 Provider 接入和插件生态切入，形成差异化竞争带。**平台质量债**（尤其 Windows 支持）和**上游订阅凭证政策收紧**成为全行业共性摩擦点。

---

## 二、各工具活跃度对比

| 工具 | Issue 活跃度 | PR 活跃度 | Release | 当日焦点 |
|---|---|---|---|---|
| **Claude Code** | 高（50 条更新） | 无 | v2.1.316 | 团队共享预算上线；认证/用量异常集中爆发 |
| **OpenAI Codex** | 高（Top10 中多条 50+ 评论） | **极高**（10+ 核心合入） | 无 | Windows Computer Use 回归（53 评论）；音频输入管线 |
| **Gemini CLI** | 高（50 条 / 33 PR） | 高（10+ 合入） | v0.67.0-nightly | Subagent 可靠性 P1 集群；CI 供应链安全 PoC |
| **Copilot CLI** | 中（10 条新增） | 低（3 个，全容器相关） | 无 | 容器镜像推进；Autopilot 越权行为 |
| **OpenCode** | 高（149 评论汇总帖） | **极高**（10+ 修复合入） | **v2.2.5**（周内第 3 版） | 免费层信任危机；MCP 时序修复 |
| **Qwen Code** | 高 | 高（10 PR） | cua-driver-rs v0.27.0 | CI gate 红灯阻塞；依赖漏洞 |
| **DeepSeek TUI** | 低（3 条） | 中（10+ 社区 PR） | 无 | main 编译失败阻塞贡献 |
| **Pi** | 中 | **极高**（7+ 合入） | 无 | Windows 大调研（93 评论）；tool search 排序迭代 |
| **oh-my-pi** | 高（多条 p1） | 高（10 PR） | v18.14.1（Breaking） | SQLite 锁损坏；上游凭证封锁 |
| **Kimi Code / DeepSeek Harness** | 无活动 | 无 | — | — |

---

## 三、共同关注的功能方向

1. **长会话/上下文连续性**（最高频共识）
   - Codex #57608 压缩丢任务上下文、PR #58404 修 token 估算；Copilot #5292 压缩超时撑爆上下文；OpenCode #51949 compact 后工具停用；DeepSeek TUI #7153 压缩耗时 3 分钟；Claude Code #105132 重复缓存写入推高成本。**自动压缩是全行业可靠性洼地。**

2. **Windows 一等公民化**
   - Codex Top10 中 7 条 Windows 相关；Pi 发起 93 评论官方调研；Qwen Code 聚集 shell 假设/MSYS 路径/更新锁定三痛点；Copilot 报 PowerShell 非法命令（2,164 次调用日志）。Windows 已成明确的竞争分水岭。

3. **MCP 生态可靠性**
   - Claude Code #105703（8 MiB 结果断连）、OpenCode #51812（首条 prompt 无 MCP 工具，已修）、oh-my-pi #2888（lazy 生命周期提案）、Gemini CLI #24246（工具数 >128 报 400）。

4. **成本/用量透明度与配额治理**
   - Claude Code #105240 用量飙升 + 新推企业共享预算；OpenCode 免费层 149 评论信任危机；Codex #40524 配额自主分配；oh-my-pi #17472 配额错误循环 5.5 万次。

5. **无人值守/自动化 Agent 安全治理**
   - Claude Code Artifact 权限、Gemini CLI 破坏性操作防护、Copilot Autopilot 越权回答、oh-my-pi 交互提示挂死——YOLO 模式的安全边界是共同课题。

6. **容器化/Headless 部署**
   - Copilot 容器镜像 3 PR、Claude Code amd64 容器崩溃、Pi RPC 模式生命周期——服务端/CI 场景需求上升。

---

## 四、差异化定位分析

| 工具 | 定位与路线 |
|---|---|
| **Claude Code** | 企业级商业化路线：团队共享预算、spend limits API，重营收但质量债集中（认证、未签名安装器 4 个月未修） |
| **Codex** | 平台能力扩张型：音频输入、Computer Use、Guardian 安全审查、Bedrock/Vertex 多云登录，迭代速度最快但回归频发 |
| **Gemini CLI** | 架构探索型：AST 感知工具、OS 级沙箱提案、subagent Sprint，社区系统性共建，工程前瞻性强 |
| **Copilot CLI** | GitHub 生态整合型：仓库级权限、Hook 扩展，靠平台绑定获客，独立功能滞后（如字符串搜索等基础能力缺位） |
| **OpenCode** | 开源聚合器路线：复用 Claude Code 登录（v2.2.3）、多 Provider 接入，社区修复速度极快（issue→PR 当日闭环） |
| **Qwen Code** | 国内生态 + 自动化基础设施：百炼集成、CUA Driver、Autofix 协作审查机制，CI 治理负担沉重 |
| **Pi / oh-my-pi** | 极客/中立路线：终端兼容性精细化（tmux/mintty/kitty）、多云 Provider（单 PR 接入 6 家）、RPC/扩展嵌入 |
| **DeepSeek TUI / Kimi** | 早期阶段：社区规模小，贡献流程尚不健全 |

---

## 五、社区热度与成熟度

- **第一梯队（成熟 + 高热）**：Claude Code、Codex、Gemini CLI —— Issue 量大、企业渗透深，但问题多与规模化的质量治理相关
- **快速迭代期**：OpenCode（周内 3 版 + 社区修复飞快）、Pi / oh-my-pi（当日 7-10 个高质量合入，AI 参与报告已成披露惯例）
- **上升期但工程承压**：Qwen Code（CI 红灯阻塞所有 PR）、Copilot CLI（容器化路线反复）
- **早期**：DeepSeek TUI（main 编译失败阻塞外部贡献）、Kimi Code（无活动）

---

## 六、值得关注的趋势信号

1. **“订阅凭证第三方使用”红线正在收紧**：Muse Code 403 封锁、Google 明确禁止第三方 OAuth——依赖官方 CLI 订阅凭证的中立工具（oh-my-pi、Pi、OpenCode）面临系统性政策风险，开发者选型时应评估认证方式的可持续性。

2. **上下文压缩成为下一代竞争核心**：所有工具的压缩机制都有明显缺陷（丢上下文/超时/成本爆炸），谁能先做到“无损、可预测、带缓存的压缩”，谁就掌握长时 Agent 工作流的入口。缓存前缀不变性（Qwen #15493、Claude #105132）是可量化的优化方向。

3. **Windows 支持是当前最可变现的差异化机会**：三大头部工具均在此失分，社区反馈密度极高，对国产工具（Qwen、DeepSeek）是切入窗口。

4. **成本可观测性从个人诉求升级为企业需求**：Claude Code 的共享预算功能预示方向——token 级粒度（按子 Agent、按 workspace）的预算管控将成为企业采购的标配要求。

5. **供应链与数据安全风险显性化**：Gemini CLI 的 CI PoC、Qwen 的传递依赖漏洞、oh-my-pi 的 SQLite 锁损坏——采用这些工具做自动化时，应对其 CI/存储层做独立审计。

**给决策者的建议**：生产环境优先考察认证稳定性（Claude Code 当前认证问题集中）、长会话可靠性实测（建议 >2 小时压测）和 Windows 兼容性；多云/避锁定需求下，OpenCode 与 Pi 生态的开放性更优，但需关注上游凭证政策风险。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-10-31）

## 一、热门 Skills 排行

> 说明：本期 PR 数据中评论数均缺失（undefined），按 PR 编号活跃度、关联 Issue 讨论量及更新时间综合排序。

| # | Skill / PR | 功能与热点 | 状态 |
|---|---|---|---|
| 1 | **mcp-builder 修复** — [PR #1742](https://github.com/anthropics/skills/pull/1742) | 适配 `mcp>=2.0` 的 `streamable_http_client` 重命名与自定义 Header 方式，关联 [#1668](https://github.com/anthropics/skills/issues/1668)；同类评估器 bug（[#1390](https://github.com/anthropics/skills/issues/1390)，4 评论）显示 mcp-builder 是问题高发区 | OPEN |
| 2 | **skill-creator 触发评估隔离修复** — [PR #1298](https://github.com/anthropics/skills/pull/1298) | 修复 Windows `select()` 失败、worker 竞争导致的触发评估误判；skill-creator 相关 Issue 讨论最集中（[#556](https://github.com/anthropics/skills/issues/556) 13 评论、[#202](https://github.com/anthropics/skills/issues/202) 8 评论） | OPEN |
| 3 | **Pyxel 复古游戏开发** — [PR #525](https://github.com/anthropics/skills/pull/525) | 由 Pyxel 作者 @kitao 亲自提交，含无头运行/帧检查/状态校验；3 月提交、10 月仍活跃，长期挂起 | OPEN |
| 4 | **notion-spec-to-implementation + quantitative-resume-auditor** — [PR #1245](https://github.com/anthropics/skills/pull/1245) | Notion 规格拆解为可执行任务；量化简历审计；10 月仍有更新 | OPEN |
| 5 | **md2video-audio** — [PR #1703](https://github.com/anthropics/skills/pull/1703) | Markdown → Marp 幻灯片 → MP4 视频 + 拟真人配音，零成本内容生产方向 | OPEN |
| 6 | **document-typography** — [PR #514](https://github.com/anthropics/skills/pull/514) | 解决 AI 生成文档的孤行、寡段、编号错位等排版问题——切中所有用户的隐性痛点 | OPEN |
| 7 | **scnet-hpc** — [PR #1615](https://github.com/anthropics/skills/pull/1615) | SSH + Slurm 的 HPC 集群操作 Skill，代表科学计算场景需求 | OPEN |
| 8 | **ODT 文档 Skill** — [PR #486](https://github.com/anthropics/skills/pull/486) | OpenDocument 创建/模板填充/转 HTML，开源标准格式补全 | OPEN |

此外，10 月由 @gerardrecinto 集中提交的一批小修复（[#1975](https://github.com/anthropics/skills/pull/1975) pptx、[#1976](https://github.com/anthropics/skills/pull/1976)/[#1977](https://github.com/anthropics/skills/pull/1977) webapp-testing/algorithmic-art）显示核心官方 Skill 的质量维护已成社区自驱行为。

## 二、社区需求趋势

1. **信任与安全治理**（最热，46 评论）：[#492](https://github.com/anthropics/skills/issues/492) —— 社区 Skill 冒用 `anthropic/` 命名空间构成信任边界漏洞，呼吁签名/命名空间隔离机制
2. **组织级分发与共享**（17 评论）：[#228](https://github.com/anthropics/skills/issues/228) —— 期待 Claude.ai 内的组织 Skill 库与分享链接
3. **Agent 记忆与上下文效率**：[#1329](https://github.com/anthropics/skills/issues/1329) compact-memory（符号化压缩 agent 状态）、[#1487](https://github.com/anthropics/skills/issues/1487) claude-api 一次性注入 156k token 撑爆上下文——上下文经济学是核心议题
4. **输出质量门禁**：[#1385](https://github.com/anthropics/skills/issues/1385) 校准→对抗审查→交付验证的三门流水线提案；[#412](https://github.com/anthropics/skills/issues/412) agent-governance
5. **Skill 触发与评估可靠性**：[#556](https://github.com/anthropics/skills/issues/556) `claude -p` 触发率 0%；[#2064](https://github.com/anthropics/skills/issues/2064) description 应写明"何时使用"而非"做什么"

## 三、高潜力待合并 Skills / PR

- [PR #1298](https://github.com/anthropics/skills/pull/1298) skill-creator 触发评估修复——直接回应最热 Issue #556，落地价值最高
- [PR #1742](https://github.com/anthropics/skills/pull/1742) mcp-builder mcp>=2 适配——阻塞 MCP 生态升级，优先级高
- [PR #1997](https://github.com/anthropics/skills/pull/1997) skill-creator YAML frontmatter 解析修复（10 月提交，修复评价管线元数据错误）
- [PR #1980](https://github.com/anthropics/skills/pull/1980) webapp-testing 命令注入（CWE-78）安全修复——契合 Issue #492 的安全主旋律
- [PR #1792](https://github.com/anthropics/skills/pull/1792) docx LibreOffice 超时误报成功修复——docx Skill 是高频修复区（另见 [#2018](https://github.com/anthropics/skills/issues/2018) merge_runs.py XML 损坏）
- [PR #525](https://github.com/anthropics/skills/pull/525) Pyxel ——上游作者背书，长期活跃

## 四、生态洞察（一句话）

**当前社区最集中的诉求是：为 Skills 建立可信的分发与触发机制**——即“谁能代表官方（命名空间安全）+ Skill 何时被正确触发（评估/描述可靠性）+ 触发后不撑爆上下文（渐进加载）”，这三者共同决定了 Skills 从演示走向生产可用。

---

# Claude Code 社区动态日报
**日期：2026-10-31 | 数据来源：github.com/anthropics/claude-code**

---

## 一、今日速览

今日发布 **v2.1.316**，新增 `CLAUDE_CODE_DISABLE_ULTRATHINK` 环境变量及面向团队的共享预算（pooled budget）功能。Issue 活跃度较高（50 条更新），认证/登录问题（macOS Desktop 登录 400 错误、会话频繁掉线）与用量异常飙升成为社区最大痛点；无人值守 Agent 读取共享 Artifact 的权限限制引发新讨论。过去 24 小时无 PR 更新。

---

## 二、版本发布

### v2.1.316
- 新增 `CLAUDE_CODE_DISABLE_ULTRATHINK` 环境变量，可关闭 `ultrathink` 关键词触发
- Claude Apps 网关新增**组共享预算**（pooled group budgets）：在成员个人限额之上，为团队设置月度共享预算，通过 spend limits 管理 API 的 `pooled_budget` 字段配置——明显面向企业/团队场景

---

## 三、社区热点 Issues（Top 10）

1. **[#70647](https://github.com/anthropics/claude-code/issues/70647)** — 原生安装器生成的 `ClaudeCode.app` 缺少代码签名密封，macOS 报"已损坏无法打开"。17 条评论、开放 4 个月未修复，是安装链路的长期信任问题。

2. **[#103788](https://github.com/anthropics/claude-code/issues/103788)** — macOS Desktop 登录失败："We couldn't verify your browser"，Google/邮箱双路径均 400。与出口 IP 相关的排查细节引发 12 条讨论，疑似风控策略问题。

3. **[#105240](https://github.com/anthropics/claude-code/issues/105240)** — Max 5x 周用量 48 小时内达 94%，10/17 起用量异常飙升、10/24 后加剧。直指计费/用量统计可能的回归，涉及真金白银，用户敏感度高。

4. **[#84938](https://github.com/anthropics/claude-code/issues/84938)** — Desktop 持续要求重新登录、会话不保持。长期未决的老问题，与 #103788 共同构成认证可靠性主线。

5. **[#106167](https://github.com/anthropics/claude-code/issues/106167)** — 服务端下发的"games"指令干扰正常开发工作。模型行为被服务端注入内容影响，6 👍 反映共鸣较强。

6. **[#106332](https://github.com/anthropics/claude-code/issues/106332)** / **[#106321](https://github.com/anthropics/claude-code/issues/106321)** — 无人值守 Agent 无法读取公开链接或队友创建的 Artifact，"made by someone else" 确认无法跳过。直击自动化工作流的核心堵点，今日新提，值得追踪。

7. **[#105593](https://github.com/anthropics/claude-code/issues/105593)** — Apple Silicon 上 amd64 容器内的 linux-x64 原生二进制在 Rosetta 下 SIGSEGV、QEMU 下启动即崩，arm64 正常。VS Code 扩展 2.1.312 起恶化，影响容器化开发用户。

8. **[#92563](https://github.com/anthropics/claude-code/issues/92563)** — 后台任务完成通知已入队但未触发 assistant 回合，会话空转等待用户输入。有稳定复现，破坏 subagent 并行工作流的关键体验。

9. **[#105703](https://github.com/anthropics/claude-code/issues/105703)** — 单个 stdio MCP 工具结果超过约 8 MiB 即断连并杀死 MCP server。MCP 生态中返回大数据（截图、日志）场景常见，附最小复现。

10. **[#105132](https://github.com/anthropics/claude-code/issues/105132)** — 自动裁剪图片历史后触发重复 0.76–0.79M token 缓存写入，8 分钟内 3 次响应共 2.3M+ tokens。缓存失效模式直接推高成本。

---

## 四、重要 PR 进展

过去 24 小时无 PR 更新，本节省略。（注：该仓库 PR 活动通常由 Anthropic 内部流程驱动，外部贡献较少。）

---

## 五、功能需求趋势

- **会话/消息导航**：桌面端与移动端"跳转到上一条/下一条 prompt"的键盘导航（#70678、#104550），长会话 UX 是高频诉求
- **无人值守 Agent 权限治理**：Artifact 读取、公开链接访问的授权规则（#106332、#106321），以及账号级关闭 claude.ai connectors（#106225）
- **凭据/支付安全灵活性**：允许用户主动授权 Claude in Chrome 输入自身凭据、1Password 式凭据交接（#96762）
- **成本控制粒度**：advisor 按子 Agent 而非会话级作用域（#105557），与本次发布的企业共享预算方向一致
- **上下文效率**：update-config skill 每次注入 ~73k token 的完整 JSON schema（#105885），凸显对上下文占用的敏感度

---

## 六、开发者关注点

1. **认证与登录可靠性**：多个平台（macOS/Linux）报登录 400、会话掉线、凭据过期（#103788、#84938、#106346），是当前最集中的痛点
2. **用量与计费异常**：10 月中旬起用量飙升（#105240）+ 图片裁剪引发的重复缓存写入（#105132），付费用户信任受损
3. **沙箱环境兼容性**：WSL2 下 user namespace 受限导致 Chromium 沙箱失败（#103811）、Docker Desktop 容器中 Bash 被拒（#104796）、worktree 隔离 subagent 恢复后失去隔离（#104928）——隔离与容器化场景回归较多
4. **安装与分发**：未签名 macOS app bundle（#70647）长期未修，企业环境代码签名校验直接阻断使用
5. **桌面端质量细节**：Windows 会话侧栏分组丢失（#104476）、rewind 失败丢输入（#106347）、语音听写丢尾词（#103080）、KDE Wayland 窗口抢占焦点（#104726）

---

*本报告基于过去 24 小时 GitHub 公开数据自动生成，链接均指向 anthropics/claude-code 仓库。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-10-31

## 1. 今日速览

今日无新版本发布，但工程侧异常活跃：过去 24 小时内合入了大量 PR，覆盖音频输入支持、TUI 跨后端会话切换、Guardian 上下文弹性预算、延迟工具状态默认启用等核心能力。社区侧，Windows Computer Use 无法读取浏览器 URL 的 bug（#51524）持续发酵，评论数已达 53 条，成为本月最热议题。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#51524](https://github.com/openai/codex/issues/51524)** — Windows Computer Use 在 `get_window_state` 处卡死，无法读取 Chrome/Edge 当前 URL。10 月 6 日回归以来持续影响 Windows 用户，53 条评论，是当前最紧迫的 Windows 阻塞性 bug。
2. **[#33776](https://github.com/openai/codex/issues/33776)** — Codex Desktop 在 Windows 上疯狂派生数百个 `taskkill.exe`/`conhost.exe`，引发 WMI 风暴和 DWM 性能劣化（单次会话 287 个进程），27 👍，长期未解的资源泄漏问题。
3. **[#57641](https://github.com/openai/codex/issues/57641)** — 桌面 App 更新至 26.1023.6123.0 后，终端 CLI @Browser 报 "browser access host is unavailable"，属于更新引入的浏览器工具回归。
4. **[#26338](https://github.com/openai/codex/issues/26338)** — 请求 App 支持包含多个独立 Git 仓库的父工作区，49 👍，多仓库 monorepo 工作流是长期高频需求。
5. **[#57608](https://github.com/openai/codex/issues/57608)** — 自动压缩后丢失活跃任务上下文，continuation 只收到环境信息而任务描述丢失，直击长会话可靠性痛点。
6. **[#4323](https://github.com/openai/codex/issues/4323)** — IDE 扩展缺少 Changelog，99 👍 为今日所有 Issue 中最高，社区对扩展版本透明度的诉求强烈。
7. **[#54989](https://github.com/openai/codex/issues/54989)** — Windows 上 Browser 开关已启用但工具反复报告被禁用，需重启 App 才能恢复，影响使用流畅性。
8. **[#40524](https://github.com/openai/codex/issues/40524)** — 希望让 Plus 用户自主选择每周配额的消费方式，反映限额策略对重度用户的不友好。
9. **[#56933](https://github.com/openai/codex/issues/56933)** — Intel macOS 上桌面宠物（Pets）功能触发大量 `setAcceptsMouseMovedEvents` 错误，新功能在老平台上的兼容性问题。
10. **[#54532](https://github.com/openai/codex/issues/54532)** — 中文 Windows 下 Computer Use 因 document-role 判定失败无法获取浏览器 URL，用户通过本地窄范围修复恢复，为 #51524 提供了重要诊断线索。

## 4. 重要 PR 进展

1. **[#58430](https://github.com/openai/codex/pull/58430) / [#58434](https://github.com/openai/codex/pull/58434)** — 引入音频文件引用（`fileId`/`file_id`）支持，并将音频校验失败映射为不可重试的 `InvalidAudioInput`，音频输入管线成型。
2. **[#58457](https://github.com/openai/codex/pull/58457)** — TUI 支持跨后端会话切换，会话选择器可恢复由其他后端持有的对话。
3. **[#58454](https://github.com/openai/codex/pull/58454) / [#58444](https://github.com/openai/codex/pull/58444)** — Guardian 上下文引入弹性预算（`ContextBudgeting::Elastic`），取消固定分段上限并在分配前封顶条目数，提升安全审查上下文利用率。
4. **[#58410](https://github.com/openai/codex/pull/58410)** — 延迟工具世界状态（deferred tool world state）转正并默认启用，延迟工具命名空间移入 developer `<tools>` 上下文。
5. **[#58404](https://github.com/openai/codex/pull/58404)** — 修复缺少 usage 数据的响应在上下文 token 估算中被遗漏的问题，避免压缩延迟触发——直接关联 #57608 类上下文丢失场景。
6. **[#58406](https://github.com/openai/codex/pull/58406)** — 新增 host 继承的线程指令与执行策略快照，强化宿主环境下的会话控制。
7. **[#58427](https://github.com/openai/codex/pull/58427)** — 登录流程重构：API key、Bedrock、Vertex AI 归入 "Sign in another way" 子菜单，简化主流程。
8. **[#58446](https://github.com/openai/codex/pull/58446)** — TUI 中查看过的图片路径与转录路径变为可点击的终端超链接（本地工作区）。
9. **[#58428](https://github.com/openai/codex/pull/58428)** — 插件配置支持 `plugins.<plugin>.apps.<connector>` 级别的应用设置合并。
10. **[#58456](https://github.com/openai/codex/pull/58456)** — 推理失败的 trace 中保留不完整输出，避免丢失已尝试工具调用的证据，改进可观测性。

## 5. 功能需求趋势

- **多仓库 / 工作区管理**：父目录多 Git 仓库支持（#26338）呼声高，monorepo 用户长期等待。
- **跨设备偏好同步**：#11061（69 👍）请求用户级配置（模型、沙箱策略、MCP）跨机器同步，当前 `config.toml` 混杂本地信任条目。
- **配额与限额可配置化**：Plus 用户希望自主分配每周配额（#40524）、Pro 端用量环缺失（#57333）。
- **长会话上下文连续性**：上下文漂移预警与一键 HANDOFF.md 迁移（#36584）、压缩后任务丢失（#57608）。
- **文档与发布透明度**：IDE 扩展 Changelog（#4323，99 👍）是最高赞需求。
- **Computer Use / Browser Use 稳定性**：多个高热度 bug 集中在 Windows 浏览器控制链路。

## 6. 开发者关注点

- **Windows 平台质量是最大痛点**：今日 Top 10 Issue 中 7 条与 Windows 相关，涵盖 Computer Use、进程泄漏、浏览器访问、更新回归，Windows 支持明显落后于 macOS。
- **更新引入回归频发**：桌面 App 更新后接连出现浏览器 host 不可用（#57641）、Astra 滑块配置异常（#58201）等回归，用户对发布质量保障不满。
- **自动审批/安全审查过于严格**：自动审批反复拒绝用户显式授权（#44473、#56705），Browser Use 安全检查误拦截已授权页面（#35549、#50502），安全机制与可用性平衡待调优。
- **长会话可靠性**：自动压缩丢失任务上下文、语音连接约两小时断连（#46821），长时运行稳定性需提升。
- **CLI/沙箱细节问题**：macOS UID 501 解析失败（#53634）、GNU screen 剪贴板失效（#57885）等，CLI 在非标准环境下的兼容性仍有打磨空间。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-10-31

## 1. 今日速览

今日发布 nightly 版本 v0.67.0，包含 shadow repo gitignore 支持与 SSE 流缓冲修复两项核心改进。社区焦点集中在 **Subagent 可靠性**上：subagent 命中 MAX_TURNS 后被误报为成功、通用 agent 挂起等 P1 问题持续活跃。此外，有安全研究人员提交了针对 CI 自托管 Runner 的供应链安全 PoC（Google OSS VRP 报告），值得维护者警惕。

---

## 2. 版本发布

### v0.67.0-nightly.20261031.g6814e00d6
- **fix(core)**: shadow repo 现在遵循 `.git/info/exclude` 和 `core.excludesFile` 配置（PR [#30034](https://github.com/google-gemini/gemini-cli/pull/30034)）
- **fix(core)**: CodeAssistServer 在流 EOF 时刷新待处理的 SSE 事件缓冲（修复流截断丢事件问题）

---

## 3. 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) · Subagent 命中 MAX_TURNS 却上报 GOAL 成功**（P1, 13 评论）
   最热话题。`codebase_investigator` 在未做任何分析就达到轮次上限时仍报告 `status: "success"`，掩盖了中断事实，直接误导上层 agent 决策。多个 P1 issue 与之关联，是 subagent 可观测性的核心缺陷。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) · 通用 agent 无限挂起**（P1, 8 评论 / 8 👍）
   用户 👍 最多的 issue：委派给 generalist agent 后连建文件夹都挂起一小时以上，只能靠提示词禁用 subagent 规避。严重影响可用性。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) · 零依赖 OS 沙箱 + 执行后意图路由**（P2, 9 评论）
   方向性提案：利用 Gemini 3 原生 bash 能力（grep/sed/awk 链式调用），配合 OS 级沙箱释放模型能力，兼顾安全。涉及 agent 架构演进，讨论热烈。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) · AST 感知的文件读取/搜索/代码映射评估**（P2 EPIC, 7 评论）
   探索用 AST 工具（ast-grep、tilth、glyph）精确定位方法边界，减少错位读取和 token 浪费。配套子任务 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)、[#22747](https://github.com/google-gemini/gemini-cli/issues/22747)，是提升 agent 效率的重要布局。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) · 模型极少主动使用 skills 和 sub-agents**（P2, 7 评论）
   用户反馈即使任务高度相关，Gemini 也几乎从不自主调用自定义 skill/subagent，需显式指令触发。反映了路由/委派策略的调优需求。

6. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) · browser subagent 在 Wayland 下失败**（P1, 4 评论）
   Linux Wayland 环境浏览器子代理不可用，限制桌面用户场景。

7. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) · Browser Agent 无视 settings.json 配置**（P2, 4 评论）
   `maxTurns` 等覆盖配置在 AgentRegistry 合并后未生效，配置一致性 bug。

8. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) · 工具数 >128 触发 400 错误**（P2, 3 评论）
   工具数量超过 API 上限直接报错，agent 应智能裁剪工具作用域。重度 MCP 用户的痛点。

9. **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571) · 模型在随机位置创建临时脚本**（P2, 3 评论）
   生成大量分散的编辑脚本污染工作区，清理成本高，影响 commit 卫生。

10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) · Agent 应阻止/劝阻破坏性操作**（P2, 3 评论）
    `git reset --force`、DB 修改等危险命令缺乏防护机制，是无人值守场景（YOLO 模式）的安全诉求。

---

## 4. 重要 PR 进展

1. **[#30066](https://github.com/google-gemini/gemini-cli/pull/30066) · CI 供应链安全 PoC（勿合并）**
   展示 `Trigger E2E → Chained E2E` 可在自托管 Runner 上执行 fork 分支代码，已声明将上报 Google OSS VRP。⚠️ 维护者需优先关注 CI 加固。

2. **[#30058](https://github.com/google-gemini/gemini-cli/pull/30058) · 修复 Whisper 模型中断下载被误判为已安装**（P2）
   防止截断文件残留导致 `isModelInstalled()` 误报，影响语音功能。

3. **[#29901](https://github.com/google-gemini/gemini-cli/pull/29901) · ACP 客户端可中途 steer 运行中的 turn**（feat）
   允许 Zed/JetBrains/VS Code 等客户端在不取消 turn 的情况下注入用户消息，对齐终端端 `modelSteering` 体验，是 ACP 集成的关键增强。

4. **[#29890](https://github.com/google-gemini/gemini-cli/pull/29890) · 会话恢复失败时不再污染 workspace 上下文**
   修复 `loadHistoryForResume` 在 resume 抛错后目录残留的问题。

5. **[#29895](https://github.com/google-gemini/gemini-cli/pull/29895) · headless 模式保留结构化 API 错误**
   修复错误被序列化为 `[object Object]` 的问题，改善非交互场景调试体验。

6. **[#29902](https://github.com/google-gemini/gemini-cli/pull/29902) · policy-engine 文档澄清**
   明确 `commandPrefix` deny 规则只匹配命令名而非效果，建议无人值守运行使用 allow-list。

7. **[#30053](https://github.com/google-gemini/gemini-cli/pull/30053) · 修复背景 PID 解析产生 `NaN`**
   shell 工具小修，跳过非数字行。

8. **[#30059](https://github.com/google-gemini/gemini-cli/pull/30059) · 已合并：手动选择的模型在 fallback/取消/rewind 后不再静默回退**
   解决用户选定 pro 模型后悄悄退回 flash 的问题。

9. **[#29785](https://github.com/google-gemini/gemini-cli/pull/29785) · 已合并：CodeAssist SSE 流末尾事件派发**——即本日 nightly 中的修复，防止代理截断丢事件。

10. **[#29778](https://github.com/google-gemini/gemini-cli/pull/29778) · 已合并：ACP 模式工具输出截断**
    之前 ACP 下大 shell 输出未做截断，可导致 400 输入超限错误。

---

## 5. 功能需求趋势

- **Subagent 架构成熟化**（最主流）：本地 subagent Sprint（[#20195](https://github.com/google-gemini/gemini-cli/issues/20195)）、并行协作与共享内存（[#18287](https://github.com/google-gemini/gemini-cli/issues/18287)）、轨迹共享（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）、官方示例集（[#18283](https://github.com/google-gemini/gemini-cli/issues/18283)）——社区正系统性建设 subagent 生态。
- **代码理解效率**：AST 感知工具、Tactful Extraction 节省 token 读取（[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)）、文件化任务追踪替代 in-context todo（[#18836](https://github.com/google-gemini/gemini-cli/issues/18836)）。
- **IDE/编辑器集成（ACP）**：turn 中途 steering、输出截断等 ACP 改进密集落地。
- **安全与沙箱**：OS 级沙箱（[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)）、破坏性操作防护（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)）、per-workspace 策略（[#18397](https://github.com/google-gemini/gemini-cli/issues/18397)）。

---

## 6. 开发者关注点

- **Subagent 可靠性是最大痛点**：挂起、误报成功、上下文缺失（`/bug` 报告不含 subagent 信息 [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）、symlink agent 不识别（[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)）等问题集中且多为 P1/P2。
- **交互提示卡死**：如创建 Vite 应用卡在交互式提示（[#22465](https://github.com/google-gemini/gemini-cli/issues/22465)），非交互命令处理需加强。
- **Token/上下文管理**：工具数超限报错、大文件读取 "firehose" 上下文膨胀（单轮基线约 36.6k tokens）。
- **配置一致性**：settings.json 覆盖在部分组件（Browser Agent）不生效，削弱用户信任。
- **CI 供应链安全**：连续出现来自不同账号的 CI 探测 PR（#30064/#30065/#30066），建议社区和维护者审查 fork 触发的 workflow 权限。

---
*数据来源：google-gemini/gemini-cli · 统计窗口：过去 24 小时（Issues 50 条 / PRs 33 条）*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-31 | 数据来源：github.com/github/copilot-cli**

---

## 1. 今日速览

社区对官方容器镜像的期待持续推进：围绕 Issue #55 的 Docker 打包需求，@brunoborges 连续提交了两个 PR（#5307、#5308）用于在发布时自动构建 `ghcr.io` 镜像，目前均已关闭待完善。功能层面，社区今天集中反馈了 Autopilot 模式的多个行为问题（自动回复用户提问、Ctrl+D 拒绝后随机执行），以及一批 Windows/WSL 平台兼容性问题。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 社区热点 Issues

| # | 标题 | 关注理由 | 热度 |
|---|------|---------|------|
| [#55](https://github.com/github/copilot-cli/issues/55) | 将 copilot-cli 打包为 Docker 镜像 | 长期高热度需求（👍 23），帮助无 Node.js 环境的开发者快速上手；今日相关 PR 活跃 | 👍23 💬6 |
| [#5276](https://github.com/github/copilot-cli/issues/5276) | Autopilot 越权替用户回答问题 | Autopilot 模式自动以 "work autonomously" 回复 `ask_user`，破坏需要用户决策的 Skill 流程，涉及 agent 安全边界 | 💬1 |
| [#5298](https://github.com/github/copilot-cli/issues/5298) | `--model fusion` 报错需未公开 flag | Fusion 已宣称 GA 且组织已启用，但 CLI 1.0.105 仍要求设置未文档化的 `DYNAMIC_AUTO_TIERS` | 新 |
| [#5292](https://github.com/github/copilot-cli/issues/5292) | 自动压缩反复超时直到撑爆上下文 | 压缩 300s 超时后对话持续增长直至触发硬限制，属核心会话稳定性缺陷 | 新 |
| [#5304](https://github.com/github/copilot-cli/issues/5304) | WSL2 下 `/keep-alive` 无法阻止 Windows 休眠 | CLI 在 WSL 中调用 `systemd-inhibit` 但不影响 Windows 宿主机，长任务中断风险 | 新 |
| [#5306](https://github.com/github/copilot-cli/issues/5306) | `--available-tools` 空值暴露全部工具 | 与文档语义相反（应禁用所有工具），涉及非交互模式的工具安全控制 | 新 |
| [#5301](https://github.com/github/copilot-cli/issues/5301) | `web_search` 频繁 504 超时 | 近 9 天内超过一半调用失败（~120s 网关超时），影响基础工具可用性 | 新 |
| [#5302](https://github.com/github/copilot-cli/issues/5302) | Agent 在 Windows 生成非法 PowerShell | 基于 2,164 次真实调用的日志分析，反复重试浪费大量 token 与轮次 | 新 |
| [#5297](https://github.com/github/copilot-cli/issues/5297) | 支持仓库级版本控制的命令权限（allow/ask/deny） | 团队共享权限配置的合理诉求，与 instructions/skills/agents 仓库化趋势一致 | 新 |
| [#5279](https://github.com/github/copilot-cli/issues/5279) | 前台会话变更 Hook（含 warm resume） | 终端集成（多面板切换）需要准确的前台会话事件流，是插件生态的关键能力 | 💬2 |

---

## 4. 重要 PR 进展

过去 24 小时共 3 个 PR 更新，全部与容器镜像相关：

| # | 标题 | 内容 | 状态 |
|---|------|------|------|
| [#5310](https://github.com/github/copilot-cli/pull/5310) | 修复容器 smoke-test 工作区权限 | 修复 amd64/arm64 冒烟测试失败：临时工作区 `0700` 权限阻止运行时用户（UID 10001）访问，且 root 初始化的 Git 元数据需调整 | 🟢 OPEN |
| [#5308](https://github.com/github/copilot-cli/pull/5308) | 发布时构建 Copilot CLI 服务端容器镜像 | #5307 的重建版（保留原两笔提交）；待解决：无版本注解的 `latest`/`prerelease` manifest 可能被旧版本覆盖 | 🔴 CLOSED |
| [#5307](https://github.com/github/copilot-cli/pull/5307) | 发布时构建 Copilot CLI 服务端容器镜像 | 直接响应 Issue #55：release 时发布镜像到 `ghcr.io/github/copilot-cli`，以 headless server 方式运行，支持 CI/集成测试场景 | 🔴 CLOSED |

> 注：#5307/#5308 关闭后预计会以新 PR 形式继续推进，容器化路线仍在迭代中。

---

## 5. 功能需求趋势

- **容器化 / 免 Node 部署**：Issue #55 + 三个 PR 表明这是当前社区最高优先级诉求，目标是 CI 集成与服务端运行。
- **Autopilot 行为可控性**：#5276、#5295、#5294、#5303 集中出现，用户要求 agent 在决策点尊重用户、提供清晰摘要，而非自动推进。
- **上下文 / 记忆管理增强**：#4724（按缓存 TTL 空闲压缩）、#5292（压缩超时）、#3060（非 GitHub origin 的 memory 写入）。
- **Hook 与插件生态扩展**：#5305（skill 调用 Hook + 异步命令）、#5279（前台会话 Hook）、#5297（仓库级权限），对齐 Claude Code 的能力。
- **企业 / GHES 支持**：#5286（沙箱模式下 gh 无法代理 GHE token）。

---

## 6. 开发者关注点

1. **Windows/WSL 是问题重灾区**：一日内新增多条（#5304 keep-alive 失效、#5299 含空格路径触发 OpenWith 弹窗、#5302 非法 PowerShell、#5271 剪贴板失效、#2612 选中文字对比度），平台适配质量亟需提升。
2. **错误信息误导性**：#5309（内容过滤误报为 model_not_supported）、#2990（Extra High 分层限制无提示）、#5298（未公开 flag 报错）——用户难以自行诊断问题。
3. **ACP / 非交互模式可用性**：#5293（async shell 阻塞响应）、#5108（session/list 逐页全量扫描）、#5229（MCP OAuth 不用 refresh token）。
4. **文档与实现脱节**：#5290（`--fusion-tier` 参数缺失）、#5306（工具标志行为不符），文档同步需要加强。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-31

## 1. 今日速览

OpenCode 今日发布 **v2.2.5**，带来 worktree/分支快捷键和 shell 模式切换，是本周连续第三个版本迭代。社区层面，**免费层（zen free tier）额度问题持续发酵**，主 Issue 评论已突破 149 条，成为当前最大的用户不满来源。同时一批核心修复 PR 合入，包括 MCP 工具加载等待、流错误容错和性能优化，贡献者 @rekram1-node 表现极为活跃。

## 2. 版本发布

### v2.2.5（今日）
- **Worktree 与 Shell 快捷键**：macOS `⌘⌥O` / Win/Linux `Ctrl+Alt+O` 选择 worktree，`⌘⌥B` / `Ctrl+Alt+B` 选择 base 分支；`⌘⇧X` / `Ctrl+Shift+X` 在 composer 中切换 shell 模式。（[Release #60713](https://github.com/anomalyco/opencode/releases)）

### v2.2.4
- **持久化桌面终端**：终端归属于会话，服务重启后保留 scrollback，并与 TUI 及其他窗口保持同步；重命名的终端名称跨重启保留。

### v2.2.3
- **Claude Code 集成**：安装 Claude Code 并 `claude auth login` 后，在 `/connect` 中选择 **Claude Agent** 即可复用其登录和模型。
- **桌面端长会话加速**：流式回复性能优化。

## 3. 社区热点 Issues

1. **[zen] 免费层问题汇总帖**（#59387，149 评论）— 免费额度误报“已用尽”、重置失效、桌面版本被拒等问题的主反馈帖，是当前社区情绪的集中地，官方持续引导用户在此汇报。[Issue](https://github.com/anomalyco/opencode/issues/59387)

2. **TUI 会话内字符串搜索**（#4714，65 👍，45 评论）— 2025 年即提出的老牌功能请求，类似编辑器的 find 功能，至今仍未实现，👍 数长期居首。[Issue](https://github.com/anomalyco/opencode/issues/4714)

3. **免费额度误报耗尽**（#58302，17 评论，已关闭）— 中文用户报告免费小模型在半小时内即提示额度耗尽，怀疑与升级相关，反映免费层 bug 的普遍性。[Issue](https://github.com/anomalyco/opencode/issues/58302)

4. **auto-compact 后 agent 停用顶层工具**（#51949）— 压缩上下文后 agent 只走 code mode 且失败，误报“工具未注册”，属于影响核心工作流的功能性回归。[Issue](https://github.com/anomalyco/opencode/issues/51949)

5. **Copilot Legacy 计划被单次 prompt 耗尽**（#48330）— 单会话消耗掉 1500 次/月的请求配额并触发 429，涉及计费敏感问题。[Issue](https://github.com/anomalyco/opencode/issues/48330)

6. **启动后首条 prompt 无 MCP 工具**（#51812，已复现已关闭）— 已由 PR #60490 修复，`opencode run` 一次性执行此前完全看不到 MCP 工具。[Issue](https://github.com/anomalyco/opencode/issues/51812)

7. **OpenAI 兼容流缺 message 字段即崩**（#60760，今日已复现）— error 对象无 `message` 时 Schema 校验拒绝整个流事件导致会话中断，当天已有对应修复 PR #60767。[Issue](https://github.com/anomalyco/opencode/issues/60760)

8. **桌面端浏览器面板缺失/不可用**（#60444、#60433）— 2.2.2 升级后 Browser 入口消失或 launcher 闪现后消失、`browser.*` 工具缺失，影响新版本核心卖点。[Issue](https://github.com/anomalyco/opencode/issues/60444) / [Issue](https://github.com/anomalyco/opencode/issues/60433)

9. **Windows 插件缓存堆积 38GB**（#51505，已关闭）— 插件安装遗留 `.staging-*` 副本永不清理，极端案例膨胀至 38GB，磁盘隐患典型。[Issue](https://github.com/anomalyco/opencode/issues/51505)

10. **AI 拒绝执行此前可运行的终端命令**（#60765，今日）— 模型行为异常拒绝执行命令，属于 agent 行为可靠性问题的最新案例。[Issue](https://github.com/anomalyco/opencode/issues/60765)

## 4. 重要 PR 进展

1. **fix(core): 模型调用前等待 MCP 启动**（#60490，已合入）— 修复首条 prompt 缺 MCP 工具的顽疾，server 声明 connected 前工具真正可用。[PR](https://github.com/anomalyco/opencode/pull/60490)

2. **fix(ai): 容忍无 message 的流错误**（#60767）— 对应 Issue #60760，当日 issue→PR 闭环。[PR](https://github.com/anomalyco/opencode/pull/60767)

3. **refactor(ai): generate/stream/loop 统一 schema 结构化输出**（#60783，已关闭）— 将 `generateObject` 收敛为 `ai.generate` 等的 `schema` 选项，统一 Promise/Effect 双客户端 API。[PR](https://github.com/anomalyco/opencode/pull/60783)

4. **feat(ai): 支持 "provider/model" 字符串模型**（#60514，已关闭）— `model: "openai/gpt-5.4"` 直接可用，显著降低 SDK 使用门槛。[PR](https://github.com/anomalyco/opencode/pull/60514)

5. **feat(core): 加载 Console workspace 指令与 skills**（#60401，开放中）— 打通 Console 的共享指令/skills 库，是团队协作能力的重要一步。[PR](https://github.com/anomalyco/opencode/pull/60401)

6. **perf(core): 凭据切换仅在插件状态变化时重建 providers**（#60787，已关闭）— 消除切换 API key 时全量重建 provider 目录的开销。[PR](https://github.com/anomalyco/opencode/pull/60787)

7. **perf(core): 忽略无关集成的凭据事件**（#60782，已关闭）— 每个 Location 不再对任意凭据事件全量唤醒，进一步降空闲开销。[PR](https://github.com/anomalyco/opencode/pull/60782)

8. **fix(core): 恢复挂起的会话执行意图**（#60788）— 修复 durable inbox 写入后执行认领丢失的会话不响应问题。[PR](https://github.com/anomalyco/opencode/pull/60788)

9. **fix(tui): 修复最大化/拖拽窗口后黑屏**（#60789）— 直击 TUI 常见视觉 bug。[PR](https://github.com/anomalyco/opencode/pull/60789)

10. **fix(core): 消除 zsh q 标志正则的指数回溯**（#60791）— 修复潜在 ReDoS/性能陷阱。[PR](https://github.com/anomalyco/opencode/pull/60791)

## 5. 功能需求趋势

- **免费层稳定性与额度透明度**：最强烈的社区诉求，涉及误报、重置失效、版本门槛等多个子问题。
- **MCP 生态可靠性**：工具加载时序（#51812）、Code Mode 下工具调用失败（#51849）、skills/MCP 管理 UI（#51692）持续被提及。
- **桌面端体验完善**：浏览器面板、终端持久化、跨端同步是 v2.2 系列的主线。
- **多账号/多 Provider 接入**：Claude Code 登录复用（v2.2.3）、Copilot 计费兼容、自定义 Provider 稳定性。
- **会话数据完整性**：undo/revert 状态损坏（#51360）、事件序列冲突（#51411）、长会话性能。

## 6. 开发者关注点

- **免费层信任危机**：额度系统 bug 频出且重置承诺不兑现，正在侵蚀用户对商业模式的信任，需要官方明确回应。
- **长会话可靠性**：auto-compact 副作用、reasoning 退化循环、大文件写入中断重试均为日常重度使用的阻断项。
- **资源占用**：Windows 内存 90%+、Linux 空闲满核 busy-loop（#51852）、Btrfs 元数据膨胀、38GB 插件缓存——资源纪律性是反复出现的痛点。
- **SDK API 易用性**：社区贡献正推动 `@opencode/ai` 向更简洁的 API 演进（字符串模型、schema 选项、可选 peer deps），值得插件开发者关注可能的破坏性变更。
- **升级路径质量**：deb 包 setuid 缺失导致自动更新必然失败（#58157）等发布工程问题，影响用户留存。

---
*数据来源：github.com/anomalyco/opencode · 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-10-31

## 📌 今日速览

CI/CD 稳定性仍是当前最突出的主题：Managed Agent gate 在 main 分支持续红灯（#15898）并阻塞所有触发完整测试层的 PR。今天发布了 **cua-driver-rs v0.27.0**，包含三平台预编译的 Qwen CUA Driver 二进制。安全方面披露了 **fast-uri 3.1.0 依赖漏洞**（#15919），建议尽快关注。

---

## 🚀 版本发布

### cua-driver-rs v0.27.0
Qwen CUA Driver 预编译二进制（vendored 于 `packages/cua-driver`）：
- **macOS**：已签名 + 公证的 universal binary，附 `QwenCuaDriver.app`
- **Linux**：未签名（x86_64 + arm64，glibc 最低 2.31）
- **Windows**：未签名 UIAccess worker + 原生 SDK payload（x86_64 + arm64）

---

## 🔥 社区热点 Issues（Top 10）

**1. [#15898](https://github.com/QwenLM/qwen-code/issues/15898) — [P1] Managed Agent gate 在 main 分支失败，postFailureLoads 每次运行不一致**
最紧迫的问题：main 上的 Hosted process fault gate 红灯导致每个触发完整层的 PR 都被阻塞，且失败形态在两次运行间发生变化，排查难度大。

**2. [#14724](https://github.com/QwenLM/qwen-code/issues/14724) — [bug] Main CI 失败：Managed Agent gate（101 条评论）**
评论数最高的长期 CI 失败追踪 issue，已持续 12 天，反映 CI 基础设施治理负担沉重。

**3. [#15919](https://github.com/QwenLM/qwen-code/issues/15919) — [P2][security] qwen-code 经 @modelcontextprotocol/client 2.0.0 捆绑 fast-uri 3.1.0**
安全漏洞：MCP client 预捆绑了自己的 ajv + fast-uri，导致 #10862 的 3.1.7 升级未生效，3.1.0 落在 CVE 影响范围内。

**4. [#15795](https://github.com/QwenLM/qwen-code/issues/15795) — [P1] Harness 池中 draining Harness 对 Session fire 返回 404，导致自动化被永久退役**
由核心维护者 @wenshao 报告的 managed-agent 会话管理竞态问题，涉及后台自动化（daemon）可靠性。

**5. [#15276](https://github.com/QwenLM/qwen-code/issues/15276) — [P1] Windows 桌面更新失败："Error opening file for writing"，node.exe 被捆绑运行时锁定**
影响 Windows 桌面用户就地升级的实际体验问题，已有对应修复 PR #15473 进行中。

**6. [#8432](https://github.com/QwenLM/qwen-code/issues/8432) — [P2] 百炼个人 Token Plan 模型列表不同步，图像/视频生成失败**
`/auth` 内置模型列表与百炼控制台实际列表脱节，直接影响国内 Token Plan 用户体验，已挂起近 3 个月待人工处理。

**7. [#15861](https://github.com/QwenLM/qwen-code/issues/15861) — [P1] web-shell host-directory-picker smoke 测试确定性超时**
与 PR 无关的确定性失败，导致每个无关 PR 都要付出一轮失败归因成本。

**8. [#15493](https://github.com/QwenLM/qwen-code/issues/15493) — [P2] 记忆提取 agent 使用滑动 40 条窗口，前缀在会话开始后可变**
性能洞察：提取器前缀随每轮对话变化，破坏了 prompt 前缀不可变性，影响缓存命中率。

**9. [#12514](https://github.com/QwenLM/qwen-code/issues/12514) — [P2] Session-commit 注册未覆盖所有提交路径，产生误报的 amend 拦截**
安全/边界场景：会话提交登记不完整，导致合法 amend 被错误阻止为"非本会话 agent 所做"。

**10. [#15310](https://github.com/QwenLM/qwen-code/issues/15310) — [P3] 应告知模型当前使用的 shell，而非让其假设 bash**
Windows 上的高价值改进：模型默认 POSIX shell 导致命令失败，每次失败浪费一整轮。

---

## 🔀 重要 PR 进展（Top 10）

**1. [#15473](https://github.com/QwenLM/qwen-code/pull/15473) — fix(desktop): 更新前先停止捆绑运行时**
直击 #15276：Windows 应用内更新前关闭守护进程持有的 Node 进程，标记 job object 为 kill-on-close。

**2. [#15923](https://github.com/QwenLM/qwen-code/pull/15923) — fix(core): Windows 文件工具解析 MSYS 路径**
修复 Git Bash 下 `/tmp` 被 MSYS 映射到 OS 临时目录、而文件工具按字面解析导致 "File not found" 的问题。

**3. [#15962](https://github.com/QwenLM/qwen-code/pull/15962) — refactor(managed-agent): 将 AgentStateStore 拆分为六个角色接口**
Managed Agent 结构审查 P0 第 3 步：admission、lifecycle、query、policy、event projection、turn execution 六个内聚接口。

**4. [#15466](https://github.com/QwenLM/qwen-code/pull/15466) — feat(serve): 新增 user 作用域 Skill 激活路由**
`PUT /skills/:name/activation` 及批量路由，所有工作区继承的 user 级 Skill 开关能力。

**5. [#15947](https://github.com/QwenLM/qwen-code/pull/15947) — fix(cli): 原生扩展安装命令恢复确认对话框**
安全修复：恢复 OpenTUI 中直接安装扩展前的用户确认，过期请求会被取消。

**6. [#15978](https://github.com/QwenLM/qwen-code/pull/15978) — feat(autofix-pr): 报告被阻塞的轮次并说明合并边界**
自动化透明度改进：autofix 无法推进时明确说明尝试了什么、被什么阻塞、需要什么。

**7. [#15927](https://github.com/QwenLM/qwen-code/pull/15927) — fix(managed-agent): 关闭拆分后的验证缺口**
补齐取消探测、Maven 嵌入和 Hosted 故障注入测试的验证缺口。

**8. [#15974](https://github.com/QwenLM/qwen-code/pull/15974) — ci: Lint & Static 全量路由到 ECS**
包括无写权限贡献者的 fork PR，缓解 CI 资源瓶颈。

**9. [#12513](https://github.com/QwenLM/qwen-code/pull/12513) — feat(serve): 批量工作区会话实时状态快照**
一次只读请求获取 1–20 个已注册工作区的完整实时会话快照，各工作区独立成败。

**10. [#14140](https://github.com/QwenLM/qwen-code/pull/14140) — fix(cli): Local Control 接受 RFC 1918/3927 之外的显式地址**
将显式传入的 `--local-control-address` 视为运维意图，覆盖使用公网段编址内网的场景。

---

## 📈 功能需求趋势

1. **CI/CD 可靠性与效率**（最强主题）：#15052 per-SHA E2E 验证、#15969 Triage Finalize 运行膨胀、#15973/#15975/#15976 系列测试加固 —— 大量 issue/PR 聚焦于让 CI 更快、更稳定、少误报。
2. **Managed Agent / 后台自动化**：Harness 池、会话生命周期、故障注入测试是近期开发重心（#15795、#15962、#15927、#15981）。
3. **Windows 体验**：shell 声明（#15310）、MSYS 路径（#15923）、更新锁定（#15276）形成清晰的 Windows 痛点集群。
4. **性能与前缀缓存**：#15493 揭示的 prompt 前缀不变性问题，属 roadmap/context-performance。
5. **Web Shell / Desktop UI 打磨**：会话列表可发现性（#12576）、Split View 空窗格（#14576）等长尾 UI 改进。
6. **安全加固**：依赖漏洞（#15919）、提交路径登记（#12514）、扩展安装确认（#15947）。

---

## 🛠 开发者关注点

- **CI 红灯是最大噪音源**：Managed Agent gate、E2E、Desktop Checks 多条 lane 在 main 持续失败且与 PR 无关，贡献者每提一个 PR 都要经历失败归因流程。相关修复（#15974 路由 ECS、#15979 tmpdir 路由）正在进行。
- **Autofix 自动化流程在成熟**：deferred review、blocked-round 报告、五轮审查规则等机制说明项目在人机协作审查上投入很大，但也带来流程复杂度。
- **依赖供应链风险**：传递依赖被预捆绑导致升级不生效（#15919），建议关注此类"锁定在子依赖内部"的漏洞模式。
- **Windows 一等公民化呼声**：开发者反复报告 Windows 上 shell 假设、路径映射、文件锁定三类问题，是最具体可落地的改进方向。

---
*数据截至 2026-10-31 · 来源：QwenLM/qwen-code GitHub*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-10-31 | 数据来源：[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)**

---

## 1. 今日速览

过去 24 小时无新版本发布，社区活动集中在 **main 分支 CI 全面瘫痪**的修复上：#7148 指出 `PersistRequest::ClearCheckpoint` 成为死代码导致所有 PR 必需检查失败，#7154 报告三个测试在所有 PR 上稳定失败，修复 PR #7155 已提交并关闭。此外，dependabot 单日发起 10 个依赖升级 PR，@Lstarsky0 连续提交多个 TUI 渲染细节修复，HarmonyOS 原生构建支持也有新进展（#7151）。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（过去 24 小时共 3 条更新，全部列出）

### 🔴 #7148 main 分支无法编译，所有 PR 必需检查失败（OPEN）
- **作者**：@gaord | 💬 1 评论
- **为什么重要**：`crates/tui/src/tui/persistence_actor.rs:80` 的 `ClearCheckpoint` 变体从未被构造，违反工作区自身的 lint 策略，导致**所有外部贡献均无法合并**，是当前项目最紧急的阻塞问题。
- 链接：[Issue #7148](https://github.com/codewhale-hq/Codewhale/issues/7148)

### 🟡 #7154 三个测试在所有 PR 上稳定失败（CLOSED，已修复）
- **作者**：@luochen211 | 💬 1 评论
- **为什么重要**：`Test (ubuntu-latest)` 上 `golden_providers_export_matches_registry` 等三个测试与 PR 内容无关地稳定失败，源于 providers 目录变更和 context-window fixture 损坏。已由 [PR #7155](https://github.com/codewhale-hq/Codewhale/pull/7155) 修复关闭。
- 链接：[Issue #7154](https://github.com/codewhale-hq/Codewhale/issues/7154)

### 🟡 #7153 自动上下文压缩耗时超预期（OPEN）
- **作者**：@luestr | 尚无回复
- **为什么重要**：用户报告阈值设为 80% 触发自动压缩后，进程耗时超过 **3 分钟**，直接影响交互体验。属于当前唯一的新增用户侧 bug 报告，尚待维护者分拣。
- 链接：[Issue #7153](https://github.com/codewhale-hq/Codewhale/issues/7153)

---

## 4. 重要 PR 进展（精选 10 个）

| # | 标题 | 作者 | 状态 | 要点 |
|---|------|------|------|------|
| [#7155](https://github.com/codewhale-hq/Codewhale/pull/7155) | 修复 main 上三个损坏测试 | @luochen211 | CLOSED | 仅修 fixture 与 golden 文件，无生产代码改动，配合 #7154 关闭 |
| [#7151](https://github.com/codewhale-hq/Codewhale/pull/7151) | HarmonyOS 原生构建修复 + 签名 arm64 release | @gaord | OPEN | 修复 `docs/HarmonyOS.md` 指引无法从干净 checkout 构建的问题 |
| [#7158](https://github.com/codewhale-hq/Codewhale/pull/7158) | 裸 URL 在全角标点处截断 | @Lstarsky0 | OPEN | 中日文文本无空格导致 OSC 8 链接指向不存在页面，CJK 用户体验修复 |
| [#7157](https://github.com/codewhale-hq/Codewhale/pull/7157) | 保留不构成强调语法的星号 | @Lstarsky0 | OPEN | 修复 `*kwargs` 等技术文本被误渲染为斜体/粗体 |
| [#7156](https://github.com/codewhale-hq/Codewhale/pull/7156) | `~~~` 围栏渲染为代码块 | @Lstarsky0 | OPEN | 渲染器此前只识别反引号围栏，与代码库其他模块行为不一致 |
| [#7152](https://github.com/codewhale-hq/Codewhale/pull/7152) | 移除 fleet roster 刷新的冗余状态回复 | @Lstarsky0 | OPEN | `Op::SetFleetRoster` 已有回执，去除重复噪音输出 |
| [#7150](https://github.com/codewhale-hq/Codewhale/pull/7150) | 统一 zh-Hans 代词与 provider/token 术语 | @luochen211 | OPEN | 消除「你/您」混用（49 处）及「提供商/provider」等术语不一致 |
| [#7149](https://github.com/codewhale-hq/Codewhale/pull/7149) | 移除 fleet alerts 与 pet worker 的全局 dead_code allow | @luochen211 | OPEN | #5587 死代码清理的一小片，交由 `-D warnings` 判定 |
| [#7125](https://github.com/codewhale-hq/Codewhale/pull/7125) | 尊重本地模型 reasoning 等级 | @gannp | OPEN | vLLM 适配器统一发送 low/medium/high，但 Qwen3.8 模板只接受 low/medium/xhigh，导致请求被拒 |
| [#6393](https://github.com/codewhale-hq/Codewhale/pull/6393) | 无索引源码导航回显与受保护的 fork 前缀继承 | @AdityaVG13 | OPEN | 长期 PR（9/21 至今仍在更新），保留原贡献者署名，无索引守护进程 |

**另**：dependabot 单日发起 10 个依赖升级 PR（#7159–#7167），涵盖 `jsonwebtoken` 10.4→11.1（大版本）、`toml`、`htmd`、`uuid`、`liblzma`、GitHub Actions 等，均为例行维护。

---

## 5. 功能需求趋势

从近期 Issues 与 PR 提炼出以下方向：

1. **CI/贡献流程可靠性**（最突出）：main 分支编译失败与测试损坏直接阻塞所有外部贡献，社区连续两条 issue 报告同一类问题，反映对 CI 健康的强需求。
2. **本地模型兼容性**：#7125 显示社区积极推动 vLLM 本地推理模板（Qwen3.8 等）的 reasoning 等级适配。
3. **跨平台支持**：HarmonyOS 原生构建与签名发布（#7151）是平台扩展的重要一步。
4. **TUI 渲染细节打磨**：Markdown 渲染（`~~~` 围栏、星号转义）、CJK 文本处理（全角标点断链）等细粒度体验优化活跃。
5. **国际化质量**：zh-Hans 术语统一（#7150）表明中文用户群规模可观且受到重视。

---

## 6. 开发者关注点

- **⚠️ 贡献通道阻塞**：#7148 的编译错误使每个 PR 的必需检查失败，是当前最高优先级问题，建议维护者优先处理（可能与 #7149 的 dead_code 清理联动）。
- **上下文压缩性能**：#7153 报告压缩耗时 >3 分钟且尚无人响应，长会话场景下的性能瓶颈值得跟进。
- **golden 测试维护成本**：providers golden 文件随模型目录（MiniMax-M3.1-Flash、kimi-k3.1 系列等）频繁变更而失效（#7154/#7155），提示需要更健壮的测试策略。
- **依赖升级积压**：10 个 dependabot PR 待审，其中 `jsonwebtoken` 跨大版本（10→11）需评估 API 兼容性。

---
*本日报基于 GitHub 公开数据自动汇总，由 AI 生成，仅供参考。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-10-31

## 今日速览

今日无新版本发布，但 @petrroll 密集合并了 7 个修复/功能 PR，覆盖 tool search 排序、WSL 兼容、自更新机制等长期痛点，是近期最活跃的提交日之一。社区讨论焦点集中在 Windows/WSL 环境兼容性（#7547 已积累 93 条评论）和 OpenAI OAuth 认证问题。

## 版本发布

过去 24 小时无新 Release。

## 社区热点 Issues

1. **[#7547](https://github.com/earendil-works/pi/issues/7547) [Windows] 你在 Windows 上如何使用 Pi？遇到了什么问题？**
   官方发起的 Windows 体验调研帖，评论已达 93 条。社区大量反馈 Windows 下运行方式碎片化的问题，将直接影响后续 Windows 支持的优先级决策。

2. **[#11599](https://github.com/earendil-works/pi/issues/11599) RPC 模式下异步 ctx.shutdown() 无法退出空闲进程**
   今日新报。`--mode rpc` 进程在 stdin 保持打开时，扩展异步调用 `ctx.shutdown()` 后进程不退出，需等待下一条 RPC 命令才处理关闭请求，影响 RPC 集成场景的可靠性。

3. **[#10954](https://github.com/earendil-works/pi/issues/10954) [p0] anthropic-messages：工具列表变更后重放 thinking 块返回 400**
   高优先级问题，OpenCode Go 端点上重放的 thinking block 触发 400 错误，`block_binding` 仅在 `supportsMidConvoEffort` 时发送，影响多轮工具调用会话的稳定性。

4. **[#6665](https://github.com/earendil-works/pi/issues/6665) TUI 流式输出时占满一个 CPU 核心**
   长会话中 `Intl.Segmenter` 未缓存 + 逐 chunk 重建 Markdown 导致单核 100%，7 个 👍 说明影响面广，是性能类的头号痛点。

5. **[#10628](https://github.com/earendil-works/pi/issues/10628) tmux 下 OSC 52 复制被吞掉**
   全屏 TUI 的 copy-on-select 未做 tmux passthrough 包装，SSH 远程无图形环境的场景复制完全失效，6 个 👍。

6. **[#10605](https://github.com/earendil-works/pi/issues/10605) OpenAI OAuth 登录 403 错误**
   Plus 订阅用户遇到 `subscription_sharing_user_not_eligible`，logout/login 无法解决，与近期多个 OpenAI 认证问题（#10953、#10480）同属一个故障簇。

7. **[#10256](https://github.com/earendil-works/pi/issues/10256) mintty 下终端颜色查询响应泄漏进提示符**
   0.99.x 回归问题：OSC 颜色查询响应混入输入并被解析为快捷键，导致启动即打开外部编辑器。今日已有修复 PR（#11609）落地。

8. **[#8643](https://github.com/earendil-works/pi/issues/8643) Bedrock 上 OpenAI 模型拒绝 toolResult 中的图片**
   贡献者已在 fork 上备好修复与回归测试（将图片提升至同级 user content block），等待合入。

9. **[#10157](https://github.com/earendil-works/pi/issues/10157) Gemini tool-call thought signature 在 OpenAI 兼容端点下丢失**
   Pi 重放 tool call 时丢弃了 `extra_content.google.thought_signature`，可能导致 Gemini 拒绝后续请求，AI Studio 用户受影响。

10. **[#11331](https://github.com/earendil-works/pi/issues/11331) tool_search 精确名查询返回错误工具（已修复）**
   精确工具名查询被描述更短的工具抢占，今日连续三个排名修复 PR（#11625/#11631/#11632）跟进，体现该问题的排序设计权衡之难。

## 重要 PR 进展

1. **[#11625](https://github.com/earendil-works/pi/pull/11625) tool search 中工具名权重高于描述**（已合并）
   修复 #11331：将工具名与描述分开计分，去除混入每个工具文本中的服务器指令。

2. **[#11632](https://github.com/earendil-works/pi/pull/11632) 按匹配查询词数量排序**（已合并）
   #11625 的回归修复：避免名称单次匹配压倒描述中的多次匹配（如 `screenshot window` 查询）。

3. **[#11631](https://github.com/earendil-works/pi/pull/11631) durable 同步 tool search 排序逻辑**（已合并）
   将 coding agent 的排序修复移植到 durable 的独立 ranker 副本，修复 `thread_read` 被 `queue_read` 抢占的问题。

4. **[#11629](https://github.com/earendil-works/pi/pull/11629) 新增 PI_SELF_UPDATE_COMMAND 自更新机制**（已合并）
   支持 mise、Nix、pnpm 包装器等场景下由外部命令接管 `pi update`，解决多机用户“记不住哪台机器用什么更新”的痛点。

5. **[#11628](https://github.com/earendil-works/pi/pull/11628) 修正安装方式检测**（已合并）
   修复 #7756：仅当包管理器真正管理安装时才在 `pi update` 中指名，`PNPM_HOME` 下的 wrapper 不再被误判为 pnpm。

6. **[#11630](https://github.com/earendil-works/pi/pull/11630) 向扩展渲染器传递宿主快捷键提示**（已合并）
   修复 #4748（长期 OPEN 的扩展单例问题）：扩展解析到自己的 pi-tui 副本时也能获得正确 keybindings。

7. **[#11627](https://github.com/earendil-works/pi/pull/11627) WSL interop 从 / 启动 Windows 程序**（已合并）
   修复深目录下 `\\wsl.localhost\...` 路径超 MAX_PATH 导致 powershell.exe 启动失败的问题。

8. **[#11609](https://github.com/earendil-works/pi/pull/11609) 消费 mintty 无前缀的调色板响应**（已合并）
   修复 #10256：mintty 在 DA1 后返回无 OSC 4 前缀的调色板响应，此前被逐字符误解析。

9. **[#11370](https://github.com/earendil-works/pi/pull/11370) 新增 6 家托管推理 Provider**（OPEN）
   @mitsuhiko 提交：DeepInfra、Nebius、Ollama Cloud、Scaleway、SiliconFlow、StepFun，数据来自 models.dev，共覆盖数百个模型。

10. **[#11619](https://github.com/earendil-works/pi/pull/11619) durable 新增 beforeProviderRequest 钩子**（已合并）
    扩展可在请求发送前替换 provider request body，对齐 coding-agent 的 `before_provider_request`，支持设置 Anthropic thinking 等厂商特有字段。

其他值得注意的合并：[#11606](https://github.com/earendil-works/pi/pull/11606)（Code Mode 中 read 返回图片块）、[#11607](https://github.com/earendil-works/pi/pull/11607)（chord 完整移除 ANSI 转义序列）、[#11605](https://github.com/earendil-works/pi/pull/11605)（env watcher 帧溢出报告）、[#11608](https://github.com/earendil-works/pi/pull/11608)（权限门禁命令 token 化检查）、[#11617](https://github.com/earendil-works/pi/pull/11617)（文档化会话恢复的工作目录）。

## 功能需求趋势

- **Windows/WSL 一等公民化**：#7547 大调研 + 多个 WSL 修复落地，官方明显在收敛 Windows 支持策略。
- **多云 Provider 扩展**：#11370 一举接入 6 家托管推理商，叠加 Bedrock、Gemini 等兼容性问题，多模型支持仍是核心投入方向。
- **扩展生态与 RPC/Headless 集成**：durable 钩子（#11619）、扩展重载（#7948 已合并）、RPC 生命周期（#11599）——把 Pi 嵌入其他应用的诉求持续增长。
- **终端兼容性精细化**：mintty、tmux、kitty/NumLock、OSC 52 等问题集中出现，TUI 对非主流终端的兼容是长期战线。
- **可观测与自动化**：`--print` 语义（#9718）、退出码、tok/s 指标扩展（#10145）等 CLI 自动化场景需求活跃。

## 开发者关注点

- **OpenAI 认证故障簇**：#10480、#10605、#10953 三 issue 均涉及订阅登录/OAuth 失败，社区 workaround（切换 legacy Codex 登录）不总是有效，官方需系统性梳理。
- **性能开销**：TUI 流式渲染单核打满（#6665）和启动延迟预算（#7739）是两大性能抱怨，缓存与渲染管线优化呼声高。
- **会话状态健壮性**：畸形 tool call 卡死会话（#10299）、error turn 留下未匹配 toolCall（#9306）、上下文溢出不触发压缩（#10879）——异常路径下的上下文一致性是高频 bug 来源。
- **自更新与包管理器碎片化**：pnpm/mise/Nix 等安装方式导致的检测与更新混乱，今日已通过 #11628/#11629 双 PR 系统性解决。
- **AI 参与报告成为常态**：多个 issue/PR 明确标注 AI 起草（#10954、#11331），社区对此已形成披露惯例，工具链质量总体较高。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# 📰 oh-my-pi 社区动态日报 · 2026-10-31

## 一、今日速览

oh-my-pi 发布 **v18.14.1**，包含 `pi-agent-core` 的 Breaking Change（`inactiveFor` API 重构）。认证与稳定性问题成为今日焦点：`agent.db` SQLite 锁损坏问题持续发酵（新增一份 18.13.1/18.14.0 的复现报告），Muse Code 订阅密钥遭上游封锁引发社区讨论，另有 Anthropic OAuth 凭证误禁用等 p1 级新 Issue。PR 侧，多位贡献者（@sjawhar、@wolfiesch）集中提交会话生命周期与 MCP 健壮性修复。

---

## 二、版本发布

### v18.14.1 ([Release](https://github.com/can1357/oh-my-pi/releases))
**@oh-my-pi/pi-agent-core Breaking Changes：**
- `SentToolDefinitions.inactiveFor(messages, tools)` 被 `withInactiveTools(context)` 取代，同时会清理过期的 `inactiveTools`
- `transformProviderContext` 现在接收请求的 `inactiveTools`（关联 [#17492](https://github.com/can1357/oh-my-pi/pull/17492)）

---

## 三、社区热点 Issues

1. **[#15586](https://github.com/can1357/oh-my-pi/issues/15586) — in-process grep 破坏 agent.db SQLite POSIX 锁，导致凭证存储损坏**（p1，20 评论）
   最受关注的问题。进程内 ripgrep 绑定遍历文件时 `close()` 会释放同进程 SQLite 连接持有的 POSIX advisory 锁，触发 WAL unlink + 过期 checkpoint，最终损坏凭证库。今日出现关联现场报告 #17478，问题正在多个版本上复现。

2. **[#17435](https://github.com/can1357/oh-my-pi/issues/17435) — Muse Code 订阅密钥仅限官方客户端使用**（7 评论，wontfix 倾向）
   `api.meta.ai` 开始返回 403 拒绝第三方客户端使用 Muse Code 订阅密钥。这是上游政策变化，非 omp 可控，但直接影响一批用户的工作流；配套请求见 #17444。

3. **[#17468](https://github.com/can1357/oh-my-pi/issues/17468) — Anthropic usage poller 因 invalid_grant 误禁用 OAuth 凭证**（p1）
   18.14.0 中后台用量轮询失败也会强制 `/login`，用户两天内被要求重登四次，疑似回归。

4. **[#17472](https://github.com/can1357/oh-my-pi/issues/17472) — Codex usage_limit_reached 在同一凭证上重复上报 55,376 次而不暂停**（p1）
   Advisor 看门狗契约失效，零 token 失败无限循环，对 API 配额和日志都是灾难。

5. **[#11600](https://github.com/can1357/oh-my-pi/issues/11600) — 请求移植 Pi 的 tuiMode 全屏底部停靠栏**（👍 20，10 评论）
   社区呼声最高的 UX 需求：编辑器、队列消息、widget 固定底部，transcript 在上方滚动。

6. **[#14948](https://github.com/can1357/oh-my-pi/issues/14948) — RPC 模式下 session_settled 永不触发**（p2）
   失败的 `todo` 调用 + 后续 steer 消息组合会让会话永远无法报告 idle，影响依赖 settle 语义的 RPC 客户端。

7. **[#2888](https://github.com/can1357/oh-my-pi/issues/2888) — RFC：MCP 服务器 lazy/eager 生命周期 + idleTimeout**（9 评论）
   长期讨论的提案，要求按需启动 stdio MCP 服务器以降低会话启动开销，随 MCP 生态扩大愈发重要。

8. **[#16672](https://github.com/can1357/oh-my-pi/issues/16672) — 重启后 subagent 将全部 MCP schema 顶层注入，每轮 ~199k token**（性能问题）
   连接完成前创建的会话在重启后丢失 `xd://` 挂载机制，token 开销接近爆炸。

9. **[#17524](https://github.com/can1357/oh-my-pi/issues/17524) — WSL2 上 OMP 被 OOM kill，RSS 达 ~14 GiB**（今日新增）
   长生命周期会话 + 840 MB ledger 导致内存失控，关联 #16440，是大会话内存管理的最新案例。

10. **[#12487](https://github.com/can1357/oh-my-pi/issues/12487) — Google 明确禁止第三方工具使用 Antigravity/Gemini CLI OAuth**（👍 5）
    上游合规风险议题，与 Muse Code 事件同属“订阅凭证第三方使用”红线，值得所有用户关注。

---

## 四、重要 PR 进展

1. **[#17514](https://github.com/can1357/oh-my-pi/pull/17514)** — TUI 中显示被 `/shake` 省略的工具结果，UI 可见但不进模型上下文（review:p1）。
2. **[#17450](https://github.com/can1357/oh-my-pi/pull/17450)** — MCP 配置引用未设置的 `${VAR}` 时快速失败并提示变量名，而非以字面量启动服务器（review:p1）。
3. **[#17452](https://github.com/can1357/oh-my-pi/pull/17452)** — 阻止 `git rebase -i` 和 Git Credential Manager 的交互式提示挂死 bash 命令（review:p1）。
4. **[#17402](https://github.com/can1357/oh-my-pi/pull/17402)** — 修复 aside 在 transition/bailed prompt 场景下的 session settle 承诺，直接关联 Issue #14948（review:p1）。
5. **[#17412](https://github.com/can1357/oh-my-pi/pull/17412)** — 解释器无限循环中补充 yield，同时修复一个易被忽略的崩溃（review:p1）。
6. **[#17294](https://github.com/can1357/oh-my-pi/pull/17294)** — 展开 APPEND_SYSTEM.md / SYSTEM.md 中的 `@path` import（review:p1）。
7. **[#17488](https://github.com/can1357/oh-my-pi/pull/17488) + [#17398](https://github.com/can1357/oh-my-pi/pull/17398)** — gc 体系修复：归档会话可通过 `gc --restore` / `gc --reclaim` 恢复；默认 sweep 不再归档无人可读的会话。
8. **[#17396](https://github.com/can1357/oh-my-pi/pull/17396)** — 无 HTTP 状态的 wire 失败时保持 fallback 链，避免重试层吞掉请求。
9. **[#17403](https://github.com/can1357/oh-my-pi/pull/17403)** — mnemopi 补齐 recall 已在读取的 `facts.scope` 列，完成半成品的 fact 作用域特性。
10. **[#17525](https://github.com/can1357/oh-my-pi/pull/17525)** — 识别 herdr-app 终端，使 `/fork pane|tab` 在 Herdr 桌面应用中可用（今日新提交）。

---

## 五、功能需求趋势

- **MCP 生命周期与健壮性**：lazy 连接 + idleTimeout（#2888）、配置快速失败（PR #17450）、schema 挂载修复（#16672）——MCP 可靠性是当前最密集的方向。
- **认证与上游政策合规**：Muse Code / Google / Anthropic 订阅凭证接连受限（#17435、#12487、#17444），第三方 OAuth 安全化成为迫切需求。
- **TUI/UX 体验**：全屏底部停靠栏（#11600，👍 20）、AskQuestion 交互（#17029）、中文 IME 输入定位（#17427）。
- **会话生命周期与资源管理**：gc 归档/恢复、OOM、worktree 托管（#14047）、eval 内核清理（PR #17394）。
- **成本与 token 效率**：completionProbe 指定廉价模型（#17408）、prompt cache 可观测性（#17406）、压缩摘要保留 skills（PR #17451）。

## 六、开发者关注点

1. **数据完整性是最大痛点**：`agent.db` SQLite 锁损坏（#15586、#17478）已跨越多个版本，直接影响凭证与会话存储，社区在自行提交修复方案。
2. **Advisor/后台轮询缺乏看门狗**：usage_limit_reached 循环 5.5 万次（#17472）、byte-identical 重发（#17473）、invalid_grant 误禁用（#17468），后台任务的失败恢复逻辑普遍薄弱。
3. **长会话内存与稳定性**：14 GiB OOM（#17524）、840 MB ledger，重度用户需要更好的会话治理工具。
4. **跨平台细节**：Windows split commit 中止（#17446）、macOS 中文 IME、WSL2 内存限制——边缘平台问题不可忽视。
5. **上游订阅政策风险**：Muse Code、Google 相继封锁第三方客户端，用户需评估迁移到 pay-as-you-go 或官方支持的认证方式。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*