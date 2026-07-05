# OpenClaw 生态日报 2026-07-05

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-07-05 03:40 UTC

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

# OpenClaw 项目动态日报 (2026-07-05)

## 1. 今日速览
OpenClaw 今日活跃度极高，Issue 与 PR 更新量均达到 500 条，显示出社区与开发团队的高强度互动。项目当前处于功能密集迭代与稳定性修复并行阶段，虽然没有新版本发布，但移动端终端支持、文档重构等核心 PR 已取得显著进展。不过，积压的待合并 PR 数量高达 335 条，且仍有多个 P0/P1 级别的会话状态丢失与会话“变砖”问题亟待解决，项目维护压力较大。

## 2. 版本发布
**无**。今日无新版本发布。

## 3. 项目进展
今日有多个重要 PR 关闭/合并，主要集中在移动端功能补齐与关键 Bug 修复，显著提升了用户体验的完整性：

*   **移动端终端功能落地**：
    *   PR [#100152](https://github.com/openclaw/openclaw/pull/100152) (Closed) 与 PR [#100150](https://github.com/openclaw/openclaw/pull/100150) (Closed) 分别引入了 Android 与 iOS 的全屏 Web 终端视图，解决了移动端运维无法直接通过手机访问 Gateway 终端的痛点。
*   **关键稳定性修复**：
    *   PR [#100163](https://github.com/openclaw/openclaw/pull/100163) (Closed) 修复了 UI 活动错误徽章的对齐问题，优化了错误展示体验。
    *   PR [#100090](https://github.com/openclaw/openclaw/pull/100090) (Closed) 修复了 Android 端网关设置按钮的显示裁剪问题。
*   **重要待合并 PR (进展中)**：
    *   PR [#100142](https://github.com/openclaw/openclaw/pull/100142) (Open) 正在对齐文档与源码现状，这是一个 XL 级别的大型重构，旨在解决文档滞后导致的用户困惑。
    *   PR [#85651](https://github.com/openclaw/openclaw/pull/85651) (Open) 正在引入“上下文压力感知”的会话延续机制，这对长时运行 Agent 的稳定性至关重要。

## 4. 社区热点
今日社区讨论焦点集中在会话可靠性、计费异常及架构改进上：

*   **[P1] Subagent 结果静默丢失问题** ([#44925](https://github.com/openclaw/openclaw/issues/44925))
    *   **热度**：20 条评论，标记为 `impact:session-state, impact:message-loss`。
    *   **诉求**：用户报告子代理任务编排存在多种失败模式，结果在无重试、无通知的情况下丢失。这是当前反馈最强烈的问题，直接影响自动化链路的可信度。
*   **[P0] 云实例余额显示异常** ([#99594](https://github.com/openclaw/openclaw/issues/99594))
    *   **热度**：8 条评论，标记为 `P0, impact:ux-release-blocker`。
    *   **诉求**：用户账户显示有 $109 余额，但系统提示“积分不足”，严重影响云版用户的正常使用与信任。
*   **[Bug] 硬编码路径引发的权限问题** ([#51429](https://github.com/openclaw/openclaw/issues/51429))
    *   **热度**：12 条评论。
    *   **诉求**：代码中疑似硬编码了开发者路径 `/Users/wangtao`，导致其他用户安装后工作区设置错误。社区对此类低级失误表达了不满。

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，部分严重影响使用：

| 严重等级 | Issue | 描述 | 状态/Fix PR |
| :--- | :--- | :--- | :--- |
| **P0 (紧急)** | [#99594](https://github.com/openclaw/openclaw/issues/99594) | Cloud 实例余额充足却提示耗尽，阻断用户使用。 | [OPEN] 待修复 |
| **P1 (严重)** | [#94228](https://github.com/openclaw/openclaw/issues/94228) | Native Anthropic 路径在重放 `thinking` 块时报错 `400 Invalid signature`，导致会话永久“变砖”。 | [OPEN] Fix PR: [#100149](https://github.com/openclaw/openclaw/pull/100149) 已提交 |
| **P1 (严重)** | [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal Daemon 在重启时存在竞态条件，导致孤儿进程与发送失败。 | [OPEN] 无 Fix PR |
| **P1 (严重)** | [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer 模式未在主会话中实时注入消息，违背了 Steer 模式的设计初衷。 | [OPEN] 无 Fix PR |
| **P1 (严重)** | [#54155](https://github.com/openclaw/openclaw/issues/54155) | Gateway 内存泄漏，4 天内从 389MB 暴涨至 14.7GB。 | [OPEN] 无 Fix PR |
| **Security** | [#45740](https://github.com/openclaw/openclaw/issues/45740) | `gh-issues` skill 直接注入未清洗的 Issue body，存在 Prompt 注入风险。 | [OPEN] 无 Fix PR |

## 6. 功能请求与路线图信号
社区提出了若干架构级改进建议，部分已有对应 PR 或正在评估：

*   **多编码文件名处理** ([#48788](https://github.com/openclaw/openclaw/issues/48788))：建议引入中心化的文件名编码工具类，解决 Feishu 等渠道中文乱码问题。
*   **分层 Bootstrap 加载** ([#22438](https://github.com/openclaw/openclaw/issues/22438))：建议支持分层加载引导文件，以减少大型工作区的 Token 浪费，这对企业级用户非常关键。
*   **Pre-response 强制钩子** ([#13583](https://github.com/openclaw/openclaw/issues/13583))：请求在 Agent 回复前强制执行特定工具调用（硬性规则），适用于金融/安全场景。目前仍挂起，等待 Maintainer 审核。
*   **移动端终端** ([#100152](https://github.com/openclaw/openclaw/pull/100152))：已实现，表明项目正在大力补齐移动端运维体验。

## 7. 用户反馈摘要
*   **痛点：会话稳定性**：多位用户反馈长时间运行或复杂工具链调用后，会话状态异常（卡死、变砖、消息丢失）是最大的痛点，特别是 `Anthropic` 原生接口的兼容性问题。
*   **痛点：配置复杂度与路径错误**：Issue #51429 反映的低级路径硬编码错误，暴露了测试覆盖率不足的问题，让部分用户对新版本的发布质量感到担忧。
*   **正面反馈**：对于移动端终端功能的补齐，社区反馈积极，认为这将极大提升运维便捷性。

## 8. 待处理积压
以下重要 Issue 长期未获解决或响应，建议维护者优先关注：

*   **[#44925] Subagent completion silently lost**：3 月提出，至今未解，严重影响多 Agent 架构的可靠性。
*   **[#32473] Control UI requires secure context**：3 月提出的回归问题，涉及 HTTPS 部署限制，仍处于 Closed 状态但用户反馈未解决。
*   **[#13583] Pre-response enforcement hooks**：2 月提出的 Feature Request，标记为 `needs-product-decision`，长期未推进，安全敏感型用户在等待此功能。
*   **PR 积压**：目前有 **335 个 PR 待合并**，其中包含大量 `P1` 和 `P2` 级别的修复，建议项目组优化 Review 流程以加快迭代速度。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比分析报告 (2026-07-05)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从功能堆砌向稳定性与自主性架构攻坚的关键转型期**。头部项目如 OpenClaw、Zeroclaw 活跃度爆表，显示出社区对移动端支持和自主规划能力的强烈需求，但同时也暴露了会话状态管理和并发安全等深水区问题；腰部项目（如 NanoBot、NanoClaw）则专注于修复底层架构缺陷与安全隐患，标志着生态正逐步走向成熟。整体来看，**会话记忆的可靠性**与**多模型/多平台的兼容性**已成为各项目共同面临的"阿喀琉斯之踵"。

## 2. 各项目活跃度对比

| 项目名称 | Issues 动态 | PRs 动态 | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 更新 500+ (极高) | 更新 500+ (极高) | 无 | ⚠️ **高风险**：核心功能迭代快，但 P0/P1 级 Bug 积压严重，PR 积压达 335 条，维护压力巨大。 |
| **Zeroclaw** | 更新 50+ | 更新 50+ | 无 (冲刺 v0.8.3) | 🚀 **高活跃**：处于功能密集迭代期，核心架构向 Goal Mode 演进，Issue 关闭效率高，但需关注崩溃类 Bug。 |
| **Hermes Agent** | 更新 50 | 更新 50 | 无 | 📈 **上升期**：平台集成需求旺盛，正经历认证体系重构，但存在严重的运行时兼容性隐患 (Python 3.14)。 |
| **IronClaw** | 更新 9 | 更新 40 (合并 18) | 无 (准备发布) | 🛡️ **稳健**：侧重于 CI/CD 建设与架构治理，代码质量管控严格，正处于大版本发布前的静默期。 |
| **NanoBot** | 关闭 2 | 更新 13 (合并 7) | 无 | ✅ **良好**：小步快跑，专注于修复高危漏洞与并发问题，响应迅速，处于"修内功"阶段。 |
| **NanoClaw** | 新增安全 Issue | 更新 39 (合并 22) | 无 | 🔧 **重构期**：大规模清理 v1 遗留代码，代码库现代化程度高，但也引入了前端安全新问题。 |
| **CoPaw** | 更新 10 (新开 8) | 更新 3 | 无 | ⚡ **阵痛期**：2.0 版本核心记忆机制遭遇严重稳定性挑战，社区反馈负面较多，急需修复 PR 合并。 |
| **PicoClaw** | 新增 3 / 关闭 1 | 合并 2 / 待定 5 | 无 | 🐢 **平稳**：中低活跃度，主要解决多智能体配置与移动端兼容问题。 |
| **LobsterAI** | 1 活跃 | 关闭 2 | 无 | 💤 **低活跃**：仅处理少量底层重构，处于维护模式。 |

## 3. OpenClaw 在生态中的定位

*   **生态定位**：**全能型移动运维助手标杆**。OpenClaw 凭借今日落地的移动端全屏 Web 终端功能，在移动端运维场景建立了差异化优势，试图打造覆盖桌面与移动端的完整闭环。
*   **优势**：社区关注度极高（日更 500+），功能迭代速度快，对移动端痛点的响应及时，生态讨论热度远超同类项目。
*   **劣势与风险**：**稳定性是其最大短板**。对比 NanoBot 或 IronClaw，OpenClaw 的 P0/P1 级别问题（如 Subagent 结果丢失、会话变砖、计费异常）数量显著且解决进度缓慢。高达 335 条的 PR 积压暗示了 Code Review 流程的瓶颈，这可能进一步加剧质量失控。
*   **对比结论**：相比 Zeroclaw 正在攻克的"自主规划"（Goal Mode），OpenClaw 目前仍停留在"工具调用"层面的优化，且其工程质量与 Zeroclaw 或 IronClaw 存在差距，处于"重功能、轻质量"的粗放增长阶段。

## 4. 共同关注的技术方向

1.  **会话与记忆的持久化难题**：
    *   涉及项目：**OpenClaw, CoPaw, PicoClaw, NanoClaw**。
    *   具体诉求：OpenClaw 的 Subagent 结果丢失、CoPaw 的 Auto-memory 失效与 Scroll 压缩导致失忆、NanoClaw 的消息重复投递。这表明**长上下文的状态管理**仍是行业最大痛点，单纯依赖模型上下文窗口已无法满足复杂任务需求，外部记忆存储与检索机制亟待成熟。

2.  **MCP 协议与工具调用的稳定性**：
    *   涉及项目：**NanoBot, Zeroclaw, OpenClaw**。
    *   具体诉求：NanoBot 修复了 MCP 工具导致的崩溃，Zeroclaw 修复了 TUI 会话中工具丢失。MCP 作为智能体工具链标准，其健壮性直接决定了 Agent 的执行力。

3.  **安全性与权限控制**：
    *   涉及项目：**IronClaw, Hermes, Zeroclaw, NanoBot, NanoClaw**。
    *   具体诉求：IronClaw 的 OAuth 重构、Zeroclaw 的 SSRF 修复、Hermes 的符号链接漏洞、NanoClaw 的 UI 欺骗漏洞。随着 Agent 权限扩大（文件读写、终端控制），**最小权限原则**和**沙箱隔离**成为刚需。

4.  **移动端与多端体验补齐**：
    *   涉及项目：**OpenClaw, Hermes, PicoClaw**。
    *   具体诉求：OpenClaw 完成了移动端终端，Hermes 和 PicoClaw 仍在解决移动端适配、后台保活及桌面端工作区切换问题。

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **移动运维**、全终端覆盖 | 运维人员、极客用户 | 功能模块多但耦合较重，目前深受状态管理 Bug 困扰。 |
| **Zeroclaw** | **自主规划** (Goal Mode)、多渠道适配 | 高级开发者、企业用户 | 正在构建"目标驱动"的闭环架构，强调 Agent 自主性。 |
| **Hermes Agent** | **平台集成** (IM/桌面)、跨生态连接 | 社区运营者、办公用户 | 侧重 Connector 扩展，致力于成为 AI 时代的 Hub，但桌面端体验尚需打磨。 |
| **NanoBot** | **企业级鲁棒性**、安全性 | 生产环境部署者 | 代码质量高，专注于并发安全与错误处理，不追求激进功能。 |
| **IronClaw** | **工程化标准**、测试覆盖率 | 核心贡献者、专业团队 | 强 CI/CD 管控，推行严格的架构治理，是生态中的"工程标杆"。 |
| **CoPaw** | **模型生态深度适配** (Qwen系) | 模型微调开发者 | 深度绑定 Qwen 模型特性，专注记忆与压缩算法优化。 |

## 6. 社区热度与成熟度

*   **快速迭代期（高活跃/高风险）**：**OpenClaw** 与 **Zeroclaw**。社区反馈极其活跃，新功能（如移动端终端、Goal Mode）推出快，但伴随着高 P0 Bug 率，属于激进增长型。
*   **质量巩固期（中活跃/高健康）**：**IronClaw**、**NanoBot** 与 **NanoClaw**。重点在于修 Bug、清债务、完善 CI/CD。这类项目虽然热度不及前者，但代码可靠性强，适合作为生产基座。
*   **功能探索期**：**Hermes Agent**。处于扩张平台支持的阶段，面临兼容性与运行时稳定性挑战。
*   **维护/起步期**：**LobsterAI**, **TinyClaw**, **Moltis**, **EasyClaw** 等。活跃度低，处于维持或孵化阶段。

## 7. 值得关注的趋势信号

1.  **智能体架构从"对话"向"自主目标"演进**：
    Zeroclaw 的 Goal Mode 架构落地、NanoClaw 的 Phase-1 安全报告，预示着开源智能体正在摆脱单一的"Chat + Tool"模式，向具备**自主目标拆解、执行、审计能力**的闭环系统进化。这对于开发者意味着，单纯拼接 Prompt 的时代已过，构建可靠的决策循环架构将成为核心壁垒。

2.  **上下文管理成为"隐形杀手"**：
    CoPaw 的 Scroll 压缩灾难、OpenClaw 的会话变砖、NanoClaw 的路由混乱，集中暴露了当前长任务处理的短板。社区反馈表明，简单的滑动窗口压缩已失效，**基于 RAG 的分层记忆** 或 **上下文压缩算法** 的稳定性将成为下一代个人助手的决定性指标。

3.  **Python 3.14 兼容性警报**：
    Hermes Agent 报告的 Python 3.14 兼容性崩溃问题是一个重要信号。随着 Python 新版本发布，异步与线程池相关 API 变更可能在大范围内影响依赖重度并发的 AI 智能体项目，建议各项目提前开展兼容性测试。

4.  **安全边界的前置化**：
    NanoClaw 的 UI 欺骗、Hermes 的权限绕过、Zeroclaw 的 SSRF，说明随着 Agent 拥有终端控制权和文件读写权，安全漏洞的破坏力指数级上升。**UI 完整性校验** 和 **严格的权限沙箱** 将成为未来版本发布的必选项。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-07-05)

## 1. 今日速览
NanoBot 项目今日保持高度活跃，重心显著向系统稳定性与安全性倾斜。过去24小时内项目完成了高效的迭代，共计处理 PR 更新 13 条，其中 7 条已合并或关闭，同时关闭了 2 个关键 Issue。尽管无新版本发布，但多项涉及 P0/P1 级别的安全与稳定性修复已合入主分支，特别是针对 MCP 工具调用崩溃和并发 Token 刷新问题的修复，显著提升了生产环境的鲁棒性。整体而言，项目正处于“修内功”的关键阶段，健康度良好。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日共有 **6 个关键 PR** 成功合入，主要集中在修复高危 Bug、提升并发安全性和改善跨平台体验：

*   **核心崩溃修复**：PR [#4666](https://github.com/HKUDS/nanobot/pull/4666) 已合并，成功修复了 MCP 工具结果异常导致的进程崩溃问题（对应 Issue #4652），通过结构化错误处理增强了系统的容错能力。
*   **并发安全性增强**：PR [#4684](https://github.com/HKUDS/nanobot/pull/4684) 已合并，引入 `asyncio.Lock` 解决了 GitHub Copilot Token 在高并发请求下的竞态条件，修复了可能导致 Token 混乱的隐患。
*   **数据持久化修复**：PR [#4653](https://github.com/HKUDS/nanobot/pull/4653) 已合并，恢复了 `pairing` 模块的原子写入特性，确保数据在崩溃场景下的完整性。
*   **跨平台与通道修复**：PR [#4690](https://github.com/HKUDS/nanobot/pull/4690) 修复了 Windows 平台 Gateway 停止时的崩溃问题；PR [#4646](https://github.com/HKUDS/nanobot/pull/4646) 优化了钉钉通道的关闭逻辑，防止流任务残留。

此外，PR [#4692](https://github.com/HKUDS/nanobot/pull/4692) 规范了配置文件的序列化格式，提升了配置管理的规范性。

## 4. 社区热点
今日社区关注点集中在系统容错与稳定性：

*   **[Issue #4652](https://github.com/HKUDS/nanobot/issues/4652)**：该 Issue 报告了 MCP 工具调用异常导致进程直接崩溃的严重问题，引发了 3 条讨论。用户期望系统能自动纠正参数或提供反馈而非崩溃。该问题已通过 PR #4666 迅速修复并关闭，体现了维护团队对致命 Bug 的高响应速度。
*   **[Issue #4677](https://github.com/HKUDS/nanobot/issues/4677)**：由 Bot 自动提交的报告，指出了 GitHub Copilot Token 刷新在并发场景下的竞态风险。该问题已通过 PR #4684 解决，显示出项目具备较好的自动化问题发现与闭环机制。

## 5. Bug 与稳定性
今日修复了多个严重级别的 Bug，遗留待处理 Bug 较少：

*   **[P0/严重] SSRF 安全漏洞修复 (待合并)**：PR [#4671](https://github.com/HKUDS/nanobot/pull/4671) 提出了针对 SSRF 检查的 DNS 固定方案，旨在解决 URL 验证过程中的安全风险。目前该 PR 处于 Open 状态，建议优先 Review 合并。
*   **[P1/严重] MCP 工具异常导致崩溃 (已修复)**：Issue [#4652](https://github.com/HKUDS/nanobot/issues/4652) 已通过 PR [#4666](https://github.com/HKUDS/nanobot/pull/4666) 解决。
*   **[P1/严重] Copilot 并发竞态 (已修复)**：Issue [#4677](https://github.com/HKUDS/nanobot/issues/4677) 已通过 PR [#4684](https://github.com/HKUDS/nanobot/pull/4684) 解决。
*   **[P2/一般] Windows Gateway 停止异常 (已修复)**：PR [#4690](https://github.com/HKUDS/nanobot/pull/4690) 修复了 Windows 下的 `OSError` 问题。

## 6. 功能请求与路线图信号
从待合并的 PR 中可见项目未来的演进方向：

*   **子智能体架构增强**：PR [#4697](https://github.com/HKUDS/nanobot/pull/4697) 提出允许子智能体继承主智能体的 MCP 服务器配置。这表明项目正致力于解决复杂任务编排中的上下文传递痛点，可能成为下一阶段 Agent 编排能力的核心特性。
*   **WebUI 体验优化**：PR [#4696](https://github.com/HKUDS/nanobot/pull/4696) 提出了平滑的流式 Markdown 渲染方案，PR [#4694](https://github.com/HKUDS/nanobot/pull/4694) 修复了移动端视口适配问题。这反映出项目正加大对终端用户交互体验的投入。
*   **平台集成扩展**：PR [#4459](https://github.com/HKUDS/nanobot/pull/4459) 正在推进 Mattermost 通道的支持，有望近期合入。

## 7. 用户反馈摘要
根据 Issue 评论分析：
*   **痛点**：用户对“进程直接崩溃”容忍度极低，特别是在 MCP 工具调用场景下，更倾向于获得结构化的错误反馈以便重试或调试（来源：Issue #4652）。
*   **场景**：用户正在尝试在多线程或高并发环境下使用 NanoBot（如 Issue #4677 所示），这对底层的连接管理和 Token 刷新机制提出了更高的线程安全要求。

## 8. 待处理积压
*   **PR [#4459](https://github.com/HKUDS/nanobot/pull/4459) (Mattermost 支持)**：该 PR 创建于 6 月 22 日，至今已逾两周且仍处于 Open 状态。作为一个较大的功能特性，建议维护者关注其合并进度，避免长期积压导致代码冲突。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-07-05)

## 1. 今日速览
Zeroclaw 项目今日保持极高的开发活跃度，Issue 和 PR 更新量均达到 50 条。项目正处于 **v0.8.3 版本功能冲刺阶段**，核心焦点集中在 **Goal Mode（目标模式）架构的落地**与**多渠道适配器的稳定性修复**。虽然今日无新版本发布，但已有 11 个关键 Issue 被关闭，显示出维护团队正在高效清理积压问题。值得注意的是，PR 积压量较大（49 个待合并），暗示正在进行大规模的代码重构或功能合并前的最后审查。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
尽管今日合并的 PR 较少，但通过活跃的 Issue 关闭记录和 PR 动态，可以看出项目正在以下领域稳步推进：

*   **关键 Bug 修复落地**：
    *   修复了 MCP tools 在 TUI 会话中丢失的严重问题 ([#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193))。
    *   解决了 MiniMax 等兼容提供商因 `context_compression` 导致的工具循环和角色错误问题 ([#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361))。
    *   修复了 Scheduled Jobs 编辑接口报错 422 的问题 ([#6891](https://github.com/zeroclaw-labs/zeroclaw/issues/6891))。
*   **Goal Mode 架构实施**：
    *   一系列关于 Goal Mode 的重大 PR 正在活跃审查中，包括 `goal controller`、`trusted goal tools` 和 `goal command admission` ([#8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687), [#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688), [#8689](https://github.com/zeroclaw-labs/zeroclaw/pull/8689))。这表明项目正在为智能体增加更复杂的自主目标规划与执行能力。
*   **安全与合规增强**：
    *   新增 PR 修复了 Text Browser 的 SSRF 漏洞 ([#8635](https://github.com/zeroclaw-labs/zeroclaw/pull/8635))。
    *   增加了 `/model --agent` 的权限校验以防止越权操作 ([#8690](https://github.com/zeroclaw-labs/zeroclaw/pull/8690))。

## 4. 社区热点
今日社区讨论主要集中在核心功能的稳定性与架构治理上：

1.  **[Issue #8193] MCP Tools 丢失问题 (已解决)**
    *   **热度**：15 条评论
    *   **分析**：多个用户反馈 TUI 会话中无法发现 MCP 工具，严重阻塞工作流。该问题的迅速关闭表明维护者对 P1 级别阻塞问题响应迅速。
2.  **[Issue #6808] RFC: 工作流泳道与标签自动化**
    *   **热度**：13 条评论
    *   **分析**：这是一项治理层面的 RFC，旨在通过自动化标签管理来减轻维护负担。持续的高关注度显示社区对项目维护流程优化的重视。
3.  **[Issue #8681] Goal Mode 实现拆分追踪**
    *   **热度**：7 条评论
    *   **分析**：作为下一个大版本的核心功能，Goal Mode 的实现细节受到核心贡献者的密切关注，该 Issue 协调了大规模 PR 的分批入库。

## 5. Bug 与稳定性
今日报告了多个高风险 Bug，尤其是涉及运行时崩溃和安全绕过的问题：

*   **P1 - 运行时崩溃**：
    *   [Issue #8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654): `skill-review` fork 导致 Daemon 进程 SIGSEGV (Segmentation Fault)。在工具密集型任务结束后触发，风险极高。
    *   [Issue #8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678): SOP (Standard Operating Procedure) 引擎存在逻辑漏洞，允许驱动程序绕过审批门，存在安全合规风险。
*   **P1 - 工具调用失效**：
    *   [Issue #8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675): 向 OpenRouter/OpenAI 发送格式错误的工具调用参数导致 400 错误，模型返回空回复。
*   **P2 - 数据一致性**：
    *   [Issue #8695](https://github.com/zeroclaw-labs/zeroclaw/issues/8695): Cron Jobs 配置了 `uses_memory = false` 仍然会召回记忆，影响定时任务的无状态执行。
    *   [Issue #8359](https://github.com/zeroclaw-labs/zeroclaw/issues/8359): 配置变更后 Memory Embeddings 未刷新，导致提供商配置与实际行为不一致。

## 6. 功能请求与路线图信号
结合 Issue 和活跃 PR，可以清晰看到 v0.8.3+ 的路线图信号：

*   **Goal Mode 自主代理**：大量的 PR ([#8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687), [#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688)) 表明项目正在从单纯的对话式 AI 向具备自主目标管理能力的 Agent 演进。
*   **多渠道支持增强**：
    *   [PR #8710](https://github.com/zeroclaw-labs/zeroclaw/pull/8710): 新增 OpenAI Bridge Channel，允许 Zeroclaw 暴露兼容 OpenAI 协议的接口，集成度进一步提升。
    *   [PR #8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561): Telegram 渠道支持多消息流式传输。
*   **插件系统演进**：[Issue #7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) 提议使用 OCI 标准容器仓库作为插件存储机制，预示着未来的插件分发将更加标准化和去中心化。

## 7. 用户反馈摘要
*   **痛点：内容误删**：[Issue #8615](https://github.com/zeroclaw-labs/zeroclaw/issues/8615) 反映兼容提供商无条件剥离 `<think>` 标签，导致用户隐形丢失数据，引起用户不满。
*   **痛点：误报拦截**：[Issue #8722](https://github.com/zeroclaw-labs/zeroclaw/issues/8722) 和 [Issue #4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832) 均指出 LeakDetector（泄露检测器）对高熵字符串的检测过于激进，误将生成的文件名标记为敏感信息，干扰正常使用。
*   **文档需求**：[Issue #8587](https://github.com/zeroclaw-labs/zeroclaw/issues/8587) 用户反馈 SOP 引擎虽然强大，但缺乏详细的语法示例，希望能增加更多场景化的配置案例。

## 8. 待处理积压
*   **长期未解决的安全配置问题**：[Issue #4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832)（创建于 2026-03-27）关于 `LeakDetector` 误报的问题至今未完全解决，且持续有用户反馈影响使用，建议维护者优先关注。
*   **架构级 RFC 等待**：[Issue #7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) 关于 OCI 插件仓库的 RFC 状态为 "Blocked"，需明确阻塞原因或后续计划。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-07-05)

## 1. 今日速览
Hermes Agent 项目今日保持高活跃度，社区互动频繁，过去24小时内共有 50 条 Issue 更新和 50 条 PR 更新，但无新版本发布。项目重心目前明显向**稳定性修复**与**平台生态扩展**倾斜，出现了大量关于认证鉴权、会话状态管理及并发处理的修复 PR。社区对**桌面端体验**（如工作区切换、托盘最小化）及**新通信平台支持**（Rocket.Chat, WhatsApp优化）表现出强烈需求。值得注意的是，发现了 Python 3.14 的兼容性崩溃问题，需开发团队优先关注。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
尽管没有发布新版本，但代码库合并活动聚焦于提升系统健壮性和安全性：

*   **平台集成增强**：PR #4844 已关闭/合并，为 Discord Gateway 引入了频道级工具限制和名称触发功能，增强了机器人在多频道场景下的控制力。
*   **安全性修复**：PR #58628 修复了符号链接绕过敏感路径自动批准的安全漏洞，PR #58631 修复了终端工具绕过受保护文件写入的问题，显著提升了 Agent 在自动化操作中的安全性边界。
*   **核心稳定性**：PR #58636 修复了日志处理程序导致 Gateway 异步冻结的问题，解决了服务假死的重大隐患。
*   **桌面端改进**：Issue #47268 和 #58617 的关闭表明团队正在积极处理桌面端与会话上下文相关的 Bug。

项目整体处于**功能迭代后的沉淀期**，重点在于修复边缘案例 Bug 和巩固安全边界，为下一次版本发布做准备。

## 4. 社区热点
今日讨论最热烈的话题集中在平台扩展与桌面端用户体验：

*   **[Issue #3725] Rocket.Chat 支持** (👍 12, 💬 13)：社区用户强烈希望能将 Hermes 接入 Rocket.Chat，这反映了企业级用户对私有化部署聊天平台的接入需求日益增长。
*   **[Issue #42864] scope-recall 独立记忆提供者 RFC** (💬 6)：开发者 @410979729 提交了一个关于可审计、作用域记忆的插件方案，引发了关于 Hermes 记忆架构扩展性的深度技术讨论。
*   **[Issue #40297] Desktop 工作区动态切换** (👍 9, 💬 5)：用户指出当前桌面端仅支持启动时指定工作目录，无法在长生命周期会话中切换项目，限制了多项目并行工作的效率。该问题获得了较高的赞同数，是桌面端的核心痛点。

## 5. Bug 与稳定性
今日报告的 Bug 涉及底层运行时兼容性及核心 Agent 逻辑，部分已有修复方案：

*   **P0/P1 - 严重兼容性问题**：
    *   **[Issue #58596] Python 3.14 崩溃**：`DaemonThreadPoolExecutor` 在 Python 3.14 中因属性移除导致所有并发功能失效。此问题将导致新版 Python 环境完全不可用。
*   **P2 - 核心功能异常**：
    *   **[Issue #40960] 凭据池耗尽误报**：当凭证池耗尽时返回 401 而非 429，导致重试逻辑失效。已有相关修复 PR #58525 提出按模型隔离用量限制。
    *   **[Issue #56004] Qwen/vLLM 思维链丢失**：多轮对话中历史推理内容被剥离，导致模型上下文丢失。
    *   **[Issue #58630] 压缩状态脏写**：压缩中止时可能复用陈旧的 in-place 状态。PR #58629 已提交修复方案。
*   **P3 - 体验问题**：
    *   **[Issue #57275] 上下文溢出崩溃**：Agent 无法有效自动压缩上下文，导致超出模型限制后停止响应。

## 6. 功能请求与路线图信号
根据活跃的 Issue 和 PR，项目路线图呈现以下趋势：

*   **平台多元化**：除了热议的 Rocket.Chat (#3725)，PR #17469 (XMPP) 和 Issue #58603 (Groq/Cerebras 提供商) 显示项目正致力于打破平台孤岛，向通用 AI Hub 演进。
*   **记忆系统增强**：Issue #42864 和 PR #58625 (修复内存提供者工具路由) 表明，构建可插拔、持久化的记忆系统是下一阶段的重点方向。
*   **用户体验打磨**：Issue #58041 提出的 WhatsApp 一键配置向导和 Issue #58621 的最小化托盘需求，显示出用户对 "开箱即用" 和 "后台静默运行" 的强烈期待。

## 7. 用户反馈摘要
从 Issues 评论中提炼出的关键用户声音：

*   **配置门槛高**：用户反馈 WhatsApp 的配置流程相比 Telegram 过于繁琐，急需向导式工具 (#58041)。
*   **Agent "健忘" 与 "臃肿" 并存**：用户在 #57275 中抱怨 Agent 经常超出上下文限制崩溃，且自动压缩机制不够智能；同时 #42864 讨论了更精细的记忆召回需求。
*   **模型切换行为不一致**：用户 #27103 指出切换模型后 Agent 行为剧烈变化，且存在创建冗余 Skills 的问题，期待 Agent 具备跨模型的一致性行为。

## 8. 待处理积压
以下重要 Issue/PR 长期活跃但尚未解决，建议维护者优先关注：

*   **[PR #17469] XMPP/Jabber 平台插件**：该 PR 创建于 2026-04-29，至今已逾两月，仍在 OPEN 状态。虽然集成复杂度较高，但社区对此有明确需求，建议维护者进行 Review 或推进合并。
*   **[Issue #40297] 桌面端工作区选择**：高赞 Issue (👍 9)，创建于 6 月初，目前仍在讨论中，尚无明确的修复 PR 关联，影响多项目用户的工作流。
*   **[Issue #57275] 上下文管理缺陷**：导致 Agent 崩溃的严重体验问题，评论中反映该问题复现率高，需核心层面优化压缩算法。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-07-05)

## 1. 今日速览
PicoClaw 项目今日整体呈现**中等活跃度**，社区贡献主要集中在代码质量优化与多智能体功能增强。过去 24 小时内，项目合并了 2 个 PR，解决了多智能体会话清除的关键逻辑问题，同时有 5 个 PR 处于待合并状态，显示出社区正在积极储备下一次更新的内容。Issue 方面，虽然新增 3 个问题，但关闭了 1 个历史问题，且社区对安全相关议题（如 libolm 替换）关注度较高。整体来看，项目正处于稳健迭代阶段，重点转向了功能的精细化打磨与安全性重构。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 2 个 PR 被合并/关闭，显著提升了多智能体交互体验与系统稳定性：

*   **多智能体会话管理修复**：PR [#3224](https://github.com/sipeed/picoclaw/pull/3224) 已关闭。该修复解决了在配置多个 Agent 时，`/clear` 指令错误清除默认 Agent 会话而非当前路由 Agent 会话的问题。这一改进对于多场景用户至关重要，确保了上下文管理的准确性。
*   **代码回退与维护**：PR [#3221](https://github.com/sipeed/picoclaw/pull/3221) 已关闭。为了解决日志导入错误，回退了之前的测试覆盖提交，体现了维护者对代码稳定性的谨慎态度。

此外，还有 5 个 PR 正在审核中，主要涉及 Docker 基础镜像升级、国际化补全及错误处理优化，预计将在近期进一步完善项目的工程化标准。

## 4. 社区热点
今日讨论热度最高的议题集中在安全性与加密通信：

*   **加密库替换提议 ([#3088](https://github.com/sipeed/picoclaw/issues/3088))**：该 Issue 获得了 2 个点赞和 4 条评论，标为 `priority: high`。社区强烈建议将 `libolm` 替换为官方维护的 `vodozemac`，原因是前者已停止维护且存在安全隐患。这反映了用户对项目底层安全架构的高度关注。
*   **Android 客户端服务问题 ([#3182](https://github.com/sipeed/picoclaw/issues/3182))**：用户反馈在 Android 端无法启动服务及更改路径，引发了关于移动端权限管理的讨论，显示出 PicoClaw 在移动端适配仍存在痛点。

## 5. Bug 与稳定性
今日报告的问题主要集中在移动端兼容性和加密通信配置：

*   **[High] Android 服务启动失败 ([#3182](https://github.com/sipeed/picoclaw/issues/3182))**：用户反馈在 Android 设备上服务无法启动，且无法通过设置更改路径。目前暂无修复 PR，严重影响移动端用户体验。
*   **[Medium] Matrix 加密消息接收异常 ([#3194](https://github.com/sipeed/picoclaw/issues/3194))**：用户报告在未启用 crypto 的情况下接收到加密消息导致报错。属于配置与运行时状态不匹配的问题。
*   **[Fixed] 多智能体上下文清除错误**：通过 PR [#3224](https://github.com/sipeed/picoclaw/pull/3224) 得以修复，现已合并。

## 6. 功能请求与路线图信号
结合 PR 与 Issue 动态，项目路线图呈现以下趋势：

*   **Agent 个性化配置增强**：新开 PR [#3225](https://github.com/sipeed/picoclaw/pull/3225) 提出支持 Agent 级别的运行时参数覆盖（如 `max_tokens`, `summarization` 阈值）。这预示着未来版本将支持更细粒度的 Agent 行为控制，满足不同场景下对模型响应长度和摘要策略的差异化需求。
*   **安全性架构升级**：Issue [#3088](https://github.com/sipeed/picoclaw/issues/3088) 提出的 `vodozemac` 替换方案，结合 Issue 中 `priority: high` 的标签，极有可能被纳入近期重构计划，以解决潜在的供应链安全风险。

## 7. 用户反馈摘要
从 Issue 评论中提炼出的用户核心反馈如下：

*   **痛点**：移动端体验仍有欠缺，主要是权限管理和后台服务保活问题（[Issue #3182](https://github.com/sipeed/picoclaw/issues/3182)）。
*   **诉求**：用户希望项目能及时跟进上游依赖库的安全更新，避免使用废弃的加密库。
*   **场景**：多 Agent 切换使用场景日益普及，用户对会话隔离和上下文记忆（"失忆"问题 [Issue #3150](https://github.com/sipeed/picoclaw/issues/3150)）非常敏感。

## 8. 待处理积压
*   **高优先级 Issue 待响应**：关于替换废弃加密库 `libolm` 的请求 ([#3088](https://github.com/sipeed/picoclaw/issues/3088)) 虽有讨论但仍未解决，鉴于其安全性质，建议维护者优先排期。
*   **PR 审核积压**：有 5 个 PR 处于 Open 状态，其中 4 个来自同一位贡献者 (@chengzhichao-xydt)，主要集中在 Chore 和 Fix 类别，建议维护者尽快审核合并以清理队列。
*   **陈旧 Issue**：Issue [#3194](https://github.com/sipeed/picoclaw/issues/3194) 和 [#3182](https://github.com/sipeed/picoclaw/issues/3182) 已标记为 stale 或近期活跃，需要核心团队确认是否为可复现 Bug 并分配处理。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-07-05)

## 1. 今日速览
NanoClaw 项目今日呈现出极高的维护活跃度与代码质量控制力度。过去 24 小时内共有 39 条 PR 更新，其中 22 条已合并/关闭，显示出维护者对代码库进行了大规模的清理与重构工作。项目今日重点移除了 v1 遗留代码与过时文档，并修复了多个影响系统稳定性与用户体验的潜在 Bug。值得注意的是，社区报告了一个关于 UI 显示完整性的安全问题，目前尚在处理中。整体来看，项目正处于从遗留架构向 v2 全面迁移的深化阶段，代码健康度显著提升。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日合并与关闭的 PR 数量较多，主要集中在**架构清理**、**异步化改造**及**文档完善**三个方面，显著提升了项目的现代化程度：

*   **架构重构与清理**：维护者大幅清理了 v1 遗留代码。删除了废弃的 `data/env/env` 镜像机制 ([PR #2946](nanocoai/nanoclaw PR #2946))、过时的配置项 ([PR #2935](nanocoai/nanoclaw PR #2935)) 以及废弃的 CLI 协议词汇 ([PR #2936](nanocoai/nanoclaw PR #2936))。此外，修复了跨进程的 `in_reply_to` 标记问题 ([PR #2942](nanocoai/nanoclaw PR #2942))，解决了 MCP 服务器独立运行时的状态同步痛点。
*   **性能与体验优化**：Agent 镜像构建流程改为异步执行 ([PR #2931](nanocoai/nanoclaw PR #2931))，解决了此前同步构建会导致主机冻结 15 分钟的严重阻塞问题。同时，Slack 审批卡片增加了彩色按钮支持 ([PR #2933](nanocoai/nanoclaw PR #2933))，提升了交互体验。
*   **配置与工具增强**：新增 `ncl groups config add-mount/remove-mount` 命令 ([PR #2939](nanocoai/nanoclaw PR #2939))，允许更灵活地管理容器挂载配置；修复了挂载白名单对 `readOnly` 键的解析错误 ([PR #2943](nanocoai/nanoclaw PR #2943))。
*   **文档同步**：文档进行了大规模更新以匹配 v2 架构，重写了安全文档并修正了调度、网络等过时描述 ([PR #2945](nanocoai/nanoclaw PR #2945), [PR #2948](nanocoai/nanoclaw PR #2948))。

## 4. 社区热点
今日社区活跃度适中，主要关注点在于新功能的引入与安全策略的完善：

*   **[PR #2036](nanocoai/nanoclaw PR #2036) [OPEN]**：该 PR 旨在引入“按组配置容器环境变量”功能，且已重构为数据库原生管理方式。作为今日最受关注的长周期 PR，其合并将极大增强多租户环境下的配置灵活性。
*   **[PR #2954](nanocoai/nanoclaw PR #2954) [OPEN]**：新增了 Phase-1 安全报告与分类策略，标志着项目正在建立更规范的安全响应流程，这对企业级采纳至关重要。
*   **[PR #2952](nanocoai/nanoclaw PR #2952) [OPEN]**：社区成员贡献了 `opencode stack` 的 Skill 集成，显示项目在 AI 智能体工具链生态上的扩展能力。

## 5. Bug 与稳定性
今日报告并处理了多个关键 Bug，安全性问题需引起重视：

*   **[高 - 安全]** [Issue #2923](nanocoai/nanoclaw Issue #2923)：报告了 `ask_user_question` 卡片的显示欺骗漏洞。攻击者可在授权检查拒绝响应前，通过伪造点击覆盖卡片显示文本。虽不影响后端逻辑，但属于 UI 完整性欺诈。目前暂无修复 PR。
*   **[中 - 已修复]** [PR #2956](nanocoai/nanoclaw PR #2956)：修复了 Agent 在最终输出中重复发送 `send_message` 内容导致消息投递两次的 Bug。
*   **[中 - 已修复]** [PR #2955](nanocoai/nanoclaw PR #2955)：修复了 `mention-sticky` 逻辑错误订阅频道根节点或仅累积会话的问题，可能导致消息路由混乱。
*   **[中 - 已修复]** [PR #2937](nanocoai/nanoclaw PR #2937)：修复了删除会话文件夹后无法通过文档指引重置会话的问题，增强了系统的容错性。

## 6. 功能请求与路线图信号
*   **组级别环境变量管理**：[PR #2036](nanocoai/nanoclaw PR #2036) 的持续推进表明，NanoClaw 正致力于解决容器化部署中环境变量管理的痛点，预计该功能将在下一阶段成为核心特性。
*   **Opencode 集成**：[PR #2951](nanocoai/nanoclaw PR #2951) 与 [PR #2952](nanocoai/nanoclaw PR #2952) 显示项目正在积极集成外部工具栈，暗示未来版本可能会加强对第三方 AI 编码工具的代理支持。

## 7. 用户反馈摘要
从今日的 Issue 和 PR 描述中提炼出以下用户/开发者痛点：
*   **UI 信任问题**：Issue #2923 反映出高级用户对前端交互完整性的敏锐关注，即便后端安全，前端的显示欺骗也会引发安全担忧。
*   **运维阻塞**：PR #2931 修复的“镜像构建冻结主机”问题表明，部分用户在生产环境中遇到过严重的运维阻塞，对异步化需求强烈。
*   **配置繁琐**：多个 PR（如 #2939, #2934）显示，用户在管理容器挂载和环境变量时面临较大心智负担，急需更直观的 CLI 工具支持。

## 8. 待处理积压
*   **[重要] 安全漏洞修复**：[Issue #2923](nanocoai/nanoclaw Issue #2923) 涉及前端 UI 欺骗，建议维护者优先跟进处理或确认影响范围。
*   **[长期] 功能 PR**：[PR #2036](nanocoai/nanoclaw PR #2036) 自 4 月开启至今，今日已刷新适配 DB 架构，建议维护者尽快 Review 合并，以完善分组管理功能。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-07-05)

## 1. 今日速览
IronClaw 项目今日保持极高的开发活跃度，重点关注 **Slack 个人 OAuth 认证重构** 与 **Reborn 架构的测试覆盖率/CI 稳定性优化**。过去24小时内共有 40 个 PR 更新（其中 18 个已合并/关闭）和 9 个 Issue 更新，显示核心团队正在密集推进代码合并与架构治理。虽然没有发布新版本，但 `chore: release` PR (#5598) 的更新预示着包含破坏性变更的下一版本即将发布。整体来看，项目正处于功能迭代与质量保障并重的健康阶段。

## 2. 版本发布
**无新版本发布**。但需关注 PR #5598 正在准备发布 `ironclaw_common` (0.5.0)、`ironclaw` (0.29.1) 等多个核心组件版本，其中包含 API 破坏性变更。

## 3. 项目进展
今日共有 18 个 PR 合并或关闭，主要集中在以下三个方向：

*   **Slack 认证体系重构 (Stack 1-4/4)**：核心贡献者 @BenKurrek 推进了一系列 Slack OAuth 相关的 PR。
    *   **已合并 #5643**：扩展 CI 测试范围覆盖新 OAuth 流程。
    *   **待合并 #5644, #5645, #5646**：分别对应基础设施搭建、Pairing Code 置换为 OAuth、以及移除 Legacy 配置字段。这套组合拳将彻底移除旧的 Pairing Code 模式。
*   **测试基础设施建设与 CI 优化**：
    *   **已合并 #5642**：引入了 `wiring-parity guard`，确保测试环境与生产环境的运行时结构一致性，防止配置漂移。
    *   **已合并 #5649**：启用了 Bridged tool disclosure 等场景的覆盖率统计，提升测试信心。
    *   **已合并 #5606, #5635**：优化了 Reborn gateway 的构建缓存和测试分桶策略，旨在降低 CI 耗时。
*   **架构治理与错误处理**：
    *   **已合并 #5383**：完成了 Reborn 错误恢复能力的审计文档，确立了“安全相关错误阻断运行，其他错误应可恢复”的原则。
    *   **已合并 #5042**：修复了 Agent Loop 中单行回答被误判为工具调用的 Bug，提升了模型响应的鲁棒性。

## 4. 社区热点
今日讨论焦点集中在 Slack OAuth 实现细节与 CI 稳定性上：

*   **Slack OAuth 权限粒度争议 ([Issue #5650](https://github.com/nearai/ironclaw/issue/5650))**：
    @BenKurrek 提出目前 Slack 集成中，只读能力（如 `search_messages`）也背负了写入权限（`chat:write`），违背了最小权限原则。该 Issue 是对 PR #5644 的跟进，社区/维护者倾向于在下一阶段细化权限拆分。
*   **CI 部署阻塞问题 ([Issue #5636](https://github.com/nearai/ironclaw/issue/5636))**：
    @think-in-universe 报告 Railway 部署配置了 "Wait for CI"，但某些 CI job 被有意 skip 时会导致部署阻塞。这反映了现有 CI 流程与部署策略的摩擦，需调整 job 级别的 `if` 条件逻辑。

## 5. Bug 与稳定性
今日报告了数个中等优先级的 Bug 及潜在风险：

*   **[Medium] CI 部署死锁** ([Issue #5636](https://github.com/nearai/ironclaw/issue/5636))：如上所述，CI skip 状态意外阻断了生产部署。目前暂无 Fix PR。
*   **[Medium] Bridged Tool 丢失问题** ([Issue #5647](https://github.com/nearai/ironclaw/issue/5647))：当开启 Bridged disclosure 且同时收窄 capability allowlist 时，Bridge meta-tools 可能被意外剥离。这是构建集成测试覆盖率时发现的深层 Bug。
*   **[Low] 测试工具缺失 Sink** ([Issue #5640](https://github.com/nearai/ironclaw/issue/5640))：集成测试环境中 `hook_security_audit_sink` 总是 None，导致无法验证安全审计日志，需补充 `RecordingSecurityAuditSink`。
*   **[Fixed] Agent Loop 单行回答解析**：PR #5042 已合并，修复了模型输出 "Tool result from web__fetch..." 时被误判为 transcript artifact 的问题。

## 6. 功能请求与路线图信号
*   **Reborn 迁移工具**：PR #5627 (Closed) 已完成 v1/engine-v2 到 Reborn 的状态迁移工具开发，这标志着 Reborn 架构即将全面接管，旧版本用户迁移路径已打通。
*   **错误处理静态化强制**：PR #5651 提出通过编译期强制（`unused_must_use` 等）确保错误不被静默吞没，这符合 Issue #5383 确立的鲁棒性路线图。
*   **Final-answer Nudge 交互化**：PR #5304 提议将原本仅用于特定场景的 final-answer nudge 扩展到交互式运行中，解决对话“空转”结束的问题。

## 7. 用户反馈摘要
从 Issue 和 PR 描述中提取的关键反馈：
*   **开发者体验 (DX)**：贡献者 @henrypark133 指出目前的 `EXPECTED_PRODUCTION_SHAPE` 是手工推导的，维护成本高且易出错 ([Issue #5641](https://github.com/nearai/ironclaw/issue/5641))，希望能通过代码自动生成或访问器模式来保证一致性。
*   **安全性与权限**：在 OAuth 重构过程中，开发者敏锐地发现了权限过度授予的问题 (Issue #5650)，表明项目在功能迭代的同时对安全细节保持高度敏感。

## 8. 待处理积压
*   **[重要] Nightly E2E 测试持续失败** ([Issue #4108](https://github.com/nearai/ironclaw/issue/4108))：自 5 月底创建以来仍未解决，虽然标记为 Nightly，但长期存在可能掩盖潜在的功能回归。
*   **[功能] Subagent Spawn 失败修复** ([PR #5170](https://github.com/nearai/ironclaw/pull/5170))：该 PR 体积较大且已开启数日，涉及核心的 Loop 消息验证逻辑，建议维护者优先 Review 以合并关键修复。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-07-05)

## 1. 今日速览
LobsterAI 项目今日整体呈现**低活跃度维护状态**，无新版本发布。核心开发者 @fisherdaddy 集中关闭了 2 个功能性修复 PR，主要涉及 Agent 身份配置迁移和网络代理传播，推进了系统底层架构的规范化。社区方面，有 1 条历史 Issue 被标记活跃，反映出用户对任务执行过程中 UI 交互阻塞的持续关注。整体来看，项目处于稳步迭代期，重点在于代码重构与存量问题清理。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日共有 2 个 PR 合并/关闭，显著推进了底层架构与网络配置的优化：

*   **架构重构与规范化**：PR [#2272](https://github.com/netease-youdao/LobsterAI/pull/2272) 已关闭。该 PR 实现了旧版 AGENTS.md 身份块向 IDENTITY.md 的迁移，通过清理遗留配置并增加备份与容错机制，解决了 Agent 身份冲突问题，提升了多 Agent 环境下的配置管理安全性。
*   **网络体验优化**：PR [#2271](https://github.com/netease-youdao/LobsterAI/pull/2271) 已关闭。修复了系统代理无法传播至托管浏览器的问题，显著改善了在网络受限环境下使用 Web 自动化功能的体验。

## 4. 社区热点
今日社区讨论主要围绕历史遗留的功能障碍展开，互动主要集中在以下问题：

*   **Issue [#1352](https://github.com/netease-youdao/LobsterAI/issues/1352)**：任务运行中无法上传附件的问题再次引发关注。该问题导致用户在任务执行流中被阻断，属于高优先级的功能性缺陷，目前仍处于 Open 状态。
*   **PR [#1350](https://github.com/netease-youdao/LobsterAI/pull/1350)**：关于 Skills 文件生成的阻塞问题。用户反馈在生成过程中缺乏中间态反馈，导致“黑盒”等待焦虑，且涉及模型理解能力的偏差，目前该 PR 仍处于 Open 状态。

## 5. Bug 与稳定性
今日报告及活跃的 Bug 主要集中在交互阻塞与反馈缺失，按严重程度排序如下：

*   **[高] 交互阻塞**：Issue [#1352](https://github.com/netease-youdao/LobsterAI/issues/1352) 报告任务对话框在运行中无法上传附件，严重影响用户连续操作，目前尚无对应 Fix PR 合并。
*   **[中] 流程阻塞与反馈缺失**：PR/Issue [#1350](https://github.com/netease-youdao/LobsterAI/pull/1350) 指出 Skills 生成长时间阻塞且无过程展示，用户无法判断系统状态，影响对产品智能程度的感知。

## 6. 功能请求与路线图信号
从现有 Issue 和 PR 分析，下一阶段产品优化可能聚焦于：

*   **过程可视化增强**：结合 [#1350](https://github.com/netease-youdao/LobsterAI/pull/1350) 的反馈，用户强烈需求“中间思考过程”的展示，建议后续版本增加流式输出或进度条反馈。
*   **Skills 创作体验优化**：针对同模型不同场景下的理解偏差问题，可能需要引入更精准的 Prompt 模板或微调模型对 Skills 创作指令的响应机制。

## 7. 用户反馈摘要
*   **痛点**：用户对“无响应”或“假死”状态极度敏感（如上传附件无反应、生成过程无反馈），认为缺乏中间过程展示降低了系统的可信度。
*   **场景**：用户主要在自动化任务执行（Web 操作）和自定义 Skills 开发场景中遇到阻碍。
*   **评价**：部分用户对比了 Openclaw 等同类实现，指出 LobsterAI 在特定场景下的模型理解能力仍有提升空间。

## 8. 待处理积压
以下重要 Issue/PR 长期未得到有效解决，建议维护者优先关注：

*   **Issue [#1352](https://github.com/netease-youdao/LobsterAI/issues/1352)**：任务运行时附件上传失效，已标记为 `[stale]`，需确认是否为前端交互锁定问题。
*   **PR [#1350](https://github.com/netease-youdao/LobsterAI/pull/1350)**：涉及 Skills 生成的核心流程，阻塞问题影响开发者体验，建议优先排查阻塞源头（是模型响应慢还是代码逻辑死锁）。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-07-05)

## 1. 今日速览
CoPaw 项目今日活跃度较高，社区聚焦于 **QwenPaw 2.0 版本核心功能的稳定性修复与增强**。过去 24 小时内共有 10 条 Issue 更新（8 新开/活跃，2 关闭）和 3 条 PR 更新，虽无新版本发布或代码合并，但针对关键 Bug 已有响应 PR。讨论热点集中在 **Auto-memory（自动记忆）机制的持久化故障** 与 **Scroll 上下文压缩导致的严重信息丢失** 问题。整体来看，项目正处于新版本迭代后的阵痛期，开发者正在快速响应核心体验问题。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
尽管今日无 PR 被合并，但开发者提交了关键的修复与功能 PR，项目正在向更健壮的记忆管理迈进：

*   **[修复进行中] Auto-memory 状态管理重构**：PR [#5777](https://github.com/agentscope-ai/QwenPaw/pull/5777) 针对 Issue #5775 提出了重构方案，引入 `_auto_memory_turn_states` 字典以解决跨请求状态丢失问题，旨在修复自动记忆无法按时触发的严重 Bug。
*   **[功能推进] LLM 模型降级/Fallback 机制**：PR [#5597](https://github.com/agentscope-ai/QwenPaw/pull/5597) (后端) 与 [#5598](https://github.com/agentscope-ai/QwenPaw/pull/5598) (前端控制台) 正在推进 LLM 备用模型的配置功能。这将极大提升服务的高可用性，允许在主模型重试耗尽后自动切换至备用模型。

## 4. 社区热点
今日社区讨论最热烈的话题围绕 **个性化 UI** 与 **记忆/上下文管理的严重缺陷** 展开：

*   **[UI 个性化需求]** Issue [#2865](https://github.com/agentscope-ai/QwenPaw/issues/2865) 建议支持自定义 Agent 名称与头像，该需求虽创建于 4 月，但今日再次活跃，获得 4 条评论与 1 个点赞，反映了用户对 Chat UI 个性化体验的强烈诉求。
*   **[核心体验故障]** Issue [#5778](https://github.com/agentscope-ai/QwenPaw/issues/5778) 报告了 Scroll 压缩策略导致上下文完全丢失的问题。用户反馈 2.0 版本的默认压缩策略会导致 AI “失忆”和回复跑偏，且与 `auto_memory_search` 存在兼容性冲突，引发了社区对当前压缩算法有效性的担忧。
*   **[Auto-memory 故障]** Issue [#5775](https://github.com/agentscope-ai/QwenPaw/issues/5775) 揭示了 Auto-memory 在 `interval > 1` 时完全不触发的问题，这是 2.0 版本的关键回归缺陷。

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，且多涉及核心功能（记忆与上下文），需引起高度重视：

### 🔴 严重
1.  **Auto-memory 持久化失效** ([#5775](https://github.com/agentscope-ai/QwenPaw/issues/5775))：因 `MemoryMiddleware` 状态在请求重建时丢失，导致长对话无法写入记忆。**当前已有修复 PR #5777。**
2.  **Scroll 压缩导致上下文灾难性丢失** ([#5778](https://github.com/agentscope-ai/QwenPaw/issues/5778))：用户报告 2.0 版本压缩后关键信息丢失，AI 无法继续任务，严重影响长对话体验。尚无修复 PR。

### 🟠 中等
1.  **OpenCode 渠道报错** ([#5773](https://github.com/agentscope-ai/QwenPaw/issues/5773))：开启记忆搜索后，OpenCode 渠道请求失败，疑似网关拦截。
2.  **Google Gemini 渠道报错** ([#5774](https://github.com/agentscope-ai/QwenPaw/issues/5774))：Google Gemini 格式端点存在 Traceback 错误。
3.  **IM 长会话旧消息干扰** ([#5776](https://github.com/agentscope-ai/QwenPaw/issues/5776))：陈旧的置顶消息被误判为当前任务，影响长周期 IM 会话的准确性。
4.  **LM Studio 模型切换误判** ([#5772](https://github.com/agentscope-ai/QwenPaw/issues/5772))：HTTP 400 错误处理逻辑错误导致切换模型后图片消息被剥离。**该 Issue 已关闭。**

### 🟢 轻微
1.  **日志级别误用** ([#5771](https://github.com/agentscope-ai/QwenPaw/issues/5771))：调试日志误用 WARNING 级别导致刷屏。
2.  **Cron API 时区问题** ([#5779](https://github.com/agentscope-ai/QwenPaw/issues/5779))：Cron state API 强制返回 UTC 时间而非配置时区时间。

## 6. 功能请求与路线图信号
*   **UI 个性化**：Issue [#2865](https://github.com/agentscope-ai/QwenPaw/issues/2865) 提出的自定义 Agent 名称与头像，属于高频需求，建议纳入近期迭代。
*   **桌面端体验优化**：Issue [#2830](https://github.com/agentscope-ai/QwenPaw/issues/2830)（已关闭）提出的托盘图标后台运行与反馈入口，属于桌面端标准功能，需关注其关闭原因（是已实现还是暂不处理）。

## 7. 用户反馈摘要
*   **痛点：2.0 版本记忆机制不稳**：多位用户反馈升级至 2.0 后，Auto-memory 和 Scroll 压缩功能存在明显 Bug，导致 AI “变傻”或“失忆”，严重影响生产力。
*   **痛点：渠道兼容性**：接入 OpenCode (DeepSeek) 和 Google Gemini 时遇到阻碍，特别是与记忆搜索功能的冲突，反映出多渠道适配测试不足。
*   **痛点：模型切换感知差**：LM Studio 用户在切换模型时遇到静默失败（图片被过滤），降低了本地模型用户的使用体验。

## 8. 待处理积压
*   **Issue #5778 (Scroll 压缩上下文丢失)**：作为影响核心体验的严重 Bug，目前尚无官方回复或关联 PR，建议维护者优先排查。
*   **Issue #2865 (自定义 Agent 信息)**：该需求已存在 3 个月且仍有活跃讨论，建议团队评估纳入开发计划。

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