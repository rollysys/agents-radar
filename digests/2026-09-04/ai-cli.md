# AI CLI 工具社区动态日报 2026-09-04

> 生成时间: 2026-09-04 03:31 UTC | 覆盖工具: 11 个

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
**统计日期：2026-09-04 · 数据来源：各工具 GitHub 仓库过去 24 小时公开动态**

---

## 一、生态全景

AI CLI 工具已进入**功能深化与生态扩张并行**的阶段：头部工具（Claude Code、Codex、Gemini CLI）竞争焦点从基础编码能力转向插件/Hooks 体系、多 Agent 编排和企业级治理。**成本可观测性**（prompt cache、token 用量、配额透明）成为横跨所有工具的最强主线，几乎每个社区都有相关热点 Issue 或 Release 功能。**Windows 平台支持**是全生态共同的短板，各仓库的 Top Issues 中 Windows 相关问题占比均显著偏高。同时，新模型（GPT-6-Astra、gemini-3.8-flash、GLM-5.1、DeepSeek V4）的快速接入能力正成为差异化竞争点，worktree 隔离、ACP 协议支持等基础设施也在多个工具中同步落地。

---

## 二、各工具活跃度对比

| 工具 | 热点 Issues（条） | PR 更新（条） | Release | 本日关键事件 |
|---|---|---|---|---|
| **Claude Code** | 10（含 76 评论置顶 bug） | 5（全社区贡献） | v2.1.260 | `/diff` 面板 + cache 诊断；Function Hooks 提案热议 |
| **OpenAI Codex** | 10 | 10+（官方主导） | 0.153.1 / 0.153.2 | GPT-6-Astra 隐蔽接入；`codex exec` 托管 worktree |
| **Gemini CLI** | 10 | 10+ | nightly | 多个 P1 安全修复集中合入；gemini-3.8-flash 设为默认 |
| **Copilot CLI** | 10 | 0 | v1.0.83-5 / -4 | Win11 任务栏集成；CIMD OAuth 支持 |
| **Kimi Code CLI** | 7（6 条关闭） | 1（已关闭） | 无 | 1.17+ ACP 认证回归阻断自定义 Provider |
| **OpenCode** | 10 | 10 | 无 | 桌面端 Plugin Manager 合并；工具命名空间 PR |
| **Qwen Code** | 10 | 10 | v0.23.0 | OpenTUI 迁移推进；CVE 审计 2 天清零 |
| **DeepSeek TUI** | 4（1 条 spam） | 8 | 无（0.9.12 预集成） | ACP 协议完整性缺口暴露 |
| **Pi** | 10 | 10 | 无 | mitsuhiko 系统提示词重构草案；Meta Muse provider |
| **oh-my-pi** | 10 | 10 | v18.1.6 ~ 18.1.8（3 个） | 09/05 会话头兼容大限修复 |
| **DeepSeek Harness** | 0 | 0 | v0.1.2-rc.1 | 会话流折叠 + token 用量统计 |

**要点**：Claude Code、Codex、Gemini CLI 讨论量与参与度（评论数、👍 数）领先一个量级；oh-my-pi 发布节奏最密集；Copilot CLI 出现 PR 完全静默，且多项关键 Issue（OOM、MCP 兼容）无官方修复动作。

---

## 三、共同关注的功能方向

### 1. Prompt Cache 与成本可观测性（最普遍主线）
- **Claude Code**：v2.1.260 新增 `/cost` cache 诊断；#91971 链式 `-p --resume` 缓存永不命中；#91880 超大 CLAUDE.md 重发
- **oh-my-pi**：v18.1.8 修复 GPT-6 Astra 切换 thinking level 时缓存丢失
- **OpenCode**：#31348 GLM-5.1 缓存随机归零；#28566 请求 service_tier
- **Codex**：#37934 429 限流阻断额度查询页；多条配额对账异常
- **DeepSeek Harness**：本次 RC 版本核心即 token 用量统计展示

### 2. Worktree 隔离与并行 Agent 工作流
- **Codex**：PR #42652 `codex exec` 实验性托管 worktree
- **Qwen Code**：PR #10643 `/session new <name> --worktree`
- **OpenCode**：#17994 多 Agent 隔离 workspace（24 评论）、#35471 worktree CLI flag
- **oh-my-pi**：PR #10692 `worktree.cleanSource` 设置

### 3. Auto-Memory / 持久化记忆（需求与问题并存）
- **Claude Code**：#81833 加载不一致、#78569 读写门自相矛盾、#91913 跨重启记忆
- **Gemini CLI**：#26525 记忆脱敏先发送后处理的隐私缺陷（P2 安全）
- **DeepSeek TUI**：PR #5833 FEAT-019 记忆能力落地

### 4. Windows 平台支持（全生态短板）
- **Claude Code**：#85891 窗口置顶（76 评论）、#53247 启动失败
- **Codex**：Top 30 Issues 约 1/3 带 windows 标签
- **Gemini CLI**：NTFS 短路径绕过、git 参数绕过等安全类 Windows 问题
- **OpenCode**：#2999/#7957 Ctrl+C 退出问题合计 80+ 👍
- **Pi / Qwen Code**：Windows glob 失效、IME 候选框可读性

### 5. 安全加固（本周明显升温）
- **Gemini CLI**：路径穿越、沙箱绕过、凭据泄漏等 5+ 个 P1 安全 PR
- **Qwen Code**：#10192/#10197 Bash 允许规则绕过、#10561 git config 命令执行入口
- **Copilot CLI**：v1.0.83-5 收紧沙箱本机服务访问
- **Claude Code**：PR #87079 `**` glob 模式静默漏掉顶层文件（安全规则失效）

### 6. Provider 灵活性与订阅复用
- **Claude Code** #38698、**Copilot CLI** #4703、**OpenCode** #26925：不约而同要求 **per-agent 模型路由**
- **Kimi Code** #2633、**oh-my-pi** #1666/#8802、**Pi** #9096：自定义 Provider / 第三方订阅接入是中小工具社区的第一诉求

---

## 四、差异化定位分析

| 维度 | 分析 |
|---|---|
| **Claude Code** | 插件生态深化（Function Hooks 提案）+ 企业级 SCM 集成（GitLab 131 👍）。技术路线以 hooks/扩展模型为核心，目标用户为重度专业开发者与团队。弱点：Windows Desktop 与 auto-memory 子系统。 |
| **OpenAI Codex** | 模型先行策略——GPT-6-Astra 隐蔽铺路 + Bedrock 多云部署，工程重心在并行执行基础设施（worktree、remote exec、附件存储模块化）。面向企业与多云场景，但配额系统信任危机和 session 存储膨胀（可达 TiB 级）是明显债务。 |
| **Gemini CLI** | 本周主旋律是**安全收敛**（RFC 9207、路径穿越、consent 绕过），同时推进 AST 感知代码理解这类研究型方向。subagent 可靠性（挂起、误报成功）是其最大软肋。 |
| **Copilot CLI** | 深度绑定 GitHub/Windows 生态（任务栏集成、企业 Marketplace 管控），企业治理诉求最突出。但 PR 静默 + OOM/MCP 兼容问题未解，迭代响应偏慢。 |
| **OpenCode** | 开源中立路线，桌面端生态（Plugin Manager、浏览器插件）与工具命名空间等平台化能力建设最快，走“平台化聚合”路线。 |
| **Qwen Code / DeepSeek 系** | 中国模型厂商的配套 CLI。Qwen Code 工程投入扎实（OpenTUI 迁移、安全响应 2 天闭环），本地模型兼容（LM Studio）与中文输入体验是特色痛点。DeepSeek TUI/Harness 处于早期打磨阶段。 |
| **Pi / oh-my-pi** | 极客向、多 Provider 聚合的轻量路线。核心价值在于把各家订阅/中继（OpenRouter、Z.AI、Meta Muse、commandcode）统一接入，wire 兼容性修复极其频繁——这是中继生态的固有成本。 |

---

## 五、社区热度与成熟度

**第一梯队（成熟 + 高活跃）**：Claude Code、Codex、Gemini CLI——Issue 讨论深度（单条 50-76 评论）、官方参与度高、版本节奏稳定（Codex 双补丁 + 3 个 alpha）。

**第二梯队（快速迭代期）**：oh-my-pi（24 小时 3 个版本，社区修复响应极快）、Qwen Code（架构级工程 OpenTUI 迁移 + CI 治理）、OpenCode（桌面端生态加速，PR 质量高）。

**第三梯队（早期/平稳期）**：
- Pi：活跃但偏长尾性能债（O(n²) 渲染、队列开销），靠 mitsuhiko 等明星贡献者驱动架构演进
- Kimi Code CLI：今日 Issue 以批量关闭为主，仅 #2633 一个活跃痛点，社区规模有限
- DeepSeek TUI / Harness：几乎单人/小团队驱动，Issue 量个位数，甚至出现 spam 无人处理，治理能力待建
- Copilot CLI：位置特殊——用户基数大但今日 PR 完全静默，多项高影响 Issue（OOM、MCP 协议倒退）悬置，社区响应节奏与其体量不匹配

---

## 六、值得关注的趋势信号

1. **成本可观测性从“nice to have”变为“核心战场”**。Claude Code 的 cache 诊断、DeepSeek Harness 的用量统计、Codex 的配额危机几乎同期出现——建议开发者在选型时将 **cache 命中行为透明度**列为硬指标，自动化工作流用户尤需警惕 `-p --resume` 类链式调用的隐性成本（Claude Code #91971）。

2. **ACP 协议成为编辑器集成的分水岭**。Kimi #2633、DeepSeek TUI #5863/#5864 表明 ACP 实现完整性直接决定 IDE 场景可用性；oh-my-pi #9157 也在推进 ACP 异步轮次。若你的工作流依赖 Zed 等 ACP 客户端，需验证目标工具的 session/list、session/load 与认证门设计。

3. **安全类修复在全生态集中爆发**（Gemini CLI 的 P1 安全 PR 群、Qwen 的 shell 绕过、Pi 的信号退出码误判成功）。shell 允许规则绕过、路径穿越、配置劫持是共性攻击面——**使用沙箱/权限系统的团队应关注各工具的安全公告节奏**，Qwen 的 2 天 CVE 清零值得作为基准。

4. **“误报成功”是 Agent 可信度的新核心问题**。Gemini #22323（MAX_TURNS 后报 GOAL 成功）、Pi #8994（OOM 杀掉的命令被判成功）说明 agent 自报状态不可信已是跨工具的系统性问题，CI/CD 中嵌入 Agent 的团队需外部校验机制兜底。

5. **多 Provider 路由 + 订阅复用是中小工具的生存空间**。per-agent 路由（orchestrator 走云端、subagent 走本地）在四个社区同时出现，提示混合架构将成为成本控制的标配模式。

6. **行动项速查**：oh-my-pi 用户须在 **09/05 前升级**（#10653 会话头兼容）；Codex 自定义 subagent 用户留意 0.153.0 的 service_tier 回归（#42612）；Copilot CLI 沙箱收紧可能破坏依赖 localhost 的测试套件；长会话重度用户注意 Codex 的 rollout 目录清理。

---

*结论：头部三强在插件生态、并行基础设施和成本透明度上拉开身位；开源中腰部（OpenCode、Qwen、oh-my-pi）以迭代速度和 Provider 中立性建立差异化；Windows 支持与 Agent 结果可信度是全行业尚未解决的公共债务。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-09-04）

---

## 一、热门 Skills 排行（按社区关注度）

| # | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | **skill-creator 评估链修复** [PR #1298](https://github.com/anthropics/skills/pull/1298) | 修复 `run_eval.py` 永远报 0% recall 的核心缺陷 | 对应 [#556](https://github.com/anthropics/skills/issues/556)（12 评论、10+ 独立复现），描述优化循环"对着噪声优化"，是仓库最严重的工具链 bug | OPEN |
| 2 | **document-typography** [PR #514](https://github.com/anthropics/skills/pull/514) | AI 生成文档的排版质控（孤行、孤字换行、编号错位） | 提出所有 Claude 文档输出均受影响、"用户不会主动要求好排版"的产品洞察 | OPEN |
| 3 | **scnet-hpc** [PR #1615](https://github.com/anthropics/skills/pull/1615) | SCNet HPC 集群操作（SSH + Slurm 工作流） | 面向科研计算场景的 profile 化集群管理 | OPEN |
| 4 | **ODT 文档 Skill** [PR #486](https://github.com/anthropics/skills/pull/486) | OpenDocument 创建/填充/转 HTML | 补齐开源 ISO 标准格式空白，与官方 docx/pdf/xlsx 文档矩阵形成对照 | OPEN |
| 5 | **Hivemind 多智能体编排** [PR #1628](https://github.com/anthropics/skills/pull/1628) | 委派机械任务给免费模型的 headless opencode worker | "昂贵模型的上下文是稀缺资源"引发成本架构讨论 | OPEN |
| 6 | **frontend-design 改进** [PR #210](https://github.com/anthropics/skills/pull/210) | 提升前端设计 Skill 的清晰度与可执行性 | 强调每条指令须"单轮会话内可执行" | OPEN |
| 7 | **skill-quality/security-analyzer 元技能** [PR #83](https://github.com/anthropics/skills/pull/83) | 五维度 Skill 质量评估 + 安全扫描 | 与安全信任议题（#492）形成呼应 | OPEN |
| 8 | **self-audit 质量门禁** [PR #1367](https://github.com/anthropics/skills/pull/1367) | 交付前机械验证 + 四维推理审计 | 对应提案 [#1385](https://github.com/anthropics/skills/issues/1385)，"先验证文件存在再审计推理"的两段式设计受关注 | OPEN |

---

## 二、社区需求趋势（从 Issues 提炼）

1. **安全与信任边界**（最热，43 评论）：[#492](https://github.com/anthropics/skills/issues/492) — 社区 Skill 冒用 `anthropic/` 命名空间分发，用户可能向伪装官方的 Skill 授予高权限。另有 [#1175](https://github.com/anthropics/skills/issues/1175) 讨论 SKILL.md 内嵌权限逻辑的安全隐患。
2. **组织级分发与共享**：[#228](https://github.com/anthropics/skills/issues/228)（16 评论）— 期待 org 内共享 Skill 库，取代 Slack 手传 `.skill` 文件。
3. **工具链可靠性**：[#556](https://github.com/anthropics/skills/issues/556)（12 评论）、[#1390](https://github.com/anthropics/skills/issues/1390)（mcp-builder 评估器静默伪造错误）、[#1362](https://github.com/anthropics/skills/issues/1362)（pnpm 兼容）— 评估/构建脚本在 Windows 和真实环境下的兼容性是重灾区。
4. **上下文效率**：[#1487](https://github.com/anthropics/skills/issues/1487) — claude-api skill 单次注入 ~156k token 击穿上下文窗口；[#1329](https://github.com/anthropics/skills/issues/1329) 提议 compact-memory 符号化压缩 agent 状态。
5. **质量自审类元技能**：[#1385](https://github.com/anthropics/skills/issues/1385)、[#412](https://github.com/anthropics/skills/issues/412) — 推理质量门禁、agent 治理模式。
6. **企业平台集成**：PR #568 ServiceNow 全平台 Skill，反映 ITSM/SecOps 领域需求。

---

## 三、高潜力待合并 Skills（活跃且未合并）

- **PR #1298 + #1099 + #1050**：skill-creator 评估链三连修（recall=0%、Windows WinError、claude.cmd 调用），修复路径明确、复现充分，合并优先级最高。
- **PR #538 / #541 / #539**：同作者 @Lubrsy706 的三个精准修复（PDF 大小写引用、DOCX w:id 冲突导致文档损坏、YAML 未加引号警告），小而确定，接近落地。
- **PR #1607**：claude-api 标记 4 个已退役模型 ID，直接修复官方 Issue #1603，属文档级改动。
- **PR #1602**：mcp-builder 评估序列化/编码/指标多项修复，回应 #1390。
- **PR #514 document-typography**：定位独特（被动型排版质控），讨论周期最长（3 月至今），仍在活跃推进。

---

## 四、生态洞察（一句话）

**社区最集中的诉求是"可信且可靠的 Skill 基础设施"** —— 修复评估工具链的系统性 bug（0% recall、Windows 兼容）、堵住命名空间冒用的信任漏洞、控制 Skill 的上下文开销，这三件事比新增任何单一 Skill 都更影响生态健康。

---

# Claude Code 社区动态日报 — 2026-09-04

## 一、今日速览

Claude Code 发布 **v2.1.260**，新增全屏模式下的 `/diff` 侧边差异面板，并改进了 `/cost` 中的 prompt cache 命中诊断。社区方面，Windows Desktop “窗口总置顶” bug（#85891）持续发酵，评论已达 76 条；@poteat 提出的 **Function Hooks** 插件增强提案（#91870）引发 63 条热烈讨论，是本日最受关注的功能话题。

## 二、版本发布

### [v2.1.260](https://github.com/anthropics/claude-code/releases)
- **新增 `/diff` 面板**：全屏模式下在对话旁打开侧边栏，实时展示 Claude 编辑产生的未提交变更，可用 `/diff` 切换。
- **Prompt cache 诊断增强**：`/cost` 现在会显示缓存未命中的可能原因（如工具定义或系统提示变更、空闲超过 TTL 等）。

> 值得注意：新版本的 cache 诊断功能与今日新报的 #91971（链式 `-p --resume` 调用缓存永不命中）高度相关，官方显然在响应这方面的反馈。

## 三、社区热点 Issues

1. **[#85891](https://github.com/anthropics/claude-code/issues/85891) — Windows Desktop 窗口始终置顶，无法关闭**
   76 条评论 / 167 👍，仍标记 invalid 但社区持续抗议。这是 Windows 用户的最高频痛点，与 #66516、#88093 同源，官方响应态度（标 invalid）与社区情绪存在明显张力。

2. **[#91870](https://github.com/anthropics/claude-code/issues/91870) — Function Hooks：让插件强大 10 倍**
   63 条评论。由官方邀请反馈的设计提案：通过参数化 `$` 对象的副作用追踪 + 类 Express/Koa 的 `next` 续延模型，实现深度且安全的插件定制。插件生态的核心演进方向。

3. **[#53247](https://github.com/anthropics/claude-code/issues/53247) — Windows 启动失败：崩溃后残留 Silo/Job Object，仅能注销恢复**
   55 条评论的顽固 bug，涉及 AppModel-Runtime HRESULT 0x80070020，影响 Windows Desktop 可用性。

4. **[#12346](https://github.com/anthropics/claude-code/issues/12346) — GitLab 集成（仓库连接 / MR / 移动端）**
   51 条评论 / 131 👍 的长青需求。在 GitHub 集成已成标配后，GitLab 用户的呼声持续高涨。

5. **[#38698](https://github.com/anthropics/claude-code/issues/38698) — 按 Agent 级别的模型提供者路由**
   43 👍。希望 orchestrator 走 Anthropic、subagent 走本地 Ollama——混合路由是控制成本与延迟的典型诉求。

6. **[#91880](https://github.com/anthropics/claude-code/issues/91880) — CLAUDE.md（约 900 行）每次工具往返都被重发**
   上下文成本优化的新热点：超大 CLAUDE.md 与外部编辑触发的文件重读都在浪费 token，直击长会话成本问题。

7. **[#81833](https://github.com/anthropics/claude-code/issues/81833) — git worktree 会话中 auto-memory 加载不一致**
   同仓库同一天，部分会话拿到完整 MEMORY.md，部分完全没有。记忆可靠性问题的又一实证。

8. **[#91971](https://github.com/anthropics/claude-code/issues/91971) — 链式 `-p --resume` 调用 prompt cache 永不命中**
   今日新报，最小配置可复现。静态前缀缓存正常，但会话内容始终无法进入可复用缓存——对自动化工作流的成本影响巨大，恰逢 v2.1.260 增加 cache 诊断。

9. **[#78569](https://github.com/anthropics/claude-code/issues/78569) — auto-memory 的读写门机制自相矛盾**
   系统提示要求立即编辑 MEMORY.md 指针，但 read-before-write 门控确定性地拒绝该操作——auto-memory 子系统的设计缺陷。

10. **[#87180](https://github.com/anthropics/claude-code/issues/87180) — Cowork 定时任务提示词无法更新（"path traversal detected"）**
    即使单段文本也被拒绝，定时任务只建不改的僵局，影响 Cowork 日常运维。

## 四、重要 PR 进展

> 今日仅 5 个 PR 有更新，全部为社区贡献，聚焦文档与脚本质量：

1. **[#87079](https://github.com/anthropics/claude-code/pull/87079)** — 修复 `_glob_match` 中 `**` 模式无法匹配零深度路径的问题。由于 `fnmatch` 的 `*` 本身跨 `/`，导致 security-patterns.json 规则**静默漏掉顶层文件**——属于安全相关修复，值得关注是否被采纳。
2. **[#89404](https://github.com/anthropics/claude-code/pull/89404)**（@bcherny）— 修复 `validate-agent.sh` 因 `set -e` + `((x++))` 在第一个警告处中止、误报合法 agent 的问题（关联 #83803）。
3. **[#66416](https://github.com/anthropics/claude-code/pull/66416)** — 同类修复，覆盖三个 plugin-dev 验证脚本（agent、hook-linter、hook-schema），与 #89404 有重叠。
4. **[#79150](https://github.com/anthropics/claude-code/pull/79150)** — 对齐 code-review README 与当前基于验证的实现（移除已废弃的 blame agent / 置信度评分描述）。
5. **[#91894](https://github.com/anthropics/claude-code/pull/91894)**（官方 @ant-kurt）— 更新 `/frontend-design` SKILL.md，已关闭。

## 五、功能需求趋势

- **插件/Hooks 深度定制**：#91870 的 Function Hooks 提案表明社区渴望超越现有 hooks 的能力，同时 plugin-dev 验证脚本问题（#89404、#66416）显示插件开发体验仍有摩擦。
- **多平台 SCM 集成**：GitLab 集成（#12346，131 👍）是呼声最久的需求之一。
- **成本与缓存可观测**：v2.1.260 的 cache 诊断 + #91880、#91971 表明 token 成本优化是当前最强主线。
- **混合模型路由**：per-agent provider 路由（#38698）与本地模型接入持续升温。
- **身份/配置隔离**：单账号多 Profile（#91770），适合多项目与客户端分离场景。
- **持久化记忆**：跨 CLI 重启的多会话记忆（#91913）+ auto-memory 一系列 bug（#81833、#78569），记忆子系统是需求与问题并存的热区。

## 六、开发者关注点

1. **Windows Desktop 体验仍是重灾区**：窗口置顶（#85891/#88093）、启动失败（#53247）、worktree 检出失败（#91973）、Enter 键行为异常（#91972）——Windows 相关 issue 占比显著。
2. **Prompt cache 命中率**：从 `/cost` 诊断到 `-p --resume` 链式调用失效，缓存行为的不透明直接影响生产成本，是本日最值得追踪的技术线索。
3. **Auto-memory 可靠性**：加载不一致、读写门矛盾、worktree 场景失效——依赖 memory 的用户需注意验证。
4. **TUI/回归问题集中**：2.1.235 以来多个回归（AskUserQuestion 换行变 U+FFFD #88836、SSH worktree 清理失效 #88883、VS Code 面板焦点吞快捷键 #88430），升级前建议查阅。
5. **Agent 输出质量**：Bash 工具整文件 dump（#91947）、Fable 5.1 最终答案以 thinking block 形式丢失（#91939）等模型/工具行为问题持续出现。

---
*数据来源：github.com/anthropics/claude-code · 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-09-04

## 📌 今日速览

Codex 今日连发两个稳定版补丁（0.153.1 / 0.153.2），核心是为 **GPT-6-Astra 模型**铺路——先以隐藏 API 方式接入，再修正 Fast 档位描述为 "2x speed"。主分支同步合入多个重量级功能：`codex exec` 托管 Git worktree、GPT-6-Astra 登陆 Amazon Bedrock 目录、文件引用本地链接渲染等。社区侧，Windows 平台的 WSL 环境与配额重置类问题持续发酵。

---

## 🚀 版本发布

**[rust-v0.153.2](https://github.com/openai/codex/releases/tag/rust-v0.153.2)**
- 修正 GPT-6-Astra Fast 档位描述文案："1.5x" → "2x speed, increased usage"（仅展示文本，不影响请求行为）

**[rust-v0.153.1](https://github.com/openai/codex/releases/tag/rust-v0.153.1)**
- 新增通过 API 配置 GPT-6-Astra 的能力，不改变默认模型，也不在模型选择器中显示（隐藏模型接入）

**预发布**：0.154.0-alpha.1 ~ alpha.3 连续迭代中，下个 minor 版本正在加速推进。

---

## 🔥 社区热点 Issues

1. **[#41290](https://github.com/openai/codex/issues/41290)** — [Windows][WSL] 切换 Agent 环境到 WSL 后项目创建/删除失败。30 条评论、21 👍，Windows 用户最痛的问题之一。

2. **[#25779](https://github.com/openai/codex/issues/25779)** — Desktop 元问题（meta-bug）：无界 session/turn 状态导致卡死、上下文膨胀、丢失活动 turn 控制。长期存在的架构级问题，持续吸引反馈。

3. **[#31601](https://github.com/openai/codex/issues/31601)** — CLI 用量限额重置失败、配额消失。配额类问题今日多发（另见 #42660、#42346），疑似服务端对账异常。

4. **[#34337](https://github.com/openai/codex/issues/34337)** — CLI/Desktop session 存储可静默膨胀至数百 GiB 甚至 TiB 级。磁盘占用的老问题，用户诉求不只是压缩参数，而是存储架构治理。

5. **[#39121](https://github.com/openai/codex/issues/39121)** — [Windows] 桌面更新后历史本地项目消失，任务却保留，新旧数据不一致。

6. **[#41539](https://github.com/openai/codex/issues/41539)** — [Windows] Store 自动更新后应用无头启动约 12 分钟：update-policy 检查 + cua_node 运行时重解压阻塞窗口创建。Store 渠道更新体验的代表性问题（另见 [#42501](https://github.com/openai/codex/issues/42501)）。

7. **[#37934](https://github.com/openai/codex/issues/37934)** — Pro 用户遭 429 限流阻断 rate-limit-reset-credits 接口，桌面端与 Web 均无法查看重置额度。讽刺的“限流挡住限额页面”。

8. **[#41242](https://github.com/openai/codex/issues/41242)** — Windows 0.148+ 浅色主题下 composer 接近纯黑（OSC 10/11 探测被丢弃），0.150.1 仍未修复。

9. **[#42666](https://github.com/openai/codex/issues/42666)** — macOS Computer Use 辅助功能权限导致 NVIDIA Nsight Systems 崩溃（同日新报，另见 Qt Creator 崩溃 [#41374](https://github.com/openai/codex/issues/41374)），Computer Use 对第三方应用的干扰值得警惕。

10. **[#42612](https://github.com/openai/codex/issues/42612)** — CLI 自定义 subagent 的 `service_tier = "fast"` 在父会话为 Standard 时被忽略，疑似 0.153.0 回归，与今日 Astra Fast 档位更新直接相关。

---

## 🔀 重要 PR 进展

1. **[#42652](https://github.com/openai/codex/pull/42652)** — 为 `codex exec` 增加实验性托管 Git worktree：每个会话在独立 worktree 中运行，`--worktree` 标志支持新建与 fork 会话。并行 Agent 工作流的关键基础设施。

2. **[#42607](https://github.com/openai/codex/pull/42607) / [#42605](https://github.com/openai/codex/pull/42605)** — GPT-6-Astra 加入内置模型目录（含推理档位、工具能力、上下文限制与 `unified_exec`），并回port至 0.153 线。

3. **[#42619](https://github.com/openai/codex/pull/42619)** — GPT-6-Astra 登陆 Amazon Bedrock 模型目录，覆盖全球及美国跨区域变体。企业多云部署信号明显。

4. **[#42667](https://github.com/openai/codex/pull/42667)** — TUI 网络安全（cyber）拒绝提示按 Daybreak 资格定制：后台预取账户资格并缓存，展示对应申请链接或模型说明。

5. **[#42650](https://github.com/openai/codex/pull/42650)** — 助手回复中的文件引用渲染为本地文件链接，兼容 Unicode、Windows 路径分隔符与位置后缀。

6. **[#42641](https://github.com/openai/codex/pull/42641)** — 修复全屏 overlay 退出后内联 TUI 视口残留/滚动错位问题。

7. **[#42640](https://github.com/openai/codex/pull/42640)** — 统一并加固助手标记（directives）解析器：处理引号属性、嵌套大括号、转义与畸形输入，覆盖 Git 操作回执与代码注释。

8. **[#42639](https://github.com/openai/codex/pull/42639)** — 当更高优先级配置层覆盖了用户保存的模型/推理力度/服务档位默认值时显示警告，避免“保存成功但未生效”的误导。

9. **[#42606](https://github.com/openai/codex/pull/42606)** — 远程 exec WebSocket 支持受信任 HTTP 头，且跨会话重连保留（日志中脱敏），面向嵌入式宿主。

10. **[#42634](https://github.com/openai/codex/pull/42634)** — 新增 `codex-attachment-store` crate：为 ThreadManager 提供可注入、存储中立的附件持久化接口。附件系统模块化的第一步。

其他值得留意：[#42631](https://github.com/openai/codex/pull/42631) 语音宿主初始化打包 GStreamer 运行时、[#42609](https://github.com/openai/codex/pull/42609) TUI 启动警告聚合精简、[#42623](https://github.com/openai/codex/pull/42623) Noise 握手超时统一管理。

---

## 📈 功能需求趋势

- **新模型接入与多云部署**：GPT-6-Astra 是本周绝对主线（内置目录、Bedrock、Fast 档位 2x），社区关注其正式开放与 subagent 档位配置。
- **并行/隔离工作流**：托管 Git worktree、exec server、remote exec 加固，Agent 并行执行是明确的工程方向。
- **配额与用量透明度**：限额重置失败、429 阻断额度页面、周配额对账异常等 Issue 密集，用户（尤其 Pro）强烈要求可信的用量账单。
- **桌面端会话/存储治理**：session 膨胀、长对话截断、幽灵会话、rollout ordinal 冲突，本地存储架构亟需系统性重构。
- **Computer Use 稳定性**：Windows 启动阻塞与 macOS 第三方应用（Qt Creator、Nsight）崩溃并存。
- **多模态与附件**：附件存储 crate、语音 GStreamer 运行时、图片 detail 模式统一，输入形态在持续扩展。

---

## ⚠️ 开发者关注点

1. **Windows 是问题重灾区**：今日 Top 30 Issues 中约 1/3 带 `windows-os` 标签（WSL、MSIX 更新、Schannel 证书、主题渲染）。Windows 用户建议暂缓依赖 Store 自动更新。
2. **配额系统信任危机**：多个独立报告指向服务端配额对账/重置异常（#31601、#42660、#42346、#37934），直接影响付费转化意愿。
3. **0.153.0 潜在回归**：subagent service_tier 失效（#42612），使用自定义 Reviewer 配置的用户建议留意 0.153.2 或暂留 0.152.1。
4. **长会话用户成本高**：存储可达数百 GiB，建议定期清理 rollout 目录并关注 #34337 进展。
5. **升级建议**：CLI 用户可平滑升级至 0.153.2（纯文案修复）；关注 0.154.0 alpha 线的 worktree 等新能力。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-09-04）

## 一、今日速览

今日发布 v0.60.0-nightly.20260904，重点修复 MCP OAuth 流程中的 RFC 9207 issuer 标识合规问题。安全修复成为今日主线：多个 P1 级 PR 集中处理 checkpoint 路径穿越、Windows git 参数绕过等漏洞。社区讨论焦点仍集中在 Subagent 可靠性（挂起、误报成功）与 Auto Memory 隐私安全两大主题。

---

## 二、版本发布

**v0.60.0-nightly.20260904.g87a9c71d5**
- [PR #29117](https://github.com/google-gemini/gemini-cli/pull/29117)：fix(core) 在 MCP OAuth 流程中强制执行 RFC 9207 issuer 标识，提升 OAuth 安全合规性
- [PR #29196](https://github.com/google-gemini/gemini-cli/pull/29196)：自动化 nightly 版本号更新

---

## 三、社区热点 Issues

1. **Subagent 达到 MAX_TURNS 后被误报为 GOAL 成功**（P1，13 评论）
   [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — `codebase_investigator` 因轮次上限被中断却报告 `success`/`GOAL`，掩盖了任务失败。这直接影响任务结果可信度，是 agent 可观测性的核心问题。

2. **通用 Agent 无限挂起**（P1，8 评论 / 8 👍）
   [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — 简单如创建文件夹的操作也会永久挂起，用户需等待一小时以上手动取消。👍 数高，影响面广。

3. **零依赖 OS 沙箱 + 执行后意图路由**（P2，9 评论）
   [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 顺应 Gemini 3 原生 bash 使用习惯，在不牺牲安全性的前提下释放模型 POSIX 工具链能力。大型功能提案，讨论活跃。

4. **AST 感知文件读取/搜索/映射评估**（P2，7 评论）
   [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — EPIC 级调研：AST 工具可减少对齐错误的读取轮次、降低 token 噪音，配合 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) 探索 tilth/glyph 用于代码库映射。

5. **Auto Memory 缺乏确定性脱敏**（P2 安全，5 评论）
   [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — 敏感信息在脱敏提示生效前已进入模型上下文，属于隐私架构缺陷，与 #26516、#26522、#26523 构成一组系统性 Memory 质量问题。

6. **Shell 命令完成后卡在 "Waiting input"**（P1，4 评论 / 3 👍）
   [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — 简单命令执行完成后仍显示活动状态，阻塞工作流，体验痛点明显。

7. **Skills 与 Subagent 触发率过低**（P2，6 评论）
   [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — 即使任务高度相关，模型也不会自主调用自定义 skills/子代理，需显式指令。影响整个扩展生态的实用性。

8. **工具数 >128 时触发 400 错误**（P2，3 评论）
   [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — MCP 多服务器场景下极易触达上限，需要更智能的工具作用域管理。

9. **Browser Agent 忽略 settings.json 配置覆盖**（P2，3 评论）
   [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — `maxTurns` 等配置被 AgentRegistry 读取但未生效，配置一致性问题。

10. **toml 命令插值多权限请求时死循环**（今日新增）
    [#29197](https://github.com/google-gemini/gemini-cli/issues/29197) — 含多个 `!{}` 的命令模板在权限授权后循环重放，是当日新报 bug，值得复现验证。

---

## 四、重要 PR 进展

1. **[PR #29184](https://github.com/google-gemini/gemini-cli/pull/29184)**（OPEN，安全）— 修复 Windows 沙箱中 `git diff --output` 绕过确认提示静默写入/截断任意文件的漏洞，补齐 git 参数校验。

2. **[PR #29192](https://github.com/google-gemini/gemini-cli/pull/29192)**（OPEN，P1 安全）— 修复 `/chat delete ../tag` 路径穿越导致 checkpoint 目录外文件被删除的漏洞。

3. **[PR #29115](https://github.com/google-gemini/gemini-cli/pull/29115)**（OPEN）— 对系统级配置路径实施严格的权限与所有权校验（Windows ACL + POSIX），防止配置劫持。

4. **[PR #29116](https://github.com/google-gemini/gemini-cli/pull/29116)**（OPEN）— 处理 NTFS 8.3 短文件名（SFN）绕过路径规范化与 AllowedPathChecker 黑名单的问题。

5. **[PR #29172](https://github.com/google-gemini/gemini-cli/pull/29172)**（OPEN）— 注册 gemini-3.5-flash-lite 至 gemini-3.8-flash 系列模型，并将 **gemini-3.8-flash 提升为默认 flash 模型**。

6. **[PR #28939](https://github.com/google-gemini/gemini-cli/pull/28939)**（已合入，P1）— 修复中断响应占位文本 `[The previous response was interrupted...]` 被持久化为合成模型回复、并在后续轮次重复污染会话的问题。

7. **[PR #29106](https://github.com/google-gemini/gemini-cli/pull/29106)**（OPEN）— 修复 SSE 解析器在流末尾无空行时静默丢弃最后一个事件（丢失 `finishReason`/usage 数据）的问题。

8. **[PR #29110](https://github.com/google-gemini/gemini-cli/pull/29110)**（OPEN）— 将 `read_file` 统一路由至 FileSystemService，修复 ACP 客户端 `fs.readTextFile` 能力被忽略的不一致行为。

9. **[PR #29158](https://github.com/google-gemini/gemini-cli/pull/29158)**（已合入）— 清除 chrome-devtools-mcp 编译产物中硬编码的 Google CrUX API key，防止凭据随 npm 包分发泄漏。

10. **[PR #28863](https://github.com/google-gemini/gemini-cli/pull/28863)**（OPEN）— 扩展更新需用户同意环境变更，并对注入 MCP 服务进程的环境变量做净化，堵住 consent 绕过漏洞。

其他已合入：[#28930](https://github.com/google-gemini/gemini-cli/pull/28930) 移除不安全的 `diff.external` 覆盖、[#28938](https://github.com/google-gemini/gemini-cli/pull/28938) 保持 GIT_CONFIG 环境三元组一致性、[#29195](https://github.com/google-gemini/gemini-cli/pull/29195) checkpoint 数据异常时降级而非崩溃。

---

## 五、功能需求趋势

- **Subagent/Agent 编排可靠性**：最大声量方向——挂起（#21409）、误报成功（#22323）、触发率低（#21968）、配置失效（#22267）持续累积。
- **安全加固**：沙箱逃逸、路径穿越、凭据脱敏、consent 校验构成本周 PR 主线，官方显然在系统性收敛攻击面。
- **代码理解精度（AST-aware）**：AST 读取/搜索/映射（#22745、#22746）与 "Tactful Extraction" 省 token 精读（#19561）呼应，社区关注上下文成本优化（当前约 36.6k tokens/轮）。
- **新模型支持**：gemini-3.8-flash 系列进入默认配置（PR #29172），flash 线快速迭代。
- **Memory 系统成熟化**：Auto Memory 的脱敏、重试、inbox 补丁校验（#26516/#26522/#26523/#26525）形成集中修复工作流。
- **可观测性与调试**：bug report 缺少 subagent 上下文（#21763）、子代理轨迹需通过 `/chat share` 可见（#22598）。

---

## 六、开发者关注点

- **可靠性阻塞工作流**：Agent 挂起、Shell 卡在等待输入、交互式提示死锁（#22465）是高频痛点，用户被迫通过提示词规避 subagent。
- **结果可信度**：任务被中断却报成功，开发者无法信任 agent 的自报状态，亟需准确的中断/失败语义。
- **Windows 支持短板**：NTFS 短路径、git 参数绕过、longpaths 开发环境问题集中出现，Windows 用户体验明显滞后。
- **隐私与凭据安全**：Auto Memory 先发送后脱敏的设计、编译产物中的 API key 引发对数据流向的担忧。
- **扩展性限制**：128 工具上限、symlink agent 不识别（#20079）等边界问题影响 MCP 重度用户。

---
*数据来源：github.com/google-gemini/gemini-cli | 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-04 | 数据来源：github.com/github/copilot-cli**

---

## 一、今日速览

过去 24 小时，Copilot CLI 连发两个补丁版本（v1.0.83-5 / v1.0.83-4），重点强化 Windows 11 任务栏集成体验与 MCP OAuth 安全性，并显著收紧沙箱命令的本机服务访问权限。社区方面，MCP 兼容性（协议初始化、OAuth token 复用）和长会话稳定性（OOM、恢复缓慢）仍是讨论焦点，企业用户对 Marketplace 管控和遥测配置的诉求持续升温。

---

## 二、版本发布

### [v1.0.83-5](https://github.com/github/copilot-cli/releases)
- **新增**：Windows 11 任务栏显示运行中的 Copilot 会话，悬停可查看实时状态卡片
- **改进**：macOS/Linux 上沙箱命令不再能访问本机运行的服务；macOS 上同时阻止命令自身在 127.0.0.1 启动服务器（⚠️ 可能影响依赖本地服务的测试套件）

### [v1.0.83-4](https://github.com/github/copilot-cli/releases)
- **新增**：为 MCP OAuth 登录支持 Client ID Metadata Document (CIMD)
- **改进**：CLI 启动时默认跳过中断会话恢复提示；恢复大会话时输入提示更快恢复响应
- **修复**：沙箱文件工具与开发者工具读取规则对齐

---

## 三、社区热点 Issues

**1. [#4525](https://github.com/github/copilot-cli/issues/4525) — MCP 初始化协议倒退引发 -32022 错误**
1.0.81-1 在成功完成现代 `server/discover` 探测后仍发送旧版 `initialize`，导致使用 Python MCP SDK 2.0.0 双时代运行器的 stdio 服务器初始化失败。MCP 生态兼容性的核心问题，6 条评论持续跟进中。

**2. [#4695](https://github.com/github/copilot-cli/issues/4695) — MCP OAuth token 跨会话复用不可靠**
HTTP 类型 MCP 服务器（PKCE 公共客户端）出现重复 cache-key 条目，迫使反复重新认证。与 v1.0.83-4 的 CIMD 支持发布时间点高度相关，值得关注官方回应。

**3. [#4699](https://github.com/github/copilot-cli/issues/4699) — 长会话 `--resume` 触发 V8 堆 OOM 崩溃**
1.0.82 版本 14 小时内 3 次在 4 GiB 堆上限崩溃，且崩溃转储文件写入用户当前目录污染工作区。严重稳定性问题，与 v1.0.83-4 的会话恢复优化形成对照。

**4. [#3442](https://github.com/github/copilot-cli/issues/3442) — 远程会话企业策略误报（已关闭）**
v1.0.51 起 `/remote on` 报“联系管理员启用”，10 👍 的老问题终于关闭，说明企业策略判断逻辑已修复。

**5. [#2861](https://github.com/github/copilot-cli/issues/2861) — Opus 4.6 手动 /compact 连续失败**
短会话压缩三次重试均返回空响应，上下文管理在大模型场景下的可靠性问题。

**6. [#4655](https://github.com/github/copilot-cli/issues/4655) — Agent Plugins 1.0 自定义 agent 未被发现**
按规范放置于 `com.github.copilot/agents` 的自定义 agent 无法被识别，阻碍插件生态发展。

**7. [#4683](https://github.com/github/copilot-cli/issues/4683) — PowerShell ConstrainedLanguage 模式下每条命令报虚假错误**
企业 AppLocker/WDAC 环境中 `$host.SetShouldExit()` 被禁用导致每个 shell 命令都输出错误块，企业 Windows 环境的适配痛点。

**8. [#4710](https://github.com/github/copilot-cli/issues/4710) — `copilot-file-search` 后台线程失控**
会话空闲时内部搜索线程持续占用 CPU 核心并写入无上限日志，资源管理缺陷。

**9. [#4696](https://github.com/github/copilot-cli/issues/4696) — allow-all 模式长时间闲置后静默重置**
`--yolo` 权限在机器休眠唤醒后丢失，影响自动化工作流连续性。

**10. [#4715](https://github.com/github/copilot-cli/issues/4715) — 要求支持屏蔽内置插件 Marketplace**
企业用户希望隐藏 `copilot-plugins` / `awesome-copilot`，只保留内部 Marketplace，反映企业治理需求上升。

---

## 四、重要 PR 进展

过去 24 小时内无活跃 PR 更新（共 0 条），本期省略。

---

## 五、功能需求趋势

| 方向 | 代表 Issue | 说明 |
|---|---|---|
| **企业管控与治理** | #4715, #4696, #3442 | 屏蔽内置 Marketplace、权限持久化、远程会话策略 |
| **会话管理与恢复** | #4704, #4714, #4699 | 按目录过滤会话、恢复加载 UI、OOM 修复 |
| **MCP 生态兼容性** | #4525, #4695, #4655 | 协议版本协商、OAuth token 复用、插件发现 |
| **模型与 Provider 灵活性** | #4218, #4703, #232 | Auto 模式模型池配置、per-agent Provider、`--system-prompt` 参数 |
| **平台适配** | #4683, #4702, #4716 | Windows ConstrainedLanguage、路径分隔符去重、WSL2 语音输入 |
| **Subagent 能力扩展** | #4708, #4703 | 子代理访问 skills、多端点路由 |

其中 **#4218**（Auto 模式模型池，13 👍）和 **#232**（系统提示词参数，10 👍）是长期高票需求，值得关注官方排期。

---

## 六、开发者关注点

1. **长会话稳定性是最大痛点**：OOM 崩溃（#4699）、恢复缓慢无 UI（#4714）、扩展启动失败（#4717）、队列卡死（#4705）集中爆发，虽然 v1.0.83-4 有所改善但未根治。
2. **MCP 双轨协议过渡期阵痛持续**：新旧协议版本混用导致的初始化失败和认证问题在新版中依然存在。
3. **企业环境适配呼声强烈**：WDAC/AppLocker、OTEL 遥测配置（#4669）、Marketplace 管控等问题表明企业用户占比上升。
4. **沙箱安全与可用性的平衡**：v1.0.83-5 收紧本机服务访问可能破坏依赖 localhost 的测试套件，升级前建议评估影响。
5. **权限与资源管理细节**：allow-all 静默重置、后台线程失控等反映出资源生命周期管理仍需打磨。

---

*本报告基于过去 24 小时 GitHub 公开数据自动生成，链接均指向对应 Issue/Release 页面。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-09-04 | 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)**

---

## 📌 今日速览

今日无新版本发布，社区焦点集中在一条**高优先级新 Issue**：#2633 指出 1.17+ 版本的 ACP 认证门槛会阻断无需 Kimi 账号的自定义 Provider，直接影响企业/自托管场景使用。此外，多条历史 Issue 被集中关闭，疑似进行 Issue 清理或功能已落地。

---

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues

今日实际更新 7 条，全部列出：

1. **#2633 [OPEN] ACP auth gate (1.17+) 阻断无需 Kimi 账号的自定义 Provider** ⭐ 今日最值得关注
   1.17.0 起 ACP 服务器对 `session/new`、`session/load`、`session/prompt` 等会话操作无条件要求已持久化的 Kimi OAuth token，导致纯自定义 Provider 用户被完全阻断。属于回归性权限设计问题，尚无官方回复。
   → [Issue #2633](https://github.com/MoonshotAI/kimi-cli/issues/2633)

2. **#290 [CLOSED] OpenRouter 自定义模型返回 401**
   使用 `openai/gpt-5.1-codex` 模型时鉴权失败的兼容性问题，已关闭，或已通过 Provider 配置改进解决。
   → [Issue #290](https://github.com/MoonshotAI/kimi-cli/issues/290)

3. **#1293 [CLOSED] 远程 SSH 服务器（无 GUI）上无法通信**
   反映了无图形界面、无法修改系统 DNS 的服务器环境下 CLI 的网络可用性痛点，已关闭。
   → [Issue #1293](https://github.com/MoonshotAI/kimi-cli/issues/1293)

4. **#1311 [CLOSED] 请求增加 undo 功能**（👍 1）
   参照 opencode 的 undo 机制，希望支持回滚文件修改。对安全编码场景是刚需。
   → [Issue #1311](https://github.com/MoonshotAI/kimi-cli/issues/1311)

5. **#1310 [CLOSED] WebUI 中内联渲染 Mermaid 图表**（👍 1）
   仓库已有 Mermaid 解析能力，社区希望 WebUI 端补齐渲染支持。
   → [Issue #1310](https://github.com/MoonshotAI/kimi-cli/issues/1310)

6. **#1309 [CLOSED] 可选的 Openclaw 类功能（心跳、cron、记忆）**
   提议集成轻量 Agent 记忆与定时任务能力，已关闭（可能转入其他提案）。
   → [Issue #1309](https://github.com/MoonshotAI/kimi-cli/issues/1309)

7. **#1307 [CLOSED] 为 `kimi web` 增加 `--agent-file` 支持**（👍 3）
   CLI 已支持 `--agent-file`，WebUI 缺失导致只能加载默认 Agent；作者自称已实现，属于 API 一致性改进，社区支持度最高。
   → [Issue #1307](https://github.com/MoonshotAI/kimi-cli/issues/1307)

---

## 🔧 重要 PR 进展

今日仅 1 条 PR 更新：

1. **#2332 [CLOSED] fix(kimi): 动态钳制 completion budget**
   移除 Kimi Provider 硬编码的 `max_tokens = 32000`，改为按请求计算适配当前上下文窗口的 `max_completion_tokens`。这是长上下文输出截断问题的潜在修复方案，值得后续跟踪是否以其他形式合入。
   → [PR #2332](https://github.com/MoonshotAI/kimi-cli/pull/2332)

---

## 📈 功能需求趋势

- **自定义 Provider 与开放生态**：最高频方向（#290、#2633），社区强烈要求摆脱 Kimi 账号绑定、顺畅接入 OpenRouter 等第三方模型。
- **WebUI 功能对齐**：`--agent-file`、Mermaid 渲染等诉求表明 WebUI 与 CLI 能力存在差距。
- **操作安全与可逆性**：undo/回滚类功能是编码 Agent 的刚需。
- **Agent 持久化能力**：心跳、定时任务、记忆系统等“常驻 Agent”特性开始受到关注。

## ⚠️ 开发者关注点

1. **1.17+ ACP 认证回归**是当前最紧迫的痛点，影响自托管与多 Provider 用户的正常使用，建议关注官方回应。
2. **服务器/无头环境兼容性**（#1293）：远程 SSH 场景的网络配置限制需要更优雅的降级方案。
3. **max_tokens 硬编码**（PR #2332）提示输出长度与上下文窗口管理仍需打磨，长输出场景用户可能遇到截断。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-09-04

## 📰 今日速览

今日无新版本发布，但 PR 活动非常活跃：桌面端 **Plugin Manager（插件管理器）**、**浏览器插件与 Chromium 诊断**、**工具命名空间（tool namespaces）** 等重量级功能相继推进。同时两条长热的 Ctrl+C 退出问题（#2999、#7957）持续发酵，社区对终端快捷键冲突的不满仍是最大痛点。

---

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues

1. **#2999 — 提供禁用 Ctrl-C 的手段**（OPEN，38 评论 / 27 👍）
   Windows 用户在 WezTerm / Windows Terminal 下按 Ctrl+C 复制即导致程序崩溃退出，长期未解决，是社区呼声最高的 UX 问题之一。
   [链接](https://github.com/anomalyco/opencode/issues/2999)

2. **#7957 — [UX] Ctrl+C 不应退出 OpenCode**（OPEN，18 评论 / 53 👍）
   与 #2999 同源，👍 数最高（53），强调 Ctrl+C 与通用复制快捷键冲突，亟需官方响应。
   [链接](https://github.com/anomalyco/opencode/issues/7957)

3. **#17994 — 多 Agent 编排在隔离 workspace 中运行**（CLOSED，24 评论）
   希望内置类似“编码 Agent 团队”的并行隔离工作区能力，反映多 Agent 协作已成为核心需求。
   [链接](https://github.com/anomalyco/opencode/issues/17994)

4. **#29059 — 动态 workflows 支持可重复多步自动化**（CLOSED，17 评论 / 22 👍）
   对标 Claude Code 新功能，请求项目级 workflow 定义，社区认同度高。
   [链接](https://github.com/anomalyco/opencode/issues/29059)

5. **#31348 — GLM-5.1 prompt cache 随机归零**（CLOSED，7 评论 / 7 👍）
   长会话中 GLM-5.1 缓存命中率随机降为 0 导致成本激增，而 DeepSeek V4 Flash 稳定，涉及真实成本问题。
   [链接](https://github.com/anomalyco/opencode/issues/31348)

6. **#28566 — OpenRouter service_tier 支持以降低模型成本**（CLOSED，7 评论）
   请求暴露 OpenRouter 的 `service_tier` 参数，方便用户在延迟与成本间权衡。
   [链接](https://github.com/anomalyco/opencode/issues/28566)

7. **#34117 / #34235 — v1.17.11 Nix/源码构建因 stale bun.lock 失败**（CLOSED，4+3 评论）
   `bun install --frozen-lockfile` 与仓库内 `bun.lock` 不一致，影响从源码与 Nix 构建的用户，属发布流程质量问题。
   [链接](https://github.com/anomalyco/opencode/issues/34117) | [链接](https://github.com/anomalyco/opencode/issues/34235)

8. **#24694 — 非 git 项目以 "/" 作为 worktree，破坏权限路径解析**（CLOSED，6 评论）
   `Project.fromDirectory` 在非 git 目录下设置 `worktree: "/"`，导致权限路径匹配失效，安全隐患值得注意。
   [链接](https://github.com/anomalyco/opencode/issues/24694)

9. **#33677 — `edit` 权限对 edit/write 工具调用未生效**（CLOSED，3 评论）
   `permission.edit` 配置不触发 ask 提示，而 `bash`/`webfetch` 正常——权限体系的一致性问题。
   [链接](https://github.com/anomalyco/opencode/issues/33677)

10. **#47205 — Zen 付费用户中国无法使用，请求退款**（OPEN，2 评论）
    商业化合规/支付可用性问题，已打上 `needs:compliance` 标签，值得关注 Zen 服务在受限地区的处理方式。
    [链接](https://github.com/anomalyco/opencode/issues/47205)

---

## 🔧 重要 PR 进展

1. **#47180 — 桌面端 Plugin Manager**（已合并）🔥
   在设置对话框中新增 Plugins 标签页，聚合官方文档、awesome-opencode、opencode.cafe 三方目录及 npm 元数据，支持浏览/安装/管理插件。
   [链接](https://github.com/anomalyco/opencode/pull/47180)

2. **#44838 — 桌面端浏览器标签页与 Chromium 诊断**（OPEN）
   Review 面板支持多标签浏览、用户与 Agent 共享 tab 所有权、输入操作与跨域 frame 检查。
   [链接](https://github.com/anomalyco/opencode/pull/44838)

3. **#46531 — 公共 API 浏览器插件**（OPEN）
   新增 44 个命名空间化的 Code Mode 方法（tabs/交互/快照/审计），独立为 `@opencode-ai/plugin-browser` 包。
   [链接](https://github.com/anomalyco/opencode/pull/46531)

4. **#46548 — 工具命名空间（tool namespaces）**（OPEN）
   递归、provider 中立的工具树定义，支持规范化/去重/预算控制，并原生降级适配 OpenAI Responses 等路由——为大规模工具组织铺路。
   [链接](https://github.com/anomalyco/opencode/pull/46548)

5. **#47166 — 持久化 heartbeat 监控 + 时间线 UI**（已合并）
   长时间运行外部命令的定时健康检查，计划跨重启持久化，Web 端以可折叠时间线卡片展示。
   [链接](https://github.com/anomalyco/opencode/pull/47166)

6. **#47197 — 按 Agent 独立记忆模型选择**（OPEN）
   每个 primary agent 保持独立模型选择，模型切换仅作用于当前 agent，含回归测试。
   [链接](https://github.com/anomalyco/opencode/pull/47197)

7. **#47160 — Copilot 请求分类修复**（已合并）
   修复 AI SDK 路由（GPT 等）绕过 HTTP 中间件导致 `X-Interaction-Type` 未设置的问题。
   [链接](https://github.com/anomalyco/opencode/pull/47160)

8. **#46530 — 插件权限断言 API**（OPEN）
   为插件新增 `ctx.permission.assert()`，在浏览器 tab 操作与文件上传前强制权限检查，安全增强。
   [链接](https://github.com/anomalyco/opencode/pull/46530)

9. **#46726 — TUI 启动探测失败时干净退出**（OPEN）
   修复后台服务冷启动期间 TUI 探测失败导致的问题（Fixes #36688），与连接稳定性相关。
   [链接](https://github.com/anomalyco/opencode/pull/46726)

10. **#47204 — 事件流断连时指数退避重连**（OPEN）
    替换固定 1 秒重试为退避策略，避免未认证会话的无效重连风暴（Fixes #47062）。
    [链接](https://github.com/anomalyco/opencode/pull/47204)

---

## 📈 功能需求趋势

- **多 Agent 与编排**：隔离 workspace 团队协作（#17994）、Task 工具指定子 agent 模型（#26925）、worktree 隔离 CLI flag（#35471）——多 Agent 是最集中的方向。
- **自动化工作流**：项目级动态 workflows（#29059）、prompt 前后 hooks（#47087）、消息拦截/取消（#30434）。
- **浏览器与桌面能力**：浏览器插件（#46531/#44838）、插件管理器（#47180）显示桌面端生态加速建设。
- **成本控制**：OpenRouter service_tier（#28566）、GLM-5.1 缓存问题（#31348）反映对 token 成本的可观测与可控需求。
- **可观测性**：OTEL 环境变量文档需求被重复提出（#47195、#35394）。
- **插件 API 深化**：向 v2 插件暴露更多 session API（#35443）、权限断言（#46530）。

---

## ⚠️ 开发者关注点

1. **Ctrl+C 退出问题**（#2999 / #7957，合计 80+ 👍）：Windows 用户最大痛点，长期悬而未决。
2. **构建可复现性**：v1.17.11 的 stale `bun.lock` 导致 Nix/源码构建失败（#34117 / #34235），提示发布流程 lockfile 校验缺失。
3. **权限体系一致性**：`edit` 权限不生效（#33677）、非 git 项目路径解析异常（#24694）。
4. **连接稳定性与错误诊断**：API 超时（#35483）、TUI 无响应（#35474）、工具调用"terminated"无详情（#35485）——错误信息可观测性不足。
5. **桌面端健壮性**：渲染进程崩溃（#35493）、配置校验错误可能清空合法配置（#35419）、项目重命名互相影响（#35441）。
6. **安装渠道信任**：Homebrew tap 信任警告（#32072）、WSL 安装语法错误（#29210），首次体验链路仍有摩擦。

---
*数据来源：github.com/anomalyco/opencode | 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-04

## 📰 今日速览

Qwen Code 发布 **v0.23.0**，Git 分支选择器新增状态提示功能。社区今日焦点集中在 **OpenTUI 渲染层迁移**、多个 **P1 安全漏洞**（Bash 允许规则绕过、git config 命令执行入口），以及 CI 依赖审计从失败到清零（PR #10985）的快速闭环。Web Shell 方向持续高密度迭代，shell/monitor 输出可视化与 Session Workflow 导航优化均有新 PR 落地。

---

## 🚀 版本发布

### v0.23.0（无破坏性变更）

- **Features**：分支选择器（branch picker）现可在 Update Project、Commit、Push 旁显示 Git 状态提示（如 `↓3 · origin/main`、`Up to date`），提升版本控制操作的可视性。

🔗 [Release v0.23.0](https://github.com/QwenLM/qwen-code/releases)

---

## 🔥 社区热点 Issues

**1. [#8662] TUI 渲染层从 ink 迁移到 OpenTUI（跟踪 Issue）** — 28 评论 🏆
最大讨论热点的架构级工程：当前 TUI 基于 ink 7 + React 19，携带约 1037 行 patch 和自定义 Virtual Viewport，闪烁等问题难以在 ink 框架内根治。迁移跟踪帖持续吸引社区关注。
🔗 [Issue #8662](https://github.com/QwenLM/qwen-code/issues/8662)

**2. [#10850] P1：依赖 CVE 审计 repo 级失败** — 3 评论
`npm audit --omit=dev` 报 4 个漏洞（含 1 个 high），CI 全线飘红。今日已有 PR #10985 清零，响应速度值得肯定。
🔗 [Issue #10850](https://github.com/QwenLM/qwen-code/issues/10850)

**3. [#10192] P1 安全：Bash 允许规则可被环境赋值中的命令替换绕过** — 3 评论
攻击者可通过前置环境赋值中的 `$()` 命令替换，将需确认的命令转为 allow 决策。与 #10197 同为 shell 安全类漏洞，已 ready-for-human。
🔗 [Issue #10192](https://github.com/QwenLM/qwen-code/issues/10192)

**4. [#10197] P1 安全：静态 loader 环境赋值绕过 Bash 允许规则** — 3 评论
即使不含命令替换，剥离前导环境赋值也可能改变允许程序运行时语义并触发额外代码执行。
🔗 [Issue #10197](https://github.com/QwenLM/qwen-code/issues/10197)

**5. [#10561] P1 安全 review：命令执行类配置键是开放入口** — 3 评论
来自 #10421 的二轮 review：fsmonitor、hooks 及用户全局 config 等多个 git config 键可让任意 git spawn 执行攻击者代码，属类别性发现。
🔗 [Issue #10561](https://github.com/QwenLM/qwen-code/issues/10561)

**6. [#10065] LM Studio 0.4.21 请求失败："failed to parse grammar"** — 8 评论
本地部署用户核心痛点：即使无 MCP 服务器且 `tools.core=[]`，OpenAI 兼容 API 请求仍因语法解析失败。影响本地模型使用体验。
🔗 [Issue #10065](https://github.com/QwenLM/qwen-code/issues/10065)

**7. [#10908] CI 测试时间受限于模块导入成本而非调度** — 5 评论
cli workspace 的 collect 时间（2223s）远超测试本身（1372s），性能债影响所有发布节奏。
🔗 [Issue #10908](https://github.com/QwenLM/qwen-code/issues/10908)

**8. [#10953] 子代理委派期间 Todo 计划状态冻结 55 分钟** — 4 评论
真实 dogfooding 会话中，前台 subagent 工作推进了 4 个计划节点，但持久化 Todo 计划停摆，active-todo 提醒从未触发。
🔗 [Issue #10953](https://github.com/QwenLM/qwen-code/issues/10953)

**9. [#10791] 平衡的 content-only `<thinking>` 块仍泄漏到用户可见输出** — 4 评论
混合推理模型在 content 中输出完整闭合的思考标签时，现有防御只拦截未闭合形态。标记 welcome-pr，适合贡献者上手。
🔗 [Issue #10791](https://github.com/QwenLM/qwen-code/issues/10791)

**10. [#10583] feat：Linux 轻量级 Bubblewrap 沙箱后端** — 5 评论
社区强烈期待在 Docker/Podman 之外提供 bwrap 原生沙箱，实现无容器依赖的 OS 级隔离。
🔗 [Issue #10583](https://github.com/QwenLM/qwen-code/issues/10583)

*其他值得留意：[#9666](https://github.com/QwenLM/qwen-code/issues/9666) Windows 中文 IME 候选框低对比度（P2）、[#10932](https://github.com/QwenLM/qwen-code/issues/10932) 语音听写不支持 Token Plan ASR 新模型 ID。*

---

## 🔧 重要 PR 进展

**1. [#10987] fix(cli)：OpenTUI 从实时输入提交精确斜杠命令**
解决 Enter 提交决策依赖上一次 React render 产生的补全状态的竞态问题，精确 `/quit` 必须提交。同日还有平行修复 [#10986](https://github.com/QwenLM/qwen-code/pull/10986)。
🔗 [PR #10987](https://github.com/QwenLM/qwen-code/pull/10987)

**2. [#10906] feat(web-shell)：Shell 与 Monitor 任务输出可视化**
Monitor stdout/stderr 与 Shell 捕获一同持久化，daemon 暴露 live-session-owner 范围的卫生化尾部端点。
🔗 [PR #10906](https://github.com/QwenLM/qwen-code/pull/10906)

**3. [#10985] chore(deps)：清零 CVE 审计发现**
diff 升级到 v8 修复 DoS、uuid 补上边界检查，配合 #10862 实现审计零漏洞，直接闭环 Issue #10850。
🔗 [PR #10985](https://github.com/QwenLM/qwen-code/pull/10985)

**4. [#10947] fix(cli)：OpenTUI 中命令、/clear 与 steer 的转录可见性**
修复双历史问题：斜杠命令的输出（审批模式变更、拒绝提交、退出摘要等）此前记录在无人读取的 store 中。
🔗 [PR #10947](https://github.com/QwenLM/qwen-code/pull/10947)

**5. [#10988] refactor(cli)：统一 runtime-root pin 到 runWithPinnedRuntimeBaseDir**
将 5 处手工拼接的 per-request 运行时根目录路由收敛到单一入口，与已关闭的 #10094（多 workspace 会话错路由）同源。
🔗 [PR #10988](https://github.com/QwenLM/qwen-code/pull/10988)

**6. [#10980] docs(auth)：补全 Token Plan 配置文档**
对接 Issue #10620，含中国/北京与新加坡/国际端点区域表、env key 与 settings.json 示例。
🔗 [PR #10980](https://github.com/QwenLM/qwen-code/pull/10980)

**7. [#10938] feat(web-shell)：Session Workflow 依赖可导航化 + 界面降噪**
计划 DAG 以步骤而非状态为主导，配合 inspector 设计优化，补齐 #8583 之后的导航与文档缺口。
🔗 [PR #10938](https://github.com/QwenLM/qwen-code/pull/10938)

**8. [#10643] feat(channels)：worktree 隔离的命名任务**
`/session new <name> --worktree` 实现 daemon 管理任务的 Git worktree 独占隔离，含持久化 sidecar 与所有权验证。
🔗 [PR #10643](https://github.com/QwenLM/qwen-code/pull/10643)

**9. [#10919] ci：修补 lint lane 二轮 review 发现的 9 个防护漏洞**
包括替换 prelude-identity 序列化器（JSON.stringify 数组 replacer 导致嵌套 `with:`/`env:` 比较为 `{}` 的深层 bug）。
🔗 [PR #10919](https://github.com/QwenLM/qwen-code/pull/10919)

**10. [#10921] fix(ci)：ECS runner 解析等待延长至 60 分钟预算**
针对 #10911 报告的 fleet 更新失败，registry 等待 25→90 分钟，覆盖发布链路延迟。
🔗 [PR #10921](https://github.com/QwenLM/qwen-code/pull/10921)

---

## 📈 功能需求趋势

1. **终端渲染现代化（OpenTUI 迁移）**：#8662 及配套 PR 密集推进，TUI 是当前最大工程主线。
2. **Web Shell / 多端体验**：#10906、#10938、#10627、#10989 等持续迭代，VS Code companion 的一致性问题开始暴露。
3. **安全加固**：Shell 允许规则绕过（#10192/#10197）、git config 命令执行入口（#10561）、轻量沙箱（#10583）——安全议题权重明显上升。
4. **Daemon / 会话管理**：无 workspace 独立会话（#8908）、会话轮换（PR #8927）、ACP 通道饱和优雅降级（#10162）。
5. **CI/工程效能**：测试导入成本优化（#10908）、ECS fleet 稳定性（#10911/#10921）。
6. **新模型/服务接入**：Token Plan ASR 模型 ID（#10932）、Token Plan 文档（#10620/#10980）。

---

## 🎯 开发者关注点

- **本地模型兼容性是高频痛点**：LM Studio 语法解析失败（#10065）反映 OpenAI 兼容 API 路径的健壮性不足，需关注第三方推理后端的兼容测试。
- **中文/国际化输入体验**：Windows IME 候选框低对比度（#9666）长期未解，影响中文用户核心输入流。
- **子代理与主会话状态同步**：Todo 计划冻结（#10953）表明 subagent 委派模式的状态管理存在架构缺口。
- **CI 是发布的隐形瓶颈**：E2E 从未通过的用例（#10903）、模块导入开销（#10908）、ECS fleet 卡死（#10911）三项叠加，直接拖慢发布节奏。
- **安全响应速度值得肯定**：从 CVE 审计失败到清零 PR 仅用两天，shell 类漏洞均已 triage 至 ready-for-human。

---

*数据来源：github.com/QwenLM/qwen-code 过去 24 小时 Release / Issue / PR 更新（Issues 50 条，PRs 50 条）*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-09-04

## 1. 今日速览

今日项目无新版本发布，社区活跃度集中在代码层面：4 个 Issue 更新、8 个 PR 有进展。ACP（Agent Client Protocol）相关缺陷成为焦点，两位开发者分别报告了 `serve --acp` 缺少会话配置暴露和 `session/list`/`session/load` 实现的问题，表明编辑器/IDE 集成是当前最迫切的需求。PR 方面，0.9.12 的 UX 大版本集成（#5862）已合并，涉及 workbar 重命名、水下主题默认化等 10 个切片。

## 2. 版本发布

过去 24 小时无新 Release。但 PR #5862 已合并 0.9.12 UX 系列改动，可视为下一个版本的预兆。

## 3. 社区热点 Issues

今日仅 4 条 Issue 更新，全部列出：

| # | 标题 | 关注理由 |
|---|------|---------|
| [#5316](https://github.com/Hmbown/Codewhale/issues/5316) | EPIC-005: TUI Crate Decomposition (Umbrella) | 长期跟踪 Issue，21 条评论，管理整个 TUI 拆解史诗级重构，是理解项目架构演进的主线 |
| [#5863](https://github.com/Hmbown/Codewhale/issues/5863) | ACP Function Enhancement | `serve --acp` 未暴露会话配置（modes/models/configOptions），导致编辑器客户端无法切换工作模式，直接影响 IDE 集成体验 |
| [#5864](https://github.com/Hmbown/Codewhale/issues/5864) | ACP session/list 与 session/load 缺失 | ACP 客户端无法枚举或恢复已有会话，与 #5863 同属 ACP 协议完整性缺口 |
| [#5866](https://github.com/Hmbown/Codewhale/issues/5866) | 眼科 CPT/ICD-10 更新 | ⚠️ 外链营销内容，疑似 spam，建议维护者关注并处理 |

## 4. 重要 PR 进展

| # | 标题 | 类型 | 内容 |
|---|------|------|------|
| [#5862](https://github.com/Hmbown/Codewhale/pull/5862) ✅ | Codewhale 0.9.12: Fleet-only UX | feat | 0.9.12 发布集成：hover 契约统一、sidebar/rail 重命名为 workbar、设置重组、logo、retro 主题等 10 个切片 |
| [#5833](https://github.com/Hmbown/Codewhale/pull/5833) ✅ | FEAT-019 记忆能力 | feat | 新增 MEMORY 能力位、TUI 记忆适配器，支持 search/remember/export/reindex 等类型化操作，改造 `/memory` 命令 |
| [#5858](https://github.com/Hmbown/Codewhale/pull/5858) ✅ | ocean_treatment 合并为 ThemeId::Underwater | refactor | 主题系统收敛，11 个提交：深海新别名、单选列表、只读配置迁移、主题重绘等 |
| [#5843](https://github.com/Hmbown/Codewhale/pull/5843) ✅ | 类型化配置与 Schema 对齐 | refactor | 配置清理：类型化主题支持自定义主题、清理孤儿 locale 键，低风险 |
| [#5869](https://github.com/Hmbown/Codewhale/pull/5869) 🔄 | 修复 job 快照任务来源标识 | fix | 后台 shell 任务快照缺少稳定 origin ID，多任务场景下错误输出可能投射到错误的工具卡片上 |
| [#5868](https://github.com/Hmbown/Codewhale/pull/5868) 🔄 | OpenCode Go/Zen 发送 x-opencode-session 头 | feat | 遵循 OpenCode Go 规范发送稳定会话头，优化 prompt 缓存与流量归因 |
| [#5867](https://github.com/Hmbown/Codewhale/pull/5867) 🔄 | 新增 [reasoning_only] 配置段 | feat | 将硬编码的推理模型重试次数（原为 2 次）改为用户可配置 |
| [#5865](https://github.com/Hmbown/Codewhale/pull/5865) 🔄 | 重落地 FEAT-020 插件命令结构 | refactor | EPIC-005 拆解工作的一部分，将插件命令切片重新合入 main |

## 5. 功能需求趋势

- **ACP/编辑器集成（最强信号）**：#5863、#5864 两条 Issue 均指向 `serve --acp` 协议实现不完整，社区希望以 Zed 等 ACP 客户端获得与原生 TUI 等价的能力（模式切换、会话恢复）。
- **可配置性**：#5867 反映用户希望将引擎内部行为（推理重试）暴露为配置项。
- **架构模块化**：EPIC-005 umbrella（#5316）持续推进 crate 拆解，FEAT-019/020 相继落地，项目正从单体 TUI 向组件化演进。
- **主题与 UX 打磨**：0.9.12 大量 UX 切片（workbar、hover、主题统一）表明 Fleet 用户体验是投入重点。

## 6. 开发者关注点

- **ACP 协议完整性**是最集中的痛点：会话枚举/恢复（session/list、session/load）和工作模式暴露缺失，阻碍编辑器场景落地。
- **可观测性与调试**：#5869 揭示的后台任务来源标识缺失问题，说明多任务并发下事件归属仍需依赖启发式匹配，稳定性有待提升。
- **Provider 兼容性**：OpenCode Go 的会话头支持（#5868）体现社区对新 provider 接入细节的关注。
- **治理提示**：出现疑似医疗账单营销 spam Issue（#5866），建议维护团队加强 Issue 审核。

---
*数据来源：github.com/Hmbown/DeepSeek-TUI（跨仓库 Hmbown/Codewhale）| 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-09-04

## 今日速览

今日无新版本发布，但社区活跃度依然很高：共 81 条 Issue 更新、50 条 PR 更新。最引人注目的是 @mitsuhiko 的系统提示词重构草案（#8998）和新增 Meta Muse 订阅提供商的重要 PR（#9096）。同时，多个信号量退出码、二进制附件损坏等关键 bug 修复陆续合入。

---

## 版本发布

过去 24 小时无新 Release。

---

## 社区热点 Issues

1. **#5023** [CLOSED] 终端无端滚动到会话开头 — 老牌高热 bug（18 条评论、3 👍），模型输出时随机跳滚，影响日常使用体验，已修复关闭。
   [链接](https://github.com/earendil-works/pi/issues/5023)

2. **#8845** [CLOSED] 分支摘要确定性失败 — `generateBranchSummary` 硬编码 `maxTokens: 2048`，大分支 `/tree` Summarize 必定截断（14 条评论），属硬编码导致的典型缺陷。
   [链接](https://github.com/earendil-works/pi/issues/8845)

3. **#8061** [OPEN] 上下文预算忽略 maxTokens 输出预留 — 输入仅占 78% 就被 400 拒绝，且 compact-retry 二次失败。上下文管理核心问题，仍开放中。
   [链接](https://github.com/earendil-works/pi/issues/8061)

4. **#8760** [OPEN] OpenRouter `:free` 模型全部 400 — Pi 发送的 `max_tokens` 超出免费模型上游硬限制，影响面广。
   [链接](https://github.com/earendil-works/pi/issues/8760)

5. **#6817** [OPEN] Windows 下 `src/**/*.ts` 类路径模式搜索无结果 — find 工具对含路径分隔符的 glob 处理有误，Windows 用户核心痛点。
   [链接](https://github.com/earendil-works/pi/issues/6817)

6. **#9105** [CLOSED] 二进制附件被强制 UTF-8 解码损坏 — `processFileArguments()` 对 `@file` 和 Read 工具的二进制文件做有损解码，数据完整性问题，当日提报当日处理。
   [链接](https://github.com/earendil-works/pi/issues/9105)

7. **#9097** [CLOSED] DeepSeek/OpenRouter thinking 冗余 `thinkingSignature` 导致会话膨胀至 4.5MB — 多日会话直接撞上下文上限，值得所有长会话用户关注。
   [链接](https://github.com/earendil-works/pi/issues/9097)

8. **#9055** [CLOSED] EventStream 二次方 CPU 开销 — 用数组 `shift()` 做队列，长时间运行的服务端进程中性能退化明显，架构级问题。
   [链接](https://github.com/earendil-works/pi/issues/9055)

9. **#8822** [OPEN] 流式输出每个 delta 触发全量 O(n²) markdown 重渲染 — UI 落后于模型流式输出，与 #9055 同属性能主线。
   [链接](https://github.com/earendil-works/pi/issues/8822)

10. **#8684** [OPEN] `PI_OFFLINE` 静默禁用全部模型发现 — 实际行为与文档范围不符，企业/离线环境用户需注意。
    [链接](https://github.com/earendil-works/pi/issues/8684)

---

## 重要 PR 进展

1. **#9096** [OPEN] 新增 Meta 提供商 + Muse 订阅 OAuth — 每日重铸 token 的特殊刷新机制，流式目前是“伪流式”，重大新提供商支持。
   [链接](https://github.com/earendil-works/pi/pull/9096)

2. **#8998** [OPEN] 系统提示词重构 — @mitsuhiko 提出，支持扩展对系统提示词的部分更新、会话中动态注入，架构级大改动。
   [链接](https://github.com/earendil-works/pi/pull/8998)

3. **#9084** [CLOSED] `pi update` 支持源码检出安装自动更新 — 通过 `git pull --rebase` + `npm ci` 自更新，补齐安装方式覆盖。
   [链接](https://github.com/earendil-works/pi/pull/9084)

4. **#8994** [CLOSED] 信号终止的进程映射为非零退出码 — OOM killer 杀掉的 bash 命令曾被误判为成功，安全隐患级修复。
   [链接](https://github.com/earendil-works/pi/pull/8994)

5. **#9087** [CLOSED] 动态模型 API 无实现时快速失败 — 修复 openrouter/anthropic 模型返回 HTML 404 页面作为错误信息的糟糕体验。
   [链接](https://github.com/earendil-works/pi/pull/9087)

6. **#9070** [CLOSED] Linux 下载 musl 静态链接版 fd/ripgrep — 修复 NixOS/Alpine 上 find/grep 工具不可用。
   [链接](https://github.com/earendil-works/pi/pull/9070)

7. **#9081** [CLOSED] `registerProvider` 的 apiKey 支持函数形式 — 插件可从自身 auth 文件读取密钥，补齐插件认证链路。
   [链接](https://github.com/earendil-works/pi/pull/9081)

8. **#9082 / #9083** [CLOSED] TUI 打磨：多行 bash 折叠为 `bash script (N lines)`；重复粘贴不再堆叠重复标记 — 由 @yonibloch 一并提交。
   [链接](https://github.com/earendil-works/pi/pull/9082)

9. **#8801 / #8799 / #9080** [CLOSED] TUI 视觉系列改进 — 更美观的全屏模式滚动条、集成到输入框边框的 Working... spinner、跳转最新消息控件。
   [链接](https://github.com/earendil-works/pi/pull/8801)

10. **#8734** [OPEN] OpenAI Responses 兼容提供商支持顶层 `instructions` — 系统提示词可配置为 top-level 指令而非塞入 `input`，兼容性增强。
    [链接](https://github.com/earendil-works/pi/pull/8734)

---

## 功能需求趋势

- **性能与长会话稳定性**：流式渲染 O(n²)、EventStream 队列开销、thinking 签名膨胀、上下文预算计算，是本期最集中的主线。
- **提供商与模型覆盖**：Meta Muse OAuth、gemini-3.8-flash 目录缺失、OpenRouter free 模型限额、GLM 强制思考模型处理——多提供商适配需求持续旺盛。
- **扩展/插件生态**：TUI viewport 原语（#4861）、会话替换 API（#5952）、包命名空间（#8834）、`prepareSubagentArguments` 钩子（#9072），扩展 API 的开放性是社区高频诉求。
- **终端体验打磨**：OSC 8 超链接可点击（#5168/#4839）、全屏模式滚轮速度（#9052）、粘贴折叠等 UX 细节。
- **可观测性与鲁棒性**：RPC 响应暴露 prompt disposition（#9098）、工具调用执行超时（#8857）、Bedrock 重试预算控制（#8681）。

## 开发者关注点

1. **上下文/token 预算管理不可靠**：多个 issue（#8061、#8845、#9097）指向硬编码 token 限制和预算计算缺陷，长会话场景尤其脆弱。
2. **插件认证与配置链路有盲区**：插件 auth 文件被忽略（#9079）、扩展注册的 provider 默认值间歇失效（#8810）、`PI_OFFLINE` 行为超文档范围。
3. **跨平台一致性**：Windows glob 失效、NixOS/Alpine 二进制兼容问题表明非 macOS/Linux-glibc 环境仍是二等公民。
4. **性能债务开始显性化**：流式 UI 和事件队列的算法复杂度问题在长时运行/高吞吐场景下集中爆发，值得架构层面响应。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报 · 2026-09-04

## 📰 今日速览

oh-my-pi 今日连续发布 v18.1.6 ~ v18.1.8 三个版本，密集修复 provider 兼容性问题（GPT-6 Astra 缓存、DeepSeek reasoning 回放、流式工具参数）。社区方面，新 Issue #10749/#10753 揭示的 **tool call id 不原样回传破坏 Gemini 3 thought signature** 成为今日焦点，同时多位贡献者（@roboomp 等）针对 read 工具截断提示、CJK 剪贴板等新报 bug 快速提交了修复 PR，社区响应速度值得称道。

---

## 🚀 版本发布（过去 24 小时）

### [v18.1.8](https://github.com/can1357/oh-my-pi/releases/tag/v18.1.8)
- **新增**：GPT-6 Astra 支持——在对话中切换 thinking level 时保留 prompt caching（覆盖 OpenAI 与 OpenAI Codex provider）
- **改进**：OpenAI Codex 请求携带所选模型/服务信息以优化路由

### [v18.1.7](https://github.com/can1357/oh-my-pi/releases/tag/v18.1.7)
- **修复**：DeepSeek 系 Responses 回放（如 opencode-go）在 compaction 丢弃 reasoning 后恢复 thinking 模式轮次报 `400 reasoning_text must be passed back`，现合成非空占位符

### [v18.1.6](https://github.com/can1357/oh-my-pi/releases/tag/v18.1.6)
- **新增**：流式工具参数更新，工具调用进度更实时
- **改进**：steering 行为优化——排队 steering 命令保留已发出的不可中断工具调用

---

## 🔥 社区热点 Issues

1. **[#9717](https://github.com/can1357/oh-my-pi/issues/9717) · DeepSeek v4 Flash 频繁误用 edit 工具**（30 评论 / 11 👍）
   最热 issue。模型反复发出错误编辑误删代码，遭遇语法错误后再次用错误编辑“修复”，需多次重试。涉及 provider 提示词适配，持续发酵中。

2. **[#1666](https://github.com/can1357/oh-my-pi/issues/1666) · 请求支持 command-code 作为模型 provider**（28 评论）
   用户希望复用 commandcode.ai 订阅，反映订阅制 provider 接入仍是高频需求。

3. **[#6835](https://github.com/can1357/oh-my-pi/issues/6835) · 按模型配置 compaction 阈值**（20 评论）
   目前 compaction 触发阈值是全局的，用户希望不同模型（上下文大小各异）能有独立的压缩策略。

4. **[#10605](https://github.com/can1357/oh-my-pi/issues/10605) · TUI 在 subagent 运行时停止重绘约 80 秒**（13 评论，已关闭）
   P1 级 bug，子代理活跃期间界面假死、输入不显示。已修复关闭，但与 #5372 的事件循环阻塞问题同源，值得持续关注。

5. **[#10653](https://github.com/can1357/oh-my-pi/issues/10653) · opencode-go/zen 缺失 `x-opencode-session` 头，09/05 后将报错**（8 评论，已关闭）
   紧急兼容性问题，配套修复 PR #10654 已合并，**9 月 5 日前务必升级**。

6. **[#10749](https://github.com/can1357/oh-my-pi/issues/10749) · tool call id 未原样回传，破坏 Gemini 3 thought signature**（5 评论）
   P1。OMP 回放工具调用时替换了 provider 的 `call_id`，导致经 OpenAI-Responses 中继的 Gemini 3 丢失思考签名。#10753 报告 Anthropic Messages 侧同样问题。

7. **[#8802](https://github.com/can1357/oh-my-pi/issues/8802) · Z.AI Coding Plan 登录丢弃官方 JWT**（10 评论）
   `/login zai-coding-plan` 铸造 PAYG key 而非保留官方 token，导致 1113 错误后等待 30 分钟。等待补充信息中。

8. **[#5372](https://github.com/can1357/oh-my-pi/issues/5372) · 9 个 subagent 并发时事件循环永久卡死（100% CPU）**（6 评论）
   P1。`ui.loop-blocked` 时长成倍递增至永不返回，所有子代理饿死。macOS 平台，长期未解。

9. **[#7348](https://github.com/can1357/oh-my-pi/issues/7348) · /loop 模式下 steering 输入静默覆盖循环提示词**（7 评论）
   一次性引导消息与持久提示词变更被混为一谈，运维场景下易造成误操作。

10. **[#10757](https://github.com/can1357/oh-my-pi/issues/10757) · v18.1.8 无法在 Windows 上运行**（5 评论，已关闭 wontfix）
    经 bun 全局升级后 `omp` 启动失败。标记 wontfix 但 Windows 用户升级前建议先查看讨论。

---

## 🔧 重要 PR 进展

1. **[#10654](https://github.com/can1357/oh-my-pi/pull/10654)**（已合并）：为 opencode-go/zen 请求补发 `x-opencode-session`/`x-opencode-client` 路由头，化解 #10653 的 09/05 大限。

2. **[#10714](https://github.com/can1357/oh-my-pi/pull/10714)**（已合并，review:p0）：重写 `GitRepo::clean`，正确处理嵌套 gitignore 与 submodule，修复**可能删除用户数据**的严重缺陷。

3. **[#10772](https://github.com/can1357/oh-my-pi/pull/10772)**：修复规则发现忽略 `enabled: false` frontmatter（对应 #10769），使规则与 skill 行为一致。

4. **[#10771](https://github.com/can1357/oh-my-pi/pull/10771) / [#10767](https://github.com/can1357/oh-my-pi/pull/10767)**：修复 read 工具截断提示错误——正确计入部分行预览、报告真实字节预算（对应 #10768/#10764）。

5. **[#10765](https://github.com/can1357/oh-my-pi/pull/10765)**：让 `wl-paste` 协商正确的 MIME 类型，修复 Wayland 下 X11 剪贴板 CJK 文本乱码（#10762）。

6. **[#10763](https://github.com/can1357/oh-my-pi/pull/10763)**：修复 output elider 尾部窗口被巨型行压塌的问题，保留 MCP 大结果尾部内容（#10761）。

7. **[#10692](https://github.com/can1357/oh-my-pi/pull/10692)**（已合并）：新增 `worktree.cleanSource` 设置，`/wt` 迁移会话后自动清理原 checkout。

8. **[#10766](https://github.com/can1357/oh-my-pi/pull/10766)**：新增 `auth.accountSelection`（balanced/fixed），多账号用户可固定使用首个凭证。

9. **[#10519](https://github.com/can1357/oh-my-pi/pull/10519)**：在最后一条用户消息上加盖每轮当前时间戳，解决长会话中 agent “不知道现在几点”的问题。

10. **[#10755](https://github.com/can1357/oh-my-pi/pull/10755)**（review:p1）：修复 WorkPool 子会话启动崩溃——yield 工具 schema 构建时解引用未初始化的本地 session。

---

## 📈 功能需求趋势

- **Provider 兼容性与新接入**：最活跃方向。GPT-6 Astra、Gemini 3 thought signature、DeepSeek、Z.AI、command-code、Antigravity、本地模型（#3300）——社区对“把各种订阅/中继接进来”的诉求持续高涨。
- **TUI 稳定性与性能**：事件循环阻塞（#5372/#10231）、重绘卡顿（#10605）、高 CPU 占用是长期痛点。
- **Subagent/多代理编排**：可转向的子代理原语（#2574）、按任务指定模型（#7982）、ACP 异步轮次生命周期（#9157）。
- **上下文管理精细化**：按模型 compaction 阈值（#6835）、compaction 结果可观测性（#9786）、snapcompact 相关修复。
- **可观测性与配置粒度**：read/elide 截断元信息准确性、全局开关控制 skill/MCP 自动加载（#9804）。

---

## ⚠️ 开发者关注点

1. **升级紧迫事项**：使用 opencode-go/zen 的用户须在 **09/05 前升级**（#10653 已修，包含于 v18.1.6+）；Windows + bun 安装用户升级 18.1.8 前先确认 #10757 情况。
2. **中继场景的 wire 兼容性是重灾区**：tool call id 回写、reasoning 保留、会话头——自定义 provider 中继（Gemini via OpenAI/Anthropic 协议）用户受影响最多。
3. **工具输出的元信息可信度**：read/elide 的截断提示数值错误会误导程序化消费方（含模型本身），系列修复 PR 已在路上。
4. **稳定性长尾**：事件循环卡死、TUI 假死类 P1 问题仍有多个未关闭，重度 subagent 用户建议控制并发规模并关注 #5372 进展。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

# DeepSeek Harness 社区动态日报
**日期：2026-09-04** | 数据来源：[deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)

---

## 一、今日速览

今天最重要的动态是 **dsh-v0.1.2-rc.1 候选版本发布**，这是 0.1.2 系列的首个 RC 版本，汇总了自 v0.1.1-rc.2 以来的主要变更。本次更新聚焦于**会话流体验优化**，包括过程内容折叠、正文宽度自适应，以及新增的 token 用量与耗时统计展示。过去 24 小时内无新增 Issue 和 PR 更新，社区讨论节奏平稳。

---

## 二、版本发布

### 🚀 dsh-v0.1.2-rc.1
🔗 [Release 链接](https://github.com/deepseek-ai/deepseek-harness/releases)

作为 0.1.2 系列的首个候选版本，主要更新包括：

**新增功能：**
- **会话流折叠优化**：默认在每个已完成回答前折叠过程内容，并默认折叠「System prompt」（贡献者：@07akioni, @lsdsjy）
- **正文宽度自适应**：会话流正文宽度支持自适应或拖拽调整（贡献者：@yixiangihsiang）
- **用量统计展示**：回答末尾显示 token 用量和耗时，可展开查看精确用量与详细统计（贡献者：@hypatiamay）

**点评**：本次更新明显针对日常重度使用场景——折叠过程内容可显著降低信息噪音，token 用量透明化则回应了社区对成本可观测性的长期诉求，是迈向稳定版 0.1.2 的积极信号。

---

## 三、社区热点 Issues

过去 24 小时内无 Issue 更新。

---

## 四、重要 PR 进展

过去 24 小时内无 PR 更新。近期变更已随 v0.1.2-rc.1 一并合入发布，详见上文版本发布部分。

---

## 五、功能需求趋势

由于今日无活跃 Issue 数据，结合本次 Release 内容可观察到近期社区关注方向：

1. **界面可读性与信息密度**：过程内容折叠、System prompt 折叠等改动表明用户对会话流「信噪比」有较高要求
2. **布局灵活性**：正文宽度自适应/拖拽调整，反映用户对个性化 UI 布局的需求
3. **成本与性能可观测性**：token 用量与耗时统计是最直接的回应，预计后续会有更细粒度的用量分析需求
4. **版本迭代节奏**：0.1.x 系列快速迭代 RC 版本，社区对稳定版发布的期待持续升温

---

## 六、开发者关注点

- **回答内容的整洁呈现**是高频反馈点，本次默认折叠策略落地后，建议关注用户对「折叠/展开」默认行为的后续反馈
- **用量透明度**需求初步满足，开发者可能进一步要求：按会话聚合统计、API 成本估算、历史用量趋势等
- **RC 版本质量验证**：建议社区积极参与 v0.1.2-rc.1 的测试并反馈问题，帮助 0.1.2 稳定版尽快落地

---

*本日报基于 GitHub 公开数据自动整理，如有遗漏或误差请以仓库实际内容为准。*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*