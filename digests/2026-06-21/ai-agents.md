# OpenClaw 生态日报 2026-06-21

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-06-21 04:27 UTC

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

# OpenClaw 项目动态日报 (2026-06-21)

## 1. 今日速览

OpenClaw 项目今日保持极高的开发与社区活跃度，Issue 与 PR 更新量均达到 500 条。项目刚刚发布了 **v2026.6.9** 版本，主要针对 Telegram 集成进行了重大体验升级。社区讨论焦点集中在核心运行时的稳定性上，特别是 **Gateway 内存泄漏**（#91588）和 **Codex 会话中断回归**（#88312）引发了大量关注。尽管新版本发布带来了功能增强，但大量高优先级 Bug 报告显示项目正处于“功能扩展与稳定性攻坚”并行的关键阶段。

## 2. 版本发布

### v2026.6.9
该版本主要增强了 Telegram 渠道的交付能力与消息渲染质量，建议所有 Telegram 用户尽快升级。

**主要更新内容：**
*   **富文本支持**：Telegram 现支持发送富 HTML，保留 Markdown 格式和贴纸路径。
*   **渲染优化**：改进了进度草稿和命令输出的渲染忠实度，安全标准化 HTML 表格。
*   **路径修复**：确保提及和假脱机处理程序在正确的交付路径上。

**升级建议**：此次更新无破坏性变更声明，主要针对集成体验优化。

## 3. 项目进展

今日共有 **45 个 PR 被合并/关闭**，**455 个 PR 处于活跃/待合并状态**，显示出维护者正在高负荷处理积压代码。

**重点推进的功能与修复：**
*   **消息持久化与恢复**：PR #82572 正致力于实现跨 Gateway 重启的 followup 队列持久化，这将显著提升服务的崩溃恢复能力。
*   **Session 状态修复**：PR #89039 和 #89045 正在修复 Embedded Session Takeover 导致的消息丢失和群组会话卡死问题，这是当前稳定性的核心补丁。
*   **Telegram 增强**：PR #95413 修复了富文本消息换行符丢失的问题，配合新版本发布，进一步巩固了 Telegram 渠道的体验。
*   **安全边界**：PR #85229 提出拒绝敏感主机文件变更，正在等待合并，这将增强平台安全性。

## 4. 社区热点

以下 Issues 和 PRs 获得了今日最多的讨论与关注：

