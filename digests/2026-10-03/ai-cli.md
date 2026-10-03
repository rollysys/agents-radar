# AI CLI 工具社区动态日报 2026-10-03

> 生成时间: 2026-10-03 04:23 UTC | 覆盖工具: 11 个

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
**数据日期：2026-10-03**

---

## 一、生态全景

AI CLI 工具已进入“平台化 + 多端化”的深水区：头部工具（Claude Code、Codex、Qwen Code）竞争焦点从基础编码能力转向扩展生态（Mods/插件/MCP）和跨端协同（Desktop/Mobile/Agent Host）。同时，所有工具都在为“长会话自治 Agent”补可靠性欠账——子代理挂起、上下文污染、静默失败成为横跨各社区的共同痛点。Windows 平台支持和 MCP 接入摩擦是两个普遍性短板。值得注意的是，社区力量（Pi、oh-my-pi、OpenCode）在 TUI 性能、多云 provider 适配等细分方向上展现出不输官方的迭代速度。

---

## 二、各工具活跃度对比

| 工具 | 热点 Issues | 重要 PRs | Releases | 社区热度信号 |
|---|---|---|---|---|
| Claude Code | 10（Mods 讨论 238 评论） | 5 | 1（v2.1.288） | 🔥🔥🔥 平台化大讨论持续发酵 |
| OpenAI Codex | 10+（含 5 条同根因集群 Bug） | 10 | **6**（alpha 密集冲刺） | 🔥🔥🔥 VS Code 丢消息跨平台爆发 |
| Gemini CLI | 10 | 10 | 1（nightly） | 🔥🔥 子代理可靠性专项治理 |
| GitHub Copilot CLI | 10 | 1 | 3 | 🔥🔥 Issue 活跃但外部 PR 近乎为零 |
| Qwen Code | 10（主线 issue 42 评论） | 10 | 1（nightly） | 🔥🔥🔥 Managed Agent 架构密集推进 |
| OpenCode | 10 | 10 | 0 | 🔥🔥 修复质量高，含新产品线（浏览器扩展） |
| Pi | 10（Windows 调研 72 评论） | 10 | 0 | 🔥🔥 渲染性能话题集中 |
| oh-my-pi | 10 | 10 | 3 | 🔥🔥 Issue→修复 PR 当天闭环 |
| DeepSeek TUI (Codewhale) | 8 | 10（含 6 个 Dependabot） | 0 | 🔥 v0.10 质量回退未分诊 |
| Kimi Code / DeepSeek Harness | 0 | 0 | 0 | — 24 小时无动态 |

**观察**：Claude Code、Codex、Qwen Code 呈“高 Issue + 高 PR + 高 Release”的成熟生态特征；Copilot CLI 社区反馈量大但代码侧几乎封闭（1 条垃圾 PR），暗示官方内部开发模式；Kimi Code 与 DeepSeek Harness 沉寂值得留意。

---

## 三、共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **扩展/插件生态安全边界** | Claude Code（Mods #91870、PR #99137 “插件只可加严”）、DeepSeek TUI（TS 扩展 harness）、oh-my-pi（扩展 API） | 平台化后插件权限声明与全局策略的关系成为核心议题 |
| **MCP 集成可靠性** | Copilot CLI（Entra OAuth #5040、目录快照 #5044）、Codex（结果截断 PR）、Gemini CLI（10 分钟空等 #29398）、DeepSeek TUI（工具完全不可见 #6828） | MCP 是最大聚集地，也是用户流失风险最高的领域 |
| **长会话稳定性与上下文治理** | Claude Code（10 轮后忽略 CLAUDE.md）、Copilot CLI（/compact 失败）、Gemini CLI（上下文污染 PR #29397）、Pi（用量估算暴涨 8 倍）、Qwen Code（非会话 token 治理 #12028）、oh-my-pi（compaction 改进） | 全行业共同痛点：上下文账本不准、压缩失败、token 成本失控 |
| **Windows 一等公民支持** | Codex（1/3 热门 Issue 带 windows 标签）、OpenCode（服务误杀）、Pi（官方调研 72 评论）、oh-my-pi（粘贴/凭据路径） | Windows 从“能跑”到“好用”仍有系统性差距 |
| **子代理/Multi-Agent 可靠性** | Gemini CLI（挂起 #21409、虚假成功 #22323）、Qwen Code（Managed Agent 双路径）、Codex（Dot 工作流）、oh-my-pi（子代理上下文过滤） | 子代理状态误报正在侵蚀用户对 Agent 架构的信任 |
| **权限/安全自动化** | Claude Code（Auto Mode 误判簇 #90450/#99133）、Gemini CLI（hold 指令强制执行 PR #29394）、Qwen Code（workspace 信任） | 分类器过于保守 vs 行动偏置，两端都不满意 |

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 扩展平台化、Desktop/CLI 对齐、Auto Mode 自动化 | 订阅制专业开发者 | 闭源核心 + Mods 开放扩展，安全语义先行 |
| **OpenAI Codex** | Dot 智能体、多端协同（Desktop/Web/iOS/Android）、企业云（Bedrock/GovCloud） | ChatGPT 订阅用户 + 企业 | Rust 核心密集 alpha 迭代，安全沙箱补强 |
| **Gemini CLI** | 子代理治理、AST 感知工具、零依赖沙箱 | 开源/自托管倾向开发者 | 开源 TypeScript，社区 PR 驱动明显 |
| **Copilot CLI** | MCP 企业集成、BYOK 多模型、headless 自动化 | GitHub 生态企业用户 | 闭源快速补丁，OAuth/企业认证细节打磨 |
| **Qwen Code** | Managed Agent 双路径架构、多渠道接入（Email/QQ/飞书） | 中文社区 + 多渠道场景 | 架构先行（broker/writer fencing），分阶段交付 |
| **OpenCode** | 插件类型安全、企业代理认证、浏览器扩展 | 付费订阅 + 企业 + 本地模型用户 | 开源，Effect 类型化架构，产品边界扩张 |
| **Pi / oh-my-pi** | TUI 体验、多云 provider（Bedrock/Azure/llama.cpp）、分类器路由 | 终端重度用户、本地推理社区 | 开源，性能与 provider 兼容性长尾打磨 |
| **DeepSeek TUI** | ChatGPT 官方登录契约、Ratatui 组件、Rust+TS 混合扩展 | Rust 生态开发者 | Rust Engine 权威 + TS 扩展层 |

---

## 五、社区热度与成熟度

- **最活跃且成熟**：Claude Code（单 issue 238 评论、长寿 issue 超一年）与 Codex（集群性 Bug 引发多公司报告），均有官方高频响应。
- **快速迭代期**：Codex（24h 6 个 alpha）、Copilot CLI（3 个补丁）、oh-my-pi（3 个版本、Issue 当天出修复 PR——响应速度全场最佳）。
- **架构投入期**：Qwen Code（Managed Agent 系列 PR 密集但主线 issue 讨论多于发布）、OpenCode（无 release 但 PR 质量高）。
- **稳步治理期**：Gemini CLI（P1 修复批量关闭）、Pi（安全修复 + 性能优化）。
- **风险信号**：DeepSeek TUI 的 v0.10 回退（CPU + MCP 阻断）均未分诊，维护者响应是最大变量；Kimi Code、DeepSeek Harness 沉寂。

---

## 六、值得关注的趋势信号

1. **平台化与安全语义绑定**：Claude Code 的“插件只能收紧不能放宽全局约束”（PR #99137）可能成为行业范式——扩展生态繁荣的前提是权限单向棘轮，插件开发者需提前适配。
2. **MCP 企业化拐点未到**：Entra ID 回调、GovCloud 合规、token 刷新并发等问题横跨多个工具，说明 MCP 在真实企业环境仍不成熟；选型时应把 MCP 认证链路作为首要验证项。
3. **Token 成本成为一级工程问题**：Qwen 的非会话上下文治理、Codex 的 `incremental_tools` 开关、Gemini 的 AST 感知读取、oh-my-pi 的子代理上下文过滤——多家不约而同从“读得更少”入手降本，暗示按 token 计费压力已传导到工具层。
4. **子代理可观测性是下一个竞争点**：Gemini 的“虚假成功上报”、Qwen 的“迟到结果丢用量”、Codex 的多端状态失同步，都指向同一命题——Agent 状态机的可信度。谁先解决“子代理不说谎”，谁就赢得自治场景的信任。
5. **升级回归频发，建议生产环境锁定版本**：Claude Code 2.1.283+ daemon 回归、Codex VS Code 扩展 10 月 1 日回归、Copilot CLI 1.0.87 回归、DeepSeek TUI v0.10 回退——快速迭代与质量控制的张力在加剧，CI 中固化 CLI 版本 + 升级前冒烟验证已是必要实践。
6. **社区驱动工具的响应优势**：oh-my-pi（当天 Issue→PR 闭环）和 Gemini CLI（P1 批量修复）展示了开源社区模式的响应速度，对愿意承受配置成本的开发者是可行替代方案。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：github.com/anthropics/skills（截止 2026-10-03）
> ⚠️ 说明：PR 评论数数据缺失（undefined），以下热度排序综合 Issue 关联度、更新活跃度与社区讨论焦点推断；所有展示的 PR 均为 OPEN 状态。

---

## 一、热门 Skills 排行（PR）

