# AI CLI 工具社区动态日报 2026-09-23

> 生成时间: 2026-09-23 03:52 UTC | 覆盖工具: 11 个

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
**2026-09-23 · 基于 11 款主流工具社区动态**

---

## 1. 生态全景

AI CLI 工具已从单一“终端对话助手”演进为**多 Agent 编排 + 多端 runtime + 生态平台**的竞争格局。今日三大模型厂商同日上新（Claude Opus 5.5、GPT-6 Sol/Luna、Gemini 3.8 Flash），各 CLI 工具在 24 小时内完成适配，模型发布与工具链适配的耦合速度成为竞争新维度。同时，“静默失败”（silent failure）已成为跨工具的头号社区痛点——从会话静默卡死到模型静默替换，可靠性正在取代功能成为差异化焦点。AGENTS.md 开放标准（Claude Code mod 化）、MCP 协议现代化、BYOK/自定义 provider 等趋势显示生态正走向开放互联。

---

## 2. 各工具活跃度对比

| 工具 | Issue 活跃度（24h 更新） | PR 活跃度 | 今日 Release | 今日核心事件 |
|---|---|---|---|---|
| **Claude Code** | 高（10+ 热点，含 71 评论老 issue） | 低（仅 1 条 PR 更新） | v2.1.280 | Opus 5.5 上线即现安全误报；Agent Teams 两回归 |
| **OpenAI Codex** | 高（30 条热榜中 10 条精选） | 很高（10+ 合入） | rust-v0.156.1 hotfix + 5 个 alpha | GPT-6 Sol/Luna 灰度 404；Windows 顽疾持续 |
| **Gemini CLI** | 高（10 热点，多个 P1） | 很高（10 PR，密集 P1 修复） | v0.62.0 nightly | Gemini 3.8 Flash 接入；@path 粘贴安全修复 |
| **Copilot CLI** | 高（10 热点 + 2 新报） | 极低（仅 1 条文档 PR） | 3 个版本（v1.0.88/88-2/89-0） | Opus 5.5 适配；压缩 OOM 问题簇发酵 |
| **Qwen Code** | 高（10+ 热点） | 高（10 PR，daemon/Web Shell 密集建设） | v0.24.4 + v0.24.5-preview.0 | Managed Agent 架构提案；Chrome 扩展上架 |
| **Pi** | 很高（82 条更新） | 很高（25 条更新，mitsuhiko 高产） | v0.87.1 | 一日接入 Opus 5.5 + GPT-6 系列；Grok 4.7 默认 |
| **oh-my-pi** | 很高（201 条更新） | 极高（314 条更新） | v18.2.10 | Antigravity 虚假 429 信任危机持续 |
| **OpenCode** | 中高（10 热点） | 高（10+ PR） | 无 | 子代理权限卡死严重 bug；V2 迁移阵痛 |
| **Kimi Code CLI** | 低（2 条更新） | 中（8 条，多为 Dependabot） | 1.52.0 | Python 版正式归档，迁移 TS 版 |
| **Codewhale (DeepSeek TUI)** | 中（10 热点，工程治理类） | 高（12 PR，10 已合） | v0.10.0 | 品牌更名；Chromewhale Chrome 客户端 |
| **DeepSeek Harness** | 零 | 零 | 2 个 alpha | 纯发版日，会话管理大升级 |

**观察**：oh-my-pi、Pi、Codex、Gemini CLI 呈“issue+PR 双高”健康形态；Claude Code 与 Copilot CLI 呈“issue 高、PR 低”，社区输入主要走 issue 通道，官方主导开发。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **新模型适配时效** | 几乎全部 | Opus 5.5 误报、GPT-6 Sol 404 灰度、OMP 需 CC≥2.1.280——客户端目录与服务端权限不同步是共性摩擦 |
| **静默失败治理** | Claude Code、Copilot CLI、OpenCode、Qwen Code、Gemini CLI | 任务静默停止/静默重跑、压缩失败无提示重试（Copilot #4663）、子代理权限请求丢失卡死、工具输出静默为空 |
| **长会话稳定性与内存** | Copilot CLI、Gemini CLI、Pi、oh-my-pi、Kimi | 压缩 OOM（Copilot #4780）、内存无限增长（Gemini PR #29451）、大上下文性能退化（OMP #12261） |
| **多 Agent 编排可靠性** | Claude Code、OpenCode、Qwen Code、Codewhale、DeepSeek Harness | Agent Teams 回归、workflow 压缩后重跑、子代理误报成功、fleet/agent 概念收敛 |
| **Token 成本可视化与控制** | oh-my-pi、Qwen Code、Codex、Codewhale | prompt cache 放置（OMP p1）、session_tokens 状态栏、Batch API、token 记账面板、配额消耗不可预测（Codex #42987） |
| **权限/沙箱模型打磨** | Gemini CLI、Qwen Code、Codewhale、OpenCode | @path 粘贴泄露、沙箱过严破坏命令（Codewhale #4955）、agent frontmatter permissions 不生效 |
| **TUI 交互细节** | Claude Code、Codex、Pi、Qwen Code、Kimi | 鼠标/滚轮、全屏渲染性能、软键盘、CJK IME 适配 |
| **模型路由透明度** | Codex、OpenCode、Gemini CLI、Pi | 运行时静默换模型（Codex #46632、OpenCode #50769）、模型 ID 被 rollout 改写 |

---

## 4. 差异化定位分析

| 工具 | 定位 | 技术路线 | 目标用户 |
|---|---|---|---|
| **Claude Code** | 官方旗舰，功能最全（Agent Teams、auto-memory、Desktop 联动） | 闭源 npm，mod 化开放（AGENTS.md） | 重度专业开发者、多 agent 工作流 |
| **Codex** | 官方全家桶，CLI+桌面+语音多模态 | Rust 重写，企业网络策略强化 | 付费订阅用户（Windows 体验仍是短板） |
| **Gemini CLI** | 官方开源，安全默认收紧最快 | TS 开源，nightly 高频迭代 | 开源社区、成本敏感型开发者 |
| **Copilot CLI** | GitHub 生态整合，企业托管配置 | 闭源，企业 marketplace 分发 | GitHub 企业用户、VS Code 生态 |
| **Pi / oh-my-pi** | 开源可扩展 agent 框架/发行版 | TS 开源，Extension API + 多 provider | 嵌入式集成开发者、自定义 provider 用户 |
| **OpenCode** | 开源多 provider 网关型 CLI | V1/V2 双轨迁移中 | 付费托管 + 自托管混合用户 |
| **Qwen Code** | 服务化/多端分发先锋 | daemon + Web Shell + Chrome 扩展 + Desktop | 移动端、浏览器场景、企业集中分发 |
| **Codewhale** | 多客户端 runtime（Rust + GPUI） | Rust 单体 → 拆分重构中 | Fleet 多代理、中文社区 |
| **Kimi CLI / DeepSeek Harness** | 模型厂商官方工具，成熟度追赶期 | Python→TS 迁移 / 早期 alpha | 各自模型用户 |

---

## 5. 社区热度与成熟度

- **第一梯队（高热度+高成熟度）**：Claude Code、Codex、Gemini CLI——issue 体量大、官方响应快，但各自背负长期顽疾（Termux 5 个月未修、Windows 沙箱积压）
- **高速迭代期**：Pi（v0.87 一日三模型接入）、oh-my-pi（500+ 条 24h 活动量全场最高，但 0.86/18.2.x 回归频发，用户被迫回滚）、Qwen Code（daemon 服务化建设密集）
- **转型/重构期**：Kimi（技术栈迁移落地）、Codewhale（更名+单体拆分+双 MCP 栈合并）、OpenCode（V2 迁移阵痛，付费账户资产丢失是商业风险信号）
- **平稳期**：DeepSeek Harness（纯发版、零社区互动，早期产品）

---

## 6. 值得关注的趋势信号

1. **“可观测的失败”成为下一轮竞争焦点**：四款以上工具社区明确要求“宁可吵闹地失败，不要安静地出错”——排障体验（token 记账、错误归因、session 状态暴露）是当前投入产出比最高的改进方向。

2. **模型发布日 = 全生态适配压力测试日**：客户端目录先行、服务端灰度滞后的错配（Codex 404、OMP 400）提示：**依赖单一新模型的团队应保留旧模型 fallback 至少一周**。

3. **压缩是事故高发区**：Copilot OOM/无限计费重试、Codex 转录破坏、Claude Workflow 压缩后重跑、Pi Fable 拒绝压缩——四个工具的压缩实现均有严重 bug，**长会话用户应外部备份关键 transcript**。

4. **安全默认值正在全线收紧**：Gemini 禁用 @path 粘贴展开、Qwen 收窄 bubblewrap 沙箱、Copilot fail-closed 托管配置——升级后行为变化需纳入团队变更管理。

5. **终端正在成为多端 runtime 的一角**：Qwen Web Shell/Chrome 扩展、Codewhale Chromewhale、Claude Desktop 联动、Codex 桌面端——CLI 工具竞争正升维为“浏览器+桌面+移动+IDE 的全端 agent 分发”竞争。

6. **开放标准与协议兼容是护城河也是入场券**：AGENTS.md mod 化（Claude Code）、ACP 协议升级、OpenCode 兼容头部——跨工具指令/协议兼容性正在成为企业选型的硬性指标。

**给技术决策者的一句话**：当前没有一款工具在可靠性上完全达标；建议按“主用一款官方 CLI + 备用一款开源多 provider 工具（Pi/OMP/Qwen）”组合配置，并为长会话建立外部备份与成本监控。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据来源：github.com/anthropics/skills | 截止 2026-09-23**

> ⚠️ 数据说明：本期抓取的 PR 评论数与点赞数字段缺失（undefined），PR 排名依据为“进入热门前 20 的抓取排序 + 更新活跃度”综合判断，非严格评论数排序。Issues 数据完整，需求趋势部分可信度较高。

---

## 一、热门 Skills 排行（PR）

