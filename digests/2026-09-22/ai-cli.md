# AI CLI 工具社区动态日报 2026-09-22

> 生成时间: 2026-09-22 03:54 UTC | 覆盖工具: 11 个

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
**日期：2026-09-22**

---

## 一、生态全景

AI CLI 工具已进入“深度工程化”阶段：头部产品（Claude Code、Codex、Gemini CLI）竞争焦点从基础功能转向**扩展机制、企业集成与平台可靠性**，而质量与稳定性问题（内存泄漏、Windows 兼容、会话膨胀）成为普遍短板。开源生态出现明显分化——Qwen Code、OpenCode、Pi 等保持高活跃度快速迭代，Kimi CLI 则完成了从 Python 版到原生二进制版的代际交接。值得注意的是，**多代理架构、沙箱安全、上下文压缩**正在成为下一轮竞争的技术制高点。

---

## 二、各工具活跃度对比

| 工具 | Issues 动态 | PR 动态 | Release | 核心信号 |
|---|---|---|---|---|
| **Claude Code** | 热点 10 条（#91870 达 207 评论） | 仅 2 条（低迷） | 无 | Mods 扩展机制是头号路线图信号；Windows 问题集中 |
| **OpenAI Codex** | 热点 10+ 条（容量故障集中爆发） | 10+ 条合入 | **8 个 alpha** | 发布节奏最密集；TUI 默认行为变更 + 企业网络能力 |
| **Gemini CLI** | 热点 10 条 | **10 条**（6 已合入） | 1 nightly | Subagent 可靠性 + 安全修复活跃 |
| **GitHub Copilot CLI** | 热点 10 条（批量关闭历史 Issue） | 2 条（仅文档） | **2 个版本** | 主实现不开源；响应节奏加快 |
| **Kimi CLI** | 1 条（迁移公告） | 3 条（收尾） | 1 个（最终版） | 仓库归档，交接至 Kimi Code CLI |
| **OpenCode** | **50 条更新** | **50 条更新** | 1 个 | 社区贡献最活跃；问题-修复闭环最快 |
| **Qwen Code** | 热点 10 条 | 10 条 | **3 个**（CLI/Desktop/SDK） | Managed Agent 架构叙事最大；发布质量回归频发 |
| **DeepSeek TUI** | 14 条 | **26 条** | 无 | 维护者高强度修复；CI 健康堪忧（106/130 红） |
| **Pi** | 热点 10 条 | 10 条（9 已合并） | 1 个 | v0.87.0 会话上下文规范化；压缩子系统 bug 集中 |
| **oh-my-pi** | 热点 10 条（429 议题 165+ 评论） | 10 条 | 1 个 | 多模态大幅扩展；成本可观测性贡献突出 |
| **DeepSeek Harness** | 0 | 0 | 无 | 无活动 |

---

## 三、共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **扩展/插件机制** | Claude Code（Mods #91870，207 评论）、Qwen Code（managed extensions）、oh-my-pi（MCP 控制中心）、Copilot（命名空间化 skills，已落地） | Hooks、生命周期钩子、第三方集成接缝是全行业最强诉求 |
| **上下文压缩与会话管理** | Claude Code（#81793 compact 死锁）、Codex（#24948 日志膨胀至 2GB）、Pi（压缩 bug 群）、oh-my-pi（压缩失败控制）、Gemini CLI（/compress 不持久化） | 长会话场景下压缩的正确性、持久化与可恢复性普遍不达标 |
| **内存/磁盘资源泄漏** | Claude Code（macOS 内核泄漏 + Windows 非分页池）、Codex（559GB staging 泄漏）、Copilot（长 resume OOM）、OpenCode（MCP 孤儿进程） | 长时间运行 agent 的资源治理是跨平台共性短板 |
| **沙箱与权限安全** | Qwen Code（工具级 bwrap）、DeepSeek TUI（子代理权限逃逸）、Gemini CLI（策略目录加固）、Codex（Guardian 策略） | 安全边界从“整 CLI”下沉到“单工具/子代理”粒度 |
| **MCP 生态兼容** | Copilot（新版协议握手失败）、OpenCode（孤儿进程治理）、oh-my-pi、Kimi（OAuth scope） | MCP 是问题最密集的集成层，协议版本兼容与进程治理待解 |
| **多代理（Subagent）可靠性** | Gemini CLI（误报成功 P1）、oh-my-pi（启动崩溃回归）、DeepSeek TUI（权限逃逸） | 子代理的挂起检测、状态如实上报、权限隔离 |
| **企业/代理网络环境** | Codex（MITM CA、系统代理）、Gemini CLI（代理解析修复）、Copilot（BYOK headers） | 企业网络穿透是商业化的必经之路 |

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 扩展生态（Mods）、桌面端（Cowork） | 专业开发者 + 桌面用户 | 闭源、hooks/插件开放中；开发在主仓库外进行 |
| **OpenAI Codex** | TUI 体验、企业网络、安全审查（Guardian） | 付费订阅用户（Pro $200）、企业 | Rust 重写、密集 alpha 发布、服务端强依赖 |
| **Gemini CLI** | Subagent、token 效率、AST-aware 读码 | 开发者 + SDK 集成方 | 开源、社区 PR 活跃、安全修复优先级高 |
| **Copilot CLI** | 策略管理、Auto 模式、GitHub 生态 | 企业/组织托管环境 | 闭源实现 + 开放 issue 跟踪，文档型 PR |
| **OpenCode** | 多 provider（Zen）、桌面端、模型路由 | 重视模型自由的开发者 | 开源、问题-修复闭环最快、社区驱动 |
| **Qwen Code** | Managed Agent 平台化、Web Shell、远程开发 | 多工作区/远程/企业部署 | Java 控制面 + Tool Runtime，架构野心最大 |
| **DeepSeek TUI** | 多 provider 适配、配置治理 | 个人开发者 | Rust、维护者主导、依赖面收缩策略 |
| **Pi / oh-my-pi** | 极致 TUI、成本控制、多模态 | 高级用户/极客 | 轻量开源、prompt-cache 优化领先（实测节省 $800/3天级） |

---

## 五、社区热度与成熟度

**第一梯队（生态成熟、社区庞大）**：Claude Code、Codex——issue 讨论量与 👍 数远超其他，但 Claude Code PR 低迷暗示开发重心已移出 GitHub，Codex 则受服务端容量故障拖累。

**第二梯队（快速迭代、社区驱动）**：OpenCode（50 Issue + 50 PR 双高，贡献者当日闭环）、Gemini CLI（PR 质量高、安全意识强）、Qwen Code（版本节奏稳定，但发布质量回归频发）。

**特色梯队（细分深耕）**：Pi/oh-my-pi（成本优化与可观测性贡献突出）、DeepSeek TUI（维护者高强度但 CI 危机）。

**收缩/停滞**：Kimi CLI（主动归档换架构）、DeepSeek Harness（无活动）。

---

## 六、值得关注的趋势信号

1. **扩展性成为平台化分水岭**：Claude Code Mods（207 评论）+ function hooks 承诺、Qwen managed extensions、oh-my-pi MCP 控制中心——CLI 工具正从“产品”演变为“平台”，hooks/插件 API 设计能力将决定生态归属。

2. **多代理架构进入工程深水区**：Qwen 的 Managed Agent 双路径架构（Java 控制面）、Gemini/oh-my-pi 的 subagent 可靠性 bug 群，表明“多代理”从 demo 到生产的瓶颈在于**状态如实上报、权限隔离、挂起检测**。

3. **成本可观测性是隐性刚需**：oh-my-pi 社区实测 prompt-cache 空闲重写 3 天烧 $800，`/usage`、缓存失效诊断等 PR 密集出现——token 级费用归因将成为企业选型的硬指标。

4. **长会话稳定性是共性软肋**：内存泄漏（三平台并发）、会话膨胀（Codex 2GB 日志）、压缩死锁（Claude Code）——重度 agent 用户应建立**定期重启与会话分片**的运维习惯。

5. **Windows 是全行业质量洼地**：Claude Code（Cowork 全链路问题）、Codex（插件 EFS 失败 3 个月未解）、OpenCode（管道多字节损坏）——Windows 用户选型时应显著降低稳定性预期。

6. **服务端可靠性风险上升**：Codex 今日跨模型容量故障、oh-my-pi 的 Antigravity 429 群——订阅制 + 服务端依赖的产品存在单点故障风险，本地/多 provider 路由（OpenCode、Pi 路线）是有效对冲。

7. **静默失败是最高危 bug 类型**：DeepSeek TUI 引擎冻结无日志、oh-my-pi 静默降级、Gemini 误报 GOAL 成功——“失败但不可诊断/被伪装成成功”直接侵蚀 agent 信任，可观测性投入值得所有工具借鉴。

---

*数据来源：各仓库 2026-09-22 公开 GitHub 动态；结论以当日快照为准，建议结合多日趋势交叉验证。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

*数据来源：github.com/anthropics/skills（截至 2026-09-22）*

> 说明：当前数据中 PR 评论数均为 undefined，无法按评论热度严格排序；以下基于 Issue 评论热度、PR 更新活跃度及功能代表性综合评估。

---

## 一、热门 Skills 排行（代表性 PR）

