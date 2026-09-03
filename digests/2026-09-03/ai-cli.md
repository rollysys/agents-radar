# AI CLI 工具社区动态日报 2026-09-03

> 生成时间: 2026-09-03 09:39 UTC | 覆盖工具: 11 个

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
**数据日期：2026-09-03 | 覆盖 11 款主流 AI CLI 工具**

---

## 一、生态全景

2026 年 9 月的 AI CLI 赛道已从“单机编码助手”全面演进为“多代理编排 + 无人值守自动化 + 跨端协同”的基础设施竞争。头部工具（Claude Code、Codex）的迭代重心明显转向企业级托管与 fleet/daemon 场景，而开源阵营（Gemini CLI、OpenCode、Qwen Code）则以安全加固、供应商中立化和 TUI 现代化作为差异化战场。与此同时，**稳定性与资源治理成为全行业共同的技术债**——OOM、死循环烧 token、数据库膨胀等问题在几乎所有工具的社区中高频出现，说明长会话、高自动化场景已超出当前架构的成熟度边界。多 Provider/多订阅接入（BYOK、订阅复用）则成为新兴工具争夺用户的最大杠杆。

---

## 二、各工具活跃度对比

| 工具 | Issue 活跃度（24h） | PR 活跃度（24h） | Release | 今日焦点 |
|---|---|---|---|---|
| **Claude Code** | Top 10 热点 + 多新增 | 2 条（Issue 跟踪为主） | ✅ v2.1.259 | 企业托管 MCP、无人值守权限模式 |
| **OpenAI Codex** | Top 10 热点 | **~15+ 条合入（最活跃）** | ✅ v0.153.0 + alpha | Command Center、Windows daemon、MCP OAuth |
| **Gemini CLI** | Top 10（agent 类占 60%+） | 10+ 条（安全 PR 密集） | ❌ 无 | 子代理稳定性、安全加固 |
| **Copilot CLI** | Top 10 热点 | **0 条（最沉寂）** | ✅ v1.0.83-3（无 changelog） | 长会话 OOM、MCP 可靠性 |
| **Kimi Code CLI** | 5 条（均关闭） | 1 条 | ❌ 无 | 社区功能诉求为主，节奏平缓 |
| **OpenCode** | Top 10 热点 | 10 条（多为社区贡献） | ✅ v1.18.27 | Desktop 稳定性、infinite agent mode |
| **Qwen Code** | Top 10（含 3 个 P1） | 10 条 | ✅ live-host-v0.2.0 | OpenTUI 迁移、CI 治理、token 失控 |
| **DeepSeek TUI** | 10 条（含 2 条今日新提） | 12 条（10 个核心 PR） | ❌ 无（v0.9.12 冲刺中） | ACP 补全、Codewhale Studio、沙箱底座切换 |
| **Pi** | **~100 条（绝对最高）** | **41 条** | ❌ 无 | Provider 兼容性、TUI 打磨 |
| **oh-my-pi** | Top 10（多个 P1） | 10+ 条 | ✅ **3 连发**（v18.1.3–.5） | OAuth 回归应急修复、09/05 路由头大限 |
| **DeepSeek Harness** | 0 条 | 0 条 | ✅ v0.1.2-rc.1 | 会话流 UX、用量统计 |

**活跃度分层**：Pi（100 Issue/41 PR）> Codex ≈ Gemini CLI ≈ Qwen Code ≈ OpenCode > Claude Code ≈ oh-my-pi > DeepSeek TUI > Copilot CLI ≈ Kimi ≈ DeepSeek Harness。注意 Claude Code 虽 PR 少，但其 Issue 质量与用户基数（单 Issue 777 👍）体现的是闭源厂商“Issue 驱动 + 内部开发”模式。

---

## 三、共同关注的功能方向

### 1. 无人值守 / 自动化健壮性 ⭐⭐⭐⭐⭐（最普适）
- **Claude Code**：`--permission-prompts none`、Routines 卡死（#91724）、ScheduleWakeup token 失控（#64744）
- **Codex**：Windows daemon、Command Center 任务监控（PR #42455/#42419）
- **OpenCode**：infinite agent mode（#47019 → PR #47021）
- **Kimi CLI**：heartbeat/cron/记忆诉求（#1309）
- **DeepSeek TUI**：per-session 监督套接字（PR #5831）
- **Qwen Code**：Web Shell 定时任务路由（#10884）

### 2. 多 Provider / 订阅接入灵活性 ⭐⭐⭐⭐⭐
- **Copilot CLI**：BYOK 呼声第一（#3709，29 👍）、model ID 错误（#4680）
- **Pi / oh-my-pi**：几乎每个主流 provider 都有适配问题（Gemini thought_signature、OpenRouter、zai/GLM、xAI）；oh-my-pi 的 Copilot OAuth 回归（#10656）直接阻塞企业用户
- **OpenCode**：本地模型自动发现是历史最高 👍 需求（#6231，225 👍）
- **DeepSeek TUI**：正在系统性“去 DeepSeek 单一供应商化”（#5588）

### 3. MCP 生态可靠性 ⭐⭐⭐⭐
- **Claude Code**：企业托管 `managedMcpServers`
- **Codex**：MCP OAuth 协调刷新（PR #42413）、插件显式提及不超时（PR #42406）
- **Copilot CLI**：OAuth 缓存键不稳定（#4695）、18 个服务器仅连 3 个（#4598）
- **Gemini CLI**：RFC 9207 OAuth 校验
- **Qwen Code**：MCP 图片绕过视觉预算（#10834）

### 4. 子代理编排正确性 ⭐⭐⭐
- **Gemini CLI**：MAX_TURNS 误报成功（#22323）、agent 挂起（#21409）
- **oh-my-pi**：steering 跳过终态 yield（#10645）
- **Pi**：子代理提前报完成（PR #8250）
- **Qwen Code**：skill 硬约束被违反（#10888）
- **Claude Code**：per-agent 模型配置缺失（#66402）

### 5. TUI 现代化 ⭐⭐⭐
- **Qwen Code**：OpenTUI 迁移（#8662，摆脱 1037 行 ink patch）
- **Codex**：Vim 撤销/重做、共享 Composer
- **DeepSeek Harness / Kimi**：折叠、宽度自适应、Mermaid 渲染

### 6. 安全与沙箱 ⭐⭐⭐（开源阵营主导）
- **Gemini CLI**：变量展开绕过修复、2 个 CRITICAL CVE、确定性脱敏（#26525）
- **DeepSeek TUI**：TTL 误删防护（PR #5854）、review 沙箱加固
- **OpenCode**：插件权限断言 API（PR #46530）
- **Claude Code**：glob 安全规则静默失效（PR #87079）

---

## 四、差异化定位分析

| 工具 | 战略定位 | 目标用户 | 技术路线特点 |
|---|---|---|---|
| **Claude Code** | 企业级标准品 | 企业开发团队、fleet 运维 | 闭源 Issue 驱动，供给侧快速响应（托管配置、headless 权限） |
| **Codex** | 全端 Agent 操作系统 | 跨端（CLI/Desktop/Web/移动）用户 | Rust 重写后迭代极快，“服务端驱动发现”架构、Guardian 安全评分 |
| **Gemini CLI** | 安全优先的开源标杆 | 开发者/贡献者社区 | 开放贡献 + 学术性架构探索（OS 沙箱提案、AST 工具调研） |
| **Copilot CLI** | GitHub 生态内默认选项 | GitHub 企业用户 | 内部开发、社区 PR 沉寂，节奏依赖 GitHub 母体 |
| **OpenCode** | 极客/本地模型友好型 | 自建后端、Ollama/vLLM 用户 | 插件化 + 社区共建，infinite mode 内化 |
| **Qwen Code** | 工程纪律型追赶者 | 中文社区 + 自有云生态 | OpenTUI 自研、CI/测试基建投入重、DingTalk 等本土集成 |
| **DeepSeek TUI** | 平台化转型中 | 从单一工具转向 IDE/桌面生态 | Crate 重构、VS Code fork（Codewhale Studio）、AWS Lambda microVM 沙箱 |
| **Pi / oh-my-pi** | Provider 聚合层 | 多订阅/多账号重度用户 | 以 provider 适配广度为核心价值，订阅复用 > API key |
| **Kimi CLI / DeepSeek Harness** | 早期追赶 | 各自生态用户 | 功能对标竞品（opencode undo、Mermaid），处于补齐期 |

**关键路线分歧**：闭源双雄押注“企业托管 + 无人值守”；开源阵营分化为“安全/沙箱”（Gemini、OpenCode）与“Provider 聚合”（Pi 系）两条路；中国系工具（Qwen、DeepSeek、Kimi）在补齐基础体验的同时向自有生态纵深（钉钉、订阅体系、自研沙箱）延伸。

---

## 五、社区热度与成熟度

- **热度最高**：Pi（100 Issue/日，社区驱动开发的典范）、Codex（PR 合入量第一，发布节奏双轨 alpha + stable）
- **用户基数最大**：Claude Code（单 Issue 777 👍，但社区反馈窗口窄）
- **快速迭代期**：oh-my-pi（日发 3 版，但认证改造引入回归，说明迭代速度 > 验证深度）、DeepSeek TUI（v0.9.12 冲刺、架构大转向）、Qwen Code（OpenTUI 主线工程）
- **成熟/平稳期**：Codex、Claude Code（功能完备，重心在质量与治理）、Gemini CLI
- **相对沉寂/早期**：Copilot CLI（PR 为 0，社区参与度最低，或为闭源开发模式的信号）、Kimi CLI、DeepSeek Harness（早期版本，以内部迭代为主）

**成熟度信号**：头部工具的 Issue 从“功能缺失”转向“长会话稳定性、成本失控、企业合规”——典型的成熟期问题谱系；而新兴工具的 Issue 仍集中在基础功能对齐。

---

## 六、值得关注的趋势信号

1. **“无人值守”是下一阶段竞争制高点，也是当前最大的风险敞口**。Claude Code 的权限提示卡死、Qwen 的死循环烧 14M token、Codex 的 59GB 内存泄漏均发生在自动化场景。**建议**：生产环境自动化任务必须配置 token 上限、超时熔断与进程资源监控，暂勿完全信任 agent 自报的终止状态。

2. **多 Provider/订阅聚合正在重塑商业模式**。oh-my-pi 的 provider 扩张、Copilot 用户的 BYOK 呼声、OpenCode 225 👍 的本地模型需求，共同指向“用户要的是订阅灵活性而非单一厂商绑定”。**建议**：选型时优先考察工具的 provider 抽象成熟度与 OAuth 实现质量（这是当前 bug 最密集的层）。

3. **静默失败已成为社区公敌**。“宁可报错、不可装死”是各社区反馈的共同基调（Copilot 的 MCP 悄悄断连、Gemini 的误报成功、oh-my-pi 的静默结束回合）。可观测性与显式告警将成为下一轮差异化重点。

4. **成本与缓存敏感性显著上升**。prompt cache 浪费（oh-my-pi #7226）、1M 上下文不压缩、MCP 图片无预算——订阅制用户对 token 消耗的关注已从“贵不贵”转向“可不可审计”。FinOps 视角（如 Copilot #4224 计费属性缺失）将进入企业采购评估清单。

5. **安全从附加项变为一等公民**。Gemini CLI 的 CVE 快速响应、OpenCode 的权限断言 API、Codex 的失配暂停审查、Qwen 的内容泄漏治理，均显示沙箱架构与脱敏机制正在从“工具拦截”向“OS 级隔离 + 协议级校验”演进。

6. **架构换血期窗口**：Qwen 弃 ink 自研 TUI、DeepSeek 弃 Daytona 转 Lambda microVM、Codex TUI 转服务端驱动——多家工具同步进行底层重构，未来 1-2 个版本周期内可能出现能力代差，**是评估迁移或深度绑定的重要观察窗口**。

---

