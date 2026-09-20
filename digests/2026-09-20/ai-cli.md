# AI CLI 工具社区动态日报 2026-09-20

> 生成时间: 2026-09-20 03:59 UTC | 覆盖工具: 11 个

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

**数据周期：2026-09-20（24 小时）**

---

## 一、生态全景

AI CLI 工具已全面进入“深度打磨期”：头部产品（Claude Code、Codex、Gemini CLI）的竞争焦点从功能堆叠转向可靠性、安全性与成本控制，而新锐工具（Pi、oh-my-pi、Qwen Code）则通过差异化技术路线（缓存优化、沙箱架构、多 provider 生态）快速切入。共同特征是**Agent/子代理可靠性成为最大痛点集群**、**Windows 平台普遍是质量洼地**、**静默失败类 bug 集中爆发**。同时，产品形态正从纯 TUI 向桌面端、云端工作台、IDE fork 全面演进。

---

## 二、各工具活跃度对比

| 工具 | 热点 Issues（提及数） | PR 更新数 | Release | 核心动态 |
|---|---|---|---|---|
| Claude Code | 10+（含 2 条新增） | 2 | 无 | CLAUDE.md 失效 issue 33 评论，回归问题集中 |
| OpenAI Codex | 10+ | 13+ | **3 个 alpha**（0.156.0-a7/8/9） | transcript_v2 系统性重构，迭代最快 |
| Gemini CLI | 10 | 10 | 1 nightly | AST 搜索、持久化 Tracker 等架构演进 |
| Copilot CLI | 10（含 2 条新增） | **0** | 无 | 纯 Issue 驱动，MCP 兼容性为主 |
| Kimi Code CLI | 10（全部批量关闭） | 5 | 无 | 历史 Issue 批量清理，Windows 编码修复 |
| OpenCode | 10 | 10+ | 无 | Zen 计费问题集中爆发，社区贡献活跃 |
| Qwen Code | 10 | 10+ | **v0.24.1 正式版**（含 Breaking Change） | 沙箱三部曲（bwrap/Landlock） |
| DeepSeek TUI | 10 | 10 | 无 | v0.10.0 重设计推进，VS Code fork 转向 |
| Pi | 10 | 13（10 已合入） | **v0.86.0** | Prompt Cache Warming 亮点功能 |
| oh-my-pi | 10+ | **116 条更新** | 无 | 社区贡献最活跃，64 条 Issue 更新 |
| DeepSeek Harness | 0 | 0 | 无 | 无活动 |

**活跃度梯队**：oh-my-pi（贡献生态最热）> Codex/Pi/Qwen Code（发布节奏最快）> Gemini CLI/OpenCode（稳步推进）> Claude Code/Copilot CLI/Kimi（Issue 修复期）> DeepSeek TUI（重设计期）。

---

## 三、共同关注的功能方向

### 1. 子代理（Subagent）可靠性 —— 最普遍的信任危机
- **Gemini CLI**：MAX_TURNS 后误报 success（#22323，P1）、agent 无限挂起（#21409）
- **oh-my-pi**：子代理强制继承完整 system prompt，token 浪费（#4991）
- **Copilot CLI**：子代理并发状态损坏（#2543）
- **Claude Code**：Opus 5 长会话违反规则（#90542，33 评论）—— 本质同为“无人值守可信度”问题

### 2. 上下文/Token 成本优化
- **Pi**：Prompt Cache Warming（v0.86.0 核心功能）
- **Qwen Code**：prompt cache 前缀失效（#6721）、agent 描述 2000 tokens/轮浪费（#12272）
- **oh-my-pi**：保留被丢弃的 thinking 以维持缓存前缀（#12571）、Anthropic 缓存刷新 allow-list（#12574）
- **Gemini CLI**：`/compress` 不持久化（#21335）
- **Copilot CLI**：1M 上下文被限制为 200K（#3355）

### 3. TUI 交互体验重构
- **Codex**：13 个 transcript_v2 PR（搜索、复制、分页、草稿保留）
- **Pi/oh-my-pi**：流式渲染 CPU 占用、长流式重绘漂移
- **DeepSeek TUI**：转录复制、光标、ink 测试基础设施

### 4. 沙箱与权限安全
- **Qwen Code**：bwrap/Landlock 工具级沙箱（当日最重要架构演进）+ 权限提权漏洞（#12246）
- **Claude Code**：权限通配符静默扩大（#95614）、自动反馈隐私问题（#92649）
- **Gemini CLI**：OS 级零依赖沙箱提案（#19873）、Auto Memory 脱敏（#26525）

### 5. Windows/WSL 平台质量
几乎所有工具均有 Windows 专项问题：Codex（约半数热点带 windows-os 标签）、Kimi（中文输入崩溃 #773）、Claude Code（WSL 致命回归 #91816）、Copilot CLI（WSL2 卡死 #4069）。

### 6. MCP 生态兼容性
Copilot CLI（Figma 加载失败，热度第一）、oh-my-pi（超时单位回归）、Gemini CLI（128 工具上限）、Codex（工具热加载）、Kimi（UA header 缺失）——MCP 已成标配，但兼容性实现碎片化严重。

---

## 四、差异化定位分析

| 维度 | Claude Code | Codex | Gemini CLI | Qwen Code | Pi/oh-my-pi | OpenCode | Kimi/DeepSeek TUI |
|---|---|---|---|---|---|---|---|
| **核心定位** | 企业级重度规则用户 | 终端体验 + 浏览器控制 | 架构创新（AST/沙箱） | 安全执行 + 成本敏感 | 可组合内核 + 多 provider | 开放生态 + ACP 远程 | 中国市场 + 桌面化转型 |
| **技术路线** | 模型能力绑定（Opus 5） | Rust TUI 重构 | 开源社区驱动演进 | bwrap/Landlock 沙箱 | 扩展 API + provider 抽象 | 本体开源 + Zen 商业化 | VS Code fork / 云执行 |
| **主要短板** | 模型指令遵循退化 | Windows 质量、apikey 二等公民 | 子代理稳定性 | Windows CI 红 | TUI 渲染性能 | 计费可靠性 | 升级兼容性 |

**关键洞察**：头部厂商工具的瓶颈在**模型层**（Claude）或**平台层**（Codex 的容量误报），而开源工具的瓶颈在**工程质量**。Pi 与 oh-my-pi 展示了“内核 + 发行版”的分层生态正在形成。

---

## 五、社区热度与成熟度

- **成熟期（用户规模大、Issue 驱动）**：Claude Code、Codex、Copilot CLI —— 热点集中在付费用户信任问题（容量误报、规则失效、权限安全），说明用户基数大且已用于生产。
- **快速迭代期**：Codex（3 alpha/天）、Pi（版本当天即修复两条回归）、Qwen Code（正式版 + 沙箱三部曲）—— 发布节奏与修复响应均属一流。
- **贡献生态最活跃**：oh-my-pi（116 PR 更新/24h）、OpenCode（外部贡献者高质量 PR 批量涌现）。
- **转型期**：DeepSeek TUI（放弃 Tauri 转 VS Code fork，产品形态重构）；Kimi（批量关闭历史 Issue，治理信号积极但透明度待提升）。
- **沉寂**：DeepSeek Harness 无活动。

---

## 六、值得关注的趋势信号

1. **“表面成功、实际出错”是下一阶段质量攻坚重点**：Claude Code 陈旧写入、`\uXXXX` 静默解码、权限通配符扩大；Gemini 误报 success；Copilot git clean 删文件——**建议开发者对 AI CLI 的所有写操作建立外部校验机制**（版本控制、校验和），不要信任工具的成功回报。

2. **Prompt cache 成本工程成为独立技术赛道**：Pi 的 Cache Warming、oh-my-pi 的缓存前缀保持、Qwen 的 cache 失效治理——缓存命中率直接决定 API 成本，选型时应将缓存友好度列为评估指标。

3. **沙箱安全从“可选”走向“架构必需”**：Qwen 的工具级 bwrap/Landlock、Gemini 的 OS 级沙箱提案，配合 Claude Code 权限漏洞的警示——**权限规则的语义审查（尤其是通配符）应纳入团队安全审计**。

4. **无人值守 Agent 的可信度是行业最大赌注**：多工具的子代理误报/挂起/规则违反问题共同指向——**当前所有 CLI 都不适合完全无监督的关键操作，human-in-the-loop 仍是必需设计**。

5. **产品形态融合加速**：CLI → 桌面端 → IDE fork → 云端 microVM（DeepSeek TUI）、浏览器控制（Codex）、ACP 远程（OpenCode）——**CLI 正在成为多端工作台的“执行内核”而非独立产品**，API/SDK 嵌入能力（Pi 的教训：undici 全局劫持）值得集成方提前验证。

6. **升级需谨慎成为共识**：Codex 0.155.0 沙箱回归、Claude Code 2.1.259 WSL 回归、Pi 0.86.0 两条新回归——**生产环境建议固定版本 + 延迟 1-2 个版本跟进**。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
（数据截止 2026-09-20，来源：github.com/anthropics/skills）

> ⚠️ 数据说明：本次抓取的 PR 评论数均为 `undefined`、👍 为 0，无法严格按热度排序。以下排行基于 PR 持续活跃度（更新时间跨度）、Issue 讨论热度及修复对应关系综合推断。

---

## 一、热门 Skills 排行（PR）

