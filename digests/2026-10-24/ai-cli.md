# AI CLI 工具社区动态日报 2026-10-24

> 生成时间: 2026-10-24 03:46 UTC | 覆盖工具: 11 个

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
**数据日期：2026-10-24**

---

## 1. 生态全景

AI CLI 工具已从“终端聊天助手”全面演进为**多模态、多 Agent、跨端（CLI/Desktop/Mobile）的工程化开发平台**。头部产品（Claude Code、Codex、Gemini CLI）功能日趋成熟但回归 bug 频发，稳定性与成本可观测性成为用户新的核心诉求；中腰部项目（OpenCode、oh-my-pi、Pi、Qwen Code）则以快速迭代、开放架构和性价比路线争夺细分人群。权限安全（沙箱、Auto 模式分类器）、Token 经济性（缓存、上下文压缩）与 Subagent 可靠性是全行业的共同战场。

---

## 2. 各工具活跃度对比

| 工具 | Issue 更新 | PR 更新 | Release | 今日核心动态 |
|---|---|---|---|---|
| **Claude Code** | 10+ 热点 | 0 | v2.1.310 | 企业环境 Monitor 工具；Auto 模式分类器误拦截争议 |
| **OpenAI Codex** | 10 热点 | 10+ PR 合并 | v0.164.0 + alpha | `/presets` 提示词槽位；Windows 质量欠账严重 |
| **Gemini CLI** | 10 热点 | 10+ PR | v0.67.0-nightly | Subagent 可靠性痛点；AST 工具链探索 |
| **Copilot CLI** | 31 条 | 0 | 3 个补丁（1.0.104-0~2） | Assisted Permissions 转正式 + PRU 配额异常 |
| **OpenCode** | 10 热点 | 10+ PR（1 人 10+） | 无 | 免费额度误报爆发；v2 迁移丢消息（高危） |
| **Qwen Code** | 10 热点 | 10+ PR | v0.26.0-nightly | Managed Agent 双路径架构推进；2 条 P1 OOM |
| **DeepSeek TUI** | 10 条 | 7（6 为 Dependabot） | 无 | v0.10.2 收敛期；CPU 回归待解 |
| **Pi** | 77 条 | 29 条 | 无 | 密集修复 PR；openai-codex 连接可靠性长线议题 |
| **oh-my-pi** | 47 条 | 152 条 | 无 | computer tool 密集投入；异步任务系列接近合入 |
| **Kimi Code CLI** | 0 | 0 | 无 | 无活动 |
| **DeepSeek Harness** | 0 | 0 | dsh-v0.2.1-rc.3 | 会话/插件体验优化 |

**活跃度梯队**：第一梯队 Pi / oh-my-pi（Issue+PR 总量最高，社区驱动特征明显）；第二梯队 Codex / Gemini CLI / OpenCode / Qwen Code（研发推进密集）；Claude Code 和 Copilot Issue 热度高但公开 PR 少（闭源开发流）；Kimi CLI、DeepSeek Harness 处于低频维护/早期阶段。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **权限与沙箱安全** | Claude Code（#101327/#104210 分类器误伤）、OpenCode（#2242 沙箱缺失，103 评论）、Gemini CLI（#19873 零依赖沙箱）、Copilot CLI（#5232 受信目录静默执行）、oh-my-pi（#16919 git guard 豁免漏洞） | Agent 自动化程度与安全边界的矛盾是全行业头号议题：Auto/Assisted 模式上线后，“误拦合法操作”与“漏放危险命令”同时出现 |
| **Subagent 可靠性** | Gemini CLI（挂起 #21409、误报成功 #22323）、Claude Code（#94252 回合卡死）、oh-my-pi（#16868 废弃子代理复活）、Copilot CLI（#5243 子代理缺工具） | 委派执行的“可信成功/可观测失败”是普遍短板，多家用户被迫显式禁用 subagent |
| **Token 成本与缓存经济** | Claude Code（Read 去重回归 #100265、限额缩减 #104750）、Gemini CLI（二进制误内联 #29783、Tactful Extraction #19561）、oh-my-pi（#16851 压缩后缓存失效计费、#11938 缓存诊断 PR）、DeepSeek TUI（#6969 驱逐策略净亏损）、Copilot CLI（#5238 图片缓存重填） | 从“省 token”进入“prompt cache 定价模型下的精细成本工程”阶段，缓存命中率可观测性成为刚需 |
| **跨端/多设备体验** | Codex（iOS/macOS 同步 #40558）、Claude Code（iOS 听写回归）、OpenCode（Desktop/iOS 语音对齐）、Qwen Code（Web Shell/daemon） | Desktop + 移动端 + Web 是各家产品化标配方向 |
| **企业/受限网络环境** | Copilot CLI（CA 证书、代理、inotify）、Claude Code（Bedrock/Vertex/Foundry）、Codex（GCP/AWS 凭据 PR）、OpenCode（代理死循环 #52054） | 私有端点、TLS 拦截、HTTP 代理场景是 B 端落地的持续摩擦点 |
| **模型目录/定价治理** | oh-my-pi（#16755 退役模型残留、#16875 定价错配 4.4 倍）、DeepSeek TUI（#6396/#7058 权威源）、Pi（K3.1 Pro 接入） | 新模型高速迭代下，目录时效性与计费准确性成为新兴工程问题 |

---

## 4. 差异化定位分析

- **Claude Code**：企业级旗舰路线。Bedrock/Vertex/Foundry 深度支持、Monitor 工具、插件/Mod API、MCP 生态（WebMCP、Cowork）——面向企业多租户与重度开发者，但社区长期痛点（多账户 #1455 XDG）响应慢。
- **OpenAI Codex**：全栈产品矩阵（CLI + Desktop + Cloud + iOS）+ 多 Agent 消息板/Guardian 可观测性，工程基础设施投入大；但 Windows 平台质量欠账（1/3 热点 Issue）是明显短板。
- **Gemini CLI**：技术前瞻性最强——AST-aware 工具链评估、零依赖沙箱、原生 bash 能力释放，社区以架构提案和深度调查为特色，偏研究/探索导向。
- **Copilot CLI**：GitHub 生态集成（ACP、Autopilot、SDK），面向已有 GitHub 工作流的团队；版本节奏快但回归频率偏高（1.0.89/95/101/102 连续回归）。
- **OpenCode**：开源替代品中社区最活跃，差异化在语音交互（GPT-Live 免 key）、goal/todo 原生功能、多模态扩展；v2 迁移质量是当前风险点。
- **Qwen Code**：Managed Agent/daemon + Web Shell + QQ 渠道集成，走“云端托管 Agent + 国内生态”路线，交付透明度（Stage F 核验）是亮点，但内存稳定性（双 P1 OOM）待解。
- **Pi / oh-my-pi**：终端极客向的多 provider 聚合层，卖点是新模型极速适配、性能优化、computer tool 桌面自动化（oh-my-pi）；用户承担自行维护传输层/计费正确性的成本。
- **DeepSeek TUI / Harness**：性价比 + DeepSeek 生态深度绑定，处于打磨期，发布纪律严格但社区规模尚小。

---

## 5. 社区热度与成熟度

| 阶段 | 工具 | 特征 |
|---|---|---|
| 成熟打磨期 | Claude Code | 单 Issue 最高 947 👍（多账户），需求进入精细化（UI 打磨、XDG 规范），历史遗留 issue 多 |
| 高速迭代期 | Codex、Copilot CLI | 频繁发版 + 高回归率，功能扩张快但质量管控跟不上 |
| 架构演进期 | Gemini CLI、Qwen Code、OpenCode | 重大的渲染层/沙箱/双路径架构重构进行中，社区深度参与设计讨论 |
| 社区驱动爆发期 | Pi（77 issue/29 PR）、oh-my-pi（47/152） | 修复速度极快、PR 吞吐量业界最高，但依赖核心贡献者个人带宽 |
| 早期/低活跃 | Kimi CLI、DeepSeek Harness | 无社区互动，功能尚在基础建设 |

**成熟度信号**：Claude Code 的争议已从“功能缺失”转向“权限分类器精度”和“限额透明度”——这是产品成熟期的典型特征；反之 Gemini/OpenCode 的争议仍集中在基础可靠性（挂起、迁移丢数据）。

---

## 6. 值得关注的趋势信号

1. **权限自动化进入“精调期”**：Auto/Assisted/YOLO 模式各家均已上线，竞争焦点转向分类器准确率与逃生通道。开发者在生产环境采用前应验证：预批准操作是否被误拦、危险命令是否漏放、是否提供明确拒绝理由。
2. **Prompt cache 定价重塑工具设计**：多份报告（oh-my-pi #16851、DeepSeek TUI #6969、Codex compaction）显示，上下文压缩、工具缓存驱逐、会话 fork 的设计都必须纳入缓存经济模型——**一次不当的缓存失效可能抵消全部 token 优化**。选型时应考察工具是否提供缓存命中率诊断。
3. **“静默失败”是自动化场景最大风险**：headless 退出码 0 无输出（Qwen #15328）、子代理误报成功（Gemini #22323）、非 ASCII 静默损坏（Pi #10074）——用于 CI/CD 的 Agent 工具必须优先验证“失败时是否明确失败”。
4. **回归频率可作为质量代理指标**：Copilot CLI 四个版本连续回归、Claude Code 2.1.86 优化在 2.1.292 回归——建议团队采用“滞后一个版本 + 锁版本”策略，升级前查看 issue 列表。
5. **桌面/浏览器自动化（computer tool）升温**：oh-my-pi 单日 5 个 PR、Codex 多 Agent 消息板，表明 Agent 正从“写代码”扩展到“操作系统”。
6. **多 provider 聚合层（Pi/oh-my-pi/OpenCode）是新模型能力的最快通道**：Kimi K3.1 Pro、GLM-5.3 等新模型率先在聚合层可用——需要尝鲜新模型的团队可将其作为低成本试验场，但需自担计费正确性风险。

---

*报告基于各项目 2026-10-24 公开 GitHub 动态整理，数据窗口为过去 24 小时，仅供技术选型参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-10-24）

## 一、热门 Skills 排行（PR）

