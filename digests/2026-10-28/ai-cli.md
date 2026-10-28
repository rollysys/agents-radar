# AI CLI 工具社区动态日报 2026-10-28

> 生成时间: 2026-10-28 04:40 UTC | 覆盖工具: 11 个

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
**数据日期：2026-10-28**

---

## 1. 生态全景

AI CLI 工具已进入“深水区竞争”阶段：头部产品（Claude Code、Codex、Gemini CLI）从单机对话工具演进为覆盖多 agent 编排、桌面端、IDE 集成、企业认证的完整平台。工程重心从“功能新增”转向**可靠性与成本工程**——压缩/上下文管理、缓存前缀复用、失控循环熔断成为各社区最高频的议题。同时，**Windows/WSL 平台质量**是全行业的共同短板，几乎所有主流工具的 Top Issue 中 Windows 相关问题占比显著。开源侧（OpenCode、Qwen Code、Pi 系、DeepSeek 系）则以更快的 PR 节奏和社区贡献机制形成差异化活力。

---

## 2. 各工具活跃度对比

| 工具 | Issues 热度（今日焦点） | PR 动态 | Release | 活跃度评级 |
|---|---|---|---|---|
| **Claude Code** | 10+ 热点，含 967👍 的 #18435 | 3 条（低） | v2.1.312 | 高（Issue 侧爆发，Windows 回归集中） |
| **OpenAI Codex** | Top10 含 4 个 Windows 类 | 10+ 条，密集 | rust-v0.165.0 + 3 个 alpha | 很高（工程侧最活跃） |
| **Gemini CLI** | 403/Sudagent 可靠性为主 | 10+ 条，社区贡献多 | v0.66.0 + preview/nightly | 高 |
| **Copilot CLI** | 回归 bug 为主（OAuth、WSL2） | **0 条** | v1.0.105×3 | 中低（Issue 倒挂，工程响应慢） |
| **OpenCode** | 31 评论/42👍 UI 反弹为最大热点 | 10+ 条 | v2.2.0（桌面插件系统） | 很高 |
| **Qwen Code** | Managed Agent 体系推进 | 10+ 条（大型架构 PR） | v0.26.2（含 Breaking Change）+ preview | 很高（架构投入最重） |
| **DeepSeek TUI** | 0.10.3 收尾，本地化加速 | 10+ 条 | 无（冲刺中） | 中高 |
| **Pi** | **87 条 Issue / 24 条 PR 更新** | 10+ 条，多个 p0 修复 | 无 | 很高（单日动态最密集） |
| **oh-my-pi** | P1 级 $500+ 失控损失案例 | 10+ 条 | v18.13.2 | 高 |
| **DeepSeek Harness** | 无 Issue/PR 动态 | — | 2 个版本 | 低 |
| **Kimi Code CLI** | 无活动 | — | — | 静默 |

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **上下文压缩与成本控制** | Claude Code、Pi、oh-my-pi、Codex、DeepSeek TUI | 压缩请求复用 token 前缀（Pi #11500）、headless 消耗 1.8×（Claude Code #97074）、缓存感知驱逐（DeepSeek TUI #6969）、图片 base64 重复膨胀（Codex #28316）、过早 auto-compact（Claude Code #100277） |
| **多 Agent / 子代理可靠性** | Gemini CLI、Qwen Code、Codex、oh-my-pi、Claude Code | 后台任务完成后不唤醒调用方（Codex #15723、Gemini #32188、Qwen #15748）、子代理挂起/状态误报（Gemini #22323/#21409）、失控循环熔断（oh-my-pi #17205 烧 $500+） |
| **Windows/WSL 平台质量** | Claude Code、Codex、Copilot CLI、OpenCode、Gemini CLI | Bash 阻塞 10–17 分钟、WSL2 CPU 215% 空转、黑窗闪烁、CRLF diff 异常——Codex Top30 中约 1/3 带 windows 标签 |
| **MCP / 扩展生态治理** | Gemini CLI、OpenCode、Copilot CLI、DeepSeek Harness | OAuth 回归（Copilot #4994）、工具发现分页丢失（Gemini #29843）、>128 工具 400 错误（Gemini #24246）、插件热更新回滚 |
| **会话持久化与可恢复性** | Claude Code、Copilot CLI、Pi、OpenCode、Codex | 压缩后历史不可见（Claude Code #27242）、归档会话恢复（Copilot #3518）、ENOSPC 导致数据损坏（Pi #11460/#11486）、undo 损坏会话状态（OpenCode #51360） |
| **静默失败与可观测性** | Pi、DeepSeek TUI、Codex、Copilot CLI | 无日志冻结、上游错误被掩蔽为 400、OTel 集成（Codex #57638）、`doctor` 诊断增强 |

---

## 4. 差异化定位分析

| 工具 | 定位 | 技术路线亮点 | 目标用户 |
|---|---|---|---|
| **Claude Code** | 商业闭环标杆 | 企业网关 OIDC、Desktop+CLI+IDE 全端，但插件/PR 开放度低 | 企业 + 重度付费开发者 |
| **Codex** | 企业工程化 | 多云 provider（GCP Vertex、Bedrock）、OTel 可观测性、exec-server 架构 | 企业 CI/CD + 多云部署 |
| **Gemini CLI** | 开源快速迭代 | Termux/移动端支持、扩展 validate 治理、AST 工具探索 | 开源个人开发者 |
| **Copilot CLI** | GitHub 生态整合 | org 级 agent、BYOK、企业 MCP 策略 | GitHub 企业存量用户（但工程响应明显滞后） |
| **OpenCode** | 开源全栈替代 | 桌面 GUI 插件系统、定时 Prompt、Claude 登录复用 provider | 从商业工具迁移的性价比用户 |
| **Qwen Code** | 架构驱动 | Managed Agent 分阶段交付 + 故障门体系、autofix 轮次预算护栏 | 平台构建者/深度二次开发 |
| **Pi / oh-my-pi** | 极客内核型 | 多 provider 长尾适配、RPC 宿主集成、TUI 深度打磨 | 高级用户、自定义前端开发者 |
| **DeepSeek 系（TUI/Harness）** | 本地化 + 中文社区 | 15 语言本地化、Ollama 本地模型、插件热更新回滚 | 中文用户、本地模型用户 |

---

## 5. 社区热度与成熟度

- **成熟稳定型**：Claude Code（Issue 规模最大但 PR 通道窄，功能请求常年积压如 #18435 近一年未落地）；Copilot CLI 出现"Issue 活跃、PR 停滞"的倒挂信号，回归修复速度（1.0.47 剪贴板问题至今未修）值得警惕。
- **快速迭代型**：Codex（稳定版+3 alpha 并行）、Gemini CLI（nightly 通道）、Qwen Code（Stage F 故障门集中关闭，架构收敛中）。
- **社区驱动型**：Pi（单日 87 Issue + 24 PR 更新，p0 当天进入修复流程，响应速度全场最佳）；OpenCode（外部贡献涌入，但也出现 42👍 的 UI 大规模反弹，反映改版管理风险）。
- **早期/收缩信号**：DeepSeek Harness 仅 Release 无社区互动；Kimi Code CLI 完全静默。

---

## 6. 值得关注的趋势信号

1. **成本工程成为核心竞争力**：从 headless 额度异常、缓存 miss、压缩 prefill 全额付费到 $500+ 失控循环，“token 经济学”已从优化项上升为信任问题。**建议**：自动化流水线务必设置费用上限与循环熔断，勿盲目信任 subagent 返回值（Gemini #22323“假成功”教训）。
2. **压缩/上下文管理进入深水区**：各家均在重做压缩机制（前缀保持、缓存感知、空闲压缩），但可靠性普遍存疑。**建议**：长上下文工作流主动监控 compact 触发，保留 transcript 原始数据备份。
3. **Windows 是全行业质量洼地**：跨 5+ 工具的系统性问题说明 Windows 并非边缘需求。**建议**：Windows/WSL 重度用户本周对各工具升级均应谨慎，优先关注 workaround（如 Claude Code 的 `bashEditDiffEnabled: false`）。
4. **事件驱动异步编排是下一个标配**：Codex、Gemini、Qwen 三家同时在解决“后台任务完成唤醒 agent”，轮询式等待将被淘汰。
5. **安全边界粒度待细化**：hook 超时绕过（Copilot #2893）、子代理工具权限扩大、计划-执行偏差检测（Qwen #15760）表明 **agent 行为可审计性**将成为企业采购的关键评估维度。
6. **开源替代加速分流**：OpenCode（桌面插件 + Claude 登录复用）、Pi 系（provider 长尾适配）正在为商业工具用户提供低成本迁移路径，商业产品的护城河将更多依赖企业集成与稳定性，而非功能清单。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（截至 2026-10-28）

## 一、热门 Skills 排行

> 注：本期 PR 数据中评论数缺失，以下基于活跃度、更新频率及关联 Issue 讨论度综合排序。

