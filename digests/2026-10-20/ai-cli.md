# AI CLI 工具社区动态日报 2026-10-20

> 生成时间: 2026-10-20 03:58 UTC | 覆盖工具: 11 个

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
**数据窗口：2026-10-20（过去 24 小时）**

---

## 1. 生态全景

AI CLI 工具已从单纯的“终端对话助手”演进为**多模态、多代理、可嵌入的 Agent 运行时平台**。头部工具（Claude Code、Codex）聚焦服务端稳定性与组织级安全治理，中腰部（Qwen Code、OpenCode、oh-my-pi）在 managed-agent、上下文经济学与 MCP 生态上快速追赶。共同痛点高度收敛：**连接稳定性、上下文溢出处理、token 成本透明度、安全审批的精细化**。与此同时，生态分层明显——Pi 等项目正从 CLI 工具转型为“被嵌入的运行时”，显示该赛道正走向基础设施化。

---

## 2. 各工具活跃度对比

| 工具 | Issues 动态 | PR 动态 | Release | 今日焦点 |
|---|---|---|---|---|
| **Claude Code** | 10+ 热点（多为长期未解） | 仅 1 条（异常低） | ✅ v2.1.304 | 插件权限体系 + API 连接中断积怨 |
| **OpenAI Codex** | 10 热点 + 容量故障集中爆发 | 10 条（机器人高频合入） | ✅ 3 个 alpha（0.164.0-a4/5/6） | 服务端容量/CSP 事故 + Windows 重灾区 |
| **Gemini CLI** | 10 热点 | 10 条（社区贡献活跃） | ✅ v0.66.0-nightly | 子代理可靠性 + AST 感知工具 |
| **OpenCode** | 10 热点（多数为争议性 CLOSE） | 10 条 | ❌ | 计费信任危机 + v2.1 API 破坏性变更 |
| **Qwen Code** | 10 热点 + 10+ CI 抖动 | 10 条 | ✅ v0.25.3 三线同步 | 上下文硬失败 + CI OOM 阻塞 |
| **DeepSeek TUI** | 14 条（10 开/4 闭） | 7 条 | ❌ | 引擎静默冻结 + 20 倍性能优化 PR |
| **Pi** | 66 条更新 | 21 条 | ❌ | compaction 可靠性 + Rex 终端当天闭环 |
| **oh-my-pi** | 65 条更新 | 252 条更新 | ✅ v18.12.3 | MCP 修复主线 + SQLite 数据损坏 P1 |
| **Kimi Code / DeepSeek Harness** | 0 | 0 | ❌ | 无活动 |
| **Copilot CLI** | — | — | — | 摘要生成失败 |

> 📌 活跃度头部：oh-my-pi（PR 252 条）、Pi、Codex；Claude Code PR 冷清但 issue 积怨深，呈现“重运营、轻社区协作”的姿态。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **上下文溢出的优雅降级** | Qwen Code（#14331）、Pi（#9409、PR #11158）、oh-my-pi（#15797）、Codex（#38969）、Gemini CLI（#24246） | 大工具输出/长会话接近上限时应压缩降级而非硬失败或卡死；多工具均在 24h 内有相关修复落地 |
| **Token 成本与缓存经济学** | Claude Code（#103648）、OpenCode（#41976）、Pi（#11142）、oh-my-pi（#15230）、Gemini CLI（#29822） | prompt cache 失效保护、cache-read 计费可见化、thought signature 保持缓存、压缩避免提前触发 |
| **安全审批精细化** | Claude Code（decider:"person"、组织 ceiling）、oh-my-pi（approvalCacheTargets）、Gemini CLI（零依赖沙箱 #19873）、Qwen Code（循环防护 #14828） | 从粗粒度 bypass 走向按文件/按组织的细粒度授权，同时缓解误报（Claude Code #99320 rm 检测） |
| **连接/服务端稳定性** | Claude Code（5 条同族 issue）、Codex（容量 + CSP 事故）、Pi（#4945，85 评论） | 流式中断归因可诊断化是共同诉求，且多工具当日均有服务端异常 |
| **子代理/MCP 可靠性** | Gemini CLI（#22323 状态误报）、oh-my-pi（MCP 三连修复）、Qwen Code（D7 durable）、DeepSeek TUI（#6954） | 状态上报真实性、请求不重复执行、durable 会话恢复 |
| **静默失败治理** | DeepSeek TUI（#6184 冻结无日志）、Qwen Code（指令静默截断 #6526）、Pi（cacheWarming 静默失效） | “宁可报错不要无声吞掉”成为跨社区共识 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 企业级插件权限治理、Desktop/Remote 跨端 | Max 订阅 + 企业开发者 | 闭环产品，mod/hooks 权限体系自建，社区协作开放度最低 |
| **OpenAI Codex** | Computer Use/浏览器代理、BYOK、新订阅层级（Academic） | ChatGPT 生态 + 研究者 | Rust CLI + 守护进程 + 云端运行时（分布式 agent 注册铺路），Windows 支持明显滞后 |
| **Gemini CLI** | 子代理体系、AST 感知工具链、沙箱 | 开源社区 + Google 生态 | TS 开源、社区 PR 驱动，工程质量修复密集（认证误判、签名、原子写入） |
| **Qwen Code** | Managed-agent durable 化、Fault Gate 测试矩阵 | 中文开发者 + 多 agent 重度用户 | 三线同步发布（CLI/Desktop/SDK），测试体系化程度高但 CI 基础设施承压 |
| **OpenCode** | 多项目/多会话工作流、可访问性 | 多会话重度用户 + Go 套餐付费者 | 快速产品化迭代，但计费透明度与 UI 改版引发信任问题 |
| **Pi / oh-my-pi** | 多 Provider 适配、可嵌入运行时、MCP 生态 | 下游框架开发者 + 极客 | Pi 是“被嵌入的运行时”（HTML 导出、扩展 API），oh-my-pi 在其上构建 Agent 层，PR 吞吐全网最高 |

---

## 5. 社区热度与成熟度

- **高活跃 + 快速迭代**：oh-my-pi（252 PR/日，版本号已到 v18.x，高频小步快跑）、Codex（24h 三个 alpha）、Pi（Issue→PR 当天闭环，响应速度标杆，#10741 十天修复）
- **高热度但成熟度告警**：Claude Code——issue 动辄 6 月起的长期未解积怨 + PR 近乎冻结，社区情绪转向疲惫；OpenCode——争议 issue 批量关闭但 👍 未消化，处于信任修复期
- **稳步上升**：Gemini CLI、Qwen Code——社区贡献健康、路线图清晰，但分别受子代理可靠性、CI 基础设施拖累
- **长尾/停滞**：Kimi Code、DeepSeek Harness 零活动；DeepSeek TUI 靠 contribution-gate 机制维持小粒度贡献，社区规模小但响应快

---

## 6. 值得关注的趋势信号

1. **“可诊断性”成为新的竞争维度**：连接中断类问题在 Claude Code、Codex、Pi 同时爆发，用户的核心诉求已从“修复”升级为“归因”——错误信息需区分网络/服务端/客户端。工具的可观测性（DeepSeek TUI #6011、oh-my-pi usage 统计修复）将直接影响用户留存。

2. **安全模型进入“细粒度 + 人工兜底”阶段**：Claude Code 的 `decider: "person"`、组织策略 ceiling，oh-my-pi 的按文件审批缓存，Gemini CLI 的零依赖 OS 沙箱——行业正从“bypass vs 拦截”二元模式走向可组合的权限体系。但 Claude Code #99320 的误报说明**安全收紧与开发效率的摩擦尚未解决**，为第三方安全层工具留下空间。

3. **上下文经济学是最大公约数**：几乎所有头部工具 24h 内都有缓存/压缩相关修复。prompt cache 保护（Pi #11142）、图片预算驱逐策略（oh-my-pi #15230）、压缩提前触发（oh-my-pi #15797）表明**上下文管理已从功能问题演变为成本问题**，直接关联商业化订阅的性价比感知（OpenCode 的 $40-55 计费差额争议即为例证）。

4. **CLI → 可嵌入运行时的架构迁移**：Pi 的扩展 API 与 HTML 导出、Codex 的分布式 agent 注册与签名断言、Qwen Code 的 ACP/daemon 化——头部项目都在为“被宿主嵌入”而非“被人直接使用”做架构准备，这预示 AI CLI 层将出现新的分层：运行时内核 / 交互前端 / 编排框架。

5. **Windows 与企业环境是普遍短板**：Codex（Computer Use 卡死、杀软冲突、MSIX 沙箱）、Pi（输入重绘）、Qwen Code（npm 链路）、DeepSeek TUI——无一例外 Windows 支持落后于 macOS/Linux，企业部署场景（MDM、代理、杀软）仍是蓝海。

**给开发者的建议**：生产环境优先关注服务端状态再排查本地（当日 Codex/Claude Code 均有服务端事故）；长会话场景订阅上下文管理与缓存相关 issue；企业选型时评估各工具的权限模型成熟度与 Windows 兼容性；二次开发者可重点评估 Pi/oh-my-pi 这类高 PR 吞吐、响应迅速的可嵌入运行时。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-10-20 | 来源：anthropics/skills**

---

## 一、热门 Skills 排行（PR）

> 注：本期 PR 评论数数据缺失，按更新活跃度与关联 Issue 讨论度综合排序。

| # | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | **skill-creator 修复系列**（[#1997](https://github.com/anthropics/skills/pull/1997)、[#1961](https://github.com/anthropics/skills/pull/1961)、[#1298](https://github.com/anthropics/skills/pull/1298)） | 官方“造 Skill 的 Skill” | 元 Skill 自身质量问题集中爆发：YAML 解析错误、eval viewer XSS/DNS rebinding 安全漏洞、Windows 兼容性、trigger 评测误报。关联 Issue [#1383](https://github.com/anthropics/skills/issues/1383)、[#1394](https://github.com/anthropics/skills/issues/1394) | OPEN |
| 2 | **mcp-builder 修复** [#1742](https://github.com/anthropics/skills/pull/1742) | 适配 mcp>=2.0 API 变更（streamable_http_client、自定义 headers） | MCP 生态快速迭代导致官方 Skill 跟进滞后；关联 Issue [#1390](https://github.com/anthropics/skills/issues/1390)（评测脚本对真实 MCP 服务器全 0 分） | OPEN |
| 3 | **notion-spec-to-implementation + quantitative-resume-auditor** [#1245](https://github.com/anthropics/skills/pull/1245) | 产品/技术规格 → Notion 任务拆解；简历量化审计 | 规格驱动的项目管理工作流，长期未合并但持续更新至 10 月 | OPEN |
| 4 | **md2video-audio** [#1703](https://github.com/anthropics/skills/pull/1703) | Markdown → 带真人语音的 MP4 视频（零成本） | 内容创作自动化方向代表作 | OPEN |
| 5 | **scnet-hpc** [#1615](https://github.com/anthropics/skills/pull/1615) | SCNet HPC 集群 SSH + Slurm 作业操作 | 科学计算/HPC 是稀缺垂直方向 | OPEN |
| 6 | **document-typography** [#514](https://github.com/anthropics/skills/pull/514) | AI 生成文档的排版质量控制（孤行、寡行、编号对齐） | 指出“用户不会主动要求好排版”的隐性需求 | OPEN |
| 7 | **ODT skill** [#486](https://github.com/anthropics/skills/pull/486) | OpenDocument 创建/模板填充/转 HTML | 开放格式文档处理长期空白 | OPEN |
| 8 | **architecture-advisor** [#2040](https://github.com/anthropics/skills/pull/2040) | 架构模式选型并输出书面论证 | 作者 harness SDD 套件第 4 个 Skill（配套 #2039），关注度上升期 | OPEN |

---

## 二、社区需求趋势（Issues 提炼）

1. **安全与信任机制**（最热）：[#492](https://github.com/anthropics/skills/issues/492)（46 评论）——社区 Skill 冒用 `anthropic/` 命名空间，用户误授高权限；配套诉求还有 eval viewer 的 XSS 修复（#1394）。
2. **组织级 Skill 分发**：[#228](https://github.com/anthropics/skills/issues/228)（16 评论）——需要企业内共享技能库，替代当前 Slack 传 .skill 文件的原始方式。
3. **评测（eval）工具链可靠性**：[#556](https://github.com/anthropics/skills/issues/556)（12 评论）、[#1383](https://github.com/anthropics/skills/issues/1383)——trigger 评测 0% 触发率、Windows 失败、基准测试静默错误。
4. **Agent 记忆与治理**：[#1329](https://github.com/anthropics/skills/issues/1329)（compact-memory 紧凑符号化记忆）、[#1385](https://github.com/anthropics/skills/issues/1385)（推理质量门禁流水线）、[#412](https://github.com/anthropics/skills/issues/412)（agent-governance）。
5. **上下文效率**：[#1487](https://github.com/anthropics/skills/issues/1487)——claude-api Skill 单次注入 ~156k tokens 打爆上下文窗口。
6. **文档类 Skill 质量打磨**：docx 系列 bug（[#2018](https://github.com/anthropics/skills/issues/2018)、PR #1792/#1734）、插件重复安装问题（[#189](https://github.com/anthropics/skills/issues/189)）。

**趋势总结**：需求重心正从“新增功能型 Skill”转向 **元能力（创建、评测、安全、分发）** 的基础设施建设。

---

## 三、高潜力待合并 Skills（活跃 OPEN PR）

- **[#1997](https://github.com/anthropics/skills/pull/1997) YAML frontmatter 解析修复** — 10/19 仍活跃更新，修的是官方核心工具 bug，合并概率高
- **[#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder 适配 mcp>=2** — 解决真实兼容性痛点，阻断下游 MCP 构建
- **[#1245](https://github.com/anthropics/skills/pull/1245) Notion 规格→实施** — 挂起 4 个月仍持续维护，项目管理方向稀缺
- **[#1792](https://github.com/anthropics/skills/pull/1792) docx LibreOffice 超时修复** — 小而美的可靠性修复，典型易合并型
- **[#2040](https://github.com/anthropics/skills/pull/2040) architecture-advisor** — 成套 SDD 工具链一部分，作者持续投入
- **[#1681](https://github.com/anthropics/skills/pull/1681) package_skill.py 可独立执行** — 降低 Skill 打包门槛，与元工具趋势契合

---

## 四、生态洞察（一句话）

> **社区最集中的诉求是“让 Skill 生态本身可信、可评测、可分发”**——安全命名空间隔离（#492）、组织共享（#228）和 skill-creator/eval 工具链的可靠性修复占据了讨论的绝对主流，标志 Skills 生态正从野蛮生长走向工程化治理阶段。

---

# Claude Code 社区动态日报 — 2026-10-20

---

## 1. 今日速览

今日发布 **v2.1.304**，聚焦插件与 Mod 权限体系：当先运行的插件跳过 mod hooks 时会在 transcript 中显式提示，并为 `tool.check` 引入 `decider: "person"` 机制，将审批权收敛到人工确认。社区方面，**API 连接中断类问题持续发酵**（#70217、#69336 等多个高热度 issue 同日活跃），Desktop Code tab 与 Remote Control 的多个新 bug 也引发关注。

---

## 2. 版本发布

### v2.1.304
- **插件跳过 hooks 透明化**：当先运行的插件跳过 mod 的某个 hook 时，transcript 中会新增一行提示，注明事件名与插件名。
- **`decider: "person"` 审批机制**：mod 的 `tool.check` 应答可携带此字段，意味着只有权限对话框或宿主回调可以批准请求，其余情况按 mod 规则拒绝——进一步收紧了自动化审批边界。

🔗 [Release v2.1.304](https://github.com/anthropics/claude-code/releases)

---

## 3. 社区热点 Issues（Top 10）

### 🔴 网络连接稳定性（今日最大痛点集群）

**#70217 — [Bug] Anthropic API Error: Connection closed mid-response**
macOS 平台，工作中频繁中断响应，用户直言“浪费真实时间和金钱”。23 条评论、16 👍，自 6 月持续至今仍未解决。
🔗 [Issue #70217](https://github.com/anthropics/claude-code/issues/70217)

**#69336 — API Error: Connection closed mid-response（新上下文窗口立即触发）**
Linux + Agent SDK 场景，24 👍 显示影响面广，与 #70217 属同族问题，官方尚未给出根因。
🔗 [Issue #69336](https://github.com/anthropics/claude-code/issues/69336)

**#103058 — 并发会话下 7 天内 291 次中断流式连接**
新报但数据详实（276 次集中于并发场景），对多会话重度用户是重要信号。
🔗 [Issue #103058](https://github.com/anthropics/claude-code/issues/103058)

**#102603 — 自 10/14 下午起持续 "Waiting for API response"**
用户反馈“Claude Code 完全不可用”，可能指向近期服务端或版本回归。
🔗 [Issue #102603](https://github.com/anthropics/claude-code/issues/102603)

**#90005 — "The response stopped arriving" 单日 33 次且无诊断信息**
核心诉求：错误信息缺乏归因，无法区分网络、服务端还是客户端问题。
🔗 [Issue #90005](https://github.com/anthropics/claude-code/issues/90005)

### 🟠 Desktop / Remote Control

**#102132 — Code tab next-step box 可在回复写出前结束回合**（16 评论 / 22 👍）
Windows Desktop 的 `wrap_up` + `ask` 时序 bug，高赞新 issue，影响新交互功能可用性。
🔗 [Issue #102132](https://github.com/anthropics/claude-code/issues/102132)

**#102534 — Remote Control 空闲即断连，且需从 Mac 端发消息才能恢复**
跨设备工作流的核心障碍。
🔗 [Issue #102534](https://github.com/anthropics/claude-code/issues/102534)

### 🟡 权限与安全

**#99320 — bypass 模式下 inline-shell rm 检查误报**
2.1.288 引入的 rm 检测对 `$'...'` ANSI-C 引号脚本产生误报，是安全收紧与开发效率冲突的典型案例。
🔗 [Issue #99320](https://github.com/anthropics/claude-code/issues/99320)

**#103648 — CLI 静默将计费切到 Console org 而非 Max 订阅**
#60901 的回归，涉及真金白银，macOS 用户需警惕计费去向。
🔗 [Issue #103648](https://github.com/anthropics/claude-code/issues/103648)

### 🔵 性能

**#97593 — macOS content filter 变更后 API 连接 EPIPE 死循环打满单核**
Socket 永不关闭、无限重试写入，属明确的资源泄漏类缺陷。
🔗 [Issue #97593](https://github.com/anthropics/claude-code/issues/97593)

---

## 4. 重要 PR 进展

> ⚠️ 说明：过去 24 小时内仅有 **1 条** PR 更新，无法凑足 10 条，以下为全部有效内容。

**#99540 — sec-default: 组织级工具上限对个人安装的插件同样生效**
官方成员 @poteat 提交的安全策略 PR：策略 mod 持有组织对某 connector 工具的审批上限（ceiling），该上限覆盖个人安装的所有插件，且 mod 的每个决定性 hook 均携带 `.catch` 兜底。这与今日 v2.1.304 的 `decider: "person"` 发布相呼应，显示 Anthropic 正在系统性构建**插件生态下的组织安全边界**。
🔗 [PR #99540](https://github.com/anthropics/claude-code/pull/99540)

---

## 5. 功能需求趋势

从今日 Issues 提炼，社区关注方向排序如下：

| 方向 | 代表 Issue | 信号强度 |
|---|---|---|
| **网络/流式传输稳定性与可诊断性** | #70217, #69336, #103058, #102603, #90005 | ⭐⭐⭐⭐⭐ 长期未解，积怨最深 |
| **Desktop Code tab / Remote Control 成熟度** | #102132, #102534, #101323, #100742 | ⭐⭐⭐⭐ 新功能密集上线伴随密集 bug |
| **权限/安全模型精细化** | #99320, #103644, #103624 | ⭐⭐⭐⭐ 安全收紧带来的误报与易用性冲突 |
| **Hooks/Skills 生命周期控制** | #102858, #89669 | ⭐⭐⭐ 社区希望 skill hooks 可限定作用域而非"会话级持久" |
| **性能（CPU/快照开销）** | #97593, #96492 | ⭐⭐⭐ bypass 模式下 git status 快照与死循环重试 |
| **计费/认证透明度** | #103648 | ⭐⭐ 订阅切换静默计费 |
| **UX 细节** | #99836（按文件夹而非 repo 分组）、#96694（原地回退对话）、#103652（shell 命令默认超时） | ⭐⭐ |

---

## 6. 开发者关注点

1. **连接中断是头号痛点**：多个高赞 issue 横跨 macOS/Linux/Windows 与 CLI/Agent SDK，共同诉求是——不仅要修复，还要**提供可归因的错误信息**（网络？服务端？模型？）。
2. **安全机制的双刃剑**：rm 检查、组织策略 ceiling、`decider: "person"` 等收紧措施接连落地，但误报（#99320）和"权限丢失、反复询问"（#103624）显示自动化与人工审批的平衡仍在磨合。
3. **Desktop 端快速迭代中的回归**：Code tab 的 next-step box、dictation 实时转写、Remote Control 均为新功能，用户既是尝鲜者也是 QA。
4. **hooks 语义期望偏差**：文档承诺 skill hooks "会话级持续"，但实际（#102858）与期望（#89669 的作用域限定）存在双向落差，值得插件开发者关注。
5. **成本敏感度上升**：计费回归（#103648）与中断重试导致的 token 浪费（#70217）表明，Max 订阅用户对隐性成本损耗容忍度低。

---

*数据截至 2026-10-20，来源：github.com/anthropics/claude-code。Issue/PR 状态以链接实时内容为准。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-10-20

## 1. 今日速览

Codex Rust CLI 密集发布三个 alpha 版本（0.164.0-alpha.4/5/6），迭代节奏明显加快。Issue 区今日出现多个“模型容量”和 CSP 相关的服务端问题，且 Windows 平台相关问题持续占据热榜。PR 方面，copyberry 机器人高频合入大量基础设施改进，涵盖运行时认证、Guardian 审查和 Academic Researchers 计划支持等。

## 2. 版本发布

- **rust-v0.164.0-alpha.6** / **alpha.5** / **alpha.4**：24 小时内连发三个 alpha，均为预发布迭代，官方未附详细 changelog，可推断 0.164.0 正式版临近。
  链接：github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.6

## 3. 社区热点 Issues

1. **#54841 [BYOK] Work 模式下启用本地浏览器/Computer Use 工具后无法提交消息**（👍16，29 评论）— BYOK 用户被完全阻断，是近期呼声最高的功能性 bug。
   github.com/openai/codex/issues/54841
2. **#51524 [Windows] Computer Use 在 get_window_state 卡死，无法读取 Chrome/Edge URL**（32 评论）— 10 月 6 日回归，影响 Windows Computer Use 核心流程。
   github.com/openai/codex/issues/51524
3. **#35871 Windows 沙箱遇 MSIX 版 pwsh 报 CreateProcessAsUserW 错误 5**（18 评论）— Store 版 PowerShell 用户无法使用沙箱，长期未解。
   github.com/openai/codex/issues/35871
4. **#38969 macOS 桌面端自动上下文压缩必现 "error decoding response body"**（13 评论）— 长会话工作流被迫中断。
   github.com/openai/codex/issues/38969
5. **#48369 配额用尽后发送按钮全局禁用，无法切换 BYOK**（12 评论，👍5）— 严重影响付费团队用户的可用性。
   github.com/openai/codex/issues/48369
6. **#51867 Windows 云端 Computer Use 无法启动 app-server（program not found）**（12 评论）— 与 #51524 共同反映 Windows Computer Use 链路脆弱。
   github.com/openai/codex/issues/51867
7. **#54774 [Dots] 删除后无法新建，报 cloud_aeon_recovery_required**（11 评论）— 10 月 14 日起持续故障。
   github.com/openai/codex/issues/54774
8. **#55452 [今日新报] Web + Windows 端无法发消息，CSP inline-script 违规，跨账号跨网络复现**— 疑似服务端/前端部署事故，值得密切跟踪。
   github.com/openai/codex/issues/55452
9. **#55444 / #55443 / #55447 [今日新报] 多平台集中上报 "Selected model is at capacity"**— 三条新 issue 同时指向容量/限流问题，疑似当日服务端异常。
   github.com/openai/codex/issues/55444
10. **#53778 Windows 守护进程每小时经 powershell.exe 管道执行安装脚本，被 McAfee 判为无文件恶意软件**— 安全软件冲突 + 更新机制设计问题，企业环境影响大。
    github.com/openai/codex/issues/53778

## 4. 重要 PR 进展

1. **#55387 新增 Academic Researchers 计划支持**（`sci`/`sci_plus` 计划识别、限流与展示）— 新订阅层级上线信号。
2. **#55413 + #55410 运行时认证重构**：`RuntimeAuthManager` 跨请求共享认证，区分 credential source 与 auth owner，为多账号/凭证刷新打基础。
3. **#55402 + #55398 运行时 Agent 注册与签名断言**：OAuth/PAT/API key 三种方式注册，含签名密钥与幂等重试——明显在为分布式运行时实例铺路。
4. **#55395 Guardian 审查中断回滚以保留证据**：避免取消的审查污染会话证据链。
5. **#55391 Guardian 上下文去重原生 agent 消息**：节省输入预算、防止挤占新证据。
6. **#55384 沙箱前可执行文件查找拒绝可替换符号链接**— 沙箱安全加固。
7. **#55381 TUI 后端会话独立管理**：多后端会话公平轮询，暂停一个不影响其他。
8. **#55401 环境断连通知延迟至恢复失败后发出**：减少误报的 Recovering 状态机改进。
9. **#55409 TUI 在服务器 shutdown 拒绝后安全重试启动**：避免重复提交风险。
10. **#55442 Daemon 特性覆盖不匹配时提示恢复**：防止特性配置静默回退到 embedded 模式。

## 5. 功能需求趋势

- **Windows 平台稳定性**：热榜中过半 issue 带 `windows-os` 标签，Computer Use、沙箱、桌面端启动均为重灾区。
- **BYOK / 自定义模型**：#54841、#55444、#54584 等显示 BYOK 用户遭遇认证、限流、压缩多类阻断，是摩擦最大的用户群。
- **Computer Use / 浏览器自动化**：get_window_state 卡死、原生对话框（alert/confirm）不可见（#24087、#40925）表明社区希望浏览器代理能力更完整。
- **上下文管理与压缩**：压缩失败、stale 摘要（#54584）是长会话用户的核心诉求。
- **Linux 桌面体验**：原生窗口装饰等桌面集成需求（#38595，👍7）。

## 6. 开发者关注点

- **容量/服务端可用性**：今日多条 "model at capacity"、server_overloaded、CSP 发送失败集中出现，建议优先排查服务端状态再排查本地。
- **安全软件冲突**：Windows 后台更新机制被杀软拦截（#53778），企业部署需注意。
- **数据安全**：#37998 子代理误执行 `git clean -fX` 删除整个 ignored 目录，提醒开发者对破坏性命令保持审批拦截。
- **BYOK 用户谨慎升级**：当前 BYOK + 本地工具组合存在阻断性 bug，建议关注 #54841 修复进展。
- **杀软/MSIX/沙箱三重冲突**：Windows 企业环境下 Store 版工具链与 Codex 沙箱兼容性差，建议使用非 MSIX 版 PowerShell。

---
*数据来源：github.com/openai/codex · 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-10-20

## 📌 今日速览

今日发布 nightly 版本 **v0.66.0**，包含终端滚动缓冲区保留和 HTTP 流式数据解码两项修复。Issue 区聚焦 **Agent 子代理可靠性**（挂起、错误成功上报）与 **AST 感知工具**的探索方向。PR 区贡献活跃，涉及沙箱、认证误判、thought signature 等多项重要修复。

---

## 🚀 版本发布

**v0.66.0-nightly.20261020.g76e4d7c04**（[Release](https://github.com/google-gemini/gemini-cli/releases)）
- `fix(ui)`: 视口刷新时保留终端滚动缓冲区（PR #29792）
- `fix(cli)`: 使用 `StringDecoder` 正确解码流式 Node HTTP activity chunks，修复多字节 UTF-8 字符被截断为乱码的问题

---

## 🔥 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — 子代理撞上 MAX_TURNS 却上报 `success/GOAL`，掩盖了实际中断。状态上报失真会让用户误以为任务完成，属 P1 级正确性问题，13 条评论讨论热烈。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** — 通用代理挂起：简单如建文件夹的操作也会无限等待，用户需等待一小时以上。8 👍 反映影响面较广，P1。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** — 利用模型原生 bash 能力 + 零依赖 OS 沙箱与执行后意图路由。大工程量提案，探索安全性与模型原生工作流兼顾的架构方向。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — AST 感知文件读取/搜索/代码库映射 EPIC，旨在减少 token 噪音与错位读取，是当前质量优化的重要方向（配套 #22746、#22747）。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — 模型几乎不主动使用自定义 skills 和子代理，需显式指令才触发。反映工具选择/路由策略的短板。

6. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** — Browser Agent 完全忽略 `settings.json` 覆盖（如 `maxTurns`），配置读取与合并链条存在断裂。

7. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** — 工具数量超过 128 个时触发 API 400 错误，需要更智能的工具作用域裁剪。

8. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)** — output hook（get-shit-done）在输出用户摘要时导致 CLI 崩溃，P1 级稳定性问题。

9. **[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)** — 终端 resize 时的高性能无闪烁渲染，需迁移到 RenderStatic 并分批更新历史，与今日发布的 scrollback 修复方向一致。

10. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** — browser 子代理在 Wayland 下失败，Linux 桌面用户受阻，P1。

---

## 🔧 重要 PR 进展

1. **[#29835](https://github.com/google-gemini/gemini-cli/pull/29835)** — 修复 `isAuthenticationError` 用非锚定子串匹配 `'401'`，导致端口号/行号中的 401 误触发 OAuth 重认证。P2。

2. **[#29828](https://github.com/google-gemini/gemini-cli/pull/29828)** — 确保所有含 function call 的模型轮次携带 thought signature，修复多轮对话中历史工具调用导致 HTTP 400 的问题。

3. **[#29834](https://github.com/google-gemini/gemini-cli/pull/29834)** — 保留 `thoughtsTokenCount` 等扩展 token 用量元数据，统一 a2a-server 与 core 的按轮上报。P1。

4. **[#29749](https://github.com/google-gemini/gemini-cli/pull/29749)** — 原子写入修复：不再静默覆盖只读文件（0444）或拆断硬链接，安全性改进。

5. **[#29831](https://github.com/google-gemini/gemini-cli/pull/29831)** — ripgrep 搜索超时改为显式报错，而非返回部分结果或错误的 "No matches found"。

6. **[#29822](https://github.com/google-gemini/gemini-cli/pull/29822)** — 限制 `total_max_matches` 上限并改进上下文溢出提示，防止宽泛 grep 查询撑爆上下文窗口。

7. **[#29718](https://github.com/google-gemini/gemini-cli/pull/29718)** — Rootless Podman 沙箱追加 `--userns=keep-id`，修复非 root 用户 `EACCES` 错误。P2。

8. **[#29726](https://github.com/google-gemini/gemini-cli/pull/29726)** — 修复 POSIX 下命令名被误识别为 `trap`，导致 `sandbox.toml` 逐命令规则永不生效的沙箱权限漏洞。

9. **[#29744](https://github.com/google-gemini/gemini-cli/pull/29744)** — `/ide enable` 在 VS Code 重载窗口后可自动重连 IDE companion 扩展，改善 IDE 集成健壮性。

10. **[#29703](https://github.com/google-gemini/gemini-cli/pull/29703)** — 原子写入临时文件名控制在 `NAME_MAX` 内，修复 215-255 字节长文件名 `ENAMETOOLONG`。

---

## 📈 功能需求趋势

- **子代理体系深化**（最热）：本地子代理 Sprint、并行协作/共享内存（#18287）、子代理轨迹通过 `/chat share` 可见（#22598）、symlink 识别（#20079）
- **AST 感知工具链**：读取、搜索、代码库映射的系统化评估（#22745/#22746/#22747）
- **Token 效率**："Tactful Extraction" 外科手术式读取（#19561）、持久化文件任务追踪替代 WriteToDo（#18836）
- **沙箱与安全**：零依赖 OS 沙箱（#19873）、阻止破坏性命令（#22672）
- **浏览器代理韧性**：会话接管、锁恢复（#22232）
- **终端渲染性能**：resize 无闪烁、scrollback 保留（#21924，今日已部分落地）

---

## 🎯 开发者关注点

1. **子代理可靠性是最大痛点**：挂起（#21409）、状态误报（#22323）、配置失效（#22267）多个 P1 并存，用户被迫手动禁用子代理规避问题。
2. **上下文/token 管理焦虑**：宽泛搜索撑爆上下文、大文件读取"消防水管"式灌入是高频抱怨，多个 PR/Issue 均围绕裁剪与精读。
3. **配置与集成边界**：symlink 不识别、settings.json 覆盖失效、容器沙箱内 IDE 集成不可用，说明配置合并与文档需加强。
4. **长文件名/非 UTF-8 环境等边缘 case** 持续被社区 PR 修复，欢迎贡献者参与（多个 `help wanted` 标签）。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-20

## 📌 今日速览

今日无新版本发布，但仓库活动非常活跃。最受关注的是 **#51343（60 分钟空闲 Location 驱逐会中断运行中的会话）**，这是唯一保持 OPEN 状态的高热度 Issue，直接影响长时间运行的 Agent 任务。PR 方面，**v2.1 API 破坏性变更重构（#57260）** 和 **TUI 屏幕阅读器模式（#56959）** 是值得重点跟踪的方向性变化。

---

## 🔥 社区热点 Issues

1. **[#51343](https://github.com/anomalyco/opencode/issues/51343) — 60m 空闲驱逐中断运行中会话**（OPEN）
   停靠在 `question` 等待用户输入的会话因不产生持久事件而被 Location 过期机制中断。14 条评论、10 👍，是当前唯一的 OPEN 高热度问题，涉及核心会话生命周期设计，值得所有长任务用户关注。

2. **[#48837](https://github.com/anomalyco/opencode/issues/48837) — V2 界面摧毁多项目/多 Agent 工作流**（CLOSED，19 👍）
   20+ 会话用户反馈新版 UI 强制上线、无法回退旧版，生产力严重受损。代表 9 月 UI 改版引发的持续社区 backlash。

3. **[#48958](https://github.com/anomalyco/opencode/issues/48958) — 新布局导致 UI 不可用**（CLOSED，13 👍）
   项目切换、worktree 快速任务等基础操作受阻，与上一条同属 UI 改版争议核心。

4. **[#48956](https://github.com/anomalyco/opencode/issues/48956) — 请求恢复持久左侧栏布局**（CLOSED，15 👍）
   社区给出建设性方案：在新 UI 中提供持久侧边栏（项目 → 工作区 → 会话）配置项。

5. **[#41976](https://github.com/anomalyco/opencode/issues/41976) — Go 套餐 $60 配额 6 天耗尽但本地仅 $14.80**（CLOSED）
   指出 cache-read 计费不可见、文档缺失，本地成本计量误导用户。

6. **[#38255](https://github.com/anomalyco/opencode/issues/38255) — 不同用量 Dashboard 数据不一致**（CLOSED）
   月度配额显示 100% 但明细仅 $10，暴露计费统计口径混乱。

7. **[#41206](https://github.com/anomalyco/opencode/issues/41206) / [#41391](https://github.com/anomalyco/opencode/issues/41391) / [#42549](https://github.com/anomalyco/opencode/issues/42549) — 配额与使用历史不匹配系列**（CLOSED）
   多个 Issue 相互印证：周/月/5 小时滚动窗口的配额计算与实际消费存在系统性偏差。

8. **[#49188](https://github.com/anomalyco/opencode/issues/49188) — muse-spark-1.3 `encrypted_content` 错误**（CLOSED）
   新对话中 Provider 上游请求失败，同主题还有 #48962、#49515，是 9 月中旬的回归性故障。

9. **[#48455](https://github.com/anomalyco/opencode/issues/48455) / [#43080](https://github.com/anomalyco/opencode/issues/43080) / [#49787](https://github.com/anomalyco/opencode/issues/49787) — 客户端完全无响应系列**（CLOSED）
   多模型、重装后仍无任何回复，属于影响可用性的高频故障。

10. **[#52713](https://github.com/anomalyco/opencode/issues/52713) / [#32153](https://github.com/anomalyco/opencode/issues/32153) — 订阅支付后未激活**（CLOSED）
    付费成功但 Go 未开通、客服邮件无回音，反映计费/客服链路问题。

---

## 🔧 重要 PR 进展

1. **[#57260](https://github.com/anomalyco/opencode/pull/57260) — v2.1 API 轻量破坏性变更**（OPEN）
   统一公共 API 命名与数据结构，SDK 使用者需迁移；旧数据经边界解码器兼容，无需迁移数据库。

2. **[#57241](https://github.com/anomalyco/opencode/pull/57241) — 将 Provider 压缩窗口存入 native 字段**（CLOSED）
   统一 compaction 数据存储结构，消除孤立的 `providerContext`。

3. **[#56959](https://github.com/anomalyco/opencode/pull/56959) — TUI 屏幕阅读器模式**（OPEN）
   可访问性重大补全，解决全屏重绘导致读屏器无法跟随的问题。

4. **[#57269](https://github.com/anomalyco/opencode/pull/57269) — ⌘⇧T 重开最近关闭的侧栏标签**（OPEN）
   浏览器式标签恢复体验，侧栏聚焦时恢复侧栏标签，其他位置恢复会话标签。

5. **[#57268](https://github.com/anomalyco/opencode/pull/57268) — 分组文件工具中保留诊断信息**（OPEN）
   `tool.execute.after` 钩子附加的 `diagnostics` 现在在 Web/桌面端也能展示。

6. **[#54251](https://github.com/anomalyco/opencode/pull/54251) — 中断时保留已完成的 execute 结果**（OPEN）
   中断执行仍保留已完成嵌套调用的预览与日志，改善长任务容错。

7. **[#56687](https://github.com/anomalyco/opencode/pull/56687) — 会话轮次进行中跳过 warming**（CLOSED）
   修复 keep-alive 定时器与进行中请求冲突的问题。

8. **[#56715](https://github.com/anomalyco/opencode/pull/56715) — SSE 事件大小按帧而非按块计量**（CLOSED）
   修复 16 MiB 限制误判导致连接被误杀的问题。

9. **[#55894](https://github.com/anomalyco/opencode/pull/55894) — 新会话遵循 Agent 配置的 model**（CLOSED）
   修复 `agents.<id>.model` 配置被忽略、只有 `-m` 参数生效的问题。

10. **[#56859](https://github.com/anomalyco/opencode/pull/56859) / [#55869](https://github.com/anomalyco/opencode/pull/55869) — 配置与分发包修复**（CLOSED）
    前者修复自定义 provider 丢失 `npm`/`baseURL` 导致不可路由；后者为平台二进制包声明 `libc`，修复 npm 安装匹配失败。

---

## 📈 功能需求趋势

- **UI 布局可配置化**（最强呼声）：恢复持久左侧栏、垂直会话列表、新旧 UI 切换选项（#48837/#48956/#48966/#48951/#49043）
- **配额透明度**：cache-read 计费可见化、多 Dashboard 口径统一、明细页百分比正确（#41976 系列 + #45858）
- **可访问性**：屏幕阅读器支持（PR #56959 响应 #39368）
- **长任务稳定性**：空闲驱逐、中断保留结果、会话生命周期（#51343、PR #54251）
- **键盘/终端体验**：⌘⇧T 标签恢复、keypad 键位映射、Home/End 行为一致性

---

## ⚠️ 开发者关注点

1. **计费信任危机**：Go 套餐配额与实际用量差额可达 $40–55，多个独立 Issue 交叉印证，是当前最大的用户信任风险点。
2. **V2 UI 改版余波**：9 月强制改版引发的争议 Issue 今日集中关闭，但 15–19 👍 说明需求未消，侧边栏配置项仍是被压抑的高频需求。
3. **v2.1 迁移成本**：#57260 的 API 命名/数据结构变更虽“轻量”，SDK 消费方需尽早评估。
4. **Provider 上游稳定性**：muse-spark 系列 `encrypted_content` 错误、“无响应”类问题反复出现，重装均无法解决。
5. **付费/客服链路**：支付未激活、邮件无回复的问题长期挂起（#32153 自 6 月起），影响付费转化。

---
*数据来源：anomalyco/opencode · 统计窗口 2026-10-20*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-10-20

## 📌 今日速览

Qwen Code 今日发布 **v0.25.3 正式版**（CLI、Desktop、TypeScript SDK 三线同步），重点更新 Test Failure Explorer 模型生成布局与 managed-agent 修复。社区讨论聚焦 **上下文窗口管理**（大工具输出导致运行失败 #14331）与 **CI 基础设施稳定性**（SDK Java 构建全面 OOM #14823）两大痛点。此外，@wenshao 的 managed-agent D7 阶段（java_durable admission profile）持续推进，Fault Gate 测试矩阵快速扩张。

---

## 🚀 版本发布

### [v0.25.3](https://github.com/QwenLM/qwen-code/releases)
- **Features**: Test Failure Explorer 新增可选的模型生成布局，带校验与固定视图回退机制（[#14269](https://github.com/QwenLM/qwen-code/pull/14269)）
- **无破坏性变更**

### [desktop-v0.25.3](https://github.com/QwenLM/qwen-code/releases)
- 修复 managed-agent 中 team_plan_approval 进入 journal-only interrupted-turn settle 的问题（#13847，@wenshao）

### [sdk-typescript-v0.1.21](https://github.com/QwenLM/qwen-code/releases)
- SDK 捆绑 CLI v0.25.3，与主分支同源构建

### Nightly: v0.25.3-nightly.20261019
- feat(daemon): 支持面向 session 的 Skill 与 Extension 刷新（[#14050](https://github.com/QwenLM/qwen-code/pull/14050)，@callmeYe）

---

## 🔥 社区热点 Issues

1. **[#14331](https://github.com/QwenLM/qwen-code/issues/14331) — 大工具输出撑爆上下文窗口，运行硬失败而非优雅降级**
   P2 bug，5 条评论持续讨论中。当工具返回结果过大且对话接近上下文上限时，模型流直接报错终止，用户丢失整轮对话。这是当前 context-performance 路线图上最受用户关注的体验问题。

2. **[#14823](https://github.com/QwenLM/qwen-code/issues/14823) — SDK Java CI 在 ECS 池全面 OOM**
   今日新建即获 3 条评论。`packages/cli` 的 `tsc --build` 触发 V8 堆耗尽，加上 Node 不在 PATH，导致整个自托管 CI 池阻塞，属高优先级基础设施故障。

3. **[#14122](https://github.com/QwenLM/qwen-code/issues/14122) — D7: java_durable admission profile 总纲（OPEN）**
   managed-agent Stage D 最后一个未完成切片的记账 issue，@wenshao 主导，是当前 multi-agent durable 化路线的核心。配套切片 [#14166](https://github.com/QwenLM/qwen-code/issues/14166)（D7-2 original-command reconciliation）已关闭，进展积极。

4. **[#14751](https://github.com/QwenLM/qwen-code/issues/14751) — LSP: Config.shutdown() 不停止语言服务器，进程泄漏**
   `NativeLspService.stop()` 全代码库仅测试调用一次，daemon/`qwen serve` 模式下语言服务器持续驻留，P2 且已 ready-for-agent。

5. **[#8177](https://github.com/QwenLM/qwen-code/issues/8177) — macOS + tmux 下中文 IME 输入导致光标错位/文本乱码**
   持续近 3 个月的老问题，今日仍有讨论更新。中文用户核心痛点，涉及终端渲染与 IME 兼容层。

6. **[#14828](https://github.com/QwenLM/qwen-code/issues/14828) — 提议统一循环防护设置（off/warn/stop）**
   今日新提的 feature request：单一 `model.loopProtection` 设置统一 TUI、subagent、daemon/ACP 各场景的工具调用循环检测行为，已进入讨论。

7. **[#14755](https://github.com/QwenLM/qwen-code/issues/14755) — Desktop 每次启动闪现登录/Token 卡片**
   Windows 上每次启动短暂闪现 "Connect to Qwen Code" 界面，体验瑕疵但用户反馈集中（5 评论）。

8. **[#14690](https://github.com/QwenLM/qwen-code/issues/14690) — Win32 更新检查使用 Node 内置 npm 而非用户 npm**
   版本偏差 + 冷启动变慢，从 #14686 分拆出的 Windows 安装链路问题，分诊严谨，持续推进中。

9. **[#14742](https://github.com/QwenLM/qwen-code/issues/14742) — 尺寸遥测信号缺口 follow-up**
   #14545（工具结果大小计量）合并后的自查发现 4 项遥测完整性缺口，配套 PR #14830 今日已提交。

10. **[#14807](https://github.com/QwenLM/qwen-code/issues/14807) — no-AK CI 门禁的 fail-closed 守护**
    手工维护的白名单分布在两处，存在漂移风险，提议 fail-closed 校验，status/blocked 待前置项。

> ⚠️ 观察：过去 24 小时出现 **10+ 条 Managed Agent gate / SDK Java CI 失败 issue**（#14772–#14797 区间），多为 bot 自动创建并已批量关闭/修复，说明主分支 CI 正处于高频抖动期，与 #14823 的 OOM 问题直接相关。

---

## 🔧 重要 PR 进展

1. **[#14830](https://github.com/QwenLM/qwen-code/pull/14830)** — 工具结果携带生产者声明的截断位，调度器与 ACP/推测转换器不再依赖 raw-vs-processed 大小推断。直接回应 #14331/#14742 的上下文管理链路。

2. **[#14708](https://github.com/QwenLM/qwen-code/pull/14708)** — Hosted 会话中工具调用严格按 Hooks 文档顺序执行，仅批准最终 Hook 输出。修复远程 Workspace 的 Hook 语义一致性。

3. **[#14046](https://github.com/QwenLM/qwen-code/pull/14046)** — 为 Bun 运行时实现真正的 POSIX PTY 后端，Shell 工具与 Web Terminal 可接收终端输出、resize 与退出事件。社区贡献的重要底层能力。

4. **[#14825](https://github.com/QwenLM/qwen-code/pull/14825)** — Web Shell 使用浏览器原生 PDF 查看器预览工作区 PDF，覆盖 @ 引用、Files 扩展与 artifact 卡片。

5. **[#14831](https://github.com/QwenLM/qwen-code/pull/14831)** — 后台 Shell 任务详情展示输出尾部、大小、内存、时间与复制操作，REST/ACP/终端三端可用。

6. **[#14744](https://github.com/QwenLM/qwen-code/pull/14744)（已合并）** — 截断 turn 文本时避免切断 UTF-16 代理对，保护 emoji 等 astral 字符，对中文/多语言用户友好。

7. **[#14817](https://github.com/QwenLM/qwen-code/pull/14817) / [#14819](https://github.com/QwenLM/qwen-code/pull/14819)** — @wenshao 的 Fault Gate 矩阵继续扩张：FG13b Hook store 提交拒绝、FG11f 丢失 ack 发布故障。managed-agent 可靠性测试体系日趋完整。

8. **[#14764](https://github.com/QwenLM/qwen-code/pull/14764)** — 原子记录 Hosted cleanup 欠账并保留原始 Runtime 绑定族，修复 owed cleanup 的 owner 保持问题。

9. **[#14745](https://github.com/QwenLM/qwen-code/pull/14745) / [#14747](https://github.com/QwenLM/qwen-code/pull/14747)（已合并）** — CI 修复双响：fault gate 超时 10→20 分钟以容纳 Surefire fork；`updatedInput` hook 集成测试纳入 PR 检查（此前被遗漏）。

10. **[#14824](https://github.com/QwenLM/qwen-code/pull/14824)** — `qwen review presubmit` 接受 Step 6 规范 findings artifact，简化审查工作流输入。

---

## 📈 功能需求趋势

1. **上下文与 Token 管理**：大输出截断、优雅降级、遥测完整性（#14331、#14742、#14830）是当前最集中的核心诉求。
2. **Multi-agent / Managed-agent 可靠性**：D7 java_durable、Fault Gate 矩阵、journal 恢复语义构成最活跃的开发主线（#14122、#14166、#14817/14819）。
3. **Web Shell / Desktop 体验打磨**：PDF 预览、后台任务详情、启动闪屏、斜杠命令高亮（#14825、#14831、#14755、#14161）。
4. **跨平台输入与终端兼容**：macOS+tmux IME 乱码、Windows npm 链路（#8177、#14690）。
5. **资源生命周期治理**：LSP 进程泄漏、Hosted cleanup 欠账、media/shared output 保留策略（#14751、#14764、#13884）。
6. **可配置行为统一**：循环防护、memory 提取节奏等设置向“一处配置、全端生效”演进（#14828、#13571）。

---

## ⚠️ 开发者关注点

- **CI 稳定性是最大痛点**：自托管 ECS 池 OOM（#14823）+ Managed Agent gate 高频红屏，已影响合并节奏，多日占据 issue 流。
- **上下文耗尽的“硬失败”体验**：用户呼吁工具大输出应触发降级而非终止整轮会话，#14331 值得订阅跟进。
- **进程/资源泄漏**：LSP 不随 Config 关闭（#14751）提示 daemon 长驻场景下的生命周期审计需求。
- **中文/IME 用户长期痛点未解**：#8177 持续 3 个月，建议受影响用户补充复现信息推动分诊。
- **建议动作**：升级至 v0.25.3 可获得 Desktop managed-agent 修复与 Test Failure Explorer 新布局；SDK 用户同步至 typescript-v0.1.21。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报
**日期：2026-10-20 | 数据来源：github.com/Hmbown/DeepSeek-TUI**

---

## 📰 今日速览

今日无新版本发布，社区重心集中在运行时稳定性与 TUI 细节打磨上：引擎运行中静默冻结（#6184）和 git 快照损坏（#6978）两个高严重度 bug 持续引发讨论。PR 方面，`/model` 选择器性能优化（#7026）将打开耗时从 3-4 秒降至约 150ms，是一天来最亮眼的贡献；同时多位贡献者围绕窄终端下的 picker UI 体验提交了一系列小修复。

---

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#6184](https://github.com/codewhale-hq/Codewhale/issues/6184) 引擎运行中静默冻结**
   最严重的可靠性问题之一：长时间、重工具调用的运行中引擎停止产出模型输出，用户消息被持久化但从未被回答——无错误、无日志、无崩溃记录。环境为 0.9.13 Rust TUI + GLM-5.3-Flash。9 条评论，排障难度高，值得维护者优先介入。

2. **[#6978](https://github.com/codewhale-hq/Codewhale/issues/6978) Turn 快照失败 + 旧消息重复投递**
   自 10-12 起（0.10.0，从 0.10.1 回滚后）`git commit-tree` 报 "not a valid object"，且历史用户轮次被重新投递。涉及约 99MB 的长期会话数据，影响用户核心资产，7 条评论。

3. **[#6011](https://github.com/codewhale-hq/Codewhale/issues/6011) Token 用量与工具诊断面板（C11）**
   提案按组件/模型统计 token、缓存命中率、每工具消耗与压缩成本，是可观测性方向的核心需求。10 条评论，讨论活跃。

4. **[#7007](https://github.com/codewhale-hq/Codewhale/issues/7007) Linux 沙箱符号链接挂载失败**
   `$HOME` 为符号链接时，bwrap 沙箱下所有命令（含只读的 `pwd`/`ls`）全部中止。对 Linux 用户属于阻断级问题，3 条评论。

5. **[#6013](https://github.com/codewhale-hq/Codewhale/issues/6013) Goal gates 独立状态校验（C06）**
   为 complete/blocked/stalled 等目标状态增加独立验证与 post-verify 阶段，属于 workflow-runtime 的核心执行计划一环。

6. **[#6954](https://github.com/codewhale-hq/Codewhale/issues/6954) resume 拒绝含原始 sub-agent 交接的会话**
   恢复会话时校验逻辑对比 Engine 恢复消息与保存文档不一致即拒绝，影响长会话连续性。

7. **[#6526](https://github.com/codewhale-hq/Codewhale/issues/6526) 常驻指令预算可配置化**
   硬编码的 48KB 项目指令上限既不可调，截断时用户也无感知。要求暴露配置项并增加可见提示——典型的“静默失败”痛点。

8. **[#6925](https://github.com/codewhale-hq/Codewhale/issues/6925) ChatGPT 登录 400 修复（0.10.2）**
   登录前即被拒，探测发现是多出的 originator 查询参数所致；维护者已定位到动态客户端参数差异，修复进行中。

9. **[#6323](https://github.com/codewhale-hq/Codewhale/issues/6323) GET /v1/approvals 审批历史增强**
   为审批历史补充目标（host/路径）与摘要字段，服务外部客户端 API 一致性。0.10.1 已部分完成。

10. **[#6987](https://github.com/codewhale-hq/Codewhale/issues/6987) / [#6986](https://github.com/codewhale-hq/Codewhale/issues/6986) Windows 下两个缺陷（已关闭）**
    任务列表状态占用时 shell 工具拒绝执行；粘贴文本不经回车即被发送。均为 Windows Terminal + 0.10.0 环境，已快速关闭，显示 Windows 端问题响应在改善。

---

## 🔧 重要 PR 进展（Top 7，今日共 7 条）

1. **[#7026](https://github.com/codewhale-hq/Codewhale/pull/7026) perf(picker)：/model 打开卡顿修复** ⭐
   定位 4 个独立原因，避免每行重建目录。52 条路由 + 3444 行目录下，打开耗时从 3-4s 降至 ~150ms（约 20 倍）。

2. **[#7009](https://github.com/codewhale-hq/Codewhale/pull/7009) 13 个核心导航命令迁移到可移植 Shapes（FEAT-031）**
   覆盖 `/anchor`、`/help`、`/transcript` 等 13 个命令，为后续 crate 拆分铺路，无用户可见行为变化——运行时/TUI 解耦的关键一步。

3. **[#7016](https://github.com/codewhale-hq/Codewhale/pull/7016) ci(sync)：缺 CNB token 时跳过镜像同步**
   修复 fork 上必然红叉的 CI 误报，属于贡献者体验（contribution-gate）改进。

4. **[#7027](https://github.com/codewhale-hq/Codewhale/pull/7027) /feedback 描述按词截断加省略号**
   窄终端（<80 列）下描述不再从词中间硬切。

5. **[#7028](https://github.com/codewhale-hq/Codewhale/pull/7028) /statusline 列表溢出时显示滚动条**
   11 项状态行配置在矮终端（40×12）下滚动时可感知还有更多条目。

6. **[#7029](https://github.com/codewhale-hq/Codewhale/pull/7029) /keys 热栏设置行去掉无意义描述桩**
   ≥100 列时描述列仅剩 9 列宽，索性移除该描述占位。

7. **[#7025](https://github.com/codewhale-hq/Codewhale/pull/7025) /statusline 矮帧时移除上下填充行**（已合）
   将两行 chrome 空间让给实际内容。

> 📌 观察：#7025-7029 形成一组连贯的“窄/矮终端 picker 可用性”修复潮，主要由 @Lstarsky0 贡献，显示 contribution-gate 门槛机制正在有效吸引小粒度贡献。

---

## 📈 功能需求趋势

- **可观测性与诊断**：token 计量、缓存命中率、压缩成本、重试可见性（#6011、#6796）是增强类需求中最集中的方向。
- **可靠性与状态恢复**：会话快照、resume、sub-agent 交接、goal 状态校验（#6978、#6954、#6013、#6184）反映长时运行场景下“状态不丢、不冻结”是刚需。
- **架构解耦**：runtime/TUI crate 拆分（RS-11/RS-13、FEAT-031）持续推进，是维护者侧最重要的工程主线。
- **配置可调 + 失败可见**：硬编码上限（指令预算、重试预算）要求开放配置并给出提示（#6526）。
- **小屏/终端适配 UX**：picker 在 40×12 等极小尺寸下的表现成为新一轮打磨重点。

---

## 🎯 开发者关注点（痛点总结）

1. **静默失败是最大信任杀手**：引擎冻结无日志（#6184）、指令被静默截断（#6526）、重试不可见（#6796）——用户反复强调“宁可报错也不要无声吞掉”。
2. **长会话数据安全**：99MB 会话因快照损坏面临丢失风险（#6978），社区对会话持久化健壮性（尤其从 0.10.1 回滚场景）期望很高。
3. **Linux 沙箱兼容性**：符号链接 $HOME 直接导致沙箱全禁（#7007），对 Linux 日常用户是阻断级问题。
4. **Provider 登录链路脆弱**：ChatGPT 登录因参数差异被拒（#6925），第三方 provider 兼容性需持续投入。
5. **TUI 性能**：路由/目录规模增大后选择器卡顿（#7026 修复的 3-4s）提示需要更多按需加载与缓存策略。
6. **Fork/CI 友好度**：镜像 token 缺失导致 fork 全红（#7016），维护者正在降低外部贡献门槛。

---

*数据统计窗口：2026-10-19 至 2026-10-20 | Issues 14 条（10 开 / 4 闭）| PRs 7 条（6 开 / 1 闭）*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-10-20

## 1. 今日速览

今日无新版本发布，但社区活跃度极高：过去 24 小时内有 66 条 Issue 更新、21 个 PR 更新。焦点集中在 **Rex 终端支持**（从 Issue 到 PR 当天闭环）、**上下文溢出恢复与压缩（compaction）可靠性**的多个修复，以及长期存在的 **openai-codex 连接卡死问题**（#4945，评论已破 85 条）。多位核心贡献者（@mitsuhiko、@petrroll）持续推送高质量修复。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **#4945 [inprogress] openai-codex 连接可靠性问题**（85 评论 / 35 👍）
   TUI 卡在 `Working...` 无任何输出，只能按 Escape 中止。已持续数月、标记 inprogress，是当前社区最关心的稳定性问题。
   [Issue #4945](https://github.com/earendil-works/pi/issues/4945)

2. **#7730 macOS 长会话 CPU 占用过高**（21 评论 / 11 👍）
   长会话下 CPU 飙至 50-110%，疑似与上下文长度相关，性能类问题中反馈最多。
   [Issue #7730](https://github.com/earendil-works/pi/issues/7730)

3. **#6300 Windows 下输入行逐字符重绘**（13 评论）
   Windows 终端（cmd / Windows Terminal）每敲一个字符换一行，影响 Windows 用户体验的核心 Bug。
   [Issue #6300](https://github.com/earendil-works/pi/issues/6300)

4. **#9409 推理模型会话在上下文上限处永久卡死**（8 评论）
   每次请求返回 `stopReason: "length"`，压缩恢复失败后会话彻底无法继续，与多个 compaction PR 直接相关。
   [Issue #9409](https://github.com/earendil-works/pi/issues/9409)

5. **#8036 Edit 工具渲染超大 diff 时 TUI 崩溃**（9 评论）
   14.5MB 的 diff 直接崩掉 TUI 且恢复会话时再次崩溃，防御性渲染亟需加强。
   [Issue #8036](https://github.com/earendil-works/pi/issues/8036)

6. **#10956 cacheWarming "idle" 静默失效**（6 评论）
   扩展处理 `turn_end` 后空闲缓存预热不再触发，附带了详细的诊断数据（507 个事件），报告质量很高。
   [Issue #10956](https://github.com/earendil-works/pi/issues/10956)

7. **#9265 openai-completions 流式工具调用 O(n²) 重复解析**（5 评论 / 2 👍）
   每个 delta 都重新解析全部累积 JSON，在嵌入式单线程运行时中冻结事件循环，架构级性能问题。
   [Issue #9265](https://github.com/earendil-works/pi/issues/9265)

8. **#10741 Groq Qwen3.8 27B 因 `developer` role 报 HTTP 400**（6 评论）
   当天已有修复 PR #11120 合入，从 Issue 到修复仅 10 天，响应迅速。
   [Issue #10741](https://github.com/earendil-works/pi/issues/10741)

9. **#10157 Gemini tool-call thought signature 在 AI Studio 兼容端点被丢弃**
   多轮工具调用稳定性问题，影响 Gemini 系列用户的 agentic 场景。
   [Issue #10157](https://github.com/earendil-works/pi/issues/10157)

10. **#11112 让 prepareArguments 能修复解析失败的工具调用参数**（3 评论）
    针对 Claude Sonnet 5 输出畸形 JSON（`"oldText">`）的场景提出扩展钩子方案，是提升容错能力的典型需求。
    [Issue #11112](https://github.com/earendil-works/pi/issues/11112)

## 4. 重要 PR 进展

1. **#11142 [OPEN] Responses API 工具变更时保持 prompt cache**（@mitsuhiko）
   修复工具增删后缓存前缀失效的问题，直接降低 token 成本。修 #10940。
   [PR #11142](https://github.com/earendil-works/pi/pull/11142)

2. **#11158 [CLOSED] 溢出恢复逃生舱 + 输出预算感知安全余量**
   防止注入器反复触发无上限的 compact-and-retry 循环，与 #9409 卡死问题同族。
   [PR #11158](https://github.com/earendil-works/pi/pull/11158)

3. **#11140 [CLOSED] 压缩摘要被 token cap 截断时去掉 reasoning 重试**
   修复自动压缩失败导致会话卡死的关键链路。
   [PR #11140](https://github.com/earendil-works/pi/pull/11140)

4. **#11150 / #11153 Rex 终端支持（OSC 8 超链接 + Kitty 图片）**
   与 Issue #11131 当天闭环，终端兼容性补齐的典范。
   [PR #11150](https://github.com/earendil-works/pi/pull/11150) | [PR #11153](https://github.com/earendil-works/pi/pull/11153)

5. **#11016 [CLOSED] Copilot 请求大小溢出自动恢复**
   多图大会话（数十 MB）请求溢出后可自动恢复，无需手动 /compact。
   [PR #11016](https://github.com/earendil-works/pi/pull/11016)

6. **#11126 [CLOSED] read 工具暴露 maxLines/maxBytes 选项**
   实测 50KB 上限远早于 2000 行上限生效，开放配置提升灵活性。
   [PR #11126](https://github.com/earendil-works/pi/pull/11126)

7. **#11120 [CLOSED] Groq Qwen 模型禁用 developer role**
   快速修复 #10741 的 400 错误。
   [PR #11120](https://github.com/earendil-works/pi/pull/11120)

8. **#11151 [CLOSED] content-tool-call-assist 示例扩展**
   让小模型通过 content 中的 fenced JSON / XML 块驱动 agent 循环，降低本地小模型接入门槛。
   [PR #11151](https://github.com/earendil-works/pi/pull/11151)

9. **#11081 / #11108 全屏模式双击选词保留 `~` 前缀**
   两个独立 PR 解决同一交互细节，社区参与度高。
   [PR #11108](https://github.com/earendil-works/pi/pull/11108)

10. **#11080 / #9504 Windows Store shell 别名识别**
    解决 PowerShell Store 版被误判、回退到 5.1 的问题，Windows 体验持续打磨。
    [PR #11080](https://github.com/earendil-works/pi/pull/11080)

## 5. 功能需求趋势

- **上下文管理与压缩可靠性**：溢出恢复、压缩重试、缓存保持是近期最高频主题（#9409、#10940、#11140、#11158）。
- **终端兼容性**：Rex、Orca、Kitty 图片协议、OSC 8 超链接的检测支持需求活跃（#11131、#9329）。
- **Windows 体验**：输入重绘、Store shell 别名、路径解析等长期痛点正在被系统性修复。
- **扩展 API 能力开放**：消息标识注入（#7828）、HTML 导出 API（#11144）、工具行呈现 API（#10259）、可配置 MCP 路径（#11111）——嵌入式/下游框架开发者是重要用户群。
- **多 Provider 适配**：Groq、Gemini、OpenCode Go 等第三方端点的兼容性问题持续出现。
- **配置与安全**：系统级 MDM 配置（#10895）、XDG 目录规范（#256）反映企业部署需求。

## 6. 开发者关注点

1. **长会话稳定性**：CPU 飙升、上下文卡死、超大 diff 崩溃——重度用户的核心痛点。
2. **Token 成本优化**：prompt cache 失效、system message 合并破坏缓存（#11061）、cacheWarming 失效，社区对缓存效率高度敏感。
3. **流式性能**：O(n²) 解析冻结事件循环，嵌入式/多会话宿主场景对主线程阻塞零容忍。
4. **OAuth/token 生命周期**：MCP 刷新令牌竞态（#11135）、Google 不发 refresh token（#10563）、OpenAI token 失效（#10377），认证可靠性问题分散但反复出现。
5. **模型输出容错**：畸形 JSON 工具调用参数的自动修复能力是新兴需求。
6. **下游集成生态**：pi-agents 等衍生项目需要更多数据级 API（HTML 导出、durable submissions），Pi 正在成为被嵌入的运行时而非仅是 CLI 工具。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# 📰 oh-my-pi 社区动态日报 · 2026-10-20

## 今日速览

今日 oh-my-pi 发布 **v18.12.3**，为 `AgentTool` 增加了 `approvalCacheTargets` 钩子，完善 `always-ask-cached` 审批模式的按文件授权。社区方面，一批由 @will-bogusz 和 @alphastorm 提交的高优先级修复 PR（MCP 请求重放、snapcompact 图像门控、read 工具改进等）密集进入 review:p0/p1 阶段，MCP 可靠性成为今日修复主线。此外 #15586 揭示的 SQLite 锁被原生 grep 破坏导致凭据库损坏的 P1 问题持续引发讨论。

---

## 🚀 版本发布

### [v18.12.3](https://github.com/can1357/oh-my-pi/releases)
- **`@oh-my-pi/pi-agent-core`**：`AgentTool` 新增可选 `approvalCacheTargets` 钩子，供 `always-ask-cached` 审批模式检查并记录按文件授权粒度（[#16049](https://github.com/can1357/oh-my-pi/pull/16049) by [@Peribunt](https://github.com/Peribunt)）。这将显著减少重复审批弹窗，提升长任务的流畅度。

---

## 🔥 社区热点 Issues

1. **[#15586](https://github.com/can1357/oh-my-pi/issues/15586) — 进程内 grep 释放 SQLite POSIX 锁，导致凭据库损坏**（P1，13 评论）
   最严重的数据完整性问题：原生 ripgrep 绑定遍历到 `agent.db` 时 `close()` 会释放同进程 SQLite 连接持有的锁，配合 WAL unlink 可造成凭据存储损坏。13 条评论反映多名用户受影响，属最高优先级。

2. **[#12306](https://github.com/can1357/oh-my-pi/issues/12306) — muse-spark-1.3-contributor-free 在 OMP 中返回 403 FreeTierError**（15 评论，8 👍）
   同一模型在 OpenCode 中正常、经 OMP 调用却被 Zen 拒绝，指向 free tier 的客户端识别/请求头差异，是评论数最多的问题。

3. **[#16199](https://github.com/can1357/oh-my-pi/issues/16199) — GitHub Copilot 全部 responses/anthropic 通道模型 10-17 起返回 400**（P1）
   尽管模型在 entitlement 列表中仍全部报 `model_not_supported`，疑似 Copilot 服务端策略变更，影响大量 Copilot Pro 用户。

4. **[#10895](https://github.com/can1357/oh-my-pi/issues/10895) — 循环守卫可被参数微调绕过**（P1，10 评论，标记 wontfix）
   `tool_call_loop_detected` 只触发一次后，模型改变一个自由文本字段即绕过守卫，单轮空转 45 分钟、303 次 yield。维护者标 wontfix 但社区仍在讨论。

5. **[#16005](https://github.com/can1357/oh-my-pi/issues/16005) — SIXEL 终端渲染残留：实时图表覆盖历史内容**（9 评论）
   Windows Terminal 上 SIXEL 图像滚动后留残影、SvgFigure 固化过期栅格图，影响终端可视化体验。

6. **[#15230](https://github.com/can1357/oh-my-pi/issues/15230) — 图片预算钳制每请求重写整个 Anthropic prompt cache**（8 评论）
   超出图像预算后每张新截图都驱逐最旧图片，导致整个 prompt 缓存失效——对长截图会话是巨大的成本/延迟放大器。

7. **[#15797](https://github.com/can1357/oh-my-pi/issues/15797) — 自动压缩提前触发：上下文估算计入已被丢弃的 thinking**（4 评论）
   chat-completions 不回放历史推理时，实际 100–230K token 就在 262K 窗口触发压缩，浪费大量有效上下文。

8. **[#16273](https://github.com/can1357/oh-my-pi/issues/16273) — 粘贴长文本极慢**（4 评论）
   13K 字符日志粘贴需 7 秒才弹出附加对话框，TUI 输入管线性能问题的典型反馈。

9. **[#16018](https://github.com/can1357/oh-my-pi/issues/16018) — read 返回 '0B' 假成功 + 归档自动展开唯一成员**（5 评论）
   超限单行返回 0 字节却报成功，对取证/审查类任务有误导性，今日 #16435/#16438 两个 PR 正在修复 read 相关问题。

10. **[#16416](https://github.com/can1357/oh-my-pi/issues/16416) — Tern on iOS 三大宿主侧缺口**（3 评论）
    iOS 客户端只能附着桌面宿主，不能自身承载 panes——明确的功能路线诉求，代表移动端完整自主化的社区期望。

---

## 🔧 重要 PR 进展

1. **[#16436](https://github.com/can1357/oh-my-pi/pull/16436) — fix: snapcompact 按线上实际发送的图像门控**（review:p0）
   修复 DeepSeek Flash 等宣称支持图像但实际剥离图像的通道导致归档变空白占位符的问题。

2. **[#16429](https://github.com/can1357/oh-my-pi/pull/16429) — fix(mcp): 请求已发出后不再重放 tool call**（review:p1）
   连接掉线后重发已到达服务端的调用，可能对有状态副作用的工具造成重复执行——重要的 MCP 安全修复。

3. **[#16430](https://github.com/can1357/oh-my-pi/pull/16430) — fix(mcp): 在服务端取消中止/超时的 stdio 请求**（review:p1）
   按 MCP 2025-11-25 规范通知服务端取消，避免服务端空跑无人等待的调用。

4. **[#16431](https://github.com/can1357/oh-my-pi/pull/16431) — feat(mcp): 展示 tools/call 进度**（review:p2）
   长时间 MCP 调用（索引器、构建）此前完全无反馈，现在支持 request 级进度上报到工具卡片与 Eval 单元格。

5. **[#16437](https://github.com/can1357/oh-my-pi/pull/16437) — fix(ai): thinking-loop 中止时保留 usage 与计时**（review:p1）
   被循环守卫中止的回合此前被记录为“免费且瞬时”，扭曲了用量统计。

6. **[#16433](https://github.com/can1357/oh-my-pi/pull/16433) — fix: `rm -f` 下已消失条目视为已删除**（review:p1）
   并发清理同一目录时不再刷屏 ENOENT，行为对齐 GNU rm。

7. **[#16434](https://github.com/can1357/oh-my-pi/pull/16434) — fix: 静默跳过缺失的 .vscode/mcp.json**（review:p0）
   几乎每次启动都写无意义警告日志，一行修复高频噪音。

8. **[#16435](https://github.com/can1357/oh-my-pi/pull/16435) / [#16438](https://github.com/can1357/oh-my-pi/pull/16438) — fix(read): 逗号行列表支持尾部块 + `:N:raw` 只读一行**（review:p0/p2）
   两个针对 #16018 系列痛点的 read 工具易用性修复，回放测试显示服务率从 0/8 提升到 8/8。

9. **[#16097](https://github.com/can1357/oh-my-pi/pull/16097) — fix(vcs): 拒绝目标位于源内的 worktree clone 并剥离嵌套 .git**（review:p3）
   修复目标目录嵌套导致的自递归克隆直到路径超长。

10. **[#16160](https://github.com/can1357/oh-my-pi/pull/16160) — feat: /context 交互式内容检查**（社区贡献）
    将 `/context` 替换为交互式只读视图，弥补 `/dump` 不便查看实际上下文的缺口。

---

## 📈 功能需求趋势

- **MCP 可靠性与可观测性**：今日 3 个 MCP PR 集中落地（取消、重放、进度），MCP 已是扩展生态的核心投资方向。
- **多模态输入**（[#5834](https://github.com/can1357/oh-my-pi/issues/5834)）：音频/视频作为一等输入模态的诉求长期开放，栈层目前仍是 text/image-only。
- **Provider 覆盖与配额透明**：Ollama Cloud 用量/余额 API 集成（[#16330](https://github.com/can1357/oh-my-pi/issues/16330)）、LiteLLM thinking 阶梯识别（[#16427](https://github.com/can1357/oh-my-pi/pull/16427)）、Codex 原生搜索通道（[#7319](https://github.com/can1357/oh-my-pi/issues/7319)）。
- **移动端/远程宿主**：Tern iOS 完整宿主能力（#16416）。
- **工具精细化审批**：本次 v18.12.3 的 `approvalCacheTargets` 与已关闭的 ACP bash 权限门（#15473）表明按文件/按模式的细粒度权限是持续迭代方向。

---

## ⚠️ 开发者关注点

1. **数据完整性与存储可靠性**：SQLite 锁破坏（#15586）、会话文件损坏后无法退出（#12238）、`agent://` 子代理复活后返回过期结果（#16031）——本地存储层的健壮性是反复出现的痛点。
2. **上下文与缓存经济学**：prompt cache 被图片钳制反复重写（#15230）、压缩提前触发（#15797）、`/tan` clone 破坏缓存前缀（#16337）——社区对 token 成本高度敏感。
3. **循环/失控防护不足**：循环守卫易被绕过（#10895）、`task.enableEffort=false` 仍可被覆盖（#16402）、yield 静默丢弃非法字段（#16317）——Agent 安全护栏需要更强的不变量保证。
4. **TUI 性能与渲染**：粘贴延迟 7 秒（#16273）、SIXEL 残影（#16005）、/btw 面板滚轮失效（#16372）。
5. **环境兼容性**：Windows 驱动器相对路径误删目录（#15511，已修复）、JFrog Artifactory 更新失败（#16375）、会话 cwd 被删除后 Eval 无法启动（#16376）。

---
*数据来源：GitHub can1357/oh-my-pi（过去 24 小时，65 条 Issue 更新 / 252 条 PR 更新）*

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*