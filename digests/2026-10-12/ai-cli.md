# AI CLI 工具社区动态日报 2026-10-12

> 生成时间: 2026-10-12 04:58 UTC | 覆盖工具: 11 个

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

# AI CLI 工具生态横向对比分析报告（2026-10-12）

---

## 1. 生态全景

AI CLI 工具已从“终端补全工具”全面演进为**多 Agent 编排运行时**，subagent/Managed Agent 成为主流项目的核心路线图（Qwen Code、Gemini CLI、OpenCode、oh-my-pi 均如此）。头部工具普遍进入“可用性深水区”——长会话上下文管理、compaction 成本控制、无人值守自动化成为共同攻坚点。与此同时，**质量风险信号集中出现**：数据丢失事故、安全过滤器误伤、版本回归问题在多个项目同步暴露，表明快速迭代与稳定性之间的张力已达临界点。开源社区驱动的工具（Gemini CLI、Qwen Code、OpenCode）在工程透明度上明显领先于闭源二进制发布的 Claude Code。

---

## 2. 各工具活跃度对比

| 工具 | Issues 活动（24h） | PR 活动（24h） | Release | 本日焦点 |
|---|---|---|---|---|
| **Claude Code** | ~10 条热点（多起 P0 级） | 1 条（docs only） | ❌ 无 | Rewind 数据丢失、安全过滤器误伤 |
| **OpenAI Codex** | 10 条热点 | 11 条合并 | ❌ 无 | Windows 问题集中爆发 |
| **Gemini CLI** | 50 条 | 19 条 | ✅ v0.65.0-nightly | 安全修复 5 连发、Subagent 可靠性 |
| **GitHub Copilot CLI** | 26 条 | 0 条 | ❌ 无 | 企业认证/MCP 兼容性阻断 |
| **OpenCode** | ~10 条热点（密集） | 10 条 | ❌ 无（v2.0.26 附近） | V2 迁移回归集中 |
| **Qwen Code** | 10 条热点 | 10 条 | ✅ v0.25.1（4 个制品） | Managed Agent 架构推进 |
| **DeepSeek TUI** | 10 条 | 10+ 条 | ❌ 无（v0.10.2 收尾中） | Windows 兼容、发布门禁 |
| **Pi** | ~10 条 | 6 条 | ❌ 无 | Compaction 可控性、静默失败 |
| **oh-my-pi** | 10 条 | 10 条 | ✅ 4 个版本 | Codex provider 兼容、内存治理 |
| **Kimi Code CLI** | 0 | 0 | ❌ | 静默 |
| **DeepSeek Harness** | 0 | 0 | ❌ | 静默 |

**关键观察**：Gemini CLI 在 Issue+PR 双维度活跃度最高（69 条）且唯一保持 nightly 节奏；oh-my-pi 一日 4 版是发布最激进的项目；Claude Code 社区声量最大但 PR 仅 1 条，符合其闭源发布模式。

---

## 3. 共同关注的功能方向

### 3.1 长会话上下文管理与 Compaction（几乎全员）
- **Gemini CLI**：AST 感知读取降 token（36.6k/turn 基线太高）、文件化任务跟踪
- **Pi / oh-my-pi**：compaction 独立 thinking 级别/模型（Pi #7553）、压缩溢出（#9602）
- **Claude Code**：空闲自动 compact 避免 cache 过期成本（#66115）
- **Copilot CLI**：图片逐出破坏 prompt-cache 前缀（#5111）、常驻上下文用量显示（#1953，最高互动）
- **Qwen Code**：工具结果全链路计量（PR #13652）、compaction 上限问题

### 3.2 Subagent / 多 Agent 编排可靠性
- **Gemini CLI**：假 success 上报（#22323，p1）、无限挂起（#21409）、主动调用率低
- **Codex**：Dots 委托任务停滞（#49883）、长任务过早收敛（#49735）
- **Qwen Code**：孤儿子 Session（#13875）、Session 所有权与 writer fencing（Stage G）
- **oh-my-pi**：subagent fallback 耗尽挂起（#15423）
- **Claude Code**：Cowork 功能引发的资源失控（#22543，231👍）

### 3.3 Windows 平台支持质量
- **Codex**（最严重）：沙箱 ACL、CUA 启动失败、EPERM 占热点半数
- **Copilot CLI**：git spawn 权限（#5094）、长路径、winget 升级冲突
- **DeepSeek TUI**：Win10 1607 启动失败、只读命令误拦
- **OpenCode**：Windows ARM64 打包错误

### 3.4 无人值守 / 自动化场景
- **Claude Code**：Remote Control 自动续期失效、Task Scheduler allowlist 失效
- **Pi**：headless 模式注入 prompt 丢失（p0）、截断无续跑路径
- **Copilot CLI**：限额后无法恢复会话（#5114）

### 3.5 安全与信任边界
- **Claude Code**：分类器对无人机遥测、问候语误判 + 静默降级
- **Gemini CLI**：路径逃逸/信任提升等 5 个安全 PR 同日修复
- **Codex**："Always allow" 记忆失效、不透明拦截
- **DeepSeek TUI**：权限审查误伤只读命令

---

## 4. 差异化定位分析

| 维度 | 分层 |
|---|---|
| **企业级闭源方案** | Claude Code、OpenAI Codex、Copilot CLI：模型厂商绑定，功能最全（Computer Use、云端协作），但闭源二进制、修复响应依赖官方，社区只能“报告-等待” |
| **开源工程透明** | Gemini CLI、Qwen Code：公开路线图（AST EPIC、Managed Agent 双路径），Issue 有 p1/p2 分级和修复追踪，社区 PR 参与度高 |
| **社区驱动/中立运行时** | OpenCode、Pi、oh-my-pi：多 provider 中立定位，靠 provider 兼容性和 SDK/扩展生态取胜；oh-my-pi 迭代最激进（一日 4 版，但含 Breaking Change） |
| **垂直专注** | DeepSeek TUI（后台任务可观测性、Windows 老系统兼容）、Kimi Code CLI / DeepSeek Harness（当前静默，生态投入有限） |

技术路线分歧点：**Codex/Qwen 走沙箱+原生工具链路线**，Gemini CLI 社区在探索 OS 级沙箱；**oh-my-pi/Qwen 走开放式 SDK/ACP 路线**（第三方 UI 可接入），与 Claude Code 的封闭生态形成对照。

---

## 5. 社区热度与成熟度

- **第一梯队（高活跃+高声量）**：Claude Code（单 issue 231👍，用户基数最大但负面情绪集中：8 个月未修的 #22543、数据丢失 #101188）；Gemini CLI（工程节奏最健康：日更 nightly + 安全债务集中清偿）
- **快速迭代期**：oh-my-pi（一日 4 版，Breaking 频繁，适合尝鲜不适合生产）、Qwen Code（v0.25.1 稳定推进但 CI 主干测试失败未消）、OpenCode（V2 迁移阵痛明显，支付链路问题拖累信任）、DeepSeek TUI（v0.10.2 收尾，发布门禁体系化建设中）
- **响应质量标杆**：Pi 两个中文相关 issue（#10812、#10816）当日报告当日关闭；DeepSeek TUI 从 bug 修复提炼出 CI 防护提案——小社区的闭环速度值得大厂学习
- **滞涨/观望**：Kimi Code CLI、DeepSeek Harness 无活动

---

## 6. 值得关注的趋势信号

1. **“假成功”与静默失败成为信任危机新形态**：Gemini subagent 上报假 success、Pi 静默丢弃图片附件、Claude Rewind 假装恢复却毁数据、Pi 模型静默回退。**对开发者的启示**：在 CI/agent 流水线中，对工具的状态上报不要盲信，关键文件操作前保留独立 git 快照。

2. **CJK/中文支持成为被系统性忽视的公平性问题**：Pi tokenizer 直接丢弃中文字符、oh-my-pi 提取门槛对 CJK 不友好、Qwen 中文队友名被清空。中文团队选型时需实测中文检索和提示处理链路。

3. **内存与资源治理是长会话时代的硬约束**：LSP server 膨胀至 8GB（oh-my-pi）、10GB VM 包（Claude Code）、孤儿 MCP 进程累积（OpenCode）。多会话/长时间运行场景需主动设资源上限。

4. **无人值守自动化是下一个竞争高地**：各工具的 headless 模式、限额续跑、后台任务可观测性问题集中出现，说明“agent 运行时”定位正在取代“CLI 助手”——评估工具时应优先考察其非交互模式的失败恢复能力。

5. **开放标准加速渗透**：`.agents/skills/` 标准目录（Claude Code #16345）、ACP 协议、MCP 生态扩张（>128 工具触发 400）共同指向**跨 agent 互操作**。锁定单一厂商封闭生态的风险在上升，多 provider 中立运行时（OpenCode、Pi）和兼容层价值将持续增长。

6. **安全过滤器与合法开发场景的冲突亟待透明化**：Claude Code 的分类器误伤（无人机、嵌入式、USB 排障）+ 无 request ID 的静默降级，提示受监管行业团队需评估 fallback 模型的不可预期性。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据说明：本批 PR 数据的评论数字段缺失，故「热门度」以 PR 活跃度（更新频率、存活时长、关联 Issue 讨论热度）综合推断；Issues 讨论热度有明确评论数。数据截止 2026-10-12。

---

## 一、热门 Skills 排行（按综合关注度）

