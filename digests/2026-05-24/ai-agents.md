# OpenClaw 生态日报 2026-05-24

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-24 03:53 UTC

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

# OpenClaw 项目动态日报 (2026-05-24)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，过去 24 小时内 Issues 活跃量高达 500 条，其中新开/活跃 Issue 463 条，显示用户社区反馈极其热烈。项目发布了 **v2026.5.22** 正式版与 beta 版，主要聚焦于 Gateway 性能优化与文档改进。代码合并活跃，共有 287 条 PR 更新（含合并/关闭），显示维护团队正在积极处理积压请求。然而，Issue 新增量远超关闭量（463 vs 37），表明项目正面临较大的用户支持压力和功能需求堆积，建议关注社区反馈的处理效率。

## 2. 版本发布
今日发布了 **v2026.5.22** 和 **v2026.5.22-beta.1** 两个版本。

- **v2026.5.22 (Latest)**
  - **性能优化**：Gateway 层面重用了进程稳定的通道目录读取，避免重复的捆绑通道边界检查，显著提升了 Watch 模式的性能；同时优化了 CPU Profile 的轮转机制，防止基准测试运行时产物无限积累。
  - **启动优化**：在启动过程中重用不可变的插件元数据快照，减少重复计算开销。
  - **影响**：此次更新主要针对 Gateway 性能，无破坏性变更，建议所有 Gateway 部署尽快升级以获得更好的稳定性与性能表现。

- **v2026.5.22-beta.1**
  - **文档增强**：大幅更新了 README 引导、Gateway 启动路径、WhatsApp QR 扫码恢复、Cron 输出语言提示及 403 错误排查指南。
  - **致谢**：感谢 @deepujain, @Zacxxx, @neyric 等社区的贡献。

## 3. 项目进展
今日共有 **287 条 PR 被合并或关闭**，主要集中在稳定性修复和功能完善，显著提升了系统的健壮性。

