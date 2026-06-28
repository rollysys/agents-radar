# OpenClaw 生态日报 2026-06-28

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-06-28 04:04 UTC

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

# OpenClaw 项目动态日报 (2026-06-28)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，Issues 与 PR 更新量均达到 500 条。然而，项目当前面临严峻的稳定性挑战，**新增/活跃 Issues (486) 远超已关闭数 (14)**，导致社区积压问题激增。焦点集中在严重的内存泄漏与资源耗尽问题上，多个 P0 级别的崩溃问题尚待解决。尽管合并了部分媒体处理和构建优化的修复，但在关键稳定性修复落地前，项目整体健康度呈现“高吞吐、高负债”状态。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共合并/关闭 PR 56 个，主要集中在媒体处理修复、构建优化及安全性补丁：

*   **媒体处理修复**：合并了 [PR #97354](https://github.com/openclaw/openclaw/pull/97354) 和 [PR #96690](https://github.com/openclaw/openclaw/pull/96690)，修复了聊天频道中扫描版 PDF 页面无法被视觉模型识别的问题，解决了 PDF 图像被错误识别为占位符的缺陷。
*   **跨平台兼容性**：[PR #96024](https://github.com/openclaw/openclaw/pull/96024) 修复了 Windows 入站媒体路径的大小写敏感性问题，提升了 Windows 环境下的兼容性。
*   **基础设施**：[PR #95969](https://github.com/openclaw/openclaw/pull/95969) 增加了托管目录源配置验证，为即将到来的托管市场功能铺平道路。
*   **待审修复**：[PR #97344](https://github.com/openclaw/openclaw/pull/97344) 提交了针对 Z.AI 认证流程的关键修复，防止命令行文本被错误存储为 API Key。

## 4. 社区热点
今日社区讨论最热烈的问题集中在核心稳定性与 Agent 行为可靠性：

*   **[P0] Gateway 严重内存泄漏与 OOM 崩溃** ([Issue #91588](https://github.com/openclaw/openclaw/issues/91588))：
    *   **热度**：14 条评论，持续更新。
    *   **痛点**：用户报告网关进程 RSS 在数天内从 350MB 暴涨至 15.5GB，最终被系统 OOM Killer 杀死并陷入重启循环。这是目前最严重的生产环境阻断问题。
*   **Agent “画饼”不执行** ([Issue #58450](https://github.com/openclaw/openclaw/issues/58450))：
    *   **热度**：15 条评论。
    *   **痛点**：Agent 经常以“我会稍后跟进...”结束对话，但实际上并未启动任何后台任务或子代理，导致用户空等，严重影响信任度。
*   **Hardcode 路径的低级错误** ([Issue #51429](https://github.com/openclaw/openclaw/issues/51429))：
    *   **热度**：12 条评论。
    *   **痛点**：代码中被发现硬编码了开发者的私人路径 (`/Users/wangtao`)，导致安装后工作区被错误设置。社区对此类低级审查疏漏表示不满。

## 5. Bug 与稳定性
今日报告了多个高危 Bug，按严重程度排列：

*   **P0 级别 (Critical - 阻断生产)**：
    *   **内存泄漏**：[Issue #91588](https://github.com/openclaw/openclaw/issues/91588) - Gateway 内存无限增长导致崩溃。**目前无 Fix PR**。
    *   **无限增长的 sessions.json**：[Issue #55334](https://github.com/openclaw/openclaw/issues/55334) - 会话快照未剪枝导致文件无限膨胀，最终耗尽内存。

*   **P1 级别 (High - 功能受损/安全风险)**：
    *   **Embedded Runner 签名失效**：[Issue #92201](https://github.com/openclaw/openclaw/issues/92201) - 流式思考签名重放时失效，导致会话状态丢失。
    *   **Coding Agent 完全失效**：[Issue #62505](https://github.com/openclaw/openclaw/issues/62505) - 回归问题，Coding Agent 只输出模糊状态更新，无法完成实际任务。
    *   **安全绕过**：[Issue #57326](https://github.com/openclaw/openclaw/issues/57326) - 部分 Helper 路径绕过 CLI 调度，存在安全隐患。
    *   **锁文件死锁**：[Issue #95833](https://github.com/openclaw/openclaw/issues/95833) - 子代理中止时未释放锁，导致会话永久不可用。

## 6. 功能请求与路线图信号
社区提出的功能需求反映了当前架构的局限性：

*   **多智能体协作架构升级** ([Issue #35203](https://github.com/openclaw/openclaw/issues/35203))：
    *   提议引入能力画像、共享黑板 和分层记忆。这表明当前的单体或松散多智能体架构在复杂协作任务中表现不佳。
*   **多插槽记忆架构** ([Issue #60572](https://github.com/openclaw/openclaw/issues/60572))：
    *   旨在打破单一 Memory 插件限制，允许同时使用多种记忆提供商（如短期记忆+长期向量库）。这可能是下一阶段架构重构的重点。
*   **敏感数据脱敏** ([Issue #64046](https://github.com/openclaw/openclaw/issues/64046))：
    *   用户强烈要求对配置文件、日志及 UI 中的 API Key 和 Token 进行脱敏处理，以提升企业级安全性。

## 7. 用户反馈摘要
*   **信任危机**：用户普遍对 Agent 的执行可靠性表示担忧。Agent 频繁承诺不兑现（Issue #58450）或在高负载下丢失消息（Issue #67777），导致用户不敢将其用于关键任务。
*   **运维痛点**：内存泄漏问题（Issue #91588, #55334）反复出现，迫使运维人员必须定期强制重启服务，无法实现真正的稳定运行。
*   **多渠道体验不佳**：在 Telegram/Discord 等渠道，Agent 经常因心跳中断或系统事件干扰而“吞”掉用户消息（Issue #64810），多端同步体验割裂。

## 8. 待处理积压
维护者需紧急关注以下积压问题：

*   **[P0] 内存泄漏修复**：[Issue #91588](https://github.com/openclaw/openclaw/issues/91588) 和 [Issue #55334](https://github.com/openclaw/openclaw/issues/55334) 是当前最高优先级的阻断问题，标签显示 `needs-maintainer-review`，急需确认根因并发布补丁。
*   **[P1] 锁定文件遗留问题**：[Issue #95833](https://github.com/openclaw/openclaw/issues/95833) 导致会话永久损坏，虽已关闭但关联 PR 尚未完全解决清理逻辑，需确认风险是否解除。
*   **长期未决的功能 PR**：[PR #68236](https://github.com/openclaw/openclaw/pull/68236) (OAuth E2E 测试) 和 [PR #63919](https://github.com/openclaw/openclaw/pull/63919) (Gateway 工具调用 HTTP 接口) 已开启较长时间，合并这些 PR 将显著提升系统的安全性与扩展性。

---

## 横向生态对比

# 2026-06-28 AI 智能体与个人助手开源生态横向对比分析报告

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于从“功能堆砌”向“企业级稳定性与架构重构”转型的阵痛期。**OpenClaw** 作为参照系暴露了高并发下的严重资源泄漏问题，警示全生态在追求功能复杂度时不可忽视底层健壮性。与此同时，**NanoBot** 与 **IronClaw** 分别在多智能体协作架构与细粒度权限治理上取得了实质性突破，标志着项目竞争重心正向“可控、可信、可协作”的高级阶段演进。

## 2. 各项目活跃度对比

| 项目名称 | Issues 动态 | PRs 动态 | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 新增/活跃 486，关闭 14 (严重积压) | 更新 500+，合并 56 | 无 | 🔴 **高危**：P0级内存泄漏未解，负债极高 |
| **Hermes Agent** | 处理 50，关闭 33 | 处理 50，合并 28 | 无 | 🟢 **健康**：积极修复 P1 级会话卡死，治理高效 |
| **Zeroclaw** | 更新 47 | 更新 50，合并 9 (积压 41) | 无 | 🟡 **中等**：RFC 讨论热烈，安全重构进行中 |
| **IronClaw** | 关闭 9 | 合并/关闭 23 | 无 (准备中) | 🟢 **健康**：权限系统落地，测试体系完善 |
| **NanoBot** | 新开 3，关闭 5 | 更新 33，合并 13 | 无 | 🟢 **健康**：高质量迭代，架构演进清晰 |
| **CoPaw** | 活跃 (DeepSeek V4 兼容性) | 测试覆盖升级 | 无 | 🟢 **健康**：基建夯实期，响应迅速 |
| **NanoClaw** | 新增 2 | 提交 8 (待合并) | 无 | 🟡 **中等**：功能积蓄期，OpenAI 集成有阻 |
| **PicoClaw** | 关闭 2 | 关闭 2 (Stale)，新增 1 | 无 | 🟡 **中等**：清理积压，功能扩展缓慢 |
| **NullClaw** | 讨论 Android 构建 | 新增 1 (审批流) | 无 | 🔵 **平稳**：低频高质，聚焦特定交互范式 |
| **LobsterAI** | 新增 2 (严重安装/备份 Bug) | 关闭 7 (Stale) | 无 | 🟠 **风险**：核心功能受阻，维护响应滞后 |
| **TinyClaw** | 无活动 | 无活动 | - | ⚪ **静默** |

## 3. OpenClaw 在生态中的定位
**作为核心参照项目，OpenClaw 展现了“高流量、高负债”的双刃剑效应。**

*   **优势与地位**：OpenClaw 拥有生态中最高的社区关注度（Issue 500+）和吞吐量，媒体处理修复（PDF识别）和跨平台兼容性表明其应用场景覆盖极广，是用户尝试 AI Agent 的首选入口。
*   **技术路线差异**：相比于 **NanoBot** 的学术派架构创新（A2A 对等委托）或 **IronClaw** 的企业级权限管控，OpenClaw 更侧重于全功能集成与快速迭代。然而，这种路线导致了严重的资源管理缺陷（Gateway OOM、Session 膨胀），使其在稳定性和生产可用性上远落后于 **Hermes Agent** 等追赶者。
*   **社区规模对比**：虽然社区规模最大，但当前信任危机严重（Agent“画饼”不执行、硬编码路径低级错误），若不能尽快解决 P0 级内存泄漏，其核心地位恐将受到 **Hermes Agent** 或 **Zeroclaw** 的强力挑战。

## 4. 共同关注的技术方向
多项目共同涌现的需求揭示了行业共识：

*   **多智能体协作架构**：**OpenClaw** (Issue #35203) 提议引入共享黑板与能力画像，**NanoBot** (PR #4571) 实现原生 A2A 对等委托。这表明单体 Agent 已无法满足复杂任务需求，多角色协同成为下一阶段标配。
*   **细粒度权限与安全治理**：**IronClaw** 落地了 Capability Policy System，**NullClaw** 提交了结构化工具审批流，**Zeroclaw** 讨论 Wasm 插件安全隔离。生态正从“裸奔执行”转向“权限分级、审计透明”的安全范式。
*   **模型兼容性与路由策略**：**CoPaw** 修复 DeepSeek V4 兼容，**NanoBot** 与 **NanoClaw** 均推进子代理模型覆盖功能。用户强烈要求摆脱单一模型绑定，追求成本与性能的最优动态路由。

## 5. 差异化定位分析

| 维度 | **Hermes Agent / IronClaw** (企业稳健型) | **NanoBot / Zeroclaw** (架构创新型) | **PicoClaw / NullClaw** (垂直场景型) |
| :--- | :--- | :--- | :--- |
| **功能侧重** | 会话持久化、权限治理、OAuth 稳定性 | A2A 协议、供应链安全、上下文预算管理 | 移动端构建、隐私通信、嵌入式部署 |
| **目标用户** | 企业开发者、生产环境部署者 | 架构师、高阶极客、安全合规要求者 | 边缘计算开发者、个人极客 |
| **技术架构** | 微服务化、控制平面与数据平面分离 | 原生多智能体、Wasm 沙箱、协议扩展 | 轻量化运行时、跨平台兼容 (Termux/Matrix) |

## 6. 社区热度与成熟度

*   **快速迭代与架构重构期**：**NanoBot** 和 **IronClaw** 表现最优。前者在解决底层缓存失效的同时推进 A2A 架构，后者完成了复杂的权限系统重构，Issue 闭环率高，技术债务低。
*   **功能密集交付期**：**Zeroclaw** 和 **NanoClaw** 活跃度高，但存在一定 PR 积压，正在为 v0.9.0 或下一版本积蓄力量，重点在于安全与多模型支持。
*   **质量巩固与修复期**：**Hermes Agent** 和 **CoPaw** 集中精力修复会话卡死与模型兼容性问题，社区反馈响应迅速，处于良性的质量爬坡阶段。
*   **维护与调整期**：**LobsterAI** 和 **PicoClaw** 处于清理积压状态，甚至出现严重 Bug 无人响应的情况，项目活力相对下降。

## 7. 值得关注的趋势信号

1.  **Agent "操作系统化" 的雏形**：
    **Zeroclaw** 的离线定价目录、**CoPaw** 的会话持久化诉求、**OpenClaw** 的会话快照剪枝，共同指向一个趋势——AI Agent 正在从“一次性对话脚本”演变为“有状态、有文件系统、有资源预算”的操作系统实体。开发者需关注**资源生命周期管理**（Memory/RSS Control）的设计。

2.  **安全交互范式成为标配**：
    简单的 Tool Call 正在被显式的审批流取代。从 **IronClaw** 的 REST 控制平面到 **NullClaw** 的审批挂起机制，未来的 AI Agent 在执行高风险操作（Shell、支付）时，将强制引入“人机协同确认”环节。建议开发者在设计 Tool 层时预留 `ApprovalRequest` 接口。

3.  **小模型与本地模型的适配战**：
    **Moltis** 针对 Gemma 4 的参数容错修复、**CoPaw** 对 DeepSeek V4 的适配，反映出社区正在大力挖掘本地/开源小模型的潜力。Agent 框架不再仅服务于 GPT-4 级闭源模型，**针对小模型幻觉与格式错误的鲁棒性处理**将成为框架层面的核心竞争力。

4.  **配置与数据的“云原生”需求**：
    **Hermes Agent** 用户强烈要求跨设备配置同步，**LobsterAI** 暴露了本地备份的脆弱性。这表明 AI Agent 的配置与记忆数据正在向“个人数据中心”演进，单纯依赖本地文件系统已无法满足用户需求，**配置分离与云端同步**将是个人助手产品的关键功能点。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-28)

## 1. 今日速览
NanoBot 项目今日保持着极高的开发活跃度，呈现出“高吞吐、重质量”的健康态势。过去24小时内，项目共处理了 33 条 PR 更新，其中 13 条已合并或关闭，主要集中在提升系统稳定性与修复长期存在的上下文管理难题。Issues 方面，5 个问题被成功关闭，且新开问题数量（3个）低于关闭数量，表明社区维护者能有效消化用户反馈。今日工作重心明显向底层架构倾斜，包括修复 Prompt 缓存失效、会话存储冲突以及安全漏洞，同时多项关于多智能体协作（A2A）与模型路由的高级功能 PR 正在密集提交中。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 **13 个 PR 被合并或关闭**，显著提升了项目的鲁棒性：

*   **稳定性与治理增强**：
    *   [PR #4510](https://github.com/HKUDS/nanobot/pull/4510) **[MERGED]**：修复了代理执行过程中的畸形工具调用问题，增强了 LLM 输出异常时的容错能力，防止污染历史记录。
    *   [PR #4225](https://github.com/HKUDS/nanobot/pull/4225) & [PR #4357](https://github.com/HKUDS/nanobot/pull/4357) **[MERGED]**：为定时任务添加了 `silent` 模式和 `lock_recipient` 功能，优化了后台监控任务的交互体验，避免不必要的消息干扰。

*   **底层问题修复**：
    *   Issues #4057, #4060, #4063, #4059 等一系列底层 Bug 已关闭，涉及会话键碰撞、Anthropic 提供者数据块缺失、流合并异常等核心问题，显示出维护团队正在对底层协议层进行深度清洗。

*   **正在进行的重要工作**：
    *   [PR #4571](https://github.com/HKUDS/nanobot/pull/4571) **[OPEN]**：提出了原生 A2A（Agent-to-Agent）对等委托机制，旨在替代单一的 `spawn` 模式，实现多智能体协作，这是架构层面的重大演进。
    *   [PR #4570](https://github.com/HKUDS/nanobot/pull/4570) **[OPEN]**：实现了子代理模型覆盖功能，解决了子代理必须继承父代理模型的限制。

## 4. 社区热点
今日社区讨论最热烈的话题围绕项目架构定义与用户体验展开：

*   **[Issue #660](https://github.com/HKUDS/nanobot/issues/660) [CLOSED]**：**“超轻量级”定义之争**。该 Issue 指出项目声称轻量但依赖了 Node.js，引发了关于项目定位的讨论（14条评论，5点赞）。随着 Issue 的关闭，社区可能已就依赖必要性达成共识或给出了官方解释。
*   **[Issue #4500](https://github.com/HKUDS/nanobot/issues/4500) [OPEN]**：**WebUI 流式传输卡死问题**。用户反馈在重连或自我重启后，UI 会陷入“处理中”假死状态，且停止按钮失效。该问题直接打击用户信任度，目前已有 [PR #4565](https://github.com/HKUDS/nanobot/pull/4565) 提出修复方案，是今日最受关注的用户体验痛点。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在性能、安全与数据一致性方面，严重程度分布如下：

*   **🔴 高危 - 安全漏洞**：
    *   **[Issue #4521]** (关联 [PR #4562](https://github.com/HKUDS/nanobot/pull/4562))：Shell 命令校验逻辑存在绕过风险，允许通过拼接命令（如 `echo x && touch /tmp/evil`）绕过白名单。目前已提交修复 PR，正在审核中。

*   **🟠 中危 - 性能与缓存失效**：
    *   [Issue #4222](https://github.com/HKUDS/nanobot/issues/4222)：`max_messages` 截断机制导致 Prompt 前缀漂移，致使缓存持续失效，大幅增加 API 成本与延迟。修复方案见 [PR #4568](https://github.com/HKUDS/nanobot/pull/4568)。

*   **🟡 低危 - 逻辑缺陷**：
    *   [Issue #4057](https://github.com/HKUDS/nanobot/issues/4057) **[FIXED]**：不同会话键因文件名清理逻辑导致磁盘存储冲突（如 `telegram:a_b` 与 `telegram:a:b`）。
    *   [Issue #4060](https://github.com/HKUDS/nanobot/issues/4060) **[FIXED]**：Anthropic 提供者在特定情况下输出缺少 `type` 字段，导致解析错误。

## 6. 功能请求与路线图信号
今日的功能请求反映出用户对精细化控制和扩展性的强烈需求：

*   **多模型路由** ([Issue #4231](https://github.com/HKUDS/nanobot/issues/4231))：用户希望子代理能使用与主代理不同的模型（如主代理用 GPT-4，子代理用 GPT-3.5 以节约成本）。该功能已由 [PR #4570](https://github.com/HKUDS/nanobot/pull/4570) 实现，极大概率在下个版本发布。
*   **多智能体协作** ([PR #4571](https://github.com/HKUDS/nanobot/pull/4571))：社区正在推动从“单兵作战”向“团队协作”转型，引入 Supervisor-Researcher 等模式，这符合 AI Agent 发展的主流趋势。
*   **生态集成** ([PR #4459](https://github.com/HKUDS/nanobot/pull/4459))：新增 Mattermost 渠道支持，表明项目正积极拓展除 Telegram/Discord 之外的企业级通讯平台。

## 7. 用户反馈摘要
*   **痛点**：
    *   **UI 可靠性**：WebUI 的流式响应在异常中断后缺乏自愈能力，导致用户必须刷新页面。
    *   **资源开销**：部分用户对“轻量级”宣传与实际依赖（Python+Node）之间的差距表示困惑，建议文档或构建流程优化。
    *   **成本控制**：上下文管理策略的不稳定导致 Prompt 缓存命中率低，增加了 API 调用成本。
*   **满意点**：
    *   社区对定时任务功能的迭代表示认可，特别是静默模式的加入解决了自动化任务的噪音问题。
    *   开发者对底层 Bug 的响应速度极快，多个存在数周的技术债务（如 Session 键冲突）在今日被集中修复。

## 8. 待处理积压
以下重要 Issue/PR 仍处于开启状态，建议维护者优先关注：

*   **[PR #4568](https://github.com/HKUDS/nanobot/pull/4568)**：针对缓存失效的关键修复，直接影响 API 成本，建议尽快 Review 合并。
*   **[PR #4565](https://github.com/HKUDS/nanobot/pull/4565)**：修复 WebUI 卡死问题，直接影响用户留存。
*   **[PR #4571](https://github.com/HKUDS/nanobot/pull/4571)**：A2A 多智能体架构重构，属于大型功能变更，需要核心团队进行详细的架构评审。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

以下是 Zeroclaw 项目 2026-06-28 的动态日报：

### 1. 今日速览
Zeroclaw 项目今日保持极高的开发活跃度，Issues 与 PRs 更新量分别达到 47 条和 50 条，显示项目正处于功能密集开发与架构优化阶段。尽管无新版本发布，但社区焦点集中在 **v0.8.3 运行时稳定性修复**与 **v0.9.0 安全架构重构**上。多个高风险 RFC（如供应链安全、Wasm 插件运行时）进入深入讨论或实施阶段，显示出项目正向企业级安全标准迈进。待合并 PR 数量达到 41 条，积压明显，建议关注合并节奏以防阻塞。

### 2. 版本发布
无新版本发布。

### 3. 项目进展
今日共有 9 个 PR 合并/关闭，重点推进了运行时修复与文档完善，但大型重构 PR 仍在审查中。

*   **[已关闭] 多数据库会话后端支持 (PR #6893)**: 尝试为 Zeroclaw 增加 PostgreSQL、Oracle、MySQL 等后端支持的大型 PR 被关闭。虽然该功能需求强烈，但可能因复杂度或架构调整暂时搁置。
    *   链接: [zeroclaw-labs/zeroclaw PR #6893](https://github.com/zeroclaw-labs/zeroclaw/pull/6893)
*   **[已关闭] Provider 限流冷却修复 (PR #8317)**: 修复了 Provider 在遭遇 429 限流后的冷却处理逻辑，解决了 fallback 模型可能立即重试导致连锁失败的问题。
    *   链接: [zeroclaw-labs/zeroclaw PR #8317](https://github.com/zeroclaw-labs/zeroclaw/pull/8317)
*   **[已合并] 文档与测试修复**: 合并了包括 CLI 文档占位符转义 (PR #8204)、硬件目录工具名格式测试 (PR #8301) 等多项小修复，持续提升代码健壮性。
    *   链接: [zeroclaw-labs/zeroclaw PR #8204](https://github.com/zeroclaw-labs/zeroclaw/pull/8204)

### 4. 社区热点
今日讨论最活跃的 Issues 集中在安全加固与核心架构设计：

*   **供应链安全签名 RFC (Issue #8177)**: 评论数达 10 条。社区正在讨论引入硬件 PGP 密钥、密封构建 和 SLSA 来源证明，以增强容器镜像与二进制文件的安全性。该 Issue 目前处于 `blocked` 状态，急需解决阻塞问题。
    *   链接: [zeroclaw-labs/zeroclaw Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)
*   **Goal Mode 自主目标模式 (Issue #8303 & PR #8393)**: 评论数 3 条但关注度极高。RFC 已被接受，旨在实现“设定目标后 Agent 自主执行直至完成”的闭环模式。PR #8393 已提交基础架构代码，这是迈向高级自主智能体的关键一步。
    *   链接: [zeroclaw-labs/zeroclaw Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)
    *   链接: [zeroclaw-labs/zeroclaw PR #8393](https://github.com/zeroclaw-labs/zeroclaw/pull/8393)
*   **MCP 资源与 Prompt 支持 (Issue #4467)**: 获得了 4 个 👍。用户强烈希望 Zeroclaw 能从 MCP 服务器读取资源而不仅仅是调用工具，以提升与外部系统的集成能力。
    *   链接: [zeroclaw-labs/zeroclaw Issue #4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467)

### 5. Bug 与稳定性
今日报告了多个影响工作流的关键 Bug，部分已有修复方案。

*   **[S1 - 严重] 上下文预算即刻超限 (Issue #5808)**: 默认 `max_context_tokens = 32000` 配置下，首次 LLM 迭代即因系统提示词和工具定义过大导致预算超支 3.3 倍，引发无限裁剪循环。目前状态 `in-progress`。
    *   链接: [zeroclaw-labs/zeroclaw Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)
*   **[S2 - 中等] Cron/Heartbeat 发送噪音消息 (Issue #2128 -> PR #8405)**: 定时任务和心跳在无需回复时，错误地将 "NO_REPLY" 字面字符串发送至 Telegram 等频道。
    *   **修复状态**: 已有 Fix PR #8405，正在审查中。
    *   链接: [zeroclaw-labs/zeroclaw Issue #2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128)
    *   链接: [zeroclaw-labs/zeroclaw PR #8405](https://github.com/zeroclaw-labs/zeroclaw/pull/8405)
*   **[S2 - 中等] Heartbeat 引擎路径读取错误 (Issue #8366)**: 引擎错误地从 `data_dir` 而非 `agent workspace` 读取 `HEARTBEAT.md`，导致多实例部署下任务配置混乱。
    *   链接: [zeroclaw-labs/zeroclaw Issue #8366](https://github.com/zeroclaw-labs/zeroclaw/issues/8366)

### 6. 功能请求与路线图信号
结合 Issue 与 PR 动态，项目路线图呈现明显的技术深化趋势：

*   **安全架构升级**: 除了上述供应链签名，Issue #8398 提出了细化插件权限模型的需求，Issue #8056 和 #8057 正在推进 CI 流水线中的安全审计。预计 v0.9.0 将大幅提升安全门槛。
*   **离线与成本管理**: PR #8380 正在实现离线定价目录与成本统计功能，针对无法访问云网关的隔离环境，这与 Issue #8177 的安全加固形成配套。
*   **Channel 体验优化**: Issue #8410 和 #8409 分别提出了 Channel 任务“静默模式”和 Cron 任务原始输出支持，反映了用户对生产环境日志清洁度的迫切需求。

### 7. 用户反馈摘要
*   **痛点**: 默认配置与复杂工具链的兼容性差（Issue #5808），导致新用户开箱即用即报错；Channel 消息噪音大（Issue #2128），影响生产环境观感。
*   **场景**: 多租户环境下的身份与权限隔离需求强烈（Issue #8226, #8398），企业级用户对安全与审计有硬性要求。
*   **满意度**: 社区对 MCP 支持扩展（Issue #4467）反应积极，表明 Zeroclaw 作为 MCP Client 的生态价值受认可。

### 8. 待处理积压
*   **[长期阻塞] 提交恢复审计 (Issue #6074)**: 追踪 153 个在 Bulk Revert 中丢失的提交，此 Issue 关乎代码历史完整性，需持续维护者关注。
    *   链接: [zeroclaw-labs/zeroclaw Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)
*   **[需评审] 全渠道预构建资源发布 (Issue #7952)**: 建议发布包含所有 Channel 适配器的完整版二进制包，目前标记为 `needs-maintainer-review`。
    *   链接: [zeroclaw-labs/zeroclaw Issue #7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952)
*   **[高风险] MCP Bundles 安全隔离失效 (Issue #7733)**: `mcp_bundles` 配置被解析但未强制执行，导致安全隔离策略形同虚设，需尽快修复。
    *   链接: [zeroclaw-labs/zeroclaw Issue #7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-28)

## 1. 今日速览
Hermes Agent 项目今日保持高度活跃，社区与开发团队互动频繁。过去 24 小时内，项目共处理了 **50 条 Issues**（关闭 33 条）和 **50 条 PRs**（合并/关闭 28 条），显示出维护者正在积极清理积压问题并推进功能迭代。今日重点关注在于修复多个导致会话卡死的严重 Bug（P1 级别），特别是针对 Gateway 服务、Anthropic 流式处理及会话恢复逻辑的修复。虽然没有发布新版本，但多项关键修复已合并，预示着下一次更新将显著提升稳定性。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日合并与关闭的 PR 主要集中在**稳定性修复**与**用户体验优化**，显著提升了系统的健壮性：

*   **关键会话卡死修复**：PR #53939 修复了 WebUI/TUI 会话在工具循环中断后无法恢复、永久卡在 "thinking" 状态的问题 ([Issue #29086](https://github.com/NousResearch/hermes-agent/issues/29086))。PR #53931 解决了 `auth.json` 错误覆盖 `config.yaml` 配置导致运行时混乱的问题 ([Issue #29285](https://github.com/NousResearch/hermes-agent/issues/29285))。
*   **Skill 系统修复**：PR #26688 和 #40411 解决了 Curator 错误归档或删除活跃技能的严重 Bug，确保了技能管理的可靠性 ([Issue #29912](https://github.com/NousResearch/hermes-agent/issues/29912))。
*   **平台兼容性**：PR #53962 修复了 Windows 平台上 `gh` 子进程频繁弹出控制台窗口的问题，改善了桌面端体验。
*   **Provider 适配**：PR #53837 修复了 NVIDIA NIM 压缩输出为空的问题，PR #53971 修正了 Anthropic OAuth token 交换的端点地址。

## 4. 社区热点
今日社区讨论最热烈的话题集中在跨设备同步与核心稳定性上：

*   **[Feature] 跨设备配置云同步** ([Issue #20510](https://github.com/NousResearch/hermes-agent/issues/20510))
    *   **热度**：👍 14, 评论 7
    *   **诉求**：用户强烈希望能同步 `~/.hermes/` 下的配置、Profile 和 Skills，解决多设备工作时的配置碎片化问题。这是目前点赞数最高的功能请求。
*   **[Bug] Curator 错误归档活跃技能** ([Issue #29912](https://github.com/NousResearch/hermes-agent/issues/29912))
    *   **热度**：评论 8
    *   **诉求**：用户报告在进行 umbrella pass 时，Curator 可能误删关键操作技能，导致 Agent 功能受损。该问题已在今日修复。
*   **[Bug] Anthropic 流式响应挂起** ([Issue #28161](https://github.com/NousResearch/hermes-agent/issues/28161))
    *   **热度**：评论 7
    *   **诉求**：使用 Anthropic API 时流式响应卡死长达 15 分钟的问题引发了大量讨论，涉及重试机制与客户端替换逻辑的深层缺陷。

## 5. Bug 与稳定性
今日报告并处理的 Bug 数量较多，主要集中在 Agent 核心循环与 Gateway 稳定性：

*   **P1 - 严重**:
    *   **会话死循环与卡死**：DeepSeek 模型在处理矛盾指令时陷入死循环 ([Issue #29086](https://github.com/NousResearch/hermes-agent/issues/29086))，以及工具调用中途冻结 ([Issue #28834](https://github.com/NousResearch/hermes-agent/issues/28834))，严重影响使用。均已修复。
    *   **Gateway 服务崩溃**：多 Profile 环境下 Gateway 服务进入 SIGTERM 震荡循环 ([Issue #29092](https://github.com/NousResearch/hermes-agent/issues/29092))。
    *   **配置优先级错误**：`auth.json` 意外覆盖显式配置 ([Issue #29285](https://github.com/NousResearch/hermes-agent/issues/29285))。
*   **P2 - 中等**:
    *   **桌面端 UI 状态残留**：压缩任务完成后界面仍显示 "Summarizing thread" ([Issue #48098](https://github.com/NousResearch/hermes-agent/issues/48098))。
    *   **OAuth 登录失败**：Anthropic OAuth 因端点变更导致登录失败 ([PR #53971](https://github.com/NousResearch/hermes-agent/pull/53971))。
*   **安全性**：
    *   已关闭两个安全追踪 Issue ([Issue #29149](https://github.com/NousResearch/hermes-agent/issues/29149), [Issue #29151](https://github.com/NousResearch/hermes-agent/issues/29151))，涉及会话劫持与凭证池同步漏洞，相关修复已在进行中 ([PR #44073](https://github.com/NousResearch/hermes-agent/pull/44073))。

## 6. 功能请求与路线图信号
*   **MoA 推理增强**：新增请求允许为 MoA（Mixture-of-Agents）参考模型槽单独设置 `reasoning_effort` ([Issue #53932](https://github.com/NousResearch/hermes-agent/issues/53932))，表明社区对 MoA 细粒度控制的需求增加。
*   **会话分叉**：PR #53969 提议增加 `/side` 命令，允许用户将当前会话分叉到临时对话中，这类似于 Codex CLI 的交互模式，有望提升多任务处理效率。
*   **国际化 (i18n)**：PR #53788 正在推进 Gateway 生命周期通知的本地化工作，表明项目正着手支持多语言用户界面。

## 7. 用户反馈摘要
*   **痛点**：用户对**会话状态管理**（卡死、恢复失败、重放错误）感到沮丧，认为这是目前最影响体验的环节。同时，**配置管理**（同步、优先级混乱）也是高频吐槽点。
*   **场景**：多设备办公用户迫切需要配置同步方案；重度 CLI/WebUI 用户对 Agent 能够从工具调用错误中自动恢复有较高期待。
*   **正面反馈**：社区对维护者快速响应并修复 P1 级 Bug（如 Curator 和 Auth 优先级问题）表示认可。

## 8. 待处理积压
*   **跨设备同步需求** ([Issue #20510](https://github.com/NousResearch/hermes-agent/issues/20510))：虽高度活跃但尚无官方 PR 或明确排期，建议维护者关注。
*   **Gateway 安全加固** ([PR #44073](https://github.com/NousResearch/hermes-agent/pull/44073))：该 PR 涉及外部访问权限控制的重大变更，已提交多日，今日仍有更新，建议尽快 Review 合并以修复潜在安全风险。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-28)

## 1. 今日速览
PicoClaw 项目今日整体呈现“清理积压与功能扩展并存”的态势。维护者重点处理了长期未响应的陈旧 Issues 和 PRs，共关闭了 2 个 Issues 和 2 个 PRs，显示出项目维护者正在整理项目看板。与此同时，社区贡献依然活跃，新增了一个关于 Simplex 通信渠道的 PR 和一个 Matrix 加密相关的 Bug 报告。虽然今日无新版本发布，但通过清理陈旧分支和接纳新渠道提案，项目保持了中等的活跃度与健康迭代节奏。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
今日项目进展主要集中在**代码库维护与清理**，以及**新通信渠道的接入**。

*   **陈旧分支清理**：关闭了 2 个长期未更新的 Pull Requests。
    *   [PR #2937](https://github.com/sipeed/picoclaw/pull/2937) `Feat/agent collaboration`：该 PR 旨在引入 Agent 协作总线功能，包含持久化通信和权限感知等特性，但因长期未活跃已于今日关闭。这表明该功能的合并在当前阶段受阻，可能需要重新设计或后续重提。
    *   [PR #3048](https://github.com/sipeed/picoclaw/pull/3048) `fix(mcp): reject unknown pre-positional flags`：针对 MCP 命令参数解析的修复 PR，同样因陈旧被关闭。
*   **新功能提案**：
    *   [PR #3193](https://github.com/sipeed/picoclaw/pull/3193) `Added simplex channel type`：由 @dim 提交，新增了 Simplex 渠道类型，目前状态为 Open。若合并，将增强 PicoClaw 在去中心化通信协议方面的支持能力。

## 4. 社区热点
今日社区讨论焦点集中在**跨平台兼容性**与**权限控制安全性**上。

*   **Windows 兼容性问题**：[Issue #2472](https://github.com/sipeed/picoclaw/issues/2472) 以 7 条评论成为今日讨论最多的 Issue。该 Issue 指出 `list_dir` 在 Windows 下因路径分隔符差异导致报错。虽然该 Issue 今日已关闭，但高评论量反映出 Windows 用户对底层文件系统兼容性的强需求。
*   **Telegram 权限分级**：[Issue #3114](https://github.com/sipeed/picoclaw/issues/3114) 提出了针对 Telegram 不同对话类型（私聊/群组/频道）进行权限分级的需求。用户希望在群组中限制危险操作（如 `exec`），这反映了用户在多场景部署 AI Agent 时对安全边界的深切关注。该 Issue 已于今日关闭。

## 5. Bug 与稳定性
今日报告了 1 个新的功能性 Bug，另有 1 个跨平台 Bug 被关闭。

*   **[NEW] [MEDIUM]** [Issue #3194](https://github.com/sipeed/picoclaw/issues/3194) `Received encrypted message but crypto is not enabled`：
    *   **详情**：用户在 Matrix 渠道收到加密消息时程序报错，提示未启用加密功能。
    *   **状态**：Open，暂无修复 PR。涉及 Matrix 端到端加密的实现细节，需关注后续修复进展。
*   **[FIXED/CLOSED]** [Issue #2472](https://github.com/sipeed/picoclaw/issues/2472) `[BUG] list_dir returns "invalid argument" on Windows`：
    *   **详情**：Windows 路径分隔符与 Go `fs.FS` 要求不匹配。
    *   **状态**：Closed (Stale)。虽然已关闭，但这是 Windows 用户的实际痛点，需关注是否已通过其他方式解决。

## 6. 功能请求与路线图信号
*   **通信渠道扩展**：[PR #3193](https://github.com/sipeed/picoclaw/pull/3193) 的提交表明项目正致力于扩大“连接器”生态，Simplex 协议的加入符合当前 AI Agent 追求隐私通信的趋势，极有可能在下一版本中纳入。
*   **安全性增强**：虽然 [Issue #3114](https://github.com/sipeed/picoclaw/issues/3114) 已关闭，但“按对话类型分级权限”的需求信号强烈。结合此前关闭的 Agent Collaboration PR，项目方可能在重新评估权限与协作架构，建议关注后续是否有重构相关的 PR 出现。

## 7. 用户反馈摘要
从今日 Issue 评论中可提炼出以下用户画像与痛点：
*   **跨平台痛点**：Windows 用户在使用文件系统相关接口时遇到阻碍（路径分隔符问题），希望项目能提供更鲁棒的跨平台支持。
*   **安全焦虑**：用户在将 PicoClaw 接入即时通讯软件（如 Telegram）时，非常在意权限隔离，担心 AI Agent 在群聊中被滥用执行危险命令。
*   **隐私需求**：Matrix 端到端加密功能的报错反馈显示，部分进阶用户正在尝试将 PicoClaw 用于隐私敏感场景。

## 8. 待处理积压
*   **新提交 PR 待Review**：[PR #3193](https://github.com/sipeed/picoclaw/pull/3193) (Simplex Channel) 是今日唯一的新增功能性 PR，建议维护者优先审查，以确认新渠道接入的代码质量。
*   **新 Bug 待确认**：[Issue #3194](https://github.com/sipeed/picoclaw/issues/3194) (Matrix 加密) 为今日新开且未获回复，可能影响隐私通信场景，需开发者确认是否为配置问题或代码缺陷。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-28)

## 1. 今日速览
NanoClaw 项目今日保持高度活跃的开发状态，社区贡献主要集中在功能增强与架构优化方面。过去 24 小时内虽然没有新的版本发布或代码合并，但提交了 **8 个待合并的 PR** 和 **2 个活跃 Issue**，显示出贡献者正在为下一个版本积蓄力量。重点关注领域包括容器运行时的重构、OpenCode 模型的细粒度配置支持以及部署流程的改进。整体来看，项目处于功能快速迭代与积压问题清理并行的阶段。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日虽无 PR 被合并，但待合并的 PR 队列显示出项目正在向更灵活的架构演进：

*   **架构重构与清理**：贡献者 @CutSnake01 提交了一系列重构 PR ([#2822](链接: nanocoai/nanoclaw PR #2822), [#2823](链接: nanocoai/nanoclaw PR #2823), [#2824](链接: nanocoai/nanoclaw PR #2824))，旨在清理陈旧的挂载点、全局文件及提示词指令。这些改动将降低维护成本，提升容器启动的整洁性。
*   **功能增强**：@grantland 贡献了两个重要功能 PR，分别是支持按组覆盖模型配置 ([#2872](链接: nanocoai/nanoclaw PR #2822)) 和新增 Dashboard 推送功能 ([#2871](链接: nanocoai/nanoclaw PR #2871))，这标志着项目在可观测性和多模型支持方面迈出了关键一步。
*   **Bug 修复推进**：针对昨日提出的技能更新失效问题，@glifocat 迅速响应并提交了修复 PR ([#2873](链接: nanocoai/nanoclaw PR #2873))，通过拆分预检逻辑解决更新静默失败的问题。

## 4. 社区热点
今日讨论焦点主要集中在以下两个技术痛点：

*   **Issue #2868 [OPEN]** (链接: nanocoai/nanoclaw Issue #2868): 关于 `/update-skills` 指令在已安装频道上静默失效的问题。该问题引发了关于维护流程的讨论，用户依赖此命令进行适配器代码和依赖的更新，目前的逻辑缺失阻碍了平滑迁移。已有 1 条评论，且对应的修复 PR 已提交。
*   **Issue #2876 [OPEN]** (链接: nanocoai/nanoclaw Issue #2876): 关于 OpenAI Provider 支持的讨论。用户发现 CLI 允许配置 OpenAI 提供商，但运行时容器会崩溃，反映了文档/API 层与运行时实现的不一致，引发了对功能完整性的关注。

## 5. Bug 与稳定性
今日报告了 2 个明确的 Bug，严重程度评估如下：

1.  **[严重] OpenAI Provider 运行时崩溃** — Issue #2876 (链接: nanocoai/nanoclaw Issue #2876)
    *   **现象**：CLI 接受 `--provider openai` 配置，但 Agent 接收消息启动容器时崩溃。
    *   **状态**：目前尚无修复 PR，功能不可用，影响希望切换模型提供商的用户。
2.  **[中等] 技能更新逻辑失效** — Issue #2868 (链接: nanocoai/nanoclaw Issue #2868)
    *   **现象**：对已安装频道执行 `/update-skills` 会静默跳过代码和依赖刷新。
    *   **状态**：已有修复 PR #2873 (链接: nanocoai/nanoclaw PR #2873)，待审核合并。
3.  **[修复] Signal-cli 启动抖动** — PR #2874 (链接: nanocoai/nanoclaw PR #2874)
    *   **内容**：修复 signal-cli 启动时的不稳定问题，防止陷入崩溃循环。目前为待合并状态。

## 6. 功能请求与路线图信号
从 Issue 和 PR 分析，未来的版本路线图显现出以下信号：

*   **多模型灵活配置**：PR #2872 显示项目正致力于打破单一模型限制，允许每个 Agent Group 独立配置模型，响应了社区对多模型切换的强烈需求。
*   **可观测性增强**：PR #2871 提出的 Dashboard Pusher 功能表明项目组正着手构建配套的可视化监控体系，提升运维友好度。
*   **部署多元化**：PR #2875 提及 Coolify 部署支持，暗示项目希望降低自托管部署门槛，吸引更多非技术背景用户。
*   **OpenAI 集成完善**：Issue #2876 暴露了 OpenAI Provider 的缺失，预计这将是一个高优先级的补全任务，可能很快会有相关 PR 提出。

## 7. 用户反馈摘要
*   **痛点：配置与运行时不匹配**：用户 @MJDemarcus 反馈，CLI 提供的选项应与运行时实际支持的功能对齐，目前的“假支持”导致配置后崩溃，用户体验不佳。
*   **痛点：维护流程受阻**：用户 @glifocat 指出，现有的更新逻辑阻碍了用户平滑获取最新的适配器代码，迫使维护者不得不通知用户手动重新添加频道，操作繁琐。
*   **场景：自托管与监控**：新提交的功能 PR 显示，用户群体对于自托管监控面板和多模型混合部署有明确需求。

## 8. 待处理积压
以下 PR 创建时间较早但今日仍有更新，建议维护者优先处理以推进代码合并：

*   **PR #2822** (链接: nanocoai/nanoclaw PR #2822) [Refactor]: 移除废弃的 `/workspace/global` 挂载点。
*   **PR #2823** (链接: nanocoai/nanoclaw PR #2823) [Fix]: 删除主机启动时会被删除的全局文件。
*   **PR #2824** (链接: nanocoai/nanoclaw PR #2824) [Fix]: 清理主种子提示词中的过时指令。

上述三个 PR 均由 @CutSnake01 提出于 6 月 20 日，至今已超一周，建议项目组尽快 Review 以完成代码清理工作。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-06-28)

## 1. 今日速览
NullClaw 项目今日整体呈现出“低频高质”的开发态势。虽然今日无新版本发布，但核心开发活动聚焦于智能体交互流程的重构，提交了关键的审批流功能 PR。社区方面，关于移动端构建的讨论持续发酵，一个长期存在的 Android/Termux 兼容性问题再次活跃，显示出用户对跨平台部署的强烈需求。整体来看，项目正处于功能完善与稳定性修复并行的阶段，维护者响应较为及时。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日无已合并的 PR。项目推进主要体现在新功能的提案与开发上：
*   **[新增功能] 智能体审批流机制：** 今日新开的 PR #969 `feat(agent): structured approval_request / approval_response flow` 引入了结构化的工具审批流程。该功能旨在为 Shell 工具及其他可能产生副作用的操作增加“双轮确认”机制。当工具执行需要授权时，Agent 将捕获错误并挂起，通过 SSE 通道推送审批请求，等待用户确认后继续执行。这一改进将显著提升 NullClaw 在自动化操作中的安全性与可控性。

## 4. 社区热点
今日社区活跃度主要集中在移动端兼容性问题的讨论上：
*   **Issue #868 [OPEN] [bug] zig build fails on Android/Termux (aarch64)**
    *   **链接：** [nullclaw/nullclaw Issue #868](https://github.com/nullclaw/nullclaw/issues/868)
    *   **分析：** 该 Issue 于 4 月创建，昨日再次活跃。讨论焦点集中在 Android 环境（特别是 Termux）下 Zig 编译过程中出现的权限拒绝错误 (`AccessDenied`)。用户提供了详尽的设备信息（Xiaomi Redmi Note 9, LineageOS 22.2）和环境配置。这反映了部分开发者希望在移动设备（手机/平板）上部署或运行 NullClaw Agent 的诉求，目前的构建系统在处理 Android 文件系统权限或链接机制时存在阻碍。

## 5. Bug 与稳定性
今日无新增 Bug 报告，但有一例存量 Bug 持续受到关注：
*   **[中等] Android/Termux 构建失败 (Issue #868)**
    *   **描述：** 用户在 Android Termux 环境下执行 `zig build` 时，因 `linkat` 操作遭遇 `AccessDenied` 错误导致构建中断。
    *   **严重程度：** 中等。该问题阻塞了特定平台用户的部署，但不影响主流桌面端用户。
    *   **状态：** 问题尚未解决，目前无关联的 Fix PR。

## 6. 功能请求与路线图信号
*   **安全交互范式：** PR #969 的提交表明项目正在加强“人机协作”的安全边界。通过引入显式的审批流，未来的 NullClaw 智能体在执行高风险 Shell 指令时将更加可靠，这可能成为下一版本的核心特性之一。
*   **跨平台支持：** Issue #868 的活跃暗示了社区对 Android 原生支持的期待。虽然目前官方可能未将移动端构建作为优先级，但随着此类反馈的积累，可能会推动项目优化构建脚本以适配 Termux 环境。

## 7. 用户反馈摘要
从 Issue #868 的评论区及描述中可以提炼出以下用户痛点：
*   **移动端开发痛点：** 用户尝试在性能较强的安卓设备上运行项目，但受限于构建工具链的兼容性。
*   **文档/环境指引缺失：** 用户不得不自行摸索 Termux 环境下的依赖安装与构建，遇到权限错误时缺乏明确的排查指引。
*   **环境细节：** 用户环境多为 Zig 0.16.0 + Termux，错误信息显示 `error: failed to link temporary file`，表明临时文件处理逻辑在 Android 权限模型下存在冲突。

## 8. 待处理积压
*   **Issue #868 (Android 构建问题)：** 该问题已存在两个月余，虽然近期有讨论，但尚未见官方给出明确解决方案或 Workaround。建议维护者关注该 Issue，若暂不支持 Android 构建，可在文档或 Issue 模板中予以说明，以减少用户无效尝试。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-28)

## 1. 今日速览
IronClaw 项目今日呈现出极高的开发活跃度与迭代速度，主要集中在 "Reborn" 架构的重构与功能增强上。过去 24 小时内，项目成功关闭了 9 个 Issues 并合并/关闭了 23 个 PRs，显示出维护团队对代码库的高效治理。核心进展在于 **Capability Policy（能力策略）** 系统的全面落地，相关 Epic (#5261) 下的核心模块均已合并，为细粒度权限管理奠定了基础。同时，集成测试框架与 WebUI 的修复工作也在并行推进，项目整体正处于功能密集交付期。

## 2. 版本发布
今日无新版本 Release 发布。
*注：当前存在一个正在进行的发布准备 PR (#5311)，预计下一个版本将包含 `ironclaw_common` 和 `ironclaw_skills` 的 API 破坏性更新，建议用户关注后续发布说明。*

## 3. 项目进展
今日项目取得了重大进展，主要集中在权限系统与基础设施构建：

*   **权限系统全面落地**：随着 PR #5355 的合并，Epic #5261 的核心链条（Policy Model -> Engine -> Availability -> Control Plane）已全部打通。此次更新引入了 REST 控制平面，允许管理员通过 API 进行细粒度的权限授予，标志着 Reborn 栈正式支持多用户角色（Owner/Admin/Member）权限管理。
*   **用户角色体系重构**：PR #5270 已合并，为 WebChat-v2 增加了 DB 支持的用户角色与管理员门控，解决了之前无法在本地测试环境区分用户权限的问题。
*   **测试基础设施建设**：PR #5381 已合并，建立了 Reborn 集成测试框架，引入了脚本化 SDK 接缝与 HTTP 出口断言 API，显著提升了复杂工具调用流的测试确定性。

## 4. 社区热点
今日社区与开发活动聚焦于以下领域：

*   **[Epic #5261] Reborn Capability Policy**：作为今日的绝对核心，该 Epic 及其子任务引发了大量讨论与代码提交。社区与开发者致力于解决“管理员共享工具与技能的细粒度鉴权”问题，这是多租户场景下的关键需求。
    *   链接: [nearai/ironclaw Issue #5261](https://github.com/nearai/ironclaw/issues/5261)
*   **[PR #5311] 下一个版本发布准备**：该 PR 包含了多个核心库的版本升级，引起了开发者的注意，尤其是标记为 "API breaking changes" 的变更，预示着接口将有不兼容调整。
    *   链接: [nearai/ironclaw PR #5311](https://github.com/nearai/ironclaw/pull/5311)
*   **[PR #5380] QA 矩阵覆盖扩展**：针对 Reborn WebUI v2 的大规模 QA 矩阵测试正在搭建中，表明项目在功能迭代的同时，质量保障体系正在紧跟步伐。
    *   链接: [nearai/ironclaw PR #5380](https://github.com/nearai/ironclaw/pull/5380)

## 5. Bug 与稳定性
今日修复了多个影响用户体验的关键 Bug，同时有部分稳定性问题仍在追踪中：

*   **[已修复] OAuth 令牌刷新失败 (Issue #5378)**：修复了在 `hosted-single-tenant` 模式下，Google OAuth 令牌每小时强制重新认证的问题，解决了严重的使用中断。
    *   链接: [nearai/ironclaw Issue #5378](https://github.com/nearai/ironclaw/issues/5378)
*   **[已修复] Notion OAuth 回调错误 (Issue #4928)**：解决了 Railway 部署环境下 Notion MCP 授权回调至 localhost 导致无法访问的问题。
    *   链接: [nearai/ironclaw Issue #4928](https://github.com/nearai/ironclaw/issues/4928)
*   **[待修复] Nightly E2E 测试失败 (Issue #4108)**：自动化测试流水线依然存在失败情况，尚未得到根本解决，需维护者持续关注。
    *   链接: [nearai/ironclaw Issue #4108](https://github.com/nearai/ironclaw/issues/4108)
*   **[进行中] WebUI 错误信息优化 (PR #5338)**：针对工具调用失败时仅显示模糊的 "invalid_input" 问题，正在通过该 PR 实现全链路错误透传，以提升排查效率。
    *   链接: [nearai/ironclaw PR #5338](https://github.com/nearai/ironclaw/pull/5338)

## 6. 功能请求与路线图信号
*   **[已实现] 默认开启工具自动允许 (Issue #5364)**：用户反馈频繁弹出的工具审批提示影响体验，Issue 提议将 "Always allow eligible tools" 设为默认开启。该功能请求已迅速被采纳并关闭（预计随新版本发布生效），反映了团队对用户体验的积极响应。
    *   链接: [nearai/ironclaw Issue #5364](https://github.com/nearai/ironclaw/issues/5364)
*   **[规划中] 权限配置粒度 (Issue #5385)**：新增了对 Owner/Admin/Member 三种角色的具体权限配置能力，这实际上是 Epic #5261 的延续，表明下一阶段将重点打磨权限管理的具体配置界面与逻辑。

## 7. 用户反馈摘要
*   **痛点：OAuth 连接稳定性**：多位用户反馈在托管部署环境中遇到 OAuth 频繁断连问题（#5378），严重影响了 Gmail、Calendar 等插件的连续使用体验。
*   **痛点：错误信息晦涩**：用户在面对工具执行失败时，往往只能看到 "driver protocol error" 或 "invalid_input"，难以定位原因。PR #5338 的出现正是为了解决这一痛点。
*   **满意度提升**：团队对用户反馈的响应速度极快，例如关于默认审批设置的调整（#5364）迅速得到了处理，显示出项目的高活跃度和对用户需求的重视。

## 8. 待处理积压
*   **长期未解决的 E2E 不稳定性**：Issue #4108 (Nightly E2E failed) 自 5 月底开启以来一直未彻底解决，今日再次触发失败通知。这可能会成为阻碍项目高质量发布的隐患。
    *   链接: [nearai/ironclaw Issue #4108](https://github.com/nearai/ironclaw/issues/4108)
*   **大型重构 PR 待合并**：PR #4841 ("no run-borking failures") 已开启超过两周，旨在消除运行时的不透明错误。虽然今日有更新，但仍未合并，建议优先 Review 以提升系统健壮性。
    *   链接: [nearai/ironclaw PR #4841](https://github.com/nearai/ironclaw/pull/4841)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 (2026-06-28)

## 1. 今日速览
LobsterAI 项目今日整体呈现“清理积压与暴露隐患”的态势。过去 24 小时内，项目迎来了较大规模的 Pull Request 状态更新，共涉及 8 个 PR，其中 7 个长期未合并的 PR 被批量关闭（多为 Stale 机制触发），这反映出项目维护者正在清理历史包袱，但也意味着部分社区贡献未能顺利合入。与此同时，Issue 列表新增 2 条报告，均涉及核心功能（安装与备份）的严重 Bug，且目前尚无修复 PR 响应，需引起开发者高度重视。整体而言，项目处于维护整理期，但稳定性面临新挑战。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日项目的动态主要集中在代码仓库的维护与清理上，功能迭代暂缓。

*   **清理历史 PR**：共有 7 个长期未处理的 PR 被关闭，均带有 `[stale]` 标签。这表明项目可能开启了自动化机器人清理机制，对长期未响应的贡献进行了归档。
    *   涉及功能包括：MCP SSE 流式支持 ([#1001](https://github.com/netease-youdao/LobsterAI/pull/1001))、网关重启循环修复 ([#1446](https://github.com/netease-youdao/LobsterAI/pull/1446))、国际化修复 ([#1448](https://github.com/netease-youdao/LobsterAI/pull/1448))、定时任务 UI 优化 ([#1449](https://github.com/netease-youdao/LobsterAI/pull/1449))、技能注入修复 ([#1453](https://github.com/netease-youdao/LobsterAI/pull/1453))、定时任务日期选择修复 ([#1454](https://github.com/netease-youdao/LobsterAI/pull/1454)) 及快捷键冲突检测 ([#1456](https://github.com/netease-youdao/LobsterAI/pull/1456))。
    *   **分析**：虽然关闭 Stale PR 有助于保持仓库整洁，但部分修复（如网关死循环、技能注入）涉及核心体验，未能合入实属遗憾，建议维护者评估是否需重新开启或提交新补丁。
*   **待处理 PR**：目前仍有 1 个 PR 处于 Open 状态。
    *   PR [#2065](https://github.com/netease-youdao/LobsterAI/pull/2065)：提出使用短 UUID 替代名称生成 Agent ID，旨在解决数据复活问题，属于架构层面的优化，值得关注。

## 4. 社区热点
今日社区活跃度较低，无高讨论量的帖子，但两起新开 Issue 均为高质量反馈，反映了用户在实际使用中的痛点。

*   **Issue [#2215](https://github.com/netease-youdao/LobsterAI/issues/2215)：安装失败 "Resource extraction failed"**
    *   **热度指标**：创建至今 0 评论。
    *   **分析**：用户提供了极为详尽的排查路径（日志分析、安全软件排查、路径发现等），最终定位可能是 NSIS 安装包逻辑问题。这种高质量 Issue 对开发者定位问题极具价值。
*   **Issue [#2214](https://github.com/netease-youdao/LobsterAI/issues/2214)：数据备份导致主进程卡死**
    *   **热度指标**：创建至今 0 评论。
    *   **分析**：涉及数据安全与程序稳定性，且为 100% 复现的高严重度 Bug。

## 5. Bug 与稳定性
今日报告的 Bug 均较为严重，影响用户基础使用，目前暂无官方修复 PR。

*   **🔴 严重 - 数据备份导致进程卡死** ([#2214](https://github.com/netease-youdao/LobsterAI/issues/2214))
    *   **现象**：Windows 11 环境下，点击“备份数据”后，主进程卡死，数据库约 71.6 MB。
    *   **根因推测**：用户怀疑是备份过程中主线程阻塞或 WAL 文件锁定问题。
    *   **状态**：Open，等待修复。

*   **🟠 高 - 安装程序资源提取失败** ([#2215](https://github.com/netease-youdao/LobsterAI/issues/2215))
    *   **现象**：Windows 安装阶段报错 "could not start extractor process"，错误码 -2147450726。
    *   **根因推测**：用户排查发现日志指向了错误的无关目录副本，可能是安装路径解析逻辑缺陷。
    *   **状态**：Open，等待修复。

## 6. 功能请求与路线图信号
今日无直接的新功能请求 Issue，但从现有 PR 动态可窥见项目演进方向：

*   **架构优化信号**：PR [#2065](https://github.com/netease-youdao/LobsterAI/pull/2065) 提出的 Agent ID 生成机制改革，旨在解决删除重名 Agent 导致旧数据“复活”的数据一致性问题。若该 PR 被采纳，将标志着项目在数据管理底层架构上的重要升级。
*   **潜在需求回溯**：被关闭的 Stale PR 中包含多项体验优化（如定时任务折叠、快捷键冲突检测），这暗示这些功能目前不在优先开发路线图中，或社区提交的方案未达标准，用户可能需要等待官方后续实现。

## 7. 用户反馈摘要
从今日 Issues 提炼出的用户真实反馈：

*   **痛点：数据安全焦虑**：用户对“数据备份”功能的稳定性要求极高，Issue #2214 反映出在大数据量场景下备份功能的脆弱性，直接打击用户对数据安全的信心。
*   **痛点：安装门槛**：Issue #2215 显示，对于非 C 盘安装或复杂磁盘环境的用户，安装程序可能存在路径识别错误，增加了用户的上手成本。
*   **画像：高技术力用户**：反馈 Bug 的用户具备阅读日志、分析 NSIS 脚本、排查环境变量的能力，说明 LobsterAI 的用户群体中技术型用户占比较高，他们对 Bug 的定位非常精准。

## 8. 待处理积压
*   **重点关注 PR**：[PR #2065](https://github.com/netease-youdao/LobsterAI/pull/2065)（Agent ID UUID 化）已开启近一个月，目前状态为 Open，建议维护者尽快 Review，以解决潜在的数据冲突隐患。
*   **响应滞后风险**：今日新增的两个严重 Bug（#2214, #2215）尚无人回复。考虑到其严重性（数据丢失风险、无法安装），建议维护者尽快介入确认或提供临时规避方案。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-06-28)

## 1. 今日速览
Moltis 项目今日整体保持平稳开发节奏，未发布新版本，但社区贡献活跃度尚可。过去24小时内共有 1 个新 Issue 提交和 2 个 PR 更新，主要集中在提升对本地小模型（如 Gemma 4）的兼容性及修复特定平台的环境问题。核心开发重点在于解决工具调用时的参数格式解析与容错，显示出项目正在向更鲁棒的“模型无关”方向演进。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日无已合并的 PR，但有 2 个正在活跃修复的 PR，均聚焦于提升 Agent 对非标准模型输出的兼容性：

*   **增强小模型参数解析兼容性**：PR [#1136](https://github.com/moltis-org/moltis/pull/1136) 针对 Gemma 4 等小模型常将标量参数（如 `true`, `5000`）误输出为字符串（`"true"`, `"5000"`）的问题，引入了强制类型转换机制。这将显著降低本地模型调用工具时的验证失败率，扩展了 Moltis 对开源小模型的支持边界。
*   **浏览器工具空值容错**：PR [#1098](https://github.com/moltis-org/moltis/pull/1098) 更新后继续保持 Open 状态，旨在修复浏览器工具调用时，模型对可选参数显式传 `null` 导致的解析错误。该修复有助于提升自动化浏览器任务的稳定性。

## 4. 社区热点
今日社区活跃度相对平缓，新开 Issue 引起了关注：

*   **Apple 平台容器部署问题**：Issue [#1137](https://github.com/moltis-org/moltis/issues/1137) 报告了在 Apple 环境下容器 ID 命名超出限制的 Bug。这反映了部分用户正在尝试将 Moltis 部署于 Apple 生态的容器化环境中，对跨平台支持提出了更高要求。

## 5. Bug 与稳定性
本日共报告 1 个新 Bug，且有 2 个修复类 PR 处于待合并状态：

*   **[中等] Apple Container ID 命名超限**：Issue [#1137](https://github.com/moltis-org/moltis/issues/1137) 指出 Apple Container ID 超出名称限制，可能导致在 macOS 或相关容器环境下的部署失败。目前暂无关联的 Fix PR，需维护者确认修复方案。
*   **[已修复待合并] 参数类型解析错误**：PR [#1136](https://github.com/moltis-org/moltis/pull/1136) 解决了小模型输出 JSON 字符串化标量参数导致的工具调用失败问题。
*   **[已修复待合并] 空值参数解析异常**：PR [#1098](https://github.com/moltis-org/moltis/pull/1098) 解决了浏览器工具参数显式传 `null` 时的兼容性问题。

## 6. 功能请求与路线图信号
虽然今日无显式的功能请求，但从提交记录中可洞察到以下路线图信号：

*   **本地小模型支持优化**：PR [#1136](https://github.com/moltis-org/moltis/pull/1136) 和 [#1098](https://github.com/moltis-org/moltis/pull/1098) 均明确针对 Gemma 4 等本地小模型进行优化。这表明项目正在积极填补“大模型完美调用”与“小模型幻觉/格式错误”之间的鸿沟，未来版本可能会进一步内置针对小模型的 Prompt 优化或后处理层。

## 7. 用户反馈摘要
从 Issue 内容及 PR 描述推断，用户反馈主要集中在以下痛点：

*   **特定平台部署困难**：用户在 Apple 容器化环境部署时遭遇阻碍，说明 Moltis 在非 Linux/x86 环境下的适配仍有提升空间。
*   **小模型工具调用易出错**：用户（通过贡献者代码体现）在使用本地模型时，频繁遭遇因模型输出格式不规范（如字符串化 JSON、多余空值）导致的任务中断。用户期望框架层能提供更强的容错能力，而非仅仅依赖模型本身的指令遵循能力。

## 8. 待处理积压
*   **PR [#1098](https://github.com/moltis-org/moltis/pull/1098)**：该 PR 创建于 2026-06-03，距今已近一个月，今日虽有更新但仍未合并。考虑到其解决了高频的浏览器工具空值问题，建议维护者优先 Review 并推进合并，以免影响后续版本发布。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-06-28)

## 1. 今日速览
CoPaw (QwenPaw) 项目今日保持高活跃度，核心重心显著向**代码质量与稳定性**倾斜。虽然未发布新版本，但项目迎来了大规模的单元测试覆盖升级，后端与前端测试体系正在快速完善。社区方面，针对 DeepSeek V4 模型兼容性的 Bug 修复进展迅速，已有 PR 响应；同时用户对“会话持久化”和“第三方模型接入”的呼声较高。整体来看，项目正处于夯实基础架构、提升健壮性的关键迭代期。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目主要在**基础设施测试覆盖**与**模型兼容性修复**两方面取得实质性进展：

*   **基础设施与测试体系完善**：
    *   关闭了 Issue #5580，并通过 PR #5581 新增了 App 基础设施层的单元测试，锁定了 Agentscope 2.0 的上下文变量契约。
    *   大量测试 PR 处于活跃状态，包括后端 Crons 模块 ([PR #5423](https://github.com/agentscope-ai/QwenPaw/pull/5423))、Runner 模块 ([PR #5422](https://github.com/agentscope-ai/QwenPaw/pull/5422)) 以及前端 Stores/Hooks/Control 页面测试 ([PR #5409](https://github.com/agentscope-ai/QwenPaw/pull/5409))。这表明项目正在系统性地偿还技术债务，为后续功能迭代构建安全网。
*   **功能修复与优化**：
    *   合并/关闭了 PR #5213，优化了 MCP 访问策略布局，提升了前端界面的响应式体验。
    *   新增 PR #5586，修复了运行时模型覆盖后上下文压缩阈值读取错误的问题，提升了多模型切换场景下的逻辑准确性。

## 4. 社区热点
今日社区讨论聚焦于**前沿模型兼容性**与**数据安全性**：

*   **DeepSeek V4 兼容性问题 ([Issue #5573](https://github.com/agentscope-ai/QwenPaw/issues/5573))**：这是今日评论数最多的 Issue。用户详细反馈了通过 OpenAI 兼容端点调用 DeepSeek V4 时遇到的 `reasoning_content` 流式缺失和 Schema 类型错误。该 Issue 引发了关于中转站适配与 SDK 错误处理的深入讨论。
*   **会话记录丢失痛点 ([Issue #5579](https://github.com/agentscope-ai/QwenPaw/issues/5579))**：用户报告在宿主机重启或服务崩溃时，对话记录会完全丢失。该问题直击 AI 助手“记忆”能力的软肋，社区对“断点续传”或“实时持久化”机制的诉求强烈。

## 5. Bug 与稳定性
今日报告的关键 Bug 主要涉及模型兼容性和数据持久化，部分已有修复方案：

1.  **[High] DeepSeek V4 调用报错 (已受理)**
    *   **问题**：Issue #5573 指出 DeepSeek V4 Thinking 模式在非官方端点下存在 Schema 清洗和流式响应解析错误。
    *   **状态**：已有修复 PR #5582，针对流式 `reasoning_content` 错误进行了兜底处理。
2.  **[High] 会话异常中断导致数据丢失 (待修复)**
    *   **问题**：Issue #5579 指出 Agent 执行重启命令或服务崩溃时，当前对话记录无法保存。
    *   **状态**：暂无关联修复 PR，属于架构层面的优化需求。
3.  **[Medium] 官方插件安装失败 (已修复)**
    *   **问题**：PR #5568 修复了 Agentscope 2.0 升级后导致官方插件安装失败的问题。
    *   **状态**：PR 已提交，等待合并。
4.  **[Low] 私有模型连接异常**
    *   **问题**：Issue #5584 反映新版本无法连接自定义 `ascend-vllm` 模型。
    *   **状态**：正在排查中。

## 6. 功能请求与路线图信号
*   **会话持久化机制**：针对 Issue #5579 的反馈，建议在下一版本中引入“增量保存”或“WAL (Write-Ahead Logging)”机制，防止异常场景下的进度丢失。
*   **Matrix 协议流式支持**：PR #5585 提议为 Matrix 渠道增加类似 Discord 的流式输出模式。这释放了 CoPaw 将继续扩展多平台实时交互能力的信号。
*   **数据分析能力扩展**：PR #4622 提交了 DataPaw 插件，包含 12 种 BI 技能。这表明项目正从单纯的对话助手向具备数据分析能力的智能体演进，可能成为下个版本的重点功能。

## 7. 用户反馈摘要
*   **真实痛点**：用户对“不稳定环境下的数据持久化”极度敏感。Issue #5579 中提到的“执行重启命令后对话全丢”揭示了 Agent 具备系统操作权限时的安全隐患。
*   **兼容性期待**：用户希望项目能更好地兼容各类第三方中转 API 和私有化部署模型（如 ascend-vllm），而不仅限于官方支持的模型列表。
*   **UI 细节**：Issue #5583 提到聊天界面弹出层选中背景不明显，反映出用户对 UI 交互细节的高要求。

## 8. 待处理积压
*   **[重要] PR #4622 (DataPaw 插件)**：该 PR 自 2026-05-22 创建至今已超过一个月，包含重要的数据分析功能。建议维护者优先 Review 或标记里程碑，避免社区贡献者流失。
*   **[重要] Issue #5584 (Ascend-vllm 连接)**：涉及私有化部署硬件环境，属于企业级应用的关键路径，需尽快确认是否为回归问题。

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