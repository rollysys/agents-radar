# OpenClaw 生态日报 2026-03-28

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-28 02:29 UTC

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

# OpenClaw 项目动态日报 (2026-03-28)

你好，我是 OpenClaw 开源项目分析师。以下是基于 2026年3月28日 GitHub 数据生成的 OpenClaw 项目动态日报。

---

## 1. 今日速览

OpenClaw 今日保持了极高的社区活跃度，过去 24 小时内共有 **500 条 Issue 更新**（436 新开/活跃，64 关闭）和 **500 条 PR 更新**。虽然**无新版本发布**，但项目处于快速迭代期，大量修复 PR 正在合并中。

目前的焦点集中在 **2026.3.x 版本的稳定性修复**上，特别是针对多渠道集成（Discord, Telegram, WhatsApp）和本地模型调用（Ollama, Kimi）的回归问题。虽然待合并 PR 数量高达 318 个，显示社区贡献热情高涨，但也反映出代码审核积压和发布节奏需要调整。

---

## 2. 版本发布

**无新版本发布。**
当前主线开发活跃，但尚未发布新的 Stable 或 Beta 版本。建议用户关注 GitHub Actions 的 Nightly 构建以获取最新修复。

---

## 3. 项目进展

今日共有 **182 个 PR 被合并或关闭**，主要集中在修复近期版本引入的回归问题以及提升多渠道消息处理的健壮性。

**关键进展包括：**

