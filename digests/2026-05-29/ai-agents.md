# OpenClaw 生态日报 2026-05-29

> Issues: 373 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-05-29 03:54 UTC

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

# OpenClaw 项目动态日报 (2026-05-29)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，共处理了 373 条 Issue 更新（闭合率约 54%）和 500 条 PR 更新。项目发布了 **v2026.5.27** 正式版与 Beta 版，重点强化了安全边界与内容安全策略。社区方面，用户对近期版本引入的 Native Hook Relay 不稳定及 Windows 平台事件循环阻塞问题反馈强烈，维护者正积极修复回归 Bug 并推进 GitHub Copilot 集成等重大功能。整体来看，项目迭代速度极快，但稳定性测试（特别是跨平台与升级兼容性）面临挑战。

## 2. 版本发布
** Releases: v2026.5.27 & v2026.5.27-beta.1**

本次更新主要聚焦于安全与边界控制，未提及破坏性变更，但建议用户关注以下迁移注意事项：
- **安全加固**：增强了内容边界，防止组提示文本泄露到系统提示中；标准化了重复点号的主机名。
- **执行保护**：阻断了带有副作用的命令包装器和不安全的 Node 运行时环境覆盖。
- **网络限制**：拒绝了无认证的 Tailscale 暴露，强化了节点/设备角色的批准机制。
- **建议**：升级前请检查现有的 Command Wrapper 配置及 Tailscale 相关网络设置，以免被新的安全策略阻断。

## 3. 项目进展
今日合并与关闭的重要 PR 推动了多个关键领域的进展：
- **[Merged] PR #87871 (fix: retry transient recurring cron failures)**：优化了定时任务的重试逻辑，解决了瞬态错误导致任务失败的问题，提升了自动化任务的健壮性。
- **[Merged] PR #87836 (feat: improve cron create delivery ergonomics)**：改进了 Cron 任务的创建参数解析，提升了 CLI 的易用性。
- **[Open] PR #86155 (feat(copilot): add GitHub Copilot agent runtime)**：正在推进集成 GitHub Copilot Agent Runtime，这将是 OpenClaw 在多模型后端支持上的重大突破。
- **[Open] PR #85651 (feat(continuation): context-pressure-aware continuation)**：引入了上下文压力感知的续写机制，旨在解决长对话中的上下文溢出与工具调用中断问题。
- **[Open] PR #87872 (Fix Codex zero-cost usage accounting)**：修复了 Codex 模型用量统计归零的问题，确保计费与监控的准确性。

