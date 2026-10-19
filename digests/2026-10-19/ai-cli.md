# AI CLI 工具社区动态日报 2026-10-19

> 生成时间: 2026-10-19 03:47 UTC | 覆盖工具: 11 个

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

# AI CLI 工具生态横向对比分析报告（2026-10-19）

---

## 1. 生态全景

AI CLI 工具已从单一编码助手演进为**多 agent 编排平台**，各头部产品均在 subagent、权限沙箱、托管/远程会话等基础设施上激烈竞争。当前生态的共性瓶颈集中在三处：**权限/沙箱模型的可靠性**（误拦与越权并存）、**计费与配额透明度**（cache miss 异常、静默消耗）、以及**多供应商/多协议兼容**（BYOK、第三方模型接入）。社区反馈的 bug 正从“功能不可用”转向“静默失效”——不报错但破坏工作流，标志着产品已过基础可用期，进入信任建设阶段。开源社区贡献活跃度整体高于官方团队响应速度，多个项目（Gemini CLI、Qwen Code、oh-my-pi）呈现“社区高频 PR + 官方快速合并”的良性循环。

---

## 2. 各工具活跃度对比

| 工具 | Release | Issue 动态（Top 热点） | PR 动态 | 活跃特征 |
|---|---|---|---|---|
| **Claude Code** | v2.1.303（常规修复） | 10+ 热点，内核泄漏 #66020 持续发酵 | 9 条（内部镜像为主，diff 面板主线） | 用户基数最大，长期未解问题多 |
| **OpenAI Codex** | 无 | 10 条，8/10 为 Windows 相关 | 仅 2 条（bot 创建，当日关闭） | 官方侧动静小，Windows 问题积压严重 |
| **Gemini CLI** | v0.66.0-nightly | 10 条（多项 P1） | 10+ 条，多为 P1/高质量社区修复 | 唯一日更版本，社区贡献最健康 |
| **Copilot CLI** | 无 | 10 条（harness 迁移回归潮） | 仅 1 条（文档模板） | 官方代码侧静默，回归问题需警惕 |
| **OpenCode** | 无 | 10 条（支付/计费占榜首） | 10+ 条（UI 重构、安全修复） | PR 极活跃，V2 迁移阵痛期 |
| **Qwen Code** | 无 | 10 条（Managed Agent 架构主导） | 10 条（systemd/凭证/预检，单人密集交付） | 企业化/运维化路线清晰 |
| **oh-my-pi** | v18.12.2 | 10 条 | 10 条（P0-P3 分级 review） | 70 Issue / 392 PR 更新，全生态最高吞吐 |
| **DeepSeek TUI** | 无 | 7 条 | 10 条（当日创建当日关闭） | 小而快的修复流，多协议攻坚 |
| **Kimi Code / DeepSeek Harness** | 无 | 0 | 0 | 静默 |

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **权限/沙箱可靠性** | Claude Code（#95122 误拦、#102516 lock 污染）、Codex（#40060 误报、#54574 授权后仍拦）、Copilot CLI（#5177 Git 审批失效、#5176 沙箱杀进程）、OpenCode（#53955 Plan 模式越权） | 误拦与越权并存是全生态最普遍痛点，开发者要求权限边界**可预测** |
| **计费/配额透明度** | Claude Code（#103233 睡眠耗配额）、Codex（#51604 cache miss 异常）、OpenCode（#45278 支付被拒、#38936 配额不符）、oh-my-pi（#16172 配额路由错误） | 计量口径、失败任务是否扣费，是付费用户共同质疑点 |
| **Subagent 稳定性与一致性** | Gemini CLI（#22323 状态误报、#21409 挂起）、Claude Code（#82017 skill 路由失明）、Copilot CLI（#4576 配置不继承）、oh-my-pi（#16067 并发崩溃） | subagent 报告“成功”但实际失败，直接摧毁可观测性信任 |
| **Windows/WSL 兼容** | Codex（8/10 热点）、Claude Code（#103349 僵尸进程）、OpenCode（#55918 WSL2 端口）、Qwen Code（#14642 CRLF 数据丢失） | Windows 一等公民支持仍是普遍短板 |
| **Token/上下文效率** | Gemini CLI（#22745 AST 感知、36.6k/轮基础开销）、DeepSeek TUI（#6969 缓存经济性、#6991 fastctx）、Codex（#53913 压缩浪费） | 精准读取替代“firehose”式全文读取，成本优化成刚需 |
| **静默失效治理** | Claude Code（hook 不触发）、DeepSeek TUI（工具静默剔除、wire 静默回退）、oh-my-pi（thinking 块丢失） | “宁可修复也不要静默放弃”正成为行业修复共识 |

---

## 4. 差异化定位分析

| 工具 | 定位与技术路线 |
|---|---|
| **Claude Code** | 企业级 agent 平台，向组织协作（artifact 共享、跨用户会话、Remote Control）延伸；生态最大但 macOS 资源问题暴露重度使用下的工程债 |
| **OpenAI Codex** | 全平台 agent + Computer/Browser Use + 云端 Dots 工作区，功能面最广但 Windows 质量债最重，BYOK 体验差 |
| **Gemini CLI** | 开源社区驱动型， nightly 日更 + 社区 PR 快速合并；发力 AST 工具链、评估体系、零依赖 OS 沙箱等技术纵深 |
| **Copilot CLI** | GitHub 生态原生集成（ACP、企业策略、Remote sessions），harness 迁移期回归多，官方响应偏慢 |
| **OpenCode** | 桌面端体验 + 商业化订阅并行，V2 大版本迁移中；安全问题（Plan 越权、提示注入）与计费基建是当前主线 |
| **Qwen Code** | 唯一明确走 **Managed Agent 运维化**路线（systemd、凭证引导、tenant 隔离、故障恢复门），面向企业自部署 |
| **oh-my-pi** | 极客型高吞吐迭代，多 Provider 兼容（Fireworks/Devin/Factory Droid）+ TUI 细节打磨，P0-P3 分级 review 流程成熟 |
| **DeepSeek TUI** | 小型高质量修复流，专注多 wire 协议正确性与推理成本优化 |

---

## 5. 社区热度与成熟度

- **最活跃**：oh-my-pi（70 Issue / 392 PR 更新/日）、Claude Code（用户基数最大、长期问题评论量高）
- **快速迭代期**：Gemini CLI（nightly 日更 + 10+ 高质量 PR/日）、OpenCode（V2 重构期 PR 密集）、Qwen Code（单人高频交付 Managed Agent 基建）
- **成熟但积压**：Claude Code（#66020 内核泄漏长期未解）、Codex 与 Copilot CLI（官方侧 PR 静默，回归问题靠社区报告倒逼）
- **早期/静默**：Kimi Code、DeepSeek Harness 无活动；DeepSeek TUI 社区小但修复效率极高（当日创建当日关闭）

---

## 6. 值得关注的趋势信号

1. **安全边界从“拦截”转向“可预测性”**：各工具沙箱问题已从“拦不住”演变为“拦不准”。开发者需要的不是更强拦截，而是权限决策的可解释与一致性——OpenCode 修复权限规则叠加顺序（PR #56913）值得全行业借鉴。
2. **静默失效是新的信任杀手**：hook 不触发、工具被静默剔除、subagent 谎报成功——这类无报错 bug 的危害被社区反复验证。可观测性（归因 ID、生命周期钩子如 Codex PR #55144）将成为下一轮竞争点。
3. **计费透明度成为商业化护城河**：四款付费产品同时遭遇计量质疑（cache miss、失败循环扣费、配额不符），率先公开计量口径的厂商将获得信任溢价。
4. **企业自部署需求抬头**：Qwen Code 的 systemd/预检/凭证体系、Claude Code 的 org 级共享、Copilot 的企业策略，均指向 agent 从个人工具走向团队基础设施。
5. **对开发者的实操建议**：
   - 重度 agent 用户暂避 macOS 上的 Claude Code 长会话（#66020/#98769），Windows 用户暂避 Codex；
   - 生产环境核查 Copilot CLI 近期自动生成的 git 提交（#5177 审批失效）；
   - 选型时优先考察 token 计量准确性与 subagent 状态真实性，而非表面功能清单；
   - OpenCode V2 迁移期建议观望，TODO 工具等核心能力尚未回归。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
（数据截止 2026-10-19，来源：github.com/anthropics/skills）

> 说明：PR 评论数数据缺失（undefined），本报告依据 PR 的更新活跃度、关联 Issue 讨论热度及功能影响力综合排序。

---

## 一、热门 Skills 排行