| # | Skill / PR | 功能与热点 | 状态 |
|---|---|---|---|
| 1 | **mcp-builder 修复**（PR [#1742](https://github.com/anthropics/skills/pull/1742)） | 适配 mcp>=2 的 `streamable_http_client` 重命名与自定义 header 配置。mcp-builder 是生态核心工具，配套 Issue [#1390](https://github.com/anthropics/skills/issues/1390)（评估脚本对真实 MCP 服务器全零分）讨论热烈 | OPEN |
| 2 | **skill-creator 修复**（PR [#1298](https://github.com/anthropics/skills/pull/1298)） | 修复 trigger 评估误报：Windows 下 select() 失败、并发探测竞争。关联 Issue [#556](https://github.com/anthropics/skills/issues/556)（`claude -p` 触发率 0%）有 13 条评论，是 skill 评估链路最受关注的问题 | OPEN |
| 3 | **notion-spec-to-implementation**（PR [#1245](https://github.com/anthropics/skills/pull/1245)） | 将产品/技术 Spec 转为 Notion 任务清单，含验收标准与进度追踪，覆盖 6-10 月长周期讨论 | OPEN |
| 4 | **webapp-testing 安全加固**（PR [#1980](https://github.com/anthropics/skills/pull/1980)） | 消除 `shell=True` 命令注入风险（CWE-78），10 月仍活跃更新 | OPEN |
| 5 | **pyxel 复古游戏开发**（PR [#525](https://github.com/anthropics/skills/pull/525)） | Pyxel 作者本人提交，覆盖实现、无头运行、帧检查；存活 8 个月仍被维护 | OPEN |
| 6 | **md2video-audio**（PR [#1703](https://github.com/anthropics/skills/pull/1703)） | Markdown → Marp 幻灯 → 带 AI 配音的 MP4，零成本视频生成 | OPEN |
| 7 | **scnet-hpc**（PR [#1615](https://github.com/anthropics/skills/pull/1615)） | 面向 HPC 集群的 SSH + Slurm 工作流操作，体现科学计算场景需求 | OPEN |
| 8 | **docx 生态修复群**（PR [#1792](https://github.com/anthropics/skills/pull/1792) 等） | LibreOffice 超时误报成功、孤儿批注检测、merge_runs 破坏命名空间（Issue [#2018](https://github.com/anthropics/skills/issues/2018)），docx 是问题最密集的官方 skill | OPEN |

## 二、社区需求趋势

1. **Skill 信任与安全治理**：Issue [#492](https://github.com/anthropics/skills/issues/492)（46 条评论，热度第一）——社区 skill 冒用 `anthropic/` 命名空间构成信任边界漏洞，急需签名/命名空间隔离机制。
2. **组织级分发与协作**：[#228](https://github.com/anthropics/skills/issues/228)（17 条评论）——组织内共享 skill 库，替代 Slack 手传 `.skill` 文件的原始流程。
3. **可靠触发与评估工具链**：[#556](https://github.com/anthropics/skills/issues/556)——skill 无法被 `claude -p` 触发，评估可信度是所有贡献者的前置痛点。
4. **Agent 记忆与推理质量**：compact-memory 紧凑记忆符号（[#1329](https://github.com/anthropics/skills/issues/1329)）、三段式推理质量门（[#1385](https://github.com/anthropics/skills/issues/1385)）。
5. **上下文效率**：claude-api skill 一次注入 156k token 打爆上下文（[#1487](https://github.com/anthropics/skills/issues/1487)），skill 瘦身需求强烈。

## 三、高潜力待合并 Skills

- **[#1742](https://github.com/anthropics/skills/pull/1742)** mcp-builder 兼容修复 — 关联官方 Issue，优先级高
- **[#1298](https://github.com/anthropics/skills/pull/1298) / [#1997](https://github.com/anthropics/skills/pull/1997)** skill-creator 评估与 YAML 解析修复 — 补齐核心工具链
- **[#525](https://github.com/anthropics/skills/pull/525)** pyxel — 上游作者维护，长期存活信号积极
- **[#1980](https://github.com/anthropics/skills/pull/1980)** webapp-testing 安全修复 — 官方对安全 PR 响应通常较快
- **[#538](https://github.com/anthropics/skills/pull/538)** pdf 大小写引用修复 — 小而明确的 bug fix

## 四、生态洞察

**社区最集中的诉求：从“能用的 skill”走向“可信的 skill”——即安全命名空间治理、可靠触发评估与轻量上下文注入。**

---

# Claude Code 社区动态日报 — 2026-10-28

## 📌 今日速览

今日发布 **v2.1.312**，新增企业网关 OIDC 用户标识配置与全屏模式“点击发送”队列消息的交互优化。社区方面，Windows 平台问题集中爆发：Bash 工具调用在 2.1.309 后出现 10–17 分钟的启动阻塞，桌面端排队消息无法送达成为今日新热点。

---

## 🚀 版本发布

### v2.1.312
- **企业认证增强**：Claude Apps 网关新增 `oidc.user_id_claim` 配置，支持通过 `sub` 以外的 id_token claim（如 Microsoft Entra ID 的 `oid`）识别用户身份。
- **交互优化**：全屏模式下，点击排队消息下方的 "to send now" 提示即可立即发送，与对应快捷键行为一致。

---

## 🔥 社区热点 Issues

**1. [#18435] Claude Desktop 多账号管理与快速切换**（👍 967 | 💬 224）
社区呼声最高的功能请求，运行近一年仍未落地。用户强烈需要在 Desktop 应用内管理多个 Claude 账号并一键切换 profile，反映出自雇开发者/多租户场景的真实痛点。
[链接](https://github.com/anthropics/claude-code/issues/18435)

**2. [#97074] Headless 模式消耗 5 小时窗口额度约为交互模式的 1.8 倍**（👍 92 | 💬 54）
有稳定复现的高价值 bug：`claude -p`（`sdk-cli` 入口）在相同工作负载下，每 token 消耗的额度显著高于交互式 CLI。直接影响重度自动化/SDK 用户的经济性，值得工程团队优先排查。
[链接](https://github.com/anthropics/claude-code/issues/97074)

**3. [#33932] VS Code 插件需要类似 GitHub Copilot Edits Review 的 Diff 审查 UI**（👍 219 | 💬 47）
IDE 集成方向的高票需求：Claude Code 修改文件后缺少可视化的 diff 逐块审阅/接受/拒绝流程，用户普遍参照 Copilot Edits 的体验提出诉求。
[链接](https://github.com/anthropics/claude-code/issues/33932)

**4. [#27242] 压缩/计划模式/分支切换后无 UI 可回看历史上下文**（👍 91 | 💬 20）
数据完整保存在 `transcript.jsonl` 中，但 TUI 没有任何可用路径访问被压缩或清除的对话——Ctrl+O 等机制均失效。属于“数据在但看不见”的可恢复性缺陷。
[链接](https://github.com/anthropics/claude-code/issues/27242)

**5. [#105551] 【新】Windows 上 Bash 调用阻塞 10–17 分钟（2.1.309 回归）**（今日创建）
Desktop 更新至 4.29.0 后，Code tab 的 Bash 工具调用在 shell 进程创建前长时间挂起，多个会话的阻塞会同时释放，疑似底层资源/锁竞争。Windows 用户建议暂缓升级。
[链接](https://github.com/anthropics/claude-code/issues/105551)

**6. [#105577 / #105579] Desktop 消息队列机制争议**（今日创建）
用户在 Claude 工作期间发送的消息被排队至回合结束才投递，且存在排队消息永远不送达的 bug（Windows）。长时间构建/门禁运行期间用户完全失去交互能力，暴露出队列机制设计问题。
[链接](https://github.com/anthropics/claude-code/issues/105577) | [#105579](https://github.com/anthropics/claude-code/issues/105579)

**7. [#105012] 多 subagent 场景下 Bash 调用排队数分钟**（有复现，已定位根因）
今日更新：根因是 "bash edit diff" 工作树快照在进程内串行执行，且非 2.1.310 回归。临时方案：`settings.json` 中设置 `"bashEditDiffEnabled": false`。**多 agent 重度用户建议立即应用此 workaround。**
[链接](https://github.com/anthropics/claude-code/issues/105012)

**8. [#102260] 空闲压缩（Idle compaction）被远程 feature flag 静默开启**
用户发现在无通知、无 opt-in 的情况下功能被远程启用，引发对功能开关透明度的质疑。同期 #100277 报告 Opus 5.5 1M 上下文在 27% 时被过早 auto-compact，压缩行为整体可靠性存疑。
[链接](https://github.com/anthropics/claude-code/issues/102260)

**9. [#95764] Opus 5：工具调用间的正文被服务端改写为摘要型 thinking 块**
自 9 月 11 日起，工具调用之间的叙述文字（含代码块）被服务端替换为摘要 thinking 块，代码内容丢失且模型误以为用户已看到。涉及模型行为回归，影响输出质量信任。
[链接](https://github.com/anthropics/claude-code/issues/95764)

**10. [#83453] Claude Desktop (Linux) GPU 进程每秒重试 ~9000 次，24 小时写 346GB syslog**
极端资源泄漏案例，对 Linux 服务器用户可能造成磁盘打满的严重后果。
[链接](https://github.com/anthropics/claude-code/issues/83453)

---

## 🔀 重要 PR 进展

> 注：过去 24 小时仅 3 条 PR 更新，以下为全部动态。

**1. [#15620] 修复 plugin-dev 中 agent/command 示例的 tools 格式错误**（OPEN）
修复 YAML 解析将 JSON 数组（`["Read", "Write"]`）当作字面字符串的问题，改为 YAML 逗号分隔格式，涉及 plugin-dev 插件的 11 个文件。插件开发者如遇到 `tools:`/`allowed-tools:` 不生效可参考此修正。
[链接](https://github.com/anthropics/claude-code/pull/15620)

**2. [#105303] 从 claude-plugins-official 安装 marketplace 插件**（CLOSED）
将 `claude-code-plugins` marketplace 切换为从官方插件仓库安装全部插件，与 `code-review` 移植及插件版本机制联动。已关闭，等待后续合并顺序调整。
[链接](https://github.com/anthropics/claude-code/pull/105303)

**3. [#32753] 修复仓库内过期的文档 URL**（OPEN）
将 12 个文件中的 `docs.anthropic.com` / `docs.claude.com` 统一迁移至 `code.claude.com`。侧面印证官方文档域名的迁移已基本完成。
[链接](https://github.com/anthropics/claude-code/pull/32753)

---

## 📈 功能需求趋势

1. **Desktop 多账号/工作区管理**：#18435（967 👍）持续领跑，多身份切换是长期最大缺口。
2. **IDE 深度集成**：VS Code 插件的 diff 审查 UI（#33932）呼声最高；Agent view 排序优化（#58243）也在跟进。
3. **上下文可恢复性**：压缩/恢复后历史不可见（#27242）、`--resume` 在额度耗尽后失效（#3138）持续发酵，社区希望 transcript 数据有 UI 层出口。
4. **插件/技能系统的可控性**：Desktop 无法禁用内置 `anthropic-skills:*` 技能，每个会话被占用约 2.5k tokens（#101061）。
5. **Remote Control 稳定性**：macOS 上 4090 冲突导致 sessions-bridge 崩溃（#98446）、静默自动更新后不重连（#104230）等一簇问题，反映“远程驱动本地会话”场景的运维脆弱性。

---

## ⚠️ 开发者关注点

- **Windows 平台质量滑坡**：Bash 调用分钟级阻塞（#105551）、控制台窗口抢焦点（#91264）、消息队列失效（#105579），Windows 用户本周升级需谨慎。
- **额度消耗异常**：headless 模式 1.8× 额度消耗（#97074）对 CI/CD 与 SDK 自动化用户影响直接，建议关注官方回应。
- **实用 Workaround**：多 subagent Bash 排队问题可通过 `"bashEditDiffEnabled": false` 立即缓解（#105012）。
- **压缩行为不可控**：远程静默开启 idle compaction（#102260）+ 1M 窗口过早压缩（#100277），长上下文用户建议主动监控 compact 触发时机。
- **安全过滤器误伤**：只读资产盘点和常规回复被误拦（#105561），以及模型拒绝向用户自有 1Password/.env 写入密钥（#95799），安全策略的边界粒度有待细化。
- **模型行为一致性**：Opus 5 系列存在输出被改写为摘要（#95764）、忽略自身记忆文件（#83789）、复查清单虚标 ✓（#103587）等问题，长会话质量稳定性是普遍关切。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-10-28

## 一、今日速览

Codex 发布 **rust-v0.165.0 稳定版**，新增 Google Cloud Vertex AI 内置 provider 与 GPT-6.1 Terra 模型目录支持；同时 0.166.0 alpha 版本密集迭代中。社区侧，Windows 平台问题（VS Code 扩展启动失败、Computer Use）与“模型容量已满”限流问题是今日讨论焦点。工程侧 PR 活跃，涵盖 OpenTelemetry 协议、独立 exec-server 与线程归档恢复等改进。

---

## 二、版本发布

### rust-v0.165.0（稳定版）
- **GCP Vertex AI provider**：新增内置 provider，通过 `model_provider = "gcp"` 配置 (#56265)
- **GPT-6.1 Terra** 加入模型目录 (#57337)
- **会话选择器** 增加仓库过滤器，agent command center 支持目录分组，提升多项目导航体验

### 预发布版本
- 0.166.0-alpha.2 / alpha.3 / alpha.4 持续滚动发布，距下一稳定版不远

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 关注理由 | 热度 |
|---|---|---|---|
| 1 | [#25271](https://github.com/openai/codex/issues/25271) Computer Use 在 Windows 上无法识别 Chrome URL，即使 newtab 页 | Computer Use 核心功能在 Windows 长期不可用，5 月至今未解决 | 💬65 👍12 |
| 2 | [#56691](https://github.com/openai/codex/issues/56691) Codex 26.1021 扩展在 VS Code 1.143.1 / Windows 上无法启动 UI | 新近爆发、影响面大，4 天 37 评论 32 👍，上升最快 | 💬37 👍32 |
| 3 | [#24948](https://github.com/openai/codex/issues/24948) 会话日志膨胀至 700MB–2GB（compaction 历史重复） | 长期存在的存储/性能顽疾，影响生产可用性 | 💬31 |
| 4 | [#15723](https://github.com/openai/codex/issues/15723) 后台子进程/subagent 完成后不唤醒调用方 agent | 异步任务编排的基础能力缺失 | 💬28 👍12 |
| 5 | [#49980](https://github.com/openai/codex/issues/49980) Windows/WSL 下 Agent 工具初始化失败（进程创建与 URI 错误） | WSL 用户被完全阻断 | 💬27 |
| 6 | [#32188](https://github.com/openai/codex/issues/32188) 请求：事件驱动唤醒后台 exec 会话 | 与 #15723/#33542/#42908 共同构成高呼声功能方向，👍23 | 💬23 👍23 |
| 7 | [#28316](https://github.com/openai/codex/issues/28316) 后续上下文重复携带 base64 图片，导致请求膨胀 | 与 #43015（63.8MB 请求）同根，图片历史处理是系统性痛点 | 💬20 👍10 |
| 8 | [#52877](https://github.com/openai/codex/issues/52877) Windows 最大化时自动隐藏任务栏不弹出 | 桌面端系统级集成 bug | 💬21 |
| 9 | [#56324](https://github.com/openai/codex/issues/56324) 全模型"at capacity"持续 2 天+，Pro 账号、官方确认无故障 | 与 #55873、#56042 共同反映限流/容量问题集中爆发 | 💬7 |
| 10 | [#54520](https://github.com/openai/codex/issues/54520) macOS Chat 模式 Browser.list_tabs 报"需要原始浏览器上下文" | 浏览器工具跨模式可用性问题 | 💬15 |

---

## 四、重要 PR 进展（Top 10）

1. **[#57638](https://github.com/openai/codex/pull/57638)** app-server 协议新增 OpenTelemetry 需求类型（日志控制、OTLP exporter、TLS），企业可观测性布局
2. **[#57589 / #57590 / #57628](https://github.com/openai/codex/pull/57589)** 独立 `codex-exec-server` 可执行文件：先加入打包、次日又移除出 release 产物——执行器架构快速调整中，值得跟踪
3. **[#57635](https://github.com/openai/codex/pull/57635)** 线程取消归档时恢复其派生子线程，修复只还原父线程的不一致
4. **[#57606](https://github.com/openai/codex/pull/57606)** 新增 `codex doctor --network-only` 聚焦网络诊断，直接回应连接类 issue 排障需求
5. **[#57585](https://github.com/openai/codex/pull/57585)** 模型请求中替换不可用图片引用，缓解 #28316/#43015 的图片历史膨胀问题
6. **[#57584](https://github.com/openai/codex/pull/57584)** token 截断时保留输出边界，提升上下文截断的可靠性
7. **[#57586](https://github.com/openai/codex/pull/57586)** 新增 host 保留的 V2 子线程创建 API，为父子 agent 架构铺路
8. **[#57618](https://github.com/openai/codex/pull/57618)** 流建立后释放 sampling prompt，减少图片/音频 payload 在流式期间的内存驻留
9. **[#57607](https://github.com/openai/codex/pull/57607)** 运行时认证凭证与模型目录刷新共享 ProviderAuthContext，修复 catalog 刷新的认证一致性
10. **[#57626](https://github.com/openai/codex/pull/57626)** 显式配置 `openai` provider 时恢复 Bedrock 设置向导；配套的 [#57612](https://github.com/openai/codex/pull/57612) 修复老版本 VTE 终端兼容

---

## 五、功能需求趋势

1. **异步/事件驱动任务编排**（最强烈）：#32188、#33542、#15723、#42908 集中要求后台命令完成时事件式唤醒 agent，避免轮询消耗 token
2. **多云 provider 支持**：v0.165.0 的 GCP Vertex AI 落地，PR 中 Bedrock 配置体验持续打磨
3. **Computer Use / 浏览器工具成熟度**：Windows 侧 URL 识别、窗口捕获、模态对话框处理均有未决 issue；macOS 浏览器上下文限制待解
4. **Dots 多设备管理**：#49824 请求单 dot 多台电脑独立授权
5. **MCP 一键连接**：#54925 期望类"Sign in with Google"的 MCP 接入体验
6. **诊断与可观测性**：`codex doctor` 持续增强、OTel 集成

---

## 六、开发者关注点（痛点总结）

- **Windows 是重灾区**：Top 30 issue 中约 1/3 带 `windows-os` 标签，覆盖 IDE 扩展、Computer Use、WSL、沙箱 ACL、任务栏等，Windows 生态质量是当前最大短板
- **上下文/内存膨胀**：图片 base64 重复发送（最高 63.8MB/请求）、会话日志 GB 级增长、空闲状态频繁重写全局状态（#51288）——官方已通过 #57585、#57618 等 PR 逐步应对
- **容量限流集中爆发**：多个“Selected model is at capacity”报告，含 Pro 用户跨账户持续 2 天以上，影响信任度
- **线程卡死类问题**：`waitingOnApproval` 卡住（#48930）、工具输出竞态导致线程 wedge（#44604）等，可靠性待提升
- **版本管理混乱**：Windows 桌面端出现运行时配置回退降级（#48165），升级路径需加固

---
*数据来源：github.com/openai/codex · 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-10-28

## 📰 今日速览

Gemini CLI 今日发布 **v0.66.0 正式版**及 **v0.67.0 preview / nightly** 三个版本，核心修复集中在 Termux (Android) 支持与 diff 处理稳定性。社区方面，Subagent 可靠性（挂起、状态误报、MAX_TURNS 误判成功）仍是讨论焦点，403 权限错误问题以 34 条评论居首。PR 侧亮点是 MCP 工具发现分页修复和 `\n` 转义行为系统性修复。

---

## 🚀 版本发布

### v0.66.0（正式版）
- 更新 ROADMAP.md，移除过时的 2025 路线图引用 ([#29723](https://github.com/google-gemini/gemini-cli/pull/29723))
- 含 v0.65.0-preview.0 changelog 及版本例行更新

### v0.67.0-preview.0
- 主要为 changelog 汇总与版本号推进，为下一轮迭代做准备

### v0.67.0-nightly.20261028
- **fix(core)**: 允许 Android (Termux) 上信任系统路径以解析 ripgrep，显著改善移动端开发体验 ([#29884](https://github.com/google-gemini/gemini-cli/pull/29884))
- **fix(core)**: `getDiffContextSnippet` 在 diff 前规范化 CRLF 换行符，修复 Windows 环境差异导致的 diff 异常

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关注理由 |
|---|-------|---------|
| 1 | [#25306](https://github.com/google-gemini/gemini-cli/issues/25306) 🔒 **403 "The caller does not have permission"**（34 评论 / 13 👍，已关闭） | 讨论量最高，涉及 API 权限/安全区域，多用户复现，已标记 possible-duplicate 关闭 |
| 2 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) 🔒 **Subagent 达到 MAX_TURNS 却上报 GOAL 成功**（13 评论，P1） | 状态误报掩盖中断，直接影响任务结果可信度，是 agent 可观测性核心缺陷 |
| 3 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) 🔒 **Generalist agent 无限挂起**（8 评论 / 8 👍，P1） | 简单操作（如建文件夹）也会挂起超一小时，👍 数反映受影响面广 |
| 4 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 🔒 **零依赖 OS 沙箱 + 执行后意图路由**（9 评论，P2，effort/large） | 利用 Gemini 3 原生 bash 能力同时保障安全的架构级提案 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) 🔒 **模型不主动使用 skills 和 sub-agents**（7 评论） | 自主调度能力弱是社区普遍反馈，影响自定义扩展的实际价值 |
| 6 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) 🔒 **AST 感知文件读取/搜索/映射 EPIC**（7 评论） | 探索 AST 工具（ast-grep、tilth、glyph）降低 token 消耗、提升读取精度 |
| 7 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) 🔒 **Browser Agent 忽略 settings.json 配置**（4 评论） | maxTurns 等覆盖失效，配置系统与 agent 运行时脱节 |
| 8 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 🔒 **超过 128 工具触发 400 错误**（3 评论） | MCP 生态扩展后工具数膨胀，作用域限制逻辑亟待改进 |
| 9 | [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) 🔒 **get-shit-done output hook 导致崩溃**（3 评论，P1） | 输出打印用户摘要时稳定崩溃，影响完整工作流 |
| 10 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) 🔒 **Browser subagent 在 Wayland 下失败**（4 评论，P1） | Linux 桌面新显示协议兼容性问题 |

---

## 🔧 重要 PR 进展（Top 10）

1. **[#29737](https://github.com/google-gemini/gemini-cli/pull/29737)（已关闭）新增 Gemini 4 Argon 模型支持** — 注册 `gemini-4-argon` 为可选模型，无需 custom override 即可使用。
2. **[#29980](https://github.com/google-gemini/gemini-cli/pull/29980) 扩展验证命令 `gemini extensions validate`** — 安装/发布前校验 manifest 及 context 文件路径安全性，完善扩展生态治理。
3. **[#29843](https://github.com/google-gemini/gemini-cli/pull/29843) / [#29846](https://github.com/google-gemini/gemini-cli/pull/29846) MCP 工具发现分页修复** — 此前 `tools/list` 忽略 `nextCursor` 静默丢弃后续页工具，两个 PR 分别修复该问题，对大型 MCP 服务器至关重要。
4. **[#29989](https://github.com/google-gemini/gemini-cli/pull/29989) 系统性修复 `\n` 转义错误** — 修复文件编辑与 UI 文本规范化中破坏字符串字面量/正则的 naive 转义逻辑，对应 Issue [#22466](https://github.com/google-gemini/gemini-cli/issues/22466)。
5. **[#29977](https://github.com/google-gemini/gemini-cli/pull/29977) `read_background_output` 尊重取消信号**（help wanted） — 修复取消后仍休眠 `delay_ms` 并读取日志的问题。
6. **[#29841](https://github.com/google-gemini/gemini-cli/pull/29841) 扩展安装支持 GitHub 简写** — `owner/repo`、`github:owner/repo` 等 shorthand 可直接安装。
7. **[#29965](https://github.com/google-gemini/gemini-cli/pull/29965) ExpandableText Unicode 截断修复** — 避免在 UTF-16 代理对边界截断导致 emoji 丢失。
8. **[#29987](https://github.com/google-gemini/gemini-cli/pull/29987) `@` 文件补全支持根路径** — `@/src`、`@./package.json` 等写法触发路径自动补全。
9. **[#29735](https://github.com/google-gemini/gemini-cli/pull/29735)（已关闭）扩展下载流错误处理** — 响应流/写入流失败时正确 reject 并清理半成品文件。
10. **[#29995](https://github.com/google-gemini/gemini-cli/pull/29995)（已合并关闭）README 重构** — 整合 Google CLI 产品版图说明与工具选择指南。

另有多份社区贡献修复在推进：sanitizeForDisplay 代理对截断 ([#29993](https://github.com/google-gemini/gemini-cli/pull/29993))、VSCode 扩展 disposable 注册 ([#29994](https://github.com/google-gemini/gemini-cli/pull/29994))、编辑器取消后恢复审批焦点 ([#29798](https://github.com/google-gemini/gemini-cli/pull/29798))。

---

## 📈 功能需求趋势

1. **Subagent 可靠性与可观测性**（最热）：状态误报、挂起、轨迹不可见（#22598）、bug report 缺上下文（#21763）——agent 基础设施是当前最高优先级方向
2. **上下文效率优化**：AST 感知工具（#22745/22746/22747）、"Tactful Extraction" 精准读取（#19561）、文件化任务追踪替代 WriteToDo（#18836）
3. **安全与沙箱**：零依赖 OS 沙箱提案（#19873）、破坏性操作防护（#22672）、per-workspace 权限策略（#18397）
4. **扩展/MCP 生态**：validate 命令、安装简写、工具数量限制（#24246）、分页发现修复
5. **并行与协作**：共享内存/并行 subagent（#18287，被阻塞中）
6. **新模型支持**：Gemini 4 Argon 已落地

---

## ⚠️ 开发者关注点（痛点汇总）

- **Agent “假成功”**：MAX_TURNS 中断被包装为 GOAL 成功（#22323），自动化流水线不能盲目信任 subagent 返回值
- **挂起无超时**：generalist agent 挂起（#21409）和交互式 prompt 卡死（#22465，如创建 vite app）缺乏兜底机制
- **配置不生效**：Browser Agent 无视 settings.json（#22267）
- **兼容性边角**：Wayland（#21983）、symlink agent 文件不识别（#20079）、Android/Termux（已在 nightly 修复）
- **Token/工具上限**：>128 工具 400 错误（#24246）、上下文每轮 ~36.6k token 基线偏高（#19561）
- **工作区卫生**：模型在随机目录生成临时脚本，增加 commit 清理成本（#23571）

**建议**：若你在 Termux 或 Windows CRLF 环境使用，升级至 v0.67.0-nightly；重度 MCP 用户请关注 #29843/#29846 合并进度。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-10-28）

## 1. 今日速览

昨日 Copilot CLI 发布 **v1.0.105** 系列三个版本，重点修复了长上下文会话中无法选择 Copilot Fusion High/Max 模型的问题。社区方面，网络重试机制（429 处理）、WSL2 稳定性和 MCP/OAuth 回归问题仍是讨论焦点，#4994（MCP OAuth 反复弹授权页）获得 3 个 👍，成为近期呼声最高的回归 bug。

## 2. 版本发布

- **v1.0.105 / v1.0.105-1 / v1.0.105-0**（2026-10-27）
  - 修复：在长上下文会话中，通过 `/model` 选择 Copilot Fusion High 或 Max 现已正常工作
  - 105-1 版本包含额外修复与变更

## 3. 社区热点 Issues

1. **#2760 [已关闭] HTTP 429 重试逻辑改进** — 10 条评论
   CLI 遇到 429 时立即断连重试，导致每分钟 20+ 次激进重试。相关 BYOK 场景见 #3679（Azure OpenAI 429 无退避，0.15s 内耗尽重试）。已关闭，或已随版本修复。
   链接: github.com/github/copilot-cli/issues/2760

2. **#3260 [开放] tmux + SSH 到 Windows Server 2025 时复制粘贴失效** — 9 条评论
   v1.0.47 起在 tmux 内 SSH 到 Windows 远程机时剪贴板损坏，跨平台终端兼容性老问题。
   链接: github.com/github/copilot-cli/issues/3260

3. **#3700 [开放] WSL2 高严重性回归：MainThread 空闲时占用 ~215% CPU，TUI 冻结** — 5 条评论
   v1.0.60 起 WSL2 上每会话必现，属于 #2208 的回归，影响核心可用性。
   链接: github.com/github/copilot-cli/issues/3700

4. **#4994 [开放] 回归：MCP OAuth 授权页每次 ACP 会话都弹出** — 4 条评论，👍 3
   1.0.89 起有效 token 仍被 401 拒绝，浏览器 SSO 反复触发授权流程，对企业自动化流程破坏大。
   链接: github.com/github/copilot-cli/issues/4994

5. **#5197 [开放] 1.0.100 后 WSL2 语音服务 segfault，/voice 卡死** — 5 条评论
   新语音运行时在 WSL2 上启动即崩溃，/voice 永远停在 "Fetching voice models"。
   链接: github.com/github/copilot-cli/issues/5197

6. **#2893 [开放] 并行工具调用时 preToolUse hooks 被静默绕过** — 4 条评论
   timeoutSec 超时后 hook 未被终止，CLI 直接放行工具调用，属于**安全类问题**，值得企业用户警惕。
   链接: github.com/github/copilot-cli/issues/2893

7. **#3518 [开放] 支持恢复已归档的会话** — 3 条评论，👍 11
   今日 👍 最高的功能请求，误归档的长会话无法找回，痛点明确。
   链接: github.com/github/copilot-cli/issues/3518

8. **#5270 [开放·新] GPT-6.1 Sol 导致计划模式死锁** — 3 条评论
   选定 GPT-6.1 Sol 时 Plan → Implementation 转换永久挂起，昨日新报，或与新版模型路由相关。
   链接: github.com/github/copilot-cli/issues/5270

9. **#3572 [开放] 组织级自定义 agent 在非 org 仓库目录下不可见** — 3 条评论，👍 4
   企业场景受限：工作目录无 GitHub 远程仓库时 /agent 看不到 org 级 agent。
   链接: github.com/github/copilot-cli/issues/3572

10. **#4600 [开放] BYOK 提供方下 MCP 工具返回的图片被静默丢弃** — 2 条评论
    图片内容在到达模型前丢失且无任何报错，调试成本高，BYOK 用户需注意。
    链接: github.com/github/copilot-cli/issues/4600

其他值得留意：#5271（新，1.0.105 WSL 剪贴板 clip.exe 路径引用问题）、#4989（已关闭，企业 allowedMcpServers serverName 匹配失效）、#1869（/model 选择不持久化）。

## 4. 重要 PR 进展

过去 24 小时内无活跃 PR 更新。（无条目，符合数据实际）

## 5. 功能需求趋势

- **会话管理**：会话恢复/取消归档（#3518，👍 11）、跨设备会话状态同步（#4569 GitHub Mobile 不刷新）
- **MCP 生态**：MCP server prompts 支持（#505）、企业 MCP 策略与 OAuth 体验（#4994、#4989）
- **BYOK / 多提供方**：per-agent 级别的 provider 配置（#4703）、providers.json 中的 credential command（#4936）
- **企业部署**：Windows 系统级安装器（#5129）、组织级 agent 可见性（#3572）
- **交互体验**：plan 内联批注（#4563）、模型配置持久化与 auto 模式 reasoning effort（#1869、#4560）

## 6. 开发者关注点

1. **WSL2 / Windows 平台稳定性**是最大痛点：CPU 空转（#3700）、语音崩溃（#5197）、剪贴板（#5271）、反复 crash（#4026）集中爆发。
2. **429 限流与重试策略**缺乏可配置性和退避机制，自托管 Azure OpenAI 用户尤其受影响（#2760、#3679）。
3. **回归质量**：1.0.89（MCP OAuth）、1.0.47（剪贴板）、1.0.60（WSL2 CPU）等多起跨版本回归未修复，用户对发布节奏与回归测试覆盖有怨言。
4. **安全与权限**：hook 绕过（#2893）提示并行工具调用下的权限模型存在漏洞，企业用户应关注。
5. **静默失败类 bug**（图片丢弃、ACP 输出丢失 #2482、/rename 无效 #5115）缺乏可观测性，建议开发者开启详细日志辅助上报。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-28

## 📌 今日速览

OpenCode 发布 **v2.2.0**，最大亮点是实验性的 **Desktop 插件系统**（创建、安装与分享 GUI 插件），标志着桌面端可扩展性迈出关键一步。Issue 区持续被 **Windows 平台兼容性问题**和 **V2 桌面端稳定性**占据；PR 区则围绕**定时任务（schedules）**、Claude Agent provider 等重磅功能活跃推进。

---

## 🚀 版本发布

### v2.2.0
- **Desktop 插件系统（实验性）**：支持创建、安装和分享桌面 GUI 插件（[#55246](https://github.com/anomalyco/opencode/pull/55246)、[#59469](https://github.com/anomalyco/opencode/pull/59469)、[#59489](https://github.com/anomalyco/opencode/pull/594)）
- 文档：https://opencode.ai/v2/docs/build/plugins/gui

---

## 🔥 社区热点 Issues

1. **恢复经典左侧栏 UI（31 评论 / 42 👍）** [#48882](https://github.com/anomalyco/opencode/issues/48882)
   新侧边栏重构（#20242）引发最大规模用户反弹，大量用户要求保留持久左栏+会话面板的双栏布局作为可选项。

2. **Windows 控制台进程闪烁黑窗（8 评论）** [#52266](https://github.com/anomalyco/opencode/issues/52266)
   `git.exe` 每秒弹闪黑窗，根因是 spawn 未传 `CREATE_NO_WINDOW`，是 #22414/#31629 的第三次重报，Windows 用户体验硬伤。

3. **npm 12 升级留下无效 exe 存根（8 评论，已复现）** [#51553](https://github.com/anomalyco/opencode/issues/51553)
   `opencode upgrade` 报成功但 `bin/opencode.exe` 仍是文本存根，下次启动即失败。升级器可靠性问题的典型代表。

4. **Desktop V2 打开会话频繁无响应（6 评论）** [#51423](https://github.com/anomalyco/opencode/issues/51423)
   随机触发、难以复现的冻结问题，直接影响日常可用性。

5. **消息 revert/undo 频繁损坏会话状态（4 评论，分类中）** [#51360](https://github.com/anomalyco/opencode/issues/51360)
   撤销消息后对话与文件变更“错乱”，报告者称已严重到影响日常主力使用。

6. **每次 LLM 调用重读全量会话历史（O(n²) 性能）** [#51497](https://github.com/anomalyco/opencode/issues/51497)
   每步全表 SELECT + 逐行解码 SQLite 历史，长会话性能退化的架构级问题。

7. **事件序列落后导致聚合永久不可写（4 评论）** [#51411](https://github.com/anomalyco/opencode/issues/51411)
   `event_sequence.seq` 落后于已有行时，唯一索引冲突使 durable aggregate 永久写死，数据层严重 bug。

8. **Mistral 恢复重放 400 错误每 15s 重试（4 评论）** [#51452](https://github.com/anomalyco/opencode/issues/51452)
   V2 升级后长会话服务重启恢复时 `SessionRunner.drain` 失败并无限重试。

9. **OpenCode Go Anthropic 路由错误被掩蔽为 HTTP 400（已复现）** [#51530](https://github.com/anomalyco/opencode/issues/51530)
   上游真实错误原因被空 payload 吞掉，排障困难。

10. **Windows 插件缓存累积 38 GB 孤儿文件（分类中）** [#51505](https://github.com/anomalyco/opencode/issues/51505)
    `.staging-*` 临时副本永不清理，磁盘占用触目惊心。

---

## 🛠 重要 PR 进展

1. **[feat] Claude Agent 内置 provider** [#58782](https://github.com/anomalyco/opencode/pull/58782)
   通过用户自己的 Claude Code 登录 + Agent SDK 运行 Claude 模型，`/connect` 即可选。

2. **[feat] 定时 Prompt：/schedule 与实验性 API** [#59457](https://github.com/anomalyco/opencode/pull/59457)（基于存储层 [#59401](https://github.com/anomalyco/opencode/pull/59401)）
   支持一次性、定时、每 N 分钟及 cron 唤醒会话——“每 8 小时每小时查一次 CI”成真，默认关闭（`experimental.schedules`）。

3. **[feat] 子代理并发上限** [#55983](https://github.com/anomalyco/opencode/pull/55983)
   新增 `experimental.subagent_concurrency` 限制同时运行的 subagent 数量。

4. **[fix] MCP OAuth 请求 offline access** [#59821](https://github.com/anomalyco/opencode/pull/59821)
   修复 Google 等授权服务器只发 1 小时 access token、无 refresh token 的问题。

5. **[fix] Copilot 长上下文与缓存写入计价** [#59803](https://github.com/anomalyco/opencode/pull/59803)
   修复长会话成本严重低估——实测 3 小时会话费用统计偏差巨大。

6. **[fix] 429 限流耗尽保持可重试** [#59816](https://github.com/anomalyco/opencode/pull/59816)
   将瞬时限流与真配额错误区分开，避免会话被误停，一行核心改动。

7. **[feat] Shell 代码块运行按钮** [#59810](https://github.com/anomalyco/opencode/pull/59810)
   Markdown 中 shell 块直接点击执行（类 Claude 界面），运行/复制按钮常显。

8. **[feat] Code Coach 扩展** [#59654](https://github.com/anomalyco/opencode/pull/59654)
   AI 教练观察 prompt/diff/终端输出，讲授 bug 背后的第一性原理，只观察不写码。

9. **[feat] 代码块复制按钮滚动时保持可见** [#59159](https://github.com/anomalyco/opencode/pull/59159)
   长代码块复制按钮 pin 在右上角，无需滚回顶部（竞品 PR [#59814](https://github.com/anomalyco/opencode/pull/59814) 已关闭）。

10. **[fix] TUI keypad Home/End 导航** [#59770](https://github.com/anomalyco/opencode/pull/59770)
    修复 kitty keyboard protocol 下 Home/End 键在会话记录中失效的问题。

---

## 📈 功能需求趋势

- **桌面插件生态**：v2.2.0 插件系统落地后，社区已在要求更深的插件 API（如暴露 LSP 运行时 `ctx.lsp`，[#51416](https://github.com/anomalyco/opencode/issues/51416)）
- **UI 可定制性**：经典侧边栏回归（#48882）、TUI 侧栏分区记忆/隐藏/排序（[#51535](https://github.com/anomalyco/opencode/issues/51535)）、窗口标题显示项目名（[#51442](https://github.com/anomalyco/opencode/issues/51442)）
- **任务自动化**：定时 Prompt（#59457/#59401）响应了“长周期监控类工作流”的强烈需求
- **子代理协作增强**：跨 subagent 共享预缓存仓库上下文（[#51383](https://github.com/anomalyco/opencode/issues/51383)）+ 并发限制（#55983）
- **自定义 provider/本地模型**：LM Studio API key 发现失败（[#51570](https://github.com/anomalyco/opencode/issues/51570)）、自定义 provider 凭据路径缺失（[#51527](https://github.com/anomalyco/opencode/issues/51527)）

---

## ⚠️ 开发者关注点

1. **Windows 是重灾区**：黑窗闪烁（#52266）、升级器三种方式均有坑（#51553/#51386）、EPERM 写入丢配置（#51470）、38 GB 插件缓存（#51505）——Windows 一等公民支持明显欠账。
2. **V2 升级稳定性**：会话冻结（#51423）、undo 状态损坏（#51360）、事件序列死锁（#51411）表明 V2 的会话/事件层仍有系统性隐患。
3. **长会话性能与成本**：O(n²) 历史重读（#51497）与 Copilot 计价偏差（#59803）说明长会话场景缺乏系统性测试。
4. **错误可观测性差**：上游 400 被掩蔽（#51530）、调试日志打包过期文件（#51444）、MCP 权限提示只显示 `*`（#51519）——排障体验需要整体提升。
5. **升级/分发链路**：release 二进制未发布到 GitHub（[#58105](https://github.com/anomalyco/opencode/issues/58105)，已关闭）说明分发渠道诉求得到回应。

---

*数据来源：GitHub anomalyco/opencode · 统计窗口 2026-10-28 前 24 小时*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-10-28

## 一、今日速览

今日 Qwen Code 密集发布 **v0.26.2 正式版**及 **v0.26.3-preview.0**，核心变更集中在 Managed Agent 架构（含一处 Breaking Change：简化 Web Shell 控件）。Managed Agent Stage F 故障门 FG6–FG13 系列追踪 Issue 于今日集中关闭并验证交付，标志着该架构测试基线基本落定。社区方面，一条由第三方推理/工具调用分歧报告引发的「计划执行偏差检测 Hook」提案（#15760）成为今日新热点。

---

## 二、版本发布

### v0.26.2（正式版）
- **⚠️ Breaking Change**：`fix(managed-agent)!` 简化 Web Shell 控件并移除 cwd 提交（[#15616](https://github.com/QwenLM/qwen-code/pull/15616)，@doudouOUC）
- 详细变更见 [Release v0.26.2](https://github.com/QwenLM/qwen-code/releases)

### v0.26.3-preview.0（预览版）
- `feat(memory)`：空跑后引入可选的记忆提取节奏（[#13571](https://github.com/QwenLM/qwen-code/pull/13571)）
- `fix(core)`：恢复带引号参数的外层 XML 调用解析

### sdk-typescript v0.1.24
- SDK 捆绑 CLI v0.26.2（与 CLI 同源构建），TypeScript SDK 持续跟进主版本。

---

## 三、社区热点 Issues

1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380)** — Managed Agent 双路径架构与分阶段交付提案（72 条评论）
   项目最活跃的总体规划 Issue，今日更新了 Stage F 交付状态核验（对齐 `main@5a0be33`），是多 Agent/平台分发路线的指挥中枢。

2. **[#15760](https://github.com/QwenLM/qwen-code/issues/15760)** — 将「计划执行偏差检测」做成 qwen-code Hook（5 条评论，今日新建）
   动机来自本周广泛传播的第三方测试（Qwen3.8-Flash-Next + CTI-REALM 基准，VentureBeat 报道）：模型推理轨迹声称不使用外部工具，但运行时行为不一致。提案通过 Hook 机制检测「说的」与「做的」之间的偏差，涉及安全审计与可观测性，方向敏感且具前瞻性。

3. **[#15748](https://github.com/QwenLM/qwen-code/issues/15748)** — Subagent 后台任务完成通知只送达顶层 Agent（P2）
   子代理启动的后台任务无法收到自己的完成通知，反而唤醒不必要的顶层会话，最坏情况引发 OOM。多 Agent 场景下的核心正确性缺陷。

4. **[#15750](https://github.com/QwenLM/qwen-code/issues/15750)** — Stage F 遗留故障门单元格承接 Issue（今日新建）
   FG6–FG13 今日全部关闭，此 Issue 专门承接各门关闭时仍未交付的残余测试单元格——工程管理精细化，值得贡献者关注认领。

5. **[#15052](https://github.com/QwenLM/qwen-code/issues/15052)** — 保留 main E2E 独立验证（11 条评论）
   ref 作用域并发会替换 pending run，导致中间 SHA 缺少独立验证结果，失败归因困难。CI 可信度的基础设施问题。

6. **[#15759](https://github.com/QwenLM/qwen-code/issues/15759)** — hz4 smoke 门失败：hz1–hz6 字体基线一致性核查（今日新建）
   自托管 runner 因宿主机默认 sans-serif 字体与 CI 基线不符导致 smoke job 在装依赖前即失败，暴露自建机房环境漂移问题。

7. **[#13951](https://github.com/QwenLM/qwen-code/issues/13951)** — CI 集成测试 Checkout 阶段 `fatal: pack has 1 unresolved delta`（9 条评论）
   由 @wenshao 报告的间歇性 Git 损坏问题，长时间未根治，持续困扰贡献者。

8. **[#15755](https://github.com/QwenLM/qwen-code/issues/15755)** — Flaky：worktree prune 测试误判悬空 admin 链接为 stale
   完整测试套件下连续三次重试失败（vitest retry x2），典型 flaky 测试，影响 CI 信号质量。

9. **[#15712](https://github.com/QwenLM/qwen-code/issues/15712) / [#15739](https://github.com/QwenLM/qwen-code/issues/15739)** — Main CI E2E 失败（PTY 字节保持 / workflow-mode 拒绝逻辑）
   dev-bot 自动上报的 E2E 失败，均标注 "Provisional"——main 已推进，等待最新 run 覆盖确认，反映 main 分支偶发不稳定的现状。

10. **[#15667](https://github.com/QwenLM/qwen-code/issues/15667)**（已关闭）— Row pool 后共享 Session 的门控事件在 Harness 漏斗中排队丢失答案
    深度代码审查发现的并发正确性问题，随 gate 设计更新被闭环处理。

> 附注：今日另有约 15 个 10-22 日的 "Managed Agent gate / SDK Java CI 失败" Issue（#15201–#15249 系列）批量关闭，多为 autofix 流程修复完毕，显示自动化修复管线运转正常。

---

## 四、重要 PR 进展

1. **[#15696](https://github.com/QwenLM/qwen-code/pull/15696)** — Managed Session 保留策略 PR5：有界权限历史查询
   版本化身份历史查询、有界权限事件窗口、流式恢复与已完成激活/收件箱状态驱逐，是会话持久化架构的关键切片。

2. **[#15745](https://github.com/QwenLM/qwen-code/pull/15745)** — Managed 主会话支持独立 Git worktree
   首次准入即冻结本地 commit 并记录最终工作目录，含持久化准备门，保证 Runtime 启动前的确定性。

3. **[#15762](https://github.com/QwenLM/qwen-code/pull/15762)** — Qwen4 世代上下文窗口检测设为 1M
   将上下文检测器的 Qwen 1M 规则扩展至 qwen4 全部拼写形式（coder 变体、快照、provider 前缀 id 等），新模型适配必备。

4. **[#15657](https://github.com/QwenLM/qwen-code/pull/15657) → [#15658](https://github.com/QwenLM/qwen-code/pull/15658) → [#15659](https://github.com/QwenLM/qwen-code/pull/15659)** — ACP 三连栈：子代理身份投影 / 团队报告与会话审批 / 队友活动展示
   A→B→C 堆叠 PR 系列推进多代理协作可观测性，leader 输出不受队友活动干扰。

5. **[#15729](https://github.com/QwenLM/qwen-code/pull/15729)** — Runtime 常驻工作区回收与复用
   工作区生命周期管理的重要性能优化，减少重复创建开销。

6. **[#15388](https://github.com/QwenLM/qwen-code/pull/15388)** — autofix takeover 引入轮次预算
   `@qwen-code /takeover for N`（N=1–99）为自动化修复循环设界，防止失控，AI 自治运维的护栏设计。

7. **[#15761](https://github.com/QwenLM/qwen-code/pull/15761)** — 修复 desktop release runner Git 元数据
   自托管 runner 上 desktop 发布前的 workspace Git 元数据重建，复用 #14017 的恢复步骤——与 #15759 字体问题同属自建 runner 环境治理。

8. **[#15030](https://github.com/QwenLM/qwen-code/pull/15030)** — 提升 workspace skill 安装限额
   将传输上限与落盘上限解耦（此前 zip/GitHub/本地统一 6 MiB 硬编码），社区贡献者长期诉求。

9. **[#15754](https://github.com/QwenLM/qwen-code/pull/15754)**（已关闭/合并）— Daemon 管理通道在无 webhook 时也遵循 approvalMode
   修复与独立通道启动行为不一致的问题，覆盖全部五种审批模式回归测试。

10. **[#15763](https://github.com/QwenLM/qwen-code/pull/15763) / [#15749](https://github.com/QwenLM/qwen-code/pull/15749)** — flaky 测试修复双响
    前者等待 shell tab 字节真正送达再断言；后者给 H2 连接池合理的租约时间（原 500ms 内要完成建表 DDL），直击 CI 噪声根因。

> Web Shell 社区 PR 仍在活跃：[#15319](https://github.com/QwenLM/qwen-code/pull/15319)（无工作区会话分组）、[#15557](https://github.com/QwenLM/qwen-code/pull/15557)（归档会话移入设置）、[#13679](https://github.com/QwenLM/qwen-code/pull/13679)（独立会话列表）。

---

## 五、功能需求趋势

| 方向 | 信号 |
|---|---|
| **Managed Agent / 多代理架构** | 绝对主线：Stage F 故障门集中关闭、会话保留、权限历史、worktree 隔离、ACP 团队协作，Issue/PR 占比过半 |
| **CI/测试基础设施可靠性** | flaky 测试、自托管 runner 环境漂移（字体、Git 元数据）、E2E 验证保留、autofix 预算控制，是本周期第二大投入方向 |
| **模型行为可审计性** | #15760 提出的「计划-执行偏差检测」Hook，呼应社区对模型工具调用与推理一致性验证的需求 |
| **新模型适配** | qwen4 1M 上下文检测（#15762），跟随 Qwen 模型迭代 |
| **Web Shell / 会话管理 UX** | 会话分组、归档、独立会话展示等社区贡献持续涌入 |
| **记忆与个性化** | v0.26.3-preview 的 opt-in 记忆提取节奏 |

---

## 六、开发者关注点

1. **自托管 CI 环境漂移是高频痛点**：hz1–hz6 机群字体不一致（#15759）、desktop runner Git 元数据损坏（#15761）、`pack has 1 unresolved delta`（#13951）——自建基础设施的“环境即代码”治理亟需加强。
2. **Flaky 测试侵蚀 CI 信号**：worktree prune（#15755）、E2E PTY 测试（#15712）等，团队今日已连发多个 PR 系统性治理（等待到位再断言、放宽连接租约）。
3. **多 Agent 场景下的通知/状态正确性**：子代理收不到后台任务通知甚至触发 OOM（#15748），是实际使用中的硬伤。
4. **Breaking Change 节奏**：v0.26.2 中 Web Shell 控件简化属于破坏性变更，依赖 cwd 提交的集成方需评估迁移。
5. **自动化修复（autofix）需要护栏**：takeover 轮次预算 PR（#15388）表明团队在认真对待 AI 自治修复的边界控制——这对采用类似机制的下游团队有参考价值。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-10-28

## 📌 今日速览

今天无新版本发布，社区活动集中在 **0.10.3 的收尾工作**与一批高质量修复 PR 上。多语言本地化明显加速（/undo、/diff 反馈已完成 15 种语言翻译），同时多名外部贡献者通过 contribution-gate 提交了 TUI 修复。值得关注的新 bug 包括 Ollama 本地模型第二轮对话失败（#7113，疑似 #5820 回归）和会话历史丢失（#7095）。

---

## 🏷️ 版本发布

过去 24 小时无新 Release。0.10.3 相关 issue 普遍标注了 2026-10-25 的状态更新，版本正在冲刺阶段。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#5316](https://github.com/codewhale-hq/Codewhale/issues/5316) EPIC-005: TUI Crate 拆解（伞形）** — 33 条评论。0.10.3 核心目标：所有 crate 生产代码不超过 5 万行、目标约 1 万行，W2a 已在 `995f2a88f9` 完成。架构治理的旗舰跟踪单。

2. **[#6184](https://github.com/codewhale-hq/Codewhale/issues/6184) 引擎运行中静默冻结** — 9 条评论。长任务、重工具调用场景下引擎停止产出且无任何错误日志，用户消息被持久化但永不回复。可靠性高危问题。

3. **[#7095](https://github.com/codewhale-hq/Codewhale/issues/7095) [v0.10.3] 会话历史丢失** — 4 条评论，10-26 新报。执行长任务时对话历史意外丢失，直接影响 0.10.3 质量。

4. **[#7113](https://github.com/codewhale-hq/Codewhale/issues/7113) Ollama 32K 本地模型第二轮失败** — 3 条评论，10-27 新报。疑似 #5820 回归：首次启动自动接入本地 Ollama 后，第二轮上下文恢复失败，影响新用户开箱体验。

5. **[#6011](https://github.com/codewhale-hq/Codewhale/issues/6011) Token 用量与工具诊断** — 10 条评论。按组件/模型统计 token、缓存命中率、工具错误模式，归入 Core 执行计划 C11。

6. **[#6804](https://github.com/codewhale-hq/Codewhale/issues/6804) 号召成立汉化组** — 7 条评论。社区自发组织中文本地化团队，应对海量文档翻译与持续同步，中文社区活跃度的风向标。

7. **[#2323](https://github.com/codewhale-hq/Codewhale/issues/2323) 未适配中文输入法** — 5 条评论 + 👍。拼音输入时提示不隐藏、弹窗内输入错位等老问题，中文用户的长期痛点，与 #7071 本地化议题相关。

8. **[#6969](https://github.com/codewhale-hq/Codewhale/issues/6969) Deferred-toolbox 逐出机制经济性为负** — 6 条评论，质量极高的技术分析：在 provider prompt cache 定价下，工具缓存逐出触发全前缀重填充反而更贵。

9. **[#5860](https://github.com/codewhale-hq/Codewhale/issues/5860) 对话驱动的自动技能进化** — 6 条评论。让 agent 自动从重复解题中提取 SKILL.md 模式，是 Skills System 的高热度演进方向。

10. **[#6603](https://github.com/codewhale-hq/Codewhale/issues/6603) Decision Gate 加速常规决策** — 4 条评论。用轻量模型/规则前置判断意图，避免每条消息都唤醒大模型（省 1-3 秒延迟和真金白银），成本优化热点。

---

## 🔀 重要 PR 进展（Top 10）

1. **[#7122](https://github.com/codewhale-hq/Codewhale/pull/7122) 信号退出前冲刷持久化队列**（OPEN）— 修复关闭终端时 SIGHUP 导致会话写入丢失，与 #7095/#6184 类可靠性问题直接相关。

2. **[#7121](https://github.com/codewhale-hq/Codewhale/pull/7121) /undo 反馈本地化**（OPEN）— 补齐 #7071 指出的最后一块硬编码英文，覆盖全部 15 个语言包。

3. **[#7117](https://github.com/codewhale-hq/Codewhale/pull/7117) 修复双实例运行时 setup checkpoint 丢失**（OPEN）— 修复 Windows 路径错误写入失败及 doctor 半报状态等 4 个缺陷。

4. **[#7100](https://github.com/codewhale-hq/Codewhale/pull/7100) 防止中断回合阻塞会话保存**（CLOSED/已合）— 流中断重试后 reasoning 段缺完成帧导致会话不再更新的隐蔽 bug。

5. **[#7101](https://github.com/codewhale-hq/Codewhale/pull/7101) /diff 反馈本地化**（已合）— 9 条用户可见消息走 presentation facet，中文等 15 语言生效。

6. **[#7107](https://github.com/codewhale-hq/Codewhale/pull/7107) 安装器避免重复下载相同资产**（已合）— `curl | sh` 安装器对相同 SHA-256 的二进制不再下载两次。

7. **[#7099](https://github.com/codewhale-hq/Codewhale/pull/7099) OpenCode Go 主机迁移后继承模型元数据**（已合）— models.dev 变更 API 基址后指纹匹配失效，修复 catalog 继承逻辑。

8. **[#7086](https://github.com/codewhale-hq/Codewhale/pull/7086) 分作用域指令预算与可见截断**（已合）— AGENTS.md/CLAUDE.md 等常驻指令按估算 token 分配预算，裁剪全程可见，兑现 #6526。

9. **[#7092](https://github.com/codewhale-hq/Codewhale/pull/7092) Android 启用 rename_exclusive 修复 SELinux EACCES**（已合）— 解决上下文压缩/快照在 Android 上 renameat2 回退失败。

10. **[#7094](https://github.com/codewhale-hq/Codewhale/pull/7094) 仅在模型真正变化时提示 "Model set to"**（已合）— 消除 /effort、/clear 重发模型时的冗余 footer 噪音。

其他值得一提：[#7105](https://github.com/codewhale-hq/Codewhale/pull/7105)（通用路由读取 /v1/models 的 token 上限）、[#7110](https://github.com/codewhale-hq/Codewhale/pull/7110)（/cache 不再把未上报缓存 token 计为 0）、[#7103](https://github.com/codewhale-hq/Codewhale/pull/7103)/[#7112](https://github.com/codewhale-hq/Codewhale/pull/7112)（窄面板下路径截断保留工作区目录名）。

---

## 📈 功能需求趋势

- **Token 成本与上下文工程**（最热）：#6969 缓存感知驱逐、#6991 fastctx 方案、#6426 模型自调用压缩、#6721 紧急压缩对任务的影响、#7073 skills 索引 400 字符上限——社区对“上下文预算每一 token 都要花在刀刃上”诉求强烈。
- **可靠性与状态持久化**：#6184 静默冻结、#7095 历史丢失、#6553 异步运行时上的同步阻塞审计、#6555 非崩溃原子写入审计。
- **本地化**：#6804 汉化组、#7071 通用字符串本地化、#2323 中文输入法——中文用户群体规模显著。
- **本地/多模型支持**：#5848/#7113 Ollama 生态、#5915 Fleet 多模型编排、#1097 FreeBSD 打包。
- **代码质量与架构**：#5316/#5586/#5587 拆解与死代码清理，0.10.3 主线。

## ⚠️ 开发者关注点

1. **0.10.3 质量窗口期**：#7095、#7113 两个新报 bug 直接打在即将发布的版本上，发布前需重点关注。
2. **静默失败是最大痛点**：多个高热度 issue（#6184、#7100 修复的场景）共性是“无错误、无日志、悄悄不工作”，可观测性需系统性加强。
3. **CI 门禁盲区**：#7106/#7108 暴露 rustfmt 只在 Rust PR 触发导致 main 上格式漂移未被发现；#7104 翻译 source stamp 校验也有同类问题。
4. **外部贡献流程顺畅**：今日多个 contribution-gate PR 来自社区新面孔（laozidabo、Aboysky、ddlw 等），门槛机制运转良好。
5. **Windows/多平台兼容**：#7117（路径错误）、#7109（CRLF 校验）、#6970（/undo）、#2323（IME）持续占用修复带宽。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-10-28

## 📌 今日速览

今日无新版本发布，但社区活跃度极高（87 条 Issue 更新、24 条 PR 更新）。最值得关注的是多项 **p0 级修复落地**：undici 安全补丁（#11413）、会话恢复丢失内置工具（#11460）、OpenAI function_call 回放 400 错误（#11415）等。同时社区贡献了一批高质量修复 PR，涵盖前缀保持压缩、多 Provider 兼容性和 TUI 渲染优化。

---

## 🔥 社区热点 Issues

1. **#11460 [p0, fix-available] Resume 在会话分支被截断后丢失所有内置工具**
   ENOSPC 导致 orphan parentId，恢复会话后内置工具全部消失。P0 级数据完整性问题，当天报告当天进入修复流程。
   🔗 earendil-works/pi Issue #11460

2. **#11413 [p0, fix-available] 将 pinned undici 从 8.10.2 升级到 ≥8.12.2**
   所有已发布版本（至 1.4.0）均携带存在漏洞的 undici，社区要求重打 lockfile 并发布补丁版本。安全敏感用户的必跟踪项。
   🔗 earendil-works/pi Issue #11413

3. **#11500 压缩/摘要请求与实时会话不共享 token 前缀，每次压缩付出完整 prefill**
   成本优化方向的高价值发现——压缩请求未复用会话前缀和工具声明，直接推高 token 开销。配套 PR #11499 已提交。
   🔗 earendil-works/pi Issue #11500

4. **#11376 [inprogress, p0] Anthropic：会话中途移除初始工具导致后续所有请求失败**
   扩展重载后触发 `tool_reference_unresolved` 400 错误，影响所有使用动态扩展的场景，正在修复中。
   🔗 earendil-works/pi Issue #11376

5. **#9409 [OPEN] 推理模型会话在上下文上限处永久卡死**
   每次请求返回 `stopReason: "length"` 且压缩恢复失败，长期存在的顽固 Bug（9 月至今），10 条评论反映影响面广。
   🔗 earendil-works/pi Issue #9409

6. **#11493 Codex：闲置后全量缓存 miss，与 OpenAI “永久缓存”承诺不符**
   OpenAI 官方宣称 Codex 用户缓存永久保留，但实际恢复会话时仍全量 prefill，涉及真金白银的成本问题。
   🔗 earendil-works/pi Issue #11493

7. **#11415 [p0] openai-responses：回放其他模型的 function_call 缺少命名空间**
   `additional_tools` 模式下 OpenAI 400 拒绝请求，由 AI agent 实测复现并提交，已修复关闭。
   🔗 earendil-works/pi Issue #11415

8. **#11489 `pi update` 误判 vite+ 安装为 npm，产生第二个全局安装**
   VoidZero 新工具链兼容性问题，反映包管理生态碎片化，配套 PR #11491 已合并。
   🔗 earendil-works/pi Issue #11489

9. **#10585 [OPEN] bash 临时文件流错误（ENOSPC/EACCES）仍会崩溃整个进程**
   `/tmp` 满时未捕获异常导致进程死亡、进行中的 run 丢失，稳定性短板持续存在。
   🔗 earendil-works/pi Issue #10585

10. **#10953 [CLOSED] ChatGPT Business 登录失败但旧版 Codex 登录可用**
    企业工作区认证问题（`3p_delegated_access_policy_denied`），11 条评论，企业用户接入的主要痛点之一。
    🔗 earendil-works/pi Issue #10953

---

## 🔧 重要 PR 进展

1. **#11499 feat: 前缀保持的摘要压缩调用** — 压缩请求复用会话系统提示与工具声明，共享 token 前缀，直击 #11500 的成本问题。
2. **#11491 fix: 识别 vite+ 全局安装并用 `vp update -g` 自更新** — 解决双安装问题。
3. **#11496 fix: 限制 OpenRouter reasoning tokens** — 以 `reasoning.max_tokens` 嵌套传参，避免与 `reasoning.effort` 冲突，并保留至少 1024 token 给答案。
4. **#11494 fix: 识别 LiteLLM ContextWindowExceededError** — 将其正确归类为上下文溢出，触发压缩而非报错。
5. **#11434 fix: OpenCode 使用协议专属端点** — 按模型协议（completions/responses）路由至正确的 inference 端点。
6. **#11486 fix: 会话写入失败时保持内存与文件一致** — 避免 ENOSPC 等错误后产生 orphan parentId（即 #11460 的根因修复）。
7. **#11498 docs: 恢复完整扩展开发指南** — 此前文档刷新误删约 3000 行 API 参考，本次依据源码完整恢复并修正。
8. **#11422 fix: 修正 Kitty 键盘功能键解码** — 支持 F1–F12 含修饰键/重复/释放事件的完整序列。
9. **#11477 perf: 滚动条绘制跳过字素分割** — 消除每行每帧的 `Intl.Segmenter` 调用，TUI 渲染性能优化。
10. **#11471 feat: inline `ctx.ui.custom()` 组件可上报阻塞状态** — 自定义审批对话框不再被终端误判为 "working"。

其他值得注意：#11487（LaTeX 超宽公式回退原文渲染）、#11482（分支摘要传递 thinking level）、#11469（安装扩展时跳过 npm audit 输出）、#11348（滚动列表统一支持翻页键，进行中）。

---

## 📈 功能需求趋势

- **成本与缓存优化**：前缀保持压缩（#11500）、Codex 缓存 miss（#11493）、OpenCode 端点路由（#11132）——token 成本是当前最强诉求。
- **多 Provider 兼容性**：Bedrock 参数上限（#11416）、Gemini 严格 schema（#11504）、LiteLLM、OpenRouter、本地 llama.cpp（#11472）——长尾 Provider 的适配需求持续涌入。
- **稳定性与数据完整性**：ENOSPC 类磁盘错误引发的连锁问题（#10585、#11460、#11139）成为高频崩溃根因。
- **扩展生态可编程性**：公开工具展示 API（#10259）、durable `watchEvents` 断点续传（#11327）、扩展持久化偏好模式（#11410）。
- **TUI 体验打磨**：鼠标中键粘贴（#10640）、选区复制换行语义（#8019）、翻页键（#11348）、Kitty 键盘支持。

---

## ⚠️ 开发者关注点

1. **磁盘空间错误缺乏系统性防御**：ENOSPC 相关问题至少出现在 3 个不同模块（会话写入、bash 流、resume），建议统一做 I/O 错误降级处理。
2. **企业/组织认证仍不稳定**：ChatGPT Business 登录失败（#10953）反映 OAuth 流程对组织策略的兼容不足。
3. **升级安全性**：undici 依赖漏洞未随常规发版修复，暴露 pin 依赖的补丁流程滞后；vite+ 双安装问题提示 `pi update` 的安装方式检测需要更健壮。
4. **推理模型的上下文管理**：#9409 的“卡死在 ceiling”问题长期未解，压缩-重试策略在极端输出场景下失效，是推理模型时代的核心工程挑战。
5. **会话中途动态变更工具集**：#11376 与 #11484 均指向工具生命周期与取消语义的边界情况，扩展开发者应留意避免 mid-session 卸载工具。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报 · 2026-10-28

## 1. 今日速览

oh-my-pi 发布 v18.13.2，为 `AgentTool` 增加可选的 `handlesToolInterrupt` 标志，修复了可中断工具在循环中断事件排队时被跳过的问题。今日社区活动非常活跃，新增多个 P1 级问题，其中最严重的是实验性上下文管理（context rollover）在子代理中陷入循环导致烧掉 $500+ API 费用（#17205）。同时涌现一批高质量 PR，包括韩文本地化框架、RPC 子代理树管理和 eval 工具桥修复。

## 2. 版本发布

### [v18.13.2](https://github.com/can1357/oh-my-pi/releases)
- **`@oh-my-pi/pi-agent-core`**: `AgentTool` 新增可选 `handlesToolInterrupt` 标志——像 `wait` 这类可中断工具在循环级中断已排队时仍可运行（不阻塞），从而正确消费排队的唤醒事件，而非被直接跳过。

## 3. 社区热点 Issues

1. **[#17205](https://github.com/can1357/oh-my-pi/issues/17205) [P1] 实验性上下文 rollover 在子代理中每次工具调用都触发循环，烧掉 $500+ 并最终 429**
   开启 `compaction.experimentalContextManagement` 后，子代理 31 分钟内提交了 380 次上下文 rollover 却始终无法降到阈值以下，直到触发 Anthropic 429。涉及真金白银的资金损失，属最高优先级。

2. **[#10072](https://github.com/can1357/oh-my-pi/issues/10072) [18 评论] Transcript 块被错误固定（pin），遮挡后续流式输出**
   跨越近两个月的长帖（18 条评论）。用户/助手文本、规划输出、Todo 块等应共享同一垂直流，但固定行为破坏了流式渲染体验。TUI 渲染类问题的典型代表。

3. **[#15452](https://github.com/can1357/oh-my-pi/issues/15452) [13 评论] 最近更新引发多个 TUI 异常**
   包括随机“无 TUI”状态（类似 resume/compaction 后的降级表现）。新版本回归问题，影响面广。

4. **[#16755](https://github.com/can1357/oh-my-pi/issues/16755) [已关闭] Anthropic 已退役模型仍在目录中，且 claude-3-5-sonnet-20240620 是图像描述 fallback 首选**
   请求必然失败的退役模型仍被内置目录引用，直接影响图像处理链路。已修复关闭。

5. **[#11600](https://github.com/can1357/oh-my-pi/issues/11600) [19 👍] 请求移植 Pi 的 tuiMode fullscreen 底部固定栏**
   社区呼声最高的功能需求（19 赞）：编辑器、消息队列、widgets 常驻底部，transcript 在上方滚动。

6. **[#17210](https://github.com/can1357/oh-my-pi/issues/17210) `!` 命令无法在交互式 shell 提示处接收输入**
   如 `!code .` 触发 Oh My Zsh 提示时，键盘输入留在 omp composer，命令卡死。影响日常 shell 工作流。

7. **[#17205 相关风险类] [#16989](https://github.com/can1357/oh-my-pi/issues/16989) [已关闭] Anthropic 流中 `message_start` 后收到 in-band `error` 帧导致整轮终止**
   代理/网关切断流时以 error 帧替代终止帧，omp 应从部分回答继续而非放弃整轮。可靠性关键问题，已修复。

8. **[#17253](https://github.com/can1357/oh-my-pi/issues/17253) Todo 提醒在 Q&A 式回合结束时误触发**
   助手以"推荐结论”行结束提问回合时，系统误注入隐藏 todo 提醒。当天即有对应修复 PR（#17256），响应速度值得肯定。

9. **[#17250](https://github.com/can1357/oh-my-pi/issues/17250) Eval 桥拒绝 `xd://` 和 `mcp__server__tool` 拼写，禁用工具报"Unknown tool"**
   eval 工具桥与常规工具调用路径的名称解析不一致，影响 JS/Python eval 用户。同样当天已有修复 PR（#17252）。

10. **[#11032](https://github.com/can1357/oh-my-pi/issues/11032) 安全问题：restrictToolNames 模式下子代理工具上限可通过 per-spawn 定义重新发现被在运行中扩大**
    安全研究性质的报告，涉及子代理工具权限的可执行上限，对做 agent 安全基准的用户尤为重要。

## 4. 重要 PR 进展

1. **[#17255](https://github.com/can1357/oh-my-pi/pull/17255) [review:p0] fix(tui): 移除裸 j/k 作为选择器导航**
   `ui.select` 仅使用配置的上下导航键，修复默认停在 No 时输入 `ok` 回车误触发 Yes 的危险交互。

2. **[#16470](https://github.com/can1357/oh-my-pi/pull/16470) [review:p0] fix(catalog): 保留 DeepSeek V4.1 Flash 命名空间化 id 的图像能力**
   模型目录修复，防止图像支持信息丢失。

3. **[#17257](https://github.com/can1357/oh-my-pi/pull/17257) [review:p1] fix: 阻止进程重复 revive 自己正在运行的会话**
   从子代理 transcript resume 的会话可能被同一进程二次 revive，导致双 agent 循环。

4. **[#17243](https://github.com/can1357/oh-my-pi/pull/17243) [review:p1] fix: 单次 Esc 不再永久禁用后台任务自动唤醒**
   一次用户中断曾导致会话永远不再被自身后台任务唤醒；现改为仅抑制被停止的那一轮。

5. **[#17242](https://github.com/can1357/oh-my-pi/pull/17242) [review:p1] fix(prompts): 指示模型在调用 ask 前先展示上下文**
   解决 ask 对话框在展示 diff/发现/草稿之前弹出的体验问题，改进提示词工程。

6. **[#17203](https://github.com/can1357/oh-my-pi/pull/17203) feat(i18n): 韩文本地化与语言包支持**
   9,723 条中韩对照目录、占位符感知翻译、缺失键英文回退、外部语言包加载。国际化框架的标志性贡献。

7. **[#17248](https://github.com/can1357/oh-my-pi/pull/17248) feat(rpc): 子代理生成树报告 + revive_subagent**
   RPC 宿主可绘制并管理子代理树（parentId/depth），配合 #17247（手动 compaction 事件）与 #17249（RPC wire schema 帧验证），RPC/IDE 集成生态持续完善。

8. **[#9372](https://github.com/can1357/oh-my-pi/pull/9372) feat: Bash 命令自动后台化（async: "auto"）**
   命令先内联运行一个宽限期，超时后同一进程（不重启）晋升为后台任务并保留真实退出码。配套 #9374 扩展 TUI 异步进度展示。

9. **[#16566](https://github.com/can1357/oh-my-pi/pull/16566) fix: 会话切换时释放旧会话的 eval 内核**
   Windows 上残留的 Python/JS eval 内核曾占用数 GB 内存直到 omp 退出。

10. **[#17245](https://github.com/can1357/oh-my-pi/pull/17245) fix(lsp): 拒绝不安全的 workspace 根**
    阻止语言服务器将文件系统根目录、共享临时目录（含 symlink 别名）作为工作区，安全加固。

## 5. 功能需求趋势

- **TUI 渲染与布局**：热度最高。transcript 固定/遮挡（#10072）、fullscreen 底部栏（#11600，19 赞）、粘贴性能（#16273）、collapsedToolTitles（#16726）——终端体验是用户最大关切。
- **RPC / SDK 宿主集成**：RPC 子代理树、手动 compaction 事件、wire schema 验证等多个 PR 显示 IDE/自定义前端集成的活跃投入。
- **子代理安全与权限**：工具上限可执行性（#11032）、per-subagent MCP 工具过滤（#8599）、worktree 相对路径误写父仓库（#13370）。
- **Provider 目录准确性**：退役 Anthropic 模型（#16755）、Codex GPT-6.1 Terra 缺失（#17198）、DeepSeek 目录修复，模型目录维护是持续痛点。
- **上下文管理可靠性**：实验性 rollover 循环（#17205）暴露 compaction 机制的边界情况。
- **国际化**：韩语语言包 PR 开启多语言支持方向。

## 6. 开发者关注点

- **成本与失控循环**：#17205 的 $500+ 损失是最尖锐的痛点——实验性功能缺乏熔断机制，开发者呼吁对 rollover 循环加入保护。
- **配置持久化破坏性写入**：#11477 中 `/model` 切换重写整个 config.yml，丢失注释、引号和 `:thinkingLevel` 后缀，对精细配置用户是长期痛点。
- **交互一致性**：eval 桥与常规路径的工具名解析不一致（#17250）、OSC 7501 状态协议盲区（#15107、#17145），各子系统间契约不统一。
- **隐藏状态泄漏**：todo 提醒误触发（#17253）、AutoQA 同意框不展示报告内容（#17217），开发者希望对系统的“隐性注入”有更多可见性和控制权。
- **资源生命周期**：eval 内核泄漏（#16566）、会话文件残留（#11303），长会话与多会话切换场景下的内存/磁盘管理仍需打磨。
- **终端兼容性**：Kitty 图形终端（#17220）、macOS 语音播放（#17114）等平台特定问题持续出现。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

# DeepSeek Harness 社区动态日报
**日期：2026-10-28** | 数据来源：[deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)

---

## 1. 今日速览

今日社区活动集中在版本发布层面：项目在 24 小时内连续发布 **dsh-v0.2.2-alpha.2** 与 **dsh-v0.2.1-rc.4** 两个版本。前者聚焦插件体系升级（第三方插件更新与热更新回滚），后者为 v0.2.1 稳定线修复了 ACP 模式下诊断信息污染 stdout 的关键问题。Issues 与 PR 板块过去 24 小时无新增动态。

---

## 2. 版本发布

### 🚀 dsh-v0.2.2-alpha.2（预览通道）
**主要更新（新增功能）：**
- **插件管理页增强**：支持展示富文本详情，改善页面布局与导航行为
- **第三方插件更新机制**：插件管理支持更新第三方插件包；热更新失败时自动尝试恢复旧版本，提升插件体系健壮性
- **聊天引用插入**：支持将聊天文本作为引用插入输入框，发送后显示紧凑预览

贡献者：@turtle1999, @turtle2099, @lsdsjy, @imccyu
🔗 [Release 链接](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.2-alpha.2)

### 🔧 dsh-v0.2.1-rc.4（候选发布）
**问题修复：**
- 修复 ACP 模式下诊断输出混入 stdout 的问题——对依赖 stdout 进行进程间通信的集成场景（如编辑器/CLI 管道）尤为重要

贡献者：@LegGasai, @tianyicui
🔗 [Release 链接](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.4)

---

## 3. 社区热点 Issues

过去 24 小时内无 Issue 更新，本节今日从略。建议关注明日动态，或浏览 [Issues 列表](https://github.com/deepseek-ai/deepseek-harness/issues) 查看历史讨论。

---

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新，本节今日从略。可参考今日两个 Release 中合入的变更（见第 2 节）。

---

## 5. 功能需求趋势

基于今日 Release 内容推断当前开发主线：

- **插件生态建设**：v0.2.2-alpha 连续迭代插件管理能力（富文本详情、第三方更新、热更新回滚），显示插件体系是当前最活跃的方向
- **聊天交互体验优化**：引用插入与紧凑预览功能表明团队在打磨对话 UX 细节
- **协议与集成稳定性**：ACP 模式修复体现对 Agent 通信协议正确性的持续投入

---

## 6. 开发者关注点

- **热更新可靠性**：插件热更新失败自动回滚旧版本的机制，直接回应了插件开发者对更新安全性的关切
- **stdout 协议纯净性**：ACP 模式下诊断信息泄漏问题的修复，对构建工具链集成（CI 管道、IDE 扩展）的开发者是重要利好
- **版本节奏**：v0.2.1 进入 rc.4 阶段，稳定版发布临近；同时 v0.2.2-alpha 已开放预览，激进尝鲜用户与稳定用户可各取所需

---

*本日报基于 GitHub 公开数据自动整理，如有遗漏请以官方仓库为准。*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*