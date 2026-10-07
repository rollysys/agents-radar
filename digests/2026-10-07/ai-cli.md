# AI CLI 工具社区动态日报 2026-10-07

> 生成时间: 2026-10-07 04:57 UTC | 覆盖工具: 11 个

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
**数据日期：2026-10-07 | 覆盖 12 个主流/新兴工具**

---

## 一、生态全景

AI CLI 工具已进入“Agent 平台化”竞争阶段：头部工具（Claude Code、Codex、Gemini CLI）从单纯编码助手演进为涵盖子代理调度、定时任务、Computer Use、远程/移动端协作的完整 Agent 运行时。同时，安全与成本成为两条贯穿性主线——数据丢失、沙箱绕过、预算失控类问题在几乎所有社区同时爆发。Windows 平台支持质量成为共同的短板与攻坚重点。迭代节奏上，头部保持每日 alpha/nightly 级滚动发布，反映出竞争白热化。

---

## 二、各工具活跃度对比

| 工具 | Issue 更新 | PR 更新 | Release | 今日亮点/焦点 |
|---|---|---|---|---|
| **Claude Code** | 50 | 3 | v2.1.292 | 插件 marketplace 参数、Agent effort 分级；Windows 数据丢失事故（#97660） |
| **OpenAI Codex** | ~30 热门 | 10 | 3 个 alpha 版 | Windows 沙箱集中修复（6 条 PR）、Agent Command Center |
| **Gemini CLI** | 10 热门 | 10 | 3 个版本（stable/preview/nightly） | 子代理可靠性、token 效率提案、74 项依赖批量升级 |
| **GitHub Copilot CLI** | 10 | 0 | 2 个版本 | MCP 热更新、企业网络边界、模型推荐更新至 GPT-6.1 |
| **Kimi Code CLI** | 0 | 1 | 0 | 平静日；移动配对 PR 关闭 |
| **OpenCode** | 10 | 10 | v1.18.35 | 性能问题当天报告当天修复 PR；v2 迁移摩擦集中 |
| **Qwen Code** | 10 | 10 | v0.25.1-preview | Managed Agent 架构高速推进；P1 token 死循环 |
| **DeepSeek TUI** | 8 | 16 | 0 | 0.10.1 收尾；MCP 工具暴露失效（#6828） |
| **Pi** | 10 | 10+ | 0 | in-context compaction、Windows ConPTY 修复 |
| **oh-my-pi** | 10 | 10 | v18.7.0 | Termux 运行时、OpenAI Decisions API 判官 |
| **DeepSeek Harness** | 0 | 0 | 0 | 无活动 |

**观察**：Codex、Gemini CLI、OpenCode、Qwen Code 呈现 Issue/PR 双高活跃；Copilot CLI 呈“重发布、轻社区响应”特征（0 条 PR 更新）；Claude Code Issue 量最大但 PR 吸收最少，社区反馈积压明显（#38335 累计 875 条评论仍标记 invalid）。

---

## 三、共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **Windows 平台质量** | Claude Code、Codex、Copilot CLI、Pi、oh-my-pi | Codex 约 40% 热门 Issue 涉及 Windows；Claude Code 发生实际数据丢失（#97660）；Pi 发起官方运行方式调研（74 评论） |
| **子代理/多代理可靠性** | Claude Code、Gemini CLI、Qwen Code、OpenCode | Gemini 子代理假成功（P1 #22323）与挂起；Qwen 会话级多代理协作 PR；Claude Code effort 分级参数 |
| **成本与用量可控性** | Claude Code、Codex、Gemini CLI、Qwen Code、Pi | Claude Code 预算滞后检查（$1→$1.38）；Qwen 死循环烧 5-14M tokens；Codex 配额激增；Gemini 消费上限误重试修复 |
| **MCP 生态健壮性** | Copilot CLI、Gemini CLI、DeepSeek TUI、oh-my-pi | Copilot CLI 约 1/3 活跃 Issue 与 MCP 相关；DeepSeek TUI 工具暴露回归；Gemini 128 工具上限 |
| **定时/后台任务可靠性** | Claude Code、Codex | 双方均出现“任务自动禁用/被跳过”问题（CC #99596、Codex #38350），自动化场景尚不成熟 |
| **上下文管理与压缩** | Pi、oh-my-pi、Gemini CLI、OpenCode | in-context compaction、AST 感知读取、外科式提取——token 膨胀治理是普适需求 |

---

## 四、差异化定位分析

| 工具 | 定位 | 技术路线特点 |
|---|---|---|
| **Claude Code** | 企业级插件化 Agent 平台 | 插件 marketplace、子 Agent effort 分级、Hooks/Cowork 沙箱；生态最丰富但新特性回归风险高 |
| **OpenAI Codex** | Rust 重写的全栈 Agent 运行时 | Windows MXC 沙箱、Computer Use、Dots、relay 远程连接；平台功能最激进 |
| **Gemini CLI** | 社区驱动的开放工具 | 接受大型架构提案（AST 工具、零依赖沙箱）、ACP 协议、gVisor 沙箱；路线最“开源协作” |
| **Copilot CLI** | GitHub 生态企业入口 | 企业网络边界、组织策略、GitHub Connector 集成；面向 IT 管控而非极客 |
| **Qwen Code** | 托管多 Agent 基础设施 | Managed Agent Stage 体系、Kubernetes 运行时、`qwen serve`；最接近"Agent 服务器"形态 |
| **OpenCode** | 多 provider 中立客户端 | models.dev 全目录（8,405 模型）、Zen 平台、Bedrock；供应商无关性是核心卖点 |
| **Pi / oh-my-pi** | 高级用户/扩展开发者平台 | JSON Schema 发布、llama.cpp 本地分类器、判官 API、Termux/移动端；深度可定制路线 |
| **DeepSeek TUI** | 轻量 TUI + 插件生态 | Runtime API 化、插件声明 OAuth 提供商；处于 0.10.x 早期 |
| **Kimi Code CLI** | 观察期 | 社区活跃度暂时最低 |

---

## 五、社区热度与成熟度

- **第一梯队（高热度 + 高成熟度）**：Claude Code（Issue 量与历史积压最深）、Codex（Windows 问题热度 146 评论级）、Gemini CLI（提案质量高、贡献者活跃）
- **快速迭代追赶期**：Qwen Code（Managed Agent 架构日更，P1 bug 仍多）、OpenCode（响应极快——问题与修复同日，但 v2 迁移阵痛）、Codex（每日 3 个 alpha）
- **特色垂直生态**：Pi/oh-my-pi（扩展开发者社区，重量级贡献者如 @mitsuhko 参与）、DeepSeek TUI（0.10.x 早期，PR 合入活跃但用户基数小）
- **平静期**：Kimi Code CLI、DeepSeek Harness

**成熟度信号**：Claude Code 与 Codex 的问题多为“新特性回归”而非基础缺陷，说明核心已稳定；Qwen/OpenCode 仍处基础 bug（sed 解析、配置静默丢弃）修复阶段。

---

## 六、值得关注的趋势信号

1. **安全从附加项变为核心战场**：Claude Code C 盘清空事故、OpenCode Plan Mode 写绕过、Codex ripgrep 配置绕过沙箱 deny 规则、Copilot CLI 文档过度承诺——**沙箱/权限承诺不可轻信，生产环境需外部防线（备份、容器、最小权限）兜底**。

2. **“退出开关”成为用户共识诉求**：Codex MXC 沙箱可禁用（PR #51547）、Daybreak 提醒可持久关闭、Copilot CLI 审批粒度——社区对强制行为的耐受度在下降，**可控性是下一个竞争维度**。

3. **定时任务/自动化普遍不可靠**：Claude Code 与 Codex 同时出现任务自动禁用/中断问题。**短期内关键定时作业应保留外部 cron 兜底，不要把生产调度托付给 CLI 内置机制**。

4. **成本可观测性是付费用户最大痛点**：预算滞后检查、token 死循环烧钱、配额异常激增在 4+ 工具同时出现。**建议接入外部用量监控，不要依赖 CLI 自身的限额机制**。

5. **Compaction/上下文压缩进入深水区**：Pi 的 in-context compaction（保住 prompt cache）、Gemini 的 AST 感知读取、oh-my-pi 的压缩后 400 修复潮——压缩正确性与缓存友好性将直接决定长会话工具的可用性上限。

6. **工具选型建议**：Windows 重度用户当前所有选项都有明显风险，可考虑 WSL + 保守沙箱策略；企业管控场景 Copilot CLI 的 `permissions.limitTo` 值得关注；多 provider 灵活性首选 OpenCode；需要托管/服务端 Agent 形态可跟踪 Qwen Code 的 Managed Agent 进展。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-10-07）

> 说明：本期 PR 评论数数据缺失（undefined），以下分析基于 PR 的更新活跃度、Issue 关联度及内容影响力综合排序。

---

## 一、热门 Skills / PR 排行

### 1. skill-creator 触发评测修复（PR #1298）
- **作者**：@MartinCajiao | **状态**：Open（持续更新至 9 月中）
- **功能**：修复触发评估的假阴性问题——多 worker 探测竞争、Windows 下 `select()` 失败、运行时异常被误判为未触发等。
- **热点**：skill-creator 是官方元技能，其评测准确性直接决定社区贡献 Skill 的质量门槛。相关问题在 Issue #556（触发率 0%）和 #1383 中被反复报告，是当前讨论密度最高的技术线。
- 链接：https://github.com/anthropics/skills/pull/1298

### 2. mcp-builder 兼容 mcp>=2（PR #1742）
- **作者**：@Kuldeeep18 | **状态**：Open
- **功能**：适配 mcp 2.x 的 `streamable_http_client` 重命名及自定义 HTTP header 机制，修复 #1668。
- **热点**：mcp-builder 是构建 MCP 服务器的核心 Skill，Issue #1390（评测对真实 MCP 服务器 0 分）表明该 Skill 的评测链路问题严重，社区期待此次修复落地。
- 链接：https://github.com/anthropics/skills/pull/1742

### 3. docx 系列修复（PR #1792、#1734）
- **作者**：@TINGyu123644 / @rohitjain25 | **状态**：Open
- **功能**：#1792 让 LibreOffice 超时正确报错并校验修订标记清除；#1734 增加孤立批注检测。
- **热点**：文档处理（docx/pdf/odt）是 Skills 使用频率最高的场景之一，小修不断，显示 docx Skill 在真实生产中被重度使用。
- 链接：https://github.com/anthropics/skills/pull/1792 、https://github.com/anthropics/skills/pull/1734

