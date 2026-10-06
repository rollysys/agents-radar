# AI CLI 工具社区动态日报 2026-10-06

> 生成时间: 2026-10-06 05:27 UTC | 覆盖工具: 11 个

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

**日期：2026-10-06 | 数据来源：各项目 GitHub 公开动态**

---

## 1. 生态全景

AI CLI 工具已从单一“终端对话助手”演化为覆盖 **本地 agent、云端会话、多智能体编排、企业网关接入** 的完整开发平台品类。头部工具（Claude Code、Codex、Gemini CLI）处于高密度快速迭代期，版本发布以“天”为单位，但稳定性回归问题（消息丢失、会话损坏、权限提示丢答）也随之频发。**MCP 生态兼容性**与**子代理/多智能体可靠性**是当前全行业两大共同痛点。同时，**Windows/WSL 平台体验欠账**几乎出现在所有工具的 Issue 热榜上，成为行业性短板。

---

## 2. 各工具活跃度对比

| 工具 | 热点 Issues（今日提及） | 重要 PR | Release | 今日焦点 |
|---|---|---|---|---|
| **Claude Code** | 10 | 1 | ✅ v2.1.291（连发两版） | 紧急回归修复；LSP 插件配置失效发酵 |
| **OpenAI Codex** | 10 | ~20 合入 | ✅ v0.160.1 稳定版 + 0.162.0-alpha.16 | Windows 沙箱、partial answer 协议 |
| **Gemini CLI** | 10 | 10 | ✅ v0.64.0-nightly | 子代理可靠性 P1 集中爆发 |
| **GitHub Copilot CLI** | 10 | 0（1 疑似垃圾提交） | ✅ 4 个补丁（v1.0.92→1.0.93-1） | Entra MCP 凭据续期、`copilot config` |
| **Qwen Code** | 10 | 10+ | ✅ v0.25.0 | Managed Agent 双路径架构（46 评论） |
| **OpenCode** | 10 | 10 | ❌ 无 | V2 迁移功能缺口、压缩无限循环 |
| **Pi** | 10 | 10 | ✅ v1.0.3 / v1.0.4（连发两版） | MCP 工具通配符过滤、Azure Foundry |
| **oh-my-pi** | 10 | 12+ | ❌ 无 | 多账号配额调度、issue→PR 闭环极快 |
| **DeepSeek TUI / Codewhale** | 10 | 10 | ❌ 无（0.10.1 收尾中） | 架构解耦 EPIC-005、可靠性审计 |
| **Kimi Code / DeepSeek Harness** | — | — | — | 无活动 |

**观察**：oh-my-pi 单日 306 个 PR 更新，是社区驱动型项目中的活跃度冠军；Codex 约 20 个 PR 合入，官方工程投入最猛；Copilot CLI 以 Release 交付为主、社区 PR 近乎为零，呈现“闭门快跑”模式。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **MCP 生态健壮性** | Claude Code（#88128 协议严格校验致工具静默丢弃）、Codex（#30408 进程泄漏 9GB+、#20503 OAuth scope）、Copilot CLI（#1803 resources 原语缺失、#4991 OAuth 失败）、OpenCode（#26195 OAuth 浏览器不弹、#53400 名称超限静默丢弃）、Gemini CLI（#24246 128 工具上限） | OAuth 认证、协议版本协商、资源回收、工具裁剪 |
| **Windows/WSL 一等公民** | Claude Code（#92771 libuv 修饰键、#75654 更新横幅）、Codex（#41463 WSL 阻断 63 评论、#44503、#48324）、Pi（#7547 官方征集帖）、Qwen（#12394 cua-sdk 未签名 P1）、Codewhale（#6827 进程清理） | 全行业性欠账，多家已列入主线 |
| **上下文压缩正确性** | Claude Code（#99860 未经同意压缩）、OpenCode（#15533 无限循环 7 个月未修）、Qwen（#13432 忽略服务端 ceiling）、Pi（#9075 thinking 挤占输出）、Copilot CLI（#5054 压缩超时） | 压缩时机、质量、上限计算是共性难题 |
| **子代理/多智能体可靠性** | Gemini CLI（#22323 误报成功、#21409 挂起）、Qwen（#8097 后台协调缺陷、#13463 取消重放）、Codex（#51272 后台唤醒）、OpenCode（#52837 门控） | 状态上报可信度、取消语义、跨端同步 |
| **成本/配额透明度** | Codex（#46023 单任务 2.42 亿 tokens）、Pi（#9980 成本偏差 2-3 倍）、oh-my-pi（#14551 配额锁死、#14495 缓存破坏） | 计费准确性、prompt cache 稳定性、多账号调度 |
| **企业/网关接入** | Claude Code（#99857 自定义 header）、Copilot CLI（#4959 托管模型不生效）、OpenCode（PR #52734 NTLM 代理认证）、Pi（Azure Foundry） | 代理认证、策略下发、BYOK |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 插件/Mod 生态、hooks 可观测性、安全审查边界 | 深度 Anthropic 生态开发者 | TypeScript，闭源核心 + 插件市场，权限系统精细化 |
| **Codex** | 沙箱安全（bubblewrap 加固）、流式协议、桌面端 | OpenAI 全家桶用户、Windows/远程场景投入大 | Rust 重写，partial answer 协议自研 |
| **Gemini CLI** | 子代理体系、AST 感知代码理解、token 高效检索 | 开源贡献者、Linux/bash 重度用户 | 开源 TypeScript，社区贡献活跃 |
| **Copilot CLI** | 企业管控（Entra/托管模型）、BYOK、云端会话 | GitHub 企业客户 | 官方主导、Release 驱动、社区 PR 极少 |
| **Qwen Code** | Managed Agent 平台化（K8s 运行时、跨节点传输） | 平台构建者、自托管/本地模型用户 | 架构提案驱动（#12380），契约先行开发 |
| **OpenCode** | 多 provider、插件门控、V2 迁移 | provider 无关的开源用户 | V1→V2 大迁移期，功能缺口明显 |
| **Pi / oh-my-pi** | MCP 精细管理、多账号调度、浏览器自动化、durable 执行 | 重度个人/小团队 power user | 极致迭代速度，issue→PR 当日闭环 |
| **Codewhale (DeepSeek TUI)** | 架构解耦、可靠性审计、自定义网关 | 自建网关/DeepSeek 中继用户 | Rust Engine 统一化，社区静态审计驱动 |

---

## 5. 社区热度与成熟度

**成熟度梯队**：

- **成熟稳定期**：Claude Code、Codex——版本节奏快但以回归修复为主，问题集中在边缘场景（协议兼容、平台适配），核心 loop 已稳定。
- **快速上升期**：Gemini CLI、Qwen Code——架构级大讨论（Managed Agent、AST EPIC）占比高，正处于平台化扩张。
- **转型阵痛期**：OpenCode——V2 迁移导致功能断层 + 发布说明缺失引发信任问题（#52184，13 👍）。
- **精品小而美**：Pi、oh-my-pi——用户量小于头部，但响应速度和质量密度突出（oh-my-pi 当日 issue 当日修复 PR）。
- **早期/沉寂**：Kimi Code、DeepSeek Harness 无活动，Codewhale 处于补丁收尾阶段。

**社区情绪**：Codex Windows 用户不满情绪最明显（多条 Issue 超月未修）；OpenCode 社区对透明度批评集中；Pi/oh-my-pi 社区满意度最高。

---

## 6. 值得关注的趋势信号

1. **“静默失败”成为新的质量红线**：MCP 工具被静默丢弃（Claude Code、OpenCode）、插件加载错误被吞、错误帧绕过重试预算——多家社区同时提出“失败要说话”。*参考价值*：选型时应考察工具的错误可观测性，自研 agent 时务必显式上报降级/丢弃事件。

2. **取消/恢复语义是下一个工程深水区**：Qwen 的取消重放（#13463）、Claude Code 的会话消息丢失、OpenCode 的循环不终止，均指向同一根因——长会话生命周期的状态机复杂度失控。*参考价值*：会话持久化设计需将“取消意图”作为一等公民建模。

3. **安全边界从“一刀切”走向“可配置门控”**：Claude Code 密码拦截争议（#78160）、security-guidance 跳过密钥文件（PR #96434）、OpenCode 的 skip 字段、Codex 沙箱逃逸防护。*参考价值*：安全默认值 + 显式豁免通道正在成为行业共识设计模式。

4. **成本工程显学化**：prompt cache 命中率、压缩质量、多账号配额调度、真实计费数据（Pi PR #10286）——当单任务可烧 11% 周配额时，成本优化已从附属功能变为核心竞争力。

5. **本地/自托管模型支持回归**：Qwen 的 llama.cpp 适配、Codewhale 的私有中继模型识别、Gemini CLI 的 OS 级沙箱提案——企业数据主权诉求推动 provider 多元化。

6. **桌面端 + 跨端同步是下一战场**：Codex 桌面端问题集中爆发、Claude Desktop 数据恢复、Qwen 桌面端同步发布——CLI 工具正在向“CLI + Desktop + 移动端会话接力”的完整形态演进。

**给技术决策者的一句话**：若重视企业管控选 Copilot CLI，重视生态成熟选 Claude Code，重视开源可组合选 Gemini CLI/OpenCode，重度 power user 可关注 Pi/oh-my-pi 的高迭代密度，构建自有多智能体平台则 Qwen Code 的 Managed Agent 架构最具参考价值。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
（数据截止 2026-10-06，来源：github.com/anthropics/skills）

> 说明：本期抓取的 PR 数据中评论数均为 undefined，故“热门”排序依据 PR 持续活跃度（更新跨度、关联 Issue 讨论热度）综合评估；Issues 部分有明确评论数。

---

## 一、热门 Skills 排行（PR）

| # | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | **skill-creator 触发评估修复** [PR #1298](https://github.com/anthropics/skills/pull/1298) | 修复触发评估误报、Windows select() 失败、运行时错误被误判为非触发等问题 | 与 Issue #556（0% 触发率）、#1383（Windows 触发评估损坏）高度关联，是 skill-creator 工具链最受关注的修复 | OPEN，6月起持续更新 |
| 2 | **mcp-builder MCP v2 兼容修复** [PR #1742](https://github.com/anthropics/skills/pull/1742) | 支持 mcp>=2 的 `streamable_http_client` 重命名与自定义 Header | 修复 Issue #1668；同目录 evaluation.py 存在 0/N 评分 bug（Issue #1390），mcp-builder 是当前 bug 密度最高的官方 Skill | OPEN |
| 3 | **docx 修订标记系列修复** [PR #1792](https://github.com/anthropics/skills/pull/1792)、[PR #541](https://github.com/anthropics/skills/pull/541)、[PR #1734](https://github.com/anthropics/skills/pull/1734) | LibreOffice 超时正确报错、修复 w:id 冲突导致的文档损坏、检测孤儿批注 | docx 是用户量最大的文档 Skill，OOXML 共享 ID 空间问题反复出现 | 均 OPEN |
| 4 | **proofcore-contract-auditor** [PR #1771](https://github.com/anthropics/skills/pull/1771) | Solidity/Rust 智能合约静态分析 + TON 链上审计证明锚定 | Web3 方向新 Skill，但因涉及外部协议被社区警惕（见 Issue #492 命名空间信任问题） | OPEN |
| 5 | **md2video-audio** [PR #1703](https://github.com/anthropics/skills/pull/1703) | Markdown → Marp 幻灯片 → 带真人配音的 MP4 视频，零成本方案 | 内容创作自动化的代表需求，9 月提交后持续更新 | OPEN |
| 6 | **pyxel 复古游戏开发** [PR #525](https://github.com/anthropics/skills/pull/525) | Pyxel 复古游戏的创建、调试、无头运行与帧检查 | 存活 7 个月仍在更新，是“长跑型”社区 PR 的典型 | OPEN |
| 7 | **document-typography** [PR #514](https://github.com/anthropics/skills/pull/514) | 修复 AI 生成文档的孤行、寡段、编号错位等排版问题 | 切中“AI 生成文档质量”痛点，用户感知强但长期未合并 | OPEN |
| 8 | **blast-radius** [PR #1776](https://github.com/anthropics/skills/pull/1776) | 批量/破坏性写操作前的“影响面”检查清单 | 安全治理方向的新锐提案，与 agent-governance 提案（Issue #412）呼应 | OPEN |

---

## 二、社区需求趋势（Issues 提炼）

1. **信任与安全边界**（[Issue #492](https://github.com/anthropics/skills/issues/492)，43 条评论，本期最热）：社区 Skill 冒用 `anthropic/` 命名空间造成信任滥用，呼唤签名/命名空间隔离机制；衍生议题包括 eval-viewer XSS（#1394）、SharePoint 权限下沉 SKILL.md 的安全顾虑（#1175）。
2. **组织级分发与共享**（[Issue #228](https://github.com/anthropics/skills/issues/228)，16 条评论）：企业用户强烈要求组织内 Skill 库、直接分享链接，替代当前“下载 .skill 走 Slack”的原始流程。
3. **Skill 质量工程/评估工具链**：触发率失效（#556）、benchmark 静默失败（#1383）、评估器伪造错误（#1390）——社区需要可靠的 Skill 触发与评测基础设施。
4. **Token 效率与上下文管理**：claude-api 单次注入 ~156k token 打爆上下文（#1487）、插件重复安装（#189）、compact-memory 紧凑记忆符号提案（#1329）。
5. **Agent 治理与输出质量门禁**：agent-governance（#412）、三段式推理质量门管线（#1385）、skill-quality/security-analyzer 元技能（PR #83）。
6. **企业环境适配**：AWS Bedrock 支持（#29）、HPC/Slurm 集群操作（PR #1615）。

---

## 三、高潜力待合并 Skills（活跃但未合并）

- **PR #1742** mcp-builder 修复 —— 修复明确 Issue #1668，且有 #1390 的 bug 背景，合并动机最强。
- **PR #1792** docx LibreOffice 超时报错修复 —— 小而明确的正确性修复，落地概率高。
- **PR #1681** skill-creator package_skill.py 直接执行修复 —— 修复 ModuleNotFoundError，属低风险工程质量修复。
- **PR #1730** claude-api 失效 URL 替换 —— 纯文档 URL 修正（已 curl 验证 200），10 月仍在更新，接近合并。
- **PR #723** testing-patterns —— 覆盖完整测试栈，3 月提交至 9 月仍活跃，维护意愿强。
- **PR #1245** notion-spec-to-implementation —— Notion 规格转可执行任务，贴合工作流自动化趋势。

---

## 四、生态洞察（一句话总结）

**社区最集中的诉求已从“贡献更多 Skill”转向“让 Skill 可信、可分发、可评估”——即命名空间安全隔离、组织级共享机制、可靠的触发/评测工具链，以及控制 Skill 的 token 开销。**

---

# Claude Code 社区动态日报（2026-10-06）

## 📰 今日速览

Claude Code 今日连发两个版本，v2.1.291 紧急修复了 v2.1.290 云端会话权限提示丢答和 v2.1.288 退出时会话末尾消息丢失的两个回归问题，建议尽快升级。社区方面，LSP 插件 marketplace.json 配置失效（👍73）持续发酵，Fable 5 模型“回合静默”问题也引发大量讨论。今日新增多条高质量 bug 报告，集中于 Desktop 应用、MCP 协议和权限系统。

---

## 🚀 版本发布

### v2.1.291（最新）
- 修复 v2.1.290 引入的回归：云端会话中权限提示（permission prompts）的应答可能丢失
- 修复 v2.1.288 引入的回归：退出时会话最后几条消息可能丢失
- 🔗 [Release 链接](https://github.com/anthropics/claude-code/releases)

### v2.1.290
- Mod 的 `turn.step` hook 新增 `serverToolUses` 字段：暴露 API 自行执行的工具调用（advisor），含 id、名称、输入及起止时间
- 插件 hook 的 `tool.check` 事件新增 `agentId`，可区分子代理与主会话的权限检查
- 🔗 [Release 链接](https://github.com/anthropics/claude-code/releases)

---

## 🔥 社区热点 Issues

1. **[#15148](https://github.com/anthropics/claude-code/issues/15148)** — LSP 插件的 `lspServers` 配置在 marketplace.json 加载时不被处理，导致 typescript-lsp、pyright-lsp 等插件装了但不能用。👍73、24 条评论，是本期最受关注的插件生态问题。

2. **[#74558](https://github.com/anthropics/claude-code/issues/74558)** — Fable 5 模型回合中途的助手文本间歇性被作为 summarized thinking 块投递，回合“看起来静默”。20 条评论，新模型稳定性问题。

3. **[#66010](https://github.com/anthropics/claude-code/issues/66010)** — 隐私问题：GMail MCP 自 6 月起将 URL 重写为带 Google 追踪参数的链接。17 条评论，涉及数据隐私。

4. **[#78160](https://github.com/anthropics/claude-code/issues/78160)** — 一刀切禁止输入密码破坏了合法的开发/测试流程（本地测试账号登录）。👍20，社区希望提供权限门控的可选开关。

5. **[#85209](https://github.com/anthropics/claude-code/issues/85209)** — 重装 Claude Desktop 后项目/会话侧栏为空，本地历史明明完好。Desktop 数据恢复问题。

6. **[#75654](https://github.com/anthropics/claude-code/issues/75654)** — Windows 上更新提示横幅检查 npm latest 却建议 winget 升级，winget 清单滞后导致横幅永久存在。

7. **[#87633](https://github.com/anthropics/claude-code/issues/87633)** — MSIX 静默更新后，本地 filesystem MCP server 在 Cowork 会话中不可用（draft-07 outputSchema 被拒），且没有任何版本能同时通过两项检查。

8. **[#88128](https://github.com/anthropics/claude-code/issues/88128)** — MCP 协议 2026-07-28 版：`ttlMs`/`cacheScope` 省略时 `tools/list` 和 `resources/list` 被判为非法，一个坏字段导致整个 server 的工具被丢弃。

9. **[#92771](https://github.com/anthropics/claude-code/issues/92771)** — Windows 上 libuv 的 console-to-VT 转换丢弃修饰键，Shift+Enter 与 Enter 无法区分，多行输入绑定失效。深挖到 libuv 层面的高质量报告。

10. **[#99837](https://github.com/anthropics/claude-code/issues/99837)** — 今日新增：登录状态下反复报 403 "Access to this model requires an access grant"，重登无效。

---

## 🔧 重要 PR 进展

今日仅有一条 PR 更新：

- **[#96434](https://github.com/anthropics/claude-code/pull/96434)** — security-guidance 改进：安全审查不再读取被 deny/ask 规则覆盖的文件及常见密钥文件（`.env`、密钥库等）；审查子代理继承 `disallowed_tools` 规则且无 shell 权限。可用 `SG_SKIP_SECRET_FILES=0` 关闭。修复 [#96276](https://github.com/anthropics/claude-code/issues/96276)。
  - 意义：显著收紧安全审查的文件访问边界，防止审查过程本身泄露敏感信息。

---

## 📈 功能需求趋势

1. **插件/Mod 生态健壮性**：LSP 插件配置失效（#15148）、Mod 面板布局能力（#99449）、prompt.edit hook 时序（#99863）——插件开发者对 API 稳定性诉求强烈。
2. **Desktop 应用成熟度**：MSIX 打包引发的路径虚拟化、更新横幅、隐私权限重复弹窗（#99408）、spawn_task 会话不继承 effortLevel（#99862）等问题集中出现。
3. **权限系统精细化**：从“一刀切”安全策略转向可配置、可授权的方向（#78160、#99865、#99858）。
4. **长会话质量**：自动压缩（compaction）未经用户同意且降低质量（#99860）、Bedrock 超长输入卡死（#99859）。
5. **企业/网关环境**：LLM 网关下 `ANTHROPIC_CUSTOM_HEADERS` 未透传（#99857）、GitHub connector 访问私有仓库失败（#99861/#99856）。

---

## 💡 开发者关注点

- **尽快升级到 v2.1.291**：两个回归修复直接影响会话数据完整性。
- **MCP 协议兼容性**是当前重灾区：2026-07-28 协议版本的严格校验导致多个第三方 server 被静默禁用。
- **Windows 用户体验**欠账较多：TUI 按键、Git Bash 会话死亡（#95009）、MSIX 路径虚拟化等问题长期未解。
- **安全与效率的平衡**是核心矛盾：密码硬拦截、compaction 自动触发等设计引发“默认安全 vs 开发者自主权”的持续讨论。
- **hooks/subagent API 的可见性**需求上升：`serverToolUses`、`agentId` 等新字段说明官方正在响应，但 `subagentStatusLine` 覆盖不全（#87716）显示仍有差距。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-10-06）

## 1. 今日速览

Codex 今日发布 **v0.160.1 稳定版**，修复了远程 stdio MCP 服务器在 Unix 主机上启动 Windows 执行器时的环境变量保留问题（`SYSTEMROOT`/`TEMP`/`TMP`），同时推进到 **0.162.0-alpha.16** 内测版本。仓库单日更新活跃，约 20 个 PR 合入，涵盖 partial answer 流式协议、Windows 沙箱服务、沙箱安全加固等方向。Windows 平台相关 Bug（WSL、桌面端配对、沙箱）依然是社区反馈的重灾区。

---

## 2. 版本发布

| 版本 | 说明 |
|---|---|
| **rust-v0.160.1**（稳定版） | Bug Fix：在显式配置远程环境变量时，启动远程 stdio MCP 服务器会保留 `SYSTEMROOT`、`TEMP`、`TMP`，使 Unix 主机能保留 Windows 执行器的启动环境（[PR #51121](https://github.com/openai/codex/pull/51121)） |
| rust-v0.161.0-alpha.13.1 | Alpha 版本迭代 |
| rust-v0.162.0-alpha.15 / alpha.16 | Alpha 版本迭代 |

---

## 3. 社区热点 Issues（Top 10）

1. **[#41463](https://github.com/openai/codex/issues/41463)** Windows + WSL 无法创建项目（AbsolutePathBuf 反序列化缺少 base path）— 63 评论 / 34 👍，WSL 用户的阻断性问题，持续一个多月未解，是当前最热 Issue。
2. **[#25271](https://github.com/openai/codex/issues/25271)** Computer Use 在 Windows 上无法获取 Chrome URL，即使在新标签页也失败 — 51 评论，桌面端浏览器集成核心功能失效。
3. **[#30408](https://github.com/openai/codex/issues/30408)** MCP 服务器进程泄漏：每个线程生成完整 MCP 进程集且从不清理，累计 RSS 超 9GB — 49 评论，严重的资源泄漏，长期运行用户影响大。
4. **[#48324](https://github.com/openai/codex/issues/48324)** Windows 桌面端 Codex 无法加载组织设置，Composer 无法启动（Web/CLI 正常）— 41 评论，完全阻断使用。
5. **[#41849](https://github.com/openai/codex/issues/41849)** VS Code Remote-SSH 重连后残留 app-server 占用 thread writer，新会话报 “open in another app” — 14 👍，Remote 开发场景的典型痛点。
6. **[#47429](https://github.com/openai/codex/issues/47429)** WSL2 下 `codex sandbox` 因 `/mnt/wslg/distro` 被判定为不支持的挂载而失败 — 22 👍，沙箱与 WSL2 兼容性问题。
7. **[#40852](https://github.com/openai/codex/issues/40852)** macOS 桌面端 code-mode 任务缺失 `send_message_to_thread` 工具 — 19 评论 / 11 👍，多线程协作能力退化。
8. **[#44503](https://github.com/openai/codex/issues/44503)** Windows 上 app-server 守护进程因 Job Object 错误启动失败（Modern Standby 系统）— 18 评论，发生在模型交互之前的底层故障。
9. **[#20503](https://github.com/openai/codex/issues/20503)** MCP OAuth 登录在动态客户端注册时未包含 scopes，导致无法登录 Fastmail 等远程 MCP — 12 👍，影响 MCP 生态接入。
10. **[#2379](https://github.com/openai/codex/issues/2379)** TUI 输入框 Undo/Redo（Cmd-Z）功能请求 — 33 👍，2025 年 8 月提出的经典需求至今未实现，呼声持续。

---

## 4. 重要 PR 进展（Top 10）

1. **[#51241](https://github.com/openai/codex/pull/51241)** 新增 `partial_answer` 消息阶段，让流式部分答案与最终答案区分表示 — 配套 [#51249](https://github.com/openai/codex/pull/51249)、[#51260](https://github.com/openai/codex/pull/51260)，今日最核心的协议演进。
2. **[#51256](https://github.com/openai/codex/pull/51256)** Windows 沙箱服务在注册 Core 安装期间自动启动，修复配置路径判定不可用的问题。
3. **[#51211](https://github.com/openai/codex/pull/51211)** 安全加固：拒绝 PATH 中位于沙箱可写目录的 bubblewrap 可执行文件，防止沙箱逃逸。
4. **[#51257](https://github.com/openai/codex/pull/51257)** 修复 Windows PowerShell 下安装器校验和验证（PowerShell 7 模块路径导致 `Get-FileHash` 加载失败）。
5. **[#51253](https://github.com/openai/codex/pull/51253)** Fast 与 Ultra Fast 模式策略独立开关，新增 `features.ultrafast_mode` 特性标志。
6. **[#51209](https://github.com/openai/codex/pull/51209)** JavaScript code mode 新增 BM25 排序的工具发现（`tools.tool_search`），面向工具规模扩大场景。
7. **[#51203](https://github.com/openai/codex/pull/51203)** `apply_patch` 无条件保留原文件行尾（CRLF/LF），不再默认归一化为 LF。
8. **[#51220](https://github.com/openai/codex/pull/51220)** OTLP 遥测支持 `OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE`，兼容需要 cumulative 指标的后端。
9. **[#51230](https://github.com/openai/codex/pull/51230)** 会话查找分页稳定化并上报列举失败，修复时间戳相同线程被跳过的问题。
10. **[#51221](https://github.com/openai/codex/pull/51221)** 引入 `TurnEnvironmentRequest`，将环境请求与运行时选择解耦，改善环境继承语义。

其他值得注意的还有：[#51235](https://github.com/openai/codex/pull/51235)（移除 TUI 模型选择器默认标签）、[#51215](https://github.com/openai/codex/pull/51215)（MCP 工具目录大小遥测）、[#51200](https://github.com/openai/codex/pull/51200)（Bazel 升级至 9.2.0）。

---

## 5. 功能需求趋势

- **Windows / WSL 平台支持**：今日热度最高的方向，涉及项目创建、沙箱、配对、桌面端加载等多个环节（#41463、#47429、#44503、#48324）。
- **dots / 远程任务委托**：dot 恢复本地任务、跨端（Android ↔ 桌面）状态同步问题集中出现（#49482、#50440、#49566、#50671），是新兴高频领域。
- **TUI 可定制性**：语义化配色（#21130，29 👍）、输入撤销/重做（#2379，33 👍）长期高票需求仍未落地。
- **MCP 生态健壮性**：进程泄漏（#30408）、OAuth scope（#20503）、工具目录体积遥测（PR #51215）。
- **Agent 异步协作**：后台命令完成后唤醒 agent（#51272）、部分答案流式语义（PR #51241 系列）。

---

## 6. 开发者关注点（痛点总结）

1. **Windows 一等公民地位不足**：大量 Windows/WSL 桌面端阻断性 Bug 长期 OPEN，社区对官方响应速度不满情绪明显（多条 Issue 超一个月未修复）。
2. **资源管理缺陷**：MCP 进程泄漏（9GB+ RSS）、会话/线程生命周期清理不彻底，影响长时间运行稳定性。
3. **会话与状态持久化**：权限模式不持久（#29915）、重启后聊天记录消失（#43345）、Remote-SSH 残留会话锁（#41849）。
4. **配额与成本透明度**：单任务 2.7 小时消耗 2.42 亿 tokens、烧掉 11% 周配额（#46023），子代理 token 消耗引发成本担忧。
5. **配置与可观测性**：策略拒绝缺乏规则诊断（#50979）、prompt-cache 复用支持（#21796）反映高级编排用户对可调试性的诉求。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-06）

## 📌 今日速览

今日 Gemini CLI 发布 v0.64.0-nightly 夜间版本，社区贡献持续活跃。Issue 讨论焦点集中在**子代理（Subagent）可靠性**——包括状态误报、任务挂起、配置不生效等多个 P1 级问题。PR 方面有多项安全与稳定性修复合并，其中 grep 命令注入防护和配额重试逻辑修复值得升级关注。

---

## 🚀 版本发布

- **v0.64.0-nightly.20261006.gfb972b2f8**（自动化夜间构建，由 #29645 版本提升 PR 触发）
  [Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.64.0-nightly.20261005.gfb972b2f8...v0.64.0-nightly.20261006.gfb972b2f8)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关注理由 |
|---|-------|---------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) **Subagent 达到 MAX_TURNS 后误报为 GOAL 成功** | 🔴 P1。子代理在未做任何分析就触顶退出时仍上报 `success`，严重误导主代理决策，13 条评论反映影响面广 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) **通用代理挂起** | 🔴 P1。转交 generalist agent 后永久挂起（用户等待长达 1 小时），8 👍 显示痛点强烈，需 instruct 规避 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) **零依赖 OS 沙箱 + bash 原生能力利用** | 大型增强提案：让 Gemini 3 发挥原生 bash 用户能力（grep/sed/awk 链式调用），同时保证安全性 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) **AST 感知文件读取/搜索/映射 EPIC** | 评估 AST 工具能否精确读取方法边界、减少 token 噪音，配套子任务 #22746、#22747 推进中 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) **Gemini 主动调用 skills/子代理过少** | 自定义 skill 和子代理几乎不被自主调用，需显式指令才触发，影响工作流实用性 |
| 6 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) **browser 子代理在 Wayland 下失败** | 🔴 P1。Linux Wayland 用户浏览器自动化完全不可用 |
| 7 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) **Browser Agent 忽略 settings.json 配置** | maxTurns 等全局/项目配置被完全忽略，配置合并链路存在缺陷 |
| 8 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) **工具数 > 128 时触发 400 错误** | 大量 MCP/skill 场景易触顶，需智能裁剪工具作用域 |
| 9 | [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) **get-shit-done output hook 导致崩溃** | 🔴 P1。输出 hook 在打印摘要阶段直接 crash CLI |
| 10 | [#19561](https://github.com/google-gemini/gemini-cli/issues/19561) **"Tactful Extraction" 节省 token 的精准读取** | 针对每轮 ~36.6k token 基线、大文件读取"灌水"问题，建立 grep → 精读的分级检索策略 |

---

## 🔧 重要 PR 进展（Top 10）

**已合并/关闭：**

1. [#29435](https://github.com/google-gemini/gemini-cli/pull/29435) **修复会话退出时进程挂起** — stdin 清理 + MCP transport 解构，防止 Node 事件循环无法退出
2. [#29436](https://github.com/google-gemini/gemini-cli/pull/29436) **修复引号内 `@` 导致 100% CPU** — P1。粘贴含 `"@scope/pkg"` 代码触发正则灾难性回溯，管道/非 TTY 场景必现
3. [#29440](https://github.com/google-gemini/gemini-cli/pull/29440) **web-fetch 引用定位使用 UTF-8 偏移** — 修复非 ASCII/emoji 内容引用错位

**审核中（Open）：**

4. [#29536](https://github.com/google-gemini/gemini-cli/pull/29536) **🔐 grep 防命令行参数注入（CWE-88）** — 强制使用 `-e` 分隔搜索模式，安全加固
5. [#29532](https://github.com/google-gemini/gemini-cli/pull/29532) **尊重 RetryInfo 延迟为 0 的情况** — 修复普通限流被误判为终态配额错误，导致不必要的模型降级
6. [#29643](https://github.com/google-gemini/gemini-cli/pull/29643) **重新选择 Google 登录时清除缓存凭证** — 解决无法切换账号/重新认证的问题
7. [#29644](https://github.com/google-gemini/gemini-cli/pull/29644) **恢复终端宽度变化的防抖 UI 刷新** — P1。修复水平 resize 时的渲染问题
8. [#29612](https://github.com/google-gemini/gemini-cli/pull/29612) **强制终态 user turn 不变量** — 修复 `/rewind`、中断流后 API 请求格式非法
9. [#29641](https://github.com/google-gemini/gemini-cli/pull/29641) **遥测支持自定义 OTLP headers** — 对接 Grafana Cloud/Honeycomb/Datadog 等认证端点，企业可观测性增强
10. [#29647](https://github.com/google-gemini/gemini-cli/pull/29647) / [#29635](https://github.com/google-gemini/gemini-cli/pull/29635) **CI 稳定性改进** — pwsh 缺失时跳过 Windows 测试、非 TTY 环境 mock isHeadlessMode

---

## 📈 功能需求趋势

1. **子代理体系深化**（最热方向）：并行子代理协作与共享内存（#18287）、子代理轨迹通过 `/chat share` 可见（#22598）、本地子代理 Sprint 1（#20195）、settings.json 发现子代理（#18285）
2. **代码理解智能化**：AST 感知读取/搜索（#22745/#22746/#22747）、token 高效检索（#19561）
3. **任务管理持久化**：以文件 CRUD 替代 in-context WriteToDo，对抗 context rot（#18836、#21000）
4. **安全与沙箱**：OS 级零依赖沙箱（#19873）、破坏性操作防护（#22672）
5. **浏览器代理健壮性**：会话接管与锁恢复（#22232）、配置覆盖（#22267）
6. **终端体验**：resize 无闪烁渲染（#21924）、agent 自我认知能力（#21432）

---

## ⚠️ 开发者关注点

- **子代理可靠性是最大痛点**：状态误报（#22323）、挂起（#21409）、bug 报告缺上下文（#21763）——子代理黑盒化让调试极其困难
- **工具数量上限**（#24246）：重度 MCP/自定义 skill 用户易撞 128 工具墙
- **工作区污染**：模型在随机目录生成临时脚本，清理成本高（#23571）
- **Windows/非 TTY 环境支持薄弱**：本周多个 CI 相关 PR 均指向此短板
- **认证与配额体验**：限流误判、凭证缓存、账号切换问题集中出现，影响企业场景

> 💡 **建议**：受 CPU 挂起（#29434）或进程退出问题困扰的用户，可关注近期 nightly 版本合并的修复；重度 bash 工作流用户值得持续追踪 #19873 沙箱方案。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-06 | 数据来源：github.com/github/copilot-cli**

---

## 1. 今日速览

过去 24 小时 Copilot CLI 密集发布多个补丁版本（v1.0.92 → v1.0.93-1），重点修复 Entra 保护的 MCP 服务器凭据静默续期问题，并新增 `copilot config` 子命令与 Ctrl+E 环境切换器。社区方面，MCP 连接稳定性（macOS 重启后不可用、OAuth 失败）与 BYOK/企业托管模型配置成为讨论焦点，热度最高的多 BYOK 模型支持 Issue（#3282，👍 31）已正式关闭，暗示官方已有规划或落地。

---

## 2. 版本发布

**v1.0.93-1 / v1.0.93-0**（最新补丁）
- 修复：禁用沙箱时，预热的语言服务器在 LSP 请求间保持运行
- 修复：点击被截断的紧凑 shell 命令可展开显示
- 其余修复与变更

**v1.0.92-5**
- 改进：Microsoft Entra 登录后可选择账户，`/logout` 可登出对应 OAuth 会话
- 修复：Entra 保护的 MCP 服务器可静默续期 access-token-only 凭据

**v1.0.92**（2026-10-05）
- 新增 `copilot config` 子命令：list / read / set / remove 设置项
- 新增会话前 Ctrl+E 环境选择器，可在本地/云端运行之间切换
- Entra 保护的 MCP 服务器支持凭据静默续期
- 移除遗留的 HTTP+SSE MCP 连接支持

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 状态 | 关注度 | 为什么重要 |
|---|-------|------|--------|-----------|
| 1 | [#3282 多 BYOK 模型支持](https://github.com/github/copilot-cli/issues/3282) | 🟢 CLOSED | 👍 31 / 💬 13 | BYOK 用户长期痛点：切换模型需退出会话改环境变量。今日关闭，或已在路线图中解决 |
| 2 | [#4998 macOS 更新后 `.mcp-writer.binding` 残留旧设备 ID 导致不可用](https://github.com/github/copilot-cli/issues/4998) | 🔴 OPEN | 👍 9 / 💬 9 | 系统更新即全面瘫痪（1.0.90-3 受影响），属严重可用性缺陷，9 人复现 |
| 3 | [#4775 Mission Control 仪表盘链接 404](https://github.com/github/copilot-cli/issues/4775) | 🔴 OPEN | 💬 9 | 云端会话管理入口路径错误（`/copilot/tasks/` vs `/agents/tasks/`），影响远程工作流信任度 |
| 4 | [#3399 BYOK 自定义 HTTP 头](https://github.com/github/copilot-cli/issues/3399) | 🟢 CLOSED | 👍 14 / 💬 7 | 企业网关普遍要求 X-Tenant-ID 等头，BYOK 企业落地的前置条件 |
| 5 | [#4505 恢复会话后连接 item ID 过期报 400](https://github.com/github/copilot-cli/issues/4505) | 🟢 CLOSED | 💬 6 | 会话恢复 + `/fork` 均不可用，长会话用户核心痛点，已修复 |
| 6 | [#3074 `/effort` 快速切换推理强度](https://github.com/github/copilot-cli/issues/3074) | 🟢 CLOSED | 👍 12 / 💬 4 | 高频操作体验优化诉求，`/model` 多步切换被普遍诟病 |
| 7 | [#1803 支持 MCP resources/read 原语](https://github.com/github/copilot-cli/issues/1803) | 🔴 OPEN | 👍 13 / 💬 2 | MCP 三大原语仅支持 tools，资源型 MCP 服务器（文档/数据源）生态兼容的短板 |
| 8 | [#4991 Cloudflare MCP OAuth 后报 Subscription limit reached](https://github.com/github/copilot-cli/issues/4991) | 🔴 OPEN | 💬 3 | OAuth 成功但连接失败，远程 MCP 兼容性问题持续发酵 |
| 9 | [#4959 企业托管 model 设置收到但未生效](https://github.com/github/copilot-cli/issues/4959) | 🔴 OPEN | 👍 3 / 💬 2 | 企业策略下发与运行时解析脱节，影响企业统一管控；与 [#4960](https://github.com/github/copilot-cli/issues/4960)（托管模型可见不可选）同属企业配置缺陷簇 |
| 10 | [#5056 十月新配色主题可读性回退](https://github.com/github/copilot-cli/issues/5056) | 🔴 OPEN | 💬 0 | 昨日新提，热力图全灰、选中高亮变暗，无障碍/可读性回归，需官方快速响应 |

其他值得留意的新 Issue：[#5039 MCP OAuth 400 无协议版本回退](https://github.com/github/copilot-cli/issues/5039)、[#5054 大上下文自动压缩超时](https://github.com/github/copilot-cli/issues/5054)、[#5055 BYOK/离线模式下 workflows 被禁用](https://github.com/github/copilot-cli/issues/5055)。

---

## 4. 重要 PR 进展

过去 24 小时仅 1 条 PR 更新：

- **[#5046 Initial commit](https://github.com/github/copilot-cli/pull/5046)** — @c6r8h48msf-debug 提交，标题为"Initial commit"，无描述、无 👍，疑似垃圾/测试性提交，预计将被维护者关闭。

> 📌 本日无实质性社区 PR 活动，主要代码变更以官方 Release 形式交付（见第 2 节）。

---

## 5. 功能需求趋势

1. **BYOK / 离线场景深化**：多模型切换（#3282）、自定义请求头（#3399）、workflows 解锁（#5055）、外部 provider 超时（#5051）——BYOK 已从“能用”进入“好用”诉求阶段
2. **MCP 生态兼容性**：OAuth/协议版本协商（#5039、#4991）、resources 原语（#1803）、流式传输类型识别（#2790）——MCP 是问题最集中的领域
3. **企业管控**：托管模型设置生效（#4959、#4960）、插件市场封锁（#4715）——企业采用 Copilot CLI 的合规刚需
4. **Agent 工作流**：AutoPilot 决策暂停（#3595）、`/agent` 直呼（#2853）、子代理模型覆盖（#4462）
5. **可观测性与运维**：OTEL 遥测补全（#4169、#4967）

---

## 6. 开发者关注点

- **会话稳定性**：恢复/分叉会话报错（#4505）、自动压缩超时（#5054）、20 分钟超时（#5051）——长会话可靠性是高频抱怨
- **平台特异性 bug**：macOS 重启致瘫（#4998）、Windows 主题误判（#4961）、Windows 配置损坏（#2195）
- **文档与实现不一致**：agent frontmatter 键名 `reasoningEffort` vs `reasoning-effort`（#4963），降低自定义 agent 上手体验
- **UI/无障碍回归**：新主题可读性下降（#5056）提醒官方需要建立视觉回归测试
- **Fork 工作流支持**：TUI 面板忽略 `gh repo set-default`（#4689），开源贡献者日常场景受阻

---
*本报告基于过去 24 小时 GitHub 公开数据自动汇总，链接均指向对应 Issue/PR/Release 页面。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-06

## 📌 今日速览

今日无新版本发布。社区最热门的话题依然围绕 **V2 迁移带来的功能缺口**（TODO 工具缺失、thinking block binding 迁移断裂）和**自动压缩无限循环**这一长期未解的 Bug。PR 方面，团队今日合并了代理认证（Negotiate/NTLM/Basic）、本地构建通道规范化等多项修复，并推进了设计系统 Skills、桌面浏览器栏重设计等新功能。

---

## 🔥 社区热点 Issues

**1. 自动压缩无限循环（26 评论 / 12 👍）— 长期高热度 Bug**
当助手自然结束回合后（如提问或 `finish === "stop"`），自动压缩会无条件注入合成的 "Continue..." 用户消息，导致无限循环。已持续 7 个月未修复，是评论最多的 Issue。
[anomalyco/opencode#15533](https://github.com/anomalyco/opencode/issues/15533)

**2. V2 缺少 TODO 工具支持（18 评论）**
V1 中模型可通过 `todowrite`/`todoread` 读写原生 TODO 列表，V2 运行时工具目录中不再暴露这些工具。配套 Issue #52931 已关闭，说明团队在推进解决。
[anomalyco/opencode#42421](https://github.com/anomalyco/opencode/issues/42421)

**3. MCP OAuth 浏览器无法打开（10 评论 / 11 👍）**
`opencode mcp auth gdrive` 显示 "Authentication successful!" 但浏览器从未打开、token 未保存。影响所有依赖 OAuth 的 MCP 服务器集成。
[anomalyco/opencode#26195](https://github.com/anomalyco/opencode/issues/26195)

**4. V2 无发布说明（13 👍）**
changelog 停留在 v1.18.33，所有 v2.0.x 版本（最新 2.0.22）均无正式 release notes，v2 用户缺乏变更可追溯性。👍 数量高，反映社区强烈不满。
[anomalyco/opencode#52184](https://github.com/anomalyco/opencode/issues/52184)

**5. OpenAI 间歇性 Service Unavailable（8 评论）**
跨模型、跨会话的间歇性上游连接失败，部分请求反复重试后仍失败，重启后也不稳定。影响生产可用性。
[anomalyco/opencode#52269](https://github.com/anomalyco/opencode/issues/52269)

**6. 请求 tool.execute.before 增加 skip 字段（6 评论 / 4 👍）**
社区提出确定性的工具预执行门控机制，允许插件直接跳过某次工具调用，与近期 Fireship 对 OpenCode 的报道带动的插件生态关注相关。
[anomalyco/opencode#52837](https://github.com/anomalyco/opencode/issues/52837)

**7. Agent 步骤循环在 "unknown" finish reason 下永不终止（OPEN）**
当 finish reason 为 `unknown` 且无工具调用时，`SessionPrompt.run` 循环不退出，造成无上限的请求风暴（可能与 #15533 同根因）。
[anomalyco/opencode#49414](https://github.com/anomalyco/opencode/issues/49414)

**8. Go 计划所有 Grok 模型不可达（已关闭）**
模型目录仍列出 grok-4.5/4.6/4.7，但 OAuth 和 API key 两条路径均失败。已关闭，疑似服务端修复。
[anomalyco/opencode#52971](https://github.com/anomalyco/opencode/issues/52971)

**9. MCP 服务器名超 64 字符时工具被静默丢弃**
服务器显示 connected 但工具未注册，仅有一条 ERROR 日志。静默失败模式对排查极不友好。
[anomalyco/opencode#53400](https://github.com/anomalyco/opencode/issues/53400)

**10. Snapshot 在 Git < 2.45 上失败**
`git add --all --sparse` 需 Git 2.45+，旧版本环境中每次编辑都报 `failed to capture snapshot`，checkpoint/revert 完全失效。
[anomalyco/opencode#52953](https://github.com/anomalyco/opencode/issues/52953)

---

## 🛠 重要 PR 进展

| PR | 内容 |
|---|---|
| [#52734](https://github.com/anomalyco/opencode/pull/52734) ✅ | **代理认证支持（Negotiate/NTLM/Basic）**：解决企业网关 407 认证挑战，对政企用户是关键能力 |
| [#52327](https://github.com/anomalyco/opencode/pull/52327) ✅ | **迁移 V1 thinking block binding 配置**：修复 #52325，V2 不再忽略 `blockBinding: false` |
| [#53479](https://github.com/anomalyco/opencode/pull/53479) ✅ | **portable shell scanner 在 local/dev 通道默认开启**：Bash/Zsh/PowerShell 扫描器开始内部试用 |
| [#50840](https://github.com/anomalyco/opencode/pull/50840) ✅ | TUI 引导阶段恢复托管连接，避免首次请求即因 transport error 退出 |
| [#53241](https://github.com/anomalyco/opencode/pull/53241) ✅ | 重构客户端注册服务决策逻辑，消除两份重复的版本兼容检查 |
| [#53461](https://github.com/anomalyco/opencode/pull/53461) ✅ | 规范化本地构建通道名，处理 detached HEAD 与非法路径字符 |
| [#53474](https://github.com/anomalyco/opencode/pull/53474) | 修复 Web UI 按住 PageUp/PageDown 滚动过慢（对应 #49928） |
| [#53449](https://github.com/anomalyco/opencode/pull/53449) | **未跟踪文件 diff 批量化**：原每文件 spawn 2 个 git 进程，257 个文件即超 60s 超时，性能提升显著 |
| [#53485](https://github.com/anomalyco/opencode/pull/53485) | **Design Skills + Design Lint**：将设计系统规则与 5 条 lint 规则打包进 `@opencode/ui`，让 coding agent 遵循设计规范 |
| [#53353](https://github.com/anomalyco/opencode/pull/53353) | 校验 git 分支名，提前拒绝 `topic/`、`topic.lock` 等非法名称 |

其他值得留意：[#53475](https://github.com/anomalyco/opencode/pull/53475)（项目目录重命名后 worktree 迁移）、[#52172](https://github.com/anomalyco/opencode/pull/52172)（模型 schema 暴露 effort/thinking-binding 覆盖）、[#51337](https://github.com/anomalyco/opencode/pull/51337)（托管配置目录加载）。

---

## 📈 功能需求趋势

1. **V2 功能对齐**：TODO 工具、手动压缩、block binding 配置等 V1 能力在 V2 中缺失或迁移断裂，是当前最大摩擦点
2. **插件/门控能力增强**：skip 字段、SessionDomain 暴露活跃会话等，插件生态诉求上升
3. **企业环境支持**：代理认证（已合并）、托管配置、Bedrock 兼容性
4. **版本工程透明度**：v2 发布说明缺失引发社区信任问题
5. **UI/UX 打磨**：主题（GraphiteSoft）、滚动性能、Web 实时刷新、浏览器栏重设计

## ⚠️ 开发者关注点（痛点）

- **会话循环类 Bug 未根治**：auto-compaction 无限循环（#15533）与 unknown finish reason 请求风暴（#49414）属同类风险，建议用户关注 token 消耗
- **旧环境兼容性**：Git < 2.45 无法生成快照；升级前请确认环境版本
- **Provider 稳定性**：OpenAI 间歇性失败、Grok 全量不可达、Bedrock cachePoint 校验异常等问题集中在本周
- **静默失败多**：MCP 工具丢弃、`opencode mcp ls` 误装 npm 包（#33749）等，排查成本高

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-10-06）

## 📌 今日速览

Qwen Code 发布 **v0.25.0**，核心亮点是本地 workspace-agent 协作功能（#11206），同时桌面端与 TypeScript SDK 同步更新。社区讨论焦点集中在 **Managed Agent 双路径架构**（#12380，46 条评论）及其 Kubernetes 工具运行时落地。今日新增多个安全与正确性问题的深度报告，涵盖 memory 配置提权（#13477）、上下文压缩（#13432）等核心模块。

---

## 🚀 版本发布

### v0.25.0
- **feat(agents)**: 新增本地 workspace-agent 协作功能（[#11206](https://github.com/QwenLM/qwen-code/pull/11206)）by @yiliang
- **desktop-v0.25.0**: 桌面端同步发布，包含 fix(serve): 保留会话创建失败诊断信息（#12331）、feat(sdk-java): 托管运行时等
- **sdk-typescript v0.1.18**: SDK 捆绑 CLI 0.25.0
- 无已知破坏性变更

---

## 🔥 社区热点 Issues（Top 10）

1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380) Managed Agent 双路径架构提案**（46 评论）
   社区最活跃的讨论。定义分阶段 Managed Agent 架构：保留现有 TS agent loop、模型推理与工具环境供给解耦、Session 持久化归属与 Workspace 绑定。是当前版本演进的顶层设计。

2. **[#13395](https://github.com/QwenLM/qwen-code/issues/13395) Kubernetes 工具运行时进度追踪**（14 评论）
   追踪 #12380 下 K8s 工具运行时的剩余实现、可移植性与验收门禁，实现位于 PR #13289。

3. **[#13078](https://github.com/QwenLM/qwen-code/issues/13078) 每日依赖 CVE 审计失败**（10 评论）
   CI 安全审计连续失败，可能存在新的高危漏洞或 npm audit 端点不可用，需维护者优先关注。

4. **[#8097](https://github.com/QwenLM/qwen-code/issues/8097) 后台 agent 协调缺陷**（10 评论）
   多个后台 Explore 子代理并行时出现重复工作、过早完成、send_message 非交互等问题，多智能体稳定性的长期痛点。

5. **[#12394](https://github.com/QwenLM/qwen-code/issues/12394) [P1] Windows UIAccess worker 未签名**（4 评论）
   `npm install @qwen-code/cua-sdk` postinstall 直接失败，阻断 Windows 上 computer-use 功能，P1 级待人工处理。

6. **[#13480](https://github.com/QwenLM/qwen-code/issues/13480) [P1] v0.25.0 WeChat 集成回归**（4 评论）
   扫码配置微信时报 "please upgrade WeChat interface version"，此前 #2882 已修复过一次，v0.25.0 再次复发。

7. **[#13477](https://github.com/QwenLM/qwen-code/issues/13477) [安全] memory 配置可从 Workspace 作用域提权**（3 评论）
   克隆的恶意仓库可通过自身 `.qwen/settings.json` 解除五个自动批准 memory agent 的轮次/时间上限，安全隐患显著。

8. **[#13458](https://github.com/QwenLM/qwen-code/issues/13458) memory.agentMaxTurns 被硬编码忽略**（5 评论）
   用户级 memory dream 硬编码 maxTurns=8，忽略配置值（项目级则生效），配置一致性问题，已 ready-for-agent。

9. **[#13432](https://github.com/QwenLM/qwen-code/issues/13432) compaction 丢弃服务端上报的上下文上限**（4 评论）
   反应式压缩按推断窗口而非真实 ceiling 计算，可能导致压缩后仍超限并死循环，配合 #13421（llama.cpp 溢出措辞识别）一并观察。

10. **[#13463](https://github.com/QwenLM/qwen-code/issues/13463) / [#13487](https://github.com/QwenLM/qwen-code/issues/13487) 已取消的输入可能重放进后续模型上下文**（各 4 评论）
    Managed Agent 取消语义的边界缺陷，拆分自 Web Shell 验收测试，与 #13436 的修复工作联动。

---

## 🔧 重要 PR 进展（Top 10）

1. **[#13247](https://github.com/QwenLM/qwen-code/pull/13247) Managed Session 目录变更（W2）** — 实现提案 #12380 的 W2 切片：Session 在授权 Workspace 内的持久化、幂等工作目录变更。@wensho
2. **[#13467](https://github.com/QwenLM/qwen-code/pull/13467) 会话中心的多智能体协作** — 用 @-mention 替代 thread/ticket 协作模式，agent 在同一会话内内联回复并展示状态、工具步骤与 token 用量。@yiliang114
3. **[#13497](https://github.com/QwenLM/qwen-code/pull/13497) Stage H5 channel 契约与持久化** — `/v1/agent-channels` 公共 API 路由形状，纯契约交付。@wenshao
4. **[#13498](https://github.com/QwenLM/qwen-code/pull/13498) 跨节点 EventTransport 消息信封契约（H0）** — 为 MQ/Redis 传输铺路的纯 TS 契约 + 负面测试，配套设计文档 [#13500](https://github.com/QwenLM/qwen-code/pull/13500) 与 H4/H5/H6 切片设计 [#13499](https://github.com/QwenLM/qwen-code/pull/13499)。
5. **[#13436](https://github.com/QwenLM/qwen-code/pull/13436) 会话恢复保留取消意图（ACP）** — 修复取消后的输入被恢复重放的问题，附带 ~840 行测试（后续不变量固化见 #13478）。@yiliang114
6. **[#11854](https://github.com/QwenLM/qwen-code/pull/11854) 混合代码模式** — 对齐 Codex 的 `tools.mode` 枚举（`direct` / `code_mode` / `code_mode_only`），暴露隔离的 `exec` JavaScript 工具。@DragonnZhang
7. **[#10644](https://github.com/QwenLM/qwen-code/pull/10644) 内置 Bash 搜索工具** — macOS/Linux 上用 Shell 工具替代 `glob`/`grep_search`，内置 ripgrep 15.0.0 与 bfs 4.x。@DragonnZhang
8. **[#13128](https://github.com/QwenLM/qwen-code/pull/13128) LSP 诊断失败显式报错** — 不再在诊断不可得时静默返回干净结果，配套修复 [#13494](https://github.com/QwenLM/qwen-code/pull/13494)（停止宣称不支持的 LSP 动态注册，对应 #13491）。
9. **[#13484](https://github.com/QwenLM/qwen-code/pull/13484) 修复模糊编辑的行边界** — 解决 fuzzy edit 误删后续空行问题（#13483/#13492 同族）。@GoldArowana
10. **[#13421](https://github.com/QwenLM/qwen-code/pull/13421) 识别 llama.cpp 上下文溢出措辞** — 让本地 llama.cpp 服务器的 400 错误触发反应式压缩，而非无限循环。@yiliang114

其他值得留意：[#12561](https://github.com/QwenLM/qwen-code/pull/12561)（memory 变更 hook 通知）、[#13260](https://github.com/QwenLM/qwen-code/pull/13260)（W1c 离线 Workspace 迁移）、[#13166](https://github.com/QwenLM/qwen-code/pull/13166) / [#13168](https://github.com/QwenLM/qwen-code/pull/13168)（Hosted Workspace 文件发现与项目上下文注入）。

---

## 📈 功能需求趋势

1. **Managed Agent / 多智能体平台化**（最强主线）：#12380 架构提案、W1/W2/H0–H6 系列切片、K8s 运行时、跨节点传输，Issue 与 PR 均高度密集。
2. **会话管理与取消语义**：取消重放（#13463/#13487/#13436）、恢复不变量（#13478）、shell 模式会话忙状态（#12664）。
3. **Memory 子系统治理**：预算配置（#13458/#13490/#13465）、作用域安全（#13477）、发现范围（#13280 已关闭）。
4. **上下文与 token 管理**：compaction 正确性（#13432）、llama.cpp 本地推理适配（#13421）、token 显示格式（#13473/#13474）。
5. **平台分发**：Windows 签名/剪贴板（#12394/#13197）、Android Phase 2 跟进（#13111）、微信集成（#13480）。
6. **安全与供应链**：CVE 审计失败（#13078）、凭据残留（#13122 已关闭）。

---

## ⚠️ 开发者关注点

- **Windows 体验仍是重灾区**：cua-sdk 安装失败（P1 #12394）、Vim 模式剪贴板损坏（#13197），跨平台分发门槛待解决。
- **取消/恢复语义复杂度上升**：Managed Agent 引入后，取消意图在会话恢复、ACP、Hosted Harness 间的一致性成为 bug 高发区。
- **配置作用域安全**：Workspace 级 settings 可影响自动批准的 memory agent 预算，供应链式攻击面需要系统性收紧。
- **本地/自托管模型支持改进需求**：llama.cpp 溢出识别、compaction 对服务端真实 ceiling 的利用。
- **文档与发布一致性**：文档引用不存在的 npm 包（#13501）、v0.25.0 微信集成回归，发布前回归覆盖有待加强。
- **测试深度要求提升**：社区审查引入 mutation probe 机制（#13478），对新增测试的有效性提出更高标准。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / Codewhale 社区动态日报
**日期：2026-10-06 | 数据来源：github.com/Hmbown/DeepSeek-TUI**

---

## 一、今日速览

项目处于 v0.10.0 发布后的 0.10.1 补丁周期，主线是 0.10.1 集成收尾（PR #6846、#6815）与持续的代码架构解耦（EPIC-005）。今日新增一个值得关注的新 Issue（#6872：UI watchdog 误杀等待用户输入的 turn），同时社区贡献者 @asto18089 密集提交了一批质量修复 PR，多聚焦超时限制、资源回收与 API 一致性。

---

## 二、版本发布

过去 24 小时无新 Release。v0.10.1 仍在规划与集成阶段（见 Issue #6094），PR #6815 已关闭（管理员豁免合入，13 个 Windows 测试遗留问题由 #6846 跟进）。

---

## 三、社区热点 Issues

1. **#5316 [OPEN] EPIC-005: TUI Crate 分解（伞形 Issue）**（31 评论）
   FEAT-027 已实现，Draft PR #6832 为 `/permissions` 与 `/status` 采用共享 command Shapes。这是仓库解耦的主战场，讨论最活跃。
   https://github.com/Hmbown/Codewhale/issues/5316

2. **#5586 [OPEN] 分解超大文件：lib.rs (18.7k)、config.rs (12.3k) 等**
   归属 Core 执行计划 C09，是解耦工作的具体落点。
   https://github.com/Hmbown/Codewhale/issues/5586

3. **#6034 [OPEN] TUI 分解被 crate::config 阻塞**
   128 个模块中 118 个构成单一组件（72.7 万行），量化了解耦的真实瓶颈；0.9.13 已迁出 localization/palette/command_safety。
   https://github.com/Hmbown/Codewhale/issues/6034

4. **#6094 [OPEN] v0.10.1 起步指南：补完 0.10.0 未竟工作**（7 评论）
   社区参与 0.10.1 的入口文档，明确“只收尾、不加新特性、无破坏性变更”。
   https://github.com/Hmbown/Codewhale/issues/6094

5. **#6827 [CLOSED] Windows npm 安装：杀死 node.exe 瞬间终止进程且无清理**
   Windows 稳定性高频痛点；但衍生新问题 #6871——安全门拦截了 PID 变量方式的 Stop-Process，修复本身挡住了它推荐的操作。
   https://github.com/Hmbown/Codewhale/issues/6827

6. **#6872 [OPEN·今日新建] UI tool-hang watchdog 在 600s 后误杀等待 `request_user_input` 的 turn**
   与已关闭的 #6003/#6275/#651x 相关但非重复，是用户交互场景下的正确性问题。
   https://github.com/Hmbown/Codewhale/issues/6872

7. **#6573 [OPEN] 多 TUI 会话争抢 Subagents Store 导致 CPU 空转**
   FreeBSD 0.10.0 上观察到空闲进程占满 CPU，疑似跨平台并发缺陷。
   https://github.com/Hmbown/Codewhale/issues/6573

8. **#6795 [OPEN] 内联 provider 错误帧绕过所有重试预算**
   OpenRouter 等在 HTTP 200 中夹带 chunk 级错误帧，导致首个错误帧即终止 turn，可靠性问题。
   https://github.com/Hmbown/Codewhale/issues/6795

9. **#6603 [OPEN] 为常规 agent 决策增加可选 Decision Gate**
   简单消息也要唤醒大模型做意图判断（1-3 秒 + 费用），提案用轻量决策层加速，成本/延迟优化的代表性需求。
   https://github.com/Hmbown/Codewhale/issues/6603

10. **#6553–#6561 静态审计系列（9 个 Issue）**
    @7jrxt42BxFZo4iAnN4CX 提交的系统性审计：异步运行时上的同步阻塞、无上限缓冲、非崩溃原子写入、TOCTOU 竞态、子进程清理缺失、fail-open 路径、DoS 防护缺失等，全部标记 agent-ready，是下一阶段可靠性加固的路线图。
    https://github.com/Hmbown/Codewhale/issues/6553

---

## 四、重要 PR 进展

1. **#6815 [CLOSED] 0.10.1 集成：Engine 收敛 + TypeScript mods + Ratatui UX**
   核心集成 PR，统一 Rust Engine 负责执行、权限、会话、计费；以 admin bypass 合入，遗留项转 #6846。
   https://github.com/Hmbown/Codewhale/pull/6815

2. **#6846 [OPEN] 0.10.1 跟进：Windows LPAC、图片拖放、shell 交接、错误标签、plugin doctor**
   逐条验证 #6815 遗留的 13 个 Windows 测试失败项。
   https://github.com/Hmbown/Codewhale/pull/6846

3. **#6863 [CLOSED] 为非流式模型请求加总超时（retry-aware）**
   修复 provider 接受连接后停滞或 429+超长 Retry-After 导致的无限挂起，流式路径此前已有 per-chunk 限制。
   https://github.com/Hmbown/Codewhale/pull/6863

4. **#6855 [CLOSED] 为 chat-completions 代理请求加时间限制**
   与 #6863 同类问题，非流式全量读取 upstream body 可被恶意/缓慢 provider 卡死 handler。
   https://github.com/Hmbown/Codewhale/pull/6855

5. **#6854 [CLOSED] pandoc 转换加边界并回收进程**
   同步 `std::process::Command` 阻塞 executor 线程、取消后转换器成孤儿进程——正是审计 Issue #6553/#6558 指出的问题类别。
   https://github.com/Hmbown/Codewhale/pull/6854

6. **#6849 [CLOSED] SSE 兼容流正确投影动态工具结果取消**
   区分"外部审批被拒绝"与"被打断时无人应答”（`cancelled: true`），提升 API 语义准确性。
   https://github.com/Hmbown/Codewhale/pull/6849

7. **#6870 [CLOSED] 修复快照 model id 解析与自定义 provider 探测**
   自建 OpenAI 兼容网关（私有中继跑 DeepSeek V4）下，`deepseek-v4-pro-0813` 等快照 id 误回退到 128K unknown shape——直接影响 DeepSeek 用户的模型能力识别。
   https://github.com/Hmbown/Codewhale/pull/6870

8. **#6869 [OPEN] runtime-api：提供 skill body 供客户端激活**
   新增 `GET /v1/skills/{name}`，让外部客户端获得与 TUI `/skill` 等价的能力。
   https://github.com/Hmbown/Codewhale/pull/6869

9. **#6817 [OPEN] 从快照读取单次工具调用（shell 命令）造成的变化**
   补齐 per-call 变更归因的 API 空白，对构建审计/回放类客户端有价值。
   https://github.com/Hmbown/Codewhale/pull/6817

10. **#6867 [OPEN] OrcaRouter：OAuth 2.0 + PKCE 登录与实时模型目录**
    在 API key 之外新增浏览器登录入口，降低新 provider 的接入门槛。
    https://github.com/Hmbown/Codewhale/pull/6867

其他值得一提：#6858（vision 结果上报真实图片尺寸）、#6860（Bing/DDG 尊重搜索 locale）、#6864（删除 automation 前先归档终端运行记录）。

---

## 五、功能需求趋势

- **架构解耦 / 代码治理**（最热）：EPIC-005、超大文件拆分、config 单一组件问题——维护者自驱的重构是当前最大主题。
- **可靠性与资源边界**：9 个静态审计 Issue + 一批超时/回收 PR，社区对“挂起、泄漏、无限等待”高度敏感。
- **多 agent 协作可信度**：子 agent 结果机器签名回执（#6492）、指令溯源与“谁说了算”（#6585）、工作树租约（#6491）。
- **成本与延迟优化**：Decision Gate 加速常规决策（#6603）、指令预算可配置（#6526）。
- **UX 信息密度**：agent 在线状态 chip、side chats、活动动态流（#6322）。
- **自定义 provider / DeepSeek 模型支持**：快照 id 解析（PR #6870）、OpenRouter 错误帧处理（#6795）。

---

## 六、开发者关注点

1. **Windows 体验仍是最大痛点**：进程清理（#6827）、安全门过度拦截（#6871）、LPAC 权限，0.10.1 明确以 Windows 修复为主线之一。
2. **缺超时与资源回收是系统性问题**：非流式请求、代理 handler、pandoc 子进程均无界——本周集中修复，预计审计系列将持续产出同类 PR。
3. **自定义 OpenAI 兼容网关用户**面临模型能力误判（128K 回退），DeepSeek 中继用户应关注 PR #6870 在 0.10.1 的落地。
4. **稳定版节奏**：0.10.x 为纯收尾补丁线，新功能（presence chip、Decision Gate 等）预计排在其后，贡献者可从 #6094 列出的收尾任务入手。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-10-06

## 📌 今日速览

Pi 在过去 24 小时内连发 **v1.0.3 / v1.0.4** 两个版本，重点完善 MCP 工具过滤（`--tools` 通配符模式与 `--no-mcp`）和 Azure Foundry Chat Completions 支持。社区方面，Windows 平台适配与连接可靠性（"Working..." 卡死）仍是讨论焦点，同时一批高质量修复 PR（Windows shell 解析、stdin EIO、OpenRouter 计费）快速合并，显示 1.0 发布后维护节奏稳定。

---

## 🚀 版本发布

### v1.0.4
- **工具模式与 `--no-mcp`**：`--tools` / `--exclude-tools` 支持 `*` 通配符，如 `--tools read,codemode,'mcp__radius__*'` 可仅保留单个 MCP 服务器的工具；`--tools` 现在默认保留 MCP 工具（除非条目以 `mcp__` 开头）；`--no-mcp` 可为单次运行关闭 MCP。

### v1.0.3
- **Azure Foundry Chat Completions**：`azure` provider（由 `azure-openai-responses` 更名）现支持 Foundry Chat Completions 部署，首个内置模型为 `azure/deepseek-v4-pro`。

---

## 🔥 社区热点 Issues（Top 10）

1. **#4945 [inprogress] openai-codex 连接可靠性问题**（81 评论 / 34 👍）
   `gpt-5.5` 交互式 TUI 偶发卡在 `Working...`，无流式输出、无错误，只能按 Esc 恢复。运行时间近 5 个月的长寿 issue，是社区最痛的稳定性问题。
   [链接](https://github.com/earendil-works/pi/issues/4945)

2. **#7547 Windows 使用方式征集帖**（73 评论）
   维护方主动发帖征集 Windows 用户的运行方式与痛点，用于决定哪些适配进核心、哪些交给扩展。反映 Windows 一等公民支持正在规划中。
   [链接](https://github.com/earendil-works/pi/issues/7547)

3. **#10314 [CLOSED] 全屏模式下 Home/End 默认行为**（23 评论）
   Home/End 从行内编辑变为整屏滚动，引发默认值之争，社区讨论充分后已关闭——体现 TUI 交互细节的高敏感度。
   [链接](https://github.com/earendil-works/pi/issues/10314)

4. **#10031 Esc 中断 thinking 后卡在 "Working..."**（20 评论）
   与 #4945 症状相似但独立复现路径，自 ~v0.84.0 起跨机器出现，Ctrl+C 后 `pi -c` 恢复。两个“卡死”问题并存，指向中断处理链路。
   [链接](https://github.com/earendil-works/pi/issues/10031)

5. **#7730 macOS 长会话 CPU 占用过高**（19 评论 / 11 👍）
   长会话下 CPU 在 50–110% 波动、内存 600–800MB，疑似与会话/上下文长度相关，性能回归类高优先级问题。
   [链接](https://github.com/earendil-works/pi/issues/7730)

6. **#9361 Windows shellPath 被非确定性忽略，回退到 WSL bash.exe**（13 评论）
   加载扩展后 `shellPath` 静默失效，最终可能通过 PATH 执行 WSL System32 bash——Windows shell 解析混乱的典型样本。**PR #10538 已于今日修复关闭。**
   [链接](https://github.com/earendil-works/pi/issues/9361)

7. **#5581 [inprogress] `pi.sendMessage()` + `triggerTurn: true` 绕过 `before_agent_start`**（9 评论）
   扩展 API 生命周期缺口，直调 `_runAgentPrompt` 跳过事件钩子，影响扩展生态的拦截/审计能力。
   [链接](https://github.com/earendil-works/pi/issues/5581)

8. **#9075 自适应 thinking 模型下压缩摘要必达输出上限**（8 评论）
   Compaction 摘要继承会话 thinking 等级，高 effort 下 thinking token 挤占 `max_tokens`，确定性撞上 ~13k 输出预算。
   [链接](https://github.com/earendil-works/pi/issues/9075)

9. **#10074 Anthropic 工具调用中非 ASCII edit 参数静默损坏**（7 评论）
   韩文文件频繁编辑失败甚至损坏文件，根因疑似 `\uXXXX` 转义丢 `u` 变成 `\b`/`\f` 控制字符——数据安全级 bug。
   [链接](https://github.com/earendil-works/pi/issues/10074)

10. **#9980 OpenRouter 热门开源模型成本计算偏差 2–3 倍**（5 评论）
    目录采用最便宜 provider 定价估算，而 OpenRouter 实际路由到高价 provider。**PR #10286 改用 OpenRouter 上报实付金额，已在推进。**
    [链接](https://github.com/earendil-works/pi/issues/9980)

---

## 🔧 重要 PR 进展（Top 10）

1. **#10538 [CLOSED] Windows bash 发现跳过 WSL 启动器；扩展 bash 工具继承会话 shell 设置**
   一次性修复 #9361 的两半问题，Windows shell 解析顽疾落地。
   [链接](https://github.com/earendil-works/pi/pull/10538)

2. **#10443 [CLOSED] stdin 死终端错误路由至 emergencyTerminalExit**
   修复终端消失时 `read EIO` 被计入 crash 报告的问题（对应 #10272），复用现有 stdout/stderr 的终端错误处理。
   [链接](https://github.com/earendil-works/pi/pull/10443)

3. **#9714 [CLOSED] Azure Foundry Chat Completions 支持**
   Azure provider 从仅 Responses API 扩展到 Chat Completions 部署（DeepSeek V4 Pro），随 v1.0.3 发布。
   [链接](https://github.com/earendil-works/pi/pull/9714)

4. **#10286 [OPEN] 使用 OpenRouter 上报的实际计费成本**
   用真实账单金额替代目录估算，直接解决 #9980 的 2–3x 偏差。
   [链接](https://github.com/earendil-works/pi/pull/10286)

5. **#10503 [CLOSED] 用户 bash 输出分块间保留 ANSI 状态**
   修复 `ESC[0m` 被分块切断导致输出残留 `m` 字符的解析问题。
   [链接](https://github.com/earendil-works/pi/pull/10503)

6. **#10533 [OPEN] durable：在闭合循环的 wait 处报错而非挂起**
   循环等待从 hang 改为快速失败，durable 执行模型的健壮性改进。
   [链接](https://github.com/earendil-works/pi/pull/10533)

7. **#10521 [OPEN] 为 NVIDIA NIM 模型内联 `$ref` 工具 schema**
   修复 `nemotron-3.5-super-vl` 等模型返回 `$ref` JSON 字符串导致 `validateToolArguments` 拒绝的问题。
   [链接](https://github.com/earendil-works/pi/pull/10521)

8. **#10530 [CLOSED] 系统提示中标注工具搜索函数为 async**
   避免 LLM 漏写 `await` 导致 `searchTools` 空结果、转而遍历 `ALL_TOOLS` 浪费 token——小改动大收益的提示工程优化。
   [链接](https://github.com/earendil-works/pi/pull/10530)

9. **#10495 [CLOSED] 消费缺 OSC 引导符的 mintty OSC 4 应答**
   防止终端调色板字节与 BEL 泄入编辑器输入，附完整回归测试。
   [链接](https://github.com/earendil-works/pi/pull/10495)

10. **#10511 [OPEN] 管理式安装清理：仅保留新版本 + 发起更新的版本**
    解决多版本安装堆积（#10392），降低磁盘占用与升级焦虑。
    [链接](https://github.com/earendil-works/pi/pull/10511)

其他值得留意：**#10197** 统一包产物校验、**#9880** 发布配置 JSON Schema（`models.json`/`settings.json` 等，改善编辑器补全）、**#10513/#10410** durable 执行上下文与预算选项。

---

## 📈 功能需求趋势

- **Windows 一等公民支持**：#7547 官方征集 + #9361、#8720、#10495 等一连串 Windows 相关修复，平台适配是当前投入最大的方向。
- **MCP 精细化管理**：`--tools` 通配符（v1.0.4）、#10253 按需连接 deferred MCP、#10247 Unix socket 传输——用户配置 MCP 数量激增（有用户配 19 个）倒逼连接策略优化。
- **云/企业 provider 扩展**：Azure Foundry（已落地）、Vertex AI 上的 Claude（#10183/#10486 两次提出）、OAuth 订阅计费与限额感知（#10480、#10377）。
- **成本透明与准确计费**：#9980、#10367（reasoning_tokens 计量拆分）显示重度用户对 usage/cost 数据准确性要求极高。
- **会话韧性与压缩质量**：#9075、#9986、#8720 均涉及“历史中留下坏消息导致会话永久损坏/额外计费”这一类核心可靠性问题。

---

## ⚠️ 开发者关注点（痛点总结）

1. **“Working...” 卡死家族**：#4945 与 #10031 两条高热度 issue，中断/流式中断恢复是最大稳定性痛点，用户只能 Ctrl+C + `pi -c`。
2. **坏消息污染历史导致会话变砖**：whitespace 工具结果（#8720）、非法 toolCall.name（#10139）、未应答 tool call（#9986）——建议会话历史引入校验/自愈机制。
3. **非 ASCII 内容处理**：#10074 韩文编辑损坏是数据安全风险，CJK 用户社区反馈强烈。
4. **长会话资源占用**：#7730 的 CPU/内存问题表明渲染或 diff 算法可能存在 O(n²) 行为。
5. **扩展 API 生命周期完整性**：#5581、#10267 显示 `before_agent_start` 钩子存在多个绕过路径，影响扩展的可预测性与缓存效率。
6. **OpenAI/Anthropic OAuth 边界情况**：token 刷新失效（#10377）、手动限额重置不识别（#10480），订阅型登录的健壮性仍需打磨。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报 · 2026-10-06

## 📌 今日速览

今日无新版本发布，但社区活跃度极高（24 小时内更新 46 个 Issue、306 个 PR）。当日焦点集中在**多账号配额调度**（Advisor 配额锁死问题）、**主分支测试回归**（btw-controller 5 个测试失败）以及**浏览器工具链的可用性修复**（iframe 观察、透明表单控件点击）。多位贡献者当日提交修复 PR，issue→PR 闭环速度值得称道。

---

## 🐛 社区热点 Issues

**1. [#14551](https://github.com/can1357/oh-my-pi/issues/14551) Advisor 锁死“配额耗尽”，不切换到仍有配额的兄弟 OpenAI 账号**
多账号池场景下，一个账号 OAuth 刷新瞬时失败即触发配额锁死，即使另一个账号配额健康也不会切换。直击企业/重度用户痛点，当日已有对应修复 PR #14560。

**2. [#14550](https://github.com/can1357/oh-my-pi/issues/14550) main 分支 btw-controller.test.ts 5 个测试失败**
push-to-talk 快捷键改动后 `BtwController.#showHistory` 读取上下文导致 `showOverlay` 不被调用。CI 红灯问题，引来两个并行修复 PR（#14552、#14563）。

**3. [#14453](https://github.com/can1357/oh-my-pi/issues/14453) 截图工具结果超 Anthropic 32MB 请求限制，413 恢复死循环**
长会话中 62 张 base64 截图累计 33MB，413 后子代理重发同样负载。影响 MCP 截图密集型工作流，属高优先级 p2。

**4. [#14495](https://github.com/can1357/oh-my-pi/issues/14495) Anthropic OAuth billing header 哈希输入在会话中变化，破坏 prompt cache**
计费头哈希依赖首条用户消息文本，非稳定输入导致缓存命中率下降——直接影响成本。Anthropic 用户高度关注。

**5. [#14538](https://github.com/can1357/oh-my-pi/issues/14538) auth-broker：OAuth 刷新失败导致 broker 进程被杀**
fire-and-forget 后台任务无 catch，任何异常变成 unhandled rejection 并按刷新间隔反复崩溃进程。认证子系统稳定性问题。

**6. [#14481](https://github.com/can1357/oh-my-pi/issues/14481) openai-completions 传输在消费 [DONE] 前中断连接**
导致下游网关记录虚假的“已取消”执行。对自建/中转 LiteLLM 类网关用户影响明显（关联 #14559 的 ACP stream error）。

**7. [#14553](https://github.com/can1357/oh-my-pi/issues/14553) 目录名以 .git 结尾时 worktree 创建失败**
gix 后端误判非 bare checkout，当日即有修复 PR #14556，响应速度极快。

**8. [#14464](https://github.com/can1357/oh-my-pi/issues/14464) 子代理 steering 消息发送后无法撤回**
顶层会话支持 alt/shift-up 撤回，子代理不支持，交互一致性缺口。

**9. [#11702](https://github.com/can1357/oh-my-pi/issues/11702) 会话 transcript 不记录写入构建版本，不兼容构建恢复时报晦涩 400**
fork/多版本并存场景下可诊断性差，9 条讨论显示社区对会话格式元数据的诉求强烈。

**10. [#14509](https://github.com/can1357/oh-my-pi/issues/14509) 插件扩展目录解析静默失败，无任何诊断输出**
与 #14503、#14518、#14510 构成一个主题：**插件/配置链路的错误被系统性吞掉**。同日 #14548 已修复 overrides 部分。

---

## 🔧 重要 PR 进展

| PR | 内容 |
|---|---|
| [#14560](https://github.com/can1357/oh-my-pi/pull/14560) | 修复 Advisor 在兄弟账号重试上限时的配额锁死，对应 Issue #14551 |
| [#14555](https://github.com/can1357/oh-my-pi/pull/14555) | **review:p0** 浏览器工具可点击 `opacity:0` 的真实 radio/checkbox，GOV.UK 类表单每项节省约 8 秒 |
| [#14549](https://github.com/can1357/oh-my-pi/pull/14549) | **review:p0** Windows 下从 `%APPDATA%\gcloud` 查找 Vertex AI ADC 凭据 |
| [#14415](https://github.com/can1357/oh-my-pi/pull/14415)（已合并） | `tab.observe()` 读取 iframe 内容，支付/登录嵌入表单对 agent 可见 |
| [#14556](https://github.com/can1357/oh-my-pi/pull/14556) | gix 通过 `.git` 条目而非 checkout 根目录打开仓库，修复 #14553 |
| [#14552](https://github.com/can1357/oh-my-pi/pull/14552) / [#14563](https://github.com/can1357/oh-my-pi/pull/14563) | 两个并行修复 main 分支 BTW 测试回归的 PR |
| [#14554](https://github.com/can1357/oh-my-pi/pull/14554) | 模型选择器保留显式 `:max`/`:auto` effort 后缀，区分 provider 作用域 |
| [#14387](https://github.com/can1357/oh-my-pi/pull/14387) | collab 中继 socket 静默掉线后自动重连（Wi-Fi 切换场景） |
| [#13389](https://github.com/can1357/oh-my-pi/pull/13389) | collab 会话快照**尾部优先加载**，移动端加入 23MB 会话无需全量下载 |
| [#14524](https://github.com/can1357/oh-my-pi/pull/14524)（已合并） | `mv`/`cp` GNU 兼容的跨文件系统移动 + 性能优化（6060 项目录移动 6.9ms→0.4ms） |
| [#14529](https://github.com/can1357/oh-my-pi/pull/14529)（已合并） | SIXEL 渲染移出 JS 线程，消除 TUI 卡顿 |
| [#14537](https://github.com/can1357/oh-my-pi/pull/14537) / [#14561](https://github.com/can1357/oh-my-pi/pull/14561)（已关闭/合并） | 贡献者批量修复 4 个小 bug：ask 多选丢失、thinking 超时、只读子代理提示等 |

---

## 📈 功能需求趋势

1. **多账号/配额调度**：Advisor 对 OAuth 凭据池的故障转移（#14551、#14560）是企业用户核心诉求。
2. **浏览器自动化质量**：iframe 观察、透明控件点击、relay 标签页劫持（#12314）、跨域 iframe 挂起（#14546）——browser tool 是最活跃的功能域。
3. **可诊断性/可观测性**：大量 issue 集中在静默失败——插件加载、目录解析、日志路径错误（#14509、#14503、#14510、#14518），社区明确要求“失败要说话”。
4. **会话持久化与恢复**：transcript 构建元数据（#11702）、更新后自动重启会话（PR #7748）。
5. **细粒度模型控制**：per-agent fast mode（#7106）、effort 后缀保留（PR #14554）、自定义 openai-images provider（#13272）。
6. **Prompt cache 稳定性**：SKILLS.md 创建使缓存失效（#8870）、Anthropic 计费头哈希不稳定（#14495）。

---

## ⚠️ 开发者关注点

- **静默失败是最大痛点**：插件系统至少 4 处 error-swallowing 被点名，建议自查项目中的类似模式。
- **长会话体积管理**：截图等大二进制工具结果缺乏修剪策略，触发 413 且恢复路径死循环。
- **Windows 平台摩擦持续**：Snap/junction 链接崩溃（#14315）、gcloud 凭据路径（PR #14549）、Bash 取消时序（#14492）。
- **main 分支测试健康度**：BTW 测试回归说明 push-to-talk 合并时 CI 门槛未拦截，值得关注测试覆盖策略。
- **兼容 OpenAI 网关的边缘行为**：`[DONE]` 消费时序（#14481）对自建网关用户是高频翻车点。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*