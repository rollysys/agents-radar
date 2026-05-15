# OpenClaw 生态日报 2026-05-15

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-15 03:42 UTC

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

# OpenClaw 项目动态日报 (2026-05-15)

## 1. 今日速览
OpenClaw 项目今日呈现出极高的活跃度，Issues 与 PR 更新量均达到 500 条，显示出社区与开发团队的高频互动。项目刚刚发布了 v2026.5.12 正式版及 v2026.5.14-beta.1，核心架构正向“轻量化安装”转型，将 WhatsApp、Slack、AWS Bedrock 等重型依赖从核心运行时剥离。当前开发重心集中在多智能体编排稳定性、UI 国际化（中文支持）以及 Control Plane 的安全审计功能上。尽管版本迭代迅速，但 Windows 平台的稳定性问题及多智能体并发下的资源竞争 Bug 仍是用户反馈的焦点。

## 2. 版本发布
今日共发布 **4 个版本**，重点在于核心架构的解耦与依赖瘦身。

*   **v2026.5.14-beta.1**
    *   **Changes**: 引入 `@openclaw/proxyline` 代理路由，移除根目录下的 `proxy-agent` 等依赖；UI 端增加了硬编码文本检测报告，优化国际化流程。
*   **v2026.5.12 (Stable)**
    *   **Highlights**: **重大架构调整**。将 WhatsApp, Slack, Amazon Bedrock, Anthropic Vertex 等提供商的依赖移出核心运行时，实现“按需安装”，大幅减少安装体积。
    *   **Resilience**: Telegram 渠道稳定性大幅提升，支持隔离轮询、本地持久化队列及更安全的群组媒体处理。
*   **v2026.5.12-beta.8 / beta.7**
    *   **Changes**: 持续推进外部化 Bedrock 和 Slack 插件的依赖项，确保核心安装包不包含 AWS SDK 等重型库。

> **迁移提示**: 升级至 v2026.5.12 后，若需使用 AWS Bedrock 或 Slack 等功能，需确认相关插件是否已单独安装，否则核心运行时将不再自动包含这些依赖。

## 3. 项目进展
过去 24 小时内共有 **38 个 PR 被合并或关闭**，目前仍有 **462 个 PR 处于待合并状态**。以下是部分关键进展：

