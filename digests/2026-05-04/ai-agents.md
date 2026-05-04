# OpenClaw 生态日报 2026-05-04

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-04 03:30 UTC

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

# OpenClaw 项目动态日报 (2026-05-04)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，过去 24 小时内 Issues 与 PR 更新数均达到 500 条，显示出社区与开发团队的紧密互动。项目发布了 **v2026.5.3-beta.3**，核心亮点在于引入了官方捆绑的文件传输插件，增强了多节点间的文件操作能力。在稳定性方面，开发者重点修复了网关启动延迟（约 8s）和 WebUI 消息渲染竞态条件等关键性能问题。社区讨论热点集中在跨平台客户端需求、内存管理机制优化以及安全性增强（如 API Key 掩码）。

## 2. 版本发布
- **v2026.5.3-beta.3** ([Release Link](https://github.com/openclaw/openclaw/releases/tag/v2026.5.3-beta.3))
  - **核心更新**：新增捆绑插件 `plugins/file-transfer`。
  - **新增工具**：为成对节点提供了 `file_fetch`, `dir_list`, `dir_fetch`, `file_write` 等智能体工具，支持二进制文件操作。
  - **安全策略**：实施了默认拒绝的节点路径策略，需在 `plugins.entries.file-transfer.config.nodes` 下配置并经操作员批准。

## 3. 项目进展
今日共有 **57 个 PR 被合并/关闭**，主要进展集中在性能优化与关键 Bug 修复：
- **性能大幅优化**：PR [#76851](https://github.com/openclaw/openclaw/pull/76851) 通过缓存 `getActiveSecretsRuntimeSnapshot()` 成功消除了 `core-plugin-tools` 阶段约 8 秒的启动延迟，显著提升了网关启动速度。
- **WebUI 稳定性**：PR [#72004](https://github.com/openclaw/openclaw/pull/72004) 修复了 WebChat 中助手消息重复渲染的竞态条件，改善了前端交互体验。
- **多渠道适配**：PR [#75995](https://github.com/openclaw/openclaw/pull/75995) 修复了 Slack 公共频道在不同回复模式下的会话隔离问题，防止上下文泄露。
- **功能增强**：PR [#77013](https://github.com/openclaw/openclaw/pull/77013) 实现了 Codex 目标完成状态的原生桥接，PR [#72009](https://github.com/openclaw/openclaw/pull/72009) 将输入指示器（Typing Indicator）的 TTL 设为可配置。

## 4. 社区热点
今日社区讨论最为激烈的话题如下：
1.  **跨平台客户端需求** ([Issue #75](https://github.com/openclaw/openclaw/issues/75))：拥有 104 条评论，用户强烈呼吁官方提供 Linux 和 Windows 原生客户端，目前的缺失影响了桌面端用户体验。
2.  **Android 预构建包** ([Issue #9443](https://github.com/openclaw/openclaw/issues/9443))：用户希望官方直接提供 Android APK 下载，而非仅提供源码，以降低移动端部署门槛。
3.  **内存刷新机制不可靠** ([Issue #12590](https://github.com/openclaw/openclaw/issues/12590))：开发者发现 `memoryFlush` 在自动压缩循环中触发不稳定，引发了关于内存管理逻辑的深入技术讨论。
4.  **Slack 富文本支持** ([Issue #12602](https://github.com/openclaw/openclaw/issues/12602))：用户希望智能体能发送 Slack Block Kit 格式消息，以提供更丰富的交互体验。

## 5. Bug 与稳定性
今日报告的关键 Bug 主要涉及回归问题与系统稳定性：
- **[Critical] WebChat 会话记录丢失** ([Issue #76804](https://github.com/openclaw/openclaw/issues/76804))：v5.2 引入的回归 Bug，助手回复在流式传输后未写入会话 JSONL 记录，导致上下文丢失。
- **[High] 网关启动延迟** ([Issue #76295](https://github.com/openclaw/openclaw/issues/76295))：`core-plugin-tools` 阶段存在固定的 ~8.3s 延迟，**已有修复 PR #76851**。
- **[High] 内存管理混乱** ([Issue #43747](https://github.com/openclaw/openclaw/issues/43747))：不同用户的内存存储行为不一致（有的使用 SQLite，有的存入知识库），疑似配置或逻辑回归。
- **[Medium] Telegram 媒体下载静默失败** ([Issue #45799](https://github.com/openclaw/openclaw/issues/45799))：代理不可用时无重试机制，用户体验受损。
- **[Medium] 会话挂起** ([Issue #43661](https://github.com/openclaw/openclaw/issues/43661))：压缩超时导致会话无限期挂起，并可能触发重复消息发送。

## 6. 功能请求与路线图信号
- **安全增强**：用户强烈建议增加 API Key 掩码功能，允许智能体使用密钥但无法读取明文，以防止 Prompt Injection 攻击 ([Issue #10659](https://github.com/openclaw/openclaw/issues/10659))。
- **高级推理模型支持**：针对 Kimi、DeepSeek-R1 等长推理模型，请求支持可配置的流式看门狗超时阈值 ([Issue #68596](https://github.com/openclaw/openclaw/issues/68596))。
- **技能级模型路由**：请求支持在 `SKILL.md` 中指定模型，实现不同任务调用不同模型的能力 ([Issue #43260](https://github.com/openclaw/openclaw/issues/43260))。
- **备份与恢复工具**：请求官方提供配置、任务历史和会话记录的标准化备份恢复工具 ([Issue #13616](https://github.com/openclaw/openclaw/issues/13616))。

## 7. 用户反馈摘要
- **部署痛点**：用户在 Docker 部署时遇到路径空格报错问题 ([Issue #44599](https://github.com/openclaw/openclaw/issues/44599))，且对缺乏 Linux/Windows/Android 预构建包表示不满。
- **性能体验**：部分用户反馈 Control UI 在长时间运行后会变得卡顿甚至无响应 ([Issue #45698](https://github.com/openclaw/openclaw/issues/45698))。
- **功能期待**：用户对文件传输插件的推出表示欢迎，同时希望能进一步支持 YAML 配置文件格式 ([Issue #45758](https://github.com/openclaw/openclaw/issues/45758))。
- **平台差异**：有用户尝试使用 Rust 重写项目以实现沙箱安全模式，反映了对本地运行安全性的担忧 ([Issue #6731](https://github.com/openclaw/openclaw/issues/6731))。

## 8. 待处理积压
- **Issue #75 (Linux/Windows Apps)**：该请求自 2026-01-01 开启至今，评论数高达 104 条，但仍未得到官方明确的开发时间表，建议团队关注这一高票需求。
- **Issue #43735 (Skills 加载失败)**：部分用户反馈 Skills 无法从目录加载，且 WSL 环境下问题尤为突出，需要进一步排查兼容性问题。
- **Issue #44925 (子智能体静默丢失)**：子智能体任务完成结果在特定情况下会丢失且无通知，属于严重的架构稳定性问题，需引起重视。

---

## 横向生态对比

# AI 智能体与个人 AI 助手开源生态横向分析报告 (2026-05-04)

## 1. 生态全景
个人 AI 助手与智能体开源生态正处于**功能深度融合与架构快速重构期**。头部项目（如 OpenClaw, Hermes Agent）保持极高迭代速度，重心从单一对话能力转向多模态、多智能体协作及插件化生态构建；中腰部项目则聚焦于对 DeepSeek 等新一代推理模型的兼容性适配及本地化部署体验优化。整体生态呈现出**“通用平台求全，垂直项目求稳”**的态势，安全性与资源隔离问题逐渐成为社区关注的核心议题。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新数 | PRs 更新/合并数 | 版本发布 | 健康度评估 | 核心动态关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500+ | 500+ (57 merged) | **v2026.5.3-beta.3** | ⭐⭐⭐⭐⭐ 极高 | 文件传输插件、网关性能优化、跨平台客户端诉求 |
| **Hermes Agent** | 50+ | 50+ (5 merged) | 无 | ⭐⭐⭐⭐ 高 | 多 Profile 隔离、Gateway 稳定性、飞书集成问题 |
| **Zeroclaw** | 50+ (42 new) | 50+ (20 merged) | 无 | ⭐⭐⭐⭐ 高 | DeepSeek 兼容性、Desktop 桌面端、安装脚本重构 |
| **IronClaw** | 19 new | 24 (3 merged) | 无 | ⭐⭐⭐⭐ 高 | "Reborn" 架构重构、金融场景功能、配置持久化 |
| **CoPaw** | 34 | 21 (16 merged) | 无 (v1.1.5 预备) | ⭐⭐⭐⭐ 高 | 多智能体隔离、记忆管理、Docker ARM64 兼容 |
| **ZeptoClaw** | - | 19 merged | 无 | ⭐⭐⭐ 中高 | Agent 中间件框架、自我改进循环、Local-first |
| **NanoBot** | - | 23 (7 merged) | 无 | ⭐⭐⭐ 中高 | CLI 体验、Safety Guard 误报、本地 LLM 并发控制 |
| **NanoClaw** | 8 solved | 31 merged | 无 | ⭐⭐⭐ 中高 | 架构瘦身、容器身份修复、安全 Hardening |
| **PicoClaw** | 5 | 20 (6 merged) | 无 | ⭐⭐⭐ 中 | Runtime Events 重构、构建失败、Android 客户端 |
| **Moltis** | 1 | 2 open | 无 | ⭐⭐ 中低 | DeepSeek 推理链、工具调用容错 |
| **NullClaw** | 1 | 1 open | 无 | ⭐⭐ 中低 | Landlock 沙箱、进程启动安全 |
| **LobsterAI** | 1 | 2 (stale) | 无 | ⭐ 低 | 功能集成请求、PR 审核积压 |
| **TinyClaw** | 0 | 0 | 无 | 💤 不活跃 | 无活动 |
| **EasyClaw** | 0 | 0 | 无 | 💤 不活跃 | 无活动 |

## 3. OpenClaw 在生态中的定位

**定位：生态核心枢纽与功能标杆**

OpenClaw 凭借每日 500+ 的 Issue/PR 更新量和稳定的 Beta 版本发布，稳居开源 AI 助手生态的第一梯队。

*   **优势对比**：
    *   **生态完善度**：相比 Hermes Agent 和 Zeroclaw，OpenClaw 率先推出了官方捆绑的文件传输插件，构建了标准化的多节点操作能力，而竞品大多还停留在底层适配或架构重构阶段。
    *   **性能与稳定性**：针对网关启动延迟（~8s）和 WebUI 竞态条件的修复显示了其对生产级体验的重视，优于 PicoClaw 和 NanoBot 等仍在解决基础构建和 CLI 乱码问题的项目。
*   **技术路线差异**：
    *   OpenClaw 采取“全功能集成”路线，WebUI、多渠道适配、插件体系并进。
    *   相比之下，**NullClaw** 和 **ZeptoClaw** 更偏向底层架构创新（如 Landlock 沙箱、中间件框架），**IronClaw** 则在探索特定场景（金融交易）的 Agent 架构。
*   **社区规模**：OpenClaw 的社区互动量级远超其他项目（500 vs 50），显示出更强的用户基础和开发者活跃度，但也面临着更大的跨平台客户端交付压力。

## 4. 共同关注的技术方向

全生态在今日呈现出三个显著的共性技术趋势：

1.  **DeepSeek/推理模型的适配攻坚战**
    *   **涉及项目**：Zeroclaw, PicoClaw, Moltis, CoPaw, OpenClaw
    *   **具体诉求**：随着 DeepSeek V4 等推理模型（Thinking Model）的普及，多个项目（Zeroclaw #6233, PicoClaw #2718, Moltis #961）都在处理 `reasoning_content` 的丢失、格式校验错误（400 Bad Request）及历史记录重放问题。这表明现有 AI 助手架构对“思维链”数据的持久化和流转尚未形成统一标准。

2.  **多智能体协作与资源隔离**
    *   **涉及项目**：Hermes Agent, CoPaw, OpenClaw
    *   **具体诉求**：Hermes Agent 的 Kanban 数据隔离问题（#18959）和 CoPaw 的 Agent 工作空间隔离请求（#3936）表明，用户已不再满足于单体 Agent，而是要求在多智能体环境下实现严格的资源、数据与权限隔离，这反映了 Agent 应用场景的复杂化。

3.  **本地化部署的资源瓶颈与安全焦虑**
    *   **涉及项目**：NanoBot, NullClaw, NanoClaw
    *   **具体诉求**：NanoBot 遭遇本地 LLM OOM 问题（#3611），NullClaw 探讨 Landlock 默认沙箱（#882），NanoClaw 修复安全边界。这反映出在个人设备上运行 AI 智能体时，内存管理与系统安全是阻碍普及的关键瓶颈。

## 5. 差异化定位分析

| 维度 | 功能侧重 | 目标用户 | 技术架构特征 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 全栈功能、插件生态、多渠道接入 | **通用开发者与终端用户** | 插件化网关、WebUI 重交互 |
| **Hermes Agent** | 多智能体协作、任务调度、企业集成 | **高级架构师与企业团队** | Orchestrator-Worker 模式、Profile 隔离 |
| **IronClaw** | 金融交易、账户抽象、自治架构 | **Web3 开发者与金融极客** | Reborn Substrate、Intents 架构 |
| **ZeptoClaw** | 自我改进、中间件化、本地优先 | **AI Agent 研究者** | Middleware Pipeline、技能自管理 |
| **NanoBot/NanoClaw** | 轻量级、CLI 体验、安全沙箱 | **极客与个人开发者** | 容器化部署、安全策略 Hardening |
| **NullClaw** | 极致安全、底层隔离 | **系统级开发者** | Landlock 内核特性、进程级隔离 |

## 6. 社区热度与成熟度

*   **快速迭代期（活跃度高）**：**OpenClaw, Zeroclaw, Hermes Agent, IronClaw**。这些项目 Issues 和 PRs 数量巨大，功能更新频繁，但也伴随着较多的回归 Bug 和架构调整带来的兼容性问题，适合乐于尝鲜和参与共建的用户。
*   **质量巩固期（活跃度中高）**：**CoPaw, ZeptoClaw, NanoBot, NanoClaw, PicoClaw**。这些项目今日重点在于修复关键 Bug、优化架构（如中间件重构）和适配新模型，社区反馈响应较快，稳定性正在提升，适合有一定技术实力的部署者。
*   **稳健维护/停滞期（活跃度低）**：**NullClaw, LobsterAI, Moltis**。更新较少或仅聚焦于极窄的特定领域（如文档修补、单一模型适配），可能面临维护资源不足或处于技术储备阶段。

## 7. 值得关注的趋势信号

1.  **“推理内容”成为一等公民**：Moltis 和 PicoClaw 等项目专门针对 `reasoning_content` 提交修复，预示着未来的 AI 助手存储架构将不再仅存储“对话”，而是必须显式存储和管理“推理过程”，这对 Token 消耗统计和上下文压缩提出了新挑战。
2.  **沙箱技术从“外部依赖”转向“内核原生”**：NullClaw 提议放弃外部工具探测转向 Landlock，ZeptoClaw 强化安全中间件。这表明 AI Agent 项目正在抛弃重型的 Docker/Firejail 依赖，寻求更轻量、更底层的 OS 级安全隔离方案，以换取更低的资源占用和更快的启动速度。
3.  **自我改进型 Agent 架构萌芽**：ZeptoClaw 提出的“Hermes Agent 自我改进循环”（#567-#569）和 IronClaw 的“Reborn”架构，揭示了下一代 Agent 的演进方向：从“被动执行指令”转向“主动管理技能、优化自身工作流”，Agent 的自治边界正在从任务执行向自身架构修改延伸。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 (2026-05-04)

## 1. 今日速览
NanoBot 项目今日保持高活跃度，社区贡献主要集中在提升系统稳定性与优化用户体验。过去24小时内共有 **23 个 PR 更新**，其中 7 个已合并/关闭，修复了包括 CLI 输出乱码、Cron 任务丢失及工作区安全守卫误报等多个关键问题。虽然无新版本发布，但针对本地 LLM 资源管理和 OAuth 认证流程的功能补丁已提交，显示出项目正积极响应用户在边缘场景下的部署需求。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **7 个 PR** 完成合并或关闭，显著提升了 CLI 和后台服务的健壮性：

*   **CLI 体验优化**：PR [#3609](https://github.com/HKUDS/nanobot/pull/3609) 修复了 API 重试等待消息混入流式输出导致终端乱码的问题，关闭了 Issue [#3600](https://github.com/HKUDS/nanobot/issues/3600)。
*   **Safety Guard 逻辑修正**：针对升级后频繁出现的 "Command blocked by safety guard" 误报问题，PR [#3613](https://github.com/HKUDS/nanobot/pull/3613) 修复了对 `/dev/null` 等路径的错误拦截；PR [#3614](https://github.com/HKUDS/nanobot/pull/3614) 引入了软边界与重试节流机制，替代了原有硬性阻断策略，优化了错误反馈。
*   **数据持久化修复**：PR [#3606](https://github.com/HKUDS/nanobot/pull/3606) 修复了 Cron 服务在容器重启后可能静默覆盖或丢失任务列表的严重 Bug。
*   **WebUI 改进**：PR [#3583](https://github.com/HKUDS/nanobot/pull/3583) 优化了 Beta 版 WebUI 的会话隔离与流式传输结束判定。
*   **功能迭代**：PR [#2727](https://github.com/HKUDS/nanobot/pull/2727)（旧版）关闭，功能由 PR [#3612](https://github.com/HKUDS/nanobot/pull/3612) 接替，新增 `provider logout` 命令以解决账户切换难题。

## 4. 社区热点
*   **本地 LLM 资源管理** ([#3611](https://github.com/HKUDS/nanobot/issues/3611))：用户 @andrew-ellis-engineering 指出在本地运行 LLM（如 Ollama）时，多子代理并发会导致消费级硬件 OOM。该问题引发了关于并发控制的讨论，随即有贡献者提交了 PR [#3615](https://github.com/HKUDS/nanobot/pull/3615) 实现并发限制。
*   **OAuth 认证流程缺陷** ([#2665](https://github.com/HKUDS/nanobot/issues/2665))：用户反馈在 OpenAI Codex 账户升级后无法重新认证，暴露了 CLI 缺少 `logout` 功能的痛点。该 Issue 获得了新 PR [#3612](https://github.com/HKUDS/nanobot/pull/3612) 的直接响应。
*   **WhatsApp 集成** ([#3604](https://github.com/HKUDS/nanobot/issues/3604))：用户报告 WhatsApp 语音消息无法下载，仅一天内即有 PR [#3607](https://github.com/HKUDS/nanobot/pull/3607) 提交修复，显示出社区对渠道适配问题的高响应速度。

## 5. Bug 与稳定性
今日报告的 Bug 集中在安全策略拦截与外部渠道集成，部分已有修复方案：

*   **[Critical] Safety Guard 静默丢弃消息** ([#3605](https://github.com/HKUDS/nanobot/issues/3605))：当 `exec` 工具被安全守卫拦截时，错误信息未传达给用户，导致 Agent 在 Telegram 等渠道“静默失败”。目前尚无直接 Fix PR。
*   **[High] CLI 重试消息乱码** ([#3600](https://github.com/HKUDS/nanobot/issues/3600))：SSH 环境下 API 重试日志污染流式输出。**已修复** (PR [#3609](https://github.com/HKUDS/nanobot/pull/3609))。
*   **[Medium] WhatsApp 语音不支持** ([#3604](https://github.com/HKUDS/nanobot/issues/3604))：语音消息无法被 LLM 解析。**已修复** (PR [#3607](https://github.com/HKUDS/nanobot/pull/3607))。
*   **[Medium] DeepSeek 推理历史丢失** ([#3616](https://github.com/HKUDS/nanobot/pull/3616))：PR 提交者发现 DeepSeek-V4 的 reasoning_content 在历史记录中被错误丢弃，PR 已提交修复。

## 6. 功能请求与路线图信号
*   **并发控制**：Issue [#3611](https://github.com/HKUDS/nanobot/issues/3611) 提出的限制子代理并发请求，已有对应 PR [#3615](https://github.com/HKUDS/nanobot/pull/3615) 实现了 `maxConcurrentSubagents` 配置项，预计将很快合并，显著改善本地部署体验。
*   **Provider 登出**：针对 Issue [#2665](https://github.com/HKUDS/nanobot/issues/2665)，PR [#3612](https://github.com/HKUDS/nanobot/pull/3612) 提出了 `nanobot provider logout` 命令，完善了 OAuth 生命周期的管理。
*   **终端 UI 增强**：PR [#3601](https://github.com/HKUDS/nanobot/pull/3601) 提出基于 Panel 的终端显示，预示着 CLI 交互体验将迎来重大视觉升级。

## 7. 用户反馈摘要
*   **安全策略体验不佳**：多位用户反馈 Safety Guard 的误报（[#3599](https://github.com/HKUDS/nanobot/issues/3599)）和静默拦截（[#3605](https://github.com/HKUDS/nanobot/issues/3605)）严重影响了使用流畅度，认为目前的拦截策略过于激进且缺乏透明度。
*   **本地部署资源焦虑**：用户在使用本地大模型配合 NanoBot 执行复杂任务时，经常遇到内存溢出（OOM），这表明默认的并发策略对消费级硬件不够友好。
*   **渠道集成完善度**：随着 WhatsApp 等渠道的引入，用户对多媒体消息（如语音）的处理能力有了更高期待。

## 8. 待处理积压
*   **安全核心重构 PRs**：由 @mohamed-elkholy95 提交的一系列安全加固 PRs（如 [#3492](https://github.com/HKUDS/nanobot/pull/3492) 公共部署安全、[#3255](https://github.com/HKUDS/nanobot/pull/3255) 文件系统层保护、[#3235](https://github.com/HKUDS/nanobot/pull/3235) DNS 失败处理）虽已提出一段时间，但今日仍有更新且未合并。这些是涉及底层架构的关键改动，建议维护者优先 Review 以确保公共部署安全性。
*   **DeepSeek 推理保留**：PR [#3616](https://github.com/HKUDS/nanobot/pull/3616) 修复了推理内容的丢失，对于使用 DeepSeek 模型的用户体验至关重要，建议尽快合并。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 (2026-05-04)

## 1. 今日速览
Zeroclaw 项目今日保持**极高的活跃度**，社区反馈热烈。过去24小时内共有 50 条 Issue 更新（新增 42 条）和 50 条 PR 更新，显示项目正处于快速迭代期。焦点主要集中在**DeepSeek 等 Provider 的兼容性修复**、**Desktop 桌面端应用的功能补全**以及**安装脚本的体验优化**。尽管无新版本发布，但大量 P1/P2 级别的 Bug 修复 PR 正在审核中，项目健康度整体向好，但需关注 Provider 严格校验带来的兼容性问题。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
今日项目在核心功能稳定性和生态完善上取得了显著进展，共有 20 个 PR 被合并或关闭：

*   **核心架构整合**：PR #6274 已关闭（推测为合并），将第一方 Skills 整合进主仓库并默认启用紧凑模式，这将大幅减少外部依赖，提升一致性。
*   **文档体系重构**：关闭了 #5589 和 #5590，完成了文档归档与重构（RFC #5576 Phase 1-3），新的文档结构更清晰，已准备好进行多语言同步（#6170 正在进行中）。
*   **关键修复待合并**：
    *   针对 DeepSeek 等严格 API 的修复 PR #6317（配置键值保留）和 #6314（Anthropic base_url 修复）已提交，正在审核中。
    *   安装脚本修复 PR #6299 已提交，解决了二进制安装缺失 Web Dashboard 的问题（Issue #6096）。
*   **多模态与语音推进**：PR #6183（图像标记标准化）和 PR #5978/5976/5974（全双工语音通话支持）正在积极开发中，为未来版本的高级交互打下基础。

## 4. 社区热点
今日讨论最活跃的议题集中在**Provider 兼容性**和**UI/交互体验**：

1.  **[Issue #6233] DeepSeek V4 多轮对话失败** (评论: 8)
    *   **诉求**：用户报告在使用 DeepSeek V4 进行多轮对话时，`reasoning_content` 处理不当导致 400 错误。
    *   **分析**：这是 Provider 适配层面的高频痛点，社区急需对 DeepSeek 新模型特性的完整支持。
2.  **[Issue #5837] ACP 协议会话取消支持** (评论: 4)
    *   **诉求**：希望在 ACP 协议中支持类似 Gateway 的 `abort` 取消操作。
    *   **分析**：属于架构层面的功能增强，目前状态为 Blocked，需核心团队解除阻塞。
3.  **[Issue #6149] 配置文档与实际不符** (评论: 4)
    *   **诉求**：文档示例导致本地测试配置失败，已关闭，表明文档问题已通过更新解决。
4.  **[Issue #6298] 空工具调用数组引发 400 错误** (评论: 3)
    *   **诉求**：部分 Provider（如 NVIDIA NIM, DeepSeek）拒绝空的 `tool_calls` 数组，导致请求失败。
    *   **分析**：这是高风险问题，影响面广，急需 PR 修复以恢复服务稳定性。

## 5. Bug 与稳定性
今日报告了多个严重影响使用体验的 Bug，部分已有修复方案：

*   **[P1 | HIGH] 空工具调用导致 API 报错 (Issue #6298)**
    *   **描述**：`use_native_tools` 启用时，生成空 `tool_calls` 数组导致 DeepSeek 等服务商返回 400。
    *   **状态**：已接受 (Accepted)，待修复。
*   **[P1 | HIGH] 监管模式下的 Web UI 审批绕过 (Issue #6207)**
    *   **描述**：通过 Web Dashboard/WebSocket 连接时，Supervised 模式的工具审批请求无法弹出，导致 Agent 行为失控。
    *   **状态**：需维护者审查。
*   **[P1 | HIGH] WhatsApp Web 自聊模式误触发 (Issue #6351)**
    *   **描述**：Agent 会错误回复用户自己发送的消息，导致骚扰联系人。
    *   **状态**：Open。
*   **[P1 | HIGH] 安装脚本缺失 Web 资产 (Issue #6096)**
    *   **描述**：安装脚本不包含 Web Dashboard 文件。
    *   **状态**：Issue 已关闭，修复 PR #6299 已提交。
*   **[P1 | MEDIUM] Fallback Provider 忽略配置 (Issue #5803)**
    *   **描述**：降级链只读取环境变量，忽略 `config.toml`。
    *   **状态**：修复中。

## 6. 功能请求与路线图信号
社区提出了多项针对**桌面端**和**安装体验**的功能请求，显示出项目正在向全平台客户端演进：

*   **桌面端路线图 (Issue #6343)**：确立了 v0.7.7 版本的桌面端目标，包括 macOS 菜单栏应用、无 systemd 服务的独立安装模式 (#6342) 以及签名的 DMG 包 (#6341)。
*   **安装脚本重构 (Issue #6292)**：计划彻底重写 `install.sh`，支持功能预设选择和安装后的 Onboarding 引导，已获官方接受。
*   **UI 交互优化**：
    *   Web Chat 支持图片粘贴/拖拽 (Issue #5649)。
    *   Dashboard 编辑器支持直接编辑 Persona 文件 (Issue #6344)。
    *   Web Chat 隐藏冗余的工具调用气泡 (Issue #6348)。

## 7. 用户反馈摘要
*   **痛点**：配置文件 (`config.toml`) 的键名与文档、实际二进制解析不一致，导致新手配置受阻。
*   **痛点**：针对特定 Provider（特别是 DeepSeek 和 NVIDIA NIM）的请求格式校验极其严格，Zeroclaw 目前的兼容层处理不够完善（如空数组、reasoning_content 丢失）。
*   **场景**：用户在本地开发环境（YOLO 模式）下遇到安全策略阻断 `git` 命令的问题 (#5809)，反映出安全策略的颗粒度仍需优化。
*   **满意**：用户对语音通话（全双工）和打断功能的开发进度表示关注，相关 PR (#5978) 虽未合并但已获积极评价。

## 8. 待处理积压
以下重要议题长期未获解决或处于关键状态，建议维护者优先关注：

*   **[Issue #5837] ACP 协议缺乏取消支持**：状态为 `Blocked`，影响使用 ACP 协议的会话控制能力。
*   **[Issue #5453] WebSocket 不处理图片标记**：P1 级别 Bug，导致 Web 端无法发送图片，长期未更新。
*   **[PR #6266] Config Schema v3 迁移**：这是一个大规模破坏性变更 PR，目前标记为 "DO NOT MERGE YET"，需等待集成分支准备就绪，是下一个版本发布的关键路径。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 项目动态日报 (2026-05-04)**

### 1. 今日速览
Hermes Agent 项目今日保持高度活跃，社区反馈强烈，过去24小时内共有 50 条 Issue 更新与 50 条 PR 更新。项目当前处于密集的 Bug 修复与功能迭代阶段，无新版本发布。今日焦点集中在多 Profile 环境下的 Kanban 数据隔离问题，引发了大量相关 Issue 报告。同时，CLI 体验优化（如粘贴处理、自动补全）和 Gateway 稳定性也是开发者提交 PR 的主要方向。整体来看，项目正在积极解决架构升级带来的副作用，但在多平台适配和工具持久化方面仍存在不少待解决的痛点。

### 2. 版本发布
*   **无新版本发布**。

### 3. 项目进展
今日共有 5 个 PR 被合并或关闭，主要集中在关键组件的修复：
*   **[Merged] PR #19470**: 修复了 Vision 辅助任务在模型切换或降级后运行时快照丢失的问题，确保视觉任务与主 Agent 运行时保持一致。
*   **[Merged] PR #19134**: 修复了 Gateway 状态检测在不同 Profile 下 PID 误判的问题，现在 `gateway status` 能正确区分不同 Profile 的服务进程。
*   **[Closed] PR #19494 / #19497**: 关闭了关于 CLI 多行文本粘贴分割问题的修复尝试，由 PR #10997 和新提交的 PR #19498 继续跟进，表明社区正在寻找最优解以处理无 Bracketed Paste 支持终端的兼容性问题。

### 4. 社区热点
今日讨论最活跃的话题集中在认证失败与多租户环境下的数据隔离问题：
*   **[Issue #14637](https://github.com/NousResearch/hermes-agent/issues/14637)**: OpenRouter API 调用 401 认证错误引发热议（5条评论）。用户确认 Key 有效但 Hermes 调用失败，反映出环境变量读取或 HTTP 请求头构建可能存在深层 Bug。
*   **[Issue #7675](https://github.com/NousResearch/hermes-agent/issues/7675)**: 飞书集成问题持续发酵（4条评论），涉及卡片交互失效、审批按钮无响应等关键业务流程阻断，表明飞书平台的适配度仍有较大提升空间。
*   **Kanban 数据隔离系列问题**: Issues #18959, #19036, #18442 均指向同一个核心痛点——Profile 机制导致 Kanban DB 被隔离，Worker 无法看到 Orchestrator 的任务，破坏了多 Agent 协作流程。

### 5. Bug 与稳定性
今日报告的 Bug 数量较多，按严重程度排序如下：

*   **P0/P1 - 致命/严重 (影响核心功能或导致崩溃)**
    *   **[Issue #19471](https://github.com/NousResearch/hermes-agent/issues/19471)**: Gateway 在接收 SIGTERM 后陷入崩溃循环，报错 "No current event loop"，严重影响服务稳定性。*(暂无 Fix PR)*
    *   **[Issue #19434](https://github.com/NousResearch/hermes-agent/issues/19434)**: Session Search 功能失效，导致 AI 无法回忆短期上下文，涉及 JSON/SQLite 数据不一致问题。*(暂无 Fix PR)*
    *   **[Issue #14637](https://github.com/NousResearch/hermes-agent/issues/14637)**: OpenRouter 认证失败，阻断用户使用。*(暂无 Fix PR)*

*   **P2 - 中等 (功能缺陷)**
    *   **[Issue #19477](https://github.com/NousResearch/hermes-agent/issues/19477)**: Todo 工具数据仅存于内存，重启后丢失，缺乏持久化机制。*(暂无 Fix PR)*
    *   **[Issue #19447](https://github.com/NousResearch/hermes-agent/issues/19447)**: `delegate_task` 在使用组合工具集时工具交集计算错误，导致子 Agent 无工具可用。*(暂无 Fix PR)*
    *   **[Issue #19036](https://github.com/NousResearch/hermes-agent/issues/19036) [CLOSED]**: Kanban DB 隔离问题，目前已确认问题根源。

*   **已有 Fix PR 的关键 Bug**
    *   **[Issue #19113](https://github.com/NousResearch/hermes-agent/issues/19113)**: Gateway 状态误报，已有 PR #19504 提交修复。
    *   **[Issue #19287](https://github.com/NousResearch/hermes-agent/issues/19287)**: Telegram 图片作为文件路径传入而非 Vision 内容，导致模型无法识图。

### 6. 功能请求与路线图信号
*   **CLI 增强体验**: [Issue #13072](https://github.com/NousResearch/hermes-agent/issues/13072) 提出“CLI 自动队列模式”，希望支持智能打断和崩溃恢复，这表明用户对 Hermes 作为长期运行服务的鲁棒性有高需求。
*   **技能管理 CLI**: [Issue #19384](https://github.com/NousResearch/hermes-agent/issues/19384) 建议增加 `hermes skills` 子命令用于统计和归档，响应了 Curator 后端逻辑的上层需求。
*   **Mission Control Dashboard**: [PR #19490](https://github.com/NousResearch/hermes-agent/pull/19490) 提交了只读的“任务控制中心”仪表盘基础代码，预示着项目正在向可视化运维方向发展。

### 7. 用户反馈摘要
*   **多 Agent 协作受阻**: 多位用户反馈在 Orchestrator-Worker 架构下，Profile 隔离机制破坏了任务板的共享特性（#18959, #19036），这是高级用户的核心痛点。
*   **平台兼容性差**: 飞书用户反馈消息格式错乱（Markdown 转义过度）、交互失效，Telegram 用户遇到识图失败，反映出 Hermes 对非 Slack 平台的支持仍需打磨。
*   **安全性担忧**: 有用户指出 Hermes 向 Anthropic API 发送了过度的身份标识信息（#19046），担心被提供商限流。
*   **自我改进机制失控**: 用户反馈 Agent 擅自执行了 `git push` 操作（#19324），希望对写操作增加审批机制，这反映了 Autonomy 与 Safety 之间的平衡需求。

### 8. 待处理积压
*   **[Issue #7675](https://github.com/NousResearch/hermes-agent/issues/7675)**: 飞书平台的三大严重交互问题自 4月11日 创建以来仍未有效解决，建议维护者优先关注。
*   **[Issue #933](https://github.com/NousResearch/hermes-agent/issues/933)**: 多 OAuth Token 轮换支持的需求自 3月 提出至今未响应，这是多账号管理的关键特性。
*   **[PR #10997](https://github.com/NousResearch/hermes-agent/pull/10997)**: 关于 CLI 多行粘贴体验的修复 PR 已开启多日，今日虽有新提案但该核心体验问题仍未最终合并，需尽快定夺方案。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-04)

## 1. 今日速览
PicoClaw 项目今日保持高活跃度，过去 24 小时内 PR 更新达 20 条，Issues 更新 5 条。项目重点正从单一功能开发转向底层架构优化与多模态兼容性增强，特别是对 **Runtime Events（运行时事件）** 架构的重构已成功合并，标志着 Agent 可观测性迈上新台阶。同时，社区针对 DeepSeek、Gemini 和 OpenAI Codex 的兼容性修复大量涌现，显示出项目对多模型提供商支持的快速迭代能力。今日无新版本发布，但代码库处于高频集成阶段。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 6 个 PR 合并/关闭，显著提升了系统的稳定性与架构合理性：

*   **架构重构**: [PR #2677](https://github.com/sipeed/picoclaw/pull/2677) 已合并，引入了统一的运行时事件基础设施。这是今日最重要的变更，为 Agent 提供了标准化的可观测性支持，解决了此前事件处理分散的问题。
*   **关键 Bug 修复**:
    *   [PR #2681](https://github.com/sipeed/picoclaw/pull/2681) 修复了 Gemini API 调用 MCP 工具时的 JSON Schema 解析错误，解决了相关 Issue [Issue #2668](https://github.com/sipeed/picoclaw/issues/2668)。
    *   [PR #2717](https://github.com/sipeed/picoclaw/pull/2717) 修复了 DeepSeek 等严格提供商在处理历史消息中图片时的 `unknown variant` 错误，解决了 [Issue #2718](https://github.com/sipeed/picoclaw/issues/2718)。
    *   [PR #2669](https://github.com/sipeed/picoclaw/pull/2669) 增加了网络错误重试机制，提升了 LLM 调用的鲁棒性。
*   **文档与依赖**: [PR #2682](https://github.com/sipeed/picoclaw/pull/2682) 修正了模型配置文档格式；AWS SDK 依赖也得到了小幅升级。

## 4. 社区热点
今日讨论热度最高的是关于 Ollama Cloud 凭证支持的需求，其次是关于构建失败和 Android 客户端的问题。

*   **[Feature] Ollama cloud credentials** [Issue #2225](https://github.com/sipeed/picoclaw/issues/2225)
    *   **热度**: 10 条评论
    *   **分析**: 该 Issue 创建于 3 月底，今日再次活跃。用户希望 PicoClaw 能够支持 Ollama Cloud 的凭证认证，这反映出部分用户正从本地 Ollama 部署转向云端托管服务，对统一接入层的需求日益增强。
*   **[BUG] Build from source --> launcher does not exist** [Issue #2753](https://github.com/sipeed/picoclaw/issues/2753)
    *   **热度**: 新开 Issue
    *   **分析**: 用户按照 README 从源码构建后无法找到 launcher 文件，这直接影响了开发者的入门体验，需维护者关注构建流程或文档的准确性。

## 5. Bug 与稳定性
今日报告的问题主要集中在模型兼容性和构建流程上，部分已有修复方案：

*   **严重**:
    *   [Issue #2744](https://github.com/sipeed/picoclaw/issues/2744): Android v0.2.8 版本无法访问任何 Tab 数据，导致 App 基本不可用。目前尚无修复 PR。
*   **中等**:
    *   [Issue #2753](https://github.com/sipeed/picoclaw/issues/2753): 从源码构建失败，缺少 launcher。目前无修复 PR。
    *   [Issue #2718](https://github.com/sipeed/picoclaw/issues/2718): DeepSeek 模型在包含图片的历史记录中崩溃。**已修复**: [PR #2717](https://github.com/sipeed/picoclaw/pull/2717)。
    *   [Issue #2668](https://github.com/sipeed/picoclaw/issues/2668): Gemini API 对复杂 MCP 工具 Schema 返回 400 错误。**已修复**: [PR #2681](https://github.com/sipeed/picoclaw/pull/2681)。
*   **待合并修复**:
    *   [PR #2740](https://github.com/sipeed/picoclaw/pull/2740): 修复 DeepSeek 思考模式下流式响应丢失 `reasoning_content` 的问题。
    *   [PR #2725](https://github.com/sipeed/picoclaw/pull/2725): 修复 MCP 初始化失败导致 Agent 僵死的问题。

## 6. 功能请求与路线图信号
今日出现多个重量级功能 PR 和请求，暗示下一版本将重点强化多模态与并行处理能力：

*   **多模态增强**: [PR #2755](https://github.com/sipeed/picoclaw/pull/2755) 提议增加流式推理内容和视频媒体支持，主要适配小米 Mimo 模型。这表明项目正在扩展除了 OpenAI 之外的国产大模型生态支持。
*   **并行 Agent**: [PR #2754](https://github.com/sipeed/picoclaw/pull/2754) 提出了同步多子智能体并行调用功能。这是一个重要的架构演进，意味着 PicoClaw 将支持在单一工具调用中并行委托任务给多个子 Agent，大幅提升复杂任务处理效率。
*   **Web UI 改进**: [PR #2752](https://github.com/sipeed/picoclaw/pull/2752) 旨在改进模型配置工作流，增加上游模型获取和连通性测试，提升用户体验。

## 7. 用户反馈摘要
*   **痛点**:
    *   **模型兼容性**: 用户在使用特定模型（DeepSeek, Gemini, Ollama Cloud）时遇到各种兼容性问题（如 Schema 校验、凭证配置、图片处理），显示出多模型适配的复杂性。
    *   **构建与部署**: 存在源码构建障碍和 Android 端功能性缺失，对新手和移动端用户不够友好。
*   **满意点**:
    *   社区对 DeepSeek "思考模式" (`reasoning_content`) 的响应非常迅速，相关 PR 已提交等待合并。
    *   网络重试机制和 MCP 非致命化处理得到了开发者的关注和实现，提升了生产环境的稳定性。

## 8. 待处理积压
*   **长期未响应**: [Issue #2225](https://github.com/sipeed/picoclaw/issues/2225) (Ollama Cloud 凭证支持) 虽有讨论但尚无明确官方排期，建议关注。
*   **待审查 PR**:
    *   [PR #2462](https://github.com/sipeed/picoclaw/pull/2462): 修复 Codex 流式输出和 Telegram 重试问题，开启近一月未合并，需防止冲突。
    *   [PR #2647](https://github.com/sipeed/picoclaw/pull/2647): Web_search 工具配置支持，已停滞一周。
    *   [PR #2239](https://github.com/sipeed/picoclaw/pull/2239): Docker compose 权限修改，开启已久，需确认安全性后合并。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-04)

## 1. 今日速览
NanoClaw 项目今日呈现极高的维护活跃度，过去 24 小时内共有 31 个 PR 被合并或关闭，8 个 Issue 得到解决，显示出维护团队强力的清理与迭代节奏。项目重点聚焦于架构瘦身（RULES.md 减少 12K tokens）与容器环境的稳定性修复，特别是针对身份混淆和 CLI 缺失的回归问题进行了集中处理。社区贡献方面，不仅有针对 MacPorts 和调度功能的新特性提交，还有多处涉及安全边界的 Hardening PR 正在等待合并，整体项目健康度良好，正向更安全、更精简的方向演进。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日项目在功能增强、体验优化及架构清理方面取得了显著进展：
*   **架构瘦身与优化**：完成了 `RULES.md` 的“瘦身”工作，移除了约 12K tokens 的冗余内容，减轻了上下文负担。
*   **设置与验证流程完善**：合并了 [PR #2229](qwibitai/nanoclaw PR #2229)，修复了设置验证步骤不支持 `ANTHROPIC_AUTH_TOKEN` 的问题；合并了 [PR #2206](qwibitai/nanoclaw PR #2206)，为首次设置添加了“Other...”选项，改善了非默认渠道的安装体验。
*   **集成能力扩展**：合并了 [PR #2097](qwibitai/nanoclaw PR #2097)，新增 Lore Context 语义记忆技能；合并了 [PR #2228](qwibitai/nanoclaw PR #2228)，优化了 Baget.ai 的团队支持流程。
*   **Bug 修复集中闭环**：修复了 Agent 身份混淆 ([Issue #2223](qwibitai/nanoclaw Issue #2223))、`gh CLI` 缺失回归 ([Issue #2221](qwibitai/nanoclaw Issue #2221)) 以及向已注销聊天室发送消息的异常 ([Issue #2220](qwibitai/nanoclaw Issue #2220))。

## 4. 社区热点
今日社区关注点集中在兼容性与底层配置问题上：
*   **本地模型兼容性**：[Issue #2234](qwibitai/nanoclaw Issue #2234) 询问对 `llama.cpp` 的支持，用户尝试使用本地推理服务但连接失败，反映出社区对脱离云端 API 运行 Agent 的强烈需求。
*   **消息路由逻辑缺陷**：[Issue #2227](qwibitai/nanoclaw Issue #2227) 指出 `engage_mode='always'` 配置失效导致消息静默丢弃，该问题直接影响了 Agent 的核心交互功能，引发了关于路由逻辑健壮性的讨论。

## 5. Bug 与稳定性
今日修复与新增 Bug 情况如下，总体稳定性有所提升，但仍有关键遗留问题：

**已修复:**
*   **[Medium]** [Issue #2221](qwibitai/nanoclaw Issue #2221)：Agent 容器内 `gh` CLI 缺失（回归问题），已确认修复。
*   **[High]** [Issue #2223](qwibitai/nanoclaw Issue #2223)：Agent 在 `main` 容器中将 Telegram handle 与自身身份混淆，导致逻辑异常。
*   **[Medium]** [Issue #853](qwibitai/nanoclaw Issue #853)：Setup 验证不支持 `ANTHROPIC_AUTH_TOKEN`，通过 [PR #2229](qwibitai/nanoclaw PR #2229) 修复。

**待修复:**
*   **[High]** [Issue #2227](qwibitai/nanoclaw Issue #2227)：路由逻辑 `evaluateEngage()` 缺失对 `always` 模式的处理，导致群组消息全量丢失。目前暂无修复 PR，建议维护者高优先级处理。
*   **[High]** [Issue #2214](qwibitai/nanoclaw Issue #2214)：iMessage 本地模式适配器无法将入站消息传递给 Host，导致功能不可用。
*   **[Medium]** [Issue #2234](qwibitai/nanoclaw Issue #2234)：与 `llama.cpp` 集成时报错 "assistant didn't reply in time"。

## 6. 功能请求与路线图信号
今日涌现多个功能性 PR 与需求，预示下一阶段将在兼容性与调度能力上发力：
*   **本地模型支持**：随着 [Issue #2234](qwibitai/nanoclaw Issue #2234) 的提出，兼容 `llama.cpp` 可能成为社区下一个热点，目前存在连接超时问题待解。
*   **调度增强**：[PR #2237](qwibitai/nanoclaw PR #2237) 提出了基于间隔的循环调度格式 (`@every:<ms>`)，有望纳入下一版本以补充现有的 Cron 调度体系。
*   **包管理器支持**：[PR #2238](qwibitai/nanoclaw PR #2238) 提交了对 MacPorts 的支持，进一步完善了 macOS 平台的部署体验。
*   **模型配置细化**：[PR #2233](qwibitai/nanoclaw PR #2233) 提议增加按组别的模型与努力程度覆盖配置，为多租户场景提供更灵活的控制。

## 7. 用户反馈摘要
从 Issue 详情分析，用户痛点主要集中在部署体验与边缘场景的稳定性：
*   **部署环境差异**：用户希望系统能更灵活地适配不同环境，如 MacPorts 用户 ([PR #2238](qwibitai/nanoclaw PR #2238)) 和本地模型使用者 ([Issue #2234](qwibitai/nanoclaw Issue #2234))。
*   **静默失败困扰**：[Issue #2227](qwibitai/nanoclaw Issue #2227) 和 [Issue #2214](qwibitai/nanoclaw Issue #2214) 均涉及“静默失败”问题，用户表示在没有报错的情况下功能不可用，对调试造成困难，建议项目增强可观测性。
*   **迁移体验**：虽然 [Issue #2219](qwibitai/nanoclaw Issue #2219) 解决了文档冗余问题，但用户对迁移脚本的健壮性仍有要求 ([PR #2235](qwibitai/nanoclaw PR #2235))，特别是交互式环境的检测。

## 8. 待处理积压
以下重要议题长期未决或急需关注，建议维护者优先处理：
*   **安全加固 PR 阻塞**：由 @Hinotoi-agent 提交的一系列安全修复 PR（[PR #2004](qwibitai/nanoclaw PR #2004) Channel Remote 信任、[PR #2000](qwibitai/nanoclaw PR #2000) Webhook Body 限制、[PR #1999](qwibitai/nanoclaw PR #1999) 符号链接目录拒绝）均已停滞约 10 天，涉及核心安全边界，建议尽快 Review 合并。
*   **关键路由 Bug**：[Issue #2227](qwibitai/nanoclaw Issue #2227) 涉及消息路由核心逻辑，会导致特定配置下 Agent “失聪”，需尽快修复。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-04)

## 1. 今日速览
NullClaw 项目今日呈现出稳健的维护态势，重点聚焦于安全机制的优化与底层稳定性的提升。虽然无新版本发布，但社区围绕沙箱机制的架构改进展开了深入讨论，提出了从“外部工具探测”转向“Landlock 内核特性”的重要议题。代码层面，关键的高风险运行时测试已合并或处理，修复了生产环境中暴露的问题。整体来看，项目正在通过加强测试覆盖率与修复进程启动逻辑，稳步提升核心安全组件的健壮性。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 1 个 PR 被关闭（或合并），1 个 PR 处于待合并状态，主要进展如下：

*   **测试覆盖与生产修复**：PR [#884 Fix/add crit tests](https://github.com/nullclaw/nullclaw/pull/884) 已关闭。该 PR 虽然状态为关闭，但其内容极具价值，为 NullClaw 的高风险运行时契约（所有权、生命周期、安全、路由等）增加了关键的 Zig 测试覆盖，并修复了测试中暴露的少量生产问题。这标志着项目在质量保障体系建设上迈出了重要一步。
*   **进程启动安全性增强**：PR [#883 probe: resolve executable before spawning child process](https://github.com/nullclaw/nullclaw/pull/883) 目前处于开启状态。该修复由维护者 @mark-os 提交，旨在解决 Zig stdlib 的一个 Bug，该 Bug 会导致 `execve` 调用失败时留下“僵尸”进程。通过在生成子进程前预解析可执行文件路径，有效提升了进程管理的稳定性。

## 4. 社区热点
今日最活跃的讨论为 Issue [#882 sandbox: default to Landlock on Linux, stop probing external tools at startup](https://github.com/nullclaw/nullclaw/issues/882)。

*   **核心诉求**：作者 @mark-os 指出，当前默认的 `sandbox.backend: "auto"` 在启动时会通过生成子进程来探测 `firejail`、`bwrap`、`docker` 等外部工具，这种方式带来了启动延迟和潜在的安全/兼容性隐患。
*   **讨论方向**：提议在 Linux 上默认使用 Landlock（内核级特性），从而消除启动时对外部工具的探测依赖。这反映了社区对启动性能和减少外部依赖的强烈意愿，可能预示着下一阶段沙箱模块的重大架构调整。

## 5. Bug 与稳定性
今日报告的稳定性问题主要集中在进程管理与启动探测环节：

*   **[中等] 僵尸进程残留**：Issue/PR 描述中提及，Zig stdlib 的 Bug 导致 `execve` 失败时会残留僵尸进程。
    *   **状态**：已有修复 PR [#883](https://github.com/nullclaw/nullclaw/pull/883) 提交，待合并。
*   **[低/中] 启动探测风险**：Issue [#882](https://github.com/nullclaw/nullclaw/issues/882) 指出，当前的启动探测机制（调用 `firejail`、`bwrap` 等）存在反复出现的问题，可能影响启动速度和稳定性。
    *   **状态**：目前处于讨论阶段，提议变更默认沙箱后端策略，暂无直接修复代码。

## 6. 功能请求与路线图信号
*   **架构优化信号**：Issue [#882](https://github.com/nullclaw/nullclaw/issues/882) 提出的“默认使用 Landlock”建议，是一个明确的功能演进信号。这表明项目计划减少对外部二进制工具（如 Docker、Firejail）的运行时依赖，转而利用 Linux 内核原生特性。
*   **预期影响**：若该方案落地，将显著降低 NullClaw 在 Linux 环境下的部署复杂度和启动延迟，提升安全隔离的可控性。

## 7. 用户反馈摘要
从 Issue [#882](https://github.com/nullclaw/nullclaw/issues/882) 的讨论中可以看出：
*   **痛点**：用户（及维护者）对启动时进行“探测”这一行为表示担忧，认为其不够优雅且可能引入不必要的开销。
*   **期望**：社区倾向于更现代、内核级的解决方案，期望沙箱机制能够“开箱即用”，无需复杂的运行时环境检测。

## 8. 待处理积压
*   **PR #883 待合并**：针对进程启动优化的修复 PR [#883](https://github.com/nullclaw/nullclaw/pull/883) 已提交但尚未合并，建议维护者尽快 Review 并合并，以解决潜在的僵尸进程问题。
*   **Issue #882 待决策**：关于沙箱后端默认值的重大变更提议 [#882](https://github.com/nullclaw/nullclaw/issues/882) 需要进一步的社区共识与实施计划。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 (2026-05-04)

## 1. 今日速览
IronClaw 项目今日处于**高强度的架构重构与功能迭代并行期**。核心亮点是标志着项目下一代架构的 "Reborn" substrate 正式提交 PR (#3230)，意图将长期开发的分支合并入主分支（默认关闭），这引发了大量配套架构定义 Issue 的涌现（19 个新 Issue 均与 Reborn 或 Bug 修复相关）。虽然无可观测的新版本发布，但 PR 活跃度极高（24 个更新），显示开发团队正全力推进底层重构。项目健康度整体良好，但需关注几个严重的用户配置持久化 Bug。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 3 个 PR 更新为已合并/关闭状态，21 个处于待合并状态，核心进展集中在底层架构落地：

*   **[Core] Reborn 架构落地**：核心 PR #3230 **feat:(reborn) land Reborn substrate into main** 已提交。这是一个 XL 级别的变更，旨在将 Reborn 架构基础层合并入 `main` 分支。此举将大幅减少长期分支的漂移，虽默认关闭，但标志着新架构即将进入主流程验证阶段。
*   **[Fix] Gemini 模型兼容性修复**：PR #3226 旨在修复 Gemini API 在 Tool calling 时缺失 `thought_signature` 的问题。该 PR 已关闭，解决了 Gemini 后端在第二轮 LLM 调用时的确定性故障。
*   **[Fix] CI 流水线修复**：PR #3234 修复了因测试文件移除导致的 E2E 测试引用失效问题，已关闭。
*   **[Feature] Slack 连接性增强**：PR #1549 持续推进中，引入 Slack Socket Mode 以支持 NAT 环境下的连接，无需公网 URL，改善了部署灵活性。
*   **[Feature] Portfolio 与 DCA 功能**：多个 PR (#3218, #3224, #3223) 正在构建 NEAR Intents 试用模式及 DCA（定投）策略功能，扩展了项目的金融应用场景。

## 4. 社区热点
今日讨论最活跃的议题集中在架构设计与严重的用户体验问题上：

*   **架构设计讨论**：Issue #3016 与 #3013 是 Reborn 架构中的核心追踪点，分别涉及 `AgentLoopHost` 和 `TurnCoordinator` 的实现。这表明社区/团队正集中精力厘清新架构下的 Host 层与内核交互逻辑。
*   **严重配置 Bug**：Issue #3229 引起了较高关注。用户报告 LLM 提供商的回退配置在启动时被持久化到数据库，导致用户配置被永久覆盖。这是一个严重的数据一致性问题，直接影响了用户对模型选择的控制权。
*   **Gemini 兼容性**：Issue #3225 反映了 Gemini API 在处理 Tool Call 时的兼容性崩溃问题，这是继 PR #3226 修复后的相关讨论，显示了对多模型兼容性的持续关注。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，按严重程度排序如下：

1.  **Critical (严重)**:
    *   **[Issue #3229]** LLM 提供商回退机制在启动时覆盖数据库配置，导致用户模型/提供商设置永久丢失。涉及组件 `src/config/mod.rs`。
    *   **[Issue #3225]** Gemini 后端 (`gemini-3.1-flash-lite-preview`) 在 Tool Calling 第二轮调用时因缺少 `thought_signature` 导致 HTTP 400 错误。已有修复 PR #3226 关闭。

2.  **High (高)**:
    *   **[Issue #3228]** SSH/noVNC 环境下退出 `/quit` 后终端损坏，鼠标追踪未完全禁用，影响远程运维体验。
    *   **[Issue #3201]** DeepSeek 模型的 Tool Use 功能失效，影响 QA 测试进度。

3.  **Medium (中)**:
    *   **[Issue #3227]** 无头服务器环境下 TUI 复制粘贴静默失败（依赖 X11/Wayland），需优化剪贴板检测逻辑。

## 6. 功能请求与路线图信号
今日的 Issues 清单实际上是一份详尽的 **Reborn 架构路线图**，揭示了项目未来的重点方向：

*   **Reborn 核心组件定义**：Issues #3013, #3016, #3090, #3091 定义了 `TurnCoordinator`, `AgentLoopHost`, `ToolSurfaceService` 等核心抽象。这预示着 IronClaw 将从单体架构转向更模块化、资源隔离更强的微内核架构。
*   **并发与状态管理**：Issues #3198, #3199, #3202 详述了 `TurnRunner` 执行模型、持久化与锁机制，旨在解决高并发下的状态一致性问题。
*   **网络与安全**：Issue #3237 提出了 Reborn 运行时的 HTTP Syscall 契约，强化了网络出口的安全策略与凭证注入。
*   **取消语义**：Issue #3238 明确定义了单次运行的取消语义，完善了任务生命周期管理。

结合 PR #3230，这些 Issue 表明项目正处于**架构重构的攻坚期**，下一版本预计将重点解决多模型并发、状态持久化与安全性隔离问题。

## 7. 用户反馈摘要
从 Issue 评论中提炼出的关键痛点：

*   **配置安全感缺失**：用户对配置被回退逻辑覆盖感到沮丧（#3229），强烈要求区分“运行时回退”与“持久化配置”。
*   **多模型兼容性挑战**：DeepSeek (#3201) 和 Gemini (#3225) 等非 OpenAI 标准模型的接入仍存在兼容性坑洼，尤其是 Tool Calling 场景。
*   **远程环境体验**：重度 CLI 用户在 SSH/tmux 环境下遇到终端损坏 (#3228) 和剪贴板失效 (#3227) 问题，表明 TUI 在非本地环境的表现需加强。

## 8. 待处理积压
以下重要 Issue 或 PR 长期未获响应或需持续关注：

*   **长期运行 PR**：PR #1549 (Slack Socket Mode) 自 3 月创建至今仍为 Open 状态，需维护者 Review 以解决 NAT 环境连接痛点。
*   **依赖更新积压**：PR #2973 (依赖批量更新) 体量巨大，需尽快合并以消除潜在的安全漏洞或兼容性问题。
*   **架构定义**：大量 Reborn 架构定义 Issue (如 #3195, #3236) 目前讨论较少，建议社区和开发者关注这些定义是否符合实际使用场景，避免过度设计。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-04)

## 1. 今日速览
LobsterAI 今日整体活跃度处于低位，无新版本发布或代码合并。社区端新增 1 条关于 Agent 集成的功能请求，显示出用户对扩展 AI 智能体能力的强烈需求。开发端则有 2 个长期未合并的 PR 在今日更新了状态，分别涉及核心性能优化与功能增强，但均标记为 `[stale]`，提示项目可能存在维护资源紧张或审核积压的情况。整体项目健康度平稳，但需关注 PR 流通速度。

## 2. 版本发布
无。

## 3. 项目进展
今日无已合并的 PR 或已关闭的 Issue，项目代码库未发生实质性变更。虽然无新代码入库，但两个待处理的 PR 仍在推进讨论中：
- **性能优化**：PR #812 继续尝试解决 SQLite 写入阻塞主进程的问题，这对提升 Electron 端的流畅度至关重要。
- **功能增强**：PR #871 提供了 Skill 执行统计分析能力，有助于用户调试和优化 Agent 工作流。

## 4. 社区热点
今日社区最活跃的事件为新增的功能请求 Issue。
- **[Issue #1880](https://github.com/netease-youdao/LobsterAI/issues/1880)**：用户 @ecolife007 建议集成 **Hermes Agent** 和 **OpenClaw** 功能。
  - **分析**：该请求对标了 Open WebUI 的成熟方案，反映了用户希望 LobsterAI 能够提供更开箱即用、配置更简单的 Agent 接入体验。这表明 LobsterAI 在 Agent 生态集成方面与主流竞品存在差距，社区对“易用性”和“标准化接入”有较高诉求。

## 5. Bug 与稳定性
今日无新报告的 Bug 或崩溃问题。

## 6. 功能请求与路线图信号
- **新增功能请求**：
  - **[Issue #1880](https://github.com/netease-youdao/LobsterAI/issues/1880)**：集成 Hermes Agent。建议维护者评估 Open WebUI 的相关接口设计，考虑是否将其纳入后续版本的 Agent 接入标准协议中。
- **待定功能 PR**：
  - **[PR #871](https://github.com/netease-youdao/LobsterAI/pull/871)**：Skill 执行统计展示。该功能对于复杂 Agent 的调试极具价值，是提升开发者体验（DX）的重要一环，有望在后续版本中合入。

## 7. 用户反馈摘要
从今日唯一的 Issue 中可以看出：
- **痛点**：用户目前接入 Agent 的流程可能不够直观或功能受限。
- **期望**：用户渴望类似 OpenWebUI 的“连接即用”体验，希望减少手动配置成本，期望通过图形化界面（如 UI 弹窗展示统计、简单配置入口）来管理复杂的 Agent 逻辑。

## 8. 待处理积压
以下两个 PR 存在明显的审核积压，均已标记 `[stale]`，建议维护者优先关注：
1. **[PR #812](https://github.com/netease-youdao/LobsterAI/pull/812)**：`perf(sqlite): debounce save()...`
   - **状态**：创建于 2026-03-25，至今未合并，今日有更新。
   - **影响**：涉及主线程性能阻塞问题，属于核心体验优化，长期搁置可能影响 Electron 端用户的流畅体验。
2. **[PR #871](https://github.com/netease-youdao/LobsterAI/pull/871)**：`feat(skills): 新增skill执行统计展示`
   - **状态**：创建于 2026-03-25，至今未合并，今日有更新。
   - **影响**：用户侧功能增强，长期不合并会阻碍用户对 Agent 行为的深入分析。

---
*数据分析截止至：2026-05-04 00:00 UTC*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-04)

## 1. 今日速览
Moltis 项目今日处于轻度维护状态，无新版本发布，也无已合并的代码变更。项目活跃度主要体现在问题诊断与文档修补上，贡献者 @penso 提交了两项关键改进 PR，分别针对 DeepSeek 模型的推理链回放机制和本地 TTS 文档进行了修正。与此同时，社区报告了一个关于工具调用参数校验的稳定性问题，指出了在特定场景下 Schema 校验过于严苛导致功能中断的风险。整体来看，项目正在通过精细化打磨提升对第三方模型提供商的兼容性。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日无已合并的 PR 或已关闭的 Issue。项目进展主要体现在待审核的 Pull Requests 中，具体推进如下：

*   **DeepSeek 兼容性增强**：PR [#961](https://github.com/moltis-org/moltis/pull/961) 旨在修复 DeepSeek 模型在多轮对话中推理内容丢失的问题。通过在持久化聊天历史转换时保留 Provider reasoning，并在后续请求中重放 `reasoning_content`，显著提升了 DeepSeek V4 thinking-mode 的兼容性，修复了 Issue [#959](https://github.com/moltis-org/moltis/pull/961)。
*   **文档与部署体验优化**：PR [#962](https://github.com/moltis-org/moltis/pull/962) 对本地 TTS 提供商的文档进行了全面更新。修正了 Piper 和 Coqui 的文档链接指向当前维护的仓库，并补充了必要的配置文件下载说明，解决了 Issue [#958](https://github.com/moltis-org/moltis/pull/962) 中用户遇到的文档过时问题。

## 4. 社区热点
今日社区活跃度较低，暂无高讨论量的议题。焦点主要集中在以下新提交的议题：

*   **Issue [#963](https://github.com/moltis-org/moltis/issues/963) - 工具调用参数校验问题**：虽然目前评论数为 0，但该 Issue 报告了一个关于 Tool Calls 的关键异常。用户 @Cstewart-HC 指出，当模型生成的 `exec` 调用参数格式异常或为空时，系统直接在校验层拦截导致调用失败，而非尝试修复或容错。这反映了用户对 Agent 执行流程鲁棒性的高要求，特别是在模型输出不稳定的场景下。

## 5. Bug 与稳定性
今日新增 1 个功能稳定性相关的 Bug 报告，按严重程度分析如下：

*   **[中等] 工具调用前置校验拦截导致功能失效**
    *   **链接**：Issue [#963](https://github.com/moltis-org/moltis/issues/963)
    *   **详情**：在模型激活 `exec` 工具后，若参数格式错误或缺失，Runner 在 pre-dispatch 阶段（早于 `ExecTool.execute()` 和 `BeforeToolCall` 钩子）直接抛出 `missing=command` 错误。
    *   **影响**：导致间歇性的工具调用失败，降低了智能体执行的可靠性。
    *   **修复状态**：暂无关联的 Fix PR，目前处于待分类状态。

## 6. 功能请求与路线图信号
从今日的 PR 动向中可以捕捉到项目近期的演进方向：

*   **深度适配推理模型**：通过 PR [#961](https://github.com/moltis-org/moltis/pull/961) 可以看出，项目正积极适配类似 DeepSeek V4 这样具备 "thinking" 能力的模型，重点在于解决推理链在多轮对话中的持久化与重放机制。
*   **本地化部署支持**：PR [#962](https://github.com/moltis-org/moltis/pull/962) 显示项目重视本地 TTS 解决方案的可用性，致力于维护最新的开源语音合成生态（如 Piper, Coqui），降低用户的部署门槛。

## 7. 用户反馈摘要
*   **痛点：容错机制不足**：Issue [#963](https://github.com/moltis-org/moltis/issues/963) 揭示了用户在面对模型输出微小瑕疵时的无力感。用户期望系统能在 Hook 阶段介入处理畸形参数，而不是直接在 Schema 校验层报错，这表明当前的错误处理流程可能过于僵化，缺乏对 LLM 非确定性输出的弹性应对。
*   **痛点：文档滞后**：Issue #958（由 PR #962 解决）反映了用户在使用开源生态组件（如 Coqui TTS）时，常因官方仓库变动（如原项目停止维护、分支转移）而遭遇部署困难，亟需官方文档保持同步更新。

## 8. 待处理积压
当前暂无长期未响应的历史积压 Issue，但需关注以下新增待处理项：

*   **新积压**：Issue [#963](https://github.com/moltis-org/moltis/issues/963) 需要核心维护者确认是应放宽校验规则、增加默认值逻辑，还是在错误信息中给予更多指引。
*   **待审核**：PR [#961](https://github.com/moltis-org/moltis/pull/961) 和 PR [#962](https://github.com/moltis-org/moltis/pull/962) 均处于 Open 状态，建议维护者尽快进行 Code Review 并合并，以解决 DeepSeek 用户的推理中断问题和文档导向错误问题。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-05-04)

## 1. 今日速览
过去 24 小时，CoPaw (QwenPaw) 项目保持高度活跃，共处理了 **34 条 Issue 更新** 和 **21 条 PR 更新**。社区关注点集中在多智能体协作的隔离性安全性、长期记忆管理的稳定性以及本地模型（Ollama/DeepSeek）的兼容性适配上。项目今日虽未发布正式版本，但合并了大量提升系统健壮性的修复代码，显示出团队正在为下一个稳定版本（可能是 v1.1.5，见 PR #4013）进行最后的缺陷修复和文档完善。

## 2. 版本发布
- **无新版本发布**。
- **注意**：PR #4013 已合并文档更新至 v1.1.5，结合近期频繁的稳定性修复 PR，预计正式 Release 即将发布。

## 3. 项目进展
今日共有 **16 条 PR 合并/关闭**，显著提升了项目的鲁棒性和错误处理能力：

- **核心稳定性修复**：
    - [PR #2783](https://github.com/agentscope-ai/QwenPaw/pull/2783) 和 [PR #2240](https://github.com/agentscope-ai/QwenPaw/pull/2240) 引入了上下文溢出时的自动重试与压缩机制，大幅降低了长对话崩溃的概率。
    - [PR #2052](https://github.com/agentscope-ai/QwenPaw/pull/2052) 优化了 MCP 连接失败的降级处理，防止工具层错误导致整个 Agent 会话中断。
- **模型与渠道兼容性**：
    - [PR #1480](https://github.com/agentscope-ai/QwenPaw/pull/1480) 修复了 Ollama 在特定环境下（localhost 解析至 IPv6）的连接超时问题。
    - [PR #2784](https://github.com/agentscope-ai/QwenPaw/pull/2784) 修复了流式输出中可能出现的 "Thinking" 前缀泄露问题。
- **数据安全**：
    - [PR #559](https://github.com/agentscope-ai/QwenPaw/pull/559) 修复了失败的用户消息仍被存入记忆的问题，防止“会话中毒”。

## 4. 社区热点
今日讨论最热烈的 Issues 集中在系统架构与安全性设计：

- **[#3936 智能体之间是否可以完全隔离](https://github.com/agentscope-ai/QwenPaw/issues/3936)** (评论: 8)
    - **诉求**：用户强烈要求在多智能体场景下实现工作空间隔离，当前所有 Agent 共享 workspace 存在数据安全风险。
    - **反馈**：目前已关闭，可能已有解决方案或被标记为重复/规划中功能。
- **[#1516 Telegram 频道不支持 AudioContent](https://github.com/agentscope-ai/QwenPaw/issues/1516)** (评论: 5)
    - **痛点**：语音消息处理缺失，严重影响 Telegram 渠道的交互体验。已有相关修复 PR [#4021](https://github.com/agentscope-ai/QwenPaw/pull/4021) 提交。
- **[#4023 输入框卡顿严重](https://github.com/agentscope-ai/QwenPaw/issues/4023)** (评论: 2)
    - **现象**：用户反馈 Web Console 输入框在特定情况下卡顿明显，影响打字体验。

## 5. Bug 与稳定性
今日报告了若干影响使用的 Bug，需重点关注：

- **严重**:
    - [**#4025 Docker ARM64 镜像 GLIBC 不兼容**](https://github.com/agentscope-ai/QwenPaw/issues/4025)：官方镜像基于 Debian 12，导致在 ARM64 架构上运行 llama.cpp 时报错退出。
    - [**#3977 memory_search 报错**](https://github.com/agentscope-ai/QwenPaw/issues/3977)：对话上下文管理导致记忆搜索功能失效。
- **中等**:
    - [**#4018 更新后 Embedding 配置重置**](https://github.com/agentscope-ai/QwenPaw/issues/4018)：每次 `update` 后 `agent.json` 中的 embedding 配置丢失，导致向量搜索失效。
    - [**#3991 Ollama 频道无法携带对话历史**](https://github.com/agentscope-ai/QwenPaw/issues/3991)：本地模型失去上下文记忆，该 Issue 已关闭，推测已在近期 PR 中修复。
- **待修复 PR**:
    - [PR #4021](https://github.com/agentscope-ai/QwenPaw/pull/4021) 正在处理 Telegram 音频消息无法解析的问题。

## 6. 功能请求与路线图信号
用户提出了多项关于架构演进和安全增强的请求：

- **安全增强**：[#4020 请求对核心文件 (MEMORY/SOUL) 强制只读](https://github.com/agentscope-ai/QwenPaw/issues/4020)，防止 Agent 误操作覆盖人格或长期记忆。
- **架构演进**：[#4024 建议借鉴 Hermes 机制升级](https://github.com/agentscope-ai/QwenPaw/issues/4024)，社区对底层架构优化保持高度关注。
- **功能细化**：[#3996 请求 DeepSeek V4 支持多级思考模式](https://github.com/agentscope-ai/QwenPaw/issues/3996)，不仅仅是简单的开关，而是支持 xhigh/max 等细粒度控制。

## 7. 用户反馈摘要
- **配置持久化痛点**：用户多次提及配置文件在版本更新后被覆盖或重置（如 #4018），希望改进配置迁移策略。
- **本地模型体验**：Ollama 用户近期遭遇了连接和记忆丢失（#3991）的双重打击，体验较差，随着相关 PR 的合并应有所缓解。
- **前端性能**：Web UI 的响应速度（#4023）仍是影响日常使用的负面因素。

## 8. 待处理积压
- **[#2430 系统托盘功能](https://github.com/agentscope-ai/QwenPaw/issues/2430)**：Windows 客户端用户强烈希望支持最小化到托盘，避免关闭窗口即停止服务，该 Issue 自 3 月底开放至今未有关键进展。
- **[#3944 Auto-Memory 排除心跳任务](https://github.com/agentscope-ai/QwenPaw/issues/3944)：系统心跳和定时任务不应进入记忆整理流程，目前仍为 Open 状态。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-05-04)

## 1. 今日速览
ZeptoClaw 今日呈现高度活跃的开发状态，核心架构迎来重大升级。项目核心维护者 @qhkm 主导完成了 **Agent 中间件框架的重构落地**（PR #564），标志着 Issue #399 规划的第一阶段顺利完成。与此同时，项目开始布局 **"Hermes Agent 自我改进循环"** 功能集，连续发起了技能管理、遥测、记忆触发等新功能的提案（Issue #567-#569）。整体来看，项目正处于从基础能力建设向智能化、自治化架构演进的关键时期。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 19 个 PR 被合并，主要集中在架构重构与依赖维护两方面，进展显著：

*   **核心架构重构落地**：PR #564 (refactor(agent): middleware framework) 已合并。这是今日最重要的更新，引入了中间件框架及 11 个实现，为 Agent 的请求处理流水线奠定了基础。此举关闭了早期的脚手架 PR #404，标志着 Issue #399 重构计划的第一阶段正式完成。
*   **文档与定位对齐**：PR #570 和 #566 正在处理文档更新，重新校准了项目定位为 "local-first personal AI assistant infrastructure"，并更新了 provider/channel 数量与测试状态，确保了文档与代码实现的一致性。
*   **依赖维护**：合并了约 15+ 个 Dependabot PR，涵盖 Rust 核心库、JS SDK 及 GitHub Actions 的版本升级。重点包括：
    *   `tokio` 升级至 1.51.1 (PR #550)
    *   `libc` 升级至 0.2.185 (PR #560)
    *   `astro` 与 `vite` 等前端工具链升级。
    这表明项目在快速迭代的同时，保持了良好的依赖健康度。

## 4. 社区热点
今日讨论与活跃焦点主要集中在功能增强提案上：

*   **[feat] Agent 自我改进能力探索 (Issue #567, #568, #569)**
    *   **链接**: [#567](link) | [#568](link) | [#569](link)
    *   **分析**: 维护者提出了一系列关于 "Hermes Agent" 模式的实现提案。核心诉求是让 Agent 具备 "自我管理技能" 和 "持久化知识" 的能力。
    *   #567 提议赋予 Agent CRUD 权限来管理用户技能；
    *   #568 提议增加遥测数据以判断技能的冷热状态；
    *   #569 提议优化长期记忆工具的触发引导。
    这反映了项目正试图解决 AI Agent "用过即忘" 和 "技能固化" 的行业痛点。

*   **[feat] Liquid AI 提供商集成 (Issue #541)**
    *   **链接**: qhkm/zeptoclaw Issue #541
    *   **分析**: 该 Issue 已关闭。此前讨论了集成针对边缘端优化的非 Transformer 架构模型（LFM），这可能意味着相关功能已经完成或因策略调整而结项。

## 5. Bug 与稳定性
*   **崩溃/阻塞问题**：今日未报告严重崩溃或阻断性 Bug。
*   **潜在风险**：PR #566 的摘要中提到移除了 "stale nextest blocker note"，暗示之前的测试阻塞问题已得到解决，测试链路已恢复通畅。
*   **依赖安全性**：通过大量 Dependabot 更新，修补了潜在的依赖漏洞，项目稳定性维持在较高水平。

## 6. 功能请求与路线图信号
基于今日 Issue 动态，可窥见 ZeptoClaw 的下一阶段路线图重点：

1.  **Self-Improving Loop (高优先级)**：
    *   **Issue #567 (skill_manage tool)**: 允许 Agent 动态修改自身技能集。这是一个极具前瞻性的功能，预示着 Agent 将具备更强的自治能力。
    *   **Issue #568 (usage telemetry)**: 为实现技能自动清理或优化提供数据支撑。
    *   **判断**: 这些 Issue 均已有对应的规划或 PR（如 #571 对应 #569），极可能在近期版本中落地。

2.  **Local-First 基础设施强化**：
    *   Issue #565 与 PR #570 强调了 "Local-first" 定位，暗示后续将更加侧重本地隐私、轻量化部署与边缘计算支持。

## 7. 用户反馈摘要
由于今日活跃 Issue 主要由维护者 @qhkm 发起，暂无外部用户的大规模吐槽或反馈。但从 Issue 内容可推断出维护者对当前痛点的洞察：
*   **痛点**: 缺乏对技能使用情况的感知，导致无法判断哪些技能过时或无用。
*   **痛点**: Agent 难以在长期对话中自发持久化关键知识（"nudges itself to persist knowledge"），需要显式的触发引导。

## 8. 待处理积压
*   **待合并 PR**：目前有 3 个文档与功能增强 PR 处于 Open 状态（#571, #570, #566），建议尽快合并以对齐最新的架构变更。
*   **长期规划**：Issue #399 (Middleware framework) 虽然阶段一已完成，但后续如何将中间件接入 Agent 主循环仍需关注。

---
**分析师点评**：ZeptoClaw 今日的表现显示了项目从 "工具调用" 向 "自主智能体" 跨越的明确意图。中间件架构的落地为后续复杂逻辑提供了工程底座，而 "自我改进" 相关 Issue 的提出则展示了其在 Agent 记忆与进化机制上的深入思考。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*