| # | Skill | 作者 | 状态 | 功能与讨论热点 |
|---|-------|------|------|----------------|
| 1 | **skill-creator 触发评估修复** ([#1298](https://github.com/anthropics/skills/pull/1298)) | @MartinCajiao | OPEN | 修复触发评估的误报/漏报、Windows select() 兼容性；关联最热 Issue #556（触发率 0%）与 #1769，是社区最核心的痛点 |
| 2 | **mcp-builder MCP 兼容修复** ([#1742](https://github.com/anthropics/skills/pull/1742)) | @Kuldeeep18 | OPEN | 支持 mcp>=2 的 `streamable_http_client` 及自定义 headers，修复 #1668/#1390 评估打分全零问题 |
| 3 | **pyxel 复古游戏开发** ([#525](https://github.com/anthropics/skills/pull/525)) | @kitao | OPEN | Pyxel 上游作者亲自提交，含确定性 headless 运行与帧检查，长期活跃（3 月至今） |
| 4 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | @4444J99 | OPEN | 覆盖 Testing Trophy、单元/React/E2E 全栈测试方法论，9 月仍活跃更新 |
| 5 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | @PGTBoos | OPEN | 解决 AI 生成文档的孤行、寡妇段落等排版问题，直击“每个 Claude 文档都有此问题”的痛点 |
| 6 | **AWT AI E2E 测试** ([#822](https://github.com/anthropics/skills/pull/822)) | @ksgisang | OPEN | 零代码 E2E 测试生成，赋予 Claude 视觉与浏览器控制能力 |
| 7 | **md2video-audio** ([#1703](https://github.com/anthropics/skills/pull/1703)) | @70v-Yoyo | OPEN | Markdown 直接编译为带真人配音的 MP4 视频（Marp 管线），零成本 |
| 8 | **blast-radius** ([#1776](https://github.com/anthropics/skills/pull/1776)) | @kishormorol | OPEN | 批量/破坏性写操作前的安全检查清单（删行、批量邮件、权限回收），填补“查询正确≠操作正确”的空隙 |

---

## 二、社区需求趋势（来自 Issues）

1. **安全与信任边界**（[#492](https://github.com/anthropics/skills/issues/492)，43 评论，最热）：社区 Skills 冒用 `anthropic/` 命名空间分发，用户呼吁官方命名隔离与签名机制。
2. **组织级共享与分发**（[#228](https://github.com/anthropics/skills/issues/228)）：期待 Skills 在组织内直接共享，替代手动 .skill 文件传输。
3. **评测/触发可靠性**（[#556](https://github.com/anthropics/skills/issues/556)、[#1769](https://github.com/anthropics/skills/pull/1769)）：skill-creator 评估框架长期报 0% 触发率，社区强烈要求修复评估基础设施。
4. **上下文效率**（[#1487](https://github.com/anthropics/skills/issues/1487)）：claude-api skill 单次注入 ~156k tokens 耗尽上下文，反映对 Skill 轻量化、按需加载的需求。
5. **AI 治理与质量门禁**（[#412](https://github.com/anthropics/skills/issues/412)、[#1385](https://github.com/anthropics/skills/issues/1385)）：agent 治理、推理质量门禁等“元能力” Skill 呼声渐起。
6. **与 MCP 生态融合**（[#16](https://github.com/anthropics/skills/issues/16)）：将 Skills 暴露为 MCP 的架构讨论。
7. **记忆压缩**（[#1329](https://github.com/anthropics/skills/issues/1329)）：compact-memory 符号化压缩 agent 状态，节省上下文。

---

## 三、高潜力待合并 Skills（活跃 OPEN PR）

- **[#1298](https://github.com/anthropics/skills/pull/1298)** skill-creator 评估隔离修复 — 修复最核心的工具链问题，9 月仍更新，合并优先级高
- **[#1742](https://github.com/anthropics/skills/pull/1742)** mcp-builder 兼容 mcp>=2 — 修复两个已确认 Issue，路径清晰
- **[#723](https://github.com/anthropics/skills/pull/723)** testing-patterns — 9/21 仍活跃，覆盖面广
- **[#1790](https://github.com/anthropics/skills/pull/1790)** / **[#1765](https://github.com/anthropics/skills/pull/1765)** docx 系列修复 — 小而精准的缺陷修复（rels 缺失、UTF-8 diff），合并阻力小
- **[#525](https://github.com/anthropics/skills/pull/525)** pyxel — 上游维护者提交，质量高

---

## 四、生态洞察（一句话总结）

> **社区最集中的诉求是“让 Skills 可信且可靠”——即修复 skill-creator 评估/触发机制、解决命名空间信任边界安全问题，并推动 Skill 轻量化（避免上下文爆炸）与组织级分发能力。**

---

# Claude Code 社区动态日报 — 2026-09-22

## 1. 今日速览

今日无新版本发布，社区焦点集中在 **Mods 扩展机制**（#91870，207 条评论）——官方确认 function hooks 将在数周内交付。Windows 平台问题持续高发：Cowork 相关的内核内存泄漏、MSIX 自更新失败等 bug 集中活跃。macOS 沙箱超长 ARG_MAX 问题（#73468）已关闭，显示官方在推进修复。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#91870](https://github.com/anthropics/claude-code/issues/91870) Mods - make Claude 10x more extensible** — 207 评论 / 124 👍，今日热度第一。官方 9 月 9 日更新确认 function hooks“数周内”交付，社区反馈持续涌入，是当前最重要的路线图信号。

2. **[#31005](https://github.com/anthropics/claude-code/issues/31005) AGENTS.md 与 .agents/skills/ 支持（已关闭为重复）** — 379 👍 反映强烈诉求：社区自 2025 年 8 月起持续要求采纳 AGENTS.md 标准。已标记 duplicate 关闭，暗示官方可能已有内部方案。

3. **[#66020](https://github.com/anthropics/claude-code/issues/66020) macOS 内核 zone 泄漏（data.kalloc.1024）** — CLI 导致内核内存泄漏，claude.exe 在 ~20GB panic，泄漏速率随 agent 负载从 21/sec 升至 1027/sec。有完整复现，macOS 重度用户需关注。

4. **[#73468](https://github.com/anthropics/claude-code/issues/73468) macOS 沙箱 ARG_MAX 溢出（已关闭）** — 多 git worktree 场景下 Seatbelt profile 内联传参超过 ARG_MAX，所有沙箱命令失败。已关闭，值得观察后续版本是否彻底修复。

5. **[#94198](https://github.com/anthropics/claude-code/issues/94198) CoworkVMService 非分页内存泄漏（Windows）** — ntfs.sys 相关泄漏，重启可清除、关机不能。Cowork 在 Windows 上的稳定性问题又一例。

6. **[#93071](https://github.com/anthropics/claude-code/issues/93071) Cowork Windows: "no Plan9 drive shares mounted"** — device_bash 自 9 月 8 日起完全不可用，重启和更新均无效，持续两周未解。

7. **[#89912](https://github.com/anthropics/claude-code/issues/89912) MSIX 静默自更新失败 0x80070020** — 更新后应用永久无法启动。今日 #94432 作者主动更正：CoworkVMService 并非元凶，实为同一 MSIX 容器创建失败，两 issue 已关联。

8. **[#81793](https://github.com/anthropics/claude-code/issues/81793) 会话过大后无产品内恢复手段** — `/compact` 本身需要成功发送完整对话才能执行，恰恰是失败的请求。设计层面的死锁问题，值得架构关注。

9. **[#87631](https://github.com/anthropics/claude-code/issues/87631) 快速双击 Esc 清空提示词且不可恢复（已关闭）** — 输入丢失无法通过 Ctrl+Y 或历史找回，且行为不可禁用。TUI 交互安全类典型问题。

10. **[#94619](https://github.com/anthropics/claude-code/issues/94619) docx/pptx/xlsx skills 在 Windows 报 AF_UNIX 错误** — 第三次重提，前两次均被 stale bot 关闭无人triage，反映自动关闭机制误伤真实 bug 的流程问题。

## 4. 重要 PR 进展

过去 24 小时仅 2 个 PR 更新：

1. **[#95423](https://github.com/anthropics/claude-code/pull/95423) [OPEN] diff mod：只读 shell 命令跳过 diff 重新拉取** — Mods 生态的官方维护 PR：diff 面板原在每次 Bash/PowerShell 调用后都重新拉取，现在读取 `isReadOnly` 标志，`ls`/`git status`/`cat` 等只读命令不再触发刷新，优化性能。

2. **[#95932](https://github.com/anthropics/claude-code/pull/95932) [CLOSED] 新增 claude.ai GitHub 连接问题 issue 模板** — 社区贡献的 issue 表单，含 `github-integration` 标签与诊断信息采集，已被关闭（未合入）。

> PR 活动整体低迷，与 Mods 相关的官方开发似乎在主仓库之外进行。

## 5. 功能需求趋势

- **扩展性 / Mods 生态**：#91870 一骑绝尘，hooks + 插件机制是社区最期待的方向，官方已承诺数周内交付。
- **开放标准兼容**：AGENTS.md 与 .agents/skills/ 支持（379 👍），社区要求采纳行业通用 agent 配置标准。
- **会话管理健壮性**：大 session 恢复（#81793）、跨会话消息（#86279）、session 泄漏（#94278）等，长会话场景的稳定性诉求集中。
- **无障碍 / UI 定制**：Code tab 应用 dyslexia-friendly 字体（#83867，已关闭）、TUI 交互细节改进（#95733 引用回复行为）。
- **桌面端集成**：Desktop / Cowork 相关 issue 占比显著，包括沙箱、自更新、菜单功能等。

## 6. 开发者关注点

- **Windows 是当前问题重灾区**：Cowork VM 内核泄漏、Plan9 挂载失败、MSIX 更新死锁、statusLine bash 并发竞态（#95755）、skills 的 AF_UNIX 不兼容——横跨安装、运行、更新全链路。
- **内存泄漏类 bug 多平台并发**：macOS 内核 zone 泄漏（#66020）、Windows 非分页池泄漏（#94198）、Desktop EventEmitter 泄漏（#92785），长时间运行 agent 的用户建议定期重启。
- **权限与安全边界**：explicit ask 规则不生效（#79771）直接影响安全工作流，值得权限重度用户验证。
- **issue triage 流程受质疑**：多个高质量 bug 报告（#94619 等）被 stale bot 自动关闭为 NOT_PLANNED，作者被迫重提，社区对自动关闭机制不满。
- **会话体积管理**：Chrome 截图双倍存储导致 resume ECONNRESET（#83206）、大 session 无法 compact（#81793），使用浏览器扩展截图的用户应留意 session 文件膨胀。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-22 | 数据来源：github.com/openai/codex**

---

## 一、今日速览

Codex CLI 发布节奏密集，24 小时内推出 8 个 alpha 版本（0.157.0-alpha.1 至 alpha.4 等），开发主线持续推进。Issue 侧最突出的信号是 **"Selected model is at capacity" 容量错误集中爆发**（多条新 Issue 涌入），同时 Windows 平台的插件、浏览器集成和模型选择器问题持续发酵。PR 方面，团队集中合入了 TUI 体验优化（全屏 transcript 默认开启、daemon 自动启动）和网络代理能力增强。

---

## 二、版本发布

24 小时内共发布 8 个 alpha 版本：

| 版本 | 链接 |
|---|---|
| rust-v0.157.0-alpha.4 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.157.0-alpha.4) |
| rust-v0.157.0-alpha.3 / .2 / .1 | 同上系列 |
| rust-v0.156.0-alpha.17 / .16 / .14 | 同上系列 |
| rust-v0.155.0-alpha.16.1 | 同上系列 |

Release notes 均为简短占位文本，具体变更需参照对应 PR。从 PR 活动推断，0.157.x 主要涵盖 TUI 默认行为调整（全屏 transcript、daemon 自动启动转正）、网络代理 MITM CA 支持、Guardian 策略配置等。

---

## 三、社区热点 Issues

1. **[#25220](https://github.com/openai/codex/issues/25220)** — Windows 上捆绑插件（Computer Use、Browser、Chrome、LaTeX）全部不可用，根因是 copyfile 在 EFS 加密的 WindowsApps 文件上失败。43 条评论，持续近 3 个月未解，是 Windows 用户最大痛点。

2. **[#24948](https://github.com/openai/codex/issues/24948)** — 会话日志因反复 compaction 和原始工具输出膨胀至 700MB-2GB。31 条评论，长时间使用场景下的严重磁盘问题。

3. **[#34026](https://github.com/openai/codex/issues/34026)** — Windows 桌面版已完成的线程仍显示 "thinking"，新消息只能本地排队无法开始新回合。18 条评论，核心工作流受阻。

4. **[#45317](https://github.com/openai/codex/issues/45317)** — Chrome 浏览器集成拒绝 API-key 认证（`unsupported Codex auth method: apikey`），使用 API key + 自定义 provider 的用户浏览器控制完全失效。与 [#45341](https://github.com/openai/codex/issues/45341) 为同根问题，值得合并关注。

5. **[#46980](https://github.com/openai/codex/issues/46980)** — Pro（$200）用户连续 30+ 小时遭遇 "Selected model is at capacity"。**今日多个新 Issue（[#47180](https://github.com/openai/codex/issues/47180)、[#47181](https://github.com/openai/codex/issues/47181)、[#47184](https://github.com/openai/codex/issues/47184)）报告相同问题**，跨 GPT-6/5.6/5.5 多模型，疑似服务端容量事件，建议关注官方状态页。

6. **[#39421](https://github.com/openai/codex/issues/39421)** — Marketplace 自动升级 41 天泄漏 **4,972 个 staging 目录共 559 GB**，清理 janitor 仅覆盖 curated clones 不覆盖 marketplaces。已知最大案例。

7. **[#47166](https://github.com/openai/codex/issues/47166) / [#47152](https://github.com/openai/codex/issues/47152)** — GPT-5.6 Luna 从模型选择器和 effective model catalog 中消失，直连执行却正常。今日集中出现，疑似模型目录同步故障。

8. **[#47171](https://github.com/openai/codex/issues/47171)（已关闭）/ [#47163](https://github.com/openai/codex/issues/47163) / [#47001](https://github.com/openai/codex/issues/47001)** — cyber_policy 安全检查误报集中出现，良性 C++/RTC 讨论和授权系统维护被拦截，且一旦触发会污染后续整个会话。

9. **[#16970](https://github.com/openai/codex/issues/16970)** — 统一 exec 缓存过期的 `arg0` 会话路径导致 ENOENT，需重启应用恢复，影响 Windows + WSL2 工具调用。

10. **[#46947](https://github.com/openai/codex/issues/46947)** — Python SDK 0.154.0/0.155.1 在 shell-required 回合中以零 `commandExecution` 事件完成，影响基于 app-server 的集成方，SDK 可靠性问题值得关注。

---

## 四、重要 PR 进展

1. **[#47178](https://github.com/openai/codex/pull/47178)** — 全屏 transcript 转为默认开启（`tui.fullscreen_transcript=true`），TUI 界面重大默认行为变更。

2. **[#47179](https://github.com/openai/codex/pull/47179)** — `daemon_auto_start` 从实验性转正并默认启用，加速交互式启动。

3. **[#47185](https://github.com/openai/codex/pull/47185)** — 允许 fork 被其他应用锁定的会话（`f`/`F` 快捷键），改善多端并发使用体验。

4. **[#47132](https://github.com/openai/codex/pull/47132)** — 网络代理支持调用方自定义 MITM CA（`network.mitm_ca`），企业网络环境重要能力。

5. **[#47142](https://github.com/openai/codex/pull/47142)** — 独立 web search 遵循系统代理设置，修复绕过代理的问题。

6. **[#47130](https://github.com/openai/codex/pull/47130)** — 从 `gpt-5.6-sol` 移除 `ultrafast` 服务层级，仅保留 `priority`（Fast），模型服务策略调整。

7. **[#47158](https://github.com/openai/codex/pull/47158)** — 加固 gateway OAuth 凭据持久化与错误脱敏，防止授权 URL 中的秘密泄漏。

8. **[#47162](https://github.com/openai/codex/pull/47162)** — Guardian v2 分类器请求应用 workspace 路由与账号绑定，与今日多条安全误报 Issue 相关，或有助于改进审查准确性。

9. **[#47125](https://github.com/openai/codex/pull/47125)** — Guardian 审查支持额外策略配置（`auto_review.extra_policy`），企业租户可注入自定义策略文本。

10. **[#47122](https://github.com/openai/codex/pull/47122)** — OpenAI 文件 blob 上传超时从 60 秒提升至 5 分钟，改善大文件上传成功率。

其他值得留意：[#47155](https://github.com/openai/codex/pull/47155)（忽略恢复线程后的过期关闭通知，或与 #34026 相关）、[#47118](https://github.com/openai/codex/pull/47118)（Code Mode 工具消息支持模型目录覆盖）。

---

## 五、功能需求趋势

- **认证与自定义模型集成**：API-key 用户在浏览器/Chrome 集成中被二等对待（#45317、#45341），社区要求 auth 方式对齐。
- **配额透明度与控制**：本地细粒度配额规则（#43560）、周用量窗口不随付费周期重置且购买时未披露（#39398）。
- **凭据安全**：本地敏感信息/密钥存储（#22029）。
- **无障碍**：语音听写免费化诉求（#46701）。
- **代理/企业网络**：PR 侧 MITM CA、系统代理支持的密集合入表明企业网络场景是当前投入重点。

---

## 六、开发者关注点

1. **服务容量可靠性**：今日最紧急——"model is at capacity" 跨模型、跨订阅层级大面积出现，且重试与换模型均无效。
2. **Windows 平台质量欠账**：插件加载失败（#25220）、线程卡死（#34026）、浏览器路由丢失（#43673）、沙箱策略矛盾（#47182）等问题长期悬而未决。
3. **磁盘资源泄漏**：会话日志膨胀（#24948）与 marketplace staging 泄漏（39421，559 GB）反映清理机制覆盖不全。
4. **安全审查误报**：cyber_policy 误报会污染整个会话且难以恢复（#47171、#47001），影响合法运维与开发场景。
5. **SDK/API 可靠性**：Python SDK 事件缺失（#46947）对构建在 app-server 之上的集成方是阻断性问题。

---
*本报告基于 GitHub 公开数据自动整理，版本号与 Issue 状态以仓库实时数据为准。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-09-22

## 1. 今日速览

今日发布 v0.62.0-nightly 版本，核心修复集中在代理环境解析和 ACP 协议权限流程。社区讨论焦点仍是 **Subagent 可靠性**——包括 MAX_TURNS 中断被误报为成功（P1）和通用 agent 挂起问题。PR 侧活跃度高，多位贡献者提交了企业策略目录安全加固、并发文件写入原子化等高质量修复。

## 2. 版本发布

**v0.62.0-nightly.20260922.gd5b3e3acc** ([Release](https://github.com/google-gemini/gemini-cli/releases))
- `fix(core)`: 规范化 proxy-agent 的 esbuild CJS/ESM interop，修复环境代理解析（[PR #29401](https://github.com/google-gemini/gemini-cli/pull/29401)）
- `fix(cli)`: ACP 模式下在 `request_permission` 之前先发出 `tool_call` pending 更新，修复工具确认流程（[PR #29439](https://github.com/google-gemini/gemini-cli/pull/29439)）

## 3. 社区热点 Issues

1. **#22323 Subagent 达到 MAX_TURNS 后误报 GOAL 成功** ([链接](https://github.com/google-gemini/gemini-cli/issues/22323)) — P1 bug，13 条评论。中断被伪装成成功会直接误导主 agent 的决策，是可信度层面的核心缺陷。
2. **#21409 Generalist agent 无限挂起** ([链接](https://github.com/google-gemini/gemini-cli/issues/21409)) — P1，8 👍。简单如创建文件夹的操作也会挂起一小时，用户只能手动禁止 subagent 规避。
3. **#21983 Browser subagent 在 Wayland 下失败** ([链接](https://github.com/google-gemini/gemini-cli/issues/21983)) — P1，Linux Wayland 用户被排除在浏览器自动化之外。
4. **#22186 get-shit-done output hook 导致崩溃** ([链接](https://github.com/google-gemini/gemini-cli/issues/22186)) — P1，输出摘要阶段反复崩溃。
5. **#26525 Auto Memory 需确定性脱敏并减少日志** ([链接](https://github.com/google-gemini/gemini-cli/issues/26525)) — 安全问题：transcript 内容先进入模型上下文后才脱敏，密钥存在泄露窗口。
6. **#29290 系列：嵌套 .gitignore 尾斜杠匹配错误** — 已由 [PR #29323](https://github.com/google-gemini/gemini-cli/pull/29323) 关闭修复，今日落地。
7. **#24246 超过 128 个工具触发 400 错误** ([链接](https://github.com/google-gemini/gemini-cli/issues/24246)) — MCP 多工具场景下的实际瓶颈，社区期待智能工具裁剪。
8. **#21968 Gemini 主动使用 skills/sub-agents 不足** ([链接](https://github.com/google-gemini/gemini-cli/issues/21968)) — 自定义技能几乎从不被自动调用，影响整个技能生态的价值。
9. **#21335 /compress 结果不会持久化到 session 文件** ([链接](https://github.com/google-gemini/gemini-cli/issues/21335)) — resume 后压缩效果丢失，token 成本回升。
10. **#22745 AST-aware 文件读取/搜索/映射评估 EPIC** ([链接](https://github.com/google-gemini/gemini-cli/issues/22745)) — 战略方向：用 AST 精确读取方法边界，减少 token 浪费。

## 4. 重要 PR 进展

1. [#29401](https://github.com/google-gemini/gemini-cli/pull/29401) ✅ — 修复企业代理环境下 https-proxy-agent 打包后构造函数解析失败，已进入 nightly。
2. [#29439](https://github.com/google-gemini/gemini-cli/pull/29439) ✅ — ACP 模式权限确认前先推送 pending 状态，改善 IDE 客户端体验。
3. [#29323](https://github.com/google-gemini/gemini-cli/pull/29323) ✅ — 修复嵌套 .gitignore 中 `build/` 等纯尾斜杠 pattern 被错误锚定的问题。
4. [#29242](https://github.com/google-gemini/gemini-cli/pull/29242) ✅ — 停止用 `includes('401')` 判断认证错误，避免端口号误触发重新登录。
5. [#29244](https://github.com/google-gemini/gemini-cli/pull/29244) 🔄 — P1：工具文件写入原子化 + 同路径写入串行化，修复并发 replace 互相覆盖却双双报成功的静默丢编辑问题。
6. [#29328](https://github.com/google-gemini/gemini-cli/pull/29328) 🔄 — P1 安全修复：a2a-server 尊重 `LOG_LEVEL` 并将凭据排除出日志。
7. [#29332](https://github.com/google-gemini/gemini-cli/pull/29332) 🔄 — 限制单次调用的 sandbox 扩展递归次数，修复 stub 工具可导致的堆内存耗尽崩溃。
8. [#29333](https://github.com/google-gemini/gemini-cli/pull/29333) / [#29336](https://github.com/google-gemini/gemini-cli/pull/29336) 🔄 — 企业策略目录权限校验扩展到用户级和 workspace 级目录，安全加固。
9. [#29327](https://github.com/google-gemini/gemini-cli/pull/29327) 🔄 — SDK `AgentShellOptions` 的 `env` 和 `timeoutSeconds` 此前被完全忽略，超时不生效会导致永久挂起。
10. [#29440](https://github.com/google-gemini/gemini-cli/pull/29440) 🔄 — web-fetch 引用定位改用 UTF-8 字节偏移，修复中文等多字节文本引用错位。

## 5. 功能需求趋势

- **Subagent 可靠性与可观测性**：最密集的方向（挂起、误报成功、轨迹分享 `/chat share`、bugreport 缺 subagent 上下文）
- **Token 效率与上下文管理**：AST-aware 读取、"Tactful Extraction" 精准读码、持久化任务追踪替代 WriteToDo、`/compress` 持久化
- **安全与沙箱**：零依赖 OS 沙箱、确定性脱敏、策略目录权限、破坏性命令防护（`git reset --force` 等）
- **原生 Bash 能力利用**：发挥 Gemini 3 的 POSIX 工具链原生优势（#19873）
- **浏览器/终端体验**：Wayland 支持、browser session 锁恢复、终端 resize 无闪烁渲染

## 6. 开发者关注点

1. **并发安全**：并行工具执行的同路径文件写入竞态是近期最被重视的静默数据丢失源
2. **挂起问题**：generalist agent 挂起、交互式 prompt 卡死、SDK 超时不生效——"永远等待"是用户最挫败的体验
3. **状态误报**：中断/失败被报告为成功（MAX_TURNS、`Exit Code: null`）削弱对 agent 的信任
4. **配置不生效**：settings.json 覆盖（如 maxTurns）被 Browser Agent 忽略，symlink agent 不识别
5. **日志卫生**：凭据入日志、Auto Memory 过度重试低价值会话，企业用户尤为敏感

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-09-22

## 📌 今日速览

过去 24 小时内 Copilot CLI 连发两个修复版本（v1.0.88-1 / v1.0.88-0），重点修复了权限授权持久化与沙箱网络拒绝问题，并新增 Ghostty/WezTerm 终端通知支持。社区方面，昨日集中关闭了大量历史 Issue（如 WSL 启动卡死、终端渲染损坏等），同时新增多个与 MCP 协议兼容性和策略管理相关的开放 Issue，值得企业用户关注。

---

## 🚀 版本发布

### v1.0.88-1（修复版本）
- 修复 managed-settings 刷新失败时 `/allow-all` 被丢失的问题；对缺失路径仅记住精确的会话级授权，不再授予其父目录权限。精确授权可通过 `/list-dirs` 查看，`/reset-allowed-tools` 可清除
- 修复代理隧道失败导致的沙箱网络误拒绝

### v1.0.88-0（功能版本）
- **新增**：为 Ghostty 和 WezTerm 直连会话提供可选的 OSC 777 终端通知
- **改进**：
  - 支持命名空间化的自定义 skills，技能发现时可忽略指定 skill 目录
  - MCP 与插件视图改为显示服务器展示名称和插件描述，状态更清晰
  - Resume 相关体验优化

### v1.0.87（2026-09-21）
- 为 Auto 路由模式新增用户级和托管启动默认值，支持严格模式及用户可覆盖的组织策略
- 同一模式下连续 steering 提示合并为一条待处理消息；空输入时按 Up 键可取回编辑（含粘贴文本）

---

## 🔥 社区热点 Issues（精选 10）

1. **#3385** — [WSL 下 copilot cli 1.0.49 升级后无法运行](https://github.com/github/copilot-cli/issues/3385)（14 评论 / 9 👍，已关闭）
   Windows/WSL 用户升级后 CLI 卡死的经典痛点，社区讨论热烈，现已关闭，推测已修复或迁移处理。

2. **#4699** — [长 `--resume` 会话 OOM 崩溃，且 crash dump 写入用户 cwd](https://github.com/github/copilot-cli/issues/4699)（OPEN）
   14 小时内 3 次在 4 GiB 堆上限崩溃，且诊断报告污染工作目录——这是当前仍开放的高严重性稳定性问题，长会话用户需警惕。

3. **#4218** — [允许用户配置 Auto 模式可用的模型池](https://github.com/github/copilot-cli/issues/4218)（16 👍，OPEN）
   最高赞的开放功能需求：Auto 模式模型选择不可控导致成本和行为难以预测，呼声强烈。

4. **#2486** — [MCP server 被策略拦截（个人 Pro+ 账户）](https://github.com/github/copilot-cli/issues/2486)（8 评论，已关闭）
   个人账户误触组织策略的问题，用户反映只能靠 hack 绕过，已关闭但反映策略判定逻辑曾存在缺陷。

5. **#1313** — [Session Branching（会话分支）](https://github.com/github/copilot-cli/issues/1313)（13 👍，已关闭）
   高赞功能需求：从当前会话分支出继承完整历史的新会话，同时保留原会话。已关闭，可能已排期或实现。

6. **#3399** — [BYOK 支持自定义 HTTP headers](https://github.com/github/copilot-cli/issues/3399)（14 👍，已关闭）
   企业多租户场景（X-Tenant-ID 等）的刚需，BYOK 用户的核心诉求。

7. **#3749** — [终端流式渲染损坏：字符重复/截断](https://github.com/github/copilot-cli/issues/3749)（8 👍，已关闭）
   影响所有流式输出（含 thinking 阶段）的渲染 bug，影响面广。

8. **#4892** — [扩展宿主与所有 MCP 服务器每小时被重新枚举](https://github.com/github/copilot-cli/issues/4892)（OPEN，triage）
   作者诚实更正了早期错误数据后重新验证了该行为，涉及会话内资源加载周期，值得架构层面关注。

9. **#4888** — [MCP client 在成功 `server/discover` 后仍发送旧版 initialize](https://github.com/github/copilot-cli/issues/4888)（OPEN）
   双协议时代 MCP SDK 的兼容性问题，新协议（2026-07-28）服务器会正确拒绝旧请求，导致连接失败。

10. **#4926** — [Atlassian MCP OAuth 失败：redirect_uri 端口不匹配](https://github.com/github/copilot-cli/issues/4926)（已关闭）
    昨日新报、当日关闭，macOS 企业环境（Zscaler）下 OAuth 回调配置问题，响应速度值得肯定。

---

## 🔀 重要 PR 进展（共 2 条）

1. **PR #4739** — [docs: 提出终端自有的 macOS 通知方案](https://github.com/github/copilot-cli/pull/4739)（@anujb-msft）
   文档化 macOS 通知点击问题，并提供 MIT 协议的终端通知参考实现与可移植回归测试。明确为参考提案，不改动 CLI 本体。与 v1.0.88-0 的 OSC 777 通知功能方向呼应。

2. **PR #4770** — [文档化 WebSocket responses 的退出开关](https://github.com/github/copilot-cli/pull/4770)（@1fanwang）
   当网络封锁 WebSocket 或出现 `400 input item ID does not belong to this connection` 错误时，存在可用的回退配置但此前未文档化——对受限网络环境用户很有价值。

> 注：过去 24 小时仅 2 条 PR 更新，本仓库主实现代码不开源，PR 以文档提案为主。

---

## 📈 功能需求趋势

1. **BYOK / 模型可控性**：自定义 headers（#3399）、Auto 模式模型池配置（#4218）、effort 级别尊重用户设置（#3119）——用户对模型路由的透明度和控制权诉求集中。
2. **MCP 生态兼容性**：新版 MCP 协议握手（#4888）、OAuth 流程（#4926）、BigInt 序列化（#4211）、策略拦截误判（#2486）——MCP 是当前问题最密集的领域。
3. **企业策略与权限管理**：组织级细粒度工具策略（#1971）、策略驱动的插件启用失败（#4837）、`--yolo` 被 pre-auth 窗口吞掉（#4844）——托管环境下策略生效时序是持续痛点。
4. **会话管理增强**：会话分支（#1313）、长会话内存稳定性（#4699）、提示队列卡住（#4705）。
5. **可配置性与共享**：symlink 支持（#3264）、插件内嵌 instruction 文件（#2727）、命名空间化 skills（已在 v1.0.88-0 落地）。

---

## ⚠️ 开发者关注点

- **稳定性**：长 `--resume` 会话 OOM（#4699）尚未解决，重度用户建议控制会话长度；诊断报告写入 cwd 的问题也影响 git 工作区清洁度。
- **沙箱网络**：v1.0.88-1 修复了代理隧道误拒绝，但 Linux 沙箱对 `slirp4netns`/namespace 的依赖（#4853）在企业受限主机上仍有坑，override 环境变量此前未文档化。
- **渲染体验**：希伯来语/阿拉伯语 RTL 显示错误（#3704）仍开放，国际化用户注意。
- **大仓库性能**：15 万文件仓库 @mention 延迟超 5 秒（#3469），超大 monorepo 用户需有预期。
- **积极信号**：昨日团队集中关闭了大量历史 Issue，且新报的 #4926 当天即关闭，响应节奏明显加快；OSC 777 通知和 skills 命名空间化表明终端生态适配在持续推进。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-09-22 | 数据来源：MoonshotAI/kimi-cli**

---

## 1️⃣ 今日速览

今日最重要的动态：**Kimi CLI（本仓库）正式宣布停止维护并归档**，官方发布公告引导用户迁移至新一代终端 AI agent——**Kimi Code CLI**（基于原生二进制重构）。团队发布了最终版本 **1.51.0**，完成归档前的收尾工作。

---

## 2️⃣ 版本发布

### v1.51.0（最终版本）🪦
- **归档公告**：仓库正式归档，指向 [Kimi Code CLI](https://github.com/MoonshotAI/kimi-code)
- **版本收尾**：将当前 release notes 移至 1.51.0（CHANGELOG、双语文档及 breaking changes）；`packages/kimi-code` stub 版本同步至 1.51.0，不再依赖 `kimi-cli`
- 相关 PR：[#2659](https://github.com/MoonshotAI/kimi-cli/pull/2659)、[#2660](https://github.com/MoonshotAI/kimi-cli/pull/2660)

---

## 3️⃣ 社区热点 Issues（过去 24 小时共 1 条）

### ⭐ #2661 📢 Kimi CLI 停止维护，请迁移至 Kimi Code CLI [OPEN]
- **作者**：@RealKai42 | 👍 0 | 💬 0
- **为什么重要**：这是决定所有现有用户去向的官方迁移公告。Kimi CLI（Python 版）停更归档，由同团队打造的下一代终端 AI agent **Kimi Code CLI** 接棒，重构为原生二进制。用户需尽快评估迁移方案。
- **社区反应**：发布仅一天，暂无评论，预计后续会有较多迁移咨询。
- 链接：[MoonshotAI/kimi-cli Issue #2661](https://github.com/MoonshotAI/kimi-cli/issues/2661)

---

## 4️⃣ 重要 PR 进展（过去 24 小时共 3 条）

| PR | 状态 | 说明 |
|---|---|---|
| [#2659](https://github.com/MoonshotAI/kimi-cli/pull/2659) 归档仓库并指向 Kimi Code CLI | ✅ CLOSED | 归档前最后准备：更新 README、文档站、安全/贡献政策及 PyPI 元数据（归档后将无法更新） |
| [#2660](https://github.com/MoonshotAI/kimi-cli/pull/2660) bump 至 1.51.0 | ✅ CLOSED | 最终发布版本，整理双语 changelog，解除 stub 包对 kimi-cli 的依赖 |
| [#1625](https://github.com/MoonshotAI/kimi-cli/pull/1625) feat(mcp): MCP OAuth `--scope` 选项 | ⚠️ OPEN | 为 MCP server 配置增加可重复的 OAuth scope 支持，基于 upstream main 1.50.0、FastMCP 3.2.4 / MCP SDK 1.27.1。**注意：仓库归档后此 PR 可能无法合并，作者或需迁移至新仓库** |

---

## 5️⃣ 功能需求趋势

- **MCP 生态增强**：唯一的活跃功能 PR 聚焦 MCP OAuth scope 粒度控制与上游 auth 流程修复，反映社区对 **MCP 鉴权灵活性**的持续需求
- **迁移与新架构**：随着归档公告发布，社区关注点将整体转向 **Kimi Code CLI**（原生二进制架构），包括性能、安装体验与功能对等性

---

## 6️⃣ 开发者关注点

1. **迁移成本**：Python 版 → 原生二进制版的迁移路径、配置兼容性是近期用户最可能的痛点，建议关注 [Kimi Code CLI 仓库](https://github.com/MoonshotAI/kimi-code) 的迁移指南
2. **未合并 PR 的去向**：如 #1625 等 OPEN PR 随仓库归档将陷入停滞，贡献者需确认是否在新仓库重新提交
3. **静态资源冻结**：归档后 README、文档站、PyPI 元数据均无法更新，遇到问题时需以新仓库为准

---
*📌 提示：kimi-cli 仓库即将归档，后续动态请关注 [MoonshotAI/kimi-code](https://github.com/MoonshotAI/kimi-code)。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-22

## 📌 今日速览

今日发布 **v1.18.32**，修复 Bedrock 图片附件与 Together AI 流式用量上报问题。社区活跃度高：50 条 Issue 与 50 条 PR 更新，焦点集中在 **MCP 孤儿进程治理**、**SSE 流解析健壮性** 和 **V2 桌面端体验**（文件选择器 IPC 失败、内嵌浏览器 Cookie 不持久化）。多位贡献者（@argszero、@rekram1-node 等）当日提交高质量修复 PR，问题响应速度值得关注。

---

## 🚀 版本发布

### v1.18.32
**Core 修复：**
- 修复 Bedrock 图片附件 hoisting 逻辑，现仅对 Claude、Nova、Llama 4 模型生效（此前误对不支持的模型提升附件导致失败）
- 修复 Together AI 流式 usage 上报

**社区贡献者：** @dc85
- docs: 为 Zen 添加 DeepSeek V4.1 Flash 文档 (#49897)
- feat: 为 Zen 添加 Grok 4.7

---

## 🔥 社区热点 Issues

**1. [#6680] [FEATURE] 桌面端查看已归档会话** — 👍 27 | 💬 41
长盛不衰的功能请求（1月至今），要求侧边栏 `...` 菜单增加归档会话入口。评论数与点赞数均居榜首，是桌面端 UX 最强诉求。

**2. [#50153] 桌面端 Windows 上“图片和文件”选择器无法打开（IPC handler 失败）** — 💬 3 | 👍 3
Composer `+` 菜单触发原生文件选择器时报 `Desktop IPC handler failed`，主进程 handler 在弹窗前抛错。直接阻断 Windows 桌面用户附件上传，9/20 新报，优先级高。

**3. [#50363] MCP：会话结束后本地 MCP 孤儿进程累积** — 💬 2
`npx` 启动的本地 MCP server 在会话关闭后不被终止、被重挂到 PID 1，跨天累积。已有对应修复 PR #50509（见下文），问题-修复闭环迅速。

**4. [#43845] [2.0] 服务启动时按项目目录各生成一套本地 MCP server** — 💬 3
目录中有 53 个项目时启动即生成 106 个 MCP 进程，资源放大效应明显。V2 服务架构的资源治理问题，需关注后续设计走向。

**5. [#50314] openai-compatible 流遇非对象 SSE 载荷（`data: null`）中止整个运行** — 💬 2 | 👍 1
网关注入 `data: null` 即导致所有工具调用步骤失败。流解析健壮性缺陷，已有修复 PR #50508。

**6. [#50401] `GET /api/session?limit=5000` 因路径含 URL 而返回 500** — 💬 2
单条脏数据（session directory 非文件系统路径）导致整个会话列表 API 崩溃、Web UI 列表空白。当日已有修复 PR #50511。

**7. [#50458] Bash 工具 stdout/stderr 管道损坏多字节/长输出（数据完整性）** — 💬 3
Windows PowerShell 环境下长输出与 UTF-8 多字节字符被管道截断损坏，直接影响 Agent 对命令输出的理解准确性，属于核心工具链完整性问题。

**8. [#50382] 桌面端内嵌浏览器从不持久化 Cookie** — 💬 2
Google 等登录态每次重启即失效，登录仅存活于内存。影响工作流连续性的高频痛点。

**9. [#50467] deepseek-v4.1-flash 报 Bad Request** — 💬 3 | 👍 1
恰逢新版本刚加入 DeepSeek V4.1 Flash 文档，模型即报错，疑似模型配置/接入问题，值得关注是否与 @dc85 的 PR 相关。

**10. [#49057] [user_blocked] Muse Spark 1.3 Free 经 Zen 访问受限且无申诉通道** — 💬 4
访问被限制却无申诉路径，涉及 Zen 平台治理与用户体验，平台侧流程问题值得官方回应。

*其他值得留意：#50498（WSL2 无法启动 2.0.12）、#50486（curl 自升级跨文件系统非原子）、#50203（Termux 原生运行 V2 的积极反馈）。*

---

## 🔧 重要 PR 进展

**1. [#50509] fix: teardown 时终止整个 MCP server 进程树** — @argszero
修复 `npx -y <server>` 场景下 stdio transport 只杀 launcher 不杀子进程的问题，直接闭环 #50363。

**2. [#50508] fix: 忽略非对象 SSE keep-alive 帧** — @argszero
`sseFraming` 此前只丢弃空帧和 `[DONE]`，现在 `data: null` 等 keep-alive 帧不再击穿事件解码器。修复 #50314。

**3. [#50511] fix: 保证含异常 directory 的旧会话可读** — @argszero
`directoryColumn.fromDriver` 增加校验降级，单条脏数据不再让整个会话列表 500。修复 #50401。

**4. [#50506] feat: 实验性评估 API** — @rekram1-node
在 `@opencode/ai/experimental` 下新增类型化评估 API 与 Effect 客户端，接入 TypeSafe AI 与 OpenCode Zen。为模型评估/回归测试铺路，战略意义重大。

**5. [#50504] fix: 保留 Vertex function call IDs** — @rekram1-node
移除对 Vertex Gemini function call/response ID 的历史性剥离，重录全部 provider cassettes。技术考古式修复，说明 Vertex 曾拒绝这些字段但现已支持。

**6. [#50507] fix: 禁用 keepAliveTimeout 防止大响应被腰斩** — @tianyang2026
Bun 默认 5s keepAliveTimeout 会在慢客户端（<1MB/s）场景下切断响应体，禁用后大响应可完整送达。

**7. [#50492] fix: codemode 内建函数参数按 JS 语义强制转换** — @rekram1-node
`indexOf(target, "1")` 不再抛 TypeError，对齐 JS 原生 coerce 行为，降低模型生成代码的踩坑率。

**8. [#50468] feat: 置信度门控的模型分层路由（`jev` 配置）** — @n24q02m
基于置信度在模型层级间动态路由，关联 #34370 意图路由讨论。属探索性成本优化方向（已关闭，或待重新设计）。

**9. [#50499] fix: 空闲清理时保留 pending 的人类等待** — @jamie-dit
修复位置不活跃清扫在 1 小时无活动后中断等待用户确认/权限的会话。修复 #48999。

**10. [#50471] fix: 防止快速进程退出时 shell 工具挂起** — @holny
用 `Latch` 协调输出 drain fiber 与 exit 竞态，确保 abort/timeout/exit 各路径下输出完整收集。

*已合并闭环亮点：#50495（子会话 prompt cache 亲和）、#50487（AI SDK 路由补齐 session HTTP hooks）、#50466（本地插件解析 scoped 包）、#50489（生成器参数绑定时机对齐 JS）。*

---

## 📈 功能需求趋势

1. **进程/资源生命周期治理**：MCP 孤儿进程（#50363、#43845、#38564）成为 V2 最集中的抱怨，社区期望“启动多少、关闭多少”的严格配对。
2. **移动/边缘环境支持**：Termux（#36081、#50203）呼声持续，且已有用户验证 V2 可原生运行，官方支持值得提上日程。
3. **桌面端体验补全**：归档会话入口（#6680）、Plan/Build 切换、文件选择器（#50153）、浏览器 Cookie 持久化——桌面端功能矩阵与 TUI 差距是长期主题。
4. **新模型接入**：Grok 4.7、DeepSeek V4.1 Flash 已入 Zen，QwenCloud 国际版（#43067）在请求中。
5. **流式与协议健壮性**：SSE 非对象帧、大响应截断、流式事件缺失（#50285），OpenAI 兼容生态的兼容性边界持续受压。
6. **评估与路由智能化**：实验性评估 API（#50506）与置信度路由（#50468）显示项目向模型质量度量与成本优化延伸。

---

## ⚠️ 开发者关注点

- **Windows 仍是重灾区**：端口不释放（#32932）、管道多字节损坏（#50458）、IPC 失败（#50153）、更新中断会话（#50470），Windows 桌面/CLI 路径的回归测试覆盖明显不足。
- **计费信任问题**：内容过滤器拦截输出但仍全额计费（#35643），以及 Zen 封禁无申诉通道（#49057），涉及平台信任，建议官方尽快明确政策。
- **升级可靠性**：curl 自升级跨文件系统非原子（#50486）、更新打断进行中会话（#50470）——自动更新需保证原子性与会话安全。
- **旧数据容错**：#50401 表明单条异常会话可击穿列表 API，建议推广“脏数据降级而非崩溃”的防御性解析模式（今日多个 PR 已体现此方向）。
- **错误可观测性**：多处 Issue 依赖日志尾部排查（#50498、#50285），社区期望更结构化的错误码与诊断输出。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-22

## 一、今日速览

今天 Qwen Code 发布了 **v0.24.3** 全家桶（CLI、Desktop、SDK TypeScript v0.1.14），核心改进集中在 Web Shell 的结构化 shell 结果与移动端导航修复。社区方面，**Managed Agent 双路径架构提案**（#12380）与配套 PR #12358 引发热议，同时 Remote-SSH 会话创建全面失败（#12416）和 macOS Web Terminal PTY 打包问题（#11872）两个 P1 故障持续发酵。

---

## 二、版本发布

### v0.24.3（CLI / Desktop 同步发布）
- **Web Shell**：结构化 shell 结果、可选 trajectory 指标、host 设置白名单、移动端导航修复
- **Desktop**：ACP 权限队列按 session 隔离（修复权限跨会话泄漏，#11802）、共享输出模式
- **无已知 Breaking Changes**
- 另有 nightly 版本 `v0.24.3-nightly.20260921.2800e9bb4f`，包含 monitor tool 的系统提示词引导（PR #12408）及 daemon 批量 workspace 功能

### SDK TypeScript v0.1.14
- 捆绑 CLI v0.24.3；但发布后即被报告类型声明引用了私有/未打包模块，消费者无法通过 typecheck（Issue #12433）

---

## 三、社区热点 Issues

1. **#11872 · Web Terminal 报 "PTY not available"（P1）**
   [@lydell/node-pty 声明但未打包，macOS 代码签名阻止本地 prebuilds 加载。13 条评论为今日最热。核心功能在新版本中完全不可用，属发布质量问题。](https://github.com/QwenLM/qwen-code/issues/11872)

2. **#12416 · Remote-SSH 所有 POST /session 失败（P1）**
   [Companion 0.24.2 下创建任何会话均报 `write EPIPE` / `BridgeChannelClosedError`，而独立 CLI 正常。远程开发场景被完全阻断。](https://github.com/QwenLM/qwen-code/issues/12416)

3. **#7040 · RFC：可靠的自动记忆召回（已关闭）**
   [历时两个月的自动记忆（auto-memory）召回 RFC 完成三阶段落地：遥测已合并，有界初始召回与多语言评估进入评审。虽关闭但仍是长期方向的风向标。](https://github.com/QwenLM/qwen-code/issues/7040)

4. **#12380 · 提案：Managed Agent 双路径架构**
   [定义分阶段的 Managed Agent 架构：模型推理与工具环境供给解耦、Session 持久化所有权、可恢复的工具执行、稳定 WebSocket 契约。与 PR #12358/#12438 呼应，是社区当前最大的架构讨论。](https://github.com/QwenLM/qwen-code/issues/12380)

5. **#12287 · Workflow retry-from-history 加固拆分**
   [原 PR #12190 从 ~1000 行膨胀到 ~1900 行、历经六轮 autofix 后拆分后续加固项。反映了大型特性 PR 的评审流程问题。](https://github.com/QwenLM/qwen-code/issues/12287)

6. **#12414 · Windows 桌面构建失败，v0.24.2 无 Windows 产物（P1，已关闭）**
   [pwsh 下运行 bash 安装步骤导致 Windows 构建失败，已修复并标记 ready-for-agent→关闭。](https://github.com/QwenLM/qwen-code/issues/12414)

7. **#12381 · 网关超时后恢复 session-create 结果**
   [HTTP 中间层超时后 session 实际已创建但客户端拿不到 ID，无法安全提交首条 prompt 或重试。多工作区 daemon 部署的真实痛点。](https://github.com/QwenLM/qwen-code/issues/12381)

8. **#12417 · 工具执行沙箱（bwrap）加固追踪**
   [Linux bubblewrap 沙箱从整个 CLI 下沉到单工具执行级别（配套 PR #12267），历经约五轮评审后的后续追踪。安全边界是社区关注重点。](https://github.com/QwenLM/qwen-code/issues/12417)

9. **#12424 · bundled-reference 路由无法感知 per-agent 工具策略**
   [被 skill 拒绝的 subagent 仍收到无法跟随的指针，暴露了子代理权限与引用路由的交互缺陷。](https://github.com/QwenLM/qwen-code/issues/12424)

10. **#12433 · SDK TypeScript 类型声明损坏（P2）**
    [刚发布的 @qwen-code/sdk@0.1.14 的 daemon 声明引用私有模块，干净消费者无法 typecheck。影响 SDK 生态采用。](https://github.com/QwenLM/qwen-code/issues/12433)

---

## 四、重要 PR 进展

1. **#12358 · Managed Agent 独立技术栈（草稿）**
   [端到端预览：常驻 Harness → Java 控制面 → session 级 Tool Runtime，含持久化 Managed Session 记录与 Spring 实现。](https://github.com/QwenLM/qwen-code/pull/12358)

2. **#12438 · Java 运行时 Broker 服务核心**
   [Managed Agent 架构中 Java 控制面的基础组件，与 #12358 构成同一交付线。](https://github.com/QwenLM/qwen-code/pull/12438)

3. **#12267 · bwrap 沙箱下沉到工具执行级**
   [暴露 operator 拥有的 `tools.executionSandbox` 策略，移除旧的整 CLI bwrap 重启路径。安全模型的重要重构。](https://github.com/QwenLM/qwen-code/pull/12267)

4. **#12403 · ACP 跨会话消息按目标投递**
   [ACP 驱动的会话此前对所有跨会话消息回复 refused；现在按 gate 接受作为后台 turn 处理。](https://github.com/QwenLM/qwen-code/pull/12403)

5. **#12441 · 修复单项目 daemon 上无法打开 Live 语音会话**
   [点击 Voice chat 报 multi-workspace 路由缺失，除非恰好注册了 ≥2 个普通 workspace。](https://github.com/QwenLM/qwen-code/pull/12441)

6. **#12434 · Trajectory 表分页回溯**
   [在 #12388 落地的 trajectory 表（仅显示最新 250 条）基础上增加 "Load earlier records" 向前翻页。](https://github.com/QwenLM/qwen-code/pull/12434)

7. **#12183 · 从目录加载部署管理的扩展**
   [新增 `--managed-extensions <root>`，支持企业部署方控制扩展包内容的原地发现与加载。](https://github.com/QwenLM/qwen-code/pull/12183)

8. **#12258 · MCP Apps 三项修复**
   [有界的服务器资源加载、App 发起的服务器工具调用、iframe 源隔离。Tableau App 已可在 Qwen Code 内渲染认证图表。](https://github.com/QwenLM/qwen-code/pull/12258)

9. **#12154 · Git 对话框新增 Worktrees 管理标签页**
   [列出仓库全部 worktree：主/当前/锁定/缺失标记、分支、HEAD 等状态。](https://github.com/QwenLM/qwen-code/pull/12154)

10. **#12384 · 按 session source type 路由独立会话重载**
    [修复 standalone 会话在刷新/切换时错误猜测会话类型的问题，直接关联 Issue #12237 的 404 缺陷。](https://github.com/QwenLM/qwen-code/pull/12384)

---

## 五、功能需求趋势

1. **Managed Agent / 多代理平台化**（#12380、#12358、#12438、#8769）：社区最大叙事，会话持久化、可恢复执行、推理与环境供给解耦
2. **Web Shell 能力补全**：trajectory 分页（#12434）、Live 语音浏览器托管（#12164）、独立会话管理（#11878、#12237）、worktree 管理（#12154）
3. **安全与沙箱**：工具级 bwrap 沙箱（#12267、#12417）、host 设置白名单（随 v0.24.3 发布）
4. **会话管理健壮性**：网关超时恢复（#12381）、channel 晚注册恢复（#12396、#12432）
5. **集成生态**：浏览器直控 WebBridge（#8699）、MCP Apps 修复（#12258）、企业部署管理扩展（#12183）、ClawMetry 遥测工具开源（#12428）
6. **开发基础设施**：pnpm 快速 bootstrap（#10444）、CI 稳定性（#10573、#12414）

---

## 六、开发者关注点

- **发布质量回归频发**：v0.24.2 无 Windows 产物（#12414）、nightly release 失败（#12382）、SDK 类型损坏（#12433）、Web Terminal PTY 未打包（#11872）——打包与发布链路是当前最集中的痛点
- **Remote-SSH / 远程工作流仍脆弱**：#12416 显示会话创建在远程场景全挂
- **本地化缺失**：session recap 永远是英文（#11847），对中文用户不友好
- **配置容错性**：`tools.eager` 拼写错误静默通过（#12435）、Object.prototype key 崩溃（#10400），用户期望更明确的警告与校验
- **大 PR 评审负担重**：#12190 膨胀至 1900 行、#12267 五轮评审，repo 的 1500 行预算与拆分机制（如 #12287）值得贡献者注意

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) 社区动态日报 — 2026-09-22

## 1. 今日速览

今日仓库无新版本发布，但 0.10.0 的 dogfood 修复与架构治理密集推进：维护者 @Hmbown 一天内落地多项修复（含 Anthropic 并行工具调用、配置 base_url 继承 bug），并开出新的架构总纲 Issue #6396 取代 #4173，统一模型/提供商事实源。CI 健康状况堪忧——健康周报显示 `main` 分支 CI 在 130 次运行中有 106 次失败，成为当前最紧迫的工程问题。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#6184](https://github.com/Hmbown/DeepSeek-TUI/issues/6184) 引擎运行中静默冻结（OPEN）**
   最严重的用户侧 bug：长时间工具密集运行中引擎停止输出，用户消息被持久化但永不回答，且无任何错误/日志/崩溃记录。8 条评论，排查难度极高。

2. **[#6396](https://github.com/Hmbown/DeepSeek-TUI/issues/6396) 模型/提供商目录与定价：统一事实源（OPEN，今日新建）**
   取代 #4173 的新架构提案。原 Issue 中的 81 模型/31 提供商硬编码数字已严重漂移，需要单一权威目录管理，是去硬编码路线的顶层设计。

3. **[#4173](https://github.com/Hmbown/DeepSeek-TUI/issues/4173) 架构：解除模型提供商与工具注册表硬编码（CLOSED）**
   存量架构 Issue 被正式关闭并由 #6396 接棒，标志架构治理进入新阶段。

4. **[#6374](https://github.com/Hmbown/DeepSeek-TUI/issues/6374) 上下文预算守卫虚高 1.5×（CLOSED）**
   一个路径上三重缺陷：预检守卫用夸大估算提前拒绝（131k 路由在真实 65k 输入时即报 `context_overflow`），且错误消息中给出的两条补救路径在该场景下均不可用。

5. **[#6378](https://github.com/Hmbown/DeepSeek-TUI/issues/6378) Anthropic 并行工具调用产生假失败结果（CLOSED）**
   用户 @bronze1man 报告：2+ 个并行 `tool_use` 时，第二个及之后的调用会同时收到合成的 `is_error: true` 假结果和真实结果，误导模型。当天即被 #6387 修复。

6. **[#6385](https://github.com/Hmbown/DeepSeek-TUI/issues/6385) 健康周报：main CI 大面积红（OPEN）**
   2026-09-14 → 09-21 窗口内无代码推送、无 PR 开关，但 main CI 在 130 次运行中 106 次失败，反映 CI 基础设施或 flaky 测试问题严重。

7. **[#6394](https://github.com/Hmbown/DeepSeek-TUI/issues/6394) 删除 legacy 根级 base_url，迁移至 [providers.<name>]（OPEN）**
   根级 `base_url` 是 DeepSeek 专属字段却被其他路由继承，已造成真实 401 故障（见 PR #6395），计划一次性自动迁移。

8. **[#6296](https://github.com/Hmbown/DeepSeek-TUI/issues/6296) 子代理继承 computer-use 权限逃逸（CLOSED）**
   安全问题：受限制 shell 的 verifier 子代理通过 computer-use 直接向宿主终端输入命令绕过限制，权限隔离设计缺陷。

9. **[#6050](https://github.com/Hmbown/DeepSeek-TUI/issues/6050) 可插拔 agent 记忆后端（OPEN）**
   社区高价值提案：当前 `MemoryBackend` 仅 Native/Off 两态，建议增加通用后端接缝，以 causal-memory / mem0 为参考实现。

10. **[#5856](https://github.com/Hmbown/DeepSeek-TUI/issues/5856) Computer-use 插件验收路径（OPEN）**
    内置 bundle 的发现/信任/启用流程验收仍在推进，与 #6296 的权限问题共同构成 computer-use 功能落地的关键路径。

## 4. 重要 PR 进展

1. **[#6395](https://github.com/Hmbown/DeepSeek-TUI/pull/6395)（CLOSED）** 修复外部 legacy 根 `base_url` 被路由继承为端点的问题——小米 MiMo 密钥 401 的根因，配套迁移 Issue #6394。

2. **[#6392](https://github.com/Hmbown/DeepSeek-TUI/pull/6392)（OPEN）** 0.10.0 dogfood 八连修：包括 Plan 模式下 Shift+Tab 无法切换权限等“闸门不闸”类缺陷，每项均带先跑失败的回归测试。

3. **[#6387](https://github.com/Hmbown/DeepSeek-TUI/pull/6387)（CLOSED）** 修复 #6378：将拆分的多个 tool_result 折叠为单一 user turn 后再做 dangling-use 修复，消除假失败信号。

4. **[#6390](https://github.com/Hmbown/DeepSeek-TUI/pull/6390)（CLOSED）** 直接移除 `windows-core` 直接依赖（替代 Dependabot 的版本升级 #6359），通过 `windows` crate 的具名 re-export 解决。

5. **[#6391](https://github.com/Hmbown/DeepSeek-TUI/pull/6391)（CLOSED）** 以最小两行 lockfile 变更落地 Dependabot 的 `clap_complete` 4.6.9→4.6.11 升级（原分支与 main 冲突）。

6. **[#6388](https://github.com/Hmbown/DeepSeek-TUI/pull/6388)（CLOSED）** 任务准入时即拒绝非法权限 posture（如拼写错误或 `never`），而非推迟到 worker 打开线程后才失败——#6386 的安全加固跟进。

7. **[#6386](https://github.com/Hmbown/DeepSeek-TUI/pull/6386)（CLOSED）** 社区贡献者 @gaord 提交：任务线程启动时显式声明审批 posture，补齐授权路径缺口。

8. **[#6389](https://github.com/Hmbown/DeepSeek-TUI/pull/6389)（CLOSED）** 修复 `/resume` 会话选择器预览泄露内部运行时控制流量的渲染问题。

9. **[#6384](https://github.com/Hmbown/DeepSeek-TUI/pull/6384)（CLOSED）** 修复 review bot 自 09-21 起每次非 draft 运行均失败且不显示 provider 错误详情的问题，并将失败归类纳入 review workflow。

10. **[#6383](https://github.com/Hmbown/DeepSeek-TUI/pull/6383)（CLOSED）** 0.10.0 后续修复：input-bill 结转改为按完整解析端点做键、预览扫描增加 post-scan 回退。

## 5. 功能需求趋势

- **架构去硬编码**：模型/提供商/工具注册表的外部化（#6396、#4173）是当前最明确的演进方向，从“数量清理”升级为“目录与定价的单一权威源”。
- **可插拔扩展性**：记忆后端插件化（#6050）、computer-use 内置化与验收（#5856），社区持续要求第三方集成接缝。
- **配置迁移与卫生**：legacy 根级 `base_url` 的删除与自动迁移（#6394）体现配置 schema 收紧趋势。
- **Agent 安全与权限治理**：子代理权限隔离（#6296）、任务准入 posture 校验（#6388）反映多代理架构下的安全收紧。
- **可观测性**：静默冻结（#6184）与 CI 大面积红（#6385）暴露日志/诊断能力是短板。

## 6. 开发者关注点

- **静默失败是最痛的 bug 类型**：#6184（引擎无日志冻结）和 #6374（守卫虚报+无效补救提示）都因“失败但不可诊断”加重影响，错误消息质量与遥测是高频诉求。
- **CI 可靠性危机**：main 分支 106/130 次红、Windows 单测偶发失败（#6224）、portable conformance 长期红（#6227），flaky 测试治理亟待投入。
- **配置继承的隐蔽陷阱**：DeepSeek 专属字段被通用路由继承（#6394/#6395）这类“合法但错误”的配置行为直接导致用户 401，需要更强的迁移与校验。
- **Provider 兼容性**：Anthropic 并行工具调用的 wire 协议细节（#6378）表明多提供商适配仍是持续成本。
- **依赖治理策略**：维护者倾向“删除依赖优于升级依赖”（#6390）、最小变更落地 bot PR（#6391），显示对供应链面积收缩的明确偏好。

---
*数据来源：github.com/Hmbown/DeepSeek-TUI（Issues 14 条 / PRs 26 条，统计窗口为过去 24 小时）*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-09-22

## 📌 今日速览

Pi 发布 **v0.87.0**，核心亮点是“规范会话上下文与扩展边界”——支持在不重写历史的情况下编辑模型上下文，并新增可操作的生命周期钩子。社区侧，TUI 大会话下的渲染性能问题（#7730、#9549、#9807）持续发酵，压缩机制相关 bug 集中出现；PR 侧贡献活跃，包括 RPC 输入关联、Grok 4.7 支持等多项修复落地。

---

## 🚀 版本发布

**v0.87.0**
- **Canonical session context and extension boundaries**：支持在不重写历史的情况下编辑模型上下文，并新增可操作的生命周期钩子。详见 [ContextEditEntry 文档](https://github.com/earendil-works/pi/blob/v0.87.0/packages/coding-agent/docs/session-format.md#contexteditentry)。

---

## 🔥 社区热点 Issues

1. **[#7730](https://github.com/earendil-works/pi/issues/7730)** macOS 长会话 CPU 占用 100%+（17 评论 / 10 👍）
   最受关注的性能问题，CPU 在 50-110% 波动、内存 600-800MB，疑似与上下文/会话长度相关。

2. **[#8684](https://github.com/earendil-works/pi/issues/8684)** `PI_OFFLINE` 静默禁用所有 provider 模型发现（12 评论）
   实际行为与文档矛盾，离线场景下模型目录完全不可用，影响可预期性。

3. **[#9803](https://github.com/earendil-works/pi/issues/9803)** 0.86.0 回归：RPC steer 成功响应无法与扩展处理结果关联（9 评论）
   扩展可消费一条 steer 同时排队另一条，RPC 客户端无法判断输入去向——新版本回归问题，配套修复 PR #9832 已提交。

4. **[#9549](https://github.com/earendil-works/pi/issues/9549)** 全屏模式大转录每帧全量重绘、每次 resize 重发整个转录（6 评论）
   2 核机器上单核饱和，报告流程规范（`pi -ne` 复现验证）。

5. **[#9807](https://github.com/earendil-works/pi/issues/9807)** 800+ 消息会话滚动/输入明显卡顿（3 评论）
   指出 Pi 未像竞品那样做增量 cell 级 diff，与 #9549、#7730 共同构成 TUI 渲染性能主线索。

6. **[#9652](https://github.com/earendil-works/pi/issues/9652)** Claude Fable 因 thinking 块被转写进压缩 prompt 而拒绝压缩请求（7 评论）
   `serializeConversation` 触发 Anthropic 安全分类器，压缩链路的正确性问题。

7. **[#9602](https://github.com/earendil-works/pi/issues/9602)** 压缩可能因包含此前被省略的 thinking 消息而溢出上下文（6 评论）
   本地 Qwen3.8 长会话场景下压缩反超限，暴露压缩上下文选择逻辑缺陷。

8. **[#9773](https://github.com/earendil-works/pi/issues/9773)** `before_provider_request` 对压缩/摘要请求不触发（5 评论）
   扩展钩子覆盖不完整，与 v0.87.0 强调的扩展能力边界直接相关。

9. **[#9784](https://github.com/earendil-works/pi/issues/9784)** 元议题：扩展 API 缺少对 provider 专有字段的支持（3 评论）
   `AssistantMessage` 被批为"普罗克鲁斯忒斯之床"，用户多次提出，反映扩展 API 抽象层的老大难问题。

10. **[#9674](https://github.com/earendil-works/pi/issues/9674)** mistral-conversations 空 content delta 打开空文本块，GLM 5.x 回放 400（3 评论）
    已有对应修复 PR #9869 提交（跳过空 delta）。

---

## 🔧 重要 PR 进展

1. **[#9832](https://github.com/earendil-works/pi/pull/9832)**（已合并）RPC 输入处置结果关联
   为 `prompt`/`steer`/`follow_up` 增加显式 `handled`/`queued`/`accepted` 处置标识与稳定队列 ID，修复 #9803 回归。

2. **[#9869](https://github.com/earendil-works/pi/pull/9869)**（已合并）跳过 Mistral 空 content delta
   修复 GLM 5.x 经 mistral-conversations 时空文本块导致的 400 错误，附离线 SSE fixtures。

3. **[#9866](https://github.com/earendil-works/pi/pull/9866)**（已合并）重放前校验持久化的工具参数
   恢复标记为 `replay: "safe"` 的中断工具时先按当前 schema 验证参数，防止过期参数执行。

4. **[#9846](https://github.com/earendil-works/pi/pull/9846)**（已合并，mitsuhiko）context handler 中保留 prompt 与工具声明
   修复 0.86 后扩展压缩导致请求丢失内置工具、Codex 输出裸 tool-call 文本的问题（关联 #9822）。

5. **[#9861](https://github.com/earendil-works/pi/pull/9861)**（已合并）遵循 Google 429 限流重试延迟
   RESOURCE_EXUSTED 429 现在按响应中的 retry 指引重试而非直接失败。

6. **[#9859](https://github.com/earendil-works/pi/pull/9859)**（已合并）新增 Grok 4.7 支持
   500k 上下文、图像输入、四级 reasoning，定价 $2/$0.50 cached/$6 每百万 tokens。

7. **[#9851](https://github.com/earendil-works/pi/pull/9851)**（已合并）Bedrock 目录移除裸 Anthropic 模型 ID
   AWS 已不支持按需调用，全部 11 个裸 ID 移除并强制走 inference profile。

8. **[#9488](https://github.com/earendil-works/pi/pull/9488)**（已合并）Codex 规范回合归因
   新增 provider 中立的 `requestIdentity`，使工具续跑、重试、steering、压缩恢复的请求可可靠归因。

9. **[#9830](https://github.com/earendil-works/pi/pull/9830)**（已合并）报告无效 prompt frontmatter
   修复模板 YAML 错误时静默消失的问题（#9354），改走资源诊断路径。

10. **[#9714](https://github.com/earendil-works/pi/pull/9714)**（开放）Azure Foundry Chat Completions 部署支持
    补齐 Azure provider 对非 Responses API 部署（如 DeepSeek V4 Pro）的覆盖。

---

## 📈 功能需求趋势

- **TUI 渲染性能**：全屏/常规模式在大转录下的全量重绘、resize 风暴、CPU 饱和是最密集的痛点（#7730/#9549/#9255/#9807），社区明确呼吁增量 diff 渲染。
- **压缩机制健壮性**：thinking 块转写、上下文溢出、钩子不触发、旧压缩残留损坏会话（#9652/#9602/#9773/#8667）——压缩是本周期 bug 最集中的子系统。
- **扩展 API 能力边界**：provider 专有字段暴露（#9784）、重试事件可见性（#9829）、生命周期钩子完善（#9647），与 v0.87.0 官方方向高度吻合。
- **新模型 / Provider 支持**：Grok 4.7、GLM 5.x via Mistral、Azure Foundry Chat Completions、Ollama 原生 provider（#9850）持续活跃。
- **离线与网络行为可预期性**：`PI_OFFLINE` 语义（#8684）、离线 bug 导出（PR #9841）。

---

## ⚠️ 开发者关注点

1. **版本回归风险**：0.86.x 连续引入 RPC 关联、LiteLLM 中断流、导入错误等多起回归（#9803/#9843/#9794），升级需谨慎，但社区修复响应速度快。
2. **长会话稳定性**：CPU、内存、压缩正确性问题均随会话长度恶化，重度用户受影响最大。
3. **文档与行为一致性**：`PI_OFFLINE`、`before_provider_request`、bash timeout 单位（秒 vs 毫秒）等多处实际行为与文档不符。
4. **静默失败**：无效 frontmatter 模板、畸形工具调用等错误缺少诊断输出，排查成本高。
5. **扩展生态**：Extension API 的抽象限制（消息结构、事件覆盖）仍是贡献者反复提出的结构性诉求，值得架构层面关注。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# 📰 oh-my-pi 社区动态日报 — 2026-09-22

## 一、今日速览

oh-my-pi 发布 **v18.2.8**，`@oh-my-pi/pi-ai` 包大幅扩展多模态能力（文本嵌入、图像/视频生成、语音合成与转录、重排序等）。社区方面，**Google Antigravity 提供商的 429 误报问题**持续发酵，仍是讨论量最高的议题；PR 方面多个高质量贡献聚焦于 **prompt-cache 成本优化** 和 **可观测性增强**。

---

## 二、版本发布

### v18.2.8（`@oh-my-pi/pi-ai`）
- **新增**：跨多提供商的文本嵌入、文档重排序、视频生成、图像生成支持
- **新增**：语音合成（TTS）与音频转录服务
- **新增**：System One judgment API 支持，含可配置请求头
- 🔗 [Release v18.2.8](https://github.com/can1357/oh-my-pi/releases)

---

## 三、社区热点 Issues

1. **[#11689](https://github.com/can1357/oh-my-pi/issues/11689) [已关闭] Antigravity 配额误报 429（110 评论 / 19 👍）**
   最热议题。使用 Google AI Pro 的 Antigravity 提供商时持续收到 429 RESOURCE_EXAUSTED，且重试等待被要求 30 分钟。现已关闭，但衍生问题仍在。

2. **[#11699](https://github.com/can1357/oh-my-pi/issues/11699) [开放] 429 根因定位：system prompt 中的 `<system-conventions>` 标签（28 评论）**
   社区定位到误报 429 的触发条件——系统提示词中的特定标签导致首轮调用即失败，是 #11689 的关键线索。

3. **[#12655](https://github.com/can1357/oh-my-pi/issues/12655) [开放] 429 问题在 v18.2.6 上仍可复现（27 评论 / 8 👍）**
   配额健康账户上 `gemini-3.8-flash-high` 仍首跳即失败，说明修复不彻底，与 #12771 的新 PR 相关。

4. **[#5742](https://github.com/can1357/oh-my-pi/issues/5742) [开放] 桌面 + Web 图形界面需求（14 评论 / 27 👍）**
   高票需求。社区认为 OMP 仅有 TUI，相比 Cursor / OpenCode / Codex CLI 缺少 GUI 层。

5. **[#12261](https://github.com/can1357/oh-my-pi/issues/12261) [开放] 长会话写入流性能严重劣化（9 评论）**
   1.1M 上下文会话进行到约 40% 时，写入速度跌至 5 秒 1-2 token，直接影响生产力。

6. **[#11530](https://github.com/can1357/oh-my-pi/issues/11530) [开放] OpenAI Responses 默认 `store: true` 引发隐私担忧（4 评论）**
   默认允许 OpenAI 存储数据至少 30 天，涉及企业合规，属重要隐私问题。

7. **[#12664](https://github.com/can1357/oh-my-pi/issues/12664) [开放] 多子代理长任务下会话间歇性冻结（3 评论）**
   单轮 pending 长达 40 分钟、Ctrl-C 无效，稳定性痛点。

8. **[#10915](https://github.com/can1357/oh-my-pi/issues/10915) / [#10909](https://github.com/can1357/oh-my-pi/issues/10909) [开放] 子代理启动崩溃 `getWorkPoolYieldItems` TypeError**
   已确认为 18.1.6 → 18.1.10 之间的回归，`agent:scout` 代理无法启动，与 #12575（子代理缺少工具）共同指向子代理体系问题。

9. **[#11906](https://github.com/can1357/oh-my-pi/issues/11906) [开放] README 中 Discord 链接失效（9 评论）**
   新用户入门通道受阻，标为 wontfix 但社区持续反馈。

10. **[#6174](https://github.com/can1357/oh-my-pi/issues/6174) [开放] `/prewalk` 只能开启无法关闭（8 评论）**
    命令处理器忽略参数，且无编辑任务时“Continue the task now”提示永久循环。

---

## 四、重要 PR 进展

1. **[#12574](https://github.com/can1357/oh-my-pi/pull/12574) Anthropic prompt-cache 刷新网关白名单**
   贡献者实测某工程师 3 天内 **~$800** 花费在空闲后的缓存重写上，此 PR 为缓存刷新增加网关白名单控制。配套 PR：[#12615](https://github.com/can1357/oh-my-pi/pull/12615)（按空闲时间而非轮次预算缓存保活）、[#12571](https://github.com/can1357/oh-my-pi/pull/12571)（保留 drop_block 后的 thinking 块以维持缓存前缀）。

2. **[#12757](https://github.com/can1357/oh-my-pi/pull/12757) `/usage` 显示每账户用量可用性**
   展示各提供商账户身份、状态、剩余百分比及配额重置倒计时——对 Antigravity 429 问题用户尤其有用。

3. **[#12764](https://github.com/can1357/oh-my-pi/pull/12764) MCP 服务器统一控制中心**
   `/extensions` 新增 MCP Servers 标签页：跨源清单、实时连接状态、测试/重连/凭证清理等操作，MCP 管理体验大升级。

4. **[#12771](https://github.com/can1357/oh-my-pi/pull/12771) 修复 gpt-oss 在 Antigravity 上的 400 错误**
   为 gpt-oss 启用 `supportsFunctionPartId`，解决含工具调用的多轮对话 400 失败。

5. **[#12663](https://github.com/can1357/oh-my-pi/pull/12663) `/context all` 详细上下文报告**
   对标 Claude Code，在聚合图表外列出每个模型可见工具/skill 的 token 估算。

6. **[#11938](https://github.com/can1357/oh-my-pi/pull/11938) prompt-cache 失效诊断**
   基于 HMAC 指纹（不保留提示内容）的缓存 journal，关联请求与响应定位缓存失效原因。

7. **[#12083](https://github.com/can1357/oh-my-pi/pull/12083) 系统提示词中澄清 omp 身份**
   说明 Claude Code 身份块仅为 Anthropic API 传输指纹，避免代理误认自身身份。

8. **[#11073](https://github.com/can1357/oh-my-pi/pull/11073) [review:p2] auth-broker 快照缓存有界重校验**
   启动时探测 `/v1/healthz` 并做认证 fetch，改进认证语义。

9. **[#12765](https://github.com/can1357/oh-my-pi/pull/12765) 计划压缩失败执行控制**
   新增 `plan.executeAfterCompactionFailure` 选项，压缩失败时可保留完整计划上下文而不派发合成执行轮。

10. **[#9314](https://github.com/can1357/oh-my-pi/pull/9314) 状态栏紧凑 profile 指标**
    新增 `p:<name>` profile 段及 token/context 百分比紧凑渲染选项。

---

## 五、功能需求趋势

| 方向 | 代表 Issue | 热度信号 |
|---|---|---|
| **GUI / 多端界面** | #5742（桌面+Web）、#1627（多会话 Agent View） | 👍 27+3，长期高频 |
| **成本与缓存优化** | PR #12574 系列、#11938 | 企业用户实测美元级痛点 |
| **提供商稳定性（Google Antigravity）** | #11689 / #11699 / #12655 | 165+ 评论，本周最大故障群 |
| **多模态能力** | v18.2.8 发布、#12457（OpenRouter 图像模型选择，已关闭） | 官方正在积极投入 |
| **可观测性 / 用量透明** | #12663、#12757、#11643（token 计数重置）、#12621（eval judge 用量） | 持续增长 |
| **子代理体系健壮性** | #10915、#12664、#12575 | 回归 + 冻结 + 工具缺失 |
| **生态兼容** | #12728（Pi 兼容 RPC）、#10490（嵌套 skills，对标 Codex） | 嵌入式客户端场景 |

---

## 六、开发者关注点

1. **Antigravity 429 仍是头号痛点**：根因（`<system-conventions>` 标签）已定位但修复不彻底，v18.2.6 仍可复现；社区对提供商侧不透明错误信息（无 detail 的 429）感到沮丧。
2. **大规模会话性能**：长上下文写入流变慢（#12261）和多子代理冻结（#12664）表明超长会话的稳定性仍是短板。
3. **隐私与合规**：OpenAI Responses 默认 `store: true`（#11530）让企业用户担忧，需要默认关闭或显式提示。
4. **子代理回归未解**：`getWorkPoolYieldItems` TypeError 已被 A/B 验证为 18.1.10 后回归，但修复尚未落地。
5. **成本可见性需求强烈**：cache 重写浪费、eval judge 调用不计入用量、压缩后 token 不重置——开发者普遍要求更精细的 token/费用归因。
6. **静默降级类 bug**：模型发现伪造 context window（#12616）、`--fork` 不存在的文件静默开新会话（#11553）、LiteLLM 发现超时静默降级（#11355）——"失败但不报错”的模式是反复出现的抱怨主题。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*