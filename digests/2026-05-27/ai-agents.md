# OpenClaw 生态日报 2026-05-27

> Issues: 382 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-27 04:04 UTC

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

# OpenClaw 项目动态日报 (2026-05-27)

## 1. 今日速览

OpenClaw 项目今日展现出极高的维护活跃度与迭代速度，过去 24 小时内共有 **382 条 Issue 更新**（新开/活跃 167 条，关闭 215 条）和 **500 条 PR 更新**。Issue 关闭率超过 100%，表明社区与维护者正在高效清理积压问题并响应用户反馈。项目连续发布了 `v2026.5.25-beta.1` 和 `v2026.5.26-beta.1` 两个版本，重点优化了启动速度、消息投递机制及 iMessage 附件处理。核心架构层面，多插槽内存系统与频道代理重构正在密集推进，显示出项目正在为更复杂的 AI 智能体协作场景夯实基础。

## 2. 版本发布

### v2026.5.26-beta.1
- **亮点更新**：
  - **性能提升**：优化了启动速度和回复投递速度。将用户可见的消息发送与较慢的后续处理逻辑分离，实现了更快的响应感知。
  - **元数据复用**：在热路径上复用命令/模型/插件元数据，减少重复扫描开销。
  - **网关优化**：Gateway 启动时避免了重复的插件、通道、会话和文件系统扫描。

### v2026.5.25-beta.1
- **修复内容**：
  - **iMessage 附件**：修复了 `~/Library/Messages/Attachments` 路径下的入站附件因策略限制被拒绝的问题，现在可以通过图像工具正确读取通配符根目录下的文件。

## 3. 项目进展

今日共有 **248 个 PR 被合并或关闭**，重点推进了以下核心功能与修复：

