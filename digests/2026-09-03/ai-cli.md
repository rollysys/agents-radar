# AI CLI 工具社区动态日报 2026-09-03

> 生成时间: 2026-09-03 06:43 UTC | 覆盖工具: 8 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告

**报告日期：2026-09-03**

---

## 1. 生态全景

AI CLI 工具已从单一“终端问答工具”演进为**多形态 Agent 平台**：Claude Code / Codex 走向企业级托管部署与无人值守自动化，OpenCode / Qwen Code / CodeWhale 则在插件化、浏览器控制、监督运行控制面等可扩展性方向快速突破。各社区共同面临三大结构性挑战——**成本可控性**（配额计量、模型路由、缓存优化）、**Windows/多平台体验落差**、以及**长会话稳定性**（OOM、挂起、resume 语义破碎）。同时，安全（CVE 治理、沙箱边界、secret 作用域）正从“加分项”变为“必答题”，Gemini CLI、Qwen Code 均出现 P1 级安全审计事件。开源程度呈现明显分层：闭源追踪仓库（Claude Code）与全开源仓库（Gemini CLI、OpenCode、Qwen Code、CodeWhale）的社区协作模式截然不同。

---

## 2. 各工具活跃度对比

| 工具 | 热点 Issues | 重要 PR | Release | 核心动态 |
|---|---|---|---|---|
| **Claude Code** | 10+（多条高热） | 2（无合并） | v2.1.259 | 企业托管 MCP + 无人值守模式；Windows 问题集中爆发 |
| **OpenAI Codex** | 10+ | 10+（几乎全当日合并） | rust-v0.153.0 | copyberry 自动化 PR 流水线；Windows daemon 落地 |
| **Gemini CLI** | 10 | 10 | 无 | 2 个 CRITICAL CVE 修复推进；gemini-3.8-flash 默认化 PR |
| **Copilot CLI** | 31 条更新 | 0 | v1.0.83-3 | 长会话 OOM 系列报告；BYOK 痛点集中 |
| **Kimi CLI** | 5（全关闭） | 1（已关闭） | 无 | 集中 Issue 清理，活跃度最低 |
| **OpenCode** | 10 | 10 | v1.18.27 | 小模型轻量轮次 + 插件生态密集迭代 |
| **Qwen Code** | 10 | 10+ | live-host-v0.2.0 | OpenTUI 迁移中期；daemon 安全讨论 |
| **DeepSeek TUI** | 10 | 10 | 无（0.9.12 集成中） | 10 个 UX 切片大合并；插件 marketplace 落地 |

**观察**：Codex 开发节奏最快（自动化 PR 当日合并）；Claude Code 和 Copilot CLI 为闭源仓库，社区活动集中在 issue 追踪；Kimi CLI 今日明显处于维护清理状态。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **成本/配额可控性** | Claude Code（93.8% token 路由至 Opus、缓存失效多 59M token）、Codex（跨档位配额异常消耗 Meta Issue）、OpenCode（Go 套餐计量错误、轻量轮次用小模型）、Copilot CLI（OTel 计费属性缺失） | 计量准确、路由透明、可关闭后台消耗 |
| **模型路由/分层调度** | OpenCode #46929/#46988+PR、Claude Code #27665、Codex 配额系列、Qwen Code #10834（图片预算） | 按任务轻重自动匹配大小模型，是当日最活跃的新兴需求 |
| **长会话稳定性与 resume 语义** | Copilot CLI（OOM×4、Agent 丢失、权限丢失）、Codex #41265（resume 丢工具）、Gemini CLI（挂起×2）、Claude Code #81833 | "resume" 是全行业 Bug 密度最高的用户路径 |
| **MCP 生态健壮性** | Codex #42413（OAuth 协同刷新）、Gemini CLI（RFC 9207 校验）、Copilot CLI #4695/#4525、CodeWhale #5637、Claude Code #91565 | OAuth token 复用、协议握手兼容、secret 作用域管理 |
| **沙箱与权限精细化** | Claude Code（deny 误伤、ENV_SCRUB）、Codex #38886、Gemini CLI #19873、Qwen Code #10860、OpenCode #46530 | 用户授权意图与安全策略的一致性、可配置可审计 |
| **企业/托管部署** | Claude Code（managedMcpServers）、Codex（网络策略、服务端配置发现）、Copilot CLI（托管插件、代理兼容） | 组织级统一下发配置已成竞争焦点 |
| **Auto Memory / 记忆系统** | Claude Code（#81833/#91188）、Gemini CLI（#26525 脱敏风险）、OpenCode（#35291）、Kimi（#1309）、CodeWhale（FEAT-019） | 一致性、可配置压缩、安全脱敏 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 企业级托管、Cowork/远程控制、Desktop 端 | 企业团队、Max/API 重度用户 | 闭源 issue-tracking 仓库 + 快速版本迭代（259+ 版本） |
| **Codex** | Agent Command Center、多任务并行、插件 CLI | 订阅制个人/团队开发者 | Rust 重写 + copyberry 自动化 PR 流水线，服务端驱动架构 |
| **Gemini CLI** | 安全合规、AST 代码理解、OS 级沙箱 | 注重安全的开发者与企业 | 全开源、社区提案驱动（如 #19873 沙箱设计来自社区） |
| **Copilot CLI** | BYOK/本地模型、GitHub 生态集成、OTel 可观测 | GitHub 深度用户、企业自托管 | SEA 打包 Node 单二进制，Plugin 1.0 规范推进 |
| **OpenCode** | 插件生态、多 Provider 中立、桌面端浏览器 | 追求灵活性的社区开发者 | 全开源、开放插件 API + browser pane RPC |
| **Qwen Code** | daemon/Web Shell、IM 集成（DingTalk）、国际化 | 中文生态、IM 工作流用户 | OpenTUI 自研终端框架、Channels 多平台分发 |
| **CodeWhale** | 监督运行控制面、Provider 中立、插件 marketplace | 终端复用器/CI 集成、本地模型用户 | Rust 巨型 crate 拆分工程、computer-use 插件化 |
| **Kimi CLI** | WebUI 补齐、基础功能对标 | 早期用户 | 追赶阶段，活跃度待提升 |

---

## 5. 社区热度与成熟度

- **第一梯队（高热度+高迭代）**：**Codex**（自动化开发节奏业界最快，PR 当日合并）与 **Claude Code**（issue 互动量最大，但 Windows 端技术债沉重，#53247 拖延 4 个月）
- **工程健康度最佳**：**OpenCode** 与 **CodeWhale**——功能迭代与架构治理（crate 拆分、插件边界）并重，修复响应快
- **快速成长期**：**Qwen Code**（OpenTUI 迁移 + Web Shell 架构收敛，但 CI 稳定性是明显噪音源，24h 内约 10 条 CI 失败 issue）
- **稳定维护但痛点堆积**：**Copilot CLI**（issue 更新量最高 31 条，但 PR 停滞，内存泄漏系统性问题待官方响应）与 **Gemini CLI**（安全响应积极，但挂起/假成功类可靠性问题频发）
- **低活跃**：**Kimi CLI**（集中清理历史 issue，处于产品方向调整期）

**成熟度信号**：闭源双雄（Claude Code/Copilot）issue 多而 PR 少，依赖官方黑箱修复；开源工具的社区提案（如 Gemini 的 OS 沙箱、CodeWhale 的 control socket）能直接转化为功能，协作杠杆更明显。

---

## 6. 值得关注的趋势信号

1. **“小模型处理轻量轮次”成为成本共识**：OpenCode 同日 issue+PR 落地，Claude Code 智能路由 issue 合并 30+ 重复项，Codex 配额危机倒逼同类需求——**模型分层调度将是下一轮竞争的核心功能**，自建 Agent 的开发者应尽早设计 cost-tier 路由。

2. **自动化开发流水线现身生产**：Codex 的 copyberry bot 当日提交并合并 10+ PR，验证了“AI 开发 AI 工具”的可行性，但也带来评审深度存疑的新风险（回归 issue #91565/#91650 紧随新版本出现）。

3. **企业托管配置成为护城河**：Claude Code `managedMcpServers`、Codex 服务端配置发现、Copilot 托管插件同周推进——**CLI 工具正从个人开发者市场转向组织级采购**，IT 管理员视角的能力（统一下发、审计、网络策略）权重上升。

4. **安全责任前移**：Gemini CLI 的变量展开绕过 + 2 个 CRITICAL CVE、Qwen Code 主分支审计失败、CodeWhale 的递归删除风险修复、多个工具的 MCP OAuth 加固——**供应链与沙箱安全已从边缘 issue 变为发布门禁**，企业选型时应将 CVE 响应速度纳入评估。

5. **“假成功”是 Agent 可靠性的隐形杀手**：Gemini CLI 的 MAX_TURNS 误报 GOAL、Claude Code 的静默模型覆盖、Codex 的配额误显示——**失败被掩盖比失败本身更危险**，构建 Agent 系统时务必实现独立的结果验证层，勿信任 Agent 自我上报的状态。

6. **长会话/resume 是全行业质量洼地**：四个工具同日报告 resume 相关缺陷（OOM、工具丢失、Agent 白名单丢失）——生产环境中应**避免依赖超长会话**，改用外部状态持久化 + checkpoint 策略。

