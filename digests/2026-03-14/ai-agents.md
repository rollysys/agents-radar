# OpenClaw 生态日报 2026-03-14

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-14 02:22 UTC

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

# OpenClaw 项目动态日报 (2026-03-14)

你好！我是 OpenClaw 开源项目分析师。以下是基于 2026年3月14日 GitHub 数据生成的项目日报。

---

## 1. 今日速览

OpenClaw 项目今日呈现出**极其活跃但伴随阵痛**的状态。随着重磅版本 **v2026.3.12** 的发布，项目引入了全新的 Control UI (dashboard-v2) 和 GPT-5.4 支持，导致社区互动量激增，过去 24 小时内 Issues 和 PRs 更新均达到 500 条上限。

然而，这次重大更新也带来了显著的**回归问题**，大量用户（尤其是 Raspberry Pi 和 4GB 内存服务器的用户）报告了严重的**内存泄漏 (OOM)** 和 **UI 崩溃**。尽管社区贡献活跃（新开 431 条 Issue，355 条 PR 待合并），但核心稳定性的下降是目前最紧迫的挑战，维护团队正面临巨大的修复压力。

---

## 2. 版本发布

### ✨ v2026.3.12 (发布于 2026-03-12，今日持续发酵)

**更新亮点：**
- **Control UI / dashboard-v2 重构**: 这是本次更新的核心。引入了模块化视图，包含命令面板、移动端底部标签页，以及更强大的聊天工具（斜杠命令、搜索、导出、置顶消息）。
- **模型支持**: 集成了 **OpenAI GPT-5.4**。

**破坏性变更与迁移风险：**
- **极高**。本次更新被认为是近期稳定性最差的一个版本，主要集中在以下几个方面：
    - **内存暴涨**: 在低配置设备（如树莓派、4GB RAM 服务器）上极易触发 OOM 崩溃。
    - **连接性中断**: WhatsApp、Discord 等通道出现连接状态与实际收发消息不同步的问题。
    - **配置校验**: 旧的配置格式（特别是自定义 Provider 和 Plugins）可能在新版校验逻辑下报错，导致网关无法启动。

---

## 3. 项目进展

今日共有 **145 个 PR 被合并/关闭**，主要集中在修复 v2026.3.12 带来的回归问题以及完善新 UI 的边缘情况。

- **稳定性修复**:
    - PR #45237: 修复了 OpenAI Codex 服务端错误导致 Agent 直接停止的问题，将其归类为可重试错误，增强了故障转移能力。
    - PR #45640: 修正了 macOS 应用的 Node.js 最低版本要求（从 22.0.0 对齐至 22.12.0），避免了版本不匹配导致的启动失败。
    - PR #45266: 修复了插件注册表在热加载后路由丢失 (404) 的问题，改为每次请求实时读取。

- **体验优化**:
    - PR #45295: 优化了 Telegram 群组中的媒体下载错误提示，避免了不必要的噪音。
    - PR #45601: 修复了 Discord 回复中代码块缩进丢失的问题。

---

## 4. 社区热点

以下 Issue 引发了最激烈的讨论，反映了用户的真实焦虑：

