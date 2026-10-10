# AI CLI 工具社区动态日报 2026-10-10

> 生成时间: 2026-10-10 04:55 UTC | 覆盖工具: 11 个

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
**数据日期：2026-10-10**

---

## 1. 生态全景

AI CLI 工具已从单一“终端补全”演化为覆盖多 Agent 编排、沙箱安全、远程会话、桌面集成（GUI/Desktop 标签页）的完整开发平台。头部工具（Claude Code、Codex、Gemini CLI、Copilot CLI）均在向企业级能力演进——合规策略（HIPAA、managed policies）、统一管控、计费可见性成为新竞争维度。同时，“长时自治任务可靠性”（agent 挂起、会话恢复、上下文截断）成为全生态最集中的痛点集合。开源新锐（OpenCode、Pi、Qwen Code、Codewhale）则通过插件化、多 provider 接入和架构重构快速抢占生态位，竞争格局明显分层。

---

## 2. 各工具活跃度对比

| 工具 | 热点 Issues（当日列举） | PR 活动 | Release | 今日焦点 |
|---|---|---|---|---|
| **Claude Code** | 10+（Mods 提案 250 评论断层第一） | 2 更新，无合并 | v2.1.296 | Desktop/CLI 策略统一、长输入静默截断 |
| **OpenAI Codex** | 10（Windows 相关占 8 条） | 10+（MXC 沙箱、code mode 密集推进） | v0.162.1 稳定 + 2 alpha | Windows 沙箱/WSL 稳定性 |
| **Gemini CLI** | 10（P1/P2 级居多） | 10（多个 P1 修复当日合并） | nightly v0.65.0 + preview | Subagent 挂起/状态误报 |
| **Copilot CLI** | 10 | 1（疑似垃圾 PR） | **4 个补丁版**（v1.0.95→96-2） | 沙箱兼容性、修复节奏最快 |
| **OpenCode** | 10 | **10**（@potoior 密集贡献） | 无 | TUI 性能、计费误报、Effect 4.0.1 |
| **Qwen Code** | 10 | 10（多项合并） | v0.25.1-preview.1 | Managed Agent 架构主线推进 |
| **Codewhale (DeepSeek TUI)** | 10（25 条更新） | 10（22 条更新） | 无（crates.io 体积阻塞） | RS-8~14 架构拆分系列立项 |
| **Pi** | 10（**103 条** Issue 更新） | 10（18 条更新） | 无 | Windows 调研帖 79 评论、prompt cache |
| **oh-my-pi** | 10 | 10（贡献者六连发） | v18.8.7 | 多 provider 故障转移、macOS natives |
| **Kimi Code CLI** | 0 | 0 | 无 | 无活动 |
| **DeepSeek Harness** | 0 | 0 | dsh-v0.2.1-alpha.2 | 发布后观察期（思考翻译 + Worktrees 插件） |

**活跃度梯队**：Pi（讨论量最高）> Codex / Qwen Code / Codewhale / oh-my-pi / OpenCode（工程迭代密集）> Claude Code / Gemini CLI / Copilot CLI（官方仓库节奏放缓，实际开发可能走内部流水线）> DeepSeek Harness > Kimi CLI（停滞）。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体表现 |
|---|---|---|
| **沙箱安全 vs 可用性** | Codex、Copilot CLI、Gemini CLI、Codewhale、oh-my-pi | Codex 的 MXC/ACL 失败簇、Copilot 的 JVM/Gradle/git 凭证隔离冲突、Gemini 的 rootless Podman 支持、Codewhale 的 `&` 误判——安全误报阻断正常工作流是跨生态第一矛盾 |
| **长会话/自治任务可靠性** | Claude Code、Gemini CLI、Qwen Code、oh-my-pi、Codewhale | Claude Code 5 小时限制杀死 agent、Gemini agent 无限挂起与假成功（MAX_TURNS 后仍报 GOAL success）、Qwen recovery-blocked 卡死、oh-my-pi 默认提示词导致“计划惯性”失控 |
| **上下文与 token 成本** | Gemini CLI、Qwen Code、Pi、oh-my-pi、Claude Code | Gemini 36.6k tokens/turn 基线、Qwen 动态工具输出截断（#2566）、Pi/oh-my-pi 的 prompt cache 失效重复计费、Claude subagent autoCompactWindow |
| **多 Agent / 子 Agent 编排** | Claude Code、Gemini CLI、Qwen Code、oh-my-pi、OpenCode、Codewhale | Qwen Managed Agent 双路径架构（51 评论）、Gemini subagent Sprint、Claude Mods 插件化提案、oh-my-pi 子 agent 模型/工具作用域控制 |
| **Windows 平台支持** | Codex、Copilot CLI、Pi、Codewhale、OpenCode | Codex 热榜 8/10 为 Windows 问题、Pi 官方 Windows 调研帖（79 评论）、Codex #42412 更新后无法启动 |
| **计费/用量透明度** | Claude Code、Codex、Copilot CLI、OpenCode、oh-my-pi、Pi | OAuth 后 `/usage` 消失、"at capacity" 与实际用量不符、Go 订阅误报余额不足、Antigravity 虚假 429 |
| **会话恢复与数据完整性** | Claude Code、Qwen Code、OpenCode、Pi | Claude 长输入静默截断/折叠丢失、Qwen ACP 恢复无法区分取消与中断、OpenCode V1→V2 会话失踪 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 企业管控 + Desktop/CLI 融合 + 插件化（Mods） | 企业团队、重度 agent 用户 | 闭源、策略驱动（managed.policies）、多端网关 |
| **OpenAI Codex** | Windows 深耕、code mode（V8/JS 执行）、CUA 桌面自动化 | Windows/企业自动化用户 | Rust 重写、MXC 沙箱、dots 任务编排 |
| **Gemini CLI** | Subagent 生态、AST 感知工具链、token 效率 | 开发者效率导向 | 开源、原生模型能力（Gemini 3 bash）+ OS 沙箱 |
| **Copilot CLI** | 沙箱精细化、GitHub/Entra 生态集成、ACP 协议 | GitHub 企业用户、CI 场景 | 密集小步快跑补丁、BYOK 多模型 |
| **Qwen Code** | Managed Agent 平台化、K8s 运行时 | 多 Agent 平台建设者 | 分阶段架构演进（Stage H 系列）、journal/daemon 持久化 |
| **OpenCode** | 开源多 provider、订阅计费 | 订阅制个人开发者 | TypeScript/Effect 4、V2 迁移期 |
| **Pi / oh-my-pi** | 扩展生态、多 provider 故障转移、桌面自动化 | 高级定制用户、成本敏感用户 | Bun/Node 双轨、hook 体系、社区驱动 |
| **Codewhale** | 运行时/TUI 架构解耦、workflow 引擎 | 架构偏好型深度用户 | Rust crate 拆分（RS 系列）、多供应商 OAuth |
| **DeepSeek Harness** | 本地化（思考翻译）、Git Worktrees 隔离 | 非英文用户、并行工作流 | 插件化架构、付费/免费引擎分层 |

---

## 5. 社区热度与成熟度

- **成熟稳定期**：Claude Code、Copilot CLI——issue 转向边缘场景与企业合规（HIPAA、OAuth 计费），官方仓库 PR 活动收敛（Copilot 仅 1 条疑似垃圾 PR），核心开发内化。
- **高质量问题驱动期**：Codex、Gemini CLI——问题集中在平台工程（沙箱、恢复），团队修复响应快（Gemini 当日合并多个 P1）。
- **快速迭代/架构重塑期**：Qwen Code（Managed Agent 分阶段交付）、Codewhale（RS-8~14 拆分系列）、OpenCode（V2 + Effect 4.0.1 迁移）——社区与工程双高活跃，但稳定性代价明显（迁移丢数据、发布被 crates.io 阻塞）。
- **社区讨论最热**：Pi（103 条 Issue 更新/日，官方主动发起 Windows 调研），社区治理文化好（用户自查撤回误报）。
- **沉寂/观望**：Kimi CLI 无活动；DeepSeek Harness 发布后静默。

---

## 6. 值得关注的趋势信号

1. **“长任务容错”成为下一个竞争高地**：5 小时硬杀 agent、rewind 杀死后台任务、recovery 卡死——全生态用户都在要求“暂停/恢复/隔离”而非“静默失败”。选型时应重点考察会话恢复机制（journal、checkpoint、branch）的成熟度。
2. **沙箱进入“准确性”攻坚阶段**：从“有没有沙箱”转向“误报率多低”。JVM 进程模型、git 凭证、heredoc、重定向符号等边界场景是当前主要摩擦点，Full Access 绕过盛行说明安全与可用性仍未平衡。
3. **Prompt cache 是隐性成本杀手**：Pi、oh-my-pi、Claude Code 均暴露缓存被 hook/系统提示词静默破坏导致重复计费的问题。重度用户应将“缓存命中率可观测性”纳入工具评估指标。
4. **Desktop/GUI 与 CLI 行为一致性**是新的质量门槛：Claude Code、Codex 均出现两端权限/rewind/提示语义分裂，跨端用户承担双份心智成本。
5. **多 Agent 编排是所有头部工具的路线图主线**（Claude Mods、Qwen Managed Agent、Gemini subagent Sprint、Codex dots）——但配套的状态诚实性、可归因性、资源回收问题正集中爆发，实际生产采用仍需谨慎。
6. **计费/限额透明度是付费转化信任基础**：虚假 429、余额误报、用量明细消失在 6+ 工具中出现，成本敏感团队应优先选择用量归属清晰的方案。

**给开发者的实操建议**：Windows 用户暂缓深度依赖 Codex/Copilot 沙箱模式；长时自治工作流优先验证 Qwen Code/Codewhale 的恢复机制；成本敏感的多 provider 用户关注 Pi/oh-my-pi 生态；企业合规场景跟踪 Claude Code 的 managed policies + HIPAA 示例落地。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
（数据截止 2026-10-10，来源：github.com/anthropics/skills）

> 说明：本期 PR 数据缺少评论数字段，以下排序基于 PR 活跃度（更新时间、关联 Issue 讨论热度）综合评估。所有列出 PR 状态均为 **OPEN**。

---

## 一、热门 Skills 排行（PR）

| # | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | **mcp-builder 修复** — [PR #1742](https://github.com/anthropics/skills/pull/1742) | 适配 mcp>=2.0：`streamable_http_client` 重命名及自定义 Header 传参方式变更 | 关联 [#1668]；mcp-builder 是生态核心工具链，兼容性问题影响面广 | OPEN |
| 2 | **skill-creator 触发评测修复** — [PR #1298](https://github.com/anthropics/skills/pull/1298) | 隔离 trigger evals，修复 Windows select() 失败与误判 | 直接回应社区最密集的 skill-creator 评测问题（#1352、#1383、#556） | OPEN |
| 3 | **md2video-audio** — [PR #1703](https://github.com/anthropics/skills/pull/1703) | Markdown → Marp 幻灯片 → 带真人感配音的 MP4 视频，零成本 | 内容创作自动化方向，需求呼声高 | OPEN |
| 4 | **AWT (AI Watch Tester)** — [PR #822](https://github.com/anthropics/skills/pull/822) | AI 视觉 + 浏览器控制的零代码 E2E 测试生成 | 测试自动化是社区长期需求缺口 | OPEN（3月提交，持续更新至9月） |
| 5 | **document-typography** — [PR #514](https://github.com/anthropics/skills/pull/514) | AI 生成文档的排版质控（孤行、孤词换行、编号错位） | 解决“所有 Claude 生成文档的通病”，普适性强 | OPEN |
| 6 | **skill-creator eval viewer 安全加固** — [PR #1961](https://github.com/anthropics/skills/pull/1961) | 修复脚本逃逸、DNS rebinding、跨站 POST 等本地查看器漏洞 | 回应 Issue [#1394](https://github.com/anthropics/skills/issues/1394)（XSS），安全审计氛围浓厚 | OPEN |
| 7 | **scnet-hpc** — [PR #1615](https://github.com/anthropics/skills/pull/1615) | SSH + Slurm 的 HPC 集群操作 Skill | 科研计算场景的代表需求 | OPEN |
| 8 | **docx 超时修复** — [PR #1792](https://github.com/anthropics/skills/pull/1792) | LibreOffice 超时报错误而非成功，并校验修订标记真正清除 | 文档处理 Skills 可靠性问题频出 | OPEN |

---

## 二、社区需求趋势（Issues 提炼）

1. **安全与信任机制**（最热，43 评论）
   [#492](https://github.com/anthropics/skills/issues/492)：社区 Skill 伪装 `anthropic/` 官方命名空间，存在信任边界滥用。配套出现命令注入修复 [#1980]、eval-viewer XSS [#1394]。→ **官方签名/命名空间治理是第一诉求**。

2. **skill-creator 评测体系可靠性**
   [#556](https://github.com/anthropics/skills/issues/556)（触发率恒为 0%）、[#1352](https://github.com/anthropics/skills/issues/1352)（并行 worker 串 UUID 导致假阴性）、[#1383](https://github.com/anthropics/skills/issues/1383)。→ 社区需要可信的 Skill 触发评估基准。

3. **组织级共享与分发**
   [#228](https://github.com/anthropics/skills/issues/228)（16 评论）：要求 org 内 Skill 库/直链分享，替代 Slack 传文件手工导入。

4. **上下文经济性**
   [#1487](https://github.com/anthropics/skills/issues/1487)：claude-api Skill 单次注入 ~156k token 打爆上下文；[#189](https://github.com/anthropics/skills/issues/189) 插件重复安装导致重复内容。→ **按需渐进加载（progressive disclosure）需真正落地**。

5. **新方向提案**：紧凑记忆符号系统（[#1329](https://github.com/anthropics/skills/issues/1329) compact-memory）、推理质量门禁流水线（[#1385](https://github.com/anthropics/skills/issues/1385)）、Agent 治理（#412）、智能合约审计（PR #1771）。

---

## 三、高潜力待合并 Skills（活跃 OPEN PR）

- **PR #1742 mcp-builder 适配 mcp>=2**：修复底层兼容性，10 月仍在更新，合并概率高。
- **PR #1298 skill-creator trigger evals 修复**：直击社区三大评测 Issue，官方动力强。
- **PR #1961 eval-viewer 安全加固**：安全问题通常优先处理，且与 #1394 明确对应。
- **PR #1792 docx 超时校验**：小而确定的可靠性修复，典型 fast-track 候选。
- **PR #822 AWT E2E 测试**：挂起半年但持续维护（9 月仍在更新），测试方向空缺明显。
- **PR #486 ODT Skill**：补齐 OpenDocument 格式覆盖，文档套件的自然延伸。

⚠️ 风险提示：在命名空间治理落地前，社区新 Skill（如 #1771 ProofCore 这类带商业属性的外部 PR）合并前景存疑。

---

## 四、生态洞察（一句话）

**当前社区最集中的诉求是：把 Skills 从“能用”推向“可信”—— 即官方命名空间安全治理、评测触发率真实可靠、以及上下文按需加载三大基建问题亟待解决，其次才是更多垂直领域的新 Skill。**

---

# Claude Code 社区动态日报 — 2026-10-10

## 1. 今日速览

今日发布 **v2.1.296**，新增 Claude Desktop 网关模式的 `managed.policies[]` 策略键，以及 subagent 的 `autoCompactWindow` 配置。社区方面，长输入被静默截断的 bug 持续发酵（多平台复现），Desktop 端 Remote Control 会话在自动更新后掉线的问题引发关注。著名的 Mods 扩展性提案（#91870）持续升温，评论已达 250 条。

## 2. 版本发布

**v2.1.296**（[Release](https://github.com/anthropics/claude-code/releases)）
- 在 Claude apps 网关的 `managed.policies[]` 中新增 `code` 键：与 `cli` 相同的策略集，同样应用于 Claude Desktop 的 Code 标签页；配合 `desktop` 可启用 Desktop 网关模式。这对企业统一管控 CLI 与 Desktop 策略意义重大。
- subagent frontmatter 和 `--agents` 定义中新增 `autoCompactWindow`，为子代理提供自动压缩上下文的窗口控制。

## 3. 社区热点 Issues

1. **#91870 — Mods：让 Claude Code 扩展性提升 10 倍**（250 评论 / 131 👍）
   官方参与度最高的提案，10 月 1 日社区更新确认正在推进，团队快速消化反馈。是观察 Claude Code 插件化路线图的关键 issue。
   🔗 https://github.com/anthropics/claude-code/issues/91870

2. **#90910 — macOS/Warp 下长 prompt 从头部被静默截断（2211 字符仅送达 762）**（has repro）
   词中截断、无任何警告，属于数据丢失级 bug，长期影响信任。
   🔗 https://github.com/anthropics/claude-code/issues/90910

3. **#92118 — Linux/WSL 大段粘贴内容静默截断**
   与 #90910 同族，说明长输入截断是跨平台系统性问题，而非单一终端 bug。
   🔗 https://github.com/anthropics/claude-code/issues/92118

4. **#99252 — 用户自己粘贴的输入被折叠为 "(N lines hidden)"，Ctrl-O 无法展开、无法复制回**
   模型收到完整内容但 UI 侧丢失，配合上述截断问题，说明 TUI 转录层对长输入的处理存在多处缺陷。
   🔗 https://github.com/anthropics/claude-code/issues/99252

5. **#100106 — Desktop 自动更新重启导致所有 Remote Control 会话掉线且无法自动重连**
   影响远程办公场景核心体验，需逐个本地打开才能恢复。
   🔗 https://github.com/anthropics/claude-code/issues/100106

6. **#100973 — Desktop 中撤回/编辑消息会杀死所有后台任务（含 rewind 点之前启动的）**
   报告者指出 #78396 曾被标记修复但行为回归，Desktop 与终端行为不一致。
   🔗 https://github.com/anthropics/claude-code/issues/100973

7. **#98299 — Windows 上触及 5 小时会话限制直接杀死运行中的 workflow agents**
   长时间自治工作流被硬中断而非暂停，对 agent 重度用户是致命问题。
   🔗 https://github.com/anthropics/claude-code/issues/98299

8. **#100974 — Auto mode 的 "环境教学" 提示只出现在终端，阻塞 Remote Control 会话**
   远程客户端完全看不到提示，误按 Enter 进入 setup，是 Remote Control 与 auto mode 交互的体验盲区。
   🔗 https://github.com/anthropics/claude-code/issues/100974

9. **#99804 — 切换到 OAuth token 认证后 `/usage` 计划用量明细消失**
   计费可见性问题，切换认证方式的用户无法追踪用量。
   🔗 https://github.com/anthropics/claude-code/issues/99804

10. **#99865 — Desktop auto mode 下 WebFetch 裸 allow 规则仍触发 "Allow once"**
    权限规则在 Desktop Code 标签页未按预期生效，企业权限配置可靠性存疑。
    🔗 https://github.com/anthropics/claude-code/issues/99865

## 4. 重要 PR 进展

过去 24 小时仅更新 2 个 PR，无新增合并：

1. **#41447 — feat: open source claude code ✨**（OPEN）
   社区经典"催开源"玩笑式 PR，同时关闭 #59、#456、#2846、#22002、#41434 等多个相关请求，持续被顶起。
   🔗 https://github.com/anthropics/claude-code/pull/41447

2. **#100293 — 新增 HIPAA 合规配置示例（CLOSED）**
   在 `examples/settings/` 中添加 HIPAA 场景的 `managed-settings.json` 与 `managed-mcp.json` 示例，限制会话内容外流，面向医疗合规企业。已关闭，或将被重新提交/合并至别处。
   🔗 https://github.com/anthropics/claude-code/pull/100293

## 5. 功能需求趋势

- **扩展性 / 插件化**：Mods 提案（#91870）热度断层第一，社区对 hooks/plugins 生态期望极高。
- **Remote Control / 远程会话健壮性**：多条 issue 涉及远程会话掉线、终端独占提示、权限拒绝行为（#100106、#100974、#100963），远程使用场景已成主流但体验欠佳。
- **Desktop Code 标签页与 CLI 对齐**：rewind 行为、权限规则、auto mode 提示在 Desktop 与终端间不一致的报告密集。
- **长输入 / 转录完整性**：截断、折叠、不可恢复问题跨平台出现。
- **用量与计费透明**：OAuth 认证下 `/usage` 明细缺失、云额度与常规用量混淆（#99804、#98468、#100961）。
- **安全分类器误报**：合法的自有系统安全/架构文档工作被拦截（#100965、#100964）。
- **企业合规**：HIPAA 示例 PR 显示合规配置需求在增长。

## 6. 开发者关注点（痛点总结）

1. **长输入静默截断**是最伤信任的一类问题——没有任何警告地丢失用户手打/粘贴的内容，且横跨 macOS/Linux/WSL。
2. **自治工作流的中断成本高**：5 小时限制杀死 agent、Desktop rewind 杀死后台任务、更新重启杀死远程会话，三者共同指向“长时间运行任务的容错缺失”。
3. **Desktop 与 CLI 行为不一致**：权限、rewind、提示展示等核心交互在两端语义不同，跨端用户需双份心智模型。
4. **Remote Control 是体验洼地**：终端独占 UI 元素对远程客户端不可见，造成“看起来卡死”的假象。
5. **认证/计费可见性退化**：切换认证方式或云环境后用量归属不清，成本敏感团队难以审计。

---
*数据来源：github.com/anthropics/claude-code（过去 24 小时）*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-10-10

## 📌 今日速览

Codex CLI 发布 **v0.162.1 稳定版**，修复了 TUI 多行异步问题崩溃和后台服务器功能设置不匹配导致的启动失败；同时 **0.163.0-alpha.4/5** 两个 alpha 版本持续推进。Issue 侧 Windows 平台问题持续发酵——WSL 执行失败（#49731, 34 条评论）和沙箱初始化错误占据热度榜前列。PR 侧团队集中优化 **code mode（V8/JS 执行）、Windows MXC 沙箱和 exec-server 可观测性**。

---

## 🚀 版本发布

### rust-v0.162.1（稳定版）
- 修复异步问题包含多行内容时的 TUI 崩溃，保留换行符和完整超链接目标地址（#51866）
- 修复后台运行服务器功能设置与 CLI 默认值不一致导致的启动失败，新增兼容性检查

### rust-v0.163.0-alpha.5 / alpha.4
- 常规 alpha 迭代，无独立 changelog

---

## 🔥 社区热点 Issues（Top 10）

1. **#49731** — [Windows WSL 模式下所有命令失败](https://github.com/openai/codex/issues/49731)
   Windows App "Run agent in WSL" 场景下 helper 目录被 Windows exec-server 删除，导致 `unified exec process` 创建失败。34 条评论、22 👍，**今日最热 Issue**，WSL 用户核心阻断问题。

2. **#40060** — [PowerShell execpolicy 误报](https://github.com/openai/codex/issues/40060)
   `Start-Process` 与无关 URL 同现时触发沙箱误判。30 条评论，从 0.146.0 到 main 分支均未修复，长期未解的 Windows 沙箱准确性问题。

3. **#35446** — [Windows 10 Computer Use 死锁](https://github.com/openai/codex/issues/35446)
   `FrameArrived` 内等待 SoftwareBitmap 转换引发死锁，Computer Use 截屏流程完全卡死。19 条评论，暴露底层图形管线问题。

4. **#49753** — [Dot 任务混合 Linux/Windows 工作路径](https://github.com/openai/codex/issues/49753)
   dot 创建的本机任务意外成为 durable 任务并产生混合平台路径，后续轮次失败。13 条评论，反映 dots 与 Windows 本地化集成的路径管理缺陷。

5. **#52179** — [Windows 所有命令报 "setup refresh had errors"](https://github.com/openai/codex/issues/52179)
   自定义模型提供者用户全命令失败。13 条评论，与沙箱初始化问题高度关联。

6. **#42412** — [自动更新后 App 无法启动（cua_node 迁移）](https://github.com/openai/codex/issues/42412)
   自动更新导致 `cua_node` runtime 位置变化，桌面端反复启动失败。10 条评论，MSIX 更新机制可靠性问题。

7. **#51049** — [Dot 任务的桌面端跟进失败](https://github.com/openai/codex/issues/51049)
   `AbsolutePathBuf deserialized without a base path`，混合云/Windows cwd 反序列化报错，与 #49753 同属 dots 路径问题簇。

8. **#52407** — [Windows Dots CUA MXC 启动器 HRESULT 0x80070003](https://github.com/openai/codex/issues/52407)
   shell 恢复后 CUA 启动器失败，与正在进行的 MXC 沙箱重构（见 PR #52707）直接相关。

9. **#52394** — [长任务频繁遭遇 server_overloaded](https://github.com/openai/codex/issues/52394)
   用量剩 ~70% 仍反复报 "Selected model is at capacity"，切模型仅短暂缓解。与 #52465（Linux 同类问题）形成跨平台容量投诉。

10. **#52616** — [Windows 沙箱 node_repl.exe ACL 校验 os error 32](https://github.com/openai/codex/issues/52616)
    双工作站复现，Full Access 可绕过。与 #52499、#51822 关联，是 Windows 沙箱 ACL 修复方案的持续证据补充。

---

## 🔧 重要 PR 进展（Top 10）

1. **#52707** — [Windows MXC 沙箱迁移至拆分的 MXC crates](https://github.com/openai/codex/pull/52707)
   替换 `mxc-sdk`，增加 PSEC API 可用性实际验证——直接回应过渡期 Windows 构建上的沙箱失败（#52407 等问题簇）。

2. **#52748** — [code mode 的 `exit()` 终止整个 cell](https://github.com/openai/codex/pull/52748)
   修复可捕获异常允许 JS 在 `exit()` 后继续执行的逃逸问题，终止 V8 执行。

3. **#52685** — [输出序列化期间保留 code mode 取消状态](https://github.com/openai/codex/pull/52685)
   防止 V8 终止期间重入将不可捕获的取消替换为可捕获异常——code mode 安全性加固。

4. **#52681** — [拒绝 code mode 中保留的 Serde JSON 键](https://github.com/openai/codex/pull/52681)
   堵住嵌套 `RawValue` 绕过解析器递归限制的漏洞，属于安全修复。

5. **#52682** — [密码修复前验证 Windows 沙箱账户](https://github.com/openai/codex/pull/52682)
   防止凭据不匹配触发双重密码轮换，加固 Windows 沙箱账户管理。

6. **#52723** — [code mode host 新增 gRPC over stdio（可选）](https://github.com/openai/codex/pull/52723)
   `grpc+stdio://` 传输 + 共享懒加载 HTTP/2 通道，会话状态保持隔离。架构级改进。

7. **#52725** — [通过 OSC 7501 上报终端程序状态](https://github.com/openai/codex/pull/52725)
   突破 iTerm2 限制，任意兼容终端可接收 `idle/working/blocked` 状态。

8. **#52724** — [新增 exec-server 初始连接尝试观测器](https://github.com/openai/codex/pull/52724)
   上报连接耗时与成败/取消结果，为 WSL/exec-server 连接问题（#49731）提供诊断数据。

9. **#52679** — [exec-server 配置读取支持超时](https://github.com/openai/codex/pull/52679)
   有界等待远程配置读取，不干扰进行中的工作，改善不可重连场景的健壮性。

10. **#52702** — [bootstrap GET 失败后经系统代理重试](https://github.com/openai/codex/pull/52702)
    账户发现与云配置请求失败的代理回退——利好中国等代理环境用户（关联 #52437 的 403/cloudflare_challenge）。

其他值得留意：#52700（exec-server 兼容基线升至 0.162.1）、#52696（Windows junction 市场路径匹配修复）、#52689（Cyber access 程序转发 Guardian）。

---

## 📈 功能需求趋势

- **Windows 平台稳定性**：热度榜前 10 中 8 条为 Windows 相关，沙箱（MXC/PSEC/ACL）、WSL、dots 路径管理是三大重灾区
- **Dots 任务编排**：#49753、#51049、#51927、#52407 集中出现，dot 创建任务的跨平台路径与权限继承成为新问题簇
- **浏览器/Computer Use 可靠性**：#35446、#46095、#51659、#52761 持续反映 CUA 与浏览器控制在两端（Win/macOS）均不稳定
- **模型容量与限流**：#52394、#52465 显示 "at capacity" 错误跨平台高发，用量显示与实际限流不匹配引发不满
- **安全检查误报**：#37473、#52773 反映 cyber_policy / safety check 对良性本地任务误判，社区呼吁审查

---

## ⚠️ 开发者关注点

1. **沙箱可用性是 Windows 用户最大痛点**：os error 32、ACL 校验失败、"setup refresh had errors" 多线并发，Full Access 成为无奈的临时绕过方案
2. **长任务/长上下文可靠性**：上下文压缩后丢失 Active Goal（#49022）、容量错误中断长任务（#52394），影响生产力工作流
3. **自动更新质量**：更新后 App 无法启动（#42412）、渲染器焦点刷新（#47449）损害升级信心
4. **代理/网络环境兼容性**：PR #52702 的系统代理重试是积极信号，但 #52437 显示 403 + Cloudflare 挑战问题仍待解
5. **CLI 沙箱误报**：execpolicy 与 cyber_policy 误报（#40060、#37473）自 8 月以来未根治，影响自动化流水线用户

> **总体判断**：团队正通过 MXC 沙箱重构和 code mode 安全加固系统性应对 Windows 问题，但 dots 与 CUA 的新问题产生速度较快，建议 Windows 用户暂缓深度依赖沙箱模式，关注 0.163.0 正式版。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-10）

## 📌 今日速览

今日发布两个新版本：nightly v0.65.0 和 preview v0.64.0-preview.1（包含安全误报修复的 cherry-pick）。社区讨论焦点集中在 **Subagent 生态**——包括 agent 挂起、状态误报、能力利用不足等一系列 P1/P2 问题。PR 方面，多个高优先级修复（终端 resize 卡顿、Web 搜索挂起、IDE 集成 Enter 无响应）于今日合并关闭。

---

## 🚀 版本发布

### [v0.65.0-nightly.20261010](https://github.com/google-gemini/gemini-cli/releases)
- **fix(cli)**: `fetchJson` 中处理 JSON 解析与响应流错误（PR #29658）
- **fix(core)**: `truncateString` 保留行终止符（PR #29673）

### [v0.64.0-preview.1](https://github.com/google-gemini/gemini-cli/releases)
- 自动 cherry-pick PR #29672，修复 shell 命令执行中的安全告警误报问题（详见下文 PR 进展）

---

## 🔥 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1) Subagent 达到 MAX_TURNS 后仍报告 `GOAL success`，掩盖了实际中断——状态误报问题影响任务可靠性，13 条评论，等待复测。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1) Generalist agent 无限期挂起，简单操作（如建文件夹）也会卡死，用户等待长达一小时。8 个 👍，是 agent 稳定性最痛点之一。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** (P2) 提议利用 Gemini 3 的原生 bash 能力，结合零依赖 OS 沙箱与后执行意图路由，属于架构级增强，9 条评论讨论热烈。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** (P2) AST 感知的文件读取/搜索/代码库映射调研 EPIC，配套 #22746（tilth/glyph）、#22747（ast-grep），是提升 agent 效率的重要方向。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2) Gemini 很少主动使用自定义 skills 和 subagents，需显式指示才调用，反映调度策略短板。

6. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** (P2) Browser Agent 完全忽略 `settings.json` 覆盖配置（如 `maxTurns`），配置合并逻辑存在缺陷。

7. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1) Browser subagent 在 Wayland 下失败，Linux 桌面兼容性问题。

8. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** (P2) 工具数量超过限制时触发 400 错误，agent 应更智能地裁剪工具作用域。

9. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)** (P1) get-shit-done output hook 导致 CLI 崩溃，P1 级稳定性问题。

10. **[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)** (P3) "Tactful Extraction"：建立 grep 优先的外科手术式代码读取层级，控制上下文膨胀（当前基线约 36.6k tokens/turn）。

---

## 🔧 重要 PR 进展

1. **[#29703](https://github.com/google-gemini/gemini-cli/pull/29703)** 修复原子写入临时文件名超出 NAME_MAX 导致的 `ENAMETOOLONG` 错误（文件名 215-255 字节场景）。

2. **[#29611](https://github.com/google-gemini/gemini-cli/pull/29611)** 支持带版本号的 Gemini 3 模型（如 `gemini-3.8-flash`）及别名的多模态函数响应，防止图片输出触发 HTTP 400。

3. **[#29644](https://github.com/google-gemini/gemini-cli/pull/29644)** (P1, 已关闭) 恢复终端宽度变化时的去抖 `refreshStatic()`，修复横向 resize 的 UI 问题。

4. **[#29608](https://github.com/google-gemini/gemini-cli/pull/29608)** (P1) Web 搜索 30 秒超时，解决永久 `Thinking...` 挂起（报告有 30+ 分钟挂起）。

5. **[#29672](https://github.com/google-gemini/gemini-cli/pull/29672)** (已关闭，已进入 preview.1) 消除 shell 命令安全告警误报（变量展开、`ls -ld`/`grep -rn` 等无害标志）。

6. **[#29582](https://github.com/google-gemini/gemini-cli/pull/29582)** (P1, 已关闭) 大幅优化 ignore 过滤：目录级状态记忆化、子树剪枝、symlink 缓存，解决大仓库多秒级阻塞。

7. **[#29476](https://github.com/google-gemini/gemini-cli/pull/29476)** (P1, 已关闭) 修复 IDE 集成终端下 Enter 按键无响应的挂起问题（#23297）。

8. **[#29683](https://github.com/google-gemini/gemini-cli/pull/29683)** (P1, 已关闭) A2A server 顺序批处理中，单个工具拒绝不再影响整批调用。

9. **[#29699](https://github.com/google-gemini/gemini-cli/pull/29699)** 修复 Ctrl+R 反向搜索中 Unicode 小写扩展字符（如 `İ`）的高亮偏移错误。

10. **[#29505](https://github.com/google-gemini/gemini-cli/pull/29505)** (P1, 已关闭) 支持 rootless Podman + keep-id 模式，修复沙箱内 UID/GID 映射导致的启动失败。

---

## 📈 功能需求趋势

- **Subagent 生态成熟化**：占比最高的方向——本地 subagent Sprint（#20195）、并行协作与共享内存（#18287）、subagent 轨迹分享（#22598）、symlink 识别（#20079）
- **AST 感知工具链**：#22745 EPIC 及两个子任务，探索 ast-grep/tilth/glyph 提升代码读取精度
- **Agent 安全与可控性**：OS 级沙箱（#19873）、破坏性命令防护（#22672）、browser_agent 会话锁恢复（#22232）
- **Token 效率**：外科手术式读取（#19561）、文件化任务追踪替代 WriteToDo（#18836、#21000）
- **终端 UX**：resize 无闪烁渲染（#21924）

## ⚠️ 开发者关注点

1. **Agent 挂起/状态误报**是当前最大痛点（#21409、#22323、#22465），P1 级问题仍在等待复测
2. **配置不生效**：Browser Agent 忽略 settings.json（#22267），symlink agent 不识别（#20079）
3. **工具数量上限**触发 400 错误（#24246），重度定制用户受影响
4. **上下文成本高**（36.6k tokens/turn 基线），社区对 token 优化诉求强烈
5. **`/bug` 报告缺少 subagent 上下文**（#21763），排障困难
6. **临时脚本污染工作区**（#23571），清理成本高

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-10-10 | 数据来源：github.com/github/copilot-cli**

---

## 1. 今日速览

过去 24 小时 Copilot CLI 密集发布 4 个补丁版本（v1.0.95 → v1.0.96-2），修复节奏明显加快。**Sandbox（沙箱）成为绝对焦点**：既有新增交互式沙箱配置、环境密钥掩码建议等安全增强，也集中暴露出一批沙箱与 JVM/Gradle/git 凭证相关的兼容性问题。Issue #5076（`/add-dir` 未加入沙箱白名单）在发布后当天即被修复关闭，社区响应迅速。

---

## 2. 版本发布

**v1.0.96-2**（最新）
- 修复：`/model` 和 `/config` 中模型 ID 大小写不敏感化，并保存规范化 ID

**v1.0.96-1**
- 新增：交互式沙箱设置会提示可能的环境密钥，允许保存前添加掩码主机
- 修复：企业策略解析期间保持 `/allow-all` 可用

**v1.0.96-0**
- 改进：git 仓库内的交互式会话更快到达输入提示；Timeline 显示每条权限决策来源（用户/Assisted Permissions/策略/无人值守回退）
- 修复：`/add-dir` 为当前会话授予所加目录的沙箱访问权（对应 Issue #5076）；修复 `/user`

**v1.0.95**（2026-10-09）
- macOS 上优先使用原生 Microsoft Entra broker 认证，浏览器作回退
- `copilot config` 支持 sandbox credential `injectHosts` 配置键，Bash/Zsh/Fish 提供补全
- `--context` 现在对新建和恢复的 ACP 会话均生效

---

## 3. 社区热点 Issues

| # | 标题 | 为什么值得关注 |
|---|------|----------------|
| [#4313](https://github.com/github/copilot-cli/issues/4313) | 允许滚动浏览当前会话历史 | 输入/渲染体验高频诉求，9 条评论讨论后已关闭 |
| [#3355](https://github.com/github/copilot-cli/issues/3355) | Claude Opus 4.6 上下文窗口 200K 上限 vs 原生 1M | 4 👍，深度技术会话频繁触发自动压缩，模型能力被大幅削减引发不满 |
| [#4686](https://github.com/github/copilot-cli/issues/4686) | Node.js OOM 崩溃：泄漏 31,965 个 libuv 句柄 | 严重稳定性问题，~37 分钟必崩，SEA 忽略 NODE_OPTIONS |
| [#5076](https://github.com/github/copilot-cli/issues/5076) | `/add-dir` 未加入沙箱白名单 | 已在 v1.0.96-0 修复关闭——发布与社区反馈闭环的典型案例 |
| [#2536](https://github.com/github/copilot-cli/issues/2536) | Atlassian MCP 每次启动都需重新授权 | MCP 凭证持久化的长期痛点，3 👍 仍开放 |
| [#5094](https://github.com/github/copilot-cli/issues/5094) | Windows 桌面版 1.1.27+ 捆绑 git 无法启动（0x80070005） | 阻断性回归，影响所有项目注册 |
| [#4516](https://github.com/github/copilot-cli/issues/4516) | 沙箱 RW 路径授权对 JVM 进程无效 | Maven/Java 生态用户被沙箱隔离逻辑阻断，JVM 进程模型差异未覆盖 |
| [#5102](https://github.com/github/copilot-cli/issues/5102) | 沙箱 git 无法使用与登录身份不同的凭证 | 新报告的沙箱认证设计局限，空 credential.helper 覆盖导致 PAT 不可用 |
| [#5103](https://github.com/github/copilot-cli/issues/5103) | BYOK 子代理强制使用会话级 wire API，跨模型家族返回 400 | BYOK 用户的核心限制：GPT-5 与 Claude 系列分属 completions/responses API |
| [#5091](https://github.com/github/copilot-cli/issues/5091) | 会话排队所有提示词、MCP 已连接仍反复重连 | 长会话稳定性问题，重启/恢复均无效 |

**其他快速一览**：[#5098](https://github.com/github/copilot-cli/issues/5098)（sandbox.userPolicy 导致 sessionStart hook 停止运行）、[#5105](https://github.com/github/copilot-cli/issues/5105)（macOS 沙箱阻断 Gradle daemon 本地连接）、[#5100](https://github.com/github/copilot-cli/issues/5100)（一次 120s 事件确认超时后会话永久不可用）。

---

## 4. 重要 PR 进展

过去 24 小时仅 1 条 PR 更新，无核心功能 PR：

- **[#5106](https://github.com/github/copilot-cli/pull/5106)** `Create index.html`：疑似垃圾/误提交 PR（仅附带一个 index.html 附件），无实质技术内容，预计将被维护者关闭。

> 📌 说明：本期 PR 数据匮乏，核心代码变更可能通过内部流水线合入，从 Release 节奏看开发活跃度实际很高。

---

## 5. 功能需求趋势

从近期 Issues 提炼出社区最关注的方向：

1. **沙箱可用性与兼容性**（最高热度）：JVM/Gradle（#4516、#5105）、git 凭证（#5102）、hook 与策略冲突（#5098）、路径授权语义（#5076）。官方正在快速迭代（injectHosts、密钥掩码），但长尾兼容问题仍多。
2. **长会话稳定性**：内存泄漏（#4686）、事件投递失败（#5100）、提示词排队/MCP 重连（#5091）。
3. **模型能力释放**：上下文窗口可配置（#3355）、BYOK 跨模型家族支持（#5103）。
4. **MCP 体验**：授权持久化（#2536）、`--add-github-mcp-tool` 的 readonly 端点问题（#3052、#5101）。
5. **桌面端与 ACP 集成**：项目/会话管理（#5104）、ACP session/list 性能（#5108）。
6. **密钥安全工作流**：面向用户的脱敏展示 hook（#5099）。

---

## 6. 开发者关注点

- **沙箱安全 vs 可用性权衡**是当前核心矛盾：安全增强（密钥提示、掩码主机）持续落地，但 JVM 生态、git 凭证、hook 生命周期等场景的兼容性掉队，企业用户（CI/EC2 长任务）受影响最重。
- **启动性能**：#5090 反映 MCP/插件加载阻塞输入，大仓库用户对异步加载诉求强烈；#5108 的 ACP 会话列表全量重扫也是同类问题。
- **可观测性改善获得好评**：v1.0.96-0 中 Timeline 显示权限决策来源，正是对社区长期诉求的回应。
- **认证体验**：Entra broker 原生认证是亮点，但 NixOS keychain（#3081）、MCP 反复授权（#2536）等边缘场景仍待解决。

---

*本报告基于过去 24 小时公开数据自动整理，仅供参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-10

## 今日速览

今日无新版本发布，但社区修复活动非常活跃。贡献者 @potoior 密集提交了一批核心修复（plan 模式 shell 命令确认、文件列表符號链接、MCP 401 状态标记），核心维护者 @kitlangton 推进 Effect 4.0.1 稳定版升级。用户侧热点集中在 TUI 体验问题：Windows 滚动卡顿、Go 订阅“余额不足”误报和自签名证书连接失败。

---

## 社区热点 Issues

**1. [#54095](https://github.com/anomalyco/opencode/issues/54095) — 自签名证书导致无法连接 API（13 评论）**
固定网络环境下报错，热点切换后正常。企业内网/代理用户常见痛点，提示 Node.js 需 `--use-system-ca`。评论最多，受关注度高。

**2. [#30221](https://github.com/anomalyco/opencode/issues/30221) — Go 订阅会话持续 "terminated"（已关闭，10 评论）**
OpenCode Go 订阅下所有会话均报错，直连 API 正常。长期存在的高影响问题，今日关闭，或已随服务端修复。

**3. [#54244](https://github.com/anomalyco/opencode/issues/54244) — TUI 新会话误报 "Insufficient account funds"**
Go 订阅有效、CLI 正常，但 TUI 建会话失败；用量显示近 0%，属计费校验逻辑 bug 而非真实限额。

**4. [#54245](https://github.com/anomalyco/opencode/issues/54245) — 2.0.4 MCP 客户端升级后 *.localhost OAuth 回归（已复现）**
本地 MCP 服务器 OAuth token 交换因非 HTTPS 端点被拒绝，升级前可用，影响本地开发调试工作流。

**5. [#54239](https://github.com/anomalyco/opencode/issues/54239) — Windows TUI 滚轮与窗口缩放卡顿（回归）**
相对 v1 明显退化的输入延迟，Desktop GUI 不受影响，指向 TUI 渲染层性能问题。

**6. [#53709](https://github.com/anomalyco/opencode/issues/53709) — V1→V2 迁移后旧会话从 /sessions 消失**
迁移器未规范化 `session.path`，升级用户会话“失踪”，属迁移完整性的关键问题。

**7. [#53673](https://github.com/anomalyco/opencode/issues/53673) — 空闲进程每秒唤醒线程刷空日志（已关闭）**
文件日志 batched fiber 空转，影响待机功耗与资源占用，已修复关闭。

**8. [#54242](https://github.com/anomalyco/opencode/issues/54242) — Zen 余额未耗尽即不可用（待关闭）**
余额低于 $5 后 flash 模型请求全部失败，计费边界条件问题。

**9. [#54168](https://github.com/anomalyco/opencode/issues/54168) — 请求支持 xAI 原生 x_search/web_search 工具**
Grok 模型内置搜索能力的 opt-in 集成，与已有 OpenAI web_search 请求形成“原生工具”需求系列。

**10. [#35640](https://github.com/anomalyco/opencode/issues/35640) — V2 TUI 重试提示渲染原始 HTML**
上游 503 的 nginx HTML 页面逐行打印在重试提示中，暴露传输层标记且占屏，已有对应 PR 修复中。

---

## 重要 PR 进展

**1. [#54198](https://github.com/anomalyco/opencode/pull/54198) — 升级 Effect 至稳定版 4.0.1**（@kitlangton）
从 rc.118 迁移到稳定版，需处理 `Schema.brand` 变为 type-only 等两处破坏性变更。V2 核心依赖现代化的重要一步。

**2. [#54227 / [#54253](https://github.com/anomalyco/opencode/pull/54253) — plan 模式 shell 命令需确认**（@potoior）
修复 plan agent 下 bash 命令默认放行、可执行未批准破坏性操作的安全漏洞（#53955）。

**3. [#54241 / [#54252](https://github.com/anomalyco/opencode/pull/54252) — 文件列表包含符号链接**（@potoior）
文件树与 `/api/fs/list` 此前完全遗漏 symlink，涉及 schema 与过滤双层修复。

**4. [#54226](https://github.com/anomalyco/opencode/pull/54226) — MCP 401 时标记服务器 needs_auth**（@potoior）
OAuth 刷新失败后状态仍显示 Connected、无重认证信号，此 PR 让状态如实反映。

**5. [#54243](https://github.com/anomalyco/opencode/pull/54243) — glob/grep 权限元数据剔除 undefined 字段**（@potoior）
修复待审批权限导致 `session.permission.list` schema 编码失败返回 400 的问题。

**6. [#54090](https://github.com/anomalyco/opencode/pull/54090) — 权限请求前清理 undefined 元数据**（@kitlangton）
同族问题的另一修复路径，接替被 stale 清理的 #46906。

**7. [#54240](https://github.com/anomalyco/opencode/pull/54240) — 限制 provider HTML 错误消息长度**（@4sDriven）
镜像 V1 的重试消息清理逻辑，对齐修复 Issue #35640 的 TUI HTML 渲染问题。

**8. [#54251](https://github.com/anomalyco/opencode/pull/54251) — 中断时保留已完成的 execute 结果**（@HaiYangBG1）
中断执行不再丢失已完成嵌套调用的预览与日志，改善调试体验。

**9. [#54248](https://github.com/anomalyco/opencode/pull/54248) — 文本 shimmer 动画改为透明度脉冲**（@skywalkerwhack）
`background-position` 动画无法合成、导致主线程每帧重绘，改为可合成的 opacity 动画，显著降低渲染开销。

**10. [#53752](https://github.com/anomalyco/opencode/pull/53752) — 跨浏览器发现服务器项目与会话**（@BunsDev）
共享服务器场景下新浏览器看不到项目、会话同步失效的修复，涉及多浏览器状态一致性。

---

## 功能需求趋势

- **原生模型工具集成**：xAI x_search/web_search（#54168）、OpenAI web_search 等诉求增多，社区希望直接复用模型厂商内置工具而非通用 MCP。
- **会话持久化与记忆**：持久 session daemon + 零工具调用记忆召回（#41453）、Prompt 队列与多轮引导（#41465），指向更智能的长时运行 agent。
- **生态插件扩展**：Agent Relay（#54231/#54249）、billion-context 上下文压缩网关（#53678）、Langdock 原生支持（#36702），V2 生态位快速填充。
- **审批交互精细化**：编辑/命令审批附带反馈评论（#41461），对齐 Claude Code 的交互体验。

---

## 开发者关注点

- **企业网络与证书环境**：自签名证书、固定网络代理场景连接失败（#54095）是内网用户高频痛点，`--use-system-ca` 文档化需求强烈。
- **Go 订阅与计费可靠性**："terminated"、误报余额不足、Zen 余额边界（#30221/#54244/#54242）连续多日出现，付费链路稳定性是信任关键。
- **TUI 性能与渲染**：Windows 滚动/缩放卡顿回归、HTML 错误刷屏、shimmer 动画性能，V2 TUI 渲染层是当前不满最集中的模块。
- **迁移与数据完整性**：V1→V2 会话路径丢失（#53709）、文件选择器在 home 目录初始化失败（#41456/#37961），升级路径的平滑性需系统性保障。
- **本地 MCP 开发体验**：*.localhost OAuth 回归（#54245）、MCP 注册无超时挂起（#41459），本地开发工作流易被忽视但影响黏性。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-10-10

## 一、今日速览

Qwen Code 发布 **v0.25.1-preview.1** 预览版，修复了 agents 远程 Hosts 替换时丢失绑定的问题。Managed Agent 架构仍是社区最活跃的主线：Stage H4e 团队记录契约 PR 已合并，但同日暴露多个 P1/P2 级稳定性问题（如 recovery-blocked Session 卡死同 daemon 上其他 Session）。MCP 工具注册与工具输出截断两条长期需求线均有实质进展。

---

## 二、版本发布

### v0.25.1-preview.1
- **fix(agents)**: 替换选中的远程 Hosts 时不再丢失绑定（PR #13430，@yiliang114）
- **test(core)**: 补充 post-merge 回归测试

另有 nightly 版本 `v0.25.0-nightly.20261009.085a44f336` 同步包含上述修复。

---

## 三、社区热点 Issues

1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380)** Managed Agent 双路径架构与分阶段交付提案（51 评论）
   全项目最热讨论，定义了 Session 持久所有权、Workspace 绑定、可恢复工具执行与稳定 WebSocket 契约，是多 Agent 路线图的顶层设计文档。

2. **[#13800](https://github.com/QwenLM/qwen-code/issues/13800)** [P1] recovery-blocked Session 卡死同 daemon 上其他 Session 的后续 Turns
   今日新报的 P1 稳定性缺陷：journal 停在 `hostedModelAttempt` 后模型不再被调用，静默卡死，影响 daemon 多租户隔离。

3. **[#13395](https://github.com/QwenLM/qwen-code/issues/13395)** Kubernetes 工具运行时进度跟踪（19 评论）
   Draft PR #13526 已交付私有有限 CSI Read/Write/Edit，是跨平台交付门禁的核心跟踪器。

4. **[#13078](https://github.com/QwenLM/qwen-code/issues/13078)** 每日依赖 CVE 审计持续失败（16 评论）
   CI 安全审计故障未解，可能存在高危漏洞或 npm audit 端点不可用，需运维侧关注。

5. **[#6710](https://github.com/QwenLM/qwen-code/issues/6710)** [P1] ACP 恢复后无法区分用户取消与意外中断（15 评论）
   10-07 在最新 commit 复现确认仍未修复，继续保留，是 daemon 会话恢复的关键缺陷。

6. **[#10797](https://github.com/QwenLM/qwen-code/issues/10797)** 非 thinking 脚手架标签泄露到用户可见输出（10 评论）
   tool-result 块和 system-reminder 被回显给用户，标记 welcome-pr 但实测在最新 CLI/tmux 中仍复现。

7. **[#13796](https://github.com/QwenLM/qwen-code/issues/13796)** HTTP MCP 服务器工具整个会话未注册，但 `qwen mcp list` 显示 Connected
   实际用户报告，HTTP 传输场景下工具静默失效，与 #13632 一并构成 MCP 可靠性痛点。

8. **[#13782](https://github.com/QwenLM/qwen-code/issues/13782)** Web Shell 会话从磁盘恢复后 Branch 按钮消失
   load replay 遗漏 `branchRecordId`，checkpoint 数据完好但 UI 能力丢失，状态 ready-for-human。

9. **[#13785](https://github.com/QwenLM/qwen-code/issues/13785)** Multi-Agent API：在公共契约上增加 agent 身份维度
   新提案，要求多 Agent 执行可归因、树状、可中断，方向性讨论值得跟踪。

10. **[#2566](https://github.com/QwenLM/qwen-code/issues/2566)** 基于上下文压力的动态工具输出截断
    3 月提出的长期需求，正式 PR #13599 已提交，1,509+ 行针对性验证覆盖，接近落地。

---

## 四、重要 PR 进展

1. **[#13811](https://github.com/QwenLM/qwen-code/pull/13811)**（已合并）Managed Agent H4e-a 团队记录契约 — Stage H 子代理团队机制的记录层基础。
2. **[#13769](https://github.com/QwenLM/qwen-code/pull/13769)** 前台子代理等待支持重启恢复 — 补齐 Broker 管道外的持久等待证据，修复 #13708。
3. **[#13737](https://github.com/QwenLM/qwen-code/pull/13737)** rewind 通过 source identity 解析旧版对话轮次 — 拒绝在无法确证对应关系时执行文件恢复，安全性增强。
4. **[#13530](https://github.com/QwenLM/qwen-code/pull/13530)** AgentDefinition 固定 revision 执行 — D8b/D8c 落地，创建时锁定 agent ID、revision 和 digest。
5. **[#13554](https://github.com/QwenLM/qwen-code/pull/13554)** 后台 Shell 流捕获输出的会话级留存生命周期（P1 of #13534）。
6. **[#13724](https://github.com/QwenLM/qwen-code/pull/13724)** heredoc 喂给 shell 解释器时 fail closed — 修复 worktree guard 误将 `bash <<EOF` 内容当数据放行的安全漏洞。
7. **[#13579](https://github.com/QwenLM/qwen-code/pull/13579)** 恢复含引号内嵌调用的外层 XML tool call — #13492 的收尾修复。
8. **[#13669](https://github.com/QwenLM/qwen-code/pull/13669)** OpenTUI transcript 视口窗口化 — 只挂载视口附近条目，修复恢复后白屏，大 session 性能优化。
9. **[#13664](https://github.com/QwenLM/qwen-code/pull/13664)** Web Shell 只读 Excel 预览 — ExcelJS 跑在 worker 中按 worksheet 惰性加载，社区功能贡献代表。
10. **[#13219](https://github.com/QwenLM/qwen-code/pull/13219)** managed-agent 重试循环加上限与终态 — 消除永久卡死的投影与无限重试。

---

## 五、功能需求趋势

- **Managed Agent / 多 Agent 平台化**（最主流）：#12380、#12867、#12952、#13532、#13533、#13785 等大量跟踪 Issue 密集推进，覆盖持久生命周期、writer fencing、K8s 运行时、团队机制，是项目当前绝对主线。
- **会话管理与恢复可靠性**：Session 恢复、rewind 对齐、branch/checkpoint 持久化相关 Issue 数量最多（#6710、#9437、#11408、#13782）。
- **MCP 生态完善**：工具热刷新（#13632）、HTTP 服务器注册失败（#13796）。
- **上下文/Token 性能**：动态工具输出截断（#2566）、工具结果大小计量（#13652）。
- **UI/渲染质量**：OpenTUI 弹窗几何与短终端溢出（#13758、#12559、#13669）、VP 模式对齐。
- **Memory 智能化**：写入前语义去重（#13721）。

---

## 六、开发者关注点

1. **daemon 稳定性与隔离性**是最大痛点：一个 Session 异常可卡死同 daemon 其他 Session（#13800），`child_run` 停在 `dispatch_started` 永不结算（#13801）。
2. **静默失败难以排查**：MCP 显示 Connected 但工具未注册（#13796）、模型从未被调用也无报错，用户与维护者都要求更强的可观测性。
3. **输出污染问题持续**：脚手架标签泄露（#10797）、孤立闭合标签外漏（#10700）等 XML 恢复缺陷在最新版仍复现。
4. **大 PR 范围控制与 CI 门禁**：#13652 达 +2019 行触发 scope fuse、SDK Java 契约版本无 CI 检查（#13804）、CVE 审计连续失败（#13078），反映工程治理压力。
5. **macOS Foundation Models 集成**出现新兼容问题（#13807），本地 fast model 用户受影响。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / Codewhale 社区动态日报（2026-10-10）

## 1. 今日速览

今天社区焦点集中在 **v0.10.2 候选包 PR#6907** 的推进上，Terminal dock、shell 等待控制等多项工作落地关闭；同时创始人 @Hmbown 批量开启了 **RS-8~RS-14 运行时/TUI crate 拆分系列 Issue**（共 7 条），标志着架构重构进入密集执行阶段。外部贡献者 @SparkofSpike 活跃度极高，一天内提交 6 个修复 PR，覆盖 Windows junction、网络策略、exec 策略等多个痛点。

## 2. 版本发布

过去 24 小时无新 Release。v0.10.1 的 crates.io 发布仍受 10 MiB tarball 上限阻塞（见 Issue #6910），TUI/CLI 包滞留在 0.10.0；v0.10.2 候选已在 PR#6907 中成形。

## 3. 社区热点 Issues（10 条）

1. **#6941** [OPEN] RS-14：将强连通运行时核心迁入 codewhale-runtime（一次仅重命名的关键变更）— 拆分系列的“拱心石”，整个 RS 系列皆为它铺路。[链接](https://github.com/codewhale-hq/Codewhale/issues/6941)
2. **#6910** [OPEN] [release-blocker] crates.io 10 MiB tarball 上限导致 TUI/CLI 包无法发布（HTTP 413），26/28 包已上 0.10.1，唯此二者受困 — 当前最高优先级发布阻塞。[链接](https://github.com/codewhale-hq/Codewhale/issues/6910)
3. **#6944** [OPEN] 0.10.2：长任务转后台后对用户不可见，且 Full Access 阻塞了唯一的后台 API — 直接影响日常可用性的 UX 缺陷。[链接](https://github.com/codewhale-hq/Codewhale/issues/6944)
4. **#6945** [OPEN] Workflow：verify gate 的 blocks_role 引用自身角色导致运行死锁而非准入期报错 — 昂贵阶段前失败，代价高。[链接](https://github.com/codewhale-hq/Codewhale/issues/6945)
5. **#6912** [CLOSED] TUI 工作坞终端视图：可查看模型 PTY 会话并输入 — 已随 PR#6907 落地，17/17 shell 检查通过，标志性功能。[链接](https://github.com/codewhale-hq/Codewhale/issues/6912)
6. **#6936** [CLOSED] RS-9：切断 engine 残留的终端侧泄漏（context 阈值、git 上下文、剪贴板、通知、本地 ollama）— 拆分边界收紧的关键一环，已关闭。[链接](https://github.com/codewhale-hq/Codewhale/issues/6936)
7. **#6512** [CLOSED] Goal 回合被 1000 步上限截断而普通回合无上限，`max_steps=0` 不等于无限 — 长任务用户的核心痛点，已修复。[链接](https://github.com/codewhale-hq/Codewhale/issues/6512)
8. **#6396** [OPEN] 模型目录与定价：完成事实表与价格表合并为单一权威源 — 创始人确认 14 项实现全部为 v0.10.2 发布要求。[链接](https://github.com/codewhale-hq/Codewhale/issues/6396)
9. **#6932** [OPEN] Claude 订阅通过共享 OAuth + 原生 Messages 路由登录 — 创始人 10/8 授权实施，接手 0.10.2 交付。[链接](https://github.com/codewhale-hq/Codewhale/issues/6932)
10. **#6942** [CLOSED] 文档矛盾：MCP 页面仍称默认关闭/只读/30s，与已上线默认开启不一致 — 文档与产品行为对齐的典型案例。[链接](https://github.com/codewhale-hq/Codewhale/issues/6942)

## 4. 重要 PR 进展（10 条）

1. **#6907** [CLOSED] 0.10.2 候选：Terminal dock、shell 等待控制、恢复与贡献者修复 — 本周期最核心 PR，联动关闭 #6912/#6909/#6471 等多项。[链接](https://github.com/codewhale-hq/Codewhale/pull/6907)
2. **#6950** [OPEN] 插件 CLI 安装与应用内 OAuth 登录 — 补齐 PR#6805 的 UX 缺口，免终端命令即可登录。[链接](https://github.com/codewhale-hq/Codewhale/pull/6950)
3. **#6947** [OPEN] 修复 Windows junction 重定位 Codewhale home 后 artifacts 写入失败 — Windows 多卷用户的实际痛点。[链接](https://github.com/codewhale-hq/Codewhale/pull/6947)
4. **#6949** [OPEN] 修复 state root 重定位后子代理在第 0 步即失败 — 与 #6947 同源的 junction 问题。[链接](https://github.com/codewhale-hq/Codewhale/pull/6949)
5. **#6924** [OPEN] 每个 runtime store 一个控制端点、每个工作区一个 driver — 解决 VS Code 扩展与 CLI 共存时的 store 归属冲突。[链接](https://github.com/codewhale-hq/Codewhale/pull/6924)
6. **#6928** [CLOSED] `/network allow` 写入后无需重启即生效 — 修复 NetworkPolicyDecider 在会话生成时被一次性捕获的问题。[链接](https://github.com/codewhale-hq/Codewhale/pull/6928)
7. **#6929** [OPEN] exec 策略：重定向符号不应被视为命令分隔符 — 修复 Windows 上含单个 `&` 的命令被硬阻断。[链接](https://github.com/codewhale-hq/Codewhale/pull/6929)
8. **#6930** [CLOSED] 允许模型在里程碑处交还 goal — 恢复“做完一阶段停下询问”的行为，减少方向错误时的返工。[链接](https://github.com/codewhale-hq/Codewhale/pull/6930)
9. **#6948** [OPEN] 会话切换被拒时明确指出是哪项工作在阻塞 — 从笼统报错升级为可操作的提示。[链接](https://github.com/codewhale-hq/Codewhale/pull/6948)
10. **#6943 / #6946** [OPEN] 清理失效与模块级 `dead_code` allow（#5587 系列切片）— 代码卫生持续投入。[链接](https://github.com/codewhale-hq/Codewhale/pull/6943)

## 5. 功能需求趋势

- **架构解耦（运行时/TUI 拆分）**：RS-8~RS-14 密集立项，配合 module_graph 棘轮机制，是当前最强主线。
- **后台任务可视化与可控性**：长任务转后台后的可见性（#6944）、会话切换阻塞命名（#6948）、Ctrl+B 分离（#6909）。
- **身份与多供应商接入**：Claude 订阅 OAuth（#6932）、插件应用内 OAuth（#6950）、模型/定价目录统一（#6396）。
- **多客户端共存**：VS Code 扩展与 CLI 共享控制 socket 的归属冲突（#6924）。
- **Workflow 可靠性**：gate 死锁（#6945）、goal 步数上限与里程碑交还（#6512/#6930）。

## 6. 开发者关注点

- **发布链路阻塞**：crates.io 10 MiB 体积上限（#6910）使 TUI/CLI 无法随 0.10.1 发布，体积治理成为发布工程刚需。
- **Windows 兼容性**：junction/重定位状态目录引发的一连串路径校验失败（#6947/#6949）、`&` 误判为分隔符（#6929）。
- **策略热更新**：配置写入后需重启才生效（#6928）这类“写成功但行为未变”的隐性不一致。
- **文档与实现漂移**：默认开启的 MCP 与仍称“默认关闭”的文档矛盾（#6942），提示发布前需要文档对齐流程。
- **错误信息可操作性**：社区持续推动从“拒绝”到“告诉你怎么解除阻塞”的报错升级。

---
*数据来源：github.com/Hmbown/DeepSeek-TUI（Issues 25 条 / PR 22 条，过去 24 小时更新）*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-10-10

## 一、今日速览

今日无新版本发布，社区活跃度集中在 Issue 讨论与 PR 提交上（103 条 Issue 更新、18 条 PR 更新）。Windows 平台兼容性仍是最大痛点，#7547 关于 Windows 使用方式的调研帖评论数已近 80 条。同时多位贡献者围绕扩展生命周期、提示词缓存、provider 兼容性提交了一批高质量修复 PR。

## 二、版本发布

过去 24 小时无新 Release。

## 三、社区热点 Issues

1. **#7547 [Windows] 你在 Windows 上如何使用 Pi？遇到了哪些问题？**
   官方发起的 Windows 生态调研帖，评论 79 条，热度最高。核心议题是确定哪些 Windows 运行方式应纳入核心支持（bug 修复、文档、开箱即用），哪些可下放给社区扩展。是观察 Windows 路线图的最佳窗口。

2. **#10031 [bug] 按 ESC 中断思考后 Pi 间歇性卡在 "Working..."**
   已关闭但评论 27 条。自 ~v0.84.0 起、跨多台机器复现，只能 Ctrl+C 退出后 `pi -c` 恢复。属高频交互层 bug，影响日常可用性。

3. **#10480 [bug] 直连 OpenAI 未识别手动重置的用量限额**
   用户使用 banked reset 后 Pi 仍报订阅额度耗尽， workaround 是 `/logout` + `/login`（openai-codex 通道）。涉及 ChatGPT Pro 用户的直连认证体验。

4. **#8643 Bedrock：OpenAI 模型拒绝嵌套在 toolResult.content 中的图片**
   作者已在自己 fork 上准备好修复与回归测试（前序 PR #8642 被贡献门槛自动关闭），等待核心侧采纳。有价值的社区贡献案例。

5. **#10267 [p0] before_agent_start 注入的提示文本在无用户输入的 run 中被丢弃，导致整个 prompt 重新计费**
   P0 级问题：后台任务通知、plan-mode continue、retry、resume 等场景下扩展注入的 systemPrompt 丢失，直接破坏 provider prompt cache，成本影响显著。

6. **#10256 [bug] 0.99.x：终端颜色查询响应泄漏进输入框，BEL 触发外部编辑器**
   mintty on Windows + ConPTY 下，启动即打开外部编辑器且 prompt 混入 `rgb:...` 垃圾。0.87.1 正常，属 0.99.x 引入的系统主题默认行为引发的回归。

7. **#6300 [bug] Windows：每次按键输入行重绘（每字符换行）**
   长期存在的 Windows TUI 渲染 bug，影响 cmd.exe 与 Windows Terminal，评论 11 条，是 Windows 体验差的典型代表。

8. **#10645 [inprogress] resizeImage 在 Bun 编译产物中返回 null——0.87.x 起所有图片附件被静默丢弃**
   通过本地假网关抓包确认，编译版二进制中图片全被省略。RPC/嵌入场景的关键 bug，已标记处理中。

9. **#9773 before_provider_request 对摘要/压缩请求不触发**
   文档声明可替换任意 provider 请求 payload，但 compaction/branch-summary 路径不触发，扩展开发者的一致性诉求。

10. **#10719 Bun 安装的 Pi + Node 运行：所有扩展报 `Cannot find module 'jiti'`**
    昨天/今天新增的打包依赖问题，确认是核心而非扩展问题，预计影响一批 Bun 用户。

## 四、重要 PR 进展

1. **#10751 feat(coding-agent): 采用 pi.dev 配置 schema**（christianklotz）
   将 pi.dev schema 端点设为生成配置 schema 的规范 `$id`，统一 models/settings/keybindings/theme 的 schema URL。架构规范化的重要一步。

2. **#10672 feat(ai,coding-agent): OpenRouter 仅列出 API key 可用的模型**（davidbrai）
   每次刷新时合并目录与 `GET /models/user`，按 key 过滤可用 chat 模型并采用其实际 context/价格。直接改善 OpenRouter 用户体验（关联 #10497 的 400 报错场景）。

3. **#10747 feat: 支持自定义 Cloudflare AI Gateway 域名与访问凭证**（btkostner）
   修复 #10627，企业网关用户的部署灵活性提升。

4. **#10739 fix(coding-agent): 为自定义消息启动的 run 触发 before_agent_start**（davidbrai）
   修复 `sendMessage({triggerTurn: true})` 路径跳过 hook、中途改写 system prompt 并打断 prompt cache 的问题。与 #10267 同属 prompt cache 稳定性修复。

5. **#10734 fix(ai): transformMessages 中丢弃孤儿 toolResult**（已关闭）
   截断/压缩后残留无对应 assistant call 的 toolResult 会污染传输历史，此 PR 补齐清理逻辑。

6. **#10730 fix(tui): 全角标点旁的 CJK 强调渲染**（theBucky）
   修复 #10154：Commonmark flanking 规则导致中文/日文粗体 `**这是测试。**` 无法闭合，星号原样显示。中日韩用户的重要修复。

7. **#9126 fix(coding-agent): 工具执行期间先落盘再销毁 runtime**（acmerfight）
   销毁前 await `session.abort()`，确保中断轮次的 tool result 与最终 assistant 消息持久化。长跑 @acmerfight 的生命周期修复系列之一。

8. **#10663 feat(cli): `pi auth --continue`**（cristinaponcela）
   通用的认证流程接续入口点，支持从别处发起的 auth 流（base64url payload）完成交接，为外部集成铺路。

9. **#10715 fix(ai): 为 Qwen Token Plan 模型启用显式上下文缓存**（已关闭）
   根因是 `cache_control` 仅在 anthropic 格式时下发，导致 Qwen 套餐用户缓存命中率 0%，全部按未缓存计费。成本敏感用户的重要修复。

10. **#10726 fix: codemode 忽略 Node watch 通知**（acmerfight）
    `node --watch` 的依赖变更通知被误认为 worker 消息导致 sandbox 崩溃，此 PR 在协议层过滤。SDK 开发者调试体验改善。

## 五、功能需求趋势

- **Windows 一等公民支持**：#7547、#6300、#10256、#9656、#10717 等，TUI 渲染、终端兼容（mintty/WezTerm/ConPTY）问题密集，官方已在系统性调研。
- **终端转义序列处理**：0.99.x 系统主题默认化后，OSC 颜色查询响应泄漏问题在多个终端复现（#10250、#10256、#10717），是一个集中回归簇。
- **Provider 兼容性与新模型接入**：Kimi Code 对齐官方 CLI（#10720）、Gemini thought signature 丢失（#10157）、OpenRouter 模型过滤、Cloudflare 网关、Qwen 缓存计费。
- **扩展生态与 RPC/SDK 集成**：`before_provider_request`/`before_agent_start` 等 hook 的一致性诉求（#9773、#10267、#10701 渲染 hook、#10386 Durable 扩展宿主）。
- **成本与 prompt cache**：多个 issue/PR 聚焦缓存失效导致的重复计费，属高优先级方向。

## 六、开发者关注点

1. **Prompt cache 脆弱性**：hook 路径、自定义消息触发的 run、SSE 降级（#8125）都会静默破坏缓存，直接推高 token 成本，是当前最高频的技术痛点。
2. **打包/运行时分歧**：Bun 编译产物中 jiti 缺失（#10719）、resizeImage 失效（#10645），Node/Bun 双轨维护质量需关注。
3. **错误信息可观测性不足**：流式传输失败只报裸 `terminated`（#10697）、pi-env 启动错误缺 stderr（PR #10716），排障成本高。
4. **会话生命周期边界条件**：RPC 模式下 prompt 被静默丢弃（#10606）、resume 后 context 显示错误并误触发压缩（#10082）、tool 运行中 reload 导致 stale context（PR #9222）。
5. **贡献流程摩擦**：#8643 的修复因贡献门槛被自动关闭后需重新走流程，外部贡献者体验有优化空间。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报 · 2026-10-10

## 📰 今日速览

今日发布 **v18.8.7**，聚焦 `@oh-my-pi/pi-ai` 包，清理 OpenAI Responses / Codex 的 routing-session 并修复 Claude Haiku 5.5 请求静默启用问题。社区侧，Google Antigravity 虚假 429 问题（34 条评论）仍是最大痛点，多账号 OAuth 故障转移、Anthropic prompt cache 等长期 issue 持续活跃。PR 方面，macOS 原生工具（computer/natives）迎来一批高质量修复，新的 `/seance` 会话回溯命令值得关注。

---

## 🚀 版本发布

**v18.8.7**（[@oh-my-pi/pi-ai](https://github.com/can1357/oh-my-pi)）

- **Added**: 为 OpenAI Responses 和 Codex 增加 routing-session 清理，同时保留共享 provider fallback（[PR #14334](https://github.com/can1357/oh-my-pi/pull/14334) by @iliaal）
- **Fixed**: 修复 Claude Haiku 5.5 请求被静默启用的问题

---

## 🔥 社区热点 Issues（Top 10）

**1. [#11699](https://github.com/can1357/oh-my-pi/issues/11699) — Google Antigravity 虚假 429 RESOURCE_EXHAUSTED**（34 评论）
系统提示词中的 `<system-conventions>` 标签导致 Antigravity 模型（gemini-3.8-flash-medium/high）首轮即报 429。已标记 duplicate + triaged，是当前评论最多的 issue，与 #12019、#9262 共同构成 Antigravity 问题的三条主线。

**2. [#7982](https://github.com/can1357/oh-my-pi/issues/7982) — 按次 task 调用安全指定模型**（17 评论，👍 9）
允许用户在 task 工具和 eval 脚本的 `agent()` 中为单次调用指定模型，且不污染 agent 文件的默认配置。今日 👍 最高的需求之一。

**3. [#14158](https://github.com/can1357/oh-my-pi/issues/14158) — Codex steering 报 WebSocket 原生 turn 冲突**（10 评论）
发送 steering 消息时触发 `unsupported_native_inflight_message` 错误，影响 Codex 用户的中途干预流程。

**4. [#8038](https://github.com/can1357/oh-my-pi/issues/8038) — 默认系统提示词的"绝对完成"规则导致 agent 失控**（10 评论）
"除完成外无停止条件"等无条件指令在高推理模型（GPT-5.6 Sol）上引发严重的计划惯性，P1 级提示词设计问题，触及核心 UX。

**5. [#4614](https://github.com/can1357/oh-my-pi/issues/4614) — 会话级切换活跃 ChatGPT 账号**（8 评论）
多账号登录用户无法手动选择当前会话使用的账号，与 #14997 的故障转移问题相关联。

**6. [#12392](https://github.com/can1357/oh-my-pi/issues/12392) — Anthropic prompt cache 仍为 head-only（P1）**
修复提交 `ab88e931` 已包含在 v18.2.5 中但问题仍复现，缓存签名冻结在头部，直接影响重度用户的成本。

**7. [#15139](https://github.com/can1357/oh-my-pi/issues/15139) — generate_image 将 OpenAI 风格 image_size 原样传给 Gemini 导致 400**
新报 bug：跨 provider 参数未做适配，耗尽整个图像生成 fallback 链。

**8. [#14997](https://github.com/can1357/oh-my-pi/issues/14997) [已关闭] — Codex 配额耗尽不自动切换健康 OAuth 账号**
双账号场景下 A 耗尽后未故障转移到 B，手动 pin 也仅在重选同一模型后生效。已关闭，可能随 v18.8.7 的 routing-session 清理一并处理。

**9. [#8599](https://github.com/can1357/oh-my-pi/issues/8599) — 子 agent 的 MCP/扩展工具作用域失效**
`tools:` allowlist 仅过滤内置工具，MCP 代理和扩展工具被强制注入所有非受限子 agent，是安全与 token 成本的双重隐患。

**10. [#15167](https://github.com/can1357/oh-my-pi/issues/15167) — `omp plugin install` 永不退出**
安装校验完整激活扩展后未释放，导致非交互脚本无限挂起——配套修复 PR #15169 当天即出现，社区响应迅速。

> 值得一提：#15046（"消息重复投递 14 次循环”）被报告者自己撤回——实为用户开启了 `/loop` 模式所致，展现了社区的高质量自查文化。

---

## 🔧 重要 PR 进展（Top 10）

**1. [#15158](https://github.com/can1357/oh-my-pi/pull/15158) [review:p0] — macOS 窗口解析摆脱 Screen Recording 依赖**
`ax()`/`find()` 不再需要屏幕录制权限，且突破 48 窗口列表上限，大幅降低 macOS computer tool 的使用门槛。

**2. [#15162](https://github.com/can1357/oh-my-pi/pull/15162) [review:p0] — stats 面板提供真正的 favicon**
修复 SPA fallback 将 index.html 错误返回给 `/favicon.ico`。

**3. [#15154](https://github.com/can1357/oh-my-pi/pull/15154) [review:p1] — Cursor 模型跨 turn/恢复保留 reasoning**
保留 Cursor 服务端记录的签名与 redacted reasoning，避免重建纯文本导致丢失。

**4. [#15038](https://github.com/can1357/oh-my-pi/pull/15038) — IRC follow-up 后保留子 agent 累计成本**
修复 Agent Hub 与状态栏在 IRC follow-up/parking 场景下丢失累计花费。

**5. [#15036](https://github.com/can1357/oh-my-pi/pull/15036) — 新增 `/seance` 只读会话回溯命令**
将历史会话 fork 为只读（read/grep/glob）子 agent 供当前会话咨询，创新性功能。

**6. [#15169](https://github.com/can1357/oh-my-pi/pull/15169) — 关闭安装校验激活的扩展**
直接修复 issue #15167 的 plugin install 挂起问题。

**7. [#15157](https://github.com/can1357/oh-my-pi/pull/15157) — macOS Escape 停止键诚实上报**
无 Input Monitoring 权限时不再谎称 Esc 可停止输入，保证输入始终可用。

**8. [#15156](https://github.com/can1357/oh-my-pi/pull/15156) — AX 错误细分为 StaleRef / AxUnconfirmed**
避免模型对已消失的元素盲目重试，改善 agent 自主纠错能力。

**9. [#15091](https://github.com/can1357/oh-my-pi/pull/15091) — snapcompact 帧与字节预算可配置**
新增 `frameBytesBudget`/`frameMaxBytes` 设置，解决 CJK 字符被截断问题。

**10. [#15160](https://github.com/can1357/oh-my-pi/pull/15160) — find 判断请求上限 16 条**
适配 System One 网关实际限额，避免 422 报错导致两波评分全挂。

> @yuzu-octopus 今日高产：#15161–15166 六连发，覆盖 `/jobs` 命令、IRC 卡片软换行、`omp://` 链接物化、reasoning effort 记录等。

---

## 📈 功能需求趋势

1. **Provider 健壮性与故障转移**：Antigravity 429、Codex OAuth 轮换（#14997）、z.ai usage reset（#12954）、minimax 429 分类（#15053）——多 provider 限额管理是最高频主题。
2. **子 agent 精细控制**：模型指定（#7982）、工具作用域（#8599）、advisor 配置泄露（#15052/#15101），社区希望更细粒度的编排能力。
3. **多账号/认证体验**：ChatGPT 账号切换（#4614）、SSH 密码认证（#10684）。
4. **成本可见性**：IRC 成本累计（PR #15038）、状态栏 profile 指标（PR #9314）、prompt cache 修复（#12392）。
5. **桌面自动化（macOS natives）**：今日最密集的 PR 集群，权限、错误语义、窗口解析全面打磨。
6. **AI 自主审批**：`approve-for-me` 风格的 AI 审阅工作流（#11053）持续获得关注。

---

## ⚠️ 开发者关注点

- **挂起/冻结类 bug 值得警惕**：plugin install 不退出（#15167）、Windows TUI 冻结诊断困难（#14998）、Hindsight 长请求被 Bun fetch 空闲超时切断（#15095）——异步生命周期管理是反复出现的痛点。
- **资源泄漏**：39GB 僵尸 worker 的 Mnemopi OOM（#14956，已关闭）、共享 Chrome 未随 kill-close 退出（#14379），长会话场景下的资源回收需持续关注。
- **跨 provider 兼容性**：tool-call ID 超长破坏会话（#15056）、image_size 参数透传（#15139）、SDK 示例引用不存在 API（#15068）——抽象层与具体 provider 语义的错位仍需系统性治理。
- **文档与实际行为偏差**：扩展发现路径文档不符（PR #15166）、skill list 忽略 `~` 路径（#15066），提示 CLI/SDK 各入口的行为一致性有待加强。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

# DeepSeek Harness 社区动态日报

**日期：2026-10-10** | 数据来源：[deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)

---

## 📌 今日速览

DeepSeek Harness 今日发布 **dsh-v0.2.1-alpha.2** 预发布版本，带来两项实验性插件：**思考过程机器翻译插件**与 **Git Worktrees 插件**，进一步丰富了 Agent 工作流能力。过去 24 小时内无新增 Issue 和 PR 更新，社区互动相对平静，处于版本发布后的观察期。

---

## 🚀 版本发布

### dsh-v0.2.1-alpha.2（预发布）

**新增功能：**

- **实验性思考过程机器翻译插件**：可在插件页启用，支持 Bing、Google 及付费版 DeepSeek Flash 三种翻译引擎。方便非英文用户阅读 Agent 的思考过程，降低使用门槛。
  - 贡献者：@tianyicui, @ZiyaZhang, @imccyu
- **实验性 Git Worktrees 插件**：可在插件页启用，支持由 Agent 创建并进入独立的 Git checkout，实现隔离的并行工作区，避免 Agent 操作污染主分支状态。
  - 贡献者：@tianyicui

🔗 [查看 Release](https://github.com/deepseek-ai/deepseek-harness/releases)

---

## 🔥 社区热点 Issues

过去 24 小时内无 Issue 更新，本节暂无内容。建议关注后续版本发布后社区对新插件的反馈。

---

## 🔧 重要 PR 进展

过去 24 小时内无 PR 更新，本节暂无内容。新版本中的插件功能已合入主分支并随 Release 发布。

---

## 📈 功能需求趋势

基于近期版本迭代方向，社区关注的功能趋势包括：

- **本地化与国际化**：思考过程翻译插件的推出表明非英文用户群体的本地化需求旺盛
- **多翻译引擎支持**：免费（Bing/Google）与付费（DeepSeek Flash）引擎并存的分层选择
- **Git 深度集成**：Worktrees 支持反映了对 Agent 并行任务与工作区隔离的强烈需求
- **插件化架构**：新功能均以插件形式提供，可按需启用，架构灵活性持续增强

---

## 💡 开发者关注点

- **实验性功能稳定性**：两项新插件均为实验性，开发者可能关注其成熟度与正式 GA 的时间表
- **付费服务边界**：DeepSeek Flash 翻译为付费选项，社区或对定价与免费额度有讨论空间
- **Worktrees 与现有工作流兼容性**：Agent 创建独立 checkout 后的合并、清理流程值得关注

---

> 💬 今日社区整体活跃度较低，建议明日持续跟踪新版本发布后的用户反馈与 Issue 动态。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*