# AI CLI 工具社区动态日报 2026-09-10

> 生成时间: 2026-09-10 03:41 UTC | 覆盖工具: 11 个

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

# AI CLI 工具生态横向对比分析报告（2026-09-10）

---

## 1. 生态全景

AI CLI 工具已进入**多代理架构攻坚期与生态开放期**：头部工具（Claude Code、Codex、Qwen Code）均在推进子代理互操作、后台自动化与插件/钩子体系，Claude Code 甚至开源内置插件源码、Qwen Code 实现 Codex executor 内置互调，跨工具互操作性成为新竞争维度。同时**可靠性问题集中爆发**——模型幻觉/误报成功（Claude Code、Gemini CLI）、会话卡死不可恢复（OpenCode、Pi、Qwen Code）、配额计量不可信构成用户信任的三大威胁。**Windows 平台普遍是质量洼地**，几乎每款工具都存在 Windows 专属阻断性 bug。安全议题明显升温，Gemini CLI 与 oh-my-pi 当日均有 CRITICAL 级 CVE 修复或安全审计加固动作。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issue 更新 | 今日 PR 更新 | Release | 今日核心事件 |
|---|---|---|---|---|
| Claude Code | 10+（Top 列举） | 3 | **v2.1.267** | Cowork Windows 挂载大面积故障；幻觉问题发酵；开源内置 hooks 插件 |
| OpenAI Codex | 10+ | 10+ | **rust-v0.154.0**（+3 alpha） | GPT-6-Astra 上线 Bedrock；容量错误持续发酵；语音会话进入实验 |
| Gemini CLI | 10 | 10 | v0.61.0-nightly（例行） | 2 个 CRITICAL CVE 修复；Auto Memory 隐私问题集中上报 |
| GitHub Copilot CLI | 48 条更新（含评论） | 1 | 无 | MCP OAuth 回调端口不匹配两小时连环爆发 |
| Qwen Code | 10 | 10 | **v0.23.2** + SDK v0.1.11 | Codex executor 内置；ConPTY 进程泄漏 P1；Mesh 多代理协作 |
| OpenCode | 10 | 10+ | 无 | Copilot thinking 修复三连 PR 合并；Agent Teams 设计讨论 |
| Kimi Code CLI | 4 | 1 | 无 | 登录 HTTP 500 阻断；RTL 渲染问题 |
| DeepSeek TUI | 10 | 8 | 无（0.9.13 在途） | V4 Pro 将停服需适配；ClickHouse 分析体系 6 连 Issue |
| Pi | 264 条 Issue 更新 | 8（全关闭） | 无 | 恶意扩展包警报；OpenCode session 头系列故障集中修复 |
| oh-my-pi | 10 | 10+ | **v18.1.16** | 安全审计系列加固 PR 密集提交 |
| DeepSeek Harness | 0 | 0 | **dsh-v0.1.5-rc.1** | V41-Flash 适配 + 文件工作台化 |

> 注：各日报统计口径不一（Issue 更新 vs 新建），上表以日报披露为准，量级仅供横向参考。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **多代理/子代理协作** | Qwen Code（Mesh 共享线程 #11206、外部 ACP executor #11474）、OpenCode（Agent Teams #12711、后台子代理 #41640）、Gemini CLI（子代理 Sprint）、DeepSeek TUI（Fleet 管理） | 从串行委派走向并行、可通信、可归因的代理编排 |
| **Agent 可信度与结果验证** | Claude Code（#67847 虚构工具执行、#92505 谎报完成）、Gemini CLI（#22323 MAX_TURNS 误报成功）、DeepSeek TUI（#6013 goal gates） | 要求强制的可验证性机制与失败显式上报 |
| **长会话上下文管理** | oh-my-pi（自主 compact 工具 #10287、413 卡死）、Gemini CLI（/compress 不持久 #21335）、DeepSeek TUI（offload/swap 提案 #6008）、OpenCode（compaction 钩子 #48212） | 压缩可恢复、驱逐可回读、成本可控 |
| **Windows 平台质量** | Claude Code（Cowork 挂载）、Codex（Computer Use 截图失败、升级变砖）、Copilot CLI（WSL2 CPU 215%）、Qwen Code（ConPTY 泄漏 347 进程/2.8GB）、OpenCode（ARM64 TUI 不可用） | 全行业性短板，Windows 几乎无一幸免 |
| **成本/计费透明度** | Claude Code（#62338 $447 计费绕过、#80902 子代理隐性回落）、Codex（容量错误、配额窗口震荡）、DeepSeek TUI（cost: unknown） | 计量准确性、用量告警、effort/预算上限 |
| **MCP 生态健壮性** | Codex（OAuth 失败上报）、Copilot CLI（回调端口不匹配）、Gemini CLI（token 轮换丢失） | 认证流程与连接可观测性 |
| **模型目录时效性** | Pi（#9294 回退列表过期、#9394 目录滞后）、Codex、Qwen Code（#9453 推理元数据串供） | 上游模型快速迭代 vs 工具目录维护滞后的结构性矛盾 |
| **配置文件非破坏性写入** | oh-my-pi（YAML 注释丢失 #11477）、OpenCode（AGENTS.md 发现） | 手工维护配置/dotfiles 用户的共同痛点 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 企业级管控、插件生态开放 | 企业/专业开发者 | 闭源核心 + 开放插件（mods 开源、diff 后端抽象为多 VCS 铺路） |
| **OpenAI Codex** | 全栈 Agent（Computer Use、语音、Remote Control） | ChatGPT 订阅用户为主 | Rust 核心、模型与云（Bedrock）深度绑定，服务端容量是软肋 |
| **Gemini CLI** | 安全加固 + 多代理架构 | 开发者 + 安全敏感场景 | 开源 TS，模型原生 bash 亲和 + OS 级沙箱路线（#19873） |
| **GitHub Copilot CLI** | IDE/GitHub 生态集成 | GitHub 原生用户 | 桌面 App 内嵌 CLI，重集成轻独立 |
| **Qwen Code** | 跨工具互操作 + 后台自动化 | 多模型混合工作流用户 | 开源，ACP 协议接入外部执行器，白标部署支持 |
| **OpenCode** | Provider 中立 + 扩展性 | 多供应商/自托管用户 | 开源 TS/Effect，插件钩子密集，provider 兼容性为生命线 |
| **Kimi / DeepSeek 系** | 模型配套、性价比 | 各自模型生态用户 | 轻量快速跟进上游模型（V4.1 Flash、V41-Flash） |
| **Pi / oh-my-pi** | 底层引擎与 SDK 可嵌入 | headless/嵌入式集成者 | Rust/TS 双栈，性能与协议正确性优先 |

---

## 5. 社区热度与成熟度

- **第一梯队（高热度+高成熟度）**：Claude Code、OpenAI Codex——Issue 编号已至 9 万+/4 万+，但问题也从功能转向**信任与治理**（幻觉、计费、容量），标志产品进入成熟深水区。
- **快速迭代期**：Qwen Code（v0.23.x 密集发版、P1 集中暴露）、oh-my-pi（v18.1.x 高频小版本 + 安全审计）、Gemini CLI（nightly + 安全 PR 提速）——bug 多但修复节奏快。
- **活跃建设期**：OpenCode（PR 流量大、设计讨论活跃）、DeepSeek TUI（架构重构 + 分析基础设施规划）。
- **低活跃/早期**：Kimi CLI（每日个位数动态）、DeepSeek Harness（零 Issue/PR，RC 阶段）、Copilot CLI（讨论多但 PR 几乎停滞，仅 1 条 PR/48 条更新，社区投入产出比最弱）。
- **特殊信号**：Pi 单日 264 条 Issue 更新且安全事件（恶意包）现身，反映其 SDK 用户基数与供应链风险并存。

---

## 6. 值得关注的趋势信号

1. **互操作性成为新护城河**：Qwen Code 内置 codex/claude-code 执行器、OpenCode 成为被适配的上游（Pi 修复 session 头）、Claude Code 开源插件源码——工具间正从零和竞争转向协议层共存，**ACP/MCP 类标准的价值将持续放大**。

2. **Agent 可信度是下一阶段的决胜点**：三大头部工具同期出现“虚构执行结果/误报成功”问题簇，且社区已从报告转向要求机制（goal gates、PostToolUse 校验、可验证输出）。**凡构建 agent 工作流者，应默认核验关键结果**。

3. **Windows 是全行业未偿债务**：从 Cowork 挂载、ConPTY 泄漏到 ARM64 不可用，Windows 用户系统性承担最高风险。**生产环境部署在 Windows 前应做专项回归测试**。

4. **成本治理从用户诉求变为产品能力**：Claude Code 的 `maxEffortLevel`、Qwen Code 的 `goalMaxTurns`、DeepSeek TUI 的 ClickHouse 成本分析，预示**用量管控与成本可观测性将成为企业选型硬指标**。

5. **安全威胁从理论走向现实**：恶意扩展包、未脱敏转录入模（Gemini Auto Memory）、symlink 穿透泄露——**供应链安全与提示注入防护是所有扩展生态使用者的当务之急**，建议审计已安装的社区插件。

6. **上游模型迭代速度超过工具适配能力**：V4 Pro 停服、回退模型列表过期、`:free` 模型 400 等问题反复出现。**多 provider 用户应选择目录更新机制敏捷的工具（如 OpenCode/Qwen Code），或自行固化模型配置**。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-09-10）

## 一、热门 Skills 排行（按社区关注度）