- **核心修复合并**：
  - [PR #85915](https://github.com/openclaw/openclaw/pull/85915): 修复了 Discord 实时语音的唤醒词限制问题，防止无效的静默广播。
  - [PR #85683](https://github.com/openclaw/openclaw/pull/85683): 解决了 Foundry DeepSeek V4 的 OpenAI 风格推理兼容性问题。
  - [PR #85910](https://github.com/openclaw/openclaw/pull/85910): 修复了长运行 Gateway 中 `MemoryIndexManager` 实例未释放导致的文件句柄泄漏，解决内存泄漏隐患。
  - [PR #85479](https://github.com/openclaw/openclaw/pull/85479): 隔离了 `boot-md` 启动会话，防止启动指令污染正常会话记录。

- **重要修复待合并**：
  - [PR #85889](https://github.com/openclaw/openclaw/pull/85889): 修复了 OpenAI 兼容端点的 `max_completion_tokens` 限制，防止上下文溢出。
  - [PR #85786](https://github.com/openclaw/openclaw/pull/85786): 在 UI 中明确区分工具调用的成功与失败状态，提升交互体验。

## 4. 社区热点
今日社区讨论主要集中在跨平台支持、隐私安全及核心功能稳定性上。

- **[Issue #75](https://github.com/openclaw/openclaw/issues/75) [105评论]**: **Linux/Windows 客户端需求**。
  社区强烈呼吁提供 Linux 和 Windows 原生客户端，目前仅有 macOS/iOS/Android 支持。这成为评论数最高的 Issue，显示出桌面端用户需求的缺口。

- **[Issue #25592](https://github.com/openclaw/openclaw/issues/25592) [26评论]**: **工具调用间文本泄露至消息通道**。
  用户报告在工具调用过程中，内部处理文本（如错误日志）被错误路由到 Slack/iMessage 等外部通道，存在隐私泄露风险。这是一个 P1 级别的严重 UX 问题。

- **[Issue #9443](https://github.com/openclaw/openclaw/issues/9443) [25评论]**: **预编译 Android APK 请求**。
  用户希望官方直接提供 APK 下载，而非需要自行编译源码，降低了非技术用户的使用门槛。

- **[Issue #32473](https://github.com/openclaw/openclaw/issues/32473) [15评论]**: **控制 UI 安全上下文报错**。
  在 Docker/VPS 环境下配置后，控制 UI 要求 HTTPS 或 localhost，导致无法正常访问。这是一个回归问题，影响了远程部署体验。

## 5. Bug 与稳定性
今日报告了多个严重级别的 Bug，涉及安全、数据丢失和核心功能失效。

- **严重 (P1 / Security)**：
  - **[Issue #25592](https://github.com/openclaw/openclaw/issues/25592)**: 工具调用文本泄露。**影响**：隐私风险。**状态**：讨论中。
  - **[Issue #10659](https://github.com/openclaw/openclaw/issues/10659)**: 密钥掩码请求。Agent 可读取明文 API Key，存在泄露风险。**状态**：Open。
  - **[Issue #38327](https://github.com/openclaw/openclaw/issues/38327)**: Google Vertex/Gemini 模型调用崩溃。**状态**：Open。

- **数据丢失/状态损坏**：
  - **[Issue #40001](https://github.com/openclaw/openclaw/issues/40001)**: `write` 工具缺乏追加模式，导致隔离 Cron 任务覆盖共享文件，造成数据丢失。
  - **[Issue #29387](https://github.com/openclaw/openclaw/issues/29387)**: `agentDir` 中的 Bootstrap 文件被忽略，导致 Agent 行为不符合预期。

- **已有修复 PR**：
  - 针对内存泄漏和会话隔离问题已有 PR 提交，待合并。

## 6. 功能请求与路线图信号
用户对功能扩展和安全性提出了明确需求，部分功能已有相关实现线索。

- **跨平台客户端 (Hot)**: Linux/Windows App (#75) 和 Android APK (#9443) 是最热门的需求，目前暂无官方 PR 进展，建议纳入短期路线图。
- **分层上下文加载**: [Issue #22438](https://github.com/openclaw/openclaw/issues/22438) 提议按层级加载 Bootstrap 文件以节省 Token 消耗，这对于大型工作空间非常有价值。
- **成本控制**: [Issue #42475](https://github.com/openclaw/openclaw/issues/42475) 请求在 Gateway 层面强制执行 Agent 预算限制，反映了对企业级成本管理的需求。
- **功能开关**: [PR #76298](https://github.com/openclaw/openclaw/pull/76298) 正在引入 `openclaw experimental` 命令，为上述新功能的灰度发布奠定基础。

## 7. 用户反馈摘要
通过 Issue 评论分析，用户反馈集中在以下痛点：
- **部署复杂度高**：Windows 更新报错 (EBUSY)、Docker 沙箱配置困难、远程访问 HTTPS 限制，导致自托管体验坎坷。
- **安全性担忧**：API Key 明文暴露、内部日志泄露到公共频道，影响了企业在生产环境的使用信心。
- **多通道体验不一致**：Telegram/Signal/Slack 在特定场景下存在消息丢失、头像加载失败或 DM 路由错误。

**积极反馈**：用户对 OpenClaw 的架构灵活性表示认可，特别是对 `v2026.5.22` 的性能优化和文档更新表示欢迎。

## 8. 待处理积压
以下重要 Issue 长期未得到有效解决或处于长期讨论状态，需维护者重点关注：

- **[Issue #75](https://github.com/openclaw/openclaw/issues/75) (创建于 2026-01-01)**: Linux/Windows 客户端支持。作为热度最高的 Issue，长期缺乏官方回应可能会打击桌面端用户积极性。
- **[Issue #22676](https://github.com/openclaw/openclaw/issues/22676)**: Signal 守护进程重启竞态条件。这是一个 P1 级别的稳定性问题，可能导致消息发送失败和孤立进程。
- **[Issue #6731](https://github.com/openclaw/openclaw/issues/6731)**: Safe/Unsafe ClawdBot 模式。涉及核心安全架构的重构提案，需要产品决策。

---
*分析师注：OpenClaw 正处于快速迭代期，性能优化显著，但用户增长带来的 Issue 积压严重，建议社区加强 Bug 筛选与文档指引，缓解维护压力。*

---

## 横向生态对比

# AI 智能体开源生态横向对比分析日报 (2026-05-24)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“功能堆砌”向“生产级安全与架构重构”转型的关键期**。头部项目面临规模化带来的维护压力，聚焦于性能优化与隐私合规；新兴项目则在记忆系统、多模态能力和沙箱安全等细分领域寻求突破。跨平台客户端支持、记忆架构的有效性以及模型兼容性（特别是 DeepSeek 等推理模型）成为全行业共同攻坚的技术高地。

## 2. 各项目活跃度对比

| 项目名称 | Issue 活跃度 (新开/活跃) | PR 活跃度 (更新/合并) | Release 情况 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **极高** (500+条，积压严重) | 高 (287条更新) | v2026.5.22 正式版 | ⚠️ 高压预警：用户反馈过载，维护效率堪忧。 |
| **Hermes Agent** | 高 (50条) | 高 (50条更新，17合并) | 无 | 🟡 稳健迭代：重心向安全架构倾斜，认证问题突出。 |
| **Zeroclaw** | 高 (42条新开) | 中 (50更新，仅4合并) | 无 (Beta测试期) | ⚠️ 积压风险：PR 合并率低，核心稳定性问题频发。 |
| **IronClaw** | 低 | 极高 (50更新，12合并) | 无 | 🟢 架构演进：重构与安全底座构建迅速。 |
| **ZeptoClaw** | 低 | 高 (14合并/关闭) | 无 | 🟢 高效治理：维护响应极快，CI 安全零容忍。 |
| **NanoClaw** | 低 | 高 (11合并) | 无 | 🟢 质量巩固：集中修复关键 Bug，稳定性提升。 |
| **PicoClaw** | 低 | 中 (4合并) | v0.2.9-nightly | 🟢 敏捷开发：快速响应模型特性，迭代健康。 |
| **NanoBot** | 低 (7条) | 低 (11更新，4合并) | 无 | 🟢 功能迭代：社区活跃度平稳，聚焦记忆系统。 |
| **Moltis** | 中 (6条新Bug) | 中 (3合并) | 无 | 🟢 快速响应：Bug 修复及时，架构重构中。 |
| **CoPaw** | 中 (10条更新) | 低 (3个待合并) | 无 | 🟡 社区活跃：功能扩展积极，但基础体验有瑕疵。 |
| **LobsterAI** | 低 (讨论为主) | 无 (代码停滞) | 无 | 🔴 停滞风险：核心功能 PR 长期未合并，维护响应慢。 |
| **TinyClaw / EasyClaw** | 无 | 无 | 无 | ⚪ 无活动。 |

## 3. OpenClaw 在生态中的定位

作为生态的**核心参照系**，OpenClaw 展现了“大而全”的平台型特征，但正面临严峻的“规模化诅咒”。

*   **优势与规模**：社区热度断层领先（500+ Issues），表明其已成为用户尝试 AI Agent 的首选入口。其 Gateway 性能优化和多通道支持（WhatsApp/Discord）构建了坚固的护城河。
*   **技术路线差异**：相比 **PicoClaw** 的轻量级模型适配路线，OpenClaw 更倾向于厚重的平台架构，但这导致了部署复杂度高的问题（Issue #75）。相比 **Hermes/IronClaw** 主动构建安全沙箱和签名机制，OpenClaw 的安全性更偏向于被动修补（今日出现的工具调用文本泄露 Issue #25592）。
*   **社区挑战**：Issue 新增量远超关闭量（463 vs 37），反映出维护力量跟不上用户增长。相比之下，**ZeptoClaw** 和 **PicoClaw** 展现了更高效的“小步快跑”模式。

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与动态 |
| :--- | :--- | :--- |
| **记忆系统架构** | NanoBot, LobsterAI, ZeptoClaw | **痛点**：传统 RAG 或简单历史记录无法满足长周期任务。**NanoBot** 提出 "Dream 饥饿问题"（实时性差），**LobsterAI** 深度反思进化算法瓶颈，**ZeptoClaw** 优化长期记忆工具。记忆的**结构化**与**实时更新**是核心诉求。 |
| **安全与沙箱隔离** | Hermes Agent, IronClaw, OpenClaw | **痛点**：生产环境下的隐私与权限控制。**Hermes** 提出 Iron-proxy 沙箱，**IronClaw** 构建认证签名底座，**OpenClaw** 报告工具调用文本泄露。行业正从“信任 Agent”转向“零信任架构”。 |
| **模型兼容性 (DeepSeek/推理)** | OpenClaw, PicoClaw, NanoBot | **动态**：随着 DeepSeek V4/R1 等推理模型流行，**OpenClaw** 和 **PicoClaw** 均在今日合并了对 `thinking_level` 或推理兼容性的支持。AI Agent 框架正在快速适配“非即时回复”的推理模型。 |
| **MCP (Model Context Protocol)** | CoPaw, NullClaw, Moltis | **诉求**：标准化工具接入。**CoPaw** 引入 MCP 市场，**Moltis** 报告 MCP 环境变量泄露。MCP 正成为连接 Agent 与外部工具的事实标准，但也带来了新的安全挑战。 |

## 5. 差异化定位分析

*   **功能侧重**：
    *   **OpenClaw/Zeroclaw**：全栈集成，侧重多渠道通信和网关性能，适合作为统一接入层。
    *   **IronClaw/Hermes Agent**：金融级/企业级安全，侧重权限审计、支付签名和沙箱隔离，适合高敏感场景。
    *   **NanoBot/LobsterAI**：智能体内核，侧重记忆机制、自我进化算法，适合科研与深度定制。
    *   **CoPaw**：工作流与数据，侧重 BI 插件与 MCP 生态，偏向生产力工具属性。

*   **技术架构**：
    *   **语言栈**：OpenClaw/Hermes 走 TypeScript/Go 路线；ZeptoClaw/NullClaw 选择 Rust 追求性能与安全；NanoBot 依托 Python 生态。
    *   **模型依赖**：PicoClaw 表现出对特定模型（如 DeepSeek）最快的适配速度；而 OpenClaw 和 Hermes 更关注多模型网关层的统一调度。

## 6. 社区热度与成熟度

*   **第一梯队（规模化平台）**：**OpenClaw**、**Hermes Agent**。社区极其活跃但面临严重的维护压力，Issue 积压多，处于“快速迭代与救火并存”阶段，稳定性是最大痛点。
*   **第二梯队（垂直领域先锋）**：**IronClaw**、**PicoClaw**、**ZeptoClaw**。社区规模适中，维护质量高，PR 响应快。IronClaw 正在构建高壁垒的安全架构，PicoClaw 敏捷跟进模型特性，ZeptoClaw 严谨重构核心链路。
*   **第三梯队（探索与停滞）**：**LobsterAI**（讨论深奥但代码停滞）、**NanoBot**（稳步迭代）。**Zeroclaw** 虽活跃但 PR 积压严重，处于从快速发展向稳定期过渡的阵痛阶段。

## 7. 值得关注的趋势信号

1.  **安全左移与零信任设计**：
    多个项目（Hermes, IronClaw, Moltis）今日均涉及沙箱、签名和环境变量泄露问题。**信号**：Agent 框架不再仅仅追求“能做事”，而是开始严苛限制“能做多少事”。防止 API Key 泄露和工具越权将成为下一版本标配。

2.  **DeepSeek 推理模型的适配潮**：
    OpenClaw 和 PicoClaw 均在今日集中修复或合并了针对 DeepSeek V4 推理模式的代码。**信号**：AI Agent 正在适应“慢思考”模型，传统的流式响应协议可能需要针对长推理过程进行改造（如状态显示、上下文窗口管理）。

3.  **记忆系统的“饥饿”困境**：
    NanoBot 和 LobsterAI 的深度讨论揭示了当前记忆系统的通病——仅依赖历史对话的静态记忆已无法满足 Agent 自主进化。**信号**：未来的竞争点将从“上下文窗口大小”转向“动态知识库更新机制”，Agent 需要具备实时摄入外部知识的能力。

4.  **OAuth 订阅认证的合规化**：
    Hermes Agent 报告的 xAI 和 Claude 订阅认证失败反映了商业模型与开源框架的摩擦。**信号**：开源 Agent 框架正在试图打通“BYOK (Bring Your Own Key)”向“BYOS (Bring Your Own Subscription)”的转变，这将大幅降低用户门槛，但也对逆向工程和合规性提出了挑战。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-24)

## 1. 今日速览
NanoBot 项目今日保持高活跃度开发状态，社区贡献热情持续高涨。过去24小时内共有 11 个 PR 更新与 7 个 Issue 更新，其中 4 个 PR 成功合并/关闭，解决了长期存在的配置限制与兼容性问题。项目重点聚焦于 **Dream 记忆系统优化**、**多模态能力扩展** 及 **用户体验改进**，整体呈现功能迭代加速与社区协作深化的健康态势。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 4 个 PR 合并/关闭，显著提升了系统的灵活性与稳定性：

*   **[MERGED] 核心修复：解除超时限制与修复转录配置** (PR #3967)
    *   **链接**: HKUDS/nanobot PR #3967
    *   **详情**: 这是一个关键性修复，解决了 Issue #3595 和 #3637。移除了 `exec` 工具 600 秒的硬编码超时上限，允许长时间运行任务（如下载）；同时修正了 Groq 语音转录的 `apiBase` 配置逻辑，解决了配置不透明导致的无效设置问题。
*   **[MERGED] 功能扩展：新增智谱 (Zhipu) 图像生成提供商** (PR #3971)
    *   **链接**: HKUDS/nanobot PR #3971
    *   **详情**: 扩展了多模态能力，集成了智谱 AI 的图像生成服务，为用户提供了除 OpenAI 外的新选择。
*   **[MERGED] 文档优化：更新小米 MiMo 提供商配置** (PR #3972)
    *   **链接**: HKUDS/nanobot PR #3972
    *   **详情**: 重构了文档，将自定义提供商配置改为使用内置的 `xiaomi_mimo` 提供商，降低了用户的配置门槛。
*   **[CLOSED] 记忆系统优化尝试** (PR #3952)
    *   **链接**: HKUDS/nanobot PR #3952
    *   **详情**: 该 PR 试图解决长期记忆中的信息冗余与重复问题，虽已关闭，但反映了社区对优化 Dream 系统持续关注。

## 4. 社区热点
今日讨论最活跃的话题集中在系统扩展性与记忆机制上：

*   **Hooks 机制需求强烈** (Issue #2182)
    *   **链接**: HKUDS/nanobot Issue #2182
    *   **分析**: 该 Issue 自 3 月提出至今仍活跃，用户希望在 Agent 生命周期（如 SessionStart, PostToolUse）中注入自定义脚本或 HTTP 请求。这反映了高级用户希望将 NanoBot 深度集成到自动化工作流中的强烈诉求。
*   **Dream 系统的“饥饿”与实时性问题** (Issue #3973)
    *   **链接**: HKUDS/nanobot Issue #3973
    *   **分析**: 用户 @chxuan 提出了深刻见解，指出当前 Dream 系统仅依赖 `history.jsonl` 导致无法实时学习新知识（"Hunger Problem"）。这触及了 Agent 长期记忆架构的核心痛点，可能成为下一阶段架构优化的重点方向。

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及模型兼容性与运行时错误：

*   **[严重] GPT 模型运行时 ID 冲突** (Issue #3633)
    *   **链接**: HKUDS/nanobot Issue #3633
    *   **状态**: Open，尚无修复 PR。
    *   **详情**: 使用 GPT-5.5 模型时出现 `Duplicate item found with id` 错误，导致 Agent 运行中断，严重影响用户体验。建议开发团队优先排查 Codex 调用逻辑中的 ID 生成机制。
*   **[已修复] Groq 语音转录配置无效** (Issue #3637)
    *   **链接**: HKUDS/nanobot Issue #3637
    *   **状态**: 已通过 PR #3967 修复。
*   **[已修复] Exec 工具超时限制** (Issue #3595)
    *   **链接**: HKUDS/nanobot Issue #3595
    *   **状态**: 已通过 PR #3967 修复，用户现在可以执行超过 10 分钟的脚本。

## 6. 功能请求与路线图信号
根据最新 Issue 与 PR，未来的版本可能会朝以下方向演进：

*   **精细化 Agent 控制**：PR #3975 提议为子智能体（subagent）单独配置采样温度，表明项目正朝着支持更复杂、多智能体协作架构的方向发展。
*   **语音交互增强**：PR #3970 新增 Azure Speech Service 支持，结合已修复的 Groq 配置，显示项目正大力强化语音转文字能力，适配 Telegram/WhatsApp 等即时通讯场景。
*   **UI/UX 改进**：PR #3977 提议在 WebUI 底部直接切换模型预设，PR #3968 增加 `/skill` 命令，这些改进显示项目正致力于降低普通用户的使用门槛。

## 7. 用户反馈摘要
*   **痛点**：用户反馈 `exec` 工具的硬编码超时限制（600s）严重阻碍了长耗时任务（如大文件下载），该问题今日已修复。
*   **场景**：WhatsApp 集成用户希望实现“真人接管”功能（Issue #2837），即在人工回复后 Bot 自动静默 12 小时，反映了 NanoBot 在客服/助理场景中被作为“无人值守中转站”的使用需求。
*   **评价**：社区对 NanoBot 的模块化设计表示认可，新增的 Provider（如 Zhipu, Azure Speech）得到了积极反馈，但记忆系统的重复冗余问题仍是用户主要的吐槽点。

## 8. 待处理积压
*   **长期未解决的功能请求** (Issue #2182)：Hooks 功能需求虽讨论热烈，但尚未有官方 PR 进展，建议维护者评估纳入路线图的可能性。
*   **WhatsApp 人机协作模式** (Issue #2837)：该需求针对特定即时通讯场景，目前仅停留在讨论阶段，尚无明确实现计划。
*   **核心记忆机制重构** (Issue #3047, #3973)：关于 Dream 系统上下文溢出和实时性差的问题持续发酵，建议开发团队统筹考虑记忆管理架构的重构。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-24)

## 1. 今日速览
Zeroclaw 项目今日维持高热度开发状态，社区反馈活跃，过去24小时内共有 42 条新开 Issue，显示出用户对 v0.8.0-beta-1 版本的测试力度加大。Issue 闭环速度稳定，共关闭 8 条，但 PR 合并率极低（50个更新中仅4个合并），大量功能性 PR（如 NEAR AI 集成、构建优化）处于 Pending 状态，暗示项目正处于功能冻结前的代码审查积压期。稳定性方面，Dashboard 崩溃和配置兼容性问题成为焦点，架构层面的重构讨论也在同步进行。

## 2. 版本发布
无新版本发布。当前关注点集中在 v0.8.0-beta-1 的稳定性修复与文档补充。

## 3. 项目进展
尽管今日仅有 4 个 PR 被合并，但通过关闭的 Issue 可以看出项目在维护层面的进展：
*   **内存泄漏修复落地**：Issue #6651 (Matrix channel 内存泄漏) 已关闭，解决了每次 `/admin/reload` 泄漏 ~1MB Pss 的问题，提升了长期运行的稳定性。
*   **文档与诊断优化**：关闭了 #6691 (RUST_LOG 文档更新) 和 #6694 (修复 gettext 目录同步噪音)，提升了开发者故障排查体验。
*   **PR 管道积压**：目前有 46 个 PR 待合并，涵盖关键功能如 **NEAR AI Cloud provider 支持** ([PR #6842](zeroclaw-labs/zeroclaw PR #6842))、**选择性频道构建优化** ([PR #6866](zeroclaw-labs/zeroclaw PR #6866)) 等，预计未来几天将迎来一波合并潮。

## 4. 社区热点
今日讨论热度最高的问题集中在配置丢失与核心组件崩溃：
*   **[Issue #6856](zeroclaw-labs/zeroclaw Issue #6856)**：Schema v3 中缺少 `show_tool_calls` 配置选项。用户从 v2 升级后发现无法查看工具调用详情，严重影响调试体验，评论数达 5 条，反映出用户对可观测性功能的高度依赖。
*   **[Issue #6127](zeroclaw-labs/zeroclaw Issue #6127)**：Gateway silent-fallback 加固讨论。涉及安全性与可用性权衡，社区正在跟进防止配置错误导致的无声失败。
*   **[PR #6866](zeroclaw-labs/zeroclaw PR #6866)**：关于支持选择性频道构建的功能。该 PR 允许用户按需编译特定频道模块，大幅减少二进制体积，引发了对编译系统架构的关注。

## 5. Bug 与稳定性
今日报告了多个影响核心流程的 Bug，严重程度较高：
*   **[Critical] Dashboard 崩溃**：[Issue #6862](zeroclaw-labs/zeroclaw Issue #6862) 指出 v0.8.0-beta-1 Gateway SPA fallback 错误地返回 index.html 给 /api/* 请求，导致前端 JSON 解析失败，Web UI 完全不可用。
*   **[High] Supervisor 崩溃循环**：[Issue #6724](zeroclaw-labs/zeroclaw Issue #6724) 显示，当用户通过 Dashboard 添加频道但未启用时，Channels orchestrator 会陷入每 2 秒一次的崩溃重启循环。
*   **[Medium] 配置失效**：[Issue #6877](zeroclaw-labs/zeroclaw Issue #6877) 报告 `runtime_profiles` 中的 `max_tool_iterations` 配置无效，必须设置在 Agent 级别才能生效，这导致了配置逻辑的混乱。
*   **[Medium] Web Fetch 截断**：[PR #6884](zeroclaw-labs/zeroclaw PR #6884) 修复了 `max_response_size=0` 时 Web Fetch 工具只读取 1 字节的问题，目前正在审查中。

## 6. 功能请求与路线图信号
社区正在推动架构升级与新特性扩展，部分已有 PR 支撑：
*   **架构解耦**：[Issue #6864](zeroclaw-labs/zeroclaw Issue #6864) 提议反转 `zeroclaw-channels` 与 `zeroclaw-runtime` 的依赖关系，将编排器移入 Runtime，旨在解决当前的层级倒置问题。
*   **TUI 交互增强**：[Issue #6824](zeroclaw-labs/zeroclaw Issue #6824) 和 [Issue #6820](zeroclaw-labs/zeroclaw Issue #6820) 正在推进 TUI Agent Chat 和 ACP 协议扩展，旨在提供终端侧的 Diff 展示和文件修改确认能力。
*   **安全沙箱**：[Issue #6729](zeroclaw-labs/zeroclaw Issue #6729) 提出增加 Agent 权限标识，限制 Agent 访问共享目录或逃逸工作区，这将是多租户场景下的重要安全特性。

## 7. 用户反馈摘要
*   **升级阻塞**：多位用户反馈 Schema v3 的变更（如 #6856）导致原有工作流中断，缺乏向下兼容或迁移指南。
*   **配置门槛高**：用户在配置 Ollama 私有云 ([Issue #6180](zeroclaw-labs/zeroclaw Issue #6180)) 和 SMTP 空凭证 ([Issue #6881](zeroclaw-labs/zeroclaw Issue #6881)) 时遇到阻碍，暴露出配置验证逻辑不够健壮。
*   **安装体验**：用户指出 Docker Rootless 环境下的 YAML 缩进问题 ([Issue #6760](zeroclaw-labs/zeroclaw Issue #6760))，希望有开箱即用的配置范例。

## 8. 待处理积压
*   **历史代码恢复**：[Issue #6074](zeroclaw-labs/zeroclaw Issue #6074) 追踪 153 个在批量回滚中丢失的提交，目前状态为 "in-progress"，需尽快完成审计以防特性遗漏。
*   **长期未决安全 Issue**：[Issue #6714](zeroclaw-labs/zeroclaw Issue #6714) 关于 Skill 审计中 Markdown 链接误杀的问题，目前被标记为 "blocked"，等待维护者审查，影响了部分官方插件的正常使用。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-24)

## 1. 今日速览
Hermes Agent 项目今日保持高活跃度，社区互动频繁，共记录 **50 条 Issues 更新** 与 **50 条 PR 更新**。虽然无新版本发布，但开发重心明显向**安全性增强**（沙箱隔离、密钥管理）与**多模型提供商兼容性**（xAI OAuth, Claude CLI）倾斜。今日共有 17 个 PR 被合并或关闭，主要修复了 TUI 图像处理、DingTalk 卡片流式传输等关键 Bug。然而，AuthProvider 相关的高优先级问题（如 Claude Max 订阅认证失败）仍是用户痛点，亟需官方响应。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 17 个 PR 被合并或关闭，主要推进了以下修复与功能：

*   **关键 Bug 修复**：
    *   **[Merged] PR #31220**: 修复了 TUI 在 Codex app-server 模式下处理图像附件的问题，确保图像能正确通过 text/vision 路径处理。
    *   **[Merged] PR #31286**: 修复了 DingTalk 平台在网关重启时，未关闭的流式卡片永久卡死在“加载中”状态的问题。
    *   **[Merged] PR #30878**: 上述 DingTalk 修复的替代提交，确保断开连接前正确清理流式卡片状态。

*   **安全与架构改进 (Open PRs)**：
    *   **[Open] PR #31290**: 引入跨 Profile 文件写入的软性防护机制，防止 Agent 意外修改其他 Profile 的技能或记忆文件，提升多租户安全性。
    *   **[Open] PR #30179**: 提出 "Iron-proxy" 沙箱流出流量防火墙，旨在为远程终端沙箱提供凭证注入与网络隔离，防止 API Key 泄露。

*   **功能增强 (Open PRs)**：
    *   **[Open] PR #31291**: 针对 Issue #31269 提出的 Bridge-worker 丢失 Assistant 回复的严重 Bug，提交了修复方案，确保状态数据库正确写入。
    *   **[Open] PR #31280**: 新增 Cursor Agent 工具集，支持流式解析 Cursor Agent 的输出并在 Hermes 中展示进度。

## 4. 社区热点
今日社区讨论主要集中在**模型提供商的认证与付费订阅兼容性**上：

*   **[Issue #26847](https://github.com/NousResearch/hermes-agent/issues/26847)**: **xAI OAuth 返回 403 错误**
    *   **热度**：21 条评论
    *   **分析**：用户反馈持有标准 SuperGrok 订阅（$30/月）无法通过 `xai-oauth` 登录，后端强制要求 Heavy 级别订阅，与文档描述不符。这反映了用户对“Bring Your Own Key/Subscription”模式的强烈需求与当前实现的差异。

*   **[Issue #29125](https://github.com/NousResearch/hermes-agent/issues/29125)**: **Hermes 无法通过 Claude CLI 工作**
    *   **热度**：20 条评论
    *   **分析**：用户尝试将 Hermes 作为后端通过 Claude CLI 调用，但在 Token 插入环节遇到阻碍。表明用户希望 Hermes 能更灵活地接入现有的 AI 工作流生态。

*   **[Issue #15080](https://github.com/NousResearch/hermes-agent/issues/15080)**: **Claude Max 订阅请求被拒 (HTTP 400)**
    *   **热度**：15 条评论
    *   **分析**：P1 级 Bug，用户使用有效的 Claude Max OAuth Token 调用原生 Anthropic 接口被拒。此问题自 4 月底持续至今，是核心付费用户的痛点。

*   **[Issue #25267](https://github.com/NousResearch/hermes-agent/issues/25267)**: **请求支持 Claude Agent SDK 订阅模式**
    *   **热度**：7 点赞
    *   **分析**：用户希望像使用 SuperGrok OAuth 一样，直接利用现有的 Claude 订阅额度，而非额外支付 API 费用。这是目前最高赞的功能请求之一。

## 5. Bug 与稳定性
今日报告了若干影响核心功能的 Bug，部分已有修复方案：

*   **P1 - 数据丢失 (已有 Fix PR)**:
    *   **[Issue #31269](https://github.com/NousResearch/hermes-agent/issues/31269)**: Bridge-worker 静默丢失 Assistant 回复，导致 `state.db` 中缺失对话记录。
    *   *修复状态*: **[PR #31291](https://github.com/NousResearch/hermes-agent/pull/31291)** 已提交修复。

*   **P1 - 认证阻断 (长期未决)**:
    *   **[Issue #15080](https://github.com/NousResearch/hermes-agent/issues/15080)**: Claude Max OAuth 认证无效，请求返回 HTTP 400。此问题长期未解决，严重影响 Anthropic 渠道用户体验。

*   **P2 - 死锁/卡死**:
    *   **[Issue #29966](https://github.com/NousResearch/hermes-agent/issues/29966)**: 并发执行 `ddgs` 网络搜索时触发 `futex_do_wait` 死锁，导致程序完全无响应（Ctrl-C 无效），只能 Kill 进程。

*   **P2 - 功能异常**:
    *   **[Issue #18529](https://github.com/NousResearch/hermes-agent/issues/18529)**: 标题生成器未正确过滤 `<thinking>` 标签，导致会话标题泄露模型推理过程，影响隐私与美观。
    *   **[Issue #31246](https://github.com/NousResearch/hermes-agent/issues/31246)**: MCP 服务器配置错误（如缺少 SDK）无任何报错，导致调试极其困难。

## 6. 功能请求与路线图信号
社区正推动 Hermes Agent 向更安全、更集成的方向发展：

*   **安全机制**: 用户与开发者均表现出对**沙箱安全**的高度关注。PR #30179（Iron-proxy）和 Issue #16462（MCP 工具首次调用审批）表明，随着 Agent 能力增强，权限控制与凭证隔离将成为下一版本的核心特性。
*   **订阅集成**: Issue #25267 和 Issue #26847 显示，支持**主流模型提供商的订阅直连（OAuth）**已成为刚需，项目可能需要重构 Auth Provider 模块以适应不同订阅等级的限制。
*   **多智能体协作**: Issue #25176 提出了“多智能体通信信道”的需求，表明用户尝试使用 Hermes 构建复杂的生产管线，而非仅作为单一助手使用。

## 7. 用户反馈摘要
*   **痛点**：**OAuth 认证失败**是近期最集中的负面反馈，特别是针对 xAI 和 Anthropic 的付费订阅用户。用户抱怨“付了订阅费却无法通过 Hermes 使用”。
*   **痛点**：**静默失败**（如 MCP 配置错误无日志、Bridge 模式丢消息）增加了调试难度，用户呼吁增强错误日志的可视化。
*   **认可**：用户对 Hermes 的多平台适配（如 DingTalk, Telegram）和 TUI 体验表示认可，积极反馈 Warp 终端的快捷键适配（PR #31285）。

## 8. 待处理积压
*   **[Issue #15080](https://github.com/NousResearch/hermes-agent/issues/15080)**: Claude Max OAuth 认证失败 (P1)，已活跃 1 个月，至今未有关键进展或修复 PR，建议维护者优先介入。
*   **[Issue #16462](https://github.com/NousResearch/hermes-agent/issues/16462)**: MCP 工具首次调用安全审批 (P3)，该安全特性请求已停滞近 1 个月，随着 MCP 生态的扩大，建议纳入规划。
*   **[Issue #11201](https://github.com/NousResearch/hermes-agent/issues/11202)**: 标题生成逻辑在第二轮对话仍错误触发，属于逻辑一致性缺陷，需代码层修复。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-24)

## 1. 今日速览
PicoClaw 项目今日保持**高活跃度与健康发展态势**。过去 24 小时内，项目成功发布了 `v0.2.9-nightly` 版本，合并了 4 个关键 PR，解决了包括核心 Assembler 逻辑在内的 4 个 Issues。开发重心明显向**提升模型兼容性（DeepSeek 支持）**与**修复 Channel 稳定性（Discord/WhatsApp）**倾斜。整体来看，项目迭代速度较快，社区对 nightly 版本的反馈周期正在缩短。

## 2. 版本发布
- **[nightly] Nightly Build (v0.2.9-nightly.20260524.d499cbec)**
  - **更新说明**：自动构建版本，包含了今日合并的 DeepSeek 思维链映射、Seahorse 预算限制修复等重要更新。
  - **注意事项**：官方提示此为自动构建版本，可能存在不稳定性，建议测试环境优先验证。
  - **变更日志**：[查看完整变更](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. 项目进展
今日项目整体取得实质性进展，主要修复了影响用户体验的关键 Bug 并增强了 AI 模型支持：
- **核心逻辑修复**：合并 PR #2895，修复了 Seahorse Assembler 中 "FreshTail" 消息绕过预算限制的严重 Bug，解决了因上下文溢出导致的 400 错误。
- **模型能力增强**：合并 PR #2928，实现了 DeepSeek 模型 "thinking_level" 字段的正确映射，完善了对 DeepSeek 推理模式的兼容性。
- **Channel 稳定性**：合并 PR #2931，修复了 Discord 频道无法下载图片附件导致视觉管道失效的问题；合并 PR #2835，修复了 Agent 在发送中间消息后抑制最终回复的逻辑缺陷。

## 4. 社区热点
今日社区关注点集中在**功能需求的实现与否**及**配置困惑**：
- **Issue #2421 [CLOSED]**: 关于 "添加 Email 作为原生渠道" 的功能请求。该 Issue 历时一个多月最终关闭，获得 2 个赞。虽然未在今日 PR 列表中看到直接实现，但关闭状态可能意味着已被纳入其他实现方式或暂不计划支持，引发部分用户关注。
- **Issue #2742 [OPEN]**: 关于 v0.2.8 版本网关启动时无 Channel 的问题。该 Bug 报告评论数达 5 条，反映出用户在配置 Telegram 等渠道时存在困惑，可能与配置文件解析逻辑变更有关。

## 5. Bug 与稳定性
今日修复与新增的 Bug 情况如下：

- **[严重 - 已修复]** **Seahorse Assembler 预算溢出 (Issue #2894)**：
  - 现象：`FreshTailCount` 消息无视预算限制，导致请求超出模型上下文窗口。
  - 修复：PR #2895 已合并，重新构建了路径并强制执行预算检查。

- **[中等 - 已修复]** **Discord 视觉管道失效 (PR #2931)**：
  - 现象：Discord 图片附件作为原始 URL 传递，导致后续处理失败。
  - 修复：PR #2931 已合并，现在会正确下载非音频附件并转换为 base64。

- **[中等 - 待处理]** **Android 存储权限错误 (Issue #2880)**：
  - 现象：用户在 Android 10 点击 "Start Service" 时报权限错误。
  - 状态：目前仍 Open，需注意用户使用的是 v0.1.3 版本，远落后于当前 nightly，建议引导用户升级。

- **[低 - 待处理]** **网关启动无渠道 (Issue #2742)**：
  - 现象：配置文件中启用了 Telegram 但网关启动后无渠道。
  - 状态：Stale，需要维护者确认是否为配置格式变更导致的回归。

## 6. 功能请求与路线图信号
通过今日 PR 与 Issue 动态，捕捉到以下路线图信号：
- **DeepSeek 推理支持已就绪**：Issue #2903 的请求在 Issue 关闭后迅速通过 PR #2928 实现，显示团队对主流 AI 模型特性的响应速度极快，DeepSeek 的深度思考模式将是下一版本的亮点。
- **WhatsApp 原生模式优化**：PR #2934 正在尝试修复 WhatsApp 的 `use_native` 标志检测逻辑，意味着项目正在加强对非桥接模式的原生支持。
- **前端体验优化**：PR #2933 提议增加代码块行号和换行切换，显示前端交互细节正在打磨中。
- **国际化拓展**：PR #2932 新增捷克语支持，表明项目正在积极扩展非英语社区。

## 7. 用户反馈摘要
- **企业级场景需求**：从 Issue #2421 可见，部分用户在保守或企业环境中强烈需要 Email 作为通信渠道。
- **配置复杂度痛点**：Issue #2742 显示，用户在升级版本后（v0.2.8）遇到了配置不生效的问题，文档或默认配置校验可能需要加强。
- **模型控制粒度**：用户（Issue #2903）希望能通过 PicoClaw 统一控制 DeepSeek 的推理深度（thinking_level），而非手动调整底层参数，这反映了用户对 AI 控制抽象层的高级需求。

## 8. 待处理积压
- **PR #2883 [OPEN]**: **支持微信多账号配置**。该 PR 自 5 月 16 日创建至今处于 Stale 状态，涉及前端与后端配置解析的重构，是一个高价值功能，建议维护者尽早 Review 或反馈修改意见。
- **Issue #2880 [OPEN]**: Android 权限问题，需确认是否为旧版本遗留问题。
- **PR #2932/2933/2934**: 三个较新的功能 PR（捷克语、前端优化、WhatsApp 修复）等待合并，建议优先处理 #2934 的 Bug 修复类 PR。

---
*分析师结语：PicoClaw 今日在解决核心上下文溢出问题上迈出了关键一步，同时快速跟进了 DeepSeek 模型的新特性。建议关注 Android 端版本碎片化带来的用户支持压力，并尽快处理积压的微信多账号 PR 以满足国内用户需求。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-24)

## 1. 今日速览
NanoClaw 项目今日表现出较高的维护活跃度，核心开发团队集中处理了积压的 Bug 修复与功能优化。过去 24 小时内共有 **11 个 PR 被合并**，解决了包括 WhatsApp 路由失败、容器数据库死锁在内的多个关键问题。虽然新增了 1 个阻断性的构建问题，但整体来看，项目在适配器稳定性和容器运行时的健壮性上取得了实质性进展。目前仍有 4 个功能性 PR 处于待合并状态，等待最终审查。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日共有 11 个 PR 合并入主分支，显著提升了系统的稳定性与功能性：

*   **WhatsApp 适配器修复**：合并了 PR [#2554](https://github.com/nanocoai/nanoclaw/pull/2554)，修复了 WhatsApp LID 到电话号码 JID 的映射持久化问题（关联 Issue #2194）及平台 ID 前缀导致的静默路由失败（关联 Issue #2193），解决了重启后消息丢失的严重隐患。
*   **容器运行时健壮性**：PR [#2597](https://github.com/nanocoai/nanoclaw/pull/2597) 修复了 Docker 环境下 `inbound.db` 损坏导致容器陷入死循环的问题，现将在检测到持续错误时主动退出，避免资源空耗。
*   **配置与内存管理**：PR [#2598](https://github.com/nanocoai/nanoclaw/pull/2598) 修复了 `CLAUDE.local.md` 未被加载的问题，确保群组级内存配置生效；PR [#2595](https://github.com/nanocoai/nanoclaw/pull/2595) 修正了日志轮换配置逻辑，允许通过设置 `0` 来禁用轮换。
*   **新功能集成**：PR [#2600](https://github.com/nanocoai/nanoclaw/pull/2600) 引入了轮播 MCP 工具，PR [#2601](https://github.com/nanocoai/nanoclaw/pull/2601) 优化了用户技能作为片段的加载方式。

## 4. 社区热点
今日社区讨论主要围绕以下议题展开：

*   **Issue [#2194](https://github.com/nanocoai/nanoclaw/issues/2194) [CLOSED]**：关于 WhatsApp LID 映射重启后丢失的问题。该问题导致了生产环境的路由失败，引发了 2 条评论讨论，目前已通过修复确认解决。
*   **PR [#1994](https://github.com/nanocoai/nanoclaw/pull/1994) [OPEN]**：关于支持自定义 OpenAI 兼容端点（如 LiteLLM、vLLM）的 PR。虽然尚未合并，但因其涉及本地模型部署和摆脱官方订阅后端的限制，持续受到关注。

## 5. Bug 与稳定性
今日报告并处理了多个关键 Bug，按严重程度排列如下：

*   **Critical (阻断构建)**：
    *   **Issue [#2603](https://github.com/nanocoai/nanoclaw/issues/2603)**：`skill/compact` 分支合并到 v2 时出现构建失败，因引用了 v1 独有的符号导致编译错误。**状态：Open，尚无修复 PR。**
*   **High (已修复)**：
    *   **Issue [#2194](https://github.com/nanocoai/nanoclaw/issues/2194) & [#2193](https://github.com/nanocoai/nanoclaw/issues/2193)**：WhatsApp 适配器路由失败与 ID 映射错误。**状态：已通过 PR [#2554](https://github.com/nanocoai/nanoclaw/pull/2554) 修复。**
    *   **PR [#2597](https://github.com/nanocoai/nanoclaw/pull/2597)**：修复了数据库损坏导致的容器无限日志循环。
*   **Medium (已修复)**：
    *   **Issue [#2185](https://github.com/nanocoai/nanoclaw/issues/2185)**：群组内存文件 `CLAUDE.local.md` 未被 SDK 加载。**状态：已通过 PR [#2598](https://github.com/nanocoai/nanoclaw/pull/2598) 修复。**

## 6. 功能请求与路线图信号
从待处理的 PR 和 Issue 中识别出以下路线图信号：

*   **自定义模型后端支持**：PR [#1994](https://github.com/nanocoai/nanoclaw/pull/1994) 提出支持群组级自定义 OpenAI 兼容端点。这表明用户对私有化部署或使用第三方代理的需求强烈，建议优先审查。
*   **安全性增强**：PR [#2545](https://github.com/nanocoai/nanoclaw/pull/2545) 提议使用 CSPRNG 替换 `Math.random()` 生成审批卡 ID，增强了防篡改能力，符合企业级安全标准。
*   **斜杠命令交互优化**：PR [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) 试图将未知斜杠命令作为普通聊天处理，这将改善 Agent SDK 的容错性与交互体验。

## 7. 用户反馈摘要
*   **痛点：生产环境路由稳定性**：用户 @mshirel 反馈的 WhatsApp 适配器问题表明，在复杂网络环境下的 ID 映射持久化是当前部署的痛点。
*   **痛点：本地模型集成**：PR #1994 的提出反映了部分用户希望绕过 ChatGPT 订阅后端，转向更经济的本地大模型方案的需求。
*   **满意度**：针对 PR #2597 的修复，解决了 Docker Desktop macOS 环境下的死锁问题，提升了运维体验。

## 8. 待处理积压
以下重要 Issue/PR 长期未更新或需及时响应：

*   **Issue [#2603](https://github.com/nanocoai/nanoclaw/issues/2603)**：今日新开的构建阻断问题，影响 v2 版本的合并流程，需立即处理。
*   **PR [#2545](https://github.com/nanocoai/nanoclaw/pull/2545)**：安全性修复 PR，已开启 5 天，涉及审批流核心逻辑，建议维护者尽快 Review 合并。
*   **PR [#1994](https://github.com/nanocoai/nanoclaw/pull/1994)**：功能请求 PR，已开启近一个月，涉及架构调整，需确认是否纳入近期规划。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-24)

## 1. 今日速览
NullClaw 项目在过去 24 小时内展现出极高的开发活跃度，主要集中在修复核心功能缺陷与提升系统安全性。尽管今日无新版本发布且无 Issue 或 PR 被关闭，但项目新增了 7 个待合并 PR，另有 3 个关键 PR 更新了活动状态。贡献者重点解决了 Telegram 通道的消息上下文丢失、全局内存可见性以及生产环境下的子智能体结果投递问题。目前的代码库处于功能密集提交阶段，尚未进入合并周期。

## 2. 版本发布
无。

## 3. 项目进展
今日无合并或关闭的 PR，但有大量新功能与修复提交待审查，标志着项目正在解决深层次的技术债务：

*   **Telegram 通道增强**：提交了 [PR #930](https://github.com/nullclaw/nullclaw/pull/930) 以支持在入站上下文中包含 `reply_to_message` 文本，解决了机器人无法理解回复上下文的问题；[PR #928](https://github.com/nullclaw/nullclaw/pull/928) 修复了生产环境中子智能体结果在轮询模式下无声消失的严重 Bug。
*   **配置与内存修复**：[PR #924](https://github.com/nullclaw/nullclaw/pull/924) 修复了配置白名单中数字 ID 被错误过滤的问题；[PR #929](https://github.com/nullclaw/nullclaw/pull/929) 修正了 `memory_list` 无法检索全局内存条目的逻辑缺陷。
*   **底层架构重构**：长期运行的 [PR #881](https://github.com/nullclaw/nullclaw/pull/881) 持续更新，旨在移除运行时对 `curl` 子进程的依赖，转而使用原生 `std.http` 包装器，这将显著提升运行时效率。

## 4. 社区热点
由于今日无新增 Issue 且 PR 评论数据暂缺，热点主要集中在提交代码的变更范围上：

*   **[PR #881 - refactor(http): remove runtime curl subprocesses](https://github.com/nullclaw/nullclaw/pull/881)**：这是一个大规模的重构 PR，涉及 providers, channels, gateway 等核心模块。该改动将彻底改变 HTTP 处理底层逻辑，是项目架构演进的关键信号。
*   **[PR #907 - Security harden webhooks, HTTP secrets, and cron shell jobs](https://github.com/nullclaw/nullclaw/pull/907)**：该 PR 对 Webhooks 和 Cron 作业进行了安全加固，移除了凭证相关的 curl 用法并强制要求 Telegram/Discord 等通道配置信任列表。这反映了项目正在向企业级安全标准靠拢，可能影响现有用户的部署配置。

## 5. Bug 与稳定性
今日报告的 Bug 均已有对应的修复 PR，按严重程度排序如下：

*   **严重 - 子智能体结果丢失**：
    *   问题：Telegram 轮询模式下，子智能体运行完成后结果丢失，用户收不到反馈。
    *   状态：已提交修复 [PR #928](https://github.com/nullclaw/nullclaw/pull/928)。
*   **中等 - 内存与配置逻辑缺陷**：
    *   问题：`memory_list` 无法返回全局条目；Telegram 数字 ID 在白名单中被忽略。
    *   状态：已提交修复 [PR #929](https://github.com/nullclaw/nullclaw/pull/929) 和 [PR #924](https://github.com/nullclaw/nullclaw/pull/924)。
*   **轻微 - 路径安全与测试干扰**：
    *   问题：macOS 特定工作区路径被错误拦截；测试环境 API Key 污染导致测试失败。
    *   状态：已提交修复 [PR #925](https://github.com/nullclaw/nullclaw/pull/925) 和 [PR #926](https://github.com/nullclaw/nullclaw/pull/926)。

## 6. 功能请求与路线图信号
*   **上下文感知增强**：[PR #930](https://github.com/nullclaw/nullclaw/pull/930) 表明项目正在增强对话理解能力，不仅是处理消息文本，还包括处理引用回复，这是提升 AI 智能体交互体验的重要一步。
*   **安全合规化**：[PR #907](https://github.com/nullclaw/nullclaw/pull/907) 暗示项目未来将默认拒绝空的 `allow_from` 列表，强制用户显式配置信任源。这是一个破坏性变更信号，建议在下一版本发布前关注迁移指南。

## 7. 用户反馈摘要
虽然今日无新 Issue，但从 PR 描述中可提取以下关键反馈：
*   **生产环境痛点**：[PR #928](https://github.com/nullclaw/nullclaw/pull/928) 摘要提到 "Several reporters have hit this on production Telegram bots"，说明实际部署中子智能体结果投递失败是高频痛点。
*   **开发者体验**：[PR #924](https://github.com/nullclaw/nullclaw/pull/924) 指出用户习惯使用数字 ID（因为 Telegram API 返回整数），但之前被系统静默丢弃，这曾导致配置困扰。

## 8. 待处理积压
以下重要 PR 长期处于 Open 状态，建议维护者优先关注：

*   **[PR #881 - refactor(http): remove runtime curl subprocesses](https://github.com/nullclaw/nullclaw/pull/881)**：自 2026-05-01 开启，涉及核心 HTTP 栈替换，积压时间较长，需要重点关注其对各 Provider 兼容性的影响。
*   **[PR #891 - fix(providers): preserve curl probe transport failures](https://github.com/nullclaw/nullclaw/pull/891)**：自 2026-05-05 开启，关联 PR #881 的重构工作，涉及错误处理的细节保留，需尽快合并以确保诊断信息的准确性。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-24)

## 1. 今日速览
IronClaw 项目今日展现出极高的架构演进活跃度，核心开发重点集中在 **"Reborn" 架构重构** 与 **高安全性的金融执行层构建**。过去 24 小时内共有 50 条 PR 更新，其中 12 条已合并/关闭，显示出团队正在高效清理技术债务并推进新功能落地。值得注意的是，项目正在进行大规模的 GSuite 集成重构，并密集提交了 "Attested Signing"（经认证签名）安全底座的系列 PR，显示出项目正从“功能可用”向“生产级安全”跨越。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目在架构治理和功能底座建设上取得显著进展：

*   **GSuite 集成架构重构**：关闭了旧版的 Google 扩展阶段 PRs（#3893, #3894, #3895, #3896, #3897, #3898），并根据 Issue #3969 的规划，迅速开启了新的 Reborn GSuite 技术栈（PR #3970, #3971, #3972, #3973）。这表明项目正在将 Google Workspace 集成迁移至更现代、解耦的 `reborn-integration` 架构中。
*   **安全签名底座构建**：提交了 5 个关于 "Attested Signing" 的系列 PRs（#3963, #3964, #3965, #3966, #3974）。这一系列更新引入了不可伪造的用户授权通道、一次性授权存储和多链签名广播功能，旨在解决 Issue #3564 提出的架构安全隐患。
*   **Hooks 框架生产化**：PR #3938 将 Hook 框架激活逻辑合并入生产环境（默认关闭），并配合 PR #3933 引入了 Postgres 持久化后端，为后续的第三方插件生态奠定了基础。
*   **认证流程优化**：PR #3888 已关闭，成功将认证续传流程路由至产品工作流中，提升了认证过程的连贯性。

## 4. 社区热点
今日讨论最活跃的议题集中在**资产安全与交易流程**：

*   **[#1739 [OPEN] Async transaction approval system with WalletConnect](nearai/ironclaw Issue #1739)**
    *   **热度**：评论 7 条
    *   **分析**：该 Issue 提出了一种“两阶段异步交易”模式，旨在让 AI 代理发起交易的同时，将人为审批保留在安全的独立通道中。这反映了高净值用户对 AI 自主金融操作的典型担忧——即“AI 可以提议，但人必须能在 AI 看不到的地方批准”。
*   **[#3025 [OPEN] Support for trezor or metamask in ironclaw](nearai/ironclaw Issue #3025)**
    *   **热度**：评论 1 条
    *   **分析**：用户反馈当前的热钱包连接器列表受限且多不开源，强烈要求支持 MetaMask 或 Trezor。结合今日提交的 PR #3974（注入钱包提供商），项目方似乎正在响应这一需求，试图打通浏览器钱包与代理之间的安全连接。

## 5. Bug 与稳定性
今日报告了关键的安装与测试问题，需维护者关注：

*   **严重 [ installer ]**: **[#3945 [OPEN] Installer script broken for macOS/Linux since 0.26](nearai/ironclaw Issue #3945)**
    *   **详情**：安装脚本中的 `select_archive_for_arch()` 和 `download_binary_and_run_installer()` 函数在过去一个月内损坏，导致新用户无法在 Unix 系统上部署。目前尚无修复 PR。
*   **中等 [ CI/CD ]**: **[#3447 [OPEN] Nightly E2E failed](nearai/ironclaw Issue #3447)**
    *   **详情**：例行端到端测试失败，涉及功能特性测试集。
*   **轻微 [ Hooks ]**: **[#3962 [OPEN] Composition root doesn't wire hooked-prompt deps](nearai/ironclaw Issue #3962)**
    *   **详情**：在启用 `HOOKS_ENABLED` 测试时发现的依赖注入遗漏问题，已在测试阶段暴露，尚未影响生产环境。

## 6. 功能请求与路线图信号
根据新开 Issues 与 PR 动向，识别出以下路线图信号：

*   **API 标准化**：Issue #3953 提议为 Gateway 和 WebUI 引入 OpenAPI/AsyncAPI 规范。这预示着项目将加强对外部开发者的接口友好度，可能在未来版本中提供更完善的 SDK。
*   **文档语义化重构**：Issue #3954 建议重命名 `CLAUDE.md` 以去品牌化。这释放出项目希望摆脱单一模型依赖，转型为通用型 AI 智能体框架的信号。
*   **金融级安全架构**：Issue #1712（安全金融执行层）与今日密集提交的 Attested Signing PRs 高度契合，预计下一阶段版本将重点推出“安全金库”或“托管签名”功能。

## 7. 用户反馈摘要
*   **安全焦虑**：用户对 AI 持有私钥高度敏感（Issue #3564, #1739），希望看到“主机密钥”以外的解决方案，倾向于硬件钱包或独立审批通道。
*   **接入门槛**：安装脚本损坏（Issue #3945）是一个严重的劝退因素，且问题已存在一个月，需紧急修复。
*   **扩展性需求**：社区对 IronHub 的集成抱有期待（PR #3737），希望能在运行时动态安装工具，而非仅限于构建时。

## 8. 待处理积压
以下重要 Issue 长期未得到 Close 处理，建议关注：

*   **[#1712 [OPEN] Architect secure financial execution layer](nearai/ironclaw Issue #1712)**：创建于 3 月，涉及核心资金安全架构，虽然已有 PR 覆盖部分功能，但该总领性 Issue 仍需明确的状态更新。
*   **[#1739 [OPEN] Async transaction approval system](nearai/ironclaw Issue #1739)**：创建于 3 月，涉及关键的 WalletConnect 审批流程，今日仍有活跃讨论，建议与当前的 Signing PRs 进行关联对齐。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-24)

## 1. 今日速览
LobsterAI 项目今日整体呈现**“讨论活跃、开发停滞”**的态势。过去 24 小时内，社区产生了 3 条高质量的深度 Issue 讨论，聚焦于 AI 智能体的记忆系统架构与竞品分析，显示出核心贡献者对底层架构的深度思考。然而，代码层面推进缓慢，无新版本发布，无 PR 合并，且有 2 个功能增强型 PR 处于 Stale（停滞）状态，项目维护者的响应速度值得关注。

## 2. 版本发布
无。

## 3. 项目进展
今日无合并或关闭的 PR，项目代码库无实质性向前推进。值得注意的是，两个原定于 4 月开启的功能 PR 处于停滞状态，可能面临被关闭风险。

## 4. 社区热点
今日讨论热点集中于系统架构与竞品对比，主要由贡献者 @woxinsj 发起：

*   **[Issue #2041](https://github.com/netease-youdao/LobsterAI/issues/2041) 最大的瓶颈不是进化算法，而是记忆系统**
    该 Issue 深度对比了理想 AI Agent 形态与 LobsterAI 现状，指出当前 `skill-self-evolver` 虽然具备轨迹记录能力，但在声明式记忆与结构化记忆方面仍存在差距。这反映了社区对 Agent “长周期跨场景学习能力”的强烈诉求。
*   **[Issue #2040](https://github.com/netease-youdao/LobsterAI/issues/2040) OpenClaw 的五大薄弱点**
    通过分析竞品 OpenClaw，作者指出了行业通病：记忆缺失导致无法跨任务积累、安全漏洞频发（63天138个漏洞）、Token 成本失控及部署繁琐。这为 LobsterAI 的差异化竞争提供了明确方向，暗示项目未来可能在安全性、成本控制与轻量化部署上发力。

## 5. Bug 与稳定性
今日报告了 1 个功能性 Bug，影响特定配置的持久化：

*   **🔴 中等严重度：Dreaming 开关配置无法持久化**
    *   **现象**：Web UI 中的 `/dreaming on` 开关存在 Bug，配置写入路径不被 memory-core 识别，导致 Gateway 重启后配置丢失。
    *   **根因**：OpenClaw upstream 的 Bug，需修改 memory-core 的 schema 以允许 `dreaming` 属性。
    *   **状态**：暂无修复 PR，作者在 [Issue #2039](https://github.com/netease-youdao/LobsterAI/issues/2039) 中提供了临时的脚本修复思路。

## 6. 功能请求与路线图信号
结合今日 Issues 与历史 PR，项目路线图呈现出以下信号：
1.  **数据导出与可迁移性**：用户对数据掌控权有需求，[PR #1529](https://github.com/netease-youdao/LobsterAI/pull/1529) 提出的批量导出 JSON 功能虽处于 Stale 状态，但符合用户对数据备份和迁移的潜在需求。
2.  **多 Agent 协作管理**：[PR #1530](https://github.com/netease-youdao/LobsterAI/pull/1530) 关于定时任务归属 Agent 的选择功能，呼应了 Issue 中提到的“跨场景任务”管理需求，表明项目正试图解决多 Agent 并行时的混乱问题。
3.  **架构级记忆增强**：基于 Issue #2041 的讨论，下一阶段重点可能会转向优化 `.learnings/` 与 `memory/` 的结构化存储能力。

## 7. 用户反馈摘要
*   **痛点**：现有系统的记忆机制较为初级，难以支撑长周期的自主进化；Gateway 重启后配置易丢失，影响用户体验连贯性。
*   **认可点**：社区认可 `skill-self-evolver` 在历史会话分析方面的尝试，认为其初步具备了理想形态的雏形。
*   **安全担忧**：用户对开源项目中潜藏的恶意 Skill 和安全漏洞表示担忧，希望项目方能提供更安全的默认配置。

## 8. 待处理积压
以下 PR 长期未获响应（Created: 2026-04-07, Status: Stale），建议维护者尽快处理或给予明确反馈：

1.  **[PR #1529](https://github.com/netease-youdao/LobsterAI/pull/1529) 批量模式新增导出功能**
    *   功能：支持选中会话导出为 JSON。
    *   状态：Stale，等待 Review。
2.  **[PR #1530](https://github.com/netease-youdao/LobsterAI/pull/1530) 多Agent状态下支持新建任务选择归属 Agent**
    *   功能：解决多 Agent 环境下定时任务归属混乱的问题。
    *   状态：Stale，等待 Review。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-24)

## 1. 今日速览
Moltis 项目今日保持高活跃度，开发重心主要集中在修复近期引入的回归问题与架构优化。过去24小时内，项目成功合并了 3 个修复 PR，解决了包括 Hooks 注册失效、Vault 初始化逻辑错误及浅色模式语法高亮在内的关键问题。与此同时，社区反馈积极，新增 6 条 Bug 报告，涉及安全性（环境变量泄露）、UI 交互及模型配置等多个方面。值得注意的是，核心开发者 @penso 提交了一项重大架构改进 PR，旨在将 Agent 定义为能力边界，这可能预示着项目权限控制与多租户能力的重大升级。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 3 个 PR 成功合并，1 个功能性 PR 待审核，显著提升了系统稳定性与架构清晰度：

*   **[MERGED] 修复 Hooks 运行时注册问题** ([PR #1048](moltis-org/moltis PR #1048))
    修复了配置文件中声明的 Hooks 虽然通过校验但未在运行时注册的严重逻辑漏洞，确保了用户定义的扩展逻辑能够正常触发。
*   **[MERGED] 修复 Vault 初始化逻辑** ([PR #1050](moltis-org/moltis PR #1050))
    解决了已有密码认证环境下 Vault 无法初始化的问题，优化了加密设置的用户引导流程。
*   **[MERGED] 恢复浅色模式代码高亮** ([PR #1047](moltis-org/moltis PR #1047))
    修复了浅色主题下代码块语法高亮失效的视觉回归问题，并增加了 Playwright 自动化测试以防复发。
*   **[OPEN] 架构重构：Agent 作为能力边界** ([PR #1049](moltis-org/moltis PR #1049))
    核心特性开发，提议将 Agent 设定为控制模型、MCP 服务、沙箱策略和技能的核心边界，允许针对不同渠道（如儿童模式/成人模式）分配不同权限的 Agent。

## 4. 社区热点
今日社区讨论焦点集中在安全性配置与 UI 细节体验上：

*   **安全漏洞关注**：Issue #1054 ([MCP 环境变量泄露](moltis-org/moltis Issue #1054)) 引起了注意。用户发现 `mcp_list` 命令会将 stdio MCP 服务器的环境变量暴露给 LLM，这在处理敏感 API Key 或密钥时存在严重安全隐患，亟需修复。
*   **UI 交互痛点**：Issue #1055 ([聊天工具栏导致横向滚动](moltis-org/moltis Issue #1055)) 再次报告了界面布局问题，影响了用户的聊天体验。
*   **架构演进讨论**：PR #1049 的提出预示着 Moltis 正在向更细粒度的权限控制和多场景隔离方向发展，这回应了长期以来关于多 Agent 协作与权限隔离的社区需求。

## 5. Bug 与稳定性
今日报告的新 Bug 按严重程度排序如下：

*   **[严重] 安全隐患**：#1054 - Env vars from stdio MCP server config are exposed to the LLM. (环境变量意外泄露给模型，可能导致密钥泄露)。
*   **[中等] 功能失效**：#1053 - Automatic session title generation does not work. (影响用户体验的基础功能失效)。
*   **[中等] 配置体验**：#1051 - OpenAI-compatible provider baseUrl not validated. (URL 构建失败时缺乏日志提示，增加调试难度)。
*   **[低] UI/显示问题**：
    *   #1055 - 水平滚动条问题。
    *   #1052 - Model picker 无法容纳长模型版本号。

*已修复问题*：Hooks 注册失效 (#1024)、Vault 初始化卡死 (#1046)、浅色模式代码高亮失效 (#1045) 均已通过今日的 PR 更新解决。

## 6. 功能请求与路线图信号
*   **Agent 权限隔离**：Issue #553 提议为每个 Agent 设置独立的 sloopback 和 timeout 设置。这与当前开放的 PR #1049（Agent 作为能力边界）高度契合，表明社区与开发方向一致，都在推动 Agent 个性化与隔离能力的建设。
*   **精细化模型管理**：Issue #1052 反馈模型选择器 UI 适配问题，暗示用户正尝试接入更多自定义模型版本，侧面印证了 OpenAI-compatible provider 的使用深度。

## 7. 用户反馈摘要
用户在使用 Moltis 时正趋向于深度的定制化配置（如 Hooks、MCP Server、OpenAI 兼容适配器）：
*   **痛点**：高级配置（如 Hooks、Env vars）的调试体验较差，错误提示不明显或存在安全隐患。
*   **场景**：用户频繁使用 MCP 协议扩展 Agent 能力，并对多用户/多场景（如家庭环境下的儿童与家长模式）下的权限隔离有明确需求（参考 PR #1049）。
*   **满意度**：开发者对 Bug 的响应速度极快（多个 Issue 在 24 小时内被修复合并），维护状态非常健康。

## 8. 待处理积压
*   **长期功能请求**：Issue #553 ([Feature]: Add per agent sloopback and timeout settings) 自 4 月初创建，至今虽有更新但尚未关闭。建议维护者确认 PR #1049 合并后是否会顺带解决此需求，或需单独排期处理。
*   **安全隐患**：Issue #1054 涉及敏感信息泄露，建议标记为高优先级并尽快修复，以防用户在使用 MCP 扩展时发生凭据泄露事故。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-05-24)

## 1. 今日速览
过去 24 小时，CoPaw（数据源自 QwenPaw 仓库）社区活跃度显著提升，共产生 **10 条 Issue 更新**（8 新开/活跃，2 关闭）和 **3 条待合并 PR**。项目今日无新版本发布，重心目前集中在功能扩展与稳定性修复上。社区反馈聚焦于 **前端 Console 的实时性 Bug** 以及 **MCP 协议兼容性** 问题，同时迎来了两个高质量的功能贡献 PR（数据分析插件与 MCP 市场增强），显示出生态正在从核心功能向周边工具链拓展。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
尽管今日无 PR 合并，但有 3 个重要的功能增强 PR 处于待合并状态，预示着下个版本将带来显著的功能提升：

*   **数据能力扩展**: PR [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) 提交了 `DataPaw` 插件，新增 12 项 BI 技能，标志着 CoPaw 正向专业数据分析场景延伸。
*   **MCP 生态增强**: PR [#4630](https://github.com/agentscope-ai/QwenPaw/pull/4630) 引入了 MCP 市场集成、连接健康检查及密钥验证功能，大幅降低了 MCP 服务器的接入门槛。
*   **交互体验优化**: PR [#4637](https://github.com/agentscope-ai/QwenPaw/pull/4637) 实现了自定义斜杠命令快捷菜单，解决了内置命令难以发现的问题。
*   **问题修复**: Issue [#4265](https://github.com/agentscope-ai/QwenPaw/issues/4265)（读取对话日志导致 OOM）已于今日关闭，系统在处理长日志时的稳定性得到修复。

## 4. 社区热点
今日讨论热度最高的问题主要集中在用户界面交互与系统扩展性设计：

*   **[Bug] Console UI 工具调用显示延迟** ([#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644))：
    *   **热度**: 6 条评论
    *   **分析**: 用户反馈 Web 控制台中工具调用经常不实时显示，需刷新页面才能看到。这直接影响了用户对 Agent 执行状态的感知，是目前用户体验的最大痛点之一。
*   **[Feature] 插件扩展与工作目录优化** ([#4642](https://github.com/agentscope-ai/QwenPaw/issues/4642))：
    *   **热度**: 1 条评论，但内容详实
    *   **分析**: 用户深度探讨了当前侵入式修改源码的痛点，呼吁非侵入式插件机制（Hook、Memory、Tool 扩展）以及类似 Claude/Codex 的工作目录隔离功能，反映了高级用户对架构解耦的强烈需求。

## 5. Bug 与稳定性
今日报告的 Bug 涉及前端显示、协议兼容性及后台调度逻辑，部分问题严重影响使用体验：

1.  **[严重] MCP OAuth 认证失败** ([#4643](https://github.com/agentscope-ai/QwenPaw/issues/4643))
    *   **问题**: Token 交换步骤不支持发送 `client_secret`，导致无法连接需要机密客户端的 MCP 服务器。
    *   **状态**: Open，暂无 Fix PR。
2.  **[严重] 幽灵定时任务** ([#4649](https://github.com/agentscope-ai/QwenPaw/issues/4649))
    *   **问题**: 更新 `jobs.json` 后，孤立的 cron 任务未被清理，导致“幽灵任务”无限期执行。
    *   **状态**: Open，暂无 Fix PR。
3.  **[中等] 环境变量作用域问题** ([#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641))
    *   **问题**: 会话中通过 `env set` 设置的变量无法被子进程继承，影响脚本执行。
    *   **状态**: Open。
4.  **[中等] MCP Schema 校验错误** ([#4646](https://github.com/agentscope-ai/QwenPaw/issues/4646))
    *   **问题**: Schema sanitizer 将布尔值转换为对象，破坏了合法的 MCP 工具定义。
    *   **状态**: Open。

## 6. 功能请求与路线图信号
结合用户 Issue 与待合并 PR，可以看出项目接下来的演进方向：

*   **远程执行与监控**: Issue [#4645](https://github.com/agentscope-ai/QwenPaw/issues/4645) 请求支持 Pet 连接远程守护进程，实现“服务端跑 Agent，客户端看状态”。结合正在 Review 的 MCP 和插件 PR，项目正朝着 C/S 架构或分布式 Agent 方向探索。
*   **可观测性增强**: Issue [#4647](https://github.com/agentscope-ai/QwenPaw/issues/4647) 请求在回复底部显示 Token 消耗与速度，结合 PR #4630 的健康检查，显示社区对性能监控和成本控制的关注度上升。
*   **自动化记忆管理**: Issue [#4639](https://github.com/agentscope-ai/QwenPaw/issues/4639)（已关闭）引发了关于“会话结束自动总结”的讨论，虽然该 RFC 已关闭，但记忆系统的自动化仍是用户核心诉求。

## 7. 用户反馈摘要
*   **痛点**:
    *   **前端延迟**: 用户对 Console 信息的实时性感到困惑，反馈“没有任何错误日志但就是不显示”，降低了对 Agent 运行状态的掌控感 ([#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644))。
    *   **扩展困难**: 现有架构对 Hook、Memory 等扩展支持不足，用户不得不“侵入式修改源码”，开发体验有待改善 ([#4642](https://github.com/agentscope-ai/QwenPaw/issues/4642))。
    *   **连接兼容性**: OAuth 与 Schema 校验问题 ([#4643](https://github.com/agentscope-ai/QwenPaw/issues/4643), [#4646](https://github.com/agentscope-ai/QwenPaw/issues/4646)) 阻碍了部分 MCP 服务器的接入。

## 8. 待处理积压
*   **PR 积压**: 当前有 3 个功能性 PR ([#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622), [#4630](https://github.com/agentscope-ai/QwenPaw/pull/4630), [#4637](https://github.com/agentscope-ai/QwenPaw/pull/4637)) 处于 Open 状态，建议维护者尽快 Review 以避免功能积压。
*   **关键 Bug**: OAuth 和 Cron Job 清理相关的 Bug 影响核心功能稳定性，建议优先排期修复。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-05-24)

## 1. 今日速览
ZeptoClaw 今日呈现出**高频维护与架构演进并行**的状态。项目在过去的 24 小时内完成了高达 14 个 PR 的合并与关闭，显示出维护者 @qhkm 对代码库的高效治理，主要集中在依赖升级与文档对齐。核心架构方面，虽然 Agent Middleware Pipeline 的 Phase 2 尝试（#583）被撤销，但随即开启了更精细的 Phase 2b 规划（#593），表明项目正在谨慎但坚定地重构核心消息处理流。此外，针对安全审计的快速响应（#594）体现了项目对安全性的高度重视。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目进展主要集中在架构重构启动、安全修复与依赖维护三个维度：

*   **核心架构重构演进**：
    *   开启了 Agent 中间件流水线的 **Phase 2b 重构** ([Issue #593](https://github.com/qhkm/zeptoclaw/issues/593))。此前尝试将 Pipeline 接入 `process_message` 的 Phase 2 方案 ([PR #583](https://github.com/qhkm/zeptoclaw/pull/583)) 因停留在脚手架层面未实际切断旧逻辑而被关闭。新的 Phase 2b 旨在更彻底地完成迁移，这是项目迈向模块化 Agent 架构的关键一步。
*   **安全与稳定性修复**：
    *   针对昨日（5-22）爆出的 RUSTSEC 安全漏洞，迅速提交了修复 PR ([PR #594](https://github.com/qhkm/zeptoclaw/pull/594))，修复了 `lettre` 和 `diesel` 的安全问题，解除了 CI 全红警报。
*   **功能与体验优化**：
    *   合并了 `longterm_memory` 工具的描述优化 ([PR #571](https://github.com/qhkm/zeptoclaw/pull/571))，引入了显式的触发短语引导，提升了 Agent 自我持久化知识的能力。
    *   完成了项目定位文档的对齐 ([PR #570](https://github.com/qhkm/zeptoclaw/pull/570))，明确了 "local-first personal AI assistant infrastructure" 的定位。
*   **依赖大规模更新**：
    *   批量合并了 Rust 生态的关键依赖更新，包括 `tokio` ([PR #573](https://github.com/qhkm/zeptoclaw/pull/573))、`axum` ([PR #575](https://github.com/qhkm/zeptoclaw/pull/575))、`rustls` ([PR #579](https://github.com/qhkm/zeptoclaw/pull/579)) 等，以及前端文档站点的 Astro/Starlight 更新，确保了技术栈的现代性。

## 4. 社区热点
今日社区互动主要集中在技术深度较高的架构讨论上，虽然评论数量不多，但议题质量较高：

*   **架构决策讨论**：最值得关注的是 Issue [Issue #593](https://github.com/qhkm/zeptoclaw/issues/593)。维护者详细复盘了 Phase 2 未合并的原因（仅建立了桩代码，未真正替换核心逻辑），并提出了 Phase 2b 的具体实施路径。这显示了对核心 `process_message` 模块重构的严谨态度。
*   **定位澄清**：Issue [Issue #565](https://github.com/qhkm/zeptoclaw/issues/565) 及对应 PR 的关闭，反映了项目对自身定位的精准化调整，移除了未经验证的竞品对比声明，增强了项目的专业信誉。

## 5. Bug 与稳定性
*   **[严重] 安全审计阻塞 CI**：由于 `deny.toml` 采用零容忍策略，新发现的 RUSTSEC 通告导致全仓库 CI 失败。目前已有修复 PR [PR #594](https://github.com/qhkm/zeptoclaw/pull/594) 待合并，状态为 Open，需优先处理。
*   **[中等] 架构重构回退**：PR [PR #583](https://github.com/qhkm/zeptoclaw/pull/583) 的关闭表明重构过程中发现了设计瑕疵（未真正集成 Pipeline）。虽然不是运行时 Bug，但属于架构实现层面的偏差，目前已通过新 Issue #593 纠正方向。

## 6. 功能请求与路线图信号
*   **Agent 自我进化能力**：已合并的 [PR #571](https://github.com/qhkm/zeptoclaw/pull/571) 暗示项目正在采纳 Hermes Agent 的自我改进循环机制，通过优化 Tool Description 来引导 LLM 更好地使用长期记忆功能。
*   **中间件生态扩展**：Issue [Issue #593](https://github.com/qhkm/zeptoclaw/issues/593) 明确了下一阶段将聚焦于 `process_message` 的中间件化，预计未来会有更多中间件实现（如日志、限流、预处理）被接入核心循环。

## 7. 用户反馈摘要
今日无直接终端用户的功能请求反馈，主要反馈来源于维护者自身的架构审查和文档维护：
*   **痛点**：发现之前的重构尝试不够深入，仅停留在表面代码生成，未触及核心逻辑替换。
*   **改进**：文档中对竞品的比较声明缺乏公开数据支持，已被修正或软化，体现了对准确性的追求。

## 8. 待处理积压
*   **[高优先级] 安全漏洞修复 PR**：[PR #594](https://github.com/qhkm/zeptoclaw/pull/594) 目前处于 Open 状态，鉴于其阻塞了所有其他 PR 的 CI 流程，建议立即 Review 并合并。
*   **[待定] Dependabot 依赖更新**：仍有 2 个 Dependabot PR 处于 Open 状态（[PR #578](https://github.com/qhkm/zeptoclaw/pull/578), [PR #572](https://github.com/qhkm/zeptoclaw/pull/572)），涉及前端文档站点的依赖升级，建议在 CI 恢复后尽快处理。
*   **[路线图] Phase 2b 实现**：[Issue #593](https://github.com/qhkm/zeptoclaw/issues/593) 刚刚创建，尚未有对应 PR，需关注后续开发进度。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*