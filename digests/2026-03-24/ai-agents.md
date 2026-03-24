# OpenClaw 生态日报 2026-03-24

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-24 02:26 UTC

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

# OpenClaw 项目动态日报 (2026-03-24)

## 1. 今日速览

OpenClaw 项目在过去 24 小时内经历了**极高活跃度**，同时也遭遇了近期最严重的**稳定性危机**。社区爆发式报告了关于 `v2026.3.22` 版本中 NPM 包缺失 Control UI 静态资源的严重回归问题，导致大量用户无法通过 Web 界面访问控制台。尽管开发团队迅速发布了 `v2026.3.23` 试图修复，但伴随而来的插件兼容性问题（如 WhatsApp 崩溃）仍在持续发酵。目前 Issue 活跃度高达 500 条，PR 积压严重，项目处于紧锣密鼓的修复与迭代阶段。

## 2. 版本发布

### v2026.3.23 (Latest)
- **更新内容**：
  - **Chrome MCP 修复**：修复了 macOS 上 Chrome 附加流程中的超时问题，现在会等待现有会话标签页可用后再进行握手，减少了用户配置文件的同意反复。
  - **代码清理**：移除了 Browser/Chrome MCP 中的遗留代码。

### v2026.3.22 (Stable)
- **破坏性变更**：
  - **插件安装源变更**：裸命令 `openclaw plugins install <package>` 现在优先从 ClawHub 查找，仅当 ClawHub 无此包时才回退到 npm。这将改变社区插件的分发生态。
- **已知问题**：NPM 发布包中遗漏了 `dist/control-ui/` 目录，导致 Web Dashboard 不可用（详见 Bug 章节）。

## 3. 项目进展

今日共有 **167 个 PR 更新**，主要集中在修复 `v2026.3.22` 引发的回归问题以及增强各渠道插件的稳定性。

- **核心修复**：
  - PR #53290: 修复了浏览器插件中 sticky lanes 和标签页协调的问题，确保在用户配置文件下的任务不会漂移。
  - PR #53134: 修复了 Shell 多路复用器的信任检查绕过漏洞，提升了安全性。

- **渠道增强**：
  - PR #53009 & #51059: 显著增强了 WhatsApp 插件功能，现在支持群组中的原生 @提及 和 引用回复 功能。
  - PR #53288: 增强了 Discord 插件对 Embed 消息的解析能力，使 AI 能读取更多上下文信息。

- **工具修复**：
  - PR #51127: 修复了飞书插件硬编码禁用流式传输的问题，现在将遵循用户配置。

## 4. 社区热点

