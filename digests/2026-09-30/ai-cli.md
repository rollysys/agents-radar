# AI CLI 工具社区动态日报 2026-09-30

> 生成时间: 2026-09-30 04:37 UTC | 覆盖工具: 11 个

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

**日期：2026-09-30 | 数据来源：11 个主流 AI CLI 工具的 GitHub 社区动态**

---

## 一、生态全景

AI CLI 工具已进入“从可用到可信”的深水区：头部产品（Claude Code、Codex、Gemini CLI）在快速迭代中频繁暴露回归问题，而稳定性、成本透明度和企业管控成为社区讨论的核心。托管化/服务化架构（Qwen Code 的 Managed Agent、Codex 的 app-server 模式、OpenCode 的桌面端）是明确的行业方向，多个工具在同时推进 durable 会话、远程 runtime 和移动/桌面端体验。MCP 生态全面普及但兼容性和生命周期管理仍是各工具共同的薄弱环节。新模型（GPT-6.1 Sol、Opus 5.5、DeepSeek V4.1）密集上线，模型-工具协同的兼容性回归此起彼伏，是当前最大的工程摩擦点。

---

## 二、各工具活跃度对比

| 工具 | Issues 动态 | PR 动态 | Release | 核心事件 |
|---|---|---|---|---|
| **Claude Code** | 10+ 热点（多个 40+ 👍） | 9 | v2.1.285 | WebFetch 禁用开关、`--desktop`；模型回归 #67609 发酵；sec-default 安全 PR 密集落地 |
| **OpenAI Codex** | 10+ 热点（最高 56 评论） | 10 | rust-v0.159.2 + 5 个 alpha | GPT-6.1 Sol 设为默认；配额计量异常 Meta Issue 54 评论 |
| **Gemini CLI** | 10 热点 | 11 | v0.62.0 / 0.63-preview / 0.64-nightly | Subagent 可靠性问题簇（误报成功、挂死） |
| **Copilot CLI** | 10（多历史遗留） | 1 | v1.0.90-2 至 -5（4 个补丁） | MCP 稳定性修复 + `--mcp-github-auth`；官方 PR 活动少 |
| **OpenCode** | 50 | 50 | 无 | v2 OOM + Windows 进程泄漏；桌面端 Widget/浏览器评论密集落地 |
| **Qwen Code** | 10+ | 10+ | v0.24.7（CLI/Desktop/SDK） | Managed Agent 双路径架构提案 37 评论，是唯一主线 |
| **DeepSeek TUI** | 10 | 10 | 无（0.10.1 集成中） | 维护者密集自报修复 0.10.0 回归；中文文档 EPIC 完成 |
| **Pi** | ~70（更新量最大） | 21 | v0.99.0 / v0.99.1 | GPT-6.1 Sol 默认模型；打包回归 + llama.cpp 集成热 |
| **oh-my-pi** | 10+ | 10 | v18.4.4 | RLM 上下文引擎 RFC 三部曲；key 外泄安全 Issue |
| **DeepSeek Harness** | 0 | 0 | dsh-v0.2.0-rc.2 | 桌面菜单栏管理，去 Node/pnpm 依赖 |
| **Kimi Code CLI** | 0 | 0 | 无 | 24 小时无活动 |

**关键观察**：Claude Code / Codex / Gemini CLI 属于“高热度+高官方投入”；OpenCode 和 Pi 社区更新量最大但问题也集中；Copilot CLI 社区声量大而官方响应弱（#1274 拖 8 个月）；Kimi Code 和 DeepSeek Harness 活跃度最低。

---

## 三、共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **MCP 兼容性与生命周期** | 全部活跃工具 | Claude Code 连接失败无重试/#96733；Gemini CLI >128 工具触发 400（#24246）；Copilot 规范宽容度（#2581）；DeepSeek TUI 握手卫生 PR；Codex 企业 MCP 认证（#49478/#49473） |
| **Subagent/编排可靠性** | Claude Code、Gemini CLI、oh-my-pi、DeepSeek TUI | Gemini 误报成功（#22323）与挂死（#21409）；Claude Code 跨会话内容泄漏（#96546）、compaction 数据丢失（#97665）；oh-my-pi Plan mode 误伤进程管理 |
| **成本与用量透明** | Codex、Claude Code、Qwen Code | Codex 配额异常 Meta Issue（54 评论）、Pro 20x 实得 5x；Claude Code headless 额度 1.8 倍消耗（#97074）；Qwen Code 非对话 token 重复计费（#12028） |
| **权限/安全模型收紧** | Claude Code、Copilot CLI、oh-my-pi、OpenCode | Claude Code sec-default 系列 + `allowManagedModsOnly`；Copilot 只读目录授权 + MCP auth 作用域；OpenCode 模型门控自动审批（#39015） |
| **Windows/WSL 一等公民化** | Codex、OpenCode、Claude Code、Pi、oh-my-pi | Codex 约 50% 热点 Issue 带 windows 标签；Pi 官方调研（#7547，69 评论）；OpenCode 进程泄漏 + 端口冲突 |
| **长会话/上下文管理** | Claude Code、Pi、oh-my-pi、Gemini CLI、OpenCode | compaction 失败/过早触发普遍；oh-my-pi RLM RFC、Qwen token 门禁、Gemini AST 感知工具均在回应上下文经济学 |
| **模型更新引发的回归** | Claude Code、Codex、oh-my-pi、Pi | Opus 5.5 多语言遵循/兼容、GPT-6.1 Sol 分发不均、Vertex thinking 字段 400——模型与工具版本耦合是共性风险 |

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 企业安全治理 + 插件生态 + 桌面协同 | 企业开发者、重度编排用户 | 闭源 npm CLI，sec-default 组织管控，插件 + subagent 体系 |
| **OpenAI Codex** | 全平台覆盖（CLI/桌面/移动远程）+ 企业认证 | ChatGPT 订阅付费用户（Plus/Pro） | Rust 重写 + app-server 架构，模型即服务绑定 |
| **Gemini CLI** | Subagent 框架 + 沙箱安全 + token 经济 | 开发者 + 开源社区 | TypeScript，社区驱动（RFC/EPIC 式治理），AST 工具调研 |
| **Copilot CLI** | GitHub 生态深度集成 + MCP | GitHub/企业组织用户 | 依赖 Copilot 平台，迭代节奏慢于社区预期 |
| **OpenCode** | 桌面端体验 + 自定义 Provider/自托管 | 私有部署 + 前端开发者 | 开源多 Provider 抽象，桌面 TUI 双形态，v2 迁移期 |
| **Qwen Code** | Managed Agent / Hosted Runtime | SDK 集成方、云端托管场景 | 双栈（TS worker + Java Broker）durable 状态机，架构最激进 |
| **DeepSeek TUI / Harness** | 轻量 TUI + 中文本地化 | 中文社区、DeepSeek 模型用户 | Rust TUI 拆解，桌面菜单栏一体化 |
| **Pi / oh-my-pi** | 多 Provider 灵活性 + 本地模型 | 高级用户、llama.cpp/逆向/多账号群体 | 扩展架构 + 端侧能力（STT、embed），社区贡献活跃 |

---

## 五、社区热度与成熟度

- **第一梯队（高热度+高成熟度）**：Claude Code、Codex —— Issue 讨论量、👍 数、官方响应速度均领先，但也在承受规模化的回归压力（模型侧 bug、计量信任危机）。
- **第二梯队（快速迭代+问题暴露）**：Gemini CLI、OpenCode、Pi、Qwen Code —— 发布节奏快（Gemini 三通道并行、Qwen 大版本同步三端），社区参与深（RFC 式讨论），但稳定性债务明显（OpenCode v2 OOM、Gemini subagent 可信度）。
- **第三梯队（利基/早期）**：DeepSeek TUI（维护者主导修复，中文社区成长）、oh-my-pi（高级用户社区，RFC 质量高）、Copilot CLI（生态大但官方投入滞后，长期 Issue 悬置是危险信号）、Kimi Code / DeepSeek Harness（低活跃）。

---

## 六、值得关注的趋势信号

1. **从功能竞争转向信任竞争**：Codex 配额计量争议、Claude Code headless 1.8x 消耗、Qwen token 重复计费——用量透明度已成为付费用户流失的首要风险，成本可观测性（遥测、门禁、预算控制）将是下一轮竞争焦点。
2. **企业级安全默认值是确定性方向**：Claude Code 的 sec-default PR 群、Copilot 的 MCP auth 作用域、Codex 的企业认证、OpenCode 的权限门控，均指向“组织策略覆盖用户偏好”的治理模型。企业选型应重点评估这一维度。
3. **托管 Runtime / durable 会话架构是中期主战场**：Qwen Code 的 D1–D6 分阶段落地和暴露的分布式状态机缺陷表明，服务化编排的复杂度正在快速上升——集成方需关注故障恢复路径的测试成熟度。
4. **模型-工具耦合回归是系统性风险**：新模型（Opus 5.5、GPT-6.1 Sol、thinking 字段）上线即引发各工具 400/兼容性故障。建议生产环境锁定“CLI 版本 + 模型版本”组合，避免自动跟随最新模型。
5. **升级需谨慎的明确信号**：Claude Code 2.1.281 pty 回归、OpenCode v2 OOM、DeepSeek TUI 0.10.0 多项回归均属“大版本发布即踩坑”——多工具同时印证：**patch 版本跟进、minor/major 版本观察 1-2 周再升级**是当前生态的实用策略。
6. **非 macOS 平台与 CJK 场景仍是被低估的选型变量**：Windows 问题占各工具热点的 30-50%，中文渲染/本地化只有 DeepSeek 系在认真投入——中文团队和 Windows 主力团队应在选型时给予权重。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据来源：github.com/anthropics/skills ｜ 数据截止：2026-09-30**

> ⚠️ 数据说明：本期 PR 评论数数据缺失（undefined），热度判断综合 PR 更新活跃度、关联 Issue 讨论量及社区反馈推断。

---

## 一、热门 Skills 排行（PR）