| # | Skill / PR | 功能 | 社区讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | **mcp-builder 修复**（@Kuldeeep18）— [PR #1742](https://github.com/anthropics/skills/pull/1742) | 适配 mcp>=2.0 的 `streamable_http_client` 重命名与自定义 header | 关联 [#1668]；mcp-builder 本身是争议焦点：eval 脚本对真实 MCP server 全部返回 0 分（[#1390](https://github.com/anthropics/skills/issues/1390)，4 评论） | OPEN |
| 2 | **skill-creator 评估加固**（@Joncik91）— [PR #1961](https://github.com/anthropics/skills/pull/1961) | 修复 eval viewer 的脚本逃逸、DNS rebinding、跨站 POST | skill-creator 是 bug 密集区：XSS（[#1394](https://github.com/anthropics/skills/issues/1394)）、Windows 触发评估失败（[#1383](https://github.com/anthropics/skills/issues/1383)）、并行 worker 误判（[#1352](https://github.com/anthropics/skills/issues/1352)） | OPEN，10 月仍活跃更新 |
| 3 | **skill-creator 触发评估隔离**（@MartinCajiao）— [PR #1298](https://github.com/anthropics/skills/pull/1298) | 隔离 per-worker 命令探测、修复 Windows `select()` 失败 | 直接回应 #1352/#1383 系列问题；最痛的 bug 是 `claude -p` 触发率恒为 0（[#556](https://github.com/anthropics/skills/issues/556)，12 评论） | OPEN，跨越 6–9 月长期迭代 |
| 4 | **proofcore-contract-auditor**（@ProofCore-Protocol）— [PR #1771](https://github.com/anthropics/skills/pull/1771) | Solidity/Rust 合约静态分析 + TON 链上审计存证 | Web3 + 带商业推广性质，与社区对「夹带营销的 Skill」的警惕相关（见 #492 信任边界讨论） | OPEN |
| 5 | **md2video-audio**（@70v-Yoyo）— [PR #1703](https://github.com/anthropics/skills/pull/1703) | Markdown → Marp 幻灯 → 带配音的 MP4 视频 | 零成本内容生产方向，属社区持续欢迎的「文档→多媒体」类需求 | OPEN |
| 6 | **docx 孤立批注检测**（@rohitjain25）— [PR #1734](https://github.com/anthropics/skills/pull/1734)；**docx 超时报错修复**（@TINGyu123644）— [PR #1792](https://github.com/anthropics/skills/pull/1792) | 检测 Word 孤立批注；LibreOffice 超时不再误报成功 | document skills 是官方核心技能，#1792 要求验证 `w:ins/w:del` 修订标记才判定成功，反映社区对「静默失败」的强烈不满 | OPEN |
| 7 | **document-typography**（@PGTBoos）— [PR #514](https://github.com/anthropics/skills/pull/514) | AI 生成文档的排版质控（孤行、寡行、编号错位） | 提出痛点普遍但用户很少主动要求，属「隐性需求」典型 | OPEN，长期挂起（3 月起） |
| 8 | **AWT AI E2E 测试**（@ksgisang）— [PR #822](https://github.com/anthropics/skills/pull/822) | 视觉 + 浏览器控制的零代码 E2E 测试 | 对应社区测试自动化需求；同期 webapp-testing 也有多个安全/正确性修复（[#1980](https://github.com/anthropics/skills/pull/1980)、[#1976](https://github.com/anthropics/skills/pull/1976)） | OPEN |

---

## 二、社区需求趋势（源自 Issues）

1. **信任与安全治理**（最高热度）：#492（44 评论）指出社区 Skill 冒用 `anthropic/` 命名空间构成信任边界滥用——社区最强烈的诉求是**官方命名空间隔离 / Skill 签名与来源验证**。相关：#1175（Skill 内嵌权限逻辑的安全顾虑）。
2. **企业级分发能力**：#228（16 评论）要求组织内 Skill 共享库，替代目前 Slack 手传 `.skill` 文件的方式。
3. **Skill 工程化工具链可靠性**：skill-creator 的评估体系是重灾区（#556、#1352、#1383、#1394）——社区需要可信的触发率评估、跨平台（Windows）支持与安全本地查看器。
4. **上下文经济性**：#1487 报告 `claude-api` skill 一次性注入 ~156k token 耗尽上下文；#189 报告插件重复安装导致技能重复——**渐进式/按需加载**是明确需求。
5. **新 Skill 方向提案**：compact-memory 紧凑记忆符号系统（[#1329](https://github.com/anthropics/skills/issues/1329)，9 评论）、agent-governance 治理模式（#412）、推理质量门禁流水线（#1385）——集中在 **Agent 自身状态管理与输出质量控制** 这类"元能力"。

---

## 三、高潜力待合并 Skills（活跃 OPEN PR）

- **PR #1961** skill-creator eval viewer 安全加固 — 直接封堵已被 Issue 确认的 XSS/逃逸漏洞，10-11 日仍在更新，合并紧迫性高。
- **PR #1742** mcp-builder mcp>=2 兼容 — 修复真实 API 破坏性变更，且关联 #1390 的评估失灵问题，属刚需修复。
- **PR #1792** docx 超时错误处理 — 小而明确，验证逻辑完善，典型易合并 patch。
- **PR #1298** skill-creator 触发评估隔离 — 挂起近 4 个月但持续回应多份 Issue，是修复 #1352/#1383 的最完整方案。
- **PR #1681**（@Kuldeeep18）package_skill.py 可直接执行 — 修复 ModuleNotFoundError，作者同期贡献 #1742，是活跃贡献者。
- **PR #1976 / #1977**（@gerardrecinto）webapp-testing 与 algorithmic-art 小修复 — 均 Fixes 已确认 Issue，属于快速通道候选。

---

## 四、生态洞察（一句话总结）

> **社区最集中的诉求已从"造新 Skill"转向"治理与可信"**：命名空间/来源信任（#492）、组织级分发（#228）、评估工具链可靠性（skill-creator 系列）与上下文经济性（#1487）四大议题的热度显著超过任何单一新 Skill 提案——Skills 生态正从数量扩张期进入质量与信任建设期。

---

# Claude Code 社区动态日报（2026-10-12）

## 1. 今日速览

今日无新版本发布，但社区焦点集中在几起严重问题上报：Cowork 功能生成 10GB VM 包导致 Desktop 性能严重退化（#22543，231 👍，持续 8 个月未修复），以及一起 Rewind 功能误覆盖约 20 小时代码的**数据丢失事故**（#101188）。同时 2.1.296 版本被曝多个回归 Bug，包括 Windows 多行粘贴即提交（#101424）和后台守护进程环境变量跨项目泄漏（#100981）。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#22543](https://github.com/anthropics/claude-code/issues/22543)** Cowork 功能产生 10GB VM 包，严重拖慢 Claude Desktop（79 评论 / 231 👍）。高优先级标签 + oncall 标签挂了 8 个月仍未解决，是当前社区不满情绪最集中的问题。

2. **[#101188](https://github.com/anthropics/claude-code/issues/101188)** Rewind 提示“无法恢复”却仍然覆写了约 20 小时的项目修改并删除了后续新建文件，且对话未被回滚——罕见的数据丢失级 Bug，带复现步骤，值得所有依赖 Rewind 功能的用户警惕。

3. **[#101424](https://github.com/anthropics/claude-code/issues/101424)** 2.1.296 回归：Windows 下多行粘贴在每个换行处直接提交，2.1.289 无此问题。影响日常工作流的基础交互回归。

4. **[#87640](https://github.com/anthropics/claude-code/issues/87640)** Fable 5 安全分类器 `[reasoning_extraction]` 对单词问候 "Hi" 误判拦截（32 评论）。安全过滤误伤日常用例的又一案例。

5. **[#101410](https://github.com/anthropics/claude-code/issues/101410) / [#101409](https://github.com/anthropics/claude-code/issues/101409) / [#101406](https://github.com/anthropics/claude-code/issues/101406)** 同一开发者在一天内密集上报 3 起 cyber 安全过滤误报（无人机遥测解析、移动端调试构建），全部导致 **session-halted**，均标注 Opus 5.5 → 4.8 的静默降级路径，反映安全过滤器对合法硬件/嵌入式开发工作的误伤模式。

6. **[#98134](https://github.com/anthropics/claude-code/issues/98134)** macOS 上有效的 Max 20x 订阅被识别为 Pro，订阅等级识别错误直接影响可用额度。

7. **[#100650](https://github.com/anthropics/claude-code/issues/100650)** 连接 Remote Control 时“达到限额自动继续”功能失效，自动化的无人值守工作流会被打断。

8. **[#101425](https://github.com/anthropics/claude-code/issues/101425)** 关闭实验性 beta 时细粒度工具流式输出无法开启——配置项之间存在隐式依赖，带复现。

9. **[#101127](https://github.com/anthropics/claude-code/issues/101127)** Bash 工具对 stdin 重定向的判断扫描了引号内的内容，导致带空格+`<word` 的命令跳过 `< /dev/null`，可能引起子进程挂起。

10. **[#100981](https://github.com/anthropics/claude-code/issues/100981)** 2.1.296 后台守护进程的预热 worker 会跨客户端继承首个调用方的环境变量，多项目/多 profile 场景下存在环境串扰风险。

## 4. 重要 PR 进展

过去 24 小时仅 1 条 PR 更新：

- **[#79150](https://github.com/anthropics/claude-code/pull/79150)** docs: 对齐 code-review README 与当前基于验证的命令实现。修正了 README 中描述已废弃流水线（git blame agent、置信度评分）的内容。社区 PR 活跃度低，符合 Anthropic 以闭源方式发布二进制的惯例。

## 5. 功能需求趋势

- **成本优化**：空闲时自动 compact 以避免 prompt cache 过期产生的额外成本（#66115）；智能模型路由避免 Max 订阅 token 被 93.8% 固定路由到 Opus（#27665，整合了 30+ 重复 issue）。
- **开放标准兼容**：支持 Agent Skills 标准目录 `.agents/skills/`（#16345，58 👍），实现跨 agent 工具的技能共享。
- **Web/Desktop UI 补齐**：Web UI 缺少 claude.md 和 output style 等基础功能（#88176）；Desktop 侧边栏按文件夹分组时也应有活跃度过滤（#98565）；Agents 视图支持直接新建会话（#101421）。
- **终端体验**：复制终端输出不应包含按显示宽度硬换行（#48037）。

## 6. 开发者关注点

1. **安全过滤器误报频发**：`reasoning_extraction`、cyber 分类器对问候语、无人机遥测、USB 安全密钥排障等合法场景频繁误伤并静默降级模型，且无透明反馈渠道，是近期最高频的抱怨。
2. **数据安全信任危机**：Rewind 误操作导致数据丢失（#101188）动摇了开发者对文件操作安全性的信任。
3. **2.1.296 版本质量**：多行粘贴回归、环境变量串扰等问题集中出现，建议企业用户暂缓自动更新。
4. **账单与订阅识别**：订阅等级误判（#98134）与自动充值争议（#83062、#96339）持续发酵，用户反馈 AI 客服无法升级到人工处理。
5. **无头/自动化场景脆弱**：Task Scheduler 下的 allowlist 失效（#99795）、Remote Control 打断自动续期（#100650），表明无人值守自动化路径仍缺乏充分测试。

---
*数据来源：github.com/anthropics/claude-code · 统计窗口：2026-10-12 前后 24 小时*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-10-12

## 1. 今日速览

今日无新版本发布，但社区活跃度较高：Windows 平台问题集中爆发，涉及 OAuth 登录失败、工作空间初始化 403/432 错误、沙箱权限异常及 MXC launcher 启动失败等多条高热度 Issue。同时，copyberry[bot] 在 10-11 密集合入了 11 个已关闭的 PR，集中打磨 TUI 体验（剪贴板粘贴、子代理导航、Vim 模式恢复）和 app-server 稳定性，显示 CLI/TUI 侧迭代节奏稳定。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#52407](https://github.com/openai/codex/issues/52407) Windows Dots: CUA MXC launcher 报 HRESULT 0x80070003**（58 评论）
   最热 Issue，Windows Computer Use 启动器在 shell 恢复后失败，与 #53188 等同源问题相互印证，是 Windows CUA 功能的核心阻断点。

2. **[#15777](https://github.com/openai/codex/issues/15777) 沙箱安装破坏 AppData ACL**（30 评论）
   3 月至今未关闭的老问题，Windows 沙箱修改目录 ACL 影响其他应用，长期悬而未决引发社区持续不满。

3. **[#29797](https://github.com/openai/codex/issues/29797) Windows helper_unknown_error：git log / 读取项目文件失败**（24 评论，👍 9）
   Windows 桌面端反复出现的 setup refresh 错误，点赞数高，影响基本工作流。

4. **[#52919](https://github.com/openai/codex/issues/52919) 10 月 10 日起流式连接间歇断开**（7 评论）
   时间敏感的回归问题，疑似与 10-10 更新相关，波及 Desktop + VS Code。

5. **[#53261](https://github.com/openai/codex/issues/53261) OAuth 登录失败 + 工作空间路由超时（26.1007.2314.0）**
   今日新建，与 #52996（HTTP 432 路由失败）、#52437（settings 403 cloudflare_challenge）、#53035（Lockdown Mode 错误）共同指向近期服务端/网络链路问题，可能为同一根因。

6. **[#52593](https://github.com/openai/codex/issues/52593) 沙箱内 realpath 返回 EPERM**（7 评论）
   可写工作区内原生 realpath 失败，属于沙箱策略过严的典型问题。

7. **[#52503](https://github.com/openai/codex/issues/52503) Web Dots: "Always allow" 后仍反复弹审批**（11 评论）
   GitHub create_blob 权限记忆失效 + 审批卡片丢失 + 长任务上传结果丢失，影响授权工作流信任度。

8. **[#49883](https://github.com/openai/codex/issues/49883) macOS Dots 委托任务在完成后停滞**（9 评论）
   子任务完成后不自动推进，需人工反复提醒，是 Dots/subagent 调度的代表性问题。

9. **[#51659](https://github.com/openai/codex/issues/51659) 浏览器/CUA 初始化失败跨越约 10 个版本未修复**
   "Timed out waiting for Statsig values" 长期存在，反映 Windows browser 工具链的顽疾。

10. **[#49735](https://github.com/openai/codex/issues/49735) Token 预算提醒导致长任务过早收敛**
    模型行为层面的深度反馈，请求进行 runtime/training ablation，对 agent 长任务可靠性有参考价值。

## 4. 重要 PR 进展（均为 10-11 关闭）

1. **[#53224](https://github.com/openai/codex/pull/53224)** Windows TUI 支持 Ctrl+V / Shift+Insert 文本粘贴，修复纯文本剪贴板误报图片粘贴错误。
2. **[#53150](https://github.com/openai/codex/pull/53150)** 冷恢复时还原线程自有权限，避免被配置默认值覆盖——直接关系权限记忆问题。
3. **[#53173](https://github.com/openai/codex/pull/53173)** TUI 内可重启托管后台服务器，配置修复后无需退出。
4. **[#53049](https://github.com/openai/codex/pull/53049)** app-server 请求引入连接绑定 reply handle，修复跨连接 ID 复用问题。
5. **[#53155](https://github.com/openai/codex/pull/53155)** 关闭期间保持远程 app-server 事件可送达，防止 WebSocket 提前断开。
6. **[#53148](https://github.com/openai/codex/pull/53148)** 修复 Vim Replace 按键缓冲导致的启动草稿恢复错误。
7. **[#53201](https://github.com/openai/codex/pull/53201)** 线程归档后仍可进入 agents 导航视图。
8. **[#53153](https://github.com/openai/codex/pull/53153)** 帮助面板新增 Alt+←/→ 子代理导航快捷键说明。
9. **[#53152](https://github.com/openai/codex/pull/53152)** turn tips 支持鼠标选中和复制。
10. **[#53109](https://github.com/openai/codex/pull/53109)** `codex plugin list` 管道输出时优雅处理 broken pipe，不再 panic。

## 5. 功能需求趋势

- **Windows 平台稳定性**（最突出）：沙箱、ACL、EPERM、连接性占热点 Issue 半数以上。
- **Subagent/Dots 编排**：任务停滞、结果延迟回收（#40932）、完成触发父级唤醒（#46120）等调度改进诉求集中。
- **权限与审批体验**：权限记忆失效、审批卡片丢失、不透明安全拦截（#52095）。
- **会话/项目管理**：会话排序（#48910）、Work/Codex 模式标识（#33079）、上下文压缩后的任务状态。
- **终端/IDE 集成细节**：macOS Option-as-Meta（#39206）、VS Code 扩展 onboarding 重复（#25146）。

## 6. 开发者关注点

- **Windows 是当前最大痛点**：沙箱策略、CUA/MXC 启动、网络认证问题叠加，且多条长期未修复，社区耐心在消耗。
- **10-10 前后疑似回归**：多个 Issue 报告连接断开、403/432 路由失败，建议关注是否与服务端变更相关。
- **Agent 可靠性**：长任务过早收敛、子代理结果丢失、委托任务停滞，是 Pro 级用户的核心关切。
- **权限模型信任**："Always allow" 不生效、不透明安全拦截无 request ID，削弱自动化流程的可预期性。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-12）

## 一、今日速览

今日发布 v0.65.0-nightly.20261012 版本，配套版本自动升级 PR #29714 已提交。Issue 区焦点集中在 **Subagent 可靠性与状态上报准确性**（p1 级问题 #22323、#21409 均有活跃讨论），PR 方面**安全类修复密集落地**——5 个安全相关 PR（外部 checker 环境隔离、glob 路径逃逸、checkpoint 路径穿越等）在同日关闭，显示团队正在集中清偿安全债务。

---

## 二、版本发布

**v0.65.0-nightly.20261012.g9b6e0265d** 已发布
- [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.65.0-nightly.20261010.g9b6e0265d...v0.65.0-nightly.20261012.g9b6e0265d)
- 对应版本号 PR：[google-gemini/gemini-cli PR #29714](https://github.com/google-gemini/gemini-cli/pull/29714)

---

## 三、社区热点 Issues

1. **#22323 [p1] Subagent 触发 MAX_TURNS 后仍上报 "success"，掩盖了中断事实**（评论 13）
   [链接](https://github.com/google-gemini/gemini-cli/issues/22323)
   状态上报失真会直接误导主 Agent 的后续决策，是可信度问题而非单纯 bug。今日活跃讨论，已被标记 need-retesting，修复可能临近。

2. **#21409 [p1] Generalist agent 无限挂起**（评论 8，👍 8）
   [链接](https://github.com/google-gemini/gemini-cli/issues/21409)
   社区反应最强烈（8 个 👍）：简单的文件夹创建操作也会挂起一小时以上，用户只能靠提示词禁用 subagent 绕过，直接影响可用性。

3. **#19873 [p2] 利用模型 bash 能力：零依赖 OS 沙箱 + 执行后意图路由**（评论 9）
   [链接](https://github.com/google-gemini/gemini-cli/issues/19873)
   架构级提案：让 Gemini 3 原生的 POSIX 工具链能力在安全沙箱内充分发挥，是性能与安全权衡的重要方向探索。

4. **#22745 [p2] 评估 AST 感知的文件读取/搜索/代码库映射**（评论 7）
   [链接](https://github.com/google-gemini/gemini-cli/issues/22745)
   EPIC 级调研：AST 工具可精确读取方法边界、降低 token 噪音、减少错位读取，配套子任务 #22746、#22747 同步推进中。

5. **#21968 [p2] Gemini 很少主动使用 skills 和 sub-agents**（评论 7）
   [链接](https://github.com/google-gemini/gemini-cli/issues/21968)
   用户痛点典型：显式指令才调用，相关任务却不用。影响 skills 生态的实际价值。

6. **#22267 [p2] Browser Agent 忽略 settings.json 配置覆盖（如 maxTurns）**（评论 4）
   [链接](https://github.com/google-gemini/gemini-cli/issues/22267)
   AgentRegistry 读取合并了配置但 Agent 执行时未生效——配置链路断裂问题。

7. **#21983 [p1] browser subagent 在 Wayland 下失败**（评论 4）
   [链接](https://github.com/google-gemini/gemini-cli/issues/21983)
   Linux 桌面用户（Wayland）被排除在浏览器自动化之外，p1 优先级。

8. **#24246 [p2] 工具数超过 128 个时触发 400 错误**（评论 3）
   [链接](https://github.com/google-gemini/gemini-cli/issues/24246)
   MCP 工具生态扩张后的必然碰撞：需要 Agent 智能裁剪工具作用域。

9. **#22186 [p1] get-shit-done output hook 导致崩溃**（评论 3）
   [链接](https://github.com/google-gemini/gemini-cli/issues/22186)
   打印用户摘要时稳定复现崩溃，属稳定性硬伤。

10. **#22672 [p2] Agent 应阻止/劝阻破坏性行为**（评论 3）
    [链接](https://github.com/google-gemini/gemini-cli/issues/22672)
    `git reset`、`--force` 等危险命令缺少防护，涉及安全与信任的核心议题。

---

## 四、重要 PR 进展

**安全修复（今日集中关闭）**

1. **#29523 [已关闭] 外部安全 checker 最小化环境变量 + 输出上限**
   [链接](https://github.com/google-gemini/gemini-cli/pull/29523)
   修复 checker 进程泄露 `GEMINI_API_KEY` 等全部环境变量、且 stdout 无上限累积的两处漏洞。

2. **#29522 [已关闭] glob 工具匹配结果限制在校验目录内**
   [链接](https://github.com/google-gemini/gemini-cli/pull/29522)
   glob 12 中绝对路径模式会绕过 `cwd` 校验，`/etc/*.conf` 模式可逃逸沙箱。

3. **#29521 [已关闭] legacy checkpoint 路径穿越防护**（p1）
   [链接](https://github.com/google-gemini/gemini-cli/pull/29521)
   `checkpoint-${tag}.json` 使用原始 tag 拼接路径，`x/../../secret` 可读任意文件。

4. **#29525 [已关闭] a2a-server 不再从请求 agentSettings 推导工作区信任**
   [链接](https://github.com/google-gemini/gemini-cli/pull/29525)
   堵住外部调用方可自行声明 `isTrusted` 的信任提升漏洞。

5. **#29527 [已关闭] 请求内容不得以 model turn 结尾**（p1）
   [链接](https://github.com/google-gemini/gemini-cli/pull/29527)
   修复 `/rewind` 或流中断后触发 400 错误（`Requests ending with a model turn are not supported`）。

**功能与修复（进行中）**

6. **#29611 Gemini 3 点分版本/别名模型的多模态 function response 支持**
   [链接](https://github.com/google-gemini/gemini-cli/pull/29611)
   解决 `gemini-3.8-flash` 等模型读取图片时产生非法 sibling parts 触发 400 的问题。

7. **#29621 保留 subagent 多模态工具响应中的图像数据**
   [链接](https://github.com/google-gemini/gemini-cli/pull/29621)
   此前 subagent 回传的图像数据被静默丢弃，与 #29611 构成同一问题域的互补修复。

8. **#29629 限制流式纯文本渲染高度，消除闪烁**（p2）
   [链接](https://github.com/google-gemini/gemini-cli/pull/29629)
   响应超过终端高度时不再全屏清屏重绘，直击 TUI 体验痛点（关联 #21924）。

9. **#29664 npm 依赖批量升级（74 个包）**（p1, size/xl）
   [链接](https://github.com/google-gemini/gemini-cli/pull/29664)
   含 MCP SDK 1.23.0→1.32.0 等关键升级，体量大，值得关注合并风险。

10. **#29709 修复 vscode-ide-companion 中逗号表达式导致 dispose 泄露**
    [链接](https://github.com/google-gemini/gemini-cli/pull/29709)
    经典 JS 陷阱：多余括号使 `context.subscriptions.push` 只注册了最后一个返回值。

---

## 五、功能需求趋势

1. **Subagent 体系成熟化**（最热方向）：状态上报准确性（#22323）、挂起恢复（#21409）、主动调用率（#21968）、轨迹可视化（#22598）、并行协作与共享内存（#18287）、symlink 识别（#20079）——社区期望 subagent 从“能用”走向“可靠”。
2. **Token 效率与精准读取**：AST 感知工具 EPIC（#22745/#22746/#22747）、"Tactful Extraction" 手术式读取（#19561）、文件化持久任务跟踪替代 WriteToDo（#18836/#21000），共同指向降低上下文膨胀（当前基线约 36.6k tokens/turn）。
3. **浏览器 Agent 加固**：配置覆盖失效（#22267）、Wayland 支持（#21983）、锁恢复与会话接管（#22232）。
4. **安全与防呆机制**：破坏性命令防护（#22672）、OS 级沙箱（#19873）。
5. **工具规模治理**：>128 工具的 400 错误（#24246），提示 MCP 生态扩张带来的上下文管理需求。

---

## 六、开发者关注点

- **Subagent 可信度是当前最大痛点**：挂起、假成功、上下文缺失（#21763 bugreport 不含 subagent 信息）叠加，用户对委派子代理的信心受损，多人以“禁用 subagent”作为临时方案。
- **流式渲染稳定性**：终端闪烁、resize 卡顿（#21924、PR #29629）长期被提及，Ink 迁移 RenderStatic 是已知解法但进展缓慢。
- **配置一致性**：settings.json 的覆盖在多个组件（Browser Agent 等）未生效，配置链路需要系统性审查。
- **交互式命令挂死**：如创建 vite 应用卡在交互提示（#22465），模型缺乏处理交互式 CLI 的策略。
- **Windows 支持质量**：编辑器子进程引号注入（PR #29510）等 Windows 特有问题仍需持续投入。

---
*数据来源：google-gemini/gemini-cli | 统计窗口：过去 24 小时（Issues 50 条、PR 19 条）*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-12 | 数据来源：github.com/github/copilot-cli**

---

## 1. 今日速览

今日无新版本发布，但社区活跃度较高：过去 24 小时内有 26 条 Issue 更新，其中包含多个新报的阻断性 bug——Atlassian Rovo MCP 连接器认证失败（#5118）、MCP OAuth RFC 8414 兼容性问题（#5082）以及企业托管策略刷新失败导致 CLI 不可用（#5109）。同时多项历史 bug（终端渲染乱码 #3755、bell 失效 #3573、会话恢复失败 #4889 等）已被集中关闭，显示团队正在进行批量修复收尾工作。

---

## 2. 版本发布

过去 24 小时无新 Release。（当前社区讨论中提及的最新版本约为 1.0.95 / 桌面端 1.1.27+）

---

## 3. 社区热点 Issues

1. **#5118 Atlassian Rovo MCP 连接器认证探测返回 HTTP 400**
   🔴 新报 · 阻断性。内置 Atlassian Rovo 连接器授权探测失败，导致所有 Jira/Confluence 工具调用返回 401，直接阻断了进行中的 agent 会话。企业用户影响面大，建议优先关注。
   [Issue #5118](https://github.com/github/copilot-cli/issues/5118)

2. **#5109 企业用户：托管策略刷新失败，CLI 完全不可用**
   🔴 Enterprise 场景下 "Managed account policy could not be refreshed" 循环重试，信任目录后无法进入交互。企业部署的硬阻断问题。
   [Issue #5109](https://github.com/github/copilot-cli/issues/5109)

3. **#5094 桌面端 1.1.27+ Windows：内置 git 无法启动（0x80070005）**
   🔴 Windows 上桌面应用无法 spawn 自带的 git 二进制（Access is denied），导致所有项目注册失败。版本回归，影响升级用户。
   [Issue #5094](https://github.com/github/copilot-cli/issues/5094)

4. **#5082 MCP OAuth：Dataverse 被 RFC 8414 issuer 校验拒绝**
   🔴 `login.windows.net` 与 `login.microsoftonline.com` 的 issuer 不匹配导致拒绝连接，Microsoft 生态 MCP 服务器接入受阻，即使配置静态 `oauthClientId` 也无法绕过。
   [Issue #5082](https://github.com/github/copilot-cli/issues/5082)

5. **#5116 工具输出后续传时偶发 400 internal server error**
   🟠 Responses API 使用 `previous_response_id` 续传时间歇性失败，会中断健康的多步骤会话，且不可恢复。稳定性类问题，与 #5081 网络证书问题类似值得关注。
   [Issue #5116](https://github.com/github/copilot-cli/issues/5116)

6. **#5114 触达会话限额后无法继续**
   🟠 用户等待 5 小时后输入 "continue" 仍受早期 429 cap 限制，无法从断点恢复，影响长任务工作流。
   [Issue #5114](https://github.com/github/copilot-cli/issues/5114)

7. **#5111 图片上限忽略模型能力声明，且逐出时破坏 prompt-cache 前缀**
   🟠 技术含量较高的报告：50 张图片的硬编码上限忽略了 `modelCapabilities.limits.vision.max_prompt_images`，且原地替换旧图导致 prompt 缓存前缀反复重写，性能损耗明显。
   [Issue #5111](https://github.com/github/copilot-cli/issues/5111)

8. **#5117 GitHub Mobile 远程会话无法附加文件/图片**
   🟡 远程 CLI 会话在移动端没有附件入口，而后端能力已存在——跨端体验一致性诉求，移动办公场景痛点。
   [Issue #5117](https://github.com/github/copilot-cli/issues/5117)

9. **#1953 常驻显示上下文窗口使用状态（👍 11）**
   🟢 本期互动最高的 feature request。上下文接近耗尽会降低模型表现，但 UI 无任何提示。呼声高、实现成本相对低，值得官方考虑。
   [Issue #1953](https://github.com/github/copilot-cli/issues/1953)

10. **#4126 / #5110 右键复制行为异常（复制即粘贴 / 无法复制输出）**
    🟡 同一交互主题的两条报告：右键复制会同时把内容粘贴进输入框（#4126），以及在 MobaX 环境下无法复制 assistant 输出（#5110）。终端选择/剪贴板交互是近期高频反馈区。
    [Issue #4126](https://github.com/github/copilot-cli/issues/4126) | [Issue #5110](https://github.com/github/copilot-cli/issues/5110)

**其他值得留意：** ACP 模式下 `/rename` 假成功（#5115）、Computer Use 插件在 ACP 会话不可用（#5049）、Home/End 键在 ask_user 输入框同时滚动时间线（#5113）、MCP 协议版本混用与 refresh token 轮换复用（#5079）、Windows 长路径 256 字符限制导致非交互 `view` 失败（#5095）、winget 安装被 `/upgrade` 破坏（#5096）。

**已关闭（修复收尾信号）：** 流式思考文本重叠乱码 #3755、bell 失效 #3573、孤儿权限事件重放 #4469、子代理模型继承失效 #4287、会话恢复 "no session matched" #4889、extensions_reload 后 hook 快照失效 #3167。

---

## 4. 重要 PR 进展

过去 24 小时无 PR 更新。本期 Issue 关闭动态（尤其是 #3755、#4469、#4889 等长尾 bug 的集中关闭）暗示相关修复已合入，可关注下一个 Release 的 changelog。

---

## 5. 功能需求趋势

- **上下文可视化与长会话管理**：常驻上下文用量显示（#1953）、限额后恢复会话（#5114）、prompt-cache 友好的图片逐出策略（#5111）——长任务/长会话场景是核心诉求。
- **MCP 生态兼容性**：OAuth issuer 校验过于严格（#5082）、协议版本混用（#5079）、内置连接器认证失败（#5118）——MCP 已成为问题最密集的领域。
- **ACP / 编辑器与远程集成**：`/rename` 失效（#5115）、Computer Use 插件不可用（#5049）、移动端附件（#5117）——ACP 与移动远程会话的打磨需求上升。
- **终端集成深度**：OSC 7501 状态协议支持（#5112）、剪贴板/选择交互（#4126、#5110）、按键冲突（#5113）。
- **Windows 平台稳定性**：git spawn 权限（#5094）、长路径（#5095）、winget 升级路径（#5096）。

---

## 6. 开发者关注点

1. **认证与网络是一级痛点**：企业托管策略（#5109）、代理证书 `UnknownIssuer`（#5081）、MCP OAuth 严格校验（#5082）多条并发，企业/受控网络环境用户受影响最重。
2. **会话稳定性**：偶发 400（#5116）、限额恢复失败（#5114）、会话恢复匹配失败（#4889）表明多步骤 agent 会话的续传链路仍脆弱。
3. **配置语义需文档化**：`.copilotignore` 嵌套语义不清（#3785）、子代理模型继承行为不直观（#4287），用户期待更明确的配置规范文档。
4. **升级路径管理**：winget 与内置 updater 冲突（#5096）、桌面端 1.1.27 回归（#5094）提示 Windows 升级链路需要更完善的回归测试。

---
*本报告基于 2026-10-12 抓取的 GitHub 公开数据自动汇总。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-12

## 📌 今日速览

今日无新版本发布，但社区活跃度保持高位：V2 迁移相关的回归问题集中爆发（会话迁移丢失、API key 认证失效、`no such column: project_id` 报错），Go 订阅与支付问题持续发酵。PR 方面贡献者密集修复 V2 桌面端与核心稳定性问题，Windows ARM64 构建、extended thinking 重放修复等值得关注。

---

## 🐛 社区热点 Issues

**1. Go 订阅无法使用，提示 API 无效** [#54657](https://github.com/anomalyco/opencode/issues/54657)
用户连接 API 后即使使用免费模型也报 "api invalide"，8 条评论反映 Go 订阅认证链路可能存在问题，与多条同期订阅类 Issue 形成呼应。

**2. ACP 启动报错：no such column: project_id** [#54665](https://github.com/anomalyco/opencode/issues/54665)
V2 数据库 schema 缺列导致 server 直接退出，疑似迁移脚本不完整，可能影响批量升级用户。

**3. 孤儿 MCP 进程持续累积** [#50363](https://github.com/anomalyco/opencode/issues/50363)
npx 启动的本地 MCP server 在会话结束后不被终止，进程 reparent 到 PID 1 长期存活，数天累积后耗尽系统资源，属资源泄漏类严重问题。

**4. 空输入 tool call 导致会话永久挂起** [#54683](https://github.com/anomalyco/opencode/issues/54683)
模型偶尔输出空 input 的 tool call（如空命令的 shell），provider 竟然执行且永不返回，会话卡死在 "running" 状态。

**5. 图片/文件负载不计入上下文，长会话死于 generic 400** [#54690](https://github.com/anomalyco/opencode/issues/54690)
约 4MB base64 图片未被纳入 token 估算，触发 compaction 失败，最终以无法排查的 `invalid_request_error` 崩溃。

**6. auth login/logout 后发送空 API key** [#54645](https://github.com/anomalyco/opencode/issues/54645)
V2 共享后台服务的 well-known 端点 API key 接线陈旧，登出后仍解析旧凭据。已有对应修复 PR #54687 提交。

**7. V1→V2 迁移后旧会话从列表中消失** [#54679](https://github.com/anomalyco/opencode/issues/54679)
V1 `global` 项目的会话因 V2 默认 `cwd` 作用域过滤而不可见，直接影响升级用户的核心数据可见性。

**8. Web v2 终端快捷键失效** [#54559](https://github.com/anomalyco/opencode/issues/54559)
`ctrl+`` 快捷键无法切换终端，但命令面板可用，已标记 reproduced，属键位绑定回归。

**9. Go 订阅支付被拒（10 月起，两张卡均失败）** [#54333](https://github.com/anomalyco/opencode/issues/54333)
9 月前扣款正常，10 月起所有支付被拒，叠加 Link 支付方式选择失效（#54429）和 Console 无 API key（#54671），支付/订阅链路问题集中。

**10. 所有历史 workspace 突然不可用** [#54673](https://github.com/anomalyco/opencode/issues/54673)
账户下全部 workspace 失效且新建被限制在 5 个，疑似服务端数据/配额异常。

---

## 🔧 重要 PR 进展

**1. 修复 Anthropic extended thinking 会话重放失败** [#54693](https://github.com/anomalyco/opencode/pull/54693)
回放错误的 assistant 轮次时保留 thinking 块，解决多轮 thinking+tool use 中断后 400 报错，影响面广。

**2. 修复登出后发送空 API key** [#54687](https://github.com/anomalyco/opencode/pull/54687)
对应 Issue #54645，登出后丢弃 well-known 端点而非接线空 key。

**3. 恢复 v1 openai-compatible 未知模型选项透传** [#54694](https://github.com/anomalyco/opencode/pull/54694)
修复 V2 迁移后 LiteLLM 用户依赖的 `allowed_openai_params` 等参数被丢弃的问题。

**4. payload-too-large 会话自动恢复** [#53108](https://github.com/anomalyco/opencode/pull/53108)
在 compaction 恢复路径中处理负载超限，与 Issue #54690 的场景直接相关。

**5. 桌面端可调字号与行高** [#54499](https://github.com/anomalyco/opencode/pull/54499)
一次关闭 3 个历史 Issue（#26269/#16145/#10423）的长期需求，从 v1 移植至 V2。

**6. Windows ARM64 桌面构建修复** [#54689](https://github.com/anomalyco/opencode/pull/54689)
修复 CI 与打包两处将 x64 原生二进制打包进 ARM64 构建的问题。

**7. 会话模型选择在 catalog 刷新后保持稳定** [#54481](https://github.com/anomalyco/opencode/pull/54481)
防止目录临时缺失时静默将 Alpha 会话切到 Beta 模型。

**8. TUI 侧边栏显示 git 工作区状态** [#54677](https://github.com/anomalyco/opencode/pull/54677)
从 v1 移植的功能增强，方便在 TUI 内直读工作区状态。

**9. 桌面端视频全屏修复** [#54696](https://github.com/anomalyco/opencode/pull/54696)
Electron 权限白名单缺少全屏权限导致原生全屏按钮失效。

**10. 发布脚本修复：排除 V1 历史** [#54674](https://github.com/anomalyco/opencode/pull/54674)（已合并）
v2.0.26 发布审查范围误含约 1,380 条 V1 提交，此 PR 修正分支切分，配套 #54688 支持 fork/Windows 发布。

---

## 📈 功能需求趋势

- **V2 迁移质量**：会话可见性（#54679）、数据库 schema（#54665）、配置迁移兼容（#54694）是当前最高频的问题簇，社区对升级路径的稳定性诉求强烈。
- **会话/上下文管理**：长会话自动 compaction、prompt/thread 保存与书签（#24017）、多仓库快照与 `/undo`（#34398）持续获得关注。
- **订阅与支付体验**：Go 订阅认证、支付失败、Console API key 缺失集中爆发，已成为运营侧最紧迫的槽点。
- **桌面端体验**：渲染器卡顿（#54441）、tab 关闭按钮布局（#54438）、字号调节（#54499）表明桌面端打磨进入深水区。
- **离线/受限环境支持**：内置 ripgrep（#31734，👍5）、离线安装诉求代表企业内网场景用户群体。

## ⚠️ 开发者关注点

1. **会话挂起类 bug 是最高风险**：空 tool call 挂死（#54683）、MCP 孤儿进程（#50363）都会导致不可恢复的状态，缺乏超时与失败事件上报机制。
2. **自动化集成需要可观测信号**：#32633 要求对 provider 侧可重试失败暴露机器可读信号，CI/Agent 包装场景需求明确。
3. **SSH/远程场景支持不足**：Windows SSH 下剪贴板失效（#6111）长期未彻底解决，远程开发体验仍是短板。
4. **错误信息可诊断性差**：generic 400（#54690）、静默 `/undo` 失败（#34398）表明错误分类与上下文计量的透明度需提升。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-10-12）

## 📌 今日速览

v0.25.1 正式版今日发布，同步推出 Desktop v0.25.1、TypeScript SDK v0.1.19 及 nightly 构建，重点修复 Managed Agent 连接器健壮性与 serve 会话创建诊断问题。Managed Agent 双路径架构（#12380）持续主导社区讨论，Stage H 工作流子运行时、MQ2a 事件契约 Java 镜像等多项核心能力密集落地。

---

## 🚀 版本发布

**[v0.25.1](https://github.com/QwenLM/qwen-code/releases)** — 无已知破坏性变更，主要特性：Android Activity 重建后恢复选定文本连接与已验证的会话/工作区路由。

**[v0.25.1-nightly.20261011](https://github.com/QwenLM/qwen-code/releases)** — 包含 managed-agent connector/broker 健壮性修复（#13330）等。

**[Desktop v0.25.1](https://github.com/QwenLM/qwen-code/releases)** — 修复 serve 会话创建失败诊断保留（#12331）、新增 sdk-java managed runtime 支持。

**[SDK TypeScript v0.1.19](https://github.com/QwenLM/qwen-code/releases)** — 捆绑 CLI 0.25.1。

---

## 🔥 社区热点 Issues

1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380)** Managed Agent 双路径架构提案（56 评论）— 项目的核心路线图，定义 Session 持久所有权、Workspace 绑定与可恢复工具执行，讨论热度持续最高。
2. **[#13078](https://github.com/QwenLM/qwen-code/issues/13078)** 每日依赖 CVE 审计失败（18 评论）— 安全基线问题，可能与新的高危漏洞或 npm audit 端点有关，需尽快关注。
3. **[#12952](https://github.com/QwenLM/qwen-code/issues/12952)** Stage G：权威 Session 历史、writer fencing 与接管 — Managed Agent 演进的关键里程碑，@wenshao 主导。
4. **[#13680](https://github.com/QwenLM/qwen-code/issues/13680)** **P1**：Linux Desktop 捆绑的 ripgrep 二进制被链接后重写（RUNPATH $ORIGIN），启动探测必现 SIGSEGV — 今日最高优先级 bug，影响 Linux 用户开箱体验。
5. **[#13875](https://github.com/QwenLM/qwen-code/issues/13875)** 父 Session close 不停止子 Session 运行中的 Turn，cancel-then-close 会留下孤儿子进程 — 多 Agent 生命周期管理漏洞。
6. **[#13922](https://github.com/QwenLM/qwen-code/issues/13922)** sdk-java Flyway 迁移版本号低于 main 最新值仍通过校验，导致升级后数据库拒绝启动 — CI 防护缺口。
7. **[#13937](https://github.com/QwenLM/qwen-code/issues/13937)** Managed Agent in-turn "never-started" 证明门跳过未发布行的 dispatch — 后台 shell 任务安全性问题。
8. **[#13807](https://github.com/QwenLM/qwen-code/issues/13807)** macOS Foundation Models 作为 Fast Model 时报 500 "unsupported generation guide" — 本地模型集成痛点。
9. **[#13924](https://github.com/QwenLM/qwen-code/issues/13924)** 请求将 Desktop 发布到 Flathub 并提供可用更新通道 — Linux 分发渠道诉求，与 #13680 形成呼应。
10. **[#13942](https://github.com/QwenLM/qwen-code/issues/13942)** 多供应商同 ID 模型的切换问题（中文用户反馈）— 期望通过自定义 name 前缀区分不同供应商的同名模型。

---

## 🔀 重要 PR 进展

1. **[#13940](https://github.com/QwenLM/qwen-code/pull/13940)** EventTransport MQ2a：managed-event-envelope 契约的 Java 镜像 + fixture 消费者验证。
2. **[#13858](https://github.com/QwenLM/qwen-code/pull/13858)** Stage H4：Managed workflow 子运行时，Managed Session 可通过 Workflow 工具启动 workflow 子任务。
3. **[#13936](https://github.com/QwenLM/qwen-code/pull/13936)** Web Shell 新增 Managed 子 Agent 任务面板（360px 侧栏 / Dialog 响应式）。
4. **[#13899](https://github.com/QwenLM/qwen-code/pull/13899)** 私有 CSI 容器文件 worker + Java 本地进程隔离边界。
5. **[#13928](https://github.com/QwenLM/qwen-code/pull/13928)** H4e-b3b：成员看板工具通过 session_command 持久通道端到端读写，无需 leader 模型回合。
6. **[#13652](https://github.com/QwenLM/qwen-code/pull/13652)** 工具结果大小从生产者到注入的全链路计量（+2019 行，已触发 scope fuse，遗留建议转入 #13809）。
7. **[#11854](https://github.com/QwenLM/qwen-code/pull/11854)** 混合 code mode：对齐 Codex 的 `tools.mode` 枚举（direct / code_mode / code_mode_only）。
8. **[#9683](https://github.com/QwenLM/qwen-code/pull/9683)** 核心重构：集中化模型流式响应的 per-attempt 状态（文本/thoughts/工具调用/重试/截断）。
9. **[#13643](https://github.com/QwenLM/qwen-code/pull/13643)** Web Shell 侧栏工作区置顶功能（📌 徽章、按置顶时间排序、持久化），对应需求 #12444/#13888。
10. **[#13219](https://github.com/QwenLM/qwen-code/pull/13219)** Managed Agent 异步重试循环全部加上预算与终态，修复永久卡死的消息投影。

---

## 📈 功能需求趋势

- **Managed Agent / 多 Agent 架构**：绝对主线，#12380 及其 Stage G/H 系列占热门 Issue 大半，覆盖 Session 所有权、writer fencing、workflow 子运行时、团队看板等。
- **Web Shell 体验**：工作区置顶（#12444）、键盘快捷键（#13175）、auto-recap 开关失灵（#13911）、子 Agent 面板——UI 打磨需求密集。
- **Linux 桌面分发**：Flathub 上架（#13924）、P1 级 ripgrep 崩溃（#13680）、官网下载入口可见性（#13656）。
- **多供应商模型管理**：同名模型跨供应商切换（#13942）、本地模型文档（Rapid-MLX #13934）、macOS Foundation Models 兼容（#13807）。
- **CJK/国际化**：中文队友名在 Agent Teams 中被 sanitizeName 清空（#13920）、语音反馈本地化（PR #13938）。

---

## ⚠️ 开发者关注点

- **稳定性与生命周期**：孤儿子 Session（#13875）、重试循环无终态（PR #13219）、CI 主干测试失败持续未消（#12714）。
- **CI/发布工程**：CVE 审计失败（#13078）、Flyway 校验缺口（#13922）、Release notes 重复累积旧 PR（#13925）——发布流程自动化质量需关注。
- **Windows/编码兼容**：UTF-8 BOM 导致 MCP 配置解析失败的两个 Issue（#13595、#13710）已关闭，说明此类问题响应较快。
- **大型 PR 的评审债务**：多个 PR（#13652、#13737、#13601、#13878）因超 scope 上限将评审建议延迟为独立 Issue（#13809、#13869、#13926、#13935），形成可追踪的“遗留建议”流程，值得关注其消化速度。
- **上下文管理**：compaction 丢弃服务器上报的真实上下文上限（#13432，已关闭）、工具结果大小计量（PR #13652）——长会话 token 管理仍是高频痛点。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-10-12 | 数据来源：github.com/Hmbown/DeepSeek-TUI**

---

## 一、今日速览

今日社区焦点集中在 **v0.10.2 的收尾与遗留问题**：核心准备 PR #6957 已合并，后续切片 PR #6965（fail-closed 定价、build-lock 修复、Windows 恢复）接续推进。Windows 兼容性成为新热点——#6953（Win10 1607 启动失败）已修复关闭，但催生了发布前导入检查的 CI 防护提案 #6962，以及原生安装下只读管道命令被阻的新回归 #6963。社区贡献活跃，两个 flaky 测试修复和 Runtime API 信任管理 PR 均有实质进展。

---

## 二、版本发布

过去 24 小时无新 Release。（v0.10.2 相关修复正通过 #6965 / #6960 持续合入 main）

---

## 三、社区热点 Issues（Top 10）

1. **#6963** — Windows 运行时下限在 Full Access 下阻断了只读管道命令（原生安装）[OPEN]
   新回归，#6827 的后续。`SessionRuntimeRisk` 审查过严，普通只读命令被拒。今日新增，已有 2 条评论，需优先 triage。
   🔗 codewhale-hq/Codewhale Issue #6963

2. **#6962** — 发布前检查 Windows 导入下限（1607 回归防护）[OPEN]
   由 #6953 修复后提炼的工程化提案：防止未来 release 再引入旧版 Windows 缺失的 load-time import，属于 CI 体系补强。
   🔗 codewhale-hq/Codewhale Issue #6962

3. **#6944** — 0.10.2：后台化后长任务不可见 + Full Access 阻断后台 API [CLOSED]
   今日由创始人关闭，无决策的切片已在 #6957 落地（wait 进度上报、取消回执、后台迁移提示）。
   🔗 codewhale-hq/Codewhale Issue #6944

4. **#6961** — 后台任务后续：未轮询进度事件、Run(action=tests)、对照测量 [OPEN]
   #6944 的三项剩余产品决策，涉及后台任务体验的深度打磨。
   🔗 codewhale-hq/Codewhale Issue #6961

5. **#6953** — Win10 1607 上 v0.10.1 无法启动（0xC0000139）[CLOSED]
   `DeriveCapabilitySidsFromName` 导入失败问题已由 8b86fddd 修复并关闭，老版本 Windows 用户可升级。
   🔗 codewhale-hq/Codewhale Issue #6953

6. **#6955** — 超过 8 MiB 的会话文档无法 resume/fork，且报错无解决方案 [OPEN]
   journal 无上限是根因，报错不给救济路径，用户体验与数据设计双重问题。
   🔗 codewhale-hq/Codewhale Issue #6955

7. **#6954** — 含原始 sub-agent 交接的会话无法 resume [OPEN]
   确认逻辑对比 Engine 恢复消息与保存文档导致拒绝，与 #6955 同属会话持久化可靠性问题。
   🔗 codewhale-hq/Codewhale Issue #6954

8. **#6945** — Workflow 验证门 blocks_role 指向自身角色导致死锁 [OPEN]
   昂贵阶段启动前运行卡死。修复 PR #6952 已合并关闭，issue 待关闭。
   🔗 codewhale-hq/Codewhale Issue #6945

9. **#6931** — 所有 Bash/shell 操作需可查看、可停止 [OPEN]
   0.10.2 核心 UX 目标：长输出折叠（"N lines omitted"）与静默运行任务的可观测性。
   🔗 codewhale-hq/Codewhale Issue #6931

10. **#6964** — `codewhale init` 按项目语言生成对应 agents.md [OPEN]
    社区功能提案：多语言 AGENTS.md 模板，反映对项目脚手架本地化的需求。
    🔗 codewhale-hq/Codewhale Issue #6964

---

## 四、重要 PR 进展（Top 10）

1. **#6965** [OPEN] — 0.10.2 切片：fail-closed 分层定价（#6396）、build-lock 绕过修复、Windows owner 恢复（#6915）
   承载创始人 0.10.2 决策，前两个 commit 已验证，第三个进行中。
   🔗 codewhale-hq/Codewhale PR #6965

2. **#6960** [CLOSED] — codewhale-tui 包体积优化 + pet 视图切换器
   发布余量准备：包从 1154 降至 954 个文件，占比 95.3% → 89.9%。
   🔗 codewhale-hq/Codewhale PR #6960

3. **#6957** [CLOSED] — 0.10.2 就绪：main 恢复绿灯 + 阻塞发布修复
   发布准备主分支，含 wait 进度、取消回执等多个自包含切片，已合并。
   🔗 codewhale-hq/Codewhale PR #6957

4. **#6959** [OPEN] — feat(api)：通过 Runtime API 读写工作区项目信任
   为 VS Code 扩展等非 TUI 客户端开放信任管理，外部生态集成的重要一步。
   🔗 codewhale-hq/Codewhale PR #6959

5. **#6952** [CLOSED] — fix(workflow)：计划准入时拒绝自阻塞 gate
   修复 #6945 的死锁，将失败提前到计划准入阶段。
   🔗 codewhale-hq/Codewhale PR #6952

6. **#6950** [CLOSED] — feat(plugins)：CLI 安装 + 应用内 OAuth 登录
   补全 #6805 的 OAuth provider 体验，免终端命令即可登录。
   🔗 codewhale-hq/Codewhale PR #6950

7. **#6956** [OPEN] — test(subagent)：worktree 清理时 git 失败不算测试失败
   修复 ubuntu CI 偶发失败，降低贡献门槛。
   🔗 codewhale-hq/Codewhale PR #6956

8. **#6958** [OPEN] — test(sessions)：picker 搜索断言去除临时目录名依赖
   修复 macOS 偶发 flaky 测试。
   🔗 codewhale-hq/Codewhale PR #6958

9. **#6873** [OPEN] — 夜间安全巡检：source-map-js 1.2.1 → 1.2.2
   修复高危 GHSA-68fv-2mgg-jv7q（事件循环 DoS）。
   🔗 codewhale-hq/Codewhale PR #6873

10. **#6393** [OPEN] — Draft：echolocation、token diet、fork-prefix 缓存继承
    长期设计讨论稿，维护者反馈积极，聚焦 token 成本优化方向。
    🔗 codewhale-hq/Codewhale PR #6393

（另有 6 个 dependabot 依赖更新 PR，其中 5 个已关闭，react 升至 19.3.0 仍待处理 #6811。）

---

## 五、功能需求趋势

- **会话持久化可靠性**：超大文档 resume/fork（#6955）、sub-agent 交接恢复（#6954）成为新的集中痛点。
- **后台任务可观测性**：进度事件、可停止性、输出展示（#6931、#6961、#6944）是 0.10.2 主线诉求。
- **Windows 兼容性**：老版本系统支持 + 发布前 CI 防护（#6953、#6962、#6963）需求强烈。
- **API/IDE 生态开放**：Runtime API 信任管理（#6959）、插件 OAuth（#6950）显示 VS Code 等外部客户端集成趋势。
- **项目脚手架本地化**：多语言 AGENTS.md（#6964）。
- **Token 成本优化**：token diet、缓存继承（#6393）持续讨论中。

---

## 六、开发者关注点

1. **CI 稳定性**：flaky 测试（#6956、#6958）在非相关 PR 上随机失败，影响贡献体验，社区正积极修复。
2. **错误信息可用性**：多个 issue（#6955 等）反映报错只说“不行”不说“怎么办”，救济路径缺失。
3. **权限模型精度**：`SessionRuntimeRisk` 自动审查对只读命令误伤（#6963），Full Access 与安全策略的边界需要细化。
4. **发布流程防回归**：从 #6953 到 #6962，社区推动将老平台兼容性检查纳入发布门禁。
5. **依赖安全**：自动化安全巡检（#6873）保持高频运转，web 侧传递依赖是主要风险面。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-10-12

## 📌 今日速览

今日无新版本发布。社区活跃度集中在稳定性与可靠性问题：老牌 Issue #4945（openai-codex 连接卡死）评论数已达 82，持续发酵；同时过去 24 小时内新增多个高质量 bug 报告，涉及中文搜索失效、配置回退静默失败等。PR 方面以修复和扩展能力增强为主，全部 6 个 PR 均有更新。

---

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues（Top 10）

1. **#4945 openai-codex 连接可靠性问题**（82 评论 / 35 👍，inprogress）
   TUI 卡在 `Working...` 无任何输出，只能 Escape 恢复。开放近 5 个月仍是最高热度 Issue，是 openai-codex 用户的核心痛点。
   🔗 earendil-works/pi Issue #4945

2. **#10480 直连 OpenAI 不识别手动用量重置**（18 评论，OPEN）
   ChatGPT Pro 用户使用 banked reset 后 Pi 仍报额度用尽，需登出再用 openai-codex 登录才可恢复。订阅用户高频受阻。
   🔗 earendil-works/pi Issue #10480

3. **#7553 Compaction 支持独立 thinking 级别/模型**（10 评论，inprogress/to-discuss）
   自动压缩无条件复用会话当前 thinking 级别，导致推理模型的摘要成本不可控。社区期待可配置化。
   🔗 earendil-works/pi Issue #7553

4. **#10267 before_agent_start 注入的 prompt 在无用户 prompt 的运行中被丢弃**（9 评论，prio:p0）
   后台任务、plan-mode 续跑、重试、resume 均受影响，导致整个 prompt 被重复计费。P0 级正确性 bug。
   🔗 earendil-works/pi Issue #10267

5. **#10645 编译版（Bun）可执行文件中 resizeImage 返回 null**（6 评论，inprogress）
   0.87.x 起所有图片附件被静默丢弃，影响以 `--mode rpc` 集成的宿主应用，属于严重的静默数据丢失。
   🔗 earendil-works/pi Issue #10645

6. **#10019 Anthropic 订阅请求在 :00/:30 UTC 挂起**（8 评论）
   收到 200 + ping 但无 `message_start`，疑似与配额窗口重置相关，Claude Code 无此问题，指向 Pi 侧处理逻辑。
   🔗 earendil-works/pi Issue #10019

7. **#9602 Compaction 可能因包含早期被省略的 thinking 消息而溢出**（8 评论）
   本地 Qwen3.8 + llama.cpp 长会话中，压缩反而把之前未发送的 thinking token 全部计入，导致上下文溢出。
   🔗 earendil-works/pi Issue #9602

8. **#9656 Windows + Zellij 下鼠标滚轮滚动的是 prompt 历史而非对话记录**（6 评论 / 4 👍）
   Windows 终端复用器组合下的 TUI 交互问题，Linux + tmux 正常。
   🔗 earendil-works/pi Issue #9656

9. **#10812 已保存的默认模型从目录中移除后被静默忽略并回退**（2 评论，CLOSED）
   DeepSeek 改名后新会话静默换模型、无任何警告。对生产环境是隐患，已在当日快速关闭。
   🔗 earendil-works/pi Issue #10812

10. **#10816 中文查询在 tool search 中零匹配**（1 评论，CLOSED）
    共享 tokenizer 按 `/[^a-z0-9]+/` 分词，直接丢弃中文字符——中文生态用户的实质性缺陷，当日报告当日关闭。
    🔗 earendil-works/pi Issue #10816

---

## 🔀 重要 PR 进展

> 注：今日仅 6 个 PR 更新，按重要性全部列出。

1. **#10795 fix(ai): 从 Anthropic 错误 tool result 中剔除图片**（OPEN）
   修复错误响应中携带图片导致的请求异常，附前后 session 对比，修复质量高。
   🔗 earendil-works/pi PR #10795

2. **#10805 feat: 支持扩展 session cwd**（CLOSED）
   为 `ctx.newSession()` 增加 `cwd`、`ctx.switchSession()` 增加 `cwdOverride`，扩展可在运行时切换到 Git worktree 检出目录——对 worktree 工作流是重要能力补全。
   🔗 earendil-works/pi PR #10805

3. **#10751 feat: 采用 pi.dev 配置 schema 作为规范 $id**（CLOSED）
   将 pi.dev schema 端点设为生成配置 schema 的权威来源，统一 models/settings/keybindings/theme schema URL，利好工具链与编辑器补全生态。
   🔗 earendil-works/pi PR #10751

4. **#10810 fix(tui): CompactionStatusIndicator 支持 colorFn 覆盖**（CLOSED）
   修复 #10809：压缩状态指示器未跟随主题的 reasoning level 颜色 token。
   🔗 earendil-works/pi PR #10810

5. **#10774 fix(tui): 在 herdr 中恢复 kitty 图片支持**（CLOSED）
   #10573 的回归导致 herdr 内联图片全部失效，本 PR 恢复 kitty graphics 协议路径。
   🔗 earendil-works/pi PR #10774

6. **#10813 feat(ai): 保留客户端加载的 Anthropic tool references**（CLOSED）
   与 #8617 的“图片改用 file reference”方向呼应，减少 payload 重复传输。
   🔗 earendil-works/pi PR #10813

---

## 📈 功能需求趋势

- **Compaction 可控性**（#7553、#9602、#10781）：压缩的 thinking 级别、模型、传输方式均不可独立配置，是当前最集中的功能诉求。
- **无人值守 / headless agent 增强**（#10799、#10267）：output-limit 截断无续跑路径、注入 prompt 丢失，反映 Pi 在自动化场景的成熟度需求上升。
- **Provider 兼容与配额处理**（#4945、#10480、#10019、#10656）：openai-codex 可靠性、订阅额度状态识别、DashScope 429 误分类，跨 provider 的连接层健壮性是长期主题。
- **MCP 能力补全**（#10274）：elicitation 支持被标记 no-action 关闭，但社区对 MCP 完整性仍有期待。
- **本地模型 / 自定义 provider**（#9602、#10578、#10791）：llama.cpp、vLLM、Qwen 场景的 thinking 参数传递与 classifier API 泛化。
- **扩展 API 深化**（#9432、#10805）：session_start 追加系统 prompt、session cwd 切换，扩展开发者要求更精细的会话控制权。

---

## ⚠️ 开发者关注点

1. **静默失败是最大痛点**：图片附件被丢弃（#10645）、模型静默回退（#10812）、截断静默 settle（#10799）——多处反馈集中在“无警告地做错事”。
2. **长会话 / 重推理模型的成本与上下文管理**：compaction 相关 Issue 密集，thinking budget 不可分割（#7553）和压缩溢出（#9602）直接影响账单。
3. **Windows 生态兼容性欠佳**：Zellij 滚轮（#9656）、auth lock EPERM（#10801）等多发。
4. **中文/i18n 支持薄弱**：tokenizer 层面丢弃非 ASCII 字符（#10816），建议在基础组件层系统性审视。
5. **订阅类认证的边缘状态**：banked reset、banked quota 等新计费机制未被 Pi 正确感知（#10480、#10019）。

---
*数据来源：github.com/earendil-works/pi | 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报 · 2026-10-12

## 📌 今日速览

今天发布 **v18.10.0**，将 `gpt-6.1-sol` 默认上下文窗口从 272K 提升至 500K，与 OpenAI Codex 官方新默认对齐。社区热度集中在 Codex steering 报错（#14158）、Anthropic 网关压缩回归（#14839/#14840）等 provider 兼容性问题；PR 侧则有一批高质量的 TUI 修复和 computer 工具增强落地，显示 agent 自动化体验在快速演进。

---

## 🚀 版本发布（过去 24 小时 4 个版本）

### [v18.10.0](https://github.com/can1357/oh-my-pi/releases)
- **pi-catalog**：`gpt-6.1-sol` / `gpt-6.1-sol-wm` 默认上下文从 272K 提升至 500K（对齐 OpenAI Codex 新默认），扩展上下文仍可开至 922K（关联 [#15421](https://github.com/can1357/oh-my-pi/issues/15421)，当日提出当日闭环 ✅）

### [v18.9.2](https://github.com/can1357/oh-my-pi/releases)
- **pi-agent-core**：改进重复轮次的上下文缓存，系统提示未变时后续轮次更快
- **pi-ai**：⚠️ Breaking — `TypeSafeJudge` 更名为 `NativeJudge`

### [v18.9.1](https://github.com/can1357/oh-my-pi/releases)
- **pi-ai**：新增 `compat.supportsThinkingBindingControls`，Bedrock Converse 可关闭 Claude 请求的 `thinking.block_binding` 及相关 beta header

### [v18.9.0](https://github.com/can1357/oh-my-pi/releases)
- **pi-agent-core**：修复队列 steering 被采纳/撤回/入稿时队列监听器收到陈旧状态的问题
- **pi-ai**：⚠️ Breaking — 移除 `retainTextSignature` 选项

---

## 🔥 社区热点 Issues（Top 10）

1. **[#14158](https://github.com/can1357/oh-my-pi/issues/14158)** — Codex steering 报错 "native turn lane cannot accept stateful WebSocket messages"（12 条评论，本周最热）。Steering 消息在原生 turn 运行时被拒绝，是 Codex provider 最影响日常使用的 bug，已标记 duplicate，说明上游修复在推进中。

2. **[#14833](https://github.com/can1357/oh-my-pi/issues/14833)** — Opencode Go 免费模型不显示（7 条评论）。模型列表不刷新影响新用户上手，p2 优先级。

3. **[#1627](https://github.com/can1357/oh-my-pi/issues/1627)** — 请求内置 Agent View 多会话并行监控面板（对标 `claude agents`）。长期 OPEN，反映社区对多会话工作流可视化的强烈需求。

4. **[#14839](https://github.com/can1357/oh-my-pi/issues/14839)** — Anthropic 原生压缩忽略个人网关端点的显式 opt-in。配置了 `remoteCompaction.enabled: true` 仍不生效，被确认为回归；对应修复 PR #14840 今日仍在活跃更新。

5. **[#9908](https://github.com/can1357/oh-my-pi/issues/9908)**（已关闭）— 9 个 omp 进程合计占用 6.89 GiB 内存，mnemopi embed worker（780 MB）常驻不卸载。多会话重内存用户的真实痛点，关闭说明已有处理。

6. **[#15350](https://github.com/can1357/oh-my-pi/issues/15350)**（已关闭）— 会话 staging `.tmp` 孤儿文件（195 MB 全量副本）连 `omp gc` 都不回收，磁盘空间隐患。

7. **[#15423](https://github.com/can1357/oh-my-pi/issues/15423)** — Subagent fallback 耗尽后永久挂起，父任务拿不到结果。agent 可靠性问题，直接影响长任务编排。

8. **[#15386](https://github.com/can1357/oh-my-pi/issues/15386)** — SDK：`AgentSession.dispose()` 后 `mcp-notification-cleanup` 回调未注销导致会话对象泄漏。嵌入式宿主（多会话）场景下的关键内存问题。

9. **[#15351](https://github.com/can1357/oh-my-pi/issues/15351)**（已关闭）— Anthropic prompt cache 会话中途被重写（"dropped thinking block after conversation prefix changed"），0.8% 请求复用缓存失败。高质量上游报告。

10. **[#15363](https://github.com/can1357/oh-my-pi/issues/15363)** — sharpshooter 的 16 code-unit 提取门槛对 CJK（中日韩）用户不友好，中文提示常被直接丢弃。本地化公平性问题的典型代表，建议可配置化。

---

## 🔧 重要 PR 进展（Top 10）

1. **[#15436](https://github.com/can1357/oh-my-pi/pull/15436)**（review:p1）— 修复会话从 GPT 模型切换到 Claude 后 snapcompact 归档残留异构 reasoning 导致 Claude 拒答的问题，为 Claude 提供去 reasoning 的归档副本。

2. **[#15327](https://github.com/can1357/oh-my-pi/pull/15327)**（review:p1）— 修复 sixel 图像在 eval/PTY bash/replay 中被截断和清理逻辑破坏的问题，附 14 个回归测试。

3. **[#15326](https://github.com/can1357/oh-my-pi/pull/15326)**（review:p1）— 修复 bash 输出超 100 行时 replay/resume 静默截断，Ctrl+O 可回看完整输出。

4. **[#15418](https://github.com/can1357/oh-my-pi/pull/15418)** — LSP 文档 5 分钟未使用即关闭，解决 TypeScript server 在长会话中膨胀到 8+ GB 的问题（呼应 #9908 内存痛点）。

5. **[#15024](https://github.com/can1357/oh-my-pi/pull/15024)** — Codex WebSocket 重连后保留完整有效历史，兼容授权与路由 hint，与 #14158 steering 问题同属 Codex 连接层修复。

6. **[#14840](https://github.com/can1357/oh-my-pi/pull/14840)** — 恢复 Anthropic 个人网关的压缩 opt-in，直接修复 #14839 回归。

7. **[#15043](https://github.com/can1357/oh-my-pi/pull/15043)** — 将 subagent 以 ACP Subagent Sessions 形式暴露，让 T3 Code 等第三方 UI 能独立展示每个子 agent，SDK 生态的重要一步。

8. **[#15434](https://github.com/can1357/oh-my-pi/pull/15434)** — snapcompact 请求上限从硬编码 3 MB 改为 catalog KDL 策略驱动，长 Opus 会话归档不再被压到 17 帧。

9. **[#15185](https://github.com/can1357/oh-my-pi/pull/15185) / [#15191](https://github.com/can1357/oh-my-pi/pull/15191)** — macOS 后台拖拽、右键、修饰键点击原生支持 + 后台输入失败时自动 takeover，显著减少 computer 工具对用户前台的抢占。

10. **[#15337](https://github.com/can1357/oh-my-pi/pull/15337)** — 启动性能优化：host/wslpath/tmux 三个同步探测改为异步有界探测，不再阻塞首帧渲染。

---

## 📈 功能需求趋势

- **内存与资源治理**：#9908、#10240、#15386、#15418 持续指向“长会话/多会话内存膨胀”——LSP、embedding worker、SDK 会话泄漏是三大来源。
- **Agent 可靠性与编排**：subagent 挂起（#15423）、queue steering 状态（v18.9.0）、ACP 子会话暴露（#15043）、多会话监控面板（#1627），社区在把 omp 当 agent 运行时用。
- **Provider 兼容性**：Codex WebSocket/steering（#14158、#15024）、Anthropic 压缩与缓存（#14839、#15351、#15377）、opencode-go 模型目录（#14833、#15357）占据 issue 大头。
- **多模态输入**：#5834 请求音频/视频作为一等输入模态。
- **SDK/扩展能力开放**：#12043（读有效设置）、#13728（prune 前事件）、#13291（skill 压缩退避）——扩展生态成熟度需求明显。
- **CJK 本地化**：#15363 等提示 CJK 用户在提取门槛上受到系统性不利。

## ⚠️ 开发者关注点

1. **Breaking Changes 节奏快**：18.9.x 连续两个版本含 API 更名/移除（`NativeJudge`、`retainTextSignature`），SDK 使用者需紧跟 changelog。
2. **内存是头号痛点**：固定 RAM 机器上多会话长时间运行仍不可靠，关注 #15418 是否合入及 mnemopi worker 卸载问题后续。
3. **网关/自定义端点用户**：Anthropic 压缩 opt-in 回归（#14839）未修完前请勿升级依赖此功能。
4. **确定性错误不应触发模型 fallback**（#15377）：会浪费配额并掩盖根因，值得 provider 层改进。
5. **诊断工具的“假阴性”风险**：LSP 诊断误报 clean（#15408）、Windows 上 pyright/Ruff 空结果（#15374），agent 可能基于错误反馈继续走错方向，使用 write/lsp 工具时注意交叉验证。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*