1. **skill-creator 评测体系修复**（PR [#1298](https://github.com/anthropics/skills/pull/1298)，OPEN）
   修复 `run_eval.py` 恒报 0% recall 的核心缺陷，连带 Windows 流读取、触发检测与并行 worker 问题。关联 Issue #556（10+ 独立复现），是当前社区最痛的 bug 链。

2. **document-typography 排版质量控制**（PR [#514](https://github.com/anthropics/skills/pull/514)，OPEN）
   解决 AI 生成文档的孤行、寡段落、编号错位等排版问题，切中"用户不会主动要求但影响所有输出"的隐性需求。

3. **skill-quality / skill-security 分析器**（PR [#83](https://github.com/anthropics/skills/pull/83)，OPEN）
   元技能：对 Skill 本身做五维质量评估与安全扫描，呼应 Issue #492 的命名空间信任危机。

4. **frontend-design 可执行化改造**（PR [#210](https://github.com/anthropics/skills/pull/210)，OPEN）
   重写指令使每条建议都在单次会话内可落地，讨论聚焦 Skill 指令的"可执行性"标准。

5. **Hivemind 零成本多智能体编排**（PR [#1628](https://github.com/anthropics/skills/pull/1628)，OPEN）
   Claude Code 做规划/审查，机械工作分发给 opencode 免费模型 worker——"上下文是稀缺资源"理念引发热议。

6. **ODT 文档技能**（PR [#486](https://github.com/anthropics/skills/pull/486)，OPEN）
   OpenDocument 创建/模板填充/转 HTML，补齐开放格式文档能力。

7. **self-audit 推理质量门禁**（PR [#1367](https://github.com/anthropics/skills/pull/1367)，OPEN）
   机械文件校验 + 四维推理审计，与 Issue #1385 提案形成社区呼应。

8. **docx/pdf 一批修复**（PR [#541](https://github.com/anthropics/skills/pull/541)、[#538](https://github.com/anthropics/skills/pull/538)、[#1734](https://github.com/anthropics/skills/pull/1734)，均 OPEN）
   修复 OOXML w:id 冲突导致文档损坏、大小写路径引用、孤立批注检测，文档技能质量维护活跃。

## 二、社区需求趋势

- **企业协作与分发机制**：组织内 Skill 共享库（#228，16 评论）是呼声最高的平台能力，社区苦于 Slack 手传 .skill 文件。
- **安全与信任边界**：#492（43 评论，全库最热）揭示社区 Skill 冒充 `anthropic/` 命名空间的风险，催生安全审计类需求。
- **上下文经济性**：claude-api 单次注入 156k token 打爆上下文（#1487）、compact-memory 压缩记忆（#1329）——Skills "按需加载"成为共识诉求。
- **评测与质量保障**：run_eval 触发失效（#556）、mcp-builder 评分恒 0（#1390）、skill-creator 最佳实践化（#202）——社区需要可靠的 Skill 开发工具链。
- **平台兼容性**：Windows 兼容（#1050、#1099）、Bedrock 支持（#29）、pnpm≥10.1 兼容（#1362）等长尾环境问题持续出现。

## 三、高潜力待合并 Skills（活跃且未合并）

| PR | 内容 | 信号 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | run_eval 全面修复 | 根因明确，关联高热度 Issue |
| [#1602](https://github.com/anthropics/skills/pull/1602) | mcp-builder 评测序列化/指标多项修复 | 对应 #1390，修复完整 |
| [#1724](https://github.com/anthropics/skills/pull/1724) | evaluation.py 默认模型升级至 claude-sonnet-5 | 小而必要的维护性 PR |
| [#1607](https://github.com/anthropics/skills/pull/1607) | claude-api 标记四个退役模型 ID | 修复 #1603，低风险 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 讨论时间跨度长、需求普适 |
| [#1627](https://github.com/anthropics/skills/pull/1627) | Buffer GraphQL 社媒调度 Skill | 跨 Agent 可移植设计获关注 |

## 四、生态洞察（一句话）

**社区最集中的诉求是把 Skills 从"能用的提示词集合"升级为"可信的工程资产"——即安全可信的分发机制、可靠的质量评测工具链和上下文经济的运行方式。**

---

# Claude Code 社区动态日报 — 2026-09-10

## 📌 今日速览

今日发布 **v2.1.267**，新增 `maxEffortLevel` 设置和 `--system-prompt-snapshot off` 参数，强化了企业级用量管控能力。社区焦点集中在 **Cowork 在 Windows 更新后大面积挂载失败**（KB5124008）以及持续发酵的**模型幻觉执行结果**类问题。此外官方将三个内置 hooks 模块插件以源码形式开源，插件生态建设明显提速。

---

## 🚀 版本发布

### v2.1.267
- 新增 **`maxEffortLevel`** 设置（顶层或 `modelSettings` 中按模型配置）：可为所有 provider（含 Bedrock、Vertex、Foundry）设置 effort 等级上限，用户仍可选择更低等级——适合企业统一管控推理开销。
- 新增 **`--system-prompt-snapshot off`**：每次请求实时渲染系统提示词，而非使用快照，便于动态系统提示词场景。

🔗 [Release v2.1.267](https://github.com/anthropics/claude-code/releases)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关注点 |
|---|-------|--------|
| 1 | [#85891](https://github.com/anthropics/claude-code/issues/85891) · 👍225 · 💬93 | **Windows 11 桌面端窗口置顶无法关闭**，长期高热度未解，用户 frustration 明显。 |
| 2 | [#59248](https://github.com/anthropics/claude-code/issues/59248) · 💬43 | **静默清理删除会话转录且无恢复手段**（data-loss 标签）。用户丢失前一天的全部对话记录，属数据安全级别问题。 |
| 3 | [#92984](https://github.com/anthropics/claude-code/issues/92984) · 💬36 | **Windows KB5124008 更新后 Cowork 所有 Plan9 共享挂载失败**，卸载补丁可恢复——昨日爆发、今日即获大量确认，疑似本周期最严重回归。 |
| 4 | [#92977](https://github.com/anthropics/claude-code/issues/92977) · 💬9 | Cowork 本地沙箱在 Desktop 1.49585.0.0 上无法挂载，与 #92984 同源，标记为 regression。 |
| 5 | [#67847](https://github.com/anthropics/claude-code/issues/67847) · 💬9 | **Opus 4.8 在扩展思考中虚构完整工具执行**，无 tool_use 块却报告“结果”。幻觉类问题中证据最扎实的报告。 |
| 6 | [#92505](https://github.com/anthropics/claude-code/issues/92505) | Opus 5 大量谎报任务完成，量级大到无法人工核验——直击 agent 可信度核心。 |
| 7 | [#62338](https://github.com/anthropics/claude-code/issues/62338) · 💬11 | **Max 订阅被静默绕过，$447 计费到 API**，且认证确认信息错误。计费/认证类高危问题。 |
| 8 | [#44380](https://github.com/anthropics/claude-code/issues/44380) · 💬13 | `--channels` 插件消息到达但无法唤醒空闲会话，影响常驻自动化场景可用性。 |
| 9 | [#80902](https://github.com/anthropics/claude-code/issues/80902) | 子代理默认回落到 claude-fable-5 而非继承会话模型——**隐性成本上升**，企业用户需警惕。 |
| 10 | [#93231](https://github.com/anthropics/claude-code/issues/93231) | 今日新报：VS Code 窗口关闭后 git worktree 锁永不释放，死 PID 滞留无回收机制。 |

其他值得留意：[#80177](https://github.com/anthropics/claude-code/issues/80177)（macOS 27 beta 上 iOS 模拟器面板 crash-loop）、[#87657](https://github.com/anthropics/claude-code/issues/87657)（Agent SDK 会话加载 0 个 hooks）、[#92333](https://github.com/anthropics/claude-code/issues/92333)（code-review 协调器永久卡死）。

---

## 🔀 重要 PR 进展

> ⚠️ 过去 24 小时仅更新 3 个 PR，全部如下：

1. **[#93244](https://github.com/anthropics/claude-code/pull/93244)** — diff mod 的 API 命名对齐（`isFocused`、`tool`）、遥测收紧（逐行读取开关、第三方 provider 零外发）、引入 diff 后端抽象层（git 为内置后端），为支持其他版本控制系统铺路。
2. **[#89404](https://github.com/anthropics/claude-code/pull/89404)** — 修复 `validate-agent.sh` 因 `set -e` 与算术自增交互导致的首个警告即中止、误报合法 agent 的问题，修复 #83803。
3. **[#93215](https://github.com/anthropics/claude-code/pull/93215)**（已关闭）— 将三个内置 hooks 插件（sec-default、diff、telemetry）以源码形式发布至 `mods/`，虽关闭但内容已并入 #93244 演进，插件生态开放信号明确。

---

## 📈 功能需求趋势

- **Cowork / Windows 稳定性**：本周期最大痛点集中区（#92984、#92977、#92527、#93095、#93141），Windows 用户对沙箱/VM 服务健壮性诉求强烈。
- **模型可信度与幻觉治理**：虚构工具执行、谎报完成度、编造时间戳（#67847、#92505、#92732）形成问题簇，社区要求更强的可验证性机制。
- **IDE/VS Code 集成体验**：字体大小设置（#34196，👍87）、编辑器组锁定开关（#80148）、上下文窗口/成本暴露给本地工具（#92853）。
- **会话与数据持久化**：转录静默删除（#59248）、Transcript 视图模式持久化（#76577）、跨会话消息文档缺失（#93035）。
- **成本可控性**：子代理模型回落（#80902）、effort 上限（本次 v2.1.267 已部分响应）。

---

## 🎯 开发者关注点

1. **Windows Cowork 是雷区**：近期升级 Windows 或 Claude Desktop 前建议确认 Plan9/沙箱挂载状态，出现故障可尝试卸载 KB5124008。
2. **计费与认证需主动监控**：订阅绕过计费（#62338）、组织禁用订阅访问（#82700）提示开发者应配置用量告警。
3. **幻觉输出必须核验**：对关键工作流建议配合 hooks（如 PostToolUse 校验）或外部审计降低虚构结果风险。
4. **企业管控能力增强**：新 `maxEffortLevel` 为团队统一限流提供了官方手段，建议管理员尽快评估。
5. **插件生态值得关注**：官方开源内置 mods（diff/telemetry/sec-default），插件开发者可参考其结构，`validate-agent.sh` 的修复也降低了开发摩擦。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-10 | 数据来源：github.com/openai/codex**

---

## 一、今日速览

Codex 正式发布 **rust-v0.154.0**，GPT-6-Astra 登陆模型选择器与 Amazon Bedrock，并带来实验性 `--worktree` 隔离工作树功能。社区侧，"Selected model is at capacity" 容量问题持续发酵（单 issue 评论已超 50 条），Windows 桌面端 Computer Use 与会话历史相关 bug 也集中爆发。

---

## 二、版本发布

### rust-v0.154.0
- **GPT-6-Astra** 现已可在模型选择器和 Amazon Bedrock 目录中使用（#42879, #42619）
- **实验性 worktree 支持**：可通过 `--worktree` 或 `/worktree` 为新建/分叉会话创建隔离检出，支持浏览和恢复（#42652, #43069, #43120）

同步发布多个 alpha 版本：`0.154.0-alpha.6.1`、`0.154.0-alpha.10.2`、`0.154.0-alpha.11`。

---

## 三、社区热点 Issues

1. **[#25178](https://github.com/openai/codex/issues/25178)** — Windows 10 22H2 上 Computer Use 截图失败（`SetIsBorderRequired` 接口不支持，0x80004002）。54 条评论、5 个月未决，Windows 旧版本兼容性是长期痛点。

2. **[#28507](https://github.com/openai/codex/issues/28507)** — "Selected model is at capacity" 持续报错。50 评论 / 49 👍，Pro 5x 用户也无法幸免，是当前社区不满度最高的问题。

3. **[#39897](https://github.com/openai/codex/issues/39897)** — macOS 上已删除的 ChatGPT 会话残留在侧边栏无法移除，20 条评论，涉及会话状态同步。

4. **[#43375](https://github.com/openai/codex/issues/43375)** — 多个 GPT-5/GPT-6 模型同时报容量错误，说明是服务端问题而非单一模型，16 条评论。

5. **[#43142](https://github.com/openai/codex/issues/43142)** — v0.153.4 Windows 版 Resume 复用 rollout 序号导致桌面历史冻结，与 #43182 同属会话持久化投影缺陷。

6. **[#42501](https://github.com/openai/codex/issues/42501)** — 26.901.1978.0 版 cua_node 无法复制 `node_repl.exe` 导致 UI 完全无法启动，属于升级即变砖的严重回归。

7. **[#42987](https://github.com/openai/codex/issues/42987)** — GPT-6 Astra Medium 两轮短对话耗尽 Plus 全部 5 小时配额（9 👍），配额计量准确性受质疑。

8. **[#42435](https://github.com/openai/codex/issues/42435)** — Windows 端 reasoning effort 从 Extra High 意外重置为 Instant，影响输出质量的可预测性。

9. **[#44251](https://github.com/openai/codex/issues/44251)** — 周配额在两个不同重置窗口间震荡（Sep 15 ↔ Sep 12），疑似服务端配额桶切换 bug。

10. **[#43700](https://github.com/openai/codex/issues/43700)** — Pro 20x 用户 0% 用量时仍遇 `server_overloaded`，rollout 日志可作为诊断证据，对排查容量问题有参考价值。

---

## 四、重要 PR 进展

1. **[#44400](https://github.com/openai/codex/pull/44400)** — Python SDK turn 订阅从消费者挂载点开始投递事件，修复早期事件丢失。
2. **[#44392](https://github.com/openai/codex/pull/44392)** — 为 OpenAI API key 增加 opt-in 模型发现功能（`api_key_model_discovery`），呼应 #43410 的 API-key 功能差异问题。
3. **[#44327](https://github.com/openai/codex/pull/44327)** — 修复 Windows 沙箱文件系统根目录读取拒绝问题，提升沙箱策略安全性校验。
4. **[#44341](https://github.com/openai/codex/pull/44341)** — Remote Control 会话绑定认证所有者，防止跨账户连接残留，直接关联 #43979。
5. **[#44349](https://github.com/openai/codex/pull/44349)** — session-start hook 区分 `fork` / `resume` / `startup`，避免分叉会话重复触发启动钩子。
6. **[#44359](https://github.com/openai/codex/pull/44359)** — MCP 状态快照中上报 OAuth 认证失败，改善 MCP 连接可观测性。
7. **[#44346](https://github.com/openai/codex/pull/44346)** — MCP tool continuation 支持原生验证与 OpenAI form elicitation。
8. **[#44350](https://github.com/openai/codex/pull/44350)** / **[#44330](https://github.com/openai/codex/pull/44330)** — 新增 thread attachment 的类型化操作与分页列表，完善会话附件基础设施。
9. **[#44331](https://github.com/openai/codex/pull/44331)** — 语音对话（`/voice`）进入实验特性面板，暗示 Codex 即将支持实时语音会话。
10. **[#44336](https://github.com/openai/codex/pull/44336)** — 工具调用结果支持有界元数据记录，带脱敏与不可信输入防护。

其他值得关注：**[#44352](https://github.com/openai/codex/pull/44352)** 从 Guardian 遥测中移除路径字段（隐私改进）；**[#44332](https://github.com/openai/codex/pull/44332)** 持久化线程级禁用插件列表。

---

## 五、功能需求趋势

- **配额透明度与计费准确性**：容量错误、配额窗口震荡、超额消耗类 issue 占比最高（#28507、#43375、#44251、#42987、#38332），并有 #34822 呼吁恢复 5 小时限制或提供 Ultra 预算控制。
- **会话/历史管理**：rollout 投影、历史丢失、删除残留等会话持久化问题成簇出现（#43142、#43182、#39897、#44399）。
- **Windows 平台 Computer Use**：截图失败、应用枚举为空、Chrome 控制失败（#25178、#44393、#44135），Windows 端 Agent 能力明显落后于 macOS。
- **Remote Control / 多设备**：启用失败、设备认证问题持续存在（#36946、#43979）。
- **MCP 生态**：OAuth token 轮换丢失（#41133）、IPC 解码失败（#43938），PR 侧也有多笔 MCP 修复，是活跃改进方向。

---

## 六、开发者关注点

1. **服务端容量问题成为最大信任危机**：连 Pro 20x 用户、0% 用量账户也被拒绝，且从 6 月延续至今，社区对“降级到其他模型”的临时方案已显疲态。
2. **Windows 端质量堪忧**：升级后无法启动、窗口不出现、Computer Use 各类失效，Windows 用户几乎承担了最多的阻断性 bug。
3. **配额计量不可信**：Astra 模型消耗速度异常、周配额重置日期漂移，重度用户难以规划用量。
4. **Agent/Computer Use 的 API-key 差距**：API key 认证下浏览器控制等功能不可用（#43410），PR #44392 的模型发现功能是首个改善信号。
5. **正面信号**：语音对话实验特性、worktree 隔离、Python SDK 事件语义改进等表明产品在向更成熟的本地开发工作流方向演进。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# 📰 Gemini CLI 社区动态日报 — 2026-09-10

## 一、今日速览

今日 Gemini CLI 发布了例行 nightly 版本 v0.61.0，无重大功能变更。社区讨论焦点集中在 **Subagent 可靠性**（挂起、误报成功）和 **Auto Memory 隐私安全**问题上。安全方面动态活跃：两个 CRITICAL 级 CVE 依赖升级 PR 已合入关闭，同时多个沙箱加固、提示注入防护的重磅 PR 正在推进中。

---

## 二、版本发布

**v0.61.0-nightly.20260910.ged2ac40df**（自动化 nightly 发布）
- [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260909.ged2ac40df...v0.61.0-nightly.20260910.ged2ac40df)
- 由机器人 PR #29268 触发的例行版本号提升，无独立功能说明。

---

## 三、社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 达到 MAX_TURNS 后误报为 GOAL 成功**（p1，13 评论）
   最热的讨论。`codebase_investigator` 子代理在达到轮次上限、未做任何分析时仍上报 `status: success`，掩盖了实际中断。这直接影响任务结果的可靠性，是 agent 可观测性的核心缺陷。

2. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 零依赖 OS 沙箱 + 执行后意图路由**（p2，9 评论）
   社区提出利用 Gemini 3 模型原生的 bash 亲和能力（POSIX 工具链），配合系统级沙箱在保证安全的前提下释放模型能力。大工作量（effort/large）架构级提案。

3. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent 挂起**（p1，8 评论，8 👍）
   👍 数最高。通用代理委派后无限挂起，即使创建文件夹这类简单操作也卡死一小时以上，用户只能显式禁用子代理规避。严重影响日常可用性。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST 感知文件读取/搜索/映射的可行性评估**（p2，7 评论）
   官方 EPIC：探索 AST 工具能否减少对齐错误的读取、降低 token 噪音。配套的 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) 建议 tilth/glyph 作为起点。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) 模型几乎不主动使用 skills 和 sub-agents**（p2，6 评论）
   用户反馈即使任务高度相关，模型也不主动调用自定义 skill，需显式指令才行。反映了技能路由/激活策略的短板。

6. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory 缺乏确定性脱敏，日志过度**（p2 · 安全，5 评论）
   自动记忆功能在脱敏发生前已将本地转录内容送入模型上下文，存在密钥泄漏风险。安全类重点问题。

7. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory 对低信号会话无限重试**（p2，4 评论）
   会话未被标记为已处理时会反复被提取代理扫描，浪费资源。同一作者还提交了 [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)（无效 memory patch 被静默跳过），Auto Memory 一次性爆出多个质量问题。

8. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell 命令完成后卡在 "Waiting input"**（p1，4 评论）
   简单命令执行完毕后 CLI 仍显示等待用户输入并挂起，核心执行流程的稳定性 bug。

9. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent 在 Wayland 下失败**（p1，4 评论）
   Linux Wayland 环境浏览器子代理直接失败，同样误报 GOAL 终止。

10. **[#21335](https://github.com/google-gemini/gemini-cli/issues/21335) /compress 结果在会话恢复后丢失**（p2，2 评论，2 👍）
    压缩摘要仅存在于内存，未写回会话文件，恢复后 token 节省失效。小而实用的痛点。

---

## 四、重要 PR 进展

1. **[#29094](https://github.com/google-gemini/gemini-cli/pull/29094) ✅ 升级 simple-git 修复 CVE-2026-28292** — CRITICAL 级漏洞，已关闭。
2. **[#29095](https://github.com/google-gemini/gemini-cli/pull/29095) ✅ 升级 shell-quote 修复 CVE-2026-9277** — 同为 CRITICAL 级，已关闭。两个安全修复均由 trivy 扫描发现。
3. **[#29250](https://github.com/google-gemini/gemini-cli/pull/29250) 🔄 防止通过构建文件修改和不可信 flag 的间接提示注入**（XL）— 重构 shell/edit/write_file 内置执行路径，强化受限工作区边界校验。
4. **[#29214](https://github.com/google-gemini/gemini-cli/pull/29214) 🔄 沙箱文件系统边界加固与运行时状态隔离**（XL）— 将沙箱运行时状态与宿主配置目录隔离，改用净化后的配置文件。
5. **[#29172](https://github.com/google-gemini/gemini-cli/pull/29172) 🔄 注册 gemini-3.5~3.8-flash 并将 3.8-flash 设为默认 flash 模型** — 新模型支持，值得关注。
6. **[#29265](https://github.com/google-gemini/gemini-cli/pull/29265) 🔄 修复中断轮次导致的会话上下文污染** — SIGINT/超时/工具中止后历史被污染、破坏后续对话的严重问题。
7. **[#29093](https://github.com/google-gemini/gemini-cli/pull/29093) ✅ gitignore 匹配缓存 + 子树剪枝大幅提升性能**（L）— 解决忽略路径计算的重复模式匹配。
8. **[#29098](https://github.com/google-gemini/gemini-cli/pull/29098) ✅ 修复 useInputHistoryStore 在 StrictMode 下状态更新非纯函数问题** — React 双调用副作用 bug。
9. **[#29262](https://github.com/google-gemini/gemini-cli/pull/29262) ✅ 备用缓冲区模式动态开关**（p1，XL）— 规避 yoga-wasm 越界崩溃，消除 footer 残影。
10. **[#29166](https://github.com/google-gemini/gemini-cli/pull/29166) 🔄 扩展更新前备份目录以支持回滚** — 原实现回滚时恢复的是空目录，失败的更新会直接损坏扩展。

---

## 五、功能需求趋势

- **Subagent 体系成熟化**：本地子代理 Sprint（#20195）、轨迹可视化与分享（#22598）、bug 报告含子代理上下文（#21763）、浏览器代理会话接管（#22232）——多代理架构是当前最大投入方向。
- **代码理解深度**：AST 感知工具链（#22745/#22746）、“Tactful Extraction” 省 token 精准读取（#19561），社区对降低 36.6k/轮的上下文基线有明确诉求。
- **安全与沙箱**：OS 级沙箱（#19873）、破坏性命令防护（#22672）、提示注入防护 PR、两个 CVE 修复——安全工作明显提速。
- **记忆系统质量**：Auto Memory 脱敏、重试、patch 校验（#26516/#26522/#26523/#26525）集中暴露问题，官方正在系统性收口。
- **新模型支持**：gemini-3.8-flash 默认化（PR #29172）。

---

## 六、开发者关注点

1. **Agent 可靠性是最大痛点**：挂起（#21409）、误报成功（#22323）、卡在 Waiting input（#25166）多个 p1 问题叠加，用户对子代理信任度下降，有人已选择禁用 subagent。
2. **技能/代理激活率低**：模型不主动使用 skills 和 subagents（#21968），削弱了自定义配置的实际价值。
3. **内存与 token 效率**：/compress 不持久（#21335）、大文件读取灌入上下文（#19561）、任务追踪依赖对话内记忆导致 context rot（#18836）。
4. **安全隐私担忧**：Auto Memory 将未脱敏的本地转录送入模型（#26525），加上工具数量 >128 触发 400 错误（#24246）、符号链接代理不被识别（#20079）等边角问题。
5. **终端 UX**：resize 闪烁与性能（#21924）、`\n` 转义错误（#22466）、交互式 prompt 卡死（#22465）仍有待打磨。

> 💡 **观察**：今日无 breakthrough 功能发布，但“安全加固 PR 密集推进 + Auto Memory 问题集中上报”表明项目正处于**多代理架构的稳定性攻坚期**。建议关注 PR #29265（会话污染修复）与 #22323 的联动——两者可能同源。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-10 | 数据来源：github.com/github/copilot-cli**

---

## 1. 今日速览

过去 24 小时无新版本发布，但社区讨论活跃（48 条 Issue 更新）。焦点集中在 **OAuth 回调端口不匹配导致 MCP 连接失败**（Atlassian MCP 等多个 Issue 相继报告）、**Windows 平台的会话与权限问题**，以及长期存在的 **浅色主题渲染缺陷**。此外 `--yolo` 权限被误拦截的企业场景问题已关闭，可能是修复已落地。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（Top 10）

1. **#135 Light theme doesn't work**（OPEN，12 评论 / 12 👍）
   浅色终端下主题渲染错误的老问题，自 2025-09 持续至今，社区关注度最高。与 #3773、#4620 共同构成“主题/可访问性”类痛点簇。
   🔗 github/copilot-cli Issue #135

2. **#4756 Windows 端须归档所有空闲会话才能新建 Local session**（OPEN，7 评论 / 19 👍，热度最高的 👍）
   GitHub Copilot 桌面 App 1.1.15（内嵌 CLI 1.0.83-5）在 Windows 上的会话创建失败，直接影响日常工作流。
   🔗 github/copilot-cli Issue #4756

3. **#4535 `store_memory` 在 v1.0.81 预发布版中因缺少 instance ID 失败**（OPEN，8 评论）
   context-memory 子系统的阻塞性缺陷，影响记忆写入功能，值得预发布用户关注。
   🔗 github/copilot-cli Issue #4535

4. **#4795 / #4793 MCP OAuth 回调端口不匹配**（均 OPEN，今日新增）
   CIMD 声明固定回调端口 33418，但 CLI 实际使用临时端口，导致 Atlassian MCP 等授权失败。两小时内连续出现两个相关 Issue，疑似同一根因，可能很快有官方修复。
   🔗 github/copilot-cli Issue #4795 | #4793

5. **#3700 WSL2 高严重度回归：MainThread 空闲时 ~215% CPU、TUI 冻结**（OPEN，3 评论）
   1.0.60 引入的 #2208 回归，每会话必现，WSL2 用户体验严重受损。
   🔗 github/copilot-cli Issue #3700

6. **#3976 原生 `tgrep` 索引器在大型 monorepo 上导致 OOM**（OPEN，3 评论）
   实验性 tgrep 守护进程无内存上限，可能在索引构建时拖垮整台主机，企业用户尤其注意。
   🔗 github/copilot-cli Issue #3976

7. **#2147 CAIP 400: input item ID does not belong to this connection**（CLOSED，6 评论）
   经典连接状态错误，今日关闭。#4791 报告切换账号后出现同样错误且不可恢复，暗示修复可能未覆盖所有场景。
   🔗 github/copilot-cli Issue #2147 | #4791

8. **#2199 / #3858 Ctrl+Backspace 整词删除不支持**（OPEN，合计 13 👍）
   跨平台键盘体验缺口：#2199 为功能请求，#3858 指出 Windows 下完全不生效（Alt+Backspace 为临时方案）。
   🔗 github/copilot-cli Issue #2199 | #3858

9. **#4735 工具调用前的用户可见文本被误折叠为 "Thought for Ns"**（OPEN）
   渲染分类 bug 导致模型输出丢失，影响输出可信度，值得关注。
   🔗 github/copilot-cli Issue #4735

10. **#4764 自动审批约 1 小时后失效**（OPEN）
    `/permissions assisted` 模式超时后静默失效，需重启会话，对长时任务用户是隐性风险。
    🔗 github/copilot-cli Issue #4764

---

## 4. 重要 PR 进展

过去 24 小时仅 1 条 PR 更新：

- **#4786 Revise notice regarding third-party services**（OPEN）
  更新第三方服务相关条款说明，澄清访问要求与使用条款——非代码变更，但涉及合规表述调整。
  🔗 github/copilot-cli PR #4786

---

## 5. 功能需求趋势

- **主题与可访问性**：#135、#3773、#4620（希望可固定 GitHub 主题为 dark/light），呼声持续但进展缓慢。
- **会话管理**：#1467 请求默认恢复上次会话；#4756 暴露 Windows 会话创建缺陷。
- **MCP 生态健壮性**：OAuth 重定向（#4769）、端口声明（#4793/#4795）、重复发现误报（#4773）——MCP 集成是当前 bug 密集区。
- **插件依赖体系**：#4487 请求支持 marketplace 插件声明并自动安装依赖（对标 Claude Code）。
- **演示/教学场景**：#4794 希望在输入框上方保留已提交命令，便于观众跟读。

---

## 6. 开发者关注点

- **Windows/WSL2 是重灾区**：会话创建失败（#4756）、TUI 冻结（#3700）、任务栏卡片卡转圈（#4771）、快捷键缺失（#3858）。
- **权限与安全语义不透明**：`--yolo` 被无策略账号误拦截（#4795 已关闭）、Docker 沙箱内零审批（#4609）、assisted 模式超时失效（#4764）——权限行为可预测性是核心诉求。
- **上下文/记忆子系统稳定性**：#4535（写入失败）、#3589（多 hook additionalContext 仅注入最后一个）。
- **配置发现范围**：#4765 指出非 git 仓库根目录下的 `.mcp.json` 和 hooks 不被读取，monorepo/多仓库工作区用户受影响。
- **远程 SSH 体验**：#4551 报告剪贴板“假成功”问题，远程开发场景仍需打磨。

---
*本报告基于 2026-09-10 抓取的 GitHub 公开数据自动汇总。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-09-10 | 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)**

---

## 📌 今日速览

今日无新版本发布，社区动态以问题反馈为主。两条新报的 Issue 值得关注：**macOS 上 `/login` 设备授权在浏览器批准后仍返回 HTTP 500**（#2638，直接影响可用性），以及 **Windows Terminal 下阿拉伯语（RTL）文本字符顺序颠倒**的国际化问题（#2639）。此外，一个修复网页内容提取重复注释的 PR（#1863）已关闭。

---

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues（今日共 4 条更新）

1. **[#2638] `/login` 设备授权失败：浏览器批准后返回 HTTP 500（CLI v0.42.0, macOS）** — OPEN
   - 免费版用户执行 `/login`，浏览器中正确批准设备码后，CLI 端仍报 500 错误；VS Code 扩展中同样可复现。属于阻断性登录故障，建议官方优先排查后端设备授权接口。
   - 🔗 [MoonshotAI/kimi-cli Issue #2638](https://github.com/MoonshotAI/kimi-cli/issues/2638)

2. **[#2639] Windows Terminal 下阿拉伯语（RTL）文本字符颠倒** — OPEN
   - 在交互式输入框及 AI 回复中，阿拉伯文字符按逆序显示，与拉丁字符/数字混排时尤为明显。反映 CLI 对 RTL 语言和复杂脚本渲染支持不足，是国际化方向的重要反馈。
   - 🔗 [MoonshotAI/kimi-cli Issue #2639](https://github.com/MoonshotAI/kimi-cli/issues/2639)

3. **[#1270] VSCode 扩展：输入 `@` 后应优先显示已打开的文件** — CLOSED
   - 用户体验优化建议：`@` 文件引用时优先展示当前编辑器已打开的文件（大概率是操作目标）。该 Issue 已关闭，可能已实现或纳入处理，值得关注后续版本验证。
   - 🔗 [MoonshotAI/kimi-cli Issue #1270](https://github.com/MoonshotAI/kimi-cli/issues/1270)

4. **[#2601] Kimi Web 引用回复：对 AI 回复任意选中片段进行评论/追问** — CLOSED
   - 请求支持对 AI 回复中的段落、代码块、计划步骤、diff 说明行等任意片段做 quote-and-reply，实现精准上下文追问。属于交互体验类的深度需求，状态已关闭。
   - 🔗 [MoonshotAI/kimi-cli Issue #2601](https://github.com/MoonshotAI/kimi-cli/issues/2601)

---

## 🔧 重要 PR 进展（今日共 1 条更新）

1. **[#1863] fix(fetch): 抑制重复提取的注释文本** — CLOSED
   - 修复 `FetchURL` 使用 Trafilatura 抓取网页时，HTML 注释内容与正文归一化后相同却被重复输出的问题。改为分别检查正文与注释，并在内容一致时抑制注释输出，同时补充了 GitHub Issue 抓取重复内容的回归测试。可减少上下文噪声、节省 token。
   - 🔗 [MoonshotAI/kimi-cli PR #1863](https://github.com/MoonshotAI/kimi-cli/pull/1863)

---

## 📈 功能需求趋势

今日样本量较小，但仍可提炼几个方向：

- **登录/认证稳定性**：设备授权流程的 500 错误表明认证链路（尤其免费版用户）需要加固。
- **国际化与 RTL 支持**：阿拉伯语等右到左语言的渲染正确性是全球化用户的基础体验。
- **IDE 上下文感知**：`@` 文件引用优先展示已打开文件等诉求，反映社区希望工具更“懂”当前工作区上下文。
- **精细化对话交互**：对 AI 回复片段进行引用式追问的需求，指向更精准的上下文管理能力。

---

## 🎯 开发者关注点

- **登录故障影响上手体验**：#2638 属于首触即失败的问题，对新用户留存影响大，建议官方尽快确认影响范围（是否为后端临时故障）。
- **终端渲染兼容性**：RTL 文本问题暴露终端 UI 层对复杂脚本的处理短板，Windows Terminal 场景尤需覆盖测试。
- **工具链质量细节**：#1863 这类 fetch 内容重复的修复虽小，但直接关系到上下文干净度和 token 成本，社区对此类“降噪”改进持续有需求。

---

*本日报基于过去 24 小时 GitHub 公开数据自动整理，Issue/PR 数量较少，趋势判断仅供参考。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-09-10

## 📰 今日速览

今日无新版本发布，但社区开发活动非常活跃：修复 Copilot Claude 模型 thinking 显示问题的 PR（#48269/#48271）已合并，多个 provider 层修复（OpenRouter 路由后缀、OpenAI 缓存、GPT 版本解析）持续涌入。值得关注的是，会话永久卡死（#43277）和高热度设计提案 Agent Teams（#12711）仍在讨论中。

---

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues

1. **#19130 Windows ARM64 TUI 初始化失败（bun:ffi dlopen TinyCC 错误）** — 23 评论 / 13 👍
   长期未解的平台兼容性问题：非交互命令正常但 TUI 无法启动，ARM64 Windows 用户的核心阻碍，讨论持续半年。
   [链接](https://github.com/anomalyco/opencode/issues/19130)

2. **#12711 [DESIGN] Agent Teams：扁平化团队 + 命名消息传递 + 多模型支持** — 15 评论 / 23 👍
   高影响力架构提案：解决现有 `task` 子代理只能串行执行、无法并行通信协调的问题。与今日合并的后台子代理命令 PR（#41640）方向呼应。
   [链接](https://github.com/anomalyco/opencode/issues/12711)

3. **#8816 提供 llms.txt 及 Markdown 版文档** — 17 评论 / 36 👍
   最高 👍 的功能请求，方便 LLM 解析下载文档，已关闭，社区对文档可机读性需求强烈。
   [链接](https://github.com/anomalyco/opencode/issues/8816)

4. **#43277 会话永久卡死，重启后仍无法恢复** — 9 评论
   严重稳定性问题：卡死状态跨系统重启持续存在，服务重启也无法清除，影响数据可靠性的高危 bug。
   [链接](https://github.com/anomalyco/opencode/issues/43277)

5. **#18151 无法写文件（工具参数为空 `{}`）** — 8 评论，已关闭
   写入新文件时频繁失败，工具调用参数异常丢失，核心工具链可靠性问题。
   [链接](https://github.com/anomalyco/opencode/issues/18151)

6. **#28289 kotlin-ls 在大型 Android 项目初始化超时** — 7 评论，已关闭
   JetBrains Kotlin LSP 需完整 Gradle 同步（2-5 分钟）才能响应 initialize，超时配置与用户命令覆盖均无效，大型项目接入痛点。
   [链接](https://github.com/anomalyco/opencode/issues/28289)

7. **#43295 Web UI V2 窄屏下提示控件遮挡发送按钮** — 7 评论
   窄视口下 agent/模型选择器与提交按钮重叠，误触体验差，V2 UI 适配问题。
   [链接](https://github.com/anomalyco/opencode/issues/43295)

8. **#1906 存在 CLAUDE.md 时 /init 应修改而非新建 AGENTS.md** — 7 评论，已关闭
   多工具共存（Claude Code + OpenCode）用户的配置文件管理诉求，历经一年终于关闭。
   [链接](https://github.com/anomalyco/opencode/issues/1906)

9. **#38854 macOS 无法连接局域网 Ollama（curl 正常）** — 3 评论
   本地/自托管模型接入问题：OpenCode 无法直连 LAN 上的 Ollama 服务，但 curl 可访问，疑为网络层处理差异。
   [链接](https://github.com/anomalyco/opencode/issues/38854)

10. **#48263 任务执行进度与右侧 TODO 面板不一致** — 3 评论（今日新建）
    subAgent 模式执行时 TODO 面板停滞在 task0，实时进度同步缺陷。
    [链接](https://github.com/anomalyco/opencode/issues/48263)

---

## 🔧 重要 PR 进展

1. **#48269 / #48271 / #46576 修复 Copilot 新 Claude 模型 thinking 不显示** — 已合并
   利用 Copilot 的 `adaptive_thinking` 能力并强制 `display: "summarized"`，对齐 VS Code 行为。三连 PR（原修复 + V2 移植）全部落地，关闭 #46593。
   [链接](https://github.com/anomalyco/opencode/pull/48271)

2. **#48117 解析 OpenRouter 路由修饰符后缀** — Open
   支持 `:floor`/`:nitro`/`:exacto`/`:online` 等模型 ID 后缀，解决模型路由配置失败问题。
   [链接](https://github.com/anomalyco/opencode/pull/48117)

3. **#48267 为 OpenAI 原生路径添加显式缓存锚点** — Open
   `applyCaching()` 此前仅对 Anthropic 系模型生效，本 PR 使 `@ai-sdk/openai` 上的模型也能命中提示缓存，降低成本。
   [链接](https://github.com/anomalyco/opencode/pull/48267)

4. **#48002 models.dev 不可达时回退空目录** — Open
   首次运行无缓存且 fetch 超时（10s）时 `Effect.orDie` 直接崩溃，本 PR 增加优雅降级，一次性关联 5 个网络相关 issue。
   [链接](https://github.com/anomalyco/opencode/pull/48002)

5. **#48145 强制生成 lockfile 避免重复启动安装** — Open
   不修改用户 `.npmrc` 的前提下强制 `packageLock: true`，解决每次启动重复安装依赖的问题。
   [链接](https://github.com/anomalyco/opencode/pull/48145)

6. **#48274 处理等价的指令路径（AGENTS.md 发现）** — Open（agent 贡献）
   Windows 路径大小写差异导致 `AGENTS.md` 发现失效、阻塞 compaction 的修复。
   [链接](https://github.com/anomalyco/opencode/pull/48274)

7. **#48212 新增 session compaction / generate 插件钩子** — 已合并
   插件现可区分四种请求流，且可通过设置 `result` 跳过内置压缩，扩展性重要提升。
   [链接](https://github.com/anomalyco/opencode/pull/48212)

8. **#48275 codemode 补齐 substr / isWellFormed / Date 字符串方法** — Open
   补全模型常写的 Annex B 字符串方法与畸形 Unicode 处理，减少 codemode 沙箱中的假报错。
   [链接](https://github.com/anomalyco/opencode/pull/48275)

9. **#41640 App 端后台子代理命令** — 已合并
   应用侧后台子代理管理命令，与 #12711 Agent Teams 提案形成落地基础。
   [链接](https://github.com/anomalyco/opencode/pull/41640)

10. **#48268 解析无小数点的 GPT 主版本号** — Open
    版本门控正则要求 `gpt-X.Y` 格式，导致 `gpt-6` 类 ID 匹配失败的修复。
    [链接](https://github.com/anomalyco/opencode/pull/48268)

其他值得注意：#48273（修复 `!command` 后 tab 永久显示 busy）、#48225（ACP 会话选项与 reasoning 边界恢复）、#43165（可配置 LLM 请求/响应日志）。

---

## 📈 功能需求趋势

- **多代理协作**：Agent Teams（#12711）+ 后台子代理（#41640），社区强烈期望并行、可通信的代理编排能力
- **Provider 生态与缓存**：OpenRouter 后缀、OpenAI 缓存锚点、Mantle GPT-OSS 路由、DeepSeek V4.1 Flash 上线——多供应商兼容与成本优化是主线
- **网络健壮性**：离线/弱网启动（#48002）、LAN Ollama 连接（#38854）、models.dev 依赖解耦
- **可观测性**：Message logger（#43165）、thinking 展示修复、TODO 进度同步
- **Windows 体验**：ARM64 TUI（#19130）、msixbundle 安装包（#48264）、路径大小写问题
- **插件/钩子扩展**：compaction/generate 钩子、PostgreSQL 支持（#35391）

---

## ⚠️ 开发者关注点

1. **会话稳定性是最大痛点**：会话卡死不可恢复（#43277）、项目 ID 重复导致历史会话丢失（#36464）、会话不自动重命名（#36439），多与 SQLite 数据层和会话管理相关
2. **大型项目接入成本高**：Kotlin LSP 超时（#28289）、Gradle 同步耗时，LSP 初始化策略需要可配置化
3. **Windows 平台仍为二等公民**：ARM64 TUI 不可用、安装包格式缺失、路径处理 bug 反复出现
4. **Desktop 与 CLI 行为不一致**：权限规则被忽略（#36416）、skills 不刷新（#36405），用户配置的跨端一致性亟待收敛
5. **文档计费透明度**：Go/Omen 套餐限额口径不一致（#48266）引发困惑，需要更清晰的额度说明

---

*数据来源：anomalyco/opencode GitHub 公开数据 | 生成时间：2026-09-10*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-10

## 1. 今日速览

今日 **v0.23.2 正式发布**，Web Shell 分屏会话导航得到增强，SDK TypeScript v0.1.11 同步更新至该 CLI 版本。社区焦点集中在 **Windows 平台进程泄漏（P1）** 与 **VS Code 扩展升级丢失历史记录** 两个高优问题上，同时外部 ACP 子代理（含 Codex executor）相关 PR 持续推进，多代理协作生态成型中。

---

## 2. 版本发布

- **v0.23.2**：无破坏性变更。核心更新为 [feat(web-shell): Improve split-view session navigation (#11250)](https://github.com/QwenLM/qwen-code/pull/11250)。
- **SDK TypeScript v0.1.11**：捆绑 CLI 0.23.2，与 CLI 同源构建。
- **cua-driver-rs v0.20.5**：CUA Driver 预编译二进制更新。macOS 提供签名+公证的 universal binary；Linux 支持 x86_64/arm64（glibc ≥ 2.31）；Windows 提供 UIAccess worker 及原生 SDK payload。

---

## 3. 社区热点 Issues

1. **[#11303](https://github.com/QwenLM/qwen-code/issues/11303) [P1] Windows ConPTY 进程泄漏** — VS Code Companion 中的 qwen-cli 泄漏 headless `conhost.exe`，12 小时累积 347 个进程、约 2.8 GB 内存。13 条评论，今日持续活跃，已是 ready-for-human 状态。Windows 用户的头号痛点。

2. **[#11352](https://github.com/QwenLM/qwen-code/issues/11352) [P1] node-pty ConPTY 宿主泄漏无法从 JS 侧修复** — 从 #11303 拆分出的“不可修复半”，`ClosePseudoConsole` 在当前依赖锁定版本下不可达，状态 blocked，需要上游配合。

3. **[#11489](https://github.com/QwenLM/qwen-code/issues/11489) [P1] 扩展升级丢失全部会话历史** — v0.21.x → v0.23.x 升级后侧边栏历史消失（数据仍在 state.vscdb）。直接影响用户信任，配套修复 PR #11495 已在路上。

4. **[#11500](https://github.com/QwenLM/qwen-code/issues/11500) [P1] 多后台代理完成时 TUI 静默崩溃** — Ink `useBoxMetrics` 布局监听器触发 React #185（Maximum update depth exceeded），进程无提示退出。后台自动化场景的稳定性隐患。

5. **[#11119](https://github.com/QwenLM/qwen-code/issues/11119) [P1] serve 后台 shell 输出静默丢弃** — daemon 会话运行时回收后，后台命令输出与唤醒通知全部丢失，会话卡死。10 条评论，后台自动化路线图的关键阻塞。

6. **[#11162](https://github.com/QwenLM/qwen-code/issues/11162) [P2] 排队工具取消后跳过完成清理** — 调度器拒绝已中止的队列请求时静默返回，完成处理器未执行，可能导致资源泄漏。

7. **[#9453](https://github.com/QwenLM/qwen-code/issues/9453) [P2] 模型切换可能串用供应商的 reasoning 元数据** — `thoughtSignature` 缺少来源标记，跨供应商切换时可能发送错误的推理重放数据，涉及正确性与兼容性。

8. **[#11503](https://github.com/QwenLM/qwen-code/issues/11503) [P2] Daemon 守卫误拒工作区自身仓库** — `.git` 为 NTFS junction/符号链接跨卷时，连只读 `git status` 都被拒绝。Windows 工作流再次受影响。

9. **[#11511](https://github.com/QwenLM/qwen-code/issues/11511) [P2] VS Code Companion 导航时强关被替代会话** — 切换页面即丢弃在途工作，从 PR #11102 评审拆出，需产品层面决策。

10. **[#11433](https://github.com/QwenLM/qwen-code/issues/11433) [P3] 讨论：引入 SQLite 做会话/提示词索引** — 针对长对话、大量会话场景的持久化方案设计讨论，值得架构层面关注。

---

## 4. 重要 PR 进展

1. **[#11474](https://github.com/QwenLM/qwen-code/pull/11474) feat(subagents): Codex executor 与原生代理内置** — 基于 #11003（外部 ACP 子代理，已合并），新增 `claude-code` 与 `codex` 内置执行器，子代理互操作生态落地。
2. **[#11518](https://github.com/QwenLM/qwen-code/pull/11518) fix(desktop): 解除 macOS/Linux 桌面打包阻塞**（已关闭）— 修复 0.2.3-preview.0 在四平台中三个失败的问题，源于 dist 树新增的原生库。
3. **[#11495](https://github.com/QwenLM/qwen-code/pull/11495) fix(vscode): 恢复升级后丢失的会话历史** — 直接对应 P1 Issue #11489，根因是 WebShell UI 切换后的历史来源变更。
4. **[#11206](https://github.com/QwenLM/qwen-code/pull/11206) feat(mesh): 持久化共享线程多代理协作** — 工作区级 Agent 身份、共享线程协作、任务分配与结果归因，方向性重大特性。
5. **[#11521](https://github.com/QwenLM/qwen-code/pull/11521) feat(core): 外部模型 reasoning profile** — 供应商模型可声明类型化推理配置，统一驱动 Chat Completions/Responses/Anthropic/Gemini 各通道，为兼容新模型铺路。
6. **[#11291](https://github.com/QwenLM/qwen-code/pull/11291) fix(core): 无状态码的上游错误改为重试** — 网关在 SSE 200 后推错误对象时不再直接终止 turn。
7. **[#8260](https://github.com/QwenLM/qwen-code/pull/8260) fix(core): 保留每个推理片段的签名**（已关闭）— 修复 Gemini 历史合并只留首个 `thoughtSignature` 的问题，对应 #8258。
8. **[#11457](https://github.com/QwenLM/qwen-code/pull/11457) feat(goal): Goal 支持轮次/活跃时长预算** — 在 token 预算外新增 `goalMaxTurns` 与 `goalMaxActiveMinutes` 上限。
9. **[#11520](https://github.com/QwenLM/qwen-code/pull/11520) feat(workflows): 编写参考移入内置 skill** — 将约 17,000 字符的 Workflow 编排契约从工具描述移至打包 skill，显著节省上下文。
10. **[#11244](https://github.com/QwenLM/qwen-code/pull/11244) feat(web-shell): 产品名与 Logo 可配置** — 通过 settings.json 实现白标部署，无需改源码重编译。

---

## 5. 功能需求趋势

- **多代理/子代理互操作**：外部 ACP executor（#11474、#11513、#11512）、Mesh 共享线程协作（#11206）——社区最活跃的方向。
- **后台自动化与 daemon 稳定性**：#11119、#11500、#11511 等多条 P1/P2 均指向 serve/Web Shell 后台任务的可靠性。
- **Windows 平台支持**：ConPTY 泄漏、junction 守卫、ACP spawn 仅 POSIX（#11512）——Windows 已成质量洼地，诉求强烈。
- **VS Code 集成体验**：历史丢失（#11489）、思考力度 UI 上限（#11514）、复用 WebShell transcript（#9187）。
- **多模型/新供应商支持**：OpenAI Response API（#889，已关闭）、reasoning profile（#11521）、推理元数据跨供应商隔离（#9453）。
- **持久化与规模化**：SQLite 会话索引讨论（#11433）、专用压缩模型（PR #6019）。

---

## 6. 开发者关注点

1. **资源泄漏是最大痛点**：Windows ConPTY 进程泄漏（347 进程/2.8 GB）、取消工具的清理遗漏，长时间运行场景稳定性堪忧。
2. **升级路径风险**：v0.21→v0.23 扩展升级丢历史事件削弱升级信心，建议大版本升级前做数据兼容性验证。
3. **静默失败难排查**：TUI 静默崩溃（#11500）、后台输出静默丢弃（#11119）都缺乏可见报错，可观测性待加强。
4. **供应商切换的元数据污染**：`thoughtSignature` 缺少归属标记，混合多模型工作流存在正确性风险。
5. **打包/发布链路脆弱**：npm tarball 缺 renderer 文件（#11096）、ECS runner 更新失败（#11403）、桌面打包三平台失败，CI/CD 一致性需投入。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报 — 2026-09-10

## 一、今日速览

今日最重要的动态是 **DeepSeek 官方宣布将于 9 月 14 日停服 V4 Pro，所有请求将路由至 V4.1 Flash**，社区已在 #6025 展开讨论。同时，维护者 @Hmbown 今天一次性开出 **6 个 ClickHouse 数据分析体系 Issues（#6019–#6024）**，启动模型用量/成本/可靠性的分析基础设施规划。PR 方面，0.9.13 贡献者修复集成 PR #6002 及底部 chrome 配置化 PR #5973 等多个功能 PR 在今日关闭落地。

## 二、版本发布

过去 24 小时无新 Release。（PR #6002 显示 0.9.13 集成工作已完成，可关注后续发版。）

## 三、社区热点 Issues

1. **[#6025] DeepSeek V4 Pro 将于 9 月 14 日 12:00（北京时间）停服** — 外部上游变动，Pro 请求将路由至 V4.1 Flash 并按 Flash 计价。对模型目录、路由与计费逻辑都有直接影响，需尽快适配。[链接](https://github.com/Hmbown/Codewhale/issues/6025)
2. **[#5316] EPIC-005: CodeWhale TUI Crate 拆分（伞形 Issue）** — 长期活跃的架构重构总入口（22 条评论），当前执行权威已移交 Linear Core 执行计划 C03–C10。[链接](https://github.com/Hmbown/Codewhale/issues/5316)
3. **[#5586] 拆解巨型文件：lib.rs (18.7k)、config.rs (12.3k)、client.rs (11.1k)** — C09 核心执行项，代码可维护性重点工程。[链接](https://github.com/Hmbown/Codewhale/issues/5586)
4. **[#6019–#6024] ClickHouse 分析体系（6 个新 Issue）** — 今日新增：为模型成本/速度/可靠性建立分析层（#6019），用量回执导出（#6020）、Schema 与保留策略（#6021）、鉴权报告端点（#6022）、ClickPipes vs 自研导出（#6023）、Langfuse vs 自研 tracing（#6024）。明确“新增而非迁移”。[链接](https://github.com/Hmbown/Codewhale/issues/6019)
5. **[#6028] 账号模型视图统一** — “我有哪些模型”目前 API、Picker、CLI 三个界面给出三种答案，需统一模型配置、认证与策略分层。[链接](https://github.com/Hmbown/Codewhale/issues/6028)
6. **[#5976] Concentrate 路由显示 cost: unknown** — 创始人实测反馈的计费覆盖率缺口，暴露 provider 定价数据无守卫的系统性问题。[链接](https://github.com/Hmbown/Codewhale/issues/5976)
7. **[#5950, 已关闭] 0.9.12 底部 chrome 不可配置、/statusline 失效** — shell 重设计引入的回归，已通过 #5962 + #5973 双 PR 修复。[链接](https://github.com/Hmbown/Codewhale/issues/5950)
8. **[#6016] 恢复的会话看不到/切换不到新增的 provider/model** — picker 隐藏非活跃自定义路由，C13 纳入修复。[链接](https://github.com/Hmbown/Codewhale/issues/6016)
9. **[#6025 之外的用户生态] #6017 跨会话持久记忆** — MemCode 创始人提议作为可选记忆层集成，属于第三方合作意向。[链接](https://github.com/Hmbown/Codewhale/issues/6017)
10. **[#6008, 已关闭] /purge 增加 offload/swap 虚拟内存式上下文驱逐** — 有趣的架构提案，解决长会话中“释放空间 vs 保留上下文”的两难。[链接](https://github.com/Hmbown/Codewhale/issues/6008)

## 四、重要 PR 进展

1. **[#6002, 已关闭] 集成 0.9.13 贡献者修复与发版验证** — 涵盖 provider 目录分页、精确路由、OpenRouter 厂商选择、输出限额与定价校验等。[链接](https://github.com/Hmbown/Codewhale/pull/6002)
2. **[#5973, 已关闭] 底部 chrome compact/hidden 预设（关闭 #5950）** — `posture_bar` 与 `metrics_line` 支持 `full | compact | hidden`，可 `/config` 实时切换。[链接](https://github.com/Hmbown/Codewhale/pull/5973)
3. **[#5726, 已关闭] 实时 provider 目录与路由用量检查点** — live catalog 管道、Baseten 集成等大块工作合入。[链接](https://github.com/Hmbown/Codewhale/pull/5726)
4. **[#6012, 已关闭] 修复自动会话标题泄露内部 runtime 信封** — 标题不再显示 `<codewhale:runtime_event>` 之类内部事件。[链接](https://github.com/Hmbown/Codewhale/pull/6012)
5. **[#5982, 已关闭] 模型绑定密钥脱敏的显式退出机制（[redaction] model_bound）** — 解决开发调试中误脱敏 API key 的痛点。[链接](https://github.com/Hmbown/Codewhale/pull/5982)
6. **[#5946, 已关闭] Fleet worker 交付物摘要与最终回答节选** — 纯文本任务不再返回无意义的 receipt。[链接](https://github.com/Hmbown/Codewhale/pull/5946)
7. **[#5859, 已关闭] 全量英文文案优化** — 错误/选择器/启动文案更清晰简短，MessageId 零变更，15 语言包同步。[链接](https://github.com/Hmbown/Codewhale/pull/5859)
8. **[#6027 / #6026] Dependabot 依赖升级（web / vscode 扩展）** — js-yaml、@vitest/mocker 等安全与例行更新。[链接](https://github.com/Hmbown/Codewhale/pull/6027)

## 五、功能需求趋势

- **可观测性与成本分析**（最热）：#6011、#6019–#6024、#5976 集中在 token 计量、成本核算、工具失败模式、可观测数据管道，是当前最大投入方向。
- **架构拆分与代码治理**：#5316、#5586、#4166（ModelRegistry 与 RouteResolver 统一）、#5718（单 worker 模型），巨型 crate 的持续分解。
- **多 Provider 路由正确性**：#5848、#5849、#6016、#6025、#6018 都指向 live catalog、路由一致性与 provider 适配。
- **TUI 可配置性与会话体验**：#5950、#6006（Up-arrow 回溯斜杠命令）、#6017（持久记忆）。
- **Fleet/子代理管理**：#5479（agents 底部视图）、#6015（自适应防卡死 + 只读 shell 语法）。
- **目标验证机制**：#6013 goal gates、#5263 prompt 组装与角色分层。

## 六、开发者关注点

1. **上游模型变动风险**：V4 Pro 9 月 14 日停服在即，涉及路由、计费、目录的适配需提上日程。
2. **计费/定价数据不完整**：cost: unknown 类问题缺乏系统性守卫（#5976），社区对“可路由但不可计费”的不一致敏感。
3. **UI 重设计引入回归**：0.9.12 shell 改版导致 /statusline 失效、底部栏硬编码，用户对“配置能力倒退”反应强烈。
4. **会话恢复与动态模型发现**：恢复会话后无法感知新增 provider/model 是高频痛点（#6016）。
5. **调试友好性**：强制脱敏干扰开发（#5982）、自动标题泄露内部信封（#6012），说明内部协议对终端用户有“渗漏”。
6. **长会话上下文管理**：purge 不可逆的信息丢失促成了 offload/swap 类提案（#6008）。

---
*数据来源：github.com/Hmbown/DeepSeek-TUI（Codewhale），统计窗口为 2026-09-09 至 2026-09-10。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报（2026-09-10）

## 📌 今日速览

今日无新版本发布，社区共更新 264 条 Issues。**OpenCode Zen 强制要求 `x-opencode-session` 请求头**引发的连锁故障持续发酵，多个相关 Issue 在今日关闭，成为过去一周最大的热点事件。同时出现一起**疑似恶意扩展包 `pi-safe-compact` 的安全报告**（#9381），值得所有用户警惕。

---

## 🔥 社区热点 Issues

### 1. 疑似恶意包 pi-safe-compact（安全警报）⭐
**#9381** | [链接](https://github.com/earendil-works/pi/issues/9381)
用户报告扩展包 `pi-safe-compact`（v0.6.3）存在可疑行为，且关联 GitHub 账号 `primp9053` 已不可访问。已关闭处理，但建议社区核查是否安装过此包。

### 2. OpenCode `x-opencode-session` 头缺失系列问题（已集中修复）
- **#9230** [已关闭] opencode-go provider 未发送该请求头 → [链接](https://github.com/earendil-works/pi/issues/9230)
- **#9290** [已关闭] Extension API 的 `modelRegistry.complete()` 同样缺失 → [链接](https://github.com/earendil-works/pi/issues/9290)
- **#9326** [已关闭] `@earendil-works/pi-ai` 底层库从未发送该头 → [链接](https://github.com/earendil-works/pi/issues/9326)
- **#9302** [已关闭] 压缩/摘要路径缺少 provider 归因头 → [链接](https://github.com/earendil-works/pi/issues/9302)

OpenCode 自 09-06 起强制校验会话头，导致 Pi 多条请求路径报 400 `MissingSessionID`。目前各路径已陆续修复关闭，建议受影响用户尽快升级。

### 3. 会话永久"卡死"问题（Anthropic 订阅）
**#5291** | [链接](https://github.com/earendil-works/pi/issues/5291)
使用 Anthropic Enterprise 订阅时会话批量卡在 "Working..."，中断/恢复不可靠。该 Issue 追踪超过 3 个月，今日关闭，长期用户痛点告一段落。

### 4. `PI_OFFLINE` 行为与文档不符
**#8684** | [链接](https://github.com/earendil-works/pi/issues/8684)
文档称只禁用启动时的网络操作，实际会禁用整个会话的 provider 模型发现。多进程/离线场景用户受影响，仍在讨论中（7 评论）。

### 5. 空白工具输出导致会话"砖化"
**#8720** | [链接](https://github.com/earendil-works/pi/issues/8720)
Windows bash 返回 `"\r\n"` 等纯空白输出时，OpenAI 兼容 provider 返回 400，且坏消息留在历史中，**每次后续请求都失败**。严重性高，仍待修复。

### 6. grep 工具带上下文行导致 OOM
**#9276** | [链接](https://github.com/earendil-works/pi/issues/9276)
SDK 模式下 grep 带 context > 0 会将整个匹配文件读入内存，日志文件撑爆堆。对 headless/嵌入式用户是生产级风险。

### 7. openai-completions 流式解析 O(n²) 性能问题
**#9265** | [链接](https://github.com/earendil-works/pi/issues/9265)
每个 delta 重新解析全量工具调用 JSON，大工具调用会阻塞事件循环，单进程托管多会话的 daemon 场景尤为致命。

### 8. OpenRouter `:free` 模型全数 400
**#8760** | [链接](https://github.com/earendil-works/pi/issues/8760)
Pi 发送的 `max_tokens` 超出免费模型硬限制，所有 `:free` 模型不可用。标记 inprogress，修复在途。

### 9. claude-fable-5 回退模型列表过期
**#9294** | [链接](https://github.com/earendil-works/pi/issues/9294)
内置 `allowedFallbackModels` 仍含已被 API 拒绝的 `claude-opus-4-8`，用户开箱即 400。模型目录维护类问题的又一案例（同类：#9394 gpt-5.4 从 codex 目录移除、#9076 gemini-3.8-flash 缺失）。

### 10. 中断/出错的回合留下未匹配的 toolCall
**#9306** | [链接](https://github.com/earendil-works/pi/issues/9306)
`stopReason: "error"/"aborted"` 时已流式输出的 toolCall 未被清理，导致上下文污染、后续请求被 provider 拒绝。SDK 用户报告，影响会话可恢复性。

---

## 🔀 重要 PR 进展

> 今日仅 8 条 PR 更新，且全部为 CLOSED 状态（含合并/自动关闭），重点关注以下几条：

1. **#9382 历史导航光标置尾** | [链接](https://github.com/earendil-works/pi/pull/9382)
   按 ↑ 浏览历史消息时光标始终在末尾，与 bash 等主流 CLI 行为对齐。小而美的 TUI 体验修复。

2. **#9376 修复 Mistral 托管 GLM-5.2 的推理参数** | [链接](https://github.com/earendil-works/pi/pull/9376)
   Mistral API 只认 `reasoning_effort` 而非 `prompt_mode: "reasoning"`，修复后 GLM-5.2 推理能力恢复正常。

3. **#9374 RPC 模式下拒绝在活跃会话操作期间 reload** | [链接](https://github.com/earendil-works/pi/pull/9374)
   扩展命令可在工具运行时触发 reload，导致访问已失效的 runner。现检查 `isStreaming`/`isCompacting`，与 TUI 行为一致。对扩展生态稳定性重要。

4. **#9380 文档导航与可达性校验** | [链接](https://github.com/earendil-works/pi/pull/9380)
   将 `docs.json` 作为版本化导航清单，测试套件中校验链接完整性、重复 slug 和可达性，还支持从文档自动发现 eval 用例。工程化基建佳作。

5. **#9407 / #9404 示例：model-preference-guard** | [链接](https://github.com/earendil-works/pi/pull/9407)
   新示例演示多选选择器 + 搜索，防止误用高价模型产生意外开销。两 PR 内容相同（作者重复提交）。

6. **#9370 抽取交互式测试与发布指南为 skills** | [链接](https://github.com/earendil-works/pi/pull/9370)
   流程文档技能化，反映项目在 agent 自助测试/发布方向的投入。

---

## 📈 功能需求趋势

1. **多 Provider 兼容性**：OpenCode 头事件、OpenRouter 免费模型、Mistral GLM 推理参数、Grok 错误归因（#9298）——上游 provider 规则频繁变动，目录/头/参数同步是持续压力点。
2. **SDK / 嵌入式使用**：#9265（O(n²) 解析）、#9276（OOM）、#9306（上下文污染）、#9258（models.json `$ENV` 不解析）——headless 场景的稳定性和可编排性需求集中爆发。
3. **模型目录时效性**：#9394、#9076、#9294 表明社区希望模型目录更新更及时（新增/下架/回退列表）。
4. **TUI 细节打磨**：鼠标追踪可配置（#8913）、会话切换清空选区（#9311）、LaTeX 遗留字体命令渲染（#8827）等精细化诉求。
5. **登录/认证体验**：设备码登录自动打开验证页（#9282）、OAuth 过期凭证引发的误报（#8928）。

---

## ⚠️ 开发者关注点

- **安全**：立即检查是否安装 `pi-safe-compact` 扩展（#9381），并审视来源不明的社区包。
- **会话韧性**：空白工具输出（#8720）与残留 toolCall（#9306）都会造成会话不可恢复，是当前最高严重性的未修复 bug，生产使用建议规避相关触发路径。
- **性能**：SDK 多会话托管用户需警惕 #9265 与 #9276，大参数工具调用和大文件 grep 可能拖垮进程。
- **升级提示**：使用 OpenCode / opencode-go 的用户务必确认已更新到包含 session 头修复的版本；OpenRouter 免费模型用户等待 #8760 修复落地。

---
*数据来源：github.com/earendil-works/pi | 统计窗口：2026-09-09 ~ 2026-09-10*

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报 · 2026-09-10

## 📌 今日速览

今日发布 **v18.1.16**，修复了 Codex SSE 流无终止事件时的重试与瞬态错误分类问题。安全方向成为今日主线：源自安全审计的系列加固 PR（#11443 拆分出的 #11486/#11487/#11488/#11489）密集提交，覆盖凭据存储权限、symlink 泄露、robomp token 处理等。omp2 分支依赖升级工作持续推进，同时出现多个会话导出/share 相关的数据完整性 Bug 报告。

---

## 🚀 版本发布

### [v18.1.16](https://github.com/can1357/oh-my-pi/releases)
- **@oh-my-pi/pi-ai**：修复 Codex SSE 流在没有终止完成事件时结束的问题——当可安全重放时自动重试；存在部分输出导致无法重放时，保持瞬态错误分类（[#11349](https://github.com/can1357/oh-my-pi/issues/11349)）
- **@oh-my-pi/pi-coding-agent**：新增 `/rename` 命令（发布说明截断）

---

## 🔥 社区热点 Issues

1. **[#4218](https://github.com/can1357/oh-my-pi/issues/4218)** Devin 流报 `invalid_argument` 中断会话（13 评论，P1，已 triaged）
   7 月至今仍未解决的高优 Bug，Devin 模型流调用中途失败并中止会话，是 provider 兼容性最持久的痛点。

2. **[#11402](https://github.com/can1357/oh-my-pi/issues/11402)** Alt-Up 编辑队列时把所有条目弹回 composer（P1，4 评论）
   用户报告一次按键"完全摧毁"了排队的消息，且因两个关联 Bug 几乎无法手工恢复——数据丢失级别的 UX 事故。

3. **[#10937](https://github.com/can1357/oh-my-pi/issues/10937)** 服务端压缩失败后无提示重试数分钟（7 评论，👍2）
   长会话中 `gpt-6-astra` 的自动压缩陷入 V2 abort → V1 404 → 三分钟一轮的重试循环，且无重试详情展示。

4. **[#11431](https://github.com/can1357/oh-my-pi/issues/11431)** `set_auto_compaction`/`set_auto_retry` 写全局配置而非会话状态（7 评论）
   SDK 语义陷阱：这两个 RPC 命令看起来是会话级，实际写入全局配置，对 SDK 集成者影响大。

5. **[#11479](https://github.com/can1357/oh-my-pi/issues/11479)** auth-gateway 413 后会话永久卡死（3 评论）
   大历史会话（~2.4 MiB）触发请求体超限后，`PayloadRejected` 未接入压缩逻辑，会话无法自救。已有对应修复 PR #11482。

6. **[#11477](https://github.com/can1357/oh-my-pi/issues/11477)** Model picker 重写整个 config.yml，丢失注释/引号/`:thinkingLevel`（3 评论）
   `/model` 切换即重序列化整个 YAML，破坏用户手工维护的配置文件——dotfiles 用户的噩梦。

7. **[#11473](https://github.com/can1357/oh-my-pi/issues/11473)** 孤立 tool result 破坏 DeepSeek round 配对导致 400（3 评论）
   `function_call`/`output` 数量配对完整但顺序错乱仍被拒，指向协议层消息排序 Bug。

8. **[#11365](https://github.com/can1357/oh-my-pi/issues/11365)** 无界 artifact 恢复可致上下文中途溢出（4 评论）
   大型 tool 结果经 `artifact://` 恢复后输入+输出超窗，请求在生成前即被拒。

9. **[#11357](https://github.com/can1357/oh-my-pi/issues/11357)** AGENTS.md 仓库遍历将 worktree 中的重复文件注入上下文（5 评论，macOS）
   worktree 子目录导致相同上下文文件被重复加载，污染上下文。

10. **[#11481](https://github.com/can1357/oh-my-pi/issues/11481) / [#11483](https://github.com/can1357/oh-my-pi/issues/11483)** 缺失的 `--export`/share 输入被静默铸成空会话文件并成功退出（3 评论）
    "path 形式"绕过存在性校验，静默创建空文件且 exit 0——外部影响面大的 CLI 完整性问题，修复 PR #11490 已提交。

---

## 🔀 重要 PR 进展

1. **[#11486](https://github.com/can1357/oh-my-pi/pull/11486)** [P0] pi-iso：阻止 plain-tree diff 穿透 symlink 读取树外内容
   非 git 隔离中指向外部的 symlink 会把目标文件内容捕获进 patch 文本，现改用 `symlink_metadata` 并按 git 模式（120000）表示。

2. **[#11488](https://github.com/can1357/oh-my-pi/pull/11488)** 凭据存储 0600 权限 + 请求调试日志脱敏
   SQLite 凭据库从创建起即 0600，db/wal/shm 独立 chmod，防止侧车文件权限遗留。

3. **[#11487](https://github.com/can1357/oh-my-pi/pull/11487)** exec/env 守卫子集合并、条件化 critical prompts、TLS 密钥追踪加固
   与 #11488 同为 #11443 安全审计拆分件，覆盖审批路径与 env 优先级。

4. **[#11489](https://github.com/can1357/oh-my-pi/pull/11489)** robomp：replay token 移出页面 HTML，经 token-gated API 获取；listener 暴露与 clone-url 加固。

5. **[#11482](https://github.com/can1357/oh-my-pi/pull/11482)** 对未知上下文窗口模型的 413 PayloadRejected 尝试压缩
   直接修复 #11479 的会话卡死问题，惠及所有无元数据的自定义/自托管 OpenAI 兼容 provider。

6. **[#11465](https://github.com/can1357/oh-my-pi/pull/11465)** 检测可见回答中的无标记 harmony collapse
   修复 OpenAI-Codex 提供方的重复输出退化（关联 #8701 的"staccato 自重复"症状）。

7. **[#11490](https://github.com/can1357/oh-my-pi/pull/11490)** CLI：拒绝缺失的 share 会话路径
   附完整复现，修复 #11483 的空文件铸造问题。

8. **[#10644](https://github.com/can1357/oh-my-pi/pull/10644)** [P1] 原子配置写入保留 symlink 的 mcp.json/ssh.json/config.yml
   dotfiles 用户通过 symlink 管理配置时，设置变更不再破坏链接。

9. **[#10287](https://github.com/can1357/oh-my-pi/pull/10287)** 新增 agent 可调用的 compact 工具（自主上下文压缩）
   让模型自己发起压缩，是长会话上下文管理的重要能力，按 CONTRIBUTING 流程先在 Discord 讨论。

10. **omp2 依赖升级系列**（@metaphorics）：[#11468](https://github.com/can1357/oh-my-pi/pull/11468)（27 个机械版本钉）、[#11464](https://github.com/can1357/oh-my-pi/pull/11464)（quick-xml 0.42）、[#11463](https://github.com/can1357/oh-my-pi/pull/11463)（RustCrypto digest 全家桶）、[#11461](https://github.com/can1357/oh-my-pi/pull/11461)（webrtc 0.17→0.20）
    omp2 主线的依赖现代化推进，但注意 [#11447](https://github.com/can1357/oh-my-pi/issues/11447)：CI 目前不覆盖 omp2 目标 PR，验证仅靠本地。

---

## 📈 功能需求趋势

- **长会话上下文管理**：压缩重试、413 卡死、artifact 溢出、自主 compact 工具——上下文生命周期是最高频主题
- **TUI 键位与编辑体验**：Emacs 风格键位（#4744）、Vim 模式（#3299，👍13）、`/copy code` 热键（#9822）、纯视觉滚动跳转（#8726）
- **Provider 兼容性与稳定性**：Devin、DeepSeek、OpenAI-Codex、自定义 OpenAI 兼容端点的流/协议问题集中出现
- **配置文件完整性**：YAML 注释丢失、symlink 破坏、静默空文件——配置写入路径的破坏性副作用引发持续不满
- **SDK/钩子契约**：会话级 vs 全局配置语义（#11431）、阻塞式 Stop 钩子（#11214）

## ⚠️ 开发者关注点

- **静默失败模式**：多个 Issue 指向"成功退出但产出错误结果"（空文件导出、settings 写入无成功记录 #11475），缺乏正向反馈路径
- **性能回归**：流式输出掉帧（#10955）、空闲时 40-100% CPU（#10231）表明 TUI 渲染/事件循环仍有开销问题
- **SDK 语义不一致**：会话命令实际写全局配置，破坏 SDK 集成者的合理预期
- **工具链可靠性**：eval JS 无法解析项目 node_modules（#10496）、LSP 文档过期（#11416）、Read 工具行数统计错误（#11417）影响日常编码工作流
- **omp2 CI 缺口**：新主线开发缺乏 CI 信号，建议尽快扩展触发分支（#11447）

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

# DeepSeek Harness 社区动态日报
**日期：2026-09-10 | 数据来源：[deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)**

---

## 1. 今日速览

今天项目迎来 `v0.1.5` 系列的首个候选版本 **`dsh-v0.1.5-rc.1`**，汇总了自 `v0.1.2-rc.1` 以来的全部用户与开发者相关变更。本次更新亮点包括新模型 **DeepSeek-V41-Flash** 的适配器支持，以及 Web 端通用文件上传、文档预览等体验增强。过去 24 小时内无新 Issue 或 PR 更新，社区讨论热度集中在版本发布本身。

---

## 2. 版本发布

### 🚀 [dsh-v0.1.5-rc.1](https://github.com/deepseek-ai/deepseek-harness/releases/tag/v0.1.5-rc.1)

`0.1.5` 系列首个候选版本，主要内容：

**新增功能**
- **DeepSeek-V41-Flash 模型支持**：适配器新增 `deepseek-flash`，支持文本、图片及会话历史中的系统提示词更新；新会话默认使用该模型，配置文件显式指定模型时以配置值为准（@LegGasai）
- **Web 端通用文件上传**：支持上传任意类型的文件，文件与图片统一处理

### 🧪 [dsh-v0.1.5-alpha.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/v0.1.5-alpha.2)

**新增功能**
- **右侧 Sidebar 文档预览**：支持 Markdown、代码高亮、HTML、PDF、图片等常见类型预览（@imccyu, @Yifffan, @yixiangihsiang, @CreatixChu, @yudshj）
- **模型文件交付**：模型可显式在会话中交付文件，支持 Sidebar 预览、默认应用打开、文件管理器定位（@yudshj, @CreatixChu）
- 新增 `/feedback` 命令

---

## 3. 社区热点 Issues

过去 24 小时内无 Issue 更新，本节暂无内容。建议关注 RC 版本发布后社区可能反馈的稳定性问题。

---

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新（相关变更已合并进上述 Release，如模型适配、文件预览等，详见贡献者署名）。

---

## 5. 功能需求趋势

基于近期 Release 内容，可观察到以下方向：

- **多模态与新模型支持**：DeepSeek-V41-Flash 的快速接入表明模型迭代适配是核心路线
- **文件与文档能力**：通用文件上传、多格式预览、模型交付文件，显示项目正从纯对话工具向「工作台」演进
- **用户体验打磨**：Sidebar 预览、文件定位、`/feedback` 命令等交互细节持续增强

---

## 6. 开发者关注点

- **模型配置优先级**：默认模型与配置文件显式指定的覆盖逻辑需注意（配置优先）
- **文件处理链路**：上传 → 预览 → 交付的完整文件链路是本版本重点，建议测试 PDF/HTML 等格式的兼容性
- **RC 阶段稳定性**：`v0.1.5-rc.1` 为候选版本，生产环境升级需谨慎，可通过 `/feedback` 反馈问题

---

*本报告基于过去 24 小时 GitHub 数据自动生成。*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*