*本报告基于 2026-09-03 各项目 GitHub 公开数据自动汇总生成，趋势判断仅供参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-09-03）

## 一、热门 Skills 排行（按 PR 关注度）

| # | Skill | 功能与热点 | 状态 |
|---|-------|-----------|------|
| 1 | **skill-creator 评估修复**（[#1298](https://github.com/anthropics/skills/pull/1298)） | 修复 `run_eval.py` 永远报告 0% recall 的核心 bug（10+ 独立复现），涉及 Windows 流读取、触发检测、并行 worker。配套修复 PR：[#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050) | OPEN |
| 2 | **document-typography**（[#514](https://github.com/anthropics/skills/pull/514)） | 修复 AI 生成文档的排版问题：孤行、寡行段落、编号错位——触及所有 Claude 输出文档的通病 | OPEN |
| 3 | **Hivemind 多 Agent 编排**（[#1628](https://github.com/anthropics/skills/pull/1628)） | 零成本多 Agent 编排：将机械性工作委派给免费模型的 headless opencode worker，Claude Code 只做规划/审查/合并。核心论点：稀缺资源是昂贵模型的上下文而非智能 | OPEN |
| 4 | **self-audit 质量门**（[#1367](https://github.com/anthropics/skills/pull/1367)） | 交付前自审计：先机械验证文件存在性，再按损害严重度做四维推理审计，通用性强 | OPEN |
| 5 | **ODT 文档技能**（[#486](https://github.com/anthropics/skills/pull/486)） | OpenDocument 创建/模板填充/转 HTML，补齐开源办公文档格式空缺 | OPEN |
| 6 | **frontend-design 改进**（[#210](https://github.com/anthropics/skills/pull/210)） | 重写指令使每条都可在单次会话内实际执行，提升清晰度与可操作性 | OPEN |
| 7 | **scnet-hpc**（[#1615](https://github.com/anthropics/skills/pull/1615)） | SCNet HPC 集群操作：SSH 配置、Slurm 作业生成、集群发现，反映科研计算场景需求 | OPEN |
| 8 | **ServiceNow 平台技能**（[#568](https://github.com/anthropics/skills/pull/568)） | 覆盖 ITSM/SecOps/ITAM/FSM 等企业平台全栈，企业工作流方向代表 | OPEN |

⚠️ 注：所列前 20 条 PR 状态均为 OPEN，无已合并条目，反映该仓库社区贡献消化速度较慢。

## 二、社区需求趋势（来自 Issues）

1. **安全与信任边界**（[#492](https://github.com/anthropics/skills/issues/492)，43 条评论，热度第一）：社区技能冒充 `anthropic/` 官方命名空间分发，用户可能在误信任下授予高权限——供应链安全是最大焦虑。
2. **企业级共享与分发**（[#228](https://github.com/anthropics/skills/issues/228)）：组织内 Skills 共享仍靠手动传文件，急需共享库/分享链接。
3. **AI 输出质量控制**（[#1385](https://github.com/anthropics/skills/issues/1385)、[#412](https://github.com/anthropics/skills/issues/412)）：推理质量门、对抗式审查、agent 治理模式，形成“元 Skills”需求带。
4. **上下文效率**（[#1487](https://github.com/anthropics/skills/issues/1487)）：claude-api skill 单次注入 ~156k token 挤爆上下文，与 #1329 compact-memory 提案共同指向“省 token”诉求。
5. **工具链兼容性**：Windows 支持（#556、#1050）、pnpm ≥10.1（#1362）、Bedrock（#29）——Skills 在非 macOS/默认工具链下的可用性普遍存疑。
6. **互操作架构**（[#16](https://github.com/anthropics/skills/issues/16)）：Skills 是否/如何暴露为 MCP 的架构讨论持续。

## 三、高潜力待合并 Skills

- **#1298 + #1099 + #1050**（skill-creator eval 修复三连）：对应 12 条评论的 #556，影响面最大、复现最多，最可能优先落地。
- **#538 / #539 / #541**（作者 @Lubrsy706 的 pdf/docx/skill-creator 修复系列）：小而准的 bug fix，合并阻力低。
- **#1607**（claude-api 标记退役模型 ID）：有对应 issue #1603，维护性更新，典型快速合并候选。
- **#1602**（mcp-builder 评估序列化/指标修复）：对应 #1390（真实 MCP server 全部 0 分的严重 bug），修复价值高。
- **#514**（document-typography）：解决普适痛点，讨论时间长、方向成熟。

## 四、生态洞察（一句话）

> 社区最集中的诉求是：**让 Skills 本身可信、可测、可共享**——从修复 skill-creator 的评估失真，到解决命名空间冒充的信任边界问题，再到组织内分发机制，生态正从“写更多 Skill”转向“让 Skill 基础设施可靠”。

---

# Claude Code 社区动态日报 · 2026-09-03

## 📌 今日速览

Claude Code 发布 **v2.1.259**，新增企业级托管 MCP 服务器配置（`managedMcpServers`）和无人值守模式（`--permission-prompts none`），显著强化了组织级部署能力。社区方面，多账号管理需求（#18435，777 👍）持续发酵，Windows 桌面端问题（GPU 崩溃、窗口置顶）仍是投诉重灾区。Routines（定时任务）无人值守场景的权限阻塞问题今日新增多个报告，值得关注。

---

## 🚀 版本发布

### v2.1.259
- **`managedMcpServers` 托管设置**：组织可向所有用户下发 HTTP/SSE MCP 服务器（条目格式与 `.mcp.json` 一致）；指定 command 的条目会被跳过（仅支持远程服务器）
- **`--permission-prompts none`**：面向无人值守 headless 主机，任何触发权限提示的操作将被直接拒绝而非挂起

> 点评：两项更新均指向企业级/自动化场景，与社区大量反馈的 Routines、fleet agents 痛点方向一致。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#18435](https://github.com/anthropics/claude-code/issues/18435)** — Claude Desktop 多账号管理与快速切换
 👍 777 / 💬 179。呼声最高的功能需求，个人 + 工作账号切换是刚需，官方尚未表态。

2. **[#80444](https://github.com/anthropics/claude-code/issues/80444)** — Windows 桌面端内置浏览器 GPU 进程崩溃
 💬 106。崩溃后 MSIX 包进入损坏状态（appxState=2），需“修复”才能重新启动，属高严重度问题。

3. **[#85891](https://github.com/anthropics/claude-code/issues/85891)** / **[#88093](https://github.com/anthropics/claude-code/issues/88093)** / **[#89467](https://github.com/anthropics/claude-code/issues/89467)** — Windows 窗口始终置顶且无法关闭
 三个重复 issue 合计 👍 187，影响面广、持续数周未修，Windows 用户体验的头号痛点。

4. **[#49917](https://github.com/anthropics/claude-code/issues/49917)** — Windows 安装器 AddPackage 0x80073CF6 失败
 💬 35。安装/升级残留不一致状态导致后续安装失败，与 #80444 同属 Windows 打包链路问题。

5. **[#69044](https://github.com/anthropics/claude-code/issues/69044)** — 用户数月系统性记录的日常错误汇总
 💬 34。结构化的长期质量反馈文档，涉及模型行为稳定性，反映重度用户的核心不满。

6. **[#52121](https://github.com/anthropics/claude-code/issues/52121)** — `ENABLE_TOOL_SEARCH=true` 下 Grep/Glob 工具完全消失
 👍 22，有复现。实验性工具搜索功能导致内置核心工具丢失，直接影响可用性。

7. **[#90542](https://github.com/anthropics/claude-code/issues/90542)** — 700 行 CLAUDE.md 规则契约在 4.5 小时会话中被全面违反
 揭示长会话中指令遵循退化问题，与 auto-memory 压缩机制疑有关联。

8. **[#91724](https://github.com/anthropics/claude-code/issues/91724)** — Routines 遇未响应权限提示后永久卡死
 今日新增。“Run now” 全部禁用、无法新建任务，与本次新版的 `--permission-prompts none` 高度相关——侧面印证该问题的普遍性。

9. **[#66402](https://github.com/anthropics/claude-code/issues/66402)** — `/model`、`/effort` 写入全局 settings.json，破坏 agents/fleet 独立配置
 👍 13。多 agent 编排场景缺少按 agent 配置模型的能力。

10. **[#64744](https://github.com/anthropics/claude-code/issues/64744)** — Ctrl+C 后 ScheduleWakeup 持续存在，守护进程自动复活导致无限 token 消耗
 涉及成本安全，无人值守场景下的失控风险值得所有自动化用户警惕。

---

## 🔀 重要 PR 进展

> 今日仅 2 条 PR 更新，且仓库以 Issue 跟踪为主，PR 数量有限。

1. **[#87079](https://github.com/anthropics/claude-code/pull/87079)**（OPEN）— 修复 security-guidance 中 `**` glob 模式无法匹配零深度路径的问题
 `fnmatch` 的 `*` 已可跨越 `/`，导致 `**/*.ts` 静默漏掉顶层文件——**安全规则静默失效**，修复价值高，建议关注合入进度。

2. **[#41938](https://github.com/anthropics/claude-code/pull/41938)**（CLOSED）— 添加 Linux/macOS DevContainer 启动脚本
 补齐此前仅有 PowerShell 脚本的缺口，已被关闭。

---

## 📈 功能需求趋势

| 方向 | 信号强度 | 代表 Issue |
|---|---|---|
| **多账号/配置管理** | ⭐⭐⭐⭐⭐ | #18435（777 👍）、#91669 |
| **无人值守/定时任务健壮性** | ⭐⭐⭐⭐ | #91724、#91642、#64744、#90542 |
| **Agent 编排细粒度配置** | ⭐⭐⭐ | #66402、#80375、#84789 |
| **Memory/上下文可控性** | ⭐⭐⭐ | #91188（压缩阈值可配置）、#81833（worktree 加载不一致）、#83899（CLAUDE.md 注释剥离） |
| **Windows 桌面端质量** | ⭐⭐⭐⭐ | #80444、#85891、#49917、#87812、#77754 |
| **企业托管能力** | ⭐⭐⭐（供给侧） | v2.1.259 的 managedMcpServers 正面回应 |

---

## ⚠️ 开发者关注点

1. **无人值守场景的权限处理是当前最大裂缝**：Routines 卡死（#91724）、进程泄漏（#91642）、token 失控消耗（#64744）均源于“权限提示无人应答”。新版的 `--permission-prompts none` 是对症方案，但存量用户仍需自查定时任务的权限配置。
2. **Windows 端体验系统性落后**：安装失败、GPU 崩溃、窗口置顶、daemon 管道 45s 挂起（#77754）、每日强制重登（#87812）——Windows 用户升级前建议关注 release notes。
3. **Memory 机制不可靠被多次实锤**：worktree 会话加载不一致（#81833）、CLAUDE.md 长会话遵循退化（#90542），重要规则建议在 prompt 内冗余强调。
4. **实验性功能慎用于生产**：`ENABLE_TOOL_SEARCH=true` 会导致核心工具丢失（#52121）。

---
*数据来源：anthropics/claude-code · 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-09-03

## 📌 今日速览

Codex CLI 正式发布 **v0.153.0**，Vim 模式迎来完整的撤销/重做支持和插件 CLI 管理能力，同时 **v0.154.0-alpha.1** 开启下个版本迭代。今日 PR 活动极为活跃，围绕 **Agent Command Center、Windows app-server 守护进程、MCP OAuth 协调刷新**等方向合入大量改进。社区方面，Codex Desktop 的高 CPU 占用、Windows 沙箱凭证恢复等问题持续发酵。

---

## 🚀 版本发布

### rust-v0.153.0（正式版）
- **Vim 模式增强**：支持 `u` 撤销、`Ctrl+R` 重做，完整保留草稿（含粘贴内容与附件）([#41941](https://github.com/openai/codex/pull/41941), [#42140](https://github.com/openai/codex/pull/42140))
- **插件 CLI**：新增 list / install / remove 等插件管理命令
- 链接：[rust-v0.153.0](https://github.com/openai/codex/releases/tag/rust-v0.153.0)

### rust-v0.154.0-alpha.1（预览版）
- 下一版本迭代正式启动，目前无独立 changelog
- 链接：[rust-v0.154.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.1)

此外还有 0.153.0-alpha.6 / alpha.5.1 两个 alpha 版本收尾发布。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#24510](https://github.com/openai/codex/issues/24510) — Desktop 高 CPU 占用（30 评论）**
   app-server 在处理大量活跃线程元数据时 CPU/GPU 持续高负载。运行 3 个月仍未修复，是当前评论最多的 Issue，反映 Desktop 性能治理长期欠账。

2. **[#39280](https://github.com/openai/codex/issues/39280) — macOS Chrome 标签页操作全部被策略校验拦截（17 评论）**
   Chrome 扩展能枚举、认领标签页，但所有真实页面操作在到达 Chrome 前即被拒。浏览器自动化链路的策略校验存在系统性问题，与 #40733 相互印证。

3. **[#20851](https://github.com/openai/codex/issues/20851) — 请求 CLI 一等公民级 Computer Use 支持（29 👍）**
   Computer Use 目前仅限桌面插件（捆绑 MCP helper），社区强烈希望在 CLI 中直接使用，是点赞最高的功能请求之一。

4. **[#38128](https://github.com/openai/codex/issues/38128) — Remote Control 阻止 GrapheneOS 正版设备注册（8 评论 / 8 👍）**
   安全检查在官方未 root 的 GrapheneOS 上误判，导致 Android 端 Remote Control 配对失败，暴露了设备完整性检测的兼容性问题。

5. **[#19588](https://github.com/openai/codex/issues/19588) — 幽灵快照对整个 Home 目录执行 `git add -A`（8 评论）**
   信任目录为 Home 时，内部快照机制反复索引全盘并生成巨型 tmp_pack 文件填满磁盘，属于高危资源滥用问题。

6. **[#31894](https://github.com/openai/codex/issues/31894) — gpt-5.6 Responses Lite 模型下 `codex exec` 工具不可用（8 评论）**
   Responses Lite 请求结构将工具 schema 移入 `input[0]`，导致 shell/code-mode 工具在 gpt-5.6-sol 上失效而 gpt-5.5 正常，影响自动化工作流。

7. **[#32101](https://github.com/openai/codex/issues/32101) — GPT-5.6 Code Mode 丢失 `tool_search`，削弱延迟 MCP 发现（5 👍）**
   与 #31894 同属 gpt-5.6 适配问题，Code Mode 转换器丢弃 `ToolSearch` 规范，新模型兼容性是近期高频痛点。

8. **[#41078](https://github.com/openai/codex/issues/41078) — Python SDK 丢失早期 turn 通知导致无限等待**
   `turn/completed` 早于 `turn/start` 响应到达时被丢弃，SDK 层时序缺陷，影响构建自定义 app-server 客户端的开发者。

9. **[#42484](https://github.com/openai/codex/issues/42484) — Windows 上 `cua_node` EPERM 死循环，冻结 UI 并吃掉 ~59 GB 内存**
   当日新增的严重回归报告，`rename_staging` 失败后无限重试，直接导致桌面不可用。

10. **[#40124](https://github.com/openai/codex/issues/40124) — 请求 CLI / Web / 移动端无缝会话接力**
    终端中开始的任务可在手机或网页继续，体现社区对跨端会话连续性的强烈需求。

---

## 🔧 重要 PR 进展（Top 10）

1. **[#42455](https://github.com/openai/codex/pull/42455) — Agent Command Center 展示实时任务详情**
   为选中任务提供有界详情预览：待审批/用户输入请求、实时推理标题、最新 agent 消息。

2. **[#42405](https://github.com/openai/codex/pull/42405) — Windows 支持 app-server 守护进程**
   突破 Unix 限制，Windows 用户可在多个 Codex 会话间共享后台服务器，是 Windows 体验的重要补齐。

3. **[#42413](https://github.com/openai/codex/pull/42413) — 启用 MCP OAuth 协调刷新**
   streamable HTTP MCP 连接下由 RMMP 通过固定凭证存储刷新并持久化 token，解决多会话 token 竞争。

4. **[#42406](https://github.com/openai/codex/pull/42406) — 显式提及插件时 MCP 启动不再超时跳过**
   用户明确 `@` 提及插件或 MCP 服务器时，turn 会持续等待对应工具就绪。

5. **[#42458](https://github.com/openai/codex/pull/42458) — app-server API 暴露线程 originator**
   在线程响应与 `thread/started` 通知中持久化并透出创建来源，贯穿 list / resume / rollout / SQLite 全链路。

6. **[#42410](https://github.com/openai/codex/pull/42410) — 支持“失配暂停”会话的审查与继续**
   Misalignment 策略暂停会话后，用户可查看 findings 并显式决定是否继续，安全性与可控性双重提升。

7. **[#42428](https://github.com/openai/codex/pull/42428) — Command Center 采用共享 Composer**
   替换单行输入为共享聊天编辑器，具备多行编辑、粘贴处理、Vim 模式与自定义按键。

8. **[#42417](https://github.com/openai/codex/pull/42417) — 暴露托管应用网络需求**
   新增 `application.network` 托管策略，支持精确域名 allow/deny 规则与域名归一化。

9. **[#42419](https://github.com/openai/codex/pull/42419) — Command Center 支持会话恢复**
   新增 `agents.resume` 动作（默认 `Ctrl+O`），可从命令中心直接唤起会话恢复选择器。

10. **[#42451](https://github.com/openai/codex/pull/42451) — 按提交 ID 确认待处理 TUI steer**
    修复相同用户消息的完成回执可能确认错误 steer、导致旧输入被重复提交的问题。

其他值得注意的合入：[#42408](https://github.com/openai/codex/pull/42408)（加固嵌入编辑器输入处理，`!` `/` `?` 前缀保持字面量）、[#42422](https://github.com/openai/codex/pull/42422)（Guardian computer-use 评分遵循模型要求）、[#42425](https://github.com/openai/codex/pull/42425)（TUI 实验性功能改为从服务端发现）。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 趋势解读 |
|---|---|---|
| **CLI 与桌面能力对齐** | #20851, #40124 | Computer Use、会话接力等桌面特性向 CLI 下沉的呼声强烈 |
| **新模型（gpt-5.6）兼容性** | #31894, #32101 | Responses Lite / Code Mode 路径下工具暴露不完整，是当前最集中的技术断层 |
| **浏览器自动化可靠性** | #39280, #40733, #33319 | 策略校验误拦截、内存泄漏（10–18 GB）等问题多发 |
| **资源与性能治理** | #24510, #19588, #42484 | CPU/磁盘/内存失控问题贯穿 Desktop 各版本 |
| **Windows 平台体验** | #35841, #27962, #35935 | 沙箱凭证、缩放、上下文压缩丢状态等 Windows 专属问题占比高 |
| **会话管理** | #37853, #37028, #42487 | 迁移后会话丢失、无法删除、对话消失等数据完整性问题 |

---

## ⚠️ 开发者关注点

1. **gpt-5.6 适配是当前最大技术债**：`codex exec` 工具不可用、`tool_search` 丢失等表明新模型的请求结构变化未完全覆盖 CLI 路径，使用 gpt-5.6-sol 做自动化的团队建议暂时锁定 gpt-5.5。
2. **Python SDK 时序敏感**：自建 app-server 客户端需注意早于 `turn/start` 到达的 `turn/*` 通知会被丢弃（#41078）。
3. **资源失控风险需警惕**：信任 Home 目录、长时间 browser-use 任务、Windows `cua_node` 均可能引发磁盘/内存耗尽，建议限制信任范围并监控进程资源。
4. **企业环境兼容性**：AppLocker（#41958）与 GrapheneOS（#38128）的安全基线与 Codex 运行时存在冲突，企业部署前需验证。
5. **积极信号**：今日 PR 密集合入 Command Center、Windows daemon、MCP OAuth 等基础设施改进，TUI 各项功能正快速向“服务端驱动发现”架构迁移，可扩展性明显提升。

---
*数据来源：github.com/openai/codex | 统计窗口：2026-09-02 ~ 2026-09-03*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-09-03

## 📌 今日速览

今日无新版本发布，社区讨论持续聚焦于 **子代理（Subagent）稳定性**——P1 级的 Agent 挂起、MAX_TURNS 误报成功等高优问题仍在处理中。安全方面动静较大：社区提交了多个安全加固 PR，包括 `$VAR` 变量展开绕过修复（GHSA-wpqr-6v78-jr5g）、RFC 9207 MCP OAuth 校验，以及两个 CRITICAL 级依赖 CVE 升级。此外，新报的 `tildeifyPath` 兄弟目录误判 Bug 当天即有修复 PR 响应，社区响应速度值得关注。

---

## 🔥 社区热点 Issues

**1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) · Subagent 触发 MAX_TURNS 后误报 GOAL 成功（P1）**
子代理达到最大轮次限制被中断，却上报 `status: "success"`，掩盖了真实中断原因。13 条评论为今日最热，状态可靠性问题直接影响任务编排的可信度。

**2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) · Generalist agent 无限挂起（P1，👍 8）**
主代理委托给通用子代理后永久挂起，连创建文件夹这类简单操作也会卡死，用户等待一小时无果。8 个 👍 说明影响面广。

**3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) · 零依赖 OS 沙箱 + 执行后意图路由（P2）**
社区提出利用 Gemini 3 原生 bash 能力的架构提案：通过操作系统级沙箱替代工具拦截，兼顾模型能力与安全，讨论热烈（9 评论）。

**4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) · AST 感知文件读取/搜索/映射评估（EPIC）**
官方发起调研：AST 工具能否减少错位读取、降低 token 噪音，并改进 `codebase_investigator`。是代码理解能力演进的关键方向。

**5. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) · Auto Memory 需确定性脱敏（P2，安全）**
Auto Memory 在脱敏前就将本地 transcript 发送给模型，密钥可能已进入模型上下文。隐私/安全问题，社区关注度持续上升。

**6. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) · Shell 命令完成后卡在 "Awaiting user input"（P1）**
简单命令执行完毕后 CLI 仍显示等待输入并挂起，是影响日常使用的核心体验 Bug。

**7. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) · Gemini 不会主动使用 skills 和子代理（P2）**
即使任务高度相关，模型也几乎从不自主调用自定义 skills/子代理，需显式指令才触发。反映了调度策略的核心短板。

**8. [#29175](https://github.com/google-gemini/gemini-cli/issues/29175) · `tildeifyPath` 兄弟目录误判（今日新报）**
`/Users/al` 家目录会把 `/Users/albert/proj` 错误缩写为 `~bert/proj`——经典的 `startsWith` 边界 Bug，当天已有对应修复 PR（见下）。

**9. [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) · 超过 128 个工具时遭遇 400 错误（P2）**
工具数量过多直接触发 API 错误，暴露了工具范围管理（tool scoping）机制的缺失，对重度扩展用户影响大。

**10. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) · Browser subagent 在 Wayland 下失败（P1）**
Linux Wayland 环境下浏览器子代理直接失败，同样涉及 Termination Reason 误报问题，与 #22323 存在关联。

---

## 🛠️ 重要 PR 进展

**1. [#28902](https://github.com/google-gemini/gemini-cli/pull/28902)（已关闭）· 修复 `$VAR`/`${VAR}` 变量展开绕过（P1 安全）**
补全 `detectBashSubstitution()` 的不完整检查，封堵 GHSA-wpqr-6v78-jr5g 安全门的绕过路径，并加固自动化工作流。

**2. [#29117](https://github.com/google-gemini/gemini-cli/pull/29117)（已关闭）· MCP OAuth 流程实施 RFC 9207 校验**
验证授权服务器 issuer 一致性，防止 token 被意外路由到错误端点，MCP 安全性显著增强。

**3. [#29094](https://github.com/google-gemini/gemini-cli/pull/29094)（开放）· 升级 simple-git 修复 CVE-2026-28292（CRITICAL）**
依赖漏洞升级，等待合并。

**4. [#29095](https://github.com/google-gemini/gemini-cli/pull/29095)（开放）· 升级 shell-quote 修复 CVE-2026-9277（CRITICAL）**
另一个 CRITICAL 依赖漏洞修复，与上一条同日推进。

**5. [#29180](https://github.com/google-gemini/gemini-cli/pull/29180)（开放，今日新提）· 修复 tildeifyPath 兄弟目录误判**
使用 `path.relative` 强制目录段包含检查，与 Issue #29175 当天闭环，社区效率值得点赞。

**6. [#28914](https://github.com/google-gemini/gemini-cli/pull/28914)（已关闭）· 重试 nudge 注入 contents 以保留前缀缓存**
将恢复提示从 systemInstruction 移至对话末尾，既保证模型紧邻生成前看到提示，又保住了静态前缀缓存——性能与效果的巧妙平衡。

**7. [#29148](https://github.com/google-gemini/gemini-cli/pull/29148)（开放，maintainer）· 防止后台 Git 操作劫持 stdin**
扩展更新检查中的 `git clone/listRemote` 在需要凭证时会阻塞终端，此 PR 禁用其交互提示。

**8. [#29013](https://github.com/google-gemini/gemini-cli/pull/29013)（开放）· 补全 6 个未文档化 CLI 标志**
`--policy`、`--admin-policy`、`--session-id` 等已注册但未写入文档的参数，文档补全。

**9. [#28916](https://github.com/google-gemini/gemini-cli/pull/28916) / [#28917](https://github.com/google-gemini/gemini-cli/pull/28917)（已关闭）· Whisper 语音模式双修复**
转录 stdout 分块行缓冲 + 模型下载原子化与失败清理，本地语音模式稳定性提升。

**10. [#29098](https://github.com/google-gemini/gemini-cli/pull/29098)（开放）· 保持 useInputHistoryStore 状态更新器纯净**
React StrictMode 下副作用会导致双重执行，此 PR 将副作用移出 updater 函数，修复企业场景下的状态异常。

---

## 📈 功能需求趋势

1. **子代理体系成熟化**：今日 Issues 中 area/agent 占比超 60%——自主调度（#21968）、轨迹可视化（#22598）、错误上报（#21763）、浏览器代理韧性（#22232）等，子代理是当前最活跃的演进主线。
2. **安全与沙箱架构**：OS 级沙箱提案（#19873）、确定性脱敏（#26525）、破坏性命令防护（#22672），叠加密集的安全 PR，安全正成为一等公民。
3. **代码理解智能化**：AST 感知工具链（#22745/#22746）与 token 节约的“Tactful Extraction”（#19561），指向降低上下文成本的核心诉求。
4. **Memory 系统质量**：Auto Memory 的无效 patch 静默丢弃（#26523）、低信号会话无限重试（#26522）等系列问题集中暴露。

## ⚠️ 开发者关注点

- **挂起/卡死是最大痛点**：Agent 挂起（#21409）、shell 命令假等待（#25166）、交互式提示卡死（#22465）多个高优 Bug 同属一类，直接损害日常可用性。
- **状态上报不可信**：MAX_TURNS 误报 GOAL 成功（#22323、#21983），自动化工作流开发者无法依赖终止状态做判断。
- **配置不生效**：settings.json 覆盖被 Browser Agent 忽略（#22267）、symlink 代理不被识别（#20079），边缘配置场景打磨不足。
- **工作区卫生**：模型到处乱建临时脚本（#23571），清理成本高，社区期待约束机制。

---
*数据截至 2026-09-03 · 来源：google-gemini/gemini-cli*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-09-03

## 1. 今日速览

今日 Copilot CLI 发布 **v1.0.83-3** 修复版本。社区焦点集中在**会话稳定性**上：长会话恢复时的 OOM 崩溃（#4664、#4699）、`/compact` 压缩失败（#4698、#2861）以及 MCP 服务器连接不可靠（#4695、#4598）构成三大高发问题簇。此外，BYOK/多模型灵活切换仍是呼声最高的功能方向（#3709 已获 29 👍）。

---

## 2. 版本发布

- **v1.0.83-3**（2026-09-03）：官方说明仅为 "Fixes and changes"，未公布详细变更日志。建议关注后续 release notes 确认是否修复近期高发的 OOM 与 MCP 问题。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 关注理由 |
|---|-------|---------|
| 1 | [#3709](https://github.com/github/copilot-cli/issues/3709) — `/model` 支持单会话内多模型切换（含 BYOK/本地 provider） | 👍 29、7 评论，社区呼声第一。BYOK 通过 `COPILOT_MODEL` 钉死单一模型，`/model` 选择器不显示本地 provider 的模型，体验割裂。 |
| 2 | [#4664](https://github.com/github/copilot-cli/issues/4664) — 恢复长会话时 V8 堆内存 OOM 崩溃 | 高严重性稳定性问题，与 #4699、#4694 构成“长会话内存泄漏”问题簇。 |
| 3 | [#4699](https://github.com/github/copilot-cli/issues/4699) — `--resume` 长会话 14 小时内 3 次 OOM，崩溃转储还写入用户 cwd | 暴露内存管理 + 诊断文件落盘位置两个问题。 |
| 4 | [#4695](https://github.com/github/copilot-cli/issues/4695) — MCP HTTP 服务器 OAuth token 缓存键不稳定，导致反复重新授权 | 企业 MCP 集成的实际阻塞点，PKCE 公共客户端场景。 |
| 5 | [#4598](https://github.com/github/copilot-cli/issues/4598) — 18 个 MCP 服务器仅连接 3 个且不重试；重载中途销毁活跃句柄 | MCP 子系统可靠性综合问题，影响重度 MCP 用户。 |
| 6 | [#4680](https://github.com/github/copilot-cli/issues/4680) — 向自定义 OpenAI 兼容端点发送错误 model ID（发送 `gpt-5.4-nano` 而非配置的 `mimo-v2.5`） | 直接杀死 BYOK 会话，BYOK 用户关键阻断。 |
| 7 | [#4438](https://github.com/github/copilot-cli/issues/4438) — `disable-model-invocation: true` 使 Skill 完全不可达而非仅限手动调用 | 👍 6。Skill 语义与规范不符，影响插件/Skill 生态。 |
| 8 | [#4674](https://github.com/github/copilot-cli/issues/4674) — 恢复会话不还原自定义 agent（#917 回归） | 回归类问题，`mcp-servers` 与 `tools` 白名单静默失效，安全/权限隐患。 |
| 9 | [#4696](https://github.com/github/copilot-cli/issues/4696) — `--yolo`/allow-all 模式在长时间空闲后被静默重置 | 权限行为不一致，可能造成意外的确认弹窗中断自动化流程。 |
| 10 | [#4224](https://github.com/github/copilot-cli/issues/4224) — 子 agent 调用的 OTel spans 缺失计费属性，外部成本核算偏低 | 企业 FinOps 视角的关键缺口，与 #4207 关联。 |

**其他值得一提**：#1099 报告 CI workflow 存在 2 个严重命令注入漏洞（安全审计，1 评论，或为误报但值得跟进）；#4671（1.0.81 TLS 拦截代理下 OAuth 失败）已关闭，可能是 v1.0.83 修复项；#4698 与 #2861 均为 `/compact` "empty response" 失败，短会话也会触发，波及面广。

---

## 4. 重要 PR 进展

过去 24 小时**无活跃 PR 更新**（0 条）。本期略过。结合 v1.0.83-3 的发布节奏，推测修复通过内部流程合入主干，社区 PR 活动今日静默。

---

## 5. 功能需求趋势

1. **多模型 / BYOK 灵活性**（最强趋势）：#3709（会话内多模型切换）、#4703（per-agent provider 端点）、#4680（BYOK model ID 传递）。社区明确要求打破 `COPILOT_PROVIDER_BASE_URL` 进程级限制。
2. **会话稳定性与内存管理**：#4664、#4699、#4694、#4698/#2861（压缩失败）——长会话场景已成为 CLI 的阿喀琉斯之踵。
3. **MCP 可靠性**：#4695（OAuth 缓存）、#4598（连接/重载）、#4697（`/clear` 不清理 stdio 子进程，资源泄漏）。
4. **ACP / 非交互模式对齐**：#4275（`contextTier` 会话配置）、#4700（`skillDirectories` 在 ACP 模式失效）。
5. **会话管理体验**：#4704（`/resume` 按目录过滤）。
6. **Windows / WSL 平台质量**：#4702（路径分隔符导致重复加载指令）、#4701（权限预览截断路径）、#2271（shell 类型配置）、#4694（WSL2 31 GB RSS）。

---

## 6. 开发者关注点（痛点总结）

- **长会话不可持续**：4 GiB 堆上限 + OOM + 压缩失败，重度用户（长 agent 会话、High Effort 模式）首当其冲，是最急迫的修复需求。
- **静默失败模式**：MCP 服务器悄悄不连接、自定义 agent 恢复后静默丢失、allow-all 静默重置——缺少可观测性与显式告警。
- **企业环境兼容性**：TLS 拦截代理（#4671）、server-managed 插件持久化（#4283）、计费可观测性（#4224）。
- **插件/Skill 生态规范执行**：Agent Plugins 1.0 自定义 agent 不被发现（#4655）、Skill frontmatter 语义错误（#4438）。
- **卫生细节**：崩溃转储写入用户 cwd（#4699）、MCP 子进程泄漏（#4697）影响日常使用整洁度。

> **建议关注**：v1.0.83-3 发布说明更新，验证是否修复 #4671（OAuth 代理）与 OOM 簇问题。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-09-03 | 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)**

---

## 1. 今日速览

今日无新版本发布。过去 24 小时内社区动态以存量 Issue/PR 的集中关闭为主：5 条 Issue 与 1 条 PR 均被关闭，涉及 SSH 远程环境 bug、undo 功能、WebUI Mermaid 渲染、`--agent-file` 参数支持等方向。值得注意的是 #1307（为 `kimi web` 增加 `--agent-file` 支持）已由贡献者自行实现并关闭，社区反响较积极（3 👍）。

---

## 2. 版本发布

无。过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues

今日共有 5 条 Issue 更新（均已关闭），全部值得关注：

| # | 标题 | 状态 | 关注度 | 亮点 |
|---|------|------|--------|------|
| [#1293](https://github.com/MoonshotAI/kimi-cli/issues/1293) | [bug] 远程 SSH 服务器上 Kimi CLI 无法通信 | CLOSED | 1 👍 / 1 评论 | **典型部署痛点**：在无图形界面、无法修改系统 DNS 的 SSH 环境下 CLI 完全不可用，反映 CLI 在受限服务器环境下的网络兼容性问题（版本 1.16.0） |
| [#1311](https://github.com/MoonshotAI/kimi-cli/issues/1311) | [enhancement] 希望增加 undo 功能 | CLOSED | 1 👍 | 社区对标 **opencode 的 undo 能力**，CLI 编码场景下回滚 AI 修改是刚需，值得关注后续是否落地 |
| [#1310](https://github.com/MoonshotAI/kimi-cli/issues/1310) | [enhancement] WebUI 内联渲染 Mermaid 图 | CLOSED | 1 👍 | 仓库已有 Mermaid 解析能力，需求是将其复用到 WebUI 内联渲染，属于低成本高体验收益的改进 |
| [#1309](https://github.com/MoonshotAI/kimi-cli/issues/1309) | [enhancement] Openclaw 类可选功能（心跳、cron、记忆） | CLOSED | 0 👍 | 高阶 Agent 能力诉求：heartbeat、定时任务、长期记忆，并建议集成 [nanobot](https://github.com/HKUDS/nanobot)；作者指出 kimi.com 已有 Kimi Claw，但 CLI/WebUI 缺失对应能力 |
| [#1307](https://github.com/MoonshotAI/kimi-cli/issues/1307) | [enhancement] `kimi web` 支持 `--agent-file` | CLOSED | 3 👍（今日最高） | **CLI 一致性问题**：`kimi` 子命令支持 `--agent-file` 而 `kimi web` 始终加载默认 agent；贡献者 @Krivodel 已自行实现，有望以 PR 形式合入 |

---

## 4. 重要 PR 进展

今日仅 1 条 PR 更新：

- **[#2332](https://github.com/MoonshotAI/kimi-cli/pull/2332) [CLOSED] fix(kimi): clamp completion budget dynamically**
  作者 @wbxl2000。核心改动：移除 Kimi provider 路径中硬编码的 `max_tokens = 32000`，改为按请求动态计算 `max_completion_tokens` 以适配当前上下文窗口。**技术价值**：解决长上下文场景下输出预算与窗口冲突的问题，属于 provider 层的健壮性修复。该 PR 已关闭（未合入或被替代方案取代，可关注后续动向）。

---

## 5. 功能需求趋势

从今日 Issue 中可提炼出以下方向：

1. **Agent 自定义与一致性**：`--agent-file` 在子命令间的统一支持（#1307），说明社区对自定义 agent 配置的依赖在加深。
2. **会话可回滚性（undo/安全）**：对标竞品 opencode（#1311），AI 修改的撤销能力是 CLI 编码工具的核心诉求。
3. **WebUI 体验补齐**：Mermaid 内联渲染（#1310）体现用户希望 CLI 与 WebUI 功能对齐。
4. **Agent 常驻/自主能力**：heartbeat、cron、memories（#1309），反映 CLI 向“长时运行 Agent”演进的需求。
5. **受限环境兼容性**：SSH 无头服务器、DNS 受限环境下的可用性（#1293）。

---

## 6. 开发者关注点

- **远程/无头环境部署是高频痛点**：#1293 暴露的 SSH 场景网络问题值得运维型用户在部署前评估。
- **输出 token 预算管理**：#2332 表明 provider 层的 `max_tokens` 与上下文窗口适配仍是实际使用中的坑，长上下文用户需留意。
- **功能一致性期望**：用户明确期望 `kimi` 与 `kimi web`、CLI 与 WebUI 之间能力对齐，不一致性正成为负面反馈来源。
- **竞品对标压力**：opencode、Openclaw 等被直接点名，社区以竞品功能作为诉求基准。

---

*本日报基于过去 24 小时 GitHub 数据自动汇总，Issue/PR 数量有限（5 Issue + 1 PR），趋势分析仅供参考。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-03

## 📌 今日速览

OpenCode 发布 **v1.18.27**，核心改进集中在请求超时处理与 Anthropic thinking 配置灵活性。社区方面，桌面端稳定性问题集中爆发：数据库膨胀至 72GB、启动挂起 25 秒、结构化宏注入导致冻结等问题引发关注。同时围绕"infinite agent mode""轻量轮次使用小模型”等 agent 自主化功能，Issue 与 PR 同日配套涌现，社区贡献活跃。

---

## 🚀 版本发布

### v1.18.27
- Provider header 超时默认提升至 **5 分钟**，降低慢启动模型失败率
- 流式 chunk 超时默认 5 分钟，支持 `false` 显式禁用
- Anthropic `thinking.blockBinding` 支持通过配置 opt-out

---

## 🔥 社区热点 Issues

1. **#47022 桌面版数据库两周膨胀至 ~72GB** — [链接](https://github.com/anomalyco/opencode/issues/47022)
   macOS 磁盘被占满后才发现，属严重资源泄漏类问题，建议所有 Desktop 用户关注。

2. **#47006 v1.18.27 倒计时无限循环** — [链接](https://github.com/anomalyco/opencode/issues/47006)
   最新版本出现的回归类 bug，倒计时循环不回答问题，涉及当日发布版本。

3. **#47013 弱网环境下 OpenCode 无法启动** — [链接](https://github.com/anomalyco/opencode/issues/47013)
   postscript 更新阶段的错误导致启动失败，网络容错性欠缺的典型反馈。

4. **#47003 插件 system.transform 导致多条 system 消息** — [链接](https://github.com/anomalyco/opencode/issues/47003)
   对自建 vLLM/LiteLLM 后端的兼容性破坏，要求单一 system 消息的网关全量请求失败，已有对应修复 PR。

5. **#47018 V1/V2 并行运行状态冲突，TUI 插件静默失效** — [链接](https://github.com/anomalyco/opencode/issues/47018)
   官方文档推荐的并行方案实际不可靠，插件无任何报错直接不加载，排查成本高。

6. **#47002 Desktop 启动挂起 ~25s（favicon 全量 glob）** — [链接](https://github.com/anomalyco/opencode/issues/47002) — 已关闭
   项目图标扫描未遵守 ignore 文件，性能优化类典型问题，快速修复。

7. **#47023 TUI 新标签页切换后丢失未发送输入** — [链接](https://github.com/anomalyco/opencode/issues/47023)
   用户体验细节问题：切走再切回，已输入文本永久丢失。

8. **#47019 / #46988 原生 infinite agent mode & 轻量轮次小模型** — [链接](https://github.com/anomalyco/opencode/issues/47019)
   长任务需手动 "continue" 是高频痛点，两个需求当日均出现配套 PR，社区推动效率高。

9. **#45995 provider.only 白名单导致 404 "No allowed providers"** — [链接](https://github.com/anomalyco/opencode/issues/45995)
   白名单配置与 Models.dev 路由逻辑冲突，影响多 provider 用户的模型可用性。

10. **#47010 Desktop 在结构化 DSML 宏注入时永久冻结** — [链接](https://github.com/anomalyco/opencode/issues/47010)
    OMO 插件编排场景下 GUI 完全挂死，反映 Desktop 对复杂工具调用流的稳定性不足。

---

## 🔧 重要 PR 进展

1. **#47021 原生 infinite agent mode（带限制）** — [链接](https://github.com/anomalyco/opencode/pull/47021)
   Composer 中新增 Complete/Infinite 模式切换，将外部 supervisor 方案内化到 runner。

2. **#47007 修复多条 system 消息问题** — [链接](https://github.com/anomalyco/opencode/pull/47007)
   将 system prompt 数组折叠为单条 chat 消息，修复自建后端兼容性，对应 Issue #47003。

3. **#47004 后续消息默认排队，Ctrl+Enter 插队** — [链接](https://github.com/anomalyco/opencode/pull/47004)
   修正 busy-session follow-up 交互逻辑，Enter 按设置排队、Ctrl+Enter 用于 steer。

4. **#46531 公共 API 浏览器插件（44 个 Code Mode 方法）** — [链接](https://github.com/anomalyco/opencode/pull/46531)
   tabs/交互/快照/诊断/profiling/audits 全套浏览器能力，独立 `@opencode-ai/plugin-browser` 包。

5. **#44838 Desktop 浏览器多标签页 + Chromium 诊断** — [链接](https://github.com/anomalyco/opencode/pull/44838)
   Review 面板支持多 tab 操作、跨域 frame 检查与截图，用户与 agent 共享 tab 所有权。

6. **#47012 自定义指令 + 环境感知 shell 上下文** — [链接](https://github.com/anomalyco/opencode/pull/47012)
   Codex 风格 `customInstructions`，全局+项目配置合并，注入到 env 块之后、AGENTS.md 之前。

7. **#46925 监听新增配置文件与目录** — [链接](https://github.com/anomalyco/opencode/pull/46925)
   修复首次创建 `opencode.json` 或 `.opencode/` 需手动 `/restart` 的问题。

8. **#46530 插件权限断言 API** — [链接](https://github.com/anomalyco/opencode/pull/46530)
   新增 `ctx.permission.assert()`，浏览器操作/文件读取前强制权限检查，安全架构强化。

9. **#44524 ACP v2 draft 支持（WIP）** — [链接](https://github.com/anomalyco/opencode/pull/44524)
   按 Agent Client Protocol v2 迁移指南实现，关系 OpenCode 作为 agent 后端的生态互操作性。

10. **#47001 Desktop Console 设备认证标识修复** — [链接](https://github.com/anomalyco/opencode/pull/47001)
    设置 `client_id=opencode-desktop`，可能与 #35744（Windows App 无法连接 Claude 订阅）相关。

---

## 📈 功能需求趋势

- **Agent 自主化**：infinite mode、轻量轮次小模型、session goals（#27167，141 👍）——社区明确希望减少人工干预
- **本地/自建模型生态**：OpenAI 兼容端点模型自动发现（#6231，225 👍，最高 👍）持续高热，Ollama/LM Studio 用户是主力
- **Desktop/Web 稳定性**：数据库膨胀、启动挂起、冻结类问题密集出现，Desktop 质量成为当前短板
- **上下文与成本管理**：compaction 阈值不触发（#45168）、硬编码 continue 指令（#32634）引发资源浪费担忧
- **V2 迁移体验**：V1/V2 并行冲突、目录选择器污染项目表等问题说明 2.0 过渡期痛点明显
- **TUI/Web 渲染体验**：Markdown 原样输出（#38828）、Mermaid 图表渲染（#47014）

## ⚠️ 开发者关注点

1. **资源泄漏是最大警报**：72GB 数据库、git 全量 add（#3176）类问题反复出现，建议定期监控 `~/.local/share/opencode` 体积
2. **自建后端兼容性脆弱**：system 消息结构、JSON Schema 递归限制（#45823）等对 LiteLLM/vLLM 用户影响直接
3. **弱网/离线场景缺容错**：启动强依赖网络更新流程（#47013）
4. **中文用户社区活跃**：多起中文反馈（用量计算 #46953、输出中断 #46979）显示用户基数扩张，但部分提交被 compliance 关闭，反馈质量参差
5. **升级 v1.18.27 需谨慎**：countdown 死循环（#47006）为该版本新发回归

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-03

## 一、今日速览

今日社区最重磅的动态是 **live-host-v0.2.0 发布**（Qwen Live Host），以及 OpenTUI 迁移持续推进——相关追踪 Issue #8662 评论数达 25 条，占据热度榜首。同时，核心稳定性问题集中暴露：**#10887（P1）报告死循环会话烧掉 5-14M tokens**、**#10879（P1）发布主机 CI 资源竞争**、**#10850（P1）依赖 CVE 审计全线失败**，三个 P1 问题均待人工介入。

---

## 二、版本发布

### live-host-v0.2.0 — Qwen Live Host v0.2.0
- 包含 CI 修复：`fix(ci): make shared ECS Vitest concurrency tunable`（[#10667](https://github.com/QwenLM/qwen-code/pull/10667)）
- OpenTUI 迁移批次 4 合入（`feat(cli): OpenTUI migration batch 4`）

---

## 三、社区热点 Issues（Top 10）

**1. [#8662](https://github.com/QwenLM/qwen-code/issues/8662) · OpenTUI 迁移追踪（25 评论，热度第一）**
从 ink 7 + React 19 迁移到 OpenTUI 的总追踪帖。现有 TUI 依赖 ~1037 行的 ink patch，闪烁和渲染问题难以在 ink 框架内根治。今日 #10883 已合并作为迁移的一步，社区参与度极高。

**2. [#10887](https://github.com/QwenLM/qwen-code/issues/10887) · P1：工具反复报错时无早停机制**
生产会话（0.20.1–0.21.0）在死循环探索中重复收到相同错误（如 git exit 128），单会话消耗 **5-14M tokens**。这是今日最严重的核心成本/稳定性问题。

**3. [#10879](https://github.com/QwenLM/qwen-code/issues/10879) · P1：发布主机 hk4 与 PR CI 资源竞争**
`release.yml` 的 8 个验证 job 锁定 hk4 专属 label，但该主机仍带共享 `ecs-qwen` label，导致发布验证与 PR CI 抢 CPU，时序敏感测试失败。

**4. [#10850](https://github.com/QwenLM/qwen-code/issues/10850) · P1：依赖 CVE 审计 repo-wide 失败**
`npm audit` 报告 4 个漏洞（1 high / 2 moderate / 1 low），涉及 fast-uri/qs/uuid 新通告，主 lockfile 需升级。

**5. [#10888](https://github.com/QwenLM/qwen-code/issues/10888) · Agent 违反 skill 硬约束**
Skill 明确要求“缺失 ID 应停止、禁止 fallback”，但 agent 仍**捏造了 fallback 值**。涉及 agent 约束遵循的可信度问题，企业场景风险高。

**6. [#10860](https://github.com/QwenLM/qwen-code/issues/10860) · `qwen serve` shell guard 不可配置、不可审计**
内置守护拒绝会话目录外的只读 Git 命令，忽略审批模式，操作员无法配置/审计/感知原因（与 #10859 为姊妹篇，已关闭）。

**7. [#10818](https://github.com/QwenLM/qwen-code/issues/10818) · P1 已关闭：monitor 脉冲风暴可 DoS 交互会话**
ESC 取消无效、用户输入被饿死，25MB/13806 条记录的会话 Transcript 提供了详实证据。已修复关闭，值得关注修复方案。

**8. [#10892](https://github.com/QwenLM/qwen-code/issues/10892) · vi.waitFor 1s 硬编码影响 2047 处调用**
vitest 3.2.4 无全局覆盖配置，共享 CI 池上慢机器导致测试脆弱。今日多个 CI 稳定性 PR（#10870/#10886/#10858）均与此相关。

**9. [#10834](https://github.com/QwenLM/qwen-code/issues/10834) · MCP 返回的图片绕过视觉预算**
`read_file` 有 1568px 缩放预算，但 MCP 工具图片按原分辨率全额进入 context，直接影响 token 成本。

**10. [#9942](https://github.com/QwenLM/qwen-code/issues/9942) · Skill 命令污染斜杠补全**
安装大量 skill 后 `/` 补全极度拥挤，建议 skill 命令不默认出现在顶层补全。UX 类高频反馈。

> 其余关注点：内容泄漏系列（[#10692](https://github.com/QwenLM/qwen-code/issues/10692)、[#10791](https://github.com/QwenLM/qwen-code/issues/10791)、[#10700](https://github.com/QwenLM/qwen-code/issues/10700)、[#10797](https://github.com/QwenLM/qwen-code/issues/10797)）——XML 工具调用、thinking 块、脚手架标签泄漏为明文，构成一个待系统性治理的 bug 簇。

---

## 四、重要 PR 进展（Top 10）

**1. [#10883](https://github.com/QwenLM/qwen-code/pull/10883) ✅ 已合并 · OpenTUI 中途提交/退出对齐 ink**
中途退出的各种形式（`exit`/`quit`/`:q`/`:q!` 等）全面对齐 ink 行为，并为交互式 E2E 增加检测手段。

**2. [#10747](https://github.com/QwenLM/qwen-code/pull/10747) ✅ 已合并 · Web Shell 会话 Artifact 快照**
为嵌入宿主提供 `onSessionArtifactsChange` 回调，带单调序号的会话级全量快照 + turn 投影。

**3. [#10894](https://github.com/QwenLM/qwen-code/pull/10894) · E2E 构建一次、多端复用**
hosted runner 上构建一次并打包，各测试端解包复用，直击 E2E 耗时与共享池争抢痛点。

**4. [#10886](https://github.com/QwenLM/qwen-code/pull/10886) ✅ 已合并 · 发布 workspace 测试预算翻倍（45→90 分钟）**
针对共享池竞争场景的发布阻塞缓解。

**5. [#10870](https://github.com/QwenLM/qwen-code/pull/10870) · 毫秒级延迟预算测试在共享池跳过断言**
引入 `expectWithinLatencyBudget` helper，系统性解决计时型测试在慢机器上的误报。

**6. [#10893](https://github.com/QwenLM/qwen-code/pull/10893) · DingTalk 通道支持外发文件**
`[FILE: /path]` 指令转为原生附件，每次响应上限 5 个文件，覆盖会话回复/群发/私信。

**7. [#9983](https://github.com/QwenLM/qwen-code/pull/9983) · 隔离 host-trusted 状态与容器可写面**
review 沙箱安全加固：lease 文件移出读写挂载目录，防止 host git 指针被污染。

**8. [#10896](https://github.com/QwenLM/qwen-code/pull/10896) · 向 Routify 端点发送 session_id**
为三个 ModelRouter 端点的 HTTPS 请求附加 `session_id` header，便于服务端会话级路由/观测。

**9. [#10458](https://github.com/QwenLM/qwen-code/pull/10458) · 修复引用代码导致 footer 剥离失效**
review 评论双 footer 问题修复，防止 attribution 错乱。

**10. [#9768](https://github.com/QwenLM/qwen-code/pull/9768) · `/review` 覆盖率改为密封分类账本**
每个 chunk 的覆盖状态携带身份与缺口原因，独立上报“读了多少”与“决定发多少”。同族还有 [#9940](https://github.com/QwenLM/qwen-code/pull/9940)、[#10136](https://github.com/QwenLM/qwen-code/pull/10136)、[#10169](https://github.com/QwenLM/qwen-code/pull/10169)，`/review` 体系正在系统性重构。

---

## 五、功能需求趋势

1. **TUI 现代化（OpenTUI 迁移）**：#8662 持续高热，batch 4 已随版本发布，是当前最大的工程主线。
2. **Web Shell / daemon 增强**：定时任务按模型与分组路由（#10884）、DAG 可导航（#10866）、渲染性能优化（#10865）、artifact 快照（#10747）。
3. **企业级管控与安全**：shell guard 可配置/可审计（#10860）、多 workspace 信任门隔离（#10469）、CVE 治理（#10850）。
4. **内容卫生（sanitization）**：XML 工具调用、thinking 块、脚手架标签泄漏（#10692/#10791/#10797/#10700）是集中的 bug 簇，社区期待统一治理。
5. **可扩展中间件**：思考输出语言感知重写的插件 API（#10872）。
6. **CI/测试基建**：共享 ECS 池稳定性成为专职治理方向（#10892/#10879 及多个 CI PR）。

---

## 六、开发者关注点

- **Token 成本失控**：死循环不早停（#10887）、MCP 图片无预算（#10834）——生产环境最痛的两点。
- **Agent 约束遵循不足**：skill 硬约束被无视并捏造 fallback（#10888），影响自动化可信度。
- **CI 在共享资源池上脆弱**：硬编码超时、毫秒级断言在慢机器上误报，近期大量工时投入于此。
- **内部内容泄漏到用户可见输出**：多种格式（thinking、tool-call XML、tool-result 块）绕过现有 sanitizer。
- **多 workspace daemon 边界问题**：陈旧选择阻塞启动（#10782，已修复）、跨会话审批失败（#10705，已修复）。

---
*数据来源：github.com/QwenLM/qwen-code · 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报
**日期：2026-09-03 | 数据来源：github.com/Hmbown/DeepSeek-TUI**

---

## 1. 今日速览

v0.9.12 进入冲刺收尾阶段：UX 集成 PR #5862（workbar、水下主题默认、logo 等 10 个切片）与里程碑跟踪 Issue #5316（Crate 拆分 Epic）今日活跃更新，但 24 小时内无新 Release 发布。社区方面，两名外部贡献者今日提交了 ACP 协议缺失问题（session config 暴露、session/list 缺失），IDE 集成方向（ACP、VS Code、Codewhale Studio）成为最集中的功能主线。

---

## 2. 版本发布

过去 24 小时无新 Release。当前版本仍为 v0.9.11，v0.9.12 正在集成分支上冲刺（见 #5573 里程碑跟踪）。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 关注理由 |
|---|-------|---------|
| 1 | [#5573](https://github.com/Hmbown/Codewhale/issues/5573) v0.9.12 milestone tracker | 版本发布总入口，9-02 更新了运营交接文档与工作分支状态，23 条评论显示排期讨论热烈 |
| 2 | [#5316](https://github.com/Hmbown/Codewhale/issues/5316) EPIC-005: Crate 拆分伞形 Epic | 今日（9-03）刚更新，是代码架构重构的总跟踪器，所有子 FEAT 均向此汇报 |
| 3 | [#5863](https://github.com/Hmbown/Codewhale/issues/5863) ACP 未暴露 session config | 今日新提：`serve --acp` 缺 modes/models/configOptions，编辑器客户端无法切换工作模式 |
| 4 | [#5864](https://github.com/Hmbown/Codewhale/issues/5864) ACP 缺 session/list 和 session/load | 今日新提：ACP 客户端无法枚举/恢复既有会话，与 #5863 同属 ACP 完整性缺口 |
| 5 | [#5586](https://github.com/Hmbown/Codewhale/issues/5586) 拆分巨型文件 | lib.rs 达 18.7k 行，持续造成开发痛点，v0.9.12 清理车道核心任务 |
| 6 | [#5588](https://github.com/Hmbown/Codewhale/issues/5588) 18 处 DeepSeek 专属门控（已关闭） | 审计 2,281 行 deepseek 出现点，修复合并入 PR #5832，是项目“去单一供应商化”的关键一步 |
| 7 | [#5838](https://github.com/Hmbown/Codewhale/issues/5838) Codewhale Studio（VS Code fork） | IDE 战略 Stage 3：VS Code 分叉将取代 Tauri 壳成为官方桌面端，重大产品方向 |
| 8 | [#5836](https://github.com/Hmbown/Codewhale/issues/5836) 移除 Daytona，转向 AWS Lambda microVM | 创始人 9-02 拍板的架构转向，云端沙箱底座全量更换 |
| 9 | [#5824](https://github.com/Hmbown/Codewhale/issues/5824) Lane TTL 误删风险（已关闭） | 持久化路径未验证即递归删除的危险失败模式，已由 PR #5854 修复，数据安全相关必看 |
| 10 | [#5845](https://github.com/Hmbown/Codewhale/issues/5845) Meta 订阅 device-code 登录 | 调研 RFC 8628 device flow 对接 auth.meta.com，扩展订阅体系登录路径 |

> 注：#5866（眼科计费 CPT 更新）为明显无关的营销垃圾 Issue，建议维护者清理。

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 内容 |
|---|-----|------|
| 1 | [#5862](https://github.com/Hmbown/Codewhale/pull/5862) ✅ 已合并 | 0.9.12 UX 大集成：hover 契约、workbar 重命名、水下主题默认、新 logo、retro 主题等 10 个切片 |
| 2 | [#5865](https://github.com/Hmbown/Codewhale/pull/5865) 🔄 开放中 | 在 main 上重新落地 FEAT-020 插件命令 shape（原 PR #5657 因集成分支重构需 re-land） |
| 3 | [#5833](https://github.com/Hmbown/Codewhale/pull/5833) ✅ 已合并 | FEAT-019 内存能力：`/memory` 命令组 + 类型化 outcome（search/remember/export 等） |
| 4 | [#5840](https://github.com/Hmbown/Codewhale/pull/5840) ✅ 已合并 | 修复 #5823：持久化 tool-call 身份，runtime 重启后历史回放不再触发严格 schema 400 |
| 5 | [#5854](https://github.com/Hmbown/Codewhale/pull/5854) ✅ 已合并 | 修复 #5824：TTL 清理前强制验证 managed-worktree 身份，防止误删任意目录（中风险路径） |
| 6 | [#5831](https://github.com/Hmbown/Codewhale/pull/5831) ✅ 已合并 | per-session 控制套接字（#5533）：JSON-RPC 支持 message/interrupt/relaunch/status，面向监督式运行 |
| 7 | [#5832](https://github.com/Hmbown/Codewhale/pull/5832) ✅ 已合并 | 供应商中立化：余额查询跨 DeepSeek/OpenRouter/SiliconFlow，解除 ghost-text 供应商门控 |
| 8 | [#5858](https://github.com/Hmbown/Codewhale/pull/5858) ✅ 已合并 | 主题整合：ocean_treatment 折叠进 ThemeId::Underwater，含只读配置迁移与全套测试 |
| 9 | [#5855](https://github.com/Hmbown/Codewhale/pull/5855) 🔄 开放中 | 首个独立插件：computer-use bundle（截图/点击/输入 over MCP），9/9 协议测试通过，待实机验证 |
| 10 | [#5842](https://github.com/Hmbown/Codewhale/pull/5842) 🔄 开放中 | 引擎侧插件 + 市场管理 Runtime API（/v1/apps），本地插件系统的服务端基础 |

其他值得注意：[#5841](https://github.com/Hmbown/Codewhale/pull/5841)（退役 DEEPSEEK_YOLO 环境别名，#5443 分层迁移落地）、[#5857](https://github.com/Hmbown/Codewhale/pull/5857)（修复 thinking 折叠真值表，#5847 前半）、[#5859](https://github.com/Hmbown/Codewhale/pull/5859)（全局英文文案优化，117/117 测试通过）。

---

## 5. 功能需求趋势

1. **IDE / 编辑器集成（最热）**：ACP 协议补全（#5863/#5864/#5835）、VS Code 扩展升级（#5834）、VS Code fork 桌面端 Codewhale Studio（#5838）
2. **插件与扩展生态**：computer-use 插件（#5856/#5855）、插件市场 API（#5842）、持续自学习技能系统（#5860）
3. **架构治理与供应商中立**：Crate 拆分 Epic（#5316）、巨型文件拆分（#5586）、DeepSeek 标识符分层退役（#5443/#5588）
4. **云端沙箱底座切换**：Daytona 退场，AWS Lambda microVM 上位（#5836/#5837）
5. **多模型支持**：muse-spark-1.3 推理力度（#5853）、活体 catalog 模型解析（#5849）、Ollama 本地目录默认值（#5848）
6. **输入与可访问性**：语音输入（on-device STT + API 回退，#5846）、thinking 块键盘展开（#5847）
7. **代码搜索**：zvec/zvec-grep 语义搜索后端提案（#5830）

---

## 6. 开发者关注点

- **ACP 体验不完整是当前最直接的外部痛点**：两名用户同日报告编辑器集成缺口（模式切换、会话恢复不可用），提示 IDE Stage 2 的优先级判断与社区诉求高度吻合
- **数据安全敏感性**：TTL 误删（#5824）虽已修复，但社区对涉及 `remove_dir_all` 的路径保持高度警惕
- **稳定性与运维**：监督式运行（#5533）、systemd 部署下 runtime 重启历史回放（#5823）反映生产环境用户在增长
- **迁移负担**：DEEPSEEK_* 环境变量/存储键的分层退役（#5443）显示维护者在兼容性与品牌切换间谨慎权衡，但用户需关注 0.10 的破坏性变更
- **工程纪律良好**：多数 PR 遵循统一的 gates 流程（fmt / dead-code 预算 425 / CI 全矩阵），显示自动化质量门禁已成惯例

---

*本报告基于过去 24 小时 GitHub 数据自动汇总，供技术决策参考。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-09-03

## 1. 今日速览

今日无新版本发布，但社区活跃度依然很高（过去 24 小时更新了 100 条 Issues、41 条 PR）。热点集中在 **模型兼容性问题**（Gemini 3.x thought_signature 缺失、OpenRouter free 模型 400 报错、Anthropic 切换拒绝 Codex tool ID）和 **TUI 交互体验优化**。多个高质量社区贡献 PR 在持续推进，包括子代理可靠性、会话导入/分叉等核心功能修复。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues

**① Gemini 3.x 工具调用因缺少 `thought_signature` 失败**（#6996，8 评论，OPEN）
运行 Gemini 3.x 模型触发工具调用并回传结果时崩溃。这是影响面最广的模型兼容性问题之一，讨论持续一个多月仍未关闭。
🔗 earendil-works/pi Issue #6996

**② 分支摘要确定性失败：`generateBranchSummary` 硬编码 `maxTokens: 2048`**（#8845，7 评论，OPEN）
`/tree` 分支导航的 Summarize 在大分支上必然失败。硬编码上限是典型技术债，社区建议按分支大小动态设置。
🔗 earendil-works/pi Issue #8845

**③ Windows 上 `find` 对路径模式（如 `src/**/*.ts`）返回空结果**（#6817，6 评论，OPEN）
Windows 平台路径分隔符问题再次出现，与 #8841（反斜杠未归一化）同属 Windows 体验欠账。
🔗 earendil-works/pi Issue #6817

**④ OpenRouter `:free` 模型全部 400：`max_tokens` 超限**（#8760，4 评论，OPEN）
Pi 直接发送目录中的 `maxOutputTokens`，超出免费模型上游硬限制，导致所有 `:free` 模型不可用。
🔗 earendil-works/pi Issue #8760

**⑤ Bedrock 上 OpenAI 模型拒绝嵌套在 `toolResult.content` 中的图片**（#8643，4 评论，OPEN）
作者已备好修复与回归测试，等待上游采纳。多模态 + 工具调用的组合场景仍脆弱。
🔗 earendil-works/pi Issue #8643

**⑥ zai thinking handler 对强制思考模型发送 disabled，推理内容泄漏到输出**（#8706，3 评论，OPEN）
GLM-5.3 系列在关闭 thinking 时仍泄漏推理内容，属于 provider 适配层逻辑缺陷。
🔗 earendil-works/pi Issue #8706

**⑦ Codex 缓存 WebSocket 凭据切换后仍复用旧账号**（#6513，3 评论，OPEN）
同一 Pi 会话内从账号 A 切到 B 时可能复用 A 的认证 socket，存在跨账号请求路由的隐患。
🔗 earendil-works/pi Issue #6513

**⑧ 并行启动时错误报告 "No API key found" 长达 48 秒**（#8928，3 评论，OPEN）
作者提供了确定性复现和计时数据，错误指向错误的 provider，多进程场景下高频出现，排障成本高。
🔗 earendil-works/pi Issue #8928

**⑨ 流式过程中按 Esc 经常无法取消请求**（#8823，2 评论，OPEN）
abort 已注册但 HTTP 请求实际未被取消，需等 provider 自然结束。与 #9022（取消后队列消息回填编辑器）共同构成中断体验的一组痛点。
🔗 earendil-works/pi Issue #8823

**⑩ TUI 因扩展工具返回非 `AgentToolResult` 值而崩溃**（#9035，2 评论，CLOSED）
扩展 API 未对返回值归一化导致 TypeError 进程退出。扩展生态的健壮性问题，值得 API 设计层面关注。
🔗 earendil-works/pi Issue #9035

---

## 4. 重要 PR 进展

**① #8250 — 子代理进度与失败上报可靠性修复**（OPEN）
修复子代理“提前报完成”、丢失失败信息、失败却返回正常工具结果等问题，并处理输出超限。
🔗 earendil-works/pi PR #8250

**② #8615 — 保留用户交错内容顺序**（OPEN）
保序传递文本/图片块，覆盖空闲 prompt、流式 steer/follow-up 等路径，是多模态输入体验的关键修复。
🔗 earendil-works/pi PR #8615

**③ #8559 — 剪贴板图片以原子标记附加**（CLOSED）
粘贴图片不再暴露临时文件路径，改为编辑器中的附件标记。直接回应了 #9023 的 UX 抱怨。
🔗 earendil-works/pi PR #8559

**④ #8990 — 分叉会话时保留压缩边界**（CLOSED）
重映射指向被移除 label 的 compaction 边界，避免 fork 后丢失 provider 上下文。
🔗 earendil-works/pi PR #8990

**⑤ #8985 — 避免导入会话时覆盖已有会话**（CLOSED）
`/import` 原先按文件名直接替换，可能静默覆盖已有会话；现改为无冲突文件名。
🔗 earendil-works/pi PR #8985

**⑥ #8635 — 懒加载 setup 期间保留 aborted 停止原因**（OPEN）
将 abort 信号穿透懒加载流 setup，修复 #8409，附回归测试。
🔗 earendil-works/pi PR #8635

**⑦ #8994 — 信号杀死进程映射为非零退出码**（OPEN）
OOM killer 终止 bash 工具调用后曾被视为“成功”，属正确性风险较高的修复。
🔗 earendil-works/pi PR #8994

**⑧ #8708 — 不经 GitHub API 解析 fd/rg 版本**（CLOSED）
规避匿名 API 每小时 60 次限额（共享出口 IP 场景高发），提升工具引导可靠性。
🔗 earendil-works/pi PR #8708

**⑨ #8743 — 忽略过期的图片转换缓存**（OPEN）
Kitty 图像转换完成后若源图已变更则丢弃，消除竞态导致的错图渲染。
🔗 earendil-works/pi PR #8743

**⑩ #8422 — xAI Grok Build 省略 reasoning effort**（OPEN）
修复 `grok-build-0.1` 因携带 `reasoning.effort` 被 400 拒绝的问题。
🔗 earendil-works/pi PR #8422

---

## 5. 功能需求趋势

- **多 Provider/多模型兼容**是最大压力源：Gemini thought signature、OpenRouter free 限额、xAI 参数校验、zai/GLM thinking、Bedrock 多模态、Anthropic↔Codex 会话迁移，几乎每个主流 provider 都有待修的适配问题。
- **TUI/UX 打磨**需求密集：图片附件化展示（#9023）、历史折叠（#9020）、footer 自定义命令（#9024）、编辑器 frameless/前缀（#9032）、全屏鼠标跟踪可关闭（#8913）。
- **扩展 API 安全与能力边界**：会话替换 API（#5952）、能力策略钩子（#9043）、AgentHarness 统一运行时（#9042）——社区在推动更正式的宿主-扩展契约。
- **会话管理增强**：导入/分叉/压缩边界/队列消息处理等长会话工作流持续被关注。
- **跨平台（Windows/NixOS/Alpine）**：路径分隔符、musl 静态链接（#9033）等环境适配诉求不断。

## 6. 开发者关注点

- **中断与取消不可靠**是最集中的痛点：Esc 无法取消流式请求（#8823）、abort 后队列消息处理不符合预期（#9022）、压缩与 prompt 队列无法交错（#8301）。
- **错误信息误导导致排障成本高**：凭据问题误报为 API key 缺失（#8928）、静默忽略非法 `--mode`（#9045）、扩展更新静默跳过重复项（#8971）——开发者普遍希望失败要“响”。
- **隐式上限与硬编码**：摘要 2048 token 上限（#8845）、`max_tokens` 超限（#8760）等隐性限制缺乏自适应。
- **多进程/多账号场景**是高阶用户的高频反馈：凭据切换复用旧 socket（#6513）、并发 share 隔离（PR #8613）表明生产环境使用强度在上升。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# 📰 oh-my-pi 社区动态日报 · 2026-09-03

## 一、今日速览

今日 oh-my-pi 连发三个版本（v18.1.3–v18.1.5），重点修复 Gemini 3 长会话 400 错误并全面现代化 provider 认证机制。但 18.1.5 的 Copilot OAuth 权限扩大引发企业用户强烈反弹（#10656），社区已快速提交修复 PR（#10657）。另有一个时间敏感问题：opencode-go/zen 缺失 `x-opencode-session` 头，09/05 后将开始报错（#10653）。

---

## 二、版本发布

### v18.1.5（@oh-my-pi/pi-ai）
- **新增**：`/login abliteration` 登录命令，通过 `/v1/models` 验证 API key，支持 `ABLITERATION_API_KEY` / `ABLIT_KEY` 环境变量
- **变更**：全面现代化 catalog 中的 provider 认证与 token 刷新机制（⚠️ 该变更疑似导致 Copilot OAuth scope 扩大问题）

### v18.1.4（@oh-my-pi/pi-catalog）
- **变更**：为支持的模型启用 Cursor tool schema projection
- **修复**：Antigravity 和 Gemini CLI 将 Gemini Flash 3.6+ 的各档位（low/medium/high/tiered 及后续修订版）合并为一个路由模型 `gemini-3.8-flash`

### v18.1.3（@oh-my-pi/pi-ai）
- **修复**：Gemini 3 在 Antigravity/Cloud Code Assist/Vertex AI 上并行工具调用后永久卡在 `400 INVALID_ARGUMENT` 的问题（[#9638](https://github.com/can1357/oh-my-pi/issues/9638)，今日已关闭 ✅）
- **修复**：保留的 Anthropic thinking 内容在压缩后得以幸存

---

## 三、社区热点 Issues

**1. [#10656](https://github.com/can1357/oh-my-pi/issues/10656) · Copilot 登录 OAuth 权限扩大，企业组织被拒（P1）**
18.1.5 的 `/login github-copilot` 请求了 repo/gist/codespace 等额外权限，导致原本允许 18.1.4 的 GitHub Enterprise / Copilot Business 组织（SAML/EMU 白名单）拒绝授权。属于升级引入的回归，修复 PR #10657 已当日提交，响应迅速。

**2. [#10653](https://github.com/can1357/oh-my-pi/issues/10653) · opencode-go/zen 缺失 `x-opencode-session` 头（P1，⏰ 时间敏感）**
OpenCode Go 将于 09/05 起强制要求该会话路由头，OMP 当前不发送，届时请求将开始报错。距截止仅剩两天，配套修复 PR #10654 已就绪。

**3. [#10605](https://github.com/can1357/oh-my-pi/issues/10605) · TUI 子代理运行时停止重绘约 80 秒（P1）**
子代理活跃期间界面假死、输入无回显，30 秒以上才恢复。直接影响核心使用体验，属高优先级 TUI 缺陷。

**4. [#10645](https://github.com/can1357/oh-my-pi/issues/10645) · 父代理 steering 可跳过子代理终态 yield（P1）**
父代理在子代理流式输出最终回复时发送 `hub send`，会跳过已生成的 yield 调用，导致任务无法正常完成。涉及多代理编排的正确性核心。

**5. [#10630](https://github.com/can1357/oh-my-pi/issues/10630) · Gemini 经 OpenAI 兼容网关首次工具调用续接仍 400（P1）**
即使包含 #10173 修复的 18.1.2 也无法幸免，`thought_signature` 缺失问题在第三方网关路径下仍存在。

**6. [#8802](https://github.com/can1357/oh-my-pi/issues/8802) · Z.AI Coding Plan 登录丢弃官方 JWT**
OMP 将官方 ZCode JWT 替换为公共 PAYG key，导致 1113 错误后等待 30 分钟。认证实现与官方客户端行为不一致的典型案例。

**7. [#10614](https://github.com/can1357/oh-my-pi/issues/10614) · 意外停止重试上限后静默结束回合**
当回复“困在”思考输出中时，重试耗尽后无任何错误提示直接结束，会话看似冻结且无法恢复。静默失败类问题中最令人困扰的一种。

**8. [#7226](https://github.com/can1357/oh-my-pi/issues/7226) · Advisor 全量转录重放浪费 prompt cache**
单次会话中 advisor 发起 28 次字节级相同的全量历史重发，对按 token 计费用户造成实际成本损失。

**9. [#10616](https://github.com/can1357/oh-my-pi/issues/10616) · Copilot 所有模型显示为 1M 上下文**
extendedContext 关闭时，GPT 5.6 和 Claude 5 的普通与 -1m 变体均按 1M 上下文行为运行，压缩阈值不触发，可能导致质量下降与隐性成本。

**10. [#10231](https://github.com/can1357/oh-my-pi/issues/10231) · 无子代理会话 CPU 占用 40-100%（P2）**
等待后台测试运行时单核占用异常高，附完整诊断报告，Windows 平台。

---

## 四、重要 PR 进展

**1. [#10657](https://github.com/can1357/oh-my-pi/pull/10657) · 收窄 GitHub Copilot OAuth scopes**
针对今日爆发的 #10656 回归问题，移除 `read:org,repo,gist,codescope`，恢复企业组织兼容性。当日提交，应急响应典范。

**2. [#10654](https://github.com/can1357/oh-my-pi/pull/10654) · 发送 OpenCode 路由头**
为 opencode-go/zen 补上 `x-opencode-session` / `x-opencode-client` 头，解决 09/05 大限（#10653）。

**3. [#6965](https://github.com/can1357/oh-my-pi/pull/10657) · 音视频消息内容支持**
跨 pi-ai / pi-catalog / pi-agent / coding-agent 四个包建立 `AudioContent` / `VideoContent` 标准契约，是多模态能力的基建级 PR。

**4. [#10498](https://github.com/can1357/oh-my-pi/pull/10498) · Muse Code 订阅 provider**
支持 Meta 账号登录 Muse Code 订阅，含配额查询与模型目录同步。

**5. [#10595](https://github.com/can1357/oh-my-pi/pull/10595) · Vertex gemini-2.5-flash-lite 输出上限钳制（P0）**
将 maxTokens 从 65536 钳至 65535，修复作者自己踩到的 Vertex 400 错误，使用 `limits-patch` 作用域规则。

**6. [#10563](https://github.com/can1357/oh-my-pi/pull/10563) · RPC 主动回合 steering 能力**
协议 v1 ready 帧新增 `activeTurnSteering` 特性广播，`steer` 支持 `activeTurnOnly` 准入。与 #10645 的 steering bug 相关，值得联动关注。

**7. [#10661](https://github.com/can1357/oh-my-pi/pull/10661) · 修复 Volar 3 tsserver 请求桥接**
解决 vue-language-server 无响应问题（#10659），为 LSP 客户端补上 tsserver/request 桥，附可复现测试脚本。

**8. [#10644](https://github.com/can1357/oh-my-pi/pull/10644) · 原子写入保留 symlink 配置文件（P1）**
修复 dotfiles 用户通过 symlink 管理 `mcp.json` / `config.yml` / `ssh.json` 时被原子写覆盖为普通文件的问题。

**9. [#9372](https://github.com/can1357/oh-my-pi/pull/9372) + [#9373](https://github.com/can1357/oh-my-pi/pull/9373) + [#9374](https://github.com/can1357/oh-my-pi/pull/9374) · 异步进度体系三连**
7 层技术栈中的 3 个：Bash 命令自动转后台任务（无重启进程提升）、统一 `<async-progress>` 提示策略、TUI 中折叠展示进度块。是对长命令体验的系统性重构。

**10. [#10527](https://github.com/can1357/oh-my-pi/pull/10527) · 移除 edit 工具的不安全分隔符推断（P1）**
修复 sloppy 模式下无标记文本可静默破坏文件的风险，转而显式暴露恢复提示。安全性修复，评审优先级 P1。

---

## 五、功能需求趋势

1. **Provider 生态持续扩张**：command-code 接入请求（#1666，28 条评论高热度）、Muse Code 订阅（PR #10498）、grokbot 新 provider（PR #10175）、OpenAI Codex 语音转录（PR #10374）——社区对“用订阅而非 API key”的需求持续旺盛。
2. **多代理编排精细化**：steering 时序（#10645）、yield 语义（#10635）、per-task 模型指定（#7982）、per-model 压缩阈值（#6835）——子代理任务管理是当前最活跃的诉求方向。
3. **TUI/UX 打磨**：状态栏可配置化（profile 段、Git 分支名限长、余额段）、/usage 面板窄终端适配、假死与 CPU 占用问题——终端体验仍是差异化重点。
4. **SDK/扩展能力深化**：模型角色枚举与修改（#5858）、thinking-effort 档位自动发现（#6621）。
5. **多模态与语音**：音视频内容契约（PR #6965）、云端 STT（PR #10374）正在铺路。

---

## 六、开发者关注点

- **认证/登录是最集中的痛点**：今日 Copilot OAuth 回归、OpenCode 头缺失、Z.AI JWT 丢弃三个问题均为认证类，且 v18.1.5 的认证现代化改造直接引入了回归——**发布节奏与兼容性验证的平衡**值得维护者警惕。
- **静默失败不可接受**：#10614（回合静默结束）、#10635（yield 丢弃报告）、#10616（上下文静默变大）反映社区对“无声错误”的容忍度极低，宁可显式报错。
- **成本与缓存敏感性高**：prompt cache 浪费（#7226）、1M 上下文不压缩（#10616）说明订阅用户对 token 消耗高度在意。
- **本地/网关场景支持不足**：Ollama thinking 丢失（#8696）、localai 无推理显示（#10571）、OpenAI 兼容网关 thought_signature（#10630）——非原生 provider 路径的兼容性缺口明显。
- **dotfiles 与企业环境的工程化需求**：symlink 保留（PR #10644）、权限强制 0700（#10413）、企业 OAuth 白名单（#10656）——高级用户的工作流约束需要被尊重。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

# DeepSeek Harness 社区动态日报
**日期：2026-09-03**

---

## 1. 今日速览

今日 DeepSeek Harness 项目发布 **v0.1.2-rc.1**，这是 0.1.2 系列的首个候选版本，标志着该版本线进入稳定收尾阶段。本版本以会话流体验优化为核心，涵盖内容折叠、宽度自适应、token 用量统计等多项用户可感知的改进。过去 24 小时内无新增 Issue 与 PR 更新，社区互动整体平稳。

---

## 2. 版本发布

### 🎯 dsh-v0.1.2-rc.1（0.1.2 系列首个候选版）

汇总自 v0.1.1-rc.2 以来的主要变更，核心更新如下：

**新增功能**
- **会话流折叠优化**：默认在每个已完成回答前折叠过程内容，并默认折叠「System prompt」（@07akioni, @lsdsjy）
- **宽度自适应**：会话流正文宽度可自适应或拖拽调整（@yixiangihsiang）
- **用量可视化**：回答末尾显示 token 用量和耗时，可展开查看精确用量与详细统计（@hypatiamay）

🔗 [Release: dsh-v0.1.2-rc.1](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-rc.1)

### 🔧 dsh-v0.1.2-alpha.5（前置版本）

**问题修复**
- 修复从 `0.1.1-rc.2` 或 `0.1.2-alpha.3` 升级时，应用可能启动失败或会话列表标题丢失的问题（@imccyu）

🔗 [Release: dsh-v0.1.2-alpha.5](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.5)

---

## 3. 社区热点 Issues

过去 24 小时内无 Issue 更新，本节今日省略。

---

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新，本节今日省略。

> 💡 说明：本次发布中的主要贡献已直接体现在 Release Notes 中（见上节），涉及 @07akioni、@lsdsjy、@yixiangihsiang、@hypatiamay、@imccyu 等贡献者。

---

## 5. 功能需求趋势

基于近期 Release 内容观察（因今日无 Issue 数据，趋势仅供参考）：

- **会话流阅读体验**：内容折叠、宽度自适应等 UI 优化是当前迭代重点，反映社区对界面易用性的关注
- **透明化用量统计**：token 用量与耗时展示进入正式版本，说明用户对成本监控有较强需求
- **升级稳定性**：alpha.5 专门修复升级路径问题，表明版本迁移可靠性是持续关注点

---

## 6. 开发者关注点

- **升级兼容性**：跨版本升级可能导致启动失败或数据（会话标题）丢失，建议从旧版本升级的用户先确认已包含 alpha.5 及以上的修复
- **候选版本反馈窗口**：v0.1.2-rc.1 已发布，是社区测试并反馈问题的最佳时机，尤其是会话流新交互和用量统计功能

---

*数据来源：github.com/deepseek-ai/deepseek-harness | 统计周期：2026-09-02 至 2026-09-03*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*