| # | Skill / PR | 功能 | 讨论热点与状态 |
|---|---|---|---|
| 1 | **skill-creator 触发评估修复** [PR #1298](https://github.com/anthropics/skills/pull/1298) | 修复触发评估的误报、Windows `select()` 失败、运行时故障被误判为非触发等问题 | 长期活跃（6月创建、9月仍在更新），对应多个高热度 Issue（#556、#1721）。社区最关心的“Skill 触发率归零”核心修复。**OPEN** |
| 2 | **skill-creator recall=0% 修复** [PR #1769](https://github.com/anthropics/skills/pull/1769) | 修复所有 Skill 评估报告 `precision=100% recall=0%` 的缺陷 | 修复 Issue #1721，与 #1298 同属触发评估链路的致命 bug，近期提交。**OPEN** |
| 3 | **mcp-builder 兼容修复** [PR #1742](https://github.com/anthropics/skills/pull/1742) | 适配 `mcp>=2.0` 的 `streamable_http_client` 重命名与自定义 header | 关联 Issue #1668，且 mcp-builder 评估框架另有严重问题（#1390 全部 0 分），是 mcp-builder 生态的关键修复。**OPEN** |
| 4 | **AWT（AI Watch Tester）** [PR #822](https://github.com/anthropics/skills/pull/822) | AI 视觉 + 浏览器控制的零代码 E2E 测试 Skill | 3月提交、9月仍活跃，测试自动化方向最受关注的贡献。**OPEN** |
| 5 | **Pyxel 复古游戏开发** [PR #525](https://github.com/anthropics/skills/pull/525) | Python 复古游戏的创建/调试/无头验证 | 由 Pyxel 作者本人提交，长期维护中（3月-9月）。**OPEN** |
| 6 | **document-typography** [PR #514](https://github.com/anthropics/skills/pull/514) | 修复 AI 生成文档的孤行、寡段、编号错位 | 切中“所有 Claude 文档都有排版问题”的普遍痛点，文档质量方向代表性贡献。**OPEN** |
| 7 | **blast-radius** [PR #1776](https://github.com/anthropics/skills/pull/1776) | 批量/破坏性写操作前的爆炸半径检查清单 | 安全护栏方向，本周新提交，与社区安全关注（见洞察）高度呼应。**OPEN** |
| 8 | **docx 系列修复** [PR #541](https://github.com/anthropics/skills/pull/541) / [PR #1790](https://github.com/anthropics/skills/pull/1790) / [PR #1734](https://github.com/anthropics/skills/pull/1734) | 修复 OOXML `w:id` 冲突致文档损坏、rels 缺失、孤立批注检测 | Lubrsy706 等多位贡献者持续修复官方 docx skill 的实际损坏 bug，文档处理是修复 PR 最密集区域。**均 OPEN** |

---

## 二、社区需求趋势（来自 Issues）

1. **安全与信任边界**（最热，43 评论）—— [Issue #492](https://github.com/anthropics/skills/issues/492)：社区 Skill 冒用 `anthropic/` 命名空间构成信任滥用；另有 SharePoint 权限设计疑虑 [#1175](https://github.com/anthropics/skills/issues/1175)
2. **组织级 Skill 分发** —— [#228](https://github.com/anthropics/skills/issues/228)：期待 org 内共享 Skill 库，替代 Slack 手传 `.skill` 文件
3. **Skill 触发与评估可靠性** —— [#556](https://github.com/anthropics/skills/issues/556)、[#1390](https://github.com/anthropics/skills/issues/1390)：评估框架跑不通（触发率 0%、评分 0/N）
4. **上下文窗口管理** —— [#1487](https://github.com/anthropics/skills/issues/1487)：`claude-api` Skill 单次注入 ~156k token 打爆上下文；[#1329](https://github.com/anthropics/skills/issues/1329) 提出 compact-memory 符号化记忆方案
5. **质量治理类 Skill** —— [#1385](https://github.com/anthropics/skills/issues/1385)（推理质量门禁流水线）、[#412](https://github.com/anthropics/skills/issues/412)（agent 治理）
6. **基础设施兼容** —— Bedrock 支持 [#29](https://github.com/anthropics/skills/issues/29)、Skills 与 MCP 互通 [#16](https://github.com/anthropics/skills/issues/16)

---

## 三、高潜力待合并 Skills（活跃且未合并）

- [PR #1742](https://github.com/anthropics/skills/pull/1742) mcp-builder 兼容修复（9/19 刚更新，修复已确认的 #1668）
- [PR #1769](https://github.com/anthropics/skills/pull/1769) + [PR #1298](https://github.com/anthropics/skills/pull/1298) 触发评估双修复（社区呼声最高，多人独立复现）
- [PR #1790](https://github.com/anthropics/skills/pull/1790) docx comment.py rels 修复（9/19 新提交，修复明确缺陷）
- [PR #525](https://github.com/anthropics/skills/pull/525) Pyxel（上游作者维护半年，功能完整）
- [PR #822](https://github.com/anthropics/skills/pull/822) AWT E2E 测试（持续迭代近半年）
- [PR #1771](https://github.com/anthropics/skills/pull/1771) proofcore 智能合约审计（⚠️ 含外部协议推广性质，在 #492 安全背景下合并概率存疑）

---

## 四、生态洞察（一句话）

**社区最集中的诉求是“让 Skills 的信任与触发机制可信可靠”——即解决 Skill 冒名分发的安全边界问题、触发评估框架的系统性失灵（0% 触发/0 分），以及官方文档类 Skill 的实际可用性 bug，其次才是新 Skill 功能本身。**

---

# Claude Code 社区动态日报 — 2026-09-20

## 1. 今日速览

今日无新版本发布，社区活跃度集中在 bug 反馈与回归问题上。最引人关注的是 CLAUDE.md 规则完全失效的长会话报告（#90542，评论已达 33 条），以及两条当日新增的认证/权限相关 issue。此外，Cowork 数据一致性问题（#93482）持续发酵，涉及静默数据丢失风险。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#90542](https://github.com/anthropics/claude-code/issues/90542)** — 700 行 CLAUDE.md 规则契约在 4.5 小时 Opus 5 会话中被全部违反，包括模型刚刚逐字引用过的规则。评论 33 条，是当前讨论最热烈的 issue，直指模型层规则遵循能力，对重度规则用户是核心痛点。

2. **[#93482](https://github.com/anthropics/claude-code/issues/93482)** — Cowork 的 `device_commit_files` 覆盖写入时报告成功，但磁盘内容落后整整一次提交（静默陈旧写入，mtime 却是新的）。带复现步骤且标记 data-loss，数据完整性风险高。

3. **[#95614](https://github.com/anthropics/claude-code/issues/95614)**（今日新增）— Bash 权限允许规则中引号内的字面 `*` 被静默重新解释为位置通配符，导致重放时权限范围意外扩大。安全相关，值得权限规则重度用户立即自查 `settings.local.json`。

4. **[#91424](https://github.com/anthropics/claude-code/issues/91424)** — Opus 5 在散文写作任务中用推断默认值覆盖显式用户指令，注意力分配到未请求的工作，且纠正后行为退化。与 #90542 同属模型行为可信度问题。

5. **[#91816](https://github.com/anthropics/claude-code/issues/91816)** — 2.1.259 回归：WSL 下 `/mnt/c` 不可访问时 managed-settings 发现已致命失败（2.1.258 正常）。版本回退是当前唯一解法。

6. **[#92649](https://github.com/anthropics/claude-code/issues/92649)** — 默认开启、无需确认的自动反馈框，单次击键即可将私有会话内容发送出去。隐私/安全问题，社区对“默认开启”设计批评较多。

7. **[#77372](https://github.com/anthropics/claude-code/issues/77372)** — Remote Control 的陈旧环境无法删除，幽灵会话导致永久 404；新注册环境也会复现。与今日新增的 #95619（桌面端 Remote Control 恒 403）、#95620（重新登录提示信息不清）构成一组 Remote Control 生态问题。

8. **[#93528](https://github.com/anthropics/claude-code/issues/93528)** — Claude Desktop（macOS Code 标签页）新消息无限卡在 "Sending..."，且自动更新器本身也损坏，用户难以自救升级。

9. **[#72957](https://github.com/anthropics/claude-code/issues/72957)** — Write/Edit 工具静默解码文件内容中的 `\uXXXX`，破坏转义序列文本的写入。已复现、长期未修，影响任何需要保存字面转义符的项目。

10. **[#94355](https://github.com/anthropics/claude-code/issues/94355)** — Cowork 云端 egress：允许列表全开的情况下 wss WebSocket 被拒而同服务 HTTPS 正常，是 9 月 10 日 egress 回归的部分遗留。

## 4. 重要 PR 进展

过去 24 小时仅有 2 个 PR 更新（不足 10 个）：

1. **[#95618](https://github.com/anthropics/claude-code/pull/95618)**（@poteat，今日新增）— telemetry 模块重构：通过 `$` 收集完整行数据、批量发送，仅服务内置插件，并拒绝个人或管理员安装的插件读取遥测调用，附带拒绝原因。属于遥测隐私边界收紧。

2. **[#95587](https://github.com/anthropics/claude-code/pull/95587)**（@poteat）— diff 面板行为统一：恢复含编辑记录的会话时自动打开 diff 面板、`/clear` 后保持面板状态、会话行跟随引擎启动时机。修 UI 一致性细节。

## 5. 功能需求趋势

- **桌面端体验打磨**：会话管理是高频诉求 —— MRU 顺序切换会话（#93666）、快速标记会话完成（#95294）、固定聊天排序统一（#75511）、Plan 面板陈旧快照修复（#78369）。
- **可观测性与状态暴露**：status line 中暴露认证方式（订阅 vs API key，#95598）、查看已提交反馈的追踪（#92520）。
- **多智能体控制**：子代理创建时的模型选择提示（#76379）、代理间消息路由修复（#89043，已关闭）。
- **Skills 可靠性**：skill 目录描述间歇性缺失于系统提示（#95582）、SSH 远程会话 skill 懒加载问题（#82676）。
- **网络/环境能力**：Cowork 云端网络 egress 的精细控制与稳定性（#94355、#94506）。

## 6. 开发者关注点

- **模型指令遵循可信度**：#90542 与 #91424 显示 Opus 5 在长会话中对 CLAUDE.md 和显式指令的遵循在退化，用户难以信任无人值守运行——这是当前社区最大的信任危机。
- **静默失败类 bug**：数据陈旧写入（#93482）、`\uXXXX` 解码（#72957）、权限通配符扩大（#95614）共同特征是“表面成功、实际出错”，缺乏防护栏。
- **认证与连接稳定性**：Remote Control 403/404、重新登录提示不清（#95619、#95620、#77372），多端用户的日常摩擦点。
- **版本回归频发**：2.1.259 WSL 致命回归（#91816）、Enter 键行为改变（#93239）提示升级需谨慎，建议关键环境固定版本。
- **资源占用**：Desktop 端流式响应时 WindowServer 占用约 47% 单核（#94003），长会话用户对性能不满。

---
*数据来源：github.com/anthropics/claude-code（过去 24 小时）*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-09-20 | 数据来源：github.com/openai/codex**

---

## 一、今日速览

今日 Codex CLI 密集发布 3 个 alpha 版本（0.156.0-alpha.7/8/9），迭代节奏明显加快。社区方面，账号容量误报（#43337，56 条评论）和 Windows 桌面端消息发送卡死（#40968，44 条评论）持续发酵，成为最受关注的两大痛点。同时，官方今日合入大量 TUI 转录（transcript）重构 PR，显示终端交互体验正在经历一轮系统性升级。

---

## 二、版本发布

过去 24 小时内连续发布 3 个 alpha 版本，均无详细 changelog：

| 版本 | 链接 |
|---|---|
| rust-v0.156.0-alpha.9 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.9) |
| rust-v0.156.0-alpha.8 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.8) |
| rust-v0.156.0-alpha.7 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.7) |

高频 alpha 迭代配合今日大量 TUI 相关 PR 合入，推测 0.156.0 正式版将主打终端转录与交互重构。

---

## 三、社区热点 Issues

1. **[#43337](https://github.com/openai/codex/issues/43337) 账号级容量误报，周配额充足却报错（56 评论）**
   ChatGPT Pro 20x 用户在 `gpt-6-astra`、`gpt-5.6-luna` 上持续遇到 "capacity" 错误，尽管周配额完全可用。影响付费重度用户，讨论热度最高。

2. **[#40968](https://github.com/openai/codex/issues/40968) Windows 桌面端发送按钮无限转圈（44 评论，17 👍）**
   Pro x5 用户在 Windows 11 上后续提示词无法提交。长期未修复，社区不满情绪上升。

3. **[#43410](https://github.com/openai/codex/issues/43410) 浏览器控制在 API-key 认证下失败（41 评论）**
   Edge 插件连接正常但首个操作报 `unsupported Codex auth method: apikey`，API 用户被排除在浏览器控制功能之外。

4. **[#44135](https://github.com/openai/codex/issues/44135) Windows Chrome 控制报 `nodeRepl.fetch request failed`（21 评论）**
   与 #44500 同源的浏览器控制初始化问题，复现路径清晰，是 Browser Use 功能在 Windows 上的关键阻塞。

5. **[#44398](https://github.com/openai/codex/issues/44398) Astra 输入框动画阻止 kitty 终端文本选择（10 评论，16 👍）**
   装饰性动画干扰鼠标选中文本，👍 数高说明 TUI 用户共鸣强烈，与今日大量 TUI PR 直接相关。

6. **[#42739](https://github.com/openai/codex/issues/42739) Windows 更新后本地 Projects 从侧栏消失（17 评论）**
   更新后 Projects 区显示为空但磁盘文件仍在，数据“丢失”观感引发用户恐慌。

7. **[#42484](https://github.com/openai/codex/issues/42484) `cua_node rename_staging` EPERM 死循环，吃掉 59 GB 内存并冻结 UI（6 评论）**
   最严重的性能/稳定性问题之一，资源失控风险高。

8. **[#46388](https://github.com/openai/codex/issues/46388) CLI 0.155.0 回归：Windows 沙箱初始化失败（5 评论）**
   明确版本回归（0.154.0 正常），对 0.155.x 用户是升级警告。

9. **[#20605](https://github.com/openai/codex/issues/20605) 需要热加载本地 MCP 工具变更（8 评论）**
   MCP server 更新工具后需重启会话，长期未解的集成效率痛点。

10. **[#44302](https://github.com/openai/codex/issues/44302) GPT-6 Astra Ultra 网络安全误拦截消耗配额（3 评论）**
    授权 QA 任务被安全检查误判中断，且已扣减 6% 周配额，涉及误判 + 配额双重问题。

---

## 四、重要 PR 进展

今日 PR 由 @copyberry[bot] 密集提交并关闭（多为已合入），主线是 **TUI transcript_v2 系统性重构**：

1. **[#46733](https://github.com/openai/codex/pull/46733) 交互式转录集成进 alternate-screen TUI** — 在 `features.transcript_v2` 开关下渲染历史与实时输出，支持滚动、选择、链接与分页。
2. **[#46739](https://github.com/openai/codex/pull/46739) 紧凑转录浏览与提示词导航** — 双 `Esc` 进入浏览模式，支持回溯历史 prompt。
3. **[#46734](https://github.com/openai/codex/pull/46734) 转录搜索** — `F3`/`/` 增量不区分大小写搜索，自动加载更早历史。
4. **[#46732](https://github.com/openai/codex/pull/46732) 转录选择与复制** — 鼠标/键盘（`Ctrl+Space`）选择、拖拽自动滚动、修改键点击打开链接。
5. **[#46708](https://github.com/openai/codex/pull/46708) 换行时保留逻辑源文本与样式** — 解决渲染换行导致复制内容失真的底层问题。
6. **[#46710](https://github.com/openai/codex/pull/46710) / [#46711](https://github.com/openai/codex/pull/46711) 恢复持久化转录的丰富工具详情并对齐实时输出** — 加载的历史会话不再退化为简略状态摘要。
7. **[#46750](https://github.com/openai/codex/pull/46750) 保留启动阶段草稿并就绪后提交** — 修复启动时输入丢失/提交被忽略。
8. **[#46712](https://github.com/openai/codex/pull/46712) 录制器容量压力下恢复工具调用元数据** — 防止孤儿输出映射耗尽容量导致 code mode 元数据缺失。
9. **[#46751](https://github.com/openai/codex/pull/46751) TUI 警告页脚与专用警告查看器** — 诊断信息不再污染对话流。
10. **[#46752](https://github.com/openai/codex/pull/46752) 新会话与 onboarding 动画 Logo** — 空闲区域渲染旋转 Logo（注意可能与 #44398 的动画干扰问题相关）。

另有配套优化：[#46719](https://github.com/openai/codex/pull/46719) 模块拆分、[#46720](https://github.com/openai/codex/pull/46720) 布局缓存、[#46714](https://github.com/openai/codex/pull/46714) 测试时间控制。

---

## 五、功能需求趋势

- **浏览器 / Computer Use 控制稳定性**：#43410、#44135、#44500、#44943、#46212 —— 最集中的功能类问题域，Windows 尤为严重。
- **TUI 体验与可用性**：搜索、复制、动画干扰、草稿保留 —— 今日 PR 已大规模响应。
- **Windows 平台质量**：约半数热点 Issue 带 `windows-os` 标签，是当前质量洼地。
- **MCP 集成深度**：工具热加载（#20605）、Upwork MCP 启动失败（#41437）。
- **配额 / 限流透明度**：容量误报（#43337）、远程 compact 容量错误（#28303）、Sol 上下文上限（#41325）。
- **多端协同**：Android Remote 与 VS Code 会话冲突（#40973）、语音功能（#38864、#46701）。

---

## 六、开发者关注点

1. **限流与容量误判是付费用户最大怨点**：Pro 用户配额充足却持续报错，且误拦截还会消耗配额（#44302），损害信任。
2. **Windows 桌面端可靠性不足**：发送卡死、项目消失、内存失控、沙箱回归，建议生产环境暂缓升级 0.155.0（#46388）。
3. **API-key 用户为二等公民**：浏览器控制等新功能不支持 apikey 认证（#43410），API 集成方受限。
4. **会话持久化与回放一致性**：历史转录丢失工具详情、计时器错乱（#19984），transcript_v2 重构正是对此的回应，值得观望 0.156.0 正式版。
5. **升级路径脆弱**：npm 更新后 app-server 守护进程版本错位且无法自愈（#46468），提示升级流程需更谨慎。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-09-20

## 📰 今日速览

今日发布 v0.62.0 nightly 版本，同时社区贡献活跃：AST 感知搜索工具、持久化任务追踪等重磅功能 PR 持续推进。子代理稳定性问题仍是讨论焦点，MAX_TURNS 误报成功（#22323）热度最高。模型版本被静默重写的问题在 PR 层面获得两处并行修复。

---

## 🚀 版本发布

**v0.62.0-nightly.20260920.gcfbcaa8df**（[Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260919.gcfbcaa8df...v0.62.0-nightly.20260920.gcfbcaa8df)）
- 例行 nightly 版本，由自动化机器人发布，无独立功能说明。

---

## 🔥 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** · P1 · Subagent 触达 MAX_TURNS 后误报 `success`/`GOAL`，掩盖了实际中断。讨论最热烈（13 评论），直接影响任务可靠性判断。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** · P1 · Generalist agent 无限挂起，简单操作（如建文件夹）也能挂 1 小时，8 个 👍 反映普遍性。临时方案是禁止模型使用 subagent。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** · P2 · 大型增强提案：零依赖 OS 级沙箱 + 执行后意图路由，充分释放 Gemini 3 的原生 bash 能力，兼顾安全。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** · P2 · EPIC：评估 AST 感知的文件读取/搜索/代码库映射。配套 PR #29396 已提交，是本周最值得关注的架构演进方向。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** · P2 · 模型几乎不会自主调用自定义 skills 和 subagents，仅在显式指令下使用，影响工作流自动化。

6. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** · P2 · 安全问题：Auto Memory 在脱敏前就把本地转录内容送入模型上下文，需确定性脱敏并减少日志。

7. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** / **[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)** · P2 · Auto Memory 系列缺陷：低信号会话无限重试、无效 inbox patch 被静默跳过，记忆系统质量成为近期集中修复点。

8. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** · P2 · 工具数超过 128 个触发 API 400 错误，重度扩展用户的硬瓶颈。

9. **[#21335](https://github.com/google-gemini/gemini-cli/issues/21335)** · P2 · `/compress` 压缩结果不持久化，session resume 后压缩白做，token 成本直接受影响。

10. **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)** · P2 · 模型在随机目录生成临时脚本，工作区清理成本高，社区对约束生成位置呼声明显。

---

## 🔧 重要 PR 进展

1. **[#29396](https://github.com/google-gemini/gemini-cli/pull/29396)** · feat: 新增 AST 感知 `ast_search` 工具，支持符号级精准导航，落地 #22745 EPIC。
2. **[#29393](https://github.com/google-gemini/gemini-cli/pull/29393)** · feat: 用持久化文件级 TrackerService（CRUD）替换 WriteToDo，解决 context rot 和跨会话记忆丢失（#18836）。
3. **[#29420](https://github.com/google-gemini/gemini-cli/pull/29420)** · fix: 显式指定 `gemini-3-pro-preview` 不再被静默改写为 3.1 版本。
4. **[#29222](https://github.com/google-gemini/gemini-cli/pull/29222)** · 已关闭 · 同类问题：固定 `gemini-2.5-flash` 不再被重写为 `gemini-3.5-flash`，Vertex 环境因此报错的用户受益。
5. **[#26540](https://github.com/google-gemini/gemini-cli/pull/26540)** · 已关闭 · P1 修复：策略引擎多个 bug，YOLO/AUTO_EDIT 模式下工具审批不持久、多余确认弹窗。
6. **[#29402](https://github.com/google-gemini/gemini-cli/pull/29402)** · P1 · 持久状态写入失败安全化（临时文件 + 原子 rename + fsync），防止 `state.json` 被截断清空。
7. **[#29411](https://github.com/google-gemini/gemini-cli/pull/29411)** · fix: `--resume` 改为按最近活动而非创建时间选择会话，避免恢复到过期的 spike 会话。
8. **[#29368](https://github.com/google-gemini/gemini-cli/pull/29368)** · P1 · ACP 会话按 ID 加载，即使无可恢复内容也能正确解析。
9. **[#29294](https://github.com/google-gemini/gemini-cli/pull/29294)** · fix: 修复后台命令执行期间输入导致的终端闪烁/撕裂（stdout 争用）。
10. **[#29292](https://github.com/google-gemini/gemini-cli/pull/29292)** · fix: `loadCheckpoint` 校验 `history` 必须为数组，防御损坏的 checkpoint 文件。

---

## 📈 功能需求趋势

- **Agent 架构演进（最热）**：AST 感知工具链、持久化任务追踪、subagent 轨迹可观测（#22598）、bash 原生沙箱（#19873）——从“能跑”走向“精准、可审计”。
- **记忆系统（Auto Memory）**：脱敏、重试策略、patch 校验集中提报，安全与质量双线推进。
- **上下文/Token 效率**：Tactful Extraction 精准读取（#19561）、`/compress` 持久化、task tracker 去上下文化。
- **安全与可控性**：阻止破坏性 git 操作（#22672）、确定性密钥脱敏、沙箱隔离。
- **会话/模型管理**：模型版本固定不被改写、resume 语义修正、workspace 级策略（#18397）。

---

## ⚠️ 开发者关注点（痛点）

1. **Subagent 可靠性**是当前最大痛点：挂起（#21409）、误报成功（#22323）、Wayland 下浏览器代理失败（#21983）、bug report 缺 subagent 上下文（#21763）。
2. **配置不生效**：Browser Agent 无视 `settings.json` 覆盖（#22267）、symlink 形式的 agent 文件不被识别（#20079）。
3. **工具数量上限 128**（#24246）限制重度自定义工作流。
4. **稳定性细节**：output hook 崩溃（#22186）、vite 交互式提示卡死（#22465）、终端 resize 闪烁（#21924）。
5. **工作区卫生**：临时脚本乱放（#23571）、清理成本高，社区希望有约束生成路径的机制。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-20 | 数据来源：github.com/github/copilot-cli**

---

## 一、今日速览

过去 24 小时无新版本发布，无 PR 活动，社区焦点完全集中在 Issue 讨论上。MCP 生态兼容性问题持续发酵——Figma 远程服务器加载失败（#4870）以 11 个 👍 成为热度最高的开放 Issue，另有 MCP 工具调用挂起（#4910）、重连通知刷屏（#4907）等多个新报告。长会话稳定性（OOM 崩溃 #4699）和上下文管理仍是用户的核心痛点。

---

## 二、版本发布

过去 24 小时无新 Release。

---

## 三、社区热点 Issues（Top 10）

1. **[#4870] MCP: Figma 远程服务器加载失败**（OPEN | 👍 11 | 💬 7）
   Figma 官方 MCP 服务器在 CLI 中因 `server/discover` 返回 `-32601` 被判定为致命失败，但同样的服务器在 VS Code 中工作正常。暴露了 CLI 的 MCP 发现协议比 VS Code 更严格，兼容性问题影响所有 Figma 用户。
   链接：github.com/github/copilot-cli/issues/4870

2. **[#4699] 长会话 OOM 崩溃，crash dump 污染用户 cwd**（OPEN | 👍 6 | 💬 5）
   `--resume` 长会话在 4 GiB 堆上限反复崩溃（14 小时内 3 次），且 Node 诊断报告直接写入当前工作目录，可能被误提交进 git。双重问题，值得官方优先处理。
   链接：github.com/github/copilot-cli/issues/4699

3. **[#4069] WSL2 下 TUI 中途卡死**（CLOSED | 👍 9 | 💬 8）
   回合执行中屏幕清空、输入失效、Ctrl+C/Ctrl+\ 均无响应，底层为 Rust JSON-RPC 传输层的 EIO/EPIPE 错误。WSL2 + Windows Terminal 组合的高频痛点。
   链接：github.com/github/copilot-cli/issues/4069

4. **[#4910] 非交互模式下 MCP 工具调用挂起直至空闲超时**（OPEN | 2026-09-19 新建）
   Azure MCP 工具在发出首个进度通知后无结果返回，5 分钟后 WebSocket 因 idle timeout 关闭；同一调用在交互模式下正常。影响 CI/脚本化场景的可靠性。
   链接：github.com/github/copilot-cli/issues/4910

5. **[#4905] 桌面版会话数分钟内失效**（OPEN | 👍 2 | 💬 4）
   "GitHub credential registration is no longer available" 导致 github-mcp-server 目录过期且致命，捆绑 CLI 1.0.84-5 / 桌面版 1.1.22。影响桌面版核心工作流。
   链接：github.com/github/copilot-cli/issues/4905

6. **[#107] Alpine Linux 下工具调用触发段错误**（CLOSED | 💬 16）
   Docker alpine 容器内任何工具调用均 Segfault，16 条评论的长尾讨论，容器化部署用户的经典问题。
   链接：github.com/github/copilot-cli/issues/107

7. **[#1381] Rewind 功能强依赖 git 仓库**（CLOSED | 👍 11）
   使用 jj 等非 git 版本控制系统的用户无法使用 Rewind，而 VS Code 版 Copilot 无此限制。功能对齐诉求强烈。
   链接：github.com/github/copilot-cli/issues/1381

8. **[#3355] Claude Opus 4.6 上下文被限制在 200K（模型原生 1M）**（CLOSED | 👍 4）
   80% 的上下文能力被削减导致深度技术会话频繁自动压缩，社区持续呼吁开放可配置上下文窗口。
   链接：github.com/github/copilot-cli/issues/3355

9. **[#3589] 多个 hook 的 additionalContext 仅最后一个生效**（OPEN | 2026-09-20 更新）
   sessionStart/subagentStart hook 输出被后值覆盖而非合并，hooks 高级用户的工作流受损，今日仍有更新。
   链接：github.com/github/copilot-cli/issues/3589

10. **[#1675] Checkpoint 恢复执行 git clean -fd 永久删除未跟踪文件**（CLOSED | 💬 4）
    恢复检查点会静默清空所有 untracked 文件——数据丢失级别的严重问题，历史上引发大量讨论。
    链接：github.com/github/copilot-cli/issues/1675

---

## 四、重要 PR 进展

过去 24 小时无 PR 更新（共 0 条）。

---

## 五、功能需求趋势

- **MCP 生态兼容性**：Figma 远程服务器、Azure 工具挂起、子代理 stdio 传输 4 秒断开（#2892）、重连通知刷屏（#4907）——MCP 是当前问题最集中的领域，社区期望 CLI 达到与 VS Code 同级的兼容性。
- **上下文窗口与模型能力开放**：Opus 4.6 的 1M 上下文被限制在 200K（#3355）、`contextTier=long_context` 启动时不生效（#3481）、自动模型选择（#1801，👍 10）。
- **非 git 环境支持**：Rewind 依赖 git（#1381）、非 repo 根目录读取配置失败（#4765）、jj 等替代 VCS 用户被排除在外。
- **长会话与会话管理**：OOM 崩溃（#4699）、session-store 的 cwd/branch 字段丢失（#2655）、子代理并发状态损坏（#2543）。
- **Windows/WSL 平台体验**：tmux 渲染回归（#3439）、WSL 卡死（#4069）、复制带 BOM（#2571）、Ctrl+G 编辑器集成失败（#3733）等持续出现。
- **Hooks 与自动化增强**：多 hook 上下文合并（#3589）、preToolUse "ask" 拒绝时的 steering 消息丢失（#4237）。

---

## 六、开发者关注点

1. **稳定性优先于新功能**：OOM、段错误、TUI 卡死、会话状态损坏等崩溃类问题在热度榜中占比最高，社区对长时运行可靠性的诉求强烈。
2. **脚本化/CI 场景仍是二等公民**：非交互模式下 MCP 挂起、contextTier 配置不生效，自动化工作流用户反复受挫。
3. **数据安全隐患**：crash dump 写入 cwd（#4699）、git clean -fd 删文件（#1675），用户希望破坏性操作更透明、可配置。
4. **配置发现逻辑脆弱**：工作目录不在 repo 根时配置读取失败（#4765），monorepo/多 repo 工作区的用户影响明显。
5. **大指令文件与压缩循环**：大型 copilot-instructions.md 触发无限自动压缩（#3621），上下文管理策略需要更智能。

---

*本报告基于过去 24 小时 GitHub 公开数据自动生成。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-09-20 | 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)**

---

## 1. 今日速览

今日无新版本发布。过去 24 小时内出现**大量历史 Issue 被批量关闭**的现象（15 条更新 Issue 全部标记为 CLOSED，且多为 1-3 月创建的旧 Issue），推测为官方进行 Issue 清理或批量标记处理，建议关注是否有对应的修复说明跟进。PR 方面更新较少（5 条），主要围绕 Windows 编码兼容性与 Shell 体验优化，其中两条修复 PR 仍处 Open 状态。

---

## 2. 版本发布

过去 24 小时无新 Release。（省略详情）

---

## 3. 社区热点 Issues

> 注：以下 Issue 均在今日被关闭，多数已随版本迭代修复。

1. **[#773](https://github.com/MoonshotAI/kimi-cli/issues/773) Windows 输入中文即崩溃（'ascii' codec 编码错误）**
   Windows 平台致命兼容性 bug，任何非 ASCII 输入导致程序崩溃，8 条评论、长期悬而未决，是 Windows 用户最高频痛点之一。

2. **[#1414](https://github.com/MoonshotAI/kimi-cli/issues/1414) 权限弹框中增加“切换 YOLO 模式”选项** 👍 3
   交互效率类需求中获得最多点赞，反映用户希望在确认权限时一键进入自动模式，减少打断。

3. **[#1321](https://github.com/MoonshotAI/kimi-cli/issues/1321) 系统环境变量未做防御性清洗导致 CLI 整体失效**
   稳健性问题：`~/.kimi/` 配置受系统变量污染后整个服务不可用，暴露出配置读取缺乏容错。

4. **[#729](https://github.com/MoonshotAI/kimi-cli/issues/729) 命令执行确认中增加 Skip 选项**
   有副作用的命令无法跳过，导致工作流中断；同时希望 VSCode 插件以等宽字体显示命令。

5. **[#1289](https://github.com/MoonshotAI/kimi-cli/issues/1289) uname 版本号尾部空格导致 HTTP header 非法字符**
   典型的环境信息采集未做清洗问题，直接导致请求失败，与 #1321 同属防御性编程缺失。

6. **[#1429](https://github.com/MoonshotAI/kimi-cli/issues/1429) Windows 并发写入导致 Permission denied [Errno 13]**
   Windows 文件锁问题，影响多任务场景下的稳定性。

7. **[#1332](https://github.com/MoonshotAI/kimi-cli/issues/1332) Ubuntu 22.04 升级 1.17.0 后无法启动**
   Linux 升级路径上的破坏性变更，升级兼容性值得关注。

8. **[#1482](https://github.com/MoonshotAI/kimi-cli/issues/1482) 多任务并发支持 + 路径选择体验差**
   反映两大诉求：会话并发能力，以及 @ 文件路径不支持模糊匹配。

9. **[#1487](https://github.com/MoonshotAI/kimi-cli/issues/1487) HTTPS MCP 客户端缺少标准 User-Agent header**
   部分 MCP 服务端校验 UA，导致连接被拒，影响 MCP 生态兼容性。

10. **[#1475](https://github.com/MoonshotAI/kimi-cli/issues/1475) v1.15.0 起 prompt/标题不再显示当前目录（回归）**
    典型的功能回归反馈，显示工作目录是重度用户的高频依赖。

---

## 4. 重要 PR 进展

> 今日仅 5 条 PR 更新，全部来自核心贡献者 @he-yufeng。

1. **[#2183](https://github.com/MoonshotAI/kimi-cli/pull/2183) [OPEN] Shell 模式下提前附加粘贴的图片路径**
   提交 prompt 时立即读取本地图片并以 `ImageURLPart` 发送，避免路径过期失效，提升多模态输入可靠性。

2. **[#2350](https://github.com/MoonshotAI/kimi-cli/pull/2350) [OPEN] 容忍非 UTF-8 的 worker 输出**
   修复 Windows 子进程输出 cp1252 等本地编码字节时，UnicodeDecodeError 掩盖真实崩溃原因的问题。与 Issue #773 的编码痛点同源，值得重点关注。

3. **[#2181](https://github.com/MoonshotAI/kimi-cli/issues/2181) [CLOSED] 为 Windows 二进制添加版本信息**
   从 `pyproject.toml` 生成 PyInstaller version-info，并加入 CI 断言，确保发布产物带非空 FileVersionInfo。

4. **[#2200](https://github.com/MoonshotAI/kimi-cli/pull/2200) [CLOSED] 长耗时命令自动延长 Shell 超时**
   对 git clone/submodule、包安装、构建等慢命令自动扩展超时，普通命令保持 60s 默认值，平衡安全与效率。

5. **[#2259](https://github.com/MoonshotAI/kimi-cli/pull/2259) [CLOSED] stdio MCP 的 stderr 重定向至日志**
   将 MCP 子进程 stderr 写入 `~/.kimi/logs/mcp/<server>.log`，不再污染交互终端，改善 MCP 调试体验。

---

## 5. 功能需求趋势

- **Windows 平台兼容性**是第一重灾区：编码崩溃（#773）、并发文件锁（#1429）、Gitbash 启动失败（#1436），PR #2350 正在系统性解决编码问题。
- **交互流程自动化**：Skip 选项（#729）、YOLO 模式快速切换（#1414）、多任务并发（#1482），用户强烈希望减少人工打断。
- **Shell/终端体验深化**：伪 cwd 持久化 `cd`（#766）、命令折叠长度可配置（#1492）、超时自适应（PR #2200）。
- **MCP 生态兼容**：User-Agent（#1487）、stderr 日志治理（PR #2259）。
- **信息展示与可观测性**：prompt 显示当前目录（#1475）、Web UI 代码块复制（#1340）。

## 6. 开发者关注点（痛点总结）

1. **编码与环境防御性不足**：非 UTF-8 输出、环境变量污染、uname 空格等外部输入均可能导致整体故障，鲁棒性是最集中的批评点。
2. **升级回归风险**：v1.15.0 目录显示回归、v1.17.0 Ubuntu 启动失败，版本升级缺乏平滑保障。
3. **Windows 一等公民支持**仍需加强，多条高评论 Issue 来自 Windows 用户。
4. **批量关闭历史 Issue 的沟通透明度**：建议官方在关闭时附修复版本说明，避免用户困惑。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-09-20

## 📰 今日速览

今日无新版本发布，社区活动集中在 Issue 讨论与 PR 推进上。**OpenCode Zen 免费额度问题**成为当天最热话题，多个用户报告 "Free usage exceeded" 及重试时间异常递增（#50093、#49755）。同时，多位活跃贡献者（@rekram1-node、@RubenPari）提交了一批高质量修复与功能 PR，覆盖 CLI 稳健性、工具可用性通告等核心改进。

---

## 🌟 社区热点 Issues

1. **#50093 — 免费额度超限且重试时间跨模型不断升级**（OPEN，今日新建）
   用户在多个 Zen 免费模型间切换后，重试等待时间从 6h16m 持续攀升，疑似惩罚机制跨模型累计，直接影响免费用户体验。
   [链接](https://github.com/anomalyco/opencode/issues/50093)

2. **#49755 — 新 Console 无法加载 workspace 预算，误报 "Free usage exceeded"**（OPEN）
   用户 24 小时内未使用免费模型却被拦截，且 Console 预算页面加载失败，可能是同一后端问题，获 2 👍。
   [链接](https://github.com/anomalyco/opencode/issues/49755)

3. **#49893 — Go 订阅续费的支付宝重新授权失败**（OPEN）
   Stripe 支付流程中 Alipay 授权启动失败，涉及付费用户续订，商业侧优先级较高。
   [链接](https://github.com/anomalyco/opencode/issues/49893)

4. **#35432 — 配置 `tool_call: false` 无法禁用工具**（OPEN，5 评论）
   Prompt loop 无条件注入 SessionTools，导致不支持 tool-call 的模型（如 morphllm）出错，是长期未解决的配置语义问题。
   [链接](https://github.com/anomalyco/opencode/issues/35432)

5. **#47918 — 请求通过 ACP 暴露 per-session 自动审批（Yolo）**（OPEN，3 评论）
   希望通过 ACP `configOptions` 可逆地控制会话级自动审批，反映远程客户端用户对权限控制的强需求。
   [链接](https://github.com/anomalyco/opencode/issues/47918)

6. **#49486 — TUI 中 LaTeX 数学公式以原始文本显示**（OPEN）
   `$...$` / `$$...$$` 公式不渲染，对学术/逻辑推理场景用户影响明显。
   [链接](https://github.com/anomalyco/opencode/issues/49486)

7. **#13388 — ACP over WebSocket 远程访问**（CLOSED，9 评论 / 9 👍）
   长期讨论的热门功能请求今日关闭，暗示已实现或已有替代方案，是 ACP 远程生态的标志性进展。
   [链接](https://github.com/anomalyco/opencode/issues/13388)

8. **#34652 — 原生 Anthropic provider 嵌套数组参数触发 SchemaError**（CLOSED，6 评论）
   模型返回 JSON 字符串而非真实数组时 `todowrite` 硬失败，仅原生 Anthropic provider 受影响，已修复关闭。
   [链接](https://github.com/anomalyco/opencode/issues/34652)

9. **#20699 — Agent 对简单消息产生重复回复**（CLOSED，7 评论）
   隐藏的第一条响应 + 空白第二条响应的诡异行为，涉及消息流核心逻辑，已关闭。
   [链接](https://github.com/anomalyco/opencode/issues/20699)

10. **#38113 — Serve 模式无法区分 git worktrees**（CLOSED）
    多个 worktree 会话均显示同名 project，远程/Web 使用场景下定位困难，已关闭（与今日 PR #49560 的 `/move` 改进方向相关）。
    [链接](https://github.com/anomalyco/opencode/issues/38113)

---

## 🔧 重要 PR 进展

1. **#50067 — feat(core): 通告顶层工具可用性变更**
   追踪展示给模型的工具集，后续请求仅播报新增/移除的工具，减少 token 浪费并防止调用已移除工具。
   [链接](https://github.com/anomalyco/opencode/pull/50067)

2. **#50068 — fix(cli): 加固非交互式运行**
   `opencode run` 退出码改为基于实际执行结果、自动取消非交互表单、处理 `--auto` 下子会话权限阻塞——CI/脚本场景的重要改进。
   [链接](https://github.com/anomalyco/opencode/pull/50068)

3. **#49560 — fix(tui): `/move` 会话支持自定义目标路径**
   一个 PR 关联修复 4 个 Issue，允许会话移动到项目 worktree 之外的路径。
   [链接](https://github.com/anomalyco/opencode/pull/49560)

4. **#32370 — feat(tui): `linux_clipboard_selection` 支持 primary buffer**
   Linux 用户期待已久的 X11 primary selection 剪贴板支持，含 wl-copy MIME 修复，覆盖多个旧 PR。
   [链接](https://github.com/anomalyco/opencode/pull/32370)

5. **#50075 — fix(cli): service restart 无法停止旧进程时 fail closed**
   修复将 2s 健康检查超时误判为“无服务”而复用旧实例的竞态问题。
   [链接](https://github.com/anomalyco/opencode/pull/50075)

6. **#50071 — fix(session): 暴露 drain 失败 + @mention 技能权限校验**
   修复因任意 interrupt 存在而掩盖真实失败的退出分类逻辑，安全相关。
   [链接](https://github.com/anomalyco/opencode/pull/50071)

7. **#50052 — feat(tui): `opencode -s` 直接打开会话选择器**
   不带 session ID 时打开 `/sessions` 列表，v2 架构下的 UX 改进。
   [链接](https://github.com/anomalyco/opencode/pull/50052)

8. **#48435 — refactor(app): 时间线行协调避免深度相等比较**
   用 `Equal.equals` 逐行比较造成大量哈希与遍历开销，此重构针对大型会话的渲染性能。
   [链接](https://github.com/anomalyco/opencode/pull/48435)

9. **#50074 / #50069 — 桌面端标签栏显隐命令 & 变体菜单去重**（均已合并）
   两个同日合入的小型 UX 修复，显示迭代节奏健康。
   [链接](https://github.com/anomalyco/opencode/pull/50074)

10. **#49863 — fix(plugin): 支持包 subpath exports**
    修复裸包子路径（如 `pkg/subpath`）在插件解析中的兼容性问题。
    [链接](https://github.com/anomalyco/opencode/pull/49863)

---

## 📈 功能需求趋势

- **ACP / 远程访问深化**：WebSocket 传输（#13388）、per-session Yolo 审批（#47918）表明编辑器/远程客户端集成是当前最强需求主线。
- **Zen 计费与免费额度**：当日多个新 Issue 聚焦免费额度误判、重试惩罚、支付宝授权（#50093、#49755、#49893），商业化配套问题集中爆发。
- **TUI/桌面端 UX 打磨**：LaTeX 渲染（#49486）、滚动导航（#38114）、worktree 区分（#38113）等体验细节需求持续。
- **生态扩展**：Ecosystem 页面持续收到第三方项目收录请求（#50083 oos、#38146 Claudexor、#50058 Cruise 插件）。
- **企业级能力**：托管 OAuth 连接器（Google/Slack/Notion，#38095）、离线/air-gap 支持（#43496 tree-sitter 打包）。

---

## ⚠️ 开发者关注点

1. **Provider 兼容性碎片化**：原生 Anthropic 的 SchemaError（#34652）、自定义 SSE event 崩溃（#38106）、`tool_call: false` 失效（#35432）——不同 provider 行为差异是 Bug 高发区。
2. **非交互/自动化场景**：CLI 退出码、权限阻塞、服务重启竞态等脚本化使用问题正被系统性修复（#50068、#50075、#50071）。
3. **稳定性与性能**：大文件导致 TUI 冻结（#38201）、Mac 启动挂起（#38110）、事件监听器泄漏（#35499）、时间线深度比较开销（#48435）仍是痛点。
4. **Windows 安装体验**：PE loader 错误、版本不兼容等安装失败问题（#38169、#38178）需关注。
5. **计费可靠性**：免费额度误判 + 支付授权失败叠加出现，建议官方优先排查 Zen 后端状态。

---

*数据截至 2026-09-20，来源：anomalyco/opencode GitHub 公开数据。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-20

## 1. 今日速览

v0.24.1 正式版发布，包含一项 Breaking Change（goal 模块停止发送 `active_goal` 流事件），CLI、Desktop 和 TypeScript SDK 同步更新。沙箱化架构迎来重大进展：bwrap 工具级执行边界（#12267/#12269）与 Landlock 后备方案（#12278）相继提交，安全执行体系逐步成形。社区侧，Web Shell 打包缺陷（P1）和权限检查安全漏洞（#12246）是当前最受关注的问题。

## 2. 版本发布

- **[v0.24.1](https://github.com/QwenLM/qwen-code/releases)** — 正式版
  - ⚠️ Breaking Change: `refactor(goal)!: stop emitting the active_goal stream event`（[#12181](https://github.com/QwenLM/qwen-code/pull/12181)），依赖该流事件的集成方需注意适配
  - Workflows 相关新特性
- **[Qwen Code Desktop v0.24.1](https://github.com/QwenLM/qwen-code/releases)** — 桌面端同步发布，包含 ACP 权限队列按会话隔离（#11802）及 channels 共享输出模式等改进
- **[sdk-typescript v0.1.13](https://github.com/QwenLM/qwen-code/releases)** — SDK 捆绑 CLI 0.24.1
- **v0.24.1-nightly.20260919** — 每日构建，含 CI Docker 缓存回收修复（#12135）

## 3. 社区热点 Issues

1. **[#11872](https://github.com/QwenLM/qwen-code/issues/11872)**（P1）Web Terminal 报 "PTY not available"：`@lydell/node-pty` 声明但未打包，macOS 代码签名阻止本地 prebuilds 加载，影响 Web Shell 核心可用性。11 条评论，讨论最热。
2. **[#12246](https://github.com/QwenLM/qwen-code/issues/12246)**（P1·安全）权限检查中前导引号读取遗漏 `;` 导致后台化 `cd` 被误判为前台，受保护写入路径解析错误——潜在提权漏洞，需优先关注。
3. **[#8182](https://github.com/QwenLM/qwen-code/issues/8182)**（P2）daemon 为每个 ACP 子进程授予主机内存 50% 上限且不按子进程数均分，多会话场景下内存浪费严重，长期挂单。
4. **[#12185](https://github.com/QwenLM/qwen-code/issues/12185)**（P1）`@qwen-code/web-shell` 发布包存在无法解析的 `@/` 类型导入并内联了六个声明依赖，npm 用户直接受影响，配套修复 PR #12191 进行中。
5. **[#11847](https://github.com/QwenLM/qwen-code/issues/11847)**（P3）会话回顾摘要固定用英文生成，无法匹配对话语言，非英语用户本地化体验痛点。
6. **[#6721](https://github.com/QwenLM/qwen-code/issues/6721)**（P2）延迟工具发现导致 prompt cache 前缀失效，直接推高 token 成本，性能敏感用户高度关注。
7. **[#12270](https://github.com/QwenLM/qwen-code/issues/12270)**（P2）#12067 引入的 bwrap 执行测试套件在 Windows 上运行并抛出 "Sandbox assets are missing"，nightly Windows lane 持续红。
8. **[#12287](https://github.com/QwenLM/qwen-code/issues/12287)**（P2）Workflow retry-from-history 加固跟进：原 PR 经六轮 autofix 膨胀至 1900 行，拆分重开为 #12291，反映大型特性 PR 的评审流程演化。
9. **[#12220](https://github.com/QwenLM/qwen-code/issues/12220)**（P2）LSP 服务器失败被吞为空数组，报“无结果”误导排障，错误处理粒度问题。
10. **[#12272](https://github.com/QwenLM/qwen-code/issues/12272)**（P3）`agent` 工具描述约 2000 tokens 且每轮发送，token 预算浪费引发社区共鸣。

## 4. 重要 PR 进展

1. **[#12267](https://github.com/QwenLM/qwen-code/pull/12267)** / **[#12269](https://github.com/QwenLM/qwen-code/pull/12269)** / **[#12278](https://github.com/QwenLM/qwen-code/pull/12278)**（@doudouOUC）沙箱三部曲：将 bwrap 沙箱下移到工具执行层、运行时工具路由接入 bwrap 适配器、新增 Landlock 文件系统后备后端——本日最重要的架构演进。
2. **[#12291](https://github.com/QwenLM/qwen-code/pull/12291)**（@qqqys）基于持久化历史的 workflow 重试/重跑，取代膨胀的 #12190。
3. **[#11874](https://github.com/QwenLM/qwen-code/pull/11874)**（@yiliang114）`qwen batch` 命令 + headless `--batch` 模式接入 DashScope Batch API（半价计费、独立配额），配套探针测试拆分至 [#12297](https://github.com/QwenLM/qwen-code/pull/12297)。
4. **[#12292](https://github.com/QwenLM/qwen-code/pull/12292)**（@qqqys）跨会话入站消息按目标会话的设置逐条裁决，替代整进程单一设置读取。
5. **[#12266](https://github.com/QwenLM/qwen-code/pull/12266)**（@wenshao）`--token-qr` 逃生开关：非交互终端下可显式输出含 bearer token 的 QR 码。
6. **[#12300](https://github.com/QwenLM/qwen-code/pull/12300)**（@tanzhenxin）Browser Use 支持多个 Chrome 扩展 ID 集合，改善扩展升级兼容性。
7. **[#12299](https://github.com/QwenLM/qwen-code/pull/12299)**（@ytahdn）Web Shell 将 workspace/git chips 移出 composer 工具栏，交互布局重构。
8. **[#12294](https://github.com/QwenLM/qwen-code/pull/12294)**（@qqqys）Live Voice 通话中显示麦克风电平表。
9. **[#10835](https://github.com/QwenLM/qwen-code/pull/10835)**（@yiliang114）MCP 工具返回的超大图片按 image-view 预算缩放，对应 #12290 相关问题域。
10. **[#12191](https://github.com/QwenLM/qwen-code/pull/12191)**（@dijedontahiri）修复 web-shell 发布包产物缺陷，Draft 状态、验收仍阻塞——P1 问题 #12185 的直接修复。

## 5. 功能需求趋势

- **安全与沙箱执行**：bwrap/Landlock 工具级沙箱、权限路径解析安全，是当前最活跃的开发主线
- **Token/上下文成本优化**：prompt cache 失效（#6721）、agent 描述过长（#12272）、`/context` 统计准确性（#12033/#12048），context-performance 路线图持续推进
- **Web Shell / Desktop 体验**：打包正确性（#12185）、会话总览、UI 布局、Live Voice
- **Workflow 自动化**：retry-from-history、后台自动化路线图
- **批量与成本敏感 API**：DashScope Batch 集成
- **本地化**：新增阿塞拜疆语 UI（#12283，翻译已就绪）

## 6. 开发者关注点

- **内存与资源管理**：ACP 子进程内存分配不均（#8182）、Local Control EADDRINUSE（#12277）在多会话/daemon 场景下高频出现
- **错误吞噬与可观测性**：LSP 失败静默为空结果（#12220）、上下文遥测在非函数工具存在时全量丢失（#12048）
- **平台兼容性**：macOS 打包/签名问题（#11872）、Windows CI 因沙箱测试持续红（#12270）
- **CI 稳定性**：E2E 瞬态失败（#12274）、Docker 缓存回收、review adapter 依赖钉扎（#12275）消耗大量维护精力
- **Breaking Change 沟通**：v0.24.1 的流事件移除提示集成方关注 release notes 迁移说明

---
*数据截至 2026-09-20 · 来源: github.com/QwenLM/qwen-code*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-09-20

> 数据来源：[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)

## 一、今日速览

项目处于 v0.10.0 密集开发阶段，多个规划 Issue 在 09-19 完成了状态更新：ACP 配置 bug 已修复并通过夜间版验证，app-server 的 Runtime 客户端转换取得实质进展。维护者 @AdityaVG13 持续高产，今天提交了会话导入同步修复（#6369）并关闭了多项 TUI 修复 PR。整体节奏是“修 bug + 推进 0.10.0 重设计”，无新版本发布。

## 二、版本发布

过去 24 小时无新 Release。注意 #6094 明确说明：0.10.0 尚在开发中，源码版本号变更不代表包或二进制已发布。

## 三、社区热点 Issues（Top 10）

1. **[#6094](https://github.com/Hmbown/Codewhale/issues/6094) — v0.10.0 起点规划**：官方路线图，明确 0.9.14 候选版被更大的重设计取代，是了解项目方向的首要入口。
2. **[#6310](https://github.com/Hmbown/Codewhale/issues/6310) — ACP 后续：空终端响应与 Full Access 发现**：核心 ACP 配置/posture bug 已修复，报告者在 Paseo 中验证了夜间版（socket 创建、零多余审批往返），8 条评论讨论活跃。
3. **[#6367](https://github.com/Hmbown/Codewhale/issues/6367) — `/branch` 分支结构被保存路径丢弃**：分支功能表面正常但快照保存会静默重建 journal、丢弃废弃分支，数据完整性级 bug，已关闭并引出 PR #6369。
4. **[#6362](https://github.com/Hmbown/Codewhale/issues/6362) — 测试线程栈溢出导致 lib 套件中止**：`configured_model_api_tests` 溢出触发 SIGABRT，阻塞 `cargo test` 工作区门禁，影响所有贡献者的 CI 体验。
5. **[#6236](https://github.com/Hmbown/Codewhale/issues/6236) — headless 模式 `request_user_input` 永久阻塞**：无响应者存在且无任何提示，headless 自动化场景的可靠性问题，已修复关闭。
6. **[#6228](https://github.com/Hmbown/Codewhale/issues/6228) — 部分选择复制粘贴整格内容**：#6156 引入的回归，`Ctrl+C` 无法复制选中文本片段，日常使用体验痛点，已关闭。
7. **[#6139](https://github.com/Hmbown/Codewhale/issues/6139) — App-server Runtime 客户端转换收尾**：HTTP/proxy 路径已可连接真实 Runtime，剩余 `/tool` 本地 Runtime 路径的转换与验收。
8. **[#5838](https://github.com/Hmbown/Codewhale/issues/5838) — Codewhale Studio：VS Code fork 成为主桌面端**：IDE 三阶段计划锚点，将取代 Tauri 壳，标志产品形态重大转向。
9. **[#5837](https://github.com/Hmbown/Codewhale/issues/5837) — Lambda microVM Computer 镜像**：Daytona 出局、AWS Lambda microVM 入局，附 openvscode-server 边车，云执行底座重构。
10. **[#5848](https://github.com/Hmbown/Codewhale/issues/5848) — Ollama 实时目录验收**：#6002 已完成提取，剩余基于真实本地 Ollama 服务器的安装版本验收。

> 另注：#6366 为医疗账单广告 spam，已正确关闭。

## 四、重要 PR 进展（Top 10）

1. **[#6361](https://github.com/Hmbown/Codewhale/pull/6361) [OPEN]** — Runtime API 三合一：终端字节流（#34）、流恢复 + 幂等提交（#76）、agent 数量固定（#12），解锁 Core 侧两个阻塞项。
2. **[#6369](https://github.com/Hmbown/Codewhale/pull/6369) [OPEN]** — 修复外部会话导入后引擎未同步：`/resume` 和内联 JSON 导入装入新会话后引擎仍停留在旧历史，是 #6367 的后续。
3. **[#6365](https://github.com/Hmbown/Codewhale/pull/6365) [CLOSED]** — 基于“绘制列”的转录复制修复 + composer 制表符，并搭建 ink 测试基础设施。
4. **[#6363](https://github.com/Hmbown/Codewhale/pull/6363) [CLOSED]** — 六个单一目的 commit 批次：视觉行光标、历史 detach、显式 ink、headless 输入暂扣等独立修复，均可单独摘取。
5. **[#6333](https://github.com/Hmbown/Codewhale/pull/6333) [CLOSED]** — 安全加固：所有未文档化 `unsafe` 补充 SAFETY 契约、异步代码改用 `tokio::fs`、递归遍历加深度/读取预算。
6. **[#6345](https://github.com/Hmbown/Codewhale/pull/6345) [OPEN]** — dependabot：jsonschema 0.52.1 → 0.56.0。
7. **[#6342](https://github.com/Hmbown/Codewhale/pull/6342) / [#6343](https://github.com/Hmbown/Codewhale/pull/6343) [OPEN]** — clap 生态升级：clap_complete 4.6.11、clap 4.6.7。
8. **[#6339](https://github.com/Hmbown/Codewhale/pull/6339) [OPEN]** — rust-i18n-support 4.2.2，i18n 支持维护。
9. **[#6357](https://github.com/Hmbown/Codewhale/pull/6357) [OPEN]** — web 端 autoprefixer 10.6.1，修复 grid gap 问题。
10. **[#6355](https://github.com/Hmbown/Codewhale/pull/6355) [CLOSED]** — @types/node 26.6.1，前端类型定义更新。

## 五、功能需求趋势

- **v0.10.0 重设计是绝对主线**：#6094、#6310、#6139、#5848、#5847、#5836 均在同日更新规划状态，核心围绕 Runtime 客户端转换、ACP 修复与验收。
- **IDE / 桌面化**：VS Code fork（Codewhale Studio）+ openvscode-server 边车 + Lambda microVM，产品从 TUI 向完整桌面/云端工作台演进。
- **本地模型集成**：Ollama 实时目录与安装版本验收仍是开放项。
- **会话与分支数据完整性**：journal/快照/导入路径的一致性成为高频修复区域。
- **云执行底座迁移**：Daytona 退役、Lambda microVM 引入，legacy launcher 待移除（#5836）。

## 六、开发者关注点

- **Headless/自动化可靠性**：`exec` 模式下 `request_user_input` 无提示阻塞（#6236）反映无人值守场景的健壮性诉求。
- **终端交互细节**：部分选择复制、多行 prompt 的上键行为（#6291 会覆盖已输入内容）、主题黑底黑字（#6234）等 UX 痛点密集上报，多数本周期已修复。
- **测试基础设施脆弱**：测试线程栈溢出使整个 lib 套件 SIGABRT（#6362），阻塞工作区门禁，亟需优先处理。
- **Rust 安全规范**：unsafe 文档化、异步 I/O、递归深度预算（PR #6333）显示项目在系统性提升代码安全水位。
- **配置模型简化**：Fleet 与 agent 概念混淆（#6038）已决策保留两者但需解决命名与字段重复，配置体验仍是摩擦点。

---
*本报告基于过去 24 小时 GitHub 活动数据自动汇总。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-09-20

## 📌 今日速览

Pi **v0.86.0** 正式发布，最重磅的功能是 **Prompt Cache Warming**（提示缓存保活），可在长时间工具调用期间保持有价值的提示缓存。发布后社区反应迅速，围绕压缩（compaction）机制的多个问题被密集报告和修复，其中 #9789 直指 0.86.0 中压缩后工具失效的新回归。今天 PR 活跃度极高，13 个更新 PR 中有 10 个已合入。

---

## 🚀 版本发布

### v0.86.0（[Release](https://github.com/earendil-works/pi/releases/tag/v0.86.0)）

- **Prompt cache warming**：在长时间工具运行期间（可选地包括空闲时）通过成本感知的刷新策略保持提示缓存存活，详见 [Cache Warming 文档](https://github.com/earendil-works/pi/blob/v0.86.0/packages/coding-agent/docs/settings.md#cache-warming)。目前仅支持 Anthropic 显式缓存。对应 PR #9668。
- 内置 Bug 报告功能增强。

---

## 🔥 社区热点 Issues

1. **#5653 [OPEN] 迁移离开 Shrinkwrap** — 安装 `pi-ai` 与 `pi-coding-agent` 会导致 `pi-ai` 双份拷贝共存，由于 provider 注册表是模块级 `Map`，两份拷贝互不感知，破坏扩展生态。[Issue](https://github.com/earendil-works/pi/issues/5653)｜20 条评论，讨论持续 3 个月，是包管理架构的核心争议。

2. **#6665 [OPEN] TUI 流式输出时占满一个 CPU 核心** — 未缓存的 `Intl.Segmenter` + 每个 chunk 重建 Markdown 导致长会话渲染吃满单核。[Issue](https://github.com/earendil-works/pi/issues/6665)｜6 👍，性能类问题中呼声最高。

3. **#8620 [CLOSED] 0.84.3 打包 CLI 导致所有全局扩展加载失败** — `Cannot find module` 错误影响面广，凸显打包方式对扩展生态的破坏性影响。[Issue](https://github.com/earendil-works/pi/issues/8620)

4. **#7739 [OPEN] 设定对标 jcode 的启动时间与内存预算** — 社区要求正式确立性能预算并公开基准数据，缩小与竞品的启动差距。[Issue](https://github.com/earendil-works/pi/issues/7739)

5. **#2616 [CLOSED] SessionManager 全同步 I/O 阻碍异步/数据库持久化** — `appendFileSync` 等阻塞调用贯穿 AgentSession，是嵌入式集成的长期痛点。[Issue](https://github.com/earendil-works/pi/issues/2616)

6. **#9391 [CLOSED] 压缩后过期签名 thinking 块每轮被重放** — Anthropic 每次请求都报 `prefix_binding_mismatch`，直接影响长会话可用性。[Issue](https://github.com/earendil-works/pi/issues/9391)

7. **#9051 [OPEN] session_compact 自定义消息错过立即溢出重试** — 扩展恢复的上下文在重试回合中缺席，属于扩展 API 与核心流程的边界问题。[Issue](https://github.com/earendil-works/pi/issues/9051)

8. **#9787 [CLOSED] 0.86.0：SDK 导入即劫持进程全局 undici dispatcher** — 嵌入式宿主（如 Fastify 应用）的原生 fetch abort/streaming 被破坏，是新版回归中影响最深的一条。[Issue](https://github.com/earendil-works/pi/issues/9787)

9. **#9789 [CLOSED] 0.86.0：压缩后模型只剩部分工具可调用** — 扩展触发的压缩后 read/edit 等工具从请求中消失，v0.86.0 新回归，需要重点关注。[Issue](https://github.com/earendil-works/pi/issues/9789)

10. **#9785 [CLOSED] bash timeout 参数秒/毫秒混淆可导致多小时超时** — 单位语义不清且无默认值/合理上限，属于易踩坑的 API 设计问题。[Issue](https://github.com/earendil-works/pi/issues/9785)

---

## 🔀 重要 PR 进展

1. **#9668 [MERGED] Prompt cache warming**（@mitsuhiko）— 本版本核心功能，成本感知地保活 Anthropic 提示缓存。[PR](https://github.com/earendil-works/pi/pull/9668)

2. **#9781 [MERGED] 修复提示取消后仍继续恢复流程**（@tryingET）— 解决 #9340：`AgentSession.abort()` 后仍可能启动自动压缩的竞态。[PR](https://github.com/earendil-works/pi/pull/9781)

3. **#9779 [MERGED] 暴露可取消的自动压缩认证流程**（@tryingET）— 解决 #9777：认证等待期间提供进度指示与有效的中止控制器。[PR](https://github.com/earendil-works/pi/pull/9779)

4. **#9096 [OPEN] 新增 Meta 提供商（Muse 订阅 OAuth）**（@xl0）— 对应 #7543，实现 `/login` 流程接入 Meta Model API，注意其流式输出目前是“伪流式”。[PR](https://github.com/earendil-works/pi/pull/9096)

5. **#9776 [OPEN] 按思考级别区分采样参数**（@mrexodia）— 新增 `samplingParamsByThinkingLevel`，满足开源模型对思考/非思考模式使用不同采样参数的需求。[PR](https://github.com/earendil-works/pi/pull/9776)

6. **#9434 [MERGED] 允许扩展向会话系统提示追加内容**（@wutongyuonce）— `session_start` 可返回 append-only 的 `systemPromptAppend`，扩展能力的重要扩展。[PR](https://github.com/earendil-works/pi/pull/9434)

7. **#9772 [MERGED] 修复主屏滚动回放与 ConPTY 自动换行漂移**（@treatux）— 关闭 #9583，改善 Windows Terminal 下的渲染稳定性。[PR](https://github.com/earendil-works/pi/pull/9772)

8. **#9120 [MERGED] Skill 自动补全按裸名排序**（@yearth）— 修复 `skill:` 前缀字符干扰模糊匹配评分的问题（#8813）。[PR](https://github.com/earendil-works/pi/pull/9120)

9. **#9746 [MERGED] 文件补全识别 CJK 标点边界**（@haoqixu）— 中文用户输入 `，docs<tab>` 现在能正确触发补全，本地化体验改进。[PR](https://github.com/earendil-works/pi/pull/9746)

10. **#9570 [OPEN] 将 Gemini TOO_MANY_TOOL_CALLS 映射为错误停止原因**（@rsaryev）— 修复 `@google/genai` 新版本枚举导致的 `Unhandled stop reason` 异常。[PR](https://github.com/earendil-works/pi/pull/9570)

---

## 📈 功能需求趋势

- **性能优化**：TUI 渲染 CPU 占用（#6665）、启动延迟与内存预算（#7739）、扩展加载器惰性导入（#9540）是持续热点。
- **压缩（Compaction）机制可靠性**：近期最高频主题——取消竞态、认证等待、压缩后上下文/工具丢失（#9340、#9777、#9789、#9051、#9391），核心流程需系统性加固。
- **新模型/提供商支持**：Meta Muse（#9096）、GLM-5.3、DeepSeek-V4.1-Flash（#9771）等国产与新兴模型接入需求旺盛。
- **嵌入式/SDK 集成**：全局 undici 劫持（#9787）、同步 SessionManager（#2616）、Extension API 缺乏 provider 特有字段透传（#9784、#9757），SDK 宿主是快速增长的用户群。
- **扩展生态健壮性**：模块双拷贝（#5653）、manifest glob 文档与实现不符（#9788）。

---

## 🛠️ 开发者关注点

1. **v0.86.0 升级需谨慎**：压缩后工具丢失（#9789）和 SDK 全局 dispatcher 劫持（#9787）两条新回归已快速修复，嵌入式宿主建议确认修复后升级。
2. **扩展开发者痛点**：provider 注册表依赖模块单例，包管理方式变化极易造成静默失效；Extension API 对 provider 特有字段的访问仍被封闭（#9784 作者直言其如“普罗克拉斯提斯之床”）。
3. **取消/中止语义仍脆弱**：压缩认证、turn 间输入、abort 后恢复等路径存在多个竞态窗口，#9783 指出 de2de549b 之后仍有遗漏。
4. **工具超时设计不一致**：bash 存在单位混淆且无默认值，find/grep 完全没有超时机制且被 kill 时返回空成功（#9770），核心工具的错误语义需要统一。
5. **取消操作可见性**：自动压缩在认证等待期间无进度提示，用户体验上“看似卡死”。

---
*数据截至 2026-09-20，来源：github.com/earendil-works/pi*

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# 📰 oh-my-pi 社区动态日报（2026-09-20）

## 一、今日速览

今日无新版本发布，但社区活跃度居高：过去 24 小时内 64 条 Issue 更新、116 条 PR 更新。**AI 生态兼容性**是今日主线——Grok Bot 推理提供商、OpenRouter Decisions 判断端点、Anthropic prompt-cache 刷新优化等 PR 密集涌现；同时 TUI 渲染、MCP 超时回归、自定义 provider 崩溃等多个稳定性修复同步推进。

---

## 二、版本发布

过去 24 小时无新 Release。（当前讨论中提到的版本为 v18.1.22 / v18.2.6）

---

## 三、社区热点 Issues

1. **[#9780](https://github.com/can1357/oh-my-pi/issues/9780) TUI 长流式回复的部分行在最终提交时才重绘**（21 评论）
   v18.0.5 修复分配逻辑后，长流式回复期间文本仍会在 composer/工具卡下“漂移”，回合结束时才归位。核心 TUI 体验问题，虽被标为 wontfix 但社区持续讨论。

2. **[#5742](https://github.com/can1357/oh-my-pi/issues/5742) 请求桌面 + Web 图形界面**（26 👍，13 评论）
   社区对 GUI 层呼声最高的一条：对比 OpenCode、Codex CLI、Cursor 等竞品，OMP 目前仅有终端入口。相关联的 [#2149](https://github.com/can1357/oh-my-pi/issues/2149)（OMP 桌面版）也在持续升温。

3. **[#11963](https://github.com/can1357/oh-my-pi/issues/11963) google-antigravity 未发送 paidTier 导致误报 429 RESOURCE_EXHAUSTED**（10 评论）
   官方 `agy` CLI 在同一登录下可用 Gemini 3.8 Flash，OMP 却未启用 Google One / AI Ultra 计费通道。付费用户的核心阻断问题。

4. **[#12306](https://github.com/can1357/oh-my-pi/issues/12306) opencode-zen 免费模型在 OMP 中返回 403**（8 👍）
   `muse-spark-1.3-contributor-free` 在 OpenCode 可用、在 OMP 被 403 拒绝，暴露免费层鉴权按客户端区分的问题。

5. **[#4991](https://github.com/can1357/oh-my-pi/issues/4991) Task 工具子代理强制继承完整 system prompt**（7 评论）
   紧凑编排型子代理无法选择“最小契约式”提示词，大量 token 浪费。与 [#8599](https://github.com/can1357/oh-my-pi/issues/8599)（子代理 MCP/扩展工具作用域）同属子代理精细化控制方向。

6. **[#10549](https://github.com/can1357/oh-my-pi/issues/10549) macOS 上 shell 子系统卡死后 18 个 tokio 线程空转 40+ 分钟**（5 评论）
   CPU 飙至 1100–1650%，fcntl/close 热循环，标为 P2。严重的资源泄漏类 bug。

7. **[#12572](https://github.com/can1357/oh-my-pi/issues/12572) `requestIdFormat: "number"` 未传导至 StdioTransport，mcpbridge 仍 30s 超时**
   疑似 #7053 修复在 18.1.22 上的回归，MCP 兼容性用户受影响。

8. **[#12562](https://github.com/can1357/oh-my-pi/issues/12562) 自定义 api provider 的 `compat: undefined` 崩溃 openai-completions 流**
   扩展注册的自定义 provider 直接打崩会话，已有对应修复 PR（见下文 #12576）。

9. **[#12529](https://github.com/can1357/oh-my-pi/issues/12529) sloppy edit 在 CJK 内容上 panic 而非返回匹配错误**（已关闭）
   字节索引落在中文字符中间导致 worker panic，中文用户痛点，处理迅速。

10. **[#12530](https://github.com/can1357/oh-my-pi/issues/12530) [RFC] SoL-Pi 式 action fusion 与无损观测处理**
    提议原生支持“文件修改后免模型回合验证”及可恢复的工具输出预览，架构层面的高质量 RFC。

其他快讯：[#12563](https://github.com/can1357/oh-my-pi/issues/12563)（已修复）auth-broker MCP OAuth 只能刷新一次；[#12511](https://github.com/can1357/oh-my-pi/issues/12511)（已关闭）`before_agent_start` systemPrompt 与上游 Pi 类型不一致；[#12205](https://github.com/can1357/oh-my-pi/issues/12205) 请求支持 rio 终端。

---

## 四、重要 PR 进展

1. **[#12579](https://github.com/can1357/oh-my-pi/pull/12579) 新增 Grok Bot 推理提供商**
   基于 Connect/protobuf 推理 API 的完整接入：`/login grokbot`、沙箱注册、端点 JWT 铸造、认证流式推理。

2. **[#12576](https://github.com/can1357/oh-my-pi/pull/12576) 修复自定义 api provider 的 compat 崩溃**
   对应 Issue #12562，为未知 API 解析 openai-completions 方言，修复 streamer 崩溃。

3. **[#12571](https://github.com/can1357/oh-my-pi/pull/12571) 保留 drop_block 丢弃的 thinking 以维持缓存前缀**
   防止 preserved-thinking 会话反复重写自身 prompt cache，缓存效率优化。

4. **[#12574](https://github.com/can1357/oh-my-pi/pull/12574) Anthropic prompt-cache 刷新改为 allow-list 网关制**
   修正了误用 leaked-thinking 豁免判断的判定逻辑。

5. **[#12518](https://github.com/can1357/oh-my-pi/pull/12518) Claude 风格 `.mcp.json` 超时按秒解析**（修 #12485）
   `timeout: 600` 本意为 10 分钟却被当作 600ms，导致所有 MCP 调用竞速失败。

6. **[#12559](https://github.com/can1357/oh-my-pi/pull/12559) 限制 @-mention 文件遍历跟随符号链接**（修 #12317）
   循环/超大 symlink 树可冻结 TUI；natives 模糊查找器新增 `FollowLinks::Roots`。

7. **[#12531](https://github.com/can1357/oh-my-pi/pull/12531) 检测标点 thinking 死循环并映射重复停止原因**（修 #12525）
   识别 `?!` 纯标点循环，将 OpenAI 兼容方的 repetition 停止映射为 `ThinkingLoop`。

8. **[#12568](https://github.com/can1357/oh-my-pi/pull/12568) 修复 compaction 丢弃 vibe director 及吞没 worker 结果**
   `/vibe` 活跃期间压缩会静默丢失整个 worker 队列，来自真实会话的复现。

9. **[#12573](https://github.com/can1357/oh-my-pi/pull/12573) 统一图像长边上限 1568 并暴露 `images.maxDimension`**
   替换多处不一致的常量（2000 等），支持用户降档。

10. **[#3923](https://github.com/can1357/oh-my-pi/pull/3923) 持久化 PowerShell 工具**
    每会话共享一个 `pwsh` runspace，跨调用保持变量、模块、`$LASTEXITCODE` 等状态。已 triaged + vouched，长期开发中的重量级特性。

其他值得留意：[#12548](https://github.com/can1357/oh-my-pi/pull/12548)（Codex web search 支持 OAuth token）、[#12493](https://github.com/can1357/oh-my-pi/pull/12493)（`omp update` Homebrew 非交互化）、[#9009](https://github.com/can1357/oh-my-pi/pull/9009)（浏览器 relay 孤儿 debugger 附件回收）、[#8013](https://github.com/can1357/oh-my-pi/pull/8013)（状态栏 round_time 段，已关闭）。

---

## 五、功能需求趋势

- **GUI / 桌面端**：#5742（26 👍）与 #2149 持续发酵，是社区呼声第一的需求方向。
- **多 Provider / 多模型生态**：Grok Bot（PR #12579）、OpenRouter Decisions 判断端点（#12458）、google-antigravity 付费层（#11963）、opencode-zen 免费层（#12306）——接入广度与计费正确性双线并进。
- **子代理精细化控制**：最小化 system prompt（#4991）、按子代理的 MCP/工具作用域（#8599）、多会话并存（#8656）。
- **判断/决策模型架构**：非生成式判断模型 provider（#12469）、`advisor.steerLevel` 阈值（#9074）、工具调用级 steering（#8765）。
- **终端兼容性长尾**：rio 终端（#12205）、WezTerm+SSH+tmux 检测降级（#12524）、ask 对话框按键吞噬（#12217）。
- **可观测性/扩展 API**：`ask-dialog-presented` 事件（#11975）等扩展钩子细化。

---

## 六、开发者关注点

1. **TUI 渲染稳定性**：流式重绘漂移（#9780）、Ctrl+O 无法折叠已提交工具块（#12502）、ask 工具遮挡输出（#12398）——终端渲染是最大痛点集群。
2. **MCP 生态兼容**：超时单位回归（#12572/#12518）、OAuth 刷新失败（#12563）表明 MCP 集成的边角问题仍在批量暴露。
3. **CJK/国际化健壮性**：sloppy edit panic（#12529）已修复，但字节级切片风险值得系统性排查。
4. **资源与性能**：macOS CPU 空转（#10549）、symlink 冻结 TUI（#12559）、容器内 loopback 无谓探测告警（#12156）。
5. **API 契约一致性**：与上游 Pi 的 `systemPrompt` 类型分歧（#12511）提示扩展作者需注意版本间契约漂移。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*