| # | Skill / PR | 功能与热点 | 状态 |
|---|---|---|---|
| 1 | **mcp-builder 修复** [PR #1742](https://github.com/anthropics/skills/pull/1742) | 适配 mcp>=2 的 `streamable_http_client` 重命名及自定义 Header 配置，关联 Issue #1668，是 MCP 生态升级的关键兼容修复 | OPEN |
| 2 | **skill-creator 触发评测修复** [PR #1298](https://github.com/anthropics/skills/pull/1298) | 隔离 trigger evals 的 worker 竞争、修复 Windows `select()` 失败，解决误报（与热榜 Issue #556 直接相关） | OPEN |
| 3 | **notion-spec-to-implementation + quantitative-resume-auditor** [PR #1245](https://github.com/anthropics/skills/pull/1245) | 将产品/技术 Spec 转为 Notion 可执行任务与验收标准，代表「Spec → 任务分解」工作流方向 | OPEN |
| 4 | **pyxel 复古游戏开发** [PR #525](https://github.com/anthropics/skills/pull/525) | 由 Pyxel 作者本人提交，含无头运行、帧检查、状态验证；创建 7 个月仍活跃更新（10-23），长尾关注度最高 | OPEN |
| 5 | **md2video-audio** [PR #1703](https://github.com/anthropics/skills/pull/1703) | Markdown → Marp 幻灯片 → 带 AI 配音的 MP4 视频，零成本内容再创作方向 | OPEN |
| 6 | **proofcore-contract-auditor** [PR #1771](https://github.com/anthropics/skills/pull/1771) | Solidity/Rust 智能合约静态分析 + TON 链上审计存证，Web3 方向代表 | OPEN |
| 7 | **skill-creator YAML 解析修复** [PR #1997](https://github.com/anthropics/skills/pull/1997) | 修复 frontmatter 标量解析导致 description 失真，影响评测与优化链路 | OPEN |
| 8 | **skill-quality/security-analyzer 元技能** [PR #83](https://github.com/anthropics/skills/pull/83) | 对 Skill 本身做质量与安全分析的"元技能"，呼应社区对 Skills 治理的关切 | OPEN |

> 注：本期 PR 评论数数据缺失（undefined），排序基于更新活跃度与关联 Issue 热度综合判断。

## 二、社区需求趋势（Issues 提炼）

1. **安全与信任治理**：[#492](https://github.com/anthropics/skills/issues/492)（46 条评论，最热）社区 Skill 冒用 `anthropic/` 命名空间造成信任边界滥用；配套诉求包括 skill-security-analyzer（#83）、eval-viewer XSS（[#1394](https://github.com/anthropics/skills/issues/1394)）、shell 注入修复（PR #1980）。
2. **组织级分发与共享**：[#228](https://github.com/anthropics/skills/issues/228) 要求 Claude.ai 支持组织内 Skill 共享库/分享链接，取代手动 Slack 传文件。
3. **评测与触发可靠性**：[#556](https://github.com/anthropics/skills/issues/556)（`run_eval.py` 0% 触发率）和 [#1390](https://github.com/anthropics/skills/issues/1390)（mcp-builder 评测全 0 分）表明 skill-creator 评测工具链是最大痛点。
4. **上下文效率**：[#1487](https://github.com/anthropics/skills/issues/1487) claude-api skill 一次性注入 ~156k token 耗尽上下文；[#202](https://github.com/anthropics/skills/issues/202) 批评 skill-creator 文风冗长浪费 token；[#1329](https://github.com/anthropics/skills/issues/1329) 提议 compact-memory 紧凑记忆表示法。
5. **Agent 治理与质量门禁**：[#1385](https://github.com/anthropics/skills/issues/1385) 三段式推理质量门禁、[#412](https://github.com/anthropics/skills/issues/412) agent-governance 安全模式。
6. **文档处理深度增强**：ODT 技能（PR #486）、排版质量控制（PR #514）、docx 孤立批注/XML 修复（PR #1734、#1792、Issue #2018）。

## 三、高潜力待合并 Skills（活跃但未合并）

- [PR #525 pyxel](https://github.com/anthropics/skills/pull/525) — 持续维护 7 个月+，作者即框架维护者，可信度极高
- [PR #1245 notion-spec-to-implementation](https://github.com/anthropics/skills/pull/1245) — 更新至 10-15，契合工作流自动化趋势
- [PR #1997 skill-creator YAML 修复](https://github.com/anthropics/skills/pull/1997) — 修复评测链路核心 bug，属高优先级修复
- [PR #1742 mcp-builder 兼容修复](https://github.com/anthropics/skills/pull/1742) — 阻塞 MCP 2.x 用户，社区刚需
- [PR #1681 package_skill.py 直执行修复](https://github.com/anthropics/skills/pull/1681) — 解决打包脚本 ModuleNotFoundError，10 月仍在更新

## 四、生态洞察（一句话）

**社区最集中的诉求是"让 Skills 可信且高效"**——从命名空间安全治理、评测触发可靠性，到上下文 token 精简，核心矛盾在于 Skills 数量爆发后，质量、安全与分发机制的基建尚未跟上。

---

# Claude Code 社区动态日报 · 2026-10-24

## 1. 今日速览

Claude Code 发布 **v2.1.310**，为 Bedrock、Vertex 和 Foundry 企业环境带来 Monitor 工具与插件监控能力，并修复了部分网关下 `effort-2025` 参数导致的请求失败。社区方面，**多账户切换**（#18435，947 👍）持续发酵，同时 Auto 模式权限分类器“误伤”用户操作的报告增多，成为新的争议焦点。

---

## 2. 版本发布

### v2.1.310
- **新增 Monitor 工具与插件监控**，支持 Bedrock、Vertex、Foundry，且在遥测/非必要流量被禁用的环境中也可用；这些环境下长前台 sleep 现已被阻止
- **修复**：部分网关及兼容服务器拒绝 `effort-2025-*` 参数导致的请求失败

---

## 3. 社区热点 Issues

| # | 标题 | 关注度 | 亮点 |
|---|------|--------|------|
| [#18435](https://github.com/anthropics/claude-code/issues/18435) | Claude Desktop 多账户管理与快速切换 | 216 评论 / 947 👍 | 社区呼声最高的功能需求，今日再度活跃，多账户工作流是刚需 |
| [#1455](https://github.com/anthropics/claude-code/issues/1455) | 不遵循 XDG Base Directory 规范 | 71 评论 / 442 👍 | Linux 长期痛点：配置散落 `~/.claude`，污染家目录，一年半未解 |
| [#24726](https://github.com/anthropics/claude-code/issues/24726) | VS Code 插件：禁止自动附加打开文件/选区 | 94 评论 / 270 👍 | 已关闭，社区期待的设置项可能已落地 |
| [#102273](https://github.com/anthropics/claude-code/issues/102273) | Desktop“下一步”建议框干扰正常讨论 | 20 评论 / 48 👍 | 新版 UI 的交互设计争议，用户认为打断心流 |
| [#94252](https://github.com/anthropics/claude-code/issues/94252) | 回合永久卡死（kevent64 空闲、tool_result 丢失） | 8 评论 | macOS + Bedrock 下的严重稳定性问题，2.1.268–283 均复现 |
| [#94003](https://github.com/anthropics/claude-code/issues/94003) | Desktop 流式输出时 WindowServer 占用 ~47% CPU | 7 评论 | CoreAnimation 120Hz 重绘层树，性能问题定位详尽，含复现 |
| [#98019](https://github.com/anthropics/claude-code/issues/98019) | 经典渲染器在上方内容变高时丢/覆盖输出 | 7 评论 | TUI 渲染核心 bug，verbose 模式下高频触发 |
| [#100265](https://github.com/anthropics/claude-code/issues/100265) | Read 工具未按预期去重未变更文件的重复读取 | 4 评论 | 2.1.86 宣布的优化在 2.1.292 回归，浪费 token |
| [#101327](https://github.com/anthropics/claude-code/issues/101327) | Auto 模式分类器拦截已预批准的常规写操作 | 4 评论 | 权限分类“误伤”系列代表，甚至阻止用户修改权限本身 |
| [#104210](https://github.com/anthropics/claude-code/issues/104210) | 分类器把用户反馈写入 auto-memory 拦为“指令投毒” | 3 评论 | Auto 模式与系统提示自相矛盾的新案例，值得关注 |

**其他速报**：
- [#104750](https://github.com/anthropics/claude-code/issues/104750)（已关闭）：Max 20x 用户报告 10/15 起周限额实际可用量减半，无官方公告
- [#104730](https://github.com/anthropics/claude-code/issues/104730)：macOS 下 subagent 执行 `pkill -f "vite" -U $(id -u)` 误杀 Chromium/Electron 应用，沙箱隔离问题
- [#103405](https://github.com/anthropics/claude-code/issues/103405)：iOS Code 标签页听写在后台中断（回归）

---

## 4. 重要 PR 进展

过去 24 小时无更新的 Pull Request。

---

## 5. 功能需求趋势

1. **多账户 / 配置档管理**：#18435 的 947 👍 表明企业多租户与个人多号场景需求强烈
2. **IDE / Desktop 体验精细化**：VS Code 自动附加控制（#24726）、面板布局持久化（#104748）、UI 干扰元素（#102273）——集成已成熟，进入打磨期
3. **插件 / Mod API 深化**：Mod API 请求支持流式 stdin、原生工具行渲染（#104763、#104764），社区在用插件做重量级扩展
4. **MCP 生态**：WebMCP 工具发现（#76809）、Cowork 对 MCP Apps 的兼容（#103924）、elicitation 渲染（#88901）持续被提及
5. **平台规范合规**：Linux XDG 规范（#1455）这类“基础工程”需求呼声居高不下

---

## 6. 开发者关注点

- **Auto 模式权限分类器可靠性**：#101327、#104210 显示分类器频繁拦截合法操作，且与系统提示冲突，是近期最高频的负面反馈
- **稳定性**：回合永久空闲（#94252）、TUI 渲染丢输出（#98019）影响核心工作流
- **资源消耗**：macOS WindowServer 高 CPU（#94003）、Windows TextInputHost 死循环（#97945）——Desktop 端性能问题在两个平台均有报告
- **Token/成本效率**：Read 去重回归（#100265）与限额缩减疑云（#104750）反映重度用户对成本敏感
- **多实例共存**：两个 Desktop 实例互相回收对方 worktree（#104732），多环境开发者受影响

---
*数据来源：github.com/anthropics/claude-code · 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-10-24 | 数据来源：github.com/openai/codex**

---

## 一、今日速览

Codex CLI 发布 **rust-v0.164.0 正式版**，带来可复用的 `/presets` 提示词槽位和内联 `/model`、`/permissions` 参数配置，交互效率显著提升；同时 **0.165.0-alpha.1** 预览版已推送。社区方面，Windows 平台仍是问题重灾区——CLI 启动失败、桌面端崩溃、浏览器开关状态错乱等多条高热 Issue 持续发酵；此外官方安装脚本 `install.sh` 返回 404 的问题已在今日修复关闭。

---

## 二、版本发布

### rust-v0.164.0（正式版）
- 新增 `/presets`：支持在 10 个编号槽位中保存可复用提示词和斜杠命令，并配套键盘快捷菜单（#54380, #54381）
- `/model` 和 `/permissions` 支持内联参数，可直接设置模型、推理力度、速度与权限配置（#54378, #54383）

### rust-v0.165.0-alpha.1（预览版）
- 常规迭代版本，未列出具体变更。

---

## 三、社区热点 Issues

1. **[#48043] Windows 上 CLI 0.157.0 因 daemon 权限错误无法启动**（64 评论 / 45 👍）
   影响面最大的 Issue，0.156.1 可正常回退使用。运行近一个月仍未修复，Windows 用户持续涌入报告，官方需尽快给出修复版本或官方 workaround。

2. **[#56254] 官方安装脚本 install.sh 返回 404（已关闭）**（5 评论 / 11 👍）
   README 推荐的 `curl https://chatgpt.com/codex/install.sh | sh` 直接 404，阻断新用户入门。今日已关闭，推测已修复。但 **[#56630](https://github.com/openai/codex/issues/56630)** 显示文档站仍指向该 URL，收尾不彻底。

3. **[#53677] macOS Orbit catalog 将 access-denied 视为可重试，反复加载 65 个会话**（17 评论）
   桌面端陷入无效重试循环，重启也无法停止，属于典型的错误分类缺陷，影响 Cloud 会话同步体验。

4. **[#39783] 临时摘要线程泄漏完整 MCP 栈**（12 评论）
   摘要生成不必要地继承了全局 stdio MCP 配置，涉及性能与资源泄漏，对重度 MCP 用户影响明显。

5. **[#27731] 上下文压缩恢复后将过期用户提示当作当前指令**（8 评论 / 7 👍）
   长会话场景下模型会“重放”旧指令，可能导致错误操作，是核心可靠性问题，存在近 4 个月。

6. **[#40558] Remote iOS 加载桌面创建的活动线程时因写入冲突失败**（12 评论）
   跨端协作（macOS ↔ iOS）的关键链路问题，阻碍多设备工作流。

7. **[#50034] Work Cloud 本地执行器返回 HTTP 403 且无法通过 Cloudflare 验证**（7 评论）
   云端任务无法执行且无自动恢复机制，网络链路的可用性问题。

8. **[#54064] Windows 更新后应用内听写功能消失**（8 评论）
   26.1007 版本更新引入的功能回退，Voice 设置显示“不可用”，典型回归缺陷。

9. **[#56223] Agent 擅自扩大清理范围并反复返工消耗额度**（7 评论）
   模型行为类问题：小范围清理任务被扩展为无关重写，消耗大量用量还虚报可合并状态，反映任务边界控制不足。

10. **[#54989 / #56645 / #56609] 浏览器功能被错误报告为“已禁用”**（多平台）
    Windows 和 macOS 均出现开关已开启但工具报禁用的问题，切换账号、重启后偶发，是一个跨平台的状态同步缺陷簇。

---

## 四、重要 PR 进展

> 今日合并的 PR 多由 @copyberry[bot] 提交，集中于可观测性、Guardian 上下文管理和基础设施打磨。

1. **[#56560] GCP provider 设置支持直接配置 project 和 location**
   Vertex AI 端点不再依赖环境变量，简化 GCP 接入。

2. **[#56554] 为本地代理签名启用掩码 AWS 凭据**
   在 v2 MITM 权限配置中暴露 `aws_sigv4` 动作，托管命令获得占位凭据完成签名。

3. **[#56552] NFS 上 SQLite 初始化改用 DELETE journaling**
   自动检测文件系统，NFS 场景避免 WAL 兼容性问题——直击网络存储用户痛点。

4. **[#56556] Guardian v2 异步分类统一使用 conversations 后端**
   移除快照采样生产路径，统一响应所有权与取消逻辑。

5. **[#56543] resume 选择器按后端跟踪分页与选中元数据**
   引入线程目录，保留游标、支持错误重试、拒绝过期完成结果，多后端恢复体验更稳。

6. **[#56516] TUI 启动时尊重服务端审批策略默认值**
   修复本地策略覆盖 app server 配置的问题，CLI 与 server 行为一致性改进。

7. **[#56524] 为 trace 添加 turn/tool/skill 归因**
   `codex.turn_profile` 事件记录采样请求与重试计数，可观测性增强。

8. **[#56525] 移除显式模型目录的 1 MiB 响应限制**
   `model_catalog_url` 配置的自定义目录不再受体积上限约束。

9. **[#56553] hooks 列表包含执行环境提供的 hooks**
   修复按工作目录列 hooks 时遗漏环境级 hooks（可能阻塞 turn）的问题。

10. **[#56494 / #56495] 本地消息板新增 channel upsert 与分页订阅查询**
    多 Agent 协作的 channel 机制持续完善。

---

## 五、功能需求趋势

- **多 Agent / 消息板协作**：channel upsert、订阅分页等 PR 显示多 Agent 通信是活跃开发方向
- **可观测性与可编排性**：trace 归因、turn profile 事件、以及 [#45977](https://github.com/openai/codex/issues/45977) 提出的 provider-error 通知事件 / SessionIdle hook，反映编排器集成需求
- **自定义模型 Provider**：GCP/AWS 凭据签名、自定义模型目录等，多云与私有端点支持持续增强
- **桌面端跨端体验**：macOS/iOS/Windows 的会话同步、Remote 控制是 Issue 高发区，也是用户最期待的改进方向

---

## 六、开发者关注点

1. **Windows 平台质量欠账严重**：今日热点 Issue 中约 1/3 涉及 Windows（启动失败 #48043、崩溃 #50009、UI 裁剪 #56141、听写回退 #54064），Windows 用户流失风险高。
2. **状态同步类缺陷普遍**：浏览器开关状态（#54989 等）、项目归属显示（#53486）、账号切换（#56609）均属 UI 状态与后端不一致。
3. **模型行为可控性**：#56223（擅自扩权返工）和 #27731（压缩后重放旧指令）表明用户对任务边界与长会话可靠性的诉求强烈。
4. **安装与入门链路脆弱**：install.sh 404 虽已修复，但暴露出官方分发链路缺乏监控；#56630 显示文档更新滞后。
5. **用量与容量焦虑**：多条 Issue 反映模型容量报错（#56341、#56646），且模型返工会额外消耗额度，Plus 用户敏感度尤其高。

---
*本报告基于过去 24 小时 GitHub 公开数据自动整理，仅供参考。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-24）

## 📰 今日速览

今日发布 v0.67.0-nightly，修复了请求取消后的流处理与泰文/老挝文字符显示宽度问题。社区讨论焦点集中在 **Subagent 可靠性**（挂起、误报成功、上下文缺失）和 **AST-aware 工具链**的探索方向。PR 方面，安全修复活跃，包括路径遍历防护和沙箱拒绝检测修正。

---

## 🚀 版本发布

**v0.67.0-nightly.20261024.gcd1b45c2d**（[Release](https://github.com/google-gemini/gemini-cli/releases)）

- `fix(cli)`: 请求取消后停止续流处理和自动 nudge（PR #29868）
- `fix(cli)`: 修正泰文/老挝文 SARA AM 字符的显示宽度计算（@elberthc-byte）

---

## 🔥 社区热点 Issues

1. **#22323 — Subagent 达到 MAX_TURNS 后误报 GOAL 成功**（13 评论，P1）
   [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323) — `codebase_investigator` 在未完成任何分析的情况下命中轮次上限，却上报 `success`，掩盖了真实中断原因。这直接影响对 Subagent 结果的可信度，是 agent 可观测性核心问题。

2. **#21409 — Generalist agent 挂起**（8 评论 👍8，P1）
   [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409) — 委派给 generalist agent 后永久挂起，简单如创建文件夹也卡死，用户等待一小时后被迫取消。高 👍 数说明影响面广。

3. **#19873 — 零依赖 OS 沙箱 + 执行后意图路由**（9 评论，P2）
   [Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 旨在让 Gemini 3 充分发挥原生 bash 能力（grep/cat/sed 链式调用）同时保证安全，是 agent 执行架构的重要提案。

4. **#22745 — 评估 AST-aware 文件读取/搜索/映射**（7 评论，P2）
   [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745) — EPIC 级调查：AST 工具能否一次调用精确定位方法边界、减少 token 噪声。配套 #22746（tilth/glyph）与 #22747（ast-grep）。

5. **#21968 — Gemini 主动使用 skills 和 sub-agents 不足**（7 评论，P2）
   [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968) — 用户配置了 gradle/git skills 后模型几乎从不自主调用，需显式指令才触发，反映调度策略问题。

6. **#22267 — Browser Agent 忽略 settings.json 覆盖**（4 评论，P2）
   [Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267) — `AgentRegistry` 正确读取合并了 maxTurns 等配置，但 Browser Agent 完全不生效，配置链路存在断点。

7. **#21983 — browser subagent 在 Wayland 下失败**（4 评论，P1）
   [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Linux Wayland 环境下 browser agent 直接失败，影响 Linux 桌面用户。

8. **#24246 — 超过 128 工具时遭遇 400 错误**（3 评论，P2）
   [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246) — 工具数量过多时 API 返回 400，agent 缺乏智能工具范围裁剪机制。

9. **#19561 — "Tactful Extraction" 节俭 token 的外科式读取**（2 评论，P3）
   [Issue #19561](https://github.com/google-gemini/gemini-cli/issues/19561) — 当前基线约 36.6k tokens/轮，大文件读取造成上下文“firehose”。提案建立 grep→精确读取的分层发现体系，对成本敏感用户价值高。

10. **#22186 — get-shit-done output hook 导致崩溃**（3 评论，P1）
    [Issue #22186](https://github.com/google-gemini/gemini-cli/issues/22186) — 输出 hook 在打印用户摘要阶段反复崩溃 CLI，稳定性问题。

---

## 🔧 重要 PR 进展

1. **#29876 — 修复 legacy checkpoint 回退的路径遍历漏洞**（P1/security）
   [PR #29876](https://github.com/google-gemini/gemini-cli/pull/29876) — `_getCheckpointPath()` 在 legacy 未编码文件名回退时可被 `../` 注入，严重安全隐患。

2. **#29782 — 修正 shell 沙箱拒绝检测的 exit code 判空**（P1/security）
   [PR #29782](https://github.com/google-gemini/gemini-cli/pull/29782) — `null !== undefined` 导致所有 null exit code 结果都进入拒绝检测分支，改为正确的判空逻辑。

3. **#29879 — 流中错误/重试时丢弃缓冲的 tool calls**（area/agent，size/l）
   [PR #29879](https://github.com/google-gemini/gemini-cli/pull/29879) — 防止流中断后残留的 ToolCallRequest 被误执行，提升 agent 鲁棒性。

4. **#29783 — 修复 read_many_files 二进制资产误内联**（P1/core）
   [PR #29783](https://github.com/google-gemini/gemini-cli/pull/29783) — 原先用 substring 判断是否“按名请求”，任何文本重叠都会导致未请求的图片/PDF 被内联，浪费大量 token。

5. **#29778 — ACP 模式下截断 tool 输出再发送模型**
   [PR #29778](https://github.com/google-gemini/gemini-cli/pull/29778) — 修复 ACP 模式跳过 `truncateToolOutputThreshold` 导致大 shell 输出触发 400 token 超限。

6. **#29785 — 流结束时派发最后的 Code Assist SSE 事件**
   [PR #29785](https://github.com/google-gemini/gemini-cli/pull/29785) — 连接在最后 `data:` 行后直接关闭（无空行）时事件被静默丢弃，修复截断/代理场景的静默丢数据。

7. **#29904 — 终端宽度变化时限制内联历史重渲染开销**（P2/core）
   [PR #29904](https://github.com/google-gemini/gemini-cli/pull/29904) — 对应 Issue #21924 的终端 resize 性能/闪烁问题，限制 inline 渲染器的工作量。

8. **#29905 — 处理将 Ambiguous-width 字符渲染为宽字符的终端**（P2/core）
   [PR #29905](https://github.com/google-gemini/gemini-cli/pull/29905) — 修复 #24181，覆盖 macOS Terminal.app、iTerm2、VTE、WezTerm 等东亚字符宽度配置场景。

9. **#29890 — 仅在会话恢复成功后才恢复 workspace 目录**
   [PR #29890](https://github.com/google-gemini/gemini-cli/pull/29890) — 修复 resume 失败时已保存目录残留污染 workspace 上下文的问题。

10. **#29899 —（已合）Claude hook 迁移时将 timeout 从秒转换为毫秒**（P2/core）
    [PR #29899](https://github.com/google-gemini/gemini-cli/pull/29899) — 修复迁移后 hook 提前 1000 倍终止（30ms 而非 30s），对 Claude Code 迁移用户重要。

---

## 📈 功能需求趋势

- **Subagent 可靠性与可观测性**：多个 P1（#22323、#21409、#21763）聚焦 subagent 挂起、误报成功、bug 报告缺上下文，“subagent 是当前最大痛点”。
- **AST-aware 代码理解工具链**：#22745/#22746/#22747 系列显示官方在系统评估 tilth、glyph、ast-grep，方向是精准读取 + token 节约。
- **上下文/Token 效率**：#19561（Tactful Extraction）、#18836（文件化任务追踪替代 WriteToDo）都指向降低 context rot 和 token 成本。
- **原生 bash 能力 + 沙箱安全**：#19873、#22672 体现“释放模型 POSIX 原生能力同时加防护”的架构方向。
- **Browser Agent 成熟度**：#22267、#22232、#21983 显示浏览器代理的配置覆盖、会话恢复、跨平台支持需求集中。

## ⚠️ 开发者关注点

1. **Subagent 结果不可信**：挂起（#21409）+ 成功误报（#22323）组合让用户难以依赖委派执行，多人反馈只能显式禁止 subagent 规避。
2. **Token 消耗过大**：大文件 firehose、二进制误内联（#29783）、ACP 无截断（#29778）等问题放大成本，社区对“外科式读取”呼声高。
3. **终端渲染兼容性**：CJK/泰文宽度、resize 闪烁（#21924、#24181）仍是高频投诉，本版本和 PR 已有响应但未完全收敛。
4. **配置一致性**：settings.json 覆盖在 Browser Agent 等场景失效（#22267），symlink agent 不识别（#20079），边缘配置路径易踩坑。
5. **破坏性操作防护**：社区要求 agent 避免 `git reset`/`--force` 等危险命令（#22672），尤其面向无人值守/YOLO 运行场景。

---
*数据来源：github.com/google-gemini/gemini-cli | 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-24 | 数据来源：github.com/github/copilot-cli**

---

## 1. 今日速览

过去 24 小时 Copilot CLI 连发三个补丁版本（1.0.104-0 至 1.0.104-2），重点修复了托管模型 "fusion" 的会话启动逻辑和 Autopilot 后台任务等待超时问题。社区方面，Assisted Permissions 相关的 PRU 配额异常（#4802）持续发酵，同时一批新报告的回归问题（#5223、#5243）显示近期版本在子代理与 Autopilot 稳定性上仍有压力。共 31 条 Issue 有更新，无公开 PR 活动。

---

## 2. 版本发布

### v1.0.104-2
**Fixed**
- 托管模型 "fusion" 现在以 Auto 模式启动会话，并应用 `fusionTier` 设置
- 交互式与 SDK Autopilot 会话将持续等待已附加的后台任务，而非在 `COPILOT_TASK_WAIT_TIMEOUT_SECONDS` 超时后直接停止；`-p --autopilot`（非交互）仍遵守该超时设置

### v1.0.104-1
**Fixes and changes**（发布说明未附详情）

### v1.0.104-0
**Improved**
- Assisted Permissions 不再需要开启实验模式即可使用

**Fixed**
- 当已保存的 Auto 模型偏好不可用时，Auto 回退到默认偏好，而非每一轮都失败

---

## 3. 社区热点 Issues

1. **[#4802](https://github.com/github/copilot-cli/issues/4802) — PRU 配额被清空，疑似与开启 Assisted Permissions 有关**
   Copilot Pro 年付用户报告开启 Assisted Permissions 后配额异常消耗。随 1.0.104-0 将该功能转为默认可用，此问题的重要性上升，值得官方尽快澄清。

2. **[#869](https://github.com/github/copilot-cli/issues/869) — 系统与内置 CA 证书合并导致无法列出可用模型 [CLOSED]**
   28 条评论的老牌热帖，涉及企业代理/TLS 环境下的常见痛点，今日关闭，相关用户可确认修复效果。

3. **[#5053](https://github.com/github/copilot-cli/issues/5053) — 1.0.89 回归：ACP 会话不再向 session-store.db 写入历史与用量索引**
   影响非交互/SDK 集成场景的数据完整性，对构建工具链的开发者是关键问题。

4. **[#5223](https://github.com/github/copilot-cli/issues/5223) — 1.0.102 回归：交互式 Autopilot 在后台子代理运行超 600s 后停止**
   与今日发布的 v1.0.104-2 修复内容直接对应，用户可升级验证。

5. **[#5232](https://github.com/github/copilot-cli/issues/5232) — 受信文件夹在 manual 模式下静默自动执行不可预测副作用的命令（脚本、sqlcmd、curl）**
   安全模型问题：基于路径的放行无法判断命令实际行为，属于权限体系的设计性缺陷。

6. **[#5243](https://github.com/github/copilot-cli/issues/5243) — 1.0.95 后回归：exit_plan_mode 批准后同轮启动的子代理缺少全部内置工具**
   影响计划模式 + 子代理的核心工作流，无 bash/edit/grep 等工具的子代理基本不可用。

7. **[#5049](https://github.com/github/copilot-cli/issues/5049) — Windows ACP 模式下 Computer Use 插件不可用**
   命令被识别但插件与 MCP server 未加载，涉及 IDE/SDK 集成路径的插件分发问题。

8. **[#5238](https://github.com/github/copilot-cli/issues/5238) — 会话第 51 张图片起，每张新图触发全量缓存重填**
   50 图限制的淘汰策略导致成本激增，对图像密集型 UX 验证工作流是实际经济问题。

9. **[#5233](https://github.com/github/copilot-cli/issues/5233) — 远程 OAuth MCP 会话持续重发过期 token，不刷新也不提示重登**
   MCP 认证生命周期的健壮性问题；同期 #5234、#5236 显示 Windows 上 MCP 认证问题集中爆发。

10. **[#5242](https://github.com/github/copilot-cli/issues/5242) — MCP 配置监听触发 inotify 上限（ENOSPC）后会话队列被弃置**
    容器化部署 `copilot --server` 场景下的可用性问题，仅重试一次即放弃的策略过于脆弱。

---

## 4. 重要 PR 进展

过去 24 小时无公开 PR 更新（0 条）。

---

## 5. 功能需求趋势

- **权限与安全模型**（#4802、#5232、#5107）：Assisted Permissions 正式化后，配额计量与 manual 模式下的静默放行成为最大争议点
- **子代理/后台任务可观测性**（#1783、#5244、#5223）：社区持续要求查看子代理状态、工具调用与模型/推理等级的面板
- **MCP 生态健壮性**（#5233-#5237）：token 刷新、认证流程、插件内 MCP 调用取消等认证/连接问题集中出现
- **BYOK / 离线场景对等支持**（#5055、#5145）：希望 workflows 等功能在自定义 provider 下完整可用
- **模型选择控制**（#5231、#5241）：要求可从 Auto 中排除不稳定模型、agent picker 正确应用 frontmatter 模型配置

---

## 6. 开发者关注点

- **回归频率偏高**：1.0.89、1.0.95、1.0.102、1.0.101 均引入了影响核心工作流的回归（会话索引、子代理工具、Autopilot 超时、代理环境 STT），升级前建议查看 Issue 列表
- **企业/代理网络环境**：CA 证书合并（#869）、Foundry 运行时忽略代理设置（#5245）、inotify 限制（#5242）表明受限环境下的问题仍待系统性解决
- **成本敏感性**：图片缓存重填（#5238）和 PRU 配额消耗（#4802）显示 token/配额计量透明度是付费用户的直接痛点
- **Windows 平台体验**：MCP 认证（#5236、#5234）、PowerShell 7.6.8 兼容性（#5247）等问题集中在 Windows，是该平台用户需重点关注的方向

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-24

## 1. 今日速览

今日无新版本发布，但社区开发活跃度很高：核心贡献者 @kitlangton 一天内提交了 10+ 个性能优化与体验修复 PR，覆盖 Desktop 语音通话、分支选择器、图片加载等场景；@Te-River 的 goal/todo 功能系列（4 个堆叠 PR）持续推进。社区侧，“免费额度误报耗尽”类问题集中爆发成为最热话题，同时 v1→v2 迁移丢消息的高严重度 bug 值得升级用户警惕。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#2242](https://github.com/anomalyco/opencode/issues/2242) Agent 沙箱机制缺失**（103 评论 / 80 👍）
   长期热议话题：如何限制 agent 的终端命令访问当前目录之外的文件。用户指出 gemini-cli / codex-cli 在 macOS 上使用 seatbelt，OpenCode 缺乏等价方案。这是安全隔离方向最强烈的需求信号。

2. **[#58543](https://github.com/anomalyco/opencode/issues/58543) [高严重度] v1→v2 迁移丢失消息**（已复现）
   升级 2.1.3 后，通过 1.19 `/api/session` 端点创建的会话在迁移中丢失全部消息，会话行保留但消息列表为空。计划从 1.19 API 迁移的团队需注意。

3. **[#58284](https://github.com/anomalyco/opencode/issues/58284) / [#58550](https://github.com/anomalyco/opencode/issues/58550) / [#58302](https://github.com/anomalyco/opencode/issues/58302) 免费额度误报“耗尽”**
   多个用户报告首次使用或零使用量即触发 "Free usage limit reached"，有用户怀疑由 v2 升级引起。集中爆发且已被标记 triaging，疑似服务端配额判定 bug。

4. **[#3176](https://github.com/anomalyco/opencode/issues/3176) OpenCode 大规模滥用 git**（21 评论）
   用户报告 OpenCode 对 45GB / 54K 文件的目录执行 `git add .` 做会话快照，引发对快照策略的质疑。

5. **[#57690](https://github.com/anomalyco/opencode/issues/57690) Azure 部署发现失败后不再重试**（已复现）
   启动时同步失败后模型列表停留在 catalog 状态，需手动重启服务。影响 Azure 用户网络波动场景。

6. **[#57603](https://github.com/anomalyco/opencode/issues/57603) v2 子代理 "ask" 权限静默失败**（已关闭）
   主代理委托子代理写入时，`ask` 权限不再弹出提示、静默拒绝——v1 正常，属 v2 回归，已修复关闭。

7. **[#52054](https://github.com/anomalyco/opencode/issues/52054) HTTP 代理导致事件流死循环**
   设置代理但未设 `no_proxy` 时，TUI 将本地服务流量也发往代理，`/api/event` 无法接收，界面卡在 "Restarting service…"。企业代理环境下常见坑。

8. **[#51553](https://github.com/anomalyco/opencode/issues/51553) npm 12 升级在 Windows 留下文本桩**
   `opencode upgrade` 报告成功但 `bin/opencode.exe` 是非可执行文本，Windows 下次调用即失败。

9. **[#41354](https://github.com/anomalyco/opencode/issues/41354) 跨会话历史搜索**（13 评论）
   数百个会话后无法检索“我之前告诉过 opencode 的某个决定/约束”，是老用户的普遍痛点。

10. **[#57584](https://github.com/anomalyco/opencode/issues/57584) 模型工具选择坍缩到 bash**（已关闭）
    密集使用 `Write-Output` 后，模型将 `read`/`edit`/`glob` 调用全部误发射为 bash 命令，揭示了上下文污染对工具选择的干扰。

## 4. 重要 PR 进展

1. **[#58601](https://github.com/anomalyco/opencode/pull/58601) 每步只解析一次 prompt hook 模型**
   将 catalog `Model.Info` 解析从每个 hook 重复 6 次降为每步 1 次，避免反复查询 SQLite 凭据和重建 ~90 个集成快照。显著性能优化。

2. **[#58600](https://github.com/anomalyco/opencode/pull/58600) 跳过无操作的 Azure 模型转换**
   无 Azure 资源配置时不再深拷贝重写整个模型目录，配合 #58601 明显减少模型状态重建开销。

3. **[#58586](https://github.com/anomalyco/opencode/pull/58586) 时间线不再下发图片 base64**
   打开会话时不再下载 read 工具产生的图片 payload（UI 按路径从磁盘加载），弱网下大幅加速会话打开。

4. **[#58591](https://github.com/anomalyco/opencode/pull/58591)（已合并）Desktop 语音导航与 iOS 对齐**
   修复语音通话中声称已切换会话但界面未动的不同步问题，统一显示处理后的请求而非原始口述文本。

5. **[#58587](https://github.com/anomalyco/opencode/pull/58587)（已合并）语音通话浮动面板**
   语音通话移入右下角浮动小面板，输入框在通话中保持可用（打字、发送、steer、队列）。实验特性开关控制。

6. **[#58597](https://github.com/anomalyco/opencode/pull/58597) 修复分支列表显示裸 remote 名**
   分支选择器不再显示 `origin` 之类裸远程名，且搜索现在能命中远程分支（改用 `%(refname:lstrip=2)` 格式化）。

7. **[#58595](https://github.com/anomalyco/opencode/pull/58595) 问题答案数字键快捷选择**
   单选显示圆形键、多选显示方形复选键，数字键即选项标记，提升问答交互效率。

8. **[#56417](https://github.com/anomalyco/opencode/pull/56417) + [#56450](https://github.com/anomalyco/opencode/pull/56450) goal/todo 系列持续推进**
   堆叠在 #55744（端点）和 #54799（持久化契约）之上的 UI dock 与轮次驱动/验证，实现 #27167 原生会话目标功能。整套 PR 栈值得关注。

9. **[#54496](https://github.com/anomalyco/opencode/pull/54496) read 工具支持音视频多模态附件**
   使 `read` 能将音频和视频文件附加给多模态模型，覆盖视频（#54049）和总请求（#10531）。

10. **[#58596](https://github.com/anomalyco/opencode/pull/58596) AI 层容忍未知事件与状态**
    新增规范：未知 provider 事件/枚举不再导致请求失败，仅错误帧和畸形输入才报错，提升 provider 兼容韧性。

## 5. 功能需求趋势

- **安全沙箱与权限控制**：#2242（103 评论/80 👍）显示终端命令沙箱是呼声最高的方向，配合 #57603 的子代理权限问题，权限体系是核心诉求。
- **会话历史与检索**：跨会话内容搜索（#41354）、事件表无限增长治理（#58318）反映重度用户对历史管理能力的需求。
- **并行任务执行**：task-parallel 工具并行分发独立子任务（#47105），提升 agent 墙钟时间效率。
- **热配置/热加载**：插件、MCP、配置修改不重启会话生效（#39987）。
- **多模态扩展**：音视频输入（PR #54496）、图片粘贴修复（#58291）。
- **语音体验**：Desktop/iOS 语音通话与导航一致性是本周迭代密集区（#58591、#58587、#58567 GPT-Live 免 OpenAI key 接入）。

## 6. 开发者关注点

- **免费额度误报**：零使用/首次使用即报额度耗尽的问题批量出现，多位用户怀疑与 v2 升级相关，官方正在 triaging——若遇此问题可先检查版本并关联 #58284。
- **v1→v2 迁移风险**：API 创建的会话迁移丢消息（#58543）+ 分隔符路径问题（PR #55126 修复 #44401），升级前建议备份会话数据库。
- **企业网络环境**：HTTP 代理需正确配置 `no_proxy`（#52054）；Azure 网络抖动后需手动重启服务（#57690）。
- **资源占用与性能**：git 快照对大目录的冲击（#3176）、Desktop 文件监视器拖慢冷启动 54–203s（#58322）、事件表膨胀至 GB 级导致冻结（#58318）——核心团队今日多个 PR 正在系统性优化启动与加载路径。
- **Windows 体验**：npm 12 升级残留文本桩（#51553）、插件静默加载失败（#44367/#58574）仍是 Windows 用户的反复踩坑点。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-10-24

## 一、今日速览

Qwen Code 发布 v0.26.0 nightly 版本，包含 daemon token 持久化（serve）与发布流程修复。Managed Agent 双路径架构（#12380）完成 Stage F 交付状态核验，成为评论数最高的讨论焦点（71 条评论）。此外，两条 P1 级内存问题（TUI V8 OOM、VS Code daemon 无界堆增长）值得用户密切关注。

---

## 二、版本发布

**v0.26.0-nightly.20261023.5a0be33432**
- `feat(serve)`: daemon token 持久化（@wenshao，[PR #15023](https://github.com/QwenLM/qwen-code/pull/15023)）——配合 #14947 的连接记忆需求，是远程 daemon 使用体验的重要一步
- `fix(release)`: 覆盖所有派生的 vendored 二进制文件

---

## 三、社区热点 Issues（Top 10）

1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380) Managed Agent 双路径架构与分阶段交付提案**（71 评论）
   社区最活跃的设计讨论，作者于今日更新了基于 `main @ 5a0be33` 的 Stage F 交付核验报告，逐项核对合并提交与测试方法，交付透明度极高。

2. **[#8662](https://github.com/QwenLM/qwen-code/issues/8662) TUI 渲染层从 ink 迁移到 OpenTUI（tracking）**（34 评论）
   诊断了 ink 7 + 1037 行补丁带来的闪烁、渲染等结构性问题，是终端 UX 路线的核心工程。

3. **[#13078](https://github.com/QwenLM/qwen-code/issues/13078) 每日依赖 CVE 审计失败**（30 评论）
   自动化安全审计持续报错，可能涉及新高危漏洞或 npm audit 端点不可用，需维护者介入。

4. **[#15344](https://github.com/QwenLM/qwen-code/issues/15344) 0.26.0 TUI 在 macOS 长会话中 V8 OOM 崩溃**（P1，5 评论）
   macOS 崩溃报告确认 V8 内存耗尽，与下条共同指向内存管理薄弱环节。

5. **[#15071](https://github.com/QwenLM/qwen-code/issues/15071) VS Code companion 中 `qwen serve` daemon 堆无界增长至 4GB OOM**（P1，5 评论）
   影响日常 IDE 使用稳定性，属当前最高优先级 bug 之一。

6. **[#15052](https://github.com/QwenLM/qwen-code/issues/15052) CI：main E2E 验证在 pending run 被替换时丢失独立性**（P2，8 评论）
   与 [#14859](https://github.com/QwenLM/qwen-code/issues/14859)（runner 容量追踪）共同构成社区对 CI 可信度的持续追问。

7. **[#14947](https://github.com/QwenLM/qwen-code/issues/14947) 桌面端/Web Shell 持久化已保存的 daemon 连接并记住 token**（6 评论）
   远程 daemon 用户的刚需，今日 nightly 的 token 持久化可视为其前置工作。

8. **[#15328](https://github.com/QwenLM/qwen-code/issues/15328) headless 运行在输出被截断时以退出码 0 静默无输出**（P2，4 评论）
   非交互/自动化场景的可靠性问题，静默失败对 CI 管道尤其危险。

9. **[#15076](https://github.com/QwenLM/qwen-code/issues/15076) Managed Agent Workspace Sessions 提供 web_fetch 与 todo_write**（6 评论）
   wenshao 提出的能力补齐，对应 PR #15089 已在路上。

10. **[#15334](https://github.com/QwenLM/qwen-code/issues/15334) QQ 语音附件被丢弃：语音 CDN 域名缺失于附件白名单**（P2，4 评论）
    channel 集成的实际用户痛点，agent 收到空消息导致体验断裂。

---

## 四、重要 PR 进展（Top 10）

1. **[#15385](https://github.com/QwenLM/qwen-code/pull/15385) `/autofix-pr` 反应层：受控推送、同步、回复、重跑与 skill**（wenshao）
   对应 #15056 需求，实现监视 PR 并自动修复 CI 失败/审查意见/冲突的核心交付。

2. **[#15361](https://github.com/QwenLM/qwen-code/pull/15361) Web Shell 支持从 Git URL 创建工作区**（wenshao）
   浏览器内粘贴 clone URL、观看进度、取消，daemon 异步执行克隆。

3. **[#15405](https://github.com/QwenLM/qwen-code/pull/15405) CI：main 失败按签名拆分为独立 issue**（yiliang114）
   改进失败归因路由，减少聚合 issue 噪音。

4. **[#13902](https://github.com/QwenLM/qwen-code/pull/13902) 项目 Agent 身份与 Agent Team 投影到 ACP/daemon 协议**（yiliang114）
   多智能体协作在传输层的落地方案，subagent 帧携带 `_meta.agent` 元数据。

5. **[#15089](https://github.com/QwenLM/qwen-code/pull/15089) Managed Workspace Sessions 增加 todo_write（工具 profile v3）**（wenshao）
   通过新 profile 版本而非破坏性变更扩展工具词汇表。

6. **[#13737](https://github.com/QwenLM/qwen-code/pull/13737) rewind 以源身份解析历史轮次，否则在变更前拒绝**（yiliang114）
   会话回滚的正确性加固，防止错误授权文件恢复。

7. **[#13882](https://github.com/QwenLM/qwen-code/pull/13882) qqbot：恢复线程作用域下的按群会话隔离**（breaking fix）
   MERGEABLE、CI 全绿，仅待一次重新批准——社区已在 #15214 中催促合并决策。

8. **[#11486](https://github.com/QwenLM/qwen-code/pull/11486) `qwen update --target-version` 精确版本更新**（XIQIXIQIXIQI）
   跳过 npm 版本发现、直装指定版本，长周期开放 PR（遗留发现已拆至 #13268）。

9. **[#15030](https://github.com/QwenLM/qwen-code/pull/15030) 提升 workspace skill 安装限额，拆分传输/磁盘预算**（callmeYe）
   打破 2026-07 以来的统一硬编码限制（6 MiB / 128 文件）。

10. **[#12585](https://github.com/QwenLM/qwen-code/pull/12585) ACP 嵌入式文本资源持久化以支持 transcript 回放**（XIQIXIQIXIQI）
    有界持久化用户 prompt 内嵌 resource 块，离线转录投影同步暴露。

> CI 基建方面另有 #15274 / #15284 / #15289（sdk-java 测试锁范围收窄至缓存写回）、#15379（JUnit 原始报告保留 7 天）、#15364（web shell smoke 独立路由 ARM64，已合并）等密集改进。

---

## 五、功能需求趋势

- **Managed Agent / daemon 生态**：压倒性主线。架构提案（#12380）、K8s 运行时（#13395）、工具补齐（#15076）、连接持久化（#14947）、身份投影（#13902）全链条推进。
- **CI/CD 可信度**：main 分支独立验证（#15052、#14859）、失败签名拆分（#15405）、JUnit 报告治理（#15379、#15392）——社区（尤其 @yiliang114）对 CI 证据链的要求显著提高。
- **终端/Web UI 现代化**：ink → OpenTUI 迁移（#8662）、Web Shell 状态区简化（#15353）、Git URL 创建工作区（#15361）。
- **自动化运维命令**：`/autofix-pr`（#15056 → PR #15385）、autofix bot 接管的 deferred findings 流程日趋成熟。
- **消息渠道集成**：QQ bot 会话隔离（#13882）与语音附件（#15334）。

---

## 六、开发者关注点（痛点）

1. **内存稳定性是当前最大痛点**：两条 P1 OOM（TUI #15344、VS Code daemon #15071）+ memory 模块硬化跟进（#15277、#13207），长会话场景可靠性待解。
2. **静默失败损害自动化信任**：headless 退出码 0 无输出（#15328）、stream-json 启动期消息乱序（#15365），对脚本化/CI 用户是高风险。
3. **main 分支 CI 健康度**：多个 fault-gate 集成测试偶发失败（#14713、#15173、#15340），且 per-SHA 验证可能被并发替换吞掉（#15052）。
4. **PR 合并决策瓶颈**：#13882 等就绪 PR 长期等待人工复审/合并（#15214），人审带宽成为交付速度限制因素。
5. **安全审计链路待修复**：每日 CVE 审计连续失败（#13078），依赖漏洞可见性出现盲区。

---
*数据来源：github.com/QwenLM/qwen-code（过去 24 小时）*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（Codewhale）社区动态日报
**日期：2026-10-24 | 数据来源：github.com/Hmbown/DeepSeek-TUI（codewhale-hq/Codewhale）**

---

## 一、今日速览

过去 24 小时无新版本发布，v0.10.2 候选版仍处于修复与收敛阶段，Web 搜索链路（浏览器升级、引用校验、DeepSeek 后端测试）的多项 blocker 已关闭。社区新增三条值得关注的 issue：DeepSeek `/balance` 命令失效（#7055）、Keenable 免密钥搜索后端提案（#7056）、以及 v0.11 模型目录漂移的系统性问题（#7058）。PR 侧以 Dependabot 依赖批量升级为主，Herdr 集成 PR（#7064）也已关闭。

---

## 二、版本发布

过去 24 小时无新 Release。

---

## 三、社区热点 Issues（10 条精选）

1. **[#7055](https://github.com/codewhale-hq/Codewhale/issues/7055) `/balance` 无法查询 DeepSeek 余额** [OPEN]
   直接影响 DeepSeek 用户的日常运维体验，`/balance` 返回“请到控制台查看”，属于高频命令级故障，尚待 triage。

2. **[#6728](https://github.com/codewhale-hq/Codewhale/issues/6728) CPU 占用回归：v0.9.12 → v0.10.0 逐版恶化** [OPEN]
   FreeBSD 平台实测 idle → moderate → heavy 的性能回归，且更新至今日，是持续发酵的性能类核心问题，6 条讨论。

3. **[#7058](https://github.com/codewhale-hq/Codewhale/issues/7058) v0.11：模型目录仍可能漂移** [OPEN]
   指出 24 个未 seed 的远程 provider、不可达的非文本行、未标记的过期 pin、无定时任务四项系统性缺口，为下一版本奠定方向。

4. **[#7056](https://github.com/codewhale-hq/Codewhale/issues/7056) 新增 Keenable 免密钥搜索后端提案** [OPEN]
   第三方厂商主动提交集成请求，弥补 Firecrawl 免密钥配额耗尽（HTTP 429）后的降级路径，社区生态活跃信号。

5. **[#6969](https://github.com/codewhale-hq/Codewhale/issues/6969) 延迟工具箱驱逐策略在 prompt 缓存定价下净亏损** [OPEN]
   深度经济性分析：`ToolActivationCache`（8 names / 16 KiB）驱逐触发全前缀重填充 + 写入溢价，成本模型未纳入考量，6 条讨论。

6. **[#6925](https://github.com/codewhale-hq/Codewhale/issues/6925) ChatGPT 登录 HTTP 400 修复** [OPEN]
   0.10.2 关键修复项，已定位多余的 originator 查询参数，登录链路修复持续推进中。

7. **[#6910](https://github.com/codewhale-hq/Codewhale/issues/6910) 发布阻断：crates.io 10 MiB tarball 上限预检** [OPEN]
   v0.10.1 曾因 HTTP 413 导致 tui/cli 被困；候选版 29 个 workspace crate 已全部通过严格 no-upload 预检，发布前最后一道防线。

8. **[#6396](https://github.com/codewhale-hq/Codewhale/issues/6396) 模型目录与价格表统一权威源** [OPEN]
   创始人确认 14 项实施清单为 v0.10.2 发布硬性要求，非发布后延期项。

9. **[#7039](https://github.com/codewhale-hq/Codewhale/issues/7039) Provider 原生搜索返回未校验引用（含虚构 PR 引用）** [CLOSED]
   “错误但自信的搜索结果比没有结果更糟”——已修复，涉及子代理结论污染，可靠性建设标杆案例。

10. **[#6954](https://github.com/codewhale-hq/Codewhale/issues/6954) resume 拒绝含原始 sub-agent 交接的会话** [CLOSED]
    Engine 恢复消息与保存文档的确认机制不匹配，7 条讨论后关闭，恢复链路稳定性提升。

---

## 四、重要 PR 进展（7 条，全部已关闭）

1. **[#7064](https://github.com/codewhale-hq/Codewhale/pull/7064) TUI 向 Herdr 上报 agent 状态 / resume 命令 / 版本**
   唯一功能型 PR：使 Codewhale 成为 [Herdr](https://herdr.dev) 一等公民 agent，上报 `idle/working/blocked` 状态，无需 Herdr 侧发版。

2. **[#7060](https://github.com/codewhale-hq/Codewhale/pull/7060) serde_json 1.0.151 → 1.0.154**
   含 no_std 下 preserve_order 支持等改进。

3. **[#7059](https://github.com/codewhale-hq/Codewhale/pull/7059) syn 3.0.6 → 3.0.9**
   新增 `Punctuated::retain` 等 API。

4. **[#7062](https://github.com/codewhale-hq/Codewhale/pull/7062) sha2 0.11.0 → 0.11.1**（RustCrypto 依赖升级）

5. **[#7061](https://github.com/codewhale-hq/Codewhale/pull/7061) hyper-util 0.1.20 → 0.1.21**（HTTP 基础设施依赖升级）

6. **[#7063](https://github.com/codewhale-hq/Codewhale/pull/7063) rust-i18n-support 4.2.2 → 4.2.4**（国际化依赖升级）

7. **[#7057](https://github.com/codewhale-hq/Codewhale/pull/7057) 文档示例 zod 4.2.1 → 4.6.7**（npm_and_yarn 组，跨版本大幅升级）

> 本期 PR 以 Dependabot 维护型升级为主（6/7），无待审功能 PR 积压。

---

## 五、功能需求趋势

- **Web 搜索链路可靠性**：本周最密集的修复方向——浏览器自动升级（#7038）、引用校验（#7039）、后端测试补齐（#7037）、免密钥后端扩展（#7056），已基本收官。
- **模型目录与定价治理**：单一权威源（#6396）、定时刷新防漂移（#7058），从一次性修复转向机制化。
- **Provider 兼容与登录**：ChatGPT 登录修复（#6925）、DeepSeek 余额查询（#7055）、DeepSeek 搜索后端已验证可用。
- **成本感知设计**：#6969 提出 prompt 缓存经济模型应进入工具箱驱逐决策，反映社区对 token 成本精细化管理的诉求。
- **生态互操作**：Herdr 集成（#7064）、MCP 稳定性（#7035）表明多 agent 协作场景需求上升。

---

## 六、开发者关注点

- **性能回归是最大痛点**：CPU 占用从 idle 到 heavy 的逐版恶化（#6728）已持续近一个月未解，FreeBSD/Rust 二进制级分析详尽，建议优先 triage。
- **v0.10.2 发布纪律**：打包上限预检（#6910）、14 项模型目录清单（#6396）表明项目在用发布阻断机制倒逼质量，发布临近。
- **长会话可观测性**：run 卡片输出折叠、僵尸进程不可停止（#6931）、workspace 级 flock 锁导致无法并行 resume（#7042）——多会话/长会话工作流仍是摩擦点。
- **信任与正确性**：搜索引用伪造问题（#7039）的修复思路（未验证即不返回）值得其他 agent 工具借鉴。
- **依赖维护健康**：Dependabot 全部即时处理关闭，依赖卫生状况良好。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-10-24

## 一、今日速览

今日无新版本发布，但社区活跃度极高：过去 24 小时有 77 条 Issue 更新、29 条 PR 更新。修复类 PR 密集合入，覆盖 ARM32 架构支持、UTF-8 编码边界、代理 URL 校验等多个痛点问题；openai-codex 连接可靠性（#4945，87 条评论）仍是讨论热度最高的长期议题。

---

## 二、版本发布

过去 24 小时无新 Release。

---

## 三、社区热点 Issues（Top 10）

1. **[#4945](https://github.com/earendil-works/pi/issues/4945) openai-codex 连接可靠性问题**（OPEN · 87 评论 · 👍 35）
 最热门长线议题：`gpt-5.5` 交互时 TUI 卡在 `Working...`，无流式输出、无工具调用、无报错，只能按 Escape 恢复。已持续数月，标记 inprogress，是社区最关注的稳定性问题。

2. **[#10063](https://github.com/earendil-works/pi/issues/10063) Anthropic OAuth 对 Opus 5/5.5 和 Fable 5 返回 `Invalid effort level`**（CLOSED · P0）
 OAuth 直连请求在所有思考级别下均返回 400，影响多个 Claude 新模型，属高优先级阻断性 Bug，已修复关闭。

3. **[#10074](https://github.com/earendil-works/pi/issues/10074) Claude 工具调用静默损坏非 ASCII 内容**（OPEN · 11 评论）
 韩文文件编辑时 `\uXXXX` 转义损坏导致文件损坏且被静默接受，作者追踪三周，涉及数据安全，值得高度重视。

4. **[#9265](https://github.com/earendil-works/pi/issues/9265) openai-completions 流式处理 O(n²) 重解析冻结事件循环**（OPEN · inprogress）
 每个 delta 重新解析整个累积的工具调用 JSON，在多 agent 单进程嵌入场景下会造成严重性能问题。

5. **[#11202](https://github.com/earendil-works/pi/issues/11202) codex compaction 重试不回退到 SSE**（OPEN · inprogress）
 WebSocket 中途断开后耗尽所有重试也不尝试 SSE 降级，`auto` 传输模式下的自动压缩失败。

6. **[#10416](https://github.com/earendil-works/pi/issues/10416) 支持 Stateless MCP 2026-07-28 最新规范**（OPEN · 👍 3）
 社区希望 pi-mcp 双轨支持最新 MCP 规范（stdio + Streamable HTTP），协议兼容性是明确需求方向。

7. **[#11267](https://github.com/earendil-works/pi/issues/11267) 仅含自定义条目的会话不生成会话文件**（OPEN）
 `#10000` 修复的边界回归：`custom_message` 条目未被视作对话内容，会话文件缺失。

8. **[#11287](https://github.com/earendil-works/pi/issues/11287)（CLOSED） mid-session 设置重载清空扩展 API provider 导致崩溃**
 文件监听器触发 settings.json 重写时，扩展注册的 provider 被清除，进程以 uncaughtException 退出。扩展生态健壮性问题的典型代表。

9. **[#11209](https://github.com/earendil-works/pi/issues/11209)（CLOSED） ARM32 环境下载 x86-64 的 fd/rg 二进制**
 `tools-manager.ts` 将非 arm64 架构一律映射到 x86_64，ARMv7 设备直接 `Exec format error`。已由 PR #11343 修复。

10. **[#11112](https://github.com/earendil-works/pi/issues/11112) 允许 `prepareArguments` 修复解析失败的工具参数**（OPEN）
 Claude Sonnet 5 有时写出 `"oldText">` 这类畸形 JSON，目前被静默转成空参数。请求扩展 API 提供修复钩子，反映扩展 API 能力诉求。

---

## 四、重要 PR 进展（Top 10）

1. **[#11355](https://github.com/earendil-works/pi/pull/11355) 支持 Kimi Coding K3.1 Pro 模型**（OPEN · 今日新增）
 从 effort 元数据派生 K3 wire 预设，无需维护模型 ID 列表；K3.1 Pro 系列支持 low/high/max reasoning effort，动态加载的工具不进入顶层工具列表。

2. **[#11325](https://github.com/earendil-works/pi/pull/11325)（CLOSED） Gemini 工具 schema 中将 const 转为 enum**
 TypeBox 生成的 `const` 被 Gemini 忽略导致模型输出任意值；现统一转为 `enum`，提升 Google 系适配器的参数校验可靠性。

3. **[#11343](https://github.com/earendil-works/pi/pull/11343)（CLOSED） 跳过不支持架构的 fd/rg 下载**
 修复 #11209：仅 `x64`/`arm64` 映射正确目标，其他架构不再下载无法执行的二进制。

4. **[#11341](https://github.com/earendil-works/pi/pull/11341)（CLOSED） 不可用代理 URL 给出明确错误**
 `socks5h://` 等不支持的代理不再以裸 Node 栈崩溃，改为清晰的启动错误提示（修复 #11195 场景）。

5. **[#11326](https://github.com/earendil-works/pi/pull/11326)（CLOSED） 修复 pi.exec 跨 UTF-8 chunk 边界解码**
 多字节字符被 chunk 切断后产生 U+FFFD（如 “你好”→"���好"），引入 StringDecoder 正确处理，对中文用户尤为关键。

6. **[#11288](https://github.com/earendil-works/pi/pull/11288)（CLOSED） 会话 fork 通过单一 fd 写入**
 原实现每条 entry 一次 `appendFileSync`，3000 条会话需开关文件 3000 次；网络文件系统等场景性能大幅提升。

7. **[#11347](https://github.com/earendil-works/pi/pull/11347)（CLOSED） 模型选择器显示自定义模型名**
 关闭 #5916：`models.json` 中重命名的覆盖模型现在在 `/model` 列表中可见。

8. **[#11340](https://github.com/earendil-works/pi/pull/11340)（CLOSED） 全屏双击选区采用 iTerm2 词字符规则**
 `~`、`+` 等字符纳入词边界，双击路径可完整选中（修复 #10980）。

9. **[#11352](https://github.com/earendil-works/pi/pull/11352)（CLOSED） 修正 changelog 规则：面向 main 的工作必须携带 changelog**
 修复了 feature branch 经 PR 合入时跳过 changelog 的流程漏洞，配套 PR #11351 回填了 6 条缺失记录。

10. **[#11348](https://github.com/earendil-works/pi/pull/11348)（OPEN） 统一处理所有滚动列表的选择翻页键**
 修复 #7629：`tui.select.pageUp/pageDown` 此前仅部分列表生效，现统一支持。

---

## 五、功能需求趋势

- **新模型适配持续高频**：Kimi Coding K3.1 Pro（#11355）、Bedrock GLM-5.3 reasoning effort（#11354）等，模型生态跟进是最活跃的贡献方向。
- **MCP 协议演进**：Stateless MCP 2026-07-28 支持（#10416）、elicitation 支持（#10274）、HTTP 消息大小限制（#11335），社区对 MCP 兼容性要求不断提高。
- **传输层健壮性**：openai-codex 连接稳定性（#4945）、WebSocket→SSE 降级（#11202）、SOCKS 代理支持（#11195）。
- **扩展 API 能力增强**：`session_ready` / `session_before_shutdown` 生命周期事件、参数修复钩子（#11112）、provider 持久化（#11287）。
- **性能优化**：O(n²) 流式解析（#9265）、大 session 渲染（#9807）、会话文件 IO（#11288）。
- **跨平台与终端兼容**：ARM32（#11209）、Windows+Zellij 鼠标滚轮（#9656）、Orca 终端图像支持（#9329）、非 ASCII 数据完整性（#10074、#11326）。

---

## 六、开发者关注点

1. **连接可靠性是最大痛点**：openai-codex 相关问题（#4945、#11202）长期占据讨论榜首，静默卡死无报错的体验最招致抱怨。
2. **数据安全与正确性**：非 ASCII 内容静默损坏（#10074）、畸形 JSON 参数被静默接受（#11112），用户要求“要么正确执行、要么明确报错”。
3. **启动即崩的场景仍多**：坏包安装裸栈崩溃（#11088）、无效代理 URL（#11195）、设置重载清空 provider（#11287）——错误处理兜底是持续改进方向。
4. **企业/组织登录受阻**：ChatGPT Business 的 `3p_delegated_access_policy_denied`（#10953、#11033）影响多用户，legacy 登录仍可用但非长久之计。
5. **大 session 与嵌入场景性能**：800+ 消息的渲染延迟、单进程多 agent 的事件循环冻结，重度用户的核心诉求。
6. **非主流环境支持**：ARM32、Nix（#10528）、各类终端复用器（Zellij/tmux）和终端模拟器的兼容性问题持续涌现。

</details>

<details>
<summary><strong>oh-my-pi</strong> — <a href="https://github.com/can1357/oh-my-pi">can1357/oh-my-pi</a></summary>

# oh-my-pi 社区动态日报 · 2026-10-24

## 1. 今日速览

今日无新版本发布，但社区依旧活跃：过去 24 小时更新了 47 条 Issue 和 152 条 PR。热点集中在 Windows 原生栈溢出（#16857）、多个 provider 计费/目录错误（#16755、#16851、#16875）以及一批来自 @will-bogusz 的高质量桌面自动化（computer tool）改进 PR。异步任务/进度投递系列 PR（#9369–#9374）持续推进，接近合入。

## 2. 版本发布

过去 24 小时无新 Release（当前最新为 omp 18.12.6，捆绑 Bun 1.4.3 存在 CVE-2026-91403 信任链问题，见 #16822）。

## 3. 社区热点 Issues

1. **#16857 Windows 栈溢出 (0xC00000FD)** — 恢复含 pending edit 调用的会话时，`pi_natives.win32-x64-baseline.node` 内无限递归（~500 相同帧）导致进程确定性崩溃。10 条评论，Windows 用户高优先级痛点。[链接](https://github.com/can1357/oh-my-pi/issues/16857)
2. **#16755 Anthropic 已退役模型仍在目录中** — `claude-3-5-sonnet-20240620` 等已下线模型仍在内置 catalog，且排在图片描述 fallback 首位，请求必然失败。9 条评论。[链接](https://github.com/can1357/oh-my-pi/issues/16755)
3. **#16851 openai-codex 远程压缩后缓存失效** — v2 compaction 将 prompt cache 钉在头部，历史被反复按未缓存输入计费，直接影响长会话成本。8 条评论。[链接](https://github.com/can1357/oh-my-pi/issues/16851)
4. **#10549 macOS tokio worker 线程空转** — shell 子系统卡死后 18 个 tokio 线程在 fcntl/close 热循环中以 1100–1650% CPU 旋转 40+ 分钟。长期未决，今日再获讨论。[链接](https://github.com/can1357/oh-my-pi/issues/10549)
5. **#10232 备用屏 transcript 模式（置底 composer）** — 👍 17，与 #11600（移植 Pi 的 fullscreen tuiMode，👍 17）共同反映 TUI 全屏滚动体验是社区最想要的功能之一。[链接](https://github.com/can1357/oh-my-pi/issues/10232)
6. **#16822 捆绑 Bun 1.4.3 信任已泄露的 eMudhra CA（CVE-2026-91403）** — 安全问题，Bun 1.4.4 已修复，社区请求尽快升级（当前标记 wontfix 引发争议）。[链接](https://github.com/can1357/oh-my-pi/issues/16822)
7. **#16104 google-antigravity 配额路由错误** — 免费账号 Argon 配额耗尽后阻断付费账号的 Gemini 请求。多账号用户的核心阻断问题。[链接](https://github.com/can1357/oh-my-pi/issues/16104)
8. **#11129 thinking-loop guard 误判** — 对结构同质的长列表/JSON 答案误判为循环，重试 10 次并向 `--mode json` 消费者重复推流；配置开关无效，仅环境变量可绕过。[链接](https://github.com/can1357/oh-my-pi/issues/11129)
9. **#16868 `omp --restore` 复活数天前废弃的 subagent** — 携带原始任务重新拉起未正确标记退出的子代理，可能造成意外消耗。[链接](https://github.com/can1357/oh-my-pi/issues/16868)
10. **#16855 `/tan` clone 丢失 vibe 工具导致缓存未命中** — 近期两个 fix（#15583、#16338）叠加后引入的回归，削弱 `/tan` 复用 prompt cache 的核心设计。[链接](https://github.com/can1357/oh-my-pi/issues/16855)

其他值得留意：#14877（advisor 无失败上限，1,753 次失败 read 烧光配额）、#16875（DeepSeek V4 Pro 价格错配，低报 4.4 倍）、#16889（ACP 两种错误同报 -32603）。

## 4. 重要 PR 进展

1. **#16921 perf: mmr_rerank_indices 增量最大相似度追踪**（review:p1）— 消除每轮全量重算 Jaccard，向量重排性能优化。[链接](https://github.com/can1357/oh-my-pi/pull/16921)
2. **#16922 perf: diff 避免中间 Vec 分配**（review:p0）— `word_join` 预计算 UTF-16 容量、`dedupe_whitespace` 去除 `.to_vec()` 堆分配。[链接](https://github.com/can1357/oh-my-pi/pull/16922)
3. **#16920 feat: grep 支持 `!glob` 排除路径** — `path=".;!vendor;!gen"` 排除目录，减少 agent 翻页 vendored 代码。[链接](https://github.com/can1357/oh-my-pi/pull/16920)
4. **#16919 fix: git guard 冲突豁免随冲突结束**（review:p1）— 堵住 guard 生效期间危险命令仍可执行的漏洞，并放行无副作用的 `git stash create`。[链接](https://github.com/can1357/oh-my-pi/pull/16919)
5. **#16916 fix: macOS 无 press 动作的元素提示 click()**（review:p0）— computer tool 在 Chrome 页面 press 失败时给出可执行建议。[链接](https://github.com/can1357/oh-my-pi/pull/16916)
6. **#16915 fix: 无标签 macOS 文本框以 placeholder 命名**（review:p0）— 提升 agent 操作原生 UI（如 Reminders）的成功率。[链接](https://github.com/can1357/oh-my-pi/pull/16915)
7. **#16917 feat: `tools.approval` 授权无人值守机器的前台控制** — VM 场景下 `computer.control.acquire` 可静默放行/拒绝。[链接](https://github.com/can1357/oh-my-pi/pull/16917)
8. **#16918 feat: 桌面任务内联文档，免先读文档** — 7 项桌面任务评测模型轮次从 1.00 降至 0.81。[链接](https://github.com/can1357/oh-my-pi/pull/16918)
9. **#9370–#9374 异步任务/进度投递系列（7 部分之 5–7）** — 有界进度流、Bash `async: "auto"` 自动转后台、TUI 折叠展示，本周密集更新，接近完成。[链接](https://github.com/can1357/oh-my-pi/pull/9370)
10. **#11938 feat: prompt-cache churn 诊断** — 基于 HMAC 指纹的 opt-in 缓存日志，关联每次请求的缓存命中，直指 #16851 一类成本问题。[链接](https://github.com/can1357/oh-my-pi/pull/11938)

另有 #16901（Kimi K3.1 Pro 定价目录）、#16866（TUI 挂起后恢复而非僵死）持续更新中。

## 5. 功能需求趋势

- **TUI 全屏体验**：#10232 / #11600（合计 👍 34），备用屏 + 置底 composer 是呼声最高的 UX 需求。
- **成本与缓存可观测**：缓存失效计费（#16851、#16845）、目录定价错误（#16755、#16875）、cache 诊断 PR #11938 —— “别多收钱”是持续主线。
- **桌面/浏览器自动化（computer tool）**：@will-bogusz 一日内提交 5 个相关 PR，项目投入明显。
- **多 provider/多账号管理**：配额路由（#16104）、模型目录时效性、Kimi K3.1 新模型接入。
- **Subagent 可靠性**：路径解析（#15906）、废弃子代理复活（#16868）、失败重试上限（#14877）。

## 6. 开发者关注点

- **稳定性**：Windows 原生崩溃（#16857、#16844 EPERM）、macOS CPU 空转（#10549）等平台级 bug 长期困扰用户。
- **成本失控风险**：缓存失效重复计费、advisor 无限失败循环烧配额，用户对“无上限重试/循环”普遍焦虑。
- **安全供应链**：捆绑 Bun 的 CA 信任问题被标 wontfix，社区对安全响应速度不满。
- **集成协议语义**：ACP 错误码区分度（#16889）、MCP instructions 丢失（#16882）影响 IDE/客户端集成方的信任。
- **回归质量**：#16855 显示近期 fix 叠加引入回归，用户开始追踪 fix 之间的相互作用。

---
*数据截至 2026-10-24 · 来源：github.com/can1357/oh-my-pi*

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

# DeepSeek Harness 社区动态日报
**日期：2026-10-24**

---

## 1. 今日速览

今日社区最重要动态是 **dsh-v0.2.1-rc.3** 候选版本发布，聚焦会话管理体验优化：新增多处「更多」菜单提升插件可发现性，并修复了草稿丢失问题。过去 24 小时内无新增 Issue 与 PR 更新，社区互动整体平稳。

---

## 2. 版本发布

### dsh-v0.2.1-rc.3

**体验优化**
- 新增左侧栏、会话视图和右侧栏的「更多」菜单，方便用户浏览和创建插件（贡献者：@Yifffan, @imccyu）
- 修复切换会话后，点击「新会话」无法找回未发送草稿的问题（贡献者：@imccyu）

**其他变更**
- DeepSeek API Key 适配器的模型列表更新方式与账号登录模式保持一致（贡献者：@LegGasai）

🔗 发布页：[github.com/deepseek-ai/deepseek-harness/releases](https://github.com/deepseek-ai/deepseek-harness/releases)

---

## 3. 社区热点 Issues

过去 24 小时内无 Issue 更新，本节今日暂无内容。

---

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新。值得注意的是，本版本发布说明中提及的三项贡献（插件菜单、草稿修复、API Key 适配器优化）对应的 PR 已随 rc.3 合入主干。

---

## 5. 功能需求趋势

基于今日 Release 内容可观察到以下方向：

- **插件生态建设**：「更多」菜单的统一入口设计，表明团队正在降低插件的发现与创建门槛，插件生态是当前产品重点。
- **多接入方式一致性**：API Key 模式与账号登录模式的行为对齐，反映对多样化接入场景（个人开发者 / 企业 API 用户）的持续打磨。
- **会话与草稿可靠性**：草稿找回等细节修复，说明会话数据安全是用户高频反馈点。

---

## 6. 开发者关注点

- **草稿数据不丢失**：未发送内容在会话切换时的保留，是多端/多会话用户的核心诉求，rc.3 已响应。
- **插件开发体验**：从 UI 层面提供插件入口，暗示后续插件开发者将有更低的上手成本，值得关注后续 SDK/文档动态。
- **API Key 用户兼容性**：模型列表更新机制统一后，使用第三方接入方式的开发者升级 rc.3 时建议验证模型列表刷新行为是否符合预期。

---

*数据来源：github.com/deepseek-ai/deepseek-harness（过去 24 小时）*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*