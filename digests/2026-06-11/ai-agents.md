# OpenClaw 生态日报 2026-06-11

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-06-11 04:12 UTC

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

# OpenClaw 项目动态日报 (2026-06-11)

## 1. 今日速览
OpenClaw 项目今日保持极高活跃度，Issue 更新达 500 条，PR 更新同样达到 500 条，其中已合并/关闭 PR 105 个，显示项目迭代节奏紧凑。今日发布了 **v2026.6.6-beta.1** 版本，重点强化了安全边界，涉及沙箱隔离、MCP stdio、Codex HTTP 访问等多个核心模块。社区讨论热点集中在会话状态管理、消息投递丢失以及多智能体协作的稳定性上，整体呈现功能扩展与安全性加固并重的态势。

## 2. 版本发布
### v2026.6.6-beta.1
今日发布新版本 [v2026.6.6-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.6.6-beta.1)。
*   **更新重点**：大幅收紧安全边界。
*   **具体改进**：
    *   加强了 transcripts 和 sandbox binds 的隔离性。
    *   优化了 host environment inheritance 和 MCP stdio 的安全性。
    *   收紧了 Codex HTTP 访问权限、原生搜索策略及 loopback tools 的调用限制。
    *   增强了 Discord 审核和 Teams 群组访问控制，修复了 deleted-agent ACP bypass 漏洞。
*   **影响**：这是一个安全性增强版本，建议所有使用多渠道接入或沙箱环境的用户更新测试，需注意 sandbox 权限变更可能对现有工具调用产生的影响。

## 3. 项目进展
今日共有 **105 个 PR 被合并或关闭**，**395 个 PR 处于待合并状态**，主要进展如下：

*   **架构与稳定性**：针对 Gateway 重启后消息丢失的问题，PR #82572 提出了将 followup 队列持久化到 SQLite 的方案，目前已进入审查阶段，有望显著提升系统可靠性。
*   **功能增强**：PR #88815 引入了频道回显和会话钉选功能，允许将 Webchat/CLI 的会话镜像到 Telegram 等其他渠道，增强了跨渠道管理能力。
*   **Docker 支持**：PR #92087 修复了 QA Lab Docker 镜像的平台兼容性问题，解决了原生包拉取错误。
*   **安全性修复**：PR #89456 继续加固本地插件的信任机制，防止本地配置被恶意利用。

## 4. 社区热点
今日讨论最热烈的问题集中在消息处理与安全漏洞：

