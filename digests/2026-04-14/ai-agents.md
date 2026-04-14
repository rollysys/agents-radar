# OpenClaw 生态日报 2026-04-14

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-14 02:49 UTC

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

# OpenClaw 项目动态日报 (2026-04-14)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，过去 24 小时内 Issues 和 PR 更新量均达到 **500 条**，显示出社区与开发团队的高频互动。项目发布了 **v2026.4.12** 正式版与 **v2026.4.14-beta.1** 测试版，重点修复了 UI 安全漏洞并优化了 Telegram/Feishu 等渠道的集成体验。虽然大量 Issue 反映了近期版本引入的回归问题（如模型识别失败、OAuth 竞态条件），但开发团队响应迅速，已提交多项关键修复 PR，整体项目处于快速迭代与维稳并行的健康状态。

## 2. 版本发布

### v2026.4.14-beta.1
此版本主要针对 Telegram 集成与 UI 安全性进行了更新。
- **新功能**:
    - **Telegram 主题名称识别**: Agent 现在可以通过学习 Telegram 论坛服务消息，在上下文、提示元数据和插件钩子元数据中展示人类的主题名称，而非仅显示 ID。([#65973](https://github.com/openclaw/openclaw/pull/65973))
- **安全修复**:
    - **UI/聊天**: 将 `marked.js` 替换为 `markdown-it`，以防止恶意构造的 Markdown 内容引发的安全风险。

### v2026.4.12
这是一个广泛的质量改进版本，重点在于提升插件加载、内存与“做梦”机制的可靠性。
- **改进**:
    - **QA/实验室**: 增加了基于 Convex 的 Telegram 凭证池租赁功能及 `openclaw qa credentials` 管理命令。
    - **插件与内存**: 提升了插件加载机制的稳定性，优化了内存管理和 Dreaming 功能的可靠性。
    - **本地模型**: 增加了新的本地模型选项。
    - **飞书**: 优化了设置路径，使其更加流畅。

## 3. 项目进展
今日共有 **160 条 PR** 被合并或关闭，重点推进了多渠道集成修复与稳定性建设：

- **关键修复合并**:
    - **媒体处理安全**: PR [#66022](https://github.com/openclaw/openclaw/pull/66022) 加强了本地附件规范化处理，防止路径解析失败时的降级风险，提升了系统安全性。
    - **Telegram 集成**: PR [#66107](https://github.com/openclaw/openclaw/pull/66107) 持久化了 Telegram 主题名称缓存，确保重启后上下文不丢失；该修复已随 beta.1 发布。
    - **Feishu 集成**: PR [#66148](https://github.com/openclaw/openclaw/pull/66148) 移除了流式卡片更新的节流限制，解决了长回复场景下的消息重复与截断问题。

- **功能推进**:
    - **TTS 支持**: PR [#10356](https://github.com/openclaw/openclaw/pull/10356) 正在添加 Typecast TTS 提供商，支持情感预设与音频调节，目前处于 Open 状态。
    - **诊断能力**: PR [#66286](https://github.com/openclaw/openclaw/pull/66286) 增加了在诊断日志中透传上游请求 ID 的功能，便于追踪 OpenAI/Anthropic 请求链路。

## 4. 社区热点
今日社区讨论主要集中在模型兼容性与认证机制上：

- **[#26322 OAuth Token 刷新竞态条件](https://github.com/openclaw/openclaw/issues/26322)** (评论 21, 👍 14)
    - **诉求**: 多个 Agent 共享 OAuth 配置时，并发刷新 Token 导致 `refresh_token_reused` 错误，引发故障转移。用户强烈呼吁解决此并发安全隐患。

- **[#64799 Volcengine 模型识别失败](https://github.com/openclaw/openclaw/issues/64799)** (评论 19)
    - **诉求**: macOS 上重装后，Volcengine Coding Plan 模型无法识别，报错 "Unknown model"。用户对模型配置的向后兼容性表示担忧。

- **[#55342 技能行为信誉系统 RFC](https://github.com/openclaw/openclaw/issues/55342)** (评论 8)
    - **诉求**: 针对恶意技能问题，社区提出了构建“行为信誉层”的 RFC，建议在身份验证之外增加行为审计，讨论质量较高。

- **[#58986 Discord 斜杠命令无输出](https://github.com/openclaw/openclaw/issues/58986)** (评论 8, 👍 6)
    - **诉求**: Discord 集成中，斜杠命令仅返回 "✅ Done"，用户无法看到实际执行结果，严重影响使用体验。

## 5. Bug 与稳定性
今日报告了大量回归问题，主要集中在模型配置、语音转录和浏览器控制方面：

### 严重/阻塞
- **[#62505 Coding Agent 功能失效](https://github.com/openclaw/openclaw/issues/62505)** [Regression]: Agent 无法完成任务，仅输出模糊状态。**状态**: Open，待修复。
- **[#26322 OAuth 竞态故障转移](https://github.com/openclaw/openclaw/issues/26322)** [Regression]: 共享 Auth Profile 导致认证失败。**状态**: Open。

### 功能回归
- **[#64238 Qwen 模型识别失败](https://github.com/openclaw/openclaw/issues/64238)**: 升级至 2026.4.9 后 `qwen/qwen3.6-plus` 报错 "Unknown model"。**状态**: Open。
- **[#63677 WhatsApp 语音转录失效](https://github.com/openclaw/openclaw/issues/63677)** [Regression]: 语音消息直接作为音频附件处理，绕过了 STT 流程。**状态**: Open。
- **[#48479 Google Vertex 认证失败](https://github.com/openclaw/openclaw/issues/48479)** [Regression]: Gemini 3.x 模型认证方式错误回退至 API Key 而非 ADC。**状态**: Open。

### 已修复/已处理
- **[#65611 CDP Session 检测失败](https://github.com/openclaw/openclaw/issues/65611)** [Regression]: 已关闭，可能已在近期版本修复。

## 6. 功能请求与路线图信号
- **TTS 增强**: 社区正在贡献 Typecast TTS 提供商 ([#10356](https://github.com/openclaw/openclaw/pull/10356))，支持多情感预设，有望在下一版本合并。
- **超时配置**: Issue [#34644](https://github.com/openclaw/openclaw/issues/34644) 建议将嵌入式 Agent 的 LLM 请求超时时间（目前硬编码 15s）设为可配置，以应对上游延迟波动。这符合项目近期优化本地模型和嵌入式 Agent 的路线。
- **Amazon Bedrock Bearer Auth**: Issue [#30215](https://github.com/openclaw/openclaw/issues/30215) 请求支持 Amazon Bedrock 的 API Key (Bearer Token) 认证，目前仅支持 SDK 默认链。

## 7. 用户反馈摘要
- **配置复杂性与兼容性**: 多个 Issues (如 #64799, #64238) 表明，用户在升级或重装时经常遇到模型解析失败的问题，反映出模型配置的迁移或解析逻辑可能存在脆弱性。
- **多模态体验不佳**: 语音消息转录失败 (Telegram #17101, WhatsApp #63677) 是长期痛点，用户反馈即便配置正确，STT 流程仍常被绕过。
- **平台差异**: 有用户反馈 Feishu 的配置策略在 Windows 上失效而在 Linux 正常 (#33862)，提示跨平台一致性问题。

## 8. 待处理积压
以下重要 Issue 长期未获解决或响应较少，建议维护者关注：

- **[#17101 Telegram 语音消息无法转录](https://github.com/openclaw/openclaw/issues/17101)** (创建于 2026-02-15): 尽管配置正确，.ogg 音频仍无法转录，影响核心多模态体验。
- **[#22358 子 Agent 完成后的扩展钩子请求](https://github.com/openclaw/openclaw/issues/22358)** (创建于 2026-02-21): 功能请求，允许在子 Agent 结束后触发钩子，对于构建复杂工作流至关重要。
- **[#33862 Feishu 群组策略白名单在 Windows 上失效](https://github.com/openclaw/openclaw/issues/33862)** (创建于 2026-03-04): 跨平台兼容性问题，影响企业用户部署。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比日报 (2026-04-14)

## 1. 生态全景
当前 AI 智能体开源生态正处于从**功能快速扩张向稳定性与生产就绪转型**的关键期。头部项目（如 OpenClaw, Hermes Agent）在多渠道集成（Telegram/微信/飞书）和多模态能力上竞争激烈，但普遍面临由架构重构和版本迭代引发的回归问题与配置复杂度挑战。中腰部项目（如 Moltis, NanoBot）则通过聚焦特定垂直领域（如隐私本地化、架构解耦、成本控制）构建差异化优势，工程质量和响应速度往往优于头部。整体来看，**安全性（沙箱逃逸、PII 保护）、多智能体协作架构、以及长上下文与记忆管理**已成为技术迭代的核心战场。

## 2. 各项目活跃度对比

| 项目名称 | Issues 活跃度 | PRs 活跃度 | 今日发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 极高 (~500 更新) | 高 (160 merged) | v2026.4.12, v2026.4.14-beta.1 | ⚠️ **高迭代风险**：功能迭代极快，但引入大量回归 Bug（OAuth/模型识别），维护压力巨大。 |
| **Hermes Agent** | 极高 (新增 43, 积压>1000) | 高 (50 更新) | v0.9.0 | 🔴 **积压预警**：发布后 Bug 激增，Issue 积压突破千级，响应速度面临严峻挑战。 |
| **Moltis** | 低 (5 关闭) | 极高 (18 merged) | 2 个版本 | 🟢 **极佳**：实现了“零积压”和“即报即修”，工程效率极高，架构解耦稳步推进。 |
| **Zeroclaw** | 中 (20 更新) | 高 (50 更新) | 无 | 🟡 **攻坚期**：解决了 S0 级安全漏洞，正处于架构优化关键期，编译性能待提升。 |
| **IronClaw** | 高 (44 更新) | 高 (50 更新) | 无 | 🟡 **测试磨合**：QA 压力大，Web UI 崩溃与内存泄漏频发，正处于密集修 Bug 阶段。 |
| **NanoBot** | 中 (58 更新) | 中 (56 更新) | 无 | 🟢 **稳健**：聚焦架构优化（双层架构、模型路由），成本控制痛点得到社区关注。 |
| **CoPaw (QwenPaw)** | 高 (43 更新) | 中 (19 更新) | v1.1.1-beta.1 | 🟠 **社区动荡**：品牌重塑引发用户强烈不满，迁移路径混乱，但核心功能迭代仍在继续。 |
| **PicoClaw** | 低 | 中 (42 更新, 12 merged) | 无 | 🟢 **良好**：重构多实例架构，解决关键权限 Bug，处于稳步迭代期。 |
| **LobsterAI** | 低 (2 更新) | 中 (20 更新) | 2026.4.13 | 🟢 **稳定**：专注 OpenClaw 引擎集成修复，发布节奏稳定。 |
| **NanoClaw** | 低 (4 更新) | 中 (12 更新) | 无 | 🟢 **良好**：聚焦隐私安全与多渠道，容器化部署问题响应及时。 |
| **NullClaw** | 低 (3 更新) | 低 (仅新增修复 PR) | 无 | 🟢 **高效**：虽活跃度低，但实现“Issue 零积压”，维护者响应极快。 |
| **EasyClaw** | 无活动 | 低 (PR 更新) | 无 | ⚪ **静默**：仅国际化 PR 在推进，处于维护状态。 |
| **TinyClaw / ZeptoClaw**| 无活动 | 无活动 | 无 | ⚪ **静默**：无动态。 |

## 3. OpenClaw 在生态中的定位

作为生态的**核心参照系**，OpenClaw 展现出了显著的“平台化”特征，但也背负了最沉重的历史包袱。

*   **优势**：生态规模最大，渠道集成最全（Telegram/Feishu/Discord 等），插件与记忆机制（Dreaming）成熟，是其他项目对标的标杆。
*   **技术路线差异**：相比 Moltis 的“模块化 Rust 重写”或 NanoBot 的“轻量级双层架构”，OpenClaw 采取了单体核心+插件的架构，导致核心代码耦合度高，近期频繁出现模型识别失败和 OAuth 竞态问题，显示出其重构难度大。
*   **社区规模**：Issue/PR 更新量级远超其他项目（500+ vs 50+），但也因此产生了大量回归问题反馈，社区处于“高噪”状态，维护者正疲于修补安全漏洞（如 `marked.js` 替换）和解决兼容性问题。

## 4. 共同关注的技术方向

1.  **记忆与上下文管理**
    *   **涉及项目**：OpenClaw, NanoBot, NanoClaw, Moltis。
    *   **具体诉求**：OpenClaw 优化了 Dreaming 机制；NanoBot 引入事件驱动的记忆触发解决上下文溢出；NanoClaw 实现了 SQLite 优先的自改进记忆体；Moltis 增加了 Session 归档 UI。社区普遍在寻求比单纯扩充上下文窗口更低成本、更持久的记忆方案。

2.  **多渠道与通讯集成**
    *   **涉及项目**：Hermes Agent, Moltis, OpenClaw, PicoClaw。
    *   **具体诉求**：全平台覆盖是趋势。Hermes 新增微信/iMessage 支持；Moltis 合并了 XMPP；PicoClaw 修复了 Feishu/微信集成。重点已从“能连上”转向“体验优化”（如 Telegram 主题识别、Feishu 卡片去截断）。

3.  **安全性与沙箱逃逸**
    *   **涉及项目**：Zeroclaw, OpenClaw, NanoClaw。
    *   **具体诉求**：Zeroclaw 修复了 S0 级命令注入漏洞；NanoClaw 扩展了 PII 保护至文件；OpenClaw 修复了 UI 安全漏洞。随着 Agent 权限扩大，防止恶意构造输入和工具滥用成为刚需。

4.  **本地化与隐私部署**
    *   **涉及项目**：Moltis, NanoClaw, IronClaw。
    *   **具体诉求**：Moltis 强推本地语音克隆 和 Whisper；NanoClaw 强调容器内隐私；IronClaw 用户呼吁更简单的配置。用户对数据不出域的本地模型支持呼声强烈。

## 5. 差异化定位分析

*   **OpenClaw & Hermes Agent (全栈平台型)**：
    *   **定位**：致力于成为“全能”个人助手，支持尽可能多的渠道和模型。
    *   **痛点**：复杂度高，升级易断层，配置门槛高，适合极客和有运维能力的团队。

*   **Moltis & NanoBot (架构革新/高性能型)**：
    *   **定位**：Moltis 走 Rust 高性能与本地隐私路线；NanoBot 走轻量级动态路由与成本优化路线。
    *   **优势**：更现代的架构，更快的响应速度（Moltis 零积压），更关注 Token 成本。

*   **Zeroclaw & IronClaw (企业级/生产就绪型)**：
    *   **定位**：Zeroclaw 强调安全与沙箱；IronClaw 聚焦多租户与 Web UI 稳定性。
    *   **场景**：面向企业部署，注重权限隔离、审计和稳定性。

*   **CoPaw (QwenPaw) (特定生态集成型)**：
    *   **定位**：深度绑定阿里系模型与生态，文件操作能力强。
    *   **现状**：处于品牌重塑阵痛期，用户迁移体验受损。

## 6. 社区热度与成熟度

*   **快速迭代期（高热度，中低稳定性）**：
    *   **Hermes Agent, OpenClaw**：活跃度极高，但 Bug 频发，回归问题多。社区反馈噪音大，属于“青春期”躁动，适合愿意尝鲜和参与贡献的用户。

*   **质量巩固期（中热度，高稳定性）**：
    *   **Moltis, NullClaw, LobsterAI**：Issue 关闭率极高，维护者响应迅速，版本质量可靠。适合追求稳定生产环境的用户。

*   **架构重塑期**：
    *   **Zeroclaw, NanoBot**：正在解决核心技术债（安全漏洞、架构解耦），处于量变到质变的过程，未来可期。

## 7. 值得关注的趋势信号

1.  **Agent 的“成本焦虑”**：
    *   NanoBot 社区热议的“心跳任务 Token 浪费”和“动态模型路由”表明，随着应用落地，Token 成本已成为开发者核心痛点。未来的 Agent 框架必须具备精细化的上下文管理和模型路由能力。

2.  **安全短板的补齐**：
    *   Zeroclaw 的 S0 级漏洞修复和 NanoClaw 的 PII 保护表明，Agent 正从“玩具”向“工具”转变。允许 Agent 执行 Shell 命令或访问文件将伴随严格的沙箱限制和审计机制，**“安全优先”将取代“功能优先”成为默认设计原则**。

3.  **品牌与信任的脆弱性**：
    *   CoPaw/QwenPaw 的案例警示，开源项目的品牌连续性和迁移体验至关重要。技术再强，若品牌重塑和配置迁移割裂用户体验，将直接导致社区信任危机。

4.  **Web UI 成为标配战场**：
    *   Hermes, IronClaw, Moltis 均在大力投入 Web Dashboard 的开发与优化。CLI 已不能满足大众用户需求，一个轻量、高性能、可视化的 Web UI 已成为 Agent 项目争夺用户的入场券。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-14)

## 1. 今日速览
NanoBot 项目今日维持着高度活跃的开发与维护状态。过去 24 小时内，项目处理了 **58 条 Issue 更新**（关闭 40 条，活跃度极高）和 **56 条 PR 更新**（合并/关闭各半），显示出维护团队正在高效清理积压并推进新功能。社区讨论焦点集中在**资源消耗优化**（如心跳任务的 Token 浪费）和**架构增强**（如模型动态路由、API 流式支持）。整体来看，项目正在向更稳定、更易扩展的方向快速迭代，但也暴露出部分版本升级带来的回归问题。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
今日共有多个重要 PR 被合并或取得关键进展，显著提升了项目的稳定性与功能性：

*   **架构优化与修复**：
    *   [PR #1224](https://github.com/HKUDS/nanobot/pull/1224) (CLOSED): 引入了可选的**双层架构（Steering Loop + AgentMessage）**，允许用户在 Agent 执行工具链期间动态发送消息并合并上下文，极大提升了交互的灵活性。
    *   [PR #2988](https://github.com/HKUDS/nanobot/pull/2988) (CLOSED): 修复了 Git 存储冲突问题，将 Git 数据移至 `.nanobot/git/` 目录，解决了与用户自有 Git 仓库冲突的痛点。
    *   [PR #3119](https://github.com/HKUDS/nanobot/pull/3119) (CLOSED): 修复了定时任务（Cron）中 `deliver: false` 标记失效的问题，确保静默执行任务。

*   **新功能推进**：
    *   [PR #3121](https://github.com/HKUDS/nanobot/pull/3121) (OPEN): 提交了**动态模型路由支持**，允许通过 Hook 机制根据任务复杂度自动选择不同模型（如简单任务选便宜模型），这是社区高度期待的功能。
    *   [PR #3122](https://github.com/HKUDS/nanobot/pull/3122) (OPEN): 改进了记忆整理机制，将 Dream 由定时触发改为**事件驱动触发**，解决了上下文溢出问题。
    *   [PR #3101](https://github.com/HKUDS/nanobot/pull/3101) (OPEN): 为 API 增加了 **SSE 流式响应支持**，提升了 API 使用体验。

## 4. 社区热点
今日社区讨论最热烈的话题集中在性能损耗与模型兼容性上：

*   **[Issue #2375](https://github.com/HKUDS/nanobot/issues/2375) [CLOSED]**: **心跳任务导致巨额 Token 消耗**。
    *   **热度**：评论 11 条。
    *   **分析**：用户反馈心跳任务（每 30 分钟）会持久化会话历史，导致单次调用消耗高达 56 万 Token。这反映出在长时运行任务中，上下文管理策略对成本控制至关重要。该问题已被关闭，推测已修复。
*   **[Issue #2760](https://github.com/HKUDS/nanobot/issues/2760) [CLOSED]**: **重试放大风险**。
    *   **热度**：评论 10 条。
    *   **分析**：讨论了应用层重试与 SDK 层重试叠加导致上游负载激增 3 倍的风险。这表明项目正在深入优化底层网络请求的健壮性。
*   **[Issue #2185](https://github.com/HKUDS/nanobot/issues/2185) [OPEN]**: **版本升级导致 Gemini 模型不可用**。
    *   **热度**：评论 8 条。
    *   **分析**：用户从 0.1.4 升级到 0.1.4post5 后 Gemini 模型失效。这是一个典型的回归问题，引起了较多用户共鸣。

## 5. Bug 与稳定性
今日报告并处理了多个关键 Bug，主要集中在兼容性和资源管理：

*   **严重** - **Windows 平台 Exec 工具失效**：[Issue #2868](https://github.com/HKUDS/nanobot/issues/2868) 指出某次提交后强制使用 Bash 导致 Windows 原生环境无法运行。**状态：已关闭。**
*   **严重** - **Token 消耗异常**：[Issue #2375](https://github.com/HKUDS/nanobot/issues/2375) 心跳任务历史记录导致 Token 爆炸式增长。**状态：已关闭。**
*   **回归** - **Gemini 模型兼容性**：[Issue #2185](https://github.com/HKUDS/nanobot/issues/2185) 升级后配置失效。**状态：OPEN，待修复。**
*   **配置** - **Ollama 本地模型 404**：[Issue #2570](https://github.com/HKUDS/nanobot/issues/2570) 本地模型配置端口监听异常。**状态：OPEN。**
*   **环境** - **环境变量读取失败**：[Issue #2849](https://github.com/HKUDS/nanobot/issues/2849) 部分配置无法解析 `${VAR}` 语法。**状态：已关闭。**

## 6. 功能请求与路线图信号
社区提出了明确的功能需求，部分已有 PR 跟进：

*   **模型路由**：[Issue #3070](https://github.com/HKUDS/nanobot/issues/3070) 建议增加类似 OpenRouter 的模型路由功能，以节省 Token 成本。**对应进展**：[PR #3121](https://github.com/HKUDS/nanobot/pull/3121) 已提交，支持通过 Hook 动态切换模型，**极可能在下个版本合并**。
*   **Web 端支持**：[PR #3030](https://github.com/HKUDS/nanobot/pull/3030) 和 [PR #2972](https://github.com/HKUDS/nanobot/pull/2972) 均在推进 Web UI 和移动端支持，显示出项目正试图摆脱纯 CLI 限制。
*   **记忆增强**：[Issue #2736](https://github.com/HKUDS/nanobot/issues/2736) 提出了基于 SQLite 的原生持久化记忆方案，[PR #3122](https://github.com/HKUDS/nanobot/pull/3122) 则优化了现有的 Dream 记忆触发机制。

## 7. 用户反馈摘要
从 Issues 评论中提炼出以下用户痛点：
*   **成本焦虑**：用户对 Token 消耗非常敏感，特别是后台任务（如心跳）产生的隐形消耗。
*   **升级恐惧**：小版本号升级（post 版本）引入破坏性变更（如 Gemini 不可用、Windows 不可用）导致用户不敢轻易升级。
*   **文档缺失**：本地模型（Ollama）的配置虽然有文档，但实际端口监听与配置路径仍存在困惑（Issue #2570）。

## 8. 待处理积压
*   **[Issue #2185](https://github.com/HKUDS/nanobot/issues/2185)**：Gemini 回归问题仍未解决，自 3 月 17 日开启至今，影响范围较广，建议维护者优先排查。
*   **[Issue #2570](https://github.com/HKUDS/nanobot/issues/2570)**：Ollama 本地配置问题涉及网络与网关组件，目前处于 OPEN 状态，需要进一步澄清文档或修复端口逻辑。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-04-14)

## 1. 今日速览
Zeroclaw 项目今日保持**极高的开发活跃度**，共有 50 条 PR 更新与 20 条 Issue 动态。项目正处于架构优化与安全加固的关键阶段，重点解决了命令注入漏洞（S0 级）和运行时稳定性问题。核心团队合并了关于子智能体编排的重大功能 PR，并针对 DeepSeek 等模型的兼容性进行了修复。社区方面，关于生产环境就绪标准（RFC）和 WASM 插件系统的讨论热度较高，显示出项目正从功能完善向企业级稳定性转型。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 22 条 PR 合并或关闭，项目在安全性、架构解耦和渠道适配方面取得了实质性进展：

*   **架构重构与功能增强**：
    *   合并了 **PR #2420** `[core, tool]`：实现了更智能的 Team/Subagent 编排功能，支持运行时配置，消除了硬编码路由逻辑，显著提升了多智能体协作的灵活性。
    *   关闭了 **PR #5160** `[security]`：修复了 Shell 命令重定向阻断问题，允许 heredocs 和安全的 stderr 抑制操作，解决了此前过于严格的沙箱限制导致的误杀问题。
    *   关闭了 **PR #5706**：更新了维护者列表，清理了代码所有权。

*   **Bug 修复与兼容性**：
    *   关闭 **Issue #5268**：修复了 Context compressor 截断消息时丢失 `tool_call_id` 导致 DeepSeek API 400 错误的问题。
    *   关闭 **Issue #5584**：修复了模型返回叙述文本伴随工具调用时，出现重复助手消息的问题。
    *   关闭 **Issue #5575**：解决了项目编译速度极慢的问题，提升了二次开发效率。

## 4. 社区热点
今日讨论最活跃的议题集中在核心体验优化与质量标准制定：

*   **[Issue #4657] Matrix channel friction tracker** (评论: 11)
    *   **分析**：这是一个长期追踪 Issue，汇总了 Matrix 频道的体验痛点（如 E2EE 重试循环、媒体处理失败等）。高评论量反映了社区对通讯层稳定性的强烈关注，尤其是加密通讯场景下的连接保持问题。
*   **[Issue #5125] [Bug]: CPU spikes when typing into agent chat** (评论: 4)
    *   **分析**：用户报告在 Firefox 浏览器中输入时出现 CPU 多核飙升。该问题直接影响前端交互体验，可能涉及前端渲染优化或事件处理逻辑，属于用户体验的关键痛点。
*   **[Issue #5653] RFC: Zero Compromise in Practice — Production Readiness Standard** (评论: 1)
    *   **分析**：虽然评论数尚少，但作为 v0.7.0 版本的规划文档，提出了代码健康度、错误纪律和生产标准，标志着项目正在建立更严格的工程规范，值得开发者关注。

## 5. Bug 与稳定性
今日报告了多个严重影响使用的 Bug，其中包含 S0 级安全漏洞：

*   **S0 - 数据丢失/安全风险**：
    *   **[Issue #5698] 沙箱命令绕过**：`is_args_safe()` 函数存在逻辑缺陷，允许 `python3`, `node`, `cargo` 等白名单解释器通过 `-c`/`-e` 参数执行任意代码。
        *   *状态*：**已提修** (PR #5702)，修复方案已提交待合并。
    *   **[Issue #5692] 文件创建权限错误**：Agent 错误地声称无权限而在工作目录创建文件失败，实际权限配置正确。
    *   **[Issue #5709] ClawGuard 扫描发现大量安全隐患**：自动化扫描发现 66 个严重安全问题，涉及敏感信息泄露和代码模式风险。

*   **S1 - 工作流受阻**：
    *   **[Issue #5553] Telegram 渠道返回原始 JSON**：Shell 工具执行成功，但 Telegram 端显示原始 `tool_calls` JSON 或空结果，严重影响用户阅读。
    *   **[Issue #5697] Skills 功能受阻**：配置 `allow_scripts = true` 后脚本仍被拦截。
    *   **[Issue #5685] CLI channel factory 未注册**：导致 Agent 模式启动即崩溃。

*   **S2 - 性能降级**：
    *   **[Issue #5628] 守护进程端口冲突**：安装为 systemd 服务后自启动占用了端口，导致手动运行 `zeroclaw daemon` 失败。

## 6. 功能请求与路线图信号
用户和开发者提出了多项旨在扩展生态与提升易用性的需求：

*   **[Issue #5601] 扩展 OAuth 支持**：请求为 Ollama Cloud、智谱 AI (z.ai)、Kimi 和 MiniMax 增加原生订阅式 OAuth 登录支持，减少用户管理 API Key 的负担。
*   **[Issue #3696] Shell 命令钩子**：请求增加消息处理前后的 Shell 钩子，以支持外部记忆注入、日志记录等高级自动化场景。
*   **[PR #5231] WASM 插件系统**：(Open) 提议引入基于 WASM 的插件系统，支持用户在不修改核心代码的情况下编写隔离的领域专用工具，这是扩展生态的关键一步。
*   **[PR #5517] 配置版本迁移**：(Open) 引入配置 Schema 版本控制 (V1->V2)，旨在解决配置字段变更带来的升级兼容性问题。

## 7. 用户反馈摘要
从 Issues 讨论中提炼出的真实用户声音：

*   **性能痛点**：前端输入响应延迟（CPU 飙升）和编译速度过慢是开发者体验的主要阻碍。
*   **兼容性困扰**：DeepSeek 用户频繁遇到 400 错误，表明与国产大模型的适配仍有优化空间。
*   **文档滞后**：**Issue #5679** 指出 30 多种语言的安装文档引用了已废弃的 `install.sh` 参数，导致新用户上手困惑。
*   **安全焦虑**：用户对沙箱逃逸风险（Issue #5698）和大规模扫描结果（Issue #5709）表示担忧，期待更严格的安全默认配置。

## 8. 待处理积压
以下重要 Issue 长期活跃但尚未解决，需维护者重点关注：

*   **[Issue #3696] Pre/post message hooks**：创建于 3 月中旬，虽持续更新但尚未有明确 PR 关联。该功能对于企业级集成（如外部知识库挂载）至关重要。
*   **[Issue #4657] Matrix channel 摩擦追踪**：作为总领性 Issue，部分子项 PR 仍在待合并状态（如 PR #5166），需持续投入资源解决端到端加密通讯的稳定性问题。
*   **[PR #5517] Config migration**：涉及破坏性变更，目前处于 Open 状态，需更多评审以确保平滑迁移路径。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 (2026-04-14)

## 1. 今日速览
Hermes Agent 昨日刚发布了里程碑版本 **v0.9.0 "The everywhere release"**，今日项目处于发布后的高强度维护与反馈收集阶段。过去24小时内，项目收到 **50 个 Issue 更新**（新增 43 个，仅关闭 7 个）和 **50 个 PR 更新**，显示出社区对新版本的高度关注与活跃测试。目前的显著特征是 **Issue 积压激增**（Open Issues 突破 1000 个），且新增 Issue 中包含大量关于新功能（Web Dashboard、Termux、iMessage）的 Bug 报告，表明新版本的稳定性尚需磨合，维护者面临较大的代码质量挑战。

## 2. 版本发布
### **v2026.4.13: Hermes Agent v0.9.0**
- **发布日期**：2026-04-13
- **代号**：The everywhere release
- **核心更新**：
  - **平台拓展**：正式支持 Termux/Android 移动端，新增 iMessage 和 WeChat (微信) 网关适配。
  - **性能与架构**：引入 "Fast" 架构，优化响应速度。
  - **规模**：自 v0.8.0 以来包含 487 commits，合并 269 个 PRs，解决 167 个 Issues，代码变动高达 63,281 行。
- **潜在影响**：大量新平台引入和架构调整可能导致边缘场景不稳定，今日爆发的 Bug 报告多与此相关。

## 3. 项目进展
今日共有 **10 个 PR 被合并/关闭**，主要集中在修复 v0.9.0 引入的回归问题和新功能补全：
- **关键修复**：
  - [PR #9319](https://github.com/NousResearch/hermes-agent/pull/9319)：修复 Telegram 流式传输任务取消时产生重复回复的问题，提升网关稳定性。
  - [PR #9309](https://github.com/NousResearch/hermes-agent/pull/9309)：修正 GPT-5 系列模型上下文长度（Context Length）的回退默认值，修复了 128k 显示错误（实际应为 400k）。
  - [PR #9324](https://github.com/NousResearch/hermes-agent/pull/9324)：修复 Web Server 中缺失的 `os` 模块导入，解决了 OAuth Provider 页面的崩溃。
- **功能推进**：
  - [PR #9320](https://github.com/NousResearch/hermes-agent/pull/9320)（已合并）：为 Web Dashboard 增加了上下文窗口配置支持，用户现在可以在 Web 端查看和覆盖模型的上下文长度。

**待合并重点 PR (40 个 Open)**：
- [PR #4692](https://github.com/NousResearch/hermes-agent/pull/4692)：**重大架构重构**，计划用 React (Ink) 替代 Python TUI，实现前后端分离，这将彻底改变 CLI 交互体验。
- [PR #9327](https://github.com/NousResearch/hermes-agent/pull/9327)：修复 CLI 配置加载与 Gateway 更新流程的稳定性问题。

## 4. 社区热点
今日讨论热度最高的议题集中在用户体验与项目管理层面：
1.  **[Issue #501](https://github.com/NousResearch/hermes-agent/issues/501) Web UI Gateway 需求 (👍 1, 评论 12)**
    - **诉求**：用户强烈呼吁增加本地 Web UI 界面，认为 CLI 和现有集成（Telegram/Discord）不足以满足需求，且竞品已有成熟方案。这是长期以来的高优 feature request。
2.  **[Issue #7335](https://github.com/NousResearch/hermes-agent/issues/7335) Open Issues 破千 (评论 9)**
    - **诉求**：维护者和社区对 Issue 积压表示担忧。随着项目热度上升，Bug 报告和功能请求激增，现有的维护模式面临挑战，急需自动化工具或更多人力介入。
3.  **[Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237) 输出截断问题 (评论 3)**
    - **诉求**：用户反馈 CLI 和网关交互时频繁出现 `Response truncated due to output length limit` 错误，严重影响长文本生成体验。

## 5. Bug 与稳定性
v0.9.0 发布后，大量新 Bug 被报告，按严重程度排序如下：

### 🔴 严重
- **[Issue #8596](https://github.com/NousResearch/hermes-agent/issues/8596) 迁移导致数据丢失**
  - 现象：`hermes claw cleanup` 和 `openclaw doctor` 命令在迁移过程中会静默删除 OpenClaw 的运行时状态、插件和配置文件。
  - 状态：暂无修复 PR，风险极高。
- **[Issue #9313](https://github.com/NousResearch/hermes-agent/issues/9313) Web Dashboard 无法连接**
  - 现象：升级 v0.9.0 后，Web Dashboard 显示 "Gateway not online"，即使进程正在运行。
  - 状态：用户已提供详细排查日志，等待官方确认。

### 🟠 中等
- **[Issue #8764](https://github.com/NousResearch/hermes-agent/issues/8764) 飞书 卡片交互失败**
  - 错误：Code 200340，回调超时。这是新版本支持的国内平台兼容性问题。
- **[Issue #9305](https://github.com/NousResearch/hermes-agent/issues/9305) Nix 包缺失依赖**
  - 现象：Nix 构建版本缺少 `fastapi` 依赖，导致 Dashboard 功能完全不可用。
- **[Issue #8783](https://github.com/NousResearch/hermes-agent/issues/8783) 微信适配器签名不匹配**
  - 现象：`WeixinAdapter` 发送媒体文件时因方法签名过时导致文件丢失。

### 🟢 已有修复方案
- **[Issue #7966](https://github.com/NousResearch/hermes-agent/issues/7966) Gateway 启动挂起逻辑错误**（已关闭）
- **[Issue #4408](https://github.com/NousResearch/hermes-agent/issues/4408) package.json 不同步**（已关闭）

## 6. 功能请求与路线图信号
- **国际化 (i18n)**：[Issue #9301](https://github.com/NousResearch/hermes-agent/issues/9301) 请求 Web Dashboard 支持非英语语言，随着 Web UI 的推进，国际化将成为必要功能。
- **会话恢复**：[Issue #9286](https://github.com/NousResearch/hermes-agent/issues/9286) 请求 Gateway 重启后能自动从 `state.db` 恢复上下文，避免对话“失忆”。这反映了用户对长期记忆和连续对话的强需求。
- **新平台支持**：社区正在积极贡献代码，[PR #7616](https://github.com/NousResearch/hermes-agent/pull/7616) (QQ Bot) 和 [PR #6948](https://github.com/NousResearch/hermes-agent/pull/6948) (Session 匿名通讯) 正在 Review 中，项目正朝着“全平台覆盖”的目标快速迭代。

## 7. 用户反馈摘要
- **升级体验**：部分用户反映 v0.9.0 升级过程存在依赖冲突和配置迁移问题，特别是从旧版 OpenClaw 迁移时风险较大。
- **新平台期待**：对 iMessage 和 WeChat 的支持反响热烈，但 WeChat 适配器目前存在的媒体文件发送 Bug ([Issue #8783](https://github.com/NousResearch/hermes-agent/issues/8783)) 让早期使用者感到困扰。
- **Web 端缺陷**：虽然迎来了 Web Dashboard，但目前功能尚不完善（如删除会话后重显问题 [Issue #9314](https://github.com/NousResearch/hermes-agent/issues/9314)），用户期待更稳定、功能更全的 Web 界面。

## 8. 待处理积压
- **积压预警**：项目 Open Issues 数量已超过 1000 个 ([Issue #7335](https://github.com/NousResearch/hermes-agent/issues/7335))，维护者需警惕 Issue 积压导致的响应延迟。
- **长期未解决 Feature**：[Issue #501](https://github.com/NousResearch/hermes-agent/issues/501) (Web UI) 虽然已有初步 Dashboard 发布，但距离用户期待的“本地浏览器界面”仍有差距，需持续投入资源完善。
- **待合并 PR**：[PR #4692](https://github.com/NousResearch/hermes-agent/pull/4692) (Ink TUI 重构) 涉及底层架构变更，已开启较久，建议尽快 Review 合并以避免冲突积压。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-14)

## 1. 今日速览
PicoClaw 项目今日保持**高活跃度**，核心开发重点集中在**系统稳定性增强**与**底层架构重构**。过去24小时内，PR 更新量达到 42 条，其中 12 条已合并，显示出维护团队正在高效处理积压代码。虽然无新版本发布，但多个关键 Bug 修复和 CI/CD 优化的合并预示着版本迭代正在加速。社区方面，关于 CLA 协议错误和第三方接入安全性的讨论成为焦点，项目正在经历从单一应用向多平台/多客户端演进的关键期。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
今日共有 **12 个 PR 被合并**，主要推进了以下工作：

- **架构重构与多实例支持**：核心 PR [#2481](https://github.com/sipeed/picoclaw/pull/2481) 已合并，重构了 `config.Channel` 以支持多实例，这是实现多应用并行运行的关键一步。
- **稳定性修复**：合并了针对更新器网络故障的重试机制 [PR #2511](https://github.com/sipeed/picoclaw/pull/2511)，以及修复了配置隐藏值和微信配置处理的 Bug [PR #2508](https://github.com/sipeed/picoclaw/pull/2508)。
- **CI/CD 优化**：[PR #2512](https://github.com/sipeed/picoclaw/pull/2512) 统一了 CI 环境中的 pnpm 安装步骤，提升了构建稳定性。
- **数据清理**：[PR #2495](https://github.com/sipeed/picoclaw/pull/2495) 修复了 `/clear` 指令未能清理 Seahorse DB 的问题，确保会话上下文彻底重置。

目前仍有 30 个 PR 处于待合并状态，包括 Mattermost 频道支持、Agent 并行处理重构等大型功能，代码审查压力较大。

## 4. 社区热点
今日社区讨论主要集中在以下 Issues：

- **[Issue #2506] CLA 协议配置错误**：
  链接：[sipeed/picoclaw Issue #2506](https://github.com/sipeed/picoclaw/issues/2506)
  **分析**：贡献者指出项目的 CLA（贡献者许可协议）模板竟然引用了 "SAP"，这对于 PicoClaw 项目来说显然是配置错误。这可能阻碍新的贡献者提交代码，属于亟需维护者确认并修复的行政性阻碍。

- **[Issue #2499] 第三方客户端接入安全策略**：
  链接：[sipeed/picoclaw/issues/2499](https://github.com/sipeed/picoclaw/issues/2499)
  **分析**：用户提出需要更安全的第三方 Pico WS 接入方案（如浏览器插件、外部客户端）。随着项目生态扩展，现有的 WebUI 专用 WS 流程已无法满足外部集成的安全需求，这反映了项目正面临“平台化”转型的需求。

## 5. Bug 与稳定性
今日报告的关键 Bug 及修复状态如下：

- **[严重] Exec 工具路径误判 (Issue #1042)**
  链接：[sipeed/picoclaw Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)
  状态：**未修复** (已有相关 PR #2378 待合并)
  详情：`restrict_to_workspace` 模式下的路径检查正则过于粗暴，导致像 `curl "wttr.in/Beijing"` 这种不含本地路径操作的命令也被拦截（匹配到 `../../Beijing`）。这严重影响了 AI 调用网络工具的能力。
  *注：PR #2378 似乎针对此问题进行了加固，建议优先审查。*

- **[中等] 音频解码数据损坏 (PR #2504)**
  链接：[sipeed/picoclaw PR #2504](https://github.com/sipeed/picoclaw/pull/2504)
  状态：**待合并**
  详情：OGG Opus 解码器存在缓冲区复用 Bug，导致发送到 Discord 的语音帧数据损坏。

- **[已修复] Nvidia API 404 错误 (Issue #2479)**
  链接：[sipeed/picoclaw Issue #2479](https://github.com/sipeed/picoclaw/issues/2479)
  详情：使用 Nvidia API 调用 DeepSeek 等模型时返回 404。该 Issue 已关闭，推测通过更新配置或路由修复已解决。

## 6. 功能请求与路线图信号
- **多飞书应用支持** ([Issue #2493](https://github.com/sipeed/picoclaw/issues/2493))：用户请求在同一环境运行多个飞书实例，这与已合并的 Config 多实例重构 ([PR #2481](https://github.com/sipeed/picoclaw/pull/2481)) 高度契合，该需求极有可能在近期版本中得到满足。
- **LLM-as-Judge 评估模式** ([PR #2484](https://github.com/sipeed/picoclaw/pull/2484))：引入 LLM 作为评判者的 Benchmark 模式，旨在解决语义评估问题。这表明项目正在加强自身在 AI 工程化评估方面的能力，属于向开发者工具演进的信号。
- **Agent Shield 安全套件** ([PR #2313](https://github.com/sipeed/picoclaw/pull/2313))：大型待合并 PR，引入了多用户支持和安全加固。这直接响应了社区对安全性和多租户场景的诉求。

## 7. 用户反馈摘要
- **工具执行受限**：用户反映安全守卫策略过于严格，误杀合法的网络请求命令，希望改进正则或逻辑。
- **配置管理痛点**：多账号/多实例管理的需求日益强烈，现有配置结构限制了灵活性。
- **贡献体验受阻**：CLA 配置错误直接影响了贡献者的提交意愿，需要维护者尽快修正。

## 8. 待处理积压
- **[高优] PR #1586 (Mattermost 频道支持)**：该 PR 创建于 3 月中旬，至今未合并。作为重要的渠道扩展功能，长期积压可能导致分支冲突风险增加。
- **[高优] Issue #1042 (Exec 路径检查)**：该 Bug 自 3 月初报告以来一直未彻底解决，影响核心 Tool 使用体验，建议结合 PR #2378 尽快推进。
- **[行政] Issue #2506 (CLA 错误)**：非技术性阻碍，需立即修正 CLA 配置以保持社区开放性。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-14)

## 1. 今日速览
NanoClaw 项目在过去 24 小时内保持了**高度活跃**的开发状态，共处理了 12 个 PR 更新和 4 个 Issue 更新。项目重心明显向**多渠道集成**（Discord、Matrix、IMAP、Twilio）和**底层架构增强**（PII 保护、自改进记忆体）倾斜。虽然无新版本发布，但多个功能性 PR 已合并，显著提升了系统的健壮性与扩展性。社区方面，开发者积极提交了针对容器化部署的 Bug 报告，显示出项目正被更广泛地应用于生产环境。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日共有 4 个 PR 被合并或关闭，标志着以下功能模块已向前推进：

- **隐私安全增强**：PR #1563 已关闭，成功将 PII（个人身份信息）保护扩展至 PDF 和图片文件。通过 `pdf-parse` 提取文本及 `llava` 视觉模型处理图片，确保容器内智能体无法接触原始敏感数据。
- **核心架构升级**：PR #1743 已关闭，完成了 SQLite 优先的自改进记忆智能体（ENG-123），引入了分阶段记忆检索、置信度反馈和“做梦”维护机制，显著提升了智能体的长期记忆能力。
- **渠道生态扩展**：PR #1765 已关闭，实现了 Discord 多机器人支持，允许在单个 NanoClaw 实例中运行多个身份独立的 Bot。PR #1766 已关闭，引入了 MS Graph MCP 网桥，为容器化智能体提供了访问微软生态的安全通道。

## 4. 社区热点
今日社区讨论与互动的焦点集中在以下议题：

- **[Issue #1755](qwibitai/nanoclaw Issue #1755)**：尽管已被关闭，该议题引发了关于文档与代码同步的讨论。随着 `geo-miner` 技能的重构，全局 Agent 配置文件的滞后问题暴露了快速迭代中的文档维护痛点。
- **[PR #1764](qwibitai/nanoclaw PR #1764)**：IMAP/SMTP 邮件集成提案备受关注。该功能通过环境变量注入密码且不向容器暴露的设计，体现了社区对安全性的高度敏感，解决了将邮件系统接入 AI 智能体的刚需。

## 5. Bug 与稳定性
今日报告了多个涉及容器化部署的关键问题，主要集中在权限与错误处理上：

- **[严重] 容器 UID 权限错误** ([Issue #1763](qwibitai/nanoclaw Issue #1763))：Dockerfile 设定用户为 `node` (UID 1000)，但宿主机以 root 创建目录，导致容器启动时因权限不足崩溃 (`EACCES`)。该问题影响所有 Linux 新部署，目前暂无修复 PR。
- **[严重] TypeScript 编译错误导致静默失败** ([Issue #1762](qwibitai/nanoclaw Issue #1762))：当 `agent-runner` 存在 TS 编译错误时，容器直接退出且无日志输出，导致重试循环无限重启“僵尸”容器。用户反馈排查极其困难。
- **[中等] EFS 陈旧会话残留** ([Issue #1761](qwibitai/nanoclaw Issue #1761))：网关尝试恢复旧会话 ID 时，因 EFS 数据过期导致 Claude Code 报错，影响连续对话体验。

## 6. 功能请求与路线图信号
根据新开 PR 与 Issue，以下功能方向清晰可见：

- **全渠道通讯覆盖**：PR #1764 (IMAP/SMTP) 和 PR #1624 (Matrix E2EE) 表明项目致力于打通所有主流通讯协议，且高度重视端到端加密与隐私保护。
- **支付与商业化尝试**：PR #1767 提出了基于 x402 微支付的 API 访问方案 (`add-agentcash`)，暗示项目正在探索 Agent 服务的商业化变现路径。
- **用户体验增强**：PR #1760 提议 Twilio 语音回退机制，PR #1757 提议 `send_file` MCP 工具，显示出从“纯文本交互”向“多模态交互”演进的信号。

## 7. 用户反馈摘要
从 Issue 详情中提炼出的核心反馈如下：

- **运维痛点**：用户 @pauldavis 指出，在 Linux 生产环境下，容器权限管理是最大的拦路虎，急需官方提供标准的目录初始化脚本或 Helm Chart 配置。
- **调试体验**：开发者反馈 TypeScript 编译失败时的“静默崩溃”严重阻碍调试，迫切需要容器启动时的错误透传机制。
- **数据管理**：用户 @Carlos1043 提到的 EFS 会话清理问题，反映出在无状态容器与有状态会话数据之间的生命周期管理存在断层。

## 8. 待处理积压
以下重要 PR 处于开启状态，建议维护者优先审查：

- **[PR #1624](qwibitai/nanoclaw PR #1624)**：Matrix 渠道集成已开启 10 天，涉及完整的 E2EE 支持，是一个高价值的高复杂度 PR，需关注其合并进度。
- **[PR #1764](qwibitai/nanoclaw PR #1764)**：IMAP/SMTP 集成，作为今日的热点功能，审查通过后将极大丰富 Agent 的办公场景应用。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-04-14)

## 1. 今日速览
NullClaw 项目今日呈现出极高的维护活跃度与快速响应机制。尽管过去 24 小时内无新版本发布且无 PR 合并，但社区报告了 3 个关键 Bug，维护者随即提交了 3 个针对性的修复 PR，实现了“即报即修”的高效闭环。主要焦点集中在修复 OpenRouter 模型刷新失败、子代理连接兼容性以及互联网搜索配置指引缺失等问题。目前共有 5 个 PR 处于待合并状态，预示着下一次版本更新将显著提升系统稳定性与兼容性。

## 2. 版本发布
无。

## 3. 项目进展
今日虽无 PR 合并，但新增了 4 个关键修复 PR，为下一版本奠定基础：

*   **核心架构修复**：PR #814 解决了命名子代理提供方的生命周期管理问题，修复了可能导致程序崩溃的内存安全隐患。
*   **模型生态兼容**：PR #813 将模型目录刷新的输出缓冲区预算提高，解决了 OpenRouter 等大型模型目录无法刷新的底层限制 (`src/onboard.zig`)。
*   **用户体验优化**：PR #815 针对 `web_search` 功能增加了缺失提供方的设置指引，降低了用户配置搜索功能的门槛。
*   **功能扩展推进**：PR #783 (Cron 子代理引擎) 于今日再次更新，持续完善定时任务与历史记录功能，是值得关注的大型 Feature。

## 4. 社区热点
今日讨论最活跃的 Issue 是 [#812 [bug] http_request](https://github.com/nullclaw/nullclaw/issues/812)。
*   **分析**：该用户从类似项目（Picoclaw/ZeroClaw）迁移而来，给予 NullClaw “组织良好”的评价，但在尝试启用“联网搜索”功能时受阻。这反映出项目虽然架构受认可，但在功能开启的引导文档或默认配置上存在断点。维护者已通过 PR #815 快速响应了这一诉求。

## 5. Bug 与稳定性
今日报告 3 个 Bug，均已有对应的修复 PR，严重程度及处理情况如下：

1.  **[高] 模型刷新缓冲区溢出**：Issue [#809](https://github.com/nullclaw/nullclaw/issues/809) 指出 OpenRouter API 响应体过大（~400KB），超过默认 50KB 限制导致刷新失败。
    *   *状态*：**已修复**。见 PR [#813](https://github.com/nullclaw/nullclaw/pull/813)。
2.  **[高] 自定义 Provider 子代理通信失败**：Issue [#811](https://github.com/nullclaw/nullclaw/issues/811) 报告使用 OpenAI 兼容接口时，子代理报错 `exit_code=3`。
    *   *状态*：**已修复**。见 PR [#814](https://github.com/nullclaw/nullclaw/pull/814)，修复了 vtable 生命周期问题。
3.  **[中] 联网搜索配置困惑**：Issue [#812](https://github.com/nullclaw/nullclaw/issues/812) 用户无法正常使用联网搜索。
    *   *状态*：**已修复**。见 PR [#815](https://github.com/nullclaw/nullclaw/pull/815)，增加了配置指引。

## 6. 功能请求与路线图信号
*   **Linux 服务支持扩展**：PR [#810](https://github.com/nullclaw/nullclaw/pull/810) 提议增加 SysVinit 支持，作为 systemd 和 OpenRC 的降级方案。这表明项目正在积极适配更广泛的 Linux 服务器环境，特别是老旧系统或容器化精简环境。
*   **Cron 自动化**：PR [#783](https://github.com/nullclaw/nullclaw/pull/783) 持续推进，引入了基于数据库的调度器和 JSON 输出，显示出项目向“自动化运维 Agent”方向演进的信号。

## 7. 用户反馈摘要
*   **迁移体验**：来自 Issue #812 的反馈表明，NullClaw 相比竞品在代码组织结构上具有优势，但在功能开箱即用性（特别是搜索功能）上存在阻碍。
*   **自定义接入痛点**：Issue #811 揭示了高级用户通过 CLI 参数 `--agent` 接入自定义 OpenAI 兼容服务时遇到的阻塞性问题，表明社区存在较强的大模型私有化部署需求。

## 8. 待处理积压
*   **PR 审核压力**：目前积压 **5 个待合并 PR**，其中包含关键 Bug 修复。建议维护者优先 Review 并合并 PR #813、#814、#815，以尽快释放修复版本，解决阻碍用户使用的连接性问题。
*   **长期功能 PR**：PR #783（Cron 功能）体量较大，建议在核心 Bug 修复发布后，作为下一个版本的重点进行测试与合并。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-14)

## 1. 今日速览
IronClaw 项目今日处于**高活跃度开发与密集测试阶段**。过去24小时内，社区提交了 **44 条 Issue 更新**（主要集中在 QA 测试与 Bug 修复）和 **50 条 PR 更新**。项目核心贡献者正集中精力修复 Web UI 稳定性问题（如内存泄漏、页面崩溃）以及 Agent 执行逻辑中的死循环与重试缺陷。同时，针对多租户架构的性能优化（并发执行、Slim 模式）提交了多个重量级 PR。整体来看，项目正处于功能迭代与稳定性打磨并行的关键时期。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **9 个 PR 被合并或关闭**，核心进展集中在**稳定性修复**与**多租户架构优化**：

- **Web UI 稳定性修复**：PR [#2431](https://github.com/nearai/ironclaw/pull/2431) 已合入，修复了浏览器因 `setInterval` 定时器泄漏、DOM 无限增长导致的 "Pages Unresponsive" 崩溃问题，显著提升了前端健壮性。
- **工具调用可靠性**：PR [#2227](https://github.com/nearai/ironclaw/pull/2227) 解决了 MCP/WASM 工具名称中连字符与下划线不匹配导致的 "Tool not found" 问题，增强了 LLM 回调的兼容性。
- **多租户技能共享**：PR [#2200](https://github.com/nearai/ironclaw/pull/2200) 引入了 `system_project_id` 概念，修复了管理员安装的共享技能对租户不可见的问题，完善了权限隔离架构。
- **Agent 交互体验**：PR [#2435](https://github.com/nearai/ironclaw/pull/2435) 修复了审批/认证流程中 UI 出现重复卡片的 Bug，优化了交互体验。

此外，还有多个大型 PR 正在审核中，包括**只读工具并发执行** ([#2423](https://github.com/nearai/ironclaw/pull/2423)) 和**跨线程并行消息处理** ([#2429](https://github.com/nearai/ironclaw/pull/2429))，预示着系统性能将迎来大幅提升。

## 4. 社区热点
今日讨论最热烈的问题反映了用户在**配置门槛**与**外部集成**方面的痛点：

- **Issue [#2229](https://github.com/nearai/ironclaw/issues/2229) [热议]**：Google Sheets OAuth 在 Staging 环境下遭遇 `Error 400 invalid_request` 阻塞，影响了 Google Suite 扩展的可用性。
- **Issue [#1852](https://github.com/nearai/ironclaw/issues/1852) [用户痛点]**：用户 @LeiYanhua 反馈项目配置对非技术人员不够友好，指出“让用户去找配置文件太困难”，呼吁降低使用门槛。
- **Issue [#84](https://github.com/nearai/ironclaw/issues/84) [规划]**：关于多智能体路由、全局会话等高级功能的长期规划讨论，显示了社区对 Agent 自治能力的期待。

## 5. Bug 与稳定性
今日 QA 测试（Bug Bash）暴露了大量严重问题，主要集中在 Web UI 和 Agent 执行循环：

**严重**:
- **Web UI 崩溃与无响应** ([#2406](https://github.com/nearai/ironclaw/issues/2406))：长时间交互导致浏览器崩溃、黑屏。**已有修复 PR [#2433](https://github.com/nearai/ironclaw/pull/2433)**。
- **Agent 无限循环** ([#2402](https://github.com/nearai/ironclaw/issues/2402))：Bot 在工具操作后陷入 "Calling LLM" 死循环。
- **上下文溢出** ([#2408](https://github.com/nearai/ironclaw/issues/2408))：输入超出 200K Token 限制无处理机制，导致报错。

**中等**:
- **用户消息丢失** ([#2409](https://github.com/nearai/ironclaw/issues/2409))：切换聊天窗口时输入的消息消失。**已有修复 PR [#2434](https://github.com/nearai/ironclaw/pull/2434)**。
- **OAuth 拼写错误** ([#2391](https://github.com/nearai/ironclaw/issues/2391))：Google OAuth 参数误写为 `offlin` 导致认证失败。
- **Twitter 连接问题** ([#2230](https://github.com/nearai/ironclaw/issues/2230))：MCP 需手动提取 Cookie，无法通过 OAuth 正常连接。

## 6. 功能请求与路线图信号
- **浏览器内置工具**：Issue [#2360](https://github.com/nearai/ironclaw/issues/2360) 提议基于 chromiumoxide 添加内置浏览器工具，以支持 JS 渲染页面交互，这是 Agent 自动化能力的重要补充。
- **管理控制台**：Issue [#1609](https://github.com/nearai/ironclaw/issues/1609) 呼吁增加 Web UI 管理面板，用于用户、工作空间及使用量监控，属于企业级部署的刚需。
- **Slim 模式运行时**：PR [#2418](https://github.com/nearai/ironclaw/pull/2418) 提议引入轻量级运行模式，通过单线程运行时减少资源占用，适合高密度部署场景。

## 7. 用户反馈摘要
- **配置体验差**：多位用户反馈初次设置门槛高，涉及数据库配置、环境变量查找等环节（[#1852](https://github.com/nearai/ironclaw/issues/1852)），期望像商业软件一样“开箱即用”。
- **Telegram 集成割裂**：用户报告 Telegram Open Mode 会导致 Web UI 历史记录不同步，产生“分裂身份”体验（[#2426](https://github.com/nearai/ironclaw/issues/2426)）。
- **平台兼容性**：用户尝试在 Raspberry Pi (ARMv7) 上编译失败，请求官方支持 ARM 架构（[#1339](https://github.com/nearai/ironclaw/issues/1339)）。

## 8. 待处理积压
- **Issue #1852 (易用性提升)**：创建于 4 月 1 日，评论数较多但尚未有明确解决方案，建议维护者关注非技术用户的部署体验优化。
- **Issue #84 (多智能体架构)**：创建于 2 月，属于 P2/P3 优先级的大型功能，目前仍在规划中。
- **Issue #1339 (ARM 支持)**：创建于 3 月中旬，尚未关闭，树莓派等边缘设备的支持需求待响应。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-14)

## 1. 今日速览
LobsterAI 今日保持**高活跃度**开发状态，共更新 20 个 PR 与 2 个 Issue，并发布了 `2026.4.13` 新版本。项目重心目前明显向**底层稳定性与架构重构**倾斜，特别是针对 OpenClaw 引擎的集成进行了大量修复与回滚操作，显示出团队正在解决复杂的集成问题。安全性方面，新增了日志脱敏功能以保护用户隐私。整体来看，项目处于快速迭代修复期，虽然存在少量代码回滚现象，但功能修复与优化持续推进，健康度良好。

## 2. 版本发布
**Release: LobsterAI 2026.4.13**
- **发布时间**: 2026-04-13
- **更新亮点**:
    - **构建优化**: NSIS 覆盖安装速度显著提升，采用异步删除旧目录机制 (#1633)。
    - **稳定性修复**: 修复了定时任务保存后的脏状态重置问题 (#1645)；回填了 OpenClaw 会话保持时长策略，默认延长至 30 天 (#1638)。
    - **架构重构**: 统一了 Provider 元数据注册中心，优化了配置管理 (#1646 摘要提及)。
- **破坏性变更/迁移注意**: 无明显破坏性变更，但涉及 OpenClaw 配置底层变动，建议用户升级后关注自定义 Agent 的配置加载情况。

## 3. 项目进展
今日共有 13 个 PR 被合并或关闭，项目在以下方面取得实质性进展：
- **架构统一与修复**: 合并了 `refactor(providers): unify provider config` (#1646)，解决了 MiniMax OpenClaw 同步问题，统一了提供者配置元数据，这将大幅减少后续多模型接入的维护成本。
- **MCP 桥接修复**: 修复了 MCP Bridge 启动时的 401 鉴权不匹配问题 (#1647)，解决了密钥生成竞态条件，提升了 MCP 协议连接的稳定性。
- **运行时稳定性**: 修复了 OpenClaw 网关在热加载配置时不必要的重启问题 (#1650)，以及非 main agent 的人设文件加载路径错误问题 (#1651, #1657)。
- **体验优化**: 修复了飞书多机器人创建支持问题 (#1648)，并在日志导出中增加了敏感信息脱敏功能 (#1661，待合并但标志重要进展)。

## 4. 社区热点
今日社区活跃度较低，仅有 2 条新 Issue，无大量讨论的 PR。
- **Issue #1653 [OPEN]**: [groupPolicy为啥每过一会就被覆盖为allowlist](https://github.com/netease-youdao/LobsterAI/issues/1653)
    - **分析**: 用户反馈 Group Policy 配置被意外覆盖。结合今日 PR #1648 提及的“飞书高级设置”默认值修改，可能存在配置同步机制与用户自定义设置冲突的逻辑，需关注配置持久化的优先级逻辑。
- **Issue #1662 [OPEN]**: [除sse之外的mcp无法使用](https://github.com/netease-youdao/LobsterAI/issues/1662)
    - **分析**: 用户报告 MCP 协议兼容性问题。今日 PR #1647 修复了 MCP Bridge 的鉴权问题，可能与该反馈相关，建议验证该问题是否已在最新版中解决。

## 5. Bug 与稳定性
今日报告并处理了多个关键 Bug，主要集中在底层引擎集成与配置同步：
1.  **[严重] 非主 Agent 加载失败**: 非 main agent 因工作区路径不匹配导致人设文件加载失败。
    - **状态**: 已修复 (#1651, #1657)。
2.  **[严重] OpenClaw Gateway 鉴权失败**: MCP Bridge 启动时因 Secret 竞态条件导致 401 错误。
    - **状态**: 已修复 (#1647)。
3.  **[中等] 配置被覆盖**: 用户反馈 Group Policy 被强制覆盖。
    - **状态**: 待确认 (#1653)。
4.  **[中等] 任务超时误判**: 对话未超时却提示超时。
    - **状态**: 已添加诊断日志 (#1652)，暂未根本修复，等待复现定位。
5.  **[低] 代码回滚**: 今日出现多次 Revert 操作 (#1655, #1656)，表明近期代码合并存在不稳定情况，团队正在积极修正回归问题。

## 6. 功能请求与路线图信号
- **UX 个性化**: PR #1660 提议非 main agent 首页显示专属名称与描述，而非固定文案。这表明项目正在增强多 Agent 场景下的个性化体验，有望在下个版本落地。
- **性能优化**: 长期 PR #924 正在推进会话列表与历史消息的分页加载，今日有更新，显示出团队正在着手解决大数据量下的内存与性能瓶颈。
- **安全合规**: PR #1661 针对导出日志增加敏感信息脱敏，响应了数据安全合规需求，预计将很快合入主线。

## 7. 用户反馈摘要
- **配置自主权受挫**: 用户对配置被静默覆盖表示困惑（Issue #1653），反映出用户对软件行为可控性的高需求，希望后台同步逻辑更加透明或优先级更低。
- **协议兼容性期待**: Issue #1662 表明部分用户尝试使用非 SSE 方式的 MCP 引擎，当前功能的缺失限制了高级用户的接入方式选择。

## 8. 待处理积压
- **依赖更新积压**: Dependabot 提出的依赖更新 PR (#1277 Electron 升级, #1278 Anthropic SDK 升级) 已开启超过 10 天，目前仍处于 Open 状态。考虑到 Electron 大版本升级可能带来的破坏性变更，建议维护者优先评估合并或关闭。
- **代码质量优化**: PR #1498 (修复全部 ESLint error) 仍待合并，这是提升代码健壮性的重要一步，建议尽快排期。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-14)

## 1. 今日速览
Moltis 项目今日呈现出极高的维护活跃度与迭代速度，实现了**"零积压"的高效闭环**。过去 24 小时内，项目成功关闭了所有 5 个活跃 Issue，并合并了高达 18 个 Pull Requests，展现出维护者对社区反馈的极快响应能力。今日发布了 2 个新版本 (`20260413.03` 与 `20260413.06`)，不仅修复了关键的 MCP 工具兼容性与序列化回归问题，还合并了 XMPP 频道支持和本地语音克隆等重大功能。此外，大规模的代码重构工作正在稳步推进，旨在解耦核心 Gateway 模块，为项目的长期可维护性打下坚实基础。

## 2. 版本发布
今日连续发布了两个版本，显示出高频的交付节奏：

*   **Release 20260413.06**
    *   **更新内容**：该版本主要集成了今日下午合并的架构重构与功能更新。包括 Session 归档 UI 功能、本地 Whisper 设置向导、以及针对 MCP 工具 Schema 的兼容性修复。同时引入了大规模的 Rust 模块拆分重构，优化了代码结构。
*   **Release 20260413.03**
    *   **更新内容**：此版本重点修复了早间报告的多个关键 Bug，特别是 OpenAI 兼容层的工具参数序列化问题。同时合并了 XMPP 频道支持与 Voicebox 本地语音克隆等长期开发的功能分支，显著扩展了项目的通信渠道与语音能力。

## 3. 项目进展
今日共合并/关闭 18 个 PR，项目在功能丰富度与架构健壮性上均有显著推进：

*   **重大功能合并**：
    *   **XMPP 频道支持** ([PR #48](https://github.com/moltis-org/moltis/pull/48))：经过两个月的开发，正式合并 XMPP 即时通讯渠道支持，实现了与 Telegram 频道的功能对等，支持群聊、反应与打字状态。
    *   **本地语音克隆** ([PR #199](https://github.com/moltis-org/moltis/pull/199))：新增 Voicebox TTS 提供者，支持本地 FastAPI 服务器进行语音克隆，进一步强化隐私与本地化部署能力。
    *   **会话归档功能** ([PR #702](https://github.com/moltis-org/moltis/pull/702))：响应 Issue #701，在 Web UI 中增加了会话归档控制，完善了用户的历史记录管理体验。
*   **架构重构与代码质量**：
    *   **Gateway 解耦** ([PR #690](https://github.com/moltis-org/moltis/pull/690), [PR #691](https://github.com/moltis-org/moltis/pull/691), [PR #703](https://github.com/moltis-org/moltis/pull/703))：持续推进 Gateway 模块的瘦身工作，提取 MCP 服务逻辑、广播状态以及节点执行类型到独立的 crates 中，降低了核心模块的复杂度。
    *   **模块拆分** ([PR #695](https://github.com/moltis-org/moltis/pull/695))：拆分了过大的 Rust 模块文件，消除了代码仓库中的遗留单体文件，提升了代码的可维护性。
*   **体验优化**：
    *   **Token 缓存可见性** ([PR #699](https://github.com/moltis-org/moltis/pull/699))：在聊天 UI 中显示缓存的输入 Token 数量，帮助用户直观了解上下文复用情况。
    *   **本地语音配置** ([PR #700](https://github.com/moltis-org/moltis/pull/700))：增加了本地 Whisper 和 OpenAI TTS 端点的设置 UI，降低了本地化语音模型的配置门槛。

## 4. 社区热点
今日社区互动集中在功能请求的快速落地与关键 Bug 的修复上：

*   **Session 归档功能** ([Issue #701](https://github.com/moltis-org/moltis/issues/701))：由核心贡献者 @vvuk 提出，获得了 1 个点赞。该功能需求在提出后极短时间内便通过 [PR #702](https://github.com/moltis-org/moltis/pull/702) 实现并合并，体现了高效的"提出-实现"闭环。
*   **本地 Whisper 设置** ([Issue #570](https://github.com/moltis-org/moltis/issues/570))：用户 @bsarkisov 请求的本地 OpenAI Whisper 提供者设置流程，今日通过 [PR #700](https://github.com/moltis-org/moltis/pull/700) 正式落地。这反映了用户群体对本地化部署和数据隐私的高度关注。
*   **MCP 兼容性问题** ([Issue #694](https://github.com/moltis-org/moltis/issues/694))：用户 @Maelgk 报告了 Attio MCP 工具无法使用的问题，揭示了 OpenAI 提供者对特定 JSON Schema 关键字的拒绝机制。该问题迅速被定位并修复，显示了维护者对第三方工具集成兼容性的重视。

## 5. Bug 与稳定性
今日修复了多个影响功能可用性的关键 Bug，主要集中在 OpenAI 兼容层与工具调用：

1.  **[High] MCP Tool Schema 兼容性崩溃/拒绝** ([Issue #694](https://github.com/moltis-org/moltis/issues/694))
    *   **问题**：OpenAI 提供者拒绝包含 `not` 关键字（无 type）的 MCP 工具 Schema，导致 Attio MCP 等工具无法使用。
    *   **修复**：[PR #698](https://github.com/moltis-org/moltis/pull/698) 清理了不支持的 JSON Schema 关键字，确保了 Schema 的兼容性。
2.  **[High] 工具参数序列化回归** ([Issue #693](https://github.com/moltis-org/moltis/issues/693))
    *   **问题**：在 20260413 版本中，`0`、`false` 和 `null` 等工具参数在 OpenAI 兼容层被错误处理。
    *   **修复**：[PR #697](https://github.com/moltis-org/moltis/pull/697) 修正了解析路径，使其同时支持字符串化和原生 JSON 值。
3.  **[Medium] Browserless v2 WebSocket 兼容性** ([PR #659](https://github.com/moltis-org/moltis/pull/659))
    *   **问题**：Sandbox 模式下不支持 Browserless v2 的 WebSocket 路径。
    *   **修复**：引入了版本配置项并实现了降级逻辑，增强了沙箱环境的连接稳定性。

## 6. 功能请求与路线图信号
今日的功能请求不仅得到了响应，且大部分已转化为具体代码合并，揭示了项目下一阶段的方向：

*   **本地化与隐私优先**：随着 [Issue #570](https://github.com/moltis-org/moltis/issues/570) 的解决和 [PR #199](https://github.com/moltis-org/moltis/pull/199) (Voicebox) 的合并，Moltis 正在构建一套完善的本地化 AI 基础设施（语音识别、语音合成），减少对外部 API 的依赖。
*   **多渠道接入**：[PR #48](https://github.com/moltis-org/moltis/pull/48) 的合并标志着项目从单纯的 Web/Telegram 扩展到 XMPP 协议，未来可能支持更多去中心化或隐私通讯协议。
*   **精细化上下文管理**：[Issue #692](https://github.com/moltis-org/moltis/issues/692) 请求显示缓存的 Token 数量，这表明高级用户对上下文窗口的利用率和成本控制有更精细的需求，已被采纳并在 UI 中实现。

## 7. 用户反馈摘要
从 Issue 提交者的反馈可以看出，用户对 Moltis 的使用正从基础对话向复杂场景延伸：

*   **痛点**：OpenAI 兼容性标准执行过严导致工具调用失败（Issue #694），以及序列化回归导致 Falsy 值丢失（Issue #693），这表明用户正在尝试配置复杂的 MCP 工具链。
*   **场景**：用户 @bsarkisov 提出的本地 Whisper 设置需求，揭示了"离线部署"或"数据不出域"的真实场景。
*   **满意度**：所有今日报告的 Bug 均在当天修复并发布版本，这种极快的响应速度将极大提升用户对项目稳定性的信心。

## 8. 待处理积压
项目当前维护状态非常健康，积压极少。

*   **依赖更新待审**：[PR #704](https://github.com/moltis-org/moltis/pull/704) (Dependabot 提交) 请求将 `rand` 库从 0.9.2 升级到 0.10.0。这是目前唯一处于 Open 状态的 PR，建议维护者尽快合并以保持依赖的最新状态。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-04-14)

## 1. 今日速览
CoPaw（现仓库表现为 QwenPaw）今日处于**高活跃度迭代状态**，共发布 1 个新版本 (v1.1.1-beta.1)，处理了 19 个 PR（合并/关闭）和 43 个 Issue 更新。项目正处于品牌重塑与功能深化的关键期，社区讨论热度极高，但焦点集中在 **CoPaw 向 QwenPaw 的迁移路径混乱**及**命名混淆**问题上，导致大量用户反馈负面情绪。技术层面，开发者正积极推进文件回滚、多智能体并发及性能优化等核心功能，项目健康度总体良好，但需警惕迁移过程中的用户体验断层。

## 2. 版本发布
- **版本号**: `v1.1.1-beta.1`
- **更新内容**:
  - 文档更新：更新了新闻/公告内容。
  - 资源调整：更新了 IP Logo。
  - 版本号晋升：准备进入 1.1.1 的 beta 测试阶段。
- **分析**: 此版本主要为文档与资产的微调，未包含重大代码变更，推测是为后续稳定版发布的铺垫版本。

## 3. 项目进展
过去 24 小时共有 19 个 PR 被合并或关闭，项目在功能增强与稳定性修复上均有实质性进展：

- **功能增强**:
  - **文件操作回滚支持**: PR #3346 (Open) 正在推进文件操作回滚功能（如恢复误删文件），响应了 Issue #2590 的需求，目前处于待合并状态。
  - **Plan 模式集成**: PR #2904 (Open) 提出了集成 PlanNotebook 的计划模式，允许 Agent 生成多步规划，目前仍在审核中。
  - **钉钉媒体支持**: PR #3337 (Closed/Merged) 修复了钉钉通道中 Base64 图片溢出问题，增强了媒体传输能力。

- **稳定性与修复**:
  - **事件循环阻塞修复**: Issue #3136 提及的 QQ/微信通道停止阻塞事件循环问题已有进展，相关修复已合并，显著提升了关闭 Agent 时的响应速度。
  - **模型管理修复**: Issue #3342 关于本地大模型状态识别不准的问题已关闭，相关修复已上线。
  - **安全性提升**: PR #2840 (Open) 正在审查移除本地 API 认证绕过的逻辑，以修复反向代理场景下的安全隐患。

## 4. 社区热点
今日社区讨论呈现出明显的**困惑与抵触**情绪，主要集中在品牌与迁移问题上：

- **🔥 命名与迁移混乱 (热议中)**: [Issue #3288](https://github.com/agentscope-ai/QwenPaw/issues/3288) (评论 32 条)
  - **诉求**: 用户强烈询问 CoPaw 如何平滑升级到 QwenPaw，目前的升级导致配置文件分散（`.copaw` 与 `.qwenpaw` 共存），命令行失效。
  - **分析**: 用户对品牌突然变更感到困惑，且缺乏官方迁移文档，导致升级体验支离破碎。

- **🔥 品牌重塑反馈**: [Issue #3336](https://github.com/agentscope-ai/QwenPaw/issues/3336) (点赞 4 个, 评论 2 条)
  - **诉求**: 用户直言 "CoPaw 多好听，千万别折腾"，对 "QwenPaw" 命名表示不解，认为阿里内部产品线命名混乱。
  - **分析**: 用户对 CoPaw 品牌有情感认同，频繁更名可能降低用户信任度。

- **🛠️ 贡献者看板**: [Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) (评论 55 条)
  - **诉求**: 官方发布的开放任务列表吸引了大量开发者认领任务，社区贡献意愿依然强劲。

## 5. Bug 与稳定性
今日报告了若干影响使用体验的 Bug，部分已有修复方案：

- **🔴 严重 - 多智能体环境崩溃**: [Issue #3331](https://github.com/agentscope-ai/QwenPaw/issues/3331)
  - 现象：同一进程运行多个 Agent 且配置不同飞书机器人时，WebSocket 崩溃 (RuntimeError)。
  - 状态：Open，暂无关联 Fix PR。

- **🟠 中等 - 记忆索引失效**: [Issue #3317](https://github.com/agentscope-ai/QwenPaw/issues/3317)
  - 现象：Agent 创建的记忆子目录无法被检索索引，导致记忆功能失效。
  - 状态：已有 PR #3347 提出修复，使文件监视器支持递归配置。

- **🟠 中等 - 任务自动中断**: [Issue #2377](https://github.com/agentscope-ai/QwenPaw/issues/2377)
  - 现象：处理大量文件（1500个）时，即使设置了断点续传，Agent 仍会在处理几个后中断。
  - 状态：Open，长期未解决，可能涉及长时任务的稳定性问题。

- **🟡 轻微 - UI 性能问题**: [Issue #3350](https://github.com/agentscope-ai/QwenPaw/issues/3350)
  - 现象：超多轮对话（>200轮）后页面滚动严重卡顿。

## 6. 功能请求与路线图信号
结合用户反馈与 PR 动态，以下功能方向清晰：

- **数据安全与回滚**: [PR #3346](https://github.com/agentscope-ai/QwenPaw/pull/3346) 实现的文件回滚功能是对用户 "误操作恢复" 需求的直接响应，预计很快合并。
- **多用户隔离**: [Issue #3306](https://github.com/agentscope-ai/QwenPaw/issues/3306) 提出企业级多用户隔离需求，这与当前单用户设计有较大差异，可能成为未来企业版路线图的一部分。
- **并发对话能力**: [Issue #2416](https://github.com/agentscope-ai/QwenPaw/issues/2416) 请求支持对话进行中的追打消息，PR #3305 正在尝试解决后台任务取消的问题，为并发交互打基础。

## 7. 用户反馈摘要
从 Issues 评论中提炼出的真实声音：

- **痛点 - 迁移体验极差**: "更新完后会出现 qwenpaw 命令 not found... 容易产生混淆... 相关的内容还在 `.copaw` 文件夹中。" —— 用户对旧版配置未被兼容感到失望。
- **痛点 - 命名混乱**: "之前折腾大模型我就忍了... 现在 CoPaw 改 QwenPaw，让我第一印象就是 qwen 模型不好印象。"
- **场景 - 长文本处理瓶颈**: 用户尝试让 Agent 处理 1500 个文件的总结，但频繁中断，显示出在长时任务稳定性上的不足。
- **认可**: 尽管有抱怨，用户仍表示 "CoPaw 越用越顺"，说明核心产品力获认可，仅品牌与运维层面受挫。

## 8. 待处理积压
以下重要 Issue 长期未获有效解决或响应，建议关注：

- **[P0] 任务自动中断问题**: [Issue #2377](https://github.com/agentscope-ai/QwenPaw/issues/2377) (创建于 2026-03-27)，涉及长时任务的核心稳定性，至今仍有复现。
- **[P1] VLLM 部署显示问题**: [Issue #2897](https://github.com/agentscope-ai/QwenPaw/issues/2897) (创建于 2026-04-03)，前端页面不显示 think 后的内容，影响自部署用户体验。
- **[P1] 浏览器指纹问题**: [Issue #3075](https://github.com/agentscope-ai/QwenPaw/issues/3075) (创建于 2026-04-08)，CoPaw 在浏览网页时易触发人机验证，相比竞品隐蔽性不足。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-04-14)

## 1. 今日速览
EasyClaw 项目今日整体活跃度较低，处于平稳迭代阶段。过去 24 小时内未收到新的 Issue 反馈，也无新版本发布。项目唯一的活动集中在国际化功能的建设上，一个旨在添加 5 种新语言的 PR 于昨日进行了更新，显示出项目在拓展全球市场方面的持续投入。目前项目健康度保持稳定，但社区互动略显冷清，建议关注长期开放的 PR 合并进度。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
*   **无合并或关闭的 PR**。
*   虽然无代码合入，但现有的功能开发仍在推进中。PR #21 的持续更新表明项目正在夯实多语言基础设施，一旦该 PR 合并，将显著提升产品在亚洲市场的可用性。

## 4. 社区热点
今日讨论最活跃的内容为 **PR #21 [feat(i18n): add 5 new languages]**。
*   **链接**: [gaoyangz77/rivonclaw PR #21](https://github.com/gaoyangz77/rivonclaw/pull/21)
*   **分析**: 该 PR 由贡献者 @chinayin 提交，旨在新增繁体中文、日语、韩语、越南语和印地语 5 种语言支持。尽管今日无新增评论，但该 PR 作为一个大型功能更新（涉及 1333 个翻译键值对），是当前项目开发的重点。其背后的诉求是降低产品在非英语市场的使用门槛，特别是针对东亚和南亚用户群体。

## 5. Bug 与稳定性
*   **无新报告的 Bug 或崩溃问题**。过去 24 小时内无新增 Issue，项目稳定性表现平稳。

## 6. 功能请求与路线图信号
*   **国际化扩展 (i18n)**: 根据最新的 PR 动态判断，项目下一阶段的主要更新方向将包含**多语言支持的大规模扩展**。
*   新增的 5 种语言覆盖了亚洲主要人口大国，暗示项目方可能正在筹备面向这些地区的推广计划。预计该功能将在 PR #21 合并后的下一个版本中正式上线。

## 7. 用户反馈摘要
*   **暂无有效反馈**。由于今日无新增 Issue 或评论，无法提炼用户痛点或使用场景。这表明当前版本可能较为稳定，或者用户活跃度处于低谷期。

## 8. 待处理积压
*   **PR #21 [feat(i18n): add 5 new languages]**:
    *   **状态**: OPEN (待合并)
    *   **时长**: 创建于 2026-03-18，已持续近一个月。
    *   **建议**: 该 PR 工作量较大（新增 5 个完整语言包），建议维护者尽快安排 Code Review，确认翻译准确性及索引配置，避免长期积压导致与主分支冲突，推进项目国际化进程。

---
*数据来源: GitHub (gaoyangz77/easyclaw & gaoyangz77/rivonclaw)*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*