| # | Skill / PR | 功能与热点 | 状态 |
|---|---|---|---|
| 1 | **skill-creator 触发评估修复** ([#1298](https://github.com/anthropics/skills/pull/1298)) | 修复触发评估误报、Windows 兼容、运行时错误误判等问题；关联 Issue [#556](https://github.com/anthropics/skills/issues/556)（0% 触发率，12 条评论）和 [#1383](https://github.com/anthropics/skills/issues/1383)，是社区投诉最集中的元技能 | OPEN，持续更新至 9 月 |
| 2 | **mcp-builder 兼容性修复** ([#1742](https://github.com/anthropics/skills/pull/1742)) | 适配 mcp>=2 的 `streamable_http_client` 改名与自定义 header；修复 Issue [#1390](https://github.com/anthropics/skills/issues/1390) 中评估脚本对真实 MCP 服务器全报 0 分的问题 | OPEN，活跃至 9/29 |
| 3 | **proofcore-contract-auditor** ([#1771](https://github.com/anthropics/skills/pull/1771)) | Web3 智能合约静态分析 + TON 链上审计证明锚定；因涉及第三方商业协议且与安全命名空间争议（Issue [#492](https://github.com/anthropics/skills/issues/492)）相关而受关注 | OPEN |
| 4 | **md2video-audio** ([#1703](https://github.com/anthropics/skills/pull/1703)) | Markdown → Marp 幻灯片 → MP4 视频 + 逼真人声配音，零成本方案 | OPEN |
| 5 | **docx 系列修复** ([#1792](https://github.com/anthropics/skills/pull/1792), [#541](https://github.com/anthropics/skills/pull/541), [#1734](https://github.com/anthropics/skills/pull/1734)) | 修复 LibreOffice 超时误报成功、tracked change ID 冲突导致文档损坏、孤立批注检测——文档技能是官方核心技能中 bug 密度最高的 | OPEN |
| 6 | **quantitative-resume-auditor / notion-spec-to-implementation** ([#1245](https://github.com/anthropics/skills/pull/1245)) | 规格文档 → Notion 任务拆解 + 简历量化审计，存活周期最长（6 月至今仍更新）的社区 PR 之一 | OPEN |
| 7 | **AWT (AI Watch Tester)** ([#822](https://github.com/anthropics/skills/pull/822)) | 视觉驱动零代码 E2E 测试生成，社区长期期待测试方向落地 | OPEN |
| 8 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | 解决 AI 生成文档的孤行、孤词换行、编号错位等排版问题，直击 AI 文档痛点 | OPEN |

---

## 二、社区需求趋势（来自 Issues）

1. **Skill 信任与安全机制**：最热 Issue [#492](https://github.com/anthropics/skills/issues/492)（43 评论）指出社区技能冒用 `anthropic/` 命名空间、滥用信任边界；[#1175](https://github.com/anthropics/skills/issues/1175) 关注 SKILL.md 内写权限逻辑的安全隐患——**供应链信任是第一诉求**。
2. **组织级分发与共享**：[#228](https://github.com/anthropics/skills/issues/228)（16 评论）要求企业内共享 Skill 库；[#189](https://github.com/anthropics/skills/issues/189) 反馈插件重复安装挤占上下文。
3. **上下文窗口效率**：[#1487](https://github.com/anthropics/skills/issues/1487) 报告 claude-api skill 一次性注入 ~156k tokens；skill-creator 被批“像文档不像技能”（[#202](https://github.com/anthropics/skills/issues/202)）——渐进式加载、按需加载是强需求。
4. **Agent 记忆与状态管理**：[#1329](https://github.com/anthropics/skills/issues/1329) 提议 compact-memory 符号化压缩 agent 状态。
5. **质量门禁 / 治理类元技能**：[#1385](https://github.com/anthropics/skills/issues/1385)、[#412](https://github.com/anthropics/skills/issues/412) 提议推理质量门禁管线、agent 治理模式。
6. **可观测性工具链**：[#1394](https://github.com/anthropics/skills/issues/1394) 披露 eval-viewer XSS；[#1390](https://github.com/anthropics/skills/issues/1390) 评估框架缺陷——社区需要可靠的 skill 评估基础设施。

---

## 三、高潜力待合并 Skills

- **#1742 mcp-builder 修复**：直接修复已确认 bug（#1668、#1390），路径文件明确，合并概率最高
- **#1298 skill-creator evals 修复**：对应多个高热度 Issue（#556、#1383），属官方核心工具链刚需
- **#1792 / #541 docx 修复**：小而确定的 correctness 修复，典型 fast-track 对象
- **#538 pdf 大小写修复**：一行级修复，影响 Linux 用户
- **#1703 md2video-audio**：功能独特、依赖少，若通过安全审查有望落地
- **#723 testing-patterns**：测试方向长期需求，更新持续至 9 月

---

## 四、生态洞察（一句话总结）

> **社区最集中的诉求是“可信与高效”：建立 Skill 的命名空间信任/安全边界、组织级分发能力，以及渐进式加载以保护上下文窗口——同时官方核心技能（skill-creator、docx、mcp-builder、claude-api）的评估工具链与正确性缺陷亟待修复。**

---

# Claude Code 社区动态日报 · 2026-09-30

## 一、今日速览

Claude Code 发布 v2.1.285，新增 WebFetch 禁用开关、桌面应用快捷启动（`claude --desktop`）和插件配置命令。社区方面，模型侧 bug 仍是焦点——#67609（claude-fable-5 长上下文下 Advisor 工具失效，45 👍）持续发酵。安全相关的 PR 活跃，多笔 sec-default 系列改动围绕“组织级安全默认值覆盖用户插件权限”落地。

---

## 二、版本发布

### v2.1.285
- 新增环境变量 `CLAUDE_CODE_DISABLE_WEB_FETCH`，可完全关闭 WebFetch 工具（适合安全敏感环境）
- 新增 `claude --desktop`：在当前目录打开 Claude 桌面应用，支持 `--continue` / `--resume <id>` 恢复会话
- 新增 `claude plugin configure <plugin>`：交互式查看/配置插件

---

## 三、社区热点 Issues

1. **[#67609](https://github.com/anthropics/claude-code/issues/67609)** — claude-fable-5 模型下，transcript 超过 ~100K tokens 时 Advisor 工具返回 "unavailable"。已挂 has repro 标签，45 👍 / 26 评论，是当前模型侧最严重的回归之一。

2. **[#98145](https://github.com/anthropics/claude-code/issues/98145)** — VS Code 扩展中 Opus 5.5 反复无视“仅韩语回复”的显式指令（含 memory 中规则），工具调用中间提示语仍切回英语。22 条评论，反映多语言指令遵循的顽固缺陷。

3. **[#42700](https://github.com/anthropics/claude-code/issues/42700)** — Remote Control 会话的 TTS 朗读 + 语音模式请求（含无障碍标签）。24 评论 / 34 👍，长尾但热度高的功能请求。

4. **[#41973](https://github.com/anthropics/claude-code/issues/41973)** — `claude mcp serve` 模式下 MCP Agent 工具返回空的 available-agent 列表，已复现。影响 headless 编排场景。

5. **[#97665](https://github.com/anthropics/claude-code/issues/97665)** — Subagent 自动 compaction 时保留段末尾记录从未写入 transcript，且不同于 #97316 无法恢复——数据完整性级别的问题。

6. **[#97074](https://github.com/anthropics/claude-code/issues/97074)** — Headless `claude -p` 相同负载下每 token 消耗的 5 小时窗口额度约为交互式的 **1.8 倍**。对自动化/CI 用户是直接成本问题。

7. **[#97297](https://github.com/anthropics/claude-code/issues/97297)** — **2.1.281 回归**：Bash 子进程继承 TUI 的真实 pty，ssh 密码提示会破坏鼠标追踪并卡死会话（跨 resume）。回归标签已确认，升级需谨慎。

8. **[#85856](https://github.com/anthropics/claude-code/issues/85856)** — Windows/Git Bash 下 Bash 工具静默减半反斜杠（MSVCRT vs MSYS2 编码不匹配），引号无法规避。Windows 用户的经典痛点。

9. **[#94252](https://github.com/anthropics/claude-code/issues/94252)** — Bedrock 场景下 turn 永久 idle（kevent64 事件循环卡住，无报错）：tool_result 丢失 / compaction 停滞 / 排队输入不被消费。跨 2.1.268–283 版本存在。

10. **[#96546](https://github.com/anthropics/claude-code/issues/96546)** — Workflow 工具的 `agent()` 子代理调用返回了**无关并发会话的内容**——涉及会话隔离，值得所有重度编排用户警惕。

---

## 四、重要 PR 进展

1. **[#98080](https://github.com/anthropics/claude-code/pull/98080)**（已关闭/合并）— settings 中的 deny 规则优先于用户插件的 allow/ask 判定，防止插件削弱权限管控。
2. **[#98083](https://github.com/anthropics/claude-code/pull/98083)**（已关闭/合并）— 新增 managed 选项 `allowManagedModsOnly`，组织可只允许托管 mods、拒绝用户自装模块。
3. **[#98275](https://github.com/anthropics/claude-code/pull/98275)**（已关闭/合并）— AGENTS.md 加载提示行改走 debug log，不再进入 transcript。
4. **[#97241](https://github.com/anthropics/claude-code/pull/97241)**（已关闭/合并）— 组织启用 sec-default 时，用户插件不再影响系统提示词的 sections 组成。
5. **[#96434](https://github.com/anthropics/claude-code/pull/96434)**（开放）— security-guidance 审查器不再能把 deny/secret 文件（如 `secrets.yaml`）放入模型上下文，修复 #96276。
6. **[#97952](https://github.com/anthropics/claude-code/pull/97952)**（开放）— 对三个调用 Claude 的 GitHub Actions 工作流做安全加固，含 egress 防火墙 runner。
7. **[#97334](https://github.com/anthropics/claude-code/pull/97334)**（开放）— 会话保留的 rows 可越过 user tier，扩展组织级内容注入能力；等待引擎侧 `session.append` 上主线后合并。
8. **[#97293](https://github.com/anthropics/claude-code/pull/97293)**（开放）— 类型声明补齐 `$.process.run` 的 stdout/stderr 截断标志和 `$.fs.list` 的 `mtimeMs`，待 npm CLI 发布携带这些字段后启用。
9. （关联 Issue）**[#98314](https://github.com/anthropics/claude-code/issues/98314)** — 重提 #77980：status line JSON 仍缺 advisor 字段，前次被 stale bot 关闭，社区对“stale 关闭无维护者回复”表达不满。

---

## 五、功能需求趋势

- **成本可控性**：headless 模式额度消耗倍增（#97074）、昂贵 agent 生成前需确认（#95313）、advisor `caching` 参数暴露（#91110）——成本可视化与预算控制是持续主题。
- **企业/组织管控**：sec-default 系列 PR + `allowManagedModsOnly`，企业级安全默认值与插件治理明显加速。
- **无障碍与语音**：TTS/语音模式（#42700）、Cowork 语音模式激活后工具不可用（#97954）。
- **会话编排健壮性**：跨会话消息上限可配置（#94000）、subagent compaction 数据完整性（#97665）、会话隔离（#96546）。
- **桌面应用体验**：`--desktop` 已落地；git bar 恢复（#93699）、背景会话终端标题控制（#84789）待补齐。

## 六、开发者关注点

- **模型侧回归**：fable-5 + Advisor 长上下文失效是当前最高优先级悬案，已复现但未修复。
- **2.1.281 回归风险**：pty 继承问题（#97297）会导致会话卡死，自动化/远程场景建议暂缓升级或锁定旧版。
- **MCP 稳定性**：连接失败无重试（#90494）、HTTP 会话恢复泄漏（#96733）、elicitation 静默拒绝（#98256）——MCP 生命周期管理是薄弱环节。
- **Symlink 兼容性**：settings.json 与 `~/.claude/projects` 为符号链接时多次踩坑（#78162、#97062），影响 dotfiles 管理者和 git worktree 用户。
- **Windows 体验**：反斜杠转义（#85856）、安装异常（#88715）持续存在。
- **多语言指令遵循**：设置语言与实际输出不一致（#98145），非英语用户反复受阻。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-09-30

## 📌 今日速览

今日 Codex 连发多个版本，稳定版推进至 **rust-v0.159.2**（修复 Windows 控制台窗口闪烁问题），同时 0.161.0 alpha 渠道密集迭代至 alpha.3。**GPT-6.1 Sol 已成为默认模型**（#49323），但部分用户反馈 Codex 中看不到 Sol 6.1。社区最突出的痛点仍是**配额/用量计量异常**（跨报告追踪 Issue #41220 已积累 54 条评论）和 **Windows 桌面端稳定性问题**。

---

## 🚀 版本发布

### rust-v0.159.2（稳定版补丁）
- **修复**：Windows 上 Codex 启动后台进程和沙箱命令时控制台窗口闪烁的问题（#49385，从主线回移）。
- [Changelog](https://github.com/openai/codex/compare/rust-v0.159.1...rust-v0.159.2)

### rust-v0.159.1
- **新功能**：GPT-6.1 Sol 成为内置模型目录及 Amazon Bedrock Mantle / Runtime 目录的默认模型（#49323, #49342）。

### rust-v0.159.0（近期重点版本）
- **`instant_interrupt`（可选）**：允许新输入在模型响应或长时间 code-mode 调用过程中实时改变 Codex 方向（#48135, #48141）。
- 新会话提供精简欢迎屏与统一头部样式，并在回合中/后展示提示（#48513 等）。

### Alpha 渠道
- `0.161.0-alpha.1` / `alpha.2` / `alpha.3`、`0.160.0-alpha.6` / `alpha.6.1` 密集发布，主线开发节奏活跃。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#37458](https://github.com/openai/codex/issues/37458) [已关闭] Windows VSCode 扩展无法启动**（56 评论 / 13 👍）
   扩展报 "couldn't load its resources"，影响大量 Windows 用户。已关闭说明官方已修复——Windows 扩展用户建议更新到最新版本。

2. **[#41220](https://github.com/openai/codex/issues/41220) 配额异常消耗跨报告追踪 [Meta]**（54 评论 / 18 👍）
   多用户反映订阅配额/信用点消耗远超本地 token 证据预期，且在任务不变时突然加速。**当前最活跃的未解决问题**，涉及用量计量体系。

3. **[#27117](https://github.com/openai/codex/issues/27117) Windows 独立版更新从 pwsh 启动 powershell.exe 导致 Get-FileHash 失败**（40 评论 / 29 👍）
   更新流程继承 PSModulePath 引发模块冲突，👍 数最高，Windows 用户长期痛点。

4. **[#48324](https://github.com/openai/codex/issues/48324) ChatGPT Windows 桌面端无法加载组织设置**（26 评论）
   桌面端在 composer 加载前即失败，而 Web + CLI 正常，指向桌面端配置拉取路径缺陷。

5. **[#48333](https://github.com/openai/codex/issues/48333) Windows 桌面端卡启动转圈，需手动结束 app-server codex.exe**（24 评论 / 8 👍）
   26.924.1866.0 版本启动挂起，与 #48324 共同构成 Windows 桌面端启动故障群。

6. **[#36268](https://github.com/openai/codex/issues/36268) Android "Authorize this phone" 配对死循环**（17 评论）
   重装 ChatGPT App 后 Web 授权完成但 App 无法消费授权，主机收不到配对 claims。Android 远程配对是近期高频故障区（另见 #48774、#48777、#48448）。

7. **[#25770](https://github.com/openai/codex/issues/25770) Windows Store 版 MSIX 旧包锁定导致更新反复失败**（14 评论）
   Store 自动更新路径的顽疾，长期未解决。

8. **[#42514](https://github.com/openai/codex/issues/42514) Intel Mac 缺少 Computer Use 服务**（13 评论 / 6 👍）
   x86_64 桌面端 Computer Use / Locked use 完全不可用，老 Intel Mac 用户被排除在核心功能外。

9. **[#40067](https://github.com/openai/codex/issues/40067) Plus 周配额数小时内从 99% 跌至 0%**（11 评论）+ **[#38157](https://github.com/openai/codex/issues/38157) Pro 20x 账户实际获得 5x 容量**（11 评论）
   与 #41220 共同指向用量计量/权益分配回归，Pro 付费用户不满情绪明显。

10. **[#49362](https://github.com/openai/codex/issues/49362) Sol 6.1 未在 Codex 中出现**（5 评论 / 8 👍）
    0.159.1 刚将 GPT-6.1 Sol 设为默认，即有用户（Pro 200）反馈模型目录中不可见——新模型灰度分发疑似存在问题。

---

## 🔧 重要 PR 进展（Top 10）

1. **[#49478](https://github.com/openai/codex/pull/49478)** MCP 授权服务器发现与验证：在 ID-JAG 交换前先发现并校验 MCP 资源授权服务器，强化企业身份凭证流程。
2. **[#49473](https://github.com/openai/codex/pull/49473)** 升级至 rmcp SDK 3.3.0 并启用 `auth-enterprise-managed`，两阶段 ID-JAG 交换交由 SDK 处理。
3. **[#49472](https://github.com/openai/codex/pull/49472)** TUI 采用服务器权威权限定义：客户端权限约束以 app server 为准，且权限变更在任务切换间持久生效。
4. **[#49441](https://github.com/openai/codex/pull/49441)** 遵循服务端重试建议：ServerOverloaded / 请求耗尽时不再提前终止，WebSocket→HTTP 回退也会等待建议的截止时间。
5. **[#49467](https://github.com/openai/codex/pull/49467)** 修复登录 shell 启动后 PATH 被重置导致 `rg` 等内置工具找不到的问题（配合实验性 flag #49403）。
6. **[#49437](https://github.com/openai/codex/pull/49437)** TUI 语音设置支持本地音频设备选择（输入/输出），含远程 app server 场景。
7. **[#49425](https://github.com/openai/codex/pull/49425)** 诊断日志按年龄和数据库大小定期清理（初始化后及每 30 分钟后台执行），解决长会话磁盘占用。
8. **[#49424](https://github.com/openai/codex/pull/49424)** Windows UNC 路径推断支持正斜杠和混合斜杠（`//server/share` 不再被误判为 POSIX）。
9. **[#49407](https://github.com/openai/codex/pull/49407)** exec-server 会话在 `environment/info` 超时后可恢复：30 秒超时覆盖发送阶段，防止队列阻塞挂死会话。
10. **[#49432](https://github.com/openai/codex/pull/49432)** 认证变更时保留 bootstrap 配置发现，同时撤销前账号的内容访问授权——安全与可用性兼顾。

> 趋势备注：今日 PR 大量来自 `copyberry[bot]`，主题集中在 **MCP 企业认证、稳定性/日志治理、性能优化**（如 #49444 用 `memrchr` 加速 JSONL 反向扫描）。

---

## 📈 功能需求趋势

- **用量透明度与计量准确性**：#41220、#40067、#49322（新旧用量视图数据翻倍不一致）等十余条 Issue，是当前最强的社区诉求。
- **远程/移动配对（Remote Access）**：Android 配对死循环集中爆发（#36268、#48774、#48777、#48448）。
- **Windows 桌面端稳定性**：启动挂起、渲染器崩溃、MSIX 更新失败、控制台闪烁等贯穿整个 Issue 列表。
- **新模型可用性**：GPT-6.1 Sol 设为默认后分发不均（#49362）。
- **上下文连续性**：#41224 建议在配额耗尽时提供限速的 "Continuity mode"（Luna fallback），获多平台用户共鸣。
- **Computer Use / Browser Use 覆盖面**：Intel Mac 缺失（#42514）、Windows 浏览器权限校验失败（#48573、#48670）、macOS 锁屏解锁（#37231）。

---

## ⚠️ 开发者关注点

1. **付费用户的信任危机**：Pro 20x 用户实际获得 5x 容量（#38157）、配额加速消耗（#40527、#38728）叠加渲染器崩溃（#48938 中用户表达强烈不满），官方计量透明度成为最大风险点。
2. **Windows 是问题最集中的平台**：今日 30 条热点 Issue 中约半数带 `windows-os` 标签，覆盖扩展、桌面端、CLI 更新、沙箱全链路。
3. **移动远程配对回归**：Android 端多点报告同一症状（授权后不消费、循环），疑似服务端或 1.2026.26x 版本客户端回归。
4. **建议行动**：Windows 用户升级到 0.159.2 获取控制台闪烁修复；使用 GPT-6.1 Sol 前确认模型目录已同步；Pro 用户关注 #41220 追踪帖的官方结论。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-09-30

## 📰 今日速览

Gemini CLI 今日发布 **v0.62.0 稳定版、v0.63.0-preview.0 预览版和 v0.64.0-nightly** 三个版本，非交互模式下的自主计划执行修复是核心亮点。社区讨论焦点集中在 **Subagent 可靠性**——包括 MAX_TURNS 后误报成功、通用 Agent 挂死等 P1 级 Bug。此外，多个涉及 MCP 配置解析和 headless 模式 CPU 挂死的关键修复 PR 正在推进中。

---

## 🚀 版本发布

### v0.64.0-nightly.20260930
- **fix(core): 非交互模式下启用自主计划执行**（PR #29539）
- **fix(core): maxChars <= 0 时禁用 formatTruncatedToolOutput 截断**
- [Release 链接](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-nightly.20260930.g38700b4b3)

### v0.63.0-preview.0
- **fix(cli): 连接恢复期间显示重试进度指示器**（PR #29468）
- [Release 链接](https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0-preview.0)

### v0.62.0（稳定版）
- **fix(a2a-server): tasks metadata 端点对不支持的 store 提前返回**（PR #29334）
- [Release 链接](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0)

---

## 🔥 社区热点 Issues

### 1. Subagent 达到 MAX_TURNS 后误报成功（P1）
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) · 13 评论
`codebase_investigator` 撞到最大轮次限制后仍报告 `status: "success"` / `Termination Reason: GOAL`，严重掩盖真实中断原因，直接影响任务结果可信度。**讨论最热烈**，已标记 need-retesting。

### 2. 通用 Agent 永久挂死（P1）
[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) · 8 评论 / 👍8
主 Agent 委派给通用 subagent 后无限挂起，连创建文件夹都会卡死，用户等待 1 小时后被迫取消。手动禁止 subagent 可绕过。**👍 数最高的可靠性 Bug**。

### 3. 利用模型的 Bash 原生能力：零依赖 OS 沙箱 + 执行后意图路由（P2）
[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) · 9 评论
Gemini 3 模型天然擅长链式使用 POSIX 工具，此提案探讨在不牺牲安全性的前提下释放该能力，涉及沙箱与命令意图路由设计，是**架构层面的重要方向性讨论**。

### 4. 评估 AST 感知的文件读取/搜索/代码库映射（P2）
[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) · 7 评论
EPIC 级调研：AST 感知工具可精确读取方法边界，减少错位读取带来的多轮消耗和 token 噪音。配套子任务 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)（推荐 tilth/glyph）、[#22747](https://github.com/google-gemini/gemini-cli/issues/22747)（评估 ast-grep）。

### 5. Gemini 主动使用 skills 和 sub-agents 不足（P2）
[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) · 6 评论
用户反馈模型几乎从不自主调用自定义 skills/subagents，即使任务高度相关，必须显式指令。反映** Agent 调度策略**的体验短板。

### 6. Browser Agent 无视 settings.json 配置覆盖（P2）
[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) · 4 评论
`AgentRegistry` 初始化时正确合并了 `maxTurns` 等配置，但 Browser Agent 运行时完全忽略，存在配置链路断裂。

### 7. Browser Agent 在 Wayland 下失败（P1）
[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) · 4 评论
Linux Wayland 环境下 browser subagent 直接失败，影响 Linux 桌面用户。

### 8. 超过 128 个工具时遭遇 400 错误（P2）
[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) · 3 评论
MCP 生态繁荣的副作用：工具过多直接触发 API 400，社区期望 Agent 智能裁剪工具作用域。

### 9. 模型在随机位置创建临时脚本（P2）
[#23571](https://github.com/google-gemini/gemini-cli/issues/23571) · 3 评论
限制 shell 执行后，模型在工作区各处生成编辑脚本，清理成本高，影响干净提交。

### 10. get-shit-done output hook 导致崩溃（P1）
[#22186](https://github.com/google-gemini/gemini-cli/issues/22186) · 3 评论
output hook 在打印用户摘要阶段稳定复现崩溃，标记为 medium 工作量待修复。

---

## 🔧 重要 PR 进展

| PR | 内容 | 状态 |
|---|---|---|
| [#29557](https://github.com/google-gemini/gemini-cli/pull/29557) | **P1** 修复 headless 模式下代码含 `@scope/pkg` + 引号时的 100% CPU 不可中断挂死与引号吞噬，含 ReDoS 防护 | Open |
| [#29445](https://github.com/google-gemini/gemini-cli/pull/29445) | **P1** 区分“损坏”与“缺失”的 MCP enablement 配置——当前损坏配置会 fail-open，暴露用户已禁用的 MCP 工具 | Open |
| [#29568](https://github.com/google-gemini/gemini-cli/pull/29568) | **P1** ChatRecordingService 改为增量 append-only delta patch + 有界历史窗口，消除全量重写和内存无界增长 | Open |
| [#29528](https://github.com/google-gemini/gemini-cli/pull/29528) | **P1** 修复 headless 模式下文件夹信任状态被无条件上报为 trusted 的"脑裂"状态 | ✅ Merged |
| [#29535](https://github.com/google-gemini/gemini-cli/pull/29535) | 企业认证：Code Assist API 未标记默认 tier 时回退到 legacy tier，导致免费账户误报无许可证 | Open |
| [#29444](https://github.com/google-gemini/gemini-cli/pull/29444) | 修复 `gemini mcp enable/disable` 从未匹配到任何服务器的问题 | Open |
| [#29447](https://github.com/google-gemini/gemini-cli/pull/29447) | SDK：SdkAgentShell 补齐被静默丢弃的 `env`/`timeoutSeconds`，支持外部 AbortSignal | Open |
| [#29573](https://github.com/google-gemini/gemini-cli/pull/29573) | 修复沙箱镜像名解析：带端口的 registry 地址被误切分，`/` 泄漏到容器 `--name` | Open |
| [#29449](https://github.com/google-gemini/gemini-cli/pull/29449) | 新增 PkgDiet 内置 skill：npm install 前通过 MCP 校验包健康度/体积/弃用状态 | Open |
| [#26844](https://github.com/google-gemini/gemini-cli/pull/26844) | 补齐 CustomTheme 验证 schema 缺失的 3 个属性，修复启动时 `Unrecognized key` 报错（help wanted） | Open |

---

## 📈 功能需求趋势

1. **Subagent 可靠性与调度**（最热方向）：错误状态上报（#22323）、挂死（#21409）、自主调用率低（#21968）、并行协作与共享内存（#18287）、trajectory 可视化（#22598）形成完整问题簇。
2. **上下文效率与 AST 感知工具**：AST 读/搜/映射（#22745/#22746/#22747）、"Tactful Extraction" 精准读取（#19561）、基于文件的持久化任务追踪替代 WriteToDo（#18836、#21000），共同指向 token 经济性。
3. **安全与沙箱**：零依赖 OS 沙箱（#19873）、破坏性命令防护（#22672）、依赖健康检查（PR #29449）。
4. **Browser Agent 成熟化**：配置覆盖失效（#22267）、会话锁自动恢复（#22232）、Wayland 支持（#21983）。
5. **Headless/CI 模式强化**：信任状态传播（PR #29528）、CPU 挂死修复（PR #29557）、自主计划执行（PR #29539）。

## 💡 开发者关注点（痛点总结）

- **结果可信度**：Subagent 失败被包装为成功（#22323）是最危险的问题——自动化流水线无法信任退出状态。
- **挂死与无响应**：通用 Agent 挂死（#21409）、交互式提示卡住（#22465）、headless CPU 打满（PR #29557），稳定性是高频投诉。
- **配置不生效**：settings.json 覆盖被 Browser Agent 忽略（#22267）、MCP enable/disable 失效（PR #29444）、symlink agent 不识别（#20079），配置链路一致性欠缺。
- **可观测性不足**：`/bug` 报告不含 subagent 上下文（#21763），排障困难。
- **工具规模上限**：>128 工具触发 400（#24246），重度 MCP 用户首当其冲。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-30 | 数据来源：github.com/github/copilot-cli**

---

## 1. 今日速览

过去24小时内 Copilot CLI 密集发布了 v1.0.90-2 至 v1.0.90-5 四个补丁版本，重点修复启动报错和 MCP 工具调用问题，并新增 `--mcp-github-auth` 安全选项。社区侧，#1274（400 错误，31 条评论）和 #1285（组织级 Agent 不显示）两个长期未解决的高热度 Issue 持续活跃。值得注意的是，社区 PR #5000 提出由 GitHub Release 触发 npm 发布的改进方案。

---

## 2. 版本发布

| 版本 | 类型 | 内容 |
|------|------|------|
| v1.0.90-5 | Fix | 已配置 provider 时，启动和模型选择器不再显示 "No supported model available"；MCP 工具调用在服务器持续发送进度更新时也能正常完成 |
| v1.0.90-4 | Fix | 新启动登录时不再打印 "Failed to read model provider attribution" 错误 |
| v1.0.90-3 | Feature | 新增 `--mcp-github-auth`，将 GitHub 账户授权限定到已批准的 MCP server origins；路径访问提示新增会话级只读目录授权 |
| v1.0.90-2 | Fix | 常规修复 |

**点评**：v1.0.90 系列聚焦启动体验和 MCP 稳定性，只读目录授权是权限模型向精细化方向的演进，值得关注。

---

## 3. 社区热点 Issues

1. **#1274** [OPEN] CLI 频繁返回 400 错误（invalid request body）— 31 评论 / 13 👍
   长期高热度问题，约 95% 的 code review 请求触发 400，疑似请求体构造或服务端校验问题。持续 8 个月未关闭，是社区最大痛点。
   [链接](https://github.com/github/copilot-cli/issues/1274)

2. **#1285** [OPEN] 组织级 Agent 在 CLI 中不显示 — 11 评论 / 14 👍
   企业用户在 `{org}/.github-private` 中创建的 Agent 无法出现在 CLI 和 VS Code 中，影响企业工作流落地。
   [链接](https://github.com/github/copilot-cli/issues/1285)

3. **#4870** [CLOSED] Figma 远程 MCP server 加载失败（-32601 被视为致命错误）— 8 评论
   CLI 将 `server/discover` 的 `-32601` 错误处理为致命失败，而 VS Code 可正常工作。已关闭，属于 MCP 兼容性修复的典型案例。
   [链接](https://github.com/github/copilot-cli/issues/4870)

4. **#3534** [OPEN] WSL2 (ARM64) 上 `/copy` 失败 — 7 评论
   `clip.exe` 引号处理 bug 导致剪贴板写入失败，长期未修的跨平台细节问题。
   [链接](https://github.com/github/copilot-cli/issues/3534)

5. **#3281** [CLOSED] 升级 v1.0.46 后 CLI 完全不可用 — 7 评论
   npm optional dependencies 的原生绑定缺失问题，升级即破坏环境的典型案例。
   [链接](https://github.com/github/copilot-cli/issues/3281)

6. **#2861** [CLOSED] Claude Opus 4.6 上 `/compact` 失败（空响应重试 3 次）— 7 评论
   上下文压缩在高阶模型上的稳定性问题，影响长会话使用。
   [链接](https://github.com/github/copilot-cli/issues/2861)

7. **#4919** [CLOSED] `/ask` 在 auto 模型模式下不工作 — 4 评论
   tangents 功能与模型选择器的交互缺陷，近期版本回归。
   [链接](https://github.com/github/copilot-cli/issues/4919)

8. **#2581** [CLOSED] 含点号的 MCP 工具名导致 400 错误 — 3 评论
   CLI 未遵循 MCP 规范对工具名的宽容度，规范兼容性问题。
   [链接](https://github.com/github/copilot-cli/issues/2581)

9. **#4805** [OPEN] 崩溃后遗留的 `inuse.<pid>.lock` 导致会话无法恢复 — 2 评论
   生命周期 bug：数据完好但锁文件永不回收，会话“假死”。
   [链接](https://github.com/github/copilot-cli/issues/4805)

10. **#4611** [CLOSED] 缓存版本排序 bug：`-9` 被选中而非 `-10/-11` — 1 评论
    `localeCompare` 字典序比较 prerelease 后缀的经典坑，影响包缓存选择。
    [链接](https://github.com/github/copilot-cli/issues/4611)

---

## 4. 重要 PR 进展

过去 24 小时仅 1 条 PR 更新：

1. **#5000** [OPEN] 从已发布的 GitHub Release 触发 npm tarball 发布
   由社区贡献者 @devm33 提交：将 npm 发布流程改为由 GitHub Release 驱动，采用 OIDC trusted publishing（不依赖 npm token），并保留 explicit-tag 手动恢复路径。这是发布工程与供应链安全的改进。
   [链接](https://github.com/github/copilot-cli/pull/5000)

> 注：今日无官方 PR 动态，版本修复主要直接进入 Release 渠道。

---

## 5. 功能需求趋势

从近期 Issues 中可提炼出以下关注方向：

- **MCP 生态兼容性**（占比最高）：规范兼容（#2581、#4515）、OAuth 授权（#3393）、secret 注入（#4985）、服务器加载容错（#4870）
- **安全与权限模型**：只读目录授权（已在 v1.0.90-3 落地）、MCP GitHub auth 作用域控制，社区对新能力响应积极
- **企业/组织场景**：组织级 Agent 分发（#1285）、BYOK（#4037、#2651）是企业用户核心诉求
- **会话与上下文管理**：长会话恢复（#4805、#4894）、滚动回看体验（#4995）、compaction 稳定性（#2861）
- **输入/终端体验**：剪贴板、快捷键（#3693 CTRL+Z 误退出）等 TUI 细节仍是被持续吐槽的领域
- **多模态与工具能力**：PDF 上传（#4583）、ask_user 枚举字段的自定义逃生口（#3323）

---

## 6. 开发者关注点

**高频痛点：**
1. **请求可靠性**：#1274 的 400 错误持续 8 个月，是社区信任度最大的消耗点，建议官方优先给出根因说明
2. **升级安全性**：多次出现升级即坏的情况（#3281、#3309 ARM64 原生绑定），安装链路的稳定性需加强
3. **长会话健壮性**：锁文件回收（#4805）、compaction 失败（#2861）、工具调用卡死（#4982）都指向长时间运行下的可靠性
4. **Windows/WSL 支持滞后**：剪贴板、ARM64 prebuilds 等问题反映非 macOS 平台为一等公民的程度不足

**建议关注**：v1.0.90-3 引入的 `--mcp-github-auth` 和只读目录授权标志着权限模型收紧趋势，MCP 重度用户应评估升级；PR #5000 若合并，将改变发布分发方式，依赖 npm 渠道的用户需留意。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-30

## 一、今日速览

今日无新版本发布，但社区活动异常活跃：50 条 Issue 更新、50 条 PR 更新。重点关注 **v2 TUI 内存暴涨问题（#51761）** 持续发酵，以及桌面端自定义 Provider 配置失败（#51330）等 v2 迁移痛点。PR 方面，浏览器元素评论（#52217）、用户自定义 Widget 面板（#52209）等桌面端体验增强密集落地，MCP 工具注册时序修复（#52214）也有新进展。

---

## 二、版本发布

过去 24 小时无新 Release。

---

## 三、社区热点 Issues

### 🔴 高严重度 Bug

**1. [#51761](https://github.com/anomalyco/opencode/issues/51761) — TUI OOM：v2 间歇性耗尽 24-28GB 内存**
内存以 500MB/s-1GB/s 线性增长、无 GC 锯齿，一分钟内被打满后被 OOM killer 杀死，且无可靠复现路径。8 条评论，是当前 v2 最危险的稳定性问题，建议 v2 用户密切关注。

**2. [#51330](https://github.com/anomalyco/opencode/issues/51330) — 桌面版无法保存自定义 OpenAI 兼容 Provider**
Windows 桌面 v2.0.16 上从 GUI 保存自定义 Provider 始终失败，与 #50650、#51031 描述的 v2 协议阻断相关。自定义模型接入是刚需，此问题直接阻断企业私有部署用户。

**3. [#52203](https://github.com/anomalyco/opencode/issues/52203) — Windows：关闭终端后 TUI 进程存活并泄漏**
`CTRL_CLOSE_EVENT` 未处理，孤儿进程持续消耗 CPU/内存，与 #51761 的内存问题叠加可能造成严重后果。

**4. [#52194](https://github.com/anomalyco/opencode/issues/52194) — Go 订阅“孤儿化”：CLI 可用但仪表盘不显示，5 天无客服响应**
已知 bug 叠加支持响应迟缓，对付费用户信任伤害较大，属需要优先处理的商业化问题。

**5. [#51089](https://github.com/anomalyco/opencode/issues/51089) — `mcp.add` 返回后工具注册表尚未更新**
连接成功 ≠ 工具可用：debounced reload 导致紧随其后的 prompt 可能拿不到新工具。已有对应修复 PR（#52214），进展见下文。

### 🟡 功能与体验

**6. [#37970](https://github.com/anomalyco/opencode/issues/37970) — Plan/Build 模式行为不一致（15 条评论，今日最热）**
桌面版最新版本移除了 Plan/Build 显式切换，模型时而遵循时而直接动手。已关闭但反映社区对**可控执行模式**的强烈诉求。

**7. [#50257](https://github.com/anomalyco/opencode/issues/50257) — 桌面端模型选择器对所有 V2 模型显示 "No reasoning"**
`capabilities.reasoning` 从未赋值，deepseek-v4.1-flash、kimi-k3 等明显支持推理的模型被误标，影响模型选型决策。

**8. [#52197](https://github.com/anomalyco/opencode/issues/52197) — v2 Windows 桌面 + WSL2 远程模式不加载用户 shell 环境**
WSL 内 server 以裸 `/init` 会话启动，bashrc/开发环境配置全部丢失，直接影响 WSL 远程开发场景的可用性。

### 🟢 已关闭的历史问题（今日有更新）

**9. [#26412](https://github.com/anomalyco/opencode/issues/26412) — 自定义 OpenAI 兼容 Provider 流式工具调用报错**
vLLM 后端下所有工具调用因 `function.name` 类型断言失败，11 条评论，是自定义 Provider 生态的长期痛点。

**10. [#35863](https://github.com/anomalyco/opencode/issues/35863) — 上下文窗口硬编码为 200k 而非动态解析**
依赖静态快照导致 auto-compaction 过早触发。已关闭，但反映的“元数据动态解析”问题与 #50257 同源。

---

## 四、重要 PR 进展

### 新功能

**1. [#52217](https://github.com/anomalyco/opencode/pull/52217) — 桌面内置浏览器元素评论**
DevTools 风格元素选择器 + 内联评论 + 发送给 agent 时附元素引用，让浏览器工具可直接作用于被评论元素。前端开发工作流的重大增强。

**2. [#52209](https://github.com/anomalyco/opencode/pull/52209) — 用户自定义 Widget 面板（含权限授予机制）**
用户以文件夹 + `index.html` 形式交付面板，从磁盘发现并展示在会话侧栏，带 capability grants 权限模型。向可扩展 UI 生态迈出一步。

**3. [#52219](https://github.com/anomalyco/opencode/pull/52219) — OpenRouter 模型按模型族路由到原生 API**
`openai/*`、`x-ai/*`、`meta/*` 走 Responses API 等，绕过统一抽象层以获得原生能力（如 reasoning、cache）。

**4. [#39015](https://github.com/anomalyco/opencode/pull/39015) — 模型门控自动审批模式（长期 PR，今日更新）**
opt-in 模式下由小模型审查每个重要操作，安全操作自动放行——回应社区对“半自动 agent”的诉求。

### Bug 修复

**5. [#52214](https://github.com/anomalyco/opencode/pull/52214) — 修复 `mcp.add` 工具注册时序（Closes #51089）**
server 集合变更时同步 settle 工具注册表，消除“连接成功但工具不可用”窗口。

**6. [#52211](https://github.com/anomalyco/opencode/pull/52211) — 重启后恢复待回答的 Question 请求**
持久化 pending QuestionV2 请求，重启后原请求 ID 仍可应答，解决长任务中断丢失问题。

**7. [#52198](https://github.com/anomalyco/opencode/pull/52198) — 限制会话 shell 输出注入模型消息的体积（Closes #45099）**
单条大 shell 输出不再撑爆上下文，直接关系到 #51761 类内存/上下文问题的防护。

**8. [#52190](https://github.com/anomalyco/opencode/pull/52190)（已合并）— 兼容 Copilot 模型的多个 `reasoning_opaque` 值**
修复 Claude Opus 5/5.5、Fable 5.1 交错思维模式下每次工具调用前都发新签名 reasoning 导致的 `AI_InvalidResponseDataError`。

**9. [#52208](https://github.com/anomalyco/opencode/pull/52208) — grep 搜索路径不存在时报错而非静默返回空**
消除 `src/utlis` 这类 typo 被无声吞掉的问题，提升 agent 自我纠错能力。

**10. [#49909](https://github.com/anomalyco/opencode/pull/49909) — 默认服务端口避开 WSL 占用与保留端口（Windows）**
解决 WSL 转发监听器导致 Windows 上 managed service 无法启动的问题，WSL 桌面用户的关键修复。

### 已合并的 UI 优化（快速浏览）

- [#52207](https://github.com/anomalyco/opencode/pull/52207)：相邻 Read 合并为一行显示（已合并）
- [#52210](https://github.com/anomalyco/opencode/pull/52210)：Used 分组头部吸顶（已合并）
- [#52204](https://github.com/anomalyco/opencode/pull/52204)：系统告警仅对打开的会话标签页触发（已合并）

---

## 五、功能需求趋势

| 方向 | 代表 Issue/PR | 社区热度 |
|---|---|---|
| **桌面端体验与内置浏览器** | #52217、#52209、#25262（状态栏） | 高，今日多个桌面 PR 落地 |
| **可观测性与调试** | #33333（/injected-messages）、#24990、#35128（会话导出） | 持续，社区希望看到发给模型的真实 payload |
| **执行可控性** | #37970（Plan/Build）、#39015（自动审批） | 高，15 条评论领跑 |
| **自定义 Provider / 自托管兼容** | #51330、#26412、#52219 | 高，OpenAI 兼容生态是重灾区 |
| **上下文管理智能化** | #35863、#39798、#52198 | 持续，compaction 时机与窗口动态解析 |
| **Windows / WSL 支持** | #52203、#52197、#49909 | 高，Windows 侧问题集中 |
| **MCP 可靠性** | #51089、#52214、#39908 | 中，注册时序与 schema 兼容 |

---

## 六、开发者关注点

1. **v2 稳定性是当前最大风险**：OOM（#51761）、进程泄漏（#52203）、Provider 保存失败（#51330）等问题叠加，建议生产环境暂缓全面迁移 v2。
2. **自定义 Provider 生态仍有断点**：从流式工具调用（#26412）到桌面配置保存（#51330），OpenAI 兼容后端（尤其 vLLM）用户反复受挫。
3. **Windows/WSL 一等公民化诉求强烈**：端口冲突、环境变量加载、进程生命周期管理问题集中出现，#49909 与 #52197 值得 Windows 用户跟踪。
4. **上下文与内存防护正在补齐**：#52198（shell 输出限界）等 PR 表明团队在系统性加固，但动态 context window 解析（#35863）类根因问题仍需关注。
5. **付费用户支持响应偏慢**：#52194（5 天无回复）提示 Go 订阅用户遇到账号问题时需做好自助排查准备。

---

*数据来源：GitHub anomalyco/opencode（过去 24 小时活动）*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-09-30

## 1. 今日速览

Qwen Code 今日发布 **v0.24.7 正式版**（CLI、Desktop、TypeScript SDK 同步更新），核心特性是 Managed Agent 允许 workspace 绑定会话无执行准入。社区讨论焦点继续围绕 **Managed Agent / Hosted Runtime 架构**（#12380 双路径架构提案评论已达 37 条），同时暴露出一批 runtime-broker 相关的边界缺陷和 SDK 进程残留的 P1 级 bug。

---

## 2. 版本发布

### v0.24.7（CLI / Desktop / SDK 同步）
- **feat(managed-agent)**: 允许 workspace 绑定会话在无执行的情况下准入（[#12709](https://github.com/QwenLM/qwen-code/pull/12709)）
- **fix(core)**: Code Mode 文本与 lazy tool discovery 对齐（#12990）
- **fix(permissions)**: 修复已批准权限的处理
- **fix(serve)**: 保留会话创建失败的诊断信息（#12331）
- **feat(sdk-java)**: 新增 managed runtime 支持
- 无已知破坏性变更
- 同时发布 nightly `v0.24.7-nightly.20260929` 及 **sdk-typescript v0.1.17**（捆绑 CLI 0.24.7）
- ⚠️ 注意：VSCode IDE Companion 0.24.7 发布流程失败（[#13028](https://github.com/QwenLM/qwen-code/issues/13028)）

---

## 3. 社区热点 Issues

| # | Issue | 关注理由 |
|---|-------|---------|
| 1 | [#12380](https://github.com/QwenLM/qwen-code/issues/12380) Managed Agent 双路径架构提案（37 评论） | 项目最核心的架构提案：Session 持久所有权、Workspace 绑定、可恢复工具执行、稳定 WebSocket，讨论持续 9 天仍活跃 |
| 2 | [#13016](https://github.com/QwenLM/qwen-code/issues/13016) SDK 中止后 CLI worker 进程残留（P1） | 唯一 P1：SIGTERM/SIGKILL 均无法触达 supervisor 重启的子进程，直接影响 SDK 集成方的资源泄漏 |
| 3 | [#12028](https://github.com/QwenLM/qwen-code/issues/12028) 非对话上下文 token 治理（15 评论） | 系统提示词、工具 schema、QWEN.md 每次请求重复计费，长上下文模型下开销远超对话本体，是 token 成本优化的总纲 |
| 4 | [#12333](https://github.com/QwenLM/qwen-code/issues/12333) token 优化缺少召回率/成功率门禁 | token 节省的验收标准缺失，社区明确指出“没有回归门禁就不能开启最大的节省项”，工程方法论讨论质量很高 |
| 5 | [#13030](https://github.com/QwenLM/qwen-code/issues/13030) Hosted Workspace 只读搜索工具配置 | 为 Hosted profile 增加 `list_directory`/`glob`/`grep_search`，是 Hosted 能力扩展的关键一步 |
| 6 | [#12867](https://github.com/QwenLM/qwen-code/issues/12867) Stage D 持久化生命周期跟进 | durable lifecycle、Turns、Actions、AgentDefinition，Managed Agent 演进的下半场路线图 |
| 7 | [#12889](https://github.com/QwenLM/qwen-code/issues/12889) 延迟 tool_call schema 允许空参数 | 延迟工具桥接的校验漏洞，配合 #12999/#13070 构成一组 schema 校验一致性问题 |
| 8 | [#13068](https://github.com/QwenLM/qwen-code/issues/13068) Ctrl+命名键发送原始 C0 字节 | shell 模式下 Ctrl+方向键等导致 EOF/光标卡死，直接影响日常终端体验（PR #13067 已提交修复） |
| 9 | [#13059](https://github.com/QwenLM/qwen-code/issues/13059) provider 调用无限等待（已关闭） | worker 拒绝的执行仍返回 200 prepared，客户端永久阻塞——典型的分布式协议状态机缺陷，已修复关闭 |
| 10 | [#13042](https://github.com/QwenLM/qwen-code/issues/13042) 每 Session 索引无限增长 | 内存泄漏类问题：released Session 的索引项永不收缩，长期运行的 daemon 场景风险高 |

**其他值得留意**：#13073（重试计数器以错误文本为 key，多调用 turn 丢弃成功调用）、#13017（SDK Java 故障门禁测试 flaky）、#13062（投机 accept 失败无遥测）。

---

## 4. 重要 PR 进展

| # | PR | 内容 |
|---|-----|------|
| 1 | [#12894](https://github.com/QwenLM/qwen-code/pull/12894) 持久化远程 Shell 结果投递 | O2 路径：有界 stdout/stderr 发布、不可变目录与对象存储、Broker 与 worker Tool v3 路由，历经 8 轮评审，衍生出 #12986/#13019 两个跟进 issue |
| 2 | [#12946](https://github.com/QwenLM/qwen-code/pull/12946) 私有 Hosted MCP runtime（H1） | Runtime 持有 stdio/HTTP/SSE 连接与凭证，模型收到 pinned 工具 schema，走标准 durable 工具生命周期 |
| 3 | [#13071](https://github.com/QwenLM/qwen-code/pull/13071) Hosted 工具审批（D6a） | Harness 在审批模式未预批时持久等待审批结果，新增私有路由记录可信决策 |
| 4 | [#12977](https://github.com/QwenLM/qwen-code/pull/12977)（已合并）Hosted Workspace 运维恢复 | 离线、opt-in 的 `workspace-recovery` 三段式流程，处理部分 Shell 捕获钉住 Workspace lease 的场景 |
| 5 | [#13079](https://github.com/QwenLM/qwen-code/pull/13079) 重试计数器按工具+错误类分类 | 修复 #13073：不再以验证错误文本为 key，避免误伤同一 turn 中的合法调用 |
| 6 | [#13067](https://github.com/QwenLM/qwen-code/pull/13067) Ctrl+命名键修复 | 修复 #13068：Ctrl+方向键等不再泄漏 C0 控制字节到 pty |
| 7 | [#13080](https://github.com/QwenLM/qwen-code/pull/13080) /stats 支持滚动 | 修复 #13074：双渲染器（ink / OpenTUI scrollbox）均支持在短终端下滚动 |
| 8 | [#13029](https://github.com/QwenLM/qwen-code/pull/13029) ACP rewind 序号排除通知 turn | 后台通知 turn 不再污染按位置的 prompt 计数，修复 rewind 语义 |
| 9 | [#13006](https://github.com/QwenLM/qwen-code/pull/13006) Hook 上下文送达模型 | PreToolUse / PostToolUseFailure 的 `additionalContext` 现在会追加到工具结果文本并进入下一次模型请求 |
| 10 | [#12561](https://github.com/QwenLM/qwen-code/pull/12561) MemoryChanged hook | 记忆文档增删改及自动记忆开关变化时通知集成方，不回滚、不含文件内容 |

**其他**：#13077（CLI 子进程 spawn 失败不再静默退出）、#13081（Web Shell 轨迹瀑布图）、#12183（`--managed-extensions` 部署托管扩展目录）、#12594（拒绝已下线的 OAuth 模型选择）。

---

## 5. 功能需求趋势

1. **Managed Agent / Hosted Runtime（绝对主线）**：50 条热点 issue 中约 40% 与之相关，覆盖 Session 持久化、durable 工具执行、审批流、MCP 私有运行时、运维恢复。#12380 的分阶段交付（D1–D6、H1、O2）正在密集落地。
2. **Token / 上下文成本治理**：#12028 总纲下派生出遥测门禁、记忆提取冷却（#13004）、事件驱动记忆召回（#13063）等，社区对“非对话上下文隐性开销”高度敏感。
3. **记忆系统增强**：自动记忆提取节奏控制、自主工具运行中的记忆召回、MemoryChanged hooks。
4. **终端/UI 体验打磨**：/stats 滚动、Ctrl 组合键、VP 模式对齐、Web Shell 导航与瀑布可视化。
5. **可扩展性与集成**：部署托管扩展目录、hooks 上下文透传、ACP 协议边界修复。

---

## 6. 开发者关注点

- **进程生命周期管理是当前最大痛点**：P1 级的 SDK 进程残留（#13016）、spawn 静默失败（#13077）、CLI supervisor 信号不可达，表明 supervisor/child 重启模式在集成场景下信号传递设计需要重审。
- **跨语言协议一致性**：TypeScript worker 与 Java Broker 的 validator 边界不一致（#13041）、promptId bounds 差异，反映双栈架构下的契约同步成本在上升。
- **分布式状态机边界缺陷集中暴露**：#13059（prepared 但永不执行）、#13040（Broker 替换后取消风暴）、#13019（过期 CANDIDATE 恢复）——随着 durable 架构落地，故障恢复路径的测试覆盖成为瓶颈。
- **测试稳定性**：#13017、#13031 两个 flaky 测试 issue 均出现在无 Java 改动的 PR 上，CI 可信度受到社区关注。
- **延迟工具桥接的 schema 校验**：#12889/#12999/#13070 一组问题显示 lazy tool discovery 引入的声明层校验与实际工具校验存在语义错位，是 v0.24.6+ 升级用户可能直接踩到的坑。

---

*数据来源：github.com/QwenLM/qwen-code（过去 24 小时 Releases / Issues / PRs）*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报
**日期：2026-09-30 | 数据来源：github.com/Hmbown/DeepSeek-TUI (Hmbown/Codewhale)**

---

## 一、今日速览

今天项目无新版本发布，但 **v0.10.1 集成分支（PR #6782）已成型**，集中修复了权限边界、idle 轮询、滚动性能、undo/retry 持久化等 0.10.0 的高频痛点。0.10.0 版本暴露出多个严重回归：**Linux 下 Full Access 失效、CPU 占用持续恶化、Windows 多行粘贴再次破功**，均由维护者 @Hmbown 今日密集提交修复 PR。此外，中文社区活跃度上升，出现了中文 bug 报告（#6788）和已完成的中文文档本地化 EPIC（#5482）。

---

## 二、版本发布

过去 24 小时无新 Release。下一个版本 **0.10.1** 正在集成中（见 #6458、#6782）。

---

## 三、社区热点 Issues（Top 10）

1. **[EPIC-005] CodeWhale TUI Crate 拆解（伞形）** — [#5316](https://github.com/Hmbown/Codewhale/issues/5316)
   30 条评论，为全库讨论最热。9-29 宣布 FEAT-029 完成：全部 14 个 debug 命令已通过 PR #6707 合入 `main`，架构拆解持续推进。

2. **[bug] 0.10.0 回归：Windows Terminal 多行粘贴逐行提交** — [#6427](https://github.com/Hmbown/Codewhale/issues/6427)
   #5981 修复在 0.10.0 中再次失效，已关闭（对应 PR #6776 修复 composer 输入）。Windows 用户体验的关键问题。

3. **[bug] 0.10.0 Linux 下 Full Access 无法传递给 agents** — [#6787](https://github.com/Hmbown/Codewhale/issues/6787)
   维护者今日自报：设置最高权限后子代理仍被 Auto-Review guardian 拒绝或假死，用户被迫降级 0.9.x。严重权限回归。

4. **[bug] /retry 与 /undo 仅回滚 UI 层** — [#6788](https://github.com/Hmbown/Codewhale/issues/6788)
   中文报告：被撤销的消息仍存在于模型上下文和持久化会话中，重试会累积重复消息。已纳入 PR #6782 的 0.10.1 修复范围。

5. **[bug] CPU 占用回归：0.9.12→0.9.13→0.10.0 逐级恶化** — [#6728](https://github.com/Hmbown/Codewhale/issues/6728)
   基于 FreeBSD 二进制分析，多个 TUI 会话竞争 subagent store 导致自旋（关联 #6573、已合并 PR #6778 部分修复）。

6. **[bug] 长时间运行后 TUI 滚动卡顿** — [#6652](https://github.com/Hmbown/Codewhale/issues/6652)
   运行数小时后滚动“果冻化”，渲染不同步。PR #6782 已包含响应式滚动重做。

7. **[EPIC] 文档审查、重构并全面中文化** — [#5482](https://github.com/Hmbown/Codewhale/issues/5482)
   已关闭。解决英文文档陈旧 + 机翻错误对中文用户群的阻碍，是中文社区的重要里程碑。

8. **[enhancement] SSE 响应头未收到时 Turn 直接失败、无重试** — [#6699](https://github.com/Hmbown/Codewhale/issues/6699)
   唯一没有重试预算的网络失败路径，已关闭，网络韧性补齐。

9. **[bug] shell 忙锁导致致命 spawn 失败** — [#6435](https://github.com/Hmbown/Codewhale/issues/6435)
   锁超时被误报为 "operation binding not registered"，守卫承诺落空。已关闭。

10. **0.10.1 源码资格审定与 PR 有序集成** — [#6458](https://github.com/Hmbown/Codewhale/issues/6458)
    0.10.1 发布的总控追踪 Issue，规定依赖顺序合入、保留贡献者 PR 等集成纪律，观察发布节奏的入口。

---

## 四、重要 PR 进展（Top 10）

1. **v0.10.1 集成分支 wave/0.10.1-next** — [PR #6782](https://github.com/Hmbown/Codewhale/pull/6782)
   汇总权限边界修复、idle 轮询、响应式滚动、undo/retry 持久化、嵌套工作时限、结构化 hook stdin 等核心修复，是下一个版本的候选分支。

2. **fix(tui): composer 输入正确性** — [PR #6776](https://github.com/Hmbown/Codewhale/pull/6776)
   修复多字节点击偏移、超长提交草稿保留、粘贴顺序、路径含空格的文件提及等 6 类输入问题（含 #6427）。

3. **fix(tools): shell 任务保留、输出增量与子进程生命周期** — [PR #6759](https://github.com/Hmbown/Codewhale/pull/6759)
   长任务结束后仍可查询、轮询只返回新字节、取消/超时负责子进程清理。

4. **fix(mcp): 握手卫生** — [PR #6789](https://github.com/Hmbown/Codewhale/pull/6789)
   发送空 client capabilities、接受 2025-11-25 协议版本、30s 冷启动超时、AWS 会话过期恢复——显著改善严格 MCP 服务器兼容性。

5. **fix(fleet): 保存配置文件拒绝时回退父路由** — [PR #6717](https://github.com/Hmbown/Codewhale/pull/6717)
   避免 Fleet worker 全军覆没且误报为任务级覆盖问题。

6. **fix(tui): 清除 To-do 项同步移出工作栏** — [PR #6783](https://github.com/Hmbown/Codewhale/pull/6783)
   直接关闭用户呼声较高的 #6546（To-do 列表无法清理）。

7. **fix(app-server): 守护进程重启一致性** — [PR #6772](https://github.com/Hmbown/Codewhale/pull/6772)
   重启后保留线程链接、拒绝未知线程 ID、配置先落盘再报成功。

8. **fix: 分页器空白与换行宽度、macOS 阻眠器生命周期** — [PR #6777](https://github.com/Hmbown/Codewhale/pull/6777)
   保留缩进与重复空格、按实际宽度缓存行、resize 保持搜索匹配可见。

9. **fix(tasks): 任务面板改用内存应答而非抢共享锁** — [PR #6778](https://github.com/Hmbown/Codewhale/pull/6778)（已合并）
   终结 2.5s 轮询抢锁的持续 CPU 消耗，#6573 第二阶段修复。

10. **可复用 GitHub Action：Codewhale PR Review** — [PR #6780](https://github.com/Hmbown/Codewhale/pull/6780)
    安装精确校验和的 release 二进制、诚实报告未完成的 review，配合 #6486 让用户几分钟内把 Codewhale 接入自己的仓库。

---

## 五、功能需求趋势

- **稳定性与性能回归修复**是当前绝对主旋律：CPU 占用（#6728/#6573）、TUI 渲染（#6652/#6651/#6704）、权限传递（#6787）密集出现，指向 0.10.0 大版本的质量代价。
- **Undo/Retry 与会话持久化语义**：#6788 反映社区要求 UI、模型上下文、磁盘三方一致。
- **生态系统集成**：可复用 GitHub Action（#6486/#6780）、MCP 协议兼容性（PR #6789）、hooks 结构化执行回执（#6689/#6582）、Tsubasa 等新模型 Provider 预设（#6695）。
- **多语言与本地化**：中文文档 EPIC 完成（#5482）、Web 端 locale 404 处理（PR #6786），中文用户群持续增长。
- **安装与分发体验**：“三扇门一次装好”的统一安装体验（#6303）。

---

## 六、开发者关注点

1. **空闲 CPU 消耗**是最集中的抱怨：多会话自旋、任务面板轮询、长时运行卡顿，用户已开始用二进制对比分析定位回归版本。
2. **Windows 体验脆弱**：多行粘贴回归、机器级 ExecutionPolicy 阻断 shell 工具（#6745），Windows 环境适配需要系统性投入。
3. **权限模型可预期性**：guardian fail-closed 导致 Full Access 下 agent 被拒，用户对“权限声明 vs 实际行为”的一致性要求强烈。
4. **网络韧性缺口**：SSE 建流失败无重试（#6699）、DuckDuckGoo 不可达时搜索链断裂（#6746），弱网环境可靠性是刚需。
5. **Hooks/插件可观测性**：社区插件作者（如 MemoryWhale）需要拿到完整命令、退出码、工作目录等结构化回执。
6. **模型提示与环境的对齐**：#6747 提出模型可见文本不应提及当前环境缺失的工具，避免弱模型空转。

---
*注：本日无垃圾信息类 Issue 趋势异常，仅一条推广内容（#6767，已关闭）。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-09-30

## 1. 今日速览

Pi 在 24 小时内连发 **v0.99.0 和 v0.99.1** 两个版本，正式引入 GPT-6.1 Sol 作为 OpenAI Codex 默认模型，并落地 Codemode + MCP 并行工具调用能力。但新版本暴露出打包问题（`openai-chatgpt.js` 缺失导致 ChatGPT 登录失败）和 TUI 提交延迟等回归。社区修复节奏很快，llama.cpp 集成与登录体验（OAuth 代码登录、llama.app）成为 PR 热点方向。

## 2. 版本发布

### v0.99.1
- **GPT-6.1 Sol** — 可用于 OpenAI、Azure OpenAI、OpenAI Codex，并成为 Codex 默认模型。[模型选择文档](https://github.com/earendil-works/pi/blob/v0.99.1/packages/coding-agent/docs/models.md#select-a-model)

### v0.99.0
- **Codemode + MCP** — 支持连接 MCP 服务器，模型可运行 JavaScript 并行调用工具。[MCP 文档](https://github.com/earendil-works/pi/blob/v0.99.0/packages/coding-agent/docs/mcp.md)

## 3. 社区热点 Issues

1. **#7547** [OPEN] Windows 使用方式调研（69 评论）— 维护者发起官方调研，收集 Windows 用户运行 Pi 的方式与痛点，用于决定核心支持与外置化的边界。近期最活跃的讨论帖。
2. **#10182** [CLOSED] 0.99.0 打包缺失 `openai-chatgpt.js`（👍4）— npm tarball 缺模块导致 ChatGPT 登录失败，属发布级回归，社区确认复现，修复优先级高。
3. **#10184** [CLOSED] Sign in with ChatGPT 报 `invalid_client`（👍6）— OpenAI consent 页拒绝 Pi 客户端，可能与 #10176 引入的替代登录流程相关。
4. **#10074** [OPEN] Anthropic 工具调用损坏非 ASCII 编辑参数 — 韩文文件 `edit` 频繁失败甚至损坏文件，`\uXXXX` 转义被截断产生控制字符，影响数据安全。
5. **#10154** [OPEN] 中文粗体渲染字面化 — `**` 收尾位于全角标点与 CJK 字符之间时渲染失败，#3353 修复后在 0.87.1 仍存在，中文用户体验核心问题。
6. **#9566** [OPEN] models.json 自定义模型上下文被强制 128k（👍4）— llama 等本地提供商配置被默认值覆盖，影响本地部署用户。
7. **#10033** [CLOSED] 压缩 prompt 塞入全部 thinking 导致超出上下文 — DeepSeek V4.1 等返回思考内容的模型在长会话中自动压缩永远失败。
8. **#10144** [OPEN] 排队 prompt 逐条发送而非批处理 — 用户期望连续发送的多条消息合并处理，涉及交互模型设计讨论。
9. **#10198** [CLOSED] 0.99.0 起 TUI 提交延迟随会话长度增长 — `getBranchSelection` 每次提交都重新 merge 模型目录，性能回归，已有 memoization 修复方案。
10. **#10191** [CLOSED] 空闲时占用 ~1.5 核心 — Loader 80ms 重绘整行 + GC 占 41%，对笔记本用户是明显痛点。

## 4. 重要 PR 进展

1. **#10190** [CLOSED] 修复 #9962：注册时将持有凭据的原生 provider 标记为已配置，消除启动时 "No models available" 竞态。
2. **#10158** [CLOSED] 修复 #10077：刷新模型目录时保留缓存的 contextWindow，llama.cpp 不再被重置为 128k。
3. **#10159** [CLOSED] 内置扩展改为 `builtin:<name>` 资源路径，`mcp`/`llama.cpp`/`codemode`/`tool-search` 可通过 `pi config` 全局或按项目禁用 — 扩展架构重要重构。
4. **#10194** [OPEN] Anthropic OAuth 新增复制代码登录方式，改善远程机器上的登录体验（来自社区，已在生产验证）。
5. **#10122** [OPEN]（mitsuhiko）托管 llama.cpp 服务器模式：`/login llama.cpp` 可由 Pi 自行启动/停止 llama-server，按需生命周期管理。
6. **#10197** [OPEN] 统一包产物校验：单一 manifest 驱动的内容寻址产物集，防止未声明依赖逃过检查 — 直接针对 #10182 类打包事故。
7. **#10176** [CLOSED] OpenAI provider 增加替代登录方式（与 #10182/#10184 修复相关）。
8. **#10156** [CLOSED] 可配置鼠标滚轮滚动，支持 `/settings` 预设与自定义值。
9. **#10165** [OPEN] 跟踪被丢弃的用户 bash 输出，确保模型收到截断通知与完整日志路径。
10. **#10174** [CLOSED] 内置扩展被用户扩展替换时显示警告，配合新的 `replaceable` 机制。

## 5. 功能需求趋势

- **本地模型 / llama.cpp 生态**：#10122 托管服务器、#10179 llama.app 文档、#9137 Nix flake、#9566/#10077 contextWindow 问题 — 本地部署是持续强势方向。
- **登录与多提供商认证**：#10182/#10184 打包与 OAuth 问题、#10194 代码登录、#10176 替代登录 — 发布质量与认证体验需求集中爆发。
- **MCP 与 Codemode**：v0.99.0 落地后出现 #10186（MCP 链接可点击）、#10192（hidden tools 仍出现在 system prompt）等后续打磨需求。
- **CJK/国际化渲染**：#3353、#10154 中文粗体渲染，是长期未根治的痛点。
- **性能**：#10198 提交延迟、#10191 空闲 CPU 占用、#10180 cache warming 失效 — TUI 渲染与缓存机制待优化。
- **Windows 一等公民支持**：#7547 官方调研，方向待定。

## 6. 开发者关注点

- **发布质量回归**：0.99.0 缺失打包模块（#10182）直接影响登录，催生 #10197 统一产物校验——社区对发布流程可靠性有明确诉求。
- **数据安全**：#10074 工具参数编码损坏文件属最高严重级别问题，非 ASCII 场景的鲁棒性需系统性加固。
- **扩展生态健壮性**：#9817/#10203 模块解析（`main`/`exports`、传递依赖）在 npm 安装与编译二进制下行为不一致，困扰扩展开发者。
- **长会话体验**：自动压缩失败（#10033、#10045）、压缩阈值仅在 run 边界评估（#6339）——重度用户的核心痛点。
- **包管理副作用**：#10202 `pi remove` 未传 pnpm 标志导致 lockfile 大规模重写，对将 Pi 嵌入工作流的团队影响较大。

---
*数据来源：github.com/earendil-works/pi · 统计窗口：过去 24 小时（70 Issues / 21 PRs 更新）*

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# 📰 oh-my-pi 社区动态日报 — 2026-09-30

## 1. 今日速览

oh-my-pi 今日发布 **v18.4.4**，核心更新为 pi-agent-core 新增 `Agent.replaceQueue()` 与队列消息分组能力。Issue 侧聚焦模型兼容性（Opus 5.5、Grok on Bedrock、Vertex Claude）与 RLM 上下文引擎 RFC 系列的持续讨论；PR 侧 openai-codex baseUrl 修复、模型预设（model presets）、音视频转录等社区贡献活跃推进。

---

## 2. 版本发布

### v18.4.4（@oh-my-pi/pi-agent-core）
- **新增 `Agent.replaceQueue()`**：可替换单个 pending 队列而不影响另一个队列（[#11872](https://github.com/can1357/oh-my-pi/pull/11872) by @andrebrait）
- **队列消息分组**：owned companion 记录现可对排队消息分组

---

## 3. 社区热点 Issues

| # | Issue | 关注理由 |
|---|-------|---------|
| 1 | [#12870](https://github.com/can1357/oh-my-pi/issues/12870) Opus 5.5 requires Claude Code 2.1.280+（已关闭） | 新模型兼容性热点，15 条评论、9 👍；OMP 对最新 Anthropic Opus 5.5 的支持受限，已作为 duplicate 关闭，说明上游已有跟踪 |
| 2 | [#12407](https://github.com/can1357/oh-my-pi/issues/12407) / [#12400](https://github.com/can1357/oh-my-pi/issues/12400) RLM context engine RFC v1/v2 | @kvnloo 的长会话 token 优化方案（prompt-as-variable + depth-1 subcall），各 10 条评论，是当前架构层面最活跃的讨论 |
| 3 | [#12410](https://github.com/can1357/oh-my-pi/issues/12410) RFC v3: RLM Runtime Membrane | 将上下文边界升级为运行时不变量（session 所有权、租约执行），配套路线图 [#12413](https://github.com/can1357/oh-my-pi/issues/12413)（v1–v7） |
| 4 | [#3815](https://github.com/can1357/oh-my-pi/issues/3815) 子 Agent 活动实时预览（已关闭） | 30 👍 高人气需求：让用户看到运行中 subagent 正在调用什么工具、读什么文件，已落地关闭 |
| 5 | [#13795](https://github.com/can1357/oh-my-pi/issues/13795) Vertex Claude Sonnet 5.5 全请求 400（p1） | omp 注入的 `thinking.adaptive.block_binding` 字段被 Vertex 拒绝，影响 18.4.4 全量用户，属高优先级回归 |
| 6 | [#13619](https://github.com/can1357/oh-my-pi/issues/13619) Windows 上原生 IDA 工具崩溃（p1） | `signal.pthread_sigmask` 在 Windows 不可用导致 worker 退出，逆向工程用户受阻 |
| 7 | [#13116](https://github.com/can1357/oh-my-pi/issues/13116) devin: Windsurf Enterprise 登录支持 | 遗留 Windsurf 席位无法 OAuth 认证，只能手动导出 `DEVIN_API_KEY`，需复刻 Devin CLI 的浏览器登录流程 |
| 8 | [#13830](https://github.com/can1357/oh-my-pi/issues/13830) openai-codex 发现接口把自定义 key 发给 chatgpt.com（p2） | 安全 + 功能双重问题：模型发现硬编码官方端点，自建网关用户的 key 被外发，当日已有两个修复 PR 响应 |
| 9 | [#9908](https://github.com/can1357/oh-my-pi/issues/9908) 9 进程合计 6.89 GiB 内存占用 | mnemopi embed worker（780 MB）从不卸载，多会话重度用户的资源痛点，持续发酵 |
| 10 | [#13803](https://github.com/can1357/oh-my-pi/issues/13803) Plan mode 阻止 `proc://<id>/kill` | 规划模式将工作树设为只读，误伤了子进程管理，导致 planner 无法取消自己的 subagent |

---

## 4. 重要 PR 进展

1. **[#13832](https://github.com/can1357/oh-my-pi/pull/13832)** fix: openai-codex 模型发现走配置的 baseUrl（review:p1）— 直接修复 #13830 的 key 外泄问题；注意与 [#13834](https://github.com/can1357/oh-my-pi/pull/13834) 为同日撞车 PR
2. **[#13528](https://github.com/can1357/oh-my-pi/pull/13528)** feat: 严格 per-session OAuth 账户锁定（`/account` + `auth.defaultAccounts`）— 多账号用户的会话级隔离
3. **[#5253](https://github.com/can1357/oh-my-pi/pull/5253)** feat: model presets — 保存/切换整套模型角色配置，长期高频需求
4. **[#13826](https://github.com/can1357/oh-my-pi/pull/13826)** feat: `read` 工具可选转录音视频（带时间戳），复用 OMP 自带的端侧语音模型（`stt.transcribeFiles`，默认关闭）
5. **[#13824](https://github.com/can1357/oh-my-pi/pull/13824)** fix(mnemopi): recall 使用配置的 veracity/tier 权重（review:p1）
6. **[#9959](https://github.com/can1357/oh-my-pi/pull/9959)** feat: 最终工具授权事件 — 为扩展/TUI/ACP 提供审批前的完整执行输入与决策上下文
7. **[#11207](https://github.com/can1357/oh-my-pi/pull/11207)** feat(advisor): 三窗格配置界面 + 子代禁用继承
8. **[#13836](https://github.com/can1357/oh-my-pi/pull/13836)** feat: auto thinking 最低 effort 级别（`auto:<level>` 语法）
9. **[#11269](https://github.com/can1357/oh-my-pi/pull/11269)** feat: openai-responses 会话恢复的原生历史 warm replay（可选）
10. **[#13828](https://github.com/can1357/oh-my-pi/pull/13828)** feat(mcp): 暴露 MCP server 初始就绪状态，扩展可异步等待 `tools/list`

---

## 5. 功能需求趋势

- **多 Provider 兼容与认证**：Bedrock Grok temperature 字段（#13730）、Vertex Claude thinking 字段（#13795）、Windsurf Enterprise 登录（#13116）、Ollama systemOne（#13729）——新模型/新端点适配是最密集的诉求
- **上下文与内存管理**：RLM RFC 系列（#12400/12407/12410/12413）代表社区对长会话 token 成本与上下文外置的强烈兴趣；内存占用（#9908）是另一主线
- **TUI/UX 可观测性**：subagent 实时预览（#3815，30👍）、审批模式快捷切换（#2956，15👍）、read-only 模式（#2195）、裸 `exit` 退出（#3850）
- **会话/账号治理**：模型选择策略 per-spawn（#13317）、OAuth 账户锁定、usage 上报与配额感知（#13806/#13814）
- **生态可发现性**：ACP Registry 注册（#1122）、MCP 就绪状态、SDK 扩展加载（#13731）

---

## 6. 开发者关注点

- **Provider 回归风险高**：新模型发布（Opus 5.5、Grok 4.7）和 thinking 字段注入频繁引发 400 类硬故障，且 fallback 链路自身也有 bug（#13789 thinking level 不匹配导致降级失效；#13807 将终态 400 误判为可重试）
- **配额/用量误判连锁反应**：xai-oauth 的周期计数 bug（#13806）会让 usage-aware fallback 错误切换模型，影响可用性
- **Windows 平台体验仍是短板**：IDA 工具崩溃（#13619，p1）、Shift+Enter 行为异常（#13787）
- **企业/自建端点场景增多**：Codex 网关 key 外泄（#13830）、usage 缓存无法按扩展 provider 命名空间隔离（#13814）表明自托管用户正在成为重要群体
- **内存与进程生命周期**：embed worker 不卸载、每会话 0.6–1.5 GiB 的基线漂移，需要系统性的资源回收机制

---
*数据来源：GitHub can1357/oh-my-pi · 过去 24 小时 Releases / Issues / PRs*

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

# DeepSeek Harness 社区动态日报
**日期：2026-09-30**

---

## 1. 今日速览

今日 DeepSeek Harness 发布 **dsh-v0.2.0-rc.2** 候选版本，核心亮点是 macOS／Windows 桌面端新增菜单栏管理能力，用户无需另装 Node 或 pnpm 即可管理和安装 dsh 命令与插件，大幅降低安装门槛。同时修复了终端菜单与计划审阅相关的两个体验问题。过去 24 小时无新增 Issue 和 PR 更新，社区互动集中在版本发布反馈上。

---

## 2. 版本发布

### 🚀 dsh-v0.2.0-rc.2
🔗 [Release 链接](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.0-rc.2)

**✨ 新增功能**
- macOS／Windows 桌面端可在菜单栏中管理和安装 dsh 命令，支持管理插件，**无需另装 Node 或 pnpm**（@tianyicui）。这是迈向“开箱即用”桌面体验的重要一步。

**🐛 问题修复**
- 修复新建终端菜单重复列出同名 shell 的问题（@LegGasai）
- 修复切换会话或返回对话后计划审阅无法打开、「查看全文」消失的问题（@LegGasai）

---

## 3. 社区热点 Issues

过去 24 小时内无 Issue 更新，本节今日省略。

---

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新，本节今日省略。

---

## 5. 功能需求趋势

由于今日无活跃 Issue 数据，基于本期 Release 内容可观察到的方向：

- **桌面端体验一体化**：菜单栏管理 dsh 命令与插件、去除 Node/pnpm 依赖，表明降低安装与使用门槛是当前重点。
- **会话与计划审阅稳定性**：连续修复计划审阅相关问题，反映多会话场景下的 UI 状态一致性是社区反馈的痛点。

---

## 6. 开发者关注点

- **依赖简化**：内置运行时替代手动安装 Node/pnpm，是非前端开发者的强需求。
- **终端与 shell 交互细节**：如 shell 列表去重等小问题，直接影响日常使用手感。
- **多会话状态保持**：切换会话后计划审阅、「查看全文」等功能的可用性受到开发者关注。

---

*数据来源：github.com/deepseek-ai/deepseek-harness | 统计周期：2026-09-29 至 2026-09-30*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*