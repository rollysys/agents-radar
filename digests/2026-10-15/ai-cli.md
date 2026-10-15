# AI CLI 工具社区动态日报 2026-10-15

> 生成时间: 2026-10-15 03:44 UTC | 覆盖工具: 11 个

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

# AI CLI 工具生态横向对比分析报告 · 2026-10-15

---

## 1. 生态全景

AI CLI 工具已进入“平台化深耕”阶段：头部产品（Claude Code、Codex）的重心从核心 Agent 能力转向扩展生态（Mods、MCP）与企业级可观测性。**桌面端/多端一致性和 Windows 兼容性成为集中爆发的质量短板**，几乎每个工具都有相关回归反馈。成本控制（token 失控、缓存命中率、压缩策略）取代功能新增，成为社区最高频的讨论主题。同时，自托管/本地模型场景（Qwen Code、Pi、OpenCode）正在形成一条以多 Provider 兼容和 KV cache 效率为核心的差异化路线。

---

## 2. 各工具活跃度对比

| 工具 | 今日热点 Issue 代表 | Issue 活跃度 | PR 活跃度 | Release | 当前焦点 |
|---|---|---|---|---|---|
| **Claude Code** | #91870 Mods 计划（131👍/259评） | 高：十余条新 Issue 集中爆发 | 低：仅 2 条（AI 生成，均关闭） | v2.1.300 | Desktop 2.37337.1 改版回归 + Agent token 失控 |
| **OpenAI Codex** | #48756 快捷键（39👍） | 高：Windows 问题持续发酵 | 很高：20+ 修复合入 | rust-v0.163.0-alpha.10.1 | Windows 桌面端质量（MXC 沙箱、模型目录） |
| **Gemini CLI** | #21409 Agent 挂起（👍8） | 中高：P1 子代理问题为主 | 高：10+ 核心修复 | 无 | 子代理可靠性、沙箱持久化 |
| **Copilot CLI** | #4998 MCP 绑定（已修复） | 中：约 20 条新 Issue | 0 条（经 Release 交付） | v1.0.99-0 等三个版本 | 权限噪声、Headless 可靠性 |
| **OpenCode** | #54172 插件热重载（已复现） | 中高：多条今日新报 | 很高：10+ 修复 PR | 无（dev→production 中） | Worktree 沙箱、插件稳定性 |
| **Qwen Code** | #12380 架构提案（60 评论） | 中：偏工程/架构讨论 | 很高：10+ 含重大架构 PR | 无 | Managed Agent 平台化 + CI 危机 |
| **DeepSeek TUI** | #6980 Android 全面失效 | 低：6 条 | 高：0.10.2 冲刺，13+ 贡献者 PR | 无（0.10.2 RC 中） | 发布工程、跨平台回归 |
| **Pi** | #7547 Windows 调研（85 评论） | 高：89 条更新 | 高：17 条更新，10+ 合入 | 无 | 上下文溢出检测、视频输入 |
| **oh-my-pi** | #15799 新版二进制崩溃（P1） | 很高：120 条更新 | 最高：262 条更新 | v18.11.0 | TUI 性能、压缩估算准确性 |
| **Kimi Code CLI** | — | 无活动 | 无活动 | 无 | — |
| **DeepSeek Harness** | — | 无活动 | 无活动 | dsh-v0.2.1-alpha.3 | 安全脱敏、上下文压缩 |

**要点**：oh-my-pi（262 PR）和 Codex（20+ PR/日）处于高强度修复节奏；Claude Code 呈“Issue 多、PR 少”的输入型活跃；Kimi CLI 与 DeepSeek Harness 社区互动基本缺位。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **上下文压缩与 token 成本** | Claude Code（#66115 缓存过期、#102256 百万级失控）、Copilot CLI（#4724 按 TTL 压缩、#3808 caching）、Gemini CLI（36.6k/turn 基线）、Pi（溢出检测）、oh-my-pi（压缩估算）、Qwen Code（KV cache 复用 #14215） | 全行业最强共识：压缩时机准确性、缓存保留、成本护栏 |
| **子代理/多 Agent 可靠性** | Claude Code（137 Agent 失控 #102248）、Gemini CLI（挂起/误报/不触发三连）、Qwen Code（Managed Agent #12380）、Copilot CLI（权限继承 #5144） | Agent 状态真实性、指令遵循、生命周期管理 |
| **沙箱与安全** | Codex（MXC 启动失败）、Gemini CLI（OS 级沙箱提案 #19873）、Copilot CLI（会话级沙箱开关已落地）、Pi（畸形参数防护 #10944）、oh-my-pi（RFC 9207 校验） | 从“有没有沙箱”转向“沙箱可用性 + 精细化控制” |
| **MCP 生态** | Claude Code（Mods 扩展）、Codex（事件订阅 #49665、Gov 认证）、Copilot CLI（绑定失效 #4998）、Gemini/oh-my-pi（OAuth 修复） | 认证稳定性、事件订阅、权限元数据 |
| **Windows/多端一致性** | Codex、Pi、Claude Code、Gemini CLI、Qwen Code、DeepSeek TUI | 所有主要工具的 Windows 路径均为薄弱面 |
| **长会话稳定性** | DeepSeek TUI（99MB 快照损坏）、oh-my-pi（2GiB 持久化）、Pi（上下文卡死）、OpenCode（推理循环） | 多天会话成为主流用法，持久层健壮性需系统性投入 |
| **IDE/协议集成（ACP）** | oh-my-pi（turn 生命周期）、DeepSeek TUI（VS Code Runtime API）、Gemini CLI（IDE 重连） | CLI 正在 API 化，被嵌入编辑器和基础设施 |

---

## 4. 差异化定位分析

- **Claude Code**：生态旗舰，官方主导 Mods 扩展共建（259 评论反馈闭环），走“平台 + 扩展市场”路线；但 Desktop 改版暴露回归管理短板。目标：全栈专业开发者与企业。
- **OpenAI Codex**：修复机器（copyberry bot 日合 20+ PR），发力 Windows 桌面、Gov/企业认证和 Codex Cloud 互操作。目标：ChatGPT 生态内的企业用户。
- **Gemini CLI**：战略投入 Agent 子系统与 AST 感知代码探索（token 节俭方向独树一帜），零依赖 OS 沙箱提案显示对 Gemini 3 bash 链式偏好的深度适配。
- **Copilot CLI**：交付节奏最快（一日三版本），聚焦 GitHub 原生体验（分享、沙箱会话、跨端同步 #4082）；但 Headless/JVM 沙箱短板限制 CI 场景。
- **Qwen Code**：唯一明确押注 **Managed Agent 平台化**（Java 控制面 + Runtime Broker + 分布式验证），并做竞品记忆导入（`qwen memory import codex`）——明确的迁移抢用户策略；自托管模型性能（KV cache）是差异点。
- **OpenCode**：开源多 Provider 弹性代表（API Key 池、故障转移、免费层），中文社区活跃（微信 Bot 网关）；Worktree 沙箱隔离是技术特色。
- **Pi / oh-my-pi**：TUI 极致打磨 + 多 Provider 长尾兼容（vLLM、llama.cpp、OpenRouter、Cursor、Ling、Reflection），定位高级用户与自托管/网关环境，正向嵌入式 SDK 和 ACP 基础设施演进。
- **DeepSeek TUI / Harness**：发布工程与安全（凭据脱敏）为主，社区贡献流程规范化（贡献者 PR 保留作者），但体量尚小。

---

## 5. 社区热度与成熟度

**成熟稳定期**：Claude Code（Issue 量最大、官方互动强，但 PR 外部贡献几乎为零）、Codex（修复吞吐最高，Windows 问题积压三周未解暴露容量瓶颈）。

**快速迭代期**：oh-my-pi（262 PR/日为全场最高，但 v18.11.0 二进制崩溃显示发布质量管控滞后）、OpenCode（批量收敛平台问题，生产版本呼之欲出）、Qwen Code（架构大跃进 + CI 危机并存）。

**稳步成长期**：Gemini CLI、Pi、Copilot CLI（功能交付快但 PR 透明度低）。

**早期/沉寂**：DeepSeek TUI、DeepSeek Harness（发布驱动，社区反馈少）；Kimi Code CLI 零活动，生态基本缺位。

---

## 6. 值得关注的趋势信号

1. **成本可观测性成为竞争壁垒**：Claude Code 的 OTel 缓存生命周期拆分、oh-my-pi 的压缩记账修复、Pi 的缓存保留切换——精细到缓存 TTL 的成本分析正在从“ nice to have”变为标配。开发者应要求工具提供 token 用量的结构化导出。
2. **Agent 失控风险已被量化**：137 个 Agent 烧掉 53% 周配额、1.5-2M token 未请求修复轮次——结合 Gemini 的状态误报和 OpenCode 的推理循环，**“Agent 行为约束 + 硬性成本护栏”是选型时的必查项**，不能依赖 prompt 指令。
3. **回归管理是当前最大信任杀手**：Claude Desktop 改版一日十余条 Issue、Copilot 新模型 400 错误、oh-my-pi 新版崩溃——社区共识是“先给开关再改版”。升级策略上建议：**预发布版观察 48 小时再跟进**，尤其避开含 UI 改版的首个版本。
4. **自托管/本地模型是差异化蓝海**：Qwen 的 KV cache 不可变需求、Pi 的 llama.cpp 溢出检测、vLLM 兼容性问题——主流头部工具对 OpenAI 兼容长尾后端支持不足，Pi/oh-my-pi/OpenCode 正在填补。
5. **CLI 工具正在“基础设施化”**：ACP 协议、Runtime API、嵌入式 SDK、durable 多租户存储（Pi #10937）——CLI 不再只是终端交互工具，而是可被编辑器、CI、云端 Agent 复用的执行内核。对开发者的启示：**优先选择暴露稳定 API/协议的工具，避免锁定在单一 UI 形态**。
6. **跨产品迁移工具出现**（Qwen 导入 Codex 记忆）：用户数据可携带性开始成为竞争武器，评估工具时记忆/配置导出能力值得纳入考量。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-10-15 | 来源：github.com/anthropics/skills**

---

## 一、热门 Skills 排行（PR）

> 注：本期 PR 评论数据缺失，排行基于 PR 活跃度、关联 Issue 讨论热度和更新时间综合评定。

| # | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | **skill-creator 触发评估隔离修复** [PR #1298](https://github.com/anthropics/skills/pull/1298) | 修复 skill-creator 触发评估的误报/漏报 | 关联 #556、#1352、#1383 三个高讨论 Issue（run_eval 并行 worker 串扰、Windows select() 失败、触发率虚低），是社区痛点最集中的修复 | OPEN |
| 2 | **mcp-builder MCP v2 兼容** [PR #1742](https://github.com/anthropics/skills/pull/1742) | 支持 mcp>=2 的 `streamable_http_client` 及自定义 Header | 关联 Issue #1668；mcp-builder 的 evaluation.py 还被发现全量报 0 分（#1390），该 Skill 质量问题持续发酵 | OPEN |
| 3 | **skill-creator eval viewer 安全加固** [PR #1961](https://github.com/anthropics/skills/pull/1961) | 修复脚本逃逸、DNS rebinding、跨站 POST、转义漏洞 | 直接响应 XSS Issue #1394（escapeHtml 属性注入不安全），安全审计驱动 | OPEN |
| 4 | **docx 孤立批注检测** [PR #1734](https://github.com/anthropics/skills/pull/1734) | 检测 docx 中孤立批注 | document-skills 是官方核心技能，配套 PR #1792（LibreOffice 超时误报成功）同期活跃 | OPEN |
| 5 | **md2video-audio** [PR #1703](https://github.com/anthropics/skills/pull/1703) | Markdown 一键编译为带真人配音的 MP4 视频 | 零成本方案（Marp + TTS），代表内容创作类 Skill 方向 | OPEN |
| 6 | **notion-spec-to-implementation** [PR #1245](https://github.com/anthropics/skills/pull/1245) | 将产品/技术 Spec 拆解为可执行的 Notion 任务 | 持续更新至 10-15，工作流自动化方向代表 | OPEN |
| 7 | **skill-quality/security-analyzer 元技能** [PR #83](https://github.com/anthropics/skills/pull/83) | 对 Skill 本身做五维质量分析与安全审计 | 与生态级信任问题（Issue #492）呼应，讨论周期长达一年 | OPEN |
| 8 | **document-typography** [PR #514](https://github.com/anthropics/skills/pull/514) | AI 生成文档的排版质控（孤行、寡行、编号错位） | “用户不提但影响体验”的典型质量类 Skill | OPEN |

---

## 二、社区需求趋势（Issues 提炼）

1. **Skill 分发与信任机制**（最热）：[Issue #492](https://github.com/anthropics/skills/issues/492)（46 评论）社区 Skill 冒用 `anthropic/` 命名空间，呼唤签名/官方标记等信任边界方案。
2. **组织级 Skill 共享**：[Issue #228](https://github.com/anthropics/skills/issues/228) 期待共享库/分享链接，替代手工传 .skill 文件。
3. **Skill 工程化工具链可靠性**：run_eval 触发率失效（#556/#1352）、benchmark 静默失败（#1383）——Skill 的“评测体系”本身亟需修复。
4. **Token 效率**：[Issue #1487](https://github.com/anthropics/skills/issues/1487) claude-api Skill 单次注入 ~156k token 挤爆上下文；#202 要求 skill-creator 精简、面向执行而非说教。
5. **Agent 记忆与治理**：compact-memory（#1329）、agent-governance（#412）、推理质量门禁流水线（#1385）等高级 Agent 能力提案活跃。
6. **文档处理与测试自动化**：ODT 支持（PR #486）、E2E 测试 AWT（PR #822）、排版质控等实用工具持续有新 PR。

---

## 三、高潜力待合并 Skills（评论活跃、尚未合并）

- [PR #1298](https://github.com/anthropics/skills/pull/1298) skill-creator 评估隔离 — 修复多个高热度 Issue，合并价值最高
- [PR #1742](https://github.com/anthropics/skills/pull/1742) mcp-builder MCP v2 兼容 — 阻塞 mcp>=2 用户，紧迫性强
- [PR #1961](https://github.com/anthropics/skills/pull/1961) eval viewer 安全加固 — 响应已确认的 XSS Issue，安全类 PR 优先级高
- [PR #2004](https://github.com/anthropics/skills/pull/2004) slack-gif-creator 文字居中修复 — 小而确定的修复，10 月新提交，近期有望落地
- [PR #1997](https://github.com/anthropics/skills/pull/1997) skill-creator YAML frontmatter 解析修复 — 同作者（BichengWang）连发两个精准修复，审查响应快
- [PR #1792](https://github.com/anthropics/skills/pull/1792) docx LibreOffice 超时错误处理 — 修复“假成功”问题，风险低

---

## 四、生态洞察

**社区最集中的诉求是：为 Skills 建立“可信的分发机制”与“可靠的工程化评测工具链”**——即一半精力在追问“我能信任谁发布的 Skill、如何与团队共享”，另一半在修复 skill-creator/mcp-builder 等基础设施 Skill 本身的正确性与安全性，这标志着 Skills 生态正从“数量扩张”转向“质量与治理”阶段。

---

# Claude Code 社区动态日报 · 2026-10-15

## 1. 今日速览

Claude Code 发布 **v2.1.300**，为 Mods 扩展机制新增 `virtualText` 提示框装饰，并在 OpenTelemetry 中按缓存生命周期拆分 token 统计。社区焦点集中在 **Desktop 2.37337.1 侧边栏改版引发的回归问题**（Routines 隐藏、分组移除、上下文指标消失等），一天内涌现十余条相关 Issue。此外，多起 **Agent 过度消耗 token** 的成本类反馈值得警惕。

## 2. 版本发布

### [v2.1.300](https://github.com/anthropics/claude-code/releases)
- **Mods 增强**：新增 `virtualText`，可在提示框绘制纯展示文本，不会进入草稿或实际提交的 prompt
- **可观测性**：OpenTelemetry `api_request` 事件新增 `cache_creation_5m_tokens` 和 `cache_creation_1h_tokens`，按缓存写入生命周期拆分统计，便于精细化成本分析

## 3. 社区热点 Issues

| # | Issue | 关注点 |
|---|-------|--------|
| 1 | [#91870](https://github.com/anthropics/claude-code/issues/91870) Mods 可扩展性计划 | 官方主导的旗舰讨论帖（259 评论 / 131 👍），持续吸收社区反馈，Mods 是当前最重要的扩展方向 |
| 2 | [#102088](https://github.com/anthropics/claude-code/issues/102088) Desktop "Group by" 分组选项被移除 | 侧边栏改版回归，会话只能按环境分组，15 评论，社区反弹明显 |
| 3 | [#102158](https://github.com/anthropics/claude-code/issues/102158) Routines 侧边栏区域被强制隐藏 | macOS 回归 + 已有复现，定时任务结果无法在侧边栏查看 |
| 4 | [#102142](https://github.com/anthropics/claude-code/issues/102142) Routines 每次启动重置为隐藏 | 同一系列问题的跨平台复发，与 #102150（Windows/MSIX）呼应 |
| 5 | [#102133](https://github.com/anthropics/claude-code/issues/102133) 运行中 Agent 不再显示计时/token/上下文用量 | 关键监控指标随改版消失，影响长任务监控 |
| 6 | [#102135](https://github.com/anthropics/claude-code/issues/102135) Linux 每次新建会话弹 "Local environment no longer available" | Linux 回归，阻断项目组工作流 |
| 7 | [#102095](https://github.com/anthropics/claude-code/issues/102095) Effort 调整从 1 次点击变为 3 次 | 高频操作交互退化的量化吐槽（每天多 100 次点击） |
| 8 | [#102248](https://github.com/anthropics/claude-code/issues/102248) 违背"禁用多 Agent"指令启动 137 个 Agent | 1 小时烧掉 53% 周配额，指令遵循 + 成本双重问题 |
| 9 | [#102256](https://github.com/anthropics/claude-code/issues/102256) Agent 在未请求的修复轮次消耗 1.5-2M token | 成本失控类反馈的代表案例 |
| 10 | [#49282](https://github.com/anthropics/claude-code/issues/49282) macOS 每次更新二进制重新注册为"新应用" | 老牌问题（35 👍），Privacy & Security 授权反复失效，仍未解决 |

## 4. 重要 PR 进展

过去 24 小时仅 2 条 PR 更新，且均已关闭：

- [#86870](https://github.com/anthropics/claude-code/pull/86870)（CLOSED）：在安全审查 hook 中加入授权安全研究的上下文校验，避免误报 CVP 状态变更
- [#85834](https://github.com/anthropics/claude-code/pull/85834)（CLOSED）：调整 devcontainer 配置修复 HackerOne 访问问题

> 注：两个 PR 均由 AI 生成（AIOS Bounty Engine），内容质量与仓库相关性存疑，实际参考价值有限。

## 5. 功能需求趋势

1. **Mods 扩展生态**（#91870）：官方与社区共建的高优方向，v2.1.300 的 `virtualText` 即来自该反馈闭环
2. **Desktop 侧边栏/UX 回归修复**：今日新 Issue 中约半数与 2.37337.1 改版相关（分组、Routines、上下文指标、usage 卡片 #102130、按钮位置 #102257）
3. **成本控制与可观测性**：缓存过期自动 compact（#66115）、配额重置异常（#98664）、token 细粒度统计——新版 OTel 字段是对此的官方回应
4. **VS Code / IDE 集成**：ghost-text 提示建议（#87999）、会话标签页恢复（#100708、#102252）
5. **调度任务（Routines）体验**：入口隐藏、无标识、不可靠呈现（#67992 等多条）

## 6. 开发者关注点

- **Desktop 改版信任危机**：侧边栏改版集中移除多项功能且部分无开关，社区诉求是“先给开关再改版”，回归管理是当前最大痛点
- **Agent token 失控**：多起案例显示 Agent 无视用户约束（单文件任务跑 137 个 Agent），成本护栏与指令遵循亟需加强
- **缓存成本**：5 分钟空闲即导致 prompt cache 过期重算，长期任务的隐性成本高（#66115）
- **安装与环境稳定性**：macOS 版本更新重注册（#49282）、Windows 重启丢 Local 环境（#95498）、`CLAUDE_CONFIG_DIR` 插件误判（#97264）等环境问题长期未解
- **多平台一致性**：Windows/macOS/Linux 三端的 Desktop 表现差异大，回归测试覆盖不足

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-10-15

## 📰 今日速览

Codex 发布 rust-v0.163.0-alpha.10.1 预发布版本。社区焦点仍集中在 **Windows 桌面端**：MXC 沙箱/浏览器工具 HRESULT 0x80070003 错误、组织设置加载失败等问题持续发酵。PR 侧由 copyberry[bot] 高速合入 20+ 修复，覆盖 Gov MCP 认证、模型目录刷新、exec-server 大文件写入等关键路径。

---

## 🚀 版本发布

- **rust-v0.163.0-alpha.10.1** — 预发布版本（[Release](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.10.1)）

---

## 🔥 社区热点 Issues

1. **#48324 — Windows 桌面端无法加载组织设置（43 评论）**
   Codex 在 ChatGPT Windows 桌面应用中启动即报 "Unable to load organization settings"，composer 无法加载，Web 与 CLI 正常。运行近三周仍未解决，且用户因 composer 不出现无法提交反馈，形成反馈死循环。
   [链接](https://github.com/openai/codex/issues/48324)

2. **#53188 — Windows 浏览器工具初始化失败：MXC HRESULT 0x80070003（34 评论）**
   浏览器控制/Computer Use 技能包在 Windows 上无法启动，与 #53518 疑似同根因，或与 #50915 的 BitLocker 卷锁定问题相关，指向 MXC 沙箱启动器对系统卷状态的敏感依赖。
   [链接](https://github.com/openai/codex/issues/53188)

3. **#50168 — Dot 无法创建/续写 Codex Cloud 任务（20 评论）**
   Dot 可列出/读取云任务，但 `cloud_threads` 写路径返回 UNKNOWN / CloudThreadNotFoundError，属云到云互操作故障。姊妹 Issue #51372 已关闭，或已有修复进展。
   [链接](https://github.com/openai/codex/issues/50168)

4. **#41982 — Android 远程任务触发 git.exe 崩溃风暴与系统级 OOM（20 评论）**
   严重性能问题：远程打开任务引发 git.exe 反复崩溃并耗尽系统内存，自 9 月初持续存在。
   [链接](https://github.com/openai/codex/issues/41982)

5. **#52747 — 桌面端注入未知配置 `code_mode_tool_description_first` 导致强制清理拒绝（20 评论）**
   未知注入配置 + 不透明的 forced-cleanup 拒绝，暴露出配置透明度和沙箱清理机制的可观测性不足。
   [链接](https://github.com/openai/codex/issues/52747)

6. **#51308 — GPT-6 Sol / GPT-6.1 Sol / GPT-6 Luna 缺失于模型选择器（16 评论）**
   Windows 桌面端新模型不可见，与 #54083（"Model not found"，15 评论）共同指向模型目录同步问题——**今日 PR #54169「账号变更后重载模型目录」很可能就是官方响应**。
   [链接](https://github.com/openai/codex/issues/51308)

7. **#48756 — Mini 全局快捷键 ⌥+Space 无法更改或禁用（14 评论，39 👍）**
   今日 **点赞数最高**的 Issue。macOS 上强占 ⌥+Space 且不可配置，与其他输入法/启动器冲突，社区强烈要求可配置性。
   [链接](https://github.com/openai/codex/issues/48756)

8. **#49665 — 自定义 MCP 事件可发现但 Chat/Work 无法订阅（14 评论）**
   MCP 2.0 插件的自定义事件暴露成功，但缺少原生订阅动作，阻碍事件驱动型 MCP 生态。
   [链接](https://github.com/openai/codex/issues/49665)

9. **#51049 — Desktop 对 dot 创建任务的后续操作失败（14 评论）**
   `AbsolutePathBuf deserialized without a base path`——云任务与本地 Windows cwd 混用时的路径反序列化缺陷。
   [链接](https://github.com/openai/codex/issues/51049)

10. **#50915 — 无关 BitLocker 卷锁定导致 MXC 沙箱启动失败（10 评论，7 👍）**
    项目不在锁定卷上，但 MXC 仍在命令启动前失败，沙箱对系统环境的过度敏感是 Windows 高频痛点。
    [链接](https://github.com/openai/codex/issues/50915)

---

## 🔧 重要 PR 进展

1. **#54170 — Gov MCP 服务器保留 ChatGPT 认证**：修复 `gov.chatgpt.com` 被误判为不可信域名、强制切换 OAuth 的问题，本地 Gov Apps 可保留 ChatGPT auth provider。
   [链接](https://github.com/openai/codex/pull/54170)

2. **#54169 — 账号变更后重载模型目录**：登入/登出后 `model/list` 不再使用过期 provider 设置，无需重启。直接回应 #51308 / #54083 模型缺失问题。
   [链接](https://github.com/openai/codex/pull/54169)

3. **#54135 — exec-server WebSocket 支持大文件写入**：direct 模式下 8 KiB 请求上限导致较大 `fs/writeFile` 断连，改用专用 WebSocket 构造器。
   [链接](https://github.com/openai/codex/pull/54135)

4. **#54119 — 沙箱提示禁用时仍允许 stdin 审查**：修复 granular sandbox 审批关闭后 `write_stdin` 误拒仍有权限终端输入的问题。
   [链接](https://github.com/openai/codex/pull/54119)

5. **#54114 — 终端完成状态与阻塞原因上报**：区分 `done`/`error`（此前统一折叠为 `idle`），阻塞提示附带原因，改善可观测性。
   [链接](https://github.com/openai/codex/pull/54114)

6. **#54098 — 环境就绪变化时保持环境工具稳定**：环境未 ready 时仍公告已配置工具，避免工具列表闪烁。
   [链接](https://github.com/openai/codex/pull/54098)

7. **#54079 — 弃用被拒绝的 MCP OAuth refresh token**：避免协调式 OAuth 刷新对已确定失效的 token 无限重试（含 runtime 重建后）。
   [链接](https://github.com/openai/codex/pull/54079)

8. **#54094 — MCP 失败码在 metrics/spans 中保留具体分类**：替代笼统的 `unknown` 错误码，便于诊断 #49665 这类 MCP 问题。
   [链接](https://github.com/openai/codex/pull/54094)

9. **#54076 — 修复 PowerShell 字面命令的误判 URL 启动**：安全检查不再把字面 `start` 参数或跨命令 URL 误判为 URL 启动，减少 Windows 误拦截。
   [链接](https://github.com/openai/codex/pull/54076)

10. **#54151 — 统一 keymap 目录生成**：用 `define_keymap_actions!` 消除 `/keymap` 目录与配置绑定查找的双份维护。
    [链接](https://github.com/openai/codex/pull/54151)

> 其他值得注意：#54078 升级 `gix` 至 0.89.0、#54087 升级 Bazel `rules_python` 至 2.4.2、#54096 新增按需 schema 与 Python SDK 生成的 Bazel 目标。

---

## 📈 功能需求趋势

- **Windows 桌面端质量**：占热点 Issue 的绝对多数（MXC 沙箱、BitLocker、WSL、git.exe 崩溃、模型选择器），是最迫切的修复方向
- **Dot ↔ Codex Cloud 互操作**：任务创建/续写/路径反序列化多点故障，云-云与云-本地边界是新高发区
- **可配置性与 UI 可控性**：全局快捷键、Pet 悬浮窗、会话标签页（#18778，8 评论 11 👍）
- **MCP 生态深化**：事件订阅、Gov 域认证、错误码可观测性
- **新模型可用性**：GPT-6 系列在桌面端的可见性与路由

## ⚠️ 开发者关注点

1. **MXC 沙箱在 Windows 上的脆弱性**：BitLocker 锁定卷、ACL 残留、HRESULT 0x80070003 等多种环境因素均可导致启动失败，且报错不透明
2. **反馈通道死锁**：#48324 中 composer 无法加载导致用户连提交反馈的入口都没有——核心启动失败场景需独立于 UI 的反馈路径
3. **状态同步陈旧问题**：模型目录、账号路由（#52928 CLI workspace routing）在账号/配置变更后需手动重启或 workaround
4. **资源占用与稳定性**：git.exe 崩溃风暴、browser-main 静默退出（#53965）、大型 PDF 预览导致的崩溃循环（#42730）
5. **多任务/多会话下的崩溃循环**：渲染器崩溃重载循环（#53192）影响任务可恢复性

---
*数据来源：github.com/openai/codex | 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-15）

## 📰 今日速览

今日无新版本发布，但社区活跃度集中在**自动更新可靠性、沙箱会话持久化、Windows 兼容性**三大方向的 PR 修复上。Agent 子系统仍是 Issue 聚焦点——subagent 挂起、终止状态误报等老牌 P1 问题持续引发讨论。多位贡献者（@elberthc-byte 尤为高产）在 core/IDE 集成方面提交了成体系的修复。

---

## 🐛 社区热点 Issues

1. **#22323 [P1] Subagent 达到 MAX_TURNS 后误报为 GOAL 成功**
   子代理因达到轮次上限被中断，却报告 `success / GOAL`，掩盖了真实中断原因，直接影响任务可靠性判断。13 条评论为今日最多。
   [链接](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **#21409 [P1] Generalist agent 无限挂起（👍 8）**
   委托给 generalist agent 后永久挂起，连创建文件夹这样的简单操作也会卡死，用户需等待一小时以上手动取消。今日获 8 个 👍，用户痛点强烈。
   [链接](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **#19873 [P2] 零依赖 OS 沙箱 + 执行后意图路由**
   战略性提案：Gemini 3 原生偏好 bash 链式操作（grep/cat/sed），应通过 OS 级沙箱释放此能力而不牺牲安全。9 条评论，方向性讨论热度高。
   [链接](https://github.com/google-gemini/gemini-cli/issues/19873)

4. **#21968 [P2] Gemini 几乎不主动使用 skills 和 sub-agents**
   自定义 skill（如 gradle/git）只有在显式指令下才会被调用，自主触发率极低，影响整个技能/子代理生态的实用性。
   [链接](https://github.com/google-gemini/gemini-cli/issues/21968)

5. **#22745 [P2] AST 感知文件读取/搜索/映射的 EPIC**
   评估 AST-aware 工具能否通过精确定位方法边界减少 token 噪声与错位读取，是代码探索架构的重要演进方向。
   [链接](https://github.com/google-gemini/gemini-cli/issues/22745)

6. **#22186 [P1] get-shit-done output hook 导致崩溃**
   输出 hook 在打印用户摘要时反复引发崩溃，属稳定性关键缺陷。
   [链接](https://github.com/google-gemini/gemini-cli/issues/22186)

7. **#21983 [P1] Browser subagent 在 Wayland 下失败**
   Linux Wayland 用户无法使用浏览器子代理，终止原因同样是误导性的 `GOAL`。
   [链接](https://github.com/google-gemini/gemini-cli/issues/21983)

8. **#22267 [P2] Browser Agent 忽略 settings.json 配置覆盖**
   `AgentRegistry` 读取并合并了配置，但 Browser Agent 实际不生效（如 maxTurns），配置链路存在断裂。
   [链接](https://github.com/google-gemini/gemini-cli/issues/22267)

9. **#24246 [P2] 工具数 > 128 时触发 400 错误**
   期望 agent 更智能地限制工具作用域，与 MCP 扩展生态的用户直接相关。
   [链接](https://github.com/google-gemini/gemini-cli/issues/24246)

10. **#22672 [P2] Agent 应阻止/劝阻破坏性操作**
    模型在 git reset、--force、DB 操作等场景缺乏安全护栏，企业级用户的合规关切。
    [链接](https://github.com/google-gemini/gemini-cli/issues/22672)

---

## 🔧 重要 PR 进展

1. **#29757 修复自动更新 PATH 遮蔽导致的虚假成功**
   更新后若实际执行的二进制被 PATH 遮蔽仍会误报成功，用户继续跑旧版本。修复后主动验证生效二进制。
   [链接](https://github.com/google-gemini/gemini-cli/pull/29757)

2. **#29750 修复 .env 加载顺序导致配置占位符失效**
   settings 解析先于 `.env` 注入，`"Authorization": "$TOKEN"` 类配置展开为空。调整 `loadSettings()` 加载顺序。
   [链接](https://github.com/google-gemini/gemini-cli/pull/29750)

3. **#29671 [P1] 沙箱模式下持久化认证与会话**
   解决容器沙箱下反复要求登录、会话丢失、文件夹信任循环重启问题（关联 #29461），体验级修复。
   [链接](https://github.com/google-gemini/gemini-cli/pull/29671)

4. **#29457 [P1] read-many-files 用 glob 匹配替代模糊逻辑（已关闭）**
   修复关键 context 膨胀 bug：二进制资源（图片/PDF）被误判为“显式请求”而注入上下文。
   [链接](https://github.com/google-gemini/gemini-cli/pull/29457)

5. **#29578 MCP OAuth 离线访问与 refresh token 修复（已关闭）**
   Google Workspace 等远程 MCP 服务器登录时未获取 refresh token、后台刷新失败的问题。
   [链接](https://github.com/google-gemini/gemini-cli/pull/29578)

6. **#29753 [P1] Windows openDiff 参数格式化与引号处理**
   Windows 下经 `cmd.exe` 启动外部 diff 编辑器时参数格式错误，属平台兼容关键修复。
   [链接](https://github.com/google-gemini/gemini-cli/pull/29753)

7. **#29744 IDE 重启后 /ide enable 自动重连**
   VS Code Reload Window 后 CLI 报 Disconnected 且需完全重启才能恢复，此 PR 实现自动重连。
   [链接](https://github.com/google-gemini/gemini-cli/pull/29744)

8. **#29749 原子写入尊重只读文件与硬链接**
   修复 #29499 引入的回归：rename 跳过权限检查，静默覆盖 0444 只读文件并拆散硬链接。
   [链接](https://github.com/google-gemini/gemini-cli/pull/29749)

9. **#29670 中途重试退避支持 abort 感知**
   按 ESC 取消后重试循环仍在跑、继续发 RETRY 事件和遥测，现统一走 abort signal。
   [链接](https://github.com/google-gemini/gemini-cli/pull/29670)

10. **#29756 API 请求 headers/body 超时可配置**
    新增 `requestHeadersTimeoutMs/requestBodyTimeoutMs`，解决长思考（>5 分钟无流式输出）被 `UND_ERR_BODY_TIMEOUT` 中断重放的问题。
    [链接](https://github.com/google-gemini/gemini-cli/pull/29756)

> 另值得关注：#29725（tmux 下同步输出+spinner 隔离，消除闪烁，已关闭）、#29736（调度器统一发射工具调用组，重构 UI 前瞻逻辑，已关闭）。

---

## 📈 功能需求趋势

1. **Agent/子代理可靠性**：今日 Issue 的绝对主题——挂起、误报状态、不主动调用 skill、缺少自我上下文（#21763 bug 报告不含 subagent 信息）。
2. **AST 感知代码探索**：#22745/#22746/#22747 系列 EPIC，配合 #19561 “Tactful Extraction” token 节俭读取，指向降低上下文成本这一核心方向。
3. **沙箱与安全**：OS 级零依赖沙箱（#19873）、破坏性操作防护（#22672）、沙箱会话持久化（PR #29671）形成完整安全叙事。
4. **浏览器/IDE 集成**：browser_agent 的配置覆盖、会话接管（#22232）、Wayland 支持，以及 IDE 断线重连等。
5. **任务追踪演进**：以文件系统 CRUD 替代 in-context WriteToDo（#18836、#21000），对抗 context rot。

---

## ⚠️ 开发者关注点

- **子代理是最大痛点**：挂起（#21409）、状态误报（#22323）、不触发（#21968）三个 P1/P2 问题叠加，用户对“指示模型不要用子代理”这类 workaround 已感疲惫。
- **配置生效链路脆弱**：settings.json 覆盖被忽略（#22267）、.env 加载顺序错误（PR #29750）、symlink agent 不识别（#20079），配置驱动的可预期性亟待加强。
- **上下文/token 成本敏感**：read-many-files 误注入二进制（PR #29457）、36.6k/turn 基线过高，社区对 token 效率的关注度持续上升。
- **长任务稳定性**：5 分钟超时中断（PR #29756）、自动更新虚假成功（PR #29757）表明长时/后台场景的鲁棒性仍需补课。
- **平台差异**：Windows diff 命令、Wayland 浏览器代理等平台级问题在核心功能上仍有明显缺口。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-15**

---

## 1. 今日速览

过去 24 小时 Copilot CLI 发布了 **v1.0.99-0** 预发布版，引入全屏分享菜单和更灵活的 sandbox 会话控制，同时受信任仓库插件可自动安装更新。社区新增约 20 条新 Issue，其中 **macOS 更新后 MCP 绑定文件失效**（#4998）已确认修复关闭，而 **空闲会话 CPU 占满**（#5148）和 **Claude/Gemini Argon 模型 400 错误**（#5139）是今日新出现的高优先级问题。

---

## 2. 版本发布

### v1.0.99-0（预发布）
- **新增**：`/share` 无参数打开全屏操作菜单，分享当前会话
- **改进**：`/sandbox` 支持仅对当前会话启用沙箱，无需全局开启；受信任仓库插件在 chat 运行前自动安装/更新

### v1.0.98-2
- **改进**：`/ask` 答案支持 Ctrl+E 展开、Ctrl+Y 复制全文，可用 `/ask` 或 `/btw` 重新打开最近一次完成的回答
- **修复**：Node 环境下子进程退出信号丢失时命令钩子仍能可靠完成

### v1.0.98
- 新增 **Gemini 4 Argon** 模型支持
- 修复分屏会话切换后 MCP 状态与 `/mcp` 命令不同步的问题
- 恢复会话时正确处理被放弃的 pending-permission 工作

---

## 3. 社区热点 Issues

1. **#4998** [已关闭] macOS 更新/重启后 `.mcp-writer.binding` 持久化过期的文件系统设备 ID，导致所有会话无法处理提示（11 评论 / 11 👍）
   关注度最高的稳定性问题，影响面广（1.0.90-3），现已关闭，建议升级验证。

2. **#5148** 空闲会话将单个 CPU 核心占满 100%（`notify-rS debouncer loop` 空转）
   今日新报。4 个并发会话各占满一核，属于明显的性能回归，值得资源敏感用户警惕。

3. **#5139** Claude Sonnet/Opus 5.5 及 Gemini Argon 模型持续报 HTTP 400 "request body is not valid JSON"
   同环境其他模型正常，疑似请求序列化 bug，可能与 v1.0.98 新增的 Gemini Argon 支持相关。

4. **#5140** Headless 模式中模型返回 `finish_reason: "tool_calls"` 但无工具调用时，CLI 以 exit 0 静默退出、中断长任务
   对 CI/自动化流水线用户是严重问题。

5. **#5146 / #5144** 本地操作和子代理产生数十次重复权限请求，淹没用户
   两条相关 Issue 均指向权限系统噪声过大，请求允许子代理继承主代理权限。

6. **#4082** Copilot CLI 与桌面应用跨端会话同步（14 👍）
   高票功能请求，多端用户的核心痛点。

7. **#3808** 针对 Claude Sonnet 优化 prompt caching 以降低延迟和 token 成本（8 👍）
   长上下文用户成本敏感，持续活跃中。

8. **#4950** BYOK 自定义 provider 被强制 `temperature=0`，导致推理模型退化及上下文溢出时静默挂起
   自托管/小模型用户的重要兼容性问题。

9. **#5143** 后台代理空闲后，后续指令延迟数分钟到数小时，但状态仍显示 "running"
   后台代理状态机与实际执行不一致。

10. **#5105** macOS sandbox 阻断 Gradle daemon 本地连接，即使已放行本地网络
    与已关闭的 #4516（JVM 进程不遵守 RW 路径授权）同属沙箱对 JVM 生态支持不足的问题。

---

## 4. 重要 PR 进展

过去 24 小时无 PR 更新（0 条），本节省略。近期修复主要通过 Release 直接交付（见第 2 节）。

---

## 5. 功能需求趋势

- **跨端/会话体验**：CLI 与桌面应用会话同步（#4082）、会话命名显示（#5132）、时间戳（#2535）
- **权限与沙箱精细化**：会话级沙箱开关（已在新版落地）、子代理权限继承（#5144）、减少权限噪声（#5146、#5131）
- **成本与性能优化**：prompt caching 优化（#3808）、按缓存 TTL 空闲自动压缩（#4724）
- **BYOK/自定义模型兼容**：采样参数可控（#4950）、reasoning_text 回传（#5145）、Responses API 兼容性
- **Headless/自动化**：非交互模式可靠性（#5140）、ACP 模式配置一致性（#5133）
- **新模型支持**：Gemini 4 Argon 已落地，但配套稳定性仍在磨合（#5139）

---

## 6. 开发者关注点

1. **权限请求疲劳**：多条 Issue 反馈权限弹窗过于频繁、打断输入，是当前最集中的体验痛点
2. **Headless 模式可靠性**：静默退出、状态不准等问题直接影响 CI 用户信任
3. **JVM 生态兼容差**：Maven/Gradle 在沙箱下反复受阻
4. **资源占用**：空闲 CPU 空转（#5148）需尽快修复
5. **企业环境**：Kerberos 代理下 MCP 失败（#5142）、Managed account policy 报错（#5130）
6. **BYOK 用户边缘案例**：自定义 provider 的采样参数和推理内容回传仍不完善

**建议**：企业用户暂缓升级至含 Gemini Argon 的版本（受 #5139 影响），持续关注 #5148 CPU 问题的修复进展。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-10-15）

## 📌 今日速览

今日无新版本发布，但社区修复活动非常活跃：单日新增多个核心修复 PR（工作树迁移、技能发现、输出限制提示、Windows 服务关闭等）。稳定性与 Desktop 端工作树（worktree/sandbox）会话绑定问题成为今日焦点，Go 服务（Responses API）相关的旧缺陷也被集中关闭，显示平台侧问题正在批量收敛。

---

## 🚀 版本发布

过去 24 小时无新 Release。值得注意：#55589 已将 `dev` 提升至 `production`，包含安装器性能修复、MCP 权限元数据传递等改进，正式版本应很快发布。

---

## 🔥 社区热点 Issues（Top 10）

1. **#55571 [CLOSED] read 工具绝对路径读取失败**（5 评论）
   今日新报并已快速关闭。`read` 工具对绝对路径报 "File not found"，相对路径正常，影响 Linux 用户基本使用体验，属高优先级核心 Bug。

2. **#55584 [OPEN] deepseek-v4.1-flash 推理重复循环 + reasoning_text 400 错误**（3 评论）
   今日新报。思考模式下出现推理内容重复循环，并伴随 `reasoning_text must be passed back` 的 400 错误，作者分析为两个并发 Bug，涉及长会话状态管理。

3. **#54172 [OPEN, 已复现] 插件热重载导致 "Agent not found"**（5 评论）
   已标记 reproduced：插件文件变更触发重载时，agent 目录被清空，导致进行中的会话报 `Agent not found`。插件生态稳定性的关键问题。

4. **#50257 [OPEN] Desktop 模型选择器所有 V2 模型显示 "No reasoning"**（6 评论，👍2）
   `capabilities.reasoning` 从未被设置，导致所有支持推理的模型（deepseek-v4.1-flash、kimi-k3 等）能力标识错误，影响用户模型选型。

5. **#51992 [OPEN] Git worktree 项目新会话绑定到主工作树**（3 评论）
   Desktop 端在 worktree 沙箱项目中创建的新会话错误绑定到主目录，会话隔离失效——对应修复 PR #52094 正在推进。

6. **#55435 [OPEN] 免费层仅限 OpenCode 客户端内使用**（6 评论）
   多位用户反馈免费模型报错，涉及免费层使用限制策略的沟通与客户端版本问题（v2.0.29），社区讨论热烈。

7. **#55308 [OPEN] 请求可关闭系统提示中的 environment 块**（7 评论）
   用户希望控制系统提示词注入的环境信息，关系到 token 消耗与提示词可控性，属于提示词透明度方向的高热需求。

8. **#40171 [CLOSED] Go 服务 /v1/responses SSE 事件流不完整**（7 评论，👍2）
   流式响应缺少 `response.output_item.added` 等事件，破坏 Codex 风格客户端兼容性。今日关闭，平台 API 一致性显著改善。

9. **#42090 [CLOSED] deepseek-v4-pro 经 Responses API 报 400（web_search 工具被拒）**（9 评论）
   工具 schema 序列化缺少 `name` 字段导致上游拒绝。评论数最高的 Go 服务问题今日关闭。

10. **#54665 [CLOSED] ACP 报错 "no such column: project_id"**（6 评论）
    数据库 schema 迁移不完整导致的 ACP 启动失败，与今日 PR #55602 修复的 worktree 迁移或为同一波 schema 问题。

---

## 🔧 重要 PR 进展（Top 10）

1. **#55602 修复：worktree 迁移跳过孤儿项目目录** — 修复迁移 `20260812213948_worktree` 中孤儿 `project_directory` 行导致的问题（关联 #55583，与 #54665 ACP 错误同源）。
2. **#55597 修复：限制技能发现与监听范围** — 合并三个 Issue（#55367/#45961/#51080），取代两个旧 PR 并保留原作者贡献，解决技能发现的性能与稳定性问题。
3. **#55594 修复（TUI）：显示输出限制失败** — Runner 达到输出限制后的重试失败此前在 TUI 中静默无提示，现正确展示错误。
4. **#55595 修复（CLI）：Windows 会话结束时关闭后台服务** — 避免重启/登出后遗留 `service.json` 导致下次启动白等 5 秒。
5. **#55592 修复：脱敏导出剔除压缩回放上下文** — 会话导出的 sanitized 版本此前包含完整消息及 base64 媒体，存在隐私泄漏风险。
6. **#52094 修复（Desktop）：新会话保持在所选 worktree 中** — 对应热点 Issue #51992/#51196，worktree 沙箱隔离的核心修复。
7. **#55586 修复（CLI）：安装器改为轮询下载进度** — 自定义进度条使 curl 安装慢数倍（VM/WSL 尤甚），改为轮询后大幅提速。已合入生产通道。
8. **#54372 修复：迁移 provider whitelist/blacklist 至 model overrides** — 修复 V2 规范化丢弃文档承诺的模型过滤配置（#49986）。
9. **#51133 [贡献者] Runner 每步等待插件激活** — 插件激活竞态曾导致空插件列表，现在每个执行步骤前确保激活完成。
10. **#55588 [已关闭] 支持 @-mention 项目目录外文件** — 扩展 fs.find 支持指定基础目录的模糊匹配，用户体验增强。

---

## 📈 功能需求趋势

- **稳定性与竞态修复优先**：插件热重载、MCP 冷启动竞态、迁移 schema 等是当前最集中的修复方向。
- **Desktop / Worktree 沙箱体验**：会话与 worktree 绑定、嵌套目录解析等桌面端问题持续高发。
- **提示词可控性**：系统提示 environment 块开关、脱敏导出等"透明度"需求上升。
- **多 Provider 弹性**：API Key 池、限流自动故障转移（#42502/#42513，👍3+2）、免 key 的 OpenAI 兼容 Provider 持续获赞。
- **可观测性**：subagent 耗时/成本展示、本地用量分析面板（#42560）。
- **本地化与渠道拓展**：中文 locale（#40270）、微信 Bot 网关（#41366）代表中文社区活跃诉求。

---

## ⚠️ 开发者关注点

1. **长会话可靠性**：deepseek 系列推理重复循环、`reasoning_text` 回传 400，长任务下的状态管理是高频痛点。
2. **免费层/Go 服务计费与限制**：免费层使用限制报错（#55435）、额度显示对不上账（#42505）、Go API 兼容性问题集中出现，虽多数已关闭，但反映平台侧沟通需加强。
3. **性能回归敏感**：`session list` 阻塞 2 分钟（#37435）、安装器进度条拖慢下载，说明社区对启动路径性能高度敏感。
4. **工具基础能力**：绝对路径读取失败、模型选择器无法区分同名模型/丢失 Provider 分组（#55288/#55296），TUI/Desktop 的细节体验仍是短板。
5. **插件生态成熟度**：热重载破坏会话、激活竞态等问题表明插件系统需要在稳定性上继续投入。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-10-15

## 📌 今日速览

今日无新版本发布，社区焦点集中在 **Managed Agent 架构的持续推进**（双路径架构提案 #12380 讨论热度领先，60 条评论）和 **CI/CD 体系的大规模修缮**（#14205 合并后引发多个 CI 测试与流程修复 PR）。此外，自托管/本地模型场景下的**上下文性能问题**（#14203、#14215）成为用户侧新热点，vLLM 兼容性 400 错误（#14112、#14115）持续发酵。

---

## 🐛 社区热点 Issues

### 1. Managed Agent 双路径架构与分阶段交付提案
**#12380** | OPEN | 60 评论 | [@doudouOUC](https://github.com/QwenLM/qwen-code/issues/12380)
**为什么重要**：定义了 Qwen Code 下一阶段的核心架构方向——保留 TypeScript agent loop、模型推理与工具环境供给解耦、Session 持久化归属与可恢复工具执行。是本周讨论量最高的 Issue，涉及 multi-agent、web-shell、平台分发等多条 roadmap。

### 2. 主分支 CI 确定性红：meta 测试仍断言 #14205 之前的内联工作流列表
**#14225** | CLOSED | [@yiliang114](https://github.com/QwenLM/qwen-code/issues/14225)
**为什么重要**：主分支 CI 确定性失败导致**每个合并 main 的 PR 都继承红状态**，是当前最高优先级（P1）的工程问题，当天即被关闭修复。

### 3. vLLM 后端的 OpenAI 兼容 Provider 每次请求都 400
**#14112** | OPEN | [@0xABADBABE-ops](https://github.com/QwenLM/qwen-code/issues/14112)
**为什么重要**：无参数工具序列化缺少 `parameters` 字段 + 不支持 `tool_choice: "required"`，导致 vLLM 后端（如 TheHive AI）**完全不可用**，直接影响第三方模型生态。

### 4. 无 body 的 Provider 400 错误无法诊断
**#14115** | OPEN | 6 评论 | [@0xABADBABE-ops](https://github.com/QwenLM/qwen-code/issues/14115)
**为什么重要**：与 #14112 是姊妹问题——CLI 只显示 `400 (no body)`，不透出 `x-request-id`、响应头等关键信息，排障困难。建议在 CLI 错误与 `OPENAI_ERROR` 日志中暴露完整错误详情。

### 5. 请求尾部的记忆目录导致混合模型每步全量重处理 prompt
**#14203** | OPEN | [@saintcore](https://github.com/QwenLM/qwen-code/issues/14203)
**为什么重要**：#13521 引入的自动记忆目录追加在请求尾部且不保留在历史中，使 llama.cpp / Ollama 上的混合模型**每一步都触发完整 prompt 重处理**，对本地部署性能影响显著。

### 6. 自托管模型的上下文不可变性特性需求
**#14215** | OPEN | 6 评论 | [@markouustalu](https://github.com/QwenLM/qwen-code/issues/14215)
**为什么重要**：针对 prompt 处理速度慢的自托管环境，请求上下文不可变以复用 KV cache。与 #14203 共同指向**本地/低性能模型场景的性能优化**这一强需求。

### 7. 每日依赖 CVE 审计持续失败
**#13078** | OPEN | 21 评论 | [github-actions[bot]](https://github.com/QwenLM/qwen-code/issues/13078)
**为什么重要**：可能是新高危漏洞或 npm audit 端点问题，涉及供应链安全，已持续半个月未关闭。

### 8. Web Shell「Add Workspace」对话框在手机视口不可用
**#14184** | OPEN | 4 评论 | [@pomelo-nwu](https://github.com/QwenLM/qwen-code/issues/14184)
**为什么重要**：393px 宽的 iPhone 视口下，文件夹浏览器塌缩为一行、操作按钮在折叠线下方——Web Shell 移动端可用性的代表性问题。

### 9. SDK Java CI：退役目录中的迁移通过了两个 Flyway 检查但从未被应用
**#14240** | OPEN | [@wenshao](https://github.com/QwenLM/qwen-code/issues/14240)
**为什么重要**：#14069 迁移 schema 目录后，`db/migration` 中的迁移静默失效——**数据库迁移路径的分叉风险**，与 PR #13954（强制 Flyway 迁移排序）形成呼应。

### 10. CI：Classify PR 作业被钉在拥堵的 hosted runner 上，4 秒工作排队 49-64 分钟
**#14219** | OPEN | [@yiliang114](https://github.com/QwenLM/qwen-code/issues/14219)
**为什么重要**：`classify_pr` 被所有产品作业 `needs:`，hosted 池拥堵使其成为整个 post-merge CI 的瓶颈。配合 #14212（PR 阶段 60 作业 / 36.4h 声明超时且无预算门），反映 **CI 吞吐已成为团队效率的核心瓶颈**。

---

## 🔧 重要 PR 进展

| PR | 标题 | 要点 |
|---|---|---|
| [#14176](https://github.com/QwenLM/qwen-code/pull/14176) | **Managed Agent 实验性参考发行版** | 首个可独立于 npm CLI 构建验证的 Hosted Managed Agent 发行包，含 Java 控制面、恢复工具、嵌入式 Runtime Broker |
| [#14214](https://github.com/QwenLM/qwen-code/pull/14214) | **Workspace 常驻 Managed Tool Runtime 设计文档** | 解决每个 Session 各起一个 worker 的问题，实现 worker 预热与空闲回收（#14211 的 PR0） |
| [#14149](https://github.com/QwenLM/qwen-code/pull/14149) | **离线 Codex 记忆选择性导入** | `qwen memory import codex` 命令，将 Codex 手册/摘要条目经交互审查转为 Qwen 原生私有记忆 |
| [#14180](https://github.com/QwenLM/qwen-code/pull/14180) | **CSI 准备资源经 HTTP store 保留** | 私有文件准备资源提交至 HTTP store，含 SQL 授权、认证回读等集成门 |
| [#14169](https://github.com/QwenLM/qwen-code/pull/14169) | **Web Shell 文件创建与确认删除** | Files 工具栏新增 New file/folder，防误替换，失败可复制重试 |
| [#14238](https://github.com/QwenLM/qwen-code/pull/14238) | **修复 #14205 后的每日失败上报与契约守卫** | 用规范工作流名识别 Scheduled Desktop 失败，按平台 job 分组打包失败 |
| [#13954](https://github.com/QwenLM/qwen-code/pull/13954) | **强制 Flyway 迁移排序** | 两个 Flyway 门禁拒绝低于已发布最高版本的新迁移，直击 #14240 一类问题 |
| [#14242](https://github.com/QwenLM/qwen-code/pull/14242) | **EventTransport 故障矩阵双节点运行（MQ3）** | §8 部署故障矩阵在真实双控制面节点 + MySQL + RocketMQ 集群上验证 |
| [#14021](https://github.com/QwenLM/qwen-code/pull/14021) | **后台派发失败时在活 Turn 内结算子任务** | 覆盖从未创建 publication row 的预留场景；遗留发现已拆至 #14234 |
| [#14181](https://github.com/QwenLM/qwen-code/pull/14181) | **补齐 G3 Step 3 恢复/接管/围栏 CI 门** | 将 #12952 剩余手工验收模式全部纳入 CI，纯测试改动 |

---

## 📈 功能需求趋势

1. **Managed Agent / 多 Agent 平台化**（#12380、#14063、#14216、PR #14176/#14214）：Session 持久化、Workspace 绑定、工具运行时生命周期管理是当前 roadmap 主线。
2. **自托管 / 本地模型性能**（#14203、#14215）：上下文不可变性、KV cache 复用、避免 prompt 全量重处理，是本地部署用户最强烈的呼声。
3. **OpenAI 兼容后端生态**（#14112、#14115）：vLLM 等严格后端的工具序列化兼容与错误可诊断性。
4. **Web Shell 移动端与体验补齐**（#14184、#14236、#14226、PR #14169）：手机视口适配、跨项目 Todos 聚合、实时 tokens/sec 指标。
5. **互操作性**（PR #14149）：从 Codex 等竞品迁移记忆/配置的导入工具。

---

## ⚠️ 开发者关注点（痛点）

- **CI/CD 吞吐危机**：主分支确定性红（#14225）、runner 排队 1 小时（#14219）、PR 阶段无预算门（#14212）、每日上报失效（#14238）——CI 修缮占据今日 PR 的重要比重，是当前最集中的工程投入。
- **错误信息可诊断性不足**：API 400 无 body 时关键调试信息（headers、x-request-id）被吞掉（#14115）。
- **迁移/Schema 分叉风险**：schema 目录迁移后旧路径静默失效（#14240），暴露多模块 Flyway 治理短板。
- **测试环境可移植性**：chmod 类测试在 Windows/root 下语义不成立（PR #14162），超时预算与实际运行时漂移（#14148）。
- **本地模型体验退化风险**：0.25.1 的记忆目录机制对慢 prompt 处理场景是性能回退（#14203），需要针对自托管环境做特性门控。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-10-15

## 📌 今日速览

0.10.2 补丁版本进入冲刺阶段：维护者 @Hmbown 的跟踪 Issue #6094 显示已有 13 个贡献者 PR 以独立形式合并，发布候选 PR #6968 持续更新。同时社区报告了多个 0.10.x 回归问题，包括 Android/Termux 下受限文件操作全面失败、Turn 快照 git 对象校验失败、上下文压缩报错等，值得升级用户关注。

## 🚀 版本发布

过去 24 小时无新 Release。

## 🔥 社区热点 Issues（共 6 条活跃，全部列出）

1. **[#6094](https://github.com/codewhale-hq/Codewhale/issues/6094) — v0.10.2 发布跟踪与贡献指南**
   维护者核心跟踪贴，最新动态（10-14 UTC）：13 个贡献者 PR 已合并且保留原作者与源分支，最新落地为 #6977。想参与 0.10.2 的贡献者应从这里入手。

2. **[#6980](https://github.com/codewhale-hq/Codewhale/issues/6980) — Android/Termux 受限文件操作全部 EACCES**
   自 v0.10.1 起，`WorkspaceFile::open_confined` 以 `O_RDONLY|O_DIRECTORY` 打开 `/`，被 Android SELinux 拒绝，导致 workflow journal 等所有受限操作报 `Permission denied`。移动端用户受影响面大，目前待分诊。

3. **[#6978](https://github.com/codewhale-hq/Codewhale/issues/6978) — Turn 快照失败且旧用户轮次被重放**
   Windows 11 / 0.10.0（从 0.10.1 回滚），自 10-12 起 `git commit-tree` 报 "not a valid object"，涉及约 99 MB 的长期会话，用户强烈希望保留数据。数据完整性问题，优先级高。

4. **[#6934](https://github.com/codewhale-hq/Codewhale/issues/6934) — file_search 默认激活变更需同步移动公开工具面行**
   0.10.2 中 `web/` 公开工具面契约测试失败，file_search 的默认激活变更必须与原生核心的公开工具事实同切片移动，否则破坏对外契约。

5. **[#6976](https://github.com/codewhale-hq/Codewhale/issues/6976) — Windows 下 `cargo install --locked` 始终装到 0.10.0**
   crates.io 索引更新后仍强制安装 v0.10.0 而非 0.10.1，疑似发布元数据问题，影响所有 cargo 安装用户。

6. **[#6981](https://github.com/codewhale-hq/Codewhale/issues/6981) — 上下文压缩失败**
   今日新报：`Making room failed: Chat API response missing choices`，会话超长后压缩流程中断，暂无回复。

## 🔧 重要 PR 进展（选取 10 条）

1. **[#6968](https://github.com/codewhale-hq/Codewhale/pull/6968) — 0.10.2 发布候选：端点级目录、分层定价与发布验证**
   维护者主导的版本候选 PR，承载 0.10.2 核心内容，今日仍在更新。

2. **[#6965](https://github.com/codewhale-hq/Codewhale/pull/6965) — 0.10.2 切片：fail-closed 分层定价、build-lock 旁路修复、Windows owner 恢复**
   前两个提交已验证，第三个（Windows owner 恢复）为进行中工作。

3. **[#6973](https://github.com/codewhale-hq/Codewhale/pull/6973) — config 命令组全面迁移到可移植 Shapes 架构（FEAT-028）**
   大型行为保持重构，剥离 config Slash 命令组的 `App`/TUI 具体依赖。

4. **[#6977](https://github.com/codewhale-hq/Codewhale/pull/6977)（已关闭/合并）— extension-host 测试稳定性修复**
   修复 10-10 以来 windows-latest 上两次失败的慢命令取消测试，属 contribution-gate 快速通道。

5. **[#6979](https://github.com/codewhale-hq/Codewhale/pull/6979) — 六个终端测试不再依赖开发者本地终端环境**
   消除 tmux/screen/Tilix/Terminator 环境变量导致的测试脆弱性，提升 CI 可复现性。

6. **[#6959](https://github.com/codewhale-hq/Codewhale/pull/6959)（已合并）— Runtime API 读写工作区项目信任状态**
   为 VS Code 扩展等非 TUI 客户端提供信任判定与记录能力，是 IDE 集成方向的关键一步。

7. **[#6924](https://github.com/codewhale-hq/Codewhale/pull/6924)（已合并）— 每个运行时存储独立控制端点、每工作区独立驱动**
   Runtime API 实例获得 per-store Unix 控制 socket 与内核持有的工作区租约，防止陈旧 PID 冒权删除争用 inode。

8. **[#6943](https://github.com/codewhale-hq/Codewhale/pull/6943)（已合并）— 移除五个模块的笼统 `dead_code` allow**
   代码卫生工作，暴露并清理被掩盖的死代码。

9. **[#6873](https://github.com/codewhale-hq/Codewhale/pull/6873) / **[#6917](https://github.com/codewhale-hq/Codewhale/pull/6917) — 依赖安全升级**
   分别修复 `source-map-js` 事件循环 DoS（高危）与 `next` 16.3.6→16.3.8 高危漏洞（后者正在阻塞主分支 `npm-audit`）。

10. **[#6393](https://github.com/codewhale-hq/Codewhale/pull/6393) — 无索引源码导航回显与受保护的 fork 前缀继承**
    长期贡献 PR，保留原始八个提交并适配最新 Engine 权威模型，今日仍在推进调和。

## 📈 功能需求趋势

- **IDE / 非 TUI 客户端集成**：#6959 明确提出 VS Code 扩展对 Runtime API 的需求，项目信任、会话管理等能力正在 API 化（#6924）。
- **发布工程与定价**：0.10.2 主线集中在端点级模型目录、分层定价（fail-closed）与发布验证流程（#6968、#6965）。
- **架构解耦**：Shapes 可移植配置架构（#6973）持续推进，降低核心对 TUI 的耦合。
- **跨平台健壮性**：Android/Termux（#6980）、Windows（#6976、#6978）回归集中出现，移动端与 Windows 是当前薄弱面。

## ⚠️ 开发者关注点

- **升级 0.10.x 需谨慎**：Android 用户可能全面不可用（#6980）；Windows 用户面临快照损坏与会话数据风险（#6978）；cargo 安装渠道版本滞后（#6976）。
- **长会话稳定性**：上下文压缩失败（#6981）与 99 MB 会话快照问题表明长会话路径仍是最脆弱环节。
- **CI 脆弱性**：多个 PR（#6977、#6979、#6958）都在修测试对环境的隐式依赖，维护者正系统清理。
- **安全审计在主分支亮红灯**：`next` 高危漏洞导致 `npm-audit` 失败（#6917），需尽快合入。

---
*数据来源：github.com/Hmbown/DeepSeek-TUI · 统计窗口：2026-10-14 ~ 2026-10-15 UTC*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报（2026-10-15）

## 1. 今日速览

过去 24 小时 Pi 仓库无新版本发布，但社区活跃度依然很高（89 条 Issue 更新、17 条 PR 更新）。今天最值得关注的动态包括：**GPT-6 会话中途切换思考等级时保留 prompt 缓存**的 P0 需求已被 #10930 落地实现、**视频输入端到端支持**（#10961）等一批功能 PR 被合入，以及 Windows 使用体验调研（#7547）持续引发 85 条热烈讨论。多个上下文溢出检测（llama.cpp、HTTP 413）问题被集中反馈，值得用户关注。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **#7547 Windows 使用方式调研**（OPEN，85 评论）
   官方发起的调研帖：了解用户在 Windows 上运行 Pi 的方式，以决定核心投入方向（bug 修复、开箱体验）与哪些可交给社区扩展。长期高热度，是 Windows 用户的必读帖。
   🔗 [earendil-works/pi Issue #7547](https://github.com/earendil-works/pi/issues/7547)

2. **#9409 推理模型会话在上下文上限处永久卡死**（OPEN）
   高危问题：请求持续返回 `stopReason: "length"` 且输出仅 16 token，压缩重试失败后会话不可恢复。#10964 已提交修复，等待验证。
   🔗 [earendil-works/pi Issue #9409](https://github.com/earendil-works/pi/issues/9409)

3. **#10853 GPT-6 缓存保留的思考等级切换**（CLOSED，prio:p0）
   P0 需求已完成：会话中途切换思考等级时改用 `configuration_update` 输入项，避免打爆 prompt 缓存。由 #10930 实现。
   🔗 [earendil-works/pi Issue #10853](https://github.com/earendil-works/pi/issues/10853)

4. **#10840 GPT-6.1 Sol 上下文窗口仍为 272K**（CLOSED）
   Codex 默认已提升至 500K，但 Pi 目录中旧值导致压缩预算偏保守。已关闭，说明目录更新在推进。
   🔗 [earendil-works/pi Issue #10840](https://github.com/earendil-works/pi/issues/10840)

5. **#10885 llama.cpp 上下文溢出未被检测**（OPEN）
   llama-server 返回 "Context size has been exceeded." 时 `isContextOverflow()` 不识别，自动压缩永不触发。自托管用户痛点。
   🔗 [earendil-works/pi Issue #10885](https://github.com/earendil-works/pi/issues/10885)

6. **#10879 代理返回的 HTTP 413 未被识别为上下文溢出**（OPEN）
   与 #10885 同类：企业代理限制请求体大小返回 413，Pi 不压缩，导致后续每个 turn 都重发超大历史而失败。上下文溢出检测的覆盖面需要系统性增强。
   🔗 [earendil-works/pi Issue #10879](https://github.com/earendil-works/pi/issues/10879)

7. **#10884 1.2.0 键盘输入卡死：未终止的终端查询回复**（CLOSED）
   启动时颜色查询回复缺失终止符会让 StdinBuffer 永久等待，键盘静默失效。箭头键可“解冻”但丢失已输入内容。已修复。
   🔗 [earendil-works/pi Issue #10884](https://github.com/earendil-works/pi/issues/10884)

8. **#10862 鼠标选区时硬件光标跳错列**（OPEN）
   1.2.0 中 `showHardwareCursor: true` 时，鼠标选区激活导致零宽光标标记列计算偏移。
   🔗 [earendil-works/pi Issue #10862](https://github.com/earendil-works/pi/issues/10862)

9. **#10953 ChatGPT Business 登录失败但旧版 Codex 登录正常**（CLOSED）
   新 OpenAI 登录返回 `3p_delegated_access_policy_denied`，legacy Codex 登录可用。企业用户升级 1.2.0 后的常见登录障碍。
   🔗 [earendil-works/pi Issue #10953](https://github.com/earendil-works/pi/issues/10953)

10. **#10812 目录中已不存在的默认模型被静默替换**（OPEN）
    配置的默认模型下架后，新会话静默回退到别的模型且无提示。体验类问题，呼声较高。
    🔗 [earendil-works/pi Issue #10812](https://github.com/earendil-works/pi/issues/10812)

## 4. 重要 PR 进展

1. **#10930 GPT-6 切换思考等级时保留 prompt 缓存**（已合入）
   reasoning.effort 固定，思考等级通过 `configuration_update` 输入项下发，每条回复记录等级以重建历史。落地 P0 需求 #10853。
   🔗 [PR #10930](https://github.com/earendil-works/pi/pull/10930)

2. **#10961 视频输入端到端支持**（已合入）
   镜像现有图片管线，支持 `@path`、`read` 工具、两种 OpenAI 兼容协议，非视觉模型优雅降级。多模态能力的重大扩展。
   🔗 [PR #10961](https://github.com/earendil-works/pi/pull/10961)

3. **#10964 防止单 token 请求并恢复截断的 turn**（已合入）
   修复 #9409：工具结果将请求推过上下文窗口时，钳制的输出预算为 1 导致空 `length` 停止且无法恢复。
   🔗 [PR #10964](https://github.com/earendil-works/pi/pull/10964)

4. **#10958 新增 Reflection AI provider**（已合入）
   内置 OpenAI 兼容 provider，支持 Beam-1.0-501B-A23B 及五档 reasoning_effort。
   🔗 [PR #10958](https://github.com/earendil-works/pi/pull/10958)

5. **#10944 严格报告畸形的工具调用参数**（已合入）
   此前流式解析器会保留出错前的字段前缀并直接执行工具；现在解析失败则置空参数并报告错误，显著提升安全性。
   🔗 [PR #10944](https://github.com/earendil-works/pi/pull/10944)

6. **#10913 统一 provider 选择策略解析模型引用**（已合入）
   修复 `--model provider/id` 在多网关场景下忽略凭据、按目录顺序随机选网关的问题。
   🔗 [PR #10913](https://github.com/earendil-works/pi/pull/10913)

7. **#10945 工具调用组折叠显示（opt-in）**（已合入）
   ctrl+o 三档切换（折叠摘要 → 预览 → 完整输出），面向结果导向、沙箱化的使用场景。
   🔗 [PR #10945](https://github.com/earendil-works/pi/pull/10945)

8. **#10943 更新蚂蚁 Ling 模型并移除弃用模型**（已合入）
   引入 Ling 3.0 / 3.0 Flash VL / 3.1 Flash，API 兼容性与 DeepSeek 统一。
   🔗 [PR #10943](https://github.com/earendil-works/pi/pull/10943)

9. **#10937 durable：命名空间化 SQLite 存储**（OPEN）
   支持表/索引前缀，覆盖 Cloudflare Durable Object 场景，服务嵌入式/多租户部署。
   🔗 [PR #10937](https://github.com/earendil-works/pi/pull/10937)

10. **#10938 修复 read 工具行号范围标签**（已合入）
    处理字符串/null 类型的 offset/limit 参数，统一 TUI、会话树、HTML 导出的格式化逻辑。修复 #9887。
    🔗 [PR #10938](https://github.com/earendil-works/pi/pull/10938)

其他值得留意：#10963 修复时钟冻结下信任锁死循环、#10918 修复 skill ignore 模式丢失根锚定 `/`、#10934 修复 CJK 标点截断裸 URL（OPEN，待合入）。

## 5. 功能需求趋势

- **上下文管理与压缩可靠性**：最高频主题。溢出检测覆盖面（llama.cpp、HTTP 413、推理模型卡死）、压缩预算准确性（#10840）、会话恢复能力集中爆发。
- **新模型/新 provider 支持**：Reflection AI、蚂蚁 Ling 3.x、MiniMax M3.1 Flash（#10916）、Gemini 4 Argon thinking-level 适配（#10890）。
- **多模态扩展**：视频输入落地后，社区对更丰富的输入类型（大图片溢出 #10957）持续关注。
- **缓存与成本效率**：GPT-6 缓存保留是典型代表，社区对 token 成本和缓存命中的敏感度很高。
- **终端体验打磨**：tmux 下 OSC 52 复制（#10628）、硬件光标、CJK URL 解析等 TUI 细节问题持续被报告。
- **企业/部署场景**：MDM 系统级配置（#10895）、MCP over Unix socket（#10247）、Nix 打包（#10881/#10528）、嵌入式 SDK 内存泄漏（#10642）。

## 6. 开发者关注点

- **静默失败是最大痛点**：默认模型被静默替换（#10812）、tmux 吞掉复制仍显示 "Copied!"（#10628）、畸形参数静默截断执行（#10944）——用户反复要求“失败要可见、可操作”。
- **代理/网关环境兼容性**：企业代理的 413、多网关模型解析、ChatGPT Business 登录策略，反映 Pi 在非直连环境下问题集中。
- **扩展与 hook 生命周期**：`session_start` 双发（#10470）、settle hook 无取消信号（#10928）、abort 后无法续跑同一 run（#10767），扩展开发者对生命周期语义精确性的要求在提高。
- **长时运行/嵌入式稳定性**：SDK 会话内存只增不减（#10642）、时钟冻结导致死锁（#10963），说明 Pi 正被越来越多地用作基础设施而非交互式 CLI。
- **Windows 体验**：官方调研帖 85 条评论表明这是当前最大的平台级投入方向。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报 · 2026-10-15

## 📰 今日速览

oh-my-pi 发布 **v18.11.0**，包含一项 Breaking Change（`ApprovalDetailsOptions` 移除），但新版本编译版二进制在 macOS 上存在严重启动崩溃问题（#15799，prio:p1）。过去 24 小时社区活跃度很高：120 条 Issue 更新、262 条 PR 更新，TUI 性能（压缩阻塞、粘贴延迟）和 Provider 上下文估算准确性成为讨论焦点。

---

## 🚀 版本发布

### v18.11.0
**@oh-my-pi/pi-agent-core**

- ⚠️ **Breaking Change**: 移除 `ApprovalDetailsOptions`，`formatApprovalDetails` 重新只接收 `args` 参数（紧凑审批提示不再显示工具详情）—— [@H4vC](https://github.com/H4vC)，[PR #15642](https://github.com/can1357/oh-my-pi/pull/15642)

> 💡 升级提示：依赖该 API 的插件/集成需立即适配。同时注意 #15799 报告的编译版二进制崩溃问题，macOS binary 用户建议暂缓升级。

---

## 🔥 社区热点 Issues

**1. [#15799](https://github.com/can1357/oh-my-pi/issues/15799) · 18.11.0 编译版二进制进会话即崩（prio:p1）**
macOS 上 `omp-darwin-arm64`（Bun 单文件可执行）在 `--resume` 或 picker 进入会话时报 "Settings not initialized"，疑似 settings 模块在 chunks 间被重复打包。9 条评论，是当前最高优先级的新发版阻断性问题。

**2. [#13486](https://github.com/can1357/oh-my-pi/issues/13486) · OpenRouter 读图持续 422**
读文件方式传图必 422，但粘贴图片无问题，指向图像传输路径差异。13 条评论，是本周讨论最多的 Issue，OpenRouter 用户痛点明显。

**3. [#15689](https://github.com/can1357/oh-my-pi/issues/15689) · TUI 自动压缩期间事件循环阻塞长达 41 秒**
post-turn auto-compaction 期间打字严重卡顿，单日日志中 178 次 `ui.loop-blocked` 警告，最长阻塞 41 秒而 CPU 仅 218ms，说明是 I/O/锁问题而非计算瓶颈。压缩应异步化的典型信号。

**4. [#15815](https://github.com/can1357/oh-my-pi/issues/15815) · Cursor：压缩估算把所有工具 schema 计入，导致无谓压缩**
Cursor 用 dynamic tools，多数 schema 根本没发给 provider，但估算仍全量计入，触发 "Compaction freed too little context" 恶性循环。已有对应修复 PR #15819/#15821。

**5. [#15757](https://github.com/can1357/oh-my-pi/issues/15757) · Windows 粘贴长文本极慢**
13K 字符需 7 秒才弹出附件对话框，直接影响日常工作流体验。

**6. [#9157](https://github.com/can1357/oh-my-pi/issues/9157) · ACP 异步任务自动投递回合缺少生命周期标记**
后台 job 完成触发的 follow-up turn 无 `turn_started` 包裹，客户端无法正确归属消息；`allowAgentInitiatedTurns` 从未被启用。ACP/编辑器集成（如 Zed）用户的核心协议问题。

**7. [#11644](https://github.com/can1357/oh-my-pi/issues/11644) · ACP 下 provider 错误伪装成正常 end_turn**
HTTP 失败被当作助手文本输出，无结构化失败标记，客户端需解析自然语言才能区分错误。SDK 集成可靠性的重要缺口。

**8. [#15649](https://github.com/can1357/oh-my-pi/issues/15649) ·（已关闭）edit 接受被截断显示的行并静默丢弃隐藏尾部**
`read` 按 768 列截断后，基于可见文本的 `PUT N.=N:` 编辑会静默丢失截断后的内容——数据丢失级 bug，已修复关闭。

**9. [#6458](https://github.com/can1357/oh-my-pi/issues/6458) · 请求全局命令：跨运行中会话重载配置和插件**
多会话用户（10+ 并发 OMP）改配置后需逐个重启，社区呼声持续（10 条评论），长期未落地。

**10. [#6540](https://github.com/can1357/oh-my-pi/issues/6540) · unexpected-stop 分类器误判正常结尾**
答案带 "Next steps" 收尾即被判为"意外停止"并强制续写，破坏任务完成体验。

其他值得关注：[#15797](https://github.com/can1357/oh-my-pi/issues/15797)（不回放 thinking 的模型压缩过早触发）、[#15798](https://github.com/can1357/oh-my-pi/issues/15798)（尾点 FQDN `host.local.` 不被识别为本地后端）、[#15810](https://github.com/can1357/oh-my-pi/issues/15810)（`:raw` 读取出错混入分页 footer）。

---

## 🔧 重要 PR 进展

**1. [#15751](https://github.com/can1357/oh-my-pi/pull/15751) · 损坏的 history.db 自救而非崩溃**
上箭头召回历史时遇到损坏页直接崩溃 OMP；现在读取时过滤非法行、可抢救性恢复。

**2. [#15404](https://github.com/can1357/oh-my-pi/pull/15404) · 会话超过 2 GiB 后仍可持久化**
长跑会话超过 2 GiB 后每轮全量重写失败；改为分段维护。多天会话用户的救星。

**3. [#15821](https://github.com/can1357/oh-my-pi/pull/15821) · Cursor 会话中保留工具结果用于回合内 follow-up**
修复 Cursor 在并行 job 场景下回合让出即报 PROVIDER_ERROR 的问题。

**4. [#15819](https://github.com/can1357/oh-my-pi/pull/15819) · 修正 Cursor 工具上下文记账**
~200 个 MCP 工具时固定 schema 估算即可超 300K 窗口，与 #15815 问题对应。

**5. [#11936](https://github.com/can1357/oh-my-pi/pull/11936) · MCP OAuth 回调校验 RFC 9207 issuer（opt-in）**
防御 mixed-up authorization server 攻击，安全加固，review:p2。

**6. [#15326](https://github.com/can1357/oh-my-pi/pull/15326) · Ctrl+O 可完整展开回放的 bash 输出**
超 100 行的 bash 输出在回放/恢复时被静默截断为尾部，现可完整恢复。

**7. [#15765](https://github.com/can1357/oh-my-pi/pull/15765) · 统一图像输入校验层**
合并 base64 校验、MIME 检查与解码路径，可能与 #13486 的 422 问题相关。

**8. [#15813](https://github.com/can1357/oh-my-pi/pull/15813) / [#15814](https://github.com/can1357/oh-my-pi/pull/15814) · 修复 read `:raw` footer 与 openai-models-list 平铺 `max_output_tokens`**
社区贡献者 roboomp 针对今日新报 Issue 的快速配对修复。

**9. [#14472](https://github.com/can1357/oh-my-pi/pull/14472) · ACP 权限决策按 bash 命令而非工具名缓存**
修复一次 "Always reject" 拒绝所有后续 bash 调用的严重权限 bug（对应已关闭 Issue #15473）。

**10. [#15437](https://github.com/can1357/oh-my-pi/pull/15437) · db.query 泛型化，删除 65 处 `as` 行断言**
SQLite 行类型在 prepare 时绑定，schema 漂移可被类型检查捕获——工程质量提升的典范 PR。

---

## 📈 功能需求趋势

1. **TUI 性能与响应性**（最高热度）：压缩阻塞（#15689）、粘贴慢（#15757）、滚动闪烁（#15452/#15820）、输入焦点路由（#15793）——TUI 是最大摩擦面。
2. **上下文/压缩估算准确性**：Cursor 记账（#15815）、thinking token 计入（#15797）、模型发现 maxTokens（#15811）——压缩机制的可观测性与精确性需求集中爆发。
3. **ACP 协议完善**：turn 生命周期（#9157）、结构化错误（#11644）、权限门语义（#15473）——编辑器/IDE 集成生态是战略方向。
4. **多 Provider/网关兼容**：OpenRouter（#13486、#15794）、Cursor、小米 MiMo（#15557）、自定义本地网关（#15798）——长尾兼容性需求旺盛。
5. **配置与凭据管理**：跨会话热重载（#6458）、`/usage switch` 多账号切换（#4829）、MCP OAuth scope 覆盖（#7841）。
6. **LSP 深度配置**：路径级 include/exclude glob（#15763）。

---

## ⚠️ 开发者关注点

- **升级风险**：v18.11.0 binary 用户面临启动崩溃（#15799）+ Breaking Change，建议关注补丁版本；`formatApprovalDetails` 调用方需适配。
- **长会话可靠性**：2 GiB 持久化（#15404）、history.db 损坏（#15751）显示多天会话场景已成为主流用法，持久层健壮性需系统性投入。
- **静默数据丢失类 bug 值得警惕**：edit 截断丢尾（#15649）、read 目录权限静默省略（#15769）、`:raw` 混入 footer（#15810）——工具输出"可信度"是 agent 正确性的基石。
- **打包/分发一致性**：binary 与源码运行行为分叉（#15799）、`omp install` 硬依赖外部 bun（#15480）提示分发链路需加固。

---
*数据来源：github.com/can1357/oh-my-pi · 统计窗口：过去 24 小时（120 Issues / 262 PRs 更新）*

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

# DeepSeek Harness 社区动态日报
**日期：2026-10-15**

---

## 1. 今日速览

今日最重要的动态是 **dsh-v0.2.1-alpha.3** 版本发布，带来了三项面向安全与体验的增强：Web 版本地登录支持、消息中敏感凭据自动脱敏、极简模式的图片读取与长对话压缩能力。过去 24 小时内无新增 Issue 或 PR 活动，社区讨论处于相对平静期。

---

## 2. 版本发布

### dsh-v0.2.1-alpha.3

**新增功能：**

- **Web 版本地账号登录**：支持在本机 HTTP 访问时登录 DeepSeek 账号，降低 Web 版使用门槛。— 贡献者 @lsdsjy
  🔗 [Release 详情](https://github.com/deepseek-ai/deepseek-harness/releases)

- **敏感信息自动脱敏**：可识别已发送消息中的密钥和令牌，默认脱敏处理、按需查看。这一功能对防止凭据意外泄露（尤其在团队协作或屏幕共享场景）有直接价值。— 贡献者 @ZiyaZhang
  🔗 [Release 详情](https://github.com/deepseek-ai/deepseek-harness/releases)

- **极简模式上下文管理增强**：支持读取图片和自动压缩长对话；Web 与桌面端均可通过 `/compact` 指令手动压缩上下文，有助于控制 token 消耗并保持长会话稳定性。— 贡献者 @LogosVeritas
  🔗 [Release 详情](https://github.com/deepseek-ai/deepseek-harness/releases)

**问题修复：** 本版本未列出修复项。

---

## 3. 社区热点 Issues

过去 24 小时内无 Issue 更新，本节暂无内容。

---

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新，本节暂无内容。

---

## 5. 功能需求趋势

由于近期无活跃 Issue 数据，基于本次版本发布内容可观察到以下方向：

- **安全性**：凭据脱敏功能的落地表明团队重视密钥/令牌保护，预计后续会有更完善的敏感数据处理需求。
- **上下文管理**：`/compact` 指令与自动压缩反映出社区对长会话 token 成本与上下文窗口管理的持续关注。
- **多模态支持**：极简模式的图片读取是向多模态输入能力扩展的信号。

---

## 6. 开发者关注点

- **长对话体验**：上下文压缩已成为刚需，手动 `/compact` 指令之外，自动压缩策略的可配置性值得期待。
- **凭据安全**：脱敏机制目前为“默认脱敏、按需查看”，开发者可能需要更细粒度的控制（如白名单、审计日志）。
- **Web 版功能对齐**：本地 HTTP 登录支持缩小了 Web 版与桌面端的功能差距，跨端一致性仍是演进重点。

---

*数据来源：[deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) · 本报告由自动化流程生成，如有遗漏请以仓库实际数据为准。*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*