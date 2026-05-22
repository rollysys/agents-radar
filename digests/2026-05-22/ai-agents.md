# OpenClaw 生态日报 2026-05-22

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-22 03:55 UTC

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

# OpenClaw 项目动态日报 (2026-05-22)

## 1. 今日速览

OpenClaw 项目今日保持**极高活跃度**，过去 24 小时内 Issues 和 PRs 更新量均达到 500 条，显示社区参与热情高涨。项目今日发布了 **v2026.5.20** 正式版与 beta 版，核心聚焦于安全性与执行权限控制的收紧，移除了旧版 Skill 文件加载的兼容路径。与此同时，社区讨论集中在会话稳定性、Context 消耗优化以及多平台支持（如 Android APK）上，反映出用户对生产环境可靠性和成本控制的高度关注。

## 2. 版本发布

**新版本：v2026.5.20**
*   **发布时间**：2026-05-22
*   **核心变更**：
    1.  **安全性升级**：移除了旧的 `cat SKILL.md && printf ... && <skill-wrapper>` 白名单兼容路径。现在 Skill 文件必须通过 `read` 工具加载，且只有真实的 Skill 可执行文件会被自动允许。这一变更强制了更严格的权限边界，防止潜在的命令注入风险。
    2.  **Discord 功能增强**：语音会话现在可以跟随配置的 Discord 用户进入语音频道，提升了语音交互的连贯性。
*   **迁移注意**：如果用户有自定义的 Skill 脚本依赖旧式的 `cat/printf` 包装写法，升级后可能会因权限拒绝而失效，需尽快迁移至标准的 `read` 工具加载方式。

## 3. 项目进展

今日共有 **63 个 PR 被合并或关闭**，主要修复了稳定性、兼容性及用户体验问题。

