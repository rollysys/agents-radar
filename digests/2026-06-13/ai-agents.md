# OpenClaw 生态日报 2026-06-13

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-06-13 04:02 UTC

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

# OpenClaw 项目动态日报 (2026-06-13)

## 1. 今日速览
OpenClaw 项目今日保持极高的活跃度，Issue 和 PR 更新数均达到 500 条，显示出社区与开发团队的高频互动。项目刚刚发布了 **v2026.6.6** 版本，重点强化了全链路的安全边界。尽管新开/活跃 Issue (411条) 远多于关闭的 Issue (89条)，表明用户反馈和问题报告激增，但团队仍合并了 144 个 PR，高效推进了多项核心功能修复与优化。整体来看，项目正处于快速迭代与安全架构重塑的关键阶段。

## 2. 版本发布
- **版本号**: v2026.6.6
- **更新重点**: **安全边界全面收紧**。
- **详细内容**:
    - 加强了转录、沙箱绑定、主机环境继承的安全管控。
    - 修复了 MCP stdio、Codex HTTP 访问、原生搜索策略中的潜在风险。
    - 强化了已删除代理 ACP 绕过防护、环回工具检查。
    - 提升了 Discord 审核与 Teams 群组操作的安全性。
    - **注意**: 此次更新涉及底层安全策略，涉及 `exec` 指令与环境隔离的变更，建议升级前详细测试现有 Skills 与沙箱配置。

