# OpenClaw 生态日报 2026-04-30

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-30 03:29 UTC

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

# OpenClaw 项目动态日报 (2026-04-30)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，过去 24 小时内 Issues 与 PR 更新量均达到 **500 条**，显示出社区与开发团队的紧密互动。项目发布了 **v2026.4.27** 新版本，主要集成了 DeepInfra 提供商支持并增强了 Codex Computer Use 的桌面控制能力。然而，居高不下的待合并 PR 数量（473 条）与新增 Issue 数量（472 条）表明项目正处于功能快速迭代与稳定性维护的博弈期，社区反馈的回归问题（特别是内存与性能方面）值得维护者重点关注。

## 2. 版本发布
- **[v2026.4.27](https://github.com/openclaw/openclaw/releases/tag/v2026.4.27)**
  - **Highlights**:
    - **Codex Computer Use**: 增加了状态/安装命令、市场发现功能，并为 Codex-mode 桌面控制引入了 fail-closed MCP 检查，提升了自动化安全性。感谢 @pash-openai。
    - **DeepInfra Provider**: 新增 bundled provider，支持模型发现、媒体生成/编辑、TTS 及 embedding 功能。
  - **注意**: 此次更新涉及底层模型能力的扩展，建议用户更新后检查 `openclaw doctor` 以确认新的 provider 配置是否生效。

## 3. 项目进展
今日共有 **27 个 PR 被合并或关闭**，主要集中在稳定性修复与体验优化：

- **修复关键崩溃与回归**:
  - [PR #74785](https://github.com/openclaw/openclaw/pull/74785) (Closed): 修复了 2026.4.27 更新后 Telegram 等渠道消息体泄露内部占位符 `[assistant copied inbound metadata omitted]` 的问题。
  - [PR #55139](https://github.com/openclaw/openclaw/pull/55139) (Closed): 修复了 `resolveConsoleSettings()` 在启动时的无限递归调用问题。
  - [PR #60824](https://github.com/openclaw/openclaw/pull/60824) (Closed): 自动迁移旧版 `acp.stream` 配置，避免兼容性问题。

- **功能增强与重构**:
  - [PR #73476](https://github.com/openclaw/openclaw/pull/73476) (Open): 提议为 Tool 结果添加 `directReply` 标志，旨在让工具直接返回最终答案，跳过 LLM 的二次推理，显著降低延迟与成本。
  - [PR #74786](https://github.com/openclaw/openclaw/pull/74786) (Open): 增加 SDK `tools.invoke` RPC 支持，完善 Gateway 的策略控制。

## 4. 社区热点
今日讨论最热烈的问题集中在跨平台支持与核心稳定性：

- **[Issue #75](https://github.com/openclaw/openclaw/issues/75) [OPEN]**: **Linux/Windows 客户端需求**
  - **热度**: 👍 73 | 💬 101
  - **分析**: 这是社区长期关注的核心痛点。用户强烈希望能像 macOS 和移动端一样拥有原生的 Linux/Windows 应用，而不仅仅依赖 Web UI 或 Gateway。

- **[Issue #52875](https://github.com/openclaw/openclaw/issues/52875) [OPEN]**: **Session_send 回归故障**
  - **热度**: 💬 20
  - **分析**: 升级到 3-22 版本后主 Agent 无法联系子 Agent，`session_list` 结果异常。这是一个严重的功能性回归，阻碍了多 Agent 架构的使用。

- **[Issue #72338](https://github.com/openclaw/openclaw/issues/72338) [OPEN]**: **Gateway CPU 忙碌循环**
  - **热度**: 👍 3 | 💬 18
  - **分析**: Gateway 进入高 CPU 状态导致 Telegram 回复停滞，状态检测超时。性能问题已严重影响部分生产环境的可用性。

## 5. Bug 与稳定性
今日报告了多个高严重级别的 Bug，多涉及性能与资源管理：

| 严重程度 | Issue | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **严重** | [#45438](https://github.com/openclaw/openclaw/issues/45438) | **内存泄漏**: Session store cache 中的 `structuredClone` 导致原生内存泄漏，速率约 1GB/min。 | Open |
| **严重** | [#73532](https://github.com/openclaw/openclaw/issues/73532) | **Gateway 卡死**: Plugin loader 热循环阻塞 Node 事件循环，导致 Telegram 轮询超时。 | Open |
| **严重** | [#52875](https://github.com/openclaw/openclaw/issues/52875) | **回归**: Agent 间通信失败，`session_send` 无法找到目标 session。 | Open |
| **中等** | [#71992](https://github.com/openclaw/openclaw/issues/71992) | **UI 显示**: Control UI webchat 中助手回复内容重复显示两遍。 | Open |
| **中等** | [#43747](https://github.com/openclaw/openclaw/issues/43747) | **内存管理**: 不同用户间内存管理机制表现不一致，存储路径混乱。 | Open |
| **低** | [#44993](https://github.com/openclaw/openclaw/issues/44993) | **Cron 时间戳**: 心跳/Cron 任务注入的时间戳未刷新，显示陈旧时间。 | Open |

*注：针对 #71992 的 UI 问题，已有 PR [#74733](https://github.com/openclaw/openclaw/pull/74733) 尝试通过保留 transcript timestamps 修复消息乱序。*

## 6. 功能请求与路线图信号
社区正在推动更深层次的架构优化与安全性增强：

- **上下文成本控制**:
  - [Issue #22438](https://github.com/openclaw/openclaw/issues/22438): 请求分层加载 Bootstrap 文件，减少无效 Token 消耗。目前每个 session 全量加载对大 workspace 成本过高。
- **安全与合规**:
  - [Issue #13583](https://github.com/openclaw/openclaw/issues/13583): 请求“硬关卡”机制，强制 Agent 在响应前必须调用特定工具（如合规检查），防止 Agent 软性忽略指令。
  - [Issue #64046](https://github.com/openclaw/openclaw/issues/64046): 请求支持配置文件与日志中的敏感数据脱敏。
- **生态扩展**:
  - [Issue #12602](https://github.com/openclaw/openclaw/issues/12602): 支持 Slack Block Kit 消息格式，提升企业级交互体验。

## 7. 用户反馈摘要
- **痛点**:
  - **资源占用**: 多个 Issue (#45438, #73532) 反馈 Gateway 进程占用极高 CPU 或内存，导致服务不可用。
  - **Windows 支持缺失**: #75 评论区长期未解决的需求，导致部分用户无法在主力开发环境使用。
  - **多 Agent 稳定性**: #52875 与 #44925 显示子 Agent 调度与结果回收机制存在丢失或超时现象。
- **满意点**:
  - 新版本对 DeepInfra 和 Codex 的集成受到期待，减少了用户自行配置的工作量。
  - 社区对于 PR 修复速度（如当日提交当日修复的 UI 问题）表示认可。

## 8. 待处理积压
以下重要 Issue 长期未得到根本解决或响应，建议维护者优先排期：

- **[Issue #75](https://github.com/openclaw/openclaw/issues/75)**: Linux/Windows 客户端需求（创建于 2026-01-01，热度最高）。
- **[Issue #50090](https://github.com/openclaw/openclaw/issues/50090)**: 社区 Skill 生态发展停滞，ClawHub 承诺与现状差距较大。
- **[Issue #18160](https://github.com/openclaw/openclaw/issues/18160)**: Cron 任务直接执行模式请求，避免简单任务触发昂贵的 LLM 推理。

---
*分析师注：项目今日虽发布新版，但积压的 PR 数量巨大（473个），且高优先级的性能回归问题（内存泄漏、CPU Spin）频发。建议开发团队在推进新功能（如 DeepInfra）的同时，优先分配资源处理稳定性相关的 PR Review 与 Bug 修复，以维持社区信心。*

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比日报 (2026-04-30)

## 1. 生态全景
当前个人 AI 助手/智能体开源生态正处于**功能爆发与架构重构并存**的关键时期。一方面，各项目竞相适配最新的推理模型（如 DeepSeek v4, Opus 4.7）和多模态能力，试图打破“仅对话”的局限，向 Computer Use 和自我进化演进；另一方面，随着应用深入，**稳定性与安全性问题集中爆发**，内存泄漏、沙箱逃逸和认证故障成为阻碍生产部署的核心痛点。社区对“开箱即用”的诉求日益强烈，推动项目重心从单纯的模型集成转向全平台覆盖与运行时优化。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新 | 版本发布 | 健康度/状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500+ | 500+ | v2026.4.27 | **高活跃/高风险**：迭代极快但 PR 积压严重(473)，存在严重内存泄漏与回归问题。 |
| **IronClaw** | 27 | 50 (32 merged) | v0.27.0 | **架构重构期**："Reborn"架构落地，模块化拆分，但因 TUI 问题引发部分用户不适。 |
| **CoPaw** | 48 (34 closed) | 17 (7 merged) | v1.1.5 | **稳定迭代**：关注 CJK 体验与企业微信稳定性，社区反馈积极，修复效率高。 |
| **Moltis** | High | High | 2 Releases | **安全救急**：连发两版修复沙箱逃逸，语音与导入功能增强，响应迅速。 |
| **Hermes Agent**| 50 | 50 | - | **安全预警**：P0 级 API Key 泄露风险，积压 PR 较多(42)，核心安全受挑战。 |
| **NanoBot** | High | 26 merged | v0.1.5.post3 | **功能争议**：飞书话题隔离引发“失忆”争议，但修复响应极快。 |
| **Zeroclaw** | 50 | 50 | - | **阻塞期**：新用户安装受阻，PR 积压严重(49)，Token 消耗焦虑明显。 |
| **PicoClaw** | 14 | 21 | Nightly | **架构清洗**：弃用 TUI 转向 WebUI，DeepSeek v4 适配滞后引发兼容性问题。 |
| **NanoClaw** | Low | 50 | - | **底层演进**：Opus 4.7 适配与远程 MCP 支持，移动端多模态体验需优化。 |
| **LobsterAI** | Low | 28 | 2026.4.29 | **功能扩展**：集成小米/百度模型，但遭遇区域认证限制问题。 |
| **NullClaw** | Low | 0 | - | **维护停滞**：核心功能在低资源设备不可用，亟待修复。 |
| **TinyClaw/ZeptoClaw/EasyClaw** | 0 | 0 | - | 无明显活动。 |

## 3. OpenClaw 在生态中的定位

*   **核心参照地位**：OpenClaw 凭借极高的 Issue/PR 更新量，仍是生态中功能迭代最快、社区关注度最高的“风向标”项目。
*   **技术路线差异**：
    *   **对比 IronClaw**：OpenClaw 侧重于应用层的功能集成（如 DeepInfra, Codex Computer Use），而 IronClaw 正激进地重构底层运行时（WASM, 微内核化），后者架构更先进但门槛更高。
    *   **对比 NanoBot/CoPaw**：OpenClaw 在跨平台桌面控制上具有先发优势，但在特定渠道（如飞书、企业微信）的适配深度和稳定性上不如 NanoBot 和 CoPaw 精细。
    *   **对比 Zeroclaw**：两者均面临 PR 积压问题，但 OpenClaw 的核心痛点在于性能回归（内存/CPU），而 Zeroclaw 瓶颈在于安装流程与 Token 成本。
*   **优势与隐忧**：优势在于社区活跃度极高，新功能集成快；隐忧在于“维护负债”，473 个待合并 PR 和严重的内存泄漏问题表明其正在经历“成长的阵痛”，急需从快速迭代转向质量收敛。

## 4. 共同关注的技术方向

1.  **新推理范式适配**
    *   **现象**：PicoClaw、NanoClaw 均报告了对 DeepSeek v4 或 Opus 4.7 等支持“长上下文”或“推理链”模型的适配问题。
    *   **诉求**：传统的上下文压缩策略（如 200k 强制压缩）与新模型能力冲突，各项目急需升级 Context Management 和 Provider 层以支持 `reasoning_content` 字段。

2.  **安全与沙箱机制**
    *   **现象**：Moltis 修复沙箱逃逸漏洞，Hermes 曝光 API Key 泄露和沙箱读取风险。
    *   **诉求**：随着 Agent 工具链权限的扩大，RCE（远程代码执行）和数据泄露风险成为关注焦点，社区强烈要求默认安全配置和更严格的沙箱隔离。

3.  **多渠道融合与持久化**
    *   **现象**：NanoBot 的飞书话题隔离、CoPaw 的企业微信断连修复、Hermes 的 Slack Block Kit 请求。
    *   **诉求**：企业级用户要求更稳定的多渠道接入，且需解决跨平台身份、会话持久化和消息格式的兼容性问题。

## 5. 差异化定位分析

*   **架构理念**：
    *   **IronClaw** 走 **“微内核 + WASM”** 路线，追求极致的模块化与安全性，适合高阶开发者构建复杂系统。
    *   **OpenClaw/Zeroclaw** 走 **“全功能集成”** 路线，预置大量 Provider 和工具，适合快速部署但显得臃肿。
    *   **NullClaw/PicoClaw** 走 **“轻量化/边缘计算”** 路线，主打低资源设备支持（尽管 NullClaw 目前遇到了功能瓶颈）。

*   **目标用户**：
    *   **CoPaw/LobsterAI** 明显偏向 **企业级/国内市场**，强化 CJK 支持、企业微信/飞书集成及国产模型接入。
    *   **NanoClaw/Hermes** 侧重 **个人极客/多模态场景**，探索移动端体验和自我进化机制。

## 6. 社区热度与成熟度

*   **第一梯队（成熟/高活跃）**：**OpenClaw, IronClaw, CoPaw, Moltis**。社区反馈极其热烈，Issue 讨论深入，但 OpenClaw 和 Zeroclaw 的维护速度已跟不上社区提交速度，存在管理过载风险。
*   **第二梯队（快速迭代/追赶期）**：**NanoBot, PicoClaw, Hermes Agent**。版本更新快，但在特定功能（如飞书适配、安全配置）上存在明显短板或争议，正处于补课阶段。
*   **第三梯队（孵化/维护期）**：**NanoClaw, LobsterAI, NullClaw**。功能相对单一或处于特定功能开发阶段，社区规模较小，主要依赖核心贡献者驱动。

## 7. 值得关注的趋势信号

1.  **Computer Use 与自我进化的萌芽**：OpenClaw 对 Codex Computer Use 的增强和 PicoClaw 提出的“自我进化运行时” PR 预示着智能体正在从“对话者”转向“操作者”，能够自主生成 Skill 并操控桌面将是下半年的竞争焦点。
2.  **WebUI 正在统一，TUI 逐渐退场**：PicoClaw 正式弃用 TUI，IronClaw 修复 High ASCII TUI，各项目均在强化 Web 端配置能力，这标志着用户交互界面已全面转向 Web 化和移动化。
3.  **安全基线被迫抬升**：连续爆出的 P0 级安全漏洞（API Key 泄露、沙箱逃逸）表明，社区已不能容忍“便利性牺牲安全性”。强制脱敏、显式权限控制将成为下一版本更新的标配。
4.  **对“思考”过程的可视化需求**：用户不再满足于结果，对模型推理过程的支持成为新需求。各项目开始着手支持 Chain-of-Thought 的透传与展示。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-30)

## 1. 今日速览
NanoBot 今日发布了重要版本 `v0.1.5.post3`，标志着项目在会话管理能力上迈出了关键一步，将“对话”提升为平台的一等公民。项目活跃度极高，单日合并 PR 达 26 个，解决了包括内存安全、渠道配置灵活性等长期痛点。新版本引入的飞书话题隔离机制引发了社区热烈讨论，同时也暴露了用户对强制 `reply_in_thread` 行为的适应性问题。整体而言，项目正处于功能快速迭代与稳定性修复并重的阶段，社区贡献度显著提升（单版本新增 12 位贡献者）。

## 2. 版本发布
- **[v0.1.5.post3](https://github.com/HKUDS/nanobot/releases/tag/v0.1.5.post3)**
  - **核心更新**：本次更新合并了 57 个 PR，迎来了 12 位新贡献者。最大的亮点在于**会话（Conversation）管理升级**，Agent 学会了在话题（Threads）中进行连贯对话。针对飞书平台，实现了群聊话题的隔离会话，确保上下文不混淆。
  - **破坏性变更/注意**：飞书群聊默认开启了 `reply_in_thread` 模式以实现会话隔离。根据今日 Issue 反馈，这可能对习惯旧版行为（直接回复）的用户造成困扰，导致上下文“失忆”的错觉。建议用户关注配置项调整。

## 3. 项目进展
今日共有 **26 个 PR 被合并**，显著提升了系统的稳定性与扩展性：
- **功能增强**：
  - **渠道精细化配置**：合并了 [PR #3487](https://github.com/HKUDS/nanobot/pull/3487)，支持对不同渠道独立配置 `sendProgress` 和 `sendToolHints`，解决了全局配置不够灵活的问题。
  - **实例创建技能**：[PR #3457](https://github.com/HKUDS/nanobot/pull/3457) 新增内置技能，允许 Agent 通过对话创建新的 Bot 实例。
  - **搜索能力扩展**：[PR #3505](https://github.com/HKUDS/nanobot/pull/3505) 新增 Olostep 网页搜索提供商。
  - **插件系统**：[PR #3541](https://github.com/HKUDS/nanobot/pull/3541) 引入中心化 HookCenter，支持拦截器和插件发现，为后续生态扩展打下基础。
- **稳定性修复**：
  - **数据安全**：[PR #3508](https://github.com/HKUDS/nanobot/pull/3508) 修复了历史记录文件写入的原子性问题，防止崩溃导致的数据损坏。
  - **工作流优化**：合并了多个关于 6 阶段工作流和安全性增强的 PR（如 [PR #3529](https://github.com/HKUDS/nanobot/pull/3529)），增强了工具调用的安全性检测。

## 4. 社区热点
今日讨论焦点集中在飞书渠道的交互行为变更上：
- **[Issue #3546](https://github.com/HKUDS/nanobot/issues/3546)**：用户反馈 NanoBot 出现“失忆”现象。深入分析显示，这是因为新版本强制 `reply_in_thread` 后，用户在群里发送新消息被视为新会话，导致上下文丢失。用户呼吁增加配置项以自主选择回复模式。
- **[Issue #3533](https://github.com/HKUDS/nanobot/issues/3533)**：指出飞书群聊中 `reply_in_thread` 忽略了用户配置，强制开启。这直接关联到上述“失忆”问题，反映了用户对新交互模式的适应成本。
- **[Issue #3452](https://github.com/HKUDS/nanobot/issues/3452)**：关于进度提示发送策略的配置粒度问题，该需求已在今日通过 PR #3487 得到解决，体现了社区反馈的高效响应。

## 5. Bug 与稳定性
今日报告并处理了多个关键 Bug：
- **严重**：
  - **[Issue #3546] NanoBot 失忆**：由于飞书群聊会话隔离策略变更导致，已有相关修复 PR [PR #3547](https://github.com/HKUDS/nanobot/pull/3547) 提交，正在审核中。
- **一般**：
  - **[Issue #3506] Matrix 渠道 Windows 兼容性**：已关闭，推测已在近期版本修复。
  - **[Issue #1783] Codex Provider 超时**：硬编码 60s 超时导致任务失败，该 Issue 已关闭。
- **待修复 PR**：
  - [PR #3517](https://github.com/HKUDS/nanobot/pull/3517)：修复微信渠道 `context_token` 过期导致定时任务消息丢失的问题。

## 6. 功能请求与路线图信号
- **微信多账号支持**：[PR #3542](https://github.com/HKUDS/nanobot/pull/3542) 提出重构微信渠道以支持单实例多账号，显示出项目向企业级/高并发场景拓展的趋势。
- **模型预设**：[PR #3358](https://github.com/HKUDS/nanobot/pull/3358) 提议增加模型预设配置，允许用户快速切换模型组合，这将大幅降低多模型调试的成本。
- **网关运维增强**：[PR #3538](https://github.com/HKUDS/nanobot/pull/3538) 增加了网关的启停命令，预示着 NanoBot 正在加强生产环境的运维友好度。

## 7. 用户反馈摘要
- **痛点**：飞书用户对新版本的“线程回复”模式感到困惑，认为其改变了既有的群聊交互习惯，且导致了上下文不连贯（“失忆”）的体验。
- **满意点**：用户对 `sendProgress` 支持渠道级独立配置表示欢迎，解决了全局通知刷屏的问题。
- **场景**：个人开发者使用飞书群进行消息分类处理（新闻、饮食等），对会话隔离有较强需求，但也需要灵活的开关控制。

## 8. 待处理积压
- **重要 PR 待合并**：
  - [PR #3547](https://github.com/HKUDS/nanobot/pull/3547)：修复飞书强制线程回复问题，建议维护者优先 Review，以解决 #3546 和 #3533 的用户恐慌。
  - [PR #3517](https://github.com/HKUDS/nanobot/pull/3517)：修复微信 Token 过期问题，影响定时任务稳定性。
- **长期 Issue**：
  - [Issue #3095](https://github.com/HKUDS/nanobot/issues/3095)：关于自定义 Anthropic API 端点的配置问题，虽然已关闭，但建议文档补充相关自定义 Endpoint 的配置指引。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-04-30)

## 1. 今日速览
Zeroclaw 项目今日保持高活跃度，社区反馈热烈，过去24小时内共有 50 条 Issue 更新与 50 条 PR 更新。项目目前处于密集的开发与修复周期，虽然未发布新版本，但代码库中有大量功能性 PR 正在等待合并（待合并 PR 达 49 条）。今日焦点集中在**新用户安装流程阻塞**（Issue #6123）以及**多项高优先级 Bug 修复**（如安全扫描误报、Bedrock 认证支持）。整体来看，项目正在积极向下一个版本冲刺，但积压的 PR 数量较多，可能需要维护者加快合并节奏或引入更多 Reviewer。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日仅合并/关闭了 1 条 PR，项目进展主要体现在对现有架构的深度优化和新功能的待合并状态：

*   **ACP 协议修复**：PR #6035 已关闭，修复了 ACP (Agent Communication Protocol) 服务器的工具输出格式问题，确保工具调用事件能被正确传输和展示。
*   **Web 端功能增强（待合并）**：PR #6179 正在进行重大重构，旨在通过统一的 CRUD 端点实现 Web 端配置与 CLI 的功能对等，这将极大改善用户的 Web 配置体验。
*   **基础设施与集成**：PR #6168 增加了对 AWS Bedrock `credential_process` 的支持，修复了开发者机器上的认证难题；PR #5978 引入了语音捕获缓冲与 STT 调度机制，大幅增强了语音交互能力。

## 4. 社区热点
今日讨论最活跃的 Issue 集中在**安装体验**与**核心性能**上：

*   **[Issue #6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)** (评论: 15)
    **痛点**：新用户在 LXC 容器中的全新安装遇到 `default_model` 配置错误，导致 Agent 无法启动。
    **分析**：作为 S1 级别的阻塞问题，这直接影响了新用户的留存，社区正在积极排查是否为配置路径或默认值加载逻辑的回归问题。

*   **[Issue #5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146)** (评论: 7)
    **痛点**：Token 消耗过高。
    **分析**：用户提出“Skill 编译”方案，旨在通过预处理减少发送给 LLM 的 Prompt 长度（如将 400 行技能文档编译为简短指令）。该 Issue 已被标记为 `status:accepted`，反映了用户对运行成本和延迟的深度关切。

*   **[Issue #5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509)** (评论: 7)
    **痛点**：Telegram 语音转录功能缺失。
    **分析**：用户希望 ZeroClaw 对齐 TypeScript 版本的功能，支持 Telegram 语音消息。该 Issue 已关闭，可能已在开发分支中实现或通过其他方式解决。

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，部分涉及安全与核心功能，需重点关注：

*   **S0 - 安全/数据丢失风险**：
    *   [Issue #5518](https://github.com/zeroclaw-labs/zeroclaw/issues/5518)：安全扫描工具错误拦截了 `/dev/null` 等安全路径，导致正常 Shell 指令无法执行。（已有相关修复 PR #5939 待合并）
    *   [Issue #5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415)：Discord 频道的上下文泄露到了计划任务执行中，存在隐私风险。

*   **S1 - 工作流阻塞**：
    *   [Issue #6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)：全新安装时配置加载失败，Agent 无法启动。
    *   [Issue #5475](https://github.com/zeroclaw-labs/zeroclaw/issues/5475)：Github Copilot + Telegram 组合出现 "Invalid parameter" 错误，导致工作流中断。

*   **S2 - 功能降级**：
    *   [Issue #6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153)：Matrix 频道语音转录失败，提示音频格式不支持。
    *   [Issue #5550](https://github.com/zeroclaw-labs/zeroclaw/issues/5550)：自动保存的记忆因 `session_id` 不匹配无法被召回。

## 6. 功能请求与路线图信号
用户需求主要集中在**多渠道集成增强**与**易用性提升**：

*   **语音交互成趋势**：除了上述 Telegram 语音支持外，PR #5978（语音缓冲与 STT 调度）显示了项目正在为全双工语音交互打下基础。
*   **Web 端体验优化**：PR #6218 提议在 Web UI 中标记 OpenRouter 的免费模型，PR #6217 允许从记忆列表直接跳转到会话，表明社区正致力于降低 Web 端的使用门槛。
*   **企业级特性**：PR #6168 对 AWS Bedrock 高级认证的支持，暗示 ZeroClaw 正在吸引更多企业级用户或云原生开发者。

## 7. 用户反馈摘要
*   **痛点**：安装流程的不稳定性（#6123）是目前最大的槽点；Token 消耗量大（#5146）是核心用户的普遍焦虑；安全策略的误杀（#5518）影响了高级用户对 Shell 工具的使用。
*   **场景**：用户常将 ZeroClaw 部署在 LXC 容器或通过 Docker 运行，并尝试与 Telegram、Discord、Matrix 等多平台集成。
*   **满意度**：尽管存在稳定性问题，用户对项目的潜力持积极态度，特别是在 PR 提交者中，看到了针对 Bedrock、ACP 协议等深度功能的快速响应。

## 8. 待处理积压
*   **PR 积压严重**：目前有 **49 个 PR 处于待合并状态**，其中包括多个高优先级修复（如 Bedrock 认证 #6168、安全修复 #5939、Codex CLI 修复 #5361）。建议维护者尽快处理积压，避免功能分支冲突。
*   **长期 Issue**：
    *   [Issue #5244](https://github.com/zeroclaw-labs/zeroclaw/issues/5244)：Dashboard 前端崩溃问题（P1）自 4 月初报告以来仍未彻底解决。
    *   [Issue #5289](https://github.com/zeroclaw-labs/zeroclaw/issues/5289)：AWS Bedrock Provider 的认证错误（P1）仍有待合并修复。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-04-30)

## 1. 今日速览
Hermes Agent 项目今日保持高度活跃，过去24小时内 Issues 更新达 50 条，PR 更新 50 条，显示出社区参与度极高。虽然今日无新版本发布，但代码提交活跃，主要集中在安全性修复、平台适配（Telegram/Discord/Slack）及工具链稳定性优化。值得注意的是，今日涌现多个 P0/P1 级别的安全漏洞报告，涉及 API Key 泄露和凭证读取风险，建议维护团队优先处理。同时，待合并 PR 数量达到 42 条，合并队列积压明显，需关注审查进度。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
尽管无新版本发布，但代码库合并与提交活动频繁，主要集中在修复关键 Bug 和扩展平台能力：

*   **修复与稳定性**：
    *   PR [#17719](https://NousResearch/hermes-agent/PR/17719) **(CLOSED)** 修复了 Vision 分析工具在 Docker 环境下的权限错误，将缓存目录迁移至 `HERMES_HOME`。
    *   PR [#17713](https://NousResearch/hermes-agent/PR/17713) 解决了 Gateway 重启时的 PID 文件竞态条件问题，提升了服务稳定性。
    *   PR [#17707](https://NousResearch/hermes-agent/PR/17707) 修复了当工作目录被删除时终端命令执行失败的“砖块化”问题。

*   **功能增强**：
    *   PR [#17728](https://NousResearch/hermes-agent/PR/17728) 为 Telegram 增加了话题门控支持和 Clarify 回调桥接，增强了企业级场景下的控制力。
    *   PR [#17717](https://NousResearch/hermes-agent/PR/17717) 引入了新的 QMD 内存提供者插件，支持自托管的向量索引，扩展了记忆系统的灵活性。
    *   PR [#17720](https://NousResearch/hermes-agent/PR/17720) 新增了 ASCII 艺术转 Excalidraw 图表的技能，增强了绘图能力。

## 4. 社区热点
今日社区讨论焦点集中在安全风险、核心功能缺失及平台适配问题上：

*   **安全风险预警**：Issue [#17691](https://NousResearch/hermes-agent/Issue/17691) 报告了 `HERMES_REDACT_SECRETS` 默认关闭导致 API Key 在 Telegram/Discord 聊天中可见的严重隐患（P0），引发了关于默认安全配置的讨论。
*   **持久化内存需求**：Issue [#8457](https://NousResearch/hermes-agent/Issue/8457) 提出的“跨会话持久化记忆与搜索”功能继续受到关注（评论数 6），用户强烈希望解决重启后上下文丢失的问题。
*   **Slack 平台优化**：Issue [#8552](https://NousResearch/hermes-agent/Issue/8552) 呼吁 Slack 适配器放弃旧版 `mrkdwn` 格式，改用 Block Kit 以支持表格等高级排版，获得了 4 个点赞。
*   **争议性话题**：Issue [#17688](https://NousResearch/hermes-agent/Issue/17688) 指控项目存在抄袭争议，虽然被标记为 `[duplicate, invalid]`，但也反映了社区对开源溯源的关注。

## 5. Bug 与稳定性
今日报告了多个影响严重的问题，涵盖安全、核心逻辑与平台兼容性：

*   **P0 - 安全漏洞**：
    *   Issue [#17691](https://NousResearch/hermes-agent/Issue/17691)：默认配置下 API Key 泄露。
    *   Issue [#17656](https://NousResearch/hermes-agent/Issue/17656)：`read_file` 工具沙箱逃逸风险，可读取 `auth.json` 等敏感凭证文件。
*   **P1 - 运行环境**：
    *   Issue [#6568](https://NousResearch/hermes-agent/Issue/6568)：在 LXC 等无特权 Cgroup 环境下，沙箱启动失败（Exit 126），阻塞了容器化部署。
*   **P2 - 核心功能缺陷**：
    *   Issue [#17685](https://NousResearch/hermes-agent/Issue/17685)：`delegate_task` 任务模型覆盖参数失效，子代理强制继承父模型，影响多模型协作。
    *   Issue [#6507](https://nousresearch/hermes-agent/Issue/6507)：会话搜索（`session_search`）逻辑错误，丢失子会话命中结果。
*   **P2 - 平台特有 Bug**：
    *   Issue [#17705](https://nousresearch/hermes-agent/Issue/17705)：Minimax 国内版 (minimax-cn) 辅助标题生成 404 错误。
    *   Issue [#6508](https://nousresearch/hermes-agent/Issue/6508)：Telegram 论坛话题重置 `/new` 后技能丢失。
    *   Issue [#17700](https://nousresearch/hermes-agent/Issue/17700)：终端 ASCII 表格在混合中英文字符时对齐错乱。

## 6. 功能请求与路线图信号
结合 Issues 与 PRs，用户对以下功能有强烈诉求，部分已处于开发/审查阶段：

*   **多模态能力扩展**：
    *   Issue [#6611](https://nousresearch/hermes-agent/Issue/6611) 请求支持 Kimi K2.5 的原生视觉能力，避免走辅助视觉服务。
    *   Issue [#9127](https://nousresearch/hermes-agent/Issue/9127) 请求为 Minimax 添加视觉分析支持。
*   **认证与登录优化**：
    *   Issue [#10016](https://nousresearch/hermes-agent/Issue/10016) 提出支持浏览器兼容的 Codex 登录方式，以适应复杂网络环境。
*   **Webhook 安全性**：
    *   PR [#6445](https://nousresearch/hermes-agent/PR/6445) 提出强制显式开启 `INSECURE_NO_AUTH` 以防止 RCE，有望在下一版本合入，提升默认安全基线。

## 7. 用户反馈摘要
从评论中提炼的用户痛点与反馈如下：

*   **国内环境适配痛点**：多位用户反馈 Minimax、企业微信等国内平台集成问题，包括响应慢、文件收发失败（Issue [#6515](https://nousresearch/hermes-agent/Issue/6515)）、API 地址 404 等，显示出对国内模型生态支持尚不完善。
*   **安全焦虑**：用户对敏感信息的默认处理方式表示担忧，认为不应在默认情况下暴露 API Key 或允许越权读取凭证文件。
*   **记忆与上下文**：用户希望 Agent 能够拥有“长期记忆”，不仅限于单次会话，目前 Issue [#8457](https://nousresearch/hermes-agent/Issue/8457) 的讨论热度印证了这一点。
*   **多模型协作困惑**：用户在尝试使用 `delegate_task` 进行多模型切换时遇到阻碍（Issue [#17685](https://nousresearch/hermes-agent/Issue/17685)），反映出文档或功能实现与预期不符。

## 8. 待处理积压
建议维护者关注以下长期未决或高优先级的 PR/Issue：

*   **安全相关 PR**：PR [#6445](https://nousresearch/hermes-agent/PR/6445) (Webhook RCE 修复) 和 PR [#6454](https://nousresearch/hermes-agent/PR/6454) (URL 凭证脱敏) 自 4 月 9 日开启至今未合并，鉴于安全优先级，建议尽快审查。
*   **功能积压**：PR [#6444](https://nousresearch/hermes-agent/PR/6444) (集成 Metaso 中文搜索) 同样处于 Open 状态，对于国内用户场景至关重要。
*   **长期 Issue**：Issue [#6607](https://nousresearch/hermes-agent/Issue/6607) (Checkpoint Manager 目录存在性检查) 虽为 P3，但评论数较多，建议纳入修复计划以防环境配置导致的运行时错误。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-30)

## 1. 今日速览
PicoClaw 项目今日保持**极高活跃度**，社区互动频繁，共有 14 个 Issue 更新和 21 个 PR 更新。项目架构迎来重大调整，TUI（终端用户界面）版本的弃用提案已落实，相关代码清理 PR 已关闭，标志着项目重心全面向 WebUI 和 CLI 转移。同时，项目在 Agent 核心能力上探索“自我进化”机制，引发了技术层面的关注。今日新版 Nightly 构建已发布，但社区反馈显示 DeepSeek v4 模型适配及部分运行时稳定性问题亟待解决。

## 2. 版本发布
- **nightly: v0.2.7-nightly.20260430.a36472b5**
  - **类型**: Automated Build (自动构建)
  - **更新说明**: 此版本为 Nightly 构建，包含最新的代码提交，可能存在不稳定情况。
  - **变更日志**: [v0.2.7...main](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)
  - **注意**: 建议测试用户谨慎更新，生产环境建议等待 Stable 版本。

## 3. 项目进展
今日共有 7 个 PR 被合并或关闭，项目在架构精简和多渠道支持上迈出重要一步：

- **TUI 架构移除落地**：PR [#2710](https://github.com/sipeed/picoclaw/pull/2710) 关闭，标志着移除 TUI 版本并迁移核心功能至 CLI 的重构工作已完成，呼应了此前 RFC 提案。此举将降低维护成本，聚焦 WebUI 生态。
- **渠道与协议增强**：
  - PR [#2708](https://github.com/sipeed/picoclaw/pull/2708) 关闭，修复了飞书渠道的图片下载权限回退及富文本/卡片消息中的图片提取问题，显著改善了企业级场景下的媒体处理能力。
  - PR [#2713](https://github.com/sipeed/picoclaw/pull/2713) 关闭，修复了 `ResponseHandled` 场景下工具反馈动画卡住的 Bug，优化了交互体验。
- **构建与部署修复**：PR [#2700](https://github.com/sipeed/picoclaw/pull/2700) 关闭，修复了 `docker-compose build` 失败的问题，修正了 Dockerfile 中的 Go 版本引用，恢复了容器化构建流程。

## 4. 社区热点
- **TUI 弃用讨论尘埃落定**：Issue [#2208](https://github.com/sipeed/picoclaw/issues/2208) 获得了 8 个点赞，成为今日最受关注的讨论。社区对弃用 TUI 并迁移至 CLI 的提案反应积极，该 Issue 已关闭，相关重构 PR 已合并，体现了社区对架构演进方向的共识。
- **DeepSeek v4 Thinking Model 适配问题**：Issue [#2706](https://github.com/sipeed/picoclaw/issues/2706) 引起了开发者对新型推理模型的关注。由于 DeepSeek v4 引入了 `reasoning_content` 字段，当前 Provider 层未能正确回传该字段导致 400 错误，反映了 PicoClaw 在跟进最新 LLM 推理范式时的滞后，需尽快修复。

## 5. Bug 与稳定性
今日报告了多个影响系统稳定性的关键 Bug，按严重程度排序如下：

- **P0 - 服务启动失败**：Issue [#2720](https://github.com/sipeed/picoclaw/issues/2720) 报告了 PID 文件检测逻辑存在缺陷。当 PID 被其他进程（如 systemd）复用时，会导致 Gateway 陷入崩溃循环，严重影响服务可用性。目前尚无修复 PR。
- **P1 - 模型兼容性崩溃**：Issue [#2706](https://github.com/sipeed/picoclaw/issues/2706) 和 [#2718](https://github.com/sipeed/picoclaw/issues/2718) 均指出 DeepSeek 等模型处理历史记录中的图片或推理字段时发生错误。PR [#2717](https://github.com/sipeed/picoclaw/pull/2717) 已尝试修复 Vision 相关错误，但 Thinking Model 的推理字段持久化问题仍需关注。
- **P1 - 会话历史竞态条件**：Issue [#2721](https://github.com/sipeed/picoclaw/issues/2721) 报告了在 Telegram 渠道中复现的 `tool_use_id` 400 错误，表明在并发或网络延迟场景下，会话历史管理仍存在数据竞争问题。
- **P2 - 钉钉 SDK Panic**：Issue [#2704](https://github.com/sipeed/picoclaw/issues/2704) 指出钉钉 SDK 在连接超时时的并发 Bug 导致 Gateway Panic 崩溃。

## 6. 功能请求与路线图信号
- **Agent 自我进化机制**：PR [#2722](https://github.com/sipeed/picoclaw/pull/2722) 提出了集成“自我进化运行时”的构想，旨在让 Agent 在运行中记录任务结果并自动生成 Skill 草稿。这是通往 AGI 路径上的高阶功能，目前处于 Open 状态，是未来版本的重要看点。
- **多模态与推理支持**：Issue [#2706](https://github.com/sipeed/picoclaw/issues/2706) 和 PR [#2717](https://github.com/sipeed/picoclaw/pull/2717) 表明项目急需适配 DeepSeek v4 及类似模型的 Vision 和 Thinking 协议，这将是下一版本 Provider 层的重点工作。
- **本地化推理扩展**：PR [#2703](https://github.com/sipeed/picoclaw/pull/2703) 提议支持 Intel OpenVINO Model Server，结合 Issue [#2625](https://github.com/sipeed/picoclaw/issues/2625) 对 WhatsApp 支持（树莓派环境）的需求，显示出社区对边缘计算和本地化部署场景的强烈需求。

## 7. 用户反馈摘要
- **配置与兼容性痛点**：用户在配置 Gemini 等多 Provider 时仍遇到认证冲突问题（Issue [#2548](https://github.com/sipeed/picoclaw/issues/2548)），且对 `.env` 文件的支持呼声较高（Issue [#2623](https://github.com/sipeed/picoclaw/issues/2623)），表明配置管理的易用性仍有优化空间。
- **WebUI 好评与 TUI 释然**：WebUI 的快速进展让社区对移除 TUI 表示理解和支持，认为这有助于集中资源优化核心体验。
- **历史记录丢失焦虑**：Issue [#2621](https://github.com/sipeed/picoclaw/issues/2621) 提到的 API 超时导致会话丢失问题，反映了用户对对话持久化稳定性的担忧，特别是在网络环境不佳的场景下。

## 8. 待处理积压
- **Exec 工具安全过滤逻辑**：Issue [#1042](https://github.com/sipeed/picoclaw/issues/1042) 自 3 月初开启至今，其正则匹配逻辑过于粗暴的问题仍未解决，导致部分合法命令被拦截，影响用户对工具链的信任度，建议维护者优先处理。
- **OpenAI Responses API 迁移**：Issue [#2171](https://github.com/sipeed/picoclaw/issues/2171) 仍在讨论中，虽然属于重构类任务，但关系到 API 层的长期兼容性与性能，需纳入长期路线图。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-30)

## 1. 今日速览
NanoClaw 项目今日呈现出**极高的开发活跃度**，虽然 Issues 新增量较少，但 Pull Requests 更新高达 50 条，显示项目正处于密集的功能迭代与架构优化阶段。核心贡献者 `@andrebrov` 今日提交了多个关键 PR，重点解决了 Opus 4.7 模型适配、容器环境变量透传以及远程 MCP 服务器支持等底层架构问题。社区方面，用户开始尝试将 NanoClaw 应用于更复杂的移动端多模态场景（如财务单据处理），并提出了对新模型支持的需求。整体来看，项目正在从基础功能向多模型、多渠道的高级个人助理平台演进。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 20 个 PR 被合并或关闭，项目在集成能力和架构灵活性上取得显著进展：

*   **MCP 生态集成增强**：关闭了 Gmail (`#1961`) 和 Google Calendar (`#1964`) 的 Utility skill PR，这两个工具通过 OneCLI 注入凭证，增强了 NanoClaw 作为个人助理的实用性。
*   **Provider 扩展尝试**：关于 Google Gemini Provider 的支持正在积极推进，虽然 PR `#2135` 和 `#2137` 被关闭，但开启了更新的 PR `#2136`，表明社区正在努力通过 JSON-RPC over stdio 方式集成 Gemini。
*   **架构优化**：关闭了关于 Copilot 指令的 PR `#2140` 以及 x402 微支付技能 PR `#1767`，项目文档与技能生态进一步完善。

## 4. 社区热点
今日活跃度主要集中在多模型支持与底层配置的讨论上：

*   **[PR #2136] Google Gemini Provider 支持**：这是今日最受关注的 PR 之一。继前几个版本被关闭后，作者 `@farooqu` 再次提交了实现 Gemini 集成的代码。社区对引入非 Anthropic/OpenAI 系的大模型表现出浓厚兴趣，这将是 NanoClaw 多元化模型支持的重要一步。
*   **[Issue #2109] Context Compact 阈值限制**：用户反馈在使用 Opus 4.7（支持 1M 上下文）时，系统仍在 200k 处触发压缩。该问题直接催生了 PR `#2138` 和 `#2129`，引发了关于容器环境变量传递机制的讨论，显示了用户对充分利用模型长上下文能力的强烈诉求。

## 5. Bug 与稳定性
今日报告的 Bug 数量较少，但涉及核心功能与运行稳定性：

*   **严重 (HIGH) - [Issue #2139] 图片上传导致 API 400 错误**
    *   **现象**：用户在移动端上传图片处理财务单据时，系统抛出 `invalid_request_error`，导致 Bot 完全停止工作。
    *   **状态**：待确认。这是典型的多模态处理边界情况，可能影响移动端用户的核心体验。
    *   **链接**：[qwibitai/nanoclaw Issue #2139](https://github.com/qwibitai/nanoclaw/issues/2139)
*   **中等 (MEDIUM) - [Issue #2109] 上下文压缩阈值设置不当**
    *   **现象**：Opus 4.7 用户无法利用完整的 1M 上下文窗口，在 200k 时强制压缩。
    *   **修复进展**：已有相关 PR `#2138` (forward AGENT_AUTO_COMPACT_WINDOW) 和 `#2129` (per-group model override) 正在审查中，预计很快解决。
    *   **链接**：[qwibitai/nanoclaw Issue #2109](https://github.com/qwibitai/nanoclaw/issues/2109)

## 6. 功能请求与路线图信号
结合今日 PR 动向，项目路线图呈现出明确的方向信号：

*   **多模型路由与配置精细化**：PR `#2129` 提出了 "per-group model override"，允许不同群组使用不同模型。结合 Gemini Provider 的尝试，预示着 NanoClaw 将支持更复杂的模型路由策略。
*   **知识库基础设施**：PR `#2133` 提议增加 `knowledge/raw/` 目录用于 LLM Wiki 编译，表明项目正在向长期记忆和知识管理能力拓展。
*   **远程 MCP 协议支持**：PR `#2131` 开始支持 HTTP/SSE 传输的远程 MCP 服务器，这将极大地扩展 NanoClaw 连接外部工具生态的能力，不再局限于本地 stdio。

## 7. 用户反馈摘要
从今日 Issues 中可以提炼出以下用户画像与痛点：

*   **场景深化**：用户已不满足于简单的对话，开始将 NanoClaw 接入真实工作流（如 "Accounting software"），这要求系统具有更高的稳定性。
*   **移动端体验敏感**：Issue #2139 涉及手机上传图片失败，反映出用户对跨平台（特别是移动端）多模态交互的高期待。
*   **控制欲增强**：用户希望能精细控制模型行为（如 Context Compact 阈值），对默认配置限制模型能力表示不满，这要求项目提供更透明的配置接口。

## 8. 待处理积压
*   **[PR #1624] Matrix E2EE Channel**：该 PR 自 4 月 4 日创建至今仍在活跃更新，是一个大型功能合并请求。Matrix 作为端到端加密通道，对隐私敏感用户极具价值，建议维护者重点关注其合并进度。
    *   **链接**：[qwibitai/nanoclaw PR #1624](https://github.com/qwibitai/nanoclaw/pull/1624)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-04-30)

## 1. 今日速览
NullClaw 项目今日整体活跃度较低，处于平稳维护状态。过去 24 小时内无代码合并记录，也未发布新版本，开发节奏相对平缓。社区焦点集中在关键功能在低资源设备上的可用性问题，一个关于 `web_search` 的严重 Bug 正在讨论中。同时，项目文档完善工作有小幅推进，今日关闭了一个关于安全策略文档缺失的 Issue。整体来看，项目当前主要在处理边缘场景的兼容性问题与文档补全。

## 2. 版本发布
无。

## 3. 项目进展
今日无合并或关闭的 Pull Request，代码库无变更。项目进展主要体现在社区问题的收敛与文档维护：
*   **文档完善**：关闭了 Issue [#874](https://github.com/nullclaw/nullclaw/issues/874)，解决了关于安全策略配置 `default_allowed_commands` 文档缺失的问题，提升了项目的易用性与安全性透明度。

## 4. 社区热点
今日社区最活跃的议题为 Issue **[#871](https://github.com/nullclaw/nullclaw/issues/871)**。
*   **议题**：[Critical] web_search is impractical on low-resource devices without direct DuckDuckGo support
*   **分析**：该 Issue 指出 NullClow 的核心定位之一是运行在低算力设备上，但当前的 `web_search` 实现依赖于 Brave Search API（需外部 Key 且开销较大），导致核心功能与目标场景（弱设备）脱节。作者请求直接支持 DuckDuckGo 作为替代方案。这反映了社区对“轻量化”和“离线/低成本运行”的强烈诉求，该问题若不解决，将严重影响项目在边缘计算场景下的核心价值。

## 5. Bug 与稳定性
今日报告的关键 Bug如下：
*   **🔴 严重**：Issue **[#871](https://github.com/nullclaw/nullclaw/issues/871)**
    *   **问题描述**：`web_search` 功能在低资源设备上不切实际，缺乏对 DuckDuckGo 的直接支持，导致搜索功能无法在项目目标设备上有效运行。
    *   **状态**：[OPEN]，目前尚无修复 PR 提交。
    *   **影响**：核心功能受阻，影响目标用户群的基础体验。

## 6. 功能请求与路线图信号
*   **轻量化搜索引擎支持**：源于 Issue [#871](https://github.com/nullclaw/nullclaw/issues/871)，用户明确请求集成 DuckDuckGo 作为搜索后端，以降低对高性能硬件和付费 API 的依赖。这是对项目“低资源设备友好”这一核心定位的强化信号，建议纳入下一阶段的开发路线图。

## 7. 用户反馈摘要
*   **痛点反馈**：用户 @uMendex 反馈项目在“廉价、低资源设备”上运行时遭遇瓶颈，现有的搜索方案迫使小内存设备进行不必要的 API 交互，增加了资源消耗和成本。用户期望项目能真正做到“开箱即用”且对硬件友好。

## 8. 待处理积压
*   **关键缺陷待修复**：Issue **[#871](https://github.com/nullclaw/nullclaw/issues/871)** 目前处于 Open 状态，且被标记为 Critical。该问题触及项目核心卖点（低资源运行），建议维护者优先评估引入轻量级搜索引擎支持的可行性，或提供临时的绕行方案。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-30)

## 1. 今日速览
IronClaw 项目今日处于**极高活跃度**状态，标志着 **"Reborn" 架构重构**进入密集落地期。过去 24 小时内，项目处理了 50 条 PR（其中 32 条已合并/关闭）和 27 条 Issue 更新，并发布了 **v0.27.0** 新版本。核心进展集中在底层运行时的模块化拆分，包括 WASM 运行时、HTTP 出口、密钥管理及内存存储等核心子系统的重构与集成。虽然社区对架构升级反应热烈，但也伴随着新版本的 QA 反馈和 TUI 显示问题，整体呈现出“大破大立”的迭代态势。

## 2. 版本发布
**[ironclaw-v0.27.0](https://github.com/nearai/ironclaw/releases/tag/v0.27.0) - 2026-04-29**
*   **更新重点**：
    *   **Engine-v2 增强**：为 v2 运行时契约增加了规范的能力状态词汇表 ([#2825](https://github.com/nearai/ironclaw/pull/2825))。
    *   **策略集中化**：在提示词、运行时、桥接投影和工具表面之间，集中了 action-vs-capability 表面策略，统一了行为控制逻辑。
*   **影响分析**：此版本是 "Reborn" 架构演进的重要基石，主要面向开发者和高级用户，为后续的运行时解耦奠定基础。

## 3. 项目进展
今日合并了大量与 **Reborn 架构** 相关的重构 PR，显示出团队正全力推进底层系统的模块化：

*   **核心架构落地**：
    *   **密钥与网络边界**：合并了 [#3077](https://github.com/nearai/ironclaw/pull/3077)，新增了 `ironclaw_secrets` 和 `ironclaw_network` crates，确立了生产级的密钥代理和网络边界隔离。
    *   **运行时通道**：[#3027](https://github.com/nearai/ironclaw/pull/3027) 成功合并，新增了 Script 和 MCP 运行时通道，扩展了智能体的执行环境。
    *   **测试覆盖**：[#3076](https://github.com/nearai/ironclaw/pull/3076) 增加了 Phase 1 集成测试，确保重构后的调度器和进程模块的稳定性。
    *   **错误修复**：[#3084](https://github.com/nearai/ironclaw/pull/3084) 修复了 `ProcessError` 错误映射过于宽泛的问题，提升了错误诊断的准确性。

*   **待合并的重大更新**：
    *   **原生推理链支持**：[#3102](https://github.com/nearai/ironclaw/pull/3102) 提议支持 Anthropic/OpenAI 等模型的原生 Chain-of-Thought（思维链），这将显著提升智能体的推理透明度。
    *   **WASM 运行时重构**：[#3097](https://github.com/nearai/ironclaw/pull/3097) 正在推进基于 WIT/component-model 的全新 WASM 工具运行时，以取代旧的 JSON-ABI 实现。

## 4. 社区热点
*   **[Issue #2987 [EPIC] Track Reborn architecture landing strategy](https://github.com/nearai/ironclaw/issues/2987)**
    *   **热度**：评论数 38 条，为今日最高。
    *   **分析**：该 Issue 是 Reborn 架构落地的总指挥。讨论焦点在于如何避免提交一个巨大的 PR，而是通过分组 PR 策略平滑过渡。这反映了社区和开发者对系统稳定性和代码审查质量的极高要求。
*   **[PR #3102 feat(llm): native LLM reasoning trace](https://github.com/nearai/ironclaw/pull/3102)**
    *   **热度**：新开 PR，关注度迅速上升。
    *   **分析**：旨在支持各大 LLM 供应商的“思维链”功能。这表明 IronClaw 正致力于追赶前沿模型能力，为用户提供更深层的 AI 思考过程可见性，是智能体可解释性的关键增强。

## 5. Bug 与稳定性
今日报告了多个与 v0.27.0 相关的问题，主要集中在 UI 和配置流程：

*   **高优先级 (P2)**：
    *   **TUI 显示故障**：[Issue #3103](https://github.com/nearai/ironclaw/issues/3103) 报告新版 High ASCII TUI 在特定 TTY 下显示异常。用户呼吁提供回退参数。
    *   **应用卡死**：[Issue #3082](https://github.com/nearai/ironclaw/issues/3082) 指出启用工具的 "Auto Approvals" 后，重启流程会导致应用挂起。
    *   **重复用户创建**：[Issue #3083](https://github.com/nearai/ironclaw/issues/3083) 发现用户管理界面因缺少防抖和加载态，允许创建重复用户。
*   **CI/CD 不稳定**：
    *   [Issue #3075](https://github.com/nearai/ironclaw/issues/3075) 等多个 Issue 报告 `public-smoke` 和 `persona-rotating` 金丝雀测试失败，需关注构建稳定性。

## 6. 功能请求与路线图信号
*   **Reborn 架构全景**：通过一系列新开 Issue（如 [#3085](https://github.com/nearai/ironclaw/issues/3085) HTTP 出口共享, [#3089](https://github.com/nearai/ironclaw/issues/3089) SessionThreadService），项目明确了向**微内核化服务架构**演进的趋势。未来的 IronClaw 将拆分为独立的会话管理、工具表面、事件投影等微服务模块。
*   **多模态增强**：[Issue #1341](https://github.com/nearai/ironclaw/issues/1341) 请求支持 PDF、音频等非图片文件附件。结合正在进行的 PR [#3065](https://github.com/nearai/ironclaw/pull/3065)（图片持久化），项目正在逐步补齐多模态能力的短板。

## 7. 用户反馈摘要
*   **开发者体验 (DX)**：[Issue #3044](https://github.com/nearai/ironclaw/issues/3044) 提出了强烈的需求，希望简化本地开发环境的配置。当前手动配置 grants、mounts 和策略对开发者不够友好，这直接推动了 "Reborn" 引入 Runtime Presets 和 Profiles 的计划。
*   **可用性痛点**：[Issue #3081](https://github.com/nearai/ironclaw/issues/3081) 指出 Portfolio 插件在没有配置项时仍显示 "Configure" 按钮，造成用户困惑。UI 细节的打磨仍是提升用户体验的关键。

## 8. 待处理积压
*   **[Issue #1341](https://github.com/nearai/ironclaw/issues/1341) (P1)**：Web Gateway 尚不支持非图片文件附件（PDF/音频等）。该 Issue 创建于 3 月中旬，至今未有关联 PR 合并，建议优先排期。
*   **Reborn 架构追踪**：大量 Reborn 相关的 "EPIC" Issue（如 [#2987](https://github.com/nearai/ironclaw/issues/2987)）仍处于 Open 状态，需要持续跟进其拆解出的子任务完成情况，确保架构重构不烂尾。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-30)

## 1. 今日速览
过去 24 小时，LobsterAI 项目保持了较高的迭代节奏，正式发布了 **2026.4.29** 新版本。此次更新重点增强了身份认证与模型供应商支持，新增了 ChatGPT OAuth 登录及小米、百度等模型适配。项目活跃度主要集中在代码合并与历史 PR 的状态维护上，共有 28 个 PR 产生动态。社区方面，新增 1 条关于 OpenAI 认证失败的 Issue，反馈了特定区域访问受限的问题。整体来看，项目正处于功能扩展期，但需关注社区反馈的兼容性挑战。

## 2. 版本发布
**Release: LobsterAI 2026.4.29** (发布于 2026-04-29)
本次更新包含多项功能增强与体验优化，建议用户升级以获得更多模型支持。

*   **主要变更**：
    *   **feat(auth)**: 新增 ChatGPT 的 OAuth 登录支持，简化登录流程。
    *   **feat(provider)**: 扩展模型生态，新增小米 mimo 和百度千帆 coding plan 支持。
    *   **feat(skill)**: 升级 youdaonote skill，优化文档处理能力。
    *   **fix(cowork)**: 修复 Gateway 因套餐模型列表更新触发的强制重启问题，提升稳定性。
    *   **fix(update)**: 移除安装状态下不准确的自动重启提示，避免误导用户。
    *   **fix(config)**: 更新火山引擎和 Qwen 的默认模型配置。
*   **迁移注意**：涉及 Gateway 重启逻辑的修复，升级后若出现模型切换卡顿，建议检查配置文件兼容性。
*   **链接**：[LobsterAI 2026.4.29](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.29)

## 3. 项目进展
今日共有 4 个 PR 合并入主干，标志着项目在以下方面取得实质性进展：

*   **功能集成 (PR #1876)**：成功合并了 `release/2026.04.27` 分支，将 OAuth 登录、新模型支持等核心功能推送到主分支，是今日最重要的里程碑。
*   **文档建设 (PR #1875, #1874)**：优化了 specs 文档结构并添加了 README，提升了项目的可维护性与新开发者上手体验。
*   **UI 优化 (PR #1873)**：调整了设置界面中 cowork bootstrap textarea 的高度，使其能够自适应填充可用空间，优化了界面布局。

## 4. 社区热点
今日社区活跃度相对平缓，讨论焦点主要集中在新增的 Issue 上。

*   **Issue #1877 [OPEN]**: **OpenAI 认证失败问题**
    *   **链接**: [netease-youdao/LobsterAI Issue #1877](https://github.com/netease-youdao/LobsterAI/issue/1877)
    *   **内容**: 用户报告在本地 Codex 可用的情况下，LobsterAI 出现 ChatGPT 登录失败，报错 `HTTP 403 unsupported_country_region_territory`。
    *   **分析**: 这是一个典型的区域限制问题，可能源于新引入的 OAuth 认证流程未正确处理代理或区域限制，或服务端接口对特定 IP 的拦截。该问题直接影响海外用户或使用代理用户的登录体验，需重点关注。
*   **PR 区动态**: 大量标记为 `[stale]` 的历史 PR（如 #853, #857 等）今日均有活跃更新，表明项目正在进行 CI/CD 自动化检查或维护者批量清理积压工作。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在身份认证与系统兼容性方面。

*   **P0 - 功能阻断**:
    *   **OpenAI 认证失败 (#1877)**: 新版本引入的 OAuth 登录在某些网络环境下返回 403 错误，导致无法使用 ChatGPT 服务。**当前状态**: Open，尚无修复 PR。
*   **已修复问题**:
    *   **Gateway 强制重启**: 已在 v2026.4.29 中修复，解决了模型列表更新导致的不必要服务中断。
    *   **JSON 解析风险 (PR #860)**: 社区指出 SSE 流式处理中 JSON 解析缺乏容错，可能导致崩溃。该 PR 仍处于 Open/Stale 状态，建议官方评估其严重性。

## 6. 功能请求与路线图信号
通过分析长期未合并但活跃的 PR，挖掘出社区强烈需求的功能方向：

*   **数据导出与分享**: PR #853 (Markdown/JSON 导出) 和 PR #880 (消息勾选分享、图片品牌化) 显示用户对会话数据的二次处理和分享有强需求，可能被纳入后续版本。
*   **长上下文优化**: PR #866 提出 "Lost in the Middle" 解决方案，旨在提升长对话场景下的 AI 记忆力。这是 AI 助手领域的关键竞争力，符合产品技术路线。
*   **安全加固**: PR #869 和 #877 提出限制 `shell.openExternal` 协议白名单，防止 RCE 漏洞。此类安全 PR 通常优先级较高，预计很快会被纳入主分支。

## 7. 用户反馈摘要
从 Issue #1877 的反馈中提炼出以下用户痛点：

*   **网络环境兼容性**: 用户在本地环境（如 Codex）可用，但在应用内受阻，反映出用户对应用代理设置或网络请求逻辑的透明度有更高要求。
*   **错误提示**: 错误信息 `unsupported_country_region_territory` 较为生硬，用户希望获得更明确的指引（如“请检查代理设置”或“当前区域不支持”）。

## 8. 待处理积压
以下重要 PR 长期处于 Open 状态，建议维护者及时跟进：

1.  **PR #869 [stale]**: 修复 `shell.openExternal` 远程代码执行风险。涉及安全底线，建议优先 Review。
    *   链接: [netease-youdao/LobsterAI PR #869](https://github.com/netease-youdao/LobsterAI/pull/869)
2.  **PR #863 [stale]**: SQLite 原子写入修复。防止崩溃导致数据库损坏，对数据安全至关重要。
    *   链接: [netease-youdao/LobsterAI PR #863](https://github.com/netease-youdao/LobsterAI/pull/863)
3.  **PR #857 [stale]**: 新增 MCP 对 HTTP Streaming 的支持。这是社区贡献的重要功能特性，符合 MCP 协议发展趋势。
    *   链接: [netease-youdao/LobsterAI PR #857](https://github.com/netease-youdao/LobsterAI/pull/857)

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-30)

**数据来源周期**：2026-04-29 (过去24小时)
**分析师**：AI 开源项目分析助手

---

### 1. 今日速览
Moltis 项目今日保持高频迭代态势，单日连发两个版本，项目活跃度处于**高位**。核心进展集中在**安全性修复**与**多模态功能拓展**，成功合并了修复沙箱逃逸漏洞的关键 PR，并引入了语音人格与第三方导入功能。社区方面，UI 交互体验（滚动问题）与部署稳定性成为讨论焦点。整体来看，项目正在快速补齐安全短板，并积极探索电话通信等新交互场景。

### 2. 版本发布
今日连续发布两个版本，建议用户尽快升级以修复安全问题。

*   **Release 20260429.02** ([链接](https://github.com/moltis-org/moltis/releases/tag/20260429.02))
    *   **推断更新**：推测包含针对沙箱逃逸漏洞的紧急安全修复，以及可能的稳定性补丁。
*   **Release 20260429.01** ([链接](https://github.com/moltis-org/moltis/releases/tag/20260429.01))
    *   **推断更新**：包含新增的语音人格功能及 Claude Code/Hermes 导入工具的集成。

### 3. 项目进展
今日共有 3 个 PR 合并，显著提升了项目的安全性与扩展性。

*   **安全性修复**: **PR #924** ([fix(sandbox): prevent sandbox escape](https://github.com/moltis-org/moltis/pull/924)) 已合并。修复了 `RestrictedHostSandbox` 导致的沙箱逃逸风险，解决了 Issue #923，防止沙箱命令在宿主机环境执行，这是一个关键的安全更新。
*   **功能增强**: **PR #916** ([feat(voice): add voice personas](https://github.com/moltis-org/moltis/pull/916)) 已合并。引入了语音人格概念，允许为 TTS 定义稳定的角色音色，增强了 AI 的个性化表现。
*   **生态互操作性**: **PR #917** ([feat(import): add Claude Code and Hermes import](https://github.com/moltis-org/moltis/pull/917)) 已合并。Web UI 现支持导入 Claude Code 和 Hermes 配置，降低了用户从其他框架迁移的成本。

### 4. 社区热点
今日最活跃的讨论集中在用户体验与部署问题上。

*   **Issue #922 [Bug]: Chat scrolling isn't working** ([链接](https://github.com/moltis-org/moltis/issues/922))
    *   **热度**：3 条评论
    *   **分析**：用户反馈聊天界面滚动功能异常。维护者 @Cstewart-HC 迅速响应并提交了修复 PR #925。该问题源于 PR #846 引入的 `ResizeObserver` 逻辑干扰了用户的手动滚动操作，反映出社区对 UI 流畅度的高度敏感。
*   **Issue #918 [Bug]: Telegram broken in Docker** ([链接](https://github.com/moltis-org/moltis/issues/918))
    *   **热度**：3 条评论，1 个点赞
    *   **分析**：Docker 环境下 Telegram 集成故障影响了部分用户的生产环境部署。该 Issue 已关闭，表明问题已在最新版本中解决。

### 5. Bug 与稳定性
今日报告的 Bug 涵盖安全漏洞、UI 交互及平台集成问题，整体响应速度较快。

*   **🔴 严重**:
    *   **Issue #923**: 沙箱逃逸漏洞，允许命令在宿主机运行。**状态**：已修复 (PR #924)。
*   **🟠 一般**:
    *   **Issue #922**: 聊天窗口无法正常滚动。**状态**：修复 PR #925 待合并。
    *   **Issue #918**: Docker 版本中 Telegram 集成失效。**状态**：已关闭 (推测已修复)。
    *   **Issue #927**: MCP 页面缺少 OAuth Token 过期后的重新认证按钮。**状态**：Open，待处理。
*   **🟡 体验问题**:
    *   **Issue #919**: 模型发现超时（30秒限制）。**状态**：Open。

### 6. 功能请求与路线图信号
根据 Open 状态的 Issues 与 PRs，项目正向“可配置化”与“多模态”演进。

*   **电话通信能力**: **PR #920** ([feat(telephony): add phone call support](https://github.com/moltis-org/moltis/pull/920)) 正在审核中。通过 Twilio 集成电话拨打功能，预示 Moltis 将突破文本交互边界。
*   **高级 Agent 控制**: **PR #926** ([feat: add /btw, /fast... commands](https://github.com/moltis-org/moltis/pull/926)) 提议新增 5 个斜杠命令及辅助模型配置，旨在丰富 Agent 的交互模式。
*   **用户诉求**: **Issue #906** ([Make sub-agents configurable](https://github.com/moltis-org/moltis/issues/906)) 提出在 WebUI 中配置子智能体的需求，显示出用户对复杂 Agent 编排的强烈需求。

### 7. 用户反馈摘要
*   **痛点**：用户 @bsarkisov 对 UI 细节（滚动、超时设置）有较高要求，并发现了严重的安全漏洞，显示出深度使用痕迹。
*   **场景**：Docker 部署场景仍是主流，相关问题的优先级较高。OAuth 认证流程在长时运行后的续期问题开始显现。
*   **满意度**：尽管有 Bug 报告，但用户反馈具体且附带了详尽的预检清单，说明社区开发者素质较高，且对项目维护者的响应速度持积极态度。

### 8. 待处理积压
*   **PR 积压**: **PR #921** (代码索引自动触发) 和 **PR #920** (电话支持) 仍处于 Open 状态，均为功能较大的更新，建议维护者优先进行 Code Review 以避免功能堆积。
*   **新 Issue 响应**: Issue #927 (OAuth 重认证按钮) 和 #919 (模型发现超时) 尚无维护者回复，建议在下一版本规划中予以关注。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-04-30)

## 1. 今日速览
CoPaw 项目今日保持极高的活跃度，共处理了 **48 条 Issues**（关闭 34 条）和 **17 条 PRs**（合并/关闭 7 条），显示出维护团队高效的迭代节奏。项目发布了 **v1.1.5** 版本，重点优化了 CJK（中日韩）内存搜索机制与上下文压缩的稳定性。社区方面，用户对 Agent 切换时的状态保持及多模态支持表现出强烈需求，相关修复已合并。企业微信频道的稳定性问题仍是关注焦点，多个修复 PR 正在审核中。

## 2. 版本发布
### v1.1.5
**更新亮点**：
- **✨ CJK 感知内存搜索**：优化了内存搜索功能，现在能够对 CJK 查询进行字符级分词，同时保留拉丁字符/数字的连续性，显著提升中文等语言的搜索准确性 ([#3811](https://github.com/agentscope-ai/QwenPaw/pull/3811))。
- **✨ 上下文压缩后备机制**：当基于 LLM 的上下文压缩失败或被禁用时，系统将自动启用后备机制，保证了长对话场景下的稳定性。

## 3. 项目进展
今日合并的 PR 主要集中在 **前端体验优化** 与 **多模态/频道稳定性增强**，显著提升了 WebUI 的交互流畅度：

- **前端状态持久化修复**：合并了 [PR #3958](https://github.com/agentscope-ai/QwenPaw/pull/3958) 和 [PR #3959](https://github.com/agentscope-ai/QwenPaw/pull/3959)，解决了切换 Agent 或页面时聊天 Session 丢失及任务中断的问题，完善了 `lastChatIdByAgent` 功能。
- **多模态消息支持**：[PR #3509](https://github.com/agentscope-ai/QwenPaw/pull/3509) 已合并，新增了对图片/文件等多媒体消息的支持，并自动检测媒体类型及路径安全校验。
- **文档与引导优化**：[PR #3954](https://github.com/agentscope-ai/QwenPaw/pull/3954) 合并，优化了工作空间初始化逻辑，避免重复创建引导文件。

## 4. 社区热点
今日讨论最活跃的 Issue 集中在 **Agent 隔离机制** 与 **企业微信稳定性**：

- **[Issue #3936](https://github.com/agentscope-ai/QwenPaw/issues/3936) [Open]**：用户讨论智能体工作空间的隔离性。目前不同 Agent 可互相访问工作空间，用户希望实现“白名单”机制或完全隔离，避免敏感数据泄露或相互干扰。
- **[Issue #2757](https://github.com/agentscope-ai/QwenPaw/issues/2757) [Open]**：企业微信频道频繁断连问题持续发酵，用户反馈需频繁重新保存配置才能恢复，已有相关修复 PR 提交但尚未合并。
- **[Issue #3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) [Open]**：报告了严重的身份混淆 Bug，主控 Agent 接收频道消息后工作空间被错误切换，导致自我认知错乱。

## 5. Bug 与稳定性
今日报告的关键 Bug 如下，其中前端状态丢失问题已修复：

- **严重 [已修复]**：切换 Agent 后 Session 丢失 ([Issue #3919](https://github.com/agentscope-ai/QwenPaw/issues/3919))。前端未正确保存/恢复 `chat_id`，导致对话中断。现已通过 [PR #3958](https://github.com/agentscope-ai/QwenPaw/pull/3958) 修复。
- **严重 [待修复]**：Agent 身份混淆 ([Issue #3957](https://github.com/agentscope-ai/QwenPaw/issues/3957))。通过频道接收消息时，Agent 工作空间意外切换，可能导致执行权限错误。
- **中等 [待修复]**：大文件读取内存溢出 ([Issue #3932](https://github.com/agentscope-ai/QwenPaw/issues/3932))。`read_file_safe` 函数错误地将 1GB 限制作为读取参数，导致低内存环境崩溃。
- **中等 [待修复]**：云效 MCP 创建失败 ([Issue #3951](https://github.com/agentscope-ai/QwenPaw/issues/3951))。用户在集成阿里云云效 MCP Server 时遇到配置错误。

## 6. 功能请求与路线图信号
结合用户反馈与 PR 动向，以下功能可能成为下一阶段重点：

- **Agent 间隔离与权限控制**：鉴于 [Issue #3936](https://github.com/agentscope-ai/QwenPaw/issues/3936) 的热度，文件系统白名单/黑名单的细粒度控制需求强烈。
- **桌面端重构**：[PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) 正在推进 Tauri 2.x 支持，替代旧架构，有望解决 [Issue #3964](https://github.com/agentscope-ai/QwenPaw/issues/3964) 提到的 Windows 资源占用高的问题。
- **多模态模型路由**：[Issue #3940](https://github.com/agentscope-ai/QwenPaw/issues/3940) 建议为图片输入单独配置视觉模型路由，避免用户需手动切换模型，结合已合并的多模态支持 PR，这是易用性的重要补充。
- **交互式 UI 改进**：用户对 [Issue #2720](https://github.com/agentscope-ai/QwenPaw/issues/2720) 提到的 Approve 操作改为按钮形式呼声很高，相关 PR [PR #3941](https://github.com/agentscope-ai/QwenPaw/pull/3941) 已提交，正在飞书频道试点。

## 7. 用户反馈摘要
- **痛点**：WebUI 在执行复杂任务（>10次工具调用）时性能卡顿严重 ([Issue #2890](https://github.com/agentscope-ai/QwenPaw/issues/2890))；历史记录偶尔丢失；Windows 客户端资源占用高。
- **场景**：用户广泛使用飞书、钉钉、企业微信作为连接频道，但对频道的稳定性（掉线、重连）较为敏感。
- **满意点**：v1.1.5 对中文搜索的优化受到好评；Agent 切换 Session 丢失问题的修复极大地提升了体验。

## 8. 待处理积压
以下重要 Issue 或 PR 长期未合并或响应，建议维护者关注：

- **[PR #3846](https://github.com/agentscope-ai/QwenPaw/pull/3846) [Open]**：支持 GitHub Copilot 模型提供商。这是一项高价值功能扩展，已提交数日，建议优先 Review。
- **[PR #3963](https://github.com/agentscope-ai/QwenPaw/pull/3963) & [PR #3950](https://github.com/agentscope-ai/QwenPaw/pull/3950) [Open]**：企业微信频道的连接稳定性修复。涉及重连逻辑优化和 "Thinking..." 状态卡死的修复，直接影响大量企业用户。
- **[Issue #3038](https://github.com/agentscope-ai/QwenPaw/issues/3038) [Closed but Requested]**：WebUI 时间戳显示需求虽被关闭，但用户反馈强烈，建议在后续版本考虑重新纳入。

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