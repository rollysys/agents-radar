# AI CLI 工具社区动态日报 2026-10-05

> 生成时间: 2026-10-05 04:41 UTC | 覆盖工具: 11 个

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
**数据日期：2026-10-05**

---

## 一、生态全景

AI CLI 工具已从单轮代码补全面全面演进为**多 Agent 编排 + 托管运行时 + 跨端控制平面**的复杂系统。头部工具（Claude Code、Codex、Gemini CLI）社区规模和治理成熟度领先，新锐工具（oh-my-pi、OpenCode、Qwen Code）以高频迭代和差异化能力快速追赶。共同的技术焦点从“功能新增”转向**可靠性工程**：上下文压缩、静默失败、崩溃恢复成为各社区最高频的痛点关键词。同时，组织级安全治理（权限上限、沙箱、凭据管理）正从可选项变为默认项。

---

## 二、各工具活跃度对比

| 工具 | 今日 Issue 热点 | PR 活跃度 | Release | 当前阶段 |
|---|---|---|---|---|
| **Claude Code** | Top10 含 67 评论/112 👍 的 #69238 | 5 条活跃，无合入 | 无（v2.1.289） | 成熟稳定，开发重心在私有仓库 |
| **OpenAI Codex** | Windows 平台问题占热门 1/3 | 10+ 条集中合并 | **3 个 alpha/24h** | 快速迭代（0.162.0-alpha 通道） |
| **Gemini CLI** | Subagent 可靠性为主 | 10+ 条，含 4 项安全修复 | nightly | 稳定迭代，安全投入显著 |
| **Copilot CLI** | macOS 系统 Bug #4998 发酵 | 0 活跃 PR | v1.0.92-4 | 稳定迭代 |
| **OpenCode** | 50 Issue / 50 PR 更新 | 3+ 合并，含 2 月遗留修复 | 无 | 高活跃度，v2 架构重构期 |
| **Qwen Code** | 托管运行时 P1/P2 集中 | 10 条活跃，质量收尾 | v0.24.7 nightly | 托管架构攻坚期 |
| **DeepSeek TUI** | 维护者 5 连发 durability 设计 Issue | 5 条，3 社区 PR 合入 | 无 | 架构收敛（TS→Rust Engine） |
| **Pi / oh-my-pi** | 性能与兼容性 | Pi：4 条（低）；oh-my-pi：**245 条更新** | oh-my-pi v18.6.1 | Pi 平稳；oh-my-pi 极速迭代 |
| **Kimi Code / DeepSeek Harness** | — | — | — | 24h 无活动 |

**核心观察**：oh-my-pi（245 PR 更新）和 OpenCode（100 条总更新）是当日社区交互密度最高的仓库；Codex 以 3 版/天的 alpha 节奏领先发布频率；Claude Code 活跃度高但公开代码节奏放缓。

---

## 三、共同关注的功能方向

### 1. 上下文压缩可靠性（全员痛点，最普遍）
- **Claude Code**：#91910（Hook 字段缺失）、#95328（resume 后压缩被撤销）
- **OpenCode**：#44094（压缩模型配置失效，已修）、#44080（空摘要永久丢失上下文）
- **oh-my-pi**：#6835（按模型配置压缩阈值，22 评论）、v18.6.1 修复截图会话压缩失败
- **Qwen Code**：#13415（本地模型 1M 窗口误判，压缩永不触发）
- **Pi**：#8301、#10330（CLI 模式自动压缩不触发）
- **DeepSeek TUI**：#6721（紧急压缩打断用户任务）、#6842（压缩后内存仍无上界）

### 2. 静默失败 vs 显式报错（设计哲学之争）
所有工具社区均出现“看似成功实际失效”的批评：Claude Code 的 WebSearch 超限伪成功（#95815）、Pi 的 schema 静默丢弃（#9134）、oh-my-pi 的 resume 静默新建会话（#13928）。“宁可报错也不要悄悄丢数据”已成社区共识性诉求。

### 3. 托管运行时 / 多 Agent 状态一致性
- **Qwen Code**（Managed Agent Runtime，过半 Issue）、**DeepSeek TUI**（Engine durability 五连发 #6836-6840）、**Codex**（Dots 委托授权断链 #49729/#50769）、**Gemini CLI**（subagent 假成功 #22323 / 挂起 #21409）。子 agent 的生命周期、授权传递、崩溃恢复是多 Agent 落地的共同瓶颈。

### 4. 组织级安全治理
- Claude Code 的 sec-default PR #99540（组织权限上限覆盖个人插件）、Gemini CLI 四项安全修复（路径穿越/密钥泄露/提权）、Qwen Code 的 Broker 认证、DeepSeek TUI 的 MCP secret 作用域隔离。

### 5. 跨端 / 远程会话体验
Codex 的 Remote Control Windows 注册失败（#32164）、Claude Code 的 Remote Control 归档重分发（#98310）与 Android/Web 协同需求群、Copilot CLI 的企业代理场景。

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 插件/Skill 生态、Hooks 扩展、企业治理、SaaS 连接器编排 | 重度专业开发者 + 企业 | TypeScript CLI，扩展点丰富但契约不完整 |
| **Codex** | 多 surface 统一（桌面/CLI/Web/移动）、Computer Use、混合多模型编排 | OpenAI 生态全栈用户 | Rust 重写，alpha 快节奏，Windows 为短板 |
| **Gemini CLI** | Subagent 体系、AST 感知工具链、安全沙箱、token 效率 | 开发者 + 开源贡献者 | 开放贡献模式，社区 PR 主导 |
| **Copilot CLI** | 企业网络/代理/自托管 Provider、MCP 兼容 | GitHub 企业用户 | 稳定小步快跑，配置能力增强中 |
| **OpenCode** | 多 Provider 抽象、v2 架构（Effect/Promise 统一）、企业集成（Bedrock/GitLab） | 多模型自主选择型用户 | 社区驱动，中文化关注度高 |
| **Qwen Code** | 托管运行时 / K8s 分发 / 本地开源模型兼容 | 本地部署 + 平台化用户 | 向企业级托管架构演进 |
| **DeepSeek TUI** | Engine 持久化、崩溃恢复、Ratatui TUI 体验 | 终端重度用户 | TS→Rust 单引擎收敛战略 |
| **Pi 系** | Provider 兼容矩阵、SDK/嵌入式宿主、浏览器自动化 | 高定制化 / 嵌入场景开发者 | 轻量多 Provider 抽象层 |

**关键差异**：闭源双雄（Claude Code/Codex）押注多端协同与企业治理；开源阵营（Gemini/OpenCode/Qwen/DeepSeek）押注多 Provider 自主权与架构健壮性；oh-my-pi 以浏览器自动化和 OTel 可观测性作为独特卖点。

---

## 五、社区热度与成熟度

**热度梯队**：
- **T1 高活跃**：oh-my-pi（70 Issue/245 PR 更新）、OpenCode（100 更新）、Codex（3 Release + 密集合并）
- **T2 稳定活跃**：Claude Code（老牌 Bug 热度持续）、Gemini CLI、Qwen Code、DeepSeek TUI
- **T3 低活跃/观望**：Pi（PR 活跃度偏低）、Copilot CLI（当日零 PR）、Kimi Code 与 DeepSeek Harness（零活动）

**成熟度判断**：
- **成熟期**：Claude Code、Copilot CLI——问题集中在长尾 Bug 与升级副作用，而非架构
- **快速迭代期**：Codex（alpha 通道）、oh-my-pi（版本号 v18.6 暗示高频发布史）
- **架构攻坚期**：Qwen Code（稳定性）、DeepSeek TUI（Engine 收敛）、OpenCode（v2 重构）——共同特征是“功能已成、可靠性补课”

---

## 六、值得关注的趋势信号

1. **“静默失败”成为行业公敌**：至少 4 个工具社区在同一天出现对伪成功行为的强烈批评。选型时应将“失败是否可见、可重试、可对账”作为核心评估维度。

2. **压缩机制是下一个竞争壁垒**：所有工具都在压缩路径上出问题（模型配置、阈值、内存回收、跨进程恢复）。压缩的正确性直接决定长会话 Agent 的可用性，各家的 durability 设计 Issue（尤其 DeepSeek TUI 的原子检查点方案）值得跟踪。

3. **多 Agent 的瓶颈在状态一致性而非智能**：Codex 的授权传递、Gemini 的假成功上报、Qwen 的并发锁护航表明——子 agent 的生命周期管理和跨进程恢复是比模型能力更硬的工程约束。

4. **Windows 是普遍的质量洼地**：Codex（1/3 热门 Issue）、Copilot CLI（进程残留）、DeepSeek TUI（GBK 乱码）、oh-my-pi（按键映射）。Windows 优先的团队选型时需额外验证。

5. **可观测性需求爆发**：oh-my-pi 的 OTel 缺口清单、Codex 的 `tools_change_count` 遥测、Qwen 的 token 成本分析脚本——Agent 的成本审计与行为追踪正成为企业采购前置条件。

6. **安全治理从个人走向组织**：Claude Code 的组织级权限 PR、Gemini CLI 的安全修复密集落地、Qwen 的 Broker 认证，预示 2027 年组织策略配置（tool 权限上限、workspace trust、凭据作用域）将成为 AI CLI 的标配能力。

**给开发者的建议**：生产环境优先考察各工具的**失败可见性**与**压缩可靠性**；重度 Windows 用户暂缓 Codex 桌面端；多模型需求关注 OpenCode/oh-my-pi；企业落地重点验证 Claude Code 的组织治理与 Copilot CLI 的代理环境成熟度。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
（数据截止 2026-10-05，来源：anthropics/skills）

> **说明**：本期抓取的 PR 评论数与点赞数据缺失（undefined），以下排序以「最近更新时间 + 修复 Issue 关联度 + 议题热度」作为关注度代理指标，供参考。

---

## 一、热门 Skills 排行（按综合活跃度）

