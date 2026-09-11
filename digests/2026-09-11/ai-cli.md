# AI CLI 工具社区动态日报 2026-09-11

> 生成时间: 2026-09-11 03:38 UTC | 覆盖工具: 11 个

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
**数据日期：2026-09-11**

---

## 1. 生态全景

AI CLI 工具已从“终端聊天助手”全面演进为**多代理编排 + 沙箱执行 + 插件生态**的开发基础设施。头部工具（Claude Code、Codex）的竞争重心转向企业网关、沙箱网络治理与跨端一致性，而新兴力量（Pi/oh-my-pi、Qwen Code、OpenCode）则通过多 provider 聚合、hooks 生态兼容和性能优化抢占细分市场。当前生态的普遍痛点集中在三处：**沙箱/egress 安全边界、长会话稳定性（OOM/挂起/状态失真）、新模型适配滞后**。值得注意的是，DeepSeek V4.1 Flash 的发布在一天内引发多个工具（Pi、oh-my-pi、DeepSeek TUI）的连锁适配需求，凸显模型迭代速度正在倒逼工具链架构向元数据驱动方向演进。

---

## 2. 各工具活跃度对比

| 工具 | Issue 更新 | PR 更新 | Release | 今日焦点 |
|---|---|---|---|---|
| **Claude Code** | ~10 条热点（3 条今日新增） | 2（官方） | v2.1.268 | Egress allowlist 系统性故障、KB5124008 兼容性 |
| **OpenAI Codex** | ~10 条热点 | 10+ | Python SDK 0.154.0 + 4 个 Rust alpha | "at capacity" 容量故障、max/ultra 档位上线 |
| **Gemini CLI** | 10 条热点 | 10+ | nightly | 安全修复潮（p1 级）、Subagent 可靠性 |
| **Copilot CLI** | 10 条热点 | 2 | v1.0.84-4 | OOM 集群（4+ 条 Issue）、MCP 规范违规 |
| **OpenCode** | 10 条热点 | 10+ | 无 | TUI O(n²) 性能修复、SQLite 数据库可靠性 |
| **Qwen Code** | 10 条热点 | 10+ | v0.23.3 + Desktop 0.3.0 | hooks 对齐 Claude Code、Bun 迁移提案 |
| **Pi** | **133 条更新（最高）** | **19** | 无 | 性能修复、多模型适配、恶意包举报 |
| **oh-my-pi** | ~12 条热点 | 10+ | v18.1.17 | 数据安全 P0/P1 修复潮、DeepSeek 新模型适配 |
| **DeepSeek TUI** | 45 条更新 | 0 | 无 | V4 Pro 停服倒计时、CI 死锁 |
| **Kimi Code CLI** | 1 | 0 | 无 | 登录 500 阻断（P0） |
| **DeepSeek Harness** | 0 | 0 | dsh-v0.1.5-rc.2 | 反馈链路 UI 打磨 |

**观察**：Pi（133 Issue / 19 PR）和 DeepSeek TUI（45 Issue）社区讨论密度远超其他工具，体现开源社区驱动型项目的特征；Claude Code/Copilot CLI Issue 量大但 PR 由官方主导，属平台型治理模式；Kimi 与 DeepSeek Harness 处于低活跃或早期阶段。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **沙箱/网络出站控制** | Claude Code（egress allowlist 三连爆）、Gemini CLI（10 个安全 PR）、Codex（Windows 沙箱发布产物）、Qwen（确定性工具边界 #8102） | 沙箱既要安全隔离又要可控放行外部域名，当前普遍出现“防护过度误拦”或“allowlist 静默失效”两类失败 |
| **长会话稳定性** | Copilot CLI（OOM 集群 + 3.2 万泄漏句柄）、Gemini CLI（agent 挂起、Waiting input 卡死）、OpenCode（TUI O(n²)、21GB SQLite 锁冲突）、Pi（grep OOM） | 长会话/压缩/resume 场景下的内存与状态管理是全行业性短板 |
| **记忆/上下文作用域管理** | Codex（#18343 全局/项目/线程级 memory，11 👍 + PR 铺路）、Gemini CLI（Auto Memory 脱敏系列）、Claude Code（#93499 CLAUDE.md 缓存） | 记忆的分层作用域 + 隐私脱敏 + 持久化压缩是明确需求共识 |
| **新模型快速适配** | Pi、oh-my-pi（DeepSeek V4.1 Flash 目录/视觉/tool_choice 一连串适配）、Codex（max/ultra reasoning）、Claude Code（冗长注释行为 #65961） | 上游模型迭代速度 > 工具目录更新速度，元数据驱动的模型注册成为架构方向 |
| **自动化/Headless 契约** | oh-my-pi（JSON 模式退出码、持久化失败暴露）、Gemini CLI（subagent 虚假 success 上报）、Qwen（TUI 静默崩溃 #11500）、Codex（SDK 通知丢失 #41078） | 嵌入 CI/编排场景要求非交互路径的可靠错误透传，是普遍薄弱环节 |
| **Windows 平台质量** | Claude Code（KB5124008、Remove-Item 误拦）、Codex（浏览器控制/PowerShell 崩溃）、Copilot CLI（插件文件锁）、Qwen（MCP STDIO 断连） | Windows 是所有工具的共同重灾区，OS 更新与沙箱 VM 的兼容性冲突尤为突出 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 企业级网关（定价同步、CIDR 管控）、Cowork 沙箱、mods 插件系统 | 企业 + 重度专业开发者 | 封闭生态、服务端管控强、diff mod 抽象 VCS 后端（铺路多版本系统） |
| **OpenAI Codex** | 推理档位细分（max/ultra）、语音运行时、浏览器控制 | ChatGPT 订阅生态用户 | Rust 核心 + Python SDK 双轨，密集 alpha 迭代 |
| **Gemini CLI** | 沙箱安全加固、Auto Memory | 注重安全与隐私的开发者/企业 | 安全贡献最活跃（路径穿越、提示注入、文件系统隔离），社区驱动 |
| **Copilot CLI** | 插件/instruction/LSP 管理命令化、`--json` 脚本化 | GitHub 生态用户、企业组织 | Node SEA 打包（限制了自救手段），功能完整但稳定性债务重 |
| **Qwen Code** | hooks 兼容 Claude Code、Browser SDK、daemon 多 workspace | 国产模型用户、迁移自 Claude Code 的开发者 | 主动兼容 Claude 生态以承接资产迁移，评估 Bun 运行时 |
| **OpenCode / Pi / oh-my-pi** | 多 provider 聚合、模型目录广度、本地模型支持（#6231 232 👍） | power user、本地/自托管用户 | 开放 provider 架构、社区 PR 高速流动、性能优化主线 |
| **Kimi / DeepSeek 系** | 官方模型深度绑定、中文生态 | 自家模型用户 | 早期阶段，工程成熟度差距明显 |

---

## 5. 社区热度与成熟度

**成熟平台期**（Issue 量大、官方主导修复）：
- **Claude Code**——Issue 编号已至 9 万级，但存在 4 月至今未修的老 Bug（#42776），修复节奏与问题规模不匹配
- **Codex / Copilot CLI**——版本迭代快但质量债重（容量故障、OOM 集群）

**快速迭代期**（社区贡献活跃、PR 密集）：
- **Pi / oh-my-pi**——单日 19 PR，修复速度快（如 #11505 当日闭环），但模型适配和 Windows 支持仍在补课
- **Qwen Code**——当日“提案 + 3 个配套 PR”的执行节奏突出，hooks 兼容战略清晰
- **Gemini CLI**——安全方向贡献密度全生态最高

**早期/低活跃期**：Kimi CLI（1 条 Issue、无官方回应）、DeepSeek Harness（纯 Release 驱动）、DeepSeek TUI（Issue 活跃但工程问题集中在 CI 基础设施）

---

## 6. 值得关注的趋势信号

1. **“确定性运行时”成为新共识**：Qwen #8102（LLM 置于信任边界之外）、Gemini 的提示注入防御 PR、Claude Code 的 auto mode 权限泄漏——行业正从“信任模型输出”转向“运行时硬约束 + 审计”，这对企业采用是关键前提。

2. **Headless/SDK 化需求爆发**：oh-my-pi 的退出码/持久化修复、Codex SDK 时序 Bug、Pi 作为 SDK 嵌入的场景增长——AI CLI 正被嵌入 CI/CD 与多代理编排，非交互路径的可靠性将成下一个竞争壁垒。

3. **模型目录元数据化势在必行**：DeepSeek V4.1 Flash 一天内引发 4+ 个工具的适配问题，Pi 社区已推动 models.dev 元数据化 fallback。选型时建议关注工具是否支持模型自动发现（OpenCode #6231 的 232 👍 是最强信号）。

4. **Claude Code 生态正成为事实标准**：Qwen 主动对齐其 hooks 契约、Pi 放宽 skill 命名以兼容共享技能目录——跨工具资产（hooks/skills/agents）复用正在形成，锁定效应初现。

5. **给开发者的实操建议**：依赖 Cowork egress 的用户暂缓升级并跟踪 Claude Code #93507；自动化管道为 Codex Python SDK 加超时保护；长会话重度用户关注各工具 OOM 修复进展；Windows 用户普遍建议优先考虑 WSL/Linux 路径。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

*数据来源：github.com/anthropics/skills，截至 2026-09-11。注：本次 PR 数据未提供评论数/合并状态，以下基于 PR 描述质量、修复深度与关联 Issue 讨论热度综合排序。*

---

## 一、热门 Skills 排行（PR）

