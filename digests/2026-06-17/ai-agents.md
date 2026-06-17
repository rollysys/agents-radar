# OpenClaw 生态日报 2026-06-17

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-06-17 04:21 UTC

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

以下是为您生成的 OpenClaw 项目 2026-06-17 动态日报：

---

# 📊 OpenClaw 项目日报 (2026-06-17)

## 1. 今日速览
今日 OpenClaw 社区活跃度极高，Issue 与 PR 更新量均达到 **500 条**，显示项目正处于高速迭代期。项目发布了 **v2026.6.8** 版本，重点增强了 Telegram 与 WhatsApp 的富文本消息能力。然而，Issue 新增量（468 条）远超关闭量（32 条），且待合并 PR 数量庞大（406 条），存在明显的社区反馈积压，维护者需关注 Issue 分流与 PR 评审速度。

## 2. 版本发布
### **v2026.6.8**
- **Highlights**:
  - **Richer channel delivery**: 增强了 Telegram 和 WhatsApp 的消息渲染能力。
    - **Telegram**: 支持表格、列表、可折叠引用块、保留换行符以及 CLI 支持的回复样式。
    - **WhatsApp**: 现支持配置的 ACP 绑定。
- **链接**: [v2026.6.8 Release](https://github.com/openclaw/openclaw/releases/tag/v2026.6.8)

## 3. 项目进展
今日共有 **94 个 PR 被合并或关闭**，主要集中在稳定性修复与代码清理。

- **安全与稳定性修复**:
  - **[CLOSED] PR #93909**: 修复了 MCP OAuth 刷新令牌的序列化问题，避免重放陈旧的刷新令牌，并持久化 OAuth 元数据。这对多进程环境下的认证安全性至关重要。
  - **[CLOSED] PR #93924**: 移除了未发布的 `ClawRouter` 提供者及其相关依赖，减少了代码库臃肿。

- **待合并的重要更新**:
  - **[OPEN] PR #86655**: 提议增加 `claude-bridge` 应用服务器扩展，旨在为 Anthropic 模型提供一流的支持，目前仍在审查中。
  - **[OPEN] PR #83988**: 修复 TTS（文本转语音）模式下的文本“抖动”问题，避免在 Telegram 上消息被删除重发，提升用户体验。
  - **[OPEN] PR #88968**: 防止内存刷新失败导致用户回复中断，针对网关超时等场景增加了容错处理。

## 4. 社区热点
今日讨论最热烈的问题集中在跨平台支持与核心功能的稳定性上。

- **[Issue #75] Linux/Windows Clawdbot Apps**: 评论数高达 **109 条**。社区强烈呼吁提供 Linux 和 Windows 的原生客户端（目前仅有 macOS/iOS/Android）。由于涉及平台差异和打包复杂度，该需求被标记为 `needs-maintainer-review` 和 `needs-product-decision`。
- **[Issue #44925] Subagent completion silently lost**: 评论 **19 条**。多个用户反馈子代理任务的结果偶尔会“静默丢失”，无重试、无通知、无自动恢复，严重影响了多代理编排的可靠性。该问题被标记为 P1 优先级。
- **[Issue #67366] TypeError during `openclaw onboard`**: 评论 **8 条**。用户在替换 Telegram token 时遇到崩溃，这是新手入门的阻碍点。

## 5. Bug 与稳定性
今日报告了多个严重影响使用体验的 Bug，尤其集中在多代理协作和长时间运行的会话中。

- **P1 - 严重功能性 Bug**:
  - **[Issue #62505] Coding Agent never completes anything**: 回归问题，编码代理在最新版本中陷入死循环或仅输出模糊状态，无法完成任务。
  - **[Issue #58957] Model switch fails silently**: 当上下文过大时，模型切换静默失败，用户无法感知错误原因。
  - **[Issue #54155] Gateway memory leak**: 网关进程在连续运行 4 天后内存从 389MB 飙升至 14.7GB，导致系统卡顿，推测与会话累积有关。

- **已发现且待修复**:
  - **[Issue #45765] OPENCLAW_HOME 嵌套目录**: 当设置 `OPENCLAW_HOME` 为 `~/.openclaw` 时，系统错误地创建了 `~/.openclaw/.openclaw` 嵌套目录。
  - **[Issue #92076] Subagent completion delivery fail**: 当请求者会话处于非活跃状态时，子代理无法传递结果。

## 6. 功能请求与路线图信号
- **数据安全**: **[Issue #64046]** 用户请求支持敏感数据脱敏，指出目前配置文件中的 API Key 和日志中的敏感信息均为明文，存在安全隐患。这是一个强烈的安全信号。
- **网络访问**: **[Issue #39604]** 请求 `web_fetch` 工具支持访问私有网络地址（如 localhost, 10.x），目前被安全策略拦截。
- **性能优化**: **[Issue #68596]** 针对长思考模型（如 DeepSeek-R1），请求配置流式看门狗的超时阈值，以避免误判为假死。

## 7. 用户反馈摘要
- **多代理编排痛点**: 用户在尝试使用 OpenClaw 进行多代理并行任务时，频繁遇到状态同步丢失、会话锁冲突等问题（如 Issue #43367），表明多代理架构的稳定性仍是目前的短板。
- **渠道连接质量**: Telegram 和 WhatsApp 的消息渲染虽有改善（v2026.6.8），但仍有用户反馈消息重复、特定格式丢失的问题。
- **配置复杂度**: 用户反馈配置过程容易出错，如环境变量设置不当导致嵌套目录、Token 替换导致崩溃等，提示需要改进 `onboard` 流程的健壮性。

## 8. 待处理积压
以下重要 Issue 长期未得到有效解决或响应，建议维护者优先关注：

- **[Issue #75] Linux/Windows 客户端支持**: 尽管是老问题，但评论数持续增长，严重影响非 macOS 用户的体验。
- **[Issue #44925] 子代理结果丢失**: P1 级别的严重 Bug，直接关系到 Agent 编排功能的可用性，需尽快 PR 修复。
- **[Issue #59330] Control UI Raw mode 禁用**: 配置编辑器的 Raw 模式自 3 月 31 日起被强制禁用，影响高级用户配置。

---

**分析师总结**：OpenClaw 正处于功能快速扩张期，v2026.6.8 的发布显示了团队对用户体验细节的关注。然而，Issue 积压严重，尤其是多代理协作和会话状态管理相关的 Bug 已成为主要痛点。建议在下一阶段优先解决稳定性问题，而非引入新特性。

---

## 横向生态对比

# 开源 AI 智能体生态横向对比分析报告 (2026-06-17)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态呈现出**“核心扩张，长尾分化”**的态势。以 **OpenClaw** 为首的头部项目正处于功能高速迭代期，但普遍面临多代理编排稳定性与社区维护积压的挑战；**CoPaw** 与 **IronClaw** 等追赶者在自动化任务编排与架构重构上表现激进；而 **LobsterAI**、**EasyClaw** 等项目则深耕协同办公、电商营销等垂直场景。整体生态正从单一的对话能力向多模态交互、企业级安全合规及复杂任务自动化方向演进。

## 2. 各项目活跃度对比

| 项目名称 | Issue 更新/关闭 | PR 更新/合并 | 版本发布 | 健康度评估 | 核心动态关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 / 32 | 500 / 94 | v2026.6.8 | ⚠️ **过载** | 积压严重，多代理 Bug，富媒体增强 |
| **NanoBot** | 10 / 5 | 24 / 14 | - | ✅ **健康** | 稳定性修复，上下文优化，体验改善 |
| **Zeroclaw** | 50 / - | 50 / 3 | - | ⚠️ **阻塞** | PR 积压，架构 RFC，文档争议 |
| **Hermes Agent** | 46 / 4 | 50 / 1 | - | ⚠️ **过载** | 桌面端崩溃，安全修复，多租户瓶颈 |
| **PicoClaw** | - / - | - / 13 | Nightly | ✅ **活跃** | 安全审计，插件化架构，恐慌修复 |
| **NanoClaw** | 5 / 1 | - / 4 | - | ✅ **健康** | 静默失败修复，合规讨论 |
| **NullClaw** | 2 / - | 3 / 0 | - | 🔶 **维护中** | Teams 集成，调度器权限 |
| **IronClaw** | 50 / 18 | 50 / 14 | - | ✅ **健康** | Engine V2 里程碑，自动化 UX |
| **LobsterAI** | 1 / - | - / 5 | - | 🔶 **低活跃** | 协同搜索优化，Artifacts 重构 |
| **TinyClaw** | 0 / 0 | 1 / 0 | - | 🔶 **静默** | Windows 兼容性修复 |
| **Moltis** | 3 / 1 | 2 / 0 | - | 🔶 **维护中** | 语音回声消除，TTS 配置 |
| **CoPaw (QwenPaw)**| 40+ / - | 40+ / 25 | v1.1.12-beta.1 | ⚠️ **高频震荡** | 进程冻结，桌面端崩溃，长上下文优化 |
| **ZeptoClaw** | 0 / 0 | 1 / 0 | - | 🔶 **静默** | 依赖更新 |
| **EasyClaw** | 0 / 0 | 0 / 0 | v1.8.35 | 🔶 **封闭** | 电商 AI 增强，无社区互动 |

> **注**：健康度评估基于 Issue/PR 的处理速率比及社区反馈积压情况。

## 3. OpenClaw 在生态中的定位

*   **生态核心参照物**：OpenClaw 拥有最大的社区活跃量（Issue/PR 日均 500+），其功能覆盖度最广（Telegram/WhatsApp 富媒体、多渠道支持），是生态中事实上的“标准参照”。
*   **优势与瓶颈**：优势在于社区规模效应和多渠道连接能力；但相比 **NanoBot** 的稳定迭代和 **IronClaw** 的架构重构，OpenClaw 目前深陷“规模陷阱”，Issue 积压（新增 468 vs 关闭 32）和 PR 拥堵（待合并 406）极为严重，维护响应速度明显滞后于社区需求。
*   **技术路线差异**：不同于 **Zeroclaw** 追求 WASM 等先进架构，OpenClaw 更侧重于应用层功能的快速堆叠，但在多代理协作和内存管理等深层技术问题上（如 Issue #44925, #54155）暴露了技术债。

## 4. 共同关注的技术方向

1.  **多代理协作的稳定性**
    *   **现象**：多项目报告子代理结果丢失、死循环或状态冲突。
    *   **涉及项目**：OpenClaw (Issue #44925 子代理静默丢失), CoPaw (Issue #5218 上下文压缩冻结), Hermes (Issue #34352 多租户架构缺陷)。
    *   **诉求**：从单次对话向多轮、多智能体编排演进时，状态持久化与隔离是核心痛点。

2.  **长上下文与内存管理**
    *   **现象**：长对话导致内存溢出、性能下降或上下文截断策略不当。
    *   **涉及项目**：OpenClaw (网关内存泄漏 14.7GB), NanoBot (Token 限制优化), CoPaw (Headroom 压缩集成)。
    *   **诉求**：急需更智能的上下文压缩与内存回收机制，而非简单的 FIFO 截断。

3.  **本地模型 与兼容性**
    *   **现象**：对非 OpenAI 模型的适配仍存在大量边缘 Bug。
    *   **涉及项目**：NullClaw (Ollama 输出截断), NanoBot (Kimi K2.7 支持), CoPaw (MiniMax 格式兼容)。
    *   **诉求**：屏蔽底层模型差异，实现真正的“模型无关”接入。

4.  **安全性与合规性**
    *   **现象**：安全审计增加，凭证管理受重视。
    *   **涉及项目**：PicoClaw (批量 SSRF/权限漏洞), OpenClaw (敏感数据脱敏请求), NanoClaw (凭证代理合规争议)。

## 5. 差异化定位分析

| 维度 | 项目群 | 关键特征 | 典型代表 |
| :--- | :--- | :--- | :--- |
| **架构演进** | 激进重构派 | 追求引擎级重构、多路径执行、WASM 沙箱 | **IronClaw** (Engine V2), **Zeroclaw** (Gateway 解耦), **PicoClaw** (插件化) |
| **场景落地** | 垂直应用派 | 深耕特定行业或场景，功能具体 | **LobsterAI** (协同办公/Artifacts), **EasyClaw** (电商营销决策), **Moltis** (语音交互 Live Mode) |
| **体验优先** | 稳定易用派 | 关注安装体验、静默错误修复、UI 细节 | **NanoBot** (向导优化), **NanoClaw** (预算耗尽提示), **TinyClaw** (跨平台修复) |
| **企业级** | 安全集成派 | 侧重多租户、权限、SaaS 部署 | **Hermes Agent** (多租户/桌面端), **NullClaw** (Teams/调度权限) |

## 6. 社区热度与成熟度

*   **快速迭代/扩张期 (高风险)**：**OpenClaw**、**CoPaw**。社区极度活跃，但 Bug 爆发式增长，稳定性受到挑战，需警惕“功能过载”导致的维护崩溃。
*   **质量巩固期 (成熟)**：**NanoBot**、**IronClaw**。在推进大功能（如 V2 引擎）的同时，能保持较高的 PR 合并率和 Issue 关闭率，架构治理有效。
*   **垂直深耕期**：**LobsterAI**、**EasyClaw**。社区互动较少，主要依靠核心团队推进，产品功能闭环完善，属于“小而美”或内部驱动型。
*   **维护/停滞期**：**ZeptoClaw**、**TinyClaw**。仅有依赖更新或少量社区贡献，核心功能变动小。

## 7. 值得关注的趋势信号

1.  **“静默失败”成为体验杀手**：
    多个项目的 Top Issue 均涉及 Agent 在预算耗尽、长上下文处理或工具调用失败时“无响应”或“静默丢弃”。开发者需重视**可观测性**，为 Agent 的“沉默”提供明确的错误回执（参考 NanoClaw #2759）。

2.  **从“对话”转向“自动化任务”**：
    **IronClaw** 的 Engine V2 里程碑、**NullClaw** 的 Cron 引擎、**OpenClaw** 的子代理编排，均预示着 AI 助手正在从“聊天机器人”向“自主执行任务的 Agent”转型，**任务调度**与**生命周期管理**将成为下一阶段的技术竞争高地。

3.  **安全合规倒逼架构升级**：
    **PicoClaw** 的批量安全漏洞与 **NanoClaw** 的凭证代理争议，揭示了随着 Agent 权限扩大（如文件读写、执行 Shell），传统的安全边界已失效。未来基于 **WASM (Zeroclaw)** 或 **微 VM (Hermes CubeSandbox)** 的沙箱隔离架构将成为企业级项目的标配。

4.  **桌面端稳定性瓶颈**：
    **Hermes** 与 **CoPaw** 均报告了严重的桌面端崩溃或冻结问题。这表明将 Web 端 Agent 迁移至桌面环境时，资源管理（内存、进程守护）仍是巨大挑战，单纯依靠 Web 技术栈封装可能不足以支撑高负载的本地 Agent 运行。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-17)

## 1. 今日速览
NanoBot 项目今日保持**高活跃度**，开发重心集中在**稳定性修复**与**用户体验优化**。过去24小时内共有 24 个 PR 更新（其中 14 个已合并/关闭）和 10 个 Issue 更新（5 个新开，5 个关闭）。项目虽然没有发布新版本，但合并了多项关键修复，涉及安装器兼容性、流式响应稳定性及上下文管理逻辑，显示出维护团队正在积极为新版本积蓄代码质量。同时，社区对“Dream”机制的记忆注入行为及新手配置体验表现出较高关注。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 14 个 PR 合并或关闭，显著提升了系统的健壮性和兼容性：

*   **安装与部署优化**：修复了 macOS 上 PEP 668 引起的安装失败问题 ([PR #4368](https://github.com/HKUDS/nanobot/pull/4368))，并统一了文档中 curl 安装脚本的命令模式 ([PR #4365](https://github.com/HKUDS/nanobot/pull/4365))。
*   **核心功能修复**：修复了 OpenAI 兼容 API 空响应重试导致用户消息重复记录的 Bug ([PR #4358](https://github.com/HKUDS/nanobot/pull/4358))，并验证修复了流式超时配置导致的崩溃问题 ([PR #4363](https://github.com/HKSDS/nanobot/pull/4363))。
*   **上下文与记忆**：优化了 Recent History 的摘要截断逻辑，从字符数限制改为 Token 限制，避免长上下文溢出 ([PR #4352](https://github.com/HKUDS/nanobot/pull/4352))；默认开启了空闲自动压缩功能，以优化长对话性能 ([PR #4370](https://github.com/HKUDS/nanobot/pull/4370))。
*   **模型适配**：新增了对 Kimi K2.7 模型 "thinking" 模式的支持 ([PR #4361](https://github.com/HKUDS/nanobot/pull/4361))。
*   **WebUI 增强**：合并了 WebUI 自动化管理视图的功能，提升了前端管理能力 ([PR #4330](https://github.com/HKUDS/nanobot/pull/4330))。

## 4. 社区热点
今日讨论最活跃的话题集中在配置体验与记忆机制：

*   **[Issue #4360](https://github.com/HKUDS/nanobot/issues/4360)**: 关于 Debian 13 环境下安装器报错的讨论热度最高（9 条评论），反映了用户在特定环境下的部署痛点，该问题现已关闭。
*   **[Issue #4242](https://github.com/HKUDS/nanobot/issues/4242)**: 关于 `dream.enabled=false` 时仍注入历史记录的讨论继续发酵。用户对 "Dream" 机制与 "Recent History" 的交互逻辑存在困惑，认为配置预期与实际行为不符。
*   **[Issue #4362](https://github.com/HKUDS/nanobot/issues/4362)**: 社区贡献了 MetaVision AI 的 A2A/MCP 集成，展示了项目生态在 Agent 互操作性方面的扩展。

## 5. Bug 与稳定性
今日报告并处理了多个关键 Bug，整体稳定性有所提升：

*   **已修复 (High)**:
    *   **API 空响应重试导致消息重复**: 严重的数据一致性问题，现已在 `process_direct` 层修复 ([Issue #4079](https://github.com/HKUDS/nanobot/issues/4079))。
    *   **流式超时配置崩溃**: 无效的环境变量 `NANOBOT_STREAM_IDLE_TIMEOUT_S` 曾导致系统崩溃，现已加入校验与兜底逻辑 ([Issue #4065](https://github.com/HKUDS/nanobot/issues/4065))。
    *   **本地模型代理问题**: 识别并修复了主机配置代理后导致本地模型服务器（Ollama 等）无法访问的问题 ([Issue #4366](https://github.com/HKUDS/nanobot/issues/4366))。

*   **待处理 (Medium)**:
    *   **工作区安全策略阻断 Git 操作**: [Issue #4375](https://github.com/HKUDS/nanobot/issues/4375) 报告在子目录执行 Git 命令被误拦截，暂无修复 PR。
    *   **工作区文件读写不对称**: [Issue #4374](https://github.com/HKUDS/nanobot/issues/4374) 指出 `SOUL.md` 等文件从项目读取却写入默认工作区，导致配置丢失风险。

## 6. 功能请求与路线图信号
用户对自动化与易用性提出了明确需求：

*   **自动化调度增强**: [Issue #4378](https://github.com/HKUDS/nanobot/issues/4378) 请求支持 Cron 级别的模型/预设切换，反映了用户对动态 Agent 行为的需求。
*   **新手引导优化**: [Issue #4376](https://github.com/HKUDS/nanobot/issues/4376) 指出当前 `--wizard` 模式对非技术用户不够友好，请求更人性化的初始化向导。这与近期安装器的修复相结合，表明降低入门门槛是下一步优化的重点。

## 7. 用户反馈摘要
*   **痛点**: 用户在使用 `nanobot onboard --wizard` 时感到困惑，认为需要过多的技术背景知识 ([Issue #4376](https://github.com/HKUDS/nanobot/issues/4376))。
*   **场景**: 有用户尝试在 Docker 容器中部署时遇到 Shell 兼容性问题 ([Issue #4360](https://github.com/HKUDS/nanobot/issues/4360))。
*   **反馈**: 针对上下文管理，用户希望能更精细地控制历史记录注入行为，特别是禁用 Dream 后的行为逻辑 ([Issue #4242](https://github.com/HKUDS/nanobot/issues/4242))。

## 8. 待处理积压
以下重要 Issue/PR 需维护者关注：

*   **[PR #4367](https://github.com/HKUDS/nanobot/pull/4367)**: 针对本地模型代理问题的修复，虽然相关 Issue 已关闭，但该 PR 仍处于 Open 状态，建议尽快合并以彻底解决网络层问题。
*   **[PR #4356](https://github.com/HKUDS/nanobot/pull/4356)**: Anthropic API tool ID 清理的修复，对多工具调用场景至关重要。
*   **[Issue #4375](https://github.com/HKUDS/nanobot/issues/4375)**: Git 操作被安全策略阻断的问题目前尚无 PR 跟进，可能影响用户的版本控制工作流。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-17)

## 1. 今日速览
Zeroclaw 项目今日保持极高的社区活跃度，Issue 更新达 50 条，PR 动态 50 条，显示出项目正处于功能迭代与缺陷修复的密集期。然而，PR 合并/关闭率极低（仅 3 条），待合并 PR 积压严重（47 条），表明代码审查或 CI 流程存在瓶颈。社区焦点集中在 v0.8.x 版本的稳定性修复、文档缺失问题以及 Web/Gateway 架构优化的 RFC 讨论上。今日无新版本发布。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目整体代码合并进度缓慢，主要进展集中在关键问题的修复提交和架构设计确认。

*   **文档与配置修复**：关闭了 PR [#7751](https://github.com/zeroclaw-labs/zeroclaw/pull/7751)，修复了构建过程中的 Rustdoc 警告；关闭了 Issue [#7758](https://github.com/zeroclaw-labs/zeroclaw/issues/7758)（文档质量问题），尽管引发了对文档可用性的激烈讨论。
*   **功能增强落地**：Issue [#6807](https://github.com/zeroclaw-labs/zeroclaw/issues/6807)（Telegram 自定义 API 端点）和 Issue [#6150](https://github.com/zeroclaw-labs/zeroclaw/issues/6150)（Telegram/Discord 快速清除记忆命令）已关闭，相关功能已合入主干。
*   **关键修复推进**：针对 Windows Shell 编码问题的 Issue [#6859](https://github.com/zeroclaw-labs/zeroclaw/issues/6859) 和 Cron 会话隔离问题的 Issue [#6648](https://github.com/zeroclaw-labs/zeroclaw/issues/6648) 已关闭，提升了跨平台兼容性。

## 4. 社区热点
*   **RFC: Work Lanes 与自动化治理 ([#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808))**
    *   **评论数：11**
    *   **分析**：该项目核心贡献者正在讨论引入“Work Lanes”看板自动化机制，旨在减轻维护者手动管理 Issue 的负担。这标志着项目正从个人/小团队维护向更规范的社区治理转型。
*   **文档质量争议 ([#7758](https://github.com/zeroclaw-labs/zeroclaw/issues/7758))**
    *   **评论数：2**（但反映强烈）
    *   **分析**：用户直言“代码再好，文档烂也没用”，指出 Quickstart 流程中的配置语法晦涩难懂。这反映了项目技术架构虽先进，但用户上手门槛依然过高，文档建设滞后于代码开发。
*   **Gateway WebSocket 生命周期解耦 ([#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759))**
    *   **评论数：2**
    *   **分析**：提出将 Agent 执行周期与 WebSocket 连接生命周期解耦，允许断线重连后恢复任务。这是提升 AI Agent 交互鲁棒性的关键架构改进，受到高度关注。

## 5. Bug 与稳定性
今日报告了多个严重影响使用的 Bug，其中包含严重的回归问题：

*   **P1 - 紧急回归：预构建二进制文件缺失 Slack/Discord 特性 ([#7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787))**
    *   **严重性**：S1 (Workflow blocked)
    *   **详情**：v0.8.0 官方预编译版本未包含 Slack/Discord 功能特性，导致配置正确也无法使用。需回退至 v0.7.5 或重新编译。
    *   **状态**：已确认，等待修复。
*   **P1 - 工具调用受阻：Anthropic/OpenAI 模型原生工具不可用 ([#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756))**
    *   **严重性**：S1
    *   **详情**：MCP 服务器注册的工具在特定模型（如 Anthropic）调用时未生效，严重阻碍 Agent 功能。
    *   **状态**：已确认 (Accepted)。
*   **P1 - 会话阻塞：Anthropic 历史消息格式错误 ([#7804](https://github.com/zeroclaw-labs/zeroclaw/issues/7804))**
    *   **严重性**：S1
    *   **详情**：长会话或恢复会话时，历史记录可能发送非交替角色的消息给 Anthropic API，导致 400 错误。
*   **P2 - 无限循环：Shell 工具重复请求批准 ([#7820](https://github.com/zeroclaw-labs/zeroclaw/issues/7820))**
    *   **详情**：本地 Provider 在执行无害的 `pwd` 命令后陷入无限批准循环，严重影响用户体验。

## 6. 功能请求与路线图信号
*   **WASM 插件生命周期钩子 ([#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822))**：提议支持 WASM 插件订阅 Agent 生命周期事件（如 Turn Complete），这将大幅增强插件系统的扩展性。
*   **企业微信主动消息支持 ([#7824](https://github.com/zeroclaw-labs/zeroclaw/issues/7824))**：请求支持通过命令行主动发送消息和媒体文件，扩展了 Channel 层的主动交互能力。
*   **CI 流水线加固 ([#7675](https://github.com/zeroclaw-labs/zeroclaw/issues/7675))**：提议增加供应链扫描和 SBOM 生成，响应了开源软件供应链安全趋势。

## 7. 用户反馈摘要
*   **配置体验痛点**：用户反馈 Schema V3 配置语法复杂，且文档更新滞后，导致即使是经验丰富的开发者也难以编写正确的配置文件 ([#7758](https://github.com/zeroclaw-labs/zeroclaw/issues/7758))。
*   **模型兼容性**：用户在使用 GLM-5.1 等非主流模型时，遇到“思维链”内容泄露到输出中的问题 ([#6643](https://github.com/zeroclaw-labs/zeroclaw/issues/6643))，反映了对兼容性测试覆盖的渴望。
*   **CLI 交互细节**：CLI 中退格键按字节删除而非按字符删除，严重影响中日韩用户输入体验 ([#6995](https://github.com/zeroclaw-labs/zeroclaw/issues/6995))。

## 8. 待处理积压
*   **PR 积压严重**：目前有 **47 个 PR 处于 Open 状态**，仅有 3 个 PR 更新为 Closed/Merged。大量功能性 PR（如 ARM64 Docker 支持 [#5187](https://github.com/zeroclaw-labs/zeroclaw/pull/5187)）长期未合并，建议维护者关注 Review 进度。
*   **长期 Issue 跟踪**：
    *   [#5266](https://github.com/zeroclaw-labs/zeroclaw/issues/5266)：非默认端口启动 Gateway 时不显示配对码的问题（P1），自 4 月提交以来仍未解决，影响多实例部署体验。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-17)

## 1. 今日速览
Hermes Agent 今日处于高负荷运转状态，社区反馈极其活跃。过去24小时内新增与活跃 Issue 达 46 条，但仅关闭 4 条，且 PR 合并率极低（50 条更新中仅 1 条合并），显示出项目面临较大的维护压力或正处于版本冻结/重构期。社区焦点集中在多租户架构重构、Desktop 桌面端稳定性以及多平台网关的兼容性问题上。目前仍有 49 个 PR 处于待合并状态，需关注积压处理速度。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
尽管今日代码合并量极少，但社区提交的修复 PR 质量较高，主要集中在以下领域：

*   **关键数据安全修复**：针对 Curator 回滚功能导致最旧快照被误删的严重 Bug，社区迅速响应并提交了 3 个修复 PR（[#47615](https://github.com/NousResearch/hermes-agent/pull/47615)、[#47617](https://github.com/NousResearch/hermes-agent/pull/47617)、[#47619](https://github.com/NousResearch/hermes-agent/pull/47619)），目前正处于评审中。
*   **安全与沙箱增强**：
    *   PR [#47490](https://github.com/NousResearch/hermes-agent/pull/47490) 提议对 Docker 安装目录进行写保护，防止运行时自我篡改，提升生产环境安全性。
    *   PR [#20784](https://github.com/NousResearch/hermes-agent/pull/20784) 旨在限制浏览器控制台的 JS 执行权限，修复潜在的安全漏洞。
    *   PR [#47614](https://github.com/NousResearch/hermes-agent/pull/47614) 新增了 CubeSandbox 后端，为终端代码执行提供更强的隔离支持。
*   **网关与集成修复**：
    *   Telegram 平台修复了 Clarify 提示的文本捕获问题（[PR #47613](https://github.com/NousResearch/hermes-agent/pull/47613)）。
    *   邮件网关新增 Outlook OAuth 支持（[PR #47620](https://github.com/NousResearch/hermes-agent/pull/47620)）。
    *   日志系统优化，将 MCP 发现失败等静默错误提升为 WARNING 级别（[PR #47623](https://github.com/NousResearch/hermes-agent/pull/47623)）。

## 4. 社区热点
今日讨论最热烈的话题涉及核心架构限制与平台兼容性：

*   **多租户架构缺陷 ([Issue #34352](https://github.com/NousResearch/hermes-agent/Issue/34352))**：评论数达 8 条。社区指出当前 Memory 操作完全绕过了 Hook 系统，导致在核心不 Fork 的情况下无法实现租户隔离。作者提出 "Multiplayer agentic AI" 是未来方向，该讨论直指 Hermes 的内核设计瓶颈。
*   **Telegram MarkdownV2 转义问题 ([Issue #6388](https://github.com/NousResearch/hermes-agent/Issue/6388))**：评论数 6 条。长期存在的 MarkdownV2 转义导致列表渲染失败问题再次引发关注，影响了 Telegram 机器人的用户体验。
*   **Tool Calling 流水线损坏 ([Issue #6841](https://github.com/NousResearch/hermes-agent/Issue/6841))**：评论数 2 条但优先级为 P1。Hermes 间歇性生成错误的工具名和 JSON 参数，导致工具调用失败，涉及核心验证逻辑，需引起高度重视。

## 5. Bug 与稳定性
今日报告了多个影响体验的 Bug，按严重程度排序如下：

### 严重 (P1/Critical)
*   **Desktop 端崩溃 (视觉模型)**：[Issue #47609](https://github.com/NousResearch/hermes-agent/Issue/47609)。配置专用视觉模型后，发送图片导致桌面端直接崩溃（Error Boundary）。
*   **Curator 回滚删除快照**：[Issue #47612](https://github.com/NousResearch/hermes-agent/Issue/47612)。回滚至最旧快照时失败且该快照被永久删除。**已有修复 PR**。
*   **macOS 进程执行 Segfault**：[Issue #46789](https://github.com/NousResearch/hermes-agent/Issue/46789) [CLOSED]。Desktop GUI 在 macOS 上执行 terminal/read_file 等工具时触发段错误（Exit code -11），CLI 端正常。该 Issue 已被关闭，可能已修复或为重复 Issue。

### 高危 (P2)
*   **MCP 配置静默失败**：[Issue #31246](https://github.com/NousResearch/hermes-agent/Issue/31246)。缺少 SDK 或连接失败时仅在 DEBUG 级别记录，用户无法感知配置无效。**已有修复 PR [#47623](https://github.com/NousResearch/hermes-agent/pull/47623)**。
*   **OpenRouter 限流降级失效**：[Issue #46856](https://github.com/NousResearch/hermes-agent/Issue/46856)。当 Provider 返回无状态码错误时，系统误判为非限流，导致每次请求都尝试重置主运行时。
*   **企业微信 HTML 文件发送失败**：[Issue #29582](https://github.com/NousResearch/hermes-agent/Issue/29582)。媒体扩展名校验白名单过严，导致 HTML 文件无法通过网关发送。

### 中等 (P3)
*   **Desktop 第三方模型读取失败**：[Issue #47327](https://github.com/NousResearch/hermes-agent/Issue/47327)。

## 6. 功能请求与路线图信号
*   **多网关连接支持**：[Issue #45779](https://github.com/NousResearch/hermes-agent/Issue/45779) 建议桌面端支持同时连接多个 Gateway（本地/VPS 等），反映出高级用户的多实例管理需求。
*   **两阶段上下文管理**：[Issue #513](https://github.com/NousResearch/hermes-agent/Issue/513) 提议引入类似 Kilocode 的机制，在压缩前先修剪工具输出，以降低成本并提升效果。
*   **CubeSandbox 终端后端**：[PR #47614](https://github.com/NousResearch/hermes-agent/pull/47614) 引入基于微 VM 的沙箱环境，预示着项目正在加强代码执行的安全性隔离能力。

## 7. 用户反馈摘要
*   **Desktop 端稳定性堪忧**：多个 Issue（#47609, #46789, #41737）均指向桌面端在特定操作（视觉模型、代码执行、更新安装）下的崩溃或卡死，用户对桌面端的信心似乎低于 CLI。
*   **平台适配细节问题**：Telegram 用户对 Markdown 渲染问题（#6388）反响强烈；企业微信和 Email 网关均报告了文件传输或标题设置的硬编码限制。
*   **配置排查困难**：用户抱怨默认日志级别下，MCP 连接失败等关键错误被静默吞没（#31246），增加了运维难度。

## 8. 待处理积压
*   **PR 积压严重**：当前有 **49 个 PR** 处于 Open 状态，且今日仅合并 1 个。其中包括安全相关的浏览器控制台限制 PR [#20784](https://github.com/NousResearch/hermes-agent/pull/20784)（已开启 40+ 天）和关键的数据安全修复，建议维护者优先进行 Code Review。
*   **长期未解 Issue**：Telegram MarkdownV2 渲染问题（[Issue #6388](https://github.com/NousResearch/hermes-agent/Issue/6388)）已持续多月，今日仍有活跃讨论，需优先排期修复。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-17)

## 1. 今日速览
PicoClaw 项目今日保持**高活跃度**，虽然周末刚过，但开发节奏紧凑。项目发布了最新的 `nightly` 构建版（v0.3.0 前瞻），并合并了 **13 个 Pull Requests**，显示出项目正处于代码整理与功能完善阶段。值得注意的是，今日社区贡献者提交了大量与**安全性**相关的 Issue（涉及 SSRF、权限绕过等），这表明项目正经历一轮深度的安全审计。总体而言，项目在推进 v0.3.0 版本的同时，正在积极修补稳定性与扩展性问题。

## 2. 版本发布
- **版本号**: `nightly` (Nightly Build)
- **Tag**: `v0.3.0-nightly.20260617.a16a1e15`
- **说明**: 这是一个自动化构建版本，包含最新的主分支代码，可能存在不稳定性。
- **变更日志**: [v0.3.0...main](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)
- **风险提示**: Nightly 版本仅供测试，不建议在生产环境直接使用，需关注今日合并的多个修复 PR 带来的潜在影响。

## 3. 项目进展
今日共有 **13 个 PR 被合并/关闭**，主要推进了以下方面：

- **架构扩展性增强**: PR [#3120](https://github.com/sipeed/picoclaw/pull/3120) 合并，引入了 `RegisterChannelSettings` hook，允许第三方模块注册 Channel 配置。这意味着 PicoClaw 正在降低二次开发门槛，支持“Out-of-tree”插件化开发。
- **稳定性修复**: PR [#3132](https://github.com/sipeed/picoclaw/pull/3132) 为核心路径的 goroutines 增加了 panic 恢复机制，防止单个协程崩溃导致整个进程退出，显著提升了 Agent 运行时的鲁棒性。
- **通信适配器修复**:
    - Telegram: PR [#3135](https://github.com/sipeed/picoclaw/pull/3135) 修复了 Telegram 论坛模式下回复串楼的问题。
    - Web UI: PR [#2990](https://github.com/sipeed/picoclaw/pull/2990) 修复了会话历史只能显示最后一条消息的 Bug。
- **配置与工具**: PR [#3137](https://github.com/sipeed/picoclaw/pull/3137) 允许配置远程 Cron 命令，增强了远程管理的灵活性。

## 4. 社区热点
今日讨论最密集的 Issue 是 **[#2404 [Feature] Add in config to send streaming HTTP request**](https://github.com/sipeed/picoclaw/Issue/2404)。
- **热度**: 👍 1, 评论 12 条。
- **诉求**: 用户希望在后端配置中支持 `streaming: true`，以便像 Python OpenAI 客户端那样直接流式传输 HTTP 请求。
- **分析**: 该 Issue 自 4 月提出以来持续活跃，反映了用户对底层 LLM 交互控制粒度的精细化需求。目前标记为 `stale`，需要维护者评估是否纳入近期路线图。

此外，**安全审计**成为今日特殊的“热点”。用户 @YLChen-007 提交了 **12 个** 安全相关的 Issue（如 SSRF 防护绕过、权限提升等），虽然单个 Issue 评论较少，但集体爆发显示了社区对 PicoClaw 安全机制的高度关注。

## 5. Bug 与稳定性
今日报告并处理的 Bug 主要集中在**运行稳定性**与**特定环境适配**：

- **高/严重风险 - 安全漏洞 (待处理)**:
    - 大量涉及 SSRF、权限绕过的 Issue 被标记为 `stale`，如 [#3078 (SSRF via Proxy)](https://github.com/sipeed/picoclaw/Issue/3078) 和 [#3072 (CSRF in Password Setup)](https://github.com/sipeed/picoclaw/Issue/3072)。目前尚未看到对应的修复 PR，需紧急关注。
- **中等 - 运行崩溃修复**:
    - PR [#3132](https://github.com/sipeed/picoclaw/pull/3132) 已合并，解决了 Goroutine panic 导致进程崩溃的问题。
    - Issue [#3134](https://github.com/sipeed/picoclaw/Issue/3134) 报告了 `su -c` 命令执行失败并报错 `No daemon is currently running!`，该 Issue 已关闭。
- **低/功能性缺陷**:
    - PR [#2988](https://github.com/sipeed/picoclaw/pull/2988) 修复了 `/context` 命令显示的 Token 压缩阈值不随配置变化的问题。
    - PR [#3116](https://github.com/sipeed/picoclaw/pull/3116) (待合并) 修复了 Pico `turn.done` 生命周期信号问题，防止请求 ID 丢失。

## 6. 功能请求与路线图信号
- **流式传输控制**: Issue [#2404](https://github.com/sipeed/picoclaw/Issue/2404) 的持续讨论表明，流式配置将是下一阶段功能完善的重点之一。
- **插件化架构**: PR [#3120](https://github.com/sipeed/picoclaw/pull/3120) 的合并释放了强烈信号——PicoClaw 正致力于打造更开放的生态，允许开发者在不 Fork 源码的情况下扩展通信渠道，这符合“个人 AI 助手”多样化的接入需求。
- **远程管理**: PR [#3137](https://github.com/sipeed/picoclaw/pull/3137) 暗示项目正在增强对远程触发和管理 Agent 任务的支持。

## 7. 用户反馈摘要
- **痛点**: 
    - 部分用户在使用 Shell 命令执行（如 `su -c`）时遇到环境兼容性问题 (#3134)。
    - Telegram 用户在 Forum 模式下体验不佳，机器人回复会跳回主群 (#3110, #3135)，该问题今日已修复。
- **场景**: 
    - 开发者尝试将 PicoClaw 作为网关使用，对底层 HTTP 流式传输有强需求 (#2404)。
    - 安全研究人员发现项目在处理代理、Webhook 签名验证、目录权限隔离等方面存在防护短板（安全 Issue 批量报告）。

## 8. 待处理积压
- **安全风险积压**: 由 @YLChen-007 提交的 12 个安全 Issue（例如 [#3075](https://github.com/sipeed/picoclaw/Issue/3075) 本地 Skills 加载风险、[#3078](https://github.com/sipeed/picoclaw/Issue/3078) SSRF 绕过）目前均处于 Open 且 stale 状态。考虑到其严重性，**强烈建议维护者优先进行 Triage（分流处理）**。
- **待合并 PR**: 
    - PR [#3116](https://github.com/sipeed/picoclaw/pull/3116) (turn.done 生命周期) 和 PR [#3136](https://github.com/sipeed/picoclaw/pull/3136) (Gemini API 适配) 目前处于 Open 状态，建议尽快 Review 合并以修复已知缺陷。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-17)

## 1. 今日速览
NanoClaw 项目今日保持中度活跃，主要集中在稳定性修复与文档维护。过去24小时内，社区提交了 5 条新 Issue 并关闭了 1 条关键的用户体验问题，同时有 4 个 PR 成功合并。虽然未发布新版本，但核心开发者重点解决了 LLM 预算耗尽时的静默失败问题，显著改善了交互体验。此外，关于 Credential Proxy 的合规性讨论与外部凭证支持的功能请求，显示出项目正在探索更灵活的部署模式与合规边界。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日共有 4 个 PR 合并，项目在稳定性和运维便利性上取得了实质性进展：

*   **核心交互修复**：PR #2759 已合并，修复了当 LLM token/预算耗尽时 Agent 静默丢弃错误的问题。现在系统会正确反馈预算耗尽状态，避免了用户等待无响应的尴尬局面，显著提升了用户体验。
    *   链接: [nanocoai/nanoclaw PR #2759](https://github.com/nanocoai/nanoclaw/pull/2759)
*   **网络自愈能力**：PR #2782 合并，修复了 Tailscale-Docker 路由服务。此前 Tailscale 在会话中刷新 IP 规则会导致路由静默失效，新版本引入了自愈机制，增强了网络层的鲁棒性。
    *   链接: [nanocoai/nanoclaw PR #2782](https://github.com/nanocoai/nanoclaw/pull/2782)
*   **文档与变更日志**：PR #2775 合并，澄清了 OneCLI 网关升级机制，明确了现有安装升级时的注意事项，避免了误导性提示。PR #2069 (Webchat v1) 已关闭，可能意味着该功能分支被拒绝或重构。

## 4. 社区热点
今日讨论主要集中在安全合规与集成体验优化：

*   **安全合规争议**：Issue #1669 再次活跃，作者质疑当前的 Credential Proxy 实现可能违反 Anthropic 的 OAuth 反向代理禁令，并可能触发反欺诈机制。这是社区对项目合规性的深层担忧。
    *   链接: [nanocoai/nanoclaw Issue #1669](https://github.com/nanocoai/nanoclaw/issues/1669)
*   **集成体验瑕疵**：Issue #2779 报告了 Slack 集成中的 URL 解析问题，URL 路径中的 `@handle` 被错误识别为提及，导致链接断裂。这是影响日常使用的体验型 Bug。
    *   链接: [nanocoai/nanoclaw Issue #2779](https://github.com/nanocoai/nanoclaw/issues/2779)

## 5. Bug 与稳定性
今日报告了 3 个功能性 Bug，按严重程度排序如下：

1.  **[中] 容器运行时监听不全 (Issue #2784)**：
    *   问题：`container-runner` 的代码变更检查仅监听 `index.ts`，导致 `ipc-mcp-stdio.ts` 的变更无法触发热更新，影响开发与调试效率。
    *   状态：[OPEN]，暂无修复 PR。
    *   链接: [nanocoai/nanoclaw Issue #2784](https://github.com/nanocoai/nanoclaw/issues/2784)
2.  **[中] Slack 链接解析错误 (Issue #2779)**：
    *   问题：URL 中的 `@` 符号触发错误的 Mention 逻辑，导致链接损坏。
    *   状态：[OPEN]，暂无修复 PR。
    *   链接: [nanocoai/nanoclaw Issue #2779](https://github.com/nanocoai/nanoclaw/issues/2779)
3.  **[低] 文档滞后 (Issue #2783)**：
    *   问题：安全文档仍描述旧版信任模型，且引用了不存在的技能。
    *   状态：[OPEN]，暂无修复 PR。
    *   链接: [nanocoai/nanoclaw Issue #2783](https://github.com/nanocoai/nanoclaw/issues/2783)

## 6. 功能请求与路线图信号
今日出现两个重要的功能性动议，指向更灵活的企业级部署需求：

*   **原生凭证支持 (Issue #2781)**：作者请求支持 `NANOCLAW_NATIVE_CREDENTIALS` 环境变量，以绕过 OneCLI 直接使用外部注入的凭证。这表明下游打包商需要在受限或定制化环境中部署 NanoClaw，减少对默认网关的依赖。
    *   链接: [nanocoai/nanoclaw Issue #2781](https://github.com/nanocoai/nanoclaw/issues/2781)
*   **托管机群升级控制 (PR #2780)**：待合并的 PR 允许通过环境变量禁用启动时的升级检查，适配不可变镜像架构。这反映出 NanoClaw 正在被更多地应用于生产级托管环境。
    *   链接: [nanocoai/nanoclaw PR #2780](https://github.com/nanocoai/nanoclaw/pull/2780)

## 7. 用户反馈摘要
*   **痛点：静默失败**：用户对 Agent 在预算耗尽时“没有任何回复”感到困惑（Issue #2751），这一痛点已在今日修复。
*   **痛点：合规焦虑**：企业级用户对 OAuth 代理可能导致的账号封禁风险表示担忧（Issue #1669），急需官方明确的技术边界说明。
*   **场景：沙箱部署**：用户希望在无法连接 OneCLI 的沙箱环境中使用 NanoClaw（Issue #2781），显示项目正被应用到更复杂的隔离网络环境中。

## 8. 待处理积压
*   **Issue #1669 (安全合规)**：该 Issue 创建于 4 月，今日再次活跃。关于 Credential Proxy 是否违规的讨论目前仍停留在提问阶段，缺乏官方定论，建议维护者尽快给出技术评估，以免阻碍企业用户采纳。
    *   链接: [nanocoai/nanoclaw Issue #1669](https://github.com/nanocoai/nanoclaw/issues/1669)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-06-17)

## 1. 今日速览
NullClaw 项目今日维持较高的开发活跃度，虽然未发布新版本，但代码提交主要集中在关键 Bug 修复与企业级功能的增强上。过去 24 小时内共有 3 个 PR 活跃更新（均为待合并状态）以及 2 个 Issue 进行了讨论。开发者针对 MS Teams 集成和调度器权限问题提交了针对性的修复代码，显示出项目在多平台兼容性和安全性方面的持续迭代。整体来看，项目正处于功能修补与下一版本准备的阶段。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日虽无合并完成的 PR，但有 3 个重要的修复与功能 PR 处于活跃待合并状态，直接回应了社区反馈的问题：

*   **调度器权限修复 ([PR #959](https://github.com/nullclaw/nullclaw/pull/959))**：针对 Issue #839 中反馈的调度器无权访问问题，提交了修复代码。该 PR 实现了在 `/pair` 成功后持久化 Bearer Token 的功能，并使用 ChaCha20-Poly1305 加密存储，确保 Cron/Schedule 工具能够安全地获取访问权限。
*   **MS Teams 集成修复 ([PR #958](https://github.com/nullclaw/nullclaw/pull/958))**：修复了 Bot Framework 连接器令牌验证失败导致消息被拒绝（403 错误）的问题。主要修正了对 `serviceUrl` 大小写处理的兼容性，并提高了 JWKS 的获取上限，显著改善了 Teams 平台的集成稳定性。
*   **Cron 功能增强 ([PR #783](https://github.com/nullclaw/nullclaw/pull/783))**：这是一个长期的大型更新，今日再次更新。它引入了基于数据库的 Cron 子代理引擎、运行历史记录、JSON CLI 输出以及安全加固功能。这标志着项目正在向支持更复杂的自动化任务编排迈进。

## 4. 社区热点
今日社区讨论焦点主要集中在本地模型集成的体验上：

*   **[Issue #952](https://github.com/nullclaw/nullclaw/issues/952) 本地模型输出不完整**：该 Issue 引起了较多关注（2 条评论）。用户报告在使用 Ollama 运行 Gemma 模型时，Agent 回答出现截断现象。这反映了用户对于本地 LLM 与 NullClaw 深度集成的强烈需求，以及当前在流式响应处理或上下文窗口管理上可能存在的适配问题。

## 5. Bug 与稳定性
本日报告的 Bug 主要涉及集成与权限管理，严重程度中等，目前均有相关修复进展：

*   **[已定位-高优] 调度器权限缺失 ([Issue #839](https://github.com/nullclaw/nullclaw/issues/839))**：用户反馈调度器无法访问特定资源。目前已有修复 PR [#959](https://github.com/nullclaw/nullclaw/pull/959) 提交，通过 Token 持久化方案解决，等待合并。
*   **[待处理-中] Ollama 本地模型回答截断 ([Issue #952](https://github.com/nullclaw/nullclaw/issues/952))**：用户在使用本地模型时遭遇输出不完整的问题。目前尚未有官方确认的修复 PR，可能涉及对 Ollama API 响应流的处理逻辑，需维护者进一步排查。

## 6. 功能请求与路线图信号
*   **自动化任务编排**：[PR #783](https://github.com/nullclaw/nullclaw/pull/783) 的持续更新表明，引入持久化的 Cron 任务管理和历史记录功能将是 NullClaw 下一个版本的核心亮点。这意味着 NullClaw 正从单纯的对话式助手向具备定时执行能力的自动化 Agent 演进。
*   **企业级安全标准**：[PR #959](https://github.com/nullclaw/nullclaw/pull/959) 中提到的 `SecretStore` 加密机制和严格的文件权限控制（0600），显示出项目正在加强对企业级安全标准的支持，这可能成为未来版本宣传的重要特性。

## 7. 用户反馈摘要
*   **本地模型适配痛点**：用户尝试将 NullClaw 与 Ollama 结合使用，表明"本地部署"是核心用户群体的重要场景。反馈的输出截断问题暗示了项目在处理不同推理后端时的健壮性仍需提升。
*   **权限配置复杂性**：Issue #839 暴露出用户在配置 Scheduler 与主程序配对时存在困难。用户期望的是更无缝的权限流转，而非手动处理复杂的 Token 配置。PR #959 的自动化持久化方案正是对这一痛点的直接回应。

## 8. 待处理积压
*   **Issue #839 需尽快闭环**：该问题已存在两个月之久，目前修复 PR [#959](https://github.com/nullclaw/nullclaw/pull/959) 已经提交。建议维护者优先 Review 并合并该 PR，以解决长期影响用户使用的权限阻塞问题。
*   **PR #783 合并进度**：该功能 PR 涉及大量代码更新，已开启两个月。建议项目方评估其测试覆盖率，尽快合并以解锁新的自动化能力。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-17)

## 1. 今日速览
IronClaw 项目今日保持**高活跃度**，开发重心显著向 "Reborn" 版本的稳定性与用户体验倾斜。过去24小时内共有 50 条 Issue 更新（关闭 18 条）和 50 条 PR 更新（合并/关闭 14 条），显示团队正在高效清理积压问题并推进功能迭代。最关键的进展是 **Engine V2 的 Milestone 0 已完成关闭**，标志着多路径执行架构取得了阶段性胜利。同时，社区与核心开发者在自动化功能的 UX 改进、安全路径校验以及本地开发环境一致性方面展开了深入讨论。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日项目在核心架构和用户体验修复方面取得了实质性进展，主要体现在以下几点：

*   **Engine V2 架构里程碑达成**：核心 Epic Issue [#2721](https://github.com/nearai/ironclaw/issues/2721) 及其子任务（[#2725](https://github.com/nearai/ironclaw/issues/2725), [#2724](https://github.com/nearai/ironclaw/issues/2724), [#2723](https://github.com/nearai/ironclaw/issues/2723)）已全部关闭。这标志着 Engine V2 在优化简单任务开销、强化多路径执行和编排器循环行为方面完成了初步质量验收。
*   **Reborn UI 交互修复**：PR [#4858](https://github.com/nearai/ironclaw/pull/4858) 合并，修复了 Shell 命令在审批对话框和历史记录中不可见的问题，显著提升了操作透明度。
*   **视觉功能增强**：PR [#4902](https://github.com/nearai/ironclaw/pull/4902) 关闭，为 OpenAI 兼容接口引入了内联图片支持，补齐了多模态交互能力的关键短板。

## 4. 社区热点
今日讨论最活跃的话题集中在核心架构演进与自动化功能的可用性细节：

*   **[Issue #2721] Engine V2 质量里程碑**：作为今日评论数最多的 Issue（3 条评论），其关闭代表了社区对重构方向的认可。讨论核心在于如何平衡单一路径的“昂贵”开销与多路径执行复杂度，最终确立了“Milestone 0”的验收标准。
*   **[Issue #4942] Reborn WebUI 工具调用失败隐蔽性**：用户报告工具调用失败时前端无提示，需刷新才能看到错误。这暴露了 SSE 实时推送机制在异常处理上的断点，引发了关于前端状态管理与重试机制的热烈讨论（2 条评论）。
*   **[Issue #4853] Railway 环境下工具活动消失**：在多租户部署环境中，工具执行记录在完成后消失。这指向了可能的状态持久化或 WebSocket 连接问题，对云端托管版本的稳定性提出了挑战。

## 5. Bug 与稳定性
今日报告了多个影响自动化流程和 WebUI 体验的 Bug，部分已有对应修复 PR：

*   **[严重] 自动化流程永久阻塞** ([Issue #4986](https://github.com/nearai/ironclaw/issues/4986))：需要人工审批的定时自动化任务，若审批流程受阻，会导致整个自动化流程永久“卡死”。目前尚无明确修复方案，需引起关注。
*   **[严重] 本地开发 SSO 不匹配导致自动化失败** ([Issue #4992](https://github.com/nearai/ironclaw/issues/4992))：Railway 托管的本地开发实例在触发自动化时，因用户 ID 验证失败导致线程创建失败。
    *   **已修复**：[PR #5003](https://github.com/nearai/ironclaw/pull/5003) 已提交修复方案，旨在恢复“搁浅”的自动化任务并明确失败原因。
*   **[中等] Google Drive 下载限制** ([Issue #4999](https://github.com/nearai/ironclaw/issues/4999))：WASM 沙箱环境下的 Google Drive 文件下载受限于 1MB 内存往返上限，导致大文件提取失败。虽然已有部分修复（PR #4997），但仍需解决大文件支持问题。
*   **[中等] WebUI 状态同步异常**：包括工具调用失败无反馈 ([Issue #4942](https://github.com/nearai/ironclaw/issues/4942)) 和设置页面 Provider 状态误报 ([Issue #4857](https://github.com/nearai/ironclaw/issues/4857)，已关闭)。

## 6. 功能请求与路线图信号
根据新提出的 Issue 和活跃 PR，项目的下一步动向清晰指向“智能化”与“可观测性”：

*   **用户上下文感知**：[PR #5008](https://github.com/nearai/ironclaw/pull/5008) 正在推进“用户画像注入”功能，允许 Agent 自动获取时区、语言环境等信息，无需用户反复提示。这是迈向个性化 AI 助手的关键一步。
*   **API 可观测性增强**：[PR #5010](https://github.com/nearai/ironclaw/pull/5010) 提议在 OpenAI Responses API 中暴露工具调用详情，解决了此前 API 仅返回最终文本、中间过程“黑盒”的问题，对开发者极其友好。
*   **预览部署支持**：[Issue #4881](https://github.com/nearai/ironclaw/issues/4881) 提出了类似 Vercel 的 PR 预览环境需求，旨在加速 Review 流程，显示出项目对工程化效率的重视。

## 7. 用户反馈摘要
从 Issues 的详细描述中，提炼出以下真实痛点：

*   **自动化 Dashboard 易用性差**：用户反馈 Dashboard 上的状态徽章（如 MUTED, SIGNAL）含义不明（[Issue #4981](https://github.com/nearai/ironclaw/issues/4981)），且失败汇总卡片无法点击跳转（[Issue #5004](https://github.com/nearai/ironclaw/issues/5004)），导致“Dashboard 看着热闹，排查问题无从下手”。
*   **WebUI 交互细节粗糙**：新建会话按钮字体过大（[Issue #4972](https://github.com/nearai/ironclaw/issues/4972)）、消息发送者名称重复显示（[Issue #4963](https://github.com/nearai/ironclaw/issues/4963)）等细节问题影响了界面的一致性和专业感。
*   **Skills 管理功能薄弱**：系统内置技能众多，但缺乏搜索和过滤功能，用户难以快速定位（[Issue #5006](https://github.com/nearai/ironclaw/issues/5006)）。

## 8. 待处理积压
以下重要 Issue 或 PR 长期未得到最终处理或响应，建议维护者关注：

*   **[PR #4712] Slack 设置迁移至 WebUI**：此大型重构 PR（涉及 WebUI 配置界面与 Secret 管理）已持续一段时间，需加速 Review 进度以配合 Reborn 的整体体验升级。
*   **[Issue #4918] 自动化日志页面空白**：此前报告的自动化运行日志无条目问题仍未解决，对于调试自动化失败至关重要，目前处于“Waiting for log entries”状态。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-17)

## 1. 今日速览
LobsterAI 今日呈现出**开发活跃度高、社区反馈相对沉寂**的态势。项目核心团队专注于代码合并与功能迭代，单日成功合入/关闭了 5 个 Pull Requests，主要集中在协同办公和 Artifacts 功能的体验优化与缺陷修复。尽管没有新的版本发布，但大量代码的合入预示着下一个版本将显著改善长会话性能与文件预览体验。Issue 方面仅有 1 条历史遗留 Bug 的更新，社区互动较为冷清。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目进展显著，共有 5 个 PR 被合并或关闭，重点解决了 **Cowork（协同）** 模块的性能瓶颈与 **Artifacts（制品）** 的交互体验。

*   **性能与体验大幅优化**：
    *   PR [#2171](https://github.com/netease-youdao/LobsterAI/pull/2171) 解决了长会话中 Rail 导航卡顿的问题，通过避免平滑滚动和 memoize 技术优化了 hover/active 状态更新，显著提升了大数据量下的操作流畅度。
    *   PR [#2170](https://github.com/netease-youdao/LobsterAI/pull/2170) 修正了 Cowork 任务搜索逻辑，将其从仅搜索预加载的最近会话改为搜索后端 SQLite 数据库，解决了用户无法搜索历史任务的痛点。
*   **Artifacts 与分享功能增强**：
    *   PR [#2169](https://github.com/netease-youdao/LobsterAI/pull/2169) 对预览卡片进行了全面重构，统一了暗色模式样式，优化了内置浏览器预览体验，并新增了 "在龙虾浏览器中打开" 的快捷入口。
    *   PR [#2172](https://github.com/netease-youdao/LobsterAI/pull/2172) 修复了因数量上限关闭分享后的恢复逻辑，允许服务端判断并恢复已关闭的分享，提升了功能容错性。
*   **细节修复**：
    *   PR [#2173](https://github.com/netease-youdao/LobsterAI/pull/2173) 修复了 Cowork 中用户消息渲染问题，保留了用户输入的换行符，提升了消息阅读体验。

## 4. 社区热点
今日社区活跃度较低，仅有一条历史 Issue 出现动态。

*   **Issue [#1425](https://github.com/netease-youdao/LobsterAI/issues/1425) [快捷键重复无校验]**
    *   **动态**：该 Issue 创建于 4 月初，今日有新的评论活动（或由 Stale bot 触发），目前状态仍为 Open。
    *   **分析**：用户反馈设置快捷键时缺乏重复性校验，这是一个典型的用户体验盲点。该问题至今未修复，表明团队目前重心在核心功能开发上，对输入校验类 UI 细节的响应速度较慢。

## 5. Bug 与稳定性
今日报告或更新的 Bug 数量较少，主要集中在客户端逻辑层面。

*   **中优先级 | 功能缺陷**：
    *   **快捷键冲突**：Issue [#1425](https://github.com/netease-youdao/LobsterAI/issues/1425) 指出快捷键设置缺乏重复校验，可能导致操作冲突或用户困惑。当前状态：未修复。
*   **已修复 | 功能逻辑**：
    *   **任务搜索失效**：PR [#2170](https://github.com/netease-youdao/LobsterAI/pull/2170) 修复了 Cowork 任务仅能搜索最近会话的问题，现已通过数据库搜索覆盖全量数据。
    *   **长会话卡顿**：PR [#2171](https://github.com/netease-youdao/LobsterAI/pull/2171) 修复了长会话中导航栏卡顿问题，提升了应用稳定性。

## 6. 功能请求与路线图信号
*   **Artifacts 体验深化**：PR [#2169](https://github.com/netease-youdao/LobsterAI/pull/2169) 和 [#2172](https://github.com/netease-youdao/LobsterAI/pull/2172) 的合入表明，**强化内置浏览器能力与完善分享机制**是当前版本迭代的重点方向。项目正试图通过内置浏览器留住用户，减少跳转到外部应用的比例。
*   **数据持久化搜索**：PR [#2170](https://github.com/netease-youdao/LobsterAI/pull/2170) 暗示项目正致力于提升 Cowork 模块的数据检索能力，未来可能会进一步加强本地数据库（SQLite）的利用。

## 7. 用户反馈摘要
从 Issue #1425 的反馈来看，用户对 **客户端基础交互的严谨性** 有一定要求。快捷键设置看似小事，但缺乏校验会直接影响专业用户的效率。这反映出 LobsterAI 在走向功能复杂化的同时，需要同步加强基础 UI 的健壮性测试。

## 8. 待处理积压
*   **重要待合并 PR**：
    *   PR [#1424](https://github.com/netease-youdao/LobsterAI/pull/1424)：修复了定时任务 "停止" 按钮无效且错误返回成功的严重逻辑 Bug。该 PR 自 4 月创建至今未合并，今日有更新但状态仍为 Open。**建议维护者优先审查并合并**，因为该问题会导致后台任务失控，严重影响用户信任度。
*   **长期未解决 Issue**：
    *   Issue [#1425](https://github.com/netease-youdao/LobsterAI/issues/1425)：快捷键校验问题已存在两个月，建议纳入下一阶段的 UI 规范化整改中。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-06-17)

## 1. 今日速览
TinyClaw 项目今日整体活跃度处于**低位运行**状态，未见新版本发布或 Issues 互动。过去 24 小时内唯一的活动亮点集中在代码贡献层面，社区贡献者提交了一项关键的平台兼容性修复。虽然没有新的功能开发或 Issue 反馈，但针对 Windows 原生环境的修复 PR 表明项目正在补齐跨平台支持的短板。整体来看，项目今日处于维护模式，无重大动荡。

## 2. 版本发布
无。

## 3. 项目进展
过去 24 小时内**无合并或关闭的 PR**。项目代码库在今日未发生实质性变更，主分支保持稳定。唯一的进展信号来自待处理的 PR 队列，预示着跨平台能力的潜在提升。

## 4. 社区热点
今日讨论最活跃（也是唯一）的条目为 Pull Request #281。

*   **链接**: [PR #281 fix: Windows cross-platform support in CLI](https://github.com/TinyAGI/tinyagi/pull/281)
*   **分析**: 该 PR 由 @mperkins0155 发起，直击 Windows 用户的痛点。虽然评论数为 0，但其本身的存在揭示了项目在 Windows 原生环境下的可用性问题。作者指出 CLI 在非 WSL 的 Windows 环境下无法运行，这表明社区对“开箱即用”的跨平台体验有强烈诉求，Windows 用户群体对 CLI 工具的稳定性关注度较高。

## 5. Bug 与稳定性
今日无新报告的 Bug（0 Issues），但在 PR 中暴露了严重的平台兼容性问题：

*   **严重程度：高** (影响 Windows 原生用户启动)
    *   **问题描述**: `tinyagi` CLI 无法在原生 Windows（非 WSL）环境下运行，主要原因是 Node.js 的 `import.meta.url` 在 Windows 下返回的路径格式（如 `/C:/Users/...`）与 `path.resolve` 处理方式冲突，导致驱动器号重复，引发 `MODULE_NOT_FOUND` 错误。
    *   **状态**: **已有 Fix PR**。见 [PR #281](https://github.com/TinyAGI/tinyagi/pull/281)，目前状态为 OPEN，等待维护者审核合并。该 PR 一次性修复了三个阻碍 Windows 运行的 Bug。

## 6. 功能请求与路线图信号
今日无新增功能请求 Issues。根据现有 PR 推断：
*   **跨平台支持增强**: [PR #281](https://github.com/TinyAGI/tinyagi/pull/281) 的提交暗示了项目下一阶段优化的重点可能在于消除操作系统层面的差异化 bug，确保 Windows 用户无需依赖 WSL 即可使用核心功能。这可能成为下一个版本发布前的重点工作。

## 7. 用户反馈摘要
由于今日 Issues 更新为 0 且 PR 评论为空，暂无直接的用户对话反馈可供提炼。但从 @mperkins0155 提交的 PR 内容侧面推断：
*   **痛点**: 部分 Windows 用户可能长期面临 CLI 启动失败或路径解析错误的问题。
*   **场景**: 开发者在原生 Windows 环境下进行本地开发或自动化脚本调用时受阻。
*   **满意度**: 目前依赖社区贡献修复核心阻断性 Bug，显示官方对 Windows 平台的原生测试覆盖率可能存在盲区。

## 8. 待处理积压
今日无新增长期未响应 Issue 数据，但存在需即时处理的代码变更：

*   **[需关注] PR #281**: 该 PR 已开启但尚未合并，修复了影响 Windows 用户的关键 Bug。
    *   **建议**: 鉴于该修复解决了 CLI 无法启动的严重问题，建议维护者尽快进行 Code Review 并验证其在 Windows 环境下的有效性，以便尽早合并，提升 Windows 用户群体的体验。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-06-17)

## 1. 今日速览
Moltis 项目今日整体活跃度适中，主要集中在功能性增强与关键 Bug 修复的讨论上。过去 24 小时内，项目新增 2 个功能请求和 1 个关键 Bug 报告，同时维护者迅速关闭了 1 个转录相关的 Bug，显示出对社区反馈的快速响应能力。代码贡献方面，2 个待合并的 PR 正在推进更灵活的上下文注入与外部智能体配置功能。整体而言，项目正处于优化语音交互体验与扩展外部模型支持的关键迭代期。

## 2. 版本发布
无。

## 3. 项目进展
尽管今日无合并的 PR，但现有的待合并 PR 展示了项目在**可扩展性**与**上下文感知**方面的重要进展：
*   **上下文注入增强**：PR #1124 提出为聊天轮次添加 `context_command` 支持，允许动态注入运行时上下文。这将极大提升部署的灵活性，减少手动粘贴上下文的操作成本。
*   **外部智能体支持优化**：PR #1125 引入了对外部智能体的模型和工作量选择支持，进一步完善了多模型生态的集成能力。
*   **Issue 处理高效**：Issue #1128 关于自托管 whisper.cpp 的转录错误已被关闭，说明维护者对核心语音识别模块的问题处理十分及时。

## 4. 社区热点
今日社区讨论焦点主要集中在 Issue #1126：
*   **[Issue #1126](https://github.com/moltis-org/moltis/issues/1126) [Feature]: allow to configure the format of tts output**
    该请求获得了今日最多的评论（2条）。用户 @khimaros 提出希望能自定义 TTS（文本转语音）的输出格式。这反映出社区用户对语音输出质量有更高要求，不再满足于默认配置，而是希望根据具体场景（如播放设备、带宽限制）调整音频格式。这预示着 Moltis 需要在音频处理 Pipeline 上提供更细粒度的 API 或配置接口。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在语音交互的实时性与准确性上，按严重程度排序如下：

*   **[严重] [Issue #1129](https://github.com/moltis-org/moltis/issues/1129) [Bug]: lack of echo cancellation causes agent to retrigger itself in live mode**
    **状态**：Open | **分析**：在实时模式下，缺乏回声消除导致智能体“听到”自己的声音并重新触发逻辑，形成循环。这是语音交互类 AI 的经典问题，严重影响用户体验，属于阻断性 Bug，需优先解决。
*   **[已解决] [Issue #1128](https://github.com/moltis-org/moltis/issues/1128) [Bug]: transcription errors with self-hosted whisper.cpp**
    **状态**：Closed | **分析**：自托管 whisper.cpp 的转录错误已修复，消除了自部署场景下的稳定性障碍。

## 6. 功能请求与路线图信号
结合今日 Issues 与活跃 PR，项目未来的迭代方向呈现出清晰的信号：
*   **精细化配置需求**：用户通过 #1126 (TTS格式) 和 #1127 (RPC超时配置) 表达了对底层参数控制的强烈需求。这表明 Moltis 的用户群体偏向技术型，需要更深度的定制能力。
*   **外部生态集成**：PR #1125 与 Issue #1127 暗示项目正在加强对非内置模型/服务的兼容。
*   **预测**：PR #1125 与 Issue #1127 的诉求高度吻合，预计该 PR 合并后将显著改善外部智能体的调用体验，可能会被优先纳入下一版本规划。

## 7. 用户反馈摘要
从今日的 Issue 内容可以提炼出以下用户画像与痛点：
*   **场景深化**：用户已不满足于基础的对话功能，开始深入使用 "Live Mode"（实时模式），并遇到了回声消除等高级场景问题，说明产品已被用于实际的高频交互场景。
*   **自托管偏好**：连续出现的 whisper.cpp 自托管问题和 TTS 格式配置需求，说明核心用户群倾向于私有化部署，对数据隐私和本地算力利用率有较高关注。
*   **痛点**：实时模式下的音频反馈回路（#1129）是目前最影响使用体验的痛点。

## 8. 待处理积压
目前暂无长期未响应的历史遗留问题，但以下两项活跃工作需维护者关注以防积压：
*   **PR 审核提醒**：PR [#1124](https://github.com/moltis-org/moltis/pull/1124) 与 [#1125](https://github.com/moltis-org/moltis/pull/1125) 均创建于 6 月 15 日，至今已过去 2 天仍处于 Open 状态，建议维护者尽快进行 Code Review 以保持开发 momentum。
*   **关键 Bug 待修复**：Issue [#1129](https://github.com/moltis-org/moltis/issues/1129) 涉及核心交互功能，目前尚无关联 PR 或修复方案，建议作为高优先级处理。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-06-17)

## 1. 今日速览
CoPaw (QwenPaw) 项目今日活跃度极高，Issue 和 PR 更新量均突破 40 条，显示出社区与开发团队的高频互动。项目发布了 **v1.1.12-beta.1** 版本，重点修复了安全隔离与桌面端 CI 问题。社区热点集中在**长上下文导致的进程冻结**以及**macOS 桌面端崩溃**等严重稳定性问题上，所幸相关修复 PR 已提交并在审核中。整体来看，项目正处于快速修复与功能迭代并行阶段，但对长对话场景的稳定性优化需求迫切。

## 2. 版本发布
- **v1.1.12-beta.1**
  - **安全修复**：隔离了每次安装的 Keychain 主密钥，防止潜在的安全风险。
  - **桌面端修复**：加固了 Tauri Windows CI，解决了 crates.io 获取失败的问题。
  - **详情链接**：[v1.1.12-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.12-beta.1)

## 3. 项目进展
今日共有 **25 个 PR 被合并或关闭**，项目在国际化、系统稳定性和用户体验方面取得了显著进展：
- **国际化支持**：合并了越南语界面支持 ([PR #5175](https://github.com/agentscope-ai/QwenPaw/pull/5175))，进一步扩大了用户群体。
- **关键并发问题修复**：合并了 `SafeJSONSession` 的序列化锁修复 ([PR #4277](https://github.com/agentscope-ai/QwenPaw/pull/4277))，解决了并发写入导致的状态覆盖问题。
- **体验优化**：
  - 支持会话列表按标题过滤 ([PR #5178](https://github.com/agentscope-ai/QwenPaw/pull/5178))。
  - 优化了侧边栏会话日期分组逻辑 ([PR #5257](https://github.com/agentscope-ai/QwenPaw/pull/5257))。
  - 修复了 `dream_cron` 配置清除无效的问题 ([PR #5256](https://github.com/agentscope-ai/QwenPaw/pull/5256))。
  - 增加了控制台的可点击链接支持 ([PR #5248](https://github.com/agentscope-ai/QwenPaw/pull/5248))。

## 4. 社区热点
今日讨论最热烈的问题集中在系统稳定性与性能优化上：
- **[Bug] 进程冻结与无响应 ([Issue #5218](https://github.com/agentscope-ai/QwenPaw/issues/5218))**：评论数达 14 条。子 Agent 触发上下文压缩时会导致 QwenPaw 进程彻底冻结，这是当前最影响用户体验的阻断性问题。
- **[Feature] 集成 Headroom 压缩层 ([Issue #5063](https://github.com/agentscope-ai/QwenPaw/issues/5063))**：评论数 6 条。用户建议集成 Headroom 以减少 60-95% 的 Token 消耗，显示出对降低成本和长对话能力的强烈需求。对应的实现 PR ([PR #5244](https://github.com/agentscope-ai/QwenPaw/pull/5244)) 已提交。
- **[Bug] 模型思考格式不兼容 ([Issue #4625](https://github.com/agentscope-ai/QwenPaw/issues/4625))**：MiniMax-M2.5 模型返回 XML 格式的思考过程导致指令执行中断，影响特定模型用户的使用。

## 5. Bug 与稳定性
今日报告的 Bug 按严重程度排序如下：

### 严重
1. **进程冻结**：上下文压缩触发进程冻结，需手动重启 ([Issue #5218](https://github.com/agentscope-ai/QwenPaw/issues/5218))。**状态**：已有修复 PR ([PR #5242](https://github.com/agentscope-ai/QwenPaw/pull/5242)) 提交超时保护。
2. **桌面端崩溃循环**：macOS ARM64 上 Tauri 后端每隔 1 分钟崩溃重启 ([Issue #5209](https://github.com/agentscope-ai/QwenPaw/issues/5209))。**状态**：已有修复 PR ([PR #5238](https://github.com/agentscope-ai/QwenPaw/pull/5238)) 修复插件依赖启动循环。
3. **配置污染**：`load_agent_config` 返回缓存引用导致运行时配置被静默覆盖 ([Issue #5206](https://github.com/agentscope-ai/QwenPaw/issues/5206))。**状态**：已关闭 (Fixed)。

### 主要
1. **文件发送失效**：v1.1.11 中 `send_file_to_user` 无法生成下载链接 ([Issue #5258](https://github.com/agentscope-ai/QwenPaw/issues/5258))。
2. **定时任务干扰**：Cron 定时任务意外注入到主聊天流中 ([Issue #5250](https://github.com/agentscope-ai/QwenPaw/issues/5250))。**状态**：已有 PR ([PR #5251](https://github.com/agentscope-ai/QwenPaw/pull/5251)) 增加 Silent 选项。
3. **钉钉频道失效**：uv 安装方式下钉钉频道配置无效 ([Issue #5237](https://github.com/agentscope-ai/QwenPaw/issues/5237))。

## 6. 功能请求与路线图信号
- **Headroom 上下文压缩**：[PR #5244](https://github.com/agentscope-ai/QwenPaw/pull/5244) 正在实现 Issue #5063 的需求，通过可选插件形式大幅降低 Token 消耗，预计近期合入。
- **Agent 自演化机制**：[Issue #5205](https://github.com/agentscope-ai/QwenPaw/issues/5205) 提出 Agent 应具备从错误中学习并自动修正行为的能力，目前处于讨论阶段。
- **企业微信图文支持**：[Issue #5217](https://github.com/agentscope-ai/QwenPaw/issues/5217) 希望支持图片+文本的组合消息推送。

## 7. 用户反馈摘要
- **长对话体验差**：多个 Issue (#5218, #5161) 反映长上下文场景下进程卡顿、冻结，严重影响生产力。
- **安装方式差异**：用户反馈 `uv` 安装与安装包版本在功能支持上存在不一致（如钉钉频道），建议统一各发行版的依赖管理。
- **模型兼容性**：对第三方模型（如 MiniMax, Kimi）的兼容性仍有待提高，尤其是思考过程的解析。

## 8. 待处理积压
- **Critical PR 待合并**：针对严重崩溃问题的 [PR #5238](https://github.com/agentscope-ai/QwenPaw/pull/5238) (Desktop) 和 [PR #5242](https://github.com/agentscope-ai/QwenPaw/pull/5242) (Freeze) 仍处于 Open 状态，建议维护者优先 Review。
- **长期 Issue**：关于 Feishu CardKit 流式卡片加载缓慢的优化建议 ([Issue #5167](https://github.com/agentscope-ai/QwenPaw/issues/5167)) 虽已关闭，但需关注是否在后续版本中彻底解决。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-06-17)

## 1. 今日速览
ZeptoClaw 项目今日整体处于低活跃度的维护状态，未观察到核心功能开发或重大社区互动。过去 24 小时内，项目无新增 Issue、无版本发布，唯一的动态来自自动化依赖更新机器人提交的 PR。这表明项目当前处于稳定迭代期，核心代码库较为平静，但也反映出社区讨论热度暂时处于低位。整体来看，项目维护工作主要由自动化工具驱动，健康度平稳但缺乏显性进展。

## 2. 版本发布
**无**。今日未发布新版本。

## 3. 项目进展
今日无已合并或已关闭的 PR，项目核心功能代码未发生变动。

目前有 **1 条待合并的 PR** 正在排队等待审核：
*   **[OPEN] PR #630: chore(deps): bump debian from `b6e2a15` to `4e401d9`**
    *   **链接**: [qhkm/zeptoclaw PR #630](https://github.com/qhkm/zeptoclaw/pull/630)
    *   **进展分析**: 该 PR 由 Dependabot 自动生成，主要针对 Docker 基础镜像进行更新。虽然属于日常维护范畴，但保持基础镜像（Debian trixie-slim）的最新状态对于容器安全性和构建稳定性至关重要。建议维护者尽快审核并合并，以消除潜在的底层依赖隐患。

## 4. 社区热点
过去 24 小时内项目社区讨论沉寂，无用户发起讨论或评论。

*   **活跃度分析**: 今日无活跃的 Issues 或 PR 讨论。唯一的 PR 动态来自机器人账号，缺乏人工交互信号。

## 5. Bug 与稳定性
**无新发 Bug**。今日未收到新的 Bug 报告或崩溃反馈。

*   **稳定性判断**: 缺乏新 Issue 报告通常意味着当前版本（尽管未发布新标签）在用户侧运行相对稳定，或者项目处于低频使用/关注期。

## 6. 功能请求与路线图信号
**无新增功能请求**。

*   **路线图分析**: 由于缺乏用户提议和开发者的新功能 PR，目前难以判断项目的下一阶段演进方向。建议持续关注后续是否有功能分支的创建或 Roadmap Issue 的更新。

## 7. 用户反馈摘要
**暂无数据**。今日无用户评论或反馈，无法提炼痛点或满意点。

## 8. 待处理积压
目前积压量极低，但需关注自动化任务的响应速度：

*   **PR #630 [依赖更新]**: 该 PR 创建于昨日（2026-06-16），状态仍为 OPEN。虽然仅过去一天，但建议维护者建立自动化合并策略或定期检查机制，避免此类安全/依赖更新型 PR 长期滞留。
    *   **链接**: [qhkm/zeptoclaw PR #630](https://github.com/qhkm/zeptoclaw/pull/630)

---
**分析师备注**: 项目当前处于“静默维护”模式。建议维护者关注 Dependabot PR 的及时处理，以维持项目的安全基线。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-06-17)

**项目地址**: [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. 今日速览
EasyClaw 项目今日呈现“开发活跃、社区静默”的态势。尽管过去 24 小时内未观测到公开的 Issue 提交或 Pull Request 活动，但项目团队在单日内连续发布了 v1.8.34 和 v1.8.35 两个版本，显示出高频的内部迭代节奏。更新重心明显向“智能化商业决策”倾斜，特别是强化了 AI 在卖家辅助与达人模型推荐方面的应用。整体来看，项目核心开发进展顺利，但社区互动热度有待提升。

### 2. 版本发布
今日连续发布两个重要版本，功能迭代紧密围绕电商场景下的智能化辅助：

- **[v1.8.35: RivonClaw v1.8.35](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.35)**
    - **核心更新**：
        - **决策辅助**：增加了更清晰的达人模型推荐引导，旨在辅助卖家进行决策。
        - **Bug 修复**：修复了未付费外联设置的异常，并明确了相关派发上下文。
        - **体验优化**：优化了客服结案评分提示及达人作品重新发布的本地化处理。
    - **影响评估**：此次更新主要针对业务流程中的细节体验进行打磨，无破坏性变更，建议用户尽快升级以获得更精准的推荐算法支持。

- **[v1.8.34: RivonClaw v1.8.34](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.34)**
    - **核心更新**：
        - **AI 智能增强**：引入了达人 ML Insights（机器学习洞察），并在桌面端和面板流程中细化了预期销量智能分析。
        - **流程改进**：改进了达人提案上下文，增加了支持指标、生命周期类型及必填操作派发。
        - **系统优化**：针对客服控制、账单操作、Auth 引导及 Windows 原生应用进行了多项优化。
    - **迁移注意**：涉及 Auth 引导机制的变更，建议开发者在升级后重点测试授权流程的兼容性。

### 3. 项目进展
根据 GitHub 统计数据，今日无公开合并或关闭的 PR。然而，连续两个版本的发布暗示了项目内部存在活跃的代码提交与合并行为，主要推进了机器学习模型在电商达人匹配与销量预测场景的落地应用。项目整体向“AI 驱动的智能助手”方向迈出了实质性的一步，功能模块已从基础服务向高阶智能分析扩展。

### 4. 社区热点
今日无活跃的 Issues 或 Pull Requests 讨论，社区互动处于低水位。暂无热点话题可供分析。

### 5. Bug 与稳定性
今日未收到用户提交的新 Bug 报告。但在 v1.8.35 版本中，开发团队主动修复了以下问题：
- **[已修复] 未付费外联设置问题**：此前版本可能存在配置失效或逻辑混淆，已在新版本中修正。目前尚无用户反馈相关回归问题，推测修复有效。

### 6. 功能请求与路线图信号
今日无新增功能请求。从版本发布轨迹分析，项目路线图正清晰地指向以下方向：
1.  **深度智能化**：ML Insights 和预期销量分析的引入，表明项目正在整合更多 AI 模型能力。
2.  **卖家与达人双端协同**：通过优化提案上下文和推荐引导，强化平台双边网络效应。
预计下一阶段将继续深化数据驱动的自动化功能，而非单纯的手动工具迭代。

### 7. 用户反馈摘要
由于今日缺乏 Issue 评论数据，暂无法提炼具体用户痛点或满意度反馈。

### 8. 待处理积压
当前数据显示无长期未响应的重要 Issue 或 PR。考虑到近期频繁的版本更新，推测维护者对代码库维护较为积极，积压风险较低。建议持续关注后续几日的社区反馈，以验证 v1.8.3x 系列版本的稳定性。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*