| # | PR | Skill | 功能 | 状态 | 讨论热点 |
|---|----|-------|------|------|---------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 修复** | 隔离触发评测、修复 Windows select() 失败与运行时错误误判 | OPEN | 对应高热 Issue #1383（Windows 评测全挂），持续更新至 9 月，是元工具层面最关键的修复 |
| 2 | [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder 修复** | 适配 mcp>=2.0 的 `streamable_http_client` 重命名与自定义 header | OPEN | 修复 Issue #1668，关联 #1390（评测对真实 MCP 服务器全 0 分），是 MCP 生态兼容性刚需 |
| 3 | [#1792](https://github.com/anthropics/skills/pull/1792) | **docx 修复** | LibreOffice 超时不再误报成功，并校验输出无修订标记 | OPEN | 文档 Skills 的可靠性改进，思路严谨（验证 `w:ins/w:del`） |
| 4 | [#1607](https://github.com/anthropics/skills/pull/1607) | **claude-api 模型清单更新** | 标记 4 个已退役模型 ID | OPEN | 修复 #1603；反映 claude-api skill 的时效性维护需求（另见 Issue #1487 的 156k token 注入问题） |
| 5 | [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | Markdown → Marp 幻灯片 → MP4 视频 + 真人感配音，零成本 | OPEN | 内容创作方向，社区对“文档到多媒体”转换兴趣明显 |
| 6 | [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | Solidity/Rust 合约静态分析 + TON 链上审计证明锚定 | OPEN | Web3 安全审计 + 区块链存证，跨领域组合型 Skill |
| 7 | [#1776](https://github.com/anthropics/skills/pull/1776) | **blast-radius** | 批量/破坏性写操作前的风险清单（删行、封号、批量邮件） | OPEN | “查询正确 ≠ 世界正确”，安全操作文化类 Skill，理念受关注 |
| 8 | [#822](https://github.com/anthropics/skills/pull/822) | **AWT (AI Watch Tester)** | 零代码 E2E 测试：视觉 + 浏览器控制自动生成与执行测试 | OPEN | 3 月提交、9 月仍在更新，测试自动化是长期热点 |

---

## 二、社区需求趋势（Issues 提炼）

1. **安全与信任边界**（最热，43 评论）：[#492](https://github.com/anthropics/skills/issues/492) 指出社区 Skill 冒用 `anthropic/` 命名空间造成信任滥用；[#1394](https://github.com/anthropics/skills/issues/1394) 报告 eval-viewer XSS。**Skill 签名/命名空间治理是第一诉求**。
2. **企业组织级共享**：[#228](https://github.com/anthropics/skills/issues/228)（16 评论）要求组织内 Skill 库与直链分享，替代 Slack 传文件手工上传。
3. **评测与质量基建**：[#556](https://github.com/anthropics/skills/issues/556)（触发率 0%）、#1383、#1390 —— skill-creator / mcp-builder 的评测工具链在 Windows 和真实环境下的可靠性是痛点。
4. **Token 效率与上下文管理**：[#1487](https://github.com/anthropics/skills/issues/1487)（claude-api 一次注入 156k token）、[#1329](https://github.com/anthropics/skills/issues/1329)（compact-memory 符号化压缩 agent 状态）。
5. **插件分发去重与平台兼容**：[#189](https://github.com/anthropics/skills/issues/189)（插件重复安装）、[#29](https://github.com/anthropics/skills/issues/29)（Bedrock 支持）。
6. **新 Skill 方向提案**：agent-governance（AI 治理模式）、reasoning 质量门禁流水线（#1385）、测试模式库（PR #723）。

---

## 三、高潜力待合并 Skills

- **#1298 skill-creator 触发评测修复** — 修复多个已确认 Issue，维护者持续跟进，最可能近期合并
- **#1742 mcp-builder mcp>=2 兼容** — 明确修复 #1668，属 breaking change 适配，优先级高
- **#1792 docx 超时报错修复** — 小而正确，合并阻力低
- **#1681 package_skill.py 直接执行修复** — 修复 ModuleNotFoundError，路径文档同步更新
- **#1607 / #1730 claude-api 文档与模型清单维护** — 纯文档修正，风险低
- **#1734 孤立 docx 批注检测** — 补齐 docx skill 能力缺口

---

## 四、生态洞察（一句话）

> **社区最集中的诉求不是“更多 Skill”，而是“可信的 Skill”——命名空间安全、评测工具链可靠、token 开销可控，即从数量扩张转向质量与治理。**

---

# Claude Code 社区动态日报 · 2026-10-05

## 一、今日速览

今日无新版本发布（当前最新 CLI 版本为 2.1.289），但社区活跃度不减：**API 无响应与 Advisor 触发冲突的老牌 Bug（#69238）热度持续攀升**（67 评论 / 112 👍），围绕 Hooks 机制与子代理压缩的边界问题也出现多个高质量复现报告。安全方面值得注意，官方成员 @poteat 提交的 **sec-default PR（#99540）引入了组织级工具权限上限对个人插件的约束**，是今日最重要的治理类变更。

---

## 二、版本发布

过去 24 小时无新 Release。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 为什么重要 |
|---|-------|-----------|
| 1 | [#69238](https://github.com/anthropics/claude-code/issues/69238) — Advisor 触发时 API 无响应（macOS TUI） | **今日热度第一**（67 评论 / 112 👍）。Advisor 使用 Opus 4.8 时反复出现 "No response from API"，影响面广，自 6 月开放至今未修复，社区不满情绪累积。 |
| 2 | [#14920](https://github.com/anthropics/claude-code/issues/14920) — 支持单独禁用插件 Skill | 高 👍（95）的长寿功能请求。用户希望精细控制如 `commit-push-pr` 等不需要的 Skill，反映插件生态成熟后对**细粒度配置**的强烈需求。 |
| 3 | [#91910](https://github.com/anthropics/claude-code/issues/91910) — 子代理压缩时 Hook 事件字段缺失 | 带完整复现的深度报告：`PreCompact`/`PostCompact` 在 subagent 压缩时缺少 agent 字段，`SubagentStop` 指向不存在的 transcript。对构建 Hook 自动化工作流的用户是硬伤。 |
| 4 | [#92007](https://github.com/anthropics/claude-code/issues/92007) — `/model opusplan` 突然报 "Unsupported model" | 稳定运行数月的模型别名突然失效（2.1.260 / Windows），提示模型路由层近期有变更，Plan 模式用户受影响。 |
| 5 | [#95815](https://github.com/anthropics/claude-code/issues/95815) — WebSearch 会话上限静默失败 | 超出 `CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION` 的调用**不报错**而是返回伪结果，agent 基于模型记忆继续编造，长链路研究工作流被静默污染——可靠性设计问题值得警惕。 |
| 6 | [#98310](https://github.com/anthropics/claude-code/issues/98310) — Remote Control 会话归档后无法重新分发 | 可复现：unarchive 后消息卡在 "Sending…" 最终提示离线，直接影响 Remote Control 多机工作流的可用性。 |
| 7 | [#95328](https://github.com/anthropics/claude-code/issues/95328) — Function Hook 的压缩结果在 resume 后被撤销 | `session.compact` 钩子过滤的消息在 `--resume` 后回潮，压缩数据一致性 Bug。 |
| 8 | [#74068](https://github.com/anthropics/claude-code/issues/74068) — macOS TCC 弹窗显示版本号而非应用名，且授权随更新重置 | 安全/打包问题：权限弹窗标题为裸版本号导致每次升级 TCC 授权失效，影响所有原生安装的 macOS 用户。 |
| 9 | [#98134](https://github.com/anthropics/claude-code/issues/98134) — Apple Max 20x 订阅被识别为 Pro | 订阅等级识别错误，付费用户额度受损，属高优先级计费类问题。 |
| 10 | [#97504](https://github.com/anthropics/claude-code/issues/97504) — 面向用户的消息被作为隐藏 thinking 输出 | 间歇性：包含工具调用的回复中，模型想说给用户的话被包进 thinking block，用户永远看不到。影响交互透明度。 |

**今日新增值得关注**：[#99552](https://github.com/anthropics/claude-code/issues/99552)（security-guidance 插件对 NotebookEdit 的安全提醒完全失效，带复现）、[#99559](https://github.com/anthropics/claude-code/issues/99559)（Linux 上 `claude install` 99% CPU 死挂）。

---

## 四、重要 PR 进展

> 今日活跃 PR 仅 5 条，按重要性排序：

1. **[#99540](https://github.com/anthropics/claude-code/pull/99540)** `sec-default: 组织工具权限上限覆盖个人插件`（官方 @poteat，今日新开）
   组织对某 connector 工具设定的审批上限，现在对成员安装的插件同样生效，且每个决策 Hook 均带 `.catch` 兜底。**企业治理能力的重要补强**。

2. **[#87077](https://github.com/anthropics/claude-code/pull/87077)** `fix(pr-review-toolkit): 修复所有 agent 的无效 YAML frontmatter`
   agent description 中的未引号对话行被解析为嵌套映射导致 frontmatter 为空，批量修复。

3. **[#40572](https://github.com/anthropics/claude-code/pull/40572)** `feat: 支持全局 Hookify 规则`
   允许从 `~/.claude/` 加载跨项目生效的 Hookify 规则，与项目级 `.claude/` 并存。

4. **[#20448](https://github.com/anthropics/claude-code/pull/20448)** `Add web4-governance plugin`
   第三方治理插件：T3 信任张量、实体见证、R6 审计链。长期未合入，观察社区对 AI 治理插件的态度。

5. **[#1](https://github.com/anthropics/claude-code/pull/1)** `Create SECURITY.md` — 仓库首个 PR，今日又有活动，属历史归档性更新。

*（今日无新 PR 合入，官方开发重心或集中在私有仓库。）*

---

## 五、功能需求趋势

从今日 Issue 分布提炼出五大方向：

1. **连接器（Connectors）生态扩展** — Shopify 多店铺并行（[#99407](https://github.com/anthropics/claude-code/issues/99407)）、Google Drive 文件内容更新（[#95292](https://github.com/anthropics/claude-code/issues/95292)）：用户正把 Claude Code 当作跨 SaaS 的编排中枢，现有连接器能力深度不足。
2. **远程/多端会话体验** — Android Remote Control 上下文指示器（#99564）、SSH 会话在远端 Desktop 不可见（#99563）、分组会话共享上下文（#99495）、会话分组数据丢失（#99541）：**Remote Control + Web/Desktop 协同是最高频新需求区**。
3. **细粒度权限与安全治理** — Hooks 需显式人工审查（#99561）、绕过仓库 AI 贡献禁令（#99549）、组织级策略 PR #99540：安全治理需求从个人走向组织级。
4. **模型/成本控制** — 按任务选择模型与 effort（#95190）、重复错误消耗额度（#99560）、成本估算忽略缓存 TTL（#99558）：在多模型时代用户要求**更精细的算力调度与计费透明**。
5. **插件/Skill 可配置性** — 单独禁用 Skill（#14920，95 👍）、Mod diff 渲染差异（#99535）：插件体系成熟后的长尾配置诉求。

---

## 六、开发者关注点（痛点总结）

- **API 稳定性**：Advisor/模型切换引发的 "No response from API"（#69238）已困扰社区近 4 个月，是最强修复呼声。
- **静默失败优于报错的设计争议**：WebSearch 超限伪成功（#95815）、compact resume 回潮（#95328）——多处出现“看似成功实际失效”模式，破坏长时自动化任务的信任基础。
- **升级副作用**：TCC 授权随版本重置（#74068）、订阅等级误判（#98134）、模型别名突然失效（#92007），升级体验割裂。
- **Hook 体系仍是半成品**：子代理压缩字段缺失（#91910）、NotebookEdit 安全提醒失效（#99552）——Hook 作为最高权威扩展点，契约不完整的问题集中暴露。
- **Token 成本焦虑**：重复错误消耗限额（#99560）反映重度用户对“无效消耗”的容忍度已到临界点。

---

*数据截至 2026-10-05，来源：github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-10-05

## 一、今日速览

Codex Rust CLI 在过去 24 小时内密集发布 3 个 alpha 版本（0.162.0-alpha.12 ~ alpha.14），迭代节奏极快。社区侧，VS Code 扩展“回车丢消息”问题（#49988）引发大量共鸣并已关闭，多agent 跨供应商通信加密问题和 Dots 委托授权问题持续发酵。PR 方面，团队集中合并了一批 TUI、Windows 兼容性和远程控制相关的改进。

---

## 二、版本发布

| 版本 | 说明 |
|---|---|
| [rust-v0.162.0-alpha.14](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.14) | 最新 alpha，迭代最快 |
| [rust-v0.162.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.13) | 日常 alpha 更新 |
| [rust-v0.162.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.12) | 日常 alpha 更新 |

> 三个 alpha 均为常规发布说明，未附详细 changelog，建议关注 0.162.0 稳定版发布时汇总的变更。

---

## 三、社区热点 Issues

1. **[#49988](https://github.com/openai/codex/issues/49988)（已关闭）VS Code 扩展更新后间歇性丢失已提交消息** — 10 月 1 日扩展更新后按 Enter 会清空输入框但消息不进入对话。47 👍 / 48 评论，是近期反馈最集中的回归问题，现已修复关闭。

2. **[#8197](https://github.com/openai/codex/issues/8197)（已关闭）长时间运行后面板变灰** — 老牌高热度问题（68 评论），扩展 0.5.52 在 Windows 上的稳定性问题，已关闭。

3. **[#25271](https://github.com/openai/codex/issues/25271) Computer Use 在 Windows 上无法识别 Chrome URL** — 即使在 `chrome://newtab/` 也无法读取 URL，48 评论持续更新，Computer Use 在 Windows 的兼容性仍是短板。

4. **[#49729](https://github.com/openai/codex/issues/49729) Dot 无法在已保存项目中创建/跟进本地任务** — Dots 能启动任务却无法按返回的线程 ID 与项目线程交互，工作流断裂，36 评论。

5. **[#50428](https://github.com/openai/codex/issues/50428) Windows 桌面版 durable chat 提交失败** — `AbsolutePathBuf` 反序列化缺少 base path 导致 turn/start 和 fork 全部失败，18 评论。

6. **[#32164](https://github.com/openai/codex/issues/32164) Windows 上 Remote Control 注册无法完成** — 自 7 月起持续未解，远程控制功能在 Windows 上形同虚设。

7. **[#20312](https://github.com/openai/codex/issues/20312) 功能请求：事件驱动的会话唤醒原语** — Codex 目前是 turn-driven，无法在空闲时响应外部事件（chat mention、文件变更、MCP push 等），这是实时 Agent 场景的关键架构诉求。

8. **[#34833](https://github.com/openai/codex/issues/34833) MultiAgentV2 跨供应商子代理无法消费加密任务分配** — OpenAI 父代理给自定义供应商子代理下发的是加密内容，非 OpenAI 模型无法读取，阻塞混合多模型编排。

9. **[#50769](https://github.com/openai/codex/issues/50769) Dots 中用户后续授权未被可靠识别** — 已授权的开发任务反复被只读范围拦截，授权传递链路不可靠（另见 [#35072](https://github.com/openai/codex/issues/35072)、[#50119](https://github.com/openai/codex/issues/50119)，属同类系统性问题）。

10. **[#50969](https://github.com/openai/codex/issues/50969) Windows 桌面版一天内 4 次渲染进程崩溃** — 界面反复重载但主进程存活，修复无效，Windows 桌面稳定性堪忧。

---

## 四、重要 PR 进展

1. **[#50964](https://github.com/openai/codex/pull/50964) / [#50943](https://github.com/openai/codex/pull/50943) 在 turn analytics 中追踪工具变更次数** — 引入 `tools_change_count`，跨 turn 和连接重置比较模型可见工具列表，为分析工具集漂移对推理的影响提供数据。

2. **[#50962](https://github.com/openai/codex/pull/50962) 用 feature flag 控制稳定环境工具暴露** — 默认关闭的 `stable_environment_tools` 开关：在 executor 就绪前即可通告环境工具，保持选择器稳定，并纳入 `shell` 等。

3. **[#50940](https://github.com/openai/codex/pull/50940) 安全恢复畸形的 Windows deny-read ACL 状态** — 修复 `deny_read_acl_state.json` 损坏导致对账失败的问题，恢复时不移除既有限制、不修改文件内容。

4. **[#50802](https://github.com/openai/codex/pull/50802) Windows daemon junction 更新被拒时回退 mklink** — 针对组策略禁止进程内 reparse point 修改的环境，改用 `cmd.exe mklink /J`，提升企业环境兼容性。

5. **[#50803](https://github.com/openai/codex/pull/50803) 远程控制启动改用托管 daemon** — 合格环境下 `codex remote-control` 自动启动/复用托管 daemon，改善远程控制的启动体验（与 #32164 呼应）。

6. **[#50913](https://github.com/openai/codex/pull/50913) 连接 TUI 新启动使用服务端模型默认值** — 修复 fresh start 用陈旧客户端模型配置、空模型目录阻塞启动的问题。

7. **[#50811](https://github.com/openai/codex/pull/50811) 新 TUI 线程尊重服务端 reasoning summary 默认值** — 不再强制关闭 reasoning summary，客户端配置不再覆盖目标服务端设置。

8. **[#50804](https://github.com/openai/codex/pull/50804) 修复 review 失败时的生命周期顺序** — review 失败发生在 UI 进入 review 模式前的事件乱序问题，排队中的 `/review` 保持运行指示器。

9. **[#50808](https://github.com/openai/codex/pull/50808) 精简 TUI 快照并整合行为测试** — 删除冗余快照，改用直接断言，测试更轻量、更抗 UI 变更。

10. **[#50977](https://github.com/openai/codex/pull/50977) 隔离第三方工具延迟测试的 tracing** — 用 current-thread Tokio runtime 保证 tracing 断言独立于并行测试。

---

## 五、功能需求趋势

- **多 Agent 跨供应商通信**：#34833、#37197、#46939 持续要求 MultiAgentV2 支持明文下发任务给非 OpenAI 供应商子代理（含配置项），是呼声最高的架构级需求。
- **Dots / 委托任务可靠性**：#49729、#49585、#50119、#50769 集中反映 Dots 的任务创建、线程读取、授权传递均有断点。
- **授权与沙箱策略**：用户显式批准在委托任务中不被认可（#35072 等），沙箱锁定失败（#45153）、Linux Docker nsfs 挂载（#47987）等多平台沙箱问题。
- **速率限制管理**：银行化 reset 的自动兑换/排队（#32218、#32586）。
- **跨端统一控制平面**：#50998、#33942 要求账号状态与任务控制在不同 surface（桌面/CLI/Web/移动端）间统一。

---

## 六、开发者关注点

1. **Windows 平台是质量重灾区**：今日 30 条热门 Issue 中超过 1/3 标注 `windows-os`，覆盖 ACL、junction、渲染崩溃、Remote Control 注册、durable chat 等多个子系统。
2. **扩展/桌面端稳定性信任受损**：10·01 扩展更新引发的丢消息回归（#49988）在 4 天内累积 47 👍，桌面崩溃/白屏（#48480、#50969）仍在持续。
3. **事件驱动 Agent 是架构级缺口**：社区希望 Codex 从 turn-driven 演进为可被外部事件唤醒（#20312），这是构建实时自动化工作流的前提。
4. **混合模型编排被加密机制卡住**：跨供应商子代理无法消费加密任务分配，直接阻塞自定义模型用户的多 Agent 场景落地。
5. **遥测与可观测性投入加强**：turn analytics 新增 `tools_change_count` 等 PR 表明团队正在为工具集稳定性问题建立数据基础，值得持续关注后续修复节奏。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-10-05

## 📰 今日速览

今日发布 nightly 版本 **v0.64.0-nightly.20261005**，社区贡献持续活跃。安全修复成为今日 PR 主旋律：多项涉及路径逃逸、环境变量泄露、沙箱提权的关键安全修复正在推进中。Subagent 相关问题（挂起、状态误报、技能调用不足）仍是 Issues 区的焦点。

---

## 🚀 版本发布

- **v0.64.0-nightly.20261005.gfb972b2f8**（对应 [PR #29633](https://github.com/google-gemini/gemini-cli/pull/29633) 自动版本提升）
  - 常规 nightly 构建，无独立 Release Notes
  - [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.64.0-nightly.20261003.gfb972b2f8...v0.64.0-nightly.20261005.gfb972b2f8)

---

## 🔥 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** · Subagent 达到 MAX_TURNS 后仍上报 GOAL success，掩盖中断事实（P1，13 条评论）
   核心可靠性问题：`codebase_investigator` 触发轮次上限却报告“成功”，误导上层 agent，直接影响任务结果可信度。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** · Generalist agent 无限挂起（P1，8 条评论 / 8 👍）
   用户反馈简单操作（如建文件夹）也会卡死长达一小时，禁止 subagent 委派后恢复——影响日常可用性的高赞问题。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** · 零依赖 OS 沙箱 + 执行后意图路由（P2，9 条评论）
   重要架构提案：Gemini 3 原生偏好 bash 工具链，需要安全沙箱来释放这一能力，是安全与能力平衡的关键讨论。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** · AST 感知文件读取/搜索/映射 EPIC（P2，7 条评论）
   评估 AST 工具能否减少读偏、降低 token 噪音，衍生出 #22746（tilth/glyph）与 #22747（ast-grep）三个子调查。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** · 模型几乎不主动使用 skills 和 sub-agents（P2，7 条评论）
   自定义技能需显式指令才触发，反映了路由/调度层的实际体验短板，用户共鸣度高。

6. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** · 工具数超过 128 个触发 400 错误（P2）
   MCP 生态扩展下的硬限制问题，用户期望 agent 智能裁剪工具作用域。

7. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** · Browser Agent 无视 settings.json 配置（如 maxTurns）（P2）
   AgentRegistry 正确合并配置但 Browser Agent 运行时忽略，配置一致性问题。

8. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)** · get-shit-done output hook 导致崩溃（P1）
   输出 summary 阶段反复崩溃，稳定性痛点。

9. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** · Browser subagent 在 Wayland 下失败（P1）
   Linux 桌面兼容性代表问题。

10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)** · Agent 应阻止/劝阻破坏性操作（如 `git reset --force`）（P2）
    安全行为规范需求：复杂 git 操作和 DB 维护场景下模型可能选择危险命令。

---

## 🔧 重要 PR 进展

### 安全修复（重点关注，多为 @ManoharPaturi 提交）

1. **[#29521](https://github.com/google-gemini/gemini-cli/pull/29521)** · [P1] 修复 checkpoint 路径穿越漏洞——raw tag 中的 `..` 可逃逸出 checkpoint 目录
2. **[#29522](https://github.com/google-gemini/gemini-cli/pull/29522)** · 修复 glob 工具绝对模式绕过目录校验（glob 12 下 `/etc/*.conf` 可读取任意目录）
3. **[#29523](https://github.com/google-gemini/gemini-cli/pull/29523)** · 外部安全检查器仅传入最小环境变量并限制输出上限，防止 `GEMINI_API_KEY` 等密钥泄露给第三方二进制
4. **[#29525](https://github.com/google-gemini/gemini-cli/pull/29525)** · a2a-server 不再从请求方 agentSettings 推导 workspace 信任，堵住远程提权入口

### 核心修复

5. **[#29527](https://github.com/google-gemini/gemini-cli/pull/29527)** · [P1] 修复 `/rewind` 或流中断后请求以 model turn 结尾导致的 400 错误
6. **[#29420](https://github.com/google-gemini/gemini-cli/pull/29420)**（已关闭）· 显式指定的 `--model gemini-3-pro-preview` 不再被静默重写为 3.1，保证版本钉扎准确性
7. **[#29429](https://github.com/google-gemini/gemini-cli/pull/29429)**（已关闭）· 配额耗尽时向用户展示具体限制与重置时间窗口（企业版体验改进）
8. **[#29423](https://github.com/google-gemini/gemini-cli/pull/29423)**（已关闭）· 修复容器沙箱内 folder trust 无法持久化、每次启动重复弹窗的问题

### 其他

9. **[#29629](https://github.com/google-gemini/gemini-cli/pull/29629)** · 限制流式渲染中 pending 文本高度，消除长响应的全屏闪烁重绘
10. **[#29632](https://github.com/google-gemini/gemini-cli/pull/29632)** · [P1] 依赖大版本更新（75 项），含 MCP SDK 1.23.0 → 1.30.1

---

## 📈 功能需求趋势

- **Subagent 体系深化**：本地 subagent Sprint（#20195）、并行协作与共享内存（#18287）、轨迹可分享（#22598）、symlink 识别（#20079）——多 agent 架构是当前最大投入方向
- **AST 感知工具链**（#22745/#22746/#22747）：通过结构化代码理解降低 token 消耗、提升读取精度
- **Token 效率**：“Tactful Extraction”外科手术式读取（#19561，当前基线约 36.6k tokens/turn）、文件化任务追踪替代 WriteToDo（#18836/#21000）
- **安全沙箱与行为约束**：OS 级沙箱（#19873）、破坏性命令防护（#22672）、per-workspace 策略（#18397）
- **Browser Agent 健壮性**：配置覆盖生效（#22267）、session 锁自动恢复（#22232）、Wayland 支持（#21983）

---

## ⚠️ 开发者关注点

1. **Subagent 可靠性是最大痛点**：挂起（#21409）、假成功（#22323）、不主动调用（#21968）三类问题叠加，用户对委派机制信心不足，不少人选择禁用 subagent 规避
2. **安全边界持续收紧**：今日多个安全 PR 集中修复路径穿越、环境泄露、信任推导漏洞，提示使用第三方 checker/MCP 工具的用户关注供应链风险
3. **工具数量上限**：128+ 工具触发 400 错误，重度 MCP 用户需注意工具裁剪
4. **模型版本钉扎被破坏**：rollout 机制曾静默重写显式 `--model` 参数，#29420/#29422 已修复，生产用户建议升级验证
5. **终端体验**：流式渲染闪烁、resize 性能（#21924）等 UI 细节仍是高频反馈项

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-05** | 数据来源：github.com/github/copilot-cli

---

## 1. 今日速览

Copilot CLI 发布 **v1.0.92-4**，新增 `copilot config` 配置子命令，并优化启动性能（子进程解包、多 MCP 服务器并发连接）。社区方面，macOS 更新后 `.mcp-writer.binding` 导致会话不可用的问题（#4998）持续发酵，认证过期（#4971）、企业代理环境（#2978）等企业场景痛点仍待解决。当日无活跃 PR。

---

## 2. 版本发布

### v1.0.92-4
**Added**
- 新增 `copilot config` 子命令，支持列出、读取、设置和删除配置项

**Improved**
- 通过子进程解包内置 CLI 包，改善首次运行启动速度
- 优化同时连接多个 MCP 服务器时的启动响应速度
- Canvas 操作现在可以返回图片

---

## 3. 社区热点 Issues

| # | Issue | 关注度 | 关注理由 |
|---|-------|--------|----------|
| 1 | [#4998](https://github.com/github/copilot-cli/issues/4998) macOS 更新/重启后 `.mcp-writer.binding` 残留过期的文件系统设备 ID，导致所有会话无法处理提示 | 👍8 💬8 OPEN | 系统级破坏性 Bug，影响所有 macOS 用户，升级即“全灭”，属高优先级 |
| 2 | [#640](https://github.com/github/copilot-cli/issues/640) "Invalid session ID: read_sql_files" 错误反复出现 | 👍10 💬24 CLOSED | 长期高频讨论的会话/工具链问题，今日关闭，值得关注修复方式 |
| 3 | [#5008](https://github.com/github/copilot-cli/issues/5008) 1.0.89 启动时出现 "Not authenticated" 竞态错误 | 👍5 💬7 CLOSED | 认证启动竞态，登录后才正常，今日已修复关闭 |
| 4 | [#4971](https://github.com/github/copilot-cli/issues/4971) 每小时出现凭证过期 Authorization 错误，`/login` 无法根治 | 💬3 OPEN | 认证 Token 刷新机制疑似缺陷，影响长时间工作流 |
| 5 | [#2978](https://github.com/github/copilot-cli/issues/2978) 企业代理后 SDK headless 模式 `session.create` 报 "fetch failed" | 💬3 OPEN | 企业网络环境是落地关键障碍，自 4 月悬而未决 |
| 6 | [#5051](https://github.com/github/copilot-cli/issues/5051) 外部 Provider（LM Studio）配置下约 20 分钟超时并反复重发 | 💬1 OPEN | 离线/自托管模型场景稳定性问题，新报 |
| 7 | [#5052](https://github.com/github/copilot-cli/issues/5052) Ubuntu 26.04 工具沙箱预检失败（bubblewrap 网络命名空间被拒） | 新报 OPEN | 沙箱安全机制与新系统内核兼容性问题，影响 Linux 用户 |
| 8 | [#4991](https://github.com/github/copilot-cli/issues/4991) Cloudflare 远程 MCP OAuth 成功后报 "Subscription limit reached" | 💬1 OPEN | 远程 MCP 生态兼容性代表案例 |
| 9 | [#4972](https://github.com/github/copilot-cli/issues/4972) Windows 上通过 wrapper 启动的 MCP worker 在退出后残留 | 💬3 OPEN | 进程清理问题，长期残留会耗尽系统资源 |
| 10 | [#5011](https://github.com/github/copilot-cli/issues/5011) 支持单会话加载多仓库自定义指令（多仓库/全栈工作流） | OPEN | 反映全栈开发者的真实配置管理需求 |

**其他值得注意的关闭项**：#4966（1.0.88 joinSession 启动卡死回归）、#3496（Windows Timeline 单行文本复制失效）、#2950（自定义 agent 忽略 agent.md 中的 model 配置）、#1634（`/agent` & `/model` 自动补全）均在今日关闭。

---

## 4. 重要 PR 进展

过去 24 小时无活跃 PR 更新。

---

## 5. 功能需求趋势

1. **配置与工作流管理**：`copilot config` 子命令落地；多仓库自定义指令加载（#5011）、`/mcp` 大小写不敏感匹配（#5050）等易用性诉求持续涌现
2. **企业环境与网络**：企业代理（#2978）、离线/自托管 Provider（#5051）、OTel 可观测性准确性（#4970）——企业落地是核心场景
3. **MCP 生态健壮性**：远程 MCP OAuth（#4991）、Windows 进程残留（#4972）、多服务器连接性能（本次发布已优化）是 MCP 相关的高频方向
4. **多媒体与输入体验**：Canvas 支持返回图片（新版本）、HEIC 附件支持（#5010）显示多模态交互需求上升
5. **沙箱与平台兼容**：Linux 沙箱（#5052）、macOS 系统更新兼容（#4998）凸显跨平台安全机制适配压力

---

## 6. 开发者关注点

- **稳定性 > 新功能**：近期 Issues 集中在认证竞态、会话失效、进程残留等基础稳定性问题，多版本回归（#4966、#5008）值得关注
- **系统更新脆弱性**：macOS 安全更新即可导致 CLI 完全不可用（#4998），对绑定文件的持久化机制需要更健壮的失效恢复
- **长会话可靠性**：每小时认证过期（#4971）、20 分钟超时（#5051）表明长时间无人值守/Agent 工作流仍是薄弱环节
- **错误信息可诊断性**：空回复误报为重试错误（#5009）、HEIC 静默失败（#5010），社区期待更明确的错误反馈

---
*本日报基于 GitHub 公开数据自动整理，链接均指向对应 Issue/Release 页面。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-10-05

## 📌 今日速览

今日无新版本发布，但社区活跃度居高：累计 50 条 Issue 更新与 50 条 PR 更新。核心开发者 @rekram1-node 一天内提交并关闭多个关键修复（compaction 模型配置、Venice 原生 provider、MCP OAuth 刷新竞态），v2 的 compaction 长期遗留 bug（#44094）正式落地修复。同时 @kitlangton 推进客户端架构重构系列 PR，统一 Effect/Promise 双实现。

---

## 🔥 社区热点 Issues

1. **[#44094](https://github.com/anomalyco/opencode/issues/44094)** [已关闭] v2 compaction 忽略 `agents.compaction.model` 配置 —— 8 月 shared model request 重构引入的回归，压缩始终用会话当前模型，14 条评论，今日由 PR #53276 修复。

2. **[#50843](https://github.com/anomalyco/opencode/issues/50843)** [开放] GitLab Duo 在自托管实例上工作异常 —— 缺少工作目录/项目上下文，且 OAuth token 过期刷新失败，12 条评论，企业用户关注。

3. **[#42950](https://github.com/anomalyco/opencode/issues/42950)** [开放] 内置 provider `big-pickle` 间歇性 socket 断连且 UI 无报错 —— Linux/WSL2 上的静默丢流问题，排查难度高。

4. **[#51764](https://github.com/anomalyco/opencode/issues/51764)** [已关闭] Anthropic system update 拒绝可恢复的工具历史 —— 影响会话恢复链路，已由 PR #52568 修复（system 消息移至下一 assistant turn 前）。

5. **[#44080](https://github.com/anomalyco/opencode/issues/44080)** [开放] `/compact` 落地 reasoning-only 空摘要导致不可逆上下文丢失 —— 数据安全级别 bug，epoch 替换会永久销毁原始对话。

6. **[#53146](https://github.com/anomalyco/opencode/issues/53146)** [开放] 两个 server 进程共享 `opencode.db` 时 `session_message.seq` UNIQUE 冲突 —— `opencode serve --service` 与 TUI 嵌入式 server 并存场景的架构级问题。

7. **[#52846](https://github.com/anomalyco/opencode/issues/52846)** [开放] 实例销毁时 pending 权限请求被静默销毁 —— 对话框永远 404，无法应答，影响工具调用生命周期完整性。

8. **[#43230](https://github.com/anomalyco/opencode/issues/43230)** [开放] Bedrock Mantle + SigV4/SSO 支持 —— 14 👍，今日最高票需求，企业 AWS 用户强诉求。

9. **[#53274](https://github.com/anomalyco/opencode/issues/53274)** [已关闭] 内置 prompt 语言规则不一致，中文会话收到英文回复 —— 与 #49889 共同反映国际化 prompt 问题是中文社区高频痛点。

10. **[#52464](https://github.com/anomalyco/opencode/issues/52464)** [已关闭] 重试正则用子串匹配状态码，上下文溢出 400（含 "500000"）被误判可重试并重试 5 次 —— 典型的低级但影响体验的缺陷。

---

## 🔧 重要 PR 进展

1. **[#53276](https://github.com/anomalyco/opencode/pull/53276)** [已合并] 修复 compaction 摘要遵守 `agents.compaction.model` 配置，关闭遗留两月的 #44094。

2. **[#52568](https://github.com/anomalyco/opencode/pull/52568)** [已合并] Anthropic system update 位置修正，解决可恢复工具历史被拒问题（#51764）。

3. **[#53271](https://github.com/anomalyco/opencode/pull/53271)** [已合并] 新增原生 Venice provider（Chat Completions），替代仅解析粗略错误信息的 venice-ai-sdk-provider（#52809）。

4. **[#53275](https://github.com/anomalyco/opencode/pull/53275)** [开放] MCP OAuth 刷新 token 轮转竞态修复 —— 复用已花费 token 的刷新结果，防止并发连接失效。

5. **[#53277](https://github.com/anomalyco/opencode/pull/53277)** [开放] 重写便携 Bash scanner，统一三个独立 lexer，使 shell 权限判定在真实 shell 下可靠。

6. **[#53237](https://github.com/anomalyco/opencode/pull/53237) / [#53240](https://github.com/anomalyco/opencode/pull/53240) / [#53241](https://github.com/anomalyco/opencode/pull/53241)** [开放] @kitlangton 的客户端重构三部曲：统一 health probe、启动记录、服务决策逻辑，消除 Effect/Promise 双份代码。

7. **[#52643](https://github.com/anomalyco/opencode/pull/52643)** [开放] 新增原生 Vercel AI Gateway 模型支持，按模型家族智能路由 Messages/Responses/Chat 协议。

8. **[#53278](https://github.com/anomalyco/opencode/pull/53278)** [开放] 修复 Web app QR 配对扫描在 Safari/Chrome 无响应的问题（BarcodeDetector 缺失时的降级 worker）。

9. **[#32370](https://github.com/anomalyco/opencode/pull/32370)** [开放] Linux 剪贴板 primary selection 支持（`linux_clipboard_selection` 配置），老牌长跑 PR 持续推进。

10. **[#52980](https://github.com/anomalyco/opencode/pull/52980)** [开放] 保留被中断工具的 checkpoint，修复 #39565 的任务恢复问题。

其他值得注意：#53270（/btw 问答独立 tab）、#53284（Explore agent 开放 shell）、#50782（managed service 端口冲突重试，已合并）。

---

## 📈 功能需求趋势

- **企业/私有部署集成**：Bedrock SigV4/SSO（#43230，14👍）、自托管 GitLab Duo（#50843）、Anthropic 兼容自定义 provider 的桌面端完整工作流（#34004）。
- **多 provider 生态扩展**：Venice 原生支持已落地，Vercel AI Gateway、模型列表清理（DeepSeek 退役模型 #40577）持续活跃。
- **国际化/语言质量**：内置 prompt 语言规则、中文输出质量（#49889、#53274）是中文社区持续痛点。
- **多 agent 可视化与交互**：并行 agent 工作流 UI（#40564）、运行中 sub-agent 查看（#40627）。

---

## ⚠️ 开发者关注点

- **Compaction 可靠性是最大痛点**：#44094（模型配置失效）已修，但 #44080（空摘要导致上下文永久丢失）仍开放——压缩路径的数据安全值得警惕。
- **错误处理静默失败普遍**：socket 断连无 UI 报错（#42950）、权限请求 404 死循环（#52846）、retry 正则误判（#52464）都属同类问题。
- **并发/多进程架构隐患**：共享 SQLite 的 seq 冲突（#53146）、MCP OAuth 刷新竞态（#53275），提示 v2 在多实例场景仍需加固。
- **本地/自定义模型兼容性**：llama.cpp Qwen3.8 thinking 档位不兼容且失败重试 5 次（#53202），max_tokens 范围错误（#40770）等长尾问题仍多。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-10-05

## 1. 今日速览

Qwen Code 发布 v0.24.7 nightly 版本，修复了 Code Mode 文本对齐与权限批准相关问题。托管运行时（Managed Agent Runtime）持续成为社区焦点，今日多条 P1/P2 级 Issue 围绕并发锁、Session 存储可靠性和上下文压缩展开。本地 llama.cpp 部署的上下文窗口误判问题（#13415）引发较多讨论，配套修复 PR #13421 已于今日提交。

---

## 2. 版本发布

**v0.24.7-nightly.20261004.9915c7ff8f**（[Release](https://github.com/QwenLM/qwen-code/releases)）
- `fix(core)`: Code Mode 文本与懒加载工具发现（lazy tool discovery）对齐（[PR #12990](https://github.com/QwenLM/qwen-code/pull/12990)）
- `fix(permissions)`: 修复已批准权限未被正确生效的问题

---

## 3. 社区热点 Issues

1. **[#13415](https://github.com/QwenLM/qwen-code/issues/13415) [P2] 本地 Qwen3.x 上下文窗口被假设为 1M，自动压缩失效** — 通过 OpenAI 兼容端点接入本地模型时，Qwen Code 假设 1M token 窗口，导致在服务器实际限制（如 262K）前从不压缩，会话超限后反复失败。直接影响本地部署用户体验，社区讨论热烈。

2. **[#13078](https://github.com/QwenLM/qwen-code/issues/13078) 每日依赖 CVE 审计失败** — 定时安全审计连续失败，可能存在新的高危漏洞或 npm audit 端点不可用，安全敏感用户需关注。

3. **[#13333](https://github.com/QwenLM/qwen-code/issues/13333) [P1] ≥8 并发 Turn 在普通硬件上停滞（store 路径锁护航）** — 二分定位发现的 managed-agent 并发性能问题，模型应答后并发 Turn 卡死，属于核心稳定性缺陷。

4. **[#13395](https://github.com/QwenLM/qwen-code/issues/13395) Kubernetes 工具运行时进度追踪** — 记录 proposal #12380 下的 K8s 工具运行时实现与跨平台交付门禁进展，是平台化分发路线的关键追踪 Issue。

5. **[#13413](https://github.com/QwenLM/qwen-code/issues/13413) [P1] Session Store 瞬时不可用导致 Turn 永久卡死** — Hosted Harness 写日志遇瞬时故障后永久停止写入，Turn 无法完成也无法取消，瞬时故障变为永久 wedge。

6. **[#10692](https://github.com/QwenLM/qwen-code/issues/10692) [P2] `<tool_call>` 方言 XML 工具调用泄漏为纯文本** — 回退恢复逻辑只覆盖 invoke 方言，漏掉了系统提示自己教的 `<tool_call>` 格式，影响兼容性场景。

7. **[#13392](https://github.com/QwenLM/qwen-code/issues/13392) [P2] PreToolUse updatedInput 在 Desktop/ACP 0.24.7 中被忽略** — 扩展 Hook 返回的更新后参数未生效，工具仍以模型原始参数执行，阻碍 MCP 集成的参数注入。

8. **[#13280](https://github.com/QwenLM/qwen-code/issues/13280) [P2] Memory 发现在 git 根目录之上加载 QWEN.md/AGENTS.md** — 内存文件加载越界至仓库父目录，存在意外的指令注入面（安全 + 正确性双重隐患）。

9. **[#13387](https://github.com/QwenLM/qwen-code/issues/13387) [P2] 自定义命令将 `@{file}` 文件内容重新解释为模板语法** — 引用文件内的字面 `{{args}}` 被错误替换，破坏命令组合使用场景。

10. **[#9693](https://github.com/QwenLM/qwen-code/issues/9693) [P2/CLOSED] Windows 上 Qwen Desktop MCP -32000 连接关闭** — 长期存在的 Windows STDIO MCP 连接问题已关闭，等待复测确认，Windows 用户可关注。

---

## 4. 重要 PR 进展

1. **[#13421](https://github.com/QwenLM/qwen-code/pull/13421)** 识别 llama.cpp 上下文溢出措辞以触发压缩 — 直接修复 Issue #13415，让反应式压缩路径正确触发而非无限循环 HTTP 400。

2. **[#13430](https://github.com/QwenLM/qwen-code/pull/13430)** Web Shell 中替换远程 Host 且不丢失绑定 — 替换时吊销旧凭证、迁移 Agent 绑定、结算旧任务，提升运维体验。

3. **[#13314](https://github.com/QwenLM/qwen-code/pull/13314)** 关闭 #12654 后置评审的 11 项 Critical 修复 — Hosted Harness 私有 Java 客户端的质量收尾。

4. **[#13376](https://github.com/QwenLM/qwen-code/pull/13376)** 发布域记录前先检查重放 — Managed Hooks H2.5 阶段加固，防止重放命令发布错误资源体。

5. **[#13168](https://github.com/QwenLM/qwen-code/pull/13168)** Hosted Turn 注入 Workspace 项目上下文 — 使托管会话能读取会话目录下的 QWEN.md/AGENTS.md。

6. **[#13210](https://github.com/QwenLM/qwen-code/pull/13210/CLOSED)** Broker 认证与凭证下发层 — 实现租户/执行者身份来自认证主体而非客户端声明，是托管运行时安全架构的重要一步。

7. **[#13375](https://github.com/QwenLM/qwen-code/pull/13375)** 超大消息记录分块提交 — 解决 >64KiB 的纯文本回答在重启/恢复后无法读回的问题。

8. **[#13264](https://github.com/QwenLM/qwen-code/pull/13264)** Web Shell 轨迹搜索与诊断过滤器 — 为轨迹视图添加文本搜索、记录类型/执行状态过滤与结果导航。

9. **[#13429](https://github.com/QwenLM/qwen-code/pull/13429/CLOSED)** 遥测文件 token 成本与工具召回分析脚本 — 为 token 治理决策提供量化对比工具。

10. **[#13416](https://github.com/QwenLM/qwen-code/pull/13416)** 固化 workspace trust 路由的严格变更权限测试 — 安全路由的测试性加固。

---

## 5. 功能需求趋势

- **托管运行时 / Multi-Agent 架构**：绝对主导方向，Issue/PR 中过半涉及 Managed Agent、Hosted Harness、Broker、K8s 运行时（#13395、#13180、#13300、#13328 等）。
- **上下文与 Token 治理**：本地模型上下文窗口检测（#13415）、自动压缩、token 成本度量（PR #13429）、models.dev 目录别名（#13414）。
- **Web Shell 体验**：轨迹搜索（PR #13264）、自适应导航（PR #12943）、auto-memory 面板（#13396）。
- **安全与凭证**：Broker 认证（PR #13210）、workspace trust 权限、依赖 CVE 审计（#13078）、Memory 加载越界（#13280）。
- **本地/开源模型支持**：llama.cpp、本地 Qwen3.x 端点的兼容性修复持续涌现。

## 6. 开发者关注点

- **本地部署的上下文管理是高频痛点**：上下文窗口误判导致会话循环失败（#13415），配套修复刚提交，建议本地用户关注 nightly。
- **托管模式下的可靠性缺陷集中爆发**：并发锁护航（#13333）、瞬时故障永久卡死（#13413）、数据库放大（#13181）——反映 managed-agent 从功能向稳定性过渡的阶段特征。
- **Hook/扩展生态存在回归**：PreToolUse updatedInput 失效（#13392）影响依赖 Hook 改写工具参数的集成方。
- **CI 不稳定与安全审计失败**（#13078、#12714、#13424）值得维护者优先处理，MySQL lane 的 flaky 测试反复出现。
- **大量"post-merge review follow-up" Issue**（#13300、#13253、#13412、#13414）显示团队采用“先合并后补审”流程，社区参与修复的入口较多。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-10-05

## 一、今日速览

今日无新版本发布，社区焦点集中在 **Engine 持久化与崩溃恢复**上：维护者 @Hmbown 基于源码审计（commit `3a78899`）于 10-04 密集提交了 5 个 Engine durability 相关设计 Issue，系统性规划跨进程重启的状态恢复方案。同时，0.10.1 集成大 PR #6815 持续推进，3 个社区贡献 PR（中文帮助文档同步、Windows UTF-8 修复、VS Code GUI 文档）已合入关闭。

## 二、版本发布

过去 24 小时无新 Release。

## 三、社区热点 Issues

**1. #6836 Engine 持久化：跨进程重启恢复已接受的执行任务** [OPEN]
作者 @Hmbown | 2026-10-04
核心设计提案：已接受的 Codewhale turn 应在进程重启后恢复已提交的执行状态、复用已完成的工作，并在外部副作用无法对账时给出可操作的“结果未知”提示。这是 durability 系列的纲领性 Issue。
🔗 codewhale-hq/Codewhale Issue #6836

**2. #6837 Engine：执行检查点与 transcript/结果原子提交** [OPEN]
作者 @Hmbown | 2026-10-04
Turn admission 检查点需与转录和结果原子化落盘，避免部分写入导致状态不一致。属于 durability 系列的底层事务保证。
🔗 codewhale-hq/Codewhale Issue #6837

**3. #6842 会话日志无上界：compaction 后被取代的消息版本仍全量驻留内存** [OPEN]
作者 @7jrxt42BxFZo4iAnN4CX | 2026-10-04
报告者已细致排查过 #4217 等相关历史 Issue 并说明差异：压缩机制虽“退休”了活跃消息，但每个被取代的历史版本仍保留在 RAM 中，长会话存在内存无限增长风险。尚无回复，值得维护者关注。
🔗 codewhale-hq/Codewhale Issue #6842

**4. #6721 紧急压缩（emergency compaction）对 `save session` 任务的影响** [OPEN, needs-triage]
作者 @ronohara | 2026-09-29 | 今日更新，2 条评论
用户自定义的“保存会话”命令在执行中被紧急压缩机制打断，影响可靠性；作者同时借此提出了改进想法。属于压缩机制边界场景的可靠性反馈。
🔗 codewhale-hq/Codewhale Issue #6721

**5. #6838 Engine：从持久化 intents/results 恢复模型与工具步骤** [OPEN]
作者 @Hmbown | 2026-10-04
durability 系列之一：模型调用与工具执行步骤需可从持久化的意图与结果中恢复重放。
🔗 codewhale-hq/Codewhale Issue #6838

**6. #6840 Engine：持久化子 agent 完成交付与所有者确认** [OPEN]
作者 @Hmbown | 2026-10-04
子 agent 的完成投递（child completion）与父级确认（owner acknowledgment）目前无持久化，重启后会丢失。对多 agent 编排场景至关重要。
🔗 codewhale-hq/Codewhale Issue #6840

**7. #6839 Engine：持久化人工等待与继续截止时间，明确重启策略** [OPEN]
作者 @Hmbown | 2026-10-04
审批/输入/动态工具等待目前为进程内状态，需定义进程重启后的等待与续期策略。
🔗 codewhale-hq/Codewhale Issue #6839

**8. #6841 [文档] Code Mode：子目录中保留允许的组合并统一文档** [OPEN]
作者 @Hmbown | 2026-10-04
Root Code Mode 默认开启后，子目录 catalog 的组合权限与文档描述存在不一致，需要代码与文档双向对齐。
🔗 codewhale-hq/Codewhale Issue #6841

**9. #5637 设计：将 MCP secret provider 限定到所属 runtime 作用域** [OPEN]
作者 @h3c-hexin | 2026-08-27 | 今日更新，3 条评论
嵌入式宿主通过修改进程环境变量传递 MCP 凭据不安全——其他线程可读取环境变量，且 secret 生命周期变为进程全局。安全设计类长期讨论。
🔗 codewhale-hq/Codewhale Issue #5637

**10. #6303 三种入口统一安装体验：官网应用、市场插件、GitHub 仓库** [OPEN]
作者 @Hmbown | 2026-09-17 | 昨日更新
Computer Use 功能从三个入口安装时体验与提示各不相同，需统一为“一键安装”。属于产品化/分发的持续改进项。
🔗 codewhale-hq/Codewhale Issue #6303

## 四、重要 PR 进展

**1. #6815 0.10.1 集成：Engine 收敛、经审查的 TypeScript mods、Ratatui UX** [OPEN]
作者 @Hmbown | 2026-10-02 | 今日仍在更新
本周期最重磅 PR：将执行、provider 身份、权限、事件、会话、存储与计量统一收敛到单一 Rust Engine；ACP、子 agent 与递归 RLM 共享 turn 路径；TypeScript mods 复用已捕获的授权、取消、检查点、父级交付与用量结算。
🔗 codewhale-hq/Codewhale PR #6815

**2. #6834 fix(tui)：修复 Windows 上 Python 输出的 UTF-8 乱码** [CLOSED ✅]
作者 @Guan0923 | 2026-10-04
Windows 管道输出默认 GBK，而 `code_execution` 固定按 UTF-8 解码导致中文乱码。通过为 Python 子进程设置 `PYTHONIOENCODING=utf-8` 修复，附真实路径回归测试。影响范围控制精准。
🔗 codewhale-hq/Codewhale PR #6834

**3. #6833 fix(tui)：12 个语言包帮助摘要与英文同步** [CLOSED ✅]
作者 @Lstarsky0 | 2026-10-04
跟随 `6e7410be` 的英文命令摘要重写（60 列限制、`/help` 副标题调整），同步更新 12 个翻译语言包。
🔗 codewhale-hq/Codewhale PR #6833

**4. #6835 docs(web)：将社区 VS Code GUI 加入“Where you can use Codewhale”** [CLOSED ✅]
作者 @gaord | 2026-10-04
将社区维护的 CodeWhale GUI for VS Code 添加到官网多处使用入口列表，不动官方扩展。
🔗 codewhale-hq/Codewhale PR #6835

**5. #6832 refactor(commands)：可移植的 config 策略与 status Shapes（FEAT-027）** [OPEN]
作者 @aboimpinto | 2026-10-03 | 昨日更新
通过共享 command Shapes 使 `/permissions`（含别名与 `/config` 权限路由）和 `/status` 独立可移植，保持公开行为不变。延续 #6793 的命令迁移工作。
🔗 codewhale-hq/Codewhale PR #6832

*（过去 24 小时共 5 个 PR 更新，其余见上。）*

## 五、功能需求趋势

- **引擎持久化与崩溃恢复（最热）**：#6836–#6840 五连发，原子检查点、重放恢复、人工等待持久化——维护者正系统性补齐 Engine 的 durability 短板，是当前架构演进主线。
- **内存与压缩机制**：#6842（日志内存无上界）、#6721（紧急压缩打断任务）表明上下文压缩的内存占用与执行边界是用户侧主要痛点。
- **安全与凭据管理**：#5637（MCP secret 作用域隔离）、#6841（Code Mode 子目录权限组合）反映对作用域化权限/凭据模型的持续需求。
- **架构收敛**：PR #6815 显示 TypeScript → Rust Engine 的单引擎收敛战略，TS 层退化为经审查的薄壳。
- **分发与上手体验**：#6303（三入口统一安装）及一系列文档 PR 指向产品化打磨阶段。

## 六、开发者关注点

1. **Windows 中文环境兼容性**：#6834 的 GBK/UTF-8 乱码问题再次出现，Windows 国际化路径仍是贡献热点，建议相关工具链尽早统一编码策略。
2. **长会话内存增长**：compaction 未回收被取代消息版本（#6842），重度用户已开始量化报告，若无修复可能影响生产可用性。
3. **自定义命令被打断的可靠性**：紧急压缩等内部机制与用户工作流的冲突（#6721）缺乏协调策略。
4. **命令可移植性改造门槛**：FEAT-027（#6832）等 Shapes 迁移对贡献者的架构理解要求较高，contribution-gate 流程正在规范社区参与。
5. **多 agent/子 agent 状态一致性**：子 agent 完成交付与确认的持久化（#6840）是多 agent 编排走向可靠的基础设施前提。

---
*数据截至 2026-10-05 | 来源：github.com/Hmbown/DeepSeek-TUI*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-10-05

## 1. 今日速览

今日无新版本发布。社区活跃度集中在性能与稳定性话题：TUI 流式渲染打满单核的老问题（#6665）持续发酵，多条关于 Bedrock、Gemini 3、openai-codex 的 provider 兼容性 bug 被修复关闭，同时出现一批高质量的功能提案（结构化日志 API、嵌入宿主自定义 codemode 路径等），显示 SDK/嵌入场景正成为新的需求焦点。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **#6665 TUI 流式输出时打满一个 CPU 核心**（14 评论，进行中）
   根因已定位：未缓存的 `Intl.Segmenter` 字素切分 + 每个 chunk 全量重建 Markdown。长会话场景下体验明显受损，是当前最受关注的性能问题。
   链接：earendil-works/pi Issue #6665

2. **#10314 全屏模式下 Home/End 默认行为之争**（10 评论）
   Home/End 从行内光标移动变为全屏滚动，引发默认值取舍的讨论，典型的行为变更回响。
   链接：earendil-works/pi Issue #10314

3. **#8643 Bedrock 上 OpenAI 模型拒绝 toolResult.content 中嵌套的图片**（10 评论）
   提出将 tool-result 图片提升为同级 user content block，作者已备好修复与回归测试，等待合入。
   链接：earendil-works/pi Issue #8643

4. **#8834 包命名空间（pi.namespace）统一 skills/prompt templates 解析**（已关闭，8 评论）
   提案质量高但标记 no-action，命名冲突治理仍是社区潜在需求。
   链接：earendil-works/pi Issue #8834

5. **#8301 提示队列中无法交织 /compact 与 prompt**（7 评论）
   长任务批处理场景痛点：首个 `/compact` 会立即取消会话开始压缩，破坏排队语义。
   链接：earendil-works/pi Issue #8301

6. **#10330 CLI 模式下自动压缩不触发**（6 评论）
   `pi --mode json` 一次性调用永不 auto-compact，影响脚本化长任务，与 #6994 的修复形成对照。
   链接：earendil-works/pi Issue #10330

7. **#9134 Anthropic 适配器静默丢弃自定义工具 schema 的根级 anyOf**（6 评论）
   模型侧 schema 与本地校验不一致，属隐蔽的正确性问题。
   链接：earendil-works/pi Issue #9134

8. **#9986 工具执行中 abort 留下未应答的 tool calls**（4 评论，今日更新）
   会话历史尾部 tool call 无结果且无报错，对后续续传与回放都有影响。
   链接：earendil-works/pi Issue #9986

9. **#10467 Gemini 3 中途切换后 400：function call 缺 thought_signature**（今日新报）
   跨 provider 迁移会话历史时触发，反映多模型混合会话的兼容性边界。
   链接：earendil-works/pi Issue #10467

10. **#10457 为核心与扩展提供共享结构化诊断日志 API**（今日新报）
    覆盖 TUI/print/JSON/RPC/SDK 全模式、支持自定义 sink，是 SDK 生态成熟的重要提案。
    链接：earendil-works/pi Issue #10457

## 4. 重要 PR 进展

过去 24 小时仅 4 个 PR 更新，全部已关闭，无新开启的活跃 PR：

1. **#10440 fix: QuickJS wasm 路径每进程只解析一次**
   修复 pnpm 全局更新后 codemode 因安装目录被 GC 而失效的问题（对应 Issue #10439）。
   链接：earendil-works/pi PR #10440

2. **#10463 fix: codemode MCP 测试适配图片保存标签**
   CI 修复：测试未预期新增的 `[Image saved to ...]` 标签。
   链接：earendil-works/pi PR #10463

3. **#2597 docs: 补充 resources_discover 事件文档**
   存量文档 PR（3 月创建）今日关闭，补充了事件示例及 Claude Code skills 加载示例。
   链接：earendil-works/pi PR #2597

4. **#10448 pr for sync**（同步用途，无实质内容）
   链接：earendil-works/pi PR #10448

> 注：今日 PR 数量少且均无评论，主要修复已通过 issue 追踪闭环，PR 活跃度整体偏低。

## 5. 功能需求趋势

- **Provider 兼容性矩阵持续扩张**：Bedrock 图片传递（#8643）、Gemini 3 thought_signature（#10467）、openai-codex maxTokens/退出延迟（#9845、#10279）、OpenCode Console OAuth（#10335）、reasoning 模型省略 temperature（#10468）——多 provider 长尾兼容是最大需求来源。
- **SDK / 嵌入式宿主场景崛起**：嵌入方自定义 codemode wasm/worker 路径（#10466）、共享结构化日志 API（#10457）、RPC 层 display-only 文本变换（#10454）。
- **MCP 生态演进**：Stateless MCP 2026-07-28 双版本支持（#10416）、MCP 凭据入 keychain（#10291）、嵌套工具执行 API（#10455）。
- **TUI 可定制性**：主题驱动的选区样式（#9715）、助手消息背景色（#10469）、overlay 覆盖图片（#9439）。
- **会话与队列语义完善**：/compact 与队列交织（#8301）、abort 后队列清理（#9194）、CLI 自动压缩（#10330）。

## 6. 开发者关注点

- **性能是头号痛点**：流式渲染单核 100% 占用（#6665）长期未解，渲染管线缓存与增量重建呼声高。
- **静默失败损害信任**：schema 静默丢弃（#9134）、maxTokens 静默忽略（#9845）、abort 后历史缺失（#9986）——社区反复强调“宁可报错也不要悄悄丢数据”。
- **脚本化/无人值守场景待补齐**：CLI 自动压缩、`pi -p` 3 秒退出延迟、RPC 队列控制均影响自动化流水线可靠性。
- **跨 provider 会话迁移脆弱**：混合模型历史（尤其 Gemini 3 签名约束）容易触发 400，缺少防护或提示。
- **安全默认值**：MCP token 明文落盘被视为风险，期望系统 keychain 集成。

---
*数据来源：github.com/earendil-works/pi · 统计窗口：2026-10-04 ~ 2026-10-05*

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报 · 2026-10-05

## 📰 今日速览

oh-my-pi 发布 **v18.6.1** 补丁版本，修复了 OpenAI 原生上下文压缩（compaction）在含大量截图会话中的失败问题。今日社区焦点集中在**浏览器工具链的大规模修复**（@will-bogusz 一天连发 10+ 个 browser 相关 PR）和**遥测（OTel）可观测性缺口**的持续讨论。Issue 方面，按模型粒度配置压缩阈值的长期需求（#6835）仍是讨论最热的话题。

---

## 🚀 版本发布

### [v18.6.1](https://github.com/can1357/oh-my-pi/releases)

- **@oh-my-pi/pi-agent-core**：修复原生 OpenAI 上下文压缩在包含大量截图的会话中失败的问题——此前图像大小估算会导致压缩请求被错误拒绝。
- **@oh-my-pi/pi-ai**：修复与 Command Code DeepSeek 的兼容性问题。

> 解读：两个修复都与上下文压缩/模型兼容性相关，与 Issue #6835（per-model compaction）的社区讨论形成呼应，说明 compaction 是当前的高敏感区域。

---

## 🔥 社区热点 Issues

1. **[#6835](https://github.com/can1357/oh-my-pi/issues/6835) — 支持按模型配置压缩阈值**（22 评论 / 8 👍）
 最热门的增强需求。当前 `compaction.thresholdPercent/thresholdTokens` 为全局配置，社区希望不同模型可使用不同压缩水位，长期讨论且已 triaged，是 roadmap 级需求。

2. **[#14328](https://github.com/can1357/oh-my-pi/issues/14328) — Antigravity provider 调用 Claude 模型 404**（18 评论，已关闭）
 Google Antigravity 上使用 `claude-sonnet-5-5-low` 直接返回 404 NOT_FOUND，影响跨厂商模型路由的用户，快速关闭说明已有修复。

3. **[#14276](https://github.com/can1357/oh-my-pi/issues/14276) — opencode-go provider 死 Key 未轮换，全部请求 402**（10 评论）
 6 个并行子代理数分钟内全部死于 "Insufficient account funds"，暴露了 provider 密钥健康检查与自动轮换机制的缺失。

4. **[#14400](https://github.com/can1357/oh-my-pi/issues/14400) — 子代理产物在配额等待期被 5 分钟超时驱逐**（3 评论，今日新提）
 `retry.waitForUsageReset` 允许会话休眠数小时等待配额重置，但 `AsyncJobManager` 硬编码 5 分钟产物保留期，导致后台子代理结果丢失。生命周期不匹配的架构级问题。

5. **[#14289](https://github.com/can1357/oh-my-pi/issues/14289) — 并发 `skill://` grep 死锁 Bun worker 池**（p1，已关闭）
 原生搜索等待 JS 文件系统回调，而回调又依赖同一饱和线程池，形成经典死锁并阻塞无关文件操作。高优先级、已修复。

6. **[#14388](https://github.com/can1357/oh-my-pi/issues/14388) — 角色级 fallback chain 跨角色泄漏**
 为 `task` 角色配置的 `retry.fallbackChains` 会被共享同一主模型的其他角色（`slow`/`default`）误用，影响重试路由正确性。

7. **[#14369](https://github.com/can1357/oh-my-pi/issues/14369) — 多问题 ask 中勾选项与 "Other" 输入互斥丢失**
 多选问题中用户同时勾选和填写自定义文本时，勾选项被静默丢弃，属于交互正确性 bug。

8. **[#14340](https://github.com/can1357/oh-my-pi/issues/14340) — 内存占用过高（1.34 GiB）**
 两个 Mnemosi embedding worker 并发常驻，终端场景下内存压力显著，性能类问题的典型反馈。

9. **[#13787](https://github.com/can1357/oh-my-pi/issues/13787) — Windows Terminal 中 Shift+Enter 直接提交**（标记 wontfix）
 Windows 平台按键映射长期痛点，官方判定为平台限制，但评论区持续有用户受影响。

10. **[#13928](https://github.com/can1357/oh-my-pi/issues/13928) — `--resume` 指向缺失路径时静默创建新会话**
 显式 resume 失败却无任何提示，违反最小惊讶原则，数据可追溯性风险。

---

## 🔧 重要 PR 进展

> 今日 PR 主线：**@will-bogusz 的浏览器工具集中修复**，质量高且标注了 review 优先级。

1. **[#14412](https://github.com/can1357/oh-my-pi/pull/14412) — fill/type 拒绝禁用或只读字段**（review:p0）
 此前对禁用字段 `fill` 会清空目标并把文本错误地输入到其他字段还报告成功——危险且静默的错误行为。

2. **[#14413](https://github.com/can1357/oh-my-pi/pull/14413) — 清空字段时通知页面框架**（review:p0）
 `fill(selector, "")` 现在派发事件，使 React/Vue 表单能感知到已清空，避免提交旧值。

3. **[#14407](https://github.com/can1357/oh-my-pi/pull/14407) — 不同端口的 browser relay 不再互相杀死**（review:p0）
 全局 daemon 单一命名导致一个会话配置自定义 `relayUrl` 会悄悄杀掉其他会话的 relay，现改为按端口命名。

4. **[#14426](https://github.com/can1357/oh-my-pi/pull/14426) — 自定义 glob 后端遵守工具 deadline**（review:p1）
 修复第三方 GlobOperations 后端永不返回时 `glob` 工具调用永久挂起的问题。

5. **[#14401](https://github.com/can1357/oh-my-pi/pull/14401) — 保留同毫秒同内容的两条助手回复**（review:p1）
 相同时间戳 + 相同内容的回复会被 saver 误判为重复而丢失，现在为每条回复赋予独立身份。

6. **[#14415](https://github.com/can1357/oh-my-pi/pull/14415) — `tab.observe()` 纳入 iframe 控件**
 登录/支付表单常嵌在 iframe 中，此前 agent 完全不可见，直接影响浏览器自动化任务成功率。

7. **[#14419](https://github.com/can1357/oh-my-pi/pull/14419) — Esc 中断聚焦 agent 的当前回合**
 `/tan` 子代理视图中 Esc 改为中断该 agent 运行，而非返回主会话，UX 一致性改进。

8. **[#14414](https://github.com/can1357/oh-my-pi/pull/14414) — 单字符串 MCP 工具参数按 JSON key 顺序解析**
 修复单参数 MCP 工具（如 `delete_this_file`）操作目标取决于 key 到达顺序的不确定性行为。

9. **[#14424](https://github.com/can1357/oh-my-pi/pull/14424) — 会话级 `/relay` 开关**
 browser relay 可按会话开关，避免全局配置互相干扰，与 #14407 的多 relay 修复配套。

10. **[#14411](https://github.com/can1357/oh-my-pi/pull/14411) — 插件中被 hide/disable 的 skill 应隐藏而非丢弃**
 设置了 `disable-model-invocation` 的 skill 此前彻底消失（无法 `/skill:<name>` 调用），现在正确地仅对模型隐藏。

---

## 📈 功能需求趋势

1. **遥测与可观测性（最集中的方向）**：@schickling-assistant 系列报告构成完整的 OTel 缺口清单——cost 未导出（[#10839](https://github.com/can1357/oh-my-pi/issues/10839)）、辅助模型调用无 span 且占 37% 成本（[#10841](https://github.com/can1357/oh-my-pi/issues/10841)、[#11679](https://github.com/can1357/oh-my-pi/issues/11679)）、多进程指标冲突（[#10840](https://github.com/can1357/oh-my-pi/issues/10840)）、压缩结果无结构化信号（[#11677](https://github.com/can1357/oh-my-pi/issues/11677)）、重试/429 无稳定契约（[#11678](https://github.com/can1357/oh-my-pi/issues/11678)）。企业级监控需求明显上升。
2. **多模型精细化管理**：按模型压缩阈值（#6835）、按 agent 单独开启 fast mode（[#7106](https://github.com/can1357/oh-my-pi/issues/7106)）、effort 后缀粒度（#14320）——社区希望配置粒度从全局下沉到模型/角色级。
3. **浏览器自动化可靠性**：今日 PR 主战场，iframe 支持、超时语义、relay 生命周期均在快速补齐。
4. **成本与 token 经济**：端到端 token 消耗基准（[#11135](https://github.com/can1357/oh-my-pi/issues/11135)）、GitHub Copilot 新计费模式识别（[#13849](https://github.com/can1357/oh-my-pi/issues/13849)）反映用户对成本核算精度的高要求。

---

## ⚠️ 开发者关注点

- **Provider 健康度**：死 Key 不轮换（#14276）、Antigravity 404（#14328）表明多 provider 抽象层的容错和降级仍需加强。
- **生命周期不匹配**：配额等待 vs 产物驱逐（#14400）、warm/cold 会话 guard 不一致（#14288）——超时与重试语义的一致性是反复出现的 bug 源头。
- **静默失败类 bug**：resume 静默新建会话（#13928）、exec 被杀进程返回 exit 0（#14287）、勾选项丢失（#14369）——社区对"报告成功但实际失败"的模式容忍度极低。
- **资源占用**：高内存（#14340）与 worker 池死锁（#14289）提示长时运行稳定性仍是薄弱环节。

---
*数据来源：github.com/can1357/oh-my-pi · 统计窗口：过去 24 小时（Issues 70 条 / PRs 245 条更新）*

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*