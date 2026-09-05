# AI CLI 工具社区动态日报 2026-09-05

> 生成时间: 2026-09-05 03:32 UTC | 覆盖工具: 11 个

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

# AI CLI 工具横向对比分析报告
**日期：2026-09-05** | 数据来源：12 个主流 AI CLI 工具 GitHub 公开动态

---

## 一、生态全景

AI CLI 工具生态已进入“多强并立、快速分化”阶段：Anthropic（Claude Code）、OpenAI（Codex）、Google（Gemini CLI）、GitHub（Copilot CLI）四大厂商官方工具主导功能创新节奏，而 OpenCode、Pi/oh-my-pi、Qwen Code 等第三方/开源工具通过多 Provider 聚合与轻量化路线形成差异化竞争。当前生态的三大主线是：**GPT-6-Astra 等新模型的密集适配**（4+ 工具今日均处理其兼容问题）、**Agent 自主性与用户可控性的张力**（自动解决倒计时、循环防护、权限回归），以及**Windows/WSL 平台成为普遍性质量洼地**（几乎所有工具的热点 Issue 都集中于此）。同时，MCP 生态兼容性、prompt-cache 成本优化、上下文压缩可靠性成为跨工具的共性工程议题。

---

## 二、各工具活跃度对比

| 工具 | 今日热点 Issue 焦点 | Issue 活跃度 | PR 活跃度 | Release | 阶段判断 |
|---|---|---|---|---|---|
| **Claude Code** | Function Hooks 提案（99评论）、Windows 桌面顽疾、权限守卫回归 | 极高（Top10 全部 ≥5 评论，最高 159） | 低（仅 2 条更新） | v2.1.261 | 成熟期，迭代快但回归频发 |
| **OpenAI Codex** | 60秒自动解决（204👍）、WSL 项目创建阻断 | 极高（204👍 级 Issue） | 极高（10+ PR，含异步提问系列） | 2 个（v0.153.3/.4） | 快速迭代，功能交付活跃 |
| **Gemini CLI** | Subagent 可靠性危机、安全加固 | 高（P1 级 Issue 密集） | 极高（10+ PR，安全系列为主） | 1 个 nightly | 快速迭代，安全主线明确 |
| **Copilot CLI** | Reasoning effort 配置、ACP 权限回归、OOM | 中高（23👍 级 Issue 多条） | 极低（1 条疑似垃圾 PR） | **3 个**（v1.0.83–84-1） | 内部流水线驱动，社区单向反馈 |
| **OpenCode** | Astra 模型过滤、插件安装超时、计费准确性 | 中高 | 高（10+ PR，维护者密集提交） | 2 个（v1.18.28/.29） | 快速迭代，回归频繁 |
| **Qwen Code** | OpenTUI 迁移、CI 稳定性、导出体积 | 中 | 高（10 PR） | 无 | 重构攻坚期 |
| **oh-my-pi** | 工具循环防护失效、GPT-6 适配 | 中（14-17 评论级） | 极高（10+ PR，含 bot 高速响应） | 2 个（v18.1.9/.10） | 快速迭代，Provider 前沿适配 |
| **Pi** | v0.85.0 打包事故、长会话 CPU | 高（24h 内 64 Issues / 31 PRs） | 高（Mitsuhiko 级贡献者参与） | 1 个（v0.85.0，有缺陷） | 快速成长，发布质量待加强 |
| **DeepSeek TUI** | Ollama 预算坍缩、todo 快照堆积 | 低（5 条） | 中（8 条实质 PR + 10 dependabot） | 无 | 小而精，维护响应快 |
| **Kimi CLI** | 批量关闭历史 Issue、1 条新 Bug | 极低（6 条） | 低（1 条） | 无 | 平稳期/静默期 |
| **DeepSeek Harness** | 无 | 无 | 无 | 1 个（alpha.1） | 早期（alpha 阶段） |

---

## 三、共同关注的功能方向

**1. GPT-6-Astra 新模型适配（当日最集中主题）**
- Codex：两个版本热修复选择器可见性（#42868/#42853）；OpenCode：v1.18.29 修复 OAuth 模型过滤（#47363）；Copilot CLI：v1.0.84-1 新增支持；oh-my-pi：PR #10874 修复 API 路由错误
- 信号：模型发布到工具适配的窗口已压缩至天级，但各家适配质量参差，均在“追赶”

**2. Windows / WSL 平台支持**
- Claude Code（Top30 Issue 约 1/3 涉及 Windows，#42776 达 159 评论）、Codex（WSL 项目创建阻断 #41463、EFS 加密 #25220）、Copilot CLI（#4328 按键映射）、Kimi CLI（#2634）、Qwen Code（CI 大量跳过）
- 信号：Windows 是全行业系统性短板，Codex 的原生 MXC 沙箱（PR #42841）是少数架构级投入

**3. 成本与 Token 效率**
- Codex：串行化多耗 27–45% 用量（#35050）；Claude Code：subagent 缓存多耗 14%（#74318）；Copilot CLI：BYOK 缓存静默失效致成本约 5 倍（#4720）；oh-my-pi：修复远程压缩破坏 prompt-cache
- 信号：BYOK/重度用户对账单透明度高度敏感，缓存复用是硬性竞争力

**4. Agent 自主性 vs 用户控制**
- Codex：60 秒自动解决倒计时（204👍，社区呼声最高单条）；Claude Code：权限守卫回归连 bypassPermissions 都被穿透（#91683）；Gemini CLI：MAX_TURNS 误报成功；oh-my-pi：循环防护被轻易绕过（309 次 yield）；Qwen Code：AUTO 模式审批回退（#11019）
- 信号：自动化失控与不可控成本消耗是跨工具的最大信任危机

**5. 上下文压缩/Memory 可靠性**
- Gemini CLI：Auto Memory 脱敏与静默失败系列；OpenCode：压缩循环烧 token（#30680）；Codex：压缩后 Guardian 加固 PR；Pi：compaction 竞态修复（#9179）；oh-my-pi：notes-backed 上下文实验
- 信号：compaction 已从功能演进为“正确性战场”

**6. MCP 生态兼容性**
- Claude Code（连接器诊断脚本）、Copilot CLI（双协议握手回归 #4525）、Kimi CLI（超时崩溃已关）、OpenCode（v1.18.28 远程 MCP 回归）、oh-my-pi（enabledTools 过滤）
- 信号：MCP 已成标配，但握手协议演进带来的回归成为新的故障来源

---

## 四、差异化定位分析

| 维度 | 工具 | 定位 |
|---|---|---|
| **官方闭源旗舰** | Claude Code | 插件/Hooks 生态深化 + 企业代理环境（组织策略诊断）；用户以专业开发者与企业为主 |
| | Codex | 新模型首发载体 + 多端（Windows 沙箱、Android 远程）；异步提问/ Guardian 安全审查是独有架构 |
| | Gemini CLI | 开源 + **安全加固为主线**（沙箱边界、环境变量注入、路径遍历），工程严谨性突出 |
| | Copilot CLI | GitHub 生态深度集成（任务栏、桌面应用联动、企业管控），企业管控能力最强 |
| **第三方聚合器** | OpenCode | 多 Provider 网关 + 插件生态 + 自有计费体系，面向不想被单一厂商锁定的用户 |
| | Pi / oh-my-pi | 极客向、Provider 前沿实验场（Cursor 原生推理、Muse 订阅、872K 扩展上下文）；oh-my-pi 尤以“复用各订阅”为卖点 |
| **国产力量** | Qwen Code | OpenTUI 自研渲染层 + Web Shell/daemon 架构，工程自主性最强；对标 Claude Code 功能差距 |
| | Kimi CLI / DeepSeek 系 | 追赶期，诉求均以“对标 Claude Code”（Hooks、skill 管理）为参照；DeepSeek Harness 尚处 alpha |

---

## 五、社区热度与成熟度

- **第一梯队（高热度 + 高交付）**：Claude Code、Codex、Gemini CLI——Issue 讨论量最大（百评论级），官方响应最快，但也因用户基数大暴露最多回归问题
- **第二梯队（高产出 + 快速成长）**：OpenCode、oh-my-pi、Pi——PR 密度甚至超过部分官方工具，回归与打包事故频发是成长期代价（Pi v0.85.0 安装失败、OpenCode 连续两版回归）
- **成熟平稳**：Copilot CLI——社区只反馈不贡献（24h 仅 1 条垃圾 PR），开发完全内部化，节奏可控但透明度低
- **攻坚/静默期**：Qwen Code（OpenTUI 重构中）、Kimi CLI（批量关 Issue，或酝酿版本）、DeepSeek TUI（维护质量高但社区规模小）、DeepSeek Harness（alpha 起步）

---

## 六、值得关注的趋势信号

1. **“模型周”效应**：Astra 一发，4+ 工具同日打补丁。对开发者的启示：**选择多 Provider 工具（OpenCode、Pi 系）可降低对新模型的等待成本，但需承受适配质量风险**。

2. **失控防护成为新的核心竞争力**：Codex 204👍 的自动解决 Issue、oh-my-pi 的循环防护绕过、Gemini 的误报成功，说明“agent 烧钱失控”已是行业最大痛点。**生产环境务必设置用量上限与循环熔断**。

3. **升级即回归是常态**：Claude Code（权限守卫）、Copilot CLI（ACP 自动批准属**安全级**回归）、OpenCode（MCP 断连）、oh-my-pi（静默行为变更）。建议：**生产环境锁定版本，升级前查 issue tracker，自动化流水线中警惕权限类回归**。

4. **成本透明度诉求爆发**：缓存失效 5 倍成本（Copilot）、串行化多耗 45%（Codex）、压缩循环烧 token（OpenCode）。BYOK 用户应监控 `cached_tokens`，重度 subagent 用户需评估缓存策略。

5. **Windows 是待开发的半壁江山**：全行业 1/3 热点 Issue 涉及 Windows/WSL。**Windows 用户当前建议优先选择 CLI 而非桌面端，长任务尤其要避开自更新机制**（Claude Code “更新即翻车” 是典型案例）。

6. **开源追赶者以“兼容竞品生态”为捷径**：oh-my-pi 支持 `.claude/rules`、Kimi 用户以 Claude Code 为参照——Claude Code 事实上正在成为 agent 配置格式的事实标准，跨工具配置可移植性值得投入。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
（数据来源：github.com/anthropics/skills，截止 2026-09-05）

---

## 一、热门 Skills 排行

> 注：本期 PR 数据缺失精确评论数，排名综合 PR 活跃度（更新频次、关联 Issue 热度）与 Issue 讨论量得出。

| # | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | **skill-creator 评测修复** ([#1298](https://github.com/anthropics/skills/pull/1298)) | 修复 `run_eval.py` 恒报 0% recall 的问题，含 Windows 流读取、触发检测、并行 worker 修复 | 关联 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论 / 7 👍，10+ 独立复现），描述优化循环“在对噪声做优化”，是社区最痛的 bug 之一 | OPEN |
| 2 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | AI 生成文档的排版质控：孤行、寡段、编号错位 | 触及“每个 Claude 生成的文档都有此类问题”的普遍痛点，补齐文档技能链短板 | OPEN |
| 3 | **Hivemind 多 Agent 编排** ([#1628](https://github.com/anthropics/skills/pull/1628)) | 将机械性工作委派给运行免费模型的 headless opencode worker，Claude 只做规划/审查/合并 | 反映“昂贵模型上下文是稀缺资源”的成本优化思潮，架构讨论热烈 | OPEN |
| 4 | **ODT 文档技能** ([#486](https://github.com/anthropics/skills/pull/486)) | OpenDocument（.odt/.ods）创建、模板填充、转 HTML | 填补开源/ISO 标准文档格式的空白，与 docx/pdf 技能形成互补 | OPEN |
| 5 | **docx 修订 ID 冲突修复** ([#541](https://github.com/anthropics/skills/pull/541)) | 修复 OOXML 共享 `w:id` 空间导致的文档损坏 | 硬编码低 ID 与既有书签冲突，属于会损坏用户文档的高危 bug | OPEN |
| 6 | **self-audit 质量门禁** ([#1367](https://github.com/anthropics/skills/pull/1367)) | 交付前机械文件校验 + 四维推理审计 | 关联 Issue [#1385](https://github.com/anthropics/skills/issues/1385)（推理质量门禁流水线提案），"AI 审计 AI"方向关注度上升 | OPEN |
| 7 | **ServiceNow 平台技能** ([#568](https://github.com/anthropics/skills/pull/568)) | 覆盖 ITSM/ITOM/SecOps/FSM/CSDM 等全平台场景 | 企业级平台技能的代表，跨度极广（存活近 5 个月仍在更新） | OPEN |
| 8 | **skill-quality / skill-security analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) | 两个元技能：从五维度评估 Skill 质量、扫描安全风险 | 与 Issue [#492](https://github.com/anthropics/skills/issues/492)（命名空间信任滥用，43 评论、全仓库最热）形成呼应 | OPEN |

---

## 二、社区需求趋势（来自 Issues）

1. **安全与信任边界**（最热）：[#492](https://github.com/anthropics/skills/issues/492)（43 评论）——社区技能伪装 `anthropic/` 官方命名空间引发信任滥用担忧；[#1175](https://github.com/anthropics/skills/issues/1175) 关注 SKILL.md 内写权限逻辑的安全隐患。
2. **组织级分发与协作**：[#228](https://github.com/anthropics/skills/issues/228)（16 评论 / 8 👍）——期望 Claude.ai 支持组织内 Skill 共享库，摆脱 Slack 手传 .skill 文件。
3. **评测与可靠性工具链**：[#556](https://github.com/anthropics/skills/issues/556)、[#1390](https://github.com/anthropics/skills/issues/1390)——skill-creator 评测脚本和 mcp-builder 评估框架均存在系统性失效，社区强烈要求可用的质量度量。
4. **上下文效率**：[#1487](https://github.com/anthropics/skills/issues/1487)——claude-api skill 单次注入 ~156k token 耗尽上下文；[#1329](https://github.com/anthropics/skills/issues/1329) 提出紧凑记忆符号化方案。Skills 需“按需加载”已成共识。
5. **输出质量自审**：[#1385](https://github.com/anthropics/skills/issues/1385)、[#412](https://github.com/anthropics/skills/issues/412)——交付前校准/对抗审查/交付验证的门禁型技能需求上升。
6. **平台兼容性**：大量 Issue/PR（[#1050](https://github.com/anthropics/skills/pull/1050)、[#1099](https://github.com/anthropics/skills/pull/1099)、[#1362](https://github.com/anthropics/skills/issues/1362)）指向 Windows 支持和现代工具链（pnpm ≥10.1）适配。
7. **互操作与基础设施**：[#16](https://github.com/anthropics/skills/issues/16)（Skills 暴露为 MCP）、[#29](https://github.com/anthropics/skills/issues/29)（Bedrock 支持）、[#189](https://github.com/anthropics/skills/issues/189)（插件重复安装）。

---

## 三、高潜力待合并 Skills

以下 PR 讨论活跃、修复价值明确，落地可能性较高：

- **#1298** skill-creator 评测修复 — 直击最热 bug，多人复现，属“必修”性质
- **#1602** 跨技能可靠性修复（mcp-builder 序列化、基准指标、编码）— 一次解决多个 Issue（含 [#1390](https://github.com/anthropics/skills/issues/1390)）
- **#541** docx 修订 ID 冲突 — 修复文档损坏，风险高、修复小
- **#538** pdf 大小写引用修复 — 一行级修复，纯正确性问题
- **#539** skill-creator YAML 特殊字符校验 — 防止 description 静默截断
- **#1607** claude-api 过期模型 ID 标注 — 关联已确认的 Issue #1603
- **#509** CONTRIBUTING.md — 补齐社区健康指标（当前仅 25%），门槛低、共识强

---

## 四、Skills 生态洞察

**一句话总结：社区最集中的诉求是"可信与可靠"——建立官方命名空间的安全信任机制、修复系统性失效的评测工具链、并让 Skills 从"膨胀注入"走向按需、轻量、可验证的加载方式。**

---

# Claude Code 社区动态日报
**日期：2026-09-05** | 数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 一、今日速览

今日发布 **v2.1.261**，新增组织策略诊断信息及命令/后台任务输出长度可配置项。社区热度最高的是 @poteat 提出的 **Function Hooks 插件增强提案**（99 条评论），同时 **Windows 平台权限守卫回归问题**（2.1.257–2.1.259 引入的 Read() deny 规则误触发弹窗）持续发酵，多条相关 Issue 汇聚。Windows 桌面端的更新机制（孤儿进程、强制自更新）仍是长期未解的老大难。

---

## 二、版本发布

### v2.1.261 ([Release](https://github.com/anthropics/claude-code/releases))
- `/status` 和 `claude doctor` 新增 **"Organization policy"** 行，显示组织策略加载失败的原因（如代理未透传 endpoint），利好企业代理环境排障
- 新增 `bashOutputMaxChars` 和 `taskOutputMaxChars` 设置，可调大命令输出与后台任务输出的截断上限

---

## 三、社区热点 Issues（Top 10）

1. **[#91870](https://github.com/anthropics/claude-code/issues/91870) Function Hooks — 让插件强大 10 倍** | 99 评论 / 62 👍
 官方征集反馈的重量级提案：通过参数化 `$` 对象的副作用追踪 + Express/Koa 式 `next` 中间件模型，实现既安全又可组合的深度插件定制。社区讨论极其热烈，代表插件生态的下一步方向。

2. **[#42776](https://github.com/anthropics/claude-code/issues/42776) Windows 桌面端因孤儿进程文件锁无法重启** | 159 评论 / 75 👍
 自 4 月延续至今的最热 bug，涉及进程文件锁导致重启失败，至今未修，是 Windows 用户最大的痛点集合帖。

3. **[#53247](https://github.com/anthropics/claude-code/issues/53247) Windows 启动失败 — 崩溃后残留 Silo/Job Object（0x80070020）** | 60 评论
 崩溃后仅注销/重启才能恢复，与 #42776、#89680 构成 Windows AppX 容器管理的一系列顽疾。

4. **[#91650](https://github.com/anthropics/claude-code/issues/91650) Bash cd-compound-read 守卫误触发（2.1.257–2.1.259 回归）** | 10 评论 / 56 👍
 配置任何 `Read()` deny 规则后，绝对路径 `cd` 也会触发弹窗。高赞说明影响面广，是本周期最需关注的 CLI 回归。

5. **[#91683](https://github.com/anthropics/claude-code/issues/91683) bypassPermissions 模式下 `cd DIR && grep` 仍弹窗（2.1.259 回归）** | 7 评论 / 26 👍
 与 #91650 同源的权限守卫回归，连 bypassPermissions 都被穿透，自动化流水线受影响明显。

6. **[#91188](https://github.com/anthropics/claude-code/issues/91188) 请求：MEMORY.md 自动压缩提醒阈值可配置** | 20 评论
 auto-memory 每会话加载 `MEMORY.md` 前 200 行/25KB，接近上限的提醒阈值硬编码，用户希望可配置或可单独关闭。

7. **[#89467](https://github.com/anthropics/claude-code/issues/89467) Windows 桌面窗口始终置顶且无法关闭** | 15 评论 / 10 👍
 有稳定复现，无任何设置可关，严重影响多窗口工作流。

8. **[#89680](https://github.com/anthropics/claude-code/issues/89680) 静默自更新留下孤儿进程，新版本 0x80070020 无法启动直到重启** | 15 评论
 自动更新机制与旧 AppX 容器冲突，“更新即翻车”典型案例。

9. **[#81658](https://github.com/anthropics/claude-code/issues/81658) 跨端同步失败导致 Cowork 会话/聊天消失** | 16 评论
 疑似服务端事故，数据可见性问题引发用户焦虑。

10. **[#74318](https://github.com/anthropics/claude-code/issues/74318) Subagent prompt-cache 策略多耗约 14% prompt 费用 — 3 项结构性修复** | 5 评论
 附实测数据的高质量成本优化提案，对重度 subagent 用户价值显著。

---

## 四、重要 PR 进展

> 过去 24 小时仅 2 条 PR 更新，全部列出：

1. **[#87079](https://github.com/anthropics/claude-code/pull/87079) fix(security-guidance): `**` glob 模式匹配零深度路径**
 修复 fnmatch 委托导致 `**/*.ts` 无法匹配顶层文件的问题。**涉及 security-patterns.json 安全规则静默失效**，属于安全敏感修复，值得关注合并进度。

2. **[#61691](https://github.com/anthropics/claude-code/pull/61691) 新增 GitHub connector "已连接但无工具" 诊断脚本**
 针对 Windows 上 GitHub MCP connector 显示 Connected 但 0 工具的长期 bug（关联 #28695、#41658 等），提供 PowerShell 诊断/修复脚本，缓解性方案。

---

## 五、功能需求趋势

- **插件/Hooks 生态深化**：Function Hooks 提案（#91870）显示社区希望获得更深、更安全的插件扩展能力
- **Subagent 编排增强**：跨会话消息（#92016、#92249）、嵌套 subagent 工具白名单（#92259）、后台任务模型选择（#70610）等诉求集中涌现
- **资源与成本优化**：MCP 服务器懒加载/按需连接（#63251、#82952）、subagent 缓存策略省钱（#74318）
- **可配置性与可观测性**：MEMORY.md 阈值（#91188）、权限拒绝消息应指明触发规则来源（#87153）、上下文环预警失效（#91385）
- **Remote Control / Cowork 体验**：会话列表排序（#87723）、配对记录清理（#90243）、New session 语义（#91991）

---

## 六、开发者关注点

1. **Windows 桌面端是重灾区**：今日 Top 30 Issue 中约 1/3 涉及 Windows——更新孤儿进程（#42776、#53247、#89680）、强制自更新打断会话 9 天 9 次（#92246）、Worktree 并发 checkout 损坏（#92085）、Computer use 截图全灰（#91079）等。建议 Windows 用户暂缓依赖桌面端跑长任务。
2. **权限系统回归需警惕**：2.1.257–2.1.259 的 Bash cd 守卫回归（#91650、#91683）影响所有配置 Read() deny 规则的用户，若遇莫名弹窗可先检查是否为新版本引入。
3. **桌面端 vs CLI 能力不一致**：Desktop 自动拒绝 CLI 原生 `SendMessage`（#92016）、计划任务/Remote Control 会话缺失工具注册（#92249），多端协同仍是薄弱环节。
4. **macOS 桌面端误杀 worker**：#90109 报告桌面端基于原始空闲页数（而非真实内存压力）SIGKILL 自身 worker，并误报为端点安全拦截。
5. **运维/代理环境改善中**：v2.1.261 的组织策略诊断正是回应企业代理用户的排障诉求。

---
*本报告基于过去 24 小时 GitHub 公开数据自动生成，评论数与点赞数为截稿时快照。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-05** | 数据来源：github.com/openai/codex

---

## 一、今日速览

Codex 今日连发两个版本（v0.153.3 / v0.153.4），核心是 **GPT-6-Astra 模型的集成与热修复**——将其加入 Bedrock 模型选择器并修复了其在捆绑模型选择器中不可见的问题。PR 方面，异步提问（Async Questions）在 TUI 中的完整集成成为主线开发方向，同时 Windows 平台新增原生 MXC 沙箱适配器。社区侧，问题自动解决 60 秒倒计时不可关闭的 Issue（#28969）以 204 👍、86 评论持续发酵，Windows/WSL 环境的稳定性问题仍是重灾区。

---

## 二、版本发布

### rust-v0.153.4
- 修复 Astra 在捆绑模型选择器中的可见性，并在未显式配置模型时将其设为捆绑默认模型（#42874）
- 更新 Astra 指导：仅在会话中工具可用时才使用异步提问（#42878）

### rust-v0.153.3
- **新功能**：GPT-6-Astra 加入 Amazon Bedrock 模型选择器（Mantle 及 Runtime 全球/美国路由）（#42805）
- 修复 GPT-6-Astra 异步澄清问题的指导，明确其仅支持文本输入（#42809）

---

## 三、社区热点 Issues

1. **[#28969](https://github.com/openai/codex/issues/28969)** — 请求增加设置以禁用问题的 60 秒自动解决 | 👍 204 / 💬 86
   今日热度第一。用户对问题超时自动解答机制不满，认为在复杂任务中会造成错误决策，强烈要求可配置化。

2. **[#28919](https://github.com/openai/codex/issues/28919)** — Windows 应用设置中缺少"控制其他设备”标签页 | 💬 59
   Windows 版与 macOS 版功能不对等的老问题，Pro 用户无法使用远程控制功能。

3. **[#41290](https://github.com/openai/codex/issues/41290)** — Windows/WSL 下切换 Agent 环境后项目创建与删除失败 | 💬 33
   WSL 集成是近期高频故障区，与 #41463 属同类问题。

4. **[#35050](https://github.com/openai/codex/issues/35050)** — GPT-5.6 串行化独立的 Code Mode 调用，显式批处理可降低 27–45% 加权用量 | 💬 41 / 💬 30
   直接影响成本，社区实测数据详实，属于高价值性能反馈。

5. **[#25220](https://github.com/openai/codex/issues/25220)** — Windows 上捆绑插件（Computer Use、Browser 等）因 EFS 加密文件 copyfile 失败而不可用 | 💬 29
   Microsoft Store 安装路径的系统性兼容问题，影响中国区 Windows 用户。

6. **[#41463](https://github.com/openai/codex/issues/41463)** — Windows + WSL 无法创建项目：AbsolutePathBuf 反序列化缺少 base path | 💬 26
   阻断性 Bug，WSL 用户完全无法创建项目。

7. **[#41513](https://github.com/openai/codex/issues/41513)** / **[#41960](https://github.com/openai/codex/issues/41960)** / **[#42661](https://github.com/openai/codex/issues/42661)** — Windows 桌面宠物（Pets）点击穿透、无法拖拽、输入区域偏移
   多个 Issue 集中爆发，与 #32069（请求隐藏 Pets 菜单项）共同反映社区对该功能的负面反馈。

8. **[#41566](https://github.com/openai/codex/issues/41566)** — 分页 rollout 在未完成 turn 后发出重复序号，永久冻结线程历史投影 | 💬 15
   会话数据损坏类问题，影响严重但根因复杂。

9. **[#39678](https://github.com/openai/codex/issues/39678)** — Android 到 macOS 远程"No project"对话因项目信任错误失败 | 💬 16
   Remote 跨设备场景的核心信任链路问题。

10. **[#42868](https://github.com/openai/codex/issues/42868)** / **[#42853](https://github.com/openai/codex/issues/42853)** — Astra 在 Linux/Windows 上不显示于模型选择器 | 💬 7 / 💬 6
    与今日 v0.153.4 热修复直接对应，验证修复效果值得跟进。

---

## 四、重要 PR 进展

1. **[#42891](https://github.com/openai/codex/pull/42891)** + [#42894](https://github.com/openai/codex/pull/42894) + [#42897](https://github.com/openai/codex/pull/42897) + [#42889](https://github.com/openai/codex/pull/42889) — **异步提问 TUI 集成系列**
   完整落地：问题显示/导航/排队/跳过、支持可选答案和内联"Other"自由输入，是本周最大的功能交付。

2. **[#42874](https://github.com/openai/codex/pull/42874) / [#42879](https://github.com/openai/codex/pull/42879)** — 在捆绑模型选择器中显示 Astra 并设为默认
   对应 v0.153.4 热修复。

3. **[#42841](https://github.com/openai/codex/pull/42841)** — 新增原生 Windows MXC 沙箱适配器
   包含原生可用性检测与启动器，Windows 沙箱架构的重要升级。

4. **[#42903](https://github.com/openai/codex/pull/42903)** — 保留 TUI 问题状态并集成历史与队列导航
   会话重连后问题草稿、选择、展开状态不再丢失。

5. **[#42852](https://github.com/openai/codex/pull/42852) / [#42844](https://github.com/openai/codex/pull/42844)** — 上下文压缩后加固 Guardian 审查
   确保用户授权约束和原始指令在 compaction 后不丢失。

6. **[#42850](https://github.com/openai/codex/pull/42850)** — Linux musl 二进制改用 jemalloc
   针对静态链接环境的内存分配器优化。

7. **[#42870](https://github.com/openai/codex/pull/42870)** — 避免文件系统沙箱的冗余路径解析
   修复沙箱准备阶段同步探测无关权限根目录的性能问题。

8. **[#42847](https://github.com/openai/codex/pull/42847)** — 复制 TUI 回复时保留 Markdown 格式
   剪贴板同时携带渲染 HTML，粘贴到富文本目标时保留标题/列表/表格。

9. **[#42900](https://github.com/openai/codex/pull/42900)** — 为独立任务与内存请求建立 root turn 身份
   修复后台与空输入 turn 缺少 `root_turn_id` 的追踪问题。

10. **[#42842](https://github.com/openai/codex/pull/42842)** — TUI 编辑器新增 Astra 星光动效
    使用 Astra 模型时的真彩终端视觉彩蛋。

---

## 五、功能需求趋势

- **新模型集成（Astra）**：模型选择器可见性、Bedrock 支持、异步提问适配是当前官方开发主轴
- **Windows 平台成熟度**：WSL 项目创建、MXC 沙箱、EFS 加密兼容、Computer Use——Windows 相关 Issue 占热点榜近半
- **交互可控性**：禁用自动解决倒计时、自动接受等待（#28969、#32139 合计 226 👍），用户要求对自动化行为有更多配置权
- **用量与成本优化**：批处理调用、Reserve 额度使用（#35050、#40939）日益受到关注
- **Remote 跨设备体验**：Android→macOS 信任链路、多主机会话分组

---

## 六、开发者关注点

1. **Windows 生态是最大痛点**：WSL 项目创建失败（#41290、#41463）、插件安装失败（#25220）、Computer Use 报错（#42214）、首启动 15 分钟无窗口（#41170）形成系统性质量洼地
2. **自动化行为缺少开关**：60 秒自动解决问题呼声极高（204 👍），反映“代理自主性 vs 用户控制”的张力
3. **成本透明度**：模型串行化导致用量虚高 27–45% 的实测反馈值得官方跟进
4. **身份验证与配额**：手机验证限流阻断 Pro 用户登录（#25820）、CLI 无法使用 Reserve 额度（#40939）影响付费用户体验
5. **会话/上下文健壮性**：压缩后指令丢失、并发会话工作区泄漏、线程历史冻结等问题持续存在，官方 PR（Guardian 加固系列）正在针对性修复

---
*本报告基于过去 24 小时 GitHub 公开数据自动汇总，仅供参考。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-09-05）

## 📌 今日速览

今日发布 **v0.60.0-nightly.20260905** 版本，重点聚焦**安全加固**：扩展环境变量变更需用户确认、工作区路径边界检查与符号链接解析增强。社区讨论热度最高的是 **Subagent 可靠性问题**（误报成功、挂起、上下文丢失），同时 Auto Memory 系列安全与质量缺陷引发关注。

---

## 🚀 版本发布

**v0.60.0-nightly.20260905.g85aca163f**（[Release](https://github.com/google-gemini/gemini-cli/releases)）

- **fix(extensions)**: 扩展环境变量变更现需用户同意确认，并对可改变运行时的环境变量进行清理（[PR #28863](https://github.com/google-gemini/gemini-cli/pull/28863)），堵住扩展更新绕过用户确认、向 MCP 服务器注入未授权环境变量的漏洞
- **fix(core)**: 命令安全与文件发现中的工作区路径边界检查和符号链接解析增强（[PR #29170](https://github.com/google-gemini/gemini-cli/pull/29170)）

---

## 🔥 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1) — Subagent 达到 MAX_TURNS 上限后误报 `success`/`GOAL`，掩盖中断事实。13 条评论，直接影响对 agent 结果的信任度，是可靠性核心缺陷。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1) — 通用 agent 挂起问题：简单操作（如创建文件夹）也会无限等待，8 👍，用户被迫显式禁用 subagent 规避。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** (P2) — 提出“零依赖 OS 沙箱 + 后执行意图路由”架构提案，利用 Gemini 3 原生 bash 能力同时保障安全，是有影响力的方向性设计讨论。

4. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1) — Shell 命令完成后卡在 "Waiting input" 状态，3 👍，高频可用性 bug。

5. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2, security) — Auto Memory 在脱敏前就将 transcript 发送给模型，要求确定性脱敏与减少日志，涉及隐私安全。

6. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2) — 模型几乎不主动使用自定义 skills 和 sub-agents，反映调度/路由能力不足的普遍反馈。

7. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)** (P1) — get-shit-done output hook 导致 CLI 崩溃，稳定性问题。

8. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1) — Browser subagent 在 Wayland 下失败，Linux 桌面用户受阻。

9. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** (P2) — AST 感知文件读取/搜索/代码库映射调研 EPIC，旨在减少错位读取与 token 噪音，长期性能方向。

10. **[#26523](https://github.com/google-gemini/gemini-cli/issues/26523) / [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** (P2) — Auto Memory 无效 patch 被静默跳过、低信号会话无限重试，同日集中暴露 Memory 子系统质量短板。

---

## 🔧 重要 PR 进展

1. **[#29215](https://github.com/google-gemini/gemini-cli/pull/29215)** — 强制外部工具/MCP 输出的元数据来源校验，防止不可信输出的提示注入。
2. **[#29214](https://github.com/google-gemini/gemini-cli/pull/29214)** — 沙箱文件系统边界加固，隔离运行时状态与宿主配置目录，并解析符号链接。
3. **[#29216](https://github.com/google-gemini/gemini-cli/pull/29216)** — 容器沙箱中隔离 `~/.gemini` 目录，避免暴露 OAuth 凭据。
4. **[#29217](https://github.com/google-gemini/gemini-cli/pull/29217)** (P1) — 修复 `--model gemini-2.5-flash` 被静默重写为 3.5 Flash 的问题，尊重用户显式模型选择。
5. **[#29116](https://github.com/google-gemini/gemini-cli/pull/29116)** — 处理 Windows NTFS 8.3 短文件名（SFN），封堵路径遍历绕过。
6. **[#29110](https://github.com/google-gemini/gemini-cli/pull/29110)** — `read_file` 改为经由 FileSystemService，修复 ACP 客户端远程文件读取被忽略的问题。
7. **[#29114](https://github.com/google-gemini/gemini-cli/pull/29114)** — 进程 spawn 失败时防止 `handleExit` 重复执行（重入保护）。
8. **[#29118](https://github.com/google-gemini/gemini-cli/pull/29118)** — 修复 GitHub 扩展仓库名解析：仅剥离尾部 `.git` 后缀，`blog.github.io` 类名称不再被破坏。
9. **[#28942](https://github.com/google-gemini/gemini-cli/pull/28942)** (已关闭) — 沙箱启动器对 `DEBUG` 环境变量改用严格布尔解析，修复 `DEBUG=false` 被误判为开启。
10. **PR 生成评估流水线系列已关闭**（[#28948](https://github.com/google-gemini/gemini-cli/pull/28948)、[#28949](https://github.com/google-gemini/gemini-cli/pull/28949)、[#28951](https://github.com/google-gemini/gemini-cli/pull/28951)）— 含评估 harness、LLM-as-a-Judge 评分、Cloud Run/Workflow 部署，内部自动化 PR 生成基准设施落地。

---

## 📈 功能需求趋势

- **Agent/Subagent 可靠性与可观测性**：误报成功、挂起、bug report 缺少 subagent 上下文（#21763）、trajectory 分享（#22598）——本日最密集的诉求方向。
- **安全与沙箱**：环境变量注入、路径遍历、符号链接、Auto Memory 脱敏——与今日版本发布主题高度一致，安全加固是主线工程。
- **Token 效率与 AST 感知工具**：外科手术式读取（#19561）、AST 映射（#22745/#22746）、持久化任务追踪替代 WriteToDo（#18836/#21000）。
- **Shell/命令执行体验**：OS 级沙箱提案（#19873）、破坏性命令防护（#22672）、临时脚本乱放（#23571）。
- **Browser Agent 完善**：Wayland 支持、会话锁恢复、settings.json 覆盖生效（#22232/#22267）。

---

## ⚠️ 开发者关注点

1. **Subagent 信任危机**：MAX_TURNS 误报成功 + 通用 agent 挂起，多个 P1 叠加，导致部分用户直接禁用 subagent。
2. **执行流卡死类 bug 高发**："Waiting input" 挂起、交互式提示卡住（#22465）、终端 resize 闪烁（#21924），影响日常使用流畅度。
3. **配置不被尊重**：显式模型选择被重写、Browser Agent 忽略 settings.json，用户对配置可预期性不满。
4. **Memory 系统安全与质量**：脱敏滞后、静默失败、无限重试，需要系统性重构而非零散修复。
5. **工具规模限制**：>128 个工具触发 400 错误（#24246），重度扩展用户受影响。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-05 | 数据来源：github.com/github/copilot-cli**

---

## 1. 今日速览

过去 24 小时 Copilot CLI 密集发布 **v1.0.84-1 / v1.0.84-0 / v1.0.83** 三个版本，新增 GPT-6 Astra 模型支持、Windows 11 任务栏实时会话状态卡片，并改进了沙箱管理与 MCP OAuth。社区侧，自定义 Agent 的 reasoning effort 配置（#2904，23 👍）仍是热度最高的需求，同时新增多个涉及 MCP 协议兼容性、BYOK 成本与内存泄漏的质量问题报告。

---

## 2. 版本发布

### v1.0.84-1
- 新增 **GPT-6 Astra** 模型支持

### v1.0.84-0
- **新增**：托管沙箱会话现可通过已批准的 bypass 提示在本次会话剩余时间内禁用
- **修复**：PowerShell 下被沙箱拦截的写入命令现在会提供在沙箱外运行的选项；修复凭据存储中存在多个 GitHub 账户时沙箱内 `gh` 的行为

### v1.0.83（2026-09-04）
- Windows 11 任务栏显示运行中的 Copilot 会话，支持悬停实时状态卡片
- MCP OAuth 登录新增 **Client ID Metadata Document (CIMD)** 支持
- 自定义 agent 的 `model` 字段支持多个模型按序回退；`model-policy: required` 等策略增强

---

## 3. 社区热点 Issues

1. **#2904 自定义 Agent YAML Frontmatter 应支持 Reasoning Effort**（👍 23，评论 8）
   `.agent.md` 可固定模型但无法按 agent 设置推理强度，社区呼声高，是当前最热功能请求。
   🔗 github/copilot-cli Issue #2904

2. **#2627 可配置系统提示词，削减固定 token 开销**（👍 19）
   系统提示词启动即占用约 20,500 tokens（约占 200K 窗口的 10%），叠加工具定义后开销可观，用户希望可精简。
   🔗 github/copilot-cli Issue #2627

3. **#232 增加 `--system-prompt` 参数**（👍 10，评论 5）
   长期开放的经典需求：仓库级指令之外提供全局系统级指令注入能力。
   🔗 github/copilot-cli Issue #232

4. **#4525 [已关闭] 1.0.81-1 在现代 `server/discover` 成功后仍发送旧版 `initialize` 导致 -32022**
   MCP 双协议兼容性关键 bug，涉及 Python MCP SDK 2.0.0 stdio 服务器初始化失败，已修复关闭。
   🔗 github/copilot-cli Issue #4525

5. **#4537 ACP 模式再次自动批准工具调用（#845 回归）**
   `--acp` 模式下不再发送 `session/request_permission`，shell 命令与文件删除可无人值守执行——**安全问题级别的回归**，值得关注。
   🔗 github/copilot-cli Issue #4537

6. **#4720 BYOK 模式下静默禁用 prompt caching，成本约 5 倍**
   1.0.82 BYOK 模式请求不带缓存声明，`cached_tokens=0`，每轮全价重发完整上下文。对自付费 API 用户影响直接。
   🔗 github/copilot-cli Issue #4720

7. **#4710 空闲会话中 copilot-file-search 线程失控**
   会话 idle 时后台线程持续打满一个 CPU 核并无限写入诊断日志，属资源泄漏类严重问题。
   🔗 github/copilot-cli Issue #4710

8. **#4725 频繁 JavaScript heap OOM 崩溃**
   CLI 每隔几分钟因堆内存耗尽（约 4GB）崩溃，新报问题，或与 #4710 同源。
   🔗 github/copilot-cli Issue #4725

9. **#4728 自动更新重写自身 copilot.exe，破坏桌面应用捆绑的 CLI**
   终端中运行 `copilot` 触发自更新后，GitHub Copilot 桌面应用所有会话均无法恢复——CLI 与桌面应用的分发/更新机制冲突。
   🔗 github/copilot-cli Issue #4728

10. **#4328 WSL2 下 Ctrl+H 被误判为 Ctrl+Backspace**
    因 Windows Terminal 的 `WT_SESSION` 环境变量泄漏导致按键映射错误，是 Windows/WSL 用户的典型痛点。
    🔗 github/copilot-cli Issue #4328

---

## 4. 重要 PR 进展

过去 24 小时仅 1 条 PR 更新：

- **#3771 Initial project setup**（@limenpchuolto112-creator，OPEN）
  疑似低质量/垃圾 PR，无摘要、无评论、无 👍，建议维护者关闭处理。
  🔗 github/copilot-cli PR #3771

> 本周期 PR 活动清淡，社区贡献主要集中在 Issue 反馈；版本迭代可能主要通过内部流水线合入。

---

## 5. 功能需求趋势

- **自定义 Agent 能力增强**：per-agent reasoning effort（#2904）、多模型回退（已在 1.0.83 落地）——Agent 配置粒度是社区最强诉求
- **Token / 上下文开销控制**：可配置系统提示词（#2627、#232）、自动压缩阈值（#1688）、空闲时对齐 prompt cache TTL 的自动 compact（#4724）
- **MCP 生态兼容性**：协议握手回归（#4525）、chroma-mcp 兼容（#4647）、tools/list 刷新竞态（#4731）——1.0.81 前后 MCP 改动引发连锁问题
- **企业管控**：阻断内置插件市场（#4715）、Cyber 安全审查授权联动（#4322）
- **终端交互体验**：Shift+方向键文本选择（#2644）、隐藏滚动条（#4707）、Android Studio 终端滚轮误触（#3194）

---

## 6. 开发者关注点

1. **成本与透明度**：BYOK 缓存失效（#4720）与固定 token 开销（#2627）表明自付费用户对账单敏感度极高
2. **权限与安全回归**：ACP 自动批准（#4537）属高危回归，企业在自动化场景下需警惕升级至 1.0.81+
3. **稳定性**：内存泄漏/OOM（#4710、#4725）、自更新破坏桌面应用（#4728）、Extension SDK 重连销毁 hook processor（#4590）
4. **Windows / WSL2 体验**：按键映射（#4328）、任务栏集成等平台适配上问题与改进并存
5. **升级节奏风险**：1.0.81–1.0.83 快速迭代引入多处 MCP 与权限回归，建议生产环境锁定版本并关注 patch release

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-09-05

## 1. 今日速览

过去 24 小时 Kimi CLI 无新版本发布，社区活动以历史 Issue 的批量关闭为主——5 个今年 3 月创建的 Issue（含 MCP 超时崩溃、Hooks 系统等高关注度问题）于昨日集中关闭，或暗示相关修复与功能已在近期版本落地。新增一条 Windows 环境下的快捷键 Bug 报告，另有一个修复字符串替换计数逻辑的社区 PR 持续推进中。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（今日数据共 6 条）

**新增 / 仍开放**

- **#2634 [bug] Windows Terminal + PowerShell 下 Ctrl+V 粘贴失效** — @PANG-GIT-AI | 0.40.1 + k3 模型，终端改键位不成功。作为今日唯一新开 Issue，直接指向 Windows 用户体验痛点，目前尚无回应，值得关注后续修复进展。
  链接: [Issue #2634](https://github.com/MoonshotAI/kimi-cli/issues/2634)

**集中关闭的历史 Issue**

- **#1313 [enhancement] 请求增加 Hooks 系统（通知与生命周期事件）** — @AungMyoKyaw | 👍 3，本期最高赞。长任务运行时用户切换窗口会错过 agent 需要交互的时机，请求类似 Claude Code 的 Hooks 机制。关闭或意味着该能力已实现，值得在 Changelog 中确认。
  链接: [Issue #1313](https://github.com/MoonshotAI/kimi-cli/issues/1313)

- **#1316 [bug] 单个 MCP 连接超时导致整个 CLI 不可用** — @Caius1L | 反映 MCP 连不上时 kimi-cli 直接被中断，是稳定性类的高严重性问题，关闭表明容错处理可能已改进。
  链接: [Issue #1316](https://github.com/MoonshotAI/kimi-cli/issues/1316)

- **#1315 [bug] 按 ESC 后 Subagents 仍在运行** — @chriswingler | Windows 环境，Task 类 subagent 中断后未真正停止，涉及资源与任务控制正确性。
  链接: [Issue #1315](https://github.com/MoonshotAI/kimi-cli/issues/1315)

- **#1320 [enhancement] 多行输入时方向键应移动光标而非切换历史** — @imbecile-gulu | 终端交互体验优化，是 CLI 工具的常见痛点。
  链接: [Issue #1320](https://github.com/MoonshotAI/kimi-cli/issues/1320)

- **#1319 [enhancement] 增加本地 skills 管理命令（list/rm 等）** — @Mocuishler | 请求类似 Claude Code `/mcp` 的统一 skill 管理方式（查看版本、触发词、删除），并指出 skill 存储目录不统一的问题。
  链接: [Issue #1319](https://github.com/MoonshotAI/kimi-cli/issues/1319)

## 4. 重要 PR 进展（今日数据共 1 条）

- **#2524 fix(tools): StrReplaceFile 替换计数应基于运行时内容** — @Sreekant13 | 修复 `StrReplaceFile` 顺序执行编辑时，替换计数错误地基于原始文件内容计算的问题——链式编辑（前一次编辑产生的字符串作为后续 old 串）会被漏计。关联 #2526。仍处于 OPEN 状态，自 7 月下旬提交后于昨日更新，期待早日合入。
  链接: [PR #2524](https://github.com/MoonshotAI/kimi-cli/pull/2524)

## 5. 功能需求趋势

- **生命周期与可观测性**：Hooks / 通知机制（#1313，3 👍）呼声最高，反映用户对长任务异步协作场景的关注。
- **Skills 生态管理**：希望提供标准化的 skill 查看与删除命令（#1319），对标 Claude Code 的成熟管理体验。
- **终端交互体验**：多行编辑光标导航（#1320）、Windows 快捷键支持（#2634）持续出现，Windows 生态是明显短板。
- **稳定性与容错**：MCP 超时单点故障（#1316）、subagent 中断失控（#1315）表明用户对健壮性要求高于新功能。

## 6. 开发者关注点

1. **Windows 平台兼容性**：本期 2 条 Issue 涉及 Windows（粘贴失效、subagent 失控），Windows Terminal / PowerShell 环境是当前负面反馈集中区。
2. **MCP 稳定性**：单个 MCP server 故障拖垮整个 CLI，用户期望隔离失败而非全局中断。
3. **进程控制**：ESC 中断后任务未真正停止，涉及 token 消耗与系统资源浪费。
4. **工具链对标 Claude Code**：Hooks、skill 管理等需求均以 Claude Code 为参照，社区对 CLI 工具成熟度期待在快速提升。

---
*数据来源：github.com/MoonshotAI/kimi-cli，统计窗口为 2026-09-04 至 2026-09-05。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-05

## 📌 今日速览

OpenCode 今日发布 **v1.18.29**，修复了 OpenAI 订阅用户无法看到 `gpt-6-astra` 模型的热门问题（#47363，👍 20）。v1.18.28 引入的远程 MCP 回归问题已被快速确认处理。核心维护者 @kitlangton 今日密集提交了 7 个 Markdown/命令解析相关的修复 PR，社区贡献活跃度显著提升。

---

## 🚀 版本发布

### v1.18.29
- **Core 修复**：Codex OAuth 模型过滤现可识别整数版本号的 GPT 模型（如 `gpt-6`），修复 `gpt-6-astra` 不显示的问题
- 社区贡献：@Peter267 修复中文文档加粗渲染问题

### v1.18.28
- **Core 改进**：将 session ID 作为 GitHub Copilot 交互头发送，提升会话内请求追踪能力
- **Desktop 修复**：OpenCode 账户设备认证改用桌面端 client ID；放大 "open-in app" 图标提升可见性

---

## 🔥 社区热点 Issues

1. **#47363** [CLOSED] GPT-6 Astra 缺失于 Codex OAuth 模型选择器（👍 20）
   OpenAI 订阅用户的高频痛点，今日发布的 v1.18.29 已修复，响应速度值得肯定。
   https://github.com/anomalyco/opencode/issues/47363

2. **#47368** [CLOSED] v1.18.28 远程 MCP 回归 — KitWright 工具不可用
   版本升级导致原本正常工作的远程 MCP 服务器（Unity 桥接）无法连接，属典型升级回归，需注意版本兼容性。
   https://github.com/anomalyco/opencode/issues/47368

3. **#19948** [CLOSED] Ollama 本地模型集成问题（23 评论）
   桌面端配置本地 Ollama 后返回无效 JSON，本地模型支持长期是社区关注焦点。
   https://github.com/anomalyco/opencode/issues/19948

4. **#25832** [CLOSED] 无法读取图片（18 评论）
   图像理解能力在 4 月末某版本后失效，影响 HTML 页面修改等典型工作流。
   https://github.com/anomalyco/opencode/issues/25832

5. **#30680** [CLOSED] 自动压缩循环导致停止响应（17 评论）
   空目录下仍触发反复 compaction 消耗 token，最终模型停止生成——涉及成本与可用性的双重问题。
   https://github.com/anomalyco/opencode/issues/30680

6. **#44684** [OPEN] 1.18.21+ 插件安装器 npm registry 超时，导致插件静默失效/启动挂起
   从私有 Verdaccio + 公共 registry 混合场景触发，headless 模式下尤为严重；对应修复 PR #47430 已提交。
   https://github.com/anomalyco/opencode/issues/44684

7. **#17188** [CLOSED] [FEATURE] 默认关闭分享 — 隐私优先（👍 13）
   默认开启分享引发隐私与知情同意争议，社区共识强烈，值得产品层面重视。
   https://github.com/anomalyco/opencode/issues/17188

8. **#35148** [CLOSED] Bad Gateway 循环错误（👍 13）
   Desktop v1.16.2 用户遭遇网关错误循环，高频报错类问题。
   https://github.com/anomalyco/opencode/issues/35148

9. **#47142** [OPEN] Dashboard 总体使用百分比计算错误
   直接累加各模型百分比（配额基数不同）导致结果失真，计费透明度问题。
   https://github.com/anomalyco/opencode/issues/47142

10. **#28402** [CLOSED] 重复 webhook 投递发放免费额度
    Console 支付 webhook 缺少幂等保护，Stripe at-least-once 语义下重复入账——涉及资损的安全问题。
    https://github.com/anomalyco/opencode/issues/28402

---

## 🔧 重要 PR 进展

1. **#47430** fix(core): 为 npm 安装增加可配置超时
   直接回应 #44684 的启动挂起问题，从 #41936 移植到 v1 线。
   https://github.com/anomalyco/opencode/pull/47430

2. **#47423** feat(core): 支持 Provider OAuth client_credentials
   为企业级 OAuth 客户端凭证认证铺路，token 仅内存缓存、401 自动重试。
   https://github.com/anomalyco/opencode/pull/47423

3. **#47427** fix(desktop): 防止大段粘贴导致崩溃
   Windows 上尤易复现的 UI 卡顿/崩溃修复。
   https://github.com/anomalyco/opencode/pull/47427

4. **#47342** fix(console): OpenAI usage 归一化与 tier 阈值配置
   修复 cached_tokens 被重复计费的问题，与 #47142 的计费准确性主题呼应。
   https://github.com/anomalyco/opencode/pull/47342

5. **#47388** fix(tui): 重载本地插件依赖图
   解决编辑本地插件辅助文件后旧 UI 仍运行的缓存问题。
   https://github.com/anomalyco/opencode/pull/47388

6. **#46690** feat(plugin): 暴露 session 表单、会话列表与全局事件流
   为 Telegram bot 等外部集成插件提供能力，插件生态扩展的重要一步。
   https://github.com/anomalyco/opencode/pull/46690

7. **#35311** fix(core): 同一仓库多克隆视为不同项目
   一举关闭 16 个相关 issue，长尾项目识别问题终于有解。
   https://github.com/anomalyco/opencode/pull/35311

8. **#47428** fix(app): 延迟后台工作区发现
   避免为未打开的历史项目急切加载 worktree 和 MCP 目录，优化启动性能。
   https://github.com/anomalyco/opencode/pull/47428

9. **#47414/#47412/#47410/#47408/#47422/#47420** @kitlangton 的系列核心修复
   覆盖 agent variant 丢失、命令参数字面量、内联代码边界反引号、Markdown 预算耗尽挂起、glob 隐藏文件、读取页保留空行等一批解析层边角问题。
   https://github.com/anomalyco/opencode/pull/47414

10. **#47391** [CLOSED] perf(plugin): 并行加载内部插件
    通过 Effect.forEach 无界并发加速插件初始化，虽已关闭但性能方向值得关注。
    https://github.com/anomalyco/opencode/pull/47391

---

## 📈 功能需求趋势

- **本地/自定义模型支持**：Ollama 集成、自定义 provider 图像输入（#33542、#34596）持续高频
- **隐私与安全**：默认关闭分享（#17188）、webfetch URL 白名单（#35565）、支付幂等（#28402）
- **插件生态扩展**：session 事件流暴露、finalization hook（#35540）、footer 拦截 hook（#35561）
- **计费透明度**：用量百分比计算、token 归一化、Dashboard 准确性
- **IDE/LSP 增强**：CircleCI language server 内置请求（#25735）、LSP 客户端生命周期管理

---

## ⚠️ 开发者关注点

1. **升级回归风险**：1.18.20→21 插件安装挂起、1.18.27→28 MCP 断连，近期连续版本引入回归，升级前建议查看 issue tracker
2. **Compaction 与 token 成本**：自动压缩循环（#30680）直接烧钱，是稳定性中最受抱怨的一项
3. **多模态能力可靠性**：图像读取在多个版本间反复失效，自定义 provider 的 `attachment: true` 配置不生效
4. **企业/代理网络环境兼容性**：私有 npm registry、SSH 隧道、OAuth 企业端点（DigitalOcean #27764）等场景支持仍不完善
5. **启动与性能**：插件加载、工作区发现的启动阻塞问题正被系统性优化（#47391、#47428）

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-09-05

## 一、今日速览

今日无新版本发布，社区焦点集中在**安全与工程效率**两条线上：一个泄露 clientSecret 的 P1 级钉钉渠道凭据打印问题（#10936）已关闭，同日关闭的还有 OpenTUI 渲染层斜杠命令输出不显示的关键 Bug（#10905）。此外，导出 HTML 体积膨胀至 19.5MB 的问题（#11031）已由 PR #11038 提交修复，CI 稳定性问题依然高频出现（今日 3 条新 CI 失败 Issue）。

## 二、社区热点 Issues

1. **#8662 TUI 渲染层从 ink 迁移到 OpenTUI（追踪）** — 30 条评论，热度最高。现有 ink 7 + 1037 行补丁的架构导致闪烁等结构性问题，迁移追踪帖持续更新。
   [链接](https://github.com/QwenLM/qwen-code/issues/8662)

2. **#10908 CI 测试时间被模块导入成本主导** — 8 条评论。cli workspace collect 耗时 2223s vs 测试 1372s，性能瓶颈在 import 而非调度，与 PR #10917 直接相关。
   [链接](https://github.com/QwenLM/qwen-code/issues/10908)

3. **#10932 语音听写无法使用 Token Plan ASR 模型** — 5 条评论，status/ready-for-human。`qwen-audio-3.0-asr-flash` 被 `resolveVoiceTransport` 白名单拒绝，纯模型 ID 兼容问题。
   [链接](https://github.com/QwenLM/qwen-code/issues/10932)

4. **#10872 请求可插拔的思考输出语言改写中间件** — 4 条评论。希望提供公开中间件 API，在 CLI 与 daemon 场景下翻译/改写 reasoning 输出，与长期存在的 #3787（ACP 模式思考语言不一致）呼应。
   [链接](https://github.com/QwenLM/qwen-code/issues/10872)

5. **#8177 macOS + tmux 下 IME 输入导致光标错位/乱码** — 4 条评论的老问题，中文用户体验痛点，涉及 VP 渲染层，至今未解。
   [链接](https://github.com/QwenLM/qwen-code/issues/8177)

6. **#11031 导出 HTML 内嵌完整 Web Shell 运行时（19.5MB）** — P1。空会话导出也达 19.5MB，React/Web Shell 运行时被复制进每个文件，PR #11038 已在修。
   [链接](https://github.com/QwenLM/qwen-code/issues/11031)

7. **#11045 Cerebras (OpenAI 兼容) 多轮请求全部 400** — 3 条评论。首轮成功、后续全败，原因是 `reasoning_content` 回传被 Cerebras 拒绝，影响第三方兼容性。
   [链接](https://github.com/QwenLM/qwen-code/issues/11045)

8. **#10936 钉钉渠道在 stdout 明文打印 clientSecret（P1，已关闭）** — 凭据安全问题，每次连接都会输出 SDK 完整配置与 stream ticket，已快速修复。
   [链接](https://github.com/QwenLM/qwen-code/issues/10936)

9. **#11019 AUTO 模式下用户批准无法传达给分类器** — 2 条评论。API 驱动场景中用户三次确认仍被阻断，且会话重建时审批模式回退为 AUTO，涉及安全与可用性平衡。
   [链接](https://github.com/QwenLM/qwen-code/issues/11019)

10. **#11013 Dynamic Workflows 与 Claude Code 2.1.260 的剩余差距** — 追踪契约、入口/预算、容错、分布式四方面差距，社区持续对标竞品。
    [链接](https://github.com/QwenLM/qwen-code/issues/11013)

## 三、重要 PR 进展

1. **#11038 修复导出 HTML 内嵌交互式 Web Shell 运行时** — 直接对应 P1 Issue #11031，将导出入口从包根切走，避免拉入 App 级依赖。
   [链接](https://github.com/QwenLM/qwen-code/pull/11038)

2. **#10917 让测试按模块单独解析 core，加速 CI** — 对应 #10908，cli 测试 runner 支持逐模块解析，是 CI 提速的第一步。
   [链接](https://github.com/QwenLM/qwen-code/pull/10917)

3. **#11062 Daemon 活动转录持久化 promptId** — 与 Issue #11060 同日提出修复，集成方可稳定对齐 live replay 与 canonical transcript。
   [链接](https://github.com/QwenLM/qwen-code/pull/11062)

4. **#11046 修复 OpenTUI 启动瞬间输入被静默丢弃** — 会话未就绪时输入触发 `Chat not initialized`，OpenTUI 迁移配套修复。
   [链接](https://github.com/QwenLM/qwen-code/pull/11046)

5. **#11037 合并并发的 `Config.initialize()` 调用** — 修复初始化标志同步设置导致的竞态错误，core 稳定性改进。
   [链接](https://github.com/QwenLM/qwen-code/pull/11037)

6. **#10962 Web Shell：将浏览器本地目录桥接进会话** — 远程 daemon/容器场景下让用户授权本地目录给 agent 访问，重要的架构扩展。
   [链接](https://github.com/QwenLM/qwen-code/pull/10962)

7. **#10697 workspace 级 Skills 运行时** — Skills 管理迁移至 workspace 拥有的运行时，含 revision/epoch 就绪追踪与会话调和。
   [链接](https://github.com/QwenLM/qwen-code/pull/10697)

8. **#10942 `qwen sessions ps` 列出 Agent View 托管会话** — 命令从仅遍历活动进程注册表扩展到展示 supervisor 生命周期状态。
   [链接](https://github.com/QwenLM/qwen-code/pull/10942)

9. **#10347 网络瞬断（EOF）自动重试** — 将包装为 4xx 的底层网络失败归类为可重试传输错误，使有界自动重试在无 Ctrl+Y 场景生效。
   [链接](https://github.com/QwenLM/qwen-code/pull/10347)

10. **#8927 渠道级 sessionRotation 会话生命周期限制** — 按 maxTurns/时长轮换会话，防止长会话上下文膨胀，channels 方向的长期投入。
    [链接](https://github.com/QwenLM/qwen-code/pull/8927)

## 四、功能需求趋势

- **终端渲染层重构（OpenTUI 迁移）**：#8662 追踪 + 一批 OpenTUI 修复 PR（#11046、#10905），是当前最大的工程主线
- **Web Shell / 会话管理**：Quick Chat 浮窗（#11017）、worktree 会话清理（#11024）、独立会话面（#11013）、目录桥接（PR #10962）
- **第三方模型/Provider 兼容**：Cerebras 400（#11045）、Token Plan ASR（#10932）、`${session_id}` 自定义请求头（#10995）
- **工程效率与 CI 稳定性**：模块导入耗时（#10908）、高频 E2E/单测失败（#11058/#11059/#11061）
- **Daemon/SDK 发布节奏**：社区呼吁发布含 managed-memory 与 prompt-cache 修复的 @qwen-code/sdk 新版（#11022）
- **配置灵活性**：`--config-dir` 每进程配置目录（#10984）

## 五、开发者关注点

1. **凭据安全**：钉钉渠道明文打印 clientSecret（#10936）虽已修复，但暴露了渠道集成的日志卫生问题；AUTO 模式审批被绕过/回退（#11019）也引发对安全边界的讨论
2. **CI 可靠性疲劳**：过去 24 小时内 4+ 条 main 分支 CI 失败 Issue，E2E 分片失败频繁，团队正通过 autofix bot 与测试稳定性 PR（#11001、#11044）系统性治理
3. **国际化体验**：中文 IME 渲染错乱（#8177）、思考过程语言不一致（#3787、#10872）是中文用户群的长期痛点
4. **导出产物体积与性能**：19.5MB 的导出 HTML（#11031）反映了对产物精简的关注
5. **SDK 发布滞后**：主分支已合并的修复迟迟未随 SDK 发布（#11022），下游集成方等待成本高

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-09-05 | 数据来源：github.com/Hmbown/DeepSeek-TUI**

---

## 📰 今日速览

今日无新版本发布。社区焦点集中在两个高质量修复上：TUI todo 快照堆积问题（#5871）已由 PR #5873 修复并关闭，Ollama 本地模型输入预算坍缩问题（#5820）迎来针对性修复 PR #5883。维护者 @Hmbown 提交了 CI 基线恢复 PR（#5882）以保障无关 PR 的评估流程，另有 10 个 dependabot 依赖升级 PR 待处理。

---

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues（共 5 条活跃，全部列出）

**1. Ollama provider 输入预算坍缩至 1024 tokens** [#5820](https://github.com/Hmbown/DeepSeek-TUI/issues/5820)
- **状态**：OPEN | 作者 @slowly247 | 4 条评论
- **为何重要**：本地 32K 上下文模型被默认 64K 输出预留钳制，实际输入预算仅剩 1024 tokens，严重影响本地模型可用性。这是本地部署用户的核心痛点，已有修复 PR #5883 提交，正待合并。

**2. 持续自学习 / 技能自动演化（enhancement）** [#5860](https://github.com/Hmbown/DeepSeek-TUI/issues/5860)
- **状态**：OPEN | 作者 @Edouard-Legoupil | 3 条评论
- **为何重要**：用户希望 Agent 能自动从对话中提取重复问题的解决模式并更新 `SKILL.md`，而非依赖手工编写。这代表了社区对“越用越聪明”的 agent 记忆进化方向的高关注。

**3. Todo 列表历史堆积污染会话记录（bug）** [#5871](https://github.com/Hmbown/DeepSeek-TUI/issues/5871)
- **状态**：✅ CLOSED | 作者 @ronohara
- **为何重要**：每次 `todo_write` 都在转录中留下永久快照卡片，清空列表也无法消除历史堆叠，只能丢失上下文。该问题从报告到修复（PR #5873）仅一天，响应速度值得肯定。

**4. 引入 rusty_alloc 可选分配器（enhancement）** [#5872](https://github.com/Hmbown/DeepSeek-TUI/issues/5872)
- **状态**：OPEN | 作者 @freedomlovesfrank
- **为何重要**：目前 mimalloc 需要 C 编译器和构建脚本；rusty_alloc 可实现纯 Rust 交叉编译，降低贡献者和嵌入式/跨平台用户的构建门槛。

**5. ⚠️ 疑似垃圾内容：眼科 CPT/ICD-10 计费更新** [#5866](https://github.com/Hmbown/DeepSeek-TUI/issues/5866)
- **状态**：CLOSED | 作者 @medicalbilling-usa
- **说明**：与项目无关的营销引流内容，已被及时关闭。社区维护卫生良好。

---

## 🔧 重要 PR 进展（精选 8 个非 dependabot / 关键依赖）

**1. fix(tui): 替换过期 todo 转录快照** [#5873](https://github.com/Hmbown/DeepSeek-TUI/pull/5873) ✅ CLOSED
- 只保留最新一次成功 `todo_write` 快照，隐藏空快照且不丢失会话上下文。修复 #5871，9 项测试通过。

**2. fix(tui): 从路由窗口推导本地输出预算** [#5883](https://github.com/Hmbown/DeepSeek-TUI/pull/5883) 🟡 OPEN
- 针对静态目录中无条目的模型，从路由声明的上下文窗口自动推导输出预留；保留显式覆盖和兼容性上限；附带 32K Ollama 回归测试。直接修复 #5820。

**3. test: 恢复贡献者 CI 基线与进程生命周期检查** [#5882](https://github.com/Hmbown/DeepSeek-TUI/pull/5882) ✅ CLOSED
- 维护者亲自提交：修复插件生命周期 fixture 的 trust token、Windows 下跳过 Unix symlink 测试、适配紧凑 footer 断言等，为其他 PR 评估恢复正常基线。

**4. Tools: 原子化提交拆分 — 按依赖排序无关变更** [#5870](https://github.com/Hmbown/DeepSeek-TUI/pull/5870) 🟡 OPEN
- 解决 #3999：将无关变更按依赖关系排序拆分提交并拒绝循环依赖。AI 辅助生成，需仔细审查。

**5. deps: rmcp 2.2.0 → 3.2.0** [#5877](https://github.com/Hmbown/DeepSeek-TUI/pull/5877) 🟡 OPEN
- MCP Rust SDK 大版本升级（2.x → 3.x），可能涉及 API 变更，需重点验证兼容性。

**6. deps: jsonschema 0.46.10 → 0.52.1** [#5880](https://github.com/Hmbown/DeepSeek-TUI/pull/5880) 🟡 OPEN
- 跨 6 个次版本的较大升级，同样需要兼容性审查。

**7. deps: npm_and_yarn 组更新（qs / fast-uri）** [#5828](https://github.com/Hmbown/DeepSeek-TUI/pull/5828) 🟡 OPEN
- 涉及 feishu-bridge 集成与 VS Code 扩展两个目录，qs 相关更新通常与安全修复相关。

**8. deps: tower-http 0.7.0 → 0.7.1** [#5881](https://github.com/Hmbown/DeepSeek-TUI/pull/5881) 🟡 OPEN
- 常规补丁级升级。

> 其余 dependabot PR：base64 0.23.1（#5875）、lru 0.18.3（#5876）、action-gh-release 3.0.3（#5879）、create-github-app-token v3（#5878）、setup-qemu-action 4.3.0（#5874）。

---

## 📈 功能需求趋势

1. **本地模型体验优化**：#5820 反映 Ollama/本地模型场景的上下文预算管理仍是高频痛点，社区对本地部署的一等公民支持有强烈诉求。
2. **Agent 自学习与记忆演化**：#5860 提出从对话中自动提取技能模式，呼应行业 Agent 自动化进化方向，讨论热度高。
3. **TUI 界面信息密度管理**：#5871 显示转录内容（工具调用快照等）的展示策略影响日常可用性，“干净上下文 vs 完整记录”需要更好的设计。
4. **构建轻量化与跨平台**：#5872 的 rusty_alloc 提案指向降低贡献门槛、移除 C 工具链依赖的方向。

---

## 🎯 开发者关注点

- **本地模型 token 预算控制**：输出预留与输入窗口的分配逻辑缺乏透明度，用户难以诊断“为什么上下文变小了”，需要更明确的文档或配置项。
- **会话转录的可维护性**：工具调用历史堆积导致界面冗长，用户被迫在“清屏”和“丢上下文”之间二选一。
- **依赖升级节奏**：单日 10 个 dependabot PR（含 rmcp 2→3、jsonschema 跨 6 个次版本），维护者面临批量审查压力；rmcp 大版本升级可能阻塞 MCP 相关功能。
- **CI 稳定性**：维护者专门提交基线恢复 PR（#5882），说明近期 CI 失败已影响外部贡献的评审效率。

---
*本报告基于过去 24 小时 GitHub 数据自动整理，由 AI 技术分析师生成。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-09-05

## 一、今日速览

v0.85.0 正式发布，带来 Claude 思考努力级别（thinking effort）的持久化支持。但新版本发布后爆出**打包缺陷**：`dist/cli.js` 静态引入了未声明依赖 `@earendil-works/pi-server`，导致全新安装无法启动，多个 Issue 蜂拥而至，修复 PR（#9170/#9172）已快速跟进。此外社区贡献活跃，Mitsuhiko（Flask 作者）持续提交 Nix 打包、剪贴板重构、中段系统消息等重量级 PR。

## 二、版本发布

**v0.85.0**
- **Claude thinking effort 持久化**：Anthropic 传输层现在会逐轮保留 effort 设置，并能从签名 thinking 不匹配中安全恢复。详见 [Model Configuration 文档](https://github.com/earendil-works/pi/blob/v0.85.0/packages/coding-agent/docs/models.md#model-configuration)
- ⚠️ 已知问题：npm 包因未声明 `@earendil-works/pi-server` 依赖导致安装失败，见下文 Issue 部分。

## 三、社区热点 Issues

1. **[#9132](https://github.com/earendil-works/pi/issues/9132)** — v0.85.0 打包缺陷：`dist/cli.js` 静态导入未声明的 `@earendil-works/pi-server`。今天最紧急的问题，多个重复报告（#9140、#9156、#9158）迅速涌现，修复 PR 已提交。
2. **[#5363](https://github.com/earendil-works/pi/issues/5363)** — 新增 `amazon-bedrock-mantle` provider 支持 OpenAI 兼容模型。讨论量最高（18 评论、15 👍），AWS 用户对 Bedrock 新 API 路线支持需求强烈，已标记 in-progress。
3. **[#7730](https://github.com/earendil-works/pi/issues/7730)** — macOS 长会话 CPU 占用飙至 100%+（内存 600-800MB），疑似与会话/上下文长度相关。性能类问题中呼声最高（15 评论、10 👍）。
4. **[#8720](https://github.com/earendil-works/pi/issues/8720)** — 工具返回纯空白输出（如 Windows 下的 `"\r\n"`）会永久"砖死"会话：坏消息留在历史中，后续所有请求均 400 失败。由 agent bot 自动发现，属严重稳定性缺陷。
5. **[#8760](https://github.com/earendil-works/pi/issues/8760)** — OpenRouter `:free` 模型全数 400 失败，Pi 发送的 `max_tokens` 超出上游硬限制。影响面广。
6. **[#8896](https://github.com/earendil-works/pi/issues/8896)** — `/export` HTML 静默丢弃 `display: false` 的自定义消息，导致导出结果与实际发送给模型的内容不一致。对审计/回放场景影响大。
7. **[#5593](https://github.com/earendil-works/pi/issues/5593)** — Tab 补全斜杠命令后插入尾随空格，阻止参数自动补全触发。TUI 交互细节的典型痛点，修复进行中。
8. **[#9052](https://github.com/earendil-works/pi/issues/9052)** — 全屏模式滚轮滚动速度比普通模式慢 3 倍。已由 PR #9166（Alt 加速滚动）响应。
9. **[#8684](https://github.com/earendil-works/pi/issues/8684)** — `PI_OFFLINE` 实际禁用了所有 provider 模型发现，与文档描述的"仅禁用启动网络操作"矛盾。文档与行为一致性问题。
10. **[#9165](https://github.com/earendil-works/pi/issues/9165)** — 经 OpenRouter 调用 Claude Opus 5 被拒绝 per-message `output_config`（Anthropic 原生通道正常）。新模型兼容性问题，已快速关闭。

## 四、重要 PR 进展

1. **[#9170](https://github.com/earendil-works/pi/pull/9170)** — 声明 `pi-server` 运行时依赖，修复 v0.85.0 安装失败。当前最高优先级修复。
2. **[#9172](https://github.com/earendil-works/pi/pull/9172)** — 防止损坏的包根再次发布，从流程上杜绝同类打包缺陷。
3. **[#9179](https://github.com/earendil-works/pi/pull/9179)** — 在 compaction 进行中拒绝树导航操作，修复上下文摘要结果落在错误分支的竞态问题，附回归测试。
4. **[#9116](https://github.com/earendil-works/pi/pull/9116) / [#9117](https://github.com/earendil-works/pi/pull/9117)** —（mitsuhiko）支持中段系统消息，将 prompt/工具集变更以增量方式传递而非重写顶层 prompt。架构级改进，减少上下文重复。
5. **[#9096](https://github.com/earendil-works/pi/pull/9096)** — 新增 Meta provider，支持 Muse 订阅 OAuth（token 每日重铸机制较为特殊）。
6. **[#9163](https://github.com/earendil-works/pi/pull/9163)** —（mitsuhiko）简化剪贴板处理，内联原生库依赖，为 NixOS 构建铺路。
7. **[#9137](https://github.com/earendil-works/pi/pull/9137)** —（mitsuhiko）新增 Nix flake 支持（WIP）。
8. **[#9166](https://github.com/earendil-works/pi/pull/9166)** — Alt+滚轮实现 5 倍加速滚动，直接回应 Issue #9052。
9. **[#9138](https://github.com/earendil-works/pi/pull/9138)**（已合并）— macOS 上支持 `Cmd+V` 粘贴剪贴板图片，符合平台惯例。
10. **[#9131](https://github.com/earendil-works/pi/pull/9131)**（已合并）— 基于 Cloudflare Durable Object SQLite 的会话后端，扩展 serverless 部署场景。

## 五、功能需求趋势

- **新 provider/模型接入**：Bedrock Mantle（#5363）、Meta Muse（PR #9096）、OrcaRouter（PR #9135）——社区对多网关、多模型生态需求持续旺盛。
- **TUI 体验打磨**：全屏模式滚动、快捷键自定义（#8797）、会话固定（#9139）、搜索光标渲染等细节诉求密集。
- **会话管理与树状分支**：compaction/导航竞态（#9179、#9155）、会话 ID 编码冲突（#9073）。
- **轻量化与部署灵活性**：无依赖 pi-ai（#9128，浏览器场景）、Nix 支持、Docker 沙箱文档（PR #9077）、Durable Object 后端。
- **稳定性与容错**：工具调用超时（#8857）、空白输出砖死会话（#8720）、退出码一致性（#9089）。

## 六、开发者关注点

1. **发布质量**：v0.85.0 打包事故暴露 CI 缺少"全新安装冒烟测试"，PR #9172 正在补齐——依赖 Pi 做下游集成的团队应关注版本锁定策略。
2. **性能**：macOS 长会话 CPU 问题（#7730）尚无明确修复方案，重度用户受影响。
3. **协议兼容性细节**：`max_tokens` 超限（#8760）、thinking 签名不匹配、多 thinking 块回放（#8576）等 provider 边界情况反复出现，是与 Anthropic/OpenAI 生态对接的主要摩擦点。
4. **可扩展性 API**：社区持续要求更细粒度的扩展钩子——隐藏思考标签作用域（#9161）、扩展侧终止回合（#7824）、RPC 超时控制。
5. **可观测/可审计性**：导出不完整（#8896）、`--mode json` 退出码不一致（#9089）反映 CI/自动化场景用户对输出完整性与可预测性的要求在上升。

---
*数据来源：github.com/earendil-works/pi · 过去 24 小时共更新 64 个 Issues、31 个 PR*

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# 📰 oh-my-pi 社区动态日报 — 2026-09-05

## 1. 今日速览

oh-my-pi 今天发布 **v18.1.10**，修复 Codex V2 远程压缩破坏 prompt-cache 复用的关键问题。社区围绕**工具调用循环防护失效**（#10894、#10895）展开大量讨论，机器人 roboomp 高速响应产出一批修复 PR，包括列截断提示、后台会话隔离等。GPT-6 / Astra 适配（#10874、#10872）成为 provider 生态的重点进展。

---

## 2. 版本发布

### [v18.1.10](https://github.com/can1357/oh-my-pi/releases) — `pi-agent-core`
- 修复 Codex V2 远程压缩忽略显式 thinking-off 的问题
- 修复远程压缩重建请求前缀与普通轮次不一致的问题，**恢复 prompt-cache 复用**（[#10786](https://github.com/can1357/oh-my-pi/issues/10786)）

### [v18.1.9](https://github.com/can1357/oh-my-pi/releases) — `pi-ai`
- **新增**：macOS / Linux 桌面 / Windows 的可恢复原生自定义 scheme OAuth 回调，远程会话提供手动回退
- 修复 Gemini 工具续传经过自定义 Anthropic Messages 代理及 OpenAI Responses 中继时的问题

---

## 3. 社区热点 Issues

| # | Issue | 关注理由 |
|---|-------|---------|
| 1 | [#9701](https://github.com/can1357/oh-my-pi/issues/9701) Cursor 订阅下 UI 被 stale "Thinking" 状态刷屏 | 17 条评论，Cursor provider 的 TUI 显示老问题，标记为重复但持续活跃 |
| 2 | [#10781](https://github.com/can1357/oh-my-pi/issues/10781) google-antigravity provider 子代理 100% 崩溃 | `TypeError: rt.getWorkPoolYieldItems`，首条 prompt 前即崩，14 条评论，严重影响可用性 |
| 3 | [#10894](https://github.com/can1357/oh-my-pi/issues/10894) `/vibe` worker 成功 yield 后循环运行（已关闭/wontfix） | 单 worker 45 分钟内提交 **309 次 yield**，暴露任务结算机制缺陷 |
| 4 | [#10895](https://github.com/can1357/oh-my-pi/issues/10895) 循环防护可被简单参数变化绕过（p1） | 303 次分段 yield 中防护仅触发 1 次，作者自我修正了两次表述，社区深度复盘防护设计 |
| 5 | [#10659](https://github.com/can1357/oh-my-pi/issues/10659) Volar 3 LSP 无响应 | LSP client 缺少 tsserver/request 桥接，影响 Vue 开发者，p2 |
| 6 | [#10796](https://github.com/can1357/oh-my-pi/issues/10796) GitHub Copilot 发现机制分配跨 provider 的 requestModelId | 18.1.9 升级后所有请求 HTTP 400 `model_not_supported`，属升级引入的回归 |
| 7 | [#8246](https://github.com/can1357/oh-my-pi/issues/8246) Headless 浏览器进程不关闭、CPU 高占用 | 11 个残留进程长期消耗 CPU/GPU，Windows 平台 |
| 8 | [#10749](https://github.com/can1357/oh-my-pi/issues/10749) Tool call id 未原样回传，破坏 Gemini 3 thought signatures（已关闭） | p1，重写 id 导致 Gemini 3 请求被拒，已修复 |
| 9 | [#10862](https://github.com/can1357/oh-my-pi/issues/10862) git repo 内不再加载 ~/AGENTS.md | **静默行为变更**导致 agent 不再遵循用户指令，配置发现规则值得警惕 |
| 10 | [#10850](https://github.com/can1357/oh-my-pi/issues/10850) ACP 协议合规的权限应答被忽略，工具调用永久挂起 | ACP 集成基本可用性受损 |

---

## 4. 重要 PR 进展

| # | PR | 内容 |
|---|-----|------|
| 1 | [#10874](https://github.com/can1357/oh-my-pi/pull/10874) Copilot GPT-6 走 Responses API（review:p0） | 修复 Astra 模型被错误路由到 `/chat/completions` 报 `unsupported_api_for_model` |
| 2 | [#10872](https://github.com/can1357/oh-my-pi/pull/10872) GPT-6 Astra 扩展上下文支持（review:p0） | `/extended-context` 切换 872K token 窗口，默认 272K |
| 3 | [#10776](https://github.com/can1357/oh-my-pi/pull/10776) 原生 Cursor 推理（review:p3） | 从 `AgentService/Run` 迁移到 IDE 原生 HTTP/2 `InferenceService/RunInference` 流，投影完整上下文与工具 schema |
| 4 | [#10861](https://github.com/can1357/oh-my-pi/pull/10861) `omp commit` 安全修复（review:p1） | `--dry-run` 严格只读、原子拆分提交、pi-vcs 补丁对齐 `git apply` 语义 |
| 5 | [#10844](https://github.com/can1357/oh-my-pi/pull/10844) Cursor 原生任务参数适配（review:p1） | 适配 Cursor 微调模型输出的 `{description, prompt, subagent_type}` 参数格式及子代理别名 |
| 6 | [#10875](https://github.com/can1357/oh-my-pi/pull/10875) MCP 按服务器 enabledTools/disabledTools 过滤 | picomatch 通配，对齐 Copilot/Claude/OpenCode 等竞品能力 |
| 7 | [#10891](https://github.com/can1357/oh-my-pi/pull/10891) 按 provider 的 API key 列表与自动 failover | `apiKey` 支持数组，支持手动轮换与自动故障转移 |
| 8 | [#10869](https://github.com/can1357/oh-my-pi/pull/10869) 隔离后台请求 provider 会话 | 修复 Mnemopi 记忆请求与前台对话共用 session id 导致前台被拒（对应 #10865） |
| 9 | [#10893](https://github.com/can1357/oh-my-pi/pull/10893) 实验性 notes-backed 上下文窗口 | 新的上下文压缩管理范式，默认关闭，可在 /settings 开启 |
| 10 | [#10837](https://github.com/can1357/oh-my-pi/pull/10837) `.claude/rules/*.{md,mdc}` 发现支持 | 打通 Claude Code 项目记忆，跨 harness 共享无需 symlink |

> 另注：roboomp 机器人今日密集提交小步修复 PR（#10883/#10886/#10890 等），覆盖截断提示、Windows 测试、README 链接等，响应速度极快。

---

## 5. 功能需求趋势

- **新模型/provider 适配**是最大主线：GPT-6 Astra、Gemini 3、Cursor 原生推理、Muse Code 订阅（#10677）、google-antigravity（仍崩溃中）
- **上下文管理**：notes-backed 上下文窗口、压缩与 prompt-cache 复用、read 工具大行截断的可观测性（#10774、#10877、#10888 一组关联 issue）
- **子代理编排可靠性**：循环防护、yield 语义（#10635）、spawn 深度限制（#10892）
- **跨生态兼容**：Claude rules 文件、ACP 协议、Copilot/Cursor 订阅复用
- **调度与自动化**：原生 cron 式定时任务需求持续存在（#2763）

---

## 6. 开发者关注点

1. **长时运行失控与防护失效**：yield 循环、工具调用循环防护被轻易绕过，用户损失大量 token（45 分钟级别），这是本周最高频痛点
2. **升级引入的静默回归**：18.1.9 的 Copilot 模型路由、AGENTS.md 加载行为变更均无告警，“改了没说”损害信任
3. **资源泄漏**：headless 浏览器进程、跨会话 provider 身份复用（#10865）均会拖垮系统
4. **输出截断可观测性**：原始输出已保留在 artifact 但从不告知用户，“看似丢失”造成不必要的困扰
5. **Windows/macOS 平台细节**：路径处理、Terminal.app 非 truecolor 渲染等平台长尾问题持续出现

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

# DeepSeek Harness 社区动态日报
**日期：2026-09-05**

---

## 1. 今日速览

DeepSeek Harness 今日发布 **dsh-v0.1.3-alpha.1** 预发布版本，带来三项实用更新：Web 端通用文件上传能力、全链路代理环境变量支持，以及 Python SDK 的 macOS 支持。过去 24 小时内无新增 Issue 或 PR 动态，社区互动集中在版本发布讨论上。

---

## 2. 版本发布

### 🚀 [dsh-v0.1.3-alpha.1](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.3-alpha.1)

| 更新项 | 内容 | 贡献者 |
|---|---|---|
| **通用文件上传** | Web 端支持上传任意类型文件，文件与图片可在同一预览区混排；后台上传支持进度显示、取消操作及会话切换后进度续显；模型可通过已保存路径调用现有文件工具按需读取 | @CreatixChu |
| **代理环境变量支持** | 所有出站网络请求遵循启动环境中的 `HTTP_PROXY`、`HTTPS_PROXY`、`ALL_PROXY` 与 `NO_PROXY` 配置 | @LegGasai |
| **macOS 支持** | Python SDK 新增 macOS 平台支持 | — |

**解读**：代理支持对企业内网开发者尤为重要，解决了此前出站请求无法走代理的部署痛点；文件上传与模型文件工具的打通，使 Web 端具备了更完整的上下文供给能力。

---

## 3. 社区热点 Issues

过去 24 小时内无 Issue 更新，本节省略。

---

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新，本节省略。

---

## 5. 功能需求趋势

由于今日无活跃 Issue 数据，基于本次 Release 内容可观察到的方向：

- **文件与多模态上下文**：通用文件上传功能表明社区对“任意文件类型作为模型输入”的需求较强
- **企业网络环境适配**：代理支持落地，反映开发者对内网/受限网络部署场景的关注
- **跨平台 SDK 覆盖**：macOS 支持补齐，说明 Python SDK 的平台完整性是当前优先级

---

## 6. 开发者关注点

- **部署灵活性**是近期重点：代理环境变量支持回应了企业开发者在受限网络下的高频痛点
- **Web 端体验持续打磨**：上传进度、取消、会话切换续显等细节功能，说明 Web 端交互稳定性是开发者反馈的集中方向
- 建议关注后续 alpha 版本的 Issue 反馈窗口，alpha.1 预发布通常伴随一轮稳定性验证讨论

---

*数据来源：[deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | 统计窗口：2026-09-04 至 2026-09-05*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*