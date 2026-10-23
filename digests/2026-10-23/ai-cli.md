# AI CLI 工具社区动态日报 2026-10-23

> 生成时间: 2026-10-23 03:52 UTC | 覆盖工具: 11 个

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
**数据日期：2026-10-23**

---

## 1. 生态全景

AI CLI 工具已进入“多agent协作 + 企业级管控”并行的深水区：各家都在从单一编码助手向可托管、可扩展、可远程编排的 agent 平台演进。安全成为今日最突出的主线——Claude Code 修复 sandbox 逃逸、Gemini CLI 加固凭据存储、OpenCode 权限模型被绕过、oh-my-pi 遭遇供应链 CVE，安全收敛期特征明显。同时企业侧（组织策略、托管配置、Hooks 治理）成为头部工具的差异化战场，而 Windows 平台稳定性则是全行业的共同债务。

---

## 2. 各工具活跃度对比

| 工具 | Release | 热点 Issues | PR 动态 | 活跃度评级 |
|---|---|---|---|---|
| Claude Code | v2.1.308/309（含2项安全修复） | 10+（Mods 回归、143GB 磁盘泄漏） | 7+（Mods/sec-default 系列） | ★★★★★ |
| OpenAI Codex | 4 个 Rust alpha（0.163–0.164） | 10（含已修复的高热 #55744，168👍） | 10+（托管配置/hook 基建密集） | ★★★★★ |
| Gemini CLI | v0.67.0-nightly | 10（Subagent 可靠性为主） | 13+（社区贡献活跃） | ★★★★☆ |
| OpenCode | v1.19.4（Bun 安全升级） | 10（沙箱缺失 80👍、权限绕过） | 10+（桌面端性能攻坚） | ★★★★☆ |
| Qwen Code | v0.26.0-nightly | 10（P1 工具结果丢失） | 10（托管架构推进） | ★★★☆☆ |
| oh-my-pi | 无（18.12.6） | 66 条更新 | 287 条更新 | ★★★★★ |
| GitHub Copilot CLI | v1.0.103 | 10（安全绕过、MCP OAuth） | 0 | ★★★☆☆ |
| Pi | 无 | 10（P0 启动崩溃） | 10（HTML 导出修复） | ★★★☆☆ |
| DeepSeek TUI (CodeWhale) | 无 | 5 | 8（FEAT-031 合并） | ★★☆☆☆ |
| Kimi Code / DeepSeek Harness | 无 | 0 | 0 | — |

---

## 3. 共同关注的功能方向

**① 安全与权限治理（全行业）**
- Claude Code：sandbox 逃逸修复 + sec-default 组织策略层级（PR #99137 单向收紧模型）
- OpenCode：复合命令绕过权限检查（#52083）、沙箱缺失是最长寿热点（#2242）
- Copilot CLI：信任文件夹静默执行命令（#5232）、子 Agent hook 旁路（#3013）
- Gemini CLI：凭据原子化写入、shell wrapper 绕过修复、破坏性操作防护（#22672）

**② 企业托管与策略管控**
- Claude Code（组织策略 > 插件层级）、Codex（环境级托管 hooks、config server、认证解耦）、Qwen Code（K8s Harness 池、Runtime 探测门控）三家的 PR 主线均指向企业管控基建。

**③ Windows 平台稳定性（普遍债务）**
- Claude Code（143GB 输出文件、句柄泄漏数天）、Codex（11.6–59GB 内存泄漏）、Qwen Code（更新文件锁）、Copilot CLI（WSL2 语音崩溃、进程树残留）。

**④ 静默失败/虚假成功不可接受**
- Gemini CLI Subagent 虚假上报 success（#22323）、oh-my-pi 写坏文件仍返回成功（#16799）、Qwen Code 工具结果丢失（#15297）、Pi 社区明确要求可观测的失败反馈——“退出码 0 但结果错误”是跨社区的高频控诉。

**⑤ 后台/长时任务生命周期管理**
- OpenCode 后台 shell 被驱逐机制误杀（#51828）、Claude Code 后台任务进程泄漏、oh-my-pi 呼吁原生 cron 调度（#2763）。

**⑥ MCP 生态健壮性**
- Copilot CLI（OAuth token 不刷新集中爆发）、Claude Code（elicitation 未接线）、OpenCode（补齐 elicitation 表单）、Qwen Code（请求迁移 MCP 2026-07 新规范）。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 扩展生态 + 组织安全治理 | 企业开发团队、Mods 开发者 | 插件层级化权限模型，云/桌面/移动多端 |
| **OpenAI Codex** | 桌面体验 + 企业托管配置 | ChatGPT 生态用户、企业 | Rust CLI + 桌面端 + Dots 集成，快速 alpha 迭代 |
| **Gemini CLI** | Subagent 编排 + AST 代码理解 | 开源社区、多 agent 探索者 | 开源社区驱动，hooks 兼容 Claude Code（主动迁移映射） |
| **Copilot CLI** | GitHub 原生集成 + 语音/会话体验 | GitHub 生态开发者 | 紧耦合 GitHub/ACP，云端会话 |
| **OpenCode** | 桌面端 + 模型中立 | 多模型自由切换用户 | 桌面优先（Tauri 系），Go 商业套餐变现 |
| **Qwen Code** | 托管 Agent + Web Shell | 自动化/托管场景 | Daemon + Runtime Broker + K8s 池 |
| **Pi / oh-my-pi** | 轻量、性能、高度可配置 | 重度个人用户、多账号成本敏感者 | 性能对标竞品基准，插件 marketplace |
| **DeepSeek TUI** | TUI 工程质量与架构解耦 | 终端重度用户 | Rust crate 化重构、agent mail 协议先行 |

---

## 5. 社区热度与成熟度

- **最活跃**：oh-my-pi（24h 66 Issues / 287 PRs，“上午报 Issue、下午出 PR”的修复节奏罕见）；Codex、Claude Code 保持高频但更结构化。
- **快速迭代/不稳定期**：Codex（4 alpha/日，但 26.1016 版本同时引入双平台回归）、Copilot CLI（社区明确呼吁 Stable 通道）、Qwen Code（nightly 出 P1 正确性 bug）、OpenCode 桌面端（打包缺陷集中）。
- **相对成熟/工程化**：Claude Code（安全修复发布规范，但 sec-default 回归暴露策略层设计仍需磨合）、Gemini CLI（社区贡献流程健康，P1 响应及时）。
- **长尾/早期**：DeepSeek TUI（国际化基本功如 UTF-8 处理仍需补课）、Kimi Code、DeepSeek Harness（近乎静默）。

---

## 6. 值得关注的趋势信号

1. **安全从“功能”变为“入场券”**：Claude Code 的 sec-default、Codex 的托管 hooks、Gemini 的凭据加固都在构建“组织策略 > 个人配置”的不可绕过层级。对开发者的启示：agent 工具的权限模型正走向企业审计级，自建扩展需适配单向收紧约束。

2. **静默失败成为信任杀手**：跨 5+ 社区的共同控诉。构建 agent 工作流时应默认假设“结果未送达/结果错误但报成功”，为关键步骤添加独立验证。

3. **无人值守/远程 agent 是下一战场**：Claude Code Remote Control、Codex iOS Remote、Qwen 托管自动化、oh-my-pi cron 诉求——但当前可靠性（自动更新打断会话、推送不到达）均未达标。生产无人值守场景建议固定版本 + 自带监控。

4. **Windows 是全行业短板**：进程树管理、文件锁、MSYS2 兼容性问题贯穿所有工具。Windows 重度用户应优先验证后台任务清理行为，警惕磁盘/内存泄漏。

5. **生态兼容正在形成**：Gemini CLI 迁移 Claude Code hook 映射、Qwen Code 制定 Claude Code 兼容基线、Pi 对齐 Claude 的 context 文件行为——Claude Code 事实上成为 hook/配置的事实标准，扩展开发者按此标准开发可获得跨工具复用。

6. **成本透明是重度用户刚需**：headless 计费差异（Claude #97074）、成本计算偏差（Pi #9980）、多桶配额展示（oh-my-pi）——自动化场景下的 token 成本核算工具存在明显市场空间。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
（数据截止 2026-10-23，来源：anthropics/skills）

> ⚠️ 数据说明：本批 PR 数据中评论数与点赞数字段缺失（undefined），无法按讨论热度对 PR 精确排序。以下排行基于 PR 的更新活跃度、关联 Issue 讨论量及内容影响力综合判断；Issues 部分则有明确评论数据支撑。

---

## 一、热门 Skills / PR 排行（综合活跃度）