| # | Skill / PR | 功能与热点 | 状态 |
|---|---|---|---|
| 1 | **skill-creator 修复** [#1298](https://github.com/anthropics/skills/pull/1298) | 修复触发评估误报、Windows 兼容与运行时失败被误判为非触发的问题。关联高热度 Issues #556、#1383，是社区反馈最集中的模块 | OPEN |
| 2 | **mcp-builder 修复** [#1742](https://github.com/anthropics/skills/pull/1742) | 适配 mcp>=2.0 的 `streamable_http_client` 重命名与自定义 Header。修复 #1668，关联 Issue #1390（评估脚本对真实 MCP 服务器全部 0 分） | OPEN |
| 3 | **proofcore-contract-auditor** [#1771](https://github.com/anthropics/skills/pull/1771) | Web3 智能合约静态分析 + TON 链上审计证明锚定。讨论焦点：第三方商业项目借官方仓库分发的边界问题（呼应 Issue #492 信任边界争议） | OPEN |
| 4 | **md2video-audio** [#1703](https://github.com/anthropics/skills/pull/1703) | Markdown → MP4 演示视频 + AI 配音，零成本方案，内容创作方向代表 | OPEN |
| 5 | **pyxel** [#525](https://github.com/anthropics/skills/pull/525) | Python 复古游戏开发技能，含无头运行与帧检查验证，存活 7 个月仍活跃更新，长尾贡献代表 | OPEN |
| 6 | **docx 修复** [#1792](https://github.com/anthropics/skills/pull/1792) | LibreOffice 超时误报成功 + 修订标记残留验证，文档技能健壮性改进 | OPEN |
| 7 | **AWT (AI Watch Tester)** [#822](https://github.com/anthropics/skills/pull/822) | 视觉驱动的零代码 E2E 测试，测试自动化方向 | OPEN |
| 8 | **skill-quality/security-analyzer** [#83](https://github.com/anthropics/skills/pull/83) | 元技能：对 Skill 本身做质量与安全分析，呼应生态治理需求 | OPEN |

---

## 二、社区需求趋势（从 Issues 提炼）

1. **安全与信任治理**（#492, 43 条评论，最热 Issue）：社区技能冒用 `anthropic/` 命名空间造成信任边界滥用，签名/命名空间隔离呼声最高。
2. **企业协作与组织内共享**（#228, 16 条评论）：Skills 组织级共享库、免手动上传的分发链接。
3. **Skill 触发机制可靠性**（#556, 12 条评论；#1383）：`claude -p` 下技能 0% 触发率、Windows 评估失败——评估工具链是最大痛点。
4. **上下文窗口效率**（#1487）：claude-api skill 单次注入 ~156k token 撑爆上下文，渐进式加载需求强烈。
5. **元能力/治理类 Skill**（#1329 compact-memory、#1385 推理质量门、#412 agent-governance）：社区从“做事的 Skill”转向“管理 Agent 的 Skill”。
6. **平台兼容性**（#29 Bedrock、#189 插件重复安装）：跨云平台与插件打包规范化。

---

## 三、高潜力待合并 Skills（活跃 OPEN PR）

- **#1742 mcp-builder mcp>=2 适配** — 修复真实落地 Bug，关联 Issue 明确，最可能近期合并
- **#1298 skill-creator 触发评估修复** — 对应多个高热度 Issue，维护者优先级高
- **#1681 / #1730 / #1607** — skill-creator 直接执行修复、claude-api 死链替换、退役模型 ID 更新：低成本、高确定性的文档/脚本修复，合并阻力最小
- **#1792 docx 超时错误处理** — 明确的正确性修复
- **#1245 notion-spec-to-implementation** — 需求→Notion 任务拆解，切中工作流自动化热点，活跃更新至 9 月底

---

## 四、生态洞察（一句话总结）

> 当前社区最集中的诉求是 **“信任与可靠性”**：既要安全的技能分发与命名空间治理（#492），也要修好 skill-creator/mcp-builder 这套“制造 Skill 的工具链”，让 Skills 从能跑变为可信、可评估、可在企业环境中规模化共享。

---

# Claude Code 社区动态日报 · 2026-10-03

## 一、今日速览

今日发布 **v2.1.288**，为 Mods 扩展体系新增 `$.ui.selection()` API，并为云会话内置 `gh api`。Mods 计划的官方讨论帖（#91870）持续发酵，评论已达 238 条，是当前社区最活跃的话题。同时多位用户反馈 **2.1.283 起 daemon 托管会话出现 statusline 失效与 `--resume` 排除问题**，值得升级用户注意。

## 二、版本发布

### v2.1.288
- 新增 `$.ui.selection()`（Mods API）：返回全屏模式下用户最后选中的文本；若选区位于单条 transcript 行内，同时返回该行
- 为未安装 GitHub CLI 的云会话镜像内置 `gh api`，并修复内置版本发送控制字符的问题

## 三、社区热点 Issues

1. **[#91870](https://github.com/anthropics/claude-code/issues/91870) — Mods：让 Claude Code 扩展性提升 10 倍**
   官方主导的扩展性大讨论，10 月 1 日社区更新确认 Mods 已上线，团队正快速消化反馈。238 条评论、130 👍，是观察 Claude Code 平台化路线的第一手信源。

2. **[#8327](https://github.com/anthropics/claude-code/issues/8327) — API Key 覆盖订阅导致 "Organization has been disabled"**
   一年多的长寿 issue（121 评论），Max/Pro 用户被 API Key 环境变量覆盖后遭遇组织禁用错误，涉及认证与文档双重问题，仍待彻底解决。

3. **[#15148](https://github.com/anthropics/claude-code/issues/15148) — marketplace.json 中 lspServers 配置未被处理**
   73 👍 高热度 bug：LSP 插件安装后完全失效，直接影响 typescript/pyright/gopls 语言支持体验。

4. **[#90450](https://github.com/anthropics/claude-code/issues/90450) — Auto Mode 的 Bash 优先指令静默禁用嵌套 CLAUDE.md 规则**
   48 👍。Auto Mode 与项目级配置规则的冲突，触及权限自动化与用户意图的核心矛盾。

5. **[#43255](https://github.com/anthropics/claude-code/issues/43255) — Claude in Chrome 所有域名报 "Navigation to this domain is not allowed"**
   浏览器扩展 MCP 导航全面被阻，属于功能性回归级别的问题。

6. **[#88747](https://github.com/anthropics/claude-code/issues/88747) — Worktree 写入绝对 core.hooksPath 导致执行主仓 hooks**
   精细的 git worktree 隔离 bug，对依赖 hooks 的工作流有实际破坏。

7. **[#52517](https://github.com/anthropics/claude-code/issues/52517) — Desktop Code 标签页 Mermaid 图不渲染**
   32 👍，GUI 与 CLI 能力对齐的典型诉求。

8. **[#79305](https://github.com/anthropics/claude-code/issues/79305) — Desktop 支持自定义主题/强调色**
   39 👍，多显示器用户辨识窗口的刚需，CLI 已有而 Desktop 缺失。

9. **[#99133](https://github.com/anthropics/claude-code/issues/99133) — Auto Mode 分类器误判 staging 部署为 "Production Deploy"**
   今日新报，与 #90450 同属 Auto Mode 权限分类过于激进的问题簇，误拦截还会扩散到无关只读操作。

10. **[#99144](https://github.com/anthropics/claude-code/issues/99144) — 2.1.283 起 daemon 会话 statusline 失效、被排除出 `--resume`**
    今日新报的近期回归，影响 2.1.283–2.1.288 全部版本，升级用户建议关注。

## 四、重要 PR 进展

*注：过去 24 小时活跃 PR 共 5 条，全部列出。*

1. **[#99137](https://github.com/anthropics/claude-code/pull/99137) — 安全默认值：个人插件只能收紧、不能放宽全局约束**（@poteat）
   重要的安全语义 PR：deny 规则、hook ask、托管环境策略对个人安装的插件保持强制力，插件只能加严不能放松。与 Mods 生态安全直接相关。

2. **[#99118](https://github.com/anthropics/claude-code/pull/99118) — /diff 面板打开时其他插件 toast 正常显示**
   修复 `/diff` 面板 `holdToasts` 全局抑制 toast 的问题，改善多插件并存的 UI 体验。

3. **[#99141](https://github.com/anthropics/claude-code/pull/99141) — /diff 无内容时保留空面板，有内容即显示**（基于 #99118）
   diff 面板生命周期优化的系列改动之一，与 #99136（面板显示未跟踪文件）的诉求呼应。

4. **[#97293](https://github.com/anthropics/claude-code/pull/97293) — Mods 声明补充 `process.run` 截断标志与 `fs.list` 的 mtimeMs**
   Mods 类型系统持续完善，注意其发布策略：待 npm CLI 实际携带这些字段后才解锁声明。

5. **[#77977](https://github.com/anthropics/claude-code/pull/77977) — 文档：marketplace 源的 skipLfs 选项**（已关闭）
   补充插件市场 git/github 源跳过 Git LFS 下载的文档。

## 五、功能需求趋势

- **Mods / 扩展生态**：#91870、#99135（MCP `_meta` 转发调用 agent id）、多个 Mods PR——平台化是当前主线
- **Desktop 与 CLI 功能对齐**：自定义主题（#79305）、Mermaid 渲染（#52517）、思考动画回归（#98254、#99139）
- **权限与安全自动化**：Auto Mode 误判（#90450、#99133）、沙箱环境测试账号登录（#78985、#96949）、beta 项目 bypass permissions（#98262）
- **远程与移动**：Android 推送失联（#87003）、remote-control 缺 Artifact 工具（#88731）、Windows Computer Use（#82300）
- **Diff / 会话管理 UX**：diff 面板显示未跟踪文件（#99136）、侧栏项目分组（#99134）

## 六、开发者关注点

1. **Auto Mode 权限分类器过于保守**：多个 issue 反映误拦截 staging 部署、甚至扩散阻断只读操作，且会静默覆盖 CLAUDE.md 规则——这是当前最高频的痛点簇。
2. **近期版本的 daemon 回归**：2.1.283 起 statusline 与 `--resume` 行为变化，建议生产环境升级前验证。
3. **认证/订阅识别仍不稳定**：API Key 覆盖订阅（#8327）、Max 20x 被识别为 Pro（#98134）。
4. **长会话可靠性**：约 10 轮对话后模型忽略 CLAUDE.md（#98870）、Linux Desktop 长会话 webview 挂死（#99142）、VS Code 第三次提问冻结（#99132）。
5. **插件安全边界**：PR #99137 确立“插件只可加严”原则，插件开发者需关注新约束对自己插件权限声明的影响。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-10-03）

## 1. 今日速览

今日 Codex 进入 0.162.0 密集 Alpha 迭代期，24 小时内连发 6 个 alpha 版本，显示主分支正在冲刺下一稳定版。社区最突出的痛点是 **VS Code 扩展消息队列 Bug**——多个 Issue 报告提交的提示词被静默丢弃（"undefined is not valid JSON"），影响跨平台用户，疑似 9 月 30 日前后的扩展版本引入的回归。此外，Windows 平台和 Dot（智能体）生态的稳定性问题持续占据热门 Issue。

---

## 2. 版本发布

过去 24 小时连续发布 **6 个 Rust Alpha 版本**：

- [rust-v0.162.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.9)
- [rust-v0.162.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.8)
- [rust-v0.162.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.7)
- [rust-v0.162.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.6)
- [rust-v0.162.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.5)
- [rust-v0.162.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.4)

各版本 Release Notes 均无详细说明，但从今日合并的 PR 看，主要涵盖 Windows 沙箱诊断、MCP 结果截断、TUI 交互改进和 Bedrock 支持增强。

---

## 3. 社区热点 Issues

### 🔥 VS Code 扩展消息丢失（集群性 Bug，疑似同一根因）

1. **[#49834](https://github.com/openai/codex/issues/49834)** — VS Code 扩展内部 fetch 响应未定义导致 JSON 解析错误，排队消息发送锁无法释放（19 评论）
2. **[#49975](https://github.com/openai/codex/issues/49975)** — Windows VS Code 消息卡在发送队列，同样报 "undefined is not valid JSON"（18 评论）
3. **[#50118](https://github.com/openai/codex/issues/50118)** — VS Code 在回合完成后仍错误排队提示词，线程 `markedStreaming=true` 状态未复位（12 评论，👍6）
4. **[#50265](https://github.com/openai/codex/issues/50265)** — 自 10 月 1 日起提交的提示词消失且不处理，报告称多家公司受影响（4 评论）
5. **[#50363](https://github.com/openai/codex/issues/50363)** — Linux 平台同样出现后续提示词被静默丢弃

> **分析师点评**：这 5 个 Issue 症状高度一致（composer 清空但消息不发送），横跨 Linux/Windows，很可能与发送锁释放逻辑回归相关，是当前社区影响面最广的问题。

### 其他重点

6. **[#49729](https://github.com/openai/codex/issues/49729)** — Dot 无法在已保存项目中创建/跟进本地 Codex 任务，阻断 Dot 与 Desktop 的核心工作流（28 评论，今日最热）
7. **[#49264](https://github.com/openai/codex/issues/49264)** [已关闭] — Windows CLI 每执行一条命令就闪现一个终端窗口，0.159.0 引入的回归，官方修复中已有 Windows 沙箱诊断相关 PR 合入（12 评论）
8. **[#49618](https://github.com/openai/codex/issues/49618)** — Windows ↔ Android 远程配对死循环，"Approve this phone" 反复出现（12 评论，👍8）
9. **[#49873](https://github.com/openai/codex/issues/49873)** — Dot 安全暂停状态失同步：自主执行继续运行而人工控制被阻断，涉及安全边界，值得持续关注
10. **[#50136](https://github.com/openai/codex/issues/50136)** — 云任务在 Desktop/Web/iOS/Dot 四端可见性与发送行为不一致，反映多端状态同步架构问题

### 长期悬而未决

- **[#20851](https://github.com/openai/codex/issues/20851)** — 请求 CLI 一等公民支持 Computer Use（👍41，5 个月未落地）
- **[#43019](https://github.com/openai/codex/issues/43019)** — Windows 上对每个未跟踪文件各启动一次 `git diff --no-index`，数千文件时耗尽系统 commit 导致崩溃

---

## 4. 重要 PR 进展

| PR | 内容 |
|---|---|
| [#50507](https://github.com/openai/codex/pull/50507) | 记录 Windows 沙箱服务停止诊断（生命周期原因 + HRESULT），直接支撑 #49264/#49284 排查 |
| [#50472](https://github.com/openai/codex/pull/50472) | 为 Amazon Bedrock Astra 模型启用 Ultrafast 服务层级，修复目录元数据被清空的问题 |
| [#50470](https://github.com/openai/codex/pull/50470) / [#50458](https://github.com/openai/codex/pull/50458) | MCP 工具结果截断改进：计算 JSON 序列化开销 + 分页历史中限制超大结果，防止 MB 级载荷持久化 |
| [#50467](https://github.com/openai/codex/pull/50467) | 修复复制转录选区时纯文本混入 Markdown 语法的问题 |
| [#50510](https://github.com/openai/codex/pull/50510) | Bedrock 配置检测到 AWS GovCloud 时强制安全指引确认，合规性增强 |
| [#50459](https://github.com/openai/codex/pull/50459) | 自定义模型提供商支持 capability 覆盖（`external_web_access`、`remote_compaction`） |
| [#50462](https://github.com/openai/codex/pull/50462) | 委托任务的线程预览从任务输入生成，改善 Dot 创建任务的可见性（关联 #50136 类问题） |
| [#50446](https://github.com/openai/codex/pull/50446) | Rollout 附件打包为 gzip tar，带大小上限，改进诊断上传 |
| [#50464](https://github.com/openai/codex/pull/50464) | 新增 `incremental_tools` 特性开关（默认关闭），暗示增量工具调用能力正在开发 |
| [#50499](https://github.com/openai/codex/pull/50499) | Daemon 更新失败时附带安装器 stderr（最后 2 KiB），改善升级排错体验 |

---

## 5. 功能需求趋势

1. **Dot 与多端协同**（最活跃）：Dot 创建/读取/跟进任务的完整闭环（#49729、#49862、#50136），社区期望 Dot 成为跨端一致的一等入口
2. **CLI 能力扩展**：Computer Use 一等公民化（#20851，👍41）、Side agent 与主线程通信（#37112）
3. **企业/云部署**：Bedrock GovCloud 合规、自定义 Provider capability 配置，反映企业自托管需求上升
4. **成本与效率控制**：上下文消耗过高（#46343，单任务吃掉 42% 周配额）、`incremental_tools` 开关均指向 token 成本优化方向

## 6. 开发者关注点

- **消息队列可靠性是当前最大痛点**：VS Code 扩展丢消息问题跨平台爆发，建议受影响用户关注 #49834 的修复进展，临时可尝试降级扩展版本
- **Windows 平台稳定性欠账多**：今日 30 条热门 Issue 中约 1/3 带 `windows-os` 标签，涵盖沙箱 ACL、终端闪现、认证挂起、路径反序列化等；好在官方 PR 节奏显示正在系统性补强 Windows 沙箱诊断
- **远程控制/配对链路脆弱**：iOS/Android 远程掉线（#24179）、配对循环（#49618）、慢连接被踢（#37526，旧修复未覆盖全部代码路径）
- **安全机制与用户体验的张力**：安全确认循环（#43192）、安全暂停状态失同步（#49873）表明安全拦截的状态管理需要更健壮的恢复路径
- **可观测性持续改进**：多个 PR 增加诊断信息（stderr 捕获、持久化体积度量、沙箱生命周期记录），对排查上述问题有直接帮助

---
*数据来源：github.com/openai/codex | 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-03）

## 📰 今日速览

今日发布 v0.64.0-nightly，修复了选择列表中 Enter 和空格键确认不可靠的交互问题。社区讨论聚焦 **Agent 子代理可靠性**（挂起、虚假成功上报、skills 使用率低）这一核心痛点。多个高优先级 PR 关闭，涉及会话恢复重复工具响应、中断导致的上下文污染、以及调度层强制执行用户 hold 指令等重要修复。

---

## 🚀 版本发布

### v0.64.0-nightly.20261003.gfb972b2f8
- **fix(cli)**: 确保 Enter 和空格键能可靠确认选择列表选项（PR #29502，@ugorla-dev）
- [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.64.0-nightly.20261002.gc9096a847...v0.64.0-nightly.2026)

---

## 🔥 社区热点 Issues

### 1. Subagent 达到 MAX_TURNS 后误报 GOAL 成功 [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
**P1 | 13 评论**。`codebase_investigator` 子代理明明因轮次上限被中断，却上报 `status: "success"`。状态误报直接误导主代理的后续决策，是 Agent 可观测性的核心问题。

### 2. Generalist agent 无限挂起 [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
**P1 | 8 评论 | 👍8**。简单如创建文件夹的操作一旦委派给 generalist agent 就永久挂起（用户等待长达一小时），手动禁止 subagent 才能绕过。用户影响面大。

### 3. 零依赖 OS 沙箱 + 执行后意图路由 [#19873](https://github.com/google-gemini/gemini-cli/issues/19873)
**P2 | 9 评论**。利用 Gemini 3 原生 bash 能力（POSIX 工具链探索代码库）同时兼顾安全的架构提案，方向性讨论价值高。

### 4. 模型很少主动使用 skills 和 sub-agents [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
**P2 | 7 评论**。用户配置了 gradle/git skills 但模型几乎从不自主调用，需显式指令。反映工具选择策略的实际效果与预期差距。

### 5. AST 感知文件读取/搜索/映射评估 EPIC [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
**P2 | 7 评论**。评估 AST 工具（ast-grep、tilth、glyph）能否减少错位读取、降低 token 噪音。配套调查见 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) 和 [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)。

### 6. Browser Agent 无视 settings.json 配置覆盖 [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)
**P2 | 4 评论**。`AgentRegistry` 正确合并了配置但 Browser Agent 完全不生效（如 `maxTurns`），配置链路断点问题。

### 7. 工具数 > 128 触发 400 错误 [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
**P2 | 3 评论**。MCP 扩展场景下工具数量易超限，需要更智能的工具范围管理。

### 8. browser subagent 在 Wayland 下失败 [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
**P1 | 4 评论**。Linux Wayland 用户被排除在浏览器代理功能之外。

### 9. 模型随机位置创建临时脚本 [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)
**P2 | 3 评论**。限制 shell 编辑后模型在多个目录乱写脚本，提交前清理成本高。同类安全问题见 [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)（应阻止 `git reset --force` 等破坏性操作）。

### 10. symlink 形式的 agent 文件不被识别 [#20079](https://github.com/google-gemini/gemini-cli/issues/20079)
**P2 | 4 评论**。`~/.gemini/agents/` 下符号链接的 `.md` 无法注册为子代理，影响 dotfiles 用户的配置管理。

---

## 🔧 重要 PR 进展

### 1. 防止中断轮次导致上下文污染和无限循环 [#29397](https://github.com/google-gemini/gemini-cli/pull/29397)（已关闭）
P1 / XL。中断（SIGINT、超时）后注入的合成 assistant 轮次会造成严重的会话内上下文污染，此 PR 根治该问题。

### 2. 调度层阻止破坏性工具覆盖用户 hold 指令 [#29394](https://github.com/google-gemini/gemini-cli/pull/29394)（已关闭）
P1 / XL。用户说“先别改”时 agent 仍执行写操作，现在在调度器层强制拦截 `replace`/`write_file`/`run_shell_command`，而非仅靠 prompt 约束。

### 3. 会话恢复时避免重复工具响应 [#29618](https://github.com/google-gemini/gemini-cli/pull/29618)（开放中）
P1。修复 `-r` 恢复会话时 functionResponse 被双重回放的问题。与已关闭的 [#29400](https://github.com/google-gemini/gemini-cli/pull/29400) 同主题。

### 4. OAuth iss 参数校验对齐 RFC 9207 [#29616](https://github.com/google-gemini/gemini-cli/pull/29616)（开放中）
P1 / Security。规范 OAuth 回调 issuer 验证，与 MCP 授权规范保持一致。

### 5. 持久化状态写入失败安全 [#29402](https://github.com/google-gemini/gemini-cli/pull/29402)（已关闭）
P1。采用临时文件 + `fsync` + 原子 rename，防止中断的保存把 `state.json` 写成截断 JSON 并静默清空状态。

### 6. read-many-files 用 glob 匹配替换模糊逻辑 [#29457](https://github.com/google-gemini/gemini-cli/pull/29457)（开放中）
P1。修复 `includes()` 模糊匹配导致二进制文件（图片/PDF）被当作“显式请求”读入，造成上下文膨胀的关键 bug。

### 7. 忽略过滤优化与子树剪枝 [#29582](https://github.com/google-gemini/gemini-cli/pull/29582)（开放中）
P1 / 性能。目录级状态记忆化 + 通配符剪枝 + symlink 缓存，解决大仓库多秒级阻塞延迟。

### 8. MCP 工具发现绑定短超时 [#29398](https://github.com/google-gemini/gemini-cli/pull/29398)（已关闭）
P1。MCP 服务器返回 JSON-RPC id 不匹配时，SDK 会空等满 10 分钟默认超时，此 PR 加上界。

### 9. gVisor/runsc 沙箱 IPC socket 回退 [#29597](https://github.com/google-gemini/gemini-cli/pull/29597)（开放中）
P2。gVisor 用户态网络栈隔离 loopback，启用 stdio IPC 回退修复 companion 通信。

### 10. 非交互模式支持 `/skill-name` 激活技能 [#29546](https://github.com/google-gemini/gemini-cli/pull/29546)（开放中，help wanted）
P2。在非交互路径注册 SkillCommandLoader，补齐 skills 在脚本化场景的可用性。

其他值得留意：[#29505](https://github.com/google-gemini/gemini-cli/pull/29505)（rootless Podman keep-id 支持）、[#29617](https://github.com/google-gemini/gemini-cli/pull/29617)（`@<directory>` 不再递归展开全量文件）、[#29399](https://github.com/google-gemini/gemini-cli/pull/29399)（编辑时保留无关注释）。

---

## 📈 功能需求趋势

1. **Agent/子代理可靠性**：今日最热方向。挂起（#21409）、虚假成功（#22323）、skills 调用不足（#21968）、`/bug` 缺少子代理上下文（#21763）集中爆发，workstream-rollup 标签密集更新表明官方正在专项治理。
2. **上下文与 token 效率**：AST 感知读取（#22745）、“Tactful Extraction”外科手术式读取（#19561）、文件型任务追踪替代 WriteToDo（#18836）——社区强烈希望摆脱“上下文消防栓”式的大文件读取。
3. **安全与沙箱**：零依赖 OS 沙箱（#19873）、破坏性操作防护（#22672）、gVisor/Podman 沙箱兼容（#29597、#29505）。
4. **Browser Agent 成熟度**：配置覆盖失效（#22267）、会话锁恢复（#22232）、Wayland 支持（#21983）。
5. **并行子代理协作**：共享内存/并行 subagent（#18287）、settings.json 子代理发现（#18285），处于规划早期。

---

## ⚠️ 开发者关注点

- **子代理不可信**：挂起 + 状态误报让开发者倾向于手动禁用 subagent，这是对 Agent 架构价值的直接侵蚀，需优先修复。
- **上下文膨胀代价高**：二进制文件误读（#29457）、大文件 firehose（#19561）推高 token 成本，影响长任务稳定性。
- **配置不生效**：settings.json 覆盖在 Browser Agent 失效（#22267）、symlink agent 不识别（#20079），配置链路一致性欠缺。
- **安全边界焦虑**：破坏性 git 操作、临时文件乱放、agent 无视用户 hold 指令，用户对“行动偏置”（action-bias）不满。
- **性能阻塞**：大仓库文件发现延迟（#29582）、MCP 10 分钟空等（#29398）、终端 resize 闪烁（#21924）仍待完善。

---
*数据来源：github.com/google-gemini/gemini-cli | 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-03 | 数据来源：github.com/github/copilot-cli**

---

## 1. 今日速览

过去 24 小时 Copilot CLI 连发三个补丁版本（1.0.92-1 至 1.0.92-3），重点修复了快速交互时的输入响应、沙箱网络代理绕过提示和 MCP 远程服务器重连等稳定性问题，并新增 Ctrl+E 环境切换器。Issue 区 MCP 生态（OAuth 认证、工具目录、配置加载）仍是投诉最集中的领域，仅过去一天就新增多条 MCP 相关 bug 报告。

---

## 2. 版本发布

过去 24 小时发布 3 个版本，均为修复/小功能更新：

**v1.0.92-3**
- **新增**：会话前 Ctrl+E 环境选择器，可在本地运行与云端运行间切换
- 修复：键盘、粘贴、鼠标输入在快速交互时保持顺序与响应
- 沙箱 shell 命令在代理拦截目标时提供网络绕过提示

**v1.0.92-2**
- 修复：Windows 沙箱命令将临时文件写入已授权的 temp 目录，使“重命名临时文件”类工具正常工作
- 修复：Prompt 模式在 Stop-hook 连续操作完成后只触发一次 `sessionEnd` 钩子

**v1.0.92-1**
- 修复：Streamable HTTP 会话空闲过期后自动重连远程 MCP 服务器
- 修复：向运行中的后台 agent 发消息可在下一个处理时机接管当前轮次
- 修复：上下文滚动时保留最新请求到恢复上下文

---

## 3. 社区热点 Issues

1. **#4438** — `disable-model-invocation: true` 导致 Skill 完全不可达（11 评论 / 12 👍，仍 OPEN）
   [链接](https://github.com/github/copilot-cli/issues/4438)
   项目 Skill 在 CLI 中仅显示但无法通过 `skill()` 工具调用，用户显式请求也报 "Skill not found"。影响 Skill 工作流的核心可用性，是本期最热 Issue。

2. **#5042** — HydraFusion 路由 400 后将整个会话降级到小上下文模型（新报，OPEN）
   [链接](https://github.com/github/copilot-cli/issues/5042)
   路由模型 37 分钟后被拒，同会话被切到 `mai-code-1.1-flash`，静态提示词都装不下，工具集还中途变化。暴露了路由降级策略缺乏上下文窗口校验的严重问题。

3. **#5040** — MCP OAuth：Entra ID 拒绝 127.0.0.1 回调（AADSTS50011）（新报，OPEN）
   [链接](https://github.com/github/copilot-cli/issues/5040)
   企业 Entra 保护的远程 MCP 服务器无法认证，且无 localhost host 覆盖选项。对使用 Azure 生态的企业用户是阻断性问题。

4. **#5044** — 1.0.87 回归：无关工具的 `_meta` 差异触发 "MCP tool catalog changed" 失败（新报，OPEN）
   [链接](https://github.com/github/copilot-cli/issues/5044)
   服务器重连窗口内工具快照比对过于严格，导致合法工具调用失败，疑似新引入的回归。

5. **#4840** — BYOK 接入 DeepSeek 失效：400 unknown variant `custom`（OPEN）
   [链接](https://github.com/github/copilot-cli/issues/4840)
   自定义 provider（DeepSeek）请求被拒，工具序列化格式与第三方 API 不兼容，影响所有 BYOK 用户的第三方模型接入。

6. **#5038** — 内置 grep 工具静默忽略 `n` 参数，导致丢失行号（新报，OPEN）
   [链接](https://github.com/github/copilot-cli/issues/5038)
   664 次 headless 基准测试中模型常会漏掉 `-n` 的连字符，参数容错缺失直接降低工具输出质量，对 headless/自动化场景影响显著。

7. **#5045** — `/compact` 反复失败："received empty response from model"（新报，OPEN）
   [链接](https://github.com/github/copilot-cli/issues/5045)
   gpt-6.1-sol 下压缩持续失败，长会话无法收敛上下文，与此前报告类似，疑似未根治的老问题。

8. **#4569** — GitHub Mobile 远程会话卡在 "Queued for Copilot"（OPEN）
   [链接](https://github.com/github/copilot-cli/issues/4569)
   CLI 已即时响应，但移动端 UI 不刷新，跨端体验割裂，影响远程操控场景。

9. **#5015** — 功能需求：键盘可访问的 pager 模式（Vim/less 式导航）（OPEN，3 👍）
   [链接](https://github.com/github/copilot-cli/issues/5015)
   禁用鼠标后只能整屏翻页，长输出难以审阅，反映终端重度用户的真实诉求。

10. **#5043** — Ctrl+Shift+C 复制时意外取消 ask-user 确认（新报，OPEN）
    [链接](https://github.com/github/copilot-cli/issues/5043)
    在 Herdr 终端中标准复制快捷键会误触发确认取消，属输入处理边界问题，与 1.0.92-3 的输入顺序修复方向相关。

**其他值得注意的关闭动态**：#4832（workspace `.mcp.json` 不加载）、#4012（BYOK reasoning effort 不支持 glm-5.2:cloud）、#5039（MCP OAuth 协议版本 400 无回退）等多条高关注 Issue 已在本期关闭，修复节奏较快。

---

## 4. 重要 PR 进展

过去 24 小时仅 1 条 PR 更新，无实质性功能 PR：

1. **#5046** [OPEN] "Initial commit"（@c6r8h48msf-debug）
   [链接](https://github.com/github/copilot-cli/pull/5046)
   无描述、无实质内容，疑似测试或垃圾 PR，建议维护者关闭。

> 本期 PR 活动极少，社区贡献主要发生在 Issue 讨论；代码侧动态集中在官方 Release 节奏上。

---

## 5. 功能需求趋势

1. **MCP 生态健壮性**（最突出）：OAuth 认证（Entra 回调 #5040、协议版本回退 #5039）、工具目录一致性 #5044、workspace 配置加载 #4832、状态通知静音 #5034、Figma 远程 MCP 数据缺失 #5025 —— MCP 已是社区反馈的最大聚集地。
2. **BYOK / 模型灵活性**：第三方 provider 兼容性（#4840、#4012）、路由降级策略（#5042）、模型间行为一致性。
3. **终端交互体验**：pager/键盘导航（#5015）、剪贴板处理（#5043、#3172）、输入响应性（1.0.92-3 已修复）。
4. **上下文与会话管理**：/compact 可靠性（#5045）、Plan 模式后清理规划上下文（#5041）、rewind 后图片丢失（#5037）、跨端会话同步（#4569）。
5. **权限与自动化细粒度控制**：命令模式白名单（#3032）、allowed_directories 生效（#4482）、关闭 Autopilot 摘要（#5033）。

---

## 6. 开发者关注点

- **MCP 接入摩擦大**：企业 Entra ID 认证、多服务器并发 token 刷新（#4842）、配置热重载（#4562）等问题表明远程 MCP 在真实企业环境中仍不成熟，是用户流失风险最高的领域。
- **长会话稳定性**：/compact 失败、事件流冻结但 UI 未死锁（#5035）、上下文滚动丢请求——长任务用户对可靠性抱怨集中。
- **模型兼容性边界**：BYOK 用户对第三方模型（DeepSeek、GLM）兼容问题持续上报，官方模型路由切换行为（#5042）也缺乏透明度。
- **Headless/自动化质量**：grep 参数容错（#5038）、subagent 超时误杀父进程（#4628）说明非交互模式的打磨仍落后于交互模式。
- **企业级细节**：Git co-authorship trailer 顺序破坏 GitHub 识别（#5032）这类小问题对开源项目贡献者影响不小。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-10-03

## 📰 今日速览

今日无新版本发布，但社区活跃度极高： Issues 集中在 Windows 平台稳定性（managed service 被误杀）与免费层策略误判，PR 方面则迎来多个高质量修复——包括 SSE 流恢复、代理认证支持以及全新的浏览器扩展产品雏形。GUI 扩展类型化组合原语（#52868）标志着插件架构向更严格的类型安全演进。

---

## 🔥 社区热点 Issues

1. **[#23153](https://github.com/anomalyco/opencode/issues/23153) [FEATURE]: Pay Go with crypto** — 55 👍 / 24 评论
   呼声最高的功能需求：支持加密货币支付 OpenCode Go 订阅。开放半年仍在持续讨论，反映付费用户群体的支付多样化诉求。

2. **[#52049](https://github.com/anomalyco/opencode/issues/52049) Windows 45s 事件流空闲看门狗重启后台服务**
   Windows 上 v2 托管服务被客户端反复杀死重启，导致所有进行中的会话和子代理被中断。非崩溃而是客户端主动杀进程，属高优先级平台稳定性问题。

3. **[#52880](https://github.com/anomalyco/opencode/issues/52880) 无 Bash 的 agent profile 启动即报免费层错误**
   Bash-less 子代理 5/5 失败，Bash-capable 全部成功——免费层 "can only be used from within OpenCode" 校验存在误判，对自定义 agent 配置影响严重。

4. **[#50843](https://github.com/anomalyco/opencode/issues/50843) GitLab Duo 在自托管实例上失败**
   OAuth token 过期刷新逻辑与工作目录/项目上下文缺失两个问题叠加，企业自托管用户的核心阻塞。

5. **[#50650](https://github.com/anomalyco/opencode/issues/50650) Desktop 自定义 provider 保存必抛错**
   `provider.custom.unavailable` 无条件抛出，自定义 OpenAI 兼容 provider 流程在所有服务器上均无法走通，包括官方捆绑本地服务器。

6. **[#52889](https://github.com/anomalyco/opencode/issues/52889) Fennec：陈旧控制台状态与进程注册竞态**
   基于一次完整 E2E agent 会话的深度反馈，肯定了幂等 `process_spawn` 等设计，同时指出合规相关的误报和 payload 上限问题。

7. **[#52152](https://github.com/anomalyco/opencode/issues/52152) `opencode upgrade` 报成功但二进制未替换**
   存在第二份包管理器注册时升级静默失败，直接影响所有通过自定义 npm prefix 安装的用户。

8. **[#52879](https://github.com/anomalyco/opencode/issues/52879) `providers.settings.transport` 配置未生效** — 已关闭
   配置文件中声明的 transport 被忽略，影响本地 OpenAI 兼容代理（如 LiteLLM）用户。

9. **[#39861](https://github.com/anomalyco/opencode/issues/39861) 零数据保留政策表述被移除** — 已关闭，18 👍
   文档悄然删除 "zero-retention policy" 表述引发社区对隐私政策变化的关注，与今日 PR #52892 中 Fledge Alpha Free 的隐私例外声明形成呼应。

10. **[#23595](https://github.com/anomalyco/opencode/issues/23595) `<system-reminder>` 位置漂移破坏 KV cache** — 已关闭，15 👍
    llama.cpp 本地推理用户的长期痛点：system-reminder 移动导致 prompt cache 失效，浪费大量重复处理时间。

---

## 🔧 重要 PR 进展

1. **[#52868](https://github.com/anomalyco/opencode/pull/52868) GUI 扩展类型化组合与生命周期原语**
   无需 Effect runtime 即可在类型层面校验依赖缺失、重复 provider、冲突 key 等问题，并行激活扩展——插件架构的重大升级。

2. **[#51871](https://github.com/anomalyco/opencode/pull/51871) 恢复陈旧事件流：停顿看门狗 + 前台重同步 + 重连退避**
   一次性修复多类 SSE 流死掉需硬刷新的问题，补回 v2 重构中丢失的看门狗机制。

3. **[#52818](https://github.com/anomalyco/opencode/pull/52818) 新增 OpenCode Browser 浏览器扩展**
   全新产品线 `packages/browser-extension`，将 OpenCode 能力带入浏览器侧。

4. **[#52734](https://github.com/anomalyco/opencode/pull/52734) 代理认证支持（Negotiate / NTLM / Basic）**
   解决企业认证代理网关下所有请求 407 失败的问题，企业环境刚需。

5. **[#52885](https://github.com/anomalyco/opencode/pull/52885) CLI 恢复步骤后保留成功退出码**
   瞬时步骤失败不再导致整体 run 非零退出，修复 CI/脚本场景误报。

6. **[#52887](https://github.com/anomalyco/opencode/pull/52887) 文本生成前等待插件激活**
   修复竞态：插件未就绪即开始生成导致钩子丢失（前次 PR #52242 重新提交）。

7. **[#51583](https://github.com/anomalyco/opencode/pull/51583) 位置清理时保护进行中的会话**
   释放不活跃会话时不再误杀其他会话的前后台 shell/子代理，关联 #51343。

8. **[#52882](https://github.com/anomalyco/opencode/pull/52882) 内嵌 UI 静态资源缓存预压缩**
   与 #51875（cache policy + etag）构成同一性能优化系列，消除每次请求重新读盘和压缩。

9. **[#52668](https://github.com/anomalyco/opencode/pull/52668) 项目文件夹缺失时返回 404 而非 500**
   已保存项目的目录被删除后不再导致 API 全面 500，错误处理类型化改进。

10. **[#52892](https://github.com/anomalyco/opencode/pull/52892) 文档：Fledge Alpha Free（V1/V2）**
    新模型限时免费上线，但明确标注**不保证零数据保留、可能用于训练**——隐私敏感用户注意。

---

## 📈 功能需求趋势

- **支付与商业化**：加密货币支付（#23153）、订阅额度计费透明度（#40280）
- **企业环境**：认证代理（#52734）、自托管 GitLab 集成（#50843）、NTLM/Kerberos
- **本地/自托管模型**：deepseek-v4 双端点支持（#40261）、Kilogateway 模型发现（#35949）、llama.cpp cache 友好性（#23595）
- **可观测性**：context meter 中缓存/新 token 分解展示（#34298）
- **产品边界扩展**：浏览器扩展（#52818）、LAN provider 自动发现（#27554）

---

## ⚠️ 开发者关注点

1. **Windows 平台稳定性**：#52049 服务误杀 + #40205 Desktop 流式冻结，Windows 体验仍是重灾区。
2. **升级可靠性**：#39560 连续升级致数据丢失、#52152 升级静默失败——升级路径缺乏安全保障。
3. **配置一致性**：transport 不生效（#52879）、`${AWS_REGION}` 未替换（#40075），配置层的环境变量展开与覆盖逻辑需系统性排查。
4. **隐私政策变化**：零数据保留表述移除 + Fledge 免费模型数据用于训练，企业用户需重新评估合规风险。
5. **桌面端 UX 缺口**：归档会话无法恢复（#40287）、Plan/Build 按钮需切 tab 才显示（#40288）。

---
*数据来源：anomalyco/opencode GitHub（过去 24 小时） | 明日继续关注 Windows 修复进展与 Fledge 上线后的社区反应*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-10-03

## 1. 今日速览

今日发布了 nightly 版本 v0.24.7，包含 Code Mode 文本对齐与权限修复。**Managed Agent 双路径架构**（#12380）持续主导社区讨论（42 条评论），相关 Stage G、会话持久化、writer 接管等子任务密集推进，占据了大半 Issue/PR 热度。此外，CI 安全审计故障（CVE 审计 + CodeQL 连续静默失败 13 次）值得关注。

---

## 2. 版本发布

**v0.24.7-nightly.20261002.a011f66944**
- fix(core): 使 Code Mode 文本与惰性工具发现机制对齐（PR #12990，@tanzhenxin）
- fix(permissions): 修复已批准权限的生效逻辑

---

## 3. 社区热点 Issues

1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380)** — Managed Agent 双路径架构与分阶段交付提案。今日最热（42 评论），定义 Session 持久所有权、Workspace 绑定、可恢复工具执行等核心设计，是当前整个 roadmap 的主线。

2. **[#12028](https://github.com/QwenLM/qwen-code/issues/12028)** — 非会话上下文 Token 治理追踪。系统提示词、工具 schema、QWEN.md 等每次请求都全额付费，长上下文模型上开销惊人，状态 in-progress（18 评论）。

3. **[#13078](https://github.com/QwenLM/qwen-code/issues/13078)** — 每日依赖 CVE 审计失败，可能存在新的高危漏洞或 npm audit 端点不可用，需尽快排查。

4. **[#12091](https://github.com/QwenLM/qwen-code/issues/12091)** — **P1**：删除活跃 session 会导致 transcript 被无头重建，session 永久损坏且自动继续被禁用，核心数据完整性问题。

5. **[#12952](https://github.com/QwenLM/qwen-code/issues/12952)** — Stage G：权威 Session 历史、writer fencing 与接管，是 #12380 落地的关键前置切片。

6. **[#13234](https://github.com/QwenLM/qwen-code/issues/13234)** — 运营商链路上 TLS 栈选择性重置：扩展 + Electron/BoringSSL 失败而 Node 24 (OpenSSL 3.5) 成功，含完整诊断与 workaround，大陆用户网络问题的重要参考。

7. **[#13184](https://github.com/QwenLM/qwen-code/issues/13184)** — Managed session 存储与面板投影只增不减，审计确认多层面“时间维度无界增长”，长时运行内存风险。

8. **[#13130](https://github.com/QwenLM/qwen-code/issues/13130)** — Desktop 端所有 workspace 突然变为不可信/只读且无恢复途径，直接影响可用性，等待补充信息。

9. **[#13249](https://github.com/QwenLM/qwen-code/issues/13249)** — **CI 隐患**：nightly CodeQL 连续 13 次被超时取消且无通知，取消/空跑显示为绿色，安全扫描已静默失效近两周。

10. **[#13252](https://github.com/QwenLM/qwen-code/issues/13252) / [#13208](https://github.com/QwenLM/qwen-code/issues/13208)** — 输出 Token 预算不感知上下文窗口：side query 可请求超过模型窗口的 max_tokens；主路径 clamp 的 4K 下限也可能突破用户配置的小窗口。

---

## 4. 重要 PR 进展

1. **[#13211](https://github.com/QwenLM/qwen-code/pull/13211)** — 默认开启本地进程持久化与可信重启恢复，扫清 #12380 H3（后台 Shell/Monitor）的最后前置。
2. **[#13210](https://github.com/QwenLM/qwen-code/pull/13210)** — Broker 认证与 broker 下发的 writer 凭证层，附中英双语设计文档。
3. **[#13241](https://github.com/QwenLM/qwen-code/pull/13241)** — 区分已接受的 Host 结果与终态 run，修复迟到结果丢失 token 用量问题（对应 #13238）。
4. **[#13033](https://github.com/QwenLM/qwen-code/pull/13033)** — Agent/Goal 协调工具默认按需发现，减少上下文占用（+1646 行，接近 review 范围熔断线）。
5. **[#13146](https://github.com/QwenLM/qwen-code/pull/13146)** — 新增 `/workspace/trust/grant` 路由，Web Shell 可无终端完成 workspace 信任（缓解 #13130 类问题）。
6. **[#12939](https://github.com/QwenLM/qwen-code/pull/12939)** — IMAP/SMTP Email 通道落地，可收发邮件驱动 agent 执行任务（已关闭，对应 #8281）。
7. **[#13179](https://github.com/QwenLM/qwen-code/pull/13179)** — 加固 commit 重试、worker 路径越界拦截、面板轮询三项健壮性修复。
8. **[#13250](https://github.com/QwenLM/qwen-code/pull/13250)** — 修复 QQ Bot 群组 session 隔离被强制 single scope 的回归。
9. **[#13173](https://github.com/QwenLM/qwen-code/pull/13173)** — 被动接管时先获取 Runtime Session 再取消，修复死 owner 的资源泄漏。
10. **[#13206](https://github.com/QwenLM/qwen-code/pull/13206)** — Web Shell 跳过损坏 SSE 帧并合并间隙重同步，解决面板冻结（#13184 第 6/7 项）。

---

## 5. 功能需求趋势

- **Managed Agent / 多 agent 架构**（绝对主线）：Session 持久化、writer fencing、broker 认证、Agent Host，#12380 系列占据大量 tracker。
- **Token/内存治理**：非会话上下文开销、输出预算窗口感知、有界内存增长、提取冷却策略。
- **多渠道接入**：Email (IMAP/SMTP)、QQ Bot、飞书集成持续推进。
- **Web Shell / Desktop 体验**：信任机制、快捷键（#13175）、自适应导航栏（#12943）。
- **CI/安全可观测性**：CVE 审计、CodeQL 静默失败、lint lane 空列表告警。

## 6. 开发者关注点

- **数据完整性**：session 删除竞态（#12091）、torn transcript 行（#13035）、迟到 Host 结果丢用量（#13238）——持久化层的一致性问题是高频痛点。
- **信任与凭证安全**：Desktop 全量 workspace 失信无法恢复（#13130）、Agent Host 401 后重注册遗留有效凭证（#13122）。
- **长时运行稳定性**：无界内存增长、worker 越界路径、SSE 帧损坏等多处需要防御性处理。
- **网络环境适配**：TLS 栈选择性 RST（#13234）反映特定网络环境下的连通性问题。
- **Review 流程负担**：多个大 PR（如 #13033 超 1500 行熔断线）被迫拆分 follow-up issue，社区在用“只修 Critical + 追踪 Suggestion”的模式收敛。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（Codewhale）社区动态日报 · 2026-10-03

## 一、今日速览

今日无新版本发布，但 v0.10.1 的准备工作正在进行中：PR #6815 集成 ChatGPT 官方登录、扩展能力与原生终端采用。社区侧最值得关注的信号是 **v0.10.0 版本的性能回退报告（#6728）和 MCP 工具失效问题（#6828）**，两者均处于 needs-triage 状态，可能影响升级用户。依赖层面 Dependabot 集中提交了 6 个依赖升级 PR。

## 二、版本发布

过去 24 小时无新 Release。（0.10.1 相关变更仍在 PR 阶段，见下文 #6815）

## 三、社区热点 Issues

仅 8 条 Issue 更新，以下为全部值得关注的条目：

1. **#6728 CPU 占用逐版本回退**（OPEN，needs-triage）— 用户在 FreeBSD 15.0 上分析三个版本二进制，报告 idle → moderate → heavy 的 CPU 占用恶化趋势，直接影响日常使用体验，尚待维护者分诊。[链接](https://github.com/Hmbown/Codewhale/issues/6728)

2. **#6828 v0.10.0 MCP 服务器工具不暴露**（OPEN）— 3 个已启用的 MCP server 在 TUI 与 `codewhale exec` 中均无 `mcp_*` 工具可被发现，`tool_search` 为空，模型完全无法调用 MCP 工具，属功能性阻断级问题。[链接](https://github.com/Hmbown/Codewhale/issues/6828)

3. **#6827 Windows npm 安装下杀 node.exe 导致无清理退出**（OPEN，bug）— Windows 下 `node.exe`（npm launcher）被终止会连带杀死 `codewhale.exe`，且 agent 自己发出的 "stop node" 命令可自杀会话，属于平台生命周期管理缺陷。[链接](https://github.com/Hmbown/Codewhale/issues/6827)

4. **#5316 EPIC-005: CodeWhale TUI Crate 拆分（伞形）**（OPEN，31 条评论）— 长线架构治理 Issue，最新更新确认 FEAT-026 已于 10 月 1 日合并至 upstream main，是本 Epic 的重要里程碑。[链接](https://github.com/Hmbown/Codewhale/issues/5316)

5. **#6818 将完整 Ratatui 组件浏览器加入官网**（OPEN）— 托管资格 CI 全绿（本地 661/661 测试通过），社区文档与组件展示能力持续完善。[链接](https://github.com/Hmbown/Codewhale/issues/6818)

6. **#6814 codewhale-ratatui 组件目录与 README 画廊**（已关闭）— 10 月 2 日完成 main-preview 保真度修正（PR #8 合并），CI/Gallery 工作流全部通过后关闭，文档建设闭环。[链接](https://github.com/Hmbown/Codewhale/issues/6814)

7. **#6816 迁移至官方开源 "Sign in with ChatGPT" 契约**（OPEN）— 本地 Engine/CLI/TUI 已实现 OpenAI 官方开源预览集成，与 #6815 发布线直接相关。[链接](https://github.com/Hmbown/Codewhale/issues/6816)

8. **#6328 Watches 与 Heartbeat 的计划任务列表 UI**（OPEN）— 为 agent 的定时任务提供命名、间隔、暂停/恢复的列表界面，当前阻塞于 Core cron 路由，是自动化方向的关键前置。[链接](https://github.com/Hmbown/Codewhale/issues/6328)

## 四、重要 PR 进展

1. **#6815 v0.10.1: ChatGPT 登录 + 扩展能力 + 原生终端采用** — 下一版本主 PR：TypeScript 工具/命令/hooks/prompts/skills 接入现有 Rust Engine，Rust 保留执行、权限、凭据、会话与事件权威。[链接](https://github.com/Hmbown/Codewhale/pull/6815)

2. **#6715 fix(auth): ChatGPT 与 xAI 账号选择、显示与切换** — 解决多账号场景下无法选择账号、不显示当前账号、配额耗尽报错不指明账号的痛点。[链接](https://github.com/Hmbown/Codewhale/pull/6715)

3. **#6817 feat(runtime-api): 从快照读取单次工具调用的变更** — 为客户端提供按次调用归因的文件变更读取能力（shell 命令写入此前无法归因），提升可观测性。[链接](https://github.com/Hmbown/Codewhale/pull/6817)

4. **#6820 RFC: 评估将 Python/JS 解释器工具合并入 Shell** — 架构级提案，建议移除重复的 `code_execution` 与 `js_execution` 入口，统一走 Shell，待维护者决策。[链接](https://github.com/Hmbown/Codewhale/pull/6820)

5. **#6819 fix(cli): 配置诊断对 HTTP(S) 协议大小写的误判** — `config doctor` 此前对大写/混合大小写协议前缀误判为非法地址，现通过 `to_ascii_lowercase()` 修复。[链接](https://github.com/Hmbown/Codewhale/pull/6819)

6. **#6821 build(deps): rmcp 3.4.0 → 3.5.0** — MCP Rust SDK 升级，可能与 #6828 的 MCP 工具暴露问题相关联，值得联动观察。[链接](https://github.com/Hmbown/Codewhale/pull/6821)

7. **#6822 build(deps): rio-vt 0.5.26 → 0.5.28** — 终端相关依赖升级。[链接](https://github.com/Hmbown/Codewhale/pull/6822)

8. **#6823 build(deps): thiserror 2.0.20 → 2.0.21** — 修复泛型 unit variant 解析问题。[链接](https://github.com/Hmbown/Codewhale/pull/6823)

9. **#6824 build(deps): encoding_rs 0.8.41 → 0.8.42** — 例行编码库升级。[链接](https://github.com/Hmbown/Codewhale/pull/6824)

10. **#6826 build(deps): uuid 1.26.0 → 1.26.1** — v7 计数器位序修复，对时序 ID 生成有实际意义。[链接](https://github.com/Hmbown/Codewhale/pull/6826)

（另有 #6825 rust-toolchain action 升级，属 CI 基建例行更新。）

## 五、功能需求趋势

- **多模型账号与认证**：ChatGPT 官方登录契约（#6816）、多账号选择/切换（#6715）、0.10.1 集成（#6815）构成当前最活跃的主线方向。
- **扩展生态（Extensibility）**：MCP 集成（#6828、#6821）与 TypeScript 扩展 harness（#6815）是生态建设重点，但 MCP 稳定性仍是短板。
- **TUI 组件与文档**：Ratatui 组件浏览器/目录/画廊（#6818、#6814）显示官方在开发者体验和官网展示上的持续投入。
- **Agent 自动化/调度**：watches、heartbeat 及计划任务 UI（#6328）指向后台自动化场景，但受限于 Core cron 路由。
- **架构精简**：解释器工具合并入 Shell 的 RFC（#6820）与 Crate 拆分 Epic（#5316）反映代码库治理诉求。

## 六、开发者关注点

1. **v0.10.0 质量回退**：CPU 占用回退（#6728）+ MCP 工具完全不可见（#6828）集中爆发且均未分诊，升级用户应谨慎，维护者响应速度是当前最大风险点。
2. **Windows 平台体验**：npm 安装路径下的进程生命周期管理粗糙（#6827），agent 自杀会话的问题影响可用性。
3. **可观测性缺口**：按调用归因的变更追踪长期缺失，#6817 是社区对此的直接回应。
4. **多账号凭据管理**：配额耗尽但不知道是哪个账号（#6715）是重度用户的实际痛点。
5. **依赖维护负担**：单日 6 个 Dependabot PR，依赖面较宽，提示需要关注升级节奏与 rmcp 升级对 MCP 行为的潜在影响。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-10-03

## 一、今日速览

今日无新版本发布，但社区修复活动密集：**安全漏洞 brace-expansion 已完成修复**（#10332），**TUI 渲染性能成为焦点话题**——多个高热度 Issue 聚焦长会话下的渲染性能问题，其中性能优化 PR #10383 已提交。同时 ChatGPT OAuth 相关问题持续发酵，llama.cpp 原生分类器支持等新功能 PR 正在推进中。

---

## 二、版本发布

过去 24 小时无新 Release。（当前版本为 0.99.2 / 1.0.0）

---

## 三、社区热点 Issues

### 1. Windows 使用体验调研（72 评论）🔥
**#7547 [OPEN]** — 作者 @petrroll
Windows 用户众多但运行 Pi 的方式过于分散，官方发起调研以决定 bug 修复、文档和开箱体验的投入方向。72 条评论使其成为近期最活跃的讨论帖。
🔗 [Issue #7547](https://github.com/earendil-works/pi/issues/7547)

### 2. macOS 长会话 CPU 占用过高的根因排查
**#7730 [OPEN]** — 作者 @gterzian（👍 10）
CPU 占用在 50-110% 之间波动、内存 600-800MB，疑似与上下文大小/会话长度相关。10 个 👍 表明影响面广。
🔗 [Issue #7730](https://github.com/earendil-works/pi/issues/7730)

### 3. ChatGPT OAuth ID token 未持久化
**#10300 [OPEN]** — 作者 @hyird
0.99.2 中 OAuth 凭据转换函数丢弃 ID token，导致扩展无法获取账户身份。13 条评论，与已关闭的 #10258（OAuth 400 错误）共同构成 OAuth 登录链路的信任危机。
🔗 [Issue #10300](https://github.com/earendil-works/pi/issues/10300)

### 4. 长转录下 TUI 全屏重绘风暴
**#9255 [OPEN]** — 作者 @vicmuchina
流式输出高度超过视口后，几乎每帧都触发全量重绘，导致长转录界面跳动和文字重叠。与 #9807（800+ 消息下滚动/输入卡顿）同属渲染性能问题簇。
🔗 [Issue #9255](https://github.com/earendil-works/pi/issues/9255)

### 5. 大会话 TUI 性能劣化（增量渲染诉求）
**#9807 [OPEN]** — 作者 @hernanharco
814 条消息、1.7MB JSONL 的会话中滚动和输入明显卡顿，社区呼吁借鉴 OpenCode OpenTUI 的 cell 级增量 diff。
🔗 [Issue #9807](https://github.com/earendil-works/pi/issues/9807)

### 6. mintty/ConPTY 下终端颜色查询回显泄露
**#10256 [OPEN]** — 作者 @dawidkc
0.99.x 在 mintty 启动时直接打开外部编辑器，颜色查询应答串泄露进提示符。Windows 兼容性又一案例。
🔗 [Issue #10256](https://github.com/earendil-works/pi/issues/10256)

### 7. 过多输入图片中断 agent 任务
**#10162 [OPEN]** — 作者 @S1M0N38
Pi 的长时运行能力（如 PR 看护、QA 测试）是核心优势，但多图输入会中断任务，与 auto compaction 的配合存在缺口。
🔗 [Issue #10162](https://github.com/earendil-works/pi/issues/10162)

### 8. 网络错误后上下文用量估算暴涨
**#10287 [OPEN]** — 作者 @WodenJay
一次可重试网络错误后 `getContextUsage()` 从 42k 跳到 330k tokens，可能误触发不必要的 compaction。
🔗 [Issue #10287](https://github.com/earendil-works/pi/issues/10287)

### 9. 切换到 Codex 模型时 custom-tool ID 格式错误
**#10257 [OPEN]** — 作者 @redreceipt
Muse → GPT-6.1 Sol 中途切换失败，`fc_` 前缀 ID 无法被 Codex 接受（要求 `ctc_` 前缀），阻断跨模型续聊。
🔗 [Issue #10257](https://github.com/earendil-works/pi/issues/10257)

### 10. 全屏模式 Home/End 键位默认行为争议
**#10314 [OPEN]** — 作者 @SorinGFS
Home/End 从行内光标移动变为整页滚动，社区讨论应保留旧行为还是接受新默认。
🔗 [Issue #10314](https://github.com/earendil-works/pi/issues/10314)

---

## 四、重要 PR 进展

### 1. TUI 渲染性能优化：保留指针相等性
**#10383 [CLOSED]** — @ReStranger
`doRender` 此前对每行做规范化导致指针比较退化为全量字符串比较；本 PR 让未变更行保持指针相等，渲染成本不再线性于转录长度。直接回应 #9255/#9807。
🔗 [PR #10383](https://github.com/earendil-works/pi/pull/10383)

### 2. 安全修复：brace-expansion 升级至 5.0.12
**#10332 [CLOSED]** — @cv
修复 #10288 报告的三个 GHSA 安全通告（两个高危），shrinkwrap 此前强制锁定了带漏洞的 5.0.9 版本。
🔗 [PR #10332](https://github.com/earendil-works/pi/pull/10332)

### 3. llama.cpp 分类器模型原生支持
**#10382 [OPEN]** — @mitsuhiko
通过 `/v1/systemone` 探测已加载的 llama.cpp 模型，将决策模型注册为 typesafe-system-one 分类器。
🔗 [PR #10382](https://github.com/earendil-works/pi/pull/10382)

### 4. Bedrock 自适应 thinking 块不匹配修复
**#10328 [CLOSED]** — @jsanter27
发送 `block_binding` 让前缀不匹配的 thinking 块被丢弃而非 400 报错，解决系统提示/工具变更后的回放失败。
🔗 [PR #10328](https://github.com/earendil-works/pi/pull/10328)

### 5. Bedrock OpenAI 模型长上下文定价分层
**#10329 [CLOSED]** — @jsanter27
补上 `cost.tiers`：超过 272k 输入 token 后按 2x 输入/缓存、1.5x 输出计费，修正成本估算。
🔗 [PR #10329](https://github.com/earendil-works/pi/pull/10329)

### 6. 隐藏工具的提示词指引清理
**#10368 [CLOSED]** — @eatmoreduck
修复隐藏 `bash` 等工具后 `<rules>` 和 skills 提示仍输出对应指引的问题，消除模型对不可见工具的幻觉调用。
🔗 [PR #10368](https://github.com/earendil-works/pi/pull/10368)

### 7. 多行语法高亮修复（双 PR 并行）
**#10361 [CLOSED]** @zhangqian-silk / **#10356 [OPEN]** @rwachtler
修复 TUI 拆行后续行丢失 ANSI 样式的问题，同时改进字符串插值的配色可读性。
🔗 [PR #10361](https://github.com/earendil-works/pi/pull/10361) | [PR #10356](https://github.com/earendil-works/pi/pull/10356)

### 8. Cloudflare Clef 分类器接入
**#10316 [CLOSED]** — @ndisidore
新增 `@cf/cloudflare/clef`（27B）和 `clef-flash`（9B）决策模型，与 Jev API 兼容，对应 Issue #10321。
🔗 [PR #10316](https://github.com/earendil-works/pi/pull/10316)

### 9. WebP EXIF 超长 chunk 死循环修复
**#10346 [CLOSED]** — @wswsadadbaba123
RIFF chunk 大小被按有符号数解析（`0xfffffff8` → `-8`）导致同步解析器死循环；改为无符号并拒绝越界负载。
🔗 [PR #10346](https://github.com/earendil-works/pi/pull/10346)

### 10. Azure Foundry Chat Completions 部署支持
**#9714 [OPEN]** — @jsanter27
扩展 Azure provider 支持 Chat Completions API，让 DeepSeek V4 Pro 等 Foundry 部署可用。
🔗 [PR #9714](https://github.com/earendil-works/pi/pull/9714)

**其他值得注意**：C++ 骨干工程的 Bazel 基础设施已落地（[#10372](https://github.com/earendil-works/pi/pull/10372)）；Nix flake（#9137）已关闭。

---

## 五、功能需求趋势

1. **TUI 渲染性能**：最高强度诉求。长会话下的重绘风暴、滚动/输入延迟集中爆发（#9255、#9807、#7730），社区明确呼吁增量渲染架构。
2. **Windows 一等公民支持**：官方主动调研（#7547），叠加 mintty/ConPTY 兼容性问题（#10256），Windows 体验是当前战略重点。
3. **分类器/决策模型生态**：Cloudflare Clef（#10321/#10316）、llama.cpp 原生分类（#10382）接连落地，显示 typesafe 分类器路由是活跃投资方向。
4. **多云 Provider 覆盖**：Azure Foundry、Bedrock 定价分层、Together 模型 ID 修正（#10336），多云适配持续完善。
5. **长时自治 Agent**：图片输入中断任务（#10162）、compaction 与提示队列交错（#8301）等，围绕“无人值守运行”的可靠性需求明显。

---

## 六、开发者关注点

- **OAuth/凭据链路脆弱**：ChatGPT 登录的 ID token 丢失（#10300）、400 错误（#10258）、以及 `before_agent_start` 提示被丢弃导致的重复计费（#10267），登录与提示注入链路需系统性加固。
- **上下文用量估算不准**：网络错误后估算暴涨 8 倍（#10287）、系统提示变更后 `max_tokens` 超限（#10307）——上下文账本的一致性是高频痛点。
- **扩展 API 的副作用管理**：扩展 `console.error` 直接破坏 TUI 布局（#10002），扩展与宿主的输出隔离有待规范。
- **跨模型切换兼容性**：`fc_` vs `ctc_` ID 格式差异（#10257）、Anthropic 适配器丢失 `anyOf` 等 Schema 关键字（#9557），多 Provider 语义对齐仍是长尾工作。
- **终端碎片化兼容**：Termux 无 bracketed paste（#7321）、mintty 颜色查询泄露（#10256）、GNOME/KDE 选择复制行为变化（#10341），终端兼容性测试矩阵亟需扩充。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# 📰 oh-my-pi 社区动态日报 · 2026-10-03

---

## 一、今日速览

oh-my-pi 今日发布 **v18.5.0 / v18.4.12 / v18.4.11** 三个版本，修复了 Windows AWS 凭证路径处理、工具调用 JSON 宽松校验等关键问题。社区围绕 **OpenRouter tool-call 重放导致 400 循环**（#14155）、**strict-mode yield 空值校验冲突**（#14156）两个新 bug 展开热烈讨论，并已有对应修复 PR 火速提交（#14157 / #14159）。TUI 体验优化（布局、启动诊断、命令面板）仍是 PR 主力方向。

---

## 二、版本发布

### v18.5.0
- **@oh-my-pi/pi-ai**：修复 Windows 上 AWS `credential_process` 未加引号路径（如 `C:\Users\me\helper.exe`）反斜杠被剥离的问题，现按 Windows 命令行规则拆分命令，与 AWS CLI 行为一致
- **@oh-my-pi/pi-catalog**：新增 `closeModelCache()`

### v18.4.12
- **@oh-my-pi/pi-ai**：新增 `createAuthGatewayRouter`（无 HTTP 监听的路由集合）和 `serveAuthGatewayStdio`（以 JSON lines 协议 `{"id","path","body"}` ↔ `{"id","status","body"}` 供父进程调用）

### v18.4.11
- **@oh-my-pi/pi-agent-core**：修复 `yield` 等工具的宽松参数校验——畸形 tool-call JSON 现在会报告给模型，而不是让工具以空参数运行
- **@oh-my-pi/pi-ai**：修复 Cursor 缓存 prompt token 计数

---

## 三、社区热点 Issues

1. **#14155 [p1]** OpenRouter + Claude：模型流式输出非法 JSON 的 tool call 被“修复”后丢弃但保留输出 → 孤儿 note 触发 400 死循环，约 1/7 概率复现于 eval 套件。高优先级生产阻断问题。
   🔗 https://github.com/can1357/oh-my-pi/issues/14155

2. **#14156 [p2]** strict-mode schema 强制嵌套可选字段为 `null`，而 yield 校验器又拒绝 `null`（JTD nullable 被丢弃）→ 子代理无法正常结束。当天提交当天已见修复 PR #14159。
   🔗 https://github.com/can1357/oh-my-pi/issues/14156

3. **#14142 [p2]** unexpected-stop-retry 与自身活跃 continue 合并冲突，第二次 thinking-only stop 后会话静默闲置——与 wontfix 的 #14137 同属“agent 循环无法从空内容 stop 恢复”家族。
   🔗 https://github.com/can1357/oh-my-pi/issues/14142

4. **#14135 [p2]** Anthropic OAuth 回调端口硬编码 54545，多 devcontainer 并行时端口冲突导致登录失败。容器化开发环境的典型痛点。
   🔗 https://github.com/can1357/oh-my-pi/issues/14135

5. **#11477 [p2]** 模型选择器整体重写 profile `config.yml`：YAML 注释、引号、`:thinkingLevel` 后缀全部丢失。运行时配置管理与用户手写配置文件的兼容性问题，6 条评论持续发酵。
   🔗 https://github.com/can1357/oh-my-pi/issues/11477

6. **#8802 [p2]** Z.AI Coding Plan 登录丢弃官方 ZCode JWT、改用 PAYG 密钥，随后 1113 错误等待 30 分钟。长期未决的 provider 认证问题（8月至今，10 条评论）。
   🔗 https://github.com/can1357/oh-my-pi/issues/8802

7. **#4570** 每个急切子代理的 system prompt 携带完整 skills 块 + 用户 AGENTS.md（约 27KB 非任务内容），要求按角色做上下文过滤。Token 成本优化的代表性诉求。
   🔗 https://github.com/can1357/oh-my-pi/issues/4570

8. **#12319** 单轮 agent 运行 2 小时+只显示 "Working…"，无输出、输入被静默吞掉。可观测性与用户信任问题。
   🔗 https://github.com/can1357/oh-my-pi/issues/12319

9. **#11600**（👍 7）请求移植 Pi 0.84 的 `tuiMode: fullscreen`——编辑器和 footer 固定底部、transcript 上方滚动。TUI 体验最热门需求之一。
   🔗 https://github.com/can1357/oh-my-pi/issues/11600

10. **#14065 [p1, 已关闭]** Windows 多行粘贴泄漏 win32-input-mode Enter 记录到 prompt（11 条评论）。当日即被关闭，响应迅速。
    🔗 https://github.com/can1357/oh-my-pi/issues/14065

---

## 四、重要 PR 进展

1. **#13705 [review:p0]** Codex 原生 turn lane 拒绝 steering（`unsupported_na...`）时退避并重试整轮，修复 GPT-6 Astra 流式中发消息导致整轮崩溃。
   🔗 https://github.com/can1357/oh-my-pi/pull/13705

2. **#14157** 重放 lenient-repaired 的 tool-call 参数，直接修复 Issue #14155 的 400 循环。
   🔗 https://github.com/can1357/oh-my-pi/pull/14157

3. **#14159** 归一化 strict yield 可选字段 null，修复 Issue #14156。
   🔗 https://github.com/can1357/oh-my-pi/pull/14159

4. **#14133 [review:p1]** 本地拒绝未知斜杠命令，防止其作为普通消息提交给模型；无参内置命令对多余参数显示 usage。
   🔗 https://github.com/can1357/oh-my-pi/pull/14133

5. **#10530 [review:p2]** 新增 `display.layout` 设置（`omp` | `opencode`），提供 OpenCode 风格扁平 transcript，工具调用折叠为单行状态。
   🔗 https://github.com/can1357/oh-my-pi/pull/10530

6. **#11269 [review:p2]** 恢复的 Responses 会话可选开启原生历史 warm replay，首个请求即重建含 thinking 块的历史。
   🔗 https://github.com/can1357/oh-my-pi/pull/11269

7. **#13620 [review:p3]** 为扩展提供跨复用器（tmux/Zellij/Herdr/CMUX）的类型化终端启动 API，统一 pane/tab 放置。
   🔗 https://github.com/can1357/oh-my-pi/pull/13620

8. **#12103** 按模型的角色自动路由与自定义 preset——切换默认模型时自动匹配合适的小模型角色。
   🔗 https://github.com/can1357/oh-my-pi/pull/12103

9. **#14153** RPC `get_state` 暴露 Claude slow-mode 结构化状态（wrap-up/低优先级阶段、重置时间、剩余额度）。
   🔗 https://github.com/can1357/oh-my-pi/pull/14153

10. **#12565 [已关闭]** `/review` 使用实时 cwd 而非启动 cwd，修复 worktree 切换后审查错误目录。
    🔗 https://github.com/can1357/oh-my-pi/pull/12565

---

## 五、功能需求趋势

- **TUI 布局与交互重构**（最热）：fullscreen 底部停靠（#11600）、独立滚动区域（#1155）、opencode 风格布局（PR #10530）
- **Token / 上下文成本优化**：子代理按角色过滤上下文（#4570）、skill 描述压缩 opt-out（PR #13385）、experimental compaction 改进（#13963）
- **Provider 兼容与认证健壮性**：Z.AI（#8802）、Anthropic OAuth 端口（#14135）、OpenRouter 重放（#14155）、ClinePass reasoning ladder（PR #14132）
- **可配置性诉求**：xd:// 设备超时（#10917）、自定义 preset（PR #12103）、commands.hidden（PR #14152）、scratchDir（PR #14150）
- **会话互操作**：导入 Pi / OpenCode 会话（#9267）
- **SDK / headless 集成**：RPC 状态暴露（PR #14153）、auth-gateway stdio 服务（v18.4.12）

---

## 六、开发者关注点

1. **Agent 循环的静默失败**是最大痛点：空内容 `stop`、thinking-only 停止、超时后无恢复（#14137、#14142、#12319）——用户要求“length 路径有恢复阶梯，stop 也不应无声死亡”
2. **配置文件被程序重写破坏**（#11477）反映了对用户手写 YAML 的尊重缺失，注释/格式保留是普遍期望
3. **生产环境稳定性**：strict schema 与宽松修复的冲突（#14156/#14155）表明 eval/headless 场景下对确定性输出要求很高
4. **Windows 平台细节问题**持续存在（粘贴、credential_process、stdout 分类 PR #13764），Windows 一等公民支持仍需投入
5. **可观测性不足**：长任务无进度反馈、工具输出不可见，开发者需要更好的运行时透明度

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*