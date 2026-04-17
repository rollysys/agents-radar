# OpenClaw 生态日报 2026-04-17

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-17 02:49 UTC

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

# OpenClaw 项目日报 - 2026年04月17日

## 1. 今日速览

OpenClaw 项目今日保持极高的活跃度，过去24小时内 Issues 与 PR 更新量均达到 500 条，显示出社区与开发团队紧密的互动节奏。项目发布了 `v2026.4.15` 正式版与 Beta 版，重点集成了 Claude Opus 4.7 的图像理解能力及 Google Gemini 的 TTS 支持。然而，新版本伴随的回归问题较多，尤其是 `onboard` 流程崩溃和 Windows UI 异常成为用户反馈焦点。总体而言，项目处于功能快速迭代与稳定性修复并行的关键阶段。

## 2. 版本发布

**最新版本：v2026.4.15** (同日发布 Beta.2)
- **Anthropic 增强**：
  - 支持 Claude Opus 4.7 模型的捆绑图像理解。
  - 增加了 `opus` 别名，优化了 Claude CLI 默认配置。
- **Google TTS 支持**：
  - 在捆绑的 `google` 插件中新增 Gemini 文本转语音支持，包括提供商注册、语音选择及 WAV 格式输出。

## 3. 项目进展

今日共有 **196 个 PR 合并/关闭**，主要进展集中在稳定性修复与新平台支持：

