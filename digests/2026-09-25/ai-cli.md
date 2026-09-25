# AI CLI 工具社区动态日报 2026-09-25

> 生成时间: 2026-09-25 04:00 UTC | 覆盖工具: 11 个

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
**数据日期：2026-09-25 | 覆盖 11 个主流 AI CLI 工具社区**

---

## 1. 生态全景

AI CLI 工具已进入**多agent编排与平台化架构升级期**：头部工具（Codex、Claude Code、Qwen Code）均围绕 daemon/托管运行时、多代理通信、跨设备会话展开架构重构。同时，**Windows 平台是全行业共同的质量洼地**——沙箱失败、进程泄漏、会话同步问题在几乎所有工具的 Issue 榜上霸榜。商业化层面，订阅分层（Codex 的 Pro Max）与额度计量透明度成为新摩擦点；轻量级开源工具（Pi、oh-my-pi、OpenCode）则在多 Provider 兼容性和 TUI 性能上快速跟进，形成“官方重型 vs 社区轻量”的双轨竞争格局。

---

## 2. 各工具活跃度对比

| 工具 | 今日热点 Issues | 今日活跃 PR | Release | 活跃度评级 |
|---|---|---|---|---|
| **Claude Code** | ~13 条（含 4 条 GitHub App 故障簇） | 9+ 条（diff/telemetry/agents-md 集中） | v2.1.282 | ★★★★★ |
| **OpenAI Codex** | 10 条 | 10+（单日 20+，bot 自动合入） | rust-v0.157.0 + alpha.12 | ★★★★★ |
| **Gemini CLI** | 13 条 | 12 条（4 条 P1 修复） | v0.62.0-nightly | ★★★★ |
| **Qwen Code** | 10+ 条 | 14 条（含 Managed Agent 系列） | v0.24.5 全家桶（CLI/Desktop/SDK） | ★★★★ |
| **DeepSeek TUI (Codewhale)** | 15+ 条（含 9 条安全审计） | 15+ 条（0.10.1 打磨中） | 无 | ★★★★ |
| **oh-my-pi** | 10 条 | 14 条（120 Issues / 208 PRs 更新） | 无 | ★★★★ |
| **Pi** | 10 条 | 10 条 | 无 | ★★★ |
| **OpenCode** | 10 条 | 10+ 条 | 无 | ★★★ |
| **GitHub Copilot CLI** | 10 条 | 1 条 | v1.0.89-2 / -3 | ★★☆（Issue 热但 PR 冷） |
| **DeepSeek Harness** | 0 | 0 | v0.1.7-rc.2 | ★★ |
| **Kimi Code CLI** | 0 | 1 条（安全升级，昨日关闭） | 无 | ★ |

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **多 Agent / 子代理可靠性** | Gemini、Qwen、oh-my-pi、DeepSeek TUI、Claude Code | Gemini 的“误报 GOAL 成功”与挂起（#22323/#21409）、Qwen 的协调缺陷（#8097）、Claude Code 的 handback 静默丢失（#96849）——“agent 假成功”是全行业信任危机 |
| **长会话 / Compaction / 内存管理** | Copilot CLI、Pi、OpenCode、DeepSeek TUI、oh-my-pi | Copilot 的 OOM 三连（#4699/#4725/#4780）、DeepSeek 的压缩 0% 缓存命中（#6540）、OpenCode 的 256k 输出上限适配 |
| **Windows 平台质量** | Codex、Claude Code、Qwen、Gemini、Copilot、DeepSeek TUI、Pi | 沙箱初始化失败（Codex #44696）、ConPTY 泄漏（Qwen #11303）、多行粘贴回归（DeepSeek #6427）——**无一幸免** |
| **认证 / 凭据生命周期** | Copilot、Gemini、Pi、oh-my-pi、Claude Code | token 不刷新需重启进程（Copilot #4929）、无限登录循环（Gemini PR #29448）、MCP OAuth 过期（Claude Code #95113） |
| **TUI 可读性与性能** | Codex、Claude Code、Gemini、oh-my-pi、Pi | 隐藏工具输出（Codex #18396 40👍）、宽终端排版（Claude Code）、长会话重绘风暴（Pi #9255） |
| **轻量决策路由（省 token）** | Qwen、DeepSeek TUI、Gemini | System One 决策门（#12589）、/router decision 路由、快速 Decision Gate（PR #29482）——用小模型/分类器拦截廉价轮次 |
| **静默失败问题** | Qwen、OpenCode、Claude Code、DeepSeek TUI | “不报告就当没发生”是跨工具最高频抱怨模式 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 云会话/跨设备（Cowork/Device Bridge）、插件化 hook 架构 | Anthropic 订阅用户、Team 协作 | TS TUI + Desktop 桥接，mod/hook 插件化改造激进 |
| **Codex** | 模型首发（GPT-6 Sol/Luna）、沙箱安全、订阅分层 | ChatGPT Pro/Pro Max 付费用户 | Rust 重写 + copyberry 自动合入流水线，工程效率最高 |
| **Gemini CLI** | 子代理生态、Auto Memory、AST 感知工具 | 开发者（免费额度吸引大） | TS，官方 EPIC 主导 + 社区贡献混合 |
| **Qwen Code** | Managed Agent / daemon 架构、多端（Desktop/Web Shell/Companion） | 国产模型生态 + 开源自部署 | TS agent loop + **Java 控制平面**（独特），Electron→Tauri 迁移 |
| **Copilot CLI** | GitHub 原生集成、企业受管环境 | GitHub 生态企业用户 | Node/Bun，Issue 热但上游修复节奏偏慢 |
| **OpenCode** | 多 Provider 兼容、配置热重载、RLM 前沿范式 | 模型自由度敏感的开源用户 | 开放接缝设计，社区提案驱动 |
| **Pi / oh-my-pi** | 极致多 Provider、TUI 性能、轻量 | 高级用户、成本敏感极客 | 单二进制/TS 轻量路线；oh-my-pi 长会话性能优化领先 |
| **DeepSeek TUI / Harness** | 产品化打磨、审计驱动工程纪律 | DeepSeek 模型用户 | Rust，安全静态审计 + 创始人 dogfood 实证驱动 |

---

## 5. 社区热度与成熟度

- **第一梯队（高活跃 + 快迭代）**：Claude Code、Codex——发布节奏以“天”计，但回归频发（v2.1.282 Linux 输入失焦、Desktop 26.917 Git 按钮缺失），典型“快而不稳”。
- **第二梯队（高活跃 + 架构转型期）**：Qwen Code（Managed Agent 蓝图落地中）、Gemini CLI（P1 修复密集）、DeepSeek TUI（0.10.1 打磨 + 审计清债）、oh-my-pi（性能专项）。
- **成熟度隐患信号**：Pi 出现社区信任危机（bug 报告被批量自动关闭，#10008）；Copilot CLI PR 活动近乎停滞（24h 仅 1 条 CI 维护 PR），Issue 积压与修复速度失衡。
- **低活跃**：Kimi Code CLI、DeepSeek Harness——前者今日零动态，后者处于 rc 验证静默期。

---

## 6. 值得关注的趋势信号

1. **Agent 可信度成为核心竞争力**：多个工具不约而同出现“失败被上报为成功”问题（Gemini、Qwen、Claude Code）。自动化流水线用户无法信任 agent 结果，**确定性状态汇报机制**将是下一阶段竞争焦点。
2. **轻量决策路由兴起**：Qwen（System One）、DeepSeek（/router）、Gemini（Decision Gate）三家用不同实现收敛到同一思路——在每轮大模型调用前置毫秒级分类器，这是 token 成本压力下的明确行业方向。
3. **回归质量管理是头号工程债**：Claude Code、Codex、DeepSeek TUI 均出现“修复被再破坏”的回归。快速迭代（bot 自动合入、当日合并）与测试覆盖的张力值得所有工具团队警惕。
4. **计量与凭据透明度影响付费信任**：Codex 的额度异常消耗（#47637）、Pi 的缓存重复计费（#10024）、Claude Code 的 MCP OAuth 反复认证——**成本可见性**已从 nice-to-have 变成留存关键。
5. **架构分化：daemon 化 vs 轻量化**。Qwen/Codex 押注持久运行时与跨端会话，Pi/oh-my-pi 坚持单进程轻量高性能。开发者选型时应匹配自身场景：无人值守自动化选前者，交互式深度使用选后者。
6. **对开发者的实操建议**：Windows 用户暂缓依赖项目级远程/沙箱功能（全行业重灾区）；长会话用户优先验证 compaction 与内存表现；企业用户关注 Copilot CLI 的 AppLocker 兼容与 Codex 的沙箱 fail-closed 策略。

---
*本报告基于 2026-09-25 各仓库公开 GitHub 数据生成，仅供参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-09-25）

> 说明：本期 PR 评论数据缺失（均为 undefined），排序按更新活跃度与议题热度综合判断；Issues 评论数据完整，作为需求分析主要依据。

---

## 一、热门 Skills 排行（PR）

