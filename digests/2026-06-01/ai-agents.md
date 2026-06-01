# OpenClaw 生态日报 2026-06-01

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-06-01 04:20 UTC

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

# OpenClaw 项目动态日报 (2026-06-01)

## 1. 今日速览
OpenClaw 项目今日展现出极高的开发活跃度与社区参与度，过去 24 小时内 Issues 与 PRs 更新量均达到 **500 条**，其中 PR 合并/关闭量高达 275 条，显示团队正在加速迭代。项目一日内连续发布了 **4 个 Beta 版本**（v2026.5.31-beta.1 至 beta.4），密集修复 Agent 运行时恢复机制与多渠道交付稳定性问题。总体来看，项目正处于快速修复与功能完善的健康上升期，但核心的会话状态管理与 Codex 运行时稳定性仍面临严峻挑战。

## 2. 版本发布
今日连续发布 **v2026.5.31-beta.1** 至 **v2026.5.31-beta.4** 四个版本，重点聚焦于以下核心修复：

*   **Agent 运行时健壮性增强**：显著改善了 Agent 和 CLI 后端运行时在工具调用中断、过期会话绑定、压缩交接以及媒体交付重试场景下的恢复能力。这表明团队正在积极解决用户反馈的会话卡死和上下文丢失问题。
*   **多渠道交付稳定性**：提升了 Telegram, WhatsApp, iMessage, Slack 等渠道的消息送达稳定性。
*   **迭代节奏**：同日连续发布 4 个 Beta 版本较为罕见，暗示该版本可能包含关键性的底层重构（特别是会话恢复逻辑），团队正在进行高频验证与修补。

## 3. 项目进展
尽管今日关闭了 275 个 PR，但当前 Open 列表中仍有多项重量级 PR 正在推进，标志着项目在架构层面正在深化：

*   **上下文引擎重构**：PR #88750 正在将运行时设置传递至上下文引擎生命周期，涉及几乎全渠道（Discord, Telegram, Slack 等）及核心扩展，旨在优化 Agent 的环境感知能力。
*   **Telegram 体验优化**：PR #87072 提出了交错进度条功能，允许在 Telegram 中实时显示推理过程，大幅提升 CLI 级别的交互体验；PR #88634 正在修复流式输出中的预览重复问题。
*   **安全与策略**：PR #87074 加强了策略验证，拒绝不支持的策略键，提升安全性；PR #82955 增强了安装脚本的安全性，防止恶意脚本注入。
*   **桌面端分发**：PR #88845 正在强制要求 Beta 版桌面端分发必须经过签名，标志着项目正逐步迈向正式版的发布标准。

## 4. 社区热点
今日社区讨论焦点集中在会话一致性与运行时稳定性：

