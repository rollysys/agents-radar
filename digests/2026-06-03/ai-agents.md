# OpenClaw 生态日报 2026-06-03

> Issues: 418 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-06-03 04:23 UTC

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

# OpenClaw 项目动态日报 (2026-06-03)

## 1. 今日速览
OpenClaw 项目今日保持**极高活跃度**，Issues 和 PRs 更新量均突破 400 条，显示出社区参与热情高涨。然而，**PR 积压严重**（待合并 387 条 vs 已合并 113 条），审核压力巨大，核心团队需关注处理效率。今日焦点集中在**核心架构的 SQLite 迁移**以及**多渠道消息丢失/状态同步**等严重回归问题上。整体来看，项目正处于高频迭代与稳定性攻坚并存的关键阶段，安全性增强（私有网络访问）和用户体验优化（UI/消息可靠性）是当前主线。

## 2. 版本发布
*   **无新版本发布**。项目主分支处于高强度开发状态，大量核心修复 PR 处于待合并或审核阶段，预计将在下一版本中集中释放累积的功能更新与修复。

## 3. 项目进展
尽管未发布正式版本，但代码库合并与审核活动活跃，以下 PRs 推进了关键功能的修复与优化：
*   **消息可靠性修复**: [PR #88992](https://github.com/openclaw/openclaw/pull/88992) 修复了 Telegram 渠道在 `message_tool_only` 模式下偶发的回复丢失问题；[PR #88968](https://github.com/openclaw/openclaw/pull/88968) 解决了内存刷新失败导致用户消息中止的严重 Bug。
*   **性能优化**: [PR #89628](https://github.com/openclaw/openclaw/pull/89628) 优化了命令行启动速度；[PR #89040](https://github.com/openclaw/openclaw/pull/89040) 解决了嵌入式运行初始化时阻塞事件循环导致消息丢失的性能瓶颈。
*   **功能增强**: [PR #89502](https://github.com/openclaw/openclaw/pull/89502) 为 Google Chat 添加了原生审批卡片支持；[PR #89696](https://github.com/openclaw/openclaw/pull/89696) 引入了低内存工具保护机制。
*   **渠道修复**: [PR #89659](https://github.com/openclaw/openclaw/pull/89659) 针对 Feishu 渠道的发送限流错误增加了重试逻辑。

## 4. 社区热点
今日讨论最热烈的问题集中在核心会话状态与跨平台兼容性：
*   **[Issue #52875](https://github.com/openclaw/openclaw/issues/52875) [评论 21 条]**: **Session_send 找不到会话**。用户反馈升级后 Agent 间通信失败，Session 列表异常。这是影响多 Agent 协作的关键 Bug，社区讨论集中在复现路径和版本回归分析上。
*   **[Issue #88838](https://github.com/openclaw/openclaw/issues/88838) [评论 17 条]**: **SQLite 迁移架构讨论**。维护者提议通过抽象分支策略将 Session/Transcript 迁移至 SQLite，以替代高风险的大规模重写。这是架构层面的重大变更，引发了关于实施细节的深入探讨。
*   **[Issue #63918](https://github.com/openclaw/openclaw/issues/63918) [评论 17 条]**: **Cron 任务 OpenAI 参数兼容性**。GPT-5-nano 模型不支持 `thinking=none` 参数导致任务失败，用户呼吁适配新模型参数标准。
*   **[Issue #67035](https://github.com/openclaw/openclaw/issues/67035) [评论 14 条]**: **Windows 端 UI 严重回归**。输入框吞字、流式回复不可见，严重影响桌面端用户体验。

## 5. Bug 与稳定性
今日报告了多个严重影响稳定性的 Bug，部分已有修复 PR 在途：

*   **P1 / 严重回归**:
    *   **消息丢失与界面瘫痪**: [Issue #67035](https://github.com/openclaw/openclaw/issues/67035) - Windows UI 渲染失败，输入与输出均受影响。
    *   **Session 状态崩溃**: [Issue #88312](https://github.com/openclaw/openclaw/issues/88312) - Codex 服务端回合完成停滞，导致任务无法结束。
    *   **Slack 消息静默丢弃**: [Issue #80715](https://github.com/openclaw/openclaw/issues/80715) - 消息在转录本中存在但未发送至 Slack。
    *   **Telegram 重复发送**: [Issue #86519](https://github.com/openclaw/openclaw/issues/86519) - Agent 重复发送 2-10 条相同消息。
*   **P2 / 功能异常**:
    *   **内存泄漏**: [Issue #55334](https://github.com/openclaw/openclaw/issues/55334) - `sessions.json` 无限增长导致 Gateway OOM。
    *   **私有网络访问**: [Issue #39604](https://github.com/openclaw/openclaw/issues/39604) - 请求增加 `web_fetch` 访问内网地址的安全配置（安全审查中）。
*   **已修复/有 PR**:
    *   Feishu 渠道消息分发失败 ([Issue #87646](https://github.com/openclaw/openclaw/issues/87646)) - 现已关闭。
    *   上述部分消息丢失问题已有对应修复 PR (见项目进展)。

## 6. 功能请求与路线图信号
*   **安全功能扩展**: [Issue #39604](https://github.com/openclaw/openclaw/issues/39604) 提出增加 `tools.web.fetch.allowPrivateNetwork` 配置，允许 Agent 受控访问内部网络资源。这反映了用户将 OpenClaw 深度集成至内部工作流的强烈需求，但需要经过严格的安全审查。
*   **架构演进**: [Issue #88838](https://github.com/openclaw/openclaw/issues/88838) 确立了向 SQLite 迁移会话存储的路线，旨在解决当前文件存储带来的性能与稳定性瓶颈。
*   **UI 交互优化**: [Issue #84216](https://github.com/openclaw/openclaw/issues/84216) 建议优化侧边栏“最近会话”的折叠显示，相关 UI 改进 PR [PR #89695](https://github.com/openclaw/openclaw/pull/89695) 已提交（媒体下载控制）。

## 7. 用户反馈摘要
*   **升级恐惧**: 多名用户反馈升级到特定版本（如 2026.4.14, 2026.5.27）后出现严重回归，导致生产环境不可用（如 UI 不可见、消息丢失），呼吁增加集成测试覆盖或延长 Beta 周期。
*   **多渠道一致性痛点**: Slack、Telegram、Feishu 等渠道均出现消息同步或发送问题，用户对多渠道消息投递的可靠性表示担忧。
*   **认证配置复杂**: 针对不同 Provider（OpenAI Codex, Xiaomi MiMo 等）的认证配置常出现报错，用户希望 `doctor` 工具能提供更强大的自动修复能力。

## 8. 待处理积压
*   **PR 审核积压**: 目前有 **387 个待合并 PR**，其中包含大量 P1/P2 级修复。例如针对核心消息投递的 [PR #88992](https://github.com/openclaw/openclaw/pull/88992) 和针对事件循环阻塞的 [PR #89040](https://github.com/openclaw/openclaw/pull/89040) 亟待审核合并。
*   **高优先级 Issue**:
    *   [Issue #52875](https://github.com/openclaw/openclaw/issues/52875): Session 丢失问题，需维护者确认根本原因。
    *   [Issue #39604](https://github.com/openclaw/openclaw/issues/39604): 私有网络访问功能，需进行产品决策与安全审查。
    *   [Issue #55334](https://github.com/openclaw/openclaw/issues/55334): 内存泄漏问题，影响长时间运行稳定性。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比分析报告 (2026-06-03)

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正处于从**功能爆发向稳定性攻坚**转型的关键期。头部项目面临严重的 PR 积压与回归问题，显示出大规模协作与代码质量控制之间的张力；同时，新兴项目通过架构重构（如多智能体运行时、TUI 界面）积极抢占细分赛道。**安全性（PII 过滤、沙箱逃逸）**与**模型兼容性（新模型参数适配）**成为今日全生态的共同关注点，标志着行业正从“能跑起来”向“安全、稳定、兼容”迈进。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新/新建 | PRs 更新/合并 | 版本发布 | 健康度评估 | 核心状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 更新 >400 | 更新 >400 (待合并 387) | 无 | ⚠️ 中危 (积压严重) | 高频迭代，稳定性攻坚，架构迁移 |
| **Zeroclaw** | 关闭 33 | 合并 44 | **v0.8.0-beta-2** | ✅ 优秀 | 架构升级，多智能体运行时，TUI 发布 |
| **IronClaw** | 更新 32 | 合并 32 | 无 | 🔄 活跃 | "Reborn" 架构重构，OAuth 集成 |
| **CoPaw** | 关闭 19 / 新开 16 | 合并 12 | 无 | ✅ 良好 | 安全加固，Windows 适配，架构升级筹备 |
| **Hermes Agent** | 更新 50+ | 合并 9 | 无 | 🔄 活跃 | 稳定性修复，自主性架构讨论 |
| **NanoBot** | 更新 9 | 合并 18 | 无 | ✅ 良好 | 多渠道集成，云部署标准化 |
| **PicoClaw** | 低 | 更新 14 (合并 6) | Nightly | 🔄 稳健 | 模型兼容性修复，资源泄漏治理 |
| **LobsterAI** | 无 | 更新 9 (合并 6) | 无 | 🔄 内部驱动 | 多模态优化，子智能体管理 |
| **NanoClaw** | 低 | 合并 4 | 无 | ✅ 良好 | 安全修复，插件系统扩展 |
| **EasyClaw** | 无 | 无 | **4个版本** (v1.8.2x) | 🔄 维护模式 | 电商业务逻辑迭代，静默开发 |
| **Moltis** | 新增 1 | 活跃 2 | 无 | 🟢 平稳 | 日志控制粒度优化 |
| **NullClaw** | 新增 1 | 新增 1 | 无 | 🟢 平稳 | 细节修复 (PII 误报) |
| **TinyClaw** | 无 | 无 | 无 | ⚪ 静默 | 无活动 |
| **ZeptoClaw** | 无 | 无 | 无 | ⚪ 静默 | 无活动 |

## 3. OpenClaw 在生态中的定位

**定位：生态核心参照系，正经历“成长的阵痛”**

*   **优势**：社区规模最大，生态集成度最高（Slack/Feishu/Telegram 全覆盖），是企业级部署的首选参照。其架构迁移（SQLite）将定义本地记忆存储的新标准。
*   **技术路线差异**：相比 NanoBot/Zeroclaw 等灵活迭代的项目，OpenClaw 显得体量沉重，PR 积压量（387条）反映出其审核瓶颈。其核心痛点集中在**多渠道状态同步**与**会话持久化**，这是高吞吐量场景下的典型挑战。
*   **社区规模对比**：OpenClaw 的 Issue/PR 更新量是其他头部项目的 10 倍以上，拥有最庞大的用户基数，但同时也背负了最沉重的技术债。

## 4. 共同关注的技术方向

1.  **数据安全与沙箱机制 (全生态)**
    *   **涉及项目**：NanoClaw, NullClaw, CoPaw, Hermes Agent, Zeroclaw。
    *   **具体诉求**：PII 信息误报修正、容器命令注入防护、沙箱权限精细化管理。安全已不再是可选项，而是阻碍生产环境落地的核心瓶颈。
2.  **上下文管理与记忆存储 (Core Memory)**
    *   **涉及项目**：OpenClaw, IronClaw, CoPaw, Moltis。
    *   **具体诉求**：OpenClaw 迁移 SQLite 解决 Session 丢失；IronClaw 削减上下文预算；Moltis 限制工具结果持久化大小。全行业都在对抗“无限上下文”带来的性能与成本挑战。
3.  **模型兼容性与适配**
    *   **涉及项目**：OpenClaw, PicoClaw, IronClaw, LobsterAI。
    *   **具体诉求**：适配 GPT-5-nano 参数、智谱 GLM-5 错误码、MiniMax M3 多模态支持。模型 API 的快速迭代导致下游项目普遍存在“参数不兼容”或“功能失效”问题。
4.  **多智能体协作**
    *   **涉及项目**：Zeroclaw, OpenClaw, CoPaw, Hermes Agent。
    *   **具体诉求**：Zeroclaw 发布多智能体运行时；OpenClaw 遭遇 Session 丢失影响多 Agent 协作；CoPaw 完善 Subagent 鉴权。多 Agent 架构已从概念验证走向工程化落地。

## 5. 差异化定位分析

*   **架构演进方向**：
    *   **OpenClaw**：向**重型服务化**演进，解决高并发下的状态一致性（SQLite 迁移）。
    *   **Zeroclaw**：向**现代化本地运行时**演进，主打终端体验和安全沙箱。
    *   **IronClaw**：向**精细化预算控制**演进，强调子智能体编排和成本/安全审计。
*   **目标用户分层**：
    *   **OpenClaw / CoPaw**：面向**企业级/生产环境**用户，强调渠道集成（微信、飞书）和权限管理。
    *   **NanoBot / PicoClaw**：面向**开发者/极客**，强调插件化、轻量级部署和模型灵活性。
    *   **EasyClaw**：垂直领域应用，专为**电商场景**优化，静默迭代业务逻辑。
*   **功能侧重**：
    *   **Hermes Agent**：侧重**自主性**（Self-governance），如自主任务分派、模型切换。
    *   **Zeroclaw**：侧重**交互体验**（TUI）与**标准化 Skill 分发**。

## 6. 社区热度与成熟度

*   **快速迭代期（活跃度极高，变化剧烈）**：
    *   **Zeroclaw**：发布 v0.8.0 重大更新，Issue 闭环率高，处于功能爆发期。
    *   **IronClaw**：处于架构重构关键期，PR 合并量巨大，代码库变动剧烈。
    *   **OpenClaw**：虽然活跃度最高，但积压严重，处于“高负荷运转期”，稳定性风险较大。

*   **质量巩固期（聚焦修复与细节）**：
    *   **CoPaw**：高强度修复安全漏洞与 Windows 适配，代码质量显著提升。
    *   **NanoBot**：稳步推进渠道集成与 WebUI 体验，健康度良好。
    *   **LobsterAI**：专注内部功能打磨，无社区噪音，开发节奏稳健。

*   **维护/静默期**：
    *   **EasyClaw**：仅发布版本无社区互动，属于典型的闭源开发模式或内部迭代。
    *   **TinyClaw / ZeptoClaw**：无活动，项目可能处于停滞或维护暂停状态。

## 7. 值得关注的趋势信号

1.  **本地数据库成为标配**：OpenClaw 迁移 SQLite 的讨论表明，基于文件的简单存储已无法满足复杂会话需求。**内嵌式持久化存储**将成为下一代 Agent 的标准配置，以解决内存泄漏和状态丢失问题。
2.  **安全审计前移**：CoPaw 和 NanoClaw 的安全修复显示，社区正在经历一波**安全审计潮**。特别是针对容器逃逸和路径遍历的防御，建议所有集成容器执行能力的项目立即自查。
3.  **UI 交互回归终端**：Zeroclaw 推出的 Zerocode (TUI) 和 Hermes 对 TUI 的关注表明，**终端界面**正作为 WebUI 的补充重新回归，满足开发者对低延迟、高隐私场景的需求。
4.  **渠道集成焦虑**：OpenClaw (Slack/Telegram/Feishu) 和 NanoBot (QQ/Email) 的 Issues 显示，多渠道接入中的**消息可靠性（丢失/重发/同步）**是最大的痛点。这暗示通用的消息中间件层存在巨大的标准化机会。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-03)

## 1. 今日速览
NanoBot 项目今日保持**高活跃度**，共处理了 25 个 PR（其中 18 个已合并/关闭）和 9 个 Issue 更新。项目在**多渠道集成**（新增 QQ 通道、Email 附件支持）与**架构重构**（Dream 机制简化、RAG 记忆检索）方面取得显著进展。WebUI 体验持续打磨，修复了路由刷新、复制回退等细节问题。同时，社区正积极推动云平台部署方案的标准化，整体项目处于快速迭代与功能完善阶段，健康度良好。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日共有 18 个 PR 被合并或关闭，核心进展如下：

*   **渠道与集成能力增强**：
    *   [PR #4146](HKUDS/nanobot PR #4146)：**新增 Napcat (QQ) 渠道支持**，实现了 OneBot v11 Forward WebSocket 协议，支持私聊与群聊，扩展了应用生态。
    *   [PR #4162](HKUDS/nanobot PR #4162)：**Email 渠道支持文件附件**，完善了多模态消息处理能力。
*   **核心架构优化**：
    *   [PR #3990](HKUDS/nanobot PR #3990)：**重构 Dream 机制**，废弃两阶段类，改用简单的 cron + process_direct 流程，降低了维护成本。
    *   [PR #4109](HKUDS/nanobot PR #4109)：**引入轻量级 RAG 记忆检索**，提升了长上下文场景下的记忆召回效率。
    *   [PR #4115](HKUDS/nanobot PR #4115)：拆分 WebUI gateway 依赖，优化了模块解耦。
*   **稳定性修复**：
    *   [PR #4155](HKUDS/nanobot PR #4155)：修复了 `read_file` 在结果过大持久化后无法恢复的死循环问题（关联 Issue #4153）。
    *   [PR #4157](HKUDS/nanobot PR #4157)：修复 WebUI 启动时请求无限挂起的问题，提升了前端鲁棒性。

## 4. 社区热点
*   **[PR #4139] 云平台部署层方案**：[链接](HKUDS/nanobot PR #4139)
    该 PR 提出为 HuggingFace Spaces 和 ModelScope 提供第一方部署支持，解决用户在云平台部署时的路径检测、OAuth 和端口绑定等痛点。虽然是新增 PR，但因其解决了部署难点的通用需求，备受关注。
*   **[Issue #4167] 图片生成 API 兼容性问题**：[链接](HKUDS/nanobot Issue #4167)
    用户报告在使用 OpenAI 兼容 API（如 Agnes AI）时，因 `response_format` 参数不兼容导致生成失败。这反映了用户对**自定义 Provider** 接入的强烈需求。
*   **[Issue #4142] Token 成本优化讨论**：[链接](HKUDS/nanobot Issue #4142)
    针对缓存未命中时的 Input Token 成本优化进行了深入讨论，该 Issue 已关闭，表明相关优化策略已达成共识或已实施。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在兼容性和工具链支持上，关键问题如下：

*   **[高危] WebUI CLI 在 `uv tool` 环境下安装失败**：
    *   Issue: [Issue #4158](HKUDS/nanobot Issue #4158)
    *   现象：当使用 `uv tool` 安装时，内置 pip 调用失败，导致 CLI App 无法安装。
    *   状态：**已有修复 PR** [PR #4164](HKUDS/nanobot PR #4164)，通过回退到 `uv pip` 解决，待合并。
*   **[中危] MCP 服务端随机断连**：
    *   Issue: [Issue #4168](HKUDS/nanobot Issue #4168)
    *   现象：运行一段时间后 MCP Server 报错 "Session terminated"，重启后方可恢复。
    *   状态：目前处于 OPEN 状态，需进一步排查连接保活机制。
*   **[已修复] `read_file` 持久化结果恢复失败**：
    *   Issue: [Issue #4153](HKUDS/nanobot Issue #4153) 已通过 [PR #4155](HKUDS/nanobot PR #4155) 修复。

## 6. 功能请求与路线图信号
*   **自定义图片生成 Provider**：结合 [Issue #4132](HKUDS/nanobot Issue #4132) 和今日的 [Issue #4167](HKUDS/nanobot Issue #4167)，用户对解耦默认 OpenAI 图片生成接口的需求迫切，预计后续版本将增强对第三方 API 的参数适配。
*   **Subagent MCP 服务访问**：[Issue #4166](HKUDS/nanobot Issue #4166) 提出 Subagent 无法访问 MCP 服务的限制。这是多智能体协作的关键短板，若被采纳将显著提升复杂任务的处理能力。
*   **WebUI 会话分叉**：[PR #4163](HKUDS/nanobot PR #4163) 正在开发 "Fork from here" 功能，允许用户基于历史记录创建新会话，体现了 WebUI 向更成熟交互体验演进的趋势。

## 7. 用户反馈摘要
*   **工具链适配**：用户尝试使用新兴 Python 工具 `uv` 时遭遇兼容性壁垒（[Issue #4158](HKUDS/nanobot Issue #4158)），提示项目需跟进现代开发工具链的适配工作。
*   **MCP 稳定性焦虑**：多位用户反馈 MCP 连接的不稳定性（[Issue #1168](HKUDS/nanobot Issue #1168) Notion 连接失败，[Issue #4168](HKUDS/nanobot Issue #4168) 随机断连），这是目前影响用户体验的主要负面因素。
*   **成本敏感**：用户对 DeepSeek V4 等新模型的 Token 成本非常敏感，主动提出针对缓存未命中的优化建议（[Issue #4142](HKUDS/nanobot Issue #4142)）。

## 8. 待处理积压
*   **[长期未决] Notion MCP 连接问题**：[Issue #1168](HKUDS/nanobot Issue #1168)
    该问题自 2026-02 创建，至今日仍有用户反馈无法连接。建议维护者优先排查是否为特定环境或认证问题，以免影响 Notion 用户群体的留存。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 (2026-06-03)

## 1. 今日速览
Zeroclaw 项目今日活跃度极高，迎来了 **v0.8.0-beta-2** 的重大版本更新，引入了备受期待的终端 UI **zerocode** 及多智能体运行时。项目维护力度强劲，过去24小时内 **关闭了 33 个 Issue**，合并了 **44 个 PR**，显示出高效的迭代节奏。社区焦点集中在 Onboarding 流程的体验优化、安全策略的边界界定以及新版本 TUI 的功能完善上。整体来看，项目正从核心功能构建向用户体验打磨与生态标准化迈进，健康度极佳。

## 2. 版本发布
### [v0.8.0-beta-2](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.0-beta-2)
- **核心亮点**：这是 v0.8.0 系列的第二个 Beta 版本，也是自 v0.7.5 以来最大的更新。
- **新增功能**：
  - **Zerocode**：全新的全功能终端 UI（TUI），允许用户在不离开终端的情况下运行和操作智能体。
  - **Multi-agent runtime**：随新版本一同发布的还包含多智能体运行时支持。
- **破坏性变更/迁移注意**：目前 Release Notes 较为简略，建议从 v0.7.x 升级的用户重点关注依赖更新及配置文件兼容性（根据 Issues 反馈，Onboarding 流程有变动）。

## 3. 项目进展
今日共有 44 个 PR 被合并，进展主要集中在文档完善、安全审计策略调整及 Bug 修复：

- **文档与基础设施**：
  - [PR #7023](https://github.com/zeroclaw-labs/zeroclaw/pull/7023) 实现了文档的版本化部署与版本选择器，显著改善了多版本文档的维护体验。
  - [PR #6057](https://github.com/zeroclaw-labs/zeroclaw/pull/6057) 增加了 Python Skills 快速入门文档，解决了默认沙箱环境无法运行 Python 技能的文档缺失问题。

- **安全与稳定性**：
  - [PR #5952](https://github.com/zeroclaw-labs/zeroclaw/pull/5952) 重新界定了 Skill 审计范围，移除了重复的命令内容检查，将其完全委托给执行时的 Shell 策略，修复了误报风险。
  - [PR #5981](https://github.com/zeroclaw-labs/zeroclaw/pull/5981) 修复了 `allow_scripts` 配置未生效的关键 Bug（Issue #5697）。
  - [PR #5450](https://github.com/zeroclaw-labs/zeroclaw/pull/5450) 为 HTTP/Web 工具增加了 IPv6 支持。

- **功能增强**：
  - [PR #6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) 增强了 OTel Tool Spans 的语义约定属性，提升了可观测性。

## 4. 社区热点
今日讨论最活跃的议题集中在配置体验与核心功能阻塞问题上：

1.  **[Issue #6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) (18条评论)**：新安装环境下 `default_model` 配置触发工作流阻塞。这反映了 v0.8.0 新 Onboarding 流程与旧配置/环境变量的兼容性问题，是阻碍新用户上手的最高优先级 Bug。
2.  **[Issue #5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) (6条评论)**：默认 Shell 沙箱配置过于严格，阻塞了现实的 Python Skill 模式。作者 @perlowja 正在开发 FINOS CDM 合规技能，该 Issue 揭示了安全默认策略与实际开发便利性之间的冲突。
3.  **[Issue #6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) (6条评论)**：WhatsApp Web 频道因服务端协议升级导致消息流中断，影响依赖于 WhatsApp 接入的生产用户。

## 5. Bug 与稳定性
今日修复了大量 P1 级别的 Bug，但仍有个别高危问题待处理：

**已修复/已关闭的高危 Bug**：
- **[P1] [Issue #6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207)**：Web Dashboard/WebSocket 路径绕过了 `ApprovalManager`，导致监管模式下的工具审批从未在 UI 显示。这是严重的安全/交互逻辑漏洞，目前已关闭（推测已修复或已在 v0.8.0 重构中解决）。
- **[P1] [Issue #6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269)**：上下文压缩器丢弃了 `reasoning_content`，导致 DeepSeek 等依赖推理内容的模型行为降级。
- **[P1] [Issue #6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681)**：`zeroclaw skills install` 在异步环境中调用阻塞请求导致 Panic。

**待处理的高危 Bug**：
- **[P1] [Issue #5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) [OPEN]**：Ollama Provider 在需要调用工具时报错，阻塞了本地模型用户的工作流。
- **[P1] [Issue #6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) [OPEN]**：Onboarding 流程混淆，选择 OpenAI Codex 订阅时提示输入 OpenAI API Key。
- **[P1] [Issue #6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127) [OPEN]**：Gateway 侧凭证解析仍存在静默回退风险，可能掩盖配置错误。

## 6. 功能请求与路线图信号
- **标准化 Skill 分发**：[Issue #4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) 提出支持从 `.well-known` URI 安装 Skills，这表明项目正在跟进 Agent Skills 标准化组织规范，未来可能成为 Skill 分发的主流方式。
- **TUI 增强**：随着 v0.8.0 引入 Zerocode，[Issue #6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824) 和 [Issue #6820](https://github.com/zeroclaw-labs/zeroclaw/issues/6820) 标志着终端交互体验（如 Diff 展示、文件提议）将是下一阶段的重点。
- **企业级安全特性**：[PR #5797](https://github.com/zeroclaw-labs/zeroclaw/pull/5797) 提出的自定义 TLS CA 证书支持，反映了企业/自托管场景的强烈需求。

## 7. 用户反馈摘要
- **Onboarding 体验割裂**：多位用户反馈在全新安装或使用特定 Provider（如 Ollama, OpenAI Codex）时遇到配置阻塞，说明新版本的初始化引导逻辑仍有优化空间。
- **沙箱策略痛点**：用户希望执行 Python/Shell 脚本时能更灵活地配置沙箱权限，而不是被默认的只读/无网络策略“一刀切”阻断（Issue #5722）。
- **多模态支持缺陷**：用户指出 Web 端发送图片标记 `[IMAGE:]` 无法被正确解析为多模态输入（Issue #5453），这影响了 Web 客户端的使用体验。

## 8. 待处理积压
建议维护者关注以下长期未解决或高影响的开放议题：

1.  **[PR #5797](https://github.com/zeroclaw-labs/zeroclaw/pull/5797)**：支持自定义 TLS CA 证书。该 PR 已开启较久，对于企业内网部署至关重要，建议尽快 Review 合并。
2.  **[Issue #5155](https://github.com/zeroclaw-labs/zeroclaw/issues/5155)**：Delegate Agents 忽略 `prompt_injection_mode` 配置，导致上下文溢出，影响多智能体协作的稳定性。
3.  **[Issue #6127](https://github.com/zeroclaw-labs/zeroclaw/issues/6127)**：Gateway 的静默回退问题，涉及安全性，需尽快 Hardening。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-03)

## 1. 今日速览
Hermes Agent 项目今日保持高度活跃，过去 24 小时内 Issues 与 PR 更新数均达到 50 条，社区参与度显著。项目重心目前明显向**稳定性修复**与**安全性增强**倾斜，多个关键 PR 集中解决了 Gateway 并发、文件描述符限制及敏感信息泄露等问题。虽然今日无新版本发布，但社区对**Agent 自主性**（如自主任务分派、模型切换）和**多平台适配**（如 Matrix Docker、无障碍功能）的讨论热度不减，显示出项目正处于功能迭代与工程稳固并重的阶段。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 9 个 PR 被合并或关闭，主要推进了以下修复与优化：

*   **UI/UX 修复**：解决了桌面端长对话滚动时自动回弹到底部的问题 ([PR #37866](https://github.com/NousResearch/hermes-agent/pull/37866))，提升了聊天浏览体验。
*   **Gateway 稳定性**：修复了 `/v1/runs` 并发限制逻辑错误导致的会议无法收敛问题 ([PR #37867](https://github.com/NousResearch/hermes-agent/pull/37867))，以及提升了 macOS 默认文件描述符上限以防止崩溃 ([PR #30234](https://github.com/NousResearch/hermes-agent/pull/30234))。
*   **文档与清理**：修复了文档站点中的断链 ([PR #30301](https://github.com/NousResearch/hermes-agent/pull/30301))，清理了仓库根目录下的冗余变更日志文件 ([PR #37855](https://github.com/NousResearch/hermes-agent/pull/37855))。

## 4. 社区热点
今日社区讨论主要集中在基础设施兼容性与 Agent 自主能力扩展：

*   **Matrix/Docker 部署受阻**：Issue [#25495](https://github.com/NousResearch/hermes-agent/issues/25495) 引发热议（10 条评论），官方 Docker 镜像中 Synapse 网关启动失败，日志卡在 "fixing ownership"，严重影响了自托管用户的部署，被标记为 P1 级别。
*   **Agent 自主任务分派 RFC**：Issue [#31392](https://github.com/NousResearch/hermes-agent/issues/31392)（8 条评论）提出了 "Agent-native task relay" 方案，旨在让 Agent 能够自主派生子任务并进行异步人工审批，社区正就该架构是否会替代现有 Delegate 机制展开讨论。
*   **无障碍访问支持**：Issue [#26689](https://github.com/NousResearch/hermes-agent/issues/26689) 收到盲人用户反馈，指出当前 TUI/GUI 对 VoiceOver 屏幕阅读器支持极差，引发了对项目可访问性的关注。

## 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，部分已有修复方案：

*   **P1 - 严重/阻塞**:
    *   **Matrix Gateway 损坏**: Docker 镜像中 Synapse 网关无法启动 ([#25495](https://github.com/NousResearch/hermes-agent/issues/25495))。
    *   **Windows 安装失败**: Windows 平台初始化时 `git checkout main` 失败，阻碍新用户上手 ([#37827](https://github.com/NousResearch/hermes-agent/issues/37827))。
    *   **Discord 响应截断**: Gateway 在自主工作流中过早终止对话，导致输出不完整 ([#27881](https://github.com/NousResearch/hermes-agent/issues/27881))。
    *   **API Key 丢失**: 配置文件中的自定义 Provider API Key 在运行时解析时丢失 ([#14065](https://github.com/NousResearch/hermes-agent/issues/14065))。

*   **P2 - 中等**:
    *   **桌面端审批弹窗缺失**: 设置为手动审批时，GUI 界面不显示确认提示 ([#37812](https://github.com/NousResearch/hermes-agent/issues/37812))。
    *   **文件描述符泄露**: API Server 平台在重试周期中未正确关闭 SQLite 连接 ([#36111](https://github.com/NousResearch/hermes-agent/issues/36111))。

*   **安全修复 (PR Open)**:
    *   **HTTP 边界敏感信息泄露**: PR [#37735](https://github.com/NousResearch/hermes-agent/pull/37735) 修复了 Provider 错误信息可能携带凭证并在 HTTP 响应中暴露的问题。
    *   **浏览器进程环境变量净化**: PR [#37843](https://github.com/NousResearch/hermes-agent/pull/37843) 防止浏览器子进程继承 Hermes 主进程的敏感凭证。

## 6. 功能请求与路线图信号
社区正推动项目向更自主、更易用的方向发展：

*   **自主性增强**：
    *   **自主模型切换**：请求将 `model_switch` 暴露为 Agent 可调用的工具，使其能根据任务复杂度自动选择模型 ([#16525](https://github.com/NousResearch/hermes-agent/issues/16525))。
    *   **多配置文件共享记忆**：RFC 提议建立跨配置文件的共享记忆库，以保持不同角色下的上下文一致性 ([#31388](https://github.com/NousResearch/hermes-agent/issues/31388))。
*   **本地化与分发**：
    *   **国内用户安装优化**：中国用户请求提供 Windows 一键安装包，解决网络访问受限和依赖安装复杂的问题 ([#37491](https://github.com/NousResearch/hermes-agent/issues/37491))。配套的桌面端中文化 PR ([#37276](https://github.com/NousResearch/hermes-agent/pull/37276)) 已提交。
*   **桌面端体验**：
    *   **移动优先的 Mac Hub**：提出构建移动优先的 Mac 聊天中心，以更好地管理多 Profile ([#37835](https://github.com/NousResearch/hermes-agent/issues/37835))。

## 7. 用户反馈摘要
*   **Docker 用户痛点**：不少用户（尤其是 Unraid/Synology 用户）反馈 Docker 环境下 UID 映射导致权限错误，文件归属权修改不彻底导致服务无法启动 ([#27221](https://github.com/NousResearch/hermes-agent/issues/27221))。
*   **多模态/网关稳定性**：Discord 和 Matrix 用户反馈网关稳定性不佳，存在消息截断、连接中断等问题，影响了作为长期值守机器人的体验。
*   **CLI 用户体验**：用户希望 CLI 能像使用工具一样使用 `/compress` 命令，而不是仅作为斜杠命令存在，这反映了用户对 Agent 自主管理上下文能力的渴望 ([#12213](https://github.com/NousResearch/hermes-agent/issues/12213))。

## 8. 待处理积压
*   **P1 级 Bug 待修复**：Discord Gateway 对话截断问题 ([#27881](https://github.com/NousResearch/hermes-agent/issues/27881)) 自 5 月 18 日报告至今仍 Open，影响核心交互体验。
*   **核心功能 PR 待合并**：
    *   **外部集成状态支持**：PR [#30247](https://github.com/NousResearch/hermes-agent/pull/30247) 旨在为外部监控提供实时会话状态，对于 Dashboard 和监控集成至关重要，目前仍在待定状态。
    *   **Telemetry 插件**：PR [#29724](https://github.com/NousResearch/hermes-agent/pull/29724) 提议添加 NeMo-Flow 遥测插件，增强可观测性，值得维护者关注。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-03)

## 1. 今日速览
PicoClaw 项目今日保持高度活跃的开发态势，重点聚焦于 v0.2.9 版本的稳定性修复与细节打磨。过去 24 小时内共有 14 项 PR 更新，其中 6 项已合并或关闭，显示出维护者对社区反馈的快速响应能力，特别是在处理特定大模型 API 兼容性和资源泄漏问题上进展显著。项目今日发布了最新的 Nightly 构建版本，包含多项重要的错误修复。社区层面，关于配置流式请求和 WebSocket 协议完善的讨论热度较高，反映出用户对底层通信机制定制的强烈需求。

## 2. 版本发布
- **版本号**: `nightly` (v0.2.9-nightly.20260603.a502aa7f)
- **类型**: Nightly Build (自动构建，可能不稳定)
- **更新说明**: 
    - 本次更新包含截至 `a502aa7f` 提交的所有最新代码，主要集成了今日合并的关于智谱 API 错误处理、会话管理资源释放及 LLM 请求重试机制的相关修复。
    - **注意**: 该版本为自动构建，建议测试环境使用，生产环境请等待 Stable 版本。
- **变更日志**: [查看完整变更](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. 项目进展
今日项目共有 **6 项 PR 成功合并/关闭**，主要推进了以下方面：

1.  **稳定性与资源管理**：
    - 合并 [PR #2986](https://github.com/sipeed/picoclaw/pull/2986)：修复了 SessionManager 后台清理协程无法关闭导致的 Goroutine 泄漏问题，显著提升了长时间运行服务的稳定性。
    - 合并 [PR #2991](https://github.com/sipeed/picoclaw/pull/2991)：优化了 LLM HTTP 瞬态错误的重试逻辑，引入了 Provider 错误分类器，增强了网关对上游服务波动的鲁棒性。

2.  **API 兼容性修复**：
    - 合并 [PR #2989](https://github.com/sipeed/picoclaw/pull/2989)：修复了微信渠道发送图片触发智谱 GLM-5 API error 1210 的问题，补充了对该错误码的识别与处理。
    - 关闭 [PR #2239](https://github.com/sipeed/picoclaw/pull/2239)：Docker Compose 配置调整，已处理完毕。

3.  **文档与技能增强**：
    - 合并 [PR #2994](https://github.com/sipeed/picoclaw/pull/2994) 与 [PR #2993](https://github.com/sipeed/picoclaw/pull/2993)：新增了 `picoclaw-agent` 技能文档，详细描述了 Agent 的行为准则与工作流，有助于开发者更好地理解与定制 Agent。

## 4. 社区热点
今日社区讨论最活跃的话题集中在 **流式传输配置** 与 **协议完善**：

- **[Issue #2404](https://github.com/sipeed/picoclaw/issues/2404) [Feature] Add in config to send streaming HTTP request**:
    - **热度**: 评论 10 条，长期活跃。
    - **分析**: 用户强烈希望在配置文件中直接支持 `streaming: true` 以控制 LLM 后端请求方式。该需求触及核心网络请求层，目前标记为 `stale` 但仍有持续讨论，建议维护者重新评估其在 Roadmap 中的优先级。
    
- **[Issue #2984](https://github.com/sipeed/picoclaw/issues/2984) [Feature] Add explicit turn completion signal for WebSocket**:
    - **热度**: 新开 Issue，迅速获得关注。
    - **分析**: 开发者指出当前 WebSocket 客户端缺乏明确的对话轮次结束信号，导致客户端难以判断 Agent 是否处理完毕。这是对 Pico Protocol 的重要改进提议，将显著提升客户端集成的可靠性。

## 5. Bug 与稳定性
今日修复及待处理的 Bug 主要涉及特定模型兼容性和会话逻辑：

- **已修复 (Critical)**:
    - **[Issue #2943](https://github.com/sipeed/picoclaw/issues/2943) 智谱 GLM-5 API error 1210**: 通过 [PR #2989](https://github.com/sipeed/picoclaw/pull/2989) 修复，解决了微信渠道图片处理失败的阻断性问题。

- **待处理 Bug PRs (Open)**:
    - **[PR #2992](https://github.com/sipeed/picoclaw/pull/2992) Session 历史记录升级错误**: 修复新 Web UI 会话错误加载旧消息的问题，严重影响用户对话体验。
    - **[PR #2990](https://github.com/sipeed/picoclaw/pull/2990) Web UI 历史记录显示不全**: 修复只能看到最后一条用户消息的 Bug。
    - **[PR #2987](https://github.com/sipeed/picoclaw/pull/2987) Tool Calls 消息过滤错误**: 修复流式会话中工具调用消息被错误丢弃的问题。

## 6. 功能请求与路线图信号
从开放的 PR 与 Issue 中可见项目正向更精细的控制与更广泛的兼容性发展：

- **调试工具增强**: [PR #2945](https://github.com/sipeed/picoclaw/pull/2945) 提议增加 `picoclaw-tracer` 调试界面，用于实时查看 LLM 调用细节。这是开发者体验（DX）的重要提升，目前状态为 Open。
- **模型兼容性**: [PR #2948](https://github.com/sipeed/picoclaw/pull/2948) 针对 Claude Opus 4-7 模型禁用 temperature 参数；[PR #2951](https://github.com/sipeed/picoclaw/pull/2951) 修复 Web Search 的 HTTP 400 错误。这些 PR 显示项目正在积极跟进最新模型 API 的变动。

## 7. 用户反馈摘要
通过 Issues 与 PR 描述，提炼出以下用户痛点：
1.  **多模态接入难点**: 用户在使用微信等渠道对接视觉模型（如 GLM-5-Turbo）时，常遇到参数格式不兼容问题（#2943），希望内置更多容错机制。
2.  **会话历史管理**: 用户对 Web UI 的会话历史展示逻辑敏感，发现仅显示最后一条消息或出现历史消息错误附着的问题，影响连续对话体验。
3.  **客户端确定性**: 开发者在使用 WebSocket 客户端时，迫切需要确定性的状态信号（如对话结束标记），以实现更可靠的业务逻辑集成。

## 8. 待处理积压
以下重要 Issue 或 PR 长期未更新或处于 Stale 状态，需维护者关注：

- **[PR #2945](https://github.com/sipeed/picoclaw/pull/2945) feat: add debug trace viewer**: 这是一个高价值的开发者工具，但已停滞，建议优先 Review。
- **[PR #2951](https://github.com/sipeed/picoclaw/pull/2951) fix: web_search compatibility**: 修复 OpenAI 兼容性问题，对用户使用原生搜索工具至关重要。
- **[Issue #2404](https://github.com/sipeed/picoclaw/issues/2404) Streaming HTTP request config**: 尽管有活跃讨论，但长期未有关闭或合并动静，建议明确技术方案或排期。

---
*分析师注：PicoClaw 项目目前处于快速迭代修复期，v0.2.9 版本主要精力集中在修复会话管理与特定模型 API 适配问题上。建议维护者优先合并关于 Web UI 历史记录显示的修复 PR，以提升终端用户体验。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-03)

## 1. 今日速览
NanoClaw 项目在过去 24 小时内保持了较高的代码合并活跃度，共有 4 个 PR 成功合并/关闭，显示出维护者对社区贡献的积极响应。项目今日重点关注了系统的扩展性与安全性，成功合并了宿主端插件钩子系统和容器运行时的安全修复，显著提升了框架的健壮性。尽管新开 Issue 较少，但待处理的 PR 数量显示项目正处于功能迭代与细节打磨并行阶段。整体来看，项目健康度良好，代码库正在向更安全、更模块化的方向演进。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 4 个 Pull Requests 被合并或关闭，标志着项目在功能扩展和安全加固方面取得了实质性进展：

*   **安全加固 (Critical)**：PR #2538 已关闭，该修复针对 `container-runner` 中的 Dockerfile 插值逻辑增加了包名验证，成功阻断了潜在的 OS 命令注入风险 (CWE-78)。这是对项目安全性的重要提升。
    *   链接: [nanocoai/nanoclaw PR #2538](https://github.com/nanocoai/nanoclaw/pull/2538)
*   **核心功能扩展**：PR #1193 已关闭，正式引入了宿主端插件钩子系统 (`onStartup/onShutdown`)。该功能允许开发者在消息循环启动前加载插件并运行长时服务，极大地增强了 Agent 的可扩展性。
    *   链接: [nanocoai/nanoclaw PR #1193](https://github.com/nanocoai/nanoclaw/pull/1193)
*   **新渠道集成**：PR #2069 已关闭，合并了 Webchat v1 技能，为 NanoClaw 提供了原生网页聊天渠道支持，拓宽了 AI 智能体的应用场景。
    *   链接: [nanocoai/nanoclaw PR #2069](https://github.com/nanocoai/nanoclaw/pull/2069)
*   **运行时优化**：PR #2674 已关闭，标准化了运行时状态消息，增加了元数据和内部通道防护，减少了自我循环的风险。
    *   链接: [nanocoai/nanoclaw PR #2674](https://github.com/nanocoai/nanoclaw/pull/2674)

## 4. 社区热点
今日社区活跃度主要体现在代码贡献层面，新功能的合并引发了较多关注：

*   **插件系统扩展**：PR #1193 的合并是今日最受关注的更新，开发者社区对于在 Agent 生命周期中插入自定义逻辑（如启动 HTTP 服务）表现出浓厚兴趣，这解决了长期以来插件无法进行持久化运行的痛点。
*   **Webchat 技能落地**：PR #2069 的关闭意味着用户期待已久的 Web 端交互界面正式进入代码库，这将是下一阶段用户测试的重点。

## 5. Bug 与稳定性
今日记录的 Bug 修复与报告主要集中在安全性与兼容性方面：

*   **[已修复] OS 命令注入漏洞**：PR #2538 修复了容器构建过程中的命令注入漏洞，属于高危安全修复，建议所有使用 `container-runner` 的用户尽快同步代码。
    *   链接: [nanocoai/nanoclaw PR #2538](https://github.com/nanocoai/nanoclaw/pull/2538)
*   **[待修复] MCP 配置兼容性问题**：PR #2672 指出 Codex provider 在处理 `McpServerConfig` 联合类型时存在兼容性问题，且 HTTP-only 传输在代理后的表现异常。目前该 PR 处于 OPEN 状态。
    *   链接: [nanocoai/nanoclaw PR #2672](https://github.com/nanocoai/nanoclaw/pull/2672)
*   **[待修复] CLI Platform ID 命名空间问题**：PR #2187 仍在处理中，旨在修复 CLI 渠道在处理 platform IDs 时的命名空间错误。

## 6. 功能请求与路线图信号
*   **教育场景自动化**：Issue #2673 提出了“自动化学生评分系统”的需求，并结合移动端场景展示了具体的 UI/UX 想象。这暗示 NanoClaw 在教育科技 领域存在潜在的应用拓展机会，维护者可考虑将其纳入垂直场景案例库。
    *   链接: [nanocoai/nanoclaw Issue #2673](https://github.com/nanocoai/nanoclaw/issues/2673)
*   **插件系统演进**：随着 PR #1193 的合并，项目架构已支持更复杂的插件逻辑，预计未来会有更多关于插件生命周期管理的 API 完善。

## 7. 用户反馈摘要
*   **场景化需求明确**：从 Issue #2673 的描述来看，用户开始尝试将 NanoClaw 应用于具体的垂直行业（如巴布亚新几内亚的中学教育），且对移动端支持和数据可视化有明确要求。
*   **对扩展性有高要求**：用户对于插件系统的合并反馈积极，表明社区对于“不仅仅是对话，而是能执行长时任务”的 AI 智能体架构有强烈需求。

## 8. 待处理积压
*   **长期未决 PR 需关注**：PR #2187 自 5 月初开启至今仍在待合并状态，虽然最近有更新，但建议维护者优先审查以解决 CLI 渠道的潜在问题。
    *   链接: [nanocoai/nanoclaw PR #2187](https://github.com/nanocoai/nanoclaw/pull/2187)
*   **新 Issue 响应**：Issue #2673 目前尚无评论，建议社区管理者尽快确认需求范围或引导讨论。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-06-03)

## 1. 今日速览
NullClaw 项目今日整体活跃度较低但聚焦明确，未发布新版本。过去 24 小时内，项目核心关注点集中在 PII（个人敏感信息）修订功能的准确性上，共更新 1 条 Issue 与 1 条 PR。社区精准定位了修订器在处理时间戳时的误报问题，并迅速收到了针对性的修复代码。这表明项目虽然在功能迭代上节奏平缓，但在关键功能的稳定性维护上保持着较高的响应效率。

## 2. 版本发布
*无新版本发布。*

## 3. 项目进展
今日暂无合并或关闭的 PR，项目代码库未发生实质性变更。目前有 1 个待合并的 PR 正在审查阶段：

*   **[PR #945](https://github.com/nullclaw/nullclaw/pull/945) fix(redaction): reject ISO date/time patterns as false-positive phone matches**
    *   **内容**：针对 Issue #944 提出的问题，该 PR 在 `src/redaction.zig` 中引入了 `isDateLike()` 守卫函数。
    *   **进展**：该修复旨在识别并排除 ISO 标准日期时间格式（如 `YYYY-MM-DD hh` 和 `DD-MM-YYYY hh`），防止其被正则引擎误判为电话号码。
    *   **意义**：此 PR 若合并，将有效解决日志审计中的“噪音”问题，提升 Agent 在处理系统时间命令时的日志可读性，标志着项目在隐私保护与数据可用性的平衡上迈出了修正性的一步。

## 4. 社区热点
今日讨论最为集中的内容为 PII 修订功能的误报问题：

*   **[Issue #944](https://github.com/nullclaw/nullclaw/issues/944) PII redactor falsely matches date/time output as phone numbers**
    *   **热度分析**：作为今日唯一的新开 Issue，该问题直指 `enable_pii_redaction` 这一核心默认功能的缺陷。
    *   **背后诉求**：用户在使用 Agent 执行基础系统命令（如 `date`）时，发现输出被错误地标记为 `[PHONE_X]`。这反映了社区对**隐私过滤精准度**的高要求，用户不希望安全功能牺牲基础日志的完整性和可读性。

## 5. Bug 与稳定性
今日报告了 1 个功能性缺陷，对用户体验有一定影响：

*   **🔴 中等缺陷：PII 修订器误判日期格式 ([Issue #944](https://github.com/nullclaw/nullclaw/issues/944))**
    *   **现象**：系统 `date` 命令输出的时间戳（如 `2026-06-02 20:17`）被 PII 修订器错误识别为电话号码，导致日志显示 `[PHONE_X]`。
    *   **原因**：修订器的电话号码匹配正则过于激进，未能有效区分普通数字串与标准日期格式。
    *   **修复状态**：✅ **已有修复 PR** ([PR #945](https://github.com/nullclaw/nullclaw/pull/945))，待维护者审核合并。

## 6. 功能请求与路线图信号
*   **信号分析**：今日虽无明确的新功能请求，但针对 PII 修订器的修复释放了明确信号：**增强内置工具的鲁棒性**是当前路线图的隐含重点。随着 NullClaw 在 Agent 场景中的应用深入，默认开启的安全特性必须具备更高的上下文识别能力，避免“一刀切”式的拦截。预计下一阶段代码更新将继续优化各类敏感信息识别算法的精确度。

## 7. 用户反馈摘要
*   **痛点提炼**：用户 @vernonstinebaker 指出，默认开启的隐私保护机制在实际使用中存在“过度防御”现象，干扰了正常的调试和信息获取。
*   **场景还原**：在涉及系统运维或日志分析的场景中，准确的时间戳至关重要，误报会导致用户无法直接获取 Agent 的执行时间线。
*   **满意度评价**：用户积极参与修复（提交了 PR），显示了对项目解决此类细节问题能力的信心，但也反映出项目在边缘 case 的测试覆盖上仍有提升空间。

## 8. 待处理积压
目前积压量极低，建议维护者优先处理以下事项：

*   **[PR #945](https://github.com/nullclaw/nullclaw/pull/945) 待合并**：该 PR 解决了影响基础日志可读性的关键问题，且由 Issue 提出者本人提交，逻辑闭环清晰。建议尽快 Review 并 Merge，以便在后续版本中修复此回归问题。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-03)

## 1. 今日速览
IronClaw 项目今日维持高强度的开发活跃度，共处理 **32 条 Issue 更新**与 **50 条 PR 更新**。项目正处于 "Reborn" 架构重构的关键攻坚期，核心开发者集中提交了大量关于子智能体、循环机制及能力管道的架构改进提案。今日合并了 **32 个 PR**，主要聚焦于 OAuth 集成修复（Gmail/Notion）、触发器能力及运行时健壮性提升。同时，QA 团队发起了针对特定模型（Qwen/MiniMax）的 Bug Bash，暴露了 UI 交互与模型输出渲染层面的若干稳定性问题。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 **32 个 PR 被合并或关闭**，项目整体向着架构健壮化与集成完善方向迈进：

*   **集成与认证修复**：
    *   [PR #4345](https://github.com/nearai/ironclaw/pull/4345) 和 [PR #4346](https://github.com/nearai/ironclaw/pull/4346) 修复了 Notion DCR OAuth 和 Gmail OAuth 的作用域与需求映射问题，增强了 Reborn 架构下的认证可靠性。
    *   [PR #4357](https://github.com/nearai/ironclaw/pull/4357) 修复了本地开发环境下的 Reborn 内存挂载问题，改善了开发体验。
*   **运行时稳定性**：
    *   [PR #4371](https://github.com/nearai/ironclaw/pull/4371) 修复了 Codex ChatGPT 空响应导致的解析错误，提升了模型兼容性。
    *   [PR #4370](https://github.com/nearai/ironclaw/pull/4370) 解决了压缩摘要重试的幂等问题，防止数据损坏。
    *   [PR #4318](https://github.com/nearai/ironclaw/pull/4318) 引入了触发器一等能力，为计划任务奠定了基础。
*   **安全性与加固**：
    *   [PR #4369](https://github.com/nearai/ironclaw/pull/4369) 加固了技能上下文预算的契约测试。

## 4. 社区热点
今日讨论最活跃的议题集中在架构设计与新功能实现细节上：

*   **[Issue #3857](https://github.com/nearai/ironclaw/issues/3857) [OPEN]**: **评论数 6**。关于 Slack ProductAdapter MVP 的实现讨论。社区/团队正在敲定如何通过预配置凭证支持 DM 和应用提及，这是 Reborn 服务路由的关键一环。
*   **[Issue #3280](https://github.com/nearai/ironclaw/issues/3280) [OPEN]**: **评论数 5**。关于添加 `ProductWorkflow` 和 `InboundTurnService` 外观层。该议题旨在构建产品适配器与宿主层服务之间的门面，体现了项目正在系统性地梳理架构层次。
*   **[Issue #4376](https://github.com/nearai/ironclaw/issues/4376) [OPEN]**: **评论数 1**。关于 HTTP 凭证载体的安全性加固。这是对之前 PR #4372 的后续讨论，涉及更深层的安全设计，如防止敏感信息通过 `Clone` 意外泄露。

## 5. Bug 与稳定性
今日 QA 团队提交了一批 P2 级别的 Bug，主要集中在特定模型（Qwen, MiniMax）的适配与 UI 交互上：

*   **[P2] UI/交互逻辑缺陷**：
    *   [Issue #4344](https://github.com/nearai/ironclaw/issues/4344): Agent 在加载时会将用户消息镜像为自己的回复（Qwen3.6 模型）。
    *   [Issue #4341](https://github.com/nearai/ironclaw/issues/4341): 思维链 意外暴露给用户且卡在 Thinking 状态。
    *   [Issue #4342](https://github.com/nearai/ironclaw/issues/4342): 认证模态框在刷新页面后依然阻塞聊天界面。
*   **[P2] 模型适配/运行时错误**：
    *   [Issue #4339](https://github.com/nearai/ironclaw/issues/4339): 提供商工具调用被错误拒绝为 `InvalidInvocation`（MiniMax 模型）。
    *   [Issue #4343](https://github.com/nearai/ironclaw/issues/4343): MCP 集成显示已确认但因驱动故障不可用。
    *   [Issue #4377](https://github.com/nearai/ironclaw/issues/4377): `/model` 端点返回的显示名称无法用于实际切换模型（NEAR AI Provider）。

## 6. 功能请求与路线图信号
核心开发者 @henrypark133 今日密集提交了一系列 "Reborn" 架构审计相关的 Issues，这表明项目正处于**上线前的架构整顿阶段**：

*   **安全与合规性**：[Issue #4359](https://github.com/nearai/ironclaw/issues/4359) 建议强制要求 `safety_context` 并弃用裸网关，以防止 Prompt 注入扫描被绕过。
*   **预算与资源控制**：[Issue #4364](https://github.com/nearai/ironclaw/issues/4364) 指出预算统计结构性不准确（如 Wall-clock limit 未强制执行），建议修正 Token 估算和成本表。
*   **子智能体架构**：[Issue #4348](https://github.com/nearai/ironclaw/issues/4348) 至 [Issue #4353](https://github.com/nearai/ironclaw/issues/4353) 系列提出了完善子智能体的持久化交付、取消传播和审计溯源功能。
*   **凭证安全性**：[Issue #4376](https://github.com/nearai/ironclaw/issues/4376) 提议使用非克隆类型加固 HTTP 凭证载体，防止内存泄露。

## 7. 用户反馈摘要
从 Issues 提炼出的用户痛点主要集中在**模型切换体验**与**特定模型兼容性**上：
*   **模型名称困惑**：用户在使用 `/model` 命令时，返回的 "GPT OSS 120B" 等名称无法直接用于切换，导致操作受阻。
*   **特定模型稳定性差**：Qwen 和 MiniMax 模型用户遭遇了较多的 UI 渲染错误（如消息镜像、思维链卡死）和工具调用失败，用户体验有待优化。

## 8. 待处理积压
*   **[PR #3669](https://github.com/nearai/ironclaw/pull/3669) [OPEN]**: "Engine v2: expose channel-supplied thread/response ids to tools"。该 PR 创建于 5 月 14 日，涉及工具调用与外部 API 的关联性功能，目前仍有待合并，建议关注其与 Engine v2 重构的兼容性进度。
*   **[PR #3548](https://github.com/nearai/ironclaw/pull/3548) [OPEN]**: "Add DISABLE_TOOLS_LIST flag"。该功能 PR 创建于 5 月 12 日，涉及安全相关的工具禁用配置，建议维护者评估是否尽快合以确保生产环境的安全控制能力。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-03)

## 1. 今日速览
LobsterAI 项目今日呈现出**“开发活跃、社区静默”**的态势。过去 24 小时内，项目虽无新版本发布和用户 Issue 反馈，但代码库迎来了 9 次 PR 更新，其中 6 次已成功合并。核心开发团队正集中精力优化多模态模型支持（特别是 MiniMax M3）、完善子智能体管理功能以及提升 MCP（Model Context Protocol）启动性能。整体来看，项目处于功能迭代与体验优化的快速推进期，代码提交频率较高，健康度良好。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 6 个 PR 成功合并，显著提升了模型支持与系统稳定性：

*   **多模态能力修复**：修复了 MiniMax-M3 模型无法使用图像输入的问题 ([PR #2093](https://github.com/netease-youdao/LobsterAI/pull/2093))。此前代码硬编码禁用了图像支持，现已修正，使得 M3 模型能够正常处理多模态任务。
*   **MCP 性能优化**：重构了 `npx` MCP 的启动解析逻辑，通过预安装和绝对路径映射减少了每次会话的启动耗时，并增加了关键节点的计时日志以便监控 ([PR #2091](https://github.com/netease-youdao/LobsterAI/pull/2091))。
*   **子智能体管理增强**：实现了子智能体在侧边栏的批量选择与删除功能，并优化了网关清理机制，避免并发压力 ([PR #2095](https:///netease-youdao/LobsterAI/pull/2095))。
*   **UI/UX 优化**：合并了 Artifacts 功能的相关更新 ([PR #2092](https://github.com/netease-youdao/LobsterAI/pull/2092))，并优化了分享成功弹窗的信息层级，移除了冗余的视觉标识 ([PR #2094](https://github.com/netease-youdao/LobsterAI/pull/2094))。
*   **系统清理**：隐藏了 OpenClaw 内部运行时插件的显示，避免用户误操作 ([PR #2096](https://github.com/netease-youdao/LobsterAI/pull/2096))。

## 4. 社区热点
过去 24 小时内**无新增 Issue 或活跃讨论**。社区反馈渠道较为平静，目前的开发活动主要由核心团队驱动，集中在代码层面的功能完善与缺陷修复。

## 5. Bug 与稳定性
今日无新报告的 Bug，但核心开发者**主动修复**了一个严重影响体验的功能阻塞问题：

*   **[已修复] MiniMax-M3 图像输入失效**：由于配置遗留问题，MiniMax-M3 虽然支持图像，但在客户端中被错误标记为不支持。PR #2093 已修复此逻辑，确保用户可以使用该模型进行图文对话。([PR #2093](https://github.com/netease-youdao/LobsterAI/pull/2093))

## 6. 功能请求与路线图信号
通过分析待合并的 PR，可以洞察下一阶段的更新方向：

*   **MiniMax M3 升级**：PR #388 提议将 MiniMax 的默认模型升级为 M3，并移除一系列旧版模型（M2.5/M2.1/M2/M1）。该 PR 目前处于 Open 状态，显示项目正紧跟模型厂商的迭代步伐。([PR #388](https://github.com/netease-youdao/LobsterAI/pull/388))
*   **IM 实例管理规范化**：PR #1464 为钉钉、飞书、QQ 等 IM 平台的多实例功能增加了重名校验，旨在解决实例名称混淆和机器人重复添加的问题，提升了企业级场景下的可用性。([PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464))

## 7. 用户反馈摘要
由于今日无新增 Issue 评论或活跃讨论，暂无具体的用户反馈内容可供提炼。当前版本的更新主要基于开发者的内部测试与长期规划需求。

## 8. 待处理积压
维护者需关注以下长期未决或依赖更新的 PR：

*   **依赖更新滞后**：Dependabot 提出的 Electron 依赖升级 PR ([PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)) 自 4 月开启至今未合并，涉及 Electron 从 v40 到 v42 的大版本跨度，需评估兼容性风险。
*   **功能 PR 待合并**：MiniMax M3 默认模型升级 ([PR #388](https://github.com/netease-youdao/LobsterAI/pull/388)) 和 IM 实例重名校验 ([PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464)) 均已更新但仍处于 Open 状态，建议推进 Review 进程。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-06-03)

## 1. 今日速览
Moltis 项目今日整体活跃度平稳，主要集中在功能增强与底层性能优化。过去24小时内无新版本发布，社区产生 1 条新功能需求 Issue，并有 2 个活跃 PR 正在推进中。开发重点聚焦于提升用户对 AI 智能体行为日志的控制粒度以及优化长会话下的上下文管理机制。整体来看，项目处于持续迭代优化阶段，代码质量与用户体验细节是当前关注核心。

## 2. 版本发布
无。

## 3. 项目进展
今日虽无合并记录，但有 2 个重要 PR 处于活跃待合并状态，预示着下一版本的功能方向：

*   **精细化日志控制**：PR [#1093](https://github.com/moltis-org/moltis/pull/1093) 响应了用户对频道回复中 "Activity log" 显示的控制需求。该 PR 实现了分账户、分频道、分用户的三级配置体系，支持 `all`、`errors_only` 和 `off` 三种模式。这一改进将极大提升多场景下的交互体验，避免无关日志干扰用户阅读。
*   **上下文管理优化**：PR [#1089](https://github.com/moltis-org/moltis/pull/1089) 针对持久化工具结果的存储进行了限制。该优化旨在解决长会话或复杂工具调用场景下，历史记录体积过大导致重新加载效率低下或超出上下文窗口限制的问题，有助于提升系统稳定性与响应速度。

## 4. 社区热点
今日最活跃的话题围绕 **用户交互界面的洁净化** 展开：

*   **Issue [#1092](https://github.com/moltis-org/moltis/issues/1092)**：用户 @s-salamatov 提出增加配置选项以禁用频道 Activity log 工具状态消息。
    *   **分析**：在 Telegram 等集成场景中，AI 调用工具后的详细日志往往以折叠块或追加消息形式展示。对于普通用户而言，这些调试信息可能构成视觉干扰。该 Issue 的提出反映了社区对 **"生产环境交互简洁性"** 与 **"开发调试信息透明度"** 之间平衡的诉求，且迅速得到了开发者的响应（PR #1093）。

## 5. Bug 与稳定性
今日未报告严重 Bug 或崩溃问题。

*   **潜在风险预防**：PR [#1089](https://github.com/moltis-org/moltis/pull/1089) 虽非针对具体 Bug 的修复，但其提出的 "Cap persisted tool results"（限制持久化工具结果）属于预防性修复。若工具返回数据量过大，历史记录重新注水时可能导致内存溢出或 Token 超限，该 PR 的出现暗示了项目在处理大规模数据流场景下的健壮性正在被加强。

## 6. 功能请求与路线图信号
*   **信号：日志可见性分级**：Issue [#1092](https://github.com/moltis-org/moltis/issues/1092) 提出的需求已通过 PR [#1093](https://github.com/moltis-org/moltis/pull/1093) 进入实现阶段。这表明项目正在从 "功能可用" 向 "体验精细" 过渡。特别是支持 `errors_only` 模式，意味着项目将引导用户仅在异常时关注底层细节，符合智能助手产品化的最佳实践。
*   **预测**：这两个功能（日志控制与上下文裁剪）极有可能在下一个版本中打包发布，重点解决企业级部署中的运维审计与性能平衡问题。

## 7. 用户反馈摘要
从今日唯一的 Issue 讨论中可以提炼出以下痛点：
*   **信息过载**：用户在通过 Telegram 等客户端使用 Moltis 时，不希望看到冗长的工具调用日志，特别是当主回复已经通过流式编辑完成时，后续追加的日志消息显得尤为多余。
*   **控制权需求**：用户希望对不同渠道（Channel）或不同账户的日志展示策略有独立控制权，满足不同受众（如开发者 vs 最终用户）的差异化需求。

## 8. 待处理积压
*   **PR [#1089](https://github.com/moltis-org/moltis/pull/1089)（创建于 06-01）**：该 PR 涉及核心的 Session 历史管理逻辑，已持续开启 2 天且今日有更新。鉴于其对性能的关键影响，建议维护者尽快进行代码审查，确认是否存在边界情况风险，以便及时合入主线，避免积压影响后续开发。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-06-03)

## 1. 今日速览
CoPaw 项目今日保持高活跃度，社区互动频繁，过去24小时内 Issues 闭环率极高（关闭 19 条，新开 16 条），PR 合并势头强劲。项目当前处于架构升级与安全性加固的关键阶段，一方面核心贡献者正在推进 AgentScope 2.0.0 的重大重构（#4846），另一方面安全研究员提交了多个高危漏洞修复并已关闭。功能层面，Windows 端体验优化和子代理协作能力增强成为关注焦点。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **12 个 PR 被合并/关闭**，主要集中在稳定性修复、Windows 体验优化及安全性加固，显著提升了系统的健壮性。

*   **稳定性与性能修复**：
    *   PR #4787 合并，引入双层防御机制解决 Shell 输出过大导致上下文窗口溢出的问题，防止 Agent 崩溃。
    *   PR #3252 关闭，修复了工具返回超大结果（如日志文件）导致 Session 持久化失败的问题，通过在持久化前截断处理提升了系统稳定性。
    *   PR #4772 合并，通过懒加载和缓存策略优化 Windows 启动性能，显著缩短首次交互时间。
*   **功能增强**：
    *   PR #4906 合并，修复了 Windows 文件浏览器被锁定在单个驱动器根目录的问题，现在支持跨盘符浏览。
    *   PR #4850 合并，修复了企业微信（WeCom）频道的会话 ID 鉴权逻辑缺陷，防止用户通过 payload 伪造 session_id 访问他人历史记录。
    *   PR #1317 合并，增加了 cloudflared 下载进度的实时通知，改善了首次配置时的用户体验。

## 4. 社区热点
今日讨论最热烈的话题集中在**安全性漏洞**与**微信/企业微信渠道的可用性**上。

*   **安全性审计热潮**：用户 @YLChen-007 连续提交并关闭了多个安全类 Issue（#4908, #4909, #4913, #4914），涉及未授权修改全局设置、ToolGuard 绕过、路径遍历导致敏感文件泄露以及工作区导出泄露密钥等问题。这表明项目正在进行深入的安全审查，且维护者响应极其迅速，相关漏洞均已确认修复。
    *   [Issue #4908: Unauthenticated Settings Modification](https://github.com/agentscope-ai/QwenPaw/issues/4908)
    *   [Issue #4913: Path Traversal Vulnerability](https://github.com/agentscope-ai/QwenPaw/issues/4913)
*   **微信渠道推送失败**：Issue #4878 引发热议，用户反馈定时任务无法推送到微信，根因在于频道代码逻辑错误。该问题已定位并关闭，社区对于具体报错 `ret=-3` 的讨论帮助快速定位了问题。
    *   [Issue #4878: Wechat Push Failure](https://github.com/agentscope-ai/QwenPaw/issues/4878)

## 5. Bug 与稳定性
今日报告了若干影响核心功能的 Bug，部分已有修复方案或正在进行中。

*   **[严重] 子代理黑盒问题**：Issue #4923 报告 `spawn_subagent` 启动的子任务运行时无法查看进展，任务完成后内容也不完整。这严重影响了多智能体协作的可观测性。
    *   链接：[Issue #4923](https://github.com/agentscope-ai/QwenPaw/issues/4923)
*   **[严重] 微信渠道权限错误持久化**：Issue #4922 显示在微信渠道请求文件发送失败后，后续所有对话均报错 `Permission denied`，疑似会话状态被污染或权限处理逻辑异常。
    *   链接：[Issue #4922](https://github.com/agentscope-ai/QwenPaw/issues/4922)
*   **[中等] 上下文压缩失败**：Issue #4924 指出自动压缩机制因旧格式 file block 导致 `AttributeError`，导致历史消息无法压缩，进而引发上下文过长。
    *   链接：[Issue #4924](https://github.com/agentscope-ai/QwenPaw/issues/4924)
*   **[中等] Browser_use 启动失败**：Windows 环境下 CDP 超时及浏览器闪退问题（Issue #4919），影响自动化工具链使用。
    *   链接：[Issue #4919](https://github.com/agentscope-ai/QwenPaw/issues/4919)

## 6. 功能请求与路线图信号
用户对多模型协作、上下文管理及文件交互提出了明确需求，部分已对应到待合并的 PR。

*   **多模型协作**：Issue #4901 请求 `spawn_subagent` 支持为子任务指定不同模型（如复杂任务用 Opus，简单任务用 Haiku），以降低成本。这与 Claude Code 的模式相似，呼声较高。
    *   链接：[Issue #4901](https://github.com/agentscope-ai/QwenPaw/issues/4901)
*   **上下文管理优化**：
    *   Issue #4836 建议工具定义按需加载，减少 55-65% 的初始 Token 开销。
    *   Issue #4921 建议图片/附件不应作为原始数据载入上下文，应仅保留引用，防止 Base64 占用大量 Token。
*   **Windows 端体验**：Issue #4893 请求 Windows 本地版取消文件上传大小限制（因无需服务器传输），Issue #4894 请求支持拖拽上传，显示用户对本地化部署的强需求。

## 7. 用户反馈摘要
*   **痛点**：
    *   微信/企业微信渠道的稳定性是重灾区，涉及消息推送、权限隔离（Issue #4845）及会话持久化问题。
    *   上下文膨胀导致的成本增加和 Token 浪费是用户普遍担忧的问题。
    *   前端 UI 在数据量大时卡顿（Issue #4917），加载机制有待优化。
*   **满意点**：
    *   对安全问题的响应速度表示认可，多个高危漏洞在报告当天即被关闭。
    *   Windows 端的文件浏览体验在 PR #4906 合并后得到实质性改善。

## 8. 待处理积压
*   **架构重构 PR #4846**：关于从 AgentScope 1.x 迁移到 2.0.0 的重构 PR 仍处于 Open 状态，标记为 Breaking Change。这是项目下一阶段发展的核心阻碍，建议维护者尽快推进 Review 或发布 Canary 版本供社区测试。
    *   链接：[PR #4846](https://github.com/agentscope-ai/QwenPaw/pull/4846)
*   **内存管理后端 PR #3565**：引入 AgentMemory 作为后端选项的 PR 已积压近两个月，虽有点赞但未合并，该功能对提升 Agent 记忆能力至关重要。
    *   链接：[PR #3565](https://github.com/agentscope-ai/QwenPaw/pull/3565)
*   **自定义频道监听异常**：Issue #4877 反映保存设置会停止监听，涉及核心逻辑错误，需尽快修复。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目日报 (2026-06-03)

**项目仓库**: [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

## 1. 今日速览
EasyClaw 今日处于**高维护低交互**状态。过去 24 小时内，社区端未见新增 Issues 或 Pull Requests，用户活跃度显平淡。然而，项目维护者进行了高密度的版本迭代，连续发布了从 v1.8.24 到 v1.8.27 的 4 个更新版本，显示出项目内部开发节奏紧凑，重点集中在电商模块的数据安全、OAuth 流程优化及桌面端用户体验增强。整体来看，项目健康度良好，处于快速修复与功能微调期。

## 2. 版本发布
今日项目连续发布了 4 个新版本，更新频率极高，建议用户尽快升级至最新版 v1.8.27 以获得最佳稳定性。

- **[v1.8.27: RivonClaw v1.8.27](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.27)**
  - **关键更新**：
    - **数据安全性修复**：修复了电商店铺更新接口的问题，现在将空字段视为无操作，防止后端有效载荷缺失可选值时意外清除现有的店铺详情。
    - **健壮性提升**：放宽了客服平台的追赶资格逻辑，优化了异常恢复路径。
  - **影响**：强烈建议依赖电商模块的用户更新，避免数据丢失风险。

- **[v1.8.26: RivonClaw v1.8.26](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.26)**
  - **关键更新**：
    - **新手引导优化**：细化了桌面端欢迎流程和认证入口，帮助新卖家更快进入正确的设置路径。
    - **本地化**：增加了支持的电商区域和聊天示例预设的多语言支持。
    - **基础设施**：改进了中国区的依赖配置，加固了客服升级逻辑。

- **[v1.8.25: RivonClaw v1.8.25](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.25)**
  - **关键更新**：
    - **OAuth 体验**：OAuth 授权完成后返回完整的店铺载荷，桌面端可即时刷新连接状态。
    - **并发处理**：优化了多店铺同时完成授权时的并发事件处理可靠性。
    - **Bug 修复**：修复了客服调度 RPC 超时处理逻辑，确保重试和恢复路径正常工作。

- **[v1.8.24: RivonClaw v1.8.24](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.24)**
  - **关键更新**：
    - **桌面端功能**：新增桌面公告和邀请码 UI，用户可在应用内查看产品通知及账户访问详情。
    - **新手体验**：通过默认客户端更新、预设店铺技能和刷新聊天示例，改进了新用户电商设置路径。
    - **Bug 修复**：修复了客服 Airflow 重试调度问题。

## 3. 项目进展
尽管今日无公开的 PR 合并记录，但从密集的 Release 动态来看，项目在**电商核心业务逻辑**与**桌面端客户端体验**两方面取得了实质性进展。
- **功能演进**：新增了桌面端公告系统和邀请码功能，完善了 OAuth 授权后的状态同步机制。
- **稳定性建设**：重点修复了数据误删风险（空字段处理）和网络超时重试机制，显著提升了系统的容错能力。
- **国际化**：针对多语言和特定区域（中国）的依赖部署进行了优化，表明项目正在为更广泛的用户群体做准备。

## 4. 社区热点
- **今日动态**：过去 24 小时内无新增 Issues 或 PRs。
- **分析**：社区讨论区今日较为沉寂，可能是因为新版发布集中在解决内部逻辑和已有反馈，或用户主要在通过非 GitHub 渠道（如群组或邮件）进行反馈。缺乏新 Issue 可能意味着当前版本在核心功能上表现稳定，未引发大规模用户报障。

## 5. Bug 与稳定性
今日无新报告的 Bug，但版本更新中修复了两个值得注意的潜在问题：
1.  **[严重] 电商店铺数据误删风险 (v1.8.27)**：
    - **描述**：后端载荷省略可选值时，可能意外清除现有店铺详情。
    - **状态**：已在 v1.8.27 中修复。
2.  **[中等] 客服调度 RPC 超时 (v1.8.25)**：
    - **描述**：客服调度中的 RPC 超时处理不当，影响重试与恢复。
    - **状态**：已在 v1.8.25 中修复。

## 6. 功能请求与路线图信号
今日无显性的功能请求记录。但从 v1.8.24 和 v1.8.26 的更新内容推断，项目近期的路线图重点包括：
- **新用户转化优化**：多次提到“欢迎流程”、“新手设置路径”，表明团队正致力于降低新卖家的上手门槛。
- **桌面端集成加深**：公告、邀请码及 OAuth 状态刷新显示桌面客户端正逐渐成为核心交互界面。
- **区域化适配**：针对中国区依赖和本地化语言的更新，预示着项目正在进行区域性市场的深耕。

## 7. 用户反馈摘要
由于今日无 Issue 评论数据，暂无法提炼具体的用户痛点或满意点。但连续 4 个版本的发布间接反映了开发团队对**数据一致性**（店铺更新）和**连接稳定性**（OAuth、RPC）的高度重视，这正是 SaaS 类工具用户最核心的诉求。

## 8. 待处理积压
- **当前状态**：无新增活跃 Issue，过往 Issue 积压情况未知。
- **建议**：虽然今日无新 Issue，但 v1.8.27 涉及数据安全的修复，建议维护者主动检查历史 Issue 中是否有相关反馈，并在 Release Note 中补充更详细的升级指导，以防用户因停留在旧版本而遭受数据损失。

---
*分析师注：项目今日处于“静默开发”模式，代码提交活跃但社区互动为零。建议关注后续用户对新版桌面端功能的反馈。*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*