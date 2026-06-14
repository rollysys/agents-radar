# OpenClaw 生态日报 2026-06-14

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-06-14 04:20 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 (2026-06-14)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，Issues 与 PR 更新量均达到 **500 条** 的峰值水平。社区方面，新增活跃 Issue 405 条，关闭 95 条，净增长显著，表明项目正处于快速迭代与功能扩展期。项目今日发布了 **v2026.6.8-beta.1** 和 **v2026.6.7-beta.1** 两个版本，重点优化了 Telegram、WhatsApp 和 Slack 的通道传输能力。然而，社区反馈中出现了关于 Gateway 内存泄漏的严重报告（P0 级），稳定性仍需持续关注。PR 合并速度较快，主要修复了通道层面的细节问题，但仍有大量核心修复 PR（如消息丢失预防）处于待合并状态。

## 2. 版本发布
今日连续发布了两个 Beta 版本，主要聚焦于多通道消息投递的健壮性与格式支持。

*   **v2026.6.8-beta.1**
    *   **亮点**：Telegram 通道支持更丰富的结构化文本（表格、列表、可展开引用），优化了 CLI 后端投递与富媒体边界安全性；WhatsApp 通道投递稳定性提升。
    *   **链接**：[openclaw 2026.6.8-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.6.8-beta.1)

*   **v2026.6.7-beta.1**
    *   **亮点**：Slack 通道增强了同频道最终消息的持久化；Telegram 支持可展开引用；优化了静默回复、进度草稿及分页操作结果的传输机制。
    *   **链接**：[openclaw 2026.6.7-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.6.7-beta.1)

## 3. 项目进展
今日共有 **204 个 PR 被合并或关闭**，**296 个 PR 处于待合并状态**。进展主要集中在通道集成修复与核心稳定性增强。

