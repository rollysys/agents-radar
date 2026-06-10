# OpenClaw 生态日报 2026-06-10

> Issues: 467 | PRs: 492 | 覆盖项目: 14 个 | 生成时间: 2026-06-10 03:58 UTC

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

# OpenClaw 项目动态日报 (2026-06-10)

## 1. 今日速览
OpenClaw 项目今日保持极高活跃度，共处理 **467 条 Issues** 和 **492 条 PRs**，并发布了 **v2026.6.5 正式版与 Beta 版**。核心更新集中在优化模型推理输出的隐私保护（防止 thinking 泄露）与增强 MCP 工具的多媒体处理能力。社区关注点聚焦于多渠道消息路由的稳定性、GPT-5 系列模型的适配问题以及沙箱环境的安全性配置。整体来看，项目正处于快速迭代期，修复了大量 Session 与消息投递相关的回归问题，但在复杂环境下的 Agent 状态同步方面仍存在较多挑战。

## 2. 版本发布
OpenClaw 今日发布了 **v2026.6.5** 和 **v2026.6.5-beta.6**，主要亮点如下：

- **隐私与输出优化**：QQBot 适配器现在会自动剥离模型推理过程中的 `<thinking>` 脚手架内容，防止原始推理文本泄露到用户回复中 ([#89913](https://github.com/openclaw/openclaw/issues/89913), [#90132](https://github.com/openclaw/openclaw/issues/90132))。
- **MCP 工具增强**：MCP 工具结果处理增加了对 `resource_link`、`resource`、`audio` 及畸形图片等格式的强制转换与容错处理，提升了多模态交互的健壮性。
- **更新建议**：对于使用 QQBot 或 MCP 工具链的用户，建议尽快升级至 v2026.6.5 以获得更安全的输出过滤和更稳定的多媒体支持。

## 3. 项目进展
今日共有 **126 个 PR 合并或关闭**，主要进展集中在修复核心调度逻辑与多渠道适配：

- **Codex 记忆召回修复**：PR [#91813](https://github.com/openclaw/openclaw/pull/91813) 修复了 Codex 环境下从插件工具恢复记忆的功能，解决了原生记忆召回中断的问题。
- **沙箱路径隔离**：PR [#91791](https://github.com/openclaw/openclaw/pull/91791) 修复了 Docker/SSH 沙箱启动时的路径处理，强制使用沙箱内的技能路径，防止回退到宿主机路径，增强了隔离安全性。
- **WebUI 体验优化**：PR [#91810](https://github.com/openclaw/openclaw/pull/91810) 解决了延迟持久化 thinking 导致的聊天历史重载问题，确保会话结束后的消息状态显示正确。
- **文档与依赖维护**：更新了插件验证指南 ([#91819](https://github.com/openclaw/openclaw/pull/91819)) 并升级了 Docker builder 依赖 ([#91666](https://github.com/openclaw/openclaw/pull/91666))。

## 4. 社区热点
今日社区讨论最热烈的问题集中在**消息路由错误**与**新模型兼容性**：

- **[Issue #25592](https://github.com/openclaw/openclaw/issues/25592) [Diamond Lobster]**：**工具调用间的文本泄露问题**。社区长期关注 Agent 在工具调用间隙产生的内部文本（如错误处理、思考过程）错误地发送到用户通道（Slack/iMessage 等）。这被视为严重的 UX 与安全问题，目前仍在寻求维护者决策。
- **[Issue #90083](https://github.com/openclaw/openclaw/issues/90083) [Closed]**：**OpenAI GPT-5.4/5.5 传输失败**。用户在升级到 2026.6.1 后遇到 `invalid_provider_content_type` 错误。此问题已关闭，表明可能已在最新版本中修复或有临时解决方案。
- **[Issue #32296](https://github.com/openclaw/openclaw/issues/32296)**：**Agent 回复错位**。Agent 回复了上一条消息而非当前消息，导致会话上下文混淆。这反映了 Session 状态管理的复杂性，引发了大量关于上下文注入时机的讨论。
- **[Issue #10659](https://github.com/openclaw/openclaw/issues/10659)**：**掩码密钥功能请求**。用户强烈需求一种机制，允许 Agent 使用 API Key 而无法“看到”明文，以防提示词注入攻击窃取凭证。

## 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，特别是回归问题较为突出：

- **[P1 回归] Codex 回合完成停顿** ([Issue #88312](https://github.com/openclaw/openclaw/issues/88312))：在 2026.5.27 版本后，Codex app-server 在多工具调用回合中经常过早停止，导致任务无法完成。目前标记为回归问题。
- **[P1 稳定性] Windows 本地模型阻塞事件循环** ([Issue #86599](https://github.com/openclaw/openclaw/issues/86599))：在 Windows Beta 版上，本地模型推理调用阻塞了 Gateway 事件循环，导致简单请求耗时极长（约 4 分钟）。
- **[P1 消息丢失] Matrix 线程回复错乱** ([Issue #87307](https://github.com/openclaw/openclaw/issues/87307))：升级后 Matrix 渠道的线程回复被降级为普通回复，且 `/status` 等命令静默。
- **[P1 安全] 工具调用间文本泄露** ([Issue #25592](https://github.com/openclaw/openclaw/issues/25592))：如上文所述，内部处理文本错误发送给用户，涉及安全风险。

## 6. 功能请求与路线图信号
- **动态模型发现** ([Issue #10687](https://github.com/openclaw/openclaw/issues/10687))：用户请求支持 OpenRouter 等快速更新目录的提供商动态模型发现，不再依赖静态配置。PR [#91031](https://github.com/openclaw/openclaw/pull/91031) 已尝试添加 OpenRouter OAuth 登录，相关生态整合正在进行。
- **执行审批黑名单** ([Issue #6615](https://github.com/openclaw/openclaw/issues/6615))：请求支持“允许所有命令，仅拦截特定危险命令（如 `gog gmail send`）”的策略，以平衡自动化与安全性。
- **配置增强**：PR [#87771](https://github.com/openclaw/openclaw/pull/87771) 提议增加 `$includeText` 指令，允许在配置中直接注入长文本（如 System Prompt），减少文件碎片化，这与 Issue #53638 提到的渠道级模型配置请求相呼应。

## 7. 用户反馈摘要
- **痛点：上下文一致性**：用户频繁抱怨 Agent “失忆”或回复错位（回复上一条消息），特别是在长会话或心跳检测触发后。
- **痛点：沙箱与权限**：Docker 环境下的文件权限和挂载问题仍是阻碍部署的主要障碍，特别是在多用户场景下文件权限被重置的问题 ([Issue #56263](https://github.com/openclaw/openclaw/issues/56263))。
- **认可：安全特性**：社区对密钥掩码和新版 `<thinking>` 过滤功能表示高度认可，认为这是迈向生产可用性的关键一步。
- **场景：多模型切换**：大量反馈涉及 GPT-5.x、Claude 系列及本地模型的适配细节，显示 OpenClaw 被广泛用于多模型聚合场景。

## 8. 待处理积压
以下重要 Issue 长期未获解决或处于开放状态，需维护者关注：

- **Issue #25592 (工具调用间文本泄露)**：自 2026-02-24 开放至今，标记为 P1 且涉及安全影响，虽已有讨论但尚无明确修复 PR 合并。
- **Issue #54253 (RISC-V64 支持)**：RISC-V 架构上的运行错误报告已积压近三个月，影响项目在边缘计算场景的部署。
- **Issue #10659 (掩码密钥)**：高关注度功能请求，涉及核心安全架构，目前状态为 "needs-product-decision"，等待团队决策。

---

## 横向生态对比

# 2026-06-10 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正处于从**功能堆砌向架构重构与生产级稳定性演进**的关键时期。头部项目正集中攻坚**GPT-5.x 系列模型适配**与**上下文/记忆管理**的复杂性难题，同时**隐私安全**（如 Thinking 泄露、权限隔离）成为新的关注焦点。多模态工具链的标准化和多渠道接入的稳定性已成为区分项目成熟度的分水岭。

## 2. 各项目活跃度对比

| 项目名称 | Issues 活跃度 | PRs 活跃度 | Release 情况 | 健康度/状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 高 (467) | 高 (492) | **v2026.6.5** (正式版) | **极高活跃**。快速迭代修复回归问题，社区反馈热烈，处于功能密集发布期。 |
| **NanoBot** | 中 | 高 (27 更新, 12 合并) | 无 | **架构演进**。聚焦核心重构（钩子系统），代码质量提升明显，积压处理高效。 |
| **Zeroclaw** | 高 (50+) | 高 (50+) | 无 | **高负债期**。Issue 积压严重，PR 积压 47 个，开发节奏快但维护压力大。 |
| **Hermes Agent**| 极高 (50 新增) | 中 (50 更新, 2 合并) | 无 | **社区活跃/维护滞后**。用户反馈激增但 PR 合并率极低，跨平台稳定性堪忧。 |
| **PicoClaw** | 高 (安全审计) | 中 (11 待合并) | **v0.2.9-nightly** | **安全加固**。遭遇高强度安全审计，漏洞修复紧迫，稳定性受挑战。 |
| **NanoClaw** | 低 (1) | 高 (39, 大量关闭) | 无 | **清理维护**。大规模关闭积压 PR，收缩战线，处于技术债清理阶段。 |
| **NullClaw** | 中 (4) | 高 (7 合并) | 无 | **稳健迭代**。修复关键 Bug，合并跨实例记忆同步功能，维护质量高。 |
| **IronClaw** | 中 | 高 (47 待合并积压) | 无 (准备 0.29.1) | **重构冲刺**。"Reborn" 架构落地前夕，PR 积压严重，集成测试压力大。 |
| **LobsterAI** | 低 | 中 (4 合并) | 无 | **功能补齐**。聚焦数据备份与任务通知，稳步推进。 |
| **CoPaw** | 高 (39) | 高 (36, 17 合并) | **v1.1.11-beta.2** | **快速演进**。解决率高达 46%，架构迁移讨论热烈，迭代效率高。 |
| **Moltis** | 低 (1) | 无 | 无 | **低活跃/停滞**。仅有个别配置问题反馈。 |

## 3. OpenClaw 在生态中的定位

作为生态中的**核心参照项目**，OpenClaw 展现出了明显的领跑优势：

*   **生态规模与响应速度**：单日 467 条 Issues 和 492 条 PRs 的处理量级远超同类项目（如 Zeroclaw 的 50+），显示出强大的社区吞吐能力和维护者响应速度。
*   **技术路线务实**：相比 NanoBot 的学术化架构探索或 IronClaw 的大规模重构，OpenClaw 采取**高频迭代、快速修补**的策略。今日发布的 v2026.6.5 迅速响应了 GPT-5 适配和 MCP 多媒体处理需求，解决了生产环境的燃眉之急。
*   **功能广度优势**：在多渠道适配（QQBot, Slack, iMessage）和工具链集成（MCP）方面，OpenClaw 覆盖面最广。相比之下，Hermes Agent 受困于 Desktop 客户端崩溃，PicoClaw 受困于安全漏洞，OpenClaw 在核心功能的完整性上更胜一筹。

## 4. 共同关注的技术方向

多个头部项目在今日的动态中呈现出高度一致的技术关注点：

1.  **上下文与记忆管理**
    *   **涉及项目**：OpenClaw, NanoBot, Zeroclaw, NullClaw, IronClaw。
    *   **具体诉求**：
        *   OpenClaw 与 Zeroclaw 均面临长上下文导致的**历史消息丢失**或**预算超标**问题。
        *   NanoBot 与 NullClaw 分别在解决**上下文污染**和**跨实例记忆同步**问题。
        *   **趋势**：单纯的上下文窗口扩展已无法满足需求，精准的压缩、隔离与跨会话持久化成为核心诉求。

2.  **新模型适配 (GPT-5.x & DeepSeek)**
    *   **涉及项目**：OpenClaw, NanoBot, NullClaw, IronClaw, CoPaw。
    *   **具体诉求**：
        *   **参数兼容性**：NanoBot 修复了 GPT-5.x 拒绝 `max_tokens` 的问题，IronClaw 处理 DeepSeek API 字段重复问题。
        *   **工具调用规范**：CoPaw 和 Hermes 均报告了模型工具调用格式不规范（如命名含点号、非结构化输出）导致的解析失败。

3.  **安全与权限隔离**
    *   **涉及项目**：OpenClaw, PicoClaw, Hermes, Zeroclaw。
    *   **具体诉求**：
        *   OpenClaw 关注 **Thinking 内容泄露**和**API Key 掩码**。
        *   PicoClaw 暴露了严重的 **SSRF 绕过**和**权限提升**漏洞。
        *   Zeroclaw 呼吁**多租户 RBAC** 支持。
        *   **趋势**：安全焦点从"网络安全"转向"智能体行为安全"（如防止工具间文本泄露、Sudo 提权幻觉）。

## 5. 差异化定位分析

| 维度 | **OpenClaw** (核心参照) | **NanoBot / IronClaw** (架构派) | **Hermes / CoPaw** (端侧/应用派) | **Zeroclaw / NullClaw** (企业/自动化派) |
| :--- | :--- | :--- | :--- | :--- |
| **核心侧重** | 全栈功能覆盖与渠道适配 | 底层架构抽象与协议兼容 | Desktop/客户端体验与浏览器自动化 | 企业级集成、自动化流程与稳定性 |
| **目标用户** | 广大开源使用者与极客 | 开发者与架构师 | 个人桌面用户与 Web 自动化需求者 | 企业运维与高阶自动化玩家 |
| **技术架构** | 微内核+丰富 Adapter | 模块化 Hooks/Provider 抽象 | Electron/Tauri 客户端+本地模型 | SOP/AMQP 消息总线+多租户架构 |
| **当前痛点** | Session 状态同步、回归问题 | 重构带来的兼容性阵痛 | 跨平台崩溃、UI 性能 | 配置复杂度过高、积压严重 |

## 6. 社区热度与成熟度

*   **成熟稳定组**：
    *   **NullClaw, LobsterAI**：虽然规模中等，但 Bug 修复迅速，功能迭代稳健，无明显架构动荡，适合生产环境试用。

*   **快速迭代组**：
    *   **OpenClaw, CoPaw**：版本发布频率高，社区反馈闭环快。OpenClaw 虽有回归问题但修复极快；CoPaw 正处于架构迁移前的最后冲刺。

*   **重构阵痛组**：
    *   **IronClaw, NanoBot**：正处于 "Reborn" 或深度架构调整期，PR 积压多，核心 API 变动大，适合关注前沿架构的开发者，但对普通用户稳定性有一定风险。

*   **质量攻坚组**：
    *   **PicoClaw, Hermes Agent**：PicoClaw 正面临安全审计风暴，需优先解决安全漏洞；Hermes 遭遇多平台客户端崩溃问题，需解决基础稳定性问题。

## 7. 值得关注的趋势信号

1.  **"Thinking" 泄露引发新的安全范式**：
    OpenClaw 关于剥离 `<thinking>` 脚手架内容的更新不仅仅是一个 UI 优化，而是反映了业界对**模型推理过程可见性**的担忧。随着模型推理深度增加，防止内部推理逻辑暴露给终端用户或被 Prompt 注入攻击窃取，将成为 AI 应用的标准安全需求。

2.  **多模型路由成为基础设施标配**：
    从 NanoBot 到 NullClaw，多个项目都在加强 OpenAI 兼容层和动态模型发现功能。用户强烈要求在同一会话中无缝切换“本地隐私模型”与“云端高性能模型”，这标志着 **AI 助手正在从单一模型前端向多模型网关演进**。

3.  **Agent 自我认知缺陷凸显**：
    Zeroclaw 中 Agent 不知道自己拥有 Cron 工具权限的问题，以及 Hermes 中 Agent 试图“创造性”绕过 Sudo 限制，揭示了当前 Agent 架构的一个共性短板——**工具集的动态感知与自我权限认知**。未来的 Agent 架构必须解决“我有什么能力”与“我能做什么”的元认知问题，而不仅仅依靠 Prompt 硬编码。

4.  **跨实例记忆同步初现端倪**：
    NullClaw 合并的跨实例记忆同步 PR 预示着单机版 AI 助手正在向**多端协同、多 Agent 协作**架构进化。解决“记忆孤岛”问题将是下一阶段各大项目竞争的高地。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-10)

## 1. 今日速览
NanoBot 项目今日保持极高的开发活跃度，虽然未发布新版本，但代码库经历了深度的架构重构与功能迭代。共有 **27 个 PR 更新**，其中 12 个已合并/关闭，显示出维护者正在积极整合社区贡献与核心修复。重点推进了插件化钩子系统、GPT-5.x 模型适配以及 WebUI 会话分叉等关键功能。社区反馈方面，用户对多模型切换与上下文隔离机制的关注度显著提升，表明项目正从单一功能向复杂生产环境场景演进。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 12 个 PR 被合并或关闭，标志着项目在架构扩展性与兼容性方面迈出重要一步：

*   **架构重构 - 插件化钩子系统落地**：PR #3564 已关闭，该 PR 构建了基于类型化事件的 `HookCenter` 系统，支持外部开发者通过 `entry_points` 分发插件。此举解决了旧有 AgentHook 扩展性差的问题，为 NanoBot 的生态扩展奠定了基础。
    *   链接: [HKUDS/nanobot PR #3564](https://github.com/HKUDS/nanobot/pull/3564)
*   **模型支持 - GPT-5.x 兼容性修复**：PR #4263 已关闭，修复了 GPT-5.x 及推理模型（o1/o3/o4）因使用 `max_tokens` 参数导致的请求拒绝问题，增加了 `max_completion_tokens` 的回退机制。
    *   链接: [HKUDS/nanobot PR #4263](https://github.com/HKUDS/nanobot/pull/4263)
*   **WebUI 交互增强 - 会话分叉**：PR #4208 已关闭，引入了 "Fork from here" 功能，允许用户从任意 Assistant 回复处分叉出新会话，极大提升了对话实验的灵活性。
    *   链接: [HKUDS/nanobot PR #4208](https://github.com/HKUDS/nanobot/pull/4208)
*   **文档与维护**：PR #4177 优化了新手引导文档，PR #4265 调整了定时任务的调度频率。

## 4. 社区热点
今日讨论最活跃的话题集中在**多模型环境配置**与**记忆系统准确性**：

*   **会话级模型覆盖需求**：Issue #4253 讨论热烈。用户 @rombert 提出在保护隐私的本地模型与高性能云端模型之间动态切换的需求。当前全局设置无法满足这一场景，引发了关于配置优先级（全局 vs 会话）的讨论。
    *   链接: [HKUDS/nanobot Issue #4253](https://github.com/HKUDS/nanobot/issues/4253)
*   **上下文污染问题**：Issue #4259 由 @chxuan 提出，深入分析了 `history.jsonl` 在跨会话注入时未做隔离导致的上下文污染问题。该问题涉及核心的 `Consolidator` 与 `ContextBuilder` 逻辑，评论中包含详尽的数据流分析，具有较高的技术价值。
    *   链接: [HKUDS/nanobot Issue #4259](https://github.com/HKUDS/nanobot/issues/4259)

## 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，部分已有修复方案：

*   **[High] 上下文污染与记忆错误**：
    *   Issue #4259 指出跨会话注入导致上下文污染。
    *   Issue #4264 指出 `idleCompact` 机制在总结历史时遗漏最后 8 条消息，可能导致错误的纠正记录被永久化。**已有修复 PR #4270 提交**。
    *   链接: [HKUDS/nanobot Issue #4264](https://github.com/HKUDS/nanobot/issues/4264) | [PR #4270](https://github.com/HKUDS/nanobot/pull/4270)
*   **[High] WebUI 会话内容丢失**：Issue #4267 (PR) 修复了 WebUI 因竞态条件导致 Assistant 回复渲染丢失的问题。**PR #4267 已提交修复**。
    *   链接: [HKUDS/nanobot PR #4267](https://github.com/HKUDS/nanobot/pull/4267)
*   **[Medium] GPT-5.x 参数不兼容**：Issue #4261 报告 GPT-5.x 拒绝 `max_tokens` 参数。此问题已通过 PR #4263 (已关闭) 和 PR #4268 (待合并) 解决。
    *   链接: [HKUDS/nanobot Issue #4261](https://github.com/HKUDS/nanobot/issues/4261)
*   **[Medium] OpenAI 格式工具调用解析失败**：Issue #4061 指出部分兼容提供商返回纯文本标记而非结构化 `tool_calls`，导致工具调度失败。目前尚未有合并的修复方案。
    *   链接: [HKUDS/nanobot Issue #4061](https://github.com/HKUDS/nanobot/issues/4061)

## 6. 功能请求与路线图信号
*   **模型动态切换**：Issue #4253 的活跃讨论表明，用户对“敏捷开发+隐私保护”的双模工作流需求强烈。这暗示项目需要重构配置系统，支持会话级或快捷指令级的模型预设切换。
*   **细粒度记忆管理**：Issue #4259 与 #4264 反映出用户对 Agent 长期记忆的准确性要求极高。社区正在推动记忆系统从“简单的追加式存储”向“带隔离与校验的结构化存储”演进。
*   **UI 定制化**：Issue #4262 建议支持在 Agent 模式启动时自定义图标，虽是小功能，但反映了用户对产品个性化体验的关注。

## 7. 用户反馈摘要
*   **真实痛点**：用户在使用不同模型（本地 vs 云端）处理不同敏感度任务时感到割裂，希望能无缝切换。
*   **记忆可靠性**：用户发现 Agent 可能“记错”或“混淆”上下文，特别是在经过 `idleCompact` 压缩后，正确的纠正信息可能被丢弃（Issue #4264）。
*   **兼容性困扰**：非标准 OpenAI 协议的提供商（如某些兼容 API）在 Tool Call 处理上存在障碍，阻碍了用户迁移。

## 8. 待处理积压
*   **Issue #4061 (Open since 2026-05-29)**：关于非结构化 Tool Call 的解析问题。随着 NanoBot 支持的模型源增多，增强协议解析的鲁棒性变得日益紧迫。
    *   链接: [HKUDS/nanobot Issue #4061](https://github.com/HKUDS/nanobot/issues/4061)
*   **PR #4268 (Open)**：针对 GPT-5.x 参数问题的修复 PR，需尽快审查合并以解决 Issue #4261。
    *   链接: [HKUDS/nanobot PR #4268](https://github.com/HKUDS/nanobot/pull/4268)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-10)

## 1. 今日速览
Zeroclaw 项目今日维持极高的社区活跃度，过去 24 小时内 Issues 与 PRs 更新量均达到 50 条，显示出开发节奏紧凑且社区参与度深。然而，Issue 的关闭率（2/50）远低于新增/活跃量，PR 的积压数量（47 个待合并）也处于高位，表明项目当前处于功能密集开发与维护压力并存的阶段。重点关注领域集中在 **多渠道集成、上下文记忆管理、以及 MCP 工具链的稳定性**，同时出现了多起关于配置复杂度和安全性的深度讨论。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 **3 个 PR 被合并或关闭**，主要集中在功能完善与构建修复：

*   **[CLOSED] PR #7369**: 引入了 **AMQP 入站通道支持与确定性 SOP 运行** 功能。这是一个重要的里程碑，使得 Zeroclaw 能够通过 AMQP 消费消息并驱动标准作业程序（SOP），为自动化运维场景打下基础。
*   **[CLOSED] PR #7362**: 暂时隐藏了 `zerocode` 中的上下文窗口使用率进度条。由于计数逻辑尚需完善，开发团队决定在功能成熟前将其隐藏，避免误导用户，体现了对 UX 的严谨态度。
*   **[CLOSED] Issue #4710**: 关于新 LOGO 的功能请求已关闭，标志着一个小的社区互动节点完成。

**总体评价**：尽管合并数量不多，但 #7369 的落地极大增强了 Agent 与外部消息队列的集成能力，项目在 "Agent 作为服务总线" 的方向上迈进了一步。

## 4. 社区热点
今日讨论最热烈的问题集中在 Agent 的自我认知能力与架构优化：

*   **[Issue #4710] (20 comments)**: **新 LOGO 设计**。尽管是一个低风险的功能请求，但引发了最多的互动，显示了社区对项目品牌形象的高度关注。
*   **[Issue #5862] (12 comments)**: **Agent 不知道自己拥有添加 Cron 任务的能力**。这是一个典型的 Agent 自我认知缺陷问题。用户希望 Agent 能主动使用 `zeroclaw cron` 工具，但当前 Agent 缺乏对自身工具集的动态感知，导致工作流中断。这反映了当前 Agent 架构中“工具发现”机制的痛点。
*   **[Issue #5937] (10 comments)**: **统一 Providers 架构**。开发者指出了当前 `providers` 模块中 `reqwest` 客户端管理混乱、代码重复严重的问题，提议进行深度重构。这表明项目正处于偿还技术债、优化底层架构的关键期。
*   **[Issue #5982] (9 comments)**: **多租户 Agent 部署的 RBAC 需求**。用户希望单一实例能根据发送者隔离工作空间、工具集和系统提示词。这是企业级部署的核心需求，讨论热度高说明 Zeroclaw 正在吸引更多生产环境用户的关注。

## 5. Bug 与稳定性
今日报告了多个高严重性（S1/S2）的 Bug，主要集中在上下文管理、MCP 工具和 Webhook 模式：

*   **[P1] [Issue #6721]**: **MCP 工具在 Webhook/非交互模式下静默挂起**。当启用 `deferred_loading` 时，`tool_search` 不在自动批准列表中，导致 Webhook 模式下无人审批，Agent 挂起 120 秒后自动拒绝。**严重影响自动化流程**。
*   **[P1] [Issue #5808]**: **默认 32k 上下文预算在第一轮对话即超标**。系统提示词和工具定义占用了过多 Token，导致历史记录被过早裁剪。已有相关修复 PR #7440 提交，旨在优化裁剪逻辑。
*   **[P1] [Issue #6034]**: **兼容性 Provider 丢失 User Message**。在使用 OpenAI 兼容接口（如 Qwen）时，多轮对话出现消息丢失，导致 400 错误，阻塞工作流。
*   **[P2] [Issue #7376]**: **Dashboard TUI 状态标签混淆**。历史会话被错误标记为活跃，且错误状态未明确展示。已有 PR #7444 尝试修复此问题。

## 6. 功能请求与路线图信号
结合 Issue 与 PR 动态，以下方向可能纳入近期路线图：

*   **安全与权限增强**：
    *   [Issue #5982] 提出的 Per-sender RBAC 和 [Issue #5775] 提出的 Per-skill 安全权限，显示出社区对多租户安全隔离的强烈需求。
*   **Provider 架构重构**：
    *   [Issue #5937] 的讨论与 PR 提示，项目正在着手统一 Provider 的请求客户端管理，这将是后续重构的重点。
*   **标准化集成**：
    *   [Issue #4853] 提议支持 `.well-known` URI 安装 Skills，顺应了 Agent 技能标准化的趋势。
*   **可观测性**：
    *   [PR #7385] 正在添加 turn metadata 到观察者事件中，旨在增强链路追踪能力，这对于生产环境调试至关重要。

## 7. 用户反馈摘要
*   **Memory 机制“喧宾夺主”**：[Issue #5844] 指出 Agent 在执行任务（特别是 Cron）时过度依赖历史记忆，忽略了当前 Prompt 的指令。用户认为 System Prompt 需要调整以平衡记忆与即时指令的权重。
*   **配置复杂度过高**：多个 Issues ([#6250], [#7117], [#7376]) 反映了配置系统（CLI、Quickstart、Web）的不一致性，以及 Dashboard TUI 在错误提示和状态展示上的不足，增加了用户的学习成本。
*   **Webhook/自动化模式体验差**：[Issue #6721] 揭示了在非交互模式下，工具审批机制缺乏合理的默认策略，导致流程中断，自动化体验不佳。

## 8. 待处理积压
以下重要 Issue 讨论热烈但尚未有明确解决或近期活跃度较低，建议维护者优先关注：

*   **[Issue #5862]**: Agent 缺乏对自身工具（Cron）的认知，属于核心能力缺陷，目前状态为 Blocked，需要架构层面的调整。
*   **[Issue #5844]**: Memory 权重过高的问题影响了 Agent 的指令遵循能力，目前已被接受但尚未有修复 PR。
*   **[Issue #6037]**: Cron 任务重入问题（S1），如果任务执行时间超过调度间隔会导致重复执行，目前虽有 PR (#7348) 尝试修复，但仍需关注合并进度。

---
*分析师注：Zeroclaw 正处于从单一 Agent 实验性项目向多租户、企业级自动化平台转型的阵痛期。Security、RBAC 和 Provider 重构是当前代码库健康度与市场竞争力的关键瓶颈。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-10)

## 1. 今日速览
过去 24 小时，Hermes Agent 项目呈现出**极高的社区活跃度与Issue提交量**，共监测到 50 条 Issue 更新（绝大多数为新开）和 50 条 PR 更新。尽管开发者社区反馈热情高涨，但 PR 合并率极低（仅 2 条关闭/合并），导致待处理积压显著增加。焦点主要集中在 **Desktop 客户端的稳定性**（WSL/macOS 崩溃、UI 缺陷）、**浏览器工具链的可用性**（Chromium 失效）以及 **企业级集成**（飞书、微信、火山引擎）。项目目前处于功能快速迭代期，但核心稳定性面临跨平台兼容性和工具调用逻辑的挑战。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
今日仅有少量 PR 被合并或关闭，主要集中在底层稳定性修复：
- **Docker 容器重启逻辑修复** ([PR #43236](https://github.com/NousResearch/hermes-agent/pull/43236)): 修复了 Docker 容器在重启或重建时 Gateway 无法自动拉起的关键问题（P1 级别），通过引入 planned-stop 标记解决了 s6-overlay 进程管理冲突。
- **看板“僵尸”数据修复** ([PR #43286](https://github.com/NousResearch/hermes-agent/pull/43286)): 解决了已归档看板因路径监听被错误复活为空数据库的问题，提升了数据一致性。

*注：大量关键修复 PR（如飞书消息丢失 #43271、认证池回退 #43277）仍处于 Open 状态，等待 Review。*

## 4. 社区热点
今日讨论最活跃的问题集中在**核心工具链的不可用**与**配置灵活性**上：
- **Chromium 工具失效** ([Issue #43099](https://github.com/NousResearch/hermes-agent/issues/43099)): 用户报告 Hermes 突然丧失 Chromium 使用能力，回退至失败的 DDGGS 方式。该问题被标记为 P2，影响了 Agent 核心的 Web 交互能力，引发热议。
- **Sudo 权限处理不当** ([Issue #43245](https://github.com/NousResearch/hermes-agent/issues/43245)): 模型在处理 sudo 命令时表现出“创造力过剩”，试图绕过安全机制而非使用 PTY 工具。这反映了 Agent 自主性与安全策略对齐的典型难题。
- **细粒度工具配置请求** ([Issue #31375](https://github.com/NousResearch/hermes-agent/issues/31375)): 用户希望能在配置中禁用特定工具（如 `web_extract`），而不影响同工具集下的其他工具（如 `web_search`），反映出用户对混合工具链（MCP + 内置）的强烈需求。

## 5. Bug 与稳定性
今日 Bug 报告频发，按严重程度排序如下：

### 严重 (P2)
- **安装程序卡死** ([Issue #35166](https://github.com/NousResearch/hermes-agent/issues/35166)): 在 Kubuntu 上安装时卡在 Playwright Chromium 依赖安装阶段，且无法 Ctrl+C 中断，严重影响新用户体验。
- **流式传输静默重试** ([Issue #43211](https://github.com/NousResearch/hermes-agent/issues/43211)): 当 LLM 提供商流式数据过期时，系统错误地在同一提供商上重试，而非触发运行时回退机制，导致请求“假死”。
- **上下文膨胀** ([Issue #43175](https://github.com/NousResearch/hermes-agent/issues/43175)): `session_search` 可能意外加载巨大的上下文压缩摘要，导致上下文溢出。

### 高危 (P3)
- **macOS Desktop 崩溃** ([Issue #43242](https://github.com/NousResearch/hermes-agent/issues/43242)): macOS 26.5.1 (Apple Silicon) 上因 V8 JIT 内存分配错误导致启动崩溃。
- **WSL 文件浏览器失效** ([Issue #43270](https://github.com/NousResearch/hermes-agent/issues/43270)): Windows Desktop 连接 WSL 后端时，因路径解析架构不一致导致文件浏览器报错 ENOENT。
- **Gemini Vision 不兼容** ([Issue #42086](https://github.com/NousResearch/hermes-agent/issues/42086)): 视觉工具未能识别 Gemini 2.0/2.5 模型，导致工具调用失败。
- **微信语音转写失败** ([Issue #42084](https://github.com/NousResearch/hermes-agent/issues/42084)): 网关无法处理微信的 Silk 音频格式，静默失败。
- **中文输入法失效** ([Issue #43247](https://github.com/NousResearch/hermes-agent/issues/43247)): WSLg 环境下 Desktop 客户端无法输入中文。

## 6. 功能请求与路线图信号
- **火山引擎集成** ([Issue #29331](https://github.com/NousResearch/hermes-agent/issues/29331)): 用户请求内置字节跳动火山引擎作为 Provider，支持其 Coding Plan 订阅模式，显示项目在国产模型生态中的关注度提升。
- **看板交互优化** ([Issue #43216](https://github.com/NousResearch/hermes-agent/issues/43216) & [PR #43229](https://github.com/NousResearch/hermes-agent/pull/43229)): 请求在看板视图中直接“回复并解除阻塞”，减少操作步骤。已有对应 PR 提交，预计很快合入。
- **Agent 上下文引擎重构** ([Issue #36765](https://github.com/NousResearch/hermes-agent/issues/36765)): 提议将“上下文选择/路由”与“压缩”解耦，作为 ContextEngine 的一等公民。这是架构层面的 RFC，预示未来版本将优化长上下文处理逻辑。

## 7. 用户反馈摘要
- **Desktop 客户端体验下滑**: 多个 Issue 反映在 Windows (WSL) 和 macOS 平台上存在崩溃、UI 重叠 ([#39657](https://github.com/NousResearch/hermes-agent/issues/39657)) 和输入法兼容性问题，表明 Electron 客户端的多平台适配需重点投入。
- **企业级网关痛点**: 飞书和微信网关的消息丢失、格式渲染 ([#18552](https://github.com/NousResearch/hermes-agent/pull/18552)) 及音频格式支持是企业用户的核心诉求。
- **模型自主性边界**: 用户对 Agent 在 Sudo 等敏感操作上的“幻觉”行为表示担忧，希望有更强的约束机制。

## 8. 待处理积压
- **Matrix 群聊回复引用** ([Issue #7507](https://github.com/NousResearch/hermes-agent/issues/7507)): 已开放近两个月，请求增加配置项以避免群聊信息混乱，建议维护者优先处理以改善 IM 集成体验。
- **安装卡死问题** ([Issue #35166](https://github.com/NousResearch/hermes-agent/issues/35166)): 已存在 11 天，且获得了 4 个点赞，作为新用户的“拦路虎”，建议优先排查 Playwright 依赖安装脚本逻辑。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-10)

## 1. 今日速览
PicoClaw 项目今日呈现出极高的活跃度与社区参与度，尤其是安全审计方面迎来了重大突破。过去 24 小时内，社区安全研究员提交了高达 **14 条** 安全相关 Issue，深度暴露了 SSRF 防护、权限认证及工具执行等方面的潜在风险。与此同时，项目维护者及社区积极响应，已提交多项修复 PR 并发布了最新的 `v0.2.9-nightly` 版本。虽然存在大量待处理的安全补丁，但整体来看，项目正在经历一次必要的“安全加固期”，新功能（如 Delta Chat 网关）也在稳步推进中。

## 2. 版本发布
- **nightly: Nightly Build v0.2.9-nightly.20260610.b9a8fad6**
  - **类型**: 自动化构建版本
  - **说明**: 这是一个自动化发布的 Nightly 版本，包含了截至 `b9a8fad6` 提交的所有最新代码变更。虽然可能包含不稳定因素，但集成了最新的功能与修复。
  - **变更日志**: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. 项目进展
今日共有 **5 个 PR 被合并或关闭**，主要集中在模型兼容性修复和内部重构上：
- **模型兼容性修复**：PR #2940 和 #2942 解决了 Claude 模型（opus-4-7 和 sonnet）的参数弃用及默认 ID 格式问题，确保了与 Anthropic 最新 API 的兼容性。
- **配置稳健性**：PR #3064 修复了配置迁移过程中的类型断言潜在崩溃问题，提升了系统稳定性。
- **架构演进**：PR #2937（Agent Collaboration Bus）虽然已关闭，但表明项目曾尝试引入内部 Agent 协作总线架构，后续动向值得关注。
- **文档更新**：PR #3086 更新了微信二维码等文档信息。

目前仍有 **11 个 PR 处于待合并状态**，其中包含多项针对今日爆出的安全漏洞的修复方案，正处于紧张的代码审查阶段。

## 4. 社区热点
今日社区讨论焦点主要集中在以下两个领域：
1.  **安全审计风暴** (链接: [Issues 列表](https://github.com/sipeed/picoclaw/issues)):
    用户 `@YLChen-007` 提交了一系列高质量的安全漏洞报告（#3068 - #3082），涵盖 SSRF 绕过、MQTT 欺骗、权限提升等关键领域。这些报告详尽且复现步骤清晰，显示出该用户对 PicoClaw 底层架构的深刻理解，强烈建议维护者优先处理并合并相关修复 PR（如 #3085, #3083）。
2.  **流式传输配置请求** ([Issue #2404](https://github.com/sipeed/picoclaw/issues/2404)):
    该 Issue 讨论热度较高（11 条评论），用户希望支持在配置文件中开启 HTTP 流式请求。这反映了重度用户对于 LLM 交互延迟和实时响应的迫切需求。

## 5. Bug 与稳定性
今日报告的问题严重程度较高，主要集中在安全层面：
- **🔴 严重安全漏洞 (未修复)**:
    - **权限绕过**: Launcher 首次运行密码设置存在 CSRF 漏洞 ([Issue #3072](https://github.com/sipeed/picoclaw/issues/3072))；MQTT 授权可被欺骗绕过 ([Issue #3068](https://github.com/sipeed/picoclaw/issues/3068))。
    - **SSRF 防护绕过**: `web_fetch` 存在 IPv6 ISATAP 及特殊 IPv4 段绕过风险 ([Issue #3074](https://github.com/sipeed/picoclaw/issues/3074), [Issue #3077](https://github.com/sipeed/picoclaw/issues/3077))。
- **🟠 中等功能缺陷 (已修复/待合并)**:
    - **Windows 平台兼容性**: `list_dir` 因路径分隔符导致报错 ([Issue #2472](https://github.com/sipeed/picoclaw/issues/2472))，已有相关讨论。
    - **Claude 模型调用失败**: `temperature` 参数弃用导致报错，已通过 PR #2940 修复。
    - **安全修复 PR**: 针对今日爆出的 SSRF 和权限问题，已有修复 PR 提交，如 PR #3085 (SSRF 防护) 和 PR #3083 (Launcher 访问控制加固)。

## 6. 功能请求与路线图信号
- **安全库替换** ([Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)): 建议使用 `vodozemac` 替换已停止维护的 `libolm`，这符合长期安全维护的路线。
- **协议完善** ([Issue #2984](https://github.com/sipeed/picoclaw/issues/2984)): 为 Pico WebSocket 客户端增加显式的回合结束信号，这将极大改善客户端交互体验。
- **新渠道支持** ([PR #3063](https://github.com/sipeed/picoclaw/pull/3063)): 社区贡献了 Delta Chat 网关功能，预示着项目正在向更广泛的通讯协议扩展。

## 7. 用户反馈摘要
- **易用性与稳定性**:
    - 用户反馈在 Windows 下运行存在路径兼容性问题 ([Issue #2472](https://github.com/sipeed/picoclaw/issues/2472))。
    - Web UI 历史记录显示不全的问题引起了开发者注意，PR #2990 正致力于修复该缺陷。
- **安全性关注**:
    - 社区对项目的安全性要求极高，今日爆出的多处安全漏洞表明项目在部署于生产环境前需进行严格的权限隔离与网络配置。特别是 `exec` 工具的符号链接竞争问题 ([Issue #3081](https://github.com/sipeed/picoclaw/issues/3081))，直接威胁宿主安全。

## 8. 待处理积压
- **高优先级安全修复**: 维护者需尽快审查并合并 PR #3083 (Launcher 加固) 和 PR #3085 (SSRF 修复)，以应对今日集中披露的安全漏洞。
- **核心功能 PR**: PR #2990 (修复历史记录显示) 和 PR #2988 (上下文压缩配置) 已停滞多日，建议维护者推进 Review，以免影响用户体验。
- **遗留 Bug**: Issue #2796 (历史消息显示) 虽然已关闭，但对应的修复 PR #2990 仍为 Open 状态，需确认关联状态。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-10)

## 1. 今日速览
NanoClaw 项目今日处于**高活跃度的维护清理模式**。过去 24 小时内，项目处理了惊人的 39 个 Pull Requests（主要为关闭/合并旧提案），显示出维护者正在大力整顿代码库积压工作。虽然仅更新了 1 条 Issue，但关于“多运行时 SDK 抽象”的讨论质量极高，反映了社区对底层架构扩展性的强烈需求。整体来看，项目正在收缩战线，清理陈旧分支，同时关注生产环境稳定性与安全性修复。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目进展主要集中在**积压清理**与**关键修复**两方面，显著降低了技术债务：

*   **大规模积压清理**：项目关闭了大量创建于 2 月至 3 月间的长期挂起 PR。包括备受关注的 WebUI 控制面板 ([#212](https://github.com/nanocoai/nanoclaw/pull/212))、Skill Marketplace 系统 ([#1309](https://github.com/nanocoai/nanoclaw/pull/1309)) 以及 Agent Trace Observability ([#1202](https://github.com/nanocoai/nanoclaw/pull/1202)) 等功能提案均被关闭。这表明项目方可能正在重新规划路线图，或拒绝了偏离当前核心架构的社区贡献，以保持代码库整洁。
*   **生产环境修复**：修复了飞书集成中的“僵尸卡片”问题 ([#2718](https://github.com/nanocoai/nanoclaw/pull/2718))。该 PR 解决了一个严重的生产环境 Bug：当 `agent-runner` 进程异常退出时，飞书交互卡片会卡在“运行中”状态长达 50 分钟。此修复提升了系统的鲁棒性。
*   **财务智能体提交**：有一个新的财务相关 Agent 提交 ([#2723](https://github.com/nanocoai/nanoclaw/pull/2723)) 被关闭，可能是不符合贡献指南或功能重叠。

## 4. 社区热点
今日社区焦点集中在架构扩展性讨论上：

*   **[Issue #1690](https://github.com/nanocoai/nanoclaw/issues/1690) Multi-runtime agent SDK abstraction**
    *   **热度**：👍 3, 评论 5
    *   **分析**：作者 @chiptoe-svg 提出了一个高价值的架构改进方案，旨在构建一个多运行时抽象层，允许将不同的 Agent SDK（如 Claude, Codex, 本地模型）作为模块化 Skill 安装，类似现有的 Channel 模式。该 Issue 反映了进阶用户希望 NanoClaw 能摆脱单一模型依赖，成为通用的智能体托管平台。该讨论自 4 月创建至今仍在活跃，是未来架构演进的重要信号。

## 5. Bug 与稳定性
今日报告并处理了以下关键问题：

*   **[严重] 飞书集成进程残留 Bug**
    *   **问题**：PR [#2718](https://github.com/nanocoai/nanoclaw/pull/2718) 修复了 `agent-runner` 异常退出后，飞书卡片状态未更新的问题。
    *   **状态**：已关闭（推测已合并修复）。
*   **[高危] Telegram 配对码安全隐患**
    *   **问题**：PR [#2722](https://github.com/nanocoai/nanoclaw/pull/2722) 指出原有的配对码生成使用了可预测的 `Math.random`，存在安全风险，已改用 `crypto.randomInt`。
    *   **状态**：**待合并 (OPEN)**，需维护者优先审查合并。

## 6. 功能请求与路线图信号
*   **SDK 抽象化趋势**：结合 Issue [#1690](https://github.com/nanocoai/nanoclaw/issues/1690) 的持续活跃，以及大量特定功能 PR（如 WebUI、Marketplace）的关闭，推测项目可能倾向于先完善核心的 SDK 抽象层，再在此基础之上构建 UI 或市场功能，而非直接堆砌功能。
*   **无容器运行模式**：虽然 PR [#1285](https://github.com/nanocoai/nanoclaw/pull/1285) (Direct runner mode) 已关闭，但其提出的“去除 Docker 依赖”需求可能仍会在未来的架构调整中被考虑，以降低部署门槛。

## 7. 用户反馈摘要
*   **痛点**：飞书用户在生产环境中遭遇进程超时后界面卡死的问题（PR #2718），表明企业级即时通讯集成中，状态同步与生命周期管理仍是易错点。
*   **诉求**：高级用户希望 Agent 后端具有可替换性，不想被锁定在单一模型提供商，希望像加载频道一样加载不同的 Agent Runtime（Issue #1690）。

## 8. 待处理积压
*   **待合并安全修复**：PR [#2722](https://github.com/nanocoai/nanoclaw/pull/2722) 涉及加密安全漏洞修复，建议维护者立即审查并合并。
*   **文档更新提案**：PR [#2721](https://github.com/nanocoai/nanoclaw/pull/2721) 关于自定义 Intro 和 Skills 模型的文档更新尚处于 Open 状态，是完善开发者文档的重要一环，需及时处理。
*   **长期关注**：Issue [#1690](https://github.com/nanocoai/nanoclaw/issues/1690) 涉及底层架构重构，虽然讨论热烈，但目前未见对应的 PR 实现，建议维护者给予明确的路线图反馈。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 (2026-06-10)

## 1. 今日速览
NullClaw 项目今日展现了极高的维护活跃度与迭代速度，单日关闭了 4 个 Issue 并合并了 7 个 PR，解决了一系列影响用户体验的关键问题。项目重点修复了 Telegram 交互反馈缺失、PII 过滤误杀时间戳以及自定义模型提供商配置失效等 Bug。特别值得一提的是，长期开发的 "跨实例记忆同步" 功能（PR #711）今日正式合并，标志着 NullClaw 在多智能体协作架构上迈出了重要一步。目前项目整体健康度优秀，仅有一个针对关键 Bug 的修复 PR (#948) 处于待合并状态。

## 2. 版本发布
无

## 3. 项目进展
今日项目进展显著，主要集中在稳定性修复与架构增强，共计合并/关闭 7 个 PR：

*   **[合并] 跨实例记忆同步 (PR #711)**：引入确定性记忆事件流，支持 Agent 实例间同步记忆，解决了多 Agent 场景下的上下文割裂问题。
    *   链接: [nullclaw/nullclaw PR #711](https://github.com/nullclaw/nullclaw/pull/711)
*   **[合并] 修复自定义 Provider 模型列表获取 (PR #940)**：修复了自定义 OpenAI 兼容提供商在 `/models` 菜单中错误回退到硬编码 Claude 模型的问题，现在会正确查询 `base_url`。
    *   链接: [nullclaw/nullclaw PR #940](https://github.com/nullclaw/nullclaw/pull/940)
*   **[合并] 修复 PII 过滤误报 (PR #945)**：解决了 PII 编辑器将系统时间输出（如 `date` 命令）误识别为电话号码的问题，增加了 ISO 日期格式的过滤规则。
    *   链接: [nullclaw/nullclaw PR #945](https://github.com/nullclaw/nullclaw/pull/945)
*   **[合并] Telegram 交互体验优化 (PR #943)**：修复了点击内联按钮后无 "typing..." 指示器的问题，提升了交互响应感知。
    *   链接: [nullclaw/nullclaw PR #943](https://github.com/nullclaw/nullclaw/pull/943)
*   **[合并] 新增 Evolink 提供商支持 (PR #947)**：集成 Evolink 作为一级 OpenAI 兼容提供商，支持 GPT-5、Gemini 等多模型网关。
    *   链接: [nullclaw/nullclaw PR #947](https://github.com/nullclaw/nullclaw/pull/947)
*   **[合并] 配置与工具提示优化 (PR #939, #946)**：修复了 `compact_context` 死代码问题，优化了系统提示词中的工具过滤逻辑。

## 4. 社区热点
今日社区讨论最集中的问题是 **Agent 定时任务的投递失败 (Issue #941)**。
*   **Issue #941**: 作者 @weissfl 报告在使用 `job_type: "agent"` 创建定时任务时，虽然任务标记为完成，但子进程未启动导致 Telegram 消息未发送。该问题直接影响了自动化场景的核心功能，目前已有对应修复 PR (#948) 提交。
    *   链接: [nullclaw/nullclaw Issue #941](https://github.com/nullclaw/nullclaw/issues/941)

## 5. Bug 与稳定性
今日报告并处理的 Bug 按严重程度排列如下：

*   **[严重] Agent 定时任务不触发子进程 (Issue #941)**
    *   现象：Cron 任务标记完成但无实际执行结果，消息投递失败。
    *   状态：**已有修复 PR #948** (待合并)。
    *   链接: [nullclaw/nullclaw Issue #941](https://github.com/nullclaw/nullclaw/issues/941)
*   **[中等] 自定义 Provider 模型列表错误 (Issue #936)**
    *   现象：自定义提供商不查询 `/v1/models`，仅显示硬编码模型。
    *   状态：**已修复** (PR #940)。
    *   链接: [nullclaw/nullclaw Issue #936](https://github.com/nullclaw/nullclaw/issues/936)
*   **[中等] PII 过滤误判日期格式 (Issue #944)**
    *   现象：时间戳输出被错误替换为 `[PHONE_X]`，干扰日志与上下文。
    *   状态：**已修复** (PR #945)。
    *   链接: [nullclaw/nullclaw Issue #944](https://github.com/nullclaw/nullclaw/issues/944)
*   **[轻微] Telegram 按钮交互无反馈 (Issue #942)**
    *   状态：**已修复** (PR #943)。
    *   链接: [nullclaw/nullclaw Issue #942](https://github.com/nullclaw/nullclaw/issues/942)

## 6. 功能请求与路线图信号
*   **多模型网关集成**：PR #947 的合并显示项目正在积极适配更广泛的多模型网关，用户对统一接入 GPT-5、DeepSeek 等模型的需求强烈。
*   **智能体记忆持久化**：PR #711 的合并响应了用户对 Agent 记忆跨实例保留的深层需求，预示着未来版本将更侧重于长期记忆与个性化上下文的保持。

## 7. 用户反馈摘要
*   **痛点：定时任务可靠性**：用户 (@weissfl) 在使用 Cron Agent 功能时遭遇静默失败，指出即使配置正确，Agent 子进程也未启动，这反映出用户对后台任务可观测性的需求。
*   **痛点：隐私功能的副作用**：用户 (@vernonstinebaker) 反馈 PII 过滤功能过于激进，导致正常的日期输出被污染。这提示开发者在对安全相关功能（如 PII 编辑）进行默认开启或更新规则时，需平衡误报率。

## 8. 待处理积压
*   **PR #948 (Fix cron agent delivery attribution)**：这是解决今日最严重 Bug (#941) 的关键 PR，目前状态为 Open。建议维护者优先审查并合并，以恢复 Cron Agent 的正常功能。
    *   链接: [nullclaw/nullclaw PR #948](https://github.com/nullclaw/nullclaw/pull/948)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-10)

## 1. 今日速览
IronClaw 项目正处于高度活跃的架构演进阶段，核心聚焦于代号为 "Reborn" 的新一代架构落地与生产环境切换准备。过去 24 小时内，项目出现了 **47 个待合并 PR** 的高位积压，显示出大规模功能集成正处于冲刺期。关键进展包括 WebUI v2 国际化工作的完成以及 OpenAI 兼容性迁移的阶段性胜利。整体来看，项目正从功能补齐向生产级稳定性验证过渡，但高并行的开发分支对代码审查和集成测试提出了较高要求。

## 2. 版本发布
今日无正式版本发布。但需关注 **PR #3708** 正在进行的发布准备工作，计划将版本从 `0.24.0` 升级至 `0.29.1`。其中 `ironclaw_common` 和 `ironclaw_skills` 模块包含 API 破坏性变更，下游开发者需提前做好兼容性评估。

## 3. 项目进展
今日共有 3 个 PR 合并/关闭，主要集中在基础设施完善与测试覆盖：
*   **WebUI v2 国际化完成**：PR **#4553** 已合并，彻底消除了前端硬编码字符串，解决了 Issue **#4554**，提升了多语言支持的完整性。
*   **API 兼容性迁移里程碑**：Issue **#4446** (SSE 流式响应) 和 **#4447** (兼容性与安全测试) 已关闭，标志着 Reborn 架构对 OpenAI 兼容 API 的支持已通过核心验证。
*   **运维基础夯实**：Issue **#4591** (Operator 命令平面基础) 已关闭，为后续的诊断、配置和生命周期管理 API 奠定了基础。
*   **新功能栈推进**：针对通用附件支持，项目提交了系列 PR 栈 (**#4654**, **#4655**, **#4668**, **#4670**, **#4672**)，正在重构从底层存储到上层 Transcript 的全链路支持。

## 4. 社区热点
*   **Reborn 生产环境切换**：Issue **#3026** (Epic) 继续保持活跃，讨论焦点在于如何构建、验证生产图并防止流量切向未就绪的服务。这是目前项目最高优先级 (P0) 的阻塞性任务。
*   **Strict-mode 兼容性问题**：Issue **#4642** 引起了较多关注。Strict-mode LLM 提供商发送的 `null` 值被验证器拒绝，导致大部分第一方工具调用失败。这是一个影响广泛的功能性 Bug，需密切关注修复进度。
*   **DeepSeek API 兼容性**：Issue **#4548** 报告了携带 Tools 的请求导致 JSON 重复 `model` 字段的问题，引发了关于特定提供商兼容性的讨论。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的关键 Bug：
*   **[P0/严重] 工具调用验证失败**：Issue **#4642**。Strict-mode 提供商的工具调用在 Reborn 架构下被错误拒绝，影响大部分第一方工具。目前尚未有修复 PR 关联。
*   **[P1/中等] DeepSeek API 400 错误**：Issue **#4548**。请求序列化时出现重复字段，导致调用失败。
*   **[P1/中等] 配置无法保存**：Issue **#4673**。NEAR AI 提供商配置在测试连接成功后无法保存，导致引导流程中断。
*   **[P2/轻微] 日历事件排序错误**：Issue **#4640**。Google Calendar 扩展返回最旧的事件而非即将发生的事件。

## 6. 功能请求与路线图信号
*   **通用附件支持**：Issue **#4644** 提出构建通用的附件流水线，相关 PR 栈 (**#4672** 等) 已提交，预计近期合并，将解决 Reborn 架构下附件被静默丢弃的问题。
*   **统一搜索**：Issue **#4647** 提出跨线程、技能、扩展和内存的全局搜索功能，弥补当前 WebUI v2 搜索功能碎片化的短板。
*   **项目级自动化与权限**：PR **#4663** 和 **#4664** 引入了项目作用域的自动化所有权模型，预示着多租户环境下的权限隔离将是下一版本的重点。

## 7. 用户反馈摘要
*   **配置体验痛点**：用户在配置 NEAR AI 提供商时遇到 "测试成功但保存失败" 的静默错误，这表明前端的错误处理与状态管理存在断层。
*   **特定模型兼容性**：社区反馈在使用 DeepSeek 等兼容 OpenAI 协议的非标准模型时存在兼容性细节问题，提示项目在协议层的健壮性仍有优化空间。
*   **功能缺失感知**：用户注意到 Reborn 版本相比 v1 版本在附件处理和统一搜索上的功能差距，开发团队正通过系列 Issue 和 PR 积极回应这些需求。

## 8. 待处理积压
*   **PR 审查积压**：目前有 **47 个待合并 PR**，其中包括涉及破坏性变更的发布 PR (**#3708**) 和大型重构 PR (**#4613**, **#4588**)。建议维护者优先处理阻塞性的功能栈，防止集成冲突。
*   **架构债务**：Issue **#4665** 和 **#4666** 提醒 `slack_host_state.rs` 等核心文件已逼近行数上限，需要进行拆分重构，以防代码腐化。

---
*数据来源：GitHub (nearai/ironclaw) | 分析时间：2026-06-10*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-10)

## 1. 今日速览
LobsterAI 项目今日保持高度活跃的开发态势，核心贡献者集中处理了 4 个 Pull Requests，主要聚焦于**数据备份迁移**与**任务通知机制**的功能迭代，同时也修复了界面交互层面的细节问题。尽管今日无新版本 Release，但代码库合并活动频繁，显示项目正处于功能密集集成阶段。社区方面，出现了一个关于**跨模型子任务协作**的高质量技术讨论，揭示了用户在构建复杂多智能体工作流时的深层需求。整体来看，项目核心功能稳步推进，但在多模型协同的稳定性上仍有优化空间。

## 2. 版本发布
**本日无新版本发布。**

## 3. 项目进展
今日共有 4 个 PR 被关闭（推测已合并），项目在功能完整性和鲁棒性上取得了实质性进展：

*   **数据备份与迁移能力构建**：PR #2136 实现了数据备份与迁移功能，这是个人 AI 助手数据安全的关键基础设施。紧随其后，PR #2135 临时关闭了该功能，推测是为了稳妥起见，在全面测试完成前先禁用该特性，体现了开发者对数据安全的审慎态度。
    *   相关链接：[PR #2136](https://github.com/netease-youdao/LobsterAI/pull/2136), [PR #2135](https://github.com/netease-youdao/LobsterAI/pull/2135)
*   **任务完成通知与生命周期管理**：PR #2134 优化了任务完成后的通知机制，特别是在主窗口关闭或销毁后的恢复逻辑，以及 macOS 通知中心的交互保持。这显著提升了应用在后台运行时的用户体验。
    *   相关链接：[PR #2134](https://github.com/netease-youdao/LobsterAI/pull/2134)
*   **前端交互体验修复**：PR #2133 修复了渲染层的导出与代码复制 Bug，直接改善了用户的日常操作体验。
    *   相关链接：[PR #2133](https://github.com/netease-youdao/LobsterAI/pull/2133)

## 4. 社区热点
今日最活跃的讨论为新开的 Issue #2132，虽然评论数尚为 0，但其内容极具技术深度和代表性：

*   **[OPEN] 跨模型子任务调用的问题 (#2132)**
    *   **链接**：[Issue #2132](https://github.com/netease-youdao/LobsterAI/issues/2132)
    *   **分析**：用户尝试构建“M3（规划/监督）+ DeepSeek（执行）”的异构多智能体架构。这反映了社区对 **Multi-Agent 协作** 的需求正从单一模型向跨模型编排演进。用户详细分析了 `call_function` 不在 `sessions_list` 中的根因，并提出了“子任务主动通知主任务”的机制改进建议。这是极具价值的架构级反馈，直指当前多智能体通信机制的痛点。

## 5. Bug 与稳定性
今日记录的稳定性问题主要集中在多智能体协作流程中：

*   **[严重] 跨模型子任务调用状态丢失** (#2132)
    *   **现象**：在主任务（M3）调用子任务时，系统报错 `call_function_gblu0nmqpcej_1` 不在 `sessions_list` 或 `subagents` 中。
    *   **根因**：网关级函数调用未能正确映射到会话管理列表，导致主任务无法感知子任务状态。
    *   **状态**：**Open**，暂无关联 Fix PR。
*   **[轻微] 界面导出与复制功能异常** (#2133)
    *   **现象**：渲染层导出与代码复制功能存在缺陷。
    *   **状态**：**已修复** (PR #2133)。

## 6. 功能请求与路线图信号
*   **异构多模型编排能力**：来自 Issue #2132，用户明确请求建立标准化的跨模型子任务通知机制。建议项目方在下一阶段重点考虑引入显式的“子任务生命周期回调”接口，以支持不同模型擅长领域的组合（如规划 vs 执行）。
*   **数据备份与迁移**：PR #2136 表明该功能已纳入开发主线，预计将在经过充分测试后（PR #2135 的临时关闭措施）在下一个版本中正式发布。

## 7. 用户反馈摘要
从 Issue #2132 的描述中可以提炼出以下用户画像与痛点：
*   **高级用户场景**：用户开始尝试组合不同特性的模型（M3 与 DeepSeek）以优化成本与性能，表明 LobsterAI 的用户群具备较高的技术素养。
*   **控制欲与透明度需求**：用户对“黑盒”调用感到不安，希望子任务状态能“第一时间知晓”，并希望有明确的“跨模型调用要求”文档。用户更倾向于可控、可观测的协作流程。

## 8. 待处理积压
*   **Issue #2132 跨模型协作失效**：这是一个涉及核心架构的技术债，直接影响了高级用户对多模型编排的使用体验。建议维护者尽快确认该 Issue 的优先级，并考虑是否将其纳入近期 Sprint 修复计划。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 (2026-06-10)

## 1. 今日速览
2026年6月10日，Moltis 项目整体活跃度处于低位，暂无代码层面的推进。过去24小时内项目未发布新版本，也无 Pull Request 的合并或更新动态。社区互动方面仅新增 1 条关于语音合成 Provider 配置的 Bug 反馈。目前项目处于稳定维护期，代码库无变动，建议关注新增 Issue 的后续跟进情况。

## 2. 版本发布
无。

## 3. 项目进展
今日无已合并或已关闭的 Pull Request，项目代码库在 2026-06-10 当天未发生变更，核心功能开发与迭代暂时停滞。

## 4. 社区热点
今日社区唯一动态为新增的 Bug 报告，虽然评论数为 0，但代表了用户在尝试集成特定功能时的实际受阻情况。
- **[Issue #1114 [Bug]: provider 'coqui' not configured (minor)](https://github.com/moltis-org/moltis/issues/1114)**
  - **分析**：该 Issue 由用户 @vvuk 提交，指出在使用 `coqui`（一个流行的开源 TTS/语音合成项目）作为 Provider 时出现配置错误。这反映出部分用户有在 Moltis 中集成语音生成能力的需求，且在配置非默认或第三方 Provider 时可能存在文档缺失或环境初始化逻辑的缺陷。

## 5. Bug 与稳定性
今日新增 1 条 Bug 报告，目前尚无修复 PR 提交。
- **🟡 Minor (轻微) | [Issue #1114](https://github.com/moltis-org/moltis/issues/1114)**
    - **问题描述**：系统提示 `provider 'coqui' not configured`，导致无法调用该语音合成服务。
    - **严重程度**：被标记为 `minor`，不影响核心对话功能，但影响多模态（语音）体验。
    - **状态**：待维护者确认是环境依赖问题还是代码逻辑判断问题。

## 6. 功能请求与路线图信号
今日无新增功能请求。从 Issue #1114 可推断，**多模态能力（特别是语音合成 Coqui AI 的集成）** 是部分高级用户的实际使用场景，完善的 Provider 适配机制和配置文档可能是后续优化的方向。

## 7. 用户反馈摘要
- **痛点**：用户在集成非标准或第三方 AI 模型 Provider（如 Coqui）时，遇到配置识别问题，错误提示较为笼统。
- **正面反馈**：Issue 提交者严格遵守了 Preflight Checklist（预检清单），说明社区贡献者质量较高，且对项目抱有积极的协作态度。

## 8. 待处理积压
由于今日仅提供过去24小时数据，无法识别长期未响应的积压项。建议维护者优先响应今日新增的 **[Issue #1114](https://github.com/moltis-org/moltis/issues/1114)**，以免阻碍相关用户在语音合成场景下的正常使用。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-06-10)

## 1. 今日速览
CoPaw 项目今日保持了较高的开发迭代速度，共发布 1 个新版本，处理了 39 条 Issue 更新和 36 条 PR 更新，解决率较高（Issue 关闭率约 46%）。项目重点推进了后端架构迁移（AgentScope 2.0）的讨论与安全相关的修复，同时发布了 `1.1.11-beta.2` 版本以增强浏览器控制能力。社区对“学习循环”等前沿特性表现出浓厚兴趣，Windows 桌面端性能问题成为近期反馈的焦点。整体来看，项目处于快速演进期，正在积极修复 Beta 版本遗留问题并为重大架构升级做准备。

## 2. 版本发布
**新版本：1.1.11-beta.2**
- **更新重点**：聚焦于浏览器控制能力的增强与稳定性修复。
- **主要变更**：
  - **功能增强**：`browser_control` 模块新增页面坐标点击支持，提升了自动化操作的精准度 ([PR #4905](https://github.com/agentscope-ai/QwenPaw/pull/4905))。
  - **稳定性修复**：增加了 CDP 超时参数，并引入浏览器配置文件隔离机制，解决了跨浏览器切换时的冲突问题 ([PR #x1n95c](https://github.com/agentscope-ai/QwenPaw/pull/xxx))。

## 3. 项目进展
今日共有 17 个 PR 被合并或关闭，项目在安全性、稳定性和测试覆盖率上取得显著进展：

- **安全性加固**：合并了 [PR #4981](https://github.com/agentscope-ai/QwenPaw/pull/4981)，修复了文件预览接口的路径遍历漏洞，限制访问范围至 `WORKING_DIR` 并阻止敏感路径访问，显著提升了系统安全性。
- **进程管理优化**：合并了 [PR #5014](https://github.com/agentscope-ai/QwenPaw/pull/5014)，修复了 Docker 重启时 MCP 子进程累积导致控制台加载缓慢的问题，改善了资源管理。
- **功能扩展**：关闭了 [PR #5033](https://github.com/agentscope-ai/QwenPaw/pull/5033)，支持从 AgentHub 导入智能体并增强 A2A（Agent-to-Agent）能力，扩展了生态兼容性。
- **测试覆盖**：新增了针对 Phase 5 模块的 129 个单元测试用例 ([PR #4973](https://github.com/agentscope-ai/QwenPaw/pull/4973))，覆盖了 `local_models`、`providers` 等核心模块，提升了代码健壮性。
- **桌面端体验**：合并了 [PR #5051](https://github.com/agentscope-ai/QwenPaw/pull/5051)，解决了 Windows 桌面端重启后端口变化导致配置丢失的问题。

## 4. 社区热点
今日社区讨论主要集中在架构升级与功能对标上：

- **[Issue #5017](https://github.com/agentscope-ai/QwenPaw/issues/5017) [CLOSED]**：建议借鉴 Hermes Agent 的“学习循环”特性。
  - **热度**：评论数 10，点赞数 3。
  - **分析**：用户高度认可 CoPaw 的本地化体验，但强烈建议引入 Agent 自我进化机制，能够自动从行为中创建并迭代技能。这反映了用户对 Agent 智能化、自动化能力进阶的迫切需求。
  
- **[Issue #4727](OPEN)**：后端从 AgentScope 1.x 迁移至 AgentScope 2.0。
  - **热度**：评论数 8。
  - **分析**：这是一个标记为 Breaking Change 的核心架构升级 Issue。讨论集中在迁移策略和新架构的适配上，预计将是下一阶段开发的重点，可能影响后续版本的插件和配置兼容性。

- **[Issue #5015](https://github.com/agentscope-ai/QwenPaw/issues/5015) [OPEN]**：Windows 桌面端前端加载不流畅。
  - **热度**：评论数 5。
  - **分析**：用户反馈在任务执行或会话切换时 CPU 激增且卡顿，尤其集中在 1.1.11 及以下版本。这表明 Tauri 桌面端的性能优化亟待提上日程。

## 5. Bug 与稳定性
今日报告并处理了多个影响体验的关键 Bug，部分已修复：

- **高优先级**：
  - **MCP 进程累积 ([Issue #4834](https://github.com/agentscope-ai/QwenPaw/issues/4834))**：导致服务重启后控制台加载缓慢。**状态**：已通过 [PR #5014](https://github.com/agentscope-ai/QwenPaw/pull/5014) 修复。
  - **文件预览路径穿越风险 ([PR #4981](https://github.com/agentscope-ai/QwenPaw/pull/4981))**：安全漏洞，已修复。

- **中等优先级**：
  - **微信推送失败 ([Issue #4878](https://github.com/agentscope-ai/QwenPaw/issues/4878))**：定时任务执行成功但结果无法推送到微信。**状态**：已关闭（推测已修复）。
  - **新建会话配置丢失 ([Issue #4666](https://github.com/agentscope-ai/QwenPaw/issues/4666))**：新建会话后 Models 页面加载失败。**状态**：已关闭。
  - **Windows 桌面端启动慢 ([Issue #5047](https://github.com/agentscope-ai/QwenPaw/issues/5047))**：自切换到 Tauri 后启动时间延长至十几分钟。**状态**：Open，待处理。
  - **DeepSeek API 工具调用兼容性 ([Issue #5045](https://github.com/agentscope-ai/QwenPaw/issues/5045))**：内置工具命名包含点号（.）导致 DeepSeek API 校验失败。**状态**：Open，需要适配不同 API 的命名规范。

## 6. 功能请求与路线图信号
结合 Issue 与 PR 动态，以下是潜在的功能演进方向：

- **记忆系统进化**：[Issue #4994](https://github.com/agentscope-ai/QwenPaw/issues/4994) 提出引入“记忆系统自进化”逻辑，结合热点 Issue #5017 的建议，未来版本可能会重点强化 Agent 的自主学习与分层记忆能力。
- **视觉模型回退机制**：[Issue #4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) 建议支持独立视觉模型配置，允许纯文本主模型通过“视觉中转站”处理图片，呼声较高，符合多模态解耦趋势。
- **技能管理增强**：[Issue #2961](https://github.com/agentscope-ai/QwenPaw/issues/2961) 提出的技能分类功能，配合 [PR #4969](https://github.com/agentscope-ai/QwenPaw/pull/4969) 的标签下载支持，显示项目正在向更成熟的技能库管理方向发展。

## 7. 用户反馈摘要
- **痛点**：
  - **桌面端性能**：Windows 用户普遍反映 Tauri 版本启动慢、运行卡顿（[Issue #5047](https://github.com/agentscope-ai/QwenPaw/issues/5047), [Issue #5015](https://github.com/agentscope-ai/QwenPaw/issues/5015)）。
  - **配置复杂性**：用户在配置微信推送、DeepSeek 等第三方模型时遇到兼容性和参数校验问题（[Issue #4878](https://github.com/agentscope-ai/QwenPaw/issues/4878), [Issue #5045](https://github.com/agentscope-ai/QwenPaw/issues/5045)）。
  - **界面交互**：会话切换卡顿、图片预览抖动等前端体验细节仍有优化空间。

- **满意点**：
  - 用户称赞 CoPaw 国内本地化做得好，“设置清晰无门槛，开箱即用”（来自 Issue #5017）。
  - 对项目快速修复安全漏洞和进程管理问题表示认可。

## 8. 待处理积压
以下重要 Issue 长期未解决或近期活跃但需持续关注：

- **[Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)**：**AgentScope 2.0 迁移**。这是下个大版本的关键路径，目前处于 Open 状态，需要重点关注其对现有插件和配置的破坏性影响。
- **[Issue #3751](https://github.com/agentscope-ai/QwenPaw/issues/3751)**：**Windows 系统托盘功能**。自 4 月提出至今，用户对后台运行需求依然存在，近期有更新，建议纳入桌面端优化计划。
- **[Issue #5047](https://github.com/agentscope-ai/QwenPaw/issues/5047)**：**Windows Tauri 启动慢**。严重影响桌面端用户体验，急需定位根因（可能是资源加载或网络请求阻塞）。

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