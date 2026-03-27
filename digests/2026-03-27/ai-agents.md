# OpenClaw 生态日报 2026-03-27

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-27 02:39 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
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

以下是根据 OpenClaw 项目 2026-03-27 的 GitHub 数据生成的动态日报。

---

# OpenClaw 项目日报 (2026-03-27)

## 1. 今日速览
OpenClaw 项目今日维持极高的社区活跃度，过去24小时内共有 **1000个** Issue 和 PR 发生状态更新或新增。项目目前处于 **高强度迭代期**，尽管没有发布新的稳定版本，但开发重心明显向 **修复近期版本引入的回归问题（特别是 Discord 和 Gateway 稳定性）** 倾斜。社区对 **插件生态（微信、Matrix）兼容性** 及 **多语言支持** 的关注度持续升温，同时大量待合并的 PR 表明下一个版本可能会包含 MCP 客户端、多渠道 Cron 推送等重大功能更新。

## 2. 版本发布
**无新版本发布**。
*注：尽管过去24小时有大量活跃 PR，但官方尚未发布新的 Release。当前社区主要在使用 2026.3.22+ 版本，并反馈了较多兼容性问题。*

## 3. 项目进展
今日共有 **149个** PR 被合并或关闭，重点修复了系统稳定性与特定渠道的 Bug：