*   **架构与性能优化**:
    *   [PR #43244](https://github.com/openclaw/openclaw/pull/43244): 修复了 Gateway 配置变更的并发写入冲突，引入序列化机制防止配置丢失。
    *   [PR #81303](https://github.com/openclaw/openclaw/pull/81303): 新增 `session.maintenance.preserveKeys` 配置，防止主 WebUI 会话被自动清理。
*   **功能增强**:
    *   [PR #81743](https://github.com/openclaw/openclaw/pull/81743): Control UI 配置页面中文翻译完善，修复了主题和圆角选项的显示问题。
    *   [PR #42810](https://github.com/openclaw/openclaw/pull/42810): 引入审计日志系统，为 Control Plane 提供 RBAC 和安全合规基础。
    *   [PR #70864](https://github.com/openclaw/openclaw/pull/70864): 重构提及模式匹配策略，支持全局、智能体及渠道三级覆盖，增强多渠道兼容性。

## 4. 社区热点
今日讨论最热烈的问题集中在用户体验缺陷与运行时稳定性上：

1.  **[#25592](https://github.com/openclaw/openclaw/issues/25592) 工具调用间文本泄露 (26条评论)**
    *   **痛点**: 智能体在工具调用间隙产生的内部推理或错误日志被直接发送到 Slack/iMessage 等消息渠道，严重影响用户体验。社区呼吁增加“内部处理文本”的过滤机制。
2.  **[#73323](https://github.com/openclaw/openclaw/issues/73323) Windows 网关运行时严重降级 (18条评论)**
    *   **痛点**: 在 Windows 11 + Node 24 环境下，网关进程出现定价拉取超时、Telegram 轮询停滞（最长 266s）及 RPC 慢速响应。该问题被标记为回归 Bug，严重影响 Windows 用户的可用性。
3.  **[#22438](https://github.com/openclaw/openclaw/issues/22438) 分级引导文件加载 (16条评论)**
    *   **诉求**: 大型工作区的 Bootstrap 文件消耗大量 Token。用户建议引入分级加载机制，允许智能体仅在需要时加载特定文件，以节省上下文预算。

## 5. Bug 与稳定性
今日报告了大量回归问题，显示出架构重构期的波动。

*   **严重 - 运行时崩溃/挂起**
    *   [Issue #73323](https://github.com/openclaw/openclaw/issues/73323): Windows 平台网关网络/计时器子系统全面退化（待修复）。
    *   [Issue #43661](https://github.com/openclaw/openclaw/issues/43661): 上下文压缩超时导致会话无限挂起，并重复发送消息，需人工介入恢复。
    *   [Issue #41330](https://github.com/openclaw/openclaw/issues/41330): iMessage 渠道死循环，智能体发送的消息被重新摄入为新消息（已关闭，可能已有修复）。

*   **中等 - 功能回归**
    *   [Issue #32473](https://github.com/openclaw/openclaw/issues/32473): Control UI 要求 Device Identity，导致非 Localhost/HTTPS 环境无法使用。
    *   [Issue #31583](https://github.com/openclaw/openclaw/issues/31583): `exec` 工具未能继承 `skills.entries.*.env` 环境变量，导致密钥注入失败。
    *   [Issue #38439](https://github.com/openclaw/openclaw/issues/38439): Webchat 头像接口 404，导致头像无法显示。

## 6. 功能请求与路线图信号
用户对精细化控制和多智能体协作的需求日益增长：

*   **精细化权限控制**: [Issue #39979](https://github.com/openclaw/openclaw/issues/39979) 提出为 `exec` 和文件工具引入类似 Unix DAC 的路径作用域 RWX 权限，替代现有的二进制白名单，提升安全性。
*   **成本治理**: [Issue #42475](https://github.com/openclaw/openclaw/issues/42475) 建议在网关层强制执行每个智能体的日/月预算上限，防止费用失控。这与 PR #43063（暴露提供商账单数据）形成呼应，可能成为下个版本的重点。
*   **多智能体协作**: [Issue #35203](https://github.com/openclaw/openclaw/issues/35203) 提出了包含能力画像、共享黑板和分层记忆的多智能体协作架构 RFC，显示出社区对复杂 Agent 工作流的强烈需求。

## 7. 用户反馈摘要
*   **安装与部署**: 用户对 v2026.5.12 的“依赖瘦身”表示欢迎，但也担忧插件化后忘记安装必要组件导致运行失败。
*   **稳定性焦虑**: Windows 用户对 v4.23-v4.26 版本的频繁崩溃和挂起感到沮丧，呼吁加强跨平台测试。
*   **UI/UX**: 国际化（i18n）的补全受到非英语用户的积极评价，但 UI 层的 HTTPS 限制在 VPS 环境下造成了阻碍。

## 8. 待处理积压
*   **长期未解的 UX 问题**: [Issue #25592](https://github.com/openclaw/openclaw/issues/25592)（文本泄露）自 2 月提交以来仍未解决，且评论数今日激增，建议开发团队优先处理。
*   **配置向导缺陷**: [Issue #16670](https://github.com/openclaw/openclaw/issues/16670) 指出 `openclaw setup` 向导未包含 Memory/Embedding 设置，导致新手配置困难，该问题已存在数月。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向分析报告 (2026-05-15)

## 1. 生态全景
当前开源 AI 智能体生态正处于**从"功能堆砌"向"架构解耦"转型的关键期**。头部项目（如 OpenClaw、LobsterAI）正通过插件化架构剥离重型依赖，以换取更轻量的运行时和更灵活的扩展能力。**多智能体协作的身份隔离与上下文一致性**成为新的技术高地，多个项目均报告了角色混淆或会话干扰问题。同时，**自动化执行（浏览器控制、社交媒体操作）与记忆管理**成为各项目竞争的焦点，安全性（权限控制、命令注入）随着智能体权限的扩大而日益凸显。

## 2. 各项目活跃度对比

| 项目名称 | Issues 活跃度 | PR 活跃度 | 版本发布 | 健康度评估 | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 极高 (~500) | 极高 (~500) | v2026.5.12 (Stable) | ⭐⭐⭐⭐ | 架构重构期，社区互动强，但 Windows 稳定性是短板。 |
| **LobsterAI** | 低 (0) | 极高 (36 merged) | v2026.5.14 | ⭐⭐⭐⭐⭐ | 开发迭代极快，重点攻克插件系统与本地化体验，代码质量高。 |
| **CoPaw** | 中 (多讨论) | 高 (39 merged) | v1.1.7 | ⭐⭐⭐⭐ | 自动化能力增强，测试覆盖完善，多 Agent 协作存在逻辑硬伤。 |
| **Hermes Agent**| 高 (50 updates) | 高 (21 merged) | 无 | ⭐⭐⭐ | 功能迭代快，但存在 P0 级数据丢失风险和认证 Bug，稳定性承压。 |
| **Zeroclaw** | 中 (23 updates) | 中 (50 updates) | 无 | ⭐⭐⭐ | 聚焦稳定性和安全修复，Cron 与 Context 处理是痛点。 |
| **NanoClaw** | 低 (1 new) | 中 (13 merged) | 无 | ⭐⭐⭐⭐ | 生态集成爆发期，侧重第三方工具连接，架构轻量。 |
| **PicoClaw** | 中 (8 active) | 中 (11 merged) | Nightly | ⭐⭐ | 发现严重安全漏洞（命令注入），核心稳定性问题需关注。 |
| **Moltis** | 低 (2 new) | 无 (0) | 无 | ⭐⭐ | 活跃度低，处于功能规划与基础维护阶段。 |
| **NanoBot** | - | - | - | - | 数据生成失败，无法评估。 |
| **NullClaw/ZeptoClaw/EasyClaw/TinyClaw** | 无 | 无 | 无 | ⭐ | 暂无活动。 |

## 3. OpenClaw 在生态中的定位
**定位：企业级通用智能体平台的"锚点"项目。**

*   **规模优势**：OpenClaw 的 Issues 和 PR 活跃度（约 500 条）远超其他项目一个数量级，是生态中绝对的流量中心，意味着最广泛的用户验证和社区支持。
*   **技术路线**：不同于 NanoClaw 侧重"技能生态"或 CoPaw 侧重"浏览器自动化"，OpenClaw 正致力于**核心运行时的"极简主义"**（移除 AWS/Slack 等重型依赖），试图打造一个类似 Linux 内核的精简核心，通过插件扩展企业能力。
*   **差异化优势**：
    *   **架构成熟度**：率先引入 Control Plane 安全审计与 RBAC，具备生产级部署的合规基因。
    *   **痛点**：Windows 平台的支持明显落后于 Linux/macOS（#73323），这在个人助手领域是一大软肋；相比之下，LobsterAI 在 Windows 中文路径适配上做得更细致。

## 4. 共同关注的技术方向

1.  **多智能体身份与隔离**
    *   **涉及项目**：OpenClaw, PicoClaw, CoPaw
    *   **具体诉求**：OpenClaw 在处理并发资源竞争，PicoClaw 报告子 Agent 角色混淆（#2775），CoPaw 报告主控 Agent 身份错误切换（#3957）。
    *   **趋势**：随着多智能体工作流的普及，如何确保每个 Agent 拥有独立的记忆、权限和身份认知，成为架构设计的核心挑战。

2.  **上下文压缩与记忆管理**
    *   **涉及项目**：OpenClaw, Zeroclaw, LobsterAI
    *   **具体诉求**：Zeroclaw 报告压缩导致推理链丢失（#6269），OpenClaw 讨论分级加载 Bootstrap 文件（#22438），LobsterAI 引入 Dreaming 记忆整理。
    *   **趋势**：长上下文不仅贵而且"堵"，各项目正从简单的截断转向智能压缩和分级加载，特别是针对"思维链"（Reasoning Content）的保护成为新焦点。

3.  **运行时安全与权限细控**
    *   **涉及项目**：OpenClaw, PicoClaw, NanoClaw, CoPaw
    *   **具体诉求**：PicoClaw 曝光命令注入漏洞（#2873），OpenClaw 讨论 Unix DAC 权限模型（#39979），NanoClaw 和 CoPaw 均加强了执行审批与备份校验。
    *   **趋势**：Agent 从"玩具"走向"生产力工具"，对文件系统、网络访问和代码执行的沙箱隔离与精细化授权成为标配需求。

## 5. 差异化定位分析

*   **OpenClaw (平台化)**：全功能、重架构，倾向于成为智能体的操作系统。适合需要多渠道接入和复杂编排的企业用户。
*   **LobsterAI (桌面化)**：侧重桌面端用户体验（语音输入、Artifacts 预览、中文路径），类似"本地版 ChatGPT Plus"，对个人用户最友好。
*   **CoPaw (自动化)**：以"浏览器使用"为核心卖点，强化批量操作与 Web 交互，定位于 RPA（机器人流程自动化）的 AI 升级版。
*   **NanoClaw (连接器)**：专注于集成外部服务，致力于打通社交媒体和信息源，适合构建"市场情报员"或"社交助理"类 Agent。
*   **Hermes Agent (极客/研究)**：关注底层模型兼容（Zed 集成、离线小模型），适合开发者和研究者进行定制化实验。

## 6. 社区热度与成熟度

*   **成熟稳定期**：**OpenClaw**。架构重构显示出底气，但庞大的 Issue 积压和平台兼容性问题表明已进入"维护深水区"。
*   **快速成长期**：**LobsterAI**、**CoPaw**、**NanoClaw**。这些项目版本迭代快，PR 合并率高，功能切入点明确，正在快速收割特定场景的用户。
*   **震荡调整期**：**Hermes Agent**、**PicoClaw**。虽然活跃，但面临严重 Bug（数据丢失、安全漏洞）或架构缺陷，社区情绪在期待与焦虑间波动。
*   **孵化期**：**Moltis**。活跃度低，依赖少数核心开发者，处于寻找产品市场契合点的阶段。

## 7. 值得关注的趋势信号

1.  **"瘦身"成为架构主流**：OpenClaw 移除 Bedrock/Slack 依赖表明，"All-in-One" 的单体架构正在被抛弃，未来的 Agent 框架将是"小核心 + 插件化"，以降低用户的首次部署成本。
2.  **浏览器自动化竞争白热化**：CoPaw v1.1.7 的发布和 OpenClaw 的文本泄露问题暗示，**Web 交互能力**（填表、浏览、截图）已成为 Agent 的基本功，但交互的稳定性与隐私保护仍是短板。
3.  **多模态本地化需求爆发**：LobsterAI 修复中文路径乱码、OpenClaw 完善 UI 中文翻译、Hermes 修复中文字符重叠。随着 Agent 在非英语圈的普及，**国际化支持的质量**将直接影响开源项目的采用率。
4.  **推理模型的兼容性挑战**：Zeroclaw (#6269) 和 CoPaw (#4314) 均提到对 DeepSeek/MiMo 等推理模型的特殊处理。随着具有"思维链"的模型增多，现有的上下文管理逻辑面临重构风险，开发者需注意对 `reasoning_content` 的特殊处理。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-15)

## 1. 今日速览
Zeroclaw 项目今日保持高活跃度，共处理了 **50 个 PR 更新** 和 **23 个 Issue 更新**，显示出社区在代码合并和问题反馈上的双向活跃。项目当前重心集中在 **v0.7.6 版本的 Skills 体系重构** 与 **运行时稳定性（尤其是 Cron 任务与上下文压缩）** 上。今日无新版本发布，但成功合并了关键的安全补丁与多渠道修复，整体质量建设正在稳步推进。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 6 个 PR 被合并或关闭，重点优化了安全性与核心功能：

*   **[安全修复] 修复 TLS 漏洞 (PR #6662)**: 针对Issue #6657 报告的 RUSTSEC-2026-0141 漏洞，项目迅速升级了 `lettre` 依赖至 0.11.22 版本，解决了使用 Boring TLS 后端时 TLS 主机名验证被禁用的高危问题。
*   **[Cron 修复] 只读查询路径优化 (PR #6655)**: 修复了 Cron 存储层只读操作意外触发 Schema 初始化路径的问题，提升了冷启动时的稳健性，关联 Issue #6654。
*   **[Channel 增强] 回复意图预检模型可配置化 (PR #6068)**: 允许为 Channel 回复意图分类器配置独立的轻量模型与超时时间，避免主模型性能瓶颈，提升了多路由场景下的响应速度。
*   **[核心修复] Session Key 清洗 (PR #6228)**: 解决了 Slack 频道在 Daemon 重启后对话缓冲区丢失的严重问题，通过在 Orchestrator 层清洗 Session Keys 保障了数据一致性。
*   **[功能] Webhook 重试机制 (PR #5838)**: 虽然状态更新较晚，但该 PR 为 WebhookChannel 引入了指数退避重试逻辑，显著增强了外部集成的鲁棒性。

## 4. 社区热点
今日社区讨论集中在 **Cron 任务的实用性** 与 **底层架构的扩展性** 上：

*   **[Bug] Cron 任务输出未路由至频道 (Issue #6647)**:
    *   **热度**: 👍 0 | 💬 4
    *   **分析**: 用户反馈 Cron 任务的结果仅出现在 Web Dashboard，未按预期推送到 Telegram 频道。这反映了用户对 Agent "主动通知" 能力的强依赖，目前被标记为 P1 优先级。
*   **[Bug] Context 压缩丢失推理内容 (Issue #6269)**:
    *   **热度**: 👍 0 | 💬 4
    *   **分析**: 针对 DeepSeek 等需要 `reasoning_content` 的模型，上下文压缩功能导致关键推理链丢失。该问题影响智能体的逻辑连贯性，正在处理中。
*   **[Feature] Gateway 推送通知 API (Issue #6659)**:
    *   **热度**: 👍 0 | 💬 3
    *   **分析**: 第三方插件开发者（klodi-plugin）呼吁增加向 Operator Gateway Session 推送通知的 API，表明 Zeroclaw 正在被集成到更复杂的自动化工作流中。

## 5. Bug 与稳定性
今日报告了多个影响核心流程的 Bug，按严重程度排列如下：

*   **P1 - 严重阻塞**:
    *   **#6646**: Telegram 频道下 `web_search_tool` 与 `web_fetch` 工具无法触发，导致工作流完全阻塞。
    *   **#5122**: `web_fetch` 工具对解析为私有 IP 的域名防护失效，存在 SSRF 安全风险。
*   **P2 - 功能降级**:
    *   **#6105**: Cron 运行时缺乏上下文感知，无法引用其发送的消息，导致提醒类 Agent 表现不佳。
    *   **#6627**: (已修复) 工具结果中的陈旧图片在后续 Provider 轮次中重放。
    *   **#6629**: (已关闭) Telegram 群组中 `mention_only=true` 无法抑制对图片/媒体的响应。
*   **稳定性相关**:
    *   **#6651**: Matrix 频道每次重载泄露约 1MB 内存，归因于上游 SDK 的 Arc 循环引用。

## 6. 功能请求与路线图信号
*   **v0.7.6 路线图明确 (Issue #6253)**: 下一个版本将专注于 **Skills** 的支持与用户体验（CLI、加载器、沙箱等），社区正在征集对该模块的意见。
*   **ACP 会话持久化 (PR #6649)**: 正在推进为 ACP（Agent Communication Protocol）添加 SQLite 持久化支持，旨在解决编辑器重连丢失上下文的痛点，极大提升开发者体验。
*   **Web 审批 UI (PR #6603)**: 正在为 Web Gateway 添加工具执行审批界面，完善了 Supervised Mode 的交互闭环。

## 7. 用户反馈摘要
*   **Telegram 渠道问题频发**: 多个反馈指出 Zeroclaw 在 Telegram 渠道的集成存在工具调用失效、Cron 推送失败及媒体消息处理不当的问题。Telegram 是用户的主要交互界面之一，其稳定性直接影响用户留存。
*   **对 DeepSeek 等推理模型的支持不足**: Issue #6269 显示，当前 Context Compression 机制对具有思维链的模型不够友好，开发者需要关注非标准消息字段的保留逻辑。
*   **运维与可观测性需求**: Issue #6641/6642 提出的 OTel 追踪改进请求，表明部分高级用户正在生产环境深度使用 Zeroclaw，急需更细粒度的链路追踪能力。

## 8. 待处理积压
*   **Issue #5122 (安全风险)**: 涉及 `web_fetch` 的 SSRF 防护绕过问题，创建于 3 月底，优先级为 P1，至今仍未修复，建议维护者优先关注。
*   **Issue #6074 (代码审计)**: 3 月底的 Bulk Revert 导致 153 个 Commits 丢失，该 Issue 正在追踪恢复进度，属于长期维护任务。
*   **Issue #6105 (Cron 上下文)**: 状态标记为 `blocked`，严重影响 Cron 类 Agent 的可用性，亟待解除阻塞。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-15)

## 1. 今日速览
Hermes Agent 今日维持高活跃度开发状态，社区反馈热烈。过去24小时内，项目处理了 **50 条 Issue 更新**（新增/活跃 43 条，关闭 7 条）和 **50 条 PR 更新**（合并/关闭 21 条）。虽然无新版本发布，但维护者合并了多个关键修复，包括修复 macOS 启动崩溃的 P1 级问题以及 Zed 编辑器集成功能。值得注意的是，今日新增了数个高优先级的 Bug 报告，涉及数据丢失风险（P0）和认证死循环（P1），需核心团队紧急关注。整体而言，项目正在快速迭代中，但在多平台兼容性和边缘用例处理上仍面临挑战。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日共有 21 个 PR 被合并或关闭，显著提升了项目的稳定性与兼容性。主要进展如下：

*   **关键稳定性修复**：合并了 [PR #26077](https://github.com/NousResearch/hermes-agent/pull/26077)，解决了 macOS 上 uv 管理的 cPython 3.11 因 `kqueue` 监听 stdin 失败导致的启动崩溃问题（Issue #5884），修复了长期影响用户体验的 P1 级 Bug。
*   **生态集成扩展**：合并了 [PR #26079](https://github.com/NousResearch/hermes-agent/pull/26079)，实现了 Zed ACP Registry 集成，用户现可直接在 Zed 编辑器中配置和使用 Hermes Agent，无需手动编辑 JSON。
*   **Gateway 逻辑优化**：合并了 [PR #26087](https://github.com/NousResearch/hermes-agent/pull/26087)，修复了 Telegram 重连逻辑中因 updater 缺失导致的 AttributeError，增强了消息平台的鲁棒性。
*   **架构重构**：合并了 [PR #24479](https://github.com/NousResearch/hermes-agent/pull/24479)，重构了调度逻辑，将 Hermes 定位为纯 "groomer"，通过 `clawta-poller` 处理调度，解决了之前的幻觉移交问题。

## 4. 社区热点
今日社区讨论最热烈的 Issue 集中在 UI 体验与认证问题上：

*   **[Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080) [Feature]: Improved Themes for Dashboard** (👍 17, 评论 10)
    用户强烈反馈当前的 Dashboard 主题字体非标准、衬线字体难以阅读，且对比度低。这反映了用户对 TUI/Web UI 视觉体验的高要求，建议团队重新审视 UI 设计规范。
*   **[Issue #5884](https://github.com/NousResearch/hermes-agent/issues/5884) [CLOSED] [Bug]: OSError on macOS startup** (评论 12)
    该问题困扰用户一个月之久，今日随着修复 PR 的合并而关闭，社区对修复反应积极。
*   **[Issue #15080](https://github.com/NousResearch/hermes-agent/issues/15080) [Bug]: Anthropic OAuth rejected with HTTP 400** (评论 12)
    用户在使用 Claude Max 订阅的 OAuth Token 时遭遇持续的 400 错误，涉及原生 Anthropic 提供商的认证流程，目前仍未解决。

## 5. Bug 与稳定性
今日报告了多个严重影响使用的问题，按优先级排列如下：

*   **[P0] 数据丢失风险**：[Issue #26045](https://github.com/NousResearch/hermes-agent/issues/26045) 报告 `memory(action=replace)` 会静默覆盖外部对 `MEMORY.md` 的修改，导致并发会话或手动编辑的数据丢失。目前暂无关联 Fix PR。
*   **[P1] Gemini 解析失败**：[Issue #25333](https://github.com/NousResearch/hermes-agent/issues/25333) 指出 Gemini-3-Flash 并行输出畸形 JSON（`}{` 分隔）导致 Hermes 解析器崩溃。这是多模态模型兼容性问题。
*   **[P1] Docker 镜像损坏**：[Issue #25495](https://github.com/NousResearch/hermes-agent/issues/25495) 报告官方 Docker 镜像在特定 commit 后无法启动 Matrix/Synapse Gateway，卡在 "fixing ownership"。
*   **[P1] Anthropic 认证死循环**：[Issue #26080](https://github.com/NousResearch/hermes-agent/issues/26080) 报告遭遇 401 错误时，凭证池刷新陷入死循环，阻止了 Fallback Provider 的激活，导致服务不可用。
*   **[P1] 安全隐患**：[PR #25497](https://github.com/NousResearch/hermes-agent/pull/25497) 和 [PR #25831](https://github.com/NousResearch/hermes-agent/pull/25831) 分别修复了 `.env` 文件权限过宽和可能对根目录进行 `chmod` 的安全问题，建议尽快合并。

## 6. 功能请求与路线图信号
*   **多 Agent 架构演进**：[PR #25660](https://github.com/NousResearch/hermes-agent/pull/25660) 正在推进 "单 Gateway 多 Agent" 功能（MVP）。这将打破当前单实例瓶颈，允许根据平台/用户路由到不同的 Agent Profile，是项目架构的重要升级信号。
*   **离线小模型支持**：[Issue #22930](https://github.com/NousResearch/hermes-agent/issues/22930) 讨论了在算力不足情况下运行 2B-14B 模型的需求。社区正在探索通过辅助压缩模型或调整上下文窗口限制来实现，这可能是未来本地化部署优化的方向。
*   **Kanban 功能增强**：[PR #26076](https://github.com/NousResearch/hermes-agent/pull/26076) 提议增加标签、排序和合并功能，表明项目工具链正朝着更完善的任务管理方向发展。

## 7. 用户反馈摘要
*   **中文输入体验差**：[Issue #7443](https://github.com/NousResearch/hermes-agent/issues/7443) 反映 CLI/TUI 中中文输入存在字符重叠和删除乱码问题，严重影响非英语用户体验。
*   **Windows 安装障碍**：[Issue #25551](https://github.com/NousResearch/hermes-agent/issues/25551) 指出新版 Windows 安装脚本存在问题，导致安装失败。
*   **UI 可读性吐槽**：除了热点 Issue #18080，多处反馈 Dashboard 字体和主题选择不够人性化，"Hard to read" 是高频词。
*   **配置复杂性**：[Issue #21685](https://github.com/NousResearch/hermes-agent/issues/21685) 和 #25378 均提到 Plugin 系统和 Azure OpenAI 的配置对新手不够友好，文档或默认配置有待完善。

## 8. 待处理积压
*   **[P1] Anthropic 认证问题持续发酵**：[Issue #15080](https://github.com/NousResearch/hermes-agent/issues/15080) 自 4 月 24 日创建以来，虽然活跃度高，但尚未有明确的官方修复方案，影响 Claude Max 订阅用户。
*   **[P2] 中文字符渲染问题**：[Issue #7443](https://github.com/NousResearch/hermes-agent/issues/7443) 已存在一个月，目前更新显示仍在处理中，需尽快解决以改善国际化支持。
*   **[P2] 文件系统不一致性**：[Issue #24537](https://github.com/NousResearch/hermes-agent/issues/24537) 报告文件操作不可预测，此问题对数据可靠性构成威胁，需给予更多关注。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-15)

## 1. 今日速览
PicoClaw 项目今日保持高强度的迭代节奏，共有 22 个 PR 更新，其中 11 个已合并，主要集中在前端依赖升级与后端 API 重构。项目发布了最新的 Nightly 构建版本 `v0.2.8-nightly.20260515.794eb04f`，持续跟进主分支进展。社区活跃度较高，新增 8 个活跃 Issue，其中包含一项严重的 Go 安全审计报告。整体来看，项目正处于功能完善与安全性加固并行的阶段，但在多轮对话稳定性及多 Agent 架构的细节处理上仍需社区关注。

## 2. 版本发布
- **Nightly Build: v0.2.8-nightly.20260515.794eb04f**
  - **更新说明**: 自动化构建版本，包含截至 2026-05-15 的最新代码提交。
  - **注意事项**: 官方提示该版本可能不稳定，不建议直接用于生产环境，仅供测试尝鲜。
  - **变更日志**: [查看详情](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

## 3. 项目进展
今日共有 **11 个 PR 成功合并**，项目整体向前迈进显著，主要体现在以下方面：
- **API 架构重构**: PR [#2171](https://github.com/sipeed/picoclaw/issues/2171) 相关工作已关闭，成功将 OpenAI 端点迁移至推荐的 Responses API，提升了 API 调用的规范性。
- **功能增强**: PR [#2832](https://github.com/sipeed/picoclaw/pull/2832) 合并，引入了模型获取与保存目录支持，增强了后端对模型管理的灵活性。
- **依赖维护**: 合并了 8 个 Dependabot 自动化 PR，涵盖了前端、后端的核心依赖升级（如 Vite 8.0.13, Tailwind CSS 4.3.0, Golang.org/x/net 等），修复了潜在的安全漏洞并提升了性能。

## 4. 社区热点
今日讨论最活跃的话题集中在**稳定性与多 Agent 架构**：
- **[BUG] LLM 调用失败无重试机制** ([#629](https://github.com/sipeed/picoclaw/issues/629)): 该 Issue 创建于 2 月，今日再次活跃，累计 14 条评论。用户反馈在长任务运行中遇到 HTTP 500 错误时程序挂起，缺乏重试机制严重影响生产环境稳定性。
- **[Feature] 子 Agent 角色混淆问题** ([#2775](https://github.com/sipeed/picoclaw/issues/2775)): 涉及多 Agent 架构的核心痛点。用户指出子 Agent 错误继承了根 Agent 的 `AGENT.md`，导致“角色认知混乱”。这是 PicoClaw 向复杂智能体编排演进必须解决的架构问题。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，其中包含严重安全隐患：
1. **[CRITICAL] Go 安全审计发现命令注入风险** ([#2873](https://github.com/sipeed/picoclaw/issues/2873))
   - **严重程度**: 高。审计发现 456 个问题，其中包含 `exec.Command` 造成的命令注入风险。
   - **状态**: 新开 Issue，目前尚无官方回复，建议维护者立即核查 `cmd/picoclaw/internal/mcp/command_test.go` 等文件。
   - **修复进度**: 暂无关联 Fix PR。

2. **[HIGH] 会话历史竞态条件回归** ([#2721](https://github.com/sipeed/picoclaw/issues/2721))
   - **问题**: v0.2.5 版本仍存在 `tool_use_id` 400 错误。
   - **状态**: 已关闭 (可能是自动关闭或暂未修复彻底，需关注)。

3. **[MEDIUM] 多模型/渠道兼容性 Bug**:
   - **小米 MIMO 模型**: 多轮对话后报 400 错误 ([#2859](https://github.com/sipeed/picoclaw/issues/2859))。
   - **Telegram Bot**: PDF 流数据传输导致会话中断 ([#2798](https://github.com/sipeed/picoclaw/issues/2798))。

4. **[MEDIUM] 界面与体验**:
   - 对话历史仅显示最后一条用户消息 ([#2795](https://github.com/sipeed/picoclaw/issues/2795))。
   - 消息缺少独立时间戳 ([#2787](https://github.com/sipeed/picoclaw/issues/2787))。

## 6. 功能请求与路线图信号
- **流式交互体验优化**: PR [#2587](https://github.com/sipeed/picoclaw/pull/2587) 正在推进 Web 端的流式聊天与滚动 UX，这将显著改善用户等待响应时的体验，是下个版本的重要功能。
- **Telegram 功能增强**: 多个来自社区贡献者的 PR 待合并，包括话题群组触发器覆盖 ([#2779](https://github.com/sipeed/picoclaw/pull/2779))、工作摘要工具反馈 ([#2778](https://github.com/sipeed/picoclaw/pull/2778)) 等，显示项目正积极适配 Telegram 生态的高级功能。
- **安全修复**: PR [#2836](https://github.com/sipeed/picoclaw/pull/2836) 提出了针对 PowerShell 编码绕过的安全修复，正在等待合并。

## 7. 用户反馈摘要
- **痛点**: 用户对**长任务可靠性**抱怨较多（Issue #629），尤其是 LLM 调用失败后的自动恢复能力不足。
- **场景**: 多 Agent 协作场景下的**上下文隔离**成为新的难点（Issue #2775），用户期望子 Agent 能有独立的角色设定，而非继承父级配置。
- **兼容性**: 国产模型（如小米 MIMO）及特定文件格式（PDF）在特定通道下的兼容性问题逐渐浮现，提示项目在多模型适配层仍有优化空间。

## 8. 待处理积压
- **Issue #629 (LLM 调用重试)**: 该问题历时 3 个月仍未彻底解决，严重影响复杂任务场景的可用性，建议维护者优先排期。
- **Issue #2702 (群组消息归属)**: 多用户群聊中历史消息缺乏发送者标识，影响多人协作体验，目前处于 Open 状态。
- **PR #2836 (安全修复)**: 针对性的安全修复 PR 待合并，鉴于安全审计报告的发布，建议加速 Review 流程。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-15)

## 1. 今日速览
NanoClaw 项目今日呈现出极高的开发活跃度，处于功能快速迭代与生态集成爆发期。过去 24 小时内共处理了 24 个 PR，其中 13 个已成功合并，合并率超过 50%，显示出维护者高效审查与合并的能力。今日重点聚焦于 **AI 智能体技能生态的扩展**（如 Reddit、LinkedIn、Firecrawl 集成）与 **多模型提供商支持**（Codex 对齐），同时针对核心流程的安全性进行了加固。虽然仅新增 1 个低优先级 Bug 报告，但涉及的并发竞态问题值得开发者关注。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目整体向前迈进幅度较大，主要集中在**技能本地化、外部工具集成与底层架构优化**三个方面：

*   **生态集成大爆发**：合并了多个关键集成 PR，显著增强了智能体的外部感知与操作能力。
    *   **搜索与数据抓取**：[PR #2445](https://github.com/nanocoai/nanoclaw/pull/2445) 集成了 Serper 搜索；[PR #2446](https://github.com/nanocoai/nanoclaw/pull/2446) 集成了 Firecrawl；[PR #2447](https://github.com/nanocoai/nanoclaw/pull/2447) 添加了只读 Reddit MCP 及研究技能。
    *   **社交媒体自动化**：[PR #2449](https://github.com/nanocoai/nanoclaw/pull/2449) 新增了基于浏览器代理的 LinkedIn 社区管理技能；[PR #2450](https://github.com/nanocoai/nanoclaw/pull/2450) 添加了 LinkedIn 广告剧本技能。
    *   **网站审计**：[PR #2455](https://github.com/nanocoai/nanoclaw/pull/2455) 构建了本地复合审计栈；[PR #2452](https://github.com/nanocoai/nanoclaw/pull/2452) 引入了 Lighthouse CLI。

*   **多模型支持优化**：[PR #2475](https://github.com/nanocoai/nanoclaw/pull/2475) 致力于让 Codex 智能体享有与 Claude 相同的人设与技能目录，为实现多模型无缝切换奠定基础。

*   **安全与稳定性修复**：
    *   [PR #2473](https://github.com/nanocoai/nanoclaw/pull/2473) 修复了内部标签描述中可能误导模型的“暂存区”条款。
    *   [PR #2448](https://github.com/nanocoai/nanoclaw/pull/2448) 合并了复合社交聆听技能，增强了市场情报收集能力。

## 4. 社区热点
尽管今日评论数据显示为 `undefined`（可能因数据同步延迟），但根据 PR 的功能重要性和提交频率，以下议题为今日核心关注点：

*   **安全审批机制升级 ([PR #2478](https://github.com/nanocoai/nanoclaw/pull/2478))**
    *   **诉求**：该 PR 提议审批响应操作需具备管理员权限。这反映了对系统安全性的高度重视，防止仅凭有效的 `questionId` 即可绕过权限控制，是对当前审批流程的关键加固。
*   **网络访问控制权下放 ([PR #2477](https://github.com/nanocoai/nanoclaw/pull/2477))**
    *   **诉求**：允许技能层调节智能体的互联网访问权限。这标志着 NanoClaw 正向更细粒度的权限控制演进，可能为了支持受限环境下的安全执行。

## 5. Bug 与稳定性
今日仅报告 1 个 Bug，严重程度较低，但涉及并发逻辑：

*   **[Low] 容器唤醒竞态条件 ([Issue #2466](https://github.com/nanocoai/nanoclaw/issues/2466))**
    *   **现象**：在执行脚本写入 A2A 消息并调用 `wakeContainer` 的同时，宿主服务进行扫描，导致约 10 秒内生成了两个相同的 `gamma-expert` 容器，且独立处理了同一简报。
    *   **分析**：这是一个典型的分布式系统竞态问题（Race Condition），发生在脚本触发与宿主后台扫描并发时。
    *   **状态**：目前尚未有对应的 Fix PR 链接，需等待维护者跟进。

## 6. 功能请求与路线图信号
结合今日开放的 PR，可以窥见项目下一阶段的演进方向：

*   **设置向导的多模型适配**：[PR #2474](https://github.com/nanocoai/nanoclaw/pull/2474) 提议在安装设置阶段让用户选择 Claude Code 或 Codex CLI。这表明 NanoClaw 正式将 **“多模型适配”** 作为核心产品特性，旨在摆脱对单一模型提供商的强依赖。
*   **即时通讯渠道体验优化**：[PR #2472](https://github.com/nanocoai/nanoclaw/pull/2472) 和 [PR #2471](https://github.com/nanocoai/nanoclaw/pull/2471) 均针对 Slack DM 的会话模式进行了优化，显示出项目对 **即时通讯（IM）场景** 用户体验的持续打磨。

## 7. 用户反馈摘要
从唯一的 Issue 反馈来看，高级用户正在尝试将 NanoClaw 用于更复杂的自动化场景：

*   **痛点**：用户 `@glifocat` 在结合脚本与宿主服务进行并发操作时遇到了容器重复启动问题。这表明部分用户已将 NanoClaw 视为基础设施的一部分进行深度集成，对底层并发控制机制有更高要求。

## 8. 待处理积压
目前有 11 个待合并的 PR，建议维护者优先关注以下可能产生阻塞的条目：

1.  **[Security] [PR #2478](https://github.com/nanocoai/nanoclaw/pull/2478)**：涉及权限系统的安全加固，建议优先合并以防止潜在风险。
2.  **[Feat] [PR #2474](https://github.com/nanocoai/nanoclaw/pull/2474)**：AI-CLI 选择器功能，影响项目安装流程，属于核心体验变更。
3.  **[Feat] [PR #2472](https://github.com/nanocoai/nanoclaw/pull/2472)**：Slack 消息线程修复，直接影响生产环境下的用户交互体验。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-15)

## 1. 今日速览
LobsterAI 项目今日呈现出**极高的开发活跃度与版本迭代速度**。在过去 24 小时内，项目成功发布了 `v2026.5.14` 新版本，并一口气合并/关闭了高达 36 个 PR，显示出团队正在进行大规模的功能集成与代码清理。虽然 Issues 区今日略显平静（0 条更新），但代码库经历了重大重构，重点集中在**插件管理体系建设**、**Artifacts 预览架构升级**以及**MCP 原生迁移**等核心功能上。整体项目健康度良好，处于功能快速演进阶段。

## 2. 版本发布
**新版本：LobsterAI 2026.5.14**
- **发布时间**：2026-05-14
- **更新概要**：
  - **功能增强**：引入 OpenClaw 上下文压缩处理优化，新增带有高级配置的插件管理系统。
  - **核心变更**：主要合并了 PR #1969 和 #1963，标志着项目在插件化和长上下文处理能力上的进一步成熟。
- **链接**：[Release 2026.5.14](https://github.com/netease-youdao/LobsterAI/releases/tag/v2026.5.14)

## 3. 项目进展
今日共有 36 个 PR 被合并或关闭，项目整体在以下四个维度取得了显著突破：

### A. 插件系统与生态建设
- **插件管理重构** ([PR #1963](https://github.com/netease-youdao/LobsterAI/pull/1963))：新增插件管理设置页，支持 npm/git/本地等多种安装方式，并引入基于 Schema 的配置 UI，大幅提升了扩展性。
- **持久化与修复** ([PR #1979](https://github.com/netease-youdao/LobsterAI/pull/1979), [PR #1981](https://github.com/netease-youdao/LobsterAI/pull/1981))：修复了 macOS 下插件安装失败的问题，并将用户插件目录迁移至 `userData`，解决了升级覆盖导致插件丢失的痛点。

### B. Artifacts 预览架构升级
- **HTTP 服务器模式** ([PR #1977](https://github.com/netease-youdao/LobsterAI/pull/1977), [PR #1983](https://github.com/netease-youdao/LobsterAI/pull/1983))：彻底重构了文件类工件的预览方式，从内联模式迁移至本地 HTTP 服务器，解决了外部资源加载 403 问题，并显著增强了 Excel/PPTX 的渲染效果。

### C. 记忆与 Agent 能力
- **记忆管理重构** ([PR #1943](https://github.com/netease-youdao/LobsterAI/pull/1943))：将设置页重构为 Tab 布局，新增 Dreaming (记忆整理) 展示区，完善了 Agent 的“记忆整理”可视化能力。
- **MCP 原生迁移** ([PR #1980](https://github.com/netease-youdao/LobsterAI/pull/1980))：移除了自建的 mcp-bridge 中转层，全面转向 OpenClaw 原生 MCP Client 模式，提升了工具调用的稳定性。

### D. 用户体验与细节打磨
- **语音输入** ([PR #1947](https://github.com/netease-youdao/LobsterAI/pull/1947))：新增麦克风按钮，通过调用系统原生听写功能实现了低成本语音输入。
- **中文路径与乱码修复** ([PR #1955](https://github.com/netease-youdao/LobsterAI/pull/1955), [PR #1973](https://github.com/netease-youdao/LobsterAI/pull/1973))：彻底解决了 Windows 中文路径下工件“在浏览器打开”失效及“打开方式”下拉菜单乱码的问题，本地化体验大幅提升。

## 4. 社区热点
由于过去 24 小时内 Issues 区无更新，且 PR 列表未提供具体的评论数据（显示为 undefined），社区讨论热度暂时无法量化。
但从合并的 PR 内容来看，**@btc69m979y-dotcom** 是今日的主力贡献者，提交了大量关键功能（插件管理、语音输入、Bug 修复）。**PR #1963 (插件管理)** 和 **PR #1943 (记忆重构)** 涉及架构层面的改动，预计是社区关注的重点功能。

## 5. Bug 与稳定性
今日修复了多个影响用户体验的关键 Bug，目前均已有 Fix PR 并合并：

- **【严重】Windows 中文路径兼容性**：
  - 问题：中文路径下 Artifact 预览无法在浏览器打开，"打开方式"菜单出现乱码。
  - 修复：[PR #1955](https://github.com/netease-youdao/LobsterAI/pull/1955) 与 [PR #1973](https://github.com/netease-youdao/LobsterAI/pull/1973) 通过使用 `shell.openPath` 和强制 PowerShell 输出 UTF-8 编码解决。
  
- **【严重】macOS 插件安装失败**：
  - 问题：从 Dock 启动时环境变量缺失导致找不到 npm。
  - 修复：[PR #1981](https://github.com/netease-youdao/LobsterAI/pull/1981) 优先使用内置 npm-cli.js 路径解决。

- **【一般】代码块样式溢出**：
  - 问题：水平滚动时背景色不完整。
  - 修复：[PR #1944](https://github.com/netease-youdao/LobsterAI/pull/1944) 调整了 CSS 宽度策略。

- **【优化】Token 消耗优化**：
  - 问题：心跳机制消耗过多 Token。
  - 修复：[PR #1978](https://github.com/netease-youdao/LobsterAI/pull/1978) 优化了心跳配置，显著降低了 Token 开销。

## 6. 功能请求与路线图信号
今日无新的功能请求 Issue，但从密集的代码合并中可以看出明确的路线图信号：

1.  **插件化战略确立**：从插件管理 UI、持久化存储到依赖解决的完整链路已打通，预示着下一阶段将重点扶持第三方插件生态。
2.  **多模态交互探索**：语音输入功能的上线 ([PR #1947](https://github.com/netease-youdao/LobsterAI/pull/1947)) 表明项目正在探索除文本外的交互方式。
3.  **自我进化机制**：Dreaming 功能的 UI 化 ([PR #1943](https://github.com/netease-youdao/LobsterAI/pull/1943)) 暗示 Agent 将具备更透明的“记忆整理”能力，这是 Agent 长期记忆的关键一环。

## 7. 用户反馈摘要
过去 24 小时内无新增或活跃 Issue，暂无直接用户反馈可供提取。这通常意味着版本处于稳定迭代期，或用户反馈主要集中在此次新版本发布前的测试阶段。

## 8. 待处理积压
- **依赖更新积压**：[PR #1765](https://github.com/netease-youdao/LobsterAI/pull/1765) (Dependabot 提出的 `@headlessui/react` 升级) 自 4 月 20 日创建至今仍未合并。该依赖更新跨越了主要版本 (v1 -> v2)，可能包含破坏性变更，建议维护者评估兼容性后尽快处理，以免产生技术债务。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-15)

## 1. 今日速览
Moltis 项目今日整体开发节奏较为平缓，代码库无提交变更，未发布新版本。社区活跃度主要集中在问题反馈端，过去 24 小时内新增 2 条 Issue，分别涉及关键安全配置 Bug 与架构级功能提案。虽然无 PR 合并，但新增的 Bug 报告直指文档与实现的不一致性，需维护者优先关注。整体来看，项目处于功能迭代规划与稳定性维护并重的阶段。

## 2. 版本发布
无

## 3. 项目进展
过去 24 小时内，项目暂无合并或关闭的 Pull Requests。开发端暂无实质性代码推进，今日重点在于社区反馈的收集与问题确认。

## 4. 社区热点
今日新增的两条 Issue 是社区关注的焦点，虽然目前暂无评论互动，但其主题切中项目核心功能：

*   **TLS 证书配置问题 ([Issue #996](https://github.com/moltis-org/moltis/issues/996))**：由 @IlyaBizyaev 提出，指出生成的 TLS 证书仅限 localhost 使用，与文档描述不符。这直接影响了用户在非本地环境下的部署体验，是今日关注度最高的问题。
*   **去中心化中继通道提案 ([Issue #995](https://github.com/moltis-org/moltis/issues/995))**：由 @gg582 提出，建议集成 `portal-tunnel` 作为无信任中继通道。该提案涉及底层通信架构，可能预示着社区对增强隐私保护与去中心化能力的强烈诉求。

## 5. Bug 与稳定性
今日报告 1 个功能性 Bug，目前尚无修复 PR：

*   **[中等/高] TLS 证书生成范围错误** ([Issue #996](https://github.com/moltis-org/moltis/issues/996))
    *   **现象**：自动生成的 TLS 证书仅适用于 localhost，导致用户无法按照文档指引在局域网或公网 IP 上建立安全连接。
    *   **影响**：阻碍了用户进行远程访问或多设备组网，属于网络连接层面的阻断性问题。
    *   **状态**：Open，待确认与修复。

## 6. 功能请求与路线图信号
今日收到一项重要的架构级功能请求：

*   **集成 `portal-tunnel` 作为无信任中继通道** ([Issue #995](https://github.com/moltis-org/moltis/issues/995))
    *   **分析**：用户 @gg582 提议引入 `portal-tunnel`，旨在解决网络穿透或去中心化通信的问题。这表明用户对 Moltis 在复杂网络环境下的连接能力有更高期待，可能成为下一版本优化 P2P 通信或远程控制功能的重要方向。目前该请求已提交，等待维护者评估技术可行性与路线图契合度。

## 7. 用户反馈摘要
从今日 Issues 中可以提炼出以下用户痛点：

*   **文档与实现的一致性**：用户在使用 TLS 功能时遭遇了“文档说支持，实际不支持”的困境，反映出文档更新滞后于代码实现，或功能设计存在偏差。
*   **远程访问需求强烈**：无论是 TLS 证书的 Bug，还是 `portal-tunnel` 的集成提案，均指向用户对“远程连接”和“跨网络访问”场景的高频使用需求。用户希望 Moltis 能突破本地限制，安全地扩展到更广阔的网络环境。

## 8. 待处理积压
鉴于今日无 PR 活动，建议维护者优先处理今日新增的关键 Bug，以免影响后续版本发布：

*   **Issue #996**：TLS 证书问题可能导致用户无法正常部署生产环境，建议优先排期修复。
*   **Issue #995**：功能提案涉及架构调整，建议尽快回复确认是否纳入调研范围，以引导社区讨论方向。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-05-15)

## 1. 今日速览
CoPaw 项目今日活跃度极高，正式发布了 **v1.1.7** 版本，重点增强了浏览器自动化能力。项目合并/关闭了 39 个 PR，显示出维护团队对社区反馈的快速响应和对代码质量的严格把控（大量测试覆盖相关 PR）。社区讨论热度集中于模型兼容性和复杂场景下的稳定性，尤其是多模态模型（如 MiMo）和 Agent 身份隔离问题。

## 2. 版本发布
- **v1.1.7**
  - **更新内容**：
    - **Browser Use — Batch Actions**: 支持在单次工具调用中执行多个浏览器步骤（导航、点击、输入、截图等），大幅提升自动化效率 ([#4139](https://github.com/agentscope-ai/QwenPaw/pull/4139))。
    - **Browser Use — File Download**: 支持通过点击页面元素下载文件。
  - **影响评估**：此次更新显著增强了 Agent 与 Web 交互的能力，建议依赖浏览器工具的用户尽快升级，以减少工具调用轮次，降低延迟与成本。

## 3. 项目进展
今日共有 **39 个 PR 被合并或关闭**，主要集中在稳定性修复、安全性增强及测试覆盖率提升：
- **安全性加固**：PR [#4409](https://github.com/agentscope-ai/QwenPaw/pull/4409) 强化了备份导入/恢复的信任控制，增加了 HMAC 签名验证，修复了潜在的备份注入风险。
- **关键修复**：
  - **反向代理支持**：PR [#4378](https://github.com/agentscope-ai/QwenPaw/pull/4378) 解决了长期存在的反向代理 Base Path 配置问题 (Issue #1853)，改善了部署灵活性。
  - **模型兼容性**：PR [#4364](https://github.com/agentscope-ai/QwenPaw/pull/4364) 修复了对兼容 OpenAI 接口的原始思考标签的解析；PR [#4372](https://github.com/agentscope-ai/QwenPaw/pull/4372) 修复了 Anthropic API 对文件块的兼容性。
  - **内存稳定性**：PR [#4377](https://github.com/agentscope-ai/QwenPaw/pull/4377) 将默认内存后端调整为纯 Python 本地实现，规避了 ChromaDB Rust 绑定导致的段错误 (Issue #3854)。
- **测试基建**：维护者 `@aqilaziz` 提交了多个测试覆盖 PR (如 [#4373](https://github.com/agentscope-ai/QwenPaw/pull/4373), [#4376](https://github.com/agentscope-ai/QwenPaw/pull/4376))，显著提升了项目的健壮性。

## 4. 社区热点
今日讨论最活跃的议题集中在深度使用场景下的兼容性与身份隔离问题：
- **[#4342](https://github.com/agentscope-ai/QwenPaw/issues/4342) [test] local_models + providers... (11 评论)**：社区正在大力推进后端单元测试覆盖，这反映了项目正从快速迭代转向稳定性建设阶段。
- **[#4314](https://github.com/agentscope-ai/QwenPaw/issues/4314) [Bug]: MiMo thinking mode + tool calls... (7 评论)**：用户反馈小米 MiMo 模型在开启思考模式后，多轮对话中的工具调用会导致 400 错误，显示了非标准模型接入的复杂性。
- **[#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) Bug: Agent workspace switches incorrectly... (7 评论)**：这是一个严重的逻辑 Bug，主控 Agent 在接收频道消息时会发生身份混淆。该问题影响多 Agent 协作的可靠性，需引起高度重视。

## 5. Bug 与稳定性
今日报告的 Bug 涉及模型交互、运行稳定性及环境兼容性：

| 严重程度 | Issue/PR | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **严重** | [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) | Agent 接收频道消息时身份/工作区错误切换，导致多 Agent 场景失效。 | Open |
| **严重** | [#4299](https://github.com/agentscope-ai/QwenPaw/issues/4299) | `write_file()` 函数在长内容输出时陷入死循环。 | Open |
| **中等** | [#4360](https://github.com/agentscope-ai/QwenPaw/issues/4360) | Ubuntu 26.04 下 Chrome CDP 模式连接超时。 | Closed (相关修复 PR [#4366](https://github.com/agentscope-ai/QwenPaw/pull/4366) 已提交) |
| **中等** | [#4300](https://github.com/agentscope-ai/QwenPaw/issues/4300) | Agent 响应内容重复输出两次。 | Open |
| **已修复** | [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) | ChromaDB 导致进程段错误。 | Fixed by PR [#4377](https://github.com/agentscope-ai/QwenPaw/pull/4377) |

## 6. 功能请求与路线图信号
- **OAuth 扩展支持**：PR [#4352](https://github.com/agentscope-ai/QwenPaw/pull/4352) 提出增加 Provider OAuth 扩展基础设施，为接入更多需要认证的第三方平台铺平道路。
- **会话生命周期钩子**：Issue [#4249](https://github.com/agentscope-ai/QwenPaw/issues/4249) 请求添加 `session.create` 等钩子，以便开发者注入自定义逻辑（如自动加载记忆），这反映了用户对 Agent 定制化能力的深层需求。
- **链路追踪**：Issue [#4114](https://github.com/agentscope-ai/QwenPaw/issues/4114) 询问链路追踪支持，显示企业级用户对可观测性的关注。

## 7. 用户反馈摘要
- **痛点**：用户在接入非标准模型（如 MiMo、Zhipu GLM）时常遇到兼容性问题（思考模式、视觉模型识别错误）；`browser_use` 在特定环境下的 CDP 连接稳定性仍有待提高。
- **场景**：多 Agent 协作（频道通信）、离线环境部署、反向代理部署是当前高级用户的主要使用场景。
- **满意点**：开发者对 `browser_use` 的批量操作更新表示期待；项目对 Bug 的响应速度较快（如 v1.1.7 紧急修复了部分文件下载需求）。

## 8. 待处理积压
- **[#3957 Agent 身份混淆问题](https://github.com/agentscope-ai/QwenPaw/issues/3957)**：该问题严重影响多 Agent 协作逻辑，目前仍为 Open 状态，建议维护者优先排查。
- **[#1516 Telegram 语音支持](https://github.com/agentscope-ai/QwenPaw/issues/1516)**：长期未解决的语音消息格式转换问题，影响 Telegram 频道的用户体验。
- **[#1853 反向代理路径支持](https://github.com/agentscope-ai/QwenPaw/issues/1853)**：虽然已有 PR [#4378](https://github.com/agentscope-ai/QwenPaw/pull/4378) 提交修复，但尚未合并发布，受影响的部署环境仍需等待。

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