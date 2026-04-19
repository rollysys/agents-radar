# OpenClaw 生态日报 2026-04-19

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-19 02:56 UTC

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

# OpenClaw 项目动态日报 (2026-04-19)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，共更新 500 条 Issues 与 500 条 PRs，显示出社区与开发团队正在高速迭代。项目发布了 `v2026.4.19-beta.1` 版本，重点修复了多智能体环境下的账号隔离与路由问题。然而，Issue 列表中仍存在较多关于执行可靠性（如任务不执行、占位符回复）和环境配置（如依赖缺失、配置权限）的反馈，表明稳定性仍是当前的核心挑战。

## 2. 版本发布
### v2026.4.19-beta.1
**主要更新：**
- **修复跨智能体子代理生成的路由问题 (#67508)**：修复了在共享房间、工作区或多账户设置中，子会话错误继承调用方账户的问题。现在子代理生成将通过目标代理的绑定通道账户进行路由，同时保留对等和作用域范围的绑定。
- **影响范围**：此更新对多租户和团队协作场景至关重要，增强了多智能体系统的隔离性和安全性。

## 3. 项目进展
今日共有 **132** 个 PR 被合并或关闭，重点推进了以下领域：

- **并发与性能优化**：PR [#67785](https://github.com/openclaw/openclaw/pull/67785) 修复了嵌套代理运行时的全局队列阻塞问题，显著提升了多任务并发能力；PR [#68785](https://github.com/openclaw/openclaw/pull/68785) 引入了命令通道熔断机制，防止系统过载。
- **安全加固**：PR [#68748](https://github.com/openclaw/openclaw/pull/68748) 修复了 Linux 下配置文件原子写入后权限未正确重置的问题，确保敏感配置文件权限为 `0o600`。
- **生态集成**：PR [#68730](https://github.com/openclaw/openclaw/pull/68730) 增加了对 Bedrock Mantle 上 Claude Opus 4.7 的支持；PR [#64318](https://github.com/openclaw/openclaw/pull/64318) 正在推进统一的 Amazon 插件（Polly TTS, Transcribe STT 等）。
- **修复提交**：PR [#68746](https://github.com/openclaw/openclaw/pull/68746) 修复了非标准端点（如 LM Studio）无法获取 Usage 统计数据的问题。

## 4. 社区热点
今日社区讨论最热烈的话题集中在平台支持与身份验证架构：

- **Issue [#75](https://github.com/openclaw/openclaw/issues/75) [enhancement]**：**Linux/Windows 客户端需求**。
  - **热度**：评论 83 条，点赞 68 次。
  - **诉求**：用户强烈呼吁官方提供 Linux 和 Windows 原生应用，目前仅有 macOS 和移动端支持，限制了开发者用户群体的扩展。
- **Issue [#49971](https://github.com/openclaw/openclaw/issues/49971) [RFC]**：**原生智能体身份与信任验证**。
  - **热度**：评论 96 条。
  - **诉求**：深入讨论基于 ERC-8004 和 W3C DID 标准的身份验证层，旨在解决多智能体环境中的恶意技能识别与信任累积问题。
- **Issue [#40082](https://github.com/openclaw/openclaw/issues/40082) [bug]**：**任务执行可靠性**。
  - **热度**：评论 21 条。
  - **诉求**：用户反馈智能体频繁接受任务但不执行，仅返回 "One sec" 等占位符回复，严重影响了系统的可用性。

## 5. Bug 与稳定性
根据今日反馈，以下问题需重点关注：

### 严重
- **任务执行虚假回复**：Issue [#40082](https://github.com/openclaw/openclaw/issues/40082) 报告智能体接受任务后不执行或返回占位符，UI 显示不一致。属回归问题，影响核心功能。
- **更新后依赖缺失**：Issue [#62272](https://github.com/openclaw/openclaw/issues/62272) 报告升级到 2026.4.5 时失败，提示 `Cannot find module '@buape/carbon'`，阻碍用户升级。

### 中等
- **内存泄漏**：Issue [#45064](https://github.com/openclaw/openclaw/issues/45064) 报告基本命令导致 OOM 崩溃（已关闭，疑似已修复或需复现信息）。
- **工具调用阻塞**：Issue [#36399](https://github.com/openclaw/openclaw/issues/36399) 报告使用 Google Gemini CLI 进行多步工具调用时出现 60 秒挂起。
- **LM Studio 心跳异常**：Issue [#68363](https://github.com/openclaw/openclaw/issues/68363) 报告心跳检测导致模型反复加载，最终报告 "incomplete turn"。

### 修复状态
- 上述核心路由问题已在 `v2026.4.19-beta.1` 中修复。
- 配置文件权限问题已通过 PR [#68748](https://github.com/openclaw/openclaw/pull/68748) 合并修复。

## 6. 功能请求与路线图信号
- **行为信誉系统**：Issue [#55342](https://github.com/openclaw/openclaw/issues/55342) 提出在身份验证之外增加技能行为信誉层，以应对恶意技能攻击。这与 #49971 的 RFC 形成互补，预示着安全架构将是下一阶段重点。
- **执行混淆检测开关**：Issue [#50295](https://github.com/openclaw/openclaw/issues/50295) 请求为 `exec` 工具增加混淆检测的配置开关，当前硬编码的检测过于严格导致误报，影响了自动化工作流。
- **语音与多模态**：PR [#64318](https://github.com/openclaw/openclaw/pull/64318) 正在开发统一 Amazon 插件，集成 Nova Sonic 实时语音、Polly TTS 和 Transcribe STT，填补了语音交互能力的空白。

## 7. 用户反馈摘要
- **痛点**：用户对智能体“假装工作”（接受任务但不执行）感到沮丧；配置复杂度较高，尤其是第三方 Provider 的配置（如 OpenRouter, LM Studio）经常出现兼容性问题。
- **场景**：多智能体协作（Subagents）、长时记忆（Memory Flush）、本地模型集成是主要的高频使用场景。
- **评价**：社区对项目的架构设计（如 MCP 协议、多 Provider 支持）给予高度评价，但对跨平台客户端缺失和偶发的执行不稳定性表示不满。

## 8. 待处理积压
- **Issue [#75](https://github.com/openclaw/openclaw/issues/75)**：Linux/Windows 客户端支持请求已开放数月，虽有 `help wanted` 标签但进展缓慢，建议官方明确 Roadmap 或引导社区贡献。
- **Issue [#12590](https://github.com/openclaw/openclaw/issues/12590)**：`memoryFlush` 机制不可靠，仅在其他压缩周期触发，影响长期记忆管理稳定性。
- **Issue [#36399](https://github.com/openclaw/openclaw/issues/36399)**：OAuth 流程中的挂起问题，严重影响特定 Provider 的使用体验，需进一步排查底层 HTTP 重试机制。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比分析报告 (2026-04-19)

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正处于从“单一对话工具”向“多智能体协作平台”转型的关键期。**OpenClaw**、**NanoBot** 等头部项目在多智能体路由、记忆系统架构上进行了深度探索，而 **Zeroclaw**、**NanoClaw** 则致力于通过架构重构解决扩展性与模块化难题。当前生态的核心矛盾在于：**日益增长的复杂任务执行需求与系统稳定性、可靠性之间的差距**。社区反馈显示，用户对“虚假执行”（接受任务但不执行）、跨平台客户端缺失、本地模型兼容性等问题的容忍度正在降低，安全隔离、记忆持久化、多模态交互成为下一阶段技术竞争的焦点。

## 2. 各项目活跃度对比

| 项目名称 | Issues (更新/新增) | PRs (更新/合并) | 版本发布情况 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 (132 merged) | v2026.4.19-beta.1 | **极高活跃**，核心功能迭代快，但存在严重稳定性回归问题 |
| **NanoBot** | 28 | 54 (38 merged) | 无 | **高活跃**，代码质量高，社区反馈积极响应，架构优化中 |
| **Zeroclaw** | 50 | 40 (17 merged) | v0.7.0-beta.1047 (重大重构) | **高活跃**，处于架构转型期，部署摩擦较大 |
| **IronClaw** | 18 (8 open) | 50 (7 merged) | 无 | **高活跃**，聚焦安全加固与测试，企业级特征明显 |
| **NanoClaw** | - | 15 merged | 无 (v2 预览中) | **中高活跃**，v1 清理与模块化重构，发布前冲刺阶段 |
| **NullClaw** | 6 | 13 (0 merged) | 无 | **中活跃**，功能开发活跃但审核滞后，积压明显 |
| **Hermes Agent**| - | ~5 merged | 无 (v0.10.0 stable) | **中活跃**，修复跨平台 Bug，架构演进至控制平面 |
| **CoPaw** | 14 | 8 | 无 | **中活跃**，重构期，Windows 端与迁移问题严重 |
| **PicoClaw** | - | 6 pending | v0.2.6-nightly | **中活跃**，新版本存在严重认证 Bug，急需修复 |
| **Moltis** | 4 | 11 (6 merged) | 无 | **中活跃**，文档与基础设施完善中，功能稳步推进 |
| **LobsterAI** | 1 closed | 0 | 无 | **低活跃**，关键功能 PR 濒临过期，维护停滞风险 |

## 3. OpenClaw 在生态中的定位

作为生态的核心参照项目，OpenClaw 展现出了明显的**平台化与生态化特征**：
*   **社区规模优势**：单日 500 条 Issue/PR 的活跃度远超同类项目，拥有最庞大的用户基布和反馈渠道。
*   **功能大而全**：在多智能体协作、多 Provider 集成、MCP 协议支持上处于领先地位。今日修复的“跨智能体子代理路由”问题，显示了其在多租户场景下的技术深度。
*   **劣势与挑战**：**稳定性是最大短板**。相比 NanoBot 的代码整洁度，OpenClaw 饱受“任务虚假回复”和“执行可靠性”困扰。用户对客户端跨平台支持（Linux/Windows）的强烈呼声表明其在产品化体验上仍有短板。
*   **对比差异**：OpenClaw 试图构建“操作系统”级别的 Agent 平台，而 NanoBot 更像是一个精简的“内核”，Zeroclaw 和 IronClaw 则分别侧重于“安全沙箱”和“企业级网关”。

## 4. 共同关注的技术方向

1.  **记忆系统的持久化与可靠性**
    *   **涉及项目**：OpenClaw, NanoBot, CoPaw, Zeroclaw。
    *   **具体诉求**：社区不再满足于简单的 Session 记忆，而是追求类似 **"Dream Mode"** (Zeroclaw, NanoBot) 的后台整理机制，以及更细粒度的记忆压缩控制。CoPaw 和 NanoBot 都在重构记忆模块以支持 RAG 和知识图谱。

2.  **多智能体架构与路由策略**
    *   **涉及项目**：OpenClaw, NanoBot, Hermes Agent, IronClaw。
    *   **具体诉求**：OpenClaw 修复了子代理路由问题；Hermes Agent 启动了 "Brain" 控制平面；IronClaw 关注 Job/Routine 引擎。架构正从单线程向事件驱动、多智能体循环演进。

3.  **安全隔离与权限治理**
    *   **涉及项目**：Zeroclaw, IronClaw, NullClaw, OpenClaw。
    *   **具体诉求**：Sandbox 逃逸防护、跨租户凭证隔离、OTP 门控操作成为标配需求。Zeroclaw 甚至出现了用户对沙箱策略过于严格的抱怨，反映出安全与便利性的博弈。

4.  **本地化与边缘部署**
    *   **涉及项目**：PicoClaw, Hermes Agent, LobsterAI。
    *   **具体诉求**：对 Ollama/LM Studio 的适配、Termux/Android 支持、以及本地模型 JSON 解析容错是高频需求，显示出“数据不出域”的强烈趋势。

## 5. 差异化定位分析

| 项目 | 核心定位 | 关键技术差异点 | 目标用户 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 全能型智能体平台 | 多智能体路由、多通道集成、生态丰富 | 大众用户、企业团队 |
| **NanoBot** | 轻量级科研级助手 | 代码架构整洁、成本优化路由、记忆机制灵活 | 开发者、研究人员 |
| **Zeroclaw** | 安全优先的企业级框架 | Cargo Workspace 架构、严格沙箱、配置 Schema 迁移 | 企业级自托管用户 |
| **IronClaw** | 基础设施与安全网关 | 凭证管理、E2E 测试套件、跨平台 Gateway 运维 | 运维人员、平台开发者 |
| **Hermes Agent**| 可扩展代理平台 | Brain 控制平面、Cron 任务增强、兼容性修复 | 进阶极客、自动化场景 |
| **PicoClaw** | 边缘/移动端 AI | Android 自动化、Termux 支持、轻量化 | 移动端开发者、IoT 场景 |
| **NanoClaw** | 模块化个人助理 | v2 模块化架构、多模型回退、隐私保护 | 注重隐私的个人用户 |

## 6. 社区热度与成熟度

*   **快速迭代期**：**Zeroclaw** 刚完成重大架构重构，正处于磨合期；**NanoClaw** 处于 v2 发布前夕，代码清理频繁；**OpenClaw** 保持着高频的版本发布，但社区对稳定性的不满正在积聚。
*   **质量巩固期**：**NanoBot** 在获得好评后，正专注于修复边缘 Bug 和优化体验；**IronClaw** 重点修补安全漏洞和测试覆盖率，显示出成熟项目的特征。
*   **探索与萌芽期**：**PicoClaw** 和 **Moltis** 在特定领域（边缘计算、RAG）进行功能探索，社区规模较小但方向明确。
*   **停滞风险期**：**LobsterAI** 核心功能 PR 长期未合并，活跃度低；**TinyClaw** 等项目无动态，需警惕成为僵尸项目。

## 7. 值得关注的趋势信号

1.  **“虚假执行”成为信任危机的新焦点**：OpenClaw 中关于智能体回复 "One sec" 但不执行任务的反馈量极高。这表明随着 Agent 自主性增强，**可观测性和执行确定性** 成为用户信任的核心。开发者需警惕 LLM 的“敷衍”行为，需引入更严格的执行验证机制。
2.  **架构向“控制平面”与“数据平面”分离演进**：Hermes Agent 的 "Brain" 架构、Zeroclaw 的 Workspace 重构、NanoClaw 的模块化，均显示出项目正在解耦决策逻辑与执行工具。这将提升系统的可测试性和扩展性。
3.  **记忆机制从“挂载”走向“内化”**：多个项目提及 Auto-Memory、Dream Mode 和记忆索引。趋势表明，记忆不再是简单的向量库检索，而是集成到 Agent 运行时生命周期中的主动整理过程。
4.  **多模型路由成为标配能力**：NanoBot 的轻量级路由器、NanoClaw 的 Codex SDK 回退机制，显示出项目正致力于降低单一 LLM 依赖，通过智能路由实现成本与质量的动态平衡。

**建议**：对于技术选型者，若追求稳定与架构现代化，**NanoBot** 是优选；若需要强大的生态与多端集成，**OpenClaw** 仍是不二之选，但需关注其稳定性风险；若侧重安全与自托管，**Zeroclaw** 和 **IronClaw** 值得关注。开发者应重点关注“记忆系统”与“多模型路由”的技术实现，这是当前构建竞争壁垒的关键。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-19)

## 1. 今日速览
NanoBot 项目今日保持了极高的活跃度，过去24小时共有 28 条 Issue 更新和 54 条 PR 更新，整体处于快速迭代状态。社区贡献活跃，共关闭了 38 个 PR，显示项目在代码审核与合并方面效率较高。重点进展集中在记忆系统的优化配置、语音交互延迟监控以及系统稳定性的修复。虽然没有发布新版本，但主分支已积累了大量关于成本优化（模型路由）和错误处理的改进，显示出项目正朝向更成熟、更可定制的方向演进。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目在核心功能和稳定性修复上取得了显著进展，共合并/关闭了 38 个 PR，主要推进如下：

*   **成本优化与智能路由**：PR #3109 引入了轻量级模型路由器，能自动将简单对话任务路由到更便宜的模型，保留复杂任务给主模型，显著降低运行成本。
*   **记忆系统可控性增强**：PR #3285 针对 Issue #3270 的需求，使记忆压缩比率（`consolidationRatio`）可配置，用户可在记忆保真度和上下文压缩效率之间寻找平衡。
*   **稳定性修复**：PR #3289 修复了 GitStore 在工作区错误初始化嵌套仓库并覆盖 `.gitignore` 的严重问题；PR #3271 修复了在非 TTY 环境（如 Docker/Pipe）下输出包含乱码转义序列的问题。
*   **开发者体验改进**：PR #3287 添加了标准的 Issue 模板，有助于规范社区反馈，提高问题定位效率；PR #3125 加固了 Cron 工具的参数校验，防止重复调用错误。

## 4. 社区热点
*   **[深度讨论] 记忆系统在长期项目中的局限性 (Issue #3227)**
    链接: [HKUDS/nanobot Issue #3227](https://github.com/HKUDS/nanobot/issues/3227)
    该 Issue 获得了 13 条评论和 4 个点赞。用户 @kxsk-git 在赞赏代码整洁的同时，深入分析了当前记忆系统（Session → history.jsonl → MEMORY.md）在长周期、大型项目中细节丢失的问题。这反映了社区对 Agent 长期记忆能力的极高期待，目前的 "Dream" 机制可能无法满足精细化的上下文保留需求。

*   **[功能争议] Dream 进程引入噪声 (Issue #3282)**
    链接: [HKUDS/nanobot Issue #3282](https://github.com/HKUDS/nanobot/issues/3282)
    用户反馈更新后的 Dream 进程导致 Skills 文件发生非预期的漂移，引入了噪声。这引发了关于 Agent "自主进化" 与 "用户控制权" 之间平衡的讨论。

*   **[配置困惑] 环境变量解析失败 (Issue #3251)**
    链接: [HKUDS/nanobot Issue #3251](https://github.com/HKUDS/nanobot/issues/3251)
    用户报告 `config.json` 支持 `${VAR}` 语法但未实际解析，导致鉴权静默失败。此类 Issue 频发表明配置系统的健壮性和文档清晰度仍有提升空间。

## 5. Bug 与稳定性
*   **[P0] API 网关导致的无限工具调用循环 (Issue #3220)**
    链接: [HKUDS/nanobot Issue #3220](https://github.com/HKUDS/nanobot/issues/3220)
    **描述**：当非标准 API 网关在 `finish_reason != "tool_calls"` 时注入工具调用，Agent 会进入死循环。
    **状态**：已关闭，推测已在近期提交中修复。

*   **[P1] 流式响应中断不重试 (Issue #3256)**
    链接: [HKUDS/nanobot Issue #3256](https://github.com/HKUDS/nanobot/issues/3256)
    **描述**：LLM 流式响应中途断开时，系统将部分内容视为成功，导致输出截断且不重试。
    **状态**：已关闭，已确认问题存在并讨论修复方案。

*   **[P2] Gemini Provider 认证错误 (Issue #3206)**
    链接: [HKUDS/nanobot Issue #3206](https://github.com/HKUDS/nanobot/issues/3206)
    **描述**：Gemini API 报错 "Multiple authentication credentials received"，涉及多凭证冲突。
    **状态**：开放中，正在排查 Provider 层的 Header 处理逻辑。

*   **[P2] Windows 桌面文件访问受限 (Issue #3062)**
    链接: [HKUDS/nanobot Issue #3062](https://github.com/HKUDS/nanobot/issues/3062)
    **描述**：v0.1.5 在 Windows 下无法访问桌面路径或执行 .bat/.py 文件。
    **状态**：已关闭。

## 6. 功能请求与路线图信号
*   **语音交互延迟监控 (Issue #3257 / PR #3293)**
    链接: [Issue #3257](https://github.com/HKUDS/nanobot/issues/3257) | [PR #3293](https://github.com/HKUDS/nanobot/pull/3293)
    **分析**：针对端到端语音交互高达 35-60 秒的延迟，社区提交了 PR 实现细粒度的性能指标监控。鉴于语音助手场景的重要性，该功能极大概率被纳入下个版本。

*   **Gateway 生命周期通知 (Issue #3279 / PR #3291)**
    链接: [Issue #3279](https://github.com/HKUDS/nanobot/issues/3279) | [PR #3291](https://github.com/HKUDS/nanobot/pull/3291)
    **分析**：请求支持 `on_start` / `on_stop` 钩子以便在后台服务启停时通知用户。这标志着 NanoBot 正向常驻系统服务转型，已提交实现 PR。

*   **会话级焦点工具 (Issue #3292)**
    链接: [Issue #3292](https://github.com/HKUDS/nanobot/issues/3292)
    **分析**：建议引入类似“任务看板”的持久化注意力机制，防止 Agent 在处理插话后迷失主任务。这是 Agent 架构演进的重要方向，值得长期关注。

## 7. 用户反馈摘要
*   **代码质量获赞，记忆能力遭疑**：多位资深用户称赞代码结构“整洁、轻巧”，但在处理长上下文时，现有的 Session/Dream 机制显得捉襟见肘，细节丢失严重。
*   **部署与配置门槛**：新用户在卸载、环境变量配置等方面遇到阻碍（Issue #3267, #3251），反映出项目在用户引导和错误提示方面仍有优化空间。
*   **“自主性”引发焦虑**：Dream 功能自动修改文件引发了部分用户的担忧，用户希望能对 Agent 的自主学习行为进行更精细的控制。

## 8. 待处理积压
*   **DuckDuckGo 搜索挂起问题 (Issue #2071, #2804)**
    链接: [Issue #2804](https://github.com/HKUDS/nanobot/issues/2804)
    **状态**：已关闭但需验证。
    **提醒**：使用 DuckDuckGo 作为搜索后端时，异步调用可能无限挂起，导致整个 Session 阻塞。建议维护者确认相关超时机制是否已彻底解决此问题。

*   **Wecom 长时间操作报错 (Issue #2709)**
    链接: [Issue #2709](https://github.com/HKUDS/nanobot/issues/2709)
    **状态**：开放中。
    **提醒**：涉及 Anthropic API 的流式超时限制（10分钟），影响特定通道的长时间任务稳定性，建议关注流式处理逻辑的适配。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-04-19)

## 1. 今日速览
Zeroclaw 今日迎来了项目历史上最重要的里程碑之一：发布了 **v0.7.0-beta.1047**，完成了代码库的 Cargo workspace 重构与新配置 Schema 的迁移，标志着项目架构迈向模块化新阶段。社区活跃度持续高涨，过去 24 小时内 Issues 活跃度达到 50 条，PR 更新 40 条，显示出社区对重构版本的高度关注与反馈。虽然新版本带来了结构性优化，但也引入了 Web Dashboard 构建、Docker 镜像打包等部署层面的摩擦，成为近期 Bug 反馈的集中点。此外，围绕安全沙箱逃逸与配置校验的讨论升温，反映出用户对生产环境安全性的严苛要求。

## 2. 版本发布
### v0.7.0-beta.1047 — 架构重构里程碑
**更新重点：**
- **Workspace 重构**：代码库已拆分为专注的 Crates，提升了模块化程度与编译效率。
- **配置 Schema 迁移**：引入了新的配置格式，并提供了实时迁移支持。

**破坏性变更与迁移注意：**
- 此次更新是历史最大的结构性调整，旧版配置文件可能需要迁移，建议用户在升级前备份配置，并关注是否需要运行迁移脚本。
- Docker 构建流程受影响，部分依赖路径变更（见 [PR #5879](https://github.com/zeroclaw-labs/zeroclaw/pull/5879)）。

### v0.7.1-beta.1049
- 作为 v0.7.0 的快速迭代修复版本发布。

## 3. 项目进展
今日共有 **17 个 PR 合并/关闭**，主要集中在 CI/CD 优化、架构重构后的修补及新功能支持：

- **CI 安全与发布流程重构**：PR [#5881](https://github.com/zeroclaw-labs/zeroclaw/pull/5881) 和 [#5887](https://github.com/zeroclaw-labs/zeroclaw/pull/5887) 已关闭/合并，成功将 Release Workflow 从 PAT 迁移到 GitHub App Token，提升了发布安全性与维护便捷性。
- **Docker 构建修复**：PR [#5879](https://github.com/zeroclaw-labs/zeroclaw/pull/5879) 修复了 v0.7.0 重构后 Dockerfile 缺少 workspace crate manifests 的问题，确保了容器化构建的恢复。
- **待合并关键修复**：
    - PR [#5853](https://github.com/zeroclaw-labs/zeroclaw/pull/5853) 修复了 Signal 频道中孤立 `tool_result` 导致会话崩溃的问题，目前待审核，对稳定性至关重要。
    - PR [#5774](https://github.com/zeroclaw-labs/zeroclaw/pull/5774) 修复了 Gateway 模式下 Skill 工具未注册的严重问题，等待 Maintainer Review。

## 4. 社区热点
今日讨论热度最高的议题集中在部署体验与安全配置：

1.  **[Issue #4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) [Web dashboard 构建问题]** (评论 15 条)
    - **核心诉求**：用户在多个版本中持续遭遇 "Web dashboard not available" 错误，尽管项目提供了构建指令，但桌面端与 Docker 用户仍面临较高门槛。
    - **分析**：该 Issue 已关闭，但相关反馈频繁出现，表明分发预构建 Web Assets 或优化 Docker 镜像是提升用户体验的关键。

2.  **[Issue #5509](https://github.com/zeroclaw-labs/zeroclaw/issues/5509) [Telegram 语音支持]** (评论 6 条)
    - **核心诉求**：用户强烈希望 ZeroClaw 支持 Telegram 语音消息转录，以对齐竞品 OpenClaw 的功能，降低用户交互门槛。

3.  **[Issue #5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) [Native Runtime 安全沙箱]** (评论 6 条)
    - **核心诉求**：高级用户 @perlowja 在开发金融分析 Skill 时发现，`runtime.kind = "native"` 未能按预期绕过 Docker 执行 Shell 指令，导致工作流受阻。
    - **分析**：涉及复杂的沙箱策略与 Skill 权限模型，属于高技术深度的架构讨论。

## 5. Bug 与稳定性
今日报告了多个影响工作流甚至安全性的 Bug：

- **S0 - 数据/安全风险**：
    - [Issue #5672](https://github.com/zeroclaw-labs/zeroclaw/issues/5672)：飞书机器人在 `mention_only` 模式下仍响应所有消息，可能导致信息泄露或骚扰。
    - [Issue #5415](https://github.com/zeroclaw-labs/zeroclaw/issues/5415)：Discord 频道上下文“泄露”至定时任务，导致非预期的任务执行行为。

- **S1 - 工作流阻塞**：
    - [Issue #5813](https://github.com/zeroclaw-labs/zeroclaw/issues/5813)：历史消息压缩机制导致 `tool_result` 孤立，触发 Anthropic API 400 错误，致使会话不可用。**已有修复 PR [#5853](https://github.com/zeroclaw-labs/zeroclaw/pull/5853)。**
    - [Issue #5861](https://github.com/zeroclaw-labs/zeroclaw/issues/5861)：`voice-wake` 特性在 v0.6.9 编译失败。

- **S2 - 配置与行为降级**：
    - [Issue #5809](https://github.com/zeroclaw-labs/zeroclaw/issues/5809)：Shell 安全策略误将 `git -C` 识别为非法命令（因参数小写化处理冲突）。
    - [Issue #5810](https://github.com/zeroclaw-labs/zeroclaw/issues/5810)：`security.otp.gated_actions` 配置静默接受未知 Action 名称，造成虚假的安全感。

## 6. 功能请求与路线图信号
- **v0.7.2 路线图启动**：[Issue #5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877) 已创建，明确了下一版本将专注于 Phase 1 CI 收尾、文档清理与语言标准化。
- **记忆与认知增强**：[Issue #5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) 提出 "Dream Mode"（梦境模式），建议在 Agent 空闲时进行记忆整合与反思学习，展现了社区对 Agent 自主进化能力的探索。
- **Docker 全功能镜像**：[Issue #3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) 持续获得关注，建议提供预开启所有特性（如 WhatsApp）的“Full”镜像，以降低新用户尝试成本。
- **K8s 部署支持**：[PR #5880](https://github.com/zeroclaw-labs/zeroclaw/pull/5880) 正在添加 OpenShift/K8s 部署清单，有望近期合并，增强生产环境适配能力。

## 7. 用户反馈摘要
从 Issues 讨论中提炼出以下核心反馈：
- **部署痛点**：用户普遍反映从源码构建 Web Dashboard 困难，特别是 Tauri 桌面端用户，希望官方提供更完善的二进制分发或预构建镜像。
- **文档与配置**：v0.7.0 的配置迁移虽然上线，但用户对 Schema 变更仍需适应，部分配置项（如 `runtime.kind`）的行为预期与实际不符，急需更详尽的文档说明。
- **Skill 开发体验**：高级开发者（如 @perlowja）在尝试开发复杂 Skill（如金融分析）时，受限于沙箱策略和 Python 环境默认配置，呼吁放宽默认限制或提供更灵活的容器配置方案。

## 8. 待处理积压
- **长期未决的功能请求**：[Issue #3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)（全功能 Docker 镜像）创建于 3 月 15 日，至今虽活跃但未分配 Milestone，建议团队评估是否纳入近期规划。
- **安全隐患需关注**：[Issue #5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) 提出的 Session 所有权模型缺陷（允许任意 Agent 重置其他 Session），标记为高风险，目前处于 Open 状态，建议优先排期修复。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 (2026-04-19)

## 1. 今日速览
Hermes Agent 今日呈现出极高的开发活跃度，核心聚焦于 **平台兼容性修复** 与 **架构演进**。单日产生了大量针对 Windows/macOS 系统级问题的修复 PR，并启动了代号为 "Brain" 的控制平面重构计划，显示出项目正从单一 Agent 工具向多智能体协作平台转型的迹象。社区反馈方面，非英语用户（中文）的体验痛点集中显现，促使了国际化（i18n）和编码问题的快速响应。整体来看，项目健康度良好，修复响应迅速，但核心架构变更带来的回归风险需后续关注。

## 2. 版本发布
*   **当前稳定版**: v0.10.0 (发布于 2026-04-16)
*   **今日更新**: 虽然今日未发布新版本号，但主分支合并了约 5 个关键修复 PR，预计将包含在 v0.10.1 或 v0.11.0 中。
    *   主要涉及：Gateway 并发竞态修复、Windows 环境兼容性、本地模型 JSON 解析容错等。

## 3. 项目进展
今日共关闭/合并了多项关键 PR，显著提升了系统稳定性：

*   **[[PR #12371] fix(gateway): close pending-drain and late-arrival races](https://github.com/NousResearch/hermes-agent/pull/12371)** (已合并)
    *   **意义**: 修复了 Gateway 层严重的并发竞态问题，解决了会话重启时可能导致 Agent 重复生成或丢失消息的顽疾，对所有适配器均有收益。
*   **[[PR #5171] feat(discord): prefix messages with author display name](https://github.com/NousResearch/hermes-agent/pull/5171)** (已合并)
    *   **意义**: 优化了多用户共享会话体验，解决了 Discord 频道中 Agent 无法区分发言者的问题。
*   **[[PR #12356] fix(prompt): disabled skills cache invalidation](https://github.com/NousResearch/hermes-agent/pull/12356)** (已合并)
    *   **意义**: 修复了配置热加载失效的问题，预计每轮对话可节省约 1700 tokens 的无效提示词开销。
*   **[[PR #25] Nous Portal subscription integration](https://github.com/NousResearch/hermes-agent/pull/25)** (已合并)
    *   **意义**: 完成了官方订阅集成的底层逻辑，标志着商业化基础设施就绪。

## 4. 社区热点
今日社区讨论焦点主要集中在**本地模型兼容性**与**架构扩展**两个方向：

*   **[[Issue #12350] [Brain] Control plane rollout backlog](https://github.com/NousResearch/hermes-agent/issues/12350)** 及相关系列 (#12346-#12349)
    *   **分析**: 项目维护者发布了一系列关于 "Brain" 控制平面的 Issue，规划了规则注册、灰度发布、多智能体循环等高级特性。这表明 Hermes 正在构建更复杂的自动化治理能力，社区对此保持高度关注。
*   **[[Issue #12068] Memory save tool call fails JSON parse on llama.cpp](https://github.com/NousResearch/hermes-agent/issues/12068)**
    *   **分析**: 本地模型用户反馈工具调用解析失败问题。这反映了社区对 Hermes 支持“去云端化”部署的强烈需求，维护者需关注本地模型输出格式的鲁棒性。

## 5. Bug 与稳定性
今日报告的 Bug 集中在跨平台支持和解析容错，部分已由社区快速提交修复：

1.  **[P0-严重] Windows 平台启动崩溃**
    *   **Issue**: [#12359](https://github.com/NousResearch/hermes-agent/issues/12359) - `os.kill(pid, 0)` 在 Windows 上抛出 `OSError` 导致 Gateway 启动失败。
    *   **状态**: **已有修复** [[PR #11990](https://github.com/NousResearch/hermes-agent/pull/11990)] (添加 UTF-8 编码) 及 [[PR #12374](https://github.com/NousResearch/hermes-agent/pull/12374)] (macOS/Win 进程管理修复)。

2.  **[P1-中等] LiteLLM / 本地模型返回空响应**
    *   **Issue**: [#12357](https://github.com/NousResearch/hermes-agent/issues/12357) - 模型重试 3 次后失败，提示 "Empty response"。
    *   **状态**: **待确认**。可能与上下文压缩或特定 Provider 适配有关。

3.  **[P1-中等] 技能名称非 ASCII 字符导致注册失败**
    *   **Issue**: [#12351](https://github.com/NousResearch/hermes-agent/issues/12351) - 技能名称含中文时被跳过。
    *   **状态**: **已有修复** [[PR #12366](https://github.com/NousResearch/hermes-agent/pull/12366)] (回退到目录名作为 slug)。

4.  **[P2-低] 终端白色背景兼容性**
    *   **Issue**: [#12330](https://github.com/NousResearch/hermes-agent/issues/12330) - TUI 在白色背景下文字不可读。
    *   **状态**: **待处理**。建议适配终端背景色探测或提供切换主题配置。

## 6. 功能请求与路线图信号
*   **国际化 (i18n)**: [[Issue #12375](https://github.com/NousResearch/hermes-agent/issues/12375)] 呼吁增加中文等多语言 UI 支持。鉴于中文用户群体的增长（相关 Issues #12351, #12330 均来自中文用户），此功能优先级应提升。
*   **Cron 增强**:
    *   [[Issue #10656](https://github.com/NousResearch/hermes-agent/issues/10656)] 请求脚本输出为空时跳过 LLM 调用。
    *   **进展**: [[PR #12373](https://github.com/NousResearch/hermes-agent/pull/12373)] 已实现 `wakeAgent` 开关，允许脚本自行控制是否唤醒 Agent。该功能极有可能合并并纳入下一版本。
*   **AWS Bedrock 支持**: [[PR #12365](https://github.com/NousResearch/hermes-agent/pull/12365)] 增加了对 AWS Bedrock 辅助任务的支持，填补了云厂商集成的空白。

## 7. 用户反馈摘要
*   **痛点**:
    *   **本地模型适配难**: 用户在使用 `llama.cpp` 或 LiteLLM 对接时，频繁遇到 JSON 解析错误或空响应，提示词格式兼容性需加强。
    *   **跨平台体验割裂**: Windows 用户面临编码问题和进程管理差异，体验不如 Linux/macOS 顺滑。
    *   **Token 浪费**: 已关闭的 #12294 显示，用户对配置禁用的技能仍占用 Prompt Token 感到不满（已修复）。
*   **满意点**:
    *   社区对 **Gateway** 的跨平台统一架构表示认可，虽然有 Bug，但修复迅速（如 Telegram/WeChat 互通）。
    *   **Cron 功能**的可编程性受到高级用户青睐，希望拥有更精细的控制权（如 `wakeAgent`）。

## 8. 待处理积压
*   **[[Issue #5861] Silent cron delivery failures](https://github.com/NousResearch/hermes-agent/issues/5861)** (创建于 04-07): Cron 任务投递失败但状态显示 "ok"。这是一个影响可靠性的老问题，长期未得到彻底解决，建议优先排期。
*   **[[Issue #7863] suppressed_sources config dead code](https://github.com/NousResearch/hermes-agent/issues/7863)** (创建于 04-11): 配置文件中的 `suppressed_sources` 字段无效。属于配置层面的技术债务，影响用户配置信任度。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-04-19)

## 1. 今日速览
PicoClaw 今日活跃度较高，发布了最新的 `nightly` 构建版本（v0.2.6），社区反馈主要集中在 Provider 兼容性与认证问题上。虽然过去24小时没有合并 PR（3个已关闭 PR 实为垃圾/无效提交），但有 6 个重要的功能增强与重构 PR 正在等待审核，显示出项目正在为下一阶段的架构优化做准备。值得注意的是，v0.2.6 版本发布后，出现了多个关于 API Key 丢失和认证失败的严重 Bug 报告，需维护者紧急排查。

## 2. 版本发布
- **[nightly: Nightly Build v0.2.6-nightly.20260419.6126ede9](https://github.com/sipeed/picoclaw/releases/tag/nightly)**
  - **更新内容**：自动构建的每日快照版本，包含截至最新的代码提交。
  - **注意事项**：官方提示此为自动构建版本，可能不稳定，建议谨慎用于生产环境。鉴于今日反馈的 Provider 认证问题，建议用户暂缓升级或做好回退准备。

## 3. 项目进展
今日项目主要在架构重构与工具链增强方面推进，代码层面的活跃度较高：

- **架构重构**：PR [#2585](https://github.com/sipeed/picoclaw/pull/2585) 提出了 Agent Looper 重构计划（阶段2），将原 `loop.go`（约1500行）拆分为模块化的 Pipeline 架构，这将极大提升代码的可维护性。
- **功能增强**：PR [#2410](https://github.com/sipeed/picoclaw/pull/2410) 正在推进基于 Chrome DevTools Protocol (CDP) 的浏览器自动化功能，呼应了路线图中的高级工具需求。
- **工具链完善**：PR [#2535](https://github.com/sipeed/picoclaw/pull/2535) 增加了 MCP slash 命令支持，提升了交互体验。
- **清理工作**：3 个已关闭的 PR（[#2577](https://github.com/sipeed/picoclaw/pull/2577), [#2576](https://github.com/sipeed/picoclaw/pull/2576), [#2575](https://github.com/sipeed/picoclaw/pull/2575)）均为无效提交，已被维护者及时清理。

## 4. 社区热点
今日讨论热度最高的议题集中在移动端支持与安全性增强：

- **[Issue #292](https://github.com/sipeed/picoclaw/issues/292) [Android 自动化]**：热度最高（👍 1, 评论 8），用户强烈希望 PicoClaw 能作为 LLM 与 Android 手机之间的桥梁，实现类似 "Botdrop" 的自动化操作。这表明 "AI 控制实体设备" 是用户的核心痛点之一。
- **[Issue #286](https://github.com/sipeed/picoclaw/issues/286) [Termux 支持]**：评论数达 8 条，用户希望能在 Android 手机上直接运行 PicoClaw，这反映了用户对轻量化、便携式 AI 助手的强烈需求。
- **[Issue #1067](https://github.com/sipeed/picoclaw/issues/1067) [安全认证]**：评论 4 条，用户指出目前系统缺乏认证机制，存在安全隐患，建议集成 Authula。这显示了企业级用户对安全性的关注正在上升。

## 5. Bug 与稳定性
今日报告了多个影响核心功能的严重 Bug，主要集中在 **Provider 认证与兼容性** 方面，建议优先处理：

### 严重
- **[Issue #2578](https://github.com/sipeed/picoclaw/issues/2578) [API Key 丢失]**：v0.2.6 版本中 `openai_compat` provider 发送请求时丢失 `Authorization` header，导致所有基于 HTTP 的模型调用失败。这是配置层面的严重回归问题。
- **[Issue #2584](https://github.com/sipeed/picoclaw/issues/2584) [DeepSeek 认证失败]**：DeepSeek provider 在配置有效 API Key 的情况下返回 401 "Authentication Fails"。

### 一般
- **[Issue #2583](https://github.com/sipeed/picoclaw/issues/2583) [Ollama 兼容性]**：使用 Ollama 调用 qwen3.5 或 gemma4 模型时返回空响应或报错。
- **[Issue #2046](https://github.com/sipeed/picoclaw/issues/2046) [LongCat 调用失败]**：PicoClaw 无法通过 LongCat API 调用工具。

> 注：针对流输出的问题，已有 PR [#2581](https://github.com/sipeed/picoclaw/pull/2581) 试图修复 Codex 流消息恢复的问题，等待合并。

## 6. 功能请求与路线图信号
结合 Issue 和 PR，以下功能方向清晰，可能被纳入近期版本：

- **Web Search 自动降级**：[Issue #2582](https://github.com/sipeed/picoclaw/issues/2582) 建议在 Search API 额度耗尽时自动切换备用源，这是提升服务稳定性的重要特性。
- **飞书集成优化**：[Issue #2580](https://github.com/sipeed/picoclaw/issues/2580) 希望优化中国用户的飞书体验，支持流式输出和状态显示。考虑到 PicoClaw 的轻量化定位，这可能会作为一个可选插件实现。
- **企业级可观测性**：[Issue #1731](https://github.com/sipeed/picoclaw/issues/1731) 提出的 OTel GenAI 支持符合企业级部署趋势。

## 7. 用户反馈摘要
- **痛点**：v0.2.6 版本的认证问题（#2578, #2584）导致用户无法正常使用第三方模型，严重影响了升级体验；Ollama 本地模型兼容性依然存在边缘问题。
- **场景**：用户越来越倾向于将 PicoClaw 部署在移动端或边缘设备上，作为个人助理控制手机或本地服务。
- **满意度**：用户对项目的发展方向（如 Android 自动化、MCP 工具集成）持积极态度，但对近期版本的稳定性（尤其是 Provider 配置）表示担忧。

## 8. 待处理积压
以下高优先级 Issue 长期未关闭，建议维护者关注：

- **[Issue #292](https://github.com/sipeed/picoclaw/issues/292) [High Priority]**：Android 自动化功能是高票需求，目前仍处于 Open 状态，虽未有关闭日期，但仍是路线图上的重点。
- **[PR #2313](https://github.com/sipeed/picoclaw/pull/2313)**：涉及多用户支持与安全加固的大型 PR，自 4 月初开启至今未合并，可能需要更多审核资源，以防功能冲突。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-19)

## 1. 今日速览
NanoClaw 今日呈现出极高的开发活跃度，核心架构重构进入密集收尾阶段。过去 24 小时内共有 **15 个 PR 被合并或关闭**，主要集中在模块化重构、v1 代码清理及新 Channel 集成上，标志着项目正快速向 v2 版本演进。社区方面，用户对 Linux 环境部署及去中心化通信协议的需求明显增加，同时也暴露了定时任务模块在处理群组上下文时的稳定性问题。整体来看，项目正处于架构升级的关键转折点，代码质量与功能扩展并重。

## 2. 版本发布
**无新版本发布**。虽然今日无正式 Release，但根据 PR #1836 (docs: add v2 preview announcement) 和 PR #1838 (v1 removal) 的动向推测，项目正处于 v2 版本发布前的预览与代码清理阶段。

## 3. 项目进展
今日项目进展显著，核心架构“模块化重构”取得重大突破，多项功能性 PR 顺利合入：

*   **架构重构与清理**：这是今日的重头戏。维护者 @gavrielc 连续合并了 7 个重构相关 PR（#1838, #1839, #1840, #1842, #1847, #1848, #1849, #1851）。成功移除了 v1 遗留代码，搭建了模块注册机制，并将权限、审批、调度 和 Agent 间通信等核心功能从核心代码中剥离为独立模块。此举将极大提升后续的可维护性与扩展性。
*   **新 Channel 支持**：PR #1853 合并，正式引入 **CLI Channel**，用户现可直接通过终端与 Agent 交互；PR #1837 合并，增加了 Paperclip webhook 端点，便于外部唤醒 Agent。
*   **Provider 增强**：PR #1852 合并，添加了 **OpenAI Codex SDK 作为备选 Provider**，当 Claude 遇到限流或认证错误时可自动回退，增强了服务的鲁棒性。
*   **部署优化**：PR #1637 合并，正式支持 **Docker 与 CasaOS 部署**，大幅降低了自托管用户的门槛。
*   **Bug 修复**：PR #1856 修复了 `archive all` 指令导致的数据同步问题；PR #1844 修复了自动生成时间戳的格式问题。

## 4. 社区热点
今日社区关注度最高的问题依然是关于生态扩展与平台兼容性：

*   **[Issue #1413] Add Matrix as a channel**：获得 4 个赞。用户强烈希望能接入 Matrix（去中心化通信协议），以服务注重隐私和自托管的社区，这符合 NanoClaw "Personal AI Assistant" 的定位。
*   **[Issue #1850] Linux OAuth Token Authentication Issue**：由 @vapolaborium 提出。用户在 Linux (Debian/Proxmox) 环境下部署时遇到 MITM 代理失败及 Token 刷新问题。这反映了核心用户群（自托管开发者）在非 Docker 环境下的痛点，需引起重视。

## 5. Bug 与稳定性
今日报告了数个影响使用体验的 Bug，部分涉及核心逻辑：

*   **[严重] 定时任务重复执行问题 (Issue #1855)**：在 `context_mode='group'` 模式下，定时任务导致共享会话重建，进而引发主聊天 Agent 重复执行工具操作。目前尚未有修复 PR。
*   **[中等] 隐私泄露风险 (Issue #1854)**：定时任务未能正确处理 "thinking" 输出，导致内部思考过程以明文形式泄露给用户，违背了 "exit silently" 指令。目前尚未有修复 PR。
*   **[中等] Linux 认证失败 (Issue #1850)**：Linux 环境下 OAuth Token 认证及自动刷新机制失效。
*   **[已修复] 数据同步问题 (PR #1856)**：`archive all` 指令在本地解析前未与 Gmail 同步，导致 "split-brain" 问题，现已修复。

## 6. 功能请求与路线图信号
结合今日动向，项目路线图信号清晰：

*   **多模态与记忆**：PR #1841 (auto-evo) 正在寻求合并，旨在为群组注入持久化策略记忆，这可能成为 v2 的重要特性。
*   **集成扩展**：PR #1835 (CalDAV) 和 #1834 (Blossom) 已提交，显示社区正在积极推动日历集成与去中心化媒体托管功能。
*   **多模型支持**：随着 Codex SDK 的合入 (PR #1852) 及 Codex Provider 的 PR (PR #1843) 提交，NanoClaw 正快速演变为多模型支持的通用 Agent 平台。

## 7. 用户反馈摘要
从 Issues 讨论中提炼出以下痛点：
*   **自托管体验**：Linux 用户在配置认证代理时遇到困难，官方文档或默认配置可能需要针对非 Docker 环境进行优化。
*   **群组模式稳定性**：用户开始尝试在生产环境使用 `context_mode='group'` 的高级特性，但遭遇了任务调度与会话管理冲突的 Bug，说明该功能尚需打磨。
*   **隐私控制**：用户对 Agent 内部思考过程的可见性有严格预期，泄露问题影响了用户对 Agent "可控性" 的信任。

## 8. 待处理积压
*   **[Issue #1413] Matrix Channel 支持**：该请求已开放近一个月，热度较高。考虑到今日已合并 CLI Channel 和 Codex 支持，建议社区或维护者评估是否纳入近期开发计划。
*   **[PR #1845] 时间戳格式修复**：该 PR 处于 Open 状态，旨在解决与 #1844 相同的问题，维护者需确认是否合并或关闭重复项。
*   **[Issue #1855/1854] 定时任务群组模式 Bug**：作为今日报告的严重功能缺陷，建议维护者优先排查。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-04-19)

## 1. 今日速览
NullClaw 项目今日呈现高度活跃状态，核心开发进度显著提速。过去24小时内，项目收到了 **13 个全新的 Pull Request**，主要集中在工具定制化系统、Agent 交互架构优化及通道支持增强上，尽管目前尚无 PR 被合并，这表明项目正处于密集的功能开发与代码审查阶段。Issues 方面，虽然新增/活跃问题较少（6条），但涉及 Homebrew 安装路径写死导致的静默故障 (#354) 和工具调用解析错误 (#408) 值得开发者重点关注。整体而言，项目正从单一功能向更复杂的工具编排与企业级管理能力演进。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日无 PR 合并记录，但有 13 个功能性 PR 提交，显示了维护者 `@manelsen` 极高的开发活跃度。重点进展如下：

*   **架构重构与并发支持**：PR [#845](https://github.com/nullclaw/nullclaw/pull/845) 引入了入站路由器与中途注入基础设施，这是实现非阻塞交互式体验的关键底层架构更新，为后续多任务处理打下基础。
*   **工具定制化系统大升级**：维护者提交了一系列 PR（[#834](https://github.com/nullclaw/nullclaw/pull/834), [#835](https://github.com/nullclaw/nullclaw/pull/835), [#836](https://github.com/nullclaw/nullclaw/pull/836), [#837](https://github.com/nullclaw/nullclaw/pull/837)），构建了完整的工具定制体系。支持基于触发词的优先级排序、外部配置文件加载及动态参数管理。这表明项目正在大幅提升 Agent 对工具调用的精准控制能力。
*   **部署与运维增强**：PR [#770](https://github.com/nullclaw/nullclaw/pull/770) 提出了 REST Admin API，旨在为网关提供运行时状态监控与配置管理接口；PR [#842](https://github.com/nullclaw/nullclaw/pull/842) 新增了 `--workspace` 标志，解决了多实例运行时的路径冲突问题。

## 4. 社区热点
今日社区关注度较高的议题主要集中在部署与功能限制方面：

*   **Homebrew 升级导致服务静默失效**：Issue [#354](https://github.com/nullclaw/nullclaw/issues/354) 再次活跃。用户反馈通过 `brew upgrade` 升级后，服务因 LaunchAgent plist 中写死了版本化路径（如 `/opt/homebrew/Cellar/nullclaw/2026.3.5/...`）而无法启动。这是一个影响广泛的部署体验问题，亟需修复。
*   **钉钉通道单向限制**：Issue [#376](https://github.com/nullclaw/nullclaw/issues/376) 讨论了钉钉目前仅支持发送消息而无法接收回复的问题，用户希望能实现完整的双向交互能力。
*   **Tailscale 组网下的 Gateway 部署疑难**：Issue [#826](https://github.com/nullclaw/nullclaw/issues/826) 中，用户在使用 Tailscale 连接 VPS 运行 Gateway 时遇到 `NotImplemented` 错误，反映了在网络穿透场景下的配置复杂性。

## 5. Bug 与稳定性
今日报告的关键 Bug 主要涉及解析逻辑与运行时环境：

*   **严重：工具调用解析错误**：Issue [#408](https://github.com/nullclaw/nullclaw/issues/408) 指出，LLM 生成的合法 JSON 工具调用被错误解析，工具名被识别为冒号 `:` 而非实际函数名。这可能导致 Agent 在执行工具链时完全失效。
*   **高：Homebrew 服务安装路径写死**：Issue [#354](https://github.com/nullclaw/nullclaw/issues/354) 涉及路径硬编码，导致版本升级后服务中断。
*   **中：Docker/配置目录写入失败**：已有修复 PR [#843](https://github.com/nullclaw/nullclaw/pull/843) 针对 Issue #763 中提到的 `KeyWriteFailed` 错误，解决了在 Docker 环境下因权限问题导致的配置保存崩溃。
*   **中：NoResponseContent 错误**：Issue [#665](https://github.com/nullclaw/nullclaw/issues/665) 报告在特定模型下运行出现无响应内容错误，涉及后端模型兼容性。

## 6. 功能请求与路线图信号
*   **Web 搜索增强**：Issue [#623](https://github.com/nullclaw/nullclaw/issues/623) 建议集成 `ddgs` 元搜索引擎库以增强 `web_search` 工具能力。
*   **Admin API 标准化**：PR [#770](https://github.com/nullclaw/nullclaw/pull/770) 暗示了项目将支持轻量级客户端（如 iOS App、CLI Dashboard），通过 REST API 进行管理是下一阶段的重要路线图信号。
*   **E2EE 加密支持**：PR [#838](https://github.com/nullclaw/nullclaw/pull/838) 添加了对 Matrix pantalaimon 代理的支持，表明项目对隐私加密通信的重视。

## 7. 用户反馈摘要
*   **痛点：安装与升级体验**：Homebrew 用户强烈希望能自动处理路径变更，避免每次升级后的手动调试（#354）。
*   **痛点：源码编译版本信息缺失**：用户希望源码安装也能显示具体的版本号或 Hash，而非模糊的 "dev" (#821，已关闭)。
*   **场景：多工作区需求**：用户需要在同一台机器上运行多个 Gateway 实例指向不同工作目录，PR #842 正是响应了这一需求。
*   **场景：嵌入式/IoT 部署**：关于 Tailscale 和 Gateway 的讨论 (#826) 显示出部分用户尝试将 NullClaw 部署在边缘设备或私有网络中。

## 8. 待处理积压
*   **PR #770 (REST Admin API)**：自 4 月 5 日开启至今未合并，该功能对生态建设至关重要，建议维护者优先审查。
*   **Issue #354 (Homebrew Path)**：作为长期遗留问题，严重影响 macOS 用户的升级体验，建议列入修复计划。
*   **Issue #665 (NoResponseContent)**：涉及特定模型运行时的稳定性，目前仅有少量评论，需进一步排查。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 (2026-04-19)

## 1. 今日速览
IronClaw 项目今日维持高热度开发状态，Issue 活跃度显著提升（新开/活跃 8 条，关闭 10 条），PR 更新量达 50 条，显示出团队在功能迭代与质量保障上的双重发力。今日重心集中在**安全性增强**与**架构重构**，修复了多项关键安全漏洞（如跨租户凭证回退、Shell 注入风险），并持续推进 Gateway 平台层的边界划分（Epic #2599）。同时，E2E 测试套件经历了大规模修复与加固，表明项目正处于发布前的稳定性攻坚阶段。总体来看，项目健康度良好，核心模块正在经历严格的代码审查与测试验证。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 7 个 PR 合并或关闭，主要涉及引擎增强、安全修复及测试稳定性提升：

*   **引擎逻辑增强**：[PR #2531](https://github.com/nearai/ironclaw/pull/2531) 已合并，为 CodeAct 脚本增加了 `FINAL`/`FINAL_VAR` 的 await 支持及循环保护机制；[PR #2570](https://github.com/nearai/ironclaw/pull/2570) 修复了事件驱动任务无法重新触发的问题，提升了 Agent 任务调度的鲁棒性。
*   **安全性修复**：针对高严重性漏洞，团队处理了跨租户凭证回退问题（关联 Issue [#2069](https://github.com/nearai/ironclaw/issues/2069) 已关闭），相关安全策略正在 [PR #2381](https://github.com/nearai/ironclaw/pull/2381) 中落实，严格隔离了 Job 创建者的权限。
*   **测试基础设施**：[PR #2656](https://github.com/nearai/ironclaw/pull/2656) 修复了 E2E 测试选择器的严格模式冲突，解决了测试不稳定的问题。
*   **架构重构**：[PR #2617](https://github.com/nearai/ironclaw/pull/2617) 持续推进类型安全重构，将 `extension_name` 等字段迁移为强类型 Newtypes，减少了运行时错误风险。

## 4. 社区热点
今日最受关注的讨论集中在功能边界与用户体验限制上：

*   **Skill 大小限制争议**：[Issue #2636](https://github.com/nearai/ironclaw/issues/2636) 反映 Skill 安装包大小限制（65536 bytes）导致内容过大无法安装。用户指出“同类项目无此限制”，引发对 Agent 扩展能力的讨论。目前 Issue 处于 Open 状态，需关注官方是否会调整存储策略或放宽限制。
*   **多账户凭证支持**：核心贡献者 @ilblackdragon 发起 [Issue #2642](https://github.com/nearai/ironclaw/issues/2642)，提议支持多账户凭证配置文件。这直击当前 Agent 只能绑定单一服务账号的痛点，预计将是后续版本的路线图重点。
*   **Gateway 架构重构**：[Issue #2599](https://github.com/nearai/ironclaw/issues/2599) (Epic) 继续引领架构讨论，旨在建立严格的 Feature Boundaries 与 Crate Guardrails。这是项目走向模块化、可维护性的关键一步。

## 5. Bug 与稳定性
今日报告并处理了多项关键 Bug，部分已对应修复方案：

1.  **[HIGH] MCP 服务器命令注入风险**：[Issue #1882](https://github.com/nearai/ironclaw/issues/1882) 指出 MCP 服务器名称验证缺乏 Shell 元字符防护。**状态**：已关闭（推测已在安全更新中修复）。
2.  **[MEDIUM] Routine 引擎卡死**：[Issue #2655](https://github.com/nearai/ironclaw/issues/2655) 报告当关联 Job 处于 Pending 状态超时或崩溃时，Routine Run 无法终结。**修复进度**：已有 [PR #2658](https://github.com/nearai/ironclaw/pull/2658) 提交修复，正在审核中。
3.  **[MEDIUM] Secrets 存储不可用**：[Issue #1820](https://github.com/nearai/ironclaw/issues/1820) 涉及 API Key 存储失败，影响了 OpenRoute 模型配置。**状态**：已关闭。
4.  **[LOW] Telegram E2E 测试失败**：[Issue #2624](https://github.com/nearai/ironclaw/issues/2624) 显示 Telegram 端到端激活流程存在 401 错误，影响了 CI 流程。

## 6. 功能请求与路线图信号
*   **Meeting Intelligence Pipeline** ([Issue #91](https://github.com/nearai/ironclaw/issues/91))：尽管创建于 2 月，今日再次活跃。该功能涵盖录音、转录、行动项提取及主动跟进，属于 P2 优先级跨领域功能，显示出社区对 Agent 主动能力的强烈需求。
*   **多账户凭证配置** ([Issue #2642](https://github.com/nearai/ironclaw/issues/2642))：针对多 Gmail/Notion 账户场景的架构调整。
*   **Aliyun Coding Plan 支持**：[PR #1446](https://github.com/nearai/ironclaw/pull/1446) 提交了阿里云百炼的 Provider 适配，虽然目前标记为 XL 级别改动且贡献者为 New，但这表明项目正在拓展对非西方云厂商的兼容性。

## 7. 用户反馈摘要
*   **痛点**：用户对技能包的大小限制表示不满（Issue #2636），认为这限制了复杂技能的部署。
*   **网络环境**：有用户反馈 DNS 解析失败导致 `NEARAI_AUTH_URL` 错误（Issue #1826），希望在网络不可达时有更优雅的降级处理而非直接报错。
*   **体验优化**：Dashboard 刷新循环 wiping contents 的问题（Issue #2410）已修复，用户对 UI 稳定性的诉求得到响应。

## 8. 待处理积压
*   **[PR #1446] Aliyun 支持**：该 PR 体积庞大（XL），自 3 月 20 日开启至今未合并，建议维护者优先审查或分拆以减少合并冲突风险。
*   **[PR #1869] CLI 监听器优化**：涉及 `--cli-only` 模式的修复，标记为 Size L，自 4 月 1 日开启，需关注其对 WASM channel endpoints 的影响审查进度。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-19)

## 1. 今日速览
今日 LobsterAI 项目整体活跃度较低，处于平稳维护期。过去 24 小时内无代码合并，但有 1 个 Issue 成功关闭，显示维护者对用户反馈的响应较为及时。值得注意的是，两个待合并的 PR 均触发了 `stale` 标签更新，暗示社区贡献的代码审核进度可能出现停滞。项目当前重点在于维持现有功能的稳定性，并在模型生态扩展方面积累待审核代码。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日无合并的 PR。项目主要进展体现在对用户问题的响应上：
*   **Issue 关闭**：成功关闭了一个关于 Deepin V25 环境下账号无法登录的问题 ([#1687](https://github.com/netease-youdao/LobsterAI/issues/1687))。尽管没有代码提交记录，但 Issue 的关闭表明维护者可能通过指导操作或确认修复方案解决了用户痛点，保障了特定 Linux 发行版用户的可用性。

## 4. 社区热点
今日讨论最活跃/关注点集中在两个长期未合并的功能 PR 上，虽无人工评论更新，但自动化的 `stale` 标签更新表明这些分支仍处于“待定”状态：
*   **PR #428 [feat: add LM Studio as a model provider](https://github.com/netease-youdao/LobsterAI/pull/428)**：旨在集成 LM Studio 作为新的模型提供商。这反映了用户对本地模型部署和连接的强烈需求，是扩展 AI 智能体能力边界的重要功能。
*   **PR #388 [feat: upgrade MiniMax default model to M2.7](https://github.com/netease-youdao/LobsterAI/pull/388)**：旨在升级 MiniMax 模型支持至最新的 M2.7 版本。这显示项目需要紧跟上游模型迭代速度，以保持对主流 LLM 的兼容性。

## 5. Bug 与稳定性
今日报告并处理的 Bug 主要涉及特定环境下的认证问题：
*   **[中等] Deepin V25 登录失败** ([#1687](https://github.com/netease-youdao/LobsterAI/issues/1687))
    *   **描述**：用户在 Deepin V25 (AMD64) 系统下，点击登录跳转浏览器输入验证码后，界面显示“网络错误”，无法完成认证。
    *   **状态**：**已关闭**。问题已解决或确认为特定环境偶发问题，目前无关联的 Fix PR，推测可能已通过非代码修改方式（如环境配置指引）解决。

## 6. 功能请求与路线图信号
*   **本地模型生态扩展**：PR #428 提议增加对 LM Studio 的支持，遵循 Ollama 的模式。这发出了明确的信号：LobsterAI 正致力于成为一个聚合型的 AI 客户端，支持用户“自带模型”。
*   **模型版本迭代**：PR #388 指出需升级 MiniMax API 地址及默认模型。这提示项目需建立更敏捷的模型版本同步机制，避免因上游 API 变更导致功能不可用。
*   **预警**：上述两项功能 PR 均处于 `stale` 状态，若无维护者介入，可能面临被自动关闭的风险，这将阻碍项目功能的更新。

## 7. 用户反馈摘要
*   **系统兼容性痛点**：从 Issue #1687 可以看出，Linux 用户（特别是国产系统如 Deepin）对客户端的兼容性要求较高。OAuth 登录流程中的网络回调机制在特定网络或系统环境下容易受阻，这是桌面端 AI 客户端的常见痛点。
*   **使用场景**：用户倾向于在本地或私有环境中使用 AI，对版本更新敏感度高（用户明确提到“已升到 4.13”）。

## 8. 待处理积压
以下重要 PR 因长期未处理被标记为 `stale`，建议维护者重点关注：
1.  **[PR #428](https://github.com/netease-youdao/LobsterAI/pull/428)**：LM Studio 集成。提交于 3 月 15 日，距今已逾月。此功能对开发者吸引力大，长期搁置可能影响社区贡献积极性。
2.  **[PR #388](https://github.com/netease-youdao/LobsterAI/pull/388)**：MiniMax 模型升级。提交于 3 月 12 日。模型 API 迭代迅速，长期不合并可能导致现有用户无法使用最新模型。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-19)

## 1. 今日速览
Moltis 项目今日保持**高活跃度**，开发节奏紧凑，核心关注点在于**架构重构与文档维护**。过去24小时内共有 11 个 PR 更新（6 个已合并/关闭）和 4 个 Issue 更新，显示项目正处于功能迭代与稳定性提升并重的阶段。今日一大亮点是启动了 TypeScript Web UI 的迁移工作（PR #775），标志着前端架构的现代化升级；同时，多个文档修正 PR 的合并表明团队正在还清技术债务，致力于降低用户上手门槛。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **6 个 PR 合并/关闭**，显著推进了项目的功能完善与系统稳定性：

*   **新增代码索引能力**：PR [#771](https://github.com/moltis-org/moltis/pull/771) 已合并，引入了 `moltis-code-index` crate，支持内置 SQLite+FTS5 后端的项目源代码索引。这为 AI 智能体提供了更强的代码感知与搜索工具，是迈向“代码理解”的关键一步。
*   **修复任务管理缺陷**：PR [#779](https://github.com/moltis-org/moltis/pull/779) 已合并，修复了 `task_list.list` 默认行为导致自定义列表任务不可见的问题，同时新增了列表发现功能，提升了 Agent 管理任务的可靠性。
*   **增强沙箱可观测性**：PR [#784](https://github.com/moltis-org/moltis/pull/784) 已合并，针对用户反馈的不明 `dpkg` 进程问题，增加了详尽的调试日志，解决了沙箱环境“黑盒”运行的痛点。
*   **反向代理支持优化**：PR [#785](https://github.com/moltis-org/moltis/pull/785) 已关闭（推测已合并），新增 `server.external_url` 配置项，改善了反向代理环境下的 WebAuthn 密钥认证体验。
*   **文档体系大修**：PR [#777](https://github.com/moltis-org/moltis/pull/777)、[#780](https://github.com/moltis-org/moltis/pull/780) 等多个文档修正 PR 已合并，修复了 Docker、GraphQL 及环境变量配置的过时文档，显著减少了新用户的误导信息。

## 4. 社区热点
今日最受关注的动态集中在功能增强与架构迁移上：

*   **前端重构启动**：PR [#775](https://github.com/moltis-org/moltis/pull/775) 提出将 Web UI 迁移至 Vite + Preact (TypeScript) 技术栈。这是一个重大的架构变更，旨在提升前端开发体验与构建效率，目前处于 Open 状态，值得前端开发者重点关注。
*   **操作控制权需求**：Issue [#788](https://github.com/moltis-org/moltis/issues/788) 提出了“从 Telegram 中止当前操作”及“模型回退”的功能请求。这反映了用户在长时运行任务中对控制权的迫切需求，以及对模型稳定性兜底机制的期待。

## 5. Bug 与稳定性
今日记录了 2 个新开 Bug，其中 2 个旧 Bug 已修复关闭：

*   **严重 (New)**：Issue [#786](https://github.com/moltis-org/moltis/issues/786) 报告浏览器容器无法在 60 秒内就绪，可能导致基于浏览器的 Agent 任务失败。目前尚无修复 PR，需关注其对自动化任务的影响。
*   **已修复**：Issue [#776](https://github.com/moltis-org/moltis/issues/776) 关于任务列表显示异常的问题已通过 PR #779 解决。
*   **已关闭**：Issue [#588](https://github.com/moltis-org/moltis/issues/588) 关于 Podman 后端兼容性的问题已关闭，可能已在之前的重构中解决或不再适用。

## 6. 功能请求与路线图信号
*   **RAG 架构演进**：PR [#791](https://github.com/moltis-org/moltis/pull/791) 提取了 `moltis-splitter` crate，支持 AST 感知的代码分块。结合已合并的代码索引功能，预示着项目正在构建一套更完善的 RAG（检索增强生成）基础设施，这将是下一版本的核心竞争力。
*   **用户体验增强**：Issue [#788](https://github.com/moltis-org/moltis/issues/788) 提到的模型回退机制，表明社区希望 Moltis 在面对 LLM 服务波动时具备更强的韧性，这与当前企业级部署需求高度契合，极有可能被纳入近期路线图。

## 7. 用户反馈摘要
从 Issues 和 PRs 描述中提炼出以下用户声音：
*   **部署痛点**：用户在配置反向代理时遇到 WebAuthn 认证困难，PR #785 的合并将有效缓解此类问题。
*   **调试困难**：用户难以理解沙箱容器内部行为（如不明进程占用），PR #784 的日志增强直接回应了这一诉求。
*   **任务管理困惑**：用户发现创建的任务“消失”了，实际上是被默认列表过滤了，这暴露了默认行为设计上的用户体验（UX）缺陷，现已修复。

## 8. 待处理积压
*   **Browser Container Timeout (Issue #786)**：该问题直接影响 Agent 执行网页浏览任务的成功率，目前尚未有官方回应，建议维护者优先排查是否为资源竞争或镜像拉取超时问题。
*   **文档“烤肉轮转” (Doc Rotisserie)**：虽然今日清理了大量文档，但仍有 PR [#783](https://github.com/moltis-org/moltis/pull/783) 和 [#787](https://github.com/moltis-org/moltis/pull/787) 处于 Open 状态，等待审查合并。这是提升项目文档健康度的持续工作，需保持推进。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-04-19)

## 1. 今日速览
过去 24 小时，CoPaw (QwenPaw) 项目保持高活跃度，社区反馈频繁，共产生 14 条 Issue 更新与 8 条 PR 更新。项目核心开发重心目前明显向**底层架构重构**倾斜，尤其是记忆管理模块的重构（PR #3548）与测试框架的搭建（PR #3559）。与此同时，用户侧暴露出较为集中的**Windows 平台兼容性**与**版本升级迁移**问题，特别是旧版数据目录未正确迁移的 Bug 引发了大量讨论。整体来看，项目正处于功能迭代与架构优化的并行期，但需警惕桌面端稳定性对用户体验的影响。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
尽管今日仅合并/关闭了 1 个 PR 和 3 个 Issues，但待合并的 PR 队列中包含重要架构更新，预示着项目正在酝酿重大升级：

*   **核心架构重构**：PR #3548 正在重构长期记忆模块，旨在与 As2.0 接口对齐，支持 "auto-memory" 和 "auto-dream" 功能，这将显著提升 Agent 的长期记忆能力。
*   **生态扩展**：PR #3565 提议引入 `AgentMemory` 作为新的记忆后端选项，支持向量+BM25+知识图谱的高精度检索，显示社区正在积极增强项目的扩展性。
*   **工程化建设**：PR #3559 正在为 Console 前端引入 Vitest 测试框架，标志着项目正在补齐自动化测试短板，有利于提升前端 UI 的稳定性。
*   **体验优化**：PR #3558 增强了内置技能的双语支持，PR #3556 增强了浏览器工具的启动参数配置。

## 4. 社区热点
今日讨论热度最高的 Issue 为 **#3356 [Bug]: QwenPaw 升级后 WORKING_DIR 仍指向旧目录**。
*   **链接**：[agentscope-ai/QwenPaw Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356)
*   **分析**：该 Issue 自 4 月 14 日创建以来已累积 19 条评论，反映出用户在进行产品升级（从 CoPaw 迁移到 QwenPaw 或版本更新）时，遭遇了路径配置不一致的严重问题。用户期望的"无缝升级"未能实现，导致数据写入位置混乱。这暴露出安装脚本或升级逻辑在处理跨版本/跨品牌路径迁移时存在缺陷，是影响用户留存的关键阻碍。

## 5. Bug 与稳定性
今日报告的 Bug 集中在 Windows 客户端与模型工具调用上，严重程度较高：

*   **严重 - 桌面端启动失败**：
    *   Issue [#3555](https://github.com/agentscope-ai/QwenPaw/issues/3555)：Windows 下 QwenPaw Desktop 无限挂起等待 HTTP 服务，导致无法启动。
    *   Issue [#2943](https://github.com/agentscope-ai/QwenPaw/issues/2943)（已关闭）：`copaw init` 在安全警告处卡死。
*   **严重 - 工具调用失效**：
    *   Issue [#3566](https://github.com/agentscope-ai/QwenPaw/issues/3566)：`view_image` 工具虽已启用但未注册，导致多模态功能失效。
*   **中等 - 本地模型对接问题**：
    *   Issue [#3560](https://github.com/agentscope-ai/QwenPaw/issues/3560)：使用本地 llama.cpp 后端时出现 Tool Call 流解析错误。
    *   Issue [#3542](https://github.com/agentscope-ai/QwenPaw/issues/3542)（已关闭）：VPN 代理环境下 Ollama 模型无法调用。

## 6. 功能请求与路线图信号
用户对精细化控制和管理功能的呼声较高，部分需求与当前开发中的 PR 存在契合点：

*   **上下文管理可视化**：Issue [#3563](https://github.com/agentscope-ai/QwenPaw/issues/3563) 请求查看当前对话的上下文用量（Token 消耗），以便决策何时执行 `compact` 命令。这与正在进行的记忆重构 PR #3548 方向一致，建议后续版本予以考虑。
*   **Web 端功能对齐**：Issue [#3557](https://github.com/agentscope-ai/QwenPaw/issues/3557) 指出 Web 端无法像 APP 客户端一样修改默认智能体，反映了多端功能一致性的需求。
*   **交互便捷性**：Issue [#3378](https://github.com/agentscope-ai/QwenPaw/issues/3378) 提出的“会话列表直达对话界面”需求，是典型的 UX 优化痛点。

## 7. 用户反馈摘要
*   **痛点：迁移成本高**：用户在升级或从 CoPaw 迁移至 QwenPaw 时，对旧数据目录的处理感到困惑和棘手，认为当前的文件管理逻辑不够透明。
*   **场景：本地模型重度依赖**：大量 Issue 涉及 Ollama 和 llama.cpp 的对接，显示 CoPaw/QwenPaw 的核心用户群高度依赖本地私有化部署方案，对代理、网络环境配置的敏感度极高。
*   **满意度**：尽管存在 Bug，但用户对“自我进化”（Issue #3470）等前沿概念的提问显示出对项目技术前景的高期待。

## 8. 待处理积压
*   **长期未决的升级路径问题**：Issue [#3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) 虽有官方人员介入，但尚未给出彻底的修复方案或迁移工具，建议维护者优先发布修复补丁或提供迁移脚本。
*   **Web 端功能缺失**：Issue [#3557](https://github.com/agentscope-ai/QwenPaw/issues/3557) 涉及 Web 端基础管理功能缺失，建议开发团队在 Console 端尽快补齐“默认智能体设置”功能。

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