| # | PR | Skill | 功能与热点 | 状态 |
|---|----|----|----|----|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder 修复** | 适配 mcp>=2.0 的 `streamable_http_client` 重命名与自定义 Header 配置，修复 #1668；关联生态级痛点（见 Issue #1390 评分器全 0 分问题） | OPEN |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 触发评估修复** | 隔离 trigger evals、修复 Windows `select()` 失败与误报，直接回应 Issue #1383/#556 的评估失效问题 | OPEN |
| 3 | [#1961](https://github.com/anthropics/skills/pull/1961) | **skill-creator eval viewer 安全加固** | 修复脚本逃逸、DNS rebinding、跨站 POST；与 Issue #1394（XSS）形成呼应，安全修复关注度持续上升 | OPEN |
| 4 | [#2039](https://github.com/anthropics/skills/pull/2039) / [#2040](https://github.com/anthropics/skills/pull/2040) | **harness SDD 套件** | 规约驱动开发 + 分发纪律 + 对抗式审查 + 架构顾问四件套，来自实战项目，10 月最新提交 | OPEN |
| 5 | [#1245](https://github.com/anthropics/skills/pull/1245) | **notion-spec-to-implementation** | 将 Notion 产品/技术 Spec 拆解为可执行任务、验收标准与进度追踪，存活期长（6 月至今仍活跃） | OPEN |
| 6 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 解决 AI 生成文档的孤行、寡行、编号错位等排版问题，“用户不会主动要求但普遍需要”的痛点型 Skill | OPEN |
| 7 | [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | 零成本将 Markdown 编译为带拟真人配音的 MP4 视频（Marp + TTS），内容创作方向代表作 | OPEN |
| 8 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT Skill** | OpenDocument 创建/模板填充/转 HTML，补齐开源文档格式空白 | OPEN |

---

## 二、社区需求趋势（来自 Issues）

1. **安全与信任边界（最高热度）**：[#492](https://github.com/anthropics/skills/issues/492)（46 条评论）——社区 Skill 冒用 `anthropic/` 命名空间分发，用户可能向伪装官方的 Skill 授予高权限。这是全仓库讨论最激烈的话题。
2. **组织级 Skill 分发**：[#228](https://github.com/anthropics/skills/issues/228)——希望支持组织内共享 Skill 库/分享链接，替代目前 Slack 传文件 + 手动上传的方式。
3. **Skill 质量评估工具链修复**：[#556](https://github.com/anthropics/skills/issues/556)、[#1383](https://github.com/anthropics/skills/issues/1383)——skill-creator 的 eval/trigger 评估在 Windows 及真实环境下大面积失效，社区强烈要求修复评估基础设施。
4. **上下文效率**：[#1487](https://github.com/anthropics/skills/issues/1487)——claude-api Skill 单次注入 ~156k token 耗尽上下文窗口，反映对 Skill 轻量化、渐进式加载的需求。
5. **流程治理类 Skill 提案**：[#1385](https://github.com/anthropics/skills/issues/1385)（推理质量门禁流水线）、[#1329](https://github.com/anthropics/skills/issues/1329)（compact-memory 紧凑记忆符号）、[#412](https://github.com/anthropics/skills/issues/412)（agent-governance）——社区在探索“元 Skill”：对抗式审查、状态压缩、Agent 治理。
6. **文档处理稳定性**：docx/pdf 系列问题（[#2018](https://github.com/anthropics/skills/issues/2018)、[#189](https://github.com/anthropics/skills/issues/189) 插件重复安装）持续产生修复需求。

---

## 三、高潜力待合并 Skills（活跃 OPEN PR）

- **[#1298](https://github.com/anthropics/skills/pull/1298) skill-creator trigger evals 修复**：对应多个高赞 Issue，修复基础设施级问题，合并优先级高。
- **[#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder mcp>=2 适配**：MCP 生态核心工具，阻塞上游升级，10 月仍有更新。
- **[#1961](https://github.com/anthropics/skills/pull/1961) eval viewer 安全加固**：补齐官方未修的已知安全漏洞（#1394），安全类 PR 通常被优先处理。
- **[#1792](https://github.com/anthropics/skills/pull/1792) docx LibreOffice 超时处理**：防止静默假成功，小而关键的可靠性修复。
- **[#2039/#2040](https://github.com/anthropics/skills/pull/2039) harness SDD 套件**：10 月刚提交、有真实项目背书，契合社区对流程治理类 Skill 的兴趣方向。
- **[#1681](https://github.com/anthropics/skills/pull/1681) package_skill.py 独立执行修复**：10 月更新，降低 Skill 打包门槛。

---

## 四、生态洞察

> **当前社区最集中的诉求是：为 Skills 生态建立可信、可评估的基础设施**——包括命名空间信任边界与安全加固（#492、#1394）、可靠的触发/质量评估工具链（#556、#1383），以及组织级分发与轻量化加载能力；在此之上，流程治理（SDD、对抗式审查）与文档/内容创作是最活跃的新 Skill 方向。

---

# Claude Code 社区动态日报 — 2026-10-19

## 1. 今日速览

今日发布 **v2.1.303**，为常规 bug 修复与稳定性改进版本。社区热度最高的话题仍集中在 **macOS 资源泄漏类问题**（内核 zone 泄漏、fseventsd 失控）与 **沙箱/worktree 隔离的误拦截**。功能需求方面，**Bash 补全**（35 👍）和**组织级 artifact 共享**（27 👍）持续获得关注。当日新增多条 Windows/macOS 平台的桌面端与 TUI 问题报告。

---

## 2. 版本发布

- **v2.1.303**（2026-10-19）
  - 常规 bug 修复与可靠性提升，无重大功能变更
  - https://github.com/anthropics/claude-code/releases

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 关注点 |
|---|-------|--------|
| 1 | [#66020](https://github.com/anthropics/claude-code/issues/66020) | **macOS 26.5.1 内核 zone 泄漏**（data.kalloc.1024），CLI 在 ~20GB 时 panic，泄漏速率随 agent 负载从 21→1027/sec 攀升。32 条评论，长期未解的高热度内存问题 |
| 2 | [#7738](https://github.com/anthropics/claude-code/issues/7738) | **Bash 补全功能请求**，35 👍，历史最久的高票需求之一，至今未实现 |
| 3 | [#78537](https://github.com/anthropics/claude-code/issues/78537) | **已发布 artifact 的组织级默认共享**，27 👍，反映团队协作场景的强需求 |
| 4 | [#100377](https://github.com/anthropics/claude-code/issues/100377) | **Remote Control worker 注册 400 错误**：claude.ai Project 线程无法在本地 Mac 启动，而自启动会话正常。10-08 起的新回归类问题 |
| 5 | [#98769](https://github.com/anthropics/claude-code/issues/98769) | **fseventsd 失控**：重 agent 负载的 Mac 上 fseventsd 超预算 800 倍、单核打满数天无自愈，并可能阻塞 Claude Code 启动 |
| 6 | [#95122](https://github.com/anthropics/claude-code/issues/95122) | **Worktree 隔离误拦截无 git 的 Bash 调用**（变量赋值、`$(…)`、循环、heredoc），3 天内 75 次拒绝，影响隔离模式可用性 |
| 7 | [#82017](https://github.com/anthropics/claude-code/issues/82017) | **压缩续传后丢失 skill 清单**，模型对已注册技能“路由失明”，仅收到增量更新，直接影响 Skills 体系可靠性 |
| 8 | [#87954](https://github.com/anthropics/claude-code/issues/87954) | **跨用户会话通信通道**功能请求：让两个不同用户的 Claude Code 会话互相协作/交接 |
| 9 | [#103191](https://github.com/anthropics/claude-code/issues/103191) | **模型将旧备份覆盖新文件**，导致服务器测试瘫痪 8 小时——高价值的安全性讨论案例 |
| 10 | [#103233](https://github.com/anthropics/claude-code/issues/103233) | **睡眠期间失败循环悄然消耗 40% 周配额**（疑似 subagent），涉及计费公平性问题 |

其他值得留意：[#102208](https://github.com/anthropics/claude-code/issues/102208)（Windows 上提示建议消失，v2.1.296 起回归）、[#102516](https://github.com/anthropics/claude-code/issues/102516)（沙箱遗留只读 `.git/config.lock` 破坏宿主 git 操作）。

---

## 4. 重要 PR 进展

| # | PR | 内容 |
|---|-----|------|
| 1 | [#94847](https://github.com/anthropics/claude-code/pull/94847) (OPEN) | diff 面板仅在首个编辑命中可追踪文件时才自动打开，避免仓库外写入弹出空面板 |
| 2 | [#89404](https://github.com/anthropics/claude-code/pull/89404) (OPEN) | 修复 `validate-agent.sh` 因 `set -e` + `((x++))` 在首个警告即中止、误报合法 agent 的问题 |
| 3 | [#66416](https://github.com/anthropics/claude-code/pull/66416) (OPEN) | 同类修复：三个 plugin-dev 验证脚本的 `set -euo pipefail` 交互问题 |
| 4 | [#97293](https://github.com/anthropics/claude-code/pull/97293) (OPEN) | 引擎声明加入 `$.process.run` 截断标志与 `$.fs.list` 的 `mtimeMs`，测试 fake 同步支持 |
| 5 | [#95198](https://github.com/anthropics/claude-code/pull/95198) (CLOSED) | mods/diff：`openPane` 返回类型放宽为 `unknown`，为 `$.ui.open` 返回结果对象铺路 |
| 6 | [#95587](https://github.com/anthropics/claude-code/pull/95587) (CLOSED) | diff 面板与内置面板行为对齐：resume 会话、`/clear` 后的打开/保留逻辑统一 |
| 7 | [#98374](https://github.com/anthropics/claude-code/pull/98374) (CLOSED) | rebase 完成后 diff 面板正确重新读取 diff，而非显示"Diff unavailable" |
| 8 | [#95423](https://github.com/anthropics/claude-code/pull/95423) (CLOSED) | 只读 shell 命令后不再重复拉取 diff，降低无谓刷新 |
| 9 | [#94369](https://github.com/anthropics/claude-code/issues/94369) (相关 Issue，9 👍) | `claude rc list-sessions`：请求在本地列出/恢复 Remote Control 会话——配套生态需求 |
| 10 | [#103350](https://github.com/anthropics/claude-code/issues/103350) (今日新报) | skill frontmatter 中 `PreCompact` hook 加载被接受但从不触发，静默失效 |

> 说明：本仓库 PR 主要为 Anthropic 内部工作镜像，diff 面板与 plugin-dev 验证器是本轮活跃主线。

---

## 5. 功能需求趋势

1. **CLI 体验补齐**：Bash 补全（#7738）、`--resume` 选择器覆盖 sdk-cli 会话（#103352）、Remote Control 会话本地恢复（#94369）
2. **团队/组织协作**：org 级 artifact 共享（#78537）、跨用户会话通信（#87954）
3. **会话与技能管理**：压缩后 skill 清单重注入（#82017）、PreCompact hook 支持（#103350）、桌面端会话跨项目迁移（#103351）
4. **Remote Control / 移动端可靠性**：worker 注册失败（#100377）、推送通知不送达（#102688）

---

## 6. 开发者关注点（痛点总结）

- **macOS 资源问题持续发酵**：内核 zone 泄漏（#66020）+ fseventsd 失控（#98769）双杀，重度 agent 用户首当其冲
- **沙箱与 worktree 隔离过于保守**：误拦截合法 Bash（#95122）、遗留 `config.lock` 污染宿主环境（#102516）、ExitWorktree 清理不彻底（#98272）
- **Windows 桌面端稳定性**：僵尸 PowerShell 进程耗尽内存（#103349）、`--user-data-dir` 被忽略（#103068）、提示建议消失（#102208）
- **静默失效类 bug 危害最大**：skill 清单丢失、hook 不触发、后台任务完成后不唤醒（#103344）——均无报错但破坏工作流
- **计费/配额公平性**：睡眠期间失败循环消耗周配额（#103233）引发对用量保护机制的诉求
- **模型行为与安全边界**：覆盖新文件的破坏性操作（#103191）、安全分类器误伤合法医疗文档工作（#100212）

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-10-19

## 1. 今日速览

今日无新版本发布，社区讨论仍高度集中在 Windows 平台的稳定性问题：Computer Use 工具缺失（#49458，91 条评论）与 WSL 启动失败持续发酵。新增两条较严重的性能/稳定性报告（Windows 端 42 个渲染进程堆积导致应用挂起、macOS 端工具服务器内存泄漏），值得官方优先关注。仅有的 2 条 PR 更新均已关闭。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#49458](https://github.com/openai/codex/issues/49458)** — Windows 下 dot 启动的本地任务缺少 Computer Use 工具，而普通本地会话正常。91 条评论、26 👍，是当前 Windows 生态最热问题。
2. **[#40060](https://github.com/openai/codex/issues/40060)** — Windows 沙箱 execpolicy 误报：同一 PowerShell 脚本中出现 Start-Process 与无关 URL 即触发拦截，影响 0.146.0 至最新 main 分支，41 条评论。
3. **[#35446](https://github.com/openai/codex/issues/35446)** — Windows 10 Computer Use 在 FrameArrived 内等待 SoftwareBitmap 转换时死锁，长期未修复（7 月至今），40 条评论。
4. **[#54841](https://github.com/openai/codex/issues/54841)** — BYOK 模式下 Work mode 启用本地浏览器/计算机工具后无法提交消息，直接阻断自定义模型用户的核心工作流，8 👍。
5. **[#51308](https://github.com/openai/codex/issues/51308)** — Windows 桌面端模型选择器缺失 GPT-6 Sol / GPT-6.1 Sol / GPT-6 Luna，新模型可用性问题，19 条评论。
6. **[#22185](https://github.com/openai/codex/issues/22185)** — Windows Desktop + WSL 工作区下 unified_exec 尝试 CreateProcess `/bin/bash` 报 ENOENT，WSL 混合开发场景长期痛点，17 条评论。
7. **[#51604](https://github.com/openai/codex/issues/51604)** — macOS 端 5 小时配额一夜之间多消耗约 60%，小轮次即出现大量 prompt-cache miss，涉及计费公平性。
8. **[#53913](https://github.com/openai/codex/issues/53913)** — Native Lite 客户端在缺少 `x-reasoning-included` 时重复计入旧推理内容，导致 54% 的压缩率浪费，影响上下文管理。
9. **[#55151](https://github.com/openai/codex/issues/55151)**（今日新增）— 保留大量聊天/内置浏览器会话后累积 42 个渲染进程，app-server 队列饱和导致桌面端挂起，44 分钟内 6 次 AppHangTransient。
10. **[#55160](https://github.com/openai/codex/issues/55160)**（今日新增）— `config/batchWrite` 对带前置注释的 inline table 做 upsert 时生成非法 TOML，导致 Codex 无法启动——CLI 配置可靠性的回归风险。

其他值得留意：#54774（Dots 删除后无法重建，`cloud_aeon_recovery_required`）、#54574（macOS 明确授权后 Git 写操作仍被沙箱拦截）。

## 4. 重要 PR 进展

过去 24 小时仅 2 条 PR 更新，且均已关闭：

1. **[#55149](https://github.com/openai/codex/pull/55149)**（已关闭）— 安装成功后清理不再使用的 standalone release，持锁保留当前/上一版本及运行中进程使用的版本。有助于解决磁盘占用和升级残留问题。
2. **[#55144](https://github.com/openai/codex/pull/55144)**（已关闭）— 新增仅观测性质的模型请求生命周期钩子（`PreModelRequest` / `PostModelRequest`），覆盖重试、token 用量与错误上报，为监控/遥测生态打基础。

> 注：今日 PR 活动极少，两个 PR 均由 bot 创建且当日关闭，具体关闭原因（合并或拒绝）建议查看 PR 详情。

## 5. 功能需求趋势

- **Windows 平台体验修复**：今日热度 Top 10 中 8 条与 Windows 相关，WSL 集成、沙箱策略、Computer Use/浏览器工具是重灾区。
- **Computer Use / Browser Use 可靠性**：截屏超时、URL 识别失败、应用内浏览器无法绑定会话等多个独立问题，是仅次于稳定性的第二大诉求方向。
- **上下文与配额管理**：压缩率、prompt-cache 命中率、配额计量的透明度（#53913、#51604）受到 Plus/Pro 用户关注。
- **BYOK / 自定义模型兼容性**：工具调用协议严格校验下 Codex 注入的非标准内容导致死锁（#52834），以及 Work mode 阻断提交（#54841）。
- **Dots 云端工作区**：恢复机制（`cloud_aeon_recovery_required`）与文件系统一致性问题开始聚集。
- **新模型可用性**：模型选择器缺失 GPT-6 系列变体表明发布节奏与客户端更新存在脱节。

## 6. 开发者关注点

1. **稳定性与资源泄漏是当前最大痛点**：多个平台报告内存膨胀、渲染进程堆积、静默退出（#55151、#53965、#55141），且多与长会话/并发任务相关。
2. **沙箱/权限体系不可预测**：误报（#40060）与“授权后仍被拦截”（#54574）并存，开发者难以建立对权限边界的信任。
3. **WSL 与混合开发环境支持不完整**：从 5 月延续至今的 ENOENT 问题（#22185）和启动器 `wsl.exe --cd .` 失败（#50779）仍未解决。
4. **配额与计费透明度**：cache miss 异常与推理内容重复计数直接影响使用成本，社区期待官方给出计量口径说明。
5. **配置与升级健壮性**：TOML 写坏导致无法启动（#55160）、Git 进程 CPU 占用（#22085）这类“小问题”会彻底阻断工作流，建议优先修复。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-19）

## 📌 今日速览

今日发布 nightly 版本 v0.66.0，社区贡献活跃，多个修复配额中断会话保存、MCP 代理连接和设置文件保护的高质量 PR 更新。Issues 端 Subagent 可靠性仍是最大痛点，多项 P1 级 bug 持续追踪中。

---

## 🚀 版本发布

- **v0.66.0-nightly.20261019.ged96faedf**：例行 nightly 构建自动发布。
  [Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.66.0-nightly.20261018.ged96faedf...v0.66.0-nightly.20261019.ged96faedf) | [版本 PR #29821](https://github.com/google-gemini/gemini-cli/pull/29821)

---

## 🔥 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent 达到 MAX_TURNS 后仍报告 GOAL 成功，掩盖真实中断（P1，13 条评论）。状态误报直接影响可观测性和用户信任，是 agent 可靠性的核心问题。

2. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** 利用模型的 bash 原生能力：零依赖 OS 沙箱 + 执行后意图路由（P2，9 条评论）。大方向性增强提案，探讨如何安全释放 Gemini 3 的 POSIX 工具链能力。

3. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist agent 无限挂起（P1，8 评论 / 8 👍）。简单如创建文件夹也会挂起长达一小时，👍 数高说明影响面广。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** AST 感知文件读取/搜索/代码库映射 EPIC（P2，7 评论）。配套子任务 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)、[#22747](https://github.com/google-gemini/gemini-cli/issues/22747)，指向 token 效率的结构性优化方向。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** 模型几乎不主动使用自定义 skills 和 subagents（P2，7 评论）。影响自定义工作流的价值兑现，与今日 PR #29818 的 skill 激活改进直接相关。

6. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** Browser Agent 无视 settings.json 配置覆盖（如 maxTurns）（P2，4 评论）。配置合并逻辑存在但未生效的典型回归。

7. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** Browser subagent 在 Wayland 下失败（P1，4 评论）。Linux 桌面用户的重要兼容性问题。

8. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** 工具数超过限制（>128）时触发 400 错误（P2，3 评论）。重度 MCP/自定义工具用户的硬性瓶颈。

9. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)** get-shit-done output hook 导致崩溃（P1，3 评论）。稳定性问题，需更多信息复现。

10. **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)** 模型频繁在随机位置创建临时脚本（P2，3 评论）。工作区卫生问题，影响提交整洁度，与 #19873 的沙箱/意图路由方向相关。

---

## 🔧 重要 PR 进展

1. **[#29800](https://github.com/google-gemini/gemini-cli/pull/29800)**（XL）Auto 模式仅在配额真正耗尽时跨模型层级（Pro ↔ Flash）降级，修复配额耗尽后会话死锁问题。
2. **[#29762](https://github.com/google-gemini/gemini-cli/pull/29762)**（P1）保存设置时保留磁盘上的手动编辑，避免认证方式变更覆盖用户修改。
3. **[#29799](https://github.com/google-gemini/gemini-cli/pull/29799)** 配额中断会话可恢复：保留最后用户输入和已完成工具轮次；Escape 一键停止配额重试对话框。
4. **[#29801](https://github.com/google-gemini/gemini-cli/pull/29801)** 修复 Node 26 下 HTTP MCP 连接，将 proxy fetch 与 Undici dispatcher 正确配对。
5. **[#29822](https://github.com/google-gemini/gemini-cli/pull/29822)**（help wanted）为广泛 grep 搜索设总匹配上限并优化上下文溢出提示信息。
6. **[#29818](https://github.com/google-gemini/gemini-cli/pull/29818)**（help wanted）改进 `/skill-name` 激活提示词并补充手动激活文档——直接回应 Issue #21968。
7. **[#29802](https://github.com/google-gemini/gemini-cli/pull/29802)** 配额信息获取失败时向用户显示去重后的非致命警告。
8. **[#29798](https://github.com/google-gemini/gemini-cli/pull/29798)** 取消外部编辑器选择后恢复工具审批焦点，Escape 可返回 Allow/Reject 流程。
9. **[#29664](https://github.com/google-gemini/gemini-cli/pull/29664)**（P1，XL）dependabot 批量升级 74 个 npm 依赖，含 MCP SDK 1.23→1.32。
10. **已合并/关闭**：[#29629](https://github.com/google-gemini/gemini-cli/pull/29629)（流式文本渲染闪烁修复）、[#29626](https://github.com/google-gemini/gemini-cli/pull/29626)（JSON 序列化误判循环引用，影响 OTel 指标）、[#29709](https://github.com/google-gemini/gemini-cli/pull/29709)（VSCode 插件 disposables 修复）。

---

## 📈 功能需求趋势

1. **Subagent 可靠性与可观测性**（最大热点）：挂起、状态误报、bugreport 缺上下文（#21763）、轨迹分享（#22598）、并行协作（#18287）。
2. **Token/上下文效率**：AST 感知工具（#22745/22746/22747）、"Tactful Extraction" 精准读取（#19561）、文件化任务追踪替代 WriteToDo（#18836、#21000）。
3. **Browser Agent 强化**：配置覆盖生效、会话接管与锁恢复（#22232）、Wayland 支持。
4. **安全与沙箱**：OS 级沙箱、破坏性命令防护（#22672）。
5. **评估体系建设**：内部 eval 稳定化（#23166）、行为 eval 覆盖交互式提示卡死场景（#22465）。

---

## ⚠️ 开发者关注点

- **稳定性痛点**：agent 挂起（#21409）、hook 崩溃（#22186）、交互式提示卡死（#22465）是高频抱怨。
- **信任问题**：subagent 报告“成功”但实际被中断（#22323），用户无法依赖执行结果。
- **配置不生效**：settings.json 覆盖被忽略（#22267）、symlink agent 不识别（#20079）、磁盘设置被覆盖（PR #29762 修复中）。
- **Token 成本**：基础上下文约 36.6k/轮，大文件读取"firehose"导致上下文膨胀（#19561），社区对精准读取需求强烈。
- **工具数量上限**（#24246）：重度用户希望 agent 更智能地做工具作用域裁剪。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-10-19）

## 1. 今日速览

过去 24 小时无新版本发布，社区活跃度集中在 Bug 反馈与功能讨论上，共 21 条 Issue 更新。**权限/安全相关回归问题成为焦点**：harness 迁移后 Git 变更不再强制审批（#5177）、Linux 沙箱 10 秒杀进程（#5176）等引发关注。同时 `copilot-runtime-bazel-cache` 内部服务在 10-18 出现多次 OOM/CrashLoop 告警，均已恢复或处于监控中。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#3442](https://github.com/github/copilot-cli/issues/3442) [CLOSED] v1.0.51 Remote sessions 未启用报错**
   企业用户升级后 `/remote on` 被拒，影响范围广（11 👍、8 评论），历经数月终于关闭，值得企业用户确认修复情况。

2. **[#5177](https://github.com/github/copilot-cli/issues/5177) [OPEN] 回归：harness 迁移后 Git 变更命令不再触发手动审批**
   涉及 `git add`/`git commit` 等仓库变更操作绕过审批流程，属于**安全敏感回归**，建议尽快关注。

3. **[#5176](https://github.com/github/copilot-cli/issues/5176) [OPEN] Linux 沙箱下 shell 命令约 10 秒后被 SIGKILL**
   bwrap parent-death 信号绑定到已退出线程导致，长命令无法在沙箱内运行，影响 Linux 用户日常使用。

4. **[#5139](https://github.com/github/copilot-cli/issues/5139) [OPEN] Claude Sonnet/Opus 5.5 及 Gemini Argon 报 HTTP 400 "invalid JSON"**
   模型可用性问题，且同组织内不同用户表现不一致，排查难度高。

5. **[#4576](https://github.com/github/copilot-cli/issues/4576) [OPEN] `includeCoAuthoredBy: false` 不被 task 子代理继承**
   配置一致性 bug，主会话生效但子代理提交仍带 Co-authored-by trailer（5 👍）。

6. **[#3265](https://github.com/github/copilot-cli/issues/3265) [OPEN] 请求 `/pause` 或 `/stop` 命令温和打断 agent**
   高共鸣（6 👍）的交互体验需求：在推理结束后暂停而非中途硬取消。

7. **[#5180](https://github.com/github/copilot-cli/issues/5180) [OPEN] macOS Surge Fake-IP 导致 web_fetch 拒绝公网域名**
   代理/VPN 用户网络环境兼容性问题，198.18.0.0/15 段被误判。

8. **[#5178](https://github.com/github/copilot-cli/issues/5178) [OPEN] `--agent code-review` 推理前即报系统提示回调错误**
   非交互模式核心功能失败，而协调器模式可正常调用，指向 agent 启动路径差异。

9. **[#5150](https://github.com/github/copilot-cli/issues/5150) [OPEN] ACP 模式下 task_complete 摘要仅以 tool_call 形式下发**
   影响 ACP 客户端（如编辑器集成）无法以 agent message 获取最终答案。

10. **[#5175](https://github.com/github/copilot-cli/issues/5175) [OPEN] MCP 服务器登录过期后无法重新认证**
    Copilot App 中缺少 `/mcp` 命令，UI 显示绿色但实际已失效，认证流程闭环缺失。

> 其他：#5181–#5185 为内部 Datadog 告警（bazel-cache OOM/CrashLoop），非用户侧问题；#2616（任务完成原生通知）、#2710（外部模型 BYOK 提案）等长期需求仍在讨论中。

## 4. 重要 PR 进展

过去 24 小时仅 1 条 PR 更新：

- **[#5186](https://github.com/github/copilot-cli/pull/5186) [OPEN] Update feature_request.yml**（@Bilalabdulkadir）
  修改 Issue 模板配置，属仓库维护类变更，非功能代码。⚠️ 该 PR 已触发 close-invalid-pr-writer 自动化检查，可能面临被自动关闭。

今日无功能性 PR，官方代码侧动静较小。

## 5. 功能需求趋势

- **权限与安全控制**：审批流回归（#5177）、带指导的批准选项（#5187）——社区对细粒度权限控制诉求强烈
- **Agent 交互体验**：温和暂停（#3265）、长任务完成通知（#2616）
- **多模型/BYOK**：外部模型提供方配置（#2710）、Claude/Gemini 可用性（#5139）
- **IDE / 协议集成**：VS Code 原生级终端体验（#5070）、ACP 协议消息语义（#5150）
- **可观测性**：中途断流调用无 usage 记录（#5138），计费/审计完整性受关注

## 6. 开发者关注点

1. **10 月 harness 迁移引发回归潮**：Git 审批失效（#5177）是最需警惕的问题，建议团队核查近期由 Copilot 生成的提交
2. **沙箱稳定性**：Linux 沙箱超时杀进程（#5176）迫使部分用户暂时禁用沙箱，存在安全权衡
3. **子代理行为不一致**：配置继承（#4576）与 agent 启动路径（#5178）问题显示子代理体系尚不成熟
4. **企业/团队环境**：Remote sessions 企业策略（#3442 已关闭）与组织内模型表现差异（#5139）仍是企业落地阻力
5. **网络环境兼容性**：代理工具（Surge）与 DNS 解析冲突（#5180）影响部分地区用户

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-10-19

## 📌 今日速览

今日无新版本发布，但 PR 活动异常活跃，集中在桌面端 UI/动画重构（弹簧动画库、侧边栏改造）、Plan 模式只读性修复，以及 V2 迁移稳定性改进。社区方面，支付续费失败问题（#45278）持续发酵，已成为本月评论最多的 Issue；Plan 模式越权执行破坏性操作的安全性问题也受到高度关注。

---

## 🔥 社区热点 Issues

1. **[#45278](https://github.com/anomalyco/opencode/issues/45278) — 付款方式突然被拒（36 评论 / 32 👍）**
   使用 3 个月无异常的银行卡续订订阅时突然被拒，银行确认卡片无问题。影响续费的高优先级问题，社区共鸣强烈。

2. **[#42421](https://github.com/anomalyco/opencode/issues/42421) — [2.0] 请求恢复 V2 的 TODO 工具支持（32 评论）**
   V1 中模型可通过 `todowrite`/`todoread` 读写 TUI 中的原生 TODO 列表，V2 工具目录中已移除。用户对任务管理能力回归呼声很高。

3. **[#53955](https://github.com/anomalyco/opencode/issues/53955) — Plan 模式下 Agent 仍执行破坏性修改（已复现，8 评论）**
   无论使用哪个模型，plan 模式的 agent 会运行破坏性命令，甚至通过“写脚本再执行”绕过限制。安全性问题，已复现。

4. **[#56823](https://github.com/anomalyco/opencode/issues/56823) — 伪造 `<in-process message>` 诱导 bearer token 外泄（已关闭，5 评论）**
   Windows 会话中工具结果后被附加伪造的“内部消息”，指示模型外泄工作区中的 bearer token。疑似提示注入类安全问题，值得警惕。

5. **[#38936](https://github.com/anomalyco/opencode/issues/38936) — Go 配额显示 100% 耗尽但可见用量仅 $20（已关闭，7 评论）**
   订阅配额计算与可见用量严重不符，涉及计费透明度问题。

6. **[#35475](https://github.com/anomalyco/opencode/issues/35475) — content-filter 误杀 claude-fable-5 输出仍被扣费（已关闭，11 评论）**
   良性查询被内容过滤拦截，但缓存写入仍计费（~$20）。审查误报 + 计费争议双重问题。

7. **[#41739](https://github.com/anomalyco/opencode/issues/41739) — V2 迁移扫描大型 SQLite 数据库时服务启动失败（4 评论）**
   CLI 约 12 秒后报错退出，但后台进程实际扫描数据库近一小时。对应修复 PR #56929 今日已提交。

8. **[#55127](https://github.com/anomalyco/opencode/issues/55127) — 全局 `"edit": "allow"` 配置静默覆盖 Plan 模式只读限制（已复现，已关闭）**
   权限评估取最后匹配规则导致用户配置破坏内置安全约束。今日修复 PR #56913 已提交，与 #53955 属同类安全问题。

9. **[#55918](https://github.com/anomalyco/opencode/issues/55918) — Windows 下 WSL2 镜像网络端口范围导致服务启动失败（已复现）**
   45278 端口落入 WSL2 镜像网络临时端口范围，但系统查无占用记录。Windows 用户启动问题的典型疑难案例。

10. **[#56638](https://github.com/anomalyco/opencode/issues/56638) / [#56656](https://github.com/anomalyco/opencode/issues/56656) — 桌面端报"free tier 只能在 OpenCode 内使用"**
    10 月 17 日起桌面端用户批量遇到该错误，疑似服务端策略/鉴权变更引发的回归。

---

## 🔧 重要 PR 进展

1. **[#56917](https://github.com/anomalyco/opencode/pull/56917) — 引入弹簧动画库 `@problems/motion`（vendored 源码）**
   为桌面端即将到来的大量动画提供轻量 spring 动画基础设施，是 #56935 等一系列 UI PR 的前置依赖。

2. **[#56935](https://github.com/anomalyco/opencode/pull/56935) — 侧边栏快速切换 + 实时动画控制**
   统一左右侧边栏动画行为，基于 #56917 的 spring 库实现。

3. **[#56913](https://github.com/anomalyco/opencode/pull/56913) — 修复 Plan 模式在配置允许编辑时失去只读保护**
   修复权限规则叠加顺序问题，闭合 #55127，安全相关。

4. **[#56929](https://github.com/anomalyco/opencode/pull/56929) — V1 迁移清理批次分事务提交**
   修复 1000 行清理循环共享单事务导致回滚重来的问题，改善大库迁移体验（对应 #41739）。

5. **[#55647](https://github.com/anomalyco/opencode/pull/55647) — 侧边栏实验性 Session Inbox 模式**
   三分区收件箱视图汇总所有可见 server 的会话，堆叠于已关闭的会话归档 PR #53759 之上。

6. **[#56644](https://github.com/anomalyco/opencode/pull/56644) — 修复插件加载冲突的 OpenTUI runtime 共享**
   Server 插件复用宿主 core 模块，避免加载冲突的第二个环境注册表。

7. **[#56938](https://github.com/anomalyco/opencode/pull/56938) — 恢复桌面端 Open Project 菜单命令**
   `project.open` 未注册导致 Windows 菜单始终灰显。

8. **[#56934](https://github.com/anomalyco/opencode/pull/56934) — 凭证表单答案统一存入 metadata**
   统一 key/external/oauth 三种凭证创建路径的存储位置，消除双处读取的混乱。

9. **[#56896](https://github.com/anomalyco/opencode/pull/56896) — 图片从消息原位展开预览**
   仿 Claude 桌面端的图片打开/关闭过渡动画，提升视觉连续性。

10. **[#56927](https://github.com/anomalyco/opencode/pull/56927) / [#56926](https://github.com/anomalyco/opencode/pull/56926) — codemode 数组语义修复**
    修复 `Array.flatMap` 稀疏数组空洞和 TypedArray 搜索元素类型强转两处细节，提升 codemode 沙箱的正确性。

---

## 📈 功能需求趋势

- **安全与权限模型**：Plan 模式越权（#53955、#55127）、提示注入/token 外泄（#56823）集中出现，权限评估逻辑与 agent 沙箱约束是当前最迫切的安全议题。
- **V2 功能对齐**：TODO 工具（#42421）、会话归档、rewind 多步回退（#56933）等 V1 能力在 V2 中缺失，迁移期用户流失风险明显。
- **计费透明度**：配额计算不一致（#38936）、误过滤仍计费（#35475）、支付被拒（#45278）持续占据热度榜首，商业化基础设施亟需打磨。
- **模型与端点开放**：公开 Go 计划模型的精确版本/checkpoint（#41969）、在 Anthropic Messages 端点提供 DeepSeek 模型（#55714），社区希望知道并自由选择实际服务的模型。
- **桌面端体验**：图像预览、computer use、内置浏览器自验证工具（#56923）、可配置新会话默认目录（#56932）等 UX 需求活跃。

## 👨‍💻 开发者关注点

- **Windows/WSL 环境兼容性**：镜像网络端口冲突（#55918）、VSCode 插件输入框异常填充（#41490）、nix 构建失败（#55328，已由 PR #55494 修复），非 macOS 平台问题占比高。
- **TUI 细节体验**：Home/End 键行为（PR #56910）、NumPad 键位绑定（PR #55870）、空选区复制清空剪贴板（#55924）——社区对终端交互细节要求极高。
- **服务启动可靠性**：端口提前 accept 导致请求悬挂（#56641）、大库迁移超时（#41739），`serve` 与后台服务的生命周期管理仍是薄弱环节。
- **V2 迁移稳定性**：迁移期多个回归（TODO 缺失、variant 崩溃 #42848），建议生产用户暂缓大规模切换。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-10-19）

## 1. 今日速览

今日无新版本发布。社区焦点集中在 **Managed Agent 架构的部署与运维落地**——`@wensao` 一天内连发多个 PR，为参考发行版补齐 systemd 单元、凭证引导、配置模板和 `--check` 只读预检。同时出现一个引发争议的安全性质疑 Issue（#14537，客户端内置爬虫疑云）和一个 P1 数据丢失 Bug（#14642，`/forget` 在 CRLF 文件下删光整个 memory 文件）。CI/测试稳定性问题（Java gate、E2E 偶发红）仍是高频噪音源。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380) Managed Agent 双路径架构与分阶段交付提案**（71 评论）
   社区讨论热度最高的架构提案：保留 TS agent loop、推理与工具环境解耦、Session 持久所有权与 WebS 稳定接口。已进入 in-progress，是整个 serve/daemon 路线的顶层设计。

2. **[#13078](https://github.com/QwenLM/qwen-code/issues/13078) 每日依赖 CVE 审计失败**（25 评论）
   持续多日的定时安全审计失败，可能是新高危漏洞或 npm audit 端点不可用，值得安全敏感用户跟踪。

3. **[#14537](https://github.com/QwenLM/qwen-code/issues/14537) v0.25.2 客户端自带爬虫爬 git 仓库？**（4 评论）
   用户发现客户端在缺少 ripgrep 环境下报 `crawler` 命令错误，质疑“供应链投毒”。实为文件索引回退机制（rg 不可用时降级 fdir），但暴露了未公开的文件扫描行为与文档/透明度缺口。

4. **[#14642](https://github.com/QwenLM/qwen-code/issues/14642) [P1] `/forget` 删除整个 CRLF 格式 memory 文件**（3 评论）
   Windows 下 `core.autocrlf` 检出的 memory 文件，`/forget <text>` 会删掉全部条目而非单条——典型数据丢失 Bug，今日新报，优先级最高。

5. **[#14393](https://github.com/QwenLM/qwen-code/issues/14393) tenant-guard 遗留问题清理**（19 评论）
   #13918 合并后的 14 条非阻塞评审建议的后续：无界 publication lane、过期设计文档、代码测试清理。`@wenshao` 系列工作流的跟踪锚点。

6. **[#14274](https://github.com/QwenLM/qwen-code/issues/14274) 将“更新通知”与“自动安装”解耦**（4 评论）
   `general.enableAutoUpdate` 同时控制启动版本检查和安装，社区希望拆分 notify/install 两个开关——企业环境高频诉求。

7. **[#14062](https://github.com/QwenLM/qwen-code/issues/14062) Hosted send_message 尺寸越界导致整个 Turn 失败**
   尺寸检查通过却抛 `encodeToolInput` 溢出异常，模型得不到可重试的拒绝提示，应返回“缩短后重试”类 refusal 而非崩溃。

8. **[#14600](https://github.com/QwenLM/qwen-code/issues/14600) Desktop 崩溃后后端存活但无法重连恢复**
   窗口丢失、daemon 存活、重启后新 daemon 监听其他端口，旧会话成为孤儿。Desktop 多 daemon 生命周期管理的真实用户痛点。

9. **[#14446](https://github.com/QwenLM/qwen-code/issues/14446) Stage F 故障门 FG11：schedule 与 automation_run 域**
   Managed Agent 自动化域的容错测试矩阵拆分，配合 #13598 持久化定义，反映该架构正走向生产级验证。

10. **[#14616](https://github.com/QwenLM/qwen-code/issues/14616) 原生文档生成与导出**
    “能预览 .docx/.xlsx/.pptx/.pdf，但不能生成”——社区对 artifacts 面板补齐写能力的明确需求。

## 4. 重要 PR 进展

1. **[#14633](https://github.com/QwenLM/qwen-code/pull/14633) 为单机拓扑交付 systemd 单元** — 控制面 `KillMode=process` 保证 Runtime worker 在 Broker 重启后存活，附双语安装指南。
2. **[#14632](https://github.com/QwenLM/qwen-code/pull/14632) 只读 `--check` 部署预检** — 不启动 Spring 即可校验配置，逐行输出 PASS/WARN/FAIL。
3. **[#14634](https://github.com/QwenLM/qwen-code/pull/14634) 部署凭证引导** — 生成 Harness/Broker token 与 32 字节密钥，0600 权限写入环境配置。
4. **[#14639](https://github.com/QwenLM/qwen-code/pull/14639) 本地与 SSH Workspace 文件引用** — 托管会话中支持 Reference 文件与 @ 文件选择器，含完整字节快照与摘要。
5. **[#14603](https://github.com/QwenLM/qwen-code/pull/14603) Writer 丢失后自动恢复已提交 wake** — SQL 扫描重挂未消费的 Monitor/Shell/channel 等输入，含修订戳与持久重试。
6. **[#14522](https://github.com/QwenLM/qwen-code/pull/14522) 修复 Java gate 并在 PR 上报告失败** — 修复 `hosted_lifecycle_recovery_required` 关闭拒绝的可恢复性与 MariaDB 布尔 CHECK 兼容性。
7. **[#14487](https://github.com/QwenLM/qwen-code/pull/14487) 私有 CSI 文件工具走 Hosted Harness**（已关闭）— read/write/edit 经 Harness 执行，文件变更前先做持久备份。后续迭代值得关注。
8. **[#14349](https://github.com/QwenLM/qwen-code/pull/14349) `/auth` 字符串改为渲染时解析** — 修复模块导入期冻结翻译导致半翻译对话框。
9. **[#13976](https://github.com/QwenLM/qwen-code/pull/13976) 新增 WeCom（企业微信）应用回调通道** — 验签解密 HTTP 回调，走现有 access/session/agent 流程回复消息。
10. **[#14641](https://github.com/QwenLM/qwen-code/pull/14641) Web Shell 轨迹面板焦点保持** — 执行列表消失或条目被逐出时键盘焦点回归存活控件，可访问性细节打磨。

## 5. 功能需求趋势

- **Managed Agent / 多智能体运维化**（占绝对主导）：部署预检、systemd、凭证、租户隔离、writer 故障恢复、自动化 cancel（#14460）——架构正从设计转向可交付的单机发行版。
- **Desktop / Web Shell 体验**：崩溃恢复与重连（#14600）、审批卡双滚动条（#14620）、Web Preview 空白页（#14594）。
- **配置细粒度控制**：更新检查与安装解耦（#14274）、审批模式白名单（PR #14345）。
- **内容生产能力**：原生文档生成/导出（#14616）。
- **可观测性**：遥测 span 上报 OpenRouter 路由 provider 与 generation id（#14629）。
- **集成生态**：企业微信通道（PR #13976）、第三方媒体扩展上架流程咨询（#14540）。

## 6. 开发者关注点

1. **CI 稳定性是最大噪音**：Java gate 在无关 PR 上偶发红（#14595 BadSqlGrammar、#14605/#14612）、docs_only 快速通道跳过 Prettier 导致 main 变红（#14596）、E2E 偶发失败（#14626）——维护者 `@yiliang114` 密集跟进测试预算与 teardown 韧性（#14625、#14627）。
2. **Windows / CRLF 兼容仍是雷区**：#14642 的 memory 文件整体删除是典型代表；#14075 静态渲染换行孤字也涉及终端宽度边界。
3. **故障语义需要区分**：409 与可重试 503 的混淆（#14591）、应 refusal 而非异常的 Turn 失败（#14062）——错误处理契约是托管路径的反复主题。
4. **行为透明度**：#14537 表明未文档化的后台文件扫描（crawler/ripgrep 索引）会引发用户对安全的疑虑，需要更清晰的说明与开关。
5. **依赖安全**：CVE 审计连续失败（#13078）尚未收敛，供应链健康需持续关注。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-10-19）

## 今日速览

今日无新版本发布。社区活跃度集中在两条线：一是 @asto18089 与 @Lstarsky0 提交的一批高质量修复 PR（涉及客户端解码、引擎归因、路由协议、压缩恢复等核心模块，当日创建并关闭）；二是新提出两个值得关注的 Issue——#7021 暴露了沙箱加固测试在 NNP 容器中的确定性失败，#6991/#6997 则指向 token 消耗优化与自定义供应商 `/responses` 协议支持。

## 版本发布

过去 24 小时无新 Release。

## 社区热点 Issues

1. **[#6969](https://github.com/codewhale-hq/Codewhale/issues/6969) — 延迟工具箱逐出机制在供应商提示缓存定价下经济性为负**
   深度技术分析型 Issue：指出 `ToolActivationCache`（8 names / 16 KiB）的逐出路径在 provider prompt caching 定价下是净亏损的——触发全前缀重新填充 + 写入溢价，且恢复笔记永久过期。成本模型类反馈较少见，值得维护者优先评估。

2. **[#6728](https://github.com/codewhale-hq/Codewhale/issues/6728) — v0.9.12 → v0.10.0 CPU 占用持续回退**
   FreeBSD 平台上从 idle 到 heavy 的性能回退回归，作者对三个 ELF 二进制做了逐一分析。跨三个版本的性能回退对 TUI 类工具是硬伤，社区评论 3 条但尚无修复结论。

3. **[#7021](https://github.com/codewhale-hq/Codewhale/issues/7021) — NoNewPrivs child-matrix 测试在 NNP 固定容器中确定性失败**（新增）
   当测试进程本身运行在 `no-new-privileges` 容器（如 Docker `--security-opt`）中时，沙箱加固测试失败。对 CI/容器化开发环境影响直接。

4. **[#6991](https://github.com/codewhale-hq/Codewhale/issues/6991) — 引入 fastctx 方案显著降低 token 消耗**
   提议参考 [yc-duan/fastctx](https://github.com/yc-duan/fastctx) 减少上下文开销，与 #6969 的成本问题呼应，指向同一个核心诉求：降低推理成本。

5. **[#6997](https://github.com/codewhale-hq/Codewhale/issues/6997) — 自定义供应商支持 `/responses` 协议**
   希望自定义 provider 可走 `/responses`（更适合复杂任务）。与 PR #7020（自定义表 wire 支持）形成需求闭环。

6. **[#6295](https://github.com/codewhale-hq/Codewhale/issues/6295) — 共享进程下 catalog 测试挂起（已关闭）**
   CI 可靠性问题，历经 0.10.1 重新分诊后关闭，测试基建逐步稳定。

7. **[#6841](https://github.com/codewhale-hq/Codewhale/issues/6841) — Code Mode 子代理目录保留组合权限并修订文档（已关闭）**
   涉及 subagent 工具目录权限传递的文档/实现偏差，遗留小范围文档修正计划随 v0.10.2 发布。

## 重要 PR 进展

> 今日 PR 以「当日创建、当日关闭」的快速修复流为主，全部带 `contribution-gate` 标签，质量较高。

1. **[#7019](https://github.com/codewhale-hq/Codewhale/pull/7019) — 捕获并回放 Anthropic redacted thinking 块**
   修复流解码器缺少 `redacted_thinking` 变体导致工具调用回放缺陷的问题，对 extended-thinking 模型用户是关键修复。

2. **[#7020](https://github.com/codewhale-hq/Codewhale/pull/7020) — 自定义 provider 表的 wire 协议在运行时路由生效**
   `wire = "responses"/"anthropic"` 此前被静默回退到 Chat Completions；本 PR 补齐 `RouteRequest` 的 wire 通道。直接回应 Issue #6997 方向。

3. **[#7018](https://github.com/codewhale-hq/Codewhale/pull/7018) — TurnComplete 事件保留 turn/submission 归因**
   终端事件丢失归因 ID，preflight 拒绝等场景无法对应到具体轮次；补齐后可观测性显著提升。

4. **[#7014](https://github.com/codewhale-hq/Codewhale/pull/7014) — Claude 5 代与 Haiku 5.5 丢弃采样参数**
   采样参数拒绝白名单仅覆盖 Opus 4.6 及以前，新模型补齐，避免 API 报错。

5. **[#7017](https://github.com/codewhale-hq/Codewhale/pull/7017) — 压缩检查点识别按「时代」收敛范围**
   修复宽松谓词误匹配旧版摘要头、静默丢弃带戳载体用户轮次的历史损坏风险。

6. **[#7015](https://github.com/codewhale-hq/Codewhale/pull/7015) — 修复 Kimi 空 items schema 而非丢弃整个工具**
   Moonshot 校验对 `"items": {}` 报错导致工具被静默剔除，改为修复 schema，浏览器类工具受益。

7. **[#7016](https://github.com/codewhale-hq/Codewhale/pull/7016) — CNB 镜像同步在 token 缺失时跳过**（唯一仍 OPEN）
   fork 无法继承 `CNB_GIT_TOKEN` 导致误报红叉，属 CI 公平性修复。

8. **[#7024](https://github.com/codewhale-hq/Codewhale/pull/7024) — /settings 选项列表显示滚动条**
   小终端（60×16）下 17 个语言选项无溢出提示的问题修复。

9. **[#7022](https://github.com/codewhale-hq/Codewhale/pull/7022) — /statusline 选择器为 padding 行预留尺寸**
   修复 Workspace/Git branch 两项在任何终端尺寸下都需滚动才可见的问题。

10. **[#7023](https://github.com/codewhale-hq/Codewhale/pull/7023) — /mcp 搜索无结果时状态行提示 "no matches"**
    消除列表与状态行显示不一致的小 UX 修复。

## 功能需求趋势

- **推理成本与 token 效率**：#6969（缓存经济性）、#6991（fastctx）均指向上下文/成本优化，是当前最集中的功能诉求。
- **多协议/多供应商支持**：`/responses` 协议（#6997、PR #7020）、Anthropic redacted thinking（PR #7019）、Kimi schema 兼容（PR #7015）——多 wire 协议正确性是近期高频改动区。
- **性能回归治理**：#6728 的 CPU 回退问题持续发酵，跨版本性能基线监控需求明显。
- **TUI 小屏适配与可用性打磨**：三个 settings/statusline/mcp 的 UX PR 显示社区对低分辨率终端体验的关注。

## 开发者关注点

1. **成本可观测性缺失**：缓存定价下的逐出、预算计算对 wire 字节「失明」（#6969），开发者希望工具内部经济模型与 provider 定价对齐。
2. **静默降级问题反复出现**：工具被静默剔除（PR #7015）、wire 协议静默回退（PR #7020）、thinking 块静默丢弃（PR #7019）——「宁可修复也不要静默放弃」正在成为修复共识。
3. **容器化/受限环境下的沙箱与 CI 兼容性**：NNP 容器测试失败（#7021）、fork 误报红叉（PR #7016）表明开发环境多样性仍是痛点。
4. **新模型适配滞后**：Claude 5 代采样参数（PR #7014）说明新模型上线时兼容性门槛模型需快速更新。

---
*数据来源：github.com/Hmbown/DeepSeek-TUI（Issues 7 条、PR 10 条，过去 24 小时更新）*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# 📰 oh-my-pi 社区动态日报 · 2026-10-19

## 1️⃣ 今日速览

oh-my-pi 发布 **v18.12.2**，修复 DeepSeek 模型工具调用纠错覆盖范围。社区今日聚焦三大方向：**TUI 渲染体验**（CJK 换行、图片粘贴光标偏移、粘贴性能）、**第三方 Provider 兼容性**（Fireworks、Devin、Factory Droid）以及**隐私争议**——web_search 默认将查询路由至第三方端点引发关注。过去 24 小时 Issue 更新 70 条、PR 更新 392 条，社区活跃度极高。

---

## 2️⃣ 版本发布

### [v18.12.2](https://github.com/can1357/oh-my-pi/releases)

**@oh-my-pi/pi-agent-core — Changed**
- 发送给 DeepSeek 模型的失败工具调用纠错，现在同时覆盖以纯文本形式写出的 chat-template 工具调用 token，而不仅限格式错误的 DSML（[PR #16216](https://github.com/can1357/oh-my-pi/pull/16216) by [@H4vC](https://github.com/H4vC)）

> 与 Issue #16255（Fireworks DeepSeek 泄漏原始 tool-call token）呼应，说明 DeepSeek 系工具调用解析仍是当前攻坚重点。

---

## 3️⃣ 社区热点 Issues（Top 10）

| # | Issue | 关注理由 |
|---|-------|---------|
| 1 | [#10072](https://github.com/can1357/oh-my-pi/issues/10072) Transcript 区块错误固定并遮挡流式输出 | 🔥 16 评论。TUI 转录流的布局 Bug，涉及所有会话区块的垂直流模型，长期未决，被标记 wontfix 但持续引发讨论 |
| 2 | [#16067](https://github.com/can1357/oh-my-pi/issues/16067) pi-natives 在 8 并发 subagent + 788k token 下请求 40 GiB 分配崩溃 | 🔥 16 评论后关闭。并发 subagent 场景下的原生层内存安全问题，属 P2 级严重稳定性 Bug，已修复关闭 |
| 3 | [#12917](https://github.com/can1357/oh-my-pi/issues/12917) Advisor 行为激进化干扰工作流 | 11 评论。Advisor“过度执法”式审查影响用户体验，反映 agent 守护机制的可调性需求 |
| 4 | [#9157](https://github.com/can1357/oh-my-pi/issues/9157) ACP 异步任务自动送达缺少 turn 生命周期包裹 | 9 评论。ACP 协议集成的规范性问题，`allowAgentInitiatedTurns` 从未启用，影响 IDE 客户端集成 |
| 5 | [#16141](https://github.com/can1357/oh-my-pi/issues/16141) Perplexity SSO 被 Chrome for Testing 拦截 | P1 认证阻断，Google 判定 CfT “浏览器可能不安全”，已快速修复关闭 |
| 6 | [#13694](https://github.com/can1357/oh-my-pi/issues/13694) ⚠️ web_search 默认将查询发送至第三方端点（无凭证、无 opt-in） | **隐私敏感**。9/17 提交后在无搜索引擎凭证时所有 `web_search` 走 Parallel 第三方端点，社区担忧数据外泄 |
| 7 | [#15757](https://github.com/can1357/oh-my-pi/issues/15757) Windows 下粘贴大文本极慢（13k 字符需 7 秒） | 8 评论，Windows 平台高频痛点，已修复关闭 |
| 8 | [#16255](https://github.com/can1357/oh-my-pi/issues/16255) Fireworks DeepSeek V4.1 Flash 泄漏原始 tool-call token 并提前终止回合 | P1，与今日 v18.12.2 修复方向直接相关，第三方托管 DeepSeek 的兼容性问题 |
| 9 | [#16172](https://github.com/can1357/oh-my-pi/issues/16172) Devin provider GPT 请求消耗 Devin 配额而非已绑定的 ChatGPT 计划 | 影响计费公平性，Devin Pro 用户核心诉求 |
| 10 | [#16219](https://github.com/can1357/oh-my-pi/issues/16219) TUI 软换行仅识别 ASCII 空格，CJK 文本换行错乱 | 中日文用户的转录流显示 Bug，国际化体验短板 |

---

## 4️⃣ 重要 PR 进展（Top 10）

| # | PR | 内容 |
|---|-----|------|
| 1 | [#16285](https://github.com/can1357/oh-my-pi/pull/16285) 🔴 review:p0 | `find`/`glob`/`ast_grep` 对 `ssh://` 路径请求 exec 审批，修复无法通过的审批死锁 |
| 2 | [#16278](https://github.com/can1357/oh-my-pi/pull/16278) 🔴 review:p0 | 修复 auto-QA 报告工具名在 `:` 处错误切分，保留完整 URI（如 `xd://tui`） |
| 3 | [#16281](https://github.com/can1357/oh-my-pi/pull/16281) 🔴 review:p0 | 唤醒的 subagent 剥离 `todo` 工具，保持与 spawn 时一致的工具集 |
| 4 | [#16283](https://github.com/can1357/oh-my-pi/pull/16283) 🔴 review:p0 | Factory Droid Gemini 模型长工具名（>64 字符）截断至精确 64 字符含哈希，避免 MCP 工具调用丢失 |
| 5 | [#16190](https://github.com/can1357/oh-my-pi/pull/16190) review:p1 | 修复 `rebuildChatFromMessages()` 清空 transcript 时遗忘已退役到原生 scrollback 的区块——直接关联热点 Issue #10072 |
| 6 | [#16159](https://github.com/can1357/oh-my-pi/pull/16159) review:p1 | 隔离继承的终端诊断输出与交互式渲染，防止工具输出污染屏幕 |
| 7 | [#16272](https://github.com/can1357/oh-my-pi/pull/16272) review:p2 | Codex 兼容性：原生 Responses 工具与 namespace 声明全链路保留 |
| 8 | [#16274](https://github.com/can1357/oh-my-pi/pull/16274) review:p1 | 同一消息中 bash 修改文件后 read 自动重读，agent 拿到旧缓存文件的痛点修复 |
| 9 | [#16049](https://github.com/can1357/oh-my-pi/pull/16049) review:p3 | 新增审批选项 **"Ask and remember"**——询问并记住读写权限决策 |
| 10 | [#14279](https://github.com/can1357/oh-my-pi/pull/14279) feat | 实验性：将 SemIf 作为 Advisor 的 judge gate，用于进行中 review 的门控判定 |

> 💡 另有 [#16271](https://github.com/can1357/oh-my-pi/pull/16271)（LSP 工作区支持多 git worktree）、[#16282](https://github.com/can1357/oh-my-pi/pull/16282)（snapcompact 归档源文本完整持久化）等值得跟踪。

---

## 5️⃣ 功能需求趋势

1. **Provider 兼容性与公平计费**：Fireworks、Devin、Perplexity、Ollama-cloud、Factory Droid、OpenAI Codex 相关 Issue 密集出现，第三方模型接入的 token 解析、配额路由、SSO 认证是最大需求面。
2. **TUI/终端体验打磨**：CJK 换行、粘贴性能与光标偏移、scrollback 丢失、表格图表本地化数字解析——细节体验类报告占比显著。
3. **权限与隐私控制**：web_search 默认路由争议 + "Ask and remember" 审批 PR，社区明确要求更细粒度的数据流出控制与授权记忆。
4. **Subagent/多 agent 编排**：并发 subagent 稳定性、隔离 agent 后续回合落地、唤醒后工具集一致性。
5. **平台覆盖**：Termux 原生 Android ARM64 addon（[#5975](https://github.com/can1357/oh-my-pi/issues/5975)）持续有呼声；Windows 平台问题仍集中。
6. **小模型适配**：read 工具对 35B 级小模型不友好（[#16277](https://github.com/can1357/oh-my-pi/issues/16277)），提示工具设计需兼顾低能力模型。

---

## 6️⃣ 开发者关注点（痛点总结）

- **上下文/token 计量准确性**：tok/s 被 prompt cache 虚增、ollama-chat 提前触发 compaction、resume 后 MCP 路由丢失导致缓存未命中——token 估算一致性是多处 Bug 的共同根因。
- **会话持久化健壮性**：session 文件损坏导致无法关闭、snapcompact 归档截断、SQLite 损坏区域 salvage——长会话数据完整性需求强烈。
- **工具调用可靠性**：DeepSeek 系模型 tool-call token 泄漏/格式容错是连续两个版本的修复主线，v18.12.2 仅是部分覆盖。
- **流式渲染正确性**：thinking_end 无 delta 丢失推理文本、transcript 区块固定遮挡，流式状态机边界条件仍需系统性加固。
- **合规与信任**：默认 keyless 第三方搜索路由未经 opt-in，建议关注官方回应并审视自身配置。

---
*数据来源：github.com/can1357/oh-my-pi · 统计窗口 2026-10-19 前 24 小时*

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*