# AI CLI 工具社区动态日报 2026-09-29

> 生成时间: 2026-09-29 04:51 UTC | 覆盖工具: 11 个

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

**数据窗口：2026-09-28 至 2026-09-29**

---

## 1. 生态全景

AI CLI 工具已进入“Agent 运行时”竞争阶段：各工具的重心从基础对话/编码转向**子代理编排、记忆系统、MCP 生态和多端协同**。头部工具（Claude Code、Codex）面临的是规模化质量回归与认证稳定性问题，而中腰部工具（Qwen Code、Pi、OpenCode、oh-my-pi）则在架构层面激进创新（Managed Agent 双路径、Codemode 沙箱、推测执行）。新模型（Sonnet 5.5、Opus 5.5、GPT-6）的密集上线正在成为生态适配压力源——多个工具同日暴露出模型兼容性问题。同时，token 成本与缓存效率（prompt cache、上下文治理）上升为跨工具的共性痛点。

---

## 2. 各工具活跃度对比

| 工具 | Issue 热度（Top1） | 24h PR 活动 | Release | 当前焦点 |
|---|---|---|---|---|
| **Claude Code** | #1757 💬84 👍73 | 6 条（低，核心为回滚 PR） | v2.1.284 | Sonnet 5.5 上线、认证老 Bug、Desktop 回归 |
| **OpenAI Codex** | #48074 💬68 👍112 | ~10+ 条（高，修复密集） | v0.158.0 稳定版 | Windows daemon 闪烁、TUI 复制体验 |
| **Gemini CLI** | #22323 💬13 | ~10 条（社区贡献活跃） | v0.63.0 nightly | 认证循环修复、subagent 可靠性 |
| **Copilot CLI** | #1274 💬29 👍12 | 0 条 | v1.0.89→v1.0.90-1（连发4版） | 认证令牌失效、MCP OAuth |
| **OpenCode** | #39653 💬17 👍11 | 10+ 条（高） | 无 | V2 重构回归、缓存策略 |
| **Qwen Code** | #12380 💬37 | 10 条（架构级） | 无（nightly 失败） | Managed Agent 架构推进 |
| **DeepSeek TUI** | #5316 💬29 | 50 条 PR / 28 Issues（**全场最高**） | 无 | 网络重试机制、模型路由 |
| **Pi** | #10031 💬17 | 13 条 | 无 | Codemode+MCP、llama.cpp 托管 |
| **oh-my-pi** | #12870 💬15 👍9 | 322 条 PR 更新（**极高**） | v18.4.1–18.4.3（连发3版） | 推测执行、缓存经济性 |
| **Kimi Code CLI** | — | 0 | 无 | 静默 |
| **DeepSeek Harness** | 无 | 无 | v0.2.0-rc.1 | RC 测试期，社区静默 |

