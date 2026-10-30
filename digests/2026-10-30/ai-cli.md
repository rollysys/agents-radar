# AI CLI 工具社区动态日报 2026-10-30

> 生成时间: 2026-10-30 04:53 UTC | 覆盖工具: 11 个

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
**数据窗口：2026-10-30**

---

## 1. 生态全景

AI CLI 工具已从单纯的命令行补全工具演化为**全栈 Agent 开发平台**，功能竞争聚焦在沙箱安全、多 Agent 编排、MCP 生态和企业部署能力上。头部工具（Claude Code、Codex、Gemini CLI）日活跃 Issue/PR 均达 40-50 量级，迭代速度保持“周版本 + 日热修”节奏。**安全与数据丢失**（Claude Code 的 rm -rf 事件）与**成本透明度**（headless 计费倍率、配额争议）成为全生态最高烈度的信任议题。同时，Windows 平台短板、中文 IME 适配、prompt cache 稳定性等工程细节问题在几乎所有工具中集中爆发，标志着市场进入“体验深水区”竞争阶段。

---

## 2. 各工具活跃度对比

| 工具 | 今日热点 Issue | 活跃 PR | Release | 活跃度评级 |
|---|---|---|---|---|
| **OpenAI Codex** | 10+（50 Issue 统计窗口） | 46 个（含 10 个重要进展） | rust-v0.166.0 | 🔥🔥🔥🔥🔥 |
| **Claude Code** | 10+（含 2 起数据丢失高危） | 仅 2 个更新 | v2.1.314 | 🔥🔥🔥🔥🔥 |
| **Qwen Code** | 10+（CI 稳定性为主） | 10+ 重要 PR | v0.26.4（含 Desktop/SDK） | 🔥🔥🔥🔥 |
| **OpenCode** | 10 热点（#59387 达 120 评论） | 10+ 重要 PR | v2.2.1 + v2.2.2 双版本 | 🔥🔥🔥🔥 |
| **Gemini CLI** | 10 热点（多个 P1） | 10+（多数已合入） | nightly | 🔥🔥🔥🔥 |
| **Pi** | 10 热点（#7547 达 91 评论） | 10+（密集修复日） | 无 | 🔥🔥🔥 |
| **DeepSeek TUI** | 10 热点（P0 编译失败） | 10+（社区贡献活跃） | 无 | 🔥🔥🔥 |
| **oh-my-pi** | 10 热点 | 10+（@sjawhar 批量提交） | v18.14.0（含 Breaking Change） | 🔥🔥🔥 |
| **Copilot CLI** | 10 热点 | 0 | 无 | 🔥🔥（Issue 热但工程静默） |
| **DeepSeek Harness** | 0 | 0 | dsh-v0.2.1-rc.5 | 🔥（稳定打磨期） |
| **Kimi Code CLI** | 0 | 0 | 无 | ❄️ 完全沉寂 |

> 注：Claude Code 的 PR 数量少与其闭源开发模式一致，社区侧仍保持高 Issue 活跃度。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **安全与写入隔离** | Claude Code（#105342 rm -rf 事件，v2.1.314 新增目录写入限制）、Gemini CLI（#19873 OS 级零依赖沙箱提案）、Codex（#58182 网络权限约束、#58168 sandbox 修复）、OpenCode（#37564 Auto mode 风险分级审批） | 全生态从“提示授权”转向“强制隔离 + 细粒度权限” |
| **长会话可靠性与压缩** | Codex（#57608 compaction 丢任务、#11626 /rewind 230👍）、Copilot CLI（#5292 压缩超时）、DeepSeek TUI（#7142 re-root 丢历史）、oh-my-pi（#17422 压缩过早触发） | 自动压缩是共性薄弱点，“检查点回滚 + 上下文保留”呼声最高 |
| **成本/Token 透明度** | Claude Code（#97074 headless 1.8× 倍率、#99330 配额争议、#86879 spinner 隐性消耗）、Pi（#10024/#11529 cache 前缀漂移重复计费）、DeepSeek TUI（#6969 驱逐经济学） | 计费口径不一致、prompt cache 稳定性是成本敏感用户的核心焦虑 |
| **MCP 生命周期管理** | Claude Code（3 个新报 MCP bug 占新 Issue 近半）、oh-my-pi（#2888 lazy 连接 RFC）、OpenCode（TLS 信任/代理绕行）、Gemini CLI（60s 超时修复、128 工具上限）、Copilot CLI（OAuth 回归） | 从“能连上”进化到“按需连接、失败自恢复、无孤儿进程” |
| **中文/IME 与国际化** | OpenCode（#60469 拼音预编辑不可见）、oh-my-pi（#17427 IME 错位、#17339 中文思考）、Pi（#11580 阿拉伯语 RTL）、DeepSeek TUI（#2323 中文输入法长期未解） | CJK 用户体验成为系统性短板，正在批量补齐 |
| **Windows 平台成熟度** | Codex（#51601 sandbox 失败 125 评论）、Copilot CLI（#3700 WSL2 CPU 215%）、Pi（#7547 调研帖 91 评论）、DeepSeek TUI（vim 按键系列修复） | Windows 已成为所有跨平台工具的质量洼地 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 企业级权限/路由（Gateway groups）、Desktop 体验 | Max 订阅重度用户、企业团队 | 闭源核心 + Hook/Plugin 扩展，安全合规优先 |
| **Codex** | Computer Use/浏览器自动化、云端（Dots/Cloud）、语音（realtime V3） | ChatGPT 订阅用户、自动化场景 | Rust 重写、嵌入式 app-server、多模态横向最宽 |
| **Gemini CLI** | 子代理编排、AST 感知工具链、内部评估体系 | 开发者生态共建者 | 开源 TypeScript，架构调研驱动（EPIC 级提案） |
| **Copilot CLI** | ACP 协议平等性、GitHub 生态集成 | GitHub 原生用户、IDE 内嵌场景 | ACP 标准化路线，但工程响应明显滞后于社区 |
| **OpenCode** | Desktop 体验、`/goal` 自主执行、企业网络环境（TLS/代理/服务化） | 自托管与企业部署用户 | 双版本节奏最快，多模态（图片生成）先行 |
| **Qwen Code** | Managed Agent/多 Agent（A2A）、Web Shell、自托管模型 | 本地模型用户、云端托管场景 | Java/TS 混合，E2B 云沙箱，发布管线自动化投入大 |
| **DeepSeek TUI** | vim 模式、上下文成本优化、本地 Provider（vLLM/Ollama） | BYO-model 极客、成本敏感用户 | 社区贡献驱动，Rust workspace |
| **Pi / oh-my-pi** | 扩展生态、多 Provider 兼容、STT 语音、性能（虚拟化渲染） | 扩展开发者、多网关高级用户 | 轻量核心 + npm 扩展，Bun 运行时 |
| **DeepSeek Harness** | 思考内容展示打磨 | DeepSeek 模型用户 | 稳定收敛期，v0.2.1 临近 |

---

## 5. 社区热度与成熟度

- **最活跃社区**：Codex（Issue/PR 双高，工程侧 46 PR 持续产出）与 Claude Code（Issue 声量最大，数据丢失事件驱动舆论）
- **快速迭代期**：OpenCode（24h 双版本 + 10+ PR）、Qwen Code（三件套同步发版，但 CI 红灯拖累节奏）、Gemini CLI（P1 修复密集合入）
- **成熟打磨期**：DeepSeek Harness（rc 收尾）、Pi（修复型迭代，无功能版本）
- **风险信号**：
  - **Copilot CLI** Issue 热度高但 24h 零 PR 活动，回归频发（1.0.60/80/88/92 多次）且响应迟缓，社区对发布质量控制的质疑上升
  - **DeepSeek TUI** main 编译失败（#7148）阻断所有外部 PR 合并——社区基础设施级故障
  - **Qwen Code** 两个 P1 CI 故障使每个 PR 背负无效归因成本，CVE 审计失败持续近一个月未解
  - **Kimi Code CLI** 完全无活动，存在维护停滞嫌疑

---

## 6. 值得关注的趋势信号

1. **安全从“可选”变为“默认”**：Claude Code 的目录写入限制、Pi 的 0700/0600 权限收紧、Codex 的网络权限约束几乎同期落地。选型时应将“默认沙箱隔离”视为基线能力，仍在依赖纯提示授权的工具风险敞口大。

2. **订阅制 OAuth 合规收紧**：Google 明确封禁第三方工具使用产品级 OAuth（oh-my-pi #12487），“用订阅跑第三方 CLI”的灰色路径正在关闭，订阅用户需准备 API 计费预案。

3. **计费口径分裂是下一个信任战场**：headless 1.8× 倍率、Max 20x 实际仅 1.6×、不计费 thinking 计入压缩基线——多家工具的隐性 token 消耗问题说明**成本审计能力**（按请求的用量日志）将成为选型硬指标。

4. **MCP 进入“治理阶段”**：行业焦点从 MCP 接入转向生命周期治理——lazy 连接、失败缓存、孤儿进程、工具数上限。重度 MCP 用户应优先评估各工具的 MCP 健壮性而非接入数量。

5. **压缩/检查点可靠性决定长会话上限**：4 个工具同日暴露 compaction 相关缺陷，`/rewind`（230👍）式的“对话+代码同步回滚”是最明确的未满足需求。

6. **Windows 与 CJK 是体验分水岭**：两条短板在全部跨平台工具中普遍存在——谁先补齐，谁就能吃下被忽视的大份额用户群（Pi 的 Windows 调研帖 91 条评论印证需求强度）。

**选型建议速览**：企业安全优先选 Claude Code（启用新权限配置）；多模态自动化选 Codex；自托管/企业网络环境选 OpenCode 或 Qwen Code；本地模型 + 成本敏感选 DeepSeek TUI；扩展开发者关注 Pi 生态；谨慎对待当前工程响应滞后的 Copilot CLI 与无活动的 Kimi Code CLI。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据来源**：github.com/anthropics/skills（截止 2026-10-30）

> ⚠️ 说明：本次抓取的 PR 数据中评论数/点赞数均为空（undefined），故 PR 排行基于更新活跃度、关联 Issue 讨论热度及主题影响力综合评估；Issues 部分有真实评论数排序，趋势分析以 Issues 为主。

---

## 一、热门 Skills 排行（按综合关注度）