### 🔥 NPM 包缺失 UI 资源大规模反馈
- **现象**：大量用户（Issue #52808, #52823, #53019 等）反馈升级到 `2026.3.22` 后，访问 Dashboard 报错 `Control UI assets not found`。
- **诉求**：NPM 全局安装用户强烈反对需要手动运行 `pnpm ui:build` 来修复，认为这违背了开箱即用的原则。
- **链接**：[Issue #52808](https://github.com/openclaw/openclaw/issues/52808) | [Issue #52823](https://github.com/openclaw/openclaw/issues/52823)

### 🌐 国际化支持需求
- **Issue #3460**: 依然是目前评论数最多的功能请求，社区对多语言支持的需求持续高涨。

### 🤖 插件生态稳定性
- **Issue #52885**: 微信官方插件与最新版不兼容，引发国内开发者关注。
- **Issue #53247**: WhatsApp 插件在最新版中因缺失依赖导致崩溃。

## 5. Bug 与稳定性

### 🔴 严重 - 系统不可用
1.  **Control UI 资源缺失** (Regression)
    - **描述**：NPM 包 `v2026.3.22` 缺失前端构建产物，导致 Web UI 彻底瘫痪。
    - **状态**：Issue 大量堆积，暂未看到针对此问题的修复 PR 合并记录，可能依赖紧急版本发布修复。
    - **链接**：[Issue #53019](https://github.com/openclaw/openclaw/issues/53019)

2.  **WhatsApp 插件崩溃** (Regression)
    - **描述**：`v2026.3.23` 中 WhatsApp 插件缺少 `light-runtime-api`，导致收到消息时代理崩溃。
    - **状态**：已有修复测试 PR #53306。
    - **链接**：[Issue #53247](https://github.com/openclaw/openclaw/issues/53247)

### 🟠 中等 - 功能受限
1.  **Matrix 插件不兼容**
    - **描述**：升级后 API 版本不匹配，无法加载。
    - **链接**：[Issue #52899](https://github.com/openclaw/openclaw/issues/52899)

2.  **微信插件加载失败**
    - **描述**：找不到 `openclaw/plugin-sdk` 模块。
    - **链接**：[Issue #52885](https://github.com/openclaw/openclaw/issues/52885)

## 6. 功能请求与路线图信号

1.  **ClawHub 与 Skills 生态**
    - 随着 `v2026.3.22` 将插件安装源默认优先指向 ClawHub，Issue #50090 中关于 "Community Skill Development" 的讨论变得更加关键。社区正在关注 ClawHub 作为官方市场的能力与治理模式。

2.  **ACP (Agent Communication Protocol) 增强**
    - RFC Issue #49782 提出了 "ACP completion relay" 概念，旨在解决子代理会话完成后无法通知父会话的闭环问题，这可能成为多代理协作架构的重要升级方向。

3.  **认知记忆层**
    - Issue #52532 提出引入基于艾宾浩斯遗忘曲线的语义记忆层，虽然目前处于早期讨论，但代表了社区对 AI 长期记忆能力的强烈需求。

## 7. 用户反馈摘要

- **安装体验极化**：源码安装用户反馈尚可，但 NPM 全局安装用户对此次更新极其不满，认为打包流程缺乏自动化测试。
- **多渠道接入痛点**：大量 Issue 集中在 Telegram、WhatsApp、Matrix 等非标准渠道的连接稳定性上，特别是工具调用在不同渠道的可用性差异（如 Issue #36651）。
- **开发者体验**：部分高级用户赞赏 `openclaw doctor --fix` 的修复能力（PR #53301 正在增强此功能），但希望减少对它的依赖。

## 8. 待处理积压

- **Issue #3460 (i18n)**: 尽管长期占据热度榜首，官方仍表示 "no bandwidth"（无精力/带宽）支持，建议寻找社区贡献者。
- **Issue #52820**: 关于最新版 UI 报错的中文反馈贴，需要维护者关注非英语用户的支持。
- **PR #51673**: 关于 vLLM 零使用量显示的大规模修复 PR，已打开数日，等待合并以解决核心 Token 统计问题。

---

## 横向生态对比

# 开源 AI 智能体生态横向对比分析报告 (2026-03-24)

**分析师**：AI Open Source Ecosystem Analyst
**报告日期**：2026-03-24

---

## 1. 生态全景

2026年3月的个人AI助手/自主智能体开源生态呈现出**"架构分层"与"生态整合"**并行的态势。一方面，以 OpenClaw 为首的头部项目正通过引入应用商店（ClawHub）和通信协议（ACP）构建封闭或半封闭的生态护城河，同时遭遇规模化带来的稳定性阵痛（如 NPM 打包事故）；另一方面，NanoClaw、PicoClaw 等新兴项目在多模态（语音/TTS）、多渠道（微信/飞书）及垂直领域架构（如 Zeroclaw 的 macOS 原生端）上展现出极强的敏捷性，正在快速填补头部项目留下的功能空白。总体而言，生态正处于从"单一助手"向"多智能体协作网络"演进的关键转折期。

---

## 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PRs (24h) | Release 状态 | 健康度/状态评估 | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500+ (爆) | 167 (High) | v2026.3.23 (修复版) | 🔴 **危机** (严重回归 Bug，UI 资源缺失) | 稳定性危机, ClawHub, 生态分发 |
| **NanoBot** | 19 | 75 (30 Merged) | 无 | 🟢 **活跃** (修复僵尸进程，架构优化) | 资源泄漏, 微信支持, 安全沙箱 |
| **Zeroclaw** | 42 | 50 | **v0.6.0** (Major) | 🟢 **上升** (发布 macOS 客户端，SOP 引擎) | Tauri 桌面端, 安全策略, 僵尸进程 |
| **PicoClaw** | 25 | 56 (34 Merged) | 无 | 🟢 **重构** (多智能体架构 Phase 2) | ASR/TTS 语音, Multi-Agent, 记忆系统 |
| **NanoClaw** | 15 | 38 (11 Merged) | 无 | 🟡 **敏捷** (功能迭代快，安全漏洞多) | Skill 生态, 安全漏洞, 多模型路由 |
| **NullClaw** | 8 | 11 | 无 | 🟡 **修复** (积压大量 Fix PR 待合并) | A2A 协议, Provider 兼容性 |
| **IronClaw** | 13 | 50 | 无 | 🟠 **重构** (v2 引擎重构，积压严重) | v2 Engine, 多租户, ACP 协议 |
| **LobsterAI** | 18 | 36 | **2026.3.23** | 🟡 **震荡** (升级卡顿，MCP 配置难) | 升级体验, OAuth, IM 集成 |
| **TinyClaw** | 0 | 8 (5 Merged) | 无 | 🟢 **稳健** (核心功能收敛) | Skills Manager, Telegram 修复, 任务管理 |
| **Moltis** | 10 (Closed) | 36 (Merged) | 无 (预计发版) | 🟢 **加固** (批量合并功能 PR) | Vulkan 支持, 文件发送, Chrome 修复 |
| **CoPaw** | 50 (31 Closed) | 50 (27 Merged) | 无 | 🟠 **阵痛** (v0.1.0 兼容性问题) | v0.1.0 回归, 微信 ClawBot, Docker |
| **ZeptoClaw** | 6 | 15 | **v0.8.0** | 🟢 **迭代** (中间件架构重构) | 中间件管道, CLI 体验, 安全加固 |
| **EasyClaw** | 0 | 0 | **v1.7.6/7** | 🔵 **静默** (发布修复 macOS 安装) | macOS 签名, 安装体验 |

---

## 3. OpenClaw 在生态中的定位

**定位：生态构建者与行业标准制定者**

*   **优势**：
    *   **生态规模**：500+ 的单日 Issue 活跃度远超其他竞品（除 CoPaw 外），拥有最庞大的用户基数和插件市场。
    *   **分发渠道**：通过 `v2026.3.22` 强制将插件安装指向 ClawHub，OpenClaw 正试图从单纯的软件项目转型为平台，控制分发生态。
    *   **协议影响力**：ACP (Agent Communication Protocol) 的推进（Issue #49782）显示了其作为连接者的野心。
*   **劣势/风险**：
    *   **稳定性危机**：今日爆发的 "NPM 包 UI 资源缺失" 是典型的 CI/CD 自动化测试缺失导致的低级错误，严重损害了 "开箱即用" 的口碑。
    *   **社区信任**：将安装源强制切换至 ClawHub 引发了部分开发者的抵触，认为这限制了自由度。
*   **对比差异**：相比 NanoBot/PicoClaw 在特定功能（如语音、记忆架构）上的激进，OpenClaw 更侧重于**商业闭环**和**渠道控制**。

---

## 4. 共同关注的技术方向

1.  **多渠道接入 (IM Integration)**
    *   **现象**：微信、WhatsApp、Telegram、飞书、钉钉成为标配。
    *   **涉及项目**：OpenClaw (WA 崩溃), NanoBot (微信合并), CoPaw (微信 ClawBot 请求), LobsterAI (钉钉/飞书)。
    *   **诉求**：用户不再满足于 Web/CLI 交互，迫切需要将 Agent 嵌入已有的工作流（IM 软件）。

2.  **多智能体协作与通信协议 (A2A / ACP)**
    *   **现象**：单体 Agent 向多 Agent 协作演进。
    *   **涉及项目**：OpenClaw (ACP Relay), NullClaw (A2A Client), PicoClaw (Multi-Agent Phase 2), IronClaw (ACP Support)。
    *   **诉求**：解决复杂任务拆解、子代理调度及结果回传的闭环问题。

3.  **安全与沙箱机制**
    *   **现象**：随着 Agent 权限扩大（Shell 执行、文件读写），安全边界成为焦点。
    *   **涉及项目**：NanoBot (API Key 泄露风险), NanoClaw (容器逃逸), Zeroclaw (安全策略过严争议), ZeptoClaw (污点分析)。
    *   **诉求**：在 "能力最大化" 与 "系统安全" 之间寻找平衡，防止 Agent 误删文件或泄露密钥。

4.  **记忆与上下文管理**
    *   **现象**：解决 LLM "遗忘" 和 Token 溢出问题。
    *   **涉及项目**：OpenClaw (艾宾浩斯遗忘曲线), PicoClaw (Seahorse Memory), NanoBot (Token 溢出修复), CoPaw (ReMe 压缩)。
    *   **诉求**：从简单的滑动窗口转向仿生/语义记忆架构，以支持长期任务。

---

## 5. 差异化定位分析

| 维度 | **OpenClaw** (平台型) | **NanoBot / PicoClaw** (架构先锋型) | **Zeroclaw / LobsterAI** (垂直落地型) | **NanoClaw / TinyClaw** (极客/轻量型) |
| :--- | :--- | :--- | :--- | :--- |
| **核心侧重** | 插件生态、分发渠道 | 多模态 (语音)、底层稳定性 (进程/Token) | 桌面端体验 (Tauri)、企业 IM 集成 | Skill 机制、代码/任务管理 |
| **目标用户** | 普通用户 & 开发者 (大众化) | 技术极客、AI 研究者 | Mac 用户、企业内部部署 | 开发者、自动化发烧友 |
| **架构特征** | Monolithic + Plugin Hub | Modular (Channels分离) | Desktop-first (Tauri/CEF) | Middleware / Pipeline |

---

## 6. 社区热度与成熟度

*   **第一梯队 (高热度/成熟期)**：
    *   **OpenClaw**：虽然处于危机模式，但其用户基数和Issue响应量证明了其统治地位。正经历从"可用"到"好用"的痛苦转型。
    *   **CoPaw**：v0.1.0 发布后的阵痛期，活跃度极高，正在快速修补底层 Bug。

*   **第二梯队 (高活性/成长期)**：
    *   **NanoBot, PicoClaw, Zeroclaw**：PR 合并速度极快，功能迭代迅猛。核心开发者主导性强，代码质量较高，正处于确立技术优势的阶段。

*   **第三梯队 (稳健/垂直期)**：
    *   **TinyClaw, ZeptoClaw, Moltis**：虽然社区声音不如前者大，但代码提交非常有规律，专注于解决特定场景（如 CLI 体验、本地推理），稳定性普遍优于第一梯队。

---

## 7. 值得关注的趋势信号

1.  **从 "Chat" 到 "Action" 的安全焦虑**
    *   **信号**：NanoClaw 的容器逃逸漏洞 (Issue #457) 和 Zeroclaw 的安全策略争议 (Issue #1478) 表明，随着 Agent 获得执行 Shell 和控制浏览器的能力，**"沙箱逃逸"和"权限控制"将成为下一阶段核心的技术壁垒**。
    *   **建议**：开发者应优先考虑集成 Bubblewrap、Landlock 或 WASM 沙箱，而非简单的 Docker 隔离。

2.  **语音交互 交付标准的形成**
    *   **信号**：PicoClaw 的 ASR/TTS 重构 (PR #1939) 和 OpenClaw 的语音插件需求，标志着纯文本交互正在被淘汰。
    *   **建议**：支持 "语音入 -> 推理 -> 语音出" 的全双工模式将成为个人助理的标配，建议关注 Groq 等低延迟语音 API 的集成方案。

3.  **中间件与 管道 架构的崛起**
    *   **信号**：ZeptoClaw 的 Middleware Pipeline RFC (Issue #399) 和 TinyClaw 的 Task Manager。
    *   **建议**：为了解决 `agent_loop` 代码膨胀和逻辑耦合问题，未来 Agent 开发框架将更倾向于 "洋葱模型" 或 "责任链模式"，以便灵活插入审批、日志、安全扫描等插件。

4.  **国内渠道争夺白热化**
    *   **信号**：微信机器人 几乎出现在所有主流项目的 Roadmap 中 (OpenClaw, CoPaw, NanoBot)。
    *   **建议**：由于微信官方接口的封闭性，谁能最快稳定地支持微信接入（通过 Hook 或 企业微信侧漏），谁就能在中国市场占据主导地位。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

这里是为您生成的 **NanoBot** 项目 2026-03-24 动态日报。

---

# NanoBot 项目动态日报 (2026-03-24)

## 1. 今日速览
NanoBot 今日保持**极高的开发活跃度**，虽然无新版本发布，但社区提交了 **75 个 PR**（其中 30 个已合并），显示出核心团队正在为下一个大版本进行密集的功能迭代和代码整合。社区关注度持续升温，过去 24 小时内产生了 **19 条 Issue 更新**。重点主要集中在**多渠道适配（飞书/微信/OpenWebUI）**、**资源消耗优化（Token/僵尸进程）** 以及 **安全性增强**。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 **30 个 PR 被合并**，主要修复了关键稳定性问题并合并了多个重要的社区功能贡献，显著提升了项目的健壮性：

*   **稳定性修复**：
    *   **修复僵尸进程问题** ([PR #2410](https://github.com/HKUDS/nanobot/pull/2410))：解决了 `exec` 工具因超时产生大量僵尸子进程导致网关进程堆积的问题，这对长期运行的 Docker 部署至关重要。
    *   **修复 Shell 僵尸进程** ([PR #2362](https://github.com/HKUDS/nanobot/pull/2362))：补充修复了 Shell 层面的进程回收逻辑。
    *   **心跳 Token 溢出修复** ([PR #2413](https://github.com/HKUDS/nanobot/pull/2413))：合并了心跳会话的有界保留逻辑，防止会话无限增长。
*   **新渠道与功能合并**：
    *   **微信渠道支持** ([PR #2412](https://github.com/HKUDS/nanobot/pull/2412))：官方合并了微信 Channel 的支持，极大拓展了在国内即时通讯场景的落地能力。
    *   **MCP 图片支持** ([PR #2416](https://github.com/HKUDS/nanobot/pull/2416))：支持 MCP 工具返回 Base64 图片，修复了二维码等图片显示为乱码的问题。

## 4. 社区热点
今日社区讨论集中在**资源消耗**与**新渠道接入**，以下是活跃度最高的议题：

1.  **[Issue #2343] 上下文长度溢出问题** (评论 14 条)
    *   **诉求**：用户配置了较小的 `contextWindowTokens` 但无效，导致 LLM 报错 `maximum context length exceeded`。
    *   **分析**：用户希望 Agent 能自动根据配置截断历史记录，而不是直接崩溃。这反映出当前的上下文管理策略对用户不够透明。
2.  **[Issue #1873] 安全性隔离缺陷** (评论 10 条)
    *   **诉求**：Agent 可以通过 `exec()` 读取 `config.json` 并泄露 API Key。
    *   **分析**：这是一个架构级的安全增强请求，讨论非常激烈，已有对应的 [PR #1940](https://github.com/HKUDS/nanobot/pull/1940) 尝试引入 Bubblewrap 沙箱机制。
3.  **[Issue #2375] 心跳机制导致巨额 Token 消耗** (评论 8 条)
    *   **诉求**：每 30 分钟的心跳任务导致会话日志无限堆积，单次消耗达 56 万 Token。
    *   **分析**：社区对 Token 成本非常敏感，已催生 [PR #2420](https://github.com/HKUDS/nanobot/pull/2420) 等多个修复方案。

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及资源管理和模型兼容性，部分已有修复方案：

*   **严重**:
    *   **Token 消耗失控** ([#2375](https://github.com/HKUDS/nanobot/issues/2375))：心跳任务导致历史记录无限膨胀。**[已有 Fix PR #2420]**
    *   **安全泄露风险** ([#1873](https://github.com/HKUDS/nanobot/issues/1873))：Agent 有权读取自身配置文件中的密钥。**[已有 Fix PR #1940]**
*   **中等**:
    *   **上下文管理失效** ([#2343](https://github.com/HKUDS/nanobot/issues/2343))：`run_agent_loop` 未正确检查 `contextWindowTokens`。
    *   **僵尸进程堆积** ([#2405](https://github.com/HKUDS/nanobot/issues/2405))：`exec` 工具产生的子进程未被回收。**[已修复 PR #2410]**
    *   **Workspace 切换导致 CRON 任务混乱** ([#2358](https://github.com/HKUDS/nanobot/issues/2358))：切换工作空间后，旧空间的 CRON 任务仍在运行。**[已有 Fix PR #2204]**
*   **轻微**:
    *   **MCP 工具热更新失效** ([#2325](https://github.com/HKUDS/nanobot/issues/2325))：MCP Server 更新工具后，Agent 无法识别新工具。

## 6. 功能请求与路线图信号
从 Issues 和活跃的 PRs 来看，下一阶段的路线图将重点关注以下领域：

1.  **多模态与渠道扩展**：
    *   **OpenWebUI 支持** ([#2389](https://github.com/HKUDS/nanobot/issues/2389))：用户希望将 NanoBot 作为后端接入 OpenWebUI。
    *   **Groq 语音转文字语言指定** ([#2421](https://github.com/HKUDS/nanobot/issues/2421))：增强语音识别的准确性。
2.  **企业级特性增强**：
    *   **故障转移** ([PR #2417](https://github.com/HKUDS/nanobot/pull/2417))：引入 Fallback Models，当主模型不可用时自动切换。这极有可能被合并，提升生产环境稳定性。
    *   **架构分离** ([#2399](https://github.com/HKUDS/nanobot/issues/2399))：请求支持 `--data-dir`，以便在 K8s 环境中更优雅地分离配置与运行数据。

## 7. 用户反馈摘要
*   **痛点**：用户对**隐形 Token 消耗**（如心跳任务）感到焦虑；配置文件中的 Context Window 设置被认为**不起作用或难以理解**。
*   **场景**：多工作空间切换、长期运行的心跳监控任务、以及通过飞书/微信等 IM 工具进行交互是目前主要的使用场景。
*   **满意点**：对**微信渠道**的支持表示高度期待，这解决了国内用户最大的落地痛点之一。

## 8. 待处理积压
以下重要 Issue 长期未被有效解决或处于 Open 状态，建议维护者关注：

*   **[#1873 安全隔离]** (Open 自 2026-03-11)：涉及核心架构调整，需尽快确认 [PR #1940](https://github.com/HKUDS/nanobot/pull/1940) 的合并计划。
*   **[#1315 Discord 指令冲突]** (Open 自 2026-02-28)：Discord 原生 Slash 指令与 NanoBot 冲突，长期影响 Discord 社区体验。
*   **[#144 Gemini Key 错误]** (Open 自 2026-02-05)：使用 Gemini 模型时报错，影响特定模型提供商的用户接入。

---
*数据来源：GitHub NanoBot Repository (2026-03-24)*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

这里是 **Zeroclaw** 项目 2026-03-24 的动态日报。

### 1. 今日速览
Zeroclaw 项目今日正式发布了 **v0.6.0** 版本，标志着项目进入了新的里程碑。版本更新包含 macOS 桌面端支持、媒体管道以及 SOP 引擎改进。社区活跃度极高，过去24小时内有 42 条 Issue 更新和 50 条 PR 更新，显示出维护者和贡献者正在高强度地进行代码合并与问题修复。然而，关于安全策略与易用性平衡的讨论（如 Issue #1478）依然激烈，部分用户反馈配置门槛较高。总体而言，项目处于快速迭代期，新功能引入与稳定性修复并重。

### 2. 版本发布
- **[v0.6.0](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.6.0)**
  - **更新亮点**：
    - **macOS 桌面菜单栏应用**：基于 Tauri 2.0 构建，支持自动配对、状态感知图标（连接/工作/错误/断开）。
    - **媒体管道与频道增强**：引入媒体管道频道。
    - **SOP 引擎与 CLI 工具**：改进了 SOP 引擎，集成了 codex、gemini 等工具。
    - **常规改进**：增量优化与打磨。
  - **注意**：此次更新涉及较大的架构调整（如 Tauri 引入），建议 macOS 用户关注桌面客户端的适配情况。

### 3. 项目进展
今日共有 **13** 个 PR 被合并/关闭，主要集中在功能增强和关键修复上，显著提升了项目的跨平台能力和稳定性：
- **桌面端落地**：合并了 [feat: add macOS desktop menu bar app (Tauri) #4454](https://github.com/zeroclaw-labs/zeroclaw/pull/4454)，为 macOS 用户提供了原生控制体验。
- **基础设施与安全**：
  - [feat(security): wire LeakDetector into outbound message path #4457](https://github.com/zeroclaw-labs/zeroclaw/pull/4457)（Open/Active）：增强了出站消息的凭证泄露检测。
  - [feat(ci): add per-component path labels and labeler workflow #4461](https://github.com/zeroclaw-labs/zeroclaw/pull/4461)：优化了 CI/CD 流程和 PR 标签管理。
- **核心修复**：
  - [Chore/config schema #4362](https://github.com/zeroclaw-labs/zeroclaw/pull/4362)：修复了 macOS 特定的路径解析测试失败问题。
  - [feat: live tmux streaming, cron-bot dedup, build tooling #4450](https://github.com/zeroclaw-labs/zeroclaw/pull/4450)：增强了 tmux 流式传输和定时任务去重。

### 4. 社区热点
今日讨论最活跃的议题集中在**安全策略的灵活性**与**遗留功能恢复**上：
- **[Issue #1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)** (46 评论): 用户强烈抱怨安全配置过于严格，导致 Agent 拒绝执行基本的安装命令，认为 Zeroclaw 变成了“只能聊天的机器人”。这反映了高级用户对“逃逸安全沙箱”或“上帝模式”的强烈需求。
- **[Issue #3818](https://github.com/zeroclaw-labs/zeroclaw/issues/3818)** (5 评论): 指出从 `main` 分支迁移到 `master` 后，丢失了关键的安全参数和 `task_plan` 工具，引发了社区对功能回归的关注。
- **[Issue #4298](https://github.com/zeroclaw-labs/zeroclaw/issues/4298)**: 这是一个商业合作咨询，表明项目受到了外部服务提供商的关注，社区影响力正在扩大。

### 5. Bug 与稳定性
今日报告了多个阻断性（S1）和严重（S0）Bug，主要集中在工具调用和兼容性上：
- **S0 / S1 级别 Bug**：
  - **[Issue #4445](https://github.com/zeroclaw-labs/zeroclaw/issues/4445)**: Docker/Podman 镜像内无法读写文件，且缺少必要的系统指令，导致 Agent 瘫痪。
  - **[Issue #4408](https://github.com/zeroclaw-labs/zeroclaw/issues/4408)**: 所有使用 WebSocket 的频道不遵守代理设置，影响特定网络环境下的使用。
  - **[Issue #4442](https://github.com/zeroclaw-labs/zeroclaw/issues/4442)**: `allowed_tools` 字段若非空，定时任务将无法运行。
  - **[Issue #4400](https://github.com/zeroclaw-labs/zeroclaw/issues/4400)**: 工具调用仅返回日志标签而非实际输出，导致工作流中断。
- **修复情况**：
  - 针对 #4442 和工具调用相关的问题，已有 [fix(channels): prevent duplicate tool call notifications #4448](https://github.com/zeroclaw-labs/zeroclaw/pull/4448) 等提交正在处理中，但部分核心问题（如 Docker 权限）仍需进一步验证。

### 6. 功能请求与路线图信号
- **Database-first 架构**：[Issue #4028](https://github.com/zeroclaw-labs/zeroclaw/issues/4028) 提议基于 pgvector 和图能力的数据库优先记忆架构。结合今日的 PR [feat(memory): add pgvector backend with hybrid search #4112](https://github.com/zeroclaw-labs/zeroclaw/pull/4112)，**预计该功能将在下一版本中作为实验性特性推出**。
- **全频道流式支持**：[Issue #4452](https://github.com/zeroclaw-labs/zeroclaw/issues/4452) 请求为 Discord 和 Matrix 添加“中途流式传输”支持，以匹配 Telegram 的体验。
- **沙箱增强**：[PR #4443](https://github.com/zeroclaw-labs/zeroclaw/pull/4443) 提出添加基于路径验证的软件沙箱回退机制，预示着项目将加强对没有 OS 级沙箱环境的支持。

### 7. 用户反馈摘要
- **痛点**：用户对安全策略的“一刀切”感到沮丧，认为在个人开发环境中缺乏“完全放权”的选项，导致需要手动干预过多。
- **稳定性担忧**：分支迁移导致了部分功能（如 MCP 服务器发现、旧版工具）丢失，用户呼吁开发团队加强回归测试。
- **积极信号**：v0.6.0 的 macOS 原生应用受到了期待，用户对 Tauri 带来的轻量化体验表示欢迎。

### 8. 待处理积压
- **[Issue #1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478)**: 尽管已关闭，但关于“安全与易用性”的争议并未完全解决，建议维护者重新审视是否有必要引入更灵活的“安全预设配置”。
- **[Issue #3818](https://github.com/zeroclaw-labs/zeroclaw/issues/3818)**: 涉及从旧分支丢失的核心功能，需确认是否已完全在 `master` 分支中补齐。
- **[Issue #4028](https://github.com/zeroclaw-labs/zeroclaw/issues/4028)**: 关于长期记忆架构的重构建议，目前状态为 Open，需要核心团队给出明确的路线图反馈。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

以下是 PicoClaw 项目 2026-03-24 的动态日报。

# PicoClaw 项目动态日报 (2026-03-24)

## 1. 今日速览
PicoClaw 项目今日保持**极高活跃度**，社区贡献势头强劲。过去24小时内共有 56 条 PR 更新（其中 34 条已合并/关闭）和 25 条 Issue 更新。项目正处于架构重构的关键时期，核心开发者 @yinwm 发起了 **Agent Refactor Phase 2 (Multi-Agent Collaboration)** 的规划，标志着项目正从单体智能向多智能体协作演进。同时，语音交互（ASR/TTS）功能经过多次迭代（PR #1852, #1939）即将迎来全面落地，这将极大地丰富机器人的交互模态。

## 2. 版本发布
*   **状态**：过去24小时无新版本发布。
*   **观察**：目前的开发重点集中在 `feat/asr-tts` 和 Agent 架构重构上，预计在完成 Multi-Agent 核心代码和多渠道语音支持后，可能会发布 v0.3.0 或类似的里程碑版本。

## 3. 项目进展
今日合并的 PR 显著提升了项目的**稳定性、扩展性和安全性**，主要进展如下：

*   **语音交互里程碑**：PR #1852 (Universal ASR/TTS) 的推进与 PR #1939 (Refactor/asr tts) 的提出，标志着项目正在整合 Discord、Telegram 和微信的语音收发能力，支持 Groq/ElevenLabs/OpenAI 等多种后端。
*   **云厂商支持扩展**：PR #1903 合并，正式引入 **AWS Bedrock** 作为 LLM Provider，利用 Converse API 增强了对企业级云服务的支持。
*   **安全性增强**：PR #1930 合并，新增了对 Tool Call 结果中敏感数据（API Key、Secrets）的过滤功能，防止密钥泄露给 LLM，提升了生产环境下的安全性。
*   **推理能力修复**：PR #1907 修复了 `reasoning_channel_id` 在 OpenAI 兼容提供商下的回退问题，确保模型的思维链内容能正确路由到指定频道。
*   **前端体验优化**：PR #1933 合并，Web UI 新增了 Tool Feedback 配置，允许用户在工具执行前预览参数，提升了可控性。

## 4. 社区热点
*   **[Roadmap] Meta: Agent Refactor Phase 2** ([#1934](https://github.com/sipeed/picoclaw/issues/1934))
    *   **热度**：由核心贡献者 @yinwm 发起。
    *   **分析**：这是继 Phase 1 重构完成后的重大路线图更新。社区正致力于实现 **"单 Pico 内的多智能体协作"**，旨在解决当前代码在扩展新行为时的复杂性，并为未来的分布式智能体网络打下基础。
*   **[Feature] Seahorse Memory System** ([#1919](https://github.com/sipeed/picoclaw/issues/1919))
    *   **热度**：吸引了关于 AI 记忆架构的深度讨论。
    *   **分析**：提议引入类似海马体的生物启发式记忆系统，通过短期/长期记忆压缩来优化上下文利用。这反映了社区对解决 LLM "遗忘" 和上下文窗口限制的迫切需求。
*   **[Feature] TTS and ASR Support** ([#1648](https://github.com/sipeed/picoclaw/issues/1648))
    *   **热度**：评论数达 22 条。
    *   **分析**：作为语音功能的总设计文档，该 Issue 汇集了对多种 TTS/ASR 引擎和传输协议的讨论，配合今日的 PR 动态，显示出这是近期开发的绝对重心。

## 5. Bug 与稳定性
今日报告了若干影响特定场景的 Bug，部分已有修复方案：

*   **[已修复] 配置加载错误**：Issue #1936 指出 Telegram 在 Termux 环境下失败，PR #1938 迅速修复了微信配置错误覆盖 Telegram 配置的问题。
*   **[已修复] 心跳泄漏**：Issue #1824 报告心跳触发时会向最后活跃频道发送工具反馈。PR #1937 已提交修复，抑制心跳运行时的工具反馈。
*   **[待处理] 重复回复问题**：Issue #1909 报告在多智能体路由设置下，使用 `message` 工具会导致 Agent 发送重复回复。目前尚无链接的 PR。
*   **[待处理] 鉴权失败**：Issue #1901 报告配置 Step 模型时启动失败 (`no API key configured`)，可能与 PR #1928 修复的 Launcher 保存 API Key 问题有关。
*   **[已知问题] Cron 任务静默**：Issue #1058 指出 `deliver=false` 的 Cron 任务会丢弃 LLM 响应，导致用户收不到反馈。

## 6. 功能请求与路线图信号
*   **安全执行扫描**：Issue #1931 与 PR #1932 提议集成 **Tirith** 安全工具，在 Shell 命令执行前进行安全扫描（检测同形异义字攻击、管道提权等）。这是一个高质量的安全增强提议，PR 已提交。
*   **模型级联故障转移**：Issue #1908 提议在遇到 Rate Limit 时自动切换到备用模型。这是提升服务高可用性的关键特性，符合当前 Agent 稳定性的需求。
*   **生物启发式记忆**：Issue #1919 提出的 "Seahorse" 记忆系统若被采纳，将是 Agent 架构层面的重大升级。

## 7. 用户反馈摘要
*   **部署与配置**：用户在配置特定提供商（如 Step、OpenRouter）时仍遇到鉴权和模型 ID 识别问题，反映出文档或错误提示仍有优化空间。
*   **交互体验**：用户对 **语音交互** 的期待极高，尤其是希望在移动端（Termux/Telegram）实现无缝的语音对话。
*   **多模态需求**：Issue #1503 的关闭与相关 PR 的合并表明，用户对 "发送语音 -> 文本处理 -> 语音回复" 的完整闭环需求强烈。

## 8. 待处理积压
*   **长期未决的 Cron 问题**：Issue #1058 (Cron deliver=false 丢弃消息) 自 03-04 创建至今仍未彻底解决，影响定时任务的可靠性。
*   **Reasoning Content 路由**：虽然 PR #1907 修复了部分问题，但 Issue #1746 的关闭记录显示在不同 Provider 间仍存在差异，需要持续关注兼容性。
*   **历史记录持久化**：PR #1709 (Session history persistence) 仍在 Open 状态，该功能对于 Agent 记忆连贯性至关重要，建议优先 Review。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-24)

**分析师**：AI Open Source Analyst
**数据周期**：2026-03-23 至 2026-03-24

---

## 1. 今日速览

NanoClaw 今日呈现出**极高的社区活跃度**，过去24小时内共有 15 条 Issue 更新和惊人的 38 条 PR 更新，显示出项目正处于功能快速迭代与生态扩展的爆发期。尽管没有新的官方版本发布，但合并了 11 个 PR，主要集中在**新的沟通渠道集成**（如 Emacs、Signal）和**AI 模型路由的底层重构**。社区对**安全性问题**（如容器逃逸、数据渗透）的关注持续升温，同时大量开发者正通过 "Skill" 机制为 NanoClaw 贡献垂直领域能力。目前待合并 PR 数量达到 27 个，表明项目正处于功能冻结或大量审核阶段，核心团队面临较大的 Code Review 压力。

## 2. 版本发布

*   **无新版本发布**。

## 3. 项目进展

今日共有 11 个 PR 被合并/关闭，显著推进了项目的多模态交互能力和工具链丰富度：

*   **多渠道接入能力增强**：
    *   **Emacs 集成**：合并了 PR [#1375](https://github.com/qwibitai/nanoclaw/pull/1375)，通过本地 HTTP 桥接方案，让 Emacs 成为 NanoClaw 的原生客户端，深受极客用户欢迎。
    *   **Signal 集成**：PR [#1121](https://github.com/qwibitai/nanoclaw/pull/1121) 处于待合并状态（关联 Issue #1121），但相关 Skill 已经非常成熟，即将支持 Signal 协议接入。
*   **知识库与工具链优化**：
    *   **知识库迁移**：PR [#1359](https://github.com/qwibitai/nanoclaw/pull/1359) 成功将 knowledge-warehouse 迁移至 NanoClaw 知识库系统，整理了 44 条快速笔记和 22 个完整条目。
    *   **Google Meet 技能**：PR [#1377](https://github.com/qwibitai/nanoclaw/pull/1377) 新增了容器化技能，支持通过 Shell 脚本创建 Google 会议，无 Python 依赖，更轻量。
*   **核心运行时改进**：
    *   **Linear 集成流**：PR [#1352](https://github.com/qwibitai/nanoclaw/pull/1352) 实现了工具调用和思考过程的实时流式传输到 Linear 会话。
    *   **模型选择灵活性**：PR [#1238](https://github.com/qwibitai/nanoclaw/pull/1238) 允许针对不同群组配置不同的 Claude 模型（如 Haiku 对应轻量任务，Sonnet 对应重度任务）。

## 4. 社区热点

今日讨论最热烈的内容集中在**安全性**与**架构扩展**两个维度：

*   **架构裁决：Slack 接入自由对话** ([#1363](https://github.com/qwibitai/nanoclaw/issues/1363))
    *   **热度**：High
    *   **诉求**：作者 @krislavten 提出利用现有的 Socket Mode 能力，替代当前仅支持 4 个硬编码命令的 Slack 机器人，实现真正的多轮自由对话。这反映了企业用户将 NanoClaw 作为内部 Slack 机器人使用的强烈需求。
*   **安全风险：WebFetch 未净化导致拒绝服务** ([#842](https://github.com/qwibitai/nanoclaw/issues/842))
    *   **热度**：High (Critical Priority)
    *   **分析**：Issue 指出 NanoClaw 在获取外部网页内容时，未过滤 Anthropic 的“拒绝字符串（refusal string）”，恶意网页可注入该字符串导致 Agent 会话强制终止。这是一个针对特定模型特性的高级攻击向量。
*   **多模型支持：引入 GitHub Copilot SDK** ([#1350](https://github.com/qwibitai/nanoclaw/issues/1350))
    *   **热度**：Medium
    *   **诉求**：用户希望摆脱对 Anthropic Claude 的单一依赖，请求原生支持 GitHub Copilot SDK（GPT-4.1 等）。这反映了“多云/多模型”策略在 Agent 部署中的刚需。

## 5. Bug 与稳定性

今日报告了数个高危安全问题，需立即关注：

1.  **[Critical] 容器命令注入漏洞** ([#457](https://github.com/qwibitai/nanoclaw/issues/457))
    *   **问题**：`stopContainer()` 函数在 `src/container-runtime.ts` 中使用了 Shell 字符串插值且未转义，攻击者可通过构造容器名执行任意命令。
    *   **状态**：Open，目前无关联 Fix PR。
2.  **[Critical] WebSearch/WebFetch 远程终止漏洞** ([#842](https://github.com/qwibitai/nanoclaw/issues/842))
    *   **问题**：外部不可信数据包含 Anthropic 拒绝字符串会导致 Agent 崩溃。
    *   **状态**：Open，需增加内容过滤层。
3.  **[High] Agent-runner 缓存不刷新** ([#1361](https://github.com/qwibitai/nanoclaw/issues/1361))
    *   **问题**：`data/sessions/{group}/` 下的源码缓存仅在目录不存在时创建，导致更新代码后旧群组无法同步，开发体验极差。
    *   **状态**：Open，PR [#1384](https://github.com/qwibitai/nanoclaw/pull/1384) 似乎正在尝试解决挂载问题。

## 6. 功能请求与路线图信号

*   **多 AI Provider 路由** ([PR #1383](https://github.com/qwibitai/nanoclaw/pull/1383))
    *   **描述**：引入了多提供商凭证代理（OpenRouter, OpenAI, Gemini, Moonshot）。这是迈向"模型中立"基础设施的关键一步，极有可能在近期合并。
*   **持久化记忆 MemOS** ([Issue #1130](https://github.com/qwibitai/nanoclaw/issues/1130) / [PR #1131](https://github.com/qwibitai/nanoclaw/pull/1131))
    *   **描述**：通过 `/add-memos` 技能集成 MemOS，提供语义搜索和知识图谱能力。鉴于 Agent "无状态" 的痛点，此功能优先级很高。
*   **基于能力的权限系统** ([Issue #779](https://github.com/qwibitai/nanoclaw/issues/779))
    *   **描述**：请求引入类似 Android Manifest 的机制，限制 Skills 对网络、文件系统的访问范围。这是从"玩具"走向"生产环境"必经的安全沙箱化过程。

## 7. 用户反馈摘要

*   **痛点：安全配置复杂**：用户 @calebfaruki 在 Issue [#865](https://github.com/qwibitai/nanoclaw/issues/865) 中指出，花费数天时间进行安全加固，认为当前架构过度信任容器，脚本层级设计存在隐患。
*   **痛点：缺乏 Web UI**：Issue [#1273](https://github.com/qwibitai/nanoclaw/issues/1273) 显示，用户 @rozik 因为不想通过 Messenger 使用，自行开发了一个多会话 Web UI。这表明官方对 Web 端的支持尚不足，社区有强烈的自建 UI 需求。
*   **正面：Skills 机制受欢迎**：大量 PR（如 Instacart 购物车 #1382、本地语音 #1250）表明，开发者非常喜欢通过 `/add-skill` 的方式扩展 Agent 能力，认为这种方式既模块化又易于分享。

## 8. 待处理积压

*   **[High Priority] 网络数据渗出限制** ([Issue #458](https://github.com/qwibitai/nanoclaw/issues/458))
    *   **描述**：Agent 容器目前拥有无限制的网络访问权限，存在严重的数据泄露风险。
    *   **状态**：已有 4 个赞，长期未解决。建议结合 PR #1380 中的 `agentsh` 安全策略引擎一并处理。
*   **[Medium Priority] 间接提示注入文档** ([Issue #411](https://github.com/qwibitai/nanoclaw/issues/411))
    *   **描述**：关于间接提示注入风险的文档警告一直未合并到官方文档中。
    *   **状态**：Good first issue，适合新贡献者领取。

---
*数据来源：NanoClaw GitHub Repository (2026-03-24)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 (2026-03-24)

**分析师注**：NullClaw 今日显示出极高的社区贡献活跃度，虽然官方未发布新版本，但社区成员针对昨日集中爆发的 Issue 提交了一揽子修复 PR，项目正处于快速迭代修正期。

---

## 1. 今日速览
过去 24 小时，NullClaw 社区活跃度显著提升，共产生 **8 条 Issue 更新**（7 新开/1 关闭）和 **11 条 PR 更新**（10 待合并/1 关闭）。虽然没有新的官方版本发布，但核心贡献者 `@manelsen` 针对今日报告的多个关键 Bug 和功能缺失，集中提交了修复代码。目前 PR 合并积压较多（10 个待合并），显示出项目在功能扩展与代码审查之间存在一定的剪刀差，预计近期会有一次较大的版本合并潮。

## 2. 版本发布
**无**。
*注：虽然无正式 Release，但待合并的 PR 池中已包含大量重要修复，建议关注后续合并动态。*

## 3. 项目进展
尽管今日仅合并/关闭了 1 个 PR (#702)，但 **10 个待合并 PR** 预示着项目正在补齐重要功能短板：

*   **核心修复与功能补全**：`@manelsen` 提交了多个关键 PR，包括修复 `file_append` 工具未接入运行时的问题 ([PR #708](https://github.com/nullclaw/nullclaw/pull/708))，以及为 OpenAI 兼容 API 添加 `session_id` 和自定义参数支持 ([PR #709](https://github.com/nullclaw/nullclaw/pull/709))，解决了用户最迫切的 API 兼容性痛点。
*   **部署与运维优化**：针对容器化部署环境，`@manelsen` 提交了支持从进程环境变量读取 Pushover 凭证的特性 ([PR #707](https://github.com/nullclaw/nullclaw/pull/707))，修复了 Docker 环境下的配置读取问题。
*   **多 Agent 架构完善**：`@Aisht669` 贡献了 Lark（飞书）消息接收后的表情反馈支持 ([PR #704](https://github.com/nullclaw/nullclaw/pull/704))，增强了 IM 集成的交互体验。

## 4. 社区热点
今日讨论焦点集中在 **Agent 互联** 与 **Provider 兼容性** 上：

1.  **A2A 协议客户端支持** ([Issue #700](https://github.com/nullclaw/nullclaw/issues/700))
    *   **热度**：新提案，迅速获得关注。
    *   **分析**：用户 `@georgeglarson` 指出 NullClaw 虽然实现了 A2A 协议的服务端，但缺乏客户端能力（即作为 Caller 去调用其他 Agent）。这反映了高级用户正在构建多智能体协作网络，单体 Agent 已无法满足复杂场景。
2.  **OpenAI API 兼容性缺失** ([Issue #701](https://github.com/nullclaw/nullclaw/issues/701))
    *   **热度**：标记为 "Deal breaker"（破坏性/决定性）。
    *   **分析**：用户 `@ivan-tkatchev` 严厉指出缺少 `session_id` 传递导致无法正常使用 OpenAI 兼容接口。这直接促使了 [PR #709](https://github.com/nullclaw/nullclaw/pull/709) 的诞生，表明 Provider 层的兼容性是用户留存的关键。

## 5. Bug 与稳定性
今日报告了多个涉及核心功能的 Bug，目前大部分已有对应的 Fix PR：

*   **🔴 严重 [已修] 工具注册缺失**：`file_append` 工具代码存在但未在运行时注册，导致 LLM 无法调用。
    *   Issue: [#699](https://github.com/nullclaw/nullclaw/issues/699) | Fix PR: [#708](https://github.com/nullclaw/nullclaw/pull/708)
*   **🔴 严重 [已修] Telegram 通道路由错误**：配置子代理后，Telegram Bot 错误地识别为第一个子代理，而非主代理。
    *   Issue: [#696](https://github.com/nullclaw/nullclaw/issues/696) | Fix PR: [#705](https://github.com/nullclaw/nullclaw/pull/705)
*   **🟡 中等 [已修] Heartbeat 无日志**：开启诊断模式下 Heartbeat 仍无日志输出，难以排查定时任务状态。
    *   Issue: [#703](https://github.com/nullclaw/nullclaw/issues/703) | Fix PR: [#710](https://github.com/nullclaw/nullclaw/pull/710)
*   **🟡 中等 [已修] 环境变量读取受限**：Pushover 工具仅支持 `.env` 文件，不支持 `std.posix.getenv`，导致 GitOps 部署困难。
    *   Issue: [#698](https://github.com/nullclaw/nullclaw/issues/698) | Fix PR: [#707](https://github.com/nullclaw/nullclaw/pull/707)

## 6. 功能请求与路线图信号
*   **Agent-to-Agent (A2A) 客户端工具** ([Issue #700](https://github.com/nullclaw/nullclaw/issues/700))：用户已自行实现 `a2a_call` 工具原型。鉴于 NullClaw 已支持 A2A 服务端，纳入客户端实现将完善其 P2P Agent 网络的生态闭环，**极有可能**被纳入下个版本规划。
*   **Qwen Code CLI 支持** ([Issue #647](https://github.com/nullclaw/nullclaw/issues/647))：该 Issue 于今日关闭，虽然未合并代码，但表明社区对扩展 Provider（特别是高性价比模型如 Qwen）有持续需求。

## 7. 用户反馈摘要
*   **痛点：配置灵活性**：多位用户反馈 `config.json` 对环境变量的处理不够直观，期望支持 `${VAR}` 插值，但实际上项目不支持 ([Issue #697](https://github.com/nullclaw/nullclaw/issues/697))。PR #706 选择在文档中明确澄清而非修改代码，这表明项目组倾向于在代码层面保持配置的静态解析，用户需通过外部脚本预处理配置文件。
*   **场景：多实例协作**：有用户正在尝试运行 "Public Doorman + Private Agent" 的双实例架构 ([Issue #700](https://github.com/nullclaw/nullclaw/issues/700))，这表明 NullClaw 正被用于构建复杂的、分层级的 AI 服务系统，而不仅仅是单一助手。

## 8. 待处理积压
*   **PR 积压预警**：目前有 **10 个 PR** 处于 Open 状态，且多为重要修复（如 #708, #709, #705）。建议维护者尽快进行 Code Review 并合并，以解决当前主干分支存在的工具不可用和路由错误问题。
*   **长期 Issue**：关于 `NULLCLAW_HOME` 权限处理的修复 ([PR #692](https://github.com/nullclaw/nullclaw/pull/692)) 已停留 2 天，涉及 Docker 环境下的路径权限问题，对容器化部署用户影响较大，建议优先处理。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是为您生成的 **IronClaw** 项目 2026-03-24 动态日报：

---

# IronClaw 项目日报 (2026-03-24)

## 1. 今日速览
IronClaw 项目今日处于**高活跃度开发状态**，虽然无新版本发布，但代码库发生了显著变动。过去24小时内共有 **50 个 PR 更新**（其中 43 个处于待合并/审查状态），显示出核心团队正在进行大规模的功能重构与架构升级。相比之下，社区反馈端的 Issues 处理略显滞后，**今日无已关闭的 Issue**，新增的 13 个 Issue 主要集中在多渠道集成和特定 LLM 后端的兼容性问题上。总体来看，项目正处于"功能大爆发"与"架构重组"并行期，核心功能（如引擎、工具链、认证）推进迅速，但用户侧的边缘 Bug 有所积压。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
尽管没有版本发布，但核心团队合并了关键修复，并推进了数个影响深远的重构 PR：

*   **架构重构 (v2 Engine)**：核心开发者 @ilblackdragon 提交了 **[PR #1557](https://github.com/nearai/ironclaw/pull/1557)**，旨在引入全新的 `ironclaw_engine` crate，统一执行模型。这是一个超过 7000 行代码的大型重构，旨在替代当前碎片化的抽象层，预计将大幅提升 Agent 的执行稳定性与扩展性。
*   **关键修复合并**：
    *   **[PR #1550 (CLOSED)](https://github.com/nearai/ironclaw/pull/1550)**：修复了过去一周合并代码中遗留的 8 个安全性、性能及逻辑正确性问题，扫清了近期迭代的代码障碍。
*   **待合并的重要功能**：
    *   **[PR #1581](https://github.com/nearai/ironclaw/pull/1581)**：修复了 LLM 模型选择无法持久化的顽疾，将设置写入 `.env` 和 DB，确保重启后配置不丢失。
    *   **[PR #1118](https://github.com/nearai/ironclaw/pull/1118)**：引入多租户认证与工作空间隔离，这是迈向企业级/SaaS 部署的关键一步。
    *   **[PR #1600](https://github.com/nearai/ironclaw/pull/1600)**：增加了 ACP (Agent Client Protocol) 支持，允许 IronClaw 调度任何兼容 ACP 的编码 Agent（如 Kiro, Codex）。

## 4. 社区热点
今日社区讨论的焦点集中在 **渠道扩展** 和 **底层架构改进**：

*   **微信渠道支持呼声高**：**[Issue #1584](https://github.com/nearai/ironclaw/issues/1584)** 提出需要 IronClaw 的微信插件，获得了社区的关注（👍 1）。随着 OpenClaw 微信插件的发布，用户强烈希望 IronClaw 也能尽快跟进。
*   **架构借鉴与优化**：**[Issue #407](https://github.com/nearai/ironclaw/issues/407)** 讨论了借鉴 Hermes Agent 架构的可行性，涉及多渠道和工具执行的模式优化，获得了 2 个点赞，显示了高级用户对内核架构的关注。
*   **安装体验问题**：**[Issue #602](https://github.com/nearai/ironclaw/issues/602)** 反映了默认安装包中缺失 Telegram 支持，导致用户体验受阻。该 Issue 活跃度高（6 条评论），表明安装包的分层策略或构建流程仍需优化。

## 5. Bug 与稳定性
今日报告了多个影响特定场景的 Bug，尤其是 TEE 环境和 Windows 平台：

*   **严重**：**[Issue #1537](https://github.com/nearai/ironclaw/issues/1537)** - WASM 凭证注入在 NEAR AI 托管的 TEE 环境中失败。Secrets 被存储但未在运行时注入，导致托管 Agent 无法正常使用工具。
*   **安全误报**：**[Issue #1538](https://github.com/nearai/ironclaw/issues/1538)** - Windows 版安装包被 Microsoft Defender 误报为木马，这会严重影响 Windows 用户的首次安装体验。
*   **平台特异性**：
    *   **[Issue #1577](https://github.com/nearai/ironclaw/issues/1577)**：Windows v0.21.0 上 Ollama provider 持续返回 502 Bad Gateway。
    *   **[Issue #1520](https://github.com/nearai/ironclaw/issues/1520)**：通义千问 集成出现 405 错误，似乎是特定 API 端点的兼容性问题。
*   **逻辑缺陷**：
    *   **[Issue #1596](https://github.com/nearai/ironclaw/issues/1596)**：Telegram 引导流程可能会在聊天中直接索要 Bot Token，存在安全隐患且会误判 Token 无效。
    *   **[Issue #1595](https://github.com/nearai/ironclaw/issues/1595)**：LLM 偶尔会"遗忘"已激活的 Telegram 频道，重复要求用户激活。

## 6. 功能请求与路线图信号
*   **企业级用户管理**：**[Issue #1605](https://github.com/nearai/ironclaw/issues/1605)** 提出了基于数据库的用户管理、注册及 API Token CRUD 功能，标记为 P1 优先级。结合 **[PR #1118]** 的多租户隔离，这表明下一个版本将重点攻克**多租户与权限管理**。
*   **LLM 配置热重载**：**[Issue #1350](https://github.com/nearai/ironclaw/issues/1350)** 请求在不重启进程的情况下热重载 LLM Provider 配置。虽然目前已有 **[PR #1581]** 修复持久化问题，但热重载机制尚未完全到位，这是提升 Web UI 体验的关键需求。
*   **协议支持扩展**：**[PR #1600]** 提出的 ACP 协议支持表明项目正致力于成为**Agent 编排中心**，不仅能运行自身 Agent，还能调度外部专业 Coding Agent。

## 7. 用户反馈摘要
*   **安装门槛**：用户反映目前的安装流程对非开发者不够友好，特别是 Telegram 等扩展的安装要么需要手动编译，要么频繁失败。
*   **配置困惑**：在使用 OpenAI 兼容接口（如 vLLM）时，系统仍强制要求 NEAR AI Authentication（[Issue #1585](https://github.com/nearai/ironclaw/issues/1585)），这让本地部署用户感到困惑。
*   **稳定性期待**：用户对 WASM 工具在 TEE 中的表现有较高期待，目前的凭证注入失败是一个主要阻碍。

## 8. 待处理积压
*   **长期未解决的安装问题**：**[Issue #602]**（Telegram 安装问题）自 3 月 6 日创建以来仍未解决，且今日仍有活跃讨论。建议维护者优先关注发布构建流程。
*   **安全与合规**：**[Issue #1538]**（Windows Defender 误报）需要尽快在 CI/CD 流程中联系微软进行白名单申报或调整编译策略，以免影响用户增长。
*   **高影响度重构**：**[PR #1557]** 的 v2 引擎重构虽然令人兴奋，但作为 XL 级变更，需要严格的测试覆盖，建议社区重点关注其测试反馈。

---
*分析师总结：IronClaw 正处于从单机/单租户工具向多租户、多协议 Agent 平台演进的关键时期。今日的大规模 PR 活动显示了强大的研发实力，但需警惕快速迭代带来的回归问题（如 TEE 凭证注入）。建议近期优先解决 Windows 平台的稳定性和安装体验问题。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

这里是为您生成的 **LobsterAI** 项目 2026年3月24日 动态日报。

---

# 📊 LobsterAI 项目动态日报 (2026-03-24)

### 1. 今日速览
LobsterAI 项目今日保持**极高活跃度**，随着 `2026.3.23` 版本的发布，社区反馈与贡献迎来小高峰。过去24小时内共有 **18 条新开/活跃 Issue** 和 **36 条 PR 更新**，显示项目正处于快速迭代期。新版本引入了防休眠功能和 UI 优化，但同时也暴露了 Windows 端升级慢、MCP 配置难等一系列兼容性问题。社区方面，针对会话管理、输入体验和导出功能的增强补丁正在积极审核中，整体呈现出“功能大步迈进，稳定性亟待收敛”的态势。

### 2. 版本发布
今日发布了 **[2026.3.23](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.23)** 版本，主要更新如下：
*   **新特性**：
    *   添加防休眠功能，提升长时间任务运行的稳定性。
    *   实现 OpenClaw 助手消息与工具卡片交替显示，优化交互体验。
*   **UI/UX 优化**：由 @liuzhq1986 提交的 UI 细节优化。
*   **Bug 修复**：
    *   修复 IM 频道会话的输入框显示问题，保持完整输入框样式。

### 3. 项目进展
今日共有 **12 个 PR 被合并或关闭**，主要集中在提升多模型支持、用户体验优化及代码质量重构：
*   **多模型 OAuth 支持**：合并了 MiniMax 的 OAuth 登录支持 ([PR #682](https://github.com/netease-youdao/LobsterAI/pull/682))，并推进了 GitHub Copilot 认证集成 ([PR #707](https://github.com/netease-youdao/LobsterAI/pull/707))，大幅降低了用户配置 API Key 的门槛。
*   **输入体验优化**：合并了支持 Ctrl/Cmd+Enter 换行的优化 ([PR #709](https://github.com/netease-youdao/LobsterAI/pull/709))，修复了 IM 频道输入框异常 ([PR #708](https://github.com/netease-youdao/LobsterAI/pull/708))。
*   **功能增强**：正在审核中的 Markdown/JSON 导出功能 ([PR #718](https://github.com/netease-youdao/LobsterAI/pull/718)) 和用户消息重新编辑功能 ([PR #712](https://github.com/netease-youdao/LobsterAI/pull/712)) 显示了项目在对话管理上的深入挖掘。

### 4. 社区热点
*   **[Issue #703](https://github.com/netease-youdao/LobsterAI/issues/703)**: **Windows 升级卡顿**
    *   **热度**：评论数 3
    *   **分析**：用户反馈从 2026.3.17 升级到 2026.3.22 过程极慢（>2分钟），在 30-40% 和 85% 进度条处有明显卡顿。这反映了客户端的增量更新机制或资源下载在特定网络环境下存在瓶颈。
*   **[Issue #724](https://github.com/netease-youdao/LobsterAI/issues/724) & [Issue #728](https://github.com/netease-youdao/LobsterAI/issues/728)**: **MCP 配置困惑**
    *   **热度**：连续多条相关 Issue
    *   **分析**：用户在配置 MCP (Model Context Protocol) 服务时普遍遇到“已同步但 0 tools”或无法调用的问题。这表明当前版本的 MCP 配置引导不够直观，或底层连接状态的反馈机制存在缺陷。

### 5. Bug 与稳定性
今日 Bug 报告主要集中在**安装更新**与**平台兼容性**方面，部分严重问题已有人跟进：
*   **🔴 严重**:
    *   **[Issue #693](https://github.com/netease-youdao/LobsterAI/issues/693)**: Windows 安装新版时提示无法关闭进程，但任务管理器中并无进程，阻碍升级。
    *   **[Issue #692](https://github.com/netease-youdao/LobsterAI/issues/692)**: 2026.3.22 版本开机自启失效。
*   **🟠 中等**:
    *   **[Issue #691](https://github.com/netease-youdao/LobsterAI/issues/691)**: 钉钉机器人重复回复消息（2条），微信端正常，疑似特定渠道的并发或重试逻辑问题。
    *   **[Issue #713](https://github.com/netease-youdao/LobsterAI/issues/713)**: Mac 版无法检测 Ollama 接口 (ERR_ADDRESS_INVALID)，Windows 正常，疑似 Mac 客户端网络权限或 localhost 解析问题。
    *   **[Issue #568](https://github.com/netease-youdao/LobsterAI/issues/568)**: 英文版适配 UI 溢出问题，已有相关修复 PR ([PR #726](https://github.com/netease-youdao/LobsterAI/pull/726)) 提交。

### 6. 功能请求与路线图信号
用户对工具的**可控性**和**数据导出**提出了明确需求，社区开发者响应迅速：
*   **聊天记录导出**：用户请求支持 Markdown/JSON 导出 ([Issue #719](https://github.com/netease-youdao/LobsterAI/issues/719))，**[PR #718](https://github.com/netease-youdao/LobsterAI/pull/718)** 已实现该功能，预计下版本合并。
*   **沙箱容量自定义**：用户请求调整内置沙箱存储上限以安装更多 Python 依赖 ([Issue #699](https://github.com/netease-youdao/LobsterAI/issues/699))，这反映了高级用户对本地 Skill 运行环境的强需求。
*   **语音输入**：用户请求语音输入以减轻打字负担 ([Issue #722](https://github.com/netease-youdao/LobsterAI/issues/722))，目前尚无对应 PR。

### 7. 用户反馈摘要
*   **痛点**：
    *   **升级体验差**：Windows 用户对漫长的升级等待时间感到沮丧。
    *   **MCP 上手难**：配置流程对于非开发者用户不够友好，报错信息晦涩（"0 tools"）。
    *   **IM 集成不稳定**：飞书和钉钉的机器人任务偶发失败或重复回复。
*   **满意点**：
    *   对 UI 优化的直观感受较好（如消息卡片交替显示）。
    *   OAuth 登录（如 MiniMax, Qwen）大大简化了配置流程，获得开发者好评。

### 8. 待处理积压
*   **[Issue #568](https://github.com/netease-youdao/LobsterAI/issues/568)** (国际化适配): 英文版 UI 显示问题自 3月20日 以来仍有反馈，需关注 **[PR #726](https://github.com/netease-youdao/LobsterAI/pull/726)** 的合并进度。
*   **[PR #554](https://github.com/netease-youdao/LobsterAI/pull/554)** (会话状态修复): 针对删除进行中会话导致无法再次对话的修复 PR 已开启数日，建议维护者优先 Review 以解决稳定性问题。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

以下是为您生成的 **TinyClaw (TinyAGI)** 项目 2026-03-24 动态日报。

---

# 📊 TinyClaw (TinyAGI) 项目动态日报
**日期**: 2026-03-24 | **分析师**: AI 开源项目观察员

### 1. 今日速览
TinyClaw 项目今日展现出极高的开发活跃度，呈现出**“重研发、轻交互”**的独立冲刺状态。在过去 24 小时内，项目核心维护者 @jlia0 完成了 **5 个关键 PR 的合并**，涉及底层架构重构、稳定性修复及新功能引入，同时还有 3 个功能性 PR 处于待合并状态。虽然社区 Issue 交互暂显沉寂（0 条更新），但代码提交的高密度推进表明项目正处于功能快速迭代与架构优化的关键时期，尤其是对 Task 管理和 Session 生命周期的完善，显著提升了项目的企业级可用性。

### 2. 版本发布
*   **无新版本发布**：今日无正式 Release 版本推出，当前工作主要集中在主分支的功能整合与测试中。

### 3. 项目进展
今日共有 **5 个 PR 被合并/关闭**，项目整体向更稳定、更易用的方向迈出了坚实一步：

*   **🛠️ 核心技能管理 (Merged #254)**：合并了 `skills-manager` 技能，允许 Agent 通过 REST API 动态搜索和安装技能。这标志着 TinyAGI 向“自我进化”的智能体架构迈出了重要一步。
    *   [PR #254](https://github.com/TinyAGI/tinyagi/pull/254)
*   **⚡ 用户体验优化 (Merged #250)**：修复了消息同步延迟问题。现在用户消息会在入队时立即写入 `agent_messages`，确保 Web UI 的乐观更新能与后端轮询无缝融合，消除了聊天历史出现的“真空期”。
    *   [PR #250](https://github.com/TinyAGI/tinyagi/pull/250)
*   **🛡️ 稳定性修复 (Merged #251)**：解决了 Agent 子进程未能干净退出导致的队列挂起问题。引入了基于结果事件的 30 秒超时强制终止机制，显著提升了系统的鲁棒性。
    *   [PR #251](https://github.com/TinyAGI/tinyagi/pull/251)
*   **📖 文档重构 (Merged #253)**：将 Agent 配置和系统提示词从共享文档迁移至工作区级 `AGENTS.md`，实现了多 Agent 环境下的配置隔离与清洁。
    *   [PR #253](https://github.com/TinyAGI/tinyagi/pull/253)
*   **🔄 架构迁移 (Merged #248)**：将 Telegram Bot 客户端从 `node-telegram-bot-api` 迁移至 `grammY`，彻底修复了长期存在的静默轮询停滞问题。
    *   [PR #248](https://github.com/TinyAGI/tinyagi/pull/253)

### 4. 社区热点
尽管 Issues 区无新动态，但 **PR 区的活跃度极高**，主要集中在以下未合并的功能增强上，显示出项目正在向“全功能项目管理平台”转型：

*   **🔥 焦点功能：Linear 风格任务管理 ([PR #252](https://github.com/TinyAGI/tinyagi/pull/252))**
    *   **状态**: Open
    *   **内容**: 引入了类似 Linear 的任务/项目管理界面，支持 SQLite 持久化、评论线程及自动 ID 生成（如 SYS-1）。
    *   **分析**: 这是今日最受瞩目的未合并 PR，预示着 TinyAGI 将从一个单纯的 Agent 运行时转变为 Agent 协作的 Task Manager。
*   **🔌 新集成：Novita AI 提供商 ([PR #243](https://github.com/TinyAGI/tinyagi/pull/243))**
    *   **状态**: Open
    *   **内容**: 社区贡献者 @Alex-wuhu 提交了对 Novita AI 作为 LLM Provider 的支持。
    *   **分析**: 这是少数由非核心维护者提交的 PR，表明项目开始吸引外部生态集成。

### 5. Bug 与稳定性
今日无新报告的 Bug（Issues 为 0），但在 PR 中**修复了严重的隐性故障**：

*   **严重 [已修复]**: **队列挂起与僵尸进程** ([PR #251](https://github.com/TinyAGI/tinyagi/pull/251))。此前，Agent 子进程中的后台任务会阻止进程退出，导致整个队列停滞。现已通过强制 Kill 机制解决。
*   **严重 [已修复]**: **Telegram Bot 静默失效** ([PR #248](https://github.com/TinyAGI/tinyagi/pull/248))。此前使用的 NTBA 库存在轮询中断但进程存活的缺陷，现已通过迁移至 grammY 解决。

### 6. 功能请求与路线图信号
根据今日的 Open PR，我们可以识别出明确的路线图信号：

1.  **项目管理中心化**: [PR #252](https://github.com/TinyAGI/tinyagi/pull/252) 表明项目正致力于打造一个可视化的、类似 Linear/Jira 的 Agent 任务管理系统。
2.  **UI 布局现代化**: [PR #249](https://github.com/TinyAGI/tinyagi/pull/249) 提出的 Topbar 导航重构，暗示 UI 正在向标准的 SaaS 应用布局靠拢，侧边栏将腾出空间用于更复杂的功能（如上述的任务列表）。
3.  **模型生态扩展**: [PR #243](https://github.com/TinyAGI/tinyagi/pull/243) 显示项目正在降低 LLM 供应商的接入门槛，兼容 OpenAI API 的提供商将更容易接入。

### 7. 用户反馈摘要
*   **缺乏显性反馈**: 由于今日 Issues 区静默，暂无直接的用户抱怨或褒奖。
*   **隐含痛点解决**: 通过观察合并的 PR，可以推断此前用户深受 **“发消息后看不到历史记录”** (#250) 和 **“Telegram Bot 突然无响应”** (#248) 的困扰，这些问题在今日已得到代码层面的解决。

### 8. 待处理积压
当前积压工作量较小，但有两个重要的功能 PR 需要关注：

*   **[Review Required] [PR #252](https://github.com/TinyAGI/tinyagi/pull/252)**: *Linear-style task management*。这是一个大型功能更新，涉及数据库和 UI，建议尽快进行集成测试以防阻塞后续 UI 重构。
*   **[Review Required] [PR #243](https://github.com/TinyAGI/tinyagi/pull/243)**: *Novita AI Provider*。外部贡献者的 PR，建议维护者尽快验收合并，以鼓励社区贡献。

---
**总结**: TinyClaw 今日在底层稳定性（Queue/Telegram）和上层技能管理方面取得了实质性突破。虽然社区声音沉寂，但代码质量与架构演进速度令人印象深刻。未来的看点在于 Task Management 系统何时合并落地。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-03-24)

你好！我是 AI 智能体项目分析师。以下是关于 Moltis 开源项目 2026年3月24日 的动态日报。

---

### 1. 今日速览
Moltis 项目今日呈现出**极高的维护活跃度与功能迭代速度**。虽然过去24小时内没有新版本发布，但项目核心贡献者 @penso 进行了大规模的代码合并与清理工作，一次性关闭了 **10 个 Issues** 和 **36 个 PRs**。这表明项目正处于**功能收敛与稳定性加固阶段**，大量待定的 Feature（如 Vulkan 支持、Telegram 文件发送、Lazy Tool Registry）已从 PR 阶段正式并入主分支。目前的重点是修复 Chrome 登录问题、优化本地 LLM 的 KV Cache 命中率以及增强 Windows 平台的兼容性。

### 2. 版本发布
**本日无新版本发布。**
考虑到大量功能 PR（如 #408 Vulkan 支持, #467 Lazy Tool Registry, #464 文件发送）已在今日合并，预计项目正在为下一个里程碑版本（可能是 v0.9.11 或 v1.0.0-beta）进行最后的集成测试与文档更新。

---

### 3. 项目进展
今日共有 **36 个 PR 被合并**，项目取得了显著进展，主要体现在以下三个方向：

*   **跨平台与本地推理增强**
    *   **[Feature] Vulkan 支持**: PR [#408](https://github.com/moltis-org/moltis/pull/408) 已合并，引入了 `local-llm-vulkan` 特性，允许在不支持 CUDA/Metal 的设备上运行 GGUF 模型，极大扩展了硬件兼容性。
    *   **[Feature] 本地 LLM 优化**: PR [#476](https://github.com/moltis-org/moltis/pull/476)（待合并/活跃）提出将时间戳从系统提示词中移出，以稳定前缀从而提高本地 LLM 的 KV Cache 命中率，显著降低推理延迟。

*   **多渠道集成能力**
    *   **[Feature] 文件发送支持**: PR [#464](https://github.com/moltis-org/moltis/pull/464) 合并，新增 `send_document` 工具，支持将 PDF、ZIP 等文件发送至 Telegram/WhatsApp 等渠道，解决了用户长期请求的痛点。
    *   **[Fix] WhatsApp 易用性**: PR [#473](https://github.com/moltis-org/moltis/pull/473) 修复了 WhatsApp 频道配置不可见的问题，并优化了对贴纸等非标准消息的处理。

*   **架构重构与安全性**
    *   **[Refactor] 模块化架构**: PR [#465](https://github.com/moltis-org/moltis/pull/465) 提取了 `moltis-httpd` crate，将 HTTP 层与核心业务逻辑解耦，便于 TUI 和测试环境依赖。
    *   **[Security] 敏感信息保护**: PR [#472](https://github.com/moltis-org/moltis/pull/472) 在频道配置 API 响应中增加了统一的敏感信息序列化处理，防止密钥泄露。

---

### 4. 社区热点
今日社区关注点主要集中在**浏览器兼容性**和**集成体验**上：

*   **🔥 Issue #370: [Bug] Sign In Failed on Chrome Browsers**
    *   **链接**: [moltis-org/moltis Issue #370](https://github.com/moltis-org/moltis/issues/370)
    *   **分析**: 这是一个严重的高优先级问题。用户在 Chrome/Brave 浏览器上无法登录，仅刷新页面。根因是 Chrome 对 Secure 属性的要求更严格。
    *   **状态**: 该 Issue 已被 PR [#471](https://github.com/moltis-org/moltis/pull/471) 修复并关闭。

*   **💬 Issue #332: [Feature] Telegram integration: support sending file attachments**
    *   **链接**: [moltis-org/moltis/issues/332](https://github.com/moltis-org/moltis/issues/332)
    *   **分析**: 用户强烈希望 Agent 能发送非图片类文件（如 PDF）。该需求通过 PR #464 落地，表明社区对“Agent 作为文件处理中枢”的期待很高。

*   **⚠️ Issue #460: [Bug] WhatsApp Integration is confusing**
    *   **链接**: [moltis-org/moltis/issues/460](https://github.com/moltis-org/moltis/issues/460)
    *   **分析**: 获得了 3 个 👍，反映出目前 WhatsApp 集成的配置门槛过高（如隐藏字段 `offered`）。这提示项目需要优化“首次使用体验”（Time-to-first-hello）。

---

### 5. Bug 与稳定性
本日报告/修复的 Bug 主要涉及 Web 平台与兼容性：

1.  **Chrome/Brave 登录失败 (已修复)**
    *   **严重度**: 🔴 高
    *   **内容**: TLS 环境下缺少 `Secure` Cookie 属性导致登录死循环。
    *   **Fix**: PR [#471](https://github.com/moltis-org/moltis/pull/471) (已合并)。

2.  **Windows 文件锁失败 (已修复)**
    *   **严重度**: 🟠 中
    *   **内容**: Issue #434，Windows 上持久化会话时出现 "Access is denied"。
    *   **Fix**: 相关修复逻辑已在近期的代码重构中覆盖。

3.  **Web Fetch 编码崩溃 (已修复)**
    *   **严重度**: 🟠 中
    *   **内容**: Issue #420，处理非 UTF-8 页面时 Panic。
    *   **状态**: Issue 已关闭，推测已在相关工具链更新中修复。

4.  **Agent 节点幻觉 (已修复)**
    *   **严重度**: 🟡 低
    *   **内容**: Issue #427，较弱模型在没有连接节点时会虚构参数。
    *   **Fix**: PR [#474](https://github.com/moltis-org/moltis/pull/474) 增加了对空值的过滤逻辑。

---

### 6. 功能请求与路线图信号
从今日的 Issue 关闭与 PR 动向中，可以窥见项目未来的路线图重点：

*   **多模态交互**: 随着文件发送功能的合并，Agent 将具备更完整的文件 I/O 能力。
*   **边缘计算/嵌入式**: PR #188 的合并表明 Moltis 正致力于减少依赖体积，剥离 `reqwest` 等重型库，为在嵌入式设备或边缘侧运行 Agent 做准备。
*   **本地模型优化**: 重视本地 LLM 的推理成本（PR #476 KV Cache 优化），信号显示项目将不仅是云端 AI 的套壳，而是深入优化本地推理体验。

**预测**: 下一个版本可能会重点宣传“全平台本地推理支持”和“零配置文件交互”。

---

### 7. 用户反馈摘要
*   **痛点**: Chrome 浏览器登录问题严重影响过部分用户体验；WhatsApp 配置不够直观，文档缺失关键字段说明。
*   **场景**: 用户希望将 Moltis 作为一个自动化中心，不仅能聊天，还能读取本地文件并发送到 Telegram/WhatsApp。
*   **满意度**: 随着文件发送和 WhatsApp 易用性 PR 的合并，预计用户满意度将显著提升。Windows 用户的体验也在持续改善中。

---

### 8. 待处理积压
目前共有 **7 个待合并 PR**，建议维护者优先关注以下两项：

1.  **PR #476: Stabilize system prompt for local LLM KV cache**
    *   **建议**: 这是一个关键的性能优化 PR，对本地模型用户体验提升巨大，建议优先 Review 并合并。
    *   **链接**: [moltis-org/moltis/pull/476](https://github.com/moltis-org/moltis/pull/476)

2.  **PR #477: Set world-writable permissions on container profile directory**
    *   **建议**: 修复 Docker 环境下 Chrome 的权限问题，对容器化部署至关重要。
    *   **链接**: [moltis-org/moltis/pull/477](https://github.com/moltis-org/moltis/pull/477)

---
*报告生成时间: 2026-03-24 | 数据来源: GitHub Moltis Repo*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

这里是 **CoPaw** 项目 2026年3月24日 的动态日报。

### 1. 今日速览
CoPaw 项目今日保持**极高活跃度**，社区正经历 v0.1.0 大版本更新后的阵痛期与适应期。过去24小时内共有 50 条 Issue 更新（其中 31 条已关闭）和 50 条 PR 更新，显示维护团队正在积极响应社区反馈并修复关键问题。目前工作重心集中在修复 v0.1.0 引入的回归 Bug（如 Docker 挂载失效、认证错误）以及打磨多智能体、内存压缩等核心功能。

### 2. 版本发布
*   **新版本发布**：过去24小时内无新的 Release 版本发布。
*   **当前焦点**：社区主要围绕 **v0.1.0** 及其补丁版本（v0.1.0.post1）进行反馈和调试。

### 3. 项目进展
今日共有 **27** 个 PR 被合并或关闭，主要进展如下：

*   **核心功能增强**：
    *   **会话治理与打断机制**：合并了 PR #967 和 #2143，引入了会话打断机制和会话治理钩子，显著提升了用户对长任务的控制权。
    *   **内存管理优化**：PR #2129 改进了内存压缩失败时的错误报告与空结果处理，PR #1814 修复了 ReMe 记忆摘要中的时区问题。
    *   **平台兼容性**：PR #2136 修复了 Windows 平台下的 print 错误，PR #2070 修复了 Token 计数器在处理列表类型内容时的崩溃问题。

*   **新功能集成（待合并/活跃中）**：
    *   **OpenSandbox 集成** (PR #1972)：正在推进将 OpenSandbox 作为云端沙箱后端，旨在提升工具执行的安全性。
    *   **工作区大改版** (PR #2111)：拟引入分层文件夹、全文件切换和搜索功能，解决文件管理混乱的问题。
    *   **多模态与路由** (PR #2045, #2144)：正在添加多模态探针验证和本地/云端路由策略，为复杂的混合部署场景做准备。

### 4. 社区热点
今日讨论最热烈的话题集中在 **v0.1.0 升级后的兼容性** 和 **渠道/工具调用的稳定性**：

1.  **[v0.1.0 更新后对话报错 #2102](https://github.com/agentscope-ai/CoPaw/issues/2102)** (21 条评论)
    *   **热度第一**：大量用户在升级到 v0.1.0 后遇到 `AuthenticationError`。这是一个严重的回归问题，阻碍了用户正常使用，目前该 Issue 已被关闭，推测官方已定位或修复。
2.  **[小艺频道集成问题 #1911](https://github.com/agentscope-ai/CoPaw/issues/1911)** (17 条评论)
    *   **渠道接入痛点**：用户在对接华为小艺时遇到“开小差”和日志不同步问题，反映了非标准渠道接入的高复杂度和调试难度。
3.  **[工具链调用卡死 #2040](https://github.com/agentscope-ai/CoPaw/issues/2040)** (13 条评论)
    *   **稳定性焦虑**：用户反馈常用工具链（读文件、执行脚本）会卡住超过 20 分钟，严重影响体验。
4.  **[微信 ClawBot 支持 #2043](https://github.com/agentscope-ai/CoPaw/issues/2043)** (6 条评论, 👍 8)
    *   **新渠道需求**：随着微信发布 ClawBot，社区强烈呼声要求 CoPaw 尽快支持该渠道。

### 5. Bug 与稳定性
今日报告的 Bug 主要集中在 v0.1.0 升级后的环境与数据可见性问题：

*   **严重**:
    *   **Docker 升级后数据丢失** ([#2097](https://github.com/agentscope-ai/CoPaw/issues/2097))：从 0.07 升级到 0.1.0 后，Skills 和 Workspace 文件在控制面板不显示（尽管物理文件存在）。目前尚无修复 PR 合并，需高度关注。
    *   **认证失败** ([#2102](https://github.com/agentscope-ai/CoPaw/issues/2102))：v0.1.0 启动报错，目前已关闭。
    *   **技能创建失败** ([#2077](https://github.com/agentscope-ai/CoPaw/issues/2077))：最新版本无法创建技能。

*   **中等**:
    *   **内存压缩幻觉** ([#2092](https://github.com/agentscope-ai/CoPaw/issues/2092))：GLM-5 模型在自动压缩上下文时产生幻觉并注入对话。
    *   **Telegram 频繁断连** ([#2041](https://github.com/agentscope-ai/CoPaw/issues/2041))：影响海外用户体验。
    *   **前端图片不显示** ([#1068](https://github.com/agentscope-ai/CoPaw/issues/1068))：WebUI 图片加载问题长期未解。

### 6. 功能请求与路线图信号
*   **多智能体与多 Bot 绑定** ([#2035](https://github.com/agentscope-ai/CoPaw/issues/2035))：用户希望实现“每个智能体绑定独立 Bot”及多智能体协同。这是 CoPaw 迈向复杂 Agent 系统的关键信号。
*   **跨频道对话衔接** ([#2138](https://github.com/agentscope-ai/CoPaw/issues/2138))：用户期望在 Console、飞书、QQ 之间无缝切换对话，这需要统一的 Session ID 管理机制。
*   **微信 ClawBot** ([#2043](https://github.com/agentscope-ai/CoPaw/issues/2043))：高赞请求，预计将成为近期渠道开发的重点。

### 7. 用户反馈摘要
*   **升级体验差**：多个用户反馈 Docker 升级路径不平滑，配置丢失或挂载失效，建议官方提供更完善的迁移脚本或文档。
*   **执行效率与稳定性**：工具调用卡死（#2040）和 Agent 静默停止（#1270）是主要痛点，用户对长任务的稳定性缺乏信心。
*   **模型兼容性**：本地模型（如 Ollama 部署的 Qwen）存在记忆丢失（#1390）和上下文压缩错误问题，说明 CoPaw 对非 GPT-4 级别模型的适配仍有优化空间。

### 8. 待处理积压
*   **Issue #1068 (前端图片无法显示)**：自 03-09 创建以来，虽然活跃但尚未解决，影响了多模态体验。
*   **Issue #1974 (压缩上下文导致任务中断)**：自动压缩机制打断了正在执行的任务，这是一个设计逻辑或并发处理的缺陷，需要架构层面的关注。
*   **PR #1972 (OpenSandbox)**：作为大型功能 PR，已开启数日，建议维护者尽快 Review 或确定合并时间表，以避免冲突。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

以下是为您生成的 **ZeptoClaw** 项目 2026年3月24日 动态日报。

---

# ZeptoClaw 项目动态日报 (2026-03-24)

**数据来源**: ZeptoClaw GitHub Repository
**分析周期**: 过去 24 小时

## 1. 今日速览
ZeptoClaw 今日迎来了重要的 **v0.8.0** 版本发布，项目处于**高活性**开发状态。过去24小时内共有 15 个 PR 更新（其中 10 个已合并/关闭），Issue 交互量达 6 条。核心开发重心显著向**架构重构**和**安全性加固**倾斜：一方面引入了中间件管道以解耦庞大的 Agent 循环逻辑，另一方面通过多项 PR 修复了工具执行与依赖安全漏洞。虽然出现了关于 `edit_file` 功能的 P1 级严重 Bug 报告，但社区响应迅速，相关修复已处于活跃状态。总体而言，项目正在为下一个阶段的模块化和稳定性进行大量底层基建工作。

## 2. 版本发布
### **[Release v0.8.0](https://github.com/qhkm/zeptoclaw/releases/tag/v0.8.0)**
- **核心更新**:
    - **UX 增强**: CLI 交互引入 Shimmer Spinner，提升了 Agent 响应时的视觉体验。
    - **新技能**: 新增 `deep-research` 技能，采用 4 阶段方法论增强研究能力。
    - **交互优化**: 添加 `ask_clarification` 工具，支持暂停等待用户澄清输入，使 Agent 交互更具弹性。
- **影响**: 建议所有 CLI 用户升级以获得更流畅的交互体验，并利用新的深度研究功能。

## 3. 项目进展
今日合并的 PR 主要集中在**安全性修复**、**工具鲁棒性**和**依赖管理**，为 v0.8.0 的发布铺平了道路。

- **[PR #402: fix(lib): harden embedded ZeptoAgent tool execution](https://github.com/qhkm/zeptoclaw/pull/402)** [已合并]
  - **进展**: 加强了嵌入式 ZeptoAgent 的工具执行逻辑，使其拥有与主循环一致的硬核路径，包括超时控制、Panic 捕获和审批流控。
  - **意义**: 解决了后端/Coding 场景下的稳定性隐患。

- **[PR #398: feat(tools): conformance fixtures, edit fuzzy matching, output truncation](https://github.com/qhkm/zeptoclaw/pull/398)** [已合并]
  - **进展**: 引入了一致性测试框架（JSON Fixtures），优化了 `edit_file` 的模糊匹配逻辑，并增加了输出截断功能。
  - **意义**: 大幅提升了工具链的测试覆盖率和编辑工具的容错性。

- **[PR #408: chore: update vulnerable dependencies](https://github.com/qhkm/zeptoclaw/pull/408)** [已合并]
  - **进展**: 修复了 `aws-lc-sys` 和 `rustls-webpki` 中的多个安全漏洞 (RUSTSEC-2026-0045~0049)。

- **[PR #406: fix(safety): prevent empty taint snippets false positives](https://github.com/qhkm/zeptoclaw/pull/406)** [已合并]
  - **进展**: 修复了外部工具返回空输出导致污点分析引擎误报的严重逻辑漏洞。

## 4. 社区热点
今日社区讨论的重心主要集中在架构重构和具体的工具 Bug 上。

- **[Issue #399: refactor: extract agent loop concerns into composable middleware pipeline](https://github.com/qhkm/zeptoclaw/issues/399)** [Open]
  - **热度**: 🌟🌟🌟
  - **分析**: 这是一个重要的 RFC 级 Issue。核心维护者指出 `agent/loop.rs` 已膨胀至 4155 行，亟需通过中间件管道模式进行解耦。
  - **诉求**: 社区/维护者正在寻求一种既能保持逻辑统一又能降低维护成本的架构演进方案。

- **[PR #392: feat(telegram): show typing indicator](https://github.com/qhkm/zeptoclaw/pull/392)** [Open]
  - **热度**: 🌟🌟
  - **分析**: 贡献者 @stuartbowness 提交的 Telegram 交互优化。
  - **诉求**: 提升 Bot 在即时通讯软件中的“鲜活感”，解决用户发送消息后无反馈的痛点。

## 5. Bug 与稳定性
今日报告了一个关键的工具正确性问题，且部分已修复的问题引出了新的回归。

- **🔴 P1-Critical: [Bug #403] bug(tools): fix edit_file fuzzy-match range mapping](https://github.com/qhkm/zeptoclaw/issues/403)**
  - **描述**: 刚合并的 PR #398 引入了回归问题。在 `edit_file` 中，NFC 标准化回退可能导致映射到错误的字节范围，且在空白字符标准化时可能导致死锁。
  - **状态**: **待修复** (目前尚无关联的 Fix PR)。

- **🟠 P2-High: [Bug #400] bug(lib): harden embedded ZeptoAgent tool execution](https://github.com/qhkm/zeptoclaw/issues/400)** [CLOSED]
  - **描述**: 嵌入式 Agent 执行缺少主循环的超时和 Panic 捕获机制。
  - **状态**: **已修复** (通过 PR #402)。

## 6. 功能请求与路线图信号
- **🚀 架构演进**: [PR #404](https://github.com/qhkm/zeptoclaw/pull/404) (基于 Issue #399) 正在搭建中间件脚手架。这表明项目正在从单体循环向可组合管道转变，预计未来版本将支持更灵活的插件化拦截器。
- **🤖 模型生态**: [PR #407](https://github.com/qhkm/zeptoclaw/pull/407) 提出了“模型驱动的提供商自动选择”功能。计划支持 GPT-5.4, Claude 4.6 等最新模型，这意味着项目将降低用户配置多模型 API 的心智负担。

## 7. 用户反馈摘要
从 Issue #392 和 #396 的背景来看，Telegram 集成用户对**交互反馈**非常敏感。
- **痛点**: Bot 处理消息时缺乏状态指示，用户不知道是卡死还是在运行。
- **反馈**: 用户强烈希望在等待响应期间看到 "typing..." 指示器，以及 Markdown 渲染的准确性（PR #396 已修复部分）。

## 8. 待处理积压
以下重要 PR 仍处于 Open 状态，建议维护者优先 Review：

1.  **[PR #407: feat: model discoverability & provider auto-selection](https://github.com/qhkm/zeptoclaw/pull/407)**
    - **影响**: 涉及核心 LLM 提供商逻辑，且包含 GPT-5.4 等新模型定义，对用户体验提升显著。
2.  **[PR #392: feat(telegram): show typing indicator](https://github.com/qhkm/zeptoclaw/pull/392)**
    - **影响**: 纯 UX 改进，风险低，收益高，建议尽快合并以提升即时通讯场景体验。
3.  **[PR #356: feat(channels): ACP implementation](https://github.com/qhkm/zeptoclaw/pull/356)**
    - **影响**: 由社区贡献者 @starsy 提出，增加了 ACP 协议支持，属于重要的渠道扩展功能，已挂起约 10 天。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

你好！我是开源项目分析师。根据 EasyClaw (github.com/gaoyangz77/easyclaw) 的 GitHub 数据，为您生成 **2026-03-24** 的项目动态日报。

---

# 📊 EasyClaw 项目动态日报 (2026-03-24)

### 1. 今日速览
EasyClaw 项目今日呈现出**“低交互、高交付”**的特征。虽然 Issues 讨论区与 PR 贡献区在过去 24 小时内无新增动态，但项目连续发布了 **v1.7.6** 和 **v1.7.7** 两个版本，显示出维护者在代码层面的活跃度极高，正在进行密集的迭代与修正工作。整体来看，项目目前处于**功能稳定发布期**，主要精力集中在构建与部署流程的优化上，社区反馈暂时平静。

### 2. 版本发布
今日项目连续发布了两个新版本，更新重点集中在 **macOS 平台的安装体验优化**，特别是针对安全机制的适配。

*   **[v1.7.7: RivonClaw v1.7.7](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.7)**
*   **[v1.7.6: RivonClaw v1.7.6](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.6)**

**关键更新与迁移注意：**
*   **核心痛点修复**：两个版本的 Release Notes 均着重解决了 macOS 用户常遇到的 **"'RivonClaw' is damaged and can't be opened"** 报错。
*   **问题本质**：这并非文件损坏，而是 macOS Gatekeeper 对未签名应用的拦截机制。
*   **解决方案**：官方已在 Release Notes 中提供了通过终端（Terminal）命令移除隔离属性的标准化修复方案。建议 macOS 用户在升级后若遇到启动问题，优先查阅 v1.7.7 版本说明中的“Fix/解决方法”部分，无需重新下载，仅需执行命令行即可。

### 3. 项目进展
今日无已合并或关闭的 PR。鉴于同一天内连续推出了两个版本（v1.7.6 -> v1.7.7），推测项目**主干分支的代码推进速度非常快**。这种情况通常意味着 v1.7.6 发布后发现了关键性构建问题或文档遗漏，维护者迅速通过 v1.7.7 进行了修补。虽然公开的 PR 列表静止，但项目内部功能迭代已实质性向前迈进，且已通过 Release 交付给用户。

### 4. 社区热点
过去 24 小时内，项目 Issues 和 PR 板块无新增、活跃或关闭记录。
*   **分析**：社区目前处于“观察期”或“消化期”。连续的版本发布通常需要一定时间（24-48小时）才能转化为用户的 Issues 反馈。目前暂无特定热议话题。

### 5. Bug 与稳定性
今日公开的 Issue 列表为空，未报告新的公开 Bug 或崩溃问题。
*   **隐性信号**：v1.7.6 紧随其后的 v1.7.7 发布，暗示 v1.7.6 可能存在一个**严重的部署级 Bug**（如 macOS 签名验证流程未在 Release Note 中清晰说明，或打包错误），导致维护者必须立即发布 v1.7.7 来更正说明或修复脚本。虽然未通过 Issue 暴露，但版本号跨度显示了维护者对稳定性的快速响应。

### 6. 功能请求与路线图信号
由于今日无新增 Issue 或 PR，暂无明确的新功能请求信号或路线图变更。
*   **展望**：鉴于目前主要精力在于解决 macOS 兼容性问题，下一阶段（v1.7.8+）的重点可能仍是巩固跨平台安装的稳定性，尤其是针对 Apple Silicon 芯片的适配。

### 7. 用户反馈摘要
虽然今日无新增评论，但从 Release Notes 的内容倒推用户画像：
*   **痛点**：macOS 用户群体庞大，且深受 Apple 安全策略困扰。大量用户可能将“应用已损坏”误判为下载失败。
*   **满意度**：维护者主动在 Release Note 中置顶中英双语修复方案，表明项目对**用户体验**和**国际化支持**非常重视，属于健康度较高的维护行为。

### 8. 待处理积压
当前无标记为“Pending”且长期未响应的 Issue 或 PR。
*   **提醒**：随着 v1.7.7 的发布，建议维护者密切监控未来 24 小时内的 Issue 动态，以防新版本引入运行时回归问题。目前积压队列清空，项目处于轻量化运营状态。

---
**分析师总结**：EasyClaw 今日虽然社区“静悄悄”，但代码库“热火朝天”。连续的双版本发布解决了 macOS 端的关键体验问题，建议 macOS 用户直接升级至 **v1.7.7** 并按指引配置环境。

*数据来源: [EasyClaw GitHub](https://github.com/gaoyangz77/easyclaw)*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*