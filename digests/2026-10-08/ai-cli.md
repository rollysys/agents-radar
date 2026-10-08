# AI CLI 工具社区动态日报 2026-10-08

> 生成时间: 2026-10-08 05:07 UTC | 覆盖工具: 11 个

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
**数据日期：2026-10-08**

---

## 一、生态全景

AI CLI 工具已进入**功能深化与平台分化并行**的阶段：头部工具（Claude Code、Codex）在多 agent 架构、企业合规、桌面端体验上快速演进，但桌面壳（Electron）层成为质量瓶颈；腰部工具（Gemini CLI、Qwen Code、OpenCode）围绕 subagent 可信度、token 经济性和 UI 自主权展开激烈迭代。**安全语义（hooks fail-closed、审批一致性、沙箱边界）**首次超越性能成为多工具同步修复的焦点，同时 Haiku 5.5 等新模型的当日适配速度成为衡量维护者响应能力的标尺。整体看，行业正从“能用”向“可信自动化”过渡，可观测性和成本透明度是普遍短板。

---

## 二、各工具活跃度对比

| 工具 | 今日热点 Issues | 今日 PR | Release | 核心事件 |
|---|---|---|---|---|
| Claude Code | 10+（另 3 条值得留意） | 7 | 2 个（v2.1.293/294） | Haiku 5.5 接入；hooks 安全修复；Windows git 进程风暴 |
| OpenAI Codex | 10 | 10 | 4+（0.161.0 稳定 + 3 alpha） | GPT-6.1 Sol 默认化；Windows 沙箱大面积故障（近百评论） |
| Gemini CLI | 10 | 10+（另 3 条快讯） | 1（nightly） | 4 个 P1 安全修复集中落地 |
| Copilot CLI | 10 | 0 | 5 | 沙箱全员开放；托管策略增强 |
| Qwen Code | 10（另 4 条） | 10（另 3 条快讯） | 1（nightly） | Managed Agent 架构主线推进（#12380，49 评论） |
| OpenCode | 10 | 10 | 0 | V2 布局强推引发社区反弹（#48882，34👍） |
| DeepSeek TUI | 10 | 10 | 1（v0.10.1，发布受阻） | crates.io 413 发布中断；v0.10.2 集成分支 |
| Pi | 10 | 10+ | 1（v1.1.0） | OSC 7501 当日提出当日落地 |
| oh-my-pi | 10 | 10 | 5（v18.8.0–18.8.4） | P0 修复密集；Issue→当日 Release 闭环 |
| Kimi Code / DeepSeek Harness | — | — | — | 24 小时无活动 |

**观察**：Claude Code 与 Codex 的 Issue 编号已破 9-10 万，远超其他工具，体量差距显著；oh-my-pi、Pi、Copilot CLI 保持高频小步发布节奏；OpenCode、Gemini CLI 社区讨论热度高但争议/修复占比大。

---

## 三、共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **安全边界与权限语义** | Claude Code、Codex、Qwen Code、Copilot CLI、Gemini CLI | hooks fail-closed（Claude Code #84364）、Auto 模式误拦截无逃生通道（Qwen #13570、Claude Code #100405）、审批模式意外降级（Codex #40125）、沙箱白名单/ACL 故障（Codex #51601、Copilot #5076） |
| **取消/恢复/生命周期语义** | Qwen Code、Copilot CLI、DeepSeek TUI、Codex、oh-my-pi | Ctrl+C 不触发 agentStop hook（Copilot #5075、Qwen #13633）、ACP 恢复取消混淆（Qwen #6710）、UI/引擎状态不一致（DeepSeek TUI #6788/#6800）、compaction“复活”旧指令（Codex #42695） |
| **Token 成本可观测性** | Claude Code、oh-my-pi、Pi、OpenCode、Gemini CLI | headless 1.8× 额度消耗（CC #97074）、成本计算 2-3× 偏差（Pi #9980）、缓存友好压缩、BYOK 回退计费（Copilot #3978） |
| **Subagent 可信度** | Gemini CLI、Qwen Code、Codex、Claude Code | 误报成功（Gemini #22323）、无限挂起（#21409）、并行子代理架构（Qwen Managed Agent） |
| **内存/资源泄漏** | Claude Code、Codex、OpenCode、Pi | 6GB/天内核泄漏（CC #94478）、44.6GiB OOM（Codex #51947）、500MB/s TUI OOM（OpenCode #51761） |
| **新模型快速适配** | Claude Code、Copilot CLI、oh-my-pi、Pi | Haiku 5.5 当日接入（CC、Copilot），第三方工具适配滞后引发冲突（oh-my-pi #14854、Pi #10630） |
| **Windows 平台质量** | 6/10 个工具 | 沙箱故障、进程风暴、输入法、安装渠道问题普遍存在 |

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 企业合规（HIPAA）、hooks 安全、plugin/mod 生态 | 专业开发者 + 企业 | TypeScript + Electron 桌面端；模型-工具深度绑定 |
| **Codex** | 沙箱执行、多 agent V2、Bedrock/GovCloud | 企业 + 重度自动化用户 | Rust（Bazel 构建落地）；云端 agent 优先 |
| **Gemini CLI** | subagent sprint、AST-aware 工具、token 经济性 | 开发者（开源） | TypeScript 开源；调研型 EPIC 驱动 |
| **Copilot CLI** | 托管策略、Assisted Permissions、沙箱 | GitHub 企业生态用户 | VS Code/GitHub 深度集成，策略管控优先 |
| **Qwen Code** | Managed Agent 分阶段架构、K8s 运行时 | 平台化/自托管用户 | serve 架构 + ACP，最激进的架构重构 |
| **OpenCode** | UI/UX、多 provider、国际化 | 多项目重度用户、非英语用户 | 开源 TUI + Web PWA；V1/V2 双分支过渡期 |
| **DeepSeek TUI** | 可靠性工程、本地化、多 provider 聚合 | 个人开发者 | Rust 多 crate 发布；弱网/代理友好 |
| **Pi / oh-my-pi** | 终端互操作（OSC 7501）、扩展 API、多账号池 | 终端极客、嵌入者 | Pi 为 SDK 内核，oh-my-pi 在其上做多账号/成本优化 |

---

## 五、社区热度与成熟度

- **高活跃 + 高成熟度**：Claude Code、Codex —— Issue 体量领先一个数量级，但热点多为长期未解的顽疾（如 CC #12953 达 27 评论），维护响应跟不上反馈增长
- **高活跃 + 快速迭代**：oh-my-pi（单日 5 版本、Issue→当日修复闭环）、Qwen Code（架构级重构持续推进）、Gemini CLI（P1 安全修复高效落地）——响应速度最佳
- **高热度 + 信任危机期**：OpenCode（社区反弹集中于产品决策而非技术）、Copilot CLI（新功能即新 bug 源，PR 完全停滞值得警惕）
- **早期成长**：Pi、DeepSeek TUI —— 发布工程和状态一致性仍在补课；Kimi Code、DeepSeek Harness 活动停滞

---

## 六、值得关注的趋势信号

1. **“安全默认”竞赛开启**：hooks fail-closed、粘贴 @path 泄露防护、不可信工作区隔离在 Claude Code、Gemini CLI、Qwen Code 同步落地——权限系统的精细语义（区分“执行”与“提及”、提供逃生通道）将成为下一轮竞争点，建议自建工具链的团队优先采纳 fail-closed 原则。

2. **取消/生命周期语义是系统性盲区**：跨 5 个工具出现“中断不通知 hook / UI 与引擎状态脱节 / 恢复后取消混淆”，说明会话状态机复杂度已超出多数实现的设计。集成自动化的开发者应将 hook 终态事件作为选型硬指标。

3. **成本可观测性成为付费用户信任基础**：headless 额度偏差、成本计算失真、静默模型降级、缓存计费未更新等问题集中爆发。重度用户需自行核对账单，工具方则在竞逐缓存友好压缩（Pi #8307、Codex prediction fork 值得关注）。

4. **桌面壳是共性质量瓶颈**：三款工具的桌面端同时出现 GB 级资源问题，而 CLI 核心相对稳定——短期内桌面端功能密集度可能让位于稳定性。

5. **多账号/多 provider 调度走向工程化**：oh-my-pi 的 OAuth 账号池（缓存亲和、配额冷却、用量上报）代表了个人重度用户绕开单一订阅限额的实际路径，相关能力可能向上游产品反向渗透。

6. **模型发布节奏倒逼工具适配**：Haiku 5.5 发布当日，官方工具即时接入、第三方工具出现档位冲突——依赖外部模型目录的工具，catalog 增量同步机制（如 oh-my-pi #14882 暴露的退役模型问题）值得架构层面重视。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
（数据截止 2026-10-08，来源：anthropics/skills）

---

## 一、热门 Skills 排行（按 PR 活跃度/重要性）