*   **[P1] 会话上下文错乱**：Issue #32296 以 13 条评论位居榜首。用户报告 Agent 回复上一条消息而非当前消息，导致对话错位。该问题自 3 月提出至今未解，反映了长期记忆与会话状态管理的复杂性。
    *   链接: [openclaw/openclaw Issue #32296](https://github.com/openclaw/openclaw/issues/32296)
*   **[P1] Matrix 渠道回归**：Issue #87307 反映升级至 2026.5.22 后，Matrix 线程回复行为异常，且状态命令静默。
    *   链接: [openclaw/openclaw Issue #87307](https://github.com/openclaw/openclaw/issues/87307)
*   **[Feature] 安全策略强制执行**：Issue #13583 呼吁在金融等高风险场景中，引入"硬门控"（Hard Gates），强制 Agent 在回复前必须调用特定工具或遵守规则，而非仅依赖 Prompt 软约束。
    *   链接: [openclaw/openclaw Issue #13583](https://github.com/openclaw/openclaw/issues/13583)
*   **[P1] Codex 原生运行时故障**：Issue #83959 和 #85251 均报告 Codex app-server 启动重试耗尽或静默，导致会话陷入死锁。Codex 作为核心后端，其稳定性备受关注。
    *   链接: [openclaw/openclaw Issue #83959](https://github.com/openclaw/openclaw/issues/83959)

## 5. Bug 与稳定性
今日报告的高危 Bug 主要集中在 Codex 运行时与认证模块：

*   **🔴 严重 - Crash Loop / 挂起**:
    *   Issue #83959: Codex app-server 启动重试耗尽，导致 Agent 作业失败。
    *   Issue #85251: Codex app-server 发出 `turn/started` 后静默，导致会话卡死直至超时恢复机制介入。
*   **🟠 高危 - 会话状态丢失**:
    *   Issue #88499: OpenAI responses provider 因 `previous_response_id` 返回 404 错误。
    *   Issue #86047: Nextcloud Talk Agent 在审批流程中挂起，导致工具执行超时。
*   **🟠 高危 - 认证与配置**:
    *   Issue #67423: 认证路由器错误解析 API Key，导致分拆的 Provider 配置冲突。
    *   Issue #88020: Anthropic "thinking block" 签名过期导致硬性会话失败，无法恢复重试。

## 6. 功能请求与路线图信号
*   **安全合规性增强**：Issue #13583 和 #78308 (MCP 工具调用审批) 显示企业级用户对 Agent 行为的可控性与审计有强烈需求。结合 PR #87074 的策略收紧，项目正在向"安全可控"方向演进。
*   **跨渠道交互一致性**：Issue #73699 请求将 Discord 语音通道桥接至文本会话，结合 Telegram 交互优化的 PRs，项目正致力于实现全渠道无缝体验。
*   **扩展性与调试**：Issue #78301 提到插件加载器的静默失败问题，呼吁更好的开发者工具与错误提示。

## 7. 用户反馈摘要
*   **痛点**：
    *   **稳定性焦虑**：用户频繁提及 "crash loop"、"silent timeout"、"session wedged"，特别是 Codex 后端的不稳定性严重影响了生产环境信心。
    *   **上下文丢失**：Agent "忘记" 当前上下文或回复错误历史消息是用户最头疼的问题之一。
    *   **升级回归**：多个 Issue（如 #87307, #63686）指出升级版本后功能失效，建议团队加强回归测试。
*   **满意点**：
    *   团队对问题的响应速度较快，许多 Issue 在报告当日即有维护者评论。
    *   新版本的恢复机制正在逐步覆盖更多边缘情况。

## 8. 待处理积压
*   **长期未决的 P1 问题**：Issue #32296（会话上下文错乱）自 3 月创建至今未解决，且评论数持续增长，建议维护者优先排期处理。
*   **高危认证问题**：Issue #67670（中国区代理访问 openai-codex 受阻）标记为 stale 但仍有活跃讨论，可能影响特定区域用户。
*   **功能阻塞**：Issue #86996（Active Memory 导致高延迟）影响特定配置下的核心功能，需进一步确认根因。

---
*分析师注：OpenClaw 正处于从快速功能迭代向稳定性攻坚转型的关键时期。Beta 4 的频繁更新表明团队正在努力修补底层会话管理漏洞，建议用户密切关注 v2026.5.31 正式版的稳定性表现。*

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比分析日报 (2026-06-01)

## 1. 生态全景
当前开源 AI 智能体生态正处于**从功能爆发向稳定性攻坚转型的关键时期**。头部项目（OpenClaw, Hermes, CoPaw）均表现出极高的迭代频率，重点解决会话上下文一致性与运行时崩溃问题，显示出 Agent 技术落地面临的首要挑战是**长期记忆与状态管理的可靠性**。同时，**MCP（Model Context Protocol）协议**正在成为连接工具与外部世界的标准接口，而企业级特性（SSO、审计、私有化部署）需求的激增标志着生态正快速向**生产力与商业化场景**渗透。

## 2. 各项目活跃度对比

| 项目名称 | 今日 Issues (新/活) | 今日 PR 更新 | Release 情况 | 健康度评估 | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 高 (~500条总动) | 高 (275 merged) | **4个Beta版** | 🟡 紧张 (修复中) | 会话恢复, Codex, 多渠道 |
| **CoPaw** | 高 (23条) | 高 (16条) | 无 | 🟢 活跃 | 桌面端, MCP, 进程池 |
| **Hermes Agent** | 高 (50条) | 高 (50条) | 无 | 🟡 震荡 (新模型适配) | 模型兼容, Docker, Gateway |
| **Zeroclaw** | 中 (22条) | 高 (50条) | 无 | 🟢 良好 | IoT/TUI, v0.8集成 |
| **NanoBot** | 低 (6条) | 中 (19条) | 无 | 🟢 稳健 | 安全漏洞, 企业认证, RAG |
| **IronClaw** | 低 | 中 (26条) | 无 | 🟢 良好 | 架构重构, Trigger持久化 |
| **NanoClaw** | 低 (3条) | 低 (8条) | 无 | 🟠 风险 (架构瓶颈) | 容器化, 高并发, FD耗尽 |
| **PicoClaw** | 低 (6条) | 低 (10条) | 1个Nightly | 🟢 良好 | OAuth, 移动端, 多模态 |
| **LobsterAI** | 低 (1条) | 极低 | 无 | 🔴 预警 (商业纠纷) | 积分清零, 客诉 |
| **EasyClaw** | 无 | 无 | **v1.8.22** | 🟢 平稳 | 运维支持, 商业化 |
| **NullClaw** | 低 (2条) | 无 | 无 | 🟡 维护模式 | Telegram, 定时任务 |
| **Moltis** | 无 | 极低 | 无 | 🟢 平稳 | 上下文裁剪 |
| **ZeptoClaw** | 极低 | 无 | 无 | 🟢 安全审计 | Webhook安全 |
| **TinyClaw** | 无 | 无 | 无 | ⚪ 沉寂 | 无 |

## 3. OpenClaw 在生态中的定位

*   **生态核心参照系**：OpenClaw 以单日 500+ 的更新量级和 4 个 Beta 版的发布频率，不仅是本次监测中最活跃的项目，也是生态中技术挑战最密集的风向标。
*   **技术路线差异**：相比 Zeroclaw 侧重 IoT 与硬件结合、Hermes 侧重多模型适配，OpenClaw 更专注于**企业级全渠道交付**（Telegram/Slack/iMessage 等）与**复杂运行时治理**。其面临的“会话上下文错乱”与“Codex 运行时死锁”是通用型智能体框架在成熟期必然面对的深水区问题。
*   **社区规模对比**：OpenClaw 的社区反馈量远超 NanoBot、NullClaw 等项目，接近 Hermes Agent 水平。但高 Issue 数量也暴露了其近期版本的不稳定性，属于“高活跃、高痛点”阶段。

## 4. 共同关注的技术方向

1.  **会话状态与上下文工程**
    *   **涉及项目**：OpenClaw, Moltis, PicoClaw, CoPaw。
    *   **具体诉求**：OpenClaw 的 Issue #32296（会话错乱）与 CoPaw 的 PR #4849（MCP 进程池）均指出，随着对话变长和工具增多，**上下文膨胀与状态丢失**是导致 Agent “失忆”或崩溃的主因。Moltis 甚至专门提交 PR 限制工具结果大小以节省 Token。

2.  **MCP (Model Context Protocol) 协议标准化**
    *   **涉及项目**：CoPaw, NanoBot, IronClaw, NanoClaw。
    *   **具体诉求**：CoPaw 与 NanoClaw 均在扩展 MCP 的传输协议支持（HTTP/SSE），NanoBot 加强了 MCP 的安全性。这表明 MCP 正迅速成为 Agent 连接外部工具的**事实标准**，社区正致力于解决其性能（进程爆炸）与安全问题。

3.  **生产环境下的高并发与资源瓶颈**
    *   **涉及项目**：NanoClaw, Zeroclaw, OpenClaw。
    *   **具体诉求**：NanoClaw 报告的 FD 耗尽（#2655）与单线程冻结（#2665），以及 Zeroclaw 的 Daemon 崩溃，揭示了 Agent 在作为服务长期运行时面临的**资源泄漏与并发调度难题**。

## 5. 差异化定位分析

*   **架构哲学**：
    *   **OpenClaw/Hermes**：追求**全功能与全覆盖**，支持多渠道、多后端，架构重且复杂，适合作为企业级 Assistant 底座。
    *   **NanoBot/NanoClaw**：侧重**轻量化与容器化**，关注 Sidecar 架构与边缘部署，适合资源受限环境或作为微服务组件。
    *   **Zeroclaw**：独辟蹊径走**硬件结合路线**（ESP32, Raspberry Pi），在 IoT 场景具有独特优势。

*   **商业与开源策略**：
    *   **LobsterAI/EasyClaw**：带有明显的**商业化/闭源倾向**，关注积分系统、运维日志与企业教程，属于 OpenCore 模式。
    *   **OpenClaw/CoPaw**：更倾向于**社区驱动的开源迭代**，核心关注点在于技术难点的突破与通用功能的完善。

## 6. 社区热度与成熟度

*   **快速迭代爆发期**：**OpenClaw, Hermes Agent, CoPaw**。特征是极高的 Issue/PR 交互量，版本更新快，但伴随大量“Crash”、“Regression”反馈，适合极客与早期采用者，用于生产需谨慎。
*   **质量攻坚与重构期**：**Zeroclaw, IronClaw, NanoBot**。特征是开发重心转向底层重构（如 IronClaw 的 Reborn 计划）与安全加固，社区讨论较理性，适合二次开发者。
*   **稳定维护/沉寂期**：**Moltis, NullClaw, EasyClaw, TinyClaw**。特征是 Issue 极少，版本发布周期长或无。EasyClaw 倾向于商业化服务，而 NullClaw/TinyClaw 面临社区停滞风险。
*   **预警期**：**LobsterAI**。因商业规则（积分清零）引发用户信任危机，技术社区活跃度低。

## 7. 值得关注的趋势信号

1.  **从“智能”转向“运维”**：
    *   社区焦点正从“如何让 Agent 变聪明”转向“如何让 Agent 跑得稳”。OpenClaw 单日发布 4 个 Beta 修复运行时恢复，NanoClaw 讨论健康检查与自愈机制，EasyClaw 增加远程日志上传。**稳定性观测与自愈能力**将是下一阶段的核心竞争力。

2.  **企业级“硬门控”需求显现**：
    *   OpenClaw Issue #13583 呼吁在金融场景引入“硬门控”，NanoBot 修复 WebSocket 鉴权漏洞。这表明 Agent 正从“玩具”走向“金融/企业场景”，**安全性与可控性**（Safety & Compliance）成为头部用户的刚需。

3.  **端侧与 IoT 智能体萌芽**：
    *   Zeroclaw 在 ESP32/Raspberry Pi 上的动作，以及 PicoClaw 对 Android Termux 的关注，预示着 AI Agent 正在尝试摆脱云端依赖，向**边缘计算与端侧智能**渗透，这可能是继云端 Agent 之后的下一个蓝海。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-01)

## 1. 今日速览
NanoBot 项目今日保持**高度活跃**的开发状态，共有 **19 个 PR 更新**与 **6 个 Issue 更新**。项目重点聚焦于**稳定性修复与安全性加固**，合并了 7 个 PR，成功解决了 WebUI 崩溃、WebSocket 鉴权漏洞及心跳任务误报等关键问题。同时，社区贡献积极，针对 Azure AD 认证、本地语音识别（ASR）及记忆检索（RAG）等新功能提交了多个高质量 PR，显示出项目生态正从核心框架向企业级特性与多模态交互扩展。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 7 个 PR 合并/关闭，显著提升了系统的健壮性与安全性：

*   **安全性修复**：合并 PR [#4103](https://github.com/HKUDS/nanobot/pull/4103)，修复了 WebSocket 令牌签发路由在缺少密钥时的鉴权绕过漏洞 (Issue [#4077](https://github.com/HKUDS/nanobot/issues/4077))，防止未经授权的令牌生成。
*   **WebUI 稳定性**：合并 PR [#4117](https://github.com/HKUDS/nanobot/pull/4117)，修复了代码块未指定语言时导致 WebUI 白屏崩溃的严重 Bug (Issue [#4116](https://github.com/HKUDS/nanobot/issues/4116))。
*   **心跳机制优化**：合并 PR [#4114](https://github.com/HKUDS/nanobot/pull/4114) 与 [#4112](https://github.com/HKUDS/nanobot/pull/4112)，解决了心跳任务在无任务时错误发送 "All clear." 的通知骚扰问题，并强化了内部检查的故障关闭逻辑。
*   **Agent 逻辑增强**：合并 PR [#4127](https://github.com/HKUDS/nanobot/pull/4127)，扩展了持续目标的迭代预算，优化了 Agent 长周期任务的执行能力。

项目整体在安全性防线和前端稳定性上迈出了坚实的一步，为后续功能迭代扫清了障碍。

## 4. 社区热点
今日讨论主要集中在以下区域：

*   **企业级认证需求**：Issue [#4125](https://github.com/HKUDS/nanobot/issues/4125) 提出支持 Azure AAD 认证，针对无法使用 API Key 的企业订阅场景。该 Issue 迅速催生了 PR [#4126](https://github.com/HKUDS/nanobot/pull/4126)，显示出核心团队对企业级用例的重视。
*   **多模态交互扩展**：PR [#4122](https://github.com/HKUDS/nanobot/pull/4122) 提议在 WebUI 中集成语音录制与本地 ASR 转录功能，引发了对前端架构调整的讨论，反映了用户对“语音+文本”混合交互模式的强烈需求。
*   **上下文管理 Bug**：Issue [#4128](https://github.com/HKUDS/nanobot/issues/4128) 报告了 Session 管理中的消息归档逻辑错误，可能导致上下文污染，已有对应的修复 PR [#4129](https://github.com/HKUDS/nanobot/pull/4129) 提交。

## 5. Bug 与稳定性
今日报告并处理的 Bug 按严重程度排序如下：

*   **[High] 安全漏洞：WebSocket Token 无鉴权签发**
    *   状态：已修复 (PR [#4103](https://github.com/HKUDS/nanobot/pull/4103))。
    *   详情：在配置静态 Token 但未配置签发密钥时，路由可被利用生成短期 Token。
*   **[High] WebUI 白屏崩溃**
    *   状态：已修复 (PR [#4117](https://github.com/HKUDS/nanobot/pull/4117))。
    *   详情：Markdown 渲染组件遇到无语言标识的代码块时崩溃。
*   **[Medium] 心跳任务误报**
    *   状态：已修复 (PR [#4114](https://github.com/HKUDS/nanobot/pull/4114))。
    *   详情：空任务状态下错误推送 "All clear." 到飞书。
*   **[Medium] 会话消息重复归档**
    *   状态：修复中 (PR [#4129](https://github.com/HKUDS/nanobot/pull/4129) Open)。
    *   详情：`retain_recent_legal_suffix` 方法逻辑缺陷，导致用户消息在特定分支下被重复保留。

## 6. 功能请求与路线图信号
结合 Issues 与 PRs，以下功能点可能被纳入下一阶段迭代：

*   **Azure AD 认证支持**：PR [#4126](https://github.com/HKUDS/nanobot/pull/4126) 已提交，将极大便利企业用户部署。
*   **轻量级 RAG 记忆检索**：PR [#4109](https://github.com/HKUDS/nanobot/pull/4109) 正在推进，旨在引入本地嵌入向量检索，提升 Agent 长期记忆能力。
*   **MCP 协议安全性增强**：PR [#4123](https://github.com/HKUDS/nanobot/pull/4123) 增加了对非安全 HTTP URL 的拦截，防止 SSRF 攻击，显示项目正在强化作为 MCP 框架的安全边界。
*   **模型兼容性改进**：PR [#4124](https://github.com/HKUDS/nanobot/pull/4124) 修复了 mimo/glm 等模型输出 XML Tool Call 的问题，扩展了兼容模型范围。

## 7. 用户反馈摘要
*   **企业合规痛点**：用户 [@kunalk16](https://github.com/kunalk16) 反映 Azure 订阅强制禁用 API Key，导致部署受阻，急需 AAD 认证支持。
*   **前端体验反馈**：用户 [@Flinn-X](https://github.com/Flinn-X) 报告了因 Markdown 渲染异常导致的严重前端崩溃，显示 WebUI 在处理非标准输入时的鲁棒性仍有提升空间。
*   **商业化与工具推荐**：Issue [#4120](https://github.com/HKUDS/nanobot/issues/4120) (Closed) 提及了 MCP 框架下的工具推荐商业化潜力，虽被关闭，但反映了社区对 NanoBot 作为工具分发平台的关注。

## 8. 待处理积压
*   **架构重构 PR**：PR [#3990](https://github.com/HKUDS/nanobot/pull/3990) (Dream 类重构) 和 PR [#4115](https://github.com/HKUDS/nanobot/pull/4115) (解耦 WebSocketChannel) 涉及核心架构调整，需要更多审查资源，建议维护者优先关注。
*   **长期未合并功能**：PR [#1443](https://github.com/HKUDS/nanobot/pull/1443) (心跳推理与通知解耦) 已开启近 3 个月，今日有更新，建议推动合并以完善通知系统逻辑。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 (2026-06-01)

## 1. 今日速览
Zeroclaw 项目今日保持极高的开发活跃度，过去 24 小时内 PR 更新量达 50 条，Issue 交互 22 条，显示出社区与核心团队正在紧密推进下一阶段版本。重点集中在 **v0.8.0-beta-2 的集成测试与修复**（Zerocode TUI、RPC）以及 **硬件/IoT 集成**（ESP32 Smart Room）两大方向。虽然无新版本发布，但多个关键 Bug 修复已合并，包括树莓派架构更新错误和 Bedrock Provider 认证问题。同时也暴露了 TUI 稳定性相关的严重新 Bug，需要引起注意。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 11 个 PR 被合并或关闭，主要集中在功能增强与关键修复：

*   **核心功能增强**：
    *   [PR #6665](https://github.com/zeroclaw-labs/zeroclaw/pull/6665) **[已合并]** 引入 `channel_send` 工具，允许 Agent 通过工具调用向 Telegram/Slack/Discord 等配置好的通道发送消息，解决了定时任务结果仅出现在日志中的痛点。
    *   [PR #7029](https://github.com/zeroclaw-labs/zeroclaw/pull/7029) **[已合并]** 修复了 Zerocode TUI 在无 Agent 配置错误后的空状态刷新问题，提升了 TUI 用户体验。
    *   [PR #7044](https://github.com/zeroclaw-labs/zeroclaw/pull/7044) **[已合并]** 重构 Cargo features，提取 `channels-all` 聚合特性，优化了依赖管理。

*   **关键修复**：
    *   [Issue #4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) **[已关闭]** 修复了 `zeroclaw update` 在 aarch64 (Raspberry Pi) 上下载错误架构二进制文件导致 "Exec format error" 的问题。
    *   [Issue #5289](https://github.com/zeroclaw-labs/zeroclaw/issues/5289) **[已关闭]** 修复了 Bedrock Provider 错误发送 `x-api-key` 导致 403 错误的问题，现在正确使用 AWS SigV4 认证。
    *   [Issue #6965](https://github.com/zeroclaw-labs/zeroclaw/issues/6965) **[已关闭]** 修复了 Web UI Canvas 页面无法接收 Agent 推送帧的问题。

*   **开发中重磅功能 (Open PRs)**：
    *   [PR #6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) **[Open]** v0.8.0-beta-2 集成分支，包含 Zerocode TUI、RPC socket 传输等核心改动，目前正在寻求首轮反馈。
    *   [PR #7023](https://github.com/zeroclaw-labs/zeroclaw/pull/7023) **[Open]** 实现版本化文档部署，允许用户查阅历史版本的文档。

## 4. 社区热点
*   **[Issue #6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) [Open]**: **v0.7.6 Skills 支持与 UX 改进追踪**。
    *   该 Issue 正在协调 v0.7.6 版本的功能集合，重点改进 CLI、加载器、沙箱等处的 Skills 体验。社区正在积极讨论具体实现细节，表明 Skills 是下一阶段的核心竞争力。
*   **[PR #6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) [Open]**: **Beta-2 大集成**。
    *   作为 v0.8 的前奏，该 PR 包含大量底层重构。虽然目前标记为 "DO NOT MERGE"，但它是后续功能的基石，吸引了核心贡献者的关注。
*   **[Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) [Open]**: **代码审计与恢复**。
    *   追踪因 3 月份批量回滚丢失的 153 个提交，维护者正在努力恢复这些已被审查的功能和修复，这是一个高风险、高价值的维护任务。

## 5. Bug 与稳定性
今日报告了多个影响工作流的严重 Bug (S1)，主要集中在 TUI/daemon 层：

*   **严重 (S1 - 工作流阻塞)**:
    *   [Issue #7043](https://github.com/zeroclaw-labs/zeroclaw/issues/7043) **[新开]** Zerocode TUI 在 daemon 重启或崩溃后无法重连，UI 卡死无响应。
    *   [Issue #7042](https://github.com/zeroclaw-labs/zeroclaw/issues/7042) **[新开]** Daemon 因文件描述符耗尽 (EMFILE) 崩溃，影响长时间运行的实例。
    *   [Issue #4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) **[活跃]** Gemini CLI OAuth 认证依然无法正常工作，用户在认证成功后立即遭遇 Rate Limit 错误。
*   **高风险 (Security/High)**:
    *   [Issue #5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) **[活跃]** `web_fetch` 工具的安全绕过问题。当域名解析为内网 IP 时，`allowed_private_hosts` 配置失效，存在 SSRF 风险。
*   **中等风险 (S2)**:
    *   [Issue #7033](https://github.com/zeroclaw-labs/zeroclaw/issues/7033) **[已关闭]** Media Pipeline 处理图像时遗漏内联数据，影响视觉 Provider。
    *   [Issue #7032](https://github.com/zeroclaw-labs/zeroclaw/issues/7032) **[已关闭]** WhatsApp Web 机器人在 `mention_only` 模式下遗漏针对 LID JID 的提及。

## 6. 功能请求与路线图信号
*   **硬件与 IoT 集成 (高优先级)**：今日涌现大量与 ESP32/硬件相关的 PR（[#7045](https://github.com/zeroclaw-labs/zeroclaw/pull/7045), [#7046](https://github.com/zeroclaw-labs/zeroclaw/pull/7046), [#7048](https://github.com/zeroclaw-labs/zeroclaw/pull/7048)），表明项目正在积极拓展 "AI Agent + IoT" 场景（Smart Room Demo），这可能成为近期的重要亮点。
*   **通道增强**：
    *   [PR #7021](https://github.com/zeroclaw-labs/zeroclaw/pull/7021) 提议为 Email 通道增加 XOAUTH2 支持和只读 IMAP 工具，以适应现代邮件安全策略。
    *   [Issue #3100](https://github.com/zeroclaw-labs/zeroclaw/issues/3100) 请求 Mattermost 通道支持 "oncall 模式"，即监听所有提及消息而非仅限单一通道，呼声较高。
*   **MCP 协议扩展**：[Issue #4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) 请求增加 MCP Resource 和 Prompt 支持，目前仅支持 Tool，限制了对复杂 MCP Server 的兼容性。

## 7. 用户反馈摘要
*   **TUI 稳定性痛点**：多位用户反馈 TUI 在 Daemon 断开后的重连机制缺失（#7043），导致必须重启应用，这在开发和使用中造成较大干扰。
*   **平台兼容性**：树莓派用户对修复 #4842 感到宽慰，此前 `zeroclaw update` 在 ARM 架构上彻底不可用。
*   **文档与社区入口**：
    *   用户指出 README 中的 Discord 邀请链接已失效（#7037），阻碍了新用户加入社区。
    *   对 Gateway 配置项 `gateway.web_dist_dir` 缺乏文档说明（#5847 已关闭，文档已补全）。
*   **模型 Provider 适配**：用户反馈 Kimi 模型因强制固定 Temperature 导致请求失败（#7049 已提交修复 PR），显示了对非标准 Provider 兼容性的持续需求。

## 8. 待处理积压
*   **[长期未解决] Issue #4879 (Gemini OAuth)**：自 3 月底报告以来，Gemini CLI 登录问题仍未彻底解决，严重影响使用 Gemini 模型用户的体验，建议优先排查。
*   **[高优先级] Issue #5122 (SSRF 风险)**：涉及安全策略失效，目前状态为 "in-progress"，建议尽快合并修复补丁。
*   **[功能冻结前] PR #6848 (Beta-2 集成)**：作为下一个大版本的基础，该巨型 PR 需要集中精力审查，以解除后续功能的阻塞状态。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-01)

## 1. 今日速览
Hermes Agent 项目今日保持**高度活跃**状态，社区互动频繁。过去 24 小时内共有 50 条 Issue 更新（新开/活跃 37 条，关闭 13 条）和 50 条 PR 更新，显示出项目迭代速度极快。虽然今日无新版本发布，但开发者社区正集中精力修复 v0.15.x 版本带来的 Docker 回归问题以及新型号模型（如 Claude Opus 4.8、GPT-5.5）的适配兼容性。大量 PR 正处于待合并状态（41 条），预示着下一次版本更新将包含显著的功能增强与 Bug 修复。

## 2. 版本发布
**无新版本发布。**
当前开发重心显然在于积压 PR 的审查与合并，以及解决近期发布版本中引入的 Docker 和模型适配问题。

## 3. 项目进展
今日有多项关键修复被合并或取得重要进展，显著提升了系统稳定性：

*   **Docker 架构修复**：针对 v0.15.1 引入的非 root 用户 Docker 启动失败（s6-overlay boot loop）问题，相关 Issue #34648 已关闭，表明关键修复已落地，解决了生产环境部署的阻断性问题。
*   **模型适配优化**：修复了 Claude Opus 4.8 的 "thinking.type.enabled" 报错问题 (#34554)，确保了对 Anthropic 最新模型架构的兼容。
*   **Gateway 稳定性**：解决了飞书/微信网关中文件传输标签泄露及会话过期重试缺失的问题 (#32601)，并修复了 Gateway 升级后无法自启动的迁移缺陷 (#34339)。
*   **核心逻辑增强**：PR #35642 提出了针对 Agent 停顿的重试机制优化，旨在避免无限期卡死；PR #36231 修复了技能安全扫描器的误报问题，改善了开发者体验。

## 4. 社区热点
今日社区讨论主要集中在**模型兼容性**与**跨平台同步**需求上：

*   **[Issue #33075](https://github.com/NousResearch/hermes-agent/issues/33075) [CLOSED]**：**GPT-5.5/Codex 稳定性问题**。
    *   **热度**：👍 11，评论 14。
    *   **分析**：用户报告在 Hermes v0.14.0 中使用 OpenAI Codex/GPT-5.5 时频繁遭遇 API 连接超时，而官方 CLI 工具运行正常。该问题的关闭标志着社区已定位并可能解决了 Hermes 网络层与最新 OpenAI 基础设施的兼容性问题。
*   **[Issue #20510](https://github.com/NousResearch/hermes-agent/issues/20510) [OPEN]**：**配置云端同步请求**。
    *   **热度**：👍 9，评论 4。
    *   **分析**：用户强烈呼吁支持跨设备同步配置文件和会话记忆。随着多端办公场景普及，目前仅支持本地存储已成为主要痛点。
*   **[Issue #31392](https://github.com/NousResearch/hermes-agent/issues/31392) [OPEN]**：**RFC: Agent-native 任务接力系统**。
    *   **热度**：评论 7。
    *   **分析**：社区正在深入讨论引入异步人工审批门控和子代理自动分叉的高级架构，旨在提升复杂工作流的自动化程度。

## 5. Bug 与稳定性
今日报告了多个高优先级 Bug，主要集中在云服务商适配和前端交互：

*   **[P1] Bedrock/Anthropic 适配故障**：
    *   **[Issue #36151](https://github.com/NousResearch/hermes-agent/issues/36151)**：Opus 4.8 在 Bedrock 上因 `temperature` 参数被拒，导致 API 400 错误。
    *   **[Issue #11970](https://github.com/NousResearch/hermes-agent/issues/11970)**：Bedrock Converse 路径未注入 `cachePoint`，导致 Claude Prompt Caching 失效，增加用户成本。**目前暂无 Fix PR**。
*   **[P1] Dashboard 危害性 Bug**：
    *   **[Issue #25281](https://github.com/NousResearch/hermes-agent/issues/25281)**：点击 Dashboard 中的 "Update Hermes" 按钮会**删除所有定时任务**。这是严重的数据安全问题，需立即关注。
*   **[P2] 终端冻结**：
    *   **[Issue #33961](https://github.com/NousResearch/hermes-agent/issues/33961)**：使用 `/new`, `/clear` 等命令会导致终端会话完全冻结。
*   **[P2] Docker 回归**：
    *   **[Issue #34648](https://github.com/NousResearch/hermes-agent/issues/34648) [CLOSED]**：已在今日修复。

## 6. 功能请求与路线图信号
结合 Issue 与 PR 动态，以下功能点极可能纳入下一版本：

*   **Undo/Redo 机制**：[PR #36229](https://github.com/NousResearch/hermes-agent/pull/36229) 实现了 `/undo [N]` 命令，支持备份用户输入并软删除，极大地提升了交互容错率。
*   **内存隔离增强**：[PR #36230](https://github.com/NousResearch/hermes-agent/pull/36230) 引入了 `threadPeerMode`，支持按线程隔离 Honcho 内存，适配 Discord/飞书等多话题场景。
*   **空白安装选项**：[PR #36228](https://github.com/NousResearch/hermes-agent/pull/36228) 增加了 `--no-skills` 安装参数，满足高级用户自定义最小化部署需求。
*   **云端配置同步**：[Issue #20510](https://github.com/NousResearch/hermes-agent/issues/20510) 的呼声表明"Cloud Sync"已成为社区迫切需求，有望进入后续规划。

## 7. 用户反馈摘要
*   **痛点**：
    *   **模型更新滞后**：用户对 OpenAI 和 Anthropic 新模型（GPT-5.5, Opus 4.8）的适配速度有极高要求，现有版本的不稳定性导致部分用户不得不回退或使用官方 CLI。
    *   **Docker 权限管理复杂**：非 root 容器部署涉及 s6-overlay 和 GID 映射，配置繁琐且容易出错，用户期望更平滑的升级体验。
    *   **Cron 数据安全**：更新导致 Cron 丢失的问题引发了对 Dashboard 功能可靠性的严重担忧。
*   **正面反馈**：
    *   社区对 PR 反馈速度表示认可，如 Docker 启动循环问题在报告后迅速得到响应。
    *   对 `/undo` 和 `threadPeerMode` 等精细化功能改进表示欢迎。

## 8. 待处理积压
以下重要 Issue 长期未解决，建议维护者优先关注：

*   **[Issue #13834](https://github.com/NousResearch/hermes-agent/issues/13834)**：Hermes OpenAI-Codex 在特定网络环境下持续失败，该问题自 4 月报告以来仍未彻底解决，影响部分用户体验。
*   **[Issue #10011](https://github.com/NousResearch/hermes-agent/issues/10011)**：请求 `/model` 选择器自动发现自定义提供端点模型，该功能对私有化部署用户至关重要。
*   **[Issue #11970](https://github.com/NousResearch/hermes-agent/issues/11970)**：Bedrock Prompt Caching 缺失问题持续增加企业用户成本，需尽快排期修复。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 (2026-06-01)

## 1. 今日速览
PicoClaw 项目今日保持**高活跃度**开发状态，共有 10 个 PR 更新和 6 个 Issue 变动。项目成功发布了 `v0.2.9-nightly.20260601` 自动构建版本，标志着代码库持续迭代。核心进展集中在**修复 OpenAI/Codex OAuth 流的关键 Bug**以及**增强消息多模态能力**，其中针对空响应问题的修复 PR (#2967) 已合并。社区对 Provider 兼容性（尤其是 Codex 和 MiniMax）反馈热烈，整体项目健康度良好，正在向更稳定的 v0.3 版本迈进。

## 2. 版本发布
- **版本号**: `nightly: Nightly Build` (v0.2.9-nightly.20260601.ba806592)
- **更新说明**: 自动化构建版本，包含最新的代码提交。
- **注意事项**: 官方提示该版本可能不稳定，建议谨慎用于生产环境。本次构建包含了针对 Codex 流式响应的关键修复。
- **变更日志**: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. 项目进展
今日共有 **3 个 PR 已合并/关闭**，显著提升了系统的稳定性与功能完善度：
- **[MERGED] PR #2967**: 修复了 OpenAI/Codex OAuth 提供者返回空响应的问题。该补丁正确处理了 `response.output_text.delta` 流事件，解决了用户在 ChatGPT 后端调用时遇到的致命错误，显著改善了 OAuth 模式的可用性。
- **[MERGED] PR #2856**: 实现了 `message` 工具对媒体附件和 Telegram 富文本交付的支持。这标志着 PicoClaw 在多模态交互和频道适配能力上迈出了重要一步，解决了此前智能体必须分离文本与媒体发送的尴尬体验。
- **[CLOSED] PR #2980**: 清理了调试输出文件的 gitignore 配置，维护了仓库整洁。

## 4. 社区热点
今日讨论热度最高的内容集中在 Provider 兼容性与移动端适配：
- **[Issue #2674](https://github.com/sipeed/picoclaw/Issue/2674)**: 关于 Codex OAuth 空响应的 Bug 报告引发了 7 条深入讨论。用户反馈在使用 ChatGPT 后端时遇到模型返回空内容，该问题与 PR #2967 密切相关，显示出社区对 OAuth 认证流的高度依赖。
- **[Issue #28](https://github.com/sipeed/picoclaw/Issue/28)**: 关于 LM Studio 连接请求的 Issue 虽已关闭，但积累了 21 条评论和 2 个点赞，反映了用户对本地模型简易接入方案的强烈诉求。
- **[PR #2902](https://github.com/sipeed/picoclaw/PR/2902)**: Android Termux 指南的 PR 处于活跃状态，显示社区对在移动端（尤其是低成本 ARM 设备）运行 PicoClaw 有较高兴趣。

## 5. Bug 与稳定性
今日报告并处理了若干关键 Bug，主要涉及 Provider 适配和上下文管理：
- **[已修复] OpenAI/Codex OAuth 空响应**: Issue #2953 和 #2674 报告了此问题，PR #2967 已提供修复方案并合并。建议受影响用户更新至最新 Nightly 版本。
- **[待处理] MiniMax Token 压缩显示异常**: [Issue #2968](https://github.com/sipeed/picoclaw/Issue/2968) 报告在 MiniMax 模型下 `/context` 指令始终显示 "Compress at: 76800 tokens"，可能是 Token 计数逻辑或显示层面的 Bug，目前尚无修复 PR。
- **[待处理] Agent 循环重载 Panic**: [PR #2904](https://github.com/sipeed/picoclaw/PR/2904) 提出了修复 Agent 重载时的 Panic 问题，虽然 PR 尚未合并，但这属于严重的稳定性隐患，需关注其后续进展。

## 6. 功能请求与路线图信号
- **新增 Provider 支持**: [Issue #2978](https://github.com/sipeed/picoclaw/Issue/2978) 请求添加 OmniRoute 作为新 Provider，表明社区希望扩展更多的聚合 API 路由选择。
- **Cron 工具增强**: [PR #2977](https://github.com/sipeed/picoclaw/PR/2977) 提议为 Cron 工具增加 `get` 和 `update` 操作，旨在优化任务调度管理，防止重调度时的竞态条件，极有可能被纳入下一版本。
- **Telegram 交互优化**: [PR #2975](https://github.com/sipeed/picoclaw/PR/2975) 提议将回复机器人的消息视为提及，这将极大改善群组聊天体验，是一个高价值的功能改进。

## 7. 用户反馈摘要
从 Issue 评论中提炼出的用户痛点主要包括：
- **多模态交互体验割裂**: 用户此前在使用 `message` 工具时，无法同时发送文本和媒体，导致工作流割裂（Issue #2855），该问题今日已通过 PR #2856 解决。
- **移动端部署困难**: 用户尝试在 Android Termux 环境部署，缺乏详细文档（PR #2902 正在解决此问题）。
- **特定后端响应解析失败**: 用户在使用 Codex OAuth 对接 ChatGPT 后端时，流式数据解析不完整导致空回复，影响了第三方客户端的可用性（Issue #2674）。

## 8. 待处理积压
以下重要 Issue 或 PR 处于 Stale（陈旧）或长期未响应状态，建议维护者关注：
- **[PR #2936](https://github.com/sipeed/picoclaw/PR/2936)**: 关于跳过缺失二进制文件的技能。该 PR 旨在优化 Agent 在低端设备（如 $10 设备）上的表现，目前状态为 Stale，建议重新审查其合并价值。
- **[PR #2906](https://github.com/sipeed/picoclaw/PR/2906)**: 消息总线背压处理与健康可见性修复。这是一个涉及核心架构稳定性的改进，目前已停滞，建议优先推进 Review。
- **[Issue #2674](https://github.com/sipeed/picoclaw/Issue/2674)**: 尽管 PR #2967 已修复部分问题，但该 Issue 仍显示为 Open，建议维护者验证修复有效性后及时关闭。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-01)

## 1. 今日速览
NanoClaw 项目今日保持高度活跃，虽然无新版本发布，但代码提交与问题追踪均显示出项目正处于快速迭代与架构增强阶段。过去 24 小时内新增 3 个关键 Issue，均聚焦于生产环境下的稳定性与资源瓶颈，显示出项目正经历大规模实战检验。Pull Request 方面有 8 项更新，主要集中在 v2 容器架构增强、MCP 协议支持扩展及技能系统的优化。整体来看，项目核心团队正在积极修补系统底层漏洞并扩展生态兼容性，健康度良好但面临高并发场景下的稳定性挑战。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 2 个 PR 关闭/合并，6 个 PR 待合并，主要进展如下：

*   **已关闭/合并：**
    *   [PR #2648](nanocoai/nanoclaw PR #2648): 关闭了关于添加 `/upload-trace` 命令以支持 Hugging Face 追踪上传的功能请求。
    *   [PR #2658](nanocoai/nanoclaw PR #2658): 关闭了实际部署相关的 PR。

*   **待合并（核心功能增强）：**
    *   [PR #2664](nanocoai/nanoclaw PR #2664): 提议在 v2 容器中运行浏览器抓取 sidecar，集成了 NotebookLM、Mer audio 等多种技能，显著增强 AI 智能体的网页交互与多模态能力。
    *   [PR #2662](nanocoai/nanoclaw PR #2662): 扩展了 `McpServerConfig` 以支持 HTTP/SSE 传输协议，打破仅支持 stdio 的限制，顺应 MCP Server 托管化趋势。
    *   [PR #2661](nanocoai/nanoclaw PR #2661) & [PR #2660](nanocoai/nanoclaw PR #2660): 优化了技能发现机制与文件挂载逻辑，解决了组级技能无法作为 slash 命令被发现及软链接失效的问题。

## 4. 社区热点
由于今日 Issues 均为新开且暂无评论，社区热点主要集中在问题报告的严重性上：

*   **[Issue #2665](nanocoai/nanoclaw Issue #2665) - 单线程宿主冻结问题**: 这是一个关于架构瓶颈的深度分析报告。作者指出 Node 单线程事件循环中的同步阻塞调用会导致全局冻结，且现有的 `/health` 检查无法探测此类“僵尸”状态。这引发了关于监控机制有效性的核心讨论。
*   **[Issue #2655](nanocoai/nanoclaw Issue #2655) - 文件描述符耗尽**: 报告了 OneCLI 网关在突发负载下因 FD 限制（1024）而硬性退出的情况，导致智能体服务静默中断。这反映了项目在高并发场景下的资源管理痛点。

## 5. Bug 与稳定性
今日报告的 Bug 均为严重级别，涉及系统核心稳定性和资源管理：

*   **严重**: [Issue #2665](nanocoai/nanoclaw Issue #2665) - 宿主事件循环可被同步操作冻结，导致全局不可用且健康检查失效。
*   **严重**: [Issue #2655](nanocoai/nanoclaw Issue #2655) - OneCLI 网关因文件描述符耗尽而崩溃，导致所有 Agent API 流量中断。
*   **高**: [Issue #2657](nanocoai/nanoclaw Issue #2657) - 缺乏自愈机制，当依赖服务（如 OneCLI）进程假死时，容器虽存活但无法恢复服务。
*   **已有修复方案**:
    *   [PR #2659](nanocoai/nanoclaw PR #2659): 针对特定环境下容器无法停止的问题，提出通过 Host PID 清理容器的修复方案。
    *   [PR #2656](nanocoai/nanoclaw PR #2656): 修复了 mnemon setup 因入口点覆盖而未执行的问题。

## 6. 功能请求与路线图信号
*   **MCP 协议扩展**: [PR #2662](nanocoai/nanoclaw PR #2662) 表明项目正在积极适配 Anthropic 的 MCP (Model Context Protocol) 标准，并支持更广泛的 HTTP/SSE 远程服务器连接，预示未来版本将更侧重于作为 AI 智能体的标准化连接中枢。
*   **容器化与 Sidecar 架构**: [PR #2664](nanocoai/nanoclaw PR #2664) 显示项目正在增强 v2 容器的集成能力，内置浏览器 sidecar 意味着官方开始支持更复杂的网页抓取与交互场景，减少用户部署配置成本。
*   **故障自愈**: [Issue #2657](nanocoai/nanoclaw Issue #2657) 提出的自愈需求，预示着项目路线图将纳入类似 Kubernetes 探针机制的进程级监控与自动重启功能。

## 7. 用户反馈摘要
从 Issue 作者 @mshirel 的反馈来看，当前用户（尤其是深度使用者和开发者）对以下方面存在痛点：
1.  **监控盲区**：现有的健康检查机制过于浅层，无法检测到事件循环冻结等深层故障。
2.  **默认配置限制**：默认的文件描述符限制（1024）在生产环境突发流量下成为瓶颈，用户期望默认配置更加健壮。
3.  **运维自动化**：用户希望系统能具备更强的容错与自愈能力，而不是依赖人工重启或简单的 Docker restart 策略。

## 8. 待处理积压
今日报告的 3 个 Issue 均为高优先级且未关闭，建议维护者优先关注：
*   [Issue #2665](nanocoai/nanoclaw Issue #2665): 宿主冻结问题影响核心可用性，且涉及架构层面调整。
*   [Issue #2655](nanocoai/nanoclaw Issue #2655): 生产环境静默崩溃风险高。
*   [Issue #2657](nanocoai/nanoclaw Issue #2657): 需完善故障反应机制。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-06-01)

## 1. 今日速览
NullClaw 项目今日整体活跃度较低，处于平稳维护状态。过去 24 小时内未观测到代码合并、发布新版本或关闭 Issue 的操作，开发节奏相对平缓。社区方面，新增 2 条由用户 @weissfl 提交的 Issue，均聚焦于 Telegram 集成场景下的功能异常。虽然代码层面无实质性推进，但反馈的问题涉及核心调度与交互体验，需维护者后续关注。

## 2. 版本发布
无。

## 3. 项目进展
今日无合并或关闭的 Pull Request，也无已关闭的 Issue。项目在代码库层面暂无向前推进的实质动作，目前处于待处理新反馈的状态。

## 4. 社区热点
今日社区活跃度主要集中在问题反馈上，尚未形成深度讨论，以下为最受关注的议题：

*   **[Issue #941 Agent-type cron jobs don't spawn a subprocess — Telegram delivery never happens](nullclaw/nullclaw Issue #941)**
    *   **分析**：该 Issue 报告了定时任务在特定类型（Agent）下无法正常工作的严重问题。用户指出配置正确但任务静默失败，这反映出社区对系统可靠性与调度机制的稳定性有较高要求，是今日最紧迫的反馈。
*   **[Issue #942 Telegram: missing typing indicator when pressing inline buttons](nullclaw/nullclaw Issue #942)**
    *   **分析**：该反馈关注用户交互细节，指出 Telegram 机器人点击内联按钮后缺乏“正在输入”的状态反馈。这表明部分高级用户对产品体验的完整性有细致要求。

## 5. Bug 与稳定性
今日报告了 2 个功能性 Bug，按严重程度排序如下：

*   **[严重] Agent 类型定时任务静默失败** — [Issue #941](nullclaw/nullclaw Issue #941)
    *   **详情**：当创建类型为 `agent` 的定时任务时，系统错误地将任务标记为完成，但实际上未启动子进程，导致 Telegram 消息投递从未发生。
    *   **状态**：目前尚无修复 PR，属于阻断性功能缺陷，建议优先排查。
*   **[一般] Telegram 回调交互缺少状态指示** — [Issue #942](nullclaw/nullclaw Issue #942)
    *   **详情**：在处理 Telegram `callback_query`（如点击内联按钮）时，缺少“typing...”指示器，导致用户无法感知系统正在处理请求，体验不佳。
    *   **状态**：目前尚无修复 PR，属于用户体验层面的问题。

## 6. 功能请求与路线图信号
今日无新增显性的“功能请求”，但现有 Bug 报告隐含了对以下功能增强的诉求：

*   **调度健壮性增强**：Issue #941 暴露了 Agent 调度流程中的漏洞。若能在调度前增加前置检查或增加详细的错误日志输出，将有助于提升系统的可观测性，这可能成为下一版本优化的重点。
*   **交互反馈完善**：Issue #942 提示需要完善 Telegram Bot API 的 `chat_action` 处理逻辑，建议在后续版本中将“交互反馈”作为 Telegram 集成模块的标准规范纳入。

## 7. 用户反馈摘要
*   **用户痛点**：用户 @weissfl 的反馈揭示了在复杂场景（Agent 调度 + Telegram 推送）下的不稳定性。特别是 Issue #941 中的“静默失败”现象，表明系统缺乏必要的错误抛出机制，导致排查困难。
*   **使用场景**：用户正尝试利用 NullClaw 构建基于 Agent 的自动化定时任务系统，并依赖 Telegram 作为主要的消息分发渠道。
*   **满意度**：虽然未直接表达不满，但连续提交两个功能性缺陷，说明目前版本在 Telegram 集成的边缘场景下可能存在未被覆盖的测试盲区。

## 8. 待处理积压
由于今日无已关闭 Issue，新增的 2 条 Issue 即为当前的积压重点，提醒维护者关注：

1.  **Issue #941** ([链接](nullclaw/nullclaw Issue #941))：涉及核心功能失效，建议立即标记为 `bug` 并进行复现验证。
2.  **Issue #942** ([链接](nullclaw/nullclaw Issue #942))：涉及交互体验，建议标记为 `enhancement` 或 `bug` 以纳入后续迭代。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报 (2026-06-01)**

### 1. 今日速览
IronClaw 项目今日保持高活跃度开发状态，过去 24 小时内 PR 更新量达 26 条，其中 8 条已合并或关闭，显示核心团队正在密集推进代码迭代。项目重点聚焦于底层架构的重构与增强，特别是 "Reborn" 计划下的触发器持久化、出站通信引擎以及 Slack/飞书集成。虽然无新版本发布，但多个核心功能模块（如 Trigger Repository 和 Outbound Resolution Engine）已完成关键代码提交。社区方面，用户对 MCP stdio 传输的支持问题反馈强烈，且自动化的 E2E 测试出现失败，需引起维护者注意。

### 2. 版本发布
无新版本发布。

### 3. 项目进展
今日项目在核心架构与集成能力上取得显著进展，主要体现在以下几点：
*   **核心架构重构**：
    *   出站通信解析引擎已合并/关闭 ([PR #4262](https://github.com/nearai/ironclaw/pull/4262))，实现了通信投递候选选择逻辑，为后续复杂的消息路由打下基础。
    *   触发器持久化层取得突破，`libsql` 仓库后端 ([PR #4263](https://github.com/nearai/ironclaw/pull/4263)) 和 `Postgres` 仓库后端 ([PR #4270](https://github.com/nearai/ironclaw/pull/4270)) 均已关闭，标志着 "Reborn" 触发器系统拥有了初步的持久化能力。
*   **认证与安全**：
    *   关于迁移 secrets、OAuth 及认证流程的 Issue ([Issue #3289](https://github.com/nearai/ironclaw/issues/3289)) 已关闭，表明 WebUI v2 的产品级认证流迁移工作可能已阶段性完成。
*   **平台集成**：
    *   Slack 集成正在密集开发中，新增了 Reborn Events API 主机入口 ([PR #4272](https://github.com/nearai/ironclaw/pull/4272)) 和 ProductAdapter 核心 ([PR #4035](https://github.com/nearai/ironclaw/pull/4035))。
    *   飞书的 WebSocket 事件接入功能正在审查中 ([PR #4178](https://github.com/nearai/ironclaw/pull/4178))，将支持长连接与二进制帧处理。
*   **WebUI v2**：
    *   原生 GitHub SSO 登录界面正在开发 ([PR #4229](https://github.com/nearai/ironclaw/pull/4229))，补充了之前的 Google SSO 工作。

### 4. 社区热点
*   **[Issue #2923](https://github.com/nearai/ironclaw/issues/2923) [OPEN]**：该 Issue 是今日讨论度最高的话题。用户报告 `stdio` 传输模式的 MCP 激活失败，并指出之前的关闭处理存在误判。作者详细分析了问题根源在于激活预检而非传输层不支持。这反映出社区对 MCP（Model Context Protocol）兼容性的高度关注，尤其是本地开发场景下的 stdio 通信需求。
*   **[PR #4178](https://github.com/nearai/ironclaw/pull/4178)**：飞书 WebSocket 支持的引入吸引了开发者关注，表明项目正积极拓展除 Slack 之外的企业级即时通讯平台支持。

### 5. Bug 与稳定性
*   **严重故障**：
    *   **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108)**：Nightly E2E 自动化测试失败。这是项目稳定性的红色警报，可能意味着主分支存在未捕获的回归问题，需立即排查。
*   **功能缺陷**：
    *   **[Issue #2923](https://github.com/nearai/ironclaw/issues/2923)**：MCP stdio 激活失败。目前尚未有修复 PR 链接，属于待处理状态。
*   **修复进展**：
    *   **[PR #4266](https://github.com/nearai/ironclaw/pull/4266)**：针对 `capability_info` 未知目标处理进行了修复，将查找失败延迟到合成调用阶段，改善了错误提示，避免终端驱动错误。

### 6. 功能请求与路线图信号
*   **多平台支持**：通过 [PR #4178](https://github.com/nearai/ironclaw/pull/4178) (飞书) 和 [PR #4272](https://github.com/nearai/ironclaw/pull/4272) (Slack) 可以看出，项目正在构建一套通用的 "Host Ingress" 架构，以支持多渠道消息接入。
*   **身份认证统一**：[PR #4229](https://github.com/nearai/ironclaw/pull/4229) 和 [PR #4239](https://github.com/nearai/ironclaw/pull/4239) 显示出项目正在强化 WebUI v2 的认证体系，致力于统一 Product-auth 与 Runtime credential broker。
*   **预测**：下一阶段版本可能会重点发布包含持久化触发器和多平台接入能力的 "Reborn" 版本。

### 7. 用户反馈摘要
*   **痛点**：在 Issue #2923 中，用户表达了对 `stdio` 传输支持不稳定的担忧。用户明确指出之前的 Issue 被错误关闭，且强调了 `stdio` 在 MCP 协议中的重要性。这提示维护者在处理类似协议兼容性问题时需更加谨慎，避免仅依据非维护者评论关闭核心功能相关的 Bug 报告。
*   **需求**：用户对 WebUI v2 的原生 GitHub SSO 登录有明确期待，相关 PR 正在推进中。

### 8. 待处理积压
*   **审查阻塞**：目前仍有 **18 个 PR 处于 Open 状态**，其中包括多个 XL 尺寸的核心功能 PR（如 Slack Reborn 适配器、飞书接入、依赖更新等）。建议维护者加快审查速度，避免积压过大导致后续合并冲突。
*   **长期未决 Issue**：[Issue #2923](https://github.com/nearai/ironclaw/issues/2923) 涉及 MCP stdio 激活问题，自 4 月创建至今未彻底解决，今日再次活跃，建议优先排期修复。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-01)

## 1. 今日速览
LobsterAI 项目今日整体处于**低频维护与社区突发问题处理**状态。过去 24 小时内，项目未发布新版本，代码仓库有 1 个 PR 被关闭（涉及 UI 优化），但仍有 1 个长期未合并的 Bug 修复 PR 处于待定状态。社区方面，新增 1 条高关注度 Issue，用户反馈订阅积分异常清零问题，涉及核心商业权益，需维护团队紧急响应。整体来看，项目代码提交活跃度一般，但社区反馈的健康度出现预警信号。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日项目主要推进了前端渲染与文档相关的优化工作，但核心功能性修复进展缓慢。

*   **UI 与文档优化完成**：PR #2080 `[area: renderer, area: docs, area: main, area: cowork] chore: optimize kits and upload file ui` 已于今日关闭。该 PR 主要优化了工具包及文件上传的用户界面交互，提升了文档与渲染模块的代码质量，属于体验打磨类的增量更新。
    *   链接: [netease-youdao/LobsterAI PR #2080](https://github.com/netease-youdao/LobsterAI/pull/2080)
*   **长期修复 PR 仍待合并**：PR #1465 旨在修复“已删除定时任务重启后作为幽灵会话重现”的严重 Bug，虽已提交修复方案（涉及本地 SQLite 数据清理逻辑），但目前仍处于 OPEN 状态，未能合入主分支。
    *   链接: [netease-youdao/LobsterAI PR #1465](https://github.com/netease-youdao/LobsterAI/pull/1465)

## 4. 社区热点
今日社区活跃度较低，但出现一条涉及用户切身利益的热点反馈。

*   **用户质疑积分清零机制**：Issue #2081 引发了关注。用户反馈购买的 5500 积分在月底未使用的情况下被系统直接清零，并附带了截图证据，情绪较为激动。该问题直指项目的订阅计费逻辑或策略透明度，若不及时澄清或修复，可能引发信任危机。
    *   链接: [netease-youdao/LobsterAI Issue #2081](https://github.com/netease-youdao/LobsterAI/issues/2081)

## 5. Bug 与稳定性
今日报告及跟踪的 Bug 主要集中在数据持久化与计费逻辑方面，按严重程度排序如下：

*   **[严重-商业逻辑] 积分异常清零** (Issue #2081)
    *   **描述**：用户订阅的积分在月底被系统强制清零，且用户声称未进行消费。
    *   **状态**：OPEN，暂无官方回复，暂无关联 Fix PR。
    *   **分析**：可能是定时任务逻辑错误或订阅过期策略未正确判断余额。

*   **[中等-数据一致性] 幽灵会话问题** (PR #1465)
    *   **描述**：删除定时任务后重启应用，任务以空内容“幽灵会话”重新出现。
    *   **状态**：Fix PR 已提交但长期未合并。
    *   **根因**：删除操作仅移除了网关侧任务，未清理本地 SQLite 数据库中的 `cowork_sessions` 记录。

## 6. 功能请求与路线图信号
今日无新增功能请求。从现有的 PR 活动来看，项目当前的路线图重心在于：
1.  **体验优化**：通过 PR #2080 可以看出项目正在对文件上传交互进行细节打磨。
2.  **Bug 修复积压**：PR #1465 长期未合并显示项目可能在代码审核或 CI/CD 流程上存在瓶颈，导致修复版本的发布滞后。

## 7. 用户反馈摘要
根据 Issue #2081 的反馈，用户对**资产安全性与规则透明度**极为敏感。
*   **痛点**：用户对积分/订阅制的资产有效期极为敏感，系统若无明确提示直接清零资产，极易导致用户流失。
*   **诉求**：用户期望订阅资产具有延续性或明确的到期提醒，而非后台静默清除。建议项目方检查是否缺乏积分过期的通知机制或存在数据库事务回滚错误。

## 8. 待处理积压
建议维护者重点关注以下长期未解决的 Issue/PR，避免影响项目健康度：

*   **PR #1465 - 幽灵会话修复**：该 PR 创建于 4 月，已停滞近 2 个月。该 Bug 会导致用户界面数据混乱，影响使用体验。建议优先进行 Code Review 并推进合并。
    *   链接: [netease-youdao/LobsterAI PR #1465](https://github.com/netease-youdao/LobsterAI/pull/1465)
*   **Issue #2081 - 积分清零投诉**：作为今日新增的高优先级问题，建议尽快介入排查是系统 Bug 还是策略误解，并给予用户合理解释。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-06-01)

## 1. 今日速览
Moltis 项目今日整体活跃度较低，未见新增 Issues 或版本发布，社区端显得较为平静。核心开发活动聚焦于底层架构优化，项目维护者 @s-salamatov 提交了一项关于会话历史管理的改进 PR。该改动旨在解决长上下文场景下的数据持久化与恢复问题，显示出项目正在打磨系统的稳定性与内存治理能力。整体而言，项目处于平稳迭代期，重点在于提升核心机制的健壮性。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日无已合并或关闭的 PR，但有一项关键的功能改进 PR 正在待合并状态，预示着项目在内存管理方面的进展：

*   **PR #1089 [OPEN] Cap persisted tool results before rehydration**
    *   **链接**: [moltis-org/moltis PR #1089](https://github.com/moltis-org/moltis/pull/1089)
    *   **作者**: @s-salamatov
    *   **进展分析**: 该 PR 提议在会话历史重填至 Provider-bound `ChatMessage`s 之前，对持久化的 `tool` 和 `tool_result` 内容进行容量限制。此举覆盖了普通聊天、流式聊天、压缩后重试及静默记忆轮次等核心场景。
    *   **意义**: 这标志着项目正在解决 Agent 在多轮工具调用中可能出现的上下文过载问题。通过限制工具结果的大小，不仅能降低 Token 消耗，还能有效防止因上下文过长导致的模型调用失败，是提升 Agent 长期运行稳定性的关键一步。

## 4. 社区热点
今日社区无活跃的 Issues 讨论。唯一的关注点集中在上述 PR #1089，尽管暂无评论互动，但该 PR 的提交本身代表了项目发展的风向标——即团队正致力于优化 LLM 上下文窗口的使用效率，这通常是 AI Agent 项目从“能用”走向“好用”的必经之路。

## 5. Bug 与稳定性
过去24小时内未收到新的 Bug 报告、崩溃反馈或回归问题。
*   **健康度评估**: 0 Issue 更新通常意味着当前发布的版本在短期内表现稳定，无明显阻塞性问题困扰用户。

## 6. 功能请求与路线图信号
今日无显性的用户功能请求。结合 PR #1089 的技术动向，可以识别出以下**隐性路线图信号**：
*   **上下文窗口精细化管理**: 项目正在引入更激进的上下文裁剪策略，预计未来版本将更擅长处理长链条的复杂任务。
*   **成本与性能平衡**: 限制 tool_result 大小暗示了对 API 成本的控制和对响应速度的优化，这可能是为了适应更广泛的商业化或大规模部署场景。

## 7. 用户反馈摘要
由于今日无新增 Issues 或 PR 评论，暂无具体用户反馈可供提炼。

## 8. 待处理积压
基于今日数据快照，暂无具体的长期积压 Issue 详情。
*   **关注点**: 建议维护者尽快审核当前唯一的待合并 PR [moltis-org/moltis PR #1089](https://github.com/moltis-org/moltis/pull/1089)，该 PR 涉及核心数据流转逻辑，尽早合并将有助于后续版本的稳定性测试。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-06-01)

## 1. 今日速览
CoPaw (QwenPaw) 项目今日保持高活跃度，社区反馈热烈，过去 24 小时内新增/活跃 Issue 达 23 条，PR 更新 16 条。开发重心集中在 **v1.1.9 版本的稳定性修复**，特别是 Windows 桌面端的体验优化（CMD 窗口闪烁）、MCP 资源管理优化以及定时任务的健壮性增强。值得注意的是，社区贡献者已提交关于 AgentScope 2.0 迁移的重构 PR，预示着项目底层架构即将迎来重大升级。整体来看，项目处于快速迭代修 Bug 与架构演进并行的阶段。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
尽管今日仅有 1 个 PR 被关闭/合并，但有多达 15 个 PR 处于活跃待合并状态，显示开发团队正在集中处理积压的功能改进与修复：

*   **已合并/关闭**:
    *   [PR #4810](https://github.com/agentscope-ai/QwenPaw/pull/4810) **优化控制台聊天输入框的斜杠命令提示**：提升了技能调用的交互体验。
*   **关键修复进展 (待合并)**:
    *   [PR #4849](https://github.com/agentscope-ai/QwenPaw/pull/4849) **修复 MCP Server 进程爆炸问题**：引入 `SharedMCPPool` 以复用服务端进程，解决多 Agent 场景下的资源耗尽问题。
    *   [PR #4850](https://github.com/agentscope-ai/QwenPaw/pull/4850) **修复企业微信通道会话隔离安全漏洞**：修复了可能通过 payload 注入导致会话串用的安全隐患。
    *   [PR #4822](https://github.com/agentscope-ai/QwenPaw/pull/4822) **修复定时任务执行轨迹为空的问题**：解决了 `share_session=true` 时 Cron 任务不执行的问题。
    *   [PR #4820](https://github.com/agentscope-ai/QwenPaw/pull/4820) **修复上下文压缩崩溃**：解决了包含内联 URL 的媒体块导致 Compact 失败的问题。
*   **架构演进**:
    *   [PR #4846](https://github.com/agentscope-ai/QwenPaw/pull/4846) **[WIP] AgentScope 2.0.0 迁移**：开启了底层依赖版本的重大升级重构，值得密切关注。

## 4. 社区热点
今日社区讨论焦点集中在**任务调度的可靠性**与**Windows 客户端体验**上：

*   **对话回退与状态管理**：[Issue #4789](https://github.com/agentscope-ai/QwenPaw/issues/4789)（已关闭）引发了关于“对话删除与回退”功能的热烈讨论（9 条评论）。用户强烈希望能像 Trae 一样支持细粒度的状态回滚（包括文件状态），反映出用户对 Agent 长期记忆与状态管理的精细化需求。
*   **Token 开销优化**：[Issue #4836](https://github.com/agentscope-ai/QwenPaw/issues/4836) 提出“工具定义按需加载”，指出当前将所有工具 Schema 注入 Prompt 占用了 55-65% 的 Token，社区对降低成本和优化上下文利用率呼声很高。
*   **v1.1.9 稳定性焦虑**：[Issue #4837](https://github.com/agentscope-ai/QwenPaw/issues/4837) 反映升级后频繁出现系统级 Fallback 回复，导致 Agent 无法正常工作，多位用户表示遇到类似问题，关注度较高。

## 5. Bug 与稳定性
今日报告了多个严重影响体验的 Bug，部分已有修复方案：

*   **[严重] MCP 进程资源耗尽** ([Issue #4842](https://github.com/agentscope-ai/QwenPaw/issues/4842))
    *   现象：配置大量 Agent 时，每个实例独立启动 MCP 进程导致系统崩溃。
    *   状态：**已有修复 PR #4849**，引入共享进程池。
*   **[严重] 企业微信通道会话隔离失效** ([Issue #4845](https://github.com/agentscope-ai/QwenPaw/issues/4845))
    *   现象：存在通过 Prompt 注入获取其他用户历史记录的风险。
    *   状态：**已有修复 PR #4850**。
*   **[高] Windows CMD 窗口闪烁** ([Issue #4832](https://github.com/agentscope-ai/QwenPaw/issues/4832), [Issue #4829](https://github.com/agentscope-ai/QwenPaw/issues/4829) [已关闭])
    *   现象：执行 Shell 命令时频繁弹出黑色 CMD 窗口。
    *   状态：社区已定位根因为缺少 `CREATE_NO_WINDOW` 标志，Issue #4829 已关闭，可能在主分支已修复或重复提交。
*   **[高] Cron 任务调度异常** ([Issue #4835](https://github.com/agentscope-ai/QwenPaw/issues/4835))
    *   现象：`jobs.json` 中存在单个无效任务会导致整个工作区启动失败，缺乏容错机制。
    *   状态：待处理。
*   **[中] 上下文压缩失败** ([Issue #4811](https://github.com/agentscope-ai/QwenPaw/issues/4811))
    *   现象：消息中包含特定 URL 格式字符串导致内存压缩逻辑崩溃。
    *   状态：**已有修复 PR #4820**。

## 6. 功能请求与路线图信号
*   **并发控制模式**：[Issue #4843](https://github.com/agentscope-ai/QwenPaw/issues/4843) 建议增加“打断”、“排队”、“插入”三种对话模式，以解决定时任务与用户消息冲突的问题（关联 Issue #4653）。这反映了多任务并发场景下的强需求。
*   **思考强度 UI 控制**：[Issue #4840](https://github.com/agentscope-ai/QwenPaw/issues/4840) 建议在对话界面直接选择模型思考强度（如 xhigh），无需修改配置文件，提升易用性。
*   **桌面端路径交互**：[Issue #4830](https://github.com/agentscope-ai/QwenPaw/issues/4830) 建议输出的本地文件路径可点击打开目录，提升桌面端操作效率。
*   **AgentScope 2.0 升级**：[PR #4846](https://github.com/agentscope-ai/QwenPaw/pull/4846) 的开启暗示下一阶段路线图将围绕底层框架升级展开，可能带来性能或架构上的重大变更。

## 7. 用户反馈摘要
*   **痛点：Windows 桌面端体验**：多个 Issue 提及 Windows 端启动慢、CMD 闪烁、升级后残留文件等问题，表明桌面端封装（Tauri/Pyinstaller）需要重点优化。
*   **痛点：定时任务健壮性**：用户频繁使用 Cron 执行自动化脚本，但目前的会话冲突、执行轨迹为空、配置错误导致服务崩溃等问题严重影响了生产环境使用。
*   **场景：重型工具流**：部分用户配置了大量工具（45+），导致 Token 消耗巨大，急需“按需加载”机制（Issue #4836）。
*   **认可**：社区对 Bug 的响应速度较快，针对 MCP 进程爆炸和内存压缩崩溃等问题，开发者在 24 小时内就提交了修复 PR。

## 8. 待处理积压
*   **PR #4433** ([链接](https://github.com/agentscope-ai/QwenPaw/pull/4433))：关于在对话中显示 Token 消耗的功能 PR，自 5 月 15 日创建至今已半月有余，处于 "Under Review" 状态，建议维护者尽快合并或反馈，该功能对用户监控成本至关重要。
*   **PR #4683** ([链接](https://github.com/agentscope-ai/QwenPaw/pull/4683))：Tauri 桌面端外部链接修复，已提交一周，亟待合并以改善桌面端基础体验。
*   **Issue #4666** ([链接](https://github.com/agentscope-ai/QwenPaw/issues/4666))：新建会话导致模型配置丢失的问题仍未解决，影响多会话管理体验。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-06-01)

## 1. 今日速览
项目今日整体处于低频活跃状态，主要动态集中在安全性维护领域。过去24小时内未观察到新功能开发或版本发布，代码提交层面的活跃度（PR）为零。唯一的显著动态是关于全库安全扫描的 Issue #609，该任务关注 Webhook 身份路由的安全性审计。该 Issue 的快速创建与关闭反映出项目维护者对安全合规的高度重视及自动化工作流的高效执行，项目健康度在安全性维度表现良好。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日无合并或关闭的 Pull Request，代码库未发生变更。项目在功能迭代上处于平稳期。
唯一进展体现在安全合规层面：
*   **安全审计完成**：Issue #609 已关闭。这标志着针对当前代码库的 Codex Security 扫描已完成，特别是针对 Webhook 请求身份流经准入和路由过程的审查已结束。这为后续可能的版本发布扫清了潜在的安全隐患。

## 4. 社区热点
今日讨论热度最高（也是唯一）的动态为安全相关的 Issue：
*   **[Issue #609 repository-wide Codex Security scan for webhook identity routing](https://github.com/qhkm/zeptoclaw/issues/609)**
    *   **分析**：该 Issue 由维护者 @daneschneider-oai 发起，虽然评论数仅为 1 条，但其快速闭环（当日创建当日关闭）显示了项目维护流程的高效。这背后的诉求是确保 ZeptoClaw 在处理外部 Webhook 请求时的身份验证逻辑没有漏洞，属于项目关键路径上的质量保障行为。

## 5. Bug 与稳定性
*   今日无新报告的 Bug、崩溃或回归问题。项目稳定性维持现状。

## 6. 功能请求与路线图信号
*   今日无新增功能请求。现有的活动信号（安全扫描）暗示项目当前阶段的重心在于**稳固核心架构**而非扩展新功能。对于 AI 智能体而言，Webhook 身份路由是关键的输入处理环节，确保其安全性可能是下一阶段功能迭代的前置条件。

## 7. 用户反馈摘要
*   今日无终端用户的功能性反馈或痛点讨论。主要动态源于维护体系内部的自动化流程，侧面反映了项目目前在自动化运维方面的成熟度较高。

## 8. 待处理积压
*   根据今日数据，过去24小时内无新增未处理的 Issue 或 PR。
*   **提醒**：虽然今日积压清零，但缺乏新的 PR 流入可能意味着外部贡献者活跃度较低。建议维护者关注长期路线图的推进情况，适时通过 Discussion 或 Roadmap 更新来激发社区参与热情。

---
*数据来源：GitHub Repository qhkm/zeptoclaw (2026-06-01)*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-06-01)

**项目仓库：** [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. 今日速览
EasyClaw 项目今日整体呈现“低交互、高产出”的状态。尽管社区交互端（Issues 与 PRs）在过去 24 小时内无显性活动，但项目团队默默推进并发布了重要的功能更新版本 v1.8.22。此次更新显示项目正从核心功能构建向“用户体验优化”与“运维支持效能”阶段过渡。目前项目无明显阻碍性 Bug，版本迭代节奏稳定，健康度评估为**良性**。

### 2. 版本发布
今日项目发布了新版本 **v1.8.22 (RivonClaw v1.8.22)**，此次更新主要聚焦于运维监控能力与用户引导体系的增强，未见破坏性变更。

*   **更新亮点：**
    *   **运维支持增强：** 新增服务端驱动的桌面端日志上传功能。支持团队在排查故障时，可直接请求已登录客户端上传当前日志，显著降低了远程故障排查的沟通成本。
    *   **引导教程扩展：** 大幅扩展了面板教程的覆盖范围，现已涵盖账单、电子商务、客户服务、联盟推广及设置等工作流，有助于降低新用户上手门槛。
    *   **品牌信息维护：** 更新了桌面应用的描述信息，统一围绕 RivonClaw 品牌进行调整。

*   **迁移建议：** 本次更新主要为功能新增与体验优化，不涉及 API 变更或底层重构，用户可平滑升级。

**Release 链接：** [v1.8.22: RivonClaw v1.8.22](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.22)

### 3. 项目进展
过去 24 小时内，项目共有 **0 条 PR 更新**（合并/关闭/活跃）。

虽然代码提交记录未在今日的 PR 活动中体现，但 v1.8.22 的发布表明项目在桌面端能力建设与用户教育内容填充上迈出了实质性的一步。项目重心正从单纯的代码交付转向完善商业化与售后服务支撑体系。

### 4. 社区热点
过去 24 小时内，项目 Issues 与 PRs 板块均为静默状态，无活跃讨论、新开议题或评论互动。这通常表明当前版本稳定性较高，用户群体处于平稳使用期，或社区活跃度有待进一步激发。

### 5. Bug 与稳定性
今日无新增 Bug 报告、崩溃反馈或回归问题。结合 v1.8.22 新增“日志上传”功能来看，维护者正积极构建更完善的监控体系，预示着未来对潜在稳定性问题的响应速度将进一步提升。目前项目稳定性处于**安全区间**。

### 6. 功能请求与路线图信号
今日无新增功能请求（Issues）。
**从 v1.8.22 版本推断路线图：**
*   **信号 1 - 商业化闭环完善：** 教程覆盖到“账单、电商、联盟推广”等模块，暗示 EasyClaw 正致力于打造完整的商业变现生态，预计下一阶段将继续优化商家端与推广端的功能细节。
*   **信号 2 - SaaS 化服务能力：** “服务端驱动日志上传”是典型的 SaaS 化运维特征，表明项目未来将更注重企业级服务支持能力的构建。

### 7. 用户反馈摘要
由于今日无活跃 Issues 评论，暂无直接用户反馈数据。但从新版本对“教程覆盖范围”的扩展可以推测，此前用户可能存在“对复杂后台功能理解困难”或“关键业务流程设置不清晰”的痛点，新版本旨在解决此类认知障碍。

### 8. 待处理积压
今日数据源中未显示有长期未响应的重要 Issue 或 PR。建议维护者在发布新版本后，主动关注社区对新版教程及日志上传功能的反馈，以验证功能落地效果。

---
**分析师点评：** EasyClaw 今日的表现体现了成熟项目的特征——注重版本交付质量而非单纯的社区“噪音”。新增的运维与教育功能填补了产品落地的最后一块拼图，对于提升用户留存具有积极意义。建议后续关注 v1.8.22 上线后的实际用户反馈，以验证新功能的稳定性。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*