| # | Skill / PR | 功能与讨论热点 | 状态 |
|---|---|---|---|
| 1 | **mcp-builder 修复** — [PR #1742](https://github.com/anthropics/skills/pull/1742) | 适配 mcp>=2.0 的 `streamable_http_client` 更名与自定义 Header 机制；关联 [Issue #1390](https://github.com/anthropics/skills/issues/1390)（evaluation.py 对真实 MCP 服务器评分恒为 0/N），mcp-builder 是生态中被报 bug 最多的官方 Skill 之一 | OPEN |
| 2 | **skill-creator 系列修复** — [PR #1298](https://github.com/anthropics/skills/pull/1298)、[PR #1997](https://github.com/anthropics/skills/pull/1997)、[PR #1681](https://github.com/anthropics/skills/pull/1681) | 触发评估隔离与 Windows 兼容、YAML frontmatter 解析、打包脚本直接执行；skill-creator 是元技能，社区（如 [Issue #202](https://github.com/anthropics/skills/issues/202)、[#556](https://github.com/anthropics/skills/issues/556)）持续要求其符合自身最佳实践 | OPEN |
| 3 | **notion-spec-to-implementation** — [PR #1245](https://github.com/anthropics/skills/pull/1245) | 将产品/技术 Spec 转为 Notion 可执行任务（任务拆分、验收标准、进度追踪），直击项目管理自动化需求 | OPEN |
| 4 | **pyxel（复古游戏开发）** — [PR #525](https://github.com/anthropics/skills/pull/525) | Pyxel 作者本人提交，含无头运行、帧检查等验证流程；挂起 7 个月仍持续更新（10-23），是存活最久的社区 Skill PR | OPEN |
| 5 | **md2video-audio** — [PR #1703](https://github.com/anthropics/skills/pull/1703) | Markdown → Marp 幻灯片 → 带真人配音的 MP4 视频，零成本内容再分发方向 | OPEN |
| 6 | **proofcore-contract-auditor** — [PR #1771](https://github.com/anthropics/skills/pull/1771) | Solidity/Rust 智能合约静态分析 + 审计证明上链 TON；典型的“商业 Skill 上架官方仓库”案例 | OPEN |
| 7 | **document-typography** — [PR #514](https://github.com/anthropics/skills/pull/514) | 修复 AI 生成文档的孤行、寡行、编号错位等排版问题，“用户不会主动要求但影响每一次输出” | OPEN |
| 8 | **webapp-testing 安全加固** — [PR #1980](https://github.com/anthropics/skills/pull/1980) | 消除 `shell=True` 导致的命令注入风险（CWE-78），反映社区对官方 Skill 安全性的 scrutinize | OPEN |

---

## 二、社区需求趋势（来自 Issues）

1. **安全与信任边界**（最热）：[Issue #492](https://github.com/anthropics/skills/issues/492)（46 评论）——社区 Skill 冒用 `anthropic/` 命名空间构成信任滥用，叠加 [#1394 eval-viewer XSS](https://github.com/anthropics/skills/issues/1394)、[#1980 注入](https://github.com/anthropics/skills/pull/1980)，安全是头号议题。
2. **组织级 Skill 分发**：[Issue #228](https://github.com/anthropics/skills/issues/228)（17 评论）——团队内共享 Skill 库、直接分享链接，取代 Slack 传文件的原始方式；[#189 插件内容重复](https://github.com/anthropics/skills/issues/189) 也是分发混乱的体现。
3. **Skill 可靠性工程**：[Issue #556](https://github.com/anthropics/skills/issues/556)（13 评论）触发率 0% 的评测失效、[#1390 mcp-builder 评测崩溃](https://github.com/anthropics/skills/issues/1390)——社区迫切需要可信的 Skill 触发/评测基础设施。
4. **Agent 记忆与状态管理**：[Issue #1329](https://github.com/anthropics/skills/issues/1329)（compact-memory 符号化压缩记忆）、[#1487 claude-api 一次注入 156k token](https://github.com/anthropics/skills/issues/1487)——上下文效率类 Skill 需求显著。
5. **质量门禁类工作流**：[Issue #1385](https://github.com/anthropics/skills/issues/1385) 推理质量三道门禁管线、[#412 agent-governance](https://github.com/anthropics/skills/issues/412)——AI 输出治理与审查自动化。
6. **文档格式扩展**：ODT Skill（[PR #486](https://github.com/anthropics/skills/pull/486)）、docx 修复（[#2018](https://github.com/anthropics/skills/issues/2018)、[PR #1792](https://github.com/anthropics/skills/pull/1792)）、PDF（[PR #538](https://github.com/anthropics/skills/pull/538)）——办公文档处理仍是贡献主力。

---

## 三、高潜力待合并 Skills（活跃 OPEN PR）

- **[PR #1742](https://github.com/anthropics/skills/pull/1742)** mcp-builder 适配 mcp>=2 ——修复高优先级 Issue #1668，且 mcp-builder 缺陷频发，合并动机强。
- **[PR #1997](https://github.com/anthropics/skills/pull/1997)** skill-creator YAML 解析修复——10 月提交、修复评测管线元数据错配，属核心基础设施。
- **[PR #525](https://github.com/anthropics/skills/pull/525)** pyxel——持续维护近 8 个月、上游作者背书。
- **[PR #1792](https://github.com/anthropics/skills/pull/1792)** docx 超时错误上报——配合活跃的 docx bug 报告链。
- **[PR #1681](https://github.com/anthropics/skills/pull/1681)** skill-creator 打包脚本修复——10-24 仍在更新，接近收敛。
- 小而美的快速修复集群（gerardrecinto 系列）：[#1977](https://github.com/anthropics/skills/pull/1977)、[#1976](https://github.com/anthropics/skills/pull/1976)、[#1975](https://github.com/anthropics/skills/pull/1975)，均绑定已确认 Issue，合并概率最高。

---

## 四、生态洞察（一句话）

**社区最集中的诉求不是“更多 Skill”，而是“可信的 Skill”**——命名空间防伪与安全加固（#492）、组织级分发（#228）、以及能真实反映触发率的评测体系（#556、#1390），即 Skills 生态正从“数量扩张”转向“安全、分发与质量基础设施”建设阶段。

---

# Claude Code 社区动态日报 · 2026-10-30

## 1. 今日速览

今日发布 **v2.1.314**，新增 `permissions.blockWritesOutsideWorkingDirectories` 配置，在所有权限模式下阻止 Write/Edit/NotebookEdit 操作工作目录之外的路径——这被视为对近期多起“rm -rf 误删主目录/项目”数据丢失事件（如 #105342、#104848）的直接回应。安全与数据丢失类 Issue 今天持续升温，同时 Desktop 多窗口支持（#30154）已成为呼声最高的功能请求（256 👍）。

## 2. 版本发布

### v2.1.314
- **`permissions.blockWritesOutsideWorkingDirectories`**：Write、Edit、NotebookEdit 在任何权限模式下都拒绝工作目录之外的路径
- **Claude Apps Gateway upstreams 新增可选 `groups` 列表**：仅将指定 IdP 组内的开发者路由到对应上游（企业路由能力）

## 3. 社区热点 Issues

| # | Issue | 关注点 |
|---|-------|--------|
| 1 | [#105342](https://github.com/anthropics/claude-code/issues/105342) Subagent 测试执行 `rm -rf ~` 删除用户主目录，worktree 隔离未生效 | 🔴 高优先级 + data-loss 标签。今天的新版权限配置正是此类问题的缓解方案，强烈建议启用 |
| 2 | [#104848](https://github.com/anthropics/claude-code/issues/104848) 项目被整体删除且无法恢复，涉及他人线上应用 | 数据丢失 + high-priority，社区对“不可恢复破坏 + 支持拒绝复核”反应强烈 |
| 3 | [#97074](https://github.com/anthropics/claude-code/issues/97074) Headless `claude -p` 每 token 消耗约 1.8× 的 5 小时窗口额度 | 115 👍 / 60 评论，CI/自动化场景的核心成本痛点，已有复现 |
| 4 | [#30154](https://github.com/anthropics/claude-code/issues/30154) Desktop 多窗口支持 | 256 👍 / 78 评论，呼声最高的 Desktop 功能 |
| 5 | [#86879](https://github.com/anthropics/claude-code/issues/86879) `agent_summary` spinner 占用约 18% 加权 token，请求可禁用 | 子 agent 重度用户的隐性成本黑洞，80 👍 |
| 6 | [#99330](https://github.com/anthropics/claude-code/issues/99330) 实测 Max 20x 周配额仅为 5x 的 ~1.6×（非 4×），要求公布配额与用量历史 | 定价透明度争议，用 API 等价美元逐笔核算，数据扎实 |
| 7 | [#73582](https://github.com/anthropics/claude-code/issues/73582) API 凭据明文存储，应改用 OS 密钥链 | 老牌安全诉求，随今日安全主题再度活跃 |
| 8 | [#104895](https://github.com/anthropics/claude-code/issues/104895) Desktop 预热会话首轮结束后 Project/Local MCP server 被拆除 | 跨多版本稳定复现，影响 MCP 依赖工作流 |
| 9 | [#106087](https://github.com/anthropics/claude-code/issues/106087) Plugin MCP server 启动失败后无法自恢复，15 分钟失败缓存阻塞新会话 | 今日新报，`$.mcp.connect` 不重试的设计缺陷 |
| 10 | [#106109](https://github.com/anthropics/claude-code/issues/106109) `claude mcp serve` 在 stdin 关闭后不退出，SSH 场景每会话遗留一个孤儿进程 | 今日新报，影响远程/CI 环境资源管理 |

**其他值得一看**：[#106111](https://github.com/anthropics/claude-code/issues/106111) Desktop "Instructions for Claude" 在 Linux/Windows 上始终不生效（#88999 关闭后复发）；[#106115](https://github.com/anthropics/claude-code/issues/106115) Sonnet 5.5 安全过滤器误伤正常对话。

## 4. 重要 PR 进展

过去 24 小时仅 2 个 PR 更新，无重大合并：

1. [#32751](https://github.com/anthropics/claude-code/pull/32751) **[OPEN]** fix(hookify)：修复 `stop`/`prompt` 事件映射到错误字段名导致 Hookify 规则永不触发的问题（关联 #32153）。社区 PR 中为数不多仍在推进的实质性修复。
2. [#57333](https://github.com/anthropics/claude-code/pull/57333) **[CLOSED]** README 文档更新，已被关闭。

## 5. 功能需求趋势

- **Desktop 体验**：多窗口（#30154）、会话切换器键盘导航（#106110）、detached 窗口链接失效（#91438）——Desktop 已是需求最密集的领域
- **安全与隔离**：路径写入限制（已在 v2.1.314 落地）、凭据加密存储、沙箱隔离失效——本周最强趋势
- **成本透明度**：headless 计费倍率（#97074）、配额公布（#99330）、隐性 token 消耗（#86879）
- **MCP 可靠性**：server 生命周期管理、失败恢复、孤儿进程——MCP 相关 bug 占今日新报 issue 的近半
- **可配置性**：键位绑定（#106112）、通知/调查问卷开关（#94710）

## 6. 开发者关注点

1. **数据安全是第一焦虑**：连续多起不可恢复删除事件，新权限配置项应立即启用，但社区期待更强的默认隔离（worktree/sandbox 失效问题仍待修）
2. **自动化场景成本失衡**：headless SDK 模式被多收 ~1.8× 额度，直接影响 CI 流水线的经济性
3. **Remote Control / 移动端权限体验割裂**：授权被拒后无法在手机/Web 端 override（#101018、#103864）
4. **MCP 长尾问题多**：连接、恢复、清理、TLS 约束等碎片化 bug 持续累积，建议重度 MCP 用户关注 #106087、#106109 的修复进展

---
*数据来源：github.com/anthropics/claude-code · 统计窗口 2026-10-29 ~ 2026-10-30*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-10-30 | 数据来源：github.com/openai/codex**

---

## 📰 今日速览

Codex CLI 发布 rust-v0.166.0，带来键盘驱动的转录选择与统一的 Markdown 渲染。Windows 平台问题持续占据社区讨论焦点，其中 Windows sandbox 设置失败（#51601，125 条评论）成为最热 Issue。工程侧活动频繁，多个 PR 集中改善嵌入式会话能力、MXC sandbox 健壮性及权限体系。

---

## 🚀 版本发布

**rust-v0.166.0**
- 新增键盘驱动的转录选择功能：支持 word / line / page 级别移动、集成搜索、可配置快捷键（#57221-#57224）
- 在异步提问、选项、回答及转录回复中统一渲染 Markdown（#57259, #57292）
- 新增 GPT 相关功能（发布公告内容被截断，详见 Release 页面）

---

## 🔥 社区热点 Issues（Top 10）

1. **[#51601](https://github.com/openai/codex/issues/51601) Windows sandbox 启动失败（125 评论 / 31 👍）**
   Windows app 26.1002.51308 升级后，sandbox 校验自身运行时发生 sharing violation，所有命令执行失败。影响面广，是本日评论最多的 Issue。

2. **[#11626](https://github.com/openai/codex/issues/11626) 请求 `/rewind` 检查点恢复（51 评论 / 230 👍）**
   希望同时回滚对话上下文与 Codex 应用的代码改动。230 个 👍 使其成为最受欢迎的功能请求，值得产品侧优先评估。

3. **[#51524](https://github.com/openai/codex/issues/51524) Windows Computer Use 卡在 get_window_state（50 评论）**
   10 月 6 日后 Windows 端无法读取 Chrome/Edge 浏览器 URL，Computer Use 直接中断，属于平台级回归。

4. **[#50769](https://github.com/openai/codex/issues/50769) Dots 授权跨任务不生效（31 评论）**
   用户已授权开发任务，但后续只读报告任务仍触发审批阻塞，授权作用域传递不可靠。

5. **[#29639](https://github.com/openai/codex/issues/29639) WSL 工作区下 Browser Use 失败（29 评论）**
   Windows 桌面端自动生成的 node_repl MCP server 路径映射错误（Windows exe 收到 Linux sandboxCwd），WSL 用户长期受阻。

6. **[#55890](https://github.com/openai/codex/issues/55890) Codex Cloud GitHub Review 卡在 Running（21 评论，已关闭）**
   私有仓库手动 @codex review 显示 👀 后永不产出结果。已关闭，可关注是否修复彻底。

7. **[#53154](https://github.com/openai/codex/issues/53154) Chrome Computer Use 无故触发 URL 安全拦截（17 评论）**
   用户已授权的页面读取从成功突变为 safety stop，且无 actionable 理由，反映安全检查误报问题。

8. **[#32396](https://github.com/openai/codex/issues/32396) macOS Locked Use 自动解锁失败（15 评论）**
   功能启用后仍反复要求人工解锁，Pro 用户工作流受阻。

9. **[#42740](https://github.com/openai/codex/issues/42740) Windows 空闲 STDIO MCP server 耗尽 Tokio blocking pool（14 评论）**
   空闲本地 MCP server 可导致 app-server 完全停滞，是影响稳定性的架构级问题。

10. **[#57608](https://github.com/openai/codex/issues/57608) 自动 compaction 丢失活跃任务（10 评论）**
    压缩后 assistant 丢失任务上下文并要求用户重发，尽管 rollout 检查点仍在本地，直接影响长会话可用性。

---

## 🔧 重要 PR 进展（Top 10）

1. **[#58240](https://github.com/openai/codex/pull/58240)** 为嵌入式 app-server 会话启用 TUI task tools，补齐 `set_thread_title` 等工具。
2. **[#58239](https://github.com/openai/codex/pull/58239) / [#58238](https://github.com/openai/codex/pull/58238)** 嵌入式模式下启用 agent command center，支持 `codex agents --no-daemon` 与会话切换。
3. **[#58237](https://github.com/openai/codex/pull/58237)** 归档/删除线程时不再误关其他线程的 side conversations。
4. **[#58221](https://github.com/openai/codex/pull/58221)** 保留 realtime V3 转录到会话历史，修复长语音对话内容丢失。
5. **[#58202](https://github.com/openai/codex/pull/58202)** 切换模型 provider 后保持历史会话可读，避免聊天记录被隐藏。
6. **[#58219](https://github.com/openai/codex/pull/58219)** 新增文件型 gateway OAuth 凭据存储（`credentials_store = "file"`），为无 keyring 环境提供选项。
7. **[#58168](https://github.com/openai/codex/pull/58168)** Windows MXC deny path 缺失父目录时自动创建，修复 sandbox 初始化失败一类问题。
8. **[#58182](https://github.com/openai/codex/pull/58182)** 在 `requirements.toml` 中支持 `[permissions.network]` 托管网络约束，贯穿审批与 Windows sandbox 策略校验。
9. **[#58189](https://github.com/openai/codex/pull/58189)** standalone web search 改用 turn 级权限，与 hosted search 权限行为对齐。
10. **[#58161](https://github.com/openai/codex/pull/58161)** MCP 审批元数据加入 tool_name 及 readOnly/destructive 等 annotation hints，改善审批体验与安全性。

其他值得注意：#58165 从诊断信息中移除含签名 token 的远程插件 URL（安全修复）；#58196 Bazel 发布产物改为强制要求。

---

## 📈 功能需求趋势

- **检查点/回滚能力**：/rewind、compaction 后上下文保留（#11626、#57608、#45343）呼声极高，反映社区对“会话状态可靠性”的强烈诉求。
- **Windows 平台成熟度**：sandbox、MCP、Computer Use 相关 Issue 密集（#51601、#42740、#55046、#29639），Windows 已成为质量短板。
- **Computer Use / 浏览器自动化稳定性**：URL 检测、安全拦截、解锁流程（#51524、#53154、#54532、#56928）是多平台共性痛点。
- **Dots / 云端工作流**：授权传递、Slack 监控、云工作区文件一致性（#50769、#52765、#58242）。
- **多端会话同步与 Remote**：跨设备接续（#40879）、跨端同步（#55502）。

---

## ⚠️ 开发者关注点

1. **Windows sandbox 资源泄漏**：MXC sandbox 残留 AppContainer 目录与防火墙规则直至重启（#55046），需关注系统资源占用。
2. **长会话可靠性**：自动 compaction 丢任务是最具破坏性的近期回归类问题（#57608），建议重要任务主动落盘。
3. **授权/权限模型复杂度**：跨任务、跨 provider 的权限传递不一致（#50769、#55777 模型被静默切换），调试成本高。
4. **MCP 集成稳定性**：STDIO server 阻塞池耗尽（#42740）、Atlassian 工具缺失（#47581）影响企业工作流。
5. **版本升级风险**：多个 Issue 由桌面端版本升级直接触发（#51601、#51524），升级前建议查看社区反馈。

---
*本报告基于过去 24 小时 GitHub 公开数据自动生成，Issue/PR 数量：50 / 46。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-30）

## 一、今日速览

今日发布 nightly 版本 **v0.67.0-nightly.20261030.gb633c0703**，包含 README 范围澄清与终端宽度变化后的内联历史渲染修复。社区讨论焦点集中在 **子代理可靠性**（挂起、虚假成功上报）与 **AST 感知工具** 两大方向。PR 方面有多个安全修复（路径遍历、凭据存储原子写入）落地，并出现新模型 **gemini-4-argon** 的支持代码。

## 二、版本发布

**v0.67.0-nightly.20261030.gb633c0703**（[Release](https://github.com/google-gemini/gemini-cli/releases)）
- docs(readme): 澄清 Gemini CLI 的定位、限制与工具生态（PR #29995）
- fix(cli): 限制终端宽度变化后的内联历史重渲染

## 三、社区热点 Issues

1. **#22323** [P1] 子代理达到 MAX_TURNS 后仍上报 GOAL 成功，掩盖中断事实（13 评论）— 影响任务结果可信度，是子代理状态上报的核心缺陷。[链接](https://github.com/google-gemini/gemini-cli/issues/22323)
2. **#19873** [P2] 利用模型 bash 原生能力的零依赖 OS 沙箱与执行后意图路由（9 评论）— 涉及安全性与 UX 的架构级提案。[链接](https://github.com/google-gemini/gemini-cli/issues/19873)
3. **#21409** [P1] 通用代理挂起：简单操作（如建目录）可挂起 1 小时（8 评论，8 👍）— 高影响可用性 bug，用户需手动禁止子代理规避。[链接](https://github.com/google-gemini/gemini-cli/issues/21409)
4. **#22745** [P2] 评估 AST 感知的文件读取/搜索/代码库映射（7 评论）— EPIC 级调研，旨在减少 token 噪声与对齐错误的读取。[链接](https://github.com/google-gemini/gemini-cli/issues/22745)
5. **#21968** [P2] Gemini 很少主动使用自定义 skills 和子代理（7 评论）— 普遍反馈的编排调度问题。[链接](https://github.com/google-gemini/gemini-cli/issues/21968)
6. **#22267** [P2] Browser Agent 忽略 settings.json 覆盖配置（如 maxTurns）（4 评论）。[链接](https://github.com/google-gemini/gemini-cli/issues/22267)
7. **#21983** [P1] browser 子代理在 Wayland 下失败（4 评论）。[链接](https://github.com/google-gemini/gemini-cli/issues/21983)
8. **#24246** [P2] 超过 128 个工具时遭遇 400 错误 — 工具数量上限对重度 MCP 用户的硬约束。[链接](https://github.com/google-gemini/gemini-cli/issues/24246)
9. **#22186** [P1] get-shit-done 输出 hook 导致崩溃。[链接](https://github.com/google-gemini/gemini-cli/issues/22186)
10. **#23571** [P2] 模型频繁在随机位置创建临时脚本，增加工作区清理成本。[链接](https://github.com/google-gemini/gemini-cli/issues/23571)

## 四、重要 PR 进展

1. **#29765**（已合入）安全修复：文件凭据存储写入原子化 + 串行化，修复并发写入丢凭据与中断锁死问题。[链接](https://github.com/google-gemini/gemini-cli/pull/29765)
2. **#29767**（已合入）[P1] MCP tools/list 发现默认 60s 超时，替代原 10 分钟静默阻塞。[链接](https://github.com/google-gemini/gemini-cli/pull/29767)
3. **#29762**（已合入）[P1] 切换认证方式时保留用户对 settings 文件的手动编辑。[链接](https://github.com/google-gemini/gemini-cli/pull/29762)
4. **#29761**（已合入）修复 `$&`/`$$` 等替换模式破坏提示词模板与 `{{args}}` 的隐患。[链接](https://github.com/google-gemini/gemini-cli/pull/29761)
5. **#29876** [P1·安全] 修复 legacy checkpoint 回退路径的路径遍历漏洞。[链接](https://github.com/google-gemini/gemini-cli/pull/29876)
6. **#29875** 新增 **gemini-4-argon** 模型注册与能力识别 — 新模型信号，值得关注。[链接](https://github.com/google-gemini/gemini-cli/pull/29875)
7. **#29881** ACP 模式重试进度上报 + 重试延迟上限与模型回退，修复数小时配额重置被误判为瞬时错误。[链接](https://github.com/google-gemini/gemini-cli/pull/29881)
8. **#29879** 流中途出错/重试时丢弃缓冲的工具调用，避免半执行状态。[链接](https://github.com/google-gemini/gemini-cli/pull/29879)
9. **#30044** 处理 Windows Node 22.12–22.16 libuv 零设备 stat 报告问题（readSecureFileBuffer）。[链接](https://github.com/google-gemini/gemini-cli/pull/30044)
10. **#30043** 向 hooks 暴露 tool_call_id，便于集成侧配对 Before/After 事件。[链接](https://github.com/google-gemini/gemini-cli/pull/30043)

## 五、功能需求趋势

- **子代理体系成熟化**：最大主题。涉及可靠性（挂起 #21409、虚假成功 #22323）、编排调度（#21968）、并行协作与共享内存（#18287）、轨迹可分享（#22598）、本地子代理 Sprint（#20195）。
- **AST 感知工具链**：#22745/#22746/#22747 系列，探索 tilth、glyph、ast-grep 用于精准读取与代码库映射。
- **Token 效率**：“Tactful Extraction” 分层读取策略（#19561）、文件化任务追踪替代上下文内 WriteToDo（#18836）。
- **安全与沙箱**：OS 级零依赖沙箱（#19873）、破坏性命令防护（#22672）、per-workspace 策略（#18397）。
- **Browser Agent 韧性**：会话接管与锁恢复（#22232）、配置覆盖修复（#22267）。
- **内部评估体系**：项目 eval 稳定化（#23166）与 steering eval（#23313）。

## 六、开发者关注点

1. **子代理可用性是最大痛点**：挂起、静默失败、结果失真（GOAL 假成功）直接侵蚀对 agent 编排的信任，多个 P1 仍待复测。
2. **状态可见性不足**：`/bug` 报告不含子代理上下文（#21763），子代理轨迹难以审查（#22598），排障成本高。
3. **工具数量上限**（#24246）与 MCP 发现超时（#29767 已修）影响重度 MCP 用户的工作流。
4. **工作区卫生**：临时脚本乱放（#23571）、破坏性 git/db 操作（#22672）增加清理与安全负担。
5. **环境兼容性**：Wayland（#21983）、Windows libuv 特性（#30044）等平台边缘问题持续出现。

---
*数据来源：github.com/google-gemini/gemini-cli（过去 24 小时）*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-30 | 数据来源：github.com/github/copilot-cli**

---

## 📰 今日速览

今日无新版本发布、无活跃 PR。社区热度集中在**计费与配额问题**（PRU 配额异常清零 #4802）和 **ACP 非交互模式的 OAuth/会话管理缺陷**上，多条高赞 Issue 持续发酵。此外，云会话（`--cloud`）与自动压缩（compaction）方面出现多个新报告的严重问题，值得官方优先关注。

---

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues（Top 10）

**1. [#4802] PRU 配额疑似被清零，或与启用 Assisted Permissions 有关**（OPEN，8 评论）
Copilot Pro 年付用户在启用 Assisted Permissions 后 PRU 配额异常耗尽。计费类问题影响用户信任，社区讨论活跃，等待官方 triage 结论。
🔗 github/copilot-cli Issue #4802

**2. [#4851] Azure MCP Server HTTP 请求失败**（CLOSED，6 评论 / 👍10）
运行时在验证 Azure API Center MCP registry 时出现 BrokenPipe，稳定运行数月的配置一夜之间失效。已关闭，可作为同类问题的修复参考。
🔗 github/copilot-cli Issue #4851

**3. [#4994] 回归：1.0.88→1.0.89 MCP OAuth 每次会话重复弹授权页**（OPEN，5 评论 / 👍8）
有效 token 仍收到 401，导致每个 ACP 会话都打开 OAuth 授权页，严重影响自动化流水线。高赞、高影响的回归问题。
🔗 github/copilot-cli Issue #4994

**4. [#3700] WSL2 回归：空闲时 CPU 占用 ~215%，TUI 冻结**（OPEN，6 评论）
高严重性，1.0.60 起 WSL2 环境主线程空转，输出冻结直至重启。Windows/WSL 用户核心痛点。
🔗 github/copilot-cli Issue #3700

**5. [#4275] ACP 应暴露 contextTier 会话配置项**（OPEN，7 评论 / 👍4）
交互模式可通过 `/model` 切换上下文窗口层级，ACP 客户端却只能在启动时设置。ACP 平等性诉求的代表性 Feature Request。
🔗 github/copilot-cli Issue #4275

**6. [#2109] ACP 请求支持 ask_user/ask_question 扩展方法**（OPEN，4 评论 / 👍8）
自定义 ACP 客户端目前无法向用户呈现澄清式问题，社区强烈呼吁结构化交互能力。
🔗 github/copilot-cli Issue #2109

**7. [#4613] 1.0.80+ 回归：MCP schema 启动即全量注入，多占 354K tokens**（CLOSED，3 评论）
高严重性 token 浪费问题，影响成本与上下文预算，已修复关闭。
🔗 github/copilot-cli Issue #4613

**8. [#5292] 自动压缩反复 300s 超时直至撞上硬上下文限制**（OPEN，1.0.91）
长会话稳定性问题，自动压缩失败后无有效兜底，用户被迫中断会话。
🔗 github/copilot-cli Issue #5292

**9. [#5289] `copilot --cloud` 启动即报 internal server error**（OPEN，1.0.105）
云会话功能在 provisioning 阶段直接失败，属今日新报告的阻塞性问题。
🔗 github/copilot-cli Issue #5289

**10. [#5295/#5294] 交互设计反馈：Ctrl+D 拒绝后不应随机继续；提问前应先总结**（OPEN）
同一用户连发两条交互体验 Issue，反映 TUI 交互的可预测性与透明度问题。
🔗 github/copilot-cli Issue #5295 | Issue #5294

---

## 🔀 重要 PR 进展

过去 24 小时无活跃 PR 更新。

---

## 📈 功能需求趋势

1. **ACP / 非交互模式平等性**：最集中的方向。社区要求 ACP 与交互 TUI 功能对齐（contextTier #4275、ask_user #2109、默认拒绝权限白名单 #5275、后台子代理不被 abort #4555、异步 shell 不阻塞响应 #5293）。
2. **MCP 生态健壮性**：OAuth token 刷新/作用域兼容（#4994、#5061、#5229、#5058）、BYOK 场景下图片内容丢失（#4600）、schema 延迟加载（#4613）。
3. **长会话与上下文管理**：自动压缩超时（#5292）、过早压缩（#4571）、rollover 失败（#5205）。
4. **可配置性与易用性**：键盘映射自定义（#5291）、交互前摘要、非交互权限模型。

---

## ⚠️ 开发者关注点（痛点汇总）

- **计费透明度**：PRU 配额异常消耗（#4802）引发信任担忧，用户需要可审计的用量日志。
- **Windows/WSL 稳定性**：CPU 空转（#3700）、剪贴板失效（#3981）、环境变量不继承（#5281）三连，Windows 体验短板明显。
- **版本回归频发**：1.0.60、1.0.80、1.0.88→89、1.0.92 多个版本引入回归，社区对发布质量控制的质疑在上升。
- **静默失败**：MCP 图片被丢弃、插件 cache_path 失效、Docker 场景 hook 不触发（#4600、#3864），缺乏可观测性是共性抱怨。
- **资源泄漏**：空闲会话仍有线程满载 CPU 并写无限增长的日志（#4710，已关闭）。

---
*本报告基于过去 24 小时 GitHub 数据自动汇总，如有疑问请以官方仓库为准。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-10-30

## 📌 今日速览

OpenCode 桌面版与 CLI 密集修复中：过去 24 小时新增 **v2.2.1 / v2.2.2 两个版本**，带来默认图片生成与 `/goal` 持续目标执行等新能力。社区侧，Zen 免费额度问题（#59387）持续发酵，评论已破 120 条；同时一批 Windows 服务化、代理绕行、MCP TLS 信任等底层修复 PR 正在推进。

---

## 🚀 版本发布

- **[v2.2.2](https://github.com/anomalyco/opencode/releases)**：连接的 Provider 支持图片模型时，Agent 可直接使用 `experimental_image_generate`，无需额外配置；可通过 `experimental.image_generate.model` 指定模型。
- **[v2.2.1](https://github.com/anomalyco/opencode/releases)**：新增 `/goal <objective>` 命令，在 TUI/Desktop 中让会话持续推进目标直到 reviewer 确认完成，支持 `pause` / `resume` / `clear` 控制（[#59437](https://github.com/anomalyco/opencode/pull/59437)）。
- **[process-daemon v0.4.0 / v0.3.3](https://github.com/anomalyco/opencode/releases)**：`opencode-pty`（protocol 7）发布至 npm `@opencode/pty`。

---

## 🔥 社区热点 Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) [OPEN] Zen 免费额度问题汇总帖**（120 评论）— 官方指定的免费层问题主帖，涵盖额度用尽提示、重置失效、版本不兼容等。今日热度最高，官方持续跟进中。
2. **[#50257](https://github.com/anomalyco/opencode/issues/50257) [CLOSED] Desktop 模型选择器所有 V2 模型显示 "No reasoning"** — 根因是 `capabilities.reasoning` 从未设置，误导用户对模型能力的判断，已修复关闭。
3. **[#37564](https://github.com/anomalyco/opencode/issues/37564) [OPEN] "Auto mode"：基于 LLM 分类的权限自动审批**（46 👍）— 高票功能需求，希望 Agent 根据风险等级自动决定是否请求权限。
4. **[#51505](https://github.com/anomalyco/opencode/issues/51505) [CLOSED] Windows 插件缓存泄漏 ~38 GB** — `<spec>.staging-*` 目录无限累积，磁盘占用惊人，已修复。
5. **[#53617](https://github.com/anomalyco/opencode/issues/53617) [CLOSED] Desktop 每次更新残留 175 MB CLI 旧版本** — 清理代码被开发标志门控，打包版从不执行，磁盘无限增长，已修复。
6. **[#52706](https://github.com/anomalyco/opencode/issues/52706) [CLOSED] [高危] ResizeObserver 循环导致 App 无响应** — Electron 渲染进程被无限布局循环拖死，重启仅能临时缓解，已修复。
7. **[#51014](https://github.com/anomalyco/opencode/issues/51014) [OPEN] 多个 TUI 实例重复发送同一通知** — 事件广播未隔离实例，多个终端同时弹出重复桌面通知。
8. **[#60422](https://github.com/anomalyco/opencode/issues/60422) [OPEN] Zen 内置 Provider ECONNRESET，换 VPN 立即恢复** — 疑似网络/IP 相关连接问题，与 #60455 同类，排查中。
9. **[#60469](https://github.com/anomalyco/opencode/issues/60469) [OPEN] IME 输入法预编辑文字在浅色主题下不可见** — 中文拼音预编辑串渲染为白色，浅色主题下完全不可见，影响中文用户。
10. **[#60413](https://github.com/anomalyco/opencode/issues/60413) [CLOSED] 永久性 404 被无限指数退避重试（单 ID 94 次/43 分钟）** — 客户端对不可恢复错误不终止重试，与多个 "Session not found" 系列问题（#60396、#57026）同源，已修复。

---

## 🔧 重要 PR 进展

1. **[#60471](https://github.com/anomalyco/opencode/pull/60471)** — Windows 11 24H2+ 下为分离式 `serve --service` 进程挂载无窗口控制台，修复服务化运行问题。
2. **[#60039](https://github.com/anomalyco/opencode/pull/60039) / [#60041](https://github.com/anomalyco/opencode/pull/60041)** — MCP 远程服务器支持 per-server TLS 信任配置，及私有网络证书“首次使用即信任”流程，企业自建 MCP 的关键能力。
3. **[#60472](https://github.com/anomalyco/opencode/pull/60472)** — 回环服务流量绕过 `HTTP(S)_PROXY` 环境代理，修复代理环境下的本地通信失败，合并了多个历史 PR。
4. **[#60385](https://github.com/anomalyco/opencode/pull/60385) [CLOSED]** — 升级 OpenTUI 0.8.0，一次性修复 WSLg 图片粘贴、SSH 下 Ctrl+V 冻结、剪贴板超时后粘贴永久挂起（#50847）等多个痛点。
5. **[#60462](https://github.com/anomalyco/opencode/pull/60462) [CLOSED]** — 渲染器 UUID 生成改为 HTTP 安全的 `uuid()` 工具函数，修复 Web UI 非安全上下文下 "Open file" 静默失败（#59791）。
6. **[#60475](https://github.com/anomalyco/opencode/pull/60475)** — `opencode run --format json` 补回最后一步的 `step_finish`，修复 cost/token 统计偏低。
7. **[#60089](https://github.com/anomalyco/opencode/pull/60089)** — ACP 会话空闲即结束 prompt，防止 `SQLITE_FULL` 等持久化失败导致 `session/prompt` 永久 pending。
8. **[#60450](https://github.com/anomalyco/opencode/pull/60450)** — 修复 ripgrep 索引无法返回空目录，`/api/fs/find` 现可命中无文件目录。
9. **[#60465](https://github.com/anomalyco/opencode/pull/60465) [CLOSED]** — 对齐 Promise 客户端（`ai.*`）与 Effect API 的差异，并加类型测试防回归。
10. **[#60473](https://github.com/anomalyco/opencode/pull/60473)** — 所有退出路径清理根 OSC 7501 状态，避免终端状态残留。

---

## 📈 功能需求趋势

- **权限与自动化**：Auto mode 智能审批（#37564，46 👍）、`/goal` 自主目标执行（已发布）——社区强烈期待 Agent 更少打断、更自主。
- **企业/网络环境**：MCP TLS 信任、代理绕行、Windows 服务化——自托管与企业部署场景需求明显上升。
- **可观测性**：按请求的 Provider 传输耗时日志（#60468），大上下文会话卡顿时无法定位瓶颈。
- **多模态**：图片生成默认启用，模型能力元数据（reasoning 标记）准确性受关注。
- **国际化/输入法**：中文 IME 预编辑渲染（#60469）等 CJK 用户输入体验问题开始浮现。

---

## ⚠️ 开发者关注点

1. **磁盘占用失控**：插件 staging 目录（38 GB）与 CLI 版本残留（175 MB/次）两个大问题本周修复，桌面用户建议升级后手动清理缓存。
2. **网络/连接稳定性**：Zen Provider ECONNRESET、代理环境下回环通信失败是当前最高频的新报障方向。
3. **重试机制健壮性**：404 等永久性错误被无限重试的系列问题已修复，此前会引发高频报错弹窗。
4. **Linux 剪贴板/终端兼容**：Wayland 粘贴挂起、xsel 缺失静默失败、日志污染 TUI——OpenTUI 0.8.0 升级集中解决，建议更新。
5. **会话状态一致性**：桌面端 "ghost session" / "Session not found" 系列问题集中收敛，远程 server 场景仍是最脆弱环节。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-10-30）

## 📌 今日速览

Qwen Code 发布 v0..26.4 稳定版及配套 Desktop 与 TypeScript SDK 更新。CI 稳定性成为今日焦点：Managed Agent gate 在 main 分支持续红灯（#15898，P1），Web Shell smoke 测试也在阻塞所有 PR（#15861，P1）。功能层面，Managed Agent 架构拆分（#15871）和 E2B Cloud 运行时支持（#15879）两大 PR 值得关注。

---

## 🚀 版本发布

**v0.26.4**（含 [desktop-v0.26.4](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.26.4) 与 [sdk-typescript-v0.1.26](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.26)，SDK 已捆绑 CLI 0.26.4）

- **feat(generated-ui)**: 生成视图跟随宿主主题（[#15798](https://github.com/QwenLM/qwen-code/pull/15798)）
- **feat(managed)**: 增加有界 SQL 历史查询（by @doudouOUC，[#15839](https://github.com/QwenLM/qwen-code/pull/15839)）
- **feat(generated-ui)**: 支持与卡片持续对话
- **fix(config)**: 报告被静默丢弃的配置项（by @yiliang114，[#15794](https://github.com/QwenLM/qwen-code/pull/15794)）——与今日 #15855 反馈的 `contextWindowSize` 被自动移除问题直接相关
- 无破坏性变更

---

## 🔥 社区热点 Issues

1. **[#15898](https://github.com/QwenLM/qwen-code/issues/15898) [P1] Managed Agent gate 在 main 失败，postFailureLoads 运行间表现不一致**（今日新建）
 两次独立 main 运行失败同一测试但失败形态不同，全量层级 PR 全部受阻，status/in-progress 中，是当前最紧急问题。

2. **[#15861](https://github.com/QwenLM/qwen-code/issues/15861) [P1] Web Shell host-directory-picker smoke 确定性超时，与 PR 无关**
 每个无关 PR 都被迫承担失败归因成本，严重拖慢整体 review 节奏。

3. **[#14724](https://github.com/QwenLM/qwen-code/issues/14724) Main CI 失败：Managed Agent gate 无测试标识（97 条评论）**
 持续 11 天的 CI 追踪 issue，评论量最高，反映 Managed Agent 测试基础设施的长期不稳定。

4. **[#13078](https://github.com/QwenLM/qwen-code/issues/13078) 每日依赖 CVE 审计失败（36 条评论）**
 持续近一个月，可能涉及新的高危漏洞或 npm audit 端点问题，安全风险需尽快确认。

5. **[#15855](https://github.com/QwenLM/qwen-code/issues/15855) [P1] `contextWindowSize` 被自动移除**
 用户配置在 OpenAI 兼容 provider（Ollama 本地模型）下被静默清除，直接影响受限硬件用户，且 v0.26.4 的 #15794 修复可能正是针对此类问题。

6. **[#15894](https://github.com/QwenLM/qwen-code/issues/15894) [P2] 以用户消息发送的 stop 无法取消 pending loop_wakeup，自节奏 /loop 在显式停止后自行恢复**
 影响将 /loop 用作自主管理器的自动化场景，是后台自动化路线的关键缺陷。

7. **[#15327](https://github.com/QwenLM/qwen-code/issues/15327) [P1] 统一 Agent Loop 跟踪 issue：所有 surface 运行在同一 agent loop（experimental.unifiedAgentLoop）**
 核心架构级 roadmap 项，ready-for-human，是理解项目技术方向的重要风向标。

8. **[#15875](https://github.com/QwenLM/qwen-code/issues/15875) [P2] SDK stream-json 中 text snapshot 在 thinking 后变更 message id 且无新 message_start**
 由核心贡献者 @TennyZhuang 提出，违反流式协议约定，影响 SDK 消费方的消息拼装。

9. **[#14215](https://github.com/QwenLM/qwen-code/issues/14215) [P2] 自托管模型的 Context 不可变性（context immutability）**
 面向 prompt 处理速度慢的本地部署场景的缓存优化需求，need-discussion 中，反映自托管用户群体的增长。

10. **[#15877](https://github.com/QwenLM/qwen-code/issues/15877) [P2] Web Shell 远程 daemon 连接的 listener 与 origin 配置不明确**
 文档/认证体验问题，阻碍 Web Shell 跨机器使用场景的落地。

---

## 🔧 重要 PR 进展

1. **[#15871](https://github.com/QwenLM/qwen-code/pull/15871) refactor(managed-agent): 服务端拆分为 Maven 模块**
 将 Managed Agent Server 拆为 6 个生产模块 + 1 个验证模块，以框架中立契约定义边界，是 Managed Agent 的重大架构重构。

2. **[#15879](https://github.com/QwenLM/qwen-code/pull/15879) feat(managed-agent): 新增 E2B Cloud 运行时 provider**
 为 Managed Agent 增加云端沙箱执行选项，扩展部署形态。

3. **[#13969](https://github.com/QwenLM/qwen-code/pull/13969) feat(hooks): 本地会话 FileChanged 通知**
 为非托管本地会话增加文件变更钩子，支持字面文件名与递归目录监听，弥补 hooks 能力在本地场景的缺口。

4. **[#15854](https://github.com/QwenLM/qwen-code/pull/15854) perf(release): 跨 release 复用已验证的原生音频预构建**
 指纹匹配时跳过 5 目标原生构建矩阵，显著缩短发布时间——配合 #15461 的 ECS runner 优化，发布管线提速是持续主题。

5. **[#15466](https://github.com/QwenLM/qwen-code/pull/15466) feat(serve): 用户级 Skill 激活路由**
 新增 `PUT /skills/:name/activation` 及批量接口，Skill 管理向 daemon API 化推进（配套跟进项见 #15622）。

6. **[#11854](https://github.com/QwenLM/qwen-code/pull/11854) feat: 混合代码模式（hybrid code mode）**
 Codex 对齐的 `tools.mode` 枚举（`direct` / `code_mode` / `code_mode_only`），保留普通工具同时暴露隔离的 `exec` JavaScript 工具，长跑 PR 有新活动。

7. **[#15634](https://github.com/QwenLM/qwen-code/pull/15634) feat(channels): inject 模式将消息注入运行中的 turn**
 新的第四种 dispatchMode，消息可在工具批次边界被运行中的 agent 读取，而非缓冲至 turn 结束，提升多渠道交互实时性。

8. **[#15851](https://github.com/QwenLM/qwen-code/pull/15851) fix(cli): 发送前拒绝时报告而非重放上一轮答案**
 修复 stream-json 会话在 token 限流或 hook 阻断时错误回放历史 assistant 消息的严重输出正确性问题。

9. **[#15899](https://github.com/QwenLM/qwen-code/pull/15899) / [#15882](https://github.com/QwenLM/qwen-code/pull/15882) test(managed): 故障测试归因与 JDBC fixture 修复**
 前者记录 post-crash `/load` 的来源 caller，后者让 fixture 使用与生产一致的 Managed JDBC 编码——两者都直接服务于诊断 #15898/#14724 的 CI 不稳定问题。

10. **[#11486](https://github.com/QwenLM/qwen-code/pull/11486) feat(cli): 精确版本更新 `qwen update --target-version`**
 跳过 npm 版本发现直接安装指定版本，对离线/镜像环境（`QWEN_UPDATE_BASE_URL`）用户非常实用。

---

## 📈 功能需求趋势

- **CI/CD 与工程效率**：今日最密集的方向。macOS CI 分区（#15888/#15783）、ECS runner 预留（#15461）、发布构建拆分、预构建复用（#15854）——团队正系统性投入发布与验证管线。
- **Managed Agent / 多 Agent（A2A）**：架构模块化、E2B 运行时、外部 workspace 物化（#15684）、A2A 会话治理（#13649）持续推进，是企业级托管方向的主线。
- **Web Shell / Desktop 体验**：会话管理（#11878）、快捷键（#13175）、远程 daemon 连接（#15877）、i18n（#13391）等 UX 打磨需求活跃。
- **核心架构统一**：unifiedAgentLoop（#15327）与自托管模型 context 缓存（#14215）代表性能与架构收敛的长期诉求。
- **自动化与后台任务**：/loop 停止语义（#15894）、消息注入（#15634）、FileChanged hooks（#13969）服务于无人值守自动化场景。
- **SDK 协议正确性**：stream-json 语义（#15875、#15851）受到核心开发者重视。

---

## ⚠️ 开发者关注点

1. **CI 红灯正在拖慢所有人**：Managed Agent gate（#15898）和 Web Shell smoke（#15861）两个 P1 级 main 分支故障意味着每个 PR 都在做无效归因，是当前贡献体验的最大痛点。
2. **配置静默丢弃**：`contextWindowSize` 被移除（#15855）暴露了配置校验“静默失败”的模式，v0.26.4 的 #15794 修复方向正确，建议用户升级验证。
3. **本地/自托管用户体验**：Ollama 等本地模型用户的上下文窗口管理、prompt 处理性能（#14215）是高频反馈，社区对低配硬件场景的容忍度有限。
4. **文档与可发现性**：远程连接配置（#15877）、Web Shell i18n（#13391）表明功能落地后的文档/本地化滞后于开发速度。
5. **安全审计欠账**：CVE 审计失败持续一个月未解（#13078），建议优先排查是否为真实高危漏洞。

---
*数据来源：GitHub QwenLM/qwen-code 公开数据 | 由 AI 技术分析师生成*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-10-30

> 数据来源：github.com/Hmbown/DeepSeek-TUI（上游仓库 codewhale-hq/Codewhale）

## 今日速览

今天最紧急的事件是 **main 分支编译失败（#7148）**——`PersistRequest::ClearCheckpoint` 成为死代码后触发 workspace lint 错误，导致**所有外部 PR 的必需检查全部失败**，社区贡献通道实质上被阻断，需维护者优先处理。与此同时，#7147 针对 `/undo` 失败问题提交了深入诊断修复，社区贡献 PR 持续活跃（vim 模式、markdown 渲染、LSP 修复等多点开花）。过去 24 小时无新版本发布。

---

## 版本发布

过去 24 小时无新 Release。v0.10.3 仍在推进中，多个 issue 报告修复已合入 main 但尚未发版（如 #7071 本地化、#7115 Ollama doctor 修复）。

---

## 社区热点 Issues

1. **#7148 [P0 紧急] main 编译失败，阻塞所有 PR 合并** — [链接](https://github.com/codewhale-hq/Codewhale/issues/7148)
   `PersistRequest::ClearCheckpoint` 变体从未被构造，违反 workspace 自身 lint 策略，每个 PR 的必需检查都因此失败。外部贡献者已无法合并代码，属于社区基础设施级故障。

2. **#7147（对应 PR）/ #7095 会话历史丢失问题持续发酵** — [链接](https://github.com/codewhale-hq/Codewhale/issues/7095)
   热度最高的 bug（11 条评论）。reset-save checkpoint 保留逻辑已在 `c4a4f42e9c` 落地，但 `/undo` "无法识别保存边界 / 历史超出字节传输上限”的根因诊断出**两个独立缺陷**（历史 fork 按存储形态而非携带内容），修复见 PR #7147。

3. **#7133 自动上下文压缩异常 + 引擎接管中断** — [链接](https://github.com/codewhale-hq/Codewhale/issues/7133)
   第六次候选接管测试在测试前被主动中断，2,759-input 的清点结果已冻结归档。该 issue 反映出 0.10.3 压缩路径仍有未收敛的可靠性问题。

4. **#7091 v0.10.3 验收项：卸载必须完整可验证** — [链接](https://github.com/codewhale-hq/Codewhale/issues/7091)
   创始人要求的 0.10.3 必过项：无论通过何种方式安装（npm/NSIS 等），都必须能可靠移除。当前已有卸载文档和 Windows NSIS 卸载器，剩余工作是跨渠道验证。

5. **#7071 所有非英语 locale 的 TUI 字符串硬编码英文** — [链接](https://github.com/codewhale-hq/Codewhale/issues/7071)
   本地化切片已于 `896e781fbb` 落地（15 个 locale 目录覆盖 activity/tool status/receipts）。结合长期未解的中文输入法适配问题 #2323（[链接](https://github.com/codewhale-hq/Codewhale/issues/2323)），国际化是中文用户群的持续痛点。

6. **#6969 延迟工具箱驱逐在 prompt caching 下经济性为负** — [链接](https://github.com/codewhale-hq/Codewhale/issues/6969)
   高质量技术分析：8 名称/16 KiB 的 `ToolActivationCache` 驱逐策略对成本视而不见——全前缀 re-prefill + 写入溢价使其净负收益。成本敏感用户的重要议题。

7. **#6992 ACP 回归：sandbox_mode/ask 配置被忽略** — [链接](https://github.com/codewhale-hq/Codewhale/issues/6992)
   0.10.1 起 Paseo ACP 会话强制沙箱化且被审批门控，与用户配置相悖。修复已在 `135319aa1a` 合入 main，等待发版。

8. **#6991 显著降低 token 消耗的新方案（fastctx）** — [链接](https://github.com/codewhale-hq/Codewhale/issues/6991)
   社区建议引入 fastctx 大幅降低上下文开销，与 #6969 共同指向“上下文成本优化”这一需求主线。

9. **#7142 实时消息窗口会话中途 re-root，早期对话不可达** — [链接](https://github.com/codewhale-hq/Codewhale/issues/7142)
   无接缝摘要、无生命周期事件，用户会“丢失”早期轮次。自动压缩绕过的具体缺陷已在 `7b54e7f57` 修复（禁用压缩时拒绝 summary/replacement 并保留原消息）。

10. **#7124 vLLM effort 值必须遵循本地模型模板** — [链接](https://github.com/codewhale-hq/Codewhale/issues/7124)
    在 loopback vLLM `Qwen3.8-27B-NVFP4` 路由上，Low effort 被规范化为 High——本地/自托管模型兼容性问题的典型代表。

其他值得注意：#6866（MCP boot 服务器失败/恢复时向模型发信号，已实现并关闭）、#7066（skills 捆绑安装精细化控制 `[skills.bundled]`，已实现）、#7073（skills 索引 400 字符描述上限，已可配置并关闭）、#7136（"update available" 提示从未渲染——写入却从未读取，已关闭）。

---

## 重要 PR 进展

1. **#7147 fix(tui): 按历史内容而非存储形态 fork 会话** — [链接](https://github.com/codewhale-hq/Codewhale/pull/7147)
   修复 `/undo`/retry 失败的两个独立根因，附完整用户报告复现分析。今日最有分量的修复。

2. **#7143 fix(tui): 移除附件或 vim 删除时脱离召回历史** — [链接](https://github.com/codewhale-hq/Codewhale/pull/7143)
   修复 Up 召回历史后 vim 模式删除操作不触发“脱离”的边缘案例，避免编辑被静默丢弃。

3. **#7146 fix(tui): 保留列表内嵌段落的缩进** — [链接](https://github.com/codewhale-hq/Codewhale/pull/7146)
   修复 word wrapper 丢弃行首空格导致列表二级段落顶格渲染——模型输出中极常见的排版场景。

4. **#7140 fix(lsp): TSX 文档以 `typescriptreact` 语言 ID 打开** — [链接](https://github.com/codewhale-hq/Codewhale/pull/7140)
   保持 TS server 复用的同时，修正 `didOpen` 语言标识，提升 TSX 项目的 LSP 准确性。

5. **#7139 fix(workflow-js): 生成 Windows GNU LLVM 绑定** — [链接](https://github.com/codewhale-hq/Codewhale/pull/7139)
   修复 `x86_64-pc-windows-gnullvm` 目标缺少捆绑 rquickjs-sys 绑定导致的构建失败。

6. **#7138 feat(tui): 观察后台引擎运行完成** — [链接](https://github.com/codewhale-hq/Codewhale/pull/7138)
   为嵌入方和 exec 消费者提供可取消的后台运行完成观察器，发布正常/异常终止信号——面向生态嵌入的基础能力。

7. **#7137 fix(tui): 流式 reasoning delta 路由到思考卡片** — [链接](https://github.com/codewhale-hq/Codewhale/pull/7137)
   修复思维链内容溢出卡片边界、被拆成“半句在卡内半句在卡外”的问题（关闭 #7123）。

8. **#7127 fix(tui): 保留远程控制启动失败诊断**（已合并）— [链接](https://github.com/codewhale-hq/Codewhale/pull/7127)
   `/rc` 失败原因不再随 12 秒 toast 消失，同步失败保留在 `Failed` 状态（关闭 #7120）。

9. **#7126 / #7130 vim Normal 模式按键修复系列**（已合并）— [#7126](https://github.com/codewhale-hq/Codewhale/pull/7126) | [#7130](https://github.com/codewhale-hq/Codewhale/pull/7130)
   修复不受信终端（Windows/tmux/VS Code 等）上 Normal 键被直接键入草稿、以及 `G` 等带 Shift 键不生效的问题。vim 体验持续打磨。

10. **#7121 / #7141 本地化补齐**（已合并）— [#7121](https://github.com/codewhale-hq/Codewhale/pull/7121) | [#7141](https://github.com/codewhale-hq/Codewhale/pull/7141)
    `/undo` 反馈消息接入 15 locale 翻译目录；README review-bot 行同步 18 个翻译版本。配合 #7071 系统性推进去硬编码英文。

---

## 功能需求趋势

- **上下文与成本优化**（最活跃主线）：#6969（驱逐经济学）、#6991（fastctx 低开销上下文）、#7133（自动压缩可靠性）、#7142（re-root 丢历史）——社区对 token 成本和上下文管理的敏感度极高。
- **国际化/本地化**：#7071、#2323、#7121、#7141 显示中文等非英语用户体验仍是系统性短板，正在批量补齐。
- **Provider 生态扩展**：#7085（Runcrate 内置 provider，描述符已落地）、#7124（vLLM effort 规范化）、#7115/#7116（Ollama 无密钥采用与模型目录）。
- **Skills 可控性**：#7066、#7073 相继实现——捆绑安装、按技能禁用、索引上限可配置已成体系。
- **工程质量与清理**：#5587（dead-code 清扫持续推进）、#5092/#5093（Responses API 行为从硬编码改为 provider profile）。
- **打包与平台覆盖**：#1097（FreeBSD）、#7091（可验证卸载）、#7139（Windows GNU LLVM）。

---

## 开发者关注点

1. **贡献通道阻断**：#7148 的 main 编译失败使所有 PR 必需检查挂掉——外部贡献者在修复前无法合并任何代码，这是当前最高优先级。
2. **可靠性信任缺口**：会话历史丢失（#7095/#7147）、`/undo` 回滚不一致（#6970）、任务追踪不同步（#7118）等数据完整性问题反复出现，用户对“聊了很久的会话突然丢历史”的容忍度极低。
3. **本地/自托管模型体验**：vLLM effort 规范化错误、Ollama 默认模型解析到 embedding 模型、exec/doctor 强制要求 DeepSeek key——BYO-model 用户群摩擦点密集。
4. **vim 与终端兼容性**：多个 PR 聚焦不受信终端的按键处理（#7126/#7130/#7143），Windows 终端和 tmux/VS Code 用户受益明显。
5. **错误信息的可追溯性**：失败原因随 toast 消失（#7120）、更新提示从不渲染（#7136）——静默失败类问题虽小但直接损害排障效率。
6. **ACP/IDE 集成回归**：#6992 的 sandbox 配置被忽略提醒：集成场景的回归测试覆盖仍需加强。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-10-30

## 📰 今日速览

今日无新版本发布，但社区修复活动极为活跃：昨日一天内合入/关闭了大量修复 PR，覆盖 Windows 兼容性、TUI 渲染、安全权限和多家 Provider 适配等关键领域。性能方面，针对大转录本每帧全量重渲染的 #9549 迎来了虚拟化改造方案 PR #11598。Windows 体验调查帖 #7547（91 条评论）仍是社区讨论最热的话题。

---

## 🔥 社区热点 Issues

1. **[#7547](https://github.com/earendil-works/pi/issues/7547) Windows 使用方式调查（91 评论）**
   官方发起的调研帖，收集 Windows 用户的运行方式与痛点，直接决定后续 Windows 支持（原生 / WSL / Terminal）的投入方向。持续发酵近三个月。

2. **[#9549](https://github.com/earendil-works/pi/issues/9549) 全屏模式大转录本每帧全量重渲染，单核打满**
   核心性能问题：滚动/输入/状态指示均为 O(transcript) 开销，resize 时重发整个转录本。今日已有对应虚拟化 PR（#11598）落地。

3. **[#11157](https://github.com/earendil-works/pi/issues/11157) [p0] session_start 时 sendMessage 的扩展导致会话被判定为 legacy transcript**
   pi-memory、pi-session-search 等主流扩展触发此问题，导致 Anthropic 请求丢失 system 字段。标记 p0，修复进行中。

4. **[#10497](https://github.com/earendil-works/pi/issues/10497) OpenRouter 400：超出最大上下文长度**
   扩展注入文件内容时偶发请求 token 超限，暴露了请求前 token 预算检查的缺口。修复进行中。

5. **[#9656](https://github.com/earendil-works/pi/issues/9656) Windows + Zellij 下滚轮滚动 prompt 历史而非对话（👍5）**
   多路复用器场景下鼠标事件路由错误，是 Windows 生态链路问题的典型代表。

6. **[#10024](https://github.com/earendil-works/pi/issues/10024) 运行中变更工具集导致 system prompt 头部移动、对话重新计费**
   影响成本敏感用户：工具列表每轮从实时集合重新渲染，破坏 prompt cache 前缀稳定性。

7. **[#11529](https://github.com/earendil-works/pi/issues/11529) 工具顺序依赖注册顺序，可能打爆 prompt cache**
   MCP 重连、tool_search 动态加载都会重排工具，隐性增加用户成本。与 #10024 同属缓存稳定性主题。

8. **[#11527](https://github.com/earendil-works/pi/issues/11527) Bedrock 每次请求新建客户端**
   每次模型调用都触发 SSO 凭证往返 + 新建 HTTP/2 会话，AWS 用户延迟和配额双重受损。

9. **[#11570](https://github.com/earendil-works/pi/issues/11570) 长会话 V8 OOM 崩溃（5 份生产 crash 报告）**
   2+ 天、~8MB 会话文件因巨型 ConsString flatten/正则替换触发 FatalProcessOutOfMemory。

10. **[#8706](https://github.com/earendil-works/pi/issues/8706) GLM 强制思考模型在 thinking off 时泄漏推理内容**
    zai 适配层无条件发送 `thinking` 字段，reasoning 混入最终输出，影响输出质量与 token 消耗。

---

## 🔧 重要 PR 进展

1. **[#11598](https://github.com/earendil-works/pi/pull/11598) perf(tui): 转录本虚拟化 + 全屏布局惰性 resize**
   将渲染开销从 O(transcript) 降到 O(viewport)，直接解决 #9549 的单核饱和问题。

2. **[#11587](https://github.com/earendil-works/pi/pull/11587) 会话目录 0700 / 文件 0600 权限**
   修复会话内容可被本地其他用户读取的隐私问题（#10770），安全向重要修复。

3. **[#11588](https://github.com/earendil-works/pi/pull/11588) Windows 路径大小写不敏感比较**
   修复 `c:\` 与 `C:\` 混用导致的技能名误报冲突（#10488），Windows 体验专项。

4. **[#11586](https://github.com/earendil-works/pi/pull/11586) / [#11585](https://github.com/earendil-works/pi/pull/11585) Apple Terminal Shift+Enter 发送 ESC+CR 的适配**
   修复 macOS Terminal.app 中 Shift+Enter 误触发送/排队的问题（#11559）。

5. **[#11589](https://github.com/earendil-works/pi/pull/11589) 尊重已保存的项目“不信任”决定**
   修复 trust 决策被自动信任逻辑覆盖的问题（#10947），安全语义修复。

6. **[#11590](https://github.com/earendil-works/pi/pull/11590) / [#11571](https://github.com/earendil-works/pi/pull/11571) npm 扩展更新修复**
   修复 `pi -e npm:<pkg>` 永久停留在首次下载版本的问题（#11375），以及 registry 缓存不一致导致的假更新。

7. **[#11580](https://github.com/earendil-works/pi/pull/11580) TUI 阿拉伯语 RTL 双向文本渲染**
   在不支持 UAX #9 的 Windows Terminal 中实现逻辑序→视觉序转换，国际化里程碑。

8. **[#11572](https://github.com/earendil-works/pi/pull/11572) 智谱 usage 上限错误（code 1308）不再重试**
   避免对数小时后才重置的配额错误做无意义重试。

9. **[#11565](https://github.com/earendil-works/pi/pull/11565) 常规模式停止输出 OSC 133 标记**
   修复 Rex / iTerm2 中 working 状态指示消失的问题（#11519）。

10. **[#11591](https://github.com/earendil-works/pi/pull/11591) 修复样式词换行边界多余空格**
    token 化器将 ANSI 关闭码附着到空格导致的渲染瑕疵（#10925），细节体验打磨。

其他值得注意：**[#6881](https://github.com/earendil-works/pi/pull/6881)**（采用 Provider 返回的实际计费成本）持续推进中。

---

## 📈 功能需求趋势

- **Windows 一等公民支持**：#7547 调研、路径大小写、Zellij 鼠标等多条问题汇聚，Windows 已成为明确的投入主线。
- **性能与内存**：转录本虚拟化、长会话 OOM、Bedrock 客户端复用，反映用户在长时间/大会话场景下的强烈诉求。
- **Prompt cache 稳定性 / 成本控制**：#10024、#11529、#11517 等多个 issue 聚焦“前缀漂移导致重复计费”，是成本敏感用户的核心关切。
- **多 Provider 兼容性**：OpenRouter、Zhipu/GLM、Alibaba、Bedrock、LiteLLM 的适配问题密集，OpenAI 兼容层的“去 OpenAI 特化”（#9508）呼声明确。
- **扩展生态健壮性**：`-e npm:` 更新机制、扩展触发 legacy transcript 等问题说明扩展 API 的边界行为需要更明确的契约。

---

## ⚠️ 开发者关注点

1. **扩展开发者注意**：在 `session_start` 钩子中 `sendMessage` 的扩展（如 pi-memory）当前会破坏 Anthropic system 字段，升级前请自查（#11157，p0）。
2. **成本异常排查**：若发现 OpenRouter 账单异常，检查工具动态注册/MCP 重连是否破坏缓存前缀（#11529），以及 Kimi K3.1 Pro 默认输出预算过大导致的 402（#11517）。
3. **长会话稳定性**：2 天以上的会话存在 OOM 风险，建议定期重启或压缩会话（#11570）。
4. **隐私默认值改善**：新版本将会话目录/文件默认收紧为 0700/0600，多用户机器上历史会话建议手动检查权限（#11587）。
5. **`pi -e npm:` 用户**：临时扩展此前不会自动更新，升级到包含 #11590 的版本后生效。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报（2026-10-30）

## 一、今日速览

oh-my-pi 发布 **v18.14.0**，包含一项重要 Breaking Change：移除 Bun 事件循环协作让步工具，agent 循环不再在流式传输或工具调用间插入协作性 sleep，可能影响依赖该行为的扩展开发者。社区方面，TUI 渲染问题（空图表、主题误检、中文 IME 错位）持续占据热点，多位贡献者（尤其 @sjawhar）集中提交了一批 session 生命周期与稳定性修复 PR，涉及会话恢复、磁盘写满、暂停界面等多个边角场景。

---

## 二、版本发布

### v18.14.0
**Breaking Changes**
- 移除 `@oh-my-pi/pi-agent-core/utils/yield` 中的 Bun 事件循环 workaround 工具，agent 循环不再在流式传输或工具调用间插入协作性 sleep。

**Added**
- 新增 `AgentTool.approvalRestrictionPaths`，允许工具声明审批限制路径。

> ⚠️ 迁移提示：若你的扩展或自定义 agent 循环直接调用了 `utils/yield`，需立即调整，否则将编译失败。

🔗 [Release v18.14.0](https://github.com/can1357/oh-my-pi/releases)

---

## 三、社区热点 Issues

1. **#15452 [OPEN] TUI 上次更新后出现多项异常行为**（评论 14，👍 3）
   长会话/恢复后偶发 "no tui"、`eval: ...` 类文本回显等怪异行为。已分类为 triaged + wontfix 倾向，但评论量最高，反映 TUI 状态恢复是长期痛点。
   🔗 [Issue #15452](https://github.com/can1357/oh-my-pi/issues/15452)

2. **#17339 [CLOSED] 请求增加中文思考功能**（评论 10）
   中文用户希望模型思考过程可用中文输出，引发 10 条讨论后关闭。结合今日 #17427 的中文 IME 问题，中文用户体验是活跃议题。
   🔗 [Issue #17339](https://github.com/can1357/oh-my-pi/issues/17339)

3. **#2888 [OPEN] RFC：MCP 服务器按需 lazy 连接 + idleTimeout**（评论 9）
   提议 MCP 服务器改为惰性启动而非会话启动时全量并行连接，可显著降低启动开销。注意：对应实现 **PR #9793 今日仍有更新**，RFC 落地值得期待。
   🔗 [Issue #2888](https://github.com/can1357/oh-my-pi/issues/2888)

4. **#17355 [CLOSED] Windows/Orca 下 TUI 图表空白、对话文本丢失**（评论 9）
   Windows 终端下间歇性内容不可见，影响基本可用性，已快速关闭（可能已修复或定位）。
   🔗 [Issue #17355](https://github.com/can1357/oh-my-pi/issues/17355)

5. **#12487 [OPEN] Google/Claude 订阅 OAuth 政策：第三方认证默认安全化**（评论 5，👍 5）
   Google 明确禁止第三方工具使用 Antigravity/Gemini CLI OAuth 访问后端。omp 面临合规压力，需将第三方认证改为默认安全。今日仍在活跃讨论，是订阅用户必读的合规风向标。
   🔗 [Issue #12487](https://github.com/can1357/oh-my-pi/issues/12487)

6. **#17375 [CLOSED] Mistral provider 丢弃流式 thinking 部分，开启配置后又 422**（评论 5）
   Mistral 网关托管模型（zai-glm-5-3、deepseek-v4-1-flash 等）的 reasoning 内容被静默丢弃；同日姊妹 issue **#17365**（`reasoning_content` 回放触发 422 extra_forbidden）也已关闭，Mistral 兼容性问题集中修复。
   🔗 [Issue #17375](https://github.com/can1357/oh-my-pi/issues/17375)

7. **#17363 [CLOSED] pi-native 响应静默超 5 分钟被切断**（评论 5）
   长思考模型（Codex gpt-6-astra xhigh）首事件前无任何字节、无 keepalive，触发服务端超时切断。对高 reasoning_effort 用户影响重大。
   🔗 [Issue #17363](https://github.com/can1357/oh-my-pi/issues/17363)

8. **#17329 [CLOSED] 上下文估算多算约 5.8 倍（Gemini + pruneToolDescriptions）**（评论 5）
   上下文估算未考虑工具描述剪枝，导致过早触发压缩，实际是对上下文窗口的严重浪费。
   🔗 [Issue #17329](https://github.com/can1357/oh-my-pi/issues/17329)

9. **#17427 [OPEN] 中文输入法组合文本在 Follow up 输入框中错位**（评论 3）
   macOS 上中文 IME 未提交文本出现在标签左侧而非光标处，今日新报，中文用户直接受影响。
   🔗 [Issue #17427](https://github.com/can1357/oh-my-pi/issues/17427)

10. **#17422 [OPEN] Claude 自动压缩过早触发（压缩基线计入不计费的 thinking 文本）**（评论 1）
    1M token 窗口、阈值 60%，但压缩在远低于阈值时启动——因为压缩基线把端点不收费的历史 thinking 文本也计入了。标 wontfix，但暴露了计费 token 与上下文 token 的口径分歧。
    🔗 [Issue #17422](https://github.com/can1357/oh-my-pi/issues/17422)

其他值得一看：#17410（Whisper 实时预览拖垮 STT worker，转写延迟 13–25s）、#12631（Python eval 内核多日会话内存无限增长）、#17340（Vibe MCP 刷新超过 Anthropic 512 工具定义上限）。

---

## 四、重要 PR 进展

1. **#9793 feat(mcp): lazy MCP 服务器首次调用时按需连接**（review:p3）
   `mcp.json` 中 `lazy: true` 的服务器启动时跳过 spawn，仅注册缓存工具定义，首次调用时才连接。与 Issue #2888 呼应，是启动性能的关键改进，今日仍在更新。
   🔗 [PR #9793](https://github.com/can1357/oh-my-pi/pull/9793)

2. **#17432 fix(ai): Anthropic message_stop 后排空 body 以保住连接**（review:p1，今日新增）
   message_stop 提前退出事件循环导致 socket 被 Bun 关闭而非归还 keep-alive 池，中继场景下连接泄漏。高质量修复。
   🔗 [PR #17432](https://github.com/can1357/oh-my-pi/pull/17432)

3. **#17400 fix(session): 显示被对话框阻塞的会话，reserve prompt 支持截止时间**（review:p1）
   @sjawhar 批量提交之一，修复 session 阻塞在对话框时无可见状态的问题。
   🔗 [PR #17400](https://github.com/can1357/oh-my-pi/pull/17400)

4. **#17421 fix(session): 被其他进程占用的会话以 fork 方式恢复**（review:p1）
   解决多进程并发使用 omp 时 resume 冲突，长会话 + tmux 用户痛点。
   🔗 [PR #17421](https://github.com/can1357/oh-my-pi/pull/17421)

5. **#17412 fix(shell): 在解释器无界循环中让出事件循环**（review:p1）
   修复 shell 工具中 `while true` 等不达 await 的构造阻塞事件循环——注意与今日 v18.14.0 移除 yield 工具的 Breaking Change 语境相关，属于事件循环治理的整体方向。
   🔗 [PR #17412](https://github.com/can1357/oh-my-pi/pull/17412)

6. **#17404 perf(tui): 无附加客户端的 tmux pane 停止动画**（review:p1）
   挂后台的 tmux 会话不再空转渲染，多 agent 并行场景下的显著性能优化。
   🔗 [PR #17404](https://github.com/can1357/oh-my-pi/pull/17404)

7. **#15391 feat(ai): 用 ChatGPT/Codex 订阅做语音转写**（review:p2）
   新增 `openai-codex/codex-transcribe`，走 ChatGPT 官方 dictation 端点，为订阅用户提供免 API key 的 STT。
   🔗 [PR #15391](https://github.com/can1357/oh-my-pi/pull/15391)

8. **#17394 fix(eval): 清理会话遗留的 Python runner 和 JS worker**（review:p2）
   直接回应 Issue #12631 的 eval 内核泄漏方向，会话结束后终止残留子进程。
   🔗 [PR #17394](https://github.com/can1357/oh-my-pi/pull/17394)

9. **#17401 fix(builtins): rsync builtin 输出的 locale 相关转义对齐**（review:p0）
   rsync 差异一致性测试 153 处红，被标记 review:p0，属于高优先级正确性修复。
   🔗 [PR #17401](https://github.com/can1357/oh-my-pi/pull/17401)

10. **#13874 feat(coding-agent): 从 /models 管理自定义 provider**（review:p2）
    TUI 内直接创建/配置自定义 provider（URL、端口、密钥），摆脱启动前设环境变量的方式。自定义 provider 用户期待已久的体验改进。
    🔗 [PR #13874](https://github.com/can1357/oh-my-pi/pull/13874)

---

## 五、功能需求趋势

- **MCP 生命周期与规模管理**：lazy 连接（#2888/#9793）、工具定义数量上限（#17340）、内置工具可发现性（#16874），社区在推动 MCP 从“全量预连”走向“按需 + 限额”。
- **自定义 provider 体验**：`/models` 内管理 provider（#13874）、Codex 格式模型目录发现（#17392）、models.yml thinking 覆盖（#17276）——多网关/多模型用户需求旺盛。
- **语音与 STT**：订阅制转写（#15391）、本地 Whisper 延迟与 VRAM 共享（#17410、#11040）、实时语音残留杂音（#17295），语音是持续投入方向。
- **长会话稳定性**：eval 内核内存泄漏（#12631）、会话 GC/归档（#17398）、磁盘满写入（#17431）、多进程会话冲突（#17421），多天长会话是核心场景。
- **中文/国际化**：中文思考（#17339）、中文 IME 错位（#17427），中文用户群活跃且反馈密集。

## 六、开发者关注点

- **Breaking Change 影响**：v18.14.0 移除 `utils/yield`，扩展开发者需检查依赖；同时 shell 事件循环修复（#17412）表明团队正系统性清理协作让步机制。
- **订阅 OAuth 合规风险**：Google 已明确封禁第三方工具使用产品级 OAuth（#12487），订阅用户和工具方都需关注后续默认策略调整。
- **流式超时与连接保活**：长思考模型（5 分钟以上无输出）被切断（#17363）、Anthropic keep-alive 断连（#17432）——高 reasoning_effort 工作流的主要故障源。
- **上下文/压缩估算口径**：工具描述多算 5.8x（#17329）、不计费 thinking 计入压缩基线（#17422），token 会计逻辑的不一致导致真实可用窗口缩水，是社区反复出现的抱怨。
- **TUI 成熟度**：Windows 渲染、主题自动检测、IME 等问题频繁上榜，跨平台终端渲染仍是最大体验短板。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

# DeepSeek Harness 社区动态日报
**日期：2026-10-30**

---

## 1. 今日速览

DeepSeek Harness 今日发布了 **dsh-v0.2.1-rc.5** 候选版本，主要针对对话中思考内容（thinking content）的展示效果进行了优化。过去 24 小时内社区无新增 Issue 和 PR 更新，整体节奏平稳，项目处于 v0.2.1 正式版的稳定打磨阶段。

---

## 2. 版本发布

### dsh-v0.2.1-rc.5

**体验优化**
- 优化对话中思考内容的展示效果，提升 AI 推理过程的可读性（贡献者：@LegGasai）

🔗 [Release 链接](https://github.com/deepseek-ai/deepseek-harness/releases)

本次更新聚焦于 UI/UX 细节，说明团队在 v0.2.1 正式发布前集中打磨推理链展示体验，对深度使用长思考模型的开发者尤为友好。

---

## 3. 社区热点 Issues

过去 24 小时内无 Issue 更新，本期暂无热点内容。

---

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新，本期暂无内容。

---

## 5. 功能需求趋势

由于本期无新增 Issue 数据，无法提炼新的需求趋势。从近期版本发布方向可观察到：

- **推理内容展示优化**是持续迭代重点，社区对 thinking 内容的呈现方式（折叠、高亮、分段）关注度较高
- **版本稳定性**：连续多个 rc 版本发布，表明 v0.2.1 正式版临近

---

## 6. 开发者关注点

- **展示层细节体验**：思考内容展示的多次优化反映开发者对长推理输出可读性的持续反馈
- 建议持续关注 v0.2.1 正式版发布节奏及后续 Changelog 中的完整变更列表

---

*数据来源：github.com/deepseek-ai/deepseek-harness | 本报由自动化分析生成*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*