1.  **[OPEN] 国际化 (i18n) 支持 (#3460)**
    - **评论数**: 101
    - **分析**: 这是长期排在榜首的需求。虽然官方表示目前带宽不足，但社区迫切希望 OpenClaw 能支持多语言。这是扩大用户基数的关键瓶颈。
    
2.  **[OPEN] Linux/Windows 原生客户端需求 (#75)**
    - **评论数**: 38 | 👍: 60
    - **分析**: 仅次于 i18n 的高票需求。目前仅有 macOS 和移动端，桌面端覆盖不全限制了开发者群体的采纳。

3.  **[OPEN] UI 聊天窗口无法打开 (#45471)**
    - **评论数**: 33
    - **分析**: v2026.3.12 的新 UI 回归 Bug，用户升级后无法正常使用聊天功能，严重影响了基础工作流。

4.  **[OPEN] Telegram Reaction 通知失效 (#45289)**
    - **评论数**: 16
    - **分析**: 涉及 Telegram API 细节处理，用户配置了 `reactionNotifications` 但无法工作，显示与实际行为的不一致。

---

## 5. Bug 与稳定性

v2026.3.12 版本引入了大量**严重 (Critical)** 级别的回归问题：

| 严重度 | 问题 | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **Critical** | **[Bug] 内存泄漏与 OOM (#45064, #41778, #45440)** | 升级后执行基本命令（如 `gateway status`）或发送消息时 JS 堆内存溢出。在树莓派和 4GB 服务器上必现。 | 待修复 |
| **Critical** | **[Bug] WhatsApp 通道消息投递失败 (#45474, #45171)** | 状态显示已连接，但收不到消息（单勾）或发不出消息，陷入 440/401 重连循环。 | 待修复 |
| **High** | **[Bug] Control UI 设备身份验证死循环 (#39611, #44967)** | 页面导航后 WebSocket 断开，报错 "device identity required"，即使配置了禁用设备验证也无效。 | 待修复 |
| **High** | **[Bug] 插件加载导致 Webhook 404 (#45445)** | 插件注册表交换期间 httpRoutes 丢失，导致 Google Chat/LINE 等 Webhook 失效。 | 待修复 |
| **Medium** | **[Bug] Discord WebSocket 每 10 分钟超时 (#45485)** | 内部重连逻辑不稳定，导致机器人频繁掉线。 | 待修复 |
| **Medium** | **[Bug] 沙箱文件写入 0 字节 (#44964)** | `write` 工具返回成功但实际写入空文件，影响 Agent 修改代码的能力。 | 待修复 |

---

## 6. 功能请求与路线图信号

从今日的 Issues 和 PRs 中，我们可以窥见项目接下来的演进方向：

- **隐私过滤**: PR #45619 正在开发 LLM 流量隐私检测与替换过滤器。鉴于 OpenClaw 常对接第三方 LLM，这是一个高价值的安全特性。
- **文件系统权限细化**: PR #42653 提出了 `path-scoped RWX permissions`，旨在限制 Agent 对文件系统的访问范围（如限制只能访问 `~/workspace`），这对生产环境部署至关重要。
- **模型集成**: Issue #27009 呼吁支持 OpenCode Go 订阅（包含 Kimi K2.5 等模型），结合 Issue #44269 提到的 Kimi 模型工具调用问题，**对国产/开源权重的模型支持**显然是下一个热点。
- **架构增强**: Issue #9030 提出了 "Discriminator Layer" 中间件架构，旨在解决 Agent 幻觉和安全校验的瓶颈，这可能是一个长期的架构重构信号。

---

## 7. 用户反馈摘要

从海量 Issue 评论中提炼出的用户情绪关键词：

- **挫败感**: "升级后直接崩了" (OOM)、"UI 变得不可用"。用户对 v2026.3.12 的不稳定性感到非常沮丧，许多人被迫回退到旧版本。
- **困惑**: 关于 "device identity required" 的错误让很多局域网用户感到莫名其妙，认证逻辑的变更缺乏平滑过渡。
- **期待**: 尽管Bug多，但对 **Dashboard-v2** 的设计理念（特别是命令面板和移动端优化）给予了高度评价，认为这是迈向成熟产品的关键一步。
- **痛点**: 配置文件（尤其是模型和插件配置）的校验过于严格或报错模糊，导致用户难以排查升级后的启动失败原因。

---

## 8. 待处理积压

以下重要 Issue 长期未得到根本解决，建议维护者优先关注：

1.  **Issue #3460 (i18n)**: 社区呼声极高，建议尽快制定国际化路线图或寻求社区 PR 支持。
2.  **Issue #75 (Linux/Windows Apps)**: 桌面端缺失严重阻碍了开发者群体的普及，建议考虑 Electron 或 Tauri 等跨平台方案。
3.  **Issue #14593 (Docker Skill Install)**: Docker 环境下依赖 `brew` 的 Skill 安装失败，这是自动化部署中的常见阻碍，需要修正 Docker 镜像的基础设施。

---

**分析师总结**: OpenClaw 正处于一个**激进的转型期**。v2026.3.12 带来了令人兴奋的现代 UI 和顶级模型支持，但同时也牺牲了过多的稳定性。接下来的 24-48 小时将是关键，项目方需要迅速发布补丁修复内存泄漏和认证回归，否则社区信任度可能会受损。建议用户暂时**不要在生产环境盲目升级**至 v2026.3.12，等待 v2026.3.13 修复版。

---

## 横向生态对比

# 2026-03-14 AI 智能体与个人助手开源生态横向对比分析报告

## 1. 生态全景

当前开源 AI 智能体生态正处于 **"架构重构与规模化阵痛并存"** 的关键转型期。以 **OpenClaw** 为首的头部项目正激进地向现代 UI 和顶级模型（GPT-5.4）靠拢，但普遍遭遇了严重的稳定性回归（OOM、连接中断），显示出快速迭代带来的工程挑战。与此同时，第二梯队的 **Zeroclaw**、**NanoBot** 和 **IronClaw** 等项目正在快速补齐短板，通过插件化架构解耦核心功能，并积极适配国产及本地模型，试图在稳定性和兼容性上建立差异化优势。

## 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PRs (24h) | Release 情况 | 健康度/状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 更新 500+ (上限) | 更新 500+ (上限) | v2026.3.12 (3天前) | ⚠️ **高风险**: 核心版本引入严重 OOM/崩溃回归，社区处于焦躁状态。 |
| **CoPaw** | 活跃 41 / 更新 50 | 更新 39 (合并 21) | 无 (v0.0.7) | 🔥 **高热度**: 功能迭代快，但性能瓶颈（CPU/内存）和长上下文问题是痛点。 |
| **Zeroclaw** | 关闭 40 | 合并 42 | **3 个** (Beta 系列) | 🚀 **高迭代**: 处于分支迁移后的剧烈修复期，高频发布补丁，文档国际化完善。 |
| **TinyClaw** | 活跃较低 | 合并 4 | **v0.0.13** | ✅ **稳步前进**: 专注于核心配置 UI 和记忆系统增强，正进行品牌重塑。 |
| **NanoBot** | 更新 25 | 合并 116 | 无 | 🛠️ **架构重构**: 后端架构快速向 Provider/Channel 插件化演进，合并量极大。 |
| **IronClaw** | 更新 25 | 更新 50 | 无 | 🔒 **安全加固**: 聚焦多租户隔离与 MCP 安全层，处于重大版本积蓄期。 |
| **PicoClaw** | 更新 31 | 更新 82 | Nightly | ⚠️ **安全预警**: 曝出多个高危安全配置漏洞，但在 Agent 身份定义上有创新。 |
| **NullClaw** | 更新 22 | 合并 28 | **v2026.3.14** | 🐛 **修复导向**: 专注于修复前版本回归，扩展 Teams/Tunnel 集成。 |
| **LobsterAI** | 更新 10 | 合并 7 | 无 | 🔌 **深度集成**: 架构大改，剥离沙箱转向深度依赖 OpenClaw 生态。 |
| **ZeptoClaw** | 低 | 合并 3 | 无 | 🛡️ **质量优先**: 重点加固安全模型与 CLI 交互体验。 |
| **Moltis** | 更新 6 | 合并 5 | 无 | 📝 **体验优化**: 专注于 Web 引导流程和本地模型兼容性微调。 |
| **EasyClaw** | 0 | 0 | 无 | 💤 **静默**: 过去 24 小时无活动。 |

## 3. OpenClaw 在生态中的定位

作为生态的 **核心参照系**，OpenClaw 的动向直接定义了行业的"前沿"与"痛点"。

*   **核心优势**：**功能前瞻性**。它是首个集成 GPT-5.4 并重构 Dashboard UI 的项目，代表了用户体验的制高点。其社区体量巨大，反馈几乎瞬间触达上限。
*   **技术路线**：**激进集成 vs. 稳定性**。相比于 Zeroclaw 或 IronClaw 正在做的插件化解耦，OpenClaw 倾向于在核心代码库中进行大规模重构，这导致了近期 v2026.3.12 的"翻车"（OOM、UI 崩溃）。
*   **社区规模**：**断层式领先**。OpenClaw 的单日 Issues/PRs 互动量（500+）远超其他项目（通常在 20-50 区间），是生态流量的绝对中心。
*   **衍生影响**：**LobsterAI** 等项目正在通过移除自身沙箱、深度适配 OpenClaw 的方式，将自己变为 OpenClaw 的"增强版插件"或"轻量级客户端"，这表明 OpenClaw 正在成为事实上的"内核"标准。

## 4. 共同关注的技术方向

1.  **本地模型兼容性**
    *   **涉及项目**: OpenClaw, LobsterAI, Moltis, CoPaw, Zeroclaw.
    *   **诉求**: 随着隐私需求上升，各项目均在修复 Ollama/Qwen/Kimi 等本地或国产模型的接入问题。主要痛点在于非标准 API 的 `tool_choice` 支持和系统提示词顺序限制（Moltis #317, LobsterAI #112）。
2.  **Agent 记忆增强**
    *   **涉及项目**: NanoClaw, TinyClaw, CoPaw, PicoClaw.
    *   **诉求**: 从简单的向量检索转向**分层记忆**（TinyClaw）和**混合检索**（NanoClaw 的 LanceDB Pro）。社区正在积极探索如何让 Agent 跨会话保留知识。
3.  **多通道/插件化架构**
    *   **涉及项目**: NanoBot, IronClaw, Zeroclaw.
    *   **诉求**: 为了解决维护负担，各项目纷纷将 Channel（飞书/钉钉/WhatsApp）和 Provider（模型后端）从核心代码剥离为插件，通过 Entry Points 或 WASM 实现。
4.  **安全与权限控制**
    *   **涉及项目**: ZeptoClaw, PicoClaw, IronClaw.
    *   **诉求**: 默认"自主+全放行"的配置正在被抛弃（ZeptoClaw #353）。社区强烈要求更细粒度的文件系统权限和交互式批准流程，以及防止 Prompt 注入的清洗机制。

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键技术差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 全能型个人助手 | 早期采用者、极客 | 最新模型支持、现代 Dashboard，但近期稳定性差。 |
| **LobsterAI** | OpenClaw 增强层 | OpenClaw 现有用户 | 深度绑定 OpenClaw，提供更好的 MCP Bridge 和本地执行优化。 |
| **IronClaw** | 企业级/多租户 | 开发者、企业 | 侧重多租户隔离、安全审计、WASM 插件化。 |
| **NanoBot** | 轻量级/Pythonic | Python 开发者 | 纯 Python 生态，强调 `Soul.md` 定制化和快速原型开发。 |
| **CoPaw** | 多渠道接入 | 团队协作场景 | 强调多平台支持，正在攻克性能瓶颈和长上下文问题。 |
| **ZeptoClaw** | 安全 CLI Agent | 终端重度用户 | 极致的 CLI 流式体验，强调安全批准流程。 |

## 6. 社区热度与成熟度

*   **快速迭代/动荡期**:
    *   **OpenClaw**: 处于发布后的"救火"阶段，活跃度极高但满意度低。
    *   **Zeroclaw**: 处于分支迁移和功能恢复的阵痛期，发布频率极高。
*   **架构重塑期**:
    *   **NanoBot, IronClaw, LobsterAI**: 代码变更量大，正在重构底层以适应插件化或深度集成，表面功能更新较缓，但在积蓄力量。
*   **功能完善/质量巩固期**:
    *   **CoPaw, TinyClaw, ZeptoClaw**: 发布了相对稳定的版本，正在根据反馈修补漏洞（性能、UI、安全），处于上升期。
*   **停滞/低活跃期**:
    *   **EasyClaw**: 无活动信号。

## 7. 值得关注的趋势信号

1.  **回归工程现实主义**:
    *   开源社区正在为前一段时间的"功能大跃进"买单。OpenClaw 的 OOM 事件和各项目对 Ollama 兼容性的频繁修复表明，**资源消耗优化**和**非标模型适配**将是下一阶段的重点。
2.  **"安全"成为默认选项**:
    *   从 ZeptoClaw 的交互式批准到 PicoClaw 曝出的安全漏洞，社区正在反思 Agent 的自主权边界。未来的趋势是 **"Ask for permission"（请求许可）** 而非 **"Act and apologize"（先斩后奏）**。
3.  **MCP (Model Context Protocol) 标准化加速**:
    *   LobsterAI 和 IronClaw 均在大力投入 MCP Bridge。这预示着 AI 助手正在从"内置技能"转向"协议互联"，通过 MCP 连接外部工具链将成为主流架构。
4.  **国产/开源权重模型的工具调用适配**:
    *   大量 Issue 提到 Kimi K2.5、Qwen 等模型。这些模型虽然便宜且强大，但在 Function Calling 格式上与 OpenAI 存在细微差异。谁能最先解决这些"长尾兼容性"问题（如 Moltis #317），谁就能在特定市场获得优势。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

这里是 **NanoBot** 项目 2026-03-14 的动态日报。

### 1. 今日速览
NanoBot 今日保持极高的开发活跃度，社区贡献呈现井喷态势。过去 24 小时内共有 **155 个 PR 更新**（单日更新量显著），其中 **116 个 PR 被合并或关闭**，表明核心团队正在积极审查代码并推进功能迭代。虽然今日无新版本 Release 发布，但大量功能增强（如通道插件化、Provider 插件化）和 Bug 修复已合入主分支，预示着下一个版本将包含重大架构升级。Issues 板块共有 **25 条更新**，主要集中在对多模型兼容性、上下文溢出及子 Agent 可观测性的讨论。

### 2. 版本发布
**无**。
*注：尽管无正式 Release，但合入的代码显示项目正处于从单体架构向插件化架构（Provider/Channel 插件化）的快速演进期。*

### 3. 项目进展
今日共有 116 个 PR 被合并/关闭，重点推进了以下架构改进与修复：

*   **架构重构：Provider 与 Channel 插件化**
    *   合并了 Provider 插件化机制的相关修复，允许通过 Python Entry Points 动态扩展模型提供层，解耦了对特定模型（如阿里云百炼、Ollama）的硬编码依赖。
    *   合并了 Channel 插件架构（#1984, #1982 相关修复），将 11 个内置通道的配置从核心 Schema 中解耦，支持第三方通过 `pip install` 安装新的通信通道。
*   **稳定性修复：Memory 机制**
    *   合并了 #1909，强制在 Memory consolidation（记忆整合）阶段设置 `tool_choice="required"`，修复了 LLM 可能跳过 `save_memory` 调用导致记忆丢失的问题（关联 Issue #1931）。
*   **生态修复**
    *   合并了企业微信 SDK 的升级（#1981），修复了重复接收循环和心跳超时问题。
    *   修复了 Ollama 本地模型连接时的 API Key 验证错误（#1983）。

### 4. 社区热点
今日讨论最活跃的议题集中在 **Agent 的可观测性** 与 **多模型兼容性**：

1.  **Issue #1955 [OPEN]: 子 Agent 执行过程的可观测性**
    *   **热度**：9 条评论
    *   **分析**：用户反馈主 Agent 执行过程透明，但子 Agent（sub-agent）执行时是黑盒。这是一个核心体验痛点，随着 Agent 框架复杂度增加，开发者迫切需要多级联调的可见性。
2.  **Issue #1931 [CLOSED]: Memory consolidation 失败**
    *   **热度**：8 条评论
    *   **分析**：关于 LLM 在记忆整合时未调用保存工具的讨论。该问题已在 PR #1909 中通过强制工具调用修复，展示了社区反馈到修复的高效闭环。
3.  **Issue #1822 [OPEN]: 对 Nvidia 模型的支持**
    *   **热度**：7 条评论
    *   **分析**：用户指出 NanoBot 最近取消了对 Nvidia 模型的支持，呼吁恢复或改进兼容性。
4.  **PR #1990 [OPEN]: 飞书多 Bot 群组感知**
    *   **热度**：新提案
    *   **分析**：针对团队场景，提出在飞书群组中多 Bot 共存的感知与历史记录同步功能，反映了 NanoBot 正从个人助手向团队协作助手拓展的趋势。

### 5. Bug 与稳定性
今日报告的关键 Bug 主要涉及**长上下文溢出**和**特定模型兼容性**：

*   **严重**
    *   **Issue #1979**: 长对话导致上下文窗口溢出，LLM 调用彻底失败。目前尚无修复 PR，这是一个影响长期记忆功能的关键稳定性问题。
    *   **Issue #1948**: `exec` 工具在运行 npx/npm 时无法写入 `/tmp`，提示 "Read-only file system"，阻碍了基于 Node.js 的 Skill 开发。

*   **中等**
    *   **Issue #1927**: 阿里云 DashScope 不支持 `tool_choice="required"`，导致记忆归档失败。需针对特定 Provider 做降级处理。
    *   **Issue #1487**: Qwen 模型调用 PDF 生成技能时报错 "function.arguments must be in JSON format"，属于模型输出格式与框架解析的不兼容。
    *   **Issue #1937**: Windows 平台 `/restart` 命令路径错误（已修复/Closed）。

### 6. 功能请求与路线图信号
结合用户请求与提交的 PR，以下功能极有可能在近期纳入主分支：

*   **动态运行时状态监控**：PR #1985 提议增加 `/status` 命令以在聊天中查看运行时诊断信息，响应了用户对运维可视化的需求。
*   **Ollama 本地模型无缝接入**：PR #1983 修复了本地模型无 API Key 的报错，进一步巩固了 Privacy-first（隐私优先）和本地部署的场景。
*   **多模态与语音转录增强**：PR #1680 正在推进 Mistral Provider 及通用的语音转录服务，表明项目正在向语音交互能力扩展。
*   **SearXNG 搜索后端**：Issue #927 呼吁去中心化搜索替代 Brave，相关 PR 正在讨论中，显示出社区对去中心化工具链的偏好。

### 7. 用户反馈摘要
*   **痛点**：用户对 **"配置复杂度"** 和 **"特定模型的细微差异"** 感到头疼。例如，DashScope 和 Ollama 等非 OpenAI 标准的实现经常因为 `tool_choice` 或 API Key 格式问题导致运行中断（Issue #1947, #1927）。
*   **场景**：用户正尝试将 NanoBot 用于 **复杂的团队协作**（飞书多 Bot 场景 PR #1990）以及 **长期运行的自动化任务**（Issue #1979 长上下文）。
*   **评价**：用户称赞项目的轻量级和 `Soul.md` 的可定制性（Issue #1977），但也指出在处理复杂任务时，Agent 的 **黑盒执行过程** 令人焦虑（Issue #1955）。

### 8. 待处理积压
*   **CI/CD 缺失**：Issue #1915 提议引入持续集成（CI）以保证长期维护质量，目前尚待核心团队响应。
*   **Windows 兼容性**：虽然 #1937 关闭，但仍有若干关于 Windows 路径和环境问题的报告，建议加强跨平台测试。
*   **上下文管理策略**：Issue #1979 暴露了当前上下文管理在面对超长对话时的脆弱性，需要引入更智能的滑动窗口或摘要策略，而非简单的截断。

---
*以上数据基于 2026-03-14 GitHub 公开数据分析生成。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

这里是 **Zeroclaw** 项目 2026-03-14 的动态日报。

---

# 📊 Zeroclaw 项目日报 (2026-03-14)

### 1. 今日速览
Zeroclaw 今日呈现**极高的维护活跃度**，项目正处于从分支 `main` 迁移至 `master` 后的剧烈调整期。过去 24 小时内，团队不仅发布了 **3 个新版本** (v0.1.9-beta 系列)，还惊人地关闭了 **40 个 Issues** 并合并了 **42 个 PRs**。开发重心主要集中在修复分支迁移导致的功能丢失（如 MCP、Matrix）、完善国际化文档（支持 30 种语言）以及修复 Windows 平台的安装与运行问题。虽然社区对分支切换带来的功能回归表示了担忧，但核心团队通过高频的补丁发布展示了快速响应能力。

### 2. 版本发布
今日连续发布了三个 Beta 版本，显示出团队正在快速迭代修复关键问题：

*   **[v0.1.9-beta.141](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.9-beta.141)**
    *   **重点修复**：恢复了对旧版安装脚本路径的支持，并修复了文档中安装脚本 URL 指向错误的问题（由 `main` 改为 `master`）。
    *   **CI/CD**：增加了 Windows (`x86_64-pc-windows-msvc`) 到 PR 和 CI 构建矩阵中，强化了跨平台测试。

*   **[v0.1.9-beta.140](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.9-beta.140)**
    *   **国际化 (i18n)**：重大更新，文档中心新增支持 **30 种语言**，并完整翻译了中文文档。
    *   **影响**：极大地降低了全球开发者的接入门槛。

*   **[v0.1.9-beta.136](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.9-beta.136)**
    *   **兼容性**：为旧版浏览器添加了 `crypto.randomUUID` 的回退支持。
    *   **模型适配**：修复了对不支持 `reasoning_enabled` 的 Ollama 模型的处理逻辑。

### 3. 项目进展
今日合并的 PR 极多，主要围绕**稳定性恢复**和**功能增强**，项目整体向前迈出了一大步：

*   **安装与部署修复**：PR [#3349](https://github.com/zeroclaw-labs/zeroclaw/pull/3349) 和 [#3352](https://github.com/zeroclaw-labs/zeroclaw/pull/3352) 修复了因分支重命名导致的 404 安装错误，确保了新用户的顺畅接入。
*   **Windows 体验优化**：PR [#3353](https://github.com/zeroclaw-labs/zeroclaw/pull/3353) 解决了双击 exe 闪退的问题，增加了启动引导提示；PR [#3449](https://github.com/zeroclaw-labs/zeroclaw/pull/3449) 正式将 Windows 纳入 CI 构建流程。
*   **功能增强**：
    *   **Cron 历史**：PR [#3376](https://github.com/zeroclaw-labs/zeroclaw/pull/3376) 在 API 和仪表盘中添加了 Cron 运行历史记录功能。
    *   **Docker 工具链**：PR [#3372](https://github.com/zeroclaw-labs/zeroclaw/pull/3372) 提供了包含 Shell 的 Docker 镜像目标，解决了官方 Distroless 镜像无法执行命令行工具的痛点。
*   **Agent 能力**：PR [#2473](https://github.com/zeroclaw-labs/zeroclaw/pull/2473) 增强了记忆检索功能，引入了多查询关键词扩展。

### 4. 社区热点
今日讨论最热烈的 Issue 集中在**分支策略变更引发的混乱**上：

*   **[Issue #3131](https://github.com/zeroclaw-labs/zeroclaw/issues/3131) [Branch policy clarification]** (👍 4)
    *   **诉求**：社区对 `master`/`main`/`dev` 分支的分化感到困惑，请求明确权威代码源。
    *   **分析**：这反映了项目架构调整期间沟通的滞后，维护者需尽快更新 CONTRIBUTING 文档。
*   **[Issue #2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953) [Bug]: Add `channel-matrix` flag** (👍 2)
    *   **诉求**：用户指出官方构建版本缺少 Matrix 频道标志，导致无法使用该功能。这实际上与 Issue #3397 提到的功能丢失属于同一类问题。

### 5. Bug 与稳定性
今日报告了多个严重级别的 Bug，主要涉及架构变更导致的回归：

*   **🔴 严重 (S0 - 功能丢失/阻断)**
    *   **[Issue #3397](https://github.com/zeroclaw-labs/zeroclaw/issues/3397)**: 切换到 `master` 分支后，大量 Feature 丢失（如 MCP, agent_ipc）。**状态：已关闭**（推测已在最新版修复）。
    *   **[Issue #2499](https://github.com/zeroclaw-labs/zeroclaw/issues/2499)**: Win11 双击闪退。**状态：已关闭**（通过 PR #3353 修复，增加了暂停提示）。
*   **🟠 中等 (S1 - 工作流受阻)**
    *   **[Issue #3452](https://github.com/zeroclaw-labs/zeroclaw/issues/3452)**: Master 分支在 32 位架构上编译失败（`AtomicU32` 未声明）。**状态：Open**（这是一个新引入的回归 Bug）。
    *   **[Issue #3425](https://github.com/zeroclaw-labs/zeroclaw/issues/3425)**: Matrix Channel 编译失败。
    *   **[Issue #2693](https://github.com/zeroclaw-labs/zeroclaw/issues/2693)**: Mistral 模型工具调用报 422 错误。

### 6. 功能请求与路线图信号
*   **MCP 增强与发现**：[Issue #3095](https://github.com/zeroclaw-labs/zeroclaw/issues/3095) 提出按需加载 MCP 工具（`tool_search`），以减少上下文浪费。这表明随着 MCP 工具增多，Prompt 长度管理将成为下一阶段的优化重点。
*   **企业级集成**：[Issue #3396](https://github.com/zeroclaw-labs/zeroclaw/issues/3396) 呼吁原生支持企业微信 (WeCom)，显示 Zeroclaw 正在向企业协作场景渗透。
*   **动态节点发现**：[Issue #3093](https://github.com/zeroclaw-labs/zeroclaw/issues/3093) 提议支持类似 OpenClaw 的动态节点发现机制，暗示项目正向分布式/多端协同架构演进。

### 7. 用户反馈摘要
*   **痛点**：用户对**分支切换导致的 Features 缺失**感到非常沮丧，特别是 MCP 和 Matrix 功能的消失。此外，Windows 上的安装体验（闪退、路径问题）依然是主要吐槽点。
*   **场景**：大量用户尝试在 Docker 环境中运行 Git 操作或使用命令行工具，但官方镜像缺少 Shell 阻碍了这一 workflows ([Issue #3359](https://github.com/zeroclaw-labs/zeroclaw/issues/3359))。
*   **正面反馈**：用户对完整的中文文档翻译 ([Issue #3429](https://github.com/zeroclaw-labs/zeroclaw/pull/3429)) 表示欢迎。

### 8. 待处理积压
*   **编译阻塞**：[Issue #3452](https://github.com/zeroclaw-labs/zeroclaw/issues/3452) (32位编译失败) 需要立即关注，因为它阻断了特定平台的构建。
*   **功能缺失**：[Issue #2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953) (Matrix Flag 缺失) 虽然活跃但尚无明确的 Fix PR 链接，需确认是否已在近期重构中修复。
*   **长期 PR**：[PR #2017](https://github.com/zeroclaw-labs/zeroclaw/pull/2017) (增加 Avian provider) 自 2 月底开启，至今未合并，建议维护者审查是否有阻塞点。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

您好，我是 AI 智能体与个人 AI 助手领域的项目分析师。基于 2026-03-14 的 GitHub 数据，以下是为您生成的 PicoClaw 项目动态日报。

---

# PicoClaw 项目动态日报 (2026-03-14)

## 1. 今日速览
PicoClaw 今日保持**极高活跃度**，开发重心明显向 **Agent 架构重构** 倾斜。过去 24 小时内共产生 31 条 Issue 更新和 82 条 PR 更新，其中 PR 活跃度（待合并 44，已处理 38）显示出项目正处于高频迭代周期。发布了 `v0.2.3-nightly` 版本，主要集成了最新的代码变更。社区讨论热点集中在 Agent 的身份定义与控制权上，同时安全性和多模态文件处理也是今日的重点关注领域。

## 2. 版本发布
### Nightly Build: `v0.2.3-nightly.20260314.c68b4f39`
- **类型**: 自动化构建
- **状态**: 可能不稳定，仅供测试
- **变更范围**: 对比 `v0.2.3` 版本的主分支全量变更
- **链接**: [Release Page](https://github.com/sipeed/picoclaw/releases/tag/v0.2.3-nightly.20260314.c68b4f39)

## 3. 项目进展
今日共有 **38** 个 PR 被合并或关闭，项目整体在以下方面取得实质性进展：
- **文档与配置**: 合并了关于火山引擎 Coding Plain 配置的文档 PR (#1511)，降低了特定模型的接入门槛。
- **Bug 修复**: 关闭了 QQ Channel 无法区分 Agent (#1242) 和 Skill 安装不全 (#1245) 的问题，提升了多渠道接入的稳定性。
- **架构清理**: 关闭了 Vector Search for Memory 的初期 PR (#90) 和 Anthropic API 404 修复 (#269)，表明相关功能或修复已暂告一段落或合并入主分支。

## 4. 社区热点
今日讨论最活跃的话题集中在 Agent 的底层架构与扩展性：
1.  **Agent 身份定义重构 (#1218)**
    - **热度**: 24 条评论
    - **核心诉求**: 提案引入 `SOUL.md` 和 `AGENT.md` 文件来定义 Agent 的“性格”与“价值观”。社区正在热烈讨论如何通过自然语言而非硬编码配置来塑造 Agent 的“灵魂”，这标志着 PicoClaw 正在探索更深层次的 Agent 拟人化机制。
2.  **Agent Loop 事件驱动改造 (#1316)**
    - **热度**: 9 条评论
    - **核心诉求**: 旨在打破当前 `agent loop` 的黑盒状态。提案要求引入事件驱动、Hooks 和中断机制，以便外部系统（如 UI、监控）能够实时观察、拦截或干预 Agent 的执行过程。这是实现可控 Agent 的关键架构升级。
3.  **飞书文件路径暴露 (#1506)**
    - **热度**: 9 条评论
    - **核心诉求**: 用户希望 Agent 能处理飞书传来的非图片文件（如文档、音频）。目前系统下载后未将本地路径暴露给 Agent，导致无法调用文件处理工具。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，其中**安全性问题**尤为突出，需维护者优先关注：

| 严重程度 | Issue | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **🔴 高** | [#1530](https://github.com/sipeed/picoclaw/issues/1530) | **安全**: Setup 接口默认开启了弱 Token 验证和通配符 Origin，存在攻击面扩大的风险。 | OPEN |
| **🔴 高** | [#1529](https://github.com/sipeed/picoclaw/issues/1529) | **安全**: 公共 Web 模式下若无 IP 白名单限制，Web Console 将直接暴露在公网且无认证。 | OPEN |
| **🔴 高** | [#1525](https://github.com/sipeed/picoclaw/issues/1525) | **安全**: `exec` 工具默认允许远程执行 Shell 命令 (`allow_remote=true`)，这在默认配置下风险过高。 | OPEN |
| **🟡 中** | [#1150](https://github.com/sipeed/picoclaw/issues/1150) | **死锁**: 连接池工厂 Panic 会导致 inflight 条目泄露，造成该目标永久死锁。 | OPEN |
| **🟡 中** | [#1493](https://github.com/sipeed/picoclaw/issues/1493) | **配置**: 新增模型后需重启 Gateway 才能生效，无法热加载。 | OPEN |

## 6. 功能请求与路线图信号
结合 Issues 与 PRs，以下是短期内极可能落地的功能信号：
- **Kimi Coding 模型支持**: PR #1514 正在添加对 Kimi 编程模型的特定 Header 支持，预计很快合入。
- **多媒体文件工具支持**: Issue #1506 与 PR #1516 (Feat: expose local file paths) 遥相呼应，预示着 Agent 即将具备处理用户上传文档/音频的能力。
- **语音 I/O 插件化**: Issue #1503 提出了可插拔的语音输入/输出方案，支持 OpenAI/本地 STT 及 Telegram 语音回复。
- **Agent Steering (控制权)**: PR #1517 正在实现“驾驶”功能，允许用户在 Agent 执行过程中进行干预或重定向，而非被动等待。

## 7. 用户反馈摘要
从 Issue 评论中提炼出的用户核心体验：
- **痛点 - 网络环境依赖**: 用户反馈在使用手机热点联网时，飞书消息接收存在 20 分钟左右的延迟或中断 (#1437)，表明项目在网络波动恢复或特定 NAT 环境下的稳定性有待加强。
- **痛点 - 文档缺失**: 有用户指出当前 README 和 Guides 遗漏了大量 `config.go` 中定义的高级参数 (#1489)，导致需要看源码才能挖掘深层功能。
- **场景 - 隐私敏感**: 多个 Issues (如 #1528) 提到希望可以关闭聊天记录的持久化存储，表明部分用户将其用于敏感对话场景。

## 8. 待处理积压
- **高优先级架构重构**: Meta Issue #1216 (Agent refactor) 仍处于 Open 状态，这是目前项目的核心主线，建议持续关注其关联子任务的进度。
- **长期未决的 Provider 问题**: Issue #528 (Cron 调度问题) 和 #1242 (QQ Binding) 虽然有关闭/更新，但仍需观察修复版本的实际反馈。此外，关于 Mistral 集成的报错 (#1502) 需要Provider 维护者介入。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是为您生成的 2026-03-14 NanoClaw 项目动态日报。

---

# 📊 NanoClaw 项目日报 (2026-03-14)

### 1. 今日速览
NanoClaw 今日维持了极高的社区活跃度，过去24小时内共有 **17 条 Issue 更新** 和 **36 条 PR 更新**。虽然未发布新版本，但社区贡献集中在**稳定性修复**（WhatsApp 崩溃、重复消息）和**核心能力增强**（LanceDB 记忆层、凭证安全）两大方向。值得注意的是，针对 WhatsApp 频道的严重崩溃问题已有对应 PR 提交，同时安全相关的 Web 内容清洗和凭证验证也是今日的开发重点。

### 2. 版本发布
*   **无新版本发布**。

### 3. 项目进展
尽管没有合并主分支的发布，但今日关闭/合并了 **16 个 PR**，主要集中在功能清理和小范围修复，同时有一批高质量的 Feature PR 正在等待 Review：

*   **Web 自动化与浏览器集成**:  PR [#1038](https://github.com/qwibitai/nanoclaw/pull/1038) (Chrome Extension) 虽已关闭，但展示了社区对实时浏览器控制能力的探索。
*   **API 客户端增强**: PR [#1037](https://github.com/qwibitai/nanoclaw/pull/1037) 增加了 Tanren API 的类型化客户端，已被合入，提升了 API 交互的类型安全。
*   **积压处理优化**: PR [#1040](https://github.com/qwibitai/nanoclaw/pull/1040) 修复了消息超过 200 条时的丢弃问题，提升了高负载下的稳定性。

**核心推进指标**:
*   **Stability**: 针对性修复了 WebFetch 的提示词注入风险 (PR [#1035](https://github.com/qwibitai/nanoclaw/pull/1035)) 和 WhatsApp 进程崩溃 (PR [#1050](https://github.com/qwibitai/nanoclaw/pull/1050))。
*   **Extensibility**: 正在审查 Nostr, Signal 等新渠道的集成 PR。

### 4. 社区热点
今日讨论焦点集中在 **Agent 记忆能力** 和 **多渠道接入的稳定性** 上。

*   **[PR #1043] feat: upgrade memory to memory-lancedb-pro**
    *   **链接**: [qwibitai/nanoclaw PR #1043](https://github.com/qwibitai/nanoclaw/pull/1043)
    *   **分析**: 这是一个重大功能升级提议。当前的内存系统仅支持简单的向量检索，该 PR 引入 `memory-lancedb-pro`，提供混合检索（BM25+向量）、重排序和噪音过滤能力。这直接解决了 Agent 在复杂对话中"遗忘"或"检索不准"的痛点。
*   **[PR #1051] feat: WhatsApp channel integration**
    *   **链接**: [qwibitai/nanoclaw/pull/1051](https://github.com/qwibitai/nanoclaw/pull/1051)
    *   **分析**: 社区对 WhatsApp 接入需求极高，该 PR 补全了核心代码，且带动了相关的 Bug 修复讨论（见 Bug 章节）。
*   **[Issue #908] FTS5 conversation indexing**
    *   **链接**: [qwibitai/nanoclaw Issue #908](https://github.com/qwibitai/nanoclaw/issues/908)
    *   **分析**: 另一个关于记忆的高优先级 Issue，提议使用 SQLite FTS5 进行全文索引，与 LanceDB 方案形成互补或竞争，显示出社区对 "Agent 长期记忆" 的强烈诉求。

### 5. Bug 与稳定性
今日报告了多个 **High Priority** 的严重 Bug，主要集中在非 macOS 环境和身份验证环节：

| 严重度 | Issue/PR | 描述 | 状态/修复 |
| :--- | :--- | :--- | :--- |
| **Critical** | **[#1047](https://github.com/qwibitai/nanoclaw/issues/1047)** | **WhatsApp 频道导致服务崩溃**: 在非 macOS 环境（Linux/Headless）扫码或 Session 注销时，代码调用 `process.exit()` 导致整个服务停止。 | **Fix PR**: [#1050](https://github.com/qwibitai/nanoclaw/pull/1050) |
| **High** | **[#1020](https://github.com/qwibitai/nanoclaw/issues/1020)** | **重复消息**: SDK 返回多个结果时，用户会收到两条不同的回复。 | Open |
| **High** | **[#1046](https://github.com/qwibitai/nanoclaw/issues/1046)** | **定时任务无凭证**: 定时任务容器启动时未挂载 MCP 凭证（Gmail/Calendar 等），导致工具静默失败。 | **Fix PR**: [#1049](https://github.com/qwibitai/nanoclaw/pull/1049) |
| **High** | **[#1045](https://github.com/qwibitai/nanoclaw/issues/1045)** | **无效 Token 检测滞后**: Setup 阶段不验证 Token 有效性，直到发第一条消息才报错，用户体验极差。 | **Fix PR**: [#1044](https://github.com/qwibitai/nanoclaw/pull/1044) |
| **Security**| **[#1035](https://github.com/qwibitai/nanoclaw/pull/1035)** | **WebFetch 间接提示词注入**: 外部网页包含恶意指令可能操控 Agent。 | **PR Open** (通过 PostToolUse hook 清洗) |

### 6. 功能请求与路线图信号
*   **Prompt Caching (Issue #1033)**: 用户建议引入 Prompt Caching 以降低 Anthropic API 成本（据称可降 90%）。这符合当前 LLM 成本优化的主流趋势，可能成为下一版本的重点。
*   **BoxLite 沙箱后端 (Issue #520)**: 提议增加基于 micro-VM 的沙箱选项，提升隔离性。虽然目前标记为 Low Priority，但随着安全需求的提升，后续可能被采纳。
*   **Chrome 浏览器控制 (PR #1038)**: 虽然该 PR 已关闭，但实时浏览器控制的需求依然存在，预示着项目可能向更复杂的 RPA（机器人流程自动化）方向发展。

### 7. 用户反馈摘要
从 Issue 评论中提炼出以下核心体验痛点：
*   **"配置像开盲盒"**: 用户反馈 Token 配置错误只能在发送消息时才发现（#1045），希望能有更早的反馈机制。
*   **"Agent 撒谎"**: Issue #829 指出 SOUL.md 缺乏规则防止 Agent 伪造工具调用结果或编造失败理由，导致难以 Debug。
*   **"时间感知缺失"**: Issue #698 提到 Agent 无法仅凭 ISO 时间戳判断"今天是周几"，导致日程安排出错，用户建议在 Prompt 中注入更丰富的时间上下文。
*   **"文档与实际不符"**: 多个 Issue（#447, #527）指出文档中的路径挂载（读写权限）和代码实现不一致，导致操作失败。

### 8. 待处理积压
以下重要 Issue/PR 长期未被合并或响应，建议维护者关注：

*   **[PR #835] 修复 Telegram 多容器消息重复**: 已打开 5 天，状态为 Blocked，需要确认是否影响主分支合并。
    *   链接: [qwibitai/nanoclaw PR #835](https://github.com/qwibitai/nanoclaw/pull/835)
*   **[Issue #411] 间接提示词注入风险**: 2 月底提出的关于安全风险的文档补充请求，优先级虽为 Medium 但涉及安全性。
    *   链接: [qwibitai/nanoclaw Issue #411](https://github.com/qwibitai/nanoclaw/issues/411)
*   **[Issue #753] 注册时名称更新不全**: 影响多 Agent 协作体验的 Bug，标记为 `good first issue`，适合新贡献者认领。
    *   链接: [qwibitai/nanoclaw Issue #753](https://github.com/qwibitai/nanoclaw/issues/753)

---
*分析于: 2026-03-14 | 数据来源: NanoClaw GitHub Repository*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-03-14)

这里是 **NullClaw** 开源项目日报。NullClaw 是一个 AI 智能体与个人 AI 助手框架。今日项目保持极高活跃度，主要是为了修复前几日引入的回归问题并扩展 Channel（通道）支持。

## 1. 今日速览
项目今日处于**高强度维护与迭代**状态。过去24小时内共有 **22 条 Issue 更新** 和 **29 条 PR 更新**，其中 28 条 PR 已合并，代码变更速度极快。发布了 **v2026.3.13** 和 **v2026.3.14** 两个版本，主要集中在修复 WebSocket 连接稳定性、CLI 参数解析错误以及扩展第三方集成（如 Microsoft Teams、Tunnel 支持）。社区方面，用户对钉钉/飞书集成的关注度较高，同时文档缺失（尤其是 Subagents 配置）成为主要痛点。

## 2. 版本发布

### v2026.3.14 (最新)
- **更新重点**：主要修复了内存管理问题和 CLI 工具的参数解析逻辑。
- **详细变更**：
    - **[Fix]** 修复了 `claude-cli` 中会话恢复（resume session）的作用域问题，将其限制在 NullClaw 会话内，防止上下文串扰 ([PR #478](https://github.com/nullclaw/nullclaw/pull/478), [PR #481](https://github.com/nullclaw/nullclaw/pull/481))。
    - **[Fix]** 修复了 `gateway --help` 和 `agent --help` 错误启动运行时的问题 ([Issue #504](https://github.com/nullclaw/nullclaw/issues/504), [PR #511](https://github.com/nullclaw/nullclaw/pull/511))。
    - **[Fix]** 内存管理优化 ([PR #486](https://github.com/nullclaw/nullclaw/pull/486))。

### v2026.3.13
- **更新重点**：修复了 v2026.3.12 引入的严重 WebSocket 回归问题，并增加了模型发现功能。
- **详细变更**：
    - **[Critical Fix]** 修复了 WebSocket TLS 连接过早关闭的严重 Bug，该问题导致 Discord、Lark、DingTalk 等 WSS 通道无法正常工作 ([PR #487](https://github.com/nullclaw/nullclaw/pull/487))。
    - **[Feature]** Onboarding 流程增加 `models.dev` 支持，自动发现最新模型 ([PR #480](https://github.com/nullclaw/nullclaw/pull/480))。
    - **[Docs]** 增加了 Windows 用户使用二进制文件的说明 ([PR #479](https://github.com/nullclaw/nullclaw/pull/479))。

## 3. 项目进展
今日合并了 28 个 PR，显著提升了项目的稳定性与集成能力：

- **新增集成支持**：
    - **Microsoft Teams**: 新增完整的 Microsoft Teams 通道支持，基于 Bot Framework v4 ([PR #438](https://github.com/nullclaw/nullclaw/pull/438))。
    - **Tunnel 集成**: 将 Tunnel 模块（支持 Cloudflare/Ngrok/Tailscale）集成到 Gateway 启动流程，方便本地调试 Webhook ([PR #502](https://github.com/nullclaw/nullclaw/pull/502))。
- **功能增强**：
    - **Slack 交互**: 修复了 Slack HTTP 模式下交互按钮回调失败的问题，实现了跨请求的状态持久化 ([PR #505](https://github.com/nullclaw/nullclaw/pull/505))。
    - **Telegram 绑定**: 支持特定 Telegram 主题的 Agent 绑定 ([PR #450](https://github.com/nullclaw/nullclaw/pull/450))。
    - **SSE 兼容性**: 修复了部分提供商（如 Kimi Code）SSE 数据格式缺少空格导致解析失败的问题 ([PR #509](https://github.com/nullclaw/nullclaw/pull/509))。

## 4. 社区热点
今日讨论最集中的话题是**国内即时通讯软件集成**与**文档完善**：

1.  **钉钉/飞书连接问题**
    -   **[Issue #477](https://github.com/nullclaw/nullclaw/issues/477)**: 用户报告飞书 WebSocket 频繁断开连接。
    -   **[Issue #490](https://github.com/nullclaw/nullclaw/issues/490)** / **[Issue #447](https://github.com/nullclaw/nullclaw/issues/447)**: 钉钉连接成功但显示 "send-only" 或无法联网查询。
    -   *分析*：虽然 v2026.3.13 修复了底层 WebSocket TLS 问题，但用户在配置钉钉/飞书时仍遇到诸多阻碍，尤其是关于接收消息的配置说明不够清晰。

2.  **文档缺失**
    -   **[Issue #508](https://github.com/nullclaw/nullclaw/issues/508)** / **[Issue #496](https://github.com/nullclaw/nullclaw/issues/496)**: 用户强烈请求补充 Subagents 的配置说明与示例。
    -   *分析*：Subagents 是核心高级功能，但缺乏文档导致用户无法上手。尽管已有 [PR #501](https://github.com/nullclaw/nullclaw/pull/501) 补充了生态集成文档，但具体的 Subagents 配置指南仍需完善。

## 5. Bug 与稳定性
今日修复了多个影响使用的 Bug，但也收到了新的错误报告：

-   **已修复**:
    -   **WebSocket TLS 崩溃**: 影响所有 WSS 通道的严重回归 ([PR #487](https://github.com/nullclaw/nullclaw/pull/487))。
    -   **CLI 参数错误**: `--help` 无法正常显示 ([PR #511](https://github.com/nullclaw/nullclaw/pull/511))。
    -   **Slack 按钮无响应**: HTTP 模式下交互失效 ([PR #505](https://github.com/nullclaw/nullclaw/pull/505))。

-   **待处理**:
    -   **[High]** [Issue #506](https://github.com/nullclaw/nullclaw/issues/506): 持续出现 "Network error"，影响正常使用。
    -   **[Medium]** [Issue #413](https://github.com/nullclaw/nullclaw/issues/413): `file_read` tool_call 在特定 Skill 示例下停止响应。
    -   **[Medium]** [Issue #503](https://github.com/nullclaw/nullclaw/issues/503): Telegram 通道忽略语音消息和文件附件。

## 6. 功能请求与路线图信号
-   **Secrets 管理**: [Issue #195](https://github.com/nullclaw/nullclaw/issues/195) 请求更通用的 Secrets 管理方案（非模型 API Keys），目前已有相关讨论但尚无定论。
-   **Qwen OAuth 支持**: [Issue #492](https://github.com/nullclaw/nullclaw/issues/492) 请求原生支持 Qwen CLI 的 OAuth 凭证，类似于 Gemini 的处理方式。
-   **自托管服务**: [Issue #485](https://github.com/nullclaw/nullclaw/issues/485) 提出通过 NullClaw 一键自托管 Invidious 等隐私服务的大胆构想，值得关注。
-   **Tunnel 支持**: 随着 [PR #502](https://github.com/nullclaw/nullclaw/pull/502) 的合并，[Issue #495](https://github.com/nullclaw/nullclaw/issues/495) 提出的 Cloudflare/Nginx Tunnel 需求已得到解决。

## 7. 用户反馈摘要
-   **痛点**：Windows 用户的二进制文件配置虽然有了文档补充 ([PR #489](https://github.com/nullclaw/nullclaw/pull/489))，但仍有人觉得繁琐。
-   **痛点**：Onboarding 步骤中的 "yolo" 模式选项丢失，导致重配置时覆盖了原有高权限设置 ([Issue #493](https://github.com/nullclaw/nullclaw/issues/493))。
-   **满意点**：`models.dev` 的集成 ([PR #480](https://github.com/nullclaw/nullclaw/pull/480)) 获得了开发者的认可，极大简化了模型发现流程。

## 8. 待处理积压
-   **[Doc]** [Issue #508](https://github.com/nullclaw/nullclaw/issues/508): Subagents 配置文档急需补充，这是阻碍用户使用高级功能的主要障碍。
-   **[Bug]** [Issue #477](https://github.com/nullclaw/nullclaw/issues/477): 飞书 WebSocket 断连问题，需要进一步排查是否为底层库或心跳逻辑问题。
-   **[Enhancement]** [Issue #492](https://github.com/nullclaw/nullclaw/issues/492): Qwen OAuth 原生支持，随着国内模型使用率上升，这是一个高价值需求。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是为您生成的 2026-03-14 IronClaw 项目动态日报。

---

# 📊 IronClaw 项目日报 (2026-03-14)

**数据周期**: 过去 24 小时
**分析师**: AI 开源项目观察组

### 1. 今日速览
IronClaw 项目今日呈现出极高的活跃度与快速迭代态势。过去 24 小时内新增了 **50 个 PR 更新**（其中待合并 42 个）和 **25 个 Issue 更新**，显示出核心团队正在为下一个大版本进行密集的功能集成和代码重构。重点动向包括重构 MCP 服务器注册机制、引入“LLM 作为评判者”的安全层，以及对多租户隔离架构的深度探索。尽管无新版本发布，但大量待合并的 XL 级（超大型）PR 预示着一次重大更新即将来临。

### 2. 版本发布
*   **无新版本发布**。
    *   虽然没有正式版发布，但观察到有大量 `staging` 分支的 PR 正在合并，预示着正在为 `v0.19.0` 或类似里程碑版本积攒代码。

### 3. 项目进展
今日共有 **8 个 PR 更新状态**（主要为进入 Review 阶段），核心进展集中在架构重构与功能增强：

*   **架构重构**:
    *   [PR #1144](https://github.com/nearai/ironclaw/pull/1144): 将 MCP 服务器配置从硬编码迁移至 JSON 清单，提升了系统的可扩展性。
    *   [PR #1151](https://github.com/nearai/ironclaw/pull/1151): 重构了所有者和路由作用域，修复了跨通道数据不一致的关键缺陷，显著提升了多用户场景下的隔离性。
*   **核心功能增强**:
    *   [PR #1143](https://github.com/nearai/ironclaw/pull/1143): 引入了 Schema 指导的工具参数强制转换层，修复了 LLM 生成参数与工具定义不匹配的问题。
    *   [PR #1156](https://github.com/nearai/ironclaw/pull/1156): Web UI 增加了“后续建议”交互芯片，引导用户进行下一步操作，提升交互体验。
*   **生态与连接**:
    *   [PR #1110](https://github.com/nearai/ironclaw/pull/1110): 新增飞书 WASM 通道插件，扩展了企业级通讯工具的支持。
    *   [PR #744](https://github.com/nearai/ironclaw/pull/744): 集成 OpenAI Codex 后端，允许 ChatGPT 订阅用户直接使用 IronClaw。

### 4. 社区热点
今日社区讨论主要集中在兼容性、易用性和安全性三个方面：

*   **模型兼容性危机**:
    *   [Issue #728](https://github.com/nearai/ironclaw/issues/728) (👍 3): 关于 Kimi-k2.5 模型的兼容性问题。由于该模型强制要求 Temperature 为 1 且响应结构中缺少 `reasoning_content`，导致 Agent 运行失败。这反映了社区对于非标准 OpenAI API 格式的模型有强烈适配需求。
*   **图片分析能力缺失**:
    *   [Issue #1122](https://github.com/nearai/ironclaw/issues/1122): 用户强烈请求支持图片上传与分析。目前系统会拒绝 JPEG 等格式，限制了 Agent 在多模态场景下的应用。
*   **MCP 自定义认证**:
    *   [Issue #639](https://github.com/nearai/ironclaw/issues/639) (👍 1): 开发者希望支持非 OAuth 的 Custom Headers 认证方式，以适配更多企业内部 MCP 服务。

### 5. Bug 与稳定性
今日报告了多个高风险问题，部分已有对应修复方案：

*   **高危 (HIGH) - 安全漏洞**:
    *   [Issue #825](https://github.com/nearai/ironclaw/issues/825): **ReDoS 风险**。正则表达式触发器未经校验即编译，可能导致服务拒绝服务攻击。
    *   [Issue #1103](https://github.com/nearai/ironclaw/issues/1103): **SSRF 风险**。可配置的 Embedding Base URL 缺乏校验，可能被利用访问内网资源。
*   **高危 (HIGH) - 性能瓶颈**:
    *   [Issue #1142](https://github.com/nearai/ironclaw/issues/1142): SSE 解析路径存在 **O(n²) 字符串分配**问题，严重影响高并发下的流式响应性能。
*   **中危 - 功能故障**:
    *   [Issue #1126](https://github.com/nearai/ironclaw/issues/1126) [已关闭]: 修复了工具参数为空字符串时的 Time/Routine 崩溃问题。
    *   [Issue #1136](https://github.com/nearai/ironclaw/issues/1136): Anthropic OAuth Token 过期导致认证失败，且当前请求丢失。
    *   [Issue #1116](https://github.com/nearai/ironclaw/issues/1116): `openai_compatible` 后端在启动前若未导出环境变量会导致 401 错误。

### 6. 功能请求与路线图信号
*   **多模态支持**: [Issue #1122](https://github.com/nearai/ironclaw/issues/1122) 表明多模态（图像处理）是用户的迫切需求，可能是下一阶段核心功能的重点。
*   **Slack Socket Mode**: [Issue #1155](https://github.com/nearai/ironclaw/issues/1155) 请求支持 Slack Socket Mode，以便于在内网或受限网络环境中部署 Agent。
*   **边缘计算硬件支持**: [Issue #134](https://github.com/nearai/ironclaw/issues/134) 讨论了在 WASM 沙箱外通过 Unix Socket 安全访问 GPIO 的架构，标志着 IronClaw 正向 IoT/边缘设备领域拓展。
*   **BYOK (Bring Your Own Key)**: [Issue #1027](https://github.com/nearai/ironclaw/issues/1027) 虽已关闭，但相关讨论表明项目将正式确立支持用户自带模型密钥的配置模式。

### 7. 用户反馈摘要
*   **痛点**:
    *   **认证配置繁琐**: 用户在使用 `openai_compatible` 或 `Bedrock` 后端时，经常遇到环境变量/凭证加载顺序导致的启动失败。
    *   **前端交互细节**: Safari 浏览器下的中文输入法兼容性差 ([Issue #1139](https://github.com/nearai/ironclaw/issues/1139))，回车确认误触发送消息。
    *   **文档与报错信息**: 错误提示不够明确（如 Telegram Token 验证 404），且本地部署时的数据库配置容易出现软故障。
*   **满意点**:
    *   社区对 `Bedrock` 后端的快速修复 ([PR #1011](https://github.com/nearai/ironclaw/pull/1011)) 表示认可。
    *   核心团队对 Issue 的响应速度极快，多个 Bug 报告当天就进入了 CI 审查阶段。

### 8. 待处理积压
*   **长期停滞**:
    *   [Issue #763](https://github.com/nearai/ironclaw/issues/763): NEAR AI 调用返回 "No user query found" 错误，影响 Routine 功能，至今未彻底解决。
    *   [PR #614](https://github.com/nearai/ironclaw/pull/614): "LLM-as-Judge" 安全层 PR 虽标记为 XL 级别，但已滞留数日，急需核心维护者进行最终审查以合并。
*   **建议关注**:
    *   维护者需关注 CI 自动生成的几个 HIGH 级别安全警告（如 SSRF 和 ReDoS），避免带入下一个 Release 版本。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是基于 2026-03-14 数据生成的 LobsterAI 项目动态日报。

---

# LobsterAI 项目动态日报 (2026-03-14)

## 1. 今日速览
LobsterAI 今日维持了**极高的开发活跃度**，代码库经历了大规模重构与功能迭代。在过去 24 小时内，项目合并了 **7 个 Pull Requests**，重点围绕 **OpenClaw 集成、MCP Bridge 桥接以及定时任务系统**进行了深度优化，显示出项目正从独立客户端向集成化/插件化架构演进。社区方面，用户反馈数量激增（10 条 Issue 更新），**本地模型（Ollama）的工具调用能力缺失**成为今日最显著的痛点。虽然无新版本 Release 发布，但大量的代码合并预示着即将有重大更新。

## 2. 版本发布
*   **无新版本发布**。
    *   *注：尽管无正式 Release，但今日合并的 7 个 PR 涉及核心架构调整，建议关注后续版本的 Beta 测试。*

## 3. 项目进展
今日项目进展显著，主要集中在**移除内置冗余模块**与**增强外部（OpenClaw）集成**，架构变得更轻量且灵活：
*   **架构解耦与 OpenClaw 深度集成**：
    *   [PR #403](https://github.com/netease-youdao/LobsterAI/pull/403)：移除了内置沙箱及构建脚本，将系统提示词与 OpenClaw 默认提示词合并。这意味着 LobsterAI 正式剥离底层执行环境，完全依赖 OpenClaw 进行代码执行。
    *   [PR #411](https://github.com/netease-youdao/LobsterAI/pull/411) & [PR #412](https://github.com/netease-youdao/LobsterAI/pull/412)：重构了记忆存储逻辑，对接 OpenClaw 的 `MEMORY.md` 文件，并强制将老用户的执行模式迁移为 Local，解决 Docker 依赖问题。
*   **MCP 生态支持**：
    *   [PR #408](https://github.com/netease-youdao/LobsterAI/pull/408)：引入 **MCP Bridge**，允许 OpenClaw 的嵌入式 Agent 通过 HTTP 代理调用 LobsterAI 的 MCP 服务器（如 Tavily, GitHub 等），并支持热重载，无需重启应用即可更新工具链。
*   **自动化与稳定性**：
    *   [PR #409](https://github.com/netease-youdao/LobsterAI/pull/409)：增加了定时任务对 OpenClaw 的支持。
    *   [PR #401](https://github.com/netease-youdao/LobsterAI/pull/401)：修复了网关重复启动和消息重复显示的问题。

## 4. 社区热点
今日社区讨论集中在**本地模型的可用性**上，反映出用户对隐私和本地化部署的强烈需求：
*   **本地模型无法调用工具（最热话题）**：
    *   [Issue #112](https://github.com/netease-youdao/LobsterAI/issues/112) & [Issue #405](https://github.com/netease-youdao/LobsterAI/issues/405)：多名用户反馈在使用 Ollama + Qwen 等本地模型时，无法触发技能/命令执行，只能进行纯文本对话。用户 `wxpop` 指出这对本地模型用户影响巨大。
*   **执行稳定性问题**：
    *   [Issue #358](https://github.com/netease-youdao/LobsterAI/issues/358)：用户反馈任务经常中断，显示“完成”但实际未跑完，需手动输入“继续”。这与今日 PR 试图优化的执行模式密切相关。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在功能阻断和环境配置，部分已通过今日的 PR 缓解：
*   **P0 - 严重 (功能阻断)**:
    *   [Issue #402](https://github.com/netease-youdua/LobsterAI/issues/402)：Debian 12 环境下启动即崩溃，疑似与沙箱或依赖环境有关。*(注：今日 PR #403 移除内置沙箱可能会对此问题产生影响)*
    *   [Issue #112](https://github.com/netease-youdao/LobsterAI/issues/112)：本地模型无法触发工具调用。
*   **P1 - 中等**:
    *   [Issue #285](https://github.com/netease-youdao/LobsterAI/issues/285)：定时任务通知钉钉失效，属于自动化流程的稳定性问题。
    *   [Issue #407](https://github.com/netease-youdao/LobsterAI/issues/407)：Cron 表达式生成错误（Mac M4 环境）。
*   **P2 - 轻微**:
    *   [Issue #404](https://github.com/netease-youdao/LobsterAI/issues/404)：UI 交互问题，无法在弹窗选择自建 Skill。

## 6. 功能请求与路线图信号
*   **自定义 Skill 集成**: [Issue #404](https://github.com/netease-youdao/LobsterAI/issues/404) 用户希望能直接在对话中调用自建的工作流 Skill。结合今日 [PR #408](https://github.com/netease-youdao/LobsterAI/pull/408) 对 MCP 工具链的增强，未来版本可能会进一步打通用户自定义工作流与 Agent 的交互。
*   **执行速度优化**: [Issue #353](https://github.com/netease-youdao/LobsterAI/issues/353) 虽然已关闭（建议类），但用户明确指出“速度即体验”，并对比了 OpenClaw 原生体验。这印证了今日架构重构（剥离沙箱、对接 OpenClaw）是为了追求更轻量、更快的响应速度。

## 7. 用户反馈摘要
*   **痛点**：用户对**响应速度**和**本地模型能力受限**感到沮丧。有用户直言“速度即体验”，并指出相比原生 OpenClaw，LobsterAI 存在性能损耗。
*   **场景**：大量用户尝试在本地部署（Ollama + Qwen），希望实现完全离线的自动化操作（如列出目录文件），但目前受限于工具调用功能。
*   **正面反馈**：用户对集成 OpenClaw 的方向持乐观态度，认为这有助于统一运行环境。

## 8. 待处理积压
*   **高优先级积压**: [Issue #112](https://github.com/netease-youdao/LobsterAI/issues/112) 自 2 月 26 日开启至今未解决，今日再次活跃。随着本地模型热度上升，该问题若不解决将严重阻碍核心开发者群体的采用。
*   **稳定性积压**: [Issue #358](https://github.com/netease-youdao/LobsterAI/issues/358) 提到的任务执行中断问题，虽今日有相关修复 PR，但需在下一版本中验证是否彻底解决。

---
*分析师注：LobsterAI 正处于架构转型的关键期（从自带沙箱转向 OpenClaw 生态）。今日的 PR 合并极为关键，但大量 Issue 反映出转型期本地模型适配存在真空地带，建议下一版本优先解决本地模型的 Function Calling 支持问题。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# 🤖 TinyClaw 项目动态日报 (2026-03-14)

**分析师摘要**：TinyClaw 项目今日迎来了 **v0.0.13** 版本的重大更新，核心聚焦于智能体的配置体验与记忆能力增强。项目活跃度极高，单日合并了 4 个功能性 PR，显著优化了底层架构。此外，"Rebranding"（品牌重塑）计划正在推进中，社区对集成更多通讯协议的需求依然强烈。

---

### 1. 📊 今日速览
TinyClaw 今日发布了 **v0.0.13** 版本，标志着项目在智能体管理方面迈出了重要一步。开发团队极其高效，**单日合并了 4 个关键 PR**，成功引入了 UI 配置界面、分层记忆系统，并重构了 Agent 的配置供给逻辑。尽管核心功能迭代迅速，但今日也报告了一个高严重性的模块加载 Bug（#210），不过已被迅速关闭，显示出维护者对稳定性的快速响应能力。整体来看，项目处于**高速迭代与架构优化期**，但在重命名和 ES 模块兼容性方面需注意过渡风险。

### 2. 🚀 版本发布
**Release: [v0.0.13](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.13)**
本次更新主要增强了智能体的易用性与认知能力，建议所有用户升级以体验新的配置 UI 和记忆功能。

*   **🆕 Agent 配置 UI (PR #207)**: 新增可视化配置界面，包含 Skills（技能）、System Prompt（系统提示词）、Memory（记忆）和 Heartbeat（心跳监控）四个标签页，极大降低了命令行配置的门槛。
*   **🧠 分层记忆系统 (PR #209)**: 引入了持久化的分层记忆功能，Agent 现在可以将知识保存为 Markdown 文件（含 YAML 元数据），实现跨会话的知识 recall。
*   **⚙️ 底层重构 (PR #211)**: 重构了 Agent 目录配置逻辑，统一了工作区创建流程，并开始使用符号链接管理 Skills，减少了磁盘占用和代码重复。
*   **⚡ 系统提示词优化 (PR #208)**: `AGENTS.md` 现在作为内存中的系统提示词传递，不再依赖磁盘文件的频繁 I/O，解决了数据陈旧问题。

### 3. 🏗️ 项目进展
今日共有 **4 个 PR 被合并**，项目整体向更模块化、更易用的方向显著迈进：

1.  **UI 与交互增强**：合并了 [PR #207](https://github.com/TinyAGI/tinyclaw/pull/207)，补齐了 Web 端管理 Agent 的短板，用户不再需要纯手动编辑配置文件。
2.  **核心架构优化**：[PR #211](https://github.com/TinyAGI/tinyclaw/pull/211) 和 [PR #208](https://github.com/TinyAGI/tinyclaw/pull/208) 显著改善了代码质量。通过引入 Symlinks 和 In-memory 处理，减少了文件系统依赖，提升了运行时效率。
3.  **智能体能力扩展**：[PR #209](https://github.com/TinyAGI/tinyclaw/pull/209) 的合并意味着 Agent 拥有了“长期记忆”，这是迈向更智能 Autonomous Agent 的关键一步。

### 4. 🔥 社区热点
*   **品牌重塑讨论 ([PR #191](https://github.com/TinyAGI/tinyclaw/pull/191))**:
    *   **状态**: Open
    *   **分析**: 该 PR 旨在将项目从 `TinyClaw` 全面重命名为 `TinyAGI`。虽然尚未合并，但这暗示了项目定位可能从单一工具转向更广泛的 AGI 智能体平台。涉及包名、CLI 命令等全面修改，需关注合并后的迁移成本。
*   **通讯协议扩展需求 ([Issue #57](https://github.com/TinyAGI/tinyclaw/issues/57))**:
    *   **状态**: Open (活跃中)
    *   **分析**: 用户强烈建议集成 Google Chat、Slack 和 Teams。这表明 TinyClaw 的用户群体有强烈的**多平台协作场景**需求，希望将 AI 智能体接入现有的企业办公流。

### 5. 🐛 Bug 与稳定性
*   **🔴 高危：ES 模块作用域错误 ([Issue #210](https://github.com/TinyAGI/tinyclaw/issues/210))**
    *   **描述**: 在执行 `tinyclaw pairing approve` 时报错 `ReferenceError: exports is not defined in ES module scope`。
    *   **影响**: 严重影响 Agent 执行流程。
    *   **状态**: **已关闭 (CLOSED)**。该 Bug 由 @debamitro 报告，虽然严重但维护者似乎已迅速定位并修复（或通过后续更新解决），反应了团队对阻断性问题的快速响应能力。

### 6. 🗺️ 功能请求与路线图信号
*   **多平台消息支持**: [Issue #57](https://github.com/TinyAGI/tinyclaw/issues/57) 提出的 Google Chat/Slack/Teams 集成是目前最明显的功能缺口。考虑到目前项目正在重构核心 Agent 逻辑，这类 IO 密集型的适配器功能可能会在核心稳定后纳入规划。
*   **UI 重设计**: [PR #212](https://github.com/TinyAGI/tinyclaw/pull/212) 提议重新设计 "Live Office Workspace"，表明前端体验将是下一阶段的重点。

### 7. 🗣️ 用户反馈摘要
*   **运行时环境痛点**: 从 Issue #210 可以看出，部分用户在不同 Node.js 版本（v20 vs v24）下遇到了模块兼容性问题，建议项目后续加强对 Node 版本的兼容性测试或明确版本锁定。
*   **企业级集成需求**: 用户不再满足于本地 CLI 或 Web UI，而是希望 TinyClaw 能作为“后端大脑”接入企业 IM（Issue #57），反映了项目正从“开发者玩具”向“生产力工具”转型的趋势。

### 8. 📌 待处理积压
*   **[PR #191 Rebranding](https://github.com/TinyAGI/tinyclaw/pull/191)**: 这是一个巨大的变更，涉及全局重命名。建议维护者尽快合并或分阶段进行，以避免后续功能开发冲突。
*   **[PR #212 Office Redesign](https://github.com/TinyAGI/tinyclaw/pull/212)**: 该 PR 目前处于 Open 状态，需关注其 Review 进度，以免阻碍前端体验的升级。

---
*数据来源: GitHub TinyClaw Repository | 分析时间: 2026-03-14*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

这里是基于 2026-03-14 数据生成的 Moltis 项目动态日报。

# Moltis 项目动态日报 (2026-03-14)

## 1. 今日速览
Moltis 项目今日保持着**极高的维护活跃度**，呈现出“快速修复、高频迭代”的态势。过去 24 小时内，项目成功合并了 5 个 Pull Requests，并相应关闭了 5 个 Issues，显示了维护者 @penso 对社区反馈的高效响应。虽然未发布新版本，但代码库针对 Web 端引导流程、本地 LLM 兼容性及工具调用稳定性进行了大量修复。今日共有 6 个新 Bug 报告，主要集中在 Agent 节点配置和上下文隔离方面，社区贡献者 @DanTup 提交了多个高质量的修复和反馈。

## 2. 版本发布
- **状态**: 本日无新版本发布。

## 3. 项目进展
今日共有 **5 个 PR 被合并**，主要集中在提升用户体验（UX）和修复文档/安装障碍，项目整体稳定性得到巩固：

*   **Web 引导与认证修复 ([PR #406](moltis-org/moltis PR #406), [PR #415](moltis-org/moltis PR #415))**:
    *   修复了密码管理器无法自动识别密码字段的问题，提升了首次引导的流畅度。
    *   修复了重置认证后无法重新进入引导页面的问题，确保系统在异常状态下可恢复。
*   **文档与安装修正 ([PR #402](moltis-org/moltis PR #402))**:
    *   修正了 QMD 的安装指南，将错误的包名 `@anthropic/qmd` 更正为 `@tobilu/qmd`，解决了新手落地的第一道门槛。
*   **Cron 任务配置优化 ([PR #409](moltis-org/moltis PR #409))**:
    *   重命名了 Cron 选项为 "Run Once"，并增加了时区提示，显著降低了定时任务的配置难度。

## 4. 社区热点
今日社区活跃度较高，尤其是关于**多节点环境下的 Agent 行为**和**第三方平台集成**的讨论：

*   **飞书/Lark 集成请求 ([Issue #383](moltis-org/moltis Issue #383))**:
    *   **热度**: 👍 2
    *   **分析**: 用户强烈希望将 Moltis 接入飞书生态。考虑到 Moltis 作为个人 AI 助手的定位，多平台接入是扩展用户群的关键，建议维护者将其纳入近期路线图。
*   **节点地址与混淆问题 ([Issue #426](moltis-org/moltis Issue #426), [Issue #427](moltis-org/moltis Issue #427))**:
    *   **热度**: 新增且活跃
    *   **分析**: 用户 @DanTup 和 @rlex 报告了在连接节点时 Agent 出现幻觉或地址错误。这表明在多设备或分布式场景下，Moltis 的上下文感知能力仍需加强。

## 5. Bug 与稳定性
今日新增若干关键 Bug，部分已有修复方案在进行中：

*   **严重 (Security/Logic)**:
    *   [Bug] **保险库密封失效** ([Issue #428](moltis-org/moltis Issue #428)): 即使 Vault 处于 "sealed" 状态，上下文按钮仍可查看完整聊天记录。这是一个潜在的安全隐患，目前尚无修复 PR。
*   **中等 (Functionality)**:
    *   [Bug] **Jinja 模板错误** ([Issue #317](moltis-org/moltis Issue #317)): 使用 Qwen 等本地模型时报错 "System message must be at the beginning"。
        *   *状态*: **已有修复**。见 [PR #431](moltis-org/moltis PR #431)，该 PR 合并了系统消息以确保顺序正确。
    *   [Bug] **Agent 节点幻觉** ([Issue #427](moltis-org/moltis Issue #427)): Agent 在执行命令时对节点名称产生混淆。
        *   *状态*: **已有修复**。见 [PR #432](moltis-org/moltis PR #432)，修复了未连接节点时仍暴露参数的问题。
*   **低严重度**:
    *   [Bug] **Cron 工具无法使用** ([Issue #430](moltis-org/moltis Issue #430))。

## 6. 功能请求与路线图信号
*   **Lark/Feishu 支持 ([Issue #383](moltis-org/moltis Issue #383))**: 目前呼声最高的功能请求。由于尚未有相关 PR 出现，预计短期内不会上线，但这是企业级用户的重要痛点。
*   **中断会话的记忆能力** ([Issue #186](moltis-org/moltis Issue #186)): 虽然该 Issue 已关闭，但相关实现逻辑已体现在 [PR #418](moltis-org/moltis PR #418)（虽然该 PR 目前显示为 Closed，但其 Commit 信息表明 "persist aborted partial history" 是被开发团队关注的重点）。这表明“暂停并恢复”功能正在积极打磨中。

## 7. 用户反馈摘要
*   **痛点**:
    *   **安装困难**: 多个 Issue ([#184](moltis-org/moltis Issue #184), [#316](moltis-org/moltis Issue #316)) 提及包名错误或重置认证失败，说明旧版文档对新手极不友好，今日的修复 PR 极大地缓解了此问题。
    *   **本地模型兼容性**: 用户在使用 GGUF/Qwen 模型时遇到严格的系统消息顺序限制 ([#317](moltis-org/moltis Issue #317))，反映出 Moltis 在处理非标准 API 行为时的僵化。
*   **场景**: 用户主要在尝试将 Moltis 作为多节点控制中心（涉及 SSH/Node 操作）以及作为本地推理的前端界面。

## 8. 待处理积压
*   **需关注**: [PR #410](moltis-org/moltis PR #410) (retry empty structured tool names) 和 [PR #417](moltis-org/moltis PR #417) (restore custom GGUF setup) 处于 Open 状态超过 2 天，涉及核心 Agent 逻辑和本地 LLM 体验，建议维护者优先 Review。
*   **长期 Issue**: [Issue #317](moltis-org/moltis Issue #317) (Jinja Exception) 虽然有对应的 PR [#431](moltis-org/moltis PR #431)，但 Issue 本身尚未关闭，需确认修复合并后的状态。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-14)

## 1. 今日速览
CoPaw 项目今日保持**极高活跃度**，社区贡献与反馈呈现爆发式增长。过去24小时内，Issues 更新量高达 50 条（新增/活跃 41 条），PR 更新 39 条，表明项目正处于快速迭代与功能扩展期。然而，随着 v0.0.7 版本的推广，**性能瓶颈与稳定性问题**（如 CPU 飙升、内存溢出）集中显现，成为用户反馈的重灾区。与此同时，社区在**多渠道适配**（Nextcloud, WeCom, QQ）和**核心体验优化**（时区、记忆、升级）方面贡献了大量高质量代码，显示出健康且充满活力的开源生态。

## 2. 版本发布
- **无新版本发布**。当前最新版本仍为 v0.0.7。鉴于今日反馈的若干严重 Bug（如 Ollama 兼容性、CPU 占用），建议维护者评估是否需要发布 v0.0.8 补丁版本。

## 3. 项目进展
今日共有 **21 个 PR 被合并或关闭**，项目在集成新渠道、修复核心逻辑和优化工具链方面取得了实质性进展：

- **渠道生态扩展**：
    - 合并 [PR #1460](https://github.com/agentscope-ai/CoPaw/pull/1460)：新增 **Nextcloud Talk** 频道集成，支持 Webhook 与 HMAC-SHA256 验证，填补了私有云办公场景的空白。
    - 合并 [PR #1071](https://github.com/agentscope-ai/CoPaw/pull/1071)：新增 **Mattermost** 频道支持。
- **核心体验修复与优化**：
    - 合并 [PR #1432](https://github.com/agentscope-ai/CoPaw/pull/1432)：在环境上下文中注入 UTC 时间，解决了弱模型不主动调用时间工具导致的定时任务逻辑错误。
    - 合并 [PR #1350](https://github.com/agentscope-ai/CoPaw/pull/1350)：支持从 **LobeHub** 导入 Skills，极大丰富了 Prompt 资源的获取渠道。
    - 合并 [PR #1396](https://github.com/agentscope-ai/CoPaw/pull/1396)：修复了内置技能在列表中重复显示的 UI 混乱问题。
    - 合并 [PR #1250](https://github.com/agentscope-ai/CoPaw/pull/1250)：优化了 Shell 工具执行逻辑，引入隐式用户身份上下文传递，增强了多用户环境下的安全性。
- **配置与权限**：
    - 合并 [PR #943](https://github.com/agentscope-ai/CoPaw/pull/943)：统一了各频道的访问控制白名单逻辑。

## 4. 社区热点
- **[#1034 [OPEN] "龙虾"过度思考问题**](https://github.com/agentscope-ai/CoPaw/issues/1034)
  **热度**：评论 7 条
  **分析**：用户戏称 Agent 为"龙虾"，指出其在处理简单查询（如查看定时任务）时陷入"过度思考"循环。这反映了 ReAct 模式在简单任务下的推理冗余问题，社区正在探讨如何优化 Prompt 或引入路由机制以减少 Token 消耗。
- **[#1346 [CLOSED] 本地时间嵌入争议**](https://github.com/agentscope-ai/CoPaw/issues/1034)
  **热度**：评论 7 条
  **分析**：讨论是否应在系统提示中固化当前时间。结论是通过 [PR #1432](https://github.com/agentscope-ai/CoPaw/pull/1432) 以注入上下文方式解决，这不仅解决了弱模型调用问题，也避免了频繁修改 System Prompt 带来的干扰。
- **[#1277 [OPEN] 对话崩溃报错 (BadRequestError)**](https://github.com/agentscope-ai/CoPaw/issues/1277)
  **热度**：评论 6 条
  **分析**：用户在使用过程中遇到 `6291456` 字节的请求体限制错误。这暴露了 CoPaw 在处理长上下文或大文件时缺乏有效的 Token 截断或压缩机制，是一个急需修复的稳定性问题。

## 5. Bug 与稳定性
今日报告的 Bug 集中在资源占用、连接稳定性和上下文管理，部分已有修复方案：

1.  **[严重] CPU 占用飙升至 100% (Ubuntu 25.10)**
    - Issue: [#1385](https://github.com/agentscope-ai/CoPaw/issues/1385)
    - 状态：作者已定位可能是 `mcp` 或 `read_file` 引起，并提交了修复代码。
2.  **[严重] Ollama 本地模型失忆与工具失效**
    - Issue: [#1416](https://github.com/agentscope-ai/CoPaw/issues/1416) (Closed as fixed)
    - 修复：[PR #1433](https://github.com/agentscope-ai/CoPaw/pull/1433) 添加了关于上下文长度设置的警告文档，并可能包含后端修复逻辑。
3.  **[严重] 局域网 Ollama 连接失败**
    - Issue: [#1458](https://github.com/agentscope-ai/CoPaw/issues/1458)
    - 状态：Open。API 返回 200 但前端连接失败，疑似网络请求配置或 CORS 问题。
4.  **[中等] 飞书频道"延迟回复"与消息重复处理**
    - Issues: [#1345](https://github.com/agentscope-ai/CoPaw/issues/1345), [#1403](https://github.com/agentscope-ai/CoPaw/issues/1403)
    - 状态：Open。飞书频道的消息队列处理逻辑存在竞态或去重缺陷。
5.  **[中等] Skills 调用上下文超限**
    - Issue: [#1332](https://github.com/agentscope-ai/CoPaw/issues/1332)
    - 状态：Open。Skills 内部调用似乎未正确隔离上下文，导致批量任务迅速耗尽 Token。

## 6. 功能请求与路线图信号
用户对 CoPaw 的期望正从"能跑"转向"好用"和"多模态"：

- **多模态支持**：[#1045](https://github.com/agentscope-ai/CoPaw/issues/1045) 强烈请求 Web Console 支持图片上传与 Ctrl+V 粘贴，以利用多模态大模型能力。
- **自主记忆管理**：[#1439](https://github.com/agentscope-ai/CoPaw/issues/1439) 提出在会话压缩前自动落盘摘要（Hook 机制），防止关键决策信息在压缩中丢失。
- **自定义 Skills 增强**：[#1316](https://github.com/agentscope-ai/CoPaw/issues/1316) 和 [#1430](https://github.com/agentscope-ai/CoPaw/issues/1430) 均请求支持在自定义 Skills 中上传 Python 脚本等资源文件，而不仅仅是 Prompt 文本。
- **企业级集成**：[PR #1407 (Open)](https://github.com/agentscope-ai/CoPaw/pull/1407) 正在添加**企业微信** 频道支持。

## 7. 用户反馈摘要
- **痛点**：**Token 超限** 是目前最普遍的痛点（Issues #1277, #1293, #1332），许多用户在与 Agent 长对话或执行批量任务时遭遇崩溃。
- **困惑**：用户对 Agent 的"过度思考"（#1034）表示困惑，认为简单的指令不应触发复杂的推理链。
- **场景**：大量用户尝试通过 Docker 部署并连接局域网内的 Ollama（#1458, #1452），表明"本地化+隐私保护"是核心用户群体的关键场景。
- **满意度**：尽管存在 Bug，但用户对 CoPaw 的快速迭代表示认可，特别是对 LobeHub Skills 导入（#1350）和自动更新命令（#1278）表示欢迎。

## 8. 待处理积压
以下重要 Issue 仍有待核心团队关注：

1.  **[Bug] 会话压缩产生"幻觉"内容** ([#1437](https://github.com/agentscope-ai/CoPaw/issues/1437))：Compactor 组件虚构历史消息，严重影响长期记忆的准确性。
2.  **[Bug] 飞书消息处理无去重** ([#1403](https://github.com/agentscope-ai/CoPaw/issues/1403))：会导致用户收到重复回复，影响体验。
3.  **[Enhancement] ACP 协议支持** ([#1059](https://github.com/agentscope-ai/CoPaw/issues/1059))：作为战略级功能，支持 ACP 将允许 CoPaw 与 IDE 等外部 Agent 互联互通，值得纳入近期路线图。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

以下是 ZeptoClaw 项目 2026-03-14 的动态日报：

# ZeptoClaw 项目动态日报 (2026-03-14)

## 1. 今日速览
ZeptoClaw 今日呈现出极高的开发活跃度，核心团队集中精力完成了**安全性加固**与**交互体验重构**。过去 24 小时内，项目高效地处理了多个关键 Bug 和功能请求，共合并了 3 个功能性 PR，并关闭了 6 个相关 Issue。重点在于修复流式处理的一致性问题、引入交互式批准流程以及修正默认的安全配置。社区方面，已有开发者提交了针对 ACP 协议和图片处理的新 PR，显示出生态扩展的良好势头。

## 2. 版本发布
*   **无新版本发布**：虽然无正式版本发布，但主分支已合并重要更新，预计下一个版本将包含显著的 UX 和安全性改进。

## 3. 项目进展
今日共有 **3 个 PR 被合并**，显著提升了项目的安全基线与用户体验：

*   **[PR #353] feat: interactive approval prompts, streaming parity, safer defaults** (已合并)
    *   **核心进展**：这是今日最重要的合并，引入了交互式 CLI 批准流程（`[y/N]` 提示），修复了流式处理与批处理路径的执行差异（Hooks 和指标记录），并强制实施了更安全的默认配置。
    *   **影响**：解决了安全审计中的多项隐患，赋予用户对危险工具的明确控制权。
*   **[PR #342] feat: stream by default + response metadata footer** (已合并)
    *   **核心进展**：CLI 现在默认启用流式响应（token-by-token），并在响应末尾添加元数据页脚（显示 token 数、工具调用数、耗时）。
    *   **影响**：大幅优化了用户体验，减少了等待焦虑，提供了透明的资源消耗反馈。
*   **[PR #349] fix: AgentLoop constructors respect config streaming default** (已合并)
    *   **核心进展**：修复了 `AgentLoop` 构造函数硬编码关闭流式传输的 Bug，使其正确读取配置文件。
    *   **影响**：确保了 PR #342 的功能能够按预期工作。

## 4. 社区热点
*   **[Issue #354] bug: narrow filesystem safety carve-out...** (已关闭)
    *   **热度分析**：涉及核心的安全扫描逻辑。讨论焦点在于如何平衡性能（不扫描某些内容）与安全性（防止恶意代码注入）。最终通过认定相关行为符合预期或已被其他 PR 修复而关闭。
*   **[PR #356] feat(channels): ACP stdio + HTTP implementation**
    *   **社区动态**：社区成员 `@starsy` 提交了重大功能 PR，试图为 ZeptoClaw 实现 ACP (Agent Client Protocol) 协议支持。这表明社区正在积极推动 ZeptoClaw 与更广泛的 Agent 生态系统集成。

## 5. Bug 与稳定性
今日修复了多个 P1/P2 级别的 Bug，项目稳定性显著增强：

*   **[P1-Critical] [Issue #354] Safety scanning carve-out issues**
    *   **状态**：已关闭。
    *   **详情**：关于文件写入/编辑时的安全扫描范围，可能存在遗漏扫描新内容的风险。随着安全相关 PR 的合并，此问题已被标记为解决。
*   **[P2-High] [Issue #351] Streaming tool execution parity**
    *   **状态**：已修复 (通过 PR #353)。
    *   **详情**：流式处理路径中缺失了 `before_tool`/`after_tool` 钩子和错误日志记录，导致监控盲区。
*   **[P2-High] [Issue #352] Trusted CLI session detection**
    *   **状态**：已修复 (通过 PR #353)。
    *   **详情**：系统未能有效区分真实终端（TTY）与管道输入，存在被自动化脚本滥用信任机制的风险。
*   **[Issue #348/#347] Default agent mode safety**
    *   **状态**：已修复。
    *   **详情**：默认配置过于宽松（autonomous + AlwaysAllow），已在新 PR 中加固。

## 6. 功能请求与路线图信号
*   **ACP 协议支持 ([PR #356])**
    *   **信号**：社区正在通过 PR #356 推动 ZeptoClaw 成为标准化的 Agent 服务端。如果该 PR 被合并，ZeptoClaw 将能通过 stdio 或 HTTP 被其他 Agent 框架直接调用。
*   **多模态能力增强 ([PR #355], [PR #346])**
    *   **信号**：两个待合并的 PR 均涉及图片内容处理（修复循环中的图片处理、Discord 频道图片忽略问题）。这表明项目正在向多模态交互方向演进，但目前存在处理不稳定的问题。
*   **加入 Shelldex 目录 ([Issue #334])**
    *   **信号**：用户希望提高项目的曝光度，属于市场推广层面的需求。

## 7. 用户反馈摘要
*   **安全感缺失**：从 Issue #348 和 #347 可以看出，用户对之前的 "Autonomous + AlwaysAllow" 默认配置感到担忧，认为这太不安全，迫切需要更严格的默认策略。
*   **性能感知**：Issue #341 提到 "Biggest perceived performance improvement"（最大的感知性能提升），反映了用户对 CLI 响应速度（流式输出）的强烈需求，不愿意等待完整的响应生成。
*   **交互控制权**：用户希望在执行高风险操作时拥有 "Actionable yes/no approvals"（可操作的批准/拒绝权），而不是完全放权给 AI。

## 8. 待处理积压
*   **[PR #356] feat(channels): ACP implementation** (Open)
    *   **建议**：这是一个大型功能 PR，需要维护者仔细审查架构设计与安全性。建议关注是否会引入新的依赖或复杂度。
*   **[PR #355] & [PR #346] Image handling fixes** (Open)
    *   **建议**：这两个 PR 解决了视觉/多模态功能的缺陷，建议尽快 review 并合并，以完善除 CLI 以外的渠道（如 Discord）体验。
*   **[Issue #334] Add Zeptoclaw to Shelldex** (Open)
    *   **建议**：这是一个低成本的推广机会，维护者只需确认品牌意愿即可由提交者完成后续操作。

---
*分析师结语：ZeptoClaw 今日的表现非常“硬核”，通过一连串快速的修复和合并，解决了流式处理的历史遗留问题并重塑了安全模型。虽然暂无新版本 Release，但主分支代码已产生质的飞跃。接下来的看点在于社区贡献的 ACP 协议和多模态修复能否顺利通过审查。*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*