**观察**：oh-my-pi 与 DeepSeek TUI 的工程迭代速度惊人；Claude Code PR 活动反而最低（以回滚行为体现谨慎）；Copilot CLI 走“小步快跑补丁”节奏。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **认证稳定性** | Claude Code (#1757)、Codex (Android 配对)、Gemini CLI (无限循环)、Copilot CLI (#4929)、oh-my-pi (Windsurf 登录) | 长时运行令牌刷新失效、CI/无人值守场景反复登录，是**全场第一共性痛点** |
| **MCP 生态兼容性** | Codex (OAuth 客户端密钥)、Copilot CLI (#4968/#4606 OAuth 缺陷)、Pi (Codemode+MCP)、Qwen Code (Hosted MCP runtime) | OAuth 实现严谨性与 MCP 服务器接入门槛 |
| **子代理/多 Agent 可靠性** | Gemini CLI (挂起/误报)、Qwen Code (Managed Agent)、OpenCode (fan-out 回退)、DeepSeek TUI (fleet 编排) | 状态误报、挂起、路由失败回退机制 |
| **上下文/压缩稳定性** | Pi (剪裁含 thinking 失败)、Gemini CLI (token 治理)、Qwen Code (#12028)、oh-my-pi (#13641)、OpenCode (413 压缩) | 长会话压缩失败、非对话 token 开销失控 |
| **缓存与成本透明** | oh-my-pi (prompt cache 失效 p1)、Claude Code (限额 3.6 倍异常)、OpenCode (标题误用计费模型) | 缓存不延长直接推高账单，计费口径需澄清 |
| **记忆系统** | Claude Code (auto-memory)、Qwen Code (结构化 Auto Memory/Mem0)、OpenCode (记忆专项) | 阈值可配置、提取时机正确性 |
| **Windows/平台质量** | Codex (近半 Issue 带 windows 标签)、Copilot CLI、oh-my-pi (CI 只跑 Linux 漏检) | CI 平台覆盖不足是共性根因 |

---

## 4. 差异化定位分析

- **Claude Code**：企业级全平台产品（CLI/Desktop/Web/移动），生态绑定 Anthropic 模型。方向是多端一致性与集成扩展（GitLab、Skills 同步），但 Desktop 快速迭代付出稳定性代价。
- **OpenAI Codex**：Rust 技术栈、TUI 交互打磨最深（copy-on-select、中键粘贴），Remote Control/移动端协同是差异化方向；Windows 是最大短板。
- **Gemini CLI**：模型能力驱动的实验田——零依赖 OS 沙箱、AST 感知工具链、token 效率研究，偏研究型工程探索，社区贡献友好。
- **Copilot CLI**：GitHub 原生集成 + 生态兼容策略（支持 `.claude/rules`），版本节奏最快但认证链路和 MCP 质量欠账多。
- **Qwen Code**：架构雄心最大——Managed Agent 双路径（TS agent loop 与推理/工具环境解耦）、Java 控制平面、Hosted MCP runtime，明确瞄准托管/多租户 Agent 平台分发。
- **OpenCode**：多云多 Provider 路由中立层（Bedrock/Mistral/Alibaba 等 6 条路由缓存策略），插件生态开放是核心诉求。
- **Pi / oh-my-pi**：黑客型/重度用户工具。Pi 侧重本地推理（llama.cpp 托管）与可编程性（Codemode WASM 沙箱、虚拟模型）；oh-my-pi 侧重推测执行、RPC/SDK 宿主集成等前沿工程。
- **DeepSeek 系（TUI/Harness）**：Provider 兼容网关 + 数据驱动 descriptor 扩展模式，迭代速度极快，适合多网关接入用户。

---

## 5. 社区热度与成熟度

| 成熟度层级 | 工具 | 判断依据 |
|---|---|---|
| 规模成熟、问题规模化 | Claude Code、Codex | 用户基数大，痛点集中在质量回归而非功能缺失 |
| 高速追赶 | Copilot CLI、Gemini CLI | 补丁节奏快、社区贡献活跃，认证/MCP 欠账偿还中 |
| 架构创新期 | Qwen Code、OpenCode、oh-my-pi、Pi | 大型架构 PR 主导（Managed Agent、V2 重构、推测执行），回归风险与前瞻性并存 |
| 快速工程迭代 | DeepSeek TUI | 24h 50 PR 的节奏，但 CI 红灯暴露质量门禁不稳 |
| 低活跃/静默 | Kimi Code CLI、DeepSeek Harness | 无社区互动或 RC 待验证 |

---

## 6. 值得关注的趋势信号

1. **认证是 Agent 时代的 SSO 问题**：五个工具同时暴露长时认证失效。若你的自动化/CI 依赖 AI CLI，应把“认证自愈 + 会话恢复”列为选型硬指标。
2. **新模型上线即兼容性事故**：Sonnet 5.5 / Opus 5.5 / GPT-6 上线引发 400 错误、temperature 拒绝、缓存异常（Claude Code #97398、oh-my-pi #12870、Qwen Code #12928）。**建议生产环境延迟跟进新模型 1-2 周**。
3. **缓存经济性成为一等公民**：oh-my-pi 的 prompt cache 失效（p1）、Claude Code 限额异常、OpenCode 标题误用计费模型——重度用户应监控 `cache_read` 指标并审计 `small_model` 配置。
4. **Agent 运行时解耦是下一代架构共识**：Qwen Code 的 Managed Agent、Pi 的 Codemode 沙箱、DeepSeek 的 fleet 编排，都指向“模型推理与工具执行环境分离”的托管化路线，值得提前关注相关接口设计。
5. **CI 平台覆盖不足是回归 Bug 的共同根因**：Codex 的 Windows 问题、oh-my-pi 的盘符编码问题均源于 CI 只跑单平台。自建类似工具的团队应引以为戒。
6. **重构守恒问题**：OpenCode V2 重构丢失 watchdog、Claude Code 回滚行为变更——大重构后的“功能守恒审计”正在成为工程刚需，也提示用户**大版本后延迟一个版本再升级**。

---

*报告基于各仓库公开数据生成，Issue/PR 计数为日报披露口径，仅供技术决策参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

*数据来源：github.com/anthropics/skills，截止 2026-09-29*

> ⚠️ **数据说明**：本期 PR 评论数均为 undefined，无法按热度严格排序，以下基于更新活跃度、议题关联度与功能影响力综合评估。所有列出 PR 均为 **OPEN** 状态。

---

## 一、热门 Skills 排行（PR）

| # | Skill / PR | 作者 | 状态 | 看点 |
|---|---|---|---|---|
| 1 | **skill-creator 触发评估修复** [#1298](https://github.com/anthropics/skills/pull/1298) | @MartinCajiao | OPEN | 修复触发评估误报、Windows select() 失败、运行时错误被误判为非触发。9 月仍在更新，关联 Issue #556（0% 触发率）与 #1383，是社区工程侧最集中的痛点 |
| 2 | **mcp-builder 兼容 mcp≥2** [#1742](https://github.com/anthropics/skills/pull/1742) | @Kuldeeep18 | OPEN | 修复 `streamable_http_client` 重命名及自定义 header 配置，关联 #1668；同一作者还提交了 package_skill.py 修复 [#1681](https://github.com/anthropics/skills/pull/1681)，9 月底持续活跃 |
| 3 | **md2video-audio** [#1703](https://github.com/anthropics/skills/pull/1703) | @70v-Yoyo | OPEN | Markdown 一键转带真人配音的 MP4 视频（Marp + TTS），零成本内容创作方向 |
| 4 | **proofcore-contract-auditor** [#1771](https://github.com/anthropics/skills/pull/1771) | @ProofCore-Protocol | OPEN | Solidity/Rust 智能合约静态分析 + TON 链上审计存证，Web3 + Skills 结合的代表性提案 |
| 5 | **notion-spec-to-implementation** [#1245](https://github.com/anthropics/skills/pull/1245) | @mrdesouzaphd-cmyk | OPEN | 将产品/技术 Spec 拆解为 Notion 任务，含验收标准与进度追踪，9-28 仍活跃 |
| 6 | **AWT (AI Watch Tester)** [#822](https://github.com/anthropics/skills/pull/822) | @ksgisang | OPEN | 零代码 AI 视觉 E2E 测试，赋予 Claude 浏览器控制能力，长期悬置但持续更新 |
| 7 | **pyxel 复古游戏开发** [#525](https://github.com/anthropics/skills/pull/525) | @kitao | OPEN | Python 复古游戏创建/调试/无头验证，创作类 Skill 中最长寿提案之一 |
| 8 | **document-typography** [#514](https://github.com/anthropics/skills/pull/514) | @PGTBoos | OPEN | 修复 AI 生成文档的孤行、孤字换行、编号错位等排版问题，直击文档生成普遍缺陷 |

---

## 二、社区需求趋势（Issues 提炼）

1. **安全与信任边界**（最热，43 评论）：[#492](https://github.com/anthropics/skills/issues/492) 社区技能冒用 `anthropic/` 命名空间导致信任滥用；[#1394](https://github.com/anthropics/skills/issues/1394) eval-viewer XSS。社区强烈要求官方签名/命名空间隔离机制。
2. **组织级分发与协作**：[#228](https://github.com/anthropics/skills/issues/228)（16 评论）要求组织内 Skill 共享库，替代 Slack 手传 .skill 文件的原始方式。
3. **Skill 质量工程化（评估/触发）**：[#556](https://github.com/anthropics/skills/issues/556)（12 评论）触发率 0% 的 eval 失效；[#1383](https://github.com/anthropics/skills/issues/1383) Windows 兼容、benchmark 静默失败。触发评测是当前最大工程痛点。
4. **上下文经济性**：[#1487](https://github.com/anthropics/skills/issues/1487) `claude-api` 单次注入 ~156k tokens 直接打爆上下文窗口；[#1329](https://github.com/anthropics/skills/issues/1329) 提议 compact-memory 符号化压缩 agent 状态。
5. **AI 治理与操作安全**：[#412](https://github.com/anthropics/skills/issues/412)（agent-governance）、[#1385](https://github.com/anthropics/skills/issues/1385)（三段式推理质量门）以及 PR [#1776](https://github.com/anthropics/skills/pull/1776) blast-radius（批量破坏性写操作前检查清单）。
6. **平台兼容性**：[#29](https://github.com/anthropics/skills/issues/29) AWS Bedrock 支持、Windows 兼容问题反复出现。

---

## 三、高潜力待合并 Skills（活跃 OPEN PR）

- [#1298](https://github.com/anthropics/skills/pull/1298) skill-creator 触发评估修复 — 直接对应三个高评论 Issue，合并价值最高
- [#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder mcp≥2 兼容 — 关联上游 breaking change，时效性强
- [#1792](https://github.com/anthropics/skills/pull/1792) docx LibreOffice 超时错误上报与输出校验 — 小而准的官方 skill 修复
- [#1607](https://github.com/anthropics/skills/pull/1607) claude-api 下线模型 ID 标记 — 关联 #1603，维护类易合并
- [#541](https://github.com/anthropics/skills/pull/541) docx 修订 ID 冲突修复 — 修复 OOXML 共享 ID 空间导致的文档损坏
- [#1734](https://github.com/anthropics/skills/pull/1734) 孤立 docx 批注检测 — 9-25 仍在更新，文档处理方向持续受关注

---

## 四、生态洞察（一句话总结）

**社区最集中的诉求正从“贡献新 Skill”转向“治理与质量工程”**——即建立可信的命名空间与签名机制、组织级分发能力，以及可靠、跨平台、不吞噬上下文的 Skill 触发与评估工具链；skill-creator/docx/mcp-builder 等核心官方 Skill 的工程质量修复是最接近落地的热点。

---

# Claude Code 社区动态日报 · 2026-09-29

---

## 1. 今日速览

今日发布 **v2.1.284**，重磅新增 **Claude Sonnet 5.5** 模型（1M 上下文，$2/$10 per Mtok）并设为 API 默认 Sonnet 模型，同时为 auto 模式的越界读取确认新增“允许一次”选项。社区方面，老牌认证 Bug #1757（评论 84 条）持续发酵，Desktop 应用相关回归问题（会话列表为空、热力图丢数据）成为近期投诉热点。

---

## 2. 版本发布

### v2.1.284
- 新增 **Claude Sonnet 5.5**（`claude-sonnet-5-5`），现为 Anthropic API 上的默认 Sonnet 模型 — 1M 上下文，定价 $2/$10 per Mtok，缓存读取 $0.20/Mtok
- auto 模式在工作目录外读取前的提示新增 **"Yes, but ask again next time"** 选项

🔗 [Release v2.1.284](https://github.com/anthropics/claude-code/releases)

---

## 3. 社区热点 Issues

| # | Issue | 关注度 | 为什么重要 |
|---|-------|--------|-----------|
| 1 | [#1757](https://github.com/anthropics/claude-code/issues/1757) 频繁要求重新登录 | 💬 84 · 👍 73 | 挂 `oncall` 标签的认证核心 Bug，自 2025-06 开放至今未修复，几乎每天要求 Web 重新认证，严重影响 CI/自动化场景，是仓库最热 Issue |
| 2 | [#91188](https://github.com/anthropics/claude-code/issues/91188) MEMORY.md 压缩提醒阈值不可配置 | 💬 58 | auto-memory 新机制落地后暴露的配置缺失：阈值硬编码，社区希望可配置或可单独静默 |
| 3 | [#12346](https://github.com/anthropics/claude-code/issues/12346) GitLab 集成（仓库连接、MR、移动端） | 💬 53 · 👍 139 | 高赞功能请求，GitLab 用户长期呼吁对齐 GitHub 集成体验 |
| 4 | [#20697](https://github.com/anthropics/claude-code/issues/20697) Skills 在 Desktop 与 CLI 间同步 | 💬 49 · 👍 157 | 本列表最高 👍，反映多端一致性的强烈需求 |
| 5 | [#62476](https://github.com/anthropics/claude-code/issues/62476) 默认 30 天静默删除会话转录 | 💬 25 · 👍 27 | 标记 `data-loss` 风险，已复现；默认清理策略对历史审计和上下文回溯构成隐患 |
| 6 | [#41456](https://github.com/anthropics/claude-code/issues/41456) Desktop App 状态栏 | 💬 17 · 👍 70 | CLI statusline 已成熟，Desktop 端缺失对重度用户是明显体验落差 |
| 7 | [#70647](https://github.com/anthropics/claude-code/issues/70647) 原生安装器生成的 macOS app 未签名封装 | 💬 15 | 安装器产出"damaged"提示，影响 macOS 首次安装转化，且涉及代码签名合规 |
| 8 | [#88747](https://github.com/anthropics/claude-code/issues/88747) Worktree 写入绝对 core.hooksPath | 💬 14 | worktree 会错误执行主 checkout 的 git hooks，破坏 CI/monorepo 工作流隔离 |
| 9 | [#97398](https://github.com/anthropics/claude-code/issues/97398) 9/25 重置后周限额消耗快 ~3.6 倍 | 💬 2 | 用户以本地转录数据量化计费异常，与 Sonnet 5.5 上线时间点接近，值得官方回应 |
| 10 | [#87772](https://github.com/anthropics/claude-code/issues/87772) Desktop 使用热力图永久丢数据 | 💬 4 | 仅 CLI 写 stats cache，Desktop-only 用户的日常数据不可逆丢失 |

---

## 4. 重要 PR 进展

| # | PR | 状态 | 内容 |
|---|-----|------|------|
| 1 | [#94847](https://github.com/anthropics/claude-code/pull/94847) | OPEN | diff 面板仅在确实有文件可列时才自动打开，修复首次编辑到仓库外/ignored 文件时空面板问题（@bcherny） |
| 2 | [#98018](https://github.com/anthropics/claude-code/pull/98018) | CLOSED | **回滚** #96363/#96364 两项 mods 改动（agents-md 截断读取、diff 强制颜色），体现官方对行为变更的谨慎态度（@poteat） |
| 3 | [#96363](https://github.com/anthropics/claude-code/pull/96363) | CLOSED（被回滚） | 曾尝试为 git diff 加 `--no-color`，规避 `color.ui=always` 导致 diff 正文为空的问题 |
| 4 | [#96364](https://github.com/anthropics/claude-code/pull/96364) | CLOSED（被回滚） | 曾调整嵌套 AGENTS.md 分页 Read 的"已投递"判定逻辑 |
| 5 | [#97952](https://github.com/anthropics/claude-code/pull/97952) | OPEN | 仓库内三条 Claude GitHub Actions 工作流的安全加固：egress 防火墙 runner 等（社区贡献 @qing-ant） |
| 6 | [#31204](https://github.com/anthropics/claude-code/pull/31204) | CLOSED | 疑似与产品无关的示例应用 PR，被关闭——提醒大家该仓库不接受此类贡献 |

> 注：过去 24 小时 PR 活跃度较低（共 6 条），核心事件是 #98018 的回滚决策。

---

## 5. 功能需求趋势

1. **多端一致性（Desktop / CLI / Web / 移动端）**：最高赞需求集中于此——Skills 同步（#20697，👍157）、Desktop 状态栏（#41456）、移动端发起会话（#96867）
2. **第三方平台集成**：GitLab 集成呼声最高（#12346，👍139），GitHub Web 集成亦有问题反馈（#98057）
3. **可配置性与可控性**：MEMORY.md 阈值（#91188）、主题自定义（#73837）、会话保留策略（#62476、#94479）——用户希望对默认行为有更细粒度控制
4. **云会话 / 远程控制**：`claude --cloud` 握手异常（#81776）、远程控制被自动更新打断（#95276）
5. **Agent / 记忆系统深化**：子代理 compaction 转录丢失（#97665）、agent .md 静默跳过（#98058），auto-memory 生态的边角问题集中涌现

---

## 6. 开发者关注点（痛点总结）

- **认证稳定性仍是头号痛点**：#1757（CLI 反复登录）与 #97344（Chrome 扩展重启即掉登录）叠加，直接威胁无人值守自动化与 CI 场景
- **Desktop 应用质量回归**：会话列表为空（#97894）、Windows 回归两项（#93239 Enter 打断输入、#97406 计划任务列表消失）、静默自动更新（#95276）——Desktop 快速迭代伴随稳定性代价
- **数据保留与可观测性**：转录 30 天静默删除（#62476）、热力图丢数据（#87772）、stats-cache 重建疑问（#94479），开发者担心历史记录不可控丢失
- **成本透明度**：周限额消耗速率突增 3.6 倍（#97398），恰逢新模型上线，计费口径需要官方澄清
- **hooks / worktree 隔离**：#88747、#89960 表明 git hooks 相关边界场景仍是 bug 高发区

---

*数据来源：github.com/anthropics/claude-code · 统计窗口：2026-09-28 至 2026-09-29*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-29** | 数据来源：github.com/openai/codex

---

## 1. 今日速览

Codex CLI 发布 **v0.158.0 稳定版**，带来 TUI 复制选择、右键粘贴及 MCP OAuth 客户端密钥支持等新特性。Windows 平台问题持续发酵——**控制台窗口闪烁（daemon 后台进程）成为最热 Issue（68 评论 / 112 👍）**，官方已合并修复 PR #49164。Linux 用户报告 0.158.0 引入鼠标中键粘贴回归，修复 PR #49112 已于今日合并。

---

## 2. 版本发布

### rust-v0.158.0（稳定版）
- 全屏 TUI 支持配置 **copy-on-select 与右键粘贴**，复制的会话内容保留 Markdown 格式（#47639、#47896、#48118）
- 支持连接**需要预注册 OAuth 客户端密钥的 MCP 服务器**，包括通过 `codex mcp add --oauth-client-*` 方式

### 预发布版本
- rust-v0.160.0-alpha.3 / alpha.2、rust-v0.159.0-alpha.13 持续迭代中

---

## 3. 社区热点 Issues

| # | Issue | 热度 | 关注理由 |
|---|-------|------|----------|
| 1 | [Windows: 安装 daemon 后请求期间终端窗口反复闪烁](https://github.com/openai/codex/issues/48074) | 💬68 👍112 | **本周最热 Issue**。影响所有 Windows 用户的核心工作流，官方已提交修复 PR #49164 |
| 2 | [Windows: 每个会话/轮次 shell 子进程控制台窗口可见闪烁](https://github.com/openai/codex/issues/48422) | 💬29 👍31 | 与 #48074 同源的焦点抢占问题，影响专注开发体验 |
| 3 | [CLI 0.155.0 回归：Windows 提权沙箱初始化失败](https://github.com/openai/codex/issues/46388) | 💬21 | 0.154.0 正常，升级即坏，用户被迫锁定旧版本 |
| 4 | [Windows 桌面版更新后卡在加载界面](https://github.com/openai/codex/issues/48463) | 💬20 | 26.924.2738.0 更新后 bootstrap 超时，多 issue 交叉印证（另见 #48466、#48484、#48492） |
| 5 | [daemon 为每个 hook/shell 命令打开可见控制台窗口](https://github.com/openai/codex/issues/44768) | 💬19 | 长期未解的 Windows 后台进程问题，随 daemon 推广影响扩大 |
| 6 | [无法复制文本（TUI/远程）](https://github.com/openai/codex/issues/48125)（已关闭） | 💬18 👍19 | 0.158.0 的复制功能改进已解决此痛点，用户反馈强烈 |
| 7 | [Android "Authorize this phone" 授权死循环](https://github.com/openai/codex/issues/36268) | 💬14 | Remote Control 配对长期痛点，跨 macOS/Android |
| 8 | [Windows 26.924 每次冷启动卡 Loading，重启 app-server 才恢复](https://github.com/openai/codex/issues/48466) | 💬12 | 桌面版启动问题的又一实锤，指向 app-server 生命周期 |
| 9 | [Desktop Browser Use 无法发现浏览器标签页](https://github.com/openai/codex/issues/47270) | 💬10 | 缺少 ChatGPT browser 路由，Browser Use 功能形同虚设 |
| 10 | [Linux 0.158.0 回归：鼠标选择不再支持中键粘贴](https://github.com/openai/codex/issues/49162) | 💬3 | 今日新增，copy-on-select 改动破坏 X11 惯例；修复 PR #49112 已合并 |

---

## 4. 重要 PR 进展

1. **[Suppress Windows console windows for background subprocesses](https://github.com/openai/codex/pull/49164)** — 直接针对最热 Issue #48074，为后台子进程（Job Object 启动及容器回退）保留控制台抑制
2. **[Add X11 primary selection and middle-click paste support](https://github.com/openai/codex/pull/49112)** — 修复 Linux 中键粘贴回归，将选中文本发布到 X11 PRIMARY，即使 copy-on-select 关闭
3. **[Omit blockquote markers when copying quoted selections in the TUI](https://github.com/openai/codex/pull/49153)** — 复制引用内容时去除多余 `>` 标记，完善 0.158.0 复制体验
4. **[Honor app-server provider defaults in the TUI](https://github.com/openai/codex/pull/49161)** — 防止客户端 provider 覆盖导致会话从 resume/fork 历史中消失
5. **[Preserve server reasoning summary and verbosity settings in the TUI](https://github.com/openai/codex/pull/49144)** — 停止将本地默认值作为覆盖转发，保护服务端配置
6. **[Treat explicit provider model catalogs as authoritative](https://github.com/openai/codex/pull/49135)** — 修复 provider 模型目录刷新失败后的陈旧模型匹配问题
7. **[Add recovery guidance to content-filter retries](https://github.com/openai/codex/pull/49119) + [#49130](https://github.com/openai/codex/pull/49130)** — 内容过滤触发时提供恢复指引，统一在共享 Responses 重试处理器中处理
8. **[Resume unsent TUI input after reconnecting](https://github.com/openai/codex/pull/49105)** — 重连后自动恢复未发送的输入，区分未发送与未确认消息
9. **[Expose original error details to turn lifecycle contributors](https://github.com/openai/codex/pull/49138)** — hook 可获取用量限制重置时间、限流快照等后端元数据
10. **[Add history pagination to the agent command center](https://github.com/openai/codex/pull/49106)** — 命令中心支持“Show more" 分页浏览历史会话

---

## 5. 功能需求趋势

- **Windows 平台稳定性**：今日 50 条 Issue 中近半带 `windows-os` 标签，daemon 控制台闪烁、桌面版启动卡死、沙箱回归是三大主题
- **TUI 交互体验**：复制/粘贴（copy-on-select、中键粘贴、Markdown 保留）是近期迭代焦点，需求与抱怨并存
- **Remote Control / 多端协同**：Android/iOS 配对授权死循环（#36268、#49132）、桌面线程在移动端无法加载（#40558）
- **桌面 App 启动可靠性**：26.924 更新引发跨平台（Windows/Linux）加载卡死潮，config.toml 兼容性是关键线索（#48492）
- **SSH/连接便利性**：社区请求支持密码认证 SSH 连接（#44446），降低远程主机接入门槛
- **语音能力**：CLI 语音输入（WSL2 PulseAudio #47370、VS Code 403 #47473）问题集中在 Windows 生态

---

## 6. 开发者关注点

1. **Windows daemon 是当前最大痛点**：后台进程可见控制台 + 焦点抢占已积累 100+ 👍，修复 PR 已合并，预计下个版本缓解，但用户信任修复还需时间
2. **版本升级风险高**：0.155.0（沙箱）、0.158.0（中键粘贴）、26.924（桌面启动）均出现回归，建议生产环境延迟一个版本升级
3. **copy-on-select 改动打破 Unix 惯例**：Linux 用户明确期望保持 X11 PRIMARY 选择语义，官方响应迅速（当日修复）
4. **Hooks 生态在扩展**：错误详情暴露（#49138）、turn 生命周期贡献者等 PR 表明 hook API 正在深化，值得自动化场景开发者关注
5. **跨端会话一致性**：TUI 与 app-server 的 provider/配置覆盖冲突系列修复（#49144、#49161）提示混合使用 CLI 与桌面版时注意版本配对

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-09-29

## 一、今日速览

今日发布 nightly 版本 **v0.63.0**，核心修复了认证模块的无限循环问题（文件竞争、headless keyring、supervisor 状态丢失）。社区贡献活跃，多组针对 `@`-命令解析导致的 100% CPU 挂起问题的修复 PR 集中提交。Agent 子系统仍是讨论焦点，subagent 状态误报、挂起及工具调用问题持续被关注。

---

## 二、版本发布

### v0.63.0-nightly.20260929.gfe6350238
- **fix(auth)**: 修复由文件竞争、headless keyring 及 supervisor 状态丢失引起的无限认证循环（[#29448](https://github.com/google-gemini/gemini-cli/pull/29448)）
- [完整 Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.63.0-n)

---

## 三、社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** · P1 · Subagent 触发 MAX_TURNS 后误报为 GOAL 成功
   子代理中断却被标记为成功，掩盖了真实失败，直接影响任务可靠性判断。13 条评论，维护者已要求复测。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** · P1 · Generalist agent 无限挂起
   简单如创建文件夹的操作也会挂起长达一小时，用户只能通过禁止 subagent 规避。8 个 👍，属高频用户痛点。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** · P2 · 利用模型 bash 原生能力：零依赖 OS 沙箱 + 执行后意图路由
   方向性大 Issue：Gemini 3 模型天然擅长链式 POSIX 工具，需要沙箱与路由机制安全释放该能力。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** · P2 · 评估 AST 感知的文件读取/搜索/映射
   EPIC 级调研：AST 工具可精确读取方法边界，减少错位读取与 token 浪费。关联子 Issue #22746、#22747。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** · P2 · Gemini 不会主动使用 skills 和 subagents
   即使任务高度相关，模型也不会自主调用自定义 skills，需要显式指令。

6. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** · P2 · 工具数量超过 128 时触发 400 错误
   工具过多时 API 直接报错，需要智能的工具范围裁剪机制。

7. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)** · P1 · get-shit-done 输出 hook 导致崩溃
   输出总结时稳定崩溃，P1 级稳定性问题。

8. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** · P2 · Browser Agent 忽略 settings.json 配置覆盖
   `AgentRegistry` 正确读取合并配置但 agent 不生效，maxTurns 等覆盖完全失效。

9. **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)** · P2 · 模型频繁在随机位置创建临时脚本
   限制 shell 执行后模型到处写编辑脚本，清理成本高，影响工作区整洁度。

10. **[#22741](https://github.com/google-gemini/gemini-cli/issues/22741)** · P3 · 支持本地 subagent 后台化（Ctrl+B）
    探索/构建/lint 等非阻塞任务应可后台运行，提升交互体验。

---

## 四、重要 PR 进展

1. **[#29547](https://github.com/google-gemini/gemini-cli/pull/29547)** · P1 · 修复 `@`-命令正则吞掉引号字符串导致 CPU 100% 挂起
   管道输入含 `"@scope/pkg"` 时触发不可中断挂起，今日新提交的社区修复。

2. **[#29436](https://github.com/google-gemini/gemini-cli/pull/29436)** · P1 · 同一 CPU 挂起问题的另一修复方案
   与 #29547 互补，修复 `AT_COMMAND_PATH_REGEX_SOURCE` 将多行代码误吞为单个 `@path` token。

3. **[#29546](https://github.com/google-gemini/gemini-cli/pull/29546)** · 新功能 · 非交互模式下支持 `/skill-name` 激活 skill
   注册 `SkillCommandLoader` 到非交互命令路径，补齐 headless 场景的 skill 能力。

4. **[#29440](https://github.com/google-gemini/gemini-cli/pull/29440)** · 修复 web-fetch 引用位置：UTF-8 字节偏移
   非 ASCII 响应中引用标记错位，对齐 web-search 已有逻辑，含多字节/emoji 回归测试。

5. **[#29435](https://github.com/google-gemini/gemini-cli/pull/29435)** · P2 · 修复会话退出时进程挂起
   stdin 清理 + MCP 追踪清理，解决 Node 事件循环无法关闭的问题。

6. **[#29542](https://github.com/google-gemini/gemini-cli/pull/29542)** · P1 · `maxChars <= 0` 时禁用输出截断
   防御性修复，避免索引切片边界导致输出字符串意外膨胀。

7. **[#29328](https://github.com/google-gemini/gemini-cli/pull/29328)** · P1 · 已关闭 · a2a-server 遵循 LOG_LEVEL 并防止凭据泄漏到日志
   安全修复：日志级别配置生效 + 凭据脱敏。

8. **[#29332](https://github.com/google-gemini/gemini-cli/pull/29332)** · 已关闭 · 限制单次调用的沙箱扩容递归
   工具持续返回 `sandbox_expansion_required` 会导致堆内存耗尽崩溃，增加轮次上限。

9. **[#29336](https://github.com/google-gemini/gemini-cli/pull/29336)** · 已关闭 · 加固非系统策略目录的写权限校验
   企业安全相关：策略目录所有权/权限验证扩展至全层级。

10. **[#29543](https://github.com/google-gemini/gemini-cli/pull/29543)** · 已关闭 · dependabot 升级 ip-address 10.2.0 → 10.7.2

---

## 五、功能需求趋势

- **Agent/子代理可靠性**：状态误报（#22323）、挂起（#21409）、自主调用不足（#21968）——当前最大热点方向
- **AST 感知工具链**：#22745/#22746/#22747 系列，探索 tilth、glyph、ast-grep 提升代码读取精度与 token 效率
- **Token 效率**：「Tactful Extraction」分级代码发现（#19561）、持久化文件任务追踪替代 WriteToDo（#18836、#21000）
- **安全与沙箱**：零依赖 OS 沙箱（#19873）、破坏性操作防护（#22672）
- **浏览器 Agent 增强**：会话接管与锁恢复（#22232）、Wayland 支持（#21983）
- **可观测性**：subagent 轨迹通过 `/chat share` 可见（#22598）、bugreport 包含 subagent 上下文（#21763）

---

## 六、开发者关注点

1. **Subagent 可靠性是最大痛点**：挂起、误报成功、不主动调用三大问题叠加，部分用户被迫禁用 subagent
2. **Headless/管道模式的稳定性**：`@` 命令 CPU 挂起、stdin 丢弃、进程无法退出——自动化流水线场景问题集中爆发，今日多组修复已响应
3. **配置覆盖不生效**：settings.json 的 maxTurns 等覆盖被 Browser Agent 忽略（#22267）
4. **Token 消耗与上下文膨胀**：大文件读取"灌水"（+15k tokens/turn）驱动了 AST 工具与外科手术式读取的强烈需求
5. **工作区卫生**：临时脚本乱放（#23571）、破坏性 git 操作（#22672）影响生产可用性
6. **安全细节**：凭据入日志、策略目录权限——企业场景的合规诉求持续推动加固

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-09-29

## 一、今日速览

过去 24 小时 GitHub Copilot CLI 连发多个补丁版本（最新至 v1.0.90-1），重点修复 MCP OAuth 令牌复用与会话恢复问题。社区侧，认证相关 bug 成为最大痛点：CLI 长时间运行后认证令牌失效且 `/login` 无法恢复的问题持续发酵。版本迭代与 MCP 生态兼容性是当前主线。

---

## 二、版本发布

### v1.0.90-1（最新补丁）
**修复：**
- MCP OAuth 登录（如 Datadog）现在复用仍然有效的缓存令牌
- 会话恢复后，已撤销的运行中提示保持撤回状态

### v1.0.90-0
常规修复与改动。

### v1.0.89
- 左键点击 `ask_user` 和 elicitation 表单输入框时，光标聚焦至点击位置
- 新增对 Claude Code 规则文件（`.claude/rules`）作为自定义指令的支持 —— 生态兼容性增强
- 侧边栏会话在完成一个尚未打开的回合后显示蓝点提示

### v1.0.89-6
**改进：**
- PR 创建遵循仓库 Pull Request 模板，保留必需段落与 checklist 结构
- 可通过 `TGREP_FILE_COUNT_THRESHOLD` 配置自动索引搜索激活阈值

**修复：**
- Shell 输出不再显示末尾的命令完成元数据

---

## 三、社区热点 Issues（Top 10）

1. **#1274** [OPEN] CLI 频繁出现 400 invalid request body 错误
   近 20 次代码审查请求中约 95% 失败，疑似服务端校验或请求构造问题。**29 条评论、12 👍**，为当前最热 issue，疑似影响面广。[链接](https://github.com/github/copilot-cli/issues/1274)

2. **#4929** [OPEN] 进程本地认证令牌停止刷新，所有 prompt 失败
   长时间运行的 CLI 进程永久失去认证，`/login` 无法恢复，仅重启进程可解。**13 条评论**，与 #4971 共同指向认证刷新机制缺陷。[链接](https://github.com/github/copilot-cli/issues/4929)

3. **#3392** [CLOSED] NixOS 上 v1.0.49+ Bash 工具失效
   `Failed to start bash process` 错误，**13 👍**，反映 Nix 生态兼容性是长期痛点。[链接](https://github.com/github/copilot-cli/issues/3392)

4. **#1838** [CLOSED] Nix/direnv 环境下因子进程 I/O 死锁导致 CLI 挂起
   **12 👍**，与 #3392 同属 Nix 兼容性问题族。[链接](https://github.com/github/copilot-cli/issues/1838)

5. **#2958** [CLOSED] 支持按模式配置默认模型（plan mode vs autopilot）
   **16 👍**，功能需求中呼声最高，反映用户对精细化模型控制的强烈需求。[链接](https://github.com/github/copilot-cli/issues/2958)

6. **#4968** [OPEN] OAuth redirect URI 端口不匹配导致多数 MCP 服务器无法登录
   CLI 发布的 CIMD 声明固定端口，运行时却绑定临时端口，属协议一致性 bug。[链接](https://github.com/github/copilot-cli/issues/4968)

7. **#4606** [OPEN] Google Workspace MCP OAuth 因 issuer 尾斜杠不匹配失败
   OAuth 发现流程对 Google 官方端点失效，阻塞 Workspace 集成。[链接](https://github.com/github/copilot-cli/issues/4606)

8. **#4972** [OPEN] Windows 下通过 wrapper 启动时 MCP worker 在退出后残留
   会话退出终止了 wrapper 但留下子 worker 进程，Windows 进程管理问题。[链接](https://github.com/github/copilot-cli/issues/4972)

9. **#1250** [CLOSED] Windows 上因 `getCACertificates('system')` 错误静默退出
   无任何报错输出，诊断极其困难，Windows 平台稳定性代表问题。[链接](https://github.com/github/copilot-cli/issues/1250)

10. **#3602** [CLOSED] SDK 无条件修改宿主 `process.env` 注入 Git 配置
    对所有被 spawn 的进程全局注入 `safe.bareRepository=explicit`，**6 👍**，涉及 SDK 作为库使用时的副作用边界问题。[链接](https://github.com/github/copilot-cli/issues/3602)

---

## 四、重要 PR 进展

过去 24 小时无 PR 更新，本节省略。

---

## 五、功能需求趋势

从 Issue 分布可提炼以下方向：

- **MCP 生态兼容性**（最热）：OAuth 流程缺陷（#4968、#4606）、secret 占位符传递失败（#4985）、慢初始化服务器超时（#4983）、Windows 进程残留（#4972）——MCP 集成是当前 bug 密集区，也是版本修复重点（v1.0.90-1 修复 OAuth 令牌复用）
- **模型配置精细化**：按模式设置默认模型（#2958，16 👍）、自定义 agent frontmatter 中 `model:` 支持数组（#3070）
- **生态/工具互操作**：支持 Claude Code 规则文件（已发布）、`$EDITOR` 长文本应答（#4050）、多行粘贴（#2997）
- **平台稳定性**：Windows（#1250、#4972、#2997）与 NixOS（#1838、#3392）为两大问题平台
- **UI/可访问性**：暗色终端下选中文本对比度过低（#2216）、状态栏刷新（#3014）、markdown 渲染（#1936）

---

## 六、开发者关注点

1. **认证可靠性是头号痛点**：#1274（400 错误，29 评论）与 #4929/#4971（令牌刷新失效）共同指向认证/请求链路的稳定性缺陷，长时间使用后不可恢复的问题严重影响重度用户。
2. **MCP 集成质量问题**：OAuth 协议实现不够严谨（端口不匹配、issuer 比对、令牌缓存），多平台/多服务器场景下不可用；团队已在最新版本中响应，但存量问题仍多。
3. **非主流环境支持不足**：Nix/NixOS 与 Windows（尤其 wrapper、证书、终端模式）持续报障。
4. **SDK 副作用与边界**：作为库嵌入时的全局环境变量修改（#3602）引发信任担忧。
5. **可观测性与诊断**：静默失败（#1250）凸显错误信息暴露的必要性。

> 建议：团队优先跟进认证链路与 MCP OAuth 一批 issue；用户侧若遇认证失效，临时方案是重启 CLI 并恢复会话。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-29

## 📌 今日速览

今日无新版本发布，但 PR 活动非常活跃，AI 路由层迎来一波集中修复（Bedrock/Mistral/Anthropic 缓存策略）与 TUI 国际化基础设施落地。社区持续聚焦 V2 版本质量：会话标题污染、SSE 僵尸流、doom_loop 检测失效等多个核心缺陷被曝光并迅速有对应 PR 提交。

---

## 🐛 社区热点 Issues（Top 10）

1. **[#39653](https://github.com/anomalyco/opencode/issues/39653)** GPT-5.6 Sol 持续 server overloaded（17 评论 / 11 👍）— 今日讨论热度最高，Sol 模型反复过载而 Pi/Codex 正常，涉及上游服务稳定性。
2. **[#42225](https://github.com/anomalyco/opencode/issues/42225)** TUI 终端缩小时不重排布局（9 评论）— 只在放大时重排、初次 attach 也不生效，宽度残留导致空白或溢出，属 V2 TUI 渲染基础缺陷。
3. **[#49389](https://github.com/anomalyco/opencode/issues/49389)** 插件无法触达的五项会话能力（7 评论 / 4 👍）— 系统性梳理插件 API 写侧缺口，对插件生态扩展性意义重大。
4. **[#51759](https://github.com/anomalyco/opencode/issues/51759)** 按项目分组的 Project Tabs（5 评论）— 当前多项目会话混在同一扁平标签条中，多项目用户核心痛点。
5. **[#44007](https://github.com/anomalyco/opencode/issues/44007)** `--auto` 模式后台标签卡在权限请求（4 评论）— 自动审批只作用于当前选中会话，后台标签静默阻塞，自动化工作流受影响；已有对应 PR #44009。
6. **[#49992](https://github.com/anomalyco/opencode/issues/49992)** VSCode 插件损坏（3 评论 / 4 👍）— 插件使用已废弃的 `--port` 标志导致启动失败，IDE 集成回归问题。
7. **[#51857](https://github.com/anomalyco/opencode/issues/51857)** Web 端 v2 重构丢失 stalled-stream watchdog（3 评论）— 旧版修复在重构中被丢失，SSE 静默死亡后需硬刷新，技术考古式报告质量很高。
8. **[#51997](https://github.com/anomalyco/opencode/issues/51997)** V2 会话标题混入模型评论（2 评论）— `gpt-6-luna` 返回多条消息时规划文本被拼进标题，同日已有修复 PR #52006。
9. **[#51965](https://github.com/anomalyco/opencode/issues/51965)** doom_loop 检测跨步骤失效（2 评论）— 只读当前 assistant 消息导致重复调用分散在多个步骤时永不触发，防护机制存在盲区。
10. **[#52004](https://github.com/anomalyco/opencode/issues/52004)** 标题生成选中计费模型而非免费模型 — `Model.small` 按硬编码 family 匹配、无成本感知，用户隐性付费，值得产品层重视。

---

## 🔧 重要 PR 进展（Top 10）

1. **[#52005](https://github.com/anomalyco/opencode/pull/52005)**（已合并）Desktop Electron 44.4.3 → 44.4.5，拾取 Skia 编译相关补丁。
2. **[#51981](https://github.com/anomalyco/opencode/pull/51981)** 为 Alibaba、Cloudflare AI Gateway、Meta、MiniMax、Moonshot、ZAI 六条消息路由启用显式缓存策略，降低 token 成本。
3. **[#52006](https://github.com/anomalyco/opencode/pull/52006)** 修复 #51997：标题收集器区分 commentary 与最终回答，排除规划文本。
4. **[#51978](https://github.com/anomalyco/opencode/pull/51978)** 恢复 provider 错误原文 fallback，无 `error.message` 时展示响应体而非裸 `HTTP N`，改善排障体验。
5. **[#51959](https://github.com/anomalyco/opencode/pull/51959)**（已合并）Bedrock Claude 5.1+ thinking 签名默认启用块绑定。
6. **[#51999](https://github.com/anomalyco/opencode/pull/51999)**（已合并）Bedrock redacted reasoning 在块结束时统一 finalize，避免每 delta 输出膨胀的 replay 元数据。
7. **[#52000](https://github.com/anomalyco/opencode/pull/52000)** TUI per-locale i18n 基础设施落地，基于 #48731 的原始提交适配 v2 分支，保留贡献者署名。
8. **[#51996](https://github.com/anomalyco/opencode/pull/51996)** 快照捕获性能优化与加固，一次修复 5+ 个相关 issue。
9. **[#51989](https://github.com/anomalyco/opencode/pull/51989)** 恢复 `$..$` 与同行 `$$..$$` 数学渲染，关闭 5 个重复 issue，兼容旧聊天记录导出。
10. **[#51918](https://github.com/anomalyco/opencode/pull/51918)** `opencode run --variant` 拼写错误时返回 400 并列出有效值，而非静默记录未生效的配置。

其他关注：**[#44009](https://github.com/anomalyco/opencode/pull/44009)**（后台标签自动审批）、**[#52008](https://github.com/anomalyco/opencode/pull/52008)**（Mistral thinking 元数据延迟到块尾）、**[#51986](https://github.com/anomalyco/opencode/pull/51986)**（图片裁剪跨轮次稳定性）。

---

## 📈 功能需求趋势

- **插件/扩展能力开放**：会话写侧 API 缺口（#49389）是生态建设的核心诉求。
- **多项目/多会话工作流**：Project Tabs（#51759）、后台标签自动化（#44007）、桌面端标签过多拖拽困难（#41646）。
- **模型路由智能化**：任务感知路由 + reasoning 变体选择（#51972）、成本感知的小模型选择（#52004）。
- **国际化**：TUI i18n 基础设施 + 中文 locale 术语修正（#51982/#52000），中文社区贡献活跃。
- **可观测性与错误可读性**：导出包含 system prompt（#39033）、provider 错误原文展示（#51978）。

---

## ⚠️ 开发者关注点

1. **V2 重构回归问题集中爆发**：web watchdog 丢失（#51857）、标题污染（#51997）、VSCode 插件 `--port` 失效（#49992）——重构后的功能守恒需系统性保障。
2. **长时/自动化任务体验差**：长命令阻塞对话、网络错误无快速失败（#39771/#39769）、后台权限卡死（#44007）。
3. **隐蔽成本问题**：标题生成误用计费模型（#52004）值得所有用户自查 `small_model` 配置。
4. **防护机制盲区**：doom_loop 跨步骤失效（#51965）对重度 agent 用户风险较高。
5. **网络受限环境**（如中国大陆）：GitHub HTTPS 不通时缺少超时与 SSH fallback，仍待改进（#39771）。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-09-29）

## 1. 今日速览

Managed Agent 双路径架构持续主导社区讨论，Stage H（私有 Hosted MCP runtime）、O2（远程 Shell 结果持久化）等多个阶段 PR 活跃推进。安全与正确性方面，辅助模型选择器泄漏凭证的 bug（#12856）和 `invalid_tool_params` 误诊问题（#12970）值得重点关注。结构化 Auto Memory 进入主分支上线准备阶段。

## 2. 版本发布

过去 24 小时无正式 Release。注：9-27 的 nightly 版本 `v0.24.6-nightly.20260927` 发布失败（[Issue #12880](https://github.com/QwenLM/qwen-code/issues/12880)，`integration_none` job 失败），已于 9-28 关闭。

## 3. 社区热点 Issues

1. **[#12380 Managed Agent 双路径架构提案](https://github.com/QwenLM/qwen-code/issues/12380)** — 37 条评论，本周最热。定义分阶段 Managed Agent 架构：保留现有 TS agent loop、模型推理与工具环境供给解耦、Session 持久所有权与可恢复工具执行。是整个多 Agent/平台分发路线图的顶层设计。

2. **[#12416 Remote-SSH 下所有 POST /session 失败（P1）](https://github.com/QwenLM/qwen-code/issues/12416)** — Companion 0.24.2 中每个会话创建均报 `EPIPE` / `BridgeChannelClosedError`，而内置 CLI 单独可用。P1 级阻断性 bug，影响 Remote-SSH 用户。

3. **[#12737 ACP-Bridge Stage B 主机集成调度决策](https://github.com/QwenLM/qwen-code/issues/12737)** — wenshao 确定调度方向：本地 `qwen serve` Managed 执行延后，优先交付 Hosted Managed 切片，保留已合并的配对主机基础与 M1 保护措施。

4. **[#12856 辅助模型选择器持久化凭证（P2，安全）](https://github.com/QwenLM/qwen-code/issues/12856)** — 5 个设置项以 `authType:<id>\0<baseUrl>` 形式存储模型选择器；当 baseUrl 内嵌 userinfo 时，该后缀作为凭证被所有公共表面原样输出，存在泄漏风险。

5. **[#12970 invalid_tool_params 被误诊为 max_tokens 截断（P2）](https://github.com/QwenLM/qwen-code/issues/12970)** — 今日新报。每次工具参数校验失败都附带“响应被截断”的错误提示，驱动模型进行无意义的重复重试并烧钱；且多工具调用轮次中失败的调用不再执行。

6. **[#12028 非对话上下文 Token 治理追踪](https://github.com/QwenLM/qwen-code/issues/12028)** — 系统提示词、内置工具 schema、QWEN.md、技能列表在每次请求都全量发送；在大上下文模型上这块开销极易超过对话本身。Token 治理总伞议题。

7. **[#12947 结构化 Auto Memory 主分支上线追踪](https://github.com/QwenLM/qwen-code/issues/12947)** — 记录 #10151 在 broader rollout 前剩余的正确性、有效性验证工作，是 token 治理下的记忆专项收尾。

8. **[#11019 AUTO 模式用户审批无法触达分类器（P2，安全）](https://github.com/QwenLM/qwen-code/issues/11019)** — API 驱动场景下用户三次确认均被忽略，工具调用仍被阻断；且会话重建后审批模式回退为 AUTO。生产数据变更场景下体验严重受损。

9. **[#12928 内部模型请求硬编码 temperature（P2）](https://github.com/QwenLM/qwen-code/issues/12928)** — 辅助分类请求被固定附加 `temperature: 0.2`，被 GPT-6 等新模型端点以 HTTP 400 拒绝。修复 PR #12958 已提交。

10. **[#12938 工具调用完成的 CLI 轮次跳过自动记忆提取（P1，已关闭）](https://github.com/QwenLM/qwen-code/issues/12938)** — 完成钩子在有待处理工具调用时不调度记忆提取与 Dream 处理，导致记忆系统在真实交互中基本失效。已修复关闭，配套迁移调度修复见 [#12929](https://github.com/QwenLM/qwen-code/issues/12929)。

## 4. 重要 PR 进展

1. **[#12358 独立 Managed Agent 技术栈](https://github.com/QwenLM/qwen-code/pull/12358)** — 端到端预览：常驻 Harness、Java 控制平面、会话级 Tool Runtime、持久化 Managed Session 记录、Spring 服务。#12380 的核心实现载体。

2. **[#12946 私有 Hosted MCP runtime（H1）](https://github.com/QwenLM/qwen-code/pull/12946)** — `hosted-workspace-mcp/1` profile，Runtime 拥有 stdio/Streamable HTTP/SSE 连接与凭证，模型获得钉定版本的工具 schema。

3. **[#12894 持久化远程 Shell 结果投递（O2）](https://github.com/QwenLM/qwen-code/pull/12894)** — 有界 stdout/stderr 发布、不可变目录与对象存储、固定版本范围读取、Hosted 恢复路径。

4. **[#12958 移除内部请求硬编码 temperature](https://github.com/QwenLM/qwen-code/pull/12958)** — 修复 #12928，适配 GPT-6 等对 reasoning 模型弃用 temperature 参数的新 API 规范。

5. **[#12868 Broker 通用 Provider 控件](https://github.com/QwenLM/qwen-code/pull/12868)** — Broker 对接版本化 worker 契约（manifest、turn 准备、审批、预检、文件历史），Provider 调用保留持久化七字段引用。

6. **[#11206 本地工作区 Agent 协作](https://github.com/QwenLM/qwen-code/pull/11206)** — opt-in 的本地多 Agent 协作工作流：daemon 启动并恢复 agent 轮次、任务级会话绑定、可信工作区 API、进度流式传输。

7. **[#12927 Full Access 模式可审批工作区外的 Shell/monitor 目录](https://github.com/QwenLM/qwen-code/pull/12927)** — 从“直接拒绝”改为“审批 + Full Access 放行”，改善默认模式的用户体验。

8. **[#12972 Runtime Broker 精确读取整数](https://github.com/QwenLM/qwen-code/pull/12972)** — 所有守护 worker 握手或存储记录的协议整数要求解析器返回精确类型（`Integer`/`Long`），修复 #12899 中数值不可读问题。

9. **[#12891 CLI 集成 Mem0 记忆](https://github.com/QwenLM/qwen-code/pull/12891)** — opt-in 配置 `memory.mem0` 即可自动注册 MCP server，接入外部记忆系统。

10. **[#11959 基于 models.dev 目录解析模型限制](https://github.com/QwenLM/qwen-code/pull/11959)** — 内置裁剪快照 + 24h 缓存后台刷新，自动推断上下文窗口、输出上限与输入模态，显式配置仍优先。

## 5. 功能需求趋势

- **Managed Agent 架构与多 Agent 协作**：绝对主线。#12380 顶层设计牵引出 Stage B/D/H 系列子议题与 PR，覆盖持久化生命周期、租户过滤、任务契约、AgentDefinition 等。
- **记忆系统（Auto Memory / Mem0）**：结构化召回、无损迁移、提取频率门控（#11471）、召回预算验证（#8998）形成完整的记忆工程子路线。
- **Token/上下文治理**：非对话上下文开销（#12028）、Skill 列表误注入（#12835）、`<system-reminder>` 截断用户消息（#12961）都指向“每一分 token 都要花在刀刃上”。
- **后台自动化与通道扩展**：Email（IMAP/SMTP）通道（#8281）、后台任务调度等长期需求持续讨论。
- **模型兼容性与现代 API 适配**：temperature 移除、models.dev 目录、多 Provider 端点钉定（#12773）。
- **Web Shell / UI 打磨**：Edit 卡片 diff 重建提示（#12919）、引用 chip 错位（#12980）、轨迹记录检查器（#12971）。

## 6. 开发者关注点

- **安全与凭证处理**是反复出现的痛点：baseUrl 内嵌凭证被原样输出（#12856）、审批旁路失效（#11019）、禁用统计后仍上报遥测（#12844）。
- **外部 Provider 兼容性**：新版 API（GPT-6 等）对参数的严格校验使硬编码 temperature、模糊数值类型等问题集中暴露。
- **错误诊断质量**：`invalid_tool_params` 误诊导致模型死循环重试（#12970），直接烧钱，开发者反馈强烈。
- **Remote/托管环境的稳定性**：Remote-SSH companion 的 EPIPE 问题（#12416）表明 daemon/bridge 链路仍是脆弱环节。
- **后台任务的调度正确性**：工具调用完成的轮次跳过记忆提取/迁移（#12938、#12929）这类“钩子时机”bug 在真实交互 CLI 中高发。

---
*数据来源：QwenLM/qwen-code GitHub（过去 24 小时）*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-09-29

## 1. 今日速览

今日无新版本发布，但社区活跃度极高：24 小时内更新了 28 条 Issues 和 50 条 PR。今日焦点集中在**网络流重试机制修复**（#6699/#6711）、**opencode-zen 模型路由失败问题**（#6705/#6710），以及创始人 @Hmbown 密集提交的一批 TUI 体验修复（跳转按钮渲染、ChatGPT 多账户切换等）。此外，Windows CI 在 main 分支上持续红灯（#6698/#6702）值得关注。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues

**1. [#6699](https://github.com/Hmbown/Codewhale/issues/6699) — SSE 流打开失败时无重试直接终止回合**
网络在建立响应流阶段失败时，回合立即终止且无任何重试，而同一路径的其他失败模式均有重试预算。这是当前最关键的可靠性缺口，已由 #6711 修复中。

**2. [#6705](https://github.com/Hmbown/Codewhale/issues/6705) — opencode-zen 111 个目录模型中 58 个被判为"unproven endpoint"拒绝分发**
内置的模型-wire 映射列表过时，新模型 ID 无法通过校验直接失败关闭。影响面大，涉及目录维护策略问题。

**3. [#6700](https://github.com/Hmbown/Codewhale/issues/6700) — 流重试预算和传输超时硬编码为 const，无配置面**
代理/弱网环境运维者只能改二进制，可配置化诉求强烈。与 #6699 同属网络韧性主题。

**4. [#6698](https://github.com/Hmbown/Codewhale/issues/6698) — 共享进程全工作区测试门禁在干净 main 上失败**
nextest 通过但 `cargo test --workspace` 失败，暴露共享进程下的测试竞态，是当前 CI 稳定性的核心阻塞项（#6702 健康报告也确认 main 为红）。

**5. [#5316](https://github.com/Hmbown/Codewhale/issues/5316) — EPIC-005: CodeWhale TUI Crate 拆分（伞形 Issue）**
29 条评论的长线架构重构，执行权威已迁移至 Linear 的 Core 执行计划，是理解项目结构演进的主线索。

**6. [#6704](https://github.com/Hmbown/Codewhale/issues/6704) — TUI 前台运行约半小时后文本背景变黑**
由用户 @luestr 报告的渲染退化问题，疑似长时间运行下的状态泄漏，已与 #6697 一并在 #6714 中处理。

**7. [#6695](https://github.com/Hmbown/Codewhale/issues/6695) — 新增 Tsubasa Provider 描述符**
社区请求通过现有兼容传输添加命名预设，已获创始人批准并快速落地为 PR #6719，展示了数据驱动 provider 扩展的标准路径。

**8. [#6689](https://github.com/Hmbown/Codewhale/issues/6689) — hooks: 向 tool_call_after 导出准入后执行回执**
`tool_call_after` 钩子无法获知准入重写后的实际命令，限制了策略审计能力。#6713 正在实现。

**9. [#6109](https://github.com/Hmbown/Codewhale/issues/6109) — 跨端确定性音视频宠物（Codewhale 鲸鱼）**
趣味但工程要求严格：需在浏览器/TUI/原生宿主间共享单一确定性世界、分数与回放模型。

**10. [#6706](https://github.com/Hmbown/Codewhale/issues/6706) — FEAT-029: 完整 debug 命令组可移植化**
14 个 debug 斜杠命令与 App/TUI 耦合，需先建立真正的可移植源闭包才能物理抽取，属于 #5316 拆解工作的延续。

---

## 4. 重要 PR 进展

**1. [#6711](https://github.com/Hmbown/Codewhale/pull/6711) — 重试流打开失败；流预算可配置化**
修复 #6699 并回应 #6700，为连接失败/SSE 无响应头等场景补齐有界重试，同时开放配置面。今日最重要的可靠性修复。

**2. [#6710](https://github.com/Hmbown/Codewhale/pull/6710) — opencode-zen 按目录声明 wire 路由模型**
对照 Zen 实时 `/models`（83 个 ID）校准，让新目录模型不再失败关闭。解决 #6705。

**3. [#6714](https://github.com/Hmbown/Codewhale/pull/6714)（已关闭）— 跳转按钮无 hover 下划线；修复文本背景黑洞**
修复共享 hover 层对 3x3 圆角盒子的错误下划线渲染及详情目标的背景异常，关闭 #6697。

**4. [#6715](https://github.com/Hmbown/Codewhale/pull/6715) — ChatGPT / xAI 账户选择、显示与切换**
源于创始人真实痛点：双账户无法选择、用量超限时不知是哪个账户。补齐账户生命周期管理。

**5. [#6717](https://github.com/Hmbown/Codewhale/pull/6717) — fleet 拒绝的保存配置 pin 回退到父路由**
子 agent 配置的模型（xAI 余额耗尽）导致整个 fan-out 失败，现回退父路由并显式标注 route source。

**6. [#6712](https://github.com/Hmbown/Codewhale/pull/6712) — 消除 #6698 门禁背后的共享进程测试竞态**
逐一修复 9 个仅在单进程模式下失败的 TUI 测试，针对性强。

**7. [#6713](https://github.com/Hmbown/Codewhale/pull/6713) — hooks: DEEPSEEK_TOOL_EXECUTION_RECEIPT 执行回执**
向 `tool_call_after` 导出重写后命令、退出码、截断标记的输出预览，落地 #6689。

**8. [#6646](https://github.com/Hmbown/Codewhale/pull/6646) — 性能：停止全量遍历 item store 来列出/打开线程**
140 线程、61k 文件的 store 上打开线程需 1.3s 热/6.7s 冷，本 PR 消除全目录读取，收益显著。

**9. [#6716](https://github.com/Hmbown/Codewhale/pull/6716) — 空闲自有 PTY 保留可重连与可调整大小**
修复静默 60 秒即被判 stale、客户端无法重新发现 shell 的问题。

**10. [#6642](https://github.com/Hmbown/Codewhale/pull/6642) — compaction 在腾挪空间时存活 provider 413**
token 预算看不到 HTTP 请求体字节上限，图片的 base64 体积可触发 413 导致摘要请求失败，本 PR 处理该字节维度限制。

---

## 5. 功能需求趋势

- **网络韧性与可配置性**（#6699、#6700、#6711）：流重试、超时、预算的配置化是当前最强诉求。
- **Provider 生态扩展**（#6695、#6705、#6408、#6616）：数据驱动 descriptor 已成为新增兼容网关的标准模式（Tsubasa、Yolo-Auto、AICraft）。
- **架构可移植化**（#5316、#6706、#6707）：TUI crate 拆分与命令组物理抽取持续推进，是长期主线。
- **多 Agent / fleet 编排**（#6717、#6718、#6565）：fan-out 路由回退、工作流状态展示等运行时体验打磨。
- **TUI 渲染质量**（#6697、#6704、#6545）：hover 层、背景渲染、光标可见性等细节问题集中出现。
- **可观测性与审计**（#6689、#6713）：hooks 侧的执行回执需求上升。

---

## 6. 开发者关注点

1. **CI 门禁不稳定**：main 分支 Windows 测试与共享进程工作区门禁反复变红（#6698、#6702、#6665），测试基础设施可靠性是当前首要痛点。
2. **弱网/代理环境体验差**：重试预算与超时硬编码，运维者只能 patch 二进制（#6700）。
3. **exec 大 prompt 上限**：argv 传入 prompt 受内核 128 KiB 单参数限制（#6688，已关闭但反映 CLI 输入通道局限）。
4. **会话真相双权威**：`session_manager` 与 `StateStore` 的读写分裂（#6144）尚未彻底收敛，是状态管理的结构性隐患。
5. **长时运行状态泄漏**：TUI 前台运行半小时后的渲染退化（#6704）提示需要系统性的长时间稳定性测试。

---

*数据来源：Hmbown/DeepSeek-TUI GitHub 仓库 · 生成时间：2026-09-29*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-09-29

## 📰 今日速览

今日无新版本发布，但社区讨论热度高企：`ESC` 中断思考导致 "Working..." 卡死（#10031，17 条评论）成为最热话题。功能层面迎来多个重磅 PR 落地：**Codemode + MCP 支持**（#10040）、**托管 llama.cpp server 模式**（#10122）和 **Vertex AI 上的 Claude 支持**（#9993）。修复方向集中在剪裁（compaction）稳定性、终端协议兼容性和多 Provider 适配。

---

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues（Top 10）

1. **#10031** [OPEN] 用 `<esc>` 停止思考后 Pi 间歇性卡在 "Working..."（17 评论）
   影响一个月以上、跨多台机器，只能 Ctrl+C 退出再用 `pi -c` 恢复。用户体验受损最严重的 open bug，值得优先关注。
   🔗 Issue #10031

2. **#10033** [CLOSED] 剪裁提示词包含全部 thinking 文本，导致长会话自动压缩永远失败（7 评论）
   DeepSeek V4.1 等返回 thinking 的推理模型上，`serializeConversation()` 把全部 thinking 塞进摘要提示词，超出上下文窗口。已关闭。
   🔗 Issue #10033

3. **#9508** [OPEN] pi-ai 向 OpenAI 兼容 Provider 发送不支持的专有字段/角色/认证头（8 评论）
   导致部分本可正常工作的 Provider 返回 400/422，是兼容性生态的核心问题。
   🔗 Issue #9508

4. **#10074** [OPEN] Anthropic 工具调用中非 ASCII edit 参数被静默损坏（4 评论）
   韩文文件编辑高频失败甚至损坏文件——`\uXXXX` 丢 `u` 变成控制字符，已持续三周。
   🔗 Issue #10074

5. **#9409** [OPEN] 推理模型会话永久卡在上下文上限（4 评论）
   每次请求都返回 `stopReason: "length"` 且压缩恢复失败，会话直接报废。
   🔗 Issue #9409

6. **#9974** [CLOSED] pi 对 llama.cpp 返回的 Responses API 工具调用处理错误，执行重复/损坏的调用（6 评论）
   🔗 Issue #9974

7. **#9905** [CLOSED] Anthropic `thinking.display` 硬编码为 "summarized"，CLI 无法修改（6 评论）
   🔗 Issue #9905

8. **#10137** [CLOSED] 阈值压缩失败后仍携带未压缩上下文继续（2 评论）
   压缩失败 + 上下文未变 = 反复工具调用循环，与 #9409/#10033 共同构成剪裁稳定性主题。
   🔗 Issue #10137

9. **#10105** [CLOSED] 每次新建会话重新加载全部扩展：4s → 280s+（2 评论）
   大型扩展配置（34 包/70+ 扩展）下性能退化严重，成本跨会话累积。
   🔗 Issue #10105

10. **#10079** [CLOSED] 会话被强杀/恢复后终端卡在 Kitty flags=7，后续每次按键都触发 CSI-u 释放事件（2 评论）
    终端状态恢复类问题的又一例，与 #7294（SSH 退出泄漏 Kitty 释放事件）、#9828（全屏退出破坏 scrollback）同源。
    🔗 Issue #10079

---

## 🔧 重要 PR 进展（Top 10）

1. **#10040** [OPEN] **Codemode 与 MCP 支持**（@mitsuhiko）
   模型生成的 JavaScript 在 QuickJS WASM 沙箱中运行，可异步调用 Pi 工具、访问会话存储和模型目录。重磅架构级功能。
   🔗 PR #10040

2. **#10122** [OPEN] **托管 llama.cpp server 模式**（@mitsuhiko）
   `/login llama.cpp` 让 Pi 自动启停 llama-server（随机端口 + API key + supervisor 按连接数管理生命周期），本地模型体验大幅简化。
   🔗 PR #10122

3. **#9993** [CLOSED] **Vertex AI 支持 Claude 模型**
   在 Google Cloud 上用 ADC/API key 直接调用 Opus/Sonnet/Haiku，扩展多云接入路径。
   🔗 PR #9993

4. **#10035** [CLOSED] **虚拟模型（实验性）**（@mitsuhiko）
   扩展通过 `registerVirtualModel()` 注册目录条目，按请求动态挑选物理模型和思考等级，使路由策略可插拔。
   🔗 PR #10035

5. **#10146** [OPEN] 修复编辑器恢复时粘贴文本被提交为 `[paste #x +y lines]` 占位符
   🔗 PR #10146

6. **#10136** [CLOSED] macOS 上 `Ctrl+V` 粘贴 Finder 文件路径而非文件图标
   解决 #9999，同时保留图片/文本回退并正确引用路径。
   🔗 PR #10136

7. **#9714** [OPEN] 支持 Azure Foundry Chat Completions 部署
   补齐 Azure Provider 的 Chat Completions 能力（如 DeepSeek V4 Pro）。
   🔗 PR #9714

8. **#10142** [OPEN] Bedrock Converse 上向 OpenAI 模型发送 reasoning effort
   修复 OpenAI 模型在 Bedrock 上始终以默认 `medium` effort 运行的问题（关闭 #9331）。
   🔗 PR #10142

9. **#10123** [CLOSED] 为远程 responder 提供类型化 TUI 对话框
   select/confirm/input/editor 可由扩展应答，带超时与取消处理（配套 #10124）。
   🔗 PR #10123

10. **#10135** [CLOSED] 规范化压缩 usage 数据，修复 resume 时 footer 崩溃
    🔗 PR #10135

---

## 📈 功能需求趋势

- **剪裁（Compaction）稳定性**：#10033、#9409、#10137、#10135 指向同一主题——长会话/推理模型下的自动压缩是当前最大痛点。
- **本地模型体验**：托管 llama.cpp（#10122）、虚拟模型（#10035）、Discount jev（#10119）显示 mitsuhiko 正系统性强化本地推理链路。
- **多云/多 Provider 适配**：Vertex 上的 Claude、Azure Foundry、Bedrock reasoning effort、OpenAI 兼容字段清理，社区对“任意 Provider 接入”需求旺盛。
- **MCP 与可编程性**：Codemode+MCP、虚拟模型、类型化远程对话框，生态可扩展性是活跃方向。
- **终端兼容性**：Kitty 键盘协议、SGR 鼠标序列、Alacritty/SSH 场景问题持续出现。

## ⚠️ 开发者关注点

1. **稳定性优先**：ESC 卡死（#10031）与上下文卡死（#9409）是直接影响日常使用的 open bug，社区等待修复。
2. **推理模型适配不足**：thinking 文本处理（压缩、display 选项、effort 透传）在多条 Issue 中反复出现。
3. **扩展加载性能**：#10105 揭示大规模扩展配置下的会话创建退化（4s→280s），需缓存/复用机制。
4. **构建可重复性**：#10129 指出类型检查依赖模型目录拉取时间，CI 可靠性受损。
5. **非 ASCII 安全**：#10074 表明多语言文件编辑静默损坏，数据安全级别的问题。

---
*数据来源：github.com/earendil-works/pi · 过去 24 小时 102 条 Issue 更新、13 条 PR 更新*

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# 📰 oh-my-pi 社区动态日报（2026-09-29）

## 今日速览

oh-my-pi 今日连发三个版本（v18.4.1–v18.4.3），集中在 `pi-agent-core` 的推测执行、工具执行事件流与上下文窗口估算修复上。社区最热话题是 **Opus 5.5 新模型兼容性问题**（#12870，15 条评论）和 **openai-codex 提示缓存失效**（#13641，p1 级）。PR 方面，RPC 层迎来一批新能力：delta-only 消息帧、缓存预热控制、headless rpc-ui 模式。

---

## 版本发布

**[v18.4.3](https://github.com/can1357/oh-my-pi/releases)**
- 新增 `transformAssistantMessagePreservesToolCalls`，让流式推测执行和直接推测候选在不重写流式工具调用的 `transformAssistantMessage` 下运行
- 推测执行宿主新增 `authorizeLaunch` 授权钩子

**[v18.4.2](https://github.com/can1357/oh-my-pi/releases)**
- 新增 `tool_execution_end` 事件，每个工具调用结算时触发，支持实时 UI 更新
- 工具结果消息改为按工具调用顺序发出（不再受完成顺序影响）
- 减少重复的 token 计数开销

**[v18.4.1](https://github.com/can1357/oh-my-pi/releases)**
- 修复拟合输出上限在严格 Chat Completions 宿主（如 llama.cpp）上超出上下文窗口几个 token 导致 400 的问题
- 修复原生远程压缩在请求已预估超出模型上下文窗口时仍发送的问题

---

## 社区热点 Issues

1. **[#12870](https://github.com/can1357/oh-my-pi/issues/12870)** — Opus 5.5 要求 Claude Code ≥ 2.1.280，omp 无法使用新模型，返回 400。9 👍 / 15 评论，新模型支持的时效性问题，社区关注度最高。

2. **[#13641](https://github.com/can1357/oh-my-pi/issues/13641)** — 18.3.0 起 openai-codex 在工具循环内 prompt cache 不再延长，`cache_read` 钉死在上条用户消息，后续内容每次全量重发。**p1 级**，直接推高成本与延迟。

3. **[#13679](https://github.com/can1357/oh-my-pi/issues/13679)** — 本地模型（Qwen Flash Next）偶尔陷入 "?!?!?!…" 无限思考，希望 omp 检测卡死并干预。本地模型稳定性需求。

4. **[#13495](https://github.com/can1357/oh-my-pi/issues/13495)** — `find` 工具无界词法匹配收集导致父进程 RSS 飙至 **37 GB** 被 OOM 杀死（18.3.4）。**p1 级**内存安全，已关闭修复。

5. **[#13307](https://github.com/can1357/oh-my-pi/issues/13307)** — bash 工具在带引号 heredoc 嵌套 `"$(...)"` 时执行了内部反引号（brush-parser PEG 回退缺陷）。**p1 级**，常见 `gh pr create --body "$(cat <<'EOF'…)"` 模式会静默执行 PR 正文中的命令，安全隐患。

6. **[#13480](https://github.com/can1357/oh-my-pi/issues/13480)** — 纯文本主模型下，粘贴的图片被静默丢弃，未按 `modelRoles.vision` 路由（pre-18.x 回归）。多模型路由可靠性问题，已关闭。

7. **[#12924](https://github.com/can1357/oh-my-pi/issues/12924)** — LSP 诊断在 `write` 创建被导入模块后保持过期（#12857 未修复彻底）。LSP 正确性的持续性痛点。

8. **[#13116](https://github.com/can1357/oh-my-pi/issues/13116)** — 请求为遗留 Windsurf Enterprise 席位增加 `auth devin-windsurf` 登录流程。企业用户认证诉求，已有配套 PR。

9. **[#10232](https://github.com/can1357/oh-my-pi/issues/10232)** — TUI 备用屏 transcript 模式 + 固定 composer（滚动时输入框常驻）。12 👍，**最受欢迎的 UX 需求**。

10. **[#13680](https://github.com/can1357/oh-my-pi/issues/13680)** — Rewind 操作会清空提示词队列。近期高频 UX 反馈。

---

## 重要 PR 进展

1. **[#13716](https://github.com/can1357/oh-my-pi/pull/13716)** — RPC 新增可选 delta-only `message_update` 帧，显著降低流式事件带宽。
2. **[#13717](https://github.com/can1357/oh-my-pi/pull/13717)** — RPC 暴露缓存预热控制及 `cache_warming_start/end` 事件（含 hit/miss/error 结果与 usage）。
3. **[#13718](https://github.com/can1357/oh-my-pi/pull/13718)** — `--mode rpc-ui` 支持 `--no-ui`，扩展完全 headless 运行。
4. **[#13670](https://github.com/can1357/oh-my-pi/pull/13670)** — 修复后续 read 只返回摘要时不再丢弃此前已读取的代码上下文（read summarize 交互），review:p1。
5. **[#9009](https://github.com/can1357/oh-my-pi/pull/9009)** — Browser Relay 回收孤儿 debugger 附件，修复 relay 进程死亡后 Chrome 调试 infobar 残留（长期挂起的老 PR，今日有活动）。
6. **[#9314](https://github.com/can1357/oh-my-pi/pull/9314)** — 状态栏新增紧凑 profile 指标段（`p:<name>`、token 分项、`ctx:<percent>`）。
7. **[#13363](https://github.com/can1357/oh-my-pi/pull/13363)** — Windows 下 Claude 项目目录正确编码盘符冒号（CI 仅跑 Linux 导致的隐性破坏）。
8. **[#13721](https://github.com/can1357/oh-my-pi/pull/13721)** — 文档：将 `skillshare` 插入 skill provider 优先级列表（95，介于 native 与 omp-plugins 之间）。
9. **[#13714](https://github.com/can1357/oh-my-pi/pull/13714)** — 文档：补充 Devin 遗留 Windsurf 凭据回退路径，配合 #13116。
10. **[#13715](https://github.com/can1357/oh-my-pi/pull/13715)** — 文档：更正 Windows 下 shell 取消宽限期为 5 秒（其他平台 2 秒）。

> 注：@kvnloo 今日集中提交了一批文档准确性 PR（#13706–#13721），覆盖 find 超时、TUI 退休预算、web_search 默认链等陈旧描述，文档维护活跃。

---

## 功能需求趋势

- **新模型/Provider 适配**：Opus 5.5、Windsurf Enterprise 登录、ZAI 凭据块自愈（#13343）——provider 层适配始终是最高频需求
- **RPC/SDK 宿主集成**：delta 帧、缓存预热事件、headless 模式（#13716–#13718），嵌入式宿主（IDE/编辑器集成）能力持续增强
- **TUI/UX 打磨**：备用屏 transcript（#10232）、rewind 保留队列（#13680）、状态栏指标（#9314）
- **成本与缓存效率**：prompt cache 失效（#13641）、重复 token 计数优化（v18.4.2）
- **macOS computer 工具**：`win.ax()` 无障碍树缺陷集中爆发（#13651、#13652）
- **本地模型支持**：卡死检测（#13679）、llama.cpp 严格模式兼容（v18.4.1）

---

## 开发者关注点

1. **上下文/内存资源安全**：find OOM 37GB、压缩请求超窗——大上下文场景下的资源边界是 p1 高发区
2. **工具语义正确性**：bash heredoc 反引号执行（安全）、read/glob/编辑的边界行为回归频繁，工具层回归测试缺口明显
3. **缓存经济性**：openai-codex 缓存不延长直接影响重度用户的 API 账单
4. **配置可发现性**：多处配置同一任务 agent 导致错模型（#13345）、`compaction.midTurnEnabled` 副作用未文档化（#13211）——隐式配置门/副作用是反复出现的困惑源
5. **跨平台盲区**：Windows/macOS 专属问题（盘符编码、ax 树）因 CI 只跑 Linux 而长期漏检

---
*数据来源：GitHub can1357/oh-my-pi ｜ 统计窗口：过去 24 小时（Issues 101 条 / PRs 322 条更新）*

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

# DeepSeek Harness 社区动态日报
**日期：2026-09-29 | 数据来源：github.com/deepseek-ai/deepseek-harness**

---

## 1️⃣ 今日速览

今天最重要的动态是 **`dsh-v0.2.0-rc.1` 候选版本发布**，这是 `0.2.0` 系列的首个 RC 版本，汇总了自 `v0.1.7-rc.2` 以来的主要用户与开发者变更。过去 24 小时内 Issue 与 PR 均无新增更新，社区反馈预计将随 RC 版本测试逐步涌现。

🔗 [Release 链接](https://github.com/deepseek-ai/deepseek-harness/releases)

---

## 2️⃣ 版本发布

### `dsh-v0.2.0-rc.1`

**🎨 体验优化**
- 优化对话进行中/完成状态的实时动画、用时信息及过程信息间距（@yixiangihsiang, @imccyu）
- 改善会话在图片失效后自动重传并继续请求的可靠性（@CreatixChu）
- 桌面更新提示补全版本、下载等细节信息

> 💡 提示：作为 RC 版本，建议开发者先在非生产环境验证，重点回归对话状态展示与图片重传相关场景。

---

## 3️⃣ 社区热点 Issues

过去 24 小时内无 Issue 更新，本节今日省略。

---

## 4️⃣ 重要 PR 进展

过去 24 小时内无 PR 更新，本节今日省略。预计 RC 版本发布后将迎来新一轮 Bug 反馈与修复 PR。

---

## 5️⃣ 功能需求趋势

由于今日无活跃 Issue 数据，无法提炼趋势。从本次 Release 内容可间接观察近期迭代方向：

- **对话体验精细化**：实时动画、用时展示等 UI 细节打磨
- **可靠性提升**：图片失效自动重传等容错机制
- **更新体验**：桌面端版本提示与升级流程完善

---

## 6️⃣ 开发者关注点

今日社区静默，建议 RC 版本测试者重点关注：

1. **图片重传机制**的边界场景（多次失效、网络切换）
2. **新动画与布局**在不同分辨率下的表现
3. 发现问题请通过 [Issues](https://github.com/deepseek-ai/deepseek-harness/issues) 反馈，助力 `v0.2.0` 正式版发布

---

*本日报基于 GitHub 公开数据自动生成，如有疑问请联系维护团队。*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*