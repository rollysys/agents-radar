# AI CLI 工具社区动态日报 2026-10-16

> 生成时间: 2026-10-16 03:40 UTC | 覆盖工具: 11 个

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

# AI CLI 工具生态横向对比分析报告（2026-10-16）

## 1. 生态全景

AI CLI 工具已从单一编码助手演进为覆盖 **多模型路由、多 Agent 协作、远程/托管执行、企业级治理** 的完整开发平台。头部工具竞争焦点从“能不能写代码”转向**长会话可靠性、成本透明度、Windows/跨平台体验**等工程化深水区。今日动态显示两大分野：闭源厂商工具快速堆功能但回归频发，开源/社区驱动工具在架构治理与多 Provider 兼容上纵深投入。同时，新模型接入节奏明显加快——Gemini 4 Argon、GPT-6.1、Opus 5.5 等多工具同日出现适配问题，模型目录时效性成为系统性痛点。

## 2. 各工具活跃度对比

| 工具 | 热点 Issues（Top 10 规模） | 24h PR 动态 | Release | 阶段特征 |
|---|---|---|---|---|
| **Claude Code** | 最高热度单帖 52 评论（Desktop 分组回归） | 仅 1 条 PR 更新 | v2.1.301（无人值守优化） | 用户基数最大，Desktop 质量问题集中爆发 |
| **OpenAI Codex** | 配额异常 61 评论持续发酵 | ~15+ 条 PR，功能密集 | rust-v0.163.0（`/config`、即时转向） | 工程投入最活跃，TUI 定制化密集落地 |
| **Gemini CLI** | Subagent 可靠性为主（13 评论） | 10+ 条 PR | v0.66.0-nightly | nightly 快节奏，安全与 AST 探索并进 |
| **GitHub Copilot CLI** | 38 条 Issue 更新，多模型报错集中 | 0 条 PR 更新 | v1.0.99-1/2 双发 | 企业/多模型路由场景痛点凸显 |
| **OpenCode** | 免费层权限误判系列（13 评论） | 10+ 条 PR，含社区多语言贡献 | v1.19.1/.2（V1/V2 通道隔离） | 1.x→2.x 过渡期，社区驱动特征明显 |
| **Qwen Code** | 架构提案 #12380 达 70 评论 | 10+ 条 PR，K8s/SSH/快照等基础设施 | v0.25.2（CLI/Desktop/SDK 同步） | Managed Agent 架构投入最重 |
| **DeepSeek TUI (CodeWhale)** | Windows bug 密集（12 评论滚动卡顿） | 10 条 PR，多起当日闭环 | 无新 Release（0.10.2 候选中） | 社区修复响应极快，跨平台移植活跃 |
| **Pi** | **167 条 Issue 更新（今日最高）** | 10+ 条 PR，含 P0 级性能修复 | v1.3.0 | 社区互动密度极高，多模型适配高压 |
| **oh-my-pi** | 107 条 Issue / **324 条 PR 更新** | 性能与 Provider 韧性密集 | v18.11.1 | 迭代速度极快，SDK 嵌入用户增长 |
| **Kimi Code CLI** | 无活动 | 无 | 无 | 静默期 |
| **DeepSeek Harness** | 无 Issue/PR 更新 | 无 | dsh-v0.2.1-alpha.4 | 早期 alpha，低频迭代 |

> 注：各工具“热度”口径不一（评论数 vs 更新条数），Pi/oh-my-pi 的绝对更新量最高，Claude Code/Codex 的单帖讨论深度最大。

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **上下文/Compaction 可靠性** | 几乎全部 | Codex #49961 过早压缩、Pi #10330 JSON 模式压缩失效、OpenCode #52761 compaction 不命中 cache、Qwen #14331 上下文撑爆硬失败、CodeWhale #6981 压缩失败 |
| **Token 计量与成本透明** | Codex、Claude Code、Copilot、OpenCode、oh-my-pi | Codex #41220 配额异常（61 评论）、Claude Code #100830 subagent 统计偏低、Copilot #5149 空回复计费、oh-my-pi #13849 credits 误报 |
| **新模型适配时效性** | Gemini CLI、Pi、oh-my-pi、Copilot、Codex | Gemini 4 Argon 注册、Pi 的 Opus 5.5 effort 400、oh-my-pi GLM-5.3-FlashX 目录缺失、Copilot Sol 系列工具定义膨胀 17 倍 |
| **Windows/WSL 平台质量** | Claude Code、Codex、Pi、CodeWhale、OpenCode、Copilot | WSL 会话挂起（CC #102635）、Codex 模型 404、CodeWhale /undo 与滚动卡顿、OpenCode WSL2 端口冲突 |
| **沙箱与安全防护** | Copilot、Gemini CLI、Claude Code、CodeWhale | Gradle daemon 被沙箱阻断、CC Safeguard 误报、CodeWhale ACP 沙箱回归、命令注入防护（Gemini PR #29688） |
| **长时运行/资源泄漏** | Qwen、oh-my-pi、Claude Code | 僵尸进程（Qwen #14288、CodeWhale）、内存泄漏（omp 网关 7GB）、CC 磁盘清理盲区 |
| **MCP 企业化治理** | Copilot、Claude Code、Gemini CLI | 多租户 Entra 认证、Bearer 回退、elicitation 被拒、MCP 失败通知模型 |

## 4. 差异化定位分析

- **Claude Code**：垂直整合（CLI+Desktop+iOS+Mod+Remote Control），主攻重度 Anthropic 生态用户与无人值守自动化（retry watchdog、OTel）；短板在 Desktop 端发布质量与 Windows 体验。
- **OpenAI Codex**：交互体验领先（`/config`、即时转向、`/presets`、状态行），并押注 Dots/云端任务生态与远程执行凭证安全；受配额计量信任危机与 Windows 路由问题拖累。
- **Gemini CLI**：开源、架构探索型——OS 沙箱、AST-aware 工具链、subagent Sprint，走“研究驱动”路线，适合愿意容忍 nightly 不稳定的技术先锋。
- **GitHub Copilot CLI**：多模型路由 + 企业身份（Entra/租户）+ 插件生态（`ghapp://`），定位企业 GitHub 原生场景，是多模型可用性焦虑的风向标。
- **OpenCode**：模型无关的免费层 + 开源社区驱动，V1/V2 双通道管理精细，国际化贡献活跃；免费层稳定性是主要短板。
- **Qwen Code**：技术路线最激进——Managed Agent、K8s/SSH 工具运行时、快照子 Agent、ACP 协议化，明显面向托管化/多 Agent 生产部署。
- **Pi / oh-my-pi**：轻量级多 Provider 路由专家，覆盖从 OpenAI 到 NVIDIA、智谱、DeepSeek 的长尾模型；oh-my-pi 的 SDK 嵌入与终端富媒体是独特卖点。
- **DeepSeek 系**：CodeWhale 重跨平台移植（Termux/OHOS）与社区响应速度；Harness 处于早期 alpha，聚焦易用性与插件分发。

## 5. 社区热度与成熟度

**活跃度梯队**：
- 🔥 **极高**：Pi（167 Issue 更新）、oh-my-pi（107 Issue / 324 PR 更新）——小体量但单位密度惊人，用户粘性强
- 🔥 **高**：Claude Code（单帖 52 评论的群体性不满）、Codex（配额帖 61 评论）、Qwen Code（架构提案 70 评论）
- ⚡ **稳定**：Gemini CLI、OpenCode、CodeWhale、Copilot CLI
- 💤 **低**：Kimi Code CLI（无活动）、DeepSeek Harness（仅 Release）

**成熟度判断**：Claude Code/Codex 用户基数最大但进入“回归修复期”；Gemini CLI/oh-my-pi 处于快速功能迭代期；Qwen Code 处于架构重塑期；OpenCode 处于版本过渡期；CodeWhale/Harness/Kimi 处于早期成长或静默期。一个反向信号：**PR 活跃度与用户基数不成正比**——oh-my-pi、CodeWhale、Qwen 的工程产出密度超过 Claude Code（24h 仅 1 条 PR 更新），闭源工具的开发可见度天然受限。

## 6. 值得关注的趋势信号

1. **计量信任成为新的竞争维度**：Codex 配额异常、Copilot 空回复计费、Claude Code token 统计偏低——三家头部同日暴露计量问题。**参考价值**：选用工具时应将“用量可审计性”（OTel、日志、独立核算）纳入评估；构建自研 agent 时务必分离内部计数与上报口径。

2. **“静默失败”是当前最大工程公敌**：跨 6+ 工具反复出现（图片静默丢弃、配置静默忽略、压缩静默不触发、后台任务隐形阻塞）。**参考价值**：agent 系统设计中，显式错误与可观测性优先于功能扩展。

3. **托管化/远程执行是下一战场**：Qwen 的 K8s Workspace、Codex 的 Dots 与 exec-server 凭证轮换、oh-my-pi 的 SDK 嵌入——CLI 正在从本地终端工具演变为分布式 agent 运行时。随之而来的是**凭证轮换、会话隔离、数据留存**等新安全课题（Qwen #13202、omp #15229 是预警样本）。

4. **模型目录时效性是系统性架构问题**：上游模型迭代（Gemini 4、GPT-6.1、Opus 5.5）快于下游工具适配，Pi 已将目录兼容性纳入发布校验。**参考价值**：多 Provider 工具应将模型元数据视为需要独立发布管道的资产。

5. **Windows 是全行业质量洼地**：所有主流工具的 Windows/WSL 问题占比均偏高，Pi 甚至发起专项调研。Windows 优先支持的工具（或 WSL 深度优化）存在差异化机会。

6. **用户行为分化明显**：重度用户（10-20 并行会话、99MB 会话文件）暴露的压力测试场景，正在倒逼行业解决长会话内存、增量 IO、优雅降级——这些正是从“demo 可用”到“生产可用”的分水岭。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
（数据来源：github.com/anthropics/skills，截止 2026-10-16）

---

## 一、热门 Skills / PR 排行