- **平台支持扩展**：PR [#66898](https://github.com/openclaw/openclaw/pull/66898) 提交了 Windows 原生封装与加固安装程序，旨在解决长期缺失的 Windows 原生体验。
- **关键修复**：
  - **Onboarding 崩溃**：针对近期频发的 `trim` 相关 TypeError，PR [#67736](https://github.com/openclaw/openclaw/pull/67736) 和 [#67895](https://github.com/openclaw/openclaw/pull/67895) 增加了类型守卫，修复了用户初始化流程中的阻断性错误。
  - **OpenAI Codex 集成**：PR [#67918](https://github.com/openclaw/openclaw/pull/67918) 统一了 Responses API 存储能力检测，修复了 OAuth 令牌相关问题。
- **功能增强**：PR [#65554](https://github.com/openclaw/openclaw/pull/65554) 大幅更新了 WebChat 的媒体支持，增加了对多种图片和音频格式的处理能力。

## 4. 社区热点

今日讨论最活跃的议题集中在跨平台支持与核心功能的稳定性：

1.  **Linux/Windows 客户端请求** ([#75](https://github.com/openclaw/openclaw/issues/75))
    - **评论数**: 82
    - **诉求**: 社区强烈希望补齐 Linux 和 Windows 的原生应用体验，目前仅有 macOS、iOS 和 Android 端。这直接关联到今日的 PR #66898。
2.  **OAuth 令牌刷新竞态条件** ([#26322](https://github.com/openclaw/openclaw/issues/26322))
    - **评论数**: 21
    - **诉求**: 多 Agent 共享 OAuth 配置时导致令牌刷新失败，引发故障转移，影响企业级部署的稳定性。
3.  **GPT-5.3-codex 工具执行失效** ([#53959](https://github.com/openclaw/openclaw/issues/53959))
    - **评论数**: 19
    - **诉求**: 更新后模型停止调用工具，仅进行“假执行”，严重影响 Agent 的实际工作能力。

## 5. Bug 与稳定性

今日报告的阻断性问题较多，主要涉及安装引导与 UI 交互：

### 严重
- **Onboarding 流程崩溃** ([#67291](https://github.com/openclaw/openclaw/issues/67291), [#67353](https://github.com/openclaw/openclaw/issues/67353), [#67684](https://github.com/openclaw/openclaw/issues/67684))
  - **现象**: 运行 `openclaw onboard` 或安装脚本时报错 `Cannot read properties of undefined (reading 'trim')`。
  - **状态**: **已有修复 PR** (PR #67736, #67895)，部分 Issue 已关闭。
- **OpenAI-Codex 403 Cloudflare 拦截** ([#66633](https://github.com/openclaw/openclaw/issues/66633))
  - **现象**: 升级后所有请求被 Cloudflare 拦截返回 403，怀疑是 User-Agent 或请求头变更导致。

### 回归问题
- **Windows 聊天 UI 回归** ([#67035](https://github.com/openclaw/openclaw/issues/67035))
  - **现象**: 输入框吞字，流式回复不可见，严重影响 Windows 端可用性。
- **Coding Agent 不执行任务** ([#62505](https://github.com/openclaw/openclaw/issues/62505))
  - **现象**: Agent 状态更新模糊，不再执行实际编码任务。
- **Gemini `<final>` 标签泄漏** ([#65867](https://github.com/openclaw/openclaw/issues/65867))
  - **现象**: 模型输出的内部思考标签直接展示给用户。

## 6. 功能请求与路线图信号

- **七牛云 LLM 支持** ([PR #67095](https://github.com/openclaw/openclaw/pull/67095))：社区贡献了七牛云作为新的 OpenAI 兼容提供商，表明项目正在积极吸纳国内 LLM 平台支持。
- **认知记忆层** ([#52532](https://github.com/openclaw/openclaw/issues/52532))：提出基于艾宾浩斯遗忘曲线的持久化语义记忆，解决 Session 隔离导致的“失忆”痛点，该需求对 Agent 长期记忆能力至关重要。
- **消息总线** ([#52290](https://github.com/openclaw/openclaw/issues/52290))：提议引入 Agent 间通信机制，增强多 Agent 协作能力。

## 7. 用户反馈摘要

从 Issues 评论中提炼出以下典型声音：
- **新用户门槛高**：多位用户反馈刚接触项目就遭遇 `onboard` 崩溃，甚至无法跳过，导致“第一天就被劝退”。
- **版本更新焦虑**：用户担心频繁更新引入的回归问题（如 UI 闪烁、工具失效），“每个版本都有新 Bug”的观感存在。
- **模型提供商兼容性**：OpenRouter、OpenAI-Codex、Venice 等提供商在不同版本的兼容性波动大，尤其是认证（OAuth）和 API 响应格式变化让用户感到困惑。

## 8. 待处理积压

- **动态模型发现** ([#10687](https://github.com/openclaw/openclaw/issues/10687))：对于 OpenRouter 等模型库更新快的提供商，目前的静态模型目录管理方式已显滞后，需实现动态发现机制。
- **Coding Agent 效能问题** ([#62505](https://github.com/openclaw/openclaw/issues/62505))：该问题已持续数日，尚未有明确的修复 PR 进展，影响核心使用场景。

---

## 横向生态对比

# 开源 AI 智能体生态日报横向对比分析 (2026-04-17)

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正处于**功能爆发与架构重构并存**的关键时期。项目间的分化日益明显：一方面，OpenClaw、CoPaw 等头部项目正在以极快的速度集成最新模型（Claude Opus 4.7, Gemini）与多模态能力，推动生态向“全能型”助手演进；另一方面，Zeroclaw、IronClaw 等项目正经历痛苦的底层重构（微内核、Engine V2），试图解决早期架构在多租户、安全性与稳定性上的技术债。企业级需求（多渠道接入、权限管理、办公集成）与本地化部署需求（本地模型、无头服务器支持）成为驱动技术迭代的核心动力。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新 | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500 | ~500 (196 merged) | v2026.4.15 (Beta.2) | ⭐⭐⭐⭐⭐ 极高活跃，但伴随大量回归问题，稳定性承压。 |
| **NanoBot** | 9 (active) | 61 (31 merged) | 无 | ⭐⭐⭐⭐ 社区贡献活跃，API 与稳定性修补及时。 |
| **Zeroclaw** | 41 | 50 (3 merged) | 无 | ⭐⭐⭐ 开发强度大，但 PR 积压严重（47 pending），发布受阻。 |
| **Hermes Agent** | 3 | ~20 (5 merged) | 无 | ⭐⭐⭐⭐ 快速迭代多模态与文件系统功能，方向明确。 |
| **PicoClaw** | 18 | 28 (19 merged) | v0.2.6-nightly | ⭐⭐⭐⭐ 依赖维护积极，重点攻克远程部署体验。 |
| **NanoClaw** | 4 | 15 (4 merged) | 无 | ⭐⭐⭐ 架构向多实例演进，文档滞后于功能开发。 |
| **NullClaw** | 16 (closed) | 18 (merged) | 无 | ⭐⭐⭐⭐⭐ 维护效率极高，重点修复沙箱与持久化问题。 |
| **IronClaw** | 50 | 50 | 无 | ⭐⭐⭐⭐ 处于 Engine V2 攻坚期，活跃度高但 Bug 较多。 |
| **LobsterAI** | 0 | 7 (merged) | 无 | ⭐⭐⭐ 专注于企业办公场景集成，代码稳健。 |
| **Moltis** | 7 (closed) | 13 (merged) | v20260416.02 | ⭐⭐⭐⭐ 迭代速度快，代码索引能力构建中。 |
| **CoPaw** | 50 | 50 (29 merged) | v1.1.2-beta.2 | ⭐⭐⭐⭐ 品牌重塑期，多渠道接入热情高，稳定性待修复。 |
| **EasyClaw** | 1 (closed) | 1 (merged) | v1.7.12, v1.7.13 | ⭐⭐⭐ 小步快跑，引入商业化积分功能。 |
| *TinyClaw* | *0* | *0* | *无* | *无活动* |
| *ZeptoClaw* | *0* | *0* | *无* | *无活动* |

## 3. OpenClaw 在生态中的定位

作为生态的**核心参照系**，OpenClaw 展现出了“全能型”项目的特征与代价。

*   **优势**：
    *   **模型集成最快**：第一时间支持 Claude Opus 4.7 与 Gemini TTS，对新特性的响应速度远超同类。
    *   **社区规模最大**：Issue 与 PR 数量级远超其他项目，形成了强大的网络效应，问题反馈与修复的流转速度极快。
*   **劣势**：
    *   **稳定性熵增**：快速迭代导致严重的回归问题（如 Onboard 崩溃、Windows UI 异常），"每个版本都有新 Bug" 的观感强烈。
    *   **架构耦合**：相比 Zeroclaw 的微内核化重构和 IronClaw 的 Engine V2，OpenClaw 在功能堆叠下面临更大的维护压力。
*   **技术路线差异**：相比 NanoBot 的“轻量级”和 LobsterAI 的“垂直化”，OpenClaw 走的是**大而全**的路线，试图覆盖所有平台与模型，但也因此背负了沉重的兼容性包袱。

## 4. 共同关注的技术方向

通过对各项目 Issues 与 PR 的聚类分析，以下三个技术方向在多项目中涌现：

1.  **长期记忆与上下文管理**
    *   **涉及项目**：OpenClaw, NanoBot, Moltis
    *   **具体诉求**：Session 隔离导致的“失忆”问题成为痛点。OpenClaw 提出基于艾宾浩斯遗忘曲线的认知记忆层；NanoBot 探索基于 Git 的分段记忆；Moltis 优化了长对话中的工具结果压缩策略。Agent 正在从“无状态”向“有记忆”演进。

2.  **多模态能力标准化集成**
    *   **涉及项目**：OpenClaw, Hermes Agent, PicoClaw, CoPaw
    *   **具体诉求**：OpenClaw 集成 Gemini TTS，Hermes 实现沙箱文件同步与视频处理，CoPaw 推进多模态 PR。生态正从纯文本对话向语音、图像、视频处理扩展，且都在尝试解决不同模型间输出格式（XML vs JSON）的兼容性问题。

3.  **企业级多渠道与多租户支持**
    *   **涉及项目**：NanoClaw, LobsterAI, IronClaw, CoPaw
    *   **具体诉求**：LobsterAI 深度集成 POPO/企微，CoPaw 接入 Signal/WhatsApp/SIP，NanoClaw 探索多工作区架构。这表明个人助手正在向**企业通讯枢纽**转型，多租户隔离、OAuth 认证稳定性（如 IronClaw 的 Google Sheets 集成问题）成为关键瓶颈。

## 5. 差异化定位分析

*   **OpenClaw & CoPaw**：**全能型生态**。OpenClaw 侧重于模型能力的快速跟进，CoPaw 侧重于通讯渠道的广泛覆盖（特别是国内企微/钉钉生态），两者都面临复杂的稳定性挑战。
*   **NanoBot & Hermes Agent**：**敏捷型创新者**。NanoBot 保持了学术背景的轻量与优雅，API 设计简洁；Hermes 专注于多模态与工具链的深度集成（如沙箱文件同步），适合作为特定场景的底层框架。
*   **Zeroclaw & IronClaw**：**架构重构者**。两者都在进行深度的底层重构（微内核、Engine V2），牺牲短期稳定性换取长期的扩展性与安全性，适合对架构有高要求的开发者关注。
*   **LobsterAI**：**垂直场景专家**。深度绑定网易 POPO 与企业微信，放弃通用性，专注于办公自动化（OA）场景的落地，稳定性最高。
*   **Moltis & NullClaw**：**稳定性与性能优化者**。NullClaw 极致的修复效率与 Moltis 对代码索引能力的探索，显示出其在特定技术点上的深耕。

## 6. 社区热度与成熟度

*   **快速迭代期**：OpenClaw, IronClaw, CoPaw。特征：Issues 量大，PR 活跃，版本更新快，但用户抱怨多，适合尝鲜与贡献代码。
*   **质量巩固期**：NullClaw, LobsterAI, EasyClaw。特征：PR 以修复为主，Issue 增长平稳，适合生产环境部署。
*   **架构演进期**：Zeroclaw, NanoClaw。特征：RFC 提案多，底层重构频繁，社区讨论偏向技术深度，适合架构师关注。
*   **停滞/静默期**：TinyClaw, ZeptoClaw。无显著活动。

## 7. 值得关注的趋势信号

1.  **“沙箱安全”成为新焦点**：NullClaw 修复 Docker 沙箱挂载，Hermes 实现沙箱文件双向同步，OpenClaw 加固 Windows 安装。随着 Agent 拥有代码执行能力，如何在开放能力与系统安全间取得平衡是核心命题。
2.  **本地化与隐私需求激增**：PicoClaw 支持 `--no-browser` 无头认证，CoPaw 用户呼吁本地模型卸载功能。这表明开发者对数据隐私和脱离云服务的自主控制权有强烈需求，能够运行在本地服务器或无界面环境的 Agent 将更具竞争力。
3.  **配置体验决定留存率**：OpenClaw 的 Onboard 崩溃、LobsterAI 的 MCP 配置失效、EasyClaw 的更新失败，多个项目的反馈均指向“配置复杂度”是劝退用户的首要原因。**零配置** 或 **一键配置** 将是下一阶段的竞争高地。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-17)

## 1. 今日速览
NanoBot 项目今日呈现高度活跃状态，社区贡献与维护力度显著增强。过去24小时内共有 61 条 PR 更新，其中 31 条已合并或关闭，显示维护者正在积极审查代码并推进功能迭代。虽然无新版本发布，但针对 API 兼容性（SSE 流式输出）、系统稳定性（无限循环修复）以及并发安全性的修复补丁大量涌现。Issues 方面，新增 9 条活跃讨论，涵盖了从记忆系统架构优化到具体 Provider 配置的广泛话题，表明项目正处于快速演进与功能完善阶段。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 31 个 PR 被合并或关闭，项目在 API 支持、通信渠道增强及系统健壮性方面取得了实质性进展：

*   **API 流式输出支持**：PR [#3222](https://github.com/HKUDS/nanobot/pull/3222) 成功合并，为 `/v1/chat/completions` 接口添加了 SSE (Server-Sent Events) 流式传输支持，填补了 API 服务的一个重要功能缺口，解决了 Issue [#3218](https://github.com/HKUDS/nanobot/issues/3218)。
*   **通信渠道增强**：PR [#3179](https://github.com/HKUDS/nanobot/pull/3179) 合并，引入了 WebSocket 工具支持、会话生命周期通知及推理内容处理，显著提升了实时交互能力。
*   **Discord 集成优化**：PR [#3171](https://github.com/HKUDS/nanobot/pull/3171) 合并，增加了 `allowChannels` 配置项，允许将 Bot 限制在特定频道内响应，优化了社区管理的灵活性。

## 4. 社区热点
今日社区讨论主要集中在系统架构优化与特定场景下的功能缺失：

*   **[Issue #3107] 综合功能建议**：用户 @aiguozhi123456 提出了多项改进建议，包括状态显示优化、LLM 请求重试机制改进及多 Provider 配置支持。该贴评论数达 5 条，反映了用户对系统可观测性和稳定性的迫切需求。
    *   链接: [HKUDS/nanobot Issue #3107](https://github.com/HKUDS/nanobot/issues/3107)
*   **[Issue #3227] 记忆系统局限性探讨**：用户 @kxsk-git 发起了关于长期/大型项目场景下记忆系统瓶颈的深度讨论，指出 `history.jsonl` 与 `MEMORY.md` 在细节保留上的不足，获得了 2 个点赞。这表明高级用户对上下文管理机制有更高期待。
    *   链接: [HKUDS/nanobot Issue #3227](https://github.com/HKUDS/nanobot/issues/3227)
*   **[Issue #3215] 邮件回复死循环**：用户报告配置 SMTP 后给自己发邮件导致 Bot 陷入数千次回复循环的严重问题，引发了关于邮件处理逻辑的热烈讨论，并迅速催生了修复 PR。
    *   链接: [HKUDS/nanobot Issue #3215](https://github.com/HKUDS/nanobot/issues/3215)

## 5. Bug 与稳定性
今日报告了若干影响系统稳定性的关键 Bug，部分已迅速得到社区响应和修复：

*   **严重**：
    *   **邮件回复死循环** ([Issue #3215](https://github.com/HKUDS/nanobot/issues/3215))：Bot 收到自己发送的邮件后会无限回复。
        *   **状态**：已提交修复 PR [#3231](https://github.com/HKUDS/nanobot/pull/3231) 和 [#3228](https://github.com/HKUDS/nanobot/pull/3228)，通过忽略来自自身地址的邮件来阻断循环。
    *   **非合规 API 导致无限工具调用** ([Issue #3220](https://github.com/HKUDS/nanobot/issues/3220))：部分 API 网关在非 `tool_calls` 结束原因下注入工具调用，导致 Agent 陷入空循环。
        *   **状态**：已提交修复 PR [#3225](https://github.com/HKUDS/nanobot/pull/3225)。
*   **中等**：
    *   **线程竞态条件** ([PR #3232](https://github.com/HKUDS/nanobot/pull/3232))：开发者发现 `AgentLoop` 中的并发字典访问存在竞态风险，已提交锁机制修复。
    *   **Gemini Provider 认证错误** ([Issue #3206](https://github.com/HKUDS/nanobot/issues/3206))：使用 Gemini 时出现多重认证凭据错误。
    *   **Groq 转写配置失效** ([Issue #3213](https://github.com/HKUDS/nanobot/issues/3213))：`GroqTranscriptionProvider` 忽略配置文件中的 `apiBase` 字段。

## 6. 功能请求与路线图信号
用户需求正驱动项目向更灵活的配置和更广泛的兼容性发展：

*   **运行时灵活性**：多个 PR 正在推进运行时动态配置能力，包括运行时模型切换 ([PR #3135](https://github.com/HKUDS/nanobot/pull/3135)) 和实例切换 ([PR #3230](https://github.com/HKUDS/nanobot/pull/3230))。结合 Issue #3107 中关于启动传参和 Fallback 的请求，项目正逐步摆脱“静态配置”的束缚。
*   **记忆系统演进**：针对 Issue #3227 提出的记忆痛点，PR [#3212](https://github.com/HKUDS/nanobot/pull/3212) 提出了基于 Git 的分段年龄注释方案，试图量化记忆的“陈旧度”，这可能是记忆系统重构的前奏。
*   **生态兼容**：针对 Discord Bot 间交互的需求 ([Issue #3217](https://github.com/HKUDS/nanobot/issues/3217)) 以及 LM Studio 的支持请求 ([Issue #3185](https://github.com/HKUDS/nanobot/issues/3185))，显示出用户希望 NanoBot 能更无缝地融入现有工具链和模型生态。

## 7. 用户反馈摘要
*   **正面反馈**：用户称赞 NanoBot 代码整洁、轻巧且易于上手 ([Issue #3227](https://github.com/HKUDS/nanobot/issues/3227))。
*   **痛点反馈**：
    *   **配置复杂性**：多位用户在 MiniMax ([Issue #2373](https://github.com/HKUDS/nanobot/issues/2373))、Gemini ([Issue #3206](https://github.com/HKUDS/nanobot/issues/3206)) 及 Groq 配置中遇到问题，反映出多模型适配仍有优化空间。
    *   **状态黑盒**：用户希望了解当前任务数目及 LLM 重试状态 ([Issue #3107](https://github.com/HKUDS/nanobot/issues/3107))，说明可观测性有待加强。
    *   **记忆细节丢失**：长期对话中，现有的 Memory 机制难以保留细节 ([Issue #3227](https://github.com/HKUDS/nanobot/issues/3227))。

## 8. 待处理积压
*   **[Issue #2373] MiniMax API 兼容性问题**：该 Issue 创建于 3 月，近期虽有活跃但仍未解决，错误涉及 Tool Call 参数格式，可能影响部分国内模型提供商的用户体验。
    *   链接: [HKUDS/nanobot Issue #2373](https://github.com/HKUDS/nanobot/issues/2373)
*   **[Issue #2220] ContextVar 提案**：关于异步安全上下文路由的提案已有月余，属于架构层面的优化，建议维护者评估其优先级。
    *   链接: [HKUDS/nanobot Issue #2220](https://github.com/HKUDS/nanobot/issues/2220)

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-04-17)

## 1. 今日速览
Zeroclaw 项目今日呈现出极高的社区活跃度与开发强度，Issues 更新达 41 条，PR 更新达 50 条，显示项目正处于架构重构与功能迭代的关键期。项目正在从早期的快速功能堆叠转向微内核架构（v0.7.0 -> v1.0.0 路线），发布了多项 RFC 提案以规范化治理、文档与工程标准。然而，PR 合并出现明显瓶颈（待合并 47 条 vs 已合并 3 条），大量核心改进（如 v0.7.0 发布准备、Mattermost WebSocket 支持）处于排队状态，可能影响下一版本的发布进度。今日已成功修复 Web Dashboard 构建与 Matrix 渠道摩擦等高优先级问题，显著改善了用户体验。

## 2. 版本发布
无新版本发布。项目正在通过 PR #5805 紧锣密鼓地筹备 v0.7.0 版本，该版本将包含 140+ 新功能与 200+ 修复，并完成工作区拆分重构。

## 3. 项目进展
今日项目主要在解决架构重构遗留问题与修复关键 Bug 上取得了实质性进展：
*   **架构重构与发布准备**：针对微内核拆分后导致的 CI 发布阻塞问题，已提出修复方案（PR #5812 已关闭，可能已采用替代方案或回滚）。PR #5805 正在整合 v0.7.0 的变更日志与版本号，标志着大版本发布临近。
*   **核心体验修复**：长期困扰用户的 "Web Dashboard not available" 问题（Issue #4866）已关闭，Dashboard 构建流程得到修复。Matrix 渠道的 E2EE OTK 重试循环等摩擦点问题（Issue #4657）也已解决。
*   **Provider 支持**：Azure OpenAI 认证支持（Issue #2555）已关闭，意味着相关适配已完成，方便企业用户接入。
*   **文档与工程化**：文档自动同步（Issue #4237）与 PR 模板精简（PR #5648）正在推进，旨在降低贡献者门槛。

## 4. 社区热点
今日社区讨论焦点集中在架构演进与易用性改进上：
*   **[RFC] 微内核架构过渡 (Issue #5574)**：评论数 8。这是项目迈向 v1.0 的核心蓝图，讨论了代码解耦与模块化，标志着项目正走向成熟。
*   **[Bug] Web Dashboard 构建问题 (Issue #4866)**：评论数 14。该问题导致大量用户无法启动桌面端或 Web UI，高互动量反映了用户对“开箱即用”体验的迫切需求。
*   **[Feature] GitHub Copilot 配置 (Issue #4851)**：评论数 7。用户希望 `zeroclaw onboard` 能直接支持 Copilot 配置，目前需手动编辑配置文件，反映了社区对主流 AI Provider 集成的关注。
*   **[RFC] 国际化改进 (Issue #5787)**：评论数 3。提议使用 Mozilla Fluent 替换 TOML i18n，并移除仓库内翻译文档，引发了关于文档维护策略的讨论。

## 5. Bug 与稳定性
今日报告的严重 Bug 集中在数据安全与核心运行时：
*   **S0 - 数据泄露风险 (Issue #5415 [OPEN])**：聊天上下文泄露至定时任务，可能导致隐私问题。目前尚在讨论中，无明确修复 PR，需紧急关注。
*   **S1 - 运行时崩溃 (Issue #5685 [OPEN])**：`zeroclaw agent` 命令因 CLI channel factory 未注册而崩溃。已有修复 PR #5690 提交，等待合并。
*   **S1 - CI 发布阻塞 (Issue #5811 [OPEN])**：微内核拆分后导致 `cargo publish` 失败。关联 PR #5812 状态为 Closed，需确认修复是否生效。
*   **S2 - Provider 兼容性 (Issue #5360 [OPEN])**：Codex CLI 工具传递了不支持的 `-q` 参数，导致工具调用失败。
*   **S2 - Windows 体验 (Issue #5562 [CLOSED])**：Windows 执行 Shell 命令时闪烁控制台窗口，已修复。

## 6. 功能请求与路线图信号
用户需求集中在特定 Channel 支持与企业级特性：
*   **Mattermost 增强 (PR #5602)**：将 REST 轮询升级为 WebSocket 并支持全频道监听，极大提升了实时性与可用性。该 PR 处于 Open 状态，预计将在 v0.7.0 中合并。
*   **MariaDB 支持 (Issue #4668)**：企业用户请求支持 MariaDB 作为 Memory 后端，以适配现有基础设施。
*   **Napcat/Onebot Channel (Issue #2503)**：社区对 QQ 机器人协议支持仍有需求，但长期未得到官方响应。
*   **Session 管理 (PR #5696)**：新增 SessionResetTool 和 SessionDeleteTool，允许 Agent 程序化管理会话，信号显示项目正在增强 Agent 的自治能力。

## 7. 用户反馈摘要
*   **构建门槛高**：用户普遍抱怨 Web Dashboard 需手动 `npm build`，阻碍了非开发者群体的使用（Issue #4866）。
*   **配置复杂**：Onboard 流程未覆盖所有 Provider（如 Copilot, Azure OpenAI），导致新手配置困难（Issue #4851, #2555）。
*   **文档滞后**：i18n 文档与安装脚本更新不同步（Issue #5679），导致用户使用了过期的参数。
*   **期待 Monorepo 解耦**：RFC 系列讨论热烈，核心贡献者对架构清理持积极态度，但也担忧迁移过程中的兼容性。

## 8. 待处理积压
*   **PR 审核严重积压**：目前有 **47 个 PR 处于待合并状态**。建议维护者优先处理高优先级的修复（如 PR #5690 Agent 崩溃修复）和 v0.7.0 发布准备工作（PR #5805）。
*   **长期未响应 Issue**：Issue #2503 (Napcat Channel) 创建于 3 月初，虽有活跃讨论但未纳入官方路线图；Issue #2467 (Webhook transforms) 同样长期未决，影响了高级用户对接第三方服务。
*   **安全风险未决**：Issue #5415 的上下文泄露问题尚未有明确修复计划，建议列入最高优先级处理。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 (2026-04-17)

## 1. 今日速览
今日 Hermes Agent 项目活跃度极高，核心开发重心集中在**多模态能力集成**与**系统健壮性增强**。共计处理了 3 个新 Issue 和约 20 个 Pull Requests，其中多个功能性 PR（如文件同步、Gemini OAuth 支持）已成功合并。项目生态正在快速扩展，新增了对 Google Gemini CLI 和本地教育题库的原生支持，同时针对 Windows 平台兼容性和 TUI 视觉体验进行了显著优化。整体来看，项目正处于功能迭代与稳定性修补并行的快速上升期。

## 2. 版本发布
*今日无正式版本发布，但已有大量功能性 PR 合并，预计将在近期汇总为新版本。*

## 3. 项目进展
今日共有 5 个重要的 PR 被合并（Closed），显著推进了项目功能边界：

*   **沙箱文件同步机制落地 ([PR #11291](https://github.com/NousResearch/hermes-agent/pull/11291))**：
    实现了文件同步规范的第二阶段。现在支持在沙箱销毁时，自动将远程修改过的文件（如 Skill 生成的缓存、凭证）反向同步回主机，解决了容器化运行状态下数据持久化的痛点。此 PR 是对前期工作的挽救与加固，标志着沙箱隔离机制的成熟。
*   **集成 Google Gemini OAuth Provider ([PR #11270](https://github.com/NousResearch/hermes-agent/pull/11270))**：
    新增了基于 Google CLI OAuth 的推理提供商支持。用户可直接通过 `hermes model` 选择 Gemini 并完成浏览器授权登录，无需手动配置 API Key，降低了多模型切换的门槛。
*   **教育场景本地化支持 ([PR #11332](https://github.com/NousResearch/hermes-agent/pull/11332))**：
    引入了本地优先的题库摄取管道，包含 SQLite 存储、题目提取与引用校验功能。这表明 Hermes 正在向垂直领域的工具链拓展。
*   **OpenCode 路由修复 ([PR #11286](https://github.com/NousResearch/hermes-agent/pull/11286))**：
    修复了中途切换模型至 Anthropic 路由时的 404 错误，通过剥离 URL 末尾的 `/v1` 解决了双斜杠问题，提升了模型热切换体验。
*   **Z.AI 探测模型升级 ([PR #9753](https://github.com/NousResearch/hermes-agent/pull/9753))**：
    将探测模型从 `glm-4.7` 升级至 `glm-5.1`，修复了新版账户无法兼容的问题。

## 4. 社区热点
今日虽然评论数未显式列出，但根据 Issue 和 PR 的关注度与重要性，以下议题为关注焦点：

*   **[Issue #11314] HTTP 529 错误未触发 Fallback 机制**：用户指出当前错误分类逻辑将 529 归类为 `overloaded` 而非 `rate_limit`，导致无法触发备用模型切换。这反映了生产环境中对高可用性的强烈诉求。
*   **[PR #11337] 多模态 Provider 自动装配**：该 PR 提议通过 URL 自动检测多模态能力（TTS/图像/视频），实现零配置接入。这是一个极具价值的功能改进，有望大幅降低多模态应用的开发成本。
*   **[Issue #11312] Gateway 工作目录配置失效**：涉及部署配置的持久化问题，直接影响到运维体验，引发了关于 Systemd 单元文件管理的讨论。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在错误处理与部署配置，部分已有修复方案：

*   **[严重] HTTP 529 未触发降级 ([Issue #11314](https://github.com/NousResearch/hermes-agent/issues/11314))**：
    *   **现象**：服务商返回 529 时，Agent 报错停止，未切换至 Fallback 模型。
    *   **状态**：Open，等待修复。
*   **[中等] Gateway 工作目录重置 ([Issue #11312](https://github.com/NousResearch/hermes-agent/issues/11312))**：
    *   **现象**：`hermes update` 会覆盖 Systemd 配置，导致工作目录设置丢失。
    *   **状态**：Open，影响部署稳定性。
*   **[已修复] 上下文压缩导致最新消息丢失 ([PR #11330](https://github.com/NousResearch/hermes-agent/pull/11330))**：
    *   修复了压缩机制可能将用户最新输入与旧摘要合并，导致模型忽略用户当前意图的问题。
*   **[已修复] ZIP 更新缓存失效 ([PR #11329](https://github.com/NousResearch/hermes-agent/pull/11329))**：
    *   修复了更新后 Banner 仍显示“落后 N 个 commits”的缓存未刷新问题。
*   **[已修复] User-Agent 兼容性 ([Issue #11301](https://github.com/NousResearch/hermes-agent/issues/11301))**：
    *   针对自定义端点补充了 User-Agent 头，防止被部分代理拦截。

## 6. 功能请求与路线图信号
从新增的 Issue 和 PR 中，可以窥见项目下一阶段的发展方向：

*   **多模态自动化**：[PR #11337](https://github.com/NousResearch/hermes-agent/pull/11337) 暗示项目正致力于打造“开箱即用”的多模态 Agent，自动识别并连接 TTS/Video 等后端。
*   **错误自愈能力**：[Issue #11314](https://github.com/NousResearch/hermes-agent/issues/11314) 指出的 Fallback 逻辑缺陷，预示着后续将增强错误分类器，支持更复杂的重试与降级策略。
*   **创意工具链**：[PR #11340](https://github.com/NousResearch/hermes-agent/pull/11340) (Hyperframes) 与 [PR #11332](https://github.com/NousResearch/hermes-agent/pull/11332) (题库) 显示出 Hermes 正在从纯对话 Agent 向具备内容生产与教育辅助能力的平台转型。
*   **跨平台体验优化**：[PR #10680](https://github.com/NousResearch/hermes-agent/pull/10680) 提到 Windows UTF-8 与 Cron 任务改进，表明社区对非 Linux 环境的支持力度在加大。

## 7. 用户反馈摘要
*   **痛点：模型切换不够丝滑**：用户在遇到服务端过载（529）时，期望 Agent 能自动“兜底”，而不是直接报错，这表明用户对系统容错性的期望高于现状。
*   **痛点：配置持久化**：运维用户反馈 `hermes update` 对自定义配置的侵入性（覆盖 systemd 文件）是一个恼人的回归问题。
*   **正面反馈：多模态集成**：社区对于新增 Gemini OAuth 和视频/图像处理能力的响应积极，认为这极大地简化了开发流程。
*   **视觉体验**：[PR #11335](https://github.com/NousResearch/hermes-agent/pull/11335) 针对 TUI 浅色背景下的颜色对比度问题进行了修复，反映出开发团队对 UI 细节关注度高。

## 8. 待处理积压
目前暂无长期未响应的积压 Issue，今日提交的 Issue 均为新近产生。但建议关注以下高价值 Open PR，避免积压：

*   **[PR #11337] 多模态自动装配**：功能影响面大，建议尽快 Review 合并。
*   **[PR #10680] Windows 兼容性大修**：涉及多个底层模块（UTF-8/Cron），需谨慎测试以防回归。
*   **[Issue #11314] 529 错误处理**：涉及核心调度逻辑，建议在下一版本中优先解决。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-17)

## 1. 今日速览
PicoClaw 项目今日保持**高活跃度**开发状态，共处理了 28 个 PR 更新（其中 19 个已合并/关闭）和 18 个 Issue 更新。项目发布了最新的 `nightly` 版本（v0.2.6），持续集成流程运转正常。今日重点集中在**提升用户体验与修复兼容性**方面，合并了针对无头服务器环境的 OAuth 登录支持，并显著更新了多项核心依赖。社区方面，用户对本地模型接入、工具调用稳定性及多渠道兼容性表现出强烈关注，讨论热度较高。

## 2. 版本发布
- **Version: `nightly` (v0.2.6-nightly.20260417.ba08d523)**
  - **类型**: 自动化构建版本
  - **提醒**: 官方标注 "May be unstable"，建议测试环境使用，生产环境需谨慎。
  - **变更**: 对比 v0.2.6 版本，包含了最新的主分支提交，主要涉及今日合并的依赖升级与功能优化。

## 3. 项目进展
今日共有 **19 个 PR 被合并**，项目在功能完善和架构优化上取得实质性进展：

- **[Feature] 无头环境认证支持 ([PR #2549](https://github.com/sipeed/picoclaw/pull/2549))**
  - 新增 `--no-browser` 选项，允许在无界面环境（如远程服务器/Docker）下完成 OAuth 登录，解决了长期以来远程部署认证困难的痛点。
  
- **[Refactor] Agent 并行处理能力 ([PR #2503](https://github.com/sipeed/picoclaw/pull/2503))**
  - 重构了 AgentLoop 以支持用户消息的并行处理，这将显著提升高并发场景下的响应效率。

- **[Feature] Web 端文件下载支持 ([PR #2563](https://github.com/sipeed/picoclaw/pull/2563))**
  - 在 Web 前端实现了文件附件下载功能，完善了工具调用生成文件的落地流程。

- **[Feature] 浏览器自动化工具 (待合并 [PR #2410](https://github.com/sipeed/picoclaw/pull/2410))**
  - 正在推进基于 Chrome DevTools Protocol (CDP) 的浏览器自动化工具，旨在解决路线图中的高级功能需求。

- **依赖维护**: 合并了包括 `openai-go`, `slack-go`, `mautrix`, `golang.org/x/net` 等在内的 10+ 项依赖更新，确保底层库的安全性与最新特性。

## 4. 社区热点
今日社区讨论集中在以下几个核心议题：

- **[Issue #28](https://github.com/sipeed/picoclaw/issues/28) [OPEN] - LM Studio 接入需求**
  - **热度**: 👍 1 | 评论: 14
  - **分析**: 用户强烈希望能更便捷地接入本地 LLM (LM Studio)，反映出个人 AI 助手用户对隐私和本地化部署的刚性需求。

- **[Issue #618](https://github.com/sipeed/picoclaw/issues/618) [OPEN] - 自升级功能**
  - **热度**: 👍 2 | 评论: 8
  - **分析**: 用户期待程序具备自更新能力，以减少维护成本。这是从工具向成熟软件产品演进的重要标志。

- **[Issue #748](https://github.com/sipeed/picoclaw/issues/748) [OPEN] - Groq API 兼容性**
  - **热度**: 评论: 8
  - **分析**: Groq 作为高性能推理提供商，其特殊的工具调用格式导致调用失败。兼容性问题是多模型策略中的常见阻碍，急需修复。

## 5. Bug 与稳定性
今日报告了多个影响使用的 Bug，需关注修复进度：

- **严重 - WhatsApp 消息静默丢失 ([Issue #2540](https://github.com/sipeed/picoclaw/issues/2540))**
  - **问题**: `whatsapp_native` 渠道因 LID 格式不匹配导致消息被静默丢弃，无日志报错。
  - **影响**: 严重的数据丢失风险，影响生产环境可靠性。

- **严重 - Groq API 工具调用失败 ([Issue #748](https://github.com/sipeed/picoclaw/issues/748))**
  - **问题**: Groq 返回非标准 OpenAI 格式的工具调用，导致 400 错误。
  - **状态**: 暂无关联 Fix PR。

- **中等 - Gemini 认证冲突 ([Issue #2548](https://github.com/sipeed/picoclaw/issues/2548))**
  - **问题**: 配置 Gemini 模型时报错 "Multiple authentication credentials received"。

- **中等 - Cron 任务结果丢弃 ([Issue #1058](https://github.com/sipeed/picoclaw/issues/1058))**
  - **问题**: `deliver=false` 的定时任务执行成功但未推送到 Channel。

## 6. 功能请求与路线图信号
- **本地模型支持信号**: [Issue #28](https://github.com/sipeed/picoclaw/issues/28) 显示用户对本地模型接入有较高呼声。
- **产品化信号**: [Issue #618](https://github.com/sipeed/picoclaw/issues/618) 提出的自升级功能与 [PR #2549](https://github.com/sipeed/picoclaw/pull/2549) 合并的远程认证功能，共同指向项目正在补齐“易用性”短板。
- **MCP 协议扩展**: [Issue #2546](https://github.com/sipeed/picoclaw/issues/2546) 提出 OAuth 2.1 + PKCE 支持，表明项目正试图与更广泛的企业级 MCP 生态集成。

## 7. 用户反馈摘要
- **痛点**: 远程服务器部署时浏览器自动弹窗认证非常不便（今日已修复）；长时间运行的任务缺乏进度反馈，用户面对“黑屏”感到焦虑 ([Issue #571](https://github.com/sipeed/picoclaw/issues/571))。
- **场景**: 用户常将 PicoClaw 部署在无图形界面的 Linux 服务器或 Android 设备上。
- **评价**: 社区对项目快速响应依赖更新表示认可，但对核心功能（如 Cron、特定 Channel）的静默失败表示不满，认为错误提示应更明确。

## 8. 待处理积压
- **[Issue #28](https://github.com/sipeed/picoclaw/issues/28) (创建于 2026-02-11)**: LM Studio 接入请求长期未解决，建议维护者关注 Provider 层的扩展性。
- **[Issue #93](https://github.com/sipeed/picoclaw/issues/93) (创建于 2026-02-13)**: Systemd 服务下配置文件加载路径问题，影响了服务化部署的标准体验。
- **[Issue #1058](https://github.com/sipeed/picoclaw/issues/1058)**: Cron 任务静默丢弃响应的问题，属于核心逻辑缺陷，需尽快修复。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-17)

## 1. 今日速览
NanoClaw 项目今日呈现高热度开发状态，社区贡献活跃度显著提升。过去24小时内共有 15 个 PR 更新，其中 11 个处于待合并状态，显示出社区正在密集提交新功能与优化。虽然今日无新版本发布，但核心贡献者 @topcoder1 提交了关键性修复，解决了 macOS 下服务频繁重启的稳定性问题。Issues 板块新增 4 条反馈，重点集中在多工作区支持、容器内调度功能缺失及 Telegram 用户体验优化上。整体来看，项目正处于功能快速迭代与架构重构并行的阶段，生态扩展（如 Matrix、Mem0、OpenCode 集成）势头强劲。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 4 个 PR 被关闭或合并，主要集中在稳定性修复与功能迭代清理：

*   **[已关闭] macOS 服务稳定性修复**：PR [#1807](https://github.com/qwibitai/nanoclaw/pull/1807) 解决了 macOS launchd 导致的 NanoClaw 每 10-30 分钟重启循环问题（今日累计异常重启 47 次）。修复方案包括添加 `ProcessType` 键以防止被系统能源管理挂起，同时隐藏了损坏的 Gmail 操作按钮。这是保障 macOS 生产环境稳定性的关键修复。
*   **[已关闭] API Server 技能迭代清理**：PR [#1797](https://github.com/qwibitai/nanoclaw/pull/1797)、[#1798](https://github.com/qwibitai/nanoclaw/pull/1798) 和 [#1799](https://github.com/qwibitai/nanoclaw/pull/1799) 均已关闭，推测作者 @robbyczgw-cla 在快速迭代后将工作收敛至后续版本或当前开启的 PR [#1800](https://github.com/qwibitai/nanoclaw/pull/1800) 中。

目前仍有 11 个待合并 PR，包含重大架构升级（如 7 层能力扩展 [#1795](https://github.com/qwibitai/nanoclaw/pull/1795)）及新渠道支持（Matrix [#1624](https://github.com/qwibitai/nanoclaw/pull/1624)），显示项目正在向更复杂的分布式架构演进。

## 4. 社区热点
今日讨论最为集中的话题是 **多实例/多工作区支持** 与 **Agent 可视化反馈**：

*   **多 Slack 工作区支持需求 ([#1804](https://github.com/qwibitai/nanoclaw/issues/1804))**：用户 @davekim917 指出当前架构限制。目前的通道注册机制以 `channelType` 为键，导致同一实例无法连接多个 Slack 工作区。这反映了进阶用户将 NanoClaw 作为多租户中心节点的强烈需求。
*   **Telegram 长任务反馈缺失 ([#1805](https://github.com/qwibitai/nanoclaw/issues/1805))**：用户报告在 Agent 处理长达 11 分钟的任务时，Telegram 端无任何“正在输入”提示，导致用户误以为死机。这是直接影响终端用户信任度的 UX 痛点。

## 5. Bug 与稳定性
今日报告的问题主要集中在特定运行环境与深层功能逻辑：

1.  **[高] 容器内调度与远程触发失效 ([#1806](https://github.com/qwibitai/nanoclaw/issues/1806))**：
    *   现象：在 API-key 模式容器中，`/schedule` 和 `RemoteTrigger` 报错 `Unable to resolve organization UUID`。
    *   影响：导致无法在容器内创建持久化调度任务，且缺乏相关文档说明。
    *   状态：**待修复**。

2.  **[高] macOS Launchd 服务频繁重启 ([#1807](https://github.com/qwibitai/nanoclaw/pull/1807))**：
    *   现象：macOS 能源管理错误判定服务低效并发送 SIGTERM 信号。
    *   状态：**已修复**（PR 已关闭）。

3.  **[中] Telegram 长任务无状态反馈 ([#1805](https://github.com/qwibitai/nanoclaw/issues/1805))**：
    *   现象：长时间处理期间无 UI 变化，用户体验极差。
    *   状态：**待修复**。

4.  **[低] IPC 授权边界缺乏测试覆盖 ([#1803](https://github.com/qwibitai/nanoclaw/issues/1803))**：
    *   风险：防止跨组消息注入的核心权限逻辑目前零测试覆盖，存在安全隐患。
    *   状态：**建议增加测试**。

## 6. 功能请求与路线图信号
通过 Issues 与活跃 PR 分析，项目下一阶段路线图显现出以下重点：

*   **多租户/多实例架构重构**：Issue [#1804](https://github.com/qwibitai/nanoclaw/issues/1804) 暴露了当前单例适配器模式的局限。未来可能需要重构 `channel-registry` 以支持多连接管理。
*   **Agent 持久化记忆**：PR [#1256](https://github.com/qwibitai/nanoclaw/pull/1256) 提出 Mem0 图记忆集成，结合 Qdrant 与 Neo4j，表明项目正从“无状态工具”向“有记忆智能体”演进。
*   **开放式 API 标准**：PR [#1800](https://github.com/qwibitai/nanoclaw/pull/1800) 试图暴露 OpenAI 兼容的 HTTP 接口，意味着 NanoClaw 试图成为其他 AI 应用或前端的后端驱动引擎。
*   **底层架构升级**：PR [#1771](https://github.com/qwibitai/nanoclaw/pull/1771) (npm -> pnpm) 和 [#1795](https://github.com/qwibitai/nanoclaw/pull/1795) (7层能力扩展) 显示维护者正在为更复杂的分布式计算与事件驱动架构做准备。

## 7. 用户反馈摘要
从今日反馈来看，用户痛点集中在**使用引导缺失**与**交互透明度**：

*   **文档滞后于功能**：Issue [#1806](https://github.com/qwibitai/nanoclaw/issues/1806) 显示用户在尝试使用高级功能（Schedule/RemoteTrigger）时受阻，且无法通过现有文档解决，期望补充 API-key 容器的限制说明。
*   **交互信任感缺失**：Issue [#1805](https://github.com/qwibitai/nanoclaw/issues/1805) 表明，对于长时间运行的 Agent 任务，用户极度依赖视觉反馈（如 Typing Indicator）来确认系统存活，目前的“静默处理”模式引发用户焦虑。
*   **高级场景需求**：开发者用户开始尝试在单一实例中管理多工作区（#1804），说明部分用户已将 NanoClaw 应用于生产级多通道管理场景，对架构灵活性要求提高。

## 8. 待处理积压
以下重要 PR 长期未合并，建议维护者关注：

*   **PR [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) (Matrix Channel)**：自 4月4日开启，已停滞近两周。该功能支持 E2EE，是社区高度期待的特性，建议推进 Code Review。
*   **PR [#886](https://github.com/qwibitai/nanoclaw/pull/886) (新闻简报 Skill)**：自 3月9日开启，已积压超一个月。作为展示 Agent Swarm 能力的 Skill，建议评估其与当前主分支的兼容性。
*   **PR [#1256](https://github.com/qwibitai/nanoclaw/pull/1256) (Mem0 持久化记忆)**：自 3月19日开启。作为核心认知能力的升级，建议确认是否有阻塞点。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-04-17)

## 1. 今日速览
NullClaw 项目今日展现了极高的维护活跃度与问题解决效率。过去 24 小时内，项目成功关闭了 **16 个 Issues** 并合并/关闭了 **18 个 PRs**，显示出维护者 @manelsen 及社区贡献者正在积极清理积压问题并推进功能迭代。今日重心主要集中在修复 **Docker 沙箱环境下的 Shell 执行故障**、**SQLite 历史记录持久化** 以及 **自定义 OpenAI 兼容 Provider 的兼容性** 问题上。虽然有少量新问题反馈，但整体项目稳定性随着大量修复的合并得到了显著提升。

## 2. 版本发布
- **无新版本发布**：尽管有大量代码合并，今日未监测到正式版本的 Release，推测相关修复可能在主干分支累积，预计近期将发布新版。

## 3. 项目进展
今日共有 18 个 PR 被合并或关闭，重点推进了以下修复与功能：

- **核心沙箱与安全修复**：
    - **[PR #801]** 修复了 Docker 沙箱挂载参数未初始化的严重问题，解决了导致 Shell 工具报错 "invalid empty volume spec" 的根本原因。
    - **[PR #805]** 增强了 Linux 沙箱检测逻辑，确保 `firejail` 和 `bubblewrap` 不仅能检测版本，还需验证实际运行能力。
    - **[PR #807]** 加固了 Web 模块的安全性，增加了配对令牌过期机制并收紧了 Provider 边界，防范 SSRF 风险。

- **Agent 逻辑与持久化**：
    - **[PR #802]** 修复了 CLI 对话未持久化到 SQLite 的 Bug，确保历史记录正常保存。
    - **[PR #804]** 修正了 Agent 路由逻辑，确保未绑定会话正确回落到主代理 `main` 而非被子代理劫持。
    - **[PR #814]** 修复了命名子代理 Provider 生命周期管理的内存隐患。

- **兼容性与诊断**：
    - **[PR #806]** 优化了自定义 Provider 的容错，当 `/chat/completions` 返回 404 时自动回退到 Responses API。
    - **[PR #813]** 将模型刷新的输出缓冲区预算提高，解决了 OpenRouter 等大型模型列表获取失败的问题。
    - **[PR #803]** 允许 OTEL 使用本地容器主机名（如 `otel`），修复了强制 HTTPS 导致的内网监控中断。

- **基础设施**：
    - **[PR #810]** 增加了对 SysVinit 的支持，作为 systemd/OpenRC 之外的备选服务管理方案。

## 4. 社区热点
今日社区讨论主要集中在功能配置故障与运行环境问题上：

- **[Issue #812] [CLOSED] http_request 搜索功能失效**：用户从 Picoclaw 迁移后遇到互联网搜索配置困难。
    - **诉求**：用户急需明确的搜索提供商配置指引。
    - **结果**：已通过 [PR #815] 补充了针对 SearXNG 及 API Key 的配置向导并关闭 Issue。
- **[Issue #799] & [Issue #779] Docker 沙箱执行错误**：多位用户反馈 Shell 工具报 "invalid empty volume spec"。
    - **诉求**：用户在 YOLO 模式或物理机 Docker 环境下无法执行命令，严重阻碍使用。
    - **结果**：已被确认为严重 Bug 并通过 PR #801 修复。
- **[Issue #818] [OPEN] 微信扫码登录支持**：
    - **进展**：社区正在审核新增微信渠道集成与扫码登录认证流的 PR，旨在拓展 NullClaw 在国内即时通讯场景的接入能力。

## 5. Bug 与稳定性
今日修复了多个影响用户体验的关键 Bug，按严重程度排列如下：

1.  **严重 - Shell 工具完全不可用**：
    - **问题**：Docker 沙箱模式下执行命令报错 `invalid empty volume spec`，导致 Agent 无法操作文件系统或执行脚本 ([Issue #799], [Issue #779])。
    - **状态**：**已修复** ([PR #801])。
2.  **严重 - 历史记录丢失**：
    - **问题**：使用 SQLite 后端时，对话成功返回但 `history list` 为空 ([Issue #797])。
    - **状态**：**已修复** ([PR #802])。
3.  **中等 - 模型列表刷新失败**：
    - **问题**：OpenRouter 模型列表过大（~400KB）超出默认缓冲区（50KB），导致 `nullclaw models refresh` 失败 ([Issue #809])。
    - **状态**：**已修复** ([PR #813])。
4.  **中等 - 自定义 Provider 兼容性**：
    - **问题**：自定义 OpenAI 兼容端点若不支持 `/chat/completions` 会直接报 404，未尝试回退 ([Issue #766])。
    - **状态**：**已修复** ([PR #806])。
5.  **轻微 - 版本号显示异常**：
    - **问题**：源码编译版本显示为 "dev" 而非具体版本号 ([Issue #821])。
    - **状态**：已关闭。

## 6. 功能请求与路线图信号
- **知识图谱内存**：[PR #712] 正在推进基于 SQLite 递归 CTE 的知识图谱后端。这是迈向长期记忆的重要特性，目前状态为 Open，显示项目正在向更高级的 Memory 架构演进。
- **微信生态集成**：[PR #818] 提出的微信二维码认证流，表明社区正努力拓展 NullClaw 在微信生态中的应用场景，这可能是吸引国内用户的重要功能点。
- **管理 CLI 增强**：[PR #829] 提议增加 `nullclaw config show --json` 等机器可读输出，方便后续与其他运维工具集成。

## 7. 用户反馈摘要
- **配置门槛**：用户在配置 SearXNG 等搜索提供商时感到困惑，缺乏明确的文档指引 ([Issue #812])。
- **版本感知**：用户对源码编译版本的 "dev" 标签感到困惑，希望能看到具体的 commit hash 或版本号以便于排查问题 ([Issue #821])。
- **物理机运行困惑**：多位用户在物理机 Linux 环境下遇到沙箱检测问题，反映出用户希望脱离 Docker 独立运行的强烈需求，同时也暴露了该场景下的兼容性测试不足 ([Issue #791], [Issue #820])。

## 8. 待处理积压
- **[Issue #826] Tailscale 网关配置问题**：用户在使用 Tailscale 连接 VPS 运行 Gateway 时遇到 `NotImplemented` 错误，目前该 Issue 仍处于 **Open** 状态，维护者尚未回应。建议优先关注此网络连接层面的兼容性问题。
- **[PR #712] 知识图谱内存后端**：该重要功能 PR 仍处于 Open 状态，尚未合并，建议持续关注其代码审查进度。

---
*以上数据均引用自 GitHub NullClaw 项目 2026-04-17 的公开数据。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-17)

## 1. 今日速览
IronClaw 项目今日保持极高的活跃度，共处理了 50 条 Issue 更新和 50 条 PR 更新。项目目前正处于 **Engine V2** 的关键攻坚期与 **Bug Bash（漏洞修补马拉松）** 阶段，核心开发者正集中修复 WASM 通道启动逻辑和 Web 网关的状态管理问题。值得注意的是，今日暴露了一个严重的安全漏洞（Engine V2 绕过密钥扫描），已引发社区高度关注。整体来看，项目正在快速迭代修复 V2 引擎引入的回归问题，并向更稳定的多租户架构迈进。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日项目重点推进了架构优化与关键 Bug 修复，主要集中在 Engine V2 与通道管理层面：

*   **架构重构与安全修复**：
    *   [PR #2515](https://github.com/nearai/ironclaw/pull/2515) **(Closed)**：完成了网关引导、认证门禁与配对流程的统一重构，修复了重构过程中引入的信任边界回归问题，这是多租户模式下的重要基石。
    *   [PR #2529](https://github.com/nearai/ironclaw/pull/2529) **(Open)**：针对 HTTP 工具增加了凭证脱敏功能，防止敏感信息泄露至 LLM 日志或操作记录中。

*   **WASM 通道与启动流程优化**：
    *   [PR #2562](https://github.com/nearai/ironclaw/pull/2562) **(Open)**：修复了 WASM 通道在启动时错误地将所有已安装但未激活的通道视为“运行中”的 Bug，现仅恢复持久化的激活通道。
    *   [PR #2561](https://github.com/nearai/ironclaw/pull/2561) **(Open)**：修复了 Telegram 通道重启后 `owner_id` 类型解析错误导致通道无法启动的问题。

*   **Web 网关与体验增强**：
    *   [PR #2532](https://github.com/nearai/ironclaw/pull/2532) **(Open)**：在 Web 侧边栏暴露 Engine V2 线程历史，并将线程上限从 50 提升至 500。
    *   [PR #2560](https://github.com/nearai/ironclaw/pull/2560) **(Open)**：重构了 V2 Web Activity Shell，增加了持久化的任务/例程实时监控。

## 4. 社区热点
今日讨论最激烈的问题集中在第三方集成障碍与 Engine V2 的行为异常：

*   **[Issue #2229](https://github.com/nearai/ironclaw/issues/2229) [评论: 9]**：**Google Sheets OAuth 集成受阻**。用户在 Telegram Bot 中触发 Google Suite 扩展时遇到 `Error 400 invalid_request`，导致授权流程完全阻断。这是目前评论最多的 Issue，反映出用户对办公插件集成的迫切需求。
*   **[Issue #2491](https://github.com/nearai/ironclaw/issues/2491) [评论: 1]**：**Engine V2 安全隐患**。当开启 `ENGINE_V2=true` 时，入站消息绕过了 `scan_inbound_for_secrets()` 检查，导致 Slack Token 等敏感信息直接发送给 LLM。虽然评论数不多，但该问题被标记为 `security-review-required` 和 `bug_bash_P1`，属于严重的安全红线问题。

## 5. Bug 与稳定性
今日报告了大量 Bug，主要来源于 QA 团队的 Bug Bash 活动，按严重程度排序如下：

*   **严重**:
    *   **[Issue #2491](https://github.com/nearai/ironclaw/issues/2491)**：Engine V2 绕过入站密钥扫描。
        *   *状态*：Open，等待安全审查。
*   **高**:
    *   **[Issue #2541](https://github.com/nearai/ironclaw/issues/2541)**：Agent 执行摘要任务时处理 3-5 分钟后失败，未调用任何工具。
    *   **[Issue #1998](https://github.com/nearai/ironclaw/issues/1998)**：Slack 连接流程断裂，Bot 无响应且配置状态混乱。
    *   **[Issue #2410](https://github.com/nearai/ironclaw/issues/2410)**：Web Dashboard 处于无限刷新循环，内容被反复擦除。
    *   **[Issue #2556](https://github.com/nearai/ironclaw/issues/2556)**：WASM 通道启动逻辑错误，安装即运行。
        *   *修复进展*：已有修复 PR [PR #2562](https://github.com/nearai/ironclaw/pull/2562)。
*   **中**:
    *   **[Issue #2411](https://github.com/nearai/ironclaw/issues/2411)**：Telegram Bot Token 保存操作无效。
    *   **[Issue #2285](https://github.com/nearai/ironclaw/issues/2285)**：页面刷新导致聊天记录消失，尽管后台仍在处理。

## 6. 功能请求与路线图信号
*   **原生 Matrix 通道支持**：[PR #2019](https://github.com/nearai/ironclaw/pull/2019) 持续推进，增加了端到端加密（E2EE）功能门控，显示出项目向更多通讯协议扩展的决心。
*   **Routines（例程）能力增强**：[PR #2547](https://github.com/nearai/ironclaw/pull/2547) 提出了强制性的 Cadence（执行节奏）参数与防护栏，旨在解决 Agent 无法创建响应式任务（如“记录每条 Telegram 消息”）的问题。
*   **阿里云（Aliyun）支持**：[PR #1446](https://github.com/nearai/ironclaw/pull/1446) 正在添加对阿里云百炼编码计划的支持，表明项目正在拓展国内或云厂商特定的 LLM 后端。

## 7. 用户反馈摘要
*   **集成痛点**：用户在配置 Slack 和 Google Sheets 集成时遇到较大阻碍，主要表现为 OAuth 流程报错和 Token 保存失效，体验不够顺畅。
*   **Engine V2 稳定性**：V2 引擎在工具调用方面存在偶发性的“罢工”（不调用工具直接返回文本或报错），且 Dashboard 刷新问题影响了基本的使用连贯性。
*   **安全性担忧**：有用户敏锐地发现并报告了 V2 引擎对敏感 Token 的处理方式存在风险，显示用户群体具有较高的专业度。

## 8. 待处理积压
*   **[Issue #2229](https://github.com/nearai/ironclaw/issues/2229)**：Google Sheets OAuth 问题已持续一周（创建于 04-10），虽活跃但尚未解决，建议优先处理以解除办公自动化场景的阻塞。
*   **[Issue #1997](https://github.com/nearai/ironclaw/issues/1997)**：Slack App 缺失问题，用户目前需自行创建 App，建议官方提供标准的 Marketplace App 以降低接入门槛。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-17)

## 1. 今日速览
LobsterAI 项目今日保持较高的代码提交活跃度，虽然 Issues 社区互动略显沉寂（0 条更新），但核心开发团队通过 7 个 PR 的合并显著提升了系统的稳定性与功能完善度。重点进展集中在 **企业协作工具集成**（新增 POPO 技能、企微多机器人支持）与 **关键 Bug 修复**（MCP 网关配置同步、UI 状态残留）。整体来看，项目正处于功能迭代与稳定性优化的并行阶段，对生产环境下的 MCP 服务可用性进行了重点加固。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 7 个 PR 被合并/关闭，主要推进了以下方面的进展：

*   **企业级功能增强**：
    *   **PR #1700** [CLOSED]: 重磅更新，新增 `popo-doc` 和 `popo-msg` 技能，强化了对 POPO 云文档与群历史消息的管理能力，同时将 OpenClaw 运行时升级至 v2026.4.14。
    *   **PR #1670** [CLOSED]: 实现了企业微信多机器人支持，并修复了定时任务通知在企微渠道失败的 Bug，提升了企业场景下的消息触达能力。
*   **稳定性与配置修复**：
    *   **PR #1708** [CLOSED]: 修复了 MCP bridge 在启动竞态下配置不同步导致功能不可用的问题，强制网关在配置变更时重启，保障了 MCP 服务的可靠性。
    *   **PR #1704** [CLOSED]: 优化了 Cowork 会话中的心跳包处理，抑制了可能泄露的 `HEARTBEAT_OK` 回复，净化了会话上下文。
    *   **PR #1705** [CLOSED]: 统一了主进程的电源管理逻辑，移除了重复的生命周期代码，降低了系统休眠导致的潜在风险。
*   **其他修复**：
    *   **PR #1706** [CLOSED]: 增加了更新检查请求的 `uuid` 和 `userId` 参数，优化了用户行为分析能力。
    *   **PR #1703** [CLOSED]: 快速修复了合并冲突导致图标组件丢失引发的页面崩溃问题。

## 4. 社区热点
今日社区讨论较少，关注度主要集中在以下待处理的 PR 上：

*   **PR #1707** [OPEN]：**[用户体验修复] 切换 Agent 时自动清空主页输入框内容**。
    *   **链接**：[netease-youdao/LobsterAI PR #1707](https://github.com/netease-youdao/LobsterAI/pull/1707)
    *   **分析**：该 PR 解决了一个典型的 UI 状态隔离问题。用户在切换不同 Agent 时，输入框残留旧内容极易导致误发，影响用户体验。该修复旨在将草稿状态按 Agent 隔离（或统一清空），目前处于 Open 状态，等待合并，反映了团队对 UX 细节的持续打磨。

## 5. Bug 与稳定性
今日修复了多个影响功能可用性的 Bug，按严重程度排列如下：

1.  **【严重】MCP 功能不可用**：
    *   **描述**：MCP bridge 配置在热重载时无法同步至 OpenClaw gateway，导致部分用户 MCP 功能失效。
    *   **状态**：**已修复** (PR #1708)，通过引入配置变更检测强制重启网关解决。
2.  **【严重】页面崩溃**：
    *   **描述**：合并代码时误删图标组件导入，导致 McpManager 页面崩溃。
    *   **状态**：**已修复** (PR #1703)。
3.  **【中等】UI 状态残留**：
    *   **描述**：切换 Agent 时，主页输入框内容未清空。
    *   **状态**：**修复中** (PR #1707 待合并)。
4.  **【中等】企微定时任务通知失败**：
    *   **描述**：企微渠道的定时任务通知发送失败。
    *   **状态**：**已修复** (PR #1670)。

## 6. 功能请求与路线图信号
*   **AI Provider 扩展**：**PR #438** [OPEN] 提议增加 `aihubmix` provider。该 PR 自 3 月创建至今仍未合并，且被打上 `stale` 标签，暗示项目可能正在进行供应商引入的评估或代码规范审查。如果该功能被接受，将丰富用户对 AI 模型后端的选择。
*   **企业办公生态集成**：结合 PR #1700 与 PR #1670 的动作，项目路线图明显向**企业办公场景**倾斜，强化了与网易 POPO、企业微信的深度集成，信号表明 LobsterAI 正定位为企业级 AI 助手解决方案。

## 7. 用户反馈摘要
由于今日无新增 Issue，反馈主要来源于 PR 提交记录中的问题背景描述：
*   **痛点**：多 Agent 工作流中，UI 状态未能正确隔离，导致操作困扰（PR #1707）。
*   **痛点**：配置更新后服务未能即时生效，需手动干预或出现功能降级（PR #1708）。
*   **场景**：用户大量使用 POPO 文档管理及企微机器人进行自动化办公，表明 B 端办公场景是核心使用领域。

## 8. 待处理积压
*   **长期未响应 PR**：**PR #438** [OPEN] (Feat/add aihubmix provider)。
    *   **状态**：创建于 3 月中旬，近期仅因 Stale 机制更新，长期未获核心成员 Code Review。
    *   **建议**：建议维护者关注该 PR，若暂不考虑引入该 Provider 建议关闭并说明原因，避免占用贡献者期待。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-17)

## 1. 今日速览
Moltis 项目今日表现出极高的迭代速度与维护响应度。过去24小时内，项目成功发布了新版本 `20260416.02`，并关闭了 7 个 Issue，合并/关闭了 13 个 PR，显示出维护者对社区反馈的高效处理能力。重点进展集中在**稳定性修复**（Windows 崩溃、Nostr 协议支持、Schema 兼容性）与**核心功能增强**（代码索引、上下文窗口管理）。目前仍有 5 个重要 PR 处于待合并状态，预示着项目在代码检索能力上将迎来重大更新。

## 2. 版本发布
- **版本号**: `20260416.02`
- **更新时间**: 2026-04-16
- **概况**: 这是一个常规迭代版本，主要集成了昨日修复的多个关键 Bug 和功能增强。
- **关键内容推测**: 
    - 修复了 Windows 平台下 Node Host 因缺少 CryptoProvider 导致的崩溃问题 ([PR #749](https://github.com/moltis-org/moltis/pull/749))。
    - 修复了 Nostr 频道创建时的 panic 问题 ([PR #742](https://github.com/moltis-org/moltis/pull/742))。
    - 增强了对 OpenRouter (Gemini/Grok) 模型的兼容性和推理能力支持 ([PR #751](https://github.com/moltis-org/moltis/pull/751), [PR #741](https://github.com/moltis-org/moltis/pull/741))。
    - 新增了 Nix Flake 构建支持 ([PR #469](https://github.com/moltis-org/moltis/pull/469))。

## 3. 项目进展
今日项目主要在**工具链兼容性**、**Agent 记忆管理**和**代码索引**三个方向取得实质性突破：

- **代码索引能力构建中 (Work In Progress)**: 开发者 @Cstewart-HC 提交了一个庞大的 4 阶段 PR Stack（[#753](https://github.com/moltis-org/moltis/pull/753), [#754](https://github.com/moltis-org/moltis/pull/754), [#755](https://github.com/moltis-org/moltis/pull/755), [#756](https://github.com/moltis-org/moltis/pull/756)），旨在引入内置的 SQLite+FTS5 后端、增量重索引和文件监控功能。这将显著提升 AI Agent 对本地代码库的理解和检索效率，是目前最受关注的功能开发。
- **Agent 上下文管理优化**: 合并了 PR [#737](https://github.com/moltis-org/moltis/pull/737)（整合了 #723, #726, #727），引入了可配置的上下文窗口覆盖机制，并修复了长对话中“旧工具结果优先压缩”的策略，防止 Agent 丢失早期关键上下文。
- **模型推理能力适配**: 合并了 PR [#750](https://github.com/moltis-org/moltis/pull/750) 和 [#741](https://github.com/moltis-org/moltis/pull/741)，新增了 Reasoning Effort（推理努力程度）切换开关，并修复了 Grok 3/4 模型的推理模式检测，增强了与 OpenRouter 的集成深度。

## 4. 社区热点
- **[Issue #102](https://github.com/moltis-org/moltis/issues/102) [CLOSED]**: "Docker-in-Docker sandbox mounts container-internal path instead of host path"。
    - **热度**: 👍 5, 评论 4。
    - **分析**: 这是一个长期存在的 Docker 环境下工作空间挂载路径错误的问题，今日正式关闭。这标志着项目在容器化部署和沙箱隔离机制上解决了关键痛点，对 DevOps 用户极具价值。
- **[Issue #748](https://github.com/moltis-org/moltis/issues/748) [OPEN]**: "[Feature]: easy way to 'retry' a prompt on error"。
    - **热度**: 新建 Issue，已有讨论。
    - **分析**: 用户 @vvuk 提出希望在 AI 生成出错时能一键“重试”提示词，反映出用户对交互容错性和易用性的高需求。

## 5. Bug 与稳定性
今日修复了多个影响核心功能的严重 Bug，同时也报告了新的回归问题：

**已修复 (Critical/Fixed)**:
1.  **Windows 启动崩溃** ([Issue #744](https://github.com/moltis-org/moltis/issues/744) -> [PR #749](https://github.com/moltis-org/moltis/pull/749)): 修复了 Windows Node 调用 `wss://` 时因缺少默认 CryptoProvider 导致的 panic。
2.  **Nostr 频道创建崩溃** ([Issue #736](https://github.com/moltis-org/moltis/issues/736) -> [PR #742](https://github.com/moltis-org/moltis/pull/742)): 修复了异步锁在同步上下文中造成的 panic。
3.  **MCP Tool Schema 校验失败** ([Issue #743](https://github.com/moltis-org/moltis/issues/743) -> [PR #746](https://github.com/moltis-org/moltis/pull/746)): 解决了 Attio 等工具因 JSON Schema draft 版本差异被 OpenAI 拒绝的问题。

**新报告**:
1.  **Podman 兼容性回归** ([Issue #757](https://github.com/moltis-org/moltis/issues/757)): 用户报告之前的修复（#706）导致 Podman 在 Ubuntu 24.04/26.04 上无法运行。**严重程度: 高**，影响非 Docker 用户。
2.  **Matrix 连接中断** ([Issue #758](https://github.com/moltis-org/moltis/issues/758)): 同步循环连接失败导致连接中断直至重置。**严重程度: 中**，影响 Matrix 集成稳定性。

## 6. 功能请求与路线图信号
- **用户重试机制 ([Issue #748](https://github.com/moltis-org/moltis/issues/748))**: 用户希望在 UI 层面增加错误后的重试按钮，属于易用性增强，预计短期内会被纳入。
- **Nostr 安全私信 ([Issue #759](https://github.com/moltis-org/moltis/issues/759))**: 请求支持 NIP-59/NIP-17 以实现端到端加密 DM。这符合项目强化隐私通信能力的路线，鉴于维护者对 Nostr 相关 Issue 响应迅速，该功能有望排期。
- **代码索引**: 当前开放的 4 个 PRs 表明，**本地代码库索引与语义检索**是下一版本的重头戏，预计将大幅提升 Agent 的代码编写和维护能力。

## 7. 用户反馈摘要
- **OpenRouter 兼容性痛点**: 多个 Issues ([#739](https://github.com/moltis-org/moltis/issues/739), [#738](https://github.com/moltis-org/moltis/issues/738), [#743](https://github.com/moltis-org/moltis/issues/743)) 指出通过 OpenRouter 调用 Gemini 或 Grok 时存在参数校验或功能缺失（如 Reasoning）。用户强烈需要后端对不同模型提供商的 Schema 进行更鲁棒的清洗和适配。
- **容器化部署**: Issue #102 的关闭让 Docker-in-Docker 用户松了一口气，说明有相当一部分用户在容器化环境中使用 Moltis。
- **推理控制**: 用户希望能够手动控制模型的“推理努力程度”，该需求通过 PR #750 已被满足，反映了进阶用户对模型成本与性能平衡的精细化控制需求。

## 8. 待处理积压
- **[PR #745](https://github.com/moltis-org/moltis/pull/745) [OPEN]**: Nix Flake 支持。虽然已有 PR #469 被关闭（可能已合并或被替代），但该 PR 仍处于待定状态，建议维护者确认是否需要合并以完善 NixOS 生态支持。
- **[Issue #757](https://github.com/moltis-org/moltis/issues/757) [OPEN]**: Podman 回归问题。这是一个新报告的阻断性 Bug，需立即关注以避免流失 Podman 用户群。
- **[PR Stack #753-#756](https://github.com/moltis-org/moltis/pull/753)**: 代码索引系列 PR 仍处于 Open 状态，是当前最大的开发积压项，建议尽快完成 Review 以合并这一核心功能。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 (2026-04-17)

## 1. 今日速览
CoPaw（及其核心组件 QwenPaw）今日保持高活跃度开发状态，共处理 Issue 50 条，PR 50 条，并发布了 **v1.1.2-beta.2** 版本。项目重心目前集中在修复 v1.1.x 版本带来的回归问题（如后台任务取消、API 兼容性）以及解决品牌重塑后的用户困惑。社区对多渠道接入（Signal, WhatsApp, SIP）及多模态功能表现出浓厚兴趣，但同时也反映出企业微信连接稳定性及本地模型格式兼容性等痛点。

## 2. 版本发布
**Release: v1.1.2-beta.2**
- **更新内容**：
  - **修复关键 Bug**：通过注册 `AgentApp` 分发的请求到 `TaskTracker`，解决了后台任务意外取消的问题 ([PR #3305](https://github.com/agentscope-ai/QwenPaw/pull/3305))。
  - **版本号升级**：由 @xieyxclack 提交，版本号迭代至 1.1.2b2 ([PR #3454](https://github.com/agentscope-ai/QwenPaw/pull/3454))。
- **影响**：此版本主要针对后台任务生命周期管理进行修复，建议受后台任务中断影响的用户升级。

## 3. 项目进展
今日共有 **29 个 PR 被合并或关闭**，项目迭代速度较快，主要集中在稳定性修复与功能扩展：
- **稳定性修复**：
  - 修复了热重载时 Channels 连接丢失的问题，提升了服务连续性 ([PR #2994](https://github.com/agentscope-ai/QwenPaw/pull/2994))。
  - 修复了 vLLM `tool_choice="auto"` 的兼容性问题 ([PR #3438](https://github.com/agentscope-ai/QwenPaw/pull/3438))。
  - 解决了 `/api/tools` 在 icon 为 null 时返回 500 错误的接口崩溃问题 ([PR #3497](https://github.com/agentscope-ai/QwenPaw/pull/3497))。
- **功能推进**：
  - 前端 UI 优化：重构了 Navbar 并修复了标签下拉栏样式问题 ([PR #3505](https://github.com/agentscope-ai/QwenPaw/pull/3505), [PR #3514](https://github.com/agentscope-ai/QwenPaw/pull/3514))。
  - 安全性增强：工具护栏增加了风险严重程度与说明信息的展示 ([PR #3515](https://github.com/agentscope-ai/QwenPaw/pull/3515))。

## 4. 社区热点
今日讨论最活跃的议题集中在用户迁移困惑与功能稳定性：
- **[#3309 更新到1.1.0后对qwenpaw和copaw的疑问](https://github.com/agentscope-ai/QwenPaw/issues/3309)**：评论数达 11 条。用户对项目品牌切换（CoPaw -> QwenPaw）后的文件路径残留、命令行变更感到困惑，反映出项目在迁移引导和文档说明上存在不足。
- **[#3502 与企业微信的连接还是有问题](https://github.com/agentscope-ai/QwenPaw/issues/3502) / [#2757 企业微信经常断开](https://github.com/agentscope-ai/QwenPaw/issues/2757)**：企业微信 Channel 的连接稳定性持续引发吐槽，用户反馈需频繁手动保存配置才能恢复连接。
- **[#3224 CoPaw Agent Teams](https://github.com/agentscope-ai/QwenPaw/issues/3224)**：关于自然语言驱动多智能体协作的功能提案，引发了对当前协作模式“手动挡”局限性的深度讨论。

## 5. Bug 与稳定性
今日报告了多个影响使用体验的 Bug，部分已有修复方案：
- **严重**：
  - **[#3506 API Crash](https://github.com/agentscope-ai/QwenPaw/issues/3506)**：`/api/console/chat` 接口报错 `AttributeError: 'AgentRequest' object has no attribute 'channel'`，导致对话服务不可用。
  - **[#3513 定时任务失效](https://github.com/agentscope-ai/QwenPaw/issues/3513)**：智能体无法通过对话创建定时任务，错误地尝试修改系统 crontab 而非内部 Cron。
- **中等**：
  - **[#3477 模型格式不兼容](https://github.com/agentscope-ai/QwenPaw/issues/3477)**：本地部署 Qwen 系列模型时，输出 XML 格式与 QwenPaw 期望的 JSON 格式冲突，导致工具调用失败。
  - **[#3435 文件下载 URL 重复](https://github.com/agentscope-ai/QwenPaw/issues/3435)**：下载路径出现 `/api/files/preview` 重复拼接。
  - **[#3499 访问页面慢](https://github.com/agentscope-ai/QwenPaw/issues/3499)**：接口响应延迟波动大。
- **已修复**：
  - Issue [#3481](https://github.com/agentscope-ai/QwenPaw/issues/3481) (工具接口 500 错误) 已通过 [PR #3497](https://github.com/agentscope-ai/QwenPaw/pull/3497) 修复。

## 6. 功能请求与路线图信号
结合用户需求与活跃 PR，以下功能信号明显：
- **多渠道接入爆发**：社区正在积极贡献新的 Channel 支持，包括 **Signal** ([PR #3508](https://github.com/agentscope-ai/QwenPaw/pull/3508))、**WhatsApp** ([PR #3498](https://github.com/agentscope-ai/QwenPaw/pull/3498)) 和 **SIP 语音通话** ([PR #3449](https://github.com/agentscope-ai/QwenPaw/pull/3449))。这表明 CoPaw 正向全平台消息聚合助手方向演进。
- **记忆系统重构**：[PR #3500](https://github.com/agentscope-ai/QwenPaw/pull/3500) 提出了可扩展的记忆后端架构，支持 mem0、Zep 等，旨在解决当前记忆系统扩展性差的问题。
- **多模态支持**：[PR #3509](https://github.com/agentscope-ai/QwenPaw/pull/3509) 增加了图像和文件的发送支持，补齐了多模态交互能力。
- **用户请求**：用户呼吁支持 Kimi Code API ([Issue #3437](https://github.com/agentscope-ai/QwenPaw/issues/3437)) 及本地模型卸载功能 ([Issue #3507](https://github.com/agentscope-ai/QwenPaw/issues/3507))。

## 7. 用户反馈摘要
- **迁移体验差**：多位用户抱怨 v1.1.0 升级后路径混乱（CoPaw 与 QwenPaw 并存），配置迁移不透明 ([Issue #3309](https://github.com/agentscope-ai/QwenPaw/issues/3309))。
- **本地模型兼容性痛点**：用户在使用本地部署的 Qwen 模型时，常遇到 XML/JSON 格式解析错误，提示工程或适配层需针对不同模型输出格式做兼容 ([Issue #3477](https://github.com/agentscope-ai/QwenPaw/issues/3477))。
- **稳定性认可**：尽管有 Bug，仍有用户在长任务执行讨论中表示对框架潜力的期待，特别是针对 ReAct 模式的改进。

## 8. 待处理积压
- **[#1563 write_file 工具截断](https://github.com/agentscope-ai/QwenPaw/issues/1563)**：该 Bug 自 3 月中旬报告以来仍处于 Open 状态，评论数较高，涉及大文件写入的核心工具功能，建议优先排期修复。
- **[#3445 MCP 配置失效](https://github.com/agentscope-ai/QwenPaw/issues/3445)**：GUI 配置无法传递给后端 ReMe 模块，导致 MCP 服务器连接一直处于 "Connecting..." 状态，阻碍了外部工具集成。
- **[#1059 ACP 协议支持](https://github.com/agentscope-ai/QwenPaw/issues/1059)**：虽然状态已关闭，但关联的讨论显示社区对标准化 Agent 通信协议（ACP）有持续需求，需关注是否已完全实现或需重新开启。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-04-17)

## 1. 今日速览
EasyClaw 项目今日整体呈现**高质量迭代与维护**状态。项目在过去的24小时内连续发布了 v1.7.12 和 v1.7.13 两个版本，显示出维护者对产品发布流程的快速响应能力。社区互动方面，虽然新开议题数量为 0，但成功关闭了 1 个阻碍更新的关键 Issue，且合并了 1 个功能性 PR（积分系统），表明项目在解决用户问题的同时正在积极扩展核心功能。项目健康度良好，处于稳步上升期。

## 2. 版本发布
今日连续发布两个新版本，建议用户尽快升级至最新版：

- **v1.7.13: RivonClaw v1.7.13** [查看详情](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.13)
- **v1.7.12: RivonClaw v1.7.12** [查看详情](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.12)

**更新重点与迁移注意：**
两个版本均在 Release Notes 中显著标注了 **macOS 安装问题**。由于 macOS Gatekeeper 安全机制拦截，用户可能会遇到“'RivonClaw' is damaged and can't be opened”的错误提示。这并非文件损坏，而是缺乏签名导致。
**解决方案：** 用户需通过终端执行命令移除隔离属性（具体命令请参考 Release 链接）。此问题在连续两个版本中均存在，建议开发团队在后续版本中尽快完成代码签名，以降低普通用户的使用门槛。

## 3. 项目进展
今日项目推进主要围绕功能扩展与稳定性修复展开：

- **功能新增：** PR #32 [Feature/credits system](https://github.com/gaoyangz77/rivonclaw/pull/32) 已成功关闭（推测已合并）。该 PR 引入了**积分系统**，这标志着 EasyClaw 可能正在从单一工具向平台化或增值服务方向演进，为后续的用户激励或计费功能打下基础。
- **问题修复：** 随着今日版本发布，Issue #33 的关闭表明 v1.7.11 版本中存在的更新失败问题已在最新版本中得到解决。

总体而言，项目今日迈出了重要一步，既修补了旧版本缺陷，又引入了新的核心功能模块。

## 4. 社区热点
今日社区关注度最高的问题已得到官方解决：

- **Issue #33: 1.7.11更新失败** [链接](https://github.com/gaoyangz77/rivonclaw/issues/33)
  - **状态：** 已关闭
  - **热度：** 虽然评论数仅 1 条，但作为过去24小时内唯一活跃的 Issue，且直接关系到软件的基本可用性（更新功能），其优先级极高。
  - **诉求分析：** 用户反馈旧版本更新失败，直接影响了使用体验。维护者通过发布 v1.7.12 和 v1.7.13 迅速修复了该问题，响应速度值得肯定。

## 5. Bug 与稳定性
今日报告并处理的 Bug 仅 1 例，严重程度中等，目前状态为**已解决**：

- **[P1 - 已解决] v1.7.11 版本更新失败**
  - **Issue:** [#33](https://github.com/gaoyangz77/rivonclaw/issues/33)
  - **描述：** 用户在 v1.7.11 版本中遇到更新失败问题，附带了截图证据。
  - **修复状态：** Issue 已关闭，推测已在 v1.7.12 或 v1.7.13 中修复。无需额外 Fix PR，建议用户直接下载最新版。
- **[P2 - 持续存在] macOS 安全拦截**
  - **来源：** Release Notes
  - **描述：** 应用在 macOS 上因缺乏签名被误报为“已损坏”。
  - **状态：** 目前仅提供手动命令行修复方案，尚未从技术底层（代码签名）彻底解决，属于体验层面的稳定性隐患。

## 6. 功能请求与路线图信号
- **积分系统：** 基于 PR #32 的合并，可以预见项目正在构建**Credits System（积分系统）**。这可能是为了引入 API 调用额度管理、订阅制服务或用户行为激励。这是未来版本的重要路线图信号，建议关注后续文档更新。

## 7. 用户反馈摘要
从 Issue #33 及 Release Notes 的反馈中提炼出以下痛点：
1.  **自动更新机制脆弱：** 用户遭遇更新失败，说明内置的增量更新或检查机制在特定版本存在断裂，影响了软件的持续性。
2.  **macOS 体验割裂：** “应用已损坏”的提示对非技术用户极具误导性，需要用户具备命令行操作知识，这在一定程度上阻挡了 macOS 用户的留存。

## 8. 待处理积压
- **长期未响应问题：** 目前数据显示过去24小时内无新增 Issue 或长期积压的活跃 Issue。但在 Release Notes 中提到的 macOS 签名问题属于长期存在的“体验债”，建议维护者将其列入高优先级处理队列，或寻找赞助以解决 Apple 开发者证书费用问题。

---
*数据来源：EasyClaw GitHub Repository (2026-04-17)*

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*