### 4. skill-creator 安全加固（PR #1961）
- **作者**：@Joncik91 | **状态**：Open（10 月新提）
- **功能**：修复 eval viewer 的脚本逃逸、DNS rebinding、跨站 POST 等 XSS 向量。
- **热点**：与 Issue #1394（display-path XSS）呼应，安全研究者近期密集审计 skill-creator 的本地 HTML 工具链。
- 链接：https://github.com/anthropics/skills/pull/1961

### 5. webapp-testing 命令注入修复（PR #1980）
- **作者**：@Pcmhacker-piro | **状态**：Open
- **功能**：移除 `shell=True`，消除 `with_server.py` 中的 CWE-78 命令注入风险。
- **热点**：与 #1961 一起构成近期"Skill 脚本供应链安全"审计浪潮。
- 链接：https://github.com/anthropics/skills/pull/1980

### 6. pyxel 复古游戏开发 Skill（PR #525）
- **作者**：@kitao（Pyxel 作者本人）| **状态**：Open（3 月提交，9 月仍活跃）
- **功能**：创建、调试、验证 Pyxel 复古游戏，含 headless 运行和帧检查。
- **热点**：上游作者亲自贡献，质量高，等待合并超过半年。
- 链接：https://github.com/anthropics/skills/pull/525

### 7. document-typography 排版质检 Skill（PR #514）
- **作者**：@PGTBoos | **状态**：Open
- **功能**：解决 AI 生成文档中的孤行、寡行、编号错位等排版问题。
- **热点**：切中"AI 生成内容的质量瑕疵"这一普遍痛点。
- 链接：https://github.com/anthropics/skills/pull/514

### 8. blast-radius 批量操作防护（PR #1776）
- **作者**：@kishormorol | **状态**：Open
- **功能**：批量/破坏性写操作前的检查清单 Skill，弥补"查询对但世界不对"的缺口。
- **热点**：体现社区对 agent 安全操作边界的关注。
- 链接：https://github.com/anthropics/skills/pull/1776

---

## 二、社区需求趋势（来自 Issues）

1. **安全与信任边界**（#492，43 条评论，热度第一）：社区 Skill 冒用 `anthropic/` 命名空间引发的信任滥用问题；配套诉求是 Skill 签名/官方认证机制。
2. **组织内 Skill 分发**（#228，16 条评论）：期待企业级共享库、一键分享链接，取代手动上传 .skill 文件。
3. **Skill 评测可靠性**（#556、#1383、#1390）：触发评估 0% 触发率、Windows 兼容、评测打分失真——skill-creator 工具链是最大痛点。
4. **上下文经济性**（#1487）：claude-api Skill 单次注入 ~156k token 撑爆上下文；配合 #1329 的 compact-memory（符号化压缩 agent 状态）提案，社区强烈关注 token 效率。
5. **运维/安全治理类新 Skill**（#412 agent-governance、#1385 推理质量门禁）：期待策略执行、审计追踪、对抗式审查等企业治理能力。
6. **插件去重与兼容**（#189 重复 Skill、#29 Bedrock 支持）：分发打包与多云环境适配的基础设施诉求。

---

## 三、高潜力待合并 Skills