| # | PR | 主题 | 状态 | 关注点 |
|---|----|------|------|--------|
| 1 | [#1245](https://github.com/anthropics/skills/pull/1245) | **notion-spec-to-implementation + quantitative-resume-auditor** | OPEN | 将产品/技术 Spec 自动拆解为 Notion 任务（含验收标准与进度跟踪），叠加简历量化审计；6 月提交至今 10 月仍活跃更新，是长寿度最高的新 Skill PR 之一 |
| 2 | [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder 适配 mcp>=2** | OPEN | 修复 `streamable_http_client` 重命名及自定义 Header 传递，关联 Issue #1668；mcp-builder 是生态核心 Skill，兼容性修复需求强烈 |
| 3 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 触发评估隔离 + Windows 兼容** | OPEN | 解决并行 worker 竞争、Windows `select()` 失败、误判负样本等评估准确性问题，呼应 Issues #1352/#1383 等高频抱怨 |
| 4 | [#1961](https://github.com/anthropics/skills/pull/1961) | **skill-creator eval viewer 安全加固** | OPEN | 修复脚本逃逸、DNS rebinding、跨站 POST、转义缺陷，是对 Issue #1394（XSS）的直接响应，10 月最新提交 |
| 5 | [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | OPEN | 零成本将 Markdown 编译为带真人配音的 MP4 视频（Marp + TTS），内容创作自动化的代表型新 Skill |
| 6 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | OPEN | 解决 AI 生成文档的孤行、寡段、编号错位等排版问题——“用户不会主动要求但影响所有输出”的质量控制思路 |
| 7 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer** | OPEN | 元技能：对 Skill 本身做五维质量评估与安全审计，体现社区对“Skill 治理”的早期关注（2025-11 提交） |
| 8 | [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | OPEN | Solidity/Rust 智能合约静态分析 + TON 链上审计证明锚定，Web3 方向（需注意其商业推广属性） |

---

## 二、社区需求趋势（来自 Issues）

1. **安全与信任治理**（最热，46 评论）：[#492](https://github.com/anthropics/skills/issues/492) — 社区 Skill 冒用 `anthropic/` 命名空间，信任边界被滥用，用户可能在误以为官方的情况下授予高权限。此外 #1394、#1980 等持续暴露 Skill 内脚本注入/XSS 风险。
2. **组织级共享与分发**：[#228](https://github.com/anthropics/skills/issues/228) — 期待 org 内 Skill 库 / 直接分享链接，替代目前 Slack 传文件手动上传的原始流程。
3. **skill-creator 评估体系可靠性**：[#556](https://github.com/anthropics/skills/issues/556)（触发率恒为 0）、#1352（并行 worker 串号）、#1383（六项缺陷）— Skill 开发工具链的 eval 准确性是最大痛点集群。
4. **上下文效率**：[#1487](https://github.com/anthropics/skills/issues/1487) — claude-api skill 单次注入 ~156k token 耗尽上下文；[#1329](https://github.com/anthropics/skills/issues/1329) 提出 compact-memory（符号化压缩 agent 状态）。
5. **质量门禁/推理验证类 Skill**：[#1385](https://github.com/anthropics/skills/issues/1385) — 期待“预校准 → 对抗性审查 → 交付验证”三段式质量管线。
6. **文档处理健壮性**：#2018、#189、#62 等 — docx/pdf/odt 文档技能的边界情况与插件重复安装问题。

---

## 三、高潜力待合并 Skills（活跃 OPEN PR）

- [#1997](https://github.com/anthropics/skills/pull/1997) skill-creator YAML frontmatter 解析修复 — 精准小修，10 月快速迭代，合并概率高
- [#2004](https://github.com/anthropics/skills/pull/2004) slack-gif-creator 文字居中修复 — 含 Pillow 版本复现数据，典型可快速落地修复
- [#1792](https://github.com/anthropics/skills/pull/1792) docx LibreOffice 超时误报成功修复 — 直接对应文档技能可靠性诉求
- [#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder mcp>=2 适配 — 生态核心依赖升级，阻塞面广
- [#1298](https://github.com/anthropics/skills/pull/1298) skill-creator 评估隔离/Windows 修复 — 覆盖多个高评论 Issue（#1352/#1383），社区需求明确
- [#1245](https://github.com/anthropics/skills/pull/1245) Notion Spec 落地 + 简历审计 — 存活 4 个月仍持续更新，工作流自动化方向代表

---

## 四、生态洞察（一句话）

> 社区最集中的诉求不是“更多 Skill”，而是**让 Skill 生态可信、可测、可分发**——命名空间信任边界、eval 触发评估的准确性、上下文效率与组织级共享，构成了当前 Skills 层面的四大结构性瓶颈。

---

# Claude Code 社区动态日报（2026-10-16）

## 1. 今日速览

- **CLI 发布 v2.1.301**，主要面向无人值守场景：新增 `CLAUDE_CODE_RETRY_WATCHDOG_MAX_USAGE_LIMIT_WAIT_MS` 环境变量，避免 retry watchdog 在使用限额重置过远时无限等待；`claude-api` skill 增加了 OpenTelemetry tracing 指引。
- **Desktop 侧问题集中爆发**：Windows 2.37337.1 更新移除 "Group by" 选项引发最大规模不满（52 评论），macOS 2.42304.0 出现启动冻结、WSL 会话挂起等多个新 bug。
- **安全防护误报**成为今日新增高频反馈，多位用户报告 benign 任务触发 Safeguard 警告。

## 2. 版本发布

**v2.1.301**（[Release](https://github.com/anthropics/claude-code/releases)）
- 新增 `CLAUDE_CODE_RETRY_WATCHDOG_MAX_USAGE_LIMIT_WAIT_MS`：在无人值守重试模式（`CLAUDE_CODE_RETRY_WATCHDOG`）下，若用量限额的重置时间过远，将直接终止请求而非干等。
- `claude-api` skill 新增 OpenTelemetry tracing 配置指引。

## 3. 社区热点 Issues（Top 10）

| # | Issue | 关注点 |
|---|---|---|
| 1 | [#102088](https://github.com/anthropics/claude-code/issues/102088)（52 评论 / 37 👍）| **今日最热**。Desktop 2.37337.1 移除了 Code 标签侧栏的 "Group by" 选项，会话只能按环境分组，回归类 UI 问题引发大量用户不满 |
| 2 | [#102171](https://github.com/anthropics/claude-code/issues/102171) | 同一更新的连带问题：多数项目从侧栏消失，所有会话被堆进一个 "Default" 组（已关闭，疑似官方确认处理） |
| 3 | [#102635](https://github.com/anthropics/claude-code/issues/102635) | **今日新增高危**：Windows + WSL 下，2.42304.0 / engine 2.1.299 更新后所有新会话在首条消息时挂起，旧会话正常 |
| 4 | [#102611](https://github.com/anthropics/claude-code/issues/102611) | macOS Desktop 2.42304.0 启动约 3 秒后 Code 标签冻结，渲染进程 100% CPU；移走 `claude-code-sessions` 可恢复 |
| 5 | [#100830](https://github.com/anthropics/claude-code/issues/100830) | 自 2.1.280 起 subagent transcripts 缺失最后的 assistant 条目（stop_reason / 最终 usage），导致输出 token 统计偏低，影响成本核算 |
| 6 | [#98256](https://github.com/anthropics/claude-code/issues/98256) | MCP elicitation 能力已声明但 VSCode 交互式会话中请求被自动拒绝（"print mode"），有稳定复现，15 👍 |
| 7 | [#99217](https://github.com/anthropics/claude-code/issues/99217) | Mod 的 `ui.render` 输出（如 AbovePrompt）在终端正常渲染，但 Remote Control 的 desktop/iOS 视图中完全不可见 |
| 8 | [#102260](https://github.com/anthropics/claude-code/issues/102260) | Idle compaction 被远程 feature flag 静默启用，无通知无 opt-in，引发对行为透明度的质疑 |
| 9 | [#102610](https://github.com/anthropics/claude-code/issues/102610) / [#102629](https://github.com/anthropics/claude-code/issues/102629) | Safeguards 误报：正常的本地文档分析、开发环境准备被判定为 `reasoning_extraction` 等风险行为，今日集中出现 |
| 10 | [#102633](https://github.com/anthropics/claude-code/issues/102633) / [#102634](https://github.com/anthropics/claude-code/issues/102634) | 磁盘清理盲区：retention sweep 永不清理 Desktop 已删除会话的 transcripts 及 `~/.claude/jobs/`，长期累积 |

**其他值得注意**：GitHub 集成无法连接仓库（[#102579](https://github.com/anthropics/claude-code/issues/102579)、[#102620](https://github.com/anthropics/claude-code/issues/102620)）；Windows 内核非分页内存泄漏 #96870、Remote Control 桥接重启后失效 #100940 等长期问题仍在持续跟进。

## 4. 重要 PR 进展

过去 24 小时仅 1 条 PR 更新：

- **[#95698](https://github.com/anthropics/claude-code/pull/95698)** [OPEN] `fix(plugins): run ralph-wiggum and output-style .sh hooks through bash with a quoted path` — 修复三个内置插件将 hook 注册为裸路径（未加引号、未显式用 bash 执行）导致在含空格路径下失败的问题。关联 #95673 和 #78490 的一半场景。

## 5. 功能需求趋势

1. **侧栏会话管理**：嵌套子分组需求持续升温（[#86232](https://github.com/anthropics/claude-code/issues/86232)、[#93058](https://github.com/anthropics/claude-code/issues/93058)，各 8 👍），叠加 Group by 功能被移除引发的反弹，会话组织是当前 UI 最大痛点。
2. **Remote Control / 跨端一致性**：desktop ↔ iOS 视图渲染差异（#99217）、读已读状态不跨设备同步（#81568）、桥接重连可靠性（#100940）。
3. **可观测性与成本**：OpenTelemetry tracing 文档落地（v2.1.301）、token 计量准确性（#100830）、上下文用量可视性退化（#102288）。
4. **资源调度**：多并发会话的本地重活协调（Gradle/xcodebuild 等，[#101193](https://github.com/anthropics/claude-code/issues/101193)）。
5. **存储生命周期管理**：transcripts / jobs 目录的自动清理（#102633、#102634）。

## 6. 开发者关注点

- **桌面端更新质量**：近期两次桌面更新（2.37337.1、2.42304.0）均引入回归——分组丢失、启动冻结、WSL 会话挂起、macOS 窗口拖拽失效（#102613），Windows 用户受影响最广。
- **Safeguard 误报**：正常开发与文档分析工作流被误拦（#102610、#102629），用户对误报透明度和申诉渠道表达不满。
- **静默功能变更**：idle compaction 经远程 flag 无提示启用（#102260），社区希望重大行为变更有 opt-in 或明确通知。
- **数据留存失控**：本地 `~/.claude/projects`（单用户 3,100+ transcripts）与 `~/.claude/jobs` 无限增长，缺乏清理机制。
- **Windows/WSL 体验**：UNC 路径未翻译导致 WSL 会话失败（#102485）、`safeSpawn` 对用户级 Git 安装的误报（#91060）、内核内存泄漏（#96870），Windows 生态问题占比持续偏高。

---
*数据来源：anthropics/claude-code GitHub（过去 24 小时）*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-10-16）

## 1. 今日速览

Codex 发布 **rust-v0.163.0** 正式版，带来全新的 `/config` 配置搜索功能和“边生成边追问”的即时转向能力，交互体验显著提升。社区方面，**配额异常消耗**（#41220）持续发酵至 61 条评论，Windows 端 "Model not found" 和浏览器工具初始化失败成为最集中的两大故障热点。工程侧 PR 活跃，围绕 `/presets` 预设系统、状态行定制（呼应高赞需求 #17827）和远程执行凭证安全提交了一批改动。

## 2. 版本发布

### [rust-v0.163.0](https://github.com/openai/codex/releases)
- **`/config` 配置中心**：支持跨类别搜索偏好设置、即时修改受支持项，并标注哪些改动需要重启生效（#52990, #53429）
- **即时追问转向**：在 Codex 响应过程中发送 follow-up 即可立即引导方向；中断当前轮次也会停止活跃的 Code Mode 单元

> 同日还发布了 `0.163.0-alpha.10.2` 预发布版。

## 3. 社区热点 Issues

| # | Issue | 关注点 |
|---|-------|--------|
| 1 | [#41220](https://github.com/openai/codex/issues/41220) 配额异常消耗跨报告追踪（61 评论） | Meta 级汇总帖，大量用户报告配额/积分消耗速度远超基线，且与本地 token 统计不一致。悬而未决，是当前社区最大痛点 |
| 2 | [#54083](https://github.com/openai/codex/issues/54083) Windows 端 5.6/6 模型全部 404（51 评论） | 三个思考等级均报 "Model not found"，网页端正常，疑似客户端路由问题，影响面广 |
| 3 | [#17827](https://github.com/openai/codex/issues/17827) 可定制状态行（204 👍 / 53 评论） | 高呼声功能请求，对标 Claude Code 的状态行脚本机制；今日相关 PR（#54387/#54388）显示官方正在响应 |
| 4 | [#54197](https://github.com/openai/codex/issues/54197) Web 端 404 "Model not found"（27 评论） | 触发点被定位为客户端 User-Agent，移动端正常；与 #54083 可能同源，值得关注关联性 |
| 5 | [#53188](https://github.com/openai/codex/issues/53188) Windows 浏览器工具 MXC 0x80070003（40 评论） | 浏览器/computer-use 初始化失败系列问题的主帖；#54157 显示新版仍复现 |
| 6 | [#51917](https://github.com/openai/codex/issues/51917) 工作空间设置加载失败阻塞新会话（20 评论） | 10-11 更新确认 26.1007.21434 版本仍未修复，与 Cloudflare 403 系列问题（#53515、#52437、#53994）相互印证 |
| 7 | [#50704](https://github.com/openai/codex/issues/50704) Dots 云端读取拒绝本地会话 ID（18 评论） | 云端 reader 与本地原生 reader 对同一会话 ID 行为不一致，Dots 生态互操作性存疑 |
| 8 | [#45163](https://github.com/openai/codex/issues/45163) TUI 配色缓存导致输入不可读（15 评论） | 系统切换浅/深色模式后 TUI 调色板不刷新，长期未修的可用性 bug |
| 9 | [#49961](https://github.com/openai/codex/issues/49961) GPT-6.1 Sol/Astra 过早压缩（10 评论） | 内部 token 计数超出上报用量，导致频繁提前 compaction——与 #41220 的计量问题可能相关 |
| 10 | [#53677](https://github.com/openai/codex/issues/53677) Orbit 目录反复重载 65 个会话（4 评论） | access-denied 被当作可重试错误，造成持续网络请求和性能损耗；技术分析扎实，含具体重试路径定位 |

## 4. 重要 PR 进展

| # | PR | 内容 |
|---|-----|------|
| 1 | [#54414](https://github.com/openai/codex/pull/54414) | 允许根轮次在存在活跃后代时挂起并关闭，改进会话恢复能力 |
| 2 | [#54434](https://github.com/openai/codex/pull/54434) | 远程 exec-server 支持 stdin 轮换凭证，30 秒初始凭证要求 + 过期拒绝，提升远程执行安全 |
| 3 | [#54432](https://github.com/openai/codex/pull/54432) | Zsh shell 快照下支持远程凭证掩码，补齐 Bash 之外的安全盲区 |
| 4 | [#54380](https://github.com/openai/codex/pull/54380) | 新增 `/presets`：10 个编号槽位的可复用提示词/斜杠命令预设系统 |
| 5 | [#54387](https://github.com/openai/codex/pull/54387) / [#54388](https://github.com/openai/codex/pull/54388) | `/title`、`/statusline` 支持会话级内联参数与快速预设——直接呼应 #17827 状态行需求 |
| 6 | [#54383](https://github.com/openai/codex/pull/54383) / [#54385](https://github.com/openai/codex/pull/54385) | `/permissions` 内联切换权限档案；可将当前权限配置（profile + 审批策略 + reviewer）保存为预设 |
| 7 | [#54389](https://github.com/openai/codex/pull/54389) / [#54417](https://github.com/openai/codex/pull/54417) | SQLite 稳定性双修：启动时保留既有 journal mode 避免写锁冲突；Linux NFS 上跳过 page reclamation |
| 8 | [#54401](https://github.com/openai/codex/pull/54401) | macOS 上托管 daemon 进程以 `taskpolicy -b` 后台优先级运行，降低前台资源争抢 |
| 9 | [#54421](https://github.com/openai/codex/pull/54421) | 显式连接默认 daemon socket 时正确归类为本地连接（兼容 SSH 转发场景） |
| 10 | [#54398](https://github.com/openai/codex/pull/54398) / [#54420](https://github.com/openai/codex/pull/54420) | 生成图片以附件引用存储并暴露 `fileId`；记录本地输入图片路径与 SHA-256，增强可追溯性 |

其他值得一提：[#54419](https://github.com/openai/codex/pull/54419)（Mermaid 节点标签换行渲染）、[#54433](https://github.com/openai/codex/pull/54433)（TUI 中性化非零退出标签）、[#54424](https://github.com/openai/codex/pull/54424)（远程插件元数据）。

## 5. 功能需求趋势

1. **TUI 可定制性与工作流效率**：状态行/标题定制（#17827）、预设系统、快捷键——本周期 PR 密集落地，是官方明确投入的方向
2. **配额透明度与用量可观测**：计量不一致、过早压缩、发送按钮禁用等 Issue 聚集，社区强烈要求准确的用量报告
3. **Dots/远程任务生态**：Dots 与本地会话互操作性（#50704）、沙箱策略继承（#50737）、Orbit 目录刷新（#53677）等新问题随 Dots 推广涌现
4. **浏览器/computer-use 可靠性**：Windows 端 MXC 初始化失败、URL 检测失败、origin 权限记录异常，构成稳定的问题簇

## 6. 开发者关注点

- **配额计量可信度是最大信任危机**：#41220、#49961、#52851（用量消耗快 20 倍）相互印证“内部 token 计数与上报不一致”的系统性问题，尚无官方根因说明
- **Windows 端质量问题突出**：今日 30 条热榜 Issue 中过半涉及 windows-os，模型路由 404、Cloudflare 403、浏览器工具初始化三大类故障在新版本中持续复现
- **网络/安全验证间歇性故障**：Cloudflare challenge 403 在 Windows/macOS 均有报告（#52437、#53515、#53994），锁屏解锁后尤其明显，代理/区域因素可能相关
- **第三方集成缺乏官方通道**：#54486-#54488 连续提交（当日即关闭）询问第三方工具与 Codex Desktop 任务的安全协作路径，显示生态开发者对官方 API/文档的诉求未被满足

---
*数据来源：github.com/openai/codex（过去 24 小时）*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-10-16

## 1. 今日速览

今日发布 v0.66.0-nightly 版本（版本号 PR #29776），同时社区出现 **Gemini 4 Argon 模型支持** PR，暗示新一代模型接入正在进行中；不过官方已关闭“Gemini CLI 未对 Gemini 4 优化”的横幅提示 PR，表明兼容性工作在同步推进。Issue 区活跃焦点集中在 **Subagent 可靠性**（挂起、误报成功）与 **AST-aware 工具链探索** 两大方向。

## 2. 版本发布

**v0.66.0-nightly.20261016.gdebf42324**（[#29776](https://github.com/google-gemini/gemini-cli/pull/29776)）
- 常规 nightly 版本号更新，包含 v0.64.0 Changelog 整理（#29741）及 UI 同步修复（`fix(ui): implement synchroniz...`）

## 3. 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)（P1）Subagent 达到 MAX_TURNS 后误报成功**
   Subagent 碰到轮数上限却报告 `GOAL success`，掩盖了实际中断。这是结果可信度问题，影响 agent 可观测性核心体验，13 条评论反映讨论热烈。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)（P1）通用 Agent 无限挂起**
   转交给 generalist agent 后简单操作（如建文件夹）永久挂起，8 👍 显示影响面广，用户只能手动禁止 subagent 规避。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)（P2）零依赖 OS 沙箱 + 执行后意图路由**
   方向性提案：利用 Gemini 3 原生 bash 能力，同时通过沙箱保障安全。是 agent 执行架构的重要演进讨论。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)（P2）AST-aware 文件读取/搜索/映射评估 Epic**
   探索用 AST 工具（ast-grep、tilth、glyph）减少读取对齐偏差和 token 噪音，配套子 issue #22746/#22747，是效率优化的系统性工作。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)（P2）模型不主动使用 skills 和 subagents**
   用户反馈自定义 skill/subagent 几乎从不被自动调用，只有显式指示才生效，反映调度策略与用户预期有差距。

6. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)（P1）browser subagent 在 Wayland 下失败**
   Linux 桌面（Wayland）环境下 browser agent 不可用，同样伴随“GOAL 成功”的误导性终止原因。

7. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)（P2）Browser Agent 忽略 settings.json 覆盖**
   `AgentRegistry` 正确读取配置但 browser agent 完全不生效（如 `maxTurns`），配置链路存在断裂。

8. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)（P2）超过 128 个工具触发 400 错误**
   工具数量超限时 API 直接报错，期望 agent 能智能裁剪工具作用域，对重度 MCP 用户影响明显。

9. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)（P1）get-shit-done output hook 导致崩溃**
   输出接近完成时稳定崩溃，P1 级稳定性问题。

10. **[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)（P2）终端 resize 高性能无闪烁**
   需迁移到 RenderStatic 并分批更新历史，涉及 Ink 渲染架构升级，是终端 UI 体验的长期投入。

## 4. 重要 PR 进展

1. **[#29737](https://github.com/google-gemini/gemini-cli/pull/29737) 注册 Gemini 4 Argon 模型**
   新模型 `gemini-4-argon` 可直接选择使用，是下一代模型接入的先行信号。

2. **[#29778](https://github.com/google-gemini/gemini-cli/pull/29778) ACP 模式下截断工具输出**
   修复 `--acp` 模式下工具输出全量发送导致超输入 token 上限（400 错误）的问题。

3. **[#29779](https://github.com/google-gemini/gemini-cli/pull/29779) ripgrep 失败标记为工具错误**
   修复搜索失败被调度器误记为成功的问题，与 Issue #22323 的“误报成功”主题呼应。

4. **[#29749](https://github.com/google-gemini/gemini-cli/pull/29749) 原子写入尊重只读文件与硬链接**
   修复原子写入静默覆盖 `0444` 只读文件并断开硬链接的问题——安全与数据完整性双修。

5. **[#29762](https://github.com/google-gemini/gemini-cli/pull/29762)（P1）切换认证时保留磁盘配置**
   防止 `/auth signin` 覆盖用户启动后修改的其他 settings。

6. **[#29757](https://github.com/google-gemini/gemini-cli/pull/29757) 验证自动更新是否真正生效**
   解决 PATH 遮蔽导致“更新成功”假象、实际仍运行旧二进制的问题，多安装来源用户的常见痛点。

7. **[#29590](https://github.com/google-gemini/gemini-cli/pull/29590)（已合并）工具返回的图片可送达模型**
   修复截图等图片在 functionResponse 序列化时被丢弃的问题。

8. **[#29688](https://github.com/google-gemini/gemini-cli/pull/29688) 修复命令替换防护绕过**
   安全修复：shell wrapper 中间标志位可绕过 `stripShellWrapper()` 的命令注入防护。

9. **[#29744](https://github.com/google-gemini/gemini-cli/pull/29744) /ide 支持重启后重连**
   VS Code 重载窗口后 CLI 不再需要完全重启才能恢复 IDE 集成。

10. **[#29596](https://github.com/google-gemini/gemini-cli/pull/29596)（已合并）ACP 权限请求附带 MCP 服务器与工具名**
    让 ACP 客户端能区分来源，提升审批安全性。

## 5. 功能需求趋势

- **Subagent 体系深化**：本地 subagent Sprint（#20195）、并行协作与共享内存（#18287）、轨迹分享（#22598）、settings.json 发现机制（#18285）——subagent 是当前最密集的投入方向。
- **代码理解效率**：AST-aware 读取/搜索/映射（#22745-#22747）、“Tactful Extraction” 省 token 读取（#19561）、文件化任务追踪替代 WriteToDo（#18836、#21000）。
- **安全与防护**：OS 级沙箱（#19873）、阻止破坏性 git 操作（#22672）、命令注入防护（PR #29688）。
- **新模型支持**：Gemini 4 Argon 注册（PR #29737）与 Gemini 4 适配提示（PR #29774）。
- **IDE/编辑器集成**：IDE 重连（PR #29744）、终端渲染性能（#21924）。

## 6. 开发者关注点

- **结果可信度是最大痛点**：subagent 挂起（#21409）+ 误报成功（#22323、#21983）组合，让用户难以信任 agent 的自治执行结果，`/bug` 报告也缺少 subagent 上下文（#21763），排障困难。
- **配置生效链路脆弱**：settings.json 覆盖被 browser agent 忽略（#22267）、认证切换覆盖用户配置（PR #29762）、symlink agent 不识别（#20079）。
- **Token 与上下文管理**：工具数超限 400 错误（#24246）、大输出需截断（PR #29778）、上下文膨胀驱动 surgical reads 需求（#19561）。
- **文件副作用卫生**：模型在随机目录生成临时脚本污染工作区（#23571）、静默覆盖只读文件（PR #29749），影响提交清洁度与安全性。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-16 | 数据来源：[github/copilot-cli](https://github.com/github/copilot-cli)**

---

## 一、今日速览

过去 24 小时内 Copilot CLI 连发两个版本（v1.0.99-1 / v1.0.99-2），引入 `--trust-folder` 一次性信任模式、MCP 插件安装链接（`ghapp://` 协议）以及默认开启的语义代码搜索。社区活跃度高，38 条 Issue 更新中涌现多个高价值回归 Bug 报告，尤其集中在**模型层（Claude/Gemini/Sol 系列报错）**和 **MCP 企业认证**两个方向。

---

## 二、版本发布

### v1.0.99-2（[Release](https://github.com/github/copilot-cli/releases)）
- **改进**：管理员设置覆盖用户所选模型时显示明确提示；在线会话默认启用语义代码搜索
- **修复**：Linux 沙箱命令启动更可靠（修复间歇性 loopback 配置失败）；修复 MCP 资源详情页返回操作

### v1.0.99-1（[Release](https://github.com/github/copilot-cli/releases)）
- **新增**：`--trust-folder` 参数，支持 `-p` 或管道 stdin 启动的一次性 prompt 会话；支持通过 GitHub 安装链接安装已验证的 Skills 和插件（`copilot plugin install "ghapp://air/install?..."`）
- **改进**：`/login` 支持 Microsoft Entra 缓存账户选择

---

## 三、社区热点 Issues（Top 10）

1. **#13 [已关闭] CLI 输入应支持 vi/vim 模式** — 👍 76 | 💬 14
   老牌高票需求，为模态编辑用户提供键盘高效操作。该 Issue 自 2025-09 提出后持续发酵，今日关闭意味着功能已落地或已有替代方案，Vim 用户群体反响热烈。
   [链接](https://github.com/github/copilot-cli/issues/13)

2. **#1857 [开放] 允许取消/移除排队中的消息** — 💬 12
   Agent 忙碌或 `/compact` 期间通过 `Ctrl+Q` 入队的消息无法撤销，排队机制缺乏控制权，是交互体验的核心痛点。
   [链接](https://github.com/github/copilot-cli/issues/1857)

3. **#5139 [待分类] Claude 及 Gemini Argon 模型报 HTTP 400 “request body is not valid JSON”** — 💬 1
   Claude Sonnet/Opus 5.5 大面积报错而其他模型正常，疑似平台侧请求编码问题，同公司多人复现，影响面广，值得关注官方响应。
   [链接](https://github.com/github/copilot-cli/issues/5139)

4. **#5151 [待分类] 回归：Sol 系列模型工具定义膨胀至 ~260K tokens 后直接被拒** — 今日新增
   `gpt-5.6-sol` / `gpt-6.1-sol` 默认上下文档位在首个 prompt 前即失败，工具定义从 15K 暴涨 17 倍，疑似 10-14 前后的回归，严重阻断使用。
   [链接](https://github.com/github/copilot-cli/issues/5151)

5. **#5105 [开放] macOS 沙箱阻断 Gradle daemon 本地连接** — 💬 5
   已放行本地网络但 Gradle 客户端仍无法连接 daemon，Java 开发者在沙箱下的典型工作流阻断问题。
   [链接](https://github.com/github/copilot-cli/issues/5105)

6. **#3100 [开放] HTTP MCP Bearer Token 认证应回退到 headers 而非强制 OAuth** — 👍 10
   配置了 `Authorization` header 的 MCP 服务器被强制走 OAuth 发现并失败，企业内部 MCP 部署的常见诉求。
   [链接](https://github.com/github/copilot-cli/issues/3100)

7. **#5157 [待分类] Guest 账户无法为 MCP 指定特定 Entra 租户认证** — 今日新增
   `/mcp auth` 只能使用 home tenant，多租户（尤其 Microsoft Fabric 相关 MCP）场景下的企业级痛点。
   [链接](https://github.com/github/copilot-cli/issues/5157)

8. **#5149 [开放] Claude Opus 5.5 32K maxOutputTokens 导致空回复并被计费** — 今日新增
   `--reasoning-effort max` 下隐藏推理耗尽全部 32K 输出配额，返回空 turn 且 auto-continue 逐次计费，涉及**计费公平性**，敏感度高。
   [链接](https://github.com/github/copilot-cli/issues/5149)

9. **#4150 [开放] permissions-config.json 含空格的命令标识符仍需审批** — 👍 3
   `make fix` 等复合命令白名单失效，权限配置粒度问题影响自动化流水线体验。
   [链接](https://github.com/github/copilot-cli/issues/4150)

10. **#5154 [待分类] 命令 hooks 首次 spawn 后全部卡满 timeoutSec（僵尸进程）** — 今日新增
    Hook 实际 20ms 退出却挂起至 5s 超时，每个工具调用最多累加 15s 延迟，长会话性能显著劣化。
    [链接](https://github.com/github/copilot-cli/issues/5154)

---

## 四、重要 PR 进展

过去 24 小时内无 PR 更新（共 0 条），今日省略。功能与修复动态请参考版本发布部分。

---

## 五、功能需求趋势

| 方向 | 代表 Issue | 趋势解读 |
|---|---|---|
| **多模型稳定性** | #5139、#5149、#5151、#5161 | Claude 5.5 / Gemini Argon / Sol 系列集中报错，模型层兼容性与配额策略是当前最热话题 |
| **MCP 企业化** | #3100、#5155、#5157、#4991 | 多租户认证、Registry-only 策略、Bearer 回退——MCP 正从个人玩转向企业落地，配套治理需求爆发 |
| **输入/交互效率** | #13、#1857、#5159、#5153 | Vim 模式、消息取消、历史记录上限、可定制 Tabs，重度终端用户追求操作可控性 |
| **沙箱与权限** | #5105、#5102、#5052、#4150 | 沙箱对构建工具链（Gradle/git）的兼容性与权限配置粒度持续被诟病 |
| **自动化/无头模式** | #5150、#5149、#4322 | ACP、非交互模式的输出协议与计费正确性，反映 CLI 嵌入 CI/CD 的使用增长 |
| **本地化** | #4407（zh-CN UI）| 中文界面需求获 👍 10，国际化呼声上升 |

---

## 六、开发者关注点

1. **模型可用性是最大焦虑**：Claude/Gemini/Sol 多模型同日报错（#5139、#5151），叠加空回复计费问题（#5149），开发者对“选错模型 = 白花钱”的容忍度正在下降，期望官方提供模型健康状态与配额透明化。
2. **沙箱隔离 vs 开发工作流的冲突**：Gradle daemon（#5105）、git 凭据（#5102）、bubblewrap（#5052）等案例表明，沙箱默认策略对构建工具链的隐式假设过多，需要更细粒度的网络/凭据白名单机制。
3. **企业级 MCP 部署存在门槛**：租户指定认证（#5157）、Registry-only 策略误伤（#5155）、headers 认证回退（#3100）集中出现，提示 MCP 治理功能尚不成熟。
4. **长会话性能退化**：Hook 僵尸进程（#5154）、工具定义 token 膨胀（#5151）说明长时间运行的交互式会话仍是质量薄弱点。
5. **值得肯定的是**：`--trust-folder`、`ghapp://` 插件安装链接、语义搜索默认开启，显示团队在脚本化集成和插件生态上持续投入；Vim 模式 Issue 关闭（#13）也回应了长期社区诉求。

---
*本报告基于过去 24 小时 GitHub 数据自动整理，仅供参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-16

## 一、今日速览

OpenCode 1.x 分支连续发布 v1.19.1 / v1.19.2 两个补丁版本，明确 1.x 与 2.x 更新通道分离，并正式下线会话分享功能。社区侧，免费层（free tier）与权限配置（deny shell/read）冲突导致请求失败的问题持续发酵，多个相关 Issue 活跃讨论中。桌面端今天出现一批高质量 PR，包括 Windows 更新秒级完成、多语言文档等贡献。

---

## 二、版本发布

### v1.19.2
- 更新检查仅使用 npm `opencode-ai` 的 latest 版本，**1.x 用户不会再被推送 2.x 构建**；升级到 2.x 需通过 `/update` 中的 2.0 offer 显式选择。

### v1.19.1
- **正式下线会话分享功能**：现有分享链接与分享命令不再可用，也不支持从分享 URL 导入会话。

> 点评：两条更新都围绕 V1→V2 过渡期的用户隔离，官方明显在降低误升级风险。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 关注理由 |
|---|-------|---------|
| 1 | [#50627](https://github.com/anomalyco/opencode/issues/50627) 自定义 agent 上 `deny shell *` 导致免费层全部报错 "can only be used from within OpenCode" | 免费层+权限组合的高频踩坑，与 #51241、#55653 同源，13 条评论持续讨论 |
| 2 | [#55607](https://github.com/anomalyco/opencode/issues/55607) LongCat 2.5 Preview Free 端点 50%+ 请求失败 | 免费模型服务端容量问题，用户情绪强烈，10 条评论 |
| 3 | [#54786](https://github.com/anomalyco/opencode/issues/54786) 无效的 opencode.json 被静默忽略 | 已复现。对新用户配置体验伤害大，对应修复 PR #54804 进行中 |
| 4 | [#52761](https://github.com/anomalyco/opencode/issues/52761) V2 summary compaction 几乎不命中 prompt cache | 直接影响长会话 token 成本，是 #43249 关闭后的追踪报告 |
| 5 | [#55584](https://github.com/anomalyco/opencode/issues/55584) deepseek-v4.1-flash 推理重复循环 + `reasoning_text` 400 | 与 #54117（DeepSeek Flash 恒 400）共同指向该模型接入问题 |
| 6 | [#51241](https://github.com/anomalyco/opencode/issues/51241) deny `shell`/`read` 权限后免费模型全部失败 | 免费层权限误判系列核心 Issue |
| 7 | [#55920](https://github.com/anomalyco/opencode/issues/55920) Desktop 2.0.30 内置浏览器关闭标签页后登录态丢失 | 桌面端新 bug，影响浏览器类工作流 |
| 8 | [#55918](https://github.com/anomalyco/opencode/issues/55918) Windows CLI 因 WSL2 镜像网络端口范围导致启动失败 | 中文社区贡献的深度复现报告，Windows 环境独有 |
| 9 | [#55914](https://github.com/anomalyco/opencode/issues/55914) Web UI 新建会话按钮在空状态下无响应；快捷键硬编码 Ctrl+T 与浏览器冲突 | 已复现，Web UI 可用性 |
| 10 | [#51661](https://github.com/anomalyco/opencode/issues/51661) assistant content 为 null 时 tool call 校验失败（V2 独有） | 自定义 provider 用户的阻断性问题 |

老 Issue 动态：经典的剪贴板 bug [#4283](https://github.com/anomalyco/opencode/issues/4283)（148 评论 / 133 👍）今日再获更新；Moonshot OAuth 登录需求 [#37630](https://github.com/anomalyco/opencode/issues/37630) 已关闭。

---

## 四、重要 PR 进展（Top 10）

| # | PR | 内容 |
|---|-----|------|
| 1 | [#55933](https://github.com/anomalyco/opencode/pull/55933) | **Windows 桌面更新从 12-30s 降至约 1.4s**：后台预解包，重启仅做目录重命名 |
| 2 | [#54804](https://github.com/anomalyco/opencode/pull/54804) | 拒绝加载的配置文件显式报错而非静默忽略（修 #54786） |
| 3 | [#55915](https://github.com/anomalyco/opencode/pull/55915) | 修复 `{env:VAR}` 含引号/反斜杠（如 Windows 路径）导致 JSON 解析失败——V1 起 4 个重复 Issue 未修的老 bug |
| 4 | [#55100](https://github.com/anomalyco/opencode/pull/55100) | 暴露模型 reasoning capability，修复桌面端模型选择器误报 "No reasoning" |
| 5 | [#54430](https://github.com/anomalyco/opencode/pull/54430) | agent 级独立 `effort` 设置，推理力度与模型解耦 |
| 6 | [#55448](https://github.com/anomalyco/opencode/pull/55448) | 文档站支持 18 种语言，翻译全部 62 个页面 |
| 7 | [#55919](https://github.com/anomalyco/opencode/pull/55919) | Beta 桌面发布 CI 从 24-34 分钟大幅提速 |
| 8 | [#55894](https://github.com/anomalyco/opencode/pull/55894) | 新会话尊重 agent 配置的 `model`（修 #55727） |
| 9 | [#55868](https://github.com/anomalyco/opencode/pull/55868) | HTTP/LAN 场景下 `crypto.randomUUID` 不可用时的回退方案 |
| 10 | [#55917](https://github.com/anomalyco/opencode/pull/55917) | CLI 启动失败输出可读的错误信息，替代堆栈追踪 |

其他：越南语本地化三连 PR（#55922/#55923/#55925）、npm upgrade 安装脚本修复 [#51554](https://github.com/anomalyco/opencode/pull/51554)、session import ID 冲突返回 409 [#54353](https://github.com/anomalyco/opencode/pull/54353)。

---

## 五、功能需求趋势

1. **免费层稳定性与可用性**：LongCat、DeepSeek Flash 等免费模型端点故障、权限误判是本周最强声量。
2. **Windows 体验**：安装目录可选（#55931）、WSL2 端口冲突、Winget 包归属（#5121）、COPR 仓库等分发/安装诉求集中。
3. **桌面端浏览器能力**：登录态持久化、Web UI 会话管理等多点报 bug，Desktop 正成为主战场。
4. **配置健壮性**：配置静默失败、env 转义、可读错误信息——社区对“出错要能看懂”的诉求强烈。
5. **国际化**：越南语等多语言支持由社区驱动快速补齐。

## 六、开发者关注点

- **免费层 + 权限 deny 的系统性误判**：三个独立 Issue（#50627/#51241/#55653）指向同一根因，是当前最高优先级的用户痛点。
- **成本与缓存效率**：compaction 不命中 prompt cache（#52761）和历史上的 DeepSeek 多计费问题（#32911），说明 token 成本透明度是长期关切。
- **CI/发布效率**：官方主动优化 beta 发布流水线（24-34 分钟被视为不可接受），反映发布节奏在加快。
- **Headless/自动化可靠性**：`opencode run` 在瞬时错误后误报 exit 1（#50062）影响脚本化使用。

---
*数据截至 2026-10-16 · 来源：github.com/anomalyco/opencode*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-10-16

## 一、今日速览

Qwen Code 今日发布 **v0.25.2 正式版**（CLI、Desktop、TypeScript SDK 同步更新），核心为 Managed Agent 架构的持续加固，包括 lead 邮箱基于 Session 消息的实现及 connector/broker 健壮性修复。社区方面，Managed Agent 双路径架构提案（#12380）讨论热度持续领先（70 条评论），同时暴露出多个值得关注的稳定性问题：上下文窗口被大工具输出撑爆（#14331）、Linux 僵尸进程累积（#14288）、凭证轮换导致数据不可读（#13202）。

---

## 二、版本发布

### v0.25.2（正式版）
- 📦 同步发布：CLI v0.25.2、Desktop v0.25.2、TypeScript SDK v0.1.20
- ✨ **feat(managed-agent)**: H4e-b2 阶段 —— lead 的邮箱改为基于 Session 消息实现（[PR #13892](https://github.com/QwenLM/qwen-code/pull/13892)）
- 🔧 **fix(managed-agent)**: connector 和 broker 健壮性修复，来自 #12692 R2 评审（[PR #13330](https://github.com/QwenLM/qwen-code/pull/13330)）
- ✅ 无已知 Breaking Changes

### Nightly
- v0.25.2-nightly.20261015：修复 team_plan_approval 进入 journal-only interrupted-turn 结算（[PR #13847](https://github.com/QwenLM/qwen-code/pull/13847)）

---

## 三、社区热点 Issues

1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380) · Managed Agent 双路径架构与分阶段交付提案**（70 评论）
   社区讨论最热烈的议题，定义了保留 TS agent loop、模型推理与工具环境配置解耦、Session 持久化所有权等核心架构方向。是理解项目 roadmap 的必读文档。

2. **[#13078](https://github.com/QwenLM/qwen-code/issues/13078) · 每日依赖 CVE 审计失败**（22 评论）
   持续多日的安全审计告警，可能涉及新的高危漏洞或 npm audit 端点不可用，需官方尽快确认。

3. **[#14331](https://github.com/QwenLM/qwen-code/issues/14331) · 大工具输出撑爆上下文导致硬失败**（4 评论）
   接近上下文上限时，大工具结果导致整轮对话报废且无法优雅降级。直接影响生产可用性，属 P2 优先级。

4. **[#14341](https://github.com/QwenLM/qwen-code/issues/14341) · 发布流水线自审批错误**（3 评论）
   `finalize-release.yml` 中第二个 bot 无法审批自己的 PR，已影响 v0.25.1 发布，阻塞发布自动化。

5. **[#13202](https://github.com/QwenLM/qwen-code/issues/13202) · 凭证密钥轮换使旧数据全部孤立**（3 评论）
   Java runtime-broker 的 AES-GCM 解密只认当前 keyId，轮换密钥后所有旧记录不可读——安全问题演变为可用性事故。

6. **[#14288](https://github.com/QwenLM/qwen-code/issues/14288) · Linux 僵尸进程长期累积**（4 评论）
   重度多会话用户（日均 10-20 并行会话）观察到 48 天前的 defunct 子进程，长期挂起场景下的资源泄漏。

7. **[#14278](https://github.com/QwenLM/qwen-code/issues/14278) · `/branch` 被隐形后台请求阻塞**（4 评论，已关闭）
   auto-compact 等后台请求不可见，导致用户误判会话空闲。反映后台任务可观测性不足的普遍痛点。

8. **[#14325](https://github.com/QwenLM/qwen-code/issues/14325) · `/compress` 后误报“请求被中断”**（3 评论）
   压缩成功却触发会话恢复横幅，v0.25.1 Desktop/Web Shell 上的会话状态机一致性问题。

9. **[#14234](https://github.com/QwenLM/qwen-code/issues/14234) · #14021 遗留评审发现：后台派发结算**（7 评论）
   @yiliang114 提交的延迟评审项，涉及 live turn 中从未启动的后台派发结算，并发路径改动需独立 PR 处理。

10. **[#14314](https://github.com/QwenLM/qwen-code/issues/14314) · Grep 工具误拒合法 ripgrep 内联标志**（3 评论）
    参数校验用 JS RegExp 解析 Rust regex 语法，`(?i)hello` 等合法模式被拒。典型的引擎不匹配 bug，社区反馈迅速。

---

## 四、重要 PR 进展

1. **[#14340](https://github.com/QwenLM/qwen-code/pull/14340) · 常驻 Kubernetes Workspace 文件会话**
   首个常驻 K8s 文件运行时：固定 Pod + CSI PVC，支持单未完成 Session 和单活跃工具上下文。Managed Agent 基础设施的关键落子。

2. **[#14318](https://github.com/QwenLM/qwen-code/pull/14318) · SSH Tool Runtime 支持**
   管理员可配置受信 Linux/macOS 远程机器作为工具运行时，用户可注册远程目录为 Workspace。

3. **[#14265](https://github.com/QwenLM/qwen-code/pull/14265) · 只读快照子 Agent（#13753 I3）**
   父 Agent 可启动隔离快照子 Agent，读取冻结的工作树副本，只能读不能写——多 Agent 协作的隔离原语。

4. **[#14316](https://github.com/QwenLM/qwen-code/pull/14316) · Managed 会话集成进 Web Shell 主工作流**
   Managed Agent 进入 WebShell 首页与侧边栏，与本地会话独立导航，复用现有 composer 和工具审批卡片。

5. **[#13902](https://github.com/QwenLM/qwen-code/pull/13902) · Agent 身份与 Agent Team 投影到 ACP/daemon 协议**
   Subagent 与 Agent Team 两列协作身份上协议线，每个子 Agent 帧携带 `_meta.agent` 元数据。

6. **[#13219](https://github.com/QwenLM/qwen-code/pull/13219) · 为重试循环加上终态（已合并）**
   全面修复异步重试循环无终态、投影永久卡死的问题，对应 Issue #13182。

7. **[#13652](https://github.com/QwenLM/qwen-code/pull/13652) · 工具结果大小全链路核算**
   从生产到注入全程追踪 raw/processed/final 三级大小估算，直接回应 #14331 的上下文预算问题。

8. **[#13737](https://github.com/QwenLM/qwen-code/pull/13737) · Rewind 通过源身份解析历史 turn**
   会话回退以源身份关联消息与边界，防止恢复的旧密钥授权文件还原——安全与正确性双重加固。

9. **[#14281](https://github.com/QwenLM/qwen-code/pull/14281) · 外部记忆导入任务（Codex 起步）**
   CLI/HTTP 双通道的外部记忆导入服务，支持确定性预览、分节选择和持久化后台整合。

10. **[#14296](https://github.com/QwenLM/qwen-code/pull/14296) · 修正 member-message 超时提示（已合并）**
    超时提示不再误导用户重发消息，避免消息重复——修复 #14063。

---

## 五、功能需求趋势

| 方向 | 信号强度 | 代表 Issue/PR |
|---|---|---|
| **Managed Agent / 多 Agent 架构** | ⭐⭐⭐⭐⭐ | #12380 提案 + 一大批 K8s/SSH/快照/邮箱 PR，是当前绝对主线 |
| **Web Shell / Desktop 体验打磨** | ⭐⭐⭐⭐ | #14137（移动端 composer）、#14324（加载短语配置）、#14312（大粘贴输入阻塞） |
| **上下文与 Token 管理** | ⭐⭐⭐⭐ | #14331（上下文撑爆）、#13652（大小核算） |
| **SDK 集成质量（Python/Java/TS）** | ⭐⭐⭐ | #14310（Python SDK 丢消息）、#13202（Java broker） |
| **外部生态接入** | ⭐⭐⭐ | QQ 机器人文件/语音（#14343）、Codex 记忆导入（#14281） |
| **ACP 协议标准化** | ⭐⭐ | #13902、#13852（ask_user_question 兼容标准 ACP 客户端） |

---

## 六、开发者关注点

1. **稳定性长尾问题**：CI 失败 issue 频繁（#14322、#14005 等），E2E 与 SDK Java 测试在 main 分支反复红灯，发布流水线也存在自审批 bug（#14341）——工程基础设施需一次系统性收敛。

2. **重度多会话用户是重要反馈来源**：10-20 并行会话用户持续暴露僵尸进程、隐形后台阻塞、会话恢复误报等长时运行问题（#14288、#14278、#14325）。

3. **优雅降级普遍缺失**：上下文溢出硬失败、Python SDK 消息丢失、web 终端输入死锁，均属“错误路径体验差于预期”类别，是社区近期 bug 报告的共同模式。

4. **安全与运维**：CVE 审计连续失败（#13078）与凭证轮换设计缺陷（#13202）提示托管化路线下安全运维需提前补课。

---
*数据来源：GitHub QwenLM/qwen-code · 由 AI 技术分析师生成*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 — 2026-10-16

## 1. 今日速览

0.10.2 候选版本 PR #6968 持续推进，聚焦 endpoint 级目录/定价与 Windows 修复。社区方面，Windows 平台 bug 反馈密集（/undo 回滚不完整、长时运行滚动卡顿、快照损坏），同时 0.10.1 出现 ACP 沙箱配置回归。贡献门槛（contribution-gate）类 PR 保持活跃，多起社区修复当日即被合入。

## 2. 版本发布

过去 24 小时无新 Release。0.10.2 候选内容见 PR #6968。

## 3. 社区热点 Issues

1. **#6992 — 0.10.1 ACP 回归**：`sandbox_mode/ask` 配置被忽略，Paseo ACP 会话被迫沙箱化并需审批。这是 #6310 已修复问题的回归，今日新报，优先级高。[链接](https://github.com/codewhale-hq/Codewhale/issues/6992)
2. **#6978 — Turn 快照失败（0.10.0）**：自 10 月 12 日起 `git commit-tree` 报 "not a valid object"，且旧用户 turn 被重复投递，影响 99 MB 长会话，Windows 用户数据安全风险。[链接](https://github.com/codewhale-hq/Codewhale/issues/6978)
3. **#6970 — `/undo` 严重 bug**：文件已回滚但对话内容未撤销，多次重试后问题依旧。[链接](https://github.com/codewhale-hq/Codewhale/issues/6970)
4. **#6652 — 长时间运行后 TUI 滚动卡顿（果冻效应）**：运行 3-5 小时后可复现，Windows 性能问题，12 条讨论持续活跃。[链接](https://github.com/codewhale-hq/Codewhale/issues/6652)
5. **#6981 — 上下文压缩失败**：报 "Chat API response missing choices"，新建会话也受影响，可靠性问题。[链接](https://github.com/codewhale-hq/Codewhale/issues/6981)
6. **#6980（已关闭）— Android/Termux 受限文件操作全部 EACCES**：`open_confined` 以 `O_RDONLY` 打开 `/` 被 SELinux 拒绝，修复 PR #6983 已快速合入，效率值得称赞。[链接](https://github.com/codewhale-hq/Codewhale/issues/6980)
7. **#6988（已关闭）— OHOS 交叉构建失败**：aws-lc-sys 在 Windows 上默认用 VS 生成器导致失败，修复 PR #6989 同日跟进合入。[链接](https://github.com/codewhale-hq/Codewhale/issues/6988)
8. **#6991 — 引入 fastctx 降低 token 消耗**：建议借鉴 yc-duan/fastctx 大幅减少上下文开销，与当前 token 成本痛点契合。[链接](https://github.com/codewhale-hq/Codewhale/issues/6991)
9. **#6990 — 推理型输出触发 limit 时自动续跑**：长时运行的 agent 因 output-limit 空转需人工 "continue"，多 agent 协作场景体验痛点。[链接](https://github.com/codewhale-hq/Codewhale/issues/6990)
10. **#5316 — EPIC-005 TUI Crate 拆分（追踪）**：FEAT-028 已随 PR #6973 于 10-15 合入 main，重构持续推进，33 条评论。[链接](https://github.com/codewhale-hq/Codewhale/issues/5316)

另：#6972（DeepSeek 密钥在非活跃 provider 下读取异常）已关闭；#6986/#6987 为俄语用户报告的 0.10.0 Windows 缺陷（粘贴即发送、shell 工具绑定失效）。

## 4. 重要 PR 进展

1. **#6968 [OPEN] — 0.10.2 候选**：endpoint 级模型目录/分层定价/发布校验，修复 Windows 命令审批、Claude 登录态、限流诊断等。[链接](https://github.com/codewhale-hq/Codewhale/pull/6968)
2. **#6973 [CLOSED] — FEAT-028 配置组 Shapes 重构**：移除 config 命令组的 App/TUI 具体依赖，行为保持不变，已合入 main。[链接](https://github.com/codewhale-hq/Codewhale/pull/6973)
3. **#6983 [CLOSED] — Android 受限 I/O 修复**：Linux 上用 `O_PATH` 锚点替代 `O_RDONLY` 打开 `/`，解决 #6980。[链接](https://github.com/codewhale-hq/Codewhale/pull/6983)
4. **#6989 [CLOSED] — OHOS 构建修复**：`ohos-env.ps1` 导出 `CMAKE_GENERATOR=Ninja`，并修复 cli sha256 辅助 E0433。[链接](https://github.com/codewhale-hq/Codewhale/pull/6989)
5. **#6965 [CLOSED] — 0.10.2 切片**：fail-closed 分层定价、build-lock 绕过修复、Windows owner 恢复。[链接](https://github.com/codewhale-hq/Codewhale/pull/6965)
6. **#6393 [OPEN] — 源码导航回显与受保护 fork 前缀继承**：保留贡献者原始 commit 的集成式 PR，持续跟进 main。[链接](https://github.com/codewhale-hq/Codewhale/pull/6393)
7. **#6985 [CLOSED] — 新增 Standard Compute provider**：通过兼容主机描述符接入 `api.stdcmpt.com`。[链接](https://github.com/codewhale-hq/Codewhale/pull/6985)
8. **#6984 [CLOSED] — provider 列表状态列对齐**：首次运行选择界面 UI 细节修复。[链接](https://github.com/codewhale-hq/Codewhale/pull/6984)
9. **#6979 [CLOSED] — 修复 6 个 TUI 测试依赖开发者终端环境**：tmux/screen/Tilix 下重绘率覆盖导致误报，提升 CI 可靠性。[链接](https://github.com/codewhale-hq/Codewhale/pull/6979)
10. **#6807 [CLOSED] — 宠物功能与共享终端渲染器对账**：创始人请求的 pet 功能 parity 收尾。[链接](https://github.com/codewhale-hq/Codewhale/pull/6807)

## 5. 功能需求趋势

- **Token/上下文效率**：压缩可靠性（#6981）、fastctx 方案（#6991）、自动续跑（#6990）——上下文开销是当前最强呼声。
- **Windows 平台稳定性**：滚动卡顿、/undo、快照损坏、命令审批等，Windows 是 bug 报告主力平台。
- **多 Provider 生态**：Standard Compute 接入（#6985）、DeepSeek 凭据管理（#6972），接入方持续扩展。
- **跨平台移植**：Android/Termux、OpenHarmony 支持均有社区贡献落地。
- **MCP 可观测性**：#6866 提出 MCP server 失败/恢复时应通知模型。
- **架构治理**：EPIC-005 crate 拆分持续推进，代码解耦是长期主线。

## 6. 开发者关注点

- **0.10.1 回归风险**：ACP 沙箱配置回归（#6992）表明发布验证流程仍需加强，0.10.2 候选 PR 中已纳入 release verification。
- **长会话可靠性**：大体积会话（99 MB）快照损坏且数据难保，涉及用户数据安全。
- **多 agent 协作体验**：output-limit 空转需人工干预，协调 agent 无法感知子 agent 空闲。
- **测试环境健壮性**：测试隐式依赖开发者终端环境的问题（#6979）提示 CI 与本地环境差异是高频摩擦点。
- **国际化社区**：中文、俄语用户反馈活跃，本地化报障渠道值得关注。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-10-16

## 📌 今日速览

Pi 正式发布 **v1.3.0**，新增 `/share` 上传目的地可选配置（`sessionShareDestination` 支持 `auto`/`gist`/`radius`）。今日 Issues 活跃度极高（167 条更新），Windows 终端兼容性与 Anthropic OAuth 连接问题仍是讨论焦点；PR 侧一天内合并了多个性能与模型兼容性修复，包括流式 JSON 解析 O(n²) 卡顿的 P0 级修复。

---

## 🚀 版本发布

### v1.3.0
- **新功能**：`/share` 上传目的地可选——通过 `sessionShareDestination` 设置项在 `auto`、`gist`、`radius` 之间切换，详见 [Sessions and context 文档](https://github.com/earendil-works/pi/blob/v1.3.0/packages/coding-agent/docs/settings.md#sessions-and-context)。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#7547](https://github.com/earendil-works/pi/issues/7547) · Windows 支持方式大调查（86 评论）**
   核心开发者发起调研：Pi 在 Windows 上运行方式太多（原生、WSL、ConPTY 等），希望确定精力应投向修 bug、完善文档还是开箱体验。持续两个多月的高热帖，是 Windows 用户必读。

2. **[#9549](https://github.com/earendil-works/pi/issues/9549) · 全屏模式下大 transcript 每帧重渲染（15 评论）**
   大会话在 resize 时整个 transcript 被重发，单核打满。报告者用本地 agent 协作测量并用 `pi -ne` 验证复现，是全屏渲染性能的关键问题。

3. **[#10480](https://github.com/earendil-works/pi/issues/10480) · 直连 OpenAI 无法识别手动用量重置（19 评论）**
   ChatGPT Pro 用户使用 banked reset 后 Pi 仍报订阅上限，需 logout/login 切到 openai-codex 才能恢复，计费/凭据状态同步存在缺陷。

4. **[#10063](https://github.com/earendil-works/pi/issues/10063) · Anthropic OAuth 对 Opus 5/5.5 返回 `Invalid effort level`（9 评论）**
   直接 Anthropic 订阅请求在多档 thinking 下均返回 HTTP 400，Sonnet 4.6 正常，疑似新模型的 effort 参数映射未更新。

5. **[#10019](https://github.com/earendil-works/pi/issues/10019) · Anthropic 请求在整点/半点 UTC 挂起（9 评论）**
   请求返回 200 + pings 但无 `message_start`，spinner 无限转。用户对比 Claude Code 无此问题，疑似 Anthropic 服务端负载时段的容错缺失。

6. **[#10074](https://github.com/earendil-works/pi/issues/10074) · 工具调用中非 ASCII 参数被静默破坏（8 评论）**
   韩文文本的 `edit` 调用频繁失败甚至损坏文件：`\uXXXX` 转义丢失 `u` 后变成控制字符被静默接受。对 CJK 用户影响严重。

7. **[#10840](https://github.com/earendil-works/pi/issues/10840) · GPT-6.1 Sol 上下文仍卡在 272K（已关闭）**
   Codex 官方已提升至 500K，但 Pi 安装的模型目录未更新导致 compaction 预算过旧——暴露了模型目录与上游不同步的系统性问题（相关防御见 PR #11007）。

8. **[#10645](https://github.com/earendil-works/pi/issues/10645) · Bun 编译版中 `resizeImage` 返回 null（8 评论）**
   自 0.87.x 起独立二进制中所有图片附件被静默丢弃，标记 inprogress 修复中。RPC/嵌入式场景的重要回归。

9. **[#10154](https://github.com/earendil-works/pi/issues/10154) · 中文 `**粗体**` 渲染失败回归（5 评论）**
   闭合 `**` 位于 CJK 标点与汉字之间时按字面渲染，是 #3353 的回归，直接影响中文用户体验（相关 PR #10934）。

10. **[#10330](https://github.com/earendil-works/pi/issues/10330) · CLI/JSON 模式下自动压缩不生效（7 评论）**
    `pi --mode json` 下 auto-compaction 从未触发，而 TUI 正常。长时自动化任务（CI、agent 编排）场景的可靠性隐患。

---

## 🔧 重要 PR 进展（Top 10）

1. **[#11008](https://github.com/earendil-works/pi/pull/11008) · 流式 partial-json 重解析节流（已合并）**
   修复 Anthropic 流路径上每个 `input_json_delta` 全量重解析累积 JSON 导致的 O(n²) 事件循环卡死——生产环境观察到多 MB 参数卡死数分钟，P0 级修复。

2. **[#11005](https://github.com/earendil-works/pi/pull/11005) · Gemini 4 thinking 参数紧急修复（已合并）**
   P0 补丁：未映射的 Gemini 4 模型避免发送 `thinkingBudget` 和 MINIMAL，解除自定义 `models.json` 的 HTTP 400 报错，赶在下个发布前合入。

3. **[#10964](https://github.com/earendil-works/pi/pull/10964) · 基于模型元数据的上下文耗尽恢复（已合并）**
   上下文耗尽的回合现在通过一次压缩 + 续跑自动恢复，而不是以空响应结束。

4. **[#11000](https://github.com/earendil-works/pi/pull/11000) · 切换模型时丢弃旧模型 thinking 块（已合并）**
   此前旧模型的推理块被当作正文发给新模型，可能诱导新模型在可见回答中输出推理文本。

5. **[#11009](https://github.com/earendil-works/pi/pull/11009) · 小上下文模型压缩阈值改为 90%（已合并）**
   修复 ≤400K 上下文模型过早触发压缩、丢失有效工作状态的问题。

6. **[#11007](https://github.com/earendil-works/pi/pull/11007) · 发布前校验模型目录兼容性（已合并）**
   防止 pi.dev 下发的模型目录需要旧版本没有的代码（即 #10840 那类事故），把 catalog 与 release 的兼容检查纳入发布流程。

7. **[#9569](https://github.com/earendil-works/pi/pull/9569) · 容错 JSON 双重编码的工具参数（仍开放）**
   模型把 object/array 参数多包一层 JSON 字符串时可自动恢复，减少工具调用失败重试。

8. **[#10934](https://github.com/earendil-works/pi/pull/10934) · 裸 URL 在 CJK 标点处截断修复（仍开放）**
   解决中文语境下 URL 与标点粘连的渲染问题，附回归测试，与 #10154 同属 CJK 体验修复线。

9. **[#10910](https://github.com/earendil-works/pi/pull/10910) · NVIDIA 默认模型切换为 Nemotron 3.5 Super VL（仍开放）**
   与 NVIDIA 协作更新默认模型及 E2E 测试，配合 #10521 的 `$ref` schema 内联修复。

10. **[#10999](https://github.com/earendil-works/pi/pull/10999) · 修复多个扩展自定义 UI 叠层互相干扰（已合并）**
    `ctx.ui.custom()` 关闭叠层时的作用域 bug，两个扩展同时打开即可复现，扩展生态的基础设施修复。

---

## 📈 功能需求趋势

- **多模型适配持续高压**：Gemini 4、GPT-6.1、Opus 5.5、Fable 5、Nemotron 3.5 等新模型参数/上下文窗口的适配问题密集出现，模型目录（catalog）的时效性成为系统性痛点（#10840、#10898、#10063）。
- **Windows 终端兼容性**：mintty/ConPTY/Zellij/Windows Terminal 各有问题（#10256、#9656、#10862），官方已发起聚焦调研（#7547）。
- **CJK/国际化渲染**：中文粗体、URL 截断、韩文工具参数损坏等问题集中（#10154、#10933、#10074），中文用户社区活跃。
- **自动化与 RPC 模式**：JSON/CLI 模式下压缩不生效（#10330）、session_start 双发（#10470）、stdin 管道挂起（#10415）——嵌入式/编排场景需求上升。
- **扩展生态与企业能力**：MDM 系统级配置（#10895）、OAuth ID token 持久化（#10300）、namespaced SQLite 存储（#10937）反映企业部署诉求。

## ⚠️ 开发者关注点（痛点总结）

1. **静默失败是最大公敌**：图片被静默丢弃（#10645）、损坏参数被静默接受（#10074）、压缩静默不触发（#10330）——需要更多可观测性与显式报错。
2. **Compaction 可靠性**：多条 issue 围绕压缩（溢出 #9602、策略阻止 #10045、过早触发 #11009、恢复 #10964），长会话管理是核心竞争力所在。
3. **凭据与计费同步**：OpenAI 用量重置不识别（#10480）、Anthropic OAuth 挂起（#10019）等连接层问题直接影响付费用户体验。
4. **渲染性能**：大 transcript 全帧重绘（#9549）与流式解析 O(n²)（#11008）表明终端渲染与流处理仍是性能瓶颈区。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# 📰 oh-my-pi 社区动态日报 · 2026-10-16

## 1. 今日速览

今日 oh-my-pi 发布 v18.11.1，核心变更为 pi-agent-core 新增 `Tokenizer.countLatestTurn` 能力，保障 Anthropic Messages 回放的字节级一致性。社区方面，Issues 活跃度高（过去 24 小时更新 107 条，PR 更新 324 条），热点集中在 **OpenRouter/Codex 等 Provider 兼容性问题**、**18.11.0 编译版二进制崩溃（P1）**，以及多条性能优化与 macOS 防睡眠修复 PR 的推进。

---

## 2. 版本发布

### [v18.11.1](https://github.com/can1357/oh-my-pi/releases)

**@oh-my-pi/pi-agent-core**
- **Added**: `Tokenizer.countLatestTurn` — 将消息计数为 transcript 最新一轮 assistant 回合，且保证 Anthropic Messages 回放时逐字节一致（[#15791](https://github.com/can1357/oh-my-pi/pull/15791) by @will-bogusz）

---

## 3. 社区热点 Issues

1. **[#15799](https://github.com/can1357/oh-my-pi/issues/15799) [P1] 18.11.0 编译二进制进入会话即崩溃 "Settings not initialized"**（已关闭）
   macOS 官方编译版从 17.3.5 升级到 18.11.0 后，TUI 中 `--resume` 或会话选择器进入任意会话均崩溃，根因是 settings 模块跨 chunk 重复打包。影响面大、优先级最高，已修复关闭。

2. **[#14158](https://github.com/can1357/oh-my-pi/issues/14158) Codex steering 触发 "native turn lane" WebSocket 错误**（19 条评论，持续发酵）
   用户在 turn 进行中发送 steering 消息时稳定触发 `unsupported_native_inflight_message` 错误，涉及 Codex provider 的实验性 native turn 通道设计，是本期评论最多的 Issue。

3. **[#13486](https://github.com/can1357/oh-my-pi/issues/13486) OpenRouter 读图持续 422**（15 条评论）
   通过工具读取图片在服务端稳定返回 422，但粘贴图片无问题，指向 provider 图片上传路径的构造差异，P2 长期未解。

4. **[#15229](https://github.com/can1357/oh-my-pi/issues/15229) [P1] SDK 子代理 async-result 串投到无关顶级会话**（已关闭）
   单进程多会话场景下，子代理的 IRC 后续结果被持久化到无关 session 并触发其恢复执行——严重的隔离性缺陷，且已有确定性复现，已修复。

5. **[#15841](https://github.com/can1357/oh-my-pi/issues/15841) auth-gateway 守护进程 3 天泄漏至 ~7 GB 堆内存**（已关闭）
   长驻 daemon 场景下 bun/JSC 堆无界增长，对部署侧用户影响大，已修复。

6. **[#15314](https://github.com/can1357/oh-my-pi/issues/15314) 智谱 glm-5.3-flashx 缺失于内置模型目录**（已关闭）
   FlashX SKU 此前被 #9835 当作“非推理模型”排除，但实际该 SKU 强制开启 thinking，目录逻辑与产品事实不符，已修复。

7. **[#15839](https://github.com/can1357/oh-my-pi/issues/15839) 模型输出的非法工具名留在历史，导致 Bedrock 后续请求全部被拒**（新开）
   一个非法 `tool_use` 块污染会话历史后，Bedrock 拒绝所有后续请求——历史清洗策略需要审视。

8. **[#10232](https://github.com/can1357/oh-my-pi/issues/10232) 交替屏 transcript 模式 + 固定 composer**（15 👍，长期热门 FR）
   滚动查看历史时保持输入框可见，是社区点赞最高的 UX 需求之一，持续活跃近两个月。

9. **[#15757](https://github.com/can1357/oh-my-pi/issues/15757) Windows 粘贴大段文本极慢**（已关闭）
   13K 字符粘贴需 7 秒才出现附件对话框，Windows 体验痛点，已修复。

10. **[#6540](https://github.com/can1357/oh-my-pi/issues/6540) unexpected-stop 分类器误判 "Next steps" 结尾为意外停止**（仍开放）
    误分类导致干净答案被强行续写，影响 agent 提示工程质量，是 prompting 层面的长期讨论点。

---

## 4. 重要 PR 进展

1. **[#15941](https://github.com/can1357/oh-my-pi/pull/15941) [P0] 修复 `power.sleepPrevention` 在 main 上完全失效**
   新默认 `start` 绕过了类方法导致全平台不再持有 sleep assertion，属回归性 P0 修复，与 #15762 构成 macOS 防睡眠系列。

2. **[#15762](https://github.com/can1357/oh-my-pi/pull/15762) [P1] macOS 防睡眠跟随 agent turn 而非固定 5 分钟**
   computer 工具的 display hold 改为与 turn 生命周期绑定，长 turn 中途不再锁屏，turn 结束后也不再无谓保持亮屏。

3. **[#15336](https://github.com/can1357/oh-my-pi/pull/15336) [P1] 统一 thinking-toggle 路径，修复 `/settings` 隐藏 thinking 块时静默删除回答**
   两个 P0 交互 bug 收敛到单一 display-resync helper，附带在 main 上会失败的回归测试。

4. **[#15940](https://github.com/can1357/oh-my-pi/pull/15940) [P1] auth-gateway chat-completions SSE 每 15s 发送 keepalive 注释**
   上游静默期间连接不再被掐断，对齐 Anthropic encoder 的 ping 行为，直接改善长思考模型的网关稳定性。

5. **[#15944](https://github.com/can1357/oh-my-pi/pull/15944) [P1] advisor transcript 持久化内存上限**
   长会话中 advisor 保存的完整对话历史改用 append journal，消除内存累积，与 #15841 的网关泄漏修复呼应。

6. **[#15222](https://github.com/can1357/oh-my-pi/pull/15222) 会话 prune 只重写变更行（memoize）**
   原实现每次 prune 全量重写会话文件，改为增量后消除 O(全会话字节) 的 IO，是大 session 性能的关键优化。

7. **[#15327](https://github.com/can1357/oh-my-pi/pull/15327) [P1] sixel 图形在 eval/PTY/replay 全链路保持完整**
   修复 sixel payload 被 `sanitizeText` 剥离或在 DCS 序列中途截断的问题，14 个回归测试覆盖。

8. **[#15853](https://github.com/can1357/oh-my-pi/pull/15853) [P1] SVG 图形适配调用方行高限制**
   `SvgFigure` 支持 `maxRows` 透传，解决弹窗/覆盖层等小面板中图形超出可视区域的问题。

9. **[#15337](https://github.com/can1357/oh-my-pi/pull/15337) 启动探测（host/wslpath/tmux）改异步有界**
   消除首帧绘制前同步 spawn 阻塞（原单次最高 500ms），直接改善冷启动体验。

10. **[#6548](https://github.com/can1357/oh-my-pi/pull/6548) [P1] 子代理可选 `minimal-task` 系统提示词预设**
    长期开放的重要特性 PR，允许子代理抑制继承的项目上下文以缩减 prompt，与 token 成本优化方向一致。

---

## 5. 功能需求趋势

- **Provider 兼容与错误韧性**（最强主线）：Codex native turn steering（#14158）、OpenRouter 图片 422（#13486）与 `/handoff` 400（#15910）、Bedrock 非法工具名（#15839）、MiniMax 429 不触发 key 轮换（#15053）——社区大量使用多 provider 路由，容错与重试策略是核心诉求。
- **长会话/守护进程稳定性与性能**：内存泄漏（#15841、PR #15944）、prune 全量重写（PR #15222）、流式热路径优化（PR #15207、#15225）——嵌入式 SDK 与 daemon 用户快速增长带来的规模化压力。
- **TUI/UX 打磨**：固定 composer 的交替屏模式（#10232，15👍）、粘贴慢（#15757）、CJK 全角字符漂移（#6153）。
- **TUI 图形能力**：sixel 完整性、SVG 行高适配——终端富媒体渲染成为差异化方向。
- **模型目录时效性**：GLM-5.3-FlashX 缺失（#15314）、Cursor 隐藏可用模型（#15527）、xAI 搜索模型可配置（#5993）。
- **平台广度**：Termux/Android ARM64 官方构建（#5975）、Windows 网络冻结（#12276）。

---

## 6. 开发者关注点

- **SDK 嵌入式多会话安全**：#15229 暴露的 async-result 跨会话泄漏表明，将 omp 作为库嵌入自研 host 的用户在快速增长，会话隔离是高优先级诉求。
- **内存与资源生命周期**：网关泄漏、advisor 历史累积、启动同步探测——多个 P1 修复集中于“长时间运行不退化”。
- **错误信息可诊断性**：如 OpenRouter "400 Provider returned error" 无法触发 `tool_choice` 重试（#15910）、403 策略错误不指明原因（#10906），社区希望错误分类更细粒度。
- **Provider 路由透明度**：session header、用量计量（Copilot AI credits 误报为 premium requests #13849）等对接细节影响多 provider 用户的账单与观测。
- **系统提示/分类器行为可预期性**：unexpected-stop 误判（#6540）、minimal-task 预设（PR #6548）反映重度用户对 agent 行为控制的精细化需求。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

# DeepSeek Harness 社区动态日报
**日期：2026-10-16 | 数据来源：github.com/deepseek-ai/deepseek-harness**

---

## 一、今日速览

今日最重要的动态是 **dsh-v0.2.1-alpha.4** 版本发布，带来两项新功能与多项稳定性修复。核心亮点包括：自定义模型 API 的推理等级现可通过 UI 直接配置，以及支持从自定义插件索引源发现和安装插件。过去 24 小时内无新 Issue 或 PR 更新，社区互动较为平静。

---

## 二、版本发布

### dsh-v0.2.1-alpha.4
🔗 https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.4

**新增功能：**
- **推理等级 UI 配置**（@LegGasai）：自定义模型 API 支持在 UI 中配置各模型的推理等级，无需手动修改配置文件，显著降低自定义模型的使用门槛。
- **自定义插件索引源**（@turtle1999）：用户可从自定义插件索引源中发现并安装插件，为插件生态的去中心化分发打下基础。

**问题修复：**
- **输入异常修复**（@LegGasai）：修复命令与参数交界处的输入异常问题，支持整体选中/删除，并在撤销或刷新页面后恢复正常状态。
- **Office 文件交付改进**（@yudshj）：避免在回复中引用已删除的预览图，减少 PDF 导出后不必要的工具查找和额外检查，提升文档交付质量。
- 另有一处开发者工具相关的修复（Release Notes 数据截断，详见原文链接）。

---

## 三、社区热点 Issues

过去 24 小时内无 Issue 更新，本节今日省略。

---

## 四、重要 PR 进展

过去 24 小时内无 PR 更新，本节今日省略。

---

## 五、功能需求趋势

由于今日无活跃 Issue 数据，基于本次 Release 内容可观察到近期演进方向：

1. **易用性优先**：推理等级从配置文件迁移到 UI，反映团队持续降低配置复杂度的方向。
2. **插件生态扩展**：自定义插件索引源功能表明社区对插件分发灵活性有明确诉求。
3. **文档/办公场景打磨**：Office/PDF 交付链路的连续修复显示办公文件处理是高频使用场景。
4. **输入交互稳定性**：命令输入类修复体现了对终端/命令行交互体验的持续投入。

---

## 六、开发者关注点

- **自定义模型集成体验**：开发者使用自有模型 API 时，此前需要手动编辑配置文件，本次更新后该痛点已部分缓解；后续可关注是否进一步支持模型级别的细粒度参数配置。
- **插件分发渠道**：自定义索引源功能满足了企业内网/私有化场景下的插件分发需求，私有部署用户值得关注。
- **文档导出可靠性**：Office/PDF 交付中的预览图引用与工具查找问题曾是影响输出质量的因素，建议相关用户及时升级。

---

> 📌 数据说明：本期 Issue 与 PR 板块过去 24 小时无更新，日报以 Release 信息为主。建议关注 alpha.4 版本的稳定性反馈，若后续开放 Issue 讨论，将恢复完整板块内容。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*