*   **[已合并] fix(onboard): shorten codex detect timeout to 30s** (PR #81233)
    *   缩短了 Codex 检测的超时时间并增加了进度提示，解决了安装向导在检测阶段长时间无响应导致用户困惑的问题。
*   **[待合并] fix(channels): bypass debounce for bare abort triggers** (PR #83348)
    *   修复了“stop/abort”等中断指令被防抖机制拦截的问题，确保用户能即时停止正在运行的 Agent，提升交互安全感。
*   **[待合并] feat: add auto fast mode cutoff** (PR #85104)
    *   引入了 `fast: auto` 模式，支持在 60 秒后自动切换 Fast 模式，优化了重试任务的执行效率。
*   **[待合并] Redact tool output secrets** (PR #85196)
    *   扩展了工具输出中的密钥脱敏范围，覆盖了更多类型的 Token 和凭证，防止日志泄露敏感信息。

## 4. 社区热点

今日讨论最活跃的 Issues 集中在平台支持、性能优化和安全性增强三个方面：

*   **[#9443 Request: Prebuilt Android APK releases](https://github.com/openclaw/openclaw/issues/9443)**
    *   **热度**：24 条评论
    *   **诉求**：用户强烈希望官方提供预编译的 Android APK 下载，而非仅提供源码。这反映了 OpenClaw 在移动端作为“随身助手”的强大需求，目前部署门槛过高是主要阻碍。
*   **[#22438 feat: Tiered bootstrap file loading](https://github.com/openclaw/openclaw/issues/22438)**
    *   **热度**：16 条评论
    *   **诉求**：提出分层加载 Bootstrap 文件的建议，旨在解决大工作空间下 Context 消耗过快的问题。社区正在寻求一种灵活的配置方案，以平衡 Agent 能力与 Token 成本。
*   **[#12602 [Feature]: Slack Block Kit support](https://github.com/openclaw/openclaw/issues/12602)**
    *   **热度**：13 条评论
    *   **诉求**：用户希望 Agent 能返回富文本交互卡片（Block Kit），而非纯文本，以提升 Slack 集成的专业度和交互体验。

## 5. Bug 与稳定性

今日报告了多个影响生产环境的关键 Bug，主要集中在会话管理和消息丢失方面：

*   **[P1] EmbededAttemptSessionTakeoverError: session file changed** ([#84059](https://github.com/openclaw/openclaw/issues/84059))
    *   **现象**：升级到 05.18 版本后，所有嵌入式 Agent 运行均失败，报错显示会话文件在锁释放期间被修改。这是一个严重的回归问题，导致嵌入式模式不可用。
*   **[P1] Write tool lacks append mode** ([#40001](https://github.com/openclaw/openclaw/issues/40001))
    *   **现象**：Cron 任务中使用的 `write` 工具缺少追加模式，导致多会话并行写入同一文件时会互相覆盖，造成数据丢失。
*   **[P1] Telegram DMs pollute heartbeat session** ([#41165](https://github.com/openclaw/openclaw/issues/41165))
    *   **现象**：Telegram 私聊消息错误地路由到了 `agent:main:main` 会话，导致心跳消息混乱。已有 PR 正在处理相关逻辑。
*   **[Security] Agent escapes Docker sandbox** ([#83796](https://github.com/openclaw/openclaw/issues/83796))
    *   **状态**：已关闭。这是一个高风险安全漏洞，Agent 在特定沙箱配置下可逃逸到宿主机。建议用户尽快升级至最新版本修复此问题。

## 6. 功能请求与路线图信号

*   **Context 管理优化**：除了 Bootstrap 分层加载（#22438），还有关于减少 Tool Schema Token 开销的请求（#14785），每会话约消耗 3500 tokens。这表明“成本控制”将是下一阶段优化的重点。
*   **安全性增强**：
    *   [#10659 Masked Secrets](https://github.com/openclaw/openclaw/issues/10659)：请求增加“掩码密钥”系统，允许 Agent 使用 API Key 但无法查看明文，防止泄露。
    *   [#39604 Allow Private Network Access](https://github.com/openclaw/openclaw/issues/39604)：请求 `web_fetch` 工具支持配置内网访问，以满足企业内部集成场景。
*   **架构演进**：[#42026 RFC: Distributed Agent Runtime](https://github.com/openclaw/openclaw/issues/42026) 提出将控制平面与计算平面分离，预示着项目可能向分布式架构演进，以支持更高并发的企业级场景。

## 7. 用户反馈摘要

*   **痛点**：
    *   **移动端缺失**：用户对 Android APK 的呼声极高，认为目前自行编译门槛太高。
    *   **会话不稳定**：嵌入式会话接管错误（#84059）严重影响了基于 OpenClaw 构建的自动化流程可靠性。
    *   **数据覆盖**：Cron 任务中的文件覆盖问题（#40001）让依赖日志记忆的用户感到担忧。
*   **正向反馈**：
    *   社区对新版的 Discord 语音跟随功能表示欢迎。
    *   对 Slack Block Kit 等富文本支持的期待，显示用户正在将 OpenClaw 深度集成到日常办公流中。

## 8. 待处理积压

以下高优先级或高影响力的 Issue 长期未得到有效解决或合并，建议维护者优先关注：

*   **[#6731 safe/unsafe ClawdBot](https://github.com/openclaw/openclaw/issues/6731)**：建议用 Rust 重写或引入沙箱模式以防止内存泄漏和越权访问，涉及核心安全性，讨论热度高但长期未定。
*   **[#16670 Onboarding Wizard Memory Setup](https://github.com/openclaw/openclaw/issues/16670)**：初始化向导缺失 Memory/Embedding 配置步骤，导致新用户配置不完整，影响核心“记忆”功能的体验。
*   **[#7227 Security: Accessibility permissions for 'node'](https://github.com/openclaw/openclaw/issues/7227)**：macOS 上请求 Node.js 的全局辅助功能权限存在安全风险，应考虑更细粒度的权限申请方案。

---
*以上数据截至 2026-05-22 24:00 (UTC)*

---

## 横向生态对比

# AI 智能体与个人助手开源生态日报 (2026-05-22) - 横向对比分析报告

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正处于**架构升级与安全加固的关键期**。以 OpenClaw、Zeroclaw 为首的项目正加速从单一对话模型向多智能体协同架构演进，同时对执行权限和沙箱隔离进行了激进的安全收紧。社区对**生产环境可靠性**（Context 成本、会话稳定性）和**多模态/多端部署**（Android、Docker、TUI）的关注度达到新高，显示出该领域正从技术尝鲜向规模化落地过渡。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新 | Release 情况 | 健康度评估 | 核心动态关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500 | ~500 | **v2026.5.20** | ⭐⭐⭐⭐⭐ 极佳 | 安全收紧、Android诉求、会话稳定性 |
| **Zeroclaw** | 高活跃 | 高活跃 | 无 (V3架构合并) | ⭐⭐⭐⭐ 优 | 多智能体V3、TUI基建、DeepSeek-V4兼容 |
| **IronClaw** | 27 | 50 | 无 (发布阻塞) | ⭐⭐⭐ 良 | Reborn架构、Subagent重构、成本控制 |
| **CoPaw (QwenPaw)**| 27 | 31 | 无 | ⭐⭐⭐⭐ 优 | 微信/iLink修复、Gemini兼容、数据分析插件 |
| **NanoBot** | 12 | 21 | 无 | ⭐⭐⭐⭐ 优 | WebUI修复、Dream记忆优化、Novita/Skywork支持 |
| **Hermes Agent** | ~50 | ~50 | 无 | ⭐⭐⭐ 警惕 | 严重数据丢失Bug、沙箱逃逸漏洞、Whoop集成 |
| **NanoClaw** | 低 | 20 | 无 | ⭐⭐⭐ 良 | MCP生态集成、Signal/Telegram通道、Provider解耦 |
| **PicoClaw** | 7 (closed) | 10 (merged) | Nightly Build | ⭐⭐⭐⭐ 优 | 资源优化、NEAR AI支持、Telegram增强 |
| **LobsterAI** | 0 | 12 | 无 | ⭐⭐⭐ 稳 | 网关崩溃修复、IM管理重构 |
| **Moltis** | 7 | 4 | 无 | ⭐⭐⭐ 良 | Docker沙箱修复、Twilio语音、NEAR AI集成 |
| **NullClaw** | 0 | 2 | 无 | ⭐⭐⭐ 稳 | Cron子智能体、NEAR AI支持 |
| **TinyClaw/ZeptoClaw/EasyClaw** | 0 | 0 | 无 | - | 无活动 |

> *注：健康度评估综合考量了 Bug 严重程度、社区响应速度及功能迭代节奏。*

## 3. OpenClaw 在生态中的定位

作为生态内的核心参照项目，OpenClaw 展现出明显的**领军者姿态**：

*   **优势对比**：OpenClaw 的社区体量（单日更新 500+）远超其他项目总和，形成了强大的网络效应。其 v2026.5.20 版本率先在**安全性**上采取了激进策略（移除 Skill 文件兼容路径，强制 `read` 工具），这在 Hermes Agent 曝出沙箱逃逸漏洞的背景下显得尤为前瞻。
*   **技术路线差异**：相比于 Zeroclaw 和 IronClaw 专注于底层运行时架构重构（V3, Reborn），OpenClaw 目前更侧重于**生产环境可用性**（Android APK 呼声、Context 消耗优化、Slack 富文本）。它正在解决“怎么用好”的问题，而其他项目多处于“怎么跑通”或“架构怎么设计”的阶段。
*   **社区规模**：OpenClaw 已进入良性循环，用户反馈已深入至具体的部署痛点（如嵌入式会话接管错误、Cron 写入覆盖），而 NanoBot/PicoClaw 等项目尚处于基础功能修复阶段。

## 4. 共同关注的技术方向

多项目在以下技术点上呈现出高度共振，揭示了行业共性痛点：

1.  **模型中立与前沿模型支持**
    *   **涉及项目**：Zeroclaw (DeepSeek-V4 P1级Bug), NanoBot (Novita/Skywork), NanoClaw (LiteLLM/Codex), PicoClaw/Moltis/NullClaw (NEAR AI Cloud)。
    *   **趋势**：项目均在解耦对单一模型（如 Claude/GPT）的依赖，**DeepSeek-V4** 的发布引发了即时的适配潮，NEAR AI 等去中心化推理平台也开始受到关注。

2.  **安全性与权限控制**
    *   **涉及项目**：OpenClaw (移除 Skill 白名单), Hermes Agent (沙箱逃逸/数据误删), NanoBot (Shell 安全守卫), IronClaw (秘密出口框架)。
    *   **趋势**：Agent 的自主性带来了安全风险，社区正在从“放权”转向“最小权限原则”，沙箱隔离、密钥脱敏、命令审批机制成为标配。

3.  **多智能体架构与运行时重构**
    *   **涉及项目**：Zeroclaw (Multi-agent runtime V3), IronClaw (Subagent generation), NullClaw (Cron Subagent)。
    *   **趋势**：单线程对话已无法满足复杂任务，项目正竞相构建支持调度、协同、预算控制的多智能体运行时。

4.  **记忆系统与成本控制**
    *   **涉及项目**：OpenClaw (分层 Bootstrap 加载), NanoBot (Dream 系统优化), IronClaw (基于成本的预算系统)。
    *   **趋势**：Token 成本是规模化落地的最大瓶颈，社区正通过架构分层、记忆修剪、预算控制等手段寻求平衡。

## 5. 差异化定位分析

| 维度 | **OpenClaw** (生产型全能助手) | **Zeroclaw / IronClaw** (架构先锋) | **NanoBot / NanoClaw / PicoClaw** (轻量集成派) | **CoPaw / Hermes** (场景/工具导向) |
| :--- | :--- | :--- | :--- | :--- |
| **核心定位** | 企业级/个人生产环境首选 | 探索多智能体协同与分布式运行时 | 强调部署轻量化、渠道集成(MCP/Telegram) | 侧重特定渠道(微信/钉钉)或工具链深度集成 |
| **目标用户** | 开发者、极客、企业用户 | 架构师、高级开发者 | 个人开发者、轻量化部署用户 | 国内办公用户、特定平台玩家 |
| **技术架构** | 稳健单体+工具增强 | 激进微服务/Actor模型/V3架构 | 模块化、插件化、支持嵌入式 | 深度集成第三方IM协议与工具API |
| **当前痛点** | 移动端缺失、Context消耗大 | 架构重构期的不稳定性、发布阻塞 | 外部依赖治理、功能丰富度不足 | 数据安全风险(Hermes)、IM协议变动 |

## 6. 社区热度与成熟度

*   **快速迭代期 (Layer 1)**：**OpenClaw**、**Zeroclaw**、**IronClaw**。
    这类项目处于架构大改或功能爆发期，社区讨论极热，但也伴随着高风险（如 Zeroclaw 的 DeepSeek 兼容性、IronClaw 的发布阻塞、OpenClaw 的会话回归 Bug）。
*   **质量巩固期 (Layer 2)**：**NanoBot**、**CoPaw**、**PicoClaw**。
    功能框架基本成型，重心转向修复关键 Bug（WebUI 崩溃、IM 连接中断）和提升易用性，适合追求稳定的开发者。
*   **功能补全期 (Layer 3)**：**Moltis**、**LobsterAI**、**NullClaw**。
    活跃度中等，主要针对特定场景（如语音通话、企业设置）进行补全，属于特定领域的垂直解决方案。
*   **风险预警区**：**Hermes Agent**。
    出现了 P0 级数据丢失和沙箱逃逸漏洞，尽管活跃度高，但建议生产环境谨慎使用，需等待安全修复。

## 7. 值得关注的趋势信号

1.  **"安全回归"成为主旋律**：
    OpenClaw 强制收紧 Skill 权限与 Hermes Agent 的数据误删/沙箱逃逸事件形成了鲜明对比。这标志着 Agent 开发正在告别“裸奔”时代，**沙箱隔离、权限最小化、敏感数据脱敏**将成为后续所有项目的必选项。

2.  **Docker 部署仍是最大痛点**：
    多个项目反馈了 Docker 环境下的难题：Moltis 的浏览器沙箱失效、Hermes 的环境变量注入失败、OpenClaw 用户的移动端诉求。这表明**容器化隔离与宿主机交互**（如文件访问、浏览器调用）仍是阻碍 Agent 在生产环境落地的核心技术壁垒。

3.  **模型后端正在"解耦"**：
    单日内多个项目同时推进对 NEAR AI、DeepSeek-V4、LiteLLM 的支持，显示出开发者对**模型供应商锁定** 的极度抗拒。未来的 Agent 框架将默认设计为 "Model-Agnostic"（模型无关）架构，模型层将像数据库一样成为可插拔组件。

4.  **多智能体从概念走向工程**：
    Zeroclaw V3 和 IronClaw Reborn 的架构合并信号明确：Agent 不再是单打独斗的 Chatbot，而是具备调度、预算管理、子任务拆解能力的系统。**预算控制系统** 和 **会话/上下文隔离** 是下一阶段架构竞争的制高点。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-22)

## 1. 今日速览
NanoBot 项目今日保持**高活跃度**，社区贡献与维护响应速度极快。过去 24 小时内，项目处理了 **21 个 PR 更新**（其中 14 个已合并/关闭）和 **12 个 Issue 更新**（10 个已关闭），显示出维护者正在积极清理积压问题并快速迭代功能。核心进展集中在**WebUI 稳定性修复**、**模型提供商扩展**以及**记忆系统（Dream）的优化**。整体来看，项目处于快速演进阶段，对社区反馈的响应极为敏捷。

## 2. 版本发布
- **无新版本发布**。尽管有大量 PR 合并，今日未观察到正式的 Release Tag 发布，预计相关更新将汇入下一个版本。

## 3. 项目进展
今日共有 **14 个 PR 被合并/关闭**，项目在多模态支持、模型兼容性和前端体验上取得显著进展：

- **前端体验优化**：合并了 [PR #3944](https://github.com/HKUDS/nanobot/pull/3944) 修复了 WebUI 会话刷新导致对话丢失的严重问题；[PR #3953](https://github.com/HKUDS/nanobot/pull/3953) 和 [PR #3951](https://github.com/HKUDS/nanobot/pull/3951) 分别优化了侧边栏性能和折叠交互，提升了长对话列表的流畅度。
- **模型提供商支持**：新增了对 **Novita AI** ([PR #3927](https://github.com/HKUDS/nanobot/pull/3927)) 和 **Skywork** ([PR #3916](https://github.com/HKUDS/nanobot/pull/3916)) 的官方支持；修复了 Kimi (Moonshot) 模型在 Reasoning 模式下的参数冲突问题 ([PR #3940](https://github.com/HKUDS/nanobot/pull/3940))。
- **底层稳定性修复**：修复了 Shell 执行安全守卫对 URL 命令的误拦截 ([PR #3933](https://github.com/HKUDS/nanobot/pull/3933))；解决了 Windows 环境下 Shell 测试不稳定的问题 ([PR #3947](https://github.com/HKUDS/nanobot/pull/3947))；优化了代码工作流的 Patch 应用工具 ([PR #3923](https://github.com/HKUDS/nanobot/pull/3923))。
- **渠道修复**：修复了微信渠道消息静默丢失的关键 Bug ([PR #3684](https://github.com/HKUDS/nanobot/pull/3684))。

## 4. 社区热点
今日社区讨论集中在 WebUI 交互与记忆系统优化：

- **Issue #3790** [WebUI会话打印内容显示错乱](https://github.com/HKUDS/nanobot/issues/3790)：该问题引发了 14 条评论讨论，尽管最终因 Stale 被关闭，但反映了用户对前端渲染稳定性的关注。
- **Issue #3028** [心跳触发时重复创建定时任务](https://github.com/HKUDS/nanobot/issues/3028)：用户详细分析了心跳机制与定时任务的逻辑冲突，指出当前实现可能导致重复发送问候，该 Issue 今日再次活跃，维护者需关注此类逻辑缺陷。
- **PR #3952** [优化 Dream (记忆) 系统提示词](https://github.com/HKUDS/nanobot/pull/3952)：该 PR 针对长期记忆的冗余膨胀问题提出了 MECE（相互独立，完全穷尽）优化方案，旨在解决用户普遍反映的记忆重复问题，是近期值得关注的架构级改进。

## 5. Bug 与稳定性
今日修复了多个关键 Bug，稳定性显著提升：

- **严重**:
    - ✅ **[已修复]** [Issue #3884](https://github.com/HKUDS/nanobot/issues/3884)：WebUI 会话在首次响应后关闭。修复 PR: [#3944](https://github.com/HKUDS/nanobot/pull/3944)。
    - ✅ **[已修复]** [Issue #3931](https://github.com/HKUDS/nanobot/issues/3931)：安全设置 `restrictToWorkspace=true` 误拦截 Web 请求 (curl/wget)。修复 PR: [#3933](https://github.com/HKUDS/nanobot/pull/3933)。

- **中等**:
    - ✅ **[已修复]** [Issue #3939](https://github.com/HKUDS/nanobot/issues/3939)：Moonshot API 参数冲突导致请求失败。修复 PR: [#3940](https://github.com/HKUDS/nanobot/pull/3940)。
    - ⚠️ **[待观察]** [Issue #3956](https://github.com/HKUDS/nanobot/issues/3956)：Anthropic API 调用返回 400 错误，涉及图片读取后的 content 格式问题。该 Issue 已在当日关闭，可能已通过临时方案或配置指导解决。

- **低优先级/反馈**:
    - [Issue #3790](https://github.com/HKUDS/nanobot/issues/3790) WebUI 打印错乱因缺乏复现步骤被标记 Stale 关闭。

## 6. 功能请求与路线图信号
社区对功能控制的细粒度和多模态能力提出了明确需求：

- **记忆系统控制**：[Issue #3885](https://github.com/HKUDS/nanobot/issues/3885) 和 [Issue #3948](https://github.com/HKUDS/nanobot/issues/3948) 强烈要求为 "Dream" (梦境/记忆整理) 系统添加全局开关或禁用选项。目前该功能可能消耗 Token 且不可控，结合 [PR #3952](https://github.com/HKUDS/nanobot/pull/3952) 的优化动向，预计下个版本将重点解决记忆系统的可控性问题。
- **多模态能力扩展**：[PR #3954](https://github.com/HKUDS/nanobot/pull/3954) 和 [PR #3946](https://github.com/HKUDS/nanobot/pull/3946) 分别提交了对 OpenAI/Codex 和 Ollama 原生图像生成的支持，显示出项目正在迅速补齐多模态生成短板。
- **OAuth 登录支持**：[PR #3936](https://github.com/HKUDS/nanobot/pull/3936) 提出为 xAI Grok 添加 OAuth 支持，减少用户配置 API Key 的繁琐程度，这符合项目简化部署的趋势。

## 7. 用户反馈摘要
- **痛点**：用户对 "Dream" 记忆功能的不可控感到困扰（如 [Issue #3948](https://github.com/HKUDS/nanobot/issues/3948) 提到“费 Token、不可控、重复性高”）；WebUI 在处理长对话或特定操作（如打印、刷新）时偶发崩溃或重置。
- **场景**：Docker 部署环境下的 WebUI 访问问题频发（[Issue #3876](https://github.com/HKUDS/nanobot/issues/3876)）；开发者在使用 Shell 工具访问外部网络时遇到安全策略误杀。
- **满意度**：社区贡献者对 Bug 修复响应速度非常满意，多个关键修复（如 Moonshot 兼容性、Shell 安全）均在 24 小时内完成提交与合并。

## 8. 待处理积压
- **长期未解决逻辑缺陷**：[Issue #3028](https://github.com/HKUDS/nanobot/issues/3028) 描述的心跳机制与定时任务冲突问题已存在一月有余，虽近期有活跃评论但尚未有明确修复 PR，建议维护者优先排期。
- **重要功能 PR 待合并**：
    - [PR #3936](https://github.com/HKUDS/nanobot/pull/3936) (xAI OAuth): 功能完善但代码量较大，需加强安全审查。
    - [PR #3865](https://github.com/HKUDS/nanobot/pull/3865) (BM25 技能路由): 能大幅降低 Prompt 消耗，是架构级优化，建议尽快推进。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-22)

## 1. 今日速览
Zeroclaw 项目今日处于极高活跃度状态，核心架构迎来重大升级。开发重心明显向 **多智能体架构 V3** 和 **终端用户界面（TUI）** 倾斜。最引人注目的是，备受期待的 `feat!: multi-agent runtime and schema V3` 重大项目已关闭（推测已合并），这标志着项目正式迈入多智能体协同的新阶段。同时，TUI 相关的基础设施建设（RPC 通信、Unix Socket、会话管理）密集启动，相关 PR 与 Issues 占据了今日动态的半壁江山。社区方面，对 DeepSeek-V4 API 兼容性问题的高优先级讨论揭示了用户对前沿模型支持的迫切需求。

## 2. 版本发布
**无新版本发布**。
*注：虽无正式 Release，但 PR #6398 (Multi-agent runtime V3) 的关闭暗示核心代码库已完成重大迭代，可能正在为 Beta 版本做准备。*

## 3. 项目进展
今日项目在底层架构和功能扩展上取得了突破性进展：
*   **架构重构落地 (V3)**：PR #6398 (`feat!: multi-agent runtime and schema V3`) 已关闭。这是一个 XL 级体量的重大更新，重构了运行时与 Schema，为多智能体协同打下基础，后续 Beta 版本将以此为基石。
*   **通信层解耦与增强**：PR #6839 (`feat(runtime): RPC dispatch layer and Unix socket transport`) 已关闭。该更新提取了 JSON-RPC 类型并移动了 Session Actor，实现了 RPC 分发层与 HTTP/WS Gateway 的解耦，为 TUI 和本地客户端直连守护进程铺平了道路。
*   **设计规范确立**：Issue #5890 (`RFC: Multi-agent UX flow`) 已关闭且状态更新为 Accepted，多智能体交互设计规范已定稿，相关提案将归档至文档库。

## 4. 社区热点
今日讨论热度最高的议题集中在模型兼容性与项目管理：
*   **[Issue #6059] [Bug]: Incompatible with DeepSeek-V4 API format**
    *   **热度**：评论 12 条，点赞 4 次。
    *   **分析**：随着 DeepSeek-V4 的发布，用户迅速跟进测试，发现其 "thinking mode" 导致 API 调用失败。这反映了 Zeroclaw 用户群体对新模型的高敏感度，以及对 Provider 层兼容性稳定性的强依赖。项目组已将其标记为 P1 优先级并在处理中。
*   **[Issue #5890] RFC: Multi-agent UX flow**
    *   **热度**：评论 10 条。
    *   **分析**：作为 V3 架构的前奏，该设计稿的通过意味着社区和核心团队对多智能体交互流程达成共识，后续开发将以此为蓝图展开。

## 5. Bug 与稳定性
今日报告了若干影响工作流的关键 Bug，需重点关注：

*   **P1 / High Risk (需立即关注)**
    *   **[Issue #6059] DeepSeek-V4 兼容性错误**：API 格式不兼容导致服务降级。
        *   链接: [zeroclaw-labs/zeroclaw Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)
    *   **[Issue #6699] MCP 工具过滤失效**：`tool_filter_groups` 配置对真实 MCP 工具无效，存在前缀检查 Bug。
        *   链接: [zeroclaw-labs/zeroclaw Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)

*   **S1 - Workflow Blocked (严重阻塞)**
    *   **[Issue #6847] WhatsApp 通道无法显示二维码**：用户在接入 WhatsApp 时受阻，无法完成初始化。
        *   链接: [zeroclaw-labs/zeroclaw Issue #6847](https://github.com/zeroclaw-labs/zeroclaw/issues/6847)
    *   **[Issue #6844] Slack bot_token 环境变量注入失败**：必须配置在文件中，无法通过环境变量提供，影响容器化部署。
        *   链接: [zeroclaw-labs/zeroclaw Issue #6844](https://github.com/zeroclaw-labs/zeroclaw/issues/6844)
    *   **[Issue #6841] 视觉模型配置被忽略**：`vision_provider` 配置失效，图片被错误路由至 fallback provider。
        *   链接: [zeroclaw-labs/zeroclaw Issue #6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841)

## 6. 功能请求与路线图信号
今日功能开发信号极强，呈现“一主多辅”的态势：
*   **核心路线图：TUI 与多端支持**
    *   核心贡献者 @singlerider 密集提交了 TUI 相关提案 ([#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824), [#6825](https://github.com/zeroclaw-labs/zeroclaw/issues/6825), [#6826](https://github.com/zeroclaw-labs/zeroclaw/issues/6826))。
    *   **[PR #6848] Integration/zeroclaw tui**：正在进行的超大 PR，集成 TUI 模块。
        *   链接: [zeroclaw-labs/zeroclaw PR #6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848)
    *   新功能请求包括：ACP 协议扩展支持 Diff 显示 ([#6820](https://github.com/zeroclaw-labs/zeroclaw/issues/6820))、守护进程临时模式 ([#6818](https://github.com/zeroclaw-labs/zeroclaw/issues/6818))。

*   **生态扩展**
    *   **[Issue #6827] 支持 Jina AI 作为搜索 Provider**：用户提议集成 Jina AI 以利用其免费额度。
        *   链接: [zeroclaw-labs/zeroclaw Issue #6827](https://github.com/zeroclaw-labs/zeroclaw/issues/6827)
    *   **[PR #6842] 增加 NEAR AI Cloud Provider**：已提交 PR，支持 NEAR AI 的 TEE 推理。
        *   链接: [zeroclaw-labs/zeroclaw PR #6842](https://github.com/zeroclaw-labs/zeroclaw/pull/6842)

## 7. 用户反馈摘要
*   **部署痛点**：用户反馈 `setup.bat --minimal` 在 Windows 下构建产物体积异常（预期 6MB 实际 26MB），以及 Slack Token 无法通过环境变量配置，显示出在边缘部署和容器化场景下的配置灵活性仍有待提升。
*   **前沿模型支持**：DeepSeek-V4 的快速跟进需求表明 Zeroclaw 用户群体主要由技术极客和早期采用者组成，对新模型的支持速度极度敏感。
*   **产品体验**：关于 WhatsApp 二维码不显示的反馈，表明移动端/即时通讯通道的接入体验仍需打磨。

## 8. 待处理积压
*   **[PR #5779] Shell 工具 TOTP 安全门控**：自 4 月中旬开启，旨在增加高敏感 Shell 命令的二次验证，目前标记为 `needs-author-action`，建议维护者跟进合入进度。
    *   链接: [zeroclaw-labs/zeroclaw PR #5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779)
*   **[PR #6611] 文件轮转功能**：XL 级功能 PR，自 5 月初开启，目前状态为 `blocked`，可能依赖其他架构调整，建议关注其解封时机。
    *   链接: [zeroclaw-labs/zeroclaw PR #6611](https://github.com/zeroclaw-labs/zeroclaw/pull/6611)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-22)

## 1. 今日速览
Hermes Agent 项目今日保持**极高活跃度**，Issues 与 PR 更新量均达到 50 条，显示社区开发与反馈节奏紧凑。今日关注焦点集中在**数据安全与系统稳定性**，出现了严重的看板工作目录误删 Bug 报告，同时安全研究人员提交了终端命令沙箱绕过漏洞。功能层面，社区正积极推动多平台集成（Whoop, Meta Ads, DingTalk）及 Dashboard OAuth 登录功能的落地。整体来看，项目处于快速迭代期，但需警惕新引入的严重 Bug 对用户数据安全的影响。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
今日共有 4 个 PR 被合并或关闭，另有大量功能性 PR 正在等待审查：

*   **已合并/关闭 PR**：
    *   [PR #30203](https://github.com/NousResearch/hermes-agent/pull/30203): 新增钉钉机器人 Webhook 投递支持，完善了国内办公平台的集成能力。
    *   [PR #30204](https://github.com/NousResearch/hermes-agent/pull/30204): 合并了 Meta Ads Strategist Agent Skill，增强了营销分析能力。
    *   [PR #29647](https://github.com/NousResearch/hermes-agent/pull/29647): 修复了 OpenCode URL 在同提供商切换时重复添加 `v1` 前缀的问题。
*   **重点待合并 PR**：
    *   [PR #14390](https://github.com/NousResearch/hermes-agent/pull/14390): 旨在恢复全绿测试套件并修复网关模拟污染，是提升项目稳定性的关键提交，目前仍在审核中。
    *   [PR #30199](https://github.com/NousResearch/hermes-agent/pull/30199): 提出内存自动修剪机制，解决内存无限增长问题，响应了社区对长期运行稳定性的需求。
    *   [PR #30200](https://github.com/NousResearch/hermes-agent/pull/30200): 增加了 Svix Webhook 签名验证，提升了 Webhook 安全性。

## 4. 社区热点
*   **[Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237) [CLOSED]**: **"Response truncated due to output length limit"**
    *   **热度**：评论 32 条
    *   **分析**：该 Issue 涉及长文本输出截断问题，影响了 CLI 和多平台网关的体验。该问题今日最终被关闭，标志着社区长期关注的流式输出稳定性得到了解决或定论，是今日互动最高的讨论。
*   **[Issue #26847](https://github.com/NousResearch/hermes-agent/issues/26847) [OPEN]**: **xAI OAuth 403 Forbidden 错误**
    *   **热度**：评论 7 条
    *   **分析**：大量 SuperGrok 订阅用户报告无法通过 OAuth 登录，后端似乎错误地限制了权限。这反映了用户对 xAI 集成的强烈需求及当前认证层的兼容性问题。
*   **[Issue #503](https://github.com/NousResearch/hermes-agent/issues/503) [OPEN]**: **平台原生富交互支持**
    *   **热度**：评论 7 条
    *   **分析**：用户强烈呼吁支持 Inline Keyboards 等交互组件，而非纯文本交互。这是提升 Telegram/Discord 等平台用户体验的关键功能请求。

## 5. Bug 与稳定性
今日报告了数个**严重级别较高**的 Bug，需维护者立即关注：

*   **严重 - 数据丢失风险**：
    *   [Issue #30151](https://github.com/NousResearch/hermes-agent/issues/30151): **Hermes Kanban “Scratch Workspace” Cleanup Silently Deleted My Entire Projects Directory**。
        *   **详情**：用户在设置看板默认工作目录时，清理机制误删了整个项目目录。这是一个灾难性的 Bug，影响用户数据安全。
        *   **状态**：暂无修复 PR。
*   **高危 - 安全漏洞**：
    *   [Issue #30100](https://github.com/NousResearch/hermes-agent/issues/30100): 终端命令审批机制可被 Shell 混淆技术绕过（如 Base64 编码）。
    *   [Issue #30101](https://github.com/NousResearch/hermes-agent/issues/30101): 代码执行沙箱未进行 UID/GID 隔离，可能导致权限提升。
*   **一般 Bug**：
    *   [Issue #30122](https://github.com/NousResearch/hermes-agent/issues/30122): Telegram 网关出现持续的 409 Polling 冲突，导致消息丢失。
    *   [Issue #30178](https://github.com/NousResearch/hermes-agent/issues/30178): LM Studio 自定义模型上下文长度配置失效，回退至 64K。

## 6. 功能请求与路线图信号
*   **多模态与技能扩展**：
    *   [PR #30198](https://github.com/NousResearch/hermes-agent/pull/30198): 新增 Whoop 健康数据 API 技能，显示项目向个人健康数据助手方向扩展的趋势。
    *   [Issue #25979](https://github.com/NousResearch/hermes-agent/issues/25979): 用户提议增加 Microsoft 365 Calendar + To Do 技能，对标现有的 Google Workspace 集成。
*   **架构改进**：
    *   [PR #30156](https://github.com/NousResearch/hermes-agent/pull/30156): 引入 Dashboard OAuth 登录界面，完善了 Web 端的权限控制。
    *   [Issue #22201](https://github.com/NousResearch/hermes-agent/issues/22201): 提议为辅助任务（vision, compression 等）增加独立的回退提供商列表，以增强系统韧性。

## 7. 用户反馈摘要
*   **安装与配置痛点**：多位用户反馈 Homebrew 安装版本缺少 Skills 文件夹 ([Issue #24360](https://github.com/NousResearch/hermes-agent/issues/24360))，以及 Claude CLI 集成配置复杂且容易失败 ([Issue #29125](https://github.com/NousResearch/hermes-agent/issues/29125))。
*   **认证层困扰**：xAI OAuth 问题持续发酵，用户对订阅权限限制感到困惑。
*   **开源伦理**：有用户指出 Hermes 的自我进化模块涉嫌抄袭 EvoMap 项目 ([Issue #27266](https://github.com/NousResearch/hermes-agent/issues/27266))，社区对代码溯源和致谢较为敏感。

## 8. 待处理积压
*   **关键 PR 需审查**：[PR #14390](https://github.com/NousResearch/hermes-agent/pull/14390) 涉及测试套件修复和网关稳定性，自 4 月 23 日开启至今未合并，积压可能影响后续版本发布质量。
*   **长期 Issue**：[Issue #503](https://github.com/NousResearch/hermes-agent/issues/503) 关于富交互的支持自 3 月提出至今未解决，作为提升竞争力的核心功能，建议纳入近期路线图。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-22)

## 1. 今日速览
PicoClaw 项目今日展现出极高的维护活跃度，尤其是在问题修复和代码合并方面进展显著。过去 24 小时内，项目成功关闭了 7 个 Issues，合并/关闭了 10 个 PRs，并发布了最新的 nightly 构建版本。社区贡献活跃，不仅新增了对 NEAR AI Cloud 的支持，还有大量依赖库更新提交。总体来看，项目正处于密集的迭代优化期，核心关注点集中在多 Agent 架构的稳定性、Channel（特别是 Telegram）的功能完善以及系统资源优化。

## 2. 版本发布
- **nightly: Nightly Build (v0.2.8-nightly.20260522.5bbebb5f)**
  - **类型**: 自动化构建
  - **说明**: 这是一个每日构建版本，包含了最新的代码提交。虽然标记为可能不稳定，但通常包含了最新的功能特性和 Bug 修复，适合测试用户抢先体验。本次构建包含了关于请求上下文策略、Telegram 功能改进等最新代码。

## 3. 项目进展
今日项目进展迅速，主要围绕功能增强和缺陷修复：

*   **核心功能增强**：
    *   PR [#2914](https://github.com/sipeed/picoclaw/pull/2914) 引入了请求级别的上下文策略，允许更精细地控制 Agent 的每一轮对话（如是否包含历史记录、工具调用等），提升了 Agent 的灵活性。
    *   PR [#2917](https://github.com/sipeed/picoclaw/pull/2917) 新增了对 **NEAR AI Cloud** 作为 LLM Provider 的支持，扩展了模型推理的后端选择。
*   **Channel 集成优化（Telegram/Discord）**：
    *   多个 Telegram 相关 PRs（[#2772](https://github.com/sipeed/picoclaw/pull/2772), [#2776](https://github.com/sipeed/picoclaw/pull/2776), [#2779](https://github.com/sipeed/picoclaw/pull/2779)）被合并/关闭，修复了 Forum Topic 路由、输入状态指示器以及群组触发器覆盖等问题，显著提升了 Telegram 机器人的用户体验。
    *   PR [#2778](https://github.com/sipeed/picoclaw/pull/2778) 增加了 `working_summary` 工具反馈样式，使聊天界面的工具调用进度提示更加友好。
*   **依赖库维护**：Dependabot 提交了约 10 个依赖更新 PRs（React, TanStack, Shadcn 等），保持前端技术栈的现代化。

## 4. 社区热点
今日社区讨论主要集中在以下议题：

*   **性能优化建议**：Issue [#2916](https://github.com/sipeed/picoclaw/issues/2916) 提出了关于 CPU、内存和 IO 的优化建议。作者深入分析了代码库，提出了针对 Skills 系统和 Bus 模式的 IO 优化方案。这反映了用户在生产环境部署时对资源消耗的关注，是一个高价值的深度讨论。
*   **多 Agent 角色混淆**：Issue [#2775](https://github.com/sipeed/picoclaw/issues/2775)（已关闭）讨论了子 Agent 继承根 Agent 配置导致角色身份混淆的问题。该问题的解决标志着 PicoClaw 在复杂多 Agent 架构上的成熟度提升。
*   **项目可持续发展**：Issue [#2912](https://github.com/sipeed/picoclaw/issues/2912) 建议添加 `FUNDING.yml` 文件以支持项目融资，显示了社区对项目长期维护的关心和支持意愿。

## 5. Bug 与稳定性
今日修复了多个影响用户体验的关键 Bug，项目稳定性明显提升：

*   **已修复**:
    *   **LLM 调用容错**：Issue [#629](https://github.com/sipeed/picoclaw/issues/629) 报告了 LLM 调用失败（如 HTTP 500）时不重试导致任务挂起的问题。该问题的修复将显著提高长时间任务的鲁棒性。
    *   **会话历史丢失**：Issue [#2795](https://github.com/sipeed/picoclaw/issues/2795) 指出用户只能看到最后一条消息的历史记录问题已修复。
    *   **Telegram PDF 处理**：Issue [#2798](https://github.com/sipeed/picoclaw/issues/2798) 修复了 Telegram Bot 接收 PDF 流数据错误导致会话中断的问题。
    *   **时间戳缺失**：Issue [#2787](https://github.com/sipeed/picoclaw/issues/2787) 修复了消息缺少独立时间戳的问题，前端展示将更精准。
    *   **群组消息归属**：Issue [#2702](https://github.com/sipeed/picoclaw/issues/2702) 修复了多用户群聊中历史消息缺少发送者标识的问题。

## 6. 功能请求与路线图信号
*   **工具调用策略过滤**：PR [#2838](https://github.com/sipeed/picoclaw/pull/2838) 提议在 `AGENT.md` 中增加工具策略过滤器（allow/deny）。这表明社区需求正转向更细粒度的 Agent 权限控制，未来可能成为 Agent 配置的标准特性。
*   **GPT4Free 支持**：Issue [#2901](https://github.com/sipeed/picoclaw/issues/2901)（已关闭）请求原生支持 GPT4Free。虽然 Issue 关闭，但结合今日新增 NEAR AI Cloud 支持的动向，项目组正在积极扩展 Provider 生态，可能会通过其他方式解决低成本模型接入需求。
*   **资源优化**：Issue [#2916](https://github.com/sipeed/picoclaw/issues/2916) 的优化提案若被采纳，将降低 PicoClaw 在边缘设备或低配服务器上的运行门槛，这符合 PicoClaw（基于 Sipeed 硬件背景）的一贯轻量化路线。

## 7. 用户反馈摘要
从 Issues 讨论中提炼出以下用户痛点与反馈：
*   **长任务可靠性**：用户反馈在进行长任务时，一旦遇到服务器错误（HTTP 500），任务容易中断且无重试，体验较差（#629），今日修复后此痛点有望缓解。
*   **多 Agent 配置复杂性**：用户在使用多 Agent 协作时，容易遇到配置覆盖和角色混淆的问题（#2775），说明用户需要更清晰的多 Agent 配置指南或隔离机制。
*   **前端数据展示**：用户对前端展示的准确性（如时间戳、消息归属）有较高要求，修复时间戳缺失（#2787）和群组消息归属（#2702）将直接提升用户满意度。
*   **轻量化部署**：用户关注 Docker 环境下的文件流处理（#2798）及资源占用（#2916），表明不少用户将 PicoClaw 作为自托管服务运行。

## 8. 待处理积压
虽然今日清理了大量积压，但仍有关注点：
*   **文档完善**：PR [#2662](https://github.com/sipeed/picoclaw/pull/2662) 关于统一 Provider 文档表格的修改已停滞近一个月，需要维护者审核合并，以降低用户的阅读门槛。
*   **依赖更新堆积**：今日 Dependabot 生成了大量依赖更新 PRs（如 #2927, #2926 等），均处于 Open 状态。虽然多为自动化提交，但需维护者及时跟进合并以避免安全隐患和技术债务累积。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-22)

## 1. 今日速览
NanoClaw 项目今日呈现**高活跃度**与**快速迭代**态势。过去24小时内共有 20 条 PR 更新，其中 10 条顺利合并，显著增强了 MCP（Model Context Protocol）生态集成与系统稳定性。社区贡献主要集中在两大方向：一是拓展 AI Provider 兼容性（Codex、LiteLLM），二是丰富功能集成（Telegram、Google Calendar、Todoist）。同时，针对 `signal-cli` 的兼容性与死锁问题暴露了外部依赖治理的挑战，但社区响应迅速，相关修复 PR 已提交。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 10 条 PR 合并入主分支，显著提升了项目的集成能力与健壮性：

*   **MCP 生态深度集成**：合并了 Google Calendar (#1737)、Todoist (#1747) 及 Composio 管理的 Gmail/Calendar OAuth (#1781) 集成。这意味着 NanoClaw 作为个人助手的功能闭环已初步形成，能够处理日程、任务与邮件。
*   **容器化与代理增强**：修复了 Apple Container 的凭证代理与启动路径问题 (#1735)，并解决了 Agent Runner 缓存过期检查不完整的 Bug (#1749)，提升了 macOS 端的稳定性。
*   **交互体验优化**：新增 `send_file` MCP 工具 (#1757)，支持 Agent 向用户回传文件；修复了 Router XML 格式中缺失消息 ID 的问题 (#1756)，改善了 Agent 对上下文的理解能力。
*   **Bug 修复**：解决了 SDK 模式下中间思考过程被抑制的回归问题 (#2576)，确保用户能实时看到 Agent 的推理过程。

## 4. 社区热点
今日讨论热点主要集中在**多平台支持**与**底层架构解耦**：

*   **Telegram 集成方案 ([PR #2585](https://github.com/nanocoai/nanoclaw/pull/2585))**：由 @rwifeng 提交的 Telegram 频道支持 PR 备受关注，引入了 `grammy` 库支持，标志着项目正式向加密通讯与社群管理场景拓展。
*   **Provider 解耦与 Codex 支持**：一系列关于 AI Provider 的 PR（如 [PR #2580](https://github.com/nanocoai/nanoclaw/pull/2580)、[PR #2474](https://github.com/nanocoai/nanoclaw/pull/2474)）显示项目正在重构底层，试图打破对 Claude Code 的单一依赖，支持 OpenAI Codex 及 LiteLLM 作为可选的底层引擎。这反映了用户对“模型中立”和“多模型切换”的强烈诉求。

## 5. Bug 与稳定性
今日报告了 3 个重要 Bug，主要集中在 Signal 频道集成与 macOS 服务管理：

*   **[High] Signal CLI 兼容性导致认证失效 ([Issue #2581](https://github.com/nanocoai/nanoclaw/issues/2581))**：
    *   **问题**：`signal-cli` 0.13+ 版本将 JSON 字段名从 `account` 改为 `number`，导致 NanoClaw 无法识别已关联账户。
    *   **状态**：**已有修复 PR** ([PR #2584](https://github.com/nanocoai/nanoclaw/pull/2584))，等待合并。
*   **[High] Signal 认证死锁 ([Issue #2582](https://github.com/nanocoai/nanoclaw/issues/2582))**：
    *   **问题**：`signal-auth` 在调用 `listAccounts` 时未设超时，若配置文件被守护进程锁定，会导致进程挂起。
    *   **状态**：Open，尚在分析中。
*   **[Medium] macOS 服务重启静默失败 ([Issue #2583](https://github.com/nanocoai/nanoclaw/issues/2583))**：
    *   **问题**：使用 `launchctl kickstart -k` 重启服务时，若 plist 未加载，命令会被静默忽略。
    *   **状态**：Open，建议改用 `bootstrap` 或加载检查逻辑。
*   **[Medium] WhatsApp 登出残留凭证 ([PR #2579](https://github.com/nanocoai/nanoclaw/pull/2579))**：
    *   **问题**：收到 401 强制登出后，旧凭证未清除，导致重启后反复认证失败。
    *   **状态**：**已有修复 PR**，待合并。

## 6. 功能请求与路线图信号
结合今日的 PR 与 Issues，项目路线图呈现出明确信号：

*   **全媒体内容生成**：[PR #2532](https://github.com/nanocoai/nanoclaw/pull/2532) (Edna Veo 3.1) 正在推进视频生成与拼接功能，结合 [PR #1780](https://github.com/nanocoai/nanoclaw/pull/1780) 的设计头像生成，表明项目正从纯文本助手向**多媒体内容创作中心**演进。
*   **企业级工具链整合**：[PR #1781](https://github.com/nanocoai/nanoclaw/pull/1781) 引入 Composio MCP，简化了 Gmail/Calendar 的 OAuth 配置，降低了非技术用户的使用门槛。
*   **Provider 架构中立化**：多项关于 Codex 和 LiteLLM 的 PR 预示着下一版本将支持用户自由切换底层 LLM 引擎，不再绑定单一生态。

## 7. 用户反馈摘要
从 Issues 细节可以看出，高级用户正在将 NanoClaw 应用于复杂的自动化场景：

*   **痛点**：外部依赖（如 `signal-cli`）的版本更新频繁导致集成断裂（Issue #2581），以及文件锁机制处理不当引发的死锁（Issue #2582）。
*   **场景**：用户利用 NanoClaw 进行跨平台消息路由（Slack/Telegram/Signal）、自动化营销素材生成（OLX/Design Avatar）以及个人日程管理。
*   **评价**：用户对容器化隔离方案持积极态度，但期望对宿主机环境配置有更完善的容错机制。

## 8. 待处理积压
以下重要事项长期未决或急需维护者关注：

*   **LiteLLM Provider 支持** ([PR #2490](https://github.com/nanocoai/nanoclaw/pull/2490))：已开启 7 天，这是一个关键的架构扩展，能极大降低模型调用成本，建议优先 Review。
*   **Veo 3.1 视频生成集成** ([PR #2532](https://github.com/nanocoai/nanoclaw/pull/2532))：功能开发接近尾声，需关注测试覆盖率与 API 成本控制。
*   **Signal 模块危机**：Issues #2581 和 #2582 暴露了 Signal 频道模块的稳定性隐患，建议维护者尽快合并修复 PR #2584 并审视死锁问题。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-22)

## 1. 今日速览
NullClaw 项目今日整体处于平稳开发迭代期，无新版本发布或用户 Issue 反馈。项目活跃度主要集中在代码贡献层面，共有 2 个功能增强型 PR 处于待合并状态，显示出核心贡献者正致力于深化智能体调度能力与扩展 AI 模型提供商生态。整体来看，项目当前处于功能积累阶段，稳定性维持良好，社区交互暂显沉寂。

## 2. 版本发布
无

## 3. 项目进展
今日虽无合并或关闭的 PR，但有 2 个重要的功能 PR 处于活跃更新状态，标志着项目在自动化与生态集成方面取得了实质性进展：

*   **自动化调度引擎构建**：PR [#783](https://github.com/nullclaw/nullclaw/pull/783) 正在构建一套完整的 Cron 子智能体系统。该更新引入了基于数据库的调度器、运行历史记录表以及原子化任务队列，旨在赋予 NullClaw 定时执行技能与 Shell 任务的能力，并配套增加了 JSON 输出格式与安全加固。这将大幅提升智能体的自动化运行水平。
*   **生态提供商扩展**：PR [#922](https://github.com/nullclaw/nullclaw/pull/922) 新增了对 NEAR AI Cloud 的支持。作为 OpenAI 兼容的提供商，该 PR 完成了从 API 密钥查找到模型目录解析的全链路集成，进一步拓宽了用户在模型选择上的灵活性，特别是针对去中心化 AI 云服务的接入。

## 4. 社区热点
由于今日无新增 Issue 且 PR 评论数为 0，社区热点主要围绕上述两个核心 PR 的潜在影响展开：

*   **PR [#783](https://github.com/nullclaw/nullclaw/pull/783) (Cron Subagent)**：该 PR 的更新引发了关于智能体"长期记忆"与"自主运行"能力的期待。虽然暂无评论，但其庞大的变更量（涉及 DB schema、Worker、CLI 等）暗示这是通往 Level 3+ 自主智能体的关键一步。
*   **PR [#922](https://github.com/nullclaw/nullclaw/pull/922) (NEAR AI Provider)**：新提供商的接入通常反映了部分开发者对于特定云环境或成本优化方案的需求，显示了项目对新兴 AI 基础设施的快速响应能力。

## 5. Bug 与稳定性
过去 24 小时内未收到新的 Bug 报告或崩溃反馈，项目主分支稳定性保持良好。现有 Open PR 中包含的 "security hardening"（安全加固）内容表明开发团队正在主动预防潜在的安全风险。

## 6. 功能请求与路线图信号
从当前活跃的 PR 分析，项目路线图呈现出两大明确方向：

1.  **自主化**：PR [#783](https://github.com/nullclaw/nullclaw/pull/783) 表明项目正在从"指令-响应"模式向"计划-执行-回顾"的自主循环模式演进，Cron 调度与运行历史是构建长期自主智能体的基石。
2.  **生态开放**：PR [#922](https://github.com/nullclaw/nullclaw/pull/922) 传递了项目致力于打造多模型统一接口的信号，预计未来版本将进一步降低接入新 LLM 提供商的门槛。

## 7. 用户反馈摘要
由于今日无新增 Issues 或评论，暂无直接用户反馈数据。间接推断：PR [#783](https://github.com/nullclaw/nullclaw/pull/783) 中对 JSON output 的支持可能是响应了部分开发者对于脚本集成和数据解析便利性的需求；而 PR [#922](https://github.com/nullclaw/nullclaw/pull/922) 则可能满足了特定用户群体对于 NEAR 生态的接入需求。

## 8. 待处理积压
*   **重点 PR 审查提醒**：PR [#783](https://github.com/nullclaw/nullclaw/pull/783) 自 2026-04-07 创建以来已持续较长时间，今日进行了关键更新。鉴于其涉及数据库架构变更与核心调度逻辑，建议维护者优先安排代码审查与测试，尽早合并以避免长期分支带来的维护成本。
*   **新 PR 待审查**：PR [#922](https://github.com/nullclaw/nullclaw/pull/922) 作为昨日新增的功能，目前处于 Open 状态，建议社区关注其兼容性测试结果。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-22)

## 1. 今日速览
IronClaw 项目今日处于**极高活跃度**状态，核心架构重构 "Reborn" 迎来重要里程碑。过去24小时内，项目处理了 27 条 Issue 更新和 50 条 PR 更新，其中关闭了多个标记为 `P0` 的 Reborn 架构阻塞项，表明核心架构迁移正在加速收尾。重点推进了 WebChat v2 的原生路由实现、Subagent（子智能体）生成机制的底层重构以及基于成本的预算控制系统。尽管开发势头迅猛，但 nightly E2E 测试失败和 `crates.io` 发布滞后的问题仍需关注。

## 2. 版本发布
**无新版本发布。**
> **注意**：根据 Issue [#3259](https://github.com/nearai/ironclaw/issues/3259)，虽然 GitHub 仓库已发布 `v0.27.0`，但由于 `wasmtime` 的 CVE 漏洞依赖问题，`crates.io` 上的最新版本仍停留在 `v0.24.0`。这导致下游用户无法获取最新代码，建议维护者优先解决依赖冲突以恢复发布流水线。

## 3. 项目进展
今日共有 **21 个 PR 合并/关闭**，主要集中在 Reborn 架构迁移、安全增强和 WebUI v2 基础设施建设：

*   **WebChat v2 核心路由就绪**：Issue [#3611](https://github.com/nearai/ironclaw/issues/3611) 已关闭，实现了 Reborn 原生 WebChat v2 的最小路由集。配合已关闭的 [#3626](https://github.com/nearai/ironclaw/issues/3626) (TurnScope 绑定) 和 [#3625](https://github.com/nearai/ironclaw/issues/3625) (幂等性账本)，WebUI Beta 的基础通信层已基本构建完成。
*   **安全与认证架构强化**：合并了 PR [#3831](https://github.com/nearai/ironclaw/pull/3831) (分阶段秘密出口框架)，并新开了 PR [#3865](https://github.com/nearai/ironclaw/pull/3865) 添加产品认证合约，正在构建更健壮的 OAuth 和凭证管理机制。
*   **Subagent 生成机制重构**：提交了系列 Draft PRs ([#3867](https://github.com/nearai/ironclaw/pull/3867), [#3868](https://github.com/nearai/ironclaw/pull/3868), [#3869](https://github.com/nearai/ironclaw/pull/3869), [#3870](https://github.com/nearai/ironclaw/pull/3870))，旨在实现 Reborn 栈中的子智能体生成能力，这标志着项目正从单一智能体向多智能体协作架构演进。
*   **成本控制体系落地**：PR [#3841](https://github.com/nearai/ironclaw/pull/3841) 提交了基于成本的预算基础架构，将替代原有的隐式迭代计数限制，为商业化资源计费做准备。

## 4. 社区热点
今日社区讨论最活跃的内容集中在架构设计与用户体验细节：

*   **[Issue #3016](https://github.com/nearai/ironclaw/issues/3016) [CLOSED]**：关于 AgentLoopHost facade 架构设计的讨论，涉及多个模块的依赖关系，是 Reborn 架构的核心阻塞项，现已关闭，意味着架构争议已解决。
*   **[Issue #3846](https://github.com/nearai/ironclaw/issues/3846) [OPEN]**：用户报告 Mission `notify_channels` 在 Web UI Chat 中会意外继承当前会话的源渠道标签（如 TELEGRAM），导致行为困惑。
*   **[Issue #3840](https://github.com/nearai/ironclaw/issues/3840) [OPEN]**：用户建议改进 Web UI 会话列表中的渠道徽章样式，建议增加图标和颜色区分以提升可扫描性。

## 5. Bug 与稳定性
今日报告了若干影响稳定性或用户体验的问题：

*   **[P0 - 阻塞/发布]** [Issue #3259](https://github.com/nearai/ironclaw/issues/3259)：`crates.io` 发布版本严重滞后（v0.24.0 vs GitHub v0.27.0），由 `wasmtime` CVE 导致，影响下游依赖。
*   **[P1 - CI/CD]** [Issue #3447](https://github.com/nearai/ironclaw/issues/3447)：Nightly E2E 测试失败，需排查具体的 features 失败原因。
*   **[P2 - 功能缺陷]** [Issue #3839](https://github.com/nearai/ironclaw/issues/3839)：Web UI 中点击 Mission "Retry" 按钮调用 API 返回 `fired: false`，无法实际重试，提示 "terminal or budget exhausted"。
*   **[噪音]** [Issue #3866](https://github.com/nearai/ironclaw/issues/3866)：疑似营销内容发布，建议维护者清理。

## 6. 功能请求与路线图信号
*   **UI/UX 优化**：用户在 [#3840](https://github.com/nearai/ironclaw/issues/3840) 中明确请求改进渠道徽章的视觉表现，建议纳入近期 WebUI Beta 的优化清单。
*   **IronHub 集成**：PR [#3737](https://github.com/nearai/ironclaw/pull/3737) 正在推进通过 IronHub 安装工具和技能的功能，这将显著提升 Agent 的扩展能力，是路线图上的重要功能。
*   **Slack 适配器**：Issue [#3857](https://github.com/nearai/ironclaw/issues/3857) 提出了 Slack ProductAdapter MVP 的需求，预示着 Reborn 架构即将支持 Slack 作为新的交互渠道。

## 7. 用户反馈摘要
*   **发布依赖痛点**：开发者用户对 `crates.io` 版本滞后表示担忧，无法使用最新的 Reborn 特性（[#3259](https://github.com/nearai/ironclaw/issues/3259)）。
*   **UI 交互困惑**：对于 Mission 的创建和重试逻辑，用户感到现有 UI 行为与预期不符（渠道继承问题 [#3846](https://github.com/nearai/ironclaw/issues/3846)、重试失效 [#3839](https://github.com/nearai/ironclaw/issues/3839)），反映出前端与后端状态同步存在断层。
*   **视觉体验**：用户对现有的灰色徽章设计感到疲劳，渴望更现代的 UI 标识（[#3840](https://github.com/nearai/ironclaw/issues/3840)）。

## 8. 待处理积压
*   **[重要] 发布流水线修复**：Issue [#3259](https://github.com/nearai/ironclaw/issues/3259) 需尽快解决，以解除下游用户的版本锁定困境。
*   **[重要] E2E 测试修复**：Issue [#3447](https://github.com/nearai/ironclaw/issues/3447) 持续报告 Nightly E2E 失败，可能阻碍 Reborn 架构的正式切换。
*   **[体验] Web UI 功能修复**：Issue [#3839](https://github.com/nearai/ironclaw/issues/3839) 的重试按钮失效问题需修复，以改善运维体验。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-22)

## 1. 今日速览
LobsterAI 项目今日整体处于**维护优化与功能积压清理阶段**。过去24小时内虽无新开 Issue，但代码库活跃度较高，共有 12 个 PR 更新，其中 3 个关键 PR 已合并，主要解决了网关启动崩溃的严重故障并优化了设置体验。值得注意的是，积压已久的 9 个功能与修复 PR（创建于4月初）今日均进行了同步更新，显示出项目方正集中力量推进代码合并与新版本发布前的准备工作。项目健康度良好，核心稳定性问题得到及时修复。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 3 个 PR 成功合并/关闭，显著提升了系统稳定性与用户体验：

*   **修复网关启动崩溃**：[PR #2026](https://github.com/netease-youdao/LobsterAI/pull/2026) 修复了因 Dreaming Config 包含不支持的属性导致 Gateway 启动失败的问题 (`must NOT have additional properties`)。这是一个关键的稳定性修复，避免了用户在配置特定参数后系统无法启动的情况。
*   **IM 机器人管理重构**：[PR #2025](https://github.com/netease-youdao/LobsterAI/pull/2025) 对 IM Bot 管理界面进行了重设计，优化了用户在集成即时通讯工具时的交互体验。
*   **设置体验优化**：[PR #2024](https://github.com/netease-youdao/LobsterAI/pull/2024) 优化了设置中的网关重启逻辑，可能提升了配置更改后的生效速度与稳定性。

**总体评价**：项目今日重点解决了由于配置兼容性引发的严重启动崩溃问题，并完成了部分 UI 层面的重构优化，整体稳定性向前迈进一大步。

## 4. 社区热点
由于今日无新增 Issue 讨论，社区热点主要集中在长期运行的待合并 PR 上，尤其是 **Cowork（协同工作）模块的功能增强**受到高度关注：

*   **系统通知集成**：[PR #1536](https://github.com/netease-youdao/LobsterAI/pull/1536) 旨在解决用户切换窗口后无法感知任务完成的问题，引入了系统原生通知，是提升多任务体验的关键功能。
*   **长对话管理**：[PR #1538](https://github.com/netease-youdao/LobsterAI/pull/1538)（收藏/书签）与 [PR #1542](https://github.com/netease-youdao/LobsterAI/pull/1542)（标签分类）均针对长对话场景下的信息检索与管理痛点，显示出社区对提升 AI 会话管理效率的强烈需求。

这些 PR 虽处于 Open 状态，但今日均有更新，表明维护者正在积极处理，预计将成为下一版本的核心卖点。

## 5. Bug 与稳定性
今日修复了一个严重的稳定性问题，并处理了多个体验级 Bug：

*   **[严重] 网关启动失败**：由 [PR #2026](https://github.com/netease-youdao/LobsterAI/pull/2026) 修复。原因在于 OpenClaw JSON Schema 校验严格，Dreaming 配置输出了未定义的字段。**状态：已合并。**
*   **[中等] 引擎启动卡死**：[PR #1546](https://github.com/netease-youdao/LobsterAI/pull/1546) 指出引擎启动超时前用户无任何操作入口，只能等待 5 分钟硬超时。该 PR 提供了“取消启动”和“查看日志”按钮。**状态：Open，待合并。**
*   **[轻微] OAuth 资源泄露**：[PR #1544](https://github.com/netease-youdao/LobsterAI/pull/1544) 修复了关闭设置面板后 GitHub Copilot OAuth 轮询未停止导致的内存/网络泄露问题。**状态：Open，待合并。**
*   **[轻微] 状态同步延迟**：[PR #1545](https://github.com/netease-youdao/LobsterAI/pull/1545) 修复了 Agent 技能修改后徽章不刷新的问题。**状态：Open，待合并。**

## 6. 功能请求与路线图信号
从近期 PR 活动可以看出，LobsterAI 正在向 **"更智能的会话管理"** 和 **"更健壮的底层引擎"** 两个方向演进：

1.  **会话管理增强**：[PR #1542](https://github.com/netease-youdao/LobsterAI/pull/1542) 的标签系统与 [PR #1538](https://github.com/netease-youdao/LobsterAI/pull/1538) 的书签功能表明，项目方正致力于解决 AI 对话内容难以归档和检索的痛点。
2.  **引擎健壮性**：[PR #1546](https://github.com/netease-youdao/LobsterAI/pull/1546) 增加了用户对引擎启动过程的控制权，显示出对容错性和用户掌控感的重视。
3.  **国际化完善**：[PR #1540](https://github.com/netease-youdao/LobsterAI/pull/1540) 与 [PR #1543](https://github.com/netease-youdao/LobsterAI/pull/1543) 均涉及 i18n 硬编码修复，暗示项目正在为全球化/多语言支持做最后扫尾。

**预测**：标签分类、书签功能以及引擎超时控制极有可能在下一个 Minor 版本中发布。

## 7. 用户反馈摘要
虽然无直接 Issue 评论，但从 PR 描述中可提炼出典型用户痛点：

*   **"不可控的等待"**：用户在网络波动导致引擎启动卡住时，被迫等待漫长的超时时间（[PR #1546](https://github.com/netease-youdao/LobsterAI/pull/1546)），缺乏取消机制令人沮丧。
*   **"后台任务感知弱"**：用户在 Cowork 执行长任务时切换窗口，往往错过完成时机（[PR #1536](https://github.com/netease-youdao/LobsterAI/pull/1536)），急需原生系统通知。
*   **"配置导致崩溃"**：用户在调整 Dreaming 高级设置后遭遇 Gateway 崩溃且报错晦涩（[PR #2026](https://github.com/netease-youdao/LobsterAI/pull/2026)），这对非技术用户非常不友好。

## 8. 待处理积压
今日有 9 个 PR 处于 Open 状态且均为 "Stale"（陈旧）状态被重新激活，建议维护者重点关注：

*   **[P0] 引擎启动交互优化**：[PR #1546](https://github.com/netease-youdao/LobsterAI/pull/1546) - 解决启动卡死问题，直接影响用户首体验。
*   **[P1] 国际化阻断问题**：[PR #1543](https://github.com/netease-youdao/LobsterAI/pull/1543) - 审批对话框硬编码中文严重影响英文版用户体验。
*   **[P1] OAuth 流程缺陷**：[PR #1544](https://github.com/netease-youdao/LobsterAI/pull/1544) - 修复潜在的 Token 丢失和资源泄露问题。

这些 PR 普遍创建于 4 月初，今日集中更新可能是合并前的最终审查或 CI 触发，建议尽快处理以清理积压。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 (2026-05-22)

## 1. 今日速览
Moltis 项目今日保持高度活跃，社区反馈主要集中在 Docker 环境下的部署兼容性与语音通话功能的稳定性上。过去 24 小时内新增 7 条活跃 Issue，暂无新版本发布，但有 4 个重要的功能性 PR 正在等待合并，显示出维护者正在积极解决部署痛点。特别是针对 Docker 沙箱和 Twilio 语音交互的修复 PR 值得关注。整体来看，项目处于快速迭代修复期，维护者对社区反馈的响应速度较快。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日有一个 PR 关闭，另有四个关键 PR 待合并，显著推进了系统兼容性与功能扩展：

*   **[CLOSED] feat(openai-codex): add reasoning effort support** ([#1005](https://github.com/moltis-org/moltis/pull/1005))
    该 PR 由 @PeterDaveHello 提交并已于近日关闭。它为 OpenAI Codex 添加了推理能力的支持，增强了 Agent 在复杂任务中的处理能力。
*   **[OPEN] fix(sandbox): auto-detect docker host data mounts** ([#1035](https://github.com/moltis-org/moltis/pull/1035))
    由维护者 @penso 提交，旨在解决 Docker 环境下沙箱路径识别问题，直接回应了 Issue #977 中的痛点。
*   **[OPEN] fix(telephony): dispatch Twilio gather speech** ([#1034](https://github.com/moltis-org/moltis/pull/1034))
    修复了 Twilio 电话通话中语音输入无法被正确解析的问题，针对 Issue #1032 提供了解决方案。
*   **[OPEN] Allow disabling vault encryption at rest** ([#1033](https://github.com/moltis-org/moltis/pull/1033))
    增加了禁用静态 Vault 加密的选项，为特定部署场景提供了更大的灵活性。
*   **[OPEN] Add NEAR AI Cloud provider** ([#1031](https://github.com/moltis-org/moltis/pull/1031))
    扩展了模型提供商支持，引入了 NEAR AI Cloud，增强了生态兼容性。

## 4. 社区热点
今日讨论最活跃的 Issue 是 **[[Bug]: Browser sandbox fails when Moltis runs in Docker](https://github.com/moltis-org/moltis/issues/977)** (#977)。
*   **背景**：该 Issue 由 @TLA020 于 5 月 6 日提出，但在今日再次活跃并获得 4 条新评论。
*   **核心诉求**：用户在 Proxmox/LXC 嵌套 Docker 环境中运行 Moltis 时，浏览器沙箱工具因权限问题（`SingletonLock`）持续失败。
*   **进展**：这是一个典型的复杂部署环境问题，社区在评论中探讨了挂载卷的配置细节。维护者 @penso 已提交 PR #1035 尝试通过自动检测挂载路径来修复此问题。

## 5. Bug 与稳定性
今日报告的新 Bug 主要集中在部署与语音模块，按严重程度排序如下：

*   **严重 - 已有修复方案**：
    *   **Twilio 通话无响应** ([#1032](https://github.com/moltis-org/moltis/issues/1032))：Agent 接听电话后只打招呼但不响应用户语音。维护者已提交修复 PR [1034](https://github.com/moltis-org/moltis/pull/1034)。
    *   **Docker 沙箱失效** ([#977](https://github.com/moltis-org/moltis/issues/977))：影响浏览器工具在 Docker 中的使用，修复 PR [1035](https://github.com/moltis-org/moltis/pull/1035) 正在处理中。

*   **中等 - 待确认**：
    *   **Docker 文件发送失败** ([#1037](https://github.com/moltis-org/moltis/issues/1037))：由 @IlyaBizyaev 报告，在 Docker 环境下 `send_image` 和 `send_document` 工具失效，目前尚无关联 PR。

*   **轻微/兼容性**：
    *   **OpenAI TTS 格式限制** ([#1030](https://github.com/moltis-org/moltis/issues/1030))：强制要求 `opus` 格式导致不支持该格式的 Speaches 后端无法使用。
    *   **Piper TTS 转换问题** ([#1029](https://github.com/moltis-org/moltis/issues/1029))：请求在内部处理音频转换，属于功能增强类的 Bug。

## 6. 功能请求与路线图信号
用户提出了多项新功能请求，显示出对多模态交互和扩展性的需求：

*   **Web UI 文件上传** ([#1036](https://github.com/moltis-org/moltis/issues/1036))：用户 @IlyaBizyaev 请求支持在 Web UI 中直接上传任意文件作为 Agent 输入，这将显著提升易用性。
*   **内置 Piper TTS 转换** ([#1029](https://github.com/moltis-org/moltis/issues/1029))：建议在代码库内部处理 Piper TTS 的音频转换，减少外部依赖。
*   **预测市场数据集成** ([#1038](https://github.com/moltis-org/moltis/issues/1038))：用户 @RileyCraig14 提供了一个 NEXUS API 示例，建议集成 Kalshi/Polymarket 预测市场数据。虽然目前仅作为信息分享，但展示了 Agent 在金融数据领域的应用潜力。
*   **路线图关联**：目前 PR #1031 (NEAR AI Cloud) 和 PR #1033 (Vault 配置) 显示项目正在积极扩展 LLM 提供商支持并优化配置灵活度。

## 7. 用户反馈摘要
*   **部署痛点**：Docker 依然是用户反馈的重灾区，涉及文件系统权限 (#977)、卷挂载路径识别及文件发送功能 (#1037)。这表明 Moltis 的容器化部署体验仍有优化空间。
*   **语音交互质量**：语音通话 和语音合成 (TTS #1030) 的 Bug 表明，语音模态作为核心功能，其稳定性目前是用户关注的焦点。
*   **积极信号**：用户开始探索将 Moltis 应用于更专业的垂直领域（如预测市场 #1038），并积极贡献代码（如 NEAR AI Provider #1031），表明社区对项目前景持乐观态度。

## 8. 待处理积压
*   目前所有新提交的 Issue 均在 24-48 小时内创建，暂无明显积压。
*   需关注 Issue **#1037 (Docker send_image fail)**，目前尚无官方回复或关联 PR，建议维护者 @penso 关注此 Docker 相关的延续性问题。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-05-22)

## 1. 今日速览
CoPaw (QwenPaw) 项目今日保持高度活跃，社区互动频繁，共处理了 27 条 Issue 更新与 31 条 PR 更新。项目重点聚焦于 v1.1.8 版本后的稳定性修复，特别是针对微信 iLink 频道的消息投递与 Gemini 模型兼容性进行了关键修补。PR 合并率较高（约 67%），显示维护团队处理反馈的效率极高。值得关注的是，社区贡献者提交了数据分析插件与 Tauri 桌面端支持等重量级 PR，预示着项目生态正在向更丰富的功能与更广泛的应用场景拓展。

## 2. 版本发布
无新版本发布。考虑到今日修复了多个关键 Bug（如 Gemini 崩溃、微信 Token 失效处理），预计近期可能会发布 v1.1.8.post2 或 v1.1.9 补丁版本。

## 3. 项目进展
今日共有 21 个 PR 被合并或关闭，项目在以下方面取得显著进展：

*   **关键兼容性与稳定性修复**：
    *   **Gemini 模型支持修复**：PR [#4621](https://github.com/agentscope-ai/QwenPaw/pull/4621) 修复了 Gemini/Gemma 模型因 `max_tokens` 参数校验错误导致的崩溃问题，将参数正确映射为 `max_output_tokens`。
    *   **微信 iLink 频道稳定性**：PR [#4618](https://github.com/agentscope-ai/QwenPaw/pull/4618) 优化了 `context_token` 失效时的处理逻辑，避免异常中断对话流；PR [#4597](https://github.com/agentscope-ai/QwenPaw/pull/4597) 修复了 API 发送消息时的假性成功反馈问题。
    *   **钉钉文件名乱码修复**：PR [#4600](https://github.com/agentscope-ai/QwenPaw/pull/4600) 修复了发送文件时中文文件名未解码导致的乱码问题。

*   **功能增强**：
    *   **定时任务增强**：PR [#4434](https://github.com/agentscope-ai/QwenPaw/pull/4434) 引入了执行前自动清空上下文的选项；PR [#4602](https://github.com/agentscope-ai/QwenPaw/pull/4602) 实现了统一会话内的隔离定时任务。
    *   **用户体验优化**：PR [#4520](https://github.com/agentscope-ai/QwenPaw/pull/4520) 实现了聊天输入框草稿的跨页面持久化，解决了切换页面丢失输入内容的痛点。

*   **架构改进**：
    *   PR [#4518](https://github.com/agentscope-ai/QwenPaw/pull/4518) 将 Skill Hub 客户端重构为异步 `httpx`，并引入了统一的技能市场，提升了插件系统的扩展性。

## 4. 社区热点
*   **模型支持焦虑**：Issue [#4474](https://github.com/agentscope-ai/QwenPaw/issues/4474) 关于 "ChatGPT-5.5 支持" 的提问引发了热烈讨论（8 条评论），反映了用户对新模型跟进的高期待。
*   **上下文丢失痛点**：Issue [#4620](https://github.com/agentscope-ai/QwenPaw/issues/4620) 报告了聊天历史消失的问题，被用户标记为 "Critical bug"，引发了对数据持久化机制的关注。
*   **插件扩展能力**：首个针对数据分析插件的 PR [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) 引入了 12 种 BI 技能，展示了项目在垂直领域应用落地的潜力，吸引了社区目光。

## 5. Bug 与稳定性
今日报告的新增或活跃 Bug 按严重程度排列如下：

*   **严重**：
    *   **聊天历史消失**：Issue [#4620](https://github.com/agentscope-ai/QwenPaw/issues/4620)。用户切换会话后历史记录丢失，且存在长期隐患。目前暂无 Fix PR。
    *   **Gemini 模型崩溃**：Issue [#4605](https://github.com/agentscope-ai/QwenPaw/issues/4605)。v1.1.8.post1 中使用 Gemini/Gemma 时因参数校验失败崩溃。**已修复** (PR #4621)。

*   **高**：
    *   **语音转录配置失效**：Issue [#4556](https://github.com/agentscope-ai/QwenPaw/issues/4556)。配置了 Whisper 服务端但仍强制使用浏览器原生 API。目前暂无 Fix PR。
    *   **企业微信插件不识别**：Issue [#4585](https://github.com/agentscope-ai/QwenPaw/issues/4585)。自研插件在桌面端可用但在企业微信频道无法自动发现。

*   **中**：
    *   **WebUI 设置项消失**：Issue [#4590](https://github.com/agentscope-ai/QwenPaw/issues/4590)。v1.1.8 更新后 `max_input_length` 设置在 UI 中不可见。Issue 已关闭，推测可能已通过自动推导逻辑替代。
    *   **ACP 会话冲突**：Issue [#4611](https://github.com/agentscope-ai/QwenPaw/issues/4611)。外部 Agent 会话未自动关闭导致重启冲突。已有相关 Fix PR [#4615](https://github.com/agentscope-ai/QwenPaw/pull/4615) 提交待审核。

## 6. 功能请求与路线图信号
*   **数据分析能力**：PR [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) 提交了 `DataPaw` 插件，包含数据清洗、可视化等 12 种技能。若合并，将显著增强 Agent 的办公自动化能力。
*   **桌面端重构**：PR [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) 正在推进 Tauri 2.x 支持，旨在替代或增强现有桌面端体验，目前处于 Open 状态，是值得关注的架构升级。
*   **远程浏览器支持**：Issue [#4617](https://github.com/agentscope-ai/QwenPaw/issues/4617) 请求支持配置远程 Playwright 端点，反映了用户对云端无头浏览器集成的需求，适合多实例部署场景。

## 7. 用户反馈摘要
*   **集成场景挑战**：用户在使用多渠道（微信 iLink、钉钉、企业微信）集成时遇到较多阻碍，如消息去重失效 (#4546)、Token 失效重试 (#4618)、文件发送失败 (#4612) 等，表明多渠道适配仍是稳定性薄弱环节。
*   **配置易用性**：用户对配置项的变动较为敏感（如 UI 中消失的 `max_input_length`），建议后续版本变更时提供更明确的迁移提示或文档说明。
*   **正面反馈**：社区对 Skill Market 的重构表示欢迎，解决了技能管理的便利性问题；同时对输入草稿持久化等细节优化表示认可。

## 8. 待处理积压
*   **[Critical] Issue #4620**：聊天历史消失问题，涉及核心数据存储可靠性，建议维护者立即介入排查。
*   **[High] Issue #4556**：语音转录强制走浏览器 API 问题，影响非标准环境下的语音功能使用，已积压 2 天。
*   **[Feature] PR #3813**：Tauri 2.x 支持，已提交近一个月，涉及桌面端架构，需集中评审以确定合并时间表。

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