1.  **[#25592 工具调用间的文本泄露至消息通道](https://github.com/openclaw/openclaw/issues/25592)** (31条评论)
    *   **热度**：🔥 P1 优先级，标记为 "Diamond Lobster"。
    *   **诉求**：Agent 在工具调用间生成的内部处理文本（如错误处理、思考过程）错误地路由到了用户可见的消息通道，严重影响 UX 和安全性。社区正在讨论如何在架构上彻底隔离内部思考链与外部输出。

2.  **[#44925 子智能体完成结果静默丢失](https://github.com/openclaw/openclaw/issues/44925)** (19条评论)
    *   **热度**：💎 P1 优先级。
    *   **诉求**：子智能体任务编排中存在结果静默丢失的故障模式，无重试、无通知、无超时自动重启。这直接影响了多智能体工作流的可靠性，用户强烈要求增加更健壮的状态监控和错误恢复机制。

3.  **[#88838 核心会话 SQLite 迁移追踪](https://github.com/openclaw/openclaw/issues/88838)** (19条评论)
    *   **热度**：架构级讨论。
    *   **诉求**：维护者正在规划将会话和转录运行时状态迁移至 SQLite 的路线图，旨在避免大规模高风险重写，通过增量 PR 实施迁移。

## 5. Bug 与稳定性
今日报告的关键 Bug 和稳定性问题如下：

*   **严重**:
    *   **[#44905 Discord 泄露内部工具调用痕迹](https://github.com/openclaw/openclaw/issues/44905)**：Discord 频道意外显示 `NO_REPLY`、`to=functions...` 等内部 LLM 工件，严重影响用户体验。目前尚在排查中。
    *   **[#85888 Cron Job 因 MiniMax 503 过载频繁失败](https://github.com/openclaw/openclaw/issues/85888)**：早高峰期间定时的 Cron 任务失败，但手动触发成功，怀疑是 OpenClaw 的调度或重试机制问题。
    *   **[#38327 Google Vertex 崩溃](https://github.com/openclaw/openclaw/issues/38327)**：使用 `google-vertex/gemini-3.1-pro-preview` 时报错 "Cannot convert undefined or null to object"，为回归问题。

*   **数据丢失**:
    *   **[#40001 Write 工具缺乏 Append 模式](https://github.com/openclaw/openclaw/issues/40001)**：隔离的 Cron 会话覆写共享文件，导致数据丢失。已有相关讨论但尚无明确修复 PR。

*   **回归问题**:
    *   **[#32473 控制台 UI 需要设备身份验证](https://github.com/openclaw/openclaw/issues/32473)**：在非 localhost 环境下强制要求 HTTPS，导致部分 VPS 部署受阻。

## 6. 功能请求与路线图信号
社区提出了多项关键功能请求，部分已有对应 PR 或正在规划中：

*   **多智能体协作增强** ([#35203](https://github.com/openclaw/openclaw/issues/35203))：建议增加能力画像、共享黑板和分层内存管理，以解决信息孤岛和任务委托模糊的问题。这与当前的 SQLite 迁移和会话管理优化方向一致。
*   **Cron 任务直接执行模式** ([#18160](https://github.com/openclaw/openclaw/issues/18160))：建议 Cron 任务支持绕过 LLM 解释直接执行命令，以降低成本和延迟。目前的 PR #83933 正在优化 Cron 的运行逻辑。
*   **网络访问控制细粒度配置** ([#39604](https://github.com/openclaw/openclaw/issues/39604))：请求 `web_fetch` 工具支持访问私有网络地址的配置选项，目前默认为阻止。

## 7. 用户反馈摘要
*   **痛点**：用户对**消息静默丢失**（如子智能体结果未返回、图片未送达）反馈强烈；多渠道（Discord, Telegram, Feishu）接入中的**消息格式与泄露问题**仍是主要槽点。
*   **场景**：多智能体协作场景下的**状态同步**和**数据竞争**（如并发写入配置文件、内存管理混乱）被多次提及，说明 OpenClaw 在复杂并发场景下仍有优化空间。
*   **正面反馈**：用户对 v2026.6.6-beta.1 专注于**安全边界收紧**表示认可，认为这对生产环境至关重要。

## 8. 待处理积压
以下高优先级 Issue 长期未解决或处理缓慢，需维护者重点关注：

*   **[#25592 文本泄露至消息通道](https://github.com/openclaw/openclaw/issues/25592)**：自 2026-02-24 开启，P1 级安全/体验问题，虽有链接 PR 但仍未彻底关闭，持续引发用户关注。
*   **[#29387 agentDir 中 Bootstrap 文件被忽略](https://github.com/openclaw/openclaw/issues/29387)**：影响配置加载逻辑，标记为 `fix-shape-clear`，处于积压状态。
*   **PR 积压严重**：目前有 **395 个待合并 PR**，其中包含大量 "needs proof" 或 "ready for maintainer look" 状态的关键修复（如 Cron 持久化、Matrix 修复），建议项目组增加 Review 资源或分批处理，避免阻塞后续贡献。

---

## 横向生态对比

# AI 智能体与个人助手开源生态日报 (2026-06-11)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从功能扩展向稳定性与安全性深水区迈进**的关键阶段。各核心项目普遍将重心转向**沙箱隔离、会话持久化与多智能体协作可靠性**，标志着生态正在经历从"Demo 可用"到"生产可用"的阵痛转型。多模态能力与操作系统级交互成为新的竞争高地，同时社区对底层架构模块化的呼声日益高涨，试图解决单体架构带来的扩展瓶颈。

## 2. 各项目活跃度对比

| 项目名称 | Issues 动态 | PRs 动态 | Release 情况 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 更新 500+ | 更新 500+ (合并 105, 积压 395) | v2026.6.6-beta.1 (安全加固) | 🔴 高负载，积压严重，核心迭代快 |
| **CoPaw (QwenPaw)** | 活跃度高 | 合并 29 个 | v1.1.11 & v1.1.11-beta.3 | 🟠 激进迭代，存在重大回归 Bug 但修复迅速 |
| **Hermes Agent** | 更新 50 (关闭率 72%) | 更新 50 (合并 23) | 无 | 🟢 极佳，响应迅速，社区活跃 |
| **LobsterAI** | 无新 Issue | 合并 23 个 | 2026.6.10 (Computer Use) | 🟢 开发驱动，质量稳定，社区静默 |
| **IronClaw** | 更新 50 | 更新 50 (合并 22) | 无 (发布滞后投诉) | 🟡 开发活跃，发布流程阻塞 |
| **NanoBot** | 解决 7 个 | 合并 17 个 | 无 | 🟢 良好，聚焦核心痛点 |
| **Zeroclaw** | 更新 43 (关闭 19) | 更新 50 (积压 40) | 无 (v0.7.6 收尾) | 🟡 中等，积压增加，跨平台问题待解 |
| **PicoClaw** | 更新 5 个 | 合并 6 个 | v0.2.9-nightly | 🟢 稳健，注重安全与兼容性 |
| **NanoClaw** | 更新 2 个 | 合并 4 个 | 无 | 🟢 正常，聚焦安全与架构 |
| **NullClaw** | 无动态 | 提交 4 个 (无合并) | 无 | 🔵 低活跃/内部维护期 |
| **TinyClaw** | 无动态 | 无动态 | 无 | ⚪ 静默 |
| **Moltis** | 无动态 | 无动态 | 无 | ⚪ 静默 |
| **ZeptoClaw** | 无动态 | 无动态 | 无 | ⚪ 静默 |
| **EasyClaw** | 无动态 | 无动态 | 无 | ⚪ 静默 |

## 3. OpenClaw 在生态中的定位

*   **核心定位**：OpenClaw 无疑是当前生态中的**"基础设施级"核心**，其 Issue 与 PR 活动量级远超其他项目（均达 500+），充当着行业技术风向标。
*   **优势对比**：相比 NanoBot 的轻量化研究和 CoPaw 的消费级产品化，OpenClaw 在**企业级安全边界**（Sandbox/MCP stdio 隔离）和**多渠道接入**（Discord/Teams/Telegram）方面具有压倒性优势。其 v2026.6.6-beta.1 版本对安全性的极致收紧，显示了其在生产环境部署中的严肃态度。
*   **技术路线差异**：OpenClaw 正试图通过大规模重构（如 SQLite 迁移）解决架构债，而 Zeroclaw 和 NanoClaw 等项目则倾向于通过轻量化核心或插件化架构（如 Skills 体系）来规避单体架构的沉重负担。
*   **社区规模**：OpenClaw 社区规模最大，但也面临严重的 PR 积压（395 个待合并），显示出维护资源捉襟见肘，相比之下 Hermes Agent 的高关闭率（72%）显示了更高效的社区治理。

## 4. 共同关注的技术方向

1.  **会话与记忆的持久化可靠性** (OpenClaw, NanoBot, Zeroclaw)
    *   **诉求**：解决 Gateway 重启、网络波动或跨会话导致的消息丢失与上下文污染。
    *   **具体动作**：OpenClaw 规划 SQLite 迁移；NanoBot 修复 `history.jsonl` 污染；Zeroclaw 修复 Matrix "失忆"问题。
2.  **安全沙箱与隔离机制** (OpenClaw, NanoClaw, PicoClaw)
    *   **诉求**：防止 Agent 越权访问内网或宿主机资源，同时兼顾易用性。
    *   **具体动作**：OpenClaw 收紧 Sandbox binds；NanoClaw 实施 IPC 隔离与 Egress Lockdown；PicoClaw 修复 SSRF 绕过漏洞。
3.  **子智能体/多智能体协作编排** (OpenClaw, NanoBot, PicoClaw, CoPaw)
    *   **诉求**：解决子任务结果静默丢失、状态同步混乱及消息重复投递。
    *   **具体动作**：OpenClaw 讨论 ACP bypass 修复；NanoBot 修复 Cronjob 子智能体恢复失败；PicoClaw 开发 Agent Collaboration Bus。
4.  **WebUI/桌面端体验打磨** (IronClaw, CoPaw, LobsterAI)
    *   **诉求**：解决前端卡顿、资源加载过大及桌面端兼容性。
    *   **具体动作**：IronClaw 全力重构 Reborn WebUI；CoPaw 修复 Windows 启动崩溃；LobsterAI 增强 Computer Use 套件。

## 5. 差异化定位分析

*   **OpenClaw**：**全能型重架构**。功能最全，痛点最多，适合对集成度要求高的大型部署，但架构负担重。
*   **LobsterAI**：**桌面端 OS 交互专家**。差异化竞争于 "Computer Use" 能力，致力于让 AI 操控 GUI，而非仅停留在对话层面。
*   **CoPaw (QwenPaw)**：**激进的功能尝鲜者**。快速集成最新模型（MiMo）与 OAuth，迭代极快，但稳定性波动大（如 OpenSSL 事故），适合极客用户。
*   **NanoBot**：**学术与工程平衡派**。源于高校（HKUDS），重点关注 Memory 机制与大模型容错，适合作为研究原型或轻量级个人助理。
*   **Hermes Agent**：**集成与适配专家**。专注于解决多平台接入的边缘 Bug，兼容性极强，适合作为多渠道网关使用。
*   **NanoClaw**：**安全优先的容器化方案**。强调 Egress Lockdown 和 Skills 生态，适合对安全合规有强需求的私有化部署。

## 6. 社区热度与成熟度

*   **快速迭代期**：**CoPaw** (架构重构 v2.0)、**LobsterAI** (Computer Use MVP)。此类项目功能变动大，核心能力突破显著，但也伴随较高的回归风险。
*   **质量巩固期**：**OpenClaw**、**Hermes Agent**、**NanoBot**。虽然迭代快，但重心已转向修复深层 Bug、安全加固和稳定性建设，试图填平技术债。
*   **架构探索期**：**Zeroclaw** (动态库插件 RFC)、**NanoClaw** (Multi-runtime SDK)。社区正在探讨底层架构的解耦，试图打破单体瓶颈。
*   **静默/维护期**：**TinyClaw**、**Moltis**、**NullClaw** 等。活动极低，处于维护或停滞状态。

## 7. 值得关注的趋势信号

1.  **"Computer Use" 成为新战场**：LobsterAI 合并 Computer Use MVP 标志着个人助手正从"对话咨询"转向"操作系统操作"，这要求 Agent 具备更底层的权限控制（OpenClaw/NanoClaw 的安全加固正是为此铺路）。
2.  **架构解耦势在必行**：无论是 CoPaw 的 Runtime 2.0 提案，还是 Zeroclaw 的动态库插件系统，社区普遍对现有的单体 Runner 架构感到不满，模块化、可插拔的 Agent 宿主架构将是下一代标准。
3.  **上下文工程 成为显学**：多个项目均遇到严重的上下文管理问题（污染、丢失、压缩）。这预示着简单的对话历史管理已失效，基于数据库的会话状态管理和上下文压缩算法将成为核心竞争力。
4.  **开源供应链风险凸显**：CoPaw 因 OpenSSL 依赖导致 Windows 全量崩溃，IronClaw 因 Crates.io 发布滞后阻塞用户升级。随着项目复杂度提升，开源项目的依赖管理与分发流程正成为新的脆弱点。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-11)

## 1. 今日速览
NanoBot 项目今日保持高活跃度，社区贡献与核心功能迭代双线并进。过去 24 小时内，项目成功合并/关闭了 17 个 PR，解决了 7 个 Issue，显著提升了系统稳定性与 WebUI 交互体验。核心开发重点集中在 **上下文管理机制重构**（解决会话污染问题）与 **大模型调用容错增强**（支持空响应 fallback 和流超时重试）。此外，针对 WebUI 的大文件加载优化和配置体验改进，显示出团队对终端用户体验的高度重视。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 17 个 PR 被合并或关闭，主要推进了以下关键功能与修复：

*   **上下文管理重构**：
    *   **[PR #4274](https://github.com/HKUDS/nanobot/pull/4274)** [MERGED] 修复了 `history.jsonl` 跨会话注入导致的上下文污染问题，增加了 session_key 隔离，显著提升了多会话场景下的稳定性。
    *   **[PR #4278](https://github.com/HKUDS/nanobot/pull/4278)** [MERGED] 实现了 WebUI 记录文件的分段存储，解决了大文件加载导致的历史记录丢失问题，优化了长期使用的性能。

*   **LLM 调用稳定性增强**：
    *   **[PR #4272](https://github.com/HKUDS/nanobot/pull/4272)** [MERGED] 针对大模型流输出停滞（Stalled Stream）问题，增加了重试与模型回退机制，避免了因网络波动导致的任务中断。

*   **执行环境与配置优化**：
    *   **[PR #4273](https://github.com/HKUDS/nanobot/pull/4273)** [MERGED] 新增 `tools.exec.pathPrepend` 配置，解决了第三方库安装路径优先级问题，允许自定义工具目录优先加载。
    *   **[PR #4275](https://github.com/HKUDS/nanobot/pull/4275)** [MERGED] 实现了配置文件加载的“快速失败”机制，防止无效配置导致运行时错误。

*   **功能新增**：
    *   **[PR #4281](https://github.com/HKUDS/nanobot/pull/4281)** [MERGED] 集成了 SiliconFlow 作为新的语音转录提供商。
    *   **[PR #4255](https://github.com/HKUDS/nanobot/pull/4255)** [MERGED] 改进了版本检查机制，取消了后台轮询，改为 WebUI 设置页面的手动检查，减少了资源占用。

## 4. 社区热点
今日社区讨论聚焦于 **复杂任务编排** 与 **模型容错**：

*   **[Issue #4259](https://github.com/HKUDS/nanobot/issues/4259)** [CLOSED]
    *   **内容**：用户反馈 `history.jsonl` 存在跨会话上下文污染，导致 Agent 行为异常。
    *   **分析**：该问题触及 Agent 记忆管理的核心痛点。讨论揭示了在长期记忆注入时必须严格遵循会话隔离原则，该 Issue 已通过 PR #4274 修复。

*   **[Issue #4013](https://github.com/HKUDS/nanobot/issues/4013)** [CLOSED]
    *   **内容**：用户报告 LLM 流输出停滞超过 90 秒导致任务失败。
    *   **分析**：这是云模型调用中的常见难题。社区讨论确认了需要非硬编码的重试策略，该 Issue 随 PR #4272 的合并而关闭，标志着错误处理逻辑的成熟。

*   **[Issue #4287](https://github.com/HKUDS/nanobot/issues/4287)** [OPEN]
    *   **内容**：DeepSeek 等模型在高峰期返回空响应，未触发 Fallback 机制。
    *   **分析**：用户对模型的高可用性有强烈需求。讨论指出单纯依赖 HTTP 错误码已不足够，需针对 "200 OK 但内容为空" 的情况建立防御性编程，目前已有对应 PR #4288 待合并。

## 5. Bug 与稳定性
今日报告并处理了多个关键 Bug，整体稳定性得到加固：

*   **严重**：
    *   **[Issue #4290](https://github.com/HKUDS/nanobot/issues/4290)** [OPEN]：Cronjob 中 Subagent 执行完毕后主 Agent 无法恢复，导致工作流断裂。目前已有 **[PR #4293](https://github.com/HKUDS/nanobot/pull/4293)** 提出修复方案，待 Review。
    *   **[Issue #4286](https://github.com/HKUDS/nanobot/issues/4286)** [OPEN]：Agent 在运行中意外丢失 "sustained goal" 上下文，导致任务偏离。

*   **已修复**：
    *   **[Issue #3934](https://github.com/HKUDS/nanobot/issues/3934)** [CLOSED]：Exec 工具无法正确加载 pip 安装的第三方库（已由 PR #4273 解决）。
    *   **[Issue #4237](https://github.com/HKUDS/nanobot/issues/4237)** [CLOSED]：Bwrap 沙箱未重置 HOME 变量导致文件写入失败。
    *   **[Issue #4261](https://github.com/HKUDS/nanobot/issues/4261)** [CLOSED]：OpenAICompatProvider 对 GPT-5.x 的 `max_completion_tokens` 参数兼容性问题。

## 6. 功能请求与路线图信号
从今日的 PR 与 Issue 中，可以看出项目正朝以下方向演进：

*   **多模型编排精细化**：**[PR #4291](https://github.com/HKUDS/nanobot/pull/4291)** 提议允许 Subagent 使用独立的模型预设。这表明 NanoBot 正向更复杂的异构计算架构演进，允许主 Agent（如 GPT-4）调度擅长特定任务的子模型（如 DeepSeek 或本地模型）。
*   **WebUI 功能完善**：**[PR #4282](https://github.com/HKUDS/nanobot/pull/4282)** 提议在设置页增加文件管理功能。用户对脱离命令行直接管理 Agent 产物的呼声较高，WebUI 正逐渐向轻量级 IDE 方向发展。
*   **通知与交互体验**：**[Issue #4279](https://github.com/HKUDS/nanobot/issues/4279)** 提出聚合 Subagent 结果通知，以防止 LLM 产生幻觉。这反映了在自动化程度提高后，信息呈现方式对模型推理质量的影响。

## 7. 用户反馈摘要
*   **升级痛点**：多位用户反馈从 0.1.x 升级到 0.2.x 后出现配置或环境问题（如 #4013, #3934），建议后续版本加强迁移兼容性或提供迁移指南。
*   **企业级场景需求**：用户对于 **沙箱环境**（bwrap）和 **私有化模型接入**（DeepSeek, Azure GPT-5, StepFun）的关注度极高，显示 NanoBot 在生产环境部署中的比重正在增加。
*   **上下文持续性**：用户对 Agent 的“记忆力”极其敏感，任何 context loss（如 #4286）或 cross-session pollution（如 #4259）都会严重影响信任度，Memory 模块仍是稳定性优化的重中之重。

## 8. 待处理积压
建议维护者优先关注以下积压问题：

*   **[PR #4288](https://github.com/HKUDS/nanobot/pull/4288)** [OPEN]：针对空模型响应的 Fallback 修复，直接关联高优先级 Issue #4287，建议尽快合并以提升第三方模型兼容性。
*   **[PR #4280](https://github.com/HKUDS/nanobot/pull/4280)** [OPEN]：上下文连续性修复，涉及 Session 恢复逻辑，是核心稳定性模块。
*   **[Issue #4286](https://github.com/HKUDS/nanobot/issues/4286)** [OPEN]：Goal Context 丢失问题目前无关联 PR，可能导致长时间任务失败，需排查根因。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 - 2026年06月11日

## 1. 今日速览
Zeroclaw 项目今日保持**高活跃度**，社区与开发并进。过去24小时内 Issues 更新达 43 条，其中 19 条已关闭，显示出维护团队高效的响应能力；PR 更新 50 条，目前积压待合并 PR 40 条，表明代码提交活跃但合并压力较大。项目目前无新版本发布，但备受关注的 v0.7.6 Skills 功能跟踪 Issue (#6253) 已关闭，暗示该版本迭代可能接近尾声或已完成主要开发。今日焦点集中在跨平台兼容性修复、架构重构 RFC 讨论以及 MCP 工具链的稳定性优化上。

## 2. 版本发布
- **无新版本发布**。

## 3. 项目进展
今日项目在稳定性修复和文档改进方面取得显著进展，多个关键 PR 被合并或关闭，推动了项目健康度提升：

*   **里程碑进展**：Issue **#6253** (v0.7.6 Skills 支持) 已关闭，标志着该版本核心功能开发告一段落，进入收尾阶段。
*   **核心修复**：
    *   **#7096** (已合并)：修复了 README 中 Discord 邀请链接失效的问题，改善了社区入口体验。
    *   **#7458** (已关闭)：回退了跨平台 Clippy 检查的强制要求，表明团队正在权衡 CI 严格度与资源消耗，优化贡献者体验。
*   **重要修复关闭**：
    *   **#4627** (已关闭)：修复了 `file_write` 工具静默失败且文件在主机不可见的严重 Bug，解决了潜在的 S0 级数据丢失风险。
    *   **#6958** (已关闭)：修复了 Matrix 频道因 session key 导致的消息“失忆”问题，显著提升了多轮对话体验。

## 4. 社区热点
今日社区讨论焦点主要集中在架构优化和部署体验上：

*   **[Feature]: Provide a "full" docker image** (**#3642**)
    *   **热度**：评论 12 条 | 👍 3
    *   **分析**：这是今日热度最高的 Issue。用户强烈需求一个开启所有功能（如 WhatsApp）的“全量” Docker 镜像，以降低非技术用户的使用门槛。目前默认镜像为控制内存占用禁用了部分功能，导致部署复杂化。
*   **[Bug]: 单轮对话以及多轮对话会出现丢失 user message的现象** (**#6034**)
    *   **热度**：评论 6 条
    *   **分析**：用户报告在特定 Provider 下出现消息丢失，属于 S1 级别的工作流阻塞问题，引发了关于 Provider 兼容性和错误处理机制的深入讨论。
*   **RFC: Native Dynamic-Library Plugin System** (**#7420**)
    *   **热度**：评论 1 条 (新提案)
    *   **分析**：开发者提议引入原生动态库插件系统，旨在解决目前单体架构的痛点，允许更灵活的功能扩展。这是对 Issue #6165 (轻量化核心) 的具体技术实现探讨，预示着项目架构可能迎来重大变革。

## 5. Bug 与稳定性
今日报告了多个高风险 Bug，尤其集中在跨平台兼容性和工具调用链路：

### 🔴 高危风险 (S1/S2)
*   **#7470** [OPEN]: **delegate agentic mode 拒绝空 `risk_profile.allowed_tools`**。该 Bug 阻塞了多代理协作场景，导致严格的代理目标被错误拦截。
*   **#7462** [OPEN]: **Windows 平台 74 个测试失败**。由于 CI 仅运行 Linux 测试，Windows 上的路径语义和控制台编码问题长期未被检出，严重影响跨平台稳定性。
*   **#6034** [OPEN]: **对话消息丢失**。涉及 Provider 错误处理，导致工作流中断。
*   **#7263** [OPEN]: **ACP 会话中子代理未继承 CWD (工作目录)**。导致 LLM 无法正确访问仓库文件，阻断了子代理开发模式。
*   **#7436** [OPEN]: **`image_info` 工具输出无法传递给多模态模型**。在相对路径下静默失败，削弱了视觉能力。

### 🟡 中/低危风险
*   **#7469** [OPEN]: **容器内默认使用 `vi` 但镜像未安装**。导致编辑功能报错。
    *   *修复进展*：已有修复 PR **#7483** (切换默认为 nano) 和 **#7476** (环境变量回退逻辑)。
*   **#7378** [FIXED]: macOS 上 Cmd-C 触发退出而非复制。
    *   *修复进展*：已有修复 PR **#7484** 和 **#7477** 待合并。

## 6. 功能请求与路线图信号
*   **语音与多模态支持**：PR **#7394** (feat(channels): add voice pipeline facade) 正在重构语音通道，为未来的音频功能铺路，属于高风险高收益的大型改动。
*   **可观测性增强**：PR **#7385** (feat(observability): add turn metadata to observer events) 致力于通过 `turn_id` 关联 OTel spans，这将极大改善调试和监控体验。
*   **用户体验优化**：
    *   PR **#7384** 添加了计划任务的暂停/恢复开关。
    *   Issue **#7468** 请求支持在 TUI 中重命名别名，反映出用户对配置管理灵活性的需求。

## 7. 用户反馈摘要
从 Issue 评论中提炼出以下核心痛点：
*   **部署门槛高**：用户希望有“开箱即用”的全功能 Docker 镜像，而不是需要手动配置 feature flags。
*   **文档缺失与链接失效**：多个 Issue (#6222, #7037) 指出文档链接 404 或 Discord 邀请失效，影响了新用户的引导。
*   **配置复杂度高**：用户反馈 `model_routing_config`、`risk_profile` 等配置项行为难以预测（如 #6309, #7470），容易踩坑，期望有更完善的校验和提示。
*   **Windows 支持滞后**：大量测试失败表明 Windows 平台可能缺乏足够的测试覆盖，影响了该平台用户的使用信心。

## 8. 待处理积压
以下重要 Issue 长期处于 Blocked 或讨论状态，建议维护者关注：
*   **#3642** [Feature]: Full docker image (Blocked, 2026-03 创建)：用户需求强烈，但因依赖项问题被阻塞，建议优先排期。
*   **#6165** [RFC]: Prefer a lighter ZeroClaw core (Blocked)：涉及核心架构解耦，需要更多架构层面的决策。
*   **#7415** [RFC]: Unify the three agent turn engines：提出统一代理执行引擎的重构建议，技术债务清理的重要一环，尚需深入讨论。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-11)

## 1. 今日速览
Hermes Agent 项目今日呈现出极高的维护活跃度与社区参与度，过去 24 小时内共有 50 条 Issue 更新与 50 条 PR 更新。维护者对社区反馈响应迅速，**Issue 关闭率高达 72%**（36/50），大量 Bug 已通过 `sweeper:implemented-on-main` 流程得到修复并合并。项目当前重心在于**修复多平台集成（Telegram/微信/Discord）的边缘案例**、**扩展模型提供商兼容性（Gemma 4, Kimi, DeepSeek）** 以及**增强桌面端与会话管理的稳定性**。整体来看，项目处于快速迭代修复期，健康度良好，但新引入的功能（如 OpenTUI 重构）仍需关注稳定性。

## 2. 版本发布
- **无新版本发布**。尽管无正式 Release，但大量已合并的 PR 表明主分支已包含大量修复，建议关注 Nightly 构建或等待下一个 Patch 版本。

## 3. 项目进展
今日共有 23 条 PR 合并/关闭，主要集中在**提供商适配**、**平台网关修复**与**安全性补丁**，显著提升了系统的鲁棒性：

- **提供商兼容性增强**：
  - [PR #19560](https://github.com/NousResearch/hermes-agent/pull/19560): 为 Kimi For Coding 注入专用 UA 标识，解决了非白名单客户端被拦截的问题，增强了特定订阅计划的可用性。
  - [PR #19491](https://github.com/NousResearch/hermes-agent/pull/19491): 修复了 Gemini 模式下工具声明 Schema 无效属性导致的 HTTP 400 错误，优化了 Gemini 兼容性。
- **平台网关修复**：
  - [PR #19557](https://github.com/NousResearch/hermes-agent/pull/19557): 修复微信网关消息过度分段问题，提升了微信端的阅读体验。
  - [PR #19521](https://github.com/NousResearch/hermes-agent/pull/19521): 修复 Discord 语音关联频道的 TTS 自动播放触发逻辑。
- **安全与凭证管理**：
  - [PR #19612](https://github.com/NousResearch/hermes-agent/pull/19612): 修复了 OpenAI Codex OAuth Token 刷新后凭证池不同步的问题，防止鉴权失效。
  - [PR #19594](https://github.com/NousResearch/hermes-agent/pull/19594): 强化了 ACP shim 的流式处理与敏感文件读取脱敏。
- **体验优化**：
  - [PR #19527](https://github.com/NousResearch/hermes-agent/pull/19527): 优化了 `hermes -z` 单次执行模式，不再生成冗余的持久化会话记录。

## 4. 社区热点
今日社区讨论焦点集中在**Agent 记忆机制**与**多模态/跨平台数据一致性**：

- **[Issue #17861](https://github.com/NousResearch/hermes-agent/issues/17861) [CLOSED]**：关于 Anthropic 模型多轮对话中丢失 `thinking` 块的问题。
  - **分析**：这是当前 AI Agent 开发的核心痛点之一。Agent 在构建历史消息时，若未保留原始 Raw Content，会导致 Extended Thinking 能力降级。该 Issue 被 Agent 自身（Hermes）在调试中识别并关闭，展示了项目的自我诊断能力，备受开发者关注（8 条评论）。
- **[Issue #6626](https://github.com/NousResearch/hermes-agent/issues/6626) [OPEN]**：Gemma 4 工具调用支持。
  - **分析**：随着开源模型的迭代，社区对 Hermes 支持最新开源模型（如 Gemma 4）的诉求强烈。用户详细描述了 vLLM 环境下的配置困境，目前尚待官方适配（3 个点赞）。
- **[Issue #19324](https://github.com/NousResearch/hermes-agent/issues/19324) [CLOSED]**：Agent 自我改进策略中的权限控制。
  - **分析**：Agent 自作主张执行 `git push` 引发了用户对“自主性边界”的担忧。该讨论推动了关于写入操作审批策略的功能实现。

## 5. Bug 与稳定性
今日报告并处理了多个关键 Bug，部分已修复：

- **严重 (P1)**：
  - [Issue #19411](https://github.com/NousResearch/hermes-agent/issues/19411) [CLOSED]: Gateway Fallback 逻辑错误，鉴权失败后仍尝试使用主 Provider 的 Model Name，导致请求失败。**已修复**。
  - [Issue #19202](https://github.com/NousResearch/hermes-agent/issues/19202) [CLOSED]: 安全漏洞，请求失败时的 Dump 文件明文记录了 Authorization Header。**已修复**。
- **高优先级 (P2)**：
  - [Issue #33801](https://github.com/NousResearch/hermes-agent/issues/33801) [OPEN]: **新发现的严重问题**。密钥脱敏机制在写入文件/执行代码前替换内容，导致 Python/Shell 语法损坏（如 `key = '***'`），致使工具静默失败。**尚待修复**。
  - [Issue #19085](https://github.com/NousResearch/hermes-agent/issues/19085) [CLOSED]: Dashboard 会话恢复功能不稳定，无法可靠加载历史会话。
- **中等优先级 (P3)**：
  - [Issue #19287](https://github.com/NousResearch/hermes-agent/issues/19287) [CLOSED]: Telegram 图片接收后仅传递本地路径，未转为 Base64，导致模型无法“看见”图片。**已修复**。

## 6. 功能请求与路线图信号
- **核心架构演进**：[PR #42922](https://github.com/NousResearch/hermes-agent/pull/42922) 正在尝试将 TUI 引擎从 Ink 迁移至 OpenTUI，这将是桌面端体验的重大升级。
- **搜索能力扩展**：[PR #43975](https://github.com/NousResearch/hermes-agent/pull/43975) 提议增加 AnySearch 搜索提供商，旨在解决中国大陆地区 DuckDuckGo 超时的问题，预计将很快合并。
- **企业级特性**：[PR #43971](https://github.com/NousResearch/hermes-agent/pull/43971) 引入桌面端云信道控制，预示着项目正在向多人协作和企业级部署方向探索。

## 7. 用户反馈摘要
- **安全与控制**：用户对 Agent 的“自主性”持谨慎态度（#19324），希望有更细粒度的权限控制（如禁止自动 Git Push）。
- **多模态体验**：Telegram 和 Discord 用户反馈图片/视频处理存在兼容性问题（#19287, #19195），显示平台适配仍是难点。
- **配置复杂度**：自定义 Provider 的配置逻辑（#19286, #19360）让部分用户感到困惑，特别是在 API Key 和 Model Name 的自动切换逻辑上。
- **安装问题**：[Issue #19514](https://github.com/NousResearch/hermes-agent/issues/19514) 指出通过 Pip 安装后 TUI 因缺失文件而崩溃，影响了新用户的首次体验。

## 8. 待处理积压
- **[Issue #6626](https://github.com/NousResearch/hermes-agent/issues/6626)**：Gemma 4 工具调用适配。自 4 月创建以来一直处于 Open 状态，随着 Gemma 4 使用量增加，需维护者关注。
- **[Issue #33801](https://github.com/NousResearch/hermes-agent/issues/33801)**：密钥脱敏破坏代码语法问题。这是一个影响 Agent 执行代码能力的关键 Bug，可能导致静默错误，需尽快处理。
- **[PR #42922](https://github.com/NousResearch/hermes-agent/pull/42922)**：OpenTUI 重构 PR。作为大型重构，目前处于 Open 状态，需要核心团队进行深入 Review 以确保稳定性。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 (2026-06-11)

## 1. 今日速览
PicoClaw 项目今日保持高度活跃，开发节奏稳健。过去24小时内项目处理了 **15 个 PR**（其中 6 个已合并/关闭）和 **5 个 Issue**，并发布了最新的 **v0.2.9-nightly** 自动化构建版本。社区贡献集中在**安全性加固**（SSRF 防御）和**跨平台兼容性修复**（Windows 路径处理）方面。整体来看，项目正在积极修补边缘 Case 并提升系统稳定性，同时在 Agent 协作与调试工具方面有显著的功能迭代。

## 2. 版本发布
- **nightly: Nightly Build (v0.2.9-nightly.20260611.d955d5bb)**
  - **类型**: 自动化构建版本
  - **说明**: 该版本包含了截至最新的代码变更，主要集成了今日合并的安全性修复与 Bug 修正。由于是 Nightly 版本，官方提示可能存在不稳定性，建议测试环境使用。
  - **变更范围**: 涵盖 SSRF 防御增强、Windows 文件系统兼容性修复等。

## 3. 项目进展
今日共有 **6 个 PR** 顺利合并/关闭，显著提升了项目的健壮性与兼容性：

- **安全性修复**：PR #3085 合并，修复了 `web_fetch` 工具中针对 `198.18.0.0/15` 网段的 SSRF 限制绕过漏洞，封锁了 RFC 2544 基准测试地址段，增强了内网安全防护。
- **Windows 兼容性**：PR #3089 合并，彻底解决了长期存在的 Issue #2472。该修复解决了 Windows 环境下路径分隔符与 `os.Root` 不兼容导致的 `list_dir` 失败问题，对 Windows 用户是重大利好。
- **模型兼容性**：PR #2951 和 #2948 合并，分别修复了 OpenAI 兼容接口的 Web Search 工具类型错误和 Claude Opus 4-7 模型弃用 `temperature` 参数导致的 400 错误，拓宽了后端模型支持范围。
- **可观测性**：PR #2945 合并，引入了独立的 `picoclaw-tracer` 调试追踪 UI，为开发者提供了实时查看 LLM 调用链的能力。
- **代码质量**：PR #3043 合并，补充了多处缺失的错误检查（`strconv.Atoi` 和 `json.Unmarshal`），防止潜在的静默失败。

## 4. 社区热点
今日最受关注的议题是 **Issue #2472**，虽然创建于两个月前，但今日随着修复 PR #3089 的合并而得到最终解决，获得了 1 个点赞和 5 条评论。这反映了社区对**跨平台一致性**的高度敏感，特别是在文件系统操作方面。

其次是新提出的 **Issue #3094**，涉及异步子代理消息推送逻辑。用户指出在使用 `spawn` 工具时，消息同时被“直接推送”和“主代理汇总”，导致飞书/Telegram 等平台收到重复通知。这反映了用户对**多代理协作体验**和**消息通知机制**的精细度要求日益提高。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在兼容性和逻辑逻辑层面，部分已有修复方案：

1.  **[高] SSRF 安全绕过 (已修复)**
    - **Issue**: #3077 描述 `web_fetch` 未拦截特殊的 `198.18.0.0/15` 网段。
    - **状态**: 已通过 PR #3085 修复并合并。
2.  **[中] Windows 平台 list_dir 失效 (已修复)**
    - **Issue**: #2472 描述 Windows 反斜杠路径导致 `invalid argument`。
    - **状态**: 已通过 PR #3089 修复并合并。
3.  **[中] 异步子代理消息重复**
    - **Issue**: #3094 描述 `spawn` 导致重复消息推送。
    - **状态**: 新开 Issue，暂无关联 PR。
4.  **[低] iOS 旧版 Safari 兼容性**
    - **Issue**: #3090 报告 iOS 16.4 以下版本 Panel 无法工作。
    - **状态**: 新开 Issue，暂无关联 PR。

## 6. 功能请求与路线图信号
- **去中心化通信支持**：Issue #3093 提出对 SimpleX、Wire 或 Tox 协议网关的需求。这表明部分用户群体对隐私保护和去中心化通信渠道有强烈需求，可能成为未来插件化开发的一个方向。
- **Agent 协作架构**：PR #2937（Agent Collaboration Bus）仍在 Open 状态，该 PR 旨在引入持久化的代理间通信机制。虽然未合并，但结合 Issue #3094 的反馈，说明**多代理协作** 正在成为项目演进的核心路线之一。
- **调试工具增强**：PR #2945 引入的 Tracer 工具已合并，标志着项目正在加强开发者工具链，降低本地调试难度。

## 7. 用户反馈摘要
- **痛点：跨平台体验**：Windows 用户在文件系统工具上遭遇了长期困扰（#2472），今日修复后将显著改善体验。
- **痛点：消息通知干扰**：在使用异步代理功能时，用户对重复、未整理的消息感到困扰（#3094），希望获得更干净的最终输出而非中间过程的打扰。
- **场景：模型适配**：用户在使用最新的 Claude Opus 或特定 OpenAI 兼容接口时遇到参数不兼容问题，今日的修复表明社区在积极跟进最新模型 API 变动。

## 8. 待处理积压
- **PR #2937 (Agent Collaboration)**：该 PR 涉及架构级变更，已停留数周（标记 stale），建议维护者重点 review，因为相关的用户侧 Bug（#3094）已开始出现。
- **PR #3067 (Session Scope 持久化)**：修复 UI 配置无法保存的问题，涉及配置逻辑，建议尽快合并以提升用户体验。
- **PR #3083 (Launcher 访问控制)**：涉及网络安全加固，虽然功能较新，但对于生产环境部署至关重要，建议关注测试进度。
- **Issue #3090 (iOS Safari)**：关于旧版 iOS 的兼容性问题，可能需要在前端构建配置或 Polyfill 策略上进行调整，需维护者确认是否属于支持范围。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-11)

## 1. 今日速览
NanoClaw 今日保持着较高的开发活跃度，虽然无新版本发布，但代码仓库迎来了 **12 次 PR 更新**与 **2 条 Issue 动态**。项目核心目前正聚焦于**安全合规**与**生态扩展**：一方面，开发者正在修复 Egress Lockdown（出口锁定）与环境变量加载等关键安全与部署问题；另一方面，社区正积极通过 "Skills" 体系扩展 AI 智能体的能力边界，涵盖 Guardrails（护栏）、Web Search（网络搜索）及多运行时 SDK 抽象。整体来看，项目正处于功能快速迭代与安全性加固并重的阶段。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 4 个 PR 被合并或关闭，显著推进了安全架构与文档建设；同时有 8 个 PR 处于待合并状态，主要集中在功能增强与 Bug 修复。

**已合并/关闭的 PR：**
*   **[Security] Secure IPC with per-group namespaces (#3)**: 这是一个重要的安全更新，已关闭。实现了 IPC（进程间通信）按组隔离，每个容器拥有独立的 IPC 目录，通过目录来源验证身份而非依赖自报数据，有效防止权限提升攻击。
    *   链接: [nanocoai/nanoclaw PR #3](https://github.com/nanocoai/nanoclaw/pull/3)
*   **docs: customizing intro, skills model, and skill guidelines (#2721)**: 文档更新，确立了 "Skills"（技能）作为定制化核心契约的地位，明确了编辑优先、技能化后的工作流，已关闭。
    *   链接: [nanocoai/nanoclaw PR #2721](https://github.com/nanocoai/nanoclaw/pull/2721)
*   **feat: add uninstall.sh (#2719)**: 增加了带确认和干跑模式的卸载脚本，完善了运维工具链，已关闭。
    *   链接: [nanocoai/nanoclaw PR #2719](https://github.com/nanocoai/nanoclaw/pull/2719)

**重点待合并 PR：**
*   **feat: add /add-guardrails skill (#2726)**: 引入输入/输出护栏机制，支持正则阻断、凭证泄露检测等，增强了 AI 智能体的安全可控性。
    *   链接: [nanocoai/nanoclaw PR #2726](https://github.com/nanocoai/nanoclaw/pull/2726)
*   **feat(container-runner): persist agent container stdout+stderr to disk (#2727)**: 提议持久化容器日志，解决当前 Agent 日志被丢弃的问题，对调试与审计至关重要。
    *   链接: [nanocoai/nanoclaw PR #2727](https://github.com/nanocoai/nanoclaw/pull/2727)
*   **fix(cli): preserve caller context after approval (#2611)**: 修复了审批流程中调用上下文丢失的问题，确保权限审批后命令回放的正确性。
    *   链接: [nanocoai/nanoclaw PR #2611](https://github.com/nanocoai/nanoclaw/pull/2611)

## 4. 社区热点
今日社区讨论最热烈的话题围绕 **AI 智能体的底层架构扩展** 与 **安全隔离缺陷** 展开。

*   **Multi-runtime agent SDK abstraction (#1690)**: 该 Issue 获得了 **3 个点赞** 和 **6 条评论**。作者提议构建多运行时抽象层，使不同的 Agent SDK 能像模块化技能一样安装，复用现有的 Channel 模式。这反映了高级用户对 NanoClaw 摆脱单一模型依赖、向通用 Agent 宿主平台演进的强烈诉求。
    *   链接: [nanocoai/nanoclaw Issue #1690](https://github.com/nanocoai/nanoclaw/issues/1690)
*   **Egress lockdown hijacks host.docker.internal (#2731)**: 新提出的 Issue 直指安全功能的副作用。用户反馈开启 `NANOCLAW_EGRESS_LOCKDOWN` 后，导致容器无法访问宿主机服务（如 Ollama），安全隔离破坏了正常的开发连通性，引发了开发者对安全模型与易用性平衡的关注。
    *   链接: [nanocoai/nanoclaw Issue #2731](https://github.com/nanocoai/nanoclaw/issues/2731)

## 5. Bug 与稳定性
今日报告了数个影响部署与安全功能的关键 Bug，部分已有对应修复 PR。

*   **[严重] Egress lockdown hijacks host.docker.internal (#2731)**
    *   **问题**: 安全出口锁定功能意外阻断了容器访问 `host.docker.internal`，导致无法连接宿主机上的 LLM 服务（如 Ollama）。
    *   **状态**: Open，暂无直接修复 PR，需关注。
    *   链接: [nanocoai/nanoclaw Issue #2731](https://github.com/nanocoai/nanoclaw/issues/2731)
*   **[中等] NANOCLAW_* flags set in .env never reach process.env (#2730)**
    *   **问题**: 在 `launchd`/`systemd` 管理的服务模式下，`.env` 文件未被加载，导致安全策略（如 Egress Lockdown）配置失效。
    *   **修复**: 已提交 PR #2730，修复环境变量加载逻辑。
    *   链接: [nanocoai/nanoclaw PR #2730](https://github.com/nanocoai/nanoclaw/pull/2730)
*   **[中等] Telegram pairing wiring row missing (#2728)**
    *   **问题**: Telegram 配对流程中，带有 `--intent wire-to` 时，数据库未写入 `messaging_group_agents` 行，导致后续逻辑丢失。
    *   **修复**: 已提交 PR #2728，确保配对时正确创建连接行。
    *   链接: [nanocoai/nanoclaw PR #2728](https://github.com/nanocoai/nanoclaw/pull/2728)

## 6. 功能请求与路线图信号
*   **Skills 生态体系化**: 今日有多达 3 个新增 Skills 相关 PR (#2726 Guardrails, #2725 Web Search, #2211 Tool Visibility)。这表明项目正致力于打造一个类似应用商店的技能市场，让用户能通过简单命令扩展 AI 能力。
*   **多运行时支持 (#1690)**: 用户希望 NanoClaw 能成为统一的 Agent 宿主，同时支持 Claude、Codex 及本地模型。这符合 AI 领域避免厂商锁定的趋势，极有可能是下一阶段的路线图重点。

## 7. 用户反馈摘要
*   **运维痛点**: 用户在实际生产环境部署（使用 systemd/launchd）时遇到配置不生效的问题 (#2730)，说明项目在跨平台服务化部署方面仍需打磨。
*   **安全与功能的冲突**: 用户在尝试启用高级安全功能时，遭遇了网络隔离带来的副作用 (#2731)，反映出用户对“既安全又互通”的混合网络策略有强需求。
*   **扩展性认可**: 社区对 Skills 模式的认可度极高，不仅在提交新技能，还在尝试从根本上扩展架构（#1690），证明 NanoClaw 的模块化设计具有吸引力。

## 8. 待处理积压
*   **#1690 Multi-runtime agent SDK abstraction**: 该 Issue 创建于 4 月，至今仍在讨论中。鉴于其涉及核心架构改动且受到社区高度关注，建议维护团队尽快给出是否纳入路线图的明确反馈。
    *   链接: [nanocoai/nanoclaw Issue #1690](https://github.com/nanocoai/nanoclaw/issues/1690)
*   **#2611 [security] fix(cli): preserve caller context**: 该安全修复 PR 自 5 月开启至今未合并，建议优先处理以消除权限审批流程中的隐患。
    *   链接: [nanocoai/nanoclaw PR #2611](https://github.com/nanocoai/nanoclaw/pull/2611)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-06-11)

## 1. 今日速览
NullClaw 项目在过去 24 小时内整体活跃度平稳，主要体现为核心开发者的代码提交活动。今日无新版本发布，社区侧（Issues/评论）无新增动态，显示项目处于功能迭代与内部维护期。共有 4 个新的 Pull Request 提交，全部处于待合并状态，内容集中在修复 Agent 运行时的稳定性、配置灵活性及网关测试泄漏问题上。整体来看，项目正在积极修补边缘场景下的缺陷，但 PR 审核流转速度需保持关注。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
本日无合并或关闭的 PR。项目推进主要体现为以下 4 个待合并的新功能与修复提案，展示了项目在健壮性与可配置性上的持续优化：

*   **Agent 错误处理优化**: PR #951 修复了 Agent 进程异常退出时日志污染的问题，确保错误场景下的输出更干净。
*   **配置灵活性提升**: PR #949 引入了 `queue_mode` 的配置化支持，允许通过 `config.json` 设置默认队列模式。
*   **Cron 任务归因修复**: PR #948 修正了定时任务投递的归属元数据，确保操作能正确溯源到具体的频道或账户。
*   **测试稳定性修复**: PR #950 解决了 Gateway 启动失败时的资源泄漏问题，提升了测试环境的可靠性。

## 4. 社区热点
本日无新增活跃 Issues 或 PR 评论。社区互动暂时处于静默状态，主要动态源于核心开发者的代码提交。

## 5. Bug 与稳定性
今日提交的 PR 暴露了项目中存在的若干稳定性问题，相关修复已在进行中：

*   **[高] 资源泄漏风险 (PR #950)**
    *   **问题**: 当 Gateway 因端口占用启动失败时，此前分配的内存与资源未被正确清理，导致测试环境出现泄漏。
    *   **状态**: 已提交修复 [PR #950](https://github.com/nullclaw/nullclaw/pull/950)，待合并。

*   **[中] 日志噪音干扰 (PR #951)**
    *   **问题**: Agent 子进程非零退出时，错误处理逻辑错误地将 stderr 初始化日志回显，干扰了正常的 Agent 响应判断。
    *   **状态**: 已提交修复 [PR #951](https://github.com/nullclaw/nullclaw/pull/951)，待合并。

*   **[中] 元数据归因错误 (PR #948)**
    *   **问题**: Cron Agent 投递未能正确传递 Origin 元数据，导致追踪归因失效。
    *   **状态**: 已提交修复 [PR #948](https://github.com/nullclaw/nullclaw/pull/948)，待合并。

## 6. 功能请求与路线图信号
尽管无显式的功能请求 Issue，但从提交的 PR 可以窥见项目路线图的微调方向：

*   **配置项解耦**: PR #949 引入的 `agent.default_queue_mode` 配置项表明项目正在寻求更灵活的启动行为定制，减少硬编码，这可能为后续支持更多队列策略铺路。
*   **可观测性增强**: PR #948 和 #951 都在致力于完善元数据追踪和日志规范，暗示项目正向生产级别的可观测性与运维友好度迈进。

## 7. 用户反馈摘要
本日无新增 Issues 或评论，暂无直接的用户反馈数据可供分析。

## 8. 待处理积压
目前有 4 个新提交的 PR 处于 OPEN 状态，建议维护者尽快审核合并，以避免功能积压：

1.  [PR #951](https://github.com/nullclaw/nullclaw/pull/951): 修复 Agent 失败时的 stderr 日志回退问题。
2.  [PR #950](https://github.com/nullclaw/nullclaw/pull/950): 修复 Gateway 端口探测前的内存泄漏问题。
3.  [PR #949](https://github.com/nullclaw/nullclaw/pull/949): 新增 `queue_mode` 配置项支持。
4.  [PR #948](https://github.com/nullclaw/nullclaw/pull/948): 修复 Cron 投递归因问题。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-11)

## 1. 今日速览
IronClaw 项目今日保持高度活跃，Issues 与 PR 更新均达到 50 条，显示出社区与核心团队对 "Reborn" 架构重构的密集投入。核心工作集中在 **Reborn WebUI v2 的缺陷修复与体验优化**（如 Slack 集成、OAuth 流程、UI 交互细节）以及 **底层 Runtime 的稳定性增强**。虽然今日无新版本发布，但大量功能性 PR 的合并预示着版本迭代正在加速。整体来看，项目正处于功能完善与 Bug 清扫的关键阶段，开发节奏健康且紧凑。

## 2. 版本发布
- **无新版本发布**。
- **注意**：社区 Issue #3259 持续反馈 `crates.io` 发布滞后问题，当前最新发布版仍停留在 `0.24.0`，而 GitHub 已有 `0.27.0` 标签，下游用户受限于安全更新，需关注后续发布动态。

## 3. 项目进展
今日共有 **22 个 PR 被合并/关闭**，显著推进了以下关键领域：

- **Reborn WebUI 功能补全与优化**：
  - **[PR #4730](https://github.com/nearai/ironclaw/pull/4730)**：实现了 Slack DM 个人触发事件投递端到端流程，完善了自动化通知渠道。
  - **[PR #4717](https://github.com/nearai/ironclaw/pull/4717)**：恢复了 WebUI v2 的 "Always Allow" 确认选项，优化了用户交互体验。
  - **[PR #4738](https://github.com/nearai/ironclaw/pull/4738)**（待合并）：引入了附件上传的完整 Web UX，补齐了聊天功能的重要短板。

- **Runtime 稳定性与错误处理**：
  - **[PR #4746](https://github.com/nearai/ironclaw/pull/4746)**：修复了 OAuth 授权后的门禁恢复机制，确保授权后能自动重试原始调用。
  - **[PR #4743](https://github.com/nearai/ironclaw/pull/4743)**：修复了 NEAR/Anthropic 兼容 API 的上下文溢出错误分类问题。
  - **[PR #4742](https://github.com/nearai/ironclaw/pull/4742)**：修复了手动令牌凭据的选择逻辑。

- **开发者体验**：
  - **[PR #4652](https://github.com/nearai/ironclaw/pull/4652)**：新增了 `run-reborn-webui.sh` 启动脚本及文档，大幅降低了本地测试门槛。

## 4. 社区热点
今日社区讨论焦点主要集中在发布流程阻塞与架构级功能请求：

- **[Issue #3259](https://github.com/nearai/ironclaw/issues/3259)** (评论: 14)
  - **诉求**：用户指出 `crates.io` 版本严重滞后（v0.24.0 vs v0.27.0），导致下游依赖受 wasmtime CVE 漏洞影响无法更新。
  - **分析**：这是一个严重的分发阻塞问题，影响了核心 Rust 生态用户的采用，急需维护者响应。

- **[Issue #3036](https://github.com/nearai/ironclaw/issues/3036)** (评论: 6)
  - **诉求**：提出 "Configuration-as-Code" Epic，希望能通过声明式配置管理租户蓝图与用例。
  - **分析**：反映了高级用户对现有 `.env` 混杂配置方式的不满，渴望 GitOps 风格的配置管理能力。

## 5. Bug 与稳定性
今日报告了多个影响本地开发与 WebUI 体验的 Bug，部分已有修复方案：

- **严重/功能阻塞**：
  - **[Issue #4751](https://github.com/nearai/ironclaw/issues/4751)**：大响应请求因工具参数超过 16384 字节限制而失败，导致生成长文本时崩溃。
  - **[Issue #4729](https://github.com/nearai/ironclaw/issues/4751)**：本地/桌面构建的 NEAR AI 登录失败，`private.near.ai` 拒绝非私有域回调。
  - **[Issue #4703](https://github.com/nearai/ironclaw/issues/4703)**：NEAR AI 提供商配置测试连接成功，但实际对话无法使用。

- **体验降级/轻微 Bug**：
  - **[Issue #4748](https://github.com/nearai/ironclaw/issues/4748)**：代码块 "Wrap/No Wrap" 切换按钮无效。
  - **[Issue #4741](https://github.com/nearai/ironclaw/issues/4741)**：本地开发密钥文件损坏时报错信息模糊，难以排查。
  - **[Issue #4740](https://github.com/nearai/ironclaw/issues/4740)**：Slack 工具参数 Schema 定义不完整，导致模型只能猜测参数类型。

- **已修复**：
  - **[Issue #4642](https://github.com/nearai/ironclaw/issues/4642)**：Strict-mode providers 发送的 `null` 参数被错误拒绝的问题已关闭。

## 6. 功能请求与路线图信号
- **自动化配置**：**[Issue #4700](https://github.com/nearai/ironclaw/issues/4700)** 请求配置凭据后自动启用 NEAR AI MCP，对应 **[PR #4726](https://github.com/nearai/ironclaw/pull/4726)** 已提交，预计将很快合并。
- **UI 细节优化**：多项 Issue（如字体大小 #4707、语法高亮 #4708、草稿保存 #4724）表明 WebUI v2 正在进行精细化打磨，是下阶段重点。
- **触发器时区支持**：**[PR #4749](https://github.com/nearai/ironclaw/pull/4749)** 提出为 Cron 触发器增加 IANA 时区支持，修复了之前仅支持 UTC 导致的用户困扰。

## 7. 用户反馈摘要
- **部署痛点**：用户强烈反映 `crates.io` 发布滞后，导致不得不依赖 Git 源或停留在旧版，存在安全风险。
- **WebUI 可用性**：早期测试者反馈 WebUI 存在多处 "粗糙" 细节，如错误信息不具体（#4683）、UI 状态不同步（#4725 草稿丢失）、交互逻辑反直觉（#4733 链接跳转）。
- **配置复杂度**：用户期望从手动配置 `.env` 文件转向更自动化的配置管理（#3036），当前配置流程对新手不够友好。

## 8. 待处理积压
- **[Issue #3259](https://github.com/nearai/ironclaw/issues/3259)**：**严重积压**。自 5 月 5 日创建至今，核心依赖发布问题仍未解决，严重影响 Rust 生态用户，建议维护者优先处理 crates.io 同步发布流程。
- **[Issue #4632](https://github.com/nearai/ironclaw/issues/4632)**：Epic 级任务，构建 Reborn WebUI v2 的 E2E 测试覆盖，目前尚未有关闭迹象，需持续关注测试覆盖率进展。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-11)

## 1. 今日速览
LobsterAI 今日呈现出**极高开发活跃度与零社区噪音**的鲜明对比。项目于昨日发布了 `2026.6.10` 新版本，并在今日集中合并/关闭了 **23 个 PR**，其中包括极具战略意义的 "Computer Use MVP" 功能及多项关键的 Windows 平台修复。与此同时，Issue 区过去 24 小时处于静默状态（0 新增/活跃），表明当前版本稳定性较好，或社区正处于新功能消化期。整体来看，项目正处于功能快速迭代后的稳固期，核心开发团队正全力推进 Agent 自主操作能力与系统稳定性建设。

## 2. 版本发布
**新版本：LobsterAI 2026.6.10** (发布于 2026-06-10)
- **核心更新**：
  - **数据迁移**: 新增用户数据备份与恢复功能 (PR #2125)，增强了数据安全性。
  - **本地认证**: 引入本地回调登录流程 (PR #2122)，优化了本地开发与使用的认证体验。
  - **设置优化**: 暴露 OpenCla 相关设置接口。
- **影响分析**：此次版本为后续的 "Computer Use" 功能落地奠定了基础架构（数据备份与认证流），建议用户升级以获得更完善的本地数据控制权。

## 3. 项目进展
今日项目推进力度极大，重点集中在 Agent 能力增强与用户体验打磨：

- **Agent 能力里程碑**：合并了 **feat: add computer use MVP** (PR #2143)。该 PR 为 Windows x64 平台引入了内置的 Computer Use 套件，包含市场元数据、完整性校验及生命周期管理。这标志着 LobsterAI 正从单纯的对话助手向具备操作系统交互能力的 Agent 进化。
- **上下文记忆优化**：合并了 **feat(cowork): improve post-compaction context continuity** (PR #2145)。针对 OpenClaw 压缩历史记录后 Agent 任务连续性差的问题，增加了连续性层，显著提升了长任务运行的可靠性。
- **Windows 平台稳定性修复**：合并了多项关键修复，包括修复 NSIS 破坏性初始化问题 (PR #2142) 及应用内更新失败问题 (PR #2141)，显著改善了 Windows 用户的安装与升级体验。
- **陈旧代码清理**：今日集中关闭了大量 4 月份积压的 PR（如 #1491, #1492, #1493 等依赖更新及功能 PR），完成了代码库的大扫除，降低了技术债务。

## 4. 社区热点
过去 24 小时内，项目 Issue 区无新增或活跃讨论，PR 区评论数据未显示（可能为数据抓取时间点原因或内部快速合并）。社区讨论热度目前处于**静默期**。这也反映出当前版本发布平稳，未引发大规模用户反馈或紧急问题。

## 5. Bug 与稳定性
今日无新报告的 Bug（Issue 数为 0），但通过合并的 PR 可见开发者主动修复了以下潜在问题：

1.  **[高优先级-修复]** **Windows 应用内更新失效** (PR #2141)：解决了 Windows 平台客户端无法正常更新的问题，已合并。
2.  **[中优先级-修复]** **NSIS 安装初始化问题** (PR #2142)：修复了 NSIS 破坏性初始化及加载页设计，提升了安装流程的鲁棒性。
3.  **[中优先级-修复]** **认证回调 URL 错误** (PR #2144)：更新了 Portal 回退 URL，确保了新老域名切换期间的登录成功率。

## 6. 功能请求与路线图信号
虽然无新增 Issue 反映需求，但从今日合并的代码可洞察项目未来的**产品路线图**：

- **Computer Use (电脑操作能力)**：PR #2143 的合并明确释放了信号，LobsterAI 正致力于打通 AI 与操作系统 GUI 的交互壁垒，未来版本可能会进一步扩展对 macOS 的支持及操作安全性。
- **长时记忆与任务连续性**：PR #2145 (上下文连续性) 和 PR #1499 (会话裁剪) 的合并，显示出项目正重点攻克长对话场景下的 Token 限制与任务遗忘痛点，这是迈向高性能 Personal Agent 的关键一步。
- **定时任务与通知优化**：早期 PR（#1486, #1489）的关闭表明定时任务功能已趋于成熟，可能会在下一版本作为稳定功能推出。

## 7. 用户反馈摘要
由于今日 Issue 区无新动态，无法直接提炼用户反馈。但从维护者主动修复 Windows 更新及 NSIS 安装问题可以看出，**Windows 平台的安装与更新体验**是近期用户可能遭遇痛点较多的领域，已得到开发团队的及时响应。

## 8. 待处理积压
当前仅有一个长期未决的依赖更新 PR 处于开启状态：

- **PR #1277** [OPEN]: **chore(deps-dev): bump the electron group** (创建于 2026-04-02)
  - **内容**：将 Electron 从 v40.2.1 升级至 v42.3.3。
  - **风险提示**：Electron 跨大版本升级通常伴随潜在的 API 变更和原生模块兼容性问题。该 PR 已挂起 2 个多月，建议维护者评估其在 "Computer Use" 功能引入后的兼容性，尽快推进测试与合并，避免技术债累积。

---
*分析师注：今日项目处于“多做少说”的实干状态，核心能力突破显著。建议关注 Electron 大版本升级的落地情况，这可能影响后续发布节奏。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-06-11)

## 1. 今日速览
CoPaw (QwenPaw) 项目今日保持了极高的活跃度，共发布了 **v1.1.11** 和 **v1.1.11-beta.3** 两个版本，重点引入了零配置免费模型 OAuth 和小米 MiMo Provider 支持。然而，新版本发布的喜悦被 OpenSSL 3.5.7 引入的回归 Bug 冲淡，该 Bug 导致 Windows 桌面端无法启动，社区反应强烈，所幸项目组响应迅速，已提交修复 PR。在架构层面，社区正积极推动 Runtime 2.0 重构和 Agent OS Driver 的统一抽象，显示出项目向更模块化、高性能演进的明确信号。

## 2. 版本发布
### v1.1.11
**更新亮点**：
- **✨ 免费模型 OAuth 支持**：实现了零配置一键 OAuth 认证，大幅降低了用户使用免费模型的门槛 ([#5049](https://github.com/agentscope-ai/QwenPaw/pull/5049))。
- **✨ 新增 Xiaomi MiMo Provider**：内置支持小米 MiMo Token Plan，扩展了模型生态 ([#4722](https://github.com/agentscope-ai/QwenPaw/pull/4722))。

### v1.1.11-beta.3
**更新亮点**：
- **🛠️ 技能自演化增强**：优化了 `make-skill` 流程，支持自我演化的技能创建 ([#4857](https://github.com/agentscope-ai/QwenPaw/pull/4857))。
- **🔧 CI 优化**：移除了冗余的 channel-tests 工作流 ([#5056](https://github.com/agentscope-ai/QwenPaw/pull/5056))。

## 3. 项目进展
今日共有 **29 个 PR 合并/关闭**，项目整体迭代速度极快。
- **严重故障修复**：针对 OpenSSL 3.5.7 导致的桌面端启动失败，提交了关键修复 PR [#5100](https://github.com/agentscope-ai/QwenPaw/pull/5100)，通过锁定 `openssl<3.5.7` 版本解决问题，修复已在流程中。
- **架构重构提案**：开启了 Runtime 2.0 模块化架构重构 ([#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078)) 和 Agent OS Driver 统一抽象层 ([#5067](https://github.com/agentscope-ai/QwenPaw/pull/5067)) 的讨论与实现，旨在解决外部能力调用（MCP/A2A/ACP）的碎片化问题。
- **版本迭代**：合并了版本号升级至 `1.1.11.post1` 的 PR [#5093](https://github.com/agentscope-ai/QwenPaw/pull/5093)，预示着包含修复补丁的版本即将发布。

## 4. 社区热点
- **[Bug] 桌面端无法启动 (OpenSSL 回归)**：Issue [#5086](https://github.com/agentscope-ai/QwenPaw/issues/5086) 和 [#5095](https://github.com/agentscope-ai/QwenPaw/issues/5095)。这是今日最热门的话题，由于底层 Python 依赖库 OpenSSL 升级导致 Windows 桌面版启动卡死，严重影响了用户体验。
- **[Bug] Agent 创建的定时任务失效**：Issue [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)。用户反馈 Agent 在会话中创建的定时任务无法触发且不可编辑，涉及工作流核心功能，引发了较多讨论。
- **[Feature] Runtime 2.0 架构重构**：PR [#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078)。社区贡献者提出了 Runtime 2.0 架构，旨在解耦单体的 Runner 和 stream_query，引入 ToolCoordinator，这标志着项目后端架构的一次重大升级。

## 5. Bug 与稳定性
**严重**：
- **OpenSSL 3.5.7 导致 Desktop 启动失败**：影响范围广，Windows 用户升级 v1.1.11 后无法启动。
  - 根因：OpenSSL 3.5.7 处理 DER 格式证书存在回归 Bug。
  - 状态：**已有修复 PR** ([#5100](https://github.com/agentscope-ai/QwenPaw/pull/5100))。
- **Agent 创建的定时任务不可用**：Issue [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)，任务不触发且 UI 不可编辑。

**中等**：
- **Web 端严重卡顿**：Issue [#5053](https://github.com/agentscope-ai/QwenPaw/issues/5053)，在 Windows Tauri 客户端切换会话时延迟超 10 秒。
- **工具调用参数错误**：Issue [#5052](https://github.com/agentscope-ai/QwenPaw/issues/5052)，使用 DeepSeek 等本地模型时，多轮对话后工具调用失败。
- **附件下载/预览异常**：Issue [#5102](https://github.com/agentscope-ai/QwenPaw/issues/5102)，v1.1.11 版本中图片/ZIP 文件无法下载，MD 文件强制预览。

**轻微**：
- **环境变量页面滚动条闪烁**：已通过 PR [#4766](https://github.com/agentscope-ai/QwenPaw/pull/4766) 修复。

## 6. 功能请求与路线图信号
- **Runtime 2.0 模块化架构** (PR [#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078))：社区正推动将后端运行时解耦为可组合单元，引入精细的工具调用生命周期控制，这可能是下个版本的核心改进。
- **独立视觉模型配置** (Issue [#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992))：用户强烈希望支持“主模型+独立视觉模型”的分离架构，以便在使用纯文本模型时也能处理图像。这是高频需求，预计将被纳入路线图。
- **上下文压缩层集成** (Issue [#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063))：建议集成 Headroom 进行可逆的上下文压缩，以节省 60-95% 的 Token，这在长对话场景下具有极高价值。

## 7. 用户反馈摘要
- **痛点：前端性能**：多位用户反馈新版 UI 在会话较多时切换卡顿，甚至出现“假死”现象，前端渲染性能亟待优化 ([#5053](https://github.com/agentscope-ai/QwenPaw/issues/5053), [#4917](https://github.com/agentscope-ai/QwenPaw/issues/4917))。
- **痛点：模型兼容性与工具调用**：本地模型（如 vLLM 部署的 Qwen, DeepSeek）在工具调用时的稳定性仍有欠缺，容易出现参数解析错误 ([#5052](https://github.com/agentscope-ai/QwenPaw/issues/5052))。
- **满意度**：用户对“免费模型 OAuth”功能表示欢迎，认为其降低了上手难度。但对 v1.1.11 版本引入的附件下载 Bug 和启动崩溃问题感到沮丧，呼吁加强发布前的回归测试。

## 8. 待处理积压
- **Token 用量统计功能** (PR [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433))：该 PR 已提交近一个月，增加了对话级别的 Token 统计，但尚未合并，用户对此功能需求较高 ([#5103](https://github.com/agentscope-ai/QwenPaw/issues/5103))。
- **DataPaw 数据分析插件** (PR [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622))：一个功能强大的内置数据分析插件贡献，尚在 Review 中。
- **项目重命名遗留问题** (Issue [#5104](https://github.com/agentscope-ai/QwenPaw/issues/5104))：CoPaw -> QwenPaw 更名后，数据目录混乱（`~/.copaw/` vs `~/.qwenpaw/`）导致插件安装失败，需官方统一处理迁移逻辑。

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