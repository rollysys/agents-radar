# OpenClaw 生态日报 2026-05-02

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-02 02:55 UTC

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

# OpenClaw 项目动态日报 (2026-05-02)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，过去 24 小时内有近 500 条 Issue 更新和 500 条 PR 更新，社区互动频繁。虽然无新版本发布，但开发重心明显集中在 **稳定性修复** 和 **插件/扩展生态系统** 的完善上。大量 Issue 报告了 Gateway 在高负载或多通道环境下的性能瓶颈（如 CPU 飙升、死锁），核心维护者正通过合并一系列针对会话锁、内存管理和上下文压缩的修复 PR 来应对这些问题。整体来看，项目正处于快速迭代修复期，致力于解决多智能体编排和企业级部署中的可靠性痛点。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 37 个 PR 被合并或关闭，重点修复了运行时稳定性与用户体验问题：

*   **核心稳定性修复**：
    *   [PR #75730](https://github.com/openclaw/openclaw/pull/75730)：修复了 Web 搜索工具在运行时无法解析 SecretRef 的问题，确保了配置管理的安全性。
    *   [PR #51706](https://github.com/openclaw/openclaw/pull/51706)：修正了 `session_status` 显示配置模型而非实际运行模型的问题，提升了调试透明度。
    *   [PR #75258](https://github.com/openclaw/openclaw/pull/75258)：修复了 WhatsApp 通道推理过程泄露的问题，通过在管道层面抑制推理块，增强了隐私保护。
*   **功能增强**：
    *   [PR #61972](https://github.com/openclaw/openclaw/pull/61972)：为 Gemini 和 xAI 的搜索工具添加了 `baseUrl` 支持，方便代理和私有化部署。
    *   [PR #39984](https://github.com/openclaw/openclaw/pull/39984)：优化了 `web_search` 缺失 API Key 时的错误提示，降低了用户配置门槛。

*   **正在进行中的重大更新**：
    *   [PR #75869](https://github.com/openclaw/openclaw/pull/75869)（Open）：正在引入 Crestodian 插件管理机制，包含 CLI 搜索、安装与审计功能，预示着插件生态将迎来规范化管理。
    *   [PR #72748](https://github.com/openclaw/openclaw/pull/72748)（Open）：针对用户呼声极高的内存递归搜索功能（Issue #34400）正在进行后续完善。

## 4. 社区热点
今日社区讨论主要集中在 Gateway 的资源泄漏与多智能体协作的稳定性上：

*   **[Issue #73303](https://github.com/openclaw/openclaw/issues/73303) [热度: 👍 2 | 评论: 12]**
    **macOS Gateway 重启挂起问题**。用户报告在 macOS LaunchAgent 模式下，重启 Gateway 偶尔会卡顿 3-4 分钟，远超正常启动时间。这引发了关于进程管理和信号处理的深入讨论。
*   **[Issue #73655](https://github.com/openclaw/openclaw/issues/73655) [热度: 👍 1 | 评论: 11]**
    **Gateway 资源泄漏三重奏**。用户详细分析了一个复合型 Bug，涉及端口重试循环、信号处理程序累积和同步 I/O 阻塞，导致 WebSocket 握手饥饿。该 Issue 被视为近期稳定性问题的核心线索之一。
*   **[Issue #75707](https://github.com/openclaw/openclaw/issues/75707) [热度: 👍 4 | 评论: 5]**
    **Gateway 空闲 CPU 占用 100%**。多个用户反馈 Gateway 进程在空闲状态下 CPU 占用异常高，分析指出可能与活跃内存插件或事件循环阻塞有关。

## 5. Bug 与稳定性
今日报告了大量关于资源管理和通道稳定性的严重 Bug：

*   **严重 - 性能与死锁**：
    *   [Issue #75882](https://github.com/openclaw/openclaw/issues/75882)：Gateway 事件循环停滞，导致跨通道延迟和断连，严重影响多平台接入用户体验。
    *   [Issue #73874](https://github.com/openclaw/openclaw/issues/73874)：Windows + Docker Desktop 环境下出现 HTTP/WS 调度死锁，阻塞了容器化部署。
*   **中等 - 数据安全**：
    *   [Issue #50248](https://github.com/openclaw/openclaw/issues/50248)：`sessions cleanup --fix-missing` 可能错误删除有效的 cron 会话，存在数据丢失风险。
    *   [Issue #40001](https://github.com/openclaw/openclaw/issues/40001)：Write 工具缺乏追加模式，导致隔离会话覆盖共享文件，影响多智能体协作。
*   **修复状态**：针对资源泄漏问题，[PR #75822](https://github.com/openclaw/openclaw/pull/75822)（回收未跟踪的会话锁）和 [PR #75761](https://github.com/openclaw/openclaw/pull/75761)（修复 active-memory 阻塞）已提交，等待合并。

## 6. 功能请求与路线图信号
*   **插件 UI 扩展系统**：[Issue #66944](https://github.com/openclaw/openclaw/issues/66944) 呼吁允许插件在 Control UI 中添加原生页面，结合今日的 [PR #75869]（Crestodian 插件管理），显示项目正致力于构建更强大的插件生态。
*   **多租户支持**：[Issue #60127](https://github.com/openclaw/openclaw/issues/60127) 提出在单实例中支持多租户与 RBAC，而非运行多个实例，反映了企业级部署的强烈需求。
*   **内存管理增强**：[Issue #34400](https://github.com/openclaw/openclaw/issues/34400) 要求 `memory_search` 支持递归子目录搜索，目前已有对应 PR (#72748) 正在处理，预计近期落地。

## 7. 用户反馈摘要
*   **痛点**：
    *   **多智能体不可靠**：多位用户反馈子智能体会话残留、状态不同步或覆盖配置（[Issue #43367](https://github.com/openclaw/openclaw/issues/43367)），使得并发任务执行变得脆弱。
    *   **通道连接脆弱**：Slack、Telegram、WhatsApp 等通道偶发的静默断连（[Issue #72808](https://github.com/openclaw/openclaw/issues/72808), #75882）让用户感到沮丧，尤其是在展示 Demo 时。
    *   **上下文丢失**：升级到 v2026.4.x 后，长会话中的多轮工具调用重放会出现孤儿块错误（[Issue #74907](https://github.com/openclaw/openclaw/issues/74907)），导致历史对话无法恢复。
*   **满意点**：用户对 `openclaw doctor` 等诊断工具表示认可，但也希望它能自动修复安全配置，而不是仅提示命令。

## 8. 待处理积压
以下重要 Issue 长期未关闭且讨论活跃，建议维护者优先关注：

*   **[Issue #43367](https://github.com/openclaw/openclaw/issues/43367)**：多智能体编排不稳定（并发写入覆盖、锁失效），这是社区反馈的高频痛点，目前仍处于 Open 状态。
*   **[Issue #40001](https://github.com/openclaw/openclaw/issues/40001)**：Write 工具缺乏追加模式，阻碍了自动化工作流对日志或记忆文件的持续更新。
*   **[Issue #60127](https://github.com/openclaw/openclaw/issues/60127)**：多租户支持，这是企业级应用的关键需求，目前尚未有明确的实现 PR。

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告 (2026-05-02)

## 1. 生态全景
当前 AI 智能体开源生态正处于**从"功能爆发"向"稳定性与生产可用性"转型的深水区**。头部项目（如 OpenClaw）在处理高并发网关和多智能体编排时面临严峻的资源泄漏与死锁挑战，显示出架构复杂度带来的维护压力；新兴项目（如 NanoBot、NullClaw）则展现出极高的迭代效率，专注于修复特定模型适配（DeepSeek V4）和边缘计算场景。**多智能体协作的可靠性**与**模型推理过程的标准兼容性**已成为全行业共同攻克的技术高地，而部分项目进入架构重构期，标志着生态正为下一阶段的企业级规模化落地积蓄力量。

## 2. 各项目活跃度对比

| 项目名称 | Issue 更新/新增 | PR 更新/合并 | Release 情况 | 健康度评估 | 核心动态关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500 / - | ~500 / 37 | 无 | 中 (高噪比) | Gateway 死锁、插件生态、多智能体不稳定 |
| **NanoBot** | 9 / - | 24 / 24 | 无 | **高** | 快速修复、QQ/Matrix适配、DeepSeek兼容 |
| **Zeroclaw** | 50 / - | 50 / 6 | 无 | 中 | Schema v3、安装阻塞、多智能体UX设计 |
| **Hermes Agent**| 46 / - | 50 / 16 | 无 | 中 | Docker构建失败、上下文压缩、安全加固 |
| **PicoClaw** | - / - | - / 13 | **v0.2.8-nightly** | 中低 (回归严重) | 多用户隔离、K3s支持、功能回归 |
| **NanoClaw** | - / - | - / 16 | 无 | **高** | OpenCode修复、V2升级、进程泄露 |
| **NullClaw** | 11 / - | 33 / 31 | 无 | **极高** | 性能优化(RPi5)、知识图谱、原生HTTP |
| **IronClaw** | 29 / - | 50 / 19 | 无 | 中高 | Reborn架构重构、法律垂类、安装脚本Bug |
| **LobsterAI** | 0 / 0 | 6 / 0 | 无 | **低 (停滞)** | PR积压、响应延迟 |
| **Moltis** | - / - | - / 9 | 无 | 高 | Telegram修复、数据迁移、容错机制 |
| **CoPaw** | 8 / 8 | 3 / 0 | 无 | 中 | 模型兼容性、记忆管理、对话中断 |

*(注：健康度评估基于 Bug 修复速度、社区响应度及功能稳定性综合判断)*

## 3. OpenClaw 在生态中的定位

作为生态的**核心参照项目**，OpenClaw 在规模上具有绝对优势，但正面临"大而不强"的阵痛期。

*   **优势**：生态规模最大，插件管理机制正在规范化，企业级功能（如 Gateway、多租户规划）布局较早，是行业标准的风向标。
*   **技术路线差异**：相比 NanoBot/NullClaw 侧重轻量化与特定场景适配，OpenClaw 试图构建大一统的编排平台。然而，近期大量关于 Gateway CPU 飙升和死锁的反馈表明，其**核心运行时的稳定性显著落后于 NanoBot 和 NullClaw**。
*   **社区规模对比**：Issue/PR 活动量是其他项目的 10 倍以上，但噪音较多。相比之下，NullClaw 和 NanoBot 的社区虽然较小，但 Issue 转化为 Fix 的效率极高，显示出更强的维护承载力。

## 4. 共同关注的技术方向

*   **多智能体编排的可靠性 (OpenClaw, Zeroclaw, Moltis)**
    *   **诉求**：OpenClaw 遭遇子智能体状态覆盖与死锁；Zeroclaw 通过 RFC 确立多智能体 UX 流程；Moltis 提出 Sub-agent 故障转移。
    *   **趋势**：单纯的单 Agent 已无法满足需求，但多 Agent 协作中的上下文隔离、结果回传和异常恢复是目前全生态最大的痛点。

*   **国产大模型与推理模式的适配**
    *   **诉求**：DeepSeek V4、小米 MiMo 等模型的"思考模式"（`reasoning_content`）在多个项目中出现兼容性问题（CoPaw #3996, PicoClaw #2740）。
    *   **趋势**：社区正在快速补齐对 OpenAI 协议之外非标准字段的支持，尤其是对"思考过程"的流式传输与隔离显示。

*   **运行时资源治理 (OpenClaw, NullClaw, NanoClaw)**
    *   **诉求**：OpenClaw 的 Gateway 资源泄漏、NullClaw 在 RPi5 上的 CPU 空转修复、NanoClaw 的进程泄露修复。
    *   **趋势**：AI Agent 正从"玩具"走向常驻服务，内存管理、进程守护和资源释放机制成为核心关注点。

## 5. 差异化定位分析

*   **OpenClaw (企业级平台)**：重心在**网关与插件生态**，试图解决多通道接入与企业级治理，但底层稳定性略显吃力。
*   **NullClaw (边缘计算与性能)**：独树一帜地采用 Zig 语言，关注**资源受限环境**（如 RPi 5、无 RTC 硬件），引入 SQLite 知识图谱，定位为高性能边缘 Agent。
*   **PicoClaw (部署与安全)**：侧重**多租户隔离与容器化**（K3s），强调安全沙箱与权限控制，适合对数据隔离有强需求的私有化部署。
*   **IronClaw (垂类应用)**：正在开发法律文档处理等特定技能，并向**垂直领域工具链**扩展，而非单纯追求通用 Agent 能力。
*   **NanoBot / Moltis (渠道与适配)**：核心优势在于**多渠道适配**（QQ、Telegram、Discord）和快速修复，是连接用户与模型的高效桥梁。

## 6. 社区热度与成熟度

*   **快速迭代与修复期 (健康度优)**：**NullClaw** 和 **NanoBot**。社区响应极快，PR 合并率高，Bug 修复及时，架构清晰，适合作为当前开发者的首选稳定底座。
*   **架构重构阵痛期 (风险较高)**：**OpenClaw**、**Zeroclaw** 和 **PicoClaw**。OpenClaw 忙于救火；Zeroclaw 处于 Schema v3 迁移期，新用户入门受阻；PicoClaw 发布了带回归 Bug 的 nightly 版本，版本质量把控需加强。
*   **停滞期 (谨慎使用)**：**LobsterAI**。PR 长期积压，维护者缺失，建议社区考虑 Fork 或寻找替代方案。

## 7. 值得关注的趋势信号

1.  **"Gateway" 成为性能瓶颈**：OpenClaw 和 NanoClaw 近期暴露的 Gateway 进程泄露、死锁问题表明，作为 AI Agent 流量入口的中间件，其并发模型设计已滞后于高负载需求，**高性能网关的再造**将是一个明确的技术机会。
2.  **记忆系统从文件向数据库演进**：NullClaw 引入 SQLite 知识图谱，CoPaw 讨论 Markdown 记忆系统的局限性。这预示着 Agent 记忆管理正从简单的文本拼接向**结构化存储与检索**演进，以支持更长的生命周期和更复杂的上下文。
3.  **安装体验正在劝退用户**：Zeroclaw (#6123) 和 IronClaw (#2818) 均报告了严重的安装脚本错误。在竞争激烈的生态中，**"开箱即用"的安装体验**已成为用户留存的第一道门槛，开发者需重视 CI/CD 中的安装流程全链路测试。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-02)

## 1. 今日速览
NanoBot 项目今日保持极高的维护活跃度，呈现出“高吞吐、快修复”的健康态势。过去 24 小时内，项目合并/关闭了 **24 个 PR** 和 **9 个 Issue**，远超新增数量，显示出维护者对社区反馈的快速响应能力。重点修复了 Anthropic 长请求流式传输、Matrix 频道认证循环、DeepSeek 推理模式兼容性等关键问题，并成功合入了 NapCatQQ 频道支持与群组用户身份识别功能，显著提升了多平台适配性与稳定性。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目进展显著，主要集中在**稳定性修复**与**生态适配**两个方向，多个功能性 PR 成功合并：

*   **平台生态扩展**：
    *   合并 [PR #2337](https://github.com/HKUDS/nanobot/pull/2337) 与 [PR #2379](https://github.com/HKUDS/nanobot/pull/2379)：新增 **NapCatQQ 频道支持**，补齐了 QQ 平台群聊与图片支持的短板。
    *   合并 [PR #3114](https://github.com/HKUDS/nanobot/pull/3114)：集成 **LongCat** 作为 OpenAI 兼容提供商，丰富了模型选择。
*   **核心体验优化**：
    *   合并 [PR #3549](https://github.com/HKUDS/nanobot/pull/3549)：解决了群聊中“千人一面”的问题，将 `sender_id` 注入 LLM 上下文，使 Agent 能识别不同用户。
    *   合并 [PR #2334](https://github.com/HKUDS/nanobot/pull/2334)：优化会话持久化机制，改为每轮迭代后保存，防止 Agent 异常中断导致进度丢失。
*   **关键 Bug 修复**：
    *   合并 [PR #3579](https://github.com/HKUDS/nanobot/pull/3579)：修复了 Anthropic SDK 在长耗时任务下强制要求 Streaming 的错误，增加了自动降级逻辑。
    *   合并 [PR #3578](https://github.com/HKUDS/nanobot/pull/3578)：修复了 Matrix 频道认证失败后的无限重试刷屏服务器日志的问题。
    *   合并 [PR #3555](https://github.com/HKUDS/nanobot/pull/3555)：修复了 OpenAI 兼容 API 在流式模式下执行工具调用时过早关闭连接的问题。

## 4. 社区热点
今日社区讨论焦点集中在**多智能体架构**与**任务专注度**上：

*   **[Issue #2072](https://github.com/HKUDS/nanobot/issues/2072) [CLOSED]**：关于原生多智能体路由的讨论热度最高（8 条评论）。用户希望 NanoBot 能像 OpenClaw 一样支持原生 Multi-Agent Routing。虽然该 Issue 已关闭，但反映出社区对从“单兵作战”转向“多智能体协作”架构的强烈需求。
*   **[Issue #3292](https://github.com/HKUDS/nanobot/issues/3292) [OPEN]**：关于“会话级焦点工具”的提案获关注（4 条评论）。用户指出 LLM 在被中断后容易忘记主线任务，希望引入持久化的“任务板”机制。这反映了当前 Agent 在长程任务中的注意力稳定性问题。

## 5. Bug 与稳定性
今日报告的 Bug 涉及新模型适配与核心逻辑缺陷，部分已得到修复：

*   **严重**：
    *   **[Issue #3584](https://github.com/HKUDS/nanobot/issues/3584)**：DeepSeek API 调用因 `reasoning_content` 验证错误导致 Agent 循环崩溃。用户已定位根因并提供 Patch，目前处于待处理状态。
    *   **[Issue #3585](https://github.com/HKUDS/nanobot/issues/3585)**：小米 MiMo 模型无法通过 `reasoning_effort: null` 关闭推理模式，导致 API 兼容性问题。
*   **已修复**：
    *   **[Issue #2709](https://github.com/HKUDS/nanobot/issues/2709)**：企业微信/Anthropic 接口报错“Streaming is required for operations > 10 mins”。已由 [PR #3579](https://github.com/HKUDS/nanobot/pull/3579) 修复。
    *   **[Issue #3581](https://github.com/HKUDS/nanobot/issues/3581)**：Token 估算函数在 tiktoken 回退时崩溃 (`NameError`)。已由 [PR #3582](https://github.com/HKUDS/nanobot/pull/3582) 修复。
    *   **[Issue #3553](https://github.com/HKUDS/nanobot/issues/3553)**：Matrix 频道重启时重复读取旧消息。已在后续提交中修复。

## 6. 功能请求与路线图信号
*   **安全加固呼声**：[PR #3492](https://github.com/HKUDS/nanobot/pull/3492) 提出了针对 WebUI 公网部署的安全加固方案，防止反向代理场景下的鉴权漏洞。这是一个重要的安全性改进，目前处于 Open 状态，建议维护者优先 Review。
*   **模型预设切换**：[PR #3358](https://github.com/HKUDS/nanobot/pull/3358) 提出增加模型预设配置，允许用户快速切换模型参数组合。这符合多模型并存的现状，有望简化配置流程。
*   **工具调用护栏**：[PR #3580](https://github.com/HKUDS/nanobot/pull/3580) 提出增加工具循环调用护栏，防止模型陷入“死磕”同一失败工具的误区，这对提升 Agent 自主性至关重要。

## 7. 用户反馈摘要
*   **群聊识别痛点**：用户反馈在 Discord/飞书等群聊场景下，Agent 无法识别说话人，导致回复缺乏针对性（[Issue #3511](https://github.com/HKUDS/nanobot/issues/3511)）。该问题已通过 [PR #3549](https://github.com/HKUDS/nanobot/pull/3549) 解决，用户对此表示期待。
*   **流式体验问题**：多位用户报告 WebUI 和 API 流式传输不稳定，如过早结束或加载状态卡顿（[Issue #3551](https://github.com/HKUDS/nanobot/issues/3551)），相关修复已合入。
*   **国产模型适配**：随着 DeepSeek、小米 MiMo 等国产模型的接入请求增加，社区对 OpenAI 兼容层之外的推理模式适配需求日益增强。

## 8. 待处理积压
*   **[PR #3492](https://github.com/HKUDS/nanobot/pull/3492)**：涉及公网部署安全风险，建议维护者尽快 Review。
*   **[Issue #3292](https://github.com/HKUDS/nanobot/issues/3292)**：关于长程任务专注度的功能请求，尚未有明确开发计划，建议纳入 Roadmap 考虑。
*   **[PR #3564](https://github.com/HKUDS/nanobot/pull/3564)**：HookCenter 类型化事件系统重构，属于底层架构变更，可能需要较长时间评审。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-02)

## 1. 今日速览
Zeroclaw 项目今日保持高度活跃，社区互动频繁，过去24小时内 Issues 与 PRs 更新数均达到 50 条。虽然今日无新版本发布，但项目处于架构升级的关键阶段，重点围绕 **Schema v3 迁移** 和 **多智能体 UX 流程** 推进。多个 P1 级别的 Bug（如安装脚本报错、配置默认模型失败）正在社区积极讨论中，核心贡献者正集中精力修复 Gateway 侧的成本统计与配置加载逻辑。整体来看，项目正在为下一个大版本（v0.8.0）积蓄力量，稳定性修复与新功能预研并行。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日共有 **6 个 PR 合并/关闭**，主要集中在核心功能增强与破坏性变更的准备工作：

*   **Web Onboarding 重大重构落地**: PR #6179 ([feat(gateway,web,cli): web onboarding parity](https://github.com/zeroclaw-labs/zeroclaw/pull/6179)) 已关闭（推测已合并）。该 PR 引入了全新的 Gateway HTTP CRUD 接口，实现了 Web 端与 CLI 端配置体验的对等，解决了长期以来的 Web 端配置短板。
*   **Cron 手动触发功能**: PR #6164 ([feat(cron): manually trigger cron from webui](https://github.com/zeroclaw-labs/zeroclaw/pull/6164)) 已关闭。用户现在可以通过 WebUI 直接测试 Cron 任务，无需修改触发逻辑，提升了运维便利性。
*   **代码清理与优化**: PR #6098 移除了 `zeroclaw-runtime` 中未使用的重复 tracker 代码，减少了维护负担。
*   **依赖与协议更新**: PR #6167 推进了 ACP 协议 v1 的实现，修复了工具调用的权限与回传通道问题，为多智能体协作铺平道路。

## 4. 社区热点
今日社区讨论焦点集中在用户入门体验与配置底层逻辑的冲突上：

*   **[#6123 [Bug]: default_model issue on fresh install](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)**
    *   **热度**: 15 条评论
    *   **诉求**: 用户反馈在全新 LXC 容器安装并配置 Ollama 后，系统报错 `default_model issue`。这直接阻碍了新用户的首次使用，属于 S1 级别的阻塞问题。社区正在排查是否为 Provider 配置加载时序问题。
*   **[#5890 RFC: Multi-agent UX flow — design](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)**
    *   **热度**: 7 条评论
    *   **进展**: RFC 讨论期已结束，核心团队已投票通过。这标志着 Zeroclaw 将正式引入标准化的多智能体交互流程设计，是迈向多智能体协作的重要里程碑。
*   **[#4710 [Feature]: A better LOGO of Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw/issues/4710)**
    *   **热度**: 8 条评论
    *   **诉求**: 社区对品牌形象的关注，提出了新 Logo 设计方案并引发了审美讨论，体现了社区对项目身份认同的重视。

## 5. Bug 与稳定性
今日报告了多个影响工作流的关键 Bug，部分已有修复方案：

*   **[P0] 安装脚本缺失 Web 资产**
    *   Issue: [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096)
    *   现象: `install.sh` 仅安装二进制文件，未解压 Web Dashboard，导致 `zeroclaw gateway` 无法启动。
    *   状态: **Open**，严重影响新用户部署。

*   **[P1] Gateway 成本统计失效**
    *   Issue: [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001)
    *   现象: `/api/cost` 始终返回 0，且无运行时追踪文件生成。
    *   修复进度: PR [#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159) 已提交，正在修复 WebSocket 帧中 Token 使用量的透传逻辑。

*   **[P1] Python Skill 沙箱策略过严**
    *   Issue: [#5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)
    *   现象: 默认 Shell 沙箱配置阻断了现实的 Python 技能运行模式，开发者正在调整安全策略以平衡功能与隔离性。

*   **[P1] SkillForge 字段不匹配**
    *   Issue: [#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210)
    *   现象: 自动生成的 `SKILL.toml` 包含非 Schema 字段，导致解析失败。

## 6. 功能请求与路线图信号
*   **Schema v3 迁移启动**: Issue [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) 标记了 Schema v3 的迁移清单，这是 v0.8.0 版本的核心阻塞项，涉及 SQLite 内存后端迁移和字段重命名。PR [#6266](https://github.com/zeroclaw-labs/zeroclaw/pull/6266) 已开始处理相关迁移逻辑。
*   **增强的 LM Studio 支持**: Issue [#6260](https://github.com/zeroclaw-labs/zeroclaw/issues/6260) 请求支持配置 LM Studio 的服务器 URL，反映了对本地大模型生态的深度适配需求。
*   **WhatsApp Channel 支持**: PR [#6261](https://github.com/zeroclaw-labs/zeroclaw/pull/6261) 提议将 WhatsApp 加入 Cron 任务的交付渠道，显示了向即时通讯平台扩展的趋势。

## 7. 用户反馈摘要
*   **入门门槛较高**: 新用户在 LXC/Docker 环境下的部署体验不佳（#6123, #6096），主要集中在配置文件自动识别和 Web 资源打包上。用户期望“开箱即用”的体验，但目前在 Ollama 对接和 Dashboard 安装上存在断点。
*   **配置透明度不足**: 用户对 Provider 的回退逻辑（#6127）和模型选择逻辑（#6070）感到困惑，希望在 UI 中明确标识哪些是免费模型以及当前的配置加载路径。
*   **高级用户需求**: 针对 Python Skill 沙箱的限制（#5722），高级用户希望拥有更灵活的权限控制，以便运行复杂的金融分析脚本（如 InvestorClaw 项目）。

## 8. 待处理积压
以下重要 Issue 长期未得到最终解决或处于 Blocked 状态，需维护者关注：

*   **#6210 [P1] SkillForge 字段不匹配**: 涉及核心 Skills 生成逻辑，目前状态为 `blocked`，阻碍了 Skill 的自动化集成。
*   **#6123 [P1] 新安装 default_model 错误**: 作为 S1 级别工作流阻塞问题，尚未有明确的修复 PR 合并，建议优先排查。
*   **PR #6266 (Schema Migration)**: 这是一个庞大的集成 PR，包含破坏性变更，需要严格的代码审查和测试。

---
*分析师注*: 项目正处于架构重构的深水区（Schema v3 + Web CRUD），今日的 Bug 集中在安装与配置环节，建议在发布下个版本前进行一次全链路的“Smoke Test”以修复入门体验问题。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-02)

## 1. 今日速览
Hermes Agent 项目今日保持**高度活跃**状态，社区反馈量显著，新增 46 条活跃 Issue，开发者提交了 50 条 PR（其中 34 条待合并）。虽然未发布新版本，但开发重心明显向**稳定性修复与体验优化**倾斜，针对昨日涌现的认证、上下文压缩及平台适配问题，社区迅速响应并提交了对应的 Fix PR。项目健康度整体良好，响应速度快，但 Docker 构建与缓存遗留问题仍是社区痛点。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 16 条 PR 被合并或关闭，主要推进了以下方面的改进：

*   **平台适配与修复**：合并了针对 Feishu 回复上下文丢失的修复方案（相关 PR #18628 仍在处理中，原有重复 PR #18622 已关闭），优化了 WebSocket 在非本地回环地址的连接支持（PR #18633），解决了反向代理下的仪表盘连接问题。
*   **安全与配置增强**：提交了默认开启敏感信息脱敏的 PR（PR #18596），提升了生产环境下的安全性；修复了 Profile 模式下环境变量未继承导致的静默失败问题（PR #18600）。
*   **架构优化**：针对上下文压缩失败时无法回退到主模型的问题提交了修复（PR #18603），并改进了 Agent 任务委派中的模型解析逻辑（PR #18605）。

## 4. 社区热点
今日讨论最热烈的问题集中在**部署稳定性**与**环境兼容性**：

1.  **[Bug] Docker 构建失败** ([Issue #6352](https://github.com/NousResearch/hermes-agent/issues/6352))
    *   **热度**: 👍 0 | 评论 6
    *   **分析**: 自 v0.8.0 发布以来，主分支 Docker 构建持续失败，原因在于 `.[all]` extras 依赖图导致 pip 解析器过载。这是一个阻碍用户快速部署的关键问题，急需修复。
2.  **[Bug] 缓存引发的 TypeError** ([Issue #6207](https://github.com/NousResearch/hermes-agent/issues/6207))
    *   **热度**: 👍 1 | 评论 7
    *   **分析**: 这是一个遗留问题，代码更新后陈旧的 `.pyc` 缓存导致 `ToolRegistry` 参数不匹配，引发崩溃。评论数最多显示用户对升级后的稳定性非常关注。
3.  **[Feature] 自动切换皮肤** ([Issue #18625](https://github.com/NousResearch/hermes-agent/issues/18625))
    *   **热度**: 👍 0 | 评论 2
    *   **分析**: 用户希望根据系统主题或时间自动切换明暗模式，反映了用户对 CLI/TUI 视觉体验的高要求。

## 5. Bug 与稳定性
今日报告的 Bug 涵盖了从核心逻辑到平台适配的多个层面，部分已迅速产生修复 PR：

*   **P1 级别 (严重)**
    *   **Patch 工具损坏代码**: TypeScript 文件中 `await` 关键字被错误替换为 `***`。([Issue #4451](https://github.com/NousResearch/hermes-agent/issues/4451))
    *   **Secret 默认未脱敏**: PR [#18596](https://github.com/NousResearch/hermes-agent/pull/18596) 提出默认开启敏感信息脱敏，防止日志泄露。
    *   **Profile 模式静默失败**: PR [#18600](https://github.com/NousResearch/hermes-agent/pull/18600) 修复了 `HERMES_HOME` 未设置时的逻辑错误。

*   **P2 级别 (高)**
    *   **上下文压缩无回退**: Groq 返回 413 错误时，系统未回退至主模型。**已有 Fix PR** ([PR #18603](https://github.com/NousResearch/hermes-agent/pull/18603))。
    *   **任务委派凭证解析错误**: `delegate_task` 在使用 `opencode-go` 时解析出错误的 `base_url`。**已有 Fix PR** ([PR #18605](https://github.com/NousResearch/hermes-agent/pull/18605))。
    *   **KV 缓存失效**: 本地模型对话中，新消息导致 KV 缓存完全失效，影响推理性能。([Issue #4555](https://github.com/NousResearch/hermes-agent/issues/4555))
    *   **Telegram 图片文档处理**: 作为文档发送的图片被拒绝。([Issue #18620](https://github.com/NousResearch/hermes-agent/issues/18620))

## 6. 功能请求与路线图信号
社区正在推动 Hermes Agent 向更智能化、多模态融合的方向发展：

*   **精细化模型路由** ([Issue #18591](https://github.com/NousResearch/hermes-agent/issues/18591)): 用户希望为不同的子任务委派指定不同的模型，以平衡成本与性能。结合今日修复的 delegate 凭证解析，"智能路由"将是下一阶段重点。
*   **生态集成** ([Issue #18569](https://github.com/NousResearch/hermes-agent/issues/18569)): 提议集成 Signet 作为内存提供者，增强 Agent 的长期记忆能力。
*   **第三方 Agent 支持** ([Issue #18629](https://github.com/NousResearch/hermes-agent/issues/18629)): 请求 Kanban 支持直接调度 ACP 兼容的第三方 Agent，显示 Hermes 正试图成为多 Agent 协作的调度中心。

## 7. 用户反馈摘要
*   **痛点：Docker 部署难**: 多位用户反馈 `pip resolution-too-deep` 导致构建失败，表明现有依赖管理策略在容器化环境中存在瓶颈。
*   **痛点：升级后不稳定**: 频繁提及的缓存问题（Issue #6207）表明项目迭代速度快，但缺乏平滑的升级迁移机制或缓存清理脚本。
*   **场景：多平台一致性**: Telegram 图片处理问题反映了用户在不同平台（移动端、Web、API）交互体验一致性的需求。

## 8. 待处理积压
以下重要 Issue 长期未彻底解决，建议维护者重点关注：

1.  **[P2] Docker 构建失败** ([Issue #6352](https://github.com/NousResearch/hermes-agent/issues/6352)): 自 4 月 9 日创建至今，持续阻碍主分支构建，严重影响新用户体验。
2.  **[P3] 缓存损坏问题** ([Issue #6207](https://github.com/NousResearch/hermes-agent/issues/6207)): 自 4 月 8 日创建，虽然讨论活跃，但尚无彻底的修复方案合并。
3.  **[P1] 多消息处理丢失** ([Issue #4469](https://github.com/NousResearch/hermes-agent/issues/4469)): 4 月 1 日提出，快速发送多条消息时仅处理最后一条，属于交互逻辑的核心缺陷。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-02)

## 1. 今日速览
PicoClaw 项目今日呈现出**高强度开发与版本迭代**的态势，项目活跃度显著提升。过去 24 小时内，项目成功合并了多达 13 个 Pull Requests，主要集中在多用户隔离、安全加固及 K3s 部署支持上，标志着项目架构正向企业级生产环境标准迈进。与此同时，发布了 `v0.2.8` 的 nightly 版本，但随之而来的是关于 v0.2.8 版本的图片识别失效、Channel 加载失败等回归问题报告，显示新版本稳定性尚需验证。社区侧，关于嵌入式串口工具支持和 Android 客户端体验的讨论热度较高。

## 2. 版本发布
- **nightly: v0.2.8-nightly.20260502.6e1fab80**
  - **类型**: Automated Build (自动化构建)
  - **状态**: 可能不稳定，建议谨慎用于生产环境。
  - **更新范围**: 基于 `main` 分支构建，涵盖了今日合并的多用户隔离、安全加固及 Provider 扩展代码。
  - **注意事项**: 多个 Issues (#2738, #2742) 报告了 v0.2.8 版本存在功能回归，建议用户在升级前关注相关 Bug 进展。

## 3. 项目进展
今日项目进展显著，主要体现为**架构安全性与部署便利性的大幅提升**，共有 13 个 PR 被合并：

- **安全与架构重构**: 合并了一系列由 @stevef1uk 提交的关键 PR，包括 **Session 级工作空间隔离** (#2322)、**多用户会话隔离** (#2095)、**技能白名单机制** (#2325) 及 **Agent Shield 安全集成** (#2327)。这些更新极大增强了 Agent 在多租户环境下的安全边界，防止了敏感数据泄露。
- **部署支持**: 合并了 K3s 部署清单 (#2326)，简化了在 Kubernetes 环境下的部署流程。
- **Provider 扩展**: 新增 NVIDIA 和 Azure AI Provider 的原生支持 (#2323)，拓宽了模型生态。
- **API 增强**: 引入异步 `/chat` HTTP 端点 (#2324)，改善了外部系统集成的响应体验。
- **Bug 修复**: 修复了 DeepSeek 模型在非官方代理后的检测问题 (#2743)，以及 Telegram 频道 Markdown 表格渲染问题 (#2739)。

## 4. 社区热点
今日社区关注点集中在**功能扩展**与**特定模型兼容性**：

- **[PR #2740](https://github.com/sipeed/picoclaw/pull/2740)**: 修复 DeepSeek 推理模式流式传输丢失 `reasoning_content` 的问题。该 PR 解决了 DeepSeek "思考模式" 兼容性痛点，受到开发者的广泛关注，目前处于 Open 状态。
- **[Issue #2376](https://github.com/sipeed/picoclaw/issues/2376)**: 关于 Android 客户端 Enter 键发送消息的交互问题。用户普遍希望支持 "Enter 换行，专用按钮发送"，反映了移动端用户体验的精细化需求。
- **[Issue #1757](https://github.com/sipeed/picoclaw/issues/1757)**: 定时任务报错的老问题再次活跃，涉及 Channel 机制，显示该问题尚未得到根本解决。

## 5. Bug 与稳定性
随着 v0.2.8 的发布，出现了数个**阻塞性回归问题**，需维护者优先关注：

- **[严重] 图片识别功能失效** - [Issue #2738](https://github.com/sipeed/picoclaw/issues/2738)
  - 现象：升级至 v0.2.8 后上传图片无法被识别。
  - 状态：新开，暂无 Fix PR。
- **[严重] Gateway 启动无 Channel** - [Issue #2742](https://github.com/sipeed/picoclaw/issues/2742)
  - 现象：v0.2.8 版本配置了 Telegram 后，Gateway 启动时显示无 Channel。
  - 状态：新开，可能是配置加载逻辑的回归。
- **[中等] Android 客户端数据访问崩溃** - [Issue #2744](https://github.com/sipeed/picoclaw/issues/2744)
  - 现象：v0.2.8 Android 版无法访问任何 Tab 数据。
- **[中等] DeepSeek 流式输出丢失思考内容** - [PR #2740](https://github.com/sipeed/picoclaw/pull/2740)
  - 现象：流式响应中丢弃了 `reasoning_content`。
  - 状态：已有修复 PR 待合并。

## 6. 功能请求与路线图信号
用户需求开始向**底层硬件交互**与**高级模型特性**延伸：

- **嵌入式硬件支持**: [Issue #2649](https://github.com/sipeed/picoclaw/issues/2649) 请求增加串口（UART）工具支持。鉴于 PicoClaw 在嵌入式场景（如 RPi）的应用，该功能具有较高的实用价值，目前为 Open 状态。
- **多模态音频输入**: [PR #2626](https://github.com/sipeed/picoclaw/pull/2626) 提出支持多模态 LLM 的原生音频输入，目前处于 Open 状态。
- **流式 HTTP 请求**: [Issue #2404](https://github.com/sipeed/picoclaw/issues/2404) 请求在配置中支持 Streaming HTTP 请求，以适配 Python 客户端行为。

## 7. 用户反馈摘要
- **移动端体验痛点**: Android 用户对 "Enter 键直接发送" 的交互设计表达不满，认为这限制了长文本输入的便利性。
- **嵌入式场景需求**: 开发者在 Raspbian 等嵌入式系统上运行 PicoClaw，希望增加对 UART 等底层接口的内置工具支持，目前仅支持 I2C/SPI 略显不足。
- **模型兼容性**: 用户广泛使用 DeepSeek、Ollama (GLM-4) 等模型，对特定 Provider 的兼容性（如 DeepSeek 的思考模式）非常敏感。

## 8. 待处理积压
以下重要 Issue 长期未获解决或响应，建议维护者关注：

- **[Issue #1757](https://github.com/sipeed/picoclaw/issues/1757)**: 定时任务 Channel 报错问题，自 3 月 18 日创建以来断断续续活跃，尚未彻底修复，影响自动化任务执行。
- **[Issue #2404](https://github.com/sipeed/picoclaw/issues/2404)**: 关于流式 HTTP 请求的功能请求，自 4 月初提出后未有实质性进展。
- **[PR #2655](https://github.com/sipeed/picoclaw/pull/2655)**: 关于内核基线恢复的修复 PR，处于 Open 状态，涉及核心执行逻辑，可能需要深入审查。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-02)

## 1. 今日速览
NanoClaw 项目今日保持高度活跃，呈现出显著的"修复与重构"态势。过去24小时内，项目成功关闭了 4 个高优先级 Bug，并合并了 16 个 PR，主要集中修复了 OpenCode provider 的上下文丢失和进程泄露问题，显著提升了系统稳定性。虽然没有新版本发布，但核心 Provider 层面的修复为即将到来的 V2 升级扫清了障碍。社区关注点正从单一功能开发转向系统可观测性、跨版本迁移及底层架构健壮性。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 16 个 PR 合并/关闭，项目整体质量与稳定性向前迈进了一大步，主要体现在以下方面：

*   **OpenCode Provider 关键修复**：合并了 [PR #2152](qwibitai/nanoclaw PR #2152)、[PR #2153](qwibitai/nanoclaw PR #2153) 和 [PR #2165](qwibitai/nanoclaw PR #2165)，彻底解决了 OpenCode provider 无法加载 `CLAUDE.md` 上下文、进程泄露占用端口 4096 以及硬编码 90s 超时导致本地模型失败的问题。这是今日最重要的稳定性更新。
*   **核心稳定性增强**：[PR #2151](qwibitai/nanoclaw PR #2151) 修复了 Host sweep 机制中的死循环问题，防止 `processing_ack` 孤儿行导致服务重启后立即被杀。
*   **功能拓展**：[PR #2170](qwibitai/nanoclaw PR #2170) 实现了 WhatsApp 双向媒体消息支持，增强了通信渠道的交互能力。
*   **开发体验优化**：[PR #2171](qwibitai/nanoclaw PR #2171) 将 pre-commit hook 切换为 `lint-staged`，显著提升了代码提交速度。

## 4. 社区热点
今日讨论最活跃的话题围绕 **V2 升级路径** 和 **运行时可观测性** 展开：

*   **[Issue #2175] NanoClaw V1 → V2 Upgrade**: 社区成员正在深入讨论 V2 升级过程中的操作契约保留问题，涉及消息分发、权限组和工具安全等核心机制，显示出项目正处于架构迭代的关键期。
*   **[Issue #2173] & [Issue #2174] Interrupted-Run Detection**: 提出了关于中断运行的检测与恢复机制。这反映了用户在生产环境中遇到的痛点——当 Agent 运行被意外中断时，缺乏有效的状态持久化和恢复手段，导致消息丢失或处理停滞。

## 5. Bug 与稳定性
今日报告并处理了多个影响严重的 Bug，均已有关键进展：

*   **[Critical - Fixed] OpenCode Provider 上下文丢失** ([Issue #2150](qwibitai/nanoclaw Issue #2150))：Agent 无法读取指令，导致 "silent context loss"。已通过 [PR #2153](qwibitai/nanoclaw PR #2153) 修复。
*   **[Critical - Fixed] 进程泄露** ([Issue #2148](qwibitai/nanoclaw Issue #2148))：`SIGKILL` 未能正确清理底层二进制进程，导致端口 4096 被占用，容器不可用。已通过 [PR #2152](qwibitai/nanoclaw PR #2152) 修复。
*   **[High - New] Active-query push-mode 停滞** ([Issue #2177](qwibitai/nanoclaw Issue #2177))：在产生空文本结果后，push-mode 会静默停滞，目前尚未有修复 PR。
*   **[Medium - Fixed] 本地模型超时** ([Issue #2149](qwibitai/nanoclaw Issue #2149))：硬编码的 90s 超时对慢速推理不友好，现已改为可配置。

## 6. 功能请求与路线图信号
*   **Google Gemini 支持**：[PR #2136](qwibitai/nanoclaw PR #2136) 提议增加 Google Gemini provider，表明项目正致力于兼容更多主流 LLM 后端，减少对单一模型的依赖。
*   **V1 到 V2 自动迁移**：[PR #1931](qwibitai/nanoclaw PR #1931) 正在开发实验性的迁移流程，旨在自动检测并迁移 V1 配置，这可能成为下个版本的重点功能。
*   **Webchat V1**：[PR #2069](qwibitai/nanoclaw PR #2069) 正在推进 Webchat 技能的标准化集成。

## 7. 用户反馈摘要
*   **本地模型部署痛点**：用户反馈硬编码的超时时间和进程管理问题严重影响了本地模型部署体验（[Issue #2149](qwibitai/nanoclaw Issue #2149)），今日的修复响应了这一核心需求。
*   **macOS 兼容性**：[Issue #2172](qwibitai/nanoclaw Issue #2172) 指出构建脚本在 macOS 不区分大小写的文件系统上存在路径计算差异，影响了开发者的本地构建。
*   **上下文感知缺失**：用户对 Agent "失忆"（无法读取 CLAUDE.md）表示担忧（[Issue #2150](qwibitai/nanoclaw Issue #2150)），今日的修复恢复了指令注入链路。

## 8. 待处理积压
*   **[PR #1931] V1 → V2 迁移流程**：作为重大架构变更，此 PR 已开放多日，需维护者重点 Review 以推进版本迭代。
*   **[PR #2069] Webchat Skill**：作为重要的渠道集成功能，目前处于 Open 状态，需关注其合并进度。
*   **[Issue #2177] Push-mode 停滞**：新发现的高影响 Bug，目前尚无 PR 修复，建议维护者优先复现并处理。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-02)

## 1. 今日速览
NullClaw 项目今日展现出极高的维护活跃度与迭代速度，过去 24 小时内共处理了 33 个 PR（其中 31 个已合并/关闭）和 11 个 Issue（10 个已关闭）。项目重心明显向底层架构优化倾斜，重点修复了 Gateway 在特定环境下的 CPU 空转问题，并引入了基于 SQLite 的知识图谱内存后端。同时，安全性与并发处理能力得到显著增强，多项核心功能（如工具定制化、子代理通信）已落地，整体项目健康度良好，正快速向下一个稳定版本迈进。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有大量 PR 合并，标志着项目在稳定性、扩展性与架构现代化方面取得实质性突破：

*   **核心架构与稳定性修复**：
    *   **修复 Gateway CPU 空转**：合并了 [PR #853](https://github.com/nullclaw/nullclaw/pull/853)，通过引入 accept 循环退避机制，成功修复了 Issue [#851](https://github.com/nullclaw/nullclaw/issue/851) 中报告的在 Raspberry Pi 5 上因 `accept4()` 返回 `EAGAIN` 导致的 CPU 100% 占用问题。
    *   **并发模型升级**：[PR #855](https://github.com/nullclaw/nullclaw/pull/855) 实现了会话级抢占和非阻塞处理，解决了 Issue [#832](https://github.com/nullclaw/nullclaw/issue/832) 提出的长时任务阻塞问题，显著提升了 Agent 的并发交互能力。
    *   **HTTP 重构**：[PR #858](https://github.com/nullclaw/nullclaw/pull/858) 修复了 Zig 0.16 下网络流的挂起问题；当前打开的 [PR #881](https://github.com/nullclaw/nullclaw/pull/881) 正致力于移除运行时 Curl 子进程，转向原生 HTTP 实现，这将大幅减少依赖开销。

*   **重要新功能**：
    *   **知识图谱内存后端**：[PR #712](https://github.com/nullclaw/nullclaw/pull/712) 合并，引入了基于 SQLite 递归 CTE 的知识图谱存储，增强了 Agent 的长期记忆与实体关系推理能力。
    *   **工具定制化体系**：合并了系列 PR（[PR #834](https://github.com/nullclaw/nullclaw/pull/834), [PR #835](https://github.com/nullclaw/nullclaw/pull/835), [PR #836](https://github.com/nullclaw/nullclaw/pull/836)），支持外部配置文件、触发词优先级排序及动态 Prompt 覆盖，极大提升了工具链的灵活性。
    *   **子代理结果回传**：[PR #854](https://github.com/nullclaw/nullclaw/pull/854) 修复了子代理无法正确返回结果的问题，确保了多 Agent 协作的闭环。

*   **安全性增强**：
    *   [PR #880](https://github.com/nullclaw/nullclaw/pull/880) 为 `web_fetch` 和 `web_search` 输出添加了防欺骗边界，防止外部内容注入攻击。
    *   [PR #875](https://github.com/nullclaw/nullclaw/pull/875) 引入了三级风险分类，细化了命令执行的安全策略。

## 4. 社区热点
*   **[Issue #851](https://github.com/nullclaw/nullclaw/issue/851) [CLOSED]**：关于 Raspberry Pi 5 上 Gateway 进程 CPU 占用异常的 Bug 报告引发了较多讨论。这反映了 NullClaw 在边缘计算设备（IoT 场景）中的应用需求，维护者迅速响应并合并了修复代码。
*   **[Issue #879](https://github.com/nullclaw/nullclaw/issue/879) [OPEN]**：用户 @mark-os 提出关于 Cron 任务支持“命令+Prompt”混合模式的需求。这反映了用户希望将 Shell 脚本输出直接管道化为 AI 处理流程的强烈诉求，是自动化工作流中的关键一环。
*   **[Issue #832](https://github.com/nullclaw/nullclaw/issue/832) [CLOSED]**：关于非阻塞并发交互的增强请求，随着 [PR #855](https://github.com/nullclaw/nullclaw/pull/855) 的合并已解决，显示出社区对 Agent 处理长时任务响应能力的关注。

## 5. Bug 与稳定性
*   **严重 (已修复)**：[Issue #851](https://github.com/nullclaw/nullclaw/issue/851) Gateway 在 Linux aarch64 环境下的死循环问题。修复方案见 [PR #853](https://github.com/nullclaw/nullclaw/pull/853)。此外，[PR #878](https://github.com/nullclaw/nullclaw/pull/878)（待合并）进一步优化了 POSIX 线程睡眠机制，确保底层调度更可靠。
*   **中等 (已修复)**：[Issue #849](https://github.com/nullclaw/nullclaw/issue/849) 子代理任务无法返回结果，导致工作流中断。已通过 [PR #854](https://github.com/nullclaw/nullclaw/pull/854) 修复路由元数据持久化问题。
*   **中等 (已修复)**：Mattermost 频道 POST 请求体为空的问题，由 [PR #877](https://github.com/nullclaw/nullclaw/pull/877) 修复，涉及 Zig 0.16 下 `Allocating` Writer 的刷新时机。

## 6. 功能请求与路线图信号
*   **自动化运维增强**：[Issue #879](https://github.com/nullclaw/nullclaw/issue/879) 提出的 Shell-to-Agent Pipeline 需求，显示出项目正被用于更复杂的自动化运维场景。目前官方尚未合并相关代码，但这极有可能是后续版本的重点。
*   **用户体验优化**：[Issue #860](https://github.com/nullclaw/nullclaw/issue/860) 请求改进 `capabilities` 命令的输出格式，已通过 [PR #863](https://github.com/nullclaw/nullclaw/pull/863) 实现彩色表格输出并合并，表明项目正在打磨 CLI 的易用性。
*   **边缘计算支持**：针对无 RTC 硬件的优化 ([PR #856](https://github.com/nullclaw/nullclaw/pull/856)) 和 Tailscale 隧道支持 ([PR #850](https://github.com/nullclaw/nullclaw/pull/850)) 的合并，揭示了 NullClaw 在边缘网关部署方向上的路线图布局。

## 7. 用户反馈摘要
*   **部署痛点**：用户在 Docker Agent onboarding 步骤 8 遇到写入权限问题 ([Issue #763](https://github.com/nullclaw/nullclaw/issue/763))，虽已关闭，但提示容器化部署的权限管理仍需留意。
*   **性能关注**：用户报告在闲置状态下 CPU 满载 ([Issue #851](https://github.com/nullclaw/nullclaw/issue/851))，说明社区对资源消耗非常敏感，尤其是在嵌入式场景下。
*   **功能深度**：用户希望支持嵌套 Skills ([Issue #825](https://github.com/nullclaw/nullclaw/issue/825)) 和多工作区 ([Issue #833](https://github.com/nullclaw/nullclaw/issue/833))，后者已被关闭但显示出用户对复杂项目管理的渴望。

## 8. 待处理积压
*   **待合并 PR**：[PR #881](https://github.com/nullclaw/nullclaw/pull/881) (重构 HTTP 移除 Curl) 和 [PR #878](https://github.com/nullclaw/nullclaw/pull/878) (线程睡眠修复) 正在等待合并，这两项变更对系统底层稳定性至关重要，建议维护者优先 Review。
*   **新功能跟进**：[Issue #879](https://github.com/nullclaw/nullclaw/issue/879) 刚刚提出，尚无关联 PR，建议关注是否纳入近期的开发计划。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-02)

## 1. 今日速览
IronClaw 今日活跃度极高，共处理 **29 条 Issues** 和 **50 条 PRs**，显示出项目正处于架构重构与功能扩展的高峰期。核心焦点在于代号为 **"Reborn"** 的架构重构，相关的 HTTP 出口、运行时适配器及内存存储系统正在密集开发和集成中。同时，社区贡献了大量新功能 PR，包括法律文档处理、CLI 备份工具和数据洞察命令，显著拓展了 AI 助手的应用边界。不过，安装程序在 Linux 平台的兼容性问题仍是用户痛点，需等待相关修复 PR 合并。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 **19 个 PR 被合并或关闭**，主要集中在架构重构与关键 Bug 修复：

*   **架构重构**：核心贡献者正在推进 "Reborn" 架构落地。虽然 #3180-#3185 系列 PR 仍处于 Open 状态，但它们构建了原生的内存存储子系统，显示出项目正在逐步替换旧有适配器。已合并的 #3129 引入了推理链追踪功能，增强了对复杂 LLM 的支持。
*   **关键修复**：PR #3155 已合并，修复了 Issue #2583 中报告的“连续代码错误导致例行程序创建失败”问题，解决了 `mission_*` 工具的参数解析错误，提升了 Agent 执行稳定性。
*   **新功能扩展**：多个大型功能 PR 正在审核中，包括法律辅助工具集 的基础构建 (PR #3173) 和 CLI 备份功能 (PR #3178)，表明项目正从单一 AI 助手向多功能平台演进。

## 4. 社区热点
今日讨论最活跃的内容集中在架构设计与集成测试：

*   **[Issue #2987] [EPIC] Track Reborn architecture landing strategy** (评论: 44)
    作为 "Reborn" 架构的总领 Issue，吸引了大量技术讨论。社区正致力于解决如何在不进行大规模破坏性更新的情况下平滑落地新架构，讨论重点在于分层 PR 策略和集成测试路径。
*   **[Issue #3067] [TEST] Reborn: Add vertical-slice integration test suite** (评论: 14)
    针对 Reborn 架构的集成测试套件设计，讨论了如何通过公共入口点验证底层功能，确保架构迁移的安全性。
*   **[Issue #3085] Use shared Reborn runtime HTTP egress** (评论: 7)
    讨论了统一 WASM、Script 和 MCP 的 HTTP 出口路径，以解决当前分散代码中的安全隐患和资源控制问题。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的安装与环境问题，部分已有修复方案：

*   **[Critical] 安装脚本平台识别错误 (Issue #2818, #2949)**
    用户报告在 `x86_64-unknown-linux-gnu` 平台上安装失败。Issue #2818 指出 `cargo-dist` 生成的安装脚本存在下载链接错误。
    *   **状态**：已有修复 PR #3172 (bump cargo-dist to 0.31.0)，目前待合并。
*   **[Medium] Docker Hub 镜像缺失 (Issue #2963)**
    用户反馈文档中引用的 `nearai/ironclaw:latest` 镜像在 Docker Hub 不存在。
    *   **状态**：尚未有官方回复或修复 PR。
*   **[High] Gmail 任务认证失败 (Issue #3133)**
    用户尝试创建每三分钟发送邮件的例行程序失败，系统提示无法使用 Gmail。
    *   **状态**：Issue 新开，正在排查中，可能与 Issue #3166 提到的 Auth Gate 暂停逻辑有关。

## 6. 功能请求与路线图信号
用户与开发者提出了多项新功能请求，部分已进入开发阶段：

*   **ARM64 Docker 支持 (Issue #3168)**：请求发布 ARM64 架构的 Docker 镜像，以满足 ARM 服务器和本地开发需求。鉴于 Cranelift 已支持 aarch64，实现难度较低。
*   **Mission 自动恢复 (Issue #3166)**：针对 Auth Gate 暂停后的任务恢复机制，建议实现自动重试逻辑，而非停滞在 `Paused` 状态。
*   **Legal Harness (PR #3173, #3179, #3174)**：一组正在开发的 PR，旨在构建合同审查和法律文档 RAG 功能，这标志着 IronClaw 正向专业垂直领域扩展。

## 7. 用户反馈摘要
从 Issues 评论中提炼出以下核心痛点：

*   **安装门槛高**：多位用户反馈安装脚本对平台判断有误 (Issue #2949)，导致无法在标准 Linux 环境下部署，严重影响了新用户的尝鲜意愿。
*   **文档与实际不符**：Docker 镜像缺失 (Issue #2963) 暴露了文档更新滞后于发布流程的问题，导致用户部署困惑。
*   **OAuth 流程体验断裂**：用户在使用需要授权的工具（如 Gmail）时，遇到任务暂停且无法自动恢复的情况 (Issue #3133)，反映出当前 Agent 在处理外部授权中断时的容错机制不足。

## 8. 待处理积压
*   **Issue #2963 (Docker 镜像缺失)**：该 Issue 于 4 月 26 日创建，今日更新但未解决。随着 Docker 部署需求的增加（Issue #3168 提及 ARM 支持），维护者应尽快确认镜像发布流程。
*   **Issue #3133 (Gmail 任务失败)**：作为影响核心 Agent 功能（发送邮件）的 Bug，目前仅有 0 条评论，需要技术团队介入确认是 API 配置问题还是代码逻辑 Bug。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-02)

## 1. 今日速览
LobsterAI 项目今日整体活跃度处于**停滞状态**，无新 Issue 产生，也无代码合并或版本发布。过去 24 小时内，共有 6 个存量 Pull Requests 收到了更新，但状态均为 `OPEN` 且带有 `[stale]` 标签，显示出维护者对社区贡献的响应存在显著延迟。目前项目面临的核心挑战在于大量积压的修复与优化类 PR 未能及时合入，这可能影响项目的迭代速度与贡献者积极性。

## 2. 版本发布
无。

## 3. 项目进展
今日无合并或关闭的 PR，项目代码库在过去 24 小时内未发生实质性向前推进。所有待处理的 PR 均处于挂起状态，意味着多项关键的 Bug 修复与性能优化工作暂时停滞。

## 4. 社区热点
由于今日无新 Issue 且 PR 无新评论，社区讨论热度极低。今日更新的 6 个 PR 主要集中在性能优化与用户体验修复，虽然处于停滞状态，但代表了社区关注的技术热点：

*   **渲染性能优化**：[PR #1186](netease-youdao/LobsterAI PR #1186) 提出了解决 AI 流式响应期间界面卡顿的方案，通过引入 `createSelector` 和 `React.memo` 减少不必要的重渲染，直击长对话场景下的性能痛点。
*   **认证机制健壮性**：[PR #822](netease-youdao/LobsterAI PR #822) 旨在消除 Token 刷新时的竞态条件，这对于多任务并行处理的 AI 助手来说至关重要，反映了系统底层稳定性的改进需求。

## 5. Bug 与稳定性
今日无新报告的 Bug。但在待处理的积压 PR 中，包含了若干严重程度较高的修复建议（尚未合入）：

*   **高** | **认证竞态条件**：[PR #822](netease-youdao/LobsterAI PR #822) 指出多路径 Token 刷新缺乏并发保护，可能导致认证失败或 Token 混乱。目前已有 Fix PR 但未合并。
*   **中** | **卸载残留进程**：[PR #1190](netease-youdao/LobsterAI PR #1190) 指出 Windows 环境下卸载应用时若未手动关闭，进程会继续驻留，可能导致用户误判卸载失败。
*   **中** | **会话列表混淆**：[PR #1181](netease-youdao/LobsterAI PR #1181) 修复了内部心跳任务会话显示在用户列表中的 UI 问题。

## 6. 功能请求与路线图信号
从当前的 PR 积压情况来看，下一阶段版本更新若能合入以下内容，将显著提升用户体验：

*   **本地技能管理增强**：[PR #1185](netease-youdao/LobsterAI PR #1185) 提议为导入的技能卡片添加“打开文件夹”按钮，满足高级用户自定义编辑技能文件的需求，属于提升易用性的重要功能。
*   **资源去重机制**：[PR #825](netease-youdao/LobsterAI PR #825) 引入了基于内容哈希的重复检测，避免用户重复上传相同技能包，这表明项目正在向更完善的资源管理方向演进。

## 7. 用户反馈摘要
今日无直接用户评论数据。从现有 PR 描述中提取的用户痛点包括：
*   **性能体验**：长对话或流式输出时界面滚动卡顿，CPU 占用高。
*   **操作便利性**：希望更方便地修改本地 Skill 文件，目前的 UI 交互路径较长。
*   **软件卸载**：Windows 卸载后进程仍存留，造成用户困惑。

## 8. 待处理积压
项目存在明显的 PR 积压问题，以下重要 PR 均已停留超过一个月且被打上 `stale` 标签，急需维护者关注：

1.  **认证核心修复**：[PR #822](netease-youdao/LobsterAI PR #822)（创建于 2026-03-25）- 修复 Token 刷新竞态。
2.  **技能去重**：[PR #825](netease-youdao/LobsterAI PR #825)（创建于 2026-03-25）- 防止技能重复上传。
3.  **性能优化**：[PR #1186](netease-youdao/LobsterAI PR #1186)（创建于 2026-04-01）- 优化流式渲染性能。
4.  **安装程序修复**：[PR #1190](netease-youdao/LobsterAI PR #1190)（创建于 2026-04-01）- 修复 Windows 卸载逻辑。

**分析师建议**：建议项目团队优先审查并合入认证类（#822）与安装程序类（#1190）修复，以避免影响基础稳定性；随后处理性能优化类（#1186）PR 以提升用户体验。长期的 `stale` 状态可能会阻碍社区贡献者的后续投入。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-02)

## 1. 今日速览
Moltis 项目在过去 24 小时内展现出极高的维护活跃度与响应速度。共有 **9 个 PR 被成功合并**，修复了包括 Telegram 崩溃、Discord 指令失效在内的多个关键 Bug，同时引入了数据迁移、新模型提供商等重要功能。尽管没有发布新版本，但代码库的变更频率表明项目正处于高频迭代期。社区方面，新增了关于子智能体容错机制的深度功能请求，显示了用户对生产环境稳定性的更高期待。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目进展显著，主要集中在**多渠道适配修复**与**核心功能增强**两个方面：

*   **渠道与稳定性修复**：
    *   修复了 Telegram 发送文档导致服务崩溃的严重 Bug ([PR #954](https://github.com/moltis-org/moltis/pull/954))，通过升级 `teloxide` 依赖解决了线程恐慌问题。
    *   修复了 Discord 斜杠命令无法接收参数的问题 ([PR #950](https://github.com/moltis-org/moltis/pull/950))，修复了交互体验的阻断性故障。
    *   修复了终端创建 Tab 时的竞态条件错误 ([PR #955](https://github.com/moltis-org/moltis/pull/955))，提升了终端稳定性。
*   **功能增强与新特性**：
    *   **数据便携性**：新增 `moltis-portable` 模块，支持配置、数据库和会话的完整导入导出 ([PR #951](https://github.com/moltis-org/moltis/pull/951))，极大便利了部署迁移。
    *   **模型生态**：新增 OpenCode Zen 提供商支持 ([PR #944](https://github.com/moltis-org/moltis/pull/944))，扩展了模型选择范围。
    *   **国际化**：合并了为期两个月的繁体中文（zh-TW）支持 PR ([PR #339](https://github.com/moltis-org/moltis/pull/339))，完善了多语言支持。
*   **UI 细节打磨**：修复了聊天窗口横向溢出 ([PR #952](https://github.com/moltis-org/moltis/pull/952)) 及自动滚动失效 ([PR #953](https://github.com/moltis-org/moltis/pull/953)) 等前端体验问题。

## 4. 社区热点
今日社区互动主要集中在问题反馈与功能提议上，整体反馈质量较高：

*   **最值得关注的功能请求**：Issue [#949](https://github.com/moltis-org/moltis/issues/949) 提出为 `spawn_agent` 生成的子智能体增加提供商故障转移支持。作者指出，当前子智能体缺乏容错机制，一旦上游模型服务异常会导致整个会话失败，这反映了高级用户对 Moltis 在生产环境健壮性的迫切需求。
*   **最活跃的 PR**：[PR #942](https://github.com/moltis-org/moltis/pull/942)（远程沙箱支持）和 [PR #920](https://github.com/moltis-org/moltis/pull/920)（电话呼叫支持）目前处于 Open 状态，作为架构级的大型变更，正在持续吸引开发者关注。

## 5. Bug 与稳定性
今日报告并修复了多个影响用户体验的 Bug，响应速度极快：

1.  **[严重] Telegram 服务崩溃** ([Issue #947](https://github.com/moltis-org/moltis/issues/947))
    *   **现象**：通过 multipart 上传文档时导致 Moltis 重启/崩溃。
    *   **状态**：已由 [PR #954](https://github.com/moltis-org/moltis/pull/954) 修复并关闭。
2.  **[中等] Discord 斜杠命令参数缺失** ([Issue #948](https://github.com/moltis-org/moltis/issues/948))
    *   **现象**：Discord 端的 `/mode`、`/model` 等命令无法识别参数。
    *   **状态**：已由 [PR #950](https://github.com/moltis-org/moltis/pull/950) 修复并关闭。
3.  **[低] UI 布局与滚动问题** ([Issue #945](https://github.com/moltis-org/moltis/issues/945), [Issue #946](https://github.com/moltis-org/moltis/issues/946))
    *   **现象**：聊天界面过宽导致横向滚动条；消息到达时无法自动滚动到底部。
    *   **状态**：均已修复，并增加了 E2E 回归测试。

## 6. 功能请求与路线图信号
*   **子智能体容错架构**：Issue [#949](https://github.com/moltis-org/moltis/issues/949) 提出的子智能体故障转移机制，是项目从单一模型调用向复杂智能体编排进阶的关键信号。若该功能落地，将显著提升 Moltis 在复杂任务流处理中的可靠性。
*   **云端部署支持**：处于 Open 状态的 [PR #942](https://github.com/moltis-org/moltis/pull/942) 拟引入对 Vercel、Fly.io 等云环境的沙箱支持，预示着项目正积极解决“Docker-in-Docker”受限场景下的部署难题，可能成为下一阶段路线图的重点。

## 7. 用户反馈摘要
*   **部署体验痛点**：用户 @penso 提出的沙箱支持 PR 反映出，在 DigitalOcean、Fly.io 等 PaaS 平台部署时，现有的 Docker 沙箱机制受限，用户迫切需要更灵活的远程执行环境。
*   **交互体验反馈**：用户 @vvuk 对 UI 细节（布局宽度、自动滚动）的反馈表明，部分用户正高频使用 Web UI 进行长对话，对前端交互的流畅度要求较高。
*   **多渠道一致性**：Telegram 和 Discord 的 Bug 报告显示，跨平台渠道的适配和维护是当前用户使用的高频场景，也是容易出错的环节。

## 8. 待处理积压
*   **[重要] 远程沙箱支持 ([PR #942](https://github.com/moltis-org/moltis/pull/942))**：该 PR 涉及底层架构变更，目前仍待合并，建议维护者尽快 Review 以解决云端部署痛点。
*   **[重要] 电话呼叫支持 ([PR #920](https://github.com/moltis-org/moltis/pull/920))**：已开启数日，涉及 Twilio 集成，建议持续跟进测试与合并进度。
*   **[新请求] 子智能体故障转移 ([Issue #949](https://github.com/moltis-org/moltis/issues/949))**：这是今日唯一处于 Open 状态的 Issue，涉及核心调度逻辑，建议纳入规划讨论。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-05-02)

## 1. 今日速览
CoPaw 项目今日维持高活跃度，社区反馈热烈，过去24小时内新增了 8 条活跃 Issue，但无 1 条 Issue 关闭，同时有 3 条 PR 处于待合并状态但未合并。项目当前处于功能快速迭代期，用户对模型兼容性（DeepSeek V4、Ollama）及记忆机制提出了较高要求。值得注意的是，核心功能的稳定性（如对话中断、上下文丢失）成为今日用户反馈的焦点，项目维护压力有所上升。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日无合并的 PR，项目代码库暂无新增变更。目前有 3 条 PR 处于开放状态，显示出社区正在积极推进以下功能：
*   **平台集成扩展**：PR #3994 正在添加火山引擎及其 Coding Plan Provider，这将进一步扩展项目的模型供应商生态。
*   **用户体验优化**：PR #3525 试图解决 Discord 频道中定时任务消息混乱的问题，通过创建线程来隔离输出。
*   **基础设施增强**：PR #3831 增加了向量模型连接测试功能，有助于提升配置阶段的易用性。

尽管今日无代码合入，但这些开放 PR 表明项目正在向更广泛的模型支持和更优的通道体验方向发展。

## 4. 社区热点
今日讨论最活跃的话题集中在**模型能力支持与架构优化**：
*   **[OPEN] DeepSeek V4 思考模式支持不完善** ([#3996](https://github.com/agentscope-ai/QwenPaw/issues/3996))：用户指出当前仅支持开关思考模式，未能利用 DeepSeek V4 API 提供的 `xhigh/max` 等更精细的思考强度控制。这反映了高级用户对模型推理能力调优的细致需求。
*   **[OPEN] 记忆管理机制增强** ([#3995](https://github.com/agentscope-ai/QwenPaw/issues/3995))：用户深入分析了当前基于 Markdown 的记忆系统痛点，提出了“生命周期管理”和“写入冲突检测”等系统性改进建议。该帖子质量极高，揭示了长期运行后记忆文件臃肿的架构级问题。

## 5. Bug 与稳定性
今日报告了多个影响核心体验的 Bug，按严重程度排序如下：

*   **严重 - 核心功能失效**
    *   **Agent 对话中断** ([#3992](https://github.com/agentscope-ai/QwenPaw/issues/3992))：用户反馈与 Agent 进行几轮对话后程序停止执行，这直接影响交互体验，目前无修复 PR。
    *   **Ollama 上下文丢失** ([#3991](https://github.com/agentscope-ai/QwenPaw/issues/3991))：使用 Ollama 频道时无法携带对话历史，导致模型无记忆，严重影响本地模型用户。经排查非模型问题，疑似 QwenPaw 上下文处理逻辑缺陷。

*   **中等 - 配置与兼容性**
    *   **Windows 打包冲突** ([#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988))：`conda-pack` 与 `pip install` 存在动作冲突，导致构建失败，增加了部署难度。
    *   **MCP 客户端超时硬编码** ([#3997](https://github.com/agentscope-ai/QwenPaw/issues/3997))：`MCPClientConfig` 不支持配置 `timeout`，默认 30s 限制导致长耗时任务无法完成，配置项被静默丢弃。

*   **轻微**
    *   **通道响应速度慢** ([#3990](https://github.com/agentscope-ai/QwenPaw/issues/3990))：用户反馈通道延迟较高，影响实时交互体验。

## 6. 功能请求与路线图信号
结合开放的 Issue 与 PR，项目接下来的路线图可能涵盖以下方向：
*   **API 协议升级**：Issue [#3993](https://github.com/agentscope-ai/QwenPaw/issues/3993) 建议支持 OpenAI Responses API 和原生 Tool Calling，这可能成为提升 Agent 工具调用能力的关键更新。
*   **模型生态扩张**：PR [#3994](https://github.com/agentscope-ai/QwenPaw/issues/3994) 显示项目正在接入火山引擎，配合 DeepSeek V4 的精细化控制需求，项目正致力于兼容国产主流及前沿模型。
*   **记忆系统重构**：针对 [#3995](https://github.com/agentscope-ai/QwenPaw/issues/3995) 的反馈，记忆模块的自动化归档与清理机制可能会被纳入规划，以解决长期运行的性能瓶颈。

## 7. 用户反馈摘要
*   **痛点集中**：用户对稳定性（尤其是多轮对话和本地模型部署）的焦虑感较强，Issue 中频繁出现“停止执行”、“记忆丢失”等关键词。
*   **配置困扰**：Pydantic 静默丢弃未知字段（如 timeout）让用户感到困惑，建议在配置层增加校验提示而非静默过滤。
*   **积极信号**：用户对记忆系统（#3995）的反馈非常具有建设性，表明核心用户群体已将该项目用于长期、严肃的生产力场景，而非仅仅是尝鲜。

## 8. 待处理积压
*   **长期未合并 PR**：PR [#3525](https://github.com/agentscope-ai/QwenPaw/pull/3525) (Discord 线程功能) 自 4 月 17 日创建至今仍在等待审核，建议维护者关注该功能对社区消息流的改善价值，尽快推进合并或反馈修改意见。
*   **积压问题增加**：今日 0 个 Issue 关闭，净增 8 个 Issue。特别是 Bug 类 Issue (#3992, #3991) 缺乏官方回应，建议优先处理阻断性问题，避免挫伤社区积极性。

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