**升级建议速查**：Codex 用户建议升级至 0.153.x（MCP OAuth 修复）；Claude Code 生产用户暂缓 2.1.257+（两个回归 issue）；Gemini CLI 企业用户等待 CVE 修复合并后再部署。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

*数据来源：github.com/anthropics/skills（截止 2026-09-03）*

---

## 一、热门 Skills 排行

| # | Skill / PR | 功能与讨论热点 | 状态 |
|---|---|---|---|
| 1 | **skill-creator 评测修复** ([PR #1298](https://github.com/anthropics/skills/pull/1298)) | 修复 `run_eval.py` 恒报 0% recall 的核心缺陷（对应 [#556](https://github.com/anthropics/skills/issues/556)，10+ 独立复现），同步修复 Windows 流读取与并行 worker。是 skill-creator 优化闭环“跑不起来”的根本性问题 | OPEN |
| 2 | **document-typography** ([PR #514](https://github.com/anthropics/skills/pull/514)) | 对 AI 生成文档做排版质控：孤字换行、孤行标题、编号错位。定位为“用户不会主动要求但普遍存在”的质量兜底 | OPEN |
| 3 | **scnet-hpc** ([PR #1615](https://github.com/anthropics/skills/pull/1615)) | 基于 profile 的 SSH + Slurm 超算集群操作 skill，代表 HPC/科研场景的社区拓展方向 | OPEN |
| 4 | **ODT 文档处理** ([PR #486](https://github.com/anthropics/skills/pull/486)) | OpenDocument 创建、模板填充与 ODT→HTML 转换，补齐开放格式文档能力（与官方 pdf/docx/xlsx 系列对齐） | OPEN |
| 5 | **frontend-design 改进** ([PR #210](https://github.com/anthropics/skills/pull/210)) | 重写 frontend-design 指令，使每条指导均可单会话执行，提升可操作性与内在一致性 | OPEN |
| 6 | **Hivemind 多智能体编排** ([PR #1628](https://github.com/anthropics/skills/pull/1628)) | 让 Claude Code 将机械性工作委派给运行免费模型的 headless opencode worker，主模型专注规划与审查。“上下文是稀缺资源”的思路引发关注 | OPEN |
| 7 | **skill-quality / security-analyzer** ([PR #83](https://github.com/anthropics/skills/pull/83)) | 两个元技能：对 Skill 本身做质量五维评估与安全扫描，呼应了社区对供应链安全的强烈诉求（见 Issue #492） | OPEN |
| 8 | **self-audit 推理质量门** ([PR #1367](https://github.com/anthropics/skills/pull/1367)) | 交付前审计：先机械验证文件存在性，再按损害严重度做四维推理审计，通用性强 | OPEN |

> 注：所有 PR 评论数数据缺失（undefined），排序基于议题热度与关联 Issue 讨论量综合判断。修复类 PR（#538 pdf 大小写、#541 docx ID 冲突、#539 YAML 校验、#1050/#1099 Windows 兼容）也持续活跃，显示社区对**官方基础 Skill 的工程质量**投入很大。

---

## 二、社区需求趋势

1. **信任与安全机制**（最高热度，43 评论）
   [#492](https://github.com/anthropics/skills/issues/492)：社区 Skill 借 `anthropic/` 命名空间分发，冒充官方导致信任边界滥用。社区强烈要求命名空间隔离 / 签名验证。

2. **企业级分发与组织内共享**
   [#228](https://github.com/anthropics/skills/issues/228)（16 评论）：组织内 Skill 库与直接分享链接，取代 Slack 传文件 + 手动上传的原始流程。

3. **Skill 开发与评测工具链可靠性**
   [#556](https://github.com/anthropics/skills/issues/556)（12 评论）、[#1390](https://github.com/anthropics/skills/issues/1390)：skill-creator 与 mcp-builder 的评测脚本在真实环境全部失效，社区需要可用的质量度量基础设施。

4. **上下文效率**
   [#1487](https://github.com/anthropics/skills/issues/1487)：claude-api skill 单次注入 ~156k token 耗尽上下文窗口——渐进式/按需加载是刚需。配套诉求见 [#189](https://github.com/anthropics/skills/issues/189)（插件重复内容浪费上下文）、[#1329](https://github.com/anthropics/skills/issues/1329)（compact-memory 紧凑记忆表示法）。

5. **输出质量自审/治理类 Skill**
   [#1385](https://github.com/anthropics/skills/issues/1385)、[#412](https://github.com/anthropics/skills/issues/412)：任务前校准 → 对抗式审查 → 交付验证的质量门流水线，反映对 agent 可靠性的关注。

6. **平台兼容性与生态接入**
   AWS Bedrock 支持（[#29](https://github.com/anthropics/skills/issues/29)）、Skills 暴露为 MCP（[#16](https://github.com/anthropics/skills/issues/416)，早期但方向性讨论）、Windows 一等公民支持（多个 PR/Issue）。

---

## 三、高潜力待合并 Skills（活跃但未合并）

- **[PR #1298](https://github.com/anthropics/skills/pull/1298)** — skill-creator 评测修复：对应 10+ 复现的核心 Bug，合并优先级最高；与 #1050/#1099（Windows 修复）存在部分重叠，可能整合后落地。
- **[PR #1607](https://github.com/anthropics/skills/pull/1607)** — claude-api 标记退役模型 ID：修复已关闭 Issue #1603，改动小、事实性修正，合并阻力低。
- **[PR #538](https://github.com/anthropics/skills/pull/538) / [PR #541](https://github.com/anthropics/skills/pull/541)** — pdf/docx 文档级修复：同一作者（@Lubrsy706）系列高质量修复，持续更新至 4 月底。
- **[PR #1602](https://github.com/anthropics/skills/pull/1602)** — 一次性修复 mcp-builder/评测脚本的多项序列化与指标 Bug，直接回应 Issue #1390。
- **[PR #514](https://github.com/anthropics/skills/pull/514)** — document-typography：定位独特、通用价值高，讨论跨越多周。
- **[PR #509](https://github.com/anthropics/skills/pull/509)** — CONTRIBUTING.md：回应社区健康度短板（Issue #452），属于低成本高杠杆改动。

---

## 四、生态洞察（一句话总结）

**社区最集中的诉求不是“更多 Skill”，而是让 Skills 生态“可信、可度量、省上下文”——即命名空间与安全边界治理、能真正跑起来的评测工具链，以及按需加载以避免上下文爆炸。**

---

# Claude Code 社区动态日报 — 2026-09-03

## 1. 今日速览

Claude Code 发布 **v2.1.259**，新增组织级 `managedMcpServers` 托管设置和 `--permission-prompts none` 无人值守模式，面向企业部署场景。社区方面，Windows Desktop 的 AppX 容器/静默更新问题持续发酵，多条高热度 issue 集中于此；同时模型路由与 token 成本优化（缓存失效、模型固定被覆盖）成为开发者最关注的议题。

---

## 2. 版本发布

### v2.1.259
- **`managedMcpServers` 托管设置**：组织管理员可向所有用户统一下发 HTTP/SSE MCP 服务器（条目格式与 `.mcp.json` 一致）；含 command 的条目会被跳过。
- **`--permission-prompts none`**：面向无人值守 headless 主机，任何会触发权限弹窗的操作将被处理（避免阻塞自动化流程）。

🔗 [Release v2.1.259](https://github.com/anthropics/claude-code/releases)

---

## 3. 社区热点 Issues

1. **[#53247](https://github.com/anthropics/claude-code/issues/53247)** — Windows Claude Desktop 崩溃后遗留孤儿 Silo/Job Object，导致应用无法启动（HRESULT 0x80070020），只能注销/重启恢复。53 条评论、24 👍，Windows 用户影响面极大，已持续 4 个月未解。

2. **[#24317](https://github.com/anthropics/claude-code/issues/24317)**（已关闭）— 多并发会话 OAuth refresh token 竞态导致频繁重新认证。41 👍 高共鸣问题，近日关闭，或已随认证修复落地。

3. **[#27665](https://github.com/anthropics/claude-code/issues/27665)** — 功能请求：智能模型路由。用户用 `ccusage` 实测 Max 订阅 93.8% 的 token 被路由到 Opus，无自动优化，合并了 30+ 相关 issue，是成本控制诉求的代表。

4. **[#83795](https://github.com/anthropics/claude-code/issues/83795)** — 安全/架构问题：`settings.json` 中的模型固定被静默覆盖，报告者测量出 4 种绕过路径，且 Gen-4 模型已从模型菜单移除。模型可控性问题的集中爆发点。

5. **[#89680](https://github.com/anthropics/claude-code/issues/89680)** — Windows Desktop 静默更新遗留孤儿进程持有旧 AppX 容器，新版本无法启动（0x80070020），需重启。与 #53247 同根因，指向更新机制设计缺陷。

6. **[#87966](https://github.com/anthropics/claude-code/issues/87966)** — Prompt cache 会话中途间歇性失效，9 天内 89 次全上下文重写，约 59M 多余 cache_creation token。对重度用户成本影响显著。

7. **[#91565](https://github.com/anthropics/claude-code/issues/91565)** — 回归问题：SDK 2.1.258 后 Windows Cowork 本地会话中所有 `mcp__workspace__*` 工具无提示直接被拒。新版本引入的回归，值得关注后续修复节奏。

8. **[#91650](https://github.com/anthropics/claude-code/issues/91650)** — 2.1.257-2.1.259 Windows Git Bash 下，只要存在任意 `Read()` deny 规则，绝对路径 `cd` 就触发权限弹窗。14 👍，影响所有配置了 deny 规则的 auto 模式用户。

9. **[#81833](https://github.com/anthropics/claude-code/issues/81833)** — git worktree 会话中 auto-memory 加载不一致（同仓库同天时有时无），影响依赖 MEMORY.md 的多工作流用户，与 #91188（memory 压缩阈值可配置）共同反映 auto-memory 机制成熟度不足。

10. **[#90172](https://github.com/anthropics/claude-code/issues/90172)** — Desktop 静默重启更新会摧毁运行中会话（"computer_unreachable"），拆分为 8 个独立缺陷。远程控制/Cowork 场景可靠性的伞形 issue。

---

## 4. 重要 PR 进展

过去 24 小时仅 2 条 PR 更新，无新增合并：

1. **[#87079](https://github.com/anthropics/claude-code/pull/87079)**（OPEN）— 修复 `**` glob 模式不匹配零深度路径的问题。此前 `**/*.ts` 会静默排除顶层文件，由于涉及 security-patterns.json 的安全规则，属静默失效型风险，值得优先评审。
2. **[#41938](https://github.com/anthropics/claude-code/pull/41938)**（CLOSED）— 为 DevContainer 启动添加 Linux/macOS Bash 脚本（此前仅有 PowerShell 版本），已被关闭。

> 注：Claude Code 主仓库为 issue 追踪仓库，核心代码不开源，PR 活动历来稀疏，重点观察 issue 侧动态即可。

---

## 5. 功能需求趋势

- **成本控制与模型路由**：智能路由（#27665）、模型固定不被覆盖（#83795）、缓存失效（#87966）、模型分工指令不被遵守（#91549）——token 花费可控性是 Max/API 用户最集中的诉求。
- **企业/无人值守部署**：本次 v2.1.259 的 `managedMcpServers` 与 `--permission-prompts none` 正面回应了企业托管配置需求，方向契合。
- **Auto-memory 机制完善**：加载一致性（#81833）、压缩阈值可配置（#91188）、读前写门控逻辑矛盾（#78569），记忆系统是多 issue 交叉的热区。
- **Desktop/Cowork 可靠性**：Windows AppX 容器、静默更新、会话存活等问题数量最多。
- **沙箱与权限精细化**：ENV_SCRUB 遗留文件（#78072）、worktree 隔离误报（#88312）、deny 规则误伤（#91650）。

---

## 6. 开发者关注点（痛点总结）

1. **Windows Desktop 是重灾区**：安装、更新、启动三环节均有致命缺陷，且多需重启机器恢复，企业环境下不可接受。
2. **静默更新破坏运行中会话**：多个 issue 指向更新策略缺少对活跃会话的保护。
3. **成本不可预期**：缓存失效、路由倾斜、模型覆盖叠加，使重度用户账单难以预测和优化。
4. **权限系统误报**：deny 规则与 Bash 守卫的交互产生大量非必要弹窗，削弱 auto 模式体验。
5. **并发会话稳定性**：OAuth 竞态问题长期存在（#24317、#76905），多会话工作流用户受影响最深。

**建议关注**：#91565 / #91650 两个针对 2.1.257+ 的回归 issue，若你正在生产环境使用最新版本，可考虑暂缓升级或降级。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-09-03

## 一、今日速览

Codex CLI 正式发布 **rust-v0.153.0**，Vim 模式补齐撤销/重做能力并引入插件 CLI 管理功能。PR 侧开发节奏极快，大量由 copyberry 自动化提交的功能合并落地，包括 **Windows 平台 app-server daemon 支持**、Agent Command Center 全面升级以及 MCP OAuth 协同刷新。Issues 侧最突出的仍是 **配额异常消耗（跨订阅层）** 与 **Windows/WSL 环境问题**两大主题。

---

## 二、版本发布

### rust-v0.153.0（正式版）
- **Vim 模式**：支持 `u` 撤销 / `Ctrl+R` 重做，完整保留草稿（含粘贴内容与附件）（[#41941](https://github.com/openai/codex/pull/41941)、[#42140](https://github.com/openai/codex/pull/42140)）
- **插件 CLI**：新增 list / install / remove 等管理能力
- 同日发布 alpha.6 与 alpha.5.1 两个预发布版本

---

## 三、社区热点 Issues

1. **[#41220](https://github.com/openai/codex/issues/41220) — 配额异常消耗跨报告追踪（Meta Issue）**
   汇总多份订阅配额异常快速消耗的报告，17 评论 / 8 👍，是当前社区最高关注度的问题，官方需给出统一解释。

2. **[#41622](https://github.com/openai/codex/issues/41622) — 请求关闭 CLI 自动对话摘要（41 👍）**
   今日 👍 最高的功能请求，用户认为自动 recap 对资深用户是噪音，希望有 `config.toml` 开关。

3. **[#41463](https://github.com/openai/codex/issues/41463) — Windows + WSL 无法创建项目**
   `AbsolutePathBuf` 反序列化缺少 base path 导致项目创建失败，20 评论，WSL 用户受影响面大。今日关联 PR #42405（Windows daemon）或带来改善。

4. **[#41513](https://github.com/openai/codex/issues/41513) / [#34309](https://github.com/openai/codex/issues/34309) — 桌面宠物无法拖动/点击穿透**
   Windows 上浮窗宠物点击穿透问题自 7 月延续至今仍未修复，叠加 [#42243](https://github.com/openai/codex/issues/42243)（Tuck Away 后宠物重新出现），Pets 功能质量问题集中爆发。

5. **[#41079](https://github.com/openai/codex/issues/41079) — Windows 分页线程历史卡在重复 ordinal**
   本地历史投影停滞（非数据丢失），macOS 上有类似报告 [#40178](https://github.com/openai/codex/issues/40178)，疑为跨平台 app-server 共性问题。

6. **[#41540](https://github.com/openai/codex/issues/41540) — Windows 无头启动（0x80071770）**
   AppX 包中 `node_repl.exe` 受保护重定位失败导致应用无 UI 启动，Windows 打包/权限体系的老大难。

7. **[#41969](https://github.com/openai/codex/issues/41969) / [#42224](https://github.com/openai/codex/issues/42224) / [#41957](https://github.com/openai/codex/issues/41957) — 配额异常系列**
   Pro Lite 周配额一天耗尽 93%、Plus 配额消耗暴涨 9x、Pro 20x 小修复任务快速耗尽——配额问题已覆盖 Plus / Pro Lite / Pro 全档位。

8. **[#41265](https://github.com/openai/codex/issues/41265) — CLI 升级后恢复会话工具全部不可用**
   升级后 resume 的旧会话丢失全部工具能力，需 `/model` 手动恢复，影响会话连续性。

9. **[#38886](https://github.com/openai/codex/issues/38886) — Windows 沙箱误拦截用户明确授权的文件删除**
   完全权限设置下仍被 "blocked by policy" 拒绝，沙箱策略与用户意图的冲突问题。

10. **[#38825](https://github.com/openai/codex/issues/38825) — 单任务中产生数百个重复 Node/MCP 进程**
    Windows 桌面版 MCP 进程泄漏，性能影响严重。

---

## 四、重要 PR 进展

> 今日 PR 几乎全部由 @copyberry[bot] 提交并当日合并，自动化开发流程是显著特征。

1. **[#42405](https://github.com/openai/codex/pull/42405) — Windows 支持 app-server daemon**
   补齐 Windows 上后台共享 app-server 与自动 TUI attach 能力，直接回应 #41463 等 Windows 痛点。

2. **[#42413](https://github.com/openai/codex/pull/42413) — MCP OAuth 协同刷新**
   支持 streamable HTTP MCP 连接的凭据刷新与持久化，修复 token 过期问题。

3. **[#42428](https://github.com/openai/codex/pull/42428) / [#42455](https://github.com/openai/codex/pull/42455) / [#42419](https://github.com/openai/codex/pull/42419) — Agent Command Center 三连升级**
   共享 composer（多行编辑、Vim 模式）、实时任务详情预览、`Ctrl+O` 会话恢复。

4. **[#42408](https://github.com/openai/codex/pull/42408) — 加固嵌入式输入框**
   `!` `/` `?` 前缀按字面处理、粘贴/草稿取消时保留缓冲字符，输入体验细节修复。

5. **[#42406](https://github.com/openai/codex/pull/42406) — 启动时尊重显式插件提及**
   用户显式 @插件 时等待对应 MCP server 就绪，修复工具不可用问题（关联 #41265 类痛点）。

6. **[#42417](https://github.com/openai/codex/pull/42417) — 托管应用网络策略**
   新增 `application.network` 精确域名 allow/deny 规则与 TOML 优先级。

7. **[#42410](https://github.com/openai/codex/pull/42410) / [#42399](https://github.com/openai/codex/pull/42399) — 对齐策略（misalignment）暂停后可审查续聊**
   安全策略触发暂停时，用户可查看 findings 并显式决定是否继续。

8. **[#42458](https://github.com/openai/codex/pull/42458) — app-server API 暴露线程 originator**
   originator 持久化于线程元数据，贯穿 list / resume / rollout / SQLite 全链路。

9. **[#42401](https://github.com/openai/codex/pull/42401) / [#42425](https://github.com/openai/codex/pull/42425) — TUI 协作模式与实验特性改为服务端发现**
   TUI 配置项动态化，减少客户端硬编码，向服务端驱动架构演进。

10. **[#42451](https://github.com/openai/codex/pull/42451) — 按 submission ID 确认 pending steer**
    修复相同消息的完成回执可能错误确认/重复提交 pending steer 的竞态问题。

---

## 五、功能需求趋势

| 方向 | 代表 Issue | 趋势解读 |
|---|---|---|
| **配额透明与可控性** | #41220、#41622、#41969 | 最强呼声：配额计量准确、可关闭后台消耗（如自动 recap） |
| **Windows/WSL 平台对齐** | #41463、#41540、#38886 | Windows 体验显著落后 macOS，打包、沙箱、daemon 均有缺口 |
| **插件与 MCP 生态** | #20605、#40852 | MCP 热加载、跨会话工具可用性需求突出 |
| **长会话/长线程导航** | #35975、#41079 | Agent 长任务场景下的历史检索与意图导航 |
| **桌面体验细节** | #41513、#34309、#42243 | Pets 等趣味功能质量问题频出，消耗社区信任 |

---

## 六、开发者关注点

1. **配额计量可信度危机**：跨 Plus / Pro Lite / Pro 20x 各档位的异常消耗报告持续累积，且 #42217 反映“限额仍有但全模型报耗尽”，计量与展示层均可能有 bug，建议重度用户开启本地 token 统计交叉验证。
2. **升级破坏会话连续性**：#41265 显示跨版本 resume 会丢失工具能力，升级前注意保留会话记录，`/model` 是当前 workaround。
3. **Windows 用户暂处二等公民状态**：daemon、沙箱授权、进程管理多个核心能力在 Windows 缺失或异常；今日 #42405 合并是积极信号，可关注下个版本。
4. **配置向服务端发现迁移**：协作模式、实验特性、权限 profile 改由 app-server 下发（#42401/#42425/#42453），自建集成方需留意 API 兼容性。
5. **MCP 重度用户**：OAuth 协同刷新（#42413）与显式插件提及等待（#42406）改善了此前 token 过期和启动期工具缺失问题，建议升级至 0.153.x。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-09-03

> 数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 一、今日速览

今日无新版本发布，社区活跃度集中在 Issue 讨论与安全修复上。两条 P1 安全 PR 成为焦点：修复 `$VAR`/`${VAR}` 变量展开绕过漏洞（GHSA-wpqr-6v78-jr5g）以及两个 CRITICAL 级 CVE 依赖升级（simple-git、shell-quote）。同时一条将 `gemini-3.8-flash` 提升为默认 flash 模型的 PR 正在推进，暗示新一代 Flash 模型即将落地。

---

## 二、版本发布

过去 24 小时无新 Release。

---

## 三、社区热点 Issues

1. **#22323 · Subagent 达到 MAX_TURNS 后被错误上报为成功（GOAL），掩盖中断事实**（P1，13 条评论）
   Subagent 撞上最大轮次限制却报告 `success`/`GOAL`，会误导主 Agent 和用户认为任务已完成。作为 P1 级可靠性问题引发大量讨论。
   [链接](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **#21409 · Generalist agent 无限挂起**（P1，8 条评论，👍 8）
   委派给 generalist agent 后连创建文件夹这种简单操作也会永久挂起（用户等待 1 小时），禁止使用 subagent 可绕过。社区痛点明显，👍 数最高。
   [链接](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **#19873 · 利用模型的 bash 天性：零依赖 OS 沙箱 + 执行后意图路由**（P2 enhancement，9 条评论）
   社区提出的大方向设计提案：Gemini 3 原生偏好 POSIX 工具链，应通过 OS 级沙箱在安全前提下释放该能力。
   [链接](https://github.com/google-gemini/gemini-cli/issues/19873)

4. **#22745 · AST 感知的文件读取、搜索与代码库映射 EPIC**（P2，7 条评论）
   评估 AST 感知工具能否精确读取方法边界、减少错位读取和 token 噪音，是 Agent 能力演进的重要调查项。
   [链接](https://github.com/google-gemini/gemini-cli/issues/22745)

5. **#26525 · Auto Memory 缺乏确定性脱敏，日志过多**（P2 安全，5 条评论）
   Auto Memory 在模型上下文中已包含未脱敏的 transcript 内容，脱敏发生在“事后”，存在秘密泄露风险，安全问题持续受关注。
   [链接](https://github.com/google-gemini/gemini-cli/issues/26525)

6. **#25166 · Shell 命令执行完成后卡在 "Waiting input"**（P1，4 条评论，👍 3）
   极简命令执行完毕后 CLI 仍显示等待输入并挂起，直接影响日常可用性。
   [链接](https://github.com/google-gemini/gemini-cli/issues/25166)

7. **#21968 · Gemini 几乎不主动使用 skills 和 subagents**（P2，6 条评论）
   即便任务高度相关，模型也不会自发调用自定义 skill/subagent，需显式指令。反映路由策略的调优需求。
   [链接](https://github.com/google-gemini/gemini-cli/issues/21968)

8. **#21983 · Browser subagent 在 Wayland 下失败**（P1，4 条评论）
   Linux Wayland 环境下 browser agent 无法工作，且错误同样显示为 "GOAL" 完成，与 #22323 呼应。
   [链接](https://github.com/google-gemini/gemini-cli/issues/21983)

9. **#22186 · get-shit-done 输出 hook 导致崩溃**（P1，3 条评论）
   输出 hook 在打印用户摘要阶段反复触发 CLI 崩溃，稳定性问题。
   [链接](https://github.com/google-gemini/gemini-cli/issues/22186)

10. **#29175 · tildeifyPath 将兄弟目录误判为当前 home 目录**（今日新报，P2，small effort）
    `startsWith(homeDir)` 缺少路径分隔符边界检查：`/Users/al` 会把 `/Users/albert/proj` 错转为 `~bert/proj`。今日新提交，修复成本低。
    [链接](https://github.com/google-gemini/gemini-cli/issues/29175)

---

## 四、重要 PR 进展

1. **#28902 · 修复 `$VAR`/`${VAR}` 变量展开绕过（P1 安全）** — 已关闭
   补全 `detectBashSubstitution()` 的不完整检查，封堵 GHSA-wpqr-6v78-jr5g 的绕过路径，并加固自动化工作流。
   [链接](https://github.com/google-gemini/gemini-cli/pull/28902)

2. **#29094 · 升级 simple-git 至 3.32.3（CVE-2026-28292，CRITICAL）** — 开放中
   [链接](https://github.com/google-gemini/gemini-cli/pull/29094)

3. **#29095 · 升级 shell-quote 至 1.8.4（CVE-2026-9277，CRITICAL）** — 开放中
   [链接](https://github.com/google-gemini/gemini-cli/pull/29095)

4. **#29172 · 注册 gemini-3.5~3.8-flash 并将 3.8-flash 设为默认 flash 模型** — 开放中
   新一代 Flash 模型接入的信号性 PR。
   [链接](https://github.com/google-gemini/gemini-cli/pull/29172)

5. **#29117 · MCP OAuth 流程强制 RFC 9207 issuer 校验** — 已关闭
   防止 OAuth 响应来源不一致导致的 token 误路由，企业/MCP 场景安全增强。
   [链接](https://github.com/google-gemini/gemini-cli/pull/29117)

6. **#29115 · 系统级配置路径强制权限与所有权检查** — 开放中
   Windows ACL（PowerShell）+ POSIX ownership 双平台校验，防配置文件被篡改。
   [链接](https://github.com/google-gemini/gemini-cli/pull/29115)

7. **#28914 · 重试 nudge 注入对话尾部以保留 prefix caching** — 已关闭
   将重试提示从 systemInstruction 移到 contents 末尾，兼顾恢复效果与缓存命中率，性能优化佳作。
   [链接](https://github.com/google-gemini/gemini-cli/pull/28914)

8. **#29093 · git ignore 检查性能优化（内存缓存 + 子树剪枝）** — 开放中（P1，size/l）
   大幅减少重复模式匹配。
   [链接](https://github.com/google-gemini/gemini-cli/pull/29093)

9. **#29098 · 修复 useInputHistoryStore 状态更新器不纯问题** — 开放中
   React StrictMode 下副作用可能双触发，属正确性修复。
   [链接](https://github.com/google-gemini/gemini-cli/pull/29098)

10. **#29173 / #29177 / #29178 · fast-uri、qs/express 依赖升级** — fast-uri 3.1.7 为安全版本，dependabot 批量更新。
    [fast-uri](https://github.com/google-gemini/gemini-cli/pull/29173)

---

## 五、功能需求趋势

- **Agent 可靠性与可观测性**：subagent 误报成功（#22323）、挂起（#21409）、bug 报告缺 subagent 上下文（#21763）、轨迹分享（#22598）——社区强烈要求“看得见、报得准”。
- **代码理解升级**：AST 感知读取/搜索/映射（#22745、#22746）与 "Tactful Extraction" 精简读取（#19561），目标都是降低 token 消耗与噪音。
- **安全与沙箱**：OS 级零依赖沙箱（#19873）、配置权限校验、Auto Memory 脱敏（#26525）持续升温，是本周最密集的 PR 方向。
- **浏览器 Agent 强化**：Wayland 支持（#21983）、会话接管与锁恢复（#22232）、settings.json 覆盖生效（#22267）。
- **新模型支持**：gemini-3.8-flash 默认化（PR #29172）。

---

## 六、开发者关注点

1. **挂起/卡死类问题频发**：generalist agent 挂起、shell 卡 "Waiting input"、vite 交互式提示卡死（#22465）——稳定性仍是最大痛点。
2. **假成功信号**：多种失败场景（MAX_TURNS、浏览器失败）均报告为 GOAL 成功，用户难以察觉任务未完成，需重点关注 #22323 系列。
3. **Subagent/Skill 调度不积极**：模型不主动委派（#21968），symlink 的 agent 定义不识别（#20079），自定义扩展体验有待打磨。
4. **Token 成本**：基础上下文约 36.6k tokens/turn，社区对“精准读取”“剪枝”类优化呼声高。
5. **安全合规压力**：两个 CRITICAL CVE 待合并、Auto Memory 泄密隐患未解，建议企业用户关注 28902/29094/29095 的发布节奏。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-03 | 数据来源：github.com/github/copilot-cli**

---

## 1. 今日速览

过去 24 小时社区活跃度较高，31 条 Issue 有更新，发布了修复版本 **v1.0.83-3**。最突出的主题是**内存稳定性**：多个独立报告（#4686、#4699、#4694）指向长时间会话导致的 V8 堆 OOM 崩溃和资源泄漏，或将成为近期最紧迫的修复方向。此外，BYOK/自定义模型、MCP 生态和企业级配置问题也持续引发讨论。

---

## 2. 版本发布

- **v1.0.83-3**（[Release](https://github.com/github/copilot-cli/releases)）：官方说明为 "Fixes and changes"，属迭代修复版本。值得注意的是 #4587 确认了 1.0.83-2 是首个包含运行时 `catalog.search` 及 Catalog 生成体验的包。

---

## 3. 社区热点 Issues（Top 10）

1. **#3709 — 单会话内通过 `/model` 切换多模型（含 BYOK/本地 Provider）** ⭐ 29 👍
   长期高热度需求。BYOK 模式将会话锁定单一 `COPILOT_MODEL`，模型选择器不显示本地 Provider 模型。7 条评论，社区对灵活模型切换诉求强烈。
   [链接](https://github.com/github/copilot-cli/issues/3709)

2. **#4695 — MCP OAuth Token 跨会话不可靠复用，被迫反复重新授权**
   HTTP 类型 MCP 服务器（PKCE 公共客户端）的缓存 key 哈希重复生成，导致 token 无法复用。5 条评论，属 9 月 2 日新提交的高优先级 Bug。
   [链接](https://github.com/github/copilot-cli/issues/4695)

3. **#4664 — 恢复长会话时 JavaScript 堆 OOM 崩溃**
   在加载/恢复大型旧会话时 Node 进程达到堆上限并崩溃，是内存问题系列报告的代表。
   [链接](https://github.com/github/copilot-cli/issues/4664)

4. **#4525 — 1.0.81-1 在 `server/discover` 成功后仍发送旧版 `initialize`，触发 -32022**
   影响 Python MCP SDK 2.0.0 双时代服务器的协议兼容性问题，5 条评论，MCP 互操作性关键议题。
   [链接](https://github.com/github/copilot-cli/issues/4525)

5. **#4438 — `disable-model-invocation: true` 导致 Skill 完全不可达（而非仅手动调用）** 👍 6
   项目 Skill 在列表中可见但 `skill()` 工具报 "Skill not found"，语义与预期（仅禁用模型自动调用）不符，影响 Skill 工作流设计者。
   [链接](https://github.com/github/copilot-cli/issues/4438)

6. **#4224 — Subagent 调用的 OTel Span 缺失计费属性，外部成本核算偏低**
   `task` 工具产生的 subagent 模型调用 span 缺少 `github.copilot.nano_aiu`、`github.copilot.cost` 等属性，导致企业成本审计低估实际消耗。
   [链接](https://github.com/github/copilot-cli/issues/4224)

7. **#4680 — 向自定义 OpenAI 兼容端点发送错误 Model ID，直接杀死会话**
   配置 `mimo-v2.5` 等非 OpenAI 模型名时，实际请求体仍发送 `gpt-5.4-nano`，BYOK 用户核心阻断问题。
   [链接](https://github.com/github/copilot-cli/issues/4680)

8. **#4686 — 37 分钟后 OOM 崩溃：泄漏 31,965 个 libuv 异步句柄（SEA 忽略 NODE_OPTIONS）**
   附带详细诊断数据的高质量报告，指出 SEA 打包导致无法通过 `NODE_OPTIONS` 缓解，与 #4694（WSL2 下 31GB RSS）共同指向句柄泄漏根因。
   [链接](https://github.com/github/copilot-cli/issues/4686)

9. **#4674 — 恢复会话不还原自定义 Agent（#917 回归）**
   resume 后 agent 的 `mcp-servers:` 和 `tools:` 白名单均未重新应用，会话静默退化为无 Agent 状态，属回归类问题。
   [链接](https://github.com/github/copilot-cli/issues/4674)

10. **#4671（已关闭）— 1.0.81 回归：TLS 审计代理后 OAuth 登录失败**
    企业代理环境下 1.0.80 可用、1.0.81 失败，device-code 与 Web 流均受影响，已关闭或已修复，可关注是否随 1.0.83 系列解决。
    [链接](https://github.com/github/copilot-cli/issues/4671)

---

## 4. 重要 PR 进展

过去 24 小时**无活跃 PR 更新**，略过本节。社区修复进展主要通过 Issue 讨论与 Release 节奏体现。

---

## 5. 功能需求趋势

从近期 Issue 中可提炼出以下方向：

- **多模型/BYOK 灵活性**（#3709、#4680、#4703、#4275）：单会话内切换 GitHub 托管与本地模型、per-agent Provider 端点、ACP 模式暴露 `contextTier`——用户希望彻底解耦“一个进程一个模型”的限制。
- **会话管理与恢复**（#4664、#4699、#4704、#4705、#4696）：按 cwd 过滤会话列表、修复 resume 场景下的 Agent 丢失与 OOM、队列提示卡死、allow-all 权限失效等。
- **MCP 生态健壮性**（#4695、#4525、#4598、#4697）：OAuth token 缓存、协议版本握手、服务器静默不连接、`/clear` 后子进程残留。
- **可观测性与成本**（#4224）：OTel 计费属性完整性，企业审计刚需。
- **Windows 平台体验**（#2271、#4702、#4701）：Shell 类型配置、路径分隔符去重、审批预览路径截断。
- **插件/Skill 体系**（#4655、#4700、#4283、#4665）：Agent Plugins 1.0 规范的发现机制、企业托管插件持久化、`skillDirectories` 在 ACP 模式生效。

---

## 6. 开发者关注点（痛点总结）

1. **内存与稳定性是当前最大痛点**：至少 4 个独立报告（#4686、#4699、#4664、#4694）证实长会话场景下存在系统性的句柄泄漏与堆 OOM，且 SEA 打包使 `--max-old-space-size` 调优失效；崩溃转储还被写入用户 cwd（#4699）。
2. **`/compact` 失败反复出现**：#2861 与 #4698 均报告 "received empty response from model"，压缩失败与长会话 OOM 可能互为因果。
3. **BYOK 体验不完整**：模型 ID 被覆盖发送（#4680）、无法动态切换（#3709）、无法多端点共存（#4703），企业自托管模型用户 frustration 明显。
4. **企业环境兼容性**：TLS 审计代理（#4671）、服务器托管插件配置（#4283）、计费可观测性（#4224）表明企业用户已成重要群体，其代理/审计/合规需求需要官方系统性回应。
5. **恢复会话语义不一致**：Agent 不还原（#4674）、权限丢失（#4696）、OOM 崩溃（#4664）——"resume" 是当前 Bug 密度最高的用户路径之一。

---
*本报告基于过去 24 小时 GitHub 公开数据自动整理，链接均指向对应 Issue/Release 页面。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-09-03 | 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)**

---

## 📌 今日速览

今日无新版本发布。过去 24 小时内，多个历史 Issues 和 PR 集中更新并关闭，其中大部分创建于 2026 年 3 月初的功能请求（如 undo 功能、`--agent-file` 支持）于今日关闭，推测社区维护方进行了一轮集中的 Issue 清理或已落地相关功能。同时，动态计算 completion budget 的 PR #2332 也已关闭，值得后续关注其是否已合入主线。

---

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues

今日共 5 条 Issue 更新（均为 CLOSED）：

1. **[#1293] 远程 SSH 服务器上无法通信（bug）**
   链接：[Issue #1293](https://github.com/MoonshotAI/kimi-cli/issues/1293)
   无图形界面、无法修改系统 DNS 的远程 SSH 环境下 CLI 无法与模型通信。这是典型的服务器端使用场景问题，对运维/远程开发者影响较大，现已关闭（可能已修复或给出 workaround）。

2. **[#1311] 请求增加 undo 功能**
   链接：[Issue #1311](https://github.com/MoonshotAI/kimi-cli/issues/1311)
   用户希望对标 opencode 的 undo 能力，可回滚 agent 的文件操作。这是 CLI 工具的高频刚需，关闭状态暗示可能已排期或实现。

3. **[#1310] WebUI 中内联渲染 Mermaid 图表**
   链接：[Issue #1310](https://github.com/MoonshotAI/kimi-cli/issues/1310)
   仓库已有 Mermaid 解析能力，用户希望 WebUI 端补齐渲染。反映 WebUI 体验正在成为社区关注重点。

4. **[#1309] 类 OpenClaw 功能（heartbeat / cron / memories）**
   链接：[Issue #1309](https://github.com/MoonshotAI/kimi-cli/issues/1309)
   用户希望 CLI/WebUI 具备定时任务、心跳和长期记忆能力，并建议与 [nanobot](https://github.com/HKUDS/nanobot) 集成。指向 agent 自治化方向。

5. **[#1307] `kimi web` 支持 `--agent-file` 参数**
   链接：[Issue #1307](https://github.com/MoonshotAI/kimi-cli/issues/1307)
   `kimi` 子命令已支持 `--agent-file` 而 `kimi web` 不支持，存在一致性缺口。用户已自行实现，👍 3 为今日互动最高，说明自定义 agent 配置需求旺盛。

---

## 🔧 重要 PR 进展

今日共 1 条 PR 更新：

1. **[#2332] fix(kimi): 动态 clamp completion budget**
   链接：[PR #2332](https://github.com/MoonshotAI/kimi-cli/pull/2332)
   移除 provider 硬编码的 `max_tokens = 32000`，改为按请求动态计算适配当前上下文窗口的 `max_completion_tokens`。可避免长上下文场景下因预算超限导致的请求失败，是值得关注的推理质量/稳定性改进。当前状态为 CLOSED，建议关注是否已合入。

---

## 📈 功能需求趋势

- **WebUI 体验补齐**：Mermaid 渲染、参数对齐（#1310、#1307），WebUI 正在成为二等公民变一等的过渡期。
- **操作安全性**：undo / 回滚机制是高频诉求（#1311）。
- **Agent 自治能力**：heartbeat、cron、长期记忆（#1309），社区希望 CLI 从“被动工具”走向“常驻 agent”。
- **服务器/远程场景兼容**：无头环境下的网络与配置问题（#1293）。

---

## ⚠️ 开发者关注点

1. **远程无头环境可用性**：SSH 服务器场景下的网络通信是实际部署中的痛点。
2. **Token 预算硬编码问题**：PR #2332 暴露了长上下文下 `max_tokens` 固定值的隐患，使用长上下文的用户可关注该修复的落地版本。
3. **命令行参数一致性**：子命令间功能不对齐（如 `--agent-file`）影响脚本化使用体验。
4. **与竞品的功能对标**：opencode 的 undo、OpenClaw 的自治能力成为社区对比的参照系，值得产品侧持续跟踪。

---

*本日报由自动化数据汇总生成，如有遗漏欢迎反馈。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-09-03）

## 📌 今日速览

OpenCode 发布 **v1.18.27**，重点修复 provider 超时问题（默认提升至 5 分钟）并为 Anthropic `thinking.blockBinding` 增加配置开关。社区功能讨论焦点集中在“小模型处理轻量任务”（issue + PR 同日提交）和原生 `/goal` 会话目标功能上。桌面端浏览器插件（browser pane + plugin RPC）持续推进，插件生态能力显著增强。

---

## 🚀 版本发布

**v1.18.27**（Core 更新）
- Provider 请求头超时默认提升至 5 分钟，减少慢启动模型的误判失败
- 流式 chunk 超时同样默认 5 分钟，支持 `false` 显式禁用
- Anthropic `thinking.blockBinding` 可通过配置选择退出

---

## 🔥 社区热点 Issues

1. **[#27167](https://github.com/anomalyco/opencode/issues/27167)** [FEATURE] 原生 `/goal` 会话目标命令 — **78 评论 / 140 👍**，长盛不衰的热门需求，希望为会话提供持久化的目标与生命周期管理。
2. **[#45995](https://github.com/anomalyco/opencode/issues/45995)** `provider.only` 白名单下仍报 404 "No allowed providers" — 白名单与实际 provider 匹配逻辑存在矛盾，影响 Console 用户。
3. **[#46929](https://github.com/anomalyco/opencode/issues/46929) / [#46988](https://github.com/anomalyco/opencode/issues/46988)** Agent 轻量轮次使用小/快模型 — 多步任务中状态更新、确认等轻量操作复用主模型导致低效，同日已有配套 PR（见下文）。
4. **[#32634](https://github.com/anomalyco/opencode/issues/32634)** 压缩后系统提示词硬编码"继续或询问”优先继续 — 可能诱发自主的重资源操作，涉及安全与可控性设计。
5. **[#46981](https://github.com/anomalyco/opencode/issues/46981)** Pop!_OS 上"Open in File Manager"图标无限加载 — UI 状态管理 bug。
6. **[#46987](https://github.com/anomalyco/opencode/issues/46987)** Build 按钮的 Agent 列表无法滚动，内容溢出容器。
7. **[#46517](https://github.com/anomalyco/opencode/issues/46517)** 桌面版启动报 `TypeError: Failed to fetch`（ClientError: Transport）— 中文用户报告的桌面端启动失败。
8. **[#46953](https://github.com/anomalyco/opencode/issues/46953)** Go 套餐用量计算错误 — 月度额度提前耗尽，计费类问题用户敏感度高。
9. **[#45823](https://github.com/anomalyco/opencode/issues/45823)** 启用 housecarl MCP 后部分模型报"递归 JSON Schema 不支持” — MCP 与特定模型组合的兼容性问题。
10. **[#35340](https://github.com/anomalyco/opencode/issues/35340)** [回归] v1.17.x web UI 会话列表空白 — dev 分支修复未 cherry-pick 到稳定线，反映发布流程问题。

---

## 🔧 重要 PR 进展

1. **[#46989](https://github.com/anomalyco/opencode/pull/46989)** feat: agent 可选小模型处理轻量轮次 — 将 `Catalog.model.small()` 接入 session runner，对应 issue #46988。
2. **[#46531](https://github.com/anomalyco/opencode/pull/46531)** 实验性浏览器插件 `@opencode-ai/plugin-browser` — 仅使用公共插件 API，支持截图附件。
3. **[#44838](https://github.com/anomalyco/opencode/pull/44838)** 桌面端 Browser 标签页，通过 plugin RPC 连接沙箱 Chromium，含地址栏/导航控制。
4. **[#46530](https://github.com/anomalyco/opencode/pull/46530)** 插件级 `ctx.permission.assert()` 权限断言 API — 插件生态安全能力扩展。
5. **[#46690](https://github.com/anomalyco/opencode/pull/46690)** 暴露 session forms、session list 与全局事件流给插件（源自 Telegram bot 插件开发需求）。
6. **[#46970](https://github.com/anomalyco/opencode/pull/46970)** 目录浏览复用当前 Location — 避免每个目录触发完整 runtime（含 MCP server）启动，性能优化明显。
7. **[#46978](https://github.com/anomalyco/opencode/pull/46978)** 修复 ID 生成器 6 字节时间字段溢出（需 53 bits），解决可排序 ID 回绕问题。
8. **[#46974](https://github.com/anomalyco/opencode/pull/46974)** 修复 V2 会话 undo 保存期间接受新 prompt 的一致性问题。
9. **[#44889](https://github.com/anomalyco/opencode/pull/44889)** 识别 litellm 的 `ContextWindowExceededError` 包装错误，改进上下文超限处理。
10. **[#46990](https://github.com/anomalyco/opencode/pull/46990) / [#46993](https://github.com/anomalyco/opencode/pull/46993)** Mermaid 图表支持：序号图消息中的分号转义（`#59;`）与共享语法指引。

---

## 📈 功能需求趋势

- **会话目标与记忆持久化**：`/goal`（#27167，140 👍）与跨重启个性化记忆（#35291）呼声高，用户希望更结构化的长任务管理。
- **模型路由与成本优化**：轻量轮次用小模型（#46929/#46988）是当日最活跃的新需求方向。
- **插件/扩展生态**：权限断言、session list、事件流等公共 API 暴露（#46530/#46690），社区正围绕 bot、浏览器等场景构建插件。
- **桌面端体验**：浏览器面板、设置路由化（#46984）、会话项目菜单（#46977）等 UI 打磨密集。

## ⚠️ 开发者关注点

- **超时与流式稳定性**：v1.18.27 与 PR #46741 表明 provider 超时是近期高频痛点，尤其针对 openai-compatible 自定义 provider。
- **Windows 兼容性**：路径分隔符（#35329/#35330）、终端标题恢复（#35328）、进程误杀（#35331/#35332）等一批 Windows 问题已陆续关闭，进展良好。
- **稳定版回归管理**：#35340 反映 dev 修复未同步到稳定分支，发布/回移植流程值得关注。
- **计费与额度透明度**：Go 套餐用量计算错误（#46953）直接影响付费用户信任。
- **Agent 可控性**：硬编码提示词引发过度自主操作（#32634、#35244），安全边界设计是社区持续讨论的话题。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-09-03

## 一、今日速览

今日发布 **live-host-v0.2.0**，TUI 从 ink 迁移至 OpenTUI 的工作持续推进（对应追踪 Issue #8662 与 CLI 迁移 batch 4 已合入 release）。安全方向出现多条重要反馈：`qwen serve` 的 shell guard 设计（#10860）、主分支 CVE 审计全面失败（#10850，P1）以及一个 P1 级交互会话 DoS bug 已被关闭修复（#10818）。

---

## 二、版本发布

### live-host-v0.2.0
- [PR #10667](https://github.com/QwenLM/qwen-code/pull/10667) fix(ci): 使共享 ECS Vitest 并发可调
- feat(cli): OpenTUI 迁移 batch 4

---

## 三、社区热点 Issues（Top 10）

1. **[#8662](https://github.com/QwenLM/qwen-code/issues/8662) — OpenTUI 迁移追踪（24 评论）**
   当前 TUI 基于 ink 7 + React 19，附带约 1037 行 patch，闪烁等问题难以在 ink 框架内根治。作为 roadmap/terminal-ux 核心工程，是评论区讨论最多的 issue，与本次 release 的 batch 4 直接对应。

2. **[#10850](https://github.com/QwenLM/qwen-code/issues/10850) — P1：依赖 CVE 审计全仓库失败**
   main 分支 lockfile 报 4 个漏洞（1 高危），涉及 fast-uri/qs/uuid 新公告，CI 仓库级失败，已标记 ready-for-human，急需处理。

3. **[#10818](https://github.com/QwenLM/qwen-code/issues/10818) — P1：Monitor pulse storm 可 DoS 交互会话（已关闭）**
   0.22.3 版本中 agent 脉冲风暴导致 ESC 取消无效、用户输入被饿死（transcript 达 25MB/1.4 万条记录）。P1 级已修复关闭，建议用户关注后续版本。

4. **[#10860](https://github.com/QwenLM/qwen-code/issues/10860) — `qwen serve` shell guard 安全模型问题**
   daemon 内置 shell guard 无视会话审批模式，拒绝会话目录外的只读 Git 命令，且不可配置、不可审计。与前日 #10859 为同一主题的深化反馈，daemon/Web Shell 安全是当前社区反馈焦点。

5. **[#10782](https://github.com/QwenLM/qwen-code/issues/10782) — P2：已移除 workspace 遗留脏 selection 阻塞新启动（已关闭）**
   多 workspace daemon 下动态注销 workspace 后 `committedSelection` 残留，导致后续 Channel 无法启动。Channels 子系统连续出现状态一致性 bug（另见已关闭的 #10705）。

6. **[#10872](https://github.com/QwenLM/qwen-code/issues/10872) — P2：思考输出的语言感知重写中间件**
   社区请求公开可插拔中间件 API，在 thinking/reasoning 输出发送给用户前做转换（如翻译），需同时覆盖 CLI 与 serve 会话。反映国际化场景的强需求。

7. **[#10692](https://github.com/QwenLM/qwen-code/issues/10692) — P2：`<tool_call>` 方言 XML 工具调用泄漏为纯文本**
   模型以原始 XML 发出工具调用时，恢复逻辑只覆盖 invoke 方言，漏掉了系统提示词自己教的 `<tool_call>` 方言。与 #10791、#10797、#10700 同属内容泄漏家族，是 content-generation 板块的系统性问题。

8. **[#10834](https://github.com/QwenLM/qwen-code/issues/10834) — P2：MCP 工具返回的图片绕过图像预算**
   `read_file` 读图会缩放到 1568px 以内，但 MCP 工具返回的图片原分辨率直接进入 context，存在 token 成本与上下文污染风险。

9. **[#10865](https://github.com/QwenLM/qwen-code/issues/10865) — P2：Web Shell 会话工作流每次渲染重复推导三次投影**
   性能优化跟进项，索引应只构建一次却被反复重建。

10. **[#9942](https://github.com/QwenLM/qwen-code/issues/9942) — 隐藏 skill 命令的顶层斜杠补全**
    安装大量 skill 后 `/` 补全菜单拥挤，内置命令难以找到。典型的 UX 打磨需求，5 条评论讨论热烈。

---

## 四、重要 PR 进展（Top 10）

1. **[#9466](https://github.com/QwenLM/qwen-code/pull/9466) — refactor: rewind 映射锚定稳定 prompt 身份**
   为 TUI rewind 建立用户可见回合与模型历史的精确链接，`promptId` 以 Symbol 元数据携带、不进入 provider payload。长周期大型重构，仍在推进。

2. **[#8707](https://github.com/QwenLM/qwen-code/pull/8707) — feat(chrome): Qwen WebBridge 直控浏览器**
   `qwen serve` 通过 Chrome 扩展直连用户真实 Chromium profile，实现 17-action 控制面。浏览器集成是重要能力扩展。

3. **[#9812](https://github.com/QwenLM/qwen-code/pull/9812) — refactor: 退役 @qwen-code/webui**
   物理删除遗留 webui 包，对话 HTML 迁移至规范 sanitizer，Web Shell 架构收敛的关键一步。

4. **[#10594](https://github.com/QwenLM/qwen-code/pull/10594) — feat(web-shell): 动态工作流运行可视化与管理**
   新增 Runs 页面，支持浏览/暂停/恢复/重试/删除工作流运行，能力门控发布。

5. **[#10687](https://github.com/QwenLM/qwen-code/pull/10687) — fix(cli): Channel pidfile 防范 PID 复用**
   持久化 Linux 进程启动令牌，避免向被复用 PID 的无关进程发信号。

6. **[#8927](https://github.com/QwenLM/qwen-code/pull/8927) — feat(channels): sessionRotation 限制会话生命周期**
   支持 maxTurns / 时间上限，到期后新消息自动开新会话。

7. **[#10817](https://github.com/QwenLM/qwen-code/pull/10817) — feat(channels): 按前缀过滤消息**
   可选共享 `messagePrefix`，支持 `@mention` 后匹配，降低误触发。

8. **[#10807](https://github.com/QwenLM/qwen-code/pull/10807) — feat(dingtalk): 聚合后台 agent 响应**
   携带结构化后台任务元数据，DingTalk 阻塞流式场景下按 agent 独立缓冲。

9. **[#10455](https://github.com/QwenLM/qwen-code/pull/10455) — fix(cli): output-language 文件不可写时启动崩溃**
   只读 HOME 或 CI runner 场景下不再中断启动，提升健壮性。

10. **[#7667](https://github.com/QwenLM/qwen-code/pull/7667) — feat(core): 对齐 GenAI 内容遥测字段（已关闭）**
    对齐 OpenTelemetry GenAI 规范与阿里云 ARMS 的 7 个 span 属性，已合并。

> 另注：@wenshao 的 `/review` 体系系列 PR（[#9768](https://github.com/QwenLM/qwen-code/pull/9768)、[#9940](https://github.com/QwenLM/qwen-code/pull/9940)、[#10136](https://github.com/QwenLM/qwen-code/pull/10136)、[#10169](https://github.com/QwenLM/qwen-code/pull/10169)）持续演进，覆盖审计账本、发现线程回复、fix-audit 再审等能力。

---

## 五、功能需求趋势

- **终端 UX 重构（OpenTUI 迁移）**：#8662 是讨论量最高的 roadmap 项，batch 4 已随 release 落地，迁移进入中期。
- **Daemon / Web Shell 安全与可运维性**：#10860、#10859、#10469 集中反馈 shell guard、文件夹信任门的可配置性、审计与可见性诉求。
- **多 workspace / Channels 可靠性**：#10782、#10705、#10688、#10687 显示状态一致性（selection、pidfile、事件订阅）是 bug 高发区。
- **内容生成卫生（输出净化）**：#10692、#10791、#10797、#10700 构成系统性"内部脚手架泄漏”问题簇。
- **输出国际化**：#10872 的思考内容翻译中间件、#10455 的 output-language 崩溃，均指向非英语用户体验。
- **上下文/成本控制**：#10834 MCP 图片预算缺失等。
- **浏览器与 IM 集成扩展**：WebBridge、DingTalk 聚合、Channels 前缀过滤等生态集成活跃。

## 六、开发者关注点

1. **CI 稳定性是显著噪音源**：过去 24 小时出现约 10 条主分支 CI/E2E 失败 issue（#10864、#10833 等），多与共享 ECS 自建 Runner 相关，团队正通过 #10855、#10858、#10667 等 PR 治理超时与失败报告质量。
2. **依赖安全**：#10850 的 CVE 审计失败（1 high）需尽快升级 lockfile；daemon 侧安全边界设计（shell guard、folder trust）被多位用户质疑"不可配置、不可审计"。
3. **模型输出健壮性**：XML 工具调用方言恢复不全、thinking 块泄漏等问题在真实生产会话中反复出现，`welcome-pr` 标签提示这是适合新贡献者切入的方向。
4. **daemon 多租户/多 workspace 边界**：跨会话设置缓存污染（#10469）、跨会话消息阻塞（#10688）表明进程级共享状态是架构性痛点。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报 — 2026-09-03

## 一、今日速览

v0.9.12 进入密集集成与收尾阶段：今日最大动作是 #5862 合并了 10 个 UX 切片（workbar、水下主题默认、hover 契约等），同时里程碑追踪 Issue #5573 完成了运营交接（operator handoff），明确了 9 月 1 日创始人决策、切片表和验收门禁。此外，插件系统（computer-use bundle、marketplace API）和监督运行控制面（per-session control socket）相继落地，标志着项目正从单一 TUI 工具向可扩展的 agent 平台演进。

## 二、版本发布

过去 24 小时无新 Release。0.9.12 版本仍处于集成分支阶段，以 milestone #5573 为追踪主线。

## 三、社区热点 Issues

1. **[#5573](https://github.com/Hmbown/Codewhale/issues/5573) — v0.9.12 milestone tracker（23 评论）**
   本周期核心追踪 Issue，9 月 2 日更新了运营交接文档、切片表和 PR/重装/自测步骤，是了解 0.9.12 全貌的入口。

2. **[#5316](https://github.com/Hmbown/Codewhale/issues/5316) — EPIC-005: Crate 分解总纲（21 评论）**
   TUI 巨型 crate 拆分的伞形 EPIC，所有子任务和 PR 均向此汇报，是项目架构健康度的风向标。

3. **[#5588](https://github.com/Hmbown/Codewhale/issues/5588) — Provider 中立性审计：18 处 DeepSeek 专属门禁（已关闭）**
   全量审计 2,281 行 "deepseek" 出现位置，修复了 NVIDIA NIM 环境泄漏等问题，是“去 DeepSeek 化、走向中立产品”的标志性工作。

4. **[#5586](https://github.com/Hmbown/Codewhale/issues/5586) — 拆解巨型文件：lib.rs 18.7k 行、config.rs 12.3k 行**
   万行级文件持续引发维护痛苦，0.9.12 清理通道的核心任务，与 EPIC-005 呼应。

5. **[#5533](https://github.com/Hmbown/Codewhale/issues/5533) — 监督运行的控制面：per-session control socket（已关闭，由 PR #5831 落地）**
   社区贡献者 @M-Maciej 提出，面向终端复用器/CI 等外部监督场景，支持 message/interrupt/relaunch/status。

6. **[#5820](https://github.com/Hmbown/Codewhale/issues/5820) — Ollama 本地模型输入预算塌缩到 1024 tokens**
   32K 窗口模型因 64K 默认输出预留被钳制，直接影响本地模型可用性，本地部署用户的高优先级 bug。

7. **[#5863](https://github.com/Hmbown/Codewhale/issues/5863) — ACP 增强：serve --acp 未暴露会话配置**
   编辑器客户端无法显示/切换工作模式，属于今日新报的 IDE/编辑器集成方向问题。

8. **[#5824](https://github.com/Hmbown/Codewhale/issues/5824) — Lane TTL 清理可递归删除未验证路径（已修复）**
   破坏性数据丢失风险：TTL 清理信任持久化的 worktree 路径但未验证归属，属安全级修复。

9. **[#5823](https://github.com/Hmbown/Codewhale/issues/5823) — serve --http 重启后带工具调用历史的线程 400 报错（已修复）**
   影响 systemd 长驻部署 + 严格 serde 校验的 OpenAI 兼容端点用户。

10. **[#5637](https://github.com/Hmbown/Codewhale/issues/5637) — MCP secret 作用域设计：限定到所属 runtime**
    嵌入式宿主场景下，进程级环境变量注入 secret 的生命周期管理不健全，属于深度架构讨论。

## 四、重要 PR 进展

1. **[#5862](https://github.com/Hmbown/Codewhale/pull/5862) — 0.9.12 Fleet-only UX 大合并（已关闭）**
   集成 10 个切片：hover 契约统一、sidebar→workbar 重命名（底部默认）、设置重组、水下主题默认、品牌 logo 等。

2. **[#5858](https://github.com/Hmbown/Codewhale/pull/5858) — ocean_treatment 主题收敛为 ThemeId::Underwater**
   11 个提交完成主题合并，含只读配置迁移与 abyss 测试。

3. **[#5833](https://github.com/Hmbown/Codewhale/pull/5833) + [#5839](https://github.com/Hmbown/Codewhale/pull/5839) — FEAT-019 记忆能力命令切片**
   新增 MEMORY 能力位和 TUI 记忆适配器（search/remember/get/export/reindex/delete），后续 review 修复也已合并。

4. **[#5831](https://github.com/Hmbown/Codewhale/pull/5831) — per-session control socket（#5533）**
   Opt-in Unix JSON-RPC 控制套接字（0600 权限），支持监督运行四个动词。

5. **[#5832](https://github.com/Hmbown/Codewhale/pull/5832) — Provider 中立性门禁修复（#5588）**
   `/balance` 余额查询覆盖 DeepSeek/OpenRouter/SiliconFlow，解除 ghost-text 建议的协议门禁。

6. **[#5854](https://github.com/Hmbown/Codewhale/pull/5854) — Lane TTL 清理前强制验证托管 worktree 身份（#5824）**
   修复破坏性删除路径，Medium Risk 但显著降低数据丢失风险。

7. **[#5840](https://github.com/Hmbown/Codewhale/pull/5840) — 持久化工具调用身份，修复重启后历史回放（#5823）**
   解决严格 schema 端点 400 报错。

8. **[#5855](https://github.com/Hmbown/Codewhale/pull/5855) — 首个独立插件：computer-use bundle（截图/点击/输入 over MCP）**
   插件边界上的首次独立创建，macOS 上已实测 1920px 截图，待 0.9.12 重建后完成 live-install。

9. **[#5842](https://github.com/Hmbown/Codewhale/pull/5842) — /v1/apps 插件与 marketplace 管理（Engine 侧）**
   受门禁的本地插件系统的服务端部分，App 侧随后跟进。

10. **[#5841](https://github.com/Hmbown/Codewhale/pull/5841) + [#5844](https://github.com/Hmbown/Codewhale/pull/5844) — 配置/标识符清理**
    退役 DEEPSEEK_YOLO 环境别名（#5443 分层迁移），删除 AppMode::Auto 冒名者与 VerifierVerdictPolicy 死代码。

## 五、功能需求趋势

- **插件与可扩展性**：computer-use bundle、marketplace API 表明插件化是 0.9.12 后的主线方向（#5855、#5842）。
- **Provider 中立与品牌迁移**：退役 deepseek-tui 时代标识符、多 provider 余额/协议统一（#5588、#5443、#5841）。
- **监督运行与自动化**：control socket、ACP 会话配置、外部监督 harness（#5533、#5863）。
- **Agent 协作体验**：Fleet 子 agent 管理 rail、mid-turn 控制与队列消息、session peek（#5479、#5268、#5271）。
- **工具面扩展**：Playwright 浏览器自动化、LSP rename/code actions、调试器协议、AST 结构化搜索、notebook/归档读取（#3358、#3975、#3981、#3980、#3977）。
- **本地模型支持**：Ollama 输入预算 bug 暴露出本地部署路径的测试不足（#5820）。
- **自动化技能演化**：从对话中自动提取模式、进化 SKILL.md（#5860），社区对“自学习 agent”兴趣上升。

## 六、开发者关注点

1. **代码规模与可维护性**：lib.rs 18.7k / config.rs 12.3k / client.rs 11.1k 行的巨型文件反复引发冲突与痛点，crate 分解是长期工程（#5586、#5316）。
2. **破坏性操作安全**：TTL 清理递归删除未验证路径事件后，社区对 destructive path 的身份校验要求提高（#5824、#5854）。
3. **Secret 生命周期管理**：MCP 凭据的进程级环境注入被指出在多线程场景下不健全，需要 runtime 作用域化（#5637）。
4. **长驻部署稳定性**：systemd/serve --http 场景下重启后的历史回放、严格 schema 兼容性是生产用户高频反馈（#5823）。
5. **本地模型预算配置**：输出预留与输入窗口的钳制逻辑缺乏合理默认值，32K 本地模型实际可用输入骤降（#5820）。
6. **文档与迁移体验**：标识符分层迁移需明确的兼容承诺（DEEPSEEK_API_KEY 保留、env 别名 0.10 才移除），避免脚本断裂（#5443）。

---
*数据来源：Hmbown/DeepSeek-TUI（现更名 CodeWhale）GitHub Issues & PR，截至 2026-09-03*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*