## 4. 社区热点
今日讨论最活跃的议题集中在稳定性回归与功能缺失上：
- **[Issue #87331](https://github.com/openclaw/openclaw/issues/87331) [CLOSED]**：**Native hook relay 不可用**。用户报告升级至 v5.26 后工具调用失败，评论数达 17 条。虽然已关闭，但引发了大量关于 Relay 机制稳定性的讨论。
- **[Issue #86599](https://github.com/openclaw/openclaw/issues/86599) [OPEN]**：**Windows 平台事件循环阻塞**。本地模型调用会导致 Gateway 阻塞数分钟，严重影响 Windows 用户的使用，被标记为 Beta 阻塞问题。
- **[Issue #69208](https://github.com/openclaw/openclaw/issues/69208) [OPEN]**：**跨渠道上下文重复问题**。这是一个长期存在的架构性问题，涉及消息转录和上下文组装的逻辑，社区期待彻底的重构方案。
- **[Issue #87646](https://github.com/openclaw/openclaw/issues/87646) [OPEN]**：**飞书 升级后崩溃**。v2026.5.27 导致飞书渠道无法分发消息，报错 `TypeError`，这是今日最紧急的新回归问题。

## 5. Bug 与稳定性
今日报告的 Bug 中，以下问题需按优先级关注：

**Critical (P1) / 回归问题：**
- **[Issue #87646](https://github.com/openclaw/openclaw/issues/87646)**：飞书渠道在 v2026.5.27 升级后消息分发失败，报错 `TypeError: Cannot read properties of undefined`。目前尚无 Fix PR，影响范围较广。
- **[Issue #86599](https://github.com/openclaw/openclaw/issues/86599)**：Windows 下本地模型调用阻塞 Gateway 事件循环。尚无 Fix PR，严重影响 Windows 用户体验。
- **[Issue #87331](https://github.com/openclaw/openclaw/issues/87331)**：Native hook relay 间歇性不可用。已关闭，疑似已在最新版修复。

**High (P1) / 功能缺陷：**
- **[Issue #75593](https://github.com/openclaw/openclaw/issues/75593)**：子代理 列表在生成后仍为空。尚无 Fix PR，影响多智能体协作。
- **[Issue #48003](https://github.com/openclaw/openclaw/issues/48003)**：Steer 模式无法在会话中途注入消息。

**Medium / 体验问题：**
- **[Issue #73148](https://github.com/openclaw/openclaw/issues/73148)**：Image tool 在未安装 `sharp` 时报错提示晦涩，建议增加依赖检测提示。

## 6. 功能请求与路线图信号
- **[PR #82596](https://github.com/openclaw/openclaw/pull/82596) Feature/exec denylist**：提出了 Exec 指令黑名单功能，填补了"全允许"与"逐次审批"之间的安全策略空白，可能很快合入主分支。
- **[PR #40311](https://github.com/openclaw/openclaw/pull/40311) feat(web-search): expose Brave Goggles**：请求支持 Brave Search 的自定义过滤与排名规则，增强搜索工具的可控性。
- **[Issue #24943](https://github.com/openclaw/openclaw/issues/24943)**：请求 iMessage 发送前剥离 Markdown 语法，因为 iMessage 不支持渲染。这是一个长期存在的体验优化需求。

## 7. 用户反馈摘要
- **升级需谨慎**：多用户反馈从 v5.26 升级到 v5.27 过程中出现严重问题（如飞书崩溃、Relay 失效），建议在非生产环境充分测试后再升级。
- **Windows 支持待完善**：Windows 平台的本地模型运行稳定性远不如 macOS/Linux，主要表现为阻塞和性能瓶颈。
- **工具调用是核心痛点**：Native hook relay 相关的报错频繁出现，用户对工具执行层面的稳定性表现出极高的敏感度。
- **计费与监控**：用户关注 Codex 模型的成本统计问题，表明在企业级应用中对 Token 消耗监控有强需求。

## 8. 待处理积压
- **[Issue #54155](https://github.com/openclaw/openclaw/issues/54155)**：**Gateway 内存泄漏**。长时间运行（4天）后内存从 389MB 暴涨至 14.7GB，严重影响长期部署的稳定性，急需官方关注。
- **[Issue #69208](https://github.com/openclaw/openclaw/issues/69208)**：**跨渠道消息重复与上下文组装错误**。作为 Umbrella Issue，该问题涉及底层架构，需持续跟进修复进度。
- **[Issue #60841](https://github.com/openclaw/openclaw/issues/60841)**：**toolsAllow 无法重新暴露核心工具**。这是一个安全策略层面的 Bug，影响特定场景下的权限控制。

---

## 横向生态对比

# 开源 AI 智能体生态横向对比分析报告 (2026-05-29)

## 1. 生态全景
个人 AI 助手与自主智能体开源生态正处于从“功能爆发”向“工程化夯实”转型的关键期。**安全性与控制权**（如沙箱隔离、凭证管理）已取代单纯的功能堆砌成为竞争焦点，各项目纷纷强化对危险操作的管控。**多模型支持与路由**不再是加分项而是生存刚需，社区对单一供应商锁定风险表现出极高的警惕性。**稳定性回归**成为今日主旋律，多个头部项目因新版本发布引发严重 Bug，导致维护团队不得不紧急分流精力修补回归问题，显示出生态整体仍处于快速迭代带来的震荡期。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新 | 版本发布 | 健康度评估 | 核心动态关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 373 | 500 | v2026.5.27 | ⚠️ 高负载/回归风险 | 安全加固、Copilot集成、Windows阻塞 |
| **Hermes Agent** | 50 | 50 | v0.15.0, v0.15.1 | ⚡️ 极速迭代/震荡 | Velocity发布、Dashboard崩溃、RBAC需求 |
| **IronClaw** | 29 | 50 | 无 (筹备v0.29.0) | 🛡️ 安全聚焦/重构 | Reborn架构、凭证安全、WeCom验证 |
| **CoPaw** | 39 | 39 | 无 | 🛠️ 体验优化 | 桌面端修复、AgentScope 2.0迁移 |
| **Zeroclaw** | 10 | 23 | 无 | 🚧 集成冲刺 | v0.8.0-beta-2、Slack阻断、沙箱RFC |
| **NanoBot** | - | 9 | 无 | ✅ 优秀/稳健 | 架构修复、WebUI工作区、生态拓展 |
| **PicoClaw** | 2 | 32 | v0.2.9-nightly | 📈 扩展期 | OpenAI格式支持、RISC-V适配 |
| **LobsterAI** | 1 | 17 | 无 | 🚀 产品化 | Kit商店、插件系统优化 |
| **NanoClaw** | - | 4 | 无 | 🔧 稳定性维护 | 多模型支持、WhatsApp修复 |
| **NullClaw** | - | 12 | 无 | 🧹 高效清理积压 | Telegram修复、新Provider支持 |
| **Moltis** | - | 4 | 无 | 🛡️ 质量巩固 | Discord语音、Cron修复 |
| **EasyClaw** | 0 | 0 | v1.8.18 | 📦 基建完善 | macOS签名公证 |
| **TinyClaw** | 0 | 0 | 无 | 🏚️ 静默 | 无活动 |
| **ZeptoClaw** | 0 | 0 | 无 | 🏚️ 静默 | 无活动 |

## 3. OpenClaw 在生态中的定位
**定位：企业级全栈参考实现与生态核心枢纽。**
- **优势**：OpenClaw 拥有生态中最高的社区吞吐量（500 PR 更新），功能覆盖面最广（从 Tailscale 网络集成到 Copilot 运行时），是企业级部署的首选参考。
- **技术路线差异**：相比 NanoBot 的“小而美”精工路线，OpenClaw 采取“大而全”的快速迭代策略，但也因此背负了较重的稳定性包袱（如 Windows 平台阻塞、飞书渠道崩溃）。相比 Hermes 的激进架构重构，OpenClaw 更侧重于在现有架构上修补安全边界。
- **社区规模对比**：OpenClaw 的 Issue/PR 数量级显著高于其他项目，是当前生态的流量中心，但其 P0 级 Bug 的响应速度面临挑战，需警惕因质量下滑导致的社区信任流失。

## 4. 共同关注的技术方向
多项目共同涌现的需求反映了行业痛点：

1.  **多模型路由与去锁定化** (NanoClaw, PicoClaw, NullClaw, Zeroclaw)
    - **诉求**：NanoClaw 社区强烈要求支持 Gemini/OpenCode 以规避 Anthropic 封禁风险；PicoClaw 与 NullClaw 均新增了 NEAR AI/OpenAI 等 Provider。
    - **趋势**：AI 智能体正在从“单一模型外壳”进化为“模型无关的编排层”，低成本模型路由（如 Zeroclaw 提出的意图分类路由）成为降本刚需。

2.  **精细化安全沙箱与权限控制** (OpenClaw, Zeroclaw, IronClaw, NanoClaw)
    - **诉求**：Zeroclaw 提出 Landlock/Bubblewrap 细粒度沙箱 RFC；OpenClaw 阻断不安全命令包装；IronClaw 强化凭证边界。
    - **趋势**：简单的“允许/禁止”已无法满足需求，社区正转向基于策略的执行控制，以解决 Agent 自主性与系统安全之间的矛盾。

3.  **上下文压力与记忆管理** (NanoBot, CoPaw, OpenClaw)
    - **诉求**：NanoBot 出现上下文压力感知 PR；CoPaw 提出总结-关联记忆机制；OpenClaw 讨论跨渠道上下文重复问题。
    - **趋势**：随着对话长度增加，“遗忘”与“压缩”成为核心技术瓶颈，上下文溢出导致的工具调用中断是共性问题。

## 5. 差异化定位分析

- **功能侧重**：
    - **OpenClaw & IronClaw**：侧重**企业级网关与安全**，集成飞书、企业微信，强调多租户与权限。
    - **Hermes & Zeroclaw**：侧重**前沿架构与性能**，如 TUI 重构、Velocity 发布，吸引极客与早期采用者。
    - **NanoBot & NullClaw**：侧重**运行时稳定性**，关注会话管理、协议适配，适合作为底层 SDK。
    - **CoPaw & LobsterAI**：侧重**产品化与易用性**，如桌面端体验、技能商店，面向终端用户。
    - **PicoClaw**：侧重**边缘与硬件兼容**，关注 RISC-V 与轻量化部署。

- **技术架构**：
    - **Electron/Tauri 桌面派** (CoPaw, EasyClaw, Hermes)：面临原生环境配置与打包签名痛点。
    - **Go/Rust 高性能派** (Zeroclaw, IronClaw)：利用系统级特性实现沙箱与高性能 IO，但开发门槛高。
    - **Python/Node 胶水层派** (OpenClaw, NanoBot)：生态丰富，便于快速集成各类 LLM SDK，但在并发与稳定性上需额外投入。

## 6. 社区热度与成熟度

- **快速迭代期**：
    - **OpenClaw, Hermes Agent**：处于功能密集发布阶段，社区极度活跃，但 Bug 数量随代码量激增，需警惕“发布-回滚”的恶性循环。
    - **Zeroclaw**：处于大版本发布前夕，集成压力大，出现了 S1 级阻塞性 Bug，处于风险高发期。

- **质量巩固期**：
    - **NanoBot, NullClaw, Moltis**：PR 合并以修复为主，不再盲目增加新功能，社区反馈处理高效，项目成熟度高，适合生产环境接入。

- **产品化探索期**：
    - **LobsterAI, CoPaw**：正从技术工具向产品转型，关注 UI/UX、打包分发和插件生态，社区讨论集中在具体使用场景（如定时任务、桌面交互）。

## 7. 值得关注的趋势信号

1.  **“桌面端”体验成为新战场，但工程短板暴露无遗**
    - CoPaw、EasyClaw、Hermes 均在今日处理桌面端特有的痛点：Windows 环境变量丢失、CMD 弹窗干扰、macOS 签名公证。这表明 Agent 正从云端/CLI 走向本地桌面，但跨平台分发与系统集成的复杂度远超预期，是开发者需重点投入的基础设施领域。

2.  **上下文工程替代 Prompt Engineering 成为新焦点**
    - 社区不再仅仅讨论“如何写 Prompt”，而是讨论“如何管理上下文窗口压力”。NanoBot 的压力感知 PR 和 CoPaw 的记忆增强提案表明，解决长对话中的 Token 溢出与记忆丢失是迈向 AGI 的关键一步，单纯依靠 LLM 自身能力已不足够。

3.  **沙箱安全成为“生产就绪”的一票否决项**
    - Zeroclaw 的沙箱 RFC 和 OpenClaw 的安全加固表明，没有完善的文件系统/网络隔离方案，Agent 将无法获得企业信任。开发者应关注 Landlock、Bubblewrap 等底层安全技术的应用，而非仅停留在 API 层面的权限控制。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 - 2026年05月29日

## 1. 今日速览
NanoBot 项目今日保持极高的开发活跃度，核心团队与社区贡献者协同高效，单日完成了 **9 个 PR 的合并**，显著提升了系统的稳定性与功能完整度。最引人注目的是，核心贡献者 @hamb1y 提交的修复 PR 一举解决了 5 个并发与会话管理相关的关键 Bug，展现了极强的工程治理能力。功能层面，WebUI 迎来了类似 Codex 的项目工作区支持，社区也涌现出第三方 WebUI 管理面板等生态拓展，项目整体健康度优秀，正处于功能迭代与稳定性打磨并重的快速发展期。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目进展显著，主要集中在核心架构的缺陷修复与 WebUI 的功能增强，具体合并情况如下：

- **核心架构修复 (关键进展):**
  - **PR #4041** [MERGED]: 修复了 5 个严重的并发与会话 Bug ([#4036](HKUDS/nanobot Issue #4036), [#4037](HKUDS/nanobot Issue #4037), [#4038](HKUDS/nanobot Issue #4038), [#4039](HKUDS/nanobot Issue #4039), [#4040](HKUDS/nanobot Issue #4040))。解决了流式重试导致的内容重复、上下文截断预算计算错误、`/stop` 指令在统一会话下失效等核心问题，极大提升了 Agent 运行时的稳定性。
  - **PR #4023** [MERGED]: 重构心跳服务，将其迁移至基于 Cron 的自动注册机制，减少了基础设施的依赖，优化了后台任务架构。
  - **PR #4015** [MERGED]: 在工具执行后增加了观察-反思机制，旨在以最小代价实现 Agent Loop 的自循环优化，提升了 Agent 的推理能力。

- **功能增强:**
  - **PR #4007** [MERGED]: WebUI 增加 Codex 风格的项目工作区与访问控制功能，允许聊天绑定项目文件夹，显著改善了多项目管理体验。
  - **PR #4032** [MERGED]: 新增可选的 `AUTHORITY.md` 引导文件，允许用户注入高优先级的道德或行为规范，增强了 Agent 的可定制性与安全性。
  - **PR #3937** [MERGED]: 实现了危险命令的用户确认机制，防止 Agent 执行破坏性操作，提升了执行层面的安全性。
  - **PR #4031** [MERGED]: 为 Discord 频道增加了 `/model` 原生斜杠命令，方便用户切换运行时模型。

## 4. 社区热点
今日社区讨论焦点集中在生态拓展与用户体验优化：

- **Issue #1922** [CLOSED]: 社区成员 @Good0007 发布了第三方 **[nanobot-webui](https://github.com/Good0007/nanobot-webui)** 管理面板，支持多用户、实时聊天及配置管理。该 Issue 获得了 **12 条评论** 和 **10 个点赞**，反映出用户对易用性管理工具的强烈需求。
- **Issue #4044** [OPEN]: 关于 Agent "短期记忆丧失" 的问题引发了讨论。用户反馈在多轮对话中 Bot 会突然丢失上下文，推测与 Context Window 压力或 Prompt 注入策略有关。这反映了用户对长上下文记忆机制的痛点。
- **Issue #2772** [CLOSED]: 关于微信渠道消息返回数量限制（10条）的讨论，凸显了特定即时通讯平台对接时的技术瓶颈。

## 5. Bug 与稳定性
今日报告并处理了大量 Bug，整体稳定性通过 PR #4041 得到质的飞跃：

- **严重:**
  - **Issue #4036 ~ #4040**: 涉及并发会话上下文覆盖、流式输出重复、任务无法取消等严重问题。**状态：已由 PR #4041 修复并合并。**
- **中等:**
  - **Issue #4044**: Agent 在对话中出现短期记忆丢失，影响多轮对话连贯性。**状态：Open，待复现与修复。**
  - **Issue #4038**: 流式重试导致已发出的增量内容重复。**状态：已修复。**
- **轻微:**
  - **Issue #4042**: Matrix 频道因未处理 `m.key.verification.*` 事件导致客户端显示设备未验证警告。**状态：Open，标记为 `good first issue`。**
  - **Issue #4040**: 统一会话模式下 `/stop` 指令失效。**状态：已修复。**

## 6. 功能请求与路线图信号
从 Issue 与 PR 动态来看，项目正在向更灵活的配置与生态化发展：

- **配置灵活性:**
  - **Issue #4043** 建议增加禁用文档自动提取的配置开关，避免不必要的 Token 消耗。**PR #4049** 已响应此需求，添加了 `channels.extractDocumentText` 开关，目前状态为 Open。
- **生态扩展:**
  - **PR #4046** 提议建立 NanoBot 扩展注册中心，引入外部技能源，目前状态为 Open。
  - **PR #4034** 提议支持 GitAgent 协议，实现 Agent 的可移植性，目前状态为 Open。
- **多 Agent 协作:**
  - **PR #3992** 提出跨实例消息总线，支持多 Agent 通信，这是迈向多 Agent 架构的重要信号，目前状态为 Open。

## 7. 用户反馈摘要
- **痛点:** 用户对 **Context Window (上下文窗口) 的管理** 非常敏感。Issue #4044 和 #4043 均指出，当文档或历史记录较长时，Bot 容易遗忘指令或注入过多无关信息，导致 Token 浪费和回复质量下降。
- **满意度:** 对 WebUI 的更新（PR #4007）反响积极，特别是项目工作区的加入解决了多任务切换的痛点。
- **场景:** 用户正在尝试将 NanoBot 接入更多非标准客户端（如 Element X），对协议层的兼容性提出了更高要求。

## 8. 待处理积压
以下重要 Issue/PR 需引起维护者关注：

- **PR #3992** (feat(agent-collab)): 跨 Agent 消息功能已提交数日，处于 Open 状态，这是一个较大的架构变动，建议尽快安排 Review。
- **PR #3994** (refactor: registry-driven provider config): 重构 Provider 配置逻辑，涉及核心 API 变更，目前处于 Open 状态。
- **Issue #4044**: 记忆丢失问题目前仅有个别用户反馈，但影响用户体验核心，建议优先确认是否为回归问题。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-05-29)

## 1. 今日速览
Zeroclaw 项目今日保持高强度的开发迭代，虽然未发布新版本，但代码库活跃度极高。过去 24 小时内 PR 更新达 23 条，其中 20 条处于待合并状态，显示开发团队正集中精力推进 v0.8.0-beta-2 的集成工作。与此同时，社区反馈活跃，新增 10 条 Issues，重点聚焦于 TUI 用户体验优化与运行时安全策略。值得关注的是，出现了 Slack 通道严重的 S1 级阻断性 Bug，维护者需优先响应。整体来看，项目正处于功能密集合并期，但需警惕随之而来的稳定性风险。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 3 个 PR 关闭/合并，另有大量核心功能 PR 处于待合并状态，显著推进了以下领域：

*   **核心功能增强**：
    *   PR #5650 关闭，标志着 **Anthropic Provider 支持原生扩展思考** 功能已集成，允许通过 `budget_tokens` 配置推理链，提升了模型推理能力。
    *   PR #6908 关闭，修复了 OpenAI Provider 的 Codex 订阅认证问题，扩展了用户接入方式。
    *   PR #6994 关闭，修正了 Slack 通道中 `strict_mention_in_thread` 的默认行为，统一了消息提及规则。

*   **v0.8.0-beta-2 集成冲刺**：
    *   PR #6848（巨型集成 PR）正在寻求首轮反馈，包含 Zerocode TUI、RPC socket 传输层及 Beta-2 的集成工作。这是当前开发的重中之重，将重构项目布局（如 Issue #6821 提到的 TUI 迁移）。
    *   PR #6945 提出了针对 Agent 回复意图分类的廉价模型路由方案，旨在降低运营成本。
    *   PR #6957 引入了 `file_download` 工具，完善了 Agent 对远程文件的获取能力。

*   **架构优化**：
    *   PR #6907 引入了 `MemoryStrategy` trait，开始解耦内存生命周期策略与底层 CRUD 操作，为后续更复杂的记忆管理铺路。

## 4. 社区热点
今日讨论最活跃、影响深远的 Issue 和 PR 如下：

*   **[Issue #6992] Slack Socket Mode 全面阻断**：
    这是一个 S1 级别的严重问题，Slack 通道拒绝所有消息并报 "unauthorized user"。鉴于 Slack 是核心沟通渠道之一，此问题引发了高优先级关注，目前尚无修复 PR，急需社区排查。
    *链接*: [zeroclaw-labs/zeroclaw Issue #6992](https://github.com/zeroclaw-labs/zeroclaw/issues/6992)

*   **[Issue #6996] RFC: 细粒度沙箱策略**：
    作者 @rarean 提出了针对文件系统和网络限制的细粒度沙箱控制 RFC。该提案计划在 Landlock/Bubblewrap/Seatbelt 后端之上构建配置驱动的能力，是提升 AI 智能体安全性的关键路径，预计将引发架构层面的深入讨论。
    *链接*: [zeroclaw-labs/zeroclaw Issue #6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)

*   **[PR #6848] v0.8.0-beta-2 集成 PR**：
    作为下一个预发布版本的基石，该 PR 虽标记为 "DO NOT MERGE"，但汇集了 TUI、RPC 等核心变更，是当前开发进度的核心枢纽。
    *链接*: [zeroclaw-labs/zeroclaw PR #6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848)

## 5. Bug 与稳定性
今日报告了多个影响体验的 Bug，按严重程度排序如下：

*   **S1 - 工作流阻断**:
    *   **[Issue #6992]** Slack Socket Mode 拒绝所有消息。状态：Open，尚无修复 PR。

*   **S2 - 功能降级**:
    *   **[Issue #6991]** Native 工具序列化忽略风险配置文件。在 v0.8.0-beta-1 中，序列化边界未执行工具过滤，可能导致安全风险。状态：Open。
    *   **[Issue #6995]** CLI 交互模式退格键处理 Bug。针对 CJK 字符（UTF-8 3字节），退格键逐字节删除而非按字符删除，严重影响中文用户使用体验。状态：Open。

*   **已修复/待合并**:
    *   **[PR #6987]** 修复 Windows Tauri 构建中的 CVT1100/LNK1123 链接错误。
    *   **[PR #6993]** 修复 Peer Send 目标不明确的问题，改善 Agent 间通信准确性。

## 6. 功能请求与路线图信号
从今日的 Issues 和 PRs 中，可以洞察出项目下一阶段的演进方向：

*   **安全与沙箱化**：Issue #6996 提出的细粒度沙箱策略，结合 PR #6988（Bearer Token 轮换修复），显示出项目正在构建企业级的 "Secure-by-default" 运行时环境。
*   **Daemon 生命周期管理**：Issue #6818 (`--ephemeral` mode) 和 Issue #6817 (Session-scoped overrides) 表明项目正试图解决 Daemon 长期运行时的资源占用和配置热更新问题，这对于个人 AI 助手场景至关重要。
*   **用户体验 (UX) 完善**：
    *   Issue #6825 和 PR #6858 集中优化 TUI 的首屏引导和空状态显示。
    *   PR #6952 增加了 Tab 键模式切换，适配无 F 键区的紧凑型键盘，细节打磨日益精细。

## 7. 用户反馈摘要
从 Issue 详情中提取的用户真实反馈：

*   **国际化 (i18n) 痛点**：Issue #6995 反映了 CJK 用户在 CLI 交互中的编辑痛点，表明当前输入处理层对多字节字符支持不够完善。
*   **配置复杂性**：Issue #6989 请求扩展 `#[secret]` 宏以支持 Header 中的 Bearer Token 脱敏，显示企业级用户对日志安全和敏感信息隐藏有强需求。
*   **开源合规**：Issue #6990 指出新工具未遵循项目的国际化契约（Fluent），表明社区对代码规范和国际化的一致性有较高要求。

## 8. 待处理积压
以下重要 PR 长期未合并，建议维护者关注：

*   **[PR #5187] ARM64 Docker 支持**：自 4 月初开启，旨在引入原生交叉编译支持，目前仍未合并，标记为 `needs-author-action`。
*   **[PR #5450] 工具层 IPv6 支持**：同样自 4 月初开启，涉及网络底层改动，目前处于 Open 状态。
*   **[PR #6428] Slack 线程上下文回填**：中高优先级功能，允许 Agent 查看线程历史记录，目前仍未合并。

---
*分析师注：项目正处于 Beta-2 发布前的关键整合期，核心功能频繁变更，建议用户暂时避免在生产环境直接使用 master 分支，特别是涉及 Slack 通道的场景。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-29)

## 1. 今日速览
Hermes Agent 今日处于极高活跃度状态，项目刚刚经历了重大版本 v0.15.0 "Velocity Release" 的发布，随即因严重的 Dashboard 回归问题在同日发布了 v0.15.1 补丁。过去 24 小时内共有 50 条 Issue 更新和 50 条 PR 更新，显示出社区对新版本的高度关注和快速反馈。虽然 v0.15.0 带来了超过 1300 次提交的海量功能更新，但也引入了若干稳定性问题（如 Dashboard 无限重载、Kanban 数据库损坏），维护团队正在紧急处理中。

## 2. 版本发布

### v0.15.1 (2026.5.29) — The Patch Release
- **类型**: 紧急补丁修复
- **关键修复**: 解决了 v0.15.0 中引入的严重问题 —— Dashboard 在 loopback 模式下陷入无限重载循环。
- **统计**: 自 v0.15.0 以来包含 28 次提交，合并了 21 个 PR。
- **影响**: 建议所有刚刚升级到 v0.15.0 的用户立即升级到此版本，以恢复 Dashboard 的正常访问。
- **链接**: [Hermes Agent v0.15.1](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.29)

### v0.15.0 (2026.5.28) — The Velocity Release
- **类型**: 重大功能更新
- **统计**: 自 v0.14.0 以来包含 1,302 次提交，747 个合并 PR，1746 个文件变更，超过 28 万行代码增加。关闭了 560+ 个 Issues（包含 15 个 P0 和 19 个安全标签）。
- **更新亮点**: 代号 "Velocity"，暗示性能和速度的大幅提升，涉及大规模重构。
- **注意**: 此版本引入了破坏性变更，导致部分用户遭遇 Dashboard 崩溃和配置兼容性问题。
- **链接**: [Hermes Agent v0.15.0](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.28)

## 3. 项目进展

今日项目主要围绕 v0.15.0 发布后的稳定性修复和遗留功能合并展开：

*   **关键修复合并**: 针对无限重载问题的修复已合并并发布于 v0.15.1。
*   **模型支持优化**: [PR #34326](https://github.com/NousResearch/hermes-agent/pull/34326) 修复了 `opencode-go` 后端 `mimo-v2.5-pro` 模型的 `max_tokens` 超限问题，提升了模型兼容性。
*   **配置逻辑增强**: [PR #34002](https://github.com/NousResearch/hermes-agent/pull/34002) 合并，修复了环境变量 `HERMES_LLM_BASE_URL` 的优先级问题，增强了 MeshBoard 场景下的代理支持。
*   **新功能推进**: 
    *   [PR #34333](https://github.com/NousResearch/hermes-agent/pull/34333) 提议将 NVIDIA/skills 集成为受信任的技能源，扩大生态版图。
    *   [PR #20059](https://github.com/NousResearch/hermes-agent/pull/20059) 正在推进 Hermes 桌面端的开发，包含 Electron/Vite 重构。

## 4. 社区热点

今日社区讨论最热烈的话题集中在权限管理提案和新版本引发的稳定性问题上：

1.  **[Feature] 网关权限分级需求** ([Issue #527](https://github.com/NousResearch/hermes-agent/issues/527))
    *   **热度**: 7 条评论，长期未解决。
    *   **诉求**: 用户 @teknium1 提出当前网关仅支持“全权/禁止”的二进制授权模型，缺乏细粒度的角色控制。社区强烈呼吁引入 RBAC（基于角色的访问控制），以区分 Owner/Admin/User/Guest 权限，这对于多用户生产环境部署至关重要。

2.  **[Bug] Dashboard 无限重载与认证问题** ([Issue #34289](https://github.com/NousResearch/hermes-agent/issues/34289))
    *   **热度**: 2 条评论（但在社区频道广泛讨论）。
    *   **分析**: v0.15.0 引入的回归 Bug，导致在无认证模式下 Dashboard 反复刷新，严重阻碍了用户体验，直接催生了 v0.15.1 的发布。

3.  **[Proposal] Mnemosyne 内存提供者文档化** ([Issue #34271](https://github.com/NousResearch/hermes-agent/issues/34271))
    *   **热度**: 3 条评论。
    *   **诉求**: 开发者提议将 Mnemosyne（一种功能丰富的本地优先内存插件）加入官方文档支持列表，反映了社区对增强 Agent 长期记忆能力的关注。

## 5. Bug 与稳定性

随着大版本更新，大量 Bug 报告涌入，主要集中在 Kanban 模块和配置兼容性：

### 🔴 严重 (P0/P1)
*   **Dashboard 无限重载循环** ([Issue #34289](https://github.com/NousResearch/hermes-agent/issues/34289)): v0.15.0 在 loopback 模式下导致 Dashboard 不可用。**状态**: 已在 v0.15.1 修复。
*   **API Key 路由错误** ([Issue #34318](https://github.com/NousResearch/hermes-agent/issues/34318)): `delegate_task` 工具将 OpenRouter 的 API Key 错误发送至 OpenAI 端点，存在严重安全风险。**状态**: Open，暂无修复 PR 合并。

### 🟠 中等 (P2)
*   **WebSocket 连接被拒** ([Issue #33265](https://github.com/NousResearch/hermes-agent/issues/33265)): Dashboard TUI 在非本地访问时 WebSocket 失败，即使用了 `--insecure` 参数。
*   **Docker 镜像 TUI 失效** ([Issue #34091](https://github.com/NousResearch/hermes-agent/issues/34091)): v0.15.0 Docker 版本中 Dashboard 的 TUI 无法加载，提示 "events feed disconnected"。
*   **Windows 卸载失败** ([Issue #34185](https://github.com/NousResearch/hermes-agent/issues/34185)): 安装脚本在 Windows 上存在卸载逻辑缺陷。
*   **跨文件系统配置保存失败** ([Issue #34252](https://github.com/NousResearch/hermes-agent/issues/34252)): 当 `HERMES_HOME` 为跨文件系统软链接时，原子替换操作失败。

### 🟢 低优先级 (P3)
*   **Kanban 数据库损坏系列问题**: 多个 Issue ([#32729](https://github.com/NousResearch/hermes-agent/issues/32729), [#26479](https://github.com/NousResearch/hermes-agent/issues/26479)) 报告在 WSL2 或并发环境下 SQLite 数据库损坏、锁死或文件句柄耗尽的问题。

## 6. 功能请求与路线图信号

*   **权限系统重构**: 结合 Issue #527 的高关注度，RBAC 权限系统已成为多用户网关功能的必选项，预计将在未来版本中优先排期。
*   **桌面端应用**: [PR #20059](https://github.com/NousResearch/hermes-agent/pull/20059) 显示项目正在向全平台桌面应用扩展，不再局限于 CLI 和 Web Dashboard。
*   **第三方技能集成**: [PR #34333](https://github.com/NousResearch/hermes-agent/pull/34333) 暗示 Hermes 正在构建类似 "App Store" 的技能生态，整合 NVIDIA 等厂商的官方技能包。

## 7. 用户反馈摘要

*   **升级体验**: 用户普遍对 v0.15.0 的新功能表示期待，但升级路径较为坎坷，尤其是 Dashboard 的无限重载问题引发了较多抱怨，v0.15.1 的快速发布部分缓解了焦虑。
*   **Kanban 稳定性痛点**: 多个用户反馈在多进程或 WSL 环境下 Kanban 功能极不稳定，出现数据库损坏和日志刷屏现象，表明 SQLite 作为后端在高并发场景下可能存在瓶颈。
*   **配置复杂性**: 用户在使用 MeshBoard、代理配置以及多 Profile 时遇到阻碍，反映出配置系统的文档和错误提示仍有优化空间。

## 8. 待处理积压

*   **Issue #527 (RBAC 权限系统)**: 尽管评论数多且需求强烈，该 Issue 自 3 月创建至今未有实质性代码合并，建议维护者尽快明确路线图。
*   **Issue #20111 (Codex 迭代限制崩溃)**: 该 Bug 自 5 月初上报至今未修复，影响使用 Codex 模型的用户，需要关注。
*   **Issue #32729 (标题生成超时)**: 配置项被硬编码忽略的问题属于用户体验细节，建议纳入下个小版本修复。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-29)

## 1. 今日速览
PicoClaw 项目今日保持高强度的开发迭代，共产生 **32 个 PR 更新**，其中 23 个处于待合并状态，显示出社区贡献的活跃度极高。项目发布了最新的 **v0.2.9-nightly** 自动构建版本，标志着主分支代码持续演进。Issue 处理效率显著，关闭了 4 个问题（包括重要的 OpenAI API 格式支持功能），仅新增 2 个活跃 Issue，整体项目健康度良好，处于功能快速扩展与稳定性优化的并行阶段。

## 2. 版本发布
- **nightly: Nightly Build (v0.2.9-nightly.20260529.85751492)**
  - **类型**: 自动化构建版本
  - **说明**: 这是一个每日自动构建版本，可能包含不稳定因素，建议测试者谨慎使用。
  - **变更范围**: 对比 v0.2.9 版本，主要涵盖了主分支的最新提交，包括依赖库升级和部分功能修复。
  - **链接**: [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. 项目进展
今日项目在功能增强和生态兼容性方面取得了实质性进展，共有 **9 个 PR 被合并或关闭**：

- **核心功能落地**: 备受关注的 [Feature] 添加 OpenAI API 格式的 channel 支持相关 Issue (#1738) 已关闭，意味着 PicoClaw 现已原生支持 OpenAI API 接口格式，极大提升了与现有生态的集成能力。
- **依赖生态升级**: 合并了多个依赖更新 PR，包括 LarkSuite SDK (v3.9.2) 和 Anthropic SDK (v1.45.0) 的升级，确保了与上游服务的兼容性。
- **文档维护**: 关闭了更新微信二维码的文档 PR (#2966)，优化了社区入口指引。

此外，还有 **23 个 PR 正在审阅中**，重点推进了以下领域：
- **性能优化**: PR #2964 提交了图像输入压缩功能，旨在解决 Vision Pipeline 中大媒体文件导致的过载问题。
- **新 Provider 支持**: PR #2917 正在添加 NEAR AI Cloud provider，PR #2915 正在为 MiMo provider 添加多模态模型支持，显示了项目对扩展 AI 模型后端的持续投入。

## 4. 社区热点
今日社区讨论最集中的话题围绕 **RISC-V 架构兼容性** 与 **性能优化** 展开：

- **[#2887 [BUG] .deb version on RISC-V is not functional with OpenAI model](https://github.com/sipeed/picoclaw/issues/2887)**
  - **热度**: 7 条评论
  - **分析**: 用户报告在 RISC-V 架构（Debian 环境）下使用 OpenAI 模型时出现功能故障。这反映了 PicoClaw 在非 x86/ARM 架构上的适配仍有待完善，作为开源硬件领域的常见项目，RISC-V 的支持对社区至关重要。
  
- **[#2916 [stale] CPU, Memory and IO optimizations](https://github.com/sipeed/picoclaw/issues/2916)**
  - **热度**: 3 条评论
  - **分析**: 社区贡献者提交了关于 CPU、内存和 IO 的深度优化方案，涉及代码库底层重构。这表明项目正从功能构建期转向性能打磨期，讨论重点在于如何在增加新功能的同时保持轻量级。

## 5. Bug 与稳定性
今日报告的关键 Bug 集中在特定环境下的兼容性与安全策略，部分已有修复方案：

- **P0 - 功能阻断 (RISC-V)**: [#2887](https://github.com/sipeed/picoclaw/issues/2887) 报告 RISC-V 版本无法正常调用 OpenAI 模型。目前处于 Open 状态，亟待官方确认修复。
- **P1 - 安全/功能**: [#2965](https://github.com/sipeed/picoclaw/pull/2965) (PR) 修复了 `restrict_to_workspace` 开启时，exec tool 误判无 scheme URL（如 `wttr.in`）为绝对路径的问题。该 PR 已提交待合并。
- **P1 - 数据一致性**: [#2907](https://github.com/sipeed/picoclaw/pull/2907) (PR) 修复了 JSONL 存储在崩溃后可能导致的元数据漂移问题，提升了数据存储的鲁棒性。
- **P2 - 环境适配**: [#2944](https://github.com/sipeed/picoclaw/issues/2944) 报告 Termux 环境下的 X509 证书错误，该 Issue 已关闭，社区确认通过显式设置 `SSL_CERT_FILE` 解决。

## 6. 功能请求与路线图信号
根据今日动态，以下功能请求与 PR 动态揭示了项目的下一步路线图：

- **多模态能力增强**: PR [#2964](https://github.com/sipeed/picoclaw/pull/2964) 引入图像输入压缩，配合已关闭的 Issue [#2855](https://github.com/sipeed/picoclaw/issues/2855)（支持媒体附件），预示着 PicoClaw 正在强化多模态处理能力，旨在解决“图文分离发送”的痛点。
- **模型生态扩展**: PR [#2917](https://github.com/sipeed/picoclaw/pull/2917) (NEAR AI) 和 PR [#2915](https://github.com/sipeed/picoclaw/pull/2915) (MiMo) 显示项目正积极集成更多 LLM Provider，特别是针对 TEE（可信执行环境）和多模态模型的支持。
- **API 标准化**: Issue [#1738](https://github.com/sipeed/picoclaw/issues/1738) 的关闭确认了 OpenAI API 格式 channel 的支持，这将降低存量系统接入 PicoClaw 的门槛。

## 7. 用户反馈摘要
从 Issue 评论区提炼出用户的真实声音：

- **痛点**: RISC-V 用户在使用特定模型提供商时遭遇阻断性 Bug，急需官方发布修复补丁或提供编译指南。
- **场景**: 用户倾向于在嵌入式或边缘计算环境（如 Termux、RISC-V 开发板）中运行 PicoClaw，这对资源占用和底层系统适配提出了较高要求。
- **正面反馈**: 社区对添加 `FUNDING.yml` 的建议（Issue #2912）反映了用户对项目可持续发展的认可与支持意愿。

## 8. 待处理积压
以下重要 Issue 和 PR 长期未获响应或处于 Stale 状态，需维护者关注：

- **重要未解 Bug**: [#2887 RISC-V 兼容性问题](https://github.com/sipeed/picoclaw/issues/2887) - 影响核心用户群，建议优先处理。
- **Stale PR 清理**: 大量依赖更新 PR（如 React Router, React Query 等）标记为 `[stale]`，可能导致前端技术栈滞后，建议集中审视合并。
- **功能 PR**: [#2913 JSONL 会话索引性能优化](https://github.com/sipeed/picoclaw/pull/2913) 处于 Stale 状态，该修复对热路径性能提升显著，建议尽快 Review。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-29)

## 1. 今日速览
NanoClaw 项目今日保持较高的开发活跃度，核心聚焦于架构稳定性与扩展性增强。过去 24 小时内共有 12 次代码提交相关的更新活动，虽然没有新版本发布，但合并了关键的依赖升级与自我修复机制 PR。社区方面，关于多运行时支持的讨论热度依然居高不下。整体来看，项目正处于从 v1 向 v2 过渡的关键迭代期，重点在于修复通道（WhatsApp/Telegram）的深层 Bug 及安全加固。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日共有 4 个 PR 被合并/关闭，显著推进了项目的底层能力：

*   **核心依赖升级**：PR [#2637](https://github.com/nanocoai/nanoclaw/pull/2637) 已合并，将 Claude Code CLI 升级至 2.1.154，Agent SDK 升级至 0.3.154。此次更新解决了 SDK 依赖项的重大变更（peer deps 调整），为后续功能开发奠定了基础。
*   **自我修正能力突破**：PR [#2635](https://github.com/nanocoai/nanoclaw/pull/2635) 已合并，引入了 `patch_bridge` 动作。这是一项重大功能更新，允许 Agent 直接提议并修复宿主桥接代码，极大提升了系统的自愈与自治能力。
*   **集成生态扩展**：PR [#102](https://github.com/nanocoai/nanoclaw/pull/102) 已关闭/合并，正式添加了 Notion 集成技能，补齐了生产力工具链的一环。
*   **iOS 可靠性修复**：PR [#2639](https://github.com/nanocoai/nanoclaw/pull/2639) 已关闭，解决了 iOS 平台的可靠性问题。

## 4. 社区热点
今日最受关注的 Issue 是 **[#80 Support runtimes and providers other than Claude/Anthropic](https://github.com/nanocoai/nanoclaw/issues/80)**。

*   **热度数据**：👍 60，评论 34 条。
*   **事件**：该 Issue 于今日被关闭。
*   **分析**：这是一个高优先级诉求，用户希望 NanoClaw 能解耦对 Claude/Anthropic 的强依赖，支持 Gemini、OpenCode 等其他模型。作者 @jchadwick 指出 Anthropic 正在封禁非官方客户端，多模型支持是规避风险的关键路径。该 Issue 被关闭引发了社区对其路线图规划的强烈关注，可能意味着该功能已被纳入开发分支或有了明确的替代方案。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，部分已有修复方案：

*   **严重 - WhatsApp 会话自毁 (已有修复 PR)**：
    *   Issue: [#2638](https://github.com/nanocoai/nanoclaw/issues/2638) 报告 `engage_mode=mention` 在非群组聊天中会误触发，导致机器人干扰正常对话。
    *   Fix: PR [#2633](https://github.com/nanocoai/nanoclaw/pull/2633) 修复了 Baileys 7.x 下的结构性 Bug，防止配置了 `WHATSAPP_PHONE_NUMBER` 后会话自毁和认证信息被意外擦除。
*   **中等 - 数据库并发冲突**：
    *   Issue: [#2640](https://github.com/nanocoai/nanoclaw/issues/2640) 报告 `delivery` 模块在只读轮询 `outbound.db` 时，与容器的写操作发生竞态，导致 `SQLITE_READONLY_ROLLBACK` 错误。目前暂无修复 PR。
*   **安全 - 符号链接攻击风险 (已有修复 PR)**：
    *   PR [#2630](https://github.com/nanocoai/nanoclaw/pull/2630) 提交了针对 Session Manager 的安全加固，防止恶意符号链接导致宿主机文件被非法写入。

## 6. 功能请求与路线图信号
今日的功能请求集中在多云与多平台支持，反映出用户对系统灵活性的强烈需求：

*   **凭证管理增强**：Issue [#2636](https://github.com/nanocoai/nanoclaw/issues/2636) 请求支持在 MCP 服务器启动时注入 OneCLI 凭证，以解决当前 MCP 外部调用无法通过 Vault 认证的问题。这可能是后续版本的优化重点。
*   **AWS 集成**：PR [#2634](https://github.com/nanocoai/nanoclaw/pull/2634) 正在等待合并，提供了 `add-paws4claws` 技能，用于 AWS 凭证代理守护进程的集成。
*   **架构迁移**：Issue [#2632](https://github.com/nanocoai/nanoclaw/issues/2632) 询问 v1 到 v2 的 Telegram 代理群迁移路径。维护者的回复将直接影响这部分用户的升级意愿。

## 7. 用户反馈摘要
从 Issue 评论中提炼出以下核心反馈：

*   **避险情绪强烈**：用户对单一模型供应商（Anthropic）的封禁策略感到担忧，普遍希望能通过支持多模型（如 Gemini、OpenCode）来分散风险（Issue #80）。
*   **即时通讯通道痛点**：WhatsApp 通道的稳定性问题（Issue #2638, PR #2633）直接影响了生产环境的使用，用户对“会话自毁”这类破坏性 Bug 反馈强烈。
*   **自管理需求**：PR #2635 的合并表明用户（或开发者）希望 Agent 能更多地自主处理系统层面的错误，减少人工介入。

## 8. 待处理积压
以下 Issue/PR 需要维护者重点关注：

*   **PR [#2633](https://github.com/nanocoai/nanoclaw/pull/2633)**：针对 WhatsApp 严重 Bug 的修复，建议尽快 Review 并合并，以恢复通道稳定性。
*   **PR [#2630](https://github.com/nanocoai/nanoclaw/pull/2630)**：涉及安全性的文件系统访问控制加固，建议优先处理以防止潜在安全漏洞。
*   **Issue [#2640](https://github.com/nanocoai/nanoclaw/issues/2640)**：SQLite 并发错误可能导致日志刷屏或数据同步异常，需关注是否影响消息投递的可靠性。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-29)

## 1. 今日速览
NullClaw 项目今日呈现出极高的维护活跃度与代码质量收敛趋势。过去 24 小时内，项目成功关闭了 **5 个 Issues** 和 **12 个 PRs**，且无新增活跃 Issue，显示出维护团队正在高效清理积压问题并推进功能迭代。重点修复了 Telegram 频道的消息上下文丢失、子智能体结果投递失败等关键功能性 Bug，并成功合并了包括 NEAR AI/Atlas Cloud 新提供商支持、Zig 0.16.0 适配等重要更新。整体来看，项目正处于稳定性提升与功能扩展并进的良性阶段。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 12 个 PR 被合并或关闭，显著提升了系统的稳定性与兼容性：

*   **Telegram 频道体验优化**：合并了 [PR #930](nullclaw/nullclaw PR #930)，引入了对 `reply_to_message` 文本内容的解析，解决了群聊回复上下文缺失的问题；[PR #928](nullclaw/nullclaw PR #928) 修复了 `spawn` 工具生成的子智能体结果无法送达 Telegram 的严重 Bug。
*   **配置与内存修复**：[PR #924](nullclaw/nullclaw PR #924) 修复了 Telegram 配置中数字 ID 解析失败导致频道无法启动的问题；[PR #929](nullclaw/nullclaw PR #929) 修复了 `memory_list` 无法查询全局内存条目的逻辑错误。
*   **基础设施与兼容性**：[PR #935](nullclaw/nullclaw PR #935) 更新了 Nix flake 以支持 Zig 0.16.0；[PR #922](nullclaw/nullclaw PR #922) 新增了对 NEAR AI Cloud 和 Atlas Cloud 两个 LLM 提供商的支持。
*   **安全与系统加固**：[PR #907](nullclaw/nullclaw PR #907) 增强了 Webhooks 和 Cron 作业的安全性；[PR #925](nullclaw/nullclaw PR #925) 修复了 macOS 下特定工作目录路径被误拦截的问题。

## 4. 社区热点
尽管今日 Issues 讨论区较为平静（无新开/活跃 Issue），但近期关闭的高关注度 Issue 反映了核心诉求：

*   **配置解析痛点**：[Issue #869](nullclaw/nullclaw Issue #869) 和 [Issue #901](nullclaw/nullclaw Issue #901) 反映了用户在配置 Telegram 频道时遇到的“配置正确但显示未配置”的困扰。这类问题的解决表明用户对配置文件的类型敏感性（数字 ID vs 字符串 ID）存在困惑，未来可能需要优化文档或 CLI 校验提示。
*   **上下文连贯性**：[Issue #916](nullclaw/nullclaw Issue #916) 的修复表明用户在即时通讯场景下对多轮对话上下文（特别是“回复”功能）的依赖极高，这是 AI 助手易用性的关键指标。

## 5. Bug 与稳定性
今日修复了多个中高级别的 Bug，显著增强了系统健壮性：

*   **[严重] 子智能体结果丢失**：[Issue #918](nullclaw/nullclaw Issue #918) 报告了 `spawn` 工具生成的结果在 Telegram 轮询模式下静默丢失。已由 [PR #928](nullclaw/nullclaw PR #928) 修复，确保了异步任务闭环的可靠性。
*   **[严重] 频道配置失效**：[Issue #901](nullclaw/nullclaw Issue #901) 导致 Telegram 频道无法正常启动，影响用户部署。已由 [PR #924](nullclaw/nullclaw PR #924) 修复。
*   **[中等] 内存查询逻辑缺陷**：[Issue #917](nullclaw/nullclaw Issue #917) 导致全局记忆不可见。已由 [PR #929](nullclaw/nullclaw PR #929) 修复，恢复了记忆系统的预期功能。
*   **[轻微] API 测试噪声**：[PR #927](nullclaw/nullclaw PR #927) 抑制了测试期间的 API 错误日志，提升了开发体验。

## 6. 功能请求与路线图信号
*   **调度与自动化能力**：目前仍有 [PR #783](nullclaw/nullclaw PR #783) 处于 Open 状态，该 PR 提议引入基于数据库的 Cron 子智能体引擎及历史记录功能。这表明项目正计划从被动响应式助手向主动式、自动化代理转型。
*   **网关能力扩展**：[PR #933](nullclaw/nullclaw PR #933) 的合并引入了 `/media/transcribe` 等网关方法，暗示项目正在增强作为 AI 服务网关的 API 能力，可能为后续的语音交互或多模态支持铺路。

## 7. 用户反馈摘要
根据 Issues 反馈，真实用户痛点集中在以下几个方面：
*   **类型系统困惑**：用户习惯在配置中直接使用 JSON 数字类型的 Telegram ID，但旧版代码期望字符串，导致解析失败。用户希望配置容错率更高或报错更明确。
*   **异步任务黑盒**：用户在使用 `spawn` 等异步工具时，因结果未返回而感到困惑，这反映出用户对异步任务状态反馈机制的强烈需求。
*   **平台兼容性**：macOS 用户在特定系统目录下运行受阻，说明用户群体中有相当比例的开发者在 Mac 环境下进行本地测试。

## 8. 待处理积压
*   **[关注] Cron 自动化引擎**：[PR #783](nullclaw/nullclaw PR #783) 自 4 月开启至今未合并，最近一次更新在 5 月 28 日。作为一个涉及数据库结构调整的大型 Feature PR，建议维护者尽快推进 Review 或分阶段合并，以免长期分支导致冲突风险。
*   **[待定] LINE 频道修复**：[PR #934](nullclaw/nullclaw PR #934) 修复了 LINE 频道的消息路由与 Token 缓存问题，目前状态为 Open，等待合并，建议尽快处理以完善多渠道支持。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 (2026-05-29)

## 1. 今日速览
IronClaw 项目今日保持极高的开发活跃度，核心重点集中在 **Reborn 架构重构**、**安全性增强** 与 **WebChat v2 功能补全**。过去24小时内共有 50 个 PR 更新（其中 32 个已合并/关闭）和 29 个 Issue 更新，显示出团队正在快速迭代以推进 v0.29.0 版本的发布。主要进展包括解决了生产环境凭证边界的安全漏洞、完成了 HTTP 出站流量的重构拆分，并针对新集成的 WeCom（企业微信）渠道进行了深度验证与问题修复。整体代码质量管控严格，安全性审查已成为新功能合并前的标配流程。

## 2. 版本发布
*   **无正式新版本发布**。
*   **注意**：PR #3708 处于 Open 状态，正在准备 `v0.29.0` 的发布工作。该版本包含 `ironclaw_common` 的 API 破坏性变更（枚举变体的判别式变更），下游依赖需关注迁移适配。

## 3. 项目进展
今日合并了多个关键 PR，显著提升了系统的安全性与架构清晰度：

*   **安全性修复与重构**：
    *   [PR #3903](https://github.com/nearai/ironclaw/pull/3903) **[已合并]**：关闭了 Reborn 生产环境凭证边界的安全缺口，引入了 `RuntimeCredentialTarget::PathPlaceholder` 并修复了生产构建器的依赖注入问题，解决了 CI 中的失败测试。
    *   [PR #4213](https://github.com/nearai/ironclaw/pull/4213) **[已合并]**：重构了主机运行时 HTTP 出站流量管道，将庞大的 `lib.rs` 拆分为独立模块（策略查找、请求验证、凭证注入等），提升了代码可维护性。

*   **WebUI 与交互体验**：
    *   [PR #4212](https://github.com/nearai/ironclaw/pull/4212) **[已合并]**：实现了技能激活事件的实时投影，WebUI v2 现可实时显示 Agent 正在使用的技能及其反馈。
    *   [PR #4218](https://github.com/nearai/ironclaw/pull/4218) **[已合并]**：优化了内置扩展搜索功能，允许模型在无查询参数时列出所有可用扩展。

*   **CI/CD 稳定性**：
    *   [PR #4221](https://github.com/nearai/ironclaw/pull/4221) 和 [PR #4220](https://github.com/nearai/ironclaw/pull/4220) **[已合并]**：修复了 `/benchmark` 命令因权限配置导致的启动失败问题，确保了 CI 流程的顺畅。

## 4. 社区热点
今日社区讨论主要集中在架构设计决策与新渠道集成的质量控制上：

*   **[Issue #3917](https://github.com/nearai/ironclaw/issues/3917) [安全审查]**：关于 `RuntimeCredentialTarget::PathPlaceholder` 的安全性讨论。作者 @zmanian 指出该方式注入凭证存在泄露风险，建议在正式发布前移除或加固。这反映了项目对安全细节的零容忍态度。
*   **[Issue #3702](https://github.com/nearai/ironclaw/issues/3702) [Reborn 计划]**：Reborn 二进制端到端测试框架的计划 issue，详细阐述了核心 Agent 循环的测试策略，是理解项目未来测试架构的重要文档。
*   **[Issue #4191](https://github.com/nearai/ironclaw/issues/4191) [WeCom 验证]**：针对即将发布的 v0.29.0，社区贡献者对 WeCom 渠道进行了全面验证，引发了关于图片处理、消息路由和 UX 引导的系列子问题讨论。

## 5. Bug 与稳定性
今日报告了多个 Bug，主要集中在即将发布的 v0.29.0 新功能上，部分已有修复方案：

*   **严重 (High)**：
    *   [Issue #4188](https://github.com/nearai/ironclaw/issues/4188)：OpenAI 提供商配置在 Staging 环境下返回 400 错误，影响基础模型连接功能。**目前尚无关联 Fix PR**。
    *   [Issue #4108](https://github.com/nearai/ironclaw/issues/4108)：Nightly E2E 测试失败，阻塞发布流程。

*   **中等**：
    *   [Issue #4195](https://github.com/nearai/ironclaw/issues/4195)：WeCom 图片附件处理极不稳定，尤其是 HEIF 格式和大图。
    *   [Issue #4197](https://github.com/nearai/ironclaw/issues/4197)：视觉分析功能解析错误或过期图片，而非当前上传附件。
    *   [Issue #4194](https://github.com/nearai/ironclaw/issues/4194)：WeCom 群聊与私聊在 Web UI 中被错误合并。
    *   [Issue #4206](https://github.com/nearai/ironclaw/issues/4206)：运行时 HTTP 出站流量目前是同步的，导致事件循环阻塞，需改为异步。

*   **已修复/有进展**：
    *   [Issue #4085](https://github.com/nearai/ironclaw/issues/4085)：生产构建器依赖注入问题已通过 PR #3887 解决。

## 6. 功能请求与路线图信号
从 Issue 与 PR 活动看，项目正集中精力完善 Reborn 架构的认证体系与多渠道接入：

*   **WebChat v2 SSO 迁移**：[Issue #4179](https://github.com/nearai/ironclaw/issues/4179), [Issue #4180](https://github.com/nearai/ironclaw/issues/4180), [Issue #4181](https://github.com/nearai/ironclaw/issues/4181) 分别提出了迁移 Google、GitHub 和 NEAR 钱包登录的需求，表明 v2 版本将全面对齐 v1 的认证能力。
*   **扩展生态建设**：
    *   [PR #4223](https://github.com/nearai/ironclaw/pull/4223) 正在移植 NEAR AI MCP 到 Reborn 扩展系统。
    *   [PR #3737](https://github.com/nearai/ironclaw/pull/3737) 提议从 IronHub 安装工具和技能，显示了项目对插件生态的重视。
*   **凭证零知识化**：[Issue #4222](https://github.com/nearai/ironclaw/issues/4222) 提议对 HTTP 凭证材料进行 Zeroize 处理，进一步强化内存安全。

## 7. 用户反馈摘要
来自 Issues 的真实用户声音主要集中在对新功能的试用体验上：

*   **WeCom (企业微信) 体验**：用户 @sunglow666 在 [Issue #4193](https://github.com/nearai/ironclaw/issues/4193) 中指出 Web UI 设置界面缺乏必要的引导文档，导致用户不知道需要配置企业微信后台的特定 URL 和权限。用户还反馈群聊与私聊消息在 UI 层面混淆，导致对话上下文错乱 ([Issue #4194](https://github.com/nearai/ironclaw/issues/4194))。
*   **配置痛点**：有用户反馈在配置 OpenAI 提供商时遇到 400 错误 ([Issue #4188](https://github.com/nearai/ironclaw/issues/4188))，提示前端 UI 的错误提示信息可能不够清晰，或后端验证逻辑存在缺陷。
*   **积极信号**：尽管存在 Bug，用户对 WeCom 的基础文本消息流和多语言支持给予了肯定，认为核心功能基本稳定。

## 8. 待处理积压
*   **PR #3708 (Release v0.29.0)**：自 05-16 创建至今仍未合并，虽然 CI 已通过大部分检查，但关联的 Nightly E2E 失败 ([Issue #4108](https://github.com/nearai/ironclaw/issues/4108)) 可能是阻塞原因。建议维护者优先排查 E2E 失败原因。
*   **PR #3737 (IronHub Install)**：作为大型 PR (Size: XL)，涉及数据库迁移和核心功能变更，已开启数日，等待核心团队 Review。这是扩展生态的关键功能，建议重点关注。
*   **Issue #3917 (Security Review)**：关于凭证注入方式的安全决策仍未定论，建议在 v0.29.0 正式发布前明确是移除还是加固该功能。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-05-29)

## 1. 今日速览
LobsterAI 今日保持高度活跃的开发态势，过去 24 小时内共有 **17 个 PR 发生更新**，其中 **8 个 PR 顺利合并**，显示出团队正在加速功能迭代与系统优化。本次更新的重头戏在于 **Kit（专家套件）商店与对话集成** 功能的正式落地，标志着项目从单一技能向套装化解决方案迈进。同时，开发者对 **插件系统** 进行了深度优化，解决了启动性能与配置持久化等痛点。虽然仅新增 1 个 Issue，但涉及定时任务创建错误，需关注潜在的功能回归风险。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日合并的 PR 极大地增强了系统的易用性与稳定性，主要集中在以下三个方向：

*   **重大功能上线 - Kit 专家套件生态**
    *   **PR #2060 [CLOSED]**: 实现了 **Kit（专家套件）商店与对话集成**。这是一个里程碑式的更新，允许将多个 Skill 打包为套件，支持一键安装、商店浏览及对话区集成。这大大降低了用户组合使用复杂能力的门槛，构建了更完整的技能生态闭环。
    *   **PR #2061 [CLOSED]**: 优化了对话输入体验，支持图片附件点击预览，提升了交互细节。

*   **系统稳定性与性能优化**
    *   **PR #2072 [CLOSED]**: 针对 OpenClaw gateway 进行了启动阶段综合优化，修复了配置同步冗余、插件重复注册等问题，显著提升应用启动速度与稳定性。
    *   **PR #2068 [CLOSED]**: 重构了插件设置保存逻辑，引入批量写入与脏数据守卫，解决了频繁触发网关重启的问题，优化了配置变更体验。
    *   **PR #2066 [CLOSED]**: 修复了 MCP stdio 进程在 Windows 下的孤儿进程问题，并实现了运行时跨会话共享，提升了资源利用率。

*   **Bug 修复与体验完善**
    *   **PR #2070 [CLOSED]**: 修复了工具调用结果解析错误的问题，防止命令行输出被误识别为文件路径，增强了系统鲁棒性。
    *   **PR #2067 [CLOSED]**: 修复了 Kit 安装后状态未同步至 Redux 导致的交互失效问题。
    *   **PR #2069 [CLOSED]**: 新增插件更新检查功能（支持 npm/clawhub 源），解决了插件版本管理滞后的痛点。

## 4. 社区热点
今日社区活跃度主要体现在代码贡献层面，讨论焦点集中在新功能的引入：
*   **PR #2060 (Kit 商店集成)** 是今日最受关注的功能更新，它将改变用户使用 Skill 的模式，从单一调用转变为场景化套件应用，预示着产品化程度的进一步提高。
*   **Issue #2071 (创建定时任务错误)** 是今日唯一新增的 Issue，报告了在 2026.5.27 版本中创建定时任务时的报错现象，这可能是近期代码变动引入的回归问题，值得开发团队优先排查。

## 5. Bug 与稳定性
今日报告的问题较少，但存在功能性阻断风险：

*   **🔴 严重 - 定时任务创建失败**
    *   **Issue #2071**: 用户报告在版本 2026.5.27 中创建定时任务时发生错误，截图显示存在 UI 交互阻断。考虑到今日有多个涉及定时任务和历史 PR 的更新（如 #1482, #1488），需排查是否存在关联回归。
    *   链接: [netease-youdao/LobsterAI Issue #2071](https://github.com/netease-youdao/LobsterAI/issues/2071)

*   **已修复问题**
    *   **PR #2070**: 修复了非图片生成类工具结果被错误解析为文件路径的 Bug。
    *   **PR #2067**: 修复了 Kit 安装后状态未同步导致的 UI 异常。

## 6. 功能请求与路线图信号
通过当前 Open 的 PR 与 Issue 分析，后续版本可能会重点推进以下方向：

*   **自动化与容错机制**：**PR #1483** (模型故障自动切换) 和 **PR #1484** (Gmail 邮件触发 Agent) 表明项目正在增强无人值守运行能力与高可用性设计。
*   **模块管理与 UI 体验**：**PR #1488** 对定时任务模块进行了 UI 重构（卡片网格、历史查询），**PR #1494** 优化了技能选择的作用域管理。这些 PR 目前处于 Open 状态，可能会与 Issue #2071 产生关联，建议合并前进行充分验证。
*   **存量 Bug 清理**：存在多个 4 月份遗留的 Stale PR（如 #1478 内存泄漏、#1482 定时任务描述丢失），显示出项目在维护新功能的同时，亟需清理技术债务。

## 7. 用户反馈摘要
*   **痛点反馈**：用户 @AK-blank 反馈在最新版本中无法创建定时任务（Issue #2071），涉及核心功能的使用阻断，且用户提供了详细的截图与版本号，显示出较高的测试参与度。
*   **潜在需求**：从 PR 动态看，用户对插件管理（更新检查）、图片交互（点击预览）以及技能组合使用的需求得到了响应，表明项目正在积极听取社区对“易用性”和“自动化”的反馈。

## 8. 待处理积压
以下 PR/Issue 长期未合并或未关闭，建议维护者关注：

*   **PR #1478 [OPEN]**: 修复 CopyButton 组件内存泄漏问题。这是一个涉及稳定性的重要修复，已停滞近两个月。
*   **PR #1482 [OPEN]**: 修复编辑定时任务后描述信息被清空的问题。该 Bug 与今日新报的 Issue #2071（定时任务错误）同属模块问题，建议优先复查合并。
*   **PR #1483 [OPEN]**: 模型故障自动 Failover 功能。这是提升服务可靠性的关键特性，建议纳入近期发布计划。
*   **PR #1488 [OPEN]**: 定时任务 UI 升级。作为体验优化的大改动，建议尽快推进测试与合并，以解决旧版 UI 的交互痛点。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-29)

## 1. 今日速览
Moltis 项目今日呈现出**极高的维护效率与稳定性聚焦**。在过去 24 小时内，项目成功关闭了 7 个 Issue 并合并/关闭了 4 个 PR，主要集中在修复影响用户体验的关键 Bug，包括 Discord 语音消息丢失、Cron 任务执行环境异常及 WebUI 交互逻辑错误。虽然无新版本发布，但高频率的修复提交表明项目正处于密集的维护期，社区反馈的问题得到了快速响应与解决。唯一的活跃讨论 Issue 聚焦于底层 CLI 交互能力的增强，显示了社区对多智能体编排深度的需求。

## 2. 版本发布
*本日无新版本发布。*

## 3. 项目进展
今日共有 4 个修复类 PR 成功合并/关闭，显著提升了系统的健壮性，项目整体向更稳定的版本迈进了一大步。

*   **[MERGED] PR #1081 fix(discord): log silent voice message drops**
    *   **链接**: [moltis-org/moltis PR #1081](https://github.com/moltis-org/moltis/pull/1081)
    *   **进展**: 修复了 Discord 语音消息被静默丢弃的问题，增加了诊断日志以区分网关丢弃与处理器丢弃，并增加了回归测试。解决了用户在语音交互场景下的盲区。
*   **[MERGED] PR #1080 fix(web): include clicked response in message forks**
    *   **链接**: [moltis-org/moltis PR #1080](https://github.com/moltis-org/moltis/pull/1080)
    *   **进展**: 修复了 WebUI 中消息分支功能定位不准确的 Bug，确保分支点位于点击的助手回复之后，优化了会话管理的用户体验。
*   **[MERGED] PR #1079 fix(cron): preserve host execution target**
    *   **链接**: [moltis-org/moltis PR #1079](https://github.com/moltis-org/moltis/pull/1079)
    *   **进展**: 修复了 Cron 任务强制在沙箱中运行的回归问题，正确保留了 "Host" 执行目标配置，确保了定时任务的灵活性。
*   **[MERGED] PR #1078 fix(providers): strip MiniMax user names**
    *   **链接**: [moltis-org/moltis PR #1078](https://github.com/moltis-org/moltis/pull/1078)
    *   **进展**: 解决了 MiniMax 提供商在群聊历史中因用户名字段导致的 2013 错误，通过元数据管理优化了不同 Provider 的兼容性。

## 4. 社区热点
今日社区最活跃的讨论集中在底层架构能力的扩展上。

*   **Issue #235 [OPEN] PTY-based interactive Claude Code CLI control for autonomous multi-agent orchestration**
    *   **链接**: [moltis-org/moltis Issue #235](https://github.com/moltis-org/moltis/issues/235)
    *   **分析**: 该 Issue 自 2 月创建至今仍有活跃更新（今日再获回复），评论数达 6 条。用户强烈诉求解决 Agent 框架作为子进程调用 Claude Code CLI 时因缺乏 TTY 支持而导致的交互受限问题。这反映了高级用户正尝试将 Moltis 作为更复杂的自动化编排核心，目前的非交互模式已成为阻碍自主多智能体协作的瓶颈。
*   **PR #1082 [OPEN] feat(channels): add gated tmux control command**
    *   **链接**: [moltis-org/moltis PR #1082](https://github.com/moltis-org/moltis/pull/1082)
    *   **分析**: 该 PR 提议增加 `/tmux` 命令以允许特定用户控制宿主机终端，这可能是对 Issue #235 诉求的一种架构级回应，值得密切关注其合并动向。

## 5. Bug 与稳定性
今日报告并处理的 Bug 均已修复，未发现未解决的高危严重故障，整体稳定性向好。

*   **[已修复] Discord 语音消息静默丢失 (Issue #817)**
    *   **严重度**: 中。影响特定渠道的通信完整性。
    *   **状态**: 已由 PR #1081 修复。
*   **[已修复] Cron 任务执行环境错误 (Issue #1072)**
    *   **严重度**: 高。可能导致本应在 Host 环境执行的任务被错误隔离，影响功能正确性。
    *   **状态**: 已由 PR #1079 修复。
*   **[已修复] MiniMax Provider 兼容性错误 (Issue #1077)**
    *   **严重度**: 中。导致群聊场景下的服务崩溃。
    *   **状态**: 已由 PR #1078 修复。
*   **[已修复] WebUI 会话 Fork 逻辑错误 (Issue #1075)**
    *   **严重度**: 低。主要影响用户体验，不影响核心功能。
    *   **状态**: 已由 PR #1080 修复。

## 6. 功能请求与路线图信号
*   **多智能体编排增强**: Issue #235 的持续活跃表明，支持 PTY 或伪终端交互将是 Moltis 迈向“自主智能体编排平台”的关键一步。结合 PR #1082 提出的 Tmux 控制原语，项目可能正在构建更深层的系统级控制能力。
*   **WebUI 配置能力**: Issue #906（在 WebUI 中配置子智能体）虽于今日关闭，但这暗示了用户对可视化配置复杂 Agent 拓扑的需求已存在，后续版本可能会侧重于后端 API 的暴露而非仅限于 UI 层面。

## 7. 用户反馈摘要
*   **痛点 - Cron 配置语义**: 用户在使用 Cron 时，对 `Execution Target` 的预期与实际行为不一致感到困惑，认为沙箱策略不应覆盖显式的 Host 配置，今日的修复解决了这一信任危机。
*   **痛点 - Provider 兼容性**: 使用第三方兼容 API（如 MiniMax）时，字段格式的细微差异导致报错，用户希望系统能更“健壮”地处理非标准字段。
*   **场景 - 深度集成**: 核心用户正在尝试将 Moltis 嵌入到更复杂的自动化流程中（如通过子进程控制 CLI），现有的 TTY 检测机制限制了此类高级玩法，社区对底层控制权的渴望强烈。

## 8. 待处理积压
*   **Issue #235 (PTY-based interactive control)**: 该 Issue 涉及底层架构调整，自 2 月提出至今仍未有明确合并方案，建议维护者结合 PR #1082 的进展尽快给出路线图或里程碑，以安抚核心开发者社区。
*   **Issue #333 (Cron model not found)**: 该 Issue 于今日关闭，但未明确关联 PR，需确认是否已在其他提交中隐性修复，以免遗漏回归测试。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-05-29)

## 1. 今日速览
CoPaw (QwenPaw) 项目今日保持极高的活跃度，社区反馈与开发迭代并驾齐驱。过去24小时内，Issues 更新量达 39 条，PR 更新量也达 39 条，显示出项目正处于快速迭代与磨合期。开发者重点关注桌面端稳定性与用户体验优化，合并了 21 个 PR，主要涉及 UI 交互修复、依赖更新及性能优化。社区方面，用户对桌面端打包方案、Agent 记忆机制及 Coding 模式提出了深度讨论与建设性意见，同时也暴露了 Windows 桌面版在环境配置与性能方面的若干痛点。

## 2. 版本发布
- **无新版本发布**：今日暂无新版 Release，项目持续处于功能累积与 Bug 修复阶段。

## 3. 项目进展
今日共有 **21 个 PR 被合并或关闭**，项目整体在稳定性和易用性上迈出坚实一步：
- **UI/UX 修复**：[PR #4755](https://github.com/agentscope-ai/QwenPaw/pull/4755) 修复了聊天界面切换后输入框残留内容的体验问题（对应 Issue #4774）；[PR #4790](https://github.com/agentscope-ai/QwenPaw/pull/4790) 解决了 Ant Design 5.29 API 弃用警告及安全页面图标渲染错误。
- **功能增强**：[PR #4763](https://github.com/agentscope-ai/QwenPaw/pull/4763) 优化了消息时间戳处理，增加了用户时区支持；[PR #4692](https://github.com/agentscope-ai/QwenPaw/pull/4692) 引入自动化工作流维护贡献者数据。
- **底层改进**：[PR #4771](https://github.com/agentscope-ai/QwenPaw/pull/4771) 更新了前端聊天组件依赖；[PR #4706](https://github.com/agentscope-ai/QwenPaw/pull/4706) 实现了会话状态的原子化写入，以防止崩溃导致的数据损坏。

## 4. 社区热点
今日讨论最活跃的议题集中在**部署方式**与**核心架构升级**：
- **打包与分发方案**：[Issue #4754](https://github.com/agentscope-ai/QwenPaw/Issue/4754)（评论 7 条）中，用户对 Tauri 版与普通 Windows 版的区别及打包 EXE 方案表现出浓厚兴趣，反映出用户对私有化部署桌面端的强烈需求。
- **Agent 执行稳定性**：[Issue #4739](https://github.com/agentscope-ai/QwenPaw/Issue/4739)（评论 6 条）指出 Tool call 完成后 Agent 卡死在等待用户输入状态，引发了关于 Agent 状态机流转可靠性的讨论。
- **记忆系统演进**：[Issue #4652](https://github.com/agentscope-ai/QwenPaw/Issue/4652)（评论 4 条）提出了“总结-关联-提醒”的记忆增强机制，直指当前 Agent “只记录不学习”的痛点，被视为迈向 AGI 的重要功能信号。
- **竞品对标与交互创新**：[Issue #4789](https://github.com/agentscope-ai/QwenPaw/Issue/4789)（评论 3 条，👍 1）建议参考 Trae 实现对话级回退与沙箱管理，体现了用户对精细化对话控制能力的渴望。

## 5. Bug 与稳定性
今日报告了多个影响使用的严重 Bug，主要集中在 Windows 桌面版与数据持久化：
- **严重 (Critical)**：[Issue #4791](https://github.com/agentscope-ai/QwenPaw/Issue/4791) 指出服务重启时会丢失当前会话最后几条消息，原因是 `shutdown_handler` 为空，严重影响数据可靠性。
- **严重**：[Issue #4739](https://github.com/agentscope-ai/QwenPaw/Issue/4739) Tool call 执行后 Agent 偶发挂起。
- **高**：[Issue #4773](https://github.com/agentscope-ai/QwenPaw/Issue/4773) Windows 桌面版定时任务无法找到 `qwenpaw` 指令，导致任务失败（已有 [PR #4779](https://github.com/agentscope-ai/QwenPaw/pull/4779) 尝试修复，打包 CLI 进度）。
- **高**：[Issue #4792](https://github.com/agentscope-ai/QwenPaw/Issue/4792) 远程流式输出长文本导致本地浏览器严重卡顿，前端渲染性能需优化。
- **中**：[Issue #4777](https://github.com/agentscope-ai/QwenPaw/Issue/4777) Windows 桌面版执行 Shell 命令时弹出 CMD 窗口，干扰用户体验。

## 6. 功能请求与路线图信号
社区提出了多项具有战略意义的功能请求，部分已有 PR 跟进：
- **架构升级**：[Issue #4727](https://github.com/agentscope-ai/QwenPaw/Issue/4727) 计划将后端从 AgentScope 1.x 迁移至 2.0，这将带来破坏性变更，是下阶段路线图的重中之重。
- **Coding 模式增强**：[Issue #4759](https://github.com/agentscope-ai/QwenPaw/Issue/4759) 提出直接导入本地项目文件夹而不复制的需求，目前 [PR #4762](https://github.com/agentscope-ai/QwenPaw/pull/4762) 已实现此功能，有望近期合入。
- **配置重构**：[Issue #4758](https://github.com/agentscope-ai/QwenPaw/Issue/4758) 建议分离全局/Agent 配置并引入版本对比功能，旨在解决配置管理混乱问题。
- **自动降级机制**：[Issue #4757](https://github.com/agentscope-ai/QwenPaw/Issue/4757) 提出在 LLM Provider 触及 Token 限额时的自动降级方案，旨在提升服务鲁棒性。

## 7. 用户反馈摘要
- **痛点**：Windows 桌面端用户对环境配置（如 Cron 找不到指令、CMD 弹窗）感到困惑和困扰；前端在处理长文本流式输出时存在性能瓶颈；历史对话排序与 UI 交互细节（如删除按钮位置）不符合直觉。
- **场景**：用户常将 QwenPaw 用于本地项目开发（Coding Mode）和自动化任务（Cron），对文件系统操作的便捷性（如不复制文件夹直接编辑）有硬性需求。
- **满意点**：用户对 AgentScope 2.0 的迁移计划表示期待，认为项目迭代速度快，对社区提出的配置与记忆系统改进建议接受度高。

## 8. 待处理积压
- **架构迁移**：[Issue #4727](https://github.com/agentscope-ai/QwenPaw/Issue/4727) AgentScope 2.0 迁移计划已发布，但尚未完成，建议维护者优先推进以避免技术债累积。
- **桌面端稳定性**：Windows 桌面版环境变量与打包问题（Issue [#4773](https://github.com/agentscope-ai/QwenPaw/Issue/4773)）虽有 PR 跟进，但仍需验证其有效性；Shell 静默执行（Issue [#4777](https://github.com/agentscope-ai/QwenPaw/Issue/4777)）问题亟待解决。
- **关键 Bug 修复**：[Issue #4791](https://github.com/agentscope-ai/QwenPaw/Issue/4791) 的消息丢失问题涉及数据安全，建议尽快纳入修复计划。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目日报 (2026-05-29)

## 1. 今日速览
EasyClaw 项目今日在社区互动方面表现静默，无新增 Issues 或 Pull Requests。尽管代码仓库层面的显性活跃度为零，但项目团队发布了一个关键版本 v1.8.18，重点解决了 macOS 平台的代码签名与公证问题。此举标志着项目在工程化与用户体验方面取得了实质性突破，解决了长期以来可能阻碍用户安装的 Gatekeeper 拦截问题，显著提升了软件的可信度与安装成功率。整体来看，项目处于“重基建、轻交互”的稳健维护阶段。

## 2. 版本发布
**版本号：** [v1.8.18 (RivonClaw v1.8.18)](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.18)

**更新详情：**
本次更新主要聚焦于分发安全性与安装体验的优化，不包含功能性代码变更。

*   **macOS 信任链完善**：在 CI 流程中启用了 macOS Developer ID 签名与公证。此举解决了用户下载应用后因无法通过 Gatekeeper 验证而必须手动绕过安全设置的问题，实现了“开箱即用”的体验。
*   **自动更新流恢复**：随着发布产物（artifacts）获得了系统的信任，现已恢复 macOS 上的自动更新流程。electron-updater 将能正常识别并安装更新，提升了版本迭代的到达率。
*   **Windows 签名筹备**：项目开始通过 Azure Artifact Sig 准备 Windows 版本的发布签名，预示着 Windows 平台的分发也将具备官方认证，减少杀毒软件误报。

**影响评估：** 无破坏性 API 变更，建议所有 macOS 用户尽快升级至此版本以获得流畅的更新体验。

## 3. 项目进展
今日无合并或关闭的 Pull Request。项目进展主要体现在基础设施的完善上，v1.8.18 的发布意味着 CI/CD 流水线已成功集成代码签名能力。这虽然不直接体现为代码行数的增加，但极大提升了终端用户的软件交付质量，为后续高频迭代扫清了分发障碍。

## 4. 社区热点
今日无活跃的 Issues 或 Pull Requests 讨论。

## 5. Bug 与稳定性
今日未收到新的 Bug 报告或崩溃反馈。v1.8.18 版本的发布修复了潜在的“安装阻塞性问题”（macOS 安全拦截），间接提升了应用的稳定性表现。

## 6. 功能请求与路线图信号
今日无新增功能请求。从 v1.8.18 的更新日志推断，项目接下来的短期路线图重点在于完善各平台的分发合规性（如 Windows 签名），而非引入新功能。

## 7. 用户反馈摘要
今日无新增用户评论数据。

## 8. 待处理积压
过去 24 小时内无积压问题的新进展。鉴于今日无社区活跃数据，建议维护者关注是否有历史遗留的未处理 Issue，并验证 v1.8.18 版本发布后用户在实际安装过程中的反馈。

</details>

---
*本日报由 [agents-radar](https://github.com/rollysys/agents-radar) 自动生成。*