| # | Skill / PR | 功能 | 状态 | 讨论热点 |
|---|---|---|---|---|
| 1 | **skill-creator 修复系列**（[#1298](https://github.com/anthropics/skills/pull/1298)、[#1769](https://github.com/anthropics/skills/pull/1769)、[#539](https://github.com/anthropics/skills/pull/539)） | 修复触发词评测误报、Windows 兼容、recall=0% 等核心缺陷 | OPEN（持续更新至 9 月） | skill-creator 是官方元技能，其评测框架问题直接决定所有社区 Skill 质量，是本周期最活跃的修复线 |
| 2 | **mcp-builder 修复** [#1742](https://github.com/anthropics/skills/pull/1742) | 适配 mcp>=2.0 的 `streamable_http_client` 重命名与自定义 header | OPEN | 修复 #1668，联动 Issue [#1390](https://github.com/anthropics/skills/issues/1390)（评测脚本 0/N 评分），MCP 构建链路是高频痛点 |
| 3 | **md2video-audio** [#1703](https://github.com/anthropics/skills/pull/1703) | Markdown → Marp 幻灯片 → 带拟真人配音的 MP4 视频，零成本 | OPEN | 内容创作者方向最受关注的新 Skill 之一 |
| 4 | **blast-radius** [#1776](https://github.com/anthropics/skills/pull/1776) | 批量/破坏性写操作前的“爆炸半径”核查清单 | OPEN | 补齐“查询正确 ≠ 批量操作安全”的缺口，AI 安全治理方向 |
| 5 | **proofcore-contract-auditor** [#1771](https://github.com/anthropics/skills/pull/1771) | Solidity/Rust 合约静态分析 + TON 链上审计存证 | OPEN | Web3 x Skills 的新兴方向；需注意与 Issue #492 的命名空间信任问题交叉 |
| 6 | **AWT (AI Watch Tester)** [#822](https://github.com/anthropics/skills/pull/822) | AI 视觉 + 浏览器控制的零代码 E2E 测试 | OPEN（3 月提交，9 月仍活跃） | 测试自动化长尾需求 |
| 7 | **pyxel** [#525](https://github.com/anthropics/skills/pull/525) | Python 复古游戏开发、无头运行与帧检查 | OPEN | 3 月至今持续更新，生命力强 |
| 8 | **docx/office 修复簇**（[#541](https://github.com/anthropics/skills/pull/541)、[#1790](https://github.com/anthropics/skills/pull/1790)、[#1765](https://github.com/anthropics/skills/pull/1765)、[#1734](https://github.com/anthropics/skills/pull/1734)） | OOXML ID 冲突、rels 缺失、UTF-8 diff、孤儿批注检测 | OPEN | 文档处理是最成熟但补丁最密集的领域 |

---

## 二、社区需求趋势（Issues 提炼）

1. **信任与安全治理**（最热）：[#492](https://github.com/anthropics/skills/issues/492)（43 评论）——社区 Skill 伪装 `anthropic/` 命名空间造成信任边界滥用；[#412](https://github.com/anthropics/skills/issues/412) 提议 agent-governance 治理技能；[#1175](https://github.com/anthropics/skills/issues/1175) 关注企业文档（SharePoint）场景的权限控制。
2. **组织级分发与共享**：[#228](https://github.com/anthropics/skills/issues/228)（16 评论）呼吁组织内 Skill 库/共享链接，替代手动传文件；[#189](https://github.com/anthropics/skills/issues/189) 反馈插件重复安装浪费上下文。
3. **评测与触发可靠性**：[#556](https://github.com/anthropics/skills/issues/556)、[#1390](https://github.com/anthropics/skills/issues/1390)——评测脚本无法触发 Skill、评分全 0，直接影响 Skill 开发者体验。
4. **上下文效率**：[#1487](https://github.com/anthropics/skills/issues/1487)——claude-api Skill 单次注入 ~156k token 耗尽上下文；[#1329](https://github.com/anthropics/skills/issues/1329) 提议 compact-memory 紧凑记忆表示。
5. **质量流程**：[#1385](https://github.com/anthropics/skills/issues/1385) 提议“校准→对抗审查→交付验证”三道质量门；[#202](https://github.com/anthropics/skills/issues/202) 要求 skill-creator 文案向可执行指令转型。
6. **互操作性**：[#16](https://github.com/anthropics/skills/issues/16)（Skill 暴露为 MCP）、[#29](https://github.com/anthropics/skills/issues/29)（Bedrock 支持）。

---

## 三、高潜力待合并 Skills（Open 且近期活跃）

- **[#1742 mcp-builder 修复](https://github.com/anthropics/skills/pull/1742)** — 9/19 刚更新，修复 blocking issue #1668，合并概率最高
- **[#1769 skill-creator recall=0% 修复](https://github.com/anthropics/skills/pull/1769)** — 修复长期 Issue #1721，属核心链路
- **[#1790 docx rels 缺失修复](https://github.com/anthropics/skills/pull/1790)** — 小而准的缺陷修复
- **[#1703 md2video-audio](https://github.com/anthropics/skills/pull/1703)** — 9/15 更新，功能完整度高
- **[#723 testing-patterns](https://github.com/anthropics/skills/pull/723)** — 9/21 仍在维护，覆盖全栈测试方法论
- **[#822 AWT E2E 测试](https://github.com/anthropics/skills/pull/822)** — 半年持续迭代，测试自动化刚需

---

## 四、生态洞察（一句话总结）

> **社区最集中的诉求已从“提交新 Skill”转向“可信分发、可靠触发评测与上下文效率”三大基础设施问题**——安全命名空间（#492）、组织共享（#228）与评测失效（#556/#1390）构成当前生态落地的最大瓶颈。

---

# Claude Code 社区动态日报 · 2026-09-23

## 1. 今日速览

Claude Code 发布 **v2.1.280**，重磅引入 **Claude Opus 5.5**（1M 上下文，$4/$20 per Mtok，缓存读取仅 $0.20/Mtok）并设为默认 Opus 模型，同时增强了全屏模式下的鼠标交互。但新模型上线首日即出现**安全防护误报**（reasoning_extraction 误触发）等多起反馈；此外 Agent Teams（in-process teammate）在新版中暴露两个回归问题值得关注。长期未解的 Termux/Android 兼容性破坏问题（#50270，71 条评论）仍在持续发酵。

---

## 2. 版本发布

### [v2.1.280](https://github.com/anthropics/claude-code/releases)
- **新增 Claude Opus 5.5**（`claude-opus-5-5`），现为默认 Opus 模型：1M 上下文，$4/$20 per Mtok，缓存读取 $0.20/Mtok
- **全屏模式鼠标支持扩展**：滚轮可滚动 `/skills` 列表，`/plugin` 中的 skill 状态选项支持点击

---

## 3. 社区热点 Issues

| # | Issue | 关注度 | 为什么重要 |
|---|-------|--------|-----------|
| 1 | [#50270](https://github.com/anthropics/claude-code/issues/50270) v2.1.113+ 在 Termux/Android 完全损坏 | 💬 71 · 👍 62 | 老牌回归问题：原生二进制依赖 glibc，Android 无 JS 回退，移动端用户被彻底阻断，5 个月未修复 |
| 2 | [#82056](https://github.com/anthropics/claude-code/issues/82056) 会话无法感知 auto-memory 索引加载状态 | 💬 52 | 长记忆可靠性核心诉求：无法区分加载完整/截断/未加载，直接影响记忆驱动工作流的可信度 |
| 3 | [#12953](https://github.com/anthropics/claude-code/issues/12953) 鼠标滚轮滚动输入历史而非聊天历史（Windows TUI） | 💬 25 · 👍 21 | 高赞同老 bug，与今日版本“加强鼠标支持”形成呼应，社区期待被顺带修复 |
| 4 | [#96141](https://github.com/anthropics/claude-code/issues/96141) Opus 5.5 安全防护误报非网络安全工作 | 👍 4 | 新模型上线首日即现误报，"hey whatsup" 都触发 AUP 拦截，影响日常使用 |
| 5 | [#96139](https://github.com/anthropics/claude-code/issues/96139) Opus 5.5 reasoning_extraction 误报 | 👍 1 | 与上条同源：orchestrator 让 subagent 引用系统提示词即触发误封，或影响 subagent 编排模式 |
| 6 | [#65796](https://github.com/anthropics/claude-code/issues/65796) 多 agent Workflow 自动压缩后从头重启，静默重跑已完成 agent | 💬 16 | 静默重复执行既浪费成本又可能产生副作用，是多 agent 可靠性的关键缺陷 |
| 7 | [#80773](https://github.com/anthropics/claude-code/issues/80773) `claude://resume` 重复导入已打开的 Desktop 会话 | 💬 11 | Desktop 与 CLI 会话打通的体验断点，缺少聚焦已有会话的 deep link |
| 8 | [#91495](https://github.com/anthropics/claude-code/issues/91495) 内置浏览器忽略站点权限设置 | 👍 11 | 权限模型与浏览器行为不一致，涉及 Desktop 安全边界 |
| 9 | [#96226](https://github.com/anthropics/claude-code/issues/96226) / [#96225](https://github.com/anthropics/claude-code/issues/96225) v2.1.280 Agent Teams 两个回归 | 新增 | teammate 批准 shutdown 后 lead 会话静默退出；SubagentHandback 误报“父 agent 已停止”——2.1.280 版本质量信号 |
| 10 | [#90533](https://github.com/anthropics/claude-code/issues/90533) 单个坏 fireAt 字段导致全部 35 个定时任务静默停止 55 小时 | — | 定时任务注册表“全有或全无”解析策略脆弱，且由自家 MCP 写入触发 |

---

## 4. 重要 PR 进展

过去 24 小时仅 1 条 PR 更新：

- **[#95409](https://github.com/anthropics/claude-code/pull/95409)（已关闭）`mods/agents-md`: AGENTS.md 项目指令 mod**
  由官方成员 @poteat 提交，将 `AGENTS.md` 支持以 mod 形式开源（含 manifest、hooks、tests、README），读取方式与引擎读取 `CLAUDE.md` 一致，由 `instructionFiles` 选项控制。这标志着 Claude Code 向 **AGENTS.md 开放标准**靠拢，提升跨工具（Codex/Cursor 等）指令文件兼容性。虽已关闭，但源码布局与 `sec-default`、`diff` 等官方 mod 一致，后续动态值得追踪。

*注：今日无其他 PR 更新，上述 Issue 区仍高度活跃，社区输入目前主要走 Issue 通道。*

---

## 5. 功能需求趋势

1. **新模型适配与误报治理**：Opus 5.5 发布即出现 reasoning_extraction / safeguard 误报，社区需要更透明的防护反馈与申诉机制
2. **多 Agent / Agent Teams 编排**：并发模型缺失、Workflow resume 回滚、teammate 生命周期管理（#87874、#65796、#96226）是当前最集中的需求方向
3. **记忆系统可观测性**：auto-memory 加载状态暴露（#82056），长会话场景刚需
4. **成本控制**：prompt-cache keepalive（#95728）、Remote 后台 send_later 静默消耗配额（#95305）
5. **Desktop / 移动端体验整合**：deep link 会话聚焦、Chat/Cowork 合并后的模式区分、Routines 在移动端的可恢复性
6. **跨平台兼容**：Termux/Android 无 JS 回退（#50270）持续未解

---

## 6. 开发者关注点

- **静默失败是最大痛点**：任务静默停止（#90533）、agent 静默重跑（#65796）、会话静默退出（#96226）、通知静默丢失（#75438）——开发者反复要求“可观测的失败”而非“安静的错误”
- **版本间语义漂移**：subagent 调度语义在无 changelog 说明下变更（#87874），2.1.280 相对 2.1.220 出现 teammate 回归，重度用户需要版本可预测性
- **锁与资源清理**：git worktree 锁残留死 PID（#93231）、worktree 沙箱误拒含 `eval` 字样的命令（#88312）
- **TUI 交互细节**：`!` 命令阻塞等待模型响应（#74029）、`/compact` 期间输入静默取消压缩（#76875）——多会话编排用户受影响最深
- **自动化可信度**：MCP 自写入的数据格式反而破坏自身加载（#90533），官方工具间契约一致性有待加强

**一句话总结**：Opus 5.5 落地是今日主角，但新模型误报与 Agent Teams 回归提醒团队——发布速度之外，静默失败与语义稳定性是社区最迫切的诉求。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-09-23

## 一、今日速览

今天最重磅的动态是 **GPT-6 Sol / GPT-6 Luna 正式加入模型目录**——官方紧急发布 hotfix `rust-v0.156.1` 并向多个版本分支回移植，但社区立即反馈部分账号遭遇 404 "model not found"，说明新模型服务端灰度仍在进行中。同时 Windows 平台问题持续发酵：沙箱初始化失败、桌面 App 无法跟进对话等 Issue 讨论热度居高不下。PR 方面，copyberry[bot] 高产合入十余项修复，网络策略统一化改造和 TUI 交互打磨是主线。

---

## 二、版本发布

### rust-v0.156.1（hotfix）
- 模型选择器新增 **GPT-6 Sol / GPT-6 Luna**，限流切换提示现推荐 GPT-6 Luna
- 来源 PR：[#47405](https://github.com/openai/codex/pull/47405)
- 完整变更：[rust-v0.156.0...rust-v0.156.1](https://github.com/openai/codex/compare/rust-v0.156.0...rust-v0.156.1)

### rust-v0.156.0
- 新增可选全屏 TUI（`/tui`）：支持转录搜索、鼠标选区、右键复制
- 语音对话默认启用，F8 快速开关，新增 `/voice settings` 选择器并内置音频

### 其他
- `rust-v0.157.0-alpha.5 ~ alpha.9` 五个预发布版本迭代频繁
- `rust-v0.155.0-alpha.16.3` 补丁发布

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 关注理由 |
|---|-------|---------|
| 1 | [#42987](https://github.com/openai/codex/issues/42987) GPT-6 Astra 两轮对话耗尽 Plus 5小时配额 | 27 评论 / 17 👍，配额消耗异常是付费用户最敏感的问题，持续 18 天仍开放 |
| 2 | [#47412](https://github.com/openai/codex/issues/47412) 新模型 gpt-6-sol 返回 404 | 当日新增，直接对应今天的 hotfix 发布，新模型访问权限灰度问题，时效性最强 |
| 3 | [#45626](https://github.com/openai/codex/issues/45626) Windows 桌面端完成首轮后无法发送后续消息 | 23 评论，CLI 不受影响，影响 Windows 桌面用户基本可用性 |
| 4 | [#14630](https://github.com/openai/codex/issues/14630) TUI 语音转写需求 | 60 👍 为本期最高，0.156.0 已默认启用语音，此 Issue 讨论转写质量，与今日发布直接相关 |
| 5 | [#44696](https://github.com/openai/codex/issues/44696) Windows 沙箱 helper 全面失败（helper_unknown_error） | 18 评论，exec_command 与文件读取全部被阻，Windows 沙箱是长期重灾区 |
| 6 | [#32492](https://github.com/openai/codex/issues/32492) Windows App 卡在 "Finish Windows setup"，UAC 弹窗不触发 | 17 评论，用户被完全挡在门外，7 月至今未解 |
| 7 | [#47418](https://github.com/openai/codex/issues/47418) 升级后无法创建 Agent 沙箱 | 当日新增，修复/重启均无效，与升级强相关的回归问题 |
| 8 | [#44363](https://github.com/openai/codex/issues/44363) 上下文压缩原地改写 rollout，永久破坏对话转录 | 数据破坏类 bug，Pro 用户报告，可信度影响大 |
| 9 | [#46632](https://github.com/openai/codex/issues/46632) 请求 gpt-6-astra 实际服务 gpt-5.6-luna（运行时模型替换）+ 47 次误报容量错误 | 涉及模型透明度与信任问题，与今日模型目录更新背景相关 |
| 10 | [#19821](https://github.com/openai/codex/issues/19821) WebSocket 连接失败需走完 5 次重试才回退 HTTP | 代理用户（尤其中国大陆）启动延迟显著，社区已有 `supports_websockets = false` workaround |

---

## 四、重要 PR 进展（Top 10）

1. [#47405](https://github.com/openai/codex/pull/47405) / [#47401](https://github.com/openai/codex/pull/47401) / [#47385](https://github.com/openai/codex/pull/47385) — GPT-6 Sol/Luna 加入模型目录系列 hotfix：提供从 gpt-5.5 / 5.6 系列的迁移路径，退役模型自动重定向
2. [#47407](https://github.com/openai/codex/pull/47407) — app-server 全链路强制应用网络策略，策略加载失败即阻断流量
3. [#47411](https://github.com/openai/codex/pull/47411) — 共享网络策略覆盖 TUI 和 `codex exec` 启动前的客户端创建
4. [#47410](https://github.com/openai/codex/pull/47410) — 远程控制/WebSocket 走认证 HTTP 工厂，区分策略拒绝与认证失败
5. [#47398](https://github.com/openai/codex/pull/47398) — 登录/启动请求支持系统代理回退（#46562 回移植），改善代理环境登录失败
6. [#47435](https://github.com/openai/codex/pull/47435) — 允许在 turn 进行中更新环境选择，模型设置与环境变更原子化生效
7. [#47422](https://github.com/openai/codex/pull/47422) / [#47424](https://github.com/openai/codex/pull/47424) — turn 结束时恢复未发送的问题草稿、清理过期异步提问通知，TUI 交互细节打磨
8. [#47423](https://github.com/openai/codex/pull/47423) — 草稿恢复不再破坏 Ctrl+R 历史搜索
9. [#47414](https://github.com/openai/codex/pull/47414) — 转录选区支持 Shift-click 扩展（配合 0.156.0 全屏 TUI 的鼠标交互）
10. [#47417](https://github.com/openai/codex/pull/47417) — SSH + Terminal.app 自动模式使用原生回滚缓冲，远程终端体验优化

---

## 五、功能需求趋势

- **新模型支持与迁移**：GPT-6 系列上线是当下焦点，模型可见性/权限灰度、运行时模型替换透明度呼声高
- **Windows 沙箱与桌面稳定性**：本日 30 条热榜中约 1/3 与 windows-os 相关，沙箱初始化、UAC、桌面渲染是三大顽疾
- **语音/多模态交互**：语音对话默认开启后，转写质量（#14630，60 👍）成为新的需求增长点
- **TUI 体验深化**：全屏 UI、转录搜索、键鼠交互的后续打磨需求持续涌现
- **网络与代理兼容**：系统代理回退、WebSocket 回退策略，对亚太区开发者尤为重要
- **会话数据完整性**：上下文压缩破坏转录、revert 后消息恢复等数据可靠性问题受关注

## 六、开发者关注点

1. **配额与限速感知不透明**：短对话耗尽 5 小时配额（#42987）、误报 "at capacity"（#46632），用户强烈要求配额消耗可预测、可查询
2. **Windows 一等公民地位待提升**：沙箱 helper、桌面窗口、AppX 容器问题长期积压，建议 Windows 用户暂以 CLI 为主要工作流
3. **新模型发布节奏与服务端一致性**：客户端目录已更新但服务端 404，灰度期间建议保留旧模型 fallback
4. **代理/受限网络环境**：中国大陆等地区用户仍需自定义 provider 关闭 WebSocket；#47398 的代理回退值得关注升级
5. **数据不可逆操作缺乏保护**：context compaction 原地改写 rollout（#44363）提示重度用户应外部备份关键会话

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-09-23

## 1. 今日速览

今日最重要的动态是 **Gemini 3.8 Flash 与 3.5 Flash Lite 正式进入 CLI**（PR #29443 已随 v0.62.0 nightly 发布），同时出现一个 P1 级安全修复 PR，**默认禁用粘贴文本中的 @path 展开**，防止意外的本地文件上传。此外，多个针对长会话内存增长、IDE 集成 UI 冻结、认证死循环的 P1 修复正在推进中。

## 2. 版本发布

**v0.62.0-nightly.20260923.g62364cb20**
- 核心变更：新增 **Gemini 3.8 Flash** 与 **Gemini 3.5 Flash Lite** 模型支持，作为 Flash / Flash Lite 层级的最新 GA 模型（PR #29443）
- [完整 Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260922.gd5b3e3acc...v0.62.0-nightly.20260923.g62364cb20)
- 注：向 v0.61.0-preview 和 v0.60.0 stable 的 cherry-pick 补丁 PR 已创建，其中 v0.60.0 分支存在冲突待手动解决（PR #29455 / #29456）

## 3. 社区热点 Issues

| # | Issue | 关注理由 |
|---|-------|---------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 达到 MAX_TURNS 后误报 GOAL success | P1：子代理被打断却报告成功，掩盖真实失败，直接影响 agent 可信度；13 条评论，等待复测 |
| 2 | [#26730](https://github.com/google-gemini/gemini-cli/issues/26730) 粘贴文本触发 @path 展开导致意外文件上传 | P1 安全问题：粘贴含 `@id_rsa` 类终端文本可能自动上传本地文件；对应修复 PR #29458 今日已提交，社区高度关注 |
| 3 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent 无限挂起 | P1：简单操作（如建文件夹）也会永久挂起，8 👍，用户体验影响大 |
| 4 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 零依赖 OS 沙箱 + 执行后意图路由 | 大型增强提案：利用 Gemini 3 原生 bash 能力，同时保证安全性，是 agent 执行架构方向性讨论 |
| 5 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST 感知的文件读取/搜索/代码库映射 | EPIC：探索 AST 工具能否减少 token 噪声、提升代码导航精度，与 #19561 "Tactful Extraction" 同属上下文治理方向 |
| 6 | [#29430](https://github.com/google-gemini/gemini-cli/issues/29430) 认证时 Access Blocked 错误 | P1、3 天内新报：用户无法完成 OAuth 认证，与 PR #29448 修复的认证循环问题相关 |
| 7 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 不主动使用 skills 和子代理 | 反映自主调度能力的核心痛点：相关 skill 存在但模型不主动调用 |
| 8 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory 确定性脱敏 + 日志收敛 | P2 安全：秘密信息先进入模型上下文才尝试脱敏，存在泄露风险 |
| 9 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 工具数 >128 时触发 400 错误 | 工具集膨胀场景下的实际阻塞问题，需更智能的工具作用域裁剪 |
| 10 | [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) get-shit-done output hook 导致崩溃 | P1：工作流收尾阶段崩溃，稳定性问题 |

## 4. 重要 PR 进展

| # | PR | 内容 |
|---|-----|------|
| 1 | [#29443](https://github.com/google-gemini/gemini-cli/pull/29443) ✅ 已合并 | 新增 Gemini 3.8 Flash / 3.5 Flash Lite 支持（今日 nightly 核心） |
| 2 | [#29458](https://github.com/google-gemini/gemini-cli/pull/29458) 🆕 | P1 安全：`escapePastedAtSymbols` 默认开启，阻止粘贴文本的 @path 展开 |
| 3 | [#29448](https://github.com/google-gemini/gemini-cli/pull/29448) | 修复 Windows/WSL/headless 环境下文件竞争导致的认证死循环，keyring 不可用时自动回退加密文件存储 |
| 4 | [#29452](https://github.com/google-gemini/gemini-cli/pull/29452) | 解耦工具确认与 IDE diff RPC，修复 IDE 集成终端中 Enter 无响应的 UI 冻结 |
| 5 | [#29451](https://github.com/google-gemini/gemini-cli/pull/29451) | 限制工具输出大小并优化内存生命周期，解决长时间 agent 循环的内存无限增长 |
| 6 | [#29457](https://github.com/google-gemini/gemini-cli/pull/29457) | P1：read-many-files 中 glob 匹配替换模糊子串匹配，修复二进制文件被误读导致的上下文膨胀 |
| 7 | [#29420](https://github.com/google-gemini/gemini-cli/pull/29420) | 保留用户显式指定的 `gemini-3-pro-preview` 模型 ID，不再被 3.1 rollout 静默改写 |
| 8 | [#29244](https://github.com/google-gemini/gemini-cli/pull/29244) ✅ 已合并 | P1：工具文件写入原子化 + 同路径写入串行化，消除并行编辑静默丢失 |
| 9 | [#29446](https://github.com/google-gemini/gemini-cli/pull/29446) | 区分 MCP 配置缺失与 JSON 损坏，防止被禁用的 MCP 服务器意外启用 |
| 10 | [#29449](https://github.com/google-gemini/gemini-cli/pull/29449) | 新增 pkgdiet 内置 skill：npm install 前自动检查包健康度、体积与弃用状态 |

## 5. 功能需求趋势

1. **Agent 可靠性与可观测性**：子代理挂起（#21409）、误报成功（#22323）、bugreport 缺子代理上下文（#21763）、轨迹共享（#22598）——社区要求 agent 行为更透明可信。
2. **上下文/token 治理**：AST 感知读取（#22745/#22746）、Tactful Extraction 外科手术式读取（#19561）、/compress 持久化（#21335）、工具输出上限（PR #29451）。
3. **安全加固**：@path 展开防护、Auto Memory 脱敏（#26525）、内部文档路径守卫（PR #29249）、破坏性操作拦截（#22672）。
4. **IDE / 跨平台集成**：IDE diff RPC 冻结修复、Windows 路径大小写（PR #29247）、WSL/headless 认证、Wayland 浏览器代理（#21983）。
5. **原生 bash 能力与沙箱**（#19873）：让模型发挥 POSIX 工具链原生优势，同时守住安全边界。

## 6. 开发者关注点

- **长会话稳定性**是当前最高频痛点：内存无限增长、agent 挂起、output hook 崩溃集中出现，多个 P1 修复本周密集落地。
- **安全默认值**正在收紧：粘贴文本 @path、MCP enablement、Auto Memory 日志均在向“默认安全”演进，建议关注升级后的行为变化。
- **模型固定（pinning）语义**：3.1 rollout 静默改写显式模型 ID 引发不满（PR #29420），依赖特定版本的开发者应留意。
- **认证链路**在 Windows/WSL/headless 环境仍有摩擦（#29430、PR #29448），是近期 Support 类反馈的主要来源。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-23** | 数据来源：github.com/github/copilot-cli

---

## 1️⃣ 今日速览

过去 24 小时 Copilot CLI 密集发布了 **v1.0.88、v1.0.88-2、v1.0.89-0** 三个版本，新增 claude-opus-5.5 模型支持、OSC 777 终端通知（Ghostty/WezTerm）等改进。Issue 区热点集中在**会话稳定性**上：压缩（compaction）OOM、会话卡死、认证令牌失效等多个高关注度问题持续发酵。今日新增了两个新报问题（#4946 HTTP 400 thinking 内容错误、#4866 Ctrl-D 误触发会话关闭）。

---

## 2️⃣ 版本发布

### v1.0.89-0
- **新增** claude-opus-5.5 模型支持
- **改进** 连接/重连时展示托管 Connector 授权进度，并提供可复制的授权 URL

### v1.0.88 / v1.0.88-2
- 新增可选 **OSC 777 终端通知**，直接支持 Ghostty 和 WezTerm 会话
- **修复**底部锚定对话框中的文本选择（含登录设备码场景）
- 托管设置刷新失败时保留 `/allow-all`，并记住缺失路径的精确会话审批

---

## 3️⃣ 社区热点 Issues（Top 10）

| # | 问题 | 关注理由 |
|---|------|---------|
| 1 | [#4438](https://github.com/github/copilot-cli/issues/4438) Skill 设置 `disable-model-invocation: true` 后完全不可达 | 👍9 / 7 评论。Skills 生态核心语义 bug：本意是“仅手动调用”，实际变成完全找不到 |
| 2 | [#4780](https://github.com/github/copilot-cli/issues/4780) 会话压缩 OOM，会话永久无法恢复 | 👍3。默认 ~4.3 GB 堆上限耗尽，`--resume` 也无法逃出崩溃循环 |
| 3 | [#4639](https://github.com/github/copilot-cli/issues/4639) event-storage 耗尽引发重试风暴 → GC/压缩循环 → Node OOM | 长时间运行会话的稳定性问题，与 #4780 同属内存压力类 |
| 4 | [#4755](https://github.com/github/copilot-cli/issues/4755) 队列消息在 turn 结束时落入导致会话永久卡死 | 非崩溃但完全失去响应，只能杀进程，影响多会话工作流 |
| 5 | [#4663](https://github.com/github/copilot-cli/issues/4663) 压缩失败后无退避地每 turn 重试 → 无限计费重试 | 直接涉及真金白银，且无用户可见错误提示 |
| 6 | [#4900](https://github.com/github/copilot-cli/issues/4900) 并发会话退出时覆盖 `config.json`，trustedFolders 丢失 | 多会话并行的开发者日常踩坑点 |
| 7 | [#4929](https://github.com/github/copilot-cli/issues/4929) 长驻进程认证令牌停止刷新，所有 prompt 失败 | 昨日新报，`/login` 无法恢复，只能重启 |
| 8 | [#4946](https://github.com/github/copilot-cli/issues/4946) 后台 shell 完成通知后触发 HTTP 400 `content[].thinking` | 今日新报，跨 turn 的通知注入破坏请求结构 |
| 9 | [#4556](https://github.com/github/copilot-cli/issues/4556) 服务端管理的 `extraKnownMarketplaces` 拉取成功但静默未注册 | 企业插件分发链路的静默失败，排查成本高 |
| 10 | [#4602](https://github.com/github/copilot-cli/issues/4602) managedSettings 在 serverFetchFailed 抖动时 fail-closed，连带剥离全部 MCP 服务器 | 作者梳理了多个 issue 的共同根因，值得维护者优先审阅 |

---

## 4️⃣ 重要 PR 进展

> ⚠️ 过去 24 小时仅 1 条 PR 更新：

- **[#4770](https://github.com/github/copilot-cli/pull/4770) Document the WebSocket responses opt-out**（@1fanwang）
  文档类 PR：当模型默认走 WebSocket responses 端点但网络不可用（或出现 `400 input item ID does not belong to this connection`）时，文档化现有的关闭/回退方案。对受限网络环境（企业内网、代理环境）用户有实际参考价值。

---

## 5️⃣ 功能需求趋势

从近期 Issues 中可提炼出以下方向：

1. **BYOK / 自定义模型端点**：#4003（自定义端点如 VS Code）、#4646（自定义模型压缩报 400）、#4840（DeepSeek BYOK 失效）——社区对私有/本地模型接入需求持续高涨
2. **会话稳定性与内存管理**：压缩 OOM、重试风暴、会话卡死是最集中的痛点簇（#4639、#4755、#4780、#4663）
3. **企业 / 托管配置**：managedSettings fail-closed（#4602）、服务端 marketplace 分发（#4556）、数据驻留租户下 cloud agent 故障（#4931）
4. **长驻会话可运维性**：令牌刷新失效（#4929）、并发会话配置覆盖（#4900）、事件存储耗尽（#4639）
5. **交互体验**：AutoPilot 需关键决策暂停确认（#3595）、编辑权限请求超时（#4486）、Ctrl-D 行为（#4866）

---

## 6️⃣ 开发者关注点

- 🔴 **压缩（compaction）机制是当前最大风险区**：OOM、无限重试、自定义模型不兼容三个问题叠加，长时间会话几乎必然受影响；建议重度用户关注 #4780 / #4663 的修复进展
- 🟠 **长驻 / 多会话工作流脆弱**：认证失效、配置互写、队列卡死均出现在“跑一整天、开多个会话”的典型开发者场景
- 🟡 **BYOK 用户处于半可用状态**：多个报告显示自定义模型在压缩、thinking tokens、工具序列化（`custom` vs `function`）等边缘路径上失败
- 🟢 **积极信号**：v1.0.89-0 快速跟进新模型（claude-opus-5.5），v1.0.88 的 OSC 777 通知和对话框文本选择修复回应用户日常体验反馈

---
*本报告基于过去 24 小时 GitHub 公开数据自动汇总，链接均为对应 Issue/PR 页面。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-09-23 | 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)**

---

## 📌 今日速览

今日最重要的动态是 **1.52.0 版本发布**：kimi-cli（Python）正式进入归档迁移阶段，包入口点将引导用户切换到新的 Kimi Code CLI（TypeScript 版本），标志着项目技术栈的重大转型。同时，社区贡献活跃，出现了多个针对 Web 端 IME 兼容性和 OpenCode Go 兼容性的修复 PR，Dependabot 也发起了批量依赖升级。

---

## 🚀 版本发布

### [1.52.0](https://github.com/MoonshotAI/kimi-cli/compare/1.51.0...1.52.0)

- **feat(cli): short-circuit entry points to a Kimi Code installer**（PR #2666 by @sailist）
  - Python 版 kimi-cli 已归档，此版本将包入口点改为迁移引导，`uv tool install kimi-cli` 的用户将被引导至新的 TypeScript 版 Kimi Code CLI
  - 与 #2659 配合（归档仓库 + PyPI 上 `kimi-code` 包打墓碑标记），完成完整迁移路径

**分析：** 这是项目从 Python 向 TypeScript 迁移的正式落地动作，老用户需关注迁移指引，避免后续版本停更。

---

## 🔥 社区热点 Issues（共 2 条更新）

### 1. [#2336](https://github.com/MoonshotAI/kimi-cli/issues/2336) [OPEN] 内存压力下会话损坏：丢失对话 + 恢复时报 400 tool_call 错误

- **作者：** @kkc25 | 版本 1.43.0 | Linux | kimi-for-coding
- **创建：** 2026-05-21 | 昨日仍有更新
- **为何重要：** 涉及数据完整性——内存压力下会话文件损坏且无法恢复，对长时间运行的编码 Agent 场景是致命问题。该 Issue 挂起已 4 个月未修复，且发生在已被归档的 Python 版本上，用户需关注新版 TS CLI 是否彻底解决此问题。

### 2. [#1547](https://github.com/MoonshotAI/kimi-cli/issues/1547) [CLOSED] 生成过程中反复出现 "Authorization failed" 错误

- **作者：** @Philipp-Pfeiffer | 版本 1.24.0 | Linux LTS
- **创建：** 2026-03-22 | 昨日关闭，0 评论
- **为何重要：** 生成中途认证失败的稳定性问题，静默关闭（无评论）可能意味着已在后续版本/新版 CLI 中解决，或随仓库归档批量清理。

> 注：过去 24 小时内仅有 2 条 Issue 更新，社区 Issue 讨论热度集中在迁移期前的收尾。

---

## 🔧 重要 PR 进展（共 8 条更新）

### 核心功能类

**1. [#2666](https://github.com/MoonshotAI/kimi-cli/pull/2666) [CLOSED] feat(cli): 入口点短路至 Kimi Code 安装器** ⭐

- by @sailist | 已合并并随 1.52.0 发布
- Python 版正式退役，入口点引导用户迁移至 TS 版 CLI。今日最具战略意义的变更。

**2. [#2656](https://github.com/MoonshotAI/kimi-cli/pull/2656) [OPEN] fix(llm): 为 OpenCode Go 主机发送 x-opencode-session 头**

- by @FOWEPJF255 | 解决 Issue #2653
- 修复 OpenCode Go 主机对缺失稳定 session 头返回 HTTP 400 的问题，自动检测 `opencode.ai` 官方域名并附加当前 Kimi session id。体现与第三方 Agent 协议生态的兼容性投入。

**3. [#2667](https://github.com/MoonshotAI/kimi-cli/pull/2667) [CLOSED] fix(web): 防护 IME 组合输入时的 Enter 按键**

- by @dvd233 | 已关闭
- 修复 CJK 输入法（中日韩）组合输入期间 WebKit 发出 `keyCode === 229` 的 Enter 导致未完成文本被提前提交的问题。**对中文用户是高价值修复。**

### 依赖升级类（Dependabot，反映 Python 版维护收尾状态）

**4. [#2664](https://github.com/MoonshotAI/kimi-cli/pull/2664) [OPEN] agent-client-protocol 0.8.0 → 0.12.1**

- 跨 4 个 minor 版本的大幅升级，ACP 协议 SDK 变化较大，合并前需回归测试。

**5. [#2663](https://github.com/MoonshotAI/kimi-cli/pull/2663) [OPEN] rich 14.2.0 → 15.0.0**

- 大版本升级（"So Long 3.8"），放弃 Python 3.8 支持。

**6. [#2662](https://github.com/MoonshotAI/kimi-cli/pull/2662) [OPEN] fastapi 0.128.0 → 0.141.1**

- 13 个版本的跨度，含多项修复。

**7. [#2665](https://github.com/MoonshotAI/kimi-cli/pull/2665) [OPEN] ruff 0.14.14 → 0.16.8（开发依赖）**

- 与 #884（升级至 0.15.0）存在重复/竞争，后者已挂起 7 个多月，建议关注取舍。

**8. [#884](https://github.com/MoonshotAI/kimi-cli/pull/884) [OPEN] ruff 0.14.14 → 0.15.0（开发依赖）**

- 2026-02 创建，昨日被重新触碰，大概率会被 #2665 取代关闭。

---

## 📈 功能需求趋势

从近期 Issue 与 PR 活动可提炼出以下方向：

1. **架构迁移与连续性**：Python → TypeScript 的迁移是当前主线，用户核心诉求是平滑迁移路径与会话/配置的向后兼容（见 #2666、#2659 系列）。
2. **第三方 Agent 协议兼容**：OpenCode、ACP（agent-client-protocol）等外部协议的适配需求明显（#2656、#2664），社区期望 Kimi CLI 作为编码 Agent 生态的一等公民。
3. **多语言/输入法体验**：CJK IME 兼容性修复（#2667）表明中文等非拉丁输入用户的 Web 端体验受到重视。
4. **会话稳定性与数据完整性**：会话损坏、恢复失败（#2336）是长期痛点，新版 CLI 需重点验证。

---

## ⚠️ 开发者关注点

1. **迁移窗口期风险**：Python 版已归档，仍在使用 `kimi-cli` PyPI 包的用户应尽快迁移至新版 Kimi Code CLI，避免停留在含已知 bug（如 #2336 会话损坏）的版本上。
2. **长期未修复的稳定性问题**：#2336（内存压力下会话损坏）4 个月未解决，暴露了会话持久化机制的脆弱性，长会话用户建议养成主动备份习惯。
3. **认证稳定性**：#1547 类中途授权失败问题虽有报告，但缺乏社区讨论深度（0 评论），类似问题的根因排查信息不足。
4. **依赖维护惯性**：Dependabot 一次性提交 5+ 个积压依赖升级（部分跨度极大），反映归档前版本维护节奏放缓，合并风险需评估。

---

*本日报基于过去 24 小时 GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-09-23

## 📌 今日速览

今日无新版本发布，但 PR 活动非常活跃，@rekram1-node 一人贡献了多个 codemode 与 SSE 解析修复（含已合并的 `data: null` 帧忽略修复）。社区关注焦点集中在：V2 子代理权限请求丢失导致会话卡死的严重 bug、Console 迁移导致付费 Go 订阅丢失的账号问题，以及模型被静默切换的可靠性争议。

---

## 🔥 社区热点 Issues

1. **[#44747](https://github.com/anomalyco/opencode/issues/44747) [OPEN] 子代理权限请求静默丢失，父会话永久 busy**
   最严重的开放 bug：Task tool 触发的 `external_directory` 权限请求可能完全不到达 UI/API，父会话卡死且无法通过 stop/interrupt 或重启客户端恢复。影响核心可用性。

2. **[#50201](https://github.com/anomalyco/opencode/issues/50201) [OPEN] Console 迁移导致 Go 付费账户丢失**
   涉及付费用户资产（订阅、用量、发票）在 dashboard 迁移后消失，属于高优先级商业问题，已有 4 个 👍。

3. **[#50769](https://github.com/anomalyco/opencode/issues/50769) [CLOSED] OpenCode 自行更改已选模型**
   用户报告在 3 台电脑上模型被静默从 DeepSeek V4.1 Flash 切换为其他模型，与已关闭的 #38770（后台子代理通知导致模型回退）疑似同源，可靠性隐患明显。

4. **[#17471](https://github.com/anomalyco/opencode/issues/17471) [OPEN] 模型触达输出 token 上限时自动继续**（👍 13）
   老牌高赞功能请求，配合百万级上下文模型场景需求强烈，今日再次活跃。

5. **[#36117](https://github.com/anomalyco/opencode/issues/36117) [OPEN] 服务重启后 catalog 未就绪导致读取不完整快照**
   V2 托管服务重启窗口期内，TUI 可能显示数千个未就绪模型，涉及初始化时序设计。

6. **[#50314](https://github.com/anomalyco/opencode/issues/50314) [CLOSED] OpenAI 兼容流因 `data: null` SSE 帧整体中止**
   网关注入非对象 SSE payload 会导致所有工具调用失败。好消息：对应修复 PR #50793 已合并关闭。

7. **[#50598](https://github.com/anomalyco/opencode/issues/50598) [OPEN] V2 agent frontmatter permissions 解析但未生效**
   自定义 agent 的 deny 规则无效、保持默认全工具开放，安全相关的配置失效问题。

8. **[#50766](https://github.com/anomalyco/opencode/issues/50766) [CLOSED] "Upstream request failed: Insufficient account funds"**
   今日新报的 Big Pickle 上游服务问题，与 #50779（无响应）、#50773（连接超时）叠加，显示今日服务端可能有波动。

9. **[#50739](https://github.com/anomalyco/opencode/issues/50739) [CLOSED] V2 native runner 无法 drain OpenRouter ai-sdk-provider 模型**
   V2 原生会话 runner 与经典端点行为不一致，反映 V2/V1 双轨兼容的持续摩擦。

10. **[#6479](https://github.com/anomalyco/opencode/issues/6479) [CLOSED] opencode 读取上级目录的 agents.md**
    沙箱/目录边界的老问题，今日最终关闭，涉及配置文件作用域语义。

---

## 🔧 重要 PR 进展

1. **[#50793](https://github.com/anomalyco/opencode/pull/50793) [CLOSED] fix(ai): 忽略裸 null SSE 帧** — 直接修复 #50314，解决代理网关 `data: null` 帧导致的运行中止。
2. **[#50776](https://github.com/anomalyco/opencode/pull/50776) [OPEN] 畸形 tool-result 内容降级而非崩溃** — 防止非数组 content value 打崩 prepare 阶段。
3. **[#50808](https://github.com/anomalyco/opencode/pull/50808) [OPEN] 会话删除后跳过 projector 写入** — 修复 abort 长生成时的 SQLite FOREIGN KEY 约束失败。
4. **[#50515](https://github.com/anomalyco/opencode/pull/50515) [OPEN] CLI run 空闲时 flush 遗漏 parts** — 修复非交互 `run` 的间歇性空输出。
5. **[#50797](https://github.com/anomalyco/opencode/pull/50797) [OPEN] 保留 AI SDK V2 provider 的 usage 与 finish reason** — 修复动态加载 provider 丢失 token 统计、禁用自动压缩的问题。
6. **[#50790](https://github.com/anomalyco/opencode/pull/50790) [CLOSED] 项目按最近活动排序** — 打开对话框不再按元数据编辑时间排序，UX 改进。
7. **[#50774](https://github.com/anomalyco/opencode/pull/50774) [CLOSED] 后台 job 缺失时前台任务正确失败** — 替代此前的假 "completed" 空结果，与 #44747 卡死问题相关。
8. **[#50791](https://github.com/anomalyco/opencode/pull/50791) [CLOSED] codemode 支持标签模板与 String.raw** — 使 `sql\`...\`` 等常见代码可在 codemode 中执行。
9. **[#50810](https://github.com/anomalyco/opencode/pull/50810) [OPEN] V2→V1 配置归一化保留 MCP timeout** — 修复配置迁移中 per-server 超时丢失。
10. **[#50620](https://github.com/anomalyco/opencode/pull/50620) [OPEN] `opencode mini` 恢复共享模型偏好** — Mini 模式读取 TUI 写入的 `model.json` 最近模型状态。

其他值得关注：#50801（UI 支持逗号分隔字体族）、#50798（TUI 显示子代理实际模型/推理变体）、#50162（修复 `/find/symbol` 吞错误返回空数组）。

---

## 📈 功能需求趋势

- **会话/任务连续性**：模型触达 token 上限自动续写（#17471，👍 13）、常驻 Continue 按钮（#50663）、任务中断恢复 — 最高呼声方向。
- **会话组织管理**：项目→对话分层结构、对话命名（#38525）、按活动排序（PR #50790），用户对扁平历史的痛点明确。
- **权限与安全模型**：agent frontmatter permissions 生效（#50598）、子代理权限请求可靠性（#44747）。
- **Provider 兼容广度**：Crof AI 等新 provider 支持、OpenAI 兼容端点的流健壮性（#50314、#50739）。
- **可观测性与错误信息**：serve 绑定失败暴露真实 errno（#38738/#38739）、API 错误以 Error 实例抛出（PR #50788）。

## ⚠️ 开发者关注点

1. **服务端稳定性**：今日多个 Big Pickle / 上游连接类 issue（#50766、#50773、#50779），叠加 Console 迁移丢订阅事件（#50201），托管服务质量是当前最大摩擦点。
2. **V2 迁移阵痛**：V2 原生 runner 与经典端点行为不一致、V2→V1 配置归一化丢字段、V2 permissions 不生效 — 双轨期的回归 bug 密集。
3. **静默状态漂移**：模型被自动切换/回退（#50769、#38770）类问题反复出现，用户信任受损，建议关注修复落地。
4. **长会话健壮性**：会话删除竞态、压缩预检误判、畸形 tool-result 崩溃等，均指向事件流生命周期的边界处理需加固。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-09-23

## 📌 今日速览

Qwen Code 今日发布 **v0.24.5-preview.0** 及稳定的 **v0.24.4**（含 Desktop 版），重点修复 deferred-tool bridge 相关的陈旧/未测试代码。社区方面，Managed Agent 双路径架构提案（#12380）持续引发讨论，Linux/WSL 剪贴板静默失败系列 bug 和 `git commit --amend` 安全门控成为焦点，Web Shell / daemon 生态的功能迭代非常活跃。

---

## 🚀 版本发布

- **v0.24.5-preview.0**（预览版）[Release](https://github.com/QwenLM/qwen-code/releases)
  - 修复 deferred-tool bridge 引入的陈旧/未测试内容（PR #12355）
- **v0.24.4**（稳定版）
  - 新增 monitor tool 系统提示引导（PR #12408）；无破坏性变更
- **v0.24.4 / v0.24.3 nightly**（20260922 构建）
- **Desktop v0.24.4**
  - 修复 review 覆盖率统计：排除计划外代码块，从 plan 读取分母（PR #12370）

---

## 🔥 社区热点 Issues（Top 10）

1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380) Managed Agent 双路径架构提案**（10 评论）
   定义保留现有 TS agent loop、推理与工具环境解耦、Session 持久归属与可恢复工具执行的分期交付架构，是多 Agent / 平台分发路线图的核心讨论。

2. **[#12449](https://github.com/QwenLM/qwen-code/issues/12449) TUI 在 rows-only 收缩时吞掉对话行**（10 评论）
   移动端软键盘 / Termux 场景下 bundled ink 7.0.3 缺少上游修复，影响移动终端用户体验。

3. **[#12053](https://github.com/QwenLM/qwen-code/issues/12053) 精简 Goal 运行时**（8 评论，已关闭）
   实测两次 /goal-draft 会话约 100 次工具调用即完成目标，建议按当前 turn 证据判定完成、删除 evidence catalog 和 checkpoints。

4. **[#12425](https://github.com/QwenLM/qwen-code/issues/12425) CodeModeOnly 隐藏 bridge 工具与提示词矛盾**（8 评论，已关闭）
   自报 bug：workflow keyword bridge 语句提到被隐藏且被拒绝的工具，自报审查文化的体现。

5. **[#12417](https://github.com/QwenLM/qwen-code/issues/12417) 工具执行沙箱加固跟进**（7 评论）
   PR #12267 将 Linux bubblewrap 从整个 CLI 收窄到单个工具执行，历经五轮评审，安全边界问题值得持续关注。

6. **[#12381](https://github.com/QwenLM/qwen-code/issues/12381) HTTP 网关超时后恢复 session-create 结果**（7 评论）
   `POST /session` 在网关超时后实际创建成功，客户端却拿不到 session ID，是 daemon 可靠性的关键边界用例。

7. **[#12488](https://github.com/QwenLM/qwen-code/issues/12488) Linux/WSL 缺 wl-paste/xclip 时 Ctrl+V 静默失败**（6 评论，已关闭）
   无错误提示、无降级路径；已衍生出 #12503/#12504/#12505 三个后续 issue，形成完整修复链。

8. **[#12240](https://github.com/QwenLM/qwen-code/issues/12240) Chrome 扩展上架 Chrome Web Store**（5 评论，已关闭）
   请求建立 GitHub Actions 自动发布流水线，与 #5626 的 Daemon+WebUI 扩展复活提案呼应。

9. **[#12164](https://github.com/QwenLM/qwen-code/issues/12164) Web Shell 作为浏览器 Live Host**（5 评论，已关闭）
   让任何浏览器都能进行实时语音通话，摆脱 Mac 原生 Qwen Live Host.app 依赖。

10. **[#11908](https://github.com/QwenLM/qwen-code/issues/11908) 超大 available_commands_update 触发 MAX_JSON_NODES 断连**（P1，5 评论）
    ACP 桥接 fail-closed 拆除通道后所有请求 404，是最高优先级在修 bug（对应 PR #10978）。

---

## 🔧 重要 PR 进展（Top 10）

1. **[#12513](https://github.com/QwenLM/qwen-code/pull/12513) 批量获取 workspace session 实时快照**
   一次 HTTP 请求返回 1–20 个 workspace 的完整会话快照，配套 daemon API + TS SDK。
2. **[#12515](https://github.com/QwenLM/qwen-code/pull/12515) 共享 session 统一 operator 规则**
   将准入/发言/操作三层权限收敛为单一规则 + 显式 `operators` 列表（对应 #12475 遗留不一致）。
3. **[#12463](https://github.com/QwenLM/qwen-code/pull/12463) 注册 session commits 使 amend 豁免可达**
   接通 Auto 模式 `git commit --amend` 门控的 session-commit registry 生产端，修复 #12460 的死代码豁免。
4. **[#12492](https://github.com/QwenLM/qwen-code/pull/12492) /batch-api 批处理工作流**
   `qwen batch submit|status|fetch|cancel` 命令 + agent 自动判断任务是否适合批处理，面向成本优化。
5. **[#12466](https://github.com/QwenLM/qwen-code/pull/12466) Web Shell 按 prompt 检查工具调用**
   会话级 Tool calls 面板，含 prompt 选择器、状态过滤、MCP 徽标与耗时记录。
6. **[#12462](https://github.com/QwenLM/qwen-code/pull/12462)（已合并）移动端软键盘下 composer 控件可达性**
   修复三个仅在手机键盘弹出时出现的触摸布局问题。
7. **[#12396](https://github.com/QwenLM/qwen-code/pull/12396) 后注册 workspace 恢复 serve.channels**
   daemon 启动后通过 API 注册的可信非主 workspace 可恢复自己的 channel 配置。
8. **[#12506](https://github.com/QwenLM/qwen-code/pull/12506)（已合并）托管运行时 attestation worker**
   隐藏的 `qwen managed-runtime-worker` 最小化启动路径，不加载模型/工具栈，仅做远程证明。
9. **[#12183](https://github.com/QwenLM/qwen-code/pull/12183) 部署托管扩展目录加载**
   `--managed-extensions <root>` 支持企业部署场景的集中扩展分发。
10. **[#12360](https://github.com/QwenLM/qwen-code/pull/12360) 精简系统提示词**
    合并重复的行为指令，削减五组工具调用示例，修复 headless 模式仍问追问的问题——直接关系 token 成本。

---

## 📈 功能需求趋势

- **Daemon / 多 workspace 服务化**：Managed Agent 架构（#12380）、批量快照（#12511/#12513）、通道恢复（#12396/#12432）、session-create 幂等（#12381）——Web Shell 背后的 serve 层是当前最密集的建设方向。
- **多 Agent 与权限模型**：子 Agent 工具策略（#12424）、共享 session 三层访问控制（#12512/#12515）。
- **实时语音（Live Voice）**：Web Shell 作为浏览器 Live Host（#12164）、单 workspace daemon 语音修复（#12440）。
- **平台分发**：Chrome 扩展上架（#12240）、部署托管扩展（#12183）、VS Code Companion 修复（#12501）。
- **上下文与成本管理**：本地 notes 压缩与会话历史恢复（#12257）、Batch API（#12492）、系统提示精简（#12360）。

## 🛠️ 开发者关注点

- **Linux/WSL 剪贴板体验**：#12488 修复后仍有三条静默失败路径（#12505）、错误归因文案（#12504）、缺 powershell.exe 降级（#12503），移动/终端用户体验短板明显。
- **安全门控的可用性**：`git commit --amend` 豁免注册不完整（#12460/#12514），且注册未覆盖所有提交路径——安全与效率的平衡仍需打磨。
- **静默失败问题反复出现**：剪贴板、tools.eager 拼写错误无警告（#12435）、MCP 工具型服务器被误判断连（#12496），社区强烈期望更明确的错误反馈。
- **稳定性边界用例**：MAX_JSON_NODES 断连（#11908）、本地 file:// artifacts 阻塞 session 恢复（#12389）、Desktop 工具调用块渲染为空（#11966）。
- **终端 UI 兼容性**：Termux/移动端 TUI 吞行（#12449）、ink 依赖滞后于上游修复，值得依赖升级策略关注。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（Codewhale）社区动态日报
**2026-09-23** | 数据来源：github.com/Hmbown/DeepSeek-TUI

---

## 📌 今日速览

项目正式更名后发布 **v0.10.0**：Codewhale 成为 Shannon Labs 公开产品，旧 npm 包 `deepseek-tui` 停止维护。今日社区围绕 0.9.14 重构积压（MCP 双栈合并、配置统一、结构化并发）与 0.10.x 狗粮修复活跃推进，12 个 PR 中 10 个已合入，包括新的 Chrome 侧边栏客户端 Chromewhale。

---

## 🚀 版本发布

- **v0.10.0**（[Release](https://github.com/Hmbown/DeepSeek-TUI/releases)）：Codewhale 品牌落地。`codewhale` 命令、npm 包与 release 资产名保持小写技术标识；遗留 `deepseek-tui` npm 包弃用，v0.8.x 的 `deepseek` / `d` 命令用户需迁移。

---

## 🔥 社区热点 Issues（Top 10）

1. **#6011 — Token 用量与工具诊断面板**（9 评论）
   分组件/分模型的 token 记账、缓存命中率、各工具 sink 与压缩成本统计，外加工具调用错误模式分析。可观测性需求呼声最高。
   https://github.com/Hmbown/Codewhale/issues/6011

2. **#5586 — 拆分巨型文件**（8 评论）
   lib.rs 18.7k 行、config.rs 12.3k 行等单体重文件拆解，属 Core 计划 C09，是代码健康度的关键工程。
   https://github.com/Hmbown/Codewhale/issues/5586

3. **#6050 — 可插拔 Agent 记忆后端**（6 评论）
   当前 `MemoryBackend` 仅 Native/Off，社区希望提供通用后端接口，以 causal-memory / mem0 为参考实现。
   https://github.com/Hmbown/Codewhale/issues/6050

4. **#6142 — 合并两套 MCP 客户端栈**（5 评论）
   `tui/src/mcp/`（13.2k 行）与 `crates/mcp`（4.5k 行）功能重复，app-server 与 engine 各用一套，亟需统一。
   https://github.com/Hmbown/Codewhale/issues/6142

5. **#2342 — 输出文件点击预览**（5 评论）
   中文社区老牌需求：输出中的文件路径支持点击打开预览，免去手动到目录查找。
   https://github.com/Hmbown/Codewhale/issues/2342

6. **#6036 — Fleet 与 Agent 概念重复存储**（5 评论）
   创始人亲自确认两套概念混淆（同一 `scout` 在两个 store 中重复存在），数据模型需要一次收敛。
   https://github.com/Hmbown/Codewhale/issues/6036

7. **#4955 — 零沙箱 / `--no-sandbox` 模式**（5 评论，1 👍）
   内核级 Seatbelt 沙箱在日常本地开发中频繁破坏 shell 命令，开发者请求完全关闭沙箱的开关。
   https://github.com/Hmbown/Codewhale/issues/4955

8. **#6086 — Session scratchpad 与三存储统一寻址**（4 评论）
   让 scratchpad、Agent Mail、workshop 输出共用一套寻址方案，目前 scratchpad 尚不存在。
   https://github.com/Hmbown/Codewhale/issues/6086

9. **#5915 — Fleet 模型选择链路**（4 评论）
   provider → model → 候选短名单 → 角色分配的完整模型选型流程，配套 fleet-aware operator。
   https://github.com/Hmbown/Codewhale/issues/5915

10. **#2323 — 中文输入法未适配**（3 评论，1 👍）
    拼输入时占位提示不隐藏、弹窗界面输入串扰等 IME 问题，中文用户体验的核心痛点。
    https://github.com/Hmbown/Codewhale/issues/2323

---

## 🔀 重要 PR 进展（Top 10）

1. **#6408** [OPEN] 新增 Yolo-Auto 兼容主机——数据驱动的平价 Chat Completions 网关描述符。
   https://github.com/Hmbown/Codewhale/pull/6408

2. **#6407** [OPEN] 集成分支：官网 wave 1（globals.css 拆分、GPUI role tokens）+ 0.10.1 CI 自动化切片，全部走 CI 合入。
   https://github.com/Hmbown/Codewhale/pull/6407

3. **#6406** [已合] 修复 resume/fork 重复创建 thread 与 session 的两个身份 bug。
   https://github.com/Hmbown/Codewhale/pull/6406

4. **#6404** [已合] 用户自定义 `[providers.<name>]` 路由此前对原生客户端不可见，现已暴露到 `/v1/providers` 目录。
   https://github.com/Hmbown/Codewhale/pull/6404

5. **#6398** [已合] **Chromewhale**：MV3 Chrome 侧边栏客户端，连接本地 runtime 并赋予模型操作当前标签页的五个工具。
   https://github.com/Hmbown/Codewhale/pull/6398

6. **#6399** [已合] 重新钉住 runtime-contract 预算，修复 eager `load_skill` 以来主 CI 持续红的问题。
   https://github.com/Hmbown/Codewhale/pull/6399

7. **#6392** [已合] 0.10.0 狗粮修复八连：未生效的 gate 与从未上线的功能（含 Plan 模式 Shift+Tab 权限切换失效），均带回归测试。
   https://github.com/Hmbown/Codewhale/pull/6392

8. **#6400** [已合] 仅存在于 `catalog.models` 命名空间的条目此前无法进入 offering 列表，修复摄入逻辑。
   https://github.com/Hmbown/Codewhale/pull/6400

9. **#6403/#6405** [已合] 中英双语文档收口：`docs/work` 迁移至 dictionary spine，isZh 检测上限从 28 降到 18。
   https://github.com/Hmbown/Codewhale/pull/6403

10. **#6402** [已合] 移除 features.rs 的 blanket dead-code 豁免及未使用的 Stage 变体，清理债务。
    https://github.com/Hmbown/Codewhale/pull/6402

---

## 📈 功能需求趋势

- **多客户端生态扩张**：Chrome 侧边栏（Chromewhale）、本地浏览器客户端、ACP 主机集成（Zed/JetBrains/VS Code，#5835）、App-server 终端（#6160）——Codewhale 正从 TUI 走向多端 runtime。
- **Fleet / 子代理体系收敛**：#6036、#5915、#5479、#6148 显示“多代理协作”是当前最大产品方向，但数据模型与并发结构（JoinSet + 子取消）都需重构。
- **可观测性与性能门禁**：token 记账（#6011）、运行时性能 gate（#6193）、诊断面板需求集中出现。
- **MCP 现代化**：对齐 MCP 2026-07-28 spec（#6280）、双栈合并（#6142）、secret 作用域设计（#5637）。
- **编辑能力升级**：AST 符号级 `edit_symbol`（#6203）以解决文本锚定失败这一最高频编辑工具故障。
- **可插拔记忆与外部生态**：mem0 等第三方记忆后端、Yolo-Auto 等新 provider。

---

## ⚠️ 开发者关注点（痛点）

1. **沙箱过严**：本地开发中 Seatbelt 内核沙箱日常破坏 shell 命令，`--no-sandbox` 诉求强烈（#4955）。
2. **中文输入法体验**：IME 下占位提示、弹窗输入串扰长期未解（#2323），是中文用户流失风险点。
3. **编辑工具锚定失败**：`edit_file` 的 old_string 匹配失败每次浪费一轮对话 + 重读，是效率黑洞（#6203）。
4. **代码单体化**：多个 10k+ 行文件、双 MCP 栈、双配置系统推高维护成本，重构 backlog 庞大（#5586、#6142、#6143）。
5. **测试稳定性**：catalog-filter 并行测试确定性挂起（#6295）、CI 因 contract budget 长期红（#6399），影响开发节奏。
6. **概念混乱**："fleet vs agent" 双重存储让内部与用户都困惑（#6036），数据模型统一迫在眉睫。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-09-23

## 一、今日速览

Pi 发布 **v0.87.1**，接入 Claude Opus 5.5、GPT-6 Sol/Luna 等最新前沿模型，并将 Grok 4.7 设为默认模型。过去 24 小时社区活跃度高（82 条 Issue 更新、25 条 PR 更新），核心讨论集中在 **0.86.x 系列回归问题**（LiteLLM 连接中断、RPC steer 关联失败、SDK 全局 undici 污染）和 **TUI 全屏模式渲染性能**。mitsuhiko 提交的多个大型特性 PR（loadout 管理、Codex 协议对齐、语法高亮懒加载）也在今日集中合并/更新。

---

## 二、版本发布

### v0.87.1
- **最新前沿模型支持**：Claude Opus 5.5、GPT-6 Sol、GPT-6 Luna 可通过受支持的 Provider（含 GitHub Copilot）使用，详见 [模型选择文档](https://github.com/earendil-works/pi/blob/v0.87.1/packages/coding-agent/docs/models.md#select-a-model)
- **Grok 4.7 成为默认模型**

---

## 三、社区热点 Issues

1. **[#7885](https://github.com/earendil-works/pi/issues/7885) npm 搜索未索引新发布的 pi-packages**（已关闭，13 评论）
   自 8 月 4 日起新发布的包（如 `pi-affix-prompt`）无法被 `npm search` 检索，导致 pi.dev 包画廊停滞。这是生态分发的核心阻塞问题，今天最终关闭。

2. **[#9843](https://github.com/earendil-works/pi/issues/9843) 0.86.x 回归：LiteLLM 长请求中流 `APIConnectionError`**（开放中，10 评论）
   从 0.85.1 升级后在 OpenAI 兼容（LiteLLM 代理）场景下，长请求中途报内部服务器错误，TUI 和 Pendant（VS Code）均受影响。升级用户的高优先级回归。

3. **[#9803](https://github.com/earendil-works/pi/issues/9803) 0.86.0 回归：RPC steer 成功无法与扩展处理的输入关联**（开放中，10 评论）
   扩展输入处理器消费/排队 steer 后，响应无法标识是哪个输入被排队，RPC 客户端无法可靠判断。影响嵌入 Pi 的 IDE/客户端集成场景。

4. **[#9052](https://github.com/earendil-works/pi/issues/9052) 全屏模式滚轮速度慢 3 倍**（已关闭，10 评论，6 👍）
   全屏模式固定输入框的设计受欢迎，但滚动体验明显劣化。UX 痛点类高赞 Issue。

5. **[#9549](https://github.com/earendil-works/pi/issues/9549) 大转录每帧重渲染 + 每次调整大小重发整个转录**（开放中，7 评论）
   双核机器上单核饱和。由报告者本地 pi agent 起草并验证复现，测量数据充分，是 TUI 性能的代表性深度报告。

6. **[#9255](https://github.com/earendil-works/pi/issues/9255) 长转录全屏重绘风暴**（开放中，6 评论）
   流式组件高度超过视口时几乎每帧走全量渲染路径，导致文字跳变/重影。与 #9549 同属 TUI 渲染性能主题。

7. **[#9652](https://github.com/earendil-works/pi/issues/9652) Fable 拒绝压缩因 thinking 块被转写**（已关闭，7 评论）
   `/compact` 将 thinking 块转写进总结提示词触发 Anthropic 分类器拒绝。配套修复 PR #9908 已合并（见下文）。

8. **[#9784](https://github.com/earendil-works/pi/issues/9784) 元 Issue：扩展 API 缺少厂商特有响应字段**（开放中，3 评论）
   `AssistantMessage` 被 community 称为“普罗克鲁斯特斯之床”，用户反复请求暴露 provider 特有字段。这是 Extension API 设计方向的关键争论点。

9. **[#9787](https://github.com/earendil-works/pi/issues/9787) SDK 导入将嵌套 undici 设为进程全局 dispatcher**（开放中）
   0.86.0 起 SDK 嵌入场景（如 Fastify 应用）中 native fetch 的 abort/流式被破坏。对以 Pi 作为嵌入式 agent 框架的用户影响严重。

10. **[#9884](https://github.com/earendil-works/pi/issues/9884) 启动时配置的默认模型偶发被 fallback 替换**（开放中）
    扩展注册的 Provider 模型目录尚未发现时，配置的默认模型（20 次中 4 次）被替换为内置 fallback。模型发现与启动时序的竞态问题。

---

## 四、重要 PR 进展

1. **[#9916](https://github.com/earendil-works/pi/pull/9916) Claude Code 版本升至 2.1.280**（已合并）— Opus 5.5 所需最低版本，配合 v0.87.1 发布。
2. **[#9908](https://github.com/earendil-works/pi/pull/9908) 修复 Fable 分轮总结被拒**（已合并）— 分离对话内容与指令、改用连续性导向的总结措辞，修复 #9652。
3. **[#9898](https://github.com/earendil-works/pi/pull/9898) 文档大规模刷新**（已合并）— 一次性关闭 #8684、#8717、#9205、#9358、#9808 共 5 个文档类 Issue，含文档评测验证（3 轮 13/15 通过）。
4. **[#9878](https://github.com/earendil-works/pi/pull/9878) Codex 协议对齐**（开放中，@mitsuhiko）— 使 codex 协议行为更贴近官方实现，关联 #9481。
5. **[#7148](https://github.com/earendil-works/pi/pull/7148) 实验性 Loadout 管理**（已关闭）— `/loadout` 支持会话中途启停扩展并持久化到 session，是扩展体验的重大功能。
6. **[#9901](https://github.com/earendil-works/pi/pull/9901) 向扩展暴露 Provider 流式事件**（开放中）— 新增 `onProviderStreamEvent`，覆盖 Anthropic/OpenAI/Codex 的归一化前事件，直接回应 #9784 的诉求方向。
7. **[#9924](https://github.com/earendil-works/pi/pull/9924) 尊重硬件光标配置**（已合并）— `showHardwareCursor: true` 时不再绘制假光标，尊重 kitty 等终端的用户设置。
8. **[#9926](https://github.com/earendil-works/pi/pull/9926) 自定义 Provider 显示名**（已合并）— `models.json` 中可配置 provider 显示名并展示在状态栏。
9. **[#9920](https://github.com/earendil-works/pi/pull/9920) + [#9907](https://github.com/earendil-works/pi/pull/9907) Codex 回放健壮性修复**（均已合并）— 分别处理带签名的空最终回答和空工具名回放导致的 API 拒绝。
10. **[#7801](https://github.com/earendil-works/pi/pull/7801) 语法高亮懒加载**（已关闭，@mitsuhiko）— 不常见语法 grammars 延迟加载，优化启动性能。

---

## 五、功能需求趋势

- **新模型/Provider 支持**：v0.87.1 集中接入 Opus 5.5 / GPT-6 系列，社区持续贡献新 Provider（PR #9934 Yolo-Auto、Issue #9819 Kimi OAuth 域名）。
- **Extension API 能力扩展**：暴露 provider 原始事件与厂商特有字段（#9784、PR #9901）是反复出现的诉求；loadout、RPC steer 等也在扩展交互层面深化。
- **TUI 渲染性能**：全屏模式下大转录的增量渲染、滚动性能（#9052、#9255、#9549）是开放 Issue 中最集中的性能主题。
- **Provider 重试与兼容健壮性**：`Retry-After` 解析（#9815、#9571）、Mistral 空增量（#9674）、工具名非法字符（#9852）等边缘兼容问题高发。
- **嵌入式/SDK 场景**：全局 dispatcher 污染（#9787）、RPC steer 语义（#9803）表明以 SDK 形式嵌入宿主应用的用户群在增长。

## 六、开发者关注点

1. **0.86.x→0.87 回归频发**：LiteLLM 断连（#9843）、llama.cpp 崩溃（#9929）、Ollama 模型失效（#9858），不少用户被迫回滚到 0.85.1——升级稳定性是当前最大痛点。
2. **文档与实际行为脱节**：`PI_OFFLINE` 未文档化的行为扩大（#8684）及批量文档修复（PR #9898）显示文档可信度是社区信任的基础。
3. **本地/自建模型兼容性**：Ollama、llama.cpp、LiteLLM 代理、GLM、Mistral 等本地/第三方接入的问题占比高。
4. **会话数据可靠性**：session 文件元数据截断转录（#9930）、会话列表低效解析（#9820）反映会话管理层的成熟度需求。
5. **终端体验细节**：光标形状、滚动速度、输入框固定等 TUI 微体验持续被高质量反馈（多为 kitty/Windows Terminal 用户）。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# 📰 oh-my-pi 社区动态日报 · 2026-09-23

## 一、今日速览

今日 oh-my-pi 发布 **v18.2.10**，修复了流式响应终结与工具执行被错误跳过两个 agent 核心问题。社区热度最高的话题仍是 **Google Antigravity 提供商的虚假 429 配额耗尽问题**——主 Issue #11689 已关闭但最新版仍可复现，衍生 Issue 持续发酵。同时，今日新开的多个高质量 PR（LSP 修复、Advisor 成本优化、rio 终端超链接）显示社区贡献保持活跃。

---

## 二、版本发布

### v18.2.10（@oh-my-pi/pi-agent-core）
- **修复流式终结逻辑**：当 provider 在未发出 completion 或 error 事件的情况下直接结束时，确保最终 assistant 消息被保留，并正确发出对应的消息生命周期事件。
- **修复工具执行被错误跳过**的问题（发布说明截断，涉及 host 相关条件判断）。

---

## 三、社区热点 Issues

**1. [#11689](https://github.com/can1357/oh-my-pi/issues/11689) [已关闭] Antigravity (Google AI Pro) 错误配额耗尽 (429)**
- 📊 评论 112 · 👍 19 · 持续 11 天
- 本周期最大热点。配额健康的账号也持续报 `RESOURCE_EXAUSTED`，且 provider 要求 1800 秒重试等待。虽已关闭，但修复显然不彻底（见下条）。

**2. [#12655](https://github.com/can1357/oh-my-pi/issues/12655) [开放] Antigravity 429 在 v18.2.6 仍可复现**
- 📊 评论 39 · 👍 8
- 使用 `gemini-3.8-flash-high` 时任何 prompt 立即失败。主 Issue 关闭后问题回归，社区对修复有效性质疑强烈。

**3. [#11699](https://github.com/can1357/oh-my-pi/issues/11699) [开放] 429 根因分析：system prompt 中的 `<system-conventions>` 标签**
- 📊 评论 33
- 社区定位到虚假 429 可能由系统提示中的特定标签触发，是排障方向上的重要线索。

**4. [#12862](https://github.com/can1357/oh-my-pi/issues/12862) [开放] marketplace agent 忽略显式 agentModelOverrides**
- 📊 评论 24 · prio:p2
- 模型路由契约回归问题：marketplace 发现的 task agent 继承父任务模型而非显式配置，破坏了 #7966/#7967 建立的契约。

**5. [#12870](https://github.com/can1357/oh-my-pi/issues/12870) [开放] Opus 5.5 要求 Claude Code ≥ 2.1.280**
- 📊 评论 11 · 👍 6
- 今日新发布的 Anthropic Opus 5.5 无法在 OMP 中使用（400 错误）。新模型适配的时效性问题，通常需要快速跟进。

**6. [#12261](https://github.com/can1357/oh-my-pi/issues/12261) [开放] 长会话中 write 流式编辑性能严重下降**
- 📊 评论 12
- 1.1M 上下文会话进行到约 40% 后，写入速度降至每 5 秒 1-2 token。#10955 修复后的残留性能问题，影响重度用户。

**7. [#12917](https://github.com/can1357/oh-my-pi/issues/12917) [开放] Advisor 行为近期发生显著变化**
- 📊 评论 7 · 今日创建
- Advisor 在近期更新后变得过于激进，过度审查工作流。与 #12777 联动，提示提示词/行为回归，值得维护者关注。

**8. [#12392](https://github.com/can1357/oh-my-pi/issues/12392) [开放] Anthropic prompt cache 仍为 head-only（v18.2.5）**
- 📊 评论 6 · prio:p1
- 尽管 `ab88e931` 修复已合并，缓存断点放置问题仍复现，直接影响 API 成本，被标记 p1。

**9. [#12657](https://github.com/can1357/oh-my-pi/issues/12657) [已关闭] 后台 Bash 作业在子进程退出后仍显示 running**
- 📊 评论 11 · prio:p2
- `hub wait` 永不结算导致 agent 卡死。已关闭，说明近期已修复。

**10. [#12895](https://github.com/can1357/oh-my-pi/issues/12895) [开放] GPT-6 Luna 的 effort 选项缺失于模型目录**
- 📊 评论 6 · 👍 3
- GitHub Copilot 暴露了 `max` effort，但 OMP 目录显示 `thinking: -`，`omp models refresh` 无法拉取。

---

## 四、重要 PR 进展

**1. [#12925](https://github.com/can1357/oh-my-pi/pull/12925) fix(lsp): 创建的文件需先落盘再 didOpen**
- 修复通过 `write` 工具创建新模块后，引用它的文档永远报 TS2307 的问题——LSP 生命周期时序 bug。

**2. [#12920](https://github.com/can1357/oh-my-pi/pull/12920) feat(advisor): 新增 advisor.reviewOn 节奏配置 + 修复四个成本泄漏**
- 与热点 Issue #12917 直接相关：让用户控制 Advisor 审查频率，阻止无意义的请求消耗。维护者已在 Discord 认可该范围。

**3. [#12654](https://github.com/can1357/oh-my-pi/pull/12654) fix: 重新武装 Responses 请求体超时恢复（review:p0）**
- #11878 后续：一次性 full-replay 超时恢复现在可被任何产生输出的 turn 重新武装，解决无限 408 问题。标记 p0，优先级最高。

**4. [#12923](https://github.com/can1357/oh-my-pi/pull/12923) feat: 为自定义 provider 配置扩展上下文**
- 允许 `models.yml` 中设置 `maxContextWindow`，`/extended-context on/off` 切换大小窗口，增强自定义 provider 灵活性。

**5. [#12921](https://github.com/can1357/oh-my-pi/pull/12921) fix(todo): 嵌套 eval 更新后刷新 Todo 面板**
- 修复嵌套 Eval 修改 checklist 后 Todo 面板显示过期数据的问题。

**6. [#12754](https://github.com/can1357/oh-my-pi/pull/12754) feat(tui): 新增 session_tokens 状态栏段**
- 显示实时上下文 token 数，`/handoff` 或压缩后递减，直接回应 Issue #11643 的痛点。

**7. [#12918](https://github.com/can1357/oh-my-pi/pull/12918) feat: 新增 StepFun provider（含实时模型发现）**
- 接入 StepFun 开放平台 API，支持 `/login` API-key 流程与 `STEPFUN_API_KEY` 环境变量回退。

**8. [#12576](https://github.com/can1357/oh-my-pi/pull/12576) [已合并] fix: 为 custom-api provider 填充 compat 字段**
- 修复 Issue #12562：自定义 `streamSimple` 模型 `compat` 为 undefined 导致 openai-completions streamer 崩溃。

**9. [#12559](https://github.com/can1357/oh-my-pi/pull/12559) [已合并] fix: 限制 @-mention 文件遍历的符号链接跟踪**
- 防止循环/超大 symlink 树冻结 TUI，引入 `FollowLinks::Roots` 策略，natives 层修复。

**10. [#12919](https://github.com/can1357/oh-my-pi/pull/12919) CI 优化（review:p1）**
- cargo-deny 改用预编译校验二进制、拆分 addon artifact、精简测试 job，直接降低 CI 时长与算力成本。

---

## 五、功能需求趋势

1. **Provider 生态扩展与适配时效**：Antigravity 429 三个 Issue、Opus 5.5 适配、GPT-6 Luna effort、StepFun 新 provider——新模型/新提供商的快速接入与正确性是最大诉求。
2. **Token 成本控制**：Anthropic prompt cache 放置（#12392）、session_tokens 状态栏（#12754）、Advisor 成本泄漏（#12920）——社区对 token 可视化与省钱机制高度敏感。
3. **模型路由灵活性**：modelRoles 命名预设切换（#7630）、agentModelOverrides 契约（#12862）、fallback 阈值可配置（#6764）。
4. **可观测性与企业集成**：session id 出站请求头注入（#6122）、非生成式 judgment 模型 provider（#12469）。
5. **TUI/终端体验**：Vim 编辑模式（#3299）、终端渲染截断（#12398）、rio OSC 8 超链接。

---

## 六、开发者关注点

- **Antigravity 429 是当前最大信任危机**：主 Issue 关闭但最新版仍复现，社区不满情绪在 #12655 积累，需要一次彻底修复或透明的根因说明。
- **长会话稳定性**：性能退化（#12261）、UI 冻结 40 分钟（#12664）、后台作业卡死（#12657）——重度用户（大上下文 + subagent 场景）持续受影响。
- **回归问题频发**：agentModelOverrides 契约回归、prompt cache 修复不彻底、Advisor 行为变化——建议关注发布前的回归测试覆盖。
- **SDK/扩展能力呼声**：暴露内置浏览器给插件（#11091）、ephemeral turns API（PR #11657）、最小契约 subagent prompt（#4991）——插件开发者生态正在成为下一阶段增长点。

> 💡 数据说明：Issue 共 201 条、PR 共 314 条在过去 24 小时内更新，本文仅摘取高互动条目。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

# DeepSeek Harness 社区动态日报
**日期：2026-09-23 | 数据来源：github.com/deepseek-ai/deepseek-harness**

---

## 1. 今日速览

过去 24 小时，DeepSeek Harness 连续发布 **v0.1.7-alpha.1** 和 **v0.1.7-alpha.2** 两个预发布版本，聚焦会话管理体验的大幅升级：新增会话置顶、归档与筛选能力，并优化了消息发送、代码块展示等交互细节。今日无新增 Issue 和 PR 更新，社区讨论处于相对平稳期。

---

## 2. 版本发布

### dsh-v0.1.7-alpha.2
[Release 链接](https://github.com/deepseek-ai/deepseek-harness/releases/tag/v0.1.7-alpha.2)

**体验优化：**
- 稳定会话与工作过程组的滚动跟随，改善历史分页与轮次跳转，减少发送消息瞬间的跳动或重复显示（@imccyu）
- 统一会话区域代码块样式，支持复制/换行，改善差异内容与行号展示（@yixiangihsiang）
- 重新编辑排队消息时保留换行，避免多行内容发送给模型时被合并为一行（@turtle2099）
- Agent Team 成员的初始任务新增“查找队友”和“联系 Lead”的指引

### dsh-v0.1.7-alpha.1
[Release 链接](https://github.com/deepseek-ai/deepseek-harness/releases/tag/v0.1.7-alpha.1)

**体验优化：**
- 侧边栏会话支持置顶、归档管理、筛选、撤销归档及从搜索结果恢复（@Yifffan）
- 归档运行中会话时，列出受影响的回合、子代理、任务和提醒，新增「停止并归档」确认流程（@LegGasai）
- 新增「工作过程展示」「性能与用量」「开发者工具」设置；连续思考与工具调用合并为可折叠过程组，支持简洁/详细/运行中完全展开三种模式；开发者工具默认开启，关闭时仍显示第三方会话标签页（@lsdsjy 等）

---

## 3. 社区热点 Issues

过去 24 小时内无 Issue 更新，本节暂无内容。

---

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新，本节暂无内容。

---

## 5. 功能需求趋势

由于今日无活跃 Issue 数据，以下基于近期 Release 内容推断社区关注方向：

- **会话管理能力**：置顶、归档、筛选等侧边栏管理功能密集落地，反映多会话场景是核心痛点
- **Agent Team 协作**：成员间通信指引、任务编排持续完善，多智能体工作流是重点演进方向
- **过程可视化**：思考过程与工具调用合并为可折叠过程组，用户对执行透明度与信息密度的平衡有明确需求
- **细节体验打磨**：换行保留、滚动跟随、代码块交互等微体验修复频次高，说明 UI 稳定性反馈活跃

---

## 6. 开发者关注点

- **消息可靠性**：多行内容合并成一行这类“小 bug”直接影响 prompt 质量，是开发者高频反馈的痛点
- **用量与性能监控**：「性能与用量」设置的独立，暗示社区对 token 消耗、执行性能的可观测性需求上升
- **长会话操作**：历史分页、轮次跳转、归档运行中会话的确认机制，反映重度用户在长周期任务中的管理负担
- **开发者工具集成**：开发者工具默认开启的设计，表明核心用户群体对调试能力的依赖度较高

---

*本日报基于 GitHub 公开数据自动生成，Issue/PR 部分因数据为空暂缺，建议关注后续版本动态。*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*