| # | PR | 内容 | 状态 | 关注点 |
|---|----|------|------|--------|
| 1 | [#1245](https://github.com/anthropics/skills/pull/1245) | **notion-spec-to-implementation + quantitative-resume-auditor**：将 Notion 产品/技术规格分解为可执行任务（含验收标准、进度追踪） | OPEN | 需求管理→工程落地的工作流自动化，6 月创建至今仍活跃更新（10-15） |
| 2 | [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder 修复**：适配 mcp>=2 的 `streamable_http_client` 重命名与自定义 header 方式 | OPEN | 修复高热度 Issue #1668，MCP 2.0 破坏性变更的生态适配 |
| 3 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 修复**：隔离 trigger evals、修复 Windows 兼容与运行时失败误判 | OPEN | 对应 Issue #1383/#556 反映的评估基础设施可靠性问题 |
| 4 | [#525](https://github.com/anthropics/skills/pull/525) | **Pyxel 复古游戏开发 skill**（作者 kitao，Pyxel 之父）：引导实现、无头运行、帧检查 | OPEN | 3 月提交长期维护，罕见的游戏开发方向 |
| 5 | [#1980](https://github.com/anthropics/skills/pull/1980) | **webapp-testing 安全修复**：消除 `shell=True` 命令注入风险（CWE-78） | OPEN | 安全类修复，呼应 Issue #492 的信任边界担忧 |
| 6 | [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio**：Markdown→Marp 幻灯片→带真人语音的 MP4 视频 | OPEN | 零成本内容再创作，多媒体输出方向 |
| 7 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer**：五维度质量评估 + 安全扫描的“元 Skills” | OPEN | 元层面治理工具，与社区安全诉求高度契合 |
| 8 | [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc**：基于 profile 的 SSH+Slurm HPC 集群操作 | OPEN | 科研计算场景，垂直基础设施方向 |

---

## 二、社区需求趋势（Issues 提炼）

1. **安全与信任边界（最强烈）**——[#492](https://github.com/anthropics/skills/issues/492)（46 评论）：社区 skill 冒用 `anthropic/` 命名空间，用户可能误授权；配套诉求为签名验证、命名空间隔离、[#1394](https://github.com/anthropics/skills/issues/1394) 中的 XSS 修复。
2. **组织级分发与共享**——[#228](https://github.com/anthropics/skills/issues/228)（17 评论）：要求企业内共享 Skill 库，替代目前的 .skill 文件 Slack 手工传输。
3. **Skill 评估/测试基础设施修复**——[#556](https://github.com/anthropics/skills/issues/556)（13 评论，0% 触发率）、[#1383](https://github.com/anthropics/skills/issues/1383)、[#1390](https://github.com/anthropics/skills/issues/1390)：社区大规模反馈 skill-creator/mcp-builder 评估框架在真实环境失效。
4. **Token 效率与上下文管理**——[#1487](https://github.com/anthropics/skills/issues/1487)：claude-api skill 一次性注入 ~156k token 耗尽上下文；[#1329](https://github.com/anthropics/skills/issues/1329)（10 评论）：compact-memory 紧凑记忆表示法提案。
5. **质量门禁 / 治理类 Skill 提案**——[#1385](https://github.com/anthropics/skills/issues/1385)（推理质量三道门禁管线）、[#412](https://github.com/anthropics/skills/issues/412)（agent-governance）。
6. **安装与去重体验**——[#189](https://github.com/anthropics/skills/issues/189)：document-skills 与 example-skills 内容重复污染上下文。

---

## 三、高潜力待合并 Skills（活跃 OPEN PR）

- [#1245](https://github.com/anthropics/skills/pull/1245) Notion 规格转实现 —— 持续维护 4 个月+，贴合工作流自动化主线
- [#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder MCP 2.0 适配 —— 阻塞性生态问题修复，优先级高
- [#1298](https://github.com/anthropics/skills/pull/1298) + [#1997](https://github.com/anthropics/skills/pull/1997)（YAML frontmatter 解析修复）—— 修复官方核心工具 skill-creator，近期更新密集（10-19）
- [#1980](https://github.com/anthropics/skills/pull/1980) webapp-testing 命令注入修复 —— 安全修复，10-22 仍有活动
- [#1792](https://github.com/anthropics/skills/pull/1792) docx LibreOffice 超时误报成功修复（关联 [#2018](https://github.com/anthropics/skills/issues/2018)）
- [#538](https://github.com/anthropics/skills/pull/538) pdf skill 大小写引用修复 —— 典型“小而确定”的 PR，合并概率高

---

## 四、生态洞察（一句话）

**社区诉求正从“贡献新 Skill”转向“治理与可靠性”**：最热烈的讨论集中于命名空间安全与信任边界（#492）、组织级分发（#228）、以及 skill-creator/mcp-builder 评估基础设施在真实环境的失效修复——即 Skills 生态已进入“存量质量优先于增量功能”的阶段。

---

# Claude Code 社区动态日报 · 2026-10-23

## 1. 今日速览

Claude Code 今日发布 **v2.1.309**，集中修复 sandbox 安全相关的多个缺陷（macOS/Linux shell 启动文件逃逸、symlink 下 denyWrite glob 失效）。Mods 扩展系统生态持续活跃，但 `sec-default` 内置插件与用户 hooks 的层级冲突（#102653）成为回归焦点。此外，Windows 平台孤儿进程问题（输出文件膨胀至 143 GB）引发较多关注。

---

## 2. 版本发布

### v2.1.309
- 修复 macOS/Linux 下 sandboxed Bash 命令在每次执行前于沙箱外运行 shell 启动文件的问题（**安全修复**）
- 修复 macOS sandbox `denyWrite` glob 模式在路径经 symlink 访问时未作用于真实位置的问题（**安全修复**）
- 其他 sandbox 相关修复
- 链接：[anthropics/claude-code Releases](https://github.com/anthropics/claude-code/releases)

### v2.1.308
- 常规 bug 修复与可靠性提升

> ⚠️ 建议尽快升级至 2.1.309，两个安全修复对使用 sandbox 功能的用户较为重要。

---

## 3. 社区热点 Issues

**1. [#91870](https://github.com/anthropics/claude-code/issues/91870) — Mods 扩展系统持续迭代（268 评论 / 131 👍）**
Mods 已上线，团队在 10 月 1 日社区更新中表示正快速消化反馈。作为当前最活跃的功能线，与今日多个 Mods 相关 PR 和 bug 呼应，是观察扩展性演进的核心入口。

**2. [#27302](https://github.com/anthropics/claude-code/issues/27302) — 支持同一连接器多账号切换（278 评论 / 424 👍）**
呼声最高的功能请求之一，涉及 claude.ai/code 与 CLI 的连接器账号管理。多环境/多租户用户的刚需，长期未落地。

**3. [#102653](https://github.com/anthropics/claude-code/issues/102653) — 2.1.299 起 sec-default 插件默认加载导致用户级 prompt.attachment hooks 失效（回归）**
用户 mod 的部分 hooks 不再触发，与今日合并的多条 sec-default 层级策略 PR 直接相关——组织策略与用户插件的边界问题正在集中爆发，值得 Mods 开发者密切关注。

**4. [#101456](https://github.com/anthropics/claude-code/issues/101456) — Windows 后台 Bash 任务被杀后 pyenv-win python.exe 成为孤儿，输出文件膨胀至 143 GB**
有完整复现，涉及 .bat 启动的进程树未被正确终止，磁盘爆炸式增长后果严重。与 #92583 同属 Windows 进程清理缺失问题。

**5. [#95364](https://github.com/anthropics/claude-code/issues/95364) — Desktop“静默自动更新”在用户离开时退出重启，丢失所有 Remote Control 会话**
对依赖远程控制的用户是致命体验：更新打断进行中的无人值守任务。

**6. [#97074](https://github.com/anthropics/claude-code/issues/97074) — Headless `claude -p` 每 token 消耗的 5 小时窗口额度约为交互模式的 1.8 倍**
相同工作负载下 SDK 入口（sdk-cli）与交互 CLI 计费消耗不一致，直接影响 API/自动化场景成本。

**7. [#92583](https://github.com/anthropics/claude-code/issues/92583) — Windows 超时自动转后台的 Bash 命令在会话结束后永不清理，泄漏内核句柄数天**
与 #101456 构成 Windows 进程生命周期的系统性缺陷，MSYS2/Git Bash 后端的进程组管理是根因方向。

**8. [#96043](https://github.com/anthropics/claude-code/issues/96043) — Desktop MCP elicitation 已声明但从未呈现，`onElicitation` 未接线**
stdio MCP 服务器无法向用户发起确认请求，阻碍需要人工审批的 MCP 工作流在 Desktop 落地。

**9. [#87003](https://github.com/anthropics/claude-code/issues/87003) — Remote Control 推送在 Android 端从未到达（2.1.233 仍复现）**
跨设备/跨 OS 复现，前序 issue 因不活跃被关闭后重新提交，移动端推送链路可靠性存疑。

**10. [#55348](https://github.com/anthropics/claude-code/issues/55348) — `/feedback` 持续返回 403，内置反馈通道失效 3 天以上**
用户被迫通过 GitHub issue 提交 bug 报告（#101651 也报告相同问题），官方反馈通道本身故障影响问题上报闭环。

---

## 4. 重要 PR 进展

今日 PR 全部为 Mods 生态相关（均来自 @poteat），已关闭待发布：

**1. [#99540](https://github.com/anthropics/claude-code/pull/99540) — 组织对工具设置的审批上限对个人安装的插件持续生效**
组织策略层（如要求连接器工具审批）覆盖个人插件，所有决策 hook 附带 `.catch` 保证不静默失败。

**2. [#99137](https://github.com/anthropics/claude-code/pull/99137) — 个人插件只能收紧、不能放宽 sec-default 的策略**
在 sec-default 加载的组织内，个人插件无法解除 deny/ask 规则或修改锁定变量。明确了插件权限的单向收紧模型。

**3. [#97688](https://github.com/anthropics/claude-code/pull/97688) — telemetry 收集器记录越过用户层级，个人插件无法丢弃或改写**
组织审计流的 `telemetry.log` 与 `classic.*`、`settings.read` 同等受保护，防篡改设计。

**4. [#97334](https://github.com/anthropics/claude-code/pull/97334) — 会话保留的记录行越过用户层级**
依赖引擎 `session.append` 事件进入 main 分支，采用“测试按设计保持红”直至 CLI 发版的策略。

**5. [#97293](https://github.com/anthropics/claude-code/pull/97293) — Mods 类型声明补充 `process.run` 截断标志与 `list` 的 mtimeMs**
`isStdoutTruncated`/`isStderrTruncated` 及文件 mtime 字段进入声明，但需等 npm CLI 发版后才可用——体现 Mods API 的前向兼容节奏。

**6. [#99118](https://github.com/anthropics/claude-code/pull/99118) — /diff 面板打开时其他插件 toast 不再被屏蔽**
修复 `holdToasts: true` 导致 /diff 打开期间所有其他插件 toast 被扣留的问题。

**7. [#99141](https://github.com/anthropics/claude-code/pull/99141) — /diff 面板在无内容可绘制时保留，待可绘制时显示**
改善面板宿主未 attach 时的加载体验。

> **观察**：sec-default 系列 PR（组织策略 > 个人插件）密集合入，但 #102653 表明该层级设计已与用户级 hooks 产生回归冲突，预计后续版本会有跟进修复。

---

## 5. 功能需求趋势

1. **Mods 扩展生态与权限模型**：最大的活跃方向。社区同时在使用侧（新 hook 事件如 `prompt.edit`、`prompt.attachment`）和治理侧（组织策略与用户插件的层级）提出大量需求与问题。
2. **多账号 / 连接器管理**（#27302，424 👍）：企业多租户场景强需求。
3. **Remote Control / 云会话编排**：无人值守会话的启动权限（#103407）、云会话结果回传通道（#104160）、移动端推送可靠性（#87003）均指向“远程自治 agent”场景的补全。
4. **Desktop 体验对齐 CLI**：自定义主题（#79305）、用量侧边栏（#104471）、会话调查问卷关闭选项（#94710）。
5. **用量可视化与成本透明**：额度、上下文压缩、token 计数可读化是 Desktop 用户的持续诉求。

---

## 6. 开发者关注点

- **Sandbox 安全**：v2.1.309 修复的两个逃逸问题表明沙箱仍在收敛期，重度依赖 sandbox 的自动化场景建议验证升级后的行为。
- **Windows 进程清理是重灾区**：#101456（143 GB 输出文件）与 #92583（句柄泄漏数天）显示 Windows 下后台/超时任务的进程树管理不可靠，长时运行任务需自带监控。
- **Headless 模式成本偏高**（#97074）：SDK 自动化用户应关注 5 小时窗口的消耗差异，评估是否切换入口。
- **反馈通道故障**（#55348）：`/feedback` 与 transcript 分享均 403，问题只能通过 GitHub 上报。
- **升级需谨慎的点**：2.1.299 引入的 sec-default 默认加载破坏用户 hooks（#102653）；Desktop 自动更新会打断 Remote Control 会话（#95364）——无人值守场景建议固定版本。
- **会话数据安全**：#102106 报告 2.1.296 下项目 transcript 静默丢失导致 /resume 失效，重要会话建议定期备份 `.jsonl`。

---
*数据截至 2026-10-23 · 来源：[anthropics/claude-code](https://github.com/anthropics/claude-code)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-10-23

## 📌 今日速览

Codex 桌面端 macOS 新版（26.1016.51333）新会话无法启动的严重 bug 已修复关闭，该 Issue 收获 168 个 👍 和 84 条评论，是近期影响最广的问题。CLI 侧发布 4 个 alpha 版本（0.163–0.164 系列），同时合并了大量围绕环境级托管 hooks、模型目录（model catalog）定制和托管配置服务器的内部改进。Windows 平台的资源泄漏（内存膨胀至 11.6GB）和 Dots 集成问题仍是持续发酵的热点。

---

## 🚀 版本发布

过去 24 小时密集发布 4 个 Rust alpha 版本，节奏很快：

| 版本 | 说明 |
|---|---|
| `rust-v0.164.0-alpha.12` | 最新 alpha |
| `rust-v0.164.0-alpha.11.1` | 补丁版 |
| `rust-v0.164.0-alpha.11` | — |
| `rust-v0.163.0-alpha.11.2` | 旧分支补丁 |

官方未附详细 changelog，但结合 PR 内容推测主要涵盖 hooks、模型目录覆盖、托管配置加载等能力。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#55744](https://github.com/openai/codex/issues/55744)** [已关闭] macOS 26.1016.51333 新会话首条消息报 "Cannot serialize value" 错误。**今日最重要动态**：84 评论 / 168 👍，影响面极广，现已修复关闭，macOS 桌面用户建议确认更新。

2. **[#51649](https://github.com/openai/codex/issues/51649)** Windows 桌面端 MCP/CUA/node_repl 进程累积，Node 助手达 200 个、私有内存 ~11.6GB。18 评论，Windows 性能问题的典型代表。

3. **[#50329](https://github.com/openai/codex/issues/50329)** Windows App 的 `read_thread` 仅返回 chatgpt-content-reference，MCP 集成无法读取完整回复。23 评论，影响第三方客户端开发。

4. **[#51731](https://github.com/openai/codex/issues/51731)** / **[#52873](https://github.com/openai/codex/issues/52873)** Dots 无法连接/读取 Codex 会话（"unsupported placement format version 3"），两条共 44 条评论，Dots 集成稳定性问题突出。

5. **[#55795](https://github.com/openai/codex/issues/55795)** 升级 26.1016.51333 后 Windows 上 Dots 入口消失，重装和 Ctrl+. 均无法恢复——与 #55744 同版本的回归问题。

6. **[#51667](https://github.com/openai/codex/issues/51667)** macOS VM 环境下升级后消息被 safety-check 拦截。VM/非常规环境的可用性问题，15 评论。

7. **[#52894](https://github.com/openai/codex/issues/52894)** / **[#56328](https://github.com/openai/codex/issues/56328)** / **[#56112](https://github.com/openai/codex/issues/56112)** 多账户/多平台报告 "Selected model is at capacity"，今日新增两条，容量问题似乎在扩散，值得持续观察。

8. **[#51053](https://github.com/openai/codex/issues/51053)** iOS Remote 因 writer lock 无法查看活跃的 VS Code Codex 任务（9 👍），跨设备体验痛点。

9. **[#42484](https://github.com/openai/codex/issues/42484)** Windows 上 `cua_node` 的 `rename_staging` EPERM 死循环导致 UI 冻结、消耗 ~59GB 内存，长期未修复的高危性能 bug。

10. **[#56223](https://github.com/openai/codex/issues/56223)** Agent 将小范围清理任务扩大为提案重写并反复返工消耗配额——模型行为可控性问题的代表性反馈。

---

## 🔧 重要 PR 进展（Top 10）

1. **[#56304](https://github.com/openai/codex/pull/56304)** 环境级托管 hooks 支持：发现/列出环境拥有的必需 hooks，命令与 MCP 调用路由到所属环境执行。企业托管配置方向的重要基建。
2. **[#56302](https://github.com/openai/codex/pull/56302)** 环境附件中增加 hook 配置（`environment_hooks`），与 #56304 配套。
3. **[#56314](https://github.com/openai/codex/pull/56314)** 自定义配置服务器的托管配置加载器，支持从 `<base_url>/codex/config/bundle` 拉取配置。
4. **[#56295](https://github.com/openai/codex/pull/56295)** 将托管配置加载与 ChatGPT 认证解耦，引入 `BundleSource` 接口——为非 ChatGPT 认证源铺路。
5. **[#56313](https://github.com/openai/codex/pull/56313)** 模型目录可覆盖 history/notes/context 工具的描述与参数 schema，增强按模型定制能力。
6. **[#56312](https://github.com/openai/codex/pull/56312)** 在 rollout traces 中追踪被接受的会话历史，提升 replay 精度。
7. **[#56342](https://github.com/openai/codex/pull/56342)** 修复重复图片输出导致 replay 时 call ID 复用错误的问题。
8. **[#56308](https://github.com/openai/codex/pull/56308)** TUI 中区分目录与仓库作用域，`Cwd` 过滤不再混入 linked worktree 的会话。
9. **[#56330](https://github.com/openai/codex/pull/56330)** agent-message 唤醒尊重中断与 Plan 模式，修复排队消息误消费的竞态。
10. **[#24663](https://github.com/openai/codex/pull/24663)** 序列化共享 `CODEX_HOME` 的多进程 token 刷新，避免并发刷新冲突——今日关闭的长期 PR。

其他值得注意：**[#56284](https://github.com/openai/codex/pull/56284)**（按线程 originator 隔离模型目录与缓存）、**[#56290](https://github.com/openai/codex/pull/56290)**（uv 锁定 Python 构建工具）、**[#56288](https://github.com/openai/codex/pull/56288)**（Cosign 签名版本锁定）。

---

## 📈 功能需求趋势

- **Windows 平台稳定性**：热点 Issue 中约一半来自 Windows（进程泄漏、权限提升、沙箱、MSIX 安装问题），是当前最大的平台性债务。
- **Dots 集成**：多个高互动 Issue 指向 Dots 无法读取/连接 Codex 会话，社区期待更稳定的互通。
- **跨设备/远程体验**：iOS Remote、SSH 远程工作区的会话可见性与锁问题（#51053、#53080）。
- **配额与容量管理**："model at capacity" 报告增多；#32586 请求自动兑换将过期的 banked reset。
- **企业托管配置**：PR 侧大量投入 hooks、config server、认证解耦，预示企业级管控是下一阶段重点。

## 🎯 开发者关注点

1. **内存/进程泄漏是高频痛点**：桌面端 Node 助手进程累积、内存膨胀至 11–59GB 的报告反复出现，且长期未解决。
2. **版本升级回归风险**：26.1016 版本同时引入 macOS 序列化错误和 Windows Dots 消失两个回归，升级需谨慎。
3. **MCP/app-server API 完整性**：`read_thread` 返回不完整数据直接影响第三方集成开发。
4. **CLI 细节体验**：状态栏 token 显示格式（#56106）、Windows 沙箱 `/diff`（#28649）等小问题积累较多。
5. **模型行为可控性**：Agent 擅自扩大任务范围并烧配额（#56223），用户希望更严格的作用域约束。

---
*数据来源：github.com/openai/codex | 统计窗口：2026-10-22 ~ 2026-10-23*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-10-23

## 📌 今日速览

今日发布 v0.67.0-nightly 版本，聚焦 a2a-server 与 core 的 token 用量元数据修复。社区讨论持续集中在 **Subagent 可靠性**（虚假成功上报、挂起、上下文缺失）上，多个 P1 问题保持活跃。PR 方面则涌现出一批安全加固与 MCP 稳定性修复，社区贡献活跃度高。

---

## 🚀 版本发布

### v0.67.0-nightly.20261023.ga713410ab
- **fix(a2a-server,core)**: 保留扩展 token 用量元数据并对齐逐轮上报（[PR #29834](https://github.com/google-gemini/gemini-cli/pull/29834)）
- **fix(core)**: 确保所有含函数调用的模型轮次均携带 thought signatures（@amelidev）

---

## 🔥 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1) Subagent 达到 MAX_TURNS 后仍上报 `success`/`GOAL`，掩盖了实际中断 — 13 条评论，虚假成功上报直接影响可观测性与信任度，是 Subagent 可靠性的核心痛点。

2. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** (P2) 零依赖 OS 沙箱 + 执行后意图路由，释放 Gemini 3 的原生 bash 能力 — 9 条评论，安全与能力释放并重的方向性增强提案。

3. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1) 通用 Agent 无限挂起，简单如创建文件夹也卡死（8 👍）— 用户等待长达一小时被迫取消，影响日常可用性。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** (P2) AST-aware 文件读取/搜索/代码库映射评估 EPIC — 官方主导，探索用 AST 工具精确定位方法边界、降低 token 噪声。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2) Gemini 极少主动调用自定义 skills 和 sub-agents — 社区普遍反馈“不显式指示就不用”，涉及调度策略核心体验。

6. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** (P2) Browser Agent 完全忽略 `settings.json` 配置覆盖（如 `maxTurns`）— AgentRegistry 正确合并但实际未生效，配置链路断裂。

7. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1) browser subagent 在 Wayland 下失败 — Linux 桌面用户体验受损。

8. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** (P2) 工具数 > 128 时触发 400 错误 — 需要更智能的工具范围裁剪机制。

9. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)** (P1) get-shit-done output hook 导致 CLI 崩溃 — 稳定性问题，多次复现。

10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)** (P2) Agent 应阻止/劝阻破坏性操作（`git reset`、`--force`、DB 修改）— 安全防护需求，客户场景驱动。

---

## 🔧 重要 PR 进展

1. **[#29762](https://github.com/google-gemini/gemini-cli/pull/29762)** (P1) 切换认证方式时保留用户在磁盘上的 settings 编辑，改为针对当前磁盘内容做增量写入，避免启动快照覆盖。

2. **[#29765](https://github.com/google-gemini/gemini-cli/pull/29765)** (Security) 文件凭据存储（`FileKeychain`）写入原子化并串行化 — 修复并发写入静默丢失凭据及写中断导致全部凭据锁死的问题。

3. **[#29688](https://github.com/google-gemini/gemini-cli/pull/29688)** (Security, 已关闭) 修复 `stripShellWrapper()` 中通过 shell wrapper 链式标志绕过命令替换防护的漏洞。

4. **[#29767](https://github.com/google-gemini/gemini-cli/pull/29767)** (P1) MCP `tools/list` 发现新增 60s 默认超时 — 此前继承 10 分钟超时导致无响应服务器静默阻塞发现流程。

5. **[#29761](https://github.com/google-gemini/gemini-cli/pull/29761)** 修复 `$&`/`$'` 等替换模式损坏提示词模板与 `{{args}}` — 静默破坏编辑指令和文件内容，影响面广。

6. **[#29771](https://github.com/google-gemini/gemini-cli/pull/29771)** 仅对真正空响应的 tool-loop 续发 nudge 并等待其完成，消除 fire-and-forget 竞态。

7. **[#29838](https://github.com/google-gemini/gemini-cli/pull/29838)** (P1) 相对文件路径基于活跃 IDE workspace root 解析，修复跨仓库场景下文件工具读写错位置。

8. **[#29763](https://github.com/google-gemini/gemini-cli/pull/29763)** 修复 a2a-server `scheduleToolCalls` 中任务取消引发的 unhandled rejection。

9. **[#29880](https://github.com/google-gemini/gemini-cli/pull/29880)** 新增 `gemini models` 子命令和 `--list-models` 标志，支持 JSON 格式模型发现 — 对非交互/脚本化场景价值明显。

10. **[#29884](https://github.com/google-gemini/gemini-cli/pull/29884)** 支持 Android/Termux 可信系统路径下的 ripgrep 解析 — 移动端终端开发场景落地。

其他值得关注：[#29764](https://github.com/google-gemini/gemini-cli/pull/29764)（Claude Code SubagentStop hook 迁移映射）、[#29883](https://github.com/google-gemini/gemini-cli/pull/29883)（泰文/老挝文显示宽度修正）、[#29882](https://github.com/google-gemini/gemini-cli/pull/29882)（文件搜索缓存跨查询污染修复）。

---

## 📈 功能需求趋势

- **Subagent 体系深化**（最显著）：并行协作与共享内存（#18287）、本地 Subagent Sprint（#20195）、trajectory 可分享（#22598）、symlink 识别（#20079）— Subagent 是当前最大工作流。
- **AST-aware 代码理解**：#22745/#22746/#22747 系列 EPIC，探索 tilth、glyph、ast-grep 等工具提升读取/搜索精度。
- **Token 效率**："Tactful Extraction" 分层代码发现（#19561）、持久化文件级任务追踪替代 WriteToDo（#18836、#21000）。
- **浏览器自动化**：Wayland 支持（#21983）、session 接管与锁恢复（#22232）、配置覆盖生效（#22267）。
- **模型发现与脚本化**：`--list-models` 等非交互能力（PR #29880）。

---

## ⚠️ 开发者关注点

1. **虚假成功上报**是信任杀手：Subagent 被中断却报 success（#22323、#21983），加上 `/bug` 报告不含 subagent 上下文（#21763），调试闭环缺失。
2. **挂起与超时类故障频发**：通用 agent 挂起（#21409）、vite 交互式提示卡死（#22465）、MCP 发现阻塞（PR #29767）。
3. **配置覆盖不生效**：settings.json 覆盖被静默忽略（#22267），加上 settings 迁移覆盖 `${VAR}` 占位符的历史问题，配置持久化可靠性被反复提及。
4. **安全与破坏性操作防护**：git force 操作、命令替换绕过、凭据并发写入 — 社区安全意识明显提升。
5. **Agent 行为可预期性**：不主动使用 skills/subagents（#21968）、乱建临时脚本（#23571），提示“自主性”与“可控性”需更好平衡。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 · 2026-10-23

## 📰 今日速览

Copilot CLI 于昨日发布 **v1.0.103**，带来 ACP 沙箱设置持久化、断线重连保留完整回复等改进。社区侧安全类问题升温：**#5232（信任文件夹静默自动执行命令）** 和 **#3013（Hooks 对后台 Agent 不生效）** 直指权限模型的安全盲区。此外，围绕 MCP OAuth 令牌刷新、语音输入稳定性、Sessions 浏览器体验的反馈集中爆发。

---

## 🚀 版本发布

### v1.0.103（2026-10-22）
- 点击已完成的响应代码块可复制原始代码（需启用）
- ACP 会话现遵循已保存的沙箱设置及 `--sandbox` / `--no-sandbox` 标志，包括恢复会话时
- CLI 断线重连后，云端回复保留完整文本
- Sessions 浏览器改进

---

## 🔥 社区热点 Issues

**1. [#5232](https://github.com/github/copilot-cli/issues/5232) — 信任文件夹在 manual 模式下静默自动执行命令** 🔒
最高安全关注度。路径引用在信任文件夹内的任意 shell 命令（scripts、sqlcmd、curl 等）会跳过权限确认直接执行，而路径门控无法判断命令的实际副作用。这可能成为权限体系的重大绕过点。

**2. [#5197](https://github.com/github/copilot-cli/issues/5197) — 1.0.100 后 WSL2 语音服务器段错误（signal 11）**
升级引入的语音运行时在 WSL2 上崩溃，`/voice` 卡在 "Fetching voice models"，语音输入完全不可用。已有 4 条评论跟进，WSL2 用户受影响面广。

**3. [#3013](https://github.com/github/copilot-cli/issues/3013) — Hooks 不对后台（task）Agent 触发**（已关闭）
作者指出：用于阻止危险命令的 hook 可被子 Agent 绕过，构成潜在越狱/安全漏洞。长跑半年的问题近日关闭，值得关注修复方式。

**4. [#5219](https://github.com/github/copilot-cli/issues/5219) — 未知 model id 导致 task 子 Agent 回退到 128k 默认上限，整轮失败**
混合模型长会话中，主上下文远未超限却因子 Agent 预算误判报 "Request exceeds the model's prompt budget"，会话卡死。

**5. [#5203](https://github.com/github/copilot-cli/issues/5203) — 请求 Stable 稳定发布通道**
社区对快速迭代引入回归的不满持续发酵，呼吁提供 Stable / Beta 双通道。这与 #5197、#5240 等升级引发的回归问题形成呼应。

**6. [#5238](https://github.com/github/copilot-cli/issues/5238) — 会话第 51 张图片后触发全量缓存重填**
50 张图片上限后每新增一张即驱逐最旧一张并引发完整缓存重建，成本极高（1.0.103 仍存在）。

**7. [#4065](https://github.com/github/copilot-cli/issues/4065) — 敏感信息脱敏过于激进**
合法内容（如 spec 文件中的 `Bearer ${env.AUTH_TOKEN}` 示例）被误脱敏，影响正常输出质量。

**8. [#5228](https://github.com/github/copilot-cli/issues/5228) — `copilot --resume` 无 ID 时落入新空会话**
Sessions 浏览器成为默认后，列表约 2 秒即被替换，且信任提示抢占第一个 Enter，恢复会话的交互体验严重退化。

**9. [#5233](https://github.com/github/copilot-cli/issues/5233) / [#5229](https://github.com/github/copilot-cli/issues/5229) — MCP OAuth 过期令牌不刷新**
活跃会话在 401 后反复重发过期 token，既不走 refresh_token 也不提示重新登录；ACP 模式下则直接弹浏览器授权页。MCP 认证链路的刷新逻辑是当前集中痛点（另见 #5236、#5234）。

**10. [#5224](https://github.com/github/copilot-cli/issues/5224) — 非 PTY 交互式构建无限自旋，WSL 进程树在编辑器重启后仍存活**
一个 OpenWrt 前置检查菜单空转约 10.5 小时占满 CPU，暴露出非 PTY 场景下的进程管理缺陷。

---

## 🔀 重要 PR 进展

过去 24 小时内无 PR 更新。

---

## 📈 功能需求趋势

1. **MCP 生态健壮性**（最大热点）：OAuth token 刷新（#5229/#5233/#5236）、MCP 认证阻塞 CLI（#5234）、插件 Agent 取消自身 MCP 调用（#5237）、Agent 执行时 MCP 不可达（#5208）
2. **权限与沙箱安全**：信任文件夹自动执行（#5232）、Hooks 旁路（#3013）、沙箱 DNS（#5027，已关闭）
3. **会话/上下文管理**：`--resume` 体验（#5228）、compaction 后丢失 sessionStart 上下文（#5225）、图片缓存策略（#5238）
4. **语音输入**：WSL2 崩溃（#5197）、转录语言可配置（#5226）
5. **发布工程**：稳定通道诉求（#5203）
6. **UI/交互**：输入框置顶选项（#5227）、键盘滚动（#2750，已关闭）

## 👨‍💻 开发者关注点

- **升级回归频繁**：1.0.100 语音运行时、Sessions 浏览器默认化等改动均引发回归，“快速迭代 vs 稳定性”矛盾突出，稳定通道呼声渐高
- **安全边界不清晰**：路径信任、子 Agent hook 旁路等问题表明权限模型需要语义级（而非路径级）的命令评估
- **企业/代理环境兼容性**：仅代理环境 DNS 校验失败（#5230）、ACP 模式忽略 `includeCoAuthoredBy`（#5133）
- **长会话可靠性**：混合模型会话卡死、断线恢复、compaction 上下文丢失，反映重度用户对会话持久化的强烈依赖

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-23

## 一、今日速览

OpenCode 发布 v1.19.4，升级内置 Bun 运行时至 1.4.4，修复多项安全漏洞。今日社区焦点集中在**后台 Shell 被静默终止**、**权限扫描可被复合命令绕过**两类可靠性/安全问题，以及 Linux 桌面版（chrome-sandbox 权限、菜单灰置）多个打包缺陷。PR 方面，桌面端迎来一批可观测性与远程服务器管理功能，修复类 PR 活跃。

---

## 二、版本发布

### v1.19.4
- 升级内置 Bun 运行时至 **1.4.4**，包含针对 Brotli、TLS、HTTP/1.1、HTTP/2、HTTP/3、WebSocket 和 `fetch` 的[安全修复](https://bun.com/blog/bun-v1.4.4#security)，并将根证书更新至 NSS 3.131.1。

> 💡 建议：涉及网络请求密集的场景建议尽快升级，安全修复优先级较高。

---

## 三、社区热点 Issues

1. **[#2242](https://github.com/anomalyco/opencode/issues/2242) Agent 沙箱机制缺失**（👍 80 · 💬 101）
   最长寿的热点议题：如何限制 agent 的终端命令访问当前目录之外的文件。社区反复对标 gemini-cli / codex-cli 在 macOS 上的 seatbelt 方案，安全沙箱仍是 OpenCode 的核心短板。

2. **[#52083](https://github.com/anomalyco/opencode/issues/52083) 复合 shell 命令绕过权限检查**
   权限系统对复合命令拆分时丢弃了重定向目标，导致已 allow 的命令变成无提示的任意文件写入原语——这是权限模型的实质安全漏洞。

3. **[#51828](https://github.com/anomalyco/opencode/issues/51828) 后台 Shell 被 Location 驱逐机制 SIGTERM**
   位置 60 分钟无事件即被驱逐，活跃后台 shell 随之被杀，完成通知永不送达。同议题重复提交（#58049/#58050 已关闭去重），反映受影响用户较多。

4. **[#58157](https://github.com/anomalyco/opencode/issues/58157) deb 包 chrome-sandbox 缺 setuid 位**
   导致 Ubuntu 上应用内更新始终失败（pkexec 127），属打包层缺陷，已有对应 PR（#58293）修复中。

5. **[#58188](https://github.com/anomalyco/opencode/issues/58188) Linux 桌面版 New Session / Open Project 菜单永久灰置**
   官方 .deb 2.1.3 上的高可见性可用性缺陷，配套修复 PR #58306 已提交。

6. **[#47646](https://github.com/anomalyco/opencode/issues/47646) ChatGPT OAuth 长上下文模型被错误覆盖为 400k 上下文**（已关闭）
   实际目录限额约 1.05M tokens，TUI 大幅低估可用上下文，影响所有长上下文 OpenAI 模型用户。

7. **[#58128](https://github.com/anomalyco/opencode/issues/58128) LLM API 失败重试策略过于保守**
   硬编码最多 10 次、10s 上限的指数退避，网络抖动即可中断 agent 工作流，社区呼吁可配置化。

8. **[#34344](https://github.com/anomalyco/opencode/issues/34344) 免费模型限额可被 VPN 轮换绕过**（已关闭）
   限额与 IP 绑定导致切换 VPN 即重置，已被自动化验证可无限使用免费模型，属服务端风控问题。

9. **[#58003](https://github.com/anomalyco/opencode/issues/58003) Go 付费套餐 DeepSeek V4.1 Flash 响应延迟 15–29 秒**（已关闭）
   付费用户实测 99.99% 缓存命中下仍长时间空等，绕过 Harness 直连官方仅 6s，服务质量问题引发付费用户不满（相关：#58314 工作区 403）。

10. **[#57656](https://github.com/anomalyco/opencode/issues/57656) shell 工具描述暴露后端名，模型误调 `bash`**
    工具描述泄露实现细节，诱导模型调用不存在的工具，每次浪费一轮调用，是提示词工程层面的典型问题。

---

## 四、重要 PR 进展

1. **[#58332](https://github.com/anomalyco/opencode/pull/58332) shell create hooks 暴露工具调用来源**
   为 `shell` 工具增加参数并在 `shell.create` 钩子中可定制行为，关联 #21767/#54032/#41117，是插件生态的重要扩展点。

2. **[#58324](https://github.com/anomalyco/opencode/pull/58324) patch 工具保留行尾符**
   修复 CRLF 文件被 patch 后出现混合行尾的长期问题（关闭 #45926、#54605）。

3. **[#58313](https://github.com/anomalyco/opencode/pull/58313)（已合并）忽略超出模型窗口的 compaction buffer**
   修复 `compaction.buffer ≥ context limit` 时首轮请求即触发压缩死循环（对应 #56783）。

4. **[#58293](https://github.com/anomalyco/opencode/pull/58293) 修复 Linux 包 chrome-sandbox setuid**
   解决 Ubuntu 24+ AppArmor 环境下应用内更新失败（#58157）。

5. **[#58306](https://github.com/anomalyco/opencode/pull/58306) 修复非会话页面 New Session 菜单灰置**
   对应桌面端 #58188 的 Linux 菜单缺陷。

6. **[#58320](https://github.com/anomalyco/opencode/pull/58320) + [#58321](https://github.com/anomalyco/opencode/pull/58321) 桌面端远程服务器管理**
   支持在 settings 中配置远程服务器与默认服务器（密码读私有文件），以及 `opencode://add-server` 深链接确认流程，是桌面端多服务器架构的关键一步。

7. **[#58130](https://github.com/anomalyco/opencode/pull/58130) 客户端容忍跨系统挂起的健康探测**
   不再因探针无响应就杀死健康服务，修复 Windows 睡眠唤醒后要求重新选择目录的问题（#58000）。

8. **[#58305](https://github.com/anomalyco/opencode/pull/58305) 桌面端/Web 端支持 MCP elicitation 表单**
   补齐 TUI 已有的 MCP 交互式输入能力，避免工具调用无限等待。

9. **[#58310](https://github.com/anomalyco/opencode/pull/58310) Windows 跨卷保留二进制**
   修复包缓存与安装目录在不同卷时 EXDEV 导致的旧二进制清理失败。

10. **[#57224](https://github.com/anomalyco/opencode/pull/57224) 会话运行时间线 iOS 式动画**（+1156/−105）
    桌面端流式渲染体验重构，配合 kitlangton 的堆快照/内存日志系列 PR（#58315–#58317），显示桌面团队正在集中攻坚性能与流畅度。

---

## 五、功能需求趋势

- **安全与沙箱**：agent 权限隔离（#2242）、权限扫描防绕过（#52083）呼声持续最高，社区明显期待类似 seatbelt 的系统级沙箱。
- **长时后台任务可靠性**：后台 shell 生命周期管理、位置驱逐策略、重试策略可配置化（#51828、#58128）。
- **桌面端成熟度**：Linux 打包（sandbox、菜单、更新）、macOS 退出行为、窗口管理等原生体验问题集中爆发。
- **服务端与商业服务质量**：Go 套餐延迟、免费额度计费透明度、工作区访问（#58003、#58014、#58314）。
- **可观测性**：实时查看模型思考内容（#57262）、统一用量面板（#57975）。
- **多语言本地化**：zh 目录机器翻译错误与 5% key 缺失（#51868）。

---

## 六、开发者关注点

1. **Agent 自主性的安全边界**是最大痛点：无沙箱 + 权限可绕过，使得在重要项目中完全放权 agent 风险偏高。
2. **后台任务“静默失败”**：驱逐机制杀 shell、重试上限过早放弃、通知不送达，破坏长时自动化工作流的信任。
3. **桌面端打包质量**：Linux/macOS 一批原生集成问题说明桌面版仍处于快速迭代期，生产使用需谨慎。
4. **付费服务质量**：Go 套餐延迟与支持响应慢的反馈增多，是社区情绪的潜在风险点。
5. **提示词与工具契约细节**：工具描述命名误导模型（#57656）这类“小问题”直接消耗 token 和轮次，值得所有 agent 工具开发者关注。

---
*数据来源：GitHub anomalyco/opencode（过去 24 小时）· 由 AI 技术分析师生成*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-10-23）

## 📌 今日速览

今日发布 v0.26.0 nightly 版本（含 daemon token 持久化等改进），但 0.26.0 暴露出 P1 级工具结果丢失问题引发关注。Web Shell 术语标准化（Workspace/Session）讨论持续升温，同时 CI/CD 稳定性问题（SDK Java 测试不稳定、CVE 审计失败）成为社区讨论最多的持续话题。

---

## 🚀 版本发布

**v0.26.0-nightly.20261022.bf66a26c97** ([Release](https://github.com/QwenLM/qwen-code/releases))

- **feat(serve)**: daemon token 持久化（PR #15023，by @wenshao）
- **fix(release)**: 覆盖所有派生的 vendored 二进制文件

---

## 🔥 社区热点 Issues

1. **[#13078](https://github.com/QwenLM/qwen-code/issues/13078) 每日依赖 CVE 审计失败（29 条评论）**
   自动化安全审计持续失败，累计近一个月未解决，是最受关注的运维问题。可能涉及新的高危漏洞或 npm audit 端点不可用，值得安全敏感用户持续追踪。

2. **[#13787](https://github.com/QwenLM/qwen-code/issues/13787) XML 恢复在大规模多调用响应上重复前缀扫描（10 条评论）**
   当响应包含大量有效工具调用时，XML tool-call 恢复性能急剧下降。已有可复现的基准测试，社区在推动解析层优化。

3. **[#14988](https://github.com/QwenLM/qwen-code/issues/14988) Web Shell 术语标准化为 Workspace/Session（9 条评论）**
   基于会议结论对齐 DSH 命名，将引发 Web Shell 一系列 UI 变更（配套 PR #15315 已提交）。

4. **[#15165](https://github.com/QwenLM/qwen-code/issues/15165) Shell 安全解析器在 Node 24.16.0 上触发 ~1.6 GiB 瞬时 WASM 编译内存尖峰（6 条评论）**
   Bash WASM 解析器在 V8 优化时的原生内存飙升问题，对资源受限环境影响显著。

5. **[#15248](https://github.com/QwenLM/qwen-code/issues/15248) sdk-java 运行时 broker 时序测试在 GitHub 托管 runner 上 3/3 不稳定，阻塞 fork PR 快速通道（5 条评论）**
   托管 runner 与自托管 ECS 池环境差异导致 CI 长期不稳定，直接影响外部贡献者体验。

6. **[#15267](https://github.com/QwenLM/qwen-code/issues/15267) `--no-isolate` 运行 CLI 测试会覆盖开发者真实的 ~/.qwen/settings.json（5 条评论）**
   测试隔离缺陷可能损坏本地真实配置（MCP 服务器、模型提供商等），对贡献者是个实际痛点。

7. **[#15297](https://github.com/QwenLM/qwen-code/issues/15297) 0.26.0 约 1/40 的调用丢失工具输出（P1，3 条评论）**
   工具实际执行成功但结果未送达模型，导致重复读取的成本。1663 次调用中确认 43 例，有完整 transcript 佐证，是本日最重要的正确性 bug。

8. **[#15276](https://github.com/QwenLM/qwen-code/issues/15276) Windows 桌面更新失败：node.exe 被锁定（P1，3 条评论）**
   捆绑的 Node 运行时位于安装目录内，更新时文件被锁导致写入失败，影响 Windows 桌面用户自更新。

9. **[#8968](https://github.com/QwenLM/qwen-code/issues/8968) 支持 MCP 2026-07-28 规范及 MCP Apps（4 条评论）**
   请求将 MCP 客户端从 SDK v1 迁移到新版官方规范，并以 WebShell 作为 MCP Apps 的主要 UI 宿主，是集成方向的重要需求。

10. **[#15310](https://github.com/QwenLM/qwen-code/issues/15310) 告知模型当前使用的 shell 而非默认 bash（3 条评论）**
    Windows 上模型误以为运行在 POSIX shell 中导致命令失败，每次失败浪费一整轮。低成本高收益的体验改进。

---

## 🔧 重要 PR 进展

1. **[#15308](https://github.com/QwenLM/qwen-code/pull/15308) fix(cli): 用迟到的真实结果替换合成的工具结果占位符**
   针对上述 P1 工具结果丢失问题的修复，处理流中断后的孤儿工具调用。

2. **[#15311](https://github.com/QwenLM/qwen-code/pull/15311) + [#15315](https://github.com/QwenLM/qwen-code/pull/15315) Web Shell 双修复**
   前者让独立会话在分配后立即出现在侧边栏（修复 #15304）；后者落地 Workspace/Session 术语标准化（修复 #14988）。

3. **[#15218](https://github.com/QwenLM/qwen-code/pull/15218) feat(managed): 托管自动化在领取前执行 Runtime 探测 gate**
   自动化定义可携带 shell 命令作为前置门控，静默退出即跳过触发，减少无效 Session 消耗。

4. **[#15255](https://github.com/QwenLM/qwen-code/pull/15255) feat(managed-agent): Kubernetes 共享 Harness 池**
   Java 控制的 opt-in Harness 池，含租户/Workspace 级持久放置与过期所有者栅栏，是托管架构的重要演进。

5. **[#15246](https://github.com/QwenLM/qwen-code/pull/15246) perf(memory): 保留未变更的旧版目录快照**
   内存目录在会话历史中保持稳定位置，Resume/Retry 场景下减少重复快照，配套 follow-up 见 #15301。

6. **[#13606](https://github.com/QwenLM/qwen-code/pull/13606) fix(runtime): 有界交付 provider 图片与 PDF**
   通过托管 runtime 协议交付图片/PDF，每次文件读取使用独立的 capability 快照。

7. **[#15283](https://github.com/QwenLM/qwen-code/pull/15283) feat(cli): OpenTUI 会话恢复对齐 Ink**
   补齐 OpenTUI 的取消/重试/恢复/回放/检查点恢复能力，是 TUI 层的系统性完善。

8. **[#15317](https://github.com/QwenLM/qwen-code/pull/15317) fix(mods): 拒绝嵌套过深的值跨越 Mod 边界（上限 512 层）**
   防御性安全修复，配套 PR #15270 提出的 Claude Code 兼容性基线设计文档也在推进。

9. **[#14904](https://github.com/QwenLM/qwen-code/pull/14904) feat(web-shell): 统一"最近会话"侧边栏**
   合并项目会话与无工作区会话，按最近活动展示，Web Shell 体验持续打磨。

10. **[#15286](https://github.com/QwenLM/qwen-code/pull/15286) fix(ci): 将 sdk-java 测试任务的 Maven 锁范围收窄到缓存回写**
   缓解自托管池的锁争用，是近期 CI 稳定性系列修复（#15305/#15314）的一部分。

---

## 📈 功能需求趋势

- **托管架构（Managed Agent / Runtime Broker）**：最活跃的方向——Session 归档搜索（#15077）、外部 HTTP Runtime provisioner（#15247）、K8s Harness 池（#15255）、自动化门控（#15218）密集推进。
- **Web Shell 体验**：术语标准化（#14988/#15309/#15312）、MCP 工具卡片展开详情（#15280）、最近会话侧边栏。
- **MCP 生态**：新版 MCP 2026-07-28 规范与 MCP Apps 支持（#8968）呼声明确。
- **配置灵活性**：web_search 自定义网关/可信主机（#15302/#15299）、worktree 基础目录可配置（#15292）、Conversations 目录配置（#15298）。
- **Memory 子系统**：提取节奏优化（#13571）、快照保留（#15246）及一系列 review follow-up，投入持续。

---

## ⚠️ 开发者关注点

- **CI/CD 稳定性是最大痛点**：CVE 审计失败（#13078）、SDK Java 时序测试不稳定（#15248/#15307/#15314）、docker e2e 共享 QWEN_HOME（#11394）等多个长期问题阻塞合并与外部贡献。
- **Windows 支持薄弱**：桌面更新文件锁（#15276）、shell 识别缺失（#15310）均集中在 Windows。
- **测试隔离与内存**：本地测试覆盖真实配置（#15267）、WASM 编译内存尖峰（#15165）、未处理的内存提取 rejection（#15269）。
- **0.26.0 版本质量**：P1 级工具结果静默丢失（#15297）建议升级前关注，修复 PR #15308 已在路上。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报 — 2026-10-23

## 📌 今日速览

昨日最重要的动态是 **FEAT-031（PR #7009）正式合并入 `main`**，标志着 EPIC-005 TUI Crate 解耦工作完成了 13 个核心导航命令的可移植化改造。同时社区活动非常活跃：@Lstarsky0 一天内连发 4 个 TUI 细节修复 PR，并出现一个**会导致整个会话崩溃的严重 bug**（西里尔字符 UTF-8 切片 panic，#7048）。

---

## 🐛 社区热点 Issues

> 今日共 5 条 Issue 更新，全部值得关注的如下（不足 10 条）。

1. **#7048 — TUI 在 Cyrillic UTF-8 字符上 panic 崩溃**（bug / needs-triage）
   `auto_review.rs:1213` 按字节索引切片字符串，将多字节 UTF-8 字符截半导致 panic，**整个会话直接丢失**。这是影响非英文用户的严重稳定性问题，3 条评论，急需修复。
   链接：https://github.com/codewhale-hq/Codewhale/issues/7048

2. **#5316 — EPIC-005: CodeWhale TUI Crate 解耦（伞形 Issue）**（cleanup/tui/tracking）
   长期跟踪 Issue，累计 33 条评论。FEAT-031 已通过 PR #7009 于 10-22 合并，为后续 crate 拆分铺平道路。
   链接：https://github.com/codewhale-hq/Codewhale/issues/5316

3. **#7051 — 挂起（suspend）后无回执：无日志、无标记、提示语误写为 `--continue`**（bug/tui）
   由 @Hmbown 本人提交。作业控制挂起后系统状态不一致，启动提示建议用 `--continue` 而非 `fg`，涉及会话恢复语义的正确性。
   链接：https://github.com/codewhale-hq/Codewhale/issues/7051

4. **#7047 — Agent mail 半成品：持久队列与 REST 路由已有，但缺少模型侧工具和空闲线程唤醒路径**（enhancement）
   维护者对 agent 间邮件系统的现状盘点：协议层（763 行）已扎实落地，但 agent 目前无法实际发送邮件。是 agent 协作方向的关键缺口。
   链接：https://github.com/codewhale-hq/Codewhale/issues/7047

5. **#7049 — Composer 粘贴长文本后缺少编辑空间**（needs-triage）
   用户高频痛点：粘贴大段文本后难以在中间修改。涉及输入框 UX 与窄终端适配。
   链接：https://github.com/codewhale-hq/Codewhale/issues/7049

---

## 🔧 重要 PR 进展

> 今日共 8 个 PR 更新，全部覆盖如下。

**已合并：**

1. **#7009 — FEAT-031：13 个核心导航命令采纳可移植核心导航 Shapes**（refactor）
   由 @aboimpinto 提交，10-22 squash-merged 入 `main`（`6c2b1d8`）。覆盖 `/anchor`、`/help`、`/hotbar`、`/turn`、`/workspace` 等 13 个命令，为 crate 抽取做准备，无用户可见行为变化。
   链接：https://github.com/codewhale-hq/Codewhale/pull/7009

2. **#7052 — 修复 footer notice 折行时 em dash 后空格丢失**（fix/tui）
   `fit_notice` 将非 ASCII 标点视为全宽处理导致的排版错误，与 #7048 同属 Unicode 宽度问题。
   链接：https://github.com/codewhale-hq/Codewhale/pull/7052

3. **#7053 — `/diff` 分页器按实际绘制宽度渲染**（fix/tui）
   修复分页器 body 比渲染宽度窄 5 列时长 diff 行被二次折行的问题。
   链接：https://github.com/codewhale-hq/Codewhale/pull/7053

4. **#7054 — 会话重命名提示只显示一次**（fix/tui）
   按 `r` 时 header 行和 status 行同时变成输入框，导致提示重复。
   链接：https://github.com/codewhale-hq/Codewhale/pull/7054

5. **#7050 — 文件活动回执单复数修正**（fix/tui）
   "Read 1 files" → "Read 1 file"，文案细节打磨。
   链接：https://github.com/codewhale-hq/Codewhale/pull/7050

6. **#7041 — shell 执行保留 Python stdio 环境默认值**（fix/shell）
   `with_env` 整体替换环境变量 map，导致 Windows `PYTHONIOENCODING` 等默认值丢失。
   链接：https://github.com/codewhale-hq/Codewhale/pull/7041

7. **#7046 — Web 工具文档化受支持的 JSONPath 子集**（fix/web）
   明确列出支持的选择器，避免递归下降、过滤器等不支持语法引发参数错误。
   链接：https://github.com/codewhale-hq/Codewhale/pull/7046

**进行中：**

8. **#6393 — 无索引的源码导航回声与受保护的 fork 前缀继承**（feat，OPEN）
   在现有 Engine 上实现源码导航，保留原贡献者提交与署名，不引入索引守护进程。已持续近一个月，10-22 有更新。
   链接：https://github.com/codewhale-hq/Codewhale/pull/6393

---

## 📈 功能需求趋势

- **Unicode / 国际化健壮性**：#7048（Cyrillic panic）、#7052（em dash 宽度）接连暴露按字节处理非 ASCII 文本的系统性隐患，国际化适配应成为近期修复重点。
- **Agent 间协作基础设施**：#7047 的 agent mail 是 agent-to-agent 通信方向的明确路线图，社区对“协议先行、工具补齐”的架构演进有关注。
- **终端窄宽度 / 低分辨率适配**：多个 PR（#7053、#7054）在 44–60 列宽度下测试，说明小终端场景是社区真实使用场景。
- **架构解耦与可维护性**：EPIC-005（#5316）持续推进，crate 拆分是维护者主导的长期工程方向。

## 👨‍💻 开发者关注点

1. **会话稳定性与恢复**：一个 UTF-8 panic 即可导致整个会话丢失（#7048），挂起状态无回执（#7051）——崩溃恢复与会话状态一致性是最高优先级痛点。
2. **Composer 编辑体验**：粘贴长文本后的编辑空间不足（#7049），输入体验仍是高频反馈。
3. **跨平台环境变量**：shell 层环境变量被覆盖会破坏 Windows Python 默认行为（#7041），overlay 逻辑需更精细。
4. **工具文档准确性**：模型可见的工具描述（#7046 JSONPath）若与实际能力不符会直接引发调用失败，文档与实现的一致性值得关注。

---

*数据截至 2026-10-23，来源：github.com/Hmbown/DeepSeek-TUI（CodeWhale 仓库）。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-10-23

## 今日速览

今日无新版本发布，社区活跃度集中在 bug 修复与体验优化。HTML 导出相关的三个栈溢出/渲染问题在同一天内被多个 PR 密集修复并合并，是最突出的主线。启动稳定性问题（配置包安装失败导致崩溃，#11088）已有对应修复 PR（#11304）提出，值得关注。Windows/WSL 环境的兼容性反馈持续增多。

## 版本发布

过去 24 小时无新 Release。

## 社区热点 Issues

1. **[#7739](https://github.com/earendil-works/pi/issues/7739) 设定对标 jcode 的启动延迟与内存预算** — 社区以 jcode 基准数据为参照，要求 Pi 改善启动性能，讨论热烈（11 评论），性能优化诉求明确。

2. **[#10019](https://github.com/earendil-works/pi/issues/10019) Anthropic 订阅请求在 UTC :00/:30 挂起** — 订阅用户会话冻结且无 message_start，是影响核心使用流程的稳定性问题，多人复现。

3. **[#7553](https://github.com/earendil-works/pi/issues/7553) Compaction 支持独立配置 thinking level/模型** — 探讨中的功能需求，自动压缩的思考预算与正常回合解耦，3 👍。

4. **[#10956](https://github.com/earendil-works/pi/issues/10956) cacheWarming "idle" 在扩展处理后静默失效** — 507 条事件数据佐证的深度分析，缓存预热策略在复杂会话场景下的可靠性问题。

5. **[#9807](https://github.com/earendil-works/pi/issues/9807) TUI 大会话（800+ 消息）滚动/输入卡顿** — 全量重渲染架构 vs OpenCode 增量 diff 的对比讨论，3 👍，性能类高关注问题。

6. **[#11088](https://github.com/earendil-works/pi/issues/11088) [p0] 配置包安装失败导致启动裸崩溃** — 所有 CLI 入口均受影响且不写 crashes.json，P0 级问题，修复 PR 已提交（见下文）。

7. **[#11086](https://github.com/earendil-works/pi/issues/11086) [p0] Windows 终端 CPU 高负载时符号泄漏到输入** — SSH + 本地高负载场景下的输入流污染，Windows 生态又一痛点。

8. **[#5350](https://github.com/earendil-works/pi/issues/5350) SDK 自定义工具收到宿主 OS 解析的路径** — Windows 宿主 + Linux 远程目标的路径语义冲突，影响 SSH/远程开发场景的 SDK 用户。

9. **[#9980](https://github.com/earendil-works/pi/issues/9980) [已关闭] OpenRouter 开源模型成本计算偏差 2-3 倍** — 取最便宜 provider 定价导致成本报告严重失真，影响所有 OpenRouter 用户，已修复关闭。

10. **[#11250](https://github.com/earendil-works/pi/issues/11250) [已关闭] Context 文件应跳过整行 HTML 注释** — 与 Claude Code 行为对齐（CLAUDE.md 中的维护者备注不应发给模型），社区兼容性细节的典型代表。

## 重要 PR 进展

1. **[#11304](https://github.com/earendil-works/pi/pull/11304)（OPEN）配置包安装失败不再中断启动** — 对应 P0 issue #11088，按 offline 模式跳过失败包并通过扩展警告通道上报。

2. **[#11275](https://github.com/earendil-works/pi/pull/11275) / [#11293](https://github.com/earendil-works/pi/pull/11293) / [#11274](https://github.com/earendil-works/pi/pull/11274)（已合并）HTML 导出深度树栈溢出修复三连** — 将递归遍历改为显式栈，附带 20,000 层回归测试，解决大会话导出白屏。

3. **[#11290](https://github.com/earendil-works/pi/pull/11290)（已合并）HTML 导出渲染 system 消息** — 首条 system 消息渲染为系统提示词和工具列表，CLI --export 同步支持。

4. **[#11296](https://github.com/earendil-works/pi/pull/11296)（已合并）重写模糊搜索评分算法** — 修复“输入 opus 时 Sonnet 排在前面”等问题，一次关闭 #11220 等 4 个 issue。

5. **[#11299](https://github.com/earendil-works/pi/pull/11299)（已合并）修复 thinkingLevelMap 缺失导致的 400** — OpenRouter 推理模型的类型守卫与多余的 max_completion_tokens 两处根因修复。

6. **[#11257](https://github.com/earendil-works/pi/pull/11257)（已合并）保留 pi.exec 的 spawn 错误** — 可执行文件缺失时错误信息作为 stderr 返回，便于扩展诊断。

7. **[#11270](https://github.com/earendil-works/pi/pull/11270)（已合并）移除受管 npm ci 的 --min-release-age 覆盖** — 该 flag 无实际作用却会触发安全扫描器拦截更新。

8. **[#11288](https://github.com/earendil-works/pi/pull/11288)（OPEN）fork 会话通过单一 fd 写入** — 3,000 条目会话 fork 原需打开文件 3,000 次，性能优化明显。

9. **[#11278](https://github.com/earendil-works/pi/pull/11278)（已合并）保留 wrapUIPromptContext 中的 ctx.ui getters** — 修复对象展开提前求值 theme getter 导致的扩展 UI 初始化时序问题。

10. **[#11145](https://github.com/earendil-works/pi/pull/11145)（已合并）模型选择器保留配置顺序并优先子串匹配** — 与 #11296 呼应，进一步打磨 /model 的搜索排序体验。

## 功能需求趋势

- **性能与资源占用**：启动延迟对标竞品（#7739）、TUI 大会话渲染（#9807）、会话 fork I/O 优化（#11288），是当前最集中的方向。
- **Windows/WSL 兼容性**：输入符号泄漏（#11086）、空 bracketed paste 丢弃图片粘贴（#11259）、打包 CLI 扩展解析失败（#11219）、路径解析语义（#5350），Windows 用户反馈显著增长。
- **会话管理与导出**：HTML 导出的完整性与健壮性成为短期修复热点；compaction/分支摘要的模型与 token 归因（#11090、#7553）需求上升。
- **缓存策略可配置化**：idle 缓存预热的时间窗配置（#11127）与预热失效问题（#10956）。
- **扩展生态 API**：工具行展示 API（#10259）、markdown transformer 消息身份（#7828，已落地）、MCP OAuth 自定义客户端名（#10226）。

## 开发者关注点

- **稳定性优先**：多个 P0 级问题（启动崩溃、Anthropic 400 会话不可恢复 #11143/#11091）近期被密集修复并关闭，核心请求链路的鲁棒性是维护重点。
- **成本透明度**：成本计算偏差（#9980）和辅助 token 的模型归因（#11090）反映重度用户对精确计费的强烈需求。
- **静默失败不可接受**：多个 issue 聚焦“静默忽略/静默跳过”类行为（modelOverrides 被忽略 #11223、update 跳过项目包无提示 #11193、grep 继承 RIPGREP_CONFIG_PATH #11203），社区明确要求可观测的失败反馈。
- **环境差异**：宿主 OS、终端类型（Orca/Kitty）、SSH 场景下的行为差异是扩展开发者的反复痛点。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报 · 2026-10-23

## 📌 今日速览

今日无新版本发布，但社区活跃度极高（过去24小时更新 Issue 66 条、PR 287 条）。最受关注的是 **TUI 体验问题持续发酵**（#15452 评论达 12 条）与**安全告急：捆绑的 Bun 1.4.3 受 CVE-2026-91403 影响**（#16822）。同时 roboomp 一天连发三个针对性修复 PR，形成“上午报 Issue、下午出 PR”的高效修复节奏。

---

## 🚀 版本发布

过去 24 小时无新 Release（当前最新版本为 18.12.6）。

---

## 🔥 社区热点 Issues

1. **[#15452](https://github.com/can1357/oh-my-pi/issues/15452) TUI issues from last update** — 12 评论，prio:p2
   近期更新引入多个 TUI 异常行为（随机 "no tui"、恢复/压缩后 TUI 迟迟不加载）。作为热度最高的问题，虽被标记 wontfix/duplicate，但反映了用户对 TUI 稳定性的普遍焦虑。

2. **[#16822](https://github.com/can1357/oh-my-pi/issues/16822) 捆绑 Bun 1.4.3 信任已被入侵的 eMudhra CA（CVE-2026-91403）** — 🔴 安全
   Bun 1.4.3 根证书库仍信任 8 个私钥已泄露的 eMudhra 中间 CA，1.4.4 已修复。作为供应链安全问题，升级优先级应最高，建议维护者尽快跟进。

3. **[#16755](https://github.com/can1357/oh-my-pi/issues/16755) Anthropic 已退役模型仍在目录中，且图像描述回退首选 `claude-3-5-sonnet-20240620`** — 8 评论
   内置模型目录未清理已下线模型，每次调用都失败；回退逻辑还首选退役模型。直接影响可用性，需更新 catalog。

4. **[#2763](https://github.com/can1357/oh-my-pi/issues/2763) 一等公民的定时/周期任务（cron 式 "每 N 分钟运行 X"）** — 9 评论，6 👍
   长期开放的功能请求。目前只能靠“自我重臂的后台任务链”变通实现，社区呼声强烈，对标 Copilot CLI 的已有能力。

5. **[#13327](https://github.com/can1357/oh-my-pi/issues/13327) 重置确认弹窗预选"Yes"，一次回车不可逆地消耗限流重置并静默开启 auto-redeem** — 7 评论
   典型的危险默认值设计问题：误触一次即永久改变配置并消耗稀缺资源，UX 安全性亟需修正。

6. **[#16799](https://github.com/can1357/oh-my-pi/issues/16799) Hashline 边界回声裁剪误删 C++ 闭括号** — 4 评论
   编辑工具将 namespace 闭括号误判为边界回声，**警告后仍写入损坏文件并返回成功**——静默数据损坏是最危险的故障类别。

7. **[#16693](https://github.com/can1357/oh-my-pi/issues/16693) Marketplace 自动更新在启动中断时遗留完整临时克隆**（已关闭）— prio:p1
   用户发现约 16,000 个 `.tmp-clone-*` 目录共数百 GB 占用。磁盘空间泄漏类问题，p1 级别，已修复关闭。

8. **[#16790](https://github.com/can1357/oh-my-pi/issues/16790) Antigravity 的 Gemini 4 Argon 独立周配额被平均进 Gemini 周行** — 3 评论
   紧凑卡片显示"剩 50%"而 Argon 实际已耗尽。多桶配额的计量展示准确性问题，影响用户对配额的信任。

9. **[#16723](https://github.com/can1357/oh-my-pi/issues/16723) mnemopi 记忆图仍用 ASCII-only 正则提取实体，代词正则误匹配越南语词尾 "i"**（已关闭）
   #7918 修复过的问题在 graph voice 路径复发，暴露了 i18n 正则修复未全面铺开的技术债。

10. **[#16827 / #16826](https://github.com/can1357/oh-my-pi/issues/16827) 插件系统双 Bug：用户级升级删除项目级共享缓存目录；多目标升级只升级第一个且静默退出 0**
    插件管理器的引用共享机制与参数处理均有缺陷，当日已有对应修复 PR（见下文），社区响应迅速。

---

## 🔧 重要 PR 进展

1. **[#16832](https://github.com/can1357/oh-my-pi/pull/16832) XLSX 读取保留数字样式文本单元格原文** — 修复 #16831：20 位标识符被舍入、不同共享字符串被合并的问题，保护查找键完整性。

2. **[#16830](https://github.com/can1357/oh-my-pi/pull/16830) 保留其他项目仍链接的插件缓存目录** — 修复 #16827 的符号链接悬空问题。

3. **[#16829](https://github.com/can1357/oh-my-pi/pull/16829) 升级所有显式指定的插件目标** — 修复 #16826 的多目标静默忽略问题。

4. **[#16814](https://github.com/can1357/oh-my-pi/pull/16814) openai-responses 标准接口的可选 WebSocket 传输** — 明确 opt-in 设计、保持 HTTP/SSE 默认、复用现有请求/事件管线，配套 Issue #16813，工程质量考量周全。

5. **[#16231](https://github.com/can1357/oh-my-pi/pull/16231) todo 指引为不支持并行工具调用的模型提供回退方案** — review:p0，修复 #15402 合并后 Codex 发现的兼容性回归。

6. **[#16297](https://github.com/can1357/oh-my-pi/pull/16297) provider/model 选择器必须精确匹配，模糊匹配改报错** — 防止"打错模型名却静默跑了个近似模型”的隐蔽错误，附相近 ID 提示。

7. **[#16575](https://github.com/can1357/oh-my-pi/pull/16575) write 保持被替换文件的 CRLF 换行与 BOM** — 对齐 edit 的既有行为，Windows 工程师福音（`.bat`、`.sln` 不再被 LF 化）。

8. **[#16271](https://github.com/can1357/oh-my-pi/pull/16271) LSP 打开文件前将其他 worktree 加入语言服务器工作区** — 修复 rust-analyzer 在多 git worktree 场景下 "No references found"。

9. **[#15128](https://github.com/can1357/oh-my-pi/pull/15128) 自动兑换“购买最多时间”的账号重置** — 智能化 reset 消费策略：双账号被限时优先解封被封更久的那一个。

10. **[#16727](https://github.com/can1357/oh-my-pi/pull/16727)（已关闭）小米登录校验切换到 MiMo V2.6** — v2.5 当日停止支持导致登录全面失败，展现了快速响应能力；另见 #16704 引入按配额分层的账号回退策略。

---

## 📈 功能需求趋势

- **调度与自动化**：cron 式周期任务是呼声最久的 FR（#2763），社区需要脱离“自重臂 sleep 链”的原生方案。
- **传输协议扩展**：WebSocket 传输 for OpenAI Responses（#16813/#16814）反映对低延迟网关对接的需求。
- **账号/配额智能化**：分层账号回退（#16704）、最优 reset 消费（#15128）、多桶配额精确展示（#16790）——多账号用户的成本管理是高频诉求。
- **子代理与上下文控制**：标准上下文层限制（#16828）、seance 空字段兼容（#16122）等 task 工具细化配置。
- **国际化正确性**：越南语等非拉丁文字的正则误匹配问题反复出现（#16723），i18n 需系统性治理。
- **模型目录及时维护**：Anthropic 退役模型（#16755）、GPT-6 长上下文价格缺失（#16711）等 catalog 时效性问题集中爆发。

## ⚠️ 开发者关注点

1. **安全更新滞后**：捆绑 Bun 1.4.3 的 CVE-2026-91403 是当前最紧急事项，建议用户临时评估自身暴露面并关注上游升级。
2. **静默失败模式是最大痛点**：XLSX 舍入（#16831）、插件升级假成功（#16826）、错误模型模糊匹配、写坏文件仍报成功（#16799）——大量反馈集中于“退出码 0 但结果错误”的不可观测故障。
3. **TUI 稳定性与可读性**：TUI 相关 Issue 占比最高（渲染、滚动、拼写检测误报 #16821、herdr 内审批卡不可读 #16733）。
4. **资源泄漏**：数百 GB 临时克隆（#16693）提醒长跑用户关注 `~/.omp/plugins/cache` 目录。
5. **危险操作防护**：reset 确认预选 Yes（#13327）、`dd of=/dev/null` 误报（#16714）表明关键命令与确认流程的默认策略需要更保守的设计。

---
*数据来源：GitHub can1357/oh-my-pi | 统计窗口：2026-10-22 ~ 2026-10-23*

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*