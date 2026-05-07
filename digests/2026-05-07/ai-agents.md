# OpenClaw 生态日报 2026-05-07

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-07 03:28 UTC

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

# OpenClaw 项目动态日报 (2026-05-07)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，过去 24 小时内 Issues 与 PR 更新量均达到 500 条，社区互动频繁。项目团队快速响应了 v2026.5.5 引入的严重回归问题，并在同日发布了修复版本 v2026.5.6，展现了高效的维护能力。开发重点集中在核心网关的稳定性修复、多通道（Telegram/Slack/Feishu）的性能优化以及安全边界的加固。值得注意的是，社区对跨平台客户端的需求依然强烈，且针对特定环境下的资源泄漏问题引发了深度技术讨论。

## 2. 版本发布
今日连续发布了两个版本，主要针对近期引入的回归问题进行修复：

*   **v2026.5.6** ([Releases](https://github.com/openclaw/openclaw/releases/tag/v2026.5.6))
    *   **关键修复**：撤销了 v2026.5.5 中 `doctor --fix` 对 `openai-codex/*` OAuth 路由的重写操作。之前的版本错误地将有效的 OAuth 路由改为 `openai/*`，导致部分依赖纯 OAuth 认证的 GPT-5.5 设置失效或意外切换到 API Key 模式。
    *   **影响**：建议所有受影响的用户立即升级，检查 `openclaw.json` 中的配置是否被错误修改。

*   **v2026.5.5** ([Releases](https://github.com/openclaw/openclaw/releases/tag/v2026.5.5))
    *   **Fixes**：
        *   修复了飞书通道在会话路由前缺失原生话题启动线程 ID 的问题，确保首条消息与后续消息保持在同一话题会话中 (Fixes #78262)。
        *   增加了 LINE 通道对 `dmPolicy: "open"` 配置的校验，防止缺少通配符 `allowFrom` 导致的 Webhook DM 校验失败。

## 3. 项目进展
今日 PR 活动主要围绕稳定性修复、性能优化和安全增强展开：

*   **安全增强**：
    *   PR [#78758](https://github.com/openclaw/openclaw/pull/78758): 修复了出站媒体端点在受信任操作者模式下的会话所有权校验缺失问题，防止潜在的越权访问。
    *   PR [#78759](https://github.com/openclaw/openclaw/pull/78759): 修复了共享密钥认证在受信任操作者插件路由上的权限提升漏洞。
    *   PR [#43469](https://github.com/openclaw/openclaw/pull/43469): 扩展了技能扫描器，使其能够检测 Markdown 文件中的注入威胁，提升了技能定义的安全性。

*   **性能优化**：
    *   PR [#78761](https://github.com/openclaw/openclaw/pull/78761) & [#78746](https://github.com/openclaw/openclaw/pull/78746): 分别针对 Telegram 和 Slack 通道进行了消息热路径的性能优化，减少了内存分配并优化了上下文处理。
    *   PR [#78747](https://github.com/openclaw/openclaw/pull/78747): 修复了 OpenAI 请求体中 `tools` 和 `input` 的字段顺序，提升了前缀缓存（prefix-cache）的稳定性。

*   **功能演进**：
    *   PR [#78317](https://github.com/openclaw/openclaw/pull/78317): 重大更新，引入了基于 JSON-RPC 的 iMessage 私有 API 支持，支持 Tapbacks、线程回复、撤回等高级功能，显著提升了 iMessage 体验。
    *   PR [#78757](https://github.com/openclaw/openclaw/pull/78757): 改进了 Codex 应用服务器长耗时任务的保活机制，防止因请求超时中断已在进行的任务。

## 4. 社区热点
今日社区讨论集中在跨平台支持和配置稳定性方面：

*   **Linux/Windows 客户端需求持续高涨**：Issue [#75](https://github.com/openclaw/openclaw/issues/75) 依然是目前讨论热度最高的话题（104 评论），用户强烈呼吁官方提供 Linux 和 Windows 原生客户端，以弥补目前仅有移动端和 macOS 客户端的缺口。
*   **Android APK 预编译请求**：Issue [#9443](https://github.com/openclaw/openclaw/issues/9443) 反映了用户希望直接下载预编译的 Android APK，而不是自行编译源码，降低使用门槛。
*   **Doctor 工具引发的配置灾难**：Issue [#78407](https://github.com/openclaw/openclaw/issues/78407) 讨论了 v2026.5.5 中 `doctor --fix` 自动重写模型配置导致服务不可用的问题。虽然已在 v2026.5.6 修复，但该问题引发了用户对自动化配置修改工具信任度的讨论。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的关键 Bug，部分已有修复方案：

*   **[Critical] WeChat 插件兼容性崩溃**：Issue [#78232](https://github.com/openclaw/openclaw/issues/78232) 报告 `openclaw-weixin` 插件与 v2026.5.4 不兼容，导致入站消息处理失败。目前尚无官方修复 PR，依赖微信通道的用户需关注后续更新。
*   **[Critical] Gateway 资源泄漏与死锁**：Issue [#73655](https://github.com/openclaw/openclaw/issues/73655) 详细描述了网关重启后的三种资源泄漏问题，导致 WebSocket 握手饥饿，影响了高负载场景下的稳定性。
*   **[High] Windows 平台性能退化**：Issue [#73323](https://github.com/openclaw/openclaw/issues/73323) 指出在 Windows 11 + Node 24 环境下，网关出现定价获取超时、Telegram 轮询停滞等严重的网络/计时器退化现象。
*   **[Medium] 压缩循环触发频率异常**：Issue [#78604](https://github.com/openclaw/openclaw/issues/78604) 报告会话压缩每 5 分钟触发一次，远高于预期的 30 分钟，可能导致上下文丢失。

## 6. 功能请求与路线图信号
*   **安全沙箱模式**：Issue [#6731](https://github.com/openclaw/openclaw/issues/6731) 提议引入 Rust 风格的安全/不安全模式，建议在沙箱环境中运行 ClawdBot 以防止未定义行为和内存泄漏，反映了社区对本地运行安全性的关注。
*   **MCP 工具调用审批流**：Issue [#78308](https://github.com/openclaw/openclaw/issues/78308) 建议为 MCP 服务器工具调用引入通道介导的审批机制，类似于现有的 shell-exec 审批流程，以增强对敏感操作（如发邮件、写文件）的控制。
*   **动态模型降级**：Issue [#9986](https://github.com/openclaw/openclaw/issues/9986) 请求在上下文长度超限（context length exceeded）时触发模型降级，而不是直接报错，这将是提升长对话稳定性的重要特性。

## 7. 用户反馈摘要
*   **痛点**：自动更新后的配置自动修改（`doctor --fix`）令用户感到不安，特别是当它破坏了现有的 OAuth 设置时。用户希望对配置文件的非用户发起修改有更明确的日志或确认机制。
*   **场景**：多平台用户（特别是微信和飞书）对通道稳定性极其敏感。飞书图片读取丢失（Issue [#41744](https://github.com/openclaw/openclaw/issues/41744)）和微信插件崩溃直接导致业务中断。
*   **满意度**：尽管存在稳定性问题，用户对 OpenClaw 的多模型支持和新特性（如更强大的 iMessage 支持）表现出积极态度，认为其是个人 AI 助手领域的强力竞争者。

## 8. 待处理积压
*   **Linux/Windows 客户端支持**：Issue [#75](https://github.com/openclaw/openclaw/issues/75) 长期未得到官方明确路线图回应，随着项目热度上升，解决跨平台客户端缺失的需求日益迫切。
*   **Gateway 性能退化排查**：Issue [#76562](https://github.com/openclaw/openclaw/issues/76562) 报告的 CPU 100% 及 RPC 延迟问题，自 4 月底报告以来尚未有明确的根本原因修复，建议维护者优先关注 Windows 环境下的兼容性测试。

---

## 横向生态对比

# 2026-05-07 AI 智能体开源生态横向对比分析报告

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正从单一对话工具向多模态、多智能体协作平台快速演进。**OpenClaw、Zeroclaw 等头部项目今日活跃度爆表，Issues 与 PR 更新均达数百条，显示出极高的迭代速度。** 生态重心明显向**多智能体架构**、**企业级安全与权限控制**以及**新模型适配（如 DeepSeek v4/GPT-5.5）**倾斜。与此同时，**稳定性与配置体验**成为各项目面临的共同挑战，回归问题与配置工具的副作用引发了用户大量讨论，标志着生态正进入深水区的“工程质量治理”阶段。

## 2. 各项目活跃度对比

| 项目名称 | Issues 活跃度 | PRs 活跃度 | 最新版本/发布状态 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 极高 (~500) | 极高 (~500) | v2026.5.6 (紧急修复) | **核心引擎**：社区热度最高，响应极快，但近期配置工具引入回归问题需警惕。 |
| **Zeroclaw** | 极高 (~50) | 极高 (~50) | v0.7.5 (待发布) | **生态扩展期**：模型提供商集成爆发，架构重构讨论热烈，存在 P0 级别多实例 Bug。 |
| **Hermes Agent** | 高 (50) | 高 (50) | 无发布 | **稳健迭代**：聚焦安全与平台适配，修复高危凭证与上下文丢失问题，稳定性向好。 |
| **PicoClaw** | 高 (21) | 极高 (61) | v0.2.8-nightly | **架构演进**：多智能体架构落地快，但认证与 SDK 崩溃等基础稳定性问题突出。 |
| **IronClaw** | 高 (41) | 高 (47) | 无发布 | **重构期**：深度重构，核心引擎升级中，Telegram/Gmail 集成存在 P1 阻断 Bug。 |
| **CoPaw (QwenPaw)**| 高 (47) | 高 (33) | v1.1.5.post2 | **快速迭代**：关注 Windows 兼容性与长上下文，修复了严重的安全漏洞，社区互动频繁。 |
| **NanoBot** | 中 (14) | 高 (41) | 无发布 | **内核优化**：专注运行时稳定性与身份协议，CPU 泄漏等深层问题修复及时。 |
| **Moltis** | 中 | 中 (9 merged) | 无发布 | **企业级加固**：解决 Docker 沙箱并发与代理认证，引入身份协议，运维导向明显。 |
| **LobsterAI** | 低 | 中 (18 merged) | 无发布 | **转型期**：架构解耦与多实例支持，但**高危路径穿越漏洞未修复**，安全响应滞后。 |
| **NanoClaw** | 低 (4) | 中 (25) | 无发布 | **迁移维护**：集中解决 v2 迁移脚本与 Slack 集成痛点，修复力度大。 |
| **NullClaw** | 低 | 低 | 无发布 | **维护态**：核心争议在于轻量化搜索支持，功能更新停滞，仅有关键 PR 审查中。 |
| **EasyClaw** | 无 | 无 | v1.8.11 | **商业化探索**：静默发布商业化功能，社区互动停滞，转向独立开发模式。 |
| **TinyClaw** | 无 | 无 | 无 | 静默。 |
| **ZeptoClaw** | 无 | 无 | 无 | 静默。 |

## 3. OpenClaw 在生态中的定位
作为生态的核心参照项目，OpenClaw 展现出明显的**“中枢平台”**特征：
*   **优势：** 具备最广泛的通道支持（Telegram/Slack/Feishu/iMessage/LINE）和最活跃的社区反馈机制。其在同日内完成从严重回归（v2026.5.5）到修复（v2026.5.6）的闭环，展现了强大的维护能力。
*   **技术路线差异：** 相比 Zeroclaw 的“模型生态聚合”路线和 IronClaw 的“架构重构”路线，OpenClaw 更侧重于**网关稳定性与安全边界加固**。今日 PR 集中在安全修复和性能优化，显示出其作为生产级底座的定位。
*   **社区规模对比：** Issues/PRs 数量级远超其他项目（500 vs 50），是第二名 Zeroclaw 的 10 倍，具备绝对流量优势，但也面临更复杂的用户配置环境挑战。

## 4. 共同关注的技术方向
各项目在今日不约而同地聚焦于以下技术痛点，折射出行业共性需求：

1.  **DeepSeek v4 / 推理模型适配**
    *   **涉及项目：** NanoBot, Moltis, PicoClaw.
    *   **诉求：** 适配新模型（如 DeepSeek v4）的 `reasoning_content`（思维链）字段，解决 API 报错或内容丢失问题。这标志着生态正快速跟进具备“慢思考”能力的新一代模型。

2.  **多智能体协作与身份协议**
    *   **涉及项目：** NanoBot, Moltis, Zeroclaw, PicoClaw.
    *   **诉求：** NanoBot 与 Moltis 均提出了 Ed25519 身份验证提案；PicoClaw 实现了 `delegate` 工具进行跨 Agent 任务移交；Zeroclaw 通过了 Multi-agent UX RFC。**“Agent 互联”与“任务分发”已成为架构演进的核心方向。**

3.  **安全与沙箱加固**
    *   **涉及项目：** OpenClaw, LobsterAI, Moltis, CoPaw.
    *   **诉求：** OpenClaw 修复了权限提升漏洞；LobsterAI 曝光路径穿越漏洞；Moltis 修复 Docker 沙箱并发冲突；CoPaw 修复任意文件遍历。随着 Agent 权限扩大，**工具调用与文件系统的安全性成为必答题。**

4.  **长上下文与上下文管理**
    *   **涉及项目：** CoPaw, OpenClaw, NanoBot.
    *   **诉求：** CoPaw 遇到长对话中断问题；OpenClaw 讨论动态模型降级；NanoBot 修复压缩摘要泄漏。**长对话下的成本控制与记忆管理依然是智能体落地的瓶颈。**

## 5. 差异化定位分析

*   **OpenClaw & Hermes Agent：** 定位为**全渠道 AI 网关**。核心价值在于连接 IM（微信/飞书/Slack/Telegram），强调高并发网关性能与协议兼容性。
*   **Zeroclaw & PicoClaw：** 定位为**AI Agent 操作系统**。不仅是对话，更强调底层架构的扩展性（MCP 协议、插件化、多 Agent 编排），适合构建复杂的自动化工作流。
*   **NanoBot & Moltis：** 具有较强的**学术/极客属性**。NanoBot 关注内核运行时纯净性；Moltis 关注企业级基础设施（Vault、代理），适合私有化部署与深度定制。
*   **LobsterAI & CoPaw：** 带有明显的**商业/产品导向**。LobsterAI 绑定企业通讯工具（POPO/企微）；CoPaw 背靠大模型厂商，强调开箱即用的桌面端体验与可视化监控。
*   **NullClaw：** 坚持**极简与轻量**。主打低资源设备运行，与主流项目的功能堆砌形成鲜明对比。

## 6. 社区热度与成熟度
*   **快速迭代爆发期（OpenClaw, Zeroclaw, CoPaw）：** 社区反馈量巨大，功能迭代快，但伴随着配置工具副作用、回归 Bug 等成长的烦恼。
*   **架构重构深水期：** 正经历痛苦的底层代码替换，短期内稳定性有波动，但长期架构更优。
*   **稳定性维护期：** 关注具体 Bug 修复与企业级特性（安全、备份），社区氛围偏向技术研讨。
*   **静默/商业化转型期：** EasyClaw 和 NullClaw 活跃度低，前者转向商业化闭门开发，后者面临功能停滞风险。

## 7. 值得关注的趋势信号
1.  **配置体验成为新的“隐形杀手”：** OpenClaw 的 `doctor --fix` 事故和 NanoClaw 的迁移脚本问题表明，自动化配置工具若缺乏安全边界，极易破坏用户环境。**未来的竞争不仅是功能，更是“不添乱”的可靠性。**
2.  **MCP 协议正在成为事实标准：** Zeroclaw 和 PicoClaw 均在强化 MCP（Model Context Protocol）支持。这预示着 Agent 连接外部工具的方式正在标准化，不兼容 MCP 的项目可能在工具生态上掉队。
3.  **Agent 身份体系萌芽：** 多个项目开始讨论 Ed25519 身份验证。这不仅是安全问题，更是 Agent 之间建立信任、进行多智能体协作（如 A Agent 调用 B Agent）的基础设施，值得开发者提前布局。
4.  **轻量化搜索的刚需回归：** NullClaw 社区对 DuckDuckGo 原生支持的强烈呼声，反映出在高昂 API 成本和网络限制下，**低成本、本地化的搜索方案**仍是刚需，而非所有 Agent 都需要昂贵的 LLM-Augmented Search。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-07)

## 1. 今日速览
NanoBot 今日维持了极高的开发活跃度，过去24小时内共有 41 条 PR 更新与 14 条 Issue 更新。项目重点集中在修复核心运行时的稳定性问题，特别是运行时上下文的数据泄漏、WebSocket 媒体传输丢失以及 MCP 连接导致的 CPU 泄露。社区方面，关于跨智能体身份协议的讨论引发了架构层面的思考，同时用户对模型区域限制和离线功能的反馈推动了配置灵活性的改进。整体来看，项目正在从功能迭代向深度的稳定性与性能优化阶段过渡。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 18 个 PR 被合并或关闭，显著提升了系统的健壮性：

*   **核心架构修复**：PR #3666 修复了运行时上下文元数据错误合并到用户消息中的问题（关联 Issue #2132），确保了 Prompt 构建的纯净性。
*   **Dream 机制修复**：PR #3660 修复了 Dream 恢复功能不回滚 `.dream_cursor` 的 Bug，保证了长期记忆状态的一致性。
*   **连接与性能**：PR #3663 优化了转录提供者的配置兼容性（关联 Issue #3637），PR #3661 改进了 WebUI 的用户体验。
*   **稳定性提升**：Issue #3638 报告的 MCP `streamable_http_client` 导致的 100% CPU 泄露问题已得到确认并关闭，意味着相关修复已就绪或已在主分支解决。

## 4. 社区热点
*   **[Issue #3618] 模型区域不可用引发的严重故障**：该 Issue 获得了 11 条评论。用户反馈因模型服务端区域限制导致 NanoBot 长期无响应，甚至需要重装恢复。这反映了用户对模型 API 容错机制和错误提示友好度的强烈需求。
    *   链接: [HKUDS/nanobot Issue #3618](https://github.com/HKUDS/nanobot/issues/3618)
*   **[Issue #3639] 跨智能体身份与信任协议提案**：该提案建议引入 Ed25519 身份验证协议，以适应 NanoBot 在移动端和边缘设备的轻量级代理间通信。讨论涉及 Layer 2 层的架构设计，标志着社区开始关注多智能体协作的安全性基础设施。
    *   链接: [HKUDS/nanobot Issue #3639](https://github.com/HKUDS/nanobot/issues/3639)

## 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，部分已有修复方案：

*   **[严重] DeepSeek v4 推理模式报错 (NEW)**：Issue #3665 报告在使用 `deepseek-v4-flash` 时，因未回传 `reasoning_content` 导致 API 报错。
    *   链接: [HKUDS/nanobot Issue #3665](https://github.com/HKUDS/nanobot/issues/3665)
*   **[严重] WebSocket 媒体文件丢失 (FIXED)**：Issue #3674 指出 WebSocket 通道静默丢弃入站消息中的 `media` 字段。PR #3673 已提交修复，通过在分发信封时传递媒体数据解决该问题。
    *   Issue: [HKUDS/nanobot Issue #3674](https://github.com/HKUDS/nanobot/issues/3674) | Fix PR: [HKUDS/nanobot PR #3673](https://github.com/HKUDS/nanobot/pull/3673)
*   **[中等] 运行时上下文泄漏 (FIXED)**：Issue #3670 报告 `nightly` 分支中运行时上下文脚手架泄漏到持久化历史记录中。PR #3671 正在处理此回归问题。
    *   Issue: [HKUDS/nanobot Issue #3670](https://github.com/HKUDS/nanobot/issues/3670) | Fix PR: [HKUDS/nanobot PR #3671](https://github.com/HKUDS/nanobot/pull/3671)
*   **[中等] SSE 流式传输被缓存 (FIXED)**：PR #3677 修复了 HTTP 压缩缓冲导致 SSE 流看起来像批量传输的问题，恢复了实时流体验。
    *   Fix PR: [HKUDS/nanobot PR #3677](https://github.com/HKUDS/nanobot/pull/3677)

## 6. 功能请求与路线图信号
*   **安全性增强**：PR #3649 提议为 API Server 增加可配置的 Bearer Token 认证，填补了此前 API 安全校验的空白，适合正在纳入下一版本规划。
    *   链接: [HKUDS/nanobot PR #3649](https://github.com/HKUDS/nanobot/pull/3649)
*   **离线支持优化**：Issue #3647 请求使用本地分词器估算 Token，以避免网络延迟导致的卡顿。PR #3662 已提交实现，优先使用本地缓存。
    *   Issue: [HKUDS/nanobot Issue #3647](https://github.com/HKUDS/nanobot/issues/3647) | PR: [HKUDS/nanobot PR #3662](https://github.com/HKUDS/nanobot/pull/3662)
*   **功能开关**：Issue #3652 请求增加禁用 "Dream" 功能的开关，反映出部分用户对后台资源占用的顾虑。
    *   链接: [HKUDS/nanobot Issue #3652](https://github.com/HKUDS/nanobot/issues/3652)

## 7. 用户反馈摘要
*   **错误处理体验差**：用户反馈遇到模型 API 错误（如区域限制）时，系统表现不明确，往往需要手动重置或重装，期望有更优雅的降级或提示机制。
*   **配置困惑**：Groq 语音转录的配置方式不够直观，用户容易配置无效的 API Base URL（Issue #3637）。
*   **个性化需求**：用户希望能自定义 Bot 名称和图标，而不仅仅是显示默认的 "nanobot"（Issue #3650）。

## 8. 待处理积压
*   **长期未合并 PR 关注**：
    *   PR #2526 (`/stop` 命令保留会话上下文)：自 3 月提交至今未合并，影响用户中断任务时的体验。
        *   链接: [HKUDS/nanobot PR #2526](https://github.com/HKUDS/nanobot/pull/2526)
    *   PR #1443 (解耦心跳推理与通知)：涉及核心调度逻辑，自 3 月初开启，需维护者尽快 Review 以推进架构优化。
        *   链接: [HKUDS/nanobot PR #1443](https://github.com/HKUDS/nanobot/pull/1443)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-07)

## 1. 今日速览
Zeroclaw 项目今日保持极高的活跃度，Issues 与 PR 更新数均达到 50 条，显示出社区与开发团队正在高频推进版本迭代。重点聚焦于 **v0.7.5 版本的发布准备**（版本号 bump PR 已提交）以及**模型 Provider 生态的大规模扩展**。核心架构方面，针对 Multi-agent UX 的 RFC 讨论进入关键阶段，同时 Gateway 的健壮性得到显著增强（支持无模型启动）。整体来看，项目正处于新版本发布前的功能收敛与生态补全阶段。

## 2. 版本发布
**无新版本发布**。
但值得注意的是，PR #6492 已提交将版本号从 v0.7.4 升级至 **v0.7.5**，预计新版本发布在即。该版本主要聚焦于发布流水线的自动化重构及多项 Bug 修复。

## 3. 项目进展
今日共有 9 个 PR 被合并或关闭，41 个 PR 处于待合并状态，主要进展如下：

*   **v0.7.5 发布准备**：PR [#6492](https://github.com/zeroclaw-labs/zeroclaw/pull/6492) 完成了版本号的升级，标志着 v0.7.5 进入最终测试阶段。
*   **Gateway 健壮性修复**：PR [#6493](https://github.com/zeroclaw-labs/zeroclaw/pull/6493) 修复了 Gateway 在未配置模型时无法启动的问题，确保用户能进入 `/onboard` 引导流程，降低了首次使用的门槛。
*   **模型 Provider 生态扩展**：合并了包括 **GitHub Models**, **Upstage Solar**, **Featherless AI**, **Arcee AI**, **Lambda AI**, **Inception Labs (Mercury)** 等在内的多个新模型提供商 PR（如 [#6463](https://github.com/zeroclaw-labs/zeroclaw/pull/6463), [#6462](https://github.com/zeroclaw-labs/zeroclaw/pull/6462) 等），极大地丰富了用户对本地/云端推理后端的选择。
*   **前端体验优化**：PR [#6369](https://github.com/zeroclaw-labs/zeroclaw/pull/6369) 修复了 Agent 工具按钮高度显示异常，提升了 Dashboard 的视觉一致性。

## 4. 社区热点
今日讨论最活跃的议题集中在品牌形象与核心架构设计：

*   **Logo 重设计讨论 ([#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710))**：评论数达 10 条，位居榜首。社区对当前 Logo 提出了改进建议，作者 @mastwet 提交了新设计草案，引发了关于品牌识别度的积极讨论。
*   **Multi-agent UX 架构 RFC ([#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890))**：评论数 8 条。该 RFC 已通过核心团队投票，目前正在进行文档提取工作。这标志着 Zeroclaw 即将引入原生的多智能体协作流程，是项目发展的关键里程碑。
*   **v0.7.5 里程碑追踪 ([#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878))**：评论数 8 条。团队正紧锣密鼓地核对发布清单，确保自动化流水线就绪。

## 5. Bug 与稳定性
今日报告了若干严重程度较高的 Bug，主要集中在运行时并发与通信协议层面：

*   **[P0 Blocker] Matrix 渠道多实例冲突 ([#6487](https://github.com/zeroclaw-labs/zeroclaw/issues/6487))**：严重级别 S1。运行多个 Matrix 实例会导致状态目录损坏和会话冲突，目前尚未有修复 PR，需维护者紧急关注。
*   **[S1] WhatsApp Web 协议失效 ([#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246))**：受 2026-04-24 服务端协议升级影响，WhatsApp Web 渠道消息收发静默失败。
*   **[S1] Shell 工具调用被拒 ([#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434))**：在 `autonomy = "full"` 配置下，Shell 工具调用仍被拦截，疑似权限逻辑回退。
*   **[S2] Postgres 运行时崩溃 ([#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472))**：Gateway 启动时报 "Cannot start a runtime from within a runtime" 错误。
*   **修复进度**：针对 Matrix 渠道重复回复的问题已有 PR [#6306](https://github.com/zeroclaw-labs/zeroclaw/pull/6306) 提交修复。

## 6. 功能请求与路线图信号
大量 Provider 集成 PR 的集中出现，显示出项目正在积极构建"模型无关"的生态系统。结合 Issues 分析：

*   **通信渠道多样化**：Issues 如 [#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437) (Zulip)、[#6435](https://github.com/zeroclaw-labs/zeroclaw/issues/6435) (Rocket.Chat)、[#6494](https://github.com/zeroclaw-labs/zeroclaw/issues/6494) (Vonage SMS) 显示项目正致力于成为"全渠道 AI Agent"，覆盖主流 IM 与短信平台。
*   **插件化架构演进**：Issue [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) 提出 "Everything is a plugin" 愿景，计划将现有的集成与插件概念统一，预示着 v0.8.0 版本可能带来重大的架构重构。

## 7. 用户反馈摘要
*   **痛点：配置复杂性**：Issue [#6273](https://github.com/zeroclaw-labs/zeroclaw/issues/6273) 指出当前 Model 与 TTS Provider 配置结构混乱，别名过多，用户希望能有更规范、类型化的配置方式。对应的 PR [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) 已提交。
*   **痛点：依赖更新滞后**：Issue [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) 反映 WhatsApp Web 依赖库未及时跟进上游协议变更，导致功能不可用，用户对 Channel 层的维护及时性有更高期待。
*   **满意度：Dashboard 进步**：Issues 中对 Dashboard 自更新 (#6365) 和节点管理功能的请求表明用户对 Web 端管理体验有较高依赖，且开发团队响应迅速。

## 8. 待处理积压
*   **高优先级阻塞问题**：Issue [#6487](https://github.com/zeroclaw-labs/zeroclaw/issues/6487) (Matrix 多实例崩溃) 目前尚未指派修复 PR，鉴于其 P0 级别，建议维护者优先处理。
*   **文档缺失**：Issue [#5863](https://github.com/zeroclaw-labs/zeroclaw/issues/5863) 请求补充关于 Skills 的开发文档，该 Issue 标记为 `good first issue`，适合新贡献者参与。
*   **长期 RFC 推进**：Issue [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) 的 Multi-agent UX 流程已通过投票，但文档迁移工作尚待完成，需持续推进。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-07)

## 1. 今日速览
过去 24 小时内，Hermes Agent 项目保持着极高的社区活跃度，共有 50 个 Issue 更新与 50 个 PR 更新。尽管未发布新版本，但开发重心明显向稳定性修复与平台适配上倾斜。社区关注焦点集中在 Matrix 协议的连接稳定性问题以及新的搜索后端支持。目前有大量 PR (41个) 处于待合并状态，显示出项目正在为下一个版本进行密集的代码审查与功能集成。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
今日共有 9 个 PR 被合并或关闭，主要集中在安全修复、核心体验优化及平台适配方面：

*   **安全增强**：PR #20998 修复了上下文压缩摘要中的潜在敏感信息泄露风险，强制对压缩摘要进行脱敏处理，提升了 Agent 的安全边界。
*   **模型支持稳定性**：PR #20997 修复了 Anthropic 模型响应历史的保留问题，确保 `thinking` 和 `redacted` 块在上下文压缩或重试时不会丢失，这对使用 Claude 系列模型的用户至关重要。
*   **平台适配修复**：PR #20797 修复了微信/企业微信网关中 `ret=-2` 导致的会话失效判定问题，提升了国内用户的连接稳定性。
*   **功能迭代**：PR #20989 提交了 Brave Search 原生后端的支持，响应了社区对高性价比搜索引擎集成的强烈需求。

总体而言，项目在多平台网关的健壮性和多模型兼容性上迈出了坚实的一步。

## 4. 社区热点
今日社区讨论最热烈的问题反映了用户对核心稳定性和新功能的迫切需求：

*   **[Bug] Matrix 机器人连接问题 (#12614)**：以 17 条评论位居榜首。用户反馈在合并 #10860 后，Matrix 机器人出现同步停滞，无法接收消息。这表明最近的架构变更可能引入了严重的回归问题，影响了部分即时通讯用户的正常使用。
    *   链接: [NousResearch/hermes-agent Issue #12614](https://github.com/NousResearch/hermes-agent/issues/12614)
*   **[Feature] Brave Search 后端支持 (#10644)**：获得 21 个点赞，是今日呼声最高的功能请求。用户希望引入 Brave Search API 作为除 Tavily/Exa 之外的低成本、隐私友好型搜索选项。
    *   链接: [NousResearch/hermes-agent Issue #10644](https://github.com/NousResearch/hermes-agent/issues/10644)
*   **[Bug] 输出长度截断错误 (#7237)**：已关闭。该问题涉及长文本生成时的截断错误，经过 14 条评论讨论后已解决，表明团队正在积极优化生成类任务的稳定性。
    *   链接: [NousResearch/hermes-agent Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237)

## 5. Bug 与稳定性
今日报告了多个影响体验的 Bug，其中部分已有修复方案：

*   **P1 严重 - OpenRouter 凭证缺失导致崩溃 (#20982)**：当 `OPENROUTER_API_KEY` 缺失时，网关未进行预检直接创建空 Agent 导致 RuntimeError。Issue 已关闭，推测已在最新代码中修复。
    *   链接: [NousResearch/hermes-agent Issue #20982](https://github.com/NousResearch/hermes-agent/issues/20982)
*   **P2 稳定性 - Windows 文件写入路径错误 (#20927)**：在 Windows 环境下，`write_file` 工具存在路径处理错误，导致会话中断后出现幻觉回复。暂无对应修复 PR，需 Windows 用户关注。
    *   链接: [NousResearch/hermes-agent Issue #20927](https://github.com/NousResearch/hermes-agent/issues/20927)
*   **P2 稳定性 - Slack 群组空回复死循环 (#13248)**：在使用 Claude Opus 模型时，Slack 群组非提及消息可能导致 Agent 陷入空回复重试循环。
    *   链接: [NousResearch/hermes-agent Issue #13248](https://github.com/NousResearch/hermes-agent/issues/13248)
*   **P2 功能缺陷 - Telegram 图片无法作为工具附件 (#20899)**：Telegram 接收的图片虽然模型可见，但无法传递给工具进行本地保存或处理，限制了自动化流程。
    *   链接: [NousResearch/hermes-agent Issue #20899](https://github.com/NousResearch/hermes-agent/issues/20899)

## 6. 功能请求与路线图信号
结合 Issue 与 PR 动态，以下功能极有可能纳入下一阶段路线图：

*   **Brave Search 集成**：Issue #10644 的高点赞量与 PR #20989 的提交表明，Brave Search 极大概率将在下个版本作为原生搜索后端上线。
*   **飞书 平台增强**：PR #21000 和 #21007 提交了对飞书交互式卡片及话题跟随模式的支持，显示项目正在积极拓展国内及企业级 IM 市场。
*   **SOUL.md 记忆机制**：PR #11931 提出了通过 `SOUL.md` 让 Agent 自我演进人格的设想，虽然目前处于 Closed 状态，但这可能是记忆系统进化的一个方向。

## 7. 用户反馈摘要
从今日的 Issue 评论中提炼出以下痛点：

*   **连接稳定性焦虑**：Matrix (#12614) 和 MiniMax (#6838) 用户均反馈连接中断或同步失效问题，表明在非 OpenAI 官方 API 或特定协议上的稳定性仍有提升空间。
*   **上下文丢失恐慌**：Issue #20849 详细描述了复杂编程任务中严重的上下文丢失和代码覆盖问题，用户对 Agent 在长程任务中的“记忆”可靠性表示担忧。
*   **交互体验细节**：CLI 用户希望改进图片粘贴后的删除逻辑 (#7640)，Telegram 用户希望解决 LaTeX 格式泄露问题 (#13262)，这些细节影响了终端用户的主观体验。

## 8. 待处理积压
以下重要 Issue 长期未得到根本解决或响应，建议维护者优先关注：

*   **凭证池轮换逻辑缺陷 (#16902)**：关于 API Key 轮换不应消耗重试次数的修复 PR 仍在 Open 状态，这对多 Key 用户的可用性影响较大。
    *   链接: [NousResearch/hermes-agent PR #16902](https://github.com/NousResearch/hermes-agent/pull/16902)
*   **记忆系统重要性评分缺失 (#12883)**：关于“什么该记，什么该忘”的核心机制缺失，目前仍是 Open 状态，这是 Agent 长期记忆能力的瓶颈之一。
    *   链接: [NousResearch/hermes-agent Issue #12883](https://github.com/NousResearch/hermes-agent/issues/12883)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-07)

## 1. 今日速览
PicoClaw 项目今日保持高度活跃，共更新了 61 个 Pull Requests 和 21 个 Issues，并发布了一个新的 Nightly 版本 (v0.2.8)。项目核心开发重点集中在多 Agent 架构的完善（如 `delegate` 和 `spawn` 工具的优化）以及底层稳定性修复（如 SSE 流解析和认证问题）。社区反馈方面，用户对认证失败和会话历史记录问题的反馈较为强烈，开发者社区积极响应了 MCP 协议支持、多用户群聊归属等高级功能的开发。整体来看，项目正处于功能迭代与稳定性打磨并重的阶段，但在错误处理和边缘场景（如重试机制、时间戳显示）仍有待完善。

## 2. 版本发布
- **nightly: Nightly Build (v0.2.8-nightly.20260507.788cda5c)**
  - **更新说明**: 自动化构建版本，可能包含不稳定因素。
  - **变更范围**: 基于 `main` 分支，涵盖了自 v0.2.8 以来的最新提交。
  - **注意事项**: 官方提示该版本为自动构建，建议测试环境使用，生产环境需谨慎评估稳定性。

## 3. 项目进展
今日共有 **21 个 PR** 状态变更为已合并/关闭，主要进展如下：

- **多 Agent 架构增强**:
  - [PR #2531](https://github.com/sipeed/picoclaw/pull/2531) `feat(tools): add delegate tool for cross-agent task handoff` **[CLOSED]**。实现了跨 Agent 任务移交功能，允许 `delegate(agent_id, task)` 将任务同步移交给指定 Agent，这是多 Agent 协作架构的关键一步。
  - [PR #2790](https://github.com/sipeed/picoclaw/pull/2790) `fix(agents): route spawn tool to target agent` **[OPEN]**。修复了 `spawn` 工具的路由问题，确保子 Agent 能正确继承模型、工具和工作空间，进一步完善了多 Agent 交互逻辑。

- **功能与体验优化**:
  - [PR #2788](https://github.com/sipeed/picoclaw/pull/2788) `feat(session): add per-message created_at timestamps` **[OPEN]**。针对 Session API 缺少单条消息时间戳的问题提交了修复，将显著改善前端消息显示的准确性。
  - [PR #2629](https://github.com/sipeed/picoclaw/pull/2629) `fix(tools): improve web search provider fallback` **[CLOSED]**。优化了网络搜索提供商的降级逻辑，统一了运行时和 API 的可用性判断。

- **底层修复与重构**:
  - [PR #2411](https://github.com/sipeed/picoclaw/pull/2411) `fix(provider): handle split SSE stream chunk parsing` **[CLOSED]**。修复了 SSE 流解析中分块导致的内容丢失问题，提升了 LLM 响应流的稳定性。
  - [PR #2624](https://github.com/sipeed/picoclaw/pull/2624) `feat(providers): add openai-compatible embeddings support` **[CLOSED]**。增加了对 OpenAI 兼容 Embeddings 接口的支持，扩展了向量模型适用范围。

## 4. 社区热点
今日讨论最活跃的 Issues/PRs 集中在底层错误处理和多 Agent 逻辑：

- **[Issue #629](https://github.com/sipeed/picoclaw/Issue/629) [BUG] Didn't retry if meet LLM call failed** (评论: 13)
  - **诉求分析**: 这是一个长期存在的问题，用户反馈在 LLM 调用失败（如 HTTP 500）时，系统不会自动重试导致任务挂起。这反映了用户对生产环境高可用性的强烈需求。
- **[Issue #1042](https://github.com/sipeed/picoclaw/Issue/1042) [BUG] exec工具的guardCommand方法问题** (评论: 8)
  - **诉求分析**: 用户指出安全守卫逻辑过于简单粗暴，误杀了非路径相关的命令（如 `curl` 天气查询）。社区呼吁更精细的命令校验逻辑，以平衡安全性与功能可用性。
- **[Issue #293](https://github.com/sipeed/picoclaw/Issue/293) Feature: Autonomous Browser Operations** (评论: 7, 👍: 8)
  - **诉求分析**: 高优先级路线图功能，寻求实现浏览器自动化操作能力。社区对该功能期待值较高，讨论集中在实现路径（浏览器插件 vs 直接自动化）上。

## 5. Bug 与稳定性
今日报告了多个影响使用体验的 Bug，部分已有修复 PR：

**严重级别:**
- **[Issue #2769](https://github.com/sipeed/picoclaw/Issue/2769) [BUG] PicoClaw authentication fails with valid API keys (401 across providers)**: 多个提供商均报告认证失败，疑似底层鉴权逻辑存在回归问题，影响范围较广。
- **[Issue #2704](https://github.com/sipeed/picoclaw/Issue/2704) [BUG] DingTalk SDK 的 panic 导致 getway 异常停止**: 钉钉 SDK 并发错误导致 Gateway 崩溃，属于稳定性重大隐患。

**一般级别:**
- **[Issue #1042](https://github.com/sipeed/picoclaw/Issue/1042) [BUG] exec工具的guardCommand方法问题**: 安全守卫逻辑误判导致合法命令被拦截。
- **[Issue #2775](https://github.com/sipeed/picoclaw/Issue/2775) [Feature]子 Agent 继承根 Agent 的 AGENT.md 导致角色身份混淆**: 多 Agent 架构下，子 Agent 错误继承了父级角色设定，导致行为异常。
- **[Issue #2786](https://github.com/sipeed/picoclaw/Issue/2786) [BUG] Session API 消息缺少独立时间戳**: 导致前端所有消息显示同一时间。**已有修复 PR**: [PR #2788](https://github.com/sipeed/picoclaw/pull/2788)。

**已修复/已关闭:**
- **[Issue #2548](https://github.com/sipeed/picoclaw/Issue/2548) [Error] Multiple authentication credentials received**: 已关闭，可能与配置逻辑调整有关。

## 6. 功能请求与路线图信号
- **MCP 协议增强**: [Issue #2782](https://github.com/sipeed/picoclaw/Issue/2782) 请求支持 Streamable HTTP 传输协议。随着 MCP 生态发展，PicoClaw 需紧跟规范以兼容更多 Server。
- **模型支持扩展**: [Issue #2706](https://github.com/sipeed/picoclaw/Issue/2706) 请求支持 Deepseek v4 thinking model 的 `reasoning_content` 字段回传；[Issue #2671](https://github.com/sipeed/picoclaw/Issue/2671) 请求支持 Opencode 提供商。
- **UI 改进**: [PR #2770](https://github.com/sipeed/picoclaw/pull/2770) 提议在 Web UI 增加 MCP 管理板块，减少用户手动编辑配置文件的频率，提升易用性。

## 7. 用户反馈摘要
- **会话管理痛点**: 用户对会话历史记录的完整性（[Issue #2310](https://github.com/sipeed/picoclaw/Issue/2310)）和时间戳准确性（[Issue #2787](https://github.com/sipeed/picoclaw/Issue/2787)）投诉较多，认为这影响了复盘和演示效果。
- **配置复杂度**: 多个 Issues（如 #2548, #2623）反映配置文件（config.json / .env）的处理逻辑复杂，容易出现冲突或未生效的情况，用户期待更直观的 UI 配置工具（如 #2770）。
- **稳定性担忧**: 针对 LLM 调用失败无重试机制（#629）和 Gateway 崩溃（#2704）的问题，用户表达了对系统健壮性的担忧，希望在异常情况下能有更优雅的降级或恢复策略。

## 8. 待处理积压
- **长期未解决**: [Issue #629](https://github.com/sipeed/picoclaw/Issue/629) (LLM 调用失败重试) 自 2 月创建至今，虽然评论活跃但尚未有明确修复 PR，建议维护者优先关注。
- **路线图停滞**: [Issue #293](https://github.com/sipeed/picoclaw/Issue/293) (浏览器自动化) 标记为高优先级但尚无实质性代码提交，可能处于调研或排期阶段，需更新进度以管理社区预期。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-07)

## 1. 今日速览
NanoClaw 项目今日保持高活跃度，共更新 **25 条 PR** 与 **4 条 Issue**。项目重心明显向 **v2 迁移稳定性** 与 **用户体验优化** 倾斜，尤其是针对非技术用户的 Slack 集成流程进行了大规模重构。社区贡献活跃，今日合并了 3 个关键修复 PR，解决了 WhatsApp 消息过滤与迁移脚本依赖等问题。尽管没有新版本发布，但大量待合并的 Feature PR 预示着下一次版本更新将包含显著的功能增强。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 **3 个 PR 合并/关闭**，主要集中在 Bug 修复与依赖优化，显著提升了 v2 版本的健壮性。

*   **[MERGED] PR #2302 fix(whatsapp): allow self-chat messages through fromMe filter**
    *   **进展**：修复了 WhatsApp 适配器中 `fromMe` 过滤逻辑过于激进的问题，此前该逻辑会误删用户在“自聊”模式下的消息。
    *   **意义**：解决了特定使用场景下的通信阻断问题，提升了个人使用模式的稳定性。
    *   **链接**：qwibitai/nanoclaw PR #2302

*   **[MERGED] PR #2309 fix(skills): replace sqlite3 CLI with in-tree better-sqlite3 wrapper**
    *   **进展**：移除了对外部 `sqlite3` CLI 工具的依赖，改用内置的 `better-sqlite3` 封装。
    *   **意义**：直接解决了 Issue #2191 中提到的迁移脚本因缺少 CLI 工具而报错误导用户的问题，降低了部署依赖门槛。
    *   **链接**：qwibitai/nanoclaw PR #2309

*   **[MERGED] PR #2308 fix(prompts): tighten approval-card flow + drop ghost tool ref**
    *   **进展**：清理了 Prompt 中对不存在工具 `list_recent_batches` 的引用，并优化了审批流程的 UI 提示。
    *   **意义**：减少了 Agent 幻觉调用无效工具的情况，改善了交互体验。
    *   **链接**：qwibitai/nanoclaw PR #2308

## 4. 社区热点
今日社区讨论焦点集中在 **v2 迁移痛点** 与 **集成易用性** 两个方向。

*   **Issue #2312: groups/global/CLAUDE.md 无条件删除问题**
    *   **热度**：👆 0 | 💬 1
    *   **分析**：用户报告每次启动服务都会删除仓库中提交的特定文件，导致工作树持续处于“脏”状态。这反映了 v2 架构变更可能引入了意外的副作用，影响开发者体验。
    *   **链接**：qwibitai/nanoclaw Issue #2312

*   **Slack 集成体验大修 (系列 PRs by @alipgoldberg)**
    *   **热度**：今日有 8 个 PR 集中优化 Slack 设置流程。
    *   **分析**：社区（或核心贡献者）强烈意识到当前 Slack 集成对非技术用户不友好（如“Expose webhook server”等术语壁垒）。这一系列 PR 旨在将复杂的配置流程转化为“白话文”引导，降低了产品门槛。
    *   **代表链接**：qwibitai/nanoclaw PR #2305, qwibitai/nanoclaw PR #2304

## 5. Bug 与稳定性
今日报告的 Bug 集中在迁移工具链与架构兼容性上。

*   **[P0/High] Issue #2311: `/claw` skill 与 v2 架构不兼容**
    *   **描述**：旧版 `/claw` 技能脚本基于 v1 架构编写，在 v2 环境下会导致 DB schema、传输层等多层错误。
    *   **状态**：建议弃用，尚无修复 PR。
    *   **链接**：qwibitai/nanoclaw Issue #2311

*   **[P1/Medium] Issue #2294: v2 迁移脚本未更新 Matrix/Discord 环境变量**
    *   **描述**：迁移脚本未能正确映射 v1 的凭证环境变量到 v2 的新 Key，导致通道适配器启动失败。
    *   **状态**：OPEN，待修复。
    *   **链接**：qwibitai/nanoclaw Issue #2294

*   **[P1/Medium] Issue #2312: 启动时文件误删**
    *   **描述**：如前所述，启动逻辑导致仓库文件被意外删除。
    *   **状态**：OPEN，待确认修复方案。
    *   **链接**：qwibitai/nanoclaw Issue #2312

*   **[Fixed] Issue #2191: 迁移脚本依赖检测误导**
    *   **描述**：缺少 sqlite3 CLI 时报错 DB 缺失，已通过 PR #2309 移除该依赖修复。
    *   **链接**：qwibitai/nanoclaw Issue #2191

## 6. 功能请求与路线图信号
今日涌现多个高质量的功能 PR，暗示项目正在向更强大的多模态与自动化方向发展。

*   **本地语音转录**
    *   **信号**：用户希望在不依赖外部 API 的情况下处理语音消息。
    *   **进展**：PR #2009 提交了基于本地 Whisper 的转写技能，支持 Python 和 C++ 后端。
    *   **链接**：qwibitai/nanoclaw PR #2009

*   **GitHub 集成轮询模式**
    *   **信号**：内网/NAT 环境用户无法暴露端口接收 Webhook，限制了 GitHub 集成的使用。
    *   **进展**：PR #2301 引入了无需端口映射的轮询模式。
    *   **链接**：qwibitai/nanoclaw PR #2301

*   **媒体下载工具**
    *   **信号**：PR #2306 提议集成 yt-dlp MCP 服务器，扩展 Agent 处理网络媒体资源的能力。
    *   **链接**：qwibitai/nanoclaw PR #2306

## 7. 用户反馈摘要
*   **迁移受阻**：多个 Issue (#2294, #2191) 表明 v1 到 v2 的迁移脚本并不稳健，环境变量映射缺失和依赖检查报错是主要阻碍。
*   **技术门槛高**：针对 Slack 设置的反馈显示，现有的“Webhook”、“Ngrok”等术语对非开发者构成了认知障碍，急需“傻瓜化”引导。
*   **架构变更困惑**：Issue #2311 显示部分旧版技能未能及时随架构升级，导致用户在使用旧文档或习惯操作时遇到兼容性问题。

## 8. 待处理积压
以下重要 Issue/PR 滞留时间较长或关注度较高，建议优先处理：

*   **[Security] PR #2004: 信任边界加固**
    *   **描述**：针对 Channel 安装脚本的源信任问题进行安全加固。涉及安全核心，建议尽快审核合并。
    *   **滞留时间**：创建于 2026-04-25，已滞留 12 天。
    *   **链接**：qwibitai/nanoclaw PR #2004

*   **[Feature] PR #2009: 语音转录技能**
    *   **描述**：高价值功能 PR，滞留 12 天。鉴于当前多模态趋势，建议尽快推进 Code Review。
    *   **链接**：qwibitai/nanoclaw PR #2009

*   **[Issue] #2294 & #2312**
    *   **描述**：影响现有用户迁移和日常使用的阻断性问题，尚未有官方回应或修复 PR（Issue #2294）。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-07)

## 1. 今日速览
NullClaw 项目今日整体活跃度维持在中低水平，未发布新版本，无代码合并记录。社区焦点高度集中在低资源设备兼容性问题上，一个关于 `web_search` 功能在弱网或低配环境下不可用的严重 Bug 引发了持续讨论。功能开发方面，针对自动化任务调度的 PR 仍在审查中，暂无新的代码变更落地。项目整体处于维护与需求评审阶段，核心功能优化仍是当前主要任务。

## 2. 版本发布
无。

## 3. 项目进展
今日无合并或关闭的 PR。项目进度主要受限于现有 PR 的审查周期，核心功能迭代暂未落地。

*   **待审查关键 PR**：[#783 feat(cron): cron subagent, run history, JSON output, security hardening](https://github.com/nullclaw/nullclaw/pull/783)
    *   该 PR 自 4 月初开启至今未合并，今日有更新活动。内容涉及引入基于数据库的 Cron 调度引擎、运行历史记录、JSON CLI 输出及安全加固。这是目前最重要的功能性 PR，一旦合并将显著提升 NullClaw 的自动化任务处理能力。

## 4. 社区热点
今日讨论最活跃的议题围绕核心功能在受限环境下的可用性展开。

*   **活跃 Issue**: [#871 [bug] Critical: web_search is impractical on low-resource devices without direct DuckDuckGo support](https://github.com/nullclaw/nullclaw/issues/871)
    *   **数据表现**：虽然创建于 4 月 25 日，但今日持续活跃，累计评论达 7 条。
    *   **深度分析**：该 Issue 直指 NullClaw "轻量级/低资源" 定位与当前 `web_search` 依赖外部 API（如 Brave Search）之间的矛盾。用户指出，在廉价、低资源配置的设备上，现有的 API Key 依赖和潜在费用门槛使得该功能变得“不切实际”。这反映了社区对于 NullClaw 保持“轻量、低成本、易部署”特性的强烈诉求。

## 5. Bug 与稳定性
今日报告/活跃的 Bug 严重影响特定场景下的核心功能可用性。

*   **Critical**: [#871 web_search 在低资源设备上不实用](https://github.com/nullclaw/nullclaw/issues/871)
    *   **问题描述**：当前 `web_search` 缺乏对 DuckDuckGo 的直接支持，导致在低资源设备上无法有效使用，违背了项目“运行在弱设备上”的初衷。
    *   **严重程度**：高。阻碍了核心用户群（追求低成本 AI Agent 部署者）的关键功能使用。
    *   **修复状态**：目前尚无关联的 Fix PR，仍处于问题讨论阶段。

## 6. 功能请求与路线图信号
从社区反馈中捕捉到以下关于产品方向的信号：

*   **原生搜索引擎集成**：结合 Issue #871，用户强烈请求原生支持 DuckDuckGo 等无需付费 API 或重度依赖的搜索引擎。这表明下一阶段路线图可能需要优先考虑“去 API 依赖化”的搜索方案。
*   **自动化与运维增强**：PR #783 的持续推进表明项目正在向企业级或高级个人用户需求靠拢，增加了任务调度（Cron）和运维友好的 JSON 输出，这可能预示着 NullClaw 正试图从单一 Agent 向自动化工作流平台演进。

## 7. 用户反馈摘要
根据 Issue #871 的评论提炼用户痛点：

*   **痛点**：用户选择 NullClaw 往往是因为其轻量级特性，希望在树莓派、廉价 VPS 或本地旧设备上运行。当前的搜索功能强制依赖外部 API Key（可能产生费用或网络限制），破坏了“开箱即用”和“低资源消耗”的体验。
*   **场景**：离线环境、严格防火墙环境或预算有限的个人自动化项目。
*   **建议**：增加对无需 API Key 的搜索引擎（如 DuckDuckGo）的直接抓取或轻量级集成支持。

## 8. 待处理积压
以下重要条目长期未得到最终解决，建议维护者优先关注：

*   **停滞的功能性 PR**：[PR #783](https://github.com/nullclaw/nullclaw/pull/783) 已开启超过一个月，涵盖重要的 Cron 功能。长期的未合并状态可能阻碍下游依赖该功能的开发工作，建议维护者尽快进行最终审查或反馈遗留问题。
*   **严重的兼容性 Bug**：[Issue #871](https://github.com/nullclaw/nullclaw/issues/871) 标记为 Critical 且持续活跃，直接打击项目的核心定位（低资源设备可用），需尽快确认修复方案。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-07)

## 1. 今日速览
IronClaw 项目今日处于高度活跃状态，核心开发重心明显向代号为 **"Reborn"** 的大规模架构重构倾斜。过去 24 小时内，Issues 活跃度高达 41 条（其中 32 条为新发/活跃议题），PR 更新达 47 条，显示出维护团队正在进行密集的代码提交与设计讨论。项目正处在从旧架构向新的 "TurnCoordinator" 和 "ProductAdapter" 架构迁移的关键阶段，多个基础服务层的契约定义已完成。不过，今日新增了数个关于 Telegram 与 Gmail 集成的 P1 级别 Bug，提示在重构期间边缘功能的稳定性可能出现波动。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
今日共有 **27 个 PR 被合并或关闭**，主要推进了底层架构重构与关键 Bug 修复，项目整体向着 "Reborn" 架构的落地迈出了坚实一步。

*   **架构重构**：
    *   合并了 [PR #3315](https://github.com/nearai/ironclaw/pull/3315)，新增了 `ironclaw_threads` crate，定义了 `SessionThreadService` 的核心契约，为会话线程持久化奠定了基础。
    *   合并了 [PR #3180](https://github.com/nearai/ironclaw/pull/3180)，完成了 Reborn 内存底层的重构，引入了原生隔离的防护栏并拆分了模块，这是重构栈中的关键一步。
    *   合并了 [PR #3305](https://github.com/nearai/ironclaw/pull/3305)，实现了 `apply_loop_exit` 逻辑，增强了循环退出的验证与状态管理，提升了引擎的健壮性。
*   **关键修复**：
    *   合并了 [PR #3157](https://github.com/nearai/ironclaw/pull/3157)，修复了 CodeAct 脚本在遇到 Approval gate 时错误抛出 RuntimeError 而非暂停等待用户输入的严重问题，恢复了预期的交互流程。
    *   合并了 [PR #3197](https://github.com/nearai/ironclaw/pull/3197)，修复了 Mission 创建时 `cooldown_secs` 参数类型校验错误的问题（Issue #3132），增强了参数类型的容错性。
*   **功能增强**：
    *   合并了 [PR #3253](https://github.com/nearai/ironclaw/pull/3253)，引入了多租户中继通道，支持 Slack 用户身份解析与配对，扩展了多渠道接入能力。
*   **待合并重点**：
    *   [PR #3316](https://github.com/nearai/ironclaw/pull/3316) (ProductAdapter contracts + Telegram v2) 和 [PR #3314](https://github.com/nearai/ironclaw/pull/3314) (Conversation binding contract) 目前处于 Open 状态，这是下一阶段迁移的核心 PR，值得重点关注。

## 4. 社区热点
今日讨论最热烈的议题集中在 "Reborn" 架构迁移的细节设计上，反映出团队正在精细打磨底层交互逻辑。

*   **[Issue #3013](https://github.com/nearai/ironclaw/issues/3013) [OPEN]**: 讨论热度最高（7条评论）。关于 "Reborn cutover blocker" 的核心组件 `TurnCoordinator`，涉及线程/轮流准入控制，是架构迁移的基石。
*   **[Issue #3031](https://github.com/nearai/ironclaw/issues/3031) [OPEN]**: "Reborn product surface migration" 的总 Epic（6条评论）。定义了如何在重构期间保持用户/操作员行为的一致性，是整个迁移工作的指挥塔。
*   **[Issue #3198](https://github.com/nearai/ironclaw/issues/3198) [CLOSED]**: 定义 `TurnCoordinator` 的公开 API 形状（5条评论）。该 Issue 的关闭标志着 API 设计已达成共识，进入实现阶段。
*   **分析**：社区（核心团队）目前的诉求非常明确——在保持产品表面行为不变的前提下，彻底替换底层引擎。讨论焦点集中在 API 边界定义和状态持久化契约上。

## 5. Bug 与稳定性
今日新增几个影响用户体验的 P1 级 Bug，主要集中在第三方集成（Telegram/Gmail）环节。

*   **P1 - Telegram 与 Gmail 集成故障**：
    *   [Issue #3320](https://github.com/nearai/ironclaw/issues/3320): **IronClaw Telegram 版本在 Gmail 认证失败后无法继续对话**，即使使用 `/clear` 也无法恢复，严重影响使用。
    *   [Issue #3319](https://github.com/nearai/ironclaw/issues/3319): 从 Telegram 启动时 Gmail 认证失败，返回 400 错误。
    *   [Issue #3317](https://github.com/nearai/ironclaw/issues/3317): 本地 IronClaw 与 Telegram 设置连接失败。
*   **已修复问题**：
    *   [Issue #3132](https://github.com/nearai/ironclaw/issues/3132): Mission 创建因 `cooldown_secs` 类型错误失败。已由 [PR #3197](https://github.com/nearai/ironclaw/pull/3197) 修复。
    *   Engine Gate 暂停逻辑异常：已由 [PR #3157](https://github.com/nearai/ironclaw/pull/3157) 修复。

## 6. 功能请求与路线图信号
目前的路线图强烈指向 "Reborn" 架构的全面落地，而非零散的功能堆砌。

*   **ProductAdapter 迁移**：[Issue #3282](https://github.com/nearai/ironclaw/issues/3282) 和 [Issue #3285](https://github.com/nearai/ironclaw/issues/3285) 标志着团队正计划将浏览器聊天路由和外部通道适配器迁移到新的 `ProductAdapter` 路径。这预示着未来版本中，Web 和 Telegram 等前端交互层将拥有统一、可插拔的适配架构。
*   **外部工具支持**：[PR #3122](https://github.com/nearai/ironclaw/pull/3122) 正在支持在 Responses API 中提供外部工具，这可能是为了支持更灵活的插件系统或跨服务调用。
*   **持久化审计**：[Issue #3162](https://github.com/nearai/ironclaw/issues/3162) 提议为生产环境二进制文件添加独立的持久化事件/审计存储，这将增强系统的可观测性和安全性。

## 7. 用户反馈摘要
从今日 Issues 提炼出的用户痛点如下：
*   **集成稳定性**：用户在使用 Telegram 接入 Gmail 等外部服务时遇到认证阻断，且错误处理机制不够健壮（无法恢复对话），这表明在 OAuth 流程和错误回退逻辑上存在体验短板。
*   **本地部署体验**：本地 IronClaw 与 Telegram 的对接配置存在障碍，文档或配置引导可能需要优化。
*   **参数校验**：此前存在的 `cooldown_secs` 整数校验问题表明 LLM 产生的 JSON 格式与强类型后端之间存在不匹配，虽然已修复，但提示后端在处理 LLM 输出时应更宽容或具备更强的 schema 校验层。

## 8. 待处理积压
*   **依赖更新积压**：[PR #2593](https://github.com/nearai/ironclaw/pull/2593) (Dependabot bot) 自 2026-04-17 开启至今未合并，涉及 14 个 Actions 依赖的更新，可能存在兼容性测试滞后的问题，建议维护者尽快处理以避免安全风险。
*   **大型重构 PR 待合并**：[PR #3122](https://github.com/nearai/ironclaw/pull/3122) (Web external tools) 和 [PR #3316](https://github.com/nearai/ironclaw/pull/3316) (ProductAdapter) 是实现下一阶段功能的关键，目前处于 Open 状态，建议优先 Review 以确保 Reborn 进度。

---
*数据来源：GitHub (2026-05-07)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-07)

## 1. 今日速览
LobsterAI 项目今日保持极高的开发活跃度，呈现出“高强度修复与架构重构并行”的态势。过去24小时内共有 **18 个 PR 成功合并**，显示出团队正在密集收尾阶段性功能开发并修复遗留问题。重点推进了 **POPO 多机器人实例支持** 与 **主 Agent 工作目录解耦** 等核心架构升级。遗憾的是，今日社区披露了一个高危安全漏洞（路径穿越），目前尚未修复，需引起维护者高度警惕。整体来看，项目正处于快速迭代优化期，代码库健康度较高，但安全性响应面临挑战。

## 2. 版本发布
本报告期内无新版本发布。

## 3. 项目进展
今日合并的 18 个 PR 主要集中在架构重构、功能增强及稳定性修复三个方面，显著提升了系统的健壮性：

*   **架构重构与优化**：
    *   **[PR #1884](netease-youdao/LobsterAI PR #1884)**：移除已废弃的 `yd_cowork` 引擎分支逻辑，统一为 `openclaw` 单引擎路径，净减少 65 行代码，降低了系统维护成本。
    *   **[PR #1890](netease-youdao/LobsterAI PR #1890)**：实现主 Agent 工作目录与用户配置解耦，将核心状态文件固定于 `{stateDir}/workspace-main/`，彻底解决了修改工作目录导致 Agent 状态丢失的问题。
    *   **[PR #1894](netease-youdao/LobsterAI PR #1894)**：修复了工作目录迁移时内存目录未正确拷贝的时序问题，进一步加固了数据迁移逻辑。

*   **功能增强**：
    *   **[PR #1883](netease-youdao/LobsterAI PR #1883)**：完成了 **POPO 多机器人实例支持**，升级底层插件并新增配置管理组件，大幅提升了企业级 IM 集成的灵活性。
    *   **[PR #1893](netease-youdao/LobsterAI PR #1893)**：增强了微信插件的配置能力，支持通过配置文件读取 `dmPolicy` 和 `allowFrom`，优化了权限控制。
    *   **[PR #1892](netease-youdao/LobsterAI PR #1892)**：新增网关日志按日轮转功能（保留3天），提升了运维监控能力。

*   **关键修复**：
    *   **[PR #1900](netease-youdao/LobsterAI PR #1900)**：修复了并发会话下 Markdown 表格渲染截断的问题，增强了流式文本持久化的稳定性。
    *   **[PR #1891](netease-youdao/LobsterAI PR #1891)**：解决了 Windows 环境下删除 Skill 目录时的 EPERM 权限错误，改善了跨平台兼容性。
    *   **[PR #1896](netease-youdao/LobsterAI PR #1896)**：修复了 IM 任务中动态切换模型不生效的问题。

## 4. 社区热点
今日社区最关注的事件为安全漏洞的披露：

*   **[Issue #1885 [Security] 邮箱SKILL路径穿越漏洞](netease-youdao/LobsterAI Issue #1885)**
    *   **详情**：安全研究员 @Arashimu 指出 `imap-smtp-email` Skill 中的 `downloadAttachments` 实现存在路径穿越风险。由于未对邮箱附件名称进行过滤，攻击者可构造恶意文件名将文件下载至预期目录之外。
    *   **分析**：这是一个潜在的高危漏洞，涉及文件系统操作的安全性。目前该 Issue 状态为 Open，尚无官方回复或修复 PR。建议维护者立即进行代码审计并发布补丁。

## 5. Bug 与稳定性
今日报告的问题主要集中在功能逻辑缺陷与安全性两方面：

*   **🔴 高危 - 安全漏洞 (未修复)**
    *   **[Issue #1885](netease-youdao/LobsterAI Issue #1885)**：IMAP 邮件附件下载路径穿越漏洞。攻击者可利用此漏洞覆盖敏感文件。目前暂无修复 PR，建议临时禁用相关 Skill 或限制权限。

*   **🟢 已修复问题**
    *   **稳定性**：并发场景下 Markdown 表格渲染降级问题（[PR #1900](netease-youdao/LobsterAI PR #1900) 已修）。
    *   **跨平台**：Windows 平台删除 Skill 目录权限报错（[PR #1891](netease-youdao/LobsterAI PR #1891) 已修）。
    *   **逻辑错误**：模型回复后无法停止（[PR #1897](netease-youdao/LobsterAI PR #1897) 已修）；IM 任务模型切换失效（[PR #1896](netease-youdao/LobsterAI PR #1896) 已修）。

## 6. 功能请求与路线图信号
今日 PR 动向透露出明确的路线图信号：
1.  **多实例化部署**：POPO 多实例支持（[PR #1883](netease-youdao/LobsterAI PR #1883)）的落地，表明项目正从单机器人模式向更复杂的多机器人编排模式演进，预示着未来可能支持更复杂的自动化工作流。
2.  **引擎统一化**：彻底移除旧引擎代码（[PR #1884](netease-youdao/LobsterAI PR #1884)），标志着项目已全面拥抱 OpenClaw 架构，后续开发将更加聚焦于单一内核的优化。
3.  **企业级运维**：日志轮转（[PR #1892](netease-youdao/LobsterAI PR #1892)）和工作目录解耦（[PR #1890](netease-youdao/LobsterAI PR #1890)）的引入，显示出项目正朝着生产环境高可用、易运维的方向发展。

## 7. 用户反馈摘要
根据今日唯一的新增 Issue 反馈，核心痛点在于：
*   **安全性盲点**：用户/研究者发现 Skill 脚本层面对外部输入（邮件附件名）缺乏基本的清洗机制，反映出项目在插件安全审计方面存在短板，需加强对第三方或辅助脚本的沙箱隔离与输入校验。

## 8. 待处理积压
*   **🔴 紧急待处理**：[Issue #1885](netease-youdao/LobsterAI Issue #1885) 安全漏洞。鉴于涉及路径穿越，建议立即响应并评估影响范围，发布修复版本。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报 (2026-05-07)**

### 1. 今日速览
Moltis 项目今日维持高活跃度，维护者响应迅速，过去 24 小时内 PR 合并与 Issue 关闭比例极高，显示出项目正处于快速迭代与稳定性修复阶段。核心贡献者 @penso 集中解决了 Docker 环境下的沙箱并发冲突、反向代理认证及 Vault 自动解封等关键基础设施问题。社区方面，开发者开始探讨 Agent 间互操作的身份协议，标志着项目从单体工具向互联生态演进。

### 2. 版本发布
无。

### 3. 项目进展
今日共有 **9 个 PR 被合并**，显著提升了系统的稳定性与兼容性：

*   **核心修复：** [PR #971](https://github.com/moltis-org/moltis/pull/971) 解决了 Docker/Podman 沙箱在并行工具调用时的容器启动竞争条件，修复了沙箱名称冲突问题；[PR #961](https://github.com/moltis-org/moltis/pull/961) 修复了 DeepSeek 模型在思考模式下因缺少 `reasoning_content` 导致的 API 报错。
*   **认证与安全：** [PR #970](https://github.com/moltis-org/moltis/pull/970) 修正了反向代理环境下的 Cookie `Secure` 属性判断逻辑，解决了 HTTP 环境下的登录失败问题；[PR #974](https://github.com/moltis-org/moltis/pull/974) 引入了启动时 Vault 自动解封功能，提升了运维便利性。
*   **企业级支持：** [PR #358](https://github.com/moltis-org/moltis/pull/358) 经过长期打磨终于合并，现支持 GitHub Copilot 企业版 Token 的代理端点路由。
*   **文档更新：** [PR #962](https://github.com/moltis-org/moltis/pull/962) 更新了本地 TTS 提供商的文档链接，移除了对已归档仓库的引用。

### 4. 社区热点
*   **[Issue #973 Agent 互操作性提案](https://github.com/moltis-org/moltis/issues/973)**：用户 @vystartasv 提出了一套 "Onboarding + Identity protocols" 提案，旨在解决不同 Moltis 实例间 Agent 的发现、身份验证与能力交换问题。这反映了用户将 Moltis 作为 "Personal Agent Server" 进行组网的强烈需求，可能成为项目下一阶段的重要路线图。
*   **[Issue #959 DeepSeek 兼容性](https://github.com/moltis-org/moltis/issues/959)**：该 Issue 获得了 1 个点赞，表明用户对国产大模型 DeepSeek 的深度兼容性非常关注，相关修复已在今日合并。

### 5. Bug 与稳定性
今日报告并处理了多个关键 Bug，整体稳定性向好：

*   **严重:** [Issue #977](https://github.com/moltis-org/moltis/issues/977) - Docker (LXC/Proxmox) 环境下浏览器沙箱启动失败，涉及文件系统挂载权限问题。*(目前 OPEN，尚无 Fix PR)*
*   **已修复:** [Issue #964](https://github.com/moltis-org/moltis/issues/964) - 并行工具执行导致 Docker 沙箱名称冲突。
*   **已修复:** [Issue #968](https://github.com/moltis-org/moltis/issues/968) - 非 TLS 代理环境下的登录失败。
*   **已修复:** [Issue #959](https://github.com/moltis-org/moltis/issues/959) - DeepSeek 思考模式 API 调用报错。

### 6. 功能请求与路线图信号
*   **去中心化身份与互联：** 结合 [Issue #973](https://github.com/moltis-org/moltis/issues/973) 与 [PR #976](https://github.com/moltis-org/moltis/pull/976)（相关文档 PR），项目正在积极接纳基于 Ed25519 密钥对的无中心身份验证协议。这预示着 Moltis 可能很快会原生支持跨服务器的 Agent 通信。
*   **云端沙箱支持：** [PR #942](https://github.com/moltis-org/moltis/pull/942) 处于 OPEN 状态，提议支持 Vercel、Daytona 等远程沙箱后端，这将解决 Docker-in-Docker 在云部署中的限制，极大拓展部署场景。

### 7. 用户反馈摘要
*   **部署痛点：** 用户在 Proxmox/LXC 环境中部署遇到权限问题 (#977)，显示对于高级虚拟化环境的适配仍有优化空间。
*   **模型兼容性：** 用户强烈希望 Moltis 能完美适配 DeepSeek 等具备 "思维链" 的新模型，对 API 细节（如 `reasoning_content`）的处理非常敏感。
*   **文档维护：** 用户指出文档中 TTS 相关链接过时 (#958)，维护者迅速响应更新，体现了对开发者体验的重视。

### 8. 待处理积压
*   **重要 PR 待合并：** [PR #942](https://github.com/moltis-org/moltis/pull/942) (远程沙箱支持) 和 [PR #976](https://github.com/moltis-org/moltis/pull/976) (身份协议文档) 目前处于 Open 状态，建议维护者优先 Review 以推进云部署和多 Agent 互联功能的落地。
*   **新 Bug 待响应：** [Issue #977](https://github.com/moltis-org/moltis/issues/977) (LXC 环境沙箱失败) 为今日新发问题，目前尚无官方回复，可能影响部分自托管用户的正常使用。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-05-07)

## 1. 今日速览
CoPaw (QwenPaw) 项目今日保持**极高活跃度**，社区互动频繁。过去24小时内，项目发布了 **v1.1.5.post2** 补丁版本，主要修复了文档与消息处理逻辑；同时代码库已开始向 **v1.1.6b1** 版本演进。项目维护响应迅速，Issue 关闭率接近 50%（23/47），PR 合并/关闭率达 54%（18/33）。社区关注焦点集中在 **Windows 平台兼容性**、**长对话上下文处理**以及**技能管理自动化**等方面。整体来看，项目处于快速迭代期，稳定性修复与功能增强并行推进。

---

## 2. 版本发布
### v1.1.5.post2
- **更新内容**：
  - **文档更新**：将文档同步至 v1.1.5 版本 ([PR #4013](https://github.com/agentscope-ai/QwenPaw/pull/4013))。
  - **功能优化**：实现了通过 LLM 异步生成会话标题，提升用户体验流畅度 ([PR #3829](https://github.com/agentscope-ai/QwenPaw/pull/3829))。
  - **Bug修复**：修复了消息处理返回结果的截断问题。
- **注意事项**：此为补丁版本，建议所有 v1.1.5 用户升级以获得更稳定的消息处理体验。

---

## 3. 项目进展
今日项目在功能增强与稳定性修复方面均有显著进展，主要体现在：
- **技能管理增强**：合并了 CLI 技能安装/卸载功能 ([PR #4053](https://github.com/agentscope-ai/QwenPaw/pull/4053))，解决了技能管理自动化难题，方便 Bot 集成。
- **前端稳定性提升**：修复了 Console 端在处理畸形 Unicode 字符（如半截 emoji）时的 SSE 崩溃问题 ([PR #3553](https://github.com/agentscope-ai/QwenPaw/pull/3553))，显著改善了前端健壮性。
- **日志系统优化**：引入全平台通用的 `RotatingFileHandler` ([PR #4076](https://github.com/agentscope-ai/QwenPaw/pull/4076))，解决了 Windows/Linux 下日志文件无限增长的问题。
- **下一版本准备**：代码库已合并版本号升级至 v1.1.6b1 ([PR #4082](https://github.com/agentscope-ai/QwenPaw/pull/4082))，预示下一开发周期正式开启。

---

## 4. 社区热点
今日讨论最热烈的问题反映了用户对**安全**与**长上下文处理**的关切：
1.  **[安全] Windows 服务器任意文件遍历漏洞** ([Issue #3955](https://github.com/agentscope-ai/QwenPaw/issues/3955))
    - **热度**：17 条评论。
    - **分析**：该 Issue 报告了 v1.1.5 版本存在的严重安全漏洞。目前 Issue 已关闭，表明维护团队已迅速定位并修复了该隐患，建议用户尽快检查版本。
2.  **[体验] 长对话导致 AI 停止回复** ([Issue #4059](https://github.com/agentscope-ai/QwenPaw/issues/4059))
    - **热度**：7 条评论。
    - **分析**：用户反馈在处理长任务时，AI 容易中断。即使使用 `/compact` 也无效。这暴露了当前上下文管理策略在极端情况下的局限性，是后续优化的重点方向。
3.  **[功能] 技能池调用稳定性** ([Issue #2902](https://github.com/agentscope-ai/QwenPaw/issues/2902))
    - **热度**：3 条评论。
    - **分析**：用户指出技能调用存在随机性，呼吁增加“手动指定技能”选项，以提升生产环境的可控性。

---

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在文件系统、网络连接与前端交互，部分已有修复方案：
- **严重**:
    - 🛑 **Windows 文件遍历漏洞** ([Issue #3955](https://github.com/agentscope-ai/QwenPaw/issues/3955)) - **已关闭 (已修复)**。
    - 🛑 **技能安装后未注册** ([Issue #4043](https://github.com/agentscope-ai/QwenPaw/issues/4043)) - Windows 平台特有问题，影响核心功能，**待处理**。
- **中等**:
    - ⚠️ **网络重连失败** ([Issue #4017](https://github.com/agentscope-ai/QwenPaw/issues/4017)) - 开启 Heartbeat 时网络中断后无法自动恢复，**已关闭**。
    - ⚠️ **聊天文件链接过期** ([Issue #4047](https://github.com/agentscope-ai/QwenPaw/issues/4047)) - 附件链接 Token 一天后过期导致无法访问，**待处理**。
    - ⚠️ **Console 输入框卡顿** ([Issue #4023](https://github.com/agentscope-ai/QwenPaw/issues/4023)) - 前端性能问题，**已关闭**。
- **修复 PR 进展**:
    - PR #4064 优化了 Agent 重载时的任务排空机制，防止 DingTalk 回复中断。
    - PR #3553 修复了前端 SSE 序列化崩溃问题。

---

## 6. 功能请求与路线图信号
用户需求正推动项目向更易用、更集成的方向发展：
1.  **技能管理 CLI 化** ([PR #4053](https://github.com/agentscope-ai/QwenPaw/pull/4053) 合并):
    - 回应了 Issue #2384 的需求，预示着后续版本将更侧重于命令行工具的完善，方便自动化部署。
2.  **定时任务增强** ([Issue #4029](https://github.com/agentscope-ai/QwenPaw/issues/4029)):
    - 请求支持单次定时任务 (`--at` 参数)。结合今日 PR #4084 对 CronManager 的并发状态修复，定时任务模块正在积极重构中。
3.  **可视化监控** ([PR #4080](https://github.com/agentscope-ai/QwenPaw/pull/4080)):
    - 新增 Token 使用趋势图，显示项目正加强 Dashboard 可视化能力，满足用户对用量监控的需求。
4.  **自定义存储路径** ([Issue #4067](https://github.com/agentscope-ai/QwenPaw/issues/4067)):
    - 用户希望自定义 Workspace 存储位置，解决 Windows 下 C 盘空间占用问题，可能被纳入下一版本规划。

---

## 7. 用户反馈摘要
从 Issues 评论中提炼出的真实声音：
- **痛点**：
    - **Windows 体验待优化**：启动慢、路径硬编码、技能注册失败是 Windows 用户的集中吐槽点 ([Issue #4043](https://github.com/agentscope-ai/QwenPaw/issues/4043))。
    - **长文处理能力**：用户期待 Agent 能更稳健地处理长对话，而不是“处理一半就停了” ([Issue #4059](https://github.com/agentscope-ai/QwenPaw/issues/4059))。
    - **文件持久性**：聊天记录里的文件“过期”让用户感到困惑和不便 ([Issue #4047](https://github.com/agentscope-ai/QwenPaw/issues/4047))。
- **满意点**：
    - 社区对**日志轮转修复** ([PR #4076](https://github.com/agentscope-ai/QwenPaw/pull/4076)) 反响积极，解决了长期运行的磁盘占用问题。
    - **DeepSeek 模型适配**受到关注，用户主动提出优化前缀缓存命中的建议 ([Issue #3891](https://github.com/agentscope-ai/QwenPaw/issues/3891))，显示了对模型成本控制的精细需求。

---

## 8. 待处理积压
以下重要 Issue 或 PR 尚未得到有效解决或合并，建议维护者关注：
- **PR #3916** (Backup restore secrets): 修复 Docker 卷挂载点的备份还原问题，涉及关键数据安全，目前处于 Open 状态。
- **Issue #4059** (Long conversation failure): 影响核心对话体验，目前仅确认问题，尚未有明确的修复 PR。
- **Issue #4079** (Skill sync): 关于多环境 Skill 同步机制的不明确，缺少官方文档或架构说明。
- **Issue #4047** (File link expiration): 文件链接过期问题影响历史记录回溯，需重新设计 Token 有效期策略或前端降级提示。

---

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目日报 (2026-05-07)

**分析师观点：** EasyClaw 今日处于**低互动、高交付**状态。社区层面虽显得静默，但核心团队通过发布 v1.8.11 版本实现了重要里程碑，标志着项目正从单纯的工具向商业化与自动化平台演进。建议关注新版本发布后的社区反馈与潜在 Bug 报告。

---

### 1. 今日速览
过去24小时内，EasyClaw 项目在社区互动层面表现平静，无新增 Issues 或 Pull Requests 更新。然而，项目核心开发活动并未停滞，团队于今日发布了 **v1.8.11 (RivonClaw)** 版本。此次更新并未伴随常规的代码合并动态，推测可能为累积性更新或基于内部分支直接发布。整体来看，项目正致力于扩展电商自动化与桌面端体验，处于功能拓展期，社区活跃度有待新版本发布后的反馈激活。

### 2. 版本发布
**[v1.8.11: RivonClaw v1.8.11](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.11)**

本次更新带来三项关键性改进，预示着项目定位的微调与用户体验的优化：

*   **商业化与自动化基建：**
    新增了 Affiliate inbound（联盟入站）和 Ecommerce relay foundations（电商中继基础）功能。这是一个重要的战略信号，表明 EasyClaw 正在构建支持创作者协作与电商自动化的底层能力，未来可能支持更复杂的商业变现工作流。
*   **桌面端体验优化：**
    将本地 CLI 启动支持打包进 Windows 安装程序，并改进了启动/运行时依赖项的暂存机制。此举显著降低了 Windows 用户的安装门槛，解决了以往桌面端设置繁琐的痛点，提升了开箱即用的能力。
*   **交互改进：**
    改进了 Chat（聊天）模块，官方日志虽未详细说明细节，但推测旨在提升 AI 交互的流畅度或准确性。

**迁移建议：** 官方未注明破坏性变更，预计可平滑升级。建议 Windows 用户优先更新以体验优化后的安装流程。

### 3. 项目进展
*   **代码合并：** 过去24小时内无 PR 合并或关闭记录。
*   **进展分析：** 尽管无可见的 PR 活动，v1.8.11 的发布表明项目在“商业自动化”与“桌面端易用性”两个维度上取得了实质性突破。特别是电商中继基础的引入，为项目后续接入实际业务流铺平了道路。

### 4. 社区热点
*   **讨论动态：** 今日无活跃的 Issues 或 PRs 讨论。
*   **分析：** 社区处于观望期，鉴于 v1.8.11 引入了新的功能模块，预计未来 1-2 天内将出现关于新电商功能的讨论或反馈。

### 5. Bug 与稳定性
*   **今日报告：** 无新报告。
*   **状态评估：** 当前无明显阻断性问题。鉴于新版本修改了依赖项暂存机制，需密切留意 Windows 端可能存在的兼容性回声。

### 6. 功能请求与路线图信号
*   **显性请求：** 今日无用户提出的新功能请求。
*   **隐性信号：** 从 v1.8.11 更新日志可见，项目路线图已明确指向 **“Creator collaboration”（创作者协作）** 与 **“Ecommerce automation”（电商自动化）**。这表明项目方正在主动构建相关能力，而非被动等待用户需求，具有较强前瞻性。

### 7. 用户反馈摘要
*   由于今日 Issues 更新为 0，暂无最新的用户反馈摘要。建议关注版本发布后 48 小时内的 Issue 动向，特别是针对 Windows 安装体验的反馈。

### 8. 待处理积压
*   **状态：** 根据现有数据，无近期活跃但长期未响应的 Issue 或 PR。
*   **建议：** 虽然当前积压压力较小，但建议维护者在新版本发布后主动巡视社区，及时响应即将到来的关于电商新功能的咨询与反馈。

---
*数据来源：EasyClaw GitHub Repository*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*