# OpenClaw 生态日报 2026-03-18

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-18 02:31 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
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

根据您提供的 OpenClaw (github.com/openclaw/openclaw) 2026-03-18 的 GitHub 数据，以下是今日的项目动态日报。

---

# 📊 OpenClaw 项目动态日报 (2026-03-18)

## 1. 今日速览
OpenClaw 今日保持**极高的社区活跃度**，共处理了 **500 条 Issues 更新**（其中 448 条为活跃/新增）和 **500 条 PR 更新**（其中 278 条待合并）。社区讨论焦点集中在 **v2026.3.x 版本引入的回归问题**（特别是文件系统操作和网关连接稳定性）以及 **多模态视觉能力的支持**。尽管没有发布新版本，但维护者和社区贡献者提交了大量修复 PR，主要集中在解决网关崩溃、文件读写 0 字节错误以及 WebUI 的性能优化上。

## 2. 版本发布
**无**。今日未检测到新的官方 Release 版本发布。

## 3. 项目进展
今日共有 **222 条 PR 更新**（包含合并/关闭），主要进展集中在稳定性修复和架构优化：

*   **🌐 网关与核心稳定性**：
    *   [PR #49366](https://github.com/openclaw/openclaw/pull/49366): 修复了 `gateway install` 可能会将密钥持久化到服务元数据中的安全隐患，确保密钥仅保留在运行时。
    *   [PR #49229](https://github.com/openclaw/openclaw/pull/49229): 为 Cron 处理程序添加了 try-catch 包装，防止文件系统异常导致整个网关崩溃。
    *   [PR #41597](https://github.com/openclaw/openclaw/pull/41597): 实现了网关重启期间的消息排队机制，旨在消除重启时的静默消息丢失。
*   **🖥️ WebUI 与用户体验**：
    *   [PR #49358](https://github.com/openclaw/openclaw/pull/49358): 为 WebChat 添加了 Mermaid 图表渲染支持，增强可视化能力。
    *   [PR #49359](https://github.com/openclaw/openclaw/pull/49359): 实现了基于游标的聊天记录分页，修复了历史记录过长导致 UI 冻结的问题。
*   **🤖 模型与 Agent 支持**：
    *   [PR #48762](https://github.com/openclaw/openclaw/pull/48762): 新增 DeepSeek 作为内置提供商，简化国内用户的配置流程。
    *   [PR #48231](https://github.com/openclaw/openclaw/pull/48231): 为插件子代理添加了结构化输出支持。

## 4. 社区热点
今日讨论最热烈的话题反映了用户对**跨平台支持**和**即时通讯集成**的强烈需求：

1.  **[Issue #75](https://github.com/openclaw/openclaw/issues/75) [热度: 👍63 | 评论: 41]**
    *   **主题**：请求 Linux 和 Windows 原生 Clawdbot 应用程序。
    *   **分析**：这是目前点赞数最高的 Issue。目前已有 macOS/iOS/Android 客户端，桌面端（Win/Linux）的缺失阻碍了用户在服务器或桌面环境下的轻量级部署，用户期待与 macOS 版相似的功能集。
2.  **[Issue #13991](https://github.com/openclaw/openclaw/issues/13991) [热度: 评论: 18]**
    *   **主题**：Agent 记忆系统的层级关联记忆提案。
    *   **分析**：作者宣布该提案已在分支 `[TinkerClaw](https://github.com/globalcaos/tinkerclaw)` 中投入生产，引入了类似人类的认知记忆堆栈。这显示了社区在增强 Agent 长期记忆能力方面的积极探索。
3.  **[Issue #45289](https://github.com/openclaw/openclaw/issues/45289) & [Issue #28744](https://github.com/openclaw/openclaw/issues/28744) [热度: 评论: 19]**
    *   **主题**：Telegram 反应通知失效 & 支持飞书/Agent 接收图片（视觉能力）。
    *   **分析**：用户迫切希望 OpenClaw 能成为全双工的多模态 Agent，不仅限于文本，还需支持图片理解（Issue #28744）和更细粒度的社交互动（Telegram Reactions）。

## 5. Bug 与稳定性
今日报告了大量严重的**回归 Bug**，主要集中在 v2026.3.8 至 v2026.3.13 版本：

*   **🔥 严重 (P0) - 数据丢失/系统不可用**：
    *   **[Issue #43858](https://github.com/openclaw/openclaw/issues/43858) [回归]**: Edit 工具静默地将文件擦除为 0 字节，同时报告成功。这是一个极危险的数据损坏 Bug。
        *   *相关修复*: [PR #44122](https://github.com/openclaw/openclaw/issues/44122) 指出这与沙箱 FS Bridge 的安全加固有关。
    *   **[Issue #45772](https://github.com/openclaw/openclaw/issues/45772) [回归]**: 网关心跳定时器在触发 1-2 次后停止工作，导致连接断开。
*   **⚡ 高优先级 (P1) - 连接与认证**：
    *   **[Issue #30177](https://github.com/openclaw/openclaw/issues/30177)** / **[Issue #46659](https://github.com/openclaw/openclaw/issues/46659)**: WhatsApp 发送消息时报错 "No active WhatsApp Web listener"，但 React 操作正常。疑似存在重复的监听器模块。
    *   **[Issue #44714](https://github.com/openclaw/openclaw/issues/44714)**: 升级后 `openclaw logs --follow` 握手超时。
    *   **[Issue #43561](https://github.com/openclaw/openclaw/issues/43561)**: `trusted-proxy` 模式在 Nginx 下失效，导致生产环境多节点部署无法认证。
*   **🛠️ 中等优先级 (P2)**：
    *   **[Issue #49191](https://github.com/openclaw/openclaw/issues/49191)**: Google Vertex ADC 认证将占位符 `<authenticated>` 误作为 API 密钥发送。

## 6. 功能请求与路线图信号
结合 Issues 和 PRs，可以看到项目正朝以下方向演进：

*   **视觉与多模态**：[Issue #28744](https://github.com/openclaw/openclaw/issues/28744) 强烈请求 Agent 能够接收并识别图片（支持 MiniMax-Vision 等模型）。虽然目前尚未合并，但这符合 AI Agent 进化的重要趋势。
*   **企业级部署**：[PR #48788](https://github.com/openclaw/openclaw/pull/48788) 提议建立集中的文件名编码工具，解决 Feishu 等多语言环境下的文件名乱码问题；[PR #49356](https://github.com/openclaw/openclaw/pull/49356) 引入了 `operon-guard` 技能信任验证，关注运行时安全和 PII 泄露防护。
*   **生态集成**：[PR #48762](https://github.com/openclaw/openclaw/pull/48762) 添加 DeepSeek 支持，表明项目正在快速适配主流的高性价比/开源模型。

## 7. 用户反馈摘要
从评论中提炼出的用户痛点如下：
*   **痛点**：近期版本（v2026.3.x）**稳定性明显下降**。许多用户反馈升级后出现了文件写入失败、网关断连和 API 调用失败（如 Mistral 422 错误 #45227）。
*   **痛点**：**Windows/Linux 支持滞后**。Issue #75 的高赞反映了开发者/运维人员希望在服务器环境（无头模式）之外有更原生的桌面体验。
*   **场景**：用户广泛将 OpenClaw 用于 **Telegram/Discord 机器人** 和 **个人自动化助理**，对消息同步的可靠性（如 WhatsApp 的监听器问题）非常敏感。

## 8. 待处理积压
以下重要 Issue 长期未解决或近期活跃但尚无明确修复，建议维护者优先关注：

*   **[Issue #75](https://github.com/openclaw/openclaw/issues/75)**: Linux/Windows 客户端需求（长期高热度）。
*   **[Issue #10841](https://github.com/openclaw/openclaw/issues/10841)**: Agent 设置提醒时间不准确，因为 Agent 无法确知当前时间。
*   **[Issue #11890](https://github.com/openclaw/openclaw/issues/11890)**: WebChat UI 在长会话中冻结，需等待 [PR #49359](https://github.com/openclaw/openclaw/pull/49359) 合并。
*   **[Issue #31708](https://github.com/openclaw/openclaw/issues/31708)**: API 成本因缓存失效而飙升 5 倍，这是一个影响生产成本的关键性能问题。

---

## 横向生态对比

# 📊 开源 AI 智能体生态横向对比分析报告 (2026-03-18)

**分析师**：AI OpenSource Analyst
**报告期**：2026-03-18

---

### 1. 生态全景
2026年3月的开源 AI 智能体生态呈现出**从“单一对话”向“全双工多模态 Agent”跨越**的显著特征。
1.  **全渠道普及**：主流项目均已支持 Telegram/Discord/飞书/企业微信等即时通讯工具，AI 正在变身为随时待命的"数字员工"。
2.  **记忆与认知升级**：单纯的 RAG 已无法满足需求，层级记忆、知识图谱和自我进化技能成为新的竞争高地。
3.  **稳定与混乱并存**：快速迭代引发了普遍的"回归病"，文件系统损坏和网关断连是目前的最大痛点。

---

### 2. 各项目活跃度对比

| 项目名称 | 核心定位 | Issues 更新 | PRs 更新 | 今日发布 | 健康度/状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 生态核心参照 | 500 (高) | 500 (高) | 无 | 🟡 **高活跃/震荡期** (回归 Bug 多，社区热度极高) |
| **ZeroClaw** | 高产出的多渠道适配器 | 35 | 50 | **9 个版本** | 🟠 **极速迭代/不稳定** (构建故障，架构迁移中) |
| **CoPaw** | 企业级多 Agent 平台 | 50 | 50 | v0.1.0-beta.2 | 🟡 **Beta 阶段** (功能强但启动受阻，Win 兼容性差) |
| **IronClaw** | 安全与自动化侧重 | 50 | 50 | **v0.19.0** | 🔴 **升级受阻** (DB 迁移严重 Bug，阻断了发布) |
| **PicoClaw** | 边缘端/轻量化 | - | 79 | **v0.2.3** | 🟢 **稳定上升** (架构优化，但 Gateway 有坑) |
| **LobsterAI** | 网易系 IM 深度集成 | - | 25 | v2026.3.17 | 🟢 **快速修复** (解决 API Key 丢失，配置迁移差) |
| **NanoClaw** | 容器化通用平台 | 33 | 87 | 无 | 🟡 **积压严重** (37 个 PR 待合并，审查滞后) |
| **NullClaw** | 安全加固与运维 | - | 25 | v2026.3.17 | 🟢 **健康** (OpenRC 支持，响应迅速) |
| **NanoBot** | 可观测性与调试 | 33 | 87 | 无 | 🟢 **架构演进** (引入 AgentScope，关注 Debug) |
| **TinyClaw** | 实时协作/扁平化 | - | 3 | 无 | 🔴 **高风险** (CLI 破坏性 Bug，数据丢失) |
| **EasyClaw** | 桌面端易用性 | 低 | 1 | v1.7.0 | 🔴 **严重故障** (Win 版无法连接) |
| **ZeptoClaw** | 容器安全/标准 | 6 | 15 | 无 | 🟢 **稳步推进** (依赖更新，安全架构设计) |
| **Moltis** | 模型兼容/安全 | 低 | 2 | 无 | 🟢 **平稳** (关注 MiniMax 修复) |

---

### 3. OpenClaw 在生态中的定位

**定位：行业标准制定者与生态核心**
OpenClaw 依然是该领域流量最大、讨论最激烈的项目，其定位类似于云原生中的 Kubernetes。

*   **优势**：
    *   **生态集成度最高**：率先支持 DeepSeek、MiniMax 等国产模型，且拥有最完善的插件体系。
    *   **社区规模效应**：Issue #75 (Linux/Win 客户端) 的热度（63 赞）远超其他项目，是用户刚需的风向标。
*   **技术路线差异**：
    *   相比 ZeroClaw 的"激进多渠道"和 NanoBot 的"可观测性"，OpenClaw 更侧重于**网关的稳定性与文件系统的安全性**。
    *   然而，今日暴露的 v2026.3.x 回归问题（文件 0 字节、网关崩溃）显示其**主干代码质量正面临快速迭代的严峻挑战**。
*   **对比小结**：OpenClaw 是最全能的选择，但目前也是最"危险"的选择（稳定性风险），适合愿意参与社区排错的高级用户。

---

### 4. 共同关注的技术方向

1.  **记忆系统的层级化**
    *   **涉及项目**：OpenClaw, NanoBot, CoPaw
    *   **诉求**：简单的向量库 RAG 已不够。OpenClaw 的 Issue #13991 和 NanoBot 引入的 Honcho 集成表明，社区正在探索类似人类认知的"短期/长期/联想"记忆堆栈。

2.  **模型原生的多模态与搜索**
    *   **涉及项目**：PicoClaw, IronClaw, LobsterAI
    *   **诉求**：PicoClaw PR #1618 和 IronClaw Issue #1307 均指出，客户端模拟搜索已过时，用户迫切需要直接调用模型原生的 Web Search 和 Vision 能力。

3.  **企业级即时通讯集成**
    *   **涉及项目**：LobsterAI, CoPaw, ZeroClaw
    *   **诉求**：飞书、企业微信、钉钉 的深度集成是 B 端用户的刚需。LobsterAI 正在将底层重构为 OpenClaw 插件以适配这些协议。

4.  **容器化与运维自主权**
    *   **涉及项目**：NanoClaw, NullClaw, ZeptoClaw
    *   **诉求**：Rootless Podman 支持、OpenRC 支持、凭证与配置分离，显示出高级用户对"安全隔离"和"不被云服务锁定"的强烈执念。

---

### 5. 差异化定位分析

*   **架构哲学：Monolith vs Microservices**
    *   **PicoClaw** 和 **EasyClaw** 倾向于提供一体化的二进制文件，强调边缘部署和桌面体验。
    *   **NanoClaw** 和 **ZeptoClaw** 则坚定走容器化路线，将 Agent 视为云原生 workload，强调隔离与安全。

*   **目标用户：开发者 vs 终端用户**
    *   **NanoBot** 明确服务于开发者，提供 AgentScope 追踪和 TUI，方便调试 Agent 逻辑。
    *   **LobsterAI** 和 **ZeroClaw** 瞄准企业场景，大量 PR 集中在 IM 渠道的适配。
    *   **TinyClaw** 尝试探索实时协作场景。

---

### 6. 社区热度与成熟度

*   **🔴 高风险/快速迭代区**
    *   **TinyClaw, EasyClaw**：存在严重的数据丢失或连接 Bug，处于不可用状态。
    *   **IronClaw, CoPaw**：发布了新版本但存在严重的升级阻塞，处于"发布-修复"的焦灼期。

*   **🟡 活跃开发/功能爆发区**
    *   **ZeroClaw**：功能极多，但构建质量堪忧，适合极客尝鲜，不适合生产。
    *   **OpenClaw**：讨论热度最高，核心功能最全，但受困于稳定性回归。

*   **🟢 稳健/成熟区**
    *   **NullClaw, ZeptoClaw, Moltis**：虽然声量不如 OpenClaw 大，但在安全性、特定模型兼容性或容器标准方面走得非常扎实，适合注重稳定性的企业内部部署。

---

### 7. 值得关注的趋势信号

1.  **"Vibe Coding" 的终结，"Observability" 的崛起**
    *   随着任务变复杂，Agent "胡言乱语" 或陷入死循环难以排查。**NanoBot** 引入 AgentScope 和 **NanoClaw** 的 Web UI 追踪 PR 显示，**可观测性** 将是继 Memory 之后的下一个必争之地。

2.  **外部 API 收费带来的"去服务化"趋势**
    *   IronClaw 遭遇 Brave Search 收费导致功能失效，这给依赖第三方 SaaS API 的 Agent 项目敲响了警钟。未来的趋势将是 **本地化工具** 或 **模型原生工具** 的回归，减少外部依赖。

3.  **安全边界的重新审视**
    *   从 OpenClaw 的密钥持久化修复，到 ZeptoClaw 的网络出口策略，再到 NanoClaw 的沙箱讨论。社区正在意识到：**给 Agent 自主权不等于给 Root 权限**。细粒度的权限控制（如 TOTP 门控、受限 Shell）将成为标配。

**给开发者的建议**：
*   **生产环境**：目前不建议直接跟进 OpenClaw/IronClaw 的最新版，建议停留在稳定版或选择 NullClaw/ZeptoClaw 等更注重安全的分支。
*   **技术选型**：如果需要深度 IM 集成，关注 LobsterAI；如果需要边缘计算，关注 PicoClaw；如果关注底层架构，OpenClaw 依然是最佳参考对象，但需注意规避近期的回归问题。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 **NanoBot** 项目 2026-03-18 动态日报。

---

# 📊 NanoBot 项目动态日报 (2026-03-18)

> 数据来源：GitHub Repository `HKUDS/nanobot`
> 分析师：AI OpenSource Analyst

### 1. 🚀 今日速览
NanoBot 今日保持了**极高的活跃度**，社区交互与代码提交量均处于高位。过去24小时内共有 **33 条 Issue 更新**（含 25 条新增）和 **87 条 PR 更新**，显示出项目正处于快速迭代与功能扩展期。

今日的核心动态集中在 **可观测性**、**多渠道适配** 以及 **架构解耦**。社区贡献者提交了集成 AgentScope 和 Honcho 的 PR，显著增强了 Agent 的调试能力与长期记忆功能。同时，关于“任务执行中用户消息入列”的架构讨论（Issue #2133）揭示了当前版本在长任务实时交互上的痛点，是未来优化的关键点。

### 2. 📦 版本发布
*   **无新版本发布**。
    *   *注*：虽然无正式 Release，但 PR 活动显示核心代码库正在为下一版本积累大量 Feature（如 TUI、MiMo 支持、Onboard 优化），预计近期会有较大版本更新。

### 3. 🔩 项目进展
今日共有 **41 条 PR 合并/关闭**，主要集中在功能增强与问题修复，项目整体向前迈进了坚实的一步。

*   **可观测性与调试 (Observability)**:
    *   [PR #2187](https://github.com/HKUDS/nanobot/pull/2187): 新增 **AgentScope** 集成，提供全链路执行追踪，这对调试复杂的 Agent 行为至关重要。
    *   [PR #2183](https://github.com/HKUDS/nanobot/pull/2183): 引入 **Honcho** 集成，为 Agent 提供可选的长期记忆支持，解决了大模型“健忘”的顽疾。
*   **用户体验 (UX)**:
    *   [PR #2179](https://github.com/HKUDS/nanobot/pull/2179): 新增 `/model` 和 `/models` 命令，支持运行时动态切换模型，极大提升了测试与使用灵活性。
    *   [PR #2155](https://github.com/HKUDS/nanobot/pull/2155): 添加了终端交互界面 (**TUI**)，让本地运行更加直观。
*   **渠道扩展**:
    *   [PR #2173](https://github.com/HKUDS/nanobot/pull/2173): 支持 **企业微信** 应用渠道。
    *   [PR #2181](https://github.com/HKUDS/nanobot/pull/2181): 新增 **小米 MiMo** 模型提供商支持。

### 4. 🔥 社区热点
今日讨论最激烈的话题集中在 Agent 的交互逻辑与配置体验上：

*   **[#2133 [OPEN] 关于在任务执行期间用户消息入列的一些想法](https://github.com/HKUDS/nanobot/issues/2133)**
    *   **热度**: 13 评论
    *   **核心诉求**: 这是一个关于核心架构的深层讨论。当前 NanoBot 仅在 Agent Loop 结束后处理用户消息。用户 @PaomianPomix 指出，在长任务中（如需要人工审批），Agent 无法实时响应用户的新指令（除非强制 `/stop`）。
    *   **分析**: 这反映了从“单轮对话”向“复杂任务流”演进时的架构瓶颈。社区正在探讨是通过“协议层约定”（Agent 主动 yield）还是“底层中断机制”来解决。
*   **[#1988 [CLOSED] wecom Channel doesn't work](https://github.com/HKUDS/nanobot/issues/1988)**
    *   **热度**: 12 评论
    *   **核心诉求**: 企业微信通道的配置问题。虽有 PR 试图修复，但配置复杂度仍是用户的拦路虎。
*   **[#660 [OPEN] Project claims to be 'ultra-lightweight' but includes bloated Node.js dependency](https://github.com/HKUDS/nanobot/issues/660)**
    *   **热度**: 8 评论, 4 👍
    *   **核心诉求**: 用户质疑项目依赖 Node.js 环境与其标榜的“超轻量级”不符。这涉及到项目对特定工具链（可能用于前端或网关）的依赖取舍，属于项目定位层面的争议。

### 5. 🐛 Bug 与稳定性
今日报告了若干影响使用的功能性 Bug，需引起注意：

*   **严重 - 语音功能回归**:
    *   [Issue #2141](https://github.com/HKUDS/nanobot/issues/2141): 升级到 v0.1.4.post5 后，Telegram 语音转录功能失效。系统错误提示缺少 `summarize skill`。
*   **中等 - 模型兼容性**:
    *   [Issue #2185](https://github.com/HKUDS/nanobot/issues/2185): 升级导致 `gemini-3-flash-preview` 模型无法使用，疑似 Provider 解析逻辑变更导致。
    *   [Issue #608](https://github.com/HKUDS/nanobot/issues/608): 版本号显示不一致（`__init__.py` vs `pyproject.toml`），虽然不影响运行，但干扰调试。
*   **环境限制**:
    *   [Issue #2145](https://github.com/HKUDS/nanobot/issues/2145): 在内网隔离环境下，LiteLLM 和 tiktoken 尝试访问外网导致启动超时。

### 6. 🛣️ 功能请求与路线图信号
从今日的 Issues 和 PRs 中，可以捕捉到明确的演进信号：

1.  **企业级特性增强**:
    *   多租户数据隔离 ([#2102](https://github.com/HKUDS/nanobot/issues/2102)) 和 企业微信支持 ([PR #2173](https://github.com/HKUDS/nanobot/pull/2173)) 表明 NanoBot 正在向企业级应用场景发力。
2.  **可观测性标准化**:
    *   Trace ID 需求 ([#2158](https://github.com/HKUDS/nanobot/issues/2158)) 和 AgentScope 集成 ([PR #2187](https://github.com/HKUDS/nanobot/pull/2187)) 显示项目组正在重视生产环境下的 Debug 体验。
3.  **配置体验优化**:
    *   [Issue #2163](https://github.com/HKUDS/nanobot/issues/2163) 请求配置迁移工具，[PR #2171](https://github.com/HKUDS/nanobot/pull/2171) 尝试解决配置覆盖问题，这表明当前的 JSON 手动配置模式已无法满足快速迭代的需求。

### 7. 💬 用户反馈摘要
*   **痛点 - 配置门槛高**: 多个 Issue 反馈配置复杂（如 wecom, config.json 路径问题），用户渴望像 [Issue #2018](https://github.com/HKUDS/nanobot/issues/2018) 提到的交互式向导那样的“开箱即用”体验。
*   **痛点 - 记忆与上下文**: 飞书/微信用户反馈 Session 文件过大导致上下文撑爆 ([#2062](https://github.com/HKUDS/nanobot/issues/2062))，目前只能手动删除文件，缺乏自动化的 Session 管理机制。
*   **满意点**: 资源消耗低受到肯定（[PR #2155](https://github.com/HKUDS/nanobot/pull/2155) 作者提到相比 OpenClaw 资源占用极小），证明核心轻量化架构具有吸引力。

### 8. 📥 待处理积压
以下重要 Issue 长期未得到彻底解决或处于待定状态，建议维护者关注：

*   **[Issue #660] 轻量级定义争议**: 涉及核心依赖架构，需要官方明确立场（是否移除 Node.js 依赖）。
*   **[Issue #405] SearXNG 集成**: 用户对隐私友好的搜索引擎集成需求较高，属于高价值 Feature。
*   **[Issue #1708] Workspace 模式下的路径解析**: 这是一个安全相关的 Bug，限制了在沙箱环境下的使用，建议优先修复。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

以下是 ZeroClaw 项目 2026-03-18 的动态日报：

---

# 📊 ZeroClaw 项目日报 (2026-03-18)

## 1. 今日速览
ZeroClaw 项目今日呈现出**极高的开发活跃度**与**旺盛的社区需求**。过去 24 小时内，项目发布了 **9 个新版本**（从 v0.4.3-beta.314 到 v0.5.0-beta.346），显示出团队正在高频迭代，重点攻克 CLI 工具链与多渠道适配器。社区互动方面，Issue 更新达 **35 条**，PR 更新达 **50 条**，其中近一半 PR 已被合并。然而，频繁的版本更新也伴随着 ARM64 架构兼容性和 Docker 构建质量的争议，部分用户遭遇了二进制文件不可用的问题，需引起关注。

## 2. 版本发布
今日连续发布了 v0.5.0-beta 及 v0.4.3-beta 系列的多个补丁版本，核心更新集中在生态扩展与运维体验：

*   **核心新功能:**
    *   **多渠道适配器:** 新增 Reddit, Bluesky, Mastodon, ntfy, Gotify, LinkedIn, WhatsApp 语音及通用 Webhook 支持。
    *   **知识图谱:** 引入知识图谱功能，用于捕获和重用专业知识 (`knowledge: add knowledge graph`)。
    *   **CLI 增强:** 增加 `self-test`（自检）和 `update`（自动更新）命令，支持回滚机制；支持 `status --format=exit-code` 以适配 Docker 健康检查。
    *   **Google Workspace:** 集成 GWS 工具。

*   **破坏性变更/迁移注意:**
    *   **分支切换:** 项目主分支似乎已从 `main` 迁移至 `master`，导致部分功能（如安全参数、Copilot 提供商、task_plan 工具）在合并过程中丢失 (详见 Issue #3818)。
    *   **Docker 构建变更:** CI 流程调整为使用预编译二进制文件 (`ci: use pre-built binaries`)，以解决超时问题，但这可能导致了 ARM64 平台的兼容性故障 (详见 Issue #3687, #3714)。

## 3. 项目进展
今日共有 **27 个 PR 被合并/关闭**，项目在运维工具、Web 界面和架构扩展方面取得了实质性进展：

*   **CLI 与运维 (里程碑):** PR #3821 合并引入了 `self-test` 和 `update` 命令，标志着 ZeroClaw 正在向生产级自运维能力迈进。
*   **Docker 优化:** PR #3814 修复了 Debian 镜像构建超时问题，改用预编译二进制；PR #3820 增加了 Web 构建阶段和健康检查。
*   **Web 端体验:** PR #3833 修复了 Web Dashboard 显示配对码的问题，PR #3822 引入了设备管理配对面板。
*   **架构扩展:** PR #3827 合并了基于 Extism 的 WASM 插件系统，为未来的功能扩展提供了强有力的支持。

## 4. 社区热点
*   **🔥 安全策略过于严格 (Issue #1478):**
    该 Issue 获得了 **40 条评论**。用户抱怨 ZeroClaw 默认安全策略导致 Agent 拒绝执行安装依赖等基本操作，变成了单纯的“聊天机器人”。用户呼吁提供更灵活的“上帝模式”配置以供个人/玩具项目使用。这反映了高级用户对自主权与安全限制之间平衡的强烈诉求。
    *链接:* [zeroclaw-labs/zeroclaw Issue #1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)

*   **🔥 ARM64 架构崩溃与 Docker 镜像损坏 (Issue #3537 & #3687):**
    多名用户报告在树莓派 4 和 DGX Spark (ARM64) 上 Docker 容器启动即退出。Issue #3687 指出最新镜像中的二进制文件仅 292KB（正常约 9MB），显然是一个占位符或构建错误。此问题严重影响了 ARM 用户的部署。
    *链接:* [Issue #3537](https://github.com/zeroclaw-labs/zeroclaw/issues/3537) | [Issue #3687](https://github.com/zeroclaw-labs/zeroclaw/issues/3687)

## 5. Bug 与稳定性
*   **[S0/S1] ARM64 运行时崩溃:** Docker 容器在 ARM64 设备上静默退出 (Issue #3714, #3537)。目前已有相关修复 PR #3814 尝试解决构建问题，但用户反馈仍需验证。
*   **[S1] MCP 工具加载失效:** 在守护进程模式下，延迟加载的 MCP 工具无法被激活调用 (Issue #3826)。
*   **[S1] Web Dashboard 不可用:** 用户启动 Daemon 后无法访问 Web UI，需手动构建 (Issue #3580，通过 PR #3820 优化构建流程缓解)。
*   **[S2] Telegram 图片传输失败:** 从 Telegram 接收图片时报错 `provider_capability_error` (Issue #3802)。
*   **[S2] GLIBC 版本不匹配:** Dockerfile.debian 在构建和运行阶段存在 GLIBC 版本冲突 (Issue #3783)。

## 6. 功能请求与路线图信号
*   **自主技能生成 (Issue #3825):** 用户希望 Agent 能在成功执行多步任务后自动生成可复用的 Skill 文件。这表明用户对 Agent 的自我进化能力有高期待。
*   **跨渠道 TOTP 安全门控 (Issue #3767):** 建议将 TOTP 验证扩展到 Telegram/Discord 等所有渠道，用于保护敏感 Shell 指令的执行。
*   **配置热重载 (PR #3571):** 正在进行的 PR 试图引入 `zeroclaw config reload` 功能，这回应了社区对无需重启即可更新配置的强烈需求。

## 7. 用户反馈摘要
*   **痛点:** 用户对“安全过度”导致功能受限感到非常沮丧 (#1478)；频繁的版本更新和构建故障导致部署体验不稳定 (#3687)。
*   **场景:** 用户正在尝试将 ZeroClaw 部署在嵌入式设备 (Raspberry Pi) 和云服务器 (Ubuntu/Docker) 上，作为自动化助手。
*   **评价:** 开发速度极快，新功能（如 Knowledge Graph, WASM）令人兴奋，但**稳定性**和**向后兼容性**是目前的主要短板。部分用户因 `main` 分支功能丢失而感到困惑 (#3818)。

## 8. 待处理积压
*   **PR #3571 (Config Hot-Reload):** 该 PR 提供了极具价值的热重载功能，目前已开启但尚未合并，建议维护者优先 Review。
*   **Issue #2879 (Web Pairing):** 前端忽略 `require_pairing=false` 的 Bug 仍未彻底解决，影响用户体验。
*   **Issue #3679 (Cost Tracking Missing):** 成本追踪功能的丢失可能会导致企业用户无法监控 API 开销，建议作为优先修复项纳入路线图。

---
*分析师注：项目正处于功能爆发期，但需警惕快速迭代带来的构建质量下滑，特别是 ARM64 平台的支持需尽快修复。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-18)

**分析师摘要**：PicoClaw 项目今日迎来 **v0.2.3** 正式版发布，标志着项目在稳定性和功能集成上迈出了重要一步。社区活跃度极高，过去24小时内 PR 更新量达到 79 条，其中 38 条已合并/关闭，显示开发团队正在高效地将社区贡献（如系统托盘 UI、GLM 输入修复）整合进主分支。然而，v0.2.3 版本也暴露了一些关键的架构问题，特别是关于 Gateway 模式的 API 可用性以及子代理的工具丢失问题，需引起运维和开发用户的重点关注。

---

### 1. 今日速览
PicoClaw 今日发布了 **v0.2.3** 正式版本，重点修复了 GLM 模型的空输入问题并引入了全平台系统托盘 UI。社区开发热情高涨，共有 **38 个 PR** 被合并，显著提升了代码库的健壮性（包括日志、配置加载、CLI 错误处理等）。然而，Issues 列表显示新版本在 **Gateway 部署**和**子代理工具调用**方面存在严重阻滞，部分用户升级后遭遇服务不可用的情况。总体而言，项目正处于功能扩展与稳定性磨合的关键期，建议用户在升级前仔细阅读变更日志。

### 2. 版本发布
#### **v0.2.3 (Latest Release)**
- **核心更新**：
    - **全平台系统托盘 UI**：合并了 PR #1649，支持 Darwin、Windows、Linux 等全平台的系统托盘交互，移除了冗余的 Darwin 存根代码 (#1694)。
    - **GLM 模型修复**：合并了 PR #1663，修复了 GLM Coding Plan 在特定情况下的空输入问题，解决了部分用户遇到的 `429` 错误。
    - **配置与日志修复**：修复了文件日志字段丢失的问题 (#1640)，以及重复模型名称的负载均衡逻辑 (#1702)。
- **破坏性变更/迁移注意**：
    - Gateway 部署模式下的 REST API 端点（/chat, /a2a）目前似乎存在不可用的情况（详见 Issue #1708），使用 Docker 部署 Gateway 的用户建议先在测试环境验证。
    - Cron 任务的测试 API 发生了变更（`SubscribeOutbound` -> `OutboundChan`），下游依赖该接口的开发者需注意。

#### **nightly (Nightly Build)**
- **版本号**：`v0.2.3-nightly.20260318.513537d2`
- **说明**：包含最新合并的代码，适合测试前沿功能，不建议用于生产环境。

### 3. 项目进展
今日共有 **38 个 PR** 被合并，项目整体质量显著提升：
- **核心架构优化**：PR #1179 重构了 MessageBus，利用 Go 泛型解决了关闭时消息丢失的竞态条件，提升了系统 shutting down 的稳定性。
- **Agent 能力增强**：PR #1490 深度重构了 Agent 的上下文管理，引入了主动预算检查和安全压缩机制，解决了上下文窗口混淆的问题。
- **Provider 兼容性**：PR #1479 修复了 Claude CLI 的错误输出捕获问题（stderr -> stdout），PR #1460 修复了 OpenAI 兼容提供商的 tool calls 序列化问题。
- **多渠道支持**：PR #1510 改善了 Matrix 渠道的渲染兼容性。

### 4. 社区热点
1.  **[#1498 期待功能增加：模型端搜索和 fastembed](https://github.com/sipeed/picoclaw/issues/1498)** (8 条评论)
    *   **分析**：用户强烈希望 PicoClaw 能原生支持“模型端搜索”（如 OpenAI 的 web search preview）以替代客户端搜索，这与 PR #1618 的方向高度一致，显示社区对提升信息获取时效性的迫切需求。
2.  **[#1648 Adding TTS and ASR Support](https://github.com/sipeed/picoclaw/issues/1648)** (6 条评论)
    *   **分析**：语音交互（TTS/ASR）架构设计引发了深入讨论。虽然有相关 PR (#1642)，但尚未集成到 Gateway，用户正积极推动官方确立标准的语音交互架构。
3.  **[#1652 GLM Coding Plan 不支持/Bug](https://github.com/sipeed/picoclaw/issues/1652)** (5 条评论)
    *   **分析**：针对智谱 GLM 模型的计费错误和配置问题。该 Issue 已在 v0.2.3 中通过修复 GLM 空输入逻辑得到缓解，反映了国内用户对国产模型支持的高度关注。

### 5. Bug 与稳定性
今日报告的 Bug 集中在 **v0.2.3 的新架构**与**复杂 Agent 调用**中，部分问题较为严重：
- **🔴 严重**:
    - **[BUG] Subagents spawned via spawn tool have no tools** ([#1713](https://github.com/sipeed/picoclaw/issues/1713)): 通过 spawn 工具生成的子代理无法获取工具列表，导致其无法执行任何操作。目前已有 Fix PR (#1711) 提出修复 ToolRegistry 传递问题。
    - **[BUG] Gateway REST API 不可用** ([#1708](https://github.com/sipeed/picoclaw/issues/1708)): v0.2.3 Docker 镜像中，Gateway 模式仅 health 接口可用，核心 /chat 接口 404。目前尚无官方修复，**严重影响 Gateway 用户**。
    - **[BUG] Claude tool use error** ([#1658](https://github.com/sipeed/picoclaw/issues/1658)): Claude 模型调用工具时触发 400 错误。
- **🟡 中等**:
    - **[BUG] OpenRouter invalid model ID** ([#1678](https://github.com/sipeed/picoclaw/issues/1678)): 异步路径下模型 ID 解析错误。
    - **[BUG] Android Termux 启动失败** ([#1704](https://github.com/sipeed/picoclaw/issues/1704)): Armv7/Android 环境下 TUI 启动受阻。

### 6. 功能请求与路线图信号
- **模型原生搜索**: Issue #1498 和 PR #1618 均指向集成 OpenAI/Codex 的原生搜索能力。这极有可能成为下一阶段的重点，以减少客户端侧的搜索延迟。
- **思维链 隐藏**: Issue #1714 请求在前端增加开关以隐藏 `` 内容，表明用户对 UI 交互的纯净度有更高要求。
- **环境变量集中管理**: Issue #1638 提出的 "Magic Values" 问题，预示着项目将进行配置管理层面的重构。

### 7. 用户反馈摘要
- **痛点**:
    - **升级断层**：部分用户升级到 v0.2.3 后发现 Gateway 不可用，导致服务中断。
    - **复杂 Agent 不稳定**：多级 Agent 调用容易出现工具丢失或模型 ID 错误，目前的高级玩法（如 subagent）对普通用户来说仍显脆弱。
    - **移动端支持**：ArmV7 Android 设备用户面临无插件可用的困境。
- **满意点**:
    - 对 **v0.2.3 修复 GLM 问题** 表示认可。
    - 对 **系统托盘** 的回归/增强表示欢迎，提升了桌面端的使用体验。

### 8. 待处理积压
- **PR #1618 (Add model-native search)**: 这是一个重要的功能性 PR，目前处于 Open 状态。鉴于 Issue #1498 的高热度，建议维护者优先 Review 并合并，以解决搜索体验痛点。
- **PR #1707 (Multiple API Keys Failover)**: 提供了 API Key 的高可用方案，对于生产环境至关重要，建议尽快纳入 Review。
- **Issue #1439 (Context Management)**: 涉及 Agent 核心重构的长期 Issue，PR #1490 已解决部分问题，但仍需持续关注后续的压缩策略和 Token 预算实现。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

这里是为您生成的 **NanoClaw** 项目 2026-03-18 动态日报。

---

# 📊 NanoClaw 项目动态日报 (2026-03-18)

## 1. 今日速览
NanoClaw 今日维持高热度开发状态，社区贡献活跃度显著提升。过去24小时内 PR 更新量达 **50 条**，其中待合并 PR 积压较多（37 条），显示出社区贡献速度超过了核心团队目前的合并/审查速度。Issue 讨论焦点集中在**多模型运行时支持**（如 Gemini/OpenAI）以及**安全性与部署架构**的深度探讨。整体而言，项目正处于功能快速迭代与生态扩展期，但需注意代码审查的积压风险。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 **13 个 PR 被合并或关闭**，主要集中在技能集成与系统健壮性修复：

*   **实例隔离修复**：合并了 PR #1204，通过引入 `INSTANCE_ID` 标签解决了多实例环境下孤儿容器清理误杀的问题，提升了生产环境的多租户安全性。
    *   链接: [qwibitai/nanoclaw PR #1204](https://github.com/qwibitai/nanoclaw/pull/1204)
*   **安全与清理**：关闭了部分过时的修复 PR（如 Digest Timezone 修复尝试 #1208, #1209），显示核心团队正在清理提交队列。
*   **生态集成尝试**：虽然部分功能型 PR（如 OMS 集成 #1207）被关闭，但大量的新 PR 涌入表明社区正在积极尝试将 NanoClaw 与 Obsidian、Sunsama 等外部工具打通。

## 4. 社区热点
今日讨论热度最高的问题反映了用户对**底层架构灵活性**的强烈诉求：

*   **🔴 热点 1：支持非 Claude 运行时 (Issue #80)**
    *   **数据**：👍 47 | 评论 25
    *   **分析**：这是目前最受关注的问题。随着 Anthropic 开始打击非官方客户端，用户迫切希望 NanoClaw 能够解耦对 Claude 的强依赖，转而支持 OpenCode、Gemini 或 Codex 等模型。这表明项目正处于从 "Claude 专用工具" 向 "通用 AI Agent 容器平台" 转型的关键路口。
    *   链接: [qwibitai/nanoclaw Issue #80](https://github.com/qwibitai/nanoclaw/issues/80)
*   **🔒 热点 2：容器安全架构的质疑 (Issue #865)**
    *   **数据**：虽已关闭，但引发了关于 "Container alone != Secure" 的深度讨论。
    *   **分析**：用户指出当前架构过度信任 Agent 级别的脚本，建议重新审视信任边界。该 Issue 虽被关闭，但引发了关于安全硬化的重要反思，可能影响未来的架构设计。
    *   链接: [qwibitai/nanoclaw Issue #865](https://github.com/qwibitai/nanoclaw/issues/865)

## 5. Bug 与稳定性
今日报告的关键 Bug 主要涉及**环境兼容性**与**核心依赖滞后**：

*   **🔥 严重 (High): Apple Container 网络故障 (Issue #1103)**
    *   **问题**：在 macOS 的新虚拟化框架（Apple Container）下，代理绑定 `127.0.0.1` 导致容器无法访问宿主机凭据，出现 `ENOTFOUND` 错误。
    *   **状态**：OPEN，尚无官方修复 PR。
    *   链接: [qwibitai/nanoclaw Issue #1103](https://github.com/qwibitai/nanoclaw/issues/1103)
*   **🔥 严重: SDK 版本锁定导致模型过时 (Issue #1142)**
    *   **问题**：Agent SDK 被锁定在旧版本 v0.2.34，导致默认调用旧模型（如 Claude 3.5 Sonnet），影响了新用户的使用体验。
    *   **状态**：OPEN。
    *   链接: [qwibitai/nanoclaw Issue #1142](https://github.com/qwibitai/nanoclaw/issues/1142)
*   **🐛 中等: 文档引用失效路径 (Issue #1143)**
    *   **问题**：Skills 文档中引用的 `/data/env` 路径已不存在。
    *   链接: [qwibitai/nanoclaw Issue #1143](https://github.com/qwibitai/nanoclaw/issues/1143)
*   **🧩 数据损坏风险: Unicode 代理字符破坏日志 (Issue #889)**
    *   **问题**：Bash 输出中的孤立 Unicode 代理字符会导致 JSONL 转录文件损坏，进而引发下一次 API 调用 HTTP 400 错误。
    *   链接: [qwibitai/nanoclaw Issue #889](https://github.com/qwibitai/nanoclaw/issues/889)

## 6. 功能请求与路线图信号
社区正在通过 PR 侧面向项目添加关键能力，这可能预示着下一阶段的发展方向：

*   ** runtime 模型切换 (PR #1205)**：提出了 `/model` 命令，允许在运行时切换模型。这是对 Issue #80（多模型支持）的直接响应，极有可能被合并。
    *   链接: [qwibitai/nanoclaw PR #1205](https://github.com/qwibitai/nanoclaw/pull/1205)
*   **可观测性增强 (PR #1202)**：社区开发者提交了带有 Web UI 的 Agent 追踪功能，提供端口 3001 的监控面板。这填补了生产级监控的空白。
    *   链接: [qwibitai/nanoclaw PR #1202](https://github.com/qwibitai/nanoclaw/pull/1202)
*   **通信渠道扩展**：
    *   **WhatsApp**：Issue #1183 请求在 WhatsApp 中创建个人助手，且有相关 PR (#1160) 支持文件附件。
    *   **Slack**：Issue #876 询问原生 Slack 集成计划。

## 7. 用户反馈摘要
*   **痛点 - 部署限制**：用户反映在受限的 K8s 环境（如 Sealos）中部署存在困难，因为 NanoClaw 的某些权限或网络要求较为宽松 (Issue #1184)。
*   **痛点 - 认证体验**：目前的 Claude 登录流程（基于 token）被认为不够友好，有 PR (#650) 试图将其改进为容器化的 OAuth 登录流程。
*   **积极信号**：用户高度认可 NanoClaw "使用现有代码构建 Agent" 的轻量级理念，认为相比臃肿的框架提供了更安全、精简的替代方案。

## 8. 待处理积压
*   **⚠️ 安全报告通道缺失 (Issue #1149)**：安全研究员请求私有漏洞披露渠道（如邮箱）。维护者需尽快设置 `SECURITY.md` 或提供联系方式，以防漏洞被公开披露。
    *   链接: [qwibitai/nanoclaw Issue #1149](https://github.com/qwibitai/nanoclaw/issues/1149)
*   **⚠️ PR 审查积压**：目前有 **37 个 PR** 处于待合并状态，包括重要的安全修复（PR #1035 WebFetch 过滤）和登录体验改进（PR #650）。建议核心团队优先处理安全相关和阻碍新用户入驻的 Bug 修复。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

这里是 **NullClaw** 项目 2026-03-18 的动态日报。

# NullClaw 项目日报 (2026-03-18)

## 1. 今日速览
NullClaw 今日活跃度极高，随着 **v2026.3.17** 版本的发布，项目迎来了一次重要的里程碑更新。过去24小时内，社区提交了 25 个 PR（其中 23 个已合并），修复了 8 个 Issue，显示出维护团队极高的迭代效率和对社区反馈的快速响应。本次更新重点集中在 **安全性加固**（密钥存储、强制加密）、**生态兼容性**（OpenRC 支持）以及 **连接器稳定性**（Matrix/WhatsApp）三个方面。整体来看，项目正处于功能完善与安全性增强的快速上升期，健康度优秀。

---

## 2. 版本发布
### **v2026.3.17** (发布于 2026-03-18)
本次版本更新幅度较大，包含多项安全性修复与功能扩展，建议所有用户尽快升级。

*   **核心更新**:
    *   **Runtime Observability**: 引入了运行时可观测性配线及 **OTLP 支持**，为后续监控与链路追踪打下基础。
    *   **External Channels**: 增加了加固版的外部通道插件，支持更复杂的消息生命周期操作（编辑、删除、反应等）。
    *   **Service Management**: 正式支持 Linux **OpenRC** 服务管理 (除了现有的 systemd)。
*   **安全性加固**:
    *   强制执行机密加密，不再允许明文存储敏感信息。
    *   修复了 `http_request` 工具中超时配置无效的问题。
    *   阻止在非 loopback 网关上运行不安全的 "yolo" 自主模式。
*   **迁移注意**: 如果您的配置文件中 `secrets.encrypt` 为 false，升级后可能会触发配置校验失败，需手动开启加密并迁移密钥。

---

## 3. 项目进展
今日共有 **23 个 PR 被合并**，项目在稳定性、安全性和适配性上取得了显著进展：

*   **系统适配**: [PR #605](https://github.com/nullclaw/nullclaw/pull/605) 实现了对 Linux OpenRC 的支持，修复了 Alpine Linux 等非 systemd 环境下的服务部署问题。
*   **安全性增强**:
    *   [PR #609](https://github.com/nullclaw/nullclaw/pull/609) 实现了配置文件中 API Key 的加密存储。
    *   [PR #193](https://github.com/nullclaw/nullclaw/pull/193) 集成了操作系统原生的凭证管理来存储主密钥。
*   **连接器修复**:
    *   [PR #610](https://github.com/nullclaw/nullclaw/pull/610) 修复了 Matrix 通道的邀请自动接受和消息过滤问题。
    *   [PR #265](https://github.com/nullclaw/nullclaw/pull/265) 引入了 WhatsApp Web 桥接通道。
    *   [PR #451](https://github.com/nullclaw/nullclaw/pull/451) 引入了支持 IMAP IDLE 的原生邮件通道。
*   **诊断工具**: [PR #598](https://github.com/nullclaw/nullclaw/pull/598) 新增了 `cron status` 命令，帮助排查定时任务不运行的棘手问题。

---

## 4. 社区热点
今日社区讨论的焦点集中在**本地化支持**、**配置易用性**以及**平台兼容性**上：

*   **[Issue #607] [CLOSED] MAX support** (链接: [nullclaw/nullclaw Issue #607](https://github.com/nullclaw/nullclaw/issues/607))
    *   **摘要**: 用户请求支持俄罗斯政府推广的 MAX 即时通讯软件。
    *   **分析**: 这是一个涉及地缘政治和技术可行性的讨论。虽然该平台缺乏端到端加密，但社区对此类“被封锁环境的替代方案”有实际需求，讨论热度较高。
*   **[Issue #613] [OPEN] Improve config.json descriptions** (链接: [nullclaw/nullclaw Issue #613](https://github.com/nullclaw/nullclaw/issues/613))
    *   **摘要**: 用户指出当前的 `config.json` 配置项描述过于晦涩，对新手不友好。
    *   **分析**: 反映了项目从“硬核技术向”向“大众易用性”转型过程中的痛点，文档和配置体验是目前的短板。
*   **[Issue #612] [OPEN] NixOS build failed** (链接: [nullclaw/nullclaw Issue #612](https://github.com/nullclaw/nullclaw/issues/612))
    *   **摘要**: `nixos-25.11` 环境下构建 `v2026.3.15` 失败。
    *   **分析**: 针对特定 Linux 发行版的兼容性问题，通常需要社区贡献者介入修复。

---

## 5. Bug 与稳定性
今日报告的 Bug 大多已在最新版本中通过 PR 修复，显示出团队极快的响应速度。

| 严重程度 | Issue | 描述 | 状态 & 修复 PR |
| :--- | :--- | :--- | :--- |
| **高** | [Issue #601](https://github.com/nullclaw/nullclaw/issues/601) | Alpine Linux (OpenRC) 下服务管理命令全部失败 | **已修复** via [PR #605](https://github.com/nullclaw/nullclaw/pull/605) |
| **高** | [Issue #606](https://github.com/nullclaw/nullclaw/issues/606) | Matrix 通道无法自动接受邀请，群组消息处理混乱 | **已修复** via [PR #610](https://github.com/nullclaw/nullclaw/pull/610) |
| **中** | [Issue #592](https://github.com/nullclaw/nullclaw/issues/592) | Cron 定时任务不运行且无报错提示 | **已修复** via [PR #598](https://github.com/nullclaw/nullclaw/pull/598) |
| **中** | [Issue #519](https://github.com/nullclaw/nullclaw/issues/519) | HTTP 请求工具硬编码 60s 超时，忽略配置 | **已修复** via [PR #541](https://github.com/nullclaw/nullclaw/pull/541) |
| **低** | [Issue #612](https://github.com/nullclaw/nullclaw/issues/612) | NixOS 构建失败 | **OPEN** (待解决) |

---

## 6. 功能请求与路线图信号
根据今日的 Issue 和 PR 动态，未来的版本可能会重点关注以下方向：

1.  **配置体验优化**: [Issue #613](https://github.com/nullclaw/nullclaw/issues/613) 指出配置项晦涩难懂，预计下一阶段会增加配置向导或更详细的文档注释。
2.  **扩展 Provider 支持**: [Issue #117](https://github.com/nullclaw/nullclaw/issues/117) 询问如何添加 Claude 模型，虽然这是旧 Issue，但今日再次活跃，结合 [PR #608](https://github.com/nullclaw/nullclaw/pull/608) 修复了 Anthropic 的流式错误，预示着对非 OpenAI 模型的支持将持续优化。
3.  **更多通讯协议**: MAX Messenger ([Issue #607](https://github.com/nullclaw/nullclaw/issues/607)) 和 WhatsApp Web ([PR #265](https://github.com/nullclaw/nullclaw/pull/265)) 的进展表明项目致力于成为全平台的 AI 接入层。

---

## 7. 用户反馈摘要
*   **痛点**:
    *   **配置门槛高**: 新用户在 `config.json` 的配置选项上花费大量时间，缺乏直观的说明。
    *   **平台差异**: 在非标准 Linux 环境（如 NixOS, Alpine/OpenRC）下的部署仍有阻力。
*   **满意点**:
    *   用户对项目的安全性改进表示欢迎（如 API Key 加密存储）。
    *   Matrix 和 Cron 功能的快速修复让用户感到维护团队非常可靠。

---

## 8. 待处理积压
*   **[Issue #613] Improve config descriptions**: 目前仍为 OPEN 状态，这是提升项目易用性的关键，建议维护者优先处理。
*   **[Issue #117] Add a custom provider**: 长期未彻底解决，对于希望接入自定义模型（如 Claude）的用户来说是一个持续的阻碍。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

你好！我是 IronClaw 项目分析师。以下是根据 2026-03-18 的 GitHub 数据生成的项目动态日报。

---

# IronClaw 项目日报 (2026-03-18)

## 1. 今日速览
IronClaw 项目今日保持**极高活跃度**，随着 **v0.19.0** 的正式发布，社区迎来了新一轮的反馈高峰。过去 24 小时内共有 100 次代码库更新（50 Issues + 50 PRs），显示出维护者与社区正在密集推进功能迭代与问题修复。尽管新版本带来了 Telegram 认证增强和配置系统重构等核心改进，但也引入了数据库迁移校验失败等关键升级阻碍，导致部分用户无法从 v0.18.0 平滑升级。总体而言，项目正处于功能扩展期，但在向后兼容性和多架构支持（如 ARMv7）方面面临挑战。

## 2. 版本发布
### **v0.19.0 (2026-03-17)**
本次更新主要集中在安全认证与系统底层重构。

-   **Added (新增功能)**:
    -   **Telegram 热激活验证**：在 hot activation 期间增加 Telegram 所有者验证流程 ([#1157](https://github.com/nearai/ironclaw/pull/1157))，提升了 Bot 的安全性。
    -   **配置系统重构 (Phase 2)**：统一了配置解析逻辑，引入 Settings 降级机制 ([#1203](https://github.com/nearai/ironclaw/pull/1203))，旨在解决多层配置优先级混乱的问题。
    -   **Sandbox 重试逻辑**：为沙箱环境增加了重试逻辑（截断信息，推测用于增强稳定性）。

-   **⚠️ 破坏性变更与迁移警告**:
    -   **数据库迁移校验失败**：已确认存在严重升级问题。由于 PR #1151 修改了已被应用的 `V6__routines.sql` 迁移文件，导致 PostgreSQL 用户从旧版本升级时报错 `Migration failed: applied migration V6__routines is different`。**建议升级前备份数据库，并关注即将发布的修复补丁。** ([Issue #1328](https://github.com/nearai/ironclaw/issues/1328))

## 3. 项目进展
今日共有 **14 个 PR 合并/关闭**，主要集中在修复 Telegram 集成问题和提升工具链稳定性。

-   **Telegram 体验修复**：合并了 PR [#1295](https://github.com/nearai/ironclaw/pull/1295)，修复了现有 Bot 在重新配置时的配对流程问题，解决了用户必须手动发送消息触发配对的尴尬情况。
-   **沙箱扩展支持**：PR [#551](https://github.com/nearai/ironclaw/pull/551) 被重新激活/讨论，旨在支持 Podman 作为沙箱运行时，这将利好无 Docker 环境的用户。
-   **搜索增强**：PR [#1313](https://github.com/nearai/ironclaw/pull/1313) 提议在 Web 搜索结果中增加缩略图支持，提升多模态交互体验。
-   **代码质量**：PR [#1312](https://github.com/nearai/ironclaw/pull/1312) 在关键路径增加了 `debug_assert` 不变式守卫，旨在尽早捕获状态转换异常。

## 4. 社区热点
今日讨论最热烈的话题集中在第三方服务变更和系统健壮性上。

1.  **Brave Search API 收费策略变更** ([Issue #1307](https://github.com/nearai/ironclaw/issues/1307))
    -   **热度**: 👍 0 | 评论: 3
    -   **分析**: Brave Search API 不再免费（$5/1000次请求），导致 IronClaw 现有的 Web Search Tool 失效。社区急需寻找替代方案（如 DuckDuckGo 或自建 Seeks）或更新文档告知用户付费现状。这是一个阻塞性的外部依赖问题。
2.  **CI 覆盖率门禁缺失** ([Issue #1228](https://github.com/nearai/ironclaw/issues/1228))
    -   **热度**: 👍 0 | 评论: 2
    -   **分析**: 核心贡献者指出当前 CI 没有设置 Codecov 门禁，导致 PR 可能会降低测试覆盖率。提议引入 `codecov.yml` 确保代码质量不回退，体现了项目对 "Mars-rover reliability" 级别稳定性的追求。
3.  **Tool Schema 可发现性优化** ([Issue #1338](https://github.com/nearai/ironclaw/issues/1338), [#1337](https://github.com/nearai/ironclaw/issues/1337))
    -   **分析**: 大量关于 MCP 和 WASM 工具 Schema 发现能力的 Issue 被提出。核心痛点是目前的工具 Schema 对 LLM 不够友好，模型难以理解复杂参数的约束。这预示着项目将重点转向 **LLM-Native 的工具调用体验优化**。

## 5. Bug 与稳定性
今日报告了多个影响使用的 Bug，按严重程度排列如下：

-   **🔴 P0 - 升级阻断 (PostgreSQL)**: v0.19.0 升级失败，数据库迁移 Checksum 不匹配 ([Issue #1328](https://github.com/nearai/ironclaw/issues/1328))。**状态**: Open，需紧急修复。
-   **🔴 P0 - 功能失效**: 升级 v0.19.0 后 Telegram Webhook 路由丢失，Bot 无法接收消息 ([Issue #1327](https://github.com/nearai/ironclaw/issues/1327))。**状态**: Open。
-   **🟠 P1 - 安全与锁死**: Telegram 频道在用户粘贴 PAT（个人访问令牌）后被永久锁死，秘密泄露检测阻断了后续所有消息 ([Issue #1329](https://github.com/nearai/ironclaw/issues/1329))。
-   **🟠 P1 - 架构支持**: 树莓派 (ARMv7) 编译失败，报错 "no supported isa found" ([Issue #1339](https://github.com/nearai/ironclaw/issues/1339))。
-   **🟡 P2 - 限流逻辑**: 限流器返回 "retry after None" 而非具体时间，导致 Agent 无法执行退避策略 ([Issue #1000](https://github.com/nearai/ironclaw/issues/1000))。

## 6. 功能请求与路线图信号
-   **通用用户白名单** ([Issue #1272](https://github.com/nearai/ironclaw/issues/1272)): 用户希望为所有频道（Telegram/Discord 等）增加统一的白名单机制，目前任何人均可触发 Bot，存在安全隐患。这极有可能被纳入近期的安全模块重构中。
-   **Web 端 Routine 编排** ([Issue #1325](https://github.com/nearai/ironclaw/issues/1325)): 用户请求在 Web UI 上直接创建和编辑 Routine（目前仅只读）。结合 #1147 的 PR 动向，Routine 功能正成为 IronClaw 自动化的核心。
-   **阿里云百炼 LLM 支持** ([PR #1299](https://github.com/nearai/ironclaw/pull/1299)): 社区提交了对阿里云后端的适配，表明项目正在吸引非英语区的开发者生态。

## 7. 用户反馈摘要
-   **痛点**: 用户对**升级路径的平滑度**感到沮丧（特别是 DB 迁移问题）。此外，**外部 API 收费变更**（Brave Search）让部分用户感到措手不及，认为文档更新滞后。
-   **场景**: 大量关于 **Routines（例程/定时任务）** 的反馈表明，用户正试图将 IronClaw 从“聊天机器人”推向“自动化 Agent”，但在配置发现和错误恢复方面遇到了较多阻碍。
-   **满意度**: 尽管有 Bug，但对增加 Podman 支持、MCP 集成和 LRU 缓存等 PR 的讨论显示出高级用户对项目架构演进持积极态度。

## 8. 待处理积压
-   **[P0] 数据库迁移修复**: 需立即处理 Issue [#1328](https://github.com/nearai/ironclaw/issues/1328)，否则 PostgreSQL 用户将滞留在 v0.18.0。
-   **[P1] 多租户与工作空间隔离**: PR [#1118](https://github.com/nearai/ironclaw/pull/1118) 仍处 Open 状态，这是一个大型的架构重构，旨在解决线程上下文污染问题，建议维护者尽快 Review 以消除安全隐患。
-   **[P1] 依赖更新**: Issue [#939](https://github.com/nearai/ironclaw/issues/939) 关于 Windows 环境下 `telegram-mtproto` 安装校验失败的问题仍有回声，需确认是否为依赖链问题。

---
**分析师结语**：IronClaw 正在经历从单机工具向多平台、多租户 Agent 平台的转型阵痛期。v0.19.0 的发布虽然带来了新特性，但也暴露了迁移测试不足的问题。建议维护者优先解决数据库兼容性危机，并尽快推进 Tool Schema 的 LLM 友好化改进。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是 **LobsterAI** 项目 2026-03-18 的动态日报：

---

# 📊 LobsterAI 项目动态日报 (2026-03-18)

### 1. 今日速览
LobsterAI 今日维持**高活跃度**开发状态，随着 **v2026.3.17** 版本的发布，项目组在 24 小时内合并了高达 **22 个 PR**，显示出极强的迭代执行力。本次更新主要聚焦于修复昨日版本（v2026.3.16）引入的回归问题（如 API Key 丢失、消息乱序），并完成了底层网关向 **OpenClaw 插件架构**的深度迁移（包括 NIM、POPO 通道）。然而，社区反馈显示新版本在**设置持久化**（升级后配置丢失）和**中文处理**（乱码、空格 Bug）方面仍存在痛点，值得用户在升级时注意。

### 2. 版本发布
**Release:** `2026.3.17` ([View on GitHub](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.17))
本次更新主要针对 v2026.3.16 版本的紧急修复，重点解决了阻塞用户使用的严重问题。

*   **关键修复**:
    *   **System Prompt 优化**: 修复了每次对话都重复注入完整系统指令导致 Token 消耗过高的问题 ([PR #456](https://github.com/netease-youdao/LobsterAI/pull/456))。
    *   **消息显示**: 修复了频道消息顺序错乱（用户消息显示在 AI 回复之后）的 Bug ([PR #451](https://github.com/netease-youdao/LobsterAI/pull/451))。
    *   **模型探测**: 移除了导致 20 秒阻塞超时的 `model probe` 逻辑 ([PR #457](https://github.com/netease-youdao/LobsterAI/pull/457))。
*   **升级注意事项**:
    *   建议所有受 "No API key found" 错误影响的用户立即升级。
    *   部分用户反馈升级后设置被重置，建议升级前备份配置文件。

### 3. 项目进展
今日项目共处理 **25 个 PR**，其中 **22 个已合并**。核心进展集中在**架构重构**与**稳定性修复**：

*   **架构重构 (OpenClaw 插件化)**:
    *   **NIM 通道重构**: 将网易 NIM（即时通讯）网关从直接 SDK 调用迁移至 OpenClaw 插件架构，统一了 IM 通道技术栈 ([PR #473](https://github.com/netease-youdao/LobsterAI/pull/473))。
    *   **新增 POPO 机器人**: 新增 POPO 聊天机器人作为 OpenClaw 插件集成 ([PR #472](https://github.com/netease-youdao/LobsterAI/pull/472))。
    *   **Skills 加载重构**: 使用 OpenClaw 原生 Skills 加载替代了之前的 AGENTS.md 内嵌方式 ([PR #471](https://github.com/netease-youdao/LobsterAI/pull/471))。
*   **重要修复**:
    *   **无需认证模型的 API Key 处理**: 修复了 Ollama/vLLM 等无认证模型报错 "No API key found" 的问题 ([PR #470](https://github.com/netease-youdao/LobsterAI/pull/470))。
    *   **计划任务**: 修复了钉钉通道定时任务无法投递的问题，并实现了历史计划任务的数据迁移 ([PR #465](https://github.com/netease-youdao/LobsterAI/pull/465), [PR #469](https://github.com/netease-youdao/LobsterAI/pull/469))。
    *   **编码问题**: 修复了 GB18030 编码误判导致会话标题乱码的问题 ([PR #461](https://github.com/netease-youdao/LobsterAI/pull/461))。

### 4. 社区热点
今日社区讨论主要集中在**产品相似性**与**频繁升级带来的体验问题**：

*   **[Issue #435](https://github.com/netease-youdao/LobsterAI/issues/435) - 界面相似度争议**
    *   **热度**: 👍 0 | 评论: 3
    *   **分析**: 用户指出 "Zeelin Claw" 等竞品与 LobsterAI 界面高度相似，质疑是否被抄袭。这反映了用户对 LobsterAI 设计的认可，同时也暴露了开源项目被"套壳"的风险。
*   **[Issue #382](https://github.com/netease-youdao/LobsterAI/issues/382) - 升级体验抱怨**
    *   **热度**: 👍 0 | 评论: 2
    *   **分析**: 用户抱怨"更新太频繁，且每次都要重填设置"。这表明当前的**配置迁移逻辑**不够健壮，频繁的迭代（近两日连续发版）虽然修复了 Bug，但也增加了用户的维护成本。

### 5. Bug 与稳定性
今日报告了多个影响体验的 Bug，部分已在最新版中修复，但仍有遗留问题：

*   **🔴 严重 - 配置丢失 (未解决)**
    *   **现象**: 升级后所有设置需重新填写 ([Issue #382](https://github.com/netease-youdao/LobsterAI/issues/382))；定时任务丢失且沙箱选项消失 ([Issue #474](https://github.com/netease-youdao/LobsterAI/issues/474))。
    *   **状态**: 尚未发现针对"设置丢失"的直接 Fix PR，可能是迁移脚本的边缘情况。
*   **🔴 严重 - 中文处理异常 (未解决)**
    *   **现象**: 字符串包含"中文+数字"时强制添加空格，严重影响特定行业使用 ([Issue #344](https://github.com/netease-youdao/LobsterAI/issues/344))。
    *   **状态**: Issue 创建于 9 号，至今未修复，属于遗留顽疾。
*   **🟡 中等 - 沙箱环境兼容性 (部分解决)**
    *   **现象**: 沙箱缺少 Python 运行时导致技能失效；PowerShell 中文输出乱码 ([Issue #458](https://github.com/netease-youdao/LobsterAI/issues/458), [Issue #455](https://github.com/netease-youdao/LobsterAI/issues/455))。
    *   **状态**: [PR #475](https://github.com/netease-youdao/LobsterAI/pull/475) 尝试修复 Python 打包问题，等待合并。
*   **🟢 已解决 - 认证与连接**
    *   **现象**: 升级后提示 "No API key found" ([Issue #452](https://github.com/netease-youdao/LobsterAI/issues/452))。
    *   **状态**: 已通过 [PR #470](https://github.com/netease-youdao/LobsterAI/pull/470) 修复。

### 6. 功能请求与路线图信号
*   **第三方模型支持**: [PR #428](https://github.com/netease-youdao/LobsterAI/pull/428) 正在尝试添加 **LM Studio** 作为模型提供商，表明项目正在积极扩展本地模型生态，与 Ollama 形成互补。
*   **定时任务增强**: [PR #376](https://github.com/netease-youdao/LobsterAI/pull/376) (Closed) 曾提议增加小时级定时任务，虽已关闭，但结合今日修复钉钉定时任务的 PR，说明**定时任务**是近期重点打磨的功能模块。

### 7. 用户反馈摘要
*   **痛点**: **配置迁移**是目前最大的槽点，用户对每次升级都要重新配置感到疲惫。
*   **场景**: 开发者用户在 Ubuntu 24.04 下自行编译遇到白屏问题 ([Issue #368](https://github.com/netease-youdao/LobsterAI/issues/368))；Windows 用户在沙箱模式下运行特定 CLI 工具（如 Everything 的 es 命令）遇到编码障碍 ([Issue #455](https://github.com/netease-youdao/LobsterAI/issues/455))。
*   **满意度**: 用户对修复 Token 消耗（System Prompt 优化）持积极态度；对 OpenClaw 插件化带来的扩展性表示期待。

### 8. 待处理积压
*   **[Issue #344](https://github.com/netease-youdao/LobsterAI/issues/344) - 中文数字空格 Bug**: 这是一个影响核心文本处理体验的 Bug，已活跃多日，建议开发团队优先排期。
*   **[Issue #248](https://github.com/netease-youdao/LobsterAI/issues/248) - DeepSeek/Qwen 令牌报错**: 涉及主流国产大模型的连接稳定性，虽然反馈"测试连接成功"，但实际调用 401 错误，可能涉及网关层的鉴权逻辑细节，需关注。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

以下是根据 TinyClaw 项目 2026-03-18 的 GitHub 数据生成的动态日报：

---

# 📊 TinyClaw 项目动态日报 (2026-03-18)

## 1. 今日速览
TinyClaw 项目今日处于**高活跃度开发阶段**，虽然未发布新版本，但核心功能重构与体验优化正在紧锣密鼓地进行。社区方面出现了一个**严重级别（High Severity）的 Bug 反馈**，涉及 CLI 配置导致 Agent 设置丢失的问题，需维护团队重点关注。代码提交方面，共有 **3 个待合并 PR** 活跃更新，涵盖架构简化、UI 重构和关键连接修复，显示出项目正在为下一次重大更新积蓄力量。整体来看，项目架构正在向更扁平化的通信模式演进，但 CLI 的稳定性需加强。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
尽管今日无 PR 合并，但以下 **3 个活跃 PR** 显示了项目即将迎来的重要变更：

*   **架构简化**：PR [#213](https://github.com/TinyAGI/tinyclaw/pull/213) 提出移除会话状态，转而采用扁平化直接消息通信。此举意在大幅降低架构复杂度，可能会显著提升 Agent 间的通信效率，是底层架构的一次重大调整。
*   **体验重构**：PR [#212](https://github.com/TinyAGI/tinyclaw/pull/212) 正在对 `/office` 工作区进行重新设计，预示着前端交互界面将迎来较大幅度的视觉或交互升级。
*   **连接修复**：PR [#232](https://github.com/TinyAGI/tinyclaw/pull/232) 修复了 SSE (Server-Sent Events) 连接问题，通过绕过 Next.js 的代理重写机制解决 Office 视图“连接中断”的问题，这对实时交互功能的稳定性至关重要。

## 4. 社区热点
今日社区关注焦点集中在以下问题：

*   **🔴 [Bug] CLI 配置导致 Agent 重置**：Issue [#228](https://github.com/TinyAGI/tinyclaw/issues/228)
    *   **热度**：2 条评论，且涉及核心功能损坏。
    *   **分析**：用户在使用 `tinyclaw setup` 修改心跳设置时，意外导致整个 Agent 设置被销毁。这反映出 CLI 工具在处理配置更新时的逻辑可能存在**破坏性变更**或缺乏数据持久化保护，属于用户体验的痛点。

## 5. Bug 与稳定性
*   **严重**:
    *   **[#228 [Bug]: Changing heartbeat resets complete agents](https://github.com/TinyAGI/tinyclaw/issues/228)**
        *   **现象**：执行 `tinyclaw setup` 修改 heartbeat 配置会重置所有 Agent。
        *   **影响**：导致用户数据丢失，目前无临时解决方案。
        *   **状态**：已开启，暂未关联 Fix PR。

## 6. 功能请求与路线图信号
*   **实时协作优化**：PR [#232](https://github.com/TinyAGI/tinyclaw/pull/232) 和 PR [#212](https://github.com/TinyAGI/tinyclaw/pull/212) 均指向优化 `/office` 实时工作区体验。这表明下一阶段的开发重点在于**提升多 Agent 实时交互的可视化与连接稳定性**。
*   **架构轻量化**：PR [#213](https://github.com/TinyAGI/tinyclaw/pull/213) 显示维护者正试图去除复杂的会话追踪机制，转向即时响应流。这可能是为了适应更高并发的 Agent 交互场景。

## 7. 用户反馈摘要
*   **痛点**：用户反馈 CLI 工具（特别是 `setup` 命令）过于“危险”，缺乏对现有配置的保护机制。用户期望修改单一参数（如心跳）不应影响其他已配置好的数据。
*   **场景**：用户主要在调整 Agent 维护参数（heartbeat）时遭遇阻碍，说明 TinyClaw 已被用于长期运行的 Agent 任务中。

## 8. 待处理积压
*   **需立即响应**：Issue [#228](https://github.com/TinyAGI/tinyclaw/issues/228) 目前处于 OPEN 状态且评级为 High，建议维护者优先排查 CLI 配置写入逻辑，防止更多用户遭遇数据丢失。
*   **关键 PR 待合并**：PR [#213](https://github.com/TinyAGI/tinyclaw/pull/213) 涉及核心通信层重构，建议尽快进行代码审查与测试，以便推进后续功能的开发。

---
*分析师注：当前项目处于架构调整期，建议用户在使用 CLI 工具时先备份配置文件，等待 Bug 修复后再进行生产环境操作。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报 (2026-03-18)**

**摘要**：今日 Moltis 项目代码库活跃度主要集中在 **安全性增强** 与 **模型提供商兼容性修复**，社区对第三方平台集成的需求持续升温。

---

### 1. 今日速览
项目今日保持稳定的开发迭代节奏，虽然无新版本发布，但核心贡献者提交了 2 个高质量 PR，重点解决了 **Gateway 层的敏感数据泄露风险** 以及 **MiniMax 模型的上下文兼容性问题**。社区方面，关于 **Lark/Feishu（飞书）** 集成的功能请求热度较高，获得 3 个赞同并引发了关于企业协作工具适配的讨论。整体来看，项目正处于夯实底层稳定性与拓展生态边界的并行阶段。

### 2. 版本发布
*   **无新版本发布**。

### 3. 项目进展
今日共有 2 个待合并（Open）的 PR，虽未合并，但均为重要的功能性更新，预示了下个版本的改进方向：

*   **安全性增强 [PR #449](https://github.com/moltis-org/moltis/pull/449)**:
    *   **内容**: 提交了 `ChannelService::account_config` 接口，并在 Gateway 层引入了配置访问的清洗逻辑。
    *   **价值**: 解决了核心安全问题。该 PR 实现了对类似密钥字段的递归遮蔽处理，并优化了更新逻辑（当提交占位符或空值时保留原有密钥），防止了敏感配置在日志或接口返回中的意外泄露。
*   **提供商修复 [PR #448](https://github.com/moltis-org/moltis/pull/448)**:
    *   **内容**: 修复了 MiniMax 提供商的处理逻辑。
    *   **价值**: 终止了将 MiniMax 系统消息提取到顶层 `system` 字段的做法，改为保留在标准 `messages` 数组中。这修复了可能存在的上下文历史记录不一致或兼容性错误，确保了对话历史的完整性。

### 4. 社区热点
*   **最活跃 Issue**: **[Feature]: Support Lark/Feishu [#383](https://github.com/moltis-org/moltis/issues/383)**
    *   **数据**: 👍 3 | 评论 2
    *   **分析**: 尽管该 Issue 创建于 3 月 10 日，但今日再次活跃。用户强烈希望能原生支持飞书作为机器人的接入渠道。这反映出 Moltis 的用户群体中有相当一部分是企业级用户，需要将 AI 智能体接入内部办公通讯流。目前的点赞数表明该需求具有较高的优先级。

### 5. Bug 与稳定性
*   **今日报告**: 无新的 Bug 报告。
*   **修复状态**: 针对旧有逻辑中 MiniMax 消息处理不当的问题，已有 PR [#448](https://github.com/moltis-org/moltis/pull/448) 进行了针对性修复，等待合并。

### 6. 功能请求与路线图信号
*   **强信号：企业协作工具集成**
    *   Issue [#383](https://github.com/moltis-org/moltis/issues/383) (Lark/Feishu 支持) 的高关注度表明，**多渠道适配** 将是 Moltis 接下来的重点。
*   **基础设施信号**
    *   PR [#449](https://github.com/moltis-org/moltis/pull/449) 暗示项目正在加强 **多租户/多渠道配置的安全管理能力**。这通常是为支持更复杂的企业级部署场景（SaaS 化或私有化部署）做铺垫。

### 7. 用户反馈摘要
从 Issue #383 的评论中可以看出：
*   **痛点**: 用户目前可能需要通过第三方中间件或自行编写适配器来连接飞书，维护成本高。
*   **诉求**: 用户期望“开箱即用”的官方支持，特别是针对飞书这种复杂的商业软件 API，用户更依赖库作者维护的标准化适配层，而非自己造轮子。

### 8. 待处理积压
*   **高优先级待响应**: Issue **[#383 Support Lark/Feishu](https://github.com/moltis-org/moltis/issues/383)** 仍在 Open 状态且持续活跃。建议维护者评估该功能的开发工作量，并给予用户明确的 Roadmap 反馈（例如：是否有计划纳入近期 Sprint）。
*   **代码审查瓶颈**: 今日提交的 2 个 PR ([#448](https://github.com/moltis-org/moltis/pull/448), [#449](https://github.com/moltis-org/moltis/pull/449)) 均处于 Open 状态且无评论，建议项目组加快 Code Review 流程以确保持续交付。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是为您生成的 **CoPaw** 项目 2026-03-18 动态日报：

---

# 📊 CoPaw 项目动态日报 (2026-03-18)

### 1. 今日速览
CoPaw 项目今日维持**高活跃度**，随着 **v0.1.0-beta** 版本的快速迭代（发布 b1 和 b2），社区反响强烈。过去24小时内共有 50 条 PR 更新（其中 31 条合并/关闭）和 50 条 Issue 更新，显示出开发团队正在密集修复 Beta 版本的初期问题。重点集中在解决新版本引入的破坏性变更（`a2a-sdk` 升级）、Windows 桌面端的稳定性以及记忆系统的可靠性优化。目前处于新版发布后的**震荡期**，用户反馈的 Bug 较多，但开发者响应迅速。

### 2. 版本发布
今日连续发布了两个 Beta 版本，标志着 CoPaw 进入了 0.1.0 的新里程碑：

*   **[v0.1.0-beta.2](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.1.0-beta.2)**
    *   **⚠️ 破坏性变更**：由于依赖项 `a2a-sdk~=1.0.0` 发生了破坏性更新，项目被迫升级了 `agentscope-runtime`。详情请参考 PR [#1684](https://github.com/agentscope-ai/CoPaw/pull/1684)。
    *   **迁移注意**：如果您在升级后遇到运行时错误，请确保重新安装或更新相关依赖环境。
*   **[v0.1.0-beta.1](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.1.0-beta.1)**
    *   **更新内容**：包含版本号升级、页面刷新重定位修复以及 Skills 导入路径中包含 `/` 符号时的失败修复。

### 3. 项目进展
今日共有 **31 个 PR 被合并或关闭**，主要推进了以下方面：

*   **核心依赖与稳定性**：PR [#1684](https://github.com/agentscope-ai/CoPaw/pull/1684) 解决了 `a2a-sdk` 的破坏性变更，PR [#1702](https://github.com/agentscope-ai/CoPaw/pull/1702) 更新了 `reme-ai` 依赖以修复 Token 计数问题。
*   **前端体验优化**：合并了多个 Console 端的改进，包括 PR [#1566](https://github.com/agentscope-ai/CoPaw/pull/1566) 引入的**夜间模式**，以及 PR [#1699](https://github.com/agentscope-ai/CoPaw/pull/1699) 改进的大文件上传状态反馈。
*   **渠道集成**：PR [#1681](https://github.com/agentscope-ai/CoPaw/pull/1681) 和 [#1706](https://github.com/agentscope-ai/CoPaw/pull/1706) 正在修复和重构企业微信（WeCom）的客户端初始化逻辑。
*   **安全性增强**：PR [#1484](https://github.com/agentscope-ai/CoPaw/pull/1484) 增加了对破坏性 Shell 命令（如 `mkfs`, `dd`, fork bombs）的检测规则。

### 4. 社区热点
今日讨论最热烈的问题集中在**部署体验**和**核心功能稳定性**上：

*   **容器化部署的痛点**：Issue [#1610](https://github.com/agentscope-ai/CoPaw/issues/1610)（14条评论）引发了 NAS 用户的强烈共鸣。用户抱怨关闭 Web UI 会导致正在运行的任务中断，这与 NAS 24小时运行的需求背道而驰，呼吁后台守护进程机制。
*   **新版安装受阻**：Issue [#1682](https://github.com/agentscope-ai/CoPaw/issues/1682)（13条评论）反映 v0.1.0b 版本在 Windows 上安装后无法启动，报错涉及 `agentscope_runtime` 模块导入失败，这是升级过程中的常见阻碍。
*   **记忆系统可靠性**：Issue [#1454](https://github.com/agentscope-ai/CoPaw/issues/1454) 和 [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345) 均有 8 条评论。用户指出记忆压缩后的输出通道错误（发到了日志而非聊天窗口）以及飞书频道的“延迟回复”问题，这直接影响对话体验。

### 5. Bug 与稳定性
随着 Beta 版发布，部分旧有问题被放大或新问题涌现：

*   **🔴 严重 - 启动失败**：
    *   Issue [#1682](https://github.com/agentscope-ai/CoPaw/issues/1682)：v0.1.0b 安装后无法启动（模块导入错误）。
    *   Issue [#1701](https://github.com/agentscope-ai/CoPaw/issues/1701)：Win10/Win11 桌面版 Exe 无法打开。
    *   **状态**：尚无针对启动失败的明确 Fix PR，可能需要发布 b3 版本修复（已有 PR [#1688](https://github.com/agentscope-ai/CoPaw/pull/1688) 正在处理版本 Bump）。
*   **🟠 中等 - 记忆与上下文**：
    *   Issue [#1222](https://github.com/agentscope-ai/CoPaw/issues/1222)：消息压缩后数量不匹配导致 API 调用失败。已有 PR [#1557](https://github.com/agentscope-ai/CoPaw/pull/1557) 尝试修复 `reasoning_content` 注入逻辑，正在等待合并。
    *   Issue [#1705](https://github.com/agentscope-ai/CoPaw/issues/1705)：v0.1.0.b2 中找不到企业微信 渠道配置。
*   **🟡 轻微 - UI 交互**：
    *   Issue [#1635](https://github.com/agentscope-ai/CoPaw/issues/1635)：对话模型选择列表被遮挡（已在 Beta 更新中修复）。

### 6. 功能请求与路线图信号
*   **多用户/多 Agent 隔离**：Issue [#352](https://github.com/agentscope-ai/CoPaw/issues/352) 和 [#508](https://github.com/agentscope-ai/CoPaw/issues/508) 提出按用户维度隔离记忆和构建多 Agent 编排网关。结合 PR [#1661](https://github.com/agentscope-ai/CoPaw/pull/1661)（修复 Agent ID 获取记忆文件）来看，**多 Agent 架构的支持正在逐步落地**。
*   **Docker 轻量化**：Issue [#1648](https://github.com/agentscope-ai/CoPaw/issues/1648) 建议发布不含本地推理库的 Lite 镜像，这是社区对轻量化部署的强烈需求。
*   **飞书深度集成**：Issue [#1657](https://github.com/agentscope-ai/CoPaw/issues/1657) 和 [#1595](https://github.com/agentscope-ai/CoPaw/issues/1595) 均提到适配“飞书官方插件”，表明 CoPaw 在 B 端场景下的文档处理能力是用户关注重点。

### 7. 用户反馈摘要
*   **痛点**：升级过程繁琐（尤其是 Exe 版本，见 Issue [#1683](https://github.com/agentscope-ai/CoPaw/issues/1683)）；本地模型（如 Ollama）虽然支持但记忆管理容易丢失（见 Issue [#1448](https://github.com/agentscope-ai/CoPaw/issues/1448)）；网络问题导致 HuggingFace 模型配置下载失败（见 Issue [#1708](https://github.com/agentscope-ai/CoPaw/issues/1708)）。
*   **满意点**：开发者修复速度快（如夜间模式、UI 细节优化）；对飞书/钉钉等渠道的集成需求响应积极。
*   **场景**：大量用户将 CoPaw 用于 NAS 私有化部署，期望其具备后台静默运行能力。

### 8. 待处理积压
*   **[PR #1557](https://github.com/agentscope-ai/CoPaw/pull/1557)**：针对 API 调用时消息数量不匹配的修复，影响稳定性，建议尽快合并。
*   **[Issue #918](https://github.com/agentscope-ai/CoPaw/issues/918)**：飞书多模态（图片/语音）识别问题长期存在，用户期望优先调用模型自带视觉能力而非本地工具。
*   **[Issue #995](https://github.com/agentscope-ai/CoPaw/issues/995)**：内置 Skills（文件处理）的体验改进，直接关系到用户留存，目前仍有优化空间。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-03-18)

**分析师**：AI Open Source Analyst
**数据源**：github.com/qhkm/zeptoclaw

## 1. 今日速览
ZeptoClaw 项目今日整体呈现出**高活跃度、高迭代**的状态，主要集中在底层依赖升级与安全性架构增强。虽然过去24小时没有新的版本发布，但社区（含机器人）提交了 **15 个 PR**（绝大多数为依赖更新）和 **6 个 Issues**。核心开发者 @qhkm 与贡献者 @taqtiqa-mark 正积极推动项目向更安全、更标准化的容器化架构演进。尽管今日缺乏代码合并（PR 合并数为 1），但大量的待合并 PR 表明项目正处于下一版本发布前的**依赖整合与功能测试阶段**。

## 2. 版本发布
**无新版本发布**。
当前项目处于开发迭代阶段，主要工作集中在代码库维护和未来功能的 PR 积累上。

## 3. 项目进展
今日共有 **1 个 PR 合并/关闭**，**3 个 Issue 关闭**。

*   **PR #370 [CLOSED] feat/webex channel**: 该 PR 由 @rafaellin 提交，虽然最终被关闭（可能是功能调整或分拆），但标志着社区正在尝试拓展 ZeptoClaw 的通信渠道集成能力。
*   **Issue #369 [CLOSED] 修复 Rootless Podman 下的 Cargo 权限问题**: 这是一个关键的 DevEx 修复。解决了在非 root 容器环境下运行 lint 脚本时的权限拒绝问题，通过重新映射 `CARGO_HOME` 确保了 CI/CD 流程在 Rootless Podman 环境下的顺畅运行，提升了开发环境的兼容性。
*   **Issue #373 [CLOSED] 凭证存储分离**: 核心维护者 @qhkm 关闭了关于“将凭证存储与配置文件分离”的提案。这通常意味着该功能已经确定方案或直接进入了开发实现阶段，是提升项目安全性的重要一步。

**整体评价**：项目在容器化工具链的健壮性和安全性架构上迈出了坚实的一步。

## 4. 社区热点
今日讨论主要集中在功能性增强与架构标准化上：

*   **[讨论热点] Issue #387 Core templates based on Containerfiles**:
    *   **链接**: [qhkm/zeptoclaw Issue #387](https://github.com/qhkm/zeptoclaw/issues/387)
    *   **分析**: @taqtiqa-mark 提出的“基于 Containerfile 的核心模板”引发了关于项目定位的思考。该提议试图将各种 Coding Agent 框架统一视为运行在节点上的应用，以对抗功能蔓延和安全风险。这表明社区正在严肃考虑如何在保持灵活性的同时控制核心代码库的体积。
*   **[功能关注] Issue #371 Network egress policy (YAML deny-by-default)**:
    *   **链接**: [qhkm/zeptoclaw Issue #371](https://github.com/qhkm/zeptoclaw/issues/371)
    *   **分析**: 受 NemoClaw 启发，该项目计划引入“默认拒绝”的网络出口策略。鉴于 AI 智能体涉及外部 API 调用，这一功能将极大增强企业级用户对 Agent 行为的管控能力，是安全性的重要加分项。

## 5. Bug 与稳定性
今日报告的 Bug 较少，主要集中在工具链和特定场景下的处理逻辑：

1.  **[P2-High] Issue #369 (已修复/关闭)**: Cargo 在 Rootless Podman 中的权限问题。
    *   *状态*: 已有解决方案并关闭。
    *   *影响*: 开发者体验 (DevEx)，影响本地 Lint 检查。
2.  **[Bug] Issue #368**: Agent 工具循环中图像未解析为 Base64。
    *   *链接*: [qhkm/zeptoclaw Issue #368](https://github.com/qhkm/zeptoclaw/issues/368)
    *   *详情*: @rafaellin 报告。在多轮对话中，图片路径未能正确转换为 Base64 发送给 LLM，导致多模态交互中断。
    *   *状态*: **待修复**。目前尚未看到对应的修复 PR，需关注。

## 6. 功能请求与路线图信号
今日涌现出多个高质量的功能提案，显示出项目正在向**企业级安全**和**标准化反馈**方向发展：

*   **安全性增强**:
    *   **#371 (Network Egress Policy)**: 网络出口流量管控，优先级 P2。
    *   **#373 (Credential Store)**: 独立的凭证存储，防止敏感信息泄露。
*   **开发者体验 (DX)**:
    *   **#372 (Structured Progress Protocol)**: 为长时间运行的工具添加进度条反馈（如 `PROGRESS: 50%`），这对于 Web Scraping 等耗时操作至关重要，能显著提升用户对 Agent 的掌控感。
    *   **#387 (Container Templates)**: 容器化模板标准化，旨在解决“功能蔓延”问题。

**预测**: #371 和 #372 由于提升用户体验显著且不涉及破坏性架构更改，极有可能被优先纳入下一阶段的开发计划。

## 7. 用户反馈摘要
从 Issue 详情中可以提炼出以下用户画像与痛点：

*   **痛点**: **混合配置带来的安全焦虑**。用户对将 API Key 混合在 `config.json` 中感到不安（Issue #373），迫切需要类似 `~/.zeptoclaw/credentials` 的隔离机制。
*   **痛点**: **长时间运行的不确定性**。用户希望看到任务进度，而不是面对一个“黑盒”等待（Issue #372）。
*   **场景**: **容器化开发环境**。贡献者正在积极使用 Rootless Podman 等更安全的容器技术（Issue #369），说明 ZeptoClaw 的用户群体技术栈较新，对安全开发环境有强需求。

## 8. 待处理积压
*   **依赖更新积压**: 目前有 **14 个待合并的 PR** 来自 Dependabot，涉及 Rust (toml, rustyline, tempfile, zip), JavaScript (astro, starlight, types/node) 和 Github Actions。
    *   **建议**: 维护者应尽快批量审查并合并这些低风险的依赖更新，以减少技术债务，确保项目安全性。
*   **未响应的功能 PR**: **PR #287 (Dev tools for consistent pre-PR state)** 自 3月9日开启至今仍未合并。
    *   **建议**: 这是一个提升贡献者体验的重要工具，建议维护者尽快 Review 或给出修改意见，避免长期搁置影响贡献者积极性。

---
**分析师总结**: ZeptoClaw 正处于从“功能实现”向“安全与标准化”转型的关键期。虽然今日代码合并量不大，但信号明确：项目正在加固安全底座并优化开发者体验。解决 #368 的 Base64 Bug 和合并积压的 Dependabot PR 应是当务之急。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-18)

**分析师**: AI Open Source Analyst
**项目**: EasyClaw / RivonClaw
**数据源**: github.com/gaoyangz77/easyclaw

---

## 1. 今日速览
EasyClaw 项目今日处于**高发布活跃度但伴随显著稳定性风险**的状态。项目在 24 小时内连续推出了 `v1.6.8` 和 `v1.7.0` 两个版本，显示出维护者快速迭代的意愿，重点解决了 macOS 的安装体验并推送了新功能。然而，社区反馈显示 Windows 平台的 **v1.7.0 存在严重的连接性问题**，导致部分用户无法正常使用，已成为当前的舆情焦点。尽管 Issue 处理速度较快（闭环率 66%），但新引入的回归问题亟待修复。

## 2. 版本发布
过去 24 小时内发布了 2 个新版本，均包含针对 macOS 安全机制的说明：

*   **v1.7.0 (RivonClaw v1.7.0)**
    *   **链接**: [Release v1.7.0](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.0)
    *   **更新重点**: 这是一个功能更新版本。虽然 Release Notes 主要提及了 macOS 的安装指引，但从 Issue #18 和 #19 的反馈来看，该版本变更了底层的连接或配置逻辑。
*   **v1.6.8 (EasyClaw v1.6.8)**
    *   **链接**: [Release v1.6.8](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.8)
    *   **通用说明**: 针对 macOS Gatekeeper 拦截未签名应用的问题，详细提供了“应用已损坏”的修复指南，降低了 macOS 用户的上手门槛。

## 3. 项目进展
今日共有 1 个 PR 更新，主要涉及用户体验优化：

*   **[PR #15] fix: app icon in macos dock and system tray**
    *   **状态**: Closed (已合并/关闭)
    *   **链接**: [gaoyangz77/rivonclaw PR #15](https://github.com/gaoyangz77/rivonclaw/pull/15)
    *   **进展分析**: 该 PR 修复了 macOS 环境下程序坞和系统托盘的图标显示问题。这一细节优化通常意味着项目正在从“功能可用”向“产品化/精致化”过渡，有助于提升桌面端的原生体验。

## 4. 社区热点
今日社区讨论集中在 Windows 平台 v1.7.0 的可用性危机上：

*   **[Issue #18] [CLOSED] windows系统，从1.6.8升级到1.7.0后链接不上了**
    *   **热度**: 👍 0 | 评论: 4
    *   **链接**: [gaoyangz77/rivonclaw Issue #18](https://github.com/gaoyangz77/rivonclaw/issues/18)
    *   **分析**: 该 Issue 反映了升级导致的连接中断。虽然已被关闭（可能通过回退版本或指导操作解决），但它是 v1.7.0 早期严重 Bug 的直接证据。

*   **[Issue #19] [OPEN] Windows11在官网安装了1.7.0，依旧卡在连接中这里，无法使用**
    *   **热度**: 👍 0 | 评论: 0 (今日新建)
    *   **链接**: [gaoyangz77/rivonclaw Issue #19](https://github.com/gaoyangz77/rivonclaw/issues/19)
    *   **分析**: 这是 Issue #18 的延续，表明 v1.7.0 在 Windows 11 环境下存在普遍的连接阻塞问题，且并非个例。截图显示 API 配置无误但服务依然无法连通，这是目前阻碍用户留存的最大障碍。

## 5. Bug 与稳定性
今日报告的 Bug 集中在客户端核心连接功能，属于**严重级别**：

1.  **[严重] Windows v1.7.0 连接失败**
    *   **描述**: 用户在 Windows 10/11 上安装 v1.7.0 后，应用一直处于“Connecting...”状态，无法进入聊天界面。用户尝试重配 API 和重启均无效。
    *   **受影响版本**: v1.7.0
    *   **状态**: Issue #19 仍处于 Open 状态，尚无官方修复 PR 或临时解决方案。这极可能是一个阻碍性回归 Bug。

## 6. 功能请求与路线图信号
*   **[Feature Request] Windows 启动与打包教程**
    *   **链接**: [gaoyangz77/rivonclaw Issue #17](https://github.com/gaoyangz77/rivonclaw/issues/17)
    *   **信号**: 开发者用户希望了解如何从源码构建 Windows 版本。这表明项目在开发者文档方面存在缺失，同时也侧面印证了官方分发的 v1.7.0 存在问题，迫使用户尝试自行构建。

## 7. 用户反馈摘要
*   **核心痛点**: **“连不上”** 是今日最高频的反馈。Windows 用户对 v1.7.0 的不稳定性表示强烈不满，认为其破坏了原本 v1.6.8 的可用性。
*   **环境差异**: macOS 用户主要关注“文件已损坏”的提示（属系统安全策略，非代码 Bug），而 Windows 用户则面临实质性的网络/服务连接逻辑故障。
*   **开发者诉求**: 部分技术用户不满足于仅使用二进制文件，希望获得源码构建的自主权（Issue #17）。

## 8. 待处理积压
*   **⚠️ [紧急] Issue #19**: 目前唯一的 Open 状态 Bug 报告，涉及 v1.7.0 在 Windows 11 下的核心功能失效。建议维护者立即介入排查，或暂时回退 Windows 端的发布版本至 v1.6.8，避免更多新用户流失。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*