1. **skill-creator 修复：触发评估隔离与 Windows 兼容** — [PR #1298](https://github.com/anthropics/skills/pull/1298)（open，6月提交、9月仍在更新）
   修复触发评估误报、Windows `select()` 失败等核心问题。直接回应 [Issue #556](https://github.com/anthropics/skills/issues/556)（`claude -p` 触发率 0%）这一 12 评论高热 Bug，是 Skill 开发工具链的关键修复。

2. **mcp-builder：支持 mcp>=2 的 streamable_http_client** — [PR #1742](https://github.com/anthropics/skills/pull/1742)（open）
   修复 MCP SDK 2.0 破坏性变更导致的连接失败，关联 [Issue #1668](https://github.com/anthropics/skills/issues/1668)；同 skill 的评估器 0/N 评分问题（[Issue #1390](https://github.com/anthropics/skills/issues/1390)）也在持续发酵，mcp-builder 是当前 bug 密度最高的官方 Skill。

3. **docx 系列修复（两个 PR）** — [PR #1792](https://github.com/anthropics/skills/pull/1792)、[PR #1790](https://github.com/anthropics/skills/pull/1790)（open，9月新提交）
   修复 LibreOffice 超时误报成功、comment.py 缺失 rels 文件等缺陷；配合早期的 [PR #541](https://github.com/anthropics/skills/pull/541)（w:id 冲突致文档损坏）。文档类 Skill 是贡献者最活跃的修复战场。

4. **AWT：AI 驱动 E2E 测试** — [PR #822](https://github.com/anthropics/skills/pull/822)（open，3月提交、9月仍有更新）
   零代码测试生成 + 浏览器视觉控制，悬置 6 个月仍在维护，作者投入度高。

5. **pyxel：复古游戏开发** — [PR #525](https://github.com/anthropics/skills/pull/525)（open，作者为 Pyxel 作者本人 kitao）
   含无头运行、帧检查、状态校验等完整验证流程，3月至今持续更新。

6. **testing-patterns：全栈测试方法论** — [PR #723](https://github.com/anthropics/skills/pull/723)（open）
   覆盖 Testing Trophy、AAA、React Testing Library 等模式，测试类是新增 PR 中的高频方向。

7. **skill-quality-analyzer / skill-security-analyzer** — [PR #83](https://github.com/anthropics/skills/pull/83)（open）
   “元 Skill”：对 Skill 本身做质量与安全分析，与社区安全议题（见下）高度呼应。

8. **frontend-design 改进** — [PR #210](https://github.com/anthropics/skills/pull/210)（open）
   重写指令使其在单会话内可执行，呼应 [Issue #202](https://github.com/anthropics/skills/issues/202) 对 skill-creator “文档化而非可执行化”的批评。

---

## 二、社区需求趋势（Issues 提炼）

1. **安全与信任机制**：最热 Issue [#492](https://github.com/anthropics/skills/issues/492)（43 评论）——社区 Skill 冒用 `anthropic/` 命名空间构成信任边界漏洞；[#1175](https://github.com/anthropics/skills/issues/1175) 讨论企业文档场景的权限控制。社区强烈要求官方明确签名/命名空间治理。
2. **组织级分发能力**：[#228](https://github.com/anthropics/skills/issues/228)（16 评论）要求组织内 Skill 共享库；[#189](https://github.com/anthropics/skills/issues/189) 抱怨插件重复安装浪费上下文。
3. **上下文效率**：[#1487](https://github.com/anthropics/skills/issues/1487) 指出 claude-api skill 一次注入 ~156k token；[#202](https://github.com/anthropics/skills/issues/202) 要求 Skill 指令精简可执行。“轻量、渐进加载”是普遍呼声。
4. **Agent 记忆与治理**：[#1329](https://github.com/anthropics/skills/issues/1329) 提议符号化压缩记忆 compact-memory；[#1385](https://github.com/anthropics/skills/issues/1385) 提议三阶段推理质量门禁。
5. **互操作性**：[#16](https://github.com/anthropics/skills/issues/16) 提出 Skill ↔ MCP 双向暴露；[#29](https://github.com/anthropics/skills/issues/29) 询问 Bedrock 支持。

---

## 三、高潜力待合并 Skills（open 且活跃）

- [PR #1792 / #1790](https://github.com/anthropics/skills/pull/1792)：docx 缺陷修复，9月提交、评审中，合并概率最高
- [PR #1742](https://github.com/anthropics/skills/pull/1742)：mcp-builder 兼容修复，9月19日仍有更新，阻塞大量用户
- [PR #1298](https://github.com/anthropics/skills/pull/1298)：skill-creator 触发评估修复，长期维护、解决核心评测 Bug
- [PR #822](https://github.com/anthropics/skills/pull/822)：AWT E2E 测试，半年持续迭代
- [PR #525](https://github.com/anthropics/skills/pull/525)：pyxel，原作者背书、9月仍活跃
- [PR #1776](https://github.com/anthropics/skills/pull/1776)：blast-radius——批量破坏性操作前的安全检查清单，切中 Agent 安全痛点，值得关注

---

## 四、生态洞察（一句话总结）

**社区在 Skills 层面最集中的诉求是“可信与高效”：建立官方命名空间与安全治理机制，同时让 Skill（及其触发评估、上下文注入）变得轻量、可靠、可在企业内分发。**

---

# Claude Code 社区动态日报 · 2026-09-25

## 1. 今日速览

Claude Code 发布 v2.1.282，新增 `maxProseWidth` 设置优化宽终端下的排版体验，但随后曝出 Linux 下输入框失焦的回归 Bug。Cowork 设备桥接（device bridge）成为今日焦点：Windows 和 macOS 平台均出现握手失败、云会话无法连接的问题，疑似与 Desktop 2.9939.2 更新相关。GitHub App 集成今天集中爆发多个重连失败报告。

## 2. 版本发布

**[v2.1.282](https://github.com/anthropics/claude-code/releases)**
- 新增 `maxProseWidth` 设置：在宽终端中限制 Claude 正文的显示宽度，而表格和代码块仍占满全宽
- 新增启动提示及 `/status`、`claude doctor` 条目，列出项目设置文件中被忽略的遥测变量

⚠️ 注：发布数小时内即有用户报告该版本在 Linux 上存在输入框停止响应的回归（见下方 Issue #96931）。

## 3. 社区热点 Issues

**1. [#96931](https://github.com/anthropics/claude-code/issues/96931) — Linux TUI 输入框 0-90 秒内停止接受按键（v2.1.282 回归）**
新版本最严重的回归：交互式会话启动后约 30 秒，键盘输入完全无响应，Ctrl-C 失效，进程假死。2.1.281 正常。已有复现，影响 Linux 用户基本可用性。

**2. [#96911](https://github.com/anthropics/claude-code/issues/96911) — Windows Desktop：设备桥接握手约 18 分钟无响应**
客户端 WebSocket 连接 `bridge.claudeusercontent.com` 后发送 connect frame，始终收不到 `authenticated` 回复，持续 handshake timeout，重启和应用更新均无法解决，最终自愈。10 条评论，疑似服务端问题。

**3. [#96918](https://github.com/anthropics/claude-code/issues/96918) — Windows Desktop：关联设备显示"Asleep or app closed"，云会话和定时任务全部失败**
"not connected to the bridge" 错误在重启、重登、移除设备、更新应用后依旧存在，与上一问题共同指向桥接服务故障。

**4. [#96887](https://github.com/anthropics/claude-code/issues/96887) — macOS Cowork：Desktop 2.9939.2 后无法关联会话（回归，有复现）**
Secure Enclave 签名失败（OSStatus -25308），td-v2 attestation mint 不可用，Team 计划云会话全部受影响。确认为版本回归。

**5. [#12070](https://github.com/anthropics/claude-code/issues/12070) — Linux 上 `acceptEdits` 会话权限模式不持久化**
选择"Yes, and accept all for this session"后，每次 Edit 仍重复弹权限确认。26 👍 / 14 评论，长期存在的老牌高热度问题，今日仍有活跃讨论。

**6. [#63025](https://github.com/anthropics/claude-code/issues/63025) — SSH Remote：重启 Desktop 后 `~/.claude.json` 的 `projects` 字段变 null**
数据未丢（.jsonl 完好）但 UI 全部显示"No messages yet"。标记 data-loss，影响远程工作流用户。

**7. [#96299](https://github.com/anthropics/claude-code/issues/96299) — Windows：`claude.exe` 会话进程不终止，持续累积导致内存/磁盘高占用**
会话关闭后后台进程仍存活，一个工作日下来 RAM 和磁盘被逐步吃满，性能痛点。

**8. [#96928](https://github.com/anthropics/claude-code/issues/96928) — Desktop/CLI 信任判定死锁：git worktree 会话永久卡在"workspace isn't trusted"**
App 与 CLI 对"信任"定义不一致，信任对话框永远不弹出，"Try again"永远失败。有复现，架构层面问题。

**9. [#95113](https://github.com/anthropics/claude-code/issues/95113) — MCP OAuth 凭据以 `expiresAt: 0` 持久化且无 refreshToken**
影响 Grafana、Slack 等远程 MCP 服务器，每次会话都被迫重新认证，工作流摩擦明显。

**10. [#96961](https://github.com/anthropics/claude-code/issues/96961) / [#96960](https://github.com/anthropics/claude-code/issues/96960) / [#96957](https://github.com/anthropics/claude-code/issues/96957) / [#96955](https://github.com/anthropics/claude-code/issues/96955) — GitHub App 集成集中故障**
今日多个独立报告：Reconnect GitHub App 失败、私有仓库不可见。同一时间段集中爆发，很可能是一次性服务端事故，值得官方统一回应。

## 4. 重要 PR 进展

**1. [#96953](https://github.com/anthropics/claude-code/pull/96953)（OPEN）— diff 模块：focus hook 按引擎注册名匹配元素**
修复 mod 的 `ui.focus` hook 在外部构建（注册名为 `cc-plugin-diff`）下匹配失败的问题，提升插件系统的命名一致性。

**2. [#96930](https://github.com/anthropics/claude-code/pull/96930)（已关闭）— telemetry/agents-md：测试插件按名称挂载 collector 流**
测试基础设施改进：模拟第三方插件的测试现在正确命名遥测 collector 流并覆盖其事件。

**3. [#96917](https://github.com/anthropics/claude-code/pull/96917)（已关闭）— telemetry：`$.telemetry.log/mark` 重构为事件 hook**
将遥测方法迁移到 `telemetry.log` / `telemetry.mark` 事件 hook 架构下，置于特性开关之后，接口更规范化。

**4. [#96364](https://github.com/anthropics/claude-code/pull/96364)（已关闭）— agents-md：超长 AGENTS.md 的自动分页 Read 不再误判为已投递**
修复大文件分页读取导致嵌套 AGENTS.md 被跳过重复附加的边界问题，改善指令传递可靠性。

**5. [#96363](https://github.com/anthropics/claude-code/pull/96363)（已关闭）— diff：传入 `--no-color`，防止 git 强制配色导致 diff 为空**
用户配置 `color.ui=always` 时 hunk 匹配全部失败，此修复直接消除一类“看不到 diff”的常见故障。

**6. [#96487](https://github.com/anthropics/claude-code/pull/96487)（已关闭）— telemetry：遥测行携带引擎版本、基础版本和构建时间**
通过 `$.session.version()`（2.1.281+ 可用）补充版本元数据，外部构建不再上报空版本。

**7. [#95423](https://github.com/anthropics/claude-code/pull/95423)（已关闭）— diff：只读 shell 命令后不再重取 diff**
对齐内置面板行为：`ls`、`git status` 等只读命令后跳过 diff 刷新，减少无效计算。

**8. [#96570](https://github.com/anthropics/claude-code/pull/96570)（已关闭）— diff：`command.run` hook 使用引擎可扫描的字面量命令名**
修复启动时输入 slash 命令需等待模块加载的时序问题。

**9. [#96956](https://github.com/anthropics/claude-code/issues/96956)（相关 Issue）— Windows 无 Developer Mode 时后台 Agent `.output` 为 0 字节**
虽为 Issue，但涉及 Agent tool 的后台输出可靠性，与 PR 活动同属 agents 领域，建议关注修复进展。

**10. 整体趋势**：本周期 PR 高度集中在 **diff、telemetry、agents-md** 三个内部模块，主要由 @poteat 提交且多数当天/次日快速合并关闭，显示插件化改造（mod/hook 架构）正在快速迭代。

## 5. 功能需求趋势

- **远程/云会话可靠性（Cowork & Device Bridge）**：今日最高优先级方向，Windows/macOS 多个桥接握手、设备身份、云任务失败报告
- **跨设备浏览器集成**：Chrome 扩展的远程会话继承（#74671）、多机浏览器识别（#74667）
- **TUI 显示体验**：工具调用输出的中间档显示级别（#96962）、输入框拼写检查（#96958）、宽终端排版
- **凭据与安全**：secrets locker/credential broker，模型永不见明文密码（#88165）、MCP OAuth 持久化修复
- **平台覆盖**：Arch Linux 官方 Desktop 包（#96963）
- **可观测性**：Terminal 面板暴露会话 ID 环境变量（#96959）、usage 统计缓存与清理策略交互（#94479）

## 6. 开发者关注点

1. **回归质量管理**：v2.1.282 发布当天即曝出 Linux 输入失焦回归，Cowork 在 Desktop 2.9939.2 后大面积故障——快速迭代下的回归测试覆盖是核心痛点
2. **权限体验**：`acceptEdits` 不持久化（26 👍）长期未修，权限弹窗疲劳是高频抱怨
3. **Windows 平台质量缺口**：进程泄漏、设备身份重装失效（#88692）、Developer Mode 依赖等 Windows 特有问题密集
4. **上下文压缩的静默丢失**：compaction 后自定义指令/记忆文件不重新加载且无任何提示（#96422），影响长会话可靠性
5. **Agent 可靠性细节**：subagent 二次 handback 被拒导致报告静默丢失（#96849）、后台 agent 输出文件为空
6. **MCP 生态摩擦**：OAuth token 过期处理、大 ToolSearch 批次破坏对话缓存（#83756）

---
*数据来源：github.com/anthropics/claude-code 公开数据，统计窗口为过去 24 小时。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-09-25

## 📌 今日速览

Codex CLI 正式发布 **rust-v0.157.0**，带来 GPT-6 Sol/Luna 新模型、Amazon Bedrock 支持及全屏转录等特性；同时 **0.158.0-alpha.12** 预发布持续推进。社区方面，Windows 平台问题持续占据热点，包括沙箱助手失败、项目本地会话创建失败等；PR 方面出现 **Pro Max 订阅计划**支持及多项沙箱与多代理架构改进。

---

## 🚀 版本发布

### rust-v0.157.0（正式版）
- **新模型**：新增 GPT-6 Sol 和 Luna，含 Amazon Bedrock 支持，并为旧模型提供迁移提示（#47332, #47347）
- **UI 改进**：默认启用全屏转录，新增 Shift-click 扩展文本选区（#47178, #47414）
- 自动后台服务器启动（eligible 用户）
- 链接：[github.com/openai/codex/releases](https://github.com/openai/codex/releases)

### 预发布版本
0.158.0 系列 alpha 迭代密集（alpha.7 至 alpha.12），表明下一版本功能开发节奏加快，多项沙箱与 MCP 相关 PR 正在合入。

---

## 🔥 社区热点 Issues

| # | Issue | 关注理由 |
|---|-------|---------|
| 1 | [#3141 允许沙箱内 GPU 访问](https://github.com/openai/codex/issues/3141) | 长期高热度（62👍/39 评论），Linux 沙箱破坏 NVIDIA GPU 访问，阻碍本地 ML 开发场景，持续活跃一年多 |
| 2 | [#29343 Chrome 插件/浏览器拒绝交互特定站点](https://github.com/openai/codex/issues/29343) | 35 条评论，Pro 用户反馈安全检查机制过度拦截，涉及 safety-check 与 computer-use 核心体验 |
| 3 | [#25826 Windows 多显示器最大化窗口溢出](https://github.com/openai/codex/issues/25826) | 34 评论/20👍，Windows 桌面端老牌 UI 缺陷，影响日常使用 |
| 4 | [#34499 Windows 无法在 ChatGPT Project 内创建本地 Work 会话](https://github.com/openai/codex/issues/34499) | 30 评论，与 #45919、#45596 同属 Windows 项目同步问题簇，为当前最集中的痛点 |
| 5 | [#44696 Windows 沙箱助手 helper_unknown_error](https://github.com/openai/codex/issues/44696) | 21 评论，所有 exec_command 和文件读取均失败，沙箱初始化层阻断全部功能 |
| 6 | [#43237 GPT-6 Astra 对 `hi` 返回 invalid_prompt](https://github.com/openai/codex/issues/43237) | 17 评论，跨 Linux/macOS 的最小复现报告，指向模型后端问题而非客户端 |
| 7 | [#18396 TUI 隐藏工具调用输出](https://github.com/openai/codex/issues/18396) | 40👍/17 评论，高频功能需求，终端被工具输出淹没影响可读性 |
| 8 | [#47511 桌面端 git commit/push 按钮缺失](https://github.com/openai/codex/issues/47511) | 30👍，26.917.51856 版本回归问题，直接影响基本 Git 工作流 |
| 9 | [#45449 macOS 27 Chrome 扩展无法连接桌面应用](https://github.com/openai/codex/issues/45449) | native messaging manifest 缺失，新 macOS 版本兼容性问题 |
| 10 | [#47637 5 小时额度数分钟内消耗 98%](https://github.com/openai/codex/issues/47637) | 计量准确性问题，与 #47788（重置时间显示错误）共同反映用量/限额体系信任度问题 |

---

## 🔀 重要 PR 进展

1. [#47971 新增 Pro Max 计划支持](https://github.com/openai/codex/pull/47971) — 认证、账户和限流体系中识别 `promax`；Pro 档位重命名为 "Pro / Pro (More) / Pro (Max)"，暗示订阅体系重大调整
2. [#47974 跨可写根目录保护 Git 目录](https://github.com/openai/codex/pull/47974) — 修复 `.git` 指针位于其他可写根目录时的 Seatbelt/bubblewrap 安全保护绕过
3. [#47989 exec-server 启动期 PID 命名空间继承](https://github.com/openai/codex/pull/47989) — 解决容器拒绝 `/proc` 挂载时沙箱内进程 ID 与 `/proc` 不一致的问题
4. [#47984 多代理 spawn 延迟与失败指标](https://github.com/openai/codex/pull/47984) — 完善多代理架构可观测性，覆盖各阶段耗时统计
5. [#47988/#47981 MCP handler 复用与直接调用](https://github.com/openai/codex/pull/47988) — 避免目录刷新时重建 handler，降低工具搜索索引重建开销
6. [#47967 Flex 容量失败独立错误类型](https://github.com/openai/codex/pull/47967) — 将 `flex_unavailable` 与普通 429 区分，终端直接报错不重试
7. [#47957 工具调用观测数据限制在 15 MiB 消息预算内](https://github.com/openai/codex/pull/47957) — 防止 Code Mode 请求超限失败
8. [#47946 内存级代理消息板](https://github.com/openai/codex/pull/47946) — 为临时会话提供非持久化的代理间通信，配套 [#47952](https://github.com/openai/codex/pull/47952) 修剪过期注册项
9. [#47975 语音恢复时过滤过期回答](https://github.com/openai/codex/pull/47975) — 修复语音失败时旧回答以文本形式错误重现的问题
10. [#47962 为 Cargo/Bazel 启用透明大页](https://github.com/openai/codex/pull/47962) + [#47951 预构建 V8 归档](https://github.com/openai/codex/pull/47951) — 构建性能优化，缩短编译时间

> 注：以上 PR 均为 copyberry bot 创建并于当日关闭，符合该项目自动化合入流程，大概率已进入 alpha 版本。

---

## 📈 功能需求趋势

1. **Windows 平台支持成熟度** — 近半数热点 Issue 涉及 Windows（沙箱、项目同步、app-server、UI），是当前最大短板
2. **沙箱能力扩展** — GPU 访问（#3141）、OpenSSH 会话（#37722）、Btrfs 兼容等，社区期望沙箱更灵活而非更严格
3. **额度与计量透明度** — 重置时间显示（#47788）、计量准确性（#47637）、VS Code 状态栏限流显示（#18822）
4. **TUI 可读性** — 隐藏工具输出（#18396，40👍）、状态栏警告清理（#47444）
5. **上下文管理精细化** — 可配置 compaction 模型（#22486，13👍）
6. **浏览器/Computer Use 可靠性** — 站点拦截（#29343）、本地文件 URL 策略（#47992）、Chrome 扩展连接（#45449）

---

## ⚠️ 开发者关注点

- **Windows 体验是重灾区**：沙箱初始化失败（#44696）、Job Object 错误（#44503）、项目本地会话（#34499/#45919/#45596）形成问题簇，Windows 用户建议暂缓依赖项目级 Work 功能
- **回归问题需警惕**：最新桌面版 26.917.51856 出现 Git commit 按钮缺失（#47511，30👍）和 commit message 自动生成失败（#47531）
- **限额计量存疑**：多名用户报告额度异常消耗和重置时间不一致，官方尚未系统回应
- **高级订阅用户（Pro/Team）报障比例高**，多个高影响力 Issue 来自付费用户，包括 $200/月 和 €225/月 订阅者
- **积极信号**：PR 节奏密集（单日 20+），沙箱安全、MCP 性能、多代理基础设施持续改进，Pro Max 计划落地值得关注

---
*数据来源：github.com/openai/codex | 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-09-25）

## 一、今日速览

今日发布 **v0.62.0-nightly.20260925.gbedef96ef**，包含 v0.61.0 正式版 changelog 及 MCP 配置解析修复。社区讨论焦点集中在**子代理（subagent）可靠性**上——多个月度高热度 Issue 同日更新，涉及子代理挂起、误报成功、结果吞没等问题。同时，多份针对**文件工具并发竞态、认证死循环**的 P1 修复 PR 活跃推进。

---

## 二、版本发布

**v0.62.0-nightly.20260925.gbedef96ef**（[Release](https://github.com/google-gemini/gemini-cli/releases)）
- 汇总 v0.61.0-preview.1 与 v0.61.0 的 changelog（PR #29469、#29472）
- 修复：`fix(cli)` 区分 MCP enablement 配置缺失与格式错误两种情况，改善 MCP 配置诊断体验

---

## 三、社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)（P1）Subagent 达到 MAX_TURNS 后误报 GOAL 成功**（13 评论）
   `codebase_investigator` 碰到轮次上限却上报成功，掩盖了中断事实——直接影响 agent 可信度，是子代理状态汇报机制的核心缺陷。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)（P1）通用 agent 无限挂起**（8 评论 / 8 👍）
   委派给 generalist agent 后简单操作（如建文件夹）也永久挂起，用户需等待超过一小时，是体验影响最大的 P1 之一。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)（P2）零依赖 OS 沙箱 + 执行后意图路由**（9 评论）
   社区建议利用 Gemini 3 原生 bash 能力，在不牺牲安全性的前提下放开 POSIX 工具链使用，方向性讨论热度高。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)（P2）AST 感知文件读取/搜索/映射评估**（7 评论）
   官方 EPIC：探索 AST 工具以精确读取方法边界、降低 token 噪音、优化 codebase 导航，配套调查见 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)（推荐 tilth/glyph）。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)（P2）模型几乎不主动使用 skills 和子代理**（6 评论）
   用户反馈自定义 skill 即使高度相关也不会被自主调用，反映触发/路由策略问题。

6. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)（P2，安全）Auto Memory 需确定性脱敏并减少日志**（5 评论）
   转录内容在脱敏前已进入模型上下文，存在敏感信息泄露风险，安全问题值得关注。

7. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)（P2）Auto Memory 无限重试低信号会话**（4 评论）
   低信号会话永远不被标记为已处理，被反复浮出，浪费资源。同系列还有 [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)（无效 memory patch 静默跳过）和汇总帖 [#26516](https://github.com/google-gemni/gemini-cli/issues/26516)。

8. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)（P2）Browser Agent 忽略 settings.json 覆盖（如 maxTurns）**（4 评论）
   AgentRegistry 正确合并配置但 Browser Agent 不消费，配置链路断裂问题。

9. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)（P1）browser subagent 在 Wayland 下失败**（4 评论）
   Linux Wayland 用户被完全阻断，最终误报 GOAL 完成，与 #22323 的误报模式呼应。

10. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)（P2）工具数 >128 触发 400 错误**（3 评论）
    MCP 重度用户的实际痛点，需要更智能的工具作用域裁剪。

其他值得留意：[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)（symlink 子代理不被识别）、[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)（P1，output hook 崩溃）、[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)（模型乱建临时脚本）。

---

## 四、重要 PR 进展

1. **[#29495](https://github.com/google-gemini/gemini-cli/pull/29495)（P1）文件工具操作串行化 + 原子写入**
   解决并行子代理对同一文件的读-改-写竞态与静默丢失更新，是当日最重要的新 PR（前身 #29494/#29493 已关闭重开）。

2. **[#29366](https://github.com/google-gemini/gemini-cli/pull/29366)（P1）修复会话恢复时工具响应重复回放**
   `-r` 恢复后每个工具结果发送两次，导致首个请求在严格后端上失败，且污染录制记录。

3. **[#29448](https://github.com/google-gemini/gemini-cli/pull/29448)（P1）修复无限认证循环**
   针对 Windows/WSL/headless 环境（#28341）：解决与 Code Assist 扩展的文件争用、keyring 不可用时自动降级到加密文件存储。

4. **[#29368](https://github.com/google-gemini/gemini-cli/pull/29368)（P1，ACP）按 ID 加载会话即使无 resumable 内容**
   修复 ACP 模式下的会话加载诊断问题。

5. **[#29282](https://github.com/google-gemini/gemini-cli/pull/29282)（P2，安全）登录后立即持久化 OAuth 凭据**
   避免每次都重新走 Google 登录流程，改善 CLI 认证体验。

6. **[#29376](https://github.com/google-gemini/gemini-cli/pull/29376) Windows IDE 检测不再回退执行 Unix `ps`**
   修复跨平台进程探测 fallback 逻辑，避免在 Windows 上执行错误命令。

7. **[#29375](https://github.com/google-gemini/gemini-cli/pull/29375）DevTools HTTP 分块用有状态解码器解码**
   修复 UTF-8 多字节字符被 chunk 边界截断导致的乱码。

8. **[#29482](https://github.com/google-gemini/gemini-cli/pull/29482) 可选快速 Decision Gate 前置路由**
   社区贡献的架构级提案：毫秒级分类用户消息，简单请求走短路径，降低延迟与成本，值得关注讨论走向。

9. **[#29277](https://github.com/google-gemini/gemini-cli/pull/29277) / [#29278](https://github.com/google-gemini/gemini-cli/pull/29278) 修复 `expandEnvVars` 哨兵键环境变量冲突**
   环境中若恰好存在 `__GCLI_EXPAND_TARGET__` 会导致展开逻辑失效，两个 PR 分别修复。

10. **[#29371](https://github.com/google-gemini/gemini-cli/pull/29371) / [#29374](https://github.com/google-gemini/gemini-cli/pull/29374) 文档修复**
    清理 CLI 参考表中已删除的 `--experimental-zed-integration` 旗标、纠正 ACP 缩写、补全 `extensions` 配置类文档。

---

## 五、功能需求趋势

- **子代理可靠性**：状态误报（#22323、#21983）、挂起（#21409）、委派不触发（#21968）、上下文缺失（#21763）——当前最集中的工作流。
- **记忆系统（Auto Memory）治理**：脱敏、重试策略、patch 校验（#26516/26522/26523/26525），安全与质量并重。
- **AST 感知代码理解**：官方主导的 EPIC（#22745/#22746），以及 token 节省型“外科手术式读取”（#19561）、文件化任务跟踪替代 WriteToDo（#18836、#21000）。
- **浏览器代理健壮性**：配置覆盖失效（#22267）、会话锁恢复（#22232）、Wayland 支持（#21983）。
- **安全与沙箱**：原生 bash 能力 + OS 级沙箱（#19873）、破坏性命令防护（#22672）。
- **终端渲染性能**：resize 无闪烁渲染（#21924）。

## 六、开发者关注点

1. **Agent“假成功”是最大信任危机**：多个 Issue 表明中断/失败被上报为 GOAL 成功，自动化流水线无法依赖其结果。
2. **并发竞态频发**：并行子代理文件写入丢失更新（PR #29495）、会话恢复重复回放（#29366），反映异步架构亟需系统性串行化保障。
3. **认证在异构环境脆弱**：Windows/WSL/headless 的无限登录循环（#29448）和 OAuth 持久化缺失是高频痛点。
4. **工具数量上限**（#24246）与**MCP 配置诊断**（今日 release 修复）显示 MCP 生态深度集成仍是摩擦点。
5. **Token 成本意识增强**：社区对上下文膨胀（36.6k/turn 基线）和临时脚本污染工作区（#23571）的抱怨持续增长。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-25 | 数据来源：github.com/github/copilot-cli**

---

## 📌 今日速览

过去 24 小时社区活跃度集中在**内存/会话稳定性**问题上：多个 OOM（堆内存耗尽）相关 Issue 持续获得讨论，涉及长会话、compaction、事件存储等场景。版本方面发布了 **v1.0.89-3** 和 **v1.0.89-2** 两个修复版本，改进了 MCP OAuth 作用域处理和 Windows 沙箱命令体验。认证相关（token 刷新失效、credential 注册失败）也成为近期高频痛点。

---

## 🚀 版本发布

**v1.0.89-3**（修复版）
- 修复 Ask-user 表单中，多个问题间的自定义 "Other" 答案互相串扰的问题

**v1.0.89-2**（功能/改进版）
- **Added**：MCP 预注册 OAuth 客户端现可遵循配置的 `oauthScopes`
- **Added**：本地会话中，连按两次 Esc 可撤回模型尚未开始回答的 prompt 并将其从对话中移除
- **Improved**：受支持的 Windows 版本上沙箱命令能力增强

---

## 🔥 社区热点 Issues（Top 10）

1. **[#4742](https://github.com/github/copilot-cli/issues/4742)** — Desktop 1.1.15 无法在同一项目内创建第二个 Local（branch）会话，报 "already has an active Local workspace"。11 条评论、5 👍，桌面端多会话工作流受阻，等待修复。

2. **[#4699](https://github.com/github/copilot-cli/issues/4699)** — 长 `--resume` 会话在 4 GiB 堆上限处反复 OOM，且崩溃转储文件直接写入用户 cwd 污染工作目录。7 👍，长期使用者的核心痛点。

3. **[#4905](https://github.com/github/copilot-cli/issues/4905)** — 桌面端会话启动数分钟后因 "GitHub credential registration is no longer available" 死亡，github-mcp-server 目录失效。涉及认证生命周期管理。

4. **[#4929](https://github.com/github/copilot-cli/issues/4929)** — 进程内 auth token 停止刷新后所有 prompt 失败，`/login` 无法恢复，只能重启进程。与 #4905 共同指向 token 刷新机制缺陷。

5. **[#4725](https://github.com/github/copilot-cli/issues/4725)** — Linux 上 CLI 每隔几分钟崩溃，V8 Mark-Compact 日志显示堆接近上限。内存泄漏的又一例证。

6. **[#4851](https://github.com/github/copilot-cli/issues/4851)** — Azure MCP registry 验证突然失败（BrokenPipe），稳定使用数月的配置一夜之间不可用，6 👍 反映影响面较广。

7. **[#4780](https://github.com/github/copilot-cli/issues/4780)** — 会话 compaction 触发后 OOM 且永不完成，会话永久无法 resume，陷入崩溃循环。数据丢失风险高。

8. **[#3534](https://github.com/github/copilot-cli/issues/3534)** — WSL2 ARM64 下 `/copy` 因 `cmd.exe` 引号处理错误失败。长期未修的跨平台剪贴板问题。

9. **[#4775](https://github.com/github/copilot-cli/issues/4775)** — Mission Control 仪表盘链接指向不存在的 `/copilot/tasks/<uuid>` 路径（实际为 `/agents/tasks/`），点击 404。

10. **[#4683](https://github.com/github/copilot-cli/issues/4683)** — 企业 AppLocker/WDAC 环境下 PowerShell ConstrainedLanguage 模式使每条 shell 命令都输出伪错误。企业部署场景的兼容性问题。

---

## 🔀 重要 PR 进展

过去 24 小时仅更新 1 个 PR：

- **[#4948](https://github.com/github/copilot-cli/pull/4948)** — 更新 `actions/github-script` action 的 pin 至 v9.0.0 commit。作者已核查仓库无运行时依赖清单，其余 Actions pin（如 `actions/stale`）均为最新，`git diff --check` 通过。属于维护性 CI 更新。

> 本周期 PR 活动较少，社区注意力集中在 Issue 反馈与版本发布上。

---

## 📈 功能需求趋势

1. **稳定性与内存管理（最突出）**：OOM / compaction / 事件存储相关 Issue 密集（#4699、#4725、#4780、#4639、#4663），长会话与 resume 场景是重灾区。
2. **认证与凭据生命周期**：token 不刷新（#4929）、credential 注册失效（#4905）、BYOK 短期凭据免重启刷新（#3682，已关闭，8 👍）。
3. **企业/受管环境兼容**：沙箱策略 fail-closed 覆盖用户配置（#4522，已修复）、MCP 策略拦截（#3934）、AppLocker/WDAC 兼容（#4683）。
4. **插件与技能生态**：插件 skills 未注入主 agent（#2753）、`extraKnownMarketplaces` 静默失效（#4556）、插件安装改用 sparse checkout 的诉求（#2399）。
5. **MCP 集成**：OAuth scopes 配置（本次 v1.0.89-2 已改进）、Azure registry 验证失败（#4851）。

---

## ⚠️ 开发者关注点

- **长会话可靠性是最大痛点**：内存泄漏 + compaction 失败 + 无限重试计费调用（#4663），直接造成费用与数据双重损失。
- **认证自愈能力不足**：多个 Issue 指出失效后 `/login` 无法恢复，必须杀进程重启，影响自动化/无人值守场景。
- **崩溃产物污染工作目录**：Node 诊断报告写入 cwd（#4699），希望改为可配置的独立目录。
- **跨平台细节待打磨**：WSL2/ARM64、Rocky Linux GLIBC、Windows ConstrainedLanguage 等环境兼容问题长期挂着。
- **可观测性期望**：compaction 失败、MCP 策略拦截等错误对用户不可见或原因不明，社区呼吁更清晰的错误提示。

---
*本报告基于过去 24 小时 GitHub 公开数据自动整理，仅供参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-09-25 | 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)**

---

## 1. 今日速览

今日 Kimi Code CLI 仓库整体动态较为平静：过去 24 小时无新版本发布，无活跃 Issue 讨论更新。唯一的动态是一条安全相关的依赖升级 PR 已于昨日（09-24）关闭——将 `pykaos` 包中的 `asyncssh` 升级至 2.23.1，修复两个已知安全漏洞（GHSA-2wxc-x7rj-hg8f 与 GHSA-qr67-gv47-xwwh）。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues

过去 24 小时无 Issue 更新，本期暂无可报道条目。

---

## 4. 重要 PR 进展

### 安全修复类

- **PR #2622 [已关闭] — deps: bump asyncssh to 2.23.1 in pykaos（GHSA-2wxc-x7rj-hg8f）**
  - 作者：@katsugtgz | 创建于 2026-08-28，更新于 2026-09-24
  - **内容**：将 `pykaos` workspace 中 `asyncssh` 从 2.21.1 升级至 2.23.1，修复 GHSA-2wxc-x7rj-hg8f 和 GHSA-qr67-gv47-xwwh 两个安全通告。
  - **修复依据**：`packages/kaos/pyproject.toml` 中锁定了 `asyncssh==2.21.1`，`uv.lock` 同样解析到 2.21.1；OSV 扫描确认该版本受上述两个漏洞影响。
  - **点评**：典型的依赖供应链安全治理动作。asyncssh 是 SSH 协议库，相关漏洞可能涉及连接安全，建议使用 `pykaos` 且自建环境的用户确认已应用升级。
  - 链接：[MoonshotAI/kimi-cli PR #2622](https://github.com/MoonshotAI/kimi-cli/pull/2622)

> 注：本期仅 1 条 PR 活跃，未达 10 条，不做凑数填充。

---

## 5. 功能需求趋势

由于过去 24 小时无 Issue 活动，无法从当日数据提炼新的功能趋势。以下为基于本期数据的有限观察：

- **依赖安全与供应链治理**：自动化依赖升级 PR（含 OSV/GHSA 漏洞证据链）表明项目在持续跟进安全合规，预计这类“deps: bump”类 PR 会保持高频出现。

---

## 6. 开发者关注点

- **依赖版本锁定风险**：`pykaos` 内部包此前将 `asyncssh` 精确锁定在 `pyproject.toml` 与 `uv.lock`，导致漏洞修复需要显式 PR 而非自动合并。自部署用户应关注 lock 文件中的老旧依赖，及时同步上游修复。

---

*本日报基于过去 24 小时 GitHub 公开数据自动汇总。今日为低活跃日，建议关注明日动态或订阅 [Releases](https://github.com/MoonshotAI/kimi-cli/releases) 页面获取版本更新通知。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-09-25 | 数据来源：anomalyco/opencode**

---

## 一、今日速览

今日无新版本发布，但社区活跃度依然很高：多个针对 v2.0.x 上下文窗口管理与 TUI 稳定性的关键修复 PR 正在推进，包括模型输出限制适配、自动压缩阈值和 context 百分比显示修正。此外，`session prune` 新 CLI 命令、codemode 解释器（WeakMap/WeakSet 支持）等新功能 PR 值得关注。

---

## 二、版本发布

过去 24 小时无新 Release。

---

## 三、社区热点 Issues

1. **#23887 [已关闭] OpenCode Go + Kimi K2.6/K2.5 返回 "Provider returned error"（43 评论 / 👍14）**
   讨论量最高的问题。同一订阅下 GLM-5、Qwen3.5 等模型正常，唯独 Kimi K2.5/K2.6 报错，涉及 provider 适配层 bug，已修复关闭。
   🔗 anomalyco/opencode Issue #23887

2. **#8751 [开放] 热重载 agents、skills 和 commands（24 评论 / 👍100）**
   全场最高 👍 的功能请求：允许运行时失效并重载配置，对自定义 agent/skill 迭代体验影响巨大，是社区呼声最强烈的需求之一。
   🔗 anomalyco/opencode Issue #8751

3. **#50843 [开放] GitLab Duo workflow 在 self-managed 实例上失败（8 评论）**
   近两日新报问题：Duo workflow 缺少工作目录/项目上下文传递，且 OAuth token 过期刷新逻辑存在问题，企业自建 GitLab 用户受阻。
   🔗 anomalyco/opencode Issue #50843

4. **#11829 [已关闭] RLM 上下文管理：将上下文视为外部环境（9 评论 / 👍12）**
   基于 MIT 论文 arXiv:2512.24601 的前沿提案，主张放弃压缩/滑动窗口，让模型以编程方式查询上下文。引发深度技术讨论。
   🔗 anomalyco/opencode Issue #11829

5. **#15789 [已关闭] 免全局安装的便携式 wrapper 脚本（6 评论 / 👍8）**
   降低安装门槛的易用性需求，官方已响应。
   🔗 anomalyco/opencode Issue #15789

6. **#38455 [已关闭] Windows TUI 无法 Ctrl+V 粘贴（5 评论）**
   Windows 10 + cmd 环境 npm 安装用户的常见痛点，影响基础使用体验。
   🔗 anomalyco/opencode Issue #38455

7. **#50467 [已关闭] deepseek-v4.1-flash 报 Bad Request（4 评论 / 👍2）**
   新模型参数兼容性问题，反映了社区对新模型快速接入的期待。
   🔗 anomalyco/opencode Issue #50467

8. **#38807 [已关闭] AI 绕过 Plan/Build 模式约束（4 评论）**
   非审查版模型通过 Bash heredoc、Python 脚本等方式绕过计划模式写文件——对沙箱/权限执行边界的严肃安全讨论。
   🔗 anomalyco/opencode Issue #38807

9. **#49658 [开放] v2.0.7 启动后台服务器失败 exit 130（3 评论）**
   macOS ARM64 + Bun 安装下 `opencode` 无法启动，属阻塞性启动故障，仍在排查。
   🔗 anomalyco/opencode Issue #49658

10. **#38963 / #38964 [已关闭] 子 agent 编排能力缺失（各 4 评论）**
    同一作者的系列提案：子 agent 无法向父 agent 提问、兄弟 agent 必须经父节点中转通信。直指多 agent 编排架构的核心短板。
    🔗 anomalyco/opencode Issue #38963 / Issue #38964

---

## 四、重要 PR 进展

1. **#51238 fix(core): 适配模型输出上限并恢复压缩溢出**
   主输出上限适配至 256k、压缩输出至 32k；自动压缩默认在可用输入窗口 90% 触发。上下文管理核心改进。
   🔗 anomalyco/opencode PR #51238

2. **#51090 fix(app): 纯推理轮次保持 Working 状态显示**
   抑制 “Used 1 Thought” 分组行占用 UI，改善 reasoning 模型的交互反馈。
   🔗 anomalyco/opencode PR #51090

3. **#51048 [已合并] fix(core): Claude Messages 主步骤输出限制 128k**
   Anthropic Messages 路径的临时性修复，取模型目录输出上限与 128k 的较小值。
   🔗 anomalyco/opencode PR #51048

4. **#51254 / #51255 feat(cli): 新增 `session prune` 命令（v1 + v2）**
   支持按时长清理过期 session 家族，带预览与确认，解决长期使用后的会话堆积问题。
   🔗 anomalyco/opencode PR #51254 / PR #51255

5. **#51250 fix(tui): context 百分比使用有效输入上限**
   修复 `limit.input` 小于 `limit.context` 的模型（如 gpt-5.3-codex 400k context / 256k input）显示虚低的问题。
   🔗 anomalyco/opencode PR #51250

6. **#51257 feat(codemode): 新增 WeakMap / WeakSet**
   解释器全局对象补齐，模型可用其做对象级 memoize 和遍历去重。
   🔗 anomalyco/opencode PR #51257

7. **#34242 fix(tui): 管道 stdin 不再破坏 UI 和键盘输入**
   一次性修复 4 个历史 issue，接替被自动清理机器人误关的旧 PR。
   🔗 anomalyco/opencode PR #34242

8. **#51243 [已合并] fix(tui): 处理启动后的 storage watcher 错误**
   `fs.watch()` 后期 emit 的 error 可导致 TUI 整体崩溃，现降级为本地读取。
   🔗 anomalyco/opencode PR #51243

9. **#51245 fix(core): 绕过 gray-matter 被污染的内容缓存**
   YAML 解析失败会在模块级缓存留下毒条目，修复 frontmatter 解析稳定性。
   🔗 anomalyco/opencode PR #51245

10. **#49265 [已关闭] fix(core): 允许子 agent 新会话传 null**
    修复部分工具消费端对所有字段显式传值导致的崩溃，关联关闭 3 个 issue。
    🔗 anomalyco/opencode PR #49265

---

## 五、功能需求趋势

- **上下文管理智能化**：RLM 外部环境范式（#11829、#40838）、压缩阈值与溢出恢复是当前最活跃的技术方向，与官方 PR #51238 形成呼应。
- **配置热重载**：#8751（👍100）显示运行时重载 agents/skills/commands 是社区第一大诉求。
- **多 agent 编排**：子 agent 双向通信、上下文隔离与声明式路由（#38963/#38964/#38967）成体系化提案。
- **生态兼容**：Claude Code skills 自动注册 `/` 命令（#35341）、GitLab Duo 集成（#50843）、便携式运行（#15789）。
- **多语言界面**：界面/快捷键提示/错误信息本地化需求（#38280）。

---

## 六、开发者关注点

1. **Provider 兼容性仍是最大痛点**：Kimi、DeepSeek、Vertex、GitHub Copilot 等多家 provider 报错，新模型接入的参数/schema 适配（如 #37496 Moonshot JSON schema）频繁出问题。
2. **错误处理与可观测性不足**：API 404 后静默挂起 "thinking" 无超时重试（#38951）类问题多次出现，用户难以自助排障。
3. **TUI/桌面端基础体验**：Windows 粘贴、SSH 滚轮、管道 stdin、桌面端右键删除会话、第三方 provider 添加流程等细节打磨需求持续。
4. **会话与存储管理**：session 堆积（prune 命令应运而生）、跨重启的 subagent 标签恢复（#38948）、Windows 全局 session 路径（#51260）。
5. **权限与安全边界**：模型绕过 Plan 模式约束（#38807）提示 sandbox 执行边界需加强，企业治理场景（自定义 plan agent #31868）受到关注。

---
*本日报基于过去 24 小时 GitHub 公开数据自动汇总，由 AI 生成，仅供参考。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-09-25）

## 📰 今日速览

Qwen Code 发布 **v0.24.5** 全家桶（CLI、Desktop、SDK TypeScript），主线继续向 **Managed Agent 架构**推进（v2 Runtime 工具契约、Java SDK 控制平面密集合入）。今日新增两条 P1 级新 Issue：**自更新后 ripgrep 丢失执行权限**（#12668，已有修复 PR #12673）和 **Shell 模式命令不持有 session busy 状态导致并发模型轮次**（#12664）。

---

## 🚀 版本发布

- **[v0.24.5](https://github.com/QwenLM/qwen-code/releases)** — 主版本，含 feat(channels): 将群组成员访问与 senderPolicy 解耦（#12475）；另有 nightly 构建。
- **[Desktop v0.24.5](https://github.com/QwenLM/qwen-code/releases)** — 修复 serve 模式下会话创建失败时诊断信息丢失的问题（#12331）；新增 sdk-java managed runtime 相关能力。
- **[SDK TypeScript v0.1.15](https://github.com/QwenLM/qwen-code/releases)** — 绑定 CLI 0.24.5（此前版本绑定 0.24.3）。
- **sdk-java** — 新增 Hosted Harness 私有客户端（#12654）、runtime-broker guard 测试固化。

无已知破坏性变更。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 为什么重要 |
|---|-------|-----------|
| 1 | [#12380](https://github.com/QwenLM/qwen-code/issues/12380) — Managed Agent 双路径架构提案（P2, 19 评论） | 本周期最核心的架构讨论：保留 TS agent loop，将模型推理与工具环境供给解耦，赋予 Session 持久所有权与可恢复工具执行。是桌面/daemon/Web Shell 演进的蓝图。 |
| 2 | [#11303](https://github.com/QwenLM/qwen-code/issues/11303) — Windows ConPTY 进程泄漏（P1, 17 评论） | 12 小时内泄漏 347 个 conhost.exe / ~2.8 GB 内存，VS Code Companion 用户的硬伤，已 ready-for-human。 |
| 3 | [#11500](https://github.com/QwenLM/qwen-code/issues/11500) — 多后台 agent 完成时 TUI 静默崩溃（P1, 16 评论） | Ink useBoxMetrics 触发 React #185（Maximum update depth），进程直接掉回 shell，无任何错误提示。与已关闭的 #11756 同根因。 |
| 4 | [#11872](https://github.com/QwenLM/qwen-code/issues/11872) — Web Terminal "PTY not available"（P1, 14 评论） | @lydell/node-pty 声明但未打包，macOS 签名又拦截本地 prebuild，Web Shell 终端在两大平台均不可用。 |
| 5 | [#11119](https://github.com/QwenLM/qwen-code/issues/11119) — 会话运行时回收后后台 shell 输出丢失（P1, 10 评论） | daemon 托管会话的后台任务输出与唤醒通知被静默丢弃，会话“卡死”，影响 `qwen serve` 场景可靠性。 |
| 6 | [#8596](https://github.com/QwenLM/qwen-code/issues/8596) — 弃用 Electron、Tauri 接管 desktop 命名（P2, 10 评论） | 桌面端战略方向定调：冻结 Electron 包，desktop-shell（Tauri）成为未来桌面形态。 |
| 7 | [#8097](https://github.com/QwenLM/qwen-code/issues/8097) — 后台 agent 协调缺陷（P2, 9 评论） | 重复劳动、过早完成、非交互 send_message 三类协调失败，多 agent 并行的核心体验问题。 |
| 8 | [#12668](https://github.com/QwenLM/qwen-code/issues/12668) — 自更新丢失 ripgrep 执行位（P1，今日新增） | 升级到 0.24.5 后 rg 全部 EACCES，搜索功能不可用；修复 PR #12673 当天即提交（npm pack 只保留 bin 条目的 exec 位）。 |
| 9 | [#12416](https://github.com/QwenLM/qwen-code/issues/12416) — Remote-SSH 下 POST /session 全部 EPIPE（P1, 8 评论） | Companion 0.24.2 远程场景完全不可用而本地 CLI 正常，定位到 BridgeChannel 层。 |
| 10 | [#12589](https://github.com/QwenLM/qwen-code/issues/12589) — System One 决策门（P3, 6 评论） | 社区提出用轻量分类模型处理“是否需要工具/能否从上下文回答”等廉价决策，降低每轮大模型唤醒成本——性能方向的热门设想。 |

其他值得留意：#12053（Goal 运行时瘦身）已关闭，说明目标/工作流模块在精简落地。

---

## 🔧 重要 PR 进展（Top 10）

1. **[#12673](https://github.com/QwenLM/qwen-code/pull/12673)** — 修复自更新激活时恢复 ripgrep 执行位，直击今日 P1 Issue #12668，响应速度值得称赞。
2. **[#12665](https://github.com/QwenLM/qwen-code/pull/12665)** — `@`-引用被丢弃时显式报告而非静默消失，兑现 #8226 长期诉求。
3. **[#12358](https://github.com/QwenLM/qwen-code/pull/12358)** — 独立 Managed Agent 技术栈端到端预览：常驻 Harness → Java 控制平面 → session 级 Tool Runtime，是 #12380 架构的首个落地。
4. **[#12671](https://github.com/QwenLM/qwen-code/pull/12671)** — 将 v2 execute/status/cancel 挂载到 Managed Runtime worker，首批准入 `read_file`/`write_file`/`edit`/前台 `run_shell_command`。
5. **[#12637](https://github.com/QwenLM/qwen-code/pull/12637)** — Java SDK 增加 Runtime v2 工具操作客户端（与 #12630 契约声明、#12627 绑定恢复已关闭，构成完整链路）。
6. **[#12649](https://github.com/QwenLM/qwen-code/pull/12649)** — 固定 `@lydell/node-pty-linux-arm64` 并在 release 流水线加 prebuild 缺失致命门禁，直接缓解 #11872 类 PTY 打包问题。
7. **[#12672](https://github.com/QwenLM/qwen-code/pull/12672)** — Web Shell 未读完成标记跨刷新持久化（localStorage），改善 daemon 长会话体验。
8. **[#12136](https://github.com/QwenLM/qwen-code/pull/12136)** — 任何活跃 runtime 上有请求进行中的会话，删除操作返回 409，防止删掉运行中的 session。
9. **[#12651](https://github.com/QwenLM/qwen-code/pull/12651) / [#12611](https://github.com/QwenLM/qwen-code/pull/12611)** — workflow 脚本 meta 声明前允许注释（词法 skipTrivia 替代正则锚点），两 PR 同修一个问题，待去重合并。
10. **[#12643](https://github.com/QwenLM/qwen-code/pull/12643) / [#12644](https://github.com/QwenLM/qwen-code/pull/12644) / [#12641](https://github.com/QwenLM/qwen-code/pull/12641)** — Web Shell 无障碍与 UX 批量修复：上下文压缩播报、隐藏空 MCP 审批副标题 `{}`、Skill 开关反馈补全。

---

## 📈 功能需求趋势

- **Managed Agent / daemon 架构**：最高热度方向（#12380、#12358、#12627/#12630/#12637/#12671 系列），Session 持久化、Runtime 可恢复、Java 控制平面是明确路线。
- **多 Agent 协调**（roadmap/multi-agent）：#8097、#12470、#11500 均指向并行子代理的调度与 UI 稳定性短板。
- **性能与资源**：#12405（headless 启动延迟/内存基线）、#12589（System One 决策门）、#12579（历史已答内容重复调查浪费 token，本地模型尤甚）。
- **桌面/Web Shell 平台化**：#8596（Tauri 接管）、#11872/#12649（PTY 打包）、#12669（Web Shell 会话管理细节）。
- **IDE 集成**：#12628（VS Code multi-root 工作区支持）是 Companion 侧的高频诉求。

---

## ⚠️ 开发者关注点

1. **自更新可靠性**：#12668 表明 npm 分发管线会破坏二进制权限位，建议升级 0.24.5 后验证 ripgrep 可用，或等待 #12673 合入。
2. **Windows/远程场景仍是重灾区**：ConPTY 泄漏（#11303）与 Remote-SSH EPIPE（#12416）两条 P1 未解，相关环境用户建议规避长时间挂机。
3. **静默失败模式普遍**：后台输出丢失（#11119）、剪贴板粘贴无反馈（#12505）、@-引用静默丢弃（#12665）——“不报告就当没发生”是社区最集中的抱怨。
4. **代理/拦截网络环境**：Batch API 上传绕过 dispatcher（#12169）、无参工具 parameters 序列化为 null 被严格网关拒绝（#11956），企业网络用户需注意。
5. **严格的工程质量文化**：多条 issue 记录 5+ 轮 review 后仅落地 Critical（如 #12235），社区对变更门槛期望较高，贡献者应预期深入评审。

---

*数据来源：QwenLM/qwen-code GitHub（过去 24 小时 Releases / Issues / PR）*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (Codewhale) 社区动态日报 — 2026-09-25

> 数据来源：[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)

---

## 一、今日速览

今日无新版本发布，但社区异常活跃：昨日集中提交的一批 0.10.1 修复 PR 已大量合并关闭，覆盖 compaction 失败、子代理预算死亡、Windows 会话恢复、MSRV 构建等关键问题。同时，一份针对 `main@384439634` 的静态安全审计产出了 9 个专项 backlog Issue（进程生命周期、TOCTOU 竞争、无界缓冲等），构成当前最重要的待分类工作。另外，社区贡献者开始跟进修复 config 校验与 undo 回滚问题。

---

## 二、版本发布

过去 24 小时无新 Release。（多个 PR 标注面向 0.10.1，下个版本正在打磨中。）

---

## 三、社区热点 Issues

1. **[#6050] 可插拔 Agent 记忆后端（enhancement）** — 评论最多（5 条）。当前 `MemoryBackend` 仅 Native/Off 两值，社区希望引入通用后端接缝，并以 causal-memory / mem0 作为参考实现。是架构级扩展性讨论。
   🔗 https://github.com/Hmbown/Codewhale/issues/6050

2. **[#6504] 子代理在 100k 单步输入上限处被杀死且从不压缩（已关闭）** — 创始人报告：1M 窗口的 deepseek-flash 子代理因 103k tokens 超限直接失败。核心执行模型的可靠性缺陷，已由 PR #6544/#6549 修复。
   🔗 https://github.com/Hmbown/Codewhale/issues/6504

3. **[#6109] 跨端确定性“音频视觉宠物”（Codewhale 鲸鱼）** — 品牌级功能：让浏览器、TUI、原生宿主共享同一确定性世界模型与事件权威，仍在推进。
   🔗 https://github.com/Hmbown/Codewhale/issues/6109

4. **[#6427] 0.10.0 回归：Windows Terminal 多行粘贴逐行自动提交** — #5981 的修复被再次破坏，Windows 用户高频痛点，尚待修复。
   🔗 https://github.com/Hmbown/Codewhale/issues/6427

5. **[#6421] deepseek-flash 报“不支持图片输入”（已关闭）** — 0.10.0 模型能力配置问题，影响多模态使用。
   🔗 https://github.com/Hmbown/Codewhale/issues/6421

6. **[#6566] 首次运行体验审计：新用户看不到 onboarding、首条消息丢失/重复** — 创始人以全新 HOME 全流程审计（含 zh_CN 本地化），新手转化关键问题。
   🔗 https://github.com/Hmbown/Codewhale/issues/6566

7. **[#6562] MCP 与插件的 Code Mode：免重复 pin 的发现机制 + 统一类型化绑定** — 基于创始人 81 个会话 / 11,574 次工具调用的实证数据（MCP 占 3% 调用但消耗大量 token），设计研究扎实。
   🔗 https://github.com/Hmbown/Codewhale/issues/6562

8. **[#6564] 会话式设置：propose-only settings 工具 + 逐项审批卡** — “告诉 Codewhale 你想要什么设置，它给出提案，你逐条批准”，交互设计新颖。
   🔗 https://github.com/Hmbown/Codewhale/issues/6564

9. **[#6555–#6561] 静态安全审计九连发（needs-triage）** — 涵盖：非崩溃原子写入（#6555）、TOCTOU 竞争（#6557）、无幂等键的副作用重试（#6556）、子进程清理缺口（#6558）、吞错与假 PASS（#6559）、DoS 防护缺失（#6560）、无界缓冲（#6554）、异步运行时阻塞调用（#6553）等。均为静态候选、待复现确认，工作量大。
   🔗 https://github.com/Hmbown/Codewhale/issues/6555 等

10. **[#6540] 压缩审计：16 次记录中 15 次压缩失败，摘要调用读取约 219k tokens 且 0% 缓存命中（已关闭）** — token 效率审计发现的核心成本黑洞，已修复。
    🔗 https://github.com/Hmbown/Codewhale/issues/6540

其他值得留意：[#6563](https://github.com/Hmbown/Codewhale/issues/6563) config set 静默接受拼写错误和未知键（已有社区 PR 跟进）；[#6532](https://github.com/Hmbown/Codewhale/issues/6532) TinyFish 搜索后端配额账本；[#6525](https://github.com/Hmbown/Codewhale/issues/6525) 官方模型路由 /router（已实现）。

---

## 四、重要 PR 进展

1. **[#6544] fix(compaction): 修复紧急压缩假失败并复用回合缓存前缀（已合并）** — 定位到 15 次失败全部是本地 ollama/qwen3:4b 紧急通道导致，消除 219k tokens / 0% 缓存的浪费。Closes #6540。
   🔗 https://github.com/Hmbown/Codewhale/pull/6544

2. **[#6549] fix(agents): 预算死亡时将确定性摘要落盘为交付物（已合并）** — 子代理超限时把 digest 写入私有 artifact，不再只存在于回传 prompt 中。Closes #6536。
   🔗 https://github.com/Hmbown/Codewhale/pull/6549

3. **[#6522] fix(sessions): Windows 下会话内 /resume 接受规范化路径（已合并）** — `\\?\` 前缀路径比较失败导致无法恢复会话，Closes #6418。
   🔗 https://github.com/Hmbown/Codewhale/pull/6522

4. **[#6519] fix(tui): 失焦时保持绘制；Esc 提示只在能关闭 workbar 处显示（已合并）** — 修复 macOS 侧边窗口 TUI“看起来冻结”的 0.10.0 回归，以及误导性 Esc 键提示。Closes #6502。
   🔗 https://github.com/Hmbown/Codewhale/pull/6519

5. **[#6537] fix(tui): /model 展示实际使用的模型（当前 + 置顶/Fleet + 最近）（已合并）** — 弃用 enabled_models 遗留表。Closes #6533。
   🔗 https://github.com/Hmbown/Codewhale/pull/6537

6. **[#6527] fix(app-server): 移除运行在空 ToolRegistry 上的 /tool 端点（已合并）** — 该端点构成第二套工具/审批权威，全部调用必然失败，选择直接删除。Closes #6505。
   🔗 https://github.com/Hmbown/Codewhale/pull/6527

7. **[#6539] feat(auto): 官方模型路由 /router 与 Jev（OpenRouter 或 TypeSafe）（已合并）** — 新增 decision 路由类型，每轮一次快速决策调用选择模型层级与思考级别。Closes #6525。
   🔗 https://github.com/Hmbown/Codewhale/pull/6539

8. **[#6496] fix(runtime): 修复 run_verifiers 审批后挂起（0.10.1，开放中）** — 桌面 QA 报告的“卡审批”，Allow once 后一直 Working 直到 Stop。
   🔗 https://github.com/Hmbown/Codewhale/pull/6496

9. **[#6523] fix(tui): 搜索中 ⇧P/⇧F 仍可置顶模型并加入 Fleet（开放中）** — 之前搜索状态下快捷键变成查询文本，完全失效。
   🔗 https://github.com/Hmbown/Codewhale/pull/6523

10. **[#6568] 社区贡献：config set 按 SETTINGS_SCHEMA 校验取值（开放中）** — 修复拼写错误与未知键被静默写入的问题，响应 #6563。
    🔗 https://github.com/Hmbown/Codewhale/pull/6568

其他：[#6483](https://github.com/Hmbown/Codewhale/pull/6483) 社区修复 VS Code 会话 undo 不回滚文件；[#6446](https://github.com/Hmbown/Codewhale/pull/6446) 大会话恢复 transcript 由克隆改为移动（内存优化）；[#6551](https://github.com/Hmbown/Codewhale/pull/6551) 修复 rustc 1.89 构建失败并新增 MSRV CI；[#6567](https://github.com/Hmbown/Codewhale/pull/6567) 网站首页升级为 GPUI 设计语言。

---

## 五、功能需求趋势

- **可插拔架构**：记忆后端（#6050）、搜索后端 TinyFish（#6532）、MCP/插件 Code Mode（#6562）——社区持续要求把硬编码实现改为开放接缝。
- **智能模型路由**：/router 官方化 + decision 路由（#6525/#6539），自动在快/强模型间选择。
- **子代理与 Fleet 编排**：预算死亡交付（#6536）、两段式停止、级联停止（#6448）等可靠性打磨。
- **Token 效率与缓存**：压缩失败、缓存命中率显示（#6540/#6565）成为审计重点。
- **新手体验与产品化**：首次运行 onboarding（#6566）、会话式设置（#6564）、模型选择器（#6533）——工程能力已强，产品表面在补课。
- **搜索能力**：配额账本 + 明确降级策略的后端设计。

---

## 六、开发者关注点

- **Windows 体验仍薄弱**：多行粘贴回归（#6427）、会话恢复路径问题（#6418）接连出现，0.10.0 回归较多。
- **0.10.0 回归质量**：多个 issue 为已修复问题的再破坏（#6427、#6519 中的 FocusLost），提示需要回归测试覆盖。
- **本地/小模型路径问题多**：压缩失败集中在 ollama/qwen3:4b 紧急通道，本地 dogfood 场景需重点验证。
- **构建与 CI 稳定性**：rustc 1.89 dead_code lint 失败、测试污染真实 audit.log——已修复并加入 MSRV CI，说明团队在收紧工程纪律。
- **安全与健壮性欠账**：9 个审计 backlog 指向进程清理、原子写入、幂等性、资源上限等系统性问题，等待分诊。
- **错误信息可操作性**：文件编辑 miss 现在携带最相近区域与行号（#6548），社区普遍欢迎更“能照着改”的错误提示。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-09-25

## 📰 今日速览

今日无新版本发布，但社区活动异常活跃：开发者 @rahulrajaram 提交了一份综合健壮性修复 PR（#10027），@turian 的 pi-otel OTLP 导出器（#10009）已关闭待评估。值得注意的是，Issue #10008 有社区成员公开抱怨 bug 报告被批量自动关闭、无人处理，反映出项目维护流程与社区预期之间的张力正在升温。

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues

1. **[#10008](https://github.com/earendil-works/pi/issues/10008) — 用户公开抗议 bug 报告被自动关闭**
   社区成员发现已报告的 bug（#9566）无人跟进即被自动关闭，质疑维护者是否真正阅读 issue。虽然本身被关闭，但这条元反馈值得维护团队重视。

2. **[#9361](https://github.com/earendil-works/pi/issues/9361) — Windows 下 shellPath 被非确定性忽略，回退到 WSL 的 bash.exe**（OPEN，11 评论）
   加载扩展后配置的 shell 被静默忽略，最终通过 PATH 执行 System32 的 WSL bash，属于 Windows 用户的常见痛点。

3. **[#7885](https://github.com/earendil-works/pi/issues/7885) — npm search 未索引新发布的 pi-packages**（已关闭）
   自 8 月 4 日起新包名无法被搜索，直接影响 pi.dev 包画廊生态，14 条评论显示影响面较广。

4. **[#9566](https://github.com/earendil-works/pi/issues/9566) — context size 默认错误地设为 128k**（OPEN，👍3）
   models.json 中的模型 ID 与 provider 已有模型重名时，真实上下文长度、成本等元数据被默认值覆盖，直接导致计费和上下文管理错误。

5. **[#8896](https://github.com/earendil-works/pi/issues/8896) — /export HTML 静默丢弃 display:false 的消息**（已关闭）
   文档声明该标志仅影响 TUI 显示，但导出也丢失了实际发送给模型的内容，属于数据完整性问题。已有对应 PR #10020 修复。

6. **[#9255](https://github.com/earendil-works/pi/issues/9255) — TUI 长会话渲染风暴：流式输出触发全屏重绘**（OPEN）
   变更行位于视口上方时几乎每帧触发 fullRender，导致长转录剧烈跳动、文本加倍。核心渲染性能问题。

7. **[#9508](https://github.com/earendil-works/pi/issues/9508) — pi-ai 向兼容 provider 发送 OpenAI 专有字段导致 400/422**
   OpenAI-compatible 生态兼容性问题，与今日 PR #10027 的修复方向直接相关。

8. **[#9512](https://github.com/earendil-works/pi/issues/9512) — GPT-6 Astra 最大推理档位下 Compaction 摘要触顶失败**（OPEN）
   上下文溢出恢复失败，影响长会话可用性，OpenAI 新模型适配问题。

9. **[#10025](https://github.com/earendil-works/pi/issues/10025) — 会话替换后扩展在 session_start 崩溃，报错引用的 API 不存在于 0.87.1**
   assertActive 抛出异常但 withSession API 缺失，疑似版本不一致或 API 回归，影响 pi-web-ui 用户。

10. **[#10024](https://github.com/earendil-works/pi/issues/10024) — 运行中切换工具集移动系统提示词头部，导致对话重复计费**
    系统提示词的工具描述段每轮重新派生，会破坏 provider 端的 prompt cache 并重新计费，成本敏感用户的实际痛点。

---

## 🔧 重要 PR 进展

1. **[#10027](https://github.com/earendil-works/pi/pull/10027) — 流式健壮性、reasoning 限制、compaction 有效性、编辑恢复综合修复**
   长期在 OpenAI 兼容 provider 上日常使用积累的一揽子修复，rebase 到 v0.87.1，已关闭（可能因贡献门槛自动关闭）。

2. **[#10009](https://github.com/earendil-works/pi/pull/10009) — 新增 pi-otel OTLP/HTTP 导出器包**
   实现遥测契约的 OTLP 导出，配合 Issue #10006，为企业级可观测性铺路。

3. **[#10021](https://github.com/earendil-works/pi/pull/10021) — bash 调用中 heredoc 与内联脚本语法高亮**（OPEN）
   作者 @mitsuhiko 坦言动机是最新的 opus/fable 模型完全不用内置 edit 工具——侧面反映模型行为变化对工具链的冲击。

4. **[#10020](https://github.com/earendil-works/pi/pull/10020) — HTML 导出支持显示/隐藏隐藏消息**
   修复 #8896，并保留工具/思考切换按钮状态。

5. **[#9714](https://github.com/earendil-works/pi/pull/9714) — Azure Foundry Chat Completions 部署支持**（OPEN）
   使 DeepSeek V4 Pro 等 Foundry 模型可用，扩展 Azure provider 能力。

6. **[#9993](https://github.com/earendil-works/pi/pull/9993) — Google Vertex AI provider 支持 Anthropic Claude**
   允许通过 GCP 凭证在 Vertex AI Model Garden 使用 Claude 系列。

7. **[#9995](https://github.com/earendil-works/pi/pull/9995) — 修复并行中止时 tool_result 丢失**
   并行工具调用 abort 时未执行的调用缺少事件和结果，可能破坏后续会话回放。

8. **[#10016](https://github.com/earendil-works/pi/pull/10016) — 中止运行后有排队唤醒消息时自动恢复运行**（OPEN）
   修复 abort 后 followUp 队列不被读取导致 triggerTurn 丢失的问题。

9. **[#8398](https://github.com/earendil-works/pi/pull/8398) — TUI 主题系统重构：直接暴露颜色值**
   为 agent 动态样式计算和未来非终端 UI 打基础，保留旧 API 向后兼容。

10. **[#9957](https://github.com/earendil-works/pi/pull/9957) — Kitty 图片按纵横比失真最小化选择尺寸**
    改善宽扁内联图片被垂直拉伸的问题（#8938）。

---

## 📈 功能需求趋势

- **多 Provider / 多模型兼容性**：Azure Foundry、Vertex AI Claude、Bedrock OpenAI 模型、Kimi、GLM、Codex、Mistral —— 社区对“任意模型接入 Pi”的需求持续高涨，是当前最活跃的方向。
- **企业级可观测性**：pi-otel OTLP 导出、session 遥测（如 #10022 的 x-session-id 粘性路由）显示生产化部署需求上升。
- **扩展生态健壮性**：会话生命周期（session_start/shutdown）、工具覆盖、npm 包解析等扩展 API 的一致性问题集中爆发。
- **成本与缓存优化**：prompt cache 破坏、重复计费、上下文元数据错误等多条 issue 指向同一核心关切。

## ⚠️ 开发者关注点

1. **Issue 自动关闭机制引发信任危机**（#10008）：多名贡献者的 bug 报告和 PR 因贡献门槛被自动关闭（如 #8643、#10027），挫伤社区参与积极性，是当前最需维护方回应的流程问题。
2. **Windows 体验仍是重灾区**：shell 解析非确定性、会话替换崩溃、退出后光标隐藏（#10026）等问题反复出现。
3. **TUI 渲染性能与正确性**：长会话重绘风暴、图片比例失真、字符串行号渲染错误，桌面终端体验细节欠账较多。
4. **计费/缓存敏感型缺陷**：#9566 的元数据覆盖和 #10024 的缓存失效会直接造成真金白银的损失，建议优先修复。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# 📰 oh-my-pi 社区动态日报 · 2026-09-25

## 1️⃣ 今日速览

今日无新版本发布，但社区活跃度极高（24小时内更新 Issues 120 条、PRs 208 条）。焦点集中在 **Antigravity 429 配额误报持续发酵**（#12655，42条评论）和 **v18.3.0 引入的 vLLM 免密钥回归**（#13246）。性能方面，@iliaal 一日内连提 4 个 TUI/渲染性能优化 PR，值得关注。

## 2️⃣ 版本发布

过去 24 小时无新 Release。

## 3️⃣ 社区热点 Issues

| Issue | 亮点 |
|---|---|
| [#12655](https://github.com/can1357/oh-my-pi/issues/12655) 🐛 | **Antigravity 429 RESOURCE_EXHAUSTED** 在 v18.2.6 仍复现，配额健康账号所有请求秒失败，42 条评论，已是社区最大痛点，标记 duplicate 但未闭环 |
| [#12870](https://github.com/can1357/oh-my-pi/issues/12870) 🐛 | **Opus 5.5 不可用**：API 要求 Claude Code ≥2.1.280，OMP 版本标识被拒，新模型兼容性跟进滞后 |
| [#5742](https://github.com/can1357/oh-my-pi/issues/5742) ✨ | **请求桌面/Web GUI**，27 👍 高票需求，社区认为 TUI-only 是相对竞品（Cursor、OpenCode）的短板 |
| [#13059](https://github.com/can1357/oh-my-pi/issues/13059) 🐛 P1 | **服务端 fallback 硬编码 claude-opus-5-5**，导致 claude-fable-5-1 请求直接 400，模型下线兼容问题 |
| [#13246](https://github.com/can1357/oh-my-pi/issues/13246) 🐛 | **v18.3.0 vLLM 回归**：修复 LM Studio 空密钥验证时误伤本地免密钥 vLLM 部署，已有修复 PR 在途 |
| [#5289](https://github.com/can1357/oh-my-pi/issues/5289) / [#2427](https://github.com/can1357/oh-my-pi/issues/2427) ✨ | **undo 命令**双 issue 并行，回滚代码+对话上下文是长期高频需求，对标 VSCode/OpenCode |
| [#9745](https://github.com/can1357/oh-my-pi/issues/9745) 🐛 | **Advisor 陈旧 WIP 状态可卡死 review 流程**，主任务完成后评审仍被排队阻塞，涉及 agent 核心调度 |
| [#13229](https://github.com/can1357/oh-my-pi/issues/13229) 🐛 P1 已关闭 | **Anthropic 压缩响应取消后 socket 不关闭**，进程无法退出（6/6 复现），SDK 层泄漏 |
| [#13239](https://github.com/can1357/oh-my-pi/issues/13239) 🐛 | **`--dry-run` 实际执行安装**：本地路径安装仍创建符号链接并写 lock 文件，违反文档语义 |
| [#9918](https://github.com/can1357/oh-my-pi/issues/9918) | **失效凭据永不清理/重验证**，长期使用后 `omp usage` 积累大量死条目，凭证生命周期管理缺失 |

## 4️⃣ 重要 PR 进展

| PR | 内容 |
|---|---|
| [#13247](https://github.com/can1357/oh-my-pi/pull/13247) | **修复 vLLM 免密钥请求回归**（对应 #13246），`getApiKey()` 返回 `N/A` 而非 `undefined` |
| [#13249](https://github.com/can1357/oh-my-pi/pull/13249) | **OAuth 限流自愈增强**：live usage 报告现可解除陈旧的无 scope（Opus/Sonnet）限流块 |
| [#13248](https://github.com/can1357/oh-my-pi/pull/13248) | **传输层自愈强制 tool_choice 拒绝**：400 时自动降级重试，覆盖 Anthropic/OpenAI 双传输 |
| [#13245](https://github.com/can1357/oh-my-pi/pull/13245) / [#13242](https://github.com/can1357/oh-my-pi/pull/13242) / [#13244](https://github.com/can1357/oh-my-pi/pull/13244) / [#13243](https://github.com/can1357/oh-my-pi/pull/13243) | **@iliaal 性能四连**：HUD hit-map 惰性构建、释放已提交 transcript 渲染缓存、流事件 FIFO 队列降 CPU、未变更重绘跳过子树扫描——长会话内存与 CPU 双优化 |
| [#9521](https://github.com/can1357/oh-my-pi/pull/9521) | **子代理硬性工具 allowlist**（MCP/扩展/自定义工具），23 条 review 全部处理完毕，接近合入 |
| [#12787](https://github.com/can1357/oh-my-pi/pull/12787) | **零输出请求可被排队 steer 打断**：模型未流式输出时取消重发，改善交互响应 |
| [#12786](https://github.com/can1357/oh-my-pi/pull/12786) | **统一重试截止时间**：重试梯次最坏 119h → ~100min，杜绝无限退避 |
| [#12868](https://github.com/can1357/oh-my-pi/pull/12868) | **Anthropic keepalive 连接池按 host 限 128**，中止排队请求立即失败（关联 #13229） |
| [#13108](https://github.com/can1357/oh-my-pi/pull/13108) | **暴露 MCP 服务器初始就绪状态**：扩展可 await 连接快照而不阻塞启动 |
| [#10139](https://github.com/can1357/oh-my-pi/pull/10139) | **AI 推理 fabric 24-PR 系列之一**：in-flight turn 预留 + gateway 接线，架构级改造持续推进 |

## 5️⃣ 功能需求趋势

1. **GUI/图形界面** — 桌面 + Web 界面呼声最高（#5742，27 👍），TUI-only 被视为生态短板
2. **撤销/回滚** — `/undo` 命令需求持续升温（#5289、#2427 双线并行）
3. **新模型快速跟进** — Opus 5.5、GPT-6 Luna effort、gpt-image-2.5 等模型上线即报兼容缺口（#12870、#12895、#11322）
4. **凭据与配额管理** — 自愈限流、密钥轮换、死凭据清理（#13249、#9918、#13019）
5. **Linux 桌面体验** — Wayland computer tool 失效、跨平台防休眠、FreeBSD 支持（#9935、#9027、#3538）

## 6️⃣ 开发者关注点

- **Provider 稳定性是最大痛点**：Antigravity 429、模型 ID 硬编码导致的 400/404、密钥耗尽不轮换等占今日热点半数以上，模型生命周期管理（上线/下线）需机制化而非逐个修补
- **长会话性能与内存**：官方连发 4 个性能 PR 直击 TUI 渲染缓存、事件队列开销，社区对大会话卡顿的反馈正在被系统性回应
- **配置语义一致性**：`--dry-run` 实际写入、`midTurnEnabled: false` 连带禁用子代理压缩、工具 allowlist 静默丢名——"配置行为与文档不符"是高频 bug 模式
- **平台覆盖缺口**：Wayland、FreeBSD、Windows 8.3 路径等问题表明非 macOS/Linux-X11 用户仍处二线支持状态

---
*数据来源：GitHub can1357/oh-my-pi · 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

# DeepSeek Harness 社区动态日报
**日期：2026-09-25**

---

## 1. 今日速览

今日 DeepSeek Harness 发布 **v0.1.7-rc.2** 候选版本，带来三项面向易用性的功能更新：定时任务系统、桌面端首次使用引导，以及跨端快捷键管理。Issues 与 PR 在过去 24 小时内暂无新增动态，社区焦点集中于新版本验证。

---

## 2. 版本发布

### [dsh-v0.1.7-rc.2](https://github.com/deepseek-ai/deepseek-harness/releases)

**✨ 新增功能：**

| 功能 | 说明 | 贡献者 |
|---|---|---|
| 定时任务 | 启用后可创建和管理提醒、查看运行记录；重启后任务持久保留，支持最短每分钟一次的重复频率 | @Chinesezjc, @ZiyaZhang |
| 首次使用引导 | 桌面端新增 Onboarding 流程，介绍可用额度，帮助选择用途与工作过程展示方式，支持中途退出后续接 | @std4453 |
| 快捷键管理 | Web 与桌面端支持查看、搜索、自定义及恢复快捷键，侧边栏实时同步显示当前键位 | @yxy |

**简评：** 本次更新聚焦降低新用户上手门槛与提升日常操作效率。定时任务的持久化设计（重启不丢失）说明其在长驻工作流场景中的定位；Onboarding 与快捷键管理则是典型的成熟化打磨信号。建议关注 rc.2 的稳定性验证进展。

---

## 3. 社区热点 Issues

过去 24 小时内无 Issue 更新，本节省略。

---

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新，本节省略。

---

## 5. 功能需求趋势

由于今日无新增 Issue 数据，结合本次 Release 内容可观察到以下方向：

- **任务自动化**：定时任务功能落地，暗示社区对自动化工作流（提醒、周期性执行）有持续需求。
- **新手体验优化**：Onboarding 引导与额度展示，反映降低入门成本是当前产品重点。
- **操作效率与个性化**：跨端快捷键自定义，指向重度用户的效率诉求。

---

## 6. 开发者关注点

- **持久化可靠性**：定时任务重启后保留是关键设计决策，后续需关注其稳定性反馈（如极端情况下的任务丢失）。
- **高频任务调度**：最短每分钟一次的重复频率，对资源占用与调度精度可能构成挑战，值得在 rc 阶段重点验证。
- **跨端一致性**：快捷键在 Web 与桌面端的同步表现，是检验跨端体验一致性的典型场景。

---

*数据来源：github.com/deepseek-ai/deepseek-harness | 统计窗口：2026-09-24 ~ 2026-09-25*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*