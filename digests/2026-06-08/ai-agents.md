# OpenClaw 生态日报 2026-06-08

> Issues: 294 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-06-08 04:16 UTC

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

# OpenClaw 项目动态日报 (2026-06-08)

## 1. 今日速览
OpenClaw 项目今日呈现高热度活跃状态，社区反馈极其强烈。过去 24 小时内 Issues 更新量达 **294 条**，PR 更新量高达 **500 条**，显示项目正处于密集开发与社区互动期。尽管无新版本发布，但合并/关闭了 169 个 PR，主要聚焦于稳定性修复与架构重构。今日焦点集中在**安全性配置逻辑倒置**、**消息泄露**以及**会话状态管理**等核心问题，多个 P1 级别的回归 Bug 被提出并已有修复方案。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
今日共有 **169 个 PR 被合并或关闭**，重点推进了以下领域：
- **稳定性与性能修复**：合并了 [PR #87979](https://github.com/openclaw/openclaw/pull/87979) (修复插件同步冷启动问题) 和 [PR #86372](https://github.com/openclaw/openclaw/pull/86372) (优化网关模型规范化以消除陈旧策略警告)，提升了系统运行效率。
- **安全性修复**：[PR #87219](https://github.com/openclaw/openclaw/pull/87219) 已关闭，修复了入站媒体引用读取的安全边界问题。
- **关键修复待合并**：针对严重安全逻辑缺陷的 [PR #91288](https://github.com/openclaw/openclaw/pull/91288) (修复 minSecurity 倒置) 已提交，等待审核；网关重启诊断修复 [PR #90937](https://github.com/openclaw/openclaw/pull/90937) 已标记为自动合并就绪。

## 4. 社区热点
今日社区讨论集中在安全隐患与核心架构改进：
- **[Issue #25592](https://github.com/openclaw/openclaw/issues/25592) [P1/安全]**: **工具调用间的文本泄露至消息频道**。该问题引发 27 条评论，被评为 "diamond lobster" 级别。用户反馈在 AI 处理过程中的错误处理或旁白文本会被错误路由到 Slack/iMessage 等外部通道，造成严重的隐私与 UX 问题。
- **[Issue #88838](https://github.com/openclaw/openclaw/issues/88838) [P2]**: **SQLite 迁移架构讨论**。评论数 18。讨论如何通过抽象缝隙逐步将会话/转录迁移至 SQLite，避免大规模重写风险。
- **[Issue #88312](https://github.com/openclaw/openclaw/issues/88312) [P1/回归]**: **Codex 应用服务器轮次完成停滞**。评论数 14。影响 ChatGPT Plus 用户，导致多工具代理流程中断，是严重的回归问题。

## 5. Bug 与稳定性
今日报告了多个高严重度 Bug，部分已有修复 PR：

- **🔴 严重**:
    - **[Issue #91283] minSecurity 逻辑倒置**: `exec-approvals.js` 中安全等级比较逻辑反了，`full` 被视为最严格而非最宽松，导致安全配置被错误覆盖。
      - 🔧 **Fix**: [PR #91288](https://github.com/openclaw/openclaw/pull/91288) 已提交。
    - **[Issue #25592] 消息泄露**: 内部处理文本泄露至外部通道，需立即关注。
    - **[Issue #90991] Cron 触发全局状态污染**: 定时任务触发导致系统过载崩溃。

- **🟠 中等**:
    - **[Issue #88312] Codex 回归**: 2026.5.27 版本引入的代理执行中断问题。
    - **[Issue #40001] 数据丢失**: 写入工具缺乏追加模式，定时任务会相互覆盖文件。
    - **[Issue #91212] 恢复失败**: 网关重启后投递恢复机制在通道就绪前过早启动，导致消息丢失。

## 6. 功能请求与路线图信号
- **轻量化部署**: [Issue #86881](https://github.com/openclaw/openclaw/issues/86881) 提出无 AI 模型的 "Gateway-lite" 模式，用于确定性部署，获得积极讨论。
- **上下文管理**: [Issue #90916](https://github.com/openclaw/openclaw/issues/90916) 提议 "Topic-session families"，允许一个助手跨多个隔离的上下文通道，反映了对复杂场景上下文隔离的需求。
- **UI 改进**: [Issue #84216](https://github.com/openclaw/openclaw/issues/84216) 已关闭，请求在控制菜单中增加折叠功能以优化小屏幕显示。

## 7. 用户反馈摘要
- **安全与隐私焦虑**: 多个 Issue 提及配置被忽略或逻辑反转（如 #29387, #91283），用户对生产环境的安全性表示担忧。
- **多渠道体验差异**: 用户反馈在 Telegram、Slack、Feishu 等不同渠道存在流式输出丢失、头像 404 等细节体验问题（#38439, #87326）。
- **配置复杂度**: 用户在 Bootstrap 文件加载、模型白名单配置等方面遇到困难，文档或默认行为需优化（#29387, #39992）。

## 8. 待处理积压
- **[Issue #25592](https://github.com/openclaw/openclaw/issues/25592) [P1]**: 消息泄露问题自 2 月创建至今未解决，积压严重，需立即处理。
- **[Issue #31583](https://github.com/openclaw/openclaw/issues/31583) [P1]**: `exec` 工具环境变量继承问题积压已久，影响密钥注入安全性。
- **[Issue #70253] [已关闭/积压]**: Mattermost 消息流配置失效问题虽已关闭，但需确认修复是否已合入主线。

---
*数据来源：OpenClaw GitHub Tracker | 分析师：AI Analyst*

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比分析报告 (2026-06-08)

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正处于从**单点功能完善向系统化、多智能体协作演进**的关键转折期。以 OpenClaw 为首的核心项目正经历架构重构与安全性加固的阵痛，显示出生态对生产级稳定性的迫切需求；同时，Hermes Agent 与 Zeroclaw 等项目竞相探索 **A2A（Agent-to-Agent）协议**，标志着竞争焦点已从单一助手能力转向智能体间的互联协作。边缘计算与移动端部署（PicoClaw, Moltis）的活跃则印证了“AI 无处不在”的趋势，而安全漏洞（权限绕过、逻辑倒置）的频发敲响了生态成熟度不足的警钟。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新 | 版本发布 | 健康度评估 | 核心状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **294** | **500** | 无 | 🟡 高热度/风险并存 | 核心架构重构中，P1级安全与回归问题突出 |
| **Hermes Agent** | 50 | 50 | 无 | 🟢 活跃/架构演进 | A2A协议讨论热烈，桌面端与网关稳定性提升 |
| **Zeroclaw** | 50 | 50 | 无 (v0.8.0筹备) | 🟢 活跃/功能扩展 | 多智能体路由与Web管理增强，S0级Bug待修 |
| **IronClaw** | 50 | 38 | 无 | 🟢 活跃/重构攻坚 | "Reborn"架构迁移中，WebUI v2与安全边界定义 |
| **QwenPaw** | 26 | 11 | 无 | 🟢 活跃/迁移期 | AgentScope 2.0 迁移启动，修复配置崩溃问题 |
| **PicoClaw** | 21 (17 Closed) | 11 Merged | **v0.2.9-nightly** | 🟢 健康/质量提升 | 清理积压，修复数据安全Bug，增加移动端支持 |
| **NanoBot** | 7 | 24 | 无 | 🟢 稳健 | 会话管理与沙箱兼容性修复 |
| **NanoClaw** | 2 | 3 Merged | 无 | 🟡 中等 | 配置持久化与权限安全修复 |
| **LobsterAI** | 15 (14 Stale) | 2 Merged | 无 | 🔴 低活跃/积压严重 | Stale Bot 激活大量历史问题，核心Bug修复缓慢 |
| **Moltis** | 1 | 0 | 无 | ⚪ 低活跃 | 功能请求单一，无代码提交 |
| **其他** | - | - | - | ⚪ 静止 | 过去24小时无动态 |

> *注：OpenClaw 数据量级显著高于其他项目，处于生态核心位置，但也面临最大的维护压力。*

## 3. OpenClaw 在生态中的定位

**定位：生态基石与架构探路者**
OpenClaw 在 Issues 与 PRs 数量上呈现数量级优势（294 vs 50），不仅是社区规模的领跑者，更是技术问题的“暴风眼”。

*   **优势**：社区反馈极其强烈，不仅吸引了大量用户，也吸引了大量贡献者解决边缘场景问题（如 SQLite 迁移架构讨论），具备极强的生态统治力。
*   **技术路线差异**：相比于 Zeroclaw 和 Hermes 专注于“多智能体协作”的外部连接，OpenClaw 正在攻克**内核级的稳定性与安全性**难题（如 `minSecurity` 逻辑倒置、会话状态管理）。这表明 OpenClaw 更倾向于打造一个**稳固的底层操作系统**，而不仅仅是应用层连接器。
*   **对比差距**：相比 PicoClaw 的轻量化与 QwenPaw 的特定框架深度定制，OpenClaw 面临更复杂的“通用性”带来的架构债务（如通用的消息泄露问题），其解决的 P1 级问题往往具有行业普适参考价值。

## 4. 共同关注的技术方向

各项目在解决问题时呈现出明显的技术共性，反映了当前阶段的核心挑战：

1.  **安全性与隔离边界**
    *   **涉及项目**：OpenClaw, NanoClaw, Hermes Agent, IronClaw, NanoBot。
    *   **具体诉求**：
        *   OpenClaw 出现严重的安全逻辑倒置（`minSecurity`）与消息泄露。
        *   NanoClaw 暴露 MCP 工具权限绕过风险。
        *   IronClaw 正在设计 "No Exposure Safeguards" 防止数据越界。
        *   NanoBot 修复沙箱环境变量泄露。
    *   **趋势**：随着 Agent 权限扩大（读写文件、执行代码），**安全边界正从“配置项”转变为“核心架构约束”**，社区不再满足于简单的开关，而是要求内核级隔离。

2.  **多智能体通信与协作 (A2A & Routing)**
    *   **涉及项目**：Hermes Agent, Zeroclaw。
    *   **具体诉求**：
        *   Hermes Agent 社区强烈呼吁支持 Google A2A 协议，以解决“谁能帮我”的发现问题。
        *   Zeroclaw 已接受 A2A 协议与多智能体路由提案。
    *   **趋势**：单体智能体已无法满足复杂任务需求，**智能体间通信协议标准化**是下一阶段竞争高地。

3.  **多渠道适配的一致性体验**
    *   **涉及项目**：OpenClaw, NanoBot, QwenPaw, Hermes Agent。
    *   **具体诉求**：
        *   OpenClaw 反馈多渠道（Slack/iMessage/Telegram）体验差异及流式输出丢失。
        *   QwenPaw 修复企业微信连接与工具调用失败。
        *   NanoBot 修复飞书、WhatsApp 的提及解析。
    *   **趋势**：**“Write Once, Run Anywhere”** 仍是痛点，各项目正致力于抹平 IM 平台底层协议差异带来的交互割裂。

4.  **数据持久化与会话管理**
    *   **涉及项目**：OpenClaw, NanoClaw, Hermes Agent, Zeroclaw。
    *   **具体诉求**：OpenClaw 讨论 SQLite 迁移；NanoClaw 推进配置数据库化；Hermes Agent 解决记忆隔离；Zeroclaw 修复上下文压缩丢失。
    *   **趋势**：会话数据正从简单的 Key-Value 存储向**结构化、可迁移、可检索的数据库架构**演进，以支持长期记忆与复杂工作流。

## 5. 差异化定位分析

| 维度 | **OpenClaw** | **Hermes / Zeroclaw** | **PicoClaw / NanoBot** | **QwenPaw / LobsterAI** |
| :--- | :--- | :--- | :--- | :--- |
| **核心定位** | **全功能智能体操作系统** | **多智能体协作网关** | **轻量化/边缘计算专家** | **垂直生态/特定框架定制** |
| **功能侧重** | 通用性、架构稳定性、插件生态 | 协议支持 (A2A)、跨 Agent 调度 | 资源占用低、跨平台 (Android/Termux) | 深度绑定模型 (Qwen/AgentScope)、企业集成 |
| **目标用户** | 广大开发者与生产环境用户 | 构建复杂工作流的企业与极客 | 硬件受限环境开发者、IoT 场景 | 特定模型用户、国产化需求企业 |
| **技术架构** | 正在重构核心存储与安全逻辑 | 侧重 Gateway 网关与路由层 | 侧重 Binary 依赖管理与沙箱 | 侧重前后端一体化框架迁移 |
| **典型特征** | 高复杂度、高热度、高 Bug 率 | 协议先行、连接中心 | 小而美、部署灵活 | 模型优化、渠道适配 |

## 6. 社区热度与成熟度

*   **快速迭代与扩张期**：
    *   **OpenClaw, Zeroclaw, Hermes Agent, IronClaw**。这些项目 Issue 与 PR 双高，核心架构变动频繁（如 IronClaw 的 Reborn，OpenClaw 的 SQLite 迁移）。社区讨论热烈，但也面临回归 Bug 增多的挑战，属于“成长痛”阶段。

*   **质量巩固与细化期**：
    *   **PicoClaw, NanoBot, NanoClaw**。这些项目今日主要工作是修复边缘 Bug 和优化稳定性（如修复文件写入错误、沙箱兼容性）。社区反馈趋于理性，主要关注具体场景的可用性，显示出较高的成熟度。

*   **维护与调整期**：
    *   **LobsterAI, Moltis**。LobsterAI 依赖 Stale Bot 维护 backlog，Moltis 仅有个位数的交互。这些项目处于功能维护状态，缺乏大规模新特性开发动力。

## 7. 值得关注的趋势信号

1.  **安全逻辑正成为架构重构的驱动力**
    OpenClaw 的 `minSecurity` 倒置和 NanoClaw 的权限绕过警示开发者：**安全配置不能仅靠代码逻辑判断，需要架构级的隔离机制**（如 IronClaw 提出的 ProductWorkflow 边界）。建议开发者在设计初期引入“默认拒绝”或“显式声明”的安全模型。

2.  **“数据库化”取代“文件配置”**
    OpenClaw 讨论 SQLite 迁移、NanoClaw 推进配置入库、IronClaw 提出声明式配置蓝图。这标志着 AI 智能体正从**脚本化工具向服务化应用转型**，以解决配置版本控制、多租户隔离和运行时热更新的难题。

3.  **边缘侧与移动端是不可忽视的增长点**
    PicoClaw 对 Android Termux 的支持和 Moltis 对移动端多行输入的请求表明，用户不再满足于仅在服务器端运行 Agent。**端侧模型与轻量化运行时**（如 PicoClaw 的 Kagi 搜索集成、NanoBot 的沙箱修复）将是下一阶段差异化竞争的重点。

4.  **A2A 协议预示“智能体互联网”雏形**
    Hermes Agent 和 Zeroclaw 对 A2A 的关注，意味着智能体正在寻求**跨框架、跨实例的互联标准**。这类似于互联网早期的 TCP/IP 协议，未来能够支持“发现-委托-反馈”闭环的 Agent 框架将获得先发优势。开发者应关注 A2A 协议的接口定义与安全边界。

5.  **企业级部署痛点显现**
    多个项目（OpenClaw, Zeroclaw, IronClaw）均提及了多租户、Webhook 路由、权限隔离等问题。这表明开源项目正大规模进入企业生产环境，**运维友好性（可观测性、热更新、配置管理）** 将成为评估项目成熟度的关键指标。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-08)

## 1. 今日速览
NanoBot 项目今日保持高活跃度，虽然无新版本发布，但社区贡献热情高涨，共产生 **24 条 PR 更新**与 **7 条 Issue 更新**。开发重心明显向 **系统稳定性与架构优化** 倾斜，重点解决了会话历史管理、沙箱环境兼容性及多渠道适配问题。大量待合并的 PR 显示项目正处于密集的代码审查与功能迭代阶段，整体健康度良好。

## 2. 版本发布
*   **无新版本发布**。项目目前处于开发迭代期，主要变更集中在主分支的代码合并与功能完善。

## 3. 项目进展
今日共有 5 个 PR 被合并或关闭，显著提升了多渠道兼容性和核心逻辑稳定性：

*   **多渠道适配完善**：
    *   PR [#2885](https://github.com/HKUDS/nanobot/pull/2885) 修复了飞书通道的提及数据解析及 Token 初始化问题，提升了企业级 IM 集成的稳定性。
    *   PR [#2663](https://github.com/HKUDS/nanobot/pull/2663) 修复了 WhatsApp 群组提及检测逻辑，解决了 LID 和设备后缀导致的 Bot 识别失败问题。
*   **核心逻辑修复**：
    *   PR [#4227](https://github.com/HKUDS/nanobot/pull/4227) 修复了自定义 Provider 丢弃空字符串 `reasoning_content` 的 Bug，确保推理内容完整传递。
    *   PR [#4240](https://github.com/HKUDS/nanobot/pull/4240) 增强了 WebUI 终端体验，支持在代码块中渲染 ANSI 彩色输出。
*   **问题修复尝试**：PR [#4244](https://github.com/HKUDS/nanobot/pull/4244) 关闭，相关问题 #4242 的修复工作已转移至 PR [#4243](https://github.com/HKSDS/nanobot/pull/4243) 继续推进。

## 4. 社区热点
今日社区关注点集中在核心会话管理与安全沙箱的边界情况处理：

*   **会话历史丢失风险**：Issue [#4203](https://github.com/HKUDS/nanobot/issues/4203) 报告了 `find_legal_message_start` 函数在特定场景下（用户消息后跟孤立工具结果）会丢弃所有消息的严重 Bug。目前已 有 PR [#4219](https://github.com/HKUDS/nanobot/pull/4219) 尝试修复，该问题直接影响对话连续性，备受开发者关注。
*   **沙箱环境兼容性**：Issue [#4236](https://github.com/HKUDS/nanobot/issues/4236) 与 [#4237](https://github.com/HKUDS/nanobot/issues/4237) 指出 Bubblewrap 沙箱在 Ubuntu 24.04 及 HOME 环境变量处理上的缺陷。PR [#4239](https://github.com/HKUDS/nanobot/pull/4239) 已迅速响应，试图修正环境变量隔离问题。

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及会话管理、沙箱隔离及配置逻辑，部分已有修复方案：

*   **严重 - 会话消息丢失**：Issue [#4203](https://github.com/HKUDS/nanobot/issues/4203) 指出消息序列处理逻辑缺陷导致全量消息被丢弃。
    *   *状态*：已有修复 PR [#4219](https://github.com/HKUDS/nanobot/pull/4219) 待合并。
*   **高危 - 沙箱环境变量泄露**：Issue [#4237](https://github.com/HKUDS/nanobot/issues/4237) 指出 `bwrap` 未重置 `$HOME`，可能导致工具写入错误路径。
    *   *状态*：已有修复 PR [#4239](https://github.com/HKUDS/nanobot/pull/4239) 待合并。
*   **中危 - Ubuntu 24.04 沙箱启动失败**：Issue [#4236](https://github.com/HKUDS/nanobot/issues/4236) 报告受限于用户命名空间权限，沙箱无法运行。
    *   *状态*：Open，暂无直接修复 PR。
*   **中危 - 禁用 Dream 功能致 Prompt 膨胀**：Issue [#4242](https://github.com/HKUDS/nanobot/issues/4242) 发现禁用 Dream 后，未处理的历史记录会全部注入 System Prompt。
    *   *状态*：已有修复 PR [#4243](https://github.com/HKUDS/nanobot/pull/4243) 待合并。

## 6. 功能请求与路线图信号
社区提出了多项增强功能，部分已进入实现阶段：

*   **子代理模型覆盖**：Issue [#4231](https://github.com/HKUDS/nanobot/issues/4231) 请求为 `spawn` 工具增加 `model` 参数，以支持主代理与子代理使用不同模型。这是多智能体协作的关键特性，预计将被高优采纳。
*   **WebUI 版本显示**：Issue [#4233](https://github.com/HKUDS/nanobot/issues/4233) 建议在界面显示版本号及更新提示。PR [#4235](https://github.com/HKUDS/nanobot/pull/4235) 已实现该功能，等待合并。
*   **钉钉群组白名单**：PR [#4206](https://github.com/HKUDS/nanobot/pull/4206) 增加了 `group_allow_from` 配置，提供了更细粒度的群聊权限控制。

## 7. 用户反馈摘要
*   **隔离性与安全性**：用户对沙箱机制 (`bwrap`) 的依赖度增加，但在 Ubuntu 24.04 等新系统上遇到权限问题，反映出用户对安全隔离环境的强需求。
*   **配置灵活性**：用户希望更精细地控制模型行为（如子代理模型选择）和触发条件（如钉钉群组白名单），表明 NanoBot 正在被应用于更复杂的业务流程。
*   **隐蔽 Bug 痛点**：Issue #4203 反映的“孤立工具结果”导致消息清空的问题，说明部分用户已在处理复杂的对话链路，对边缘场景的容错性要求较高。

## 8. 待处理积压
*   **MCP 安全性增强**：PR [#4123](https://github.com/HKUDS/nanobot/pull/4123) 提出在 MCP (Model Context Protocol) 中拒绝不安全的 HTTP URL 以防止 SSRF 攻击。该 PR 已存在 8 天，涉及重要安全策略，建议维护者优先审查。
*   **工具调用验证严格化**：PR [#4190](https://github.com/HKUDS/nanobot/pull/4190) 旨在收紧工具调用参数验证，避免无效参数被静默修复，这对提升 Agent 执行可靠性至关重要。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-08)

## 1. 今日速览
Zeroclaw 项目今日维持高活跃度，Issues 与 PR 更新量均达 50 条，显示社区开发节奏紧凑。尽管今日无新版本发布，但 **v0.8.0** 的发布准备工作已在 PR 阶段，预计近期将迎来重要更新。项目重点目前集中在 **修复关键 Bug**（如文件写入丢失、Provider 配置失效）和 **扩展平台能力**（A2A 协议、多智能体路由、Web 端管理增强）。社区对 Web Dashboard 的可用性、Token 成本优化及国产化平台接入（QQ/飞书）表现出强烈关注。

## 2. 版本发布
无新版本发布。但 PR #7364 已开启 v0.8.0 的发布流程，预示着包含新功能和修复的下一个版本即将到来。

## 3. 项目进展
今日项目在核心功能与用户体验修复上取得显著进展，多个大型 PR 已关闭或待合并：

*   **交互体验重构**: PR #7190 [CLOSED] 引入了出站消息队列，支持用户在 Agent 思考期间进行输入和注入操作，解决了阻塞式交互的痛点。
*   **视觉与界面优化**: PR #7249 [CLOSED] 增强了终端 UI 的主题支持，包括颜色深度回退和预设功能；PR #7360 修复了 Quickstart 弹窗的尺寸计算错误。
*   **生态扩展**: PR #7260 [OPEN] 新增了对 Morph、GitHub Models 等 7 种 OpenAI 兼容提供商的支持，进一步降低了切换模型的门槛。
*   **Web 管理增强**: PR #7229 [OPEN] 正在为 Web Dashboard 添加 MCP、Skills 和 Providers 的管理标签页，旨在减少手动编辑配置文件的需求。
*   **架构优化**: PR #7234 [OPEN] 正在迁移 Gateway 和 Channel 的内存整合逻辑至统一的 `MemoryStrategy`，为后续的高级内存管理功能打下基础。

## 4. 社区热点
*   **Web Dashboard 不可用问题** ([#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)): 本日评论数最高（28条）。用户反馈 Web UI 及桌面端构建提示缺失导致无法使用。该 S1 级问题已关闭，反映出这是近期用户遇到的高频阻碍。
*   **Token 消耗优化提案** ([#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146)): 社区深入讨论了通过 "Skill Compilation" 减少每次请求发送给 LLM 的 Prompt 长度，旨在降低成本，目前已被标记为 `accepted`。
*   **Logo 改进讨论** ([#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710)): 用户提议重新设计 Logo，认为现有形象不够专业，引发了关于项目品牌形象的讨论。
*   **国产 IM 平台接入** ([#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)): 用户强烈需求 Napcat/Onebot（QQ 协议）频道的支持，显示出国内用户群体的活跃。

## 5. Bug 与稳定性
今日修复了多个 S1/S2 级别的严重 Bug，同时也暴露了部分高风险问题：

*   **S0 数据丢失风险 (待修复)**: Issue #4627 报告 `file_write` 工具提示成功但文件在主机文件系统不可见，这是一个严重的数据安全隐患，目前处于 In Progress 状态。
*   **S1 配置失效 (已关闭)**: Issue #5803 指出 Fallback provider chain 忽略配置文件设置，仅从环境变量读取，严重影响多 Provider 容灾部署，现已关闭。
*   **S1 平台认证故障 (待修复)**: Issue #4879 报告 Gemini CLI OAuth 认证失效，Issue #4873 报告飞书集成仅调用 LLM 而非 Agent，影响特定平台用户。
*   **内存管理缺陷 (已关闭)**: Issue #4880 修复了 Daemon 模式下上下文压缩未触发的问题，这对长期运行的 Agent 稳定性至关重要。

## 6. 功能请求与路线图信号
*   **多智能体协作**: Issue #3566 (A2A 协议支持) 与 #2767 (多智能体路由) 均已接受，表明 Zeroclaw 正从单 Agent 工具向多 Agent 协作平台演进。
*   **安全与隔离**: Issue #6293 提出的 Air-gapped 执行模式 RFC 旨在通过 Unix Socket 隔离网络访问，满足企业级安全合规需求。
*   **Webhook 增强**: Issue #6312 及对应 PR #7367 正在解决多实例 Webhook 路由问题，这对于多租户或多账号场景至关重要。

## 7. 用户反馈摘要
*   **部署痛点**: 用户强烈希望能提供全功能的 Docker 镜像 (#3642)，避免因默认禁用某些功能（如 WhatsApp）带来的配置门槛。
*   **上下文管理**: 多个反馈指出在 Channel 模式下，历史记录压缩和 Tool-call 上下文保留机制存在问题 (#4827)，导致长对话体验下降。
*   **日志与调试**: Issue #4721 指出 Zeroclaw 将日志输出到 stdout 而非 stderr，干扰了管道命令的使用，用户希望符合 Unix 标准。

## 8. 待处理积压
*   **#6293 (Air-gapped mode)**: 该 RFC 涉及架构调整，目前处于 `blocked` 状态，需维护者进一步审查。
*   **#4627 (file_write 失败)**: 数据丢失问题尚未解决，建议优先关注。
*   **#7267 (MCP 配置 UI)**: 大型重构 PR，涉及配置系统的底层改动，需要更多测试与审查。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-08)

## 1. 今日速览
Hermes Agent 项目今日维持高热度活跃状态，Issue 与 PR 更新均达到 50 条，显示出社区极高的参与度与维护团队的快速响应能力。尽管今日无新版本发布，但项目正处于密集的功能迭代与缺陷修复阶段，核心关注点集中在 **多智能体通信协议 (A2A)**、**Gateway 稳定性** 以及 **桌面端用户体验优化**。大量待合并 PR (43条) 表明项目正处于下一个重要版本的冲刺期，重点在于解决安全性与性能瓶颈。

## 2. 版本发布
*   **无新版本发布**。考虑到待合并 PR 数量较多且包含安全加固与核心重构，预计项目正在积攒变更以发布包含重要修复的修订版。

## 3. 项目进展
今日共有 7 个 PR 合并/关闭，主要推进了稳定性与多用户支持：

*   **多用户记忆隔离 (Merged):** PR [#40975](https://github.com/NousResearch/hermes-agent/pull/40975) 实现了 Gateway 模式下的持久化记忆按 `user_id` 作用域隔离，解决了多用户环境下记忆混淆的痛点。
*   **QQBot 性能修复 (Merged):** PR [#39430](https://github.com/NousResearch/hermes-agent/pull/39430) 修复了 QQBot 适配器在 WebSocket 重连失败后导致 CPU 空转的严重问题，显著提升了网关稳定性。
*   **依赖安装优化 (Merged):** PR [#39541](https://github.com/NousResearch/hermes-agent/pull/39541) 修复了 Linux 环境下安装 Node.js 依赖时缺少 `xz` 工具的问题，改善了安装体验。
*   **核心问题关闭:** 关键的会话压缩导致消息丢失问题 ([#34089](https://github.com/NousResearch/hermes-agent/issues/34089)) 与 KV 缓存失效问题 ([#13631](https://github.com/NousResearch/hermes-agent/issues/13631)) 已被关闭，标志着核心对话管理机制的鲁棒性得到提升。

## 4. 社区热点
今日讨论热度最高的话题围绕 **智能体互操作性** 展开：

*   **A2A 协议支持 (最热 Issue):** Issue [#514](https://github.com/NousResearch/hermes-agent/issues/514) 讨论热烈（20条评论，18个👍）。社区强烈呼吁支持 Google 的 A2A (Agent-to-Agent) 协议，以解决 "谁可以帮助我" 的跨智能体发现问题，这被视为 Hermes 从单机助手向分布式智能体网络演进的关键信号。
*   **Desktop 启动失败:** Issue [#38963](https://github.com/NousResearch/hermes-agent/issues/38963) 反映了 Desktop 版本在 Windows 11 上的启动障碍，多名用户反馈遇到类似环境问题，亟待排查。
*   **自动化模板系统:** PR [#41309](https://github.com/NousResearch/hermes-agent/pull/41309) 提出的 "Cron Recipes" 功能引发了关注，旨在通过参数化模板简化跨平台自动化任务的配置，降低了用户使用 Cron 的门槛。

## 5. Bug 与稳定性
今日报告了多个影响体验的 Bug，部分已有修复方案：

*   **[P1/已修复] 身份泄露与串扰:** Issue [#10769](https://github.com/NousResearch/hermes-agent/issues/10769) 指出 Cron 任务因全局环境变量导致任务身份串扰，已有相关修复。
*   **[P2/已修复] 会话压缩导致消息丢失:** Issue [#34089](https://github.com/NousResearch/hermes-agent/issues/34089) 指出压缩机制导致 Gateway 路由错误，造成静默丢消息，现已修复。
*   **[P2/待修复] OpenAI 认证循环:** Issue [#6653](https://github.com/NousResearch/hermes-agent/issues/6653) 报告在本地模型与 OpenAI 之间切换时触发重认证死循环，影响多 Profile 用户。
*   **[P2/待修复] Desktop 网络超时:** Issue [#41053](https://github.com/NousResearch/hermes-agent/issues/41053) 反映在企业内网环境下 Skills Hub 挂起问题，需优化网络超时处理。
*   **[P2/待修复] 文件同步速率限制:** Issue [#39945](https://github.com/NousResearch/hermes-agent/issues/39945) 指出 `FileSyncManager` 在同步失败时错误地推进了限速时钟，导致重试机制失效。

## 6. 功能请求与路线图信号
*   **Agent-to-Agent (A2A) 协议:** Issue [#514](https://github.com/NousResearch/hermes-agent/issues/514) 的热度表明，实现 Agent 间通信将是下一阶段的重点方向，可能与现有的 Delegation 工具形成互补。
*   **内存管理增强:** Issue [#32064](https://github.com/NousResearch/hermes-agent/issues/32064) 与 Issue [#35186](https://github.com/NousResearch/hermes-agent/issues/35186) 反映了用户对突破内存字符限制及归档功能的强烈需求，未来版本可能会引入更持久的检索增强记忆机制。
*   **UI/UX 改进:** Issue [#41701](https://github.com/NousResearch/hermes-agent/issues/41701) 和 Issue [#41702](https://github.com/NousResearch/hermes-agent/issues/41702) 提出了在 Desktop 端渲染 YAML 元数据和自动展开附件预览的需求，显示出 Desktop 客户端正朝着更成熟的 IDE 方向演进。

## 7. 用户反馈摘要
*   **痛点：内存限制:** 用户反馈当前的 `MEMORY.md` 字符限制导致频繁删除重要信息，且删除后无法找回，体验较差。
*   **痛点：Desktop 稳定性:** Linux 更新卡死 ([#41737](https://github.com/NousResearch/hermes-agent/issues/41737))、Win11 启动报错以及网络连接状态的误报，暴露了 Desktop 客户端在各平台的兼容性问题。
*   **场景：多智能体协作:** 用户正在构建多角色 AI 团队（如动画制作工作室），迫切需要更完善的跨 Agent 消息通道 ([#25176](https://github.com/NousResearch/hermes-agent/issues/25176))。
*   **满意度:** 社区对代码质量审查反馈积极，外部审查报告 ([#32043](https://github.com/NousResearch/hermes-agent/issues/32043)) 的提交显示了用户对项目代码质量的关注与贡献意愿。

## 8. 待处理积压
*   **安全风险 PR 待合并:** PR [#41754](https://github.com/NousResearch/hermes-agent/pull/41754) 包含了针对 Discord 提及、文件遍历等的安全加固，建议优先合并。
*   **核心架构重构:** Issue [#27028](https://github.com/NousResearch/hermes-agent/issues/27028) 提出的 "God Objects" 解耦重构，虽然难度大，但对长期维护至关重要，需维护者关注。
*   **Profile 隔离缺陷:** Issue [#10376](https://github.com/NousResearch/hermes-agent/issues/10376) 指出的配置文件隔离不彻底问题涉及安全隐私，建议列入近期修复计划。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-08)

## 1. 今日速览
PicoClaw 项目今日活跃度极高，呈现出显著的“清库存、提质量”态势。过去24小时内，Issues 关闭数（17条）远超新开数（4条），积压问题得到集中解决；共有 11 个 PR 被合并，代码产出效率高。项目发布了最新的 Nightly Build 版本，主要整合了新增的 Kagi 搜索支持与多项关键稳定性修复。整体来看，项目处于健康的高速迭代期，核心团队正致力于修复边缘场景下的崩溃问题与提升代码健壮性。

## 2. 版本发布
- **版本号**: `v0.2.9-nightly.20260608.875cf4a2`
- **类型**: Nightly Build (自动化构建)
- **更新说明**:
  - **新增功能**: 集成了原生的 Kagi 网络搜索提供商 ([PR #3037](https://github.com/sipeed/picoclaw/pull/3037))。
  - **稳定性修复**: 修复了多处文件写入时 `Close()` 错误未检查可能导致的数据损坏问题；修复了类型断言未检查可能导致的 Panic；修正了 Anthropic 默认模型 ID 格式错误。
  - **体验优化**: 优化了 Skills 加载逻辑，自动跳过依赖缺失的技能；增加了 Android Termux 运行指南。
- **注意事项**: 该版本为自动构建版本，官方提示可能存在不稳定性，建议测试环境使用。

## 3. 项目进展
今日共有 **11 个 PR** 成功合并，项目在功能扩展与系统稳定性上均取得实质性进展：

- **功能扩展**:
  - **搜索能力增强**: 合并了 [PR #3037](https://github.com/sipeed/picoclaw/pull/3037)，正式支持 Kagi 搜索引擎作为原生 Provider，丰富了 AI 的联网搜索选项。
  - **移动端支持**: 合并了 [PR #2902](https://github.com/sipeed/picoclaw/pull/2902)，添加了 Android Termux 环境下的运行指南，降低了移动端部署门槛。
  - **Skill 系统优化**: 合并了 [PR #2936](https://github.com/sipeed/picoclaw/pull/2936)，现在系统会自动检测并跳过缺少必要二进制依赖的 Skill，避免了运行时报错。

- **稳定性与错误修复**:
  - **关键修复**: 合并了 [PR #2906](https://github.com/sipeed/picoclaw/pull/2906)，修复了消息总线背压处理问题，提升了高并发下的稳定性。
  - **数据安全**: 合并了一系列由 @chengzhichao-xydt 提交的修复 PR（[PR #3033](https://github.com/sipeed/picoclaw/pull/3033), [PR #3035](https://github.com/sipeed/picoclaw/pull/3035)），修复了文件下载/拷贝后未检查 `Close()` 错误的隐患，防止磁盘满或 IO 错误导致的数据静默损坏。
  - **API 兼容**: 合并了 [PR #3036](https://github.com/sipeed/picoclaw/pull/3036)，修复了 Anthropic 默认模型 ID `claude-sonnet-4.6` 在 API 调用时格式错误的问题。

## 4. 社区热点
- **[Issue #2674](https://github.com/sipeed/picoclaw/issues/2674) - Codex OAuth 空响应问题**  
  该问题引起了较多讨论（8条评论，4个点赞）。用户在使用 OpenAI Codex OAuth 后端时遭遇空响应，虽已关闭，但反映了不同后端流式响应处理的兼容性挑战。
- **[Issue #286](https://github.com/sipeed/picoclaw/issues/286) - Android Termux 支持**  
  社区对移动端运行有着明确需求（8条评论），该 Issue 今日已随文档 PR 的合并而关闭，体现了团队对社区反馈的快速响应。
- **[Issue #2952](https://github.com/sipeed/picoclaw/issues/2952) - 版本发布节奏与稳定性反馈**  
  用户反馈“许久未发新版本”及部分命令/模型默认参数问题，该 Issue 已被关闭，且今日发布的 Nightly 版本及多项修复直接回应了这些关切。

## 5. Bug 与稳定性
今日报告并处理了多个严重程度不一的 Bug，主要集中在数据安全与核心逻辑：

- **🔴 高危 (已修复)**: 文件 IO 操作中 `Close()` 错误被忽略，可能导致静默数据损坏。涉及 [PR #3033](https://github.com/sipeed/picoclaw/pull/3033), [PR #3035](https://github.com/sipeed/picoclaw/pull/3035) 等。
- **🟠 中危 (已修复)**: Anthropic API 调用因默认模型 ID 格式错误（使用点号而非连字符）导致 404，已在 [PR #3036](https://github.com/sipeed/picoclaw/pull/3036) 中修复。
- **🟠 中危 (待处理)**:
  - [Issue #3041](https://github.com/sipeed/picoclaw/issues/3041): `mcp add` 命令解析全局 Flag 错误，导致 HTTP/SSE 服务器添加失败。已有 [PR #3048](https://github.com/sipeed/picoclaw/pull/3048) 提出修复，待合并。
  - [Issue #3044](https://github.com/sipeed/picoclaw/issues/3044): Matrix 用户 ID 包含冒号时 `allow_from` 权限验证失败。已有 [PR #3045](https://github.com/sipeed/picoclaw/pull/3045) 提出修复，待合并。
- **🟢 低危**: [Issue #3049](https://github.com/sipeed/picoclaw/issues/3049) Telegram 频道忽略位置消息，目前无日志输出，待确认修复。

## 6. 功能请求与路线图信号
- **新提供商接入**: 用户请求添加 Omniroute 作为 Provider ([Issue #2978](https://github.com/sipeed/picoclaw/issues/2978))，目前尚未得到官方回应，社区可能需要自行贡献代码或等待排期。
- **底层架构演进**: 观察到一系列由核心贡献者提交的已关闭 Issue（如 [Issue #3024](https://github.com/sipeed/picoclaw/issues/3024) 至 [Issue #3029](https://github.com/sipeed/picoclaw/issues/3029)），内容涉及 Exchange 接口、Risk Manager、WebSocket 连接器等。这暗示项目正在构建底层金融/交易级架构支持，可能预示着项目正从单一的 AI 助手向更具鲁棒性的 Agent 框架演进。

## 7. 用户反馈摘要
- **痛点**: 部分用户在使用特定后端（如 Codex OAuth）时仍面临兼容性问题；CLI 参数解析的小瑕疵影响了 MCP 服务器的配置体验。
- **场景**: 用户对在廉价硬件（如 Raspberry Pi, Android）上运行 PicoClaw 需求强烈，对资源占用和依赖管理较为敏感。
- **满意度**: 随着 Android 指南的发布和 Skill 依赖检查的优化，移动端和边缘设备的部署体验将得到显著提升。Nightly 版本的发布也缓解了用户对开发停滞的担忧。

## 8. 待处理积压
- **长期挂起的 PR**: [PR #2904](https://github.com/sipeed/picoclaw/pull/2904)（修复 Agent 循环重载与 Panic 清理）自 5 月 20 日开启至今未合并，涉及核心 Agent 逻辑，建议维护者优先审查，以防稳定性回归。
- **待响应 Issue**: [Issue #2978](https://github.com/sipeed/picoclaw/issues/2978)（Omniroute 支持）开启已有一周，尚无官方回复，建议确认是否在路线图中。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-08)

## 1. 今日速览
NanoClaw 项目今日保持中等活跃度，核心开发重点聚焦于系统健壮性与配置管理优化。过去 24 小时内，项目成功合并/关闭了 3 个 PR，主要解决了账号轮换逻辑与升级路径的安全问题，同时有 5 个功能性 PR 处于待合并状态。Issues 方面新增 2 条活跃记录，其中包含一个潜在的权限管控漏洞，值得维护者关注。整体来看，项目正在积极修补边缘场景下的稳定性问题，并推进容器配置的数据库持久化改造。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 3 个 PR 被关闭（主要为止合并或已处理），显著推进了以下方面：

*   **升级安全性增强**：PR [#2707](https://github.com/nanocoai/nanoclaw/pull/2707) 引入了启动绊网机制，强制要求数据库迁移必须通过正规路径（如 `/setup`），避免了因直接 `git pull` 导致的静默故障，显著提升了升级过程的鲁棒性。
*   **账号轮换逻辑修复**：PR [#2706](https://github.com/nanocoai/nanoclaw/pull/2706) 修复了账号自动轮换中的逻辑缺陷，排除了 Codex/Gemini 模式的误入 Anthropic 轮换队列，并优化了进程清理机制（增加 SIGTERM/SIGKILL 兜底），解决了旧进程残留问题。
*   **文档补充**：PR [#2710](https://github.com/nanocoai/nanoclaw/pull/2710) 补充了 Ollama 提示词缓存的文档说明，帮助用户优化推理路径性能。

目前仍有 5 个 PR 待合并，其中 [#2709](https://github.com/nanocoai/nanoclaw/pull/2709)（容器配置数据库化）与 [#2708](https://github.com/nanocoai/nanoclaw/pull/2708)（孤儿容器清理）具备较高的合并价值，有望进一步提升系统稳定性。

## 4. 社区热点
今日社区关注点集中在权限与文件系统行为异常上：

*   **权限管控漏洞**：Issue [#2711](https://github.com/nanocoai/nanoclaw/issues/2711) 指出 `create_agent` MCP 工具虽然文档标注为“仅限管理员”，但实际未进行角色校验，导致任意容器均可创建代理组。该问题涉及安全边界，需优先确认影响范围。
*   **文件持久化冲突**：Issue [#2312](https://github.com/nanocoai/nanoclaw/issues/2312) 再次活跃，报告 `groups/global/CLAUDE.md` 文件在每次启动时被无条件删除，导致 Git 工作树持续处于脏状态，影响了开发者的使用体验。

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及安全与运行时稳定性：

*   **[高] 权限绕过风险**：Issue [#2711](https://github.com/nanocoai/nanoclaw/issues/2711) 报告 `create_agent` 工具未鉴权，可能导致非授权实体创建代理组。目前尚无关联 Fix PR。
*   **[中] 凭证代理失效**：PR [#2705](https://github.com/nanocoai/nanoclaw/pull/2705) 指出 `use-native-credential-proxy` 在生产环境无法正确绕过网关，导致功能失效。该 PR 已提交修复代码，待审查。
*   **[中] 工作树污染**：Issue [#2312](https://github.com/nanocoai/nanoclaw/issues/2312) 涉及启动时误删 Repo 文件，导致 Git 状态异常。
*   **[低] 重复文本**：PR [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) 尝试修复回合中发送消息时的重复文本问题，目前仍处于 Open 状态。

## 6. 功能请求与路线图信号
*   **配置持久化架构演进**：PR [#2709](https://github.com/nanocoai/nanoclaw/pull/2709) 提议将容器配置（环境变量、blocked_hosts）迁移至数据库存储。这标志着项目正试图摆脱纯文件配置限制，向更动态的配置管理架构演进，可能成为下个版本的重点。
*   **Telegram 深度集成**：PR [#1626](https://github.com/nanocoai/nanoclaw/pull/1626) 持续活跃，提出 Telegram 主题隔离与自动注册功能，显示社区对 IM 平台集成有较强需求。

## 7. 用户反馈摘要
*   **运维痛点**：用户反馈在生产环境部署时，部分 Skill（如 native-credential-proxy）存在预期行为不一致的情况，表明开发环境与生产环境存在配置或权限差异。
*   **代码洁癖**：开发者对于 Repo 中提交的文件被运行时自动删除感到困扰，期望保持工作树整洁。
*   **安全诉求**：用户对“文档声明”与“实际行为”不一致的安全策略（如 admin-only 功能未落地）表示担忧，期望代码层面的严格执行。

## 8. 待处理积压
*   **长期未合并 PR**：PR [#1626](https://github.com/nanocoai/nanoclaw/pull/1626) (Telegram topic isolation) 自 4 月初提交以来更新缓慢，虽为 Feature PR 但长期未决，建议维护者评估其纳入主分支的优先级或给予反馈。
*   **遗留修复**：PR [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) (poll-loop fix) 自 5 月中旬开启，尚待最终合并，建议确认是否存在阻断性问题。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-08)

## 1. 今日速览
IronClaw 项目正处于 "Reborn" 架构重构的关键攻坚期，社区活跃度极高。过去 24 小时内，Issues 活跃度达 50 条，PR 更新 38 条，其中 16 条 PR 已合并/关闭，显示出强劲的开发动力。核心工作集中在 WebUI v2 Beta 的功能补全、Slack 渠道的深度集成以及底层安全架构的加固。虽然未发布新版本，但核心架构拆分与安全边界的定义正在快速推进，项目整体处于从 "功能实现" 向 "生产就绪" 过渡的阶段。

## 2. 版本发布
**无新版本发布**。
*   注：PR #3708 正在进行版本发布准备工作，涉及多个核心 crate（如 `ironclaw_common`, `ironclaw_skills`）的 API 破坏性更新，目前仍处于 Open 状态，预计近期将合并。

## 3. 项目进展
今日共有 **16 个 PR 合并/关闭**，显著推进了 WebUI v2 与 Slack 集成的成熟度，并强化了架构边界。

*   **WebUI v2 功能补全**：
    *   合并 [PR #4532](https://github.com/nearai/ironclaw/pull/4532)：新增 Slack 允许频道选择器，完善了管理后台的 Slack 配置能力。
    *   合并 [PR #4516](https://github.com/nearai/ironclaw/pull/4516)：实现了 WebChat v2 的会话删除功能，补齐了基础交互缺失。
    *   合并 [PR #4530](https://github.com/nearai/ironclaw/pull/4530)：引入结构化的模型可见工具观察值，优化了模型上下文的数据结构。
    *   关闭 [Issue #4116](https://github.com/nearai/ironclaw/issues/4116)：完成了 v1 Google/GitHub/NEAR SSO 到 WebChat v2 的迁移。

*   **架构与安全性优化**：
    *   合并 [PR #4463](https://github.com/nearai/ironclaw/pull/4463)：为 Slack host-beta 接入了持久化存储，解决了重启状态丢失问题。
    *   关闭 [Issue #4488](https://github.com/nearai/ironclaw/issues/4488)：明确了 `ProductWorkflow` 的 submit/read/subscribe 边界，为后续 OpenAI 兼容 API 的接入扫清障碍。

## 4. 社区热点
今日讨论热度最高的内容集中在 "Reborn" 架构的核心设计与工程化落地。

*   **[Issue #3280](https://github.com/nearai/ironclaw/issues/3280) [评论: 7]**：**Reborn 核心架构设计**。讨论如何构建位于 ProductAdapters 和宿主服务之间的 `ProductWorkflow` 和 `InboundTurnService` 门面。这是 Reborn 架构的骨架，决定了后续模块的解耦程度。
*   **[Issue #3036](https://github.com/nearai/ironclaw/issues/3036) [评论: 5]**：**配置即代码**。作为 EPIC 级别的需求，旨在解决当前 `.env`、JSON、运行时标志混合配置导致的运维痛点，提出了租户蓝图的概念。
*   **[Issue #3333](https://github.com/nearai/ironclaw/issues/3333) [评论: 3]**：**生产环境线路铺设**。指出了当前 Reborn 堆栈中仍存在的 fake/in-memory 实现，呼吁补充生产级组件，直接关联到项目的生产就绪度。
*   **[PR #4527](https://github.com/nearai/ironclaw/pull/4527) [Open]**：**用户技能设置 UI**。新增用户级技能管理界面，虽然代码量较大，但对终端用户的自定义能力提升显著。

## 5. Bug 与稳定性
今日报告的问题多属于架构级风险控制和边界情况处理，直接崩溃类 Bug 较少，主要集中在安全性与凭证管理。

*   **P0 安全风险**：
    *   [Issue #3032](https://github.com/nearai/ironclaw/issues/3032) (Open)：指出现有架构存在敏感数据跨越公共/模型可见边界的风险，需增加 "No Exposure Safeguards"，这是 Reborn 切换到生产环境的阻塞项。
    *   [Issue #3609](https://github.com/nearai/ironclaw/issues/3609) (Open)：审批租赁 在 UI 侧可能被过度的衰减值欺骗，存在权限放大风险。

*   **凭证与配置修复**：
    *   [PR #4492](https://github.com/nearai/ironclaw/pull/4492) (Open)：修复了本地开发模式下配置扩展凭证的暂存问题，确保首次能力调用能正确获取 SecretStore 凭证。

## 6. 功能请求与路线图信号
用户与开发者正在通过 Issues 明确下一阶段的迭代方向，主要集中在本地开发体验与 API 兼容性。

*   **本地开发体验优化**：
    *   [Issue #3044](https://github.com/nearai/ironclaw/issues/3044) (Open)：请求简化本地开发运行时配置，目标是通过 `ironclaw dev` 一键启动，免去繁琐的手动配置。
*   **API 兼容性扩展**：
    *   [Issue #3283](https://github.com/nearai/ironclaw/issues/3283) (Open)：计划将 OpenAI 兼容的 Chat 和 Responses API 迁移至 Reborn 工作流，这对于吸引存量 OpenAI 用户至关重要。
    *   [PR #4531](https://github.com/nearai/ironclaw/pull/4531) (Open)：改进技能的渐进式披露机制，区分 "已加载" 与 "可发现" 状态，提升模型对工具的认知效率。

## 7. 用户反馈摘要
从 Issue 描述和 PR Motivation 中提炼出以下核心痛点：

*   **运维复杂度高**：[Issue #3036] 反馈当前配置过于分散（env, json, flags），缺乏 Diff 和审计追踪，急需声明式配置方案。
*   **调试困难**：[Issue #3044] 提及工程师在本地启动 IronClaw 进行编码代理开发时，需要手动配置大量权限和挂载，流程繁琐。
*   **安全性担忧**：多个 Issues (#3032, #3957) 提及第三方 Hook 激活和数据暴露边界的加固需求，表明企业级用户对安全隔离极为敏感。

## 8. 待处理积压
以下关键路径上的 Issue/PR 长期未解决或处于关键节点，建议优先关注：

*   **生产切换阻塞项**：
    *   [Issue #3026](https://github.com/nearai/ironclaw/issues/3026)：缺少配置驱动的生产组合根，这阻碍了 Reborn 成为一个连贯的服务图。
    *   [Issue #3029](https://github.com/nearai/ironclaw/issues/3029)：迁移与兼容性桥梁缺失，可能导致存量数据丢失。
*   **大型依赖更新**：
    *   [PR #4503](https://github.com/nearai/ironclaw/pull/4503)：涉及 38 个依赖项的批量更新，包含 `agent-client-protocol` 等核心库的 API 破坏性变更，需谨慎测试。
*   **版本发布停滞**：
    *   [PR #3708](https://github.com/nearai/ironclaw/pull/3708)：作为版本发布 PR，已创建多日但仍未合并，积压了大量 API Breaking Changes，可能影响下游集成。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-08)

## 1. 今日速览
LobsterAI 项目今日整体呈现出“维护活跃，积压待清理”的态势。过去24小时内，项目成功合并了 2 个重要的修复 PR，主要解决了 OpenClaw 大图传输与配置迁移的数据持久化问题，显示出核心维护者对系统稳定性与用户体验的持续关注。然而，Issues 板块虽有 15 条更新，但其中 14 条为历史遗留 Issue 被 Stale Bot 标记为活跃，仅 1 条为新提交问题。这表明项目当前面临较重的 Bug 积压压力，社区反馈集中在技能管理、IM 通知及会话管理等交互细节上，急需维护团队进行分流处理。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 2 个 PR 成功合并/关闭，主要集中在修复核心功能逻辑与数据迁移问题，进一步提升了系统的健壮性：

*   **[PR #2110](https://github.com/netease-youdao/LobsterAI/pull/2110) 修复 OpenClaw 大尺寸图片负载问题**：针对 OpenClaw 中 `chat.send` 可能产生的超大负载进行了防护，增加了发送前的体积检测逻辑，并将网关返回的 `1009` 错误分类为消息体积错误。此举有效避免了因图片过大导致的网关拒绝或传输失败，优化了多模态交互的稳定性。
*   **[PR #2117](https://github.com/netease-youdao/LobsterAI/pull/2117) 修复配置迁移后模型丢失问题**：解决了 Provider Models 在应用迁移后“死而复生”的问题。新逻辑确保了用户主动删除的模型配置在迁移后依然保持删除状态，通过追踪迁移版本避免了默认模型的重复注入，显著提升了配置管理的准确性。

## 4. 社区热点
今日社区讨论最活跃的话题主要集中在历史遗留问题的重新激化与新出现的严重资源消耗问题上：

*   **[Issue #2121](https://github.com/netease-youdao/LobsterAI/issues/2121) 重复输出导致 Token 浪费**：这是今日唯一的新增 Issue。用户反馈 AI 存在重复输出文本的现象，质疑是否在大量消耗 Token。该问题直接关系到用户成本与核心交互体验，需优先确认是否为前端渲染问题或后端生成逻辑 Bug。
*   **[Issue #1509](https://github.com/netease-youdao/LobsterAI/issues/1509) Skills 生成阻塞与理解偏差**：该 Issue 详细描述了使用 `skill-creator` 时的阻塞问题及与竞品模型的对比差距。作为核心功能点，长时间无中间态反馈严重影响了用户体验，属于高优先级的功能优化诉求。

## 5. Bug 与稳定性
今日报告及活跃的 Bug 主要涉及状态同步、IM 集成及 Token 消耗，按严重程度排序如下：

*   **严重**：
    *   [Issue #2121](https://github.com/netease-youdao/LobsterAI/issues/2121)：重复输出文字导致 Token 潜在浪费，影响核心成本与可用性。（暂无 Fix PR）
    *   [Issue #1516](https://github.com/netease-youdao/LobsterAI/issues/1516)：关闭设置面板导致 GitHub Copilot OAuth 认证成功后 Token 静默丢失，导致用户无法正常使用授权功能。（暂无 Fix PR）
*   **中等**：
    *   [Issue #1500](https://github.com/netease-youdao/LobsterAI/issues/1500)：禁用技能后仍在对话中被调用，`activeSkillIds` 状态未同步，导致功能逻辑错误。
    *   [Issue #1502](https://github.com/netease-youdao/LobsterAI/issues/1502)：Agent 设置保存后需切换会话才生效，状态管理存在缺陷。
    *   [Issue #1506](https://github.com/netease-youdao/LobsterAI/issues/1506)：定时任务 IM 通知因未选会话而静默失败，缺乏必要的表单校验。

## 6. 功能请求与路线图信号
用户对产品“精细化管理”和“数据可视化”的诉求强烈，相关 Feature Request 集中在会话管理维度：

*   **会话组织与检索**：[Issue #1541](https://github.com/netease-youdao/LobsterAI/issues/1541)（标签系统）、[Issue #1525](https://github.com/netease-youdao/LobsterAI/issues/1525)（颜色标注）、[Issue #1537](https://github.com/netease-youdao/LobsterAI/issues/1537)（消息收藏/书签）。随着用户会话量增加，基础的列表模式已无法满足高效检索需求，构建多维度会话管理体系（Tag + Color + Bookmark）已成为社区共识。
*   **数据管理**：[Issue #1528](https://github.com/netease-youdao/LobsterAI/issues/1528) 提出批量导出会话需求，[Issue #1532](https://github.com/netease-youdao/LobsterAI/issues/1532) 提出本地使用统计需求。
*   **判断**：目前无相关 PR 进展，这些功能尚处于需求收集阶段，建议维护者考虑将其纳入 Q3 路线图以提升产品力。

## 7. 用户反馈摘要
*   **痛点：状态同步滞后**：用户多次提及在 UI 操作（如禁用技能、保存设置）后，后台状态未即时反映在前端，需切换页面或重启生效（#1500, #1502），反映出前端状态管理与后端存储的一致性存在断层。
*   **痛点：IM 集成体验粗糙**：在 IM Bot 配置中，用户遇到必填项校验缺失（#1504）、白名单输入框缺失（#1512）等问题，说明非核心平台的 UI 交互细节打磨不足。
*   **满意点**：部分用户开始深入使用 Skills 功能，并对模型理解能力提出了对标 OpenClaw 的更高要求（#1509），显示用户已将 LobsterAI 作为生产力工具进行深度依赖。

## 8. 待处理积压
当前 Stale Bot 激活了 14 个历史 Issue，其中部分问题严重影响了用户体验，长期未解决可能导致用户流失：

*   **[Issue #1509](https://github.com/netease-youdao/LobsterAI/issues/1509)**：Skills 生成无中间态且可能阻塞，严重影响工作流，建议开发者优先介入排查。
*   **[Issue #1512](https://github.com/netease-youdao/LobsterAI/issues/1512)**：QQ Bot 白名单无法配置，导致该平台功能不可用。
*   **[Issue #1518](https://github.com/netease-youdao/LobsterAI/issues/1518)**：CI Labeler 权限错误及 Lint 策略说明补充，虽非业务代码，但影响贡献者体验与代码规范。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-06-08)

## 1. 今日速览
Moltis 项目今日整体活跃度处于**低水位**，开发节奏平稳但略显沉寂。过去 24 小时内无代码合并、新版本发布或 Bug 修复记录，代码库未发生变更。社区侧重点主要集中在移动端用户体验的优化讨论上，唯一活跃的 Issue 聚焦于移动端 Web UI 的交互改进。目前项目稳定性良好，无新增故障报告，建议关注社区功能请求的后续响应。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日无已合并或关闭的 Pull Requests。项目代码库在过去 24 小时内无实质性提交记录，功能迭代与修复工作暂无推进。

## 4. 社区热点
今日社区关注度最高且唯一活跃的议题是 **Issue #1107**。

*   **议题**: [Feature]: Multiline text input in the mobile web UI
*   **链接**: [moltis-org/moltis Issue #1107](https://github.com/moltis-org/moltis/issues/1107)
*   **分析**: 该 Issue 由用户 @IlyaBizyaev 提出，旨在请求在移动端 Web UI 中支持多行文本输入。这反映了用户在移动设备上使用 Moltis 时，对于输入长文本或复杂 Prompt 存在强烈痛点。当前的输入体验可能受限于单行输入框，限制了 AI 助手在移动场景下的生产力发挥。该议题已有 1 条评论更新，表明社区正在对此建议进行初步探讨。

## 5. Bug 与稳定性
过去 24 小时内未收到新的 Bug 报告、崩溃反馈或回归问题。项目当前版本在稳定性方面表现良好，无阻碍性故障。

## 6. 功能请求与路线图信号
今日新增的功能请求明确指向**移动端交互体验优化**：

*   **请求内容**: 移动端 Web UI 多行文本输入支持。
*   **路线图信号**: 随着 AI 智能体在移动场景下的使用频率增加，用户对移动端 Web 端的功能完整度要求正在提高。该功能属于 UX 增强，虽然目前无相关 PR 提交，但属于高价值改进项。若维护者响应积极，预计将在下一版本迭代中提升移动端输入组件的优先级。

## 7. 用户反馈摘要
从 Issue #1107 的讨论中可以提炼出以下用户反馈：
*   **痛点**: 移动端用户在进行长文本输入时体验不佳，现有的单行输入框限制了在手机浏览器上的操作效率。
*   **场景**: 用户倾向于在移动环境下进行复杂的对话或指令输入，而非仅限于简单的短句问答。
*   **诉求**: 希望移动端 Web 体验能向桌面端看齐，提供更专业的文本编辑能力。

## 8. 待处理积压
鉴于今日活跃 Issue 较少，建议维护者优先处理上述移动端体验相关的请求，避免社区反馈积压：
*   **[Issue #1107](https://github.com/moltis-org/moltis/issues/1107)**: 目前状态为 Open，建议维护者尽快确认需求可行性或添加标签，给予用户反馈。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# QwenPaw (CoPaw) 项目动态日报 (2026-06-08)

## 1. 今日速览
今日 QwenPaw 项目保持高活跃度，社区反馈热烈。过去24小时内共有 26 条 Issue 更新与 11 条 PR 更新，显示出项目正处于快速迭代与架构转型的关键期。核心焦点在于 **AgentScope 2.0 迁移计划** 的推进以及针对 v1.1.10 版本的一系列稳定性修复。虽然今日无新版本发布，但针对配置文件损坏导致崩溃的严重 Bug 已有修复 PR 提交，Yuanbao 渠道的多项连接问题也已通过合并 PR 得以解决。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日项目在架构升级与缺陷修复两方面均取得实质性进展：
*   **架构迁移启动**：核心开发者 @rayrayraykk 发起了关于 **[Breaking Change] Migrate backend from AgentScope 1.x to AgentScope 2.0** 的讨论 (#4727)，标志着项目后端将迎来重大重构。配套的插件扩展基础设施 PR (#4997, #4998) 已提交，正在构建统一的插件注册机制。
*   **关键修复合并**：
    *   修复了 Yuanbao 渠道长期存在的连接与流式响应问题，合并了 PR #4982 (修复流式响应丢失) 和 #4983 (修复 connectId 缺失)，显著提升了该渠道的可用性。
    *   针对前端测试覆盖率的提升工作正在稳步推进，相关规划 Issues (#5004-#5007) 已关闭，意味着测试框架搭建阶段已完成，进入执行期。
*   **新增功能推进**：PR #5002 提出了 MCP 服务器工具白名单功能，允许用户在前端细粒度控制工具开关，增强了 Agent 的可控性。

## 4. 社区热点
今日社区讨论主要集中在架构变更与本地模型适配问题上：
*   **[Breaking Change] Migrate backend to AgentScope 2.0** (#4727): 作为今日最受关注的 Issue（👍 2, 评论 6），社区成员正在评估迁移带来的 API 变更风险及向后兼容性，这是项目发展的里程碑事件。
    *   链接: [agentscope-ai/QwenPaw Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)
*   **本地模型无响应问题** (#4989): 多位用户反馈 v1.1.9 及 v1.1.10 版本在使用本地 vLLM 部署的模型时出现“转圈无响应”，引发了关于 OpenAI 协议适配性的讨论，评论数达 2 条。
    *   链接: [agentscope-ai/QwenPaw Issue #4989](https://github.com/agentscope-ai/QwenPaw/issues/4989)

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，按严重程度排序如下：

*   **P0 - 致命崩溃 (已有 Fix PR)**:
    *   **配置文件损坏导致 Agent 会话崩溃** (#4970): `loop_config.json` 或 `prd.json` 损坏会直接导致 Agent 无法启动。
    *   **Fix PR**: [#5000](https://github.com/agentscope-ai/QwenPaw/pull/5000) 已提交，引入了安全的 JSON 加载机制。
*   **P1 - 严重功能缺陷**:
    *   **本地模型无响应** (#4989): 升级到 1.1.9+ 后，本地 vLLM 模型连接成功但无法对话。暂无关联 PR。
    *   **企业微信渠道工具调用失败** (#4990): 关闭工具信息返回报错“无法回答”。
    *   **Coding Mode 会话切换失败** (#4987): v1.1.10 中 Coding 模式下无法切换会话。
*   **P2 - 一般功能问题**:
    *   **Yuanbao 渠道连接问题** (#4976, #4977, #4978, #4979): 包括 proto 文件缺失、protobuf 兼容性、connectId 缺失等。相关修复 PR (#4982, #4983) **已合并**。
    *   **Windows 路径超限** (#4988): Session 文件名重复拼接导致路径过长。
    *   **图片预览抖动** (#4993): 前端图片放大拖拽时严重抖动。

## 6. 功能请求与路线图信号
用户对 QwenPaw 的智能化与集成能力提出了更高要求：
*   **视觉模型 Fallback 机制** (#4992): 用户希望在不支持多模态的主模型（如 deepseek-v4）中接入独立的视觉模型进行“图片转文字”中转。这是一个高价值的功能请求，能极大扩展模型选择的灵活性。
    *   链接: [agentscope-ai/QwenPaw Issue #4992](https://github.com/agentscope-ai/QwenPaw/issues/4992)
*   **记忆系统自进化** (#4994): 用户呼吁引入分层记忆系统框架，提升 Agent 的长期记忆能力。
*   **Shell 执行实时反馈** (#4986): 建议在执行命令或写文件时增加动态加载动画或日志输出，解决用户对“卡死”的误解。
*   **MCP 工具白名单** (PR #5002): 正在开发的 PR 允许用户按需开关 MCP 服务器提供的工具，提升了精细化管理能力。

## 7. 用户反馈摘要
*   **企业微信集成痛点明显**: Issues #4585 和 #4990 反映了企业微信渠道中插件发现机制不生效及工具调用返回异常的问题，企业级用户对此类 Bug 的容忍度较低。
*   **本地模型兼容性倒退**: 用户反馈在旧版本 v1.1.5 中正常的本地 vLLM 模型，在新版本中失效，提示项目在发布新版本时对非官方模型 API 的回归测试可能不足。
*   **交互细节需打磨**: 针对 Shell 执行无反馈、审批命令不换行 (#4985)、图片预览抖动等问题，表明前端交互体验仍有优化空间。

## 8. 待处理积压
*   **Issue #4585 - 企业微信插件发现失效**: 该问题自 2026-05-21 创建至今未解决，今日再次活跃。用户指出桌面端可用但企业微信端不可用，建议开发团队优先排查 Channel 层的消息解析或上下文注入逻辑。
    *   链接: [agentscope-ai/QwenPaw Issue #4585](https://github.com/agentscope-ai/QwenPaw/issues/4585)
*   **Issue #4989 - 本地模型无响应**: 作为新引入的严重回归问题，尚未有官方回复或修复 PR，需立即关注。
    *   链接: [agentscope-ai/QwenPaw Issue #4989](https://github.com/agentscope-ai/QwenPaw/issues/4989)

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