*   **已合并的重要修复**：
    *   **[Feishu]** 修复了 Topic 模式下输入反应定位错误的问题，确保反应正确显示在用户消息上而非主题根部 ([PR #92862](https://github.com/openclaw/openclaw/pull/92862))。
    *   **[CLI]** 修复了 `openclaw update` 命令在遇到包警告时无法继续的问题，提升了自动更新流程的鲁棒性 ([PR #91586](https://github.com/openclaw/openclaw/pull/91586))。

*   **待合并的关键 PR (高优先级)**：
    *   **[Core/Message Loss]** PR #89039 旨在修复由 `EmbeddedAttemptSessionTakeoverError` 引起的静默消息丢失问题，该修复对于多 Agent 场景至关重要 ([PR #89039](https://github.com/openclaw/openclaw/pull/89039))。
    *   **[Cron]** PR #83933 修复了手动运行 `deleteAfterRun` 定时任务会意外删除任务配置的问题，并保护了错误计数器状态 ([PR #83933](https://github.com/openclaw/openclaw/pull/83933))。
    *   **[Discord]** PR #89041 解决了 WebSocket 8.21.0 引入的接收器限制导致连接断开的问题 ([PR #89041](https://github.com/openclaw/openclaw/pull/89041))。

## 4. 社区热点
今日讨论热度最高的问题集中在**多 Agent 编排稳定性**与**系统资源管理**。

*   **[P0] Gateway 严重内存泄漏导致 OOM 崩溃**
    *   **链接**：[Issue #91588](https://github.com/openclaw/openclaw/issues/91588)
    *   **分析**：用户报告 Gateway 进程的 RSS 内存占用在数天内从 350MB 飙升至 15.5GB，最终触发系统 OOM Killer。该问题严重影响生产环境的长期运行稳定性，目前尚未有修复 PR 关联，需紧急关注。

*   **[P1] Subagent 任务结果静默丢失**
    *   **链接**：[Issue #44925](https://github.com/openclaw/openclaw/issues/44925)
    *   **分析**：多 Agent 编排场景下，子任务完成信号丢失且无重试或通知，导致主流程挂起。这反映了当前架构在异步任务容错方面的短板，社区讨论热烈（19 条评论）。

*   **[P2] gh-issues 技能存在 Prompt 注入风险**
    *   **链接**：[Issue #45740](https://github.com/openclaw/openclaw/issues/45740)
    *   **分析**：`gh-issues` 技能直接将未清洗的 GitHub Issue 内容注入 Agent 提示词，存在安全隐患。社区呼吁增加输入清洗机制，这是 AI Agent 安全性的核心诉求。

## 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，部分已有修复方案，部分尚在定位中。

*   **严重**：
    *   **Gateway 内存泄漏**：如上所述，RSS 持续增长导致服务崩溃 ([Issue #91588](https://github.com/openclaw/openclaw/issues/91588))。**状态：Open，无 Fix PR**。
    *   **会话挂起与重复发送**：当上下文压缩超时时，会话会挂起并反复发送重复消息 ([Issue #43661](https://github.com/openclaw/openclaw/issues/43661))。**状态：Open，无 Fix PR**。

*   **高优先级 (P1)**：
    *   **Steer 模式失效**：`messages.queue.mode: "steer"` 未能在 Tool 边界注入消息，导致交互逻辑受阻 ([Issue #48003](https://github.com/openclaw/openclaw/issues/48003))。
    *   **OpenAI Codex 错误泄露**：子 Agent 的 Codex 错误直接暴露在用户聊天界面 ([Issue #44910](https://github.com/openclaw/openclaw/issues/44910))。
    *   **Write Tool 缺乏追加模式**：导致定时任务覆写共享文件，造成数据丢失 ([Issue #40001](https://github.com/openclaw/openclaw/issues/40001))。

*   **已修复/有进展**：
    *   **Cron 手动运行状态破坏**：已有 PR #83933 提供修复方案 ([Issue #45494](https://github.com/openclaw/openclaw/issues/45494))。
    *   **Feishu 监控器状态泄漏**：Issue #48183 已关闭，可能已在上个版本修复。

## 6. 功能请求与路线图信号
用户对 Agent 的自主性与可观测性提出了更高要求。

*   **成本控制**：请求在网关层增加按 Agent 粒度的成本预算限制，防止预算超支 ([Issue #42475](https://github.com/openclaw/openclaw/issues/42475))。
*   **内存安全**：提议基于来源（用户指令/网页抓取/第三方技能）为 Agent 记忆打标签，防止“记忆投毒”攻击 ([Issue #7707](https://github.com/openclaw/openclaw/issues/7707))。
*   **UI 增强**：请求 Control UI 支持 MathJax/LaTeX 渲染，以更好地展示数学公式 ([Issue #42840](https://github.com/openclaw/openclaw/issues/42840))。
*   **判断**：Issue #42475 与 Issue #7707 均涉及企业级应用的核心痛点（成本与安全），建议纳入下一版本规划。UI 改进需求 #42840 社区支持度高（👍6），实现难度适中，可考虑排期。

## 7. 用户反馈摘要
从评论中提炼出的主要痛点如下：

*   **静默失败**：用户对“没有任何错误提示但功能不生效”感到沮丧，例如子 Agent 结果丢失 ([#44925](https://github.com/openclaw/openclaw/issues/44925))、媒体文件发送前丢失 ([#41744](https://github.com/openclaw/openclaw/issues/41744))。用户强烈呼吁增加更明确的错误反馈机制。
*   **通道集成细节**：飞书 和 Telegram 的集成问题频发，特别是消息路由、媒体发送和状态同步方面。今日 Release 虽有改进，但仍有大量未解决 Issue。
*   **资源管理**：除了内存泄漏，用户还反馈了“僵尸 Agent” ([#48573](https://github.com/openclaw/openclaw/issues/48573)) 和状态未清理导致的磁盘/会话膨胀问题。

## 8. 待处理积压
以下重要 Issue 长期未获解决或处于 Stale 状态，建议维护者关注：

*   **[安全] gh-issues 技能 Prompt 注入**：Issue #45740，已标记 `needs-security-review`，尚未有修复 PR。
*   **[功能] 网关级成本预算**：Issue #42475，自 3 月开启，标记 `needs-product-decision`，对于商业落地至关重要。
*   **[稳定性] Feishu 图片读取丢失**：Issue #41744，影响媒体消息投递，需尽快解决。
*   **[体验] Control UI 卡死**：Issue #45698，UI 在长时间运行后变慢甚至卡死，影响运维体验。

---

## 横向生态对比

# 2026-06-14 个人 AI 助手与智能体开源生态横向对比分析报告

## 1. 生态全景
当前个人 AI 助手与智能体开源生态正处于**从功能堆叠向稳定性与深度集成过渡**的关键阶段。头部项目（如 OpenClaw, Hermes Agent）正全力解决多通道通信、多模型适配及编排稳定性问题，显示出**企业级落地**的迫切需求；而新兴及学术项目（如 Zeroclaw, NanoBot）则致力于突破架构瓶颈，探索**记忆持久化**与**自主进化**机制。虽然项目间活跃度差异显著，但"静默失败"（Silent Failure）、"上下文管理"及"成本控制"已成为全生态共同面临的三大痛点。

## 2. 各项目活跃度对比

| 项目名称 | Issues 活跃度 | PRs 活跃度 | Release 情况 | 健康度评估 | 核心动态摘要 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 🔥 极高 (405+) | 🔥 极高 (500+ 更新) | **v2026.6.8/7-beta.1** | ⚠️ **风险预警** | 双版本发布优化多通道，但 P0 级 Gateway 内存泄漏与消息丢失问题亟待解决。 |
| **Hermes Agent** | 🔥 极高 (47+) | 🔥 高 (50+ 更新) | 无 | 🟡 中等 | Gemini/Anthropic 适配活跃，但存在严重的账单失控风险与平台兼容性问题。 |
| **IronClaw** | 🟢 平稳 | 🔥 极高 (24 PRs) | 无 | 🟢 良好 | 附件处理全链路落地，Slack 集成体验大幅优化，功能迭代速度极快。 |
| **Zeroclaw** | 🟢 较高 (26+) | 🟡 中等 (积压 45) | 无 | 🟡 中等 | 架构重构（统一引擎）落地，但 Web 端回归问题严重，PR 积压需疏通。 |
| **PicoClaw** | 🟢 平稳 | 🟢 平稳 | **Nightly v0.2.9** | 🟢 良好 | 多模态路由修复，Evolution 模式引发成本争议。 |
| **NanoBot** | 🟢 平稳 (5) | 🟢 平稳 (18) | 无 | 🟢 良好 | 记忆机制优化，TUI 与多模型支持增强，学术背景浓厚。 |
| **CoPaw** | 🟢 平稳 (8) | 🟢 平稳 (10) | 无 | 🟡 中等 | 国际化与性能优化并行，Tauri 桌面端启动慢问题凸显。 |
| **NanoClaw** | 🔵 低 (误报清理) | 🟢 平稳 (6) | 无 | 🟢 良好 | 专注基建加固（容器生命周期、Provider 扩展），无用户侧噪音。 |
| **Moltis** | 🟢 平稳 (1) | 🟢 平稳 (3) | 无 | 🟢 良好 | 聚焦 MCP 协议修复，Docker 部署体验优化。 |
| **NullClaw** | 🔵 低 (1) | 🔵 低 (1) | 无 | 🔴 危险 | 核心定时任务存在严重 Bug 且修复 PR 未合并，维护滞后。 |
| **LobsterAI** | 🔵 低 | 🔵 低 (Stale 增多) | 无 | 🔴 停滞 | 依赖兼容性断裂，大量 Issue/PR 被标记 Stale，维护停滞。 |
| *其他项目* | *无活动* | *无活动* | *无* | *- | *TinyClaw, ZeptoClaw, EasyClaw 过去 24h 无动态。* |

## 3. OpenClaw 在生态中的定位

作为生态的核心参照系，OpenClaw 展现出明显的**通道层霸主**地位，但在核心编排稳定性上正面临挑战。

*   **核心优势**：
    *   **多通道集成深度**：相比 Hermes Agent 仅关注 Telegram 或 NullClaw 依赖单一通道，OpenClaw 已构建 Telegram/WhatsApp/Slack/Feishu 全覆盖的富媒体传输网络，今日连发两版修复细节，显示出极强的工程化落地能力。
    *   **社区规模与反馈闭环**：单日 500+ 的 Issue/PR 活动量远超其他项目，具备极强的用户反馈捕获能力，但也暴露了维护压力。
*   **劣势与风险**：
    *   **资源管理短板**：Gateway 内存泄漏（P0）与消息静默丢失问题直指其底层资源调度软肋，相比之下，NanoClaw 和 NanoBot 在资源清理和错误处理上表现更为稳健。
    *   **架构臃肿隐忧**：Zeroclaw 正在进行的引擎统一 RFC 指出了多引擎冗余的问题，而 OpenClaw 繁杂的通道修复也暗示其架构可能存在“打补丁”式开发的迹象。

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与动态分析 |
| :--- | :--- | :--- |
| **记忆与上下文管理** | Zeroclaw, NanoBot, CoPaw, Hermes Agent | **从“存储”转向“认知”**。Zeroclaw 提出 "Dream Mode" 进行记忆整合；CoPaw 遇到压缩导致遗忘的痛点；NanoBot 修复了上下文丢失。社区正积极探索如何在有限 Token 下保持长期记忆与纠错能力。 |
| **静默失败治理** | OpenClaw, NullClaw, Hermes Agent, Zeroclaw | **可观测性成为刚需**。OpenClaw 的子任务丢失、NullClaw 的定时任务失效、Hermes 的恢复重放，均反映出 Agent 编排中缺乏明确的错误反馈机制，导致用户难以排查问题。 |
| **成本控制与预算** | OpenClaw, Hermes Agent, PicoClaw | **防止“自毁式”消费**。Hermes 报告恢复会话导致巨额账单；PicoClaw Evolution 模式被质疑无限消耗 Token；OpenClaw 用户请求网关级预算限制。成本可控是商业化落地的底线。 |
| **模型生态兼容** | Hermes Agent, PicoClaw, CoPaw | **拥抱多模态与多模型**。Hermes 紧急修复 Gemini 并行调用；PicoClaw 修复无视觉能力模型的幻觉。项目均在从单一模型依赖转向适配 Gemini/Claude/DeepSeek 等异构模型。 |

## 5. 差异化定位分析

*   **OpenClaw & Hermes Agent**：定位为**企业级通信枢纽**。重点在于连接人、工具与平台，核心价值在于打通 Slack/Telegram 等通信渠道，处理高并发消息投递。
*   **Zeroclaw & NanoBot**：定位为**智能体架构实验场**。关注 Agent 内核机制，如 Zeroclaw 的插件化架构与引擎统一，NanoBot 的 TUI 重构与配置系统，更偏向于极客与开发者工具。
*   **IronClaw & PicoClaw**：定位为**垂直能力增强器**。IronClaw 聚焦于文档解析与“视觉”能力；PicoClaw 聚焦于多模态路由优化，它们旨在解决特定场景下的智能体能力短板。
*   **LobsterAI & NullClaw**：目前处于**维护困境或停滞期**，技术债较重，难以跟进快速变化的生态依赖。

## 6. 社区热度与成熟度

*   **快速迭代期（高热度）**：**OpenClaw, Hermes Agent, IronClaw**。特征：Issue 量大，PR 提交频繁，版本发布快。痛点往往集中在边缘案例与集成稳定性，适合追求新特性的早期采用者。
*   **质量巩固期（中热度）**：**Zeroclaw, PicoClaw, NanoBot, CoPaw**。特征：核心功能已成型，正在进行架构重构（Zeroclaw）或基建修复。社区讨论较深，往往涉及底层逻辑变更。
*   **维护/停滞期（低热度）**：**LobsterAI, NullClaw, Moltis, NanoClaw**。特征：Issue 响应慢，核心功能 Bug 修复周期长，社区活跃度低，存在被淘汰或分叉的风险。

## 7. 值得关注的趋势信号

1.  **Agent 的“睡眠”与“反思”将成为标配**：Zeroclaw 的 Dream Mode 与 Hermes 的 Auto Dream 讨论表明，单纯的无状态响应已无法满足长期运行需求。Agent 需要具备“离线整理”能力，以优化记忆结构并降低实时推理成本。
2.  **静默失败是信任危机的源头**：多项目报告指出，Agent 在任务失败时无报错、无重试是最恶劣的用户体验。未来的竞争点将从“能做什么”转向“做不好时如何反馈”，这要求系统设计必须引入更强的状态机监控（如 NullClaw 的 use-after-free 修复）。
3.  **成本透明化迫在眉睫**：PicoClaw 的 Evolution 模式与 Hermes 的会话恢复引发的成本问题，揭示了用户对“不可控支出”的极度恐惧。未来的 Agent 产品必须在架构层面引入“预算熔断”机制，而非仅依赖用户手动监控。
4.  **MCP 协议正在成为工具调用的标准接口**：Moltis 对 MCP OAuth 的修复、IronClaw 的工具调用改进，均显示出 Model Context Protocol 正快速成为连接 Agent 与外部工具（Notion, Linear 等）的事实标准，不支持 MCP 的项目将面临生态隔离风险。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-14)

## 1. 今日速览
NanoBot 项目今日保持高度活跃，共有 18 个 PR 更新与 5 个 Issue 变动，显示出项目正处于快速迭代期。今日共有 5 个 PR 成功合并，主要聚焦于修复内存管理逻辑、WebUI 性能优化及配置系统的重构。与此同时，社区贡献力度强劲，新增 13 个待合并 PR，涵盖了终端用户界面 (TUI)、自动化管理及多模型支持等重大功能。虽然出现了针对新模型的兼容性回归问题，但社区响应迅速，修复 PR 已提交。整体来看，项目核心功能日益稳固，生态扩展步伐加快。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日合并了 5 个关键 PR，显著提升了系统的稳定性与可维护性：
*   **内存管理修复**：PR [#4326](https://github.com/HKUDS/nanobot/pull/4326) 修复了 `idleCompact` 在会话总结时丢失最新上下文的 Bug，确保模型在长对话中能正确保留纠错记录。
*   **WebUI 性能优化**：PR [#4327](https://github.com/HKUDS/nanobot/pull/4327) 解决了 WebUI 启动时因加载慢速路由导致的阻塞问题，提升了启动速度；PR [#4313](https://github.com/HKUDS/nanobot/pull/4313) 实现了 WebUI 设置与 `config.json` 的配置对等，增强了配置灵活性。
*   **安全与架构**：PR [#4098](https://github.com/HKUDS/nanobot/pull/4098) 修复了 Exec 工具的符号链接逃逸风险，并修正了 PATH 查找优先级；PR [#4314](https://github.com/HKUDS/nanobot/pull/4314) 重构了配置模式导入逻辑，消除了循环依赖。

## 4. 社区热点
*   **Ollama 支持讨论**：Issue [#193](https://github.com/HKUDS/nanobot/issues/193) 关于 Ollama API 支持的讨论今日正式关闭。该 Issue 累计获得 15 条评论，反映了社区对本地模型生态集成的强烈需求。
*   **终端交互体验革新**：PR [#4329](https://github.com/HKUDS/nanobot/pull/4329) 提议为 `nanobot agent` 新增内联交互式 TUI，支持多模态输入与会话管理，这是对现有 CLI 交互模式的重大升级，预计将受到高级用户的欢迎。
*   **多智能体编排能力**：PR [#4291](https://github.com/HKUDS/nanobot/pull/4291) 允许子智能体使用独立于父智能体的模型预设，这一功能请求响应了复杂工作流中不同任务需要不同模型能力的呼声。

## 5. Bug 与稳定性
今日报告了若干影响体验的 Bug，部分已有修复方案：
*   **高危 - Anthropic 新模型兼容性**：Issue [#4333](https://github.com/HKUDS/nanobot/issues/4333) 报告 Anthropic provider 向 `opus-4-8` 发送已弃用的 `temperature` 参数导致请求 400 错误。修复 PR [#4334](https://github.com/HKUDS/nanobot/pull/4334) 已提交。
*   **高危 - 启动崩溃**：Issue [#4322](https://github.com/HKUDS/nanobot/issues/4322) 报告合并代码后出现 `NameError: 'session_key' is not defined`，导致 Agent 启动崩溃，目前暂无合并修复，需关注。
*   **中危 - MCP 服务崩溃**：Issue [#4303](https://github.com/HKUDS/nanobot/pull/4303) 指出 MCP 服务重连时可能因垃圾回收 (GC) 问题导致崩溃，修复方案正在审查中。
*   **已修复 - 路径优先级**：Issue [#4083](https://github.com/HKUDS/nanobot/issues/4083) 指出配置的工具路径优先级低于系统路径，已通过 PR [#4098](https://github.com/HKUDS/nanobot/pull/4098) 修复。

## 6. 功能请求与路线图信号
*   **自动化管理界面**：PR [#4330](https://github.com/HKUDS/nanobot/pull/4330) 正在为 WebUI 添加自动化任务管理视图，支持列表、过滤、运行和暂停操作，预示项目正朝着“自动化 Agent 平台”方向演进。
*   **部署灵活性**：PR [#4328](https://github.com/HKUDS/nanobot/pull/4328) 提出了对反向代理子路径的支持，以及 PR [#4138](https://github.com/HKUDS/nanobot/pull/4138) 请求禁用内置文件系统工具的开关，均指向企业级私有化部署场景的优化。
*   **下一版本预期**：鉴于 TUI 和自动化管理视图的高完成度，这些功能极有可能被纳入下一个小版本更新。

## 7. 用户反馈摘要
*   **记忆机制痛点**：在 Issue [#4264](https://github.com/HKUDS/nanobot/issues/4264) 中，用户详细描述了在反复纠正模型错误时，系统记忆压缩机制导致上下文丢失的困扰。这反映了当前 LLM 记忆管理在“纠错-保留”逻辑上的普遍短板，今日的修复获得了用户认可。
*   **模型更新滞后**：用户反馈 Anthropic 新版模型 (opus-4-8, Fable) 发布后，项目代码中的兼容性检查逻辑更新不及时，导致了请求失败，用户希望对模型参数的废弃策略有更前瞻性的处理。
*   **环境配置困扰**：多个 Issues (如 [#4322](https://github.com/HKUDS/nanobot/issues/4322), [#4323](https://github.com/HKUDS/nanobot/pull/4323)) 涉及代码合并后的变量未定义或环境变量解析失败，表明部分代码重构对用户升级环境造成了一定冲击。

## 8. 待处理积压
*   **长期功能 PR 待合并**：PR [#4138](https://github.com/HKUDS/nanobot/pull/4138)（文件系统工具开关）自 6 月 1 日开启至今未合并，建议维护者确认是否有架构设计上的顾虑。
*   **回归问题需关注**：Issue [#4322](https://github.com/HKUDS/nanobot/issues/4322) 的启动崩溃问题可能影响主分支稳定性，建议优先排查并合并修复代码。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-14)

## 1. 今日速览
Zeroclaw 项目今日保持**高热度开发状态**，社区互动频繁。过去24小时内 Issues 活跃度极高（42条更新），其中新开/活跃 Issue 数量（26条）显著多于已关闭数量（16条），显示出用户需求与问题报告的持续涌入。PR 端压力较大，共有 50 条更新，其中 **45 条处于待合并状态**，仅 5 条被合并或关闭，表明代码审查队列存在积压，合并速度落后于提交速度。尽管今日无新版本发布，但多项核心架构重构 RFC 的落地（如 Agent 引擎统一）及关键 Bug 修复 PR 的提交，显示出项目正处于架构优化与稳定性攻坚阶段。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
尽管今日 PR 合并数量较少（仅 5 条合并/关闭），但多项关键 Issue 的关闭和核心 PR 的推进标志着项目架构正在发生实质性演进：

*   **架构重构落地**：Issue [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) (RFC: 统一三大 Agent 引擎) 已关闭。该 RFC 旨在消除 `run_tool_call_loop`、`turn_streamed` 与 `Agent::turn` 之间的冗余逻辑，现已通过单一 PR 实施。这是降低系统复杂度的重要里程碑。
*   **关键修复推进**：
    *   针对高优先级 Bug [#7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542)（Gateway `ask_user` 工具调用失败），社区迅速响应，PR [#7588](https://github.com/zeroclaw-labs/zeroclaw/pull/7588) 已提交修复，解决了 WebSocket 会话中工具调用通道关闭的问题。
    *   针对安全配置疑惑 Issue [#6876](https://github.com/zeroclaw-labs/zeroclaw/issues/6876)（MCP 工具权限限制）已关闭，明确了 `risk_profile.allowed_tools` 的设计意图，消除了配置层面的歧义。
*   **功能增强**：PR [#7592](https://github.com/zeroclaw-labs/zeroclaw/pull/7592) 合并了关于 Agent 委托工具的文档更新，配合 PR [#7590](https://github.com/zeroclaw-labs/zeroclaw/pull/7590)（跨风险配置委托名单），进一步完善了多 Agent 协作的安全边界。

## 4. 社区热点
今日讨论最热烈的话题集中在 AI 智能体的“自我进化”能力与底层架构扩展性上：

*   **[Feature]: Dream Mode — Periodic Memory Consolidation & Reflective Learning** ([#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849))
    *   **热度**：18 条评论，P2 优先级。
    *   **分析**：该 Issue 提出在空闲期让 AI 进入“梦想模式”，进行记忆整合与反思学习。这反映了社区对 AI Agent 从“被动响应”向“主动认知”进化的强烈渴望。讨论集中在如何安全地执行后台任务及如何优化长期记忆结构。
*   **RFC: Unify the three agent turn engines** ([#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415))
    *   **热度**：5 条评论，近期关闭。
    *   **分析**：作为架构层面的重大调整，该 RFC 的关闭引发了高级贡献者的深度复盘。统一引擎意味着未来开发者扩展 Agent 行为时将拥有更一致的接口，降低了维护成本。
*   **RFC: Native Dynamic-Library Plugin System** ([#7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420))
    *   **热度**：3 条评论，高风险标签。
    *   **分析**：提出用动态库替代现有微内核架构中的部分静态绑定，旨在解决当前插件系统的“单体痛点”。这标志着项目可能正在寻求突破 WASM 的性能或功能限制，向更原生的扩展方式演进。

## 5. Bug 与稳定性
今日报告了多个影响工作流的 S1 级（阻塞）Bug，主要集中在 Web Gateway 与桌面端：

*   **P1/S1 级严重 Bug**：
    *   **Canvas 回归问题** ([#7563](https://github.com/zeroclaw-labs/zeroclaw/issues/7563))：Web UI 的 `/canvas` 页面在 WebSocket 会话后无法加载数据，严重影响了可视化工作流。
    *   **Gateway `ask_user` 失败** ([#7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542))：WebSocket 会话中 `ask_user` 工具立即报错 "Channel closed"。**状态**：已有修复 PR [#7588](https://github.com/zeroclaw-labs/zeroclaw/pull/7588)。
    *   **macOS 应用无响应** ([#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527))：安装后无法检测权限并导致白屏或窗口消失。此问题严重影响 macOS 用户的初次体验。
*   **其他稳定性问题**：
    *   Web Dashboard 不可用 ([#7523](https://github.com/zeroclaw-labs/zeroclaw/issues/7523))，需手动构建前端。
    *   Quickstart 在非 TTY 环境下的无限重绘循环 ([#7507](https://github.com/zeroclaw-labs/zeroclaw/issues/7507))，已确认并在处理中。

## 6. 功能请求与路线图信号
结合 Issue 与 PR 动态，以下功能极有可能纳入下一阶段开发重点：

*   **多 Agent 协作增强**：Issue [#7514](https://github.com/zeroclaw-labs/zeroclaw/issues/7514) 提出的“跨风险配置委托”与 PR [#7590](https://github.com/zeroclaw-labs/zeroclaw/pull/7590) 的实现遥相呼应，表明项目正在强化 Agent 间的权限隔离与协作能力。
*   **记忆系统升级**：PR [#6693](https://github.com/zeroclaw-labs/zeroclaw/pull/6693)（Dream Mode 实现）与 Issue [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) 形成闭环。虽然 PR 尚待合并，但“周期性记忆整合”已成为 v0.8.x 或更高版本的核心卖点之一。
*   **基础设施现代化**：PR [#7558](https://github.com/zeroclaw-labs/zeroclaw/pull/7558) 提出消除安装规范的“漂移”，PR [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) 提议使用 OCI 容器仓库作为插件存储。这表明项目正在构建类似 Docker 的插件分发生态，这将大幅简化后续的工具链集成。

## 7. 用户反馈摘要
从 Issue 评论中提炼出的真实痛点如下：

*   **Web 端体验不稳定**：多位用户反馈 Web Dashboard ([#7523](https://github.com/zeroclaw-labs/zeroclaw/issues/7523)) 在安装后无法直接使用，提示 `cargo web build` 要求过高。用户期望开箱即用的 Web 界面。
*   **配置复杂性**：Issue [#7591](https://github.com/zeroclaw-labs/zeroclaw/issues/7591) 指出 `quickstart` 流程中别名错误处理不佳，导致用户需要重头再来。这反映出对新手引导流程的优化需求。
*   **渠道接入障碍**：Issue [#6223](https://github.com/zeroclaw-labs/zeroclaw/issues/6223) 显示 WhatsApp Web 渠道的 `web_fetch` 工具存在兼容性问题，虽然已有临时方案，但用户期望更原生的修复。
*   **积极信号**：用户对 **Dream Mode** 表现出极高的期待值，认为这是 Zeroclaw 区别于普通 Chatbot 的关键特性。

## 8. 待处理积压
建议维护者关注以下长期未决或高风险项目：

*   **PR 积压严重**：当前有 **45 个待合并 PR**，其中包含多个大型重构（如 PR [#7558](https://github.com/zeroclaw-labs/zeroclaw/pull/7558) 安装规范重构、PR [#6893](https://github.com/zeroclaw-labs/zeroclaw/pull/6893) 多数据库支持）。建议团队优先处理这些阻碍性 PR，以免造成分支冲突或功能滞后。
*   **生产级阻塞问题待审**：PR [#5892](https://github.com/zeroclaw-labs/zeroclaw/pull/5892) 修复了三个严重的生产级问题（vLLM tool_choice、工具调用孤儿、视觉能力），已被标记为 `stale-candidate`，急需 Review。
*   **长期悬而未决的 Bug**：Issue [#5470](https://github.com/zeroclaw-labs/zeroclaw/issues/5470) 报告了安全模式下的多重内存问题，虽已关闭且标记为 `stale`，但涉及 Memory 核心模块，建议确认是否已彻底根治。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-14)

## 1. 今日速览
Hermes Agent 今日保持着高强度的社区活跃度，过去24小时内共有 50 条 Issue 更新和 50 条 PR 更新。尽管新开/活跃的 Issue 数量 (47条) 远超关闭数量 (3条)，显示出用户反馈和需求提交的热情高涨，但也暴露了项目维护积压的压力。核心开发团队今日主要聚焦于**关键 Provider 兼容性修复**（Gemini 并行调用、Anthropic 流格式）和 **Desktop/Web 端体验优化**。整体来看，项目处于快速迭代期，但在配置健壮性和跨平台兼容性方面仍面临较多挑战。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 7 个 PR 被合并或关闭，主要集中在修复影响核心功能的 Bug 和提升系统健壮性：

*   **修复 Gemini Provider 并行工具调用解析崩溃** ([PR #36039](https://github.com/NousResearch/hermes-agent/pull/36039)):
    *   解决了 Gemini-3-Flash-Preview 在流式输出中发射 `}{` 连接的非标准 JSON 时导致 Agent 崩溃的问题 ([Issue #25333](https://github.com/NousResearch/hermes-agent/issues/25333))。这是一个关键的稳定性修复，显著提升了对 Google 模型的兼容性。
*   **增强 SSL 证书校验容错** ([PR #45681](https://github.com/NousResearch/hermes-agent/pull/45681)):
    *   在创建 Provider 客户端前主动检测损坏的 CA bundles，避免运行时抛出晦涩的 `No such file or directory` 错误，改善了自部署环境下的用户体验。
*   **优化 Anthropic 流式响应处理** ([PR #45920](https://github.com/NousResearch/hermes-agent/pull/45920)):
    *   修复了 Anthropic 模式下流数据异常时的格式回退逻辑，防止因 `IndexError` 导致的传输层崩溃。
*   **Codex 响应扫描性能优化** ([PR #45835](https://github.com/NousResearch/hermes-agent/pull/45835)):
    *   限制了对泄露工具调用的正则扫描范围，避免了对超长响应文本进行全量扫描带来的性能开销。
*   **进程等待机制优化** ([PR #45831](https://github.com/NousResearch/hermes-agent/pull/45831)):
    *   后台进程完成时立即唤醒等待者，而非依赖 1 秒轮询，显著降低了工具调用链的延迟。

## 4. 社区热点
今日讨论最热烈的话题集中在多平台支持与核心功能增强：

*   **Web UI Gateway 需求落幕** ([Issue #501](https://github.com/NousResearch/hermes-agent/issues/501)):
    *   该 Issue 创建于 3 月，今日正式关闭。作为评论数最多 (14条) 的 Issue，社区对本地 Web UI 界面的呼声极高。关闭可能意味着该功能已被纳入内部开发计划或通过其他形式（如 PR #42563 Desktop Inspector）解决。
*   **Telegram Bot API 10.1 富媒体消息支持** ([Issue #44428](https://github.com/NousResearch/hermes-agent/issues/44428), [Issue #45864](https://github.com/NousResearch/hermes-agent/issues/45864)):
    *   随着Telegram发布支持 LaTeX、表格、折叠块的 API 10.1，社区迅速提出适配需求。开发者已提交 [PR #45933](https://github.com/NousResearch/hermes-agent/pull/45933) 实现了初步支持，并讨论了因 Web 端渲染不稳定而采用 "opt-in" 策略的必要性。
*   **自动记忆整理** ([Issue #10771](https://github.com/NousResearch/hermes-agent/issues/10771)):
    *   用户强烈建议引入类似 "Auto Dream" 的机制，自动清理过期的相对日期和重复记忆，解决长期运行后 Agent 上下文膨胀的问题。

## 5. Bug 与稳定性
今日报告了多个严重影响使用的 Bug，部分已有修复方案，部分仍待解决：

### 严重
*   **会话恢复导致巨额账单风险** ([Issue #45783](https://github.com/NousResearch/hermes-agent/issues/45783)):
    *   恢复暂停会话时，Agent 会在短时间内重放数百个挂起的工具调用，导致 API 费用激增。目前无修复 PR，需紧急关注。
*   **Gemini 并行工具调用解析失败** ([Issue #25333](https://github.com/NousResearch/hermes-agent/issues/25333)):
    *   状态：**已修复** (见 PR #36039)。

### 高优先级
*   **配置别名静默失效** ([Issue #44666](https://github.com/NousResearch/hermes-agent/issues/44666)):
    *   使用 `api_key_env` 配置自定义 Provider 时被静默忽略，导致鉴权失败。
*   **子代理模型继承错误** ([Issue #31155](https://github.com/NousResearch/hermes-agent/issues/31155)):
    *   配置文件中的 `delegation.model` 被忽略，子代理强制使用父代理模型，违背了成本控制意图。
*   **中文 Windows 编码崩溃** ([Issue #45931](https://github.com/NousResearch/hermes-agent/issues/45931)):
    *   微信网关在中文 Windows (GBK) 环境下因编码问题导致启动失败，严重阻碍国内用户使用。

### 已有修复方案
*   **Desktop 目录选择器按钮消失** ([Issue #45921](https://github.com/NousResearch/hermes-agent/issues/45921)) -> 修复见 [PR #45946](https://github.com/NousResearch/hermes-agent/pull/45946)。
*   **macOS Desktop 启动崩溃** ([Issue #40187](https://github.com/NousResearch/hermes-agent/issues/40187)) -> 修复见 [PR #45942](https://github.com/NousResearch/hermes-agent/pull/45942)。

## 6. 功能请求与路线图信号
*   **原生 TUI 重构** ([PR #42922](https://github.com/NousResearch/hermes-agent/pull/42922)):
    *   开发者正尝试基于 OpenTUI 和 SolidJS 重构终端界面，以替代现有的 Ink 实现。这预示着项目将对核心交互层进行现代化升级。
*   **Planning Consultant 模式** ([Issue #19344](https://github.com/NousResearch/hermes-agent/issues/19344)):
    *   提议在复杂推理场景下，主模型可自动调用高级模型（如 Opus）进行 "咨询"，实现成本与能力的动态平衡。
*   **WhatsApp 营销模板支持** ([Issue #45935](https://github.com/NousResearch/hermes-agent/issues/45935)):
    *   企业用户强烈需要 WhatsApp Cloud API 的 Message Template 支持，以便在 24 小时窗口外主动触达客户。

## 7. 用户反馈摘要
*   **痛点：费用失控风险**：用户对 Issue #45783 反应强烈，指出在会话恢复时可能产生意外的高额费用，这反映了对 Agent 自主控制能力的信任危机。
*   **痛点：多平台兼容性**：Windows 平台的编码问题 ([Issue #45931](https://github.com/NousResearch/hermes-agent/issues/45931)) 和 Desktop 端的各种 UI 故障 ([Issue #42366](https://github.com/NousResearch/hermes-agent/issues/42366)) 暴露了项目在非 Linux 环境下的测试不足。
*   **满意度**：用户对 Gemini 修复的响应速度表示认可，同时对新版 Telegram 富媒体消息功能表现出极高的期待值。

## 8. 待处理积压
以下重要 Issue 或 PR 长期未得到有效解决或合并，建议维护者优先关注：

*   **微信 网关消息投递不可靠** ([PR #35283](https://github.com/NousResearch/hermes-agent/pull/35283)):
    *   该 PR 修复了 iLink 消息投递丢失、僵尸轮询等严重问题，已开启多日，对国内用户至关重要，建议尽快 Review 合并。
*   **Context 压缩导致会话孤儿** ([Issue #33907](https://github.com/NousResearch/hermes-agent/issues/33907)):
    *   自动压缩上下文时会生成无法被状态库索引的 "孤儿会话"，导致会话历史丢失，属于核心数据一致性问题。
*   **Usage Analytics 功能** ([PR #27533](https://github.com/NousResearch/hermes-agent/pull/27533)):
    *   添加 Provider 用量分析仪表盘，已开启一个月，用户需求明确，建议推进合并。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-14)

## 1. 今日速览
PicoClaw 项目今日保持高度活跃的开发迭代状态，发布了 `v0.2.9` 的最新 Nightly 构建版本。项目重点聚焦于提升 AI 智能体的多模态处理能力与稳定性，共处理了 7 个 PR 更新，其中 5 个已合并/关闭，显著增强了图像路由和 TTS（语音合成）功能的健壮性。社区方面，用户对开启“Evolution”模式后的 Token 消耗问题表示关切，该 Issue 目前尚在处理中。整体来看，项目正处于积极修复 Bug 并为下一版本积蓄功能的阶段。

## 2. 版本发布
- **版本号**: `nightly: Nightly Build`
- **Tag**: `v0.2.9-nightly.20260614.cf67dd38`
- **性质**: 自动化构建版本，可能存在不稳定因素。
- **变更范围**: 基于 `main` 分支构建，涵盖了今日合并的 Agent 路由修复、TTS 功能增强及代码规范修复。
- **链接**: [Release Page](https://github.com/sipeed/picoclaw/releases)

## 3. 项目进展
今日共有 **5 个 PR** 顺利合并或关闭，主要围绕 Bug 修复与功能增强：

1.  **核心多模态修复**：PR [#3117](https://github.com/sipeed/picoclaw/pull/3117) 修复了当模型不支持视觉能力时，图像描述请求产生幻觉的问题。该 PR 改进了路由逻辑，强制将媒体轮次导向配置的图像模型，而非盲目重试文本模型，显著提升了 Agent 在多模态场景下的准确性。
2.  **TTS 功能增强**：PR [#3119](https://github.com/sipeed/picoclaw/pull/3119) 引入了对 OpenRouter 语音参数覆盖的支持，并增加了自动重试回退机制，提高了语音合成接口的兼容性与稳定性。
3.  **代码健壮性提升**：PR [#3065](https://github.com/sipeed/picoclaw/pull/3065) 和 [#3066](https://github.com/sipeed/picoclaw/pull/3066) 集中修复了数据库连接和临时文件操作中忽略 `Close()` 错误的隐患，符合 Go 语言最佳实践，减少了潜在的资源泄漏风险。
4.  **国际化进展**：PR [#2935](https://github.com/sipeed/picoclaw/pull/2935)（繁体中文支持）因长期未更新被标记为 stale 关闭，提示该功能可能需要社区重新激活或重提 PR。

## 4. 社区热点
今日最受关注的 Issue 为 **[#3012](https://github.com/sipeed/picoclaw/issues/3012)**。
- **核心诉求**：用户报告在启用 "Evolution" 模式（进化模式）后，系统每分钟持续消耗 Token。这表明该功能可能存在后台循环调用或心跳检测过于频繁的问题，直接关系到用户的 API 成本，属于较高优先级的体验痛点。
- **状态**：Issue 创建于 6 月 5 日，今日有新评论，目前仍为 OPEN 状态，尚无关联修复 PR，需维护者重点关注。

## 5. Bug 与稳定性
今日修复的 Bug 主要集中在 Agent 行为与底层错误处理，新报 Bug 未解决：

- **[已修复] 图像幻觉 (严重)**：Issue [#3108](https://github.com/sipeed/picoclaw/issues/3108) 报告在使用 DeepSeek-V4-Flash 等纯文本模型时，系统仍尝试处理图像导致幻觉。已通过 PR [#3117](https://github.com/sipeed/picoclaw/pull/3117) 修复。
- **[未修复] Evolution 模式 Token 异常消耗 (严重)**：Issue [#3012](https://github.com/sipeed/picoclaw/issues/3012) 报告 Evolution 模式下的持续 Token 消耗，目前无修复 PR，建议维护者优先排查。
- **[已修复] 代码规范隐患**：修复了多处未处理的 `Close()` 错误，提升了系统在边缘情况下的稳定性 (PR [#3065](https://github.com/sipeed/picoclaw/pull/3065), [#3066](https://github.com/sipeed/picoclaw/pull/3066))。

## 6. 功能请求与路线图信号
从开放的 PR 中可以看出项目未来的迭代方向：

1.  **图像处理优化**：PR [#2964](https://github.com/sipeed/picoclaw/pull/2964) 提出了“入站图像压缩”功能，旨在解决大媒体文件导致的 Payload 过大问题。该功能一旦合并，将极大提升 PicoClaw 处理高分辨率图片的能力，降低 API 调用成本。
2.  **远程控制能力**：PR [#3118](https://github.com/sipeed/picoclaw/pull/3118) 正在添加“远程 Pico WebSocket 模式”，允许 `picoclaw agent` 通过 WebSocket 连接远程控制。这标志着 PicoClaw 正从本地工具向可分布式部署的 Agent 框架演进，扩展性显著增强。

## 7. 用户反馈摘要
- **多模态模型适配痛点**：用户在使用 OpenRouter 接入不同模型时，常遇到模型能力（如 Vision）识别不准确的问题（Issue #3108）。今日的修复 PR #3117 直接回应了这一痛点，说明项目正在加强对第三方模型 API 的兼容性适配。
- **成本控制关注**：Issue #3012 的反馈显示出用户对 AI Agent 自主运行时的“隐形成本”非常敏感，尤其是在 Evolution 这种自主模式下，用户期望有明确的资源消耗边界或监控机制。

## 8. 待处理积压
- **重要开放 PR**：
    - [Feat/image input compression #2964](https://github.com/sipeed/picoclaw/pull/2964)：已开启 17 天，功能价值高，建议尽快安排 Code Review。
    - [Add remote Pico WebSocket mode #3118](https://github.com/sipeed/picoclaw/pull/3118)：功能重大，涉及架构变更，处于 Review 阶段。
- **重要开放 Issue**：
    - [Token Consumption in Evolution #3012](https://github.com/sipeed/picoclaw/issues/3012)：涉及成本问题，建议项目组尽快确认是否为 Bug 并给出临时解决方案。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-14)

## 1. 今日速览
NanoClaw 项目今日整体呈现**基建加固与架构演进**并行的态势。虽然社区侧未见新增的有效 Issue 讨论（仅有一例误报被清理），但开发活跃度保持高位，共处理了 6 个 PR，其中 4 个核心功能 PR 已成功合并。项目重点明显转向**容器生命周期稳定性**与**Provider 扩展能力**的构建，两个仍在待合并状态的 PR 分别针对数据库日志恢复和容器健康检查进行了深度修复，显示出维护者对生产环境鲁棒性的高度重视。整体来看，项目正处于功能迭代后的稳定性打磨阶段。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 4 个 PR 顺利合并，标志着项目在核心架构层面迈出了坚实一步：

*   **持久化记忆能力落地**：PR [#2745](https://github.com/nanocoai/nanoclaw/pull/2745) 已合并，引入了 `usesMemoryScaffold` 能力，为 Provider 提供了可选的持久化记忆支架。这意味着 AI 智能体现在具备了更长周期的上下文记忆保持能力，是迈向“个人助理”角色的关键一步。
*   **SDK 升级与凭证管理**：PR [#2747](https://github.com/nanocoai/nanoclaw/pull/2747) 合并，将 `@onecli-sh/sdk` 升级至 2.2.1 版本，引入了凭证存根挂载和机器可校验的 Pins。这将简化客户端的配置流程并提升安全性。
*   **架构接缝与能力注册**：PR [#2746](https://github.com/nanocoai/nanoclaw/pull/2746) 合并，建立了 Host 端的 Provider 能力注册表。这为后续模块化解耦奠定了基础，允许 Provider 声明式地暴露其能力。
*   **运行器交互增强**：PR [#2754](https://github.com/nanocoai/nanoclaw/pull/2754) 合并，新增了 `onExchangeComplete` 钩子及斜杠命令中断功能，增强了对智能体交互流程的控制粒度。

## 4. 社区热点
今日社区讨论较为平淡，但存在一个特殊的清理事件：

*   **误报清理**：Issue [#2755](https://github.com/nanocoai/nanoclaw/issues/2755) 由用户 @eranshir 开启后迅速关闭，用户自述为“发错仓库”。这侧面反映出项目曝光度可能提升，导致新用户误入，但也意味着今日缺乏实质性的社区功能讨论或反馈。

## 5. Bug 与稳定性
今日无新增用户报告的 Bug，但在待合并的 PR 中发现了重要的**内部稳定性修复**，表明项目正在积极解决潜在的严重问题：

*   **[高危] 数据库日志损坏修复**：PR [#2750](https://github.com/nanocoai/nanoclaw/pull/2750)（待合并）针对容器被 SIGKILL 后 `outbound.db` 日志文件过时导致的损坏问题进行了修复。该问题涉及热日志轮询竞争，可能影响数据持久化的完整性，是目前优先级最高的修复项。
*   **[中危] 容器生命周期健壮性**：PR [#2732](https://github.com/nanocoai/nanoclaw/pull/2732)（待合并）修复了 Docker Desktop drvfs 环境下的崩溃循环问题，并增加了 `MAX_CONCURRENT_CONTAINERS` 限制和熔断机制，显著提升了 Host 层的稳定性。

## 6. 功能请求与路线图信号
结合今日合并的 PR 分析，项目路线图呈现出清晰的**平台化**趋势：

*   **Provider 生态构建**：通过合并 [#2745]（记忆）、[#2746]（能力注册）和 [#2754]（钩子），项目正致力于打造一个可插拔的 Provider 生态。未来的版本可能会更侧重于如何让第三方开发者方便地扩展智能体能力。
*   **基础设施硬化**：待合并的 [#2732] 和 [#2750] 显示，在扩展功能的同时，团队正在集中精力解决容器化和并发环境下的底层顽疾，预计下一版本将大幅提升生产环境的可靠性。

## 7. 用户反馈摘要
由于今日唯一的 Issue 为无效误报，缺乏直接的用户痛点反馈。但从 PR 描述中提及的“Docker Desktop drvfs staging crash-loop”和“credential-stub mounts”等细节可以推断，现有用户群体中存在**容器化部署困难**和**凭证管理繁琐**的痛点，这些问题已在近期的代码更新中得到针对性解决。

## 8. 待处理积压
今日无长期未响应的积压 Issue，但建议维护者优先关注以下两个处于 Open 状态的关键 PR，以消除稳定性隐患：

*   **PR [#2750](https://github.com/nanocoai/nanoclaw/pull/2750)**：涉及数据库核心恢复逻辑，建议尽快 Review 并合并，以防数据丢失风险。
*   **PR [#2732](https://github.com/nanocoai/nanoclaw/pull/2732)**：涉及健康审计修复，对多智能体并发场景至关重要。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 (2026-06-14)

## 1. 今日速览
NullClaw 项目今日整体活跃度适中，主要集中在关键 Bug 的修复推进上。过去 24 小时内无新版本发布，但社区针对 Agent 定时任务的核心问题提交了重要修复 PR。目前有 1 个 Issue 处于活跃讨论状态，且有 1 个待合并的 PR 正在审查中。项目今日虽然没有功能迭代，但在稳定性维护方面取得了实质性进展，显示出维护者对核心故障的快速响应机制仍在运作。

## 2. 版本发布
无。

## 3. 项目进展
今日无合并的 PR。项目进展主要体现在对核心故障的诊断与修复方案提交：
- **PR #954 [OPEN]**: 针对 Issue #941 中报告的 Agent 类型定时任务静默失败问题，提交了修复代码。该 PR 识别出导致消息无法送达的根本原因为 `OutboundMessage.channel` 指针的 **use-after-free** 问题。虽然尚未合并，但这标志着项目解决了单次定时任务无法触发消息发送的关键阻碍。

## 4. 社区热点
今日讨论焦点集中在 Agent 定时任务的可靠性上：
- **Issue #941** (评论: 7): 该 Issue 自 5 月 31 日创建以来持续活跃，今日再次引发讨论。用户反馈在使用 Agent 类型执行定时任务时，任务虽标记为完成，但实际上未启动子进程，导致 Telegram 等渠道的消息送达率为 0。这反映出用户对 NullClaw 在自动化任务执行链路上的稳定性存在担忧，特别是“静默失败”的行为严重影响了运维体验。
  - 链接: [nullclaw/nullclaw Issue #941](https://github.com/nullclaw/nullclaw/issues/941)

## 5. Bug 与稳定性
今日关注的重点为严重级别的功能性 Bug，已有对应修复 PR：

- **[严重] Agent 类型定时任务静默失败 (Issue #941)**
  - **现象**: 配置为 `job_type: "agent"` 的单次定时任务执行后，系统将其标记为完成并从 `cron.json` 移除，但未启动 Agent 子进程，导致消息未发送。
  - **根因**: PR #954 指出这是由于 `OutboundMessage.channel` 发生了 **use-after-free** 错误，导致消息通道引用失效。
  - **修复状态**: **已有修复 PR (#954)**，目前待合并。
  - 链接: [nullclaw/nullclaw Issue #941](https://github.com/nullclaw/nullclaw/issues/941) | [PR #954](https://github.com/nullclaw/nullclaw/pull/954)

## 6. 功能请求与路线图信号
今日无新增功能请求。从现有讨论推断：
- **信号**: 针对 Telegram、Mattermost 等外部通道的集成稳定性是当前路线图中的隐性优先项。PR #954 的提交表明团队正在重构消息发送的生命周期管理，未来版本预计将显著增强消息投递的可靠性。

## 7. 用户反馈摘要
从 Issue #941 的讨论中提炼出以下用户痛点：
- **静默失败不可接受**: 用户最不满的是任务被标记为“成功”但实际上未执行任何操作，导致关键通知遗漏。用户迫切需要明确的错误反馈或更健壮的执行保障。
- **依赖外部通知**: 用户高频使用 Telegram 作为交付渠道，这表明 NullClaw 被广泛用作个人通知/提醒智能体，消息通道的稳定性直接影响用户信任度。

## 8. 待处理积压
- **PR #954 需紧急合并**: 该 PR 修复了影响核心功能的 use-after-free 问题，建议维护者优先审查并合并，以尽快发布补丁版本修复用户遇到的静默失败问题。
  - 链接: [nullclaw/nullclaw PR #954](https://github.com/nullclaw/nullclaw/pull/954)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-14)

## 1. 今日速览
IronClaw 项目今日保持**极高的开发活跃度**，呈现出“功能大合并与深度修复并行”的态势。过去 24 小时内共有 **24 个 PR 更新**，其中 7 个关键 PR 顺利合并，标志着**附件处理全链路功能**正式落地。同时，开发者 @henrypark133 集中修复了 Slack 集成中的重审批循环问题，提交了多个修复 PR。虽然 Issues 列表新增了两个重构需求，但整体项目处于功能集成后的稳定性优化阶段，核心功能推进显著。

## 2. 版本发布
*今日无新版本发布。*
> 注：PR #3708 (chore: release) 仍处于 Open 状态，涉及多个包的 API 破坏性变更，预计将在当前这一波功能合并后发布。

## 3. 项目进展
今日共有 **7 个 PR 合并**，主要集中在 **#4644 附件功能栈** 的落地，标志着模型现已具备“视觉”能力（读取文档文本）。

*   **附件处理全链路打通** ([#4675](https://github.com/nearai/ironclaw/pull/4675), [#4668](https://github.com/nearai/ironclaw/pull/4668), [#4670](https://github.com/nearai/ironclaw/pull/4670), [#4672](https://github.com/nearai/ironclaw/pull/4672), [#4655](https://github.com/nearai/ironclaw/pull/4655)):
    *   **核心进展**：成功将文档提取逻辑独立为 `ironclaw_extractors` crate，并在 WebChat v2 入口实现了文件落地、引用生成及文本提取。
    *   **模型感知**：合并后，模型上下文中将包含文档的提取文本，不再仅是元数据，极大增强了 AI 处理文件的能力。
*   **依赖更新**：合并了 `tar` 依赖的安全更新 ([#4242](https://github.com/nearai/ironclaw/pull/4242))，修复了潜在的安全漏洞。

**当前聚焦（待合并 PR）：**
*   **Slack 集成修复** ([#4839](https://github.com/nearai/ironclaw/pull/4839)): 修复了“重生”调用在 Auth 恢复时丢失身份导致重复审批的严重体验问题。

## 4. 社区热点
由于今日评论数据暂缺，热点分析基于提交内容的关联性与重要性：

*   **[重点] Slack 审批循环修复** ([Issue #4847](https://github.com/nearai/ironclaw/issues/4847) & [PR #4839](https://github.com/nearai/ironclaw/pull/4839))
    *   作者 @henrypark133 提出并着手解决一个关键的 UX 痛点：当 AI 调用需要 OAuth（如 Gmail）的功能时，每次恢复运行都会重新请求审批，导致用户在一次操作中收到 4 次审批请求。这是对交互流畅性的重大改进。
*   **[重构] Resume 逻辑抽象** ([Issue #4845](https://github.com/nearai/ironclaw/issues/4845))
    *   提议提取 `resume-authority` 的共享头部逻辑，旨在消除 `resume_json` 和 `auth_resume_json` 之间的重复代码，提升代码健壮性。

## 5. Bug 与稳定性
今日报告与修复的 Bug 主要集中在 **Slack 集成** 与 **运行时稳定性**，部分已有修复 PR：

1.  **[High] Slack 重审批循环 (重复审批)**
    *   **描述**：需要 OAuth 的能力调用在恢复时未保留身份，导致用户被反复要求审批。
    *   **状态**：修复 PR [#4839](https://github.com/nearai/ironclaw/pull/4839) 已提交，待合并。
2.  **[Medium] Run “Borking” 终端错误**
    *   **描述**：运行遇到 `HostUnavailable` 或协议错误时直接“卡死”且无解释，缺乏恢复路径。
    *   **状态**：修复 PR [#4841](https://github.com/nearai/ironclaw/pull/4841) 已提交，旨在提供错误解释与重试机制。
3.  **[Medium] Workspace 工具路径错误**
    *   **描述**：裸 `workspace/...` 路径处理不当，导致嵌套错误。
    *   **状态**：修复 PR [#4846](https://github.com/nearai/ironclaw/pull/4846) 已提交。
4.  **[Ongoing] Nightly E2E 测试失败**
    *   **链接**：[Issue #4108](https://github.com/nearai/ironclaw/issues/4108)
    *   **状态**：自 5 月 27 日持续失败，CI 稳定性仍需关注。

## 6. 功能请求与路线图信号
*   **模型上下文感知增强** ([PR #4836](https://github.com/nearai/ironclaw/pull/4836)): 拟向模型提供连接通道、投递状态及运行来源信息。这将赋予模型“自我感知”能力（如知道自己正在 Slack 上运行），有助于模型做出更符合场景的决策。
*   **显式拒绝反馈** ([PR #4838](https://github.com/nearai/ironclaw/pull/4838)): 拟改变线程繁忙时的处理策略，从“排队等待”改为“显式拒绝并提示重试”。这暗示项目正在优化并发模型，倾向于更轻量的无状态交互。

## 7. 用户反馈摘要
从 Issue 和 PR 描述中可提炼出以下核心体验痛点：
*   **交互阻断**：用户在使用 Slack 集成调用 Google 等服务时，反复收到授权/审批请求，严重打断工作流（来源：[#4839](https://github.com/nearai/ironclaw/pull/4839)）。
*   **错误不透明**：运行失败时仅显示晦涩错误代码，用户（及开发者）难以理解发生了什么或如何恢复（来源：[#4841](https://github.com/nearai/ironclaw/pull/4841)）。
*   **文件处理期待**：社区（或核心开发者）对文件上传的期待已从“存储元数据”升级为“模型直接阅读文档内容”，今日合并的 PR 系列已满足此需求。

## 8. 待处理积压
*   **发布阻塞**：[PR #3708](https://github.com/nearai/ironclaw/pull/3708) (Release 0.29.1) 已开启近一个月，包含了大量 API 变更，建议在当前附件功能合并后尽快推进发布。
*   **CI 稳定性**：[Issue #4108](https://github.com/nearai/ironclaw/issues/4108) (Nightly E2E 失败) 持续时间较长，需排查是否为环境问题或测试代码陈旧。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-14)

## 1. 今日速览
过去 24 小时，LobsterAI 项目活跃度处于**低维护状态**，主要动态集中在历史遗留 Issue 和 PR 的状态更新上，且有大量内容被标记为 `[stale]`，提示项目可能正经历维护瓶颈或处于版本迭代间隙。尽管无新版本发布，但社区仍有 2 个 PR 被关闭（可能为清理过期提交），以及 3 个功能性 PR 处于待合并状态。整体来看，项目前端交互体验优化正在推进中，但核心依赖兼容性问题尚未得到官方回应。

## 2. 版本发布
**无**。近 24 小时内未发布新版本。

## 3. 项目进展
今日共有 2 个 PR 被关闭，3 个 PR 处于待合并状态，主要集中在 UI 交互优化与底层修复。

*   **已关闭 PR:**
    *   **[UI修复] Modal 交互优化**：PR [#1466](https://github.com/netease-youdao/LobsterAI/pull/1466) 修复了 MCP 服务端表单弹窗在内容过长时关闭按钮不可点击的问题，提升了复杂配置场景下的用户体验。
    *   **[体验优化] macOS 快捷键适配**：PR [#1467](https://github.com/netease-youdao/LobsterAI/pull/1467) 修正了 macOS 系统下快捷键显示为 `Ctrl` 而非 `Cmd` 的问题，符合 macOS 用户原生操作习惯。

*   **待合并 PR (关键进展):**
    *   **[核心功能] Artifacts 预览流水线**：PR [#1441](https://github.com/netease-youdao/LobsterAI/pull/1441) 旨在引入可扩展的预览流水线，支持 HTML、React 和 Mermaid。该 PR 解决了历史冲突并修复了 5 个运行时 Bug，若合并将显著增强 Agent 的内容渲染能力。
    *   **[交互优化] 技能标签布局重构**：PR [#1440](https://github.com/netease-youdao/LobsterAI/pull/1440) 将已选技能标签移至输入框顶部，解决了底部工具栏拥挤问题。
    *   **[稳定性] 技能导入校验**：PR [#1445](https://github.com/netease-youdao/LobsterAI/pull/1445) 修复了 ZIP 导入目录名异常及重复导入缺乏校验的问题，有助于提升系统稳定性。

## 4. 社区热点
今日最活跃的讨论集中在**外部依赖兼容性**与**功能逻辑缺陷**上，用户对项目的稳定性表现出较高关注度。

*   **核心依赖升级受阻**：Issue [#1443](https://github.com/netease-youdao/LobsterAI/issues/1443) 讨论热烈。用户反馈官方依赖 `openclaw` 升级至 v2026.3.24 后存在 Breaking Change，导致本地服务无法拉起。这反映了项目对上游依赖的滞后性，可能阻碍用户部署。
*   **技能管理逻辑漏洞**：Issue [#1439](https://github.com/netease-youdao/LobsterAI/issues/1439) 和 [#1442](https://github.com/netease-youdao/LobsterAI/issues/1442) 均聚焦于“技能”模块。用户指出停用技能后仍可被调用的逻辑漏洞，以及 Agent 切换后技能展示异常的 UI Bug。这表明技能管理模块目前是用户使用的重灾区。

## 5. Bug 与稳定性
今日报告的问题主要集中在功能逻辑失效与前端交互阻塞，按严重程度排序如下：

1.  **[严重] 依赖服务不可用**：Issue [#1443](https://github.com/netease-youdao/LobsterAI/issues/1443) 报告升级核心依赖后服务启动失败，涉及 Breaking Change，目前无解决方案。
2.  **[严重] 权限控制失效**：Issue [#1439](https://github.com/netease-youdao/LobsterAI/issues/1439) 指出已停用的技能在对话中仍被调用。这是逻辑层面的严重 Bug，可能导致非预期的 AI 行为。目前无对应 Fix PR。
3.  **[中等] 前端交互失效**：Issue [#1437](https://github.com/netease-youdao/LobsterAI/issues/1437) 报告定时任务创建流程阻塞，点击按钮无反应且无报错提示，严重影响该功能可用性。
4.  **[轻微] UI 状态残留**：Issue [#1442](https://github.com/netease-youdao/LobsterAI/issues/1442) 关于 Agent 切换后技能引用的显示错误，属于视觉/状态同步问题。

## 6. 功能请求与路线图信号
*   **Artifacts 支持**：从待合并 PR [#1441](https://github.com/netease-youdao/LobsterAI/pull/1441) 可以看出，项目计划支持类似 Claude Artifacts 的富文本/代码预览功能，这将是下一个版本的重要卖点。
*   **前端交互现代化**：PR [#1440](https://github.com/netease-youdao/LobsterAI/pull/1440) 的布局调整暗示项目正在寻求更清晰的人机交互界面，尤其是在多技能并发场景下。

## 7. 用户反馈摘要
*   **痛点**：用户对“沉默失败”感到沮丧（如定时任务创建无反馈、技能导入无校验）。
*   **场景**：重度依赖 Agent 进行技能编排的用户，对技能的状态同步（停用、切换）非常敏感，目前的实现未达到生产级稳定性。
*   **期待**：用户希望尽快适配上游依赖新版本，以获取最新特性或修复。

## 8. 待处理积压
当前项目存在明显的 **Stale（过期/停滞）** 趋势，大量 Issue 和 PR 处于长期未处理状态，建议维护者优先关注：

*   **[阻断级] Issue #1443**：OpenClaw 新版本适配问题，直接影响到用户能否正常部署和升级。
*   **[核心功能] PR #1441**：Artifacts 功能 PR 已提交两月有余，虽修复了冲突但仍未合并，可能阻碍了版本迭代。
*   **[逻辑修复] PR #1445**：技能重复导入校验修复，对于解决用户反馈的技能逻辑混乱问题至关重要，建议优先 Review 合并。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-06-14)

## 1. 今日速览
Moltis 项目今日整体保持中度活跃状态，社区贡献焦点集中在核心功能的错误修复与部署配置优化上。过去 24 小时内无新版本发布，但代码库活跃度较高，共产生 1 个新建 Issue 和 3 个待合并的 Pull Requests。值得注意的是，开发者 @xzavrel 针对近期 MCP OAuth 集成问题提交了修复方案，显示了社区对关键阻断性问题的快速响应能力。目前项目处于代码质量打磨与依赖维护阶段，建议维护者优先审核待合并的修复类 PR。

## 2. 版本发布
**无**。今日无新版本发布。

## 3. 项目进展
今日虽无合并记录，但待合并的 PR 显示项目正在积极修复 MCP 协议集成与 Docker 部署体验问题，具体进展如下：
*   **MCP 协议修复**：PR [#1120](https://github.com/moltis-org/moltis/pull/1120) 针对 Notion 和 Linear 等平台的 OAuth 认证失败问题提交了修复方案，通过改进 `resource_metadata` 的获取方式，有望解决社区反馈的远程 MCP 服务器连接障碍。
*   **部署体验优化**：PR [#1122](https://github.com/moltis-org/moltis/pull/1122) 解决了 Dockerfile 中 `VOLUME` 声明与绑定挂载冲突的问题，将显著改善用户在使用 Docker 部署时的配置灵活性与数据持久化体验。
*   **依赖维护**：PR [#1121](https://github.com/moltis-org/moltis/pull/1121) 完成了前端构建工具 esbuild 的版本升级（0.25.12 -> 0.28.1），有助于保持构建链的现代性与安全性。

## 4. 社区热点
今日讨论焦点主要集中在 MCP 协议集成的兼容性问题上：
*   **[Issue #1119](https://github.com/moltis-org/moltis/issues/1119)**：该 Issue 报告了在使用 Notion 和 Linear 的 MCP 服务器时，OAuth 流程因 `resource_metadata` 参数处理不当而失败。该问题直接阻碍了用户连接主流生产力工具，引发了较高关注度。开发者迅速响应并提交了对应修复 PR，体现了社区对阻断性 Bug 的重视。

## 5. Bug 与稳定性
今日报告了 1 个关键 Bug，并已关联修复 PR，具体分析如下：

*   **🔴 高优先级 | OAuth 认证失败**
    *   **描述**：Issue [#1119](https://github.com/moltis-org/moltis/issues/1119) 指出 MCP OAuth 流程在处理包含 `resource_metadata` 的 `WWW-Authenticate` 头时失败（影响范围：Notion, Linear）。
    *   **状态**：**已有修复 PR**。PR [#1120](https://github.com/moltis-org/moltis/pull/1120) 已提交，通过使用直接获取（direct fetch）方式处理 URL，等待合并。
    *   **严重程度**：严重。直接导致特定主流平台的 MCP 服务不可用。

*   **🟡 中优先级 | Docker 卷挂载冲突**
    *   **描述**：PR [#1122](https://github.com/moltis-org/moltis/pull/1122) 指出 Dockerfile 中的 `VOLUME` 声明会“遮蔽”用户手动绑定的宿主机目录，导致配置无效或数据丢失风险。
    *   **状态**：**已有修复 PR**。提议移除 Dockerfile 中的 VOLUME 声明，将控制权交由运行时配置。

## 6. 功能请求与路线图信号
*   **MCP 协议兼容性增强**：从 Issue #1119 及其修复 PR 来看，项目正在加强对 MCP（Model Context Protocol）标准的兼容性测试，特别是针对 Notion、Linear 等主流 SaaS 工具的 OAuth 实现细节。这表明项目正致力于成为更通用的 AI 智能体连接中枢，下一阶段版本可能会包含更多针对特定平台的集成测试与修复。

## 7. 用户反馈摘要
*   **集成痛点**：用户 @xzavrel 在 Issue #1119 中反馈，尝试添加 Notion 和 Linear 的 MCP 服务器时遇到 `invalid_target` 错误。这反映了用户对 Moltis 作为“统一接入层”连接外部工具的强需求，同时也暴露了当前 OAuth 实现与部分厂商特定实现之间的细微差异。
*   **部署困扰**：PR #1122 暗示了部分用户在 Docker 部署场景下遇到了配置被覆盖或无法生效的问题，用户期望更符合 Docker 最佳实践的数据持久化方案。

## 8. 待处理积压
目前所有活跃 PR 均处于 Open 状态，建议维护者关注以下积压事项：
*   **[PR #1120](https://github.com/moltis-org/moltis/pull/1120)**：涉及关键 OAuth 修复，建议优先 Review 并合并，以恢复 Notion/Linear 等关键服务的连接功能。
*   **[PR #1122](https://github.com/moltis-org/moltis/pull/1122)**：改进 Docker 部署体验，属于基础设施层面的优化，建议尽快排期合并。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-06-14)

## 1. 今日速览
CoPaw 项目（关联仓库 QwenPaw）今日保持高活跃度，社区贡献意愿强烈。过去24小时内，Issues 板块共有 8 条更新，其中 7 条为新开或活跃讨论，1 条已关闭；PR 板块更新 10 条，其中 9 条待合并，显示出社区开发者在功能增强与国际化方面的积极投入。目前暂无新版本发布，但多个累积的修复类 PR 正等待合并，预示着下一次版本更新将包含重要的稳定性修复。整体来看，项目处于功能迭代与缺陷修复并行阶段，但需关注 PR 积压审核情况。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日项目进展主要体现在功能增强与底层稳定性修复两个方面，共有 1 个 PR 关闭/合并（#2498），另有 9 个 PR 待合并：

*   **功能增强**：
    *   **国际化支持**：社区贡献者提交了越南语界面支持 PR ([#5175](https://github.com/agentscope-ai/QwenPaw/pull/5175))，响应了 Issue [#5169](https://github.com/agentscope-ai/QwenPaw/issues/5169) 的需求，进一步完善了多语言生态。
    *   **前端体验优化**：新增会话列表按标题过滤功能 ([#5178](https://github.com/agentscope-ai/QwenPaw/pull/5178))，并修复了审批命令文本过长导致的水平溢出问题 ([#5176](https://github.com/agentscope-ai/QwenPaw/pull/5176))。
    *   **Agent 创建逻辑修复**：PR [#2498](https://github.com/agentscope-ai/QwenPaw/pull/2498) 于今日关闭，该修复解决了创建 Agent 时语言选择未跟随控制台设置的问题，提升了用户体验一致性。

*   **底层稳定性修复**：
    *   **性能优化**：提交了针对 Agent 列表接口的性能优化 PR ([#5170](https://github.com/agentscope-ai/QwenPaw/pull/5170))，通过缓存 PROFILE.md 读取操作解决多 Agent 场景下的性能瓶颈。
    *   **健壮性增强**：多个修复 PR 正在待合并状态，包括修复 `llama.cpp` 版本号解析兼容性 ([#5035](https://github.com/agentscope-ai/QwenPaw/pull/5035))、Linux 浏览器检测空指针异常 ([#5037](https://github.com/agentscope-ai/QwenPaw/pull/5037))、备份机制容错 ([#5041](https://github.com/agentscope-ai/QwenPaw/pull/5041)) 及定时任务加载容错 ([#5040](https://github.com/agentscope-ai/QwenPaw/pull/5040))。

## 4. 社区热点
今日讨论最活跃的议题主要集中在外部模型接入与桌面端性能问题：

*   **Kimi API 接入需求强烈**：Issue [#5156](https://github.com/agentscope-ai/QwenPaw/issues/5156) 引发了较多讨论。用户希望支持 `kimi-for-coding` 或将其加入白名单，以便利用已有的订阅套餐。这反映了用户希望打破单一 API 限制，复用现有付费资源的强烈诉求。
*   **Tauri 桌面端启动慢**：Issue [#5047](https://github.com/agentscope-ai/QwenPaw/issues/5047) 反映了 Windows 端从 Python 打包迁移至 Tauri 后，启动时间从几分钟激增至十几分钟且常无响应。这是一个影响桌面端用户体验的关键回归问题，需引起重视。

## 5. Bug 与稳定性
今日报告了多个影响使用体验的 Bug，部分已有对应修复 PR：

*   **严重**：
    *   **上下文压缩导致信息丢失**：Issue [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) 指出，当人设文件 Token 超过阈值时，压缩机制会将上下文清空，导致 Agent 任务中断。*暂无 Fix PR*。
    *   **钉钉 Channel 会话丢失**：Issue [#5177](https://github.com/agentscope-ai/QwenPaw/issues/5177) 报告钉钉回复正常但前端控制台无会话记录，影响多渠道监控。*暂无 Fix PR*。

*   **中等**：
    *   **定时任务与心跳限制**：Issue [#5174](https://github.com/agentscope-ai/QwenPaw/issues/5174) 讨论了 Cron Agent 无法写文件及心跳 Agent 执行不稳定的问题，疑似机制限制。
    *   **聊天响应卡死**：Issue [#5172](https://github.com/agentscope-ai/QwenPaw/issues/5172) 报告闲置后再次对话会无限等待，需手动停止。该 Issue 已关闭，可能在近期提交中修复或需进一步验证。

*   **已有修复 PR 的 Bug**：
    *   空消息列表导致的 IndexError ([#5038](https://github.com/agentscope-ai/QwenPaw/pull/5038))。
    *   备份过程中遇到不可读文件导致整体失败 ([#5041](https://github.com/agentscope-ai/QwenPaw/pull/5041))。

## 6. 功能请求与路线图信号
*   **国际化扩展**：越南语支持请求 ([#5169](https://github.com/agentscope-ai/QwenPaw/issues/5169)) 已迅速转化为 PR ([#5175](https://github.com/agentscope-ai/QwenPaw/pull/5175))，预计将很快合入主分支。
*   **模型生态接入**：用户对非官方 API 接入（如 Kimi）的需求明确，建议项目后续考虑增加更灵活的 Provider 配置或白名单机制，以适应多样化的付费订阅场景。

## 7. 用户反馈摘要
*   **痛点**：Windows 桌面端 Tauri 版本的启动性能问题严重（#5047），严重影响了升级用户的体验。
*   **痛点**：上下文压缩策略过于激进，缺乏保底机制，导致 Agent "失忆"（#5171）。
*   **满意点**：社区对新功能（如越南语支持、会话过滤）的响应速度较快，First-time contributors 活跃度高，显示出项目良好的开源氛围。

## 8. 待处理积压
*   **PR 审核积压**：目前有 6 个处于 "Under Review" 或 "Open" 状态的技术性修复 PR（如 #5035, #5037, #5038 等）已停留约 5 天（自 06-09 开启），建议维护者尽快合并以解决潜在隐患。
*   **桌面端性能问题**：Issue [#5047](https://github.com/agentscope-ai/QwenPaw/issues/5047) 虽有讨论但尚未有明确的修复 PR 提交，需持续关注其对 Windows 用户留存的影响。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*