# AI CLI 工具社区动态日报 2026-09-09

> 生成时间: 2026-09-09 03:43 UTC | 覆盖工具: 11 个

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

# AI CLI 工具生态横向对比分析报告 · 2026-09-09

---

## 一、生态全景

AI CLI 工具已从单一编码助手演进为覆盖桌面端、沙箱安全、多代理协作、语音交互的完整 Agent 平台，头部产品（Claude Code、Codex、Gemini CLI）进入高频迭代与回归修复并行的“成熟期阵痛”阶段。Windows 平台兼容性成为全行业共同的薄弱环节，至少 4 款工具当日出现 Windows 相关的高优先级问题。同时，AGENTS.md 开放标准、MCP 生态、provider 多云接入与 token 成本可观测性正在成为跨产品的竞争焦点。开源阵营（OpenCode、Qwen Code、Pi、oh-my-pi）则通过 daemon/API 化和自定义 provider 支持抢占集成生态位。

---

## 二、各工具活跃度对比

| 工具 | 热点 Issues | PR 动态 | Release | 今日焦点 |
|---|---|---|---|---|
| Claude Code | 10+（含 5126👍 巨型 issue 关闭） | 1 条更新 | v2.1.266（紧急修复网关回归） | AGENTS.md 请求关闭、Windows Plan9 挂载失败 |
| OpenAI Codex | 10+，Windows 类过半 | 20+ 合并 | 2 个 alpha（0.154.0-alpha.7/8） | WSL 项目创建阻断、语音功能打包、app-server 稳定性 |
| Gemini CLI | 10+，P1 密集 | 12+ 更新 | 3 个版本（0.59/0.60-preview/0.61-nightly） | Subagent 挂起/假成功、安全沙箱大改造 |
| Copilot CLI | 10（会话管理集中爆发） | 3 条 | v1.0.84-2/3 | Vim 模式全量发布、Windows 会话创建阻塞 |
| OpenCode | 10 | 10 | v1.18.30 | SQLite 无限膨胀至 13GB+、tok/s 显示 |
| Qwen Code | 10 | 10+ | v0.23.2-preview + SDK×2 | Windows ConPTY 泄漏、daemon 集成生态 |
| oh-my-pi | 10 | 7+（含 24 部分 PR 栈） | v18.1.15 | AI inference fabric 重构、DeepSeek 兼容性 |
| Pi | 10（66 条 issue 更新） | 10（16 条更新） | 无 | OpenCode session header 兼容危机、compaction 修复 |
| DeepSeek TUI | 9 | 3 | 无（0.9.13 酾酿中） | 成本可观测性、goal 独立验证 |
| Kimi CLI / DeepSeek Harness | 0 | 1 / 0 | 无 / dsh-v0.1.5-alpha.1 | 静默期；KV Cache 友好提示词修改 |

**活跃度梯队**：Codex（工程自动化最强）≈ Gemini CLI ≈ Claude Code > OpenCode / Qwen Code / oh-my-pi > Pi / Copilot CLI > DeepSeek TUI > Kimi / DeepSeek Harness（观望期）。

---

## 三、共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **长会话/上下文管理** | Claude Code、Codex、Gemini CLI、Copilot CLI、oh-my-pi、Pi、DeepSeek Harness | compaction 丢目标（Codex #32922）、压缩摘要冗长（OpenCode PR #48058）、会话损坏（Pi #8667）、KV Cache 友好提示词修改（DSH）——是全行业第一痛点 |
| **Windows 平台稳定性** | Claude Code、Codex、Qwen Code、Copilot CLI | Plan9 挂载失败、WSL 项目创建阻断、ConPTY 泄漏、桌面会话创建受限 |
| **Token/成本可观测性** | OpenCode、DeepSeek TUI、oh-my-pi、Pi | tok/s 实时显示（#6096 73👍）、cost: unknown、provider 计费优先于估算（Pi PR #6881） |
| **多 provider / 多云接入** | Codex、OpenCode、oh-my-pi、Pi、DeepSeek TUI | Bedrock 凭证（Codex PR #44028、Pi #5363）、OpenRouter vendor 选择、自定义 `[[models]]` 段 |
| **配置“写了不生效”** | Claude Code、Gemini CLI、Qwen Code、oh-my-pi | 符号链接规则不加载、settings 覆盖失效、deny 规则误伤、模型 ID 静默重映射 |
| **Agent 可靠性与失败可观测** | Gemini CLI、DeepSeek TUI、oh-my-pi、Codex | Subagent 假成功（#22323 P1）、goal 独立验证、wake-turn 静默失败 |
| **开放标准 / 集成 API** | Claude Code（AGENTS.md #6235, 5126👍）、Qwen Code（daemon/Web Shell）、OpenCode（V2 API） | 跨工具配置统一与 Agent 后端化 |

---

## 四、差异化定位分析

- **Claude Code**：插件生态与 Function Hooks（#91870）为核心演进方向，桌面端（Cowork/Desktop）快速扩张但回归频发；企业代理/网关部署用户是重要客群（本次紧急版本即为修复该类回归）。
- **OpenAI Codex**：工程自动化程度最高（bot 驱动高频小 PR），向“全平台 Agent 应用”演进——语音、宠物、Computer Use 进入打磨期；同时通过 Bedrock 支持拓展企业多云。
- **Gemini CLI**：唯一将安全/沙箱作为第一优先级的工具（OS 级沙箱、MCP OAuth RFC 9207、Auto Memory 脱敏）；Subagent 架构是技术押注点，但稳定性尚未兑现。
- **Copilot CLI**：深植 GitHub/VS Code 生态，重视开发者文化（Vim 模式），但会话管理是明显短板，迭代重心似已内移。
- **OpenCode / Qwen Code**：开放集成路线——provider 中立、daemon/API 化、白标分发（Qwen Web Shell 品牌化），目标是被第三方团队作为 Agent 后端嵌入。
- **Pi / oh-my-pi**：极客/订阅套利型用户群，押注多 provider 网关、prompt cache 优化与多代理协调（oh-my-pi 的 inference fabric 是当日最大架构级投入）。
- **DeepSeek 系（TUI/Harness）+ Kimi**：围绕国产模型的成本优势，聚焦 KV Cache 效率与轻量体验，社区规模小但方向聚焦。

---

## 五、社区热度与成熟度

- **社区热度最高**：Claude Code（#6235 获 5126👍，议题容量和情绪强度均领先）；Codex 紧随其后（单 issue 43 评论级讨论常态化）。
- **快速迭代阶段**：Codex（24h 内 20+ 合并、2 个 alpha）、Gemini CLI（3 版本并发通道）、Qwen Code（preview + nightly + SDK 并行）。
- **稳定修复期**：Claude Code（回归驱动的紧急发版）、Copilot CLI（PR 活动骤降，或转内部分支）。
- **观望/低活跃**：Kimi CLI、DeepSeek Harness（无 issue 更新），DeepSeek TUI 处于发布前静默。
- **成熟度信号**：越成熟的工具，反馈越集中在“回归”与“数据丢失/会话可靠性”而非基础功能缺失——Claude Code、Codex、Copilot CLI 均已越过功能可用线。

---

## 六、值得关注的趋势信号

1. **AGENTS.md 标准化窗口临近**：Claude Code 关闭 5126👍 的 #6235，配合 Codex/Amp/Cursor 已跟进，代理配置文件统一标准可能近期落地，跨工具迁移成本将显著下降。
2. **“配置信任危机”是产品护城河的分水岭**：至少 4 款工具出现“规则写了但被静默忽略”，谁能率先提供配置生效的确定性验证（如 lint/dry-run），谁就能赢得企业用户。
3. **Agent 后端化（headless/daemon）是下一战场**：Qwen `qwen serve`、OpenCode V2 API、Pi SDK 用户增多，CLI 正在从终端工具演变为可编程的 Agent 基础设施。
4. **成本可观测性从加分项变刚需**：tok/s、缓存命中、按工具计账的需求在 4+ 社区同时爆发，配合 provider 计费数据直采（Pi PR #6881），成本透明将成为采购决策要素。
5. **Windows 是全行业债务**：升级 Windows 补丁/桌面端版本前，建议生产环境统一灰度验证；团队应在 CI 中加入 Windows 专项测试矩阵。
6. **“模型自我报告不可信”催生验证层**：goal gates（DeepSeek TUI #6013）、Subagent 假成功修复（Gemini #22323）指向同一结论——长时自治任务需要独立的执行验证机制，而非依赖模型自述。

**给开发者的行动建议**：网关/代理用户立即升级 Claude Code v2.1.266；Windows 用户暂缓系统更新（KB5124008）与 Copilot 桌面端 1.1.15；长会话用户加强本地会话备份；关注 AGENTS.md 与 daemon 化进展以规划工具锁定风险。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-09-09）

## 一、热门 Skills 排行（按社区关注度）

| # | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | **skill-creator 评估链修复** [#1298](https://github.com/anthropics/skills/pull/1298) | 修复 `run_eval.py` 恒报 0% recall 的缺陷，使 Skill 描述优化循环不再"对噪声优化" | 关联 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论、10+ 独立复现），社区最痛的可复现性 bug | OPEN |
| 2 | **document-typography** [#514](https://github.com/anthropics/skills/pull/514) | AI 生成文档的排版质控：孤行、寡段、编号错位 | 直击 Claude 文档生成的普遍痛点，社区共鸣强 | OPEN |
| 3 | **ODT 文档 Skill** [#486](https://github.com/anthropics/skills/pull/486) | OpenDocument (.odt/.ods) 创建、模板填充与 HTML 转换 | 补齐开源/ISO 标准格式空白，LibreOffice 用户刚需 | OPEN |
| 4 | **Hivemind 多智能体编排** [#1628](https://github.com/anthropics/skills/pull/1628) | Claude Code 作为 planner/reviewer，将机械任务委派给免费模型的 headless opencode workers | "贵的模型上下文才是稀缺资源"——成本优化新范式，讨论度高 | OPEN |
| 5 | **skill-quality / security-analyzer** [#83](https://github.com/anthropics/skills/pull/83) | 元技能：五维度评估 Skill 质量 + 安全审计 | 与 Issue #492 安全信任问题呼应，元层治理受关注 | OPEN |
| 6 | **frontend-design 改进** [#210](https://github.com/anthropics/skills/pull/210) | 提升前端设计 Skill 的清晰度与可执行性 | 早期高热 PR，引导 Skill 写作最佳实践 | OPEN |
| 7 | **testing-patterns** [#723](https://github.com/anthropics/skills/pull/723) | 全栈测试哲学与模式（Testing Trophy、AAA、React Testing Library） | 工程实践类需求旺盛 | OPEN |
| 8 | **scnet-hpc** [#1615](https://github.com/anthropics/skills/pull/1615) | 中国超算 SCNet 集群 SSH + Slurm 作业操作 | 垂直领域（HPC）Skill 代表 | OPEN |

**质量修复类高频贡献者**：@Lubrsy706 的系列修复值得关注——PDF 大小写引用修复 [#538](https://github.com/anthropics/skills/pull/538)、DOCX 书签 ID 冲突致文档损坏 [#541](https://github.com/anthropics/skills/pull/541)、YAML frontmatter 校验 [#539](https://github.com/anthropics/skills/pull/539)。

## 二、社区需求趋势（来自 Issues）

1. **安全与信任边界**（最热）：社区 Skill 冒用 `anthropic/` 命名空间构成信任滥用 [#492](https://github.com/anthropics/skills/issues/492)（43 评论）——签名/命名空间隔离是第一诉求。
2. **企业级分发能力**：组织内共享 Skill、共享库/直链分发 [#228](https://github.com/anthropics/skills/issues/228)（16 评论）。
3. **评估与质量工具链**：skill-creator 的 `run_eval.py` 在 Windows / 触发检测上全线失效 [#556](https://github.com/anthropics/skills/issues/556)；mcp-builder 评估脚本对真实 MCP 服务器恒得 0 分 [#1390](https://github.com/anthropics/skills/issues/1390)。
4. **上下文效率**：`claude-api` Skill 一次注入 ~156k token 打爆上下文 [#1487](https://github.com/anthropics/skills/issues/1487)；compact-memory 紧凑符号化记忆提案 [#1329](https://github.com/anthropics/skills/issues/1329)。
5. **AI 自我治理与审计**：agent-governance 提案 [#412](https://github.com/anthropics/skills/issues/412)、Reasoning Quality Gate 流水线 [#1385](https://github.com/anthropics/skills/issues/1385)。
6. **互操作诉求**：Skills 与 MCP 融合（Skill 暴露为 MCP）[#16](https://github.com/anthropics/skills/issues/16)、AWS Bedrock 支持 [#29](https://github.com/anthropics/skills/issues/29)。

## 三、高潜力待合并 Skills（活跃且 OPEN）

- **#1298 skill-creator eval 修复**——解决 10+ 复现的核心 bug，合并价值最高
- **#541 / #538 DOCX & PDF 修复**——修复真实文档损坏，风险低、易合入
- **#1724 mcp-builder 模型更新至 claude-sonnet-5**——陈旧模型 ID 清理 [#1724](https://github.com/anthropics/skills/pull/1724)
- **#1607 claude-api 退役模型标记** [#1607](https://github.com/anthropics/skills/pull/1607)（关联已确认的 #1603）
- **#1602 跨技能评估/序列化/编码修复合集** [#1602](https://github.com/anthropics/skills/pull/1602)
- **#514 document-typography**——需求普适，社区反馈积极
- **#1367 self-audit 质量门禁** [#1367](https://github.com/anthropics/skills/pull/1367)——与治理类议题趋势契合

## 四、生态洞察（一句话）

> 社区最集中的诉求已从"新增 Skill"转向 **Skill 生态的可信与可靠**——即安全命名空间隔离、组织级分发、以及能真实工作的评估/质量工具链。

---

# Claude Code 社区动态日报 · 2026-09-09

---

## 一、今日速览

今日发布两个新版本：v2.1.266 紧急修复了 v2.1.265 中影响 LLM 网关/代理用户的回归问题。社区方面，AGENTS.md 支持请求（#6235）正式关闭引发关注，Function Hooks 提案（#91870）讨论热度持续上升。此外，Windows Cowork 的 Plan9 挂载问题出现多个新报告，值得 Windows 用户警惕。

---

## 二、版本发布

### v2.1.266
- 修复 v2.1.265 引入的回归：未文档化的 `CLAUDE_CODE_USE_GATEWAY` 环境变量此前仅在 `ANTHROPIC_BASE_URL` 和 `ANTHROPIC_AUTH_TOKEN` 同时设置时生效，但在 2.1.265 中会单独强制走 Cloud-gateway 登录，破坏了自建网关/代理用户的配置。**使用代理部署的用户建议尽快升级。**

### v2.1.265
- 遥测增加 `user.email` 和 `user.groups`（Claude Desktop / Cowork 通过 Claude apps gateway 上报），与终端会话对齐。
- `--plugin-dir` 支持指向插件文件夹：每个含 manifest 的子文件夹都会加载，且支持运行时增删。

---

## 三、社区热点 Issues（Top 10）

1. **[#6235](https://github.com/anthropics/claude-code/issues/6235) · Support AGENTS.md · 已关闭**
   社区最高呼声的功能请求（5126 👍 / 391 评论）。Codex、Amp、Cursor 等均在标准化 AGENTS.md，而 CLAUDE.md 过于绑定 Claude Code，不利跨工具协作。今日关闭，或有官方动作跟进。

2. **[#91870](https://github.com/anthropics/claude-code/issues/91870) · Function Hooks 提案 · 148 评论 / 88 👍**
   @poteat 提出通过副作用追踪 + Express/Koa 式 `next` 续延模型，让插件能深度且安全地修改 Claude Code 行为。社区讨论热烈，是插件生态的关键演进方向。

3. **[#65961](https://github.com/anthropics/claude-code/issues/65961) · 模型默认输出冗长注释、无视停止指令 · 203 👍**
   长期高赞问题，反映模型层（而非工具层）行为不受规则约束的痛点，今日仍有活跃讨论。

4. **[#89467](https://github.com/anthropics/claude-code/issues/89467) · Windows 桌面端窗口置顶无法关闭 · 22 评论**
   无任何设置/快捷键可关闭 always-on-top，严重影响 Windows 桌面用户日常工作流。

5. **[#92825](https://github.com/anthropics/claude-code/issues/92825) · 桌面端会话记录静默丢失（data-loss）**
   `cliSessionId` 被置空且无本地恢复路径，为 #79044 的后续报告。数据丢失类问题官方通常高优处理。

6. **[#76694](https://github.com/anthropics/claude-code/issues/76694) · Cowork 丢失 "Choose a folder"，Chat/Cowork 合并回归**
   合并后上下文菜单退化为 Chat 式仅上传知识库，无法选择本地项目文件夹，16 条讨论。

7. **[#92452](https://github.com/anthropics/claude-code/issues/92452) · Dispatch `start_code_task` 无法在同一非 git 目录开第二个会话**
   2.1.258 引入的回归（自 2.1.247 起），阻碍多会话并行工作流。

8. **[#92966](https://github.com/anthropics/claude-code/issues/92966) · 内置 GrowthBook clientKey 返回 400，Remote Control 失效**
   旧问题 #64151 被 stale-bot 关闭后至今未修，2.1.266 仍复现。

9. **[#92601](https://github.com/anthropics/claude-code/issues/92601) · security-guidance 官方插件 hook ENOENT 无限重试**
   会话被 "Idle." 通知刷屏，官方插件质量问题引发关注。

10. **[#92984](https://github.com/anthropics/claude-code/issues/92984) / [#92985](https://github.com/anthropics/claude-code/issues/92985) · Windows Cowork Plan9 挂载全面失败**
    Windows 更新 KB5124008 后所有 Plan9 共享报 "invalid argument"，卸载补丁可恢复；另有 guest 挂载失败变体。**Windows Cowork 用户暂缓系统更新。**

---

## 四、重要 PR 进展

过去 24 小时仅 1 条 PR 更新，无新 PR 合入：

- **[#63686](https://github.com/anthropics/claude-code/pull/63686) · stale/autoclose 超时从 14 天延长至 90 天 · 已关闭**
  社区成员提交，旨在缓解 issue 被过早自动关闭的问题（如 #92966 中提到的 stale-bot 误关）。该 PR 被关闭但反映出社区对 issue 生命周期机制的不满。

---

## 五、功能需求趋势

| 方向 | 代表 Issue | 说明 |
|---|---|---|
| **插件/扩展能力** | #91870、#69267 | Function Hooks、skills effort frontmatter 生效——社区希望更深、更可靠的扩展点 |
| **开放标准兼容** | #6235 | AGENTS.md 统一代理配置文件，跨工具协作刚需 |
| **多账号/团队协作** | #92517 | 用量池化 + 会话上下文共享，小团队共享代码库场景 |
| **桌面端体验** | #92988、#92620 | Desktop Code tab 缺消息排队、VS Code 无法删除会话等 CLI 功能缺口 |
| **可观测性/降噪** | #91356、#91614 | 关闭更新通知但保留自动更新、hook 输出截断无提示 |
| **工作流约定** | #85998 | 自动分支命名遵循 CLAUDE.md 中的仓库规范 |

---

## 六、开发者关注点

1. **模型行为不受控**：冗长注释（#65961）、附加解释（#92971）、过度调查消耗配额（#92970）——规则/CLAUDE.md 约束对模型层失效是高频抱怨。
2. **回归频发**：2.1.258 Dispatch 回归、2.1.265 网关回归、桌面文件树符号链接回归等，快速迭代下版本升级需谨慎，代理/网关用户尤其注意。
3. **Windows 生态薄弱**：Plan9 挂载、MSIX 虚拟化、窗口置顶等问题集中，Cowork 在 Windows 上稳定性明显落后。
4. **规则/配置加载不可靠**：`.claude/rules/` 符号链接不加载（#90523）、hook 输出静默截断（#91614）、Skill effort 无运行时效果（#69267）——配置“写了但不生效”是核心信任痛点。
5. **issue 生命周期管理**：stale-bot 过早关闭未修复问题（如 GrowthBook #92966）引发社区对 14 天超时的不满。

---
*数据来源：github.com/anthropics/claude-code · 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-09 | 数据来源：github.com/openai/codex**

---

## 一、今日速览

Codex CLI 持续高频迭代，24 小时内连发 `0.154.0-alpha.7` 与 `0.154.0-alpha.8` 两个 alpha 版本，合并 PR 数量超过 20 个，聚焦 app-server 稳定性与 macOS 语音功能打包。社区方面，**Windows 平台问题集中爆发**：WSL 项目创建失败、会话历史丢失、宠物交互失灵成为讨论焦点；当日新提的多个会话历史/投影相关 Bug 提示近期桌面端的 thread 迁移机制可能存在系统性问题。

---

## 二、版本发布

| 版本 | 说明 |
|---|---|
| [rust-v0.154.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.8) | 最新 alpha，未附详细 changelog，推测包含当日合并的 app-server 稳定性修复 |
| [rust-v0.154.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.7) | 前一 alpha 版本 |

两版本间隔极短，显示 alpha 通道处于密集验证阶段，正式版 0.154.0 应不久后发布。

---

## 三、社区热点 Issues

1. **[#41463](https://github.com/openai/codex/issues/41463) — [Windows + WSL] 无法创建项目：AbsolutePathBuf 反序列化缺少 base path**
   43 条评论、27 👍，今日最热。WSL 用户被完全阻断在项目创建流程之外，是 Windows 生态最高优先级问题。当日又有同类新报 [#44022](https://github.com/openai/codex/issues/44022)，说明问题尚未修复。

2. **[#41960](https://github.com/openai/codex/issues/41960) — Windows 桌面宠物（Pets）无法响应点击/拖拽**
   28 👍、23 评论。趣味功能但影响面广；当日新增重复报告 [#44031](https://github.com/openai/codex/issues/44031)，确认仍存在。

3. **[#43124](https://github.com/openai/codex/issues/43124) — macOS 历史冻结在旧消息：projection expected ordinal 3185, got 3184**
   长会话消息在 UI 中消失。与今日新报的 [#44035](https://github.com/openai/codex/issues/44035)、[#44033](https://github.com/openai/codex/issues/44033) 共同指向**分页线程投影机制的系统性缺陷**，值得持续关注。

4. **[#32139](https://github.com/openai/codex/issues/32139) — 请求自动接受"Keep Waiting"，减少手动确认**
   23 👍 的老牌增强需求，长任务等待确认的交互摩擦仍待官方响应。

5. **[#40902](https://github.com/openai/codex/issues/40902) — Windows 回归：Java NIO Selector.open 失败（loopback connection）**
   26.820 版本引入的回归，直接影响 Java 开发者的工作流，14 条评论。

6. **[#42683](https://github.com/openai/codex/issues/42683) — Alt+P 快捷键导致应用崩溃闪退**
   简单按键即触发崩溃，稳定性问题的典型代表。

7. **[#38157](https://github.com/openai/codex/issues/38157) — ChatGPT Pro (20x) 账户实际只获得 Pro 5x 配额**
   涉及计费/配额发放，官方 usage API 识别正确但实际限额缩水，对付费用户影响直接。

8. **[#43163](https://github.com/openai/codex/issues/43163) — GPT-6 Astra 对无害提示返回 invalid_prompt**
   同账号多台 PC 复现，疑似模型侧误判，属 model-behavior 类中较严重案例。同日 [#43969](https://github.com/openai/codex/issues/43969) 报告远程压缩对良性文学/英语学习笔记误报 content_filter。

9. **[#32922](https://github.com/openai/codex/issues/32922) — Compaction 期间丢弃目标（Goal）上下文**
   长任务核心痛点：压缩后 agent 丢失目标，任务连续性受损。

10. **[#34263](https://github.com/openai/codex/issues/34263) — Remote SSH 任务未配备 Browser/node_repl 工具**
    远程开发场景的工具能力不对齐，Local 可用而 Remote 不可用，限制桌面端远程工作流。

---

## 四、重要 PR 进展

1. **[#44028](https://github.com/openai/codex/pull/44028) — Amazon Bedrock AWS 凭证导出命令支持**
   支持 `credential_export` 从命令 JSON 输出获取 SigV4 签名凭证，扩展多云接入能力。

2. **[#44032](https://github.com/openai/codex/pull/44032) — 从 app-server schema 生成 Python SDK 类型**
   保持 Python 协议模型与 schema 同步，利好 SDK 生态建设。

3. **[#44027](https://github.com/openai/codex/pull/44027) — agents overview 后台任务支持图片附件**
   补齐图像输入能力，与已关闭的 Issue #43482 呼应。

4. **[#43994](https://github.com/openai/codex/pull/43994) — 切换线程时清除陈旧 transcript 历史**
   直接修复“切换会话后旧内容混入新会话”的历史串扰问题。

5. **[#43983](https://github.com/openai/codex/pull/43983) / [#44025](https://github.com/openai/codex/pull/44025) — macOS 语音资源签名打包**
   构建并公证 `codex-voice-host`，暗示**语音交互功能即将正式发布**。

6. **[#43950](https://github.com/openai/codex/pull/43950) / [#43959](https://github.com/openai/codex/pull/43959) — app-server 优雅关停与 RPC 生命周期治理**
   修复线程启动/恢复/回滚可能超出请求处理器生命周期的问题，属底层稳定性加固。

7. **[#43949](https://github.com/openai/codex/pull/43949) — 状态运行时新增事务性线程附件变更**
   基于 SQLite 事务的 attachment 增删，提升数据一致性。

8. **[#43947](https://github.com/openai/codex/pull/43947) — MCP OAuth 过期时暴露重连信号**
   修复刷新失败被误报为普通错误的问题，配合 macOS Keychain 问题（Issue #41071）看，MCP 认证链路在持续打磨。

9. **[#43954](https://github.com/openai/codex/pull/43954) — 缓存受保护 shell 快照并加固捕获清理**
   避免凭证经纪命令每次重建快照，兼顾性能与凭证泄露防护。

10. **[#43942](https://github.com/openai/codex/pull/43942) — worktree 浏览器显示所有者详情并支持确认删除**
    改善多 worktree 管理的可视化与安全删除体验。

---

## 五、功能需求趋势

- **Windows / WSL 一等公民化**：今日 Issues 中 Windows 相关占比过半，WSL 集成（项目创建、路径处理）是最大缺口。
- **会话历史可靠性与长任务支持**：分页投影、compaction 保留目标上下文、跨天时间戳（[#44021](https://github.com/openai/codex/issues/44021)）——社区对“历史不丢、不错乱”诉求强烈。
- **远程/多设备能力**：Remote SSH 工具配备、Remote compaction、Android 登录（[#38717](https://github.com/openai/codex/issues/38717)）。
- **多云/企业接入**：Bedrock 凭证导出 PR 显示对 AWS 等第三方 provider 的投入。
- **交互自动化**：减少手动确认（auto-accept waiting）、agent hub 粘贴图片、skills 自动补全（[#41842](https://github.com/openai/codex/issues/41842)）。
- **新兴功能**：语音（voice-host 打包）、Computer Use、宠物等周边功能进入打磨期。

---

## 六、开发者关注点

1. **桌面端历史/投影机制是当前最大雷区**：一天内 3+ 个新 Issue（#44033、#44035、#42025）指向 thread 分页迁移，建议长会话用户做好本地备份。
2. **Windows 用户升级需谨慎**：WSL 项目创建、Alt+P 崩溃、Java loopback 回归等多个未修复问题叠加。
3. **配额与限速透明度**：Pro 20x 用户实际获 5x 配额（#38157）、rate-limits 标签频繁出现，计费可信度受质疑。
4. **内容过滤误判**：invalid_prompt / content_filter 对无害内容的误报影响模型可用性，尤其远程 compaction 场景。
5. **迭代节奏健康**：bot 驱动的高频小粒度 PR（多为自动合并）表明工程自动化程度高，0.154 正式版值得期待 app-server 关停/生命周期修复落地。

---
*本报告基于 GitHub 公开数据自动整理，评论数为生成时点数据。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-09-09** | 数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 一、今日速览

今日发布三个新版本：正式版 **v0.59.0**、预览版 **v0.60.0-preview.0** 及 nightly 版 **v0.61.0-nightly**，更新聚焦安全加固（NTFS SFN 路径缓解、MCP OAuth RFC 9207 合规、sandbox 隔离）。Issue 区 Subagent 稳定性（挂起、假成功）仍是社区最大痛点，Auto Memory 安全与质量问题成为新一轮反馈焦点。

---

## 二、版本发布

### v0.61.0-nightly.20260909
- 修复 NTFS 8.3 短文件名（SFN）路径问题 [#29116](https://github.com/google-gemini/gemini-cli/pull/29116)
- 在 sandbox 容器中隔离 settings 目录 [#29216](https://github.com/google-gemini/gemini-cli/pull/29216)

### v0.60.0-preview.0
- 改进 web fetch 工具的目标地址校验与连接路由 [#29120](https://github.com/google-gemini/gemini-cli/pull/29120)
- MCP OAuth 流程强制执行 RFC 9207 issuer 标识

### v0.59.0（正式版）
- 包含 changelog 汇总及多项核心修复，详见 [Release](https://github.com/google-gemini/gemini-cli/releases)

---

## 三、社区热点 Issues

| # | Issue | 关注理由 |
|---|-------|---------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 达到 MAX_TURNS 后误报 success | **P1**。子代理被打断却报告 `GOAL success`，掩盖真实失败，误导上层 agent 决策，13 条评论热度最高 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent 无限挂起 | **P1**，👍8。简单操作（如建文件夹）挂起长达一小时，只能手动禁止 subagent 规避 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 零依赖 OS 沙箱 + bash 原生能力利用 | **P2** 大型工作流。利用 Gemini 3 原生 bash 能力（POSIX 工具链）替代内置工具，安全与 UX 兼顾 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST 感知的文件读取/搜索/代码映射 EPIC | 探索 AST 工具精准读取方法边界，减少 token 噪声与多余轮次 |
| 5 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory 确定性脱敏 | **安全类 P2**。Auto Memory 先将本地转录发给模型再“事后脱敏”，密钥已进上下文，需前置确定性脱敏 |
| 6 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell 命令完成后卡在 "Waiting input" | **P1**。命令已结束仍显示等待输入，简单命令也会复现，严重影响日常使用 |
| 7 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 主动使用 skills/sub-agents 不足 | 自定义 skill 与子代理几乎从不被自主调用，仅显式指令才触发 |
| 8 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 超过 128 个工具触发 400 错误 | 工具数量超限时 API 直接报 400，需要更智能的工具作用域裁剪 |
| 9 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent 在 Wayland 下失败 | **P1**。Linux Wayland 环境浏览器代理不可用，影响 Linux 用户 |
| 10 | [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) 模型随机位置创建 tmp 脚本 | shell 编辑方式导致工作区散落临时脚本，清理成本高 |

**其他值得关注**：Auto Memory 系列问题集中爆发（[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) 低信号会话无限重试、[#26523](https://github.com/google-gemini/gemini-cli/issues/26523) 无效 patch 静默跳过）；[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent 忽略 settings.json 覆盖；[#20079](https://github.com/google-gemini/gemini-cli/issues/20079) symlink 形式的 agent 定义不被识别。

---

## 四、重要 PR 进展

| # | PR | 内容 |
|---|-----|------|
| 1 | [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) | **沙箱大改造**：加固文件系统边界、隔离运行时状态、realpath 标准化路径敏感性检查（XL 级） |
| 2 | [#29163](https://github.com/google-gemini/gemini-cli/pull/29163) | **P1** 修复 macOS Seatbelt 等受限环境下 git 仓库内认证崩溃 |
| 3 | [#29063](https://github.com/google-gemini/gemini-cli/pull/29063) | **P1** 修复非交互模式下 Plan Mode 永久等待用户反馈导致挂起（已关闭，或已合并） |
| 4 | [#29156](https://github.com/google-gemini/gemini-cli/pull/29156) | 停止在 shell 执行中将 GIT_CONFIG 指向 /dev/null，恢复用户 git 配置可见性 |
| 5 | [#29067](https://github.com/google-gemini/gemini-cli/pull/29067) | **P1 安全**：移除 a2a-server 误导性 security schemes 和硬编码凭证 |
| 6 | [#29151](https://github.com/google-gemini/gemini-cli/pull/29151) | **P1** 修复 skill 优先级与激活状态的大小写敏感问题 |
| 7 | [#29252](https://github.com/google-gemini/gemini-cli/pull/29252) | **P1** 保留显式版本化的 Flash 模型 ID，`--model` 固定不再被静默重映射 |
| 8 | [#29087](https://github.com/google-gemini/gemini-cli/pull/29087) | 用 proper-lockfile 防止多进程并发安装扩展的竞态 |
| 9 | [#29088](https://github.com/google-gemini/gemini-cli/pull/29088) | 修复 MCP 流未关闭导致 VSCode 扩展 deactivate 阻塞 |
| 10 | [#29089](https://github.com/google-gemini/gemini-cli/pull/29089) | 将 abortSignal 传入 retryWithBackoff，修复重试期间无法取消的问题 |

另有 [#29137](https://github.com/google-gemini/gemini-cli/pull/29137) dependabot 批量更新 77 个 npm 依赖、[#29155](https://github.com/google-gemini/gemini-cli/pull/29155) BOM 编码文件 isEmpty 误判修复。

---

## 五、功能需求趋势

1. **Subagent 架构成熟化**：占本期 Issue 主导——稳定性（挂起、假成功）、可观测性（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598) 轨迹分享、[#21763](https://github.com/google-gemini/gemini-cli/issues/21763) bug 报告缺失子代理上下文）、自主调用率（#21968）。
2. **安全与沙箱**：OS 级零依赖沙箱（#19873）、Auto Memory 脱敏（#26525）、破坏性命令防护（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)），与近期 PR 方向高度一致。
3. **Token 效率与上下文管理**："Tactful Extraction" 外科式读取（[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)）、AST 感知搜索（#22745/#22746）、`/compress` 会话持久化（[#21335](https://github.com/google-gemini/gemini-cli/issues/21335)）。
4. **任务跟踪持久化**：用文件级 CRUD 替代上下文内 WriteToDo（[#18836](https://github.com/google-gemini/gemini-cli/issues/18836)、#21000）。
5. **浏览器自动化健壮性**：会话接管/锁恢复（[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)）、Wayland 支持、配置覆盖生效。

---

## 六、开发者关注点

- **可靠性 > 功能**：P1 问题集中在“挂起/卡死/假成功”（#21409、#25166、#22465 vite 交互卡死），用户对 agent 失去响应的容忍度最低。
- **Memory 系统信任危机**：安全（密钥进上下文）、质量（无效重试、静默丢弃 patch）问题成簇出现，是新版本前必须解决的板块。
- **配置一致性**：settings.json 覆盖不生效（#22267）、git 配置被清空（PR #29156）、symlink agent 不识别（#20079）——配置“写了但没用”是高频吐槽。
- **Token 成本敏感**：36.6k/turn 的基线开销促使社区推动精准读取与工具裁剪（#19561、#24246）。
- **工作区卫生**：临时文件散落（#23571）、破坏性 git 操作（#22672）反映开发者对 agent 行为可控性的诉求。

---
*本报告由 GitHub 公开数据自动汇总生成，人工分析整理。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-09-09** | 数据来源：[github/copilot-cli](https://github.com/github/copilot-cli)

---

## 📰 今日速览

Vim 模式正式全量发布（`/vim` 命令或 `editorMode: vim` 配置），标志着呼声最高、👍 76 的 Issue #13 圆满落地，是社区里程碑式的更新。与此同时，v1.0.84-3 修复了 OAuth MCP 服务器连接和 `/copy` 相关问题。会话（session）管理仍是社区最大痛点——Windows 桌面端无法创建新 Local 会话的问题持续发酵（#4756 👍 19）。

---

## 🚀 版本发布

### v1.0.84-3（修复版）
- `/copy` 现在会包含任务完成消息（task completion messages）
- 修复 OAuth 认证的 MCP 服务器在会话启动时无法可靠连接的问题——或与 #4753、#4582 等 MCP 连接类反馈相关

### v1.0.84-2（功能版）
- **Vim 模式全量开放**：`/vim` 命令或 `editorMode: vim` 配置开启，composer 中支持模态编辑，输入时显示当前模式
- Windows 支持的沙箱策略下，交互式 shell 命令现在会记录被阻止的访问（blocked accesses）

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关注点 | 社区反应 |
|---|-------|--------|----------|
| 1 | [#4756](https://github.com/github/copilot-cli/issues/4756) Windows 端需归档所有闲置会话才能新建 Local 会话 | 1.1.15 桌面端 + 1.0.83-5 CLI 的组合严重阻塞工作流 | 👍 19，6 评论，快速升温 |
| 2 | [#13](https://github.com/github/copilot-cli/issues/13) CLI 应支持 vi/vim 输入模式（已关闭） | 长期高票需求，随 v1.0.84-2 正式落地 | 👍 76，11 评论 |
| 3 | [#4742](https://github.com/github/copilot-cli/issues/4742) 桌面端 1.1.15 无法创建第二个 Local 分支会话 | 与 #4756 同源的会话创建限制问题 | 10 评论，5 👍 |
| 4 | [#4612](https://github.com/github/copilot-cli/issues/4612) FileWatch 事件死循环冻结 TUI，调试日志膨胀至 13 GB | 严重的资源泄漏类 bug，影响长时运行会话 | 9 评论 |
| 5 | [#4664](https://github.com/github/copilot-cli/issues/4664) 恢复长会话时 Node.js 堆内存溢出崩溃 | 大会话恢复稳定性，V8 堆耗尽 | 7 评论 |
| 6 | [#2861](https://github.com/github/copilot-cli/issues/2861) `/compact` 在 Opus 4.6 上连续失败（空响应） | 上下文压缩可靠性，影响长会话可持续性 | 6 评论，长期未解 |
| 7 | [#2943](https://github.com/github/copilot-cli/issues/2943) OpenRouter 集成需求 | 自定义模型/第三方模型接入呼声 | 👍 14，持续活跃 |
| 8 | [#4753](https://github.com/github/copilot-cli/issues/4753) v1.0.83 会话恢复取消初始化中的 MCP 连接（超时从 16s 缩至 1s） | 版本回归问题，MCP 服务器静默不可用 | 与 v1.0.84-3 修复可能相关 |
| 9 | [#4505](https://github.com/github/copilot-cli/issues/4505) 恢复会话后 input item ID 失配（400 错误） | 会话恢复网络状态管理缺陷，`/fork` 也无法绕过 | 3 评论 |
| 10 | [#1724](https://github.com/github/copilot-cli/issues/1724) 显示当前 TODO 状态 | Agent 透明度需求，TODO 列表对用户不可见 | 👍 11 |

其他值得留意：[#4757](https://github.com/github/copilot-cli/issues/4757) 无托管策略账户下 `--yolo` 被 fail-closed 机制整会话封锁；[#4609](https://github.com/github/copilot-cli/issues/4609) Docker 沙箱内所有工具执行免审批（安全隐患）。

---

## 🔀 重要 PR 进展（共 3 条，全部列出）

1. **[#4770](https://github.com/github/copilot-cli/pull/4770) [OPEN] 文档化 WebSocket responses 退出选项**
   模型默认使用 WebSocket responses 端点；当网络阻断 WS 或出现 `400 input item ID` 错误时需要文档化逃生通道。直接关联 Issue #4505。

2. **[#4761](https://github.com/github/copilot-cli/pull/4761) [CLOSED] install.sh 报告不支持的操作系统**
   修复 FreeBSD 上安装脚本误报“检测到 Windows 但找不到 winget”的问题，非 macOS/Linux 平台统一提示不支持。

3. **[#4100](https://github.com/github/copilot-cli/pull/4100) [CLOSED] 疑似垃圾/测试 PR**，无实质内容。

> 注：本周期 PR 活动较少，仅有 3 条更新，主仓库开发可能以内部分支为主。

---

## 📈 功能需求趋势

1. **会话管理健壮性**（最高频）：会话创建限制、恢复失败、内存溢出、状态卡死（#4742/#4756/#4664/#4755）——长会话和大会话场景是重灾区
2. **MCP 生态完善**：OAuth 连接可靠性、取消请求发送（#4759）、Profiles 按需加载（#2235）、企业认证读取注册表（#3772）
3. **编辑器体验**：Vim 模式已落地，模态编辑文化在 CLI 用户中有坚实基本盘
4. **模型灵活性**：OpenRouter 集成（#2943）、Gemini 对 MCP union type schema 的兼容（#4623）
5. **可观测性/透明度**：TODO 状态展示（#1724）、搜索工具卡死需 workaround（#4448）
6. **权限与安全**：沙箱审批策略不一致（#4609 免审批 vs #4757 过度封锁）、`--yolo` 长时间闲置后重置（#4696）

---

## ⚠️ 开发者关注点

- **Windows 桌面端 1.1.15 升级需谨慎**：会话创建限制（#4742/#4756）已被多人复现，建议暂缓升级或保留归档会话的 workaround
- **长会话/大会话用户**：恢复时的堆内存溢出（#4664）与 13 GB 日志泄漏（#4612）尚未修复，重要工作建议及时 `/compact` 并监控磁盘
- **v1.0.84-3 值得升级**：OAuth MCP 连接修复可能解决 #4753 类问题
- **MCP 开发者**：注意 Gemini 模型对 union type schema 的 400 兼容问题；企业场景下注册表匿名读取（#3772）尚无方案
- **配置非 repo 根目录的项目**（#4765）：`.mcp.json` 和 hooks 无法被读取，monorepo/多 repo workspace 用户受影响

---

*本报告基于过去 24 小时 GitHub 公开数据自动整理，统计数据以发布时点为准。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-09-09）

## 📌 今日速览

今日 Kimi CLI 仓库无新版本发布，社区整体活跃度较低，过去 24 小时无 Issue 更新。唯一动态是 PR #2595 的持续讨论——该 PR 旨在修复 `StrReplaceFile` 工具在处理非 UTF-8 文件时可能造成数据损坏的问题，值得关注。

---

## 🚀 版本发布

过去 24 小时无新版本发布。

---

## 🔥 社区热点 Issues

过去 24 小时内无 Issue 更新，今日无热点可摘录。

> 💡 提示：相关 Issue #2591（非 UTF-8 文件编辑导致数据损坏）因 PR #2595 而仍具参考价值，详见下方 PR 部分。

---

## 🔧 重要 PR 进展

### 1. fix(StrReplaceFile): refuse to edit files that are not valid UTF-8

- **状态**：🟢 OPEN
- **作者**：@shoemoney
- **创建/更新**：2026-08-06 / 2026-09-08
- **链接**：[MoonshotAI/kimi-cli#2595](https://github.com/MoonshotAI/kimi-cli/pull/2595)

**内容分析**：
当前 `StrReplaceFile` 实现使用 `errors="replace"` 解码整个文件，将编辑应用到字符串后整体写回。这意味着文件中**任何**非法 UTF-8 字节（即使与编辑位置相距甚远）都会被替换为 U+FFFD（`EF BF BD`），并永久写入磁盘，造成静默的数据损坏。

该 PR 的修复策略为：**拒绝编辑非有效 UTF-8 的文件**，从根源上避免数据破坏。这是典型的“fail fast”防御性设计，对处理包含二进制片段、遗留编码（GBK/Latin-1）文件的用户尤为重要。

**关联 Issue**：#2591
**社区反应**：暂无 👍 与评论，但该问题涉及数据安全，建议维护者优先审阅。

---

## 📈 功能需求趋势

由于今日无新增 Issue 数据，基于近期 PR 信号可观察到：

- **文件编辑安全性与健壮性**：非 UTF-8 文件处理（#2595/#2591）反映社区对编辑工具数据安全性的关切，预期后续会出现对多编码（GBK、Shift-JIS 等）文件支持的需求。
- **防御性校验机制**：社区倾向接受“明确报错优于静默损坏”的设计哲学，未来或推动更多工具增加前置校验。

---

## 🧑‍💻 开发者关注点

1. **数据完整性是红线**：`StrReplaceFile` 静默写入 U+FFFD 的问题直接影响用户代码资产，属于高危痛点。开发者应关注该 PR 的合并进度，在合并前避免对含非 UTF-8 字节的文件使用字符串替换编辑。
2. **二进制/混合编码文件场景**：AI 编辑工具在真实工程（含图片、序列化数据、遗留编码源文件）中的一致性表现，是社区反馈的高频场景。
3. **建议**：关注 #2595 的评审讨论——若最终采用“拒绝编辑”策略，工作流中处理非 UTF-8 文件需提前转码。

---

*数据来源：github.com/MoonshotAI/kimi-cli | 统计窗口：2026-09-08 ~ 2026-09-09*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-09

## 📌 今日速览

OpenCode 发布 v1.18.30，重点是为 GPT-6 模型添加 Astra 系统提示词并修复 Bedrock DeepSeek 模型 ID 解析问题。社区讨论最热烈的是本地 SQLite 数据库无限膨胀问题（`opencode.db` 可达 13GB+），以及 tok/s 实时速度显示成为近期高频功能诉求。当日 PR 活跃度高，多位贡献者提交了 UI 打磨、V2 API 元数据暴露和 DeepSeek Harness ACP 后端等更新。

---

## 🚀 版本发布

### v1.18.30
- **Improvements**: 为 GPT-6 模型新增 Astra 系统提示词
- **Bugfixes**:
  - 保留 Bedrock DeepSeek 模型 ID（含 ARN 形式），确保正确解析（@YeEmrick）
  - 升级 Azure provider SDK 以获取兼容性修复
  - 升级 OpenAI provider SDK（更新日志被截断）

---

## 🔥 社区热点 Issues

1. **[#20995](https://github.com/anomalyco/opencode/issues/20995)** [已关闭] Gemma 4 (e4b) 通过 Ollama OpenAI 兼容 API 的 tool calling 失败 — 流式 `tool_calls` 无法被识别。36 条评论、48 👍，是本地模型用户的核心痛点。

2. **[#33356](https://github.com/anomalyco/opencode/issues/33356)** [开放中] ⚠️ `event` 表无限增长导致 `opencode.db` 达 13GB+，事件溯源数据无清理/压缩机制，撑爆磁盘。28 条评论，是当前最严重的开放性性能/存储问题。

3. **[#6096](https://github.com/anomalyco/opencode/issues/6096)** [已关闭] 每条消息显示 tokens/second（TPS）的实验性功能请求，73 👍 高票需求，现已关闭（大概率已实现）。

4. **[#16344](https://github.com/anomalyco/opencode/issues/16344)** [已关闭] Requesty provider 不加载账户已批准的模型列表，模型选择对话框显示与实际可用不符。

5. **[#9532](https://github.com/anomalyco/opencode/issues/9532)** [已关闭] 使用 Claude 时频繁出现 tool calling 错误（模型调用不可用工具），影响主流模型使用体验。

6. **[#34543](https://github.com/anomalyco/opencode/issues/34543)** [已关闭] DeepSeek 原生 websearch 连接失败：JSON Schema 校验错误（`type: "null"`）导致 API 400。

7. **[#36119](https://github.com/anomalyco/opencode/issues/36119)** [已关闭] Apply Patch 权限视图只显示第一个文件，多文件修改时用户无法审阅其余变更，存在安全隐患。

8. **[#30510](https://github.com/anomalyco/opencode/issues/30510)** [已关闭] OpenAI provider 遇到 429 限流时约每秒无限重试，无指数退避、无上限，可能加剧限流。

9. **[#36326](https://github.com/anomalyco/opencode/issues/36326)** [已关闭] 对话持久性误导信息：AI 告知用户可直接关机后续接，实际新会话从头开始，涉及产品可信度。

10. **[#47914](https://github.com/anomalyco/opencode/issues/47914)** [开放中] 请求在 TUI 状态栏显示实时 tok/s（对标 DeepSeek Hermes），与 #48067 一起反映社区对输出速度可见性的强烈诉求。

---

## 🔧 重要 PR 进展

1. **[#48070](https://github.com/anomalyco/opencode/pull/48070)** [开放] 修复 Bedrock Astra 拒绝 `toolResult.content` 内图片的问题，将图片提升到用户级别。
2. **[#48058](https://github.com/anomalyco/opencode/pull/48058)** [开放] 精简压缩摘要提示词 — GPT 系模型压缩摘要保留过多细节（30k+ 字符），长会话下浪费大量 token。
3. **[#48048](https://github.com/anomalyco/opencode/pull/48048)** [已关闭] 新增 DeepSeek Harness ACP 执行后端（opt-in），完整管理 ACP 进程生命周期与权限。
4. **[#47874](https://github.com/anomalyco/opencode/pull/47874)** [开放] 新增 Alibaba Cloud 推理 provider，支持区域共享主机与 workspace 专属主机。
5. **[#38232](https://github.com/anomalyco/opencode/pull/38232)** [开放] 修复全局 32K 默认值覆盖 DeepSeek V4 声明的 384K 输出上限。
6. **[#48059](https://github.com/anomalyco/opencode/pull/48059)** [已关闭] 在 V2 API 中端到端暴露 session `metadata` 字段，便于编程客户端使用。
7. **[#48043](https://github.com/anomalyco/opencode/pull/48043)** [已关闭] 移除消息内容变更 API（`PATCH message`），收紧 V2 协议只读边界。
8. **[#47353](https://github.com/anomalyco/opencode/pull/47353)** [开放] 支持 endpoint 管理部署的 OTLP 遥测导出配置，面向企业级场景。
9. **[#48060](https://github.com/anomalyco/opencode/pull/48060)** [已关闭] codemode 解释器改用 acorn 类型化 AST，删除约 160 处手动类型断言，行为保持不变。
10. **[#48064](https://github.com/anomalyco/opencode/pull/48064)** [已关闭] 将 provider 注册表加载延迟到 plugin boot，解决循环导入导致的 Bedrock 测试失败。

---

## 📈 功能需求趋势

- **Token 速度/用量可见性**：tok/s 实时显示（#6096、#47914、#48067）与 token 元数据暴露（#36216）是近期最集中的诉求。
- **本地/开源模型兼容**：Ollama、Gemma 4、Kimi、GLM5-2 等模型在流式 tool calling、reasoning_content 处理上的兼容性问题频发。
- **V2 API 完备性**：社区期待 V2 补齐 V1 能力（如 `part.delete` #44984、metadata #48059），协议只读化趋势明显。
- **长会话稳定性**：数据库膨胀（#33356）、压缩摘要冗长（#48058）指向长时会话的资源管理是薄弱环节。
- **Desktop/Web UI 打磨**：worktree 跟踪（#36301）、iframe 嵌入（#36237）、面板最大化（#35314）等体验类需求持续涌现。
- **企业级能力**：OTLP 遥测、托管部署配置等面向团队/企业的功能开始进入贡献管道。

---

## ⚠️ 开发者关注点

1. **存储管理是最大隐患**：长期运行的实例数据库无清理机制，可能撑爆磁盘，生产环境用户需自行监控 `opencode.db` 体积。
2. **OpenAI 兼容 API 的流式 tool calls 解析**仍是本地/第三方模型的主要故障点，涉及多个 provider。
3. **429 限流无退避重试**可能触发更严重的限流甚至封禁，重度用户需留意。
4. **多文件 patch 权限审阅不完整**，注重安全的团队应谨慎使用批量编辑。
5. **配置优先级与文档不同步**（#28177、#36259），`.opencode/opencode.json` 等实际行为需以代码为准。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-09-09）

## 1. 今日速览

Qwen Code 今日发布 **v0.23.2-preview.0** 预览版（主要修复 CI E2E 稳定性），同时 SDK TypeScript 连发 v0.1.9 / v0.1.10，捆绑 CLI 0.23.1 并响应了社区关于托管内存和 prompt cache 的修复请求（#11022）。**Windows 平台 ConPTY 进程泄漏**（12 小时累积 347 个 conhost.exe、约 2.8 GB 内存）成为最热议题，已被拆分为可修复与上游依赖阻塞两部分跟踪。此外，集成生态（daemon/Web Shell 自定义托管、品牌化配置）和 CI/发布流程可靠性是今日 Issue 与 PR 的两大主线。

---

## 2. 版本发布

### v0.23.2-preview.0
- 修复 CI：将子进程密集型 E2E 与 fork 压力隔离，减少 flaky 失败（[PR #11388](https://github.com/QwenLM/qwen-code/pull/11388)）
- [完整 Changelog](https://github.com/QwenLM/qwen)

### v0.23.1
- ⚠️ **Breaking Change**：移除 `@qwen-code/webui`（[PR #9812](https://github.com/QwenLM/qwen-code/pull/9812)）
- 新增 Web Shell 动态可视化与管理能力

### SDK TypeScript v0.1.9 / v0.1.10
- 捆绑 CLI 0.23.0/0.23.1，包含两项社区请求的修复：
  - 托管内存可用性现在遵循 `memory.enableManagedAutoMemory` 设置（#6941）
  - 清理旧的托管内存转换指令与 prompt cache 修复（#8464）
- 响应 [Issue #11022](https://github.com/QwenLM/qwen-code/issues/11022)，该 Issue 已关闭

---

## 3. 社区热点 Issues

| # | Issue | 关注理由 |
|---|-------|---------|
| 1 | [#11303](https://github.com/QwenLM/qwen-code/issues/11303) P1 | **Windows ConPTY 泄漏**：VS Code Companion 中 qwen-cli 泄漏无头 conhost.exe，12 小时累积 347 进程 / ~2.8 GB，10 条评论，已 ready-for-human |
| 2 | [#11352](https://github.com/QwenLM/qwen-code/issues/11352) P1/blocked | #11303 拆分出的**上游依赖缺陷**：node-pty 在 shell 自然退出时无法从 JS 侧调用 ClosePseudoConsole，钉死的 @lydell/node-pty 1.2.0-beta.10 侧不可修，短期内 Windows 用户需关注 |
| 3 | [#11410](https://github.com/QwenLM/qwen-code/issues/11410) P1 | Windows 11 更新后 **LM Studio 本地模型连接失败**（API 400），本地模型用户受影响面广 |
| 4 | [#11205](https://github.com/QwenLM/qwen-code/issues/11205) P2 | **安全 review**：main 分支的 content-filter screen 丢失了六项加固（EACCES、spawn 超时、候选上限等），值得安全敏感用户关注 |
| 5 | [#11405](https://github.com/QwenLM/qwen-code/issues/11405) P2 | **带模式的 deny 规则误伤**：`Bash(npm view *)` 这类 pattern 拒绝让模型误以为工具整体被禁，直接损害可用性（修复见下方 PR #11411） |
| 6 | [#11420](https://github.com/QwenLM/qwen-code/issues/11420) P2 | **发布流程不校验 CI 状态**：09-08 nightly 从已红了 1h41m 的 commit 发布，暴露发布质量门禁缺失 |
| 7 | [#11386](https://github.com/QwenLM/qwen-code/issues/11386) P2 | daemon 工作区扩展性：基于 1/25/256 容量实测，建议解耦注册与活跃运行时而非完整 LRU，实测驱动的方案讨论质量高 |
| 8 | [#11359](https://github.com/QwenLM/qwen-code/issues/11359) / [#11427](https://github.com/QwenLM/qwen-code/issues/11427) P3 | **daemon 集成文档体系化**（REST/SSE API 索引 + 集成路径指南），外部团队基于 `qwen serve` 构建产品的需求集中爆发 |
| 9 | [#11358](https://github.com/QwenLM/qwen-code/issues/11358) / [#11357](https://github.com/QwenLM/qwen-code/issues/11357) P3 | **Web Shell 自定义分发托管 + 品牌化配置**（logo、标题、主题、导航可见性），同一集成者连续提出，白标需求明确 |
| 10 | [#10685](https://github.com/QwenLM/qwen-code/issues/10685) P2 已关闭 | Channel 服务 pidfile 将**回收复用的 PID 误判为存活服务**，经典 PID 竞态问题，已修复关闭 |

---

## 4. 重要 PR 进展

| # | PR | 内容 |
|---|-----|------|
| 1 | [#11411](https://github.com/QwenLM/qwen-code/pull/11411) | **修复 deny 规则误伤**：拒绝消息现在引用匹配的具体规则，并明确为“调用级拒绝”而非“工具级拒绝”，直接对应 #11405 |
| 2 | [#11428](https://github.com/QwenLM/qwen-code/pull/11428) | 解耦 daemon 工作区容量策略，对应 #11386 的实测建议 |
| 3 | [#10410](https://github.com/QwenLM/qwen-code/pull/10410) | **延迟工具的 prompt cache 保留**：通过 `tool_search` / `tool_call` 两步桥接，不改变已声明工具列表即可揭示和调用延迟工具，显著优化缓存命中 |
| 4 | [#10183](https://github.com/QwenLM/qwen-code/pull/10183) | **结构化按需记忆召回**：从扁平重 prompt 演进为推/拉召回协议，附带两级 ref/title 树和专用查询工具 |
| 5 | [#11422](https://github.com/QwenLM/qwen-code/pull/11422) | **默认发布 bun/OpenTUI 预览包**，经典 Node.js 包不变，纯增量 |
| 6 | [#11277](https://github.com/QwenLM/qwen-code/pull/11277) | IPC 入站限流：新增 `dropped` 结果，单发送者 30 条后每 2 秒 1 条，防止会话过载 |
| 7 | [#11392](https://github.com/QwenLM/qwen-code/pull/11392) | MCP 池化连接失败后在后续 ACP 轮次中自动恢复，重建工具与 prompt 注册 |
| 8 | [#11086](https://github.com/QwenLM/qwen-code/pull/11086) | 扩展作用域到工作区运行时：全局扩展目录可通过各工作区 runtime 访问 |
| 9 | [#11251](https://github.com/QwenLM/qwen-code/pull/11251) | 暴露 assistant turn 结算生命周期回调，为宿主提供权威的会话/结果事件 |
| 10 | [#11431](https://github.com/QwenLM/qwen-code/pull/11431) | 无参工具在 OpenAI 请求中省略 `function.parameters`，规避 schema 塌缩为空对象的问题 |

其他值得留意：#11171（VS Code 权限 diff 关闭后归还编辑权）、#11380（Web Shell 悬停时间戳遮挡修复）、#11397（Mem0 DELETE 响应对齐）。

---

## 5. 功能需求趋势

1. **Daemon / Web Shell 集成生态**（最强势方向）：REST/SSE 文档整合（#11359）、自定义前端托管（#11358）、品牌化配置（#11357）、集成路径指南（#11427）——外部团队将 `qwen serve` 作为 Agent 后端的需求集中爆发
2. **CI/发布工程化**：复用绿色 CI 结论避免重复测试（#10820）、发布前校验 commit CI 状态（#11420）、E2E checkout 重试（PR #11297）、ECS runner 更新失败（#11403）——发布可靠性成为团队内部高频议题
3. **Windows 平台稳定性**：ConPTY 泄漏双 Issue（#11303 / #11352）+ 本地模型 400 错误（#11410）
4. **权限系统精细化**：pattern deny 语义修正（#11405）、安全加固回归 review（#11205）
5. **后台自动化 / Dynamic Workflows**：对标 Claude Code 2.1.260 的剩余差距（#11013）、后台 agent 通知期间 UI 状态（#11385）
6. **可扩展性**：daemon 工作区超过 25 个的容量策略（#11386）

---

## 6. 开发者关注点

- **Windows 内存泄漏是当前最大痛点**：VS Code Companion 用户长时间运行后内存暴涨，且核心一半被上游 node-pty 阻塞，短期需重启规避，建议关注 #11313 修复的落地
- **升级 v0.23.x 的破坏性变更**：`@qwen-code/webui` 被移除，依赖该包的项目需迁移至 Web Shell / daemon 方案
- **本地模型（LM Studio）用户**：Windows 11 更新后出现 API 400，#11410 尚在排查，升级需谨慎
- **权限 deny 规则编写者**：pattern 级 deny 会让模型完全弃用工具，PR #11411 合并前建议避免过宽的 pattern
- **SDK 集成方利好**：v0.1.10 已包含托管内存开关与 prompt cache 修复，建议升级
- **贡献者注意**：设计文档现在要求中英双语（PR #11419），投稿前需遵循新的双语规范

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报
**日期：2026-09-09 | 数据来源：github.com/Hmbown/DeepSeek-TUI**

---

## 一、今日速览

社区焦点集中在 v0.9.13 的集成 PR（#6002），它一口气回应了过去两天多个高热度 Issue，包括模型目录分页、OpenRouter 供应商选择、输出限制与价格校验等。与此同时，TUI 可观测性（token/成本诊断）、goal 循环独立验证、Session Picker UX 等一批高质量增强提案密集出现，显示社区正从“功能可用”向“可观测、可信任”演进。

---

## 二、版本发布

过去 24 小时无新 Release。但 PR #6002 正在准备 0.9.13 的发布验证，预计近期合入。

---

## 三、社区热点 Issues（按关注度精选）

1. **#5976 [bug] Concentrate 路由成本显示 "unknown"——计费/定价覆盖不完整且无守卫**
   创始人亲自上报：Concentrate 已在目录中可路由，但 metrics 条显示 `cost: unknown`。问题本质是 provider 计费数据覆盖不全且缺少校验机制，是定价体系的系统性缺口。
   🔗 [Issue #5976](https://github.com/Hmbown/Codewhale/issues/5976)

2. **#6009 [bug] `/models` 命令缺少分页支持，只返回部分模型列表**
   单次 `GET /v1/models` 未处理 OpenAI 风格的游标分页（`has_more`/`after`），模型超过默认页大小时大量模型丢失。影响面广的基础性 bug。
   🔗 [Issue #6009](https://github.com/Hmbown/Codewhale/issues/6009)

3. **#6007 [enhancement] OpenRouter 模型的原生厂商（vendor）选择**
   目前只能通过模型字符串隐式 pin 厂商，社区希望提供配置项或 `/model` Vendor 面板等一等公民支持。与 PR #6002 直接呼应。
   🔗 [Issue #6007](https://github.com/Hmbown/Codewhale/issues/6007)

4. **#6011 [enhancement] TUI 用量与工具诊断**
   Token 计账（按组件/模型、缓存命中率、按工具统计、压缩成本）与工具调用错误模式分析。解决“会话结束后无法复盘 token/钱花在哪”的黑盒问题。
   🔗 [Issue #6011](https://github.com/Hmbown/Codewhale/issues/6011)

5. **#6013 [enhancement] Goal gates：complete/blocked 等状态的独立验证**
   目标循环目前完全信任模型自我报告，提案引入独立验证与 post-verify 阶段（config 可选，默认保持现状），是可靠性方向的深度提案。
   🔗 [Issue #6013](https://github.com/Hmbown/Codewhale/issues/6013)

6. **#6014 [enhancement] Session Picker UX 改进**
   隐藏空自动会话、高亮当前会话、列表分页滚动、加宽面板——四个实用性改进，降低多会话管理的心智负担。
   🔗 [Issue #6014](https://github.com/Hmbown/Codewhale/issues/6014)

7. **#6015 [enhancement] Fleet 自适应反卡死 + 更宽的只读 shell 语法**
   只读子代理（Scout/Reviewer/Planner）在默认配置下频繁卡死、烧 token。提案以默认值修复而非要求用户手改 `[subagents]`，体现了“默认即正确”的设计取向。
   🔗 [Issue #6015](https://github.com/Hmbown/Codewhale/issues/6015)

8. **#4168 [enhancement] 架构 D-4：用户自定义模型配置段 `[[models]]`**
   允许用户无需改编译期目录即可接入本地/私有模型。开放架构的关键一步，7 月提出至今仍有活跃讨论。
   🔗 [Issue #4168](https://github.com/Hmbown/Codewhale/issues/4168)

9. **#2955 [CLOSED] v0.8.56：OpenAI Codex provider 遥测与 Codex CLI 对齐**
   记录缓存输入 token 和推理输出 token，使与 Codex CLI 的对比公平化。已关闭，可作为遥测细化的参考实现。
   🔗 [Issue #2955](https://github.com/Hmbown/Codewhale/issues/2955)

---

## 四、重要 PR 进展

> 过去 24 小时共 3 个活跃 PR：

1. **#6002 集成 0.9.13 贡献者修复与发布验证**
   一次性合入：provider 目录分页与精确路由、OpenRouter vendor 选择、输出限制、定价校验等——直接对应 #6007、#6009、#5976 三个热点 Issue，是今日最重要的 PR。
   🔗 [PR #6002](https://github.com/Hmbown/Codewhale/pull/6002)

2. **#6012 fix(session): 自动标题生成时跳过 runtime handoffs**
   修复会话自动标题显示内部运行时信封（如 `<codewhale:runtime_event ...>`）而非真实提示词的问题。小而美的体验修复。
   🔗 [PR #6012](https://github.com/Hmbown/Codewhale/pull/6012)

3. **#5982 feat(tui): 模型绑定密钥脱敏的确认式豁免（`[redaction] model_bound`）**
   强制凭据脱敏在开发场景（如浏览器扩展粘贴 API key）造成困扰，本 PR 增加经确认的 opt-out 机制，兼顾安全与开发体验。
   🔗 [PR #5982](https://github.com/Hmbown/Codewhale/pull/5982)

---

## 五、功能需求趋势

- **可观测性与成本透明**：token 精细计账、成本追踪、定价覆盖校验（#6011、#5976、#2955）是本周期最强需求主线。
- **Provider 互操作完整性**：分页、vendor 选择、自定义模型接入（#6009、#6007、#4168），社区对多 provider 生态的“长尾正确性”要求提升。
- **可靠性与自治可信度**：goal 状态独立验证、子代理反卡死（#6013、#6015），反映对 agent 自治行为的信任审计需求。
- **TUI 交互打磨**：Session Picker、诊断面板等 UX 细节改进（#6014、#6012）。

---

## 六、开发者关注点（痛点总结）

1. **成本黑盒**：`cost: unknown` 与会话级费用无法复盘，是最直接的付费用户痛点。
2. **默认配置不够健壮**：只读子代理默认卡死烧 token，用户被迫手改配置——“默认值即最佳实践”呼声强烈。
3. **模型自我报告不可信**：goal 循环、状态汇报缺少独立校验，影响长时自治任务的可靠性。
4. **安全机制与开发效率冲突**：强制脱敏在某些合法开发流程中制造摩擦，需要更精细的豁免通道（PR #5982 已响应）。
5. **多模型场景下的显示与路由碎片化**：模型列表截断、vendor 无法显式选择，说明 provider 抽象层仍需补齐。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-09-09

## 1. 今日速览

今日无新版本发布，但社区活跃度很高：过去 24 小时内共 66 条 Issue 更新、16 条 PR 更新。**OpenCode Zen 强制要求 `x-opencode-session` 头**（2026-09-06 生效）引发了连锁反应，多个相关 Issue 被快速修复关闭；同时维护者 @mitsuhiko 提交了运行时依赖更新，多个累积已久的 compaction/TUI 修复 PR 已合入。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#5363](https://github.com/earendil-works/pi/issues/5363)** [OPEN] 新增 `amazon-bedrock-mantle` provider（OpenAI 兼容 API）。讨论热度最高（19 评论 / 15 👍），Bedrock Mantle 模型与现有 Converse API 不兼容，是社区最关注的新 provider 需求，标记 inprogress。

2. **[#9230](https://github.com/earendil-works/pi/issues/9230)** [CLOSED] opencode-go provider 未发送 `x-opencode-session` 头。OpenCode 平台 09-06 起强制校验，导致请求 400，已修复关闭。这是本周最紧急的兼容性事件。

3. **[#9326](https://github.com/earendil-works/pi/issues/9326)** [OPEN] `@earendil-works/pi-ai` SDK 同样缺失 `x-opencode-session` 头。#4847 曾修复主路径但 SDK 仍遗漏，说明 header 注入需要架构层面的统一方案。

4. **[#9302](https://github.com/earendil-works/pi/issues/9302)** [OPEN] 循环外摘要（branch summary / compaction）缺失 provider 归属头，opencode 系 provider 确定性失败。与 #9326 同源，暴露了 auth headers 拼装路径分散的问题。

5. **[#9052](https://github.com/earendil-works/pi/issues/9052)** [OPEN] 全屏模式滚轮速度是普通模式的 1/3。全屏固定输入框是好功能，但滚动体验劝退用户，3 👍 反映了 TUI 体验仍是高频反馈点。

6. **[#8823](https://github.com/earendil-works/pi/issues/8823)** [CLOSED] 流式输出中按 Esc 无法可靠取消请求。中止虽已注册但仍等 provider 自然结束，影响交互流畅度，已修复。

7. **[#7444](https://github.com/earendil-works/pi/issues/7444)** [CLOSED] WebSocket 重试仅处理两个错误码，其他瞬态 `response.failed` 直接终止回合。Codex 通道稳定性问题，已修复。

8. **[#9276](https://github.com/earendil-works/pi/issues/9276)** [CLOSED] grep 工具带上下文行时将所有匹配文件读入内存导致 OOM。headless SDK 用户的严重稳定性问题，已快速修复。

9. **[#8667](https://github.com/earendil-works/pi/issues/8667)** [CLOSED] 压缩条目错位导致会话永久损坏（Anthropic 400 unexpected tool_use_id）。compaction 边界条件 bug，与今日合入的 PR #9337 相关。

10. **[#7739](https://github.com/earendil-works/pi/issues/7739)** [OPEN] 设定对标 jcode 的启动延迟与内存预算。性能对比 benchmarks 显示 pi 存在差距，社区呼吁建立性能回归基线。

## 4. 重要 PR 进展

1. **[#9341](https://github.com/earendil-works/pi/pull/9341)** [CLOSED] @mitsuhiko 更新运行时依赖（含 minimatch），统一重新生成 lockfile。安全维护性更新。

2. **[#9337](https://github.com/earendil-works/pi/pull/9337)** [CLOSED] 将下游 fork 中三个已修复的 compaction/context 显示 bug 移植回上游，避免官方更新时修复被丢弃。

3. **[#9345](https://github.com/earendil-works/pi/pull/9345)** [CLOSED] 暴露 Anthropic OAuth 用量报告，新增 provider 中立的订阅用量 API，带 5 分钟缓存与去重。

4. **[#9344](https://github.com/earendil-works/pi/pull/9344)** [CLOSED] 新增 owner-safe UI 覆盖机制（主题/footer/编辑器），基于对象身份管理，防止陈旧扩展泄漏覆盖状态。

5. **[#9350](https://github.com/earendil-works/pi/pull/9350)** [CLOSED] `findExecutableOnPath` / `commandExists` 改为无 fork 实现，修复 Android 等受限环境下主线程 fork 死锁。

6. **[#9316](https://github.com/earendil-works/pi/pull/9316)** [CLOSED] 三个小修复合集：全屏零行 footer、MouseRegion invalidate 守卫等（关闭 #8919、#8717、#8720）。

7. **[#9351](https://github.com/earendil-works/pi/pull/9351)** [OPEN] 修复远程编辑场景下 edit 预览闪烁（先显示本地错误再被远程 diff 覆盖）。

8. **[#6881](https://github.com/earendil-works/pi/pull/6881)** [OPEN, inprogress] 当响应包含 provider 计费成本时优先使用，替代目录费率估算（支持 Vercel AI Gateway BYOK 等）。

9. **[#8635](https://github.com/earendil-works/pi/pull/8635)** [OPEN] 惰性 stream setup 中保留 aborted stop reason，修复 #8409 中止语义丢失问题。

10. **[#8627](https://github.com/earendil-works/pi/pull/8627)** [CLOSED] cwd 敏感工具（read/write/edit/grep 等）统一改为基于 `ctx.cwd` 解析路径，改善扩展注册工具的路径正确性。

## 5. 功能需求趋势

- **Provider 生态扩展**：Bedrock Mantle（#5363）、Kimi Responses 协议（#9338）、OpenCode 兼容性是三大热点，社区对新模型/新协议接入需求持续旺盛。
- **扩展 API 完善化**：`before_agent_start` 旁路（#5581）、acknowledged user-turn 投递（#9236）、steer 事件不一致（#8718）——SDK/embedding 用户要求扩展钩子语义完备且一致。
- **TUI 全屏模式打磨**：滚动速度（#9052）、footer 高度（#8919）、鼠标选区（#9310）、硬件光标（#9339）等细节问题集中出现，全屏模式进入精细化阶段。
- **性能与资源**：启动延迟预算（#7739）、grep OOM（#9276）、fork 死锁（#9350）显示性能/资源占用正成为核心议程。

## 6. 开发者关注点

- **第三方平台协议变更的脆弱性**：OpenCode 单方面强制 session header 一周内引发 4+ 个 Issue，暴露出 provider 归属 header 拼装路径分散（auth-only source）的架构债，建议统一 header 注入层。
- **流式与中止语义**：Esc 取消失败（#8823）、WebSocket 错误分类（#7444）、abort 后仍触发 compaction（#9340）、SSE 回退粘滞（#8125）——中止/重试路径的可靠性是高频痛点。
- **Compaction 边界条件**：会话损坏（#8667）、估算越界（#9337）说明压缩逻辑复杂度高，社区期待更多回归测试。
- **SDK/headless 用户增多**：多个 Issue 来自以 SDK 方式嵌入 pi 的团队（OOM、abort 语义、只读配置目录 #6406），对配置文件与运行时状态分离（#6415、#4212）的呼声上升。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报 · 2026-09-09

## 一、今日速览

oh-my-pi 发布 **v18.1.15**，修复 GitHub Copilot 在 Enterprise 域上的 OAuth 登录问题。社区讨论焦点集中在 DeepSeek 模型与编辑工具的兼容性缺陷、跨会话消息通信能力，以及多代理协调中的失败静默问题。此外，开发者 @jroth1111 提交了规模庞大的 "AI inference fabric" 24 部分 PR 栈，旨在重构网关路由与故障转移体系。

---

## 二、版本发布

### v18.1.15 ([@oh-my-pi/pi-ai](https://github.com/can1357/oh-my-pi))
- **修复**：GitHub Copilot 登录在 Enterprise 域上保留 GitHub 官方 Copilot CLI OAuth 应用。私有实例运行自己的 OAuth 注册表并拒绝 github.com 注册的 OpenCode 客户端，该客户端现在仅用于公开 github.com 登录（[#11285](https://github.com/can1357/oh-my-pi/issues/11285)）。

---

## 三、社区热点 Issues

### 1. DeepSeek v4 Flash 持续误解 edit 工具
[#9717](https://github.com/can1357/oh-my-pi/issues/9717) · 32 评论 · 👍 11
最热讨论帖。模型频繁发出错误编辑导致代码被意外删除，并因语法错误陷入“用错误编辑修复错误”的循环，需多次重试。涉及 prompting 与工具设计层面，是 DeepSeek 用户的普遍痛点。

### 2. 请求接入 command-code 作为模型提供商
[#1666](https://github.com/can1357/oh-my-pi/issues/1666) · 30 评论
用户希望复用 commandcode.ai 订阅模型，反映了社区对更多订阅型 provider 接入的持续需求。

### 3. Hub 消息仅限进程内，两个 OMP 主代理无法互通
[#7537](https://github.com/can1357/oh-my-pi/issues/7537) · 12 评论
`IrcBus` 与 `AgentRegistry` 为进程内单例，导致同机多终端/worktree 场景下主代理间完全隔离。作者指出 `IrcBridge.deliver` 已具备正确语义，改造路径清晰。与 [#8077](https://github.com/can1357/oh-my-pi/issues/8077)（跨会话消息，Claude Code parity）形成呼应。

### 4. 无头浏览器进程永不关闭，持续占用高 CPU
[#8246](https://github.com/can1357/oh-my-pi/issues/8246) · 11 评论（已关闭）
前端测试后遗留 11 个浏览器进程，CPU/GPU 资源被无限消耗。资源生命周期管理问题的典型案例。

### 5. Linux 启动连续崩溃：未捕获 EPIPE
[#10930](https://github.com/can1357/oh-my-pi/issues/10930) · 9 评论 · prio:p2
18.1.10 在 Linux 上三次连续启动崩溃，与用户级 LSP 配置存在时间关联，稳定性问题影响首用体验。

### 6. 建议桥接/实现 OpenAI Astra 压缩与历史方法
[#10920](https://github.com/can1357/oh-my-pi/issues/10920) · 9 评论
OpenAI 为 Codex 推出的 Astra 上下文保留与检索机制，社区希望 OMP 原生对接，属于长会话上下文管理的前沿方向。

### 7. Wake-turn 失败静默：被唤醒的子代理不通知唤醒方
[#11290](https://github.com/can1357/oh-my-pi/issues/11290) · 8 评论
被 `hub send` 唤醒的子代理若 wake turn 失败或无输出，唤醒方完全无感知，代理直接回到 idle。多代理系统的可观测性盲区。

### 8. DeepSeek 文本-only 视觉防护过reach，无退出选项
[#9697](https://github.com/can1357/oh-my-pi/issues/9697) · 8 评论（标记 wontfix）
按名称含 "deepseek" 强制剥离图片，覆盖了视觉增强代理和多模态模型（另见 [#9595](https://github.com/can1357/oh-my-pi/issues/9595)），自定义 models.yml 被静默覆盖。wontfix 标记引发争议。

### 9. `omp update` 受 mise minimum_release_age 阻塞
[#11316](https://github.com/can1357/oh-my-pi/issues/11316) · 3 评论 · 今日新报
新版发布 24 小时内无法通过 `omp update` 安装，因 mise 默认策略所致，直接影响升级时效。

### 10. tiny 模型角色回退行为不一致
[#11311](https://github.com/can1357/oh-my-pi/issues/11311) · 3 评论 · 今日新报
文档声明 `tiny` 回退到 `@smol`，但实际可能走硬编码优先链，`/models` 界面显示也与实际不符，属于配置语义一致性问题。

---

## 四、重要 PR 进展

### 1. 网关失败按 owner/disposition 分类（AI inference fabric 基石）
[#10133](https://github.com/can1357/oh-my-pi/pull/10133) · review:p2
已锁定为网关重试契约：建立失败 → 重试/故障转移的唯一权威映射，provider 状态优先于错误文案。

### 2. "AI inference fabric" 24 部分 PR 栈
[#10156](https://github.com/can1357/oh-my-pi/pull/10156)、[#10155](https://github.com/can1357/oh-my-pi/pull/10155)、[#10154](https://github.com/can1357/oh-my-pi/pull/10154) 等
@jroth1111 的巨型重构栈，涵盖：虚拟路由注册/查询 API（PUT/GET `/v1/routes/:id`）、JSON5 路由解析、SSE commit 前故障转移、RouteConductor pre-commit 尝试选择器、prompt-cache 命中记忆与首派发偏好、不健康目标预过滤等。是本周最重要的架构级改动。

### 3. web-search 识别余额/计费与中文额度耗尽错误
[#11309](https://github.com/can1357/oh-my-pi/pull/11309) · review:p1 · 今日新提
中转额度用尽时报错未被识别为额度类错误，导致搜索链不切换 provider 而直接抛 HTTP 原文。对中文用户尤为实用。

### 4. 会话在子代理运行期间保持 idle 状态
[#11188](https://github.com/can1357/oh-my-pi/pull/11188) · review:p0
修复 Herdr 集成下 idle/working 信号判断，最高审查优先级。

### 5. /usage 增加账户卡片与隐私控制
[#11208](https://github.com/can1357/oh-my-pi/pull/11208)
provider/账户卡片、账户合并/拆分、账户标签脱敏、配额条自定义标签，大幅增强用量视图。

### 6. 报告失败的 artifact 捕获，移除虚假恢复链接
[#11258](https://github.com/can1357/oh-my-pi/pull/11258) · review:p1
前台/后台执行中不完整的输出捕获现在如实上报，不再给出误导性的完整输出恢复链接。

### 7. /agents 列表选中行全宽高亮
[#11318](https://github.com/can1357/oh-my-pi/pull/11318) · 今日新提
宽屏终端下选中行跨全宽高亮，改善 hub 可读性，小而实用的 UX 改进。

---

## 五、功能需求趋势

1. **多代理协作与跨会话通信**：#7537、#8077、#11290 集中反映进程隔离、失败静默等问题，对标 Claude Code 的 cross-session messaging 是明确诉求。
2. **上下文管理与压缩**：#10920（Astra 方法）、#3294（跳过冗余阻塞式摘要）、#11095（notes-backed context window 加固）、#11266（prompt-cache prefix 冷启动）——长会话上下文效率是高频方向。
3. **Provider 生态扩展与兼容**：#1666（command-code）、#9697/#9595（DeepSeek 视觉策略）、#11270（Gemini 3.x 自定义 provider）、#11279（zai OAuth）。
4. **可靠性与故障恢复**：#11277（硬错误前可配置同模型重试）、#10133 系列 PR（失败分类与故障转移）。
5. **TUI/UX 打磨**：#11221（effort 级别显示）、#11182（Ubuntu 字符乱码）、#11263（/handoff 后 loader 卡住）、#11268（Antigravity 配额视图合并）。

---

## 六、开发者关注点

- **DeepSeek 集成质量**：edit 工具误用（#9717）与视觉防护过reach（#9697、#9595）叠加，DeepSeek 用户体验是当前最大痛点之一，且 wontfix 处理方式积累不满。
- **失败的可观测性**：wake-turn 静默失败（#11290）、artifact 虚假恢复链接（#11258）、`/handoff` UI 卡死（#11263）——多处“实际已失败但界面无感知”的问题，指向系统性的错误上报缺口。
- **平台特定稳定性**：Linux EPIPE 启动崩溃（#10930）、Windows ranged read 间歇性失败（#11284，3 天内 54 次）、zai Linux OAuth 卡死（#11279）。
- **升级与安装链路**：mise 24h 限制阻塞 `omp update`（#11316）、Nix flake 在有预编译二进制时仍源码重建（#10108）——分发链路的摩擦持续消耗用户耐心。
- **配置语义一致性**：RULES.md 项目级被用户级静默遮蔽（#4739）、tiny 角色回退不一致（#11311）、webSearchOrder 在 RPC 路径不生效（#11296），配置“写了但不生效”是反复出现的信任问题。

---

*数据来源：GitHub can1357/oh-my-pi，统计窗口为 2026-09-09 前的 24 小时（Issues 62 条更新、PR 210 条更新）。*

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

# DeepSeek Harness 社区动态日报
**日期：2026-09-09** | 数据来源：[deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)

---

## 1. 今日速览

今日核心动态是 **dsh-v0.1.5-alpha.1** 的发布：引入动态系统提示词（不破坏 KV Cache）和实验性右侧 Sidebar 两大新特性。过去 24 小时内无 Issue 与 PR 更新，社区讨论整体平稳，处于新版本发布后的观察期。

## 2. 版本发布

### dsh-v0.1.5-alpha.1
**链接**：[Releases · dsh-v0.1.5-alpha.1](https://github.com/deepseek-ai/deepseek-harness/releases)

**新增功能**
- **动态修改系统提示词**：支持在不破坏 KV Cache 的前提下修改系统提示词（需模型显式声明支持），贡献者 @tianyicui。这对长会话场景下调整模型行为的成本优化意义重大。
- **实验性右侧 Sidebar**：支持多标签、分栏与全屏；聊天文件链接和产出文件可直接在 Sidebar 打开，并移除原 Detail 面板，贡献者 @imccyu。

**体验优化**
- 改善 Web 输入框的菜单层级、提示文字与间距；会话统计拆分为两个可展开摘要，可分别查看轮次与速度、精确 Token 数据。

## 3. 社区热点 Issues

过去 24 小时内无 Issue 更新，本节今日省略。

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新，本节今日省略。

## 5. 功能需求趋势

由于今日无新增 Issue 数据，基于本次 Release 内容可观察到的官方优先级方向：

- **交互效率**：KV Cache 友好的提示词动态修改，反映社区对长上下文性能成本的持续关注。
- **界面信息密度**：Sidebar 多标签/分栏设计，指向用户对多任务并行工作流的需求。
- **可观测性**：Token 级统计的精细化（轮次、速度分开查看）。

## 6. 开发者关注点

- **KV Cache 有效性**是长会话场景的核心痛点，本次“不破坏 KV Cache 修改系统提示词”直接回应该需求，但需注意模型侧需显式声明支持，兼容性值得关注。
- **UI 结构调整**（移除 Detail 面板、引入 Sidebar）属于破坏性较强的改动，alpha 阶段使用者的工作流迁移成本需留意后续反馈。
- 新版本发布后通常伴随一波稳定性反馈，预计未来 1-2 天 Issue 活跃度将回升，建议持续关注。

---
*本报告基于 GitHub 公开数据自动汇总，如有遗漏请以官方仓库为准。*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*