# OpenClaw 生态日报 2026-07-02

> Issues: 253 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-07-02 03:49 UTC

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

# OpenClaw 项目动态日报 (2026-07-02)

## 1. 今日速览
OpenClaw 项目今日维持了极高的社区活跃度，Issues 更新量达 253 条，PR 更新量高达 500 条，显示出开发与反馈循环正在高速运转。然而，PR 积压情况显著，待合并 PR 数量达到 409 条，且今日无新版本发布，表明项目正处于密集修复与功能迭代的中期阶段。今日焦点集中在 v2026.6.11 版本引发的回归问题修复，以及 Anthropic/Claude 模型在流式传输与重放场景下的稳定性攻坚。

## 2. 版本发布
**无新版本发布。**
尽管没有发布新版本，社区对近期版本（特别是 v2026.6.11）的反馈非常密集，主要集中在会话初始化冲突和工具调用文本泄露等问题上，预计维护者正在积蓄修复补丁以发布修正版。

## 3. 项目进展
今日共有 91 个 PR 被合并或关闭，主要集中在提升系统稳定性与修复集成问题：

- **插件与集成修复**：PR [#98819](https://github.com/openclaw/openclaw/pull/98819) 修复了 Mattermost 插件外部化后导致的 401 鉴权错误；PR [#94385](https://github.com/openclaw/openclaw/pull/94385) 改进了飞书渠道在交互组件被剥离时的降级处理。
- **核心运行时修复**：PR [#98688](https://github.com/openclaw/openclaw/pull/98888) 修正了 Fal 托管模型的图像编辑端点路由；PR [#98888](https://github.com/openclaw/openclaw/pull/98888) 确保了失败的工具调用在 UI 中保持可见，提升了调试体验。
- **安全与健壮性**：PR [#96954](https://github.com/openclaw/openclaw/pull/96954) 增强了 SCP 命令的输入验证以拒绝 C1 控制字符；PR [#76407](https://github.com/openclaw/openclaw/pull/76407) 引入了诊断日志轮转机制，防止磁盘被日志写满。

整体来看，项目正在积极消化近期架构调整（如插件外部化）带来的副作用，并针对多模态模型（如 Grok, Claude）的兼容性进行补全。

## 4. 社区热点
今日讨论最热烈的问题集中在**数据安全**与**会话状态持久化**：

- **[Issue #25592](https://github.com/openclaw/openclaw/pull/25592) [P1]**: **工具调用间的文本泄露**。
  - **热度**：评论 33 条。
  - **分析**：用户发现 Agent 在工具调用间隙的“内心独白”或错误处理文本会被错误地路由到 Slack/iMessage 等外部渠道，这构成了严重的隐私与 UX 问题，社区正在积极讨论修复方案。
  
- **[Issue #92201](https://github.com/openclaw/openclaw/pull/92201) [P1]**: **Anthropic 流式 Thinking 签名失效**。
  - **热度**：评论 17 条。
  - **分析**：嵌入式运行器在重放 Anthropic 模型的 thinking 块时偶发签名校验失败，导致会话无法恢复，反映了在复杂模型推理链路下的状态管理难题。

- **[Issue #7707](https://github.com/openclaw/openclaw/pull/7707) [P2]**: **基于来源的记忆信任标签**。
  - **热度**：评论 13 条。
  - **分析**：用户提出应按数据来源（用户指令、网页抓取、第三方技能）标记记忆信任度，以防止“记忆投毒”攻击。这显示了用户对 Agent 安全防护深度的关注。

## 5. Bug 与稳定性
今日报告了大量高优先级 Bug，部分已关联修复 PR：

**严重**:
- **[Issue #98416](https://github.com/openclaw/openclaw/pull/98416)**: v2026.6.11 版本发布包缺失重入守卫，导致回复会话初始化冲突。**状态**：Open，已定位源码提交。
- **[Issue #25592](https://github.com/openclaw/openclaw/pull/25592)**: 工具调用间文本泄露至消息渠道。
- **[Issue #38327](https://github.com/openclaw/openclaw/pull/38327)**: Google Vertex Gemini 3.1 模型调用出现“Cannot convert undefined or null to object”回归错误。

**高优先级 (P1)**:
- **[Issue #98740](https://github.com/openclaw/openclaw/pull/98740)**: Mattermost 原生斜杠命令在 6.11 插件外部化后全部返回 401。**修复**：PR [#98819](https://github.com/openclaw/openclaw/pull/98819) 已提交修复。
- **[Issue #98528](https://github.com/openclaw/openclaw/pull/98528)**: 回归问题，工具输出在首次调用后返回空内容。
- **[Issue #94228](https://github.com/openclaw/openclaw/pull/94228)**: Anthropic 原生路径重放历史 thinking 块导致长线程损坏。

## 6. 功能请求与路线图信号
- **记忆安全架构**: Issue [#7707](https://github.com/openclaw/openclaw/pull/7707) 和 [#20935](https://github.com/openclaw/openclaw/pull/20935)（记忆审计日志）表明社区强烈要求构建更安全的 Agent 记忆系统，这可能成为未来版本的重点。
- **会话生命周期优化**: Issue [#45608](https://github.com/openclaw/openclaw/pull/45608) 建议在重置前自动进行记忆刷写，与当前的会话压缩机制对齐。PR [#75554](https://github.com/openclaw/openclaw/pull/75554) 关于插件任务生命周期 API 的合并，预示着 OpenClaw 正在向更成熟的任务调度架构演进。
- **多模态工具增强**: Issue [#44431](https://github.com/openclaw/openclaw/pull/44431) 提出的浏览器工具改进建议（CSS 选择器支持等），结合 PR [#98688](https://github.com/openclaw/openclaw/pull/98688) 对 Fal 模型的支持，显示了项目在多模态与自动化能力上的持续投入。

## 7. 用户反馈摘要
- **升级体验受损**：多位用户反馈 v2026.6.11 版本存在严重回归（如 [#98672](https://github.com/openclaw/openclaw/pull/98672)），导致会话频繁中断，建议用户暂时观望更新。
- **渠道集成痛点**：iOS/WebChat 用户报告消息投递不稳定（[#97983](https://github.com/openclaw/openclaw/pull/97983)），微信、飞书等渠道存在流式传输或媒体文件处理的边缘 Bug，影响了终端用户的使用体验。
- **安全焦虑**：用户对文本泄露和记忆投毒表示担忧，希望官方能尽快提供更细粒度的数据控制权。

## 8. 待处理积压
- **PR 积压严重**：目前有 **409 个待合并 PR**，其中包括多个标记为 P1 的修复（如 [#97095](https://github.com/openclaw/openclaw/pull/97095) 记忆搜索修复），建议维护者优先处理与安全（`security-boundary`）和兼容性（`compatibility`）相关的 PR。
- **长期未决 Issue**：Issue [#81594](https://github.com/openclaw/openclaw/pull/81594)（/steer 指令目标错误）和 [#55027](https://github.com/openclaw/openclaw/pull/55027)（飞书流式卡片问题）已被标记为 stale 或长期 open，建议社区重新评估其优先级。

---
*分析师注：当前项目处于高负荷迭代期，建议开发团队在发布新功能前优先解决 v2026.6 版本引入的回归问题，特别是涉及会话状态与鉴权的核心模块。*

---

## 横向生态对比

# AI 智能体与个人助手开源生态日报 (2026-07-02 横向对比分析)

## 1. 生态全景
今日开源 AI 智能体生态呈现**“核心项目高负荷迭代，安全性成新焦点”**的态势。头部项目（OpenClaw, Hermes, IronClaw）处于密集修复期，普遍面临架构升级带来的回归问题与稳定性挑战。社区关注度从单纯的“功能实现”明显转向**安全边界加固**（沙箱逃逸、数据泄露）与**自主性提升**（Cron 任务、多智能体协作）。同时，模型上下文管理（Token 消耗、记忆压缩）成为各项目优化用户体验的共同痛点。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新 | 今日发布 | 健康度/状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 253 | 500 | 无 | **高负荷预警**。PR 积压 409 个，回归问题频发，处于修复攻坚期。 |
| **Hermes Agent** | 45 | 35 | **v0.18.0** | **发布后震荡**。重磅版本发布次日，社区反馈活跃，回归 Bug 较多。 |
| **Zeroclaw** | 50 | 50 | 无 | **高活跃重构**。重心在 MCP 集成与安全加固，Web 端体验滞后。 |
| **IronClaw** | 25 | 50 | 无 | **架构演进期**。聚焦 Reborn 后端测试与多智能体运行时，Routine 稳定性存疑。 |
| **NanoBot** | - | 48 | 无 | **健康迭代**。测试基建落地快，安全修复响应迅速，积压少。 |
| **LobsterAI** | - | 11 | Nightly | **发布准备期**。功能收敛明显，聚焦体验优化，代码合并频率高。 |
| **CoPaw** | 24 | 50 | 无 | **修复期**。v2.0.0 前的最后打磨，内存泄漏与并发问题需关注。 |
| **NanoClaw** | - | 12 | 无 | **隐患暴露**。新功能推进快，但基础稳定性（Docker/网络）问题严重。 |
| **PicoClaw** | - | 11 | Nightly | **稳定迭代**。移动端适配与流式输出是当前重点。 |
| **其他** | - | - | - | NullClaw, TinyClaw, Moltis, ZeptoClaw, EasyClaw 无明显活动。 |

> **注**：健康度评估基于 PR 积压量、Bug 严重程度及版本稳定性综合得出。

## 3. OpenClaw 在生态中的定位

作为生态中的**核心参照项目**，OpenClaw 展现出明显的规模效应与集成深度优势，但也面临“船大难掉头”的挑战：

*   **优势（集成广度与渠道能力）**：OpenClaw 在多渠道适配（Slack, iMessage, Mattermost, 飞书）和插件生态的成熟度远超同类。今日针对 Mattermost 和飞书的快速修复显示了其企业级集成的护城河。
*   **技术路线差异**：相比 Hermes 和 IronClaw 追求**智能体自主性**（如 Goal Mode, Judgment Release），OpenClaw 更侧重于**连接器稳定性与安全性**。今日关于“工具调用文本泄露”和“记忆投毒防御”的讨论，表明其更关注生产环境下的数据边界。
*   **对比劣势**：OpenClaw 正遭受严重的 PR 积压（409 条）和回归问题（v2026.6.11），其响应速度已不如 NanoBot 等轻量化项目敏捷。生态对 OpenClaw 的稳定性焦虑较高。

## 4. 共同关注的技术方向

跨项目分析显示，以下三个方向已成为行业共识与技术热点：

1.  **安全边界与沙箱逃逸**
    *   **涉及项目**：NanoBot, Zeroclaw, OpenClaw, Hermes。
    *   **具体诉求**：NanoBot 修复了 MCP 策略绕过与符号链接逃逸漏洞；Zeroclaw 引入了 Zip 炸弹防御；Hermes 修复了 RCE 黑名单绕过；OpenClaw 讨论记忆信任标签。这表明随着 Agent 权限扩大，**防止恶意 Prompt 或工具调用破坏宿主环境**已成为生存红线。

2.  **会话持久化与上下文管理**
    *   **涉及项目**：OpenClaw, IronClaw, CoPaw, Hermes。
    *   **具体诉求**：OpenClaw 遭遇 Anthropic 流式 Thinking 签名失效；IronClaw 与 CoPaw 均在优化上下文压缩以降低 Token 消耗；Hermes 用户抱怨默认 Prompt 过长。**如何低成本、高保真地维持长对话状态**是提升智能体体验的关键。

3.  **开放协议与模型兼容性**
    *   **涉及项目**：Zeroclaw, NanoBot, PicoClaw。
    *   **具体诉求**：Zeroclaw 推进 OpenAI 兼容 API 端点；NanoBot 支持 Anthropic OAuth；PicoClaw 修复 OpenAI 兼容性。生态正努力消除模型绑定，向**“一次构建，多模型运行”**的标准化架构演进。

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构特点 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **全能型连接器** | 企业级用户、多渠道集成场景 | 插件化架构，侧重消息路由与渠道适配。 |
| **Hermes Agent** | **自主智能体** | 极客、桌面端个人助理用户 | 强调“判断”机制与后台任务，具备 RCE 防护的本地执行环境。 |
| **IronClaw** | **多智能体编排** | 开发者、复杂工作流场景 | “Reborn”架构，支持递归多智能体运行时，侧重自动化任务。 |
| **Zeroclaw** | **安全沙箱运行时** | 安全敏感型应用 | 强隔离沙箱，MCP 资源支持，侧重防御性架构。 |
| **NanoBot** | **轻量敏捷框架** | 研究者、个人开发者 | 测试基建完善，迭代极快，侧重模型兼容与工具链。 |
| **LobsterAI** | **桌面端体验** | C端用户、知识库管理 | 侧重 UI/UX 交互优化与多模态文件处理。 |

## 6. 社区热度与成熟度

*   **第一梯队（成熟期/高负荷）**：**OpenClaw** 虽活跃度最高，但 Bug 积压严重，正处于**“修漏补缺”的阵痛期**；**Hermes Agent** 借 v0.18.0 大版本发布迎来热度高峰，社区争议集中在性能开销与升级体验，处于**“发布后回稳期”**。
*   **第二梯队（成长期/高潜力）**：**IronClaw** 和 **Zeroclaw** 展现出极高的技术前瞻性（多智能体、安全沙箱），代码迭代快且方向明确，属于**“架构升级期”**；**NanoBot** 修复响应迅速，代码质量把控较好，处于**“健康扩张期”**。
*   **第三梯队（孵化期）**：**LobsterAI** 和 **CoPaw** 正在解决基础的体验与性能问题，如内存泄漏和 UI 交互，距离大规模生产应用尚有距离；**NanoClaw** 虽有创新功能，但基础稳定性问题（进程崩溃）拉低了成熟度评分。

## 7. 值得关注的趋势信号

1.  **从“被动响应”转向“主动自主”**：
    IronClaw 的 Routine Automation 和 Hermes 的 Cron 结果注入，标志着智能体正在从“Chat Bot”向“Background Agent”演进。未来版本中，**后台任务调度与主动消息推送**能力将成为标配。

2.  **“静默失败”不可接受**：
    NanoClaw 和 OpenClaw 的用户反馈均强烈指责“消息丢失”或“无报错卡死”。开发者需注意，Agent 的**可观测性与错误反馈机制**（Observability）已直接关系到用户体验，黑盒运行模式不再被容忍。

3.  **OAuth 与订阅制集成的迫切需求**：
    NanoBot 社区对 Anthropic OAuth 的呼声表明，用户厌倦了繁琐的 API Key 管理。**支持主流模型订阅账号直接登录**将成为降低个人用户使用门槛的关键功能。

4.  **记忆系统的“防火墙”化**：
    OpenClaw 提出的“记忆信任标签”显示，记忆系统不再是简单的向量库，而是需要具备**来源验证与防毒能力**的安全子系统。这为 RAG 技术在 Agent 领域的应用提出了新的安全架构要求。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-07-02)

## 1. 今日速览
NanoBot 项目今日呈现出极高的开发活跃度，PR 更新量高达 48 条，其中 22 条已合并或关闭，显示出维护团队正在高效地进行代码迭代与清理。今日重点集中在**安全性增强**与**生态扩展**，不仅修复了严重的 MCP 策略绕过漏洞，还引入了 Anthropic OAuth 和 You.com 搜索等备受期待的新功能。Issues 板块保持健康流转，新报告的 Bug 能够迅速得到响应，部分已在当日修复。整体来看，项目正处于功能快速演进与稳定性重构并行的健康阶段。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 22 个 PR 被合并或关闭，显著推进了以下领域：

*   **测试基建重构落地**：随着 [PR #3982](HKUDS/nanobot PR #3982) 和 [PR #3983](HKUDS/nanobot PR #3983) 的关闭，新的脚本化智能体运行器与阻塞测试覆盖已合并入主分支，这将大幅提升后续功能开发的回归测试稳定性。
*   **安全性与沙箱增强**：[PR #4629](HKUDS/nanobot PR #4629) 修复了通过相对符号链接逃逸工作区的漏洞，强化了 `bwrap` 沙箱边界；[Issue #4434](HKUDS/nanobot Issue #4434) 的关闭意味着 MCP 资源访问控制策略已得到修正。
*   **上下文与性能优化**：[PR #4581](HKUDS/nanobot PR #4581) 正在推进低价值上下文负载的修剪，旨在降低 Token 消耗并提升模型响应精度。
*   **工具链改进**：[PR #4635](HKUDS/nanobot PR #4635) 针对开发者痛点，增强了 `edit_file` 的行号定位能力，减少了编辑错位的发生。

## 4. 社区热点
*   **[Issue #4604] Anthropic OAuth 支持**：该 Issue 呼吁支持 Claude 订阅用户的 OAuth 登录方式，而非仅限于 API Key。目前已有对应的 [PR #4632](HKUDS/nanobot PR #4632) 提交实现，社区对此反响热烈，标志着 NanoBot 正降低个人用户的接入门槛。
*   **[Issue #4634] edit_file 目标消歧义**：用户反馈模型在编辑文件时常定位到错误的位置。该问题引发了关于如何改进 Benchmark 和工具提示的讨论，显示出项目在代码修改（Coding）场景下的深度优化方向。

## 5. Bug 与稳定性
*   **[严重] [Issue #4434] MCP 安全策略绕过**：已关闭。该漏洞允许模型绕过 `enabledTools: []` 的限制访问 MCP 资源。目前已在主分支修复，建议所有暴露公网服务的用户尽快更新代码。
*   **[严重] [Issue #4615] Gateway 启动崩溃**：已关闭。CronService 在特定文件系统下执行 `fsync()` 导致 OSError。该问题影响启动流程，目前已修复。
*   **[中等] [Issue #4637] Telegram 长消息渲染异常**：长消息分片后，非末尾分片无法正确渲染 Markdown。目前 Issue 处于 Open 状态，尚无关联 PR，影响 Telegram 频道的用户体验。
*   **[已修复] [PR #4629] 沙箱逃逸漏洞**：修复了通过符号链接逃逸工作区的安全隐患，提升了本地执行环境的安全性。

## 6. 功能请求与路线图信号
*   **OAuth 生态扩展**：结合 [Issue #4604] 与 [PR #4632]，Anthropic OAuth 支持已列入高优先级，预计将在下一版本中合并，方便个人订阅用户使用。
*   **搜索引擎多元化**：[PR #4638](HKUDS/nanobot PR #4638) 新增了 You.com 搜索提供商，表明项目致力于集成更多外部知识源，增强 Agent 的联网搜索能力。
*   **记忆管理精细化**：[PR #4626](HKUDS/nanobot PR #4626) 提出了“急切合并”机制，试图解决长对话中的记忆延迟问题，这可能成为后续版本 Agent 长期记忆能力的关键升级。
*   **OpenAI Response API**：[Issue #4612](HKUDS/nanobot Issue #4612) 请求支持非兼容模式的 OpenAI Response API，反映了部分企业级用户对特定 API 接口格式的需求。

## 7. 用户反馈摘要
*   **接入便利性**：用户强烈希望能直接使用 Claude 的订阅 Token 而非通过 API 付费，目前的 API Key 门槛对个人尝鲜者不够友好。
*   **多平台体验**：Telegram 用户反馈长文本 Markdown 渲染存在问题，影响了复杂回复的阅读体验；飞书用户建议使用系统级消息分割线来优化新会话的视觉体验 ([Issue #4619](HKUDS/nanobot Issue #4619))。
*   **代码编辑准确性**：开发者在利用 Agent 进行代码修改时，发现 `edit_file` 容易在重复代码块中“迷路”，迫切需要更精确的定位机制。

## 8. 待处理积压
*   **Telegram 长消息渲染**：[Issue #4637](HKUDS/nanobot Issue #4637) 目前仅确认了问题，尚无明确的修复 PR，建议维护者关注。
*   **OpenAI Response API 支持**：[Issue #4612](HKUDS/nanobot Issue #4612) 需求明确但尚无人认领，可能需要架构层面的适配。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目日报 (2026-07-02)

## 1. 今日速览
Zeroclaw 项目今日保持**极高活跃度**，共更新 50 条 Issues 和 50 条 PRs，其中新开/活跃 Issue 达 45 条，显示社区反馈与开发迭代正处于高潮期。尽管没有发布新版本，但代码库变动频繁，主要集中在 **MCP 工具集成修复**、**Web Dashboard 稳定性** 以及 **安全性加固**（如 Zip bomb 防护）。目前有 43 个 PR 处于待合并状态，表明项目正在进行大规模的功能重构与代码审查，尤其在 API 兼容性和插件架构方面投入了大量精力。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 7 个 PR 被合并或关闭，重点推进了安全性与底层架构的修复：

*   **MCP 资源支持落地**：随着 Issue #4467 的关闭，MCP 资源与提示词支持已合并（PR #8508 虽显示 Closed，但其依赖的 #8403 已合并，Issue 已解决），标志着 Agent 现在可以更丰富地上下文化工具调用。
    *   链接: [Issue #4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467)
*   **安全性修复**：PR #8547 移除了存在漏洞的 `rag-pdf` 依赖以清除 RUSTSEC-2026-0192 警告；PR #8574 引入了对 Zip 炸弹攻击的防御机制，加固了 Skill 下载的安全性。
    *   链接: [PR #8547](https://github.com/zeroclaw-labs/zeroclaw/pull/8547)
    *   链接: [PR #8574](https://github.com/zeroclaw-labs/zeroclaw/pull/8574)
*   **底层架构优化**：PR #8465 修复了 Cron 任务的关闭信号传递，PR #8582 修复了守护进程连接失败时的僵尸进程问题，提升了 Runtime 的健壮性。
    *   链接: [PR #8465](https://github.com/zeroclaw-labs/zeroclaw/pull/8465)
    *   链接: [PR #8582](https://github.com/zeroclaw-labs/zeroclaw/pull/8582)

## 4. 社区热点
今日讨论最热烈的话题集中在工具调用缺失与架构扩展：

*   **[P1] TUI 会话中 MCP 工具缺失 (Issue #8193)**
    *   评论数：13
    *   链接: [Issue #8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)
    *   **分析**：多个用户报告 Gateway 显示工具已连接，但 TUI 会话无法发现这些工具，导致工作流阻塞。这是目前影响最大的功能性 Bug，涉及 Runtime 和 API 层的不一致性。
*   **RFC: 工作流泳道与自动化治理 (Issue #6808)**
    *   评论数：13
    *   链接: [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)
    *   **分析**：社区正在深入讨论如何优化 Issue 管理流程，通过标签自动化和泳道机制减轻维护者负担，这反映了项目在治理层面的成熟化。
*   **RFC: OpenAI 兼容 API 端点 (Issue #8550 / PR #8486)**
    *   评论数：2 (Issue) / 高关注度 (PR)
    *   链接: [Issue #8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) | [PR #8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)
    *   **分析**：开发者希望 Zeroclaw 直接暴露 OpenAI 兼容的 HTTP 端点，以便接入 LobeChat 等生态客户端。PR #8486 已提交实现，是目前最受期待的功能增强。

## 5. Bug 与稳定性
今日报告了多个高严重性（P1/S1）问题，主要集中在 Web 端和配置解析：

1.  **[P1] Web Dashboard 导致 Agent 运行中断 (Issue #8559)**
    *   状态：OPEN
    *   描述：用户在 Web 端离开聊天窗口时，Agent 任务会被误判为用户中断而停止工作。
    *   链接: [Issue #8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559)
2.  **[P1] Agent 无法使用环境变量作为密钥 (Issue #8553)**
    *   状态：OPEN
    *   描述：`http_request` 工具无法正确读取环境变量中的 Token，导致认证请求失败。
    *   链接: [Issue #8553](https://github.com/zeroclaw-labs/zeroclaw/issues/8553)
3.  **[P1] Web Dashboard 无法发现 SOPs (Issue #8563)**
    *   状态：OPEN
    *   描述：配置的 SOP 文件在 Web 会话中不可见，导致预设流程无法执行。
    *   链接: [Issue #8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563)
4.  **[修复中] Zip 炸弹防御 (PR #8574)**
    *   针对 Issue #8554 的修复已提交，防止恶意压缩包耗尽磁盘空间。

## 6. 功能请求与路线图信号
*   **OpenAI 兼容层 (高概率纳入)**：PR #8486 已经实现了 Gateway 层的 HTTP 端点适配，讨论积极，极有可能在近期版本合并，这将极大扩展 Zeroclaw 作为后端的适用范围。
    *   链接: [PR #8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)
*   **Goal Mode (目标模式)**：Issue #8303 提出引入“目标模式”，允许 Agent 持续运行直到目标达成或预算耗尽，适合长期自主任务，目前 RFC 已接受。
    *   链接: [Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)
*   **Mixture-of-Agents (MoA) 虚拟提供商**：Issue #8568 提议在 Provider 层实现 MoA 架构，通过多模型聚合提升复杂任务处理能力。
    *   链接: [Issue #8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568)

## 7. 用户反馈摘要
*   **Web 端体验存在断点**：多位用户反馈 Web Dashboard 在会话持续性（#8559）和工具发现（#8302, #8563）上存在严重滞后于 TUI/CLI 的情况，感觉像是“二等公民”。
*   **密钥管理复杂度高**：Issue #8226 和 #8553 暴露了当前架构在多租户和敏感信息（环境变量）注入上的不足，用户迫切需要更灵活的 `runtime_secrets` 配置方式。
*   **安装文档需改进**：Issue #5269 指出安装方式文档缺失，特别是 `cargo binstall` 的指引不足，影响了新用户的上手体验。

## 8. 待处理积压
*   **关键架构 RFC 待审查**：Issue #8424 关于 `.ignore` 文件机制的 RFC 和 Issue #8226 关于 Agent 级环境变量的 RFC 均处于 `status:blocked` 状态，亟待维护者审查以解除安全相关功能的阻塞。
*   **长期追踪 Issue**：Issue #6074 正在追踪早期 153 个提交丢失后的恢复工作，虽已活跃但仍需持续关注以防代码回归。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-07-02)

## 1. 今日速览
Hermes Agent 今日处于 **高活跃度震荡期**，社区围绕昨日发布的重磅版本 **v0.18.0 "The Judgment Release"** 展开了密集讨论。虽然新版本带来了近千个 Issue 的修复和大量功能更新，但也引发了若干回归问题（如 Desktop 端菜单刷新、环境变量泄漏等）。过去 24 小时内新增/活跃 Issue 达 45 条，PR 待处理积压达 35 条，显示出用户升级热情高涨，同时维护者面临较大的即时响应压力。整体来看，项目正处于版本发布后的“排雷”阶段，稳定性与兼容性是当前焦点。

## 2. 版本发布
### **v2026.7.1: Hermes Agent v0.18.0 (2026.7.1) — The Judgment Release**
- **发布日期**：2026-07-01
- **更新规模**：本次更新属于重大版本迭代，包含约 **1,720 commits**，合并了 **998 个 PRs**，关闭了 **949 个 Issues**，共有 **370+ 位社区贡献者** 参与。
- **主要变更**：
  - 代码变更量巨大：新增约 251,000 行，删除约 41,000 行，涉及 2,215 个文件。
  - 核心聚焦于 "Judgment"（判断/裁决）机制，暗示在 Agent 决策链、自主性或评估体系上有重大架构升级。
- **迁移注意**：鉴于变更文件极多且涉及核心逻辑，建议用户在升级前仔细查阅 CHANGELOG，特别是自定义插件或非标配置的用户，需留意潜在的破坏性变更。

## 3. 项目进展
今日项目主要集中于修复 v0.18.0 发布后的边缘问题与进行中的功能迭代，共有 15 个 PR 被合并或关闭。

- **核心修复与优化**：
  - **[CLOSED] PR #56728**: 修复了 Gateway 会话工作目录（CWD）在工具表层（terminal/file/code-exec）的传递问题，确保上下文环境一致性。
  - **[CLOSED] PR #56763**: 为 Kanban 功能增加了安全的 Discord 投影循环，优化了消息汇报流。
  
- **新功能推进 (Open PRs)**：
  - **PR #47863**: 正在推进跨平台审批委托功能，允许将非管理员的危险命令审批请求路由至管理员（如微信 -> 飞书），目前仍在审查中。
  - **PR #55954**: 提出了 Hermes Console REPL 功能，旨在提供更安全的非 Shell 命令交互环境，已初步实现 Dashboard API 支持。
  - **PR #56772**: 针对 ACP (Agent Client Protocol) 修复了文件引用处理，提升了 Zed/VS Code 等编辑器集成的稳定性。

## 4. 社区热点
今日讨论最热烈的问题集中在 **自主性功能增强** 与 **特定平台适配稳定性**：

1.  **[Open] Issue #5712**: **True Autonomy - Automatically Inject Cron Results into Live Gateway Chat Sessions** (👍 11, 💬 11)
    - **诉求分析**：用户希望 Cron 后台任务的结果能自动注入到实时的 Gateway 聊天会话中，实现后台与前台的无缝协同。这是对 Hermes Agent “自主性”能力的深度挖掘，反映出高级用户希望打破后台任务的信息孤岛。
    - **链接**：[NousResearch/hermes-agent Issue #5712](https://github.com/NousResearch/hermes-agent/issues/5712)

2.  **[Open] Issue #49858**: **Photon iMessage sidecar death causes silent reconnect death spiral** (💬 8)
    - **诉求分析**：iMessage 适配器的伴随进程崩溃后无法自重启，导致消息通道静默失效。这是影响生产环境的关键连通性问题，用户急需官方提供“自愈”机制。
    - **链接**：[NousResearch/hermes-agent Issue #49858](https://github.com/NousResearch/hermes-agent/issues/49858)

3.  **[Open] Issue #13983**: **16K Tokens consumption by default** (💬 6)
    - **诉求分析**：用户抱怨默认提示词 "who u?" 消耗高达 16K tokens，质疑系统提示词过于臃肿。这反映了在功能丰富与成本控制之间的矛盾，用户呼吁优化 Token 效率。
    - **链接**：[NousResearch/hermes-agent Issue #13983](https://github.com/NousResearch/hermes-agent/issues/13983)

## 5. Bug 与稳定性
今日 Bug 报告主要集中在 **安全逃逸**、**升级回归** 及 **平台特定故障**：

### 严重
- **[CLOSED] Issue #36846**: **Security: dangerous-command denylist bypassable (RCE)**
  - **详情**：终端工具的黑名单机制可通过 Shell 转义绕过，导致远程代码执行风险。
  - **状态**：已关闭，推测已在 v0.18.0 中修复。
  - **链接**：[NousResearch/hermes-agent Issue #36846](https://github.com/NousResearch/hermes-agent/issues/36846)
- **[Open] PR #56764**: **fix(browser): guard Camofox eval private pages**
  - **详情**：修复了浏览器后端在 Camofox 模式下的私有网络评估泄露问题，属于安全边界加固。
  - **链接**：[NousResearch/hermes-agent PR #56764](https://github.com/NousResearch/hermes-agent/pull/56764)

### 高危
- **[Open] Issue #55658**: **Cannot be started after updating**
  - **详情**：用户反馈更新至最新版本后 Desktop 应用无法启动，严重阻碍了版本升级。
  - **链接**：[NousResearch/hermes-agent Issue #55658](https://github.com/NousResearch/hermes-agent/issues/55658)
- **[Open] Issue #56771**: **`execute_code` blocked in interactive Telegram session**
  - **详情**：环境变量 `HERMES_CRON_SESSION` 错误地从 Cron 调度器泄漏到用户 Shell，导致 Telegram 交互会话中代码执行功能被误拦截。
  - **链接**：[NousResearch/hermes-agent Issue #56771](https://github.com/NousResearch/hermes-agent/issues/56771)
- **[Open] Issue #56732**: **Terminal toolset lost in API/ACP modes**
  - **详情**：`hermes-api-server` 和 `hermes-acp` 运行时丢失了所有 terminal 相关工具集，严重影响通过 API/IDE 使用 Agent 的能力。
  - **链接**：[NousResearch/hermes-agent Issue #56732](https://github.com/NousResearch/hermes-agent/issues/56732)

## 6. 功能请求与路线图信号
- **ACP Registry 集成**：Issue #47435 建议将 Hermes Agent 注册到 ACP Registry，以便 Zed/JetBrains/VS Code 等编辑器原生发现并调用。这表明社区对 Hermes 作为通用 AI 后端的集成需求正在增加。
- **Context 管理优化**：Issue #56762 提出工具调用结果与记忆体的条件注入，以减少长对话中的 Token 浪费和信息过载。这与 #13983 的 Token 消耗问题相呼应，预示着 **上下文管理优化** 可能是下个版本的重点方向。
- **Webhook 过滤**：Issue #10572 请求支持 Webhook 载荷过滤或脚本参数，反映出用户希望将 Hermes 更灵活地嵌入现有自动化工作流（如 Todoist 集成）。

## 7. 用户反馈摘要
- **性能焦虑**：多位用户对 Token 消耗表示担忧（#13983），尤其是默认配置下的系统提示词开销，认为对于简单任务而言成本过高。
- **平台差异体验**：Photon/iMessage 用户对连接稳定性颇有微词（#49858, #55416），频繁的断连和缺乏自动重连机制严重影响了作为“个人助手”的可用性。
- **桌面端问题**：Linux 用户面临安装包体积过大（#56513）和菜单刷新导致的 CPU 飙升问题（#53049），显示出 Desktop 客户端在各平台适配上的不一致性。
- **满意度**：尽管存在 Bug，社区对 v0.18.0 的功能丰富度（如 "The Judgment Release"）表示认可，特别是对 Cron 自主性功能的探索显示出极高的热情。

## 8. 待处理积压
- **[Open] PR #47863**: 跨平台审批委托功能已 open 两周，涉及核心交互流程，建议维护者尽快 review 以满足企业级安全需求。
- **[Open] Issue #49445**: Docker 版 Exa 搜索功能失效问题（已关闭，可能是修复后回归验证中），需持续关注其稳定性。
- **[Open] Issue #21710**: Docker 环境下 WhatsApp 桥接无法禁用及 Telegram 错误，长期未解决，影响跨平台用户体验。

---
*数据来源：GitHub Hermes Agent Repository (2026-07-02)*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-07-02)

## 1. 今日速览
PicoClaw 项目今日保持了较高的开发活跃度，共更新了 11 个 Pull Requests 并发布了最新的 Nightly 构建版本。项目重点集中在提升系统稳定性与安全性，多个关键修复 PR 进入待合并状态。社区方面，用户对移动端兼容性及特定渠道的流式输出功能表现出强烈需求。整体来看，项目正在为下一个稳定版本积累高质量的代码提交，核心功能持续迭代中。

## 2. 版本发布
- **nightly: Nightly Build**
  - **版本号**: `v0.3.1-nightly.20260702.2cf030d2`
  - **更新说明**: 自动化构建版本，包含了截至目前的最新代码提交。
  - **注意事项**: 此版本为自动构建，可能存在不稳定性，建议测试环境使用。
  - **变更日志**: [查看完整变更](https://github.com/sipeed/picoclaw/compare/v0.3.1...main)

## 3. 项目进展
今日共有 2 个 PR 被关闭（推测已合并），显著提升了网关生命周期管理的完整性与用户体验：
- **PR #3116 [CLOSED] - fix(pico): complete turn.done lifecycle signaling**
  - **进展**: 修复了 Pico `turn.done` 生命周期中的信号传递缺陷。
  - **价值**: 解决了队列消息 `request_id` 丢失的问题，确保每个入站请求都能收到正确的响应，提升了系统的可靠性。
  - **链接**: [sipeed/picoclaw PR #3116](https://github.com/sipeed/picoclaw/pull/3116)
- **PR #2975 [CLOSED] - feat(telegram): treat reply to bot message as mention in group chats**
  - **进展**: 增强了 Telegram 群组交互体验。
  - **价值**: 用户回复机器人消息现在等同于 @提及，降低了群聊中唤醒机器人的门槛。
  - **链接**: [sipeed/picoclaw PR #2975](https://github.com/sipeed/picoclaw/pull/2975)

此外，还有 9 个 PR 处于待合并状态，涵盖了 ID 规范化、模型回退链配置及安全修复等关键改进。

## 4. 社区热点
今日社区关注的焦点主要集中在功能扩展与平台兼容性上：
- **Issue #3201 [Feature] Support streaming output for QQ channel**
  - **热度**: 新开 Issue，引发对即时通讯体验的讨论。
  - **诉求**: 用户希望 QQ 频道能像 Telegram 一样支持 Token-by-Token 的流式输出，减少等待焦虑。
  - **链接**: [sipeed/picoclaw Issue #3201](https://github.com/sipeed/picoclaw/issues/3201)
- **PR #3200 feat(models): add configurable default fallback chain**
  - **热度**: 新开 PR，提供模型容错机制。
  - **诉求**: 允许用户在 Web UI 中配置模型的默认回退链，提高服务的高可用性。
  - **链接**: [sipeed/picoclaw PR #3200](https://github.com/sipeed/picoclaw/pull/3200)

## 5. Bug 与稳定性
今日报告的关键 Bug 和修复提交主要集中在边缘场景处理与安全性：
- **严重级:**
  - **Issue #3164 [BUG] Process hooks crash gateway on Android/Termux**: 在 Android/Termux 环境下，JSON-RPC 进程钩子会导致网关启动后立即崩溃。
    - **状态**: 待处理 (Stale)。
    - **链接**: [sipeed/picoclaw Issue #3164](https://github.com/sipeed/picoclaw/issues/3164)
- **安全修复:**
  - **PR #3160 fix(auth): reject cross-site launcher setup requests**: 修复了跨站启动器设置请求可能修改密码的安全漏洞。
    - **状态**: Open
    - **链接**: [sipeed/picoclaw PR #3160](https://github.com/sipeed/picoclaw/pull/3160)
- **一般修复:**
  - **PR #3161 fix(exec): keep deny patterns active for custom allow rules**: 防止自定义允许规则意外绕过安全拒绝模式，修复了潜在的安全风险。
    - **链接**: [sipeed/picoclaw PR #3161](https://github.com/sipeed/picoclaw/pull/3161)
  - **PR #3202 fix(routing): strip leading/trailing underscores in ID normalization**: 修复 ID 规范化逻辑，防止无效字符导致的潜在路由错误。
    - **链接**: [sipeed/picoclaw PR #3202](https://github.com/sipeed/picoclaw/pull/3202)

## 6. 功能请求与路线图信号
- **新增流式输出支持**: Issue #3201 提出的 QQ 频道流式输出需求，符合项目多渠道统一体验的趋势，可能会被纳入后续迭代。
- **模型高可用配置**: PR #3200 提出的“模型回退链”功能，反映了用户对服务稳定性的重视，该功能一旦合并，将极大提升生产环境的容错能力。
- **兼容性改进**: PR #3165 试图恢复火山引擎 Doubao Seed XML tool calls 的兼容性，显示出项目对主流模型适配性的持续关注。

## 7. 用户反馈摘要
- **移动端体验痛点**: 有用户反馈在 Android/Termux 环境下运行网关极其不稳定，甚至运行最简单的 Hook 也会崩溃，表明移动端适配仍是短板。
- **交互体验需求**: 用户期待在 QQ 等即时通讯平台上获得更流畅的“打字机”效果（流式输出），而非等待长文本一次性返回。
- **安全意识提升**: 社区贡献者提交了多个安全相关 PR（如防止跨站请求、防止命令注入绕过），侧面反映了项目在安全审计方面的社区参与度较高。

## 8. 待处理积压
以下重要 Issue 和 PR 处于长期未响应或待处理状态，建议维护者关注：
- **Issue #3164**: Android/Termux 平台崩溃问题虽标记为 Stale，但严重影响特定用户群，需验证是否为底层库兼容性问题。
- **PR #3104, #3103, #3100**: 前端依赖更新（shadcn, typescript-eslint, vite）处于待合并状态时间较长，可能存在依赖冲突或测试未通过的情况，需及时跟进以避免技术债务积累。
- **PR #3165**: OpenAI 兼容性修复 PR 处于 Stale 状态，可能需要进一步的测试验证才能合并。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-07-02)

## 1. 今日速览
NanoClaw 项目今日呈现“功能大步前进，隐患集中暴露”的态势。社区贡献活跃，共有 12 个 PR 更新，其中 6 个功能增强与修复类 PR 成功合并/关闭，显著提升了系统的扩展性与健壮性。然而，用户 @allixsenos 集中提交了 4 条高严重程度的 Issue，揭示了从网络配置、进程稳定性到错误反馈机制的多处关键缺陷，暴露出 Docker 默认部署与异常处理流程存在“静默失败”的风险。项目整体处于快速迭代期，需重点关注新引入的稳定性问题。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 6 个 PR 合并或关闭，主要集中在技能生态扩展、API 兼容性与错误处理增强：

*   **生态扩展与备份机制**：合并了 [PR #1693](https://github.com/nanocoai/nanoclaw/pull/1693) 与 [PR #1597](https://github.com/nanocoai/nanoclaw/pull/1597)，分别引入了自动状态备份技能与 QMD 语义对话搜索技能，增强了数据安全性与检索能力。
*   **API 兼容性增强**：[PR #1257](https://github.com/nanocoai/nanoclaw/pull/1257) 已关闭，支持了自定义 API 端点（如 z.ai），改善了第三方 API 适配能力。
*   **流程与修复**：[PR #1716](https://github.com/nanocoai/nanoclaw/pull/1716) 引入了贡献前自动化检查技能，降低了贡献者门槛；[PR #2677](https://github.com/nanocoai/nanoclaw/pull/2677) 增加了调度任务的重试机制。
*   **内存泄漏修复**：[PR #2905](https://github.com/nanocoai/nanoclaw/pull/2905) 修复了 WhatsApp 重连时的 Socket 内存泄漏问题。

## 4. 社区热点
今日社区关注点集中在系统稳定性与配置正确性上，用户 @allixsenos 提交的系列 Issue 引发了关于“开箱即用”体验的深度讨论：

*   **[Issue #2900]** Webhook 端口占用导致宿主进程崩溃，被视为严重稳定性问题。
*   **[Issue #2903]** 默认 Docker 部署存在网络配置不一致，导致 Agent 无法响应，影响新用户体验。
*   **[Issue #2902]** 消息“静默吞没”问题，即用户发送消息后无响应也无报错，严重影响交互体验。

## 5. Bug 与稳定性
今日报告了多个影响系统核心稳定性的 Bug，按严重程度排列如下：

1.  **[严重] 进程崩溃**：[Issue #2900](https://github.com/nanocoai/nanoclaw/issues/2900) 指出 Webhook 端口绑定失败（EADDRINUSE）会导致整个宿主进程崩溃。该组件本应支持优雅降级，目前却成为单点故障源。**状态：待修复。**
2.  **[严重] 部署阻断**：[Issue #2903](https://github.com/nanocoai/nanoclaw/issues/2903) 报告 OneCLI 默认配置下，Gateway 绑定地址与客户端目标地址不一致（127.0.0.1 vs 10.0.0.1），导致 Agent 永远无法响应。**状态：待修复。**
3.  **[高] 数据丢失/静默失败**：[Issue #2902](https://github.com/nanocoai/nanoclaw/issues/2902) 描述了消息被 Channel 接收后，因 Agent 容器启动失败而被静默丢弃，仅记录在日志中，用户无感知。**状态：待修复。**
4.  **[中] 配置无效**：[Issue #2901](https://github.com/nanocoai/nanoclaw/issues/2901) 指出 `.env` 文件中的 `WEBHOOK_PORT` 配置被代码忽略，导致配置与预期不符。**状态：待修复。**

## 6. 功能请求与路线图信号
今日待合并的 PR 显示了项目在多平台适配与易用性上的演进方向：

*   **Agent 模板化**：[PR #2890](https://github.com/nanocoai/nanoclaw/pull/2890) 提出了 Agent 模板加载机制，允许用户从库或 Git 仓库加载预配置的指令与工具集，有望成为下一版本的核心特性。
*   **运维便捷性**：[PR #2906](https://github.com/nanocoai/nanoclaw/pull/2906) 提议增加实例级默认 Agent Provider，简化多群组配置；[PR #2771](https://github.com/nanocoai/nanoclaw/pull/2771) 建议配置 `--shm-size` 以解决 Chromium 内存不足问题，这对浏览器类 Agent 尤为关键。
*   **多模态能力**：[PR #2317](https://github.com/nanocoai/nanoclaw/pull/2317) 正在推进免费的本地语音转录技能，预示项目将支持更丰富的交互方式。

## 7. 用户反馈摘要
根据 Issue 详情分析，用户反馈主要集中在以下痛点：

*   **错误透明度不足**：用户强烈反感“静默失败”，希望在 Agent 调用失败时收到明确反馈，而不是毫无反应。
*   **默认配置的健壮性**：用户期望 Docker 部署的默认配置应当是“即插即用”的，目前的网段冲突问题增加了上手难度。
*   **进程健壮性**：辅助组件的故障不应导致主进程退出，用户呼吁更好的容错隔离机制。

## 8. 待处理积压
*   **关键 Bug 积压**：今日新增的 4 个严重/高级 Bug（Issues #2900-#2903）目前均未分配处理者，处于 Open 状态，建议维护者立即介入，特别是 #2900 涉及进程崩溃，需优先修复。
*   **长期 PR 审查**：[PR #2317](https://github.com/nanocoai/nanoclaw/pull/2317) (语音转录) 自 5 月开启至今未合并，需关注是否存在技术阻碍或缺乏 Review。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-07-02)

## 1. 今日速览
IronClaw 项目今日保持**极高活跃度**，过去24小时内共有 25 条 Issue 更新和 50 条 PR 更新。项目重心明显向 **"Reborn" 架构的后端覆盖测试与稳定性修复**倾斜，开发团队正在高强度推进自动化测试框架的构建。虽然无新版本发布，但代码合并频率高，共计 23 个 PR 被合并或关闭。值得注意的是，社区反馈了大量关于 Routine（自动化任务）功能的 P1/P2 级 Bug，显示该功能正处于关键打磨期。多智能体运行时的 PR 提交标志着项目正在向更复杂的任务编排能力演进。

## 2. 版本发布
- **无新版本发布**。
- *注：PR #5311 目前仍处于 OPEN 状态，包含多个核心库的 API Breaking Changes，预计将在合并后触发新版本发布，开发者需密切关注迁移指南。*

## 3. 项目进展
今日项目在架构重构、测试覆盖与功能增强三个方向取得显著进展：

- **架构重构与性能优化**
  - **上下文管理落地**：PR #5149 (Context management) 已关闭，标志着削减 Prompt Token 消耗的优化方案正式落地。后续优化 PR #5450 和 #5435 正在推进，旨在通过精简输出和压缩历史记录进一步降低延迟。
  - **自动化触发机制修复**：PR #5515 修复了 Scheduled-trigger 无法正确创建/变更触发器的严重问题，解决了自动化任务自引用的死循环 Bug。

- **测试覆盖率大幅提升**
  - 围绕 Reborn 后端的集成测试套件正在快速构建，今日合并了多个 Tier-0 和 Tier-1 级别的测试 PR，包括 Memory search/tree (#5434) 和 Trigger management (#5482)，显著提升了核心功能的可维护性。

- **功能增强**
  - **Slack 个人工具集成**：PR #4941 已合并，新增了基于用户令牌的 Slack 工具，扩展了 Agent 在 Slack 中的搜索和操作能力。
  - **多智能体运行时**：PR #5519 提交了生产级递归多智能体运行时，支持显式并行与真实 LLM 执行，预示着项目将支持更复杂的任务拆解与协作模式。

## 4. 社区热点
今日讨论焦点集中在自动化任务的稳定性与权限管理上：

- **Issue #5459 [OPEN]**: [Configurable skills and tools](https://github.com/nearai/ironclaw/issues/5459)
  - **热度分析**：作为可配置化工具体系的基础性 Issue，它引发了关于 WASM 工具安装权限（Admin vs User）及其可见性的讨论。配套 PR #5499 已提交，显示核心团队正在积极响应这一需求。

- **Issue #5456 [OPEN]**: [Routine runs fail with runner lease expiration](https://github.com/nearai/ironclaw/issues/5456)
  - **痛点分析**：这是今日报告最严重的回归问题之一。Routine 运行因 Runner 租约过期（90秒限制）而大面积失败，影响了邮件和多工具调用场景。社区呼吁调整阈值或优化保活机制。

- **Issue #5505 [OPEN]**: [Routine creation prompt is embedded inside the created routine](https://github.com/nearai/ironclaw/issues/5505)
  - **反馈**：用户发现创建自动化任务时，Prompt 会错误地包含“创建任务”本身的指令，导致逻辑闭环。目前已由 PR #5515 修复。

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，主要集中在 Routine 和 WebUI 交互模块：

**严重**

1.  **Routine 运行大面积失败** [Issue #5456](https://github.com/nearai/ironclaw/issues/5456)
    - **现象**：多工具调用场景下，90秒的 Runner 租约过期导致 Workflow 中断。
    - **状态**：Open，暂无关联 Fix PR，需引起重视。

2.  **Routine 创建无限挂起** [Issue #5504](https://github.com/nearai/ironclaw/issues/5504)
    - **现象**：创建 Routine 时仅显示计划信息，随后无响应，无确认或报错。
    - **状态**：Open。

3.  **Google Sheets 协议违规** [Issue #5415](https://github.com/nearai/ironclaw/issues/5415)
    - **现象**：涉及 18-25 次工具调用的工作流触发 Protocol violation 错误。

**中等**

- **内存隐私泄露风险** [Issue #5460](https://github.com/nearai/ironclaw/issues/5460)：Workspace 中的 Memories 对所有用户可见。
- **WebUI 性能劣化** [Issue #5509](https://github.com/nearai/ironclaw/issues/5509)：随着聊天记录增加，创建新对话的延迟线性增长。
- **Fix PR 已提交**：针对 Routine 创建自引用 Bug 的 [PR #5515](https://github.com/nearai/ironclaw/pull/5515) 已提交。

## 6. 功能请求与路线图信号
- **多智能体协作**：PR #5519 的提交表明项目正从单一 Agent 执行向多 Agent 并行、递归任务处理演进，这可能是下一阶段的核心竞争力。
- **精细化的权限控制**：Issue #5459 及其 PR #5499 暗示项目正在构建更复杂的租户隔离和工具分发机制，Admin 全局安装与 User 私有安装的分层设计将成为可能。
- **上下文优化持续迭代**：PR #5450 和 #5435 显示团队正在通过压缩和精简输出 Token 来解决大模型上下文窗口限制和超时问题。

## 7. 用户反馈摘要
- **自动化任务体验受损**：多位用户反馈在 6/30 的测试中，自动化任务失败率极高，主要归因于租约过期和挂起问题，严重影响了对该功能的信任度。
- **WebUI 交互困惑**：用户指出 Logs 页面加载异常、Routine 无法删除以及 Slack 授权状态混乱等问题，暴露了前端状态管理与后端服务同步的不一致。
- **测试工具反馈**：开发者对于 Reborn 架构下的 Integration Harness 表示关注，特别是对 `E-MULTIUSER` 场景的支持需求强烈。

## 8. 待处理积压
- **Issue #4108** [Nightly E2E failed](https://github.com/nearai/ironclaw/issues/4108)：该 Issue 自 5 月底开启至今未关闭，显示 CI 流水线存在长期的不稳定性，需维护者关注。
- **Issue #5456**：作为影响核心功能的严重 Bug，目前尚无明确的修复排期或 PR，建议优先处理。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-07-02)

## 1. 今日速览
LobsterAI 今日展现出极高的开发活跃度，呈现出明显的“功能收敛与发布准备”特征。过去 24 小时内项目合并了 **19 个 Pull Requests**，涉及 Agent 导入导出、UI 交互优化、MCP 集成及跨平台 Bug 修复等多个核心模块，尽管无新版本 Release 发布，但代码库变动巨大。社区方面，Issue 讨论聚焦于性能优化与国际化细节，整体项目健康度良好，正处于功能迭代后的稳定性打磨阶段。

## 2. 版本发布
**无新版本发布**。虽然今日并未推送新的 Release tag，但鉴于大量功能 PR 的集中合并，预计近期可能会有较大版本的更新发布。

## 3. 项目进展
今日共有 **19 个 PR 被合并**，项目在易用性、数据迁移和系统集成方面取得了实质性突破：

*   **数据迁移与便携性**：合并了 Agent 导入/导出功能 ([#1366](https://github.com/netease-youdao/LobsterAI/pull/1366)) 和定时任务导入/导出功能 ([#1291](https://github.com/netease-youdao/LobsterAI/pull/1291))，极大提升了用户数据备份和迁移的灵活性。
*   **交互体验 (UX) 优化**：
    *   侧栏体验重构，新增图标栏导航与任务统计徽标 ([#1171](https://github.com/netease-youdao/LobsterAI/pull/1171), [#1253](https://github.com/netease-youdao/LobsterAI/pull/1253))。
    *   输入体验增强，新增附件一键清除与耗时计时器显示 ([#1242](https://github.com/netease-youdao/LobsterAI/pull/1242), [#1548](https://github.com/netease-youdao/LobsterAI/pull/1548))。
    *   Artifact 面板现支持自动打开新生成的预览卡片 ([#2248](https://github.com/netease-youdao/LobsterAI/pull/2248))。
*   **系统集成与修复**：
    *   新增企查查 MCP 集成及分组服务器管理 ([#2244](https://github.com/netease-youdao/LobsterAI/pull/2244))。
    *   修复 Windows 平台拖入 .pptx/.docx 文件无法添加附件的长期痛点 ([#1355](https://github.com/netease-youdao/LobsterAI/pull/1355))。
    *   修复 macOS 全屏关闭时的黑屏问题 ([#2246](https://github.com/netease-youdao/LobsterAI/pull/2246))。

## 4. 社区热点
今日最受关注的讨论集中在以下 Issue：

*   **[#2243 skills.load.watch 性能瓶颈与 UI 开关缺失](https://github.com/netease-youdua/LobsterAI/issues/2243)**
    *   **分析**：用户 @woxinsj 深度分析了技能库文件监听机制导致的性能问题。指出在拥有大量技能（174个）时，自动监听会导致严重的 I/O 占用和 Token 浪费。这是一个高质量的功能请求/Bug 报告，建议将监听模式改为手动，反映了高级用户对资源占用的敏感度。
*   **[#1361 删除按钮英文化问题](https://github.com/netease-youdao/LobsterAI/issues/1361)**
    *   **分析**：用户指出自定义 Agent 详情页的删除按钮显示为英文 "delete" 而非中文。虽是小瑕疵，但反映了社区对国际化（i18n）完整度的严格要求。

## 5. Bug 与稳定性
今日修复了多个影响用户体验的关键 Bug，同时也有新的稳定性问题提出：

*   **严重 (已修复)**：修复了 macOS 全屏模式下关闭应用导致的黑屏问题 ([#2246](https://github.com/netease-youdao/LobsterAI/pull/2246))，提升了应用退出时的稳定性。
*   **严重 (待合并)**：针对删除当前正在使用的自定义模型导致白屏崩溃的问题，已提交修复 PR ([#2252](https://github.com/netease-youdao/LobsterAI/pull/2252))，目前状态为 Open。
*   **中等 (已修复)**：修复了 Windows 平台拖拽特定办公文档无法识别为附件的问题 ([#1355](https://github.com/netease-youdao/LobsterAI/pull/1355))。
*   **性能问题 (待处理)**：Issue [#2243](https://github.com/netease-youdao/LobsterAI/issues/2243) 指出的技能库大量文件监听导致的性能瓶颈，目前尚未有官方回应或修复 PR。

## 6. 功能请求与路线图信号
*   **性能可控化**：基于 Issue #2243 的反馈，未来版本可能会引入“手动/自动”切换的技能监听模式，以平衡便利性与性能。
*   **交互细节完善**：待合并的 PR #1364 提议在新建任务页面的输入框工具栏增加模型选择器，这表明项目正致力于降低用户在输入时的上下文切换成本。
*   **快捷操作**：PR #1362 提出的 ESC 键关闭权限弹窗功能，显示了社区希望增强键盘操作支持的诉求。

## 7. 用户反馈摘要
*   **痛点**：高级用户对后台资源占用（Token 消耗、I/O 开销）非常敏感，尤其是“自动监听”这类隐形功能，缺乏 UI 控制开关引发了强烈不满。
*   **场景**：用户在管理大量自定义 Agent 和技能库时，需要更高效的批量操作工具（如一键清除、导入导出），今日合并的多个 PR 有效回应了这一需求。
*   **满意度**：用户对 UI 细节的关注度较高，如侧栏折叠逻辑、按钮语言一致性等，反映出用户对产品精致度的期待在提升。

## 8. 待处理积压
以下长期未处理的 PR/Issue 需维护者关注：

*   **PR [#1362](https://github.com/netease-youdao/LobsterAI/pull/1362) (权限弹窗 ESC 关闭)**：自 4 月开启至今未合并，属于低成本高价值的体验优化，建议尽快 Review。
*   **PR [#1364](https://github.com/netease-youdao/LobsterAI/pull/1364) (输入栏模型选择)**：自 4 月开启，属于 UX 改进，需确认是否与现有设计冲突。
*   **PR [#1367](https://github.com/netease-youdao/LobsterAI/pull/1367) (定时任务重名校验)**：修复了重名 Bug，建议优先合并以避免数据混乱。
*   **Issue [#1361](https://github.com/netease-youdao/LobsterAI/issues/1361) (国际化漏翻)**：虽然标记为 Stale，但至今未修复，属于“蚊子级” Bug，建议在下次发布前清理。

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

# CoPaw (QwenPaw) 项目动态日报 (2026-07-02)

## 1. 今日速览
项目今日保持**高度活跃**状态，共处理了 24 条 Issue 更新和 50 条 PR 更新。开发重心明显向 **v2.0.0 版本的稳定性修复**倾斜，特别是针对 Runtime 2.0 的会话管理、并发处理及内存泄漏问题进行了大量修补。社区对**安全性**（密钥管理、Web访问控制）和**多渠道体验**（飞书、Telegram）的关注度显著提升，多个关键 Bug 已得到修复并合并代码。整体来看，项目正处于 v2.0.0 正式发布前的关键打磨期，核心功能迭代与缺陷修复并行推进。

## 2. 版本发布
**无新版本发布**。根据 Issue #5273 的活跃情况，项目目前正集中精力修复 v2.0.0 预发布版本的遗留问题，距离下一个正式版 Release 可能还需要几轮稳定性测试。

## 3. 项目进展
今日共有 **32 个 PR 被合并或关闭**，主要进展集中在以下领域：

*   **并发与会话稳定性 (核心修复)**：
    *   PR #5723 [CLOSED]: 修复了 Agent 作用域的会话队列隔离问题，解决了多会话并发时的消息串扰。
    *   PR #5674 [CLOSED]: 修复了任务取消时前端卡在“处理中”状态的异步处理缺陷。
    *   PR #5719 [CLOSED]: 升级了 `@agentscope-ai/chat` 依赖至最新版，同步了上游的会话修复。
*   **渠道与生态增强**：
    *   PR #5722 [OPEN]: 针对飞书群聊丢失发送者信息的问题提出了修复方案，正在审查中。
    *   PR #5706 [CLOSED]: 优化了技能市场界面，增加了星标与下载数展示。
    *   PR #5700 [CLOSED]: 修复了 Telegram 频道“正在输入”指示器长时间卡死的问题。
*   **工具与记忆系统**：
    *   PR #5698 [OPEN]: 正在将内置工具 `run_tool_batch` 迁移适配至 AgentScope 2.0，并增加控制流支持。
    *   PR #5687 [CLOSED]: 新增了 `preserve_thinking` 开关，允许控制推理过程是否回传给模型，优化上下文成本。
    *   PR #5677 [CLOSED]: 修复了系统提示词中未加载技能元数据的问题，提升了 Agent 对技能的感知能力。

## 4. 社区热点
今日讨论最热烈的话题聚焦于**系统安全性与架构短板**：

*   **[Feature] 密钥脱敏与安全存储** (Issue #5705)
    *   **热度**：评论 4 条
    *   **分析**：用户 @wjt0321 深入分析了 v1.1.12 源码，指出当前环境变量回退机制覆盖不全且日志未脱敏，导致 API Key 泄露风险。该 Issue 引发了关于生产环境安全性的深入讨论，是社区目前的痛点集中点。
*   **[Feature] QwenPaw 能力短板分析** (Issue #5711)
    *   **热度**：评论 2 条
    *   **分析**：用户 @ZhaoX6666 对标竞品提出了架构级改进建议，涵盖工具调用效率、记忆机制缺陷等。此类战略级反馈为项目后续迭代提供了重要参考。
*   **[Bug] 飞书通道交互受阻** (Issue #5709, #5708)
    *   **分析**：多个 Issue 反馈飞书通道存在 Bot 消息误拦截、交互式卡片无法解析等问题，严重影响了多 Agent 协作场景下的用户体验。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，其中部分已有修复方案：

*   **严重 - 内存泄漏导致服务崩溃**
    *   Issue #5720: Windows 环境下 v1.1.12.post2 版本存在严重的内存泄漏（64分钟内从150MB涨至580MB），导致进程被杀且配置损坏。根因指向异步任务与 HTTP 会话未正确回收。
    *   *状态*：待确认/修复。
*   **严重 - Runtime 2.0 无限工具执行循环**
    *   Issue #5717: 当工具调用参数 JSON 被截断时，会导致无限循环执行。
    *   *状态*：待修复。
*   **中等 - 并发访问卡死**
    *   Issue #5701: 同一 Agent 多开页面并发访问会卡死。
    *   *状态*：**已修复** (关联 PR #5723)。
*   **中等 - 插件删除残留**
    *   Issue #5689: Remote SSH 插件删除后报错 ModuleNotFoundError。
    *   *状态*：待修复 (关联 PR #5695 正在优化插件清理逻辑)。

## 6. 功能请求与路线图信号
*   **模型容错与切换 (高信号)**：
    *   Issue #5718 请求增加模型报错后的自动切换/重试功能。与此对应，PR #5597 正在开发“全局/单 Agent LLM 模型降级机制”，该功能极有可能在下个版本纳入。
*   **Web 访问控制 (高信号)**：
    *   Issue #5715 请求增加 Web Console 的密码保护。鉴于安全类 Issue 的高优先级，预计社区将很快跟进此类基础认证功能。
*   **上下文管理优化**：
    *   Issue #5710 指出上下文压缩时缺乏锚点保护，导致关键指令被截断。这是 Agent 长期记忆能力的核心短板，预计将结合正在开发的 ReMe 0.4 (PR #5692) 进行改进。

## 7. 用户反馈摘要
*   **痛点**：
    *   **安全性焦虑**：用户对 `agent.json` 明文存储密钥及日志未脱敏感到担忧，认为这阻碍了生产环境部署。
    *   **多 Agent 协作体验差**：飞书群聊中 Bot 互 @ 无法触达、子 Agent 导致的主进程无限轮询（Issue #4873），反映了多 Agent 编排能力的不足。
    *   **前端交互细节**：桌面端无法用鼠标选择文本复制（Issue #5712），虽小但影响日常使用效率。
*   **满意点**：
    *   社区对 Runtime 2.0 的架构升级表示期待，尤其是技能元数据注入系统提示词 (PR #5677) 修复后，Agent 对工具的理解能力有望提升。

## 8. 待处理积压
*   **长期未决的子 Agent 轮询问题** (Issue #4873)：
    *   创建于 6 月 1 日，今日虽有更新但仍未解决。该问题导致飞书侧无法打断子 Agent 任务，属于严重体验缺陷，建议维护者优先排期。
*   **v2.0.0 预发布版本追踪** (Issue #5273)：
    *   作为 v2.0.0 的总控 Issue，依然处于 Open 状态，仍有多处 Bug 需收敛。

---
*数据来源：GitHub CoPaw/QwenPaw Repository (2026-07-02)*

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