*   **关键合并 (Merged):**
    *   **[PR #55214]** `fix: trigger model fallback on HTTP 503 Service Unavailable`: 修复了当 LLM 服务返回 503 错误时无法触发模型故障转移的问题，显著提升了服务高可用性。
    *   **[PR #33984]** `fix(memory): add MemoryIndexManager.closeAll`: 修复了内存索引管理器在关闭时的资源泄漏问题。
    *   **[PR #33777]** `fix(agents): workspace boundary checks`: 增强了沙箱安全性，防止 `remove` 和 `mkdirp` 操作逃逸工作区边界。

*   **待合并重点 (Pending Merges - 可能进入下一版本):**
    *   **[PR #49505]** `feat(mcp): HTTP transport support`: 为 OpenClaw 添加 MCP (Model Context Protocol) 的 HTTP 传输支持及工具命名空间，这将大幅扩展 Agent 的工具调用能力。
    *   **[PR #44859]** `feat(cron): add additional targets`: 允许 Cron 任务将结果分发到多个渠道，解决了自动化任务只能单点推送的痛点。
    *   **[PR #29793]** `feat(concurrency): workspace mutation locking`: 引入工作区变更锁，解决多个 Agent 并发操作同一文件时的冲突问题。

## 4. 社区热点
今日讨论最激烈的话题集中在 **平台支持扩展** 和 **本地化** 上，同时也暴露了近期版本的兼容性危机：

1.  **[Issue #75]** **Linux/Windows 客户端请求** (👍 66, 评论 52)
    *   **诉求**：社区强烈呼吁提供 Linux 和 Windows 原生客户端（目前仅有 macOS/iOS/Android）。
    *   **分析**：这不仅是跨平台需求，更反映了开发者群体希望将 OpenClaw 作为桌面生产力工具的意愿。
2.  **[Issue #3460]** **国际化支持 (i18n)** (评论 114)
    *   **诉求**：尽管官方表示目前没有带宽支持多语言，但社区提交了大量相关 PR 和请求。
    *   **分析**：作为一个面向全球的 AI Agent 项目，非英语市场的增长瓶颈已显现。
3.  **[Issue #52885]** **微信插件兼容性危机** (评论 42)
    *   **诉求**：腾讯官方微信插件 `@tencent-weixin/openclaw-weixin` v1.0.3 与 OpenClaw 2026.3.22+ 版本不兼容，导致插件加载失败。
    *   **分析**：这属于破坏性变更，严重影响了中文用户的使用，急需官方介入修复或发布补丁。

## 5. Bug 与稳定性
近期版本（特别是 2026.3.12 及 2026.3.24）引入了多个严重的回归问题，导致服务崩溃或功能失效：

*   **严重**:
    *   **[Issue #45064]** **内存溢出 (OOM)**: 升级到 2026.3.12 后，执行基本 CLI 命令（如 `doctor`）会导致 JavaScript 堆内存耗尽，CLI 完全不可用。*(暂无 Fix PR)*
    *   **[Issue #54931] & [Issue #54729]** **Gateway 崩溃循环**: v2026.3.24 版本中，Discord 健康监控检测到陈旧 Socket 后触发未捕获异常，导致整个 Gateway（包括 Telegram 等其他通道）反复崩溃。*(相关 PR: #55000, #55348 正在处理中)*

*   **高**:
    *   **[Issue #23538]** **Anthropic 认证失效**: `setup-token` 存储成功，但运行时报 401 Token 无效。
    *   **[Issue #53870]** **安全扫描阻塞**: Matrix 插件安装被 VirusTotal 扫描挂起，导致无法配置端到端加密通信。

## 6. 功能请求与路线图信号
*   **MCP 客户端原生支持** ([Issue #29053]): 随着相关 PR ([#49505](https://github.com/openclaw/openclaw/pull/49505)) 的提交，OpenClaw 正积极通过 MCP 协议接入外部工具生态，这将是下一阶段的核心竞争力。
*   **实时语音通话** ([Issue #7200]): 用户希望集成 Twilio/WebRTC 实现类似电话的实时双向语音交互，而不仅仅是语音留言。
*   **成本优化的 LLM 网关** ([Issue #9244]): 呼吁引入智能路由和缓存机制以降低 API 调用成本，PR #9244 提议的 LLM Gateway 架构可能会被采纳。

## 7. 用户反馈摘要
*   **痛点**：**Token 浪费** ([Issue #9157]) 是高级用户的普遍抱怨，当前上下文注入策略消耗了大量 Token（约 35k/消息），导致成本高昂。同时，**Tool Hallucination** ([Issue #45046]) 问题（Agent 只是在文本中假装调用了工具）严重影响了可信赖度。
*   **场景**：大量用户将 OpenClaw 用于 **多平台消息聚合** (Slack, Discord, Telegram, 微信) 和 **自动化运维**，因此对 **消息路由准确性** 和 **Shell 命令执行环境** 极其敏感。
*   **评价**：用户对多 Agent 协作概念非常兴奋，但对近期版本的稳定性（尤其是 OOM 和各种崩溃）表示担忧，认为项目处于 "高速开发但不够稳定" 的阶段。

## 8. 待处理积压
以下重要问题长期悬而未决，建议维护者优先关注：

*   **[Issue #9157]** **性能问题**: Workspace 文件注入导致 Token 预算浪费 93.5% (创建于 2026-02-04, 👍 12)。
*   **[Issue #17101]** **功能缺失**: Telegram 语音消息无法自动转录为文字 (创建于 2026-02-15, 标记为 Stale)。
*   **[Issue #25592]** **UX 问题**: Tool calls 之间的思考文本泄漏到消息频道 (创建于 2026-02-24)。
*   **[Issue #23452]** **跨渠道 Bug**: Discord/Telegram 等渠道的视觉/图像识别功能系统性失效 (创建于 2026-02-22)。

---

## 横向生态对比

# 2026-03-27 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正经历从 **"单一对话工具" 向 "多模态多智能体平台"** 的关键跃迁。
今日各项目普遍发布了针对 **稳定性** 和 **渠道兼容性** 的更新，显示出生态正处在 "爆发期后的技术偿债阶段"。开发者对 **模型上下文协议 (MCP)**、**长期记忆** 及 **企业级安全性** 的关注度超过了单纯的大模型调用能力。此外，**多渠道接入**，特别是对微信、飞书 等封闭生态的渗透，已成为各项目争夺用户时长的核心战场。

## 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PRs (24h) | 版本动态 | 健康度/状态评估 |
| :--- | :---: | :---: | :--- | :--- |
| **OpenClaw** | **~1000** (更新/新增) | 149 (Merged) | 无发布 (迭代期) | ⚠️ **高热/高压**: 社区极度活跃，但回归问题严重，处于"甚至不稳定"的阵痛期。 |
| **NanoBot** | 15 | 102 (95 Pending) | 无发布 | 📈 **积压严重**: 贡献者热情高涨，但 95 个待合并 PR 表明审核能力不足，存在供应链风险。 |
| **CoPaw** | 50 | 45 (25 Merged) | **v1.0.0b1** | 🚀 **冲刺阶段**: 功能开发强劲，正式版前夕，但并发 Bug (CPU 100%) 亟待解决。 |
| **Zeroclaw** | 49 | 50 (23 Merged) | **v0.6.3** | ✅ **稳健迭代**: 快速响应安全与渠道问题，自我进化功能引入，质量与速度平衡较好。 |
| **LobsterAI** | 17 | 50 (34 Pending) | **v2026.3.26** | 🌟 **架构升级**: 正式进入 Multi-Agent 时代，重点解决 UI 性能瓶颈。 |
| **TinyClaw** | 0 | 5 (5 Merged) | **v0.0.20** | 🛠️ **内部重构**: 专注解决 Docker 核心痛点，社区静默但代码质量提升显著。 |
| **IronClaw** | 15 | 38 (15 Merged) | 无发布 (v0.23.0 待发) | 🔧 **修复关键**: 集中修复 UTF-8 崩溃等底层严重 Bug，为下个大版本做准备。 |
| **NanoClaw** | 7 | 29 (8 Merged) | 无发布 | 🔌 **扩展连接**: 重点攻克 Signal/WhatsApp 接入及 Linux 部署兼容性。 |
| **ZeptoClaw** | 12 | 27 (24 Merged) | **v0.9.0 / v0.9.1** | 🏎️ **极速交付**: 单日两版，快速响应用户反馈，多云支持落地。 |
| **NullClaw** | 5 | 13 | 无发布 | 🛡️ **兼容适配**: 聚焦自定义模型与通讯渠道的稳定性修复。 |
| **Moltis** | Low | 2 | 无发布 | 🧘 **维护模式**: 关注本地化隐私与前端基础修复。 |
| **EasyClaw** | 0 | 0 | 无 | 💤 **静默**: 无活动。 |

## 3. OpenClaw 在生态中的定位

*   **核心参照与流量中心**: OpenClaw 毫无疑问是生态中的 "巨无霸"，其单日 1000+ 的动态量级远超同类（如 NanoBot 100+，CoPaw 50+）。它是功能的发源地和标准的制定者（如微信插件、MCP）。
*   **优势与隐忧**:
    *   *优势*: 具有最庞大的社区贡献量和插件生态，是多平台接入的标准目标。
    *   *隐忧*: 正面临严重的 **"规模不经济"**。近期版本（2026.3.22+）引入的 OOM 和 Gateway 崩溃等回归问题表明，其核心架构在高负载下已出现不稳定性。相比之下，**Zeroclaw** 和 **ZeptoClaw** 虽然体量较小，但在今日的更新中表现出更好的故障修复响应速度和质量控制。
*   **技术路线**: 采取激进的功能堆叠策略（MCP、多渠道 Cron、多 Agent），但稳定性维护滞后。相比之下，**TinyClaw** 选择了 "控制平面优先" 的稳健路线，**LobsterAI** 则在 UI/UX 的细腻度上进行了更多打磨。

## 4. 共同关注的技术方向

1.  **模型上下文协议 (MCP) 的深度集成**
    *   **涉及项目**: OpenClaw, Zeroclaw, CoPaw.
    *   **趋势**: 从简单的工具调用转向标准化的 MCP Server 接入。社区强烈要求支持通过 npm 或远程连接外部 MCP Server，以突破内置工具的功能天花板。
2.  **长期记忆与 "海马体" 架构**
    *   **涉及项目**: NanoBot, PicoClaw, CoPaw, NanoClaw.
    *   **趋势**: 单纯的上下文窗口已不能满足需求。项目纷纷探索基于 Graphiti 知识图谱、Mem0 或 "Seahorse" 生物启发式记忆系统，试图解决 Token 浪费和长期记忆丢失问题。
3.  **多智能体 协作**
    *   **涉及项目**: OpenClaw, LobsterAI, CoPaw, NanoBot.
    *   **趋势**: "单打独斗" 的助手正在被 "团队协作" 取代。LobsterAI 和 CoPaw 今日均发布了支持多 Agent 预设和技能的重大更新，允许针对不同意图路由到专用子智能体。
4.  **多云与自定义模型支持**
    *   **涉及项目**: ZeptoClaw, IronClaw, NanoClaw, NullClaw, LobsterAI.
    *   **趋势**: 开发者极度渴望摆脱单一模型依赖。ZeptoClaw 引入 Google Vertex AI，IronClaw 和 LobsterAI 推进多自定义 Provider 支持，显示了 "多云网关" 已成为智能体框架的标配功能。

## 5. 差异化定位分析

*   **OpenClaw / CoPaw / LobsterAI (全能型平台)**
    *   *定位*: 旨在成为全功能的生产力平台。
    *   *差异*: OpenClaw 重度依赖社区生态；CoPaw 侧重于企业级渠道（微信/飞书）的深度适配；LobsterAI (网易系) 则在 Web UI 体验和多 Agent 架构上表现得更现代化。
*   **NanoBot / IronClaw (架构与科研型)**
    *   *定位*: 关注底层架构的健壮性与扩展性。
    *   *差异*: NanoBot (港大 DS) 带有浓厚的学术与实验色彩，探索记忆框架和 Agent Runner 重构；IronClaw 则在 OAuth、多租户和 Rust/安全层面进行深耕，更适合严肃的生产环境。
*   **Zeroclaw / ZeptoClaw / TinyClaw (轻量与特定场景型)**
    *   *定位*: 追求轻量、部署便捷或特定功能。
    *   *差异*: Zeroclaw 强调自我进化与安全沙箱的易用性；ZeptoClaw 专注于 Telegram 体验和多 Cloud AI 的快速接入；TinyClaw 则致力于打造 Docker 友好的控制平面。
*   **NullClaw / NanoClaw / Moltis (长尾与特定需求型)**
    *   *定位*: 填补生态边缘空缺。
    *   *差异*: NullClaw 和 NanoClaw 专注于连接长尾通讯协议（Signal, QQ, WhatsApp Baileys）；Moltis 关注本地化隐私。

## 6. 社区热度与成熟度

*   **第一梯队 (高速爆发)**: **OpenClaw, CoPaw, LobsterAI**。
    *   *特征*: Issue 互动极多，功能更新频繁，但也伴随着大量的 Bug 报告和配置咨询。处于 "痛并快乐着" 的增长期。
*   **第二梯队 (稳健迭代)**: **Zeroclaw, NanoBot, ZeptoClaw, IronClaw**。
    *   *特征*: 开发节奏有序，PR 有明确的架构目标。虽然 NanoBot 存在 PR 积压，但代码质量较高。ZeptoClaw 展现了极高的维护者响应速度。
*   **第三梯队 (内部打磨)**: **TinyClaw, NullClaw, NanoClaw**。
    *   *特征*: 社区噪音较少，主要由核心维护者驱动，专注于解决特定场景下的硬核技术债（如 Docker 权限、协议适配）。

## 7. 值得关注的趋势信号

1.  **安全与易用性的博弈 (Security vs. Usability)**
    *   *信号*: Zeroclaw 和 OpenClaw 社区均出现了关于 "安全策略过于复杂导致难以使用" 的强烈抱怨。用户既想要 Agent 拥有自主权，又害怕失控。
    *   *建议*: 开发者应关注 **"渐进式安全"** 设计，如 Zeroclaw 引入的 `security.enabled` 开关，允许在可信环境一键降低摩擦，同时保留高危操作的熔断机制。
2.  **开源供应链安全风险**
    *   *信号*: NanoBot 报告了 PyPI 包恶意代码事件，这是开源生态爆发后的必然阴影。
    *   *建议*: 企业级用户在选型时，需将项目的依赖管理规范和发布流程安全性纳入核心考量，优先选择有明确 `SECURITY.md` 和自动化 CI/CD 把控的项目（如 IronClaw）。
3.  **Agent 的 "幻觉" 不仅仅在文本，也在 "行动"**
    *   *信号*: OpenClaw 和 NanoBot 均报告了 Agent "假装执行工具" (Tool Hallucination) 的问题。
    *   *建议*: 单纯依赖 LLM 的 Function Calling 已不足够，未来的架构需要引入 **"执行验证层"** (Execution Verification Layer)，确认工具是否真实被调用并返回了有效结果，而非仅凭 LLM 的一面之词。
4.  **Token 成本与性能的精细化运营**
    *   *信号*: 从 PicoClaw 的 Seahorse 记忆到 ZeptoClaw 的多层压缩，再到用户对 Token 用量显示的强烈需求。
    *   *建议*: "Token 感知" (Token-aware) 的计算将成为核心竞争力。能够智能压缩上下文、路由廉价模型的框架将获得更大优势。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-27)

**分析师**：AI 开源项目观察员
**数据源**：github.com/HKUDS/nanobot

---

## 1. 今日速览
NanoBot 项目今日维持了极高的社区活跃度与开发迭代速度。过去24小时内，项目收到了高达 **102 个 PR 更新**（其中 95 个待合并），显示出社区贡献者正在大规模推进新功能开发与代码重构。Issue 方面共有 **15 条更新**，包含 3 个已关闭问题。今日最显著的特征是**多智能体架构**与**记忆框架**成为了开发重心，同时社区对项目安全性及命名混淆问题给予了高度关注。整体来看，项目处于快速成长期，但需警惕 PR 积压带来的合并压力。

## 2. 版本发布
*   **无新版本发布**。
    *   *注*：虽然 Issues 中提到了 `v0.1.4.post5`，但过去24小时内官方未发布新的 Release。鉴于当前有大量待合并的 Feature PR，预计官方可能正在筹备一个包含重大架构升级（如多智能体支持）的版本。

## 3. 项目进展
今日共有 **7 个 PR 被合并或关闭**，主要集中在底层架构优化与渠道修复，为即将到来的多智能体功能奠定了基础。

*   **架构重构与代码清理**：
    *   [PR #2524](https://github.com/HKUDS/nanobot/pull/2524) **[MERGED]**：提取了通用的 `AgentRunner`，解决了主智能体与子智能体之间重复的执行循环代码，提升了代码可维护性。
    *   [PR #2210](https://github.com/HKUDS/nanobot/pull/2210) **[MERGED]**：增加了语音转录后端选择，支持本地 `faster-whisper` 或 Groq，减少了对单一 API 的依赖。

*   **渠道与连接修复**：
    *   [PR #2527](https://github.com/HKUDS/nanobot/pull/2527) **[MERGED]**：修复了 Telegram 群组话题（Topic）回复错位的问题，确保回复能准确落入对应的子话题。
    *   [PR #987](https://github.com/HKUDS/nanobot/pull/987) **[MERGED]**：增强了 CLI 启动时的预检机制，提前报错配置不匹配的模型提供商，避免运行时崩溃。

*   **已关闭讨论**：
    *   [PR #2486](https://github.com/HKUDS/nanobot/pull/2486)：关于迁移至 `discord.py` 库的讨论暂告一段落。

## 4. 社区热点
今日讨论热度最高的议题集中在安全性、多智能体配置及项目身份认同。

1.  **严重安全警告与供应链风险**
    *   [Issue #2439](https://github.com/HKUDS/nanobot/issues/2439)：**[Critical]** 社区报告 `nanobot-ai` PyPI 包中发现恶意代码。虽然有观点指出这可能源于供应链攻击或依赖混淆，但该 Issue 获得了 4 个赞和大量关注，提醒用户务必检查安装源和环境安全。
2.  **项目身份危机**
    *   [Issue #2500](https://github.com/HKUDS/nanobot/issues/2500)：用户指出 GitHub 上出现了另一个名为 "nanobot-ai" 的 MCP Server 项目，且拥有独立网站。这导致了 SEO 混淆和用户困惑，社区呼吁项目方明确区分或重命名。
3.  **多智能体与记忆系统架构**
    *   [PR #2515](https://github.com/HKUDS/nanobot/pull/2515)：提出了**可插拔记忆框架**，集成 Mem0/Graphiti/Memobase，引发了关于长期记忆实现的讨论。
    *   [PR #2509](https://github.com/HKUDS/nanobot/pull/2509)：提出了完整的**多智能体系统**，旨在根据意图自动路由到专用子智能体，这是目前项目最核心的功能演进方向。

## 5. Bug 与稳定性
今日报告的问题主要集中在特定模型兼容性、工具调用逻辑及错误处理。

*   **严重/核心逻辑错误**：
    *   [Issue #2511](https://github.com/HKUDS/nanobot/issues/2511)：SDK 内置重试机制与 NanoBot 的重试逻辑叠加，导致网络错误时出现长达 10 分钟的静默挂起。
    *   [Issue #2513](https://github.com/HKUDS/nanobot/issues/2513)：在使用 GPUStack 部署的模型时，`read_file` 工具调用失败，模型直接返回了 JSON 参数而不是执行工具，导致流程中断。
*   **渠道/模型兼容性**：
    *   [Issue #2519](https://github.com/HKUDS/nanobot/issues/2519)：微信渠道使用 MiMo V2 Omni 模型时，因 Tool Call 后缺少 `text` 字段报错。
    *   [Issue #2487](https://github.com/HKUDS/nanobot/issues/2487)：智能体存在“幻觉”，在没有实际执行操作时向用户谎报“已完成”。(已有修复提案 [PR #2525](https://github.com/HKUDS/nanobot/pull/2525))

## 6. 功能请求与路线图信号
从活跃的 PR 和 Issue 来看，项目正在向高度模块化和多模态演进。

*   **多智能体协作**：[PR #2509](https://github.com/HKUDS/nanobot/pull/2509) 和 [PR #2483](https://github.com/HKUDS/nanobot/pull/2483) 表明，NanoBot 正试图打破“单智能体”限制，支持根据频道或意图分配不同的 Persona 和工具集。
*   **多模态视觉分离**：[Issue #2339](https://github.com/HKUDS/nanobot/issues/2339) 请求支持独立的 Vision Provider，允许在 Coding 场景使用廉价/快速模型，在图像场景使用专用视觉模型。
*   **技能系统增强**：[Issue #2489](https://github.com/HKUDS/nanobot/issues/2489) 建议增加 `/skill` 命令，允许用户显式激活技能，而非完全依赖 AI 隐式判断。
*   **成本控制**：[Issue #2406](https://github.com/HKUDS/nanobot/issues/2406) 建议当 HEARTBEAT 无任务时跳过 LLM 调用，以节省 Token 消耗。

## 7. 用户反馈摘要
*   **痛点**：用户对**工具调用失败后的静默或误导性反馈**感到沮丧（Issue #2487），这在实际生产环境中会导致难以调试的问题。
*   **兼容性**：大量用户尝试接入非 OpenAI 模型（如 MiniMax, StepFun, Gemini, GPUStack），反映出 NanoBot 作为统一网关的受欢迎程度，但也暴露了其对第三方模型遵循 Tool Call 规范的严格要求（Issue #2373, #2513）。
*   **部署体验**：部分用户对复杂的依赖和配置感到困惑（Issue #144），希望能有更友好的 "Fail Fast" 机制（已在今日 PR #987 中部分解决）。

## 8. 待处理积压
*   **PR 拥堵**：目前有 **95 个待合并 PR**，这是一个显著的积压信号。其中包括 [PR #2010](https://github.com/HKUDS/nanobot/pull/2010) (WhatsApp 媒体支持) 和 [PR #2263](https://github.com/HKUDS/nanobot/pull/2263) (Tool Hints 增强) 等长期未合并的功能。
*   **遗留问题**：[Issue #144](https://github.com/HKUDS/nanobot/issues/144) 关于 Gemini 模型配置错误的反馈已持续一个月，至今尚未完全解决。
*   **维护者建议**：建议项目方优先处理安全相关 Issue (#2439) 及导致系统挂起的严重 Bug (#2511)，并尽快启动 PR 清理计划以避免社区贡献者流失。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-27)

你好！我是 AI 智能体项目分析师。以下是基于 Zeroclaw (github.com/zeroclaw-labs/zeroclaw) GitHub 仓库数据的 2026年3月27日 项目动态日报。

---

## 1. 今日速览

Zeroclaw 项目今日保持着**极高的活跃度**与快速迭代节奏。过去24小时内，项目发布了 **v0.6.3** 版本，引入了自我改进技能和 SSE 流式响应等关键功能。社区互动热烈，共产生了 **49 条 Issue 更新**（关闭 31 条）和 **50 条 PR 更新**。开发重心明显向**多渠道支持（特别是 Matrix 和 Discord）**以及**安全策略的易用性**倾斜，虽然出现了关于安全沙箱配置复杂性的反馈，但社区已迅速提交修复 PR。

---

## 2. 版本发布

### **v0.6.3**
今日发布了新版本 `v0.6.3`，主要聚焦于智能体能力增强与系统兼容性。
- **核心更新**：
  - **自我进化能力**：增加了 Skill 自我改进与 Pipeline 工具，允许 Agent 优化自身工作流 (Closes #3683)。
  - **Windows 支持**：新增 Windows 设置批处理脚本与指南，降低 Windows 用户的部署门槛 (Closes #3693)。
  - **流式响应**：Anthropic 提供商现在支持 SSE (Server-Sent Events) 流式聊天响应，显著提升交互体验。
- **功能优化**：
  - **渠道通知**：当发生 Provider 回退（fallback）时，系统会通知用户，增加了透明度。
  - **CI/CD**：集成了 Discord 版本发布公告。
  - **CLI**：增强了服务相关命令。

---

## 3. 项目进展

今日共有 **23 个 PR 被合并或关闭**，主要推进了以下领域：

- **Matrix 渠道深度修复**：针对 Matrix 渠道的摩擦点进行了大量修复。
  - PR #4700 和 #4665 修复了 `allowed_rooms` 配置无效的问题，恢复了多房间监听能力。
  - PR #4805 修复了线程上下文丢失的问题，确保多轮对话的连续性。
- **安全性与配置灵活性**：
  - PR #4807 引入了 `security.enabled` 配置项，允许用户在可信环境中完全禁用安全限制，响应了近期关于安全策略过于严格的用户反馈。
- **会话持久化与上下文**：
  - PR #4813 修复了从历史记录恢复会话时工具调用（Tool-calling）中断的严重问题（针对 Anthropic API）。
  - PR #4811 优化了会话文件键名的编码方式，防止特殊字符导致的会话丢失。

**进展评估**：项目在**渠道稳定性**（特别是 Matrix）和**会话连续性**方面取得了显著突破，修复了多个导致对话中断的 S2 级别 Bug。

---

## 4. 社区热点

今日讨论最热烈的问题集中在**外部工具集成**与**特定模型支持**上：

1.  **外部 MCP Server 支持 ([#1380](https://github.com/zeroclaw-labs/zeroclaw/issues/1380))**
    - **热度**：13 条评论，8 👍
    - **分析**：这是今日最受关注的话题。用户强烈希望通过 npm 或远程方式集成外部 MCP (Model Context Protocol) 服务器。这表明用户希望 Zeroclaw 能突破内置工具的限制，连接更广泛的第三方工具生态。
2.  **阿里云百炼 Coding Plan 不可用 ([#3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059))**
    - **热度**：7 条评论
    - **分析**：用户反馈无法使用阿里云百炼的 Coding Plan。作为国内重要的 LLM 提供商，对 Qwen 等模型的原生支持对中国用户至关重要。
3.  **Zeroclaw Logo 重设计 ([#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710))**
    - **热度**：2 条评论，1 👍
    - **分析**：有用户发起了重设计 Logo 的提议。虽然是非功能性讨论，但显示了社区对项目品牌形象的关注和归属感。

---

## 5. Bug 与稳定性

今日报告了多个关键 Bug，主要集中在**上下文丢失**和**多模态处理**上。幸运的是，多数已有对应的修复 PR。

| 严重度 | Issue | 描述 | 状态/Fix PR |
| :--- | :--- | :--- | :--- |
| **S2** | [#4804](https://github.com/zeroclaw-labs/zeroclaw/issues/4804) | **Matrix 线程回复缺乏上下文**：第二条消息丢失对话历史。 | Open / Fix in PR #4805 |
| **S2** | [#4810](https://github.com/zeroclaw-labs/zeroclaw/issues/4810) | **Anthropic API 400 错误**：恢复会话时出现孤立的 `tool_use` 块导致报错。 | Open / Fix in PR #4813 |
| **S1** | [#4808](https://github.com/zeroclaw-labs/zeroclaw/issues/4808) | **Discord 图片处理错误**：Bot 将图片识别为文本嵌入而非图片载荷，导致“看不见图片”。 | Open |
| **S1** | [#4752](https://github.com/zeroclaw-labs/zeroclaw/issues/4752) | **安全模型过于复杂**：用户反馈安全策略配置极其繁琐，导致基本操作（如访问本地文件）被频繁拦截。 | Closed / Fix in PR #4807 |
| **S2** | [#4806](https://github.com/zeroclaw-labs/zeroclaw/issues/4806) | **重启后 Matrix 线程上下文丢失**：Daemon 重启导致记忆清洗。 | Open |

---

## 6. 功能请求与路线图信号

结合 Issues 和活跃的 PRs，以下功能极有可能在近期被纳入版本：

-   **更强大的沙箱隔离**：Issue #4812 提议为原生沙箱后端（bwrap, firejail）增加 seccomp 和资源限制，以匹配 Docker 后端的安全性。这与项目目前重视安全的基调一致。
-   **Mention 配置扩展**：PR #4680 和 #4697 正在为 Matrix 和 Slack 增加 `mention_only` 配置。这将允许 Bot 仅在被 @ 时响应，是高频请求的功能，合并概率极高。
-   **Homebrew 安装修复**：Issue #4814 指出 Homebrew 合并失败，这是阻碍用户快速上手的基础设施问题，预计将作为高优先级处理。

---

## 7. 用户反馈摘要

从今日的评论和 Issue 描述中，可以提炼出以下用户情绪与痛点：

-   **痛点：安全策略挫败感**：多位用户（如 #4752, #4485）表达了对当前安全模型“过度复杂”、“难以调试”的沮丧。即使是 `autonomy level = "full"`，简单的命令如 `ls` 或 `firefox` 仍被拦截。**易用性与默认安全之间的平衡是目前最大的摩擦点。**
-   **场景：多平台接入需求**：除了主流的 Discord/Slack，用户对 **Matrix**（隐私通讯）和 **飞书/Lark**（企业场景）的支持需求很高，且对这些平台的稳定性非常敏感。
-   **场景：特定模型依赖**：国内用户对阿里云百炼、千帆等平台的支持有刚性需求，目前的兼容性存在问题（#3059, #4771）。

---

## 8. 待处理积压

以下重要 Issue 长期未得到最终解决或响应，建议维护者关注：

1.  **Homebrew 发布受阻**：Issue [#4814](https://github.com/zeroclaw-labs/zeroclaw/issues/4814) 提到 v0.6.4 版本在 Homebrew-core 中合并失败，影响 macOS 用户的升级体验。
2.  **Discord 图片识别异常**：Issue [#4808](https://github.com/zeroclaw-labs/zeroclaw/issues/4808) 导致 Discord Bot 无法“看”图片，严重影响了多模态功能的可用性，目前尚未有官方修复 PR 提交。

---
*数据来源：Zeroclaw GitHub 仓库 (2026-03-27)*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-27)

## 1. 今日速览
PicoClaw 项目今日保持了极高的活跃度，过去24小时内共有 **29 条 Issues 更新** 和 **72 条 PR 更新**，显示出社区开发的强劲势头。项目如期发布了 **v0.2.4-nightly.20260327** 自动构建版本。开发重心主要集中在三个方面：**配置系统的重构与安全性增强**、**Web 端功能的完善（如流式输出与搜索时间筛选）**，以及 **Telegram/飞书等渠道的兼容性修复**。整体来看，项目正在为下一个稳定版本密集修复回归问题并打磨用户体验。

---

## 2. 版本发布
- **Version**: `nightly` (Nightly Build)
- **Tag**: `v0.2.4-nightly.20260327.e6c05cb4`
- **Details**: 这是一个自动化发布的每日构建版本，包含最新的代码提交，可能存在不稳定性，仅供测试用途。
- **Changelog**: [v0.2.4...main](https://github.com/sipeed/picoclaw/compare/v0.2.4...main)

---

## 3. 项目进展
今日共有 **34** 个 PR 被合并或关闭，显著推进了以下领域：

- **配置与安全性重构**：PR #2068 正在简化配置和安全性文件的结构，同时 PR #1986 和 #2013 已合并/完成，增加了安全配置和日志级别的文档说明。
- **Web 端体验优化**：
    - PR #2057 实现了 Web 聊天界面的**助手回复流式传输**，大幅提升交互体验。
    - PR #2070 为 `web_search` 工具增加了**时间范围过滤**，并提高了默认搜索结果数量。
    - PR #2056 修复了 Web 端无法保存内置搜索工具（如百度搜索）API Key 的问题。
- **跨平台构建支持**：PR #2051 修复了 Makefile 在 Windows (Git Bash/MSYS2) 环境下的构建问题，确保生成正确的 `.exe` 后缀。
- **依赖更新**：Dependabot 提交了约 10 个 PR 用于升级前端和后端依赖，保持库的现代化。

---

## 4. 社区热点
今日讨论最活跃的议题集中在 **架构扩展** 和 **渠道配置故障** 上：

1.  **[Feature] Seahorse - AI 代理的生物启发式记忆系统** [#1919](https://github.com/sipeed/picoclaw/issues/1919)
    *   **热度**：7 条评论，持续活跃中。
    *   **分析**：这是一个高价值的架构提案。作者建议引入类似大脑“海马体”的机制，将 AI 的短期上下文无损压缩为长期记忆。这表明社区对突破现有 `MEMORY.md` 文件限制、构建更持久的 Agent 记忆系统有强烈需求。
2.  **[Feature] Web Fetch 代理支持** [#413](https://github.com/sipeed/picoclaw/issues/413)
    *   **热度**：7 条评论，现已关闭。
    *   **分析**：该功能请求呼吁 `web_fetch` 工具支持 `HTTP_PROXY` 环境变量。该 Issue 的活跃反映了企业级用户或受限网络环境用户对代理功能的刚性需求。
3.  **[Feature] 多用户支持** [#995](https://github.com/sipeed/picoclaw/issues/995)
    *   **热度**：6 条评论，现已关闭。
    *   **分析**：关于单实例多用户（家庭/朋友共享）的讨论。这涉及全局内存和任务调度的隔离问题，是 PicoClaw 从“个人工具”向“团队服务”转型的关键瓶颈。

---

## 5. Bug 与稳定性
v0.2.4 版本发布后，**配置兼容性** 和 **特定渠道连接** 是 Bug 报告的重灾区：

### 🔴 严重
*暂无导致数据丢失或系统崩溃的严重 Bug 报告，但以下问题影响了核心功能可用性。*

### 🟠 中等
1.  **Telegram/Discord 配置保存失败** [#2027](https://github.com/sipeed/picoclaw/issues/2027), [#2072](https://github.com/sipeed/picoclaw/issues/2072)
    *   **现象**：升级到 v0.2.4 后，无法在 Web 端保存 Telegram 和 Discord 的 Bot Token，提示 "This field is required"。
    *   **状态**：**已修复**。由 PR #2071 解决，原因是配置占位符类型从字符串变为数组导致的向后兼容性问题。
2.  **飞书/QQ 频道配置丢失** [#2033](https://github.com/sipeed/picoclaw/issues/2033), [#2052](https://github.com/sipeed/picoclaw/issues/2052)
    *   **现象**：配置文件中的 `app_secret` 或飞书配置无法保存或在 Web 端显示异常。
    *   **状态**：PR #2031 正在重构飞书文件下载机制，可能与配置解析逻辑变动有关。
3.  **LongCat API 工具调用失效** [#2046](https://github.com/sipeed/picoclaw/issues/2046)
    *   **现象**：使用 LongChat API 时，PicoClaw 无法正确调用工具。

### 🟢 轻微
- **Docker 镜像构建问题** [#1350](https://github.com/sipeed/picoclaw/issues/1350)：Docker Compose 启动失败，已在今日修复/关闭。
- **Termux 环境兼容性** [#1936](https://github.com/sipeed/picoclaw/issues/1936)：Telegram 在 Android Termux 下运行出错。

---

## 6. 功能请求与路线图信号
结合 Issue 和 PR，以下功能极有可能在近期正式纳入：

1.  **高级记忆系统**：[#1919](https://github.com/sipeed/picoclaw/issues/1919) 提出的 "Seahorse" 记忆系统若被采纳，将是 Agent 智能度的一次重大飞跃。
2.  **任务中断控制**：[#2009](https://github.com/sipeed/picoclaw/issues/2009) 建议增加 `/stop` 命令以取消正在运行的耗时任务。这是提升用户掌控感的关键功能。
3.  **语音能力增强**：PR [#1939](https://github.com/sipeed/picoclaw/pull/1939) 正在重构 ASR/TTS 模块，旨在让 PicoClaw 能够发送和接收语音消息，这将使其向“全能数字助手”更进一步。
4.  **提供商自动故障转移**：PR [#2069](https://github.com/sipeed/picoclaw/pull/2069) 文档化了现有的模型级联故障转移功能，意味着系统在高并发下的稳定性将更有保障。

---

## 7. 用户反馈摘要
- **痛点：Web 配置界面功能缺失**
  用户反馈 Web 端不仅存在保存 Bug [#2027](https://github.com/sipeed/picoclaw/issues/2027)，还缺乏对内置工具（如百度搜索）API Key 的配置入口 [#2053](https://github.com/sipeed/picoclaw/issues/2053)。这表明 v0.2.4 的 Web UI 迁移可能有些仓促，遗漏了部分高级设置项。
- **场景：家庭/小团队共享**
  Issue [#995](https://github.com/sipeed/picoclaw/issues/995) 的讨论揭示了一个典型用例：用户希望部署一个实例供家人共用，但目前的全局 Memory 和 Job 机制导致了冲突。
- **评价：对代理和搜索的需求**
  Issue [#413](https://github.com/sipeed/picoclaw/issues/413) 显示，部分用户在受限网络环境中使用，强烈需要代理支持。同时，用户对搜索结果的时效性有要求，PR #2070 的合并正好回应了这一点。

---

## 8. 待处理积压
- **招募中：任务中断功能** [#2009](https://github.com/sipeed/picoclaw/issues/2009)
  该功能需求明确，且被标记为 `status: recruiting`，可能需要社区开发者贡献代码。
- **低优先级但重要：Dokploy 模板** [#1065](https://github.com/sipeed/picoclaw/issues/1065)
  非技术用户希望有更简单的部署方式。虽然标记为低优先级，但对于项目推广非常有价值。
- **长期讨论：Engram 持久化记忆** [#175](https://github.com/sipeed/picoclaw/issues/175)
  关于替换 `MEMORY.md` 的讨论仍在继续，这是项目轻量化与功能强大化之间的博弈点。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

这里是 **NanoClaw** 项目 2026-03-27 的动态日报。

# NanoClaw 项目日报 (2026-03-27)

## 1. 今日速览
NanoClaw 今日维持了**极高的开发活跃度**，社区贡献呈现井喷态势。过去 24 小时内共有 **29 个 PR 更新**（其中 8 个已合并/关闭）和 **7 个 Issue 更新**。重点进展集中在**通信渠道扩展**（Signal, WhatsApp Cloud/Baileys）和**底层架构增强**（CLI 重构、安全防护、记忆系统优化）。项目正处于功能快速迭代与稳定性修复并行的阶段，但也暴露出 Linux 环境下的部分兼容性问题。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 8 个 PR 被合并或关闭，显著提升了项目的健壮性与功能完整度：

*   **架构优化 (PR #1478):** 合并了 CrewOps 路由决策树，解决了容器代理与 SDK 之间的任务分配问题（即 "double-Claude" 问题），有助于优化 Token 消耗和响应逻辑。
    *  链接: [qwibitai/nanoclaw PR #1478](https://github.com/qwibitai/nanoclaw/pull/1478)*
*   **任务调度增强 (PR #1453):** 修复并改进了 Task Scripts 的代理指令，引导 Agent 使用 `schedule_task` 而非容易出错的 bash 循环。
    *链接: [qwibitai/nanoclaw PR #1453](https://github.com/qwibitai/nanoclaw/pull/1453)*
*   **认证稳定性 (PR #1468):** 增加了关于认证凭据的文档说明，推荐使用长效 Token 以避免容器频繁出现 401 错误。
    *链接: [qwibitai/nanoclaw PR #1468](https://github.com/qwibitai/nanoclaw/pull/1468)*
*   **容器挂载修复 (PR #1384):** 修复了 `claw` 命令在启动容器时未挂载 Group 文件夹导致的记忆丢失问题。
    *链接: [qwibitai/nanoclaw PR #1384](https://github.com/qwibitai/nanoclaw/pull/1384)*

## 4. 社区热点
今日讨论热度最高的话题集中在**多渠道接入**与**底层 LLM 支持**：

1.  **Signal 渠道集成 ([Issue #29](https://github.com/qwibitai/nanoclaw/issues/29) | [PR #1121](https://github.com/qwibitai/nanoclaw/pull/1121)):**
    *   社区对添加 Signal 加密通讯支持表现出浓厚兴趣（👍 3）。目前已有对应的 PR 提交，通过 `signal-cli` 实现HTTP 守护进程，正处于 Review 阶段。
2.  **GitHub Copilot SDK 后端支持 ([Issue #1350](https://github.com/qwibitai/nanoclaw/issues/1350)):**
    *   作者 @scottgl9 提议在 agent-runner 中原生集成 GitHub Copilot SDK (GPT-4.1 等)，作为 Anthropic Claude 的替代方案。这反映了用户对**多云/多模型部署**的强烈需求，目前该 Issue 已有 3 条讨论，暂未有人认领开发。

## 5. Bug 与稳定性
今日暴露了多个影响 Linux（特别是云服务器）部署的关键问题：

*   **🔴 严重: Linux 下 DM 消息静默丢失 ([Issue #1445](https://github.com/qwibitai/nanoclaw/issues/1445))**
    *   **问题:** 在 Ubuntu/Hetzner 环境下，WhatsApp DM 因 LID JID 转换失败被静默丢弃，且 `.env` 文件读写存在破坏性 Bug。
    *   **状态:** 已有修复 PR [#1446](https://github.com/qwibitai/nanoclaw/pull/1446) 正在处理中。
*   **🟠 中等: Docker 网络被宿主机防火墙阻断 ([Issue #1357](https://github.com/qwibitai/nanoclaw/issues/1357))**
    *   **问题:** Oracle Cloud 等环境的严格 iptables 规则导致容器无法访问宿主机的 Credential Proxy (端口 3001)。
    *   **状态:** 已有文档补充 PR [#1469](https://github.com/qwibitai/nanoclaw/pull/1469) 提供排查指南。
*   **🟢 修复: 单字符环境变量崩溃 ([PR #1476](https://github.com/qwibitai/nanoclaw/pull/1476))**
    *   **问题:** `.env` 中若存在单字符值（如 `X=a`），解析逻辑会将其截断为空字符串导致崩溃。PR 已提交修复。

## 6. 功能请求与路线图信号
*   **记忆系统升级:** Issue #1458 提议引入 **Graphiti 知识图谱** 替代现有的文件型记忆系统，以解决上下文膨胀和陈旧数据堆积问题。这可能是项目迈向 "智能体长期记忆" 的关键一步。
    *   *链接: [qwibitai/nanoclaw Issue #1458](https://github.com/qwibitai/nanoclaw/issues/1458)*
*   **渠道多样性:** 除了 Signal，社区还在推动 **WhatsApp Baileys** (Issue #1473) 和 **WhatsApp Cloud API** (PR #1474) 的实现，显示出项目正致力于成为全渠道 AI 智能体平台。
*   **安全性增强:** PR #1475 提交了对 `stopContainer` 命令注入漏洞的修复，PR #1380 引入了 `agentsh` 安全策略引擎，表明项目正在强化生产环境下的安全性。

## 7. 用户反馈摘要
*   **部署痛点:** 多名用户反馈在 Linux 首次部署时遇到困难，主要集中在防火墙配置和 `.env` 文件处理上。
*   **灵活性诉求:** 用户强烈希望 NanoClaw 能解绑对 Claude 的单一依赖，呼吁支持 OpenAI API (Issue #1092) 和 GitHub Copilot (Issue #1350)。
*   **使用体验:** 用户对 Token 自动管理 (PR #1471) 和宿主 Chrome 浏览器 (PR #1462) 的提案表示期待，这能显著降低使用成本并增强反检测能力。

## 8. 待处理积压
*   **⚠️ 安全隐患:** PR #1475 (命令注入修复) 和 PR #1476 (.env 崩溃修复) 需维护者优先 Review 并合并，目前项目存在安全风险。
    *   *链接: [qwibitai/nanoclaw PR #1475](https://github.com/qwibitai/nanoclaw/pull/1475)*
*   **⚠️ CLI 重构:** PR #1408 (CLI 重命名为 `nanoclaw` 并增加子命令) 是一个破坏性较大的更新，已开启数日，需尽快决定是否合并以确定后续开发基线。
    *   *链接: [qwibitai/nanoclaw PR #1408](https://github.com/qwibitai/nanoclaw/pull/1408)*
*   **长期 Issue:** Issue #1092 (OpenAI 支持) 持续开放中，虽优先级标记为 Low，但关注度较高，建议纳入长期路线图。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-03-27)

## 1. 今日速览
NullClaw 项目今日保持**高活跃度**，虽然无新版本发布，但代码库经历了显著的**重构与功能增强**。过去 24 小时内共有 **13 个 PR 更新**（主要贡献者 @manelsen 推进了大量核心功能）和 **5 个 Issues 更新**。项目目前正集中精力优化**多渠道接入稳定性**（Telegram, Signal, QQ, WeChat）以及**自定义模型提供商的兼容性**，显示出项目正从单一功能向健壮的多平台 AI 智能体框架演进。

## 2. 版本发布
**无**
*注：虽然合并了重要修复 PR #669，但截至统计时尚未打包为新 Release 版本。*

## 3. 项目进展
今日项目主要在**兼容性修复**和**架构重构**方面取得实质性进展：

*   **增强自定义模型兼容性 (MERGED):**
    *   PR [#669](https://github.com/nullclaw/nullclaw/pull/669) 已合并。该 PR 为自定义 vLLM/Qwen 等兼容接口启用了 `reasoning`（推理/思维链）功能。这直接解决了用户在使用本地模型或第三方 API 时遇到的“无法推理”或“产生幻觉”的问题（关联 Issue #659）。
*   **架构优化与统一 (PENDING):**
    *   PR [#677](https://github.com/nullclaw/nullclaw/pull/677) 正在推进将 Telegram 和 Signal 的启动流程统一到共享的轮询循环中，这将显著降低代码维护成本并提高通道稳定性。
*   **功能细化与工具集成:**
    *   PR [#708](https://github.com/nullclaw/nullclaw/pull/708) 将 `file_append` 工具接入了运行时。
    *   PR [#709](https://github.com/nullclaw/nullclaw/pull/709) 增加了 `session_id` 追踪和自定义 Body 参数支持，为高级用户提供了更细粒度的 API 控制。

## 4. 社区热点
今日社区关注点集中在**平台集成**与**现有 Bug 修复**上：

*   **微信插件集成请求 (热议):**
    *   Issue [#714](https://github.com/nullclaw/nullclaw/issues/714) 呼吁官方支持最近发布的 WeChat 插件。鉴于微信在中国及东南亚的庞大用户群，且竞品 OpenClaw 及其 Forks 已支持，这是目前最受关注的功能请求之一。
*   **Telegram 推理显示问题 (顽固 Bug):**
    *   Issue [#311](https://github.com/nullclaw/nullclaw/issues/311) 虽已关闭，但用户反馈在 Telegram 开启 `/reasoning` 后仍无法显示推理过程。这表明该功能可能存在交互或渲染上的深层问题，需关注后续是否有回退或新修复。

## 5. Bug 与稳定性
今日报告的问题主要集中在**连接稳定性**和**配置解析**：

1.  **QQ 连接超时丢失消息** [HIGH]
    *   Issue [#722](https://github.com/nullclaw/nullclaw/issues/722): 执行耗时任务时 QQ 容易断连，且无法恢复之前的 AI 回复。
    *   *状态:* 待处理。
2.  **Cloudflare API 配置解析错误** [MEDIUM]
    *   Issue [#721](https://github.com/nullclaw/nullclaw/issues/721): 在配置文件中解析 Cloudflare API URL 时报错，阻碍了边缘 AI 用户的接入。
    *   *状态:* 待处理。
3.  **Telegram 重复消息与缓存失效** [FIXED/PENDING]
    *   PR [#694](https://github.com/nullclaw/nullclaw/pull/694) 提出了一套针对 Telegram 重复消息、Bifrost 兼容性及工具缓存失效的综合修复方案，等待合并审查。

## 6. 功能请求与路线图信号
*   **微信生态支持:** Issue #714 表明社区强烈希望打通微信生态，这可能成为项目在中文社区爆发增长的关键点。
*   **高级 API 控制:** PR #709 (extra_body_params) 和 PR #687 (gateway limits) 显示项目正在向**企业级/生产环境**靠拢，允许运维人员调整超时、负载限制等参数。
*   **跨平台防抖:** PR #676 提出了针对 Telegram/Discord 的入站消息防抖机制，预示着项目正在优化高并发下的用户体验。

## 7. 用户反馈摘要
*   **痛点 - 模型幻觉与推理:** 用户在使用自定义 OpenAI 兼容接口时，经常遇到模型不进行深度推理导致回答产生幻觉（Issue #659），今日合并的 PR #669 预计将大幅缓解此痛点。
*   **痛点 - 调试困难:** 用户强烈依赖 Telegram 等客户端查看 "Reasoning" 过程来调试 Agent 行为（Issue #311），若此功能不稳定会严重影响开发体验。
*   **场景 - 容器化部署:** Issue #691 (关联 PR #692) 反映了 Docker 环境下路径权限问题，说明有不少用户使用容器化部署 NullClaw。

## 8. 待处理积压
*   **PR 审核阻塞:** 目前有 **12 个待合并的 PR**，其中包含多个关键修复（如 PR #694 Telegram 修复, PR #675 Gemini 修复）。建议维护者优先处理这些积压 PR，以避免版本碎片化。
*   **长期 Issue:** Issue #311 关于 Telegram 推理显示的问题被关闭后似乎并未彻底解决，建议重新评估或提供更详细的文档说明如何正确开启该功能。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

这里是 **IronClaw (nearai/ironclaw)** 项目 2026-03-27 的动态日报。

---

### 📊 IronClaw 项目日报 (2026-03-27)

#### 1. 今日速览
IronClaw 项目今日维持**极高的开发活跃度**，呈现“一边修复关键 Bug，一边重构架构”的并行状态。过去 24 小时内共有 38 个 PR 更新（15 个已合并）和 15 个 Issue 更新，显示出核心团队正在为下一个大版本（v0.23.0）做密集准备。今日重点集中在**修复严重的 UTF-8 崩溃问题**、**解耦内部 crate 发布依赖**以及**完善 OAuth 和多租户架构**。虽然 CI 自动化审查发现了代码热路径中的潜在风险，但社区对新功能（如阿里云支持、自定义 LLM Provider）的贡献依然强劲。

#### 2. 版本发布
*   **无正式版本发布**：尽管代码库中出现了 `chore(ironclaw): release v0.23.0` 的 PR (#1658)，但截至发稿时该 PR 仍处于 **OPEN** 状态，尚未正式 Tag 和 Release。
    *   **⚠️ 潜在破坏性变更**：v0.23.0 将包含 API 破坏性变更（结构体新增公共字段），开发者需关注后续更新。

#### 3. 项目进展
今日共有 **15 个 PR 被合并**，显著推进了系统稳定性与架构优化：
*   **架构解耦与重构**：PR #1683 合并，解决了内部 crate `ironclaw_common` 和 `ironclaw_safety` 的发布依赖死锁问题，使发布流程回归正轨。
*   **关键稳定性修复**：
    *   PR #1108 修复了 Routine 更新失败后错误调用 delete 的逻辑漏洞。
    *   PR #1437 修复了 MCP Streamable HTTP 会话建立的 202 处理错误。
*   **功能增强**：
    *   PR #1684 重构了 OAuth 流程，支持专用的 Proxy Auth Token，增强灵活性。
    *   PR #1681 修复了 Slack Relay 扩展的认证死胡同问题。

#### 4. 社区热点
*   **Issue #1676 [💬 6]**：用户报告 Telegram Bot 只能单向工作（自动轮询消息失败）。用户对比了旧版 OpenClaw，表达了对 IronClaw 工具链稳定性的不满。
    *   *链接*：[nearai/ironclaw Issue #1676](https://github.com/nearai/ironclaw/issues/1676)
*   **Issue #1660 [💬 2]**：关于 `ironclaw_common` 是否应该对外发布的讨论。维护者确认这只是发布流程的临时变通，并已通过 PR #1683 修正。
    *   *链接*：[nearai/ironclaw Issue #1660](https://github.com/nearai/ironclaw/issues/1660)

#### 5. Bug 与稳定性
今日报告了多个严重级别的 Bug，部分已有修复方案：
*   **🔴 CRITICAL (已有 Fix PR)**：`is_recoverable_tool_call_segment` 函数中存在潜在的 UTF-8 Panic 风险（Issue #1669）。**Fix PR #1679** 和 **PR #1688** 已提交，通过引入 `floor_char_boundary` 修复了不安全的字节索引截断。
*   **🟠 HIGH (CI 报告)**：`agentic_loop.rs` 中的截断计数逻辑存在不对称问题（Issue #1670）。
*   **🟠 MEDIUM (CI 报告)**：热路径中存在过多的 Debug 日志（Issue #1686）。
*   **🟠 MEDIUM**：WASM 工具未能将类型化的 Schema 正确暴露给 LLM，而是返回空 Schema（Issue #1303）。
*   **🟠 MEDIUM**：Anthropic OAuth Provider 此前仅支持 Haiku 模型，**PR #1665** 已修复此限制。

#### 6. 功能请求与路线图信号
*   **多租户与网关增强**：PR #1626 正在推进基于数据库的用户管理和多租户隔离，这是迈向企业级部署的关键一步。
*   **阿里云支持**：PR #1446 提议增加阿里云百炼 的 Coding Plan 支持，扩展了非西方云厂商的 LLM 兼容性。
*   **自定义 LLM Provider**：PR #1340 允许用户通过 Web UI 配置自定义 LLM Provider，降低了本地部署和私有模型接入的门槛。
*   **Agent 防漂移机制**：Issue #1634 提议在 Agentic Loop 中加入 `DriftMonitor`，通过规则引擎检测和纠正 Agent 的迷失行为。

#### 7. 用户反馈摘要
*   **部署痛点**：用户在使用 Railway 一键部署时遇到环境变量不生效的问题，导致模型卡在默认配置（Issue #1680）。
*   **本地模型配置困难**：多位用户反馈在配置 Ollama 和 Embeddings 时遇到 `HttpError` 或缺少模型的警告（Issue #1672, #1689）。用户建议文档需要更明确地指出必须手动配置 `.env` 中的 `EMBEDDING_PROVIDER` 等参数。
*   **集成体验**：飞书/Lark 频道集成被报告存在卡在“等待配对”状态的问题（Issue #1673），显示特定渠道的接入仍有待打磨。

#### 8. 待处理积压
*   **PR #1340 (Web UI 自定义 LLM)**：已开启 9 天，属于大型 PR，需要重点 Review 以防引入安全或配置漏洞。
*   **Issue #1303 (WASM Schema)**：开启 10 天，涉及 WASM 组件与 LLM 交互的核心机制，可能需要架构层面的重构，目前处于 Open 状态。
*   **PR #1446 (阿里云支持)**：作为 Contributor 提交的大型 PR，目前还在等待合并，是扩展国内用户群体的关键。

---
*以上数据截止至 2026-03-27 00:00 UTC*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

这里是为您生成的 **LobsterAI** 项目 2026-03-27 日报。

---

# 🦞 LobsterAI 项目动态日报 (2026-03-27)

### 1. 今日速览
LobsterAI 项目今日处于**高活跃度开发状态**，正式发布了 **v2026.3.26** 版本，标志着项目正式进入 **Multi-Agent（多智能体）架构**时代。过去 24 小时内社区互动频繁，共有 17 个 Issue 更新和 50 个 PR 更新（其中 34 个待合并），显示出版本发布后的代码整理与功能迭代正在加速进行。今日的重头戏是**多智能体预设与技能支持**的落地，同时社区对**易用性（模板、Token用量）**和**稳定性（数据库安全、流式解析）**提出了较高要求。

---

### 2. 版本发布
**🎉 Release: v2026.3.26**
本次更新是重要的里程碑版本，引入了期待已久的多智能体架构支持，并修复了网关重启的关键体验问题。

*   **✨ 核心新功能**
    *   **Multi-Agent Support**: 支持预设智能体和技能，标志着 LobsterAI 从单一助手向多角色协同平台演进。
    *   **Preset Agents & Skills**: 允许用户为不同的 Agent 配置特定的技能集。
*   **🐛 重要修复**
    *   **Gateway Restart Fix**: 修复了切换大模型时触发 `openclaw gateway` 重启导致卡顿的问题，大幅提升了多模型切换的流畅度。

---

### 3. 项目进展
今日共有 **16 个 PR** 被合并或关闭，主要集中在性能优化、架构清理和新功能引入上。

*   **性能与体验优化**
    *   **PR #764 [Merged]**: **大幅优化聊天区域卡顿/白屏问题**。引入 `LazyRenderTurn` 组件基于虚拟滚动技术解决长会话渲染性能瓶颈。
    *   **PR #935 [Merged]**: **修复定时任务网关握手失败**。确保在 `cron` 轮询开始前完成 WebSocket 握手，避免 1008 错误。
    *   **PR #934 [Merged]**: 清理删除 Agent 后的 IM 绑定残留，并注入 `SKILLS_ROOT` 环境变量。
*   **架构重构**
    *   **PR #941 [Open]**: **计划移除 `yd_cowork` 引擎及 Claude Agent SDK 相关死代码**。将引擎类型收窄为 `openclaw`，旨在减少维护负担和包体积。
*   **UI 增强**
    *   **PR #785 [Merged]**: 模型选择下拉框增加「图像」标签，方便识别多模态模型。

---

### 4. 社区热点
*   **PR #786: 支持多个自定义模型提供商** (评论数最多)
    *   **诉求**: 开发者 @Housum 提议在设置中支持配置多个自定义 Provider，并支持自定义显示名称（如 `custom_0`, `custom_1`）。这反映了高级用户对于灵活接入多种私有/开源模型 API 的强烈需求。
*   **Issue #943: 模型容错与自动切换**
    *   **诉求**: 用户 @chinazhoumin 建议增加模型调用的优先级配置，当主模型不可用（超时/错误）时自动降级到备用模型。
    *   **分析**: 随着多模型支持的引入，**高可用性** 成为用户的下一步核心诉求，希望系统具备更强的鲁棒性。

---

### 5. Bug 与稳定性
今日报告了多个影响严重的底层 Bug，需重点关注：

*   **🔴 严重**
    *   **Issue #926: `destroy()` 导致应用崩溃**。`imCoworkHandler.ts` 中调用不存在的 `reject` 方法，在退出或重连时导致进程 Crash。已有明确修复方向（可选链操作）。
    *   **Issue #906: SQLite 数据丢失风险**。`save()` 方法使用同步写入且无异常处理，磁盘空间不足时会静默丢失数据。
*   **🟠 中等**
    *   **Issue #922: Anthropic SSE 流式数据丢失**。解析逻辑未做行缓冲，高吞吐下 JSON 解析失败会导致部分文本缺失。
    *   **Issue #900: 定时任务频率异常**。修改 Cron 任务后频率错乱（设置 1 小时变成 1 分钟）。
    *   **Issue #887 [CLOSED]: 流式消息合并算法 O(n²) 导致卡顿**。建议使用 KMP 算法优化，该 Issue 已被识别并在关注中。

---

### 6. 功能请求与路线图信号
社区对 **Agent 定制化** 和 **数据透明度** 的呼声很高：

*   **模板与预设**
    *   **Issue #933**: **会话模板/系统提示词预设**。用户希望保存常用的 Prompt 模板（如代码审查、单测），减少重复劳动。
    *   **Issue #931**: **链接理解**。期望像 OpenClaw 一样自动抓取 URL 内容并注入上下文。
*   **数据与成本**
    *   **Issue #930**: **展示 Token 用量**。后端已收集数据，用户强烈希望前端展示每次对话的 Token 消耗及费用估算。
    *   **Issue #914**: **记忆导入/导出**。跨设备迁移和分享 Agent 记忆的需求。
*   **信号判断**: `Issue #930` 和 `Issue #933` 实现成本相对较低且用户价值高，极有可能在近期版本中通过社区 PR 或官方迭代实现。

---

### 7. 用户反馈摘要
*   **痛点**: "切换模型卡顿"（已在 v2026.3.26 修复）、"长对话卡顿"（PR #764 已解决）、"看不懂用了多少 Token"。
*   **场景**: 用户大量使用 LobsterAI 进行代码生成和审查（要求模板功能），并通过飞书/微信机器人进行自动化交互（Issue #910 反馈了飞书机器人的消息投递格式问题）。
*   **评价**: 用户对项目的技术架构（如 OpenClaw）比较了解，Issue 提交质量较高（附日志、代码定位），显示该项目正在吸引一批高技术力的开发者。

---

### 8. 待处理积压
以下重要 PR 正在等待 Review，建议维护者优先关注：

1.  **PR #924**: **会话分页加载**。解决内存占用过高的问题，对稳定性至关重要。
2.  **PR #938**: **12 套主题皮肤系统**。基于 CSS 变量的 UI 大改造，需进行细致的视觉回归测试。
3.  **PR #936**: **输入框提交优化**。修复长会话中提交消息卡顿、输入框无法清空的问题。
4.  **Issue #925**: **安全漏洞报告渠道**。安全研究人员询问披露渠道，建议官方尽快在 `SECURITY.md` 中明确。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

以下是基于 2026-03-27 数据生成的 TinyClaw (TinyAGI) 项目动态日报。

---

# 📊 TinyClaw (TinyAGI) 项目动态日报
**日期**: 2026-03-27  
**分析师**: AI 开源项目观察员

## 1. 今日速览
TinyClaw 项目今日呈现**高强度的内部迭代与架构优化**状态。虽然 Issues 板块略显沉寂（0 条更新），但开发者在代码提交端表现活跃，一口气合并了 **5 个关键 PR** 并发布了 **v0.0.20 新版本**。此次更新重心明显向 **TinyOffice 控制平面** 倾斜，不仅重构了 UI 布局，还修复了 Docker 环境下多个阻碍 AI CLI 运行的权限与路径问题。整体来看，项目正在为提供更稳定的容器化 AI Agent 运行环境打下基础。

## 2. 版本发布
### **[Release v0.0.20](https://github.com/TinyAGI/tinyagi/releases/tag/v0.0.20)**
本次更新是一个重要的功能性版本，重点增强了 Web 端的控制能力。

-   **核心亮点**:
    -   **Office Control Plane**: 这是一个重大更新。TinyOffice Web UI 现已具备完整的控制平面功能，支持管理守护进程、通道 及设备配对。
    -   **界面整合**: 新增 "Services" 标签页，将原本分散的 Provider 管理功能合并至统一视图中，简化了操作流程。
-   **破坏性变更/迁移注意**:
    -   Docker 容器内的运行用户发生变化（回退至 root 运行），如果你依赖之前的 `gosu` 或 `tinyagi` 用户权限配置，需注意变更。
    -   持久化数据路径从 `/data` 迁移至 `/home/tinyagi`，请务必检查 Docker Volume 挂载配置，以免数据丢失。

## 3. 项目进展
今日共有 5 个 PR 被合并，主要围绕 **Docker 稳定性修复** 与 **前端控制面重构** 两条主线推进。

| PR 编号 | 类型 | 主要内容 | 价值分析 |
| :--- | :--- | :--- | :--- |
| [#267](https://github.com/TinyAGI/tinyagi/pull/267) | Feat | **新增统一控制平面** | 引入守护进程重启、通道管理和设备配对功能，标志着项目从单纯的 CLI 工具向服务化平台演进的关键一步。 |
| [#268](https://github.com/TinyAGI/tinyagi/pull/268) | Refactor | **UI 布局重构** | 将 Providers 合并至 Services 标签，移除独立的 /logs 页面。此举意在简化信息架构，提升管理效率。 |
| [#266](https://github.com/TinyAGI/tinyagi/pull/266) | Fix | **Docker 权限修复** | 解决了 Codex 在容器内因权限不足无法读取 `auth.json` 导致 WebSocket 500 错误的问题。为了稳定性，暂时移除了非 root 用户限制。 |
| [#265](https://github.com/TinyAGI/tinyagi/pull/265) | Fix | **数据路径修复** | 修正了 AI CLI 工具（Codex, Claude Code）将配置写入 `$HOME` 导致持久化失效的问题，将数据统一迁移至 `/home/tinyagi`。 |
| [#264](https://github.com/TinyAGI/tinyagi/pull/264) | Fix | **TypeScript 编译修复** | 修复了严格模式下的类型错误，确保构建流程畅通。 |

**进展总结**: 开发者 @jlia0 今日完成了 Docker 运行时环境的彻底梳理，解决了 AI CLI 在容器化场景下的“水土不服”问题，同时通过重构前端代码为后续功能扩展腾出了空间。

## 4. 社区热点
-   **沉寂期**: 今日无活跃的 Issues 讨论。
-   **潜在关注点**: 虽然无新增 Issue，但从 [#266](https://github.com/TinyAGI/tinyagi/pull/266) 和 [#265](https://github.com/TinyAGI/tinyagi/pull/265) 的修复内容来看，**Docker 环境下的身份验证与状态持久化**一直是用户的痛点。这些修复直接回应了在容器中运行 AI Agent 时常见的权限和配置丢失问题。

## 5. Bug 与稳定性
今日修复了多个严重影响使用的 Bug，目前项目稳定性呈上升趋势。

1.  **[严重] Docker 内 Codex 认证失败 (已修复)**
    -   **现象**: 在 Docker 中运行时，Codex 报 WebSocket 500 错误。
    -   **原因**: 权限降级导致无法读取 `/root/.codex/auth.json`。
    -   **状态**: 已通过 PR [#266](https://github.com/TinyAGI/tinyagi/pull/266) 修复（改为 root 运行）。
2.  **[中等] 数据持久化丢失 (已修复)**
    -   **现象**: AI CLI 的配置文件（如 `~/.codex/`, `~/.claude/`）在容器重启后丢失。
    -   **原因**: 挂载点 `/data` 未覆盖用户的 Home 目录。
    -   **状态**: 已通过 PR [#265](https://github.com/TinyAGI/tinyagi/pull/265) 修复（迁移数据目录）。

## 6. 功能请求与路线图信号
-   **信号 - 服务化治理**: 从 PR [#267](https://github.com/TinyAGI/tinyagi/pull/267) 可以看出，项目正在积极构建 **"控制平面" (Control Plane)**。这意味着未来的版本中，TinyClaw 将不仅仅是一个本地工具，而是一个可管理的 Agent 服务节点，支持远程配对、通道管理和日志监控。
-   **预测**: 下一步可能会增加更多关于 "Channels" 的具体配置选项，或者支持更多的 AI Provider 集成到新的 Services 标签页中。

## 7. 用户反馈摘要
> *注：由于今日无 Issues 更新，以下反馈提炼自 PR 描述中的隐含信息。*

-   **Docker 用户体验**: 之前的版本在 Docker 环境下存在明显的兼容性问题（权限、路径），导致部署受阻。v0.0.20 版本通过路径重映射和权限调整，显著改善了容器化部署的体验。
-   **UI 交互**: 用户可能之前的日志和提供商管理较为分散，此次 UI 整合（合并标签页）表明开发者正在致力于提供更清爽、集中的管理界面。

## 8. 待处理积压
-   **Issues 积压**: 截止统计时间，过去 24 小时内无活跃或新开的 Issue。建议维护者关注 v0.0.20 发布后，关于 Docker 路径变更（`/data` -> `/home/tinyagi`）可能引发的旧用户升级困惑。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-03-27)

**分析师：** AI 开源项目观察员
**数据源：** github.com/moltis-org/moltis

---

### 1. 今日速览
过去24小时内，Moltis 项目呈现出**维护导向**的活跃状态。虽然未发布新版本，但代码库有两处更新，其中包括一项针对前端资源的路径修复。社区方面，关于“本地化思考”功能的讨论（Issue #490）持续活跃，显示用户对 AI 隐私与本地化处理能力的关注度正在上升。整体来看，项目处于稳定迭代期，并未出现紧急故障。

### 2. 版本发布
*   **无新版本发布**。

### 3. 项目进展
今日共有 2 个 PR 被关闭（未明确合并状态，但已完成处理），主要涉及依赖维护和代码修复：

*   **修复前端资源路径引用**：PR [#492](https://github.com/moltis-org/moltis/pull/492) 由 @cyberpsyche 提交。该 PR 修复了 `crates/web/src/assets.rs` 中 `style.css` 的路径问题。这是一个关键的小型修复，直接影响了 Web UI 样式的正确加载，确保了用户界面的正常渲染。
*   **依赖更新**：PR [#491](https://github.com/moltis-org/moltis/pull/491) 由 Dependabot 自动提交。将 `/crates/web/ui` 目录下的 `picomatch` 依赖从 4.0.3 升级至 4.0.4，属于常规的安全性或稳定性维护。

### 4. 社区热点
*   **本地化思考能力诉求**：Issue [#490](https://github.com/moltis-org/moltis/issues/490) 是目前的讨论焦点。
    *   **分析**：该 Feature Request 提出了“Local thinking”（本地思考）的需求。考虑到 Moltis 作为一个 AI 智能体框架，这通常意味着用户希望 AI 的推理过程（CoT）或中间计算步骤能在本地执行，以保护隐私或减少云端 API 依赖。该 Issue 虽然是昨天创建的，但今日仍有更新和评论，表明社区对**混合架构（云端执行+本地思考）**或**纯本地化隐私保护**有强烈诉求。

### 5. Bug 与稳定性
*   **已修复问题**：
    *   **样式加载异常**：由 PR [#492](https://github.com/moltis-org/moltis/pull/492) 修复。之前的代码中 `style.css` 路径错误可能导致 Web 界面无样式（Broken Layout）。
*   **潜在风险**：
    *   今日未收到新的 Bug 报告或崩溃反馈，系统稳定性良好。

### 6. 功能请求与路线图信号
*   **信号：隐私与本地化**：
    *   Issue [#490](https://github.com/moltis-org/moltis/issues/490) 不仅是单一的功能请求，更是一个强烈的路线图信号。用户正在寻求对数据主权有更高控制权的 AI 智能体特性。如果项目方能规划支持 Ollama 或 llama.cpp 等本地模型作为“后端/思考层”，将极大提升项目在隐私敏感场景下的竞争力。

### 7. 用户反馈摘要
*   **痛点**：用户对云端依赖的潜在担忧。在 Issue #490 中，用户明确表达了对 `Local thinking` 的需求，暗示目前的版本可能在推理过程上过于依赖云端，或者缺乏对本地知识库/计算环境的利用。

### 8. 待处理积压
*   **需要关注的新 Issue**：Issue [#490](https://github.com/moltis-org/moltis/issues/490) 目前状态为 OPEN。鉴于这是一个涉及架构层面的 Enhancement，建议维护者尽快确认技术可行性（如是否支持工具调用时的本地沙箱环境），以便管理社区预期。

---
*注：本报告基于 GitHub 截止 2026-03-27 的公开数据生成。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-27)

## 1. 今日速览
CoPaw 项目今日保持**极高活跃度**，社区与开发团队互动频繁。过去24小时内共有 50 条 Issue 更新和 45 条 PR 更新，其中包含多个关键功能的合并以及新版本 `1.0.0b1` 的预发布准备。重点集中在**多渠道接入（微信/飞书）、内存管理优化以及系统稳定性修复**。整体来看，项目正处于从 v0.2.0 向 v1.0.0 正式版冲刺的关键阶段，核心功能迭代迅速，但也暴露出一些并发和兼容性问题。

## 2. 版本发布
*   **[v1.0.0b1] 版本准备就绪**：
    *   **更新内容**：PR #2358 已合并，标志着项目版本号正式升级至 1.0.0-beta.1。此版本通常意味着 API 接口趋于稳定，主要功能开发完成。
    *   **相关重构**：伴随此次发版，PR #2300 重构了 CoPaw Context Management (v2.0)，重新设计了 Summarizer 提示词，并增强了配置结构，支持主动注入记忆搜索结果。
    *   **迁移注意**：核心上下文管理的重构可能导致旧配置文件不兼容，建议升级前备份会话数据。

## 3. 项目进展
今日共有 **25 个 PR 被合并或关闭**，显著提升了系统的健壮性和扩展性：

*   **渠道接入突破**：
    *   **微信 iLink Bot (#2260)**：合并了微信 iLink Bot 频道支持，支持扫码登录、消息收发，标志着 CoPaw 正式接入微信生态。
    *   **企业微信媒体消息 (#2341)**：支持企业微信 AI 机器人发送媒体消息。
    *   **飞书稳定性修复 (#2311)**：修复了 WebSocket 连接断开导致进程崩溃的严重 Bug（解决 #2336），并增加了陈旧消息过滤机制。
*   **核心架构升级**：
    *   **后台任务支持 (#2345)**：引入后台任务支持，允许 Multi-Agent 异步执行复杂任务，避免阻塞主线程。
    *   **Worker 限制 (#2360)**：将 Worker 数量修复为 1，以解决并发状态不一致问题。

## 4. 社区热点
今日社区讨论焦点集中在**技能扩展**与**多渠道兼容性**：

1.  **[Discussion] Which Skills and MCPs Can Be Built-in? (#280)**
    *   **热度**：21 评论
    *   **分析**：用户强烈希望预装常用技能和 MCP（Model Context Protocol），以减少配置成本。这反映了用户对"开箱即用"体验的迫切需求。
2.  **[Channel] 小艺渠道接入问题 (#1911)**
    *   **热度**：19 评论
    *   **分析**：华为小艺频道接入后出现"网络拥堵"和消息不同步问题。用户正在排查是平台限制还是 CoPaw 适配 Bug，显示了新硬件渠道接入的复杂性。
3.  **[Feature] 微信 ClawBot 频道支持 (#2043)**
    *   **热度**：9 👍 / 8 评论
    *   **分析**：社区对 3 月 22 日微信发布的 ClawBot API 表现出极高热情，相关 PR (#2140) 正在通过允许自定义 HTTP 路由来适配该协议。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，主要集中在资源占用和内存压缩：

*   **[P0] CPU 占用异常 (#2348) [OPEN]**
    *   **现象**：在无负载情况下，Worker 进程显示 100% CPU 占用。
    *   **状态**：尚未有修复 PR，疑似死循环或轮询逻辑问题，严重影响生产环境部署。
*   **[P0] 删除一个会话导致所有会话丢失 (#2327) [CLOSED]**
    *   **现象**：批量删除接口逻辑错误，导致误删全量数据。
    *   **修复**：PR #2367 已加固删除流程，并在操作前自动创建备份快照 `chats.json.backup-*`。
*   **[P1] 上下文压缩导致任务中断/幻觉 (#1974, #2092) [OPEN]**
    *   **现象**：压缩上下文时会打断正在进行的任务，且 GLM-5 等模型压缩后产生幻觉内容。
    *   **状态**：正在通过 Context v2.0 重构 (#2300) 尝试解决，但仍需观察。
*   **[P1] WebSocket 连接不稳定 (#2336) [CLOSED]**
    *   **现象**：飞书 WebSocket 长连接断开后无法重连。
    *   **修复**：PR #2311 已增加自动重连和静默断开检测。

## 6. 功能请求与路线图信号
*   **多租户隔离 (#2370)**：企业级需求显著，用户请求支持不同团队的数据隔离和独立管控。这是 CoPaw 进军 B 端市场的关键信号。
*   **GitHub Copilot Provider (#2366)**：PR 正在实现 GitHub Copilot 的 OAuth 支持，允许免费/低成本使用 Copilot 模型，这可能改变当前的模型提供商格局。
*   **Web UI 多 Agent Tab 切换 (#2281)**：用户对当前多 Agent 需开多个页面的交互表示不满，请求增加 Tab 页切换模式。
*   **基于 Tags 的技能检索 (#2323)**：建议为 Skill 系统增加标签索引，减少对 LLM 语义理解的依赖，提高技能调用准确率。

## 7. 用户反馈摘要
*   **配置门槛高**：新手用户 (#2364, #2369) 反馈 Skill 的脚本和参考文档配置困难，现有 UI 仅支持纯文本，难以迁移复杂的 Claude Code/Open Code 技能包。
*   **Web Console 体验问题**：部分用户 (#1960) 注意到控制台输出包含未解析的 JSON 字符串（如 `[{"type": "text", ...}]`），影响阅读；语音输入功能导致 UI 崩溃 (#2293)。
*   **语言设置不保存**：多平台用户反馈 (#1604, #2269) 设置中文后重启恢复英文的问题。

## 8. 待处理积压
*   **Issue #2348 (Worker 100% CPU)**：高优先级资源泄露/死循环问题，目前仍在 Open 状态，需立即关注。
*   **Issue #1437 (Compactor 幻觉)**：内存压缩产生幻觉的问题长期存在，影响长对话的可靠性，需结合 v2.0 重构验证效果。
*   **PR #2140 (Custom Channel Routes)**：虽然关联了微信 ClawBot，但作为架构级改动，需尽快 Review 以防阻塞社区对新渠道的热情。

---
*数据来源：GitHub CoPaw Repo (2026-03-27)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-03-27)

**分析师备注**：本项目今日呈现高度活跃状态，核心关注点在于 **Google Vertex AI 的支持** 以及 **Telegram 用户体验的深度优化**。

---

### 1. 今日速览
ZeptoClaw 今日更新频率极高，共发布了 **2 个 Minor 版本 (v0.9.0 和 v0.9.1)**，标志着项目正式进入了多渠道、多云厂商支持的新阶段。过去 24 小时内，项目处理了 **27 个 PR**（其中 24 个已合并）和 **12 个 Issues**（6 个已关闭），显示出维护者极高的响应速度和交付能力。本次更新重点引入了 **Google Vertex AI** 作为新的推理提供商，并彻底重构了 Telegram 机器人的交互体验（消息反馈、长文本分片）。目前项目处于快速迭代期，稳定性显著提升，但在安全性和复杂场景下的边缘情况处理上仍有新功能提案出现。

### 2. 版本发布
今日连续发布了 v0.9.0 和 v0.9.1，建议所有用户尽快升级至 **v0.9.1** 以获得最佳体验。

#### 🚀 Release v0.9.1 (2026-03-27)
**主要更新**：
*   **Onboarding 体验优化**：修复了初始化流程，现在采用“Provider-first”逻辑，并会过滤掉非 Chat 模型（如 DALL-E, Embeddings），解决了新用户配置时模型列表混乱的问题 ([#453](https://github.com/qhkm/zeptoclaw/pull/453))。
*   **配置兼容性修复**：修复了当 `anthropic` 配置为 `null` 时，CLI 仍然尝试导入 Token 导致的崩溃问题 ([#455](https://github.com/qhkm/zeptoclaw/pull/455))。

#### 🚀 Release v0.9.0 (2026-03-27)
**重要新特性**：
*   **Google Vertex AI 支持**：新增对 Gemini 模型的企业级支持，支持 Vertex 区域端点及 ADC (Application Default Credentials) 自动刷新认证，实现了零手动 Token 管理 ([#447](https://github.com/qhkm/zeptoclaw/pull/447))。
*   **Telegram 交互升级**：
    *   新增“眼睛”👀 (收到) 和“勾”✅ (完成) 的 Emoji 反馈，让用户明确知道 Bot 正在处理 ([#433](https://github.com/qhkm/zeptoclaw/pull/433))。
    *   新增 Typing (输入中) 状态指示器 ([#392](https://github.com/qhkm/zeptoclaw/pull/392))。
    *   支持超长消息自动分片，修复了长回复在 Telegram 静默失败的问题 ([#409](https://github.com/qhkm/zeptoclaw/pull/409))。
*   **容器工具修复**：改进了容器引擎检测逻辑，解决了 Docker/Podman 共存环境下的冲突 ([#441](https://github.com/qhkm/zeptoclaw/pull/441))。

### 3. 项目进展
今日共有 **24 个 PR 被合并**，项目整体向前迈出了坚实的一步，主要集中在以下领域：
*   **多云战略落地**：随着 Vertex AI Provider 的合并，ZeptoClaw 现已支持 OpenAI、Anthropic 和 Google 三大主流生态。
*   **Telegram Channel 成熟化**：合并了包括消息分片、HTML 转义、图片支持 ([#420](https://github.com/qhkm/zeptoclaw/pull/420)) 和回复引用在内的一系列 PR，表明 Telegram 作为客户端通道已达到生产可用级别。
*   **Web 搜索体验**：优化了 Web 搜索工具的输出，现在用户界面仅显示简要状态，而将详细结果发送给 LLM，减少了 UI 噪音 ([#444](https://github.com/qhkm/zeptoclaw/pull/444))。

### 4. 社区热点
尽管今日合并量大，但部分待合并的 PR 展示了项目未来的重要方向：
*   **[#460 [OPEN] feat(agent): multi-layered context compaction](https://github.com/qhkm/zeptoclaw/pull/460)**
    由 @stuartbowness 发起。提议用“多层压缩防御”策略替换现有的单词统计压缩，旨在解决长对话导致 Token 溢出的不可恢复错误。这是解决 Agent 长期记忆难题的关键改进。
*   **[#459 [OPEN] feat(tools): add BrowserTool](https://github.com/qhkm/zeptoclaw/pull/459)**
    提议集成 `agent-browser` CLI，实现浏览器自动化。这标志着 ZeptoClaw 正在从纯文本助手向具备 Web 交互能力的 Agent 进化。

### 5. Bug 与稳定性
今日修复了多个影响用户体验的 Bug，同时也暴露了一些待解决的问题：

*   **已修复 (Fixed)**：
    *   **[#452](https://github.com/qhkm/zeptoclaw/issues/452)**: Onboarding 时显示了 128 个原始模型（包含不可用的旧版模型），现已修复为仅显示可用模型。
    *   **[#428](https://github.com/qhkm/zeptoclaw/issues/428)**: Telegram 缺少视觉反馈，现已通过 Emoji Reaction 解决。

*   **待处理**：
    *   **P2-High [#456 [OPEN] bug(telegram): no message chunking](https://github.com/qhkm/zeptoclaw/issues/456)**:
        虽然 v0.9.0 已经合并了长消息分片功能 (#409)，但此 Issue 提出当 `send` 失败时错误未回传给用户，且仍有 4096 字符限制报错。**注意**：针对此问题，维护者 @qhkm 已提交 **[#458 [OPEN] fix(telegram): add message chunking and error fallback](https://github.com/qhkm/zeptoclaw/pull/458)**，预计将很快合并。
    *   **P2-High [#457 [OPEN] bug(cli): feature-disabled panel subcommand](https://github.com/qhkm/zeptoclaw/issues/457)**:
        当使用 `--no-default-features` 编译时，`panel` 子命令会报错。期望行为是提供友好的引导而非报错。

### 6. 功能请求与路线图信号
今日新开的 Issues 显示出项目正在向**安全性**和**隐私路由**方向扩展：
*   **隐私路由 ([#451](https://github.com/qhkm/zeptoclaw/issues/451))**: 提议根据敏感度将 Prompt 路由到本地模型（敏感）或云端模型（非敏感）。结合今日添加的 Vertex AI，多模型路由将成为可能。
*   **安全策略 ([#448](https://github.com/qhkm/zeptoclaw/issues/448), [#449](https://github.com/qhkm/zeptoclaw/issues/449), [#450](https://github.com/qhkm/zeptoclaw/issues/450))**: 密集提出了关于 SSRF 防护、插件下载 SHA256 校验以及声明式 YAML 网络策略的需求。这表明项目正在为进入高安全要求的企业级场景做准备。

### 7. 用户反馈摘要
从 Issue 详情和 PR 描述中提炼出的核心反馈：
*   **Telegram 体验大幅改善**：用户对于消息“正在处理”和“完成”的状态反馈需求强烈，v0.9.0 的 Emoji 反应功能直接回应了这一痛点。
*   **配置门槛降低**：早期用户在配置模型时容易被 `davinci` 或 `babbage` 等非 Chat 模型干扰，v0.9.1 的过滤机制极大地降低了上手难度。
*   **长文本痛点**：Telegram 的 4096 字符限制一直是 Agent 输出的痛点，今日的更新（及正在进行的 #458）显示维护者正致力于彻底解决此问题。

### 8. 待处理积压
以下重要 Issue/PR 需要持续关注：
*   **[#460 (PR) Multi-layered Context Compaction](https://github.com/qhkm/zeptoclaw/pull/460)**: 这是解决 Agent "失忆" 或崩溃的关键架构更新，建议优先 Review。
*   **[#451 (Issue) Privacy-aware Routing](https://github.com/qhkm/zeptoclaw/issues/451)**: 这是一个高价值的功能请求，符合当前混合云/隐私计算的趋势，建议纳入 Roadmap。
*   **[#458 (PR) Telegram Chunking Fallback](https://github.com/qhkm/zeptoclaw/pull/458)**: 针对 #456 的修复，建议尽快合并以完善 v0.9.0 引入的 Telegram 功能。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*