| PR | 内容 | 合并信号 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 触发评测修复 | 持续维护 3 个月，对应多个高热度 Issue |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder 兼容 mcp>=2 | 修复明确的破坏性 bug #1668 |
| [#1961](https://github.com/anthropics/skills/pull/1961) / [#1980](https://github.com/anthropics/skills/pull/1980) | 安全加固双雄 | 官方对安全类 PR 通常优先处理 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx 超时错误处理 | 官方文档 Skill 的小步修复，落地概率高 |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel 游戏开发 | 上游作者贡献、长期活跃跟进 |
| [#538](https://github.com/anthropics/skills/pull/538) | pdf 大小写引用修复 | 低风险文档修正，典型 fast-merge 候选 |

---

## 四、生态洞察（一句话）

**社区最集中的诉求已从"贡献新 Skill"转向"让 Skill 可信、可靠、可分发"——即官方认证的信任边界、组织级共享机制、以及 skill-creator/mcp-builder 工具链的评测准确性与安全加固。**

---

# Claude Code 社区动态日报 · 2026-10-07

## 一、今日速览

Claude Code 发布 **v2.1.292**，为插件生态和 Agent 调度带来两项实用增强：`claude plugin install` 新增 `--marketplace` 参数、Agent 工具新增 `effort` 参数。社区方面，Windows 平台 Bash/安全相关问题集中爆发（含一起 `rm -rf \` 导致 C 盘被清空的数据丢失事故），预算控制与调度任务可靠性成为高频反馈点。

---

## 二、版本发布

### v2.1.292
- **`--marketplace <source>` 参数**：`claude plugin install` 现在可按需添加 marketplace（遵循与 `claude plugin marketplace add` 相同的策略检查），然后直接从中安装插件，简化插件分发流程。
- **Agent 工具新增 `effort` 参数**：支持为子 Agent 指定 effort 级别运行，为主/子 Agent 差异化推理强度提供了官方途径。

---

## 三、社区热点 Issues

1. **[#38335](https://github.com/anthropics/claude-code/issues/38335)** — Claude Max 计划会话限额异常快速耗尽（CLI）。3 月至今累计 **875 条评论、476 👍**，是仓库历史上持续时间最长的用户不满话题，官方标记为 invalid 但社区仍在持续跟进。

2. **[#97660](https://github.com/anthropics/claude-code/issues/97660)** — 🔴 **高危数据丢失**：Windows 上子 Agent 经 PowerShell → MSYS2 bash 执行 `rm -rf \`，PowerShell 将转义变量展开为空，导致 C:\ 被自顶向下清空。标签含 `high-priority, data-loss, area:sandbox`，Windows 用户务必关注。

3. **[#100063](https://github.com/anthropics/claude-code/issues/100063)** — Windows Bash 工具会在 Git Bash 解析前把每对反斜杠减半（heredoc 和单引号内亦然），是跨 shell 转义链路问题的又一实锤，有稳定复现。

4. **[#100111](https://github.com/anthropics/claude-code/issues/100111)** — `--max-budget-usd` 在每次调用返回后才检查，$1 上限实际止步于 $1.38（3/3 复现，v2.1.292）。预算控制的滞后性对 API 用户成本影响直接。

5. **[#99320](https://github.com/anthropics/claude-code/issues/99320)** — v2.1.288 引入的内联 shell rm 检查误伤：在 bypass 模式下，含 ANSI-C 引用（`$'...'`）且嵌套 `python3 -c` / `node -e` 的脚本即使无 rm 也被拦截。安全检查的误报率问题值得关注。

6. **[#77242](https://github.com/anthropics/claude-code/issues/77242)** — `AskUserQuestion` 对话框只渲染选项列表，不显示问题文本，用户面对无题目的选项（有复现，10 条评论），直接影响交互式工作流可用性。

7. **[#99596](https://github.com/anthropics/claude-code/issues/99596)** — 调度任务在首次工具往返后被放弃，且追踪的 session id 与 transcript 永不匹配。结合 [#79737](https://github.com/anthropics/claude-code/issues/79737)（任务因“文件夹不受信任”被跳过），调度任务可靠性问题成簇。

8. **[#100129](https://github.com/anthropics/claude-code/issues/100129)** — 设置 `advisorModel` 后，助手文本块在 transcript 与 UI 中全部重复写入（同一 `message.id` 双份），移除即恢复。新模型配置功能存在回归。

9. **[#94640](https://github.com/anthropics/claude-code/issues/94640)** — Cowork 本地沙箱代理对默认白名单内的 `cdn.playwright.dev` 返回 403 "Connection blocked by network allowlist"，回归性破坏包管理器域名放行。

10. **[#66010](https://github.com/anthropics/claude-code/issues/66010)** — 🔒 隐私问题：GMail MCP 自 6 月 5 日起重写 URL 注入 Google 追踪参数，18 条评论持续讨论中，涉及用户数据管道透明度。

---

## 四、重要 PR 进展

> 过去 24 小时仅 3 条 PR 更新，均非重大功能：

1. **[PR #99206](https://github.com/anthropics/claude-code/pull/99206)**（已关闭）— `/diff` 停靠面板头部不再额外多占一行空白行，UI 打磨修复。
2. **[PR #19084](https://github.com/anthropics/claude-code/pull/19084)**（已关闭）— 修复 ralph-wiggum 插件 stop hook 在 Windows 下因 `#!/bin/bash` shebang 失败的问题，WSL 兼容性改进。
3. **[PR #96434](https://github.com/anthropics/claude-code/pull/96434)**（开放）— 安全审查子 Agent 不再接触被 deny/ask 规则覆盖的文件及 `.env` 等密钥文件，且无 shell 权限；可用 `SG_SKIP_SECRET_FILES=0` 关闭。修复 #96276，值得安全敏感团队跟踪。

---

## 五、功能需求趋势

| 方向 | 代表 Issue | 信号 |
|---|---|---|
| **调度任务 / 自动化可靠性** | #99596、#79737、#100131 | 定时任务被跳过、运行中断、GitHub 集成自动禁用，自动化场景需求强烈但稳定性不足 |
| **Windows 平台支持** | #97660、#100063、#97259、#99858 | 数据丢失、转义破坏、桌面 webview 卡死、权限丢失——Windows 是当前问题重灾区 |
| **成本与用量控制** | #100111、#100130、#38335 | 预算上限滞后检查、Max 20x 限额诉求，付费用户核心关切 |
| **凭据与安全体验** | #96762、#97660 | 请求 1Password 式凭据交接、opt-in 允许自家账户支付输入 |
| **会话与工作流打通** | #76440、#91465 | 跨链 claude.ai 会话与 CLI 会话、worktree 迁移后的 session 恢复 |
| **UI/UX 细节** | #97652、#77242、#99395 | truecolor 自定义、对话框文本缺失、双击才生效的按钮 |

---

## 六、开发者关注点

- **Windows 跨 shell 转义是系统性风险**：PowerShell → Git Bash/MSYS2 链路中转义变量展开与反斜杠处理已造成实际数据丢失（#97660），建议 Windows 用户在沙箱策略上保持保守，避免在关键盘符下运行 Agent。
- **预算与限额信任危机**：`--max-budget-usd` 滞后检查 + Max 计划限额异常，成本可预期性是付费用户最大痛点。
- **安全检查的精确度待提升**：rm 检测误报（#99320）与沙箱 allowlist 回归（#94640）显示新安全机制在引入时伴随回归，升级 2.1.288+ 后建议关注自动化脚本是否被误拦。
- **新配置项质量需留意**：`advisorModel`、`prependPlugins`、`effort` 等新能力接连暴露重复渲染、加载顺序失效等问题，采用新特性时建议先在非关键环境验证。
- **调度任务暂不宜承载生产定时作业**：多个独立报告指向任务被跳过或中断，短周期重要任务建议保留外部 cron 兜底。

---
*数据来源：github.com/anthropics/claude-code · 统计窗口：过去 24 小时（50 条 Issue 更新、1 个 Release、3 条 PR）*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-10-07 | 数据来源：github.com/openai/codex**

---

## 一、今日速览

Codex 团队今日发布 3 个 Rust 版本（0.162.0-alpha.17/18、0.161.0-alpha.13.1），迭代节奏密集。社区方面，Windows 平台问题持续发酵——已关闭的终端窗口闪烁问题（#48074）累计 146 条评论，且 Computer Use 在 Windows 上的截图超时、Defender 误报等问题集中爆发。PR 侧以 bot 自动化合入为主，涵盖 Windows MXC 沙箱、动态工具生命周期、relay 连接稳定性等核心修复。

---

## 二、版本发布

| 版本 | 说明 |
|---|---|
| rust-v0.162.0-alpha.18 | Alpha 预发布 |
| rust-v0.162.0-alpha.17 | Alpha 预发布 |
| rust-v0.161.0-alpha.13.1 | Alpha 补丁版本 |

三个版本均为 alpha 通道发布，Release Notes 未附详细变更说明，属高频滚动发布。

---

## 三、社区热点 Issues

1. **#48074 [已关闭] Windows：安装 Codex daemon 后请求期间终端窗口反复闪烁**
   🔥 146 评论 / 152 👍，今日关闭。Windows CLI 最受关注的问题之一，影响面广，关闭意味着官方已修复或给出方案。
   [链接](https://github.com/openai/codex/issues/48074)

2. **#38350 [开放] 定时任务成功运行后未经授权自动禁用**
   73 评论。Codex Web 自动化任务的可靠性缺陷，多个循环任务被自动暂停，直接影响自动化工作流可信度。
   [链接](https://github.com/openai/codex/issues/38350)

3. **#42514 [开放] Intel Mac（x86_64）缺少 Computer Use 服务**
   17 评论 / 6 👍。老架构 Mac 用户被排除在 Computer Use 功能之外，长期未解决。
   [链接](https://github.com/openai/codex/issues/42514)

4. **#26306 [开放] Codex 配额消耗异常激增**
   16 评论。Plus 用户配额快速耗尽，涉及计费公平性，是长期高关注度问题。
   [链接](https://github.com/openai/codex/issues/26306)

5. **#47506 [开放] macOS Browser Use 报告权限阻止，即使已授权站点访问**
   11 评论。权限状态与实际授权不一致，阻塞浏览器自动化工作流。
   [链接](https://github.com/openai/codex/issues/47506)

6. **#50800 [开放] 会话恢复后 dot 任务的本地线程工具消失**
   10 评论。Dots 新功能的会话持久化缺陷，反映新特性尚不稳定。
   [链接](https://github.com/openai/codex/issues/50800)

7. **#50321 [开放] Windows 桌面：node_repl.exe 校验失败导致 Browser/Computer Use 内核无法启动**
   6 评论。修复和更新后仍复现，导致核心代理功能完全不可用。
   [链接](https://github.com/openai/codex/issues/50321)

8. **#49672 [开放] Windows Defender 反复将 codex-computer-use.exe 检测为木马**
   安全信任问题，误报会直接中断任务并引发用户对二进制签名的质疑。
   [链接](https://github.com/openai/codex/issues/49672)

9. **#51565 [开放] [今日新增] macOS 更新后新聊天发送按钮始终禁用**
   新版 26.1002.51308 的回归问题，新会话无法发送，属高优先级功能性阻断。
   [链接](https://github.com/openai/codex/issues/51565)

10. **#32431 [开放] macOS：无上限的 logs_2.sqlite WAL checkpoint 导致磁盘写入超限被系统杀死**
    日志数据库膨胀至 2.8GB，性能与资源管理类深度技术分析帖，值得关注官方响应。
    [链接](https://github.com/openai/codex/issues/32431)

---

## 四、重要 PR 进展

1. **#51547 新增 Windows MXC 沙箱退出开关** — 新增 `windows.allow_mxc` 配置项，允许用户禁用自动 MXC 沙箱选择，回应 Windows 沙箱兼容性争议。
   [链接](https://github.com/openai/codex/pull/51547)

2. **#51556 取消时正确完成动态工具生命周期** — 修复中断回合时动态工具 handler 被丢弃导致状态不一致的问题。
   [链接](https://github.com/openai/codex/pull/51556)

3. **#51527 展开沙箱 deny globs 时忽略 ripgrep 配置** — 安全修复：用户 `RIPGREP_CONFIG_PATH`（如 `--quiet`）可能导致 deny 规则未生效，现强制 `--no-config`。
   [链接](https://github.com/openai/codex/pull/51527)

4. **#51512 对齐 Windows 沙箱 temp 权限与子进程环境** — 修复 TEMP/TMP 回退值绕过只读或拒绝子路径的漏洞。
   [链接](https://github.com/openai/codex/pull/51512)

5. **#51511 修复 Windows 10 盘符路径的 no-follow 文件操作** — 解决 Win10 上 DOS 盘符别名被误判为 reparse point 导致操作失败。
   [链接](https://github.com/openai/codex/pull/51511)

6. **#51502 限制 relay 连接尝试次数并在阻塞写入期间处理 pong** — 修复 rendezvous WebSocket 卡死导致的重连阻塞问题。
   [链接](https://github.com/openai/codex/pull/51502)

7. **#51539 感知完成状态的 realtime 附加与会话级 detach** — 防止旧 realtime 会话的延迟清理关闭新会话，并处理参数中的凭据泄露风险。
   [链接](https://github.com/openai/codex/pull/51539)

8. **#51500 Agent Command Center 新增任务固定功能** — 支持按 `p` 键置顶任务、可配置键位绑定与筛选联动，TUI 体验增强。
   [链接](https://github.com/openai/codex/pull/51500)

9. **#51499 在单一阻塞 worker 上加载 rollout 历史** — 将会话历史解析移入独立 worker，支持取消感知迭代器，改善大历史文件下的 UI 卡顿。
   [链接](https://github.com/openai/codex/pull/51499)

10. **#51575 暴露包组装 helper 并支持 gzip DotSlash 产物** — 打包能力 API 化，为外部调用者组装与归档包目录提供支持。
    [链接](https://github.com/openai/codex/pull/51575)

---

## 五、功能需求趋势

- **Windows 平台支持质量**：今日 30 条热门 Issue 中约 40% 与 Windows 相关（终端闪烁、WSL 工具初始化、Computer Use 截图、Defender 误报、通知声音），Windows 已成为质量短板集中地。
- **Computer Use / Browser Use 可用性**：多个平台的截图超时、权限校验失败、内核启动失败问题，是当前最不稳定的功能模块。
- **Dots 与自动化任务可靠性**：dot 任务工具消失、浏览器控制缺失、定时任务自动暂停，新功能的会话恢复与持久化机制亟待加强。
- **资源与配额透明度**：配额消耗异常、SQLite 日志无上限增长，用户要求更好的用量可见性。
- **跨设备体验（Codex Remote / Mobile）**：移动端通知可靠性、provider 配置保留等长期需求仍在推进中。

---

## 六、开发者关注点

1. **Windows 生态兼容性是最大痛点**：从沙箱（MXC、bwrap 缺失）到 Computer Use 再到 Defender 误报，Windows 用户的多层体验均在承压。值得注意的是官方 PR 侧今日密集合入 Windows 沙箱修复（#51547、#51512、#51511），显示团队正在集中攻坚。
2. **会话恢复与状态持久化**：dot 工具消失、Steer/队列消息静默失败、旧提示词自动重触发（#50705），反映会话状态机在边界场景下仍不够健壮。
3. **资源占用与稳定性**：日志数据库无限增长、RPC 槽位泄漏（#50812）需要重启恢复等问题，对长期运行用户影响显著。
4. **安全与信任**：沙箱 deny glob 可被 ripgrep 配置绕过、realtime 参数含凭据等 PR 表明安全加固是当前开发重点；Defender 误报则提示签名/分发链路需改进。
5. **开发者对可控性的诉求**：如“Daybreak mode 提醒可持久关闭”（#51268）、MXC 沙箱可退出（#51547），社区普遍希望减少强制行为、增加用户选择权。

---
*本日报基于过去 24 小时 GitHub 公开数据自动整理，仅供参考。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-07）

## 1. 今日速览

今日 Gemini CLI 发布了三个新版本：**v0.63.0 稳定版、v0.64.0-preview.0 预览版及 v0.65.0-nightly 夜间版**，重点修复了不可信目录的只读工作区设置、会话恢复时的重复工具响应等核心问题。社区方面，Subagent（子代理）相关的稳定性问题持续成为讨论焦点，同时贡献者提交了多个高质量修复，涵盖 OAuth 死循环、CRLF diff、沙箱网络隔离等。

---

## 2. 版本发布

### v0.65.0-nightly.20261007.gef59c532f
- **fix(cli)**: 在不可信文件夹中强制执行只读工作区设置（[PR #29583](https://github.com/google-gemini/gemini-cli/pull/29583)）—— 安全加固
- **fix(core)**: 修复恢复会话时出现重复工具响应轮次的问题

### v0.64.0-preview.0
- **refactor(a2a-server)**: 实现 V1 到 V2 设置迁移逻辑（[PR #29450](https://github.com/google-gemini/gemini-cli/pull/29450)）
- **fix(acp)**: 桥接 `PromptResponse.usage` 并发出 `usage_update` 通知（[PR #29389](https://github.com/google-gemini/gemini-cli/pull/29389)）—— ACP 协议用量可见性改进

### v0.63.0（稳定版）
- **fix(cli)**: 连接恢复期间显示重试进度指示器（[PR #29468](https://github.com/google-gemini/gemini-cli/pull/29468)）

---

## 3. 社区热点 Issues

1. **[#28052](https://github.com/google-gemini/gemini-cli/issues/28052) 错误消息中 URL 带尾部句点导致无法加载**（18 评论）
   Google 登录失败提示中的 `antigravity.google` 链接尾部多了个 `.`，导致链接失效。虽是小问题，但被标记为 good first issue 且长期未修复，社区讨论热烈。

2. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 触达 MAX_TURNS 后仍报告成功**（13 评论，P1）
   `codebase_investigator` 子代理因轮次上限中断却报告 `success/GOAL`，掩盖了真实失败状态。这是可观测性层面的严重误导，属 P1 优先级。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 零依赖 OS 沙箱 + 执行后意图路由**（9 评论）
   建议利用 Gemini 3 原生 bash 能力（grep/sed/awk 链式调用），配合 OS 级沙箱替代重量级工具，方向性很强的大型增强提案。

4. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent 挂起**（8 评论，👍8，P1）
   通用代理在简单操作（如建文件夹）上无限挂起，用户等待长达一小时。高赞高优先级，直接影响可用性。

5. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST 感知的文件读取/搜索/映射评估**（7 评论，EPIC）
   评估 AST 工具（ast-grep、tilth、glyph）能否减少错位读取、降低 token 噪音，是代码库导航的架构级探索。

6. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) 模型不主动使用 skills 和 sub-agents**（7 评论）
   用户反馈自定义技能和子代理几乎从不被自主调用，需显式指令触发——反映了调度/触发机制的可观测性和可靠性问题。

7. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent 忽略 settings.json 配置**（4 评论）
   `maxTurns` 等配置覆盖在 Browser Agent 中完全失效，配置合并逻辑存在断点。

8. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 超过 128 个工具时触发 400 错误**（3 评论）
   MCP 生态扩张带来的工具数量上限问题，需要更智能的工具范围裁剪。

9. **[#19561](https://github.com/google-gemini/gemini-cli/issues/19561) "Tactful Extraction" 节省 token 的外科式读取**（2 评论）
   当前基线约 36.6k tokens/轮，大文件读取"firehose"导致上下文膨胀（曾观察 +15k tokens/轮），提案建立 grep → 精读的分层发现机制。

10. **[#18836](https://github.com/google-gemini/gemini-cli/issues/18836) 用持久化文件任务跟踪替代 WriteToDo**（2 评论）
    内存内 todo 导致"context rot"、高 token 成本和跨会话失忆，提案改为文件 CRUD 方案。

---

## 4. 重要 PR 进展

1. **[#29655](https://github.com/google-gemini/gemini-cli/pull/29655) 防止 OAuth 无限验证重试循环**（P2）
   修复浏览器验证 + OAuth 提示死循环，为验证重试加上界。

2. **[#29612](https://github.com/google-gemini/gemini-cli/pull/29612) 强制终端用户轮次不变量**（size/xl）
   确保 `/rewind`、流中断后发送给 API 的历史始终以有效 user turn 结尾，解决协议层 400 错误。

3. **[#29665](https://github.com/google-gemini/gemini-cli/pull/29665) gVisor 沙箱网络隔离明确报错**（P2，maintainer）
   IDE 伴侣连接在 runsc 沙箱中因 loopback 隔离失败时，给出清晰诊断而非误导性的 `/ide install` 提示。

4. **[#29664](https://github.com/google-gemini/gemini-cli/pull/29664) 依赖批量升级（74 项，P1）**
   含 `@modelcontextprotocol/sdk` 1.23.0 → 1.31.0、`@octokit/rest` 等，MCP SDK 跨多个 minor 版本。

5. **[#29553](https://github.com/google-gemini/gemini-cli/pull/29553) 月度消费上限归类为终态配额错误**（P2）
   此前 spending cap 的 429 被误判为可重试，TUI 无限重试；现在正确终止并显示 API 原文。

6. **[#29564](https://github.com/google-gemini/gemini-cli/pull/29564) 设置迁移保留 `${VAR}` 环境变量占位符**
   修复迁移时把占位符展开为实际值写入配置的问题。

7. **[#29559](https://github.com/google-gemini/gemini-cli/pull/29559) diff 前归一化 CRLF**
   修复 CRLF 文件 vs LF 编辑内容导致整文件被判为变更、diff 上下文爆炸的问题。

8. **[#29551](https://github.com/google-gemini/gemini-cli/pull/29551) 修复 core.sshCommand 覆盖为空导致 SSH 远端 fork 失败**

9. **[#29552](https://github.com/google-gemini/gemini-cli/pull/29552) 上报 ripgrep 执行失败**
   为 grep 失败补充 `GREP_EXECUTION_ERROR` 元数据，提升调度器对工具失败的可观测性。

10. **[#29445](https://github.com/google-gemini/gemini-cli/pull/29445)（已关闭）区分不可读 vs 缺失的 MCP enablement 配置**
    损坏的 `mcp-server-enablement.json` 此前 fail-open，被禁用的 MCP 服务器被重新暴露给模型——安全敏感的修复，值得关注后续重开。

---

## 5. 功能需求趋势

- **Subagent 体系深化**：本地子代理 Sprint、并行子代理协作、共享内存、轨迹可分享（`/chat share`）等提案密集，子代理是当前最大的架构演进方向。
- **Token 效率与上下文管理**：AST 感知读取、外科式提取（Tactful Extraction）、持久化任务跟踪，社区高度关注上下文膨胀治理。
- **沙箱与安全**：OS 级零依赖沙箱、破坏性命令防护、不可信目录只读策略，安全议题贯穿多个版本发布。
- **浏览器代理（browser_agent）成熟化**：会话接管、锁恢复、Wayland 支持、配置覆盖生效。
- **可观测性与评估**：内部 eval 稳定化、steering eval 修复、bug report 包含 subagent 上下文。

## 6. 开发者关注点

- **子代理可靠性是最大痛点**：挂起（#21409）、假成功（#22323）、不主动调用（#21968）、bug report 缺上下文（#21763），多个 P1 问题集中在此领域。
- **认证与配额体验**：OAuth 死循环（PR #29655）、URL 格式错误（#28052）、消费上限误重试（PR #29553），登录/计费链路的多处摩擦今日均有修复落地。
- **跨平台细节**：CRLF 换行、Wayland、SSH 命令覆盖等环境兼容性问题持续被贡献者修复。
- **MCP 生态规模化压力**：工具数量上限（#24246）、enablement 配置损坏 fail-open（PR #29445）、MCP SDK 大版本升级，表明 MCP 集成已进入深水区。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-07 | 数据来源：github.com/github/copilot-cli**

---

## 一、今日速览

今日 Copilot CLI 发布 **v1.0.93-2 / v1.0.93-3** 两个版本，重点改进 MCP 配置热更新、企业网络边界管控，并将模型推荐列表更新至 GPT-6.1 Sol、GPT-6 Astra/Luna 和 Claude 5.5。社区方面，MCP 生态（OAuth 认证、服务器注册、工具发现）仍是问题高发区，过去 24 小时新增多条 MCP 相关 triage Issue，显示远程 MCP 集成已成为最大痛点。

---

## 二、版本发布

### v1.0.93-3
- **Improved**：MCP 服务器配置变更可在会话中即时生效，无需重启会话

### v1.0.93-2
- **Added**：新增企业级 `permissions.limitTo`，可强制网络请求遵循托管域名边界
- **Improved**：模型选择器推荐列表更新，优先展示 GPT-6.1 Sol、GPT-6 Astra/Luna、Claude 5.5
- **Fixed**：修复 GitHub.com Connector 用户无法展开 GitHub CLI 权限的问题

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 状态 | 关注度 | 关注理由 |
|---|-------|------|--------|----------|
| 1 | [#400 No model available — 组织策略下 CLI 无可用模型](https://github.com/github/copilot-cli/issues/400) | CLOSED | 57 评论 / 34 👍 | 长期影响企业用户的策略同步问题，评论区持续活跃，是本仓库讨论量最高的 Issue 之一 |
| 2 | [#2776 Shift+Enter 应换行而非提交提示](https://github.com/github/copilot-cli/issues/2776) | OPEN | 7 评论 / 3 👍 | 输入体验基础性缺失，长提示词编写场景下极易误触发执行，社区呼声明确 |
| 3 | [#4991 Cloudflare MCP 连接失败：Subscription limit reached](https://github.com/github/copilot-cli/issues/4991) | OPEN | 4 评论 | OAuth 成功后仍无法使用远程 MCP 服务器，涉及协议层兼容性，微软员工参与报告 |
| 4 | [#4652 Windows 25H2 沙箱不受支持警告](https://github.com/github/copilot-cli/issues/4652) | CLOSED | 4 评论 | 最新 Windows 构建上沙箱功能失效，影响实验特性可用性 |
| 5 | [#5066 Assisted permissions 回归：审批过于频繁](https://github.com/github/copilot-cli/issues/5066) | OPEN | 3 评论 | 权限模式疑似回归，简单命令也要求审批，直接影响日常使用流畅度 |
| 6 | [#3861 沙箱文档与实际行为不符](https://github.com/github/copilot-cli/issues/3861) | CLOSED | 2 评论 / 1 👍 | 知名开发者 @torumakabe 指出 per-host 网络过滤文档夸大能力，文档可信度问题 |
| 7 | [#4695 MCP OAuth token 未跨会话复用](https://github.com/github/copilot-cli/issues/4695) | OPEN | 2 评论 / 1 👍 | cache-key 重复导致反复重新认证，远程 MCP 使用体验的核心障碍 |
| 8 | [#4749 Azure MCP learn=true 调用 180s 超时](https://github.com/github/copilot-cli/issues/4749) | OPEN | 1 评论 | 1.0.83-5 版本引入的性能回归（0.2s → 180s），版本锁定可复现 |
| 9 | [#5069 tool_search_tool 无法区分“未注册完成”与“无匹配”](https://github.com/github/copilot-cli/issues/5069) | OPEN | 新增 | 工具目录静默返回假阴性，Agent 决策可靠性问题，今日新增 |
| 10 | [#5062 命令审批应支持“仅本次、永不记住”选项](https://github.com/github/copilot-cli/issues/5062) | OPEN | 新增 | 针对 `git push` 等不可逆操作的安全审批粒度需求，今日新增 |

---

## 四、重要 PR 进展

过去 24 小时内无 PR 更新（共 0 条），本节省略。

---

## 五、功能需求趋势

从近期 Issues 提炼出社区最关注的五大方向：

1. **MCP 生态健壮性**（最高频）：OAuth 认证失败/复用问题（#4991、#4695、#5039、#5068）、工具注册竞态（#5069）、插件依赖声明（#2113）、research 模式 MCP 访问（#3302）
2. **沙箱与权限精细化**：企业域名边界（本次 release 已响应）、审批粒度控制（#5062）、沙箱文件系统误拦截（#1300、#4788）、文档与实现对齐（#3861）
3. **输入与终端体验**：Shift+Enter 换行（#2776）、标准编辑快捷键（#1785）、VS Code 集成终端原生体验（#5070）
4. **性能与成本优化**：上下文重建加速（#5067）、缓存感知的 /compact 时机（#5064）、token 用量可观测性（#5065）
5. **Agent 交互升级**：输出中可点击的操作元素（#1336）

---

## 六、开发者关注点

- **MCP 是最大痛点来源**：39 条活跃 Issue 中约三分之一涉及 MCP，覆盖认证、超时、注册时序、协议版本协商全链路，建议企业用户暂缓重度依赖远程 HTTP MCP 服务器。
- **沙箱信任度待修复**：Windows 平台沙箱问题集中（#4679、#4788、#4652），且存在文档过度承诺问题，生产环境建议显式验证 effective policy。
- **权限审批体验存在回归迹象**：#5066 反映 assisted permissions 审批频率异常上升，与本次 release 的 `permissions.limitTo` 新特性可能相关，值得观察后续版本。
- **好消息**：MCP 配置热更新（v1.0.93-3）和模型推荐列表更新直接回应了社区近期诉求，迭代节奏健康。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-10-07）

## 📋 今日速览

今日 Kimi Code CLI 仓库整体较为平静：无新版本发布，无 Issue 更新，仅有一条 PR 动态。值得注意的是，PR #2616（Build Remote Agent 手机配对功能）于昨日更新后今日正式关闭，标志着移动端远程协作能力的讨论告一段落。

---

## 🚀 版本发布

过去 24 小时无新版本发布。

---

## 🔥 社区热点 Issues

过去 24 小时内无 Issue 更新，暂无可报道内容。

---

## 🔀 重要 PR 进展

**1. [CLOSED] Add Build Remote Agent phone pairing (gbr/1)**
- 作者：@LinespottingPrivate | 创建于 2026-08-23，2026-10-06 更新
- 链接：[MoonshotAI/kimi-cli PR #2616](https://github.com/MoonshotAI/kimi-cli/pull/2616)
- 内容：为桌面端 Agent 增加 **Build Remote Agent** 手机配对能力。付费 iOS/Android 应用通过免费 MIT 协议开源的 [`gbr-agent`](https://github.com/LinespottingOrg/GrokBuildRemote-Agents) 观察并注入本地会话，采用 `gbr/1` 协议。设计定位是"手机作为旁观者 + 否决权，而非指挥者"，即移动端可监控并在必要时干预，但控制权仍在桌面端。
- 观察：该 PR 无点赞、评论数据缺失，最终被关闭。从第三方远程控制集成角度看思路有趣，但未被合入主线，社区对手机端介入本地会话的安全边界问题或存顾虑。

---

## 📈 功能需求趋势

由于过去 24 小时无活跃 Issue，无法基于最新数据提炼需求趋势。从今日关闭的 PR #2616 可侧观察到：**移动端远程协作/会话监控**是社区尝试探索的方向之一。

---

## 👨‍💻 开发者关注点

今日无新开发者反馈。PR #2616 的关闭提示了一个值得关注的话题：外部设备（手机）对本地 CLI Agent 会话的**观察与干预权限边界**，这涉及安全模型设计（spectator / veto vs. full orchestration），未来类似集成提案可能需更明确的权限分级机制。

---

*数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) | 本日报基于过去 24 小时 GitHub 数据自动整理*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-10-07

## 📌 今日速览

OpenCode 发布 v1.18.35，新增 canonical redirects 与 agent 可读统计数据格式，并修复 xAI 图片工具结果问题。性能方面成为今日焦点：TUI 首屏被 6.6 MB provider 目录阻塞、空闲进程每秒唤醒线程刷空日志等问题被集中报告且当天已有修复 PR。此外，Plan Mode 只读限制再次被绕过，v2 配置兼容性问题（选项透传、字段静默丢弃）持续引发社区讨论。

---

## 🚀 版本发布

### v1.18.35
- **Improvements**: 新增 canonical redirects，支持 JSON 与 Markdown 两种 agent 可读统计数据格式
- **Bugfixes**: xAI 工具结果现可包含受支持的图片，不支持的图片格式将被跳过（@Jaaneek）
- 感谢 3 位社区贡献者（含 @dc85 的 web 文档贡献）

---

## 🔥 社区热点 Issues

1. **[#49057](https://github.com/anomalyco/opencode/issues/49057) Muse Spark 1.3 Free 经 OpenCode Zen 被封锁，无申诉路径** — 21 条评论，热度最高。所有会话均返回 `[user_blocked]` 错误，用户反映缺少申诉机制，涉及 Zen 平台信任问题。

2. **[#53681](https://github.com/anomalyco/opencode/issues/53681) Plan Mode 只读限制被绕过 [Big Pickle]** — 严重的权限安全问题：agent 在严格只读的 Plan Mode 下执行了 `write` 命令，近几个月首次出现回归迹象。

3. **[#53679](https://github.com/anomalyco/opencode/issues/53679) TUI 首屏渲染被完整 6.6 MB provider 目录阻塞** — `GET /provider` 返回整个 models.dev 目录（226 providers、8,405 模型），即使只连接 1 个 provider。直接拖慢启动体验。

4. **[#32002](https://github.com/anomalyco/opencode/issues/32002) macOS 内核 panic（EndpointSecurity 内存泄漏）** — opencode 通过 `data.kalloc.1024` zone 耗尽内核 zone map 导致整机崩溃，11 条评论，属最高严重等级的平台级 bug，今日关闭。

5. **[#53677](https://github.com/anomalyco/opencode/issues/53677) v2 openai-compatible 不再透传未知 provider options** — 破坏 LiteLLM `allowed_openai_params` 透传，v1 正常。v2 协议层重构引发的兼容性断裂，影响自建网关用户。

6. **[#53673](https://github.com/anomalyco/opencode/issues/53673) 空闲进程每秒唤醒双线程刷空日志** — `Logger.batched` 的 fiber 无限 `sleep -> flush` 循环，空闲时持续消耗 CPU/电量，移动端尤其敏感。

7. **[#53671](https://github.com/anomalyco/opencode/issues/53671) Provider 级模型黑白名单配置被静默丢弃** — config schema 公开定义了 `blacklist`/`whitelist`，但运行时 normalization 将其剥离并标记为 "unsupported legacy setting"，schema 与实现不一致。

8. **[#53666](https://github.com/anomalyco/opencode/issues/53666) v2 远程配置拉取失败后丢弃设置并改选模型** — 认证失败时丢失已加载的 provider 设置，且 TUI 会静默替换选中模型并持久化，数据安全隐患。

9. **[#52375](https://github.com/anomalyco/opencode/issues/52375) Desktop 缺失 gpt-6.1-sol 模型并强制切换共享会话模型** — CLI v2.0.10 正常列出该模型而 Desktop 2.0.20 不能，暴露 CLI 与 Desktop 的模型目录不同步问题。

10. **[#37464](https://github.com/anomalyco/opencode/issues/37464) 支持通过 shell 命令自定义 statusLine** — 👍 11，今日最高赞 feature request（对标 Claude Code），且此前的同类请求被合规 bot 误关闭，社区对自动化流程有微词。

---

## 🔧 重要 PR 进展

1. **[#53680](https://github.com/anomalyco/opencode/pull/53680)** fix(tui): TUI 不再阻塞在完整 provider 目录上，优化首屏渲染（对应 #53679，问题报告与修复同日完成）。

2. **[#53674](https://github.com/anomalyco/opencode/pull/53674)** fix(core): 空闲时停止文件 logger 每秒唤醒线程，降低能耗（对应 #53673）。

3. **[#53667](https://github.com/anomalyco/opencode/pull/53667)** fix: 远程配置拉取失败时保留有效设置，并在无安全配置时阻止 provider 使用（对应 #53666）。

4. **[#53425](https://github.com/anomalyco/opencode/pull/53425)** feat(task): subagent 分支隔离 — 为 task 工具添加可选 branch 参数，通过 git worktree 为子 agent 创建隔离工作区。

5. **[#53626](https://github.com/anomalyco/opencode/pull/53626)** feat(core): Bedrock 凭据配置 — 支持 API key、AWS SSO/named profile、直连密钥三种方式，并自动发现本机 profile。

6. **[#53672](https://github.com/anomalyco/opencode/pull/53672)** feat(integration): 声明式外部连接方法 — 插件可像声明 `key` 一样纯数据化声明 `external` 认证方式，降低插件接入成本。

7. **[#53641](https://github.com/anomalyco/opencode/pull/53641)** feat(session-ui): 确定性时间线文件链接检测与解析 — 词法门控 + 静默探测的两阶段方案，附详细 mermaid 设计图。

8. **[#53675](https://github.com/anomalyco/opencode/pull/53675)** feat(app): PWA 任务栏角标显示未读会话数，通过 Badging API 补齐 Desktop 角标需求的 web 侧能力。

9. **[#51337](https://github.com/anomalyco/opencode/pull/51337)** fix(core): 恢复加载系统托管配置目录（`/Library/Application Support/opencode` 等）与 macOS managed preferences — 企业管理场景的关键修复。

10. **[#53257](https://github.com/anomalyco/opencode/pull/53257)（已合并）** fix(app): 一次性配对链接（`/auth/connect/<code>`）在全 GUI 范围内的处理，覆盖 Add server 对话框、Desktop 兑换与过期会话场景。

---

## 📈 功能需求趋势

- **启动与运行时性能**：今日最强信号。TUI 首屏阻塞（#53679）、空闲 CPU 唤醒（#53673）均当天报告当天出修复 PR，社区对轻量、低耗运行高度敏感。
- **v2 配置兼容性与稳定性**：v1→v2 迁移引发一系列回归（options 透传断裂 #53677、配置字段丢弃 #53671/#41162、远程配置失败降级 #53666），是当前最大的摩擦来源。
- **权限与安全控制**：Plan Mode 写绕过两次出现（#53681、#41133），共享会话模型被静默替换（#52375），社区呼吁更强的写保护与配置持久化保护。
- **云 provider 接入体验**：Bedrock 凭据配置（#53626）、声明式外部认证（#53672）、Zen 平台模型可用性与封禁申诉（#49057、#53069）持续活跃。
- **UI 可定制性**：statusLine shell 命令（#37464，👍11）、Termux 跟随系统深浅色（#53664）、侧栏显示 session ID（#53662）等个性化需求持续累积。

---

## ⚠️ 开发者关注点

1. **v2 迁移是当前最大痛点**：多个 v1 可用特性（provider options 透传、npm override、托管配置加载）在 v2 静默失效，建议 v2 用户升级前核查自定义 provider 配置。
2. **平台级稳定性待验证**：macOS 内核 panic（#32002）虽已关闭，EndpointSecurity 相关内存问题值得 macOS 用户留意。
3. **Zen 平台信任危机发酵**：`user_blocked` 无申诉路径（21 条评论）与 RegionError 误报（#53069）叠加，依赖免费模型层的用户需有备选方案。
4. **Plan Mode 不可作为硬性安全边界**：在获得官方修复前，敏感目录操作不应依赖 Plan Mode 拦截。
5. **合规/自动化流程误伤**：多个 issue/PR 被自动 bot 关闭或打上 `needs:compliance` 标签，社区流程摩擦值得维护方关注。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-10-07）

## 1. 今日速览

今日 Qwen Code 发布 **v0.25.1-preview.0** 预览版。Managed Agent 体系持续高速推进：Stage H 扩展运行时（H3/H4a）与 Stage D 持久化生命周期成为社区讨论核心；同时暴露出多个 P1 级核心 Bug（token 死循环烧钱、sed 模拟解析错误、子代理自定义 provider 404），其中部分已有对应修复 PR 在途。

## 2. 版本发布

- **v0.25.1-preview.0**：包含 agents 修复——替换选中远程 Hosts 时不丢失 bindings（[#13430](https://github.com/QwenLM/qwen-code/pull/13430)），以及 #12693 合并后评审的测试补充。

## 3. 社区热点 Issues

1. **#12867 — Stage D 持久化生命周期后续**（17 评论，P2）
   @wenshao 主导的 Managed Agent Stage D 剩余工作：durable lifecycle、Turns/Actions、`java_durable` admission 及 AgentDefinition，是托管架构的基石。[链接](https://github.com/QwenLM/qwen-code/issues/12867)

2. **#12737 — ACP Bridge Stage B 主机集成**（15 评论，P3）
   Legacy 与 Managed 双引擎配对托管的关键集成点，讨论热烈，涉及调度决策与 M1/M3 保护机制。[链接](https://github.com/QwenLM/qwen-code/issues/12737)

3. **#13395 — Kubernetes 工具运行时进度追踪**（13 评论，P2）
   跨平台交付门禁与可移植性验收，对应 PR #13289，是平台分发方向的重要跟踪 Issue。[链接](https://github.com/QwenLM/qwen-code/issues/13395)

4. **#13078 — 依赖 CVE 审计持续失败**（12 评论）
   每日定时安全审计失败，社区关注是否出现新的高危漏洞，涉及 CI/CD 健康度。[链接](https://github.com/QwenLM/qwen-code/issues/13078)

5. **#10887 — 重复工具错误不终止，会话烧掉 5-14M tokens**（P1 Bug）
   生产环境 agent 进入死循环（如 `git remote -v` 反复 exit 128）无终止机制，最高优先级成本问题，今日有新讨论。[链接](https://github.com/QwenLM/qwen-code/issues/10887)

6. **#13556 — sed -i 模拟误读括号表达式内反斜杠转义**（P1 Bug，今日新报）
   `sed -i 's/[ \t]*$//'` 等常见尾随空白清理在 JS 模拟解析中被错误处理，属高频日常操作的静默数据破坏风险。[链接](https://github.com/QwenLM/qwen-code/issues/13556)

7. **#13561 — 子代理 `model: providerId:modelId` 发送完整前缀导致 404**（P2 Bug，今日新报）
   自定义 provider 下子代理把带前缀字符串直接发给 API，已有修复 PR #13567 快速跟进。[链接](https://github.com/QwenLM/qwen-code/issues/13561)

8. **#13563 — 工具发布读取未知资源返回 500 而非领域拒绝**（P2 Bug，今日新报）
   三条内部 tool-publication 路由对不存在的 publication 抛 500，错误语义需修正。[链接](https://github.com/QwenLM/qwen-code/issues/13563)

9. **#13564 — Hosted Workspace 上下文缓存永不失效**（P2，今日新报）
   `QWEN.md`/`AGENTS.md` 注入系统指令后缓存于 latch，工作目录或文件变更后读到陈旧内容。[链接](https://github.com/QwenLM/qwen-code/issues/13564)

10. **#13535 — actor 角色强制执行（R1）**
    R2 系统性隔离验收已在 #13543（+2756 行，覆盖 78 条路由/10 个组件）落地，本 Issue 聚焦 R1 收尾，反映托管安全模型快速成型。[链接](https://github.com/QwenLM/qwen-code/issues/13535)

## 4. 重要 PR 进展

1. **#13567 — 修复子代理 modelProviders 前缀选择器**：解析 `providerId:modelId` 后仅传裸 model ID 给 provider，直接修复 #13561。[链接](https://github.com/QwenLM/qwen-code/pull/13567)
2. **#13467 — 以会话为中心的多代理协作**：在普通会话中 @-mention agent 即可内联回答，替代旧的 thread/ticket 协作模式，是交互范式级变更。[链接](https://github.com/QwenLM/qwen-code/pull/13467)
3. **#13505 — H4a 子代理与验收记录契约**：Stage H 扩展运行时的 durable record contract，定义 H4 后续六个切片的交付地图。[链接](https://github.com/QwenLM/qwen-code/pull/13505)
4. **#13219 — 为重试循环引入终止状态**：全托管栈异步重试循环加预算与终态，修复永久卡死的消息投影，与 #10887 token 问题同源。[链接](https://github.com/QwenLM/qwen-code/pull/13219)
5. **#13562 — Runtime Broker HTTP 取消移出 deadline 完成路径**：避免在 JVM 全局 `CompletableFuture` delay 线程上同步关闭连接的隐患。[链接](https://github.com/QwenLM/qwen-code/pull/13562)
6. **#13354 — 可靠的 ACTIVE Workspace 删除（L3）**：SessionEnd 先于 SessionDelete 结算并校验提交结果，完善托管工作区生命周期。[链接](https://github.com/QwenLM/qwen-code/pull/13354)
7. **#13163 — 授权被拒时停止已绑定 Turn**：权限撤销/Workspace draining 时允许取消运行中 Turn，强化安全边界。[链接](https://github.com/QwenLM/qwen-code/pull/13163)
8. **#13330 — Broker/Connector 健壮性（#12692 R2 后续）**：修复 8 项，含跨重启存活的 lifecycle fence。[链接](https://github.com/QwenLM/qwen-code/pull/13330)
9. **#13565 — Managed Agent 交付台账文档**：双语 delivery ledger，接管 #12380 的合并 PR 历史记录，便于追踪双路径提案进度。[链接](https://github.com/QwenLM/qwen-code/pull/13565)
10. **#13481 — 发布流水线 Docker 磁盘加固**：构建沙箱镜像前额外清理 BuildKit 缓存并加数据根门禁，解决 runner 磁盘耗尽。[链接](https://github.com/QwenLM/qwen-code/pull/13481)

## 5. 功能需求趋势

- **Managed Agent / 多代理架构**（最主流）：Stage D/H 各切片、子代理契约、Hooks、后台 Shell/Monitor、会话级多代理协作（#12867、#12827、#13467、#13505 等），占今日动态绝对主体。
- **平台化与分发**：Kubernetes 工具运行时、跨平台验收门禁（#13395）、`qwen serve` 托管路径。
- **资源治理与成本控制**：token 死循环终止、侧查询截断可观测（#10887、#13538）、输出保留策略（#13534）。
- **Shell/文件操作保真度**：sed 模拟、后台进程观测与背压（#13556、#13533）。
- **IDE/LSP 与渲染体验**：LSP 诊断归属、动态注册、Markdown 表格渲染（#13527、#13491、#13558）。

## 6. 开发者关注点

- **Token 成本失控**是最高声量痛点：死循环无终止、截断与成功不可区分，用户报告单会话损失超千万 token。
- **自定义 provider 兼容性**：modelProviders 前缀解析 404 一类问题直接影响本地/第三方模型用户（含 VRAM 受限的本地模型并发限制 #12470，其修复 PR #12461 已关闭）。
- **静默数据破坏风险**：sed 模拟、JSONL 头部读取吞整行（#13485）等底层工具模拟偏差，开发者难以察觉。
- **CI/安全基线不稳定**：CVE 审计失败（#13078）、flaky 集成测试（#13255）、main 分支 CI 失败（#12714）持续消耗维护带宽。
- **托管路径的缓存与错误语义**：上下文缓存不失效、500 替代领域拒绝等，反映托管架构进入细节打磨期。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-10-07

## 一、今日速览

今日无新版本发布，但 0.10.1 的后续工作持续推进：#6880 聚焦账户设置、bridge 所有权与发布安全资格。过去 24 小时社区活跃度高，8 条 Issue 更新、16 条 PR 更新，其中多条贡献者 PR（本地化修复、搜索 locale、OAuth 提供商等）被合并。MCP 工具暴露失效（#6828）仍是待 triage 的关键缺陷。

## 二、版本发布

过去 24 小时无新 Release。

## 三、社区热点 Issues（8 条全部收录）

1. **#6828 [OPEN]** 0.10.0 中启用的 MCP 服务器在会话内不暴露任何 `mcp_*` 工具，`tool_search` 为空，且 `mcp connect` 无法附加到活跃会话——直接影响 MCP 核心工作流，值得关注优先修复。（[链接](https://github.com/codewhale-hq/Codewhale/issues/6828)）
2. **#6330 [OPEN]** 媒体创建入口（图片/视频/播客）：规划 artifacts 区域的媒体库空状态与创建入口，受限于 Core 的生成提供商。（[链接](https://github.com/codewhale-hq/Codewhale/issues/6330)）
3. **#6160 [OPEN]** App-server 终端字节契约（session/bytes/input/resize/exit/ConPTY）：为 GPUI 原生面板定义终端协议，避免桌面端二次实现 PTY。（[链接](https://github.com/codewhale-hq/Codewhale/issues/6160)）
4. **#6263 [OPEN]** 会话内密钥输入（模型不可见）：解决用户中途需退出 TUI 执行 `codewhale auth set` 的流程断裂问题，安全设计是难点。（[链接](https://github.com/codewhale-hq/Codewhale/issues/6263)）
5. **#6877 [OPEN]** Windows 下复制粘贴实现不完整：多行剪贴板内容粘贴后被直接发送给 LLM，影响基础可用性。（[链接](https://github.com/codewhale-hq/Codewhale/issues/6877)）
6. **#6876 [CLOSED]** 空输入框按 Space 永久隐藏最后一条助手消息——已随 #6846 关闭。（[链接](https://github.com/codewhale-hq/Codewhale/issues/6876)）
7. **#6872 [CLOSED]** UI tool-hang watchdog 在 `request_user_input` 等待 600 秒后杀死回合，与 #6003/#6275 相关但非重复。（[链接](https://github.com/codewhale-hq/Codewhale/issues/6872)）
8. **#6874 [bot]** 每夜安全扫描：因缺少 `GITHUB_CODEWHALE_SECURITY_PAT`，CodeQL 告警列表无法读取——安全自动化存在配置缺口。（[链接](https://github.com/codewhale-hq/Codewhale/issues/6874)）

## 四、重要 PR 进展

1. **#6880 [OPEN]** 0.10.1 后续：账户注册/登录引导、bridge 工作在账户变更与 Windows 文件替换时的保留、中文安装指引更新、依赖与 OAuth 日志发现收尾。（[链接](https://github.com/codewhale-hq/Codewhale/pull/6880)）
2. **#6846 [CLOSED]** 0.10.1 主体：合入社区贡献、修复“等待人工”回合恢复——无时限提问保留原回合越过挂起超时；Space 折叠回答为可见预览（修复 #6876）。（[链接](https://github.com/codewhale-hq/Codewhale/pull/6846)）
3. **#6867 [CLOSED]** OrcaRouter 新增 OAuth 2.0 + PKCE 浏览器登录及实时聊天目录，补齐 API key 之外的第二凭证入口。（[链接](https://github.com/codewhale-hq/Codewhale/pull/6867)）
4. **#6805 [CLOSED]** 插件可声明经审核的 OpenAI 兼容 AI 提供商与公共 OAuth 客户端（`extensions.net.codewhale.providers`），显著扩展插件生态能力。（[链接](https://github.com/codewhale-hq/Codewhale/pull/6805)）
5. **#6875 [CLOSED]** 修复 `/model` 切换后 session-only 提示未翻译问题（中文 receipt 半翻译），提升本地化质量。（[链接](https://github.com/codewhale-hq/Codewhale/pull/6875)）
6. **#6878 [CLOSED]** 明确 `mcp connect`/`mcp validate` 输出的进程边界语义，避免用户误以为运行中会话已加载工具（与 #6828 呼应）。（[链接](https://github.com/codewhale-hq/Codewhale/pull/6878)）
7. **#6832 [CLOSED]** FEAT-027：`/permissions` 与 `/status` 通过共享命令 Shapes 实现可移植化，延续命令架构迁移。（[链接](https://github.com/codewhale-hq/Codewhale/pull/6832)）
8. **#6817 [CLOSED]** Runtime API 新增按工具调用读取变更（基于前后快照），客户端首次可展示 shell 命令的具体改动。（[链接](https://github.com/codewhale-hq/Codewhale/pull/6817)）
9. **#6869 [CLOSED]** 新增 `GET /v1/skills/{name}` 返回技能 `SKILL.md` 正文及路由元数据，使外部客户端可激活技能。（[链接](https://github.com/codewhale-hq/Codewhale/pull/6869)）
10. **#6857 / #6858 / #6860 / #6864 [CLOSED]** 一批社区贡献合入：压缩检查点锚定测试加固、`image_analyze` 报告真实图像尺寸、Bing/DDG 搜索遵守 locale 配置、自动化删除时归档终端运行记录。（[6857](https://github.com/codewhale-hq/Codewhale/pull/6857) | [6858](https://github.com/codewhale-hq/Codewhale/pull/6858) | [6860](https://github.com/codewhale-hq/Codewhale/pull/6860) | [6864](https://github.com/codewhale-hq/Codewhale/pull/6864)）

另有关注项：**#6873 [OPEN]** 每夜安全依赖升级（`source-map-js` 1.2.1→1.2.2，修复高危 event-loop DoS）。（[链接](https://github.com/codewhale-hq/Codewhale/pull/6873)）

## 五、功能需求趋势

- **Runtime API 与客户端集成**：技能正文下发（#6869）、工具调用级变更读取（#6817）、终端字节契约（#6160）——平台化/API 化是明确方向。
- **多提供商与认证体验**：OrcaRouter OAuth（#6867）、插件 OAuth 提供商（#6805）、会话内密钥输入（#6263）——降低凭证配置摩擦。
- **媒体能力**：图片/视频/播客创建入口（#6330）在等待 Core 生成提供商就绪。
- **MCP 可靠性**：工具暴露与进程边界（#6828、#6878）。
- **本地化与国际化**：翻译完整性修复（#6875）、搜索 locale（#6860）、中文安装文档。

## 六、开发者关注点

- **MCP 集成稳定性**：#6828 表明 0.10.0 的 MCP 工具发现链路存在回归风险，是当前最高优先级的用户痛点。
- **TUI 基础交互**：Windows 复制粘贴（#6877）、Space 消息折叠（#6876）——跨平台终端细节仍需打磨。
- **人机交互生命周期**：等待用户输入的超时/恢复逻辑（#6872、#6846）是近期反复出现的主题。
- **安全自动化缺口**：夜扫 PAT 未配置（#6874）导致告警不可见，需尽快补齐 CI 凭证。
- **0.10.1 发布节奏**：#6846 已合、#6880 收尾中，可期待近期发布。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 — 2026-10-07

## 1. 今日速览

今日无新版本发布，但 PR 活动密集：Windows/ConPTY 相关的 TUI 修复（鼠标追踪、滚动位置、选区清理）集中合入，`@mitsuhiko`（Flask 作者）贡献了 in-context compaction 和 llama.cpp 分类器两项重量级功能。Issues 方面，Windows 平台体验（#7547，74 条评论）和上下文预算/compaction 机制仍是社区讨论焦点，pi-durable 子项目出现多个新报告的 bug。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#7547](https://github.com/earendil-works/pi/issues/7547) — Windows 平台运行方式调查**（74 评论）
   官方发起的调研帖，梳理 Pi 在 Windows 上的多种运行方式，决定核心维护与外部托管的边界。持续两个多月仍是讨论最热烈的帖子。

2. **[#10031](https://github.com/earendil-works/pi/issues/10031) — ESC 停止思考后 Pi 卡在 "Working..."**（已关闭，22 评论）
   自 ~v0.84.0 起高频出现的卡死 bug，只能 Ctrl+C 重启，影响多台机器。今日关闭，或已修复。

3. **[#10480](https://github.com/earendil-works/pi/issues/10480) — 直连 OpenAI 不识别手动 usage limit 重置**（14 评论）
   ChatGPT Pro 用户使用 banked reset 后仍被提示限额；需 logout/login 绕过。账户计费状态同步存在缺陷。

4. **[#10300](https://github.com/earendil-works/pi/issues/10300) — ChatGPT OAuth ID token 未持久化**（14 评论）
   `credentialFromTokenResponse` 丢弃 ID token，导致扩展无法获取账户身份，影响下游生态。

5. **[#8643](https://github.com/earendil-works/pi/issues/8643) — Bedrock OpenAI 模型拒绝 toolResult 内嵌图片**（11 评论）
   贡献者已在 fork 上准备好修复（将图片提升为相邻 user block），等待贡献流程放行。

6. **[#8061](https://github.com/earendil-works/pi/issues/8061) — 上下文预算忽略 maxTokens 输出预留**（已关闭，10 评论）
   输入仅占 78% 窗口仍被拒，且 compact-retry 同样失败。核心上下文管理逻辑问题。

7. **[#9773](https://github.com/earendil-works/pi/issues/9773) — `before_provider_request` 不触发于 compaction 请求**（9 评论）
   文档承诺的钩子在压缩/分支摘要请求中失效，影响依赖此钩子的扩展开发者。

8. **[#9075](https://github.com/earendil-works/pi/issues/9075) — Compaction 继承会话 thinking level 导致确定性撞输出上限**（9 评论）
   adaptive thinking 模型上 thinking token 计入 max_tokens，高 effort 时压缩必失败。

9. **[#8810](https://github.com/earendil-works/pi/issues/8810) — 扩展注册的 provider 间歇性被忽略**（8 评论）
   新会话偶发不按 settings.json 的 defaultProvider/defaultModel 启动，静默回退到其他模型——难以复现但影响信任。

10. **[#10256](https://github.com/earendil-works/pi/issues/10256) — 0.99.x 终端颜色查询应答泄漏进 prompt**（7 评论）
    mintty + ConPTY 下启动即打开外部编辑器，prompt 出现 `rgb:` 转义序列；0.87.1 正常，0.99.x 回归。

## 4. 重要 PR 进展

1. **[#10577](https://github.com/earendil-works/pi/pull/10577) — feat: in-context compaction**（OPEN）
   在缓存会话内生成压缩摘要（重复下一轮请求 + system 指令 + toolChoice none），有望保住 prompt cache，性能意义重大。

2. **[#10382](https://github.com/earendil-works/pi/pull/10382) — feat: 原生使用 llama.cpp 分类器模型**（已合入）
   通过 `/v1/systemone` 探测决策模型（Julia-1、Laya 等），注册为 typesafe classifier 而非 chat 模型。

3. **[#10569](https://github.com/earendil-works/pi/pull/10569) — feat: 按 key 可用性过滤 OpenRouter 模型**（OPEN）
   使用认证的 `/api/v1/models/user` 过滤无权限模型，关闭 #10353。

4. **[#10142](https://github.com/earendil-works/pi/pull/10142) — fix: Bedrock Converse 向 OpenAI 模型发送 reasoning effort**（已合入）
   修复 #9331：Bedrock 上 OpenAI 模型此前始终以默认 medium effort 运行，基准测试结果不可信。

5. **[#10560](https://github.com/earendil-works/pi/pull/10560) — fix: raw mode 之后启用鼠标追踪**（已合入）
   ConPTY 在 cooked 模式下丢弃鼠标 DECSET 序列，Windows 全屏模式鼠标问题的根因修复。

6. **[#10580](https://github.com/earendil-works/pi/pull/10580) — fix: 视口上方内容收缩时保持手动滚动位置**（CLOSED）
   修复全屏模式向上翻阅时被强制拉回底部的问题（#10556）。

7. **[#10521](https://github.com/earendil-works/pi/pull/10521) — fix: 为 NVIDIA NIM 模型内联 $ref 工具 schema**（OPEN）
   nemotron-3.5-super-vl 等模型返回本地 `$ref` JSON 字符串导致校验失败，修复 #10270。

8. **[#9880](https://github.com/earendil-works/pi/pull/9880) — feat: 发布配置 JSON Schemas**（OPEN）
   从 TypeBox 契约生成并发布 models/settings/keybindings/themes 的 JSON Schema，配置体验工程化。

9. **[#10567](https://github.com/earendil-works/pi/pull/10567) / [#9310](https://github.com/earendil-works/pi/pull/9310) — 修复全屏选区跨会话残留**（已合入）
   切换会话/重建 transcript 时清理鼠标选区，双保险关闭 #9311。

10. **[#10433](https://github.com/earendil-works/pi/pull/10433) + [#10429](https://github.com/earendil-works/pi/pull/10429) — 允许应用在 OpenAI 登录中自定义名称**（已合入）
    基于 pi-ai 的第三方 agent 不再在 "Sign in with ChatGPT" 流程中显示为 "Pi"，对生态构建者重要。

## 5. 功能需求趋势

- **Windows 一等公民支持**：#7547 调研 + 今日多个 ConPTY/mintty/路径大小写修复，Windows 是当前投入重点。
- **上下文管理与 compaction**：#8061、#9075、#9773 及 PR #10577，社区对压缩机制的正确性、缓存友好性要求强烈。
- **OpenRouter/多 provider 精细化**：按 key 过滤模型（#10353/#10569）、成本计算偏差（#9980）、用量上限同步（#10480）。
- **扩展生态 API 完善**：OAuth ID token 持久化（#10300）、payload 钩子覆盖范围（#9773）、package namespace（#8834）。
- **配置工程化**：JSON Schema 发布（PR #9880）、context window 可选（#5064）。

## 6. 开发者关注点

- **稳定性回归**：0.99.x 的终端处理回归（#10256）和 ESC 卡死（#10031）表明近期 TUI 重构引入风险，升级需谨慎。
- **Compaction 可靠性是信任基石**：多个 issue 指出压缩失败会导致会话不可恢复，用户对 "compact-retry 也失败" 的连锁反应尤为不满。
- **贡献流程摩擦**：多个贡献者反馈 PR 被 contribution gate bot 自动关闭（#8643、#10183），外部修复难以落地。
- **云/订阅直连的边缘 case 多**：Anthropic OAuth effort 错误（#10063）、订阅请求挂起（#10019）、限额重置不同步（#10480）——订阅用户的体验问题多于 API 用户。
- **安装与自更新**：bun 安装无法 `pi update`（#3980）长期未解，Nix 打包由社区重构中（PR #10528）。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报 · 2026-10-07

## 📌 今日速览

今日 oh-my-pi 发布 **v18.7.0**，修复了中断运行时助手消息边界的可靠性问题，并为 pi-ai 新增 OAuth 凭据提供方。社区围绕本地模型系统提示词优化（#1734，26 👍）和多项 P2 级 bug 展开热烈讨论，同时新增 PR 支持 Termux 原生运行时和 OpenAI Decisions API 判官后端。

---

## 🚀 版本发布

### v18.7.0
- **@oh-my-pi/pi-agent-core** (Fixed)：修复中断运行时助手消息边界的发出机制，订阅者现在可以可靠地持久化并恢复被中断的对话轮次。
- **@oh-my-pi/pi-ai** (Added)：新增 `getOAuthCredentialProvider()`，用于解析登录别名（如 `openai-codex`）。

### v18.6.3
- **@oh-my-pi/pi-agent-core** (⚠️ Breaking)：`Agent.withdrawUndeliveredQueuedMessages()` 取代 `withdrawLiveSteering()`，返回 `{ steering, followUp }`，同时回收已出队但未发送给模型的排队输入，避免中止的运行记录或上报这些消息。

---

## 🔥 社区热点 Issues

**1. [OPEN] 针对本地模型精简优化系统提示词** — [#1734](https://github.com/can1357/oh-my-pi/issues/1734)
当前系统提示词约 40k token，对上下文窗口有限的本地模型过于庞大。该 issue 创建于 6 月仍持续活跃（26 👍 / 22 评论），是社区呼声最高的优化需求之一。

**2. [OPEN] 注册 openai-codex 的 gpt-6-sol / gpt-6-luna 选择器** — [#12884](https://github.com/can1357/oh-my-pi/issues/12884)
Codex CLI 已上线 `gpt-6-sol` 和 `gpt-6-luna`，但 OMP 模型目录未收录，未知选择器会静默回退。新模型支持的滞后是高频反馈点。

**3. [OPEN] 实时截图超 Anthropic 32MB 限制，413 恢复死循环** — [#14453](https://github.com/can1357/oh-my-pi/issues/14453)
MCP 工具每次返回截图，长会话累计 62 张 base64 PNG（33.7MB）触发 413，且恢复逻辑死胡同、子代理还会重发载荷。长会话稳定性典型案例。

**4. [OPEN] Anthropic 400：压缩后 tool_addition 系统消息位置错误** — [#14746](https://github.com/can1357/oh-my-pi/issues/14746)
v18.6.3 上会话压缩后每个请求都失败，会话永久不可用。已有对应修复 PR #14747（见下文）。

**5. [OPEN] 9 个 omp 进程合计占用 6.89 GiB 内存** — [#9908](https://github.com/can1357/oh-my-pi/issues/9908)
mnemopi embed worker（780MB）永不卸载，单会话占用 0.63-1.47 GiB，远超历史 39-49MB 空闲基线。多会话用户的核心痛点。

**6. [OPEN] aside 消息被阻塞的 wait 卡住** — [#14732](https://github.com/can1357/oh-my-pi/issues/14732)
`deliverAs: "aside"` 的消息在代理阻塞于 `wait` 时无法送达，30 秒后台任务也会延迟 aside 消息，影响扩展开发的实时交互。

**7. [OPEN] RPC 会话无法看到其他进程存储的新凭据** — [#14596](https://github.com/can1357/oh-my-pi/issues/14596)
一个进程 `/login` 后，其他已运行进程的 `get_available_models` / `set_model` 保持过期状态。多进程协作场景的凭据同步缺陷。

**8. [OPEN] MCP bridge 丢弃内嵌资源 blob** — [#14598](https://github.com/can1357/oh-my-pi/issues/14598)
MCP 工具返回的二进制媒体（`resource.blob`）只渲染为 URI 占位符，模型既收不到内容也拿不到附件句柄，直接影响多模态工具链。

**9. [OPEN] ZFS 设备号变化导致 stats 缓存全量重解析** — [#14736](https://github.com/can1357/oh-my-pi/issues/14736)
缓存身份包含 OS 设备号，ZFS 跨挂载/重启后 st_dev 变化引发不必要的历史重解析。Linux 平台细节兼容问题。

**10. [CLOSED] /new 后原生 plan mode 残留** — [#14653](https://github.com/can1357/oh-my-pi/issues/14653)
新会话继承上一会话的 plan mode 但会话文件无记录，导致状态不一致。已修复关闭，体现 TUI 状态管理持续打磨。

---

## 🔀 重要 PR 进展

**1. fix(ai): Anthropic 工具控制消息置于压缩元数据之后** — [PR #14747](https://github.com/can1357/oh-my-pi/pull/14747)
直接修复今日热点 #14746 的 400 错误，附回归测试。

**2. feat(android): 支持 Termux 原生运行时** — [PR #6350](https://github.com/can1357/oh-my-pi/pull/6350)
原生插件可在 Android ARM64 编译，Bionic 兼容的进程管理，移动端运行的重要一步。

**3. feat(ai): OpenAI Decisions API 判官后端** — [PR #14745](https://github.com/can1357/oh-my-pi/pull/14745)
新增 `openai-decisions` 判定 API，与 `typesafe`、`openrouter-decisions` 并列，支持 `gpt-6-luna` 公测 API。

**4. fix(coding-agent): 防止 advisor 复用已拒绝其上下文的模型** — [PR #14743](https://github.com/can1357/oh-my-pi/pull/14743)（review:p1）
解决密码学工作中 advisor 反复触发网络安全拒绝的问题。

**5. feat(coding-agent): 压缩后释放拒绝锁定的 fallback** — [PR #14744](https://github.com/can1357/oh-my-pi/pull/14744)
允许压缩清除引发拒绝的上下文后回退到更上游的模型链。

**6. feat(coding-agent): bash 命令暴露 PI_SESSION_ID / PI_SESSION_FILE** — [PR #14729](https://github.com/can1357/oh-my-pi/pull/14729)
对齐上游 pi 的环境变量约定，增强 shell 工具的可观测性。

**7. fix(mnemopi): 记忆图仅链接有效记忆** — [PR #14427](https://github.com/can1357/oh-my-pi/pull/14427)（review:p1）
过滤过期记忆边，缓解记忆库膨胀和 ingest 变慢（呼应 #9908）。

**8. fix(browser): 默认 relay 标签页隔离与借用页面保护** — [PR #14060](https://github.com/can1357/oh-my-pi/pull/14060)
默认 relay 打开独立后台页面而非接管用户当前标签页，与 #12314 共同治理浏览器劫持问题。

**9. perf(stats): 悬停绘制移至 overlay canvas 并 memoize 时间线** — [PR #14727](https://github.com/can1357/oh-my-pi/pull/14727)
统计视图渲染性能优化，已合并关闭。

**10. feat(fast-mode): 区分被拒绝的优先级与活跃优先级** — [PR #7751](https://github.com/can1357/oh-my-pi/pull/7751)
`fastModeState()` 返回 off/active/blocked 三态，blocked 以错误色提示。

---

## 📈 功能需求趋势

1. **本地/小模型适配**：系统提示词精简（#1734）呼声最高，本地模型上下文受限是核心动机。
2. **新模型/新 Provider 接入**：gpt-6-sol/luna 选择器（#12884）、Requesty 内置支持（#6491）、OpenRouter Auto Router 排除模型（#14578）、自定义 openai-images provider（#13272）。
3. **移动端与远程访问**：官方移动 App / PWA + 推送通知（#11609）、Termux 运行时（PR #6350）。
4. **内存与性能**：聚合内存占用（#9908）、stats 缓存重解析（#14736）、LSP 多进程共享（#14637）。
5. **多进程/多会话协作**：凭据跨进程可见性（#14596）、LSP mux 复用（#14637）。

---

## ⚠️ 开发者关注点

- **长会话稳定性**：大载荷 413 恢复死循环（#14453）、压缩后消息顺序 400（#14746）、压缩相关的 fallback 释放需求（PR #14744）——上下文压缩是当前 bug 密集区。
- **资源占用**：内存不释放、embed worker 常驻（#9908）在多会话场景被持续放大，mnemopi 优化 PR 已在路上。
- **多进程一致性**：凭据、模型列表、会话状态的跨进程同步（#14596、#14732）是 SDK/扩展开发者的主要摩擦点。
- **原生 shell 内建工具可靠性**：SIGBUS（#14613）、tail -f 泄漏（#14614）、sort -u 去重错误（#14606）等一批问题已集中修复关闭，但提示内置工具需更多真实环境测试。
- **配置热更新与可定制性**：`/reload-config`（PR #7749）、usage 显示开关（PR #10423/#7852）等显示 mvid 等活跃贡献者正推动 TUI 可配置性持续增强。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*