## 3. 项目进展
今日共有 **144 个 PR 被合并/关闭**，主要进展集中在消息通道优化与会话状态修复：
- **Telegram 集成增强**: 合并了 [PR #92413](https://github.com/openclaw/openclaw/pull/92413)，引入了 Telegram Bot API 10.1 的富消息传输回退机制，显著提升了消息兼容性。
- **会话状态修复**: 合并了 [PR #90759](https://github.com/openclaw/openclaw/pull/90759)，修复了队列化用户消息合并导致陈旧回复的 Bug，提升了多轮对话的稳定性。
- **网关事件镜像**: 合并了 [PR #92216](https://github.com/openclaw/openclaw/pull/92216)，修复了隐藏通道无法接收辅助阶段事件的问题，改善了 UI 响应一致性。

## 4. 社区热点
今日讨论最热烈的问题集中在**隐私安全**与**移动端支持**：
- **[Issue #25592](https://github.com/openclaw/openclaw/issues/25592) [P1]**: **工具调用间的文本泄露**。该问题引发了 32 条评论讨论，Agent 在工具调用间产生的内部处理文本（如错误处理、思考过程）意外路由到了 Slack/iMessage 等消息通道，严重影响了用户体验和隐私。社区对此高度关注，等待官方修复方案。
- **[Issue #9443](https://github.com/openclaw/openclaw/issues/9443) [P2]**: **预编译 Android APK 请求**。用户 @AstridQing-AI 提议在 GitHub Release 中直接提供预编译的 Android APK，目前仅有源码对非开发用户不够友好，获 25 条评论支持。
- **[Issue #32473](https://github.com/openclaw/openclaw/issues/32473) [P2]**: **Control UI 设备身份验证回归**。用户在 Docker 环境下配置后遇到安全上下文错误，引发了关于部署复杂性的讨论（17 条评论）。

## 5. Bug 与稳定性
今日报告的严重 Bug 主要涉及内存泄漏和核心功能失效，需引起注意：
- **[P0] 内存泄漏导致 OOM 崩溃**: [Issue #91588](https://github.com/openclaw/openclaw/issues/91588) 报告 Gateway 进程 RSS 内存从 350MB 暴涨至 15.5GB，导致系统 OOM Killer 杀进程。目前**暂无修复 PR**，严重影响生产环境稳定性。
- **[P0] Memory Search 失效**: [Issue #91778](https://github.com/openclaw/openclaw/issues/91778) 指出 v2026.6.1 后 `memory_search` 索引元数据丢失，导致所有 Agent "失明"，无法检索记忆。**暂无修复 PR**。
- **[P1] WhatsApp 会话假死**: [Issue #84569](https://github.com/openclaw/openclaw/issues/84569) 描述了长模型调用导致 WhatsApp 会话停滞，消息永远无法送达。已有相关 PR [PR #92513](https://github.com/openclaw/openclaw/pull/92513) 正在尝试修复绑定问题。
- **[P1] Gemini 模型回归**: [Issue #38327](https://github.com/openclaw/openclaw/issues/38327) 报告 google-vertex/gemini-3.1-pro-preview 模型在 v2026.3.2 后出现对象转换错误。

## 6. 功能请求与路线图信号
- **移动端优先**: [Issue #9443](https://github.com/openclaw/openclaw/issues/9443) 的热度表明社区对移动端体验需求迫切。
- **企业级权限控制**: [Issue #13583](https://github.com/openclaw/openclaw/issues/13583) 提出“预响应强制钩子”，希望实现“硬门禁”而非仅靠 Prompt 引导，这对于金融/安全场景至关重要。
- **Cron 任务增强**: [Issue #18160](https://github.com/openclaw/openclaw/issues/18160) 建议为 Cron 任务增加直接执行模式，绕过 LLM 解释层以提高可靠性，这与 [PR #92422](https://github.com/openclaw/openclaw/pull/92422) 修复 Cron 运行状态的工作相呼应。

## 7. 用户反馈摘要
从 Issues 评论中提炼出的核心痛点：
- **资源消耗**: 多个用户反馈内存占用过高及长时运行后的性能衰减（[Issue #91588](https://github.com/openclaw/openclaw/issues/91588)）。
- **上下文一致性**: 用户抱怨 Agent 偶尔回复上一轮对话的内容（[Issue #32296](https://github.com/openclaw/openclaw/issues/32296)），以及 Bootstrap 文件加载逻辑混乱（[Issue #29387](https://github.com/openclaw/openclaw/issues/29387)）。
- **安全配置门槛**: 安全边界的收紧增加了配置难度，如非 HTTPS 环境下的 UI 访问受限（[Issue #32473](https://github.com/openclaw/openclaw/issues/32473)）和 Sandbox 权限问题（[Issue #31331](https://github.com/openclaw/openclaw/issues/31331)）。

## 8. 待处理积压
以下高优先级 Issue 长期未解决或讨论停滞，建议维护者关注：
- **[Issue #25592](https://github.com/openclaw/openclaw/issues/25592)**: 文本泄露问题自 2 月报告以来持续活跃，标签显示 `clawsweeper:needs-product-decision`，急需架构层面的决策。
- **[Issue #10687](https://github.com/openclaw/openclaw/issues/10687)**: 动态模型发现功能请求，当前静态模型列表难以跟上 OpenRouter 等平台的更新速度。
- **[Issue #20786](https://github.com/openclaw/openclaw/issues/20786)**: Telegram Business Bot 支持，作为高票功能请求目前仍未纳入开发计划。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比分析报告 (2026-06-13)

## 1. 生态全景
当前开源 AI 智能体生态正处于从"功能验证"向"生产可用"跨越的关键阶段。头部项目如 OpenClaw 和 LobsterAI 分别在**全链路安全加固**与**计算机使用**能力上取得突破，标志着智能体正从单纯对话向具备操作权限与安全边界的自主执行演进。同时，**记忆管理**与**多模态交互**（语音、视觉）成为各项目的通用痛点与迭代重心，而中小项目则通过深耕特定垂直场景（如 Hermes 的多网关接入、PicoClaw 的移动端适配）寻找差异化生存空间。

## 2. 各项目活跃度对比

| 项目名称 | Issues (新/活跃) | PRs (更新/合并) | 版本动态 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **500+** (极高) | **500+** (极高) / 144 merged | **v2026.6.6** (安全强化) | ⭐⭐⭐⭐⭐<br>社区互动极强，但新 Bug 激增，需警惕稳定性风险。 |
| **Hermes Agent** | 49 (高) | 48 / **2** (低) | 无 | ⭐⭐<br>严重积压，Issue 闭环率极低，维护压力巨大。 |
| **IronClaw** | 47 (高) | 50 / **17** (高) | 无 | ⭐⭐⭐⭐<br>架构重构期，代码迭代快，WebUI v2 推进顺利。 |
| **CoPaw (QwenPaw)** | 44 (高) | N/A / **10** (中) | v1.1.12b1 (预备) | ⭐⭐⭐⭐<br>集中修复回归 Bug，工程化建设完善，架构升级中。 |
| **NanoClaw** | N/A | 18 / **10** (高) | 无 | ⭐⭐⭐⭐<br>快速迭代，Signal 集成与灾备能力显著增强。 |
| **Zeroclaw** | 11 (中) | 37 / **5** (中) | 无 | ⭐⭐⭐⭐<br>响应迅速，核心阻塞 Bug 已有修复方案，状态健康。 |
| **PicoClaw** | 11 (中) | 37 / **3** (中) | Nightly Build | ⭐⭐⭐⭐<br>架构重构中，社区对权限与模型适配讨论热烈。 |
| **NanoBot** | N/A | 29 / **9** (中) | 无 | ⭐⭐⭐<br>专注稳定性修复，但合并代码引入了回归问题。 |
| **LobsterAI** | 1 (低) | 16 / **10** (中) | **v2026.6.12** | ⭐⭐⭐⭐<br>版本发布节奏稳定，重大功能 讲究质量优先。 |
| **NullClaw** | 低 | 3 / 0 (待合并) | 无 | ⭐⭐⭐<br>维护节奏平稳，侧重配置化与稳定性。 |
| **Moltis** | 3 (低) | 0 | 无 | ⭐⭐<br>活跃度较低，处于需求规划阶段。 |
| **TinyClaw / Others** | 0 | 0 | 无 | ⭐<br>静默状态。 |

## 3. OpenClaw 在生态中的定位

*   **核心优势与定位**：OpenClaw 是目前生态中**活跃度最高、商业化部署成熟度最完善**的项目。相较于 LobsterAI 侧重"Computer Use"的操作能力，OpenClaw v2026.6.6 展现出强烈的**安全合规**属性（收紧沙箱、审计日志），更符合企业级部署需求。其社区规模（Issue/PR 超 500 条）远超同类，显示出强大的网络效应和用户基础。
*   **技术路线差异**：
    *   vs **Hermes Agent**：OpenClaw 解决了 Hermes 正在苦苦挣扎的网关稳定性与内存泄露问题，架构更为稳健。
    *   vs **NanoBot/NanoClaw**：OpenClaw 在移动端支持（Android APK 需求）和全链路隐私保护上更为激进，而 NanoBot 系列目前更侧重于记忆机制与特定渠道的集成。
*   **当前挑战**：虽然迭代极快，但近期引入的 P0 级 Bug（OOM 崩溃、Memory Search 失效）表明其安全重构引入了新的不稳定性，需在快速迭代与质量把控间寻找平衡。

## 4. 共同关注的技术方向

1.  **记忆与上下文管理**：
    *   **现象**：NanoBot 的短期记忆丢失、OpenClaw 的 Memory Search 索引失效、NanoClaw 的消息去重逻辑错误。
    *   **趋势**：长上下文下的记忆归档策略与检索稳定性是所有项目的核心瓶颈，单纯依赖 LLM Context Window 已无法满足复杂任务需求，RAG 与记忆生命周期管理成为刚需。

2.  **本地模型与异构算力支持**：
    *   **现象**：NullClaw 报告 Ollama Gemma 输出截断，PicoClaw 修复 Gemini 兼容性，Zeroclaw 增加 Llama.cpp 路由支持。
    *   **趋势**：社区对"去 OpenAI 化"、低成本本地部署的诉求强烈，项目方需投入资源适配各类推理后端与模型 Schema。

3.  **权限与安全沙箱**：
    *   **现象**：OpenClaw 全面收紧安全边界，Moltis 提议 K8s 原生沙箱，PicoClaw 讨论群组权限分级，NanoClaw 修复权限绕过漏洞。
    *   **趋势**：智能体从"玩具"转向"工具"，对文件系统、Shell 命令及 API 调用的权限控制成为标配，沙箱隔离技术（如 Docker, K8s Kata）成为下一阶段竞争高地。

## 5. 差异化定位分析

*   **功能侧重**：
    *   **OpenClaw**：全栈式企业助手，强调安全与多平台接入。
    *   **LobsterAI**：操作型助手，率先落地 Computer Use (模拟操作电脑)。
    *   **Hermes Agent**：通信枢纽，强在多 IM 网关但弱在稳定性。
    *   **NanoBot/NanoClaw**：开发者友好型框架，侧重架构解耦、TTS 多模态与特定渠道集成。

*   **目标用户**：
    *   **OpenClaw/NullClaw**：企业用户、运维人员（需稳定、安全）。
    *   **PicoClaw/CoPaw**：极客用户、开发者（需新功能、可定制）。
    *   **IronClaw**：Web 端用户（侧重 UI 体验与交互流畅度）。

## 6. 社区热度与成熟度

*   **成熟稳定期**：**OpenClaw**（虽有波动但体量大）、**LobsterAI**（发布周期规律，质量可控）。
*   **快速迭代期**：**IronClaw**（重构 WebUI）、**NanoClaw**（快速合入 Signal/多模态功能）、**Zeroclaw**（高频修复阻塞问题）。
*   **动荡调整期**：**Hermes Agent**（Bug 积压严重，维护者压力巨大）、**NanoBot**（近期合并导致回归，需加强 CI）。
*   **萌芽/维护期**：**Moltis**（讨论架构）、**NullClaw**（维护模式）。

## 7. 值得关注的趋势信号

1.  **"静默失败"是体验杀手**：NanoClaw 和 Hermes 均报告了 Agent 无响应或静默丢弃消息的问题。在异步任务与长链路调用中，**确定性反馈**比单纯的正确率更重要，开发者应优先解决"假死"和"静默错误"。
2.  **多模态向端侧下沉**：LobsterAI 集成 ASR，NanoBot 集成 TTS，Moltis 提议本地 FunASR。语音交互正从云端 API 调用转向**本地化、低延迟**的集成方案，隐私与速度是核心驱动力。
3.  **前端体验决定天花板**：IronClaw 大力重构 WebUI v2，Zeroclaw 修复 Web Dashboard 阻塞，CoPaw 修复 UI 配置丢失。用户对智能体的操控重心正从 CLI/API 转移到 Web/Desktop GUI，**前端状态管理的一致性**直接影响用户留存。
4.  **Computer Use 开启新赛道**：LobsterAI 合并 Computer Use MVP，标志着开源智能体开始涉足操作系统级的自动化操作。这将是继 RAG 和 Multi-Agent 之后的下一个技术高地，同时也将带来更严峻的安全挑战。

**建议**：对于技术决策者，当前阶段建议优先关注 OpenClaw 的安全架构实践与 LobsterAI 的操作自动化能力；对于开发者，记忆管理优化与本地模型适配仍是贡献代码的高价值区域。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-06-13)

## 1. 今日速览
NanoBot 项目今日保持**极高的开发活跃度**，过去24小时内共有 29 个 PR 更新，显示出维护团队正在大力推进功能迭代与架构重构。核心重点集中在**提升系统稳定性**（修复消息处理与内存管理的多个关键 Bug）和**扩展企业级功能**（新增 TTS 支持与审计日志）。尽管无新版本发布，但多个关键修复已合并，显著增强了 Agent 在复杂上下文环境下的鲁棒性。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 9 个 PR 被合并或关闭，显著推进了以下领域：

*   **关键稳定性修复**：针对困扰社区已久的“孤立工具结果”问题，相关 Issues (#4203, #4006) 已随修复提交关闭。这修复了对话历史中因缺少对应 `tool_call_id` 导致的消息丢失和 API 报错问题。
*   **后台任务调度优化**：PR #4304 [CLOSED] 修复了 Cron 任务中子智能体启动后主进程过早退出的竞态条件，确保异步任务链的完整性。
*   **审计功能迭代**：PR #4318 和 #4319 的关闭标志着审计模块架构已定稿，目前正向 PR #4320 [OPEN] 演进，旨在为 Agent 行为提供更细粒度的可观测性。
*   **配置架构解耦**：PR #4314 正在推进配置模式与运行时的解耦，这将降低模块间的依赖复杂度，为后续插件化架构铺路。

## 4. 社区热点
今日社区讨论焦点集中在内存管理与功能扩展上：

*   **[Issue #4044] 短期记忆丢失问题**  
    链接: [HKUDS/nanobot Issue #4044](https://github.com/HKUDS/nanobot/issues/4044)  
    分析：这是目前最活跃的 Issue（5 条评论）。用户报告 Agent 在对话中出现“健忘”，经讨论锁定原因为上下文窗口压力导致的 Prompt 截断或内存归档逻辑过早触发。这反映了用户对长程对话稳定性的强烈需求。
*   **[PR #4316] 多提供商 TTS 支持集成**  
    链接: [HKUDS/nanobot PR #4316](https://github.com/HKSDS/nanobot/pull/4316)  
    分析：该 PR 引入了 OpenAI、Groq 和 ElevenLabs 的语音合成支持，极大地扩展了 Agent 的交互模态，是迈向多模态助手的重要一步。

## 5. Bug 与稳定性
今日报告了若干严重影响使用体验的 Bug，部分已有修复方案：

*   **[严重] 启动崩溃 (NameError)**  
    Issue: [#4322](https://github.com/HKUDS/nanobot/issues/4322)  
    状态: **OPEN**  
    详情: 合入主分支后 `context.py` 报错 `NameError: name 'session_key' is not defined`，导致 Agent 无法启动。这是典型的合并回归问题，需紧急处理。
*   **[严重] 上下文丢失**  
    Issue: [#4307](https://github.com/HKUDS/nanobot/issues/4307)  
    状态: **OPEN**  
    详情: 当上下文窗口设置较小时，合并操作会错误地清除 Agent 的最新回复，导致用户追问时 Agent 无记忆。
*   **[中等] API Token 统计归零**  
    Issue: [#4309](https://github.com/HKUDS/nanobot/issues/4309)  
    状态: **OPEN**  
    详情: `/v1/chat/completions` 接口始终返回 0 tokens，影响用户对成本的监控。
*   **[已修复] 孤立工具结果导致消息丢弃**  
    Issue: [#4203](https://github.com/HKUDS/nanobot/issues/4203)  
    状态: **CLOSED**  
    详情: 修复了 `find_legal_message_start` 函数在遇到异常工具调用结果时清空整个消息列表的严重逻辑缺陷。

## 6. 功能请求与路线图信号
*   **可观测性增强**：PR #4320 正在集成 `tools.audit` 配置，支持 Loguru、Webhook 等多种输出方式，显示出项目正由“玩具级”向“生产级”运维标准转型。
*   **WebUI 与配置对齐**：PR #4313 致力于消除 WebUI 设置面板与 `config.json` 之间的割裂，提升用户体验的一致性，这通常是正式版发布前的必要准备。
*   **多自定义提供商支持**：Issue #4305 虽已关闭，但其提出的“多自定义提供商”需求通过配置模板参数的方案已被纳入讨论，预示着未来的配置系统将更加灵活。

## 7. 用户反馈摘要
从 Issue 评论中提炼出以下核心痛点：
1.  **记忆机制不可靠**：用户对 Agent “上一秒问，下一秒忘”感到沮丧，希望改进上下文窗口管理与记忆归档策略。
2.  **API 兼容性细节**：用户依赖 OpenAI 兼容接口进行集成，Token 统计缺失等问题直接影响了对其作为后端服务的信任度。
3.  **合并代码的稳定性**：最近一次合并引入了启动崩溃回归问题，建议维护者加强 CI 测试覆盖。

## 8. 待处理积压
以下重要 PR 长期未合并，建议维护者关注：

*   **[PR #4256] 修复内存游标单调性**  
    链接: [HKUDS/nanobot PR #4256](https://github.com/HKUDS/nanobot/pull/4256)  
    分析：针对内存存储的底层逻辑修复，涉及数据一致性核心代码，建议尽快 Review 以解决相关的记忆丢失问题。
*   **[PR #4193] 内存生命周期测试框架**  
    链接: [HKUDS/nanobot PR #4193](https://github.com/HKUDS/nanobot/pull/4193)  
    分析：引入了内存生命周期的脚本化测试。鉴于近期记忆相关 Bug 频发，合并该测试框架对于防止回归至关重要。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-06-13)

## 1. 今日速览
Zeroclaw 项目今日保持极高的开发活跃度，Issue 更新 11 条，PR 更新高达 37 条，显示出社区与核心团队正在密集推进功能迭代与缺陷修复。项目重点聚焦于提升系统稳定性与用户体验，成功解决了原生 OpenAI Provider 超时配置失效等长期遗留问题。同时，针对近期引入的 Gateway Web Dashboard，团队迅速响应了会话管理、交互阻塞等关键反馈。架构层面上，关于 Agent Turn Engines 统一的 RFC 正在稳步推进，标志着项目正在进行深层的架构重构。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日共有 5 个 PR 合并或关闭，主要修复了配置持久化与 Provider 兼容性问题，显著提升了生产环境的可靠性：

*   **修复 OpenAI Provider 超时配置失效 ([PR #7504](https://github.com/zeroclaw-labs/zeroclaw/pull/7504) / [PR #7447](https://github.com/zeroclaw-labs/zeroclaw/pull/7447))**：解决了原生 OpenAI provider 硬编码 120s 超时导致慢速模型（如本地 Llama/vLLM）请求中断的严重问题，现已支持 `timeout_secs` 配置。相关 Issue [#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723) 已关闭。
*   **修复配置保存时的默认值丢失问题 ([PR #7532](https://github.com/zeroclaw-labs/zeroclaw/pull/7532))**：修复了 `Config::save()` 因 serde 默认值与 Struct Default 不一致导致的配置项静默翻转或丢失问题，保障了配置文件的稳定性。
*   **修复 Web Fetch 工具的安全绕过逻辑 ([PR #7424](https://github.com/zeroclaw-labs/zeroclaw/pull/7424))**：修正了 `allowed_private_hosts = ["*"]` 时 DNS 解析检查被跳过的逻辑，防止潜在的安全风险。
*   **修复 Gateway Web Dashboard 显示逻辑 ([PR #7529](https://github.com/zeroclaw-labs/zeroclaw/pull/7529))**：修复了当 Web Dashboard 未构建时仍错误打印访问 URL 的问题，减少了新用户的困惑。

## 4. 社区热点
今日社区关注点集中在底层架构重构与 Gateway 交互体验上：

*   **架构重构 RFC ([Issue #7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415))**：关于统一三个 Agent Turn Engines 的 RFC 引起了较高关注。维护者已确认该 RFC 将合并为单个 PR 实施，这将显著降低代码复杂度并提升运行时一致性。
*   **Gateway Web UI 交互痛点 ([Issue #7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542))**：用户报告 `ask_user` 工具在 Web Dashboard 中会立即失败，严重阻塞工作流。该 Issue 反映了用户对 Agent 交互能力的迫切需求，目前维护者已提交修复 PR。
*   **Docker 构建阻塞 ([Issue #7533](https://github.com/zeroclaw-labs/zeroclaw/issues/7533))**：Docker 构建因缺少 g++ 编译器失败，影响了部署体验，社区迅速定位并提供了解决方案。

## 5. Bug 与稳定性
今日报告了多个 S1 级（工作流阻塞）Bug，但维护者响应迅速，部分已提交修复：

*   **[S1] Gateway Web Dashboard `ask_user` 工具失效 ([Issue #7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542))**
    *   现象：Agent 调用 `ask_user` 时报错 "Channel closed before receiving a response"。
    *   状态：**已提交修复 PR** ([PR #7551](https://github.com/zeroclaw-labs/zeroclaw/pull/7551))，增加了对 WebSocket Approval Channel 的快速失败支持。

*   **[S1] Windows Quickstart 配置解析失败 ([Issue #7537](https://github.com/zeroclaw-labs/zeroclaw/issues/7537))**
    *   现象：Windows 10 下运行 `zeroclaw quickstart` 报错 "no map-keyed/list section at peer-groups"，导致无法创建 Agent。
    *   状态：待确认，影响新用户上手。

*   **[S1] Docker 构建失败 ([Issue #7533](https://github.com/zeroclaw-labs/zeroclaw/issues/7533))**
    *   现象：Dockerfile 缺少 C++ 编译器导致 `cargo web build` 失败。
    *   状态：**已提交修复 PR** ([PR #7534](https://github.com/zeroclaw-labs/zeroclaw/pull/7534))，添加了 g++ 依赖。

*   **[S1] macOS App 权限检测失败 ([Issue #7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527))**
    *   现象：macOS 15.7.7 上 App 无法检测授权，随后失去响应或窗口消失。
    *   状态：待确认。

## 6. 功能请求与路线图信号
用户对本地模型支持与交互体验提出了明确需求：

*   **Gateway UI 多会话支持 ([Issue #7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543))**：用户希望 Web UI 支持侧边栏多会话管理（新建/切换/重命名/删除），这是目前 Web UI 的核心缺失功能，有望在近期版本中纳入。
*   **Llama.cpp 模型路由器 ([Issue #7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539))**：用户建议增加 Llama.cpp 模型路由功能以便快速切换模型，显示项目在本地模型支持方面仍有优化空间。
*   **流式卡片消息支持 ([Issue #7531](https://github.com/zeroclaw-labs/zeroclaw/issues/7531))**：请求对 QQ/钉钉/飞书等渠道支持流式卡片消息，以减少用户等待焦虑，符合 AI 助手即时响应的趋势。

## 7. 用户反馈摘要
*   **本地模型支持反馈**：用户在 Issue #7539 中表达了对 Zeroclaw 支持“小型本地模型处理小任务”场景的喜爱，但也指出目前模型切换不够灵活。
*   **部署体验痛点**：Issue #7537 和 #7533 反映了 Windows 和 Docker 环境下的初次部署仍有障碍，影响了新用户的“快速开始”体验。
*   **交互阻塞**：Issue #7542 显示 `ask_user` 在 Web 端的失效直接阻断了用户的业务流程，用户对工具链的稳定性表示担忧。

## 8. 待处理积压
*   **v0.8.1 版本队列 ([Issue #6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970))**：作为 v0.8.1 的 Tracker，需关注其 PR 队列的合并进度，目前仍有大量待合并 PR。
*   **架构 RFC 待落地 ([Issue #7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415))**：虽然已确认实施方案，但作为高风险架构变更，需持续关注 PR #7540 的合并状态。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-06-13)

## 1. 今日速览
Hermes Agent 今日维持极高的社区活跃度，Issue 与 PR 更新量均达到 **50 条**。然而，项目出现了明显的“入大于出”现象：过去 24 小时内新开/活跃 Issue 达 49 条，仅关闭 1 条；PR 方面虽有 48 个待合并，但仅处理了 2 个（多为测试或无效提交）。这表明项目正处于功能快速迭代与 Bug 集中暴露期，维护者面临着较大的积压压力。社区关注点主要集中在 **多平台 Gateway（WhatsApp/Telegram）的稳定性**、**桌面端体验** 以及 **Provider 兼容性** 三个方面。

## 2. 版本发布
过去 24 小时无新版本发布。

## 3. 项目进展
尽管合并数量较少，但社区提交了大量高质量的修复 PR，正等待维护者 Review，项目整体正在向修复已知 Bug 和增强稳定性的方向迈进：

*   **修复合并**：
    *   PR [#44838](https://github.com/NousResearch/hermes-agent/pull/44838) (已关闭): 修复了会话修复后消息列表压缩导致 Assistant 消息丢失的问题，提升了会话连续性。
*   **关键待合并修复 (Pending PRs)**：
    *   PR [#45391](https://github.com/NousResearch/hermes-agent/pull/45391): 新增逻辑循环检测机制，防止智能体在无效工具调用上浪费 Token 和迭代次数。
    *   PR [#45387](https://github.com/NousResearch/hermes-agent/pull/45387): 修复 Telegram Gateway 中富文本表格被错误转换为列表的问题。
    *   PR [#45389](https://github.com/NousResearch/hermes-agent/pull/45389): 解决 Windows 平台上 `uv.exe` 频繁弹出黑框控制台窗口的问题，显著改善桌面端体验。
    *   PR [#45384](https://github.com/NousResearch/hermes-agent/pull/45384): 修复 macOS 用户安装环境下 node/npm 命令覆盖 Homebrew 环境的问题。

## 4. 社区热点
今日讨论最活跃的问题集中在核心网关路由与模型提供商配置上，反映了用户在多渠道部署时的痛点：

*   **[Bug] WhatsApp 群组消息路由失败** [Issue #18646](https://github.com/NousResearch/hermes-agent/issues/18646)
    *   **热度**：评论 4 条
    *   **分析**：这是一个严重的基础功能 Bug，`send_message` 忽略了 WhatsApp 群组目标，导致消息错发至个人频道。作为核心网关功能，该问题严重影响了多用户场景下的可用性，急需修复。
*   **[Bug] DeepSeek 提供商配置与端点兼容性** [Issue #17199](https://github.com/NousResearch/hermes-agent/issues/17199)
    *   **热度**：评论 4 条
    *   **分析**：用户在使用火山引擎等 OpenAI 兼容端点时遭遇模型名称强制规范化问题。反映了社区对 Hermes 支持更多非标准 LLM 后端的强烈需求。
*   **[Feature] 集成 Headroom-AI 进行上下文压缩** [Issue #39691](https://github.com/NousResearch/hermes-agent/issues/39691)
    *   **热度**：点赞 6 个
    *   **分析**：用户对现有的对话级压缩方案不满意，提议集成细粒度的工具输出压缩。这表明随着任务复杂度增加，Token 消耗和上下文管理已成为用户的核心痛点。

## 5. Bug 与稳定性
今日报告了多个严重级别的 Bug，部分已有社区修复方案：

*   **严重 - 数据损坏与崩溃**：
    *   **桌面端渲染器崩溃** [Issue #45388](https://github.com/NousResearch/hermes-agent/issues/45388)：发送带图片消息时触发 "Maximum call stack size exceeded"，导致应用完全不可用。
    *   **数据库 B-tree 损坏** [Issue #45383](https://github.com/NousResearch/hermes-agent/issues/45383)：`state.db` 在 WAL 检查点操作时频发损坏，威胁用户会话数据安全，**目前无修复 PR**。
    *   **Windows 桌面端反复闪退** [Issue #45226](https://github.com/NousResearch/hermes-agent/issues/45226)：与 GPU 进程异常有关。
*   **一般 - 功能缺陷**：
    *   **Anthropic OAuth 登录 404** [Issue #45250](https://github.com/NousResearch/hermes-agent/issues/45250)：使用了过期的 Token 端点，导致 Claude Pro/Max 用户无法登录。
    *   **Cron 任务编辑失败** [Issue #45335](https://github.com/NousResearch/hermes-agent/issues/45335)：`hermes cron edit` 命令无法正确识别任务。
    *   **BlueBubbles Webhook IPv4/IPv6 不匹配** [Issue #45308](https://github.com/NousResearch/hermes-agent/issues/45308)：macOS 上 `localhost` 解析优先导致附件投递失败。 -> **已有 Fix PR [#45381](https://github.com/NousResearch/hermes-agent/pull/45381)**。

## 6. 功能请求与路线图信号
*   **工具链升级** [Issue #40666](https://github.com/NousResearch/hermes-agent/issues/40666)：社区请求将默认安装脚本升级至 Python 3.13 和 Node 24 LTS，以保持技术栈现代化。
*   **桌面端看板集成** [Issue #41222](https://github.com/NousResearch/hermes-agent/issues/41222)：用户希望将 CLI 中的看板功能整合进桌面应用，减少工具切换频率。
*   **飞书 Markdown 表格渲染** [PR #45386](https://github.com/NousResearch/hermes-agent/pull/45386)：社区贡献了将 Markdown 表格转换为飞书交互卡片的功能，增强了企业级 IM 平台的可用性。

## 7. 用户反馈摘要
*   **Gateway 稳定性堪忧**：用户反馈 Telegram、WhatsApp、BlueBubbles 等网关均存在不同程度的问题（表格渲染错误、路由失败、Webhook 失效），多渠道接入是目前最大的痛点。
*   **配置灵活性不足**：用户在使用非官方兼容端点（如火山引擎、Gemini）时频繁受阻，强烈呼吁模型名称规范化逻辑更加宽松或可配置。
*   **桌面端体验待优化**：Windows 端的闪退和 UI 布局问题（如全屏下按钮移动）降低了用户满意度，社区对原生集成高级功能（如看板）的呼声较高。

## 8. 待处理积压
以下重要 Issue 和 PR 长期未得到有效解决或合并，建议维护者优先关注：

*   **PR [#41789](https://github.com/NousResearch/hermes-agent/pull/41789) (Security)**：隐藏 Tirith 发现的永久批准选项，涉及安全性策略，创建于 5 天前仍未合并。
*   **PR [#26051](https://github.com/NousResearch/hermes-agent/pull/26051) (Bug)**：修复上下文压缩失败时的数据丢失问题，创建于近一个月前，积压严重。
*   **Issue [#18646](https://github.com/NousResearch/hermes-agent/issues/18646)**：WhatsApp 群组路由 Bug 自 5 月 2 日开单至今未修复，属于核心功能阻断性问题。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-06-13)

## 1. 今日速览
PicoClaw 项目今日保持**高活跃度**开发态势，社区贡献与核心功能迭代并行推进。版本发布方面，新增 `v0.2.9-nightly.20260613` 自动化构建版本。代码合并方面，项目成功合入了关键的架构重构与多处错误处理修复，显著提升了系统的健壮性。社区层面，围绕 Telegram 权限分级与新模型适配的讨论热度上升，新增了多个高质量的功能请求与 Bug 报告，显示项目正处于快速演进与生态扩展期。

## 2. 版本发布
- **版本号**: `nightly: Nightly Build`
- **Tag**: `v0.2.9-nightly.20260613.c362114c`
- **说明**: 这是一个自动化发布的 Nightly 版本，包含了截至 `c362114c` 提交的最新代码。
- **注意事项**: 官方提示该版本可能不稳定，建议测试环境使用，生产环境请谨慎评估。
- **变更日志**: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. 项目进展
今日共有 **3 个 PR 被合并/关闭**，主要集中在架构优化与错误处理增强：

- **架构重构**: PR [#2551](https://github.com/sipeed/picoclaw/pull/2551) 已关闭。该 PR 实现了通道识别逻辑的标准化，将通道名称与提供商类型解耦，允许同一提供商的多实例运行。这是一项重要的底层重构，为未来支持更复杂的多账户/多通道场景奠定了基础。
- **稳定性修复**: PR [#3113](https://github.com/sipeed/picoclaw/pull/3113) 和 [#3112](https://github.com/sipeed/picoclaw/pull/3112) 均已合入。修复了通道配置序列化与工具调用参数 JSON 编组时的错误静默问题，防止了因异常数据导致的静默失败，提升了系统的可观测性。

*当前仍有 11 个 PR 处于待合并状态，涉及 NEAR AI 集成、图像压缩、Deltachat 网关等新特性，项目功能边界正在持续拓展。*

## 4. 社区热点
今日社区关注度最高的问题集中在**权限控制**与**协议完善**：

- **Issue [#3114](https://github.com/sipeed/picoclaw/issues/3114)** (新开): 用户提出 Telegram 渠道需按对话类型（私聊/群组/频道）进行权限分级控制。这反映了用户将 AI 智能体部署至公开或半公开社群时对安全边界的强烈需求，避免在群组中误触发高危操作（如 Shell 命令）。
- **Issue [#2984](https://github.com/sipeed/picoclaw/issues/2984)** (活跃): 请求为 Pico WebSocket 客户端增加显式的会话结束信号 (`turn.done`)。该问题获得了 2 个点赞，表明第三方客户端开发者对确定性的交互状态机有明确诉求。
- **Issue [#3012](https://github.com/sipeed/picoclaw/issues/3012)** (活跃): 关于 Evolution 模式开启后持续消耗 Token 的问题再次活跃，提示后台 Agent 自主运行时的资源控制仍是用户痛点。

## 5. Bug 与稳定性
今日报告了数个影响核心功能的 Bug，部分已有对应修复 PR：

1.  **[高] Gemini 3.5 Flash 兼容性问题** - Issue [#3111](https://github.com/sipeed/picoclaw/issues/3111)
    - 现象：使用 Gemini 3.5 Flash 执行工具时报 `400 Bad Request`，推测是新模型的推理机制导致 Schema 不兼容。
    - 状态：**待修复**。

2.  **[高] Evolution 模式 Token 异常消耗** - Issue [#3012](https://github.com/sipeed/picoclaw/issues/3012)
    - 现象：启用 Evolution 后每分钟持续消耗 Token。
    - 状态：长期未解决，今日再次活跃，需关注。

3.  **[中] Telegram 论坛话题回复错位** - Issue [#3110](https://github.com/sipeed/picoclaw/issues/3110)
    - 现象：在 Telegram Forum 模式下，机器人回复默认发往 #General 而非具体主题帖。
    - 状态：**待修复**。

4.  **[已修复] 历史记录损坏风险** - PR [#3115](https://github.com/sipeed/picoclaw/pull/3115) (Open)
    - 问题：工具输出的 Base64 字符串可能被错误识别为媒体附件，导致会话历史损坏。目前已有修复 PR 等待合并。

## 6. 功能请求与路线图信号
- **精细化的权限管理系统**: 结合 Issue #3114 与近期 PR #3109 的讨论，社区明确希望引入基于上下文（私聊 vs 群组）的权限分级。预计未来版本将增强 `allow_from` 配置的语义，支持更复杂的 ACL 规则。
- **多模态能力增强**: PR [#3117](https://github.com/sipeed/picoclaw/pull/3117) 正在修复媒体流路由至图像模型的问题，结合图像压缩 PR [#2964](https://github.com/sipeed/picoclaw/pull/2964)，项目正强化其多模态处理管线。
- **新提供商支持**: PR [#2917](https://github.com/sipeed/picoclaw/pull/2917) 提出的 NEAR AI Cloud 支持持续更新中，预示项目将兼容更多去中心化或特定领域的 AI 后端。

## 7. 用户反馈摘要
- **安全焦虑**: 用户在将 PicoClaw 接入即时通讯软件（如 Telegram）时，对权限溢出表示担忧，尤其是群组场景下的文件操作和命令执行，呼吁内置“沙箱”或分级权限。
- **模型适配滞后**: 随着大模型厂商（如 Google Gemini）快速迭代，PicoClaw 的适配层偶尔出现兼容性断层（如 #3111），用户期待更快的适配响应。
- **客户端集成需求**: 外部 WebSocket 客户端开发者希望获得更完善的生命周期事件通知（如 #2984），以便构建更可靠的上层应用。

## 8. 待处理积压
- **Issue #3012**: Evolution 模式下的无限循环 Token 消耗问题已被标记为 `[stale]` 但仍未解决，作为影响成本的核心问题，建议优先排期排查。
- **PR #2964 (图像压缩)**: 该 PR 创建于 5 月末，今日有更新但尚未合并，涉及视觉管线改动，建议维护者尽快 Review 以防冲突。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-13)

## 1. 今日速览
NanoClaw 今日呈现出极高的开发活跃度与社区关注度，尽管无新版本发布，但代码库发生了显著的合并潮与功能迭代。过去 24 小时内共有 **18 个 PR 更新**，其中 **10 个 PR 顺利合并**，主要集中在 Signal 通道集成、多模态支持、系统鲁棒性及数据备份恢复等核心功能上。与此同时，社区反馈了包括消息静默丢失、权限管控缺失在内的严重 Bug，且核心贡献者提交了多项关于容器安全加固与持久化记忆架构的重要 PR。整体来看，项目正处于 v2 版本后的快速迭代与安全性补强阶段，但在高并发与边缘情况下的稳定性仍需打磨。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日项目取得重大进展，共有 10 个 PR 被合并，涵盖了即时通讯集成、多模态能力和系统健壮性等多个维度：

*   **通讯与多模态增强**：
    *   PR [#2203](https://github.com/nanocoai/nanoclaw/pull/2203) 与 [#2040](https://github.com/nanocoai/nanoclaw/pull/2040) 全面实现了 Signal 的双向 Reaction（表情回复）支持与出站附件功能，完善了即时通讯体验。
    *   PR [#2072](https://github.com/nanocoai/nanoclaw/pull/2072) 为 Ollama 模型增加了多模态图片支持，允许通过 `images` 字段处理视觉输入。
    *   PR [#2071](https://github.com/nanocoai/nanoclaw/pull/2071) 与 [#2070](https://github.com/nanocoai/nanoclaw/pull/2070) 重构了附件处理架构，原生适配器现在可以通过主机路径直接处理文件，解决了 Signal 等通道的文件流转问题。
*   **系统鲁棒性与数据安全**：
    *   PR [#2084](https://github.com/nanocoai/nanoclaw/pull/2084) 引入了灾难恢复机制，支持每日项目快照备份及全量/单 Agent 恢复，填补了数据安全短板。
    *   PR [#2670](https://github.com/nanocoai/nanoclaw/pull/2670) 修复了“中毒恢复”导致的无限崩溃循环问题，提升了 Agent 会话的自愈能力。
    *   PR [#2692](https://github.com/nanocoai/nanoclaw/pull/2692) 优化了轮询循环，增加了对 5xx 瞬时错误的自动重试与通知，避免了 Agent 被 API 过载错误卡死。
*   **核心逻辑修复**：
    *   PR [#2277](https://github.com/nanocoai/nanoclaw/pull/2277) 修复了后续消息路由失效的问题。
    *   PR [#2267](https://github.com/nanocoai/nanoclaw/pull/2267) 解决了 Agent 间通信（A2A）回复路由错误的 Bug，确保多 Agent 会话的一致性。

## 4. 社区热点
今日社区讨论聚焦于**系统稳定性与静默失败**问题，反映出用户对生产环境可靠性的高度敏感：

*   **[Issue #2506](https://github.com/nanocoai/nanoclaw/issues/2506)**: **评论数最高 (3条)**。用户报告在连续对话间隔小于 60 秒或流式传输中有新消息到达时，Agent 响应会被静默丢弃。这是一个严重的用户体验问题，导致客户端超时且无报错，社区成员正在积极讨论去重机制的逻辑缺陷。
*   **[Issue #2711](https://github.com/nanocoai/nanoclaw/issues/2711)**: **安全性争议**。用户指出 `create_agent` 工具虽然文档标注为“仅限管理员”，但实际上任何容器均可调用，导致权限提升风险。这反映出社区对多租户环境下安全边界的关注。
*   **[Issue #2632](https://github.com/nanocoai/nanoclaw/issues/2632)**: **迁移困惑**。用户在尝试从 v1 迁移到 v2 时，发现 Telegram swarm 功能的状态模糊不清，引发了对项目版本路线图清晰度的讨论。

## 5. Bug 与稳定性
今日报告了多个影响生产环境的严重 Bug，部分已有修复方案，部分尚待解决：

*   **P0 - 数据丢失/静默失败**：
    *   **[Issue #2506](https://github.com/nanocoai/nanoclaw/issues/2506) [OPEN]**: `send_message` 去重逻辑导致 Agent 响应在特定时序下被静默丢弃。暂无关联 Fix PR。
    *   **[Issue #2751](https://github.com/nanocoai/nanoclaw/issues/2751) [CLOSED]**: 当云服务额度耗尽时，LLM 返回的合成消息被 SDK 误判为成功，导致用户收不到回复。该问题已随 Issue 关闭可能已确认修复或标记为已知限制。
*   **P1 - 安全漏洞**：
    *   **[Issue #2711](https://github.com/nanocoai/nanoclaw/issues/2711) [OPEN]**: `create_agent` 权限未设防，任意容器可创建 Agent 组。
*   **P1 - 稳定性/阻塞**：
    *   **[Issue #2668](https://github.com/nanocoai/nanoclaw/issues/2668) [OPEN]**: MCP 工具缺乏超时机制，单个工具卡死可阻塞整个会话长达 30 分钟。目前有相关 PR [#2753](https://github.com/nanocoai/nanoclaw/pull/2753) 正在处理 Hooks 问题，但核心超时问题仍需关注。
*   **已修复**：
    *   **[PR #2670](https://github.com/nanocoai/nanoclaw/pull/2670)**: 修复了损坏的会话记录导致 Agent 无限崩溃的问题。

## 6. 功能请求与路线图信号
结合今日新开的 PR 与 Issues，可以看出项目下一步的演进方向：

*   **安全加固**：PR [#2748](https://github.com/nanocoai/nanoclaw/pull/2748) 提议对容器进行权限剥离 (`cap-drop`, `no-new-privileges`)，PR [#2749](https://github.com/nanocoai/nanoclaw/pull/2749) 建议限制 Agent 动态安装 npm 包的发布时间（防供应链攻击）。这表明项目正在向企业级安全标准靠拢。
*   **架构扩展**：
    *   PR [#2745](https://github.com/nanocoai/nanoclaw/pull/2745) 提出了持久化记忆脚手架，旨在解决 Agent 记忆痛点。
    *   PR [#2746](https://github.com/nanocoai/nanoclaw/pull/2746) 引入了 Agent 能力接缝，暗示未来将支持更灵活的模块化能力注册。
*   **功能完善**：Issue #2632 的讨论显示社区对 Telegram Swarm 功能的强烈需求，可能促使维护者重新审视或明确 v2 的多机器人策略。

## 7. 用户反馈摘要
*   **痛点：静默失败最致命**。多处反馈（#2506, #2751）表明，相比于报错，用户更害怕 Agent “装死”或静默丢弃结果，这给生产调试带来了极大困难。
*   **痛点：权限边界模糊**。用户在使用 v2 新架构时，对于多 Agent 协作下的权限管控（#2711）和身份路由（#2632）感到困惑，期望有更明确的“守门人”机制。
*   **满意度**：用户对 Signal 等原生通道的快速迭代表示认可，但也指出了如 Discord 附件处理（#2752）等边缘场景仍需修补。

## 8. 待处理积压
*   **严重 Bug 待解决**：Issue [#2506](https://github.com/nanocoai/nanoclaw/issues/2506) 涉及的消息丢失问题涉及核心消息循环逻辑，影响范围广，建议维护者优先介入排查。
*   **安全漏洞待修复**：Issue [#2711](https://github.com/nanocoai/nanoclaw/issues/2711) 提出的权限绕过问题亟待确认，相关安全加固 PR [#2748](https://github.com/nanocoai/nanoclaw/pull/2748) 应尽快进入 Review 阶段。
*   **功能澄清**：Issue [#2632](https://github.com/nanocoai/nanoclaw/issues/2632) 关于 Telegram Swarm 的迁移疑问已开放多日，需要维护者更新文档或给予明确回复。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-06-13)

## 1. 今日速览
NullClaw 项目今日整体保持稳健的开发迭代节奏，核心开发者 @vernonstinebaker 集中提交了 3 个重要的修复类 PR，旨在提升系统的可配置性与运行稳定性。虽然今日无新版本发布，但这些待合并的 PR 表明项目正在积极解决日志输出、网络连接恢复及配置管理方面的技术债。社区方面，用户对 JIRA 集成的需求依然强烈，且有新的 Bug 反馈指向本地模型兼容性，项目活跃度处于健康水平。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
过去 24 小时内虽然没有 PR 被合并，但有 3 个关键的修复 PR 正处于待合并状态，预示着下一次更新将显著改善系统健壮性：

*   **配置灵活性提升**：PR [#949](https://github.com/nullclaw/nullclaw/pull/949) 提议将 `queue_mode` 设置移至 `config.json`，这将为 Agent 会话的初始队列模式提供更高的配置灵活性，减少了硬编码依赖。
*   **日志系统优化**：PR [#951](https://github.com/nullclaw/nullclaw/pull/951) 修复了 Agent 失败时错误地输出初始化日志的问题。这一改进将显著减少排查错误时的噪音，确保用户看到的错误信息更加精准。
*   **网络稳定性增强**：PR [#953](https://github.com/nullclaw/nullclaw/pull/953) 针对 Discord 网关连接进行了修复，增加了对停滞连接的重试机制和会话保留逻辑，这对于长连接场景下的稳定性至关重要。

## 4. 社区热点
今日社区讨论主要集中在功能扩展与集成需求上：

*   **JIRA 集成需求持续受关注**：Issue [#914](https://github.com/nullclaw/nullclaw/issues/914)（创建 JIRA 访问工具）于今日再次活跃。该 Issue 提议为 NullClaw 增加 JIRA 的安全认证与操作能力（读写 Issue、更新状态等）。这反映了用户希望将 NullClaw 更深度地融入企业级项目管理工作流的强烈诉求。
*   **本地模型兼容性讨论**：Issue [#952](https://github.com/nullclaw/nullclaw/issues/952) 虽然是 Bug 报告，但也引发了关于 Ollama 本地模型（如 Gemma）输出完整性的讨论。

## 5. Bug 与稳定性
今日报告了 1 个明确的 Bug，且开发者提交了 2 个针对系统稳定性的修复 PR：

*   **Bug (中)**：Issue [#952](https://github.com/nullclaw/nullclaw/issues/952) 报告使用 Ollama 运行 Gemma 模型时，Agent 返回的答案不完整。该问题涉及本地大模型的集成体验，目前尚无修复 PR，需关注后续是否为 Prompt 兼容性或流式传输处理问题。
*   **稳定性修复 (已提 PR)**：
    *   PR [#951](https://github.com/nullclaw/nullclaw/pull/951) 修复了 Agent 进程异常退出时的日志混乱问题，提升了故障排查效率。
    *   PR [#953](https://github.com/nullclaw/nullclaw/pull/953) 解决了 Discord Gateway Socket 关闭后的恢复问题，防止因网络波动导致的 Agent 掉线。

## 6. 功能请求与路线图信号
*   **企业级工具集成**：Issue [#914](https://github.com/nullclaw/nullclaw/issues/914) 提出的 JIRA 访问工具请求，表明项目正在向更复杂的 DevOps 和项目管理场景拓展。若该功能落地，NullClaw 将具备成为自动化运维助手的潜力。
*   **配置管理深化**：结合 PR [#949](https://github.com/nullclaw/nullclaw/pull/949) 对 `config.json` 的扩展，项目架构正朝着“高度可配置化”方向演进，这为未来支持更复杂的部署环境（如容器化、多环境切换）打下基础。

## 7. 用户反馈摘要
*   **痛点**：本地模型用户在使用 Ollama 时遭遇输出截断问题（Issue #952），表明项目在适配不同推理后端时仍需优化。
*   **场景**：用户强烈希望通过 NullClaw 实现 JIRA 的自动化操作（Issue #914），显示出目标用户群体已不满足于简单的对话交互，而是追求实际的生产力落地。

## 8. 待处理积压
*   **PR 积压**：目前有 3 个功能性/修复性 PR 处于 Open 状态（#949, #951, #953），建议维护者优先进行 Code Review 并合并，以便发布包含这些稳定性修复的新版本。
*   **Issue 积压**：Issue #952 关于本地模型输出不完整的问题尚无官方回应，建议维护者尽快确认是模型参数问题还是框架处理 Bug，以免影响开源模型用户的体验。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-06-13)

## 1. 今日速览
IronClaw 项目今日保持高度活跃的开发节奏，共处理 47 条 Issue 更新和 50 条 PR 更新，其中 18 条 Issue 被关闭，17 条 PR 已合并。核心重点集中在 "Reborn" WebUI v2 的稳定化以及线程管理架构的重构上。值得注意的是，针对线程阻塞机制的架构设计经历了快速迭代，从 #4812 的 DeferredBusy drain 机制转向了 #4838 提出的更简洁的显式拒绝反馈模式。此外，附件支持功能的 PR 堆栈正在积极推进中，显示出项目在多模态交互能力上的持续投入。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 17 个 PR 合并/关闭，显著推进了以下领域：

*   **架构重构与简化**：线程并发处理逻辑迎来重大调整。此前合并的 [PR #4812](nearai/ironclaw PR #4812) 实现了 DeferredBusy 消息的排空机制，但随即出现了更简化的设计方案 [PR #4838](nearai/ironclaw PR #4838)，后者选择直接拒绝并发请求并给予显式反馈，避免了后台重试的复杂性，标志着设计思路从“隐式重试”转向“显式反馈”。
*   **Reborn UI 质量提升**：修复了大量 WebUI v2 的交互问题，包括 [Issue #4703](nearai/ironclaw Issue #4703) 的模型 ID 保存错误、[Issue #4705](nearai/ironclaw Issue #4705) 的本地 SSO 失败，以及 [Issue #4733](nearai/ironclaw Issue #4733) 等多个 UI 细节问题（如链接跳转、会话恢复闪烁等），前端体验明显改善。
*   **Hook 与安全审计**：合并了 [PR #4562](nearai/ironclaw PR #4562)、[PR #4568](nearai/ironclaw PR #4568) 和 [PR #4569](nearai/ironclaw PR #4569)，增强了安全审计日志记录并强制执行了 Hook 调用的上限，提升了系统的安全性。
*   **测试基础设施**：[PR #4773](nearai/ironclaw PR #4773) 引入了 Reborn 运行时的录制/回放机制，旨在通过确定性测试减少手动 QA 负担。

## 4. 社区热点
今日讨论最活跃的 Issue 集中在架构设计与用户体验痛点：

*   **[Issue #4817](nearai/ironclaw Issue #4817) [评论: 3]**：针对 DeferredBusy 机制的后续设计讨论。社区正在探讨如何处理重试策略和启动时的清理逻辑，反映了团队对系统稳定性的深层次思考。
*   **[Issue #4825](nearai/ironclaw Issue #4825) [评论: 3]**：关于权限审批跨线程持久化的需求。用户希望在一个线程中授予的“始终允许”权限能应用到所有线程，目前已有对应的修复 PR [PR #4835](nearai/ironclaw PR #4835)。
*   **[Issue #4703](nearai/ironclaw Issue #4703) [评论: 3]**：模型选择器保存显示名称而非 ID 的 Bug 引起了较多关注，该问题已得到修复，解决了导致模型配置错误的痛点。

## 5. Bug 与稳定性
今日报告的关键 Bug 及修复状态如下：

*   **严重 [Issue #4762](nearai/ironclaw Issue #4762)**：工具工作流失败导致后续消息和活动顺序不一致。目前状态为 OPEN，尚无关联 Fix PR，需重点关注。
*   **高 [Issue #4824](nearai/ironclaw Issue #4824)**：cargo-deny CI 检查因 Postgres 相关的 RUSTSEC 安全公告失败，影响所有 PR 的 CI 通过率，需更新依赖。
*   **中 [Issue #4697](nearai/ironclaw Issue #4697)**：推理设置界面中活跃提供商状态显示不一致，用户无法确定实际使用的是哪个模型。
*   **中 [Issue #4823](nearai/ironclaw Issue #4823)**：删除运行中的会话时失败但 UI 无反馈，影响操作信心。
*   **已修复 [Issue #4705](nearai/ironclaw Issue #4705)**：本地环境 NEAR AI SSO 设置失败的问题已关闭。

## 6. 功能请求与路线图信号
*   **运行时上下文可见性**：[Issue #4828](nearai/ironclaw Issue #4828) 提出将连接的通道和运行起源作为运行时上下文切片暴露给模型，[PR #4836](nearai/ironclaw PR #4836) 已实现该功能，预计很快合并，将显著增强模型的情境感知能力。
*   **附件支持**：[PR #4738](nearai/ironclaw PR #4738) 及其依赖栈正在构建 WebChat v2 的完整附件上传与处理流程，这是通往多模态 AI 助手的关键一步。
*   **CI 优化**：[Issue #4813](nearai/ironclaw Issue #4813) 建议拆分长耗时测试任务，以加快 PR 反馈速度，符合项目提升工程效率的趋势。

## 7. 用户反馈摘要
*   **权限管理体验不佳**：用户反馈“始终允许”权限在开启新线程时失效（[Issue #4825](nearai/ironclaw Issue #4825)），迫使重复授权，影响流畅度。
*   **UI 细节亟待打磨**：多位用户指出 WebUI v2 存在会话闪烁、草稿丢失、删除无反馈等问题，显示出前端交互状态管理仍需加强。
*   **本地开发环境问题**：本地 SSO 登录失败（[Issue #4705](nearai/ironclaw Issue #4705)）曾阻碍开发者的快速上手，现已修复。

## 8. 待处理积压
*   **[PR #3708](nearai/ironclaw PR #3708)**：版本发布 PR 已开启近一个月，包含多个 crate 的破坏性更新，建议维护者尽快审查并合并，以释放新版本功能。
*   **[Issue #4697](nearai/ironclaw Issue #4697)**：提供商状态不一致问题已存在数日，影响用户对模型选择的信任度，需优先修复。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-13)

## 1. 今日速览
LobsterAI 项目今日处于**高度活跃**状态，核心开发团队集中合并了大量功能更新与修复代码，为 `2026.6.12` 版本的发布做好了准备。过去 24 小时内共有 16 条 PR 更新，其中 10 条已完成合并或关闭，显示出项目正在经历一轮密集的功能迭代与稳定性维护。最引人注目的进展是“Computer Use”功能的 MVP 版本合并及实时语音输入（ASR）功能的增强。此外，社区贡献的多个数据安全相关修复也被采纳，整体项目健康度良好，正向更智能的 Agent 交互能力迈进。

## 2. 版本发布
虽然官方 Releases 页面暂未发布新版本二进制文件，但代码库已完成 **`2026.6.12`** 版本的合并工作（见 PR #2158）。此次更新包含重大功能升级：
*   **新功能**：引入 **Computer Use MVP** 及内置工具包，支持 AI 模拟人类操作电脑；新增实时 ASR 语音输入支持；支持 HTML Artifact 公共分享模式及图片/SVG 分享。
*   **修复**：修正了文生图保存格式的后缀错误，优化了流式输出停止后的元数据显示。

## 3. 项目进展
今日项目进展显著，主要集中在功能集成与体验优化：
*   **重大功能合并**：PR [#2158](https://github.com/netease-youdao/LobsterAI/pull/2158) 将 `release/2026.6.11` 分支合并至主分支，标志着 **Computer Use** 能力正式进入主版本，大幅拓展了 Agent 的操作边界。
*   **运行时与体验修复**：PR [#2156](https://github.com/netease-youdao/LobsterAI/pull/2156) 将 Computer Use 运行时升级至 v1.0.7，增强了诊断能力；PR [#2157](https://github.com/netease-youdao/LobsterAI/pull/2157) 修复了生成图片保存时格式与扩展名不一致的问题，提升了文件系统的规范性。
*   **数据安全与交互体验**：合并了来自社区的 5 个关键 PR（#1473 - #1477），全面修复了弹窗关闭、会话切换时的**未保存确认机制**，有效防止了用户草稿内容的静默丢失，显著提升了数据安全性。

## 4. 社区热点
今日社区关注度主要集中在 API 兼容性与稳定性问题上：
*   **API 兼容性问题**：Issue [#1](https://github.com/netease-youdao/LobsterAI/issues/1) 是今日唯一活跃的 Issue，该 Issue 于今日关闭。该问题涉及 OpenAI API Type 设置下的 API 错误（400 error），反映了用户在对接第三方模型（如 MiniMax）时对消息格式兼容性的强烈需求。维护者关闭该 Issue 可能意味着相关兼容性问题已在最新版本中得到修复或确认了修复方案。
*   **社区贡献采纳**：多个由社区开发者（@MaoQianTu, @linlihua 等）提交的关于防止数据丢失和修复 UI 逻辑的 PR 在今日被集中合并，体现了项目团队对社区反馈的积极回应。

## 5. Bug 与稳定性
根据 PR 与 Issue 状态，今日披露的 Bug 及修复情况如下：

*   **[严重] 网关无限重启导致应用瘫痪**：
    *   问题：PR [#1446](https://github.com/netease-youdao/LobsterAI/pull/1446) 指出 OpenClaw 网关启动失败后会陷入无限重启循环，导致整个应用不可用。
    *   状态：**待合并**。该 PR 提供了修复方案，建议维护者优先 Review 并合并。
*   **[中等] 技能注入逻辑漏洞**：
    *   问题：PR [#1453](https://github.com/netease-youdao/LobsterAI/pull/1453) 显示，用户停用技能后，该技能的 Prompt 仍会被注入对话，导致隐私泄露或逻辑混乱。
    *   状态：**待合并**。
*   **[轻微] 快捷键冲突检测缺失**：
    *   问题：PR [#1456](https://github.com/netease-youdao/LobsterAI/pull/1456) 指出设置相同快捷键时无冲突提示。
    *   状态：**待合并**。
*   **[已修复] 多媒体与交互问题**：
    *   已通过 PR [#2157](https://github.com/netease-youdao/LobsterAI/pull/2157) 修复图片保存格式错误。
    *   已通过 PR [#2155](https://github.com/netease-youdao/LobsterAI/pull/2155) 修复实时 ASR 重复启动的竞态问题。

## 6. 功能请求与路线图信号
*   **Computer Use 能力**：PR #2158 的合并表明项目正从纯对话式 AI 向**Agent 执行能力**转型，未来可能支持更多操作系统级的自动化操作。
*   **定时任务管理优化**：PR [#1449](https://github.com/netease-youdao/LobsterAI/pull/1449) 提出了“定时任务分组折叠”的需求，这反映了用户在使用 LobsterAI 进行自动化工作流时，对**历史记录管理**有更高的组织要求，预计该功能将在后续版本中被纳入。
*   **国际化完善**：PR [#1448](https://github.com/netease-youdao/LobsterAI/pull/1448) 修复了部分界面的英文硬编码问题，显示项目正积极推进**多语言支持**的完善工作。

## 7. 用户反馈摘要
从 Issue #1 的讨论中可以看出：
*   **痛点**：用户在配置非 OpenAI 官方 API（如 MiniMax）时，常遇到参数格式不兼容的问题（`invalid params`），这表明用户对**多模型统一接入**有强烈需求，且目前的错误提示（400 Error）对排查问题不够友好。
*   **场景**：用户倾向于在 LobsterAI 中集成已有的第三方 API Key，希望实现“一个客户端管理多个后端模型”的使用场景。

## 8. 待处理积压
以下重要 PR 长期未合并（均创建于 2026-04-03，距今超过 2 个月），建议维护者重点关注：
1.  **PR [#1446](https://github.com/netease-youdao/LobsterAI/pull/1446)**：修复网关无限重启循环。这是一个影响应用稳定性的严重 Bug，应优先处理。
2.  **PR [#1453](https://github.com/netease-youdao/LobsterAI/pull/1453)**：修复停用技能仍被注入的问题。涉及 Prompt 组装逻辑的核心正确性。
3.  **PR [#1449](https://github.com/netease-youdao/LobsterAI/pull/1449)**：定时任务分组展示。这是一个极佳的 UX 改进，对于重度自动化用户非常有价值。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-06-13)

## 1. 今日速览
Moltis 项目今日整体活跃度中等，主要表现为社区在功能规划与问题排查层面的讨论，代码提交端相对静默。过去 24 小时内无新版本发布与 PR 合并，但 Issues 板块新增/活跃了 3 条关键讨论。社区关注焦点从基础功能延伸至企业级安全隔离与高性能语音交互，显示出项目正从初期建设向深度优化转型。

## 2. 版本发布
无。

## 3. 项目进展
今日无合并的 Pull Request，代码库无实质性代码变更。项目处于需求评审与 Bug 复现阶段，暂未向前迈出实质性的一步，但高质量的 Issue 讨论为后续开发积累了明确的方向。

## 4. 社区热点
今日讨论热度最高的 Issue 为 **[Issue #1115](https://github.com/moltis-org/moltis/issues/1115)**。
*   **链接**: [moltis-org/moltis Issue #1115](https://github.com/moltis-org/moltis/issues/1115)
*   **诉求分析**: 该 Issue 报告了 Fastmail MCP 授权失败的问题，拥有今日最高的评论数（2条）。这表明用户在集成第三方邮件服务时遇到了阻碍，MCP（Model Context Protocol）生态的兼容性是当前用户的痛点之一。

此外，**[Issue #1118](https://github.com/moltis-org/moltis/issues/1118)** 同样引发了核心关注。
*   **链接**: [moltis-org/moltis Issue #1118](https://github.com/moltis-org/moltis/issues/1118)
*   **诉求分析**: 作者提出了构建 Kubernetes-native sandbox backend 的构想，旨在解决 Agent 执行不可信代码的安全隔离问题。这反映了部分用户将 Moltis 应用于生产环境的强烈意愿，安全性与隔离性成为进阶用户的核心诉求。

## 5. Bug 与稳定性
今日报告了 1 个明确的 Bug，目前尚无修复 PR：
*   **[Bug] Fastmail MCP Authorisation** - **[Issue #1115](https://github.com/moltis-org/moltis/issues/1115)**
    *   **严重程度**: 中等（影响特定集成功能的正常使用）。
    *   **状态**: Open，用户已确认使用最新版本并进行了预检。
    *   **详情**: 用户在使用 Fastmail 进行 MCP 授权时遇到障碍，涉及认证流程的兼容性问题。

## 6. 功能请求与路线图信号
今日收到 2 个高价值的功能请求，预示了项目可能的演进方向：
1.  **Kubernetes 原生沙箱后端** - **[Issue #1118](https://github.com/moltis-org/moltis/issues/1118)**
    *   **分析**: 建议增加支持 `runtimeClassName` 的 Kubernetes 沙箱后端，以支持 Kata Containers/gVisor 等运行时。这是项目迈向企业级安全标准的重要信号，若被采纳，将极大提升 Moltis 在云原生环境下的部署安全性。
2.  **集成 FunASR/SenseVoice 本地语音引擎** - **[Issue #1102](https://github.com/moltis-org/moltis/issues/1102)**
    *   **分析**: 用户请求集成阿里开源的 FunASR 或 SenseVoice 作为本地 STT（语音转文字）引擎。用户特别强调了其“超快”（10s 音频仅需 70ms）和原生流式传输特性。这反映了用户对低延迟、高隐私保护的本地语音交互有强烈需求，可能成为语音模块的重要优化方向。

## 7. 用户反馈摘要
*   **安全焦虑**: 用户不再满足于简单的容器隔离，开始探讨利用 K8s + Kata Containers 实现虚拟机级别的隔离，表明用户对 Agent 执行环境的不可信代码有较强的安全顾虑。
*   **性能追求**: 在语音交互方面，用户对延迟极其敏感，倾向于选择 SenseVoice 等毫秒级响应的引擎，而非传统的云服务 API。
*   **生态兼容**: 用户积极尝试 MCP 协议连接各类服务（如 Fastmail），但当前生态的稳定性尚需磨合。

## 8. 待处理积压
基于今日数据，以下问题需维护者关注：
*   **[Issue #1115](https://github.com/moltis-org/moltis/issues/1115)** (Fastmail 授权问题) 已创建两日且有新的活跃讨论，目前尚无官方修复方案，建议优先排查是否存在 MCP 标准实现层面的兼容性缺陷。
*   **[Issue #1102](https://github.com/moltis-org/moltis/issues/1102)** (FunASR 集成) 自 6月4日 创建以来持续受关注，今日再次活跃，建议维护者评估引入新 STT 引擎的工作量与优先级。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# 📅 2026-06-13 QwenPaw 项目动态日报

## 1. 今日速览
QwenPaw 项目今日保持高度活跃，过去 24 小时内 Issues 与 PR 更新总数达 44 条，社区互动频繁。开发团队主要精力集中在修复 v1.1.11 版本引入的 UI 回归问题（如记忆配置丢失、Session 重定向错误），并推进了 CI/CD 发布验证流程的增强。同时，关于 AgentScope 2.0 的迁移讨论仍在持续，Agent OS Driver 等核心架构重构 PR 正在审查中，显示出项目正处于功能迭代与架构优化的双重推进期。

## 2. 版本发布
无新版本发布。值得注意的是，PR #5159 已将版本号更新至 `1.1.12b1`，预示着下一个 Beta 版本即将发布。

## 3. 项目进展
今日共有 10 个 PR 被合并或关闭，显著提升了系统稳定性：
*   **前端体验修复**：合并 [PR #5144](https://github.com/agentscope-ai/QwenPaw/pull/5144)，解决了“向量模型自动记忆搜索配置丢失”问题；合并 [PR #5147](https://github.com/agentscope-ai/QwenPaw/pull/5147)，修复了 Coding Mode 刷新后 Session 重置的 Bug；合并 [PR #5154](https://github.com/agentscope-ai/QwenPaw/pull/5154)，优化了记忆搜索工具结果的 UI 渲染。
*   **工程化建设**：合并 [PR #5121](https://github.com/agentscope-ai/QwenPaw/pull/5121)，引入了 Release Verification Gate，确保构建产物通过 E2E 验证后才发布，提升了发布质量。
*   **安全与功能**：合并 [PR #5022](https://github.com/agentscope-ai/QwenPaw/pull/5022)，增加了对 Agent workspace 路径的校验，防止备份路径穿越风险；合并 [PR #4969](https://github.com/agentscope-ai/QwenPaw/pull/4969)，为 Skill 批量下载增加了 Tag 过滤功能。

## 4. 社区热点
*   **[Issue #5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)**：Agent 生成的定时任务无法触发。该 Issue 已积累 11 条评论，用户反馈虽然任务创建无异常，但到时间点无法执行，严重影响了自动化场景的使用，目前仍处于 Open 状态，亟待官方回应。
*   **[Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)**：迁移后端至 AgentScope 2.0。作为 Breaking Change 讨论帖，已有 10 条评论，社区对此次重大架构升级表示关注，期待新版本能带来更好的性能与 API 规范。

## 5. Bug 与稳定性
今日报告了若干功能性故障和回归问题：
*   **严重**：
    *   [Issue #5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)：定时任务功能失效，无法自动触发。
    *   [Issue #5163](https://github.com/agentscope-ai/QwenPaw/issues/5163)：v1.1.11.post2 版本导致 Gemini Tool Calling 功能回归性失效（v1.1.10 正常）。
    *   [Issue #5155](https://github.com/agentscope-ai/QwenPaw/issues/5155)：Docker 环境下 v1.1.11 出现自动宕机重启。
*   **一般**：
    *   [Issue #5161](https://github.com/agentscope-ai/QwenPaw/issues/5161)：长对话后前端无响应，疑似上下文处理瓶颈。
    *   [Issue #5145](https://github.com/agentscope-ai/QwenPaw/issues/5145)：UI 显示了本应折叠的执行详情，干扰用户视线。
*   **已修复/已关闭**：
    *   [Issue #5137](https://github.com/agentscope-ai/QwenPaw/issues/5137)：向量模型配置保存丢失（已通过 PR #5144 修复）。
    *   [Issue #5098](https://github.com/agentscope-ai/QwenPaw/issues/5098)：记忆搜索结果 UI 显示异常（已通过 PR #5154 修复）。

## 6. 功能请求与路线图信号
*   **多智能体协作**：[Issue #5139](https://github.com/agentscope-ai/QwenPaw/issues/5139) 建议增加 Agent Team/Swarm 协作能力，对标 WorkBuddy 和 JiuwenSwarm，这是当前 AI Agent 领域的热点方向。
*   **渠道扩展**：[Issue #5152](https://github.com/agentscope-ai/QwenPaw/issues/5152) 请求支持 Slack 频道；[Issue #5167](https://github.com/agentscope-ai/QwenPaw/issues/5167) 提出了飞书 CardKit 在长回复场景下的流式优化建议。
*   **模型与生态**：[Issue #5156](https://github.com/agentscope-ai/QwenPaw/issues/5156) 希望支持 Kimi-for-coding 的本地化接入。
*   **底层架构**：正在审查中的 [PR #5067](https://github.com/agentscope-ai/QwenPaw/pull/5067) 提出 Agent OS Driver 抽象层，旨在统一 MCP/A2A 等外部协议，这可能是下一阶段架构升级的重点。

## 7. 用户反馈摘要
*   **痛点**：部分用户遭遇 v1.1.11 版本稳定性问题（如 Docker 崩溃、Gemiti 调用失败），前端 UI 在长对话或特定渲染（如数学根号 Issue #5143/5148）时表现不佳。
*   **场景**：用户越来越依赖 QwenPaw 进行复杂的自动化任务（如定时任务），并期望它能作为团队协作的中枢（Swarm 能力）。
*   **评价**：用户对飞书等渠道的支持表示认可，但对流式卡片的加载速度提出了更高要求；同时对 AgentScope 2.0 的升级持乐观期待态度。

## 8. 待处理积压
*   **[Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)**：AgentScope 2.0 迁移计划已提出多日，需关注具体实施时间表。
*   **[PR #4622](https://github.com/agentscope-ai/QwenPaw/issues/4622)**：DataPaw 数据分析插件已提交超过一周，仍在审查中，社区对此类增强技能插件有较高需求。

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