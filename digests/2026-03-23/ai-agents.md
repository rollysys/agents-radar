# OpenClaw 生态日报 2026-03-23

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-03-23 02:33 UTC

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

# OpenClaw 项目动态日报 (2026-03-23)

## 1. 今日速览

OpenClaw 项目今日保持**极高的活跃度**，社区贡献热情高涨。过去 24 小时内，Issue 更新量高达 500 条（其中 84% 为新开/活跃 Issue），PR 更新量同样达到 500 条，表明项目正处于快速迭代期。虽然暂无新版本发布，但待合并的 PR 积压量（359 条）显著，预示着下一个版本将包含大量修复与新特性。今日焦点集中在 **国际化支持 (i18n)** 的讨论、**网关稳定性** 的回归问题修复，以及对最新 **OpenAI GPT-5.4 模型** 的适配请求。

## 2. 版本发布

*   **无新版本发布**。
    *   *分析*：尽管无正式 Release，但大量的 PR 活动表明核心团队正在积极整合代码，可能正在筹备一次较大的版本更新（预计为 v2026.3.x 的后续版本）。

## 3. 项目进展

今日共有 **141 条 PR 更新**（合并/关闭），主要集中在提升系统稳定性、修复回归错误以及优化开发者体验：

*   **核心修复与稳定性**：
    *   [PR #50419](https://github.com/openclaw/openclaw/pull/50419)：已合并。增加了默认推理配置，解决了用户每次启动会话需重复配置的问题。
    *   [PR #52513](https://github.com/openclaw/openclaw/pull/52513)：已合并。修复了 Gateway 状态探测中的认证令牌传递问题，解决了部分用户无法连接网关的隐患。
    *   [PR #52508](https://github.com/openclaw/openclaw/pull/52508)：已合并。优化了 `exec` 工具超时时的错误输出，使其对用户更友好（不再是裸 JSON）。
*   **Web UI 与交互**：
    *   [PR #48144](https://github.com/openclaw/openclaw/pull/48144)：正在处理中。修复了 Control UI 中 Token 用量显示为“累计值”而非“当前上下文值”的误导性问题。
    *   [PR #38075](https://github.com/openclaw/openclaw/pull/38075)：正在处理中。修复了 Web 聊天界面因内部投递镜像导致的重复消息显示问题。
*   **文档与国际化**：
    *   [PR #49722](https://github.com/openclaw/openclaw/pull/49722) & [PR #49561](https://github.com/openclaw/openclaw/pull/49561)：正在处理中。分别添加了简体中文和韩文的 README，显示了社区推动项目全球化的努力。

## 4. 社区热点

今日社区讨论最热烈的话题如下：

1.  **[Issue #3460] Internationalization (i18n) Support** (113 评论)
    *   **链接**：[openclaw/openclaw Issue #3460](https://github.com/openclaw/openclaw/issues/3460)
    *   **分析**：这是今日热度最高的话题。尽管官方表示“目前没有带宽支持多语言”，但社区贡献了大量的翻译 PR。用户强烈希望 OpenClaw 能支持中文、韩文等多语言界面，以便非英语用户落地使用。
2.  **[Issue #26534] Add DingTalk as a first-install channel** (76 评论)
    *   **链接**：[openclaw/openclaw Issue #26534](https://github.com/openclaw/openclaw/issues/26534)
    *   **分析**：国内用户强烈呼吁将钉钉集成到首次安装向导中。目前虽然支持钉钉，但配置繁琐，阻碍了企业级用户的快速上手。
3.  **[Issue #45772] Gateway Heartbeat timer stops** (20 评论)
    *   **链接**：[openclaw/openclaw Issue #45772](https://github.com/openclaw/openclaw/issues/45772)
    *   **分析**：这是一个严重的回归 Bug，影响了系统的可靠性。自 v2026.3.8 引入后，心跳机制失效，导致长连接不稳定。
4.  **[Issue #8081] Multi-user permission management (RBAC)** (7 评论, 21 👍)
    *   **链接**：[openclaw/openclaw Issue #8081](https://github.com/openclaw/openclaw/issues/8081)
    *   **分析**：这是“点赞数”最高的功能请求。用户希望将 OpenClaw 分享给家人或同事使用，但目前缺乏权限隔离机制（所有用户都能看到 API Key）。

## 5. Bug 与稳定性

今日报告了多个影响使用的**回归错误**，主要集中在网关和认证模块：

*   **🔴 严重** - **认证头缺失 (401 Unauthorized)**
    *   [Issue #34830](https://github.com/openclaw/openclaw/issues/34830)：用户升级到 v2026.3.2 后，在使用 OpenRouter 等提供商时遭遇 401 错误。这直接导致 Agent 无法调用 LLM。目前尚无官方修复 PR 合并。
*   **🔴 严重** - **Gateway 频繁断开/重启**
    *   [Issue #49338](https://github.com/openclaw/openclaw/issues/49338)：v2026.3.13 的 npm 包缺失关键文件 `dist/gateway.js`，导致服务无法启动。
    *   [Issue #49510](https://github.com/openclaw/openclaw/issues/49510) & [Issue #50438](https://github.com/openclaw/openclaw/issues/50438)：网关 WebSocket 连接无端关闭 (1000)，导致 CLI 和 UI 无法控制 Agent。**相关修复正在 [PR #48095](https://github.com/openclaw/openclaw/pull/48095) 中处理（握手超时配置）。**
*   **🟠 中等** - **Ollama 集成失效**
    *   [Issue #46680](https://github.com/openclaw/openclaw/issues/46680)：Ollama 的思考模型 产生空响应。
    *   [Issue #46679](https://github.com/openclaw/openclaw/issues/46679)：Ollama 原生 API 在多轮工具调用时参数格式错误。
*   **🟠 中等** - **飞书插件加载失败**
    *   [Issue #52081](https://github.com/openclaw/openclaw/issues/52081)：最新版中飞书插件报错 `TypeError: buildChannelConfigSchema is not a function`，影响国内用户。

## 6. 功能请求与路线图信号

*   **模型支持更新**：
    *   [Issue #50265](https://github.com/openclaw/openclaw/issues/50265)：用户请求支持刚刚发布的 **OpenAI GPT-5.4 mini/nano** 模型。这表明 OpenClaw 需要更快地跟进模型提供商的更新。
*   **安全与权限 (高优先级)**：
    *   [Issue #7916](https://github.com/openclaw/openclaw/issues/7916)：请求支持 **API Key 加密存储**。目前密钥明文存储在配置文件中，存在安全隐患。
    *   [Issue #25145](https://github.com/openclaw/openclaw/issues/25145)：请求增加 **消息发送审批关卡**。在 AI 发送邮件/短信前增加人工确认步骤，防止 AI "发疯" 导致严重后果。
*   **生态扩展**：
    *   [Issue #50090](https://github.com/openclaw/openclaw/issues/50090)：关于 **ClawHub (技能市场)** 的生态建设讨论，旨在降低开发 Skill 的门槛。

## 7. 用户反馈摘要

*   **痛点**：
    *   **版本升级恐惧**：多位用户反馈不敢轻易升级，因为经常出现 Regression（如 401 错误、Gateway 崩溃）。
    *   **Docker 依赖地狱**：用户在使用官方 Docker 镜像时，经常遇到 `brew not installed` 或依赖缺失的问题 ([Issue #14593](https://github.com/openclaw/openclaw/issues/14593))。
    *   **移动端支持缺失**：用户强烈希望能直接下载预编译的 Android APK，而不是自行编译源码 ([Issue #9443](https://github.com/openclaw/openclaw/issues/9443))。
*   **满意点**：
    *   用户对 OpenClaw 的 **概念设计**（如 Skill 系统、多渠道接入）给予高度评价，认为它比简单的 Chat 封装更有潜力，但目前的稳定性拖累了体验。

## 8. 待处理积压

*   **🚨 需立即关注的 Bug**：
    *   [Issue #34830](https://github.com/openclaw/openclaw/issues/34830)：v2026.3.2 引入的 401 认证错误，导致部分提供商不可用。
    *   [Issue #51144](https://github.com/openclaw/openclaw/issues/51144)：Docker 容器不断重启，Gateway 无法保持运行。
*   **📜 长期未解决的 Enhancement**：
    *   [Issue #8081](https://github.com/openclaw/openclaw/issues/8081)：多用户/权限管理（21 个赞，自 2 月提出至今仍 Open）。
    *   [Issue #9443](https://github.com/openclaw/openclaw/issues/9443)：提供预编译 Android APK（自 2 月提出）。

---
**分析师结语**：OpenClaw 正处于功能爆发与稳定性磨合的阵痛期。社区贡献极其活跃（尤其是国际化方面），但核心工程团队需要优先解决最近版本引入的网关与认证回归问题，以恢复用户对升级的信心。建议下一个版本优先聚焦于 **稳定性修复** 和 **文档/国际化**，暂缓激进的新功能开发。

---

## 横向生态对比

# 2026-03-23 开源 AI 智能体生态横向对比分析报告

## 1. 生态全景
2026 年 3 月的 AI Agent 开源生态呈现出**功能爆发与稳定性磨合**并存的特征。各项目正从单一的聊天机器人向具备**多模态、多渠道、多模型**支持的综合自动化平台演进。核心竞争焦点已转移至**企业级稳定性**（Gateway 长连接、权限隔离）与**本地化/私有化部署**（RAG、多模型切换）。此外，**微信/飞书**等国内 IM 渠道的原生接入与**浏览器自动化**成为今日功能迭代的热门赛道。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新 | 合并/关闭数 | Release | 健康度/状态 | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (High) | 500 (High) | 141 | None | ⚠️ 高负载/积压严重 | 国际化、Gateway 故障、权限管理 |
| **IronClaw** | 16 | 50 | 15 | None | 🟢 高效迭代 | Engine v2 架构、多云支持、CI 严苛 |
| **PicoClaw** | 27 | 68 | 45 | Nightly | 🟢 极度活跃 | 事件驱动架构、微信原生、Web UI |
| **CoPaw** | 40 | 28 | 13 | None | 🟡 中等/修复期 | 多渠道路由、Shell 稳定性、企业集成 |
| **Zeroclaw** | 43 | 27+ | 27 | **v0.5.9** | 🟢 发布期 | 多模态、浏览器自动化、代码丢失争议 |
| **NanoBot** | 17 | 74 | 14 | None | 🟡 高吞吐/积压 | 本地模型兼容、流式输出、微信逆向 |
| **NanoClaw** | 7 | 44 | 14 | None | 🟡 扩张期 | 信任自治框架、多模型后端、Copilot SDK |
| **LobsterAI** | 33 | 28 | 8 | 2026.3.22 | 🟡 争议期 | UI 性能、内存泄漏、微信/Popo 集成 |
| **TinyClaw** | 0 | 2 | 1 | None | 🔵 维护/静默 | 消息队列重构、Telegram 稳定性 |
| **NullClaw** | 7 | 13 | 2 | None | 🔵 稳定/低频 | 兼容性修复、生产可观测性 |
| **ZeptoClaw** | 2 | 4 | 0 | None | 🔵 社区构建 | Telegram UX、微虚机架构讨论 |
| **EasyClaw** | 1 | 0 | 1 (Issue) | None | 🟢 维护模式 | Computer-use 修复、零积压 |
| **Moltis** | 2 | 1 | 1 | None | 🟢 平稳 | 文档更新、WhatsApp 集成反馈 |

> *注：健康度基于 PR 吞吐与 Bug 严重性评估；OpenClaw 虽活跃但回归 Bug 较多。*

## 3. OpenClaw 在生态中的定位

作为生态中的**核心参照项目**，OpenClaw 展现出明显的“头部效应”，但也面临“大企业病”的早期征兆。

*   **优势**：
    *   **社区规模效应**：Issue/PR 量级是其他项目的 5-10 倍，拥有强大的国际化（i18n）社区推动力。
    *   **生态粘性**：作为许多项目的上游依赖（如 LobsterAI, EasyClaw），其网关协议和 Skill 标准已成为事实标准。
*   **技术路线差异**：
    *   相比 **Zeroclaw** 和 **PicoClaw** 积极拥抱多模态和自动化，OpenClaw 目前仍主要聚焦于**文本交互与网关稳定性**。
    *   相比 **IronClaw** 的强工程化（CI/CD 自动化），OpenClaw 的代码质量控制显得较为吃力，近期 401/Gateway 等回归问题频发。
*   **定位**：OpenClaw 正试图成为 **"AI OS 的内核"**，但在多模态和稳定性上正受到 Zeroclaw 等新兴项目的强力挑战。

## 4. 共同关注的技术方向

1.  **IM 原生接入**：
    *   **诉求**：社区不再满足于 API 对接，强烈呼吁支持**微信个人号**（通过逆向或协议）和企业级飞书/钉钉的深度集成。
    *   *涉及项目*：NanoBot (逆向尝试), PicoClaw (原生机器人), CoPaw (企业微信路由), OpenClaw (钉钉/飞书)。
2.  **多模型后端与成本控制**：
    *   **诉求**：打破 Claude/OpenAI 单一依赖，支持 **Ollama 本地模型**、**国产模型**（MiniMax, Qwen）及 **GitHub Copilot**（为了免费额度）。
    *   *涉及项目*：NanoClaw (Copilot SDK), NanoBot (Ollama 兼容), NullClaw (Ollama Cloud), IronClaw (阿里云百炼)。
3.  **架构事件驱动化**：
    *   **诉求**：为了解决并发死锁和任务阻塞，多个项目正在重构核心循环，从简单的 Loop 转向 Event-Driven 或 Actor 模型。
    *   *涉及项目*：PicoClaw (Hooks 系统), IronClaw (Engine v2), TinyClaw (消息队列隔离)。
4.  **多模态与工具化**：
    *   **诉求**：Agent 需要眼睛和手。**语音转文字 (ASR)** 和 **浏览器自动化** 成为标配功能。
    *   *涉及项目*：Zeroclaw (Browser/Voice), PicoClaw (TTS/ASR 架构), LobsterAI (快捷执行)。

## 5. 差异化定位分析

*   **通用 OS vs. 专用工具**：
    *   **OpenClaw, IronClaw, NanoClaw** 致力于构建通用的 Agent 底座（OS），强调扩展性和编排能力。
    *   **TinyClaw, ZeptoClaw, EasyClaw** 则更像是轻量级插件或特定场景的 Wrapper，如 Telegram Bot 或 Computer-use 工具。
*   **架构代际**：
    *   **LobsterAI** 和 **NanoBot** 侧重于**IM 优先**，架构偏向于消息转发。
    *   **PicoClaw** 和 **Zeroclaw** 正在探索**多模态优先**，在底层直接集成 Vision 和 Audio 处理。
*   **目标用户**：
    *   **IronClaw** 明显面向**企业级/云原生**环境（TEE, CI/CD, 微服务）。
    *   **NanoBot, PicoClaw** 则更受**个人开发者/极客**青睐（本地模型、硬件加速）。

## 6. 社区热度与成熟度

*   **快速迭代爆发期**：**PicoClaw, Zeroclaw, NanoClaw**。这些项目功能上线快，积压 PR 多，社区兴奋度高，但 Bug 也相对较多。
*   **稳定维护与重构期**：**OpenClaw, IronClaw**。虽然活跃度极高，但重心已转向偿还技术债务（重构 Engine、修复 Gateway、增强 CI），表明项目正准备进入生产成熟期。
*   **垂直领域深耕期**：**CoPaw, LobsterAI**。主要解决特定渠道（国内 IM、企业审批流）的深度集成问题。
*   **静默/低频期**：**TinyClaw, NullClaw, EasyClaw**。更新频率低，可能转向内部开发或处于维护状态。

## 7. 值得关注的趋势信号

1.  **"模型后端"的军备竞赛**：
    *   开发者对 **Token 成本极其敏感**。对 GitHub Copilot SDK (NanoClaw) 和 Qwen Code CLI (NullClaw) 的请求表明，Agent 架构必须支持灵活切换低成本/免费模型。
    *   **建议**：开发者在设计 Agent 时应抽象 Model Layer，避免绑定单一厂商。

2.  **本地模型工具调用 的不稳定性**：
    *   几乎所有支持 Ollama 的项目都报告了本地模型在 Tool Call 上的失败率高或格式错误。
    *   **建议**：在 Agent 核心循环中需增加针对本地模型的**容错/重试机制**或**格式转换层**。

3.  **安全沙箱与权限隔离迫在眉睫**：
    *   随着Agent 能力增强（Shell 执行、Computer-use），社区对"误删文件"或"权限越界"的恐惧加剧。RBAC (OpenClaw #8081) 和 审批关卡 (LobsterAI, NanoClaw) 成为高赞请求。
    *   **建议**：新项目应优先考虑引入 `gVisor`、`Firecracker` (ZeptoClaw #387) 或严格的文件系统白名单，而非裸奔执行代码。

4.  **分支管理的隐患**：
    *   Zeroclaw 和 OpenClaw 均出现了因分支迁移或合并导致的**功能丢失**。
    *   **建议**：开源项目在高速迭代中需警惕 Git 工作流的混乱，建议引入更严格的自动化 Cherry-pick 或 Release 流程。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

这里是 **NanoBot** 项目 2026-03-23 的动态日报。

### 1. 今日速览
NanoBot 今日保持着**极高的开发活跃度**与社区关注度。过去24小时内，项目收到了 **74 个 PR 更新**（其中 60 个处于待合并状态），显示出贡献者正在大规模提交新功能与修复；同时有 **17 个 Issue 更新**，主要集中在对本地模型上下文管理的困惑以及多通道（微信、Telegram）的接入问题上。虽然没有新的版本发布，但 `nightly` 分支刚刚完成了刷新，预计将合并大量社区贡献。整体来看，项目正处于功能快速迭代期，特别是在通道扩展和 Agent 核心循环优化方面。

### 2. 版本发布
*   **无新版本发布**。
*   **注意**：根据 Issue #2312，项目的 `nightly` 分支已于北京时间 3 月 22 日 20:00 刷新。参与测试的开发者需注意同步最新代码。

### 3. 项目进展
今日共有 **14 个 PR 被合并或关闭**，主要集中在基础设施优化与关键 Bug 修复：
*   **端到端流式输出落地** ([PR #2365](https://github.com/HKUDS/nanobot/pull/2365))：由 @Re-bin 提交并合并。该功能实现了从 LLM Provider 到 Channel（目前主要是 Telegram）的 Token 级流式传输，显著降低了用户感知的延迟。
*   **API 兼容性修复** ([PR #2371](https://github.com/HKUDS/nanobot/pull/2371))：修复了 `ContextBuilder.build_messages()` 的参数错误，解决了可能导致近期版本崩溃的 `TypeError`。
*   **类型检查增强** ([PR #2367](https://github.com/HKUDS/nanobot/pull/2367))：开始引入 `mypy` 静态类型检查，旨在提升代码健壮性。

### 4. 社区热点
今日讨论最热烈的话题集中在**模型上下文溢出**与**微信生态支持**：
*   **上下文长度配置引发报错** ([Issue #2343](https://github.com/HKUDS/nanobot/issues/2343))：
    *   **现象**：用户配置 `contextWindowTokens` 为 8192，但实际请求 token 数达到 36k 导致报错。
    *   **分析**：用户对 `maxTokens`（输出限制）和 `contextWindowTokens`（总窗口）的理解有偏差，且 Agent 似乎未能有效截断历史记录。这反映了当前配置校验机制的不足。已有 PR #2359 试图通过添加校验器来缓解此问题。
*   **微信个人号支持呼声高涨** ([PR #2348](https://github.com/HKUDS/nanobot/pull/2348) & [Issue #2353](https://github.com/HKUDS/nanobot/issues/2353))：
    *   **动态**：社区正在通过逆向 API 积极适配微信个人号登录，且微信官方近期释放了 Openclaw 支持信号。用户强烈希望能直接使用个人微信而非企业微信。

### 5. Bug 与稳定性
今日报告了多个影响使用体验的 Bug，按严重程度排序如下：

*   **🔴 严重 - Ollama 本地模型任务执行中断**
    *   **Issue**: [#2293](https://github.com/HKUDS/nanobot/issues/2293)
    *   **描述**：在使用 Ollama 部署 Qwen2.5 等本地模型时，闲聊正常，但一旦触发 Tool 调用，对话会静默失败。
    *   **状态**：尚无明确修复方案，疑似本地模型对 Function Calling 的指令遵循能力不足或超时处理不当。

*   **🟠 中等 - Telegram 消息重复发送**
    *   **Issue**: [#2235](https://github.com/HKUDS/nanobot/issues/2235) | **PR**: [#2236](https://github.com/HKUDS/nanobot/pull/2236)
    *   **描述**：由于 "faux streaming"（模拟流式输出）机制导致 Telegram 显示两条消息。
    *   **状态**：已有修复 PR，建议合并。

*   **🟠 中等 - Cron 任务被错误拦截**
    *   **Issue**: [#2369](https://github.com/HKUDS/nanobot/issues/2369)
    *   **描述**：用户设定的定时提醒被 `evaluator.py` 误判为 "not actionable" 而被静默丢弃。

*   **🟡 轻微 - 切换工作空间后旧 Cron 仍运行**
    *   **Issue**: [#2358](https://github.com/HKUDS/nanobot/issues/2358)
    *   **描述**：Workspace 隔离不彻底，导致旧任务的 Cron 残留。

### 6. 功能请求与路线图信号
*   **微信个人号通道**：随着微信 8.0.70 更新，社区迫切需要官方或半官方的微信个人号接入方案 ([Issue #2353](https://github.com/HKUDS/nanobot/issues/2353))。PR #2348 已提交相关代码，可能很快进入测试阶段。
*   **Subagent 独立配置**：PR #2368 提出允许子 Agent 使用与主 Agent 不同的模型后端（如主 Agent 用 GPT-4，子 Agent 用本地小模型），这是迈向复杂 Agent 架构的重要一步。
*   **内网白名单**：Issue #2370 请求支持配置内网地址白名单，以便 Agent 安全访问本地 Gitea 等服务。

### 7. 用户反馈摘要
*   **配置门槛高**：多位用户反馈 LiteLLM 配置复杂，特别是在对接 Gemini、Ollama 和自定义 Provider 时，容易出现 401 或上下文长度错误 ([Issue #2329](https://github.com/HKUDS/nanobot/issues/2329), #2343)。
*   **国产模型兼容性**：用户在使用 MiniMax 等国产模型 API 时遇到 Tool Call 格式不兼容的问题 ([Issue #2373](https://github.com/HKUDS/nanobot/issues/2373))，提示项目在多模型适配层仍需加强。
*   **通道稳定性**：飞书 文件收发权限问题依然困扰用户 ([Issue #2352](https://github.com/HKUDS/nanobot/issues/2352))，Bot 尝试通过浏览器下载而非 API 直接获取文件。

### 8. 待处理积压
*   **Matrix 通道长期不可用** ([Issue #1300](https://github.com/HKUDS/nanobot/issues/1300))：该问题自 2 月底报告以来仍未解决，虽然今日有 PR #2361 试图修复命令处理，但核心连接问题可能仍需关注。
*   **Prompt Cache 失效** ([Issue #981](https://github.com/HKUDS/nanobot/issues/981))：系统提示词中包含动态时间戳导致无法命中 Prompt 缓存，增加不必要的 Token 消耗。该问题已关闭但似乎未完全解决，需确认是否已合并修复。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

以下是 Zeroclaw 项目 2026-03-23 的动态日报。

---

# 📊 Zeroclaw 项目日报 (2026-03-23)

### 1. 今日速览
Zeroclaw 今日迎来 **v0.5.9** 正式版发布，项目活跃度极高，单日 PR 合并量达到 **27 个**，Issue 交互数达 **43 条**。开发重点集中在**多模态能力补全**（语音转文字、浏览器自动化、Lark 图像支持）与**架构修复**（声明式定时任务、工具注册机制、内存衰减评分恢复）。社区方面，用户对“主分支迁移导致功能丢失”的反馈依然强烈，同时新提出的“标准化 Agent 指令格式”引发了关于项目未来开发体验（DX）的深度讨论。整体来看，项目正从功能快速迭代转向架构稳定性与多渠道集成的深水区。

---

### 2. 版本发布
#### 🚀 [v0.5.9](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.5.9)
**发布摘要**：此版本是一个功能密集型更新，主要整合了过去一周 Beta 版本中的多项新特性。
*   **核心更新**：
    *   **浏览器自动化**：新增 Browser Automation Skill 及 VNC 配置脚本，支持 AI 操作浏览器。
    *   **多渠道增强**：
        *   **飞书/Lark**：支持图像与文件消息处理。
        *   **语音支持**：Slack 和 Discord 频道现支持语音消息转文字（基于 Groq/Whisper）。
    *   **搜索与任务**：
        *   新增 **SearXNG** 自建搜索引擎支持。
        *   支持 **声明式 Cron Job** 配置（可在 `config.toml` 中定义）。
    *   **Gateway**：增加命名会话支持重连与验证。
    *   **默认开启**：`web_fetch`、`web_search` 等工具默认启用，开箱即连网。

---

### 3. 项目进展
今日共有 **27 个 PR 被合并**，主要由核心贡献者 @theonlyhennygod 推动，显著推进了以下领域：

*   **工具链增强**：
    *   [PR #4276](https://github.com/zeroclaw-labs/zeroclaw/pull/4276)：**重大变更** - Skills 中的工具不再仅作为系统提示 XML，而是注册为可调用的 Tool Specs，提升了 LLM 调用的可靠性。
    *   [PR #4270](https://github.com/zeroclaw-labs/zeroclaw/pull/4270)：默认开启互联网访问工具，降低了新用户配置门槛。
*   **架构修复与补全**：
    *   [PR #4274](https://github.com/zeroclaw-labs/zeroclaw/pull/4274)：恢复了在分支迁移中丢失的 **Memory Time-decay Scoring（记忆时间衰减评分）** 机制。
    *   [PR #4283](https://github.com/zeroclaw-labs/zeroclaw/pull/4283)：统一了发布流水线，修复了 Homebrew 自动发布失败的问题。
*   **稳定性修复**：
    *   [PR #4277](https://github.com/zeroclaw-labs/zeroclaw/pull/4277)：修复了 Thinking Level 前缀在多轮对话中泄露的问题。
    *   [PR #4271](https://github.com/zeroclaw-labs/zeroclaw/pull/4271)：修复了链接标题提取时的 UTF-8 字节偏移 Bug。

---

### 4. 社区热点
今日讨论最活跃的话题集中在**遗留代码丢失**与**开发者体验**：

1.  **[Issue #4093](https://github.com/zeroclaw-labs/zeroclaw/issues/4093)**: **Provider streaming 功能丢失**
    *   **热度**：👍 1 | 评论 4
    *   **分析**：用户指出 PR #2868 等实现的流式传输代码合并至 `dev` 分支后，因分支删除而彻底丢失，从未进入 `master`。这再次引发了社区对“分支迁移策略”的担忧。
2.  **[Issue #3540](https://github.com/zeroclaw-labs/zeroclaw/issues/3540)**: **飞书 频道启动失败**
    *   **热度**：评论 9
    *   **分析**：S1 级阻塞 Bug，编译了 `channel-lark` 特性后仍无法启动，显示社区对企业级集成功能的迫切需求与当前稳定性的差距。
3.  **[Issue/PR #4290](https://github.com/zeroclaw-labs/zeroclaw/pull/4290)**: **采用 AGENTS.md 作为标准指令格式**
    *   **热度**：新提案
    *   **分析**：建议用通用的 `AGENTS.md` 替代 `CLAUDE.md`，以便 GitHub Copilot、Cursor 等其他 AI 工具也能理解项目架构。这反映了该项目作为 AI 基础设施，其自身开发流程也在积极适配 AI 辅助。

---

### 5. Bug 与稳定性
今日报告了多个严重（S1/S2）级别的 Bug，部分已有修复方案：

*   **🔥 S1 - 工作流阻塞**：
    *   **[Issue #4253](https://github.com/zeroclaw-labs/zeroclaw/issues/4253)**: OpenAI-compatible 模型刷新时在异步上下文中发生 Panic。（状态：Open，待修复）
    *   **[Issue #4139](https://github.com/zeroclaw-labs/zeroclaw/issues/4139)**: UTF-8 多字节字符切片导致 Panic。（状态：Closed，可能已由其他 PR 间接修复或为特定环境问题）
*   **⚠️ S2 - 功能降级**：
    *   **[Issue #4209](https://github.com/zeroclaw-labs/zeroclaw/issues/4209)**: Cron 调度器 Shell 兼容性问题（`sh` vs `dash`）。（状态：Closed，报告者提供了明确的修复思路）
    *   **[Issue #2960](https://github.com/zeroclaw-labs/zeroclaw/issues/2960)**: 浏览器配对状态无法持久化，每次需重新扫码。（状态：Open，影响 Web Dashboard 体验）
    *   **[Issue #2487](https://github.com/zeroclaw-labs/zeroclaw/issues/2487)**: 函数 Schema 校验错误导致所有 Provider 失效。（状态：Open）

---

### 6. 功能请求与路线图信号
*   **多模态本地化优先**：
    *   [Issue #4116](https://github.com/zeroclaw-labs/zeroclaw/issues/4116) & [Issue #4119](https://github.com/zeroclaw-labs/zeroclaw/issues/4119) 提出将图像路由到专用 Vision Provider 及本地 GPU 加速 TTS。**现状**：v0.5.8 已合并部分路由功能，本地 Piper TTS 也已加入，表明项目正快速响应“Local-first”需求。
*   **数据架构演进**：
    *   [Issue #4028](https://github.com/zeroclaw-labs/zeroclaw/issues/4028) 提出基于 pgvector 和图数据库的“数据库优先”记忆架构。虽然当前重心在 SQLite 优化，但这可能是中长期记忆系统的演进方向。

---

### 7. 用户反馈摘要
*   **痛点**：
    *   **“丢失的分支”后遗症**：多名用户反馈旧 `main` 分支中的 Cost Tracking、特定 Tools 等在 `master` 分支中不见了，感到困惑和不满。
    *   **文档与配置门槛**：虽然 v0.5.9 默认开启了联网工具，但 LMStudio 等自定义 Provider 的配置依然被吐槽“混乱”。
*   **认可点**：
    *   对 **Browser Automation** 和 **Voice Transcription** 的快速落地表示欢迎，认为这显著扩展了 Agent 的应用场景。
    *   对修复 Thinking 泄露和 UTF-8 Bug 的响应速度表示认可。

---

### 8. 待处理积压
*   **[Issue #848](https://github.com/zeroclaw-labs/zeroclaw/issues/848)**: **Web Search 超时问题**。创建于 2 月，评论 7 条，状态仍为 Open。这是一个 S2 级问题，影响基础联网功能，建议优先排查。
*   **[Issue #3679](https://github.com/zeroclaw-labs/zeroclaw/issues/3679)**: **成本追踪功能缺失**。被视为已发布功能的回归，目前虽已关闭 Issue #4040 (Skill Tools)，但 Cost Tracking 本体的恢复进度仍需维护者关注。

---
*分析师建议：Zeroclaw 正处于功能爆发期，建议在下个版本周期暂停新功能添加，集中精力解决分支迁移遗留的代码丢失问题（如 Streaming、Cost Tracking），并修复 S1 级 Panic Bug 以稳固内核。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-23)

## 1. 今日速览
PicoClaw 项目今日保持**极高的开发活跃度**，共处理了 **27 条 Issue** 和 **68 条 PR**，其中 PR 合并/关闭率极高，显示出维护团队强大的代码吞吐能力。项目发布了 **v0.2.3-nightly.20260323** 版本，持续集成流水线运行顺畅。核心重点依然集中在 **Agent 架构重构**（事件驱动与 Hooks 系统）以及 **Web UI 与配置管理** 的完善上。此外，社区对新模型支持和多渠道接入的需求日益增长。

## 2. 版本发布
- **Nightly Build**: `v0.2.3-nightly.20260323.3500080a`
  - **类型**: 自动化构建
  - **说明**: 这是一个实验性版本，可能存在不稳定性，仅供测试尝鲜。
  - **变更范围**: 包含截至 `main` 分支最新提交的所有代码变更，涵盖了今日合并的 Web UI 重构、微信渠道支持及 Agent 修复。
  - **链接**: [Releases](https://github.com/sipeed/picoclaw/releases)

## 3. 项目进展
今日共有 **45 个 PR 被合并或关闭**，项目在以下几个关键领域取得了实质性进展：

- **文档与国际化**:
  - [PR #1875](https://github.com/sipeed/picoclaw/pull/1875): 对 README 进行了全面重构，增加了快速开始指南、国际化支持（i18n）及微信渠道文档，大幅降低了新用户的上手门槛。
- **渠道支持**:
  - [PR #1904](https://github.com/sipeed/picoclaw/pull/1904): **新增原生微信机器人支持**，补全了 QR 登录与媒体处理功能，并提供了完整的用户配置流程。
- **核心修复**:
  - [PR #1880](https://github.com/sipeed/picoclaw/pull/1880): 修复了 `forceCompression` 导致会话历史记录损坏的严重 Bug，现在 Agent 能正确区分持久化消息与系统提示词。
- **Web 管理界面优化**:
  - [PR #1358](https://github.com/sipeed/picoclaw/pull/1358): 新增了 Agent 技能和工具管理 UI。
  - [PR #1507](https://github.com/sipeed/picoclaw/pull/1507): 引入全局 WebSocket 管理，优化了 Pico Chat 的连接稳定性。
- **配置与执行安全**:
  - [PR #1660](https://github.com/sipeed/picoclaw/pull/1660): 修复了文件系统工具在符号链接路径下的白名单校验失败问题。
  - [PR #1647](https://github.com/sipeed/picoclaw/pull/1647): 增加了 Cron 任务执行的配置项控制，提升了安全性。

## 4. 社区热点
- **[Issue #1648 [TTS/ASR 架构设计]](https://github.com/sipeed/picoclaw/Issue/1648)**: (评论 19 条)
  - **热点分析**: 社区对语音交互（TTS/ASR）的呼声极高。该 Issue 详细设计了音频架构，且已有相关 PR (#1642) 待集成。讨论焦点在于如何将音频能力标准化地融入 Gateway。
- **[Issue #1316 [Agent 重构: 事件驱动]](https://github.com/sipeed/picoclaw/Issue/1316)**: (评论 11 条)
  - **热点分析**: 这是 "Meta: Agent refactor" 路线图的一部分。用户迫切希望打破当前 Agent 循环的黑盒状态，实现可观测性、可中断性和 Steering 能力。这是当前架构演进的核心痛点。
- **[Issue #1856 [REST API 询问]](https://github.com/sipeed/picoclaw/Issue/1856)**: (评论 7 条)
  - **热点分析**: 大量用户希望将 PicoClaw 作为后端服务集成到其他应用中，频繁询问 REST API 的可用性。表明 PicoClaw 正在被视作 "Headless AI" 基础设施使用。

## 5. Bug 与稳定性
今日报告并处理了多个稳定性问题，部分已修复：

- **🔴 严重** - [Issue #1708](https://github.com/sipeed/picoclaw/Issue/1708): Docker Gateway 模式下 REST API 端点 (/chat, /a2a) 不可用，仅健康检查通过。*（已确认存在，影响 v0.2.3 版本 Docker 部署）*
- **🟠 中等** - [Issue #1879](https://github.com/sipeed/picoclaw/Issue/1879) -> **[PR #1880](https://github.com/sipeed/picoclaw/pull/1880)**: Agent 在紧急上下文压缩时会错误覆盖历史记录。*（已修复并合并）*
- **🟠 中等** - [Issue #1790](https://github.com/sipeed/picoclaw/Issue/1790): OpenRouter 提供商配置无效，报错 400。*（疑似模型 ID 映射问题，待解决）*
- **🟡 低** - [Issue #1881](https://github.com/sipeed/picoclaw/Issue/1881): Web Chat 不保留用户输入的换行符。*（已关闭/处理）*

## 6. 功能请求与路线图信号
- **语音支持**: 结合 Issue #1648 和 #1890（支持多模态音频转录），**下一版本极大概率会引入 TTS/ASR 的原生支持**，不再局限于 Groq 的 Whisper 接口。
- **模型容错**: [Issue #1908](https://github.com/sipeed/picoclaw/Issue/1908) 提出 "模型级联故障转移"（Model Cascade Failover），这与当前的 Provider 架构改进方向一致，预计将被纳入路线图以增强高可用性。
- **能力发现**: [Issue #1474](https://github.com/sipeed/picoclaw/Issue/1474) 提议增加节点能力自描述端点，这对多节点编排至关重要，属于 Agent 重构的配套设施。

## 7. 用户反馈摘要
- **配置复杂性**: 用户在使用 OpenAI-compatible 本地网关时，对 `model` 字段的隐式解析规则（如 `vendor/model_id`）感到困惑（[Issue #1883](https://github.com/sipeed/picoclaw/Issue/1883)），建议引入显式的 `provider` 字段。
- **Web UI 体验**: 用户对 Web Chat 的渲染能力提出了更高要求，希望支持混合 Markdown 和 HTML 渲染（[Issue #1897](https://github.com/sipeed/picoclaw/Issue/1897)），而不仅仅是纯文本。
- **日志噪音**: 部分用户反馈默认日志级别过于详细，希望能通过配置文件更细粒度地控制日志输出（[Issue #1848](https://github.com/sipeed/picoclaw/Issue/1848)）。

## 8. 待处理积压
- **[Issue #1067](https://github.com/sipeed/picoclaw/Issue/1067) [Auth 集成]**: 提出于 3 月初，建议集成 Authula 进行鉴权。目前无响应。随着 PicoClaw 暴露更多 REST API，**安全性将成为隐患**，建议维护者优先评估。
- **[Issue #1474](https://github.com/sipeed/picoclaw/Issue/1474) [能力枚举]**: 涉及外部编排层的集成，虽然标记为 Low Priority，但对于生态建设非常关键。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是为您生成的 2026-03-23 NanoClaw 项目动态日报：

---

# 📊 NanoClaw 项目日报 (2026-03-23)

### 1. 今日速览
NanoClaw 项目今日保持**极高活跃度**，社区开发热情持续高涨。过去 24 小时内 PR 更新量达到 **44 条**，其中待合并 PR 积压较多（30 条），显示出外部贡献者正在大量提交新功能与集成。核心开发方面，今日成功合并了包括**信任自治框架**、**AstrBot 集成**及**调度任务预钩子**等关键功能，标志着项目在多渠道接入和自动化控制能力上迈出了重要一步。整体来看，项目正处于功能快速扩张期，但需关注技能分支的合并冲突问题。

### 2. 版本发布
- **无新版本发布**。

### 3. 项目进展
今日共有 **14 个 PR 被合并或关闭**，显著推进了以下核心能力：

*   **信任与自治框架:**
    *   合并了 [PR #1308](https://github.com/qwibitai/nanoclaw/pull/1308)，引入了基于 SQLite 的审批追踪器和“草稿路由”层。这允许事件在发送到消息总线前由用户审批，显著提升了多智能体系统的安全性。
*   **渠道集成:**
    *   合并了 [PR #1339](https://github.com/qwibitai/nanoclaw/pull/1339)，新增 **AstrBot HTTP 渠道集成**，允许轻量级消息接入。
    *   合并了 [PR #1298](https://github.com/qwibitai/nanoclaw/pull/1298)，添加了 Web Channel (WebClaw)、仪表盘及多租户基础设施支持。
*   **调度与运维增强:**
    *   合并了 [PR #1349](https://github.com/qwibitai/nanoclaw/pull/1349)，为计划任务增加了 `pre_hook` 机制，支持在生成容器前检查磁盘、网络等前置条件。
    *   合并了 [PR #1335](https://github.com/qwibitai/nanoclaw/pull/1335)，修复了计划任务和群组代理导致的消息重复发送 Bug。
*   **架构优化:**
    *   关闭了 [Issue #1334](https://github.com/qwibitai/nanoclaw/issues/1334)，完成了 Agent 间点对点通信 的 Phase 2 阶段规划。

### 4. 社区热点
今日社区关注度最高、讨论活跃的议题集中在**扩展性**与**新后端支持**：

*   **[PR #1358] feat: foundation — compact skill + domain groups:** 尝试引入 `/compact` 命令及三个领域组（投资、运维、技术研发），虽涉及大规模重构已被关闭，但引发了关于如何组织多领域 Agent 架构的讨论。
    *   链接: [qwibitai/nanoclaw PR #1358](https://github.com/qwibitai/nanoclaw/pull/1358)
*   **[Issue #1356] Agent memory system redesign:** 核心维护者 @Ordinath 提出重新设计内存系统。当前的 Markdown 索引模式在规模扩大（~54文件）后遇到瓶颈，社区正在探讨更可扩展的存储方案。
    *   链接: [qwibitai/nanoclaw Issue #1356](https://github.com/qwibitai/nanoclaw/issues/1356)
*   **[Issue #1350] Add GitHub Copilot SDK:** 用户强烈需求除 Claude 之外的 AI 后端，提议原生集成 GitHub Copilot SDK (GPT-4.1)。
    *   链接: [qwibitai/nanoclaw Issue #1350](https://github.com/qwibitai/nanoclaw/issues/1350)

### 5. Bug 与稳定性
*   **🔴 严重阻塞:**
    *   **[Issue #1345] Skill 分支合并冲突:** 自动化工作流报告 `skill/apple-container` 和 `skill/compact` 分支无法与主分支 `deee4b2` 合并，可能导致部分技能功能滞后或测试失败。
        *   链接: [qwibitai/nanoclaw Issue #1345](https://github.com/qwibitai/nanoclaw/issues/1345)
*   **🟠 部署/环境问题:**
    *   **[Issue #1357] Oracle Cloud iptables 阻断:** 用户报告在 Oracle Cloud Linux VM 上，默认的 iptables 规则会阻止容器 Agent 访问凭证代理端口 (3001)，导致 Agent 静默挂起。目前已有文档修复 PR。
        *   链接: [qwibitai/nanoclaw Issue #1357](https://github.com/qwibitai/nanoclaw/issues/1357)
*   **🟢 已修复:**
    *   计划任务重复消息问题已通过 [PR #1335](https://github.com/qwibitai/nanoclaw/pull/1335) 修复。

### 6. 功能请求与路线图信号
根据今日的 Issues 和 PRs，项目路线图呈现出明显的**多模型**和**多平台**趋势：

*   **多 AI 后端支持:** [Issue #1350](https://github.com/qwibitai/nanoclaw/issues/1350) 与 [PR #1351](https://github.com/qwibitai/nanoclaw/pull/1351) (Copilot SDK) 显示项目正致力于打破对 Anthropic Claude 的单一依赖。PR #1351 已经实现了通过环境变量切换 `copilot` 模式，**极有可能**在下个版本中纳入。
*   **CJK（中日韩）语言支持优化:** [PR #1340](https://github.com/qwibitai/nanoclaw/pull/1340) 修复了触发器对 CJK 字符（如 @丛雨）的匹配问题，表明国际化支持正在加强。
*   **外部系统集成:** [PR #1355](https://github.com/qwibitai/nanoclaw/pull/1355) 提议接入 AstrBot，结合已合并的 Matrix 协议支持，显示项目正积极拥抱去中心化通信生态。

### 7. 用户反馈摘要
*   **痛点 - 云环境部署难:** 用户在 Oracle Cloud 等受限网络环境中部署遇到阻碍，表现为 Agent 无明显报错但无法工作（[Issue #1357](https://github.com/qwibitai/nanoclaw/issues/1357)），反映出对更友好的网络诊断工具或文档的渴求。
*   **痛点 - 调度任务缺乏灵活性:** 用户反馈当前的计划任务只要时间到了就会启动，不管系统状态如何（如磁盘满、API 挂掉），容易造成资源浪费（[Issue #1348](https://github.com/qwibitai/nanoclaw/issues/1348)）。此问题已通过合并 Pre-hook PR 得到解决。
*   **学术/合规争议:** 有用户指出项目可能遗漏了对北京某技术中心关于 Agent 架构研究的引用（[Issue #1347](https://github.com/qwibitai/nanoclaw/issues/1347)），需维护者评估其学术或法律相关性。

### 8. 待处理积压
*   **🔴 [PR #1098] 时间戳修复:** 该 PR 试图在消息中增加“星期几”信息以辅助 Agent 推理，已开启 8 天且通过测试，但仍需 Code Review。建议维护者优先处理。
    *   链接: [qwibitai/nanoclaw PR #1098](https://github.com/qwibitai/nanoclaw/pull/1098)
*   **🔴 [PR #682] Slack 渠道优化:** 针对树莓派等 ARM64 环境的 Slack DM 修复，状态标记为 "Blocked"，需关注阻塞原因。
    *   链接: [qwibitai/nanoclaw PR #682](https://github.com/qwibitai/nanoclaw/pull/682)
*   **🔴 [PR #1111] API 用量追踪:** 这是一个功能完善度较高的 PR（增加了数据库表和统计），但也处于 Review 阶段较久。
    *   链接: [qwibitai/nanoclaw PR #1111](https://github.com/qwibitai/nanoclaw/pull/1111)

---
*分析结论：NanoClaw 正处于从单一 Claude 客户端向多模型、多渠道编排平台转型的关键时期。大量 PR 积压表明社区贡献活跃，但核心团队需加快 Review 节奏以避免功能积压。建议优先解决 Skill 分支的合并冲突，确保主干稳定性。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

以下是 NullClaw 项目 2026-03-23 的动态日报：

---

# NullClaw 项目动态日报 (2026-03-23)

## 1. 今日速览
NullClaw 项目今日保持高活跃度，社区提交了 **13 个 PR**（其中 11 个待合并）和 **7 个新 Issue**。开发重心明显向 **系统稳定性与兼容性** 倾斜，重点解决了 Telegram 通道重复消息、Bifrost 网关兼容性以及 Docker 环境下的权限问题。同时，多模态支持（A2A）和 OTEL 观测能力的增强表明项目正在向企业级生产可用性迈进。今日无新版本发布，但有 2 个 PR 已合并，为下游构建做好了准备。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 **2 个 PR 合并**，主要涉及底层兼容性修复，为核心功能铺路：
*   **[feat(providers): support Ollama cloud API key](https://github.com/nullclaw/nullclaw/pull/615)**: 合并了针对 Ollama 云端 API 的 Bearer Auth 支持，扩展了 Provider 生态。
*   **[fix(fs): avoid statx-dependent makePath for Linux < 4.11](https://github.com/nullclaw/nullclaw/pull/589)**: 修复了旧版 Linux 内核上的文件系统兼容性问题，提升了部署通用性。

## 4. 社区热点
今日讨论焦点集中在 **配置灵活性** 与 **模型支持**：
*   **[#647 Qwen Code Cli support](https://github.com/nullclaw/nullclaw/issues/647)**: 社区呼吁集成 Qwen Code CLI，主要动机是其慷慨的免费 Token 额度，反映了用户对降低使用成本的强烈需求。
*   **[#690 OTEL Enhancements](https://github.com/nullclaw/nullclaw/issues/690)**: 针对可观测性的深度讨论，要求增强链路追踪能力，显示出用户将 NullClaw 用于生产环境的严肃意图。

## 5. Bug 与稳定性
今日报告了数个影响特定场景的关键 Bug，部分已有对应修复方案：
*   **[严重] Telegram 通道重复/错误展示回答 ([#680](https://github.com/nullclaw/nullclaw/issues/680))**
    *   现象：Agent 回复在 Telegram 中出现重复或错乱。
    *   进展：已有修复 PR [#694](https://github.com/nullclaw/nullclaw/pull/694) 提交，待合并。
*   **[中等] Docker 环境下 Cron 任务权限拒绝 ([#691](https://github.com/nullclaw/nullclaw/issues/691))**
    *   现象：`cron.zig` 忽略 `NULLCLAW_HOME` 导致容器内 `AccessDenied`。
    *   进展：已有修复 PR [#692](https://github.com/nullclaw/nullclaw/pull/692) 提交，待合并。
*   **[中等] Bifrost 网关兼容性问题 ([#682](https://github.com/nullclaw/nullclaw/issues/682))**
    *   现象：使用 HTTP 及非标准路径时添加 Provider 失败。
    *   进展：包含在修复 PR [#694](https://github.com/nullclaw/nullclaw/pull/694) 中。
*   **[中等] 文件读写竞态异常 ([#684](https://github.com/nullclaw/nullclaw/issues/684))**
    *   现象：同时读写不存在的文件时行为异常。
    *   进展：疑似工具缓存问题，包含在修复 PR [#694](https://github.com/nullclaw/nullclaw/pull/694) 中。

## 6. 功能请求与路线图信号
*   **多模态能力增强**: PR [#686](https://github.com/nullclaw/nullclaw/pull/686) 提出了 A2A 协议的多模态支持（图像处理），这标志着 NullClaw 正在突破纯文本交互的限制。
*   **模型备选配置**: 针对用户关于 Fallback 配置的困惑 ([#683](https://github.com/nullclaw/nullclaw/issues/683))，PR [#695](https://github.com/nullclaw/nullclaw/pull/695) 补充了相关文档，预计将显著提升配置的易用性。
*   **自适应智能管道**: PR [#527](https://github.com/nullclaw/nullclaw/pull/527) 提出了一种无需额外 API 调用的学习机制，虽尚在早期，但代表了架构演进的重要方向。

## 7. 用户反馈摘要
*   **部署痛点**: Docker 用户对 `NULLCLAW_HOME` 的环境变量失效感到困扰 ([#691](https://github.com/nullclaw/nullclaw/issues/691))，这影响了容器化部署的体验。
*   **配置复杂度**: 用户难以直观地配置模型 Fallback ([#683](https://github.com/nullclaw/nullclaw/issues/683))，表明默认配置示例需要优化。
*   **成本敏感**: 对 Qwen Code CLI 的支持请求 ([#647](https://github.com/nullclaw/nullclaw/issues/647)) 暴露了用户对高性价比模型 Provider 的迫切需求。

## 8. 待处理积压
*   **PR [#527 Adaptive Intelligence Pipeline](https://github.com/nullclaw/nullclaw/pull/527)**: 这是一个关于自适应学习管道的大型 PR，自 3 月 14 日开启至今未合并，涉及架构变动，建议维护者重点关注其审查进度。
*   **PR [#681 Custom-URL Model Refs](https://github.com/nullclaw/nullclaw/pull/681)**: 解决自定义 URL 模型引用的关键 PR，目前处于 Open 状态，需尽快合并以解决自定义 Provider 路由问题。

---
*数据来源：GitHub NullClaw Repo (2026-03-23 24h Metrics)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是基于 2026-03-23 GitHub 数据生成的 IronClaw 项目动态日报。

---

# 📊 IronClaw 项目日报 (2026-03-23)

## 1. 今日速览
IronClaw 项目今日维持**极高的开发活跃度**，处于快速迭代阶段。过去 24 小时内共有 **50 条 PR 更新**（其中 15 条已合并/关闭）和 **16 条 Issue 更新**（9 条已关闭），显示出维护团队在高效处理反馈的同时持续注入新代码。项目核心正经历架构重构（v2 engine）与多云/多模型支持的深度优化，CI/CD 流水线（Staging CI）运行频繁，自动化代码审查机制（ironclaw-ci bot）已成为质量保障的关键一环。整体来看，项目健康度良好，但需关注 Windows 平台兼容性及 OAuth 集成等边缘场景的 Bug 修复。

## 2. 版本发布
**本日无新版本发布**。当前活跃开发主要集中在主分支和 Staging 分支的自动化提升流程中。

## 3. 项目进展
今日共有 **15 条 PR 被合并或关闭**，显著推进了以下领域：

*   **模型兼容性修复**：合并了 [PR #1242](https://github.com/nearai/ironclaw/pull/1242)，修复了 Mistral 模型因 Tool Call ID 格式不合规导致的 400 错误，增强了对非 Anthropic 系模型的兼容性。
*   **性能优化**：[PR #926](https://github.com/nearai/ironclaw/pull/926) 移除了工具执行流程中不必要的参数深拷贝，回应了 Staging CI 发现的性能警告，提升了运行时效率。
*   **架构重构**：核心贡献者 @ilblackdragon 发起了 [PR #1557](https://github.com/nearai/ironclaw/pull/1557)，引入全新的 `ironclaw_engine` v2 架构，旨在统一执行模型，这是项目迈向下一阶段的重要里程碑。
*   **Schema 验证增强**：[PR #1397](https://github.com/nearai/ironclaw/pull/1397) 彻底重写了参数强制转换与验证逻辑，解决了 WASM 工具在复杂 JSON Schema 场景下的参数解析失败问题。
*   **CI/CD 稳健性**：[PR #1206](https://github.com/nearai/ironclaw/pull/1206) 修复了 CI 流程中的安全检查绕过风险，加固了发布流程。

## 4. 社区热点
*   **[Issue #902](https://github.com/nearai/ironclaw/issues/902) - Google OAuth 被拦截**
    *   **热度**：4 条评论，涉及核心功能阻塞。
    *   **分析**：用户在本地使用 Google Suite WASM 工具时遭遇 OAuth 拦截，导致敏感信息无法访问。这是目前阻碍集成的关键问题，用户强烈请求增加备用提供商支持。
*   **[Issue #1575](https://github.com/nearai/ironclaw/issues/1575) - PR/Issue 分类报告**
    *   **热度**：官方自动发布的统计报告，透明化展示了两天内合并 30+ PRs、关闭 75+ Issues 的高吞吐量，反映了项目管理的规范性。
*   **[Issue #1537](https://github.com/nearai/ironclaw/issues/1537) - TEE 环境下凭据注入失败**
    *   **热度**：2 条评论，影响 NEAR AI 托管环境的安全性功能。
    *   **分析**：WASM 凭据在 TEE 中存储成功但运行时未注入，这是一个隐蔽性较高的 Bug，直接影响了托管服务的可用性。

## 5. Bug 与稳定性
今日报告及处理的 Bug 按严重程度排序如下：

*   **🚨 高风险/阻塞性**
    *   **[Issue #1577](https://github.com/nearai/ironclaw/issues/1577) - Ollama 在 Windows 上 502 错误**：v0.21.0 版本在 Windows 环境下对所有 Ollama 请求返回 502 Bad Gateway，导致本地模型功能完全不可用。**状态：未修复。**
    *   **[Issue #902](https://github.com/nearai/ironclaw/issues/902) - Google OAuth 被拦截**：导致 Google Suite 工具集彻底失效。**状态：Open。**

*   **⚠️ 中等风险**
    *   **[Issue #1537](https://github.com/nearai/ironclaw/issues/1537) - TEE 凭据注入失败**：影响托管环境下的安全工具链。**状态：Open。**
    *   **[Issue #1510](https://github.com/nearai/ironclaw/issues/1510) - Gemini 函数调用缺失签名**：Gemini 3.1 后端调用工具时报错 400，阻碍了 Gemini 模型的工具调用能力。**状态：Open。**
    *   **[Issue #826](https://github.com/nearai/ironclaw/issues/826) - 消息向量无限增长**：在循环工具调用中可能导致内存暴涨。**状态：已由 Staging CI 识别并关闭（可能已在重构中涵盖）。**

## 6. 功能请求与路线图信号
*   **[Issue #1570](https://github.com/nearai/ironclaw/issues/1570) - 增加 CLAWHUB_ENABLED 开关**
    *   **诉求**：用户希望在企业私有化部署时能完全禁用公共技能仓库（ClawHub）及相关网络请求。
    *   **判断**：这是一个典型的企业级部署需求，预计很快会被接纳并实现。
*   **[PR #1557](https://github.com/nearai/ironclaw/pull/1557) - v2 执行引擎**
    *   **信号**：项目正在进行底层架构升级，未来版本将重点在于统一执行上下文，提升扩展性。
*   **[PR #1446](https://github.com/nearai/ironclaw/pull/1446) - 支持阿里云百炼**
    *   **信号**：社区正在积极扩展 LLM 后端支持，尤其是针对非西方云服务商的兼容性正在快速补齐。

## 7. 用户反馈摘要
*   **痛点**：
    *   **环境兼容性**：部分用户（特别是 Windows 用户）在升级到 v0.21.0 后遇到严重的连接问题（Issue #1577）。
    *   **OAuth 稳定性**：集成第三方账号（Google）时的体验仍不够顺畅，频遭安全拦截（Issue #902）。
    *   **Linux 旧内核支持**：安装脚本对旧版 glibc 的 Linux 系统缺乏兼容（Issue #1008 已关闭，表明可能已提供方案或不再支持旧版）。
*   **满意点**：
    *   用户对项目的高迭代速度表示认可（Issue #1575 数据显示问题关闭速度极快）。
    *   自动化 CI 审查机制被提及多次，用户认为这有助于提升代码质量。

## 8. 待处理积压
*   **[PR #1187](https://github.com/nearai/ironclaw/pull/1187) - 自适应学习系统**
    *   这是一个包含技能综合、用户画像等大型功能的 XL 级 PR，由社区贡献者提交。目前处于 Open 状态，需要核心团队投入大量时间进行 Review，建议维护者尽快排期。
*   **[Issue #1554](https://github.com/nearai/ironclaw/issues/1554) - 配置项重构**
    *   涉及熔断、缓存等配置的提升，目前虽为 Open 但属于架构优化的重要一环，可能需要与 v2 Engine（#1557）协同推进。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是基于 2026-03-23 数据生成的 LobsterAI 项目动态日报。

---

# 📊 LobsterAI 项目动态日报 (2026-03-23)

## 1. 今日速览
LobsterAI 今日保持了**极高的开发与社区活跃度**。项目刚发布了 `2026.3.22` 版本，修复了网关路径与微信登录的关键问题，但社区并未停歇，单日涌现 **33 条新 Issue** 与 **28 个 PR**（其中 8 个已合并）。

社区反馈呈现两极分化：一方面，开发者在 PR 层面贡献了大量高质量的**代码重构与性能优化**（如文件拆分、OAuth 登录）；另一方面，Issue 列表中爆发了关于**内存泄漏、UI 卡顿及代码异味**的集中报告，显示出项目正处于“功能快速迭代 vs 代码质量沉淀”的激烈磨合期。整体来看，项目核心功能（IM 接入、Agent 编排）正在稳步推进，但稳定性与资源管理亟需优化。

## 2. 版本发布
### Release `2026.3.22` (2026-03-22)
本次更新主要针对 OpenClaw 网关与微信登录体验进行了修复：
*   **[Fix]** 注入 Node shims 到网关 PATH 并增加环境变量保护，解决特定环境下启动失败问题 ([PR #638](https://github.com/netease-youdao/LobsterAI/pull/638))。
*   **[Fix]** 微信扫码登录后自动重启网关，确保插件及时加载新 Token，并调整了设置引导流程 ([PR #652](https://github.com/netease-youdao/LobsterAI/pull/652))。

## 3. 项目进展
今日共有 **8 个 PR 合并入主分支**，显著提升了多平台兼容性与系统稳定性：
*   **IM 集成增强**：
    *   重构了微信登录流程，改为直接调用 ilink API，提升了扫码登录的稳定性与反馈速度 ([PR #653](https://github.com/netease-youdao/LobsterAI/pull/653))。
    *   优化了微信设置页布局 ([PR #654](https://github.com/netease-youdao/LobsterAI/pull/654))。
*   **稳定性修复**：
    *   修复了 OpenClaw 环境变量回退导致的空字符串错误 ([PR #657](https://github.com/netease-youdao/LobsterAI/pull/657))。
    *   解决了 macOS 应用内更新时系统冻结的问题，改为延迟安装脚本 ([PR #656](https://github.com/netease-youdao/LobsterAI/pull/656))。

## 4. 社区热点
今日社区讨论最密集的问题集中在**功能缺失与安装体验**：
*   **沙箱功能消失** ([#496](https://github.com/netease-youdao/LobsterAI/issues/496))：用户反馈 3.17 版本后沙箱功能不可用，引发了对安全性的担忧。
*   **安装体验与模块化** ([#687](https://github.com/netease-youdao/LobsterAI/issues/687))：用户强烈建议支持 IM 机器人的按需安装（特别是 Deepin 用户遇到 Popo 下载卡死），这反映了安装包臃肿对非核心用户造成的障碍。
*   **版本质量争议** ([#640](https://github.com/netease-youdao/LobsterAI/issues/640))：用户建议从 0.2.4 单开分支进行优化，认为近期版本 Bug 过多，获得了 3 个点赞支持。

## 5. Bug 与稳定性
今日 Bug 报告数量激增，主要集中在**性能与代码健壮性**，甚至有用户进行了源码级审计：

**严重级**：
*   **XSS 安全漏洞** ([#665](https://github.com/netease-youdao/LobsterAI/issues/665))：HTML Artifacts 渲染可能绕过沙箱限制，存在恶意脚本执行风险。
*   **硬编码加密密码** ([#686](https://github.com/netease-youdao/LobsterAI/issues/686))：配置导出密码被硬编码在源码中，导致配置文件存在安全隐患。

**一般级**：
*   **UI 性能卡顿** ([#645](https://github.com/netease-youdao/LobsterAI/issues/645))：聊天记录增多后 UI 严重卡顿。
*   **停止按钮失效** ([#646](https://github.com/netease-youdao/LobsterAI/issues/646))：点击停止后输出仍持续一段时间。
*   **沙箱启动失败** ([#402](https://github.com/netease-youdao/LobsterAI/issues/402))：Debian 环境下沙箱自动退出。

**代码质量问题**：
*   社区用户 `@pylstark` 和 `@vdorchan` 提交了大量关于**内存泄漏**、**竞态条件**及**React 反模式**的详细报告（如 [#667](https://github.com/netease-youdao/LobsterAI/issues/667), [#685](https://github.com/netease-youdao/LobsterAI/issues/685)），指出 Tooltip 事件监听未清理、useEffect 依赖循环等隐患。

## 6. 功能请求与路线图信号
社区与贡献者正在推动项目向**自动化、多模态、可观测性**方向发展：
*   **多 Agent 编排** ([PR #680](https://github.com/netease-youdao/LobsterAI/pull/680))：引入 Agent Router 与子任务实时观测，这是迈向复杂任务自动化的关键一步。
*   **快捷执行 Shell** ([PR #658](https://github.com/netease-youdao/LobsterAI/pull/658))：支持 `!<command>` 直接执行本地命令，强化了 Agent 的本地工具能力。
*   **OAuth 登录简化** ([PR #682](https://github.com/netease-youdao/LobsterAI/pull/682))：MiniMax 一键 OAuth 登录，降低模型配置门槛。
*   **跨平台快捷键** ([PR #679](https://github.com/netease-youdao/LobsterAI/pull/679))：适配 macOS/Linux/Windows 不同键位，提升用户体验。

## 7. 用户反馈摘要
从评论和 Issue 摘要中可以提炼出以下用户画像：
*   **开发者/技术极客**：对代码质量极度敏感，通过阅读源码发现了 Toast 定时器泄漏、Markdown 未使用 memo 等细节问题，希望项目保持高代码质量。
*   **普通使用者**：对安装失败（Deepin/Popo 问题）和运行卡顿非常沮丧，更关心开箱即用和流畅的聊天体验。
*   **核心诉求**：需要更轻量的安装包、更稳定的沙箱环境以及更流畅的长对话体验。

## 8. 待处理积压
以下重要问题尚未得到官方回复或解决，建议维护者优先关注：
*   **[#402] 沙箱无法启动**：影响 Linux (Debian) 用户的 core 功能，已有 2 条评论但未 Close。
*   **[#687] IM 按需安装**：直接影响安装成功率，是提升新手体验的低 hanging fruit。
*   **[#678] ~ [#663] 系列代码健康度问题**：大量由社区详细分析的性能与稳定性问题尚处于 Open 状态，若不及时修复可能会随着功能增加而引发连锁反应。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-03-23)

**分析师点评**：今日项目处于**低交互、高开发**的内部迭代状态。虽然社区 Issue 讨论区静默，但核心开发者在底层架构与集成能力上做出了关键调整，特别是针对 Telegram 稳定性的重构和消息队列逻辑的修复，显示出项目正在解决生产环境中的“隐形杀手”问题。

---

### 1. 今日速览
- **整体活跃度**：**中等偏低**。过去 24 小时无新增用户 Issue，社区互动趋于平静，但核心代码提交保持活跃。
- **核心动态**：项目今日重点在于**提升稳定性与扩展性**。维护者合并了一个关键的消息队列修复 PR，解决多通道消息路由冲突问题。
- **架构调整**：正在审查将 Telegram 客户端从 `node-telegram-bot-api` 迁移至 `grammY` 的重构方案，旨在彻底解决轮询停滞顽疾。
- **生态扩展**：新增了对 Novita AI 作为 LLM Provider 的支持，增强了模型选型的灵活性。

### 2. 版本发布
- **状态**：过去 24 小时无新版本发布。

### 3. 项目进展
今日共有 **1 个 PR 被合并**，显著提升了系统的健壮性：

*   **🎯 [MERGED] fix(api): resolve agent routing at enqueue time** ([PR #247](https://github.com/TinyAGI/tinyagi/pull/247))
    *   **内容**：修复了一个队列序列化 Bug。此前，来自 Telegram/Discord/API 的消息与心跳信号及内部路由并行处理，导致未指定 agent 的消息错误地进入 'default' 链，造成路由混乱。
    *   **意义**：这是一个**关键的逻辑修复**。它确保了多通道接入下的指令分发准确性，防止了任务执行错乱，对于多 Agent 场景是重要修复。

### 4. 社区热点
*   **状态**：今日 Issues 区无新话题，评论区最为活跃的讨论集中在待合并的功能 PR 中。
*   **关注点**：
    *   **Telegr am 稳定性**：[PR #248](https://github.com/TinyAGI/tinyagi/pull/248) 引起了核心开发者的注意，该 PR 提议弃用存在已知轮询问题的旧库，转向更现代的 grammY 框架。
    *   **模型支持**：[PR #243](https://github.com/TinyAGI/tinyagi/pull/243) 扩展了底层 LLM 提供商，表明社区/开发者对低成本或特定性能模型（Novita AI）有接入需求。

### 5. Bug 与稳定性
今日无新增用户提交的 Bug 报告，但开发者在提交中自测并修复了深层逻辑问题：

1.  **[严重] 消息队列路由错乱** ([PR #247](https://github.com/TinyAGI/tinyagi/pull/247))
    *   **现象**：外部消息与内部心跳在入队时未正确隔离，导致部分消息丢失正确上下文。
    *   **状态**：**已修复并合并**。

2.  **[中等] Telegram Bot 长连接静默失效** ([PR #248](https://github.com/TinyAGI/tinyagi/pull/248))
    *   **现象**：使用 `node-telegram-bot-api` 时，Bot 进程虽存活但停止接收消息。
    *   **状态**：**Fix PR 待审查**，方案为迁移至 grammY。

### 6. 功能请求与路线图信号
虽然没有直接的 Issue 请求，但从开放的 PR 可以推断出以下路线图信号：

*   **多模型兼容性**：[PR #243](https://github.com/TinyAGI/tinyagi/pull/243) 显示项目正致力于兼容 OpenAI API 协议的各类第三方提供商。这表明未来的版本将更注重**模型部署的灵活性**，支持用户通过配置 `OPENAI_BASE_URL` 接入私有或差异化模型。
*   **即时通讯集成**：[PR #248](https://github.com/TinyAGI/tinyagi/pull/248) 表明项目对 Telegram 作为主要交互界面的重视，且追求 99.9% 的在线稳定性。

### 7. 用户反馈摘要
*   **数据源**：今日无公开的 Issue 评论数据。
*   **侧面观察**：从 [PR #248](https://github.com/TinyAGI/tinyagi/pull/248) 的描述可以看出，现有用户可能遭遇过“Bot 假死”（进程在但不回消息）的痛点，这是 Telegram Bot 长期运行中的常见问题，维护者正主动响应这一隐性反馈。

### 8. 待处理积压
目前有 **2 个高价值 PR** 处于 Open 状态，需重点关注：

1.  **[OPEN] refactor(telegram): migrate to grammY** ([PR #248](https://github.com/TinyAGI/tinyagi/pull/248))
    *   **提醒**：这是一个涉及底层通信的重构，建议增加充分的测试覆盖，特别是针对 `webhook` 和 `polling` 模式的切换测试，建议尽快安排 Code Review。
2.  **[OPEN] feat: add Novita AI as a built-in LLM provider** ([PR #243](https://github.com/TinyAGI/tinyagi/pull/243))
    *   **提醒**：该功能已挂起 3 天（创建于 20 日），建议确认是否需要补充文档或单元测试后予以合并。

---
**分析师总结**：TinyClaw 目前处于“修内功”阶段，今日的动态集中在解决异步消息处理的可靠性和通信库的现代化上。虽然没有新功能发布，但 #247 的合并意味着核心调度逻辑更加稳固。建议维护者尽快推进 #248 的合并，以彻底解决 IM 连接稳定性问题。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报 (2026-03-23)**

**分析师洞察**：Moltis 今日整体呈现“稳中有进，社区反馈常态化”的态势。虽然无新版本发布，但代码库增加了可见性工具，且社区在使用过程中提出了针对性的集成优化需求。项目处于功能迭代与稳定性维护并重的阶段。

---

### 1. 今日速览
项目今日活跃度平稳，主要集中在文档增强和集成问题的排查上。
- **Issues 状态**：处理了 2 个 Issue，其中 1 个功能请求被关闭（可能已解决或纳入其他计划），新增 1 个集成相关的 Bug 报告。
- **PR 状态**：新增 1 个文档类 PR，旨在提升代码库的可视化程度，目前待合并。
- **发布情况**：无新版本发布，代码库处于稳定期。
- **整体健康度**：🟢 良好。社区反馈具体且有建设性，维护者对 Issue 的响应较为及时。

### 2. 版本发布
*今日无新版本发布。*

### 3. 项目进展
今日虽然没有代码功能性 PR 的合并记录，但在项目基础设施和文档建设上有所推进：
*   **文档增强**: 提交了 PR [#461](https://github.com/moltis-org/moltis/pull/461)，旨在 README 中添加 `gitcgr` 代码图谱徽章。此举将提升项目在代码结构可视化方面的透明度，有助于开发者和用户快速了解项目复杂度与质量。
*   **功能迭代**: 关闭了 Issue [#137](https://github.com/moltis-org/moltis/issues/137)，这标志着关于 "Memory Module base_url 支持" 或 "禁用 RAG" 的讨论已告一段落，项目在模块化配置方向上有了明确的决策（可能是已支持或确认了替代方案）。

### 4. 社区热点
今日社区关注点主要集中在 **功能可配置性** 与 **第三方集成体验** 两个维度：
*   **配置灵活性**: Issue [#137](https://github.com/moltis-org/moltis/issues/137) 虽已关闭，但曾引发关于 "本地 MD 存储与 RAG 机制切换" 的讨论（5 条评论）。这表明部分高级用户希望在使用本地模型（Local LLM）时拥有更底层的内存控制权，而非强制依赖 RAG。
*   **集成体验**: 新增 Issue [#460](https://github.com/moltis-org/moltis/issues/460) 指出 WhatsApp 集成存在混淆感。这反映出随着 Moltis 支持的渠道增多，移动端/IM 端的配置向导或 UI 交互仍需优化，以降低新用户的上手门槛。

### 5. Bug 与稳定性
今日记录了一个关于集成体验的问题，暂未标记为严重崩溃，属于功能混淆类 Bug：
*   **🟡 中等优先级**: [Bug] WhatsApp Integration is confusing ([#460](https://github.com/moltis-org/moltis/issues/460))
    *   **现象**: 用户报告在使用 WhatsApp 集成时感到困惑，具体涉及配置或交互逻辑。
    *   **状态**: 待确认 (Open)。目前尚无 Fix PR，等待维护者复现或提供更多指引。

### 6. 功能请求与路线图信号
*   **本地化与私有化部署**: 从 [#137](https://github.com/moltis-org/moltis/issues/137) 的讨论可以看出，用户对于 **纯本地内存** 的需求强烈。这暗示未来版本可能会进一步解耦 RAG 模块，提供更轻量级的本地 Markdown 记忆方案，以适应无网络或高隐私场景。
*   **集成向导优化**: [#460](https://github.com/moltis-org/moltis/issues/460) 暴露了多渠道接入时的用户体验（UX）短板。优化方向可能包括：重构 WhatsApp 的连接文档，或在 UI 中增加更明显的连接状态指示。

### 7. 用户反馈摘要
通过今日的 Issue 分析，提炼出用户的核心痛点如下：
*   **痛点**: "RAG 好用但太重/依赖网络"。部分用户希望有一个开关，能简单地切换到基于本地文件的纯文本记忆模式，以满足极简部署需求。
*   **痛点**: "主流 IM 接入配置复杂"。用户在使用 WhatsApp 等外部渠道连接 Moltis 时，遇到了逻辑不清晰的问题，期待更直观的“一键式”或“向导式”配置流程。

### 8. 待处理积压
*   **PR 待合并**: [PR #461](https://github.com/moltis-org/moltis/pull/461) (docs: add gitcgr code graph badge) 目前处于 Open 状态，建议维护者审核后尽快合并，以丰富项目主页信息。
*   **Issue 待响应**: [Issue #460](https://github.com/moltis-org/moltis/issues/460) (WhatsApp Integration) 为昨日新开，尚无官方回复。建议尽快介入确认是文档缺失还是逻辑 Bug，防止影响移动端用户接入体验。

---
*数据来源: GitHub (moltis-org/moltis) | 统计时间: 2026-03-23*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

你好！我是 AI 智能体与个人 AI 助手领域的项目分析师。以下是根据 CoPaw (github.com/agentscope-ai/CoPaw) 2026-03-23 的 GitHub 数据生成的项目动态日报。

---

# CoPaw 项目日报 (2026-03-23)

## 1. 今日速览
CoPaw 项目今日保持**高度活跃**状态，社区互动频繁。过去 24 小时内共有 40 条 Issue 更新（32 条新开/活跃）和 28 条 PR 更新，尽管未发布新版本，但代码合并率为 46%（13/28），显示维护者正在积极处理积压请求。今日焦点集中在**多渠道集成**（企业微信、Discord、Telegram）的连接稳定性以及**工具调用**时的异常处理。此外，多名贡献者提交了针对 Shell 执行、安全审计和前端交互的优化 PR，项目正在向更稳定、更安全的方向迭代。

## 2. 版本发布
*   **状态**: 本日无新版本发布。
*   **备注**: 当前活跃的 PR 修复（如 Shell 进程管理、Anthropic API 兼容性）可能会包含在即将到来的补丁版本中。

## 3. 项目进展
今日共有 **13 个 PR 被合并或关闭**，显著提升了系统的健壮性和多渠道支持能力：

*   **多渠道与消息路由增强**:
    *   PR [#1889](https://github.com/agentscope-ai/CoPaw/pull/1889) 和 [#1792](https://github.com/agentscope-ai/CoPaw/pull/1792) 已合并，正式支持**渠道路由**。现在可以将单个渠道（如飞书）的消息根据规则分发到不同的 Agent，解决了多智能体共用一个入口的需求。
    *   PR [#1731](https://github.com/agentscope-ai/CoPaw/pull/1731) 修复了企业微信 (WeCom) 的配置加载问题，恢复了该渠道的可用性。
*   **稳定性与并发修复**:
    *   PR [#2016](https://github.com/agentscope-ai/CoPaw/pull/2016) 修复了 `TokenUsageManager` 在异步上下文中使用同步锁导致的死锁问题，显著提升了高并发下的稳定性。
    *   PR [#1851](https://github.com/agentscope-ai/CoPaw/pull/1851) 为定时任务 增加了重试逻辑，解决了瞬时网络故障导致任务失败的问题。
*   **用户体验优化**:
    *   PR [#1869](https://github.com/agentscope-ai/CoPaw/pull/1869) 引入了 `!!` 前缀中断指令，允许用户在飞书等渠道强制停止正在运行的冗长任务。
    *   PR [#2075](https://github.com/agentscope-ai/CoPaw/pull/2075) 修复了 macOS Safari 浏览器中文输入法回车误发消息的 UX 问题 (Issue [#974](https://github.com/agentscope-ai/CoPaw/issues/974))。

## 4. 社区热点
今日社区讨论最热烈的话题集中在**执行稳定性**与**企业级功能**上：

*   **[Question]: 工具链调用卡死问题** (Issue [#2040](https://github.com/agentscope-ai/CoPaw/issues/2040))
    *   **热度**: 评论 8 条
    *   **分析**: 用户反映工具调用（读文件、执行脚本）经常卡住超过 20 分钟。这反映出社区对**异步任务超时机制**和**执行反馈**的强烈需求。
*   **[Question]: 关于安全的疑问** (Issue [#2007](https://github.com/agentscope-ai/CoPaw/issues/2007))
    *   **热度**: 评论 7 条
    *   **分析**: 用户在使用飞书集成时，发现敏感指令（如 `del`）的审批流存在权限混淆（发起方可自行审批）。这是一个严重的**权限控制回归**或设计缺陷，涉及企业数据安全。
*   **[Feature]: 微信 ClawBot 频道支持** (Issue [#2043](https://github.com/agentscope-ai/CoPaw/issues/2043))
    *   **热度**: 👍 7 个
    *   **分析**: 微信刚发布的 ClawBot 引起了社区极大兴趣，用户迫切希望 CoPaw 支持这一新渠道。

## 5. Bug 与稳定性
今日报告的关键 Bug 主要涉及模型兼容性和界面交互，部分已有修复方案：

*   **🔴 严重: Anthropic 模型工具调用后崩溃** (Issue [#2076](https://github.com/agentscope-ai/CoPaw/issues/2076))
    *   **现象**: 使用 `view_image` 工具后，后续对话直接报 500 错误 `ClaudeContentBlockToolResult object has no attribute 'source'`。
    *   **状态**: **已有修复 PR** [#2079](https://github.com/agentscope-ai/CoPaw/pull/2079)。该 PR 清理了历史消息中的媒体内容重放，解决了 API 兼容性问题。
*   **🟠 中等: Windows 客户端/工具调用卡顿** (Issue [#2059](https://github.com/agentscope-ai/CoPaw/issues/2059), [#2040](https://github.com/agentscope-ai/CoPaw/issues/2040))
    *   **现象**: Windows 端不定时卡死，工具调用无响应。
    *   **状态**: PR [#2068](https://github.com/agentscope-ai/CoPaw/pull/2068) 声称修复了 Shell 管道泄漏和进程管理问题，有望缓解此问题。
*   **🟠 中等: Telegram 频繁断连** (Issue [#2041](https://github.com/agentscope-ai/CoPaw/issues/2041))
    *   **状态**: 暂无对应 Fix PR，需要进一步排查网络保活机制。
*   **🟡 低: 界面代码块渲染破坏** (Issue [#2037](https://github.com/agentscope-ai/CoPaw/issues/2037))
    *   **状态**: 用户建议简化 Textarea 处理逻辑，暂未修复。

## 6. 功能请求与路线图信号
根据 Issue 和 PR 动态，以下功能极有可能在近期纳入版本规划：

*   **🛡️ 安全审计命令**: Issue [#573](https://github.com/agentscope-ai/CoPaw/issues/573) 提议的 `copaw security audit` 命令已收到维护者关注，结合 PR [#1762](https://github.com/agentscope-ai/CoPaw/pull/1762) (文件路径守护)，表明项目正在强化**安全沙箱**能力。
*   **🤖 MCP 工具测试与管理**: PR [#2078](https://github.com/agentscope-ai/CoPaw/pull/2078) 提议在控制台增加 MCP Server 连通性测试功能，这将极大改善开发者调试工具链的体验。
*   **🖼️ 前端交互增强**: Issue [#2080](https://github.com/agentscope-ai/CoPaw/issues/2080) 请求输入框直接支持图片粘贴，Issue [#2065](https://github.com/agentscope-ai/CoPaw/issues/2065) 请求在 Docker 中增加 noVNC 终端/文件管理。这显示用户对**富文本交互**和**开发环境集成**有较高期待。
*   **➕ 微信 ClawBot 支持**: Issue [#2043](https://github.com/agentscope-ai/CoPaw/issues/2043) 热度较高，是明显的路线图候选者。

## 7. 用户反馈摘要
*   **痛点**:
    *   **卡顿与无反馈**: 多位用户反馈执行长任务时缺乏进度条或心跳反馈，且容易中途静默失败。
    *   **配置复杂度**: Windows 环境下的依赖安装 (Issue [#2014](https://github.com/agentscope-ai/CoPaw/issues/2014)) 和 GLM 模型的 `thinking` 字段配置 (Issue [#2042](https://github.com/agentscope-ai/CoPaw/issues/2042)) 仍然困扰新手。
    *   **信息过载**: Issue [#2049](https://github.com/agentscope-ai/CoPaw/issues/2049) 指出企业微信机器人在对话中返回了过多思考过程，污染了聊天界面。
*   **好评**:
    *   对**多智能体路由**功能的合并表示欢迎，认为这是解决复杂任务的关键。
    *   对 `!!` 中断指令的快速实现表示满意。

## 8. 待处理积压
*   **Issue #430 (Help Wanted)**: 这是一个长期的任务认领列表，虽然有更新，但仍有大量 P0/P1 级任务处于 "Not Started" 状态。建议维护者分批细化任务以降低贡献门槛。
*   **PR #1762 (Security Guardian)**: 该 PR 已开启数日，涉及敏感路径访问控制，建议维护团队尽快进行安全审查并合并，以响应社区对数据安全的需求。

---
*分析师结语*: CoPaw 目前正处于功能快速迭代期，核心团队对社区反馈的响应速度较快（如 Safari 中文输入法问题的修复）。目前的瓶颈在于**企业级部署的稳定性**（如 Telegram 断连、Shell 阻塞）和**模型兼容性细节**（如 Anthropic 图片处理）。建议下一阶段优先处理 PR #2079 和 #2068，以显著提升系统可用性。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

这里是 **ZeptoClaw** 项目 2026 年 3 月 23 日的动态日报。

# ZeptoClaw 项目日报 (2026-03-23)

## 1. 今日速览
ZeptoClaw 项目今日保持**高度活跃**，社区贡献主要集中在 **Telegram 集成优化**与**上游同步**两个方面。过去 24 小时内共有 9 次代码/议题更新，虽然无新版本 Release 发布，但产生了 3 个功能性 PR（主要针对 UX 改善）。值得关注的是，社区出现了关于**治理结构与沟通渠道**的讨论，表明用户群体正在扩大，对非技术支持的需求增加。整体来看，项目正处于功能迭代与社区构建的关键时期。

## 2. 版本发布
*   **无新版本发布**。
    *   注：虽然无正式 Release，但 Issue #395 和 PR #394 暗示社区正在处理 `v0.7.6` 的上游同步与构建产物管理，预计近期可能会有补丁版本或同步更新。

## 3. 项目进展
今日项目主要推进了用户体验优化和分支同步工作，具体如下：

*   **Telegram 集成增强 (PR #396, #392)**:
    *   贡献者 @stuartbowness 提交了两个重要的 PR，旨在改善 Telegram 端的使用体验。
    *   **PR #392**: 增加了“正在输入...”的动态指示器，解决了用户发送消息后不知道 AI 是否在工作痛点。
    *   **PR #396**: 综合性修复，包括安全加固、修复 Markdown 渲染问题以及消息分块处理。这将显著提升机器人的响应速度和安全性。
*   **上游代码同步 (Issue #393, PR #394)**:
    *   Issue #393 已关闭，伴随 PR #394 的提交，表明项目正在积极将上游 `v0.7.6` 的更新同步到当前代码库，同时保留 Telegram 等自定义功能。这有助于减少技术债务。

## 4. 社区热点
今日讨论热度最高的问题集中在架构演进和社区引导上：

*   **🔥 [feat] Core templates based on Containerfiles mapped-to/launched-in orchestrated Firecracker VM's (#387)**
    *   **数据**: 7 条评论 | 创建于 03-17
    *   **分析**: 这是一个极具前瞻性的架构讨论。作者提议将 Coding Agent（如 copilot-cli 等）视为运行在 Firecracker microVM 上的容器化应用，以解决**功能蔓延**和**安全攻击面**扩大的问题。该议题引发了关于项目核心架构方向的深度辩论。
    *   **链接**: [qhkm/zeptoclaw Issue #387](https://github.com/qhkm/zeptoclaw/issues/387)

*   **🗣️ [feat] Do we have a community? (#397)**
    *   **数据**: 0 条评论 (新开) | 创建于 03-22
    *   **分析**: 用户反馈在配置 Qwen 模型时遇到困难，呼吁建立官方社区（如 Discord/Telegram 群组）以便实时交流。这反映出当前文档可能不足以覆盖所有配置场景，且缺乏即时沟通渠道正在阻碍新用户的上手。
    *   **链接**: [qhkm/zeptoclaw Issue #397](https://github.com/qhkm/zeptoclaw/issues/397)

## 5. Bug 与稳定性
*   **无严重崩溃报告**。
*   **体验类问题**:
    *   **Markdown 渲染异常**: 在 PR #396 中被指出，Telegram 机器人在回复时破坏了 Markdown 格式，该问题已通过 PR 修复。
    *   **响应反馈缺失**: 用户发送指令后缺乏即时反馈（已通过 PR #392 修复）。

## 6. 功能请求与路线图信号
根据 Issues 和 PRs 信号，下一阶段路线图可能包含以下重点：

1.  **深度技能发现 (Issue #285)**: 请求增加 `SKILL.md` 的存在性检查，以优化 GitHub 仓库的技能搜索质量。这表明项目正在强化其作为 Agent 编排平台的能力。
    *   *状态*: Open，建议关注。
2.  **Firecracker 微虚机支持 (Issue #387)**: 这是一个潜在的**破坏性架构变更**。如果采纳，将使 ZeptoClaw 转向更安全的沙箱运行模式。目前仍在讨论阶段，但极可能成为 v1.0 版本的核心特性。
3.  **开发环境标准化 (PR #287)**: 提供一致的 Dev tools 和 pre-PR 检查。这意味着维护者对代码质量有更高要求，该 PR 合并后将降低外部贡献者的门槛。

## 7. 用户反馈摘要
*   **配置难度大**: Issue #397 暴露出用户在集成第三方模型（如 Qwen）时面临显著阻力，且目前只能通过 Issue 寻求帮助，缺乏社区支持。
*   **对 Telegram 场景的强需求**: 连续两个关于 Telegram 的 PR (#392, #396) 说明 ZeptoClaw 被大量用户作为 Telegram Bot 使用，对即时通讯界面的稳定性和格式美观度要求很高。

## 8. 待处理积压
*   **PR #287 (chore: Dev tools)**: 该 PR 已开启超过两周（03-09 创建），今日有更新。这是一个提升项目健康度的重要工具集，建议维护者优先 Review 并合并，以统一开发规范。
    *   **链接**: [qhkm/zeptoclaw PR #287](https://github.com/qhkm/zeptoclaw/pull/287)
*   **Issue #397 (Community Channel)**: 目前尚无人回复。建议维护者尽快提供官方社群链接或在 Readme 中增加 Discussion 链接，以降低用户流失率。

---
*分析师注：ZeptoClaw 目前处于功能快速迭代的“青春期”，技术社区在探讨微服务/微虚机化（Firecracker）的高级架构，而终端用户则在呼唤基础的 Telegram 体验优化与社区支持。建议项目方尽快解决文档与社区缺位问题，以承接即将到来的架构升级。*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

以下是为您生成的 **EasyClaw** 项目 2026-03-23 动态日报：

---

# 📊 EasyClaw 项目日报 (2026-03-23)

### 1. 今日速览
EasyClaw 今日整体维护活动处于**低活跃但高效**状态。过去 24 小时内项目未产生新的代码提交或功能更新，但在社区维护方面表现出极高的响应速度。针对阻碍核心功能 `computer-use` 的严重缺陷（Issue #26），维护团队在一天内完成了从问题报告到关闭的全过程。尽管缺乏新功能输入，这种“零积压”的维护策略有效保障了当前版本的健康度。

### 2. 版本发布
*   **无新版本发布**
    *   *注：今日无 Tag 或 Release 生成，主分支代码未发生变更。*

### 3. 项目进展
*   **Issue 修复与关闭**
    *   今日唯一的显著进展是 **Issue #26** 的关闭。该 Issue 涉及 `computer-use` 功能的组件缺失问题。维护者迅速响应并解决了该问题（可能是通过文档指引或热修复配置），表明项目对阻碍性 Bug 的处理周期（MTTR）非常短，项目稳定性维护向前迈进了坚实一步。

### 4. 社区热点
*   **[Issue #26] kaitray.exe 组件缺失导致 computer-use 功能无法使用** [🔴 High Attention]
    *   **链接：** [gaoyangz77/rivonclaw Issue #26](https://github.com/gaoyangz77/rivonclaw/issues/26) *(注：原文链接指向 rivonclaw 仓库)*
    *   **分析：** 该 Issue 是今日唯一的焦点。用户报告在 Windows 环境下 v1.3.21.248 版本中，尝试代理操作微信时因 `kaitray.exe` 缺失导致 WebSocket 连接失败。由于该问题直接影响了 EasyClaw 的核心卖点（AI 操控能力），且发生在主流 OS 上，受到了社区和维护者的高度重视，已得到解决。

### 5. Bug 与稳定性
今日记录的 Bug 主要集中在应用的可执行文件完整性上，按严重程度排列如下：

*   **🔴 P0 - 核心功能不可用 (已关闭)**
    *   **问题描述：** 在 Windows 10 x64 环境下，安装目录中缺少 `kaitray.exe` 文件，导致 `computer-use` 代理无法连接本地 WebSocket 服务 (127.0.0.1:8765)，进而无法操作目标应用（如微信）。
    *   **状态：** Issue #26 已关闭。推测为安装包配置错误或环境变量问题已修复，目前无待处理的崩溃或回归报告。

### 6. 功能请求与路线图信号
*   **无新信号**
    *   今日无新增 Feature Request 或 Enhancement 类 Issue。社区当前的关注点似乎集中在现有版本的稳定性与功能可用性验证上，而非新功能拓展。

### 7. 用户反馈摘要
根据 Issue #26 的交互内容，提炼用户痛点如下：
*   **痛点：** 安装即用性受损。用户反馈虽然 `computer-use` 代理已配置 (`configured: true`)，但底层的依赖组件（`kaitray.exe`）在标准安装路径下缺失，导致功能黑盒化，排查困难。
*   **场景：** 用户主要尝试将 EasyClaw 用于自动化操作桌面级即时通讯软件（微信），验证了 AI Agent 辅助社交/办公是主要的高频使用场景。

### 8. 待处理积压
*   **无**
    *   截止今日收盘，过去 24 小时内活跃/新开的 Issue 已全部清零，PR 队列为空。项目当前不存在明显的积压工作，建议维护者关注下一阶段的功能迭代或自动化测试覆盖。

---

**分析师点评：** EasyClaw 目前处于“维护模式”而非“激进开发模式”。虽然代码更新频率为 0，但对严重 Bug 的快速闭环证明了项目维护者依然在线且负责任。建议关注 `kaitray.exe` 缺失是否为 v1.3.21.248 的普遍回归问题，以防大量同类工单涌现。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*