| # | Skill / PR | 功能与热点 | 状态 |
|---|---|---|---|
| 1 | **skill-creator 评测体系修复** ([PR #1298](https://github.com/anthropics/skills/pull/1298)) | 修复触发评测的误报、Windows `select()` 兼容、运行失败误判为非触发等问题；与 Issue #556、#1383 的高讨论度 bug 直接呼应，是社区最痛的评测基础设施 | OPEN（长期活跃，6月至今） |
| 2 | **skill-creator eval viewer 安全加固** ([PR #1961](https://github.com/anthropics/skills/pull/1961)) | 修复脚本逃逸、DNS rebinding、跨站 POST 与转义问题，回应 Issue #1394 的 XSS 漏洞 | OPEN（10月新提交，修复紧迫） |
| 3 | **mcp-builder 兼容修复** ([PR #1742](https://github.com/anthropics/skills/pull/1742)) | 适配 `mcp>=2.0` 的 `streamable_http_client` 重命名与自定义 Header，修复 Issue #1668；关联 Issue #1390 评测全 0 分问题 | OPEN |
| 4 | **md2video-audio** ([PR #1703](https://github.com/anthropics/skills/pull/1703)) | Markdown 一键编译为带拟真人配音的 MP4 视频（Marp + TTS），零成本、多媒体方向代表作 | OPEN |
| 5 | **pyxel 复古游戏开发** ([PR #525](https://github.com/anthropics/skills/pull/525)) | Pyxel 游戏的创建/调试/无头运行验证，3 月提交至今仍在更新，长尾活跃 | OPEN |
| 6 | **notion-spec-to-implementation + quantitative-resume-auditor** ([PR #1245](https://github.com/anthropics/skills/pull/1245)) | 将产品/技术 Spec 拆解为 Notion 任务（含验收标准与进度跟踪）+ 简历量化审计 | OPEN |
| 7 | **scnet-hpc** ([PR #1615](https://github.com/anthropics/skills/pull/1615)) | 基于 Profile 的 SSH + Slurm HPC 集群操作，稀缺的科研计算方向 | OPEN |
| 8 | **docx 系列修复** ([PR #1792](https://github.com/anthropics/skills/pull/1792), [PR #1734](https://github.com/anthropics/skills/pull/1734)) | LibreOffice 超时正确报错并校验修订标记清除；孤儿批注检测——文档类 Skill 持续被社区打磨 | OPEN |

> 注：本批数据中所有 PR 均为 OPEN 且评论/点赞元数据缺失，排名基于更新频率、议题热度与对应 Issue 关联度综合判断。

---

## 二、社区需求趋势（Issues 提炼）

1. **安全与信任机制** — 最高热度。[Issue #492](https://github.com/anthropics/skills/issues/492)（43 评论）指出社区 Skill 冒用 `anthropic/` 命名空间造成信任边界滥用；配套需求是签名/来源验证体系。
2. **组织级分发与共享** — [Issue #228](https://github.com/anthropics/skills/issues/228)（16 评论）：组织内 Skill 库与直接分享链接，替代目前“下载 .skill 文件走 Slack”的手工流程。
3. **Skill 质量评测工具链** — [Issue #556](https://github.com/anthropics/skills/issues/556)、[#1383](https://github.com/anthropics/skills/issues/1383)、[#1390](https://github.com/anthropics/skills/issues/1390)：触发率 0%、Windows 兼容、评测静默失败等，社区迫切需要可靠的触发/评测框架。
4. **上下文经济性** — [Issue #1487](https://github.com/anthropics/skills/issues/1487)：`claude-api` skill 一次注入 ~156k token 打爆上下文；[#1329](https://github.com/anthropics/skills/issues/1329) 提出 compact-memory 紧凑 agent 状态符号方案；[#202](https://github.com/anthropics/skills/issues/202) 要求 skill-creator 精简为可执行指令。
5. **插件包去重与分发规范** — [Issue #189](https://github.com/anthropics/skills/issues/189)：document-skills 与 example-skills 内容重复，挤占上下文。
6. **Agent 治理/质量门禁** — [Issue #412](https://github.com/anthropics/skills/issues/412)、[#1385](https://github.com/anthropics/skills/issues/1385)：策略执行、审计追踪、对抗式审查流水线。
7. **云平台兼容** — [Issue #29](https://github.com/anthropics/skills/issues/29)：AWS Bedrock 下的使用支持。

---

## 三、高潜力待合并 Skills（活跃但未合并）

- **PR #1742** mcp-builder MCP v2 兼容修复 — 修复阻塞性 bug（#1668），落地概率最高
- **PR #1961** skill-creator eval viewer 安全加固 — 对应已确认的 XSS Issue #1394，安全类修复优先级高
- **PR #1792 / #1734** docx 修复 — 小而明确，易合入
- **PR #1681** skill-creator package_skill.py 直接执行修复 — 配套文档更新，路径清晰
- **PR #1703** md2video-audio — 功能完整、零依赖成本，多媒体方向稀缺
- **PR #538** pdf SKILL.md 大小写引用修复 — 影响大小写敏感文件系统的实际可用性，典型易合并修复

---

## 四、生态洞察（一句话）

**社区最集中的诉求是“可信 + 可靠”：建立 Skill 的安全签名与组织级分发机制，同时修复触发评测和上下文开销问题，让 Skills 从“能用”走向“可托付”。**

---

# Claude Code 社区动态日报 · 2026-10-08

## 一、今日速览

今日连发两个版本：**v2.1.294** 修复了以自然语言指令形式编写的 `prompt`/`agent` hooks 的判定缺陷（此前会“放行本应阻止的操作”），**v2.1.293** 则正式引入 **Claude Haiku 5.5**（1M 上下文，$0.10/$0.50 per Mtok）。社区方面，Windows 桌面端 git 进程风暴导致每日 6GB 内核内存泄漏的严重 bug（#94478）持续发酵，Remote Control 相关问题今日集中爆发，成为新的痛点聚集地。

---

## 二、版本发布

### [v2.1.293](https://github.com/anthropics/claude-code/releases)
- **新增 Claude Haiku 5.5**（`claude-haiku-5-5`），成为 Anthropic API 默认 Haiku 模型：1M 上下文，$0.10/$0.50 per Mtok（超 100K prompt 为 $0.50/$2.50）
- `subagentStatusLine` 载荷新增 `agentType` 字段，脚本可区分自定义 subagent 类型

### [v2.1.294](https://github.com/anthropics/claude-code/releases)
- **安全修复**：修复以指令形式编写的 `prompt`/`agent` hooks（如“阻止某些命令”）反而允许被阻止内容的问题
- 改进 Stop / SubagentStop 上指令式 `prompt` hooks 的判定逻辑，降低误判

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 关注点 |
|---|-------|--------|
| 1 | [#94478](https://github.com/anthropics/claude-code/issues/94478) | **Windows 桌面端每秒生成 ~17 个 git 进程**（含 conhost），日累计约 200 万个短命进程，叠加内核池泄漏达 ~6GB/天。严重资源问题，10 条评论持续跟进 |
| 2 | [#97074](https://github.com/anthropics/claude-code/issues/97074) | Headless `claude -p`（sdk-cli 入口）相比交互式 CLI **多消耗 ~1.8 倍的 5 小时窗口额度**，直接影响重度自动化用户的成本 |
| 3 | [#12953](https://github.com/anthropics/claude-code/issues/12953) | Windows TUI 滚轮滚动输入历史而非聊天历史的经典 bug，27 评论 / 23 👍，长期未解 |
| 4 | [#99211](https://github.com/anthropics/claude-code/issues/99211) | 桌面端任意状态变化重绘所有 mod 渲染站点，导致按钮失效、SVG 动画重启——影响 plugin/mod 生态的核心渲染问题 |
| 5 | [#79944](https://github.com/anthropics/claude-code/issues/79944) | MCP 工具响应中 `structuredContent` 与文本 `content` 并存时**静默丢弃文本块**，影响所有返回混合内容的 MCP server |
| 6 | [#100377](https://github.com/anthropics/claude-code/issues/100377) | Remote Control：claude.ai Project 线程派发到本机全部失败（CCR v2 worker 注册 400），自启动会话正常。今日新增，疑似服务端问题 |
| 7 | [#90301](https://github.com/anthropics/claude-code/issues/90301) | 安全增强提案：梳理 18 个开放需求，指出缺少**向 Claude 安全传递秘密（secret）的官方通道**这一最小原语，系统性安全设计讨论 |
| 8 | [#85046](https://github.com/anthropics/claude-code/issues/85046) | 自动更新进入不可恢复的重启循环：单流下载无断点续传，慢连接下更新永远失败。已确认复现 |
| 9 | [#99857](https://github.com/anthropics/claude-code/issues/99857) | 安全引导（security-guidance）在 LLM 网关后返回 401，因为 `ANTHROPIC_CUSTOM_HEADERS` 未随请求发送——企业网关部署的盲区 |
| 10 | [#100197](https://github.com/anthropics/claude-code/issues/100197) | macOS 桌面端渲染进程 60–120 秒内膨胀至 4–5GB 后 OOM 崩溃（exitCode 5），触发场景为 artifact 侧边栏 |

**其他值得留意**：#100405（auto mode 分类器刚拒绝 `git status` 又放行，规则执行不一致）、#100396（安全分类器误伤家庭实验室网络管理并静默降级模型）、#100401（code-review plugin 在 2.1.285+ 上跳过审查仍报 "No issues found"）。

---

## 四、重要 PR 进展

| # | PR | 内容 |
|---|-----|------|
| 1 | [#100293](https://github.com/anthropics/claude-code/pull/100293) | **新增 HIPAA 合规示例**：`hipaa-baseline.json` 托管设置 + MCP 锁定配置，面向医疗合规企业（昨日新开，今日更新） |
| 2 | [#84364](https://github.com/anthropics/claude-code/pull/84364) | hookify 插件安全加固：PreToolUse hook 异常时**默认拒绝**（fail-closed），堵住异常路径下未授权放行的漏洞 |
| 3 | [#85716](https://github.com/anthropics/claude-code/pull/85716) | hookify 从祖先目录 `.claude` 加载规则，防止静默绕过安全配置 |
| 4 | [#86746](https://github.com/anthropics/claude-code/pull/86746) | security-guidance 保留 Python 探测的 stderr，解释器全部失败时输出诊断而非泛泛报错（修复 #86709） |
| 5 | [#85323](https://github.com/anthropics/claude-code/pull/85323) | 修复 plugin-dev 中 YAML block-scalar（`description: \|`）描述解析缺陷，长描述不再被截断（修复 #83803 残留） |
| 6 | [#82320](https://github.com/anthropics/claude-code/pull/82320) | 修复 AWS gateway 示例 `setup.sh` 在 macOS 自带 bash 3.2 上因 `${VAR,,}` 语法直接中止 |
| 7 | [#41447](https://github.com/anthropics/claude-code/pull/41447) | 趣味性 PR：“开源 Claude Code”，关联 5 个相关 issue，反映社区长期诉求 |

*注：过去 24 小时 PR 活动较少（共 7 条），以上为核心项；hookify 相关安全修复占两条，与今日 v2.1.294 的 hooks 安全修复方向一致。*

---

## 五、功能需求趋势

1. **Remote Control 稳定性**（最热）：注册失败 400/403、更新后连接丢失、移动端归档异常、跨设备分组不同步——今日新增 issue 中占比最高
2. **Auto mode 权限分类器可靠性**：误拒已批准操作、规则执行前后不一致、无审批路径
3. **安全与企业合规**：secret 传递原语、HIPAA 基线、LLM 网关兼容、fail-closed hooks
4. **Windows 平台质量**：进程泄漏、TUI 滚轮、非英文输入、孤儿孙进程
5. **资源与成本**：headless 模式额度消耗、桌面端 OOM、模型静默降级

---

## 六、开发者关注点

- **Hooks 是本日双线焦点**：官方在 v2.1.294 修复指令式 hooks 判定，社区 PR 同步推进 fail-closed 语义——hooks 安全性已成为可信自动化的关键短板
- **桌面端（Electron 层）问题密度显著高于 CLI**：渲染重绘风暴、git 进程风暴、OOM，跨平台桌面壳是当前质量瓶颈
- **额度与成本透明度**：headless 1.8× 消耗、分类器触发的静默模型降级，用户呼吁可观测性
- **企业/网关部署支持不足**：`ANTHROPIC_CUSTOM_HEADERS` 不生效、MCP 内容静默丢弃，影响自建基础设施用户

---
*数据截至 2026-10-08 · 来源：github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-10-08

## 1. 今日速览

今日最突出的动态是 **Windows 平台沙箱大面积故障**：多个版本的桌面应用（26.1002.x 系列）在沙箱初始化时遇到 `node_repl.exe` 共享冲突（os error 32），导致命令执行和 Computer Use 完全不可用，相关 Issue 已积累近百条评论。与此同时，官方密集合并了以 copyberry 自动化为主的修复与工程化 PR（含 Bazel 构建体系落地），并发布了 0.161.0 正式版（GPT-6.1 Sol 成为默认模型）和多个 0.162.0 alpha 版本。

## 2. 版本发布

- **rust-v0.161.0**（稳定版）重点更新：
  - GPT-6.1 Sol 成为捆绑目录和 Amazon Bedrock 目录中的默认模型（#49318, #49339）
  - Amazon Bedrock 支持 multi-agent V2 与兼容模型的 Ultra reasoning；Bedrock Mantle 新增 AWS GovCloud 区域支持（#49345, #49813）
  - 支持登录 MCP 服务器
- **rust-v0.162.0-alpha.20 / alpha.18.1 / alpha.17.1**：持续迭代中的 alpha 预览版，多个 Issue 报告桌面端已捆绑 `0.162.0-alpha.2` 核心。

## 3. 社区热点 Issues

1. **[#51601](https://github.com/openai/codex/issues/51601)** — Windows app 26.1002.51308 沙箱在验证自身运行时发生共享冲突，所有命令执行失败。65 条评论、21 👍，为今日最热问题，疑似为本次 Windows 沙箱故障的根因报告。
2. **[#51590](https://github.com/openai/codex/issues/51590)** — Windows 沙箱 ACL 更新时无法打开运行中的 `node_repl.exe`（error 32），Computer Use 与 shell 全部被阻塞。与 #51601 同源，佐证问题影响范围。
3. **[#51778](https://github.com/openai/codex/issues/51778)** — 26.1002.52244 版本 Windows 沙箱失败，本地文件和命令均无法访问，说明最新版本仍未修复。
4. **[#50428](https://github.com/openai/codex/issues/50428)** — Windows 桌面端持久化 chat 的 turn/start 和 thread/fork 因 `AbsolutePathBuf` 反序列化缺少 base path 而失败，23 条评论，长期未解。
5. **[#21073](https://github.com/openai/codex/issues/21073)** — 功能请求：CLI 达到用量上限后自动恢复会话。72 👍，企业用户高频诉求。
6. **[#40125](https://github.com/openai/codex/issues/40125)** — Desktop `create_thread` 间歇性将 Full Access worktree 子会话降级为受管审批模式，涉及权限安全语义，值得关注。
7. **[#42695](https://github.com/openai/codex/issues/42695)** — 中途压缩（compaction）可能“复活”已完成的旧指令并产生错误执行报告，多智能体场景下的正确性风险。
8. **[#51824](https://github.com/openai/codex/issues/51824)** — ChatGPT for Windows 在 `windows-updater.node` 中崩溃（0xc0000005），应用 30–60 秒内闪退。
9. **[#51947](https://github.com/openai/codex/issues/51947)** — Linux 桌面端 app-server 在两个长时运行线程下内存达 44.6 GiB，触发系统级 OOM，资源泄漏信号明显。
10. **[#30958](https://github.com/openai/codex/issues/30958)** — 长期存在的流式连接中断问题（`chatgpt.com/backend-api/codex/responses`），Windows 用户持续反馈，涉及 WebSocket 回退链路。

## 4. 重要 PR 进展

1. **[#51896](https://github.com/openai/codex/pull/51896)** — 保留 Windows 沙箱 ACL 诊断中的原生错误链，直接改善当前沙箱故障的可诊断性（已关闭/合并）。
2. **[#51884](https://github.com/openai/codex/pull/51884)** — 实验性 prediction fork，继承父线程上下文和请求设置以最大化 prompt-cache 复用，值得关注的新能力。
3. **[#51897](https://github.com/openai/codex/pull/51897)** — 网络域名策略改用专用匹配器，为 allowlist/denylist 提供独立于文件系统 glob 的通配符语义。
4. **[#51895](https://github.com/openai/codex/pull/51895)** — WebSocket 续传失败时报告具体原因，改进与 #30958 类连接问题的可观测性。
5. **[#51930](https://github.com/openai/codex/pull/51930)** — 支持按模型定制 function 描述前缀，提升不同模型下的工具调用质量。
6. **[#51908](https://github.com/openai/codex/pull/51908)** — 异步提问功能严格遵循用户输入设置，修复配置关闭后仍可用的问题。
7. **[#51856](https://github.com/openai/codex/pull/51856)** / **[#51855](https://github.com/openai/codex/pull/51855)** / **[#51848](https://github.com/openai/codex/pull/51848)** — Bazel 构建体系系列：与 Cargo 构建对齐、发布产物并行打包、修复平台兼容性，工程基础设施重大演进。
8. **[#51872](https://github.com/openai/codex/pull/51872)** — 全局 app-server 配置与启动目录解耦，避免项目设置泄漏到全局请求。
9. **[#31657](https://github.com/openai/codex/pull/31657)** — 为 Codex Apps 文件上传添加瞬时故障重试，当前一次传输失败即导致整个 MCP 工具调用失败。
10. **[#51892](https://github.com/openai/codex/pull/51892)** — 修正参数被截断时 `tool_calls_complete` 的语义，保留已记录调用清单的完整性。

## 5. 功能需求趋势

- **Windows 平台稳定性**：今日 Issue 的绝对主旋律，沙箱/ACL/Computer Use 相关报告占压倒性比例，是当前最大的平台性短板。
- **配额与调度自动化**：限额自动恢复会话（#21073）、Fast mode 服务等级未生效（#30413），反映重度/企业用户对吞吐的诉求。
- **多智能体与线程管理**：thread/fork、跨会话消息（send_message_to_thread）、prediction fork 等，社区围绕上下文继承与压缩正确性提出大量反馈。
- **IDE 扩展体验**：VS Code 扩展的上下文携带（文件路径、行号，#14592、#15498）是长期诉求。
- **连接可靠性**：流断连、WebSocket 回退问题跨版本持续存在。

## 6. 开发者关注点

- **Windows 沙箱 "os error 32" 事故**是最大痛点：跨 26.1002.51308 / 52244 / 7124.0 多个版本复现，阻塞所有命令执行与 Computer Use，社区迫切等待官方修复（PR #51896 已改善诊断信息）。
- **内存与资源管理**：Linux 端 app-server 44.6 GiB OOM（#51947）提示长会话场景存在泄漏风险。
- **配置与权限语义的可预测性**：审批模式意外降级（#40125）、全局/项目配置混淆（PR #51872）表明权限边界的确定性是高级用户的核心关切。
- **可观测性**：多个 PR 聚焦错误链保留、失败原因细化，说明官方正在系统性提升调试体验——这也是社区反馈中反复出现的需求。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-10-08

## 一、今日速览

Gemini CLI 发布 v0.65.0-nightly 版本，包含 CI 工作流修复和核心请求内容标准化改进。今日社区活跃 PR 集中在**稳定性与安全修复**上，包括 OAuth 认证循环、粘贴文本 @path 文件泄露风险、不可信工作区 settings.json 被静默清空等 P1 级问题。Issues 侧，Subagent 子代理可靠性（挂起、误报成功、不主动调用）仍是用户最集中的抱怨方向。

---

## 二、版本发布

### v0.65.0-nightly.20261008.g44d764ee5
[Release 链接](https://github.com/google-gemini/gemini-cli/releases)

- **fix(ci)**: 修复 unassign-inactive-assignees 工作流中缺失的循环逻辑（[#29609](https://github.com/google-gemini/gemini-cli/pull/29609)）
- **fix(core)**: 强制终端用户轮次不变式（terminal user turn invariant）并规范化请求内容

---

## 三、社区热点 Issues（Top 10）

1. **Subagent 达到 MAX_TURNS 后误报 GOAL 成功** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) · P1 · 13 评论
   `codebase_investigator` 子代理明明因轮次上限被中断，却上报 `status: "success"`，掩盖了真实失败。这是可观测性/可信度问题，用户无法依赖子代理结果。

2. **Generalist agent 无限挂起** [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) · P1 · 8 评论 · 👍8
   主代理委派给通用子代理后永久挂起，简单如创建文件夹也会卡死一小时。👍 数最高的 agent 类 bug，属核心可用性问题。

3. **零依赖 OS 沙箱 + 执行后意图路由** [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) · P2 · 9 评论
   社区提议利用 Gemini 3 原生 bash 能力，结合操作系统级沙箱（不依赖 Docker）释放模型的 POSIX 工具链潜力，同时保障安全。方向性讨论热度高。

4. **Gemini 不主动使用 skills 和 sub-agents** [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) · P2 · 7 评论
   用户配置了 gradle/git skills 后模型基本不会自主调用，只有显式指令才生效。反映代理调度/触发机制的实际痛点。

5. **AST 感知的文件读取、搜索与代码库映射评估（EPIC）** [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) · P2 · 7 评论
   官方主导的调研型 EPIC：用 AST 工具精确定位方法边界，减少错位读取和 token 噪声，可能重塑 `codebase_investigator` 的实现。

6. **Browser Agent 无视 settings.json 配置** [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) · P2 · 4 评论
   `AgentRegistry` 初始化时正确合并了配置，但浏览器子代理运行时完全忽略 `maxTurns` 等覆盖项——配置传递链路断裂。

7. **browser subagent 在 Wayland 下失败** [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) · P1 · 4 评论
   Linux Wayland 用户浏览器子代理直接不可用，同样是“GOAL 终止”但实际失败，与 #22323 症状相互印证。

8. **symlink 形式的 agent 定义文件不被识别** [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) · P2 · 4 评论
   `~/.gemini/agents/` 下的符号链接 .md 文件无法注册为子代理，影响用 dotfiles 管理配置的用户。

9. **工具数 >128 时遇到 400 错误** [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) · P2 · 3 评论
   MCP + 自定义工具较多时触发 API 限制，代理未能智能裁剪工具范围，重度用户的扩展性瓶颈。

10. **模型频繁在随机位置创建临时脚本** [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) · P2 · 3 评论
    通过 shell 编辑时模型到处散落编辑脚本，提交前清理成本高。工作区卫生（workspace hygiene）类的高频抱怨。

---

## 四、重要 PR 进展（Top 10）

1. **修复 settings 占位符与 .env 的加载顺序竞态** [#29678](https://github.com/google-gemini/gemini-cli/pull/29678) · P2 · 新提交
   环境变量占位符在 `.env` 加载进 `process.env` 之前就被展开校验，导致配置校验失败。今日新开 PR。

2. **ask_user 对话后保留问题文本** [#29677](https://github.com/google-gemini/gemini-cli/pull/29677)
   回答 `ask_user` 后聊天历史只显示 `Retry Subagent → Yes` 之类的摘要，问题本身（往往包含全部解释）丢失。

3. **修复 IdeServer.stop() 在 MCP 会话打开时永不 resolve** [#29674](https://github.com/google-gemini/gemini-cli/pull/29674)
   VS Code companion 的 HTTP server 因 CLI 持有长连接而无法正常关闭，退出卡死问题。

4. **MCP OAuth：请求 offline access 并在刷新时保留 clientSecret** [#29578](https://github.com/google-gemini/gemini-cli/pull/29578)
   修复 Google Workspace 等 OAuth 端点拿不到 refresh token、后台刷新陷入死循环的问题，对远程 MCP 用户关键。

5. **报告 ripgrep 执行失败** [#29552](https://github.com/google-gemini/gemini-cli/pull/29552)
   捕获的 ripgrep 失败此前被静默吞掉，现返回 `GREP_EXECUTION_ERROR` 元数据供调度器记录，改善可观测性。

6. **read-many-files 模糊匹配导致上下文膨胀（已关闭）** [#29457](https://github.com/google-gemini/gemini-cli/pull/29457) · P1
   朴素的 `includes()` 子串匹配把二进制资源当作“显式请求”读入上下文，改用 glob 匹配修复。

7. **取消操作传播到 `!{...}` shell 注入（已关闭）** [#29459](https://github.com/google-gemini/gemini-cli/pull/29459) · P1
   自定义命令中的 shell 注入使用全新 AbortController，挂起命令永远无法被取消，且无独立预算。

8. **阻止不可信工作区抹掉自己的 settings.json（已关闭）** [#29466](https://github.com/google-gemini/gemini-cli/pull/29466) · P1
   未信任目录中运行 `gemini mcp add` 会静默销毁项目 settings.json 仅保留新写入的 key——数据丢失级 bug。

9. **默认阻止粘贴文本中的 @path 展开（已关闭）** [#29458](https://github.com/google-gemini/gemini-cli/pull/29458) · P1
   粘贴含 `@id_rsa` 的 shell 文本可能意外触发文件上传，安全修复将 `escapePastedAtSymbols` 默认设为 true。

10. **文件发现 ignore 过滤性能优化（#29077）** [#29582](https://github.com/google-gemini/gemini-cli/pull/29582) · P1
    引入目录级状态记忆化、通配符子树剪枝、symlink 缓存，解决大型仓库多秒级阻塞延迟。

其他值得留意：**mid-stream 重试退避支持 abort** [#29670](https://github.com/google-gemini/gemini-cli/pull/29670)、**truncateString 保留 Unicode 行终止符** [#29673](https://github.com/google-gemini/gemini-cli/pull/29673)、**切换 Google 账号时清除缓存凭证** [#29643](https://github.com/google-gemini/gemini-cli/pull/29643)。

---

## 五、功能需求趋势

| 方向 | 代表 Issue | 趋势解读 |
|---|---|---|
| **Subagent 架构深化** | #20195（本地子代理 Sprint 1）、#18287（并行子代理共享内存）、#22598（子代理轨迹共享） | 官方正按 sprint 推进子代理体系，从单兵走向并行协作 |
| **代码理解智能化（AST）** | #22745 / #22746 / #22747 | 系统评估 AST-aware 工具（ast-grep、tilth、glyph），目标降低 token 消耗 |
| **安全与沙箱** | #19873（OS 级沙箱）、#22672（阻止破坏性命令） | 在释放 bash 能力与安全护栏之间寻求平衡 |
| **上下文效率** | #19561（“Tactful Extraction”外科手术式读取）、#18836（文件化任务追踪替代 WriteToDo） | 应对 ~36.6k token/turn 的基线膨胀，社区对 token 经济性高度敏感 |
| **浏览器/IDE 集成** | #22267、#22232（浏览器会话接管）、#21924（终端 resize 无闪烁） | 稳定性成熟化需求为主 |
| **可观测性/评估** | #21763（bug report 缺子代理上下文）、#23166（内部 eval 稳定化） | 官方投入质量基建 |

---

## 六、开发者关注点

1. **子代理可信度是最大痛点**：挂起（#21409）、误报成功（#22323）、不主动调用（#21968）、bug report 缺上下文（#21763）——用户对 subagent 的信任正在被消耗，需要端到端的可观测与正确的终止语义。
2. **配置传递链路脆弱**：settings.json 覆盖被浏览器 agent 忽略（#22267）、.env 加载竞态（#29678）、symlink agent 不识别（#20079）——配置“写了但不生效”是高频挫败源。
3. **安全边界意识提升**：粘贴 @path 泄露、不可信目录数据丢失、破坏性 git 命令等一串 P1 修复，表明 CLI 在“能力开放”与“安全默认”间快速补课。
4. **Token 与上下文成本焦虑**：从二进制误读、大文件 firehose 到 WriteToDo 的 context rot，社区持续要求更精细的上下文管理。
5. **认证流程仍不稳定**：OAuth 死循环、URL 截断致 400、账号切换缓存残留——多条 P1/P2 修复集中爆发，建议用户保持 nightly 更新。

---
*数据来源：github.com/google-gemini/gemini-cli · 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-08 | 数据来源：github.com/github/copilot-cli**

---

## 一、今日速览

Copilot CLI 在过去 24 小时内密集发布了 **5 个版本**（v1.0.93-4 至 v1.0.94-3），重点方向是**企业策略管控增强**（托管策略、权限边界、沙箱全员开放）和**新模型接入**（Claude Haiku 5.5）。社区方面，沙箱（`/add-dir` 未同步白名单）、Assisted Permissions 回归、Windows 平台兼容性问题（winget 升级、MCP Entra 登录、macOS 本地网络权限）成为热议焦点。过去 24 小时无 PR 更新。

---

## 二、版本发布

| 版本 | 核心变化 |
|------|---------|
| **v1.0.94-3** | 🆕 模型选择器和 `--model` 补全中新增 **Claude Haiku 5.5**；修复：托管设置抑制 bypass-permission 启动标志时显示策略警告 |
| **v1.0.94-2** | 修复与改进（无详细说明） |
| **v1.0.94-1** | 修复：分屏视图协调期间，点击 Sessions 侧栏行可可靠切换会话 |
| **v1.0.94-0** | 托管设置要求更新版本时显示升级指引（不阻塞正常提示）；**托管策略可禁用 Assisted Permissions**，会话保持 Manual Approval 模式 |
| **v1.0.93-4** | **命令沙箱通过 `/sandbox` 和 `--sandbox` 向所有用户开放**；修复活动 turn 期间的命令处理（安全 /user 命令立即执行、不安全远程命令直接拒绝不弹窗、relay host 命令排队） |

> 注：v1.0.93（2026-10-07）还引入了企业级 `permissions.limitTo` 强制网络请求的托管域边界，体现本周企业管控主线。

---

## 三、社区热点 Issues（Top 10）

1. **[#5076](https://github.com/github/copilot-cli/issues/5076) `/add-dir` 未将目录加入沙箱白名单**
   🔥 今日新增。与 v1.0.93-4 沙箱全量开放直接相关——用户通过 `/add-dir` 添加目录后，沙箱内仍无法访问，是新功能的高优先级缺陷。

2. **[#5066](https://github.com/github/copilot-cli/issues/5066) Assisted Permissions 回归**
   用户反馈辅助权限模式开始要求过多本不需审批的命令（如简单 PowerShell 查找）。可能与本周策略/权限相关改动有关，需官方确认。

3. **[#5068](https://github.com/github/copilot-cli/issues/5068) Windows MCP Entra 登录失败（👍 8）**
   连接 Entra ID 保护的 MCP 服务器（Azure DevOps）时 scope 校验失败，阻碍企业用户使用托管 MCP 服务，关注度较高。

4. **[#5072](https://github.com/github/copilot-cli/issues/5072) macOS 26 缺少 NSLocalNetworkUsageDescription**
   Copilot.app 启动的所有进程（CLI、MCP、shell）被静默拒绝访问本地子网，影响本地开发场景，属打包配置遗漏。

5. **[#5074](https://github.com/github/copilot-cli/issues/5074) Windows Terminal 快捷键设置弹窗预选"Yes"**
   用户输入 prompt 后按 Enter 会**意外改写 Windows Terminal settings.json**，属于典型的破坏性 UX 缺陷。

6. **[#3978](https://github.com/github/copilot-cli/issues/3978) 切换 BYOK 后自动回退到原模型（👍 5）**
   AIC 用尽后切 BYOK，恢复会话时仍回退到原付费模型，直接影响计费信任，长期未解决。

7. **[#5075](https://github.com/github/copilot-cli/issues/5075) 用户中断（Ctrl+C/Esc）不触发 agentStop hook**
   Hook 消费者无法感知 agent 已空闲，影响自动化集成工作流。

8. **[#5069](https://github.com/github/copilot-cli/issues/5069) `tool_search_tool` 将“未注册完成”误报为“无匹配”**
   MCP 服务器注册未完成时的工具搜索返回干净的负结果，与真实无匹配无法区分，易导致 agent 误判。

9. **[#5063](https://github.com/github/copilot-cli/issues/5063) SDK 宿主的 `overridesBuiltInTool` 对 store_memory/vote_memory 不生效**
   运行时计划了覆盖但仍执行内置执行器，影响 SDK 扩展者对记忆工具的定制。

10. **[#3534](https://github.com/github/copilot-cli/issues/3534) WSL2 (ARM64) `/copy` 失败（👍 6，长期悬置）**
    自 5 月至今未修的 `clip.exe` 引号转义 bug，配合本周关闭的多个剪贴板相关 issue（#2285、#3172），显示剪贴板仍是 Windows 平台痛点。

---

## 四、重要 PR 进展

过去 24 小时内 **无 PR 更新**（共 0 条），略过本节。

---

## 五、功能需求趋势

从近期 Issues 提炼出以下方向：

- **沙箱与权限精细化**：沙箱全员开放后，白名单同步（#5076）、“仅本次批准、永不记忆”的审批粒度（#5062）成为核心诉求。
- **MCP 生态健壮性**：Entra 认证（#5068）、注册竞态（#5069、#4731）、工具覆盖（#5063）——MCP 相关 issue 占比持续走高。
- **上下文与成本优化**：`/compact` 时机优化利用缓存（#5064）、上下文重建加速/缓存（#5067）、usage_checkpoint 增加 token 计数（#5065）。
- **自动化集成（Hook/ACP）**：agentStop 缺失中断事件（#5075）、ACP 暴露 contextTier 会话配置（#4275）。
- **平台兼容性**：Windows（winget 升级 #5071、WSL2 #3534）与 macOS（本地网络权限 #5072）问题集中。

---

## 六、开发者关注点

1. **企业管控 vs 开发者体验的平衡**：本周版本密集增加托管策略能力（禁用 Assisted Permissions、域边界限制），但社区同步出现权限“过于保守”的回归反馈（#5066），策略默认值的合理性值得关注。
2. **沙箱是新功能也是新 bug 源**：`/sandbox` 全量开放首日即暴露白名单与 `/ide` 检测（#4909 kill EPERM 误判）问题，建议企业用户暂缓大规模启用。
3. **安装/升级路径碎片化**：winget 安装被 `/upgrade` 绕过（#5071）、插件安装偶发 os error 5（#4937），自更新机制与包管理器冲突需修复。
4. **交互细节的信任成本**：预选确认弹窗（#5074）、Ctrl+C 误关确认框（#4789）、Ctrl-D 丢弃表单输入（#4866）等键盘交互问题持续消耗用户信任。
5. **成本可观测性**：BYOK 回退（#3978）、token 用量暴露（#5065）、compact 缓存时机（#5064）表明重度用户对计费透明度要求越来越高。

---

*本报告基于 GitHub 公开数据自动生成，链接均可点击跳转。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-08

## 📰 今日速览

今日无新版本发布，社区讨论焦点仍集中在 **V2 新版布局强推引发的持续反弹**（相关 Issue 评论与点赞数居高不下）。功能方面，**TUI 国际化（i18n）基础设施**、**浏览器工具重构**、**Office 文件预览**等多个重量级 PR 活跃推进。V1 已转入维护分支，大量贡献者开始双线提交修复。

---

## 🔥 社区热点 Issues

### 1. 恢复旧版持久化左侧栏 UI 的呼声持续发酵
[#48882](https://github.com/anomalyco/opencode/issues/48882) · 27 评论 / 34 👍
侧栏重构（#20242）取代了经典双面板布局后引发强烈反弹，是目前社区热度最高的 Issue，社区对布局回归选项的需求非常明确。

### 2. Windows Winget 安装包归属与版本不一致
[#5121](https://github.com/anomalyco/opencode/issues/5121) · 21 评论 / 30 👍
文档缺失 Winget 安装方式，且第三方包版本与官方 Releases 存在差异，涉及分发渠道治理问题。

### 3. 请求增加"立即重试"按钮跳过限流倒计时
[#15988](https://github.com/anomalyco/opencode/issues/15988) · 20 评论 / 28 👍
限流倒计时不可跳过影响工作流连续性，是高频实用性痛点。

### 4. V2 TUI 间歇性 OOM：内存以 500MB/s-1GB/s 速度耗尽
[#51761](https://github.com/anomalyco/opencode/issues/51761) · 12 评论 · 已关闭
无 GC 锯齿、一分钟内吃满 24-28GB 被系统杀死，触发条件不明。已关闭但属严重稳定性问题。

### 5. 多项目/多 Agent 工作流（20+ 会话）被强制 V2 界面摧毁
[#48837](https://github.com/anomalyco/opencode/issues/48837) · 6 评论 / 19 👍
老 UI 切换入口被彻底移除，重度用户生产力受损，与 #48882、#49005、#49021 构成同一波抗议。

### 6. Nvidia NIM DeepSeek V4 推理模型 API 挂起
[#24264](https://github.com/anomalyco/opencode/issues/24264) · 12 评论 · 已关闭
NIM 严格要求 `chat_template_kwargs` 才能返回响应，涉及新模型兼容性。

### 7. OpenCode Go 配额 20 分钟耗尽：DeepSeek V4 Flash 缓存读取骤降为 0
[#42935](https://github.com/anomalyco/opencode/issues/42935) · 11 评论
疑似缓存/计费故障，用量从 11% 飙至 100%，涉及用户实际成本。

### 8. 历史消息消失
[#7380](https://github.com/anomalyco/opencode/issues/7380) · 12 评论 · 已关闭
长对话中旧消息丢失且无法通过 "Jump to" 找回，数据完整性问题备受关注。

### 9. 旧版/新版布局切换在 Desktop 与 Web UI 中永久化
[#38230](https://github.com/anomalyco/opencode/issues/38230) · 9 评论 / 8 👍 · 已关闭
请求将 v1.17.19 引入的布局切换开关永久保留，与今日布局争议直接相关。

### 10. TUI 首次渲染被 6.6MB Provider 目录阻塞
[#53679](https://github.com/anomalyco/opencode/issues/53679) · 3 评论 · 已关闭
启动时必须等完整 models.dev 目录（226 提供商 / 8405 模型）返回才能显示提示符，启动性能优化需求明确。

---

## 🔧 重要 PR 进展

### 1. 浏览器工具全面重构：离屏标签页、Locator 与真实等待
[#53861](https://github.com/anomalyco/opencode/pull/53861)
基于 96 个真实会话（7967 次浏览器子调用，29% 失败率）的数据驱动重构，解决隐藏标签不渲染导致 screenshot/click 失败等问题。

### 2. Office 文件预览（Word/Excel/PowerPoint）
[#53305](https://github.com/anomalyco/opencode/pull/53305) · 已合并
基于 BetterOffice 的 WASM 引擎在独立线程提供 `.docx`/`.xlsx`/`.pptx` 只读预览，作为内置 GUI 扩展。

### 3. TUI i18n 基础设施落地
[#52000](https://github.com/anomalyco/opencode/pull/52000)
为约 700-1000 条硬编码英文 UI 字符串建立多语言框架，配套中文翻译对齐 PR（[#51983](https://github.com/anomalyco/opencode/pull/51983)、[#52040](https://github.com/anomalyco/opencode/pull/52040)）同步推进。

### 4. 拒绝畸形工具参数并收敛未完成的调用
[#53685](https://github.com/anomalyco/opencode/pull/53685) · 已合并
解决 OpenAI 流式工具参数截断导致整个执行终止的问题（关联 #36766），部分预览保持可用，不影响合法调用。

### 5. 打包兼容 Provider 入口点
[#53854](https://github.com/anomalyco/opencode/pull/53854) · 已关闭
将 `anthropic-compatible` 等三个 Provider 注册进内置包映射，修复发布二进制无法解析的问题。

### 6. `/compact` 期间的提示队列与回合恢复修复
[#53863](https://github.com/anomalyco/opencode/pull/53863)
修复压缩压缩了未完成回合的时序缺陷，来自高产贡献者 @Nowaker。

### 7. 数学公式渲染修复：美元符号与标点相邻时误判
[#53860](https://github.com/anomalyco/opencode/pull/53860)
Agent 输出中 `($440\text{ ms}$…)` 这类紧贴标点的 LaTeX 此前渲染为原文，opencode-agent 自动提交。

### 8. Git diff 路径过长导致 ENAMETOOLONG
[#53855](https://github.com/anomalyco/opencode/pull/53855)
大量文件的回滚操作会超出 Windows 32,767 字符命令行限制，改用私有索引传递路径。

### 9. Linux 剪贴板 primary buffer 支持
[#32370](https://github.com/anomalyco/opencode/pull/32370)
新增 `linux_clipboard_selection` 配置，整合并超越多个历史 PR，Linux 老用户期待已久。

### 10. PWA 任务栏未读会话角标
[#53675](https://github.com/anomalyco/opencode/pull/53675)
通过 Badging API 为 Web PWA 增加未读会话计数，对齐桌面端需求（#43937）。

---

## 📈 功能需求趋势

1. **布局自主权**：旧版 UI 回归/切换选项是当前压倒性需求（#48882、#48958、#49005、#49021、#43818 相关系列），核心诉求是保留多项目/多会话高效工作流。
2. **国际化**：TUI i18n 从基础设施到中文翻译全链条推进，非英语用户群体快速增长。
3. **多格式文件支持**：Office 预览、C++ 模块高亮等表明文件体验是投入重点。
4. **成本透明**：请求采纳网关上报的真实成本而非客户端估算（#43818），Go 计费异常（#42935）加剧了这一诉求。
5. **新模型/Provider 适配**：DeepSeek V4、GitLab Duo、Bedrock 推理配置文件等兼容性问题持续出现。

## ⚠️ 开发者关注点

- **强制迁移引发信任问题**：`oldInterfaceSunset` 硬编码日期无逃生通道，被用户视为产品决策失误，建议官方尽快给出明确回应。
- **资源泄漏类 Bug 反复出现**：`/tmp` 中 `.so` 文件泄漏（#42700、#49283，2 小时堆积 17GB）与 TUI OOM（#51761）显示 V2 内存管理仍需加固。
- **启动性能**：6.6MB Provider 目录阻塞首屏（#53679）提示需懒加载/增量加载设计。
- **Windows 体验欠佳**：控制台窗口闪烁抢焦点（#52281）、命令行长度限制、Winget 渠道混乱，Windows 一等公民支持有待加强。
- **V1/V2 双分支维护负担**：多位贡献者需为同一修复提交两份 PR，分支策略的沟通成本开始显现。

---
*数据来源：GitHub anomalyco/opencode · 统计窗口：2026-10-08 前 24 小时*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-10-08

## 1. 今日速览

今日发布 **v0.25.0-nightly.20261007**，包含 Agent Host 替换修复。Managed Agent 架构（提案 #12380）持续推进，Kubernetes 工具运行时进入 Draft PR 阶段，多agent协作完成从 thread 到 session 的架构迁移。安全类问题受到关注，web-shell 审批卡文本未消毒、Auto 模式误拦截等新 Issue 引发热议。

---

## 2. 版本发布

### [v0.25.0-nightly.20261007.8003d28042](https://github.com/QwenLM/qwen-code/releases)
- **fix(agents)**: 替换选定的远程 Hosts 时不丢失 bindings（[PR #13430](https://github.com/QwenLM/qwen-code/pull/13430)，by @yiliang114）
- **test(core)**: 关闭 #126 相关测试工作

---

## 3. 社区热点 Issues

| # | Issue | 亮点 |
|---|-------|------|
| 1 | [#12380 Managed Agent 双路径架构提案](https://github.com/QwenLM/qwen-code/issues/12380) | 49 条评论，今日最热。定义分阶段 Managed Agent 架构：Session 持久所有权、Workspace 绑定、可恢复工具执行，是整个 serve 演进的顶层设计。 |
| 2 | [#13395 Kubernetes 工具运行时跟踪](https://github.com/QwenLM/qwen-code/issues/13395) | 提案 #12380 的关键落地项。Draft PR #13526 已合并 #13289，跨平台交付门禁推进中，今日更新进度。 |
| 3 | [#6710 ACP 恢复后取消语义混淆](https://github.com/QwenLM/qwen-code/issues/6710) | P1 级老 bug，2026-10-07 在最新 main 上复验**仍然可复现**，用真实 REST/SSE 请求 + 原生工具验证。 |
| 4 | [#13570 Auto 模式误拦截 amend 相关文本](https://github.com/QwenLM/qwen-code/issues/13570) | 新提交的安全/权限设计问题：仅提及 amend 短语的无害文本被拦截，优先于用户自定义规则且无逃生通道。7 条评论，社区共鸣强。 |
| 5 | [#13566 web-shell 审批卡文本未消毒](https://github.com/QwenLM/qwen-code/issues/13566) | 从已合并 PR #13549 遗留的安全审查发现：模型提供的同级文本未经消毒渲染，且注释夸大覆盖范围。 |
| 6 | [#13632 MCP 工具列表动态刷新](https://github.com/QwenLM/qwen-code/issues/13632) | 新 feature request：会话中监听 `notifications/tools/list_changed` 并重新拉取工具注册表，MCP 生态用户刚需。 |
| 7 | [#13633 用户取消 Turn 时触发 Hook](https://github.com/QwenLM/qwen-code/issues/13633) | Esc/Ctrl+C 取消后无 Hook 信号，Hook 消费者缺少 Turn 的确定终点，影响工作流集成。 |
| 8 | [#13078 每日依赖 CVE 审计失败](https://github.com/QwenLM/qwen-code/issues/13078) | 定时安全审计连续失败，可能存在新的高危漏洞，需关注供应链安全。 |
| 9 | [#13644 Agent Host 替换保留不兼容的 pinned provider](https://github.com/QwenLM/qwen-code/issues/13644) | 今日新建，与刚发布的 v0.25.0 Host 替换修复直接相关的后续缺陷。 |
| 10 | [#13513 系统设置路径环境变量无所有权检查](https://github.com/QwenLM/qwen-code/issues/13513) | `QWEN_CODE_SYSTEM_SETTINGS_PATH` 覆盖未校验文件所有权，存在配置注入风险。 |

> 其他值得留意：[#2596](https://github.com/QwenLM/qwen-code/issues/2596)（`</think>` 尾缀老 bug 复验仍未闭环）、[#10700](https://github.com/QwenLM/qwen-code/issues/10700)（孤立工具调用闭合标签泄漏）、[#10797](https://github.com/QwenLM/qwen-code/issues/10797)（内部脚手架标签泄漏到用户输出）——内容生成边界的“标签泄漏家族”仍是长期痛点。

---

## 4. 重要 PR 进展

| # | PR | 说明 |
|---|-----|------|
| 1 | [#13583 A2A 迁移至 Session](https://github.com/QwenLM/qwen-code/pull/13583) | 多agent协作后半程：移除 thread 后端，A2A 完全跑在 chat session 上。 |
| 2 | [#13599 按剩余余量收缩工具结果](https://github.com/QwenLM/qwen-code/pull/13599) | 接近自动压缩时，工具结果按实际剩余 headroom 动态收缩，替代静态预算。 |
| 3 | [#13652 工具结果全链路尺寸记账](https://github.com/QwenLM/qwen-code/pull/13652) | 从生产到注入全程数值化尺寸核算，与 #13599 组成 token 管理体系。 |
| 4 | [#13598 H6b/H6c 自动化运行时](https://github.com/QwenLM/qwen-code/pull/13598) | Managed Agent 扩展运行时（#12827 H 阶段）：持久化定义的创建/修订/退役。 |
| 5 | [#13550 H4b 子 Session 运行时](https://github.com/QwenLM/qwen-code/pull/13550) | 子 Session 运行时，Stacked on H4a，Managed Agent 分阶段交付的又一环。 |
| 6 | [#13442 PreToolUse updatedInput 全量重校验](https://github.com/QwenLM/qwen-code/pull/13442) | Hook 可整体替换工具输入（终端 + ACP），替换后完整重走校验链。 |
| 7 | [#13544 持久化 Workspace 角色模型](https://github.com/QwenLM/qwen-code/pull/13544) | Migration V51 将授权布尔值升级为 `role` 列，权限模型结构化。 |
| 8 | [#13219 重试循环加终态](https://github.com/QwenLM/qwen-code/pull/13219) | 消除 managed-agent 栈中无终态的异步重试循环和永久卡死的 projection。 |
| 9 | [#11854 混合 Code Mode](https://github.com/QwenLM/qwen-code/pull/11854) | 对齐 Codex 的 `tools.mode` 枚举（direct / code_mode / code_mode_only），暴露隔离的 `exec` JS 工具。 |
| 10 | [#12276 本地 Notes 压缩策略](https://github.com/QwenLM/qwen-code/pull/12276) | `/settings` 中可选 Summary 或 Notes+History 压缩策略，丰富上下文管理选项。 |

> 快讯：[#13643](https://github.com/QwenLM/qwen-code/pull/13643) Web Shell 侧栏置顶 Workspace、[#13651](https://github.com/QwenLM/qwen-code/pull/13651) GLM 视觉模型虚线 ID 元数据修复、[#13642](https://github.com/QwenLM/qwen-code/pull/13642) JDBC 终端历史有界清理，均为今日新开。

---

## 5. 功能需求趋势

1. **Managed Agent / 多 Agent 架构**（最热）：#12380 提案下衍生出 Session 管理、Host 替换、子 Session 运行时、自动化运行时、角色权限等十余个子项，是当前绝对主线。
2. **Kubernetes / 平台化分发**：#13395 工具运行时容器化交付，服务企业部署场景。
3. **上下文与 Token 管理**：动态 headroom 收缩（#13599/#13652）、notes 压缩策略（#12276）、只读探索限流（#13321）。
4. **MCP 与 Hooks 生态扩展**：工具列表动态刷新（#13632）、取消 Hook（#13633）、PreToolUse 输入替换（#13442）。
5. **Web Shell / 远程访问**：前台 Shell profile 准入（#13271）、审批输入预览（#13160）、置顶 Workspace。

---

## 6. 开发者关注点

- **安全边界与误拦截的平衡**：Auto 模式对“提及性文本”的过度拦截（#13570）、审批卡未消毒文本（#13566）、设置路径注入（#13513）——权限系统需更精细的语义区分与逃生通道。
- **取消/恢复语义长期未决**：#6710（P1）复验数月仍可复现，#13436 衍生的五项取消语义决策（#13502）被推迟，说明会话生命周期状态机复杂度高。
- **内部标签泄漏“家族 bug”**：#10692 / #10700 / #10791 / #10797 同根源，需要一次家族级边界决策（#10559），而非逐个修补。
- **审查债务规模化**：多个 PR 合并后遗留 deferred findings 需要专项 Issue 跟踪（#12612、#13638 含 40 条建议级积压），流程上存在修复滞后风险。
- **CI 稳定性**：每日 CVE 审计持续失败（#13078），依赖供应链安全需尽快恢复可观测性。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（Codewhale）社区动态日报 · 2026-10-08

## 一、今日速览

v0.10.1 今日正式发布，但 crates.io 发布遭遇 10 MiB tarball 上限，28 个 crate 中 26 个上传成功后因 HTTP 413 卡住，tui/cli 被搁浅（#6910）。同日，v0.10.2 集成分支（PR #6907）已从 v0.10.1 tag 切出，聚焦 /undo 与 /diff、Plan 模式交接、MCP CLI 等修复。社区层面，Windows 可靠性（shell 安全门、剪贴板、ExecutionPolicy）和会话状态一致性（/retry 只回滚 UI 层）成为反馈焦点。

## 二、版本发布

**v0.10.1**（2026-10-08）
- Codewhale 是 Shannon Labs 的公开产品，`codewhale` 命令、npm 包名与发布资产名保持小写技术标识不变
- 旧 npm 包 `deepseek-tui` 正式弃用，不再发布新版本；v0.8.x 时代的 `deepseek`/`d*` 命令用户需迁移
- ⚠️ 发布过程不完全顺利：crates.io 上传触发 10 MiB 限制（见 #6910），npm 端已记录为已发布版本（PR #6908）

## 三、社区热点 Issues

1. **#6910 [OPEN] Release blocker：crates.io 10 MiB tarball 上限导致发布中断** — @Hmbown
   今日最紧急问题。v0.10.1 发布上传 26/28 个 crate 后因 HTTP 413 失败，tui/cli 被搁浅，需要发布前体积守卫机制。
   链接：codewhale-hq/Codewhale Issue #6910

2. **#6909 [OPEN] 长后台任务阻塞回合，无操作员干预手段** — @Hmbown
   Ctrl+B 只覆盖前台 shell 等待；像 crates.io 发布这种 ~25 分钟的后台任务阻塞时 UI 完全卡住，需要新的逃生杆。
   链接：codewhale-hq/Codewhale Issue #6909

3. **#6050 [OPEN] 可插拔 Agent 记忆后端** — @idling11（评论最多，6 条）
   当前 `MemoryBackend` 仅有 Native/Off 两种硬编码实现，社区希望引入通用后端接口，以 causal-memory / mem0 作为参考实现。是架构级增强讨论。
   链接：codewhale-hq/Codewhale Issue #6050

4. **#6788 [CLOSED] /retry 与 /undo 只回滚 UI 显示层** — @w1w218
   被撤销的消息仍留在模型上下文中并随重试累积，落盘会话也未同步——严重的一致性缺陷，已修入 v0.10.2 计划。
   链接：codewhale-hq/Codewhale Issue #6788

5. **#6795 [CLOSED] 内联 provider 错误帧绕过所有重试预算** — @7jrxt42BxFZo4iAnN4CX
   OpenRouter 等 OpenAI 兼容源会在 HTTP 200 内嵌错误帧，首个帧即杀死整个回合。对不稳定网络用户影响大。
   链接：codewhale-hq/Codewhale Issue #6795

6. **#6828 [CLOSED] 0.10.0 MCP 服务器工具在会话中完全不可见** — @GustavoAriel23
   三个已启用的 MCP 服务器在 TUI 和 `codewhale exec` 中均无法通过 `tool_search` 暴露任何 `mcp_*` 工具，懒加载触发机制失效。
   链接：codewhale-hq/Codewhale Issue #6828

7. **#6871 [CLOSED] Windows 安全门误杀变量持有 PID 的 Stop-Process** — @jayanthvee
   为 #6827 加的安全门连正确的定向停止也拦截，与官方推荐的进程停止方式自相矛盾。
   链接：codewhale-hq/Codewhale Issue #6871

8. **#6800 [CLOSED] 卡死恢复仅作用于 UI，引擎仍持有 wedged 回合** — @7jrxt42BxFZo4iAnN4CX
   UI 与引擎状态不一致导致下一次发送被拒 60 秒、应用停止接受输入，是可靠性链条上的关键一环。
   链接：codewhale-hq/Codewhale Issue #6800

9. **#6700 [CLOSED] 流重试预算与传输超时应可配置化** — @7jrxt42BxFZo4iAnN4CX
   这些参数目前是编译期 `const`，代理网络用户只能改二进制。已关闭，v0.10.2 相关。
   链接：codewhale-hq/Codewhale Issue #6700

10. **#6843 [CLOSED] 确定性拒绝被误标为 "internal"** — @7jrxt42BxFZo4iAnN4CX
    `classify_error_message` 错误分类器漏掉 provider-4xx、budget 与裸 ERROR 词汇，导致本应中断的错误被渲染为警告继续执行。
    链接：codewhale-hq/Codewhale Issue #6843

## 四、重要 PR 进展

1. **#6907 [OPEN] v0.10.2 集成分支：undo/diff、Plan 交接、MCP CLI、provider 截断修复**
   从 v0.10.1 tag 切出，含 `/undo`（拒绝覆盖手工编辑）、`/diff`、Plan 模式 approve-and-switch 等。今日核心进展。
   链接：codewhale-hq/Codewhale PR #6907

2. **#6908 [OPEN] 记录 v0.10.1 为已发布版本**
   release.yml 自动同步，合并后使 main 的 `check:latest-release` 变绿。
   链接：codewhale-hq/Codewhale PR #6908

3. **#6906 [OPEN] Windows 环境块中显式告知 npm launcher 的 node.exe 父进程关系**
   #6827 的方案 A：提前告知 agent 不要按名杀 node.exe，与已上线的安全门（方案 B）互补。
   链接：codewhale-hq/Codewhale PR #6906

4. **#6887 [CLOSED] semantic_truncate 支持中日文（Han/kana）边界切分**
   中文/日文无空格导致截断回退到行首空格、丢弃后续全部内容，影响 zh-Hans 设置文案展示。
   链接：codewhale-hq/Codewhale PR #6887

5. **#6880 [CLOSED] 0.10.1：账户、bridge、头像与跨平台发布资格**
   可选账户失败不再阻塞本地 provider，登录保留 provider 配置。
   链接：codewhale-hq/Codewhale PR #6880

6. **#6886 [CLOSED] 同步 14 个语言包的 Operate 模式描述**
   Operate 模式英文描述重写后其余语言包未跟进，本次补齐。
   链接：codewhale-hq/Codewhale PR #6886

7. **#6888 [CLOSED] 恢复 pt-BR/es-419/ca 丢失的六个重音字符**
   避免翻译版本中出现 “versao” 这类无重音错误拼写。
   链接：codewhale-hq/Codewhale PR #6888

8. **#6885 / #6884 [CLOSED] /workspace 与路由保存回复的本地化补全**
   两处命令回复仍是英文硬编码，修复后 zh-Hans 体验一致。
   链接：codewhale-hq/Codewhale PR #6885 / PR #6884

9. **#6879 [CLOSED] dependabot：extension-host 与 computer-use 的 npm 依赖组更新**
   含 MCP TypeScript SDK 与 sharp 安全更新。
   链接：codewhale-hq/Codewhale PR #6879

10. **#6607 [CLOSED] 工具输出截断保留尾部而非头部**
    run_tests、git 系列、verifier 输出对 cargo 等工具而言“结尾才是关键”，统一改为保留尾部。
    链接：codewhale-hq/Codewhale PR #6607

## 五、功能需求趋势

- **子代理与多会话编排**：todo_write 任务依赖 + 兄弟代理互发消息（#6904）、后台会话统一终端看板（#6899）
- **远程与无头控制**：headless `codewhale rc serve` 远程控制与审批推送（#6903）、TypeScript Agent SDK（#6898）
- **可插拔记忆后端**：通用 MemoryBackend 接口 + mem0/causal-memory 参考实现（#6050），架构层呼声最高
- **工作流与 PR 协作**：工作流断点续跑（#6900）、PR CI 跟踪直至 green（#6901）
- **可配置可靠性**：重试预算、传输超时从编译期常量转为配置项（#6700）
- **技能系统增强**：skill frontmatter（context fork、allowed-tools 等）支持（#6897）

## 六、开发者关注点

1. **发布工程脆弱**：crates.io 10 MiB 上限、npm repository 大小写敏感、web 发布记录同步——打包/CI 环节连续踩坑（#6910、#6905、#6908）
2. **UI 与引擎状态不一致**：/retry、/undo、卡死恢复均存在“只改 UI 不改底层”的一类缺陷（#6788、#6800），是 v0.10.2 重点
3. **Windows 体验仍是重灾区**：安全门误杀（#6871）、ExecutionPolicy 阻断（#6745）、剪贴板多行粘贴行为异常（#6877）
4. **弱网/代理环境可靠性**：内联错误帧绕过重试（#6795）、错误分类不准（#6843）、DuckDuckGo 不可达时搜索链断裂（#6746）
5. **本地化质量债务**：多个命令回复未走 i18n、CJK 截断、重音丢失（#6884-#6888 系列），说明翻译基础设施需要系统性收口
6. **长任务可操作性缺失**：后台任务无中断/脱离手段（#6909），操作员体验是下一个迭代方向

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-10-08

## 1. 今日速览

Pi 发布 **v1.1.0**，核心亮点是支持 **OSC 7501 程序状态协议**，终端和 Agent 仪表盘可直接感知 Pi 的工作/阻塞/完成/失败状态。社区方面，OpenAI 直连的使用限额识别、OpenRouter 成本计算偏差等问题持续发酵；PR 方面多项 TUI/全屏模式修复落地，扩展生态（编辑器边框组件、配置 Schema 发布）成为活跃方向。

---

## 2. 版本发布

### v1.1.0
- **程序状态上报（OSC 7501）**：支持 OSC 7501 的终端和 Agent 仪表盘可实时显示 Pi 状态（工作中 / 等待对话框或登录 / 完成 / 失败）。详见 [终端配置文档](https://github.com/earendil-works/pi/blob/v1.1.0/packages/coding-agent/docs/terminal-setup.md)。
- 对应 Issue #10607 当天提出当天落地，社区响应速度可观。

---

## 3. 社区热点 Issues

1. **#10480 [OPEN] OpenAI 直连不识别手动用量重置**（16 评论）
   ChatGPT Pro 用户使用 banked reset 后 Pi 仍报限额耗尽，需 `/logout` + `/login` 绕过。OpenAI 订阅接入的老大难问题，讨论热烈。
   🔗 earendil-works/pi Issue #10480

2. **#9980 [OPEN] OpenRouter 热门开源模型成本计算偏差 2-3 倍**（5 评论，👍1）
   模型目录采用**最便宜 provider** 的定价计算成本，导致 GLM-5.3-Flash 等多 provider 开源模型成本报告严重失真。直接影响用户付费决策。
   🔗 earendil-works/pi Issue #9980

3. **#9884 [OPEN] 启动时默认模型偶发被 fallback 替换**（6 评论）
   扩展注册的网关模型作默认时，约 20% 启动会话落到内置 fallback 模型。启动时序竞态问题，涉及计费正确性。
   🔗 earendil-works/pi Issue #9884

4. **#10267 [OPEN] before_agent_start 注入的 prompt 在无用户输入的运行中被丢弃**（7 评论，👍2）
   后台通知、plan-mode 续跑、重试、恢复等场景下 extension 贡献的 systemPrompt 丢失并**重复计费整个 prompt**。对扩展开发者影响大。
   🔗 earendil-works/pi Issue #10267

5. **#9602 [OPEN] Compaction 溢出：早期被省略的 thinking 消息被计入**（7 评论）
   长会话 + 本地 llama.cpp 场景下，压缩时把此前未随请求发送的 thinking 消息也纳入，导致上下文溢出。
   🔗 earendil-works/pi Issue #9602

6. **#10642 [CLOSED] 嵌入式 SDK：长生命周期会话内存只增不减**（2 评论）
   `SessionManager` 全量持有 `fileEntries`，多会话常驻服务器数天后内存持续增长，resume 时还加载整个文件。嵌入式场景的硬伤。
   🔗 earendil-works/pi Issue #10642

7. **#5570 [OPEN] 支持在项目设置中配置 --no-skills / --skill**（5 评论，👍2）
   命令行已支持，社区希望下沉到项目级 `.pi/settings.json`。功能明确的合理需求。
   🔗 earendil-works/pi Issue #5570

8. **#10605 [CLOSED] ChatGPT/OpenAI OAuth 403**（3 评论）
   `subscription_sharing_user_not_eligible` 错误，涉及订阅共享权限判定，与 #10480 同属 OpenAI 接入痛点。
   🔗 earendil-works/pi Issue #10605

9. **#10640 [CLOSED] 全屏 TUI 中键点击被吞掉**（2 评论）
   `TuiAltScreen` 消费所有 SGR 鼠标事件且无 fallback，中键粘贴和旧版覆盖组件均受影响。全屏模式默认化后的典型回归。
   🔗 earendil-works/pi Issue #10640

10. **#10563 [CLOSED] MCP OAuth：Google 服务器拿不到 refresh token**（4 评论）
    需要 `access_type=offline` 参数，社区请求允许在 `mcp.json` 中自定义授权参数。Google MCP 生态集成的关键堵点。
    🔗 earendil-works/pi Issue #10563

---

## 4. 重要 PR 进展

1. **#10646 fix(coding-agent): 先注册 MCP 工具再枚举资源** [CLOSED]
   后台发现资源计数，忽略过期的刷新结果。修复 #10526。
   🔗 PR #10646

2. **#10590 [CLOSED] 向扩展宿主化提供 @earendil-works/pi-mcp**
   将 pi-mcp 加入 VIRTUAL_MODULES + HOST_PROVIDED_EXTENSION_PACKAGES，解决扩展 import 解析失败。扩展生态基础设施的重要补齐。
   🔗 PR #10590

3. **#8307 feat(coding-agent): 启用实验性缓存友好压缩** [CLOSED]
   压缩请求追加到主会话复用缓存，替代昂贵的独立请求（仅 auto compaction）。显著降成本。
   🔗 PR #8307

4. **#10521 fix(ai): 为 NVIDIA NIM 模型内联 $ref 工具 Schema** [OPEN]
   `nemotron-3.5-super-vl-preview` 等模型返回仅含本地 `$ref` 的 JSON 字符串导致校验失败，内联 `$defs` 解决。
   🔗 PR #10521

5. **#10600 fix(ai): agent 级重试遵守 Retry-After** [OPEN]
   修复 429 后仅 2 秒即重试、早于服务器要求的间隔问题（#10601 / #9595）。
   🔗 PR #10600

6. **#10593 fix(ai): Meta OAuth 请求加 Muse Code User-Agent** [CLOSED]
   仅改 UA 即从 503 变 200，有趣的实战发现。
   🔗 PR #10593

7. **#10614 feat(coding-agent): footer 紧凑行与隐藏模型后缀选项** [OPEN]
   细粒度 footer 定制，减少扩展重造内置组件的需要。
   🔗 PR #10614

8. **#10602 feat(coding-agent): 编辑器边框组件扩展点** [OPEN]
   允许扩展在编辑器边框行（内置 working indicator 所在处）放置配额计数、预算燃烧等常驻指示器。
   🔗 PR #10602

9. **#9880 feat(coding-agent): 发布配置 JSON Schema** [OPEN]
   从 TypeBox 契约生成 models/settings/keybindings/themes 的 Schema，利好 IDE 补全与校验。
   🔗 PR #9880

10. **#10596 fix(tui): 无背景时停止用空格填充行尾** [CLOSED]
    修复复制终端输出时每行带尾随空格的问题——小改动大体验。
    🔗 PR #10596

（另有多项全屏 TUI 修复当天合并：#10617/#10619 选区清理、#10615 读分页参数归一化。）

---

## 5. 功能需求趋势

- **终端互操作标准化**：OSC 7501（v1.1.0 落地）、OSC 8 超链接识别（#10573）、xterm.js 兼容（#10393）——社区希望 Pi 与现代终端深度协同。
- **扩展/嵌入式生态**：pi-mcp 宿主化、编辑器边框组件、footer 细粒度定制、pi.namespace 命名空间（#8834）——SDK 化和扩展 API 是最活跃方向。
- **成本可见性与控制**：OpenRouter 定价偏差、缓存友好压缩、Retry-After 遵守、重复计费——用户对 token 成本精度要求日益提高。
- **新模型/Provider 支持**：Claude Haiku 5.5 缺失（#10630）、NVIDIA NIM、TypeSafe、Google FinishReason 新枚举——多 provider 兼容性持续承压。
- **会话可维护性**：会话文件压缩存储（#10629）、长会话内存治理（#10642）。

## 6. 开发者关注点

- **OAuth/订阅接入脆弱**：OpenAI 限额重置识别、403 订阅共享、Google MCP 无 refresh token——OAuth 流是 bug 高发区，且往往只能靠 UA/参数级别 workaround。
- **计费正确性**：成本计算 2-3x 偏差、默认模型被替换、prompt 重复计费，直接影响付费用户信任。
- **全屏 TUI 回归**：1.0.0 全屏默认化后，鼠标事件吞没、选区残留、复制行为等交互问题集中暴露，团队修复节奏快但问题面广。
- **扩展开发者体验**：VIRTUAL_MODULES 缺失导致 import 失败、footer/编辑器 UI 定制需 hack——扩展 API 的覆盖面仍需系统性补齐。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报 · 2026-10-08

## 📌 今日速览

oh-my-pi 过去 24 小时内密集发布了 **v18.8.0 – v18.8.4 五个版本**，重点覆盖 Anthropic 请求体积限制修复、OAuth 账号池会话限制和长时间会话性能优化。社区方面，Anthropic 新模型（Haiku 5.5 / Sonnet 5.5 缓存降价）适配问题和 robomp 子项目稳定性成为讨论焦点，同时多位核心贡献者（@will-bogusz 等）提交了一批 auth/账号池相关的高优先级修复 PR。

---

## 🚀 版本发布（24小时内 5 个版本）

- **[v18.8.4](https://github.com/can1357/oh-my-pi/releases)**：⚠️ Breaking Change — `AuthBrokerClient.notifyUsageStale` 与 `UsageLedgerStore.invalidateUsageCache` 新增可选的前置 `provider` 参数。
- **[v18.8.3](https://github.com/can1357/oh-my-pi/releases)**：新增 `OAuthRefreshUnavailableError` 可重试错误；OAuth 凭据瞬时刷新失败时 `keys.get` 返回 `undefined`，保证可用性探测继续尝试下一个凭据。
- **[v18.8.2](https://github.com/can1357/oh-my-pi/releases)**：修复 Anthropic 官方端点内联截图字节超限问题，引入 provider 图像字节预算（[#14453](https://github.com/can1357/oh-my-pi/issues/14453)）。
- **[v18.8.1](https://github.com/can1357/oh-my-pi/releases)**：新增公开 API `validateAgentToolArguments()`，统一 agent / coding-agent 的宽松感知工具参数校验；为 OAuth 账号池增加会话限制。
- **[v18.8.0](https://github.com/can1357/oh-my-pi/releases)**：优化长时间会话中工具输出裁剪与遥测消息捕获的性能；⚠️ 环境变量 API Key 辅助函数签名变更。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#12917](https://github.com/can1357/oh-my-pi/issues/12917) Advisor 行为是否发生重大变化？**（11 评论）
   Advisor 更新后变得过于激进，“过度监管”工作流甚至干扰正常任务，社区对 Advisor 的角色边界讨论热烈，与 #10600、#9074 共同构成 Advisor 可配置性诉求主线。

2. **[#6458](https://github.com/can1357/oh-my-pi/issues/6458) 请求全局命令热重载配置与插件**（9 评论，👍2）
   多会话场景下（10+ 并行会话）配置/插件变更无法生效，需逐个重启，是重度用户的核心痛点。

3. **[#4614](https://github.com/can1357/oh-my-pi/issues/4614) 会话级选择 ChatGPT 活跃账号**（8 评论）
   多账号登录下无法手动切换当前会话使用的账号，与今日多个账号池修复 PR 高度相关。

4. **[#14158](https://github.com/can1357/oh-my-pi/issues/14158) Codex steering 报 native turn lane 错误**（8 评论）
   OpenAI Codex 原生 turn 进行中发送 steering 消息触发 WebSocket 状态错误，影响中断/引导工作流。

5. **[#7630](https://github.com/can1357/oh-my-pi/issues/7630) 命名 modelRoles 预设 + `/models preset` 切换**（8 评论，👍5）
   一键在 Anthropic / OpenAI 阵营整套模型角色间切换，是本次列表中👍最高的功能请求。

6. **[#10549](https://github.com/can1357/oh-my-pi/issues/10549) macOS 上 shell 子系统卡死后 tokio 线程 1100%+ CPU 空转**（7 评论）
   Apple Silicon 平台严重资源问题，18 个 worker 线程陷入 fcntl/close 热循环长达 40 分钟。

7. **[#14854](https://github.com/can1357/oh-my-pi/issues/14854)（已关闭）claude-haiku-5-5 推理档位不可用，抛 AmbiguousOverlapError**（7 评论）
   昨日刚发布的 Haiku 5.5 与 anthropic.kdl 既有 budget 规则冲突，快速修复体现维护者响应速度。

8. **[#14773](https://github.com/can1357/oh-my-pi/issues/14773) Goal 启动静默 fork 会话，无提示且无法回溯**（7 评论）
   静默复制会话文件并切换，用户失去原会话 lineage，属 UX 层面的数据可追溯性问题。

9. **[#14453](https://github.com/can1357/oh-my-pi/issues/14453)（已关闭）截图超 Anthropic 32MB 限制导致 413 死循环**（6 评论）
   62 张 base64 截图撑爆请求体，子代理还会重发——已在 v18.8.2 修复，教科书式的“Issue → 当日 Release”闭环。

10. **[#14882](https://github.com/can1357/oh-my-pi/issues/14882) OpenRouter 已退役模型永不过期清理**（3 评论）
    `/models refresh` 后退役模型仍可选、请求时才报 400，目录快照增量同步机制存在缺口。

---

## 🔧 重要 PR 进展（Top 10）

1. **[#14751](https://github.com/can1357/oh-my-pi/pull/14751) [P0] 修复工具结果裁剪重写整个 Anthropic 缓存** — 一次裁剪触发 338k token 缓存重写，现在 cache-lookback 位置也计入热缓存守卫。
2. **[#14757](https://github.com/can1357/oh-my-pi/pull/14757) [P0] 用量受限的主模型冷却至其上报的重置时间** — 避免回退链每 30 分钟弹回主模型浪费一次请求。
3. **[#14749](https://github.com/can1357/oh-my-pi/pull/14749) [P0] 唤醒的子代理保持在持有其 prompt cache 的账号上** — 多账号场景下避免子代理复活后 prompt cache 全部作废。
4. **[#14900](https://github.com/can1357/oh-my-pi/pull/14900) [P0] 修复 `/usage` 将所有 Antigravity 账号标记为“本会话使用”** — 共享 Google project id 时改用 email 判定。
5. **[#14899](https://github.com/can1357/oh-my-pi/pull/14899) [P0] `omp -p` 退出前向 auth broker 上报用量** — 短命进程不再因 10 秒批量窗口错过上报。
6. **[#14912](https://github.com/can1357/oh-my-pi/pull/14912) 修复编译版二进制中 package.json `main`/`exports` 解析** — 直击今日 Issue [#14911](https://github.com/can1357/oh-my-pi/issues/14911)，修复 napi-rs 类原生包加载。
7. **[#14387](https://github.com/can1357/oh-my-pi/pull/14387) [P1] collab relay socket 静默掉线后自动重连** — 网络抖动后机器不再从主机列表消失。
8. **[#14659](https://github.com/can1357/oh-my-pi/pull/14659) [P1] 内置 jq 迁移至 jaq 3.1.1 并补齐 jq 行为差距** — `.a.b` 空对象等 agent 高频路径从报错改为返回 `null`。
9. **[#14169](https://github.com/can1357/oh-my-pi/pull/14169) [P2] 修复工具调用以纯文本形式输出导致会话停摆** — 检测文本化的 tool call 并要求模型重新正确发出。
10. **[#14908](https://github.com/can1357/oh-my-pi/pull/14908) [P2] 新增 `worktree.onStart` / `worktree.onExit` 设置** — 会话可自动创建/清理独立 git worktree，向任务隔离方向演进。

---

## 📈 功能需求趋势

- **Advisor 可配置性**（#12917 / #10600 / #9074）：社区一致呼吁 Advisor 严重度阈值（`advisor.steerLevel`）与自主会话中的及时介入机制，是当前最集中的诉求方向。
- **多账号 / 账号池管理**（#4614 及 5 个 P0 PR）：OAuth 账号池的配额预留、缓存亲和、用量上报成为工程重心，多供应商账号调度明显在快速成熟。
- **模型角色预设与切换**（#7633）：`modelRoles` 命名预设反映用户希望低成本在 provider 阵营间整体迁移。
- **新模型快速适配**（#14854 / #14902 / #14830）：Haiku 5.5 推理档位、Sonnet 5.5 缓存降价（$0.20→$0.10）等上游变化持续考验 catalog 的响应速度。
- **会话/进程生命周期健壮性**（#6458 / #8798 / #10549）：热重载、卡死恢复、孤儿进程清理等长会话运维能力需求旺盛。
- **SDK 可嵌入性**（#12991 / #14841）：embedder 需要消息持久化回执、caller metadata 等更完整的事件契约。

---

## ⚠️ 开发者关注点

1. **robomp 子项目稳定性集中爆发**：单日出现 3 个相关 Issue（#14857 调度循环崩溃后 `/readyz` 仍报健康、#14859 失败的 PR review 被标记为已 review、#14853 nohup 后台任务被杀且子进程孤儿化），自动化代理编排的容错链路值得警惕。
2. **上游凭据/账号变更引发的持久化污染**：#14852 中切换凭据后加密 reasoning 重放导致 400 死循环，跨账号的会话状态隔离是隐患。
3. **编译版二进制的模块解析差异**：#14911/#14912 揭示 compiled binary 与 `BUN_BE_BUN=1` 环境下扩展加载行为不一致，扩展生态兼容性需要系统性回归。
4. **成本统计准确性**：#14902（缓存读价未更新）与 #14887（eval `completion()` 用量不入账）叠加，意味着当前成本显示可能系统性偏高，重度用户建议关注账单核对。
5. **Breaking Change 节奏**：v18.8.x 连续两个 minor 版本含签名级 Breaking Change，二次开发/扩展作者升级前应仔细核对 release notes。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*