- **内存架构重构**：PR [#86210](https://github.com/openclaw/openclaw/pull/86210) 提出了“多插槽内存角色架构”，旨在解决单一全局内存选择器导致的冲突，允许 `memory.recall`、`memory.compaction` 等角色独立组合插件。这是迈向模块化 AI 记忆系统的重要一步。
- **安全加固**：PR [#83294](https://github.com/openclaw/openclaw/pull/83294) 修复了 `models.json` 中明文 API Key 的剥离问题，防止敏感信息泄露；PR [#87150](https://github.com/openclaw/openclaw/pull/87150) 加强了手机控制插件的变更鉴权。
- **频道集成优化**：PR [#86165](https://github.com/openclaw/openclaw/pull/86165) 推进了频道代理第四阶段，统一了 Telegram/Discord/Slack 等多渠道的会话、路由和状态管理语义，减少维护熵。
- **会话压缩增强**：PR [#83637](https://github.com/openclaw/openclaw/pull/83637) 正在实现每个 Agent 独立的上下文压缩覆盖配置，满足不同智能体对上下文维护的差异化需求。
- **已合并修复**：PR [#66184](https://github.com/openclaw/openclaw/pull/66184) 已合并，优化了对话回复风格，减少了模型过度的“确认语气”，提升了自动化任务的流畅度。

## 4. 社区热点

今日社区讨论主要集中在**稳定性**与**模型兼容性**方面：

- **[Issue #44925](https://github.com/openclaw/openclaw/issues/44925) [P1] Subagent completion silently lost**
  - **热度**：评论 18 条。
  - **焦点**：用户报告子智能体任务完成结果偶尔会静默丢失，无重试或通知，导致自动化流程中断。这是目前社区反馈最强烈的可靠性问题，已被标记为“钻石级”影响。
- **[Issue #68596](https://github.com/openclaw/openclaw/issues/68596) Configurable streaming watchdog timeout**
  - **热度**：评论 14 条，点赞 8。
  - **焦点**：随着 DeepSeek-R1、Kimi-k2.5 等长思考模型的普及，默认 30 秒的流式监视器超时已不适用，用户强烈要求可配置该阈值以避免误判掉线。
- **[Issue #86599](https://github.com/openclaw/openclaw/issues/86599) [P1] Local model blocks Gateway event loop on Windows**
  - **热度**：评论 11 条。
  - **焦点**：Windows 平台上本地模型调用会阻塞网关事件循环，导致简单推理耗时数分钟，严重影响用户体验。

## 5. Bug 与稳定性

今日报告了多个严重级别的 Bug，部分已有修复 PR 跟进：

### 严重 (P1 / Blocker)
- **[Issue #44925] Subagent result loss**：子智能体结果丢失，暂无修复 PR，维护者正在评估解决方案。
- **[Issue #86599] Windows Event Loop Block**：Windows 平台性能回归，暂无 PR。
- **[Issue #86948] Codex app-server silently drops turns**：Beta 阻塞级问题，OpenAI Responses API 通知丢失，导致轮次挂起。
- **[Issue #85913] EmbeddedAttemptSessionTakeoverError**：嵌入式会话心跳与直接通道之间的竞态条件，导致会话接管错误。

### 已修复/有关联 PR
- **[Issue #81249] Local Ollama embeddings fail with proxy**：已关闭，SSRF 防御逻辑已调整，支持 NO_PROXY 绕过本地地址。
- **[Issue #86613] FD leak on macOS**：已关闭，修复了 `memory_search` 调用导致的文件描述符泄漏。
- **[Issue #86758] Codex dynamic-tool RPC timeout**：已关闭，虽然列为 Bug，但通过配置或代码调整解决了 30s 硬编码超时导致的枚举工具失败。
- **[Issue #86939] Webchat status stuck**：已关闭，修复了前端状态更新的竞态条件。

## 6. 功能请求与路线图信号

- **长思考模型支持**：Issue #68596 的活跃讨论表明，OpenClaw 需要在协议层更好地支持长推理时间的模型，这可能涉及到流式超时机制和心跳检测的重构。
- **多智能体编排改进**：Issue #38626 和 #86210 显示，项目正在从单一智能体向复杂的多智能体协作演进，重点包括子智能体的生命周期可观测性和内存隔离机制。
- **本地模型性能**：Windows 平台的问题 (#86599) 暴露了本地模型集成在跨平台 IO/事件循环处理上的短板，优化本地推理引擎的集成将是下一阶段的重点。

## 7. 用户反馈摘要

- **痛点**：
  - **静默失败**：用户对“静默丢失消息/结果”容忍度极低，希望系统能有明确的重试机制和错误反馈（#44925, #50093）。
  - **配置复杂性**：代理设置、本地模型路径及白名单配置（#81249, #86613）对新手不够友好，容易出现安全策略拦截导致的故障。
  - **跨平台差异**：Windows 用户明显感受到比 Linux/macOS 更多的性能和兼容性问题。
- **场景**：
  - 大量用户开始使用 OpenClaw 作为长思考模型（DeepSeek, Kimi）的前端网关。
  - WhatsApp、Telegram、Matrix 等多渠道接入需求强烈，对重连后的消息补全要求高。

## 8. 待处理积压

- **[Issue #38626](https://github.com/openclaw/openclaw/issues/38626) Subagent lifecycle observability**：长期开放的功能请求，旨在增强子智能体的生命周期可观测性。该功能对于调试复杂的自动化工作流至关重要，目前尚未有实质性进展。
- **[Issue #50093](https://github.com/openclaw/openclaw/issues/50093) WhatsApp Backfill missed messages**：WhatsApp 断线重连期间消息丢失的老问题，虽然评论数不多，但影响严重，目前仍在寻求解决方案。

---

## 横向生态对比

# AI 智能体与个人助手开源生态日报 (2026-05-27) 横向对比分析报告

## 1. 生态全景
当前 AI 智能体开源生态正处于从“单点功能实现”向“复杂架构重构”演进的关键阶段。头部项目正集中精力解决**长思考模型的协议适配**与**多智能体协作的内存架构**难题。社区对稳定性的诉求强烈，静默失败和流式响应超时成为阻碍生产环境部署的主要痛点。同时，MCP (Model Context Protocol) 正迅速成为连接外部工具与上下文的事实标准，商业化探索（如订阅制、企业级渠道）在成熟项目中初见端倪。

## 2. 各项目活跃度对比

| 项目名称 | Issues 活跃度 | PRs 活跃度 | 今日发布 | 健康度评估 | 核心动向 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 🔥 382 (极高) | 🔥 500 (极高) | Beta 更新 | ⭐⭐⭐⭐⭐ | 内存架构重构，频道代理统一，清理积压 |
| **Hermes Agent**| 🔥 50 (高) | 🔥 50 (高) | 无 | ⭐⭐⭐⭐ | 紧急修复 Codex 崩溃，合并原生 MCP 支持 |
| **IronClaw** | 🔥 15 (中) | 🔥 50 (高) | v0.29.0 | ⭐⭐⭐⭐ | Reborn 架构迁移，企业微信渠道，依赖发布滞后 |
| **CoPaw** | 🔥 32 (高) | 🔥 27 (高) | 无 | ⭐⭐⭐⭐ | 前端体验优化，插件化 Channel，RBAC 需求 |
| **Zeroclaw** | 低 | 🔥 35 (高) | 无 | ⭐⭐⭐⭐ | DeepSeek-V4 兼容，Computer-Use 规划 |
| **PicoClaw** | 中 | 中 | Nightly | ⭐⭐⭐ | Nightly 频发，QQ 渠道崩溃，OAuth 修复 |
| **LobsterAI** | 无 | 中 (9 merged) | 无 | ⭐⭐⭐⭐ | 稳步迭代，渠道归因，Windows 兼容 |
| **NanoBot** | 低 | 中 | 无 | ⭐⭐⭐ | 架构重构，流式超时痛点，Dream System 优化 |
| **NanoClaw** | 无 | 低 | 无 | ⭐⭐⭐ | 容器自愈，CI 现代化 |
| **Moltis** | 低 | 低 | 无 | ⭐⭐⭐ | Agent 权限边界定义，商业合作意向 |
| **EasyClaw** | 无 | 无 | v1.8.16 | ⭐⭐⭐ | 商业化订阅功能完善 |
| **NullClaw** | 无 | 低 | 无 | ⭐⭐⭐ | 网络错误精细化，构建系统维护 |
| **TinyClaw** | 无 | 无 | 无 | ⭐ | 暂无活动 |

## 3. OpenClaw 在生态中的定位

作为**核心参照项目**，OpenClaw 在生态中处于绝对的领先地位，其定位呈现以下特征：

*   **技术架构标杆**：相比 Hermes Agent 的快速迭代修复和 NanoBot 的实验性重构，OpenClaw 正在进行深度的底层架构升级（多插槽内存、频道代理第四阶段）。其架构改动旨在解决多智能体协作的通用性问题，而非单一功能的修补。
*   **生态兼容性核心**：OpenClaw 最早响应了 DeepSeek-R1/Kimi 等长思考模型的流式超时问题，并解决了 iMessage 等复杂通道的附件处理。相比之下，Zeroclaw 还在处理 DeepSeek-V4 的基础格式兼容，NanoBot 仍受困于硬编码超时。
*   **社区规模优势**：单日 382 条 Issue 和 500 条 PR 的活跃度远超其他项目总和，形成了强大的反馈闭环。其社区反馈直接推动了行业对“静默失败”和“本地模型兼容性”的关注。

**差异点**：OpenClaw 更侧重于作为**通用的智能体运行时网关**，而 PicoClaw/EasyClaw 侧重客户端体验，IronClaw/Moltis 侧重企业级安全与多租户架构。

## 4. 共同关注的技术方向

1.  **长思考模型的适配**：
    *   **涉及项目**：OpenClaw, NanoBot, Zeroclaw。
    *   **具体诉求**：DeepSeek-V4、Kimi-k2.5 等模型由于推理时间长，默认 30-90s 的流式超时已不适用。OpenClaw (#68596) 和 NanoBot (#4013) 均收到大量反馈要求配置化超时阈值。

2.  **MCP (Model Context Protocol) 标准化**：
    *   **涉及项目**：Hermes Agent, NanoBot, Zeroclaw。
    *   **具体诉求**：Hermes Agent 已合并原生 MCP 客户端支持，NanoBot 正在增强 MCP 连接机制。这表明生态正在摆脱私有 Tool 格式，转向统一协议以复用工具生态。

3.  **子智能体/多智能体编排**：
    *   **涉及项目**：OpenClaw, IronClaw, Moltis。
    *   **具体诉求**：从单一对话向多角色协作演进。OpenClaw 提出了“多插槽内存角色架构”，Moltis 定义“Agent 为能力边界”，IronClaw 引入 Coder/Explorer 等子智能体风格。

4.  **Windows 平台兼容性**：
    *   **涉及项目**：OpenClaw, LobsterAI, PicoClaw。
    *   **具体诉求**：Windows 平台的本地模型调用阻塞、脚本换行符错误 (NanoClaw)、OAuth 回调路径错误 等问题频发，显示出跨平台开发仍是主要工程挑战。

## 5. 差异化定位分析

*   **架构稳健性**：
    *   **OpenClaw** 与 **IronClaw** 属于“重型架构”派，正通过重构内存和签名机制为大规模部署做准备。
    *   **NanoBot** 与 **Hermes Agent** 属于“快速迭代”派，功能更新快但近期受稳定性困扰（Codex 崩溃、流式超时）。

*   **目标用户**：
    *   **OpenClaw/CoPaw**：面向**开发者与高级用户**，提供高度可配置的网关与插件系统（CoPaw 强调 UI 交互）。
    *   **EasyClaw/PicoClaw**：面向**终端消费者**，侧重 Nightly 构建、移动端适配及商业化订阅功能。
    *   **IronClaw/Moltis**：面向**企业/机构**，强调多租户隔离、沙箱安全和审计签名。

*   **技术栈特征**：
    *   **Rust 系** (IronClaw, NullClaw, Moltis)：强调高性能与安全性，开发门槛高，适合基础设施层。
    *   **Python/Node 系** (OpenClaw, Hermes, CoPaw)：生态丰富，迭代快，适合应用层与逻辑编排。

## 6. 社区热度与成熟度

*   **快速迭代期（活跃度高，稳定性波动）**：
    *   **Hermes Agent**：因 Codex API 变更引发崩溃潮，社区热度极高，修复响应迅速。
    *   **Zeroclaw**：Beta-2 集成阶段，代码变动大，高危 Bug（DeepSeek 兼容）亟待解决。
    *   **OpenClaw**：处于架构升级阵痛期，Issue 关闭率极高，显示维护者对质量的强控。

*   **质量巩固期（功能完善，关注细节）**：
    *   **LobsterAI & NanoClaw**：无重大崩溃，专注于修复特定平台兼容性和容器化部署细节。
    *   **CoPaw**：专注于 UI/UX 细节（时间戳、Fork逻辑）和企业级特性（RBAC）。

*   **维护/商业化期（活跃度低，功能稳定）**：
    *   **EasyClaw**：重心转向商业化付费流程。
    *   **NullClaw & ZeptoClaw**：仅进行依赖更新和基础维护。

## 7. 值得关注的趋势信号

1.  **“静默失败”是不可接受的**：
    *   OpenClaw Issue #44925 和 Hermes Agent 的大量崩溃反馈表明，智能体应用正在从“玩具”走向“生产力工具”。用户对“无重试、无通知的静默丢失”容忍度极低。开发者必须在设计之初就引入完备的可观测性和重试机制。

2.  **本地推理与网关的解耦**：
    *   Windows 事件循环阻塞 和流式超时问题揭示了在高并发场景下直接调用本地模型的弊端。趋势显示，通过独立网关代理本地模型请求，实现超时与负载的统一管理，是更优的架构选择。

3.  **Computer-Use 成为下一竞争高地**：
    *   Zeroclaw 接受 Computer-Use 特性请求，OpenClaw 优化 iMessage 附件处理，显示出智能体正从“文本交互”向“GUI 控制/多模态操作”跃迁。

4.  **商业化倒逼架构升级**：
    *   EasyClaw 的订阅流优化和 Moltis 的商业合作咨询表明，开源项目正在探索可持续模式。这反过来推动了 OpenClaw 和 IronClaw 对多租户、渠道归因和权限隔离的架构投入。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-27)

## 1. 今日速览
NanoBot 项目今日保持高度活跃，过去 24 小时内 PR 更新量达 19 条，其中 6 条顺利合并，显示项目迭代速度稳健。社区方面，新增 3 个功能需求与 Bug 报告，重点关注 LLM 调用的稳定性及语音交互能力的缺失。核心开发重心向架构优化倾斜，尤其是 Dream System 的重构与 MCP（Model Context Protocol）连接机制的增强。整体来看，项目正处于功能完善与架构重构并行期，贡献者响应积极，但部分遗留的底层 Bug（如流式响应超时）仍需关注。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **6 个 PR 合并/关闭**，显著提升了系统的稳定性和兼容性：

*   **WebUI 体验优化**：PR [#3944](https://github.com/HKUDS/nanobot/pull/3944) 修复了会话刷新时新建聊天丢失的问题，改善了前端交互流畅度。
*   **模型提供商兼容性**：PR [#4009](https://github.com/HKODS/nanobot/pull/4009) 修复了 Codex 传输错误处理，PR [#4004](https://github.com/HKUDS/nanobot/pull/4004) 更新了 Kagi 搜索 API 集成，确保外部工具调用正常。
*   **生态集成扩展**：PR [#3996](https://github.com/HKUDS/nanobot/pull/3996) 新增 Telegram Webhook 模式，PR [#4008](https://github.com/HKUDS/nanobot/pull/4008) 集成了 AgentMail CLI，扩展了机器人的部署场景与技能范围。
*   **工程化建设**：PR [#3981](https://github.com/HKUDS/nanobot/pull/3981) 启用了 WebUI ESLint，提升了前端代码规范。

## 4. 社区热点
今日讨论热度集中在以下几个方面：

*   **[Bug] LLM 流式响应超时**：Issue [#4013](https://github.com/HKUDS/nanobot/issues/4013) 报告了升级至 v0.2.0 后出现 "stream stalled for more than 90 seconds" 错误，导致工作流中断。用户反馈该问题严重影响使用，需等待官方修复或回退版本。
*   **[Enhancement] Dream System 架构演进**：Issue [#3973](https://github.com/HKUDS/nanobot/issues/3973) 深入探讨了 Dream System 的 "饥饿问题" 及缺乏实时学习能力，引发了关于记忆机制优化的深度讨论。
*   **[Feature] 语音闭环需求**：Issue [#4010](https://github.com/HKUDS/nanobot/issues/4010) 提出增加 TTS（文本转语音）支持，以补全语音交互体验，社区对这一闭环功能呼声较高。

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及核心调用链与数据一致性：

1.  **严重 - LLM 流式调用中断**：
    *   Issue: [#4013](https://github.com/HKUDS/nanobot/issues/4013)
    *   现象：v0.2.0 版本在进行 LLM 调用时出现 90 秒停滞超时，导致 Agent 无法正常工作。
    *   状态：目前尚无针对此特定回归问题的修复 PR，建议受影响用户暂时关注 Issue 进展。

2.  **中等 - 对话历史数据污染**：
    *   Issue: [#4006](https://github.com/HKUDS/nanobot/issues/4006)
    *   现象：会话历史中存在孤立的 tool result，导致严格校验的 API 拒绝请求。
    *   修复进展：已有修复 PR [#4011](https://github.com/HKUDS/nanobot/pull/4011)，通过清理历史记录中不匹配的工具调用结果来解决该问题。

## 6. 功能请求与路线图信号
根据 Issues 与活跃 PR，项目下一阶段路线图呈现以下趋势：

*   **架构重构**：PR [#3990](https://github.com/HKUDS/nanobot/pull/3990) 提议将 Dream System 重构为单阶段合并，并引入 Goal-state 生命周期。这表明项目正在向更高效、低延迟的记忆处理架构演进。
*   **自我反思机制**：PR [#4015](https://github.com/HKUDS/nanobot/pull/4015) 尝试在工具执行后增加观察-反思提示，预示 Agent 的推理能力将进一步提升。
*   **多智能体协作**：PR [#3992](https://github.com/HKUDS/nanobot/pull/3992) 实现了跨实例消息总线，这是实现多 Agent 协同工作的关键基础设施，极有可能在近期合并。
*   **MCP 协议增强**：PR [#4014](https://github.com/HKUDS/nanobot/pull/4014) 与 [#4012](https://github.com/HKUDS/nanobot/pull/4012) 分别解决了工具列表动态更新和重连问题，显示出项目对 MCP 标准的高度重视。

## 7. 用户反馈摘要
*   **痛点**：部分用户在升级版本后遭遇严重的稳定性问题（LLM 流超时），对新版本的硬编码限制表示不满。
*   **场景**：用户不仅满足于文本交互，开始追求更自然的语音交互体验（Voice In/Voice Out）。
*   **评价**：用户对 v0.1.5post2 版本的稳定性评价较高，认为 v0.2.0 存在回归风险。对于 DeepSeek 等特定提供商的兼容性问题，社区已有针对性 PR 但尚未合并。

## 8. 待处理积压
以下长期未解决的 Issue/PR 需维护者重点关注：

*   **[PR] DeepSeek 消息处理修复**：PR [#3869](https://github.com/HKUDS/nanobot/pull/3869) 已开启 11 天，解决了 DeepSeek API 对 null 内容的严格校验问题，对国内用户至关重要，建议尽快 Review 合并。
*   **[PR] 心跳推理解耦**：PR [#1443](https://github.com/HKUDS/nanobot/pull/1443) 涉及核心调度逻辑，已停滞近 3 个月，需确认是否与当前架构冲突。
*   **[Issue] Dream System 理论瓶颈**：Issue [#3973](https://github.com/HKUDS/nanobot/issues/3973) 提出的 "饥饿问题" 涉及长期记忆架构设计，需核心团队给出明确的规划或回应。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-27)

## 1. 今日速览
Zeroclaw 项目今日保持高活跃度开发状态，核心聚焦于 **Beta-2 版本集成** 与 **DeepSeek-V4 兼容性修复**。过去 24 小时内 PR 更新高达 35 条，尽管无新版本发布，但代码库合并了关键的 OTEL 可观测性管道修复与 Email 通道增强。社区方面，DeepSeek-V4 API 格式不兼容的高危 Bug (#6059) 持续发酵，已成为当前用户反馈最集中的痛点。整体来看，项目正处于新功能合入与稳定性修复并行的关键阶段。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 6 个 PR 更新为已合并/关闭状态（基于数据概览），以下为重点合入进展：

*   **可观测性增强**：PR [#5804](https://github.com/zeroclaw-labs/zeroclaw/pull/5804) 已关闭。该修复完善了 OTEL 链路追踪管道，解决了 WebSocket 会话中 LLM 调用、Token 统计及父子层级缺失的问题，显著提升了多租户企业部署的运维可监控性。
*   **Email 通道修复**：PR [#6512](https://github.com/zeroclaw-labs/zeroclaw/pull/6512) 已关闭。修复了 Email 通道中 HTML 渲染错误、主题线程混乱及附件路径解析失败等三个核心问题，提升了邮件机器人的可用性。
*   **Beta-2 集成推进**：PR [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) 正在密集更新中（标记为 `DO NOT MERGE`）。这是一个 XL 级超大 PR，引入了 Zerocode TUI、RPC socket 传输及 DenyWithEdit 审批机制，是下一版本的核心重构基础。

## 4. 社区热点
今日讨论热度最高的 Issue 围绕模型兼容性与架构扩展：

*   **[Bug] DeepSeek-V4 API 格式不兼容 ([#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059))**
    *   **热度**：13 条评论，4 个点赞。
    *   **分析**：随着 DeepSeek-V4 的发布，用户在调用 Pro/Flash 版本时遭遇 "thinking mode" 相关的 API 格式错误。这是一个 S2 级别的严重降级问题，涉及 Provider 核心逻辑，目前已被标记为 P1 优先级处理中。
*   **[Feature] Computer-Use (屏幕交互) 支持 ([#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909))**
    *   **热度**：3 条评论，状态已标记为 `accepted`。
    *   **分析**：社区对 Agent 具备像 OpenAI Codex 或 Peekaboo 那样的 GUI 控制能力呼声较高。该 Feature 旨在赋予 Agent 截图与键鼠控制能力，是目前项目向通用智能体演进的重要信号。

## 5. Bug 与稳定性
今日报告的关键 Bug 集中在模型提供商兼容性与交互体验：

*   **[P1 | High Risk] DeepSeek-V4 Provider 不兼容**
    *   **Issue**: [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)
    *   **状态**: Open，标记为 `in-progress`。暂无关联 Fix PR 合并。
    *   **影响**: 导致使用 DeepSeek 作为 Provider 的 Agent 运行时崩溃或行为降级。
*   **[P2 | Medium] TUI 快捷键冲突**
    *   **Issue**: [#6950](https://github.com/zeroclaw-labs/zeroclaw/issues/6950)
    *   **状态**: Open，已有对应 Fix PR [#6952](https://github.com/zeroclaw-labs/zeroclaw/pull/6952) 提交。
    *   **影响**: 紧凑型键盘（如 Keychron K系列）无法使用 F1-F5 切换模式。
*   **[High Risk] Skill 冷却机制失效**
    *   **Issue**: 隐含于 PR [#6684](https://github.com/zeroclaw-labs/zeroclaw/pull/6684) 的描述中。
    *   **状态**: Fix PR Open。
    *   **详情**: `SkillManage` 的 patch 操作未正确调用冷却断言，可能导致 Skills 在非预期时间内被频繁修改。

## 6. 功能请求与路线图信号
根据 Issue 与 PR 动态，近期重点开发方向如下：

*   **Computer-Use 能力**: Issue [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) 已被官方 Accept，意味着 Zeroclaw 将从纯文本/工具调用向图形界面交互拓展。
*   **任务调度架构重构**: Issue [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) 提出 RFC，建议将调度任务路由至 Orchestrator 消息管道，以解决一系列上下文丢失的 Bug。这预示着 Runtime 层将迎来一次架构级清理。
*   **安全与权限增强**:
    *   PR [#6924](https://github.com/zeroclaw-labs/zeroclaw/pull/6924) 引入 `builtin` 工具类型，支持 Skill 级别的权限提升，细化了安全边界。
    *   PR [#6920](https://github.com/zeroclaw-labs/zeroclaw/pull/6920) 强化了 MCP 工具的黑白名单执行拦截。

## 7. 用户反馈摘要
*   **痛点**：DeepSeek-V4 用户受困于 API 格式解析错误，无法正常使用该高性价比模型。
*   **体验问题**：紧凑型键盘用户在 TUI 模式下操作受阻（[#6950](https://github.com/zeroclaw-labs/zeroclaw/issues/6950)），急需 `Alt` 快捷键替代方案。
*   **配置困扰**：SiliconFlow 用户因默认 Endpoint 指向国内站（.cn）导致国际站 API Key 被拒，PR [#6953](https://github.com/zeroclaw-labs/zeroclaw/pull/6953) 正在修复此问题。

## 8. 待处理积压
*   **高危 PR 审查阻塞**: PR [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) (Beta-2 集成) 涉及面极广，目前仍有 Delegate 重引入、Fallback 行为重写等问题待解决，建议核心维护者集中攻坚。
*   **关键 Bug 盯梢**: Issue [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) (DeepSeek 兼容性) 虽标记为 in-progress，但尚未见提交修复代码，需持续关注防止社区用户流失。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-27)

## 1. 今日速览
Hermes Agent 今日处于**高活跃度与紧急修复并存**的状态。过去 24 小时内，Issue 更新量达 50 条，PR 更新量同样达 50 条，显示出社区与开发团队的高频互动。项目核心焦点集中在 `openai-codex` 提供者的流式响应处理上，由于上游 API 返回 `null` 输出导致的大面积崩溃引发了大量重复 Issue 报告（如 #32892, #32903 等），开发团队已迅速响应并合并了关键修复 PR (#32963)。此外，项目在功能层面迎来了重大进展，原生 MCP 客户端支持与 TUI 会话编排器等核心功能已合并代码，项目架构日趋完善。

## 2. 版本发布
*   **无新版本发布**：今日无正式版本发布记录。考虑到合并了大量关键修复与新功能，预计下一版本（可能是 v0.14.1 或 v0.15.0）将包含重要的稳定性更新。

## 3. 项目进展
今日共有 19 个 PR 被合并/关闭，重点推进了以下领域：

*   **关键稳定性修复**：
    *   [PR #32963](https://github.com/NousResearch/hermes-agent/pull/32963)：修复了 `openai-codex` 提供者在流式响应结束时因 `response.output=null` 触发 `TypeError: 'NoneType' object is not iterable` 的严重崩溃问题。此举解决了过去 24 小时内社区报告的 20+ 个重复 Issue。
    *   [PR #22534](https://github.com/NousResearch/hermes-agent/pull/22534)：修复了 Docker 环境下语音功能的检测问题，现在能正确识别挂载的 PulseAudio/PipeWire 套接字。

*   **核心功能合并**：
    *   [PR #64](https://github.com/NousResearch/hermes-agent/pull/64)：**合并了原生 MCP (Model Context Protocol) 客户端实现**，支持 Stdio 和 HTTP 传输，标志着 Hermes 正式支持 MCP 标准协议。
    *   [PR #6334](https://github.com/NousResearch/hermes-agent/pull/6334)：在 API Server 中增加了只读的 sessions、memory、skills 端点，增强了外部工具对 Agent 状态的监控能力。
    *   [PR #32980](https://github.com/NousResearch/hermes-agent/pull/32980)：引入了 TUI 会话编排器，允许用户在一个终端界面中管理多个并发会话。

## 4. 社区热点
今日社区讨论最热烈的话题集中在 `openai-codex` 提供者的崩溃问题上：

*   **[Issue #32892](https://github.com/NousResearch/hermes-agent/issues/32892)** (评论 33 | 👍 39)：报告了 Hermes 与 ChatGPT/Codex 集成时频繁出现 `NoneType` 错误，直接反映了核心功能不可用的严重性。
*   **[Issue #32883](https://github.com/NousResearch/hermes-agent/issues/32883)** (评论 15 | 👍 49)：详细分析了 Codex 流式输出解析失败的根本原因，提供了高质量的技术细节，对定位问题帮助极大。
*   **[Issue #11179](https://github.com/NousResearch/hermes-agent/issues/11179)** (评论 59)：这是一个历史遗留问题，今日随着崩溃潮再次活跃，最终被 PR #32963 一并解决。

**分析**：用户高度依赖 `openai-codex` 接入 ChatGPT 后端，API 响应格式的微小变动（`output` 为空）即可导致客户端崩溃，显示出下游项目对上游 API 严密格式的强依赖性。

## 5. Bug 与稳定性
今日报告的 Bug 数量激增，按严重程度排列如下：

### 🔴 严重 - 已修复
*   **Codex 响应解析崩溃**：[Issue #32892](https://github.com/NousResearch/hermes-agent/issues/32892), [Issue #32903](https://github.com/NousResearch/hermes-agent/issues/32903) 等。由于 `response.output` 为 `null` 导致 Agent 崩溃。**状态**：已有修复 PR #32963 合并。

### 🟠 高危 - 待处理
*   **认证头部丢失**：[Issue #32992](https://github.com/NousResearch/hermes-agent/issues/32992) 报告 `openai-codex` 聊天路径返回 HTTP 401，原因是请求构建器未附带 `Authorization` 头。
*   **Memory 静默失效**：[Issue #32965](https://github.com/NousResearch/hermes-agent/issues/32965) 指出当 `MEMORY.md` 格式不正确（非 `§` 分隔）时，记忆系统静默失败，无任何错误提示。
*   **插件工具返回类型错误**：[Issue #31435](https://github.com/NousResearch/hermes-agent/issues/31435) 插件返回 Dict 导致上游 API 报错 400，违反了 OpenAI 规范要求的 String 类型。

### 🟡 中等 - 待确认
*   **Docker 环境变量丢失**：[Issue #33004](https://github.com/NousResearch/hermes-agent/issues/33004) Docker 启动脚本中 `HERMES_HOME` 变量被丢弃。

## 6. 功能请求与路线图信号
*   **实时时间上下文**：[Issue #10421](https://github.com/NousResearch/hermes-agent/issues/10421) 提议增加 Turn-level 的实时时间上下文，让 Agent 感知“当前时刻”。该 Issue 自 4 月开放至今，今日又有新讨论，属于高价值 Feature。
*   **Gateway 状态诊断**：[Issue #32952](https://github.com/NousResearch/hermes-agent/issues/32952) 建议在 `doctor` 诊断工具中增加检测重复 Gateway 监管进程的功能，以防止 systemd 重启循环。
*   **API 技能查询**：[PR #33016](https://github.com/NousResearch/hermes-agent/pull/33016)（Open）提议增加 `GET /v1/skills` 接口，允许外部客户端直接枚举 Agent 技能，无需通过聊天交互查询。

## 7. 用户反馈摘要
*   **痛点**：用户普遍反馈 Codex 集成极其脆弱，对 `gpt-5.5` 模型的稳定性抱怨较多（“crashes on every call”）。
*   **场景**：大量用户使用 Hermes 作为 ChatGPT Web 端的 CLI 替代品（通过 `openai-codex` 提供者）。
*   **积极反馈**：尽管崩溃频发，Issue 下的讨论显示社区用户积极贡献日志和复现步骤（如 #32883），对项目的关注度极高。

## 8. 待处理积压
*   **[Issue #10421](https://github.com/NousResearch/hermes-agent/issues/10421)** (Turn-level time context)：自 4 月 15 日创建以来仍未有官方确认，但持续有用户活跃讨论，建议团队纳入下一阶段规划。
*   **[Issue #22990](https://github.com/NousResearch/hermes-agent/issues/22990)** (Copilot 模型列表静态化)：导致用户无法使用最新的 Copilot 模型，影响体验，需调整模型选择器的动态获取逻辑。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-27)

## 1. 今日速览
PicoClaw 项目今日保持高度活跃，维护动作频繁。项目发布了最新的 **v0.2.9-nightly** 自动构建版本，同时进行了大规模的 Issue 与 PR 清理工作，共处理了 13 个 PR（主要是关闭陈旧 PR）和 8 个 Issue。值得注意的是，社区对版本发布节奏和新模型兼容性表现出强烈关注，今日新增了针对 OpenAI Codex OAuth 和最新 Claude 模型的关键修复 PR。整体来看，项目正处于新版本发布前的代码整理与稳定性修复阶段，但在 QQ 渠道稳定性和 RISC-V 支持方面仍存在待解决的痛点。

## 2. 版本发布
- **Nightly Build: v0.2.9-nightly.20260527.28ec5793**
  - **类型**: 自动化构建版本
  - **警示**: 官方标注可能不稳定，建议测试环境使用。
  - **变更**: 对比 v0.2.9 版本，包含了主分支最新代码，涵盖了今日合并的微信多账号、前端 UI 优化等功能。

## 3. 项目进展
今日项目进展主要集中在**功能增强**与**仓库维护清理**两方面：

- **功能迭代与修复**：
  - **微信多账号支持**：PR [#2883](https://github.com/sipeed/picoclaw/pull/2883) 已合并，支持动态识别 `weixin_*` 配置，解决了多账号场景下的需求。
  - **前端体验优化**：PR [#2933](https://github.com/sipeed/picoclaw/pull/2933) 已合并，为代码块增加了行号显示与自动换行开关，提升了聊天与技能查看的代码阅读体验。
  - **历史记录修复**：PR [#2946](https://github.com/sipeed/picoclaw/pull/2946) 修复了历史记录加载时 `created_at` 时间戳丢失的问题，确保会话时间线的准确性。

- **积压清理**：
  - 维护者今日集中关闭了约 10 个标记为 `[stale]` 的陈旧 PR（如 Telegram Business mode、Yocto layer 支持等），部分功能（如 Telegram Guest mode, Feishu 动态命名）可能需要原作者重新提交或由社区接手，这表明项目正在为下一阶段的开发“减负”。

## 4. 社区热点
今日社区讨论焦点集中在**版本发布节奏**与**OAuth 接入问题**：

- **[Issue #2952](https://github.com/sipeed/picoclaw/issues/2952)**：用户反馈“好久没发新版本”，并指出了三个具体痛点：`exec` 命令的 actions.run 默认参数问题、QQ 渠道的无限重启 Bug、以及模型配置界面的 Key 复用体验问题。这反映了用户对正式版发布的迫切需求。
- **[Issue #2674](https://github.com/sipeed/picoclaw/issues/2674)**：关于 Codex OAuth 返回空响应的问题持续发酵，获得了 4 个 👍。今日新增的 Issue #2953 进一步分析了原因，社区正在积极定位流式事件解析的 Bug。

## 5. Bug 与稳定性
今日报告的关键 Bug 主要涉及**特定渠道崩溃**与**模型兼容性**，部分已有修复方案：

1.  **[严重] QQ 渠道无限重启** (Issue [#2952](https://github.com/sipeed/picoclaw/issues/2952))
    - 现象：重启成功后发送任意信息会再次触发重启，需清空上下文才能停止。
    - 状态：**待修复**，严重影响 QQ 渠道可用性。

2.  **[严重] OpenAI Codex OAuth 空响应** (Issue [#2953](https://github.com/sipeed/picoclaw/issues/2953) / [#2674](https://github.com/sipeed/picoclaw/issues/2674))
    - 现象：ChatGPT 后端流式返回数据时，PicoClaw 忽略了 `response.output_text.delta` 事件，导致空回复。
    - 状态：已有详细根因分析，**待提交修复代码**。

3.  **[中等] RISC-V 版本不可用** (Issue [#2887](https://github.com/sipeed/picoclaw/issues/2887))
    - 现象：.deb 版本在 RISC-V 架构下使用 OpenAI 模型报错。
    - 状态：**待确认**，可能涉及底层依赖或架构编译问题。

4.  **[已修复] 模型兼容性修复 PR**：
    - [PR #2951](https://github.com/sipeed/picoclaw/pull/2951)：修复 Web Search 工具在部分 OpenAI API 端点的 400 错误。
    - [PR #2948](https://github.com/sipeed/picoclaw/pull/2948)：修复 `claude-opus-4-7` 不支持 temperature 参数导致的 400 错误。
    - [PR #2947](https://github.com/sipeed/picoclaw/pull/2947)：修复 `claude-sonnet-4.6` 模型 ID 格式错误。

## 6. 功能请求与路线图信号
- **流式 HTTP 请求配置** (Issue [#2404](https://github.com/sipeed/picoclaw/issues/2404))：用户希望在配置文件中支持显式的 `streaming: true` 设置，以适配不同 LLM 后端。该 Issue 活跃度较高，符合项目作为 AI 代理的灵活性定位，有望在后续版本纳入。
- **Termux 环境支持** (PR [#2949](https://github.com/sipeed/picoclaw/pull/2949))：提交了自动检测 Termux SSL 证书路径的补丁。这标志着项目正在向移动端/嵌入式开发环境（如 Android 手机运行）扩展，是一个值得关注的生态方向。

## 7. 用户反馈摘要
- **发布焦虑**：用户对正式版的发布间隔感到焦虑，认为 Nightly 版本虽多但稳定性不如正式版，且部分 Bug 存活时间较长。
- **配置体验割裂**：用户指出前端模型配置界面与后端配置文件存在脱节，希望前端能更好地复用已保存的 Key 并提供下拉选择，减少手动输入错误。
- **Exec 工具行为**：部分模型在执行 `exec` 命令时默认不带 `actions:run` 参数，导致报错，用户希望优化默认行为以提高容错性。

## 8. 待处理积压
- **[PR #2551](https://github.com/sipeed/picoclaw/pull/2551) (Open)**：关于 Channel ID 标准化与解耦的大型重构 PR，已开启一月有余。该改动对多实例支持至关重要，建议维护者尽快 Review 合并，以解决多渠道并发的底层问题。
- **[Issue #2404](https://github.com/sipeed/picoclaw/issues/2404) (Open)**：流式传输配置请求已活跃近两个月，建议纳入近期开发计划。

---
*分析师注：项目目前处于功能快速迭代期，但在多渠道稳定性（特别是 QQ 和微信图片处理）方面存在回归风险。建议优先处理 OAuth 流式解析和 QQ 渠道的死循环问题，以提升用户信心。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-27)

## 1. 今日速览
NanoClaw 项目今日整体保持稳健的维护节奏，社区交互层面较为平静（无新 Issues），但代码贡献层面活跃度较高。过去24小时内共有 4 个 PR 更新，其中 1 个已关闭，3 个待合并，主要集中在提升系统健壮性与基础设施现代化上。贡献者重点修复了容器编排中的镜像缺失崩溃循环问题，并提前布局 Node.js 运行时升级，显示出项目对长期维护质量的高度关注。

## 2. 版本发布
无。

## 3. 项目进展
今日项目进展主要围绕**稳定性修复**与**基础设施维护**展开，成功解决了容器热更新与部署环境兼容性问题：

*   **容器热更新修复 ([PR #2622](https://github.com/nanocoai/nanoclaw/pull/2622) - CLOSED):** 修复了 Marketplace 技能/人设更新后容器不重启导致配置未生效的问题。此前 `handleProvision` 更新数据库后，运行中的容器无法读取最新配置，该 PR 确保了配置变更能即时反馈，提升了动态配置的实时性。
*   **部署健壮性增强 ([PR #2620](https://github.com/nanocoai/nanoclaw/pull/2620) - OPEN):** 针对与 Dokploy 等容器管理平台共存的场景，增加了镜像缺失的自愈检查机制。在 `spawnContainer` 前自动检测并重建缺失镜像，避免了因镜像被清理导致的启动崩溃循环。
*   **跨平台兼容性优化 ([PR #2621](https://github.com/nanocoai/nanoclaw/pull/2621) - OPEN):** 引入 `.gitattributes` 强制 Shell 脚本使用 LF 换行符，解决了 Windows 环境下默认 CRLF 导致脚本执行失败的问题，降低了跨平台开发的门槛。

## 4. 社区热点
由于今日无新开 Issue，社区讨论主要集中在 PR 的技术实现细节上：

*   **[PR #2608](https://github.com/nanocoai/nanoclaw/pull/2608)**：关于 GitHub Actions 运行时升级的讨论最受关注。作者 @IamAdamJowlett 提前将 Node 20 actions 升级至 v5 (Node 24)，以应对 2026 年 6 月的弃用期限。这反映了社区对 CI/CD 前瞻性维护的重视，确保构建流水线在未来一年的稳定性。
*   **[PR #2620](https://github.com/nanocoai/nanoclaw/pull/2620)**：针对 Docker 镜像被意外清理的场景提出了“自愈”方案，反映了用户在复杂部署环境（如混用 Dokploy）下的真实痛点。

## 5. Bug 与稳定性
今日报告与修复的 Bug 主要集中在部署与运行环境，均已提交修复方案：

*   **[严重] 容器启动崩溃循环 ([PR #2620](https://github.com/nanocoai/nanoclaw/pull/2620)):**
    *   **问题：** 在使用 Dokploy 等工具时，Docker 镜像可能被日常清理任务误删，导致 NanoClaw 容器启动失败并陷入崩溃循环。
    *   **状态：** 已提交 Fix PR，待合并。
*   **[中等] 容器配置热更新失效 ([PR #2622](https://github.com/nanocoai/nanoclaw/pull/2622)):**
    *   **问题：** 通过 "Use this agent" 更新模板技能后，数据库已更新但运行中的容器未重启，导致配置不生效。
    *   **状态：** PR 已关闭（推测已合并修复）。
*   **[低] Windows 下脚本执行错误 ([PR #2621](https://github.com/nanocoai/nanoclaw/pull/2621)):**
    *   **问题：** Windows 环境下拉取代码后，Shell 脚本因 CRLF 换行符执行失败。
    *   **状态：** 已提交 Fix PR，待合并。

## 6. 功能请求与路线图信号
*   **容器编排与第三方工具集成：** PR #2620 和 #2622 暗示项目正在被更复杂的生产环境采用（如与 Dokploy 集成）。未来的路线图可能会加强对第三方容器管理平台的支持，或优化容器生命周期的管理策略（如热重载、镜像保活）。
*   **基础设施现代化：** PR #2608 表明项目正在积极跟进上游依赖（Node.js/GitHub Actions）的版本迭代，这是项目长期可维护性的重要信号。

## 7. 用户反馈摘要
从 PR 描述中提取的隐性反馈显示：
*   **部署环境多样性：** 用户 @matmartinez 反馈在 Dokploy 环境下运行 NanoClaw 时遇到镜像管理冲突，表明用户群中存在将 NanoClaw 作为更大型服务编排一部分的使用场景。
*   **开发体验痛点：** 用户 @GarethWright 提交的 PR #2621 指出 Windows 开发者面临脚本换行符问题，说明项目有一定比例的 Windows 用户群体，且对跨平台一致性有较高需求。

## 8. 待处理积压
*   **待合并 PRs：** 目前有 3 个待合并的 PR ([#2608](https://github.com/nanocoai/nanoclaw/pull/2608), [#2621](https://github.com/nanocoai/nanoclaw/pull/2621), [#2620](https://github.com/nanocoai/nanoclaw/pull/2620))，涉及 CI 升级、Windows 兼容性修复和关键启动 Bug 修复。建议维护者优先合并 #2620 以解决严重稳定性问题。
*   **Issues 清单：** 过去24小时无活跃 Issues，建议关注潜在的未报告问题或进行用户调研以激活社区反馈。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-27)

## 1. 今日速览
NullClaw 项目今日整体活跃度处于**低水平维持状态**，无新增 Issues 或版本发布。过去 24 小时内，项目重点在于现有代码库的维护与构建系统的现代化适配。一个关于网络传输错误处理的关键修复 PR (#891) 已被关闭，显示出团队在提升系统可观测性方面的持续投入。同时，针对 Zig 0.16.0 的 Nix 构建修复 PR (#935) 仍处于待合并状态，预示着项目基础架构正在向新版本语言标准对齐。整体项目健康度稳定，处于增量改进阶段。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日项目主要推进了错误处理机制的精细化与构建环境的兼容性更新：

*   **网络错误处理优化 ([PR #891](https://github.com/nullclaw/nullclaw/pull/891) - CLOSED):**
    合并了关于保留 curl 探针传输失败细节的修复。此前，OpenAI 兼容提供者路径中的健康检查可能会将特定的网络错误（如 DNS 错误、连接超时、TLS 错误等）笼统合并。此次更新修复了这一问题，现在系统能够保留并返回 `CurlDnsError`、`CurlTimeout` 等具体的错误类型，极大地提升了故障排查的准确性和系统的健壮性。

*   **构建系统现代化适配 ([PR #935](https://github.com/nullclaw/nullclaw/pull/935) - OPEN):**
    社区贡献者提交了针对 Nix 构建系统的修复，更新了 lockfiles 以支持 Zig 0.16.0。虽然 `flake.nix` 之前已声明支持，但旧的 lock 文件导致构建失败。该 PR 修复了这一阻塞问题，确保了 Nix 环境下开发者的构建体验。

## 4. 社区热点
今日社区讨论较为平缓，无新增高热度 Issues。

*   **关注点:** 唯一的活跃点在于 [PR #935](https://github.com/nullclaw/nullclaw/pull/935)，虽然没有大量评论，但其修复的问题（Zig 0.16.0 构建失败）对于使用 Nix 开发环境的贡献者属于阻塞性问题，反映了社区对构建工具链及时跟进的强诉求。

## 5. Bug 与稳定性
今日无新报告的运行时崩溃或严重 Bug，但有一个已修复的稳定性相关改进：

*   **[已修复] 传输错误细节丢失 ([PR #891](https://github.com/nullclaw/nullclaw/pull/891)):**
    *   **严重程度:** 中。
    *   **详情:** 在 Provider 健康检查中，特定的网络传输失败被错误地归纳为通用错误，导致难以定位具体的网络问题（如区分 DNS 解析失败与连接超时）。该问题现已通过保留原始 Curl 错误类型得到修复。

*   **[待修复] Nix 构建阻断 ([PR #935](https://github.com/nullclaw/nullclaw/pull/935)):**
    *   **严重程度:** 中（仅影响 Nix 用户）。
    *   **详情:** Zig 0.16.0 环境下 Nix 构建中断，已有修复 PR 等待合并。

## 6. 功能请求与路线图信号
今日无显式的新功能请求，但从代码合并动向可窥见技术演进路线：

*   **精细化错误处理:** [PR #891](https://github.com/nullclaw/nullclaw/pull/891) 的合并表明项目正在加强作为 AI 网关或代理中间件的“可观测性”能力，未来的版本可能会在此基础上提供更详尽的日志和监控指标。
*   **语言版本跟进:** [PR #935](https://github.com/nullclaw/nullclaw/pull/935) 暗示项目正在积极适配 Zig 0.16.0，这可能预示着下一阶段会有更多依赖新语言特性的性能优化或重构。

## 7. 用户反馈摘要
由于今日无新增 Issue 且 PR 评论较少，暂无直接的用户痛点反馈。从维护者 @vernonstinebaker 合并的 PR 来看，团队目前更侧重于提升底层的稳定性和开发者的构建体验，侧面反映出项目处于成熟打磨期而非快速功能扩张期。

## 8. 待处理积压
*   **[重要] Zig 0.16.0 Nix 构建失败 ([PR #935](https://github.com/nullclaw/nullclaw/pull/935)):**
    该 PR 已创建一天，目前仍处于 Open 状态。鉴于其直接解决了 Nix 环境下的构建阻断问题，建议维护者尽快审核并合并，以免影响 Nix 用户的开发进度。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-27)

## 1. 今日速览
IronClaw 项目今日保持极高的开发活跃度，共更新 50 个 PR（其中 16 个已合并）和 15 个 Issue。项目刚刚发布了 **v0.29.0** 版本，新增了企业微信渠道支持和外部工具 API 等关键功能。当前开发重心明显向 **"Reborn" 架构迁移**倾斜，涉及认证、签名和生命周期管理的底层重构。尽管功能迭代迅速，但社区出现关于 Crate 发布滞后导致下游依赖受困的严重反馈，需引起核心团队重视。

## 2. 版本发布
### [ironclaw-v0.29.0](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.29.0) (2026-05-26)
本次更新主要增强了渠道连接能力和 API 互操作性：
- **新功能**:
  - **新增企业微信 渠道**：扩展了 AI 助手在企业通讯工具的落地场景 ([#2394](https://github.com/nearai/ironclaw/pull/2394))。
  - **Responses API 支持外部工具**：Web 网关现已支持在 Responses API 中调用外部提供的工具，增强了扩展性 ([#3122](https://github.com/nearai/ironclaw/pull/3122))。
  - **Gateway 日志下载**：网关增加了日志下载按钮，提升了运维排查便利性 ([#3588](https://github.com/nearai/ironclaw/pull/3588))。

## 3. 项目进展
今日共有 **16 个 PR 合并/关闭**，主要集中在 Reborn 架构的基础设施建设与 CLI 工具链完善：
- **Reborn 架构推进**:
  - **HTTP 能力增强**: PR [#4103](https://github.com/nearai/ironclaw/pull/4103) 成功合并，为 Reborn 内置 HTTP 启用了 `save_to` 功能，并统一了文件系统写入权限管理。
  - **CLI 生命周期管理**: PR [#4099](https://github.com/nearai/ironclaw/pull/4099) 合并，引入了 `ironclaw-reborn extension` 命令行工具，支持本地开发环境的扩展搜索、安装和激活，极大改善了开发者体验。
  - **UI 与路由**: PR [#4095](https://github.com/nearai/ironclaw/pull/4095) 修复了 Reborn CLI 技能列表的连接问题。
- **问题清理**: 关闭了 Issues [#3889](https://github.com/nearai/ironclaw/issue/3889) 和 [#3886](https://github.com/nearai/ironclaw/issue/3886)，表明 Reborn 架构中的审批交互服务与 WebUI 移植工作已完成阶段性目标。

## 4. 社区热点
今日讨论最活跃的议题集中在依赖发布滞后与底层架构安全性：
- **[Issue #3259](https://github.com/nearai/ironclaw/issue/3259) [OPEN]**: **Crate 发布严重滞后**。
  - **现状**: GitHub 已发布 v0.27.0，但 crates.io 停留在 v0.24.0。
  - **诉求**: 下游依赖方因 wasmtime 28.x 的 CVE 漏洞被迫锁定版本，但目前无法获取包含修复的新版本。
  - **分析**: 这是目前社区反馈最强烈的阻碍性问题，直接影响了使用者的安全性。
- **PR 系列**: 关于 **Attested Signing（认证签名）** 的一系列 PRs（如 [#4104](https://github.com/nearai/ironclaw/pull/4104), [#3995](https://github.com/nearai/ironclaw/pull/3995)）正在接受密集审查。这涉及重构底层的授权与签名存储机制，是 Reborn 架构的安全基石。

## 5. Bug 与稳定性
今日报告了数个影响开发体验与系统稳定性的 Bug，其中 CI 稳定性问题尤为突出：
1.  **[P0] CI 信号掩蔽** - [Issue #4085](https://github.com/nearai/ironclaw/issue/4085)
    - **问题**: 生产环境构建器未正确连接 `TenantSandboxProcessPort`，导致组合测试永久失败，掩盖了真实的 CI 错误信号。
    - **状态**: OPEN，暂无修复 PR。
2.  **[P1] 后台子智能体结果丢失** - [Issue #4084](https://github.com/nearai/ironclaw/issue/4084)
    - **问题**: Background 模式的子智能体完成后，结果无法传递给父智能体，导致流程中断。
    - **状态**: OPEN。
3.  **[P2] 安装向导环境变量覆盖失效** - [Issue #4106](https://github.com/nearai/ironclaw/issue/4106)
    - **问题**: 设置向导未读取 `SANDBOX_IMAGE` 环境变量，强制探测硬编码默认值。
    - **状态**: OPEN。
4.  **安全隐患**: [Issue #4082](https://github.com/nearai/ironclaw/issue/4082) 指出凭证路径中将 `SecretString` 强制解包为 `String` 存在风险；[Issue #4081](https://github.com/nearai/ironclaw/issue/4081) 建议签名审批门不应设为 `Option` 以防绕过。

## 6. 功能请求与路线图信号
- **多租户与生命周期管理**: Issue [#4091](https://github.com/nearai/ironclaw/issue/4091) 追踪了生产级多租户扩展生命周期的连接工作，结合已合并的 CLI 工具 PR，显示出项目正在为多租户云部署做最后的基础设施准备。
- **子智能体能力增强**: Issue [#4086](https://github.com/nearai/ironclaw/issue/4086) 提议添加 Coder/Explorer/Planner 等不同风格的子智能体，并结合 PR [#4100](https://github.com/nearai/ironclaw/pull/4100)（集成 GSuite），暗示项目正朝着**多角色协同 Agent** 方向演进。
- **Attested Signing 完整落地**: PR [#4104](https://github.com/nearai/ironclaw/pull/4104) 和 Issue [#4102](https://github.com/nearai/ironclaw/issue/4102) 表明项目正在强化 Trait 级别的授权过期强制执行，这是实现安全多租户的关键一步。

## 7. 用户反馈摘要
- **依赖获取困难**: 用户 [Issue #3259](https://github.com/nearai/ironclaw/issue/3259) 明确表达了对 Rust Crate 发布滞后的沮丧，导致无法及时规避底层依赖的安全漏洞。
- **安全合规关注**: 开发者对代码中的安全性细节（如 `SecretString` 解包、Optional Gate 绕过风险）进行了深度审计，表明该项目拥有较高水平的贡献者群体，对代码质量要求极高。

## 8. 待处理积压
- **[P0] Crates.io 发布阻塞**: Issue [#3259](https://github.com/nearai/ironclaw/issue/3259) 涉及下游安全更新，建议维护者优先处理发布流程问题。
- **[P1] EventStreamManager 收尾**: Issue [#3281](https://github.com/nearai/ironclaw/issue/3281) 和 [#3809](https://github.com/nearai/ironclaw/issue/3809) 涉及 Reborn 架构下的事件流与时间线重放功能，是 WebUI 功能完整性的关键，目前仍处于开启状态。
- **长期未决**: Issue [#4085](https://github.com/nearai/ironclaw/issue/4085) 导致的 CI 信号噪音可能会引入回归风险，需尽快修复测试构建逻辑。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-27)

## 1. 今日速览
LobsterAI 今日保持了较高的开发迭代速度，尽管无新版本发布和社区 Issue 动态，但代码库活跃度显著。团队主要集中在功能完善与体验优化上，**合并了 9 个 PR**，成功推进了渠道归因追踪和 HTML 分享等重要功能。修复重点覆盖了 Windows 平台的开发环境兼容性、Skill（技能）管理逻辑以及 Tool Loop 的稳定性。整体来看，项目处于功能增强与细节打磨阶段，代码提交频繁，项目健康度良好。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 9 个 PR 成功合并，显著推进了以下领域：

*   **新功能落地**：
    *   **渠道归因追踪**：PR [#1991](https://github.com/netease-youdao/LobsterAI/pull/1991) 已合并，实现了 `keyfrom` 渠道归因功能，支持本地持久化 `firstKeyfrom` 和 `latestKeyfrom`，并在构建时打包渠道元数据，为后续用户来源分析打下基础。
    *   **HTML 分享功能**：PR [#2056](https://github.com/netease-youdao/LobsterAI/pull/2056) 已合并，涉及 renderer、docs、main、cowork 及 artifacts 模块，扩展了内容的分享与导出能力。

*   **体验优化与修复**：
    *   **Windows 兼容性**：PR [#2059](https://github.com/netease-youdao/LobsterAI/pull/2059) 修复了 Windows 开发模式下 OAuth 回调被误判为文件路径的问题，改善了 Windows 平台开发者的调试体验。
    *   **Skill 管理优化**：PR [#2055](https://github.com/netease-youdao/LobsterAI/pull/2055) 允许删除 Marketplace 安装的技能，并默认关闭了 OpenClaw 技能同步以防状态覆盖；PR [#2052](https://github.com/netease-youdao/LobsterAI/pull/2052) 修复了切换模型时用户选中的 Skill 被错误清除的痛点。
    *   **稳定性修复**：PR [#2051](https://github.com/netease-youdao/LobsterAI/pull/2051) 和 [#2058](https://github.com/netease-youdao/LobsterAI/pull/2058) 针对 Tool Loop 和工具调用结果的宽限期进行了修正，提升了复杂任务流程的稳定性。

## 4. 社区热点
过去 24 小时内 Issues 列表无更新，社区讨论较为平淡。但在 PR 区，以下长期运行的 PR 近期有更新迹象，值得关注：
*   **PR [#1760](https://github.com/netease-youdao/LobsterAI/pull/1760) [OPEN]**: 支持自定义 Agent 使用图片头像（而非仅 Emoji）。该 PR 从 4 月开启至今，今日有更新动态，显示出团队正在推进这一高价值个性化功能。
*   **PR [#1773](https://github.com/netease-youdao/LobsterAI/pull/1773) [OPEN]**: 修复记忆条目编辑按钮的国际化缺失问题，属于细节完善，今日已更新。

## 5. Bug 与稳定性
今日修复了多个影响用户体验的 Bug，暂无新报告的严重崩溃问题：

*   **【已修复】数据丢失风险**：切换模型时临时选中的 Skill 被清除。
    *   链接：[PR #2052](https://github.com/netease-youdao/LobsterAI/pull/2052)
    *   影响：用户在工作流切换模型后无需重新配置 Skill，体验更连贯。
*   **【已修复】Windows 开发环境阻塞**：Dev 模式下 OAuth 登录回调失败。
    *   链接：[PR #2059](https://github.com/netease-youdao/LobsterAI/pull/2059)
    *   影响：仅影响 Windows 平台开发调试，不影响生产环境。
*   **【已修复】状态同步冲突**：OpenClaw Skill 同步导致状态意外覆盖。
    *   链接：[PR #2055](https://github.com/netease-youdao/LobsterAI/pull/2055)
    *   影响：通过 Feature Flag 控制同步行为，防止配置冲突。
*   **【待合并】Windows 更新机制隐患**：VBScript 启动器已废弃，需替换为 PowerShell。
    *   链接：[PR #2057](https://github.com/netease-youdao/LobsterAI/pull/2057) (OPEN)
    *   说明：旨在提升应用更新机制的现代化与安全性，目前尚在审核中。

## 6. 功能请求与路线图信号
*   **Agent 个性化增强**：PR [#1760](https://github.com/netease-youdao/LobsterAI/pull/1760) 的活跃表明项目正在强化 Agent 的视觉表现力，支持图片头像是多 Agent 场景下提升辨识度的关键一步，预计将在近期版本合入。
*   **渠道运营能力**：随着 PR [#1991](https://github.com/netease-youdao/LobsterAI/pull/1991) 的合入，项目开始内置渠道追踪能力，暗示官方可能正在准备更精细化的运营推广策略或合作伙伴对接。

## 7. 用户反馈摘要
由于今日无新开 Issue，用户反馈主要隐含在 PR 提交记录的开发者自述中：
*   **Skill 管理灵活性需求**：开发者指出 Marketplace 安装的技能之前无法删除，且同步逻辑存在冲突。这反映出用户在使用预置技能时希望有更高的自主控制权，不希望被“锁死”。
*   **模型切换痛点**：PR #2052 的修复揭示了用户在“切换模型”这一高频操作中曾遭遇配置丢失的问题，这是典型的多模型切换场景下的体验摩擦。

## 8. 待处理积压
*   **PR [#1760](https://github.com/netease-youdao/LobsterAI/pull/1760)**：该 PR 涉及 Agent 头像核心功能，已开启较长时间，建议维护者尽快 Review 并推进合并，以满足个性化需求。
*   **PR [#2057](https://github.com/netease-youdao/LobsterAI/pull/2057)**：涉及 Windows 更新机制的底层重构，建议优先处理，避免旧脚本在部分系统环境下出现兼容性问题。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-27)

## 1. 今日速览
Moltis 项目今日整体活跃度平稳，主要集中在功能迭代与生态合作探索。过去24小时内共有 2 条 Issue 更新和 2 条 PR 更新，未发布新版本。社区方面出现了外部商业托管服务的合作意向，表明项目影响力正在向外延伸。技术层面，核心贡献者正致力于深化 Agent 能力边界的定义与内存系统的可配置性，但同时也暴露了前端交互逻辑中存在的细微 Bug。整体来看，项目处于稳步迭代阶段，架构优化与生态建设并行。

## 2. 版本发布
无。

## 3. 项目进展
今日 PR 动态主要围绕架构重构与内存系统增强展开，推进了项目的模块化程度。

*   **关闭/合并 PR:**
    *   **[#1049 feat: agents as capability boundaries (MCP, sandbox, skills)](https://github.com/moltis-org/moltis/pull/1049)**: 该 PR 由核心贡献者 @penso 提交并于今日关闭。它提出了一项重要的架构变更，将 Agent 定义为核心能力边界，每个 Agent 预设可独立控制模型、MCP 服务器、沙箱策略和技能。此举将 Agent 从单纯的对话实体转变为权限与能力的集合体，支持针对不同用户（如儿童与成人）分配不同 Agent，显著提升了多租户场景下的安全性与灵活性。

*   **待合并 PR:**
    *   **[#1074 (memory): Configurable embedding dimensions with safe auto-reindex](https://github.com/moltis-org/moltis/pull/1074)**: 由 @soyelmismo 提交。该 PR 为 OpenAI 兼容的 embedding 提供商增加了可选的维度配置功能，并在维度变更时引入了安全的自动重索引机制。此功能解决了不同 Embedding 模型迁移时的兼容性痛点，有望提升系统在向量检索方面的灵活性。

## 4. 社区热点
今日社区互动主要集中在商业合作与应用反馈两方面，反映了项目在商业化潜力与用户体验上的双重关注。

*   **最活跃 Issue:**
    *   **[#1076 Partnership inquiry — MyClaw.ai × Moltis](https://github.com/moltis-org/moltis/issues/1076)**: 作者 @LeoYeAI 发起了商业合作咨询。MyClaw.ai 作为一个 OpenClaw 的托管云服务，注意到了 Moltis 作为一个基于 Rust 的高安全性个人 Agent 服务器的潜力（Star 数已破 2.7K）。这表明 Moltis 的技术架构（单二进制、沙箱化）已获得外部商业实体的认可，社区生态正从纯技术讨论向商业落地延伸。

## 5. Bug 与稳定性
今日新增 1 个功能性 Bug 报告，暂未发现严重崩溃或安全漏洞。

*   **中等优先级:**
    *   **[#1075 [Bug]: "fork" forks at prompt, not response.](https://github.com/moltis-org/moltis/issues/1075)**: 用户 @vvuk 报告了一个交互逻辑问题。在 "Fork"（分支/复制）对话时，系统当前是基于 Prompt（提示词）进行 Fork，而非用户预期的 Response（回复）。这可能导致上下文状态不一致。该 Bug 影响对话分支的核心体验，目前尚无修复 PR，建议维护者关注。

## 6. 功能请求与路线图信号
*   **内存系统灵活性:** 基于 PR #1074 的提交，可以看出社区对向量数据库的兼容性有更高要求。支持自定义 Embedding 维度并自动重索引是一个强信号，预示着项目正在为支持更多种类的 LLM 模型（尤其是不同维度的本地模型）做准备。
*   **多角色权限管理:** 已关闭的 PR #1049 揭示了项目路线图正朝着“多 Agent 协作与权限隔离”方向发展，这可能是为后续的家庭场景或企业场景落地做架构铺垫。

## 7. 用户反馈摘要
*   **正面反馈:** 外部合作伙伴评价 Moltis 为 "serious technical project"，认可其 Rust 实现的安全性与单二进制部署的便捷性。
*   **痛点反馈:** 用户在使用高级交互功能（如 Fork）时，发现实际行为与预期不符（基于 Prompt 而非 Response Fork），这反映出部分 UI/UX 交互逻辑仍需打磨，以满足精细化对话管理的需求。

## 8. 待处理积压
*   **PR 审核提醒:** PR **[#1074](https://github.com/moltis-org/moltis/pull/1074)** 涉及关键的数据索引逻辑，目前处于 Open 状态，建议维护者尽快进行代码审查与测试，以确认自动重索引机制的稳定性。
*   **Bug 响应提醒:** Issue **[#1075](https://github.com/moltis-org/moltis/issues/1075)** 涉及核心对话交互逻辑，目前暂无官方回复，建议维护者确认问题复现步骤并纳入修复计划。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-05-27)

## 1. 今日速览
CoPaw (QwenPaw) 项目今日保持高度活跃，社区反馈与代码迭代速度显著加快。过去24小时内，项目共处理了 **32 条 Issues**（关闭 10 条）和 **27 条 PRs**（合并/关闭 8 条），显示出维护团队对社区反馈的快速响应能力。虽然今日无新版本发布，但多项关键修复（如构建失败、音频处理）已合并，且针对前端体验优化（如时间戳显示、Coding模式增强）和后端扩展性（插件化 Channel）的 PR 正在积极审核中。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **8 个 PR 被合并或关闭**，主要集中在构建修复和多媒体处理上，显著提升了系统的健壮性。

*   **构建与编译修复**
    *   [PR #4717](https://github.com/agentscope-ai/QwenPaw/pull/4717): 修复了 Console 端 Monaco Editor 类型声明缺失导致的 TypeScript 构建失败问题，确保前端项目可正常编译。
    *   [PR #4695](https://github.com/agentscope-ai/QwenPaw/pull/4695): 升级了 `@agentscope-ai/chat` 依赖，修复了对话停止和工具显示相关的已知问题。

*   **多媒体与频道能力增强**
    *   [PR #1896](https://github.com/agentscope-ai/QwenPaw/pull/1896) & [PR #4383](https://github.com/agentscope-ai/QwenPaw/pull/4383): 修复了 Telegram 频道音频内容的处理问题，支持顶层 `data` 字段，解决了语音消息无法识别的 Bug。

*   **正在进行的关键 PR (Open)**
    *   [PR #4693](https://github.com/agentscope-ai/QwenPaw/pull/4693): 实现了插件注册自定义 Channel 的功能，允许通过 Schema 驱动 UI，无需重写前端即可扩展频道，大幅提升扩展性。
    *   [PR #4716](https://github.com/agentscope-ai/QwenPaw/pull/4716): Coding 模式 Diff 编辑器增加细粒度的 "Keep/Undo" 按钮及智能复制功能，优化代码编辑体验。
    *   [PR #4699](https://github.com/agentscope-ai/QwenPaw/pull/4699): 响应社区需求，在对话界面增加每条消息的时间戳显示。

## 4. 社区热点
今日社区讨论焦点集中在 UI 交互体验与模型兼容性上，以下议题引发了较高关注度：

*   **[Issue #4644](https://github.com/agentscope-ai/QwenPaw/issues/4644) [CLOSED]**: **Console UI 工具调用不实时显示**。
    *   **热度**: 18 条评论。
    *   **诉求**: 用户反馈在 Web 控制台中，除了 `read_file` 外的大部分工具调用无法实时显示，需刷新页面才能看到。该问题已确认并修复（关联 PR #4695），反映出用户对实时反馈流的高敏感度。
*   **[Issue #4680](https://github.com/agentscope-ai/QwenPaw/issues/4680) [CLOSED]**: **修改技能名导致智能体丢失**。
    *   **热度**: 7 条评论。
    *   **诉求**: 用户在修改自定义技能名称后遇到配置解析错误，导致重启后智能体“消失”（可能被过滤或加载失败）。这暴露了配置文件容错机制和错误提示的不足，用户对此感到焦虑（“啊啊啊啊啊”）。
*   **[Issue #4625](https://github.com/agentscope-ai/QwenPaw/issues/4625) [OPEN]**: **MiniMax-M2.5 模型思考过程 XML 格式不兼容**。
    *   **热度**: 5 条评论。
    *   **诉求**: 用户使用 MiniMax 模型时，思考过程返回的 XML 格式导致指令执行中断，严重影响体验。这反映了非 OpenAI 标准模型接入时的兼容性痛点。

## 5. Bug 与稳定性
今日报告了若干影响使用体验的关键 Bug，其中包含一个潜在的安全风险。

*   **严重**
    *   **[潜在安全风险] [Issue #4709](https://github.com/agentscope-ai/QwenPaw/issues/4709)**: `ToolGuard` 绕过漏洞，允许智能体在交互式会话中读取进程环境变量。目前尚无对应 Fix PR。
    *   **[崩溃] [Issue #4704](https://github.com/agentscope-ai/QwenPaw/issues/4704)**: macOS 升级至 Tahoe 26.5 后，桌面端在接收飞书消息时崩溃 (SIGSEGV)。
    *   **[数据丢失] [Issue #4666](https://github.com/agentscope-ai/QwenPaw/issues/4666)**: 新建会话后，Models 配置页面丢失且无法加载，只能重启恢复。

*   **中等**
    *   **[功能受阻] [Issue #4712](https://github.com/agentscope-ai/QwenPaw/issues/4712)**: v1.1.9-beta.1 版本无法运行本地 CLI 命令（如飞书 CLI），怀疑是子进程网络隔离导致。
    *   **[稳定性] [Issue #4697](https://github.com/agentscope-ai/QwenPaw/issues/4697)**: 工作区零停机重载时，微信轮询线程崩溃且无法自动恢复。
    *   **[交互] [Issue #4714](https://github.com/agentscope-ai/QwenPaw/issues/4714)**: 推理未结束时，新任务无法入队，且输入框无光标，体验较差。

## 6. 功能请求与路线图信号
用户对企业级功能和多模态体验提出了明确需求，部分需求已有 PR 跟进。

*   **企业级与多用户支持**
    *   [Issue #4702](https://github.com/agentscope-ai/QwenPaw/issues/4702): 用户呼吁增加 **RBAC 权限管理**和多用户支持，表明 CoPaw 正在被纳入企业选型清单。
*   **会话管理增强**
    *   [Issue #4703](https://github.com/agentscope-ai/QwenPaw/issues/4703): 建议增加原生的 **Fork/Rewind/Regenerate** 功能，允许分支对话和回滚。这是高级用户常用的功能，目前可能依赖插件或缺失。
    *   [Issue #4662](https://github.com/agentscope-ai/QwenPaw/issues/4662): 请求增加消息时间戳。-> **已响应**: [PR #4699](https://github.com/agentscope-ai/QwenPaw/pull/4699) 已提交。
*   **扩展性与插件化**
    *   [Issue #4642](https://github.com/agentscope-ai/QwenPaw/issues/4642): 建议增强插件扩展能力（如非侵入式修改 Memory、Hook 等）并支持工作目录隔离。这与 PR #4693 (插件注册 Channel) 的方向一致。
*   **新模型支持**
    *   [Issue #4715](https://github.com/agentscope-ai/QwenPaw/issues/4715): 建议内置小米 MiMo Token Plan 作为 Provider。

## 7. 用户反馈摘要
从评论中提炼出以下典型用户画像与痛点：

*   **配置容错性差**: 用户在使用自定义技能或修改配置时，极易因格式错误导致智能体不可见或服务崩溃 ([Issue #4680](https://github.com/agentscope-ai/QwenPaw/issues/4680))，用户对此感到无助，希望能有更好的错误提示和恢复机制。
*   **多模型适配痛点**: 第三方模型（如 MiniMax）的特殊输出格式（如 XML 思考链）常导致解析失败，用户对官方适配的呼声很高 ([Issue #4625](https://github.com/agentscope-ai/QwenPaw/issues/4625))。
*   **工作流打断**: 前端 UI 的刷新延迟、工具调用不显示 ([Issue #4644](https://github.com/agentscope-ai/QwenPaw/issues/4644)) 以及输入框无光标等问题，严重干扰了用户的连续工作流。

## 8. 待处理积压
*   **长期未响应**: 无特别明显的长期无人问津 Issue，大部分活跃 Issue 均在近期有更新。
*   **高优先级待处理**:
    *   [Issue #4625](https://github.com/agentscope-ai/QwenPaw/issues/4625): MiniMax 兼容性问题影响核心使用，急需修复。
    *   [Issue #4709](https://github.com/agentscope-ai/QwenPaw/issues/4709): 安全漏洞需尽快确认并修复。
    *   [PR #4693](https://github.com/agentscope-ai/QwenPaw/pull/4693): 插件化 Channel 功能对生态建设意义重大，建议优先 Review 合并。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-05-27)

## 1. 今日速览
过去 24 小时，ZeptoClaw 项目处于**自动化维护模式**，主要动态集中在依赖项的持续更新上。项目未产生新的用户 Issue，也无人工提交的功能性代码合并，显示出开发活跃度暂时处于低位。Dependabot 提交了 14 个待处理的依赖升级 PR，并关闭了 2 个陈旧的依赖更新请求。整体来看，项目当前主要精力在于保持技术栈的现代度与安全性，等待下一阶段功能性开发的启动。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 2 个 Pull Requests 被关闭，均有新的替代 PR 产生：

*   **PR #578 [CLOSED]**: 关闭了旧版 Astro 依赖更新（6.1.6 to 6.3.1），该任务已由新的 PR #607 接替。
    *   链接: [qhkm/zeptoclaw PR #578](https://github.com/qhkm/zeptoclaw/pull/578)
*   **PR #572 [CLOSED]**: 关闭了旧版 Starlight 依赖更新，该任务已由新的 PR #599 接替。
    *   链接: [qhkm/zeptoclaw PR #572](https://github.com/qhkm/zeptoclaw/pull/572)

**分析**: 这两个关闭操作清理了积压的自动合并请求，表明维护者可能在筛选并处理自动化产生的噪音，确保依赖升级路径的准确性。

## 4. 社区热点
过去 24 小时内，项目无新增 Issue，所有活跃的 PR 均由 `@dependabot[bot]` 发起，无用户评论或点赞数据。
*   **状态**: 社区互动静默，暂无热点讨论。

## 5. Bug 与稳定性
过去 24 小时内未收到新的 Bug 报告或崩溃反馈。
*   **潜在风险提示**: 虽然无新报错，但大量待合并的依赖更新（尤其是 Rust 核心库和 Docker 基础镜像）需尽快验证，以免长期积压导致依赖冲突。

## 6. 功能请求与路线图信号
*   **信号**: 今日无新功能请求。
*   **推断**: 从依赖更新的范围（Docker、Rust 后端、Astro 文档站）来看，项目架构较为完善，当前阶段主要处于维护期，缺乏显性的路线图更新信号。

## 7. 用户反馈摘要
由于今日无新增 Issues 或评论，暂无用户反馈可供摘要。

## 8. 待处理积压
当前有 **14 个待合并 (OPEN)** 的 PR，全部为依赖更新，建议维护者按优先级分批处理：

*   **核心基础设施 (优先级高)**:
    *   [PR #596] `rust:1.93-slim-trixie` -> `1.95-slim-trixie` (Docker 基础镜像大版本跳跃，需重点测试): [qhkm/zeptoclaw PR #596](https://github.com/qhkm/zeptoclaw/pull/596)
    *   [PR #595] Debian 基础镜像更新: [qhkm/zeptoclaw PR #595](https://github.com/qhkm/zeptoclaw/pull/595)
*   **Rust 后端依赖**:
    *   [PR #606] tower-http 更新 (0.6.8 -> 0.6.10): [qhkm/zeptoclaw PR #606](https://github.com/qhkm/zeptoclaw/pull/606)
    *   [PR #603] mail-parser 更新: [qhkm/zeptoclaw PR #603](https://github.com/qhkm/zeptoclaw/pull/603)
    *   [PR #605] clap 更新: [qhkm/zeptoclaw PR #605](https://github.com/qhkm/zeptoclaw/pull/605)
*   **前端与文档**:
    *   [PR #608] eslint 更新 (10.0.2 -> 10.3.0): [qhkm/zeptoclaw PR #608](https://github.com/qhkm/zeptoclaw/pull/608)
    *   [PR #607] & [PR #600] Astro 框架更新: [qhkm/zeptoclaw PR #607](https://github.com/qhkm/zeptoclaw/pull/607) | [qhkm/zeptoclaw PR #600](https://github.com/qhkm/zeptoclaw/pull/600)

---
**分析师建议**: 建议维护者优先处理 Docker 基础镜像（Rust 1.95）的升级，随后批量合并其余低风险的依赖库更新，以减少技术债务积压。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-05-27)

**项目地址：** [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. 今日速览
EasyClaw 项目今日整体活跃度较低，Issues 与 PR 板块均无新增或更新动态，社区交互暂时处于静默期。项目核心进展集中在产品迭代上，发布了 **v1.8.16** 新版本，重点优化了商业化订阅流程与账户管理体验。从更新内容来看，项目正在从核心功能构建向用户付费体验与系统稳定性方向演进。整体代码库健康度良好，无明显阻碍性缺陷报告。

### 2. 版本发布
今日发布新版本 **v1.8.16 (RivonClaw)**，本次更新聚焦于商业化变现能力的增强与账户体系健壮性提升。

*   **更新详情：**
    *   **商业化功能增强：** 新增了账单续费和套餐切换流程，支持订阅制与预付费 MAX 套餐在桌面端进行更灵活的续费操作，这将直接提升用户的付费留存率。
    *   **账户与提供商管理优化：** 改进了续费 UI 的清晰度，优化了桌面端 OAuth 恢复流程，提升了云密钥同步的可靠性，解决了账户管理层面的痛点。
    *   **安全性加固：** 提及 "Harden customer-"（具体内容截断，推测为加固客户数据安全或相关验证逻辑）。

*   **破坏性变更与迁移注意：**
    *   目前 Release Notes 未明确提及破坏性 API 变更。
    *   建议用户尽快更新至该版本以获得更稳定的 OAuth 登录体验和云同步服务，旧版本客户端可能在未来遇到兼容性问题。

*   **发布链接：** [v1.8.16 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.16)

### 3. 项目进展
过去 24 小时内项目合并/关闭的 PR 数量为 0。虽然无公开的 PR 动态，但 v1.8.16 版本的发布表明项目内部正在持续开发，且代码已通过测试并合并至主分支。当前阶段主要推进了**商业化支付模块**与**云端同步稳定性**的落地。

### 4. 社区热点
过去 24 小时内 Issues 更新数为 0，暂无热议话题或高互动 Issue。社区当前处于观望或使用反馈的积累期。

### 5. Bug 与稳定性
过去 24 小时内无新增 Bug 报告或崩溃反馈。结合 Release Notes 中提到的“更可靠的云密钥同步”和“OAuth 恢复”，推测开发团队主要在主动修复已知隐患，当前版本稳定性预期较高。

### 6. 功能请求与路线图信号
今日无新增功能请求。
**路线图判断：** 基于 v1.8.16 的发布内容，项目下一阶段的路线图明显侧重于**商业化闭环的完善**（续费/切换套餐）以及**多端同步体验**。预计未来版本将继续打磨桌面端体验，并可能推出更多针对付费用户的专属功能。

### 7. 用户反馈摘要
由于今日无 Issue 评论更新，暂无法提炼具体的用户痛点或场景反馈。但从版本迭代方向推断，用户此前可能遇到过“续费流程繁琐”或“OAuth 登录中断”等问题，本次更新应是对此类隐性痛点的集中回应。

### 8. 待处理积压
今日无新活跃 Issue，且暂无长期未响应的“僵尸” Issue 数据。建议维护者持续关注用户对新版 v1.8.16 支付流程的实际体验反馈，防止新功能上线后引发的潜在咨询积压。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*