*   **[#88838 [OPEN]**: Track core session/transcript SQLite migration via accessor seam](https://github.com/openclaw/openclaw/issues/88838)
    *   **热度**：31 条评论
    *   **分析**：这是一项核心架构重构提案，计划将 Session 和 Transcript 迁移至 SQLite 以替代现有实现。社区对此持谨慎态度，讨论焦点在于如何通过抽象层来降低重构风险，表明项目正在寻求解决长期困扰的性能与扩展性问题。

*   **[#91588 [OPEN]**: Critical: Gateway Memory Leak — RSS grows from 350MB to 15.5GB](https://github.com/openclaw/openclaw/issues/91588)
    *   **热度**：13 条评论
    *   **分析**：严重级 P0 问题。用户报告 Gateway 进程在数天内内存占用从 350MB 飙升至 15.5GB 导致 OOM Crash。该问题引发了大量受影响用户的共鸣，维护者已介入排查，但目前尚未发布修复版本。

*   **[#88312 [OPEN]**: [Regression] Codex app-server turn-completion stall](https://github.com/openclaw/openclaw/issues/88312)
    *   **热度**：16 条评论
    *   **分析**：自 v2026.5.27 引入的回归 Bug，导致 Codex 应用服务器在多工具代理运行时无法确认回合完成。该问题严重影响了生产环境的自动化流程，用户强烈呼吁尽快修复。

## 5. Bug 与稳定性

今日报告了多个严重级 Bug，主要集中在 **内存管理**、**会话状态** 和 **消息丢失** 方面。

**🔴 严重 - P0/P1**
1.  **Gateway 内存泄漏导致 OOM** [#91588](https://github.com/openclaw/openclaw/issues/91588)：生产环境下 RSS 增长至 15.5GB，导致进程反复被 OOM Killer 终止。目前尚未有修复 PR。
2.  **Codex Turn-Completion 回归** [#88312](https://github.com/openclaw/openclaw/issues/88312)：导致会话停滞，无法确认回合完成，影响自动化任务。
3.  **内部思维链泄露** [#91804](https://github.com/openclaw/openclaw/issues/91804)：v2026.6.5 版本泄露内部推理过程给用户，属于严重的隐私与 UX 回归。

**🟠 中等 - P1/P2**
1.  **消息丢失风险** [#92460](https://github.com/openclaw/openclaw/issues/92460)：Cron 完成广播可能丢弃显式配置的 Channel。
2.  **Anthropic 签名失效** [#92201](https://github.com/openclaw/openclaw/issues/92201)：Embedded runner 重放时 thinking signatures 间歇性无效。
3.  **性能退化** [#85333](https://github.com/openclaw/openclaw/issues/85333)：`openclaw doctor --fix` 执行时间从 55s 激增至 229s+。

**修复进度**：针对部分 Session Takeover 导致的消息丢失问题，已有 PR #89039 提出修复方案，目前处于待合并状态。

## 6. 功能请求与路线图信号

社区提出了多项增强提案，部分已有对应 PR 在推进：

1.  **主题会话族** [#90916](https://github.com/openclaw/openclaw/issues/90916)：提议为单个助手增加多个命名的上下文通道，实现隔离的上下文管理。这符合 AI Agent "多线程/多角色" 的发展趋势。
2.  **内存预压缩保护机制** [#90354](https://github.com/openclaw/openclaw/issues/90354)：请求为预压缩内存刷新增加严格的边界校验，防止模型写入过大或噪音数据。
3.  **Kubernetes 文档更新** [#91455](https://github.com/openclaw/openclaw/issues/91455)：社区呼吁更新 K8s 部署文档，建议使用 Helm Chart 替代当前的单一容器部署方式。

## 7. 用户反馈摘要

通过分析 Issues 评论，提炼出以下用户痛点：

*   **稳定性焦虑**：用户对内存泄漏 (#91588) 和会话中断 (#88312) 表现出极大的担忧，特别是生产环境用户反馈这直接导致服务不可用。
*   **Cron 任务不可靠**：多位用户反馈 Cron 任务在执行完毕后无法正确发送通知或直接丢失消息 (#84583, #91363)，被认为是 "沉默的杀手"。
*   **Telegram 体验改善**：v2026.6.9 的发布获得了积极反馈，用户对富文本支持表示欢迎，但也报告了部分渲染细节问题（如换行符处理），PR #95413 正在跟进修复。
*   **诊断困难**：关于 Proxy 配置 (#93807) 和网络错误 (#94032) 的反馈显示，用户在网络层面的排错体验较差，错误提示不够明确。

## 8. 待处理积压

以下高优先级 Issue 长期未得到有效解决，需维护者重点关注：

*   **#78493**: `sudo openclaw update` 导致文件所有权混乱，进而引发 `doctor` 覆盖配置。这是一个长期存在的安装/升级体验问题。
*   **#57713**: 默认沙箱镜像缺乏 Python3，导致 edit/write 工具失败。这是一个严重影响新用户上手体验的 Bug。
*   **#14785**: 工具 Schema Token 开销过大（~3500 tokens/session），影响长上下文任务的效率，用户建议优化 Schema 裁剪。

---
**分析师结语**：OpenClaw 项目正在经历快速迭代期，v2026.6.9 显示了团队在集成体验上的努力。然而，内存泄漏和 Session 状态管理的 Bug 激增暴露了底层架构的压力。建议维护者在推进 SQLite 迁移 (#88838) 等大重构前，优先解决 P0 级别的稳定性问题，以稳固用户信心。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比分析报告 (2026-06-21)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于 **"功能爆发与稳定性攻坚"并存的关键转型期**。头部项目（如 OpenClaw, Hermes Agent）在快速迭代集成能力的同时，普遍面临内存泄漏、上下文管理失控等底层架构挑战；中腰部项目（如 IronClaw, NanoBot）则侧重于多租户架构、并发安全等企业级特性的补齐。生态整体呈现出从单纯的对话交互向自主任务执行演进的趋势，"上下文成本控制"与"智能体自认知能力"成为今日社区讨论的核心焦点。

## 2. 各项目活跃度对比

| 项目名称 | Issue 活跃度 | PR 活跃度 | 版本发布 | 健康度评估 | 核心状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 极高 (500+) | 极高 (500+) | **v2026.6.9** | ⚠️ 中等 | 功能扩展迅猛，但严重级 Bug（内存泄漏）未解，积压严重。 |
| **Hermes Agent** | 高 (50) | 高 (50) | 无 | ⚠️ 中等 | 集中修复上下文压缩引发的数据丢失，面临 Token 成本过高的舆情压力。 |
| **IronClaw** | 高 (自动报告) | 高 (21) | 无 | ✅ 良好 | 架构重构活跃（多工作区、Manifest驱动），正处于企业级特性密集开发期。 |
| **Zeroclaw** | 中 (50) | 中 (50) | 无 | ⚠️ 中等 | 处于版本发布前的积压期，核心关注 Agent 自主性。合并进度滞后。 |
| **CoPaw** | 中 (13) | 高 (17) | 无 | ⚠️ 中等 | 社区反馈热烈但合并严重滞后，存在大量待修复的 UI 与模型兼容问题。 |
| **NanoBot** | 中 (14+) | 中 (4 merged) | 无 | ✅ 良好 | 开发节奏稳健，响应迅速，重点攻克 SDK 并发安全与性能瓶颈。 |
| **NanoClaw** | 低 (1) | 中 (6 new) | 无 | ⚠️ 注意 | 安全漏洞修复中，架构清理力度大，维护者审核速度待提升。 |
| **PicoClaw** | 低 (2) | 低 (1) | Nightly | ⚠️ 注意 | 核心功能遭遇成本质疑，代码合并停滞，活跃度低迷。 |
| **LobsterAI** | 低 (清理旧债) | 无 | 无 | ❌ 低 | 处于维护模式，仅清理积压 Issue，无实质性开发进展。 |
| **Moltis** | 无 | 低 (依赖更新) | 无 | ✅ 稳定 | 维护平稳，仅进行依赖安全更新。 |
| **NullClaw** | 低 (1) | 无 | 无 | ❌ 低 | 活跃度极低，基础功能存在稳定性问题且无人响应。 |
| **TinyClaw / ZeptoClaw / EasyClaw** | 无 | 无 | 无 | ❌ 停滞 | 过去 24 小时无任何活动。 |

## 3. OpenClaw 在生态中的定位

作为生态中 **流量最大、集成最广的"核心参照系"**，OpenClaw 的定位类似于 "Linux 内核" 或 "Windows" 之于操作系统：

*   **优势**：具备最完善的渠道集成能力（如 Telegram 富文本支持），社区活跃度断层领先，拥有最广泛的用户反馈数据。
*   **劣势**：体量庞大导致 Bug 影响面广（如 Gateway 内存泄漏波及大量生产环境），架构重构（如 SQLite 迁移）风险高，积压的 PR 与 Issue 数量巨大（455个待合并）。
*   **对比差异**：
    *   相比 **IronClaw** 的企业级多租户架构，OpenClaw 更偏向于个人助手场景，但在底层调度（Gateway）上显得较为厚重。
    *   相比 **NanoBot** 的轻量级 SDK 化路线，OpenClaw 的单体部署复杂度更高，用户排错成本大。
    *   相比 **Hermes Agent** 对桌面端的专注，OpenClaw 的全平台策略导致其需要兼顾的服务端问题（如 Cron 任务、持久化）更为复杂。

## 4. 共同关注的技术方向

跨项目社区讨论揭示了以下三个共性技术趋势：

1.  **Token 成本与上下文效率焦虑**
    *   **涉及项目**：Hermes Agent, NanoClaw, PicoClaw, CoPaw。
    *   **具体诉求**：用户对隐性 Token 消耗极其敏感。Hermes Agent 用户抱怨 73% 的固定开销；NanoClaw 社区请求默认开启 Prompt Caching；PicoClaw 发现 Evolution 模式空转消耗 Token。这表明 **"成本透明"与"高性价比上下文管理"** 已成为刚需。

2.  **Agent 的自我认知与工具发现**
    *   **涉及项目**：Zeroclaw, OpenClaw。
    *   **具体诉求**：Zeroclaw 出现 Agent 不知道自己具备 `cron_add` 权限的问题；OpenClaw 用户反馈沙箱环境缺乏 Python3 导致工具调用失败。Agent 需要 **"知道自己能做什么"**（Tool Awareness）和 **"知道自己在哪"**（Environment Awareness）的能力成为关注点。

3.  **上下文持久化与状态管理**
    *   **涉及项目**：OpenClaw, Hermes Agent, Zeroclaw。
    *   **具体诉求**：OpenClaw 讨论 SQLite 迁移以解决 Transcript 存储；Hermes Agent 修复压缩导致的状态丢失；Zeroclaw 关注内存权重过高导致的卡顿。**长对话的状态一致性**是当前智能体从"玩具"走向"生产力"的最大技术瓶颈。

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | IronClaw | NanoBot / NanoClaw | Zeroclaw |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **核心场景** | 全能型个人助手 | 桌面端个人助理 | 企业级多租户平台 | 轻量级 SDK / 边缘端 | 自主智能体研发 |
| **技术架构** | Gateway + Session 架构 | 桌面应用 + 插件化 | Manifest 驱动 + Rust? | Python SDK / 容器化 | Agent-to-Agent (A2A) |
| **用户痛点** | 稳定性（OOM）、积压处理 | Token 开销、Windows 兼容 | 文档与测试覆盖 | 安全漏洞、缓存配置 | Agent 认知偏差 |
| **迭代风格** | 快速、高负荷 | 修补型、体验驱动 | 架构重构型、激进 | 稳健、代码质量优先 | 创新功能导向 |

## 6. 社区热度与成熟度

*   **第一梯队（快速迭代期）**：**OpenClaw, IronClaw**。OpenClaw 虽然积压严重但热度极高；IronClaw 正处于架构大改期，代码变更剧烈，适合贡献者参与。
*   **第二梯队（质量巩固期）**：**Hermes Agent, NanoBot, Zeroclaw, CoPaw**。这些项目功能已基本成型，当前重点在于修复核心 Bug（如压缩丢失、并发安全、UI 适配）和优化体验。
*   **第三梯队（维护/停滞期）**：**PicoClaw, LobsterAI, NullClaw**。PicoClaw 遭遇技术瓶颈且合并停滞；LobsterAI 仅清理旧账；NullClaw 和其他无活动项目处于生存边缘。

## 7. 值得关注的趋势信号

1.  **"成本工程" 显性化**：
    社区对 Token 消耗的关注度首次超过了功能性需求。Hermes Agent 的 Issue 显示用户已开始自行建立监控面板分析开销。**建议开发者**：未来的版本更新必须包含 Token 消耗报告或优化策略，否则将面临用户流失。

2.  **架构向 "数据库化" 演进**：
    OpenClaw 提出的 SQLite 迁移和 IronClaw 的 DB 工作区支持表明，简单的文件存储或内存存储已无法满足智能体的状态管理需求。**建议架构师**：尽早考虑引入嵌入式数据库或更持久化的状态机机制。

3.  **自主智能体的"梦游"风险**：
    Zeroclaw 的 Dream Mode 和 Cron 感知问题提示我们，赋予 Agent 自主权的同时，若缺乏完善的自我监控，会导致"无意识消耗资源"（如 PicoClaw 的空转消耗）。**建议开发者**：在开发 Agent 自主循环功能时，必须设计"熔断机制"或"预算限制"。

4.  **安全性回归**：
    NanoClaw 的路径遍历漏洞和 OpenClaw 的主机文件保护 PR 提醒生态，随着 Agent 获得读写文件、执行代码的能力，**沙箱逃逸与权限边界**将成为下一阶段的安全重点。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-21)

## 1. 今日速览
NanoBot 项目今日保持高活跃度，社区聚焦于**核心并发安全**与**性能优化**。过去 24 小时内虽无新版本发布，但产生了 4 个积极的 Bug 修复 PR 和 14 个待合并的功能增强 PR，显示出项目正在为下一个重大版本进行密集的功能储备与代码质量打磨。核心开发者与贡献者重点关注了 SDK 层的并发竞争问题以及 Token 估算的性能瓶颈，社区对深度使用场景（如高并发、自定义模型提供商）的反馈尤为热烈。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 4 个 PR 被关闭（推测已合并或处理完毕），主要集中在稳定性修复与体验优化，显著提升了系统的健壮性：

*   **[CLOSED] 修复 MCP 服务器 GC 崩溃 ([PR #4303](https://github.com/HKUDS/nanobot/pull/4303))**：解决了 `streamableHttp` MCP 服务器会话终止时因 `asyncio` 任务上下文不当导致的 `RuntimeError` 崩溃，提升了通道稳定性。
*   **[CLOSED] 修复 Dream 禁用时的 Prompt 膨胀问题 ([PR #4321](https://github.com/HKUDS/nanobot/pull/4321))**：修正了当 `dream` 功能禁用时游标不推进导致历史记录重复处理的问题，有效控制了上下文长度。
*   **[CLOSED] 修复 iOS Safari 输入框自动缩放 ([PR #4427](https://github.com/HKUDS/nanobot/pull/4427))**：针对移动端 WebUI 体验优化，调整了移动端字体大小以防止 iOS Safari 的自动缩放行为。
*   **[CLOSED] iMessage 通道支持 ([PR #4426](https://github.com/HKUDS/nanobot/pull/4426))**：该 PR 已关闭，虽引入了通过 Photon Spectrum 支持 iMessage 的功能，但可能因方案调整或集成问题暂未合并进主分支。

## 4. 社区热点
今日社区讨论焦点集中在 **SDK 并发安全** 与 **性能瓶颈** 两个核心领域：

*   **并发安全隐患引发热议 ([Issue #4408](https://github.com/HKUDS/nanobot/issues/4408))**：
    开发者 @waelantar 报告了 `Nanobot.run()` 在并发场景下存在 Hook 竞争风险（共享 `_extra_hooks` 被覆盖）。该问题迅速得到响应，目前已有两个修复方案正在进行中（[PR #4425](https://github.com/HKUDS/nanobot/pull/4425) 和 [PR #4409](https://github.com/HKUDS/nanobot/pull/4409)），分别尝试使用 `contextvars` 和参数传递来解决此问题，显示出社区对核心 SDK 代码质量的高要求。
*   **Token 估算性能优化 ([Issue #4420](https://github.com/HKUDS/nanobot/issues/4420) & [PR #4421](https://github.com/HKUDS/nanobot/pull/4421))**：
    用户 @codeLong1024 在构建数字员工项目时发现 `estimate_prompt_tokens` 存在显著的性能损耗。该反馈直接催生了优化 PR，通过缓存工具定义的 JSON 序列化结果来减少重复计算。这表明 NanoBot 正在被应用于高负载的生产环境，对性能细节极其敏感。

## 5. Bug 与稳定性
今日报告的关键 Bug 主要涉及底层架构与特定渠道兼容性，且均有修复方案跟进：

*   **[严重] SDK 并发竞争**：
    *   **问题**：`Nanobot.run()` 非并发安全，多线程/协程运行时 Hook 列表可能互相覆盖 ([Issue #4408](https://github.com/HKUDS/nanobot/issues/4408))。
    *   **状态**：**已有修复 PR** ([PR #4425](https://github.com/HKUDS/nanobot/pull/4425))，正待合并。
*   **[中等] 性能回归**：
    *   **问题**：每次 Token 估算重复编码不可变的工具定义，导致响应延迟 ([Issue #4420](https://github.com/HKUDS/nanobot/issues/4420))。
    *   **状态**：**已有优化 PR** ([PR #4421](https://github.com/HKUDS/nanobot/pull/4421) & [PR #4428](https://github.com/HKUDS/nanobot/pull/4428))。
*   **[低] Telegram 渠道误报**：
    *   **问题**：错误检测逻辑过于宽泛，导致普通 "chat not found" 错误错误地禁用了富文本功能 ([PR #4423](https://github.com/HKUDS/nanobot/pull/4423))。

## 6. 功能请求与路线图信号
社区正在推动对 **自定义模型提供商** 和 **消息渠道** 的深度支持，显示出 NanoBot 向更广泛的 AI 生态集成的趋势：

*   **自定义推理模型支持**：用户请求支持非标准思维链参数（如火山引擎/豆包模型），以兼容更多 LLM 提供商 ([Issue #4429](https://github.com/HKUDS/nanobot/issues/4429))。
*   **Telegram 富文本升级**：提议支持 Bot API 10.1 的 `sendRichMessage`，以支持表格、任务列表等复杂格式 ([Issue #4422](https://github.com/HKUDS/nanobot/issues/4422))。
*   **SDK 运行时控制增强**：[PR #4296](https://github.com/HKUDS/nanobot/pull/4296) 正在大幅扩展 Python SDK 能力，增加更丰富的 `RunResult` 元数据和运行时辅助客户端，这表明项目正在向“开发者友好型 SDK”转型。
*   **CLI 交互体验**：[PR #4329](https://github.com/HKUDS/nanobot/pull/4329) 提议引入内置 TUI（终端用户界面），预示着 CLI 工具将具备更现代化的交互体验。

## 7. 用户反馈摘要
从 Issue 评论中可以看出，用户群体已从简单的试用转向**生产级深度集成**：
*   **痛点**：并发场景下的稳定性（Issue #4408）和计算密集型任务的性能损耗（Issue #4420）是当前最核心的痛点。
*   **场景**：用户正在基于 NanoBot 构建“数字员工”类应用，这要求框架具备高响应速度和对特定模型（如豆包）的适配能力。
*   **满意度**：社区对 Bug 的响应速度较快，关键问题提出后 24 小时内即有对应的 Fix PR 产生，显示出项目维护的高效性。

## 8. 待处理积压
以下重要 PR 长期处于 Open 状态，建议维护者重点关注：

*   **[功能] Python SDK 扩展 ([PR #4296](https://github.com/HKUDS/nanobot/pull/4296))**：已开启 10 天，涉及核心 API 变更，需尽快推进合并或反馈。
*   **[修复] 内存游标单调性 ([PR #4256](https://github.com/HKUDS/nanobot/pull/4256))**：已开启 13 天，涉及内存存储的核心逻辑，建议优先审查以防止历史记录处理异常。
*   **[功能] 新手引导流程优化 ([PR #4395](https://github.com/HKUDS/nanobot/pull/4395))**：已开启 3 天，该改进对降低新用户门槛至关重要。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-21)

你好！我是 AI 智能体领域开源项目分析师。以下是基于 GitHub 数据生成的 Zeroclaw 项目日报。

## 1. 今日速览
Zeroclaw 今日保持高度活跃状态，社区互动频繁，共产生 50 条 Issue 更新与 50 条 PR 更新。虽然今日无新版本发布，但项目处于密集开发阶段，大量功能性 PR（如 A2A 发现、对话式 Onboarding）正在进行最后的代码审查与完善。值得注意的是，今日 PR 合并数较少（仅 3 个），积压的待合并 PR 达到 47 个，显示出项目正处在下一个重大版本（推测为 v0.8.2 或 v0.9.0）发布前的整合期。社区关注点主要集中在 Agent 的自主性（Dream Mode）、安全架构（OIDC）以及多平台适配上。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
尽管合并数量有限，但多项关键修复与新功能已提交 PR，正在等待合并，项目整体向 v0.8.2/v0.9.0 迈进：

*   **关键 Bug 修复**：
    *   [PR #8080](https://github.com/zeroclaw-labs/zeroclaw/pull/8080)：修复了 Agent 无法感知 `cron_add` 工具的问题，解决了 Cron 任务调度的核心痛点。
    *   [PR #8081](https://github.com/zeroclaw-labs/zeroclaw/pull/8081)：修复了 Skills 工具在 compact 模式下查找路径错误的问题。
    *   [PR #8052](https://github.com/zeroclaw-labs/zeroclaw/pull/8052)：修正了 macOS Intel 芯片预编译包的检测逻辑，扩大了硬件支持范围。

*   **架构与功能演进**：
    *   [PR #7763](https://github.com/zeroclaw-labs/zeroclaw/pull/7763)：提交了 A2A (Agent-to-Agent) 发现层，标志着多智能体协作能力的重大突破。
    *   [PR #8033](https://github.com/zeroclaw-labs/zeroclaw/pull/8033)：引入了对话式 `onboard` 助手，极大降低了新用户的上手门槛。
    *   [PR #7945](https://github.com/zeroclaw-labs/zeroclaw/pull/7945)：增加了 xAI OAuth 登录支持，丰富了认证体系。

## 4. 社区热点
今日讨论最热烈的 Issues 集中在 Agent 的自主能力与系统可用性：

*   **[Issue #5849 [Feature]: Dream Mode](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)** (评论: 18)
    *   **诉求**：社区热切期盼“梦境模式”，希望 Agent 能在空闲时进行记忆整合与反思学习。这反映了用户对 AI 从“被动响应”向“主动进化”的期待。
*   **[Issue #5862 [Bug]: zeroclaw does not know it can add cron](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)** (评论: 13)
    *   **诉求**：Agent 意识不到自身具备定时任务能力，属于典型的工具调用闭环失败。已有 PR (#8080) 尝试修复。
*   **[Issue #6808 RFC: Work Lanes](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** (评论: 11)
    *   **诉求**：关于项目治理流程的讨论，旨在通过自动化标签和泳道优化维护者处理 Issue 的效率，反映了项目管理的成熟化。

## 5. Bug 与稳定性
今日报告了若干高风险问题，部分已有修复方案：

*   **S0 - 数据丢失/安全风险**：
    *   [Issue #6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672)：Xiaomi thinking mode models 下 `reasoning_content` 未传递，导致推理循环中断。目前状态为 `Blocked`，需作者提供复现信息。
*   **S1 - 工作流阻塞**：
    *   [Issue #6036](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) [CLOSED]：Android/Termux 环境下 Agent 陷入无限工具调用循环。
    *   [Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)：默认 32k 上下文预算在首轮迭代即被系统提示词和工具定义撑爆，导致内存崩溃。这是一个严重的默认配置问题。
*   **S2 - 降级体验**：
    *   [Issue #8047](https://github.com/zeroclaw-labs/zeroclaw/issues/8047)：Skills 读取路径错误。**已有修复 PR [#8081](https://github.com/zeroclaw-labs/zeroclaw/pull/8081)**。

## 6. 功能请求与路线图信号
根据 Issue 标签与活跃度，以下功能可能被纳入近期版本：

*   **安全架构**：[Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) OIDC 认证支持已被标记为 `v0.9.0` 目标，属于高优先级任务。
*   **本地开发体验**：[Issue #5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) 提出的 LSP 支持已作为 RFC 被接受，旨在减少代码生成的幻觉，提升开发者体验。
*   **可观测性**：[Issue #7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) 关于 OTel Trace Correlation 的 RFC 也已接受，将极大增强 Agent 调试能力。
*   **Docker 集成**：[Issue #7950](https://github.com/zeroclaw-labs/zeroclaw/issues/7950) 建议在 Docker 镜像中内置文档，解决 Agent 自我认知缺失的问题。

## 7. 用户反馈摘要
从 Issues 评论中提炼出以下痛点：

*   **认知偏差**：用户指出 Agent 对自身配置缺乏感知（如不知道自己能用 Cron，不知道自己的文档在哪里）。
*   **内存管理**：高频反馈 Agent 对记忆的权重过高，导致在处理即时任务（特别是 Cron 任务）时表现呆板，忽略了当前 Prompt 的意图 ([#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844))。
*   **上下文管理**：默认配置在复杂场景下容易崩溃（如 32k 预算不足），用户希望有更智能的自动裁剪或配置建议。
*   **平台兼容性**：Termux/Android 和特定模型（如 Qwen, Xiaomi）的兼容性问题依然是社区反馈的重灾区。

## 8. 待处理积压
以下重要 Issue 长期处于 `Blocked` 或 `Needs-Author-Action` 状态，建议维护者关注：

*   **[Issue #6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672)**：涉及特定模型推理丢失的问题，目前因缺少复现信息而受阻，可能影响大量使用兼容 API 的用户。
*   **[Issue #6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558)**：Provider 报错问题，同样受阻，影响 Qwen 等主流模型的使用。
*   **[Issue #5849] (Dream Mode)**：作为高关注度功能，目前状态为 `In-progress`，建议尽快同步开发进度或拆解任务以保持社区信心。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-21)

## 1. 今日速览
Hermes Agent 项目今日维持高热度开发态势，过去 24 小时内 Issues 与 PR 活跃度均达到 50 条，显示出社区与核心团队的高频互动。虽然今日无新版本发布，但核心开发者集中修复了多个影响用户体验的关键 Bug，尤其是围绕“上下文压缩”引发的数据丢失和状态异常进行了大规模修复。目前项目重心倾向于稳定性维护与跨平台兼容性优化，但 Token 消耗过高的问题仍是用户最大的痛点之一。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 25 个 PR 被合并或关闭，主要集中在修复上下文压缩机制引发的数据一致性问题及桌面端功能增强：

*   **核心修复 - 上下文压缩机制**：
    *   PR #48369 修复了压缩导致 `/goal` 状态丢失的问题，确保目标状态能在会话血统中正确继承。
    *   PR #49925 修复了网关会话自动压缩时可能导致原始对话记录丢失的严重 Bug (P1)。
    *   PR #48371 修复了在开启新对话时未停止旧会话后台进程的问题，防止资源泄漏。
*   **桌面端增强**：
    *   PR #48370 为桌面端增加了 Goal 状态显示与控制功能，提升了可视化交互体验。
    *   PR #49921 修复了飞书网关的配置加载问题。
*   **依赖更新**：多个 JS 依赖（webpack-dev-server, dompurify 等）完成了例行安全更新。

## 4. 社区热点
今日讨论最热烈的问题集中在性能开销与平台稳定性：

*   **[Issue #4379](https://github.com/NousResearch/hermes-agent/issues/4379)**: **Token 开销分析**。
    *   **热度**：15 条评论。
    *   **分析**：用户通过自建监控面板发现，每次 API 调用竟有约 73% (13.9K tokens) 的固定开销。这引发了关于默认 Prompt 是否过于臃肿的热烈讨论，直接关系到用户的 API 使用成本。
*   **[Issue #13983](https://github.com/NousResearch/hermes-agent/issues/13983)**: **默认消耗过高**。
    *   **热度**：5 条评论。
    *   **分析**：用户反馈简单的 "who u?" 提示词竟然消耗超过 16K tokens，与上述 Issue 呼应，表明 v0.6.0 之后的版本可能存在默认 System Prompt 过长或注入不当的问题。
*   **[Issue #41190](https://github.com/NousResearch/hermes-agent/issues/41190)**: **统一插件路由选择器**。
    *   **热度**：5 条评论。
    *   **分析**：开发者希望有一个统一的 Hook 来干预 LLM 提供商的选择，目前碎片化的路由逻辑限制了插件的灵活性。

## 5. Bug 与稳定性
今日报告了多个严重影响使用的 Bug，其中 Windows 平台和桌面端问题尤为突出：

*   **P1 - 桌面端 UI 假死**：
    *   [Issue #49903](https://github.com/NousResearch/hermes-agent/issues/49903): v0.17.0 桌面端报错 "Composer is not available"，导致输入框无响应。
    *   [Issue #49920](https://github.com/NousResearch/hermes-agent/issues/49920): Windows 更新后卡在 CONNECTING 界面，原因是 NODE_ENV 注入错误导致依赖安装失败。
*   **P1 - 内存/连接泄漏**：
    *   [Issue #31599](https://github.com/NousResearch/hermes-agent/issues/31599): Telegram 适配器在使用 HTTP 代理时发生连接泄漏，运行约 2 天后耗尽文件句柄导致崩溃。
*   **P2 - Windows 平台兼容性**：
    *   [Issue #49937](https://github.com/NousResearch/hermes-agent/issues/49937): OpenAI-codex 提供商在 Windows 上初始化失败。
    *   [Issue #49014](https://github.com/NousResearch/hermes-agent/issues/49014): `truststore` 库在 Windows 上引发 `NotImplementedError`。该问题已有修复 PR [PR #49945](https://github.com/NousResearch/hermes-agent/pull/49945) 提交。
*   **P2 - 功能损坏**：
    *   [Issue #49747](https://github.com/NousResearch/hermes-agent/issues/49747): Docker 版本 v2026.6.5 之后 TTS Edge 功能失效。

## 6. 功能请求与路线图信号
*   **国际化支持**：[Issue #37543](https://github.com/NousResearch/hermes-agent/issues/37543) 请求支持中文等多语言界面，目前 UI 字符串硬编码为英文。
*   **跨平台会话共享**：[Issue #4335](https://github.com/NousResearch/hermes-agent/issues/4335) 请求实现 CLI 与 Telegram 等不同网关间的会话上下文共享，目前各平台会话处于隔离状态。
*   **桌面端 Cron 增强**：[PR #49948](https://github.com/NousResearch/hermes-agent/pull/49948) 正在推进桌面端 Cron 任务的提供商与模型选择器功能，有望近期合入。

## 7. 用户反馈摘要
*   **成本焦虑**：用户对高达 13K+ 的默认 Token 消耗表示震惊和不满，认为这极大增加了测试和使用成本。
*   **压缩功能可靠性存疑**：多个反馈指出上下文压缩功能虽好，但经常伴随消息丢失、状态（如 Goal）重置等副作用，导致长期对话体验受损。
*   **Windows 支持薄弱**：多位用户反馈在 Windows 环境下遇到 SSL 错误、环境变量失效等问题，提示项目在 Windows 端的测试覆盖率可能不足。
*   **Docker 体验问题**：有用户指出 Docker 镜像中 lazy install 机制失效，导致启动极慢或功能缺失。

## 8. 待处理积压
*   **[Issue #4379](https://github.com/NousResearch/hermes-agent/issues/4379)**: Token 开销过高问题。虽然标记为 P3，但涉及核心成本，建议维护者重视并给出解释或优化路线图。
*   **[Issue #31599](https://github.com/NousResearch/hermes-agent/issues/31599)**: Telegram 网关连接泄漏。P1 级别但未关闭，长期运行的服务稳定性受威胁，需尽快修复。
*   **[Issue #41190](https://github.com/NousResearch/hermes-agent/issues/41190)**: 插件路由 Hook。作为架构层面的改进，对生态扩展至关重要，目前尚未有官方回应。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-21)

## 1. 今日速览
PicoClaw 项目今日维持常态化更新节奏，发布了最新的 `v0.3.0-nightly` 自动构建版本，表明开发主线正在向 v0.3.0 版本迭代。过去 24 小时内，项目未见 PR 合并或 Issue 关闭，但在社区讨论方面保持活跃，共有 2 个 Issue 更新和 1 个 PR 更新。社区焦点主要集中在 Evolution 功能的资源消耗问题以及 WebSocket 协议的交互完善上，整体活跃度平稳，但代码合并进度略显缓慢。

## 2. 版本发布
- **版本号**: `nightly` (Nightly Build)
- **Tag**: `v0.3.0-nightly.20260621.287853ab`
- **更新说明**: 
  - 这是针对 `main` 分支的自动化构建版本。
  - **注意事项**: 官方提示该版本可能不稳定，建议开发者谨慎使用。
  - **变更范围**: 对比 `v0.3.0` 与 `main` 分支的提交记录，包含了最新的开发进展。
- **链接**: [GitHub Release](https://github.com/sipeed/picoclaw/releases/tag/nightly)

## 3. 项目进展
今日无合并的 PR 或关闭的 Issue，项目在代码层面无实质性推进。

- **待处理 PR**: 
  - [#2964 Feat/image input compression](https://github.com/sipeed/picoclaw/pull/2964): 该 PR 旨在引入可配置的入站图像压缩功能，以优化 Vision Pipeline 的处理效率。目前状态仍为 `Open`，未见最新评论互动，处于停滞审查阶段。

## 4. 社区热点
今日社区讨论主要围绕功能完善与资源管理展开，尚未有高互动量的争吵或突发热点，属于典型的技术探讨阶段。

- **[[BUG] Continuous consumption of tokens every minutes when evolution is enabled](https://github.com/sipeed/picoclaw/issues/3012)** (评论: 4)
  - **热度分析**: 该 Issue 涉及 Evolution 模式下的异常 Token 消耗，直接影响用户的使用成本，引发了较高的关注和讨论。用户在使用特定配置（Draft 模式）下复现了该问题，表明核心功能可能存在资源泄漏或逻辑死循环。
- **[[Feature][Protocol] Add explicit turn completion signal for Pico WebSocket clients](https://github.com/sipeed/picoclaw/issues/2984)** (评论: 3 | 👍: 2)
  - **热度分析**: 该提案旨在解决 WebSocket 客户端无法准确判断 Agent 处理结束状态的问题。获得了 2 个点赞，显示出外部协议开发者对确定性交互信号的强烈需求，这是提升 API 易用性的关键信号。

## 5. Bug 与稳定性
今日报告的 Bug 集中在资源消耗方面，暂无崩溃类报告。

- **🔴 高优先级**: **[BUG] Continuous consumption of tokens every minutes when evolution is enabled** ([#3012](https://github.com/sipeed/picoclaw/issues/3012))
  - **严重程度**: 中高。涉及实际经济成本（Token 消耗）。
  - **详情**: 用户报告在 FreeBSD 环境下，启用 Evolution 且设置为 Draft 模式时，系统每分钟持续消耗 Token，不符合预期的空闲或等待行为。
  - **状态**: 目前仍为 `Open`，暂无关联的 Fix PR。建议维护者优先排查是否存在后台轮询或未正确释放的上下文逻辑。

## 6. 功能请求与路线图信号
根据 Issue 与 PR 动态，社区正在推动以下功能落地：

- **协议增强**: Issue [#2984](https://github.com/sipeed/picoclaw/issues/2984) 提出了明确的 "turn completion" 信号需求。这暗示 PicoClaw 正在被更多集成商用于复杂的异步交互场景，当前的 WebSocket 事件流模型可能无法满足长连接下的状态同步需求。该功能极有可能被纳入后续版本更新。
- **性能优化**: PR [#2964](https://github.com/sipeed/picoclaw/pull/2964) 提出的图像压缩功能，表明项目正在优化多模态输入的处理能力，旨在降低带宽占用和模型推理开销，这是提升本地部署体验的重要一环。

## 7. 用户反馈摘要
- **痛点**: Evolution 模式下的非预期 Token 消耗让用户感到担忧，特别是涉及成本控制的生产环境场景。
- **场景**: 用户尝试将 PicoClaw 用于自动化草稿生成（Draft Mode），但在空闲状态下出现了异常行为。
- **环境**: 报告用户主要使用 FreeBSD 系统，并搭配 MiniMax 模型，显示项目在非主流 OS 和多模型适配上有一定的用户基础。

## 8. 待处理积压
以下议题虽有近期互动但尚未解决，存在积压风险，建议维护者关注：

- **PR [#2964](https://github.com/sipeed/picoclaw/pull/2964)**: 该 PR 创建于 2026-05-28，至今已近一个月未合并。作为提升多模态处理效率的关键 PR，长期未合并可能影响后续版本功能的完整性测试。
- **Issue [#3012](https://github.com/sipeed/picoclaw/issues/3012)**: 关于 Evolution 模式 Token 消耗的 Bug，虽创建于 6 月初，但近期有持续评论更新。鉴于其涉及成本问题，建议尽快响应以避免用户流失。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-21)

## 1. 今日速览
NanoClaw 项目今日呈现显著的“高提交、低合并”态势，社区贡献活跃度激增但维护端吞吐量不足。过去24小时内新增/更新了 **6 个 Pull Requests**，主要涵盖关键安全修复、架构重构及文档完善，然而 **合并数为 0**，导致审核积压风险上升。Issue 方面仅有 1 条活跃更新，重点指向了 AI 模型调用的成本优化问题。整体来看，项目正处于代码质量优化与安全加固的关键阶段，急需维护者处理积压的 PR 以推进版本迭代。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日无合并记录，代码库无实质性向前落地。但待合并队列中包含多项关键改进，预示下一版本可能迎来重要更新：

*   **安全修复**: PR [#2799](https://github.com/nanocoai/nanoclaw/pull/2799) 修复了 `send_file` 接口的路径遍历漏洞，将文件读取权限严格限制在 `/workspace` 目录下，防止了潜在的敏感文件泄露风险。
*   **架构清理**: PR [#2824](https://github.com/nanocoai/nanoclaw/pull/2824)、[#2823](https://github.com/nanocoai/nanoclaw/pull/2823) 和 [#2822](https://github.com/nanocoai/nanoclaw/pull/2822) 形成了一套组合拳，旨在清除过时的 "Global Memory" 指令、无效的挂载点及相关死代码。这表明项目正在剥离遗留架构，向更轻量、更现代的 Agent 上下文管理方式迁移。
*   **稳定性增强**: PR [#2801](https://github.com/nanocoai/nanoclaw/pull/2801) 修复了 JSON 解析的边缘情况，增强了路由层对非对象类型 JSON 数据的容错能力。

## 4. 社区热点
今日讨论最活跃的议题是 Issue **[#2768 Enable prompt caching by default in Claude provider](https://github.com/nanocoai/nanoclaw/issues/2768)**。

*   **核心诉求**：用户指出当前 Claude provider 默认未开启 Prompt Caching，导致每轮对话都需要重新发送完整的 System Prompt，不仅增加了延迟，还显著提高了 API 调用成本。
*   **分析**：随着 Token 经济学和长上下文模型的普及，用户对推理成本和效率极其敏感。该 Issue 反映了 NanoClaw 在集成 LLM Provider 时存在默认配置不够优化的问题，社区正强烈呼吁将“性能/成本优化”作为默认选项。

## 5. Bug 与稳定性
今日报告的安全与稳定性问题较为严峻，主要集中在底层容器的安全性与数据解析健壮性：

*   **[严重] CVE-2026-29611 路径遍历漏洞**：
    *   **问题**：`send_file` 函数未校验路径根目录，允许 Agent 读取容器内任意文件（如凭证信息）。
    *   **状态**：已有 Fix PR [#2799](https://github.com/nanocoai/nanoclaw/pull/2799)，待合并。
*   **[中等] JSON 解析异常导致字段丢失**：
    *   **问题**：`safeParseContent` 在解析原始类型 JSON（如字符串、数字）时返回非对象结果，导致后续调用 `.text` 等属性失败。
    *   **状态**：已有 Fix PR [#2801](https://github.com/nanocoai/nanoclaw/pull/2801)，待合并。
*   **[低] 遗留文件残留问题**：
    *   **问题**：`groups/global/CLAUDE.md` 文件在宿主机启动时会被删除，但在镜像中依然存在，造成逻辑冗余。
    *   **状态**：已有 Fix PR [#2823](https://github.com/nanocoai/nanoclaw/pull/2823)，待合并。

## 6. 功能请求与路线图信号
*   **Prompt Caching 默认化**：基于 Issue [#2768](https://github.com/nanocoai/nanoclaw/issues/2768)，预计未来版本将默认开启 Anthropic SDK 的 Prompt Caching 功能。这标志着项目将更加注重生产环境下的成本控制。
*   **配置透明化**：PR [#2821](https://github.com/nanocoai/nanoclaw/pull/2821) 补充了 `assistant-name` 环境变量的文档，显示出项目正致力于改善部署配置的可观测性与易用性。
*   **架构瘦身**：多笔关于移除 "Global Memory" 和死代码的 PR 显示，项目正试图简化 Agent 的上下文注入逻辑，减少无效 Token 消耗，这与 Issue #2768 的诉求在底层逻辑上是一致的。

## 7. 用户反馈摘要
从 Issue [#2768](https://github.com/nanocoai/nanoclaw/issues/2768) 的反馈来看，用户痛点主要集中在**隐性成本**上。用户在实际生产中发现，对于具有丰富上下文的 Agent，未开启 Prompt Caching 导致的费用激增是不可接受的。这表明 NanoClaw 的企业级用户已越过“功能可用”阶段，进入了“成本与性能优化”阶段。

## 8. 待处理积压
当前积压主要集中在 PR 队列，维护者需尽快介入 Review：

1.  **安全优先级 PR [#2799](https://github.com/nanocoai/nanoclaw/pull/2799)**：涉及 CVE 漏洞修复，建议立即合并并发布补丁版本。
2.  **架构重构系列 PRs**：[#2822](https://github.com/nanocoai/nanoclaw/pull/2822)、[#2823](https://github.com/nanocoai/nanoclaw/pull/2823)、[#2824](https://github.com/nanocoai/nanoclaw/pull/2824) 相互关联，建议集中 Review 后合并，以完成架构清理。
3.  **长期 Issue #2768**：已创建一周，目前处于 Open 状态且已有活跃讨论，建议维护者确认是否将其纳入近期开发计划。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 (2026-06-21)

## 1. 今日速览
NullClaw 项目今日整体活跃度处于低位，代码仓库无提交合并记录，未发布新版本。社区方面仅产生 1 条新增 Issue，主要涉及核心对话功能的稳定性问题。整体来看，项目处于维护平稳期，但需警惕用户反馈的模型响应解析异常问题。维护者暂无即时响应，需关注后续 Bug 确认情况。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
过去 24 小时内，项目无合并或关闭的 Pull Request。代码库未见实质性功能推进或修复提交，项目开发节奏较为平缓。

## 4. 社区热点
今日唯一的社区动态集中在 Issue [#967](https://github.com/nullclaw/nullclaw/issues/967)。
*   **诉求分析**：用户报告在使用特定模型 `Agnes-2.0-Flash` 时，频繁遭遇 `NoResponseContent` 错误，导致对话中断。该问题发生频率较高（>50%），直接影响了用户在 Windows 平台上的基本可用性。用户通过对比其他客户端（picocla...）排除了 API Key 本身的问题，将矛头指向 NullClaw 的响应解析逻辑或超时处理机制。

## 5. Bug 与稳定性
今日新增 1 个 Bug 报告，目前暂无修复 PR。

*   **[中等] NoResponseContent 错误频发**
    *   **链接**：Issue [#967](https://github.com/nullclaw/nullclaw/issues/967)
    *   **详情**：用户在 Win11 环境使用 v2026.5.29 版本时，调用 `Agnes-2.0-Flash` 模型出现高频率报错。错误日志显示响应时间长达 27 秒后抛出 `NoResponseContent`。
    *   **分析**：鉴于用户提到相同 API Key 在其他工具上正常工作，推测问题可能源于 NullClaw 对该模型非标准响应格式的兼容性不足，或网络请求超时阈值设置不当。
    *   **状态**：待确认。

## 6. 功能请求与路线图信号
今日无新增功能请求。从 Bug 报告中可间接推导出用户对**模型兼容性**及**错误提示精细化**的潜在需求。建议后续版本增强对模型返回内容的容错处理，或提供更详细的调试日志以便排查网络与模型层面的具体断点。

## 7. 用户反馈摘要
*   **痛点**：核心对话功能的稳定性是当前用户最关注的痛点。用户反馈在特定模型下错误率超过 50%，导致工具不可用。
*   **场景**：主要发生在 Windows 11 平台的命令行交互模式下。
*   **对比**：用户提及在其他类似工具中同一 API Key 工作正常，这表明用户具备一定的技术排查能力，且对 NullClaw 的稳定性表现感到失望，存在流失风险。

## 8. 待处理积压
鉴于今日仅有 1 条活跃 Issue，建议维护者优先处理 Issue [#967](https://github.com/nullclaw/nullclaw/issues/967)。该问题涉及基础对话功能且复现率高，若不及时响应，可能影响 Windows 用户对 v2026.5.29 版本的信心。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-21)

## 1. 今日速览
过去 24 小时内，IronClaw 项目展现出极高的开发活跃度，主要集中在核心架构重构与功能增强上。尽管没有发布新版本，但代码库经历了剧烈变动，共有 21 个 PR 更新，其中 9 个已合并/关闭，12 个待合并，显示项目正处于密集迭代期。今日重点包括**工作区与多租户架构的重大合并**、**通道入口架构的重构**以及**运行时并发能力的提升**。此外，自动化监测发现了一例 Nightly E2E 测试失败，需引起关注。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目整体取得了显著的技术债清理与功能迭代进展：

*   **重大架构合并 - 多工作区支持**：PR [#2548](https://github.com/nearai/ironclaw/pull/2548) 已关闭（推测已合并）。该 PR 引入了 DB 支持的工作区实体、成员管理及跨工作区共享功能，并涉及数据库迁移。这是迈向多租户架构的关键一步，显著提升了企业级部署能力。
*   **架构重构 - Manifest-Driven Ingress**：PR [#5107](https://github.com/nearai/ironclaw/pull/5107) 整合了此前四个独立的 PRs（#5103, #5106, #5102, #5104），将通道入口、认证、传输及凭证管理统一由 Manifest 定义，消除了 Rust 侧的特定代码逻辑。此举极大地提高了系统的可扩展性与维护性。
*   **Bug 修复与稳定性**：PR [#4777](https://github.com/nearai/ironclaw/pull/4777) 修复了 WebUI 中 Slack 连接状态的持久化问题，解决了重连循环的痛点；PR [#5105](https://github.com/nearai/ironclaw/pull/5105) 修复了三个安全相关的守卫测试用例，确保了安全回归检测的有效性。
*   **CI/CD 优化**：PR [#4829](https://github.com/nearai/ironclaw/pull/4829) 清理了休眠的集成测试工作流，优化了 CI 资源占用。

## 4. 社区热点
*由于当前数据源中未提供具体的评论数量（显示为 undefined），以下基于 PR 的影响范围与技术深度进行热点分析：*

*   **[核心关注] PR #5085 - 并发轮次执行**：该 PR 提议将 Reborn 运行时的轮次执行从串行改为并发，引入 `TurnRunScheduler`。这直接关系到 AI 智能体的响应速度与吞吐量，是性能优化的核心提案。
    *   链接：[nearai/ironclaw PR #5085](https://github.com/nearai/ironclaw/pull/5085)
*   **[核心关注] PR #4937 - 记忆学习系统**：引入“从错误中学习”的语义机制，旨在实现 Hermes 平权。这标志着项目正从单纯的执行引擎向具备自我进化能力的智能体平台演进。
    *   链接：[nearai/ironclaw PR #4937](https://github.com/nearai/ironclaw/pull/4937)

## 5. Bug 与稳定性
*   **🔴 严重 (CI/稳定性)**：Issue [#4108](https://github.com/nearai/ironclaw/issues/4108) 报告 Nightly E2E 测试失败。工作流 `Nightly E2E` 执行失败，涉及 commit `ac1e16f`。目前尚未有修复 PR 关联，建议优先排查 CI 日志以防回归。
    *   状态：OPEN | 作者：@github-actions[bot]
*   **🟡 中等 (安全/功能)**：PR [#5108](https://github.com/nearai/ironclaw/pull/5108) 正在修复 `reborn-closure` CI 运行中暴露的三个失败用例，涉及 GitHub tool 权限过度暴露等安全问题。
    *   状态：OPEN | 已有 Fix PR

## 6. 功能请求与路线图信号
今日的 PR 动态揭示了明确的路线图信号，重点在于**调度灵活性**与**集成健壮性**：

1.  **一次性触发器**：PR [#5065](https://github.com/nearai/ironclaw/pull/5065) 提出了 `TriggerSchedule::Once` 功能，允许用户设定单次定时任务。这弥补了仅支持 Cron 循环任务的短板，预计将很快合并。
2.  **OAuth 凭证长效化**：PR [#5087](https://github.com/nearai/ironclaw/pull/5087) 针对 Google OAuth 提出了主动刷新机制，解决了凭证过期需要手动重连的问题，极大改善了用户体验。
3.  **托管部署支持**：PR [#5081](https://github.com/nearai/ironclaw/pull/5081) 添加了单租户 PostgreSQL 配置文件，预示着项目正在为官方托管服务做准备。

## 7. 用户反馈摘要
*   **Slack 集成痛点**：从 PR #4777 的修复内容推断，此前用户在 WebUI 使用 Slack 集成时，可能频繁遇到“连接状态显示不准确”或“反复重连”的问题。该修复将显著改善多渠道智能体的稳定性体验。
*   **自动化反馈**：Issue #4108 完全由 Bot 生成，表明项目的质量门禁主要依赖自动化监控，暂无显性的普通用户功能请求反馈。

## 8. 待处理积压
*   **依赖更新停滞**：PR [#4002](https://github.com/nearai/ironclaw/pull/4002) (Dependabot 自动更新 16 个 Actions 依赖) 创建于 5 月 24 日，至今仍未合并。考虑到涉及 CI 流程，建议维护者尽快审查以消除潜在的安全风险。
*   **大型功能 PR 待审查**：PR [#4765](https://github.com/nearai/ironclaw/pull/4765) (修复子智能体内联提示预算) 已开启约 10 天，涉及核心通信逻辑，建议推进合并或跟进讨论。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-21)

## 1. 今日速览
LobsterAI 项目今日整体活跃度处于**低位运行**状态，主要表现为仓库维护性质的清理工作。过去 24 小时内，项目**未产生新的代码提交、PR 合并或版本发布**，开发侧无明显进展。社区交互方面，**无新开 Issue**，但集中关闭了 5 个长期未活跃的旧 Issue。这表明项目目前处于功能迭代停滞或维护模式，重点在于清理积压的不活跃反馈，而非解决具体技术问题或推进新特性。

## 2. 版本发布
无。

## 3. 项目进展
今日无合并的 PR 或功能更新。项目在代码层面无明显推进。
维护工作的重点在于**议题清理**：一次性关闭了 5 个标记为 `[stale]` 的历史 Issue。虽然这减少了仓库的 Open Issue 数量，但这些 Issue 均因长期未获响应而被自动/手动关闭，并非因问题已修复，反映出项目对社区反馈的响应存在滞后或资源不足的情况。

## 4. 社区热点
由于今日无新开议题且关闭的议题均为长期沉寂的历史遗留问题，社区缺乏实时热点讨论。但从关闭的 Issue 内容来看，**用户体验（UX）缺陷**是用户反复提及的痛点：

*   **数据静默丢失问题**：共有 3 个 Issue（#1468, #1469, #1470）涉及此问题，主要发生在 Agent 创建、设置及 MCP 配置界面。用户反馈在未点击保存的情况下关闭弹窗，已填写内容会直接丢失，无二次确认。
*   **任务执行稳定性**：Issue #1495 和 #1496 涉及任务中断或无返回结果，直接影响了用户对 AI 智能体执行能力的信任度。

**相关链接：**
*   [Issue #1468 - Agent创建弹窗关闭丢失数据](https://github.com/netease-youdao/LobsterAI/issues/1468)
*   [Issue #1469 - Agent设置面板关闭丢失数据](https://github.com/netease-youdao/LobsterAI/issues/1469)
*   [Issue #1495 - 进程中断问题](https://github.com/netease-youdao/LobsterAI/issues/1495)

## 5. Bug 与稳定性
今日无新报告 Bug。关闭的历史 Bug 多为中高优先级的体验或稳定性问题，目前**均无对应的 Fix PR**，仅因长期未响应而被关闭。

*   **[严重] 任务执行异常**：
    *   [Issue #1496](https://github.com/netease-youdao/LobsterAI/issues/1496)：任务显示完成但无返回结果，影响核心功能可用性。
    *   [Issue #1495](https://github.com/netease-youdao/LobsterAI/issues/1495)：进程无故中断，涉及客户端或大模型服务稳定性。
*   **[中等] 用户体验缺陷（数据丢失风险）**：
    *   [Issue #1468](https://github.com/netease-youdao/LobsterAI/issues/1468)、[Issue #1469](https://github.com/netease-youdao/LobsterAI/issues/1469)、[Issue #1470](https://github.com/netease-youdao/LobsterAI/issues/1470)：多处弹窗/面板关闭时缺乏未保存确认机制，导致用户配置静默丢失。

## 6. 功能请求与路线图信号
今日无新功能请求。被关闭的 Issue 中未包含未被实现的新功能提案，均为已有功能的缺陷反馈。由于缺乏近期 PR 活动，无法判断下一版本的迭代方向。

## 7. 用户反馈摘要
从今日关闭的历史 Issue 中可以提炼出用户长期存在的痛点：

1.  **交互安全感缺失**：用户对“静默丢失配置”非常反感，尤其是在填写复杂的 System Prompt 或环境变量时，期望有标准的“放弃更改？”确认弹窗。
2.  **运行稳定性焦虑**：用户难以区分问题是源于本地客户端还是后端大模型服务（如 #1495 所述），这表明客户端的错误提示机制不够完善，需要更透明的状态反馈。

## 8. 待处理积压
今日虽关闭了 5 个积压 Issue，但这种“因不活跃而关闭”的处理方式可能导致有效 Bug 线索流失。建议维护者关注以下问题是否真的已在后续版本中解决，而非仅标记为 Stale：

*   **[需确认] 表单交互规范**：Agent/MCP 配置界面的“未保存提示”功能是否已在近期版本补齐？若无，建议重新开启或纳入追踪。
*   **[需确认] 核心执行流**：任务中断和无返回结果（#1495, #1496）属于核心体验问题，建议在关闭后提供已知解决方案或 FAQ 链接，避免用户重复反馈。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-06-21)

## 1. 今日速览
今日 Moltis 项目整体活跃度较低，处于平稳维护状态。过去24小时内未收到新的用户 Issue 反馈或功能请求，也无新版本发布。项目动态完全由依赖管理机器人驱动，主要涉及文档站点与网站前端依赖的安全性与版本更新。整体来看，代码库核心逻辑未变，项目健康度保持稳定，建议关注待合并的依赖更新 PR 以确保安全性。

## 2. 版本发布
无。

## 3. 项目进展
今日项目的主要进展集中在依赖治理与安全性维护方面，核心业务逻辑未发生变更。

*   **依赖更新优化**：项目关闭了 PR [#1133](https://github.com/moltis-org/moltis/pull/1133)，该 PR 仅针对 `/docs` 目录进行了 `astro` 的升级。分析推测其关闭原因是为了采纳覆盖面更广的解决方案。
*   **跨目录依赖升级**：开启了 PR [#1134](https://github.com/moltis-org/moltis/pull/1134)，该 PR 扩大了更新范围，一次性解决了 `/docs` 和 `/website` 两个目录的依赖问题。具体包括：
    *   `/docs` 目录：将 `astro` 从 6.3.3 升级至 6.4.8。
    *   `/website` 目录：更新了 `undici` 依赖。
    *   **意义**：此举提升了项目前端基础设施的安全性，修复了潜在漏洞，并保持了技术栈的现代化。

## 4. 社区热点
过去24小时内社区讨论平静，无新增人工评论或热点议题。唯一的活跃记录为自动化机器人提交的依赖更新请求：
*   **Pull Request**: [#1134 [OPEN] chore(deps): bump the npm_and_yarn group across 2 directories](https://github.com/moltis-org/moltis/pull/1134)

## 5. Bug 与稳定性
过去24小时内无新增 Bug 报告、崩溃或回归问题。

## 6. 功能请求与路线图信号
过去24小时内无新增功能请求，暂无法提取路线图相关信号。

## 7. 用户反馈摘要
过去24小时内无用户评论或 Issue 反馈，暂无可提炼的用户痛点或满意度信息。

## 8. 待处理积压
*   **PR #1134 待合并**：由 Dependabot 提交的跨目录依赖更新 PR 目前处于 **Open** 状态。该 PR 涉及安全相关依赖（`undici` 和 `astro`）的更新，建议维护者尽快审核并合并，以规避潜在的安全风险。
    *   链接：[moltis-org/moltis PR #1134](https://github.com/moltis-org/moltis/pull/1134)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-06-21)

## 1. 今日速览
项目今日保持高活跃度，社区反馈热烈，共产生 13 条 Issue 更新与 17 条 PR 更新。尽管开发侧贡献了 16 个待合并的新 PR，但**合并进度严重滞后**，过去 24 小时内仅关闭了 1 个 PR（且为未合并状态），无新版本发布。社区焦点集中在 **DeepSeek 模型兼容性**（思维链卡死）和 **移动端 UI 适配** 上，核心维护者正在积极处理 API 静默丢包和模型连接测试等关键 Bug。

## 2. 版本发布
**无新版本发布。**
当前项目可能正处于代码积压阶段，大量 Fix 和 Feature PR 处于待合并状态，建议维护者尽快进行 Code Review 和合并，以便发布修复版本。

## 3. 项目进展
今日项目在功能增强和 Bug 修复方面有大量代码提交，但均未合并，处于 Pending 状态。

*   **已关闭/拒绝 PR (1条)**：
    *   [#5128](https://github.com/agentscope-ai/QwenPaw/pull/5128) `[CLOSED]` 尝试将 Langfuse observations 按 agent loop 分组。该 PR 被关闭，未合并，可能由于方案变更或不符合架构规划。

*   **待合并的关键 PR (部分精选)**：
    *   **核心修复**：[#5335](https://github.com/agentscope-ai/QwenPaw/pull/5335) 修复 Agent 异常时 UI 假死问题（对应 Issue #5333）。
    *   **功能增强**：[#5331](https://github.com/agentscope-ai/QwenPaw/pull/5331) 实现实时 SSE 推送消息与语音提示音（对应 Issue #5322）。
    *   **用户体验**：[#5334](https://github.com/agentscope-ai/QwenPaw/pull/5334) 支持侧边栏折叠模式下的 Agent 切换（对应 Issue #5329）。
    *   **供应商适配**：[#5339](https://github.com/agentscope-ai/QwenPaw/pull/5339) 修复智谱 AI (Zhipu) 模型连接测试失败问题（对应 Issue #5330）。

## 4. 社区热点
今日社区讨论主要集中在模型兼容性和移动端适配上：

1.  **DeepSeek 兼容性问题 ([#5328](https://github.com/agentscope-ai/QwenPaw/issues/5328))**：
    用户反馈在使用 DeepSeek 模型时，Agent 经常在 Thinking 过程中卡死，需手动停止才能恢复。该问题在 Web、Console 和 Tauri 端均有复现，是当前影响体验的最大痛点。
    *   *现状*：已有讨论，暂无明确修复 PR 链接，可能与流式响应处理有关。

2.  **移动端 UI 缺陷 ([#5329](https://github.com/agentscope-ai/QwenPaw/issues/5329))**：
    手机浏览器访问时，侧边栏进入简洁模式后无法切换 Agent，且新建聊天按钮被挤出屏幕。
    *   *进展*：PR [#5334](https://github.com/agentscope-ai/QwenPaw/pull/5334) 已提交修复，等待合并。

3.  **API 消息静默丢弃 ([#5344](https://github.com/agentscope-ai/QwenPaw/issues/5344))**：
    用户报告当 Agent 忙时，通过 API 发送的消息虽然返回 200，但实际上被静默丢弃，导致消息丢失。

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及稳定性与兼容性，按严重程度排序如下：

*   **🔴 严重**:
    *   **API 消息静默丢失 ([#5344](https://github.com/agentscope-ai/QwenPaw/issues/5344))**：Agent 忙碌时 API 返回 200 但丢弃消息。严重影响多 Agent 协作或外部调用场景。
    *   **UI 执行态卡死 ([#5333](https://github.com/agentscope-ai/QwenPaw/issues/5333))**：提交指令后 Agent 无反应，输入框却显示可提交状态。已有 PR [#5335](https://github.com/agentscope-ai/QwenPaw/pull/5335) 待合并。

*   **🟠 中等**:
    *   **Zhipu 模型连接失败 ([#5330](https://github.com/agentscope-ai/QwenPaw/issues/5330))**：供应商级测试通过，但模型级测试失败。已有 PR [#5339](https://github.com/agentscope-ai/QwenPaw/pull/5339) 待合并。
    *   **自定义 OpenAI Provider 不支持 Function Calling ([#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345))**：限制了第三方模型供应商的接入能力。
    *   **DeepSeek Thinking 卡死 ([#5328](https://github.com/agentscope-ai/QwenPaw/issues/5328))**：特定模型推理过程中的稳定性问题。

## 6. 功能请求与路线图信号
用户对移动端和多 Agent 交互提出了明确需求：

*   **移动端体验优化**：Issue [#5329](https://github.com/agentscope-ai/QwenPaw/issues/5329) 提出的侧边栏 Agent 切换功能，对应的 PR [#5334](https://github.com/agentscope-ai/QwenPaw/pull/5334) 已提交，极有可能在下个版本合并。
*   **多 Agent 交互增强**：Issue [#5327](https://github.com/agentscope-ai/QwenPaw/issues/5327) 请求在“智能体办公室”页面增加直接对话入口，这表明用户对 Multi-Agent 管理的便捷性有较高需求。
*   **上下文与缓存优化**：PR [#5348](https://github.com/agentscope-ai/QwenPaw/pull/5348) 提出冻结 `env_context` 日期以保持 KV Cache 前缀稳定，这是一个性能优化的深层改进，值得关注。

## 7. 用户反馈摘要
*   **痛点**：移动端适配较差，操作不便；DeepSeek 等推理模型在 Thinking 阶段容易卡死，稳定性不足；部分用户对“静默失败”（API 200 但未执行）表示担忧。
*   **场景**：用户通过手机浏览器连接后端进行远程控制；用户接入自定义 OpenAI 兼容提供商（如 OMLX）以替代官方模型。
*   **正面**：社区贡献者活跃，针对 UI 卡死和连接测试问题迅速提出了 PR 修复方案。

## 8. 待处理积压
当前项目存在明显的 **Review 积压**，建议维护者优先处理：

*   **PR 积压风险**：共有 **16 个待合并 PR**，其中包含多个关键 Bug 修复（如 UI 卡死、Zhipu 连接失败）。建议尽快合并以发布热修复版本。
*   **长期未解决**：
    *   Issue [#5328](https://github.com/agentscope-ai/QwenPaw/issues/5328) (DeepSeek Thinking 卡死) 尚无明确修复方案，需要深入排查流式处理逻辑。
    *   Issue [#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) (自定义 Provider Function Calling 支持) 属于架构级需求，可能需要较大改动。

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