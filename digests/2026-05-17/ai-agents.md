# OpenClaw 生态日报 2026-05-17

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-17 03:42 UTC

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

# OpenClaw 项目动态日报 (2026-05-17)

## 1. 今日速览
OpenClaw 项目今日保持了极高的活跃度，过去 24 小时内共有 **500 条 Issues 更新**和 **500 条 PR 更新**，社区互动频繁。项目连续发布了两个 Beta 版本（v2026.5.16-beta.2 和 v2026.5.16-beta.3），主要集中在增强 xAI Grok 的 OAuth 登录支持及 CLI 调度能力。核心开发重点集中在修复会话状态管理、多渠道消息投递稳定性以及安全性加固，同时社区对跨平台客户端和密钥安全管理的呼声持续高涨。

## 2. 版本发布

### v2026.5.16-beta.3 & v2026.5.16-beta.2
**更新重点：**
- **Providers/xAI**: 新增 xAI Grok OAuth 登录支持。SuperGrok 订阅者现在可以通过 OAuth 认证使用 `xai/*` 模型和媒体/工具提供者，而无需配置 `XAI_API_KEY`。这大大降低了用户的使用门槛。
- **CLI/cron**: 增强了 `openclaw cron run` 命令，引入 `--wait` 参数（支持超时和轮询间隔控制）以及精确的 `cron.runs --run-id` 过滤功能，提升了自动化任务的可靠性。

**迁移注意**: 
- 依赖 xAI 模型的用户建议更新版本并测试 OAuth 流程，确认无需 API Key 即可正常调用。
- 使用 Cron 任务的自动化脚本建议评估新增的 `--wait` 参数以优化任务同步逻辑。

## 3. 项目进展

今日共有 **100 个 PR 被合并或关闭**，重点修复了多个影响用户体验的关键 Bug：

