# AI CLI 工具社区动态日报 2026-10-29

> 生成时间: 2026-10-29 04:53 UTC | 覆盖工具: 11 个

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

# AI CLI 工具生态横向对比分析报告 · 2026-10-29

---

## 1. 生态全景

AI CLI 工具已从单纯的“终端补全助手”演进为**多智能体编排平台**，竞争焦点转向 subagent 可靠性、Code Mode 程序化执行、无人值守自动化等深度场景。**上下文/Token 成本管理**（估算精度、压缩阈值、缓存归因）成为全行业最高频的共同痛点，直接关系用户账单。MCP 生态全面普及的同时暴露出认证、连接管理、工具数量上限等规模化瓶颈。头部工具（Codex、Qwen、oh-my-pi）保持 alpha/nightly 级高速迭代，而计量/升级回归类问题频发提示“快速发布”与“质量护栏”的矛盾正在加剧。

---

## 2. 各工具活跃度对比

| 工具 | Issues 热度（今日焦点） | PR 数（24h） | Release | 活跃度评级 |
|---|---|---|---|---|
| **Codex** | 30 条热榜，约半数 windows-os | 20+（官方快速合入） | 2 个 alpha | ★★★★★ |
| **oh-my-pi** | 60 条 Issue 更新 | **216 条更新** | v18.13.3 | ★★★★★ |
| **Pi** | 84 条 Issue 更新 | 33 条更新 | 无 | ★★★★★ |
| **Qwen Code** | CI 类 issue 霸榜（#14724 76 评论） | 10+（含多个架构级 PR） | v0.26.3 全家桶 | ★★★★ |
| **OpenCode** | #59387 配额帖 80 评论 | 10+ | v1.19.5 + daemon | ★★★★ |
| **Claude Code** | Mods Issue 275 评论 / 131 👍 | 仅 2（社区贡献） | 无 | ★★★ |
| **Gemini CLI** | 多个 P1 subagent bug | 10（质量高，集中攻坚） | 无 | ★★★ |
| **Copilot CLI** | 认证/内存泄漏（37 GiB） | 4（安装脚本） | 无 | ★★ |
| **DeepSeek TUI** | 本地模型集成为主 | 10+ | 无 | ★★★ |
| **Kimi CLI** | 0 | 1（PR #2648 更新） | 无 | ★ |

**要点**：oh-my-pi 的 PR 吞吐量断层领先；Claude Code Issue 讨论热度高但工程响应明显滞后（本周官方零合并）；Kimi 与 DeepSeek Harness 接近静默。

---

## 3. 共同关注的功能方向

### 3.1 上下文/Token 成本管理（全行业共性）
- **Claude Code**：三个独立 Issue 报告周配额消耗暴增 2~5 倍（时间线指向 10/17、10/24 计量回归）
- **oh-my-pi**：v18.13.3 修复压缩过早触发（#15797），#17329 报告 Gemini 下估算虚高 5.8 倍；#17205 rollover 死循环烧钱 $500+
- **OpenCode**：图片导致 prompt cache 回退、`prompt_cache_key` 缺失推高成本
- **Qwen**：#15826 常驻上下文超 token，要求按需加载
- **信号**：上下文估算精度已成为可量化的成本事故来源，缓存 miss 归因（oh-my-pi #11813）是值得全行业借鉴的方向。

### 3.2 Subagent / 多智能体编排
- **Gemini CLI**（最严重）：假成功（#22323）、无限挂起（#21409）、不主动调用（#21968），部分用户已禁用 subagent
- **Claude Code**：Mods 扩展系统（275 评论）+ 云端会话协同需求
- **oh-my-pi**：Vibe 模式工具集管理、collab 会话稳定性
- **OpenCode**：请求限制并行 subagent 数量（39 👍）

### 3.3 MCP 规模化瓶颈
- **工具数量上限**：Gemini #24246（128 个触发 400）、oh-my-pi #17340（556 个超 Anthropic 512 限制）
- **连接管理**：Codex per-chat 租约（#57978）、Gemini 分页发现（#29843）、Qwen 重名丢弃（#15741）
- **OAuth 认证**：Copilot CLI 全链路缺陷（DCR 过期、令牌刷新失败）

### 3.4 会话数据生命周期与可靠性
- 会话丢失（DeepSeek TUI #7095）、历史被回滚（Gemini #30017/#30019）、上下文 rollover 崩溃（Copilot #5205）、会话删除诉求（Claude Code #26904）

### 3.5 升级回归与无人值守稳定性
- Codex 4 条回归、OpenCode 2.2.0 启动崩溃、Claude Code TCC 重复弹窗；SIGHUP 处理（Qwen #15823、DeepSeek TUI #7122）反映夜间自动化场景成熟需求。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 扩展性（Mods）、企业级自主运行 | 付费重度专业开发者 | 闭源 SaaS，hooks/插件生态 |
| **Codex** | Code Mode 执行环境、多 provider（Vertex） | 全平台开发者，但 **Windows 为质量洼地** | Rust 重写，alpha 快速迭代，executor 解耦架构 |
| **Gemini CLI** | subagent 体系、AST 感知工具链（官方 EPIC） | 开源社区/企业 | 开源 TS，官方主导架构调研 |
| **Copilot CLI** | 企业合规、GitHub 生态集成 | 企业 VS Code 用户 | 闭源，SDK 嵌入 VS Code |
| **OpenCode** | 开放 provider、自托管（SearXNG/Termux） | 隐私敏感/自托管用户 | 开源，SQLite 会话存储性能优化 |
| **Qwen Code** | CI/发布基建、managed 模式、Web Shell | 团队自动化/CI 场景 | 开源，工程化管理 |
| **Pi / oh-my-pi** | 多云路由（Bedrock/Vertex）、TUI 打磨、SDK 嵌入 | 极客/嵌入开发者/韩语社区 | Bun 运行时，扩展生态 |
| **DeepSeek TUI** | 本地 Ollama/vLLM 一等公民 | 本地推理、中文用户 | Rust TUI，vim 模式 |

---

## 5. 社区热度与成熟度

- **快速迭代期**：Codex（双 alpha + 20 PR/日）、oh-my-pi（216 PR 更新）、Qwen（全家桶同步发布）——功能激进但回归频发
- **高热高讨论、响应滞后**：Claude Code（Mods 275 讨论两月未落地，本周官方零合并），成熟产品的“维护节奏”特征初现
- **攻坚修复期**：Gemini CLI（集中修取消/重试正确性）、OpenCode（配额+升级崩溃）、Copilot CLI（认证债，Issue #552 拖近一年）
- **早期/静默**：Kimi CLI、DeepSeek Harness
- **成熟度最高**：Pi（大量关键 Issue 已闭环：P0 安全、流式 O(n²)、上下文卡死），问题响应闭环率领先

---

## 6. 值得关注的趋势信号

1. **计量/成本透明化是下一个战场**：Claude Code 配额异常、oh-my-pi 估算偏差事故表明，用户要求 token 消耗可审计、可归因。**建议**：选择工具时考察其缓存 miss 归因、估算精度机制；重度用户配置用量告警。

2. **Subagent 从“能跑”到“可信”的转折点**：Gemini 的假成功问题警示——上层编排决策依赖下层状态上报真实性。**建议**：生产编排中保留 subagent 结果独立校验，勿盲信 `success` 状态。

3. **工具数上限倒逼智能路由**：128/512 工具限制普遍触发，工具作用域裁剪（AST-aware、按需加载）将成为标配架构。

4. **Windows/多平台是普遍二等公民**：Codex 半数热榜、Gemini/Copilot/DeepSeek 均有平台特定缺陷。**建议**：Windows 用户对快速迭代通道保持谨慎，锁定稳定版本。

5. **升级回归常态化**：多工具均出现“更新即坏”。**建议**：生产环境固定版本 + 暂缓大版本（如 OpenCode 2.2.0），关键工作流配置备用 provider。

6. **本地/自托管需求上升**：DeepSeek TUI 的 Ollama 集成热、OpenCode 的 SearXNG/Termux、Pi 的多云路由——数据主权敏感场景的开源方案正在成熟。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-10-29 | 来源：anthropics/skills**

> ⚠️ 说明：本期 PR 数据缺失评论数字段，PR 排名以更新活跃度与讨论持续度（Issue 关联度）替代排序依据；Issues 仍按评论数排序。

---

## 一、热门 Skills / PR 排行