*   **渠道修复:**
    *   修复了 WhatsApp 自聊模式的回声循环问题 ([PR #55209](https://github.com/openclaw/openclaw/pull/55209), [PR #33644](https://github.com/openclaw/openclaw/pull/33644))。
    *   改进了 Slack `ackReaction` 机制的失效问题 ([PR #51870](https://github.com/openclaw/openclaw/pull/51870))。
    *   修复了多账号 Discord 设置下的重复消息投递 Bug ([Issue #52210](https://github.com/openclaw/openclaw/issues/52210) 对应修复)。
*   **核心架构:**
    *   重构了内存管理模块，合并了 `runQmd` 和 `runMcporter` 子进程逻辑 ([PR #31014](https://github.com/openclaw/openclaw/pull/31014))。
    *   修复了 `sessions_spawn` 在 ACP/Subagent 模式下的验证逻辑错误 ([Issue #53016](https://github.com/openclaw/openclaw/issues/53016), [Issue #43559](https://github.com/openclaw/openclaw/issues/43559))。
*   **文档与生态:**
    *   修复了中文文档的重定向链接 ([PR #53552](https://github.com/openclaw/openclaw/pull/53552))。

---

## 4. 社区热点

今日社区讨论最热烈的话题围绕**跨平台客户端需求**和**特定模型集成问题**展开：

1.  **[Feature] Linux/Windows 原生客户端需求** ([Issue #75](https://github.com/openclaw/openclaw/issues/75))
    *   **数据:** 👍 66 | 💬 57
    *   **分析:** 这是目前最受关注的 Issue。用户强烈呼吁在 Linux 和 Windows 平台上提供与 macOS 一致的原生 Clawdbot 应用体验。目前这两个平台的支持仍是空白，严重限制了桌面端用户的接入。

2.  **[Bug] Kimi 模型 Web Search 401 错误** ([Issue #44851](https://github.com/openclaw/openclaw/issues/44851))
    *   **数据:** 👍 3 | 💬 30
    *   **分析:** 用户在集成 Kimi 大模型时，Chat API 正常但 Web Search 工具调用遭遇 401 认证失败。这反映了国产模型在接入 OpenClaw 工具链时的认证兼容性问题，社区正在积极排查 Header 配置。

3.  **[Bug] "只会说话不会工作" - 本地模型权限幻觉** ([Issue #39651](https://github.com/openclaw/openclaw/issues/39651))
    *   **数据:** 👍 0 | 💬 31
    *   **分析:** 该 Issue 反映了使用 Ollama 本地模型时，Agent 经常声称“没有权限”而拒绝执行文件操作。这揭示了本地模型在遵循 System Prompt 关于权限描述方面的不稳定性。

---

## 5. Bug 与稳定性

今日报告了大量回归问题，显示出近期快速迭代对稳定性的影响。以下是按严重程度排序的重点 Bug：

### 🔴 严重 - 核心功能受阻/崩溃
*   **[Bug] No API key for provider (Beta Release Blocker)** ([Issue #55672](https://github.com/openclaw/openclaw/issues/55672))
    *   **症状:** 即使配置正确且探测成功，系统仍报错“No API key for provider”。
    *   **状态:** 回归，阻塞 Beta 发布。
*   **[Bug] Discord Health Monitor 触发崩溃循环** ([Issue #54931](https://github.com/openclaw/openclaw/issues/54931))
    *   **症状:** 升级后，网关每 35 分钟因未捕获的异常崩溃。
    *   **状态:** 回归。
*   **[Bug] Ollama 思考模型返回空响应** ([Issue #46680](https://github.com/openclaw/openclaw/issues/46680)) - **[已修复]**
    *   **症状:** Ollama 0.18.0+ 模型流式传输 thinking tokens 时，OpenClaw 未读取导致响应为空。

### 🟠 中等 - 功能异常/渠道故障
*   **[Bug] Telegram 轮询停滞** ([Issue #43233](https://github.com/openclaw/openclaw/issues/43233))
    *   **症状:** 更新后 Telegram 渠道停止工作，日志显示 "Polling stall detected"。
*   **[Bug] Sandbox FS Bridge 写入 0 字节文件** ([Issue #44122](https://github.com/openclaw/openclaw/issues/44122))
    *   **症状:** 安全加固导致 Write/Edit 工具在特定环境下失效。
*   **[Bug] Agent 模拟工具调用而非真实执行** ([Issue #45046](https://github.com/openclaw/openclaw/issues/45046))
    *   **症状:** Agent 输出 JSON 格式的工具调用文本，但并未实际触发后端逻辑。

### 🟡 轻微 - UI/体验问题
*   **[Bug] Web UI 白色感叹号图标覆盖屏幕** ([Issue #46818](https://github.com/openclaw/openclaw/issues/46818))
    *   **症状:** 界面随机被全屏遮罩覆盖，影响操作。

---

## 6. 功能请求与路线图信号

1.  **视觉能力增强** ([Issue #28744](https://github.com/openclaw/openclaw/issues/28744))
    *   **诉求:** 社区强烈需要 Agent 能够接收并识别图片（多模态），特别是在飞书等 IM 场景下。目前的架构仅传递文本，浪费了模型（如 MiniMax-Vision）的潜力。
2.  **可配置默认 Agent ID** ([PR #51762](https://github.com/openclaw/openclaw/pull/51762))
    *   **诉求:** 允许用户自定义默认 Agent ID，而不是强制回退到 `"main"`，解决多 Agent 环境下的目录管理混乱问题。该 PR 处于 Open 状态，有望合并。
3.  **Oracle OCI 生成式 AI 插件** ([PR #54784](https://github.com/openclaw/openclaw/pull/54784))
    *   **动向:** 社区开发者正在提交对 Oracle 云基础设施 AI 服务的支持，扩展了 OpenClaw 的模型供应商生态。

---

## 7. 用户反馈摘要

从评论和 Issue 描述中，可以提炼出以下用户痛点：

*   **"只说不做"的挫败感:** 多个用户反馈 ([Issue #40082](https://github.com/openclaw/openclaw/issues/40082), [Issue #39651](https://github.com/openclaw/openclaw/issues/39651)) Agent 经常 "acknowledge" 任务，甚至回复 "One sec" 或 "Done"，但实际上后台没有任何工具调用发生。用户感觉 Agent 在“假装工作”。
*   **本地模型调优困难:** 使用 Ollama 或 Qwen 本地部署的用户遇到大量参数不匹配（如 422 错误）和权限幻觉问题，这表明 OpenClaw 对非 OpenAI 标准模型的兼容层仍需打磨。
*   **多端同步与配置丢失:** 多个 Issue 提到重启 Gateway 后配置丢失、Session 找不到或 Device 需要重新审批，反映了状态持久化机制的薄弱。

---

## 8. 待处理积压

以下高优先级或高关注度 Issue 长期未得到解决，建议维护者优先关注：

1.  **Node Host 审批机制在 Windows/WSL 失效** ([Issue #20386](https://github.com/openclaw/openclaw/issues/20386)) - *Stale/未解决*。这是阻碍 Windows 用户作为节点接入的关键问题。
2.  **Agent 提醒时间错误** ([Issue #10841](https://github.com/openclaw/openclaw/issues/10841)) - *Stale*。Agent 无法获取准确当前时间导致定时任务功能完全不可用。
3.  **Discord WebSocket 频繁断连** ([Issue #13688](https://github.com/openclaw/openclaw/issues/13688)) - *Stale*。连接恢复逻辑失败导致 Bot 长时间离线并丢失私信。

---

**总结:** OpenClaw 目前处于**功能快速扩张与稳定性磨合的阵痛期**。社区极度渴望 Linux/Windows 原生客户端和多模态视觉支持。当前最紧迫的任务是解决导致 Agent “空转”（只回复不执行）的回归 Bug 以及第三方模型（Kimi, Ollama）的集成兼容性问题。

---

## 横向生态对比

# 2026-03-28 AI 智能体与个人助手开源生态横向对比分析报告

## 1. 生态全景
2026年3月底的开源 AI 智能体生态呈现出**"架构重构与稳定性攻坚"**并行的态势。以 **OpenClaw** 为首的头部项目正在经历从单一功能向多渠道、多模型集成的阵痛期，社区活跃度极高但回归问题频发。**NanoBot** 和 **IronClaw** 等项目则致力于底层 Runtime 解耦与多租户架构建设，显示出生态正在从实验性 Demo 向生产级平台演进。同时，**工具链标准化（`.well-known` URI）** 和 **本地模型兼容性** 成为全行业共同关注的焦点，标志着智能体生态正在走向成熟与开放。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PR 更新 | Release | 健康度/状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 🔥 500 | 🔥 500 | 无 | ⚠️ 高压迭代：PR 积压 318 个，回归 Bug 多，社区热情最高但稳定性承压。 |
| **CoPaw** | 🔥 50 | 🔥 39 | 无 | 🟢 活跃修复：v0.2.0 后集中修复回归问题，任务控制能力显著增强。 |
| **LobsterAI** | 🔥 26 | 🔥 50 | 无 | 🟢 快速演进：UI 交互与 Cowork 模式重构中，任务管理 Bug 是主要痛点。 |
| **Moltis** | 4 | 4 | **3 个** | 🟢 敏捷交付：CI/CD 极度活跃，连续发布，关注工作流自动化与成本优化。 |
| **NanoBot** | 20+ | 65 | v0.1.4.post6 | 🟡 架构升级：Runtime 解耦引入新 Bug，但安全修复响应极快。 |
| **Zeroclaw** | 27 | 50 | **v0.6.5** | 🟡 稳定性磨合：Rust 2024 升级，长上下文处理增强，但配置管理引争议。 |
| **NanoClaw** | 17 | 47 | 无 | 🟡 安全攻坚：发现严重命令注入漏洞，正重构凭证管理。 |
| **IronClaw** | 22 | 47 | **v0.23.0** | 🟢 架构成熟：完成多租户隔离，企业级特性增强，高危漏洞待修。 |
| **NullClaw** | - | 40 | 无 | 🟢 默默耕耘：功能积压严重（37 PRs），底层架构（Outbox/KG）推进中。 |
| **PicoClaw** | - | 11 | nightly | 🟢 性能优化：解决 CPU 占用痛点，语音多模态推进中。 |
| **TinyClaw** | 0 | 2 | 无 | 🔵 休眠/开发：无社区互动，核心开发集中重构 UI 与引入持久化任务管理。 |
| **EasyClaw** | 0 | 0 | **v1.7.8** | 🔵 维护模式：无代码互动，仅发布 macOS 安装补丁。 |
| **ZeptoClaw** | 0 | 2 | 无 | 🔵 专注开发：无社区互动，聚焦浏览器工具与上下文压缩。 |

## 3. OpenClaw 在生态中的定位

*   **生态核心与流量入口**：OpenClaw 依然是该垂直领域绝对的流量中心（500+ Issue/PR），其动向直接定义了生态的热度。
*   **技术路线：广度优先**：与 Zeroclaw（Rust/性能优先）或 IronClaw（多租户/企业级）不同，OpenClaw 目前采取"渠道与模型大爆发"的策略，优先支持 Discord/WhatsApp/Kimi/Ollama 等广泛集成，但代价是**稳定性严重滞后**。
*   **社区规模对比**：其社区活跃度是第二梯队（NanoBot, CoPaw）的 10 倍以上，但**信噪比低**，有效代码合并受阻于积压的 PR。
*   **当前痛点**：作为"参照系"，它目前也是"Agent 空转"（只说话不干活）和"配置丢失"问题的重灾区，急需从快速堆功能转向稳定性治理。

## 4. 共同关注的技术方向

1.  **Agent Skills 的标准化分发**
    *   **涉及项目**：Zeroclaw (#4853), IronClaw (#1717), NullClaw (#734), PicoClaw (#2101)
    *   **趋势**：多个项目不约而同提议支持 `.well-known` URI 标准。这意味着生态正在寻求脱离各自为政的插件市场，转向类似互联网资源的通用技能发现与安装协议。

2.  **长上下文与记忆管理**
    *   **涉及项目**：Zeroclaw (v0.6.5 溢出恢复), ZeptoClaw (#460 多层压缩), NanoClaw (#1493 Headroom), NullClaw (#712 KG Memory)
    *   **趋势**：随着模型上下文窗口扩大，简单的滑窗截断已失效。项目正竞相引入"上下文压缩代理"、"知识图谱记忆"和"溢出恢复"机制，以支持长时序任务。

3.  **本地模型与异构算力兼容**
    *   **涉及项目**：OpenClaw (Ollama/Kimi), CoPaw (#2419 重构), PicoClaw (LM Studio), IronClaw (#1696 局域网 LLM)
    *   **趋势**："云+端"混合部署成为标配。各项目都在通过重构 Provider 层来适配 Ollama, vLLM 及国产模型，解决"工具调用幻觉"和"权限不兼容"是共同挑战。

## 5. 差异化定位分析

| 维度 | **OpenClaw / NullClaw** | **Zeroclaw / PicoClaw** | **IronClaw / NanoClaw** | **LobsterAI / CoPaw** |
| :--- | :--- | :--- | :--- | :--- |
| **核心语言** | TypeScript/Python | **Rust** (Zeroclaw) / Go (PicoClaw) | TypeScript/Python | TypeScript/Python |
| **侧重点** | **IM 渠道集成** (Discord/WA/WeChat) | **性能与边缘计算** | **企业级/多租户/安全** | **协同工作** |
| **目标用户** | 个人开发者、极客 | 追求性能的进阶用户 | 团队、企业 IT | 团队协作、知识工作者 |
| **技术特征** | 插件丰富，架构较松散 | 二进制分发，资源占用低 | 权限隔离，DB-backed | 多 Agent 交互，富 UI |

*   **Zeroclaw/Moltis** 明显在利用 Rust 的性能优势探索**边缘侧/高并发**场景。
*   **IronClaw** 的 v0.23.0 明确锁定**多租户隔离**，显示出 B2B 意图。
*   **LobsterAI** 专注于**交互体验**（代码折叠、文件夹管理），试图打造 AI-native 的 IDE/协作环境。

## 6. 社区热度与成熟度

*   **快速迭代/高噪声区**：**OpenClaw, CoPaw, LobsterAI**。处于功能爆发期，Issues 激增，Bug 报告多，适合勇于尝鲜的开发者。
*   **质量巩固/架构重构区**：**NanoBot, IronClaw, Zeroclaw**。近期发布了重要架构版本，正处于修复回归问题和打磨稳定性的阶段，适合需要一定可靠性的进阶用户。
*   **垂直深耕/静默开发区**：**Moltis, ZeptoClaw, TinyClaw**。社区互动较少，但提交质量高，专注于解决特定痛点（如成本控制、浏览器自动化、任务管理）。
*   **维护期**：**EasyClaw**。处于稳定维护状态。

## 7. 值得关注的趋势信号

1.  **Agent "空转" 问题引发信任危机**：
    *   OpenClaw (#39651) 和 NanoBot (#2487) 均报告了 Agent "假装工作"（Simulate Tool Use）的现象。这揭示了当前 LLM 在 Agent 系统中对 System Prompt 遵循的不稳定性。**开发者建议**：必须在 Agent 执行链路中引入基于密码学（HMAC）或独立进程的**执行回执验证机制**（如 Zeroclaw #4830 提议），防止 LLM 撒谎。

2.  **"可控性" 成为比"智能性" 更迫切的需求**：
    *   多个项目今日的首要更新都是 `/stop` 命令、任务持久化、资源限制。用户对 Agent "失控"（无法停止、死循环、跑飞预算）的恐惧超过了对智能程度不足的抱怨。

3.  **安全边界正在重构**：
    *   NanoClaw 的命令注入漏洞 (#1483) 和 IronClaw 的审批劫持漏洞 (#1485) 敲响了警钟。随着 Agent 权限扩大（执行 Shell、写入文件），传统的沙箱已不够用。**趋势**：引入基于凭证代理的零信任架构，而非直接挂载 API Key。

4.  **国产模型与协议的深度适配**：
    *   除了 OpenAI，对 Kimi, Qwen, DeepSeek 等国产模型的适配已成为国内开源项目的标配，且不仅是 API 对接，更深入到了 Function Call 参数对齐和 Search 工具集成层面。

---
**总结**：2026年3月的生态正处在从"玩具"到"工具"的关键转折点。**稳定性、安全性和标准化**取代了单纯的"集成数量"，成为衡量项目成熟度的新标尺。对于开发者而言，现在是切入**底层架构优化**和**可信执行环境**建设的最佳时机。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-28)

**分析师：AI 智能体与个人 AI 助手领域开源项目分析师**

---

## 1. 今日速览

NanoBot 项目今日保持**极高的活跃度**，社区贡献热情高涨。随着 **v0.1.4.post6** 的发布，项目重心从单纯的功能堆叠转向了底层的运行时重构与架构优化。过去24小时内，虽然 Issues 激增（20 条新开），且伴随新版本出现了若干回归问题（特别是 Telegram 渠道），但 PR 更新量达到了 65 条，显示出维护团队和社区正在快速响应并修复问题。目前有 42 个待合并 PR，表明项目正处于功能快速迭代与稳定期并存的阶段。

---

## 2. 版本发布

### 🚀 [v0.1.4.post6](https://github.com/HKUDS/nanobot/releases/tag/v0.1.4.post6)

*   **发布时间**：近期发布（当前活跃版本）
*   **核心主题**：**重构与架构净化**。
    *   发布说明明确指出："This one is about how cleanly you can do it."（这次发布关乎你能多么优雅地完成任务）。
    *   **Agent Runtime 正式解耦**：这是一个架构层面的重大调整，将运行时逻辑进行了形式化的拆解，旨在提高系统的模块化和可维护性。
    *   **社区贡献**：合并了 57 个 PR，迎来了 27 位新贡献者。
*   **潜在影响**：由于涉及底层 Runtime 的重构，部分上层逻辑（如消息工具的状态管理、Telegram 的流式响应）可能出现回归波动，需关注相关 Bug 报告。

---

## 3. 项目进展

今日共有 **23 个 PR 被合并/关闭**，主要集中在渠道适配、安全修复和架构解耦上。项目整体正在向更健壮的工程化方向发展。

*   **核心架构与渠道支持**：
    *   **QQ 渠道支持落地**：PR [#2016](https://github.com/HKUDS/nanobot/pull/2016) 被合并，正式引入了对 NapCat (OneBot 11 协议) 的支持，包括消息防抖机制，扩展了 NanoBot 在国内 IM 市场的应用场景。
    *   **Telegram 交互增强**：PR [#2054](https://github.com/HKUDS/nanobot/pull/2054) 合并，新增了 Telegram 消息 "👀" (正在查看) 的表情回应反馈，提升了交互体验；同时修复了 LiteLLM 全局状态污染问题 ([#2053](https://github.com/HKUDS/nanobot/pull/2053))。

*   **关键修复**：
    *   **安全漏洞修复**：PR [#2567](https://github.com/HKUDS/nanobot/pull/2567) 修复了邮件轮询中的零点击间接提示注入与认证绕过漏洞。这是一个**关键安全更新**，建议所有使用邮件渠道的用户立即升级。

---

## 4. 社区热点

今日社区讨论聚焦于**搜索提供商标准**与**并发会话下的状态隔离**，反映了用户对扩展性与稳定性的双重需求。

1.  **[Discussion #2572] 搜索提供商接入标准讨论**
    *   **链接**：[HKUDS/nanobot Issue #2572](https://github.com/HKUDS/nanobot/issues/2572)
    *   **热度**：新开 Issue，迅速引发讨论。
    *   **核心诉求**：随着 Serper.dev 等 PR 的提交，维护者提出需要建立明确的搜索提供商接入标准。目前 NanoBot 已支持 Brave, Tavily, DuckDuckGo 等多种引擎。社区正在讨论如何平衡功能丰富性与代码维护成本，这标志着项目正在制定更规范的贡献指南。

2.  **[PR #2554] 并发会话状态隔离修复**
    *   **链接**：[HKUDS/nanobot PR #2554](https://github.com/HKUDS/nanobot/pull/2554)
    *   **背景**：针对 Issue #2549（跨渠道并发导致变量覆盖）。
    *   **核心诉求**：用户在多渠道、多会话并发场景下遇到严重的状态冲突。该 PR 试图通过隔离 `MessageTool` 的轮次状态来解决这一问题，是保障 Agent 稳定性的关键技术讨论。

---

## 5. Bug 与稳定性

v0.1.4.post6 的发布引入了一些回归问题，主要集中在 Telegram 渠道和并发处理上。

| 严重程度 | Issue/PR | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **🔴 High** | [#2549](https://github.com/HKUDS/nanobot/issues/2549) | **跨 Channel 并发 Bug 回归**：`_sent_in_turn` 变量在并发下被覆盖，导致消息丢失。 | **Open** (已有 Fix PR [#2554](https://github.com/HKUDS/nanobot/pull/2554)) |
| **🔴 High** | [#2567](https://github.com/HKUDS/nanobot/pull/2567) | **邮件渠道 RCE 漏洞**：攻击者可绕过认证执行任意指令。 | **Closed** (已在 PR 中修复) |
| **🟠 Medium** | [#2562](https://github.com/HKUDS/nanobot/issues/2562) | **Telegram "👀" 表情残留**：回复完成后，输入消息上的“正在处理”表情未被移除。 | Open (已有 Fix PR [#2564](https://github.com/HKUDS/nanobot/pull/2564)) |
| **🟠 Medium** | [#2559](https://github.com/HKUDS/nanobot/issues/2559) | **Telegram 流式响应长度限制**：长回复在流式传输时触发 `Message_too_long` 错误。 | Open |
| **🟠 Medium** | [#2568](https://github.com/HKUDS/nanobot/issues/2568) | **Telegram Markdown 渲染不稳定**：升级后 Markdown 有时无法正确渲染。 | Open |
| **🟡 Low** | [#2570](https://github.com/HKUDS/nanobot/issues/2570) | **Ollama 本地配置 404**：配置本地 Ollama 时出现端口监听与 404 错误。 | Open |

---

## 6. 功能请求与路线图信号

社区正在推动 NanoBot 向更安全、更智能、更标准化的方向发展。

*   **沙箱安全执行**：
    *   **Issue [#1448](https://github.com/HKUDS/nanobot/issues/1448)** 与 **Issue [#2569](https://github.com/HKUDS/nanobot/issues/2569)** 均强烈建议引入 OS 级别的沙箱（如 Sandlock, WASM）来执行第三方 Skills。鉴于当前仅有正则黑名单拦截，**安全执行环境**极有可能成为下一阶段的开发重点。
*   **Agent 自我认知与调试**：
    *   **PR [#2521](https://github.com/HKUDS/nanobot/pull/2521)** 提出了 `SelfTool`，允许 Agent 在运行时检查和修改自身状态（如动态调整上下文窗口）。这是迈向高度自治 Agent 的重要一步。
*   **生态标准化**：
    *   **Issue [#2571](https://github.com/HKUDS/nanobot/issues/2571)** 建议支持 `.well-known` URI 标准。如果合并，NanoBot 将与 Cloudflare、Vercel 等生态实现无缝对接，极大提升技能分发的便捷性。

---

## 7. 用户反馈摘要

从评论和 Issue 描述中可以提炼出以下用户画像与痛点：

*   **痛点：模型兼容性细节**：国内用户在使用 **VolcEngine (火山引擎)** 和 **GPStack** 部署的模型时，遇到了参数不兼容（`max_tokens` 冲突）和 Tool Call 解析失败的问题 ([#2513](https://github.com/HKUDS/nanobot/issues/2513), [#2476](https://github.com/HKUDS/nanobot/issues/2476))。
*   **痛点：反馈机制的准确性**：用户对 Agent 的“虚假反馈”感到困惑，即 Agent 声称“正在执行”或“已完成”，但实际上并未进行任何操作 ([#2487](https://github.com/HKUDS/nanobot/issues/2487))。
*   **满意点：高度的可定制性**：用户正在积极利用 NanoBot 的 Cron 工具 ([#2566](https://github.com/HKUDS/nanobot/issues/2566)) 和多渠道支持，尝试构建复杂的自动化工作流。

---

## 8. 待处理积压

*   **长期未响应功能请求**：
    *   **Issue #2240** (开启/关闭思考模式)：用户对推理模型（如 DeepSeek R1）的思考过程显示控制有明确需求，但尚未有官方回应。
    *   **Issue #235** (Telegram 无响应)：虽然是老 Issue，但在新版本中仍有类似反馈（处理完成但无回复），需排查是否为同一根因。
*   **即将到来的维护事件**：
    *   **[Notice #2563] Nightly 分支刷新**：项目将于**2026年3月29日（本周日）北京时间 20:00** 刷新 `nightly` 分支。贡献者需注意，这是合并不稳定特性的 staging 分支，主分支稳定性将依赖此流程。

---

**总结**：NanoBot 目前处于**架构升级后的阵痛期**。v0.1.4.post6 虽然带来了漂亮的架构解耦，但也引入了 Telegram 和并发处理的回归 Bug。好消息是社区反应迅速，修复 PR 接踵而至。对于生产环境用户，建议密切关注即将发布的修复补丁，特别是针对并发状态隔离和安全沙箱的进展。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-28)

**分析师**：AI Open Source Analyst
**数据来源**：github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览

Zeroclaw 项目今日呈现出**极高的活跃度**，伴随着 **v0.6.5 版本的发布**，项目正在经历一次重大的底层架构升级（Rust 2024 Edition）和功能扩展。过去 24 小时内共有 50 个 PR 更新和 27 个 Issue 更新，显示出社区在**多渠道适配（Matrix/Line/Feishu）**和**Agent 上下文管理**方面的密集开发。虽然新版本引入了期待已久的上下文溢出恢复机制，但大量待合并的 PR（36个）和涌现的 Bug 报告（特别是 Matrix 通道和 Web UI）表明项目正处于**功能快速迭代与稳定性磨合期**，建议生产环境用户谨慎升级并关注后续补丁。

## 2. 版本发布

### **v0.6.5** (发布于 2026-03-28)
本次更新专注于 **Agent 核心稳定性**，重点解决了长对话和多轮工具调用中的上下文管理问题。

*   **核心更新**：
    *   **上下文溢出恢复**：在交互式守护进程循环和工具调用循环中增加了上下文溢出恢复机制，防止 Agent 在处理长上下文时崩溃或无响应。
    *   **智能剪枝**：在上下文压缩器中增加了快速路径工具结果修剪。
    *   **预算控制**：增加了共享迭代预算 和预检查机制。

*   **潜在影响**：这些改动主要针对 `src/agent` 核心，显著提升了长时间运行任务的稳定性，但也可能改变 Agent 在上下文窗口满时的行为逻辑，建议测试复杂任务场景。

## 3. 项目进展

今日共有 **14 个 PR 合并/关闭**，主要集中在代码现代化、文档清理和关键 Bug 修复。

*   **🔧 架构现代化**：PR #4841 将项目从 Rust 2021 Edition 升级至 **2024 Edition**，涉及 8 个 Cargo.toml 文件和 31 个源文件的修改，修复了 5802 个测试。这为未来的编译器优化和语言特性铺平了道路。
*   **🧹 代码库瘦身**：合并了多个清理 PR（#4860, #4859, #4854），移除了冗余的 `python/` 包、`playground/` 临时文件和 `skills/` 示例目录，减小了仓库体积，明确了项目边界（核心在 Rust）。
*   **📖 文档增强**：PR #4849 在所有 README 中添加了构建状态、Rust 版本和 v0.6.5 徽章，提升了开源项目的专业度和可见性。
*   **🌐 功能扩展推进**：虽然 **36 个 PR 仍处于待合并状态**，但多个关键功能 PR 正在活跃评审中，包括 LINE Messaging API 支持 (#4822)、飞书通道媒体传输 (#4823) 和 Mattermost WebSocket 支持 (#4845)。

## 4. 社区热点

今日社区讨论主要集中在 **Matrix 通道的可用性**和**新功能提案**。

*   **Matrix 通道摩擦**：
    *   Issue #4657 作为 Matrix 体验改进的总追踪贴，获得了 2 个点赞和持续关注。
    *   Issue #4804 和 #4806 反映了 Matrix 线程在守护进程重启后丢失上下文的问题，这严重影响了多轮对话体验。
    *   PR #4865 提出了 Matrix 的媒体附件支持，是目前评论较活跃的改进项。
*   **安全与幻觉检测**：
    *   Issue #4830 和 PR #4831 提出了基于 **HMAC-SHA256 的工具执行回执**，旨在检测 LLM 是否伪造了工具调用（即“幻觉”）。这是一个高质量的 Feature Proposal，触及了 Agent 可信度的核心痛点，值得重点关注。
*   **配置覆盖问题**：
    *   Issue #4655 和 PR #4817 讨论了 `zeroclaw onboard --channels-only` 会**覆盖而非合并**其他通道配置的问题（S1 级严重），引发了生产环境用户的担忧。

## 5. Bug 与稳定性

今日报告了多个 **S1（工作流受阻）** 级别的 Bug，多与配置和特定平台有关。

| 严重度 | Issue/PR | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **S1** | [#4655](https://github.com/zeroclaw-labs/zeroclaw/issues/4655) | `onboard --channels-only` 会**删除**其他通道配置 (数据丢失风险)。 | 🔴 Open (有 Fix PR #4817) |
| **S1** | [#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851) | 无法配置 **GitHub Copilot** 作为 Provider，缺乏文档。 | 🔴 Open |
| **S1** | [#4846](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) | **WhatsApp Web** 通道因缺少编译 feature 而无法使用。 | 🔴 Open |
| **S2** | [#4855](https://github.com/zeroclaw-labs/zeroclaw/issues/4855) | **Channels API** 返回 HTML 而非 JSON，Web UI 报错。 | 🔴 Open |
| **S2** | [#4810](https://github.com/zeroclaw-labs/zeroclaw/issues/4810) | 历史记录修剪器 切断 `tool_use/tool_result` 对，导致 Anthropic API 400 错误。 | 🟡 Open (有 Fix PR #4825) |
| **S2** | [#4863](https://github.com/zeroclaw-labs/zeroclaw/issues/4863) | OpenAI Codex (gpt-5.4-mini) Provider 无法正常渲染结果。 | 🔴 Open |
| **S3** | [#4862](https://github.com/zeroclaw-labs/zeroclaw/issues/4862) | Tauri 构建产物未被 gitignore，导致仓库状态混乱。 | 🟢 Open |

## 6. 功能请求与路线图信号

*   **多模态支持**：Issue #4861 请求 Matrix 支持发送/接收图片、文件和语音。考虑到 PR #4865 已经在进行中，该功能有望在下个版本落地。
*   **标准化技能安装**：Issue #4853 提议支持从 `.well-known` URI 安装 Skills，顺应了 Agent Skills Group 的新标准。这表明 Zeroclaw 正在积极对接行业标准生态。
*   **内存管理优化**：Issue #4829 提议为 Markdown 记忆库增加自动清理机制，防止在存储受限设备上无限增长。结合 Issue #4760 提出的使用工具调用进行结构化记忆整合，显示出项目正在从简单的文本记忆向更复杂的**混合记忆架构**演进。

## 7. 用户反馈摘要

从今日的 Issue 评论和描述中，可以提炼出以下用户痛点：

1.  **配置管理的脆弱性**：用户对 `onboard` 命令会覆盖现有配置感到非常沮丧（"S1 - workflow blocked"），这直接破坏了生产环境的稳定性。用户期望配置更新是**增量式**的，而非全量覆盖。
2.  **特定 Provider 的对接困难**：关于 GitHub Copilot 和 OpenAI-Codex 的配置问题表明，用户在实际接入非默认模型时缺乏清晰的指引，且容易出现兼容性 Bug。
3.  **Web UI 的可用性倒退**：Channels 和 Sessions 页面的 API 错误（#4855, #4856）导致前端完全不可用，这反映出前后端 API 契约可能存在不同步的情况，严重影响了通过 Web 端管理的用户体验。

## 8. 待处理积压

*   **A2A 协议支持**：PR #4166 (Agent-to-Agent) 虽然创建于 3-21，但仍在活跃更新中。这是一个大特性，需关注其 Review 进度。
*   **内存整合改进**：Issue #4760 提出的结构化记忆输出改进方案目前尚未有明确的 PR 关联，是一个待开发的重要优化点。
*   **历史记录修剪逻辑**：Issue #4810 提到的修剪器破坏上下文问题目前有对应的 PR #4825，建议维护者优先合并以修复 Anthropic 用户遇到的重启错误。

---
*以上内容基于 GitHub 数据自动生成，由 AI 智能体分析整理。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

这里是 **PicoClaw** 项目 2026-03-28 的动态日报。

# 📊 PicoClaw 项目日报 (2026-03-28)

## 1. 今日速览
PicoClaw 项目今日保持**高度活跃**状态，开发重心明显向**系统稳定性**和**架构重构**倾斜。虽然发布了最新的 `v0.2.4-nightly` 自动构建版，但社区互动主要集中在修复 Agent 循环轮询的 CPU 占用问题以及完善多租户隔离机制。PR 合并数（11条）相对较高，且多为修复核心逻辑的提交，表明项目正处于从功能快速迭代向稳定性打磨的过渡期。同时，针对 LM Studio 连接和语音功能的讨论热度不减，显示出用户对多模态和本地化部署的强烈需求。

## 2. 版本发布
- **版本号**: `nightly` (Nightly Build)
- **Tag**: `v0.2.4-nightly.20260328.60d7ec20`
- **类型**: 自动化构建 (可能不稳定)
- **变更范围**: 涵盖 `v0.2.4` 到 `main` 分支的所有提交。
- **注意**: 这是一个自动发布的测试版本，包含了今日关于 CPU 轮询优化、工具调用解析等最新修复，建议仅在测试环境中尝鲜。
- **链接**: [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.4...main)

## 3. 项目进展
今日共有 **11 个 PR 被合并**，主要推进了以下核心改进：

*   **🔧 核心性能优化**: 修复了 Agent 主循环中因半忙等待导致的 CPU 高占用问题，改用基于 channel 的阻塞 `select` 机制，显著降低空载资源消耗 ([PR #2103](https://github.com/sipeed/picoclaw/pull/2103))。
*   **🤖 模型兼容性增强**: 增加了对 Hermes 风格 XML 工具调用的兼容性解析，解决了部分微调模型（如 mimo-v2-pro）无法正确调用工具的问题 ([PR #2104](https://github.com/sipeed/picoclaw/pull/2104))。
*   **🛡️ 安全与隔离**: 合并了关于多租户会话隔离和项目隔离的硬ening 代码 ([PR #2102](https://github.com/sipeed/picoclaw/pull/2102))，为多用户环境打下基础。
*   **📝 日志增强**: 增加了 LLM 提示词 Token 消耗的日志记录，方便开发者调试成本 ([PR #2047](https://github.com/sipeed/picoclaw/pull/2047))。

## 4. 社区热点
今日讨论最活跃的话题集中在**部署体验**与**工具调用准确性**：

1.  **LM Studio 连接请求** ([Issue #28](https://github.com/sipeed/picoclaw/issues/28)): 尽管是老issue，今日再次活跃，用户强烈希望能像 Ollama 一样轻松接入本地 LM Studio，反映了"本地模型+开源框架"的刚需。
2.  **文件读取逻辑重构** ([Issue #1974](https://github.com/sipeed/picoclaw/issues/1974)): 社区对将 `ReadFileTool` 从字节偏移改为基于行分页的提议反响热烈，这表明 AI 在理解代码文件时，按行读取比按字节读取更符合人类逻辑。
3.  **语音功能重构** ([PR #1939](https://github.com/sipeed/picoclaw/pull/1939)): 该 PR 虽未合并，但引入了语音消息收发功能，支持了包括 WhatsApp、Discord 等多渠道，是迈向多模态 Agent 的关键一步。

## 5. Bug 与稳定性
今日报告了若干影响体验的 Bug，部分已有修复方案：

*   **🔴 高优先级 - 飞书话题回复错位**: 机器人在飞书群话题中被 @ 后，回复直接出现在群聊流中而非话题内部，严重影响企业级使用体验 ([Issue #2074](https://github.com/sipeed/picoclaw/issues/2074))。
*   **🟠 中优先级 - CPU 占用过高**: 也就是今日已合并修复的轮询问题，此前会导致后台持续占用 CPU ([PR #2103](https://github.com/sipeed/picoclaw/pull/2103))。
*   **🟠 中优先级 - Discord 配置报错**: Web UI 保存 Bot Token 时报 "Field is required" 错误，阻碍了新用户接入 ([Issue #2072](https://github.com/sipeed/picoclaw/issues/2072))。
*   **🟡 低优先级 - 工具反馈转义**: 工具返回的信息中特殊字符被转义（如 `>` 变为 `\u003e`），导致 Shell 命令预览不可读 ([Issue #2081](https://github.com/sipeed/picoclaw/issues/2081))。

## 6. 功能请求与路线图信号
*   **多模态与 ASR/TTS**: PR #1939 的活跃表明官方正在积极补齐语音能力。
*   **WebUI 增强**: 用户强烈建议在 Web 界面显示版本号 ([Issue #2077](https://github.com/sipeed/picoclaw/issues/2077))，且已有相关 PR ([PR #2087](https://github.com/sipeed/picoclaw/pull/2087)) 提交，预计很快合入。
*   **WebUI 安全**: 增加了基于 Token 的 Dashboard 登录页保护 ([PR #1953](https://github.com/sipeed/picoclaw/pull/1953))，意味着 PicoClaw 正在向生产级安全标准靠拢。
*   **标准化技能接入**: 提议支持 `.well-known` URI 标准来自动发现和安装技能 ([Issue #2101](https://github.com/sipeed/picoclaw/issues/2101))，这可能成为未来的插件标准。

## 7. 用户反馈摘要
*   **痛点**: Windows 用户在配置 QQ 渠道时遇到阻碍 ([Issue #2080](https://github.com/sipeed/picoclaw/issues/2080))；部分百度千帆模型无法使用 ([Issue #2079](https://github.com/sipeed/picoclaw/issues/2079))。
*   **场景**: 用户主要将 PicoClaw 用于飞书办公集成、本地知识库查询（LM Studio）及个人助理。
*   **评价**: 用户对从 OpenClaw 迁移到 PicoClaw 持积极态度，但对飞书等核心渠道的兼容性细节（如话题回复）要求极高，认为这是"迫切"的需求。

## 8. 待处理积压
*   **Docs PR 待审**: WhatsApp 配置指南 ([PR #1620](https://github.com/sipeed/picoclaw/pull/1620)) 已开启两周，建议维护者尽快 Review 以降低用户上手门槛。
*   **Config Issues**: 关于 Gateway 启动无 PID 的配置疑问 ([Issue #2105](https://github.com/sipeed/picoclaw/issues/2105)) 需要关注，这是新用户的第一道坎。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-28)

## 1. 今日速览
NanoClaw 今日保持**极高活跃度**，单日 PR 更新量达到 47 条，Issues 更新 17 条，显示出社区正处于密集开发与迭代阶段。虽然无新版本发布，但核心贡献者正集中精力修复安全隐患、优化容器运行时稳定性以及完善凭证管理机制。项目目前面临着严峻的安全挑战（命令注入）和架构压力（多运行时支持），但社区通过高频的代码合并（22 个 PR 已处理）正在快速响应这些问题。

## 2. 版本发布
*   **无新版本发布**：过去 24 小时内未检测到新的 Release 版本。项目似乎正处于积累功能与修复的阶段，为下一个版本做准备。

## 3. 项目进展
今日共有 **22 个 PR 被合并或关闭**，主要集中在**稳定性修复**、**安全性增强**和**Agent 指令优化**三个方向，显著提升了项目的健壮性：

*   **核心架构修复**：
    *   **PR #1497 [CLOSED]**: 修复了当 `lastAgentTimestamp` 缺失时，系统错误地将整个群组历史（高达 200 条消息）发送给容器 Agent 的问题，显著减少了上下文冗余和 Token 消耗。
    *   **PR #1401 [CLOSED]**: 解决了源代码变更后 Agent-runner 缓存未刷新的陈旧问题。
*   **诊断与可观测性**：
    *   **PR #1280 [CLOSED]**: 引入了基于 PostHog 的可选诊断数据收集功能，允许维护者更好地了解运行环境。
    *   **PR #1372 [CLOSED]**: 修复了诊断提示从未向用户展示的逻辑缺陷，确保诊断流程能被触发。
*   **文档与引导优化**：
    *   **PR #1452/#1450/#1453 [CLOSED]**: 重写了任务脚本的指令，引导 Agent 使用 `schedule_task` 而非内联 bash 循环，提升了复杂任务的可靠性。
    *   **PR #1468 [CLOSED]**: 增强了关于认证凭证（OAuth/API Keys）的文档说明，防止因 Token 过期导致的频繁 401 错误。

## 4. 社区热点
今日社区讨论焦点主要集中在**供应商解耦**和**外部工具生态集成**上：

*   **Issue #80 [OPEN] - 多运行时支持** 👍 53
    *   **诉求**：这是目前热度最高的问题。随着 Anthropic 开始限制第三方客户端，用户强烈要求 NanoClaw 支持 OpenCode、Codex、Gemini 等其他模型提供商，以避免单点依赖风险。
    *   **链接**：[qwibitai/nanoclaw Issue #80](https://github.com/qwibitai/nanoclaw/issues/80)
*   **Issue #1495 [OPEN] - MemStack 持久化记忆研究**
    *   **诉求**：探讨集成 MemStack 框架，为 Claude Agents 提供跨会话的持久化记忆和语义搜索能力。
    *   **链接**：[qwibitai/nanoclaw Issue #1495](https://github.com/qwibitai/nanoclaw/issues/1495)
*   **Issue #1493 [OPEN] - Headroom 上下文压缩代理**
    *   **诉求**：讨论通过 Headroom 代理在 API 层面压缩上下文，以降低 Token 成本并提升长对话性能。
    *   **链接**：[qwibitai/nanoclaw Issue #1493](https://github.com/qwibitai/nanoclaw/issues/1493)

## 5. Bug 与稳定性
今日报告了多个影响较大的稳定性与安全问题，部分已有对应修复方案：

*   **🔴 Critical: 安全审计发现命令注入 (Issue #1483)**
    *   **详情**：自动化审计在 `container-runtime.ts` 中发现 **Shell 命令注入漏洞** 以及未绑定的内存增长问题。
    *   **状态**：Issue 已关闭，推测相关修复已在今日的其他 PR 中提交或合并。
    *   **链接**：[qwibitai/nanoclaw Issue #1483](https://github.com/qwibitai/nanoclaw/issues/1483)
*   **🔴 High: 容器内运行导致崩溃 (Issue #1487)**
    *   **详情**：在 Docker 容器内运行 NanoClaw 本身时会导致硬崩溃，甚至连带关闭宿主 Shell，该问题属于回归故障。
    *   **状态**：Open，等待修复。
    *   **链接**：[qwibitai/nanoclaw Issue #1487](https://github.com/qwibitai/nanoclaw/issues/1487)
*   **🟡 Medium: OAuth 凭证泄露风险 (Issue #1500)**
    *   **详情**：Gmail/Calendar 的 OAuth Token 直接挂载在容器中，容易受到 Prompt 注入攻击导致凭证泄露。建议通过凭证代理进行代理。
    *   **状态**：Open。
    *   **链接**：[qwibitai/nanoclaw Issue #1500](https://github.com/qwibitai/nanoclaw/issues/1500)

## 6. 功能请求与路线图信号
*   **多模型/多提供商支持**：结合 #80 的热烈讨论和 **PR #478 (Vertex AI Support)** 的存在，可以预见项目正在向“模型无关”架构演进，支持 AWS Bedrock 和 GCP Vertex AI 可能是近期路线图的重点。
*   **增强的凭证管理**：**PR #1466 (1Password MCP Server)** 和 **Issue #1500 (Credential Proxy)** 表明社区正在推动从明文环境变量转向更安全的 Secrets 管理方案（如 1Password、凭证代理）。
*   **混合检索记忆系统**：**PR #1283** 提议用 `memory-lancedb-pro` 替换基础记忆模块，引入 BM25+Vector 混合检索，这可能成为下一版本的核心升级点。

## 7. 用户反馈摘要
*   **痛点：供应链攻击担忧**：有用户指出直接通过 `curl | bash` 安装存在安全隐患（Issue #1485），强烈建议将整个基础环境容器化。
*   **痛点：容器隔离状态判定**：Issue #1482 指出当前 Host 难以准确区分容器是“空闲”还是“处理完毕”，导致 IPC 通信逻辑混乱。
*   **场景：企业级隔离需求**：用户正在尝试构建严格隔离的多组部署（Issue #1490），需要限制单个容器同时拥有 Vault 访问权和外网权限，这反映了 NanoClaw 正在被用于对安全性要求极高的生产环境。

## 8. 待处理积压
*   **PR #1283 [OPEN] - 升级混合检索记忆系统**：该 PR 已活跃多日，大幅提升记忆检索能力，建议维护者优先 Review。
    *   链接：[qwibitai/nanoclaw PR #1283](https://github.com/qwibitai/nanoclaw/pull/1283)
*   **Issue #1424 [OPEN] - Fork 安全性指导**：用户询问如何保护公开的 Fork 仓库安全，目前仅 1 条回复，需要更明确的官方指导。
    *   链接：[qwibitai/nanoclaw Issue #1424](https://github.com/qwibitai/nanoclaw/issues/1424)
*   **PR #311 & PR #363 [OPEN] - Discord 功能与 Meta-Skill**：Discord 线程支持和 Skill 创建向导功能处于 Review 状态较久，属于用户体验提升的关键功能。
    *   链接：[PR #311](https://github.com/qwibitai/nanoclaw/pull/311), [PR #363](https://github.com/qwibitai/nanoclaw/pull/363)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

这里是 **NullClaw** 项目 2026-03-28 的动态日报。

### 1. 今日速览
NullClaw 项目今日保持**极高活跃度**，虽然未发布新版本，但核心开发者 @manelsen 进行了大量功能性提交与文档更新，共更新了 **40 个 PR**（其中大部分为功能性改进待合并）。项目正处于功能密集迭代期，重点集中在**多平台连接稳定性（QQ/WeChat/Discord）**、**安装体验优化（Windows二进制/Skills安装）**以及**底层架构升级（知识图谱/Outbox持久化）**。社区侧对 WeChat 插件的支持呼声较高，且报告了 Windows 平台的具体使用痛点。

### 2. 版本发布
*   **无新版本发布**。

### 3. 项目进展
今日共有 2 个 PR 合并，主要涉及文档与生态建设：
*   **文档完善 (PR #695, #713)**：合并了关于 `reliability`（可靠性）和 `model_fallbacks`（模型备选）配置的文档，以及运行时指导的改进。这解决了用户关于如何配置备用模型的困惑 (Issue #683)，降低了生产环境下的配置门槛。

**待合并的重要进展 (Open PRs)：**
开发主线正在向更健壮的架构演进，以下是今日推进的关键 PRs：
*   **稳定性架构**：PR #730 引入了持久化出站投递 Outbox，PR #731 增加了瞬时失败重试机制。这将极大解决 IM 场景下因网络波动导致的消息丢失问题。
*   **QQ 修复**：PR #732 针对 QQ 长任务执行后的断连与回复失败提供了修复方案，解决了 Issue #722 的痛点。
*   **生态扩展**：PR #735 提出支持从 Web URI (`.well-known`) 安装技能，顺应了 Agent Skills 的新标准。
*   **Windows 体验**：PR #738 提议将 Windows 二进制打包为 zip 并自动处理文件名后缀，直接回应了 Issue #737 的痛点。

### 4. 社区热点
*   **WeChat 插件支持 (Issue #714)**
    *   **链接**：nullclaw/nullclaw Issue #714
    *   **分析**：用户强烈请求集成官方 WeChat 插件。考虑到 NullClaw 与 OpenClaw 的关联性以及微信在中国及东南亚的庞大用户群，这是目前社区呼声最高的功能请求。目前已有对应的文档 PR (#718) 在推进中。
*   **Windows 安装痛点 (Issue #737)**
    *   **链接**：nullclaw/nullclaw Issue #737
    *   **分析**：用户指出使用 `eget` 下载的 Windows 二进制文件带有冗余的平台后缀，导致 CLI 使用不便。这是典型的"开发环境正常但发布流程遗漏细节"的问题。

### 5. Bug 与稳定性
1.  **[已解决/有PR]** **QQ 长任务断连 (Issue #722)**
    *   **严重度**：中。执行耗时任务时 AI 响应丢失且连接断开。
    *   **状态**：PR #732 已提交修复，采用无 `msg_id` 的重试机制。
2.  **[待确认]** **Telegram Reasoning 不显示 (Issue #311)**
    *   **严重度**：低（主要影响调试）。开启 reasoning 后 Telegram 端仍不可见。
    *   **状态**：Issue 被关闭，但作者认为问题未彻底解决（对比 OpenClaw 的行为）。
3.  **[已解决/文档]** **自定义 Provider 幻觉问题 (Issue #659)**
    *   **严重度**：高。自定义模型默认不启用推理导致回答产生幻觉。
    *   **状态**：Issue 已关闭，推测通过文档指引或配置项修正解决。

### 6. 功能请求与路线图信号
*   **标准化技能分发**：Issue #734 建议支持 `.well-known` URI 标准安装 Skills。结合 PR #735 的提交，可以看出项目正在积极跟进 **Agent Skills 生态标准**（Vercel/Cloudflare 正在推动），预计该功能将在下个版本落地。
*   **模型选择交互优化**：PR #727 提出了交互式的多 Provider 模型选择器，信号显示项目正致力于让多模型切换对终端用户更透明、更易用。
*   **知识图谱内存**：PR #712 引入了基于 SQLite 的知识图谱后端，标志着 NullClaw 正在探索超越简单上下文窗口的**长期记忆**解决方案。

### 7. 用户反馈摘要
*   **配置复杂度**：用户在配置 Fallback Models 和 Custom Providers 时存在困惑，特别是关于 Reasoning 的开启方式（Issue #659, #683）。
*   **平台特性差异**：用户非常关注不同平台（Telegram vs QQ vs WeChat）的功能对等性，例如 Telegram 的 Reasoning 显示和 QQ 的连接稳定性。
*   **工具链体验**：Windows 用户对开箱即用的体验有较高要求，不希望进行手动的文件重命名操作。

### 8. 待处理积压
*   **PR 积压严重**：目前有 **37 个待合并 PR**，其中包含大量由核心开发者提交的关键功能（如 Memory KG、Outbox、Model Picker）。建议项目维护者尽快进行 Code Review 或设立 Feature Freeze 期进行合并，避免分支功能过于发散。
*   **Issue #311 (Telegram Reasoning)**：虽然已关闭，但用户反馈仍表示不完美。建议重新评估该需求的优先级，或在文档中明确说明当前 Reasoning 的展示限制。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 (2026-03-28)

**分析师：** AI 智能体与个人 AI 助手开源项目分析组  
**数据源：** github.com/nearai/ironclaw

---

## 1. 今日速览
IronClaw 今日保持**极高的开发活跃度**，随着 **v0.23.0** 版本的发布，项目正式完成了多租户隔离架构的核心构建。过去 24 小时内，仓库共处理了 47 个 PR 更新（含 12 个合并/关闭）和 22 个 Issue 更新。重点集中在**安全性增强**（修复审批线程劫持漏洞）、**稳定性重构**（Routine 执行引擎）以及**用户体验改进**（配置热加载、UI 交互）。CI/CD 系统通过自动化审查发现了多个高危代码路径，显示出项目质量保障体系的成熟运作。

## 2. 版本发布
### 🔖 [v0.23.0](https://github.com/nearai/ironclaw/releases/tag/v0.23.0) (2026-03-27)
本次更新主要聚焦于**企业级多租户架构**与**连接稳定性**，是一个重要的功能性版本。

*   **Added (新增功能):**
    *   **Multi-tenant Isolation (Phases 2–4):** 完成了完整的多租户隔离实现 ([PR #1614](https://github.com/nearai/ironclaw/pull/1614))，这标志着 IronClaw 从单一实例工具向多用户平台迈出了关键一步。
*   **Fixed (修复):**
    *   **(routines)** 修复了更新回退失败后无法恢复删除名称的问题 ([PR #1108](https://github.com/nearai/ironclaw/pull/1108))。
    *   **(mcp)** 修复了对 MCP 协议中 `202 Accepted` 状态码的处理逻辑。

> **⚠️ 升级提示：** 随着多租户隔离的全面启用，使用旧版静态环境变量进行认证的用户需尽快迁移至数据库支持的认证体系，详见 [PR #1626](https://github.com/nearai/ironclaw/pull/1626)。

## 3. 项目进展
今日共有 **12 个 PR** 被合并或关闭，主要集中在错误处理、安全性修复及架构优化。

*   **架构优化 - v2 引擎雏形:** [PR #1557](https://github.com/nearai/ironclaw/pull/1557)（已合并）引入了全新的 `ironclaw_engine`，统一了 Thread-Capability-CodeAct 执行模型，用 5 个原语替代了原本碎片化的 10 个抽象。这为未来的高性能并发打下了基础。
*   **安全性修复 - 错误类型重塑:** [PR #1714](https://github.com/nearai/ironclaw/pull/1714)（已合并）修复了 `process_tool_result()` 中的类型擦除问题，恢复了具体的 Error 类型，使得错误模式匹配和恢复成为可能。
*   **UI 功能增强:** [PR #632](https://github.com/nearai/ironclaw/pull/632)（已合并）实现了 Web 端的线程管理功能（挑选、移动、删除），极大提升了对话管理体验。

## 4. 社区热点
今日社区讨论主要围绕**配置灵活性**与**新标准支持**展开：

1.  **[feat] Unify configuration sources before hot-reload ([#1119](https://github.com/nearai/ironclaw/issues/1119))**
    *   **热度：** P2 优先级，关联多个核心功能（热重载、CLI 可靠性）。
    *   **核心诉求：** 用户希望 IronClaw 能统一处理 Env vars、TOML、DB 等 5 种配置源，解决当前配置优先级混乱导致的“修改不生效”痛点。
2.  **[feat] Support installing skills from `.well-known` URI ([#1717](https://github.com/nearai/ironclaw/issues/1717))**
    *   **热度：** 新提出，紧跟行业标准。
    *   **核心诉求：** 社区希望 IronClaw 支持即将标准化的 Agent Skills 发现协议（类似 Cloudflare 和 Vercel 的实现），以便更好地集成到生态系统工具中。
3.  **[feat] Support custom LLM provider configuration via web UI ([PR #1340](https://github.com/nearai/ironclaw/pull/1340))**
    *   **热度：** 持续活跃。
    *   **核心诉求：** 允许用户在 Web UI 中直接配置自定义 LLM Provider，无需修改代码或重启服务。

## 5. Bug 与稳定性
系统自动审查及用户反馈揭示了几个关键的稳定性隐患，部分已有修复方案。

| 严重程度 | 问题描述 | 状态 | 相关链接 |
| :--- | :--- | :--- | :--- |
| **CRITICAL** | **跨频道审批线程劫持 (授权绕过)** <br> 攻击者可能通过特定操作在未授权频道执行审批操作。 | **Open** (Fix in PR #1590) | [Issue #1485](https://github.com/nearai/ironclaw/issues/1485) |
| **CRITICAL** | **TOCTOU 竞态条件** <br> 审批线程解析过程中存在“检查时间到使用时间”漏洞。 | **Open** | [Issue #1486](https://github.com/nearai/ironclaw/issues/1486) |
| **HIGH** | **数据库错误细节泄露** <br> API 客户端直接接收到格式化的数据库异常信息，存在信息泄露风险。 | **Open** (Fix in PR #1719) | [Issue #1702](https://github.com/nearai/ironclaw/issues/1702) |
| **HIGH** | **Telegram Bot 工具调用半途而废** <br> HTTP Tool Routine 报错，导致 Bot 只能检查消息但无法完整执行轮询。 | **Open** | [Issue #1676](https://github.com/nearai/ironclaw/issues/1676) |
| **MEDIUM** | **UTF-8 Panic 风险** <br> 字符串截断时可能因字节索引错误导致 Panic。 | **Fixed** (PR #1688) | [Issue #1669](https://github.com/nearai/ironclaw/issues/1669) |

## 6. 功能请求与路线图信号
*   **安全金融执行层 ([Issue #1712](https://github.com/nearai/ironclaw/issues/1712)):** 提出构建安全的金融操作执行架构，包括托管、签名和策略执行。考虑到 NEAR AI 的背景，这很可能是下一阶段的核心战略方向。
*   **LLM 热重载 ([Issue #1350](https://github.com/nearai/ironclaw/issues/1350)):** 强烈请求支持不重启进程的情况下切换 LLM Provider。目前 [PR #1340](https://github.com/nearai/ironclaw/pull/1340) 已部分解决配置问题，但内核热重载仍在规划中。
*   **局域网 LLM 访问 ([PR #1696](https://github.com/nearai/ironclaw/pull/1696)):** 新增 `LLM_ALLOW_LOCAL_NETWORK` 配置，允许用户接入本地网络的自托管模型，满足隐私敏感型用户需求。

## 7. 用户反馈摘要
*   **痛点：** **配置生效难**。多位用户反馈在 Web UI 修改 LLM Provider 或使用特定模型（如 Codex）后，系统无法正确识别或需重启才生效 ([Issue #1697](https://github.com/nearai/ironclaw/issues/1697), [Issue #1350](https://github.com/nearai/ironclaw/issues/1350))。
*   **痛点：** **Web UI 验证不足**。用户指出 Base URL 字段接受非法格式（如 `not-a-url`），导致后续难以排查的错误 ([Issue #1709](https://github.com/nearai/ironclaw/issues/1709))。
*   **场景：** **集成第三方模型**。用户尝试接入 GLM-V4.7 等兼容 OpenAI 协议的模型时遇到 Stream Mode 解析失败的问题 ([Issue #1691](https://github.com/nearai/ironclaw/issues/1691))。

## 8. 待处理积压
*   **[PR #1626](https://github.com/nearai/ironclaw/pull/1626) (DB-backed User Management):** 作为多租户核心功能，此巨型 PR (Size: XL) 已活跃多日，是 v0.24.0 发布的关键路径，需重点 Review。
*   **[PR #1650](https://github.com/nearai/ironclaw/pull/1650) (Routine Reliability Overhaul):** 针对 Routine 执行循环和静默失败的大修，直接影响自动化任务的稳定性，建议尽快推进合并。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-03-28)

这里是 **LobsterAI** (netease-youdao/LobsterAI) 的开源项目分析日报。

## 1. 今日速览

LobsterAI 今日保持了**极高的开发活跃度**，共有 **50 个 PR 更新**（含 20 个合并/关闭）和 **26 个 Issue 更新**。项目正处于快速迭代期，重点集中在 **Cowork 交互体验优化**（如输入框重构、会话管理）和 **底层架构解耦**（如 IM 插件化迁移）。虽然社区反馈了若干严重的任务管理和模型稳定性 Bug，但核心团队及贡献者响应迅速，已有多个修复 PR 提交待合并。整体来看，项目正在向更成熟的“多 Agent 协同”与“高可用性”方向演进。

## 2. 版本发布

*   **无新版本发布**：截至今日，过去 24 小时内无正式版本发布。大量新功能（如文件夹管理、UI 重构）和修复正处于 PR 合并阶段，预计将在近期集结发布。

## 3. 项目进展

今日共有 20 个 PR 被合并或关闭，主要集中在**性能优化**、**UI 交互增强**和**架构重构**：

*   **性能与架构优化**：
    *   [PR #888](https://github.com/netease-youdao/LobsterAI/pull/888) **[CLOSED]**: 针对 Intel Mac 主进程阻塞问题进行了流式输出性能优化，引入了 SQLite 写入节流机制。
    *   [PR #984](https://github.com/netease-youdao/LobsterAI/pull/984) **[OPEN]**: 启动了一项重要的架构迁移，将“小蜜蜂”(Xiaomifeng) 从核心代码迁移至插件架构，这将显著提升系统的模块化程度。
*   **交互体验升级**：
    *   [PR #939](https://github.com/netease-youdao/LobsterAI/pull/939): 增强了代码块的显示能力，支持**折叠/展开**和**行号切换**，提升代码阅读体验。
    *   [PR #610](https://github.com/netease-youdao/LobsterAI/pull/610): 正在重构 Prompt 输入框，引入结构化编辑器，旨在解决资源引用和指令输入的复杂性问题。
    *   [PR #978](https://github.com/netease-youdao/LobsterAI/pull/978): 实现了**聊天文件夹**功能，允许用户对会话进行分类管理。
*   **稳定性修复**：
    *   [PR #966](https://github.com/netease-youdao/LobsterAI/pull/966) **[CLOSED]**: 修复了模型仅返回 "thinking" 内容时 UI 显示“已完成”但实际上无内容的误导性问题。

## 4. 社区热点

今日社区讨论焦点主要集中在**任务执行稳定性**与**多模型管理策略**：

1.  **任务无法停止的严重故障** ([Issue #953](https://github.com/netease-youdao/LobsterAI/Issue/953))
    *   **热度**: 👍 1 | 评论: 2
    *   **分析**: 用户报告在 2026.3.26 版本中，点击“停止”或“删除”任务后，后台进程依然运行，导致资源占用甚至 API 请求崩溃。这反映了当前 Agent 任务调度生命周期管理的脆弱性，是急需修复的阻断性问题。
2.  **多 Agent 架构的需求** ([Issue #964](https://github.com/netease-youdao/LobsterAI/Issue/964))
    *   **热度**: 评论活跃
    *   **分析**: 用户提出了明确的“多 Agent 隔离架构”需求，希望不同场景（如销售、健康助手）拥有独立的记忆和配置。这与项目目前的迭代方向高度契合，暗示了单 Agent 架构已无法满足进阶用户需求。
3.  **模型切换与管理策略** ([Issue #943](https://github.com/netease-youdao/LobsterAI/Issue/943) & [Issue #948](https://github.com/netease-youdao/LobsterAI/Issue/948))
    *   **分析**: 用户 chinazhoumin 提出了一系列关于模型配置的改进建议，包括 IM 交互与 UI 交互模型分离、模型故障自动降级（Fallback）等。这表明用户对系统的**高可用性**（HA）有了更高期待。

## 5. Bug 与稳定性

今日报告了多个影响核心功能的 Bug，需引起高度重视：

*   **P0 - 核心功能失效**:
    *   **任务无法停止** ([Issue #953](https://github.com/netease-youdao/LobsterAI/Issue/953)): 停止按钮失效，导致资源泄露和 API 报错。**暂无关联 Fix PR**。
    *   **Web Search 启动失败** ([Issue #981](https://github.com/netease-youdao/LobsterAI/Issue/981)): 应用启动时报错 `Failed to start Web Search service`。
*   **P1 - 兼容性与崩溃**:
    *   **Gateway 无限重启** ([Issue #844](https://github.com/netease-youdao/LobsterAI/Issue/844) [CLOSED] & [Issue #859](https://github.com/netease-youdao/LobsterAI/Issue/859)): 切换模型或配置错误导致 OpenClaw Gateway 陷入崩溃循环。
    *   **MCP Daemon 未启动** ([Issue #961](https://github.com/netease-youdao/LobsterAI/Issue/961)): MCP 服务链路断开，导致自定义服务不可用。
    *   **私有部署模型 Skill 调用失败** ([Issue #955](https://github.com/netease-youdao/LobsterAI/Issue/955) [CLOSED]): 私有 Qwen 模型无法正常使用 Skill。
*   **P2 - 体验问题**:
    *   **安全漏洞隐患** ([Issue #977](https://github.com/netease-youdao/LobsterAI/Issue/977)): Deep Link URL 缺乏严格校验，存在潜在安全风险。
    *   **macOS 快捷键错误** ([Issue #973](https://github.com/netease-youdao/LobsterAI/Issue/973)): 设置中显示 `Ctrl` 而非 `Cmd`。(Fix: [PR #980](https://github.com/netease-youdao/LobsterAI/pull/980))

## 6. 功能请求与路线图信号

结合 Issues 和 PRs，发现项目未来的明确演进信号：

*   **信号 1: 多 Agent 支持与隔离架构**
    *   来源: [Issue #964](https://github.com/netease-youdao/LobsterAI/Issue/964)
    *   状态: **需求明确**。用户要求独立的工作目录、身份和记忆，这是迈向复杂 AI 助手的关键一步。
*   **信号 2: IM 交互的专业化增强**
    *   来源: [Issue #949](https://github.com/netease-youdao/LobsterAI/Issue/949) & [Issue #986](https://github.com/netease-youdao/LobsterAI/Issue/986)
    *   状态: **功能请求**。希望在 IM 端支持指定模型、查看配额，并解决微信端“回复堆积”的非流式体验问题。
*   **信号 3: 结构化输入与富引用**
    *   来源: [PR #610](https://github.com/netease-youdao/LobsterAI/pull/610) & [PR #557](https://github.com/netease-youdao/LobsterAI/pull/557)
    *   状态: **开发中**。重构输入框以支持类似 Cursor 的 `@mention` 精确引用附件，这将显著提升 Agent 理解指令的准确度。

## 7. 用户反馈摘要

*   **痛点**: 用户对**任务失控**（无法停止）感到非常沮丧 ([#953](https://github.com/netease-youdao/LobsterAI/Issue/953))；IM 端（特别是微信）回复延迟高，需要等待全部生成完才发送，体验不如主流机器人流畅 ([#986](https://github.com/netease-youdao/LobsterAI/Issue/986))。
*   **场景**: 用户尝试将 LobsterAI 接入私有部署的大模型（如 Qwen3-30B）用于企业场景 ([#955](https://github.com/netease-youdao/LobsterAI/Issue/955))；用户希望在不同社交平台（钉钉、飞书、微信）同时运营不同人设的助手 ([#964](https://github.com/netease-youdao/LobsterAI/Issue/964))。
*   **满意点**: 用户对 LobsterAI 尝试支持 Skill 和 Cowork 模式表示期待，认为这区别于普通的 Chatbot，具有实际生产力潜力。

## 8. 待处理积压

*   **安全漏洞**: [Issue #977](https://github.com/netease-youdao/LobsterAI/Issue/977) 提出的 Deep Link 安全校验问题尚未有对应修复 PR 提交。
*   **任务调度核心问题**: 针对高优先级的 [Issue #953](https://github.com/netease-youdao/LobsterAI/Issue/953) (任务无法停止)，目前尚未见到明确的修复 PR，建议维护者优先介入排查。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-03-28)

## 1. 今日速览
今日 TinyClaw 项目整体呈现出**低交互、高产出**的维护状态。虽然过去 24 小时内未监测到新的 Issue 提交或版本发布，社区评论活跃度暂时归零，但核心开发团队合并了两个关键的架构改进 PR。这表明项目正处于**功能迭代与 UI 重构的活跃开发期**，重点在于优化交互体验和引入持久化任务管理。整体来看，项目代码库健康，核心功能正在稳步增强，但社区侧的讨论热度有待提升。

## 2. 版本发布
**无**
今日无新版本发布。

## 3. 项目进展
今日共有 **2 个重要的 Pull Requests** 被关闭（合并或终止），标志着项目在 UI 布局和核心功能模块上取得了实质性进展：

*   **UI 布局重构：Office 模式导航优化**
    *   **PR**: [#249 refactor(office): reorganize office layout with topbar navigation](https://github.com/TinyAGI/tinyagi/pull/249)
    *   **详情**: 该 PR 对 "Office" 布局进行了重大重构。将导航项从侧边栏移至顶部栏，并引入了路由分组 `(office)`。此外，增强了交互性，使 Agent 角色可点击以打开详情面板。
    *   **点评**: 此次更新显著改善了用户界面的空间利用率，使 "Office" 模块作为主要入口的定位更加清晰，有助于提升多任务处理时的操作效率。

*   **核心功能上线：Linear 风格的任务/项目管理**
    *   **PR**: [#252 feat(tasks): linear-style task/project management with comments](https://github.com/TinyAGI/tinyagi/pull/252)
    *   **详情**: 这是一个重量级的功能更新。引入了类似 Linear 的统一工作区，支持任务、项目和评论功能。后端采用了 SQLite 进行持久化，并实现了 Linear 风格的 ID 生成系统（如 SYS-1）。
    *   **点评**: 引入持久化的任务管理系统意味着 TinyClaw 正从一个单纯的 AI 助手原型向具备生产力的协作工具演进。SQLite 的轻量化选型也降低了部署门槛。

## 4. 社区热点
**今日无活跃讨论。**
过去 24 小时内 Issues 区和 PR 区均无新增评论（评论数为 0）。这通常意味着项目可能处于以下状态之一：
1.  核心开发者正在集中精力进行封闭式开发（如今日合并的 PR 所示）。
2.  社区正处于新功能发布前的平静期，用户正在消化近期的更新。

## 5. Bug 与稳定性
**今日无新增 Bug 报告。**
过去 24 小时内未收到新的 Issue 反馈。结合今日合并的重构 PR，建议维护者在下一个版本中重点关注以下潜在回归风险：
*   Office 布局路由变更可能导致的旧链接失效。
*   SQLite 持久化引入后的数据迁移或读写性能问题。

## 6. 功能请求与路线图信号
虽然今日无新增功能请求（Issue），但从合并的 PR 中可以窥见明确的**路线图信号**：
*   **生产力导向**: 项目正积极对标 Linear 等现代项目管理工具，试图将 AI Agent 的能力与结构化的任务流结合。
*   **布局组件化**: 引入 shadcn Sidebar 和 Topbar 导航，暗示后续可能会有更多模块化的 UI 组件接入，以支持更复杂的交互场景。

## 7. 用户反馈摘要
**今日无直接用户反馈。**
由于缺乏评论数据，暂时无法提炼用户痛点。建议关注后续几天用户对 #252 引入的 Linear 风格任务系统的实际使用反馈，特别是关于 ID 生成逻辑和评论线程的易用性评价。

## 8. 待处理积压
今日无长期未响应的活跃 Issue。鉴于今日合并了两个较大的 PR，建议维护者：
*   密切观察合并后的代码稳定性。
*   虽然没有公开的积压 Issue，但考虑到 0 新增 Issue 的现状，现在是处理 Technical Debt（技术债务）或更新文档的绝佳时机。

---
*分析师注：数据来源于 GitHub TinyAGI/tinyclaw 项目，统计周期为 2026-03-28 前 24 小时。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-03-28)

这里是基于 2026年3月28日 GitHub 数据生成的 Moltis 开源项目日报。

## 1. 今日速览
Moltis 项目今日呈现**高频率迭代与架构深度优化**并行的状态。
项目在24小时内连续发布了 3 个版本，显示其 CI/CD 流水线处于高度活跃状态。
核心贡献者 @penso 完成了多项关键重构，包括 Symphony 工作流守护进程的合并及 GraphQL 服务的修复，显著提升了系统的扩展性。
虽然新增 Issue 数量较少，但高达 100% 的 PR 合并/关闭率表明维护者对代码库的掌控力极强，正在为下一阶段的功能交付清理道路。

## 2. 版本发布
今日连续发布了三个版本，均未提供具体的 Release Notes，推测为敏捷开发模式下的持续交付构建。
*   **Release 20260327.05** - [查看详情](https://github.com/moltis-org/moltis/releases/tag/20260327.05)
*   **Release 20260327.03** - [查看详情](https://github.com/moltis-org/moltis/releases/tag/20260327.03)
*   **Release 20260327.01** - [查看详情](https://github.com/moltis-org/moltis/releases/tag/20260327.01)

> **分析师注**：缺乏 Changelog 可能会增加下游用户的升级成本，建议维护者补充关键变更说明。

## 3. 项目进展
今日共有 4 个 PR 归档（合并或关闭），标志着项目在**自动化工作流**和**成本控制**方面迈出重要一步。

*   **Symphony 工作流守护进程落地**
    *   **PR #421 [CLOSED]**: `feat(symphony): add workflow daemon foundation`
    *   **详情**: 这是一个重大功能更新，引入了 `moltis-symphony` crate，支持 `WORKFLOW.md` 加载、运行时配置及 Linear 集成。这意味着 Moltis 正在从单纯的 AI 助手向支持复杂工作流自动化的平台演进。
    *   **链接**: [moltis-org/moltis PR #421](https://github.com/moltis-org/moltis/pull/421)

*   **LLM 成本优化与提示词缓存**
    *   **PR #495 [CLOSED]**: `feat(providers): add prompt caching for Anthropic and OpenRouter`
    *   **详情**: 针对 Anthropic 和 OpenRouter 添加了 Prompt Caching（提示词缓存）支持，通过在系统提示词和用户消息中注入 `cache_control` 来减少重复 Token 消耗。这直接回应了企业级用户对 API 成本控制的强需求。
    *   **链接**: [moltis-org/moltis PR #495](https://github.com/moltis-org/moltis/pull/495)

*   **GraphQL 架构修正**
    *   **PR #210 [CLOSED]**: `feat(graphql): add sessions.active query and fix chat service binding`
    *   **详情**: 修复了 GraphQL 绕过延迟绑定服务的 Bug，并新增了 `sessions.active` 查询。此 PR 解决了架构层面的技术债。
    *   **链接**: [moltis-org/moltis PR #210](https://github.com/moltis-org/moltis/pull/210)

*   **Telegram 集成尝试**
    *   **PR #276 [CLOSED]**: `feat(telegram): extract plaintext and markdown documents`
    *   **详情**: 尝试让 Telegram 机器人读取附件。虽然被关闭，但探索了多模态输入的边界。

## 4. 社区热点
今日社区关注点集中在**特定场景的功能增强**与**底层架构修正**。

*   **Issue #494 [OPEN]**: `fix(graphql): use late-bound live chat service...`
    *   **动态**: 这是今日最受关注的新 Issue。作者 @penso 指出即使合并了 PR #210，GraphQL 层仍可能存在绕过服务绑定的隐患。这显示了项目对架构纯净度的高要求。
    *   **链接**: [moltis-org/moltis Issue #494](https://github.com/moltis-org/moltis/issues/494)

*   **Issue #493 [CLOSED]**: `[Bug]: Install script looking for incorrectly named .deb`
    *   **动态**: 用户报告安装脚本无法找到正确的 .deb 包。该 Issue 已迅速关闭，推测已在最新的构建中修复。
    *   **链接**: [moltis-org/moltis Issue #493](https://github.com/moltis-org/moltis/issues/493)

## 5. Bug 与稳定性
今日 Bug 主要涉及安装与架构一致性，整体严重程度为**低-中**，且响应速度极快。

1.  **安装脚本命名错误** - **已修复**
    *   **问题**: 用户 @rufflepot 报告安装脚本寻找错误命名的 .deb 文件，阻碍了部署。
    *   **状态**: Issue #493 已关闭，推测修复已随新版本发布。
2.  **GraphQL 服务绑定残留问题**
    *   **问题**: Issue #494 指出 GraphQL 可能仍存在静态服务绑定的旧 Bug，可能导致 `chat_override` 失效。
    *   **状态**: 已识别，正在监控中（关联 PR #210 已合并，但该 Issue 提示可能需要进一步重构）。

## 6. 功能请求与路线图信号
根据今日的 Issue 和 PR 活动，可以识别出以下路线图信号：

*   **成本优化**: PR #495 引入的 Prompt Caching 表明项目正积极适配 Anthropic 等模型的新特性，旨在降低生产环境成本。
*   **工作流自动化**: Symphony 守护进程的引入明确释放了信号——Moltis 正试图通过代码化的 `WORKFLOW.md` 来编排复杂的 AI 任务，而不仅仅是作为聊天机器人存在。
*   **多平台文件解析**: PR #276 的尝试表明社区有在 Telegram 端处理文件（txt/md）的强烈需求，虽然该 PR 关闭，但这仍是潜在的功能优化方向。

## 7. 用户反馈摘要
*   **痛点**: 部署体验仍有提升空间。用户 @rufflepot 遇到的 `.deb` 文件名不匹配问题表明，自动化发布流程中的命名一致性需要保持严格规范。
*   **场景**: 开发者正在将 Moltis 接入 Telegram 并处理文档，说明用户有将 Moltis 作为“移动端知识库助手”的使用场景。
*   **满意度**: Bug 修复极快（Issue #493 当天解决），维护者响应积极，社区健康度良好。

## 8. 待处理积压
*   **GraphQL 架构最终一致性**: Issue #494 目前处于 Open 状态，需要确认 PR #210 的合并是否彻底解决了服务绑定问题，建议维护者持续跟进。
*   **Telegram 附件支持**: PR #276 虽然关闭，但“无法读取附件”是一个真实存在的功能缺失，建议将其加入长期规划或寻找替代实现方案。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-28)

## 1. 今日速览
CoPaw 项目今日保持**极高活跃度**，社区互动与代码迭代均有显著进展。过去 24 小时内，Issue 活跃度高达 50 条，显示出用户对新版本（v0.2.0+）的关注度持续攀升。PR 端表现强劲，共更新 39 条，其中 22 条顺利合并/关闭，**代码合并效率高**。尽管未发布新版本，但核心贡献者正集中精力修复 v0.2.0 引入的回归问题（如钉钉推送、配置覆盖），并积极重构底层架构（本地模型、频道懒加载），项目正处于**快速迭代与稳定性修复并行的关键阶段**。

## 2. 版本发布
*   **无新版本发布**。当前主要工作集中在 v0.2.0 后的缺陷修复与功能增强 PR 的合并上。

## 3. 项目进展
今日共有 **22 个 PR 被合并或关闭**，显著提升了系统的稳定性与用户体验：
*   **🚀 架构重构与控制力增强**：
    *   [PR #2411] 合并：实现了**统一优先级队列系统**和 `/stop` 控制命令，彻底解决了无法中断长时运行任务的痛点，提升了系统的并发控制能力。
    *   [PR #2067] 合并：为所有频道添加了 `/stop` 软中断命令，进一步完善了用户对 Agent 任务的控制权。
*   **🛠 关键 Bug 修复**：
    *   [PR #2392] 合并：**修复了钉钉定时任务 (Cron) 推送失败的严重 Bug**。通过引入 Open API 回退机制，解决了 `sessionWebhook` 过期导致的消息无法送达问题。
    *   [PR #2403] 合并：修复了 Windows 下文件编码问题（如 CSV 中文乱码），显著改善了跨平台兼容性。
    *   [PR #2401] 合并：实现了企业微信的 WebSocket 长连接媒体上传，增强了 WeCom 频道的多媒体消息能力。
*   **🎨 UI/UX 优化**：
    *   [PR #2415] 合并：增加了命令建议功能并更新了聊天输入框占位符，提升了 Web 端的易用性。

## 4. 社区热点
今日社区讨论焦点主要集中在**版本升级后的兼容性**与**功能缺失**问题上：
*   **🔥 [Issue #2291] Help Wanted: Open Tasks** (评论 24)
    *   官方发布的任务认领帖。社区成员积极认领 P0-P2 级任务，显示出较强的共建意愿。这表明项目正在尝试通过社区力量加速功能迭代。
*   **💬 [Issue #2382] venv 重置与依赖失效** (评论 9)
    *   用户反馈每次更新后 `venv` 被重置，导致 Skill 依赖丢失。这反映了用户对**升级平滑性**的强烈诉求，可能需要改进安装脚本或依赖管理机制。
*   **💬 [Issue #2425] 模型选择框消失** (评论 4)
    *   多名用户确认升级 v0.x.0 后 Web UI 中的模型选择框消失。这是一个**高优先级回归 Bug**，严重影响普通用户配置模型。

## 5. Bug 与稳定性
本日 Bug 报告主要集中在 v0.2.0 版本升级后的配置与界面问题：

| 严重程度 | Issue | 描述 | 状态/Fix PR |
| :--- | :--- | :--- | :--- |
| **🔴 High** | [#2293] | UI 界面进不去 (JS SyntaxError)，QA Agent 导致崩溃 | Open, Investigating |
| **🔴 High** | [#2425] | 模型选择框消失，无法配置模型 | Open, No Fix PR yet |
| **🔴 High** | [#2153] | Cron 任务不执行 (已通过 [PR #2392] 修复并合并) | **Fixed** |
| **🟠 Medium** | [#2421] | 飞书频道重复发送消息 | Open, Investigating |
| **🟠 Medium** | [#2431] | 语言设置重启后不持久化 (已有 [PR #2408] 待合并) | Open, Fix Pending |
| **🟡 Low** | [#1935] | Windows 下 CSV 中文乱码 (已通过 [PR #2403] 修复并合并) | **Fixed** |

## 6. 功能请求与路线图信号
*   **本地模型深度集成**：[PR #2419] 提出了 "CoPaw Local Model" 的完整重构方案。结合 Issue 中关于本地部署（vLLM, Qwen）的讨论，**强化本地模型支持**显然是下一阶段的核心路线图。
*   **Web UI 增强**：[Issue #2434] 请求支持 Ctrl+V 粘贴图片/文件，[Issue #2357] 请求会话重命名。这些细节体验的完善表明 Web Console 正在向成熟的生产力工具演进。
*   **多模态与 Hook 能力**：[Issue #2407] 呼吁开放 AgentScope 的 Hook 能力以支持 `self-improvement` 类 Skill，这预示着社区对**更高级的智能体自我进化机制**有强烈需求。

## 7. 用户反馈摘要
*   **痛点**：
    1.  **升级体验差**：多次提及升级后配置被覆盖 ([Issue #2236])、环境重置 ([Issue #2382]) 或 UI 变动找不到功能 ([Issue #2425])。用户期望**无损升级**和**UI 稳定性**。
    2.  **文档/引导不足**：部分用户对跨智能体协作、Skill 集成感到困惑 ([Issue #2420])，期望有更清晰的引导文档或 UI 提示。
    3.  **特定渠道问题**：钉钉和飞书的推送稳定性一直是反馈重点，今日虽修复了钉钉 Cron，但用户对消息触达的可靠性依然敏感。
*   **满意点**：
    1.  社区对 `/stop` 命令的实现表示欢迎 ([Issue #2313] 讨论中)，认为这是解决 Agent "失控" 的关键功能。
    2.  对 OpenRouter 等新 Provider 的集成表现出浓厚兴趣 ([Issue #2405])。

## 8. 待处理积压
以下高关注度 Issue 目前仍处于 Open 状态，建议维护者优先关注：
*   **[Issue #2291]**：贡献者任务列表需持续更新与维护，以保持社区热情。
*   **[Issue #2382]** & **[Issue #2236]**：关于升级覆盖配置/环境的问题，若不解决将严重影响用户后续升级意愿，建议纳入下一次版本发布的重点测试项。
*   **[PR #2408]**：语言持久化修复，建议尽快 Review 合并，解决用户吐槽的基础体验问题。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

这里是 **ZeptoClaw** 项目 2026-03-28 的动态日报。

# ZeptoClaw 项目日报 (2026-03-28)

### 1. 今日速览
ZeptoClaw 本日虽无 Issue 互动或版本发布，但在代码提交层面迎来了**高密度的功能迭代**。项目核心贡献者 @stuartbowness 连续发起了两项关键性 PR，分别针对**浏览器自动化能力**和**长上下文记忆管理**进行了深度优化。这表明项目正处于从单一智能体框架向具备复杂工具使用能力和鲁棒性更强的 Agentic Workflow 转型的关键阶段。整体来看，项目开发活跃度高，但社区互动（Issue/评论）今日略显沉寂。

### 2. 版本发布
*   **无新版本发布**。

### 3. 项目进展
尽管今日没有合并代码，但两个新提出的 PR 展示了项目在架构深度上的演进方向：

*   **[PR #459](https://qhkm/zeptoclaw/PR/459) 浏览器自动化工具集成**
    *   **详情**：引入了基于 `agent-browser` 的 `BrowserTool`。
    *   **技术亮点**：实现了 Lightpanda 与 Chrome 的双引擎回退机制，并集成了 SSRF 防护。这是从 #410 拆分出的独立模块，意味着 ZeptoClaw 即将具备原生的 Web 交互与信息检索能力。
*   **[PR #460](https://qhkm/zeptoclaw/PR/460) 多层级上下文压缩**
    *   **详情**：彻底重构了上下文压缩系统，从简单的单次字数统计升级为“多层纵深防御”策略。
    *   **解决问题**：旨在彻底解决长对话中因 Token 溢出导致的崩溃问题，显著提升了 Agent 在执行长时序任务时的稳定性。

### 4. 社区热点
*   **活跃度分析**：过去 24 小时内 Issues 列表为空，PR 区暂无评论。
*   **潜在关注点**：[PR #459](https://qhkm/zeptoclaw/PR/459) 和 [PR #460](https://qhkm/zeptoclaw/PR/460) 虽然目前评论数为 0，但考虑到其涉及的核心功能（Web 浏览与 Token 管理），预计将在未来 48 小时内吸引核心维护者的重点 Review。

### 5. Bug 与稳定性
*   **无明显新增 Bug 报告**（过去 24 小时无 Issue）。
*   **稳定性增强信号**：虽然不是 Bug 报告，但 [PR #460](https://qhkm/zeptoclaw/PR/460) 的描述中明确指出了此前存在的“长对话导致不可恢复的 Token 溢出错误”，这证实了项目此前在长程记忆处理上存在稳定性隐患，该 PR 即为针对性的 Fix。

### 6. 功能请求与路线图信号
*   **Web 交互能力**：通过 [PR #459](https://qhkm/zeptoclaw/PR/459) 可以看出，项目路线图正坚定地向 **Tool Use（工具调用）** 靠拢，特别是支持更轻量级的浏览器引擎（Lightpanda），显示出对降低资源消耗和提升爬虫效率的重视。
*   **无限上下文探索**：[PR #460](https://qhkm/zeptoclaw/PR/460) 信号显示，项目方正致力于解决 LLM 的原生窗口限制，这是迈向 Production-Ready Agent 的必经之路。

### 7. 用户反馈摘要
*   **数据缺失**：由于今日无新增 Issue 或评论，暂无法提炼来自终端用户的直接反馈。

### 8. 待处理积压
*   **需重点关注**：目前有 **2 个待合并的 PR** 处于 OPEN 状态，且均由同一开发者提交。建议维护者尽快介入 Review，避免功能分支积压。
*   **历史关联**：[PR #459](https://qhkm/zeptoclaw/PR/459) 源自 #410 的拆分，建议在合并时注意关闭相关的父 Issue 或关联 PR，保持 Git 历史清晰。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

你好！我是 AI 智能体与个人 AI 助手领域的开源项目分析师。基于你提供的 EasyClaw (github.com/gaoyangz77/easyclaw) 2026-03-28 的 GitHub 数据，我为你生成了今日的项目动态日报。

---

# EasyClaw 项目动态日报 (2026-03-28)

## 1. 今日速览
EasyClaw 项目今日整体呈现**低交互、稳发布**的状态。过去 24 小时内，社区互动（Issues/PR）处于静默期，无新增或关闭的工单与合并请求，显示项目目前处于功能稳定维护阶段。尽管社区讨论平淡，但维护者推送了 **v1.7.8 (RivonClaw)** 版本，主要聚焦于 **macOS 平台的安装体验优化**，解决了未签名应用被系统拦截的常见痛点。整体来看，项目健康度良好，当前工作重心在于分发便捷性与现有版本的稳定性维护。

## 2. 版本发布
今日发布了新版本 **v1.7.8**，这是今日最重要的项目动态。

*   **版本号**: [v1.7.8: RivonClaw v1.7.8](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.8)
*   **更新重点**: macOS 平台安装兼容性说明与故障排除。
*   **核心变更**:
    *   **非破坏性更新**: 此次更新主要涉及安装文档与可能的二进制文件微调，未提及破坏性 API 变更。
    *   **macOS Gatekeeper 处理**: 明确指出了用户在 macOS 上运行时可能遇到的 **"'RivonClaw' is damaged and can't be opened"** 错误。Release Notes 详细解释了这是由于应用缺乏 Apple 公证引起的，并非文件损坏，并提供了 Terminal 下的解决方案命令。
*   **迁移/安装建议**: macOS 用户在下载后若遇拦截，需通过终端执行命令移除隔离属性（具体命令见 Release 说明），Windows/Linux 用户不受影响。

## 3. 项目进展
今日无已合并或关闭的 Pull Requests。项目代码库在核心功能层面未发生变更，主要变动集中在 Release 资产的上传与文档更新。这表明 v1.7.8 可能是一次小范围的补丁更新或构建配置调整，而非功能性迭代。

## 4. 社区热点
过去 24 小时内，项目无活跃的 Issues 或 Pull Requests 讨论。社区层面暂无明显热点，处于平静期。

## 5. Bug 与稳定性
*   **已知问题**: 今日无新增 Bug 报告。
*   **文档化的稳定性问题**: 虽然没有新增 Issue，但 v1.7.8 的 Release Notes 暴露了一个长期存在的**中等级别体验问题**——**macOS 签名缺失**。
    *   **现象**: 应用在 macOS 上直接运行会被 Gatekeeper 拦截并提示“已损坏”。
    *   **状态**: 官方已提供绕过方案，暂无代码层面的修复（如购买证书进行签名）。
    *   **影响**: 增加了 macOS 新用户的上手门槛。

## 6. 功能请求与路线图信号
今日无新功能请求或路线图相关的信号。由于缺乏社区讨论，难以判断下一阶段的开发重心，预计短期内项目将继续保持现有功能集进行维护。

## 7. 用户反馈摘要
虽然今日无评论数据，但从 Release Notes 的侧重点可以推断出以下**隐性用户反馈**：
*   **痛点**: macOS 用户在安装早期版本时经常遇到安全拦截问题，导致误以为下载文件损坏。
*   **场景**: 非技术背景的用户在初次尝试运行 EasyClaw/RivonClaw 时容易受挫。
*   **满意度**: 维护者通过在 Release Note 中显眼位置提供中英双语解决方案，表明对用户反馈响应积极，致力于降低非签名软件的使用门槛。

## 8. 待处理积压
由于今日无活跃 Issue 更新，积压情况维持现状。
*   **建议关注**: 尽管今日无活跃数据，建议维护者关注 macOS 签名问题的长期解决方案。长期依赖命令行绕过安全机制可能会影响部分企业级或安全敏感用户的采用率。

---

**分析师结语**: EasyClaw 今日的动态主要体现在 v1.7.8 的发布，这是一次针对 macOS 用户体验的“修补型”更新。零交互的数据表明项目处于稳定的维护期，适合寻求稳定性的个人 AI 助手用户使用。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*