- **Docker 环境兼容性修复**: [PR #82845](https://github.com/openclaw/openclaw/pull/82845) 修复了在 Linux 容器中因缺少 `brew` 导致 Skill 安装失败的问题，解决了 Issue #14593。
- **消息投递稳定性**: [PR #82862](https://github.com/openclaw/openclaw/pull/82862) 修复了 Discord 进度条截断导致最终消息丢失的问题；[PR #82843](https://github.com/openclaw/openclaw/pull/82843) 修复了 Cron 任务在有活跃子代理时的投递逻辑。
- **安全性加固**: [PR #82880](https://github.com/openclaw/openclaw/pull/82880) 加固了 ACPX 代理和 Firecrawl 的 SSRF 防护，修复了潜在的命令注入风险。
- **会话管理**: [PR #82874](https://github.com/openclaw/openclaw/pull/82874) 修复了压缩后使用率统计丢失的问题；[PR #82867](https://github.com/openclaw/openclaw/pull/82867) 增加了对过期会话快照路径的诊断检测。

项目整体在多渠道适配和后台任务调度方面迈出了坚实的一步。

## 4. 社区热点

今日社区讨论最热烈的话题集中在平台扩展性和安全性上：

1.  **Linux/Windows 原生应用需求 ([Issue #75](https://github.com/openclaw/openclaw/issues/75))**
    - **热度**: 104 条评论，75 👍
    - **诉求**: 社区强烈呼吁官方提供 Linux 和 Windows 的桌面客户端，以匹配 macOS 的功能体验。维护者标记为 `P2` 和 `help wanted`，目前亟需社区贡献者介入。

2.  **Docker 环境下的 Skill 安装故障 ([Issue #14593](https://github.com/openclaw/openclaw/issues/14593))**
    - **热度**: 29 条评论，17 👍
    - **现状**: 该问题已通过 PR #82845 修复，反映了用户在容器化部署中对依赖管理的痛点。

3.  **预构建 Android APK 请求 ([Issue #9443](https://github.com/openclaw/openclaw/issues/9443))**
    - **热度**: 24 条评论
    - **诉求**: 用户希望直接下载 APK 而非自行编译，降低了移动端的部署门槛。

4.  **密钥安全：防止 Agent 读取原始 API Key ([Issue #10659](https://github.com/openclaw/openclaw/issues/10659))**
    - **热度**: 12 条评论
    - **分析**: 用户提出 "Masked Secrets" 功能，希望 Agent 能使用密钥但无法 "看见" 明文，防止 Prompt Injection 攻击导致密钥泄露。这是一个高价值的安全增强需求。

## 5. Bug 与稳定性

今日报告的关键 Bug 主要涉及会话状态和 UI 交互，按严重程度排序如下：

### 严重
- **TUI 输入吞没问题 ([Issue #45326](https://github.com/openclaw/openclaw/issues/45326))**: 在模型生成期间输入文本会被 "吞掉" 并错误排队到下一轮对话，导致交互中断。目前尚未有修复 PR 链接。
- **子代理结果静默丢失 ([Issue #44925](https://github.com/openclaw/openclaw/issues/44925))**: 子代理任务编排在某些超时情况下会静默丢失结果，无重试或通知。状态为 `P1`。

### 中等
- **Feishu 插件内存泄漏 ([Issue #48183](https://github.com/openclaw/openclaw/issues/48183))**: 监控状态清理不完全，可能导致 HTTP Server Map 残留。已有详细复现步骤。
- **Discord 泄露内部工具调用日志 ([Issue #44905](https://github.com/openclaw/openclaw/issues/44905))**: Discord 渠道偶尔会显示 `NO_REPLY` 等内部工具调用文本，影响用户体验。涉及安全和隐私。

### 已修复
- **Docker Skill 安装失败**: 上述 #14593 已修复。
- **非 VLM 模型图片理解失败**: [PR #82860](https://github.com/openclaw/openclaw/pull/82860) 修复了非视觉模型处理图片请求时的报错。

## 6. 功能请求与路线图信号

社区提出了多项具有前瞻性的功能请求，部分已有 PR 跟进：

- **安全沙箱与权限控制**:
    - [Issue #10659](https://github.com/openclaw/openclaw/issues/10659) (Masked Secrets) 和 [Issue #7722](https://github.com/openclaw/openclaw/issues/7722) (文件系统沙箱) 表明，随着 Agent 自主性增强，细粒度的安全控制已成为用户的核心需求。
    - [Issue #45031](https://github.com/openclaw/openclaw/issues/45031) 建议集成安全扫描以防止恶意 Skill。

- **多平台支持**:
    - Linux/Windows 客户端 ([Issue #75](https://github.com/openclaw/openclaw/issues/75)) 和预构建 APK ([Issue #9443](https://github.com/openclaw/openclaw/issues/9443)) 是社区最期待的功能。鉴于标签中有 `help wanted`，这可能是下一个版本社区贡献的重点方向。

- **会话与记忆管理**:
    - [Issue #13700](https://github.com/openclaw/openclaw/issues/13700) 提出会话快照保存/加载功能，这对于长周期开发任务非常关键。

## 7. 用户反馈摘要

从评论中提炼出的用户真实声音：

- **部署痛点**: "Docker 里装 Skill 真的太难了，没有 Brew 就直接报错" —— 反映了容器化环境下的兼容性问题正在改善。
- **交互困惑**: "TUI 里打断模型说话太费劲了，经常丢字" —— Issue #45326 的典型用户场景，影响了实时交互体验。
- **安全焦虑**: "我不敢把 API Key 给 Agent，怕它自己发出去" —— 直接指向了 Masked Secrets 的需求，说明当前的安全模型让部分用户感到不安。
- **功能渴望**: "为什么 Android 只有源码？我们只想装个 APP 用用" —— 移动端用户对开箱即用体验的迫切需求。

## 8. 待处理积压

以下高关注度 Issue 长期未关闭或需维护者紧急关注：

1.  **Linux/Windows 客户端支持 ([Issue #75](https://github.com/openclaw/openclaw/issues/75))**: 创建于年初，今日仍有大量更新，需官方明确路线图。
2.  **执行审批黑名单功能 ([Issue #6615](https://github.com/openclaw/openclaw/issues/6615))**: 提出于 2 月初，高度赞同 (7 👍)，目前状态为 `needs-product-decision`，亟需确认是否排期。
3.  **模型选择器模式请求 ([Issue #9637](https://github.com/openclaw/openclaw/issues/9637))**: 关于 TUI 无障碍支持的请求（禁用 Emoji），影响了屏幕阅读器用户，属于较低成本但高价值的改进。

---

## 横向生态对比

# 开源 AI 智能体生态日报分析 (2026-05-17)

## 1. 生态全景
当前开源 AI 智能体生态正处于从**单一对话工具向多智能体协作与长周期自主运行**演进的关键转折期。OpenClaw、NanoBot、Zeroclaw 等头部项目密集发布里程碑版本或重构架构，核心争夺点集中在**长期记忆保持、任务调度稳定性及多模态权限安全**三个维度。同时，随着 Grok、DeepSeek、MiMo 等新模型快速集成，生态正在经历一轮深度适配与阵痛，"模型适配难度"与"部署易用性"成为用户反馈的高频词。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新 | 版本动态 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | v2026.5.16-beta.2/3 | **极高** - 社区互动活跃，版本迭代快，核心功能修复及时。 |
| **NanoBot** | 7 | 27 | **v0.2.0** (里程碑) | **高** - 架构重构期，新功能引入伴随部署稳定性问题。 |
| **Zeroclaw** | 50 | 50 | v0.8.0 准备中 | **高** - 架构向 Multi-Agent 演进，核心修复响应快。 |
| **Hermes Agent** | 50 | 50 | v0.14.0 (发布后) | **中** - 大版本发布后的震荡期，P0/P1 回归问题较多。 |
| **IronClaw** | 15 | 39 | 无 (Reborn 重构中) | **中** - 架构重构攻坚期，代码变更量大，但 CI/CD 稳定性存疑。 |
| **CoPaw** | 10 | 13 | 无 | **中** - 存在严重的运行时崩溃与消息丢失隐患，需紧急修复。 |
| **PicoClaw** | 低 | 3 | Nightly Build | **中** - 移动端与通道支持增强，但启动故障影响体验。 |
| **LobsterAI** | 1 | 10 | v2026.5.16 (集成) | **低** - 开发活跃但社区响应滞后，存在阻断性连接问题。 |
| **Moltis** | 1 | 3 | 无 | **稳** - 关注企业级特性，迭代平稳。 |
| **NanoClaw** | 5 | 8 | 无 | **低** - 核心数据可靠性问题待解，PR 积压。 |
| **NullClaw/TinyClaw/EasyClaw**| 0 | 0 | 无 | 静默 |

## 3. OpenClaw 在生态中的定位

*   **核心参照系与集成中心**：OpenClaw 以 500+ 的日更新量稳居生态核心，其定位是**全能型生产级平台**。相比 NanoBot 的学术/实验性质和 Hermes Agent 的自我改进探索，OpenClaw 更侧重于**企业级落地与多渠道适配**（如 Discord、Feishu、xAI OAuth）。
*   **技术路线差异**：
    *   **对比 Zeroclaw**：两者都在推进 Multi-Agent，但 OpenClaw 更强调**现网稳定性**（如 Docker 兼容、消息投递修复），而 Zeroclaw 正在进行激进的 Schema V3 重构。
    *   **对比 NanoBot**：OpenClaw 在 CLI 调度和 Cron 任务上更成熟，而 NanoBot 刚刚引入 `/goal` 指令尝试解决长期记忆问题。
*   **社区规模优势**：OpenClaw 的社区讨论热度（如 Linux 客户端请求、密钥安全）反映了其拥有大量实际生产环境用户，而非仅限于开发者或极客群体。

## 4. 共同关注的技术方向

*   **长期记忆与目标持久化**：
    *   **涉及项目**：NanoBot (v0.2.0 `/goal` 指令)、CoPaw (请求 `/goal` 功能)、OpenClaw (会话快照修复)。
    *   **诉求**：智能体在长周期任务中容易遗忘目标，社区急需解决上下文压缩导致的核心信息丢失问题。

*   **安全隔离与权限控制**：
    *   **涉及项目**：OpenClaw (Masked Secrets 防注入)、Hermes Agent (用户隔离 RFC)、LobsterAI (Skills 禁用)。
    *   **诉求**：随着 Agent 自主性增强，防止 Prompt Injection 攻击和敏感 API Key 泄露成为共识。

*   **多智能体协作架构**：
    *   **涉及项目**：Zeroclaw (v0.8.0 Multi-Agent Runtime)、Moltis (Non-blocking spawn_agent)、NanoBot (Filesystem Mailbox)。
    *   **诉求**：单体智能体能力受限，社区正在探索子代理的异步调用与通信机制。

*   **多模态与新模型适配**：
    *   **涉及项目**：OpenClaw (Grok OAuth)、Hermes Agent (Gemma 4/Grok 配额)、LobsterAI (MiMo 修复)。
    *   **诉求**：快速集成 xAI、DeepSeek 等新模型，并解决非 OpenAI 协议的兼容性Bug（如 Kimi/DeepSeek 的流式工具调用）。

## 5. 差异化定位分析

| 项目 | 核心侧重 | 目标用户 | 架构特点 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **全能生产平台** | 企业开发者、运维 | 插件化技能系统，强 CLI & Cron 支持，多渠道接入 |
| **NanoBot** | **智能体架构演进** | 研究人员、开发者 | 模块化 Loop 设计，重视 Context Builder 与记忆机制 |
| **Zeroclaw** | **下一代运行时** | 高级开发者 | 激进重构 Multi-Agent Runtime，Schema V3 |
| **Hermes Agent** | **自我改进与网关** | 极客、边缘计算 | 强调自我修正，Gateway 架构，侧重模型网关能力 |
| **IronClaw** | **基础设施重构** | 平台工程师 | Reborn 架构，关注配置即代码与生产级组合根 |
| **Moltis** | **企业级网络** | 企业 IT | 关注零信任网络与远程隧道，私有化部署友好 |

## 6. 社区热度与成熟度

*   **第一梯队（活跃迭代期）**：**OpenClaw** 凭借庞大的 Issue/PR 吞吐量领先，解决的是"用好"的问题；**NanoBot** 和 **Zeroclaw** 处于功能突破期，解决的是"能不能"的问题，热度高但稳定性稍弱。
*   **第二梯队（震荡修复期）**：**Hermes Agent** 和 **CoPaw** 刚经历大改或正面临严重的架构 Bug，社区声音集中在排错与修复。
*   **第三梯队（架构调整期）**：**IronClaw** 正进行底层重构，表面平静但底层变动巨大，属于"静默爆发"。
*   **观察名单**：**LobsterAI** 开发活跃但社区反馈通道不畅，**NanoClaw** 需解决数据丢失的信任危机。

## 7. 值得关注的趋势信号

1.  **"静默失败"成为最大隐患**：NanoClaw 和 CoPaw 均报告了消息静默丢失或事件循环崩溃且无报错的情况。这表明**可观测性** 将是 Agent 框架的下一个竞争高地，开发者不仅要关注 AI 生成内容，更要关注系统底层的可靠性。
2.  **本地化部署回归**：OpenClaw 社区对 Linux/Windows 原生客户端及 Android APK 的强烈呼声，反映出数据隐私与延迟考量下，**本地/边缘运行** 正在成为刚需，而非仅仅依赖云端 WebUI。
3.  **模型兼容性的隐形门槛**：Kimi、DeepSeek、MiMo 等非 OpenAI 模型在工具调用和推流协议上的差异（如 Zeroclaw 的 Kimi 报错、LobsterAI 的 MiMo 修复），揭示了**中间件适配层** 的巨大价值。谁能最快抹平模型差异，谁就能获得开发者青睐。
4.  **配置管理的现代化**：IronClaw 和 OpenClaw 都在遭遇配置碎片化（.env vs JSON）的挑战。**声明式配置** 和 **GitOps** 风格的 Agent 管理将是企业级部署的必然趋势。

**分析师建议**：对于生产环境选型，建议优先跟进 OpenClaw 的 Beta 版本以获取最新模型支持，但需注意 Cron 任务的调度逻辑测试；对于架构研究者，NanoBot 的 `/goal` 机制和 Zeroclaw 的 Multi-Agent Runtime 是理解 Agent 记忆与协作的最佳范例。需警惕 Hermes Agent 和 CoPaw 当前版本的数据可靠性问题。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-17)

## 1. 今日速览
NanoBot 今日发布了具有里程碑意义的 **v0.2.0** 版本，引入了核心特性 `/goal` 指令与 `long_task` 机制，显著提升了 Agent 在长周期任务中的目标保持能力。项目活跃度极高，过去 24 小时内共有 **27 条 PR 更新**（其中 16 条已合并/关闭）和 **7 条 Issue 更新**。社区贡献主要集中在架构重构（拆分 `loop.py`）、模型兼容性修复（DeepSeek、MiMo）以及新通信渠道的拓展。整体来看，项目正从单一智能体工具向支持多智能体协作与长期记忆的复杂系统演进，处于快速迭代上升期。

## 2. 版本发布
**v0.2.0** (发布于 2026-05-17)
- **核心更新**：引入 `long_task` 与 `/goal` 指令。Agent 现在可以将特定线程标记为持续目标，该目标会被固定在运行时上下文的头部，从而在上下文压缩或长对话中保持目标不丢失，解决了长期记忆的关键痛点。
- **统计数据**：合并了 105 个 PR，迎来了 20 位新贡献者。
- **影响评估**：此次更新大幅增强了 Agent 处理复杂多步任务的能力，标志着 NanoBot 在自主性方面迈出了重要一步。

## 3. 项目进展
今日共有 16 条 PR 顺利合并，显著提升了系统的稳定性与可维护性：

- **架构重构与优化**：
  - [PR #3856](https://github.com/HKUDS/nanobot/pull/3856)：将 `AgentLoop` 中的检查点和会话持久化逻辑拆分为独立模块，降低了核心循环的复杂度。
  - [PR #3858](https://github.com/HKUDS/nanobot/pull/3858)：提取 `ContextBuilder.build_user_content()` 公共方法，优化了上下文构建流程。
  - [PR #3859](https://github.com/HKUDS/nanobot/pull/3859)：修复了 mid-turn 期间运行时上下文的重复注入问题，节省了宝贵的 Token 消耗。

- **功能增强**：
  - [PR #3461](https://github.com/HKUDS/nanobot/pull/3461)：新增基于文件系统的邮箱通道插件，支持 Agent 间异步通信，为多智能体协作奠定基础。
  - [PR #3223](https://github.com/HKUDS/nanobot/pull/3223)：引入 `spawn_status` 和 `spawn_cancel` 工具，增强了对子 Agent 的管理能力。
  - [PR #3861](https://github.com/HKUDS/nanobot/pull/3861)：修复了 Goal 状态变更时 LLM 超时设置未同步更新的问题，确保长任务执行稳定。

- **模型兼容性**：
  - [PR #3851](https://github.com/HKUDS/nanobot/pull/3851)：修复了通过 OpenRouter 等网关调用 MiMo 模型时思维链控制失效的问题。

## 4. 社区热点
今日社区讨论最热烈的 Issue 是 **[Bug] WebUI会话-打印内容显示错乱** ([#3790](https://github.com/HKUDS/nanobot/issues/3790))，该 Issue 共有 **12 条评论**。
- **诉求分析**：用户反馈在升级到最新源码后，WebUI 会话内容在打印输出时出现显示错乱，必须刷新页面才能恢复。这反映了前端 WebUI 在处理复杂或高频流式数据流时可能存在渲染状态同步问题。虽然已有 PR 尝试修复 Docker 和 WebUI 构建，但该问题仍需开发者关注具体的渲染逻辑修复。

## 5. Bug 与稳定性
今日报告了若干稳定性问题，部分已有修复方案：

- **P0 - 启动失败**：
  - [Issue #3857](https://github.com/HKUDS/nanobot/issues/3857)：Bootstrap 启动失败，报错 HTTP 500。用户无法访问前端。
  - [Issue #3870](https://github.com/HKUDS/nanobot/pull/3870) / [PR #3872](https://github.com/HKUDS/nanobot/pull/3872)：开发者已提交修复 Docker 构建失败（`hatch_build.py not found`）和 WebUI 端口的 PR，正在解决部署层面的阻塞问题。

- **P1 - 功能缺陷**：
  - [Issue #3790](https://github.com/HKUDS/nanobot/issues/3790)：WebUI 会话显示错乱（热度最高，暂无针对性 Fix PR）。
  - [Issue #3863](https://github.com/HKUDS/nanobot/issues/3863)：微信扫码登录失败，提示版本过低。这是由于上游微信协议更新导致的兼容性问题。
  - [PR #3867](https://github.com/HKUDS/nanobot/pull/3867)：针对 MiMo 模型通过网关调用仍无法完全禁用思考模式的问题，提交了后续修复。

- **P2 - 模型适配**：
  - [PR #3869](https://github.com/HKUDS/nanobot/pull/3869)：修复 DeepSeek 模型在接收 null content 或特定格式时报错 400 的问题，增强了消息格式的健壮性。
  - [PR #3864](https://github.com/HKUDS/nanobot/pull/3864)：增加了对中文错误信息 "访问量过大" 的识别，使其能被判定为瞬时错误并自动重试。

## 6. 功能请求与路线图信号
社区提出的新功能需求显示了明确的扩展方向：

1.  **多轮对话技能增强**：[Issue #3846](https://github.com/HKUDS/nanobot/issues/3846) 建议在多轮对话中持久化技能定义，避免每次重新加载，结合当前 v0.2.0 的 `/goal` 特性，这可能成为下一阶段优化的重点。
2.  **通信渠道扩展**：[PR #3852](https://github.com/HKUDS/nanobot/pull/3852) 提交了对 Signal 通道的支持，表明项目正积极拓展隐私加密通讯场景。
3.  **性能优化**：[PR #3865](https://github.com/HKUDS/nanobot/pull/3865) 提出了基于 BM25 的轻量级技能路由器，旨在将系统提示词 Token 减少约 60%。这直指 Agent "Prompt 过长" 的核心痛点，极具合并价值。
4.  **多智能体发现**：[PR #3854](https://github.com/HKUDS/nanobot/pull/3854) 为 WebUI 引入了 Peer 发现机制，预示着 WebUI 将支持多 Agent 实例的监控与管理。

## 7. 用户反馈摘要
从 Issue 评论区提炼出以下用户痛点：
- **部署体验**：用户对 Docker 构建失败（`hatch_build.py` 缺失）表示沮丧，这直接阻碍了新用户的上手体验，好在社区响应迅速，相关修复 PR 已提交。
- **前端稳定性**：WebUI 的显示错乱问题影响了日常使用的流畅度，用户期待更稳定的渲染表现。
- **配置安全性**：[Issue #2172](https://github.com/HKUDS/nanobot/issues/2172) 讨论了密钥明文存储的风险，用户强烈希望能通过环境变量或外部命令读取密钥。相关文档已更新 ([PR #3866](https://github.com/HKUDS/nanobot/pull/3866))，表明开发团队重视安全性反馈。

## 8. 待处理积压
- **[PR #3728](https://github.com/HKUDS/nanobot/pull/3728) [Feature] Agent Self-Correction Hooks**：该 PR 引入了循环检测和反思重试机制，已提交一周 (05-10)，尚未合并。这是一个高价值的复杂功能，建议维护者尽快 Review 或反馈待办事项，以推进 Agent 自我纠错能力的落地。
- **[PR #3852](https://github.com/HKUDS/nanobot/pull/3852) Signal Channel Support**：新通道支持 PR 目前处于 Open 状态，需要代码审查以确保集成质量。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-17)

## 1. 今日速览
Zeroclaw 项目今日处于高度活跃状态，正全力推进 **v0.8.0 "Multi-Agent Runtime"** 的发布准备工作。过去 24 小时内，Issue 与 PR 更新量均达到 50 条，显示出社区与开发团队极高的互动频率。核心亮点在于 v0.8.0 里程碑 PR (#6398) 的提交，以及针对 Matrix 频道和 Tool Protocol 的关键修复。整体项目健康度良好，对 P1 级别的阻塞性问题响应迅速，功能迭代正从单一 Agent 向多 Agent 架构演进。

## 2. 版本发布
**今日无新版本发布。**
*   **待发布版本动态**：核心团队已提交 **v0.8.0: Multi-Agent Runtime and Schema V3** 的合并请求 ([PR #6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398))。该版本包含破坏性架构更新，将支持多智能体运行时，建议用户关注后续迁移文档。

## 3. 项目进展
今日项目在架构重构、稳定性修复及客户端支持方面取得重要进展：
*   **架构里程碑**：PR [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) 提交了 v0.8.0 核心代码，重构了运行时以支持 Multi-Agent 模式，这是项目迈向复杂工作流的关键一步。
*   **稳定性修复**：针对 Matrix 频道的流式传输状态冲突 ([PR #6735](https://github.com/zeroclaw-labs/zeroclaw/pull/6735)) 和工具调用协议泄露问题 ([PR #6736](https://github.com/zeroclaw-labs/zeroclaw/pull/6736)) 提交了修复，提升了多轮对话的稳定性。
*   **客户端生态**：PR [#6710](https://github.com/zeroclaw-labs/zeroclaw/pull/6710) 推进了 Desktop 应用对 Windows 和 Linux 的支持，完善了跨平台体验。

## 4. 社区热点
今日讨论最活跃的话题集中在部署配置与特定模型兼容性：
*   **[#6123 [CLOSED] [Bug]: default_model issue on fresh install](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)** (评论: 18)
    *   **诉求分析**：用户在 LXC 容器新装时遭遇配置加载错误，反映了默认配置逻辑在特定环境下的兼容性问题。该 Issue 已关闭，表明社区对入门阻碍的快速响应。
*   **[#5600 [OPEN] [Bug]: Use kimi-code provider in streaming chat call tools](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)** (评论: 8)
    *   **诉求分析**：用户在使用 Kimi（月之暗面）模型进行流式 Tool Call 时频繁报错。这反映了用户对国产大模型及 OpenAI 兼容接口的强烈集成需求。
*   **[#2467 [OPEN] [Feature]: Webhook transforms](https://github.com/zeroclaw-labs/zeroclaw/issues/2467)** (评论: 5)
    *   **诉求分析**：长期未决的功能请求，用户希望 Webhook 能支持自定义路径和载荷转换，以便接入更多第三方服务，而非仅限于标准 GitHub 格式。

## 5. Bug 与稳定性
今日报告的关键 Bug 主要影响运行时的数据完整性和特定 Provider 的可用性：

*   **P1 - 工作流阻塞**
    *   **[#5600 Kimi Provider 流式调用失败](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)**：API 报错 `reasoning_content is missing`，导致无法正常使用 Kimi 模型。
    *   **[#6269 上下文压缩丢失推理内容](https://github.com/zeroclaw-labs/zeroclaw/issues/6269)**：运行时压缩历史记录时会丢弃 `reasoning_content`，破坏了 DeepSeek 等模型的思维链，影响回答质量。

*   **P2 - 降级行为/协议泄露**
    *   **[#6734 Qwen 3.6 工具调用泄露](https://github.com/zeroclaw-labs/zeroclaw/issues/6734)**：Qwen 3.6 的工具调用信封可能直接作为文本展示给用户。**(已有修复 PR: [#6736](https://github.com/zeroclaw-labs/zeroclaw/pull/6736))**
    *   **[#6733 Matrix 并发状态冲突](https://github.com/zeroclaw-labs/zeroclaw/issues/6733)**：同一房间内并发对话会导致草稿状态互相覆盖。**(已有修复 PR: [#6735](https://github.com/zeroclaw-labs/zeroclaw/pull/6735))**
    *   **[#6723 OpenAI 超时配置失效](https://github.com/zeroclaw-labs/zeroclaw/issues/6723)**：原生 Provider 硬编码 120s 超时，忽略了用户配置的长时延设置。

## 6. 功能请求与路线图信号
结合 Issue 反馈与 PR 动态，下一阶段路线图信号清晰：
*   **Memory 系统进化**：PR [#6693](https://github.com/zeroclaw-labs/zeroclaw/pull/6693) 提出了 **"Dream Mode"**，旨在空闲时整合记忆，解决长对话上下文膨胀问题。
*   **Skills 管理增强**：PR [#6700](https://github.com/zeroclaw-labs/zeroclaw/pull/6700) 新增了 Skills 管理的 API 和 Dashboard 界面，配合 Issue [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) 的 UX 改进，显示 Skills 插件化是近期重点。
*   **企业级集成**：Issue [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) 请求为 Ollama Cloud、智谱 AI 等增加原生 OAuth 支持，降低 API Key 管理成本。
*   **开发者体验**：Issue [#5882](https://github.com/zeroclaw-labs/zeroclaw/issues/5882) 请求基于 Ratatui 的 Agent REPL 模式，Issue [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) 请求 LSP 支持，均旨在提升开发者在终端内的编码体验。

## 7. 用户反馈摘要
*   **痛点：配置门槛**：Issue #6123 暴露了新用户在 LXC 等容器环境下的配置难题，需进一步完善 `default_model` 的发现机制或文档指引。
*   **痛点：兼容性细节**：多位用户反馈 Qwen、Kimi、DeepSeek 等非 OpenAI 原生模型的 Tool Call 和 Reasoning 协议处理存在兼容性瑕疵（如 #6734, #5600），显示社区对多模型后端的兼容性测试需求强烈。
*   **满意度**：用户对 PR 修复速度表示认可，特别是针对 Matrix 频道和 Webhook 的即时修复。

## 8. 待处理积压
*   **关键修复待 Review**：PR [#6735](https://github.com/zeroclaw-labs/zeroclaw/pull/6735) 和 [#6736](https://github.com/zeroclaw-labs/zeroclaw/pull/6736) 解决了严重的运行时状态冲突问题，建议维护者优先合并。
*   **长期阻塞**：Issue [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) (Kimi Provider Bug) 状态为 `blocked`，需要更多用户提供复现信息；Issue [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) (Webhook Transforms) 长期未获处理，建议纳入下一版本迭代评估。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 (2026-05-17)

## 1. 今日速览
Hermes Agent 于昨日刚刚发布了里程碑式的 **v0.14.0 "Foundation Release"**，今日项目处于发布后的高强度维护与反馈期。过去 24 小时内，社区活跃度极高，共产生 50 条 Issue 更新和 50 条 PR 更新，其中新开 Issue 占比很高，表明用户正在快速测试新版本。核心团队正忙于处理 v0.14.0 带来的回归问题，特别是围绕新模型（如 Grok-4.3、Gemma 4）的兼容性、OAuth 认证以及 Gateway 网关的稳定性修复。虽然发布了 1 个新版本，但 Bug 报告数量显著增加，项目健康度目前处于“发布后震荡期”，需重点关注稳定性修复。

## 2. 版本发布
**[v2026.5.16: Hermes Agent v0.14.0](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.16)**
- **定位**：The Foundation Release（基础版本）。
- **规模**：自 v0.13.0 以来，共包含 **808 commits**，合并了 **633 个 PR**，变更文件 **1393 个**，新增代码行数超过 16.5 万行。
- **贡献度**：共有 **215 位社区贡献者** 参与。
- **修复**：关闭了 545 个 Issues，其中包括 12 个 P0 级和 50 个 P1 级关键问题。
- **注意**：作为一个大版本更新，涉及大量的文件变更和重构，升级需注意配置迁移（已有用户反馈 `.env` 丢失问题）。

## 3. 项目进展
今日共合并/关闭了 26 个 PR，主要集中在文档补全、新模型适配和关键 Bug 修复：

- **架构重构与清理**：
    - [PR #27248](https://github.com/NousResearch/hermes-agent/pull/27248) (Open): 提议将 `run_agent.py` 核心逻辑拆分为 14 个模块，代码行数从 1.6 万行降至 3.8 千行（减少 76%）。虽未合并，但显示了团队优化代码架构的决心。
    - [PR #27247](https://github.com/NousResearch/hermes-agent/pull/27247) (Merged): 批量合入了 10 个低风险的新贡献者 PR，涵盖文档和社区内容更新。

- **模型与功能适配**：
    - [PR #25293](https://github.com/NousResearch/hermes-agent/pull/25293) (Merged): 新增 Gemma 4 到推理白名单，支持最新模型。
    - [PR #27109](https://github.com/NousResearch/hermes-agent/pull/27109) (Merged): 文档更新，明确了 Delegation API 模式的覆盖配置。

- **关键修复**：
    - [PR #27190](https://github.com/NousResearch/hermes-agent/pull/27190) (Merged): 修复了后台审查进程泄露提示词到外部内存插件的问题，涉及隐私安全。
    - [PR #26043](https://github.com/NousResearch/hermes-agent/pull/26043) (Merged): 修复了 Fallback 降级逻辑无法读取自定义模型上下文长度的问题。

## 4. 社区热点
今日讨论最热烈的话题集中在 **权限治理** 与 **新模型集成**：

1.  **[Issue #11692](https://github.com/NousResearch/hermes-agent/issues/11692)**: **"自我改进智能体的版本溯源与治理"** (11 评论)
    -   **诉求**：用户深入探讨了 Hermes 的“自我修改”特性带来的治理难题，要求提供“收据”机制，证明输出是由哪个版本的 Skill 产生的。这反映了用户对 AI 自主性与可控性之间平衡的深层担忧。
2.  **[Issue #21574](https://github.com/NousResearch/hermes-agent/issues/21574)**: **"用户隔离与身份权限系统 RFC"** (6 评论)
    -   **诉求**：用户通过女友通过 Telegram 网关成功进行 Prompt Injection 攻击的案例，强烈呼吁实现“基于身份的权限系统”和“用户隔离”。这暴露了多用户场景下的严重安全隐患。
3.  **[Issue #13484](https://github.com/NousResearch/hermes-agent/issues/13484)**: **"原生支持 Google Cloud Vertex AI"** (4 评论, 4 👍)
    -   **诉求**：目前缺少对 Vertex AI 的原生 OAuth 支持，企业级用户强烈需求此功能。

## 5. Bug 与稳定性
v0.14.0 发布后，部分新功能和旧逻辑冲突引发了 P1/P2 级 Bug：

**🔴 严重问题 (P1)**
- **[Issue #27004](https://github.com/NousResearch/hermes-agent/issues/27004)**: **主分支测试套件全线崩溃**。级联失败加上 600s 超时，导致 CI/CD 无法作为有效门禁，严重影响代码质量。
- **[Issue #26804](https://github.com/NousResearch/hermes-agent/issues/27004)**: **`hermes update` 静默删除 .env 文件**。用户自定义的环境变量在更新后被清空，属于破坏性变更，严重影响生产环境。
- **[Issue #25585](https://github.com/NousResearch/hermes-agent/issues/25585)**: **上下文压缩失败导致记忆丢失**。当 LLM 摘要生成失败时，系统直接丢弃中间对话，而非保留原文，对长对话场景是致命打击。

**🟠 一般问题 (P2)**
- **[Issue #27228](https://github.com/NousResearch/hermes-agent/issues/27228)**: **xAI Grok-4.3 OAuth 配额消耗异常**。用户报告使用 SuperGrok 套餐 15 分钟即消耗了月度 7% 的配额，疑似计费或 Token 统计错误。
- **[Issue #27230](https://github.com/NousResearch/hermes-agent/issues/27230)**: **Telegram 网关只响应不输出结果**。Tool calling 后无最终反馈，导致交互挂起。

## 6. 功能请求与路线图信号
- **多云/多模型高可用**：[Issue #933](https://github.com/NousResearch/hermes-agent/issues/933) (Closed) 提出的“多 OAuth Token 自动降级”需求今日被再次激活，结合大量关于 Rate Limit 和 Quota 的 Bug 报告，表明**多账户负载均衡与降级策略**将是下一阶段的开发重点。
- **视觉多模态增强**：[Issue #27117](https://github.com/NousResearch/hermes-agent/issues/27117) 和 [Issue #27232](https://github.com/NousResearch/hermes-agent/issues/27232) 均指出视觉能力的短板（Qwen 视觉支持缺失、OpenAI Gateway 图片丢弃），**多模态支持**尤其是视觉输入的稳定性亟待提升。
- **企业级安全**：基于 Issue #21574 的热度，**权限隔离** 可能会被纳入正式路线图。

## 7. 用户反馈摘要
- **褒奖**：用户 @JuanDragin 在 [Issue #5563](https://github.com/NousResearch/hermes-agent/issues/5563) 中评价 Hermes 为“非凡的作品”，认为其 Skill 系统、持久化记忆和 Gateway 架构是目前“最有能力的 CLI AI Agent”，即便存在 Bug 也依然在生产环境中重度依赖。
- **痛点**：
    - **配置迁移**：用户对升级后配置文件丢失非常不满，认为应保留用户配置。
    - **成本控制**：xAI Grok 模型的高额配额消耗引发恐慌，用户对成本透明度表示担忧。
    - **网关稳定性**：Telegram 和 WhatsApp 网关的消息确认机制存在 Bug，导致用户体验断层。

## 8. 待处理积压
- **[Issue #27004](https://github.com/NousResearch/hermes-agent/issues/27004)**: **测试套件崩溃**。建议维护者优先修复 CI 问题，否则后续 PR 的质量无法保障。
- **[Issue #5563](https://github.com/NousResearch/hermes-agent/issues/5563)**: **记忆持久化与幻觉**。该 Issue 已持续较久，涉及 Token 浪费和状态损坏，是重度用户的核心痛点，尚未有明确修复方案。
- **[Issue #13484](https://github.com/NousResearch/hermes-agent/issues/13484)**: **Vertex AI 支持**。长期缺失的企业级功能，已有 4 个点赞，建议团队评估纳入排期。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-17)

## 1. 今日速览
PicoClaw 项目今日保持中等活跃度，发布了最新的 `v0.2.8` Nightly 构建版本，表明主分支正在持续迭代。社区方面，关于原生 Email 通道支持的讨论热度最高，同时 MCP 协议兼容性问题有了新的状态更新。代码提交方面，开发者主要聚焦于微信多账号配置、Web UI 交互优化以及 Agent 消息逻辑修复，虽有 3 个新 PR 提交，但今日无 PR 合并，整体处于功能积压与审核阶段。

## 2. 版本发布
- **版本号**: `nightly: Nightly Build`
- **Tag**: `v0.2.8-nightly.20260517.0df050ff`
- **说明**: 这是一个自动化的每日构建版本，基于 `main` 分支的 `v0.2.8` 之后提交构建。
- **注意事项**: 官方提示该版本可能不稳定，建议测试用户谨慎使用。完整的变更日志对比了 `v0.2.8` 与 `main` 分支的差异，涵盖了近期所有未发布的功能与修复。

## 3. 项目进展
今日无 PR 合并记录，但有多个功能性 PR 提交，项目正在向更完善的多平台支持与交互体验迈进：

- **微信生态增强**: 提交了 [PR #2883](sipeed/picoclaw PR #2883)，实现了微信多账号配置功能。该 PR 引入了动态识别 `weixin_*` 配置项的机制，并完善了前端管理界面。同时，同名的 [PR #2881](sipeed/picoclaw PR #2881) 已关闭，推测作者进行了分支重构或提交修正。
- **前端交互优化**: [PR #2882](sipeed/picoclaw PR #2882) 为 Web UI 的代码块增加了独立的复制与折叠控制，提升了长对话场景下的阅读体验。
- **核心逻辑修复**: [PR #2835](sipeed/picoclaw PR #2835) 修复了 Agent 在发送中间进度消息后可能抑制最终回复的问题，确保交互流程的完整性。

## 4. 社区热点
今日社区讨论焦点集中在通道支持与版本稳定性上：

- **原生 Email 通道需求**: [Issue #2421](sipeed/picoclaw Issue #2421) 继续引发讨论，作者 @aquaratixc 强调在保守或科研环境中 Email 的重要性。该 Issue 目前已有 6 条评论，社区对官方原生支持 Email 呼声较高。
- **v0.2.8 版本启动故障**: [Issue #2742](sipeed/picoclaw Issue #2742) 反映了升级到 v0.2.8 后网关无通道启动的严重问题，已有 4 条评论，用户 @keys4words 正在寻求解决方案，需关注是否为回归 Bug。
- **MCP 协议支持**: [Issue #2782](sipeed/picoclaw Issue #2782) 关于支持 Streamable HTTP transport 的请求今日被关闭。这通常意味着该功能已在计划中或已通过其他方式解决，值得开发者关注后续动态。

## 5. Bug 与稳定性
今日报告了两个值得注意的 Bug，涉及核心启动流程与移动端兼容性：

- **🔴 严重: v0.2.8 版本启动失败**
  - [Issue #2742](sipeed/picoclaw Issue #2742): 用户报告在 Ubuntu 环境下，v0.2.8 版本配置 Telegram 通道后网关启动无通道。环境涉及 Go 1.25.9 及特定 AI 模型。目前暂无 Fix PR 关联，需官方确认根因。
  
- **🟠 中等: Android 权限拒绝**
  - [Issue #2880](sipeed/picoclaw Issue #2880): 在 Android 10 (MIUI 12) 设备上，启动服务时因无法创建 `Downloads/picoclaw` 目录而失败。用户反馈即使授予存储权限仍报错，可能涉及 Android 分区存储策略适配问题。

## 6. 功能请求与路线图信号
- **Email 原生通道**: 鉴于 [Issue #2421](sipeed/picoclaw Issue #2421) 的高互动量，建议项目方考虑将 Email 接入纳入下一阶段路线图，以满足企业级用户需求。
- **微信多账号**: [PR #2883](sipeed/picoclaw PR #2883) 的提交表明项目正在积极补强国内生态，鉴于已有成熟 PR，预计该功能将很快合入主线。
- **升级引导**: [Issue #2834](sipeed/picoclaw Issue #2834) 反映出用户对从源码升级教程的需求，提示文档建设需跟进。

## 7. 用户反馈摘要
- **使用场景**: 用户 @aquaratixc 提出在无法使用即时通讯软件的企业与科研环境中，Email 是唯一的自动化通知渠道，痛点清晰。
- **升级困惑**: 用户 @Damian-o2 表示缺乏清晰的源码升级教程，导致更新困难。
- **移动端体验**: 用户 @coppo99 在旧版 Android 设备上遭遇权限壁垒，反映出 PicoClaw 在移动端旧系统的兼容性仍有提升空间。

## 8. 待处理积压
- [Issue #2421](sipeed/picoclaw Issue #2421) (Feature): 虽然活跃但自 4 月创建以来尚未有官方明确的 "Planned" 标签或 Assignee，建议维护者予以回应。
- [Issue #2742](sipeed/picoclaw Issue #2742) (Bug): 涉及最新版本的核心功能（通道启动），建议优先排查。
- [PR #2835](sipeed/picoclaw PR #2835): 修复 Agent 回复抑制问题的 PR 状态为 Open 且标记 Stale，建议维护者尽快 Review 以合并核心逻辑修复。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 (2026-05-17)

## 1. 今日速览
NanoClaw 项目今日保持高活跃度开发状态，社区反馈热烈。过去 24 小时内新增 5 个 Issues 和 8 个 PR 更新，显示项目正在快速迭代与修补漏洞。虽然无新版本发布，但核心开发者正集中精力解决容器稳定性、网络通信及安装体验问题。目前共有 6 个 PR 待合并，涉及健康监控、Agent 网络及关键 Bug 修复，显示出团队在功能扩展与系统鲁棒性之间寻求平衡。

## 2. 版本发布
**无**。
今日无新版本发布，项目主分支仍保持上一版本状态。考虑到待合并 PR 中包含多个重要修复（如 CLI 数据补全、技能分支过滤），预计近期可能会有累积更新版本发布。

## 3. 项目进展
今日共有 2 个 PR 被关闭（已完成处理），另有 6 个 PR 处于待合并状态，项目整体稳步推进：

*   **[已合并/关闭] Telegram 集成增强**：PR [#2515](https://github.com/nanocoai/nanoclaw/pull/2515) 虽标记为 Closed，但引入了对 Telegram 内联键盘按钮的支持。这增强了 Agent 与 Telegram 用户的交互能力，允许通过按钮而非纯文本进行交互。
*   **[已合并/关闭] 文档规范化**：PR [#2509](https://github.com/nanocoai/nanoclaw/pull/2509) 修正了 Changelog 的格式，提升了项目文档的专业度。
*   **[待合并] 健康监控体系完善**：PR [#2498](https://github.com/nanocoai/nanoclaw/pull/2498)、[#2505](https://github.com/nanocoai/nanoclaw/pull/2505) 和 [#2508](https://github.com/nanocoai/nanoclaw/pull/2508) 正在构建一套完整的健康监控与 Token 自动刷新机制。这套组合拳旨在解决静默失败和 OAuth Token 过期导致的 Agent 失效问题，显著提升系统无人值守运行能力。
*   **[待合并] Agent 网络**：PR [#2497](https://github.com/nanocoai/nanoclaw/pull/2497) 提出了 Agent Network 功能，预示着项目正向多 Agent 协作或网络化架构演进。

## 4. 社区热点
今日社区关注焦点集中在系统稳定性与部署问题上：

*   **数据静默丢失风险**：Issue [#2506](https://github.com/nanocoai/nanoclaw/issues/2506) 报告了 `send_message` 在高并发或流式处理场景下会静默丢弃响应。该 Issue 反响最大（1 条评论），反映了用户对 Agent 响应可靠性的核心关切。
*   **数据库持久化隐患**：Issue [#2516](https://github.com/nanocoai/nanoclaw/issues/2516) 指出容器被 SIGKILL 后可能导致日志文件损坏，影响投递可靠性，是运维层面的关键痛点。

## 5. Bug 与稳定性
今日报告的 Bug 涉及核心逻辑、数据安全及环境兼容性，严重程度分级如下：

*   **🔴 严重**:
    *   **响应静默丢失** ([#2506](https://github.com/nanocoai/nanoclaw/issues/2506))：在轮询间隔小于 60 秒或流式查询期间，Agent 响应可能被去重逻辑错误丢弃，导致客户端超时且无报错。目前暂无关联 Fix PR。
    *   **数据库日志损坏** ([#2516](https://github.com/nanocoai/nanoclaw/issues/2516))：容器非正常退出时，Bun 事务中断可能导致 `outbound.db-journal` 残留且无法恢复。
    *   **网络通信失败** ([#2512](https://github.com/nanocoai/nanoclaw/issues/2512))：默认安装下 OneCLI 与 Postgres 无法跨容器通信，导致数据库迁移失败。

*   **🟡 一般**:
    *   **macOS 证书问题** ([#2513](https://github.com/nanocoai/nanoclaw/issues/2513))：Colima 环境下 HTTPS 请求因证书问题失败，影响 API 调用。
    *   **安装卡死** ([#2514](https://github.com/nanocoai/nanoclaw/issues/2514))：Ubuntu 安装过程中 `needrestart` 弹窗导致流程挂起。

*   **修复进展**：
    *   PR [#2510](https://github.com/nanocoai/nanoclaw/pull/2510) 正在尝试修复 CLI 中的数据补全问题。
    *   PR [#2507](https://github.com/nanocoai/nanoclaw/pull/2507) 修复了版本分支匹配错误，防止旧版代码污染。

## 6. 功能请求与路线图信号
*   **健康监控自动化**：多个 PR ([#2498](https://github.com/nanocoai/nanoclaw/pull/2498), [#2505](https://github.com/nanocoai/nanoclaw/pull/2505), [#2508](https://github.com/nanocoai/nanoclaw/pull/2508)) 表明项目正在构建主动式健康监控体系，预计将成为下一阶段的重点特性。
*   **多 Agent 协作**：PR [#2497](https://github.com/nanocoai/nanoclaw/pull/2497) (Agent Network) 若合并，将标志着项目从单体 Agent 向网络化 Agent 架构转型。
*   **交互体验优化**：Telegram 按钮支持 ([#2515](https://github.com/nanocoai/nanoclaw/pull/2515)) 显示项目致力于提升终端用户的交互体验。

## 7. 用户反馈摘要
*   **部署门槛较高**：多个 Issues ([#2513](https://github.com/nanocoai/nanoclaw/issues/2513), [#2514](https://github.com/nanocoai/nanoclaw/issues/2514), [#2512](https://github.com/nanocoai/nanoclaw/issues/2512)) 反映在不同环境 下存在兼容性问题，用户对“开箱即用”的期望与当前配置复杂度之间存在差距。
*   **数据可靠性焦虑**：Issue #2506 中提到的“静默丢弃”让用户对生产环境的数据完整性感到担忧，建议开发者优先处理此类无感知故障。

## 8. 待处理积压
目前有 6 个待合并 PR，建议维护者优先关注以下积压项：

*   **PR [#2497](https://github.com/nanocoai/nanoclaw/pull/2497) (Feature/agent network)**：大型功能 PR，已开启 2 天，需尽快进行架构审查以免阻塞后续开发。
*   **PR [#2510](https://github.com/nanocoai/nanoclaw/pull/2510) (fix(cli))**：针对 CLI 数据处理的修复，直接影响用户操作，建议加快合并。
*   **Issue [#2506](https://github.com/nanocoai/nanoclaw/issues/2506)**：核心消息投递逻辑缺陷，目前处于 Open 状态，尚未见明确修复计划，建议提升优先级。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-17)

## 1. 今日速览
IronClaw 项目今日处于极高强度的开发迭代状态，核心团队正全力推进代号为 "Reborn" 的下一代架构重构。过去 24 小时内，项目共有 39 个 PR 更新与 15 个 Issue 更新，代码变更量巨大（仅 PR #3679 就涉及 +15,214 行代码），显示出架构重构正处于关键攻坚期。主要工作集中在构建生产级运行时组合、工具调用链路实现以及身份上下文策略。尽管暂无新版本发布，但大量基础设施代码已合并或处于待合并状态，预示着 Reborn 架构即将具备初步的生产可用性。

## 2. 版本发布
**无新版本发布。**
项目当前仍处于 Reborn 架构的密集开发阶段，尚未发布新的 Stable 版本。团队正通过堆叠式 PR (Stacked PRs) 逐步合入核心功能模块。

## 3. 项目进展
今日共有 15 个 PR 被合并或关闭，另有 24 个大型 PR 正在等待合并，整体进展显著：

*   **架构重构核心落地**：PR #3688（重构 ProductAdapter）与 #3710（Product-live AgentLoop 测试框架）已关闭，为后续工作奠定了基础。新的 PR #3695 已提交，旨在发布独立的 `ironclaw-reborn` 二进制文件，标志着 Reborn 架构即将具备独立的运行实体。
*   **生产环境适配**：PR #3717 解决了生产环境运行配置解析的问题（Fixes #3696），确保 Reborn 运行时能够正确加载配置。PR #3721 引入了基于运行配置的个人上下文策略，增强了多租户环境下的隔离性。
*   **工具调用能力完善**：PR #3722 修复了 Provider 工具调用的元数据保留问题，PR #3720 验证了持久化工具结果引用，这对实现 Agent 的长程记忆和多轮对话至关重要。
*   **基础设施大重构**：PR #3679 是今日变动最大的更新，将通用文件系统调度机制应用到所有消费者模块，虽然改动量达 1.5 万行，但风险被标记为 Medium，显示出团队对底层存储抽象的信心。

## 4. 社区热点
今日讨论主要集中在 Reborn 架构的身份管理与配置体系上：

*   **Issue #3692 [Reborn: 身份与心跳策略]**：该 Issue 引发了 4 条评论，讨论焦点在于如何在策略层面控制个人身份文件的上下文注入。这反映了社区对 Agent 长期记忆和身份一致性的重视。
    *   链接: [nearai/ironclaw Issue #3692](https://github.com/nearai/ironclaw/issues/3692)
*   **Issue #3036 [EPIC: Configuration-as-Code]**：作为长期规划的热点，该 Epic 旨在解决当前配置碎片化（.env, JSON, 手动编辑）的问题，寻求声明式的租户蓝图方案。
    *   链接: [nearai/ironclaw Issue #3036](https://github.com/nearai/ironclaw/issues/3036)
*   **PR #3722 [工具调用元数据保留]**：该 PR 旨在解决 Reborn 循环中工具往返元数据丢失的问题，对于依赖工具调用的复杂 Agent 任务至关重要。

## 5. Bug 与稳定性
今日报告了少量但关键的问题，主要集中在特定平台的运行时稳定性：

*   **P0 - 平台兼容性问题**：Issue #3701 报告 v0.28.2 版本在 macOS 上无法绑定 Gateway 端口，即便配置和 Doctor 检查均显示正常。这可能导致 macOS 用户无法正常使用本地 Gateway 功能。目前尚无修复 PR。
    *   链接: [nearai/ironclaw Issue #3701](https://github.com/nearai/ironclaw/issues/3701)
*   **P1 - CI/CD 不稳定**：Issue #3447 指出 Nightly E2E 测试失败，具体为 E2E features 测试失败。自动化测试的不稳定可能掩盖代码回归风险。
    *   链接: [nearai/ironclaw Issue #3447](https://github.com/nearai/ironclaw/issues/3447)
*   **安全性修复**：PR #3719 已提交修复，针对 `rustls-webpki` 的安全公告（RUSTSEC-2026-0104 等）进行了依赖升级，修复了潜在的安全漏洞。

## 6. 功能请求与路线图信号
从 Issues 和 PRs 的动态来看，Reborn 的路线图信号非常明确：

*   **生产级入口切换**：Issue #3616、#3700 和 #3699 标志着一连串的“生产环境切割”计划。目前的 Issue 显示团队正计划将 Web、CLI 和 Telegram 流量逐步切换到 Reborn 工作流。
    *   Issue #3699: [Reborn: roll product-live workflow to CLI, Telegram](https://github.com/nearai/ironclaw/issues/3699)
*   **内置 HTTP 工具**：PR #3681 添加了第一方 HTTP 出站工具，这意味着 IronClaw 原生支持 Agent 发起网络请求，极大地扩展了 Agent 的能力边界。
    *   PR #3681: [Add first-party HTTP egress tool](https://github.com/nearai/ironclaw/pull/3681)
*   **配置即代码**：PR #3703 正在为 Issue #3036 的史诗级功能铺路，重构 RebornRuntime 的输入接口，以便支持未来的租户蓝图谱。

## 7. 用户反馈摘要
*   **配置复杂性痛点**：Issue #3036 的描述中提到，现有配置方式需要手动混合编辑 `.env`、JSON 和 workspace 文档，缺乏 Schema 和审计追踪。这表明高级用户迫切需要更现代化、声明式的配置管理方案。
*   **工具调用深度需求**：Issue #3620 和 #3622 的讨论反映出深度用户对底层 Tool Call 协议的关注，他们希望确保工具调用的结果能够被正确持久化和引用，而不仅仅是简单的文本回复。
*   **平台运行问题**：Issue #3701 的用户反馈显示，即使是经过 Doctor 检查的正常配置，在 macOS 上依然遇到端口绑定失败，提示项目在跨平台二进制分发上可能存在边缘 Case。

## 8. 待处理积压
*   **Reborn 切换阻断器**：Issue #3026 标记为 `suggested_P0`，是 Reborn 全面切换的阻断项。该 Issue 要求添加配置驱动的生产组合根，目前已有 PR #3695 和 #3717 在处理相关逻辑，建议尽快 Review 并合并以解除阻断。
    *   链接: [nearai/ironclaw Issue #3026](https://github.com/nearai/ironclaw/issues/3026)
*   **Night E2E 测试失败**：Issue #3447 自 5月10日 创建以来一直未彻底解决，持续报告 Nightly 构建失败，建议团队分派专人排查测试框架的稳定性，以免影响 Reborn 合并进度的监控。
    *   链接: [nearai/ironclaw Issue #3447](https://github.com/nearai/ironclaw/issues/3447)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-17)

## 1. 今日速览
LobsterAI 项目今日呈现出**高提交密度、低社区反馈**的态势。核心开发团队专注于版本集成与功能迭代，成功合并了 `release/2026.5.15` 分支，标志着 **v2026.5.16** 版本代码冻结或即将发布。虽然代码层面活跃度极高（单日处理 10 个 PR），但社区端仅新增 1 例连接稳定性 Issue，且存在部分 3 月份遗留的修复 PR 尚未合并，提示项目在维护响应速度上存在一定积压。

## 2. 版本发布
**无正式 Release 发布**，但核心集成工作已完成：
- **进度更新**：PR #1998 已合并，将 `release/2026.5.15` 分支并入主分支，对应应用版本为 **2026.5.16**。
- **预期内容**：本次集成包含了 Artifacts 侧边栏预览、IM 入口引导、OpenClaw/Cowork 模块优化以及小米 MiMo 模型的推理修复。建议关注后续正式 Release Notes。

## 3. 项目进展
今日共有 10 个 PR 被合并/关闭，主要集中在模型适配、UI 优化与版本集成：

- **核心集成**：[PR #1998](https://github.com/netease-youdao/LobsterAI/pull/1998) 完成了 `release/2026.5.15` 向 `main` 的合并，包含产品修复、构建归因及 Artifacts UX 改进。
- **模型适配**：[PR #1994](https://github.com/netease-youdao/LobsterAI/pull/1994) 修复了 MiMo 模型在多轮对话中 `reasoning_content` 的处理逻辑，确保推理模型兼容性。
- **UI/UX 优化**：[PR #1996](https://github.com/netease-youdao/LobsterAI/pull/1996) 与 [PR #1995](https://github.com/netease-youdao/LobsterAI/pull/1995) 对 Dream UI 进行了持续优化。
- **模型配置**：[PR #1997](https://github.com/netease-youdao/LobsterAI/pull/1997) 更新了供应商的默认模型列表。
- **Bug 修复**：[PR #1992](https://github.com/netease-youdao/LobsterAI/pull/1992) 修复了模型列表中存在无效默认选项的 Bug。

## 4. 社区热点
今日社区互动较少，关注点集中在新报告的连接问题上：

- **[Issue #1993](https://github.com/netease-youdao/LobsterAI/issues/1993) - AI engine connection lost issue**
  - **热度**：新增 Issue，已有 1 条评论。
  - **分析**：用户报告桌面端应用频繁出现 "AI engine connection lost"，而 IM Bot 端连接稳定。这表明问题可能出在 Electron 客户端的长连接维持机制或本地进程守护上，而非服务端 API 问题。这是影响用户体验的关键阻断性问题。

## 5. Bug 与稳定性
今日新增 1 例严重功能性 Bug，未发现崩溃类报告：

- **🔴 [HIGH] AI 引擎连接丢失 ([Issue #1993](https://github.com/netease-youdao/LobsterAI/issues/1993))**
  - **现象**：桌面端直接使用时频繁断连，需重启应用尝试恢复。
  - **状态**：OPEN，暂无关联 Fix PR。
  - **影响**：阻断核心对话功能，严重影响桌面端可用性。

- **🟢 [FIXED] MiMo 模型多轮对话推理内容处理 ([PR #1994](https://github.com/netease-youdao/LobsterAI/pull/1994))**
  - 已合并，修复了特定模型返回推理内容时的逻辑错误。

## 6. 功能请求与路线图信号
从近期代码合并与积压 PR 中，可以观察到以下路线图信号：

- **模型生态扩展**：今日密集的 MiMo 模型修复（#1994）及默认配置更新（#1997）表明项目正在加强对国产模型（如小米 MiMo）的深度适配与支持。
- **导出能力增强（待定）**：[PR #789](https://github.com/netease-youdao/LobsterAI/pull/789) 提议增加会话导出（Markdown/PDF）能力，解决了用户留档和离线查看的痛点，但目前处于 Stale 状态，建议团队评估是否纳入近期迭代。
- **安全性与权限控制**：[PR #793](https://github.com/netease-youdao/LobsterAI/pull/793)（Skills 禁用修复）和 [PR #794](https://github.com/netease-youdao/LobsterAI/pull/794)（URL Scheme 白名单）虽然未合并，但反映出项目在 Agent 权限管控和安全防护方面的持续需求。

## 7. 用户反馈摘要
基于今日唯一的 Issue #1993，提炼用户痛点如下：
- **连接稳定性差异**：用户对桌面端与 IM 端的体验一致性有较高期待。桌面端的连接稳定性明显弱于 IM Bot，导致用户被迫切换使用场景，降低了客户端的信任度。
- **错误提示友好度**：当前错误提示 "Please retry... try restarting the app" 较为通用，缺乏对具体错误原因（如网络代理、进程崩溃）的诊断指引。

## 8. 待处理积压
以下长期未处理的 PR 均在今天有更新活动（可能为 Bot 自动标记），但仍未合并，建议维护者重点关注：

- **[PR #1766](https://github.com/netease-youdao/LobsterAI/pull/1766) [DEPENDENCY]**: Vite 版本升级 (5.4.21 -> 8.0.13)。大版本跨度的依赖升级，需谨慎测试兼容性，已 open 近一个月。
- **[PR #793](https://github.com/netease-youdao/LobsterAI/pull/793) [SECURITY/FIX]**: 防止已禁用的 Skills 仍被调用。涉及核心 Agent 逻辑的 P0 级 Bug 修复，建议尽快排期合并。
- **[PR #794](https://github.com/netease-youdao/LobsterAI/pull/794) [SECURITY]**: 添加 URL Scheme 白名单校验，防止恶意链接跳转。属于安全加固类 PR，建议纳入近期发布计划。
- **[PR #790](https://github.com/netease-youdao/LobsterAI/pull/790) [SECURITY]**: 移除硬编码的导出密码，改为用户自定义输入。解决潜在的 API Key 解密风险。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-17)

## 1. 今日速览
Moltis 项目今日保持中等活跃度，社区关注点集中在架构优化与前沿模型支持上。虽然无新版本发布，但代码库接收了 3 个重要的 PR 更新，其中涉及远程访问隧道和 GPT-5 推理能力的前瞻性支持。Issue 列表新增了一个关于多智能体编排的关键特性请求，指出当前 `spawn_agent` 在异步执行上的短板。总体而言，项目正在向更复杂的企业级部署场景和更强的模型推理能力演进。

## 2. 版本发布
无。

## 3. 项目进展
今日共有 3 个 PR 更新，显示出项目在基础设施和模型适配层面的持续迭代：

*   **PR #1003 [CLOSED] feat(skills): add agent system builder skill** — 作者: @kyungw00k
    *   **链接:** [moltis-org/moltis PR #1003](https://github.com/moltis-org/moltis/pull/1003)
    *   **进展:** 该 PR 试图引入一个用于设计多用户、多通道分布式智能体系统的 `build-agent-systems` 技能，但已于今日关闭（未合并）。这可能意味着该功能的实现方案被驳回或需重构，分布式系统构建能力的引入暂时搁置。

*   **PR #1002 [OPEN] feat(remote-access): add NetBird and Cloudflare Tunnel support** — 作者: @penso
    *   **链接:** [moltis-org/moltis/pull/1002](https://github.com/moltis-org/moltis/pull/1002)
    *   **进展:** 这是一个功能量较大的 PR，旨在增强远程访问能力。通过集成 NetBird 私有网格和 Cloudflare Tunnel，项目有望解决复杂网络环境下的部署问题，提升企业私有化部署的易用性。目前处于待合并状态。

*   **PR #1005 [OPEN] feat(openai-codex): add reasoning effort support** — 作者: @PeterDaveHello
    *   **链接:** [moltis-org/moltis/pull/1005](https://github.com/moltis-org/moltis/pull/1005)
    *   **进展:** 该 PR 跟进了 OpenAI Codex/GPT-5 系列模型的最新特性，增加了对 `reasoning_effort` 参数的支持，并处理了推理内容的加密逻辑。这表明 Moltis 正积极适配新一代大模型的深度推理能力。

## 4. 社区热点
今日社区互动数据较为平淡（评论数为 0 或 undefined），但以下 Issue 代表了新的关注度：

*   **Issue #1004 [Feature]: Non-blocking spawn_agent** — 作者: @dmitriikeler
    *   **链接:** [moltis-org/moltis Issue #1004](https://github.com/moltis-org/moltis/issues/1004)
    *   **分析:** 尽管暂无评论，该 Issue 的提出直接切中了多智能体协作的痛点。作者指出当前 `spawn_agent` 会阻塞父会话，导致在长时间子任务运行期间主交互不可用。这是用户对智能体并发能力与实时响应性的强烈诉求。

## 5. Bug 与稳定性
今日未收到关于系统崩溃、严重回归或功能性 Bug 的报告。Issue #1004 属于功能增强请求而非错误报告，显示出现有版本在基础稳定性上表现尚可。

## 6. 功能请求与路线图信号
*   **异步多智能体架构:**
    Issue #1004 提出的 `Non-blocking spawn_agent` 暗示用户正尝试构建更复杂的实时交互应用。若此功能被采纳，将极大提升 Moltis 在多任务并发场景下的用户体验。
*   **企业级网络部署:**
    PR #1002 展示了对 NetBird 和 Cloudflare Tunnel 的支持，信号表明项目方正致力于降低内网穿透和零信任网络访问的门槛，预计这将很快合入主分支，成为下一阶段的重点特性。

## 7. 用户反馈摘要
根据今日唯一的 Issue (#1004)，核心用户反馈如下：
*   **痛点:** 在涉及子智能体长时间运行时，父会话被阻塞，无法继续响应，导致交互体验中断。
*   **诉求:** 用户希望实现“即发即弃”或“后台运行”模式，保持父会话的活跃度和响应性，这是迈向成熟多智能体系统的重要一步。

## 8. 待处理积压
*   **PR #1002 (feat(remote-access))** 和 **PR #1005 (feat(openai-codex))** 目前均为 Open 状态，且功能重要。鉴于今日无合并记录，建议维护者尽快 review 这两个关键 PR，以推进功能迭代速度。
*   **Issue #1004** 作为架构级功能请求，可能需要核心团队进行深入设计，需关注是否会被纳入 Roadmap 或引发更多社区讨论。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-05-17)

## 1. 今日速览
CoPaw 项目今日保持高活跃度，社区互动频繁，过去 24 小时内新增/活跃 Issue 10 条，PR 更新 13 条。项目当前处于快速迭代与稳定性修复并行的阶段，开发者重点聚焦于解决长期存在的 Workspace 数据获取与跨平台路径问题，今日成功合并了 4 项关键修复。然而，社区反馈中出现了关于运行时事件循环崩溃和 TPM 限流导致消息队列清空的严重问题，值得核心团队立即关注。整体来看，项目在后端架构解耦与多渠道交互体验上正在持续投入精力。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 4 个 PR 合并/关闭，主要集中在稳定性修复与遗留数据迁移，显著提升了系统健壮性：
*   **Workspace 稳定性增强**：合并 [PR #1661](agentscope-ai/QwenPaw PR #1661)，修复了 Agent 无法按 ID 获取每日记忆文件的 Bug，纠正了之前错误调用全局 Memory API 的问题；合并 [PR #1669](agentscope-ai/QwenPaw PR #1669)，修复了 Windows 等系统下路径分隔符识别错误导致 Workspace 路径无限加载的问题。
*   **数据迁移优化**：合并 [PR #3605](agentscope-ai/QwenPaw PR #3605)，集中处理了 WeChat/Weixin 标识符重命名后的遗留数据迁移，减少了运行时的不一致性。
*   **渠道体验优化**：合并 [PR #3246](agentscope-ai/QwenPaw PR #3246)，为 QQ 渠道增加了可配置的“即时确认消息”，弥补了 QQ 缺少原生输入提示的体验短板。

## 4. 社区热点
今日社区关注点集中在运行时稳定性与交互体验优化：
*   **[Issue #4453](agentscope-ai/QwenPaw Issue #4453)**：用户报告聊天窗口无响应且后端报错 `RuntimeError: Event loop stopped`，该问题导致 Docker 重启或回退版本均无效，是当前影响使用的最高优先级问题。
*   **[Issue #4449](agentscope-ai/QwenPaw Issue #4449)**：讨论了模型触发 429 限流后，`zero_downtime_reload` 机制导致消息队列被意外清空，致使 Agent “冻结”的严重设计缺陷，引发了关于消息持久化策略的讨论。
*   **[Issue #4450](agentscope-ai/QwenPaw Issue #4450) & [Issue #4451](agentscope-ai/QwenPaw Issue #4451)**：社区提出了简化审批命令（增加 session/always 作用域）以及在 Telegram/QQ 增加 Interactive Buttons 的功能请求，反映出用户对移动端交互便捷性的强烈需求。

## 5. Bug 与稳定性
今日报告了多个影响核心流程的 Bug，按严重程度排序如下：
1.  **[P0] 运行时崩溃与无响应** [Issue #4453](agentscope-ai/QwenPaw Issue #4453)：事件循环在 Future 完成前意外停止，导致前端一直处于“跳动的三个点”状态，后端服务不可用。目前暂无修复 PR。
2.  **[P0] 消息队列丢失** [Issue #4449](agentscope-ai/QwenPaw Issue #4449)：在模型限流触发重载时，Pending 消息被清空，导致用户请求“石沉大海”。涉及核心架构逻辑，暂无修复 PR。
3.  **[P1] 上下文压缩失败** [Issue #4448](agentscope-ai/QwenPaw Issue #4448) & [Issue #4447](agentscope-ai/QwenPaw Issue #4447)：长对话中频繁出现 `invalid format (missing ## header)` 错误，影响长期记忆功能。
4.  **[P2] Shell 执行挂起** [PR #4173](agentscope-ai/QwenPaw PR #4173)（Open）：已提交修复 PR，解决 Unix 下启动后台进程导致工具超时挂起的问题，目前等待合并。

## 6. 功能请求与路线图信号
*   **轻量级目标模式**：用户请求增加 `/goal` 指令以设定会话目标（[Issue #4442](agentscope-ai/QwenPaw Issue #4442)），维护者 @suntp 迅速响应并提交了实现 PR [PR #4443](agentscope-ai/QwenPaw PR #4443)，预计近期合并。
*   **架构解耦**：[Issue #4445](agentscope-ai/QwenPaw Issue #4445) 提出解耦 Runner 包的依赖，对应的修复 PR [PR #4446](agentscope-ai/QwenPaw PR #4446) 已提交，旨在解决部分开发环境下的导入问题，显示项目正朝更模块化方向演进。
*   **新模型支持**：[PR #4444](agentscope-ai/QwenPaw PR #4444) 提交了 xAI OAuth 认证与 Grok 模型的集成，表明项目正在积极扩展 LLM Provider 生态。

## 7. 用户反馈摘要
*   **痛点**：Docker 部署后的稳定性是最大痛点，尤其是 Event loop 崩溃和消息队列丢失问题，直接影响生产环境可用性。此外，上下文压缩的格式兼容性问题困扰部分深度用户。
*   **场景**：用户广泛使用多渠道（微信、QQ、Telegram），并希望在这些渠道上获得更接近原生 App 的交互体验（如审批按钮）。
*   **满意点**：社区对 `/goal` 等轻量级功能的提议反应积极，认为这在不增加复杂性的前提下提升了 Agent 的可控性。

## 8. 待处理积压
*   **[PR #2771](agentscope-ai/QwenPaw PR #2771)**：关于 `mlx-lm` 在 Apple Silicon macOS 上的安装限制修复，该 PR 自 4 月 1 日开启至今未合并，可能阻碍了部分 Mac 用户的本地模型部署体验。
*   **Cron 稳定性系列 PR**：[PR #4303](agentscope-ai/QwenPaw PR #4303)、[PR #4084](agentscope-ai/QwenPaw PR #4084)、[PR #4223](agentscope-ai/QwenPaw PR #4223) 均涉及 Cron 任务的状态泄漏和僵尸会话问题，虽已提交数日，但考虑到 Issue #4449 反映的消息丢失风险，建议维护者优先审查并合并这些 PR 以增强后台任务调度的鲁棒性。

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