| # | PR | Skill | 功能与热点 | 状态 |
|---|----|----|----|----|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder 修复** | 适配 mcp>=2.0 的 `streamable_http_client` 重命名与自定义 Header 机制，关联 Issue #1668，是 MCP 生态升级的关键兼容修复，持续讨论 2 个月 | OPEN |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 触发评估修复** | 解决 trigger eval 误报、Windows `select()` 失败等问题，与热榜 Issue #556（触发率 0%）直接相关 | OPEN |
| 3 | [#1245](https://github.com/anthropics/skills/pull/1245) | **notion-spec-to-implementation** | 将产品/技术 Spec 转为 Notion 可执行任务（含验收标准与进度追踪），10 月仍在活跃更新，长尾讨论超 4 个月 | OPEN |
| 4 | [#525](https://github.com/anthropics/skills/pull/525) | **pyxel 复古游戏开发** | 由 Pyxel 作者 kitao 亲自提交，覆盖游戏创建/调试/无头验证，3 月提交、10 月仍有活动，社区期望高 | OPEN |
| 5 | [#1980](https://github.com/anthropics/skills/pull/1980) | **webapp-testing 安全修复** | 移除 `shell=True` 修复命令注入风险（CWE-78），10 月热议安全话题的代表 | OPEN |
| 6 | [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | Markdown→MP4 视频+拟真人配音，零成本方案，内容创作场景呼声高 | OPEN |
| 7 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 修复 AI 生成文档的孤行/孤字/编号错位等排版问题，被视为“所有文档 Skill 的补强层” | OPEN |
| 8 | [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | Solidity/Rust 智能合约静态分析+TON 链上审计存证，Web3 方向代表（需注意其商业推广属性） | OPEN |

---

## 二、社区需求趋势（来自 Issues）

1. **安全与信任机制**（最热，46 评论）：[#492](https://github.com/anthropics/skills/issues/492) 指出社区 Skill 冒用 `anthropic/` 命名空间造成信任边界滥用——社区强烈要求官方签名/命名空间治理。
2. **企业级分发与共享**：[#228](https://github.com/anthropics/skills/issues/228) 呼吁组织内 Skill 库与直接分享链接，替代当前 Slack 传文件的手工流程。
3. **触发可靠性**：[#556](https://github.com/anthropics/skills/issues/556) 反映 `claude -p` 下 Skill 触发率为 0%，评估基建是 skill-creator 的核心痛点。
4. **上下文经济性**：[#1487](https://github.com/anthropics/skills/issues/1487) 指出 claude-api skill 单次注入 ~156k token 耗尽窗口；[#1329](https://github.com/anthropics/skills/issues/1329) 提出 compact-memory 符号化记忆方案——按需加载与 token 效率成共识诉求。
5. **Agent 元能力 Skill**：[#1385](https://github.com/anthropics/skills/issues/1385)（推理质量门禁流水线）、[#412](https://github.com/anthropics/skills/issues/412)（agent-governance 治理模式）反映“用 Skill 管 Skill/管 Agent”的元层需求。

---

## 三、高潜力待合并 Skills（活跃 OPEN PR）

- **[#1681](https://github.com/anthropics/skills/pull/1681)** skill-creator `package_skill.py` 直执行修复 — 10/24 仍活跃，小而美，合并概率高
- **[#1997](https://github.com/anthropics/skills/pull/1997)** skill-creator YAML frontmatter 解析修复 — 直击 #556 触发评估链路
- **[#1975–#1977](https://github.com/anthropics/skills/pull/1975)**（@gerardrecinto 三连修：pptx 参数校验、webapp-testing 元素报告、algorithmic-art 边界修复）— 均关联已确认 Issue，典型 good-first-fix
- **[#1742](https://github.com/anthropics/skills/pull/1742)** mcp-builder mcp>=2 兼容 — 阻塞大量下游 MCP 用户，优先级高
- **[#1792](https://github.com/anthropics/skills/pull/1792)** docx LibreOffice 超时真实报错 — 属文档类核心 Skill 稳定性修复

---

## 四、生态洞察

**社区最集中的诉求是：建立官方的 Skill 信任治理（命名空间/签名）与按需加载机制，同时修复触发评估与上下文膨胀问题——即从“Skill 数量扩张”转向“Skill 的安全性、可靠性与 token 经济性”。**

---

# Claude Code 社区动态日报 · 2026-10-29

## 1. 今日速览

今日无新版本发布。社区焦点集中在**用量配额异常消耗**上——多个独立 Issue 报告 Opus 5.5 周配额消耗速度暴增 2~5 倍，且时间点集中在 10 月 17 日和 10 月 24 日之后，疑为计量回归问题。桌面端（Windows/macOS）UI 与权限问题持续发酵，扩展性话题（Mods 系统）依然是讨论量最高的 Issue。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues

1. **[#91870](https://github.com/anthropics/claude-code/issues/91870) — Mods 可扩展性系统**（275 评论 / 131 👍）
   社区讨论量之最。官方于 10 月 1 日确认"正在快速迭代反馈"，Mods 系统是当前最受期待的扩展机制，热度持续近两个月。

2. **[#26904](https://github.com/anthropics/claude-code/issues/26904) — 请求 `/delete` 命令删除当前会话**（100 👍）
   长期高票需求，用户无法便捷清理会话数据，与其他"数据清理类"需求（如 #105188 的 `claude prune`）形成趋势呼应。

3. **[#102667](https://github.com/anthropics/claude-code/issues/102667) — 周配额消耗异常加速**（9 评论）
   5 小时窗口从约 10% 配额涨至远超此比例，是本次"用量异常"集中报告的代表性 Issue。

4. **[#105240](https://github.com/anthropics/claude-code/issues/105240) — Max 5x 用户 48 小时内耗尽 94% 周配额**（WSL）
   明确指出 10 月 17 日起恶化、10 月 24 日后进一步加剧，为定位计量回归提供了关键时间线。

5. **[#105125](https://github.com/anthropics/claude-code/issues/105125) — Opus 用量消耗快 5 倍**（14 👍）
   macOS 用户，2 天即达 72% 周用量，使用模式无变化。三则用量 Issue 独立验证同一问题，官方需尽快回应。

6. **[#102150](https://github.com/anthropics/claude-code/issues/102150) — Windows 桌面版 Routines 侧边栏每次启动被强制隐藏**（38 👍，回归）
   Store/MSIX 包 2.37337.1 版本的 UI 回归，无任何开关可恢复，影响 Routines 功能可用性。

7. **[#79305](https://github.com/anthropics/claude-code/issues/79305) — 桌面版自定义主题/强调色**（81 👍）
   多显示器用户强烈需求与 CLI 主题系统对齐，避免窗口辨识困难。

8. **[#105847](https://github.com/anthropics/claude-code/issues/105847) — macOS 每次自动更新后 TCC 重复弹窗授权**
   原生安装按版本路径存放二进制，导致系统隐私权限按路径失效，每次更新都触发文件夹访问重新授权——体验痛点明确，值得修复。

9. **[#105857](https://github.com/anthropics/claude-code/issues/105857) — git worktree 会话中项目级 MCP server 连接后被误杀**
   连接 2.5 秒后被判定为 stale 并终止，影响 worktree 工作流用户的 MCP 依赖。

10. **[#105852](https://github.com/anthropics/claude-code/issues/105852) — 空闲压缩后安全分类器误拦截会话转录读取**
    与 #105856（safeguards 误报）同属安全机制过度拦截问题，"Where were we?"这类常规恢复操作也被阻断。

> 另值得留意：[#105855](https://github.com/anthropics/claude-code/issues/105855) 报告模型向代码库注入恶意内容，已被标记 needs-repro，但性质敏感，建议关注官方调查。

---

## 4. 重要 PR 进展

过去 24 小时仅 2 条 PR 更新：

1. **[#32755](https://github.com/anthropics/claude-code/pull/32755) — edit-verifier 插件：编辑后验证**
   通过 PostToolUse hook 验证 Edit 工具是否真正生效，解决“编辑静默失败但 Claude 误以为成功”的经典问题，实用性强。

2. **[#32753](https://github.com/anthropics/claude-code/pull/32753) — 修复仓库中过期的文档 URL**
   将 12 个文件中的 `docs.anthropic.com` / `docs.claude.com` 统一迁移到 `code.claude.com`。

> 本期 PR 活跃度极低（仅 2 条且均为社区贡献，更新于 10-28），官方团队本周无合并动作。

---

## 5. 功能需求趋势

- **多智能体/会话协同**（#103124、#92540）：Cloud 会话间通信、云端编排 Remote Control 会话，是多智能体工作流的自然延伸，需求集中出现。
- **数据生命周期管理**（#26904、#105188、#105853）：会话删除、孤立数据清理（`claude prune`）、scratchpad 文件交付，用户对"数据可控性"诉求明显。
- **桌面端体验对齐 CLI**（#79305、#105607、#105859）：自定义主题、`[1m]` 模型的 Effort/Ultracode 控件缺失、预授权文件夹无法移除等，桌面版功能滞后是持续痛点。
- **企业/网关部署适配**（#105854）：gateway/第三方端点下 tool search 需手写注册表才能启用，自托管用户体验被忽视。

---

## 6. 开发者关注点

1. **用量计量可信度**（最高优先级）：三个以上独立 Issue 报告配额消耗 2~5 倍异常，时间点高度一致（10/17、10/24），已引发付费用户不满，期待官方说明。
2. **自主/夜间运行稳定性**：#102780（睡眠中断触发无界上下文重生成循环）、#105184（自主运行卡在权限弹窗）表明长时无人值守场景仍不可靠。
3. **安全机制误伤**：#105852、#105856 显示 safeguards 分类器近期拦截范围明显扩大，波及正常科研和会话恢复操作。
4. **平台细节回归频发**：macOS TCC 授权、Windows Routines 侧边栏、worktree MCP 误杀——自动更新与沙箱机制的边界情况持续制造摩擦。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-10-29

## 📌 今日速览

Codex CLI 连发两个 alpha 版本（0.166.0-alpha.5.1 / alpha.6），同期 20+ 个 PR 快速合入，重点围绕 **Code Mode 有界输出收集**、**MCP 连接租约机制** 和 **TUI 状态栏重构**。社区侧，Windows 桌面端问题依旧集中：durable chat 反序列化失败（#50428）、dot 读取线程报错（#52873）等长尾 bug 讨论热烈。

---

## 🚀 版本发布

- **rust-v0.166.0-alpha.6** — [Release](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.6)
- **rust-v0.166.0-alpha.5.1** — [Release](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.5.1)

alpha 迭代节奏极快，内容以 PR 合入的内部改进为主，无独立 changelog 说明。

---

## 🔥 社区热点 Issues

1. **#50428** [Windows] durable chat turn/start 与 fork 失败（AbsolutePathBuf 反序列化错误）— 37 评论
   Windows 桌面端核心链路 bug，已持续近一个月未修复，影响 durable/cloud chat 提交与 fork，是评论数最高的悬而未决问题。
   [链接](https://github.com/openai/codex/issues/50428)

2. **#52873** dot 无法读取用户创建的 Codex threads（"unsupported placement format version"）— 31 评论，👍 9
   dot 与原生 Codex 线程互通受阻，反映跨产品数据格式兼容问题，用户共鸣较强。
   [链接](https://github.com/openai/codex/issues/52873)

3. **#38162** [Windows] 本地 MCP 工具可被发现但未暴露到 Chat 会话 — 21 评论
   MCP 集成在 Windows 桌面端的断链问题，已存在两个多月，MCP 用户受影响面广。
   [链接](https://github.com/openai/codex/issues/38162)

4. **#52877** [Windows] Codex 最大化后自动隐藏任务栏无法唤起 — 21 评论
   10 月 10 日更新引入的回归，属系统级 UX 干扰，Windows 用户反馈集中。
   [链接](https://github.com/openai/codex/issues/52877)

5. **#21252** [TUI] 请求 CLI 选项隐藏工具活动输出 — 19 评论，👍 39
   👍 数最高的需求：长会话中工具调用刷屏淹没推理摘要，社区强烈要求可折叠/隐藏。
   [链接](https://github.com/openai/codex/issues/21252)

6. **#51572** [Windows] 重启后后台 hydration 反复请求被拒绝的会话（157 个会话 742 次请求）— 14 评论
   性能与隐私双重隐患，日志详实，对诊断 app-server 资源滥用有参考价值。
   [链接](https://github.com/openai/codex/issues/51572)

7. **#53053** [Windows] computer-use 无法确定 Chrome URL，策略执行失败 — 12 评论
   中文用户报告，computer-use 在 Windows 上的浏览器 URL 检测是普遍短板。
   [链接](https://github.com/openai/codex/issues/53053)

8. **#37420** [macOS] Computer Use 引发 replayd XPC 重连循环 + 空闲时 ~90% CPU — 11 评论
   macOS 端罕见的系统级资源问题，idle 高 CPU 影响体验明显。
   [链接](https://github.com/openai/codex/issues/37420)

9. **#57641** [Windows/CLI] 桌面更新 26.1023.6123.0 后 @Browser 报 "browser access host unavailable" — 6 评论
   昨日新增，桌面更新破坏 CLI 浏览器集成，是典型的新鲜回归，值得跟踪。
   [链接](https://github.com/openai/codex/issues/57641)

10. **#57980** [CLI] Daybreak 安全检查按线程感知模型（Standard/Blue 并发）— 2 评论
    今日新提的功能需求，涉及并发会话下的模型感知安全策略，有前瞻性。
    [链接](https://github.com/openai/codex/issues/57980)

---

## 🔧 重要 PR 进展

1. **#57978** 为共享 MCP 连接增加 per-chat 租约 — 协商 `codex/connection-lease` 扩展，按 chat 隔离工具调用路由，直指 MCP 多会话串扰痛点。
   [链接](https://github.com/openai/codex/pull/57978)

2. **#57848 / #57850 / #57870** Code Mode 有界输出收集三部曲 — 1 MiB 文本 + 8 MiB 二进制的滚动尾部保留，并启用服务端截断，防止长输出撑爆内存。
   [#57848](https://github.com/openai/codex/pull/57848) | [#57850](https://github.com/openai/codex/pull/57850) | [#57870](https://github.com/openai/codex/pull/57870)

3. **#57974** MCP 配置刷新时应用会话级插件覆盖 — 解决 `refresh_mcp_config` 覆盖用户 session overrides 的问题。
   [链接](https://github.com/openai/codex/pull/57974)

4. **#57866** 下一轮重试瞬时环境启动失败 — 环境启动失败不再跨轮持续，executor 恢复后可自动恢复，提升稳定性。
   [链接](https://github.com/openai/codex/pull/57866)

5. **#57839** resume/fork 保留 reasoning token 计账 — 修复重复计数导致过早自动压缩的 bug。
   [链接](https://github.com/openai/codex/pull/57839)

6. **#57840** resume 与输入前校验 thread provider — provider 变更后旧会话安全拒绝而非静默出错。
   [链接](https://github.com/openai/codex/pull/57840)

7. **#57970** 实验性 UI tree 状态栏渲染器 — `tui_extensions_statusline` 特性开关，TUI 状态栏架构性重构的开端。
   [链接](https://github.com/openai/codex/pull/57970)

8. **#57857** TUI 引导流程支持 Google Cloud Vertex AI 设置 — `gcp_setup_wizard` 特性，第三方模型接入继续扩展。
   [链接](https://github.com/openai/codex/pull/57857)

9. **#57859** OAuth 登录超时从 3 分钟延长至 10 分钟 — 照顾 MFA 流程，小而实用的体验改进。
   [链接](https://github.com/openai/codex/pull/57859)

10. **#57837** 独立 executor（codex-exec-server）随发布包分发 — 构建、签名并经 `codex-package.json` 暴露路径，为解耦执行架构铺路。
    [链接](https://github.com/openai/codex/pull/57837)

---

## 📈 功能需求趋势

- **TUI 输出可读性**：隐藏工具活动（#21252，39 👍）是呼声最高的单项需求；状态栏渲染器 PR 表明官方正在重构展示层。
- **MCP 生态深化**：连接租约、配置刷新、插件覆盖等多 PR 并进，同时 MCP 相关 bug（#38162、#52063）持续发酵。
- **浏览器/computer-use 集成**：Windows 端 URL 检测、截图超时、浏览器崩溃（#53053、#50749、#51103）是稳定性的薄弱区。
- **多 Provider 接入**：Vertex AI 引导向、Daybreak 模型感知请求（#57980），社区期望更灵活的模型路由。
- **跨端/跨产品互通**：dot ↔ 原生线程、Windows ↔ Android Remote 同步（#57412）问题频出。

---

## ⚠️ 开发者关注点

1. **Windows 桌面端质量洼地**：今日 30 条热榜 Issue 中约半数标记 `windows-os`，涵盖反序列化崩溃、任务栏回归、hydration 风暴等，建议 Windows 用户暂缓抢先更新。
2. **更新引入回归成常态**：#52877、#57641、#57656、#57668 均为近期更新后出现，桌面快速迭代与回归测试不足的矛盾突出。
3. **错误信息缺乏可操作性**：如 #57623 "blocked by policy" 无具体原因，用户无法自诊断，是高频抱怨。
4. **token 计账与自动压缩**：#57839 修复的 reasoning 重复计数问题说明长会话 token 管理仍有隐患。
5. **资源占用**：空闲高 CPU（#37420）、后台无效请求风暴（#51572）表明性能与资源治理仍需关注。

---
*数据截至 2026-10-29，来源：github.com/openai/codex*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-29）

## 📰 今日速览

今日无新版本发布，但社区活跃度依然很高：Issue 区聚焦于**子代理的可靠性与状态报告问题**，多个 P1 级 Bug 处于待复测状态；PR 方面新增多条高质量修复，涉及**流式重试时的工具调用去重、会话历史保护、ACP hooks 支持**等核心稳定性改进，显示维护团队正在集中攻坚 agent 执行链路的健壮性。

---

## 🐛 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent 达到 MAX_TURNS 后仍报告 `success`/`GOAL`，掩盖了实际中断（P1，13 条评论）
   状态上报失真会直接误导上层 agent 决策，是最受关注的问题，待复测中。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist agent 无限挂起（P1，8 👍）
   简单如创建文件夹的操作也会挂起长达一小时，用户只能靠提示词禁用 subagent 绕过，严重影响可用性。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** 利用模型原生 bash 能力：零依赖 OS 沙箱 + 执行后意图路由（P2，9 条评论）
   方向性提案：让 Gemini 3 原生使用 POSIX 工具链，同时通过沙箱保证安全，讨论热烈。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** 评估 AST 感知的文件读取/搜索/代码映射（P2 EPIC，7 条评论）
   官方主导的架构调研，配套 #22746、#22747 子任务，探索用 ast-grep 等工具提升读取精度、降低 token 噪音。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** Gemini 几乎不主动使用 skills 和子代理（P2，7 条评论）
   反映编排/路由能力的核心短板：相关 skill 存在但模型不主动调用，社区共鸣较强。

6. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)** get-shit-done output hook 导致崩溃（P1）
   输出总结阶段稳定崩溃，被标记 effort/medium 待修复。

7. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** Browser subagent 在 Wayland 下失败（P1）
   Linux Wayland 用户的浏览器代理完全不可用。

8. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** Browser Agent 忽略 settings.json 覆盖（如 maxTurns）（P2）
   AgentRegistry 读取了配置但未生效，配置链路断裂问题。

9. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** 工具数超过 128 个触发 400 错误（P2）
   MCP 生态扩展下的实际痛点，需要更智能的工具作用域管理。

10. **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)** 模型频繁在随机位置创建临时脚本（P2）
    工作区污染问题，增加提交前清理成本，与 [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)（应阻止 `git reset`/`--force` 等破坏性操作）共同反映社区对**安全行为规范**的诉求。

---

## 🔧 重要 PR 进展

1. **[#30020](https://github.com/google-gemini/gemini-cli/pull/30020)** 修复流式重试时丢弃失败尝试的工具调用
   关键正确性修复：此前重试会导致同一命令被执行两次，副作用风险极高。

2. **[#30017](https://github.com/google-gemini/gemini-cli/pull/30017)** 取消工具结果续传请求时保留已提交的对话轮次
   避免取消操作回滚历史、抹掉已完成的（可能已改文件）工具轮次。

3. **[#30022](https://github.com/google-gemini/gemini-cli/pull/30022)** ACP 工具调用接入 BeforeTool/AfterTool hooks
   让编辑器驱动的会话同样受 hook 策略管控，补齐权限审计闭环。

4. **[#30019](https://github.com/google-gemini/gemini-cli/pull/30019)** 工具输出脱敏时保留会话历史
   修复 resume 后用户首条 prompt 被合并丢失的问题。

5. **[#29989](https://github.com/google-gemini/gemini-cli/pull/29989)** 修复多处错误的 `\n` 转义行为（P2）
   对应 Issue #22466，修复文件编辑中破坏合法转义序列的问题，维护者主导。

6. **[#30006](https://github.com/google-gemini/gemini-cli/pull/30006)** Windows IDE 进程检测增加 PowerShell CIM 回退
   修复 Windows 下误调 Unix `ps` 导致静默失败的问题。

7. **[#29921](https://github.com/google-gemini/gemini-cli/pull/29921)** 识别 TortoiseGitPlink 为 PuTTY 系 SSH 客户端
   修复 Windows TortoiseGit 用户非交互式 git over SSH 失败。

8. **[#29843](https://github.com/google-gemini/gemini-cli/pull/29843)** MCP 工具发现支持 nextCursor 分页
   修复多页工具被静默丢弃的问题（Fixes #29825）。

9. **[#29756](https://github.com/google-gemini/gemini-cli/pull/29756)**（已合并）API 请求头/请求体超时可配置（已关闭）
   新增 `requestHeadersTimeoutMs`/`requestBodyTimeoutMs`，解决长思考轮次被 `UND_ERR_BODY_TIMEOUT` 中断的问题。

10. **[#30009](https://github.com/google-gemini/gemini-cli/pull/30009)** 新增 OSS Exit Gate npm 发布工作流
    通过 Google 内部发布管线（WIF 无密钥认证）发布三个 npm 包，属于工程基础设施升级。

---

## 📈 功能需求趋势

- **子代理体系深化**（最主线）：本地 subagent Sprint（#20195）、并行协作与共享内存（#18287）、轨迹可分享（#22598）、symlink 识别（#20079）——area/agent 占比压倒性领先。
- **AST 感知工具链**：官方 EPIC（#22745/#22746/#22747）评估 ast-grep、tilth、glyph，目标是精准读取、降低 token 消耗。
- **Token 效率**：Tactful Extraction 分层读取（#19561）、文件化任务追踪替代 WriteToDo（#18836、#21000）。
- **浏览器代理健壮性**：Wayland 支持（#21983）、会话锁自动恢复（#22232）、配置生效（#22267）。
- **安全与沙箱**：零依赖 OS 沙箱（#19873）、破坏性命令防护（#22672）。
- **可观测性与评估**：bug 报告包含 subagent 上下文（#21763）、内部 eval 稳定化（#23166）。

---

## ⚠️ 开发者关注点

1. **子代理可靠性是最大痛点**：挂起（#21409）、假成功（#22323）、不主动调用（#21968）——用户对“是否应该信任 subagent 委派”信心不足，部分用户已通过提示词禁用。
2. **取消/重试路径的正确性**：多个新 PR（#30017/#30019/#30020）集中修复取消与重试导致的历史丢失、重复执行，提示这是近期高频 bug 源。
3. **Windows / 多平台兼容**：CIM 回退、TortoiseGitPlink、Wayland 等修复显示非 macOS 平台长期是二等公民。
4. **长时任务超时**：5 分钟流式超时中断长思考任务（#29756 已解决），反映重负载场景的稳定性诉求。
5. **工具数量上限**：MCP 普及后 128 工具限制（#24246）成为生态扩展瓶颈，需更智能的工具路由与作用域裁剪。

---
*数据来源：google-gemini/gemini-cli（过去 24 小时）| 生成时间：2026-10-29*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-10-29）

## 1. 今日速览

今日无新版本发布，社区讨论焦点集中在 **MCP OAuth 认证链路的多个缺陷**（动态客户端注册过期、令牌刷新失败、企业注册表搜索受限）以及 **资源管理类问题**（37 GiB 内存泄漏、SDK 文件描述符耗尽）。认证与平台集成类 Issue 更新最活跃，Windows/macOS/Linux 三大平台的凭据存储问题均有新进展。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#552](https://github.com/github/copilot-cli/issues/552)** — 组织已启用 Copilot CLI 但列出模型时报 `403 unauthorized`。已持续近一年，31 条评论、4 👍，是本仓库最顽固的企业授权配置问题。

2. **[#2165](https://github.com/github/copilot-cli/issues/2165)** — Ubuntu keychain 支持失效，文档与实际行为不符。22 👍，已标记 triaged，Linux 用户的高频痛点。

3. **[#5254](https://github.com/github/copilot-cli/issues/5254)** — 1.0.103 长时间并行 agent 会话中主进程膨胀至 **37 GiB**（含 10.7 GiB 内存碎片），32 GiB Mac 被迫大量交换。今天更新，属严重性能回归。

4. **[#5284](https://github.com/github/copilot-cli/issues/5284)** — 新提交：MCP OAuth 动态客户端注册过期后被永久复用，导致 `invalid_client`，无自动重新注册机制。

5. **[#5236](https://github.com/github/copilot-cli/issues/5236)** — Windows 上 Entra broker 令牌缓存保持 0 字节，每个新进程都重新弹账号选择器，MCP 体验严重受损。

6. **[#5282](https://github.com/github/copilot-cli/issues/5282)** — SDK `listSessions()` 无界并发读取 session-state，大量会话时耗尽文件描述符。VS Code 团队成员 @egamma 报告，可信度高。

7. **[#5270](https://github.com/github/copilot-cli/issues/5270)** — GPT-6.1 Sol 模型在 Plan → Implementation 切换时永久挂起，Auto 模式选中它也会触发。

8. **[#5233](https://github.com/github/copilot-cli/issues/5233)** — 活跃会话对远程 OAuth MCP 服务器持续重发**已过期**的 access token，既不刷新也不提示重新登录。已关闭，或有修复进展。

9. **[#5205](https://github.com/github/copilot-cli/issues/5205)** — 上下文窗口滚动（rollover）失败："checkpoint.md is absent"，长会话在上下文填满时崩溃。与 #5254 共同构成长会话稳定性问题。

10. **[#5155](https://github.com/github/copilot-cli/issues/5155)** — 企业 "Registry only" MCP 策略下，cloud agent 静默丢弃所有仓库级 MCP 配置（无法计算指纹），影响企业治理场景。

## 4. 重要 PR 进展

今日仅 4 个活跃 PR，全部针对 **安装脚本** 质量改进，无核心功能 PR：

1. **[#5093](https://github.com/github/copilot-cli/pull/5093)** — 修复校验和验证的“空验证”漏洞：`--ignore-missing` 可能掩盖实际下载文件的未校验问题，属安全相关修复，优先级最高。

2. **[#1598](https://github.com/github/copilot-cli/pull/1598)** — `install.sh` 添加 trap，异常退出（下载 404、网络错误）时清理临时目录，避免 `/tmp` 泄漏。

3. **[#2565](https://github.com/github/copilot-cli/pull/2565)** — 防止重复安装时向 shell profile 追加重复的 PATH 配置行。

4. **[#2422](https://github.com/github/copilot-cli/pull/2422)** — 为 curl/wget 手动安装用户提供 `uninstall.sh` 卸载脚本并更新文档。

> 注：4 个 PR 均为社区贡献且长期处于 OPEN 状态（最早 2 月提交），反映安装脚本是社区可参与的主要贡献面。

## 5. 功能需求趋势

- **MCP 生态健壮性（最高频）**：OAuth 认证全链路（DCR 过期、令牌刷新、Atlassian 兼容性）、企业注册表支持、资源 blob 传递、策略治理，占 Issue 总量约 1/3。
- **长会话稳定性与资源管理**：内存泄漏、上下文 rollover、会话管理 API 性能。
- **模型能力与配置**：auto 模式 reasoning effort 配置（#4560）、Grok/Gemini 对工具数量与 schema 的容错（#4836/#4835）。
- **安全与权限控制**：非交互模式的默认拒绝 + 白名单工具权限（#5275）、Co-authored-by 配置继承（#4576）。
- **跨平台/跨终端集成**：VS Code Agents 窗口的 `/rename` 支持（#4244）、终端集成的前台会话钩子（#5279）、Computer Use 无障碍树（#5278）。

## 6. 开发者关注点

- **认证是最大痛点**：企业 403 授权、三大 OS 的 keychain/keyring 问题、Windows Entra broker 令牌缓存、macOS XARA 分区冲突（#4273）——凭据管理横跨所有平台，问题密度最高。
- **错误可观测性不足**：多个 Issue 提到“无报错、无弹窗、静默失败”（#4017、#5155），以及 Grok/Gemini 的 HTTP 400 缺乏可读信息，开发者迫切需要更透明的失败原因。
- **企业场景支持不完善**：企业 MCP 注册表搜索不可用、data residency 识别错误（#5280）、BYOK 配额无预警（#5277），企业用户反馈集中在策略与合规边界。
- **自动化/CI 场景受限**：非交互模式权限粒度不足、环境变量不继承（#5281）、OTel span 缺少进程退出码（#4864），影响将 Copilot CLI 嵌入流水线的用户。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-10-29 | 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)**

---

## 1. 今日速览

今日 Kimi CLI 社区整体较为平静：无新版本发布，无活跃 Issue 更新。唯一动态是长期开放的示例类 PR **#2648（HOL Guard PreToolUse 安全门控示例）** 于昨日再次更新，显示第三方安全集成方向的持续投入。

---

## 2. 版本发布

过去 24 小时无新 Release，本节省略。

---

## 3. 社区热点 Issues

过去 24 小时内无 Issue 更新，暂无可报告内容。

---

## 4. 重要 PR 进展

### #2648 — examples: add HOL Guard PreToolUse gate `[OPEN]`
- **作者**：@kantorcodes | 创建于 2026-09-16，最近更新 2026-10-28
- **链接**：[MoonshotAI/kimi-cli PR #2648](https://github.com/MoonshotAI/kimi-cli/pull/2648)
- **内容**：新增一个聚焦的 `PreToolUse` Hook 示例：在执行 Kimi CLI 的 `Shell` 命令前，先调用 `hol-guard command test <command> --json` 进行安全分类，仅当 `classification.explicitly_benign` 为 `true` 且 `minimum_action` 为 `allow` 时才放行，否则以退出码 2 拦截。
- **意义**：展示了如何通过 Hook 机制为 CLI 引入外部安全审计工具，对希望在企业环境中增强命令执行管控的开发者具有参考价值。该 PR 已开放 40 余天仍未合并，社区可关注其评审进展。

> 今日仅 1 条 PR 活跃，其余部分数据不足 10 条，按实际数据呈现。

---

## 5. 功能需求趋势

由于今日无 Issue 活跃数据，无法基于当日数据提炼需求趋势。但从 PR #2648 可间接观察到一个方向：

- **安全与合规集成**：社区成员正探索通过 `PreToolUse` Hook 将第三方安全工具（如 HOL Guard）接入命令执行流程，反映出企业级使用场景中对命令执行审计与拦截能力的需求。

---

## 6. 开发者关注点

- **命令执行安全**：开发者关心在 AI Agent 自动执行 Shell 命令时的风险控制，倾向采用“白名单放行 + 明确拦截”的保守策略（PR #2648 的退出码 2 拦截模式即为典型实践）。
- **Hook 示例生态**：高质量的 Hook 使用示例（而非仅文档）是开发者上手扩展机制的刚需，示例类 PR 值得官方加快评审节奏。

---

*本日报基于过去 24 小时的 GitHub 自动化数据生成，数据稀疏日内容相应精简。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-29

## 📌 今日速览

OpenCode 发布 **v1.19.5** 与 **process-daemon v0.3.2**，修复了 TUI worker 请求失败时无限挂起的问题。社区侧，**免费层（Free tier）配额问题**持续发酵（#59387 已积累 80 条评论），同时 **2.2.0 升级崩溃**报告（#59684）值得警惕。PR 侧最亮眼的是 kitlangton 的**会话存储性能优化**（#58916），SQLite WAL 写入量降低 84.4%。

---

## 🚀 版本发布

### v1.19.5
- **Core Bugfix**：TUI worker 请求失败时现在会返回错误，而非让调用方无限挂起（感谢社区贡献者 @Nowaker，PR #54936）

### process-daemon v0.3.2
- 发布 `opencode-pty 0.3.2`（protocol 7），已发布至 npm 为 `@opencode/pty@0.3.2`

---

## 🔥 社区热点 Issues（Top 10）

1. **[#2242](https://github.com/anomalyco/opencode/issues/2242)** Agent 沙箱机制（105 评论 / 80 👍）
   最长寿的热门 Issue：请求限制 agent 访问当前目录之外的文件（对标 gemini-cli 的 seatbelt）。安全隔离是社区最迫切的诉求之一。

2. **[#59387](https://github.com/anomalyco/opencode/issues/59387)** Zen 免费层问题汇总帖（80 评论）
   官方设立的免费层问题集中反馈帖，覆盖"免费额度超限""重置不生效""版本不可用"等。使用量大，说明服务端配额体系近期不稳定。

3. **[#59684](https://github.com/anomalyco/opencode/issues/59684)** 2.2.0 升级后立即崩溃（5 评论）
   从 2.1.4 升级后 TUI 报 `UnknownError` 无法启动，属**升级阻断级 Bug**，建议暂缓升级 2.2.0。

4. **[#16626](https://github.com/anomalyco/opencode/issues/16626)** 请求 `session.stopping` 插件钩子（14 评论 / 12 👍）
   插件目前无法阻止 agent 循环停止，影响插件生态的可编程性。

5. **[#27110](https://github.com/anomalyco/opencode/issues/27110)** 限制并行 subagent 数量（11 评论 / 39 👍）
   本地模型用户受限于内存/上下文，高赞待实现功能。

6. **[#42856](https://github.com/anomalyco/opencode/issues/42856)** [2.0] 用户自定义本地 provider 模型不进入模型目录（已关闭）
   OpenCode 2.0 beta 的本地 OpenAI 兼容 provider 配置解析正常但模型不暴露，本地模型工作流受阻。

7. **[#51993](https://github.com/anomalyco/opencode/issues/51993)** Go 端 deepseek-v4.1-flash 图片导致 prompt cache 回退（已关闭）
   新增图片后缓存只匹配到首张图片，缓存效率直接影响使用成本。

8. **[#51223](https://github.com/anomalyco/opencode/issues/51223)** Code Mode 中 MCP 工具权限请求在 TUI 不显示（已关闭）
   权限弹窗不可见导致 `execute` 无限阻塞，属权限系统与 Code Mode 的交互缺陷（同系问题见 #51224）。

9. **[#46415](https://github.com/anomalyco/opencode/issues/46415)** `finish_reason: unknown` 触发 prefill 续写导致 400
   SAP AI Core 等禁止 prefill 的 provider 每轮成功对话后都报错，第三方 provider 兼容性问题的代表。

10. **[#51907](https://github.com/anomalyco/opencode/issues/51907)** write 工具将密钥明文写入对话记录（已关闭）
    安全敏感：包含秘密的文件内容完整渲染进 transcript，删除文件也不清除，密钥治理需求突出。

---

## 🔧 重要 PR 进展（Top 10）

1. **[#58916](https://github.com/anomalyco/opencode/pull/58916)** ⭐ 性能：assistant part 独立成行存储
   流式 part 不再重写整条消息，重工具调用的 10 步会话中 SQLite WAL 写入量 **从 47.89MB 降至 7.46MB（-84.4%）**。配套的 `session_part` 表读取侧（#58915）已合入。

2. **[#60102](https://github.com/anomalyco/opencode/pull/60102)** 修复：MCP 工具失败时保留权限拒绝原因和用户反馈
   模型此前只能收到泛化的 "Unable to execute" 消息，无法理解拒绝原因并调整策略。

3. **[#59816](https://github.com/anomalyco/opencode/pull/59816)** 修复：临时性 429 保持可重试
   将 "rate limit exhausted" 排除出配额匹配，避免瞬时限流直接终止会话——与近期免费层问题直接相关。

4. **[#54342](https://github.com/anomalyco/opencode/pull/54342)**（已合入）Code Mode 程序卡死时主动报错
   Code Mode 无定时器，卡住的 promise 会永久占住回合，现在会正确失败。

5. **[#59933](https://github.com/anomalyco/opencode/pull/59933)**（已合入）Code Mode `for...in` 遍历继承的可枚举键
   JS 语义对齐修复，Code Mode 运行时持续走向正确性。

6. **[#60099](https://github.com/anomalyco/opencode/pull/60099)**（已合入）无 location 的请求解析到全局 scope
   共享后台服务不再为 `$HOME` 构建完整 location，Desktop 打开时避免在主目录加载全部全局插件。

7. **[#59138](https://github.com/anomalyco/opencode/pull/59138)** 新增 SearXNG 自托管搜索 provider
   无需第三方 API key 即可实现 web 搜索，利好隐私敏感用户。

8. **[#57788](https://github.com/anomalyco/opencode/pull/57788)**（已合入）Home 页面支持置顶会话
   置顶会话形成独立分组，多项目管理体验提升。

9. **[#59852](https://github.com/anomalyco/opencode/pull/59852)** 修复：bind 地址 0.0.0.0 归一化
   服务注册 URL 中 `0.0.0.0` 不可路由，导致客户端自动发现后台服务失败。

10. **[#59842](https://github.com/anomalyco/opencode/pull/59842)** 修复：webfetch 处理 `.md` URL
    部分文档站对 `.md` 后缀返回 404，webfetch 现已正确处理 Accept 头。

> 其他值得留意：#60098（图片生成任务命名与写入冲突警告）、#60105（实验性 image_generate 工具文档）、#60088（文本文件 tab 增加复制/下载）。

---

## 📈 功能需求趋势

1. **安全与沙箱**：agent 权限隔离（#2242）、密钥脱敏（#51907、#51937）呼声最高，且长期悬而未决。
2. **配额与计费体验**：免费层问题集中爆发（#59387、#59809、#43324），社区要求透明的配额查询、自动重试和重置调度。
3. **本地/自托管模型支持**：自定义 provider（#42856）、Termux/Android（#47612）、SearXNG（#59138），自托管生态需求旺盛。
4. **Code Mode 运行时完善**：JS 语义对齐、超时与错误传播持续修补中。
5. **Desktop 体验打磨**：系统托盘（#50633、#42349）、窗口标题（#51442）、数学渲染（#51521）等桌面端细节需求密集。
6. **插件/钩子可编程性**：`session.stopping`（#16626）、流式工具元数据钩子（#51937）。

---

## ⚠️ 开发者关注点

- **升级风险**：2.2.0 存在启动崩溃报告（#59684），生产环境建议观望，等待补丁版本。
- **权限系统交互死角**：Code Mode / subagent 与权限弹窗组合时易出现静默挂起（#51223、#51224、#51815），遇到"工具一直 running"优先怀疑权限请求未送达。
- **缓存效率影响成本**：deepseek-v4.1-flash 的图片缓存回退（#51993）及 `prompt_cache_key` 缺失（#51580）会显著推高 token 消耗，多模态重度用户需留意账单。
- **免费层状态不可预测**：重置不生效、过早触发限流（#59809）频发，关键工作流建议配置付费或备用 provider。
- **大数据会话性能**：#58916 落地后将显著改善工具密集型会话的 IO 开销，关注下个版本发布说明。

---
*数据来源：github.com/anomalyco/opencode · 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-10-29）

## 一、今日速览

Qwen Code 今日迎来 **v0.26.3 全家桶发布**（CLI、Desktop、SDK TypeScript v0.1.25），Generated UI 卡片交互能力显著增强。CI/发布基础设施仍是最大痛点：main 分支 full tier 因 #15718 引入两个确定性失败而持续红灯，社区围绕 CI 容量调度发布一揽子优化提案。Web Shell、managed-agent 与权限安全方向均有活跃的功能演进。

---

## 二、版本发布

### v0.26.3（CLI + Desktop + SDK 同步发布）
- **Generated UI 卡片增强**：跨导航与分屏视图保持输入和状态，初始计算后展示实时视图，且仅对支持 MCP Apps 渲染的客户端显示（[#15611](https://github.com/QwenLM/qwen-code/pull/15611)、#15787）
- **配置修复**：报告被静默丢弃的配置项（#15794）
- **Desktop 新特性**：managed 模式新增会话权限规则与自动审批（#15448）、加固 serve token 处理
- 同时发布 nightly：`v0.26.3-nightly.20261028`；SDK TypeScript v0.1.25 捆绑 CLI 0.26.3

---

## 三、社区热点 Issues（Top 10）

1. **[#14724](https://github.com/QwenLM/qwen-code/issues/14724)｜Managed Agent gate CI 失败（无测试识别）** — 76 条评论，累计追踪 10 天，CI 基础设施类 issue 中讨论最热，反映 managed-agent 测试门禁的系统性不稳定。
2. **[#13078](https://github.com/QwenLM/qwen-code/issues/13078)｜每日依赖 CVE 审计失败** — 35 条评论，持续近一个月，安全审计阻塞值得维护者优先处理。
3. **[#15820](https://github.com/QwenLM/qwen-code/issues/15820)｜main 分支 full tier 确定性红灯（P1）** — #15718 引入 roster 矛盾 + VARBINARY ClassCastException，每个触碰 managed-agent 的 PR 都被烧 CI 额度，今日新报，需立即修复。
4. **[#15795](https://github.com/QwenLM/qwen-code/issues/15795)｜Harness 池排空中 404 永久退役自动化（P1）** — 后台自动化 roadmap 的关键可靠性缺陷，控制平面竞态窗口问题。
5. **[#15822](https://github.com/QwenLM/qwen-code/issues/15822)｜VS Code 伴侣覆盖整个 settings.model（P2）** — 写入 coding plan/model provider 配置时抹掉 baseUrl 等兄弟键，直接影响 VS Code 用户配置，今日新报。
6. **[#15052](https://github.com/QwenLM/qwen-code/issues/15052)｜E2E 并发取消丢失逐 SHA 验证（P2）** — 13 条评论，CI 结果可追溯性架构问题，已 ready-for-human。
7. **[#15499](https://github.com/QwenLM/qwen-code/issues/15499)｜managed runtime 发布卡在 immutable-publication 预检（P2）** — 发布流水线阻塞的又一实例，与 #15461/#15465 共同构成发布基建债。
8. **[#15741](https://github.com/QwenLM/qwen-code/issues/15741)｜MCP 工具重名导致整服务器被丢弃（P2）** — Unity MCP 用户实测触发，错误信息误导，影响 MCP 生态兼容性。
9. **[#13016](https://github.com/QwenLM/qwen-code/issues/13016)｜SDK abort/close 后 CLI worker 残留（P1）** — SIGTERM/SIGKILL 均无法终止 supervisor 子进程，SDK 集成方的核心痛点，悬置近一个月。
10. **[#15826](https://github.com/QwenLM/qwen-code/issues/15826)｜常驻上下文超 token 警告（中文提问）** — 长会话用户普遍痛点：希望上下文按需加载而非常驻，代表内存管理的典型需求方向。

---

## 四、重要 PR 进展（Top 10）

1. **[#15831](https://github.com/QwenLM/qwen-code/pull/15831)**｜Web Shell 将 Generated UI 卡片呈现为交互视图，隐藏 MCP 底层管线 — 与今日 v0.26.3 发布亮点呼应。
2. **[#15830](https://github.com/QwenLM/qwen-code/pull/15830)**｜修复 failsafe roster 对 surefire 绑定 IT 类的误报 — 直接针对 #15820 红灯，今日紧急提交。
3. **[#15827](https://github.com/QwenLM/qwen-code/pull/15827)**｜移除 MariaDB 全量集成 lane，仅保留 MySQL 8.4 — CI 容量瘦身的重要一步。
4. **[#15823](https://github.com/QwenLM/qwen-code/pull/15823)**｜headless 运行响应 SIGHUP，终止在跑的 shell 工具 — 补齐信号处理盲区，改善无人值守场景。
5. **[#12280](https://github.com/QwenLM/qwen-code/pull/12280)**｜修复引号隐藏后台操作符时绕过 Write deny 规则 — 安全修复，deny 规则可被构造性 shell 命令绕过。
6. **[#15775](https://github.com/QwenLM/qwen-code/pull/15775)**｜畸形权限规则对操作者可见化 — 权限体系可观测性提升，配合 #12280 形成安全组合拳。
7. **[#15696](https://github.com/QwenLM/qwen-code/pull/15696)**｜managed 模式有界权限历史查询（PR5 切片）— 含 committed-prefix 历史查询、流式恢复、消费者迁移，架构级大 PR。
8. **[#15802](https://github.com/QwenLM/qwen-code/pull/15802)**｜全应用测试套件按名称绑定 managed beans — 消除 by-type 自动装配歧义，配合 #15820 修复。
9. **[#14748](https://github.com/QwenLM/qwen-code/pull/14748)**｜项目 hooks 需审批对话框后加载 — 与项目 MCP 服务器同等安全门禁，防恶意仓库注入。
10. **[#11486](https://github.com/QwenLM/qwen-code/pull/11486)**｜`qwen update --target-version` 支持精确版本安装 — 免 npm 发现流程，利于企业内网/镜像环境。

其他值得留意：[#15781](https://github.com/QwenLM/qwen-code/pull/15781)（非 scope npm 扩展安装，已合并）、[#15771](https://github.com/QwenLM/qwen-code/pull/15771)（Fleet Shepherd 仪表盘展示 Actions 队列）、[#14230](https://github.com/QwenLM/qwen-code/pull/14230)（/memory 面板新增 Auto memory 浏览）。

---

## 五、功能需求趋势

| 方向 | 信号 |
|---|---|
| **后台自动化 / 无人值守** | `/autofix-pr` 需求（#15056）、Harness 池可靠性（#15795）、SIGHUP 处理（#15823） |
| **Web Shell / 桌面体验** | Generated UI 交互视图（#15831）、嵌入宿主目录选择器（#15186）、会话命名（#15309）、Auto memory 浏览（#14230） |
| **CI/发布基建自愈** | 今日约 40% 热点 issue 与 CI 相关：runner 池调度（#15461/#15465）、macOS 夜间化（#15783）、逐 SHA 验证（#15052） |
| **权限与安全** | deny 规则加固（#12280）、hooks 审批（#14748）、畸形规则可见化（#15775） |
| **上下文/内存管理** | 按需加载上下文诉求（#15826）、managed auto-memory 功能演进 |
| **模型兼容** | DeepSeek V4.1 Flash 代理识别（#15828）、混合 code mode（#11854） |

---

## 六、开发者关注点

1. **CI 噪声淹没真实信号**：CI 失败类 bot issue 长期霸榜（#14724 累计 76 评论），main 分支确定性红灯（#15820）使每个 PR 都付出额外排队成本——这是当前项目最大的工程效率损耗。
2. **发布流水线延迟**：post-publish 扇出等待 37-50 分钟（#15465）、发布专用主机未开通（#15461），发布基建与快速迭代节奏不匹配。
3. **进程生命周期管理**：SDK 场景 worker 残留（#13016）、SIGHUP 不终止工具（#15823）——SDK/嵌入式集成方对进程清理的诉求强烈。
4. **配置写入的破坏性**：VS Code 伴侣整对象覆盖 settings.model（#15822），反映配置系统缺乏局部合并保证。
5. **中文用户活跃度上升**：#15826 等中文 issue 出现，长会话上下文管理是跨语言共性痛点。

---

*数据来源：QwenLM/qwen-code GitHub（过去 24 小时）｜下期关注：#15820 修复落地情况与 v0.26.3 发布后回归反馈*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-10-29

## 1. 今日速览

今日社区活跃度较高，过去 24 小时内 Issues 与 PR 均有大量更新。主线聚焦三大方向：**本地 Ollama/vLLM 集成修复**（多枚回归 bug 已确认并落地修复）、**vim 模式输入体验**（一批 Normal 模式按键修复 PR 集中提交）、以及 **reasoning 流式渲染修复**（#7123 已由 #7137 跟进解决）。值得注意的是 #7129 报告 main 分支编译失败，属于需要优先处理的工程健康问题。

## 2. 版本发布

过去 24 小时无新 Release 发布。

## 3. 社区热点 Issues

| # | 标题 | 关注理由 |
|---|------|----------|
| [#7095](https://github.com/codewhale-hq/Codewhale/issues/7095) | [OPEN] 会话历史丢失 | 数据完整性级别的 bug，v0.10.3 上长任务执行中出现内容错位并导致历史丢失，10 条评论，讨论热度最高 |
| [#7113](https://github.com/codewhale-hq/Codewhale/issues/7113) | [CLOSED] Ollama 32K 本地模型第二轮对话失败 | #5820 的回归问题：首次启动自动采用 Ollama 后，第二轮触发上下文恢复失败。已修复关闭 |
| [#7115](https://github.com/codewhale-hq/Codewhale/issues/7115) | [OPEN] exec/doctor 忽略 TUI 的 Ollama 自动采用 | 无密钥用户在 TUI 中可用 Ollama，但 headless 与诊断路径仍强制要求 DeepSeek key，体验割裂 |
| [#7116](https://github.com/codewhale-hq/Codewhale/issues/7116) | [OPEN] 桌面端 Ollama 默认模型解析为 embedding 模型 | 本地模型目录探测缺陷，Engine 侧 local-catalog 修复已落地（`7c49574a6b`） |
| [#7123](https://github.com/codewhale-hq/Codewhale/issues/7123) | [OPEN] 思维链内容溢出显示 | CoT 卡片边界渲染 bug，流式 reasoning 文本外溢。#7137 已提交修复，是“issue→PR”闭环的典型案例 |
| [#7133](https://github.com/codewhale-hq/Codewhale/issues/7133) | [OPEN] 自动上下文压缩阈值不生效 | 设置 80% 阈值却在 ~40% 即触发，核心资源管理行为与配置不符 |
| [#7136](https://github.com/codewhale-hq/Codewhale/issues/7136) | [OPEN] “有可用更新”通知从不渲染 | `app.update_available` 只写不读的死代码，升级触达因此失效 |
| [#7118](https://github.com/codewhale-hq/Codewhale/issues/7118) | [OPEN] 任务与 CLI 任务追踪器不同步 | 模型侧任务跟踪与实际任务状态漂移，影响 agent 工作流可靠性 |
| [#7071](https://github.com/codewhale-hq/Codewhale/issues/7071) | [OPEN] 非 15 英文 locale 大量 TUI 字符串硬编码 | help wanted + localization 标签，本地化进度持续推进，中文用户直接受益 |
| [#7124](https://github.com/codewhale-hq/Codewhale/issues/7124) | [OPEN] vLLM effort 值需遵循本地模型模板 | Qwen3.8 模板接受 low/medium/xhigh 但拒绝 high，本地推理兼容性问题 |

另有已关闭进展：[#6526](https://github.com/codewhale-hq/Codewhale/issues/6526)（standing instruction 预算可配 + 裁剪可见化）、[#7070](https://github.com/codewhale-hq/Codewhale/issues/7070)（LF/CRLF 行尾控制已落地 Engine）、[#7119](https://github.com/codewhale-hq/Codewhale/issues/7119)（Fleet worker 从 PATH 错误拉起二进制）。

## 4. 重要 PR 进展

| # | 内容 |
|---|------|
| [#7129](https://github.com/codewhale-hq/Codewhale/pull/7129) | **修复 main 分支编译失败**（`FnOnce is not general enough` 三处报错），已合并 —— 阻塞所有下游 PR，今日最高优先级 |
| [#7137](https://github.com/codewhale-hq/Codewhale/pull/7137) | 流式 reasoning delta 正确路由到思维链卡片，修复 #7123 内容溢出（前作 #7134 被关闭后重新提交） |
| [#7122](https://github.com/codewhale-hq/Codewhale/pull/7122) | SIGHUP 退出前刷新持久化队列，防止关闭终端时丢失会话数据 —— 直击 #7095 类数据丢失痛点，已关闭（合并） |
| [#7138](https://github.com/codewhale-hq/Codewhale/pull/7138) | 为嵌入方与 exec 消费者提供可复用、可取消的后台运行完成观察器 |
| [#7127](https://github.com/codewhale-hq/Codewhale/pull/7127) | 保留远程控制（/rc）启动失败诊断信息，异步失败也纳入 TUI 日志 |
| [#7130](https://github.com/codewhale-hq/Codewhale/pull/7130) / [#7126](https://github.com/codewhale-hq/Codewhale/pull/7126) | vim Normal 模式支持 Shift 修饰键（如 `G`）及不被信任的终端下按键正确处理 —— vim 模式批量修复的代表 |
| [#7125](https://github.com/codewhale-hq/Codewhale/pull/7125) | 按模板修订源应用本地模型 reasoning 梯度（low/medium/xhigh 等），修复 #7124 |
| [#7128](https://github.com/codewhale-hq/Codewhale/pull/7128) | 文档化 Runtime API 作为社区 VS Code 扩展的唯一依赖契约，明确对外 API 边界，已关闭 |
| [#7135](https://github.com/codewhale-hq/Codewhale/pull/7135) | 将 `<turn_meta>` 元数据块从 /tree 与 /export 中排除，保持导出干净 |
| [#7131](https://github.com/codewhale-hq/Codewhale/pull/7131) | 新增 Opper 作为捆绑 provider 描述行（EU 托管的 OpenAI 兼容网关，700+ 模型） |

## 5. 功能需求趋势

- **本地模型一等公民化**（最热）：Ollama 自动采用、模型目录探测、vLLM effort 模板兼容、本地上下文预算管理——相关 Issue/PR 占比最高，社区明显在从云端向本地推理迁移。
- **本地化/国际化**：#7071 持续推进，/undo、/diff 等 chrome 文案逐步接入 15 个语言包，中文用户反馈活跃。
- **编辑器体验打磨**：vim 模式（Normal 模式按键、`$` 定位、按住键输入）、多行输入、行尾控制（LF/CRLF）、配色主题修复。
- **可观测性与可控性**：上下文压缩阈值、standing instruction 预算、reasoning-only 输出自动续跑（#6990）、后台运行完成通知。
- **生态集成**：VS Code 扩展依赖契约文档化、Fleet 多 worker 编排、Opper 等新 provider 接入。

## 6. 开发者关注点

1. **数据可靠性是最大痛点**：会话历史丢失（#7095）、信号退出丢数据（#7122）、任务状态不同步（#7118）均指向持久化与状态一致性问题，需要系统性排查。
2. **本地 Ollama 路径体验割裂**：TUI 自动采用与 exec/doctor 桌面端行为不一致，新用户“开箱即用”的最后一公里尚未打通。
3. **main 分支健康度**：编译失败（#7129）曾导致所有 PR CI 变红，提示主干需要更强制的合并前验证。
4. **贡献流程规范化**：大量 PR 带 `contribution-gate` 标签且要求关联 Issue，同时 #7129 类修复性 PR 频出，说明社区在快速增长期需平衡贡献门槛与主干稳定性。
5. **Agent 长时任务自动化**：用户希望 agent 在输出受限停止时自动续跑、空闲被自动识别，减少人工“continue”干预。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 — 2026-10-29

## 📌 今日速览

今日无新版本发布，但社区活跃度很高（84 条 Issue 更新、33 条 PR 更新）。安全方面，**undici 依赖漏洞升级（#11413）已被标记 P0 并有修复可用**，涉及所有已发布版本。功能层面，**Anthropic message threads 服务端会话（#11545）与 Bedrock Mantle / Vertex Claude 路由（#11371/#11372）** 是最受关注的方向。

---

## 🔥 社区热点 Issues（Top 10）

1. **#5886** [OPEN] AgentSession settlement/continuation 生命周期 Bug 汇总
   Armin Ronacher（@mitsuhiko）发起的元 Issue，汇总了 run 结束后从过期 transcript 继续会话的一类系统性 Bug。13 条评论、4 👍，是长期未决的架构级问题。
   🔗 earendil-works/pi Issue #5886

2. **#7739** [OPEN] 设定对标 jcode 的启动延迟与内存预算
   社区要求为 pi 设定启动时间/内存预算，并缩小与竞品 jcode 的基准差距，12 条评论，性能优化诉求强烈。
   🔗 earendil-works/pi Issue #7739

3. **#9409** [CLOSED] 推理模型会话在上下文上限处永久卡死
   gpt 系推理模型 `stopReason: "length"` 后压缩恢复失败、会话 wedge，已修复关闭。
   🔗 earendil-works/pi Issue #9409

4. **#10645** [CLOSED] Bun 编译版中 resizeImage 返回 null，0.87.x 起图片附件全部丢失
   影响独立二进制用户的关键回归，已修复。
   🔗 earendil-works/pi Issue #10645

5. **#11413** [CLOSED] [P0] undici 固定版本需升级至 ≥8.12.2
   安全问题：所有已发布版本（至 1.4.0）携带含漏洞的 undici 8.10.2，修复已就绪。
   🔗 earendil-works/pi Issue #11413

6. **#9265** [CLOSED] openai-completions 流式工具调用 O(n²) 重解析冻结事件循环
   单进程托管多会话的嵌入式场景下严重影响可用性，已修复。
   🔗 earendil-works/pi Issue #9265

7. **#9884 / #10812** [OPEN] 配置的默认模型被静默替换为 fallback
   两个相关 Issue：扩展注册的模型或下架模型名会导致启动时静默切换到 `deepseek-v4-pro`，无任何提示。静默 fallback 是高频痛点。
   🔗 earendil-works/pi Issue #9884 | Issue #10812

8. **#10954** [OPEN] anthropic-messages 工具列表变更后重放 thinking 块返回 400
   与 #10324 同类失败，影响 OpenCode Go 等下游网关场景。
   🔗 earendil-works/pi Issue #10954

9. **#10386** [OPEN] pi-durable 支持 coding-agent 扩展运行时
   Durable 场景下 ExtensionAPI 事件对等性的需求，多人讨论中。
   🔗 earendil-works/pi Issue #10386

10. **#10770** [OPEN] `.pi/agent/sessions` 目录权限应为 0700
    会话数据隐私问题，标记 in-progress。
    🔗 earendil-works/pi Issue #10770

---

## 🚀 重要 PR 进展（Top 10）

1. **#11545** [OPEN] Anthropic message threads 支持
   利用服务端会话 Beta，每轮只发送增量消息而非完整历史，显著降低 token 消耗与延迟。
   🔗 PR #11545

2. **#11371** [OPEN] Google Vertex AI 上提供 Claude 模型
   列出 Vertex Anthropic Messages API 的 13 个 Claude 模型并复用现有适配器。
   🔗 PR #11371

3. **#11372** [OPEN] Bedrock Mantle 路由修复
   将 Converse 不支持的 16 个模型（GPT-5.4~6.1、Grok、Gemma 等）路由到 Bedrock 的 OpenAI 兼容端点。
   🔗 PR #11372

4. **#8572 / #8573** [CLOSED] Bedrock Mantle SigV4/IAM 认证 + Anthropic Messages 路由
   AWS profile/IAM 用户支持与 Anthropic 消息格式补全，Bedrock 支持体系基本成型。
   🔗 PR #8572 | PR #8573

5. **#11546** [CLOSED] pi.exec 输出上限 256 MiB
   通过 `maxBuffer` 限制输出、超限终止并返回 `truncated: true`，防止内存爆掉。
   🔗 PR #11546

6. **#11540** [CLOSED] exec/pty 线程启动失败返回 spawn_error 而非 panic
   修复 cgroup 任务限制下守护进程 panic 导致 exec 永久挂起的问题（对应 #11433）。
   🔗 PR #11540

7. **#11544** [CLOSED] 守护进程终止时杀掉其运行中的命令
   修复 `close()` 过早 SIGTERM 导致子命令残留的泄漏。
   🔗 PR #11544

8. **#11543/#11541** [CLOSED] stripAnsi 正确剥离私有参数 CSI 序列
   修复鼠标上报等控制序列参数被当作文本残留的问题。
   🔗 PR #11543

9. **#11348** [CLOSED] 所有滚动列表支持 `tui.select.pageUp/pageDown`
   取代 #7680，覆盖内置选择器、自动补全、coding-agent 选择器，关闭长期 Issue #7629。
   🔗 PR #11348

10. **#10663** [OPEN] `pi auth --continue` 通用认证接续入口
    支持从外部发起的认证流程通过 base64url payload 接续完成，改善嵌入式/OAuth 体验。
    🔗 PR #10663

---

## 📈 功能需求趋势

- **云厂商模型路由整合**：Bedrock（Mantle、SigV4、Anthropic Messages）与 Vertex（Claude、streamFunctionCallArguments）是本周最密集的开发主线。
- **服务端会话与增量传输**：Anthropic message threads（#11545）代表降低 token 成本的新方向。
- **pi-durable 生态成熟**：多个 Issue 要求扩展运行时、钩子对等、turn limit 等能力（#10386、#11043、#11141、#11149）。
- **企业安全与合规**：`--min-release-age` 更新策略（#11262）、undici 补丁（#11413）、目录权限（#10770）反映企业用户诉求上升。
- **性能与资源预算**：启动延迟/内存对标（#7739）、流式解析 O(n²)（#9265）。

## ⚠️ 开发者关注点

1. **静默模型 fallback**：默认模型失效或竞态时无提示切换（#9884、#10812），建议尽快增加警告日志。
2. **Windows 兼容性**：`pi.exec` 无法运行 `.cmd` 命令（npm/npx/pnpm，#10616）持续困扰扩展开发者。
3. **会话生命周期稳定性**：AgentSession settlement/continuation 类 Bug（#5886）是嵌入式多会话场景的核心痛点。
4. **企业环境适配**：自动更新策略与安全扫描冲突（#11262）、OAuth 超时可配置性（#11549）是落地阻碍。
5. **TUI 终端兼容**：Rex 中工作状态不显示（#11519）、相对路径 Markdown 链接无法打开（#10993）等终端生态问题仍需关注。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# 📰 oh-my-pi 社区动态日报 · 2026-10-29

## 一、今日速览

oh-my-pi 今日发布 **v18.13.3**，修复了备受关注的上下文估算偏差导致自动压缩过早触发的问题（#15797），并将 Bun 引擎要求提升至 ≥1.4.4。社区方面，24 小时内有 60 条 Issue 更新、216 条 PR 更新，热度集中在 Vibe 模式工具集刷新（#17340 / #17343）、协作会话丢客（#17286）以及一批高优先级修复上。

---

## 二、版本发布

### v18.13.3（@oh-my-pi/pi-agent-core）

- **Changed**: Bun 引擎要求更新至 **≥1.4.4**
- **Fixed**: 修复 chat-completions 上下文估算将被请求丢弃的历史 thinking 计入统计（无 reasoning replay 场景），该问题曾导致自动压缩远低于阈值就触发（对应 Issue [#15797](https://github.com/can1357/oh-my-pi/issues/15797)，已关闭）

---

## 三、社区热点 Issues

1. **[#14158](https://github.com/can1357/oh-my-pi/issues/14158) Codex provider steering 报错（22 评论）**
   向运行中的 Codex 原生 turn 发送 steering 消息触发 `unsupported_native_inflight_message` 错误，已标记 duplicate/triaged。作为评论最多的 Issue，反映了 OpenAI Codex 用户对多轮干预体验的强烈需求。

2. **[#15586](https://github.com/can1357/oh-my-pi/issues/15586) 进程内 grep 破坏 SQLite 锁导致凭据库损坏（17 评论，prio:p1）**
   原生 ripgrep 绑定遍历到 `agent.db` 时 `close()` 释放了同进程 SQLite 持有的 POSIX 锁，可导致 WAL 被删、凭据存储损坏。数据安全级别问题，值得所有用户关注。

3. **[#17205](https://github.com/can1357/oh-my-pi/issues/17205) 实验性上下文 rollover 死循环烧钱 $500+（已关闭，prio:p1）**
   子代理中 `experimentalContextManagement` 每次工具调用都触发 rollover（31 分钟 380 次），最终 429 终止。高成本事故案例，已修复关闭。

4. **[#16076](https://github.com/can1357/oh-my-pi/issues/16076) worktree.clone 递归复制嵌套 worktree（prio:p1）**
   目标路径位于源 checkout 内时会自我递归。`.worktrees/<name>` 是常见布局，影响面较广。

5. **[#17286](https://github.com/can1357/oh-my-pi/issues/17286) collab 大型会话中 guest 被踢出（prio:p1）**
   #16956 引入的 send backlog 限制导致 agent 运行时 guest 约 30-40 秒后被强制离线，直接影响协作分享功能可用性。

6. **[#17298](https://github.com/can1357/oh-my-pi/issues/17298) WSL 下主题自动检测失效（8 评论）**
   浅色模式用户在 WSL/cmd 环境中检测始终失败，得到“浅色背景 + 深色主题”的错误组合。可访问性相关，讨论热烈。

7. **[#17340](https://github.com/can1357/oh-my-pi/issues/17340) Vibe MCP 刷新超出 Anthropic 512 工具上限**
   v18.13.3 上实测 556 个 tool_addition 被 Anthropic 400 拒绝。当日新增，已有对应修复 PR #17343（见下文）。

8. **[#17329](https://github.com/can1357/oh-my-pi/issues/17329) Gemini 下上下文估算虚高约 5.8 倍**
   `pruneToolDescriptions` 开启时估算仍按完整工具描述计数，与 v18.13.3 修复的 #15797 属同类估算问题，可能引发新一轮过早压缩。

9. **[#17281](https://github.com/can1357/oh-my-pi/issues/17281) Advisor 忽略 LiteLLM 429 的 Retry-After（prio:p2）**
   每 ~1.6 秒盲目重试，将积压全部砸成限流错误。对使用 OpenAI 兼容代理（LiteLLM）的用户影响明显。

10. **[#17059](https://github.com/can1357/oh-my-pi/issues/17059) Cursor provider 第二轮起丢失系统提示（已关闭，wontfix，prio:p1）**
    AGENTS.md、skills、rules 从第二轮对话起不再送达模型。上游 Cursor 行为限制导致 wontfix，Cursor 用户需留意替代方案。

---

## 四、重要 PR 进展

1. **[#17343](https://github.com/can1357/oh-my-pi/pull/17343) 修复 Vibe director 工具集被 MCP 刷新污染**
   直接对应今日热 Issue #17340，阻止 MCP catalog refresh 干扰 vibe 模式收窄后的工具集，避免超出 Anthropic 512 工具限制。

2. **[#17334](https://github.com/can1357/oh-my-pi/pull/17334) 新增 Modular Cloud provider（review:p1）**
   Modular 官方员工提交，支持 MiniMax M3.1 Flash、Gemma 4 等开放模型，`/login` 即可 API key 接入，无需自定义 provider。

3. **[#17344](https://github.com/can1357/oh-my-pi/pull/17344) 可选韩语 UI 与 `/language` 切换**
   保持英文默认，增加 opt-in 韩语本地化，基于维护者自己的 fork 分支整合，是 i18n 方向的标志性进展。

4. **[#17317](https://github.com/can1357/oh-my-pi/pull/17317) `/clear` 后通知扩展 hooks（review:p0）**
   清空会话上下文后触发不可取消的 `session_clear` 事件并复位扩展缓存状态，修复扩展状态不同步问题。当前最高审查优先级。

5. **[#17338](https://github.com/can1357/oh-my-pi/pull/17338) 绑定 EventBus 原型方法（review:p1）**
   修复扩展 detach `pi.events.on/emit` 后丢失 receiver 的 SDK 稳定性问题。

6. **[#17335](https://github.com/can1357/oh-my-pi/pull/17335) worktree 支持相对路径 Git metadata**
   兼容 `worktree.useRelativePaths` 配置，与 Issue #16076 一同改善 worktree 场景健壮性。

7. **[#17337](https://github.com/can1357/oh-my-pi/pull/17337) Markdown 表格快捷复制与转录鼠标选择**
   表格支持一键 Copy TSV/CSV/Markdown，并增加 transcript 鼠标选取，向 Grok Build 等产品的交互体验看齐。

8. **[#11049](https://github.com/can1357/oh-my-pi/pull/11049) 状态栏显示 git 上游分叉（⇡/⇣）**
   长期打磨的 UX 增强，状态栏分支名旁显示 ahead/behind 提交数。

9. **[#11813](https://github.com/can1357/oh-my-pi/pull/11813) 标注 Anthropic 缓存未命中原因**
   cache miss 标记可指明是哪个工具定义或系统提示变更导致缓存失效，对成本敏感用户价值很高。

10. **[#15222](https://github.com/can1357/oh-my-pi/pull/15222) 会话条目行级 memoize，prune 只重写变化部分**
    将 prune 从 O(全量会话字节) 重写优化为增量写入，长会话持久化性能显著提升。

---

## 五、功能需求趋势

- **Provider 生态扩张**：Modular Cloud 接入（#17334）、Cursor/OpenAI Codex/LiteLLM 兼容性修复，社区对多 provider 开箱即用的诉求持续高涨。
- **Vibe / 多代理协作成熟化**：Vibe 工具集管理（#17340、#17343）、collab 会话稳定性（#17286）、ACP 子代理状态上报（#17172）成为活跃战场。
- **成本与上下文管理精度**：上下文估算（#15797、#17329）、压缩策略（#16753）、缓存 miss 归因（#11813）、429 退避（#17281）——token 成本可控性是核心关切。
- **TUI/UX 打磨**：主题自动检测（#17298）、表格复制（#17337）、session pin（#9449，已实现关闭）、i18n（#17344）。
- **可扩展性与 SDK**：扩展事件生命周期（#17317、#17338）、工具授权事件（#9959）、completion 元数据（#14962）显示插件开发者群体在壮大。

## 六、开发者关注点

1. **数据与凭据安全**：#15586（SQLite 锁丢失致凭据库损坏）是今日最需警惕的问题，建议受影响用户备份 `~/.omp/agent/agent.db`。
2. **升级回归风险**：#17277（18.13.2 OAuth 刷新 AbortError 回归）与 #17205（实验特性死循环烧钱）提示升级前应关注 changelog，实验特性（如 `experimentalContextManagement`）生产使用需谨慎。
3. **代理/网关用户痛点**：LiteLLM 429 重试（#17281）、llama.cpp typesafe transport（#17301）表明自建网关场景兼容性仍需持续投入。
4. **长会话与大会话性能**：会话持久化优化（#15222）、collab backlog（#17286）、上下文估算精度是长时运行场景的三大高频痛点。

---
*数据来源：GitHub can1357/oh-my-pi · 统计窗口 2026-10-28 ~ 2026-10-29*

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*