| # | PR | 内容 | 状态 | 热点分析 |
|---|---|---|---|---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 修复**：`run_eval.py` 恒报 0% recall，修复 Windows 流读取、触发检测、并行 worker | OPEN | 关联 [#556](https://github.com/anthropics/skills/issues/556)（12 条评论、10+ 独立复现），是 skill-creator 评测链路的核心缺陷，社区影响最大 |
| 2 | [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind**：零成本多 Agent 编排，用免费模型的 opencode worker 承担机械工作，Claude 做规划/审查 | OPEN | 创新性强（“上下文是稀缺资源”理念），契合社区对降低成本的多 Agent 编排需求 |
| 3 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography**：AI 生成文档的排版质控（孤行、孤词、编号对齐） | OPEN | 切中 AI 生成文档的普遍痛点，2026-03 提交至今持续讨论未合并 |
| 4 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT Skill**：OpenDocument 创建、模板填充、ODT→HTML 转换 | OPEN | 补齐开源文档格式生态（LibreOffice/ISO 标准），企业场景需求明确 |
| 5 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer**：五维度质量分析 + 安全审计的元 Skill | OPEN | 元 Skill（审查 Skill 的 Skill），呼应 [#492](https://github.com/anthropics/skills/issues/492) 安全信任问题，讨论跨度 2 个月 |
| 6 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit**：机械文件校验 + 四维推理审计的交付前质量门 | OPEN | 对应 Issue 提案 [#1385](https://github.com/anthropics/skills/issues/1385)，AI 输出质量门控方向活跃 |
| 7 | [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder 修复**：适配 mcp>=2 的 `streamable_http_client` 及自定义 header | OPEN | 修复 [#1668](https://github.com/anthropics/skills/issues/1668)，与 MCP 生态演进强相关，9 月新提交 |
| 8 | [#210](https://github.com/anthropics/skills/pull/210) | **frontend-design 改进**：提升前端设计 Skill 的清晰度与可执行性 | OPEN | 早期高讨论度 PR（2026-01 提出），反映社区对官方核心 Skill 质量的关注 |

---

## 二、社区需求趋势（Issues 提炼）

1. **安全与信任治理**（最热）：[#492](https://github.com/anthropics/skills/issues/492)（43 评论）社区 Skill 冒用 `anthropic/` 命名空间构成信任边界漏洞，配额/权限滥用风险；配套需求如 agent-governance 安全模式（[#412](https://github.com/anthropics/skills/issues/412)）、SharePoint 权限边界（[#1175](https://github.com/anthropics/skills/issues/1175)）
2. **Skill 分发与管理**：组织内共享 Skill 库（[#228](https://github.com/anthropics/skills/issues/228)，16 评论）、插件内容重复污染上下文（[#189](https://github.com/anthropics/skills/issues/189)）、Skill 与 MCP 互操作（[#16](https://github.com/anthropics/skills/issues/16)）
3. **元工具链（skill-creator）可靠性**：评测脚本 0% 触发（[#556](https://github.com/anthropics/skills/issues/556)）、Windows 兼容性（[#1050](https://github.com/anthropics/skills/pull/1050)、[#1099](https://github.com/anthropics/skills/pull/1099)）、skill-creator 最佳实践（[#202](https://github.com/anthropics/skills/issues/202)）
4. **上下文效率**：claude-api Skill 一次性注入 ~156k token（[#1487](https://github.com/anthropics/skills/issues/1487)）、compact-memory 紧凑记忆符号（[#1329](https://github.com/anthropics/skills/issues/1329)）——Skill 的 token 经济性成为新焦点
5. **输出质量门控**：self-audit / 推理质量门管道（[#1385](https://github.com/anthropics/skills/issues/1385)）等“交付前审计”类 Skill 需求持续升温
6. **企业/平台集成**：AWS Bedrock 支持（[#29](https://github.com/anthropics/skills/issues/29)）、HPC 集群（[PR #1615](https://github.com/anthropics/skills/pull/1615)）、SharePoint 等

---

## 三、高潜力待合并 Skills（活跃但 OPEN）

- **[PR #1298](https://github.com/anthropics/skills/pull/1298)** — skill-creator 评测修复：根因定位清晰，覆盖 10+ 复现场景，2026-09-11 仍在更新，合并价值最高
- **[PR #1742](https://github.com/anthropics/skills/pull/1742)** — mcp-builder 适配 mcp>=2：阻塞 MCP 生态用户，9 月活跃更新，属高优先级修复
- **[PR #541](https://github.com/anthropics/skills/pull/541)** — docx 修复 `w:id` 冲突导致文档损坏：影响所有带书签的 docx 编辑，作者 Lubrsy706 同时贡献多个高质量修复（[#538](https://github.com/anthropics/skills/pull/538)、[#539](https://github.com/anthropics/skills/pull/539)）
- **[PR #1628](https://github.com/anthropics/skills/pull/1628)** — Hivemind 多 Agent 编排：理念与实现完整，符合降本趋势
- **[PR #1607](https://github.com/anthropics/skills/pull/1607)** / **[PR #1724](https://github.com/anthropics/skills/pull/1724)** — claude-api / mcp-builder 模型 ID 更新：小而确定，合并阻力低
- **[PR #1367](https://github.com/anthropics/skills/pull/1367)** — self-audit：有对应 Issue 提案支撑，版本迭代（v1.3.0）显示作者持续投入

---

## 四、生态洞察

> **社区最集中的诉求：从“功能新增”转向“信任与可靠性”——即 Skill 的安全分发（命名空间治理）、元工具链的评测可靠性（skill-creator 修复）以及上下文 token 经济性。**

---

# Claude Code 社区动态日报（2026-09-11）

## 📰 今日速览

今日发布 **v2.1.268**，主要面向企业网关场景：新增网关定价同步与 CIDR 访问控制安全警告。社区焦点集中在 **Cowork 网络出站（egress）allowlist 全面失效**（#93507、#93525、#93494 均为今日新增）以及 **Windows KB5124008 更新破坏 Plan9 挂载** 两大问题上。

---

## 🚀 版本发布

### v2.1.268
- **网关定价同步**：在 `gateway.yaml` 中设置 `pricing:` 后，已登录的 Claude Code 客户端通过 managed settings 获得相同费率，`/cost` 与遥测数据将与实际计费一致
- **安全警告**：当 `access_control.allow_cidrs` 为空时，网关启动时会输出警告

---

## 🔥 社区热点 Issues

1. **#42776** — [Windows 桌面版残留进程文件锁导致无法重启](https://github.com/anthropics/claude-code/issues/42776)
   老牌顽固 Bug，173 条评论、82 👍，自 4 月至今未修复，Windows 用户持续受困。

2. **#92984** — [Windows 更新 KB5124008 后 Cowork Plan9 挂载全部失败](https://github.com/anthropics/claude-code/issues/92984)
   84 条评论，确认卸载 KB 可恢复。Windows 大版本更新与沙箱 VM 兼容性的典型案例，影响面广。

3. **#30112** — [Cowork 网络出站 allowlist 不生效，自定义域名被 403 拦截](https://github.com/anthropics/claude-code/issues/30112)
   长期未解的 egress 控制问题，今日多条新 Issue 与其相关，似为系统性缺陷。

4. **#65961** — [模型默认生成冗长注释，忽略停止指令](https://github.com/anthropics/claude-code/issues/65961)
   **217 👍**，今日最高赞。属模型行为问题，反映 prompt 遵循度痛点，代表大量用户不满。

5. **#93507** — [Cowork macOS 本地沙箱无网络路由 + 云端 egress 全域名 403（回归）](https://github.com/anthropics/claude-code/issues/93507)
   今日新增，明确回归时间点（09-10 23:15 UTC），疑似服务端变更所致，值得密切跟踪。

6. **#93525** — [云沙箱 egress allowlist 收缩至约 5 个主机，无视“All domains”设置](https://github.com/anthropics/claude-code/issues/93525)
   今日新增，与 #93507、#93494 共同指向 egress 配置在服务端被覆盖的系统性问题。

7. **#92016** — [macOS 桌面版 Code 标签页自动拒绝 CLI 原生 SendMessage，破坏子代理恢复](https://github.com/anthropics/claude-code/issues/92016)
   桌面版对 CLI 工具的不兼容处理引发的回归，影响多代理工作流。

8. **#92249** — [计划任务与 Remote Control 会话缺失 ListAgents/SendMessage 工具（已二分定位版本）](https://github.com/anthropics/claude-code/issues/92249)
   社区已 bisect 到 Desktop 1.44121.4 → 1.46388.1，与 #92016、#92276 构成 Desktop 回归集群。

9. **#73524** — [PowerShell Remove-Item 保护误拦合法命令（AST 目标误判）](https://github.com/anthropics/claude-code/issues/73524)
   沙箱安全防护过度阻塞，配套问题 #92539（含空格路径全被拦截），Windows 沙箱可用性受损。

10. **#27561** — [请求现代文本输入：点击定位、文本选择（已关闭）](https://github.com/anthropics/claude-code/issues/27561)
    26 条评论的长期需求今日关闭，可能已被实现，可关注后续版本验证。

---

## 🔀 重要 PR 进展

> 今日仅 2 条 PR 更新，均来自官方 @poteat，集中在 mods/插件系统：

1. **#93452** — [mods/diff: 对齐内置 /diff 面板](https://github.com/anthropics/claude-code/pull/93452)
   diff mod 的 hunk 渲染改走引擎 code element、内置关闭按钮 ✕、行距与空状态、窄终端 resize 处理及仓库探测并发限制。

2. **#93244** — [mods: API 重命名、遥测修复与 diff 后端接缝（已合并）](https://github.com/anthropics/claude-code/pull/93244)
   插件 API 命名规范化（`isFocused`、`tool`）、遥测逐行发送、第三方 provider 零数据外发，并为 diff mod 抽象出 VCS 后端接缝（git 为默认实现）——为支持其他版本控制系统铺路。

---

## 📈 功能需求趋势

- **沙箱/Cowork 网络控制**（最热）：egress allowlist 是今日最大的问题集群，涉及桌面、云端、macOS/Windows 多端
- **Desktop ↔ CLI 工具一致性**：计划任务、Remote Control、Dispatch 会话中工具缺失/被拒的回归集中爆发
- **模型行为可控性**：冗长注释、安全过滤误判（#93524 cyber 误报）反映用户希望更精细的行为控制
- **成本与缓存优化**：#93499 请求 CLAUDE.md 跨会话缓存以减少 prompt cache 重写开销
- **IDE/编辑器体验**：VS Code 上下文指示器阈值可配置（#93036）、TUI 文本编辑与鼠标交互（#27561、#90609）

---

## ⚠️ 开发者关注点

1. **Egress allowlist 系统性故障**：多平台、多环境同时报告出站流量被拦，若你依赖 Cowork 访问外部域名，建议暂缓升级并关注 #93507 进展
2. **Windows 用户双重打击**：KB5124008 破坏 Plan9 挂载 + Remove-Item 守卫误拦，Cowork on Windows 当前体验较差
3. **Desktop 计划任务/Remote Control 回归潮**：1.44121.x 之后多处破坏，模型选择（#91884）、自动启用（#92276）、多会话（#91745）均受影响
4. **权限边界泄漏**：#93405 指出 auto mode 将单个仓库的绝对路径信任写入全局设置，存在安全隐患
5. **企业网关用户**：v2.1.268 的定价同步值得关注，可解决 `/cost` 与账单不一致的长期困扰

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-09-11

## 📰 今日速览

Codex 迎来密集发布：Python SDK 0.154.0 正式版上线，新增 `max` / `ultra` 推理强度档位，Rust 侧 0.155.0-alpha.3 持续迭代。"Selected model is at capacity" 错误在多个 GPT-5/GPT-6 模型上集中爆发，成为今日最热议题。Windows 平台的浏览器控制、PowerShell 崩溃等问题依然占据高热榜单。

---

## 🚀 版本发布

| 版本 | 说明 |
|---|---|
| **python-v0.154.0** | Python SDK 正式版，`pip install --upgrade openai-codex==0.154.0`（需 Python 3.10+），附带 `openai-codex-cli-bin==0.154.0` 运行时 |
| **rust-v0.155.0-alpha.1/2/2.3/3** | 0.155.0 系列密集 alpha 迭代 |
| **rust-v0.154.0-alpha.6.2** | 0.154.0 补充版本 |
| **voice-cygwin-108b38cf** | Windows 原生语音构建的 Cygwin 依赖（103 个固定版本二进制包 + 83 个源码包），仅用于 CI，不进入用户安装包 |

**重点更新内容：**
- 新增 `max` 和 `ultra` reasoning-effort 值（[#39662](https://github.com/openai/codex/pull/39662)），为高强度推理任务提供更高档位
- 同步 API 中新增 `ExternalMessage` 类型

---

## 🔥 社区热点 Issues

1. **[#43375](https://github.com/openai/codex/issues/43375) · GPT-5/GPT-6 多模型返回 "Selected model is at capacity"**（21 评论 / 11 👍）
   影响面最广的服务端问题，跨多个模型切换均复现，与 #44565、#43663 共同指向 `server_overloaded`，疑似容量侧故障。

2. **[#34499](https://github.com/openai/codex/issues/34499) · Windows 桌面端无法在 ChatGPT Project 中创建本地 Work 会话**（26 评论 / 16 👍）
   持续近两个月的 Windows App 核心功能阻断，社区跟进活跃。

3. **[#43410](https://github.com/openai/codex/issues/43410) · Windows 浏览器控制在 API-key 认证下失败**（16 评论 / 10 👍）
   报错 `unsupported Codex auth method: apikey`，扩展与原生宿主连接正常但首操作即失败，API 付费用户阻断性问题。

4. **[#41078](https://github.com/openai/codex/issues/41078) · Python SDK 可能丢弃早期 turn/completed 通知**（15 评论）
   服务端在 `turn/start` 响应前发送通知时，SDK 会无限等待——对构建自动化管道的开发者是可靠性风险。

5. **[#33968](https://github.com/openai/codex/issues/33968) · VS Code 侧边栏在 Linux/Wayland 间歇性卡死/白屏**（14 评论）
   Linux 桌面用户的长期痛点。

6. **[#18343](https://github.com/openai/codex/issues/18343) · 请求记忆（Memory）作用域管理：全局/项目/线程级**（13 评论 / 11 👍）
   高票功能需求，当前 memory 仅全局生效于 `CODEX_HOME`，社区希望精细控制。

7. **[#44135](https://github.com/openai/codex/issues/44135) · Windows Chrome 控制失败 `nodeRepl.fetch request failed`**（12 评论 / 3 👍）
   浏览器控制 Windows 兼容性问题集中的又一例，同日 #44364 验证了 `cua_repl launch.mjs` 代理绕过方案。

8. **[#42027](https://github.com/openai/codex/issues/42027) · 会话 fork 后 rollout 序号重复导致线程历史投影损坏**（12 评论）
   会话状态一致性的深层 bug，与已关闭的 #43640 属同族问题。

9. **[#41338](https://github.com/openai/codex/issues/41338) · 内联图片仅计 ~230 tokens 但线上负载达 4.2 MB**（9 评论）
   有精确测量的深度分析帖：token 计数与实际负载严重脱节，导致基于 token 的上下文管理失效、线程卡死。

10. **[#44561](https://github.com/openai/codex/issues/44561) · 请求默认关闭 TUI whimsy 星星特效（Astra）**（7 评论 / 3 👍）
    新版 UI 细节引发的用户反馈，社区希望 `[tui] whimsy = false` 成为默认值。

---

## 🔧 重要 PR 进展

1. **[#44714](https://github.com/openai/codex/pull/44714)** · 捆绑 Linux 语音运行时：集成 ALSA 插件、适配 PipeWire 缓冲、改进语音启动诊断。
2. **[#44694](https://github.com/openai/codex/pull/44694)** · 将 Windows 沙箱服务（x86_64 + ARM64）纳入发布产物，补齐 Windows 安全隔离基础设施。
3. **[#44701](https://github.com/openai/codex/pull/44701)** · 新增线程级指令 Provider（`ThreadInstructionsProvider`），为 #18343 的作用域指令需求铺路。
4. **[#44675](https://github.com/openai/codex/pull/44675)** · 全局 `AGENTS.md` 修改后在模型请求边界热加载，无需重启会话。
5. **[#44691](https://github.com/openai/codex/pull/44691)** · 对未识别的配置项发出警告，避免拼写错误/废弃配置被静默忽略。
6. **[#44693](https://github.com/openai/codex/pull/44693)** · 修复托管默认值覆盖用户显式选择的 profile（模型/推理强度/服务层级）。
7. **[#44670](https://github.com/openai/codex/pull/44670)** · 安全修复：登录重定向限制到已知平台源，防止 ID token 泄露到任意目的地。
8. **[#44666](https://github.com/openai/codex/pull/44666)** · TUI 尊重系统 reduced-motion 无障碍偏好。
9. **[#44656](https://github.com/openai/codex/pull/44656)** · turn 级指标按实际使用的模型归因，修复模型切换后用量统计错标——与 #44459（App 用量远超 CLI）相关。
10. **[#44711](https://github.com/openai/codex/pull/44711)** · 取消/删除会话后返回命令中心而非退出 TUI，配合 [#44651](https://github.com/openai/codex/pull/44651)（保留错误可见性与草稿），明显改善 TUI 会话管理体验。

---

## 📈 功能需求趋势

- **记忆与指令作用域**：全局/项目/线程级 memory 和 instructions（#18343、PR #44701），是呼声最明确的方向。
- **Windows 平台质量**：浏览器控制（#43410、#44135、#44364）、PowerShell 崩溃（#38878、#39843）、App 崩溃（#44712）集中出现，Windows 体验是当前最大短板。
- **用量透明度与额度**：App 用量远超 CLI（#44459）、Astra 额度消耗过快（#43201），用户要求更清晰的用量归因。
- **模型行为与稳定性**：Astra 过早终止 turn、narrate-instead-of-do（#43329）、Sol 输出损坏/CoT 泄露（#43614）。
- **可配置性与可观测性**：关闭视觉特效（#44561）、图像工具暴露 transparent background 参数（#40572）、更完善的 trace（PR #44661）。
- **推理档位扩展**：`max`/`ultra` reasoning-effort 已落地（PR #39662），预计将带动高强度任务工作流讨论。

---

## ⚠️ 开发者关注点

1. **服务容量问题未解**："at capacity" 错误波及 CLI、App、IDE 扩展多端，且在 Pro/20x 高档订阅中同样出现，今日无官方修复迹象。
2. **SDK 可靠性**：Python SDK 通知时序 bug（#41078）可能造成无限挂起，自动化管道建议加超时保护。
3. **上下文管理盲区**：图片 token 计数与实际负载脱节（#41338）意味着自动 compaction 可能失效，重度多模态用户需关注。
4. **Windows 用户迁移建议**：浏览器控制可参考 #44364 的代理 workaround；Remote SSH 到 Windows 遇阻可回退 WSL/Linux CLI（#22757）。
5. **配置升级提示**：即将到来的版本会对未知配置项告警（PR #44691），建议提前清理配置文件中的拼写错误与废弃键。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-09-11）

## 1. 今日速览

今日发布 v0.61.0-nightly 夜间版本。安全修复成为 PR 主旋律：Windows sandbox 中 `git diff --output` 静默写文件漏洞、checkpoint 路径穿越删除漏洞等多个 p1 级安全修复持续活跃。社区讨论焦点集中在 **Subagent 可靠性**（虚假成功上报、挂起）和 **Auto Memory 隐私与质量问题**。

## 2. 版本发布

- **v0.61.0-nightly.20260911.ged2ac40df**（[Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260910.ged2ac40df...v0.61.0-nightly.20260911.ged2ac40df)）：例行夜间版本，由自动版本 bump PR #29285 触发。

## 3. 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent 触达 MAX_TURNS 后仍上报 `success/GOAL`，掩盖真实中断（p1，13 条评论）。状态上报失真会误导上层 agent 决策，是 Subagent 可观测性的核心问题。
2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist agent 无限挂起，连建文件夹都会卡死（p1，8 👍）。用户需显式禁止 subagent 才能规避，严重影响可用性。
3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** 零依赖 OS 沙箱 + 后执行意图路由，让 Gemini 3 的原生 bash 能力充分发挥（9 条评论）。大型 enhancement，代表架构演进方向。
4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** AST 感知的文件读取/搜索/代码库映射 EPIC（7 条评论）。可精准读取方法边界、降低 token 噪音。
5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** 模型几乎不主动使用自定义 skills 和 subagents（6 条评论）。自动触发率低是定制化能力的普遍痛点。
6. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** Auto Memory 缺乏确定性脱敏、日志过多（p1/p2 安全）。敏感内容在脱敏前已进入模型上下文，隐私风险突出。
7. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** Shell 命令执行完成后卡在 "Waiting input"（p1）。基础交互体验问题，复现频繁。
8. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** Auto Memory 对低信号 session 无限重试，浪费资源且反复打扰用户。
9. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** 工具数超过 128 触发 400 错误，工具作用域管理需更智能。
10. **[#21335](https://github.com/google-gemini/gemini-cli/issues/21335)** `/compress` 结果不持久化，resume 后压缩丢失，token 节省失效。

## 4. 重要 PR 进展

1. **[#29184](https://github.com/google-gemini/gemini-cli/pull/29184)**（p1 安全）修复 Windows sandbox 将 `git diff --output` 视为只读、可静默截断任意文件的漏洞。
2. **[#29192](https://github.com/google-gemini/gemini-cli/pull/29192)**（p1 安全）修复 `/chat delete` 标签 `../` 路径穿越可删除 checkpoints 目录外文件。
3. **[#29186](https://github.com/google-gemini/gemini-cli/pull/29186)**（p1）修正 shell sandbox 拒绝启发式中 `exitCode` null 判断错误。
4. **[#29188](https://github.com/google-gemini/gemini-cli/pull/29188)**（p1）修复 read-many-files 用 `includes()` 匹配 include 模式导致的误判。
5. **[#29283](https://github.com/google-gemini/gemini-cli/pull/29283)** 大幅改进 sandbox（Docker/Podman/runsc/LXC/Seatbelt）文件系统隔离与运行时状态隔离。
6. **[#29250](https://github.com/google-gemini/gemini-cli/pull/29250)**（xl）防间接提示注入：校验构建文件修改与不可信 flag，强化受限工作区边界。
7. **[#29214](https://github.com/google-gemini/gemini-cli/pull/29214)**（xl）sandbox 边界加固，用净化配置文件替代宿主目录挂载。
8. **[#29282](https://github.com/google-gemini/gemini-cli/pull/29282)** OAuth 凭据登录后立即持久化，避免重复登录流程。
9. **[#29187](https://github.com/google-gemini/gemini-cli/pull/29187)** 修复 prompt 模板 `{placeholder}` 替换中 `$` 序列注入问题，改用 `safeLiteralReplace`。
10. **[#29134](https://github.com/google-gemini/gemini-cli/pull/29134)** 防止 `--delete-session` 误删当前活跃会话。

## 5. 功能需求趋势

- **Subagent 体系成熟化**：可靠性（挂起、状态误报）、可观测性（轨迹分享 #22598、bug 报告上下文 #21763）、配置生效（#22267）是最大聚类。
- **Auto Memory 安全与质量**：#26516/26522/26523/26525 系列显示记忆系统的脱敏、重试、patch 校验全面待完善。
- **沙箱与安全**：社区贡献集中修复路径穿越、提示注入、文件系统隔离，安全成为最活跃的贡献方向。
- **AST 感知工具链**：#22745/#22746 探索精准代码读取以降 token 成本。
- **Token 效率**：tactful extraction（#19561）、/compress 持久化、持久化任务跟踪（#18836）。

## 6. 开发者关注点

- **挂起/卡死类问题高发**：shell 卡 "Waiting input"、generalist agent 挂起、vite 交互式 prompt 卡死，稳定性是最大抱怨。
- **Subagent 状态不可信**：虚假 success 上报导致排查困难，急需准确的中断原因透传。
- **隐私顾虑**：Auto Memory 将未脱敏 transcript 送入模型，企业用户敏感。
- **配置生效问题**：settings.json 覆盖被 Browser Agent 忽略、symlink agent 不识别，配置一致性待加强。
- **清理负担**：模型随意生成 tmp 脚本（#23571）污染工作区，需要行为约束。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-09-11

## 1. 今日速览

过去 24 小时社区活动集中在**稳定性与内存管理**上：多个高热度 Issue 报告长时间会话触发 Node.js V8 堆内存 OOM 崩溃（含 3.2 万个泄漏的 libuv 句柄），已形成明显的 bug 集群。同时 v1.0.84-4 发布，带来插件与 instruction/LSP 管理的命令重构。此外，一个违反 MCP 生命周期规范的 `server/discover` 请求问题当日被报告并快速关闭，值得关注。

## 2. 版本发布

### v1.0.84-4
- 新增 `copilot instruction list` 和 `copilot lsp list`，取代原 `copilot plugins list --kind instruction/--kind lsp`
- 为 `copilot plugin list`、`copilot plugin marketplace list`、`copilot plugin marketplace browse` 添加 `--json` 输出（利于脚本化）
- `copilot plugin` 新增 `enable` / `disable` 子命令

## 3. 社区热点 Issues（Top 10）

1. **[#13](https://github.com/github/copilot-cli/issues/13)（已关闭）** — Vi/Vim 输入模式请求，👍 76、12 条评论，是仓库呼声最高的功能之一，已正式关闭（可能已实现或纳入计划）。
2. **[#4742](https://github.com/github/copilot-cli/issues/4742)** — 桌面端 1.1.15 无法在同一项目下创建第二个 Local 分支会话（“已有活跃 Local workspace”），11 条评论，影响多会话工作流。
3. **[#1285](https://github.com/github/copilot-cli/issues/1285)** — 组织级 Agent（`.github-private` 仓库）未出现在 CLI/VS Code，企业场景关键问题，9 条评论。
4. **[#3260](https://github.com/github/copilot-cli/issues/3260)** — tmux + SSH 到 Windows Server 2025 时复制粘贴失效，跨平台输入老痛点。
5. **[#4095](https://github.com/github/copilot-cli/issues/4095)** — Windows 插件更新报 "Access is denied (os error 5)"（VS Code 插件持有 watcher 句柄），👍 21，Windows 用户高频受阻。
6. **[#4686](https://github.com/github/copilot-cli/issues/4686)** — 约 37 分钟后 OOM 崩溃，泄漏 31,965 个 libuv 异步句柄，且 SEA 忽略 `NODE_OPTIONS`，稳定性集群核心案例。
7. **[#4725](https://github.com/github/copilot-cli/issues/4725)** / **[#4699](https://github.com/github/copilot-cli/issues/4699)** / **[#4780](https://github.com/github/copilot-cli/issues/4780)** — Linux 长会话/`--resume`/压缩（compaction）场景的反复 OOM，其中 #4780 会导致会话永久无法恢复。
8. **[#4795](https://github.com/github/copilot-cli/issues/4795)** — Atlassian MCP OAuth 回调端口不匹配（随机端口 vs 注册的 33418），MCP 生态集成受阻。
9. **[#4809](https://github.com/github/copilot-cli/issues/4809)（当日报告、当日关闭）** — 原生 MCP 客户端在 `initialize` 前发送非标准 `server/discover` 请求，违反 MCP 规范并导致合规服务器崩溃；快速关闭或已修复。
10. **[#4764](https://github.com/github/copilot-cli/issues/4764)** — Assisted 权限模式下自动审批约 1 小时后失效，需新会话恢复；另有 [#4802](https://github.com/github/copilot-cli/issues/4802) 报告开启 assisted permissions 后 PRU 配额被异常耗尽。

## 4. 重要 PR 进展

> 注：过去 24 小时仅更新 2 个 PR，无功能性 PR。

1. **[#4808](https://github.com/github/copilot-cli/pull/4808)（Open）** — 安全机器人提交，将 GitHub Actions 的 `uses:` 引用固定为不可变 commit SHA（3 处），属于供应链安全加固。
2. **[#4786](https://github.com/github/copilot-cli/pull/4786)（已关闭）** — 修订第三方服务声明，明确访问要求与条款。

## 5. 功能需求趋势

- **编辑器级输入体验**：Vim 模式（#13）、Ctrl+Backspace 删词（#2199）、tmux/SSH 剪贴板兼容（#3260）——键盘效率是最高呼声。
- **多账号与会话管理**：账号快速切换（#367）、多 Local 会话并存（#4742）、崩溃后 stale lock 恢复（#4805）。
- **MCP 生态兼容性**：OAuth 回调（#4795）、生命周期规范（#4809）、`/new` 后 STDIO MCP 加载失败（#4811）、tools/list 刷新竞争（#4731）。
- **插件/Agent 管理**：插件启用禁用（已随 1.0.84-4 落地）、组织级 Agent 发现（#1285）、`target` frontmatter 文档与实现不一致（#4806）。
- **配置可靠性**：`settings.json` 的 `model` 字段启动不生效（#4067）、退出时回写旧值覆盖新配置（#4252）。

## 6. 开发者关注点

- **内存与稳定性是当前最大痛点**：#4686/#4699/#4725/#4780 构成 OOM bug 集群，长会话、`--resume`、context compaction 均为触发条件，且 SEA 打包方式限制了用户通过 `NODE_OPTIONS` 自救；崩溃 dump 落入用户 cwd 也缺乏清理机制。
- **Windows 平台摩擦多**：插件更新文件锁（#4095）、WSL2 ARM64 `/copy` 失败（#3534）、tmux 剪贴板（#3260）。
- **权限与计费透明度**：assisted permissions 失效（#4764）与 PRU 配额异常消耗（#4802）、沙盒内 `GH_TOKEN` 凭据选择不可见（#4804）引发信任担忧。
- **后台资源失控**：空闲进程 FileWatch 事件风暴吃满 2 核 CPU、写 33+ GB 日志（#4807），暴露守护/日志治理短板。
- **脚本化能力改善中**：1.0.84-4 的 `--json` 与 `enable/disable` 是向自动化工作流的积极一步。

---
*数据来源：github.com/github/copilot-cli（过去 24 小时）*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-09-11 | 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)**

---

## 1. 今日速览

今日社区整体较为平静：过去 24 小时内无新版本发布、无 PR 更新，仅有 1 条存量 Issue 出现活动。最受关注的问题依然是 **`/login` 设备授权在浏览器确认成功后返回 HTTP 500** 的登录阻断性故障，影响 macOS 用户（含 VS Code 扩展）的正常使用，值得持续跟踪官方修复进展。

---

## 2. 版本发布

过去 24 小时无新 Release。（当前用户侧广泛使用版本为 v0.42.0）

---

## 3. 社区热点 Issues

> 过去 24 小时内仅有 1 条 Issue 有更新，如实列示如下：

### 🔴 #2638 `/login` 设备授权在浏览器批准成功后失败，返回 HTTP 500（CLI v0.42.0, macOS）

- **状态：** OPEN | **作者：** @milesbuckton | 创建 2026-09-09，最近更新 2026-09-10 | 评论 1
- **链接：** [MoonshotAI/kimi-cli Issue #2638](https://github.com/MoonshotAI/kimi-cli/issues/2638)
- **问题详情：**
  - 环境覆盖面较广：CLI v0.42.0 + macOS + 免费套餐（Adagio tier），且**可通过 VS Code 扩展复现**，说明问题很可能出在服务端授权回调而非单一客户端。
  - 复现路径：执行 `/login` → 浏览器弹出设备码（如 `WGBT-C3BW`、`QLE2-MYVL`）→ 用户正确批准 → CLI 侧轮询授权结果时收到 HTTP 500。
- **为什么重要：** 登录是所有功能的入口，属于阻断级（P0）故障；设备码每次刷新变化，提示错误可能发生在 token 交换环节。
- **社区反应：** 已有 1 条评论参与讨论，暂无官方回应记录，暂无 👍。
- **建议关注：** 免费套餐用户如遇同样问题可在该 Issue 下补充环境信息（代理设置、网络环境、错误日志），帮助定位是否与账户 tier 或区域相关。

---

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新。

---

## 5. 功能需求趋势

基于本周期可见数据（仅 1 条活跃 Issue），可提炼的趋势有限，主要有：

- **认证/登录链路稳定性**：设备授权流程（device flow）的可靠性是当前最突出的痛点，尤其是免费套餐用户的登录成功率。鉴于 Issue 中提到 VS Code 扩展同步复现，**IDE 集成场景下的认证体验**也是隐含关注点。
- 期待后续更多 Issue 数据以分析 IDE 集成、性能、模型支持等方向的社区需求分布。

---

## 6. 开发者关注点

- **登录阻断问题（核心痛点）**：`/login` 设备授权在浏览器端成功批准后，CLI 侧换取 token 时服务端返回 500，导致 macOS 免费用户完全无法使用 CLI。由于 CLI 与 VS Code 扩展均可复现，社区倾向于判断为服务端问题，等待官方修复或给出临时 workaround（如 API Key 登录方式）。
- **信息不足待补充**：该 Issue 尚无官方维护者回复，建议受影响用户补充完整错误输出与网络环境信息以加速定位。

---

*本日报基于过去 24 小时的 GitHub 公开数据自动汇总。数据量较少时如实呈现，不作推测性补充。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-09-11

## 📌 今日速览

今日无新版本发布。社区热度最高的仍是 **OpenAI 兼容 provider 模型自动发现**（#6231，232 👍）和**高 CPU 占用问题**（#30086）。今日新提交的 PR 集中在性能优化——两个针对 TUI 流式渲染 O(n²) 卡顿的联合修复（#48431/#48432），以及 Windows shell 工具管道泄漏的修复；此外新增多个关于 GPT-5.6 1M 上下文、Provider 初始化报错等修复。

## 🏷️ 版本发布

过去 24 小时无新 Release。

## 🔥 社区热点 Issues

1. **[#6231](https://github.com/anomalyco/opencode/issues/6231) — OpenAI 兼容端点模型自动发现**（OPEN，55 评论，232 👍）
   本仓库呼声最高的功能需求：LM Studio / Ollama / llama.cpp 等本地 provider 应通过 `/v1/models` 自动发现模型，而非手动维护 `opencode.json`。与 #27553、#23327（已关闭）共同构成强烈需求信号。

2. **[#30086](https://github.com/anomalyco/opencode/issues/30086) — 新版本 CPU 占用飙升**（OPEN，52 评论，28 👍）
   回归级问题：从可同时跑 10+ 会话退化为 3 个会话即卡顿，影响生产可用性，评论持续活跃，官方需优先回应。

3. **[#48330](https://github.com/anomalyco/opencode/issues/48330) — [2.0] Copilot Legacy 订阅单次 prompt 耗尽额度**（OPEN，4 评论）
   OpenCode 2.0 beta 中一个会话即打光 1500 次/月的 Copilot 请求直至 429，1.x 无此问题，涉及真金白银，用户焦虑明显。

4. **[#47350](https://github.com/anomalyco/opencode/issues/47350) — Shell 工具因后台进程持有 stdio 而永久挂起**（OPEN，4 评论）
   工具以 EOF 而非子进程退出作为结束判据，任何遗留后台进程（adb、dev server 等）都会导致挂死。与已关闭的 #48414 相关，疑有残留问题。

5. **[#48410](https://github.com/anomalyco/opencode/issues/48410) — 数据库增大后 WebKit StringImpl 断言崩溃（SIGTRAP）**（OPEN，今日新增）
   macOS 26 / Bun 环境，数据库增长到较大体积后必现崩溃，与下方 #48416 共同指向**数据库体积/并发问题**正在成为新的系统性痛点。

6. **[#48416](https://github.com/anomalyco/opencode/issues/48416) — macOS 多进程并发下每日出现 "Failed to execute statement"**（OPEN，今日新增）
   21 GB 数据库 + `busy_timeout=0`，bash 工具子进程返回写入时触发 SQLite 锁冲突，“每天都在发生”。

7. **[#29748](https://github.com/anomalyco/opencode/issues/29748) — "Unexpected server error" 持续出现**（OPEN，11 评论）
   添加 OpenRouter API 后切项目触发，重启无法恢复，排查数月未决。

8. **[#46651](https://github.com/anomalyco/opencode/issues/46651) — Windows Desktop "TypeError: Failed to fetch"**（OPEN，3 评论）
   Windows 登录后立即启动 OpenCode 高频触发，重启可恢复，指向网络初始化时序问题。

9. **[#38828](https://github.com/anomalyco/opencode/issues/38828) — TUI 中 Markdown 以原始文本显示**（OPEN，3 评论）
   助手消息中 `**bold**`、`##` 等字面输出，影响 CLI 核心体验。

10. **[#3743](https://github.com/anomalyco/opencode/issues/3743) — 特定模型陷入循环调用**（CLOSED，27 评论）
    KIMI K2、GLM 4.6 等模型反复执行相同工具调用，长期困扰用户的老问题今日关闭，`/compact` 曾是 workaround。

## 🔧 重要 PR 进展

1. **[#48431](https://github.com/anomalyco/opencode/pull/48431) + [#48432](https://github.com/anomalyco/opencode/pull/48432) — TUI 流式渲染 O(n²) 卡顿联合修复**（@dcerisano）
   一个合并 delta 写入、一个原位增长 markdown tail，两层独立可合，共同彻底关闭 #36043 冻结问题。与 CPU 占用问题（#30086）可能相关，值得跟踪。

2. **[#48435](https://github.com/anomalyco/opencode/pull/48435) — 时间线行调和避免深度相等比较**
   用逐字段比较替换 Effect 的结构相等全量遍历，减少每个 stream delta 的开销，同为性能优化方向。

3. **[#48427](https://github.com/anomalyco/opencode/pull/48427) — Windows shell 工具 exit-first + 有界 drain**（已关闭）
   修复 Windows 上等待管道 EOF 而非进程退出导致孙进程（adb server、python sink 等）永久阻塞的问题。

4. **[#46574](https://github.com/anomalyco/opencode/pull/46574) — GPT-5.6 OAuth 提供 opt-in 1M 上下文变体**
   新增 `gpt-5.6-sol-1m` 等变体，Codex OAuth 用户可选百万级上下文。

5. **[#48324](https://github.com/anomalyco/opencode/pull/48324) — 两级渐进式 Skill 披露**
   Skill 系统新特性，同时修复 GPT-5.* 模型 `textVerbosity` 无条件注入导致的自定义网关兼容问题。

6. **[#48433](https://github.com/anomalyco/opencode/pull/48433) — 正确上报 Provider 初始化失败**
   Azure 缺 `resourceName` 时报错为误导性的 "Unsupported package"，改为抛出真实配置错误。

7. **[#48339](https://github.com/anomalyco/opencode/pull/48339) — 中断 turn 后响应排队中的 prompt**
   修复 prompt 队列在 turn 被停止后永久等待 `done` deferred 的问题。

8. **[#48015](https://github.com/anomalyco/opencode/pull/48015) — 事件流重连增加退避机制**
   全局事件流固定延迟重连改为指数退避，避免服务器故障时重连风暴。

9. **[#48428](https://github.com/anomalyco/opencode/pull/48428) — macOS CLI 交叉编译后重新签名**
   修复 Linux runner 交叉编译的 darwin 二进制未签名导致 Gatekeeper 拒绝的问题。

10. **[#48423](https://github.com/anomalyco/opencode/pull/48423) — 统一 WebSocket 配置为单一 transport 偏好**
    清理模型上两个语义不同的 WebSocket 开关，简化配置面。

## 📈 功能需求趋势

- **本地/自定义 Provider 体验**：模型自动发现（#6231、#27553）是压倒性第一需求，社区反复提出，需官方尽快排期。
- **性能与资源占用**：CPU 飙升（#30086）、TUI 卡顿（#36043）、大数据库启动阻塞（#35514）等性能类问题占比高，今日多个性能 PR 也印证这是当前主线。
- **数据库可靠性**：SQLite 体积膨胀、并发锁冲突、WebKit 崩溃集中爆发（#48410、#48416），或成新热点。
- **计费/订阅正确性**：Copilot 额度异常消耗（#48330）反映用户对配额计量的透明度要求。
- **Shell 工具健壮性**：后台进程/管道处理（#47350、#48414）是长期反复出现的顽疾。

## ⚠️ 开发者关注点

1. **升级需谨慎**：近期版本存在 CPU 回归（#30086），多会话重度用户建议暂缓升级或锁定旧版。
2. **大数据库用户风险**：若本地 DB 已达 GB 级，注意 #48410 崩溃与 #48416 并发写入失败，建议关注官方修复并定期清理。
3. **Windows 用户**：登录后立即启动可能触发网络错误（#46651），重启应用即可恢复；shell 后台进程命令可能挂起（#47350）。
4. **2.0 Beta 测试者**：Copilot Legacy 计划用户应避免在 opencode2 上使用，以免额度异常消耗（#48330）。
5. **贡献者提示**：多个今日 PR 带有 `[needs:compliance]` / `[needs:issue]` 标签，提交前请确认关联 issue 与贡献协议合规，可加快合入。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-11

## 📌 今日速览

Qwen Code 发布 **v0.23.3 稳定版**，扩展了 Kimi、Qwen、DeepSeek 的推理预设，同时 Desktop 端推出 v0.3.0 及首个预览版。今天 hooks 生态迎来集中建设：`stop_hook_active` 修复、命令钩子超时单位统一、明文 stdout 路由等多个 PR 同日提交，与 Issue #11610 的 Claude Code 兼容性对齐提案形成呼应。P1 级问题中，DashScope 非 Qwen 模型因 `metadata` 字段 400 报错（#11590）和 VS Code Remote-SSH 下 webview 卡死（#11556）值得升级用户重点关注。

---

## 🚀 版本发布

- **v0.23.3**（[Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3)）
  - Features: 扩展 Kimi、Qwen、DeepSeek 推理预设（[#11349](https://github.com/QwenLM/qwen-code/pull/11349)）
  - 无已知破坏性变更；另有夜间版 `v0.23.3-nightly.20260910`
- **Desktop v0.3.0** 及 **v0.3.0-preview.0**（预览版不推送到 `desktop-latest` 更新源，需手动安装）
  - 桌面打包定时 CI 演练、bridge 权限队列修复等
- **SDK TypeScript v0.1.12**：捆绑 CLI v0.23.3

---

## 🔥 社区热点 Issues

1. **#8102 · 可信 Agent 运行时的确定性工具执行边界**（18 评论，最热）
   核心方向性提案：将 LLM 置于信任边界之外，运行时对模型行为做确定性约束与审计。长期架构讨论，关注度持续最高。
   [链接](https://github.com/QwenLM/qwen-code/issues/8102)

2. **#11590 · [P1] 非 Qwen 厂商模型在 DashScope 兼容端点全部 400**（3 评论）
   自动插入的顶层 `metadata` 字段被聚合网关转发给第三方厂商，对方反序列化失败导致 GLM 等模型完全不可用。删除该字段即恢复——P1 兼容性硬伤，非 Qwen 模型用户阻断级问题。
   [链接](https://github.com/QwenLM/qwen-code/issues/11590)

3. **#11556 · [P1] VS Code 扩展 Remote-SSH 下 webview 无限加载**
   0.23.1 版本在远程开发场景完全不可用，Remote-SSH 用户升级需谨慎。
   [链接](https://github.com/QwenLM/qwen-code/issues/11556)

4. **#11500 · [P1] 多个后台 Agent 完成时 TUI 静默崩溃（React #185）**
   Ink `useBoxMetrics` 布局监听器 setState 循环触发最大更新深度错误，进程直接退出无任何提示，稳定性痛点。
   [链接](https://github.com/QwenLM/qwen-code/issues/11500)

5. **#11574 / #11489 · VS Code 扩展升级后历史会话“消失”**（各 5 评论）
   历史对话框硬编码 `sourceType` 过滤，0.23.x 之前的转录缺少该元数据。两单同根因，#11489 已关闭，升级迁移体验的集中反馈。
   [链接](https://github.com/QwenLM/qwen-code/issues/11574)

6. **#11610 · hooks 契约对齐 Claude Code**（今日新提）
   涉及明文 stdout、`stop_hook_active`、超时单位、matchers 等系统性差异，当日即有 3 个配套 PR 提交，是今天最活跃的工程线。
   [链接](https://github.com/QwenLM/qwen-code/issues/11610)

7. **#11601 · 图片重附机制回放过期截图，模型基于旧 UI 状态循环**
   超过 20 张内联图片后被驱逐的截图被当作“近期视觉上下文”重放，误导 agent。配套修复 PR #11602 已提。
   [链接](https://github.com/QwenLM/qwen-code/issues/11601)

8. **#11577 · Goal 检查点溢出后无限同请求重试直到停摆**
   证据窗口溢出时相同请求逐轮重放，单轮约 60 次工具调用的会话即可触发，影响自动化任务可靠性。
   [链接](https://github.com/QwenLM/qwen-code/issues/11577)

9. **#8182 / #11591 · daemon 内存与 git status 性能**（性能双子星）
   前者：ACP 子进程各分配宿主 50% 内存且不按子进程数均分；后者：256 个 workspace 全量预热 git status 耗时 264.9s（单次 ~1039ms vs 原生 ~20ms），daemon 大规模部署的核心瓶颈。
   [#8182](https://github.com/QwenLM/qwen-code/issues/8182) · [#11591](https://github.com/QwenLM/qwen-code/issues/11591)

10. **#11607 · 评估迁移 Bun 运行时（保持 npm 安装兼容）**
    社区提出以 npm 包内嵌 Bun 的方式评估 Node → Bun 迁移，用户零感知，属安装体积/启动延迟方向的重量级提案。
    [链接](https://github.com/QwenLM/qwen-code/issues/11607)

---

## 🔧 重要 PR 进展

1. **#11613 · 修复 `stop_hook_active` 语义**（@qqqys）
   首次停止检查返回 `false`，仅因 Stop hook 阻断而续跑时返回 `true`，与 Claude Code 行为对齐。
   [链接](https://github.com/QwenLM/qwen-code/pull/11613)

2. **#11615 · 命令钩子 timeout 统一为秒（默认 600s）**（含兼容：≥1000 仍按毫秒读）
   [链接](https://github.com/QwenLM/qwen-code/pull/11615)

3. **#11612 · 钩子明文 stdout 注入为 additionalContext**
   覆盖 SessionStart / UserPromptSubmit / UserPromptExpansion 三个事件。
   [链接](https://github.com/QwenLM/qwen-code/pull/11612)

4. **#11616 · web_search 结果附带页面标题且不改写叙述**
   落地 #11564 设计：搜索侧以 `Sources:` 列表开头，模型可正确输出 `[title](url)` 引用。
   [链接](https://github.com/QwenLM/qwen-code/pull/11616)

5. **#11602 · 重附图片标注"可能过期"**
   前缀改为明确警告不可当作当前 UI 状态，与 #11601 配套。
   [链接](https://github.com/QwenLM/qwen-code/pull/11602)

6. **#11562 · 一次性系统提醒不再混入用户消息**
   转录行、↑ 历史召回、取消后回填的 prompt 均保持干净。
   [链接](https://github.com/QwenLM/qwen-code/pull/11562)

7. **#11241 / #11242 · Browser SDK 生态双雄**
   Playwright 驱动的模型侧 Browser SDK + Chrome Native Messaging 中继（接管用户现有浏览器、CDP 转发），是本周最大特性集群。
   [#11241](https://github.com/QwenLM/qwen-code/pull/11241) · [#11242](https://github.com/QwenLM/qwen-code/pull/11242)

8. **#11594 · Workflow 原生工具支持预编排流程**
   应用可预置任务流脚本由当前 agent 执行，含来源溯源与步骤 ID 关联。
   [链接](https://github.com/QwenLM/qwen-code/pull/11594)

9. **#11588 · 修复 v0.23.3 首次发布失败的 CI flaky 测试**
   review-salvage replay 时间线余量扩大——今天的 v0.23.3 正式发布即受益于此修复。
   [链接](https://github.com/QwenLM/qwen-code/pull/11588)

10. **#10347 · 网络瞬断（EOF）自动重试**
    将包裹为 4xx 的底层网络失败归类为可重试传输错误，弥补 Ctrl+Y 不可用场景（通道/无交互模式）的重试缺口。
    [链接](https://github.com/QwenLM/qwen-code/pull/10347)

---

## 📈 功能需求趋势

| 方向 | 信号 |
|---|---|
| **hooks 生态兼容** | #11610 + 3 个当日 PR，向 Claude Code 契约看齐是当前最强工程主线 |
| **daemon / 多 workspace 规模化** | #8182、#11591、#9316、#11386——内存分配、git 状态延迟、25 上限可配置化集中爆发 |
| **浏览器自动化** | #11241/#11242 + #11609（多会话共享 Chrome profile），Browser Use 快速成型 |
| **VS Code / IDE 集成** | 会话历史丢失（#11574/#11489）、Remote-SSH（#11556）、AskUserQuestion（#11361）、思考力度 UI（#11514） |
| **Web Shell / Desktop 体验** | 未读指示、定时任务模型路由、MCP Windows 稳定性（#9693/#9675/#11460） |
| **生态兼容与打包** | 非 Qwen 模型兼容（#11590）、Bun 运行时评估（#11607） |
| **可信运行时** | #8102 确定性工具边界，长期架构议题 |

---

## ⚠️ 开发者关注点

- **升级 0.23.x 有两处“坑”**：VS Code 历史会话显示丢失、Remote-SSH 不可用——Remote 用户建议暂缓升级。
- **非 Qwen 模型 + DashScope 组合当前不可用**（#11590），需等修复或自建网关剥离 `metadata`。
- **无头/通道模式容错不足**：TUI 崩溃静默退出（#11500）、Goal 死循环（#11577）提示后台自动化场景仍需外层监控兜底。
- **大规模部署前先看性能账**：每 workspace git status ~1s 的开销在百级 workspace 下不可接受（#11591），内存上限也需手工干预（#8182）。
- **Windows + MCP** 是长期重灾区，STDIO 连接关闭、会话间断连等问题仍开放中。

---
*数据来源：QwenLM/qwen-code GitHub（过去 24 小时）· 由 AI 技术分析师生成*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (Codewhale) 社区动态日报
**日期：2026-09-11 | 数据来源：[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)**

---

## 1. 今日速览

今日无新版本发布、无活跃 PR，但 Issue 活跃度极高，过去 24 小时内有 45 条更新。最重磅的消息是 DeepSeek 官方公告 **V4 Pro 服务将于 9 月 14 日中午停服并路由至 V4.1 Flash**（#6025），社区需尽快迁移。此外，测试基础设施问题集中爆发：libtest 全量套件出现 ABBA 死锁（#6049），叠加此前的栈溢出与并行抖动问题，CI 稳定性成为当前核心风险。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues

| # | 标题 | 关注理由 |
|---|------|---------|
| [#6025](https://github.com/Hmbown/Codewhale/issues/6025) | **DeepSeek V4 Pro 将于 9/14 停服** | 上游重大变更：Pro 请求将自动路由至 V4.1 Flash 并按 Flash 计费，距停服仅剩 3 天，涉及计费与模型行为双重影响，社区已有 3 条讨论。 |
| [#6049](https://github.com/Hmbown/Codewhale/issues/6049) | **全量 libtest 套件死锁** | 今日新报：env barrier 与 workshop guard 之间的 ABBA 锁反转导致 14 个 worker 全部挂起（5285/12390 处冻结），直接阻塞 CI 可用性。 |
| [#5929](https://github.com/Hmbown/Codewhale/issues/5929) | **并行执行下 6 个测试抖动（tracking）** | 与 #6049、#5988 构成测试稳定性问题三部曲，每次抖动成本为一次重跑或 25 分钟 matrix，今日仍有更新（5 条评论）。 |
| [#6045](https://github.com/Hmbown/Codewhale/issues/6045) | **用户输入弹窗截断选项、无回退** | `request_user_input` 弹窗在真实终端（141×38 复现）上截断内容、固定 22 行、无滚动/回退，直接影响交互安全性与可用性。 |
| [#6044](https://github.com/Hmbown/Codewhale/issues/6044) | **deepseek-flash 推理内容泄漏到正文** | 流解码器用字面量 `"deepseek-v4"` 子串判断 reasoning 路由，导致 `deepseek-flash` 的思维链混入可见输出——上一次修复（`10aa19570`）修错了门槛。 |
| [#6036](https://github.com/Hmbown/Codewhale/issues/6036) / [#6038](https://github.com/Hmbown/Codewhale/issues/6038) | **Fleet 与 agent 概念重复存储** | 同一实体（scout）在两个 store 中重复存储，字段混杂；已做出架构决策：保留两者，重命名并去重字段而非推倒重建。 |
| [#6030](https://github.com/Hmbown/Codewhale/issues/6030) | **MCP 会话中途认证死锁** | `mcp login linear` OAuth 成功后，已运行的会话仍无法连接且无挂载途径，agent 会浪费多个 turn 尝试绕过。 |
| [#6011](https://github.com/Hmbown/Codewhale/issues/6011) | **Token 用量与工具诊断增强** | 按组件/模型的 token 记账、缓存命中率、工具调用错误模式分析，属于 Core 计划 C11 包，是可观测性方向的标志性需求（4 条评论）。 |
| [#5988](https://github.com/Hmbown/Codewhale/issues/5988) | **两个测试溢出 2MiB 线程栈（已关闭）** | 揭示 nextest 按进程隔离会向 CI 隐藏栈溢出问题，修复经验对 Rust 测试社区有参考价值（4 条评论）。 |
| [#6004](https://github.com/Hmbown/Codewhale/issues/6004) | **新增 session-state hook 事件（已关闭）** | 现有 11 个 hook 事件粒度不足以观察 idle/fatal-error/waiting-for-user 状态，该增强已落地，扩展了自动化集成能力。 |

---

## 4. 重要 PR 进展

过去 24 小时无 PR 更新（数据源显示 0 条）。近期修复主要通过直接 commit 进 main（如 `11501c529` auto-compact 修复，见 #6047 记录）。

---

## 5. 功能需求趋势

从 Issue 分布看，社区关注呈现四大方向：

1. **可观测性与用量统计**：token 记账、缓存命中率、工具调用错误模式（#6011）、footer 计时器准确性（#6041）。
2. **MCP / 插件生态健壮性**：会话中途认证挂载（#6030）、OAuth 重新登录未切换 workspace（#6040）、插件安装提示无法永久关闭（#6031）、确认型操作只打印命令不执行（#6039）。
3. **多提供商路由与模型管理**：OpenRouter 厂商固定（#6007，已关闭）、`/models` 分页缺失（#6009）、恢复会话无法切换新增模型（#6016，已关闭）、默认模型解析失败（#6043，已关闭）、Gemini 全新安装问题（#6018）。
4. **会话体验与状态管理**：`--continue` 歧义（#6001）、用户输入超时可配置（#6003）、会话状态 hook（#6004）、可插拔 agent memory 后端——新提案建议以 causal-memory/mem0 为参考实现（#6050）。

---

## 6. 开发者关注点

- **测试基础设施是最大痛点**：栈溢出被 nextest 隔离掩盖（#5988）、并行抖动（#5929）、测试隔离泄漏污染真实 `~/.codewhale/setup_state.json`（#5932）、全量死锁（#6049）——一套 hermetic、隔离良好的测试环境是当务之急。
- **上游模型变更风险**：V4 Pro 停服倒计时 3 天（#6025），需提前规划默认模型迁移与计费提示。
- **正确性 Bug 密集在流处理与 UI 细节**：reasoning 泄漏（#6044）、LaTeX 下标触发斜体（#6042）、Windows 下窗口置顶阻塞 TUI 线程（#5923）。
- **配置/概念一致性**：Fleet vs agent 双重存储（#6036/#6038）反映了配置模型的历史包袱，重命名与字段去重是既定方向。
- **恢复/续接场景覆盖不足**：resume 会话的模型切换（#6016）、子 agent followup 丢失 provider pin（#6046）表明会话恢复路径需要系统性测试。

---
*本日报基于 GitHub 公开数据自动整理，观点仅供技术参考。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-09-11

## 一、今日速览

今日无新版本发布，但社区活动非常活跃：过去 24 小时共更新 133 条 Issues 和 19 条 PR。性能优化成为焦点——openai-completions 流式工具调用的 O(n²) 重复解析问题（#9265）已由 @petrroll 提交修复 PR（#9461）。同时，大量 TUI 渲染修复（光标标记泄漏、覆盖层遮挡图片）和多款新模型适配（DeepSeek V4.1 Flash、Gemini thoughtSignature）在同日合入，显示社区贡献节奏加快。

## 二、版本发布

过去 24 小时无新 Release。

## 三、社区热点 Issues

1. **#9323** [CLOSED] 改进 Fireworks 专属配置
   作者 @RedBeard0531 | 14 条评论（今日最热）
   针对 fireworks provider 配置的 bug 修复讨论，评论数最多，已关闭。
   链接：earendil-works/pi Issue #9323

2. **#8061** [OPEN] Context budget 忽略 maxTokens 输出预留：输入 78% 即溢出，且压缩重试同样失败
   作者 @Nuctori | 8 评论 · 👍2
   上下文预算计算的核心缺陷：1M token 窗口的模型在 78% 输入时被 provider 拒绝，自动 compact-and-retry 也失败。影响所有大窗口模型用户。
   链接：earendil-works/pi Issue #8061

3. **#9052** [OPEN] 全屏模式滚轮滚动速度比普通模式慢 3 倍
   作者 @yangfeng20 | 8 评论 · 👍4
   全屏模式（固定输入框）的可用性回退，用户从普通 TUI 迁移时体验明显下降，👍 数较高说明共鸣强烈。
   链接：earendil-works/pi Issue #9052

4. **#9381** [CLOSED] 包安全报告：pi-safe-compact
   作者 @logari81 | 5 评论
   第三方扩展包疑似恶意行为举报，作者账号已从 GitHub 消失。生态安全问题值得所有扩展用户警惕。
   链接：earendil-works/pi Issue #9381

5. **#9265** [OPEN] pi-ai: openai-completions 流式工具调用参数 O(n²) 重复解析冻结事件循环
   作者 @Arshad-Kamal | 4 评论
   单进程多会话嵌入式场景下事件循环被冻结，性能影响严重。修复 PR #9461 已提交（见下文）。
   链接：earendil-works/pi Issue #9265

6. **#9294** [OPEN] claude-fable-5 内置 fallback 仍指向已被 API 拒绝的 claude-opus-4-8（400）
   作者 @jcpoyser | 5 评论 | 状态 inprogress
   所有 fable-5 请求立即失败，属高优先级模型目录修复，PR #9297 已提交。
   链接：earendil-works/pi Issue #9294

7. **#9361** [OPEN] Windows: 加载扩展时 shellPath 被非确定性忽略，PATH 回退可能执行 WSL 的 bash.exe
   作者 @ivvanare | 4 评论
   Windows 环境下 shell 解析竞态问题，可能导致在错误的 bash 中执行命令，安全隐患明显。
   链接：earendil-works/pi Issue #9361

8. **#9331** [OPEN] Bedrock: OpenAI reasoning effort 参数从未发送到模型
   作者 @raimondlume | 4 评论
   Bedrock 适配器忽略 thinking level，基准测试中 GPT 5.6 系列低/中/高档无差异，影响成本与效果调优。
   链接：earendil-works/pi Issue #9331

9. **#8752** [OPEN] bedrock-converse: usage.input 未跨模型家族归一化 —— 误报 cache miss、输入成本翻倍
   作者 @ABalanuta | 4 评论 · 👍5
   Anthropic 报净值、OpenAI 系报毛值导致成本计算错误，👍 最高的 Issue 之一。
   链接：earendil-works/pi Issue #8752

10. **#9276** [OPEN] grep 工具带上下文行时可导致 OOM
    作者 @RashimNarayanTiku | 4 评论 | 状态 inprogress
    headless SDK 场景下 JS 堆内存被日志文件填满直至崩溃，对生产环境影响严重。
    链接：earendil-works/pi Issue #9276

## 四、重要 PR 进展

1. **#9461** [OPEN] fix(ai): 延迟流式工具参数解析至首次访问
   @petrroll | 修复 #9265 的 O(n²) 问题，将重解析移入 `.arguments` 的惰性访问并缓存。作者自己也坦承实现不够惯用，值得 review 关注。
   链接：earendil-works/pi PR #9461

2. **#9459** [OPEN] fix(coding-agent): resume 时优先使用已记录的模型变更
   @petrroll | 恢复会话时优先取 `model_change` 事件而非最后一条 assistant 消息的模型，修复会话恢复后模型漂移。
   链接：earendil-works/pi PR #9459

3. **#9441** [OPEN] fix(tui): 防止光标标记泄漏
   @muyiyr | 将 APC 光标标记视为位置元数据而非持久样式，系统性修复 #9257、#9332 等一系列 marker 泄漏问题。
   链接：earendil-works/pi PR #9441

4. **#9434** [OPEN] feat(coding-agent): 允许扩展向会话系统提示词追加内容
   @wutongyuonce | `session_start` 处理器可返回 append-only 的 `systemPromptAppend`，扩展能力的重要增强。
   链接：earendil-works/pi PR #9434

5. **#9442** [OPEN] fix(ai): 允许兼容代理接收 prompt cache key
   @dannote | 新增 `compat.supportsPromptCacheKey` 选项，使兼容代理也能收到会话缓存键，提升缓存命中率。
   链接：earendil-works/pi PR #9442

6. **#9431** [CLOSED] feat(agent): 所有工具调用默认 3 分钟超时
   @galanakisste | 此前仅 bash/powershell 支持可选超时，卡死的工具调用会永久挂起 agent。默认超时是稳健性上的重要改进。
   链接：earendil-works/pi PR #9431

7. **#9443** [CLOSED] fix(ai): openai-completions 工具调用捕获并回放 Gemini thoughtSignature
   @irradiatedghoulatdischem | 修复 Gemini 经 OpenAI 兼容网关调用时 thought 签名丢失的问题。
   链接：earendil-works/pi PR #9443

8. **#9425** [CLOSED] feat(ai): 新增 DeepSeek V4.1 Flash
   @Julioevm | 同时暴露官方 API id 与 models.dev id，配置 Flash 专属 thinking 档位。
   链接：earendil-works/pi PR #9425

9. **#9438** [CLOSED] fix(tui): 允许覆盖层遮挡终端图片
   @sudakshsoti | 修复 Ghostty 中发送截图后打开 /agents 时图片悬浮在覆盖层之上的渲染问题。
   链接：earendil-works/pi PR #9438

10. **#9297** [CLOSED] fix(ai): 移除无效的 Fable 5 fallback 目标
    @petrroll | 修复 #9294，仅保留 Opus 5 作为内置 fallback，并在 models.dev 层面推动元数据化。
    链接：earendil-works/pi PR #9297

其他值得留意：#9435（provider baseUrl 支持变量解析，作者自述“大部分代码由 pi + GLM-5.2 完成”）、#9301（device-code 登录的浏览器/剪贴板操作确认）、#8744（全屏覆盖层选择排除的 opt-in 机制）。

## 五、功能需求趋势

- **模型目录与 fallback 维护**是持续痛点：#9294（fable-5）、#9394（gpt-5.4 下线）、#9086（GLM 5.2 reasoning）表明上游模型迭代速度远快于内置目录更新节奏，社区在推动元数据驱动的 fallback 方案。
- **成本核算与缓存可观测性**：#8752、#8463、#9210 集中反映 usage 统计未归一化、缓存 TTL 计费错误的问题，重度用户对精确成本数据需求强烈。
- **全屏 TUI 体验打磨**：#9052（滚动速度）、#9332（拖选光标泄漏）、#8744 等显示全屏模式进入精细化打磨阶段。
- **扩展生态与安全性**：#9434（系统提示词扩展）、#9381（恶意包举报）显示扩展系统在能力增强的同时面临供应链安全考验。
- **嵌入式/headless SDK 场景**：#9265（事件循环冻结）、#9276（OOM）说明 pi 作为 SDK 被 daemon 多会话嵌入的使用方式日益普遍，对性能隔离要求更高。

## 六、开发者关注点

1. **大上下文窗口的预算管理不可靠**（#8061）：78% 输入即触发溢出且恢复失败，直接影响长会话可用性，是最需优先修复的核心缺陷。
2. **多 provider/网关兼容性长尾**：Bedrock 参数丢失（#9331）、兼容代理缓存键（#9442）、gateway 计费（#9210）——pi 作为多 provider 聚合层的适配质量是用户选择它的关键理由。
3. **Windows/Wayland 环境支持薄弱**：#9361（shellPath 竞态）、#9011（wl-paste stderr 泄漏破坏 TUI）显示非 macOS 平台的细节问题仍需社区贡献。
4. **headless SDK 的资源隔离**：工具调用默认超时（#9431）与流式解析性能（#9461）的落地，将显著提升生产环境稳定性。
5. **技能/会话生态互操作**：#9416 放宽 skill 命名字符以兼容 Claude 等其他 harness 的共享技能目录，反映用户希望跨 agent 工具链复用资产。

---
*数据来源：github.com/earendil-works/pi · 统计窗口：2026-09-10 至 2026-09-11*

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报（2026-09-11）

## 1. 今日速览

DeepSeek V4.1 Flash 昨日发布后社区反应热烈，模型目录支持与视觉输入问题成为今日焦点。版本 v18.1.17 发布，改进了工具名拼写错误的容错提示。此外，多个涉及会话持久化和数据安全的 P0/P1 级修复 PR 正在评审中，值得使用者关注。

## 2. 版本发布

**v18.1.17**（[Release](https://github.com/can1357/oh-my-pi/releases)）
- `pi-agent-core`：工具未找到时提供智能提示，如 `Tool mcp__abc123__xyz789_read not found. Did you mean read?`——利用模型常保留长工具名尾部片段的特性，帮助模型自我纠正。

## 3. 社区热点 Issues

1. **[#9717](https://github.com/can1357/oh-my-pi/issues/9717) DeepSeek v4 Flash 持续误用 edit 工具**（34 评论，👍11）— 长期高热度问题，模型频繁产生误删代码的错误编辑并陷入重试循环，直接影响 DeepSeek 用户的核心工作流。
2. **[#11508](https://github.com/can1357/oh-my-pi/issues/11508) 请求将 DeepSeek V4.1 Flash 加入模型目录**（👍5）— 新模型发布首日即有诉求，且指出分类体系无法识别新 ID，即使 models.dev 收录也会被过滤，需上游适配。
3. **[#11589](https://github.com/can1357/oh-my-pi/issues/11589) [P1] usage-fetch 阻塞事件循环 4-5 秒**— 空闲会话在启动后及每 ~5 分钟卡顿，遥测定位到用量获取突发阻塞 UI，体验影响显著。
4. **[#11505](https://github.com/can1357/oh-my-pi/issues/11505)（已关闭）deepseek-flash 强制 tool_choice 触发 400**— thinking + forced tool_choice 组合被 DeepSeek 拒绝导致计划模式不可用，新模型缺少旧模型的防护逻辑，快速修复关闭。
5. **[#11602](https://github.com/can1357/oh-my-pi/issues/11602) deepseek-flash 视觉输入未被识别**— 官方称 V4.1 支持原生视觉，但模型自述不能读图并转调视觉模型，目录元数据需更新。
6. **[#10072](https://github.com/can1357/oh-my-pi/issues/10072) 会话块错误固定遮挡流式输出**（13 评论）— TUI 渲染架构问题，长期未决，多用户受影响。
7. **[#11519](https://github.com/can1357/oh-my-pi/issues/11519) [P2] WSL2 /mnt 路径启动阻塞 30-180 秒**— 9p 文件系统同步探测导致启动卡顿，随后网络初始化失败报出误导性错误。
8. **[#11634](https://github.com/can1357/oh-my-pi/issues/11634) 插件安装解析到过期的 bun packument 缓存**— 卸载重装也无法刷新版本，影响插件生态分发可靠性。
9. **[#11551](https://github.com/can1357/oh-my-pi/issues/11551) `omp gc --blobs --apply` 误删仍被引用的图片 blob**— 数据丢失风险：`--session-dir` 存储的会话不在 GC 可达性分析范围内。
10. **[#11584](https://github.com/can1357/oh-my-pi/issues/11584) Windows 上 ast_edit 对嵌套文件重复应用改写**— paths 混用绝对目录与内部路径时每次改写执行两次，可能产生意外结果。

其他值得留意：[#11603](https://github.com/can1357/oh-my-pi/issues/11603) Windows `/tmp` 解析为盘符根目录、[#11577](https://github.com/can1357/oh-my-pi/issues/11577)/[#11579](https://github.com/can1357/oh-my-pi/issues/11579) 状态栏 Custom 预设静默失败系列、[#11365](https://github.com/can1357/oh-my-pi/issues/11365) 无界 artifact 恢复撑爆上下文。

## 4. 重要 PR 进展

1. **[#11546](https://github.com/can1357/oh-my-pi/pull/11546) [P0] 子代理会话文件丢失时 fail closed**— 防止零历史代理被静默铸造，避免任务在无上下文状态下继续执行。
2. **[#11560](https://github.com/can1357/oh-my-pi/pull/11560) [P1] 防止过期重写抹除其他进程的持久化轮次**— 修复多进程并发下会话日志被静默覆盖的数据丢失问题。
3. **[#11545](https://github.com/can1357/oh-my-pi/pull/11545) [P1] JSON 模式失败时返回非零退出码**— 修复自动化契约漏洞：`--mode json` 下致命错误只出现在流事件中，退出码仍为 0。
4. **[#11552](https://github.com/can1357/oh-my-pi/pull/11552) [P1] headless 模式暴露会话持久化失败**— 磁盘满/权限漂移此前只在 TUI 横幅可见，CLI/SDK 用户完全无感知。
5. **[#11525](https://github.com/can1357/oh-my-pi/pull/11525) [P1] 原生压缩与 advisor 压缩下保留历史**— 跨压缩边界保留本地摘要与追加消息，避免上下文意外丢失。
6. **[#11011](https://github.com/can1357/oh-my-pi/pull/11011) [P1] 修复 `omp read skill://` 未加载技能注册表**— 独立技能读取此前全部失败。
7. **[#11308](https://github.com/can1357/oh-my-pi/pull/11308) [P1] 过滤 xAI 中转过场叙述**— 修复 web-search 答案混入 "I'll search for…" 等中间消息。
8. **[#9732](https://github.com/can1357/oh-my-pi/pull/9732) 实验性投机工具与 eval 执行**— 大特性：agent-core 管理候选准入、依赖排序、并发与 commit/discard，可显著降低延迟。
9. **[#11645](https://github.com/can1357/oh-my-pi/pull/11645) 多账号 provider 的显式优先级顺序**— 替代会话粘性哈希/轮询，支持个人与团队账号排序。
10. **[#11470](https://github.com/can1357/oh-my-pi/pull/11470) Codex auto-reset 消耗前需显式确认**— 防止后台任务静默花掉最后一次保存的重置额度。

## 5. 功能需求趋势

- **新模型快速适配**：DeepSeek V4.1 Flash 目录/分类/视觉/工具防护一系列问题表明社区对新模型的当天级适配有强烈期待。
- **多会话/多进程一致性**：配置热重载（#6458）、Advisor 设置跨实例同步（#8574）、会话文件并发写保护（PR #11560/#11574）是持续主题。
- **上下文与压缩管理**：累计 prompt-work 压缩触发（#9590）、token 计数重置（#11643）、端到端 token 经济基准（#11135）、artifact 恢复溢出（#11365）。
- **平台兼容性**：Windows 路径语义（#11603/#11584）与 WSL2 启动性能（#11519）报告密集。
- **可观测性与 UX**：设置写入留痕（#11475）、状态栏静默失败、UI 阻塞等“无声失败”类诉求突出。

## 6. 开发者关注点

- **数据安全是首要痛点**：GC 误删 blob、并发进程覆盖会话日志、插件缓存不刷新——多位开发者在单日报告了可能导致工作丢失的缺陷，相关 P0/P1 修复 PR 密集提交，建议尽快跟进评审合入。
- **自动化/Headless 契约薄弱**：JSON 模式退出码、持久化失败无感知、daemon 重启通知（PR #11534）表明将 OMP 嵌入 CI/编排场景的用户在增多，非交互路径的可靠性亟需加强。
- **TUI 长流式输出渲染**：块固定遮挡、scrollback 逐出（#10072/#11276）长期未决，与 thinking+tool 交织型模型（grok-4.6）的兴起叠加放大。
- **配置系统易用性**：静默失败（无效 segment、空 Custom 预设、无痕写入）让调试变难，社区明确要求 fail-loud 行为。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

# DeepSeek Harness 社区动态日报
**日期：2026-09-11**

---

## 1. 今日速览

今日项目发布新版本 **dsh-v0.1.5-rc.2**，重点优化了反馈提交流程与文件卡片 UI 体验。过去 24 小时内无新增 Issue 和 PR 更新，社区处于版本迭代后的观察期。

---

## 2. 版本发布

### dsh-v0.1.5-rc.2

**体验优化：**
- **反馈提交体验优化**：点赞和点踩均需通过弹窗确认后提交；提交失败时保留用户已填写的内容并给出提示，避免反馈丢失。@yixiangihsiang
- **交付文件卡片 UI 改进**：优化排版和对话间距，更新代码文件图标，提升文件辨识度与界面紧凑感。@yixiangihsiang

🔗 链接：https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.5-rc.2

---

## 3. 社区热点 Issues

过去 24 小时内无 Issue 更新，本节暂无内容。

---

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新，本节暂无内容。

---

## 5. 功能需求趋势

由于今日无活跃 Issue 数据，暂无法提炼需求趋势。从本日 Release 内容可间接观察到近期迭代方向：

- **反馈链路可靠性**：提交失败保留内容，说明团队重视用户反馈的低丢失率
- **UI/UX 打磨**：处于 v0.1.x 早期阶段，当前重心在交互细节和视觉一致性

---

## 6. 开发者关注点

- **反馈流程的容错性**是本轮更新重点，提交失败场景的处理体现了对边缘体验的关注
- **文件交付可视化**持续改进，代码文件图标更新表明团队在提升交付物的可读性上投入
- 当前为 rc 版本，建议开发者关注后续正式版 v0.1.5 的稳定性验证

---

*数据来源：github.com/deepseek